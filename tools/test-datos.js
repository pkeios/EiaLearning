// Prueba el curso "Datos con IA" (public/datos/). Uso: node tools/test-datos.js
// Lo más importante: los números que citan las lecciones se recalculan desde la planilla de práctica.
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const R = path.join(__dirname, '..', 'public');
const leer = f => fs.readFileSync(path.join(R, f), 'utf8');
const ctx = { window: {} };
vm.runInNewContext(leer('datos/contenido.js'), ctx);
vm.runInNewContext(leer('datos/glosario.js'), ctx);
const T = ctx.window.TEMARIO, G = ctx.window.GLOSARIO;
const html = T.flatMap(m => m.lecciones.map(l => l.html)).join('\n');
const todo = JSON.stringify(T);
const pesos = n => '$' + Math.round(n).toLocaleString('es-AR');

// ---- Los datos de práctica: existen en CSV y Excel, y las lecciones los enlazan
for (const f of ['ventas-sucias', 'ventas-limpias']) for (const ext of ['csv', 'xlsx']) {
  assert(fs.existsSync(path.join(R, 'datos/practica', `${f}.${ext}`)), `falta practica/${f}.${ext}`);
  assert(html.includes(`href="practica/${f}.${ext}"`), `ninguna lección enlaza practica/${f}.${ext}`);
}
// Separa una línea de CSV respetando las comillas: "Gaseosa 1,5 L" es un solo valor.
const campos = linea => (linea.match(/("([^"]|"")*"|[^,]*)(,|$)/g) || []).slice(0, -1).map(c => c.replace(/,$/, '').replace(/^"(.*)"$/, '$1').replace(/""/g, '"'));
assert.deepStrictEqual(campos('a,"Gaseosa 1,5 L",3'), ['a', 'Gaseosa 1,5 L', '3']);
const csv = archivo => {
  const [cab, ...filas] = leer('datos/practica/' + archivo).replace(/^﻿/, '').trim().split(/\r?\n/);
  const cols = campos(cab);
  return filas.map(f => { const v = campos(f); assert.equal(v.length, cols.length, 'fila mal leída: ' + f); return Object.fromEntries(v.map((x, i) => [cols[i], x])); });
};
const limpias = csv('ventas-limpias.csv'), sucias = csv('ventas-sucias.csv');
const total = xs => xs.reduce((s, f) => s + Number(f.total), 0);
const de = (xs, clave, valor) => xs.filter(f => f[clave] === valor);
const mes = (xs, m) => xs.filter(f => Number(f.fecha.slice(5, 7)) === m);

// ---- Limpiar las sucias como enseña el curso (sin duplicados, sin cantidad vacía, sucursal unificada, 400 → 4)
// tiene que dar exactamente las limpias, también por sucursal: si no, el proyecto final no se puede verificar.
{
  const vistas = new Set(), recuperadas = [];
  for (const f of sucias) {
    const k = JSON.stringify(f); if (vistas.has(k) || f.cantidad === '') continue; vistas.add(k);
    const cant = Number(f.cantidad) === 400 ? 4 : Number(f.cantidad), precio = Number(String(f.precio_unitario).replace(/[$.]/g, ''));
    const s = f.sucursal.trim(); recuperadas.push({ sucursal: s[0].toUpperCase() + s.slice(1).toLowerCase(), total: cant * precio });
  }
  assert.equal(recuperadas.length, limpias.length, 'limpiar las sucias no da la cantidad de filas de las limpias');
  for (const suc of ['Centro', 'Norte', 'Sur']) assert.equal(total(de(recuperadas, 'sucursal', suc)), total(de(limpias, 'sucursal', suc)), 'limpiar las sucias no da el total de ' + suc);
}

// ---- Tendencias que el curso afirma: Norte crece todos los meses; Centro sube y baja sin crecer
{
  const serie = s => [1, 2, 3, 4, 5, 6].map(m => total(mes(de(limpias, 'sucursal', s), m)));
  const norte = serie('Norte'), centro = serie('Centro');
  if (!norte.every((v, i) => i === 0 || v > norte[i - 1])) throw new Error('Norte no crece todos los meses: ' + norte);
  if (centro.every((v, i) => i === 0 || v > centro[i - 1]) || Math.abs(centro[5] - centro[0]) / centro[0] > 0.05) throw new Error('Centro no está "sin crecer": ' + centro);
}

// ---- Cada número citado tiene que salir de los datos
const T0 = total(limpias);
const hechos = {
  'filas limpias': [limpias.length, 947],
  'total limpio': [pesos(T0), '$6.270.350'],
  'filas sucias': [sucias.length, 958],
  'sucias sumadas tal cual': [pesos(sucias.filter(f => f.total !== '').reduce((s, f) => s + Number(f.total), 0)), '$6.969.550'],
  'sucursales distintas en sucias': [new Set(sucias.map(f => f.sucursal)).size, 11],
  'Centro semestre': [pesos(total(de(limpias, 'sucursal', 'Centro'))), '$2.891.950'],
  'Sur semestre': [pesos(total(de(limpias, 'sucursal', 'Sur'))), '$1.708.350'],
  'Norte semestre': [pesos(total(de(limpias, 'sucursal', 'Norte'))), '$1.670.050'],
  'Norte enero': [pesos(total(mes(de(limpias, 'sucursal', 'Norte'), 1))), '$142.300'],
  'Norte junio': [pesos(total(mes(de(limpias, 'sucursal', 'Norte'), 6))), '$520.500'],
  'ventas Norte enero': [mes(de(limpias, 'sucursal', 'Norte'), 1).length, 26],
  'ventas Norte junio': [mes(de(limpias, 'sucursal', 'Norte'), 6).length, 62],
  'Centro enero': [pesos(total(mes(de(limpias, 'sucursal', 'Centro'), 1))), '$456.000'],
  'Centro junio': [pesos(total(mes(de(limpias, 'sucursal', 'Centro'), 6))), '$453.100'],
  'ventas Centro': [de(limpias, 'sucursal', 'Centro').length, 436],
  'ventas Sur': [de(limpias, 'sucursal', 'Sur').length, 255],
  'ventas Norte': [de(limpias, 'sucursal', 'Norte').length, 256],
  'ticket Centro': [pesos(total(de(limpias, 'sucursal', 'Centro')) / 436), '$6.633'],
  'ticket Sur': [pesos(total(de(limpias, 'sucursal', 'Sur')) / 255), '$6.699'],
  'ticket Norte': [pesos(total(de(limpias, 'sucursal', 'Norte')) / 256), '$6.524'],
  'promedio por venta': [pesos(T0 / limpias.length), '$6.621'],
  'mediana por venta': [pesos(limpias.map(f => Number(f.total)).sort((a, b) => a - b)[Math.floor(limpias.length / 2)]), '$4.200'],
  'Frescos': [pesos(total(de(limpias, 'categoria', 'Frescos'))), '$2.679.100'],
  'Almacén': [pesos(total(de(limpias, 'categoria', 'Almacén'))), '$1.960.100'],
  'Bebidas': [pesos(total(de(limpias, 'categoria', 'Bebidas'))), '$884.550'],
  'Limpieza': [pesos(total(de(limpias, 'categoria', 'Limpieza'))), '$746.600'],
  'QR enero': [Math.round(100 * de(mes(limpias, 1), 'medio_pago', 'QR').length / mes(limpias, 1).length) + '%', '12%'],
  'QR mayo': [Math.round(100 * de(mes(limpias, 5), 'medio_pago', 'QR').length / mes(limpias, 5).length) + '%', '48%'],
  'QR junio': [Math.round(100 * de(mes(limpias, 6), 'medio_pago', 'QR').length / mes(limpias, 6).length) + '%', '44%'],
  'mes más bajo de Sur (las lecciones dicen que bajó en abril)': [1 + [1, 2, 3, 4, 5, 6].map(m => total(mes(de(limpias, 'sucursal', 'Sur'), m))).reduce((im, v, i, a) => (v < a[im] ? i : im), 0), 4],
};
const dias = [31, 28, 31, 30, 31, 30];
[1, 2, 3, 4, 5, 6].forEach(m => {
  hechos['mes ' + m] = [pesos(total(mes(limpias, m))), ['$932.250', '$781.600', '$1.149.550', '$939.100', '$1.174.950', '$1.292.900'][m - 1]];
  hechos['por día, mes ' + m] = [pesos(total(mes(limpias, m)) / dias[m - 1]), ['$30.073', '$27.914', '$37.082', '$31.303', '$37.902', '$43.097'][m - 1]];
});
for (const [nombre, [calculado, citado]] of Object.entries(hechos)) {
  assert.equal(String(calculado), String(citado), `${nombre}: la lección dice ${citado} pero los datos dan ${calculado}`);
  if (typeof citado === 'string' && citado.startsWith('$')) assert(todo.includes(citado.slice(1)), `${nombre}: ${citado} no aparece en el curso`);
}
// Sur estuvo cerrada del 7 al 20 de abril: no hay ventas esos días
assert(!de(limpias, 'sucursal', 'Sur').some(f => f.fecha >= '2025-04-07' && f.fecha <= '2025-04-20'), 'Sur no estuvo cerrada');
// Norte superó a Centro en junio, y no antes
assert(total(mes(de(limpias, 'sucursal', 'Norte'), 6)) > total(mes(de(limpias, 'sucursal', 'Centro'), 6)));
[1, 2, 3, 4, 5].forEach(m => assert(total(mes(de(limpias, 'sucursal', 'Norte'), m)) < total(mes(de(limpias, 'sucursal', 'Centro'), m)), 'Norte superó a Centro antes de junio: mes ' + m));
// Frescos es la categoría que más factura en cada sucursal
['Centro', 'Norte', 'Sur'].forEach(s => {
  const cats = ['Frescos', 'Almacén', 'Bebidas', 'Limpieza'].map(c => total(de(de(limpias, 'sucursal', s), 'categoria', c)));
  assert.equal(cats.indexOf(Math.max(...cats)), 0, 'Frescos no es la primera en ' + s);
});
// Los ejemplos inventados de las lecciones también cierran
assert.equal((1300 + 2100 + 2600 + 3400 + 29400) / 5, 7760);
assert.equal(2679100 + 1960100 + 884550 + 646600, 6170350, 'el ejemplo de suma que no cierra');
assert.equal(436 + 255 + 240, 931);
const simpson = { mail: [81, 87, 192, 263], wa: [234, 270, 55, 80] };
assert(simpson.mail[0] / simpson.mail[1] > simpson.wa[0] / simpson.wa[1] && simpson.mail[2] / simpson.mail[3] > simpson.wa[2] / simpson.wa[3], 'Simpson: el mail tiene que ganar en cada grupo');
assert((simpson.mail[0] + simpson.mail[2]) / 350 < (simpson.wa[0] + simpson.wa[2]) / 350, 'Simpson: WhatsApp tiene que ganar en el total');
assert(((1708350 - 1650000) / (1670050 - 1650000)) > 2.5, 'el eje que engaña tiene que hacer parecer el triple');

// ---- Glosario: cada término aparece en alguna lección (si no, nunca se subraya) y apunta a un módulo
const reTermino = eval(leer('app.js').match(/const reTermino = (.*);\n/)[1]);
const textoPlano = h => h.replace(/<pre>[\s\S]*?<\/pre>/g, ' ').replace(/<code>[\s\S]*?<\/code>/g, ' ').replace(/<a [\s\S]*?<\/a>/g, ' ').replace(/<[^>]+>/g, ' ');
const lecciones = T.flatMap(m => m.lecciones.map(l => textoPlano(l.html))).join('\n');
const ids = new Set(T.map(m => m.id));
G.forEach(g => {
  assert(ids.has(g.m), 'término con módulo inexistente: ' + g.t);
  assert(reTermino(g.t).test(lecciones), 'el término no aparece en ninguna lección: ' + g.t);
});
// Palabras comunes que no tienen que quedar como términos (se subrayarían con otro significado)
['Muestra', 'Base de datos'].forEach(t => assert(!G.some(g => g.t === t), 'término ambiguo: ' + t));

// ---- Laboratorio: ningún bloque de código se ofrece para ejecutar en el navegador (son pedidos a la IA, no programas)
const esPython = eval('(' + leer('app.js').match(/const esPython = (codigo => .*);\n/)[1] + ')'.replace(/^/, ''));
// (esPython depende de NO_NAVEGADOR y usaModelo: se definen igual que en app.js)
const app = leer('app.js');
const NO_NAVEGADOR = eval(app.match(/const NO_NAVEGADOR = (.*);\n/)[1]);
const usaModelo = eval(app.match(/const usaModelo = (.*);\n/)[1]);
const chequearPython = eval(app.match(/const esPython = (.*);\n/)[1]);
for (const m of T) for (const l of m.lecciones) for (const x of l.html.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/g)) {
  const codigo = x[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  assert(!chequearPython(codigo), `${m.id} "${l.titulo}": un bloque parece Python y mostraría el botón de ejecutar`);
}

// ---- La página: mismo motor, progreso aparte y sin el aviso del curso para chicos
const pagina = leer('datos/index.html');
assert(pagina.includes('src="../app.js"') && pagina.includes('href="../styles.css"'), 'tiene que usar el motor del curso principal');
const config = pagina.match(/window\.CURSO = (\{[\s\S]*?\});/);
assert(config, 'falta window.CURSO');
const CURSO = eval('(' + config[1] + ')');
assert(CURSO.clave && CURSO.clave !== 'progreso', 'el progreso tiene que guardarse aparte del curso principal');
assert.equal(CURSO.chicos, false);
assert(fs.existsSync(path.join(R, CURSO.sw.replace('../', ''))), 'el service worker indicado no existe');
// El motor respeta la configuración: guarda con la clave del curso
const guardados = {};
const el = { querySelector: () => el, querySelectorAll: () => [], focus() {}, value: '', set innerHTML(v) {}, get innerHTML() { return ''; } };
const vctx = { window: { CURSO, TEMARIO: T, GLOSARIO: G }, document: { getElementById: () => el, documentElement: { dataset: {}, style: {} } }, localStorage: { getItem: k => guardados[k] ?? null, setItem: (k, v) => { guardados[k] = v; } }, location: { hash: '', origin: 'https://ejemplo.dev', pathname: '/datos/', protocol: 'file:' }, addEventListener() {}, scrollTo() {}, Date, URL, setInterval: () => 1, clearInterval() {}, Blob, Response, btoa, atob };
vm.createContext(vctx);
vm.runInContext(leer('vendor/qrcode.js') + ';this.qrcode = qrcode;', vctx);
vctx.window.qrcode = vctx.qrcode;
vm.runInContext(leer('app.js') + ';this.X = { cargar, guardar, promptTutor, textoLogro };', vctx);
const p = vctx.X.cargar(); p.leidas['ia-y-datos:0'] = true; vctx.X.guardar(p);
assert(guardados[CURSO.clave] && !guardados.progreso, 'guardó en la clave equivocada');
assert(vctx.X.promptTutor(T[0], '').includes('Sos mi tutor de Datos con IA'), 'el tutor tiene que nombrar este curso');
assert(vctx.X.textoLogro('el módulo 1', 90, 'u').includes('Datos con IA'));
// El home enlaza el curso y el service worker no sirve copias viejas de este curso si hay internet
assert(leer('index.html').includes('href="datos/"'), 'el home no enlaza el curso');
assert(leer('sw.js').includes("registration.scope).pathname.length).includes('/')"), 'el service worker tiene que ir primero a la red en /datos/ (como en toda carpeta de curso)');
console.log(`test-datos OK (${T.length} módulos, ${T.reduce((s, m) => s + m.quiz.length, 0)} preguntas, ${G.length} términos, ${Object.keys(hechos).length} números verificados contra la planilla)`);
