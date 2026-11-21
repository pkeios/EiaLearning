// Prueba un curso con código C++ que se compila y se corre de verdad. Uso: node tools/test-cpp.js [carpeta]  (sin carpeta: cpp).
// Cada bloque de una lección que tenga "int main" se compila con g++ (-std=c++17 -Wall -Werror) y se corre.
// Si después del código hay un bloque "Entrada:", eso se le escribe al programa por teclado.
// Si después viene un bloque "Salida:", lo que imprime tiene que ser exactamente eso.
// Si viene un bloque "Error:", el código tiene que NO compilar (es un error a propósito para mostrar el mensaje).
// En CI se usa g++. Sin g++ en la compu, CPP_REMOTO=1 compila en Compiler Explorer (godbolt.org): solo se manda el código del curso.
const fs = require('fs'), path = require('path'), os = require('os'), vm = require('vm');
const { spawnSync } = require('child_process');
const R = path.join(__dirname, '..', 'public');
const CARPETA = process.argv[2] || 'cpp';
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(R, CARPETA, 'contenido.js'), 'utf8'), ctx);
const T = ctx.window.TEMARIO;
const FLAGS = ['-std=c++17', '-Wall', '-Wextra', '-Werror'];

const decodificar = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const renglones = s => s.replace(/\r/g, '').split('\n').map(x => x.trimEnd()).join('\n').trim();

async function correr(codigo, entrada) {
  if (!process.env.CPP_REMOTO) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cpp-'));
    fs.writeFileSync(path.join(dir, 'p.cpp'), codigo);
    const c = spawnSync(process.env.CXX || 'g++', [...FLAGS, 'p.cpp', '-o', 'p'], { cwd: dir, encoding: 'utf8' });
    if (c.error) throw new Error('No encuentro g++. Instalalo o corré con CPP_REMOTO=1.');
    if (c.status !== 0) { fs.rmSync(dir, { recursive: true, force: true }); return { compila: false, err: c.stderr }; }
    const r = spawnSync(path.join(dir, 'p'), [], { cwd: dir, input: entrada, encoding: 'utf8', timeout: 10000 });
    fs.rmSync(dir, { recursive: true, force: true });
    return { compila: true, status: r.status, out: r.stdout, err: r.stderr };
  }
  const r = await fetch('https://godbolt.org/api/compiler/g132/compile', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ source: codigo, options: { userArguments: FLAGS.join(' '), executeParameters: { args: [], stdin: entrada }, compilerOptions: { executorRequest: true }, filters: { execute: true } } }),
  });
  const j = await r.json(), txt = a => (a || []).map(x => x.text).join('\n').replace(/\x1b\[[0-9;]*m(\x1b\[K)?/g, '');
  if (!j.buildResult || j.buildResult.code !== 0) return { compila: false, err: txt(j.buildResult && j.buildResult.stderr) };
  return { compila: true, status: j.code, out: txt(j.stdout), err: txt(j.stderr) };
}

(async () => {
  let corridos = 0, salidas = 0, fallasEsperadas = 0;
  const errores = [];
  for (const m of T) for (const [n, l] of m.lecciones.entries()) {
    const donde = `${m.id} lección ${n + 1}`;
    const bloques = [...l.html.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/g)].map(x => decodificar(x[1]));
    for (const [i, codigo] of bloques.entries()) {
      if (!/\bint main\s*\(/.test(codigo)) continue;
      let k = i + 1, entrada = '';
      if (bloques[k] && bloques[k].startsWith('Entrada:')) { entrada = bloques[k].replace(/^Entrada:\n?/, '') + '\n'; k++; }
      const sig = bloques[k] || '';
      const r = await correr(codigo, entrada);
      corridos++;
      if (sig.startsWith('Error:')) { fallasEsperadas++; if (r.compila) errores.push(`${donde}, código ${i + 1}: tenía que no compilar y compiló`); continue; }
      if (!r.compila) { errores.push(`${donde}, código ${i + 1}: no compila\n${renglones(r.err).split('\n').slice(0, 6).join('\n')}`); continue; }
      if (r.status !== 0) { errores.push(`${donde}, código ${i + 1}: terminó con código ${r.status}\n${r.err}`); continue; }
      if (sig.startsWith('Salida:')) {
        salidas++;
        const esperada = renglones(sig.replace(/^Salida:\n?/, '')), real = renglones(r.out);
        if (esperada !== real) errores.push(`${donde}, código ${i + 1}: la salida no coincide\n--- dice la lección:\n${esperada}\n--- da el programa:\n${real}`);
      }
    }
  }
  if (corridos < 10) errores.push(`solo ${corridos} programas completos: el curso tendría que tener al menos 10`);
  if (errores.length) { console.error(errores.join('\n\n')); process.exit(1); }
  console.log(`test-cpp OK: ${CARPETA} (${corridos} programas compilados, ${salidas} salidas comparadas, ${fallasEsperadas} errores a propósito)`);
})();
