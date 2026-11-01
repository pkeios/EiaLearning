// Valida public/contenido.js. Uso: node tools/validar.js  (sale con código 1 si hay errores)
const fs = require('fs'), path = require('path'), vm = require('vm');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'public', 'contenido.js'), 'utf8'), ctx);
const T = ctx.window.TEMARIO, errores = [], ids = new Set();

for (const m of T) {
  if (!m.id || ids.has(m.id)) errores.push(`id vacío o duplicado: ${m.id}`);
  ids.add(m.id);
  for (const k of ['titulo', 'nivel', 'objetivos', 'lecciones', 'practica', 'recursos', 'quiz']) if (!m[k]) errores.push(`${m.id}: falta "${k}"`);
  (m.lecciones || []).forEach((l, i) => { if (!l.titulo || !l.html) errores.push(`${m.id} lección ${i + 1}: falta titulo o html`); });
  (m.recursos || []).forEach(r => { if (!r.t || !/^https:\/\//.test(r.url)) errores.push(`${m.id}: recurso inválido ${JSON.stringify(r)}`); });
  const textos = new Set();
  (m.quiz || []).forEach((q, i) => {
    const n = `${m.id} pregunta ${i + 1}`;
    if (!q.q || textos.has(q.q)) errores.push(`${n}: texto vacío o repetido (el texto es la clave del repaso)`);
    textos.add(q.q);
    if (!Array.isArray(q.opciones) || q.opciones.length !== 4) errores.push(`${n}: debe tener 4 opciones`);
    else if (new Set(q.opciones).size !== 4) errores.push(`${n}: opciones repetidas`);
    if (!Number.isInteger(q.correcta) || q.correcta < 0 || q.correcta > 3) errores.push(`${n}: "correcta" debe ser 0-3`);
    if (!q.explicacion) errores.push(`${n}: falta explicación`);
  });
}

for (const m of T) console.log(`${m.id.padEnd(14)} lecciones ${String(m.lecciones.length).padStart(2)}  preguntas ${String(m.quiz.length).padStart(3)}  práctica ${m.practica.length}`);
const pos = [0, 0, 0, 0];
T.forEach(m => m.quiz.forEach(q => pos[q.correcta]++));
console.log(`Total: ${T.length} módulos, ${T.reduce((s, m) => s + m.quiz.length, 0)} preguntas. Posición de la correcta (0-3): ${pos.join(' / ')}`);
if (errores.length) { console.error('\nERRORES:\n' + errores.join('\n')); process.exit(1); }
console.log('OK');
