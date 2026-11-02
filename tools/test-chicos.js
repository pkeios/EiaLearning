// Prueba la versión para chicos: datos de las misiones y lógica del taller. Uso: node tools/test-chicos.js
const fs = require('fs');
const assert = require('assert');
const h = fs.readFileSync(__dirname + '/../public/chicos/index.html', 'utf8');
const js = h.split('<script>')[1].split('</script>')[0];
new Function(js); // sintaxis

// Misiones: 3 ejercicios cada una, respuestas válidas, frases cortas y práctica intercalada.
const M = new Function(js.split('const app =')[0] + 'return MISIONES')();
M.forEach((m, i) => {
  const ej = m.pasos.filter(s => s.q || s.clasificar);
  assert.equal(ej.length, 3, 'misión ' + i);
  ej.forEach(s => { if (s.q) assert(s.c < s.o.length); else s.items.forEach(([, g]) => assert(g < s.grupos.length)); });
  m.pasos.filter(s => s.idea || s.taller).forEach(s => assert(s.t.split(' ').length <= 22, 'texto largo: ' + s.t));
  m.pasos.filter(s => s.taller).forEach(s => assert(['entrenar', 'palabras', 'robot'].includes(s.taller), 'actividad inexistente: ' + s.taller));
  // Intercalado: nunca más de 2 preguntas seguidas sin una idea o una práctica en el medio.
  let seguidas = 0;
  m.pasos.forEach(s => { seguidas = s.q || s.clasificar ? seguidas + 1 : 0; assert(seguidas <= 2, 'misión ' + i + ': más de 2 preguntas seguidas'); });
});
assert(M.filter(m => m.pasos.some(s => s.taller)).length >= 3, 'al menos 3 misiones con práctica adentro');
assert(!/https?:\/\/(?!atacante)/.test(h), 'no tiene que haber links a sitios externos');

// Taller: solo las funciones puras (sin tocar el DOM).
const taller = js.split('// ---------- Taller')[1].split('function taller(')[0].replace(/^[^\n]*\n/, '');
const X = new Function(js.split('const app =')[0] + taller + ';return { predecir, aprenderTexto, siguientes, escribirSola, correrRobot, NIVELES, DEMO, palabrasDe }')();

const ej = X.DEMO.map(([t, g]) => ({ t, g }));
assert(X.predecir(ej, 'gané la prueba').prob[0] > 0.5);
assert(X.predecir(ej, 'se rompió y llueve').prob[1] > 0.5);
assert.equal(X.predecir(ej, 'xyz qwe').claves.length, 0);
assert.deepStrictEqual(X.palabrasDe('¡Había una vez!'), ['había', 'una', 'vez']);

const sig = X.aprenderTexto('el robot lee. el robot juega. el dragón vuela');
assert.deepStrictEqual(X.siguientes(sig, 'el')[0], ['robot', 2]);
assert.equal(X.escribirSola(sig, 'el', 3, () => 0), 'el robot lee el');

// Cada nivel del robot tiene que tener solución.
const [D, R, U] = ['⬇️', '➡️', '⬆️'];
assert.equal(X.correrRobot(X.NIVELES[0], [D, D, D, D, R, R, R, R]).fin, 'estrella');
assert.equal(X.correrRobot(X.NIVELES[1], [D, D, D, R, R, R, R, U]).fin, 'estrella');
assert.equal(X.correrRobot(X.NIVELES[2], [D, D, D, R, R, U, U, U, R, R, D, D, D]).fin, 'estrella');
assert.equal(X.correrRobot(X.NIVELES[1], [R, R]).fin, 'choque');
assert.equal(X.correrRobot(X.NIVELES[2], [D]).fin, 'corto');
console.log('test-chicos OK');
