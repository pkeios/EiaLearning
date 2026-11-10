// Mide cada módulo con criterios de aprendizaje basado en evidencia. Uso: node tools/metodologia.js [carpeta]  (datos: el curso de análisis de datos)
// shortcut: son heurísticas de texto (palabras clave y longitudes); sirven para encontrar dónde mirar, no reemplazan leer el módulo.
global.window = {};
require('../public/' + (process.argv[2] ? process.argv[2] + '/' : '') + 'contenido.js');

const texto = html => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
const palabras = html => texto(html).split(/\s+/).filter(Boolean).length;
// Pregunta de aplicación: plantea un caso o una decisión, no pide una definición.
const esAplicacion = q => /(^|\s)(tu|tus|tenés|querés|usás|usaste|encontrás|ves|medís|armás|elegís|hacés|un equipo|una empresa|después de|durante|si )|qué hacés|qué cambiás|qué revisás|qué concluís|por qué/i.test(q);
const nombraTrampa = e => /trampa|tentador|tienta|parece|falla|no sirve|engaña|error/i.test(e);
const verificable = x => /\d|medí|compará|verificá|anotá|registrá|probá|tabla/i.test(x);
const conEjemplo = html => /<pre>|por ejemplo|ejemplo:|<table/i.test(html);
const conVisual = html => /<pre>|<table|<ol>|<ul>/i.test(html);

const pct = (n, d) => (d ? Math.round(100 * n / d) : 0);
const filas = window.TEMARIO.map(m => {
  const largos = m.lecciones.map(l => palabras(l.html));
  return {
    modulo: m.id,
    'palabras máx': Math.max(...largos),
    'lecc. con ejemplo %': pct(m.lecciones.filter(l => conEjemplo(l.html)).length, m.lecciones.length),
    'lecc. con visual %': pct(m.lecciones.filter(l => conVisual(l.html)).length, m.lecciones.length),
    'preg. de aplicación %': pct(m.quiz.filter(q => esAplicacion(q.q)).length, m.quiz.length),
    'explic. con trampa %': pct(m.quiz.filter(q => nombraTrampa(q.explicacion)).length, m.quiz.length),
    'prácticas verificables %': pct(m.practica.filter(verificable).length, m.practica.length),
    'preg. por lección': +(m.quiz.length / m.lecciones.length).toFixed(1),
  };
});
// Umbrales: lección digerible en una sentada (~900 palabras), mayoría de preguntas de aplicación, explicaciones que corrigen el error típico.
const metas = { 'palabras máx': x => x <= 900, 'lecc. con ejemplo %': x => x >= 80, 'lecc. con visual %': x => x >= 80, 'preg. de aplicación %': x => x >= 60, 'explic. con trampa %': x => x >= 50, 'prácticas verificables %': x => x >= 80, 'preg. por lección': x => x >= 4 };
for (const f of filas) f.puntaje = Object.entries(metas).filter(([k, ok]) => ok(f[k])).length + '/' + Object.keys(metas).length;
console.table(filas);
const peor = [...filas].sort((a, b) => parseInt(a.puntaje) - parseInt(b.puntaje))[0];
console.log('Metas:', Object.keys(metas).join(' · '));
console.log('Módulo con menor puntaje:', peor.modulo, peor.puntaje);
