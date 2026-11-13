// Prueba el curso "Data Engineering desde cero". Uso: node tools/test-de.js
// Lo más importante: corre de verdad cada código Python de las lecciones (el mismo que el alumno prueba en el laboratorio),
// cada uno solo, en una carpeta con las planillas de práctica. Si después del código hay un bloque que empieza con "Salida:",
// lo que imprime tiene que ser exactamente eso; si empieza con "Error:", el código tiene que fallar con ese error.
// Y cada número con separador de miles del texto tiene que salir de algún código o salida: el curso no cita números inventados.
const fs = require('fs'), path = require('path'), os = require('os'), vm = require('vm'), assert = require('assert');
const { spawnSync } = require('child_process');
const R = path.join(__dirname, '..', 'public');
const leer = f => fs.readFileSync(path.join(R, f), 'utf8');
const ctx = { window: {} };
for (const f of ['contenido.js', 'glosario.js']) vm.runInNewContext(leer('data-engineering/' + f), ctx);
const T = ctx.window.TEMARIO, G = ctx.window.GLOSARIO;
const PY = process.env.PYTHON || (process.platform === 'win32' ? 'py' : 'python3');

// La misma regla que usa la app para mostrar el botón del laboratorio
const app = leer('app.js');
const NO_NAVEGADOR = eval(app.match(/const NO_NAVEGADOR = (.*);/)[1]);
const usaModelo = eval(app.match(/const usaModelo = (.*);/)[1]);
const esPython = eval(app.match(/const esPython = (.*);/)[1]);

const decodificar = s => s.replace(/<\/?(td|th|tr|li|p)\b[^>]*>/g, ' ').replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#92;/g, String.fromCharCode(92)).replace(/&amp;/g, '&');
const renglones = s => s.replace(/\r/g, '').split('\n').map(x => x.trimEnd()).join('\n').trim();
const PLANILLAS = ['ventas-sucias.csv', 'ventas-limpias.csv'];
let corridos = 0, salidas = 0, fallasEsperadas = 0;
const textoSalidas = [], textoCodigo = [], errores = [];

for (const m of T) m.lecciones.forEach((l, n) => {
  const donde = `${m.id} lección ${n + 1}`;
  const bloques = [...l.html.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/g)].map(x => decodificar(x[1]));
  bloques.forEach((codigo, i) => {
    if (!esPython(codigo)) return;
    textoCodigo.push(codigo);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'de-'));
    for (const p of PLANILLAS) fs.copyFileSync(path.join(R, 'datos', 'practica', p), path.join(dir, p));
    fs.writeFileSync(path.join(dir, 'codigo.py'), codigo);
    const r = spawnSync(PY, ['-I', '-X', 'utf8', 'codigo.py'], { cwd: dir, encoding: 'utf8', timeout: 90000, env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' } });
    fs.rmSync(dir, { recursive: true, force: true });
    corridos++;
    const sig = bloques[i + 1];
    if (sig && sig.startsWith('Error:')) {
      // Un error a propósito: tiene que fallar, y con el mismo mensaje que muestra la lección
      fallasEsperadas++;
      const ultimo = renglones(r.stderr || '').split('\n').slice(-1)[0];
      if (r.status === 0 || ultimo !== sig.replace(/^Error:\n?/, '').trim()) errores.push(`${donde}, código ${i + 1}: tenía que fallar con "${sig}" y dio "${ultimo}"`);
      return;
    }
    if (r.status !== 0) return errores.push(`${donde}, código ${i + 1}: falla al correr\n${renglones(String(r.stderr || r.error || '')).split('\n').slice(-3).join('\n')}`);
    if (sig && sig.startsWith('Salida:')) {
      salidas++;
      const esperada = renglones(sig.replace(/^Salida:\n?/, '')), real = renglones(r.stdout);
      textoSalidas.push(real);
      if (esperada !== real) errores.push(`${donde}, código ${i + 1}: la salida no coincide\n--- dice la lección:\n${esperada}\n--- da Python:\n${real}`);
    }
  });
});

// Números del texto: tienen que salir de una salida o de un código
const fuentes = (textoSalidas.join('\n') + '\n' + textoCodigo.join('\n')).replace(/(\d)[.,_](?=\d{3}\b)/g, '$1');
for (const m of T) m.lecciones.forEach((l, n) => {
  const texto = decodificar(l.html.replace(/<pre>[\s\S]*?<\/pre>/g, ' '));
  for (const { 0: num, index } of texto.matchAll(/\d{1,3}(?:\.\d{3})+(?![\d.]*\d)/g)) {
    if (/Ley $/.test(texto.slice(index - 4, index))) continue; // el número de una ley no es un dato
    if (!fuentes.includes(num.replace(/\./g, ''))) errores.push(`${m.id} lección ${n + 1}: el número ${num} no sale de ningún código ni salida`);
  }
});

// Cada término del glosario aparece en alguna lección (si no, la definición no se ve nunca)
const reTermino = eval(app.match(/const reTermino = (.*);\n/)[1]);
const textoLecciones = T.flatMap(m => m.lecciones.map(l => decodificar(l.html.replace(/<pre>[\s\S]*?<\/pre>/g, ' '))));
for (const g of G) if (!textoLecciones.some(t => reTermino(g.t).test(t))) errores.push(`glosario: "${g.t}" no aparece en ninguna lección`);

// Configuración del curso: progreso aparte, planillas que existen, inicio y service worker
const html = leer('data-engineering/index.html');
const CURSO = vm.runInNewContext('(' + html.match(/<script>window\.CURSO = ([\s\S]*?);?<\/script>/)[1] + ')');
assert.equal(CURSO.clave, 'progreso-de');
for (const url of Object.values(CURSO.archivos)) assert(fs.existsSync(path.join(R, 'data-engineering', url)), 'no existe ' + url);
assert(/mapa\.js"><\/script>\s*<script src="\.\.\/app\.js"/.test(html), 'carga mapa.js antes de app.js');
assert(leer('index.html').includes('href="data-engineering/"'), 'el inicio tiene la tarjeta del curso');
assert(leer('sw.js').includes("registration.scope).pathname.length).includes('/')"), 'el service worker va primero a la red en /data-engineering/ (como en toda carpeta de curso)');
assert(app.includes('CURSO.archivos'), 'el laboratorio copia las planillas de práctica');

if (errores.length) { console.error(errores.join('\n\n')); process.exit(1); }
console.log(`test-de OK (${T.length} módulos, ${T.reduce((s, m) => s + m.quiz.length, 0)} preguntas, ${G.length} términos, ${corridos} códigos corridos, ${salidas} salidas comparadas, ${fallasEsperadas} errores a propósito)`);
