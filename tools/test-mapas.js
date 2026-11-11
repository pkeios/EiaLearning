// Controla que el mapa (diagrama de flujo) de cada curso sea coherente con su contenido:
// todos los módulos, misiones o unidades aparecen una sola vez y en el orden del curso, y el dibujo se arma sin errores.
// Uso: node tools/test-mapas.js
const fs = require('fs'), assert = require('assert');
const P = __dirname + '/../public/';
const win = {}; new Function('window', fs.readFileSync(P + 'mapa.js', 'utf8'))(win);
global.window = win; // mapa.js usa window.mapaFlujo
const dibujar = m => { const h = win.mapaFlujo(m); assert(h.includes('class="mapa"') && !h.includes('undefined'), 'el mapa no se dibuja bien'); return h; };
const enOrden = (nombre, lista, esperado) => assert.deepStrictEqual(lista, esperado, `${nombre}: el mapa tiene que tener cada parte una vez y en el orden del curso`);

for (const [carpeta, nombre] of [['', 'AI Engineering'], ['datos/', 'Datos con IA'], ['data-engineering/', 'Data Engineering'], ['prompts/', 'Prompts desde cero']]) {
  const w = {}; new Function('window', fs.readFileSync(P + carpeta + 'contenido.js', 'utf8'))(w);
  assert(w.MAPA && w.MAPA.etapas.length >= 3, nombre + ': falta window.MAPA');
  enOrden(nombre, w.MAPA.etapas.flatMap(e => e.modulos), w.TEMARIO.map(m => m.id));
  w.MAPA.etapas.forEach(e => assert(e.nombre && e.texto && e.modulos.length, nombre + ': etapa incompleta'));
  dibujar({ ...w.MAPA, etapas: w.MAPA.etapas.map(e => ({ ...e, items: e.modulos.map(id => ({ titulo: id, href: '#/m/' + id })) })) });
  for (const html of [carpeta ? carpeta + 'index.html' : 'curso.html']) assert(/mapa\.js"><\/script>\s*<script src="(\.\.\/)?app\.js"/.test(fs.readFileSync(P + html, 'utf8')), html + ' tiene que cargar mapa.js antes de app.js');
}
assert(fs.readFileSync(P + 'app.js', 'utf8').includes('${mapaDelCurso(p)}'), 'el inicio de los cursos para adultos muestra el mapa');

// Inglés: etapas por unidad
const U = new Function(fs.readFileSync(P + 'chicos/ingles-unidades.js', 'utf8') + ';return { UNIDADES, MAPA_INGLES }')();
enOrden('Inglés', U.MAPA_INGLES.flatMap(e => e.unidades), U.UNIDADES.map((_, i) => i));
assert(fs.readFileSync(P + 'chicos/ingles.html', 'utf8').includes('MAPA_INGLES.map'), 'el inicio de inglés muestra el mapa');

// IA para chicos: el mapa sale de las misiones; cada misión tiene una actividad del taller y entre todas están las 6.
const h = fs.readFileSync(P + 'chicos/index.html', 'utf8'), js = h.split('<script>')[1].split('</script>')[0];
const TALLER = new Function('return ' + js.match(/const TALLER = (\[[\s\S]*?\]);/)[1])();
const { MISIONES } = new Function(js.split('const app =')[0] + ';return { MISIONES }')();
const talleres = MISIONES.map(m => m.pasos.filter(s => s.taller).map(s => s.taller));
talleres.forEach((t, i) => assert.equal(t.length, 1, `misión ${i + 1}: tiene que tener una actividad del taller`));
assert.deepStrictEqual([...talleres.flat()].sort(), TALLER.map(t => t.id).sort(), 'cada actividad del taller está en una misión');
assert(h.includes('${mapaIA(p)}') && h.includes('../mapa.js'), 'el inicio de IA para chicos muestra el mapa');
console.log('test-mapas OK (6 cursos)');
