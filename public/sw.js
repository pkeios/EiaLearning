// Service worker: permite estudiar sin conexión.
// Responde desde la caché si puede y, en paralelo, baja la versión nueva: la próxima visita ya ve el contenido actualizado.
const CACHE = 'curso-v3';
const ARCHIVOS = ['./', 'index.html', 'curso.html', 'styles.css', 'app.js', 'contenido.js', 'glosario.js', 'vendor/qrcode.js', 'manifest.webmanifest', 'icono-192.png', 'icono-512.png', 'chicos/', 'chicos/estilos.css', 'chicos/ingles.html', 'chicos/ingles-unidades.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(claves => Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  // Cursos para chicos: primero la versión nueva, y la copia guardada solo sin internet. Una copia vieja acá confunde (por ejemplo, un PDF desactualizado).
  if (new URL(e.request.url).pathname.includes('/chicos/')) {
    e.respondWith(fetch(e.request).then(async r => {
      if (r.ok) await (await caches.open(CACHE)).put(e.request, r.clone());
      return r;
    }).catch(() => caches.match(e.request).then(enCache => enCache || Response.error())));
    return;
  }
  const red = fetch(e.request).then(async r => {
    if (r.ok) {
      const cache = await caches.open(CACHE), anterior = await cache.match(e.request);
      await cache.put(e.request, r.clone());
      // Si el archivo cambió desde la última visita, avisamos a la página para que ofrezca recargar.
      const firma = x => x && (x.headers.get('etag') || x.headers.get('last-modified'));
      if (firma(anterior) && firma(anterior) !== firma(r)) (await self.clients.matchAll()).forEach(c => c.postMessage('contenido-nuevo'));
    }
    return r;
  });
  e.waitUntil(red.catch(() => {}));
  e.respondWith(caches.match(e.request).then(enCache => enCache || red));
});
