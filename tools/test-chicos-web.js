// Prueba "Programá tu web" (public/chicos/web.html): datos de las misiones y lógica sin pantalla. Uso: node tools/test-chicos-web.js
// Los desafíos de código se prueban de verdad en el navegador con tools/edge-chicos-web.js.
const fs = require('fs');
const assert = require('assert');
const dir = __dirname + '/../public/chicos/';
const h = fs.readFileSync(dir + 'web.html', 'utf8');
const datos = fs.readFileSync(dir + 'web-misiones.js', 'utf8');
const js = h.slice(h.search(/<script>\r?\n\/\/ ----------/) + 8, h.lastIndexOf('</script>')); // el script principal (el espía de la consola también contiene <script>)
new Function(js); // sintaxis
const window = {};
new Function('window', datos)(window);
const M = window.MISIONES_WEB;
assert(M.length >= 10, 'al menos 10 misiones');

const palabras = t => t.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
M.forEach((m, i) => {
  const nombre = `misión ${i + 1} (${m.titulo})`;
  // Tres ejercicios con estrella, como en las otras misiones para chicos.
  const ej = m.pasos.filter(s => s.q || s.clasificar);
  assert.equal(ej.length, 3, nombre + ': tiene que tener 3 preguntas');
  ej.forEach(s => { if (s.q) assert(Number.isInteger(s.c) && s.c < s.o.length, nombre + ': respuesta inválida'); else s.items.forEach(([, g]) => assert(g < s.grupos.length, nombre + ': grupo inválido')); });
  // Aprender haciendo: cada misión tiene algo para hacer, en el editor de la página o en la compu.
  assert(m.pasos.some(s => s.codigo || s.tarea), nombre + ': sin práctica');
  m.pasos.filter(s => s.codigo).forEach(s => {
    assert(typeof s.chequeo === 'function' && s.pista && typeof s.inicial === 'string', nombre + ': desafío de código incompleto');
    assert(s.chequeo.length >= 1, nombre + ': el chequeo recibe el documento');
  });
  m.pasos.filter(s => s.tarea).forEach(s => assert(s.pasos.length >= 2, nombre + ': tarea sin pasos'));
  // Frases cortas: una idea por tarjeta.
  m.pasos.filter(s => s.idea).forEach(s => assert(palabras(s.t) <= 22, 'texto largo: ' + s.t));
  // Intercalado: nunca más de 2 preguntas seguidas sin una idea o una práctica.
  let seguidas = 0;
  m.pasos.forEach(s => { seguidas = s.q || s.clasificar ? seguidas + 1 : 0; assert(seguidas <= 2, nombre + ': más de 2 preguntas seguidas'); });
  // Metacognición: cierra con una pregunta corta para explicar con sus palabras.
  assert(m.reflexion.endsWith('?') && palabras(m.reflexion) <= 15, nombre + ': reflexión');
  // En los textos que se muestran como HTML, < y > van escapados (si no, el navegador los toma como etiquetas).
  m.pasos.forEach(s => [s.t, s.q, s.codigo, s.pista, ...(s.grupos || []), ...(s.pasos || [])].filter(Boolean)
    .forEach(t => assert(!/<(?!\/?(code|br|strong)>)[a-z!/]/i.test(t), nombre + ': etiqueta sin escapar en "' + t + '"')));
});
// Que el chico escriba código de verdad en casi todas las misiones, y que use el editor de la compu.
assert(M.filter(m => m.pasos.some(s => s.codigo)).length >= 10, 'al menos 10 misiones con editor');
assert(M.filter(m => m.pasos.some(s => s.tarea)).length >= 2, 'al menos 2 misiones en la compu con un editor de texto');
// Nada de links a sitios externos en la versión para chicos.
assert(!/https?:\/\//.test(h + datos), 'no tiene que haber links a sitios externos');

// Lógica sin pantalla
const L = new Function(js.split('// ---------- Pantalla')[0].replace('const MISIONES = window.MISIONES_WEB;', '') + 'return { errorAmigable, armarDoc, sinEntidades, ESPIA, vacio };')();
assert.match(L.errorAmigable('Uncaught ReferenceError: puntaje is not defined'), /No conozco "puntaje"/);
assert.match(L.errorAmigable('TypeError: consol.log is not a function'), /no es una función/);
assert.match(L.errorAmigable("TypeError: Cannot read properties of null (reading 'addEventListener')"), /No encontré ese elemento/);
assert.match(L.errorAmigable('SyntaxError: Unexpected end of input'), /paréntesis/);
assert.equal(L.errorAmigable('Otro error'), 'Otro error');
// El espía va en la misma línea que el código (los números de línea del error no cambian) y después del DOCTYPE.
assert.equal(L.armarDoc('<h1>a</h1>\n<p>b</p>').split('\n').length, 2);
assert(L.armarDoc('<!DOCTYPE html>\n<h1>a</h1>').startsWith('<!DOCTYPE html><script>'));
assert.equal(L.sinEntidades('Falta &lt;h1&gt;'), 'Falta <h1>');
assert.deepStrictEqual(L.vacio(), { m: {}, codigo: {} });
// El progreso va en su propia clave: no pisa el de las misiones de IA ('chicos') ni el de inglés.
assert(h.includes("const CLAVE = 'chicos-web'"));
// El if se prueba con varios valores: correrJS cambia la variable y corre el código aparte.
const { correrJS } = window.MISIONES_WEB_AYUDA;
const bien = '<script>\n  let nota = 8;\n  if (nota >= 6) { console.log("Aprobado"); } else { console.log("A estudiar"); }\n</script>';
assert.equal(correrJS(bien, /let nota = \d+/, 'let nota = 4'), 'A estudiar');
const nota = M.flatMap(m => m.pasos).find(s => s.codigo && s.inicial.includes('let nota'));
assert.equal(nota.chequeo(null, bien), '');
assert.notEqual(nota.chequeo(null, bien.replace('>=', '>')), '');
assert.notEqual(nota.chequeo(null, nota.inicial), '');
// Desde la entrada de los cursos para chicos se llega a este curso.
assert(fs.readFileSync(dir + 'index.html', 'utf8').includes('href="web.html"'));
console.log('test-chicos-web OK:', M.length, 'misiones,', M.flatMap(m => m.pasos).filter(s => s.codigo).length, 'desafíos de código');
