// Prueba la lógica de public/app.js sin navegador. Uso: node tools/test-app.js
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const leer = f => fs.readFileSync(path.join(__dirname, '..', 'public', f), 'utf8');
const el = { querySelector: () => el, querySelectorAll: () => [], focus() {}, value: '', h: '', set innerHTML(v) { this.h = v; }, get innerHTML() { return this.h; } };
const botonTema = {};
let guardado = null;
const ctx = { window: {}, document: { getElementById: id => id === 'tema' ? botonTema : el, documentElement: { dataset: { tema: 'oscuro' }, style: {} } }, localStorage: { getItem: () => guardado, setItem: (k, v) => { guardado = v; } }, location: { hash: '', origin: 'https://ejemplo.dev', pathname: '/curso/' }, addEventListener() {}, scrollTo() {}, Date, URL, setInterval: () => 1, clearInterval() {}, Blob, Response, CompressionStream, DecompressionStream, btoa, atob };
vm.createContext(ctx);
vm.runInContext(leer('contenido.js'), ctx);
vm.runInContext(leer('glosario.js'), ctx);
vm.runInContext(leer('vendor/qrcode.js') + ';this.qrcode = qrcode;', ctx);
ctx.window.qrcode = ctx.qrcode;
vm.runInContext(leer('app.js') + ';this.X = { registrar, tocaHoy, dia, limpiarProgreso, cargar, racha, estudiar, buscar, promptTutor, modulosAFallas, marcas, tarjetaToca, calificarTarjeta, contarAcierto, pctAciertos, avance, clavePractica, registrarExamen, planDeHoy, apuntesMarkdown, esCorrecta, preguntasDeNivel, preguntaObjetivo, cambiarLetra, novedades, marcarConocidas, iniciarNovedades, todasLasLecciones, trozosParaVoz, sumarMinuto, serieMinutos, minutosSemana, textoLogro, empaquetar, desempaquetar, comprimir, descomprimir, compararIntentos };', ctx);
const { registrar, tocaHoy, dia, limpiarProgreso, cargar, racha, estudiar, buscar, promptTutor, modulosAFallas, marcas, tarjetaToca, calificarTarjeta, contarAcierto, pctAciertos, avance, clavePractica, registrarExamen, planDeHoy, apuntesMarkdown, esCorrecta, preguntasDeNivel, preguntaObjetivo, cambiarLetra, novedades, marcarConocidas, iniciarNovedades, todasLasLecciones, trozosParaVoz, sumarMinuto, serieMinutos, minutosSemana, textoLogro, empaquetar, desempaquetar, comprimir, descomprimir, compararIntentos } = ctx.X;
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
  agenda: { x: { n: 3, d: dia() }, y: { n: 1, d: '2026-12-01' } }, dias: { '2026-11-01': 2, '2026-10-31': 0 }, tarjetas: {}, aciertos: {}, practicas: {}, conocidas: {}, minutos: {}, metaSemanal: 120, intentos: {}, examen: 90 });
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

// Tarjetas: nueva toca hoy; "la sabía" la aleja 1, 3, 7, 14 y sigue en 14; "no la sabía" vuelve a hoy
const tp = cargar();
assert.ok(tarjetaToca(tp, 'RAG'));
for (const d of [1, 3, 7, 14, 14]) { calificarTarjeta(tp, 'RAG', true); assert.equal(tp.tarjetas.RAG.d, dia(d)); }
assert.ok(!tarjetaToca(tp, 'RAG'));
calificarTarjeta(tp, 'RAG', false);
assert.deepStrictEqual(plano(tp.tarjetas.RAG), { n: 0, d: dia() });
assert.ok(tarjetaToca(tp, 'RAG'));
assert.deepStrictEqual(plano(limpiarProgreso({ tarjetas: { RAG: { n: '2', d: 'x' } } }).tarjetas), { RAG: { n: 2, d: dia() } });
guardado = null;
ctx.location.hash = '#/tarjetas';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('Dar vuelta'));

// Aciertos por módulo: acumula, calcula porcentaje y se limpia al importar
const ap = cargar();
contarAcierto(ap, { m: 'rag' }, true); contarAcierto(ap, { m: 'rag' }, false); contarAcierto(ap, { m: 'rag' }, true);
assert.deepStrictEqual(plano(ap.aciertos.rag), { ok: 2, total: 3 });
assert.equal(pctAciertos(ap.aciertos.rag), 67);
assert.equal(pctAciertos(undefined), null);
assert.deepStrictEqual(plano(limpiarProgreso({ aciertos: { rag: { ok: 9, total: '4' }, x: { ok: -1 } } }).aciertos), { rag: { ok: 4, total: 4 }, x: { ok: 0, total: 0 } });
guardado = JSON.stringify({ aciertos: { rag: { ok: 1, total: 4 }, llms: { ok: 3, total: 4 } } });
ctx.location.hash = '#/progreso';
vm.runInContext('render()', ctx);
assert.ok(el.h.indexOf('Embeddings y RAG') < el.h.indexOf('Transformers y LLMs'));
guardado = null;

// Práctica: cada ejercicio hecho cuenta en el avance; se guarda por texto y se importa
const mp = ctx.window.TEMARIO[0], pp = cargar();
const total = mp.lecciones.length + mp.practica.length + 1;
assert.equal(avance(mp, pp).pct, 0);
pp.practicas[clavePractica(mp, mp.practica[0])] = true;
assert.deepStrictEqual([avance(mp, pp).hechas, avance(mp, pp).pct], [1, Math.round(100 / total)]);
assert.deepStrictEqual(plano(limpiarProgreso({ practicas: { 'a|x': 1, 'b|y': 0 } }).practicas), { 'a|x': true });
guardado = null;
ctx.location.hash = '#/m/' + mp.id;
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('data-practica="0"'));

// Examen y certificado: guarda la mejor nota y la fecha de la primera aprobación
const ex = cargar();
registrarExamen(ex, 60);
assert.equal(ex.examen, 60); assert.equal(ex.examenFecha, undefined);
registrarExamen(ex, 84); registrarExamen(ex, 70);
assert.equal(ex.examen, 84); assert.equal(ex.examenFecha, dia());
const lc = limpiarProgreso({ nombre: '<b>Ana</b>', examenFecha: 'ayer' });
assert.equal(lc.nombre, '<b>Ana</b>'); assert.equal(lc.examenFecha, undefined);
guardado = JSON.stringify({ examen: 84, examenFecha: '2026-11-01', nombre: '<b>Ana</b>' });
ctx.location.hash = '#/certificado';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('84%') && el.h.includes('&lt;b&gt;Ana&lt;/b&gt;') && !el.h.includes('<b>Ana'));
guardado = JSON.stringify({ examen: 50 });
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('se habilita al aprobar'));
guardado = null;

// Qué estudiar hoy: sin progreso, sugiere tarjetas, la primera lección y la primera práctica del primer módulo
const m0 = ctx.window.TEMARIO[0], h0 = planDeHoy(cargar()).map(x => x.href);
assert.deepStrictEqual(plano(h0), ['#/tarjetas', '#/m/' + m0.id + '/0', '#/m/' + m0.id]);
const hp = cargar();
m0.lecciones.forEach((_, i) => { hp.leidas[m0.id + ':' + i] = true; });
hp.falladas['x|y'] = true;
const h1 = planDeHoy(hp).map(x => x.href);
assert.ok(h1.includes('#/quiz/' + m0.id) && !h1.includes('#/m/' + m0.id + '/0'));
guardado = null;
ctx.location.hash = '#/hoy';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('Qué estudiar hoy') && el.h.includes('class="plan"'));

// Apuntes en Markdown: solo módulos con texto, en el orden del temario
const pa = cargar();
assert.equal(apuntesMarkdown(pa), null);
const [ma, mb] = ctx.window.TEMARIO;
pa.apuntes[mb.id] = ' segundo '; pa.apuntes[ma.id] = 'primero'; pa.apuntes.inexistente = 'x';
const md = apuntesMarkdown(pa);
assert.ok(md.startsWith('# Mis apuntes') && md.indexOf(ma.titulo) < md.indexOf(mb.titulo) && md.includes('segundo\n') && !md.includes(' segundo '));

// Corrección: sin responder nunca es acierto, aunque la correcta sea la opción 0
assert.equal(esCorrecta(null, { correcta: 0 }), false);
assert.equal(esCorrecta('0', { correcta: 0 }), true);
assert.equal(esCorrecta('2', { correcta: 1 }), false);
// Examen con tiempo: muestra el reloj arrancando en 25:00
guardado = null;
ctx.location.hash = '#/examen-tiempo';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('id="reloj"') && el.textContent.includes('25:00'));

// Quiz por nivel: cada pregunta pertenece a un módulo de ese nivel, y entre todos los niveles están todas
const TT = ctx.window.TEMARIO, totalPreguntas = TT.reduce((s, m) => s + m.quiz.length, 0);
const porNivel = ['basico', 'intermedio', 'avanzado', 'proyecto'].map(c => preguntasDeNivel(c));
assert.equal(porNivel.reduce((s, x) => s + x.length, 0), totalPreguntas);
assert.ok(porNivel[0].length > 0 && porNivel[0].every(q => TT.find(m => m.id === q.m).nivel === 'Básico'));
guardado = null;
ctx.location.hash = '#/nivel';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('#/nivel/intermedio'));
ctx.location.hash = '#/nivel/avanzado';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('Quiz de nivel Avanzado') && (el.h.match(/class="pregunta"/g) || []).length === 15);

// Atajos: la pregunta enfocada manda; si no hay foco en ninguna, la primera sin responder
const campo = (respondida, foco) => ({ contains: x => x === foco, querySelector: () => (respondida ? {} : null) });
const foco = {};
assert.equal(preguntaObjetivo([campo(true), campo(false, foco), campo(false)], foco), 1);
assert.equal(preguntaObjetivo([campo(true), campo(true), campo(false)], null), 2);
assert.equal(preguntaObjetivo([campo(true), campo(true)], null), -1);

// Tamaño de letra: sube y baja de a 10%, con límites de 80% y 150%
guardado = null;
assert.equal(cambiarLetra(0.1), 1.1);
assert.equal(ctx.document.documentElement.style.fontSize, '110%');
for (let i = 0; i < 10; i++) cambiarLetra(0.1);
assert.equal(cambiarLetra(0.1), 1.5);
for (let i = 0; i < 20; i++) cambiarLetra(-0.1);
assert.equal(cambiarLetra(-0.1), 0.8);
guardado = null;

// Novedades: al iniciar por primera vez todo cuenta como visto; después, lo que no está en "conocidas" es nuevo
guardado = null;
iniciarNovedades();
const pn = cargar();
assert.equal(novedades(pn).length, 0);
const unaLeccion = todasLasLecciones()[3];
delete pn.conocidas[unaLeccion.m.id + '|' + unaLeccion.l.titulo];
assert.deepStrictEqual(plano(novedades(pn).map(x => x.l.titulo)), [unaLeccion.l.titulo]);
marcarConocidas(pn, novedades(pn));
assert.equal(novedades(pn).length, 0);
guardado = JSON.stringify({ conocidas: { otra: true } });
iniciarNovedades();   // ya inicializado: no toca nada
assert.ok(novedades(cargar()).length > 0);
guardado = null;

// Voz: junta oraciones en trozos de hasta 220 caracteres sin perder texto
assert.deepStrictEqual(plano(trozosParaVoz('Hola.   Esto es una prueba.\n¿Se entiende?')), ['Hola. Esto es una prueba. ¿Se entiende?']);
const largo = 'Una oración bastante larga para la prueba. '.repeat(20);
const tz = trozosParaVoz(largo);
assert.ok(tz.length > 1 && tz.every(t => t.length <= 220) && tz.join(' ') === largo.trim());
assert.equal(trozosParaVoz('').length, 0);

// Tiempo de estudio: suma minutos de hoy, arma 28 días terminando hoy, limpia al importar
const pm = cargar();
sumarMinuto(pm); sumarMinuto(pm);
const serie = serieMinutos(pm);
assert.equal(serie.length, 28);
assert.deepStrictEqual(plano(serie[27]), { d: dia(), m: 2 });
assert.equal(serie[0].d, dia(-27));
assert.deepStrictEqual(plano(limpiarProgreso({ minutos: { '2026-11-01': '30', malo: 5, '2026-10-01': -4 } }).minutos), { '2026-11-01': 30, '2026-10-01': 0 });
guardado = JSON.stringify({ minutos: { [dia()]: 12 } });
ctx.location.hash = '#/progreso';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('Tiempo de estudio') && el.h.includes('12 min') && el.h.includes('Ver como tabla'));
guardado = null;

// Meta semanal: suma solo los últimos 7 días y se acota al importar
const ps = cargar();
ps.minutos[dia()] = 30; ps.minutos[dia(-6)] = 20; ps.minutos[dia(-7)] = 500;
assert.equal(minutosSemana(ps), 50);
assert.equal(limpiarProgreso({ metaSemanal: '99999' }).metaSemanal, 3000);
assert.equal(limpiarProgreso({ metaSemanal: 'x' }).metaSemanal, 120);
assert.equal(cargar().metaSemanal, 120);

// Logro para compartir: incluye qué se aprobó, la nota y el enlace
const tl = textoLogro('el módulo "RAG"', 92, 'https://ejemplo.dev/curso/');
assert.ok(tl.includes('el módulo "RAG"') && tl.includes('92%') && tl.endsWith('https://ejemplo.dev/curso/'));

// Comparar intentos: corregidas, las que siguen fallando y las nuevas
assert.deepStrictEqual(plano(compararIntentos([1, 2, 3], [3, 5])), { corregidas: 2, siguen: 1, nuevas: 1 });
assert.deepStrictEqual(plano(compararIntentos([], [])), { corregidas: 0, siguen: 0, nuevas: 0 });
assert.deepStrictEqual(plano(limpiarProgreso({ intentos: { rag: { d: '2026-11-01', f: [1, '2', -1, 'x'] }, malo: { d: 'ayer', f: [] } } }).intentos), { rag: { d: '2026-11-01', f: [1, 2] } });

// Repaso vacío muestra un mensaje en lugar de un formulario
guardado = null;
ctx.location.hash = '#/repaso';
vm.runInContext('render()', ctx);
assert.ok(el.h.includes('No tenés preguntas falladas'));

// Service worker: cada archivo que precarga tiene que existir, o la instalación sin conexión falla entera
const sw = leer('sw.js'), lista = JSON.parse(sw.match(/const ARCHIVOS = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
for (const archivo of lista.filter(x => x !== './')) assert.ok(fs.existsSync(path.join(__dirname, '..', 'public', archivo)), 'sw.js precarga un archivo que no existe: ' + archivo);

// Pasar a otro dispositivo: ida y vuelta sin pérdidas, tamaño apto para QR y rechazo de enlaces inválidos
const TP = ctx.window.TEMARIO, pesado = cargar();
TP.forEach(m => {
  m.lecciones.forEach((l, i) => { pesado.leidas[m.id + ':' + i] = true; pesado.conocidas[m.id + '|' + l.titulo] = true; });
  m.practica.slice(0, 3).forEach(x => { pesado.practicas[m.id + '|' + x] = true; });
  m.quiz.slice(0, 3).forEach(q => { pesado.falladas[m.id + '|' + q.q] = true; pesado.agenda[m.id + '|' + q.q] = { n: 1, d: '2026-12-01' }; });
  pesado.notas[m.id] = 85; pesado.aciertos[m.id] = { ok: 20, total: 26 };
});
for (let i = 1; i <= 28; i++) { const d = '2026-10-' + String(i).padStart(2, '0'); pesado.dias[d] = 2; pesado.minutos[d] = 25; }
pesado.apuntes[TP[0].id] = 'apunte del origen';
pesado.intentos[TP[0].id] = { d: '2026-11-01', f: [1, 4] };
const paquete = JSON.parse(JSON.stringify(empaquetar(pesado)));
const traido = desempaquetar(paquete, { destino: 'apunte del destino' });
for (const k of ['leidas', 'conocidas', 'practicas', 'falladas', 'agenda', 'notas', 'aciertos', 'minutos', 'dias', 'intentos']) {
  assert.deepStrictEqual(plano(traido[k]), plano(pesado[k]), 'se perdió ' + k);
}
assert.deepStrictEqual(plano(traido.apuntes), { destino: 'apunte del destino' });
assert.throws(() => desempaquetar({ v: 2 }));
assert.equal(Object.keys(desempaquetar({ v: 1, l: { [TP[0].id]: [0, 999] }, f: { inventado: [[0, 1, '2026-01-01']] } }).leidas).length, 1);

(async () => {
  const datos = await comprimir(JSON.stringify(paquete));
  const enlace = 'https://pkeios.github.io/EiaLearning/#/traer/' + datos;
  assert.ok(enlace.length <= 1500, 'el enlace con mucho progreso mide ' + enlace.length + ' y no entra en un QR escaneable');
  assert.deepStrictEqual(JSON.parse(await descomprimir(datos)), paquete);
  guardado = null;
  await vm.runInContext('pasarProgreso()', ctx);
  assert.ok(el.h.includes('<svg') && el.h.includes('Copiar enlace'));
  await vm.runInContext('traerProgreso(' + JSON.stringify(datos) + ')', ctx);
  assert.ok(el.h.includes('Reemplazar mi progreso'));
  await vm.runInContext('traerProgreso("no-es-un-enlace")', ctx);
  assert.ok(el.h.includes('no es válido'));
  console.log('test-app OK (enlace de prueba: ' + enlace.length + ' caracteres)');
})().catch(e => { console.error(e); process.exit(1); });
