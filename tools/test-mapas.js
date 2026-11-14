// Controla que el mapa (diagrama de flujo) de cada curso sea coherente con su contenido:
// todos los módulos, misiones o unidades aparecen una sola vez y en el orden del curso, y el dibujo se arma sin errores.
// Uso: node tools/test-mapas.js
const fs = require('fs'), assert = require('assert');
const P = __dirname + '/../public/';
const win = {}; new Function('window', fs.readFileSync(P + 'mapa.js', 'utf8'))(win);
global.window = win; // mapa.js usa window.mapaFlujo
const dibujar = m => { const h = win.mapaFlujo(m); assert(h.includes('class="mapa"') && !h.includes('undefined'), 'el mapa no se dibuja bien'); return h; };
const enOrden = (nombre, lista, esperado) => assert.deepStrictEqual(lista, esperado, `${nombre}: el mapa tiene que tener cada parte una vez y en el orden del curso`);

// Los cursos para adultos van sin mapa (el usuario lo pidió: repetía las tarjetas del temario).
for (const carpeta of ['', 'datos/', 'prompts/']) {
  const w = {}; new Function('window', fs.readFileSync(P + carpeta + 'contenido.js', 'utf8'))(w);
  assert(!w.MAPA, (carpeta || 'AI Engineering ') + ': no tiene que tener window.MAPA');
}

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
dibujar({ titulo: 'x', intro: 'x', etapas: U.MAPA_INGLES.map(e => ({ ...e, items: e.unidades.map(i => ({ titulo: String(i), href: '#/u/' + i })) })) });
console.log('test-mapas OK (los mapas quedan solo en los cursos para chicos)');
