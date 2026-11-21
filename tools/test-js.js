// Prueba un curso con código JavaScript del laboratorio web. Uso: node tools/test-js.js [carpeta]  (sin carpeta: javascript).
// Cada bloque <pre class="web"> que no tiene etiquetas HTML es JavaScript puro: se corre en un contexto aislado,
// capturando console.log con el mismo formato que el laboratorio de public/app.js (objetos y listas con JSON.stringify).
// Si el bloque siguiente empieza con "Salida:", lo que imprime tiene que ser exactamente eso.
// Si empieza con "Error:", el código tiene que fallar y el mensaje del error tiene que contener ese texto.
const fs = require('fs'), path = require('path'), vm = require('vm');
const R = path.join(__dirname, '..', 'public');
const CARPETA = process.argv[2] || 'javascript';
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(R, CARPETA, 'contenido.js'), 'utf8'), ctx);
const T = ctx.window.TEMARIO;
const decodificar = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#96;/g, '`').replace(/&amp;/g, '&');
const renglones = s => s.replace(/\r/g, '').split('\n').map(x => x.trimEnd()).join('\n').trim();
const formato = v => typeof v === 'object' && v !== null ? JSON.stringify(v) : String(v); // igual que CAPTURA_WEB en app.js

async function correr(codigo) {
  const salida = [];
  const caja = {
    console: { log: (...x) => salida.push(x.map(formato).join(' ')) },
    setTimeout: (f, ms) => setTimeout(f, Math.min(ms || 0, 50)), // las esperas se acortan para que la prueba sea rápida
    Promise, JSON, Math, Date, Number, String, Array, Object, Boolean, parseInt, parseFloat, isNaN,
  };
  let error = null;
  try {
    const r = vm.runInNewContext(codigo, caja, { timeout: 2000 });
    if (r && typeof r.then === 'function') await r;
  } catch (e) { error = e; }
  await new Promise(ok => setTimeout(ok, 300));
  return { salida: salida.join('\n'), error };
}

(async () => {
  const errores = [];
  let corridos = 0, salidas = 0, fallas = 0;
  for (const m of T) for (const [n, l] of m.lecciones.entries()) {
    const donde = `${m.id} lección ${n + 1}`;
    const bloques = [...l.html.matchAll(/<pre( class="web")?><code>([\s\S]*?)<\/code><\/pre>/g)].map(x => ({ web: !!x[1], codigo: decodificar(x[2]) }));
    for (const [i, b] of bloques.entries()) {
      if (!b.web || /<[a-z!]/i.test(b.codigo)) continue; // con etiquetas es una página: no se prueba acá
      corridos++;
      const sig = (bloques[i + 1] || {}).codigo || '';
      const r = await correr(b.codigo);
      if (sig.startsWith('Error:')) {
        fallas++;
        const esperado = sig.replace(/^Error:\n?/, '').trim();
        if (!r.error || !String(r.error.message).includes(esperado.replace(/^\w*Error: /, ''))) errores.push(`${donde}, código ${i + 1}: tenía que fallar con "${esperado}" y dio "${r.error ? r.error.message : 'sin error'}"`);
        continue;
      }
      if (r.error) { errores.push(`${donde}, código ${i + 1}: falla al correr: ${r.error.message}`); continue; }
      if (sig.startsWith('Salida:')) {
        salidas++;
        const esperada = renglones(sig.replace(/^Salida:\n?/, '')), real = renglones(r.salida);
        if (esperada !== real) errores.push(`${donde}, código ${i + 1}: la salida no coincide\n--- dice la lección:\n${esperada}\n--- da el código:\n${real}`);
      }
    }
  }
  if (corridos < 10) errores.push(`solo ${corridos} bloques de JavaScript: el curso tendría que tener al menos 10`);
  if (errores.length) { console.error(errores.join('\n\n')); process.exit(1); }
  console.log(`test-js OK: ${CARPETA} (${corridos} códigos corridos, ${salidas} salidas comparadas, ${fallas} errores a propósito)`);
})();
