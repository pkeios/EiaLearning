// Prueba la lógica de public/app.js sin navegador. Uso: node tools/test-app.js
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const leer = f => fs.readFileSync(path.join(__dirname, '..', 'public', f), 'utf8');
const el = { querySelector: () => el, querySelectorAll: () => [], focus() {}, value: '', h: '', set innerHTML(v) { this.h = v; }, get innerHTML() { return this.h; } };
const botonTema = {};
let guardado = null;
const ctx = { window: {}, document: { getElementById: id => id === 'tema' ? botonTema : el, documentElement: { dataset: { tema: 'oscuro' } } }, localStorage: { getItem: () => guardado, setItem: (k, v) => { guardado = v; } }, location: { hash: '' }, addEventListener() {}, scrollTo() {}, Date, URL };
vm.createContext(ctx);
vm.runInContext(leer('contenido.js'), ctx);
vm.runInContext(leer('glosario.js'), ctx);
vm.runInContext(leer('app.js') + ';this.X = { registrar, tocaHoy, dia, limpiarProgreso, cargar, racha, estudiar, buscar, promptTutor, modulosAFallas, marcas };', ctx);
const { registrar, tocaHoy, dia, limpiarProgreso, cargar, racha, estudiar, buscar, promptTutor, modulosAFallas, marcas } = ctx.X;
const plano = o => JSON.parse(JSON.stringify(o));

// Inicio renderiza con progreso vacío
assert.ok(el.h.includes('id="exportar"'));

// Repetición espaciada: fallar agenda para mañana; cada acierto avanza 3, 7, 14 días; el siguiente la saca
const p = cargar(), k = 'm|q';
assert.match(dia(), /^\d{4}-\d{2}-\d{2}$/);
registrar(p, k, false);
assert.equal(p.agenda[k].d, dia(1));
assert.ok(!tocaHoy(p, k));
p.agenda[k].d = dia();
assert.ok(tocaHoy(p, k));
for (const [n, d] of [[1, 3], [2, 7], [3, 14]]) { registrar(p, k, true); assert.deepStrictEqual(plano(p.agenda[k]), { n, d: dia(d) }); }
registrar(p, k, true);
assert.ok(!p.falladas[k] && !p.agenda[k]);
registrar(p, 'nunca-fallada', true);
assert.ok(!p.falladas['nunca-fallada']);
p.falladas.vieja = true; // progreso de antes de la agenda: se repasa hoy
assert.ok(tocaHoy(p, 'vieja'));

// Racha: días seguidos; si hoy no estudiaste todavía, cuenta hasta ayer; un hueco la corta
const r = cargar();
assert.equal(racha(r), 0);
r.dias[dia(-1)] = 1; r.dias[dia(-2)] = 3; r.dias[dia(-4)] = 1;
assert.equal(racha(r), 2);
estudiar(r); estudiar(r);
assert.equal(r.dias[dia()], 2);
assert.equal(racha(r), 3);

// Importar: solo campos conocidos, con tipos y rangos válidos
const l = limpiarProgreso({ leidas: { 'a:0': 1 }, notas: { a: '<img onerror=x>', b: 150, c: 85 }, apuntes: { a: 5 }, examen: '90', raro: 1,
  falladas: { x: 1 }, agenda: { x: { n: '9', d: '<x>' }, y: { n: 1, d: '2026-12-01' } }, dias: { '2026-11-01': '2', 'malo': 5, '2026-10-31': -3 } });
assert.deepStrictEqual(plano(l), { leidas: { 'a:0': true }, notas: { a: 0, b: 100, c: 85 }, falladas: { x: true }, apuntes: { a: '5' },
  agenda: { x: { n: 3, d: dia() }, y: { n: 1, d: '2026-12-01' } }, dias: { '2026-11-01': 2, '2026-10-31': 0 }, examen: 90 });
for (const malo of [null, [], 5, 'x']) assert.throws(() => limpiarProgreso(malo));

// Buscador: sin tildes ni mayúsculas, todas las palabras deben aparecer
assert.equal(buscar('').length, 0);
assert.equal(buscar('a').length, 0);
assert.ok(buscar('KV CACHE').some(x => x.m.id === 'fine-tuning'));
assert.ok(buscar('atencion').length > 0);
assert.ok(buscar('embeddings rag').every(x => x.norm.includes('embeddings') && x.norm.includes('rag')));
assert.equal(buscar('palabrainexistentexyz').length, 0);
ctx.location.hash = '#/buscar';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('Escribí al menos 2 letras') || el.h.includes('consulta'));

// Prompt de tutor: incluye objetivos y lecciones; la explicación del alumno solo si escribió algo
const mod = ctx.window.TEMARIO[0];
const sinApunte = promptTutor(mod, '   ');
assert.ok(sinApunte.includes(mod.titulo) && sinApunte.includes(mod.objetivos[0]) && sinApunte.includes(mod.lecciones[0].titulo));
assert.ok(!sinApunte.includes('mi explicación'));
assert.ok(promptTutor(mod, 'Un vector es una lista').includes('Un vector es una lista'));
ctx.location.hash = '#/m/' + mod.id;
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('id="tutor"'));

// Tema: el botón alterna y recuerda la elección
assert.equal(botonTema.textContent, '☀️');
botonTema.onclick();
assert.equal(ctx.document.documentElement.dataset.tema, 'claro');
assert.equal(botonTema.textContent, '🌙');
assert.equal(guardado, 'claro');
botonTema.onclick();
assert.equal(ctx.document.documentElement.dataset.tema, 'oscuro');

// Glosario: se renderiza ordenado y cada término enlaza a su módulo
ctx.location.hash = '#/glosario';
vm.runInContext('render()', ctx);
assert.ok(el.h.indexOf('<dt>AdamW</dt>') < el.h.indexOf('<dt>Ventana de contexto</dt>'));
assert.ok(el.h.includes('href="#/m/rag"'));

// Fallas por módulo: agrupa, cuenta y respeta el orden del temario
const fallas = [{ m: 'rag' }, { m: 'fundamentos' }, { m: 'rag' }];
assert.deepStrictEqual(plano(modulosAFallas(fallas).map(([m, n]) => [m.id, n])), [['fundamentos', 1], ['rag', 2]]);
assert.equal(modulosAFallas([]).length, 0);

// Resaltado: encuentra palabras sin tildes ni mayúsculas y devuelve rangos sobre el texto original
assert.deepStrictEqual(plano(marcas('La Atención y la atencion', 'atención')), [[3, 11], [17, 25]]);
assert.deepStrictEqual(plano(marcas('costo (USD) total', 'usd)')), [[7, 11]]);
assert.equal(marcas('hola', '').length, 0);

// El buscador enlaza a la lección exacta
vm.runInContext('ultimaBusqueda = "kv cache"', ctx);
ctx.location.hash = '#/buscar';
vm.runInContext('render()', ctx);
assert.match(el.h, /href="#\/m\/fine-tuning\/\d+"/);
vm.runInContext('ultimaBusqueda = ""', ctx);
guardado = null;
ctx.location.hash = '#/m/rag/1';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('Embeddings y RAG'));

// Repaso vacío muestra un mensaje en lugar de un formulario
guardado = null;
ctx.location.hash = '#/repaso';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('No tenés preguntas falladas'));

console.log('test-app OK');
