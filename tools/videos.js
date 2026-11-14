// Controla que cada video de YouTube de un curso exista y se pueda insertar (el oEmbed de YouTube da 401 si el dueño no deja insertarlo y 404 si no existe).
// Uso: node tools/videos.js <carpeta>   (sin carpeta: el curso principal). Necesita internet: no corre en el CI.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'public', process.argv[2] || '', 'contenido.js'), 'utf8'), ctx);
const videos = ctx.window.TEMARIO.flatMap(m => m.lecciones.filter(l => l.video).map(l => ({ m: m.id, l: l.titulo, ...l.video })));
(async () => {
  let mal = 0;
  for (const v of videos) {
    const r = await fetch('https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=' + v.id);
    const titulo = r.ok ? (await r.json()).title : '';
    if (!r.ok) mal++;
    console.log(`${r.ok ? 'ok ' : 'MAL'} ${r.status} ${v.m} · ${v.l} · ${v.id} · ${titulo || v.t}`);
  }
  console.log(`${videos.length} videos, ${mal} con problemas`);
  process.exit(mal ? 1 : 0);
})();
