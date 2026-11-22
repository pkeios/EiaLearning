// Prueba un curso con terminal. Uso: node tools/test-terminal.js [carpeta]  (sin carpeta: terminal).
// Corre cada bloque <pre class="terminal"> con el MISMO código que usa el laboratorio (terminalSimulada de public/app.js).
// Si el bloque siguiente empieza con "Salida:", lo que da tiene que ser exactamente eso.
// Además se prueba la terminal simulada con casos fijos, para que un cambio en app.js no rompa lo que enseña el curso.
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const R = path.join(__dirname, '..', 'public');
const CARPETA = process.argv[2] || 'terminal';
const app = fs.readFileSync(path.join(R, 'app.js'), 'utf8');
const codigo = app.match(/\/\/ ---------- Terminal simulada \(inicio\) ----------([\s\S]*?)\/\/ ---------- Terminal simulada \(fin\) ----------/)[1];
const terminalSimulada = new Function(codigo + '\nreturn terminalSimulada;')();

// Casos fijos de la terminal simulada
const t = g => terminalSimulada(g);
assert.equal(t('pwd'), '$ pwd\n/home/ana');
assert.equal(t('ls'), '$ ls\ncompras.txt  Descargas  Documentos  ventas.csv');
assert.equal(t('ls -a'), '$ ls -a\n.  ..  .bashrc  compras.txt  Descargas  Documentos  ventas.csv');
assert.equal(t('cd Documentos\npwd\ncd ..\npwd\ncd ~\npwd'), '$ cd Documentos\n$ pwd\n/home/ana/Documentos\n$ cd ..\n$ pwd\n/home/ana\n$ cd ~\n$ pwd\n/home/ana');
assert.equal(t('cd Fotos'), '$ cd Fotos\nbash: cd: Fotos: No existe el archivo o el directorio');
assert.equal(t('ls Descargas/*.jpg'), '$ ls Descargas/*.jpg\nDescargas/foto-cumple.jpg  Descargas/foto-playa.jpg');
assert.equal(t('mkdir Fotos\nmv Descargas/*.jpg Fotos\nls Fotos\nls Descargas'), '$ mkdir Fotos\n$ mv Descargas/*.jpg Fotos\n$ ls Fotos\nfoto-cumple.jpg  foto-playa.jpg\n$ ls Descargas\ninforme.pdf  temas.txt');
assert.equal(t('mkdir Documentos'), '$ mkdir Documentos\nmkdir: no se puede crear el directorio «Documentos»: El archivo ya existe');
assert.equal(t('rm Documentos'), "$ rm Documentos\nrm: no se puede borrar 'Documentos': Es un directorio");
assert.equal(t('echo hola > a.txt\necho chau >> a.txt\ncat a.txt'), '$ echo hola > a.txt\n$ echo chau >> a.txt\n$ cat a.txt\nhola\nchau');
assert.equal(t('sort compras.txt | uniq -c'), '$ sort compras.txt | uniq -c\n      1 fideos\n      2 leche\n      1 pan\n      3 yerba');
assert.equal(t('grep -c yerba ventas.csv\ngrep -ci yerba ventas.csv'), '$ grep -c yerba ventas.csv\n2\n$ grep -ci yerba ventas.csv\n3');
assert.equal(t('grep -n 3900 ventas.csv'), '$ grep -n 3900 ventas.csv\n2:2026-03-02,yerba,3900\n4:2026-03-03,yerba,3900\n7:2026-03-04,Yerba,3900');
assert.equal(t('head -n 2 Documentos/notas.txt\ntail -n 1 Documentos/notas.txt\nwc -l compras.txt'), '$ head -n 2 Documentos/notas.txt\nComprar yerba\nLlamar a Marta\n$ tail -n 1 Documentos/notas.txt\nEstudiar para el parcial\n$ wc -l compras.txt\n7 compras.txt');
assert.equal(t('cp -r Documentos Copia\nls Copia\nrm -r Copia\nls'), '$ cp -r Documentos Copia\n$ ls Copia\nnotas.txt  receta.txt\n$ rm -r Copia\n$ ls\ncompras.txt  Descargas  Documentos  ventas.csv');
assert.equal(t('# comentario\nfrutas'), '$ frutas\nbash: frutas: orden no encontrada');
assert.equal(t('echo "Hola,   mundo"'), '$ echo "Hola,   mundo"\nHola,   mundo');
assert.equal(t('touch x.txt\nls'), '$ touch x.txt\n$ ls\ncompras.txt  Descargas  Documentos  ventas.csv  x.txt');
assert.match(t('sudo apt install tree'), /no está; probalo en la terminal de tu computadora/);
// Cada ejecución arranca de cero
t('rm compras.txt'); assert.match(t('cat compras.txt'), /^\$ cat compras.txt\nyerba/);

// Los bloques del curso
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(R, CARPETA, 'contenido.js'), 'utf8'), ctx);
const decodificar = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const renglones = s => s.replace(/\r/g, '').split('\n').map(x => x.trimEnd()).join('\n').trim();
const errores = [];
let casos = 0, salidas = 0;
for (const m of ctx.window.TEMARIO) for (const [n, l] of m.lecciones.entries()) {
  const bloques = [...l.html.matchAll(/<pre( class="terminal")?><code>([\s\S]*?)<\/code><\/pre>/g)].map(x => ({ term: !!x[1], texto: decodificar(x[2]) }));
  bloques.forEach((b, i) => {
    if (!b.term) return;
    casos++;
    const sig = (bloques[i + 1] || {}).texto || '';
    if (!sig.startsWith('Salida:')) return;
    salidas++;
    const esperada = renglones(sig.replace(/^Salida:\n?/, '')), real = renglones(terminalSimulada(b.texto));
    if (esperada !== real) errores.push(`${m.id} lección ${n + 1}, bloque ${i + 1}: la salida no coincide\n--- dice la lección:\n${esperada}\n--- da la terminal:\n${real}`);
  });
}
if (casos < 10) errores.push(`solo ${casos} bloques de terminal: el curso tendría que tener al menos 10`);
if (errores.length) { console.error(errores.join('\n\n')); process.exit(1); }
console.log(`test-terminal OK: ${CARPETA} (${casos} bloques corridos, ${salidas} salidas comparadas)`);
