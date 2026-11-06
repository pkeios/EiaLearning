// Prueba el curso de inglés para chicos: contenido, metodología y lógica. Uso: node tools/test-ingles.js
const fs = require('fs');
const assert = require('assert');
const dir = __dirname + '/../public/chicos/';
const datos = fs.readFileSync(dir + 'ingles-unidades.js', 'utf8');
const h = fs.readFileSync(dir + 'ingles.html', 'utf8');
const js = h.split('<script>')[1].split('</script>')[0];
new Function(datos + js.replace(/rutear\(\);\s*$/, '')); // sintaxis

const logica = js.split('const app =')[0];
const X = new Function(datos + logica + ';return { UNIDADES, GRUPOS_VERBOS, VERBOS, normalizar, esCorrecta, claveEj, estrellasDe, agendarPrimera, registrarRepaso, dia, repasables, paraRepasar, fichas, filtrarVerbos, ejercicioVerbo, INTERVALOS, teoriaDe, APROBAR };')();
const { UNIDADES: U, normalizar, esCorrecta, claveEj } = X;

// Las palabras visibles de una frase, sin el marcado de negrita.
const largo = t => t.replace(/\*\*/g, '').split(' ').length;
const esEjercicio = s => s.q || s.clasificar || s.escribir || s.ordenar || s.dictado;
const claves = new Set(), diario = new Set();
assert.equal(U.length, 10, 'tienen que ser 10 unidades');

U.forEach((u, i) => {
  const n = `unidad ${i + 1}`;
  // Metacognición: objetivos que se pueden comprobar y una pregunta para explicar con sus palabras.
  assert(u.objetivos.length >= 3, n + ': objetivos');
  u.objetivos.forEach(o => assert(!/^(entender|saber|conocer)\b/i.test(o), n + ': objetivo vago: ' + o));
  assert(u.reflexion.endsWith('?') || u.reflexion.endsWith('.'), n + ': reflexión');
  assert(largo(u.reflexion) <= 16, n + ': reflexión larga: ' + u.reflexion);

  // Variedad: cada unidad tiene regla visual, vocabulario, lectura, dictado, armar frases, escribir y preguntas personales.
  const cuantos = t => u.pasos.filter(s => s[t]).length;
  assert(cuantos('tabla') >= 1, n + ': falta tabla');
  assert(cuantos('vocab') >= 1, n + ': falta vocabulario');
  assert(cuantos('leer') >= 1, n + ': falta lectura');
  assert(cuantos('dictado') >= 1, n + ': falta dictado');
  assert(cuantos('ordenar') >= 1, n + ': falta armar frases');
  assert(cuantos('escribir') >= 2, n + ': falta escribir');
  assert(cuantos('personal') >= 2, n + ': faltan preguntas personales');
  assert(u.pasos.filter(esEjercicio).length >= 10, n + ': pocos ejercicios');

  // Espaciado e intercalado: desde la unidad 2, algo de unidades anteriores.
  if (i > 0) assert(u.pasos.some(s => s.rep), n + ': sin repaso de unidades anteriores');

  // Intercalado: nunca más de 3 ejercicios seguidos sin una idea, una lectura o algo propio.
  let seguidos = 0;
  u.pasos.forEach(s => { seguidos = esEjercicio(s) ? seguidos + 1 : 0; assert(seguidos <= 3, n + ': más de 3 ejercicios seguidos, en: ' + (claveEj(s) || s.clasificar || s.dictado)); });

  u.pasos.forEach(s => {
    // Carga cognitiva: una idea por tarjeta.
    if (s.idea) assert(largo(s.t) <= 22, n + ': idea larga: ' + s.t);
    // Retroalimentación: todo ejercicio explica, y da pista antes de mostrar la respuesta.
    if (esEjercicio(s)) assert(s.e && s.e.length > 15, n + ': sin explicación: ' + JSON.stringify(s).slice(0, 60));
    if (s.q || s.escribir || s.ordenar) assert(s.p, n + ': sin pista: ' + claveEj(s));
    if (s.q) { assert(s.c >= 0 && s.c < s.o.length && s.o.length >= 2); assert.equal(new Set(s.o).size, s.o.length, 'opción repetida: ' + s.q); }
    if (s.clasificar) { s.items.forEach(([, g]) => assert(g < s.grupos.length)); s.grupos.forEach((_, g) => assert(s.items.some(([, x]) => x === g), 'grupo vacío: ' + s.clasificar)); }
    if (s.tabla) s.filas.forEach(f => assert.equal(f.length, s.cols.length, 'tabla mal armada: ' + s.tabla));
    // La clave del repaso no se puede repetir.
    const k = claveEj(s);
    if (k) { assert(!claves.has(k), 'ejercicio repetido: ' + k); claves.add(k); }
    if (s.escribir) {
      s.r.forEach(r => assert(normalizar(r), 'respuesta vacía: ' + k));
      Object.keys(s.m || {}).forEach(t => assert(!esCorrecta(s, t), 'una trampa coincide con una respuesta: ' + t));
    }
    // Armar la frase: las fichas, ordenadas, tienen que dar la respuesta.
    if (s.ordenar) assert(esCorrecta(s, X.fichas(s.r[0]).join(' ')), 'fichas que no arman la frase: ' + s.r[0]);
    if (s.dictado) assert(esCorrecta(s, s.dictado), 'dictado: ' + s.dictado);
    if (s.personal) {
      assert(!diario.has(s.clave), 'clave repetida: ' + s.clave);
      diario.add(s.clave);
      // El ejemplo que se muestra tiene que pasar su propio chequeo, y una respuesta vacía no.
      assert(new RegExp(s.patron).test(normalizar(s.modelo)), 'el modelo no pasa el patrón: ' + s.modelo);
      assert(!new RegExp(s.patron).test(''), 'el patrón acepta vacío: ' + s.personal);
      assert(s.pista && s.es);
      // Seguridad: como en el curso de IA, nunca se piden datos personales sensibles.
      assert(!/address|phone|surname|last name|password|school name/i.test(s.personal), 'pide un dato sensible: ' + s.personal);
    }
  });
});
assert(!/https?:\/\//.test(datos + h), 'no tiene que haber links a sitios externos');

// Cubre lo pedido: presente simple, continuo, pasado regular e irregular, preguntas y to be en pasado.
const todo = JSON.stringify(U);
['doesn', 'studies', 'is playing', 'swimming', 'studied', 'stopped', 'went', 'bought', "didn't", 'Did you', 'were'].forEach(t => assert(todo.includes(t), 'falta: ' + t));

// Respuestas: sin importar mayúsculas, puntuación ni formas cortas.
assert.equal(normalizar("  I DON'T play. "), 'i do not play');
assert.equal(normalizar("She's running!"), 'she is running');
assert.equal(normalizar("I'm 13"), 'i am 13');
assert.equal(normalizar('They’re here'), 'they are here');
assert.equal(normalizar("Maya's dog"), "maya's dog", 'el posesivo no se expande');
assert(esCorrecta({ r: ["We don't go"] }, 'we do not go.'));
assert(!esCorrecta({ r: ['plays'] }, 'play'));
assert(esCorrecta({ dictado: 'I am here.' }, "I'm here"));
assert(esCorrecta({ dictado: 'My friend is thirteen.', r: ['My friend is 13.'] }, 'my friend is 13'));
assert(esCorrecta({ dictado: 'My friend is thirteen.', r: ['My friend is 13.'] }, 'my friend is thirteen'));
assert.deepStrictEqual(X.fichas("Where are you from?"), ['where', 'are', 'you', 'from']);
assert.deepStrictEqual(X.fichas("I don't know."), ['I', "don't", 'know']);

// Estrellas.
assert.equal(X.estrellasDe(10, 10), 3);
assert.equal(X.estrellasDe(9, 10), 3);
assert.equal(X.estrellasDe(8, 10), 2);
assert.equal(X.estrellasDe(7, 10), 1);
assert.equal(X.estrellasDe(6, 10), 0, 'menos de 70% no aprueba');
assert.equal(X.estrellasDe(0, 10), 0);
assert.equal(X.estrellasDe(0, 0), 0);
// Se puede entrar a cualquier unidad en cualquier orden: la penalización está en la nota, no en un bloqueo.
assert(!h.includes('desbloqueada') && !h.includes('🔒'), 'las unidades no se bloquean');
// Sin reintentos para acertar tocando todo: al elegir o clasificar mal, el ejercicio termina como error.
assert(h.includes("aviso(`❌ No era esa.") && !h.includes('Ese no va ahí'), 'elegir y clasificar tienen una sola oportunidad');

// Repaso espaciado: acierto a 3, 7 y 14 días y después sale; un error vuelve a mañana.
const p = { repaso: {} }, k = U[0].pasos.map(claveEj).find(Boolean);
X.agendarPrimera(p, k, true);
assert.deepStrictEqual(p.repaso[k], { n: 0, d: X.dia(1) });
X.agendarPrimera(p, k, true); p.repaso[k].n = 2; X.agendarPrimera(p, k, true);
assert.equal(p.repaso[k].n, 2, 'volver a jugar bien la unidad no pierde el avance');
p.repaso[k] = { n: 0, d: X.dia(1) };
X.registrarRepaso(p, k, true); assert.deepStrictEqual(p.repaso[k], { n: 1, d: X.dia(3) });
X.registrarRepaso(p, k, true); assert.deepStrictEqual(p.repaso[k], { n: 2, d: X.dia(7) });
X.registrarRepaso(p, k, false); assert.deepStrictEqual(p.repaso[k], { n: 0, d: X.dia(1) });
p.repaso[k] = { n: 3, d: X.dia() };
assert.deepStrictEqual(X.paraRepasar(p), [k], 'lo de hoy se repasa');
X.registrarRepaso(p, k, true); assert.equal(p.repaso[k], undefined, 'dominado: ya no vuelve');
p.repaso[k] = { n: 0, d: X.dia(1) };
assert.deepStrictEqual(X.paraRepasar(p), [], 'lo de mañana todavía no');
p.repaso['ejercicio que ya no existe'] = { n: 0, d: X.dia(-5) };
assert.deepStrictEqual(X.paraRepasar(p), [], 'una clave vieja no rompe el repaso');

// Verbos irregulares: sin repetidos, con búsqueda en los dos idiomas y ejercicio que se puede resolver.
const bases = X.VERBOS.map(v => v.base);
assert.equal(new Set(bases).size, bases.length, 'verbo repetido');
assert(bases.length >= 40, 'pocos verbos: ' + bases.length);
X.GRUPOS_VERBOS.forEach(g => assert(g.truco && g.verbos.length >= 4, 'grupo flojo: ' + g.titulo));
assert.equal(X.filtrarVerbos('went')[0].base, 'go');
assert.equal(X.filtrarVerbos('comer')[0].base, 'eat');
assert.equal(X.filtrarVerbos('').length, bases.length);
assert.equal(X.filtrarVerbos('zzz').length, 0);
const ser = X.ejercicioVerbo(X.VERBOS.find(v => v.base === 'be'));
assert(esCorrecta(ser, 'was') && esCorrecta(ser, 'were'));
// Ningún irregular de la lista lleva el -ed de los regulares.
X.VERBOS.forEach(v => assert(!/ed$/.test(v.pasado) || ['fed', 'said', 'heard'].includes(v.pasado), 'parece regular: ' + v.pasado));
// Todo verbo que los ejercicios de la unidad 8 piden está en la tabla de ayuda.
['swim', 'eat', 'buy', 'have', 'lose', 'go', 'see', 'bring', 'give', 'find'].forEach(v => assert(bases.includes(v), 'falta en la tabla: ' + v));
// Las unidades de pasado con irregulares tienen la ayuda a mano.
[7, 8, 9].forEach(i => assert(U[i].ayudaVerbos, 'unidad ' + (i + 1) + ' sin ayuda de verbos'));

// Teoría para imprimir: toda unidad tiene qué llevar en papel, sin lo que solo sirve en pantalla ni los ejercicios.
U.forEach((u, i) => {
  const t = X.teoriaDe(u);
  assert(t.ideas.length && t.tablas.length && t.vocab.length && t.preguntas.length, 'unidad ' + (i + 1) + ': teoría incompleta');
  assert(!t.ideas.some(s => /botón/i.test(s.t)), 'unidad ' + (i + 1) + ': una tarjeta habla de un botón de la pantalla');
});
assert(/@media print[\s\S]*size: A4 landscape/.test(fs.readFileSync(dir + 'estilos.css', 'utf8')), 'la teoría se imprime en A4 horizontal');
assert(h.includes("#/imprimir/todo") && h.includes('#/imprimir/verbos') && h.includes('#/imprimir/${i}'));
assert(!fs.readFileSync(dir + 'index.html', 'utf8').includes('imprimir'), 'imprimir es solo del curso de inglés');

// El PDF para descargar existe y corresponde a la teoría actual.
assert(h.includes('href="ingles-teoria.pdf"') && fs.existsSync(dir + 'ingles-teoria.pdf'), 'falta el PDF para descargar');
assert.equal(fs.readFileSync(dir + 'ingles-teoria.huella', 'utf8').trim(), require('./huella-ingles.js').huellaTeoria(), 'la teoría cambió: regenerá el PDF con node tools/generar-pdf-ingles.js');

// Los cursos para chicos no pueden mostrar una copia vieja si hay internet (por ejemplo, un PDF desactualizado).
const sw = fs.readFileSync(dir + '../sw.js', 'utf8');
assert(sw.includes("pathname.includes('/chicos/')") && sw.indexOf("pathname.includes('/chicos/')") < sw.indexOf('caches.match(e.request).then(enCache => enCache || red)'), 'chicos tiene que ir primero a la red');

// La entrada de chicos deja elegir curso.
const entrada = fs.readFileSync(dir + 'index.html', 'utf8');
assert(entrada.includes('href="ingles.html"'));
assert(entrada.includes('#/ia') && entrada.includes('Elegir curso'));
assert(entrada.includes('href="estilos.css"') && h.includes('href="estilos.css"'));
// El home lleva a los tres cursos, y los enlaces viejos del curso principal siguen funcionando.
const home = fs.readFileSync(dir + '../index.html', 'utf8');
['href="curso.html"', 'href="chicos/#/ia"', 'href="chicos/ingles.html"'].forEach(l => assert(home.includes(l), 'el home no tiene: ' + l));
assert(home.includes("location.replace('curso.html' + location.hash)"), 'los enlaces viejos tienen que redirigir');
const curso = fs.readFileSync(dir + '../curso.html', 'utf8');
assert(curso.includes('src="app.js"') && curso.includes('href="./"'), 'el curso principal tiene que tener su app y el link al home');
assert(fs.readFileSync(dir + '../sw.js', 'utf8').includes("'curso.html'"), 'curso.html tiene que estar disponible sin conexión');
console.log(`test-ingles OK (${U.length} unidades, ${claves.size} ejercicios con repaso, ${bases.length} verbos irregulares)`);
