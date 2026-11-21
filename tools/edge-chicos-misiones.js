// Prueba los cursos para chicos en formato de misiones (web, internet y programar) en Edge real: juega todas las misiones. En cada desafío de código comprueba que
// el código inicial NO pase y que una solución SÍ pase. También la consola con errores en castellano, el laboratorio libre,
// el progreso guardado y el celular a 360 px. Uso: NODE_PATH=<carpeta con playwright-core>/node_modules node tools/edge-chicos-misiones.js
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright-core');
const RAIZ = path.join(__dirname, '..', 'public');
const FOTOS = require('os').tmpdir();
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png' };
const srv = http.createServer((q, r) => { let f = path.join(RAIZ, decodeURIComponent(q.url.split('?')[0])); if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); if (!fs.existsSync(f)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': tipos[path.extname(f)] || 'application/octet-stream' }); r.end(fs.readFileSync(f)); });

// Una solución por desafío de código, en el orden en que aparecen en cada misión.
const S = (js, html = '') => `${html}<script>\n${js}\n</script>\n`;
const SOLUCIONES = {
  0: ['<h1>Sofi</h1>\n<p>Esta es mi primera página.</p>'],
  2: ['<h1>Mi página</h1>\n<h2>Mis cosas favoritas</h2>\n<p>Me encanta dibujar.</p>', '<p>Esto es <strong>importante</strong>: guardá seguido.</p>'],
  3: ['<h2>Me gusta</h2>\n<ul>\n  <li>Fútbol</li>\n  <li>Dibujar</li>\n  <li>Leer</li>\n</ul>', '<h1>Mi página</h1>\n<a href="contacto.html">Escribime</a>', '<h2>Mi mascota</h2>\n<img src="gato.png" alt="Mi gato durmiendo">'],
  4: ['<style>\nh1 { color: tomato; }\n</style>\n<h1>Mi página</h1>', '<style>\nbody { background-color: lightyellow; }\np { font-size: 22px; }\n</style>\n<h1>Mi página</h1>\n<p>Hola</p>'],
  5: ['<style>\n.tarjeta { border: 3px solid purple; padding: 20px; border-radius: 12px; }\n</style>\n<p class="tarjeta">Soy una tarjeta</p>',
    '<style>\n.fila { display: flex; gap: 10px; }\n</style>\n<div class="fila"><div>Uno</div><div>Dos</div><div>Tres</div></div>'],
  6: [S('console.log("Sofi");'), S('let edad = 13;\nconsole.log(edad + 10);')],
  7: [S('document.querySelector("#mensaje").textContent = "¡Lo cambié!";', '<p id="mensaje">Texto viejo</p>\n'),
    S('let clics = 0;\nlet boton = document.querySelector("#boton");\nlet numero = document.querySelector("#numero");\nboton.addEventListener("click", () => {\n  clics = clics + 1;\n  numero.textContent = clics;\n});', '<button id="boton">Sumar</button>\n<p id="numero">0</p>\n'),
    S('let b = document.querySelector("#b");\nb.addEventListener("click", () => { document.body.style.background = "gold"; });', '<button id="b">Modo dorado</button>\n')],
  8: [S('let nota = 8;\nif (nota >= 6) {\n  console.log("Aprobado");\n} else {\n  console.log("A estudiar");\n}'),
    S('let secreto = 7;\ndocument.querySelector("#probar").addEventListener("click", () => {\n  let n = Number(document.querySelector("#num").value);\n  let res = document.querySelector("#res");\n  if (n === secreto) { res.textContent = "¡Ganaste!"; } else { res.textContent = "Probá de nuevo"; }\n});', '<input id="num" type="number">\n<button id="probar">Probar</button>\n<p id="res"></p>\n')],
  9: [S('for (let i = 1; i <= 10; i++) {\n  console.log(7 * i);\n}'),
    S('let amigos = ["Lu", "Tomi", "Sofi", "Benja"];\nlet lista = document.querySelector("#lista");\nfor (let a of amigos) {\n  let li = document.createElement("li");\n  li.textContent = a;\n  lista.append(li);\n}', '<ul id="lista"></ul>\n')],
  10: [S('let mensaje = "Listo";\nconsole.log(mensaje);'),
    S('let boton = document.querySelector("#saludar");\nlet p = document.querySelector("#saludo");\nboton.addEventListener("click", () => { p.textContent = "¡Hola!"; });', '<button id="saludar">Saludar</button>\n<p id="saludo"></p>\n')],
  11: ['<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<title>Mi página</title>\n<style>\nh1 { color: tomato; }\n</style>\n</head>\n<body>\n<h1>Sofi</h1>\n<ul><li>Dibujar</li></ul>\n<button id="b">Tocame</button>\n<p id="r"></p>\n<script>\ndocument.querySelector("#b").addEventListener("click", () => { document.querySelector("#r").textContent = "¡Hola!"; });\n</script>\n</body>\n</html>'],
};
const fallas = [], ok = (c, m) => { if (!c) fallas.push(m); };
(async () => {
  await new Promise(r => srv.listen(8794, r));
  const B = 'http://localhost:8794/';
  const nav = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await nav.newContext({ viewport: { width: 1200, height: 900 } });
  const pag = await ctx.newPage();
  pag.on('dialog', d => d.accept());
  const errores = []; pag.on('pageerror', e => errores.push(e.message));

  const aviso = () => pag.textContent('#aviso-mision');
  const esperarAviso = () => pag.waitForFunction(() => /🎉|🤔/.test(document.querySelector('#aviso-mision').textContent), null, { timeout: 8000 });
  for (const [html, clave, cuantas] of [['web.html', 'chicos-web', 12], ['internet.html', 'chicos-internet', 7], ['programar.html', 'chicos-programar', 7], ['plata.html', 'chicos-plata', 8], ['ciencia.html', 'chicos-ciencia', 8], ['matematica.html', 'chicos-matematica', 8], ['escribir.html', 'chicos-escribir', 8]]) {
  // Entrada de los cursos para chicos → este curso
  await pag.goto(B + 'chicos/');
  await pag.click(`a[href="${html}"]`);
  await pag.waitForSelector('.mision[data-i]');
  const total = await pag.$$eval('.mision[data-i]', x => x.length);
  ok(total === cuantas, `${html}: tendrían que ser ${cuantas} misiones y hay ${total}`);
  let videos = 0;
  for (let i = 0; i < total; i++) {
    await pag.goto(B + 'chicos/' + html + '#/' + i); await pag.waitForSelector('#seguir');
    let codigo = 0;
    for (let paso = 0; paso < 40; paso++) {
      if (await pag.$('.fiesta')) break;
      const tipo = await pag.evaluate(() => document.querySelector('#comprobar') ? 'codigo' : document.querySelector('[data-t]') ? 'tarea' : document.querySelector('.opcion[data-j]') ? 'q' : document.querySelector('.chip[data-k]') ? 'clasificar' : document.querySelector('[data-o]') ? 'ordenar' : 'idea');
      const s = await pag.evaluate(([i, paso]) => { const s = window.CURSO_CHICOS.misiones[i].pasos[paso]; return { c: s.c, items: s.items }; }, [i, paso]);
      if (await pag.$('details.video')) {
        videos++;
        await pag.click('details.video summary');
        ok(/youtube-nocookie\.com\/embed\/[\w-]{11}$/.test(await pag.getAttribute('details.video iframe', 'src')), `${html}, misión ${i + 1}: video mal armado`);
      }
      if (tipo === 'codigo') ok(await pag.$('.tarjeta > pre.consola, .tarjeta pre.consola'), `${html}, misión ${i + 1}: el desafío no muestra el ejemplo`);
      if (tipo === 'q') await pag.click(`.opcion[data-j="${s.c}"]`);
      if (tipo === 'clasificar') for (let k = 0; k < s.items.length; k++) await pag.click(`.chip[data-k="${k}"] button[data-g="${s.items[k][1]}"]`);
      if (tipo === 'ordenar') {
        const orden = await pag.$$eval('[data-o]', b => b.map(x => Number(x.dataset.o)));
        ok(orden.some((x, k) => x !== k), `${html}, misión ${i + 1}: los pasos para ordenar ya vienen ordenados`);
        if (orden[0] !== 0) { await pag.click(`[data-o="${orden[0]}"]`); ok((await aviso()).includes('🤔'), `${html}: ordenar acepta un paso fuera de orden`); }
        for (let k = 0; k < s.items.length; k++) await pag.click(`[data-o="${k}"]`);
        ok(await pag.$$eval('.ordenados li', l => l.length) === s.items.length, `${html}, misión ${i + 1}: no quedaron todos los pasos ordenados`);
      }
      if (tipo === 'tarea') { ok(await pag.isDisabled('#seguir'), `misión ${i + 1}: la tarea deja seguir sin marcar`); for (const c of await pag.$$('[data-t]')) await c.check(); }
      if (tipo === 'codigo') {
        const sol = SOLUCIONES[i]?.[codigo++];
        ok(html === 'web.html' && sol, `${html}, misión ${i + 1}: falta la solución del desafío ${codigo}`);
        await pag.waitForTimeout(300);
        await pag.click('#comprobar'); await esperarAviso();
        ok((await aviso()).includes('🤔'), `misión ${i + 1}, desafío ${codigo}: el código inicial ya pasa (${await aviso()})`);
        ok(!/&lt;|&gt;/.test(await aviso()), `misión ${i + 1}: la pista muestra &lt; en vez de <`);
        ok(await pag.isDisabled('#seguir'), `misión ${i + 1}: deja seguir sin resolver el código`);
        // El caso que encontró el usuario: regla bien escrita, pero borró el <h1> que venía hecho.
        if (html === 'web.html' && i === 4 && codigo === 1) {
          ok(await pag.$('text=El código ya trae una parte hecha'), 'no avisa que el código ya trae una parte hecha');
          await pag.fill('.editor textarea', '<style>\nh1 { color: tomato; }\n</style>');
          await pag.evaluate(() => { document.querySelector('#aviso-mision').textContent = ''; });
          await pag.click('#comprobar'); await esperarAviso();
          const a = await aviso();
          ok(a.includes('Falta <h1>') && a.includes('Empezar de nuevo'), 'si borró el h1, el aviso tiene que decirlo: ' + a);
        }
        await pag.fill('.editor textarea', sol || '');
        await pag.evaluate(() => { document.querySelector('#aviso-mision').textContent = ''; });
        await pag.click('#comprobar'); await esperarAviso();
        ok((await aviso()).includes('🎉'), `misión ${i + 1}, desafío ${codigo}: la solución no pasa (${await aviso()})`);
        if (html === 'web.html' && i === 5 && codigo === 1) await pag.screenshot({ path: path.join(FOTOS, 'chicos-web-editor.png'), fullPage: true });
      }
      ok(!(await pag.isDisabled('#seguir')), `${html}, misión ${i + 1}, paso ${paso + 1}: no habilita Seguir`);
      await pag.click('#seguir');
    }
    ok(await pag.$('.fiesta'), `${html}, misión ${i + 1}: no llega al final`);
    if (html === 'web.html') ok(codigo === (SOLUCIONES[i] || []).length, `misión ${i + 1}: sobran soluciones`);
  }
  ok(videos >= 4, `${html}: tiene ${videos} videos`);
  const prog = await pag.evaluate(c => JSON.parse(localStorage.getItem(c)), clave);
  // Sin errores, 3 estrellas. La prueba erra a propósito un paso en cada "ordenar" (para ver que lo rechace), y eso cuesta esa estrella.
  const errados = await pag.evaluate(() => window.CURSO_CHICOS.misiones.map(m => m.pasos.filter(s => s.ordenar).length));
  ok(Object.keys(prog.m).length === cuantas && errados.every((n, i) => prog.m[i] >= 3 - n), `${html}: progreso guardado en las ${cuantas} misiones: ` + JSON.stringify(prog.m));
  await pag.goto(B + 'chicos/' + html); await pag.screenshot({ path: path.join(FOTOS, 'chicos-' + html.replace('.html', '') + '-inicio.png'), fullPage: true });
  }
  ok(await pag.evaluate(() => localStorage.getItem('chicos') === null), 'no tiene que tocar el progreso de las misiones de IA');
  // Las direcciones viejas (formato para adultos) mandan a las misiones.
  for (const [viejo, nuevo] of [['chicos-internet/', 'internet.html'], ['chicos-programar/', 'programar.html']]) {
    await pag.goto(B + viejo); await pag.waitForURL('**/chicos/' + nuevo, { timeout: 5000 }).catch(() => {});
    ok(pag.url().endsWith('/chicos/' + nuevo), viejo + ' no redirige a ' + nuevo);
  }
  // El inicio del sitio lleva a los tres cursos.
  await pag.goto(B);
  for (const h of ['chicos/web.html', 'chicos/internet.html', 'chicos/programar.html', 'chicos/plata.html', 'chicos/ciencia.html', 'chicos/matematica.html', 'chicos/escribir.html']) ok(await pag.$(`a[href="${h}"]`), 'el inicio no enlaza ' + h);

  // Consola: el error sale en castellano y con el número de línea del código del chico.
  await pag.goto(B + 'chicos/web.html#/libre'); await pag.waitForSelector('.editor textarea');
  await pag.fill('.editor textarea', '<p>hola</p>\n<script>\nconsole.log("uno");\nconsol.log("dos");\n</script>');
  await pag.waitForFunction(() => document.querySelector('.consola').textContent.includes('Línea'), null, { timeout: 5000 }).catch(() => {});
  const con = await pag.textContent('.consola');
  ok(con.includes('uno') && con.includes('Línea 4') && con.includes('No conozco "consol"'), 'consola del laboratorio: ' + con);
  await pag.reload(); await pag.waitForSelector('.editor textarea');
  ok((await pag.inputValue('.editor textarea')).includes('consol.log'), 'el laboratorio no guardó lo escrito');

  // Celular
  const cel = await nav.newPage({ viewport: { width: 360, height: 740 } });
  await cel.goto(B + 'chicos/web.html#/7'); await cel.waitForSelector('#seguir');
  await cel.click('#seguir'); await cel.waitForSelector('.editor textarea');
  ok(await cel.evaluate(() => document.documentElement.scrollWidth <= 361), 'en el celular la página se sale de la pantalla');
  await cel.screenshot({ path: path.join(FOTOS, 'chicos-web-celu.png'), fullPage: true });


  ok(!errores.length, 'errores en la página: ' + errores.join(' | '));
  await nav.close(); srv.close();
  if (fallas.length) { console.log('FALLAS:\n' + fallas.join('\n')); process.exit(1); }
  console.log('EDGE OK: todos los cursos de misiones (todas las misiones; en web, cada solución pasa y ningún código inicial pasa)');
})().catch(e => { console.error(e.message.split('\n')[0]); if (fallas.length) console.log('FALLAS ANTES DEL CORTE:\n' + fallas.join('\n')); process.exit(1); });
