// Prueba un curso con consultas SQL. Uso: node tools/test-sql.js [carpeta]  (sin carpeta: sql).
// Corre cada bloque <pre class="sql"> con el MISMO código que usa el laboratorio (SQL_RUNNER de public/app.js), en Python
// con sqlite3, sobre la base de ejemplo del curso (public/<carpeta>/base-sql.js). Si el bloque siguiente empieza con
// "Salida:", lo que da tiene que ser exactamente eso; si empieza con "Error:", la consulta tiene que fallar con ese mensaje.
const fs = require('fs'), path = require('path'), os = require('os'), vm = require('vm');
const { spawnSync } = require('child_process');
const R = path.join(__dirname, '..', 'public');
const CARPETA = process.argv[2] || 'sql';
const PY = process.env.PYTHON || (process.platform === 'win32' ? 'py' : 'python3');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(R, CARPETA, 'contenido.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(R, CARPETA, 'base-sql.js'), 'utf8'), ctx);
const T = ctx.window.TEMARIO, BASE = ctx.window.BASE_SQL;
const runner = fs.readFileSync(path.join(R, 'app.js'), 'utf8').match(/const SQL_RUNNER = String\.raw`([\s\S]*?)`;/)[1];
const decodificar = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#96;/g, '`').replace(/&amp;/g, '&');
const renglones = s => s.replace(/\r/g, '').split('\n').map(x => x.trimEnd()).join('\n').trim();

// Junta todas las consultas con lo que esperan
const casos = [];
for (const m of T) for (const [n, l] of m.lecciones.entries()) {
  const bloques = [...l.html.matchAll(/<pre( class="sql")?><code>([\s\S]*?)<\/code><\/pre>/g)].map(x => ({ sql: !!x[1], texto: decodificar(x[2]) }));
  bloques.forEach((b, i) => { if (b.sql) casos.push({ donde: `${m.id} lección ${n + 1}, consulta ${i + 1}`, consulta: b.texto, sig: (bloques[i + 1] || {}).texto || '' }); });
}

// Las corre todas en un solo proceso de Python
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sql-'));
fs.writeFileSync(path.join(dir, 'casos.json'), JSON.stringify({ base: BASE, consultas: casos.map(c => c.consulta) }));
fs.writeFileSync(path.join(dir, 'correr.py'), runner + `
import json, sys
datos = json.load(open('casos.json', encoding='utf-8'))
res = []
for q in datos['consultas']:
    try:
        res.append({'ok': True, 'texto': correr_sql(datos['base'], q)})
    except Exception as e:
        res.append({'ok': False, 'texto': str(e)})
sys.stdout.reconfigure(encoding='utf-8')
print(json.dumps(res, ensure_ascii=False))
`);
const r = spawnSync(PY, ['-X', 'utf8', 'correr.py'], { cwd: dir, encoding: 'utf8' });
fs.rmSync(dir, { recursive: true, force: true });
if (r.status !== 0) { console.error('No se pudo correr Python:\n' + (r.stderr || r.error)); process.exit(1); }
const res = JSON.parse(r.stdout);

const errores = [];
let salidas = 0, fallas = 0;
casos.forEach((c, i) => {
  const x = res[i];
  if (c.sig.startsWith('Error:')) {
    fallas++;
    const esperado = c.sig.replace(/^Error:\n?/, '').trim();
    if (x.ok || !x.texto.includes(esperado)) errores.push(`${c.donde}: tenía que fallar con "${esperado}" y dio "${x.texto}"`);
    return;
  }
  if (!x.ok) return errores.push(`${c.donde}: falla al correr: ${x.texto}`);
  if (c.sig.startsWith('Salida:')) {
    salidas++;
    const esperada = renglones(c.sig.replace(/^Salida:\n?/, '')), real = renglones(x.texto);
    if (esperada !== real) errores.push(`${c.donde}: la salida no coincide\n--- dice la lección:\n${esperada}\n--- da la consulta:\n${real}`);
  }
});
if (casos.length < 10) errores.push(`solo ${casos.length} consultas: el curso tendría que tener al menos 10`);
if (errores.length) { console.error(errores.join('\n\n')); process.exit(1); }
console.log(`test-sql OK: ${CARPETA} (${casos.length} consultas corridas, ${salidas} salidas comparadas, ${fallas} errores a propósito)`);
