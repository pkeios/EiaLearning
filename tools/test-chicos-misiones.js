// Prueba los cursos para chicos en formato de misiones (public/chicos/misiones.js y sus archivos de datos).
// Uso: node tools/test-chicos-misiones.js. Los desafíos de código y las pantallas se prueban en Edge con tools/edge-chicos-misiones.js.
const fs = require('fs');
const assert = require('assert');
const dir = __dirname + '/../public/chicos/';
const motor = fs.readFileSync(dir + 'misiones.js', 'utf8');
new Function('window', 'document', motor.split('// ---------- Pantalla')[0]); // sintaxis
// Cada curso: su página, su archivo de datos y lo que tiene que tener.
const CURSOS = [
  { html: 'web.html', datos: 'web-misiones.js', clave: 'chicos-web', min: 12, codigo: 10, tareas: 2 },
  { html: 'internet.html', datos: 'internet-misiones.js', clave: 'chicos-internet', min: 7, codigo: 0, tareas: 6 },
  { html: 'programar.html', datos: 'programar-misiones.js', clave: 'chicos-programar', min: 7, codigo: 0, tareas: 6 },
];
const palabras = t => t.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
const claves = new Set();
const entrada = fs.readFileSync(dir + 'index.html', 'utf8'), home = fs.readFileSync(dir + '../index.html', 'utf8');
for (const C of CURSOS) {
  const h = fs.readFileSync(dir + C.html, 'utf8'), datos = fs.readFileSync(dir + C.datos, 'utf8');
  const window = {};
  new Function('window', datos)(window);
  const K = window.CURSO_CHICOS, M = K.misiones;
  // La página carga sus datos y después el motor compartido, y usa los estilos de los cursos para chicos.
  assert(h.indexOf(`src="${C.datos}"`) > 0 && h.indexOf(`src="${C.datos}"`) < h.indexOf('src="misiones.js"'), C.html + ': carga datos y motor en orden');
  assert(h.includes('href="estilos.css"'), C.html + ': estilos de chicos');
  assert.equal(K.clave, C.clave, C.html + ': clave del progreso');
  assert(!claves.has(K.clave) && !['chicos', 'chicos-taller', 'chicos-ingles'].includes(K.clave), C.html + ': clave repetida'); claves.add(K.clave);
  assert(K.titulo && K.emoji && K.intro && K.color, C.html + ': datos del curso');
  assert(M.length >= C.min, `${C.html}: al menos ${C.min} misiones`);
  M.forEach((m, i) => {
    const nombre = `${C.html}, misión ${i + 1} (${m.titulo})`;
    // Tres ejercicios con estrella, como en todas las misiones para chicos.
    const ej = m.pasos.filter(s => s.q || s.clasificar || s.ordenar);
    assert.equal(ej.length, 3, nombre + ': tiene que tener 3 ejercicios');
    ej.forEach(s => {
      if (s.q) assert(Number.isInteger(s.c) && s.c < s.o.length, nombre + ': respuesta inválida');
      if (s.clasificar) s.items.forEach(([, g]) => assert(g < s.grupos.length, nombre + ': grupo inválido'));
      if (s.ordenar) assert(s.items.length >= 3 && new Set(s.items).size === s.items.length, nombre + ': para ordenar hacen falta 3 pasos distintos');
    });
    // Aprender haciendo: cada misión tiene algo para hacer, en el editor de la página o fuera de la pantalla.
    assert(m.pasos.some(s => s.codigo || s.tarea), nombre + ': sin práctica');
    m.pasos.filter(s => s.codigo).forEach(s => assert(typeof s.chequeo === 'function' && s.pista && typeof s.inicial === 'string', nombre + ': desafío de código incompleto'));
    // Método: nada se pide sin enseñarlo antes. Cada desafío muestra un ejemplo parecido (no la solución),
    // y antes de cada desafío, desde el anterior, hay al menos una idea con código de ejemplo.
    m.pasos.forEach((s, k) => {
      if (!s.codigo) return;
      assert(s.ej && s.ej.trim() !== s.inicial.trim(), nombre + ': el desafío "' + s.codigo + '" no muestra un ejemplo');
      // Consigna clara: si el código ya trae algo, la consigna dice dónde escribir (y no deja adivinar).
      if (s.inicial.trim()) assert(/debajo|adentro|entre|donde|en la línea|cambiá|en el párrafo|ya tiene|arregl|complet/i.test(s.codigo), nombre + ': la consigna no dice dónde escribir: ' + s.codigo);
      // Lo que no se puede borrar tiene que estar de verdad en el código inicial.
      (s.necesita || []).forEach(x => assert(x[0] === '#' ? s.inicial.includes(`id="${x.slice(1)}"`) : x[0] === '.' ? s.inicial.includes(`class="${x.slice(1)}"`) : s.inicial.includes('<' + x), nombre + ': necesita ' + x + ' y el código inicial no lo trae'));
      const desde = m.pasos.slice(0, k).map(x => !!x.codigo).lastIndexOf(true) + 1;
      assert(m.pasos.slice(desde, k).some(x => x.idea && x.ej), nombre + ': antes del desafío "' + s.codigo + '" falta una idea con ejemplo');
    });
    // Videos de apoyo: solo en las ideas, con el formato "Título · Canal (duración)".
    m.pasos.filter(s => s.video).forEach(s => {
      assert(s.idea, nombre + ': el video va en una idea');
      assert(/^[\w-]{11}$/.test(s.video.id) && /^.+ · .+ \(\d+:\d\d\)$/.test(s.video.t), nombre + ': video mal escrito: ' + JSON.stringify(s.video));
    });
    m.pasos.filter(s => s.tarea).forEach(s => assert(s.pasos.length >= 2, nombre + ': tarea sin pasos'));
    // Frases cortas: una idea por tarjeta.
    m.pasos.filter(s => s.idea).forEach(s => assert(palabras(s.t) <= 22, 'texto largo: ' + s.t));
    // Intercalado: nunca más de 2 ejercicios seguidos sin una idea o una práctica en el medio.
    let seguidas = 0;
    m.pasos.forEach(s => { seguidas = s.q || s.clasificar || s.ordenar ? seguidas + 1 : 0; assert(seguidas <= 2, nombre + ': más de 2 ejercicios seguidos'); });
    // Metacognición: cierra con una pregunta corta para explicar con sus palabras.
    assert(m.reflexion.endsWith('?') && palabras(m.reflexion) <= 15, nombre + ': reflexión');
    // En los textos que se muestran como HTML, < y > van escapados (si no, el navegador los toma como etiquetas).
    m.pasos.forEach(s => [s.t, s.q, s.codigo, s.pista, s.ordenar, s.clasificar, s.tarea, ...(s.grupos || []), ...(s.tarea ? s.pasos : [])].filter(Boolean)
      .forEach(t => assert(!/<(?!\/?(code|br|strong)>)[a-z!/]/i.test(t), nombre + ': etiqueta sin escapar en "' + t + '"')));
  });
  assert(M.filter(m => m.pasos.some(s => s.codigo)).length >= C.codigo, C.html + ': misiones con editor');
  assert(M.filter(m => m.pasos.some(s => s.tarea)).length >= C.tareas, C.html + ': misiones con algo para hacer fuera de la pantalla');
  // Videos para quien no entendió con el texto: al menos 4 por curso, sin repetir.
  const vids = M.flatMap(m => m.pasos).filter(s => s.video).map(s => s.video.id);
  assert(vids.length >= 4 && new Set(vids).size === vids.length, C.html + ': al menos 4 videos distintos');
  // Nada de links a sitios externos en los cursos para chicos (los videos se insertan desde el motor, sin cookies).
  assert(!/https?:\/\//.test(h + datos), C.html + ': no tiene que haber links a sitios externos');
  // Se llega desde el inicio del sitio y desde la entrada de los cursos para chicos.
  assert(home.includes(`href="chicos/${C.html}"`), 'el inicio no enlaza ' + C.html);
  assert(entrada.includes(`href="${C.html}"`), 'la entrada de chicos no enlaza ' + C.html);
  if (C.html === 'web.html') {
    // El if se prueba con varios valores: correrJS cambia la variable y corre el código aparte.
    const { correrJS } = K.ayuda;
    const bien = '<script>\n  let nota = 8;\n  if (nota >= 6) { console.log("Aprobado"); } else { console.log("A estudiar"); }\n</script>';
    assert.equal(correrJS(bien, /let nota = \d+/, 'let nota = 4'), 'A estudiar');
    const nota = M.flatMap(m => m.pasos).find(s => s.codigo && s.inicial.includes('let nota'));
    assert.equal(nota.chequeo(null, bien), '');
    assert.notEqual(nota.chequeo(null, bien.replace('>=', '>')), '');
    assert.notEqual(nota.chequeo(null, nota.inicial), '');
  }
  console.log(`  ${C.html}: ${M.length} misiones, ${M.flatMap(m => m.pasos).filter(s => s.codigo).length} desafíos de código, ${M.flatMap(m => m.pasos).filter(s => s.tarea).length} tareas`);
}
// Los cursos viejos (formato para adultos) ahora redirigen a sus misiones.
[['chicos-internet', 'internet.html'], ['chicos-programar', 'programar.html']].forEach(([viejo, nuevo]) => {
  const r = fs.readFileSync(`${dir}../${viejo}/index.html`, 'utf8');
  assert(r.includes(`url=../chicos/${nuevo}`) && r.includes(`location.replace('../chicos/${nuevo}')`), viejo + ' no redirige');
  assert(!fs.existsSync(`${dir}../${viejo}/contenido.js`), viejo + ': sobra el contenido viejo');
});

// Lógica sin pantalla del motor
const window = { CURSO_CHICOS: { clave: 'x', misiones: [] } };
const L = new Function('window', motor.split('// ---------- Pantalla')[0] + 'return { errorAmigable, armarDoc, sinEntidades, vacio, mezclar, esEjercicio };')(window);
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
// Ordenar: siempre mezclado (nunca en el orden correcto) y con todos los pasos.
for (let k = 0; k < 50; k++) { const o = L.mezclar(['a', 'b', 'c']); assert.deepStrictEqual([...o].sort(), [0, 1, 2]); assert.notDeepStrictEqual(o, [0, 1, 2]); }
assert.notDeepStrictEqual(L.mezclar(['a', 'b'], () => 0.99), [0, 1]);
assert(L.esEjercicio({ ordenar: 'x' }) && !L.esEjercicio({ tarea: 'x' }));
console.log('test-chicos-misiones OK');
