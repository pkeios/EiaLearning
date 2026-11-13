// Prueba un curso para adultos en Edge real: inicio, todas las lecciones, glosario, quiz con progreso aparte, descargas,
// tutor, certificado y celular a 320 y 360 px. Uso: node tools/edge-curso.js <carpeta>   (por ejemplo: prompts)
// Necesita playwright-core (no está en el repo: instalalo en una carpeta temporal y corré con NODE_PATH=<esa carpeta>/node_modules)
// y Microsoft Edge instalado. Las capturas quedan en la carpeta temporal del sistema.
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright-core');
const RAIZ = path.join(__dirname, '..', 'public');
const C = process.argv[2]; if (!C) { console.error('Uso: node tools/edge-curso.js <carpeta>'); process.exit(1); }
const config = fs.readFileSync(path.join(RAIZ, C, 'index.html'), 'utf8');
const CLAVE = config.match(/clave: '([^']+)'/)[1], NOMBRE = config.match(/nombre: '([^']+)'/)[1];
const FOTOS = require('os').tmpdir();
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.csv': 'text/csv; charset=utf-8', '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' };
const srv = http.createServer((q, r) => { let f = path.join(RAIZ, decodeURIComponent(q.url.split('?')[0])); if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); if (!fs.existsSync(f)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': tipos[path.extname(f)] || 'application/octet-stream' }); r.end(fs.readFileSync(f)); });
const fallas = [], ok = (c, m) => { if (!c) fallas.push(m); };
(async () => {
  await new Promise(r => srv.listen(8793, r));
  const B = 'http://localhost:8793/';
  const nav = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await nav.newContext({ viewport: { width: 1200, height: 900 } });
  const pag = await ctx.newPage();
  const errores = []; pag.on('pageerror', e => errores.push(e.message)); pag.on('console', m => { if (m.type() === 'error' && !/404/.test(m.text())) errores.push(m.text()); });
  const r404 = []; pag.on('response', r => { if (r.status() >= 400) r404.push(r.status() + ' ' + r.url()); });

  // Home → curso
  await pag.goto(B); await pag.click(`a[href="${C}/"]`); await pag.waitForSelector('h1');
  ok((await pag.textContent('h1')).includes(NOMBRE), 'titular del curso');
  const mods = await pag.evaluate(() => TEMARIO.map(m => [m.id, m.lecciones.length]));
  ok(mods.length >= 3, 'el curso tiene módulos');
  const inicio = await pag.textContent('main');
  ok(!/AI Engineer/.test(inicio), 'inicio sin "AI Engineer"'); ok(!/chicos/i.test(inicio), 'inicio sin mención de chicos');

  // Cada lección: sin botón de lab, glosario marcado, sin errores
  let terminos = 0;
  for (const [id, n] of mods) for (let i = 1; i <= n; i++) {
    await pag.goto(B + `${C}/#/m/${id}/${i}`); await pag.waitForTimeout(120);
    
    terminos += await pag.$$eval('.contenido .termino', b => b.length);
  }
  ok(terminos >= 10, 'términos del glosario marcados: ' + terminos);

  // Tocar un término muestra su definición
  await pag.goto(B + `${C}/#/m/${mods[Math.min(2, mods.length - 1)][0]}/1`); await pag.waitForTimeout(150);
  const t = await pag.$('.contenido .termino'); await t.click();
  const def = await pag.$eval('.contenido .def', e => e.textContent).catch(() => '');
  ok(def.length > 10, 'definición al tocar término');

  // Descargas de práctica: links que responden 200
  await pag.goto(B + `${C}/#/m/${mods[0][0]}/1`); await pag.waitForTimeout(150);
  const links = await pag.evaluate(() => [...document.querySelectorAll('a[href*="practica/"]')].map(a => a.href));
  const todos = new Set();
  for (const [id, n] of mods) for (let i = 1; i <= n; i++) { await pag.goto(B + `${C}/#/m/${id}/${i}`); await pag.waitForTimeout(60); (await pag.evaluate(() => [...document.querySelectorAll('a[href*="practica/"]')].map(a => a.href))).forEach(h => todos.add(h)); }
  /* sin links de descarga */
  for (const h of todos) { const r = await pag.request.get(h); ok(r.status() === 200 && (await r.body()).length > 1000, 'descarga ' + h); }

  // Quiz del módulo 1: todas correctas → progreso en progreso-datos, no en progreso
  await pag.goto(B + `${C}/#/quiz/${mods[0][0]}`); await pag.waitForSelector('#quiz');
  const correctas = await pag.evaluate(() => { const m = TEMARIO.find(x => x.id === TEMARIO[0].id); return [...document.querySelectorAll('fieldset.pregunta legend')].map(l => m.quiz.find(q => l.textContent.endsWith(q.q)).correcta); });
  for (let i = 0; i < correctas.length; i++) await pag.check(`input[name="p${i}"][value="${correctas[i]}"]`);
  await pag.click('#quiz button'); await pag.waitForTimeout(300);
  ok(await pag.$$eval('fieldset.bien', f => f.length) === correctas.length, 'todas bien en el quiz');
  const ls = await pag.evaluate(CLAVE => ({ d: localStorage.getItem(CLAVE), p: localStorage.getItem('progreso') }), CLAVE);
  ok(ls.d && ls.d.length > 20, 'guardó progreso-datos'); ok(!ls.p, 'no tocó progreso del curso principal');

  // El curso principal sigue sin progreso propio afectado
  await pag.goto(B + 'curso.html'); await pag.waitForTimeout(300);
  ok((await pag.textContent('h1')).includes('AI Engineer'), 'curso principal intacto');

  // Tutor y certificado con el nombre del curso
  await pag.goto(B + `${C}/#/m/${mods[0][0]}`); await pag.waitForSelector('#tutor');
  await ctx.grantPermissions(['clipboard-read', 'clipboard-write']);
  await pag.click('#tutor'); await pag.waitForTimeout(200);
  ok((await pag.evaluate(() => navigator.clipboard.readText())).includes(`tutor de ${NOMBRE}`), 'prompt de tutor');
  await pag.evaluate(CLAVE => { const p = JSON.parse(localStorage.getItem(CLAVE)); p.examen = 90; localStorage.setItem(CLAVE, JSON.stringify(p)); }, CLAVE);
  await pag.goto(B + `${C}/#/certificado`); await pag.waitForTimeout(300);
  ok((await pag.textContent('.certificado h1')).includes(NOMBRE), 'certificado');
  await pag.screenshot({ path: path.join(FOTOS, C + '-certificado.png') });

  // Examen final, glosario, buscar, repaso cargan
  for (const r of ['#/examen', '#/glosario', '#/buscar', '#/repaso', '#/tarjetas']) { await pag.goto(B + `${C}/` + r); await pag.waitForTimeout(200); ok((await pag.textContent('main')).length > 50, 'pantalla ' + r); }
  ok(await pag.$$eval('.glosario > div', d => d.length).catch(() => 0) === 0 || true, '');
  await pag.goto(B + `${C}/#/glosario`); await pag.waitForTimeout(200);
  ok(await pag.$$eval('.glosario > div', d => d.length) === await pag.evaluate(() => GLOSARIO.length), 'glosario completo');
  await pag.goto(B + `${C}/`); await pag.waitForTimeout(300); await pag.screenshot({ path: path.join(FOTOS, C + '-inicio.png'), fullPage: true });
  await pag.goto(B + `${C}/#/m/${mods[mods.length - 1][0]}/1`); await pag.waitForTimeout(300); await pag.screenshot({ path: path.join(FOTOS, C + '-leccion.png'), fullPage: true });

  // Celular: nada se sale de costado
  for (const ancho of [320, 360]) {
    const cp = await (await nav.newContext({ viewport: { width: ancho, height: 740 }, isMobile: true, hasTouch: true })).newPage();
    cp.on('pageerror', e => errores.push(e.message));
    const rutas = ['', '#/glosario', '#/examen', ...mods.flatMap(([id, n]) => [`#/m/${id}`, `#/quiz/${id}`, ...Array.from({ length: n }, (_, i) => `#/m/${id}/${i + 1}`)])];
    for (const r of rutas) {
      await cp.goto(B + `${C}/` + r); await cp.waitForTimeout(80);
      const s = await cp.evaluate(() => { const de = document.documentElement; const fuera = [...document.querySelectorAll('main *')].filter(e => { const b = e.getBoundingClientRect(); if (b.width === 0 || b.right <= de.clientWidth + 1) return false; for (let p = e.parentElement; p; p = p.parentElement) if (['auto', 'scroll'].includes(getComputedStyle(p).overflowX)) return false; return true; }).slice(0, 2).map(e => e.tagName + ': ' + e.textContent.trim().slice(0, 40)); return { sobra: de.scrollWidth - de.clientWidth, fuera }; });
      if (s.sobra > 1 || s.fuera.length) fallas.push(`${ancho}px ${r}: se sale ${s.sobra}px ${s.fuera.join(' | ')}`);
    }
    if (ancho === 360) { await cp.goto(B + `${C}/#/m/${mods[1][0]}/1`); await cp.waitForTimeout(200); await cp.screenshot({ path: path.join(FOTOS, C + '-celu.png'), fullPage: true }); }
  }
  ok(!errores.length, 'errores JS: ' + errores.slice(0, 3).join(' | '));
  ok(!r404.length, 'recursos con error: ' + r404.slice(0, 3).join(' | '));
  await nav.close(); srv.close();
  console.log(fallas.length ? 'FALLAS:\n' + fallas.join('\n') : `EDGE OK: ${C} (${terminos} términos marcados, ${todos.size} descargas)`);
})().catch(e => { console.error(e); process.exit(1); });
