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
  m.pasos.filter(s => s.taller).forEach(s => assert(['entrenar', 'palabras', 'robot', 'tapar', 'sesgo', 'patron'].includes(s.taller), 'actividad inexistente: ' + s.taller));
  // Intercalado: nunca más de 2 preguntas seguidas sin una idea o una práctica en el medio.
  let seguidas = 0;
  m.pasos.forEach(s => { seguidas = s.q || s.clasificar ? seguidas + 1 : 0; assert(seguidas <= 2, 'misión ' + i + ': más de 2 preguntas seguidas'); });
});
// Metacognición: cada misión termina con una pregunta corta para explicar con tus palabras.
M.forEach((m, i) => assert(m.reflexion && m.reflexion.endsWith('?') && m.reflexion.split(' ').length <= 15, 'misión ' + i + ' sin reflexión corta'));
// Repaso espaciado: solo pregunta de misiones terminadas, y nada si no terminó ninguna.
const repasoDe = new Function(js.split('const app =')[0] + js.split('// Repaso espaciado')[1].split('function inicio()')[0].replace(/^[^\n]*\n/, '') + ';return preguntaRepaso')();
assert.equal(repasoDe({}), null);
for (let k = 0; k < 20; k++) assert.equal(repasoDe({ 2: 3 }, () => k / 20).m.titulo, M[2].titulo);
assert(M.filter(m => m.pasos.some(s => s.taller)).length >= 6, 'todas las misiones con práctica adentro');
assert(!/https?:\/\/(?!atacante)/.test(h), 'no tiene que haber links a sitios externos');

// Taller: solo las funciones puras (sin tocar el DOM).
const taller = js.split('// ---------- Taller')[1].split('function taller(')[0].replace(/^[^\n]*\n/, '');
const X = new Function(js.split('const app =')[0] + taller + ';return { NOMBRE_DIR, DIR, NOMBRE_SESGO, REGLAS, OTRAS_F, SESGO_INICIO, SESGO_AGREGAR, dibujarIA, masComun, MENSAJE, predecir, aprenderTexto, siguientes, escribirSola, correrRobot, NIVELES, DEMO, palabrasDe }')();

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
// Tapá los datos: tiene datos para tapar y también cosas que se pueden preguntar.
assert(X.MENSAJE.some(([, x]) => x === 1) && X.MENSAJE.some(([, x]) => x === 2));
// Arreglá el sesgo: empieza sesgado y se equilibra agregando un ejemplo de cada tipo.
assert(X.masComun(X.SESGO_INICIO) > 0.5);
assert.equal(X.dibujarIA([...X.SESGO_INICIO].sort()).filter(e => e === X.SESGO_INICIO[0]).length, 4);
assert(X.masComun([...X.SESGO_INICIO, ...X.SESGO_AGREGAR]) <= 0.5);
// Sé la máquina: cada regla incorrecta tiene que contradecir al menos un ejemplo, así se puede descubrir mirándolos.
X.REGLAS.forEach(R => R.otras.forEach(o => {
  assert(X.OTRAS_F[o], 'regla sin función: ' + o);
  assert(R.ejemplos.some(n => X.OTRAS_F[o](n) !== R.f(n)), `"${o}" no se distingue de "${R.ok}" con los ejemplos`);
}));
// Accesibilidad: cada botón con emoji tiene un nombre distinto para lectores de pantalla.
assert.deepStrictEqual(Object.keys(X.NOMBRE_DIR), Object.keys(X.DIR));
assert.equal(X.NOMBRE_SESGO.length, X.SESGO_AGREGAR.length);
assert(!/aria-label="Agregar (paso|ejemplo)"/.test(h), 'etiqueta repetida para botones distintos');
// Práctica suficiente: entrenar pide 3 frases distintas y autocompletar 2 palabras, y solo cuentan los intentos que funcionan.
assert(/probadas\.size >= 3\) alLograr/.test(h) && /usadas\.size >= 2\) alLograr/.test(h));
console.log('test-chicos OK');
