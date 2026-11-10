const T = window.TEMARIO;
// El mismo motor sirve a más de un curso: cada página puede definir window.CURSO antes de cargar app.js.
// Sin eso es el curso de AI Engineering de siempre. La clave separa el progreso de cada curso en el navegador.
const CURSO = { clave: 'progreso', nombre: 'AI Engineering', archivo: 'ai-engineering', titular: 'Convertite en <span class="degradado">AI Engineer</span>', bajada: 'de los fundamentos a producción', chicos: true, sw: 'sw.js', ...window.CURSO };
const app = document.getElementById('app');
const APROBADO = 80;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cargar = () => ({ leidas: {}, notas: {}, falladas: {}, apuntes: {}, agenda: {}, dias: {}, tarjetas: {}, aciertos: {}, practicas: {}, conocidas: {}, minutos: {}, metaSemanal: 120, intentos: {}, historial: {}, ...JSON.parse(localStorage.getItem(CURSO.clave) || '{}') });
const guardar = p => localStorage.setItem(CURSO.clave, JSON.stringify(p));
const mezclar = a => a.map(x => [Math.random(), x]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
// La clave de una pregunta es su texto: sobrevive a reordenar o insertar preguntas.
const preguntasDe = m => m.quiz.map(q => ({ ...q, m: m.id }));
// El quiz de un módulo toma una ronda corta: primero las falladas pendientes, después el resto al azar.
// shortcut: no se registra qué preguntas ya salieron, así que el resto se elige al azar; si se repiten mucho, guardar las vistas.
const POR_RONDA = 15;
const rondaModulo = (m, p) => {
  const qs = mezclar(preguntasDe(m));
  return mezclar([...qs.filter(q => p.falladas[clave(q)]), ...qs.filter(q => !p.falladas[clave(q)])].slice(0, POR_RONDA));
};
const clave = q => q.m + '|' + q.q;
const todas = () => T.flatMap(preguntasDe);
// Repetición espaciada: tras fallar, la pregunta vuelve a los 1, 3, 7 y 14 días; cada acierto la empuja al siguiente intervalo.
const INTERVALOS = [1, 3, 7, 14];
const dia = (mas = 0) => { const d = new Date(); d.setDate(d.getDate() + mas); return d.toLocaleDateString('sv'); }; // 'sv' da AAAA-MM-DD
const tocaHoy = (p, k) => p.falladas[k] && (!p.agenda[k] || p.agenda[k].d <= dia());
// Búsqueda sin distinguir mayúsculas ni tildes; el índice se arma una vez al cargar.
const normal = s => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const INDICE = T.flatMap(m => m.lecciones.map((l, n) => {
  const texto = (l.titulo + '. ' + l.html.replace(/<[^>]+>/g, ' ')).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
  return { m, l, n, texto, norm: normal(texto) + ' ' + normal(m.titulo) };
}));
// Rangos [inicio, fin] de las palabras buscadas dentro de un texto, sin distinguir tildes ni mayúsculas.
// shortcut: si normalizar cambia el largo del texto (caracteres raros), no se resalta; alcanza para español.
function marcas(texto, consulta) {
  const palabras = normal(consulta).split(/\s+/).filter(p => p.length > 1), norm = normal(texto);
  if (!palabras.length || norm.length !== texto.length) return [];
  const re = new RegExp(palabras.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  return [...norm.matchAll(re)].map(x => [x.index, x.index + x[0].length]);
}
function resaltarEn(raiz, consulta) {
  const caminante = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT), nodos = [];
  while (caminante.nextNode()) nodos.push(caminante.currentNode);
  for (const nodo of nodos) {
    const texto = nodo.nodeValue, rangos = marcas(texto, consulta);
    if (!rangos.length) continue;
    const frag = document.createDocumentFragment();
    let desde = 0;
    for (const [a, b] of rangos) {
      frag.append(texto.slice(desde, a), Object.assign(document.createElement('mark'), { textContent: texto.slice(a, b) }));
      desde = b;
    }
    frag.append(texto.slice(desde));
    nodo.replaceWith(frag);
  }
}
// Glosario dentro de las lecciones: la primera vez que aparece cada término, se puede tocar para ver qué significa.
// Sin lo que va entre paréntesis ("Percentil (p95, p99)" busca "percentil"), y acepta el plural.
const reTermino = t => new RegExp('(?<![\\p{L}\\d])' + t.replace(/\s*\(.*\)$/, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:es|s)?(?![\\p{L}\\d])', 'iu');
function marcarGlosario(raiz) {
  // Los más largos primero: "Matriz de confusión" antes que "Matriz"
  for (const g of [...(window.GLOSARIO || [])].sort((a, b) => b.t.length - a.t.length)) {
    const re = reTermino(g.t);
    const caminante = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('pre, code, a, button, .def') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    let nodo;
    while ((nodo = caminante.nextNode())) {
      const m = re.exec(nodo.nodeValue);
      if (!m) continue;
      const resto = nodo.splitText(m.index);
      resto.nodeValue = resto.nodeValue.slice(m[0].length);
      const boton = Object.assign(document.createElement('button'), { type: 'button', className: 'termino', textContent: m[0], title: 'Tocá para ver qué significa' });
      boton.setAttribute('aria-expanded', 'false');
      boton.onclick = () => {
        const abierta = boton.nextElementSibling?.classList.contains('def');
        if (abierta) boton.nextElementSibling.remove();
        else boton.after(Object.assign(document.createElement('span'), { className: 'def', textContent: g.t.replace(/\s*\(.*\)$/, '') + ': ' + g.d }));
        boton.setAttribute('aria-expanded', String(!abierta));
      };
      resto.before(boton);
      break;
    }
  }
}
let ultimaBusqueda = '';
function buscar(consulta) {
  const palabras = normal(consulta).split(/\s+/).filter(p => p.length > 1);
  if (!palabras.length) return [];
  return INDICE.filter(x => palabras.every(p => x.norm.includes(p))).map(x => {
    const i = Math.max(0, x.norm.indexOf(palabras[0]));
    return { ...x, fragmento: (i > 60 ? '…' : '') + x.texto.slice(Math.max(0, i - 60), i + 160) + '…' };
  });
}
// Racha: días seguidos con al menos una actividad (lección leída o quiz). Si hoy todavía no estudiaste, cuenta hasta ayer.
const estudiar = p => { p.dias[dia()] = (p.dias[dia()] || 0) + 1; };
function racha(p) {
  let n = 0;
  for (let i = p.dias[dia()] ? 0 : 1; p.dias[dia(-i)]; i++) n++;
  return n;
}
// Tarjetas del glosario: "la sabía" la aleja 1, 3, 7 y 14 días; "no la sabía" la deja para hoy.
const tarjetaToca = (p, t) => !p.tarjetas[t] || p.tarjetas[t].d <= dia();
function calificarTarjeta(p, t, sabia) {
  const n = sabia ? (p.tarjetas[t]?.n ?? -1) + 1 : 0;
  p.tarjetas[t] = { n, d: sabia ? dia(INTERVALOS[Math.min(n, INTERVALOS.length - 1)]) : dia() };
}
// Aciertos acumulados por módulo en todos los quizzes (incluye examen y repaso).
function contarAcierto(p, q, ok) {
  const a = p.aciertos[q.m] || (p.aciertos[q.m] = { ok: 0, total: 0 });
  a.total++;
  if (ok) a.ok++;
}
const pctAciertos = a => a && a.total ? Math.round(100 * a.ok / a.total) : null;
// Examen final: guarda la mejor nota y la fecha en que se aprobó por primera vez.
function registrarExamen(p, pct) {
  p.examen = Math.max(p.examen ?? 0, pct);
  if (pct >= APROBADO && !p.examenFecha) p.examenFecha = dia();
}
function registrar(p, k, ok) {
  if (!ok) { p.falladas[k] = true; p.agenda[k] = { n: 0, d: dia(INTERVALOS[0]) }; return; }
  if (!p.falladas[k]) return;
  const n = (p.agenda[k]?.n ?? -1) + 1;
  if (n >= INTERVALOS.length) { delete p.falladas[k]; delete p.agenda[k]; }
  else p.agenda[k] = { n, d: dia(INTERVALOS[n]) };
}
const aprobado = (m, p) => p.notas[m.id] >= APROBADO;
const nivelClase = n => ({ 'Básico': 'basico', 'Intermedio': 'intermedio', 'Avanzado': 'avanzado' }[n] || 'proyecto');
const badge = m => `<span class="badge ${nivelClase(m.nivel)}">${esc(m.nivel)}</span>`;
const icono = m => m.icono || '📘';
const barra = pct => `<div class="barra" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;
// Avance del módulo: cada lección leída, cada práctica hecha y aprobar el quiz cuentan 1.
// La práctica se guarda por su texto, igual que las preguntas: sobrevive a agregar ejercicios nuevos.
const clavePractica = (m, texto) => m.id + '|' + texto;
const avance = (m, p) => {
  const leidas = m.lecciones.filter((_, i) => p.leidas[m.id + ':' + i]).length;
  const hechas = m.practica.filter(x => p.practicas[clavePractica(m, x)]).length;
  return { leidas, hechas, pct: Math.round(100 * (leidas + hechas + aprobado(m, p)) / (m.lecciones.length + m.practica.length + 1)) };
};

// Novedades: lecciones que el alumno todavía no vio desde que existen. Se identifican por módulo y título.
const claveLeccion = (m, l) => m.id + '|' + l.titulo;
const todasLasLecciones = () => T.flatMap(m => m.lecciones.map((l, n) => ({ m, l, n })));
const novedades = p => todasLasLecciones().filter(x => !p.conocidas[claveLeccion(x.m, x.l)]);
function marcarConocidas(p, lista) { lista.forEach(x => { p.conocidas[claveLeccion(x.m, x.l)] = true; }); }
// La primera vez que se usa esta función, todo lo que ya existe cuenta como conocido (si no, todo sería "nuevo").
function iniciarNovedades() {
  const crudo = JSON.parse(localStorage.getItem(CURSO.clave) || '{}');
  if (crudo.conocidas) return;
  const p = cargar();
  marcarConocidas(p, todasLasLecciones());
  guardar(p);
}

function novedadesPagina() {
  const p = cargar(), lista = novedades(p);
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>🆕 Novedades</h1>
    ${lista.length ? `<p class="suave">Lecciones agregadas al curso desde tu última visita.</p>
      <ol class="plan">${lista.map(x => `<li><a href="#/m/${x.m.id}/${x.n}">${icono(x.m)} ${esc(x.l.titulo)} <small class="suave">(${esc(x.m.titulo)})</small></a></li>`).join('')}</ol>
      <button class="secundario" id="vistas">✔ Marcar todas como vistas</button>`
    : '<section class="card"><p>No hay lecciones nuevas desde tu última visita. 🎉</p></section>'}
    ${CURSO.chicos ? '<p class="suave">🧒 También hay una <a href="chicos/">versión para chicos de 10 a 13 años</a>, con misiones cortas para aprender qué es la IA.</p>' : ''}`;
  const boton = app.querySelector('#vistas');
  if (boton) boton.onclick = () => { const p = cargar(); marcarConocidas(p, novedades(p)); guardar(p); novedadesPagina(); };
}

// Diagrama de flujo del curso (window.MAPA en contenido.js, dibujado por mapa.js): cada etapa con sus módulos.
const mapaDelCurso = p => window.MAPA && window.mapaFlujo ? mapaFlujo({ ...MAPA, etapas: MAPA.etapas.map(e => ({ ...e, items: e.modulos.map(id => {
  const i = T.findIndex(m => m.id === id), m = T[i];
  return m && { icono: icono(m), titulo: m.titulo, href: '#/m/' + id, num: 'Módulo ' + i, hecho: aprobado(m, p) };
}).filter(Boolean) })) }) : '';

function inicio() {
  const p = cargar();
  const aprobados = T.filter(m => aprobado(m, p)).length;
  const leidas = T.reduce((s, m) => s + avance(m, p).leidas, 0);
  const siguiente = T.find(m => !aprobado(m, p)) || T[T.length - 1];
  app.innerHTML = `
    <section class="hero">
      <h1>${CURSO.titular}</h1>
      <p>${T.length} módulos, ${CURSO.bajada}. Leé, practicá, explicalo con tus palabras y aprobá cada quiz con ${APROBADO}%.</p>
      ${barra(Math.round(100 * aprobados / T.length))}
      <div class="stats">
        <div class="stat"><strong>${aprobados}/${T.length}</strong><span>módulos aprobados</span></div>
        <div class="stat"><strong>${leidas}</strong><span>lecciones leídas</span></div>
        <a class="stat" href="#/repaso"><strong>${todas().filter(q => tocaHoy(p, clave(q))).length}</strong><span>preguntas para repasar hoy</span></a>
        <a class="stat" href="#/progreso"><strong>⏱ ${minutosSemana(p)}/${p.metaSemanal}</strong><span>min en 7 días · meta semanal${minutosSemana(p) >= p.metaSemanal ? ' cumplida ✔' : ''}</span></a>
        <div class="stat"><strong>🔥 ${racha(p)}</strong><span>${racha(p) === 1 ? 'día' : 'días'} de racha · ${p.dias[dia()] ? 'meta de hoy cumplida ✔' : 'meta de hoy: 1 lección o 1 quiz'}</span></div>
        <a class="stat" href="#/examen"><strong>${p.examen != null ? p.examen + '%' : '—'}</strong><span>examen final</span></a>
      </div>
      <a class="boton" href="#/m/${siguiente.id}">${aprobados || leidas ? 'Continuar' : 'Empezar'}: ${icono(siguiente)} ${esc(siguiente.titulo)} →</a>
      <div class="datos">
        ${novedades(p).length ? `<a class="boton secundario" href="#/novedades">🆕 Novedades (${novedades(p).length})</a>` : ''}
        <a class="boton secundario" href="#/hoy">📋 Qué estudiar hoy</a>
        <a class="boton secundario" href="#/nivel">🎯 Quiz por nivel</a>
        <a class="boton secundario" href="#/progreso">📊 Progreso</a>
        ${p.examen >= APROBADO ? '<a class="boton secundario" href="#/certificado">🎓 Certificado</a>' : ''}
        <a class="boton secundario" href="#/pasar">📲 Pasar a otro dispositivo</a>
        <button class="secundario" id="apuntes">📝 Descargar mis apuntes</button>
        <button class="secundario" id="exportar">⬇ Exportar progreso</button>
        <button class="secundario" id="importar">⬆ Importar progreso</button>
        <input type="file" id="archivo" accept=".json,application/json" hidden>
      </div>
    </section>
    ${mapaDelCurso(p)}
    <div class="grilla">${T.map((m, i) => {
      const a = avance(m, p), nota = p.notas[m.id];
      return `<a class="tarjeta ${aprobado(m, p) ? 'aprobada' : ''}" href="#/m/${m.id}">
        <div class="tarjeta-top"><span class="icono">${icono(m)}</span>${badge(m)}</div>
        <small>Módulo ${i}</small>
        <h3>${esc(m.titulo)}</h3>
        ${barra(a.pct)}
        <small>${a.leidas}/${m.lecciones.length} lecciones · práctica ${a.hechas}/${m.practica.length} · quiz ${nota != null ? nota + '%' : 'pendiente'}${aprobado(m, p) ? ' ✔' : ''}</small>
      </a>`;
    }).join('')}</div>`;
  app.querySelector('#exportar').onclick = exportar;
  app.querySelector('#apuntes').onclick = descargarApuntes;
  app.querySelector('#importar').onclick = () => app.querySelector('#archivo').click();
  app.querySelector('#archivo').onchange = e => e.target.files[0] && importar(e.target.files[0]);
}

function descargar(nombre, texto, tipo) {
  const url = URL.createObjectURL(new Blob([texto], { type: tipo }));
  const a = Object.assign(document.createElement('a'), { href: url, download: nombre });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const exportar = () => descargar(`progreso-${CURSO.archivo}.json`, JSON.stringify(cargar(), null, 2), 'application/json');

// Apuntes "Explicalo con tus palabras" de todos los módulos, en el orden del temario. null si no hay ninguno.
function apuntesMarkdown(p) {
  const con = T.filter(m => (p.apuntes[m.id] || '').trim());
  if (!con.length) return null;
  return `# Mis apuntes de ${CURSO.nombre}\n\n_Descargado el ${dia()}_\n` +
    con.map(m => `\n## ${icono(m)} ${m.titulo}\n\n${p.apuntes[m.id].trim()}\n`).join('');
}
function descargarApuntes() {
  const md = apuntesMarkdown(cargar());
  if (!md) return alert('Todavía no escribiste apuntes. Están en cada módulo, en "Explicalo con tus palabras".');
  descargar('mis-apuntes-ai-engineering.md', md, 'text/markdown');
}

// El archivo viene de afuera: solo se copian los campos conocidos y con el tipo esperado.
// Si agregás campos nuevos al progreso, sumalos acá también.
function limpiarProgreso(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) throw new Error('formato inválido');
  const p = { leidas: {}, notas: {}, falladas: {}, apuntes: {}, agenda: {}, dias: {}, tarjetas: {}, aciertos: {}, practicas: {}, conocidas: {}, minutos: {}, metaSemanal: 120, intentos: {}, historial: {} };
  for (const k of ['leidas', 'falladas']) for (const c in d[k] || {}) p[k][c] = true;
  for (const c in d.notas || {}) p.notas[c] = Math.min(100, Math.max(0, Number(d.notas[c]) || 0));
  for (const c in d.apuntes || {}) p.apuntes[c] = String(d.apuntes[c]);
  for (const c in d.agenda || {}) {
    const a = d.agenda[c] || {};
    p.agenda[c] = { n: Math.min(INTERVALOS.length - 1, Math.max(0, parseInt(a.n) || 0)), d: /^\d{4}-\d{2}-\d{2}$/.test(a.d) ? a.d : dia() };
  }
  for (const c in d.practicas || {}) if (d.practicas[c]) p.practicas[c] = true;
  for (const c in d.conocidas || {}) if (d.conocidas[c]) p.conocidas[c] = true;
  for (const c in d.intentos || {}) {
    const x = d.intentos[c] || {};
    if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(x.d) && Array.isArray(x.f)) p.intentos[c] = { d: x.d, f: x.f.map(Number).filter(i => Number.isInteger(i) && i >= 0) };
  }
  for (const c in d.historial || {}) {
    const h = lista(d.historial[c]).filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x?.d)).map(x => ({ d: x.d, n: Math.min(100, Math.max(0, Number(x.n) || 0)) }));
    if (h.length) p.historial[c] = h.slice(-HISTORIAL);
  }
  if (d.metaSemanal != null) p.metaSemanal = Math.min(3000, Math.max(10, parseInt(d.metaSemanal) || 120));
  for (const c in d.minutos || {}) if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(c)) p.minutos[c] = Math.max(0, parseInt(d.minutos[c]) || 0);
  for (const c in d.aciertos || {}) {
    const a = d.aciertos[c] || {}, total = Math.max(0, parseInt(a.total) || 0);
    p.aciertos[c] = { ok: Math.min(total, Math.max(0, parseInt(a.ok) || 0)), total };
  }
  for (const c in d.tarjetas || {}) {
    const a = d.tarjetas[c] || {};
    p.tarjetas[c] = { n: Math.max(0, parseInt(a.n) || 0), d: /^\d{4}-\d{2}-\d{2}$/.test(a.d) ? a.d : dia() };
  }
  for (const c in d.dias || {}) if (/^\d{4}-\d{2}-\d{2}$/.test(c)) p.dias[c] = Math.max(0, parseInt(d.dias[c]) || 0);
  if (typeof d.nombre === 'string') p.nombre = d.nombre.slice(0, 100);
  if (/^\d{4}-\d{2}-\d{2}$/.test(d.examenFecha)) p.examenFecha = d.examenFecha;
  if (d.examen != null) p.examen = Math.min(100, Math.max(0, Number(d.examen) || 0));
  return p;
}

async function importar(archivo) {
  let p;
  try { p = limpiarProgreso(JSON.parse(await archivo.text())); }
  catch { return alert('Ese archivo no es un progreso válido.'); }
  if (!confirm('Esto reemplaza tu progreso actual por el del archivo. ¿Continuar?')) return;
  guardar(p);
  inicio();
}

// Laboratorio de Python con Pyodide (Python compilado para el navegador): se descarga recién al primer uso.
const PYODIDE = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/';
// Librerías que no corren en el navegador (PyTorch y compañía) o que necesitan una clave de API: esos fragmentos no llevan laboratorio.
const NO_NAVEGADOR = /\b(anthropic|openai|torch|transformers|trl|peft|dspy|opentelemetry|vllm|safetensors)\b/;
// Tampoco los que llaman a un modelo de embeddings o a un LLM sin definirlo: son ejemplos a escala real.
const usaModelo = codigo => /\b(embed|llm)\(/.test(codigo) && !/def (embed|llm)\(/.test(codigo);
const esPython = codigo => /^\s*(import |from \S+ import |def |class |print\(|async def )/m.test(codigo) && !/[→↗]/.test(codigo) && !NO_NAVEGADOR.test(codigo) && !usaModelo(codigo);
let pyodide;
function cargarPython() {
  pyodide ??= new Promise((ok, mal) => {
    const s = Object.assign(document.createElement('script'), { src: PYODIDE + 'pyodide.js' });
    // Se silencian los avisos internos de Pyodide, que no le sirven al alumno
    s.onload = () => loadPyodide({ indexURL: PYODIDE }).then(py => { py.runPython('import warnings; warnings.filterwarnings("ignore", message="JsProxy")'); ok(py); }, mal);
    s.onerror = () => { pyodide = null; mal(new Error('No se pudo descargar Python. Revisá tu conexión.')); };
    document.head.append(s);
  });
  return pyodide;
}
function montarLab(pre) {
  const boton = Object.assign(document.createElement('button'), { className: 'secundario boton-lab', textContent: '▶ Probar este código' });
  pre.after(boton);
  boton.onclick = () => {
    boton.remove();
    const lab = document.createElement('div');
    lab.className = 'lab';
    lab.innerHTML = `<label class="suave">🧪 Laboratorio: editá el código y corrélo. Corre en tu navegador; la primera vez tarda unos segundos en cargar Python.</label>
      <textarea spellcheck="false" aria-label="Código Python"></textarea>
      <div class="acciones-lab"><button>▶ Ejecutar</button><button class="secundario" data-reset>↺ Volver al original</button></div>
      <pre class="salida" aria-live="polite" hidden></pre>`;
    const area = lab.querySelector('textarea'), salida = lab.querySelector('.salida'), [correr, reset] = lab.querySelectorAll('button');
    area.value = pre.textContent;
    area.rows = Math.min(20, area.value.split('\n').length + 1);
    reset.onclick = () => { area.value = pre.textContent; };
    correr.onclick = async () => {
      correr.disabled = true;
      salida.hidden = false;
      salida.textContent = '⏳ Cargando Python...';
      let texto = '';
      try {
        const py = await cargarPython();
        // Los archivos de práctica del curso (CURSO.archivos) se copian a la carpeta de Python la primera vez que un código los nombra
        for (const [nombre, url] of Object.entries(CURSO.archivos || {})) {
          if (area.value.includes(nombre) && !py.FS.analyzePath(nombre).exists) py.FS.writeFile(nombre, new Uint8Array(await (await fetch(url)).arrayBuffer()));
        }
        salida.textContent = '⏳ Ejecutando...';
        py.setStdout({ batched: s => { texto += s + '\n'; } });
        py.setStderr({ batched: s => { texto += s + '\n'; } });
        await py.loadPackagesFromImports(area.value, { messageCallback: () => {} });
        const r = await py.runPythonAsync(area.value);
        if (r !== undefined) texto += String(r);
        salida.textContent = texto || '✔ Terminó sin imprimir nada. Usá print() para ver resultados.';
      } catch (e) {
        // El último renglón del error de Python es el que explica qué pasó
        const error = String(e.message || e).trim().split('\n').slice(-1)[0];
        // sys.exit() no es un error: es el programa avisando cómo terminó (el código de salida)
        const salidaCodigo = error.match(/^SystemExit: ?(\d*)$/);
        if (salidaCodigo) {
          const n = Number(salidaCodigo[1] || 0);
          salida.textContent = texto + (n === 0 ? '✔ El programa terminó bien (código de salida 0).' : `✘ El programa terminó con código de salida ${n}: avisó que algo falló.`);
          correr.disabled = false;
          return;
        }
        salida.textContent = texto + '✘ ' + error + (
          /NameError/.test(error) ? '\n💡 Este fragmento es parte de un ejemplo más grande: usa algo que se define en otro lado. Definilo arriba (por ejemplo, con datos inventados) y volvé a ejecutar.'
          : /ModuleNotFoundError/.test(error) ? '\n💡 Esa librería no está disponible en el navegador: probalo en tu computadora.' : '');
      }
      correr.disabled = false;
    };
    pre.after(lab);
  };
}
function modulo(id, abrir = null) {
  const m = T.find(x => x.id === id);
  if (!m) return inicio();
  const p = cargar(), i = T.indexOf(m), prev = T[i - 1], next = T[i + 1];
  const leida = n => p.leidas[m.id + ':' + n];
  // Al abrir un módulo, sus lecciones dejan de ser novedad
  if (m.lecciones.some(l => !p.conocidas[claveLeccion(m, l)])) { marcarConocidas(p, m.lecciones.map(l => ({ m, l }))); guardar(p); }
  app.innerHTML = `
    <a class="volver" href="#/">← Temario</a>
    <div class="modulo-head">
      <span class="icono grande">${icono(m)}</span>
      <div class="crece"><small>Módulo ${i} · ${badge(m)}</small><h1>${esc(m.titulo)}</h1>${barra(avance(m, p).pct)}</div>
    </div>
    <section class="card"><h2>🎯 Objetivos</h2><ul class="checks">${m.objetivos.map(o => `<li>${esc(o)}</li>`).join('')}</ul></section>
    <h2>📖 Lecciones</h2>${m.lecciones.map((l, n) => `
      <details class="leccion ${leida(n) ? 'leida' : ''}" ${leida(n) && n !== abrir ? '' : 'open'}>
        <summary><span class="num">${leida(n) ? '✔' : n + 1}</span>${esc(l.titulo)}</summary>
        <div class="contenido">${l.html}</div>
        <div class="acciones-leccion">${leida(n) ? '' : `<button data-leida="${n}">✔ Marcar como leída</button>`}${window.speechSynthesis ? `<button class="secundario" data-escuchar="${n}">🔊 Escuchar</button>` : ''}</div>
      </details>`).join('')}
    <h2>🛠️ Práctica</h2><ol class="practica">${m.practica.map((x, n) => `<li class="${p.practicas[clavePractica(m, x)] ? 'hecha' : ''}"><label><input type="checkbox" data-practica="${n}" ${p.practicas[clavePractica(m, x)] ? 'checked' : ''}> <span>${esc(x)}</span></label></li>`).join('')}</ol>
    <section class="card">
      <h2>✍️ Explicalo con tus palabras</h2>
      <p class="suave">Técnica Feynman: si no lo podés explicar simple, todavía no lo entendiste. Se guarda solo.</p>
      <textarea id="apunte" rows="6" aria-label="Tu explicación" placeholder="Explicá este módulo como si se lo contaras a un amigo...">${esc(p.apuntes[m.id] || '')}</textarea>
    </section>
    <h2>🔗 Recursos</h2><div class="recursos">${m.recursos.map(r => `
      <a href="${esc(r.url)}" target="_blank" rel="noopener"><strong>${esc(r.t)}</strong><small>${esc(new URL(r.url).hostname.replace('www.', ''))} ↗</small></a>`).join('')}</div>
    <div class="cta">
      <a class="boton" href="#/quiz/${m.id}">📝 Hacer el quiz (${Math.min(POR_RONDA, m.quiz.length)} preguntas por ronda, de ${m.quiz.length})</a>
      <span class="suave">${p.notas[m.id] != null ? 'Mejor nota: ' + p.notas[m.id] + '%' : 'Necesitás ' + APROBADO + '% para aprobar'}</span>
      ${p.historial[m.id]?.length ? `<span class="suave">Últimos intentos: ${p.historial[m.id].map(x => `${x.d.slice(8)}/${x.d.slice(5, 7)} ${x.n}%`).join(' → ')}</span>` : ''}
    </div>
    <section class="card">
      <h2>🎓 Examen oral con Claude</h2>
      <p class="suave">Copiá este prompt y pegalo en Claude: te pregunta de a una, te corrige y repregunta lo que fallás. Si escribiste tu explicación arriba, empieza revisándola.</p>
      <button class="secundario" id="tutor">📋 Copiar prompt de tutor</button>
      <textarea id="prompt-tutor" rows="8" readonly hidden aria-label="Prompt de tutor"></textarea>
    </section>
    <nav class="pasos">
      ${prev ? `<a href="#/m/${prev.id}">← ${icono(prev)} ${esc(prev.titulo)}</a>` : '<span></span>'}
      ${next ? `<a href="#/m/${next.id}">${icono(next)} ${esc(next.titulo)} →</a>` : ''}
    </nav>`;
  app.querySelectorAll('[data-escuchar]').forEach(b => b.onclick = () => {
    const hablando = speechSynthesis.speaking;
    speechSynthesis.cancel();
    app.querySelectorAll('[data-escuchar]').forEach(x => { x.textContent = '🔊 Escuchar'; });
    if (hablando && b.dataset.activo) { delete b.dataset.activo; return; }
    app.querySelectorAll('[data-escuchar]').forEach(x => { delete x.dataset.activo; });
    // Sin los bloques de código: leídos en voz alta no se entienden
    const copia = b.closest('details').querySelector('.contenido').cloneNode(true);
    copia.querySelectorAll('pre').forEach(pre => pre.remove());
    const trozos = trozosParaVoz(copia.textContent);
    trozos.forEach((t, i) => {
      const u = Object.assign(new SpeechSynthesisUtterance(t), { lang: 'es-419', voice: vozLatina(speechSynthesis.getVoices()) });
      if (i === trozos.length - 1) u.onend = () => { b.textContent = '🔊 Escuchar'; delete b.dataset.activo; };
      speechSynthesis.speak(u);
    });
    b.dataset.activo = '1';
    b.textContent = '⏹ Detener';
  });
  app.querySelectorAll('[data-leida]').forEach(b => b.onclick = () => {
    const p = cargar(); p.leidas[m.id + ':' + b.dataset.leida] = true; estudiar(p); guardar(p);
    const sig = Number(b.dataset.leida) + 1;
    modulo(id, sig < m.lecciones.length ? sig : null);
    if (sig >= m.lecciones.length) app.querySelector('.practica')?.scrollIntoView();
  });
  app.querySelector('#apunte').oninput = e => { const p = cargar(); p.apuntes[m.id] = e.target.value; guardar(p); };
  app.querySelectorAll('[data-practica]').forEach(c => c.onchange = () => {
    const p = cargar(), k = clavePractica(m, m.practica[c.dataset.practica]);
    if (c.checked) { p.practicas[k] = true; estudiar(p); } else delete p.practicas[k];
    guardar(p);
    modulo(id);
  });
  app.querySelectorAll('.contenido').forEach(marcarGlosario);
  app.querySelectorAll('.contenido pre').forEach(pre => { if (esPython(pre.textContent)) montarLab(pre); });
  const buscada = abrir != null && app.querySelectorAll('details.leccion')[abrir];
  if (buscada) {
    if (ultimaBusqueda) resaltarEn(buscada.querySelector('.contenido'), ultimaBusqueda);
    buscada.scrollIntoView();
  }
  app.querySelector('#tutor').onclick = async e => {
    const texto = promptTutor(m, cargar().apuntes[m.id]), caja = app.querySelector('#prompt-tutor');
    try {
      await navigator.clipboard.writeText(texto);
      e.target.textContent = '✔ Copiado: pegalo en Claude';
    } catch {
      // Sin permiso de portapapeles (por ejemplo, abriendo el archivo local): se muestra para copiar a mano.
      caja.value = texto; caja.hidden = false; caja.select();
      e.target.textContent = 'Copialo de la caja de abajo (Ctrl+C)';
    }
  };
}

function promptTutor(m, apunte) {
  return `Sos mi tutor de ${CURSO.nombre}. Tomame un examen oral sobre el módulo "${m.titulo}".

Objetivos del módulo:
${m.objetivos.map(o => '- ' + o).join('\n')}

Temas de las lecciones:
${m.lecciones.map(l => '- ' + l.titulo).join('\n')}
${apunte && apunte.trim() ? `
Esta es mi explicación del módulo con mis palabras. Empezá señalando errores, imprecisiones y huecos:
"""
${apunte.trim()}
"""
` : ''}
Reglas:
1. Hacé una sola pregunta por vez, de dificultad creciente: primero conceptos, después escenarios prácticos del tipo "¿qué hacés si...?".
2. Esperá mi respuesta. Corregime con precisión: qué está bien, qué falta y qué está mal, y por qué.
3. Si me equivoco, repreguntá el mismo concepto desde otro ángulo hasta que lo entienda. No me des la respuesta enseguida.
4. Después de 8 preguntas, dame una nota del 1 al 10, mis puntos débiles y qué repasar.
Respondé en español.`;
}

function busqueda() {
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>🔎 Buscar en las lecciones</h1>
    <input id="consulta" type="search" class="buscador" placeholder="Ej.: embeddings, KV cache, overfitting..." aria-label="Buscar en las lecciones">
    <div id="resultados" aria-live="polite"></div>`;
  const input = app.querySelector('#consulta'), salida = app.querySelector('#resultados');
  input.value = ultimaBusqueda;
  input.oninput = () => {
    ultimaBusqueda = input.value;
    const r = buscar(input.value);
    salida.innerHTML = input.value.trim().length < 2 ? '<p class="suave">Escribí al menos 2 letras.</p>'
      : !r.length ? '<p class="suave">Sin resultados. Probá con otra palabra.</p>'
      : `<p class="suave">${r.length} ${r.length === 1 ? 'lección' : 'lecciones'}</p>` + r.map(x => `
        <a class="resultado-busqueda" href="#/m/${x.m.id}/${x.n}">
          <small>${icono(x.m)} ${esc(x.m.titulo)}</small><strong>${esc(x.l.titulo)}</strong><span>${esc(x.fragmento)}</span>
        </a>`).join('');
  };
  input.oninput();
  input.focus();
}

function glosario() {
  const G = [...(window.GLOSARIO || [])].sort((a, b) => a.t.localeCompare(b.t, 'es'));
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>📖 Glosario</h1>
    <p><a class="boton" href="#/tarjetas">🃏 Repasar con tarjetas</a></p>
    <input id="filtro" type="search" class="buscador" placeholder="Filtrar términos..." aria-label="Filtrar el glosario">
    <dl class="glosario">${G.map(g => {
      const m = T.find(x => x.id === g.m);
      return `<div data-texto="${esc(normal(g.t + ' ' + g.d))}"><dt>${esc(g.t)}</dt>
        <dd>${esc(g.d)}${m ? ` <a href="#/m/${m.id}">${icono(m)} Ver módulo</a>` : ''}</dd></div>`;
    }).join('')}</dl>`;
  const filtro = app.querySelector('#filtro');
  filtro.oninput = () => {
    const q = normal(filtro.value.trim());
    app.querySelectorAll('.glosario > div').forEach(d => { d.hidden = !!q && !d.dataset.texto.includes(q); });
  };
  filtro.focus();
}

// Agrupa las preguntas falladas por módulo, en el orden del temario: [[modulo, cantidad], ...]
const modulosAFallas = fallas => T.map(m => [m, fallas.filter(q => q.m === m.id).length]).filter(([, n]) => n);

function tarjetas() {
  const mazo = mezclar((window.GLOSARIO || []).filter(g => tarjetaToca(cargar(), g.t)));
  let i = 0, vuelta = false;
  const pintar = () => {
    if (i >= mazo.length) {
      const proximas = Object.values(cargar().tarjetas).map(x => x.d).filter(d => d > dia()).sort();
      app.innerHTML = `<a class="volver" href="#/glosario">← Glosario</a><h1>🃏 Tarjetas</h1>
        <section class="card"><p>No hay más tarjetas para hoy. 🎉${proximas.length ? ' Próximo repaso: ' + proximas[0] + '.' : ''}</p></section>`;
      return;
    }
    const g = mazo[i];
    app.innerHTML = `<a class="volver" href="#/glosario">← Glosario</a><h1>🃏 Tarjetas</h1>
      <p class="suave">${mazo.length - i} para hoy. Pensá la definición antes de dar vuelta la tarjeta.</p>
      <section class="card tarjeta-glosario"><h2>${esc(g.t)}</h2>${vuelta ? `<p>${esc(g.d)}</p>` : ''}</section>
      ${vuelta
        ? '<button id="no-sabia" class="secundario">✘ No la sabía</button> <button id="sabia">✔ La sabía</button>'
        : '<button id="dar-vuelta">Dar vuelta</button>'}`;
    const calificar = sabia => {
      const p = cargar();
      calificarTarjeta(p, g.t, sabia);
      estudiar(p);
      guardar(p);
      if (!sabia) mazo.push(g); // vuelve al final del mazo en esta misma sesión
      i++; vuelta = false; pintar();
    };
    if (vuelta) {
      app.querySelector('#sabia').onclick = () => calificar(true);
      app.querySelector('#no-sabia').onclick = () => calificar(false);
    } else app.querySelector('#dar-vuelta').onclick = () => { vuelta = true; pintar(); };
  };
  pintar();
}

// Tiempo de estudio: un minuto cuenta si la pestaña está visible y hubo actividad en los últimos 2 minutos.
const sumarMinuto = p => { p.minutos[dia()] = (p.minutos[dia()] || 0) + 1; };
const serieMinutos = (p, cantidad = 28) => Array.from({ length: cantidad }, (_, i) => {
  const d = dia(i - cantidad + 1);
  return { d, m: p.minutos[d] || 0 };
});

const minutosSemana = p => serieMinutos(p, 7).reduce((s, x) => s + x.m, 0);

function graficoTiempo(p) {
  const serie = serieMinutos(p), max = Math.max(1, ...serie.map(x => x.m));
  const semana = serie.slice(-7).reduce((s, x) => s + x.m, 0), total = serie.reduce((s, x) => s + x.m, 0);
  return `<section class="card">
      <h2>⏱ Tiempo de estudio por día</h2>
      <p class="suave">Últimos 7 días: <strong>${semana} min</strong> · Últimas 4 semanas: <strong>${total} min</strong></p>
      <p><label>Meta semanal: <input id="meta-semanal" type="number" min="10" max="3000" step="10" value="${p.metaSemanal}" class="meta-input"> minutos</label></p>
      ${barra(Math.min(100, Math.round(100 * semana / p.metaSemanal)))}
      <p class="suave" id="lectura-tiempo" aria-live="polite">Pasá el mouse o el foco por una barra para ver el día.</p>
      <div class="barras-tiempo">${serie.map(x => `<span tabindex="0" data-lectura="${x.d}: ${x.m} min"
        aria-label="${x.d}: ${x.m} minutos" class="${x.m ? '' : 'vacia'}" style="height:${x.m ? Math.max(4, Math.round(100 * x.m / max)) : 2}%"></span>`).join('')}</div>
      <div class="eje-tiempo suave"><span>hace 4 semanas</span><span>hoy</span></div>
      <details><summary>Ver como tabla</summary>
        <table class="tabla-tiempo"><thead><tr><th>Día</th><th>Minutos</th></tr></thead>
        <tbody>${serie.slice().reverse().map(x => `<tr><td>${x.d}</td><td>${x.m}</td></tr>`).join('')}</tbody></table>
      </details>
    </section>`;
}

function progreso() {
  const p = cargar();
  // Primero los más flojos; los que no tienen respuestas van al final.
  const filas = T.map(m => ({ m, a: p.aciertos[m.id], pct: pctAciertos(p.aciertos[m.id]) }))
    .sort((x, y) => (x.pct ?? 101) - (y.pct ?? 101));
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>📊 Progreso</h1>
    ${graficoTiempo(p)}
    <h2>Aciertos por módulo</h2>
    <p class="suave">Porcentaje de aciertos en todos los quizzes, examen y repaso incluidos. Arriba, tus puntos más flojos: empezá por ahí.</p>
    ${filas.map(({ m, a, pct }) => `
      <section class="card fila-progreso">
        <div class="fila-progreso-titulo"><span>${icono(m)} <a href="#/m/${m.id}">${esc(m.titulo)}</a></span>
          <strong>${pct != null ? pct + '%' : '—'}</strong></div>
        ${barra(pct ?? 0)}
        <small class="suave">${a && a.total ? a.ok + ' de ' + a.total + ' respuestas correctas' : 'Sin respuestas todavía'} · <a href="#/quiz/${m.id}">Hacer el quiz</a></small>
      </section>`).join('')}`;
  app.querySelector('#meta-semanal').onchange = e => {
    const p = cargar();
    p.metaSemanal = Math.min(3000, Math.max(10, parseInt(e.target.value) || 120));
    guardar(p);
    progreso();
  };
  const lectura = app.querySelector('#lectura-tiempo');
  app.querySelectorAll('.barras-tiempo span').forEach(b => {
    b.onmouseenter = b.onfocus = () => { lectura.textContent = b.dataset.lectura; };
  });
}

function certificado() {
  const p = cargar();
  if (!(p.examen >= APROBADO)) {
    app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>🎓 Certificado</h1>
      <section class="card"><p>El certificado se habilita al aprobar el <a href="#/examen">examen final</a> con ${APROBADO}% o más.${p.examen != null ? ' Tu mejor nota hasta ahora: ' + p.examen + '%.' : ''}</p></section>`;
    return;
  }
  const aprobados = T.filter(m => aprobado(m, p)).length;
  app.innerHTML = `<a class="volver no-imprimir" href="#/">← Temario</a>
    <p class="no-imprimir"><label>Tu nombre para el certificado: <input id="nombre" class="buscador" value="${esc(p.nombre || '')}" maxlength="100"></label></p>
    <section class="certificado">
      <p class="suave">Certificado de finalización</p>
      <h1>${esc(CURSO.nombre)}</h1>
      <p>Se deja constancia de que</p>
      <h2 id="nombre-cert">${esc(p.nombre || 'Tu nombre')}</h2>
      <p>completó el curso de autoaprendizaje de ${esc(CURSO.nombre)} y aprobó el examen final con <strong>${p.examen}%</strong>${p.examenFecha ? ' el ' + p.examenFecha : ''}.</p>
      <p>Módulos aprobados: ${aprobados} de ${T.length}.</p>
      <p class="suave">Curso de autoaprendizaje: no es una certificación oficial.</p>
    </section>
    <p class="no-imprimir"><button id="imprimir">🖨 Imprimir o guardar como PDF</button></p>`;
  app.querySelector('#nombre').oninput = e => {
    const p = cargar(); p.nombre = e.target.value.slice(0, 100); guardar(p);
    app.querySelector('#nombre-cert').textContent = p.nombre || 'Tu nombre';
  };
  app.querySelector('#imprimir').onclick = () => print();
}

// Plan corto para hoy: repaso y tarjetas que tocan, y lo siguiente del primer módulo sin aprobar.
function planDeHoy(p) {
  const plan = [];
  const repaso = todas().filter(q => tocaHoy(p, clave(q))).length;
  if (repaso) plan.push({ texto: `🔁 Repasar ${repaso} ${repaso === 1 ? 'pregunta fallada' : 'preguntas falladas'}`, href: '#/repaso' });
  const tarjetasHoy = (window.GLOSARIO || []).filter(g => tarjetaToca(p, g.t)).length;
  if (tarjetasHoy) plan.push({ texto: `🃏 Repasar las tarjetas del glosario (${tarjetasHoy} para hoy)`, href: '#/tarjetas' });
  const m = T.find(x => !aprobado(x, p));
  if (m) {
    const n = m.lecciones.findIndex((_, i) => !p.leidas[m.id + ':' + i]);
    if (n >= 0) plan.push({ texto: `📖 Leer "${m.lecciones[n].titulo}" (${m.titulo})`, href: `#/m/${m.id}/${n}` });
    const practica = m.practica.find(x => !p.practicas[clavePractica(m, x)]);
    if (practica) plan.push({ texto: '🛠️ Práctica: ' + practica, href: `#/m/${m.id}` });
    if (n < 0) plan.push({ texto: `📝 Hacer el quiz de ${m.titulo}`, href: `#/quiz/${m.id}` });
  } else if (!(p.examen >= APROBADO)) plan.push({ texto: '🏁 Rendir el examen final', href: '#/examen' });
  return plan;
}

function hoy() {
  const p = cargar(), plan = planDeHoy(p);
  const corto = t => t.length > 140 ? t.slice(0, 140) + '…' : t;
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>📋 Qué estudiar hoy</h1>
    <p class="suave">${p.dias[dia()] ? 'Meta de hoy cumplida ✔. Si querés seguir, esto es lo que viene:' : 'Con hacer uno de estos ya cumplís la meta del día.'}</p>
    ${plan.length
      ? `<ol class="plan">${plan.map(x => `<li><a href="${x.href}">${esc(corto(x.texto))}</a></li>`).join('')}</ol>`
      : '<section class="card"><p>No queda nada pendiente. 🎉 Volvé mañana para el repaso.</p></section>'}`;
}

// Quiz por nivel: preguntas de todos los módulos de un nivel (basico, intermedio, avanzado o proyecto).
const NIVELES = [['basico', 'Básico'], ['intermedio', 'Intermedio'], ['avanzado', 'Avanzado'], ['proyecto', 'Proyecto final']];
const preguntasDeNivel = clase => T.filter(m => nivelClase(m.nivel) === clase).flatMap(preguntasDe);
function elegirNivel() {
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>🎯 Quiz por nivel</h1>
    <p class="suave">15 preguntas al azar de todos los módulos del nivel que elijas.</p>
    <div class="grilla">${NIVELES.map(([clase, nombre]) => `
      <a class="tarjeta" href="#/nivel/${clase}"><div class="tarjeta-top"><span class="badge ${clase}">${nombre}</span></div>
        <h3>${T.filter(m => nivelClase(m.nivel) === clase).map(m => icono(m)).join(' ')}</h3>
        <small>${preguntasDeNivel(clase).length} preguntas disponibles</small></a>`).join('')}</div>`;
}

// Una pregunta sin responder (null) nunca cuenta como acierto, aunque la correcta sea la opción 0.
const esCorrecta = (elegida, q) => elegida !== null && Number(elegida) === q.correcta;
// Pasar el progreso a otro dispositivo con un enlace o un QR.
// Formato compacto: en lugar de los textos largos de preguntas y lecciones viajan sus posiciones dentro de cada módulo
// (el contenido nuevo se agrega al final, así que las posiciones no cambian). Los apuntes no viajan y se conservan en el destino.
const lista = x => (Array.isArray(x) ? x : []);
const porModulo = f => Object.fromEntries(T.map(m => [m.id, f(m)]).filter(([, v]) => v.length));
function empaquetar(p) {
  return {
    v: 1,
    l: porModulo(m => m.lecciones.flatMap((_, i) => (p.leidas[m.id + ':' + i] ? [i] : []))),
    c: porModulo(m => m.lecciones.flatMap((l, i) => (p.conocidas[claveLeccion(m, l)] ? [i] : []))),
    pr: porModulo(m => m.practica.flatMap((x, i) => (p.practicas[clavePractica(m, x)] ? [i] : []))),
    f: porModulo(m => m.quiz.flatMap((q, i) => {
      const k = m.id + '|' + q.q;
      return p.falladas[k] ? [[i, p.agenda[k]?.n ?? 0, p.agenda[k]?.d ?? '']] : [];
    })),
    t: p.tarjetas, no: p.notas, a: p.aciertos, di: p.dias, mi: p.minutos,
    me: p.metaSemanal, in: p.intentos, hi: p.historial, ex: p.examen, ef: p.examenFecha, nom: p.nombre,
  };
}
function desempaquetar(d, apuntes = {}) {
  if (!d || d.v !== 1) throw new Error('formato desconocido');
  const p = { leidas: {}, conocidas: {}, practicas: {}, falladas: {}, agenda: {}, apuntes,
    tarjetas: d.t, notas: d.no, aciertos: d.a, dias: d.di, minutos: d.mi,
    metaSemanal: d.me, intentos: d.in, historial: d.hi, examen: d.ex, examenFecha: d.ef, nombre: d.nom };
  for (const m of T) {
    lista(d.l?.[m.id]).forEach(i => { if (m.lecciones[i]) p.leidas[m.id + ':' + i] = true; });
    lista(d.c?.[m.id]).forEach(i => { if (m.lecciones[i]) p.conocidas[claveLeccion(m, m.lecciones[i])] = true; });
    lista(d.pr?.[m.id]).forEach(i => { if (m.practica[i]) p.practicas[clavePractica(m, m.practica[i])] = true; });
    lista(d.f?.[m.id]).forEach(([i, n, fecha]) => {
      if (!m.quiz[i]) return;
      const k = m.id + '|' + m.quiz[i].q;
      p.falladas[k] = true;
      if (fecha) p.agenda[k] = { n, d: fecha };
    });
  }
  return limpiarProgreso(p); // el enlace viene de afuera: misma limpieza que al importar un archivo
}
const aBase64url = bytes => btoa(Array.from(bytes, b => String.fromCharCode(b)).join('')).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const deBase64url = texto => Uint8Array.from(atob(texto.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
async function comprimir(texto) {
  const flujo = new Blob([texto]).stream().pipeThrough(new CompressionStream('deflate-raw'));
  return aBase64url(new Uint8Array(await new Response(flujo).arrayBuffer()));
}
async function descomprimir(texto) {
  const flujo = new Blob([deBase64url(texto)]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Response(flujo).text();
}

async function pasarProgreso() {
  app.innerHTML = '<a class="volver" href="#/">← Temario</a><h1>📲 Pasar a otro dispositivo</h1><p class="suave">Preparando…</p>';
  const enlace = location.origin + location.pathname + '#/traer/' + await comprimir(JSON.stringify(empaquetar(cargar())));
  // Más de ~1.500 caracteres da un QR demasiado denso para escanearlo desde una pantalla
  let qr = '';
  if (enlace.length <= 1500 && window.qrcode) {
    const codigo = qrcode(0, 'L');
    codigo.addData(enlace);
    codigo.make();
    qr = codigo.createSvgTag({ cellSize: 4, margin: 4, scalable: true, alt: 'Código QR con tu progreso' });
  }
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>📲 Pasar a otro dispositivo</h1>
    ${qr ? `<div class="qr">${qr}</div><p class="suave">Escaneá el código con la cámara del otro dispositivo y abrí el enlace.</p>`
      : `<section class="card"><p>Tu progreso es demasiado grande para un QR (${enlace.length} caracteres). Usá el enlace: mandátelo a vos mismo por mail o por un chat.</p></section>`}
    <p><button id="copiar-enlace">📋 Copiar enlace</button> ${window.navigator?.share ? '<button id="compartir-enlace" class="secundario">📤 Compartir</button>' : ''}</p>
    <p class="suave">El enlace lleva tu progreso: compartilo solo con vos. Tus apuntes no viajan; para pasarlos usá "Descargar mis apuntes".</p>`;
  app.querySelector('#copiar-enlace').onclick = async e => {
    try { await navigator.clipboard.writeText(enlace); e.target.textContent = '✔ Copiado'; }
    catch { prompt('Copiá este enlace:', enlace); }
  };
  const compartir = app.querySelector('#compartir-enlace');
  if (compartir) compartir.onclick = () => navigator.share({ title: 'Mi progreso de ' + CURSO.nombre, url: enlace }).catch(() => {});
}

async function traerProgreso(datos) {
  let p;
  try { p = desempaquetar(JSON.parse(await descomprimir(datos)), cargar().apuntes); }
  catch {
    app.innerHTML = '<a class="volver" href="#/">← Temario</a><h1>📲 Traer progreso</h1><section class="card"><p>Este enlace no es válido o llegó incompleto. Volvé a copiarlo desde el otro dispositivo.</p></section>';
    return;
  }
  const aprobadosEnlace = T.filter(m => aprobado(m, p)).length;
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>📲 Traer progreso</h1>
    <section class="card">
      <p>El enlace trae <strong>${aprobadosEnlace}</strong> módulos aprobados y <strong>${Object.keys(p.leidas).length}</strong> lecciones leídas${p.examen != null ? `, con ${p.examen}% en el examen final` : ''}.</p>
      <p class="suave">Va a reemplazar el progreso de este dispositivo. Tus apuntes de acá se conservan.</p>
      <button id="confirmar-traer">Reemplazar mi progreso</button> <a class="boton secundario" href="#/">Cancelar</a>
    </section>`;
  app.querySelector('#confirmar-traer').onclick = () => { guardar(p); location.hash = '#/'; };
}

let temporizador = null;
// Nota y fecha de los últimos intentos del quiz de cada módulo, para ver la evolución.
const HISTORIAL = 5;
function sumarIntento(p, id, pct) {
  p.historial[id] = [...(p.historial[id] || []), { d: dia(), n: pct }].slice(-HISTORIAL);
}
// Diferencias entre dos intentos: listas de posiciones de preguntas falladas
// Con preguntadas, solo cuentan las del intento anterior que volvieron a salir en esta ronda.
function compararIntentos(anterior, ahora, preguntadas) {
  const antes = new Set(preguntadas ? anterior.filter(i => preguntadas.includes(i)) : anterior), hoy = new Set(ahora);
  return {
    corregidas: [...antes].filter(i => !hoy.has(i)).length,
    siguen: [...hoy].filter(i => antes.has(i)).length,
    nuevas: [...hoy].filter(i => !antes.has(i)).length,
  };
}
const textoLogro = (que, pct, url) => `Aprobé ${que} del curso de ${CURSO.nombre} con ${pct}% 🎉 Estudio con este curso abierto de autoaprendizaje: ${url}`;
// Voz: algunos navegadores cortan los textos largos, así que se lee en trozos de una o pocas oraciones.
function trozosParaVoz(texto, max = 220) {
  const oraciones = texto.replace(/\s+/g, ' ').trim().match(/[^.!?:]+[.!?:]*/g) || [];
  const trozos = [];
  for (const o of oraciones.map(x => x.trim()).filter(Boolean)) {
    const ultimo = trozos[trozos.length - 1];
    if (ultimo && (ultimo + ' ' + o).length <= max) trozos[trozos.length - 1] = ultimo + ' ' + o;
    else trozos.push(o);
  }
  return trozos;
}
// Voz en español latino si el dispositivo tiene una; si no, cualquier voz en español (null = la del navegador).
function vozLatina(voces) {
  const es = voces.filter(v => /^es/i.test(v.lang));
  return es.find(v => /^es[-_](419|AR|MX|US|CO|CL|PE|UY|VE)/i.test(v.lang)) || es.find(v => !/^es[-_]ES/i.test(v.lang)) || es[0] || null;
}
// Teclado: la pregunta objetivo es la que tiene el foco; si ninguna lo tiene, la primera sin responder.
function preguntaObjetivo(campos, activo) {
  const enfocada = campos.findIndex(c => c.contains(activo));
  return enfocada >= 0 ? enfocada : campos.findIndex(c => !c.querySelector('input:checked'));
}

function quiz(titulo, preguntas, alTerminar, vacio = 'No hay preguntas pendientes. 🎉', { segundos = 0, aviso = '', logro = '', intento = '' } = {}) {
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>${esc(titulo)}</h1>${aviso}
    ${preguntas.length ? `<div class="quiz-estado"><span id="contador">0/${preguntas.length} respondidas</span><span id="reloj"></span><span class="atajos"> · Teclado: 1 a 4 eligen, Enter corrige</span>${barra(0)}</div>` : `<section class="card"><p>${esc(vacio)}</p></section>`}
    <form id="quiz">${preguntas.map((q, i) => `
      <fieldset class="pregunta"><legend><span class="num">${i + 1}</span>${esc(q.q)}</legend>
        ${q.opciones.map((o, j) => `<label class="opcion"><input type="radio" name="p${i}" value="${j}" required><span>${esc(o)}</span></label>`).join('')}
        <p class="explicacion" hidden></p></fieldset>`).join('')}
      ${preguntas.length ? '<button>Corregir</button>' : ''}</form>
    <div id="resultado" aria-live="polite"></div>`;
  const form = app.querySelector('#quiz');
  form.onchange = () => {
    const n = new Set(new FormData(form).keys()).size;
    app.querySelector('#contador').textContent = `${n}/${preguntas.length} respondidas`;
    app.querySelector('.quiz-estado .barra span').style.width = Math.round(100 * n / preguntas.length) + '%';
  };
  form.onsubmit = e => {
    e.preventDefault();
    clearInterval(temporizador);
    const datos = new FormData(form), p = cargar(), campos = form.querySelectorAll('fieldset');
    let bien = 0;
    const fallas = [];
    preguntas.forEach((q, i) => {
      const elegida = datos.get('p' + i), ok = esCorrecta(elegida, q), opciones = campos[i].querySelectorAll('.opcion');
      bien += ok;
      if (!ok) fallas.push(q);
      campos[i].classList.add(ok ? 'bien' : 'mal');
      opciones[q.correcta].classList.add('correcta');
      if (!ok && elegida !== null) opciones[Number(elegida)].classList.add('incorrecta');
      const exp = campos[i].querySelector('.explicacion');
      exp.hidden = false;
      exp.innerHTML = (ok ? '✔ ' : `✘ ${elegida === null ? 'Sin responder. ' : ''}La correcta era: <strong>${esc(q.opciones[q.correcta])}</strong>. `) + esc(q.explicacion);
      registrar(p, clave(q), ok);
      contarAcierto(p, q, ok);
    });
    form.querySelectorAll('input, button').forEach(el => el.disabled = true);
    const pct = Math.round(100 * bien / preguntas.length);
    alTerminar?.(p, pct);
    // Comparación con el intento anterior del mismo quiz de módulo (por posición de pregunta dentro del módulo)
    let comparacion = '';
    const mod = T.find(m => m.id === intento);
    if (mod) {
      const ahora = fallas.map(q => mod.quiz.findIndex(x => x.q === q.q)).filter(i => i >= 0);
      const anterior = p.intentos[intento], preguntadas = preguntas.map(q => mod.quiz.findIndex(x => x.q === q.q));
      if (anterior) {
        const c = compararIntentos(anterior.f, ahora, preguntadas);
        comparacion = `<p class="suave">Contra tu intento anterior (${anterior.d}): ✔ ${c.corregidas} que antes fallaste ahora están bien · ✘ ${c.siguen} seguís fallando · ⚠ ${c.nuevas} nuevas falladas</p>`;
      }
      p.intentos[intento] = { d: dia(), f: [...(anterior?.f || []).filter(i => !preguntadas.includes(i)), ...ahora] };
      sumarIntento(p, intento, pct);
    }
    estudiar(p);
    guardar(p);
    const res = app.querySelector('#resultado');
    res.innerHTML = `<section class="card resultado ${pct >= APROBADO ? 'ok' : ''}">
      <div class="nota">${pct}%</div>
      <p><strong>${bien} de ${preguntas.length} correctas.</strong> ${pct >= APROBADO ? '¡Aprobado! 🎉' : 'Leé las explicaciones de arriba y volvé a intentarlo.'}</p>
      ${comparacion}
      ${fallas.length ? `<p><strong>Para repasar:</strong></p><div class="repasar">${modulosAFallas(fallas).map(([m, n]) =>
        `<a class="boton secundario" href="#/m/${m.id}">${icono(m)} ${esc(m.titulo)} (${n} ${n === 1 ? 'fallada' : 'falladas'})</a>`).join('')}</div>` : ''}
      ${logro && pct >= APROBADO ? '<button id="compartir" class="secundario">📣 Copiar logro para compartir</button> ' : ''}${fallas.length && bien ? '<button id="solo-falladas" class="secundario">👁 Ver solo las falladas</button> ' : ''}<button onclick="render()">↻ Reintentar</button> <a class="boton secundario" href="#/">Volver al temario</a>
    </section>`;
    const compartir = res.querySelector('#compartir');
    if (compartir) compartir.onclick = async () => {
      const texto = textoLogro(logro, pct, location.origin + location.pathname);
      try { await navigator.clipboard.writeText(texto); compartir.textContent = '✔ Copiado: pegalo donde quieras'; }
      catch { prompt('Copiá este texto:', texto); } // sin permiso de portapapeles
    };
    const filtro = res.querySelector('#solo-falladas');
    if (filtro) filtro.onclick = () => {
      const solo = form.classList.toggle('solo-falladas');
      filtro.textContent = solo ? '👁 Ver todas las preguntas' : '👁 Ver solo las falladas';
      form.scrollIntoView({ behavior: 'smooth' });
    };
    res.scrollIntoView({ behavior: 'smooth' });
  };
  document.onkeydown = e => {
    if (form.querySelector('input:disabled') || ['TEXTAREA', 'SELECT'].includes(e.target.tagName) || ['text', 'search'].includes(e.target.type)) return;
    const campos = [...form.querySelectorAll('fieldset')];
    if (/^[1-4]$/.test(e.key)) {
      const i = preguntaObjetivo(campos, document.activeElement);
      const opcion = campos[i]?.querySelectorAll('input')[Number(e.key) - 1];
      if (!opcion) return;
      e.preventDefault();
      opcion.checked = true;
      form.onchange();
      // Pasar a la próxima sin responder, para responder todo seguido con el teclado
      const siguiente = campos.findIndex(c => !c.querySelector('input:checked'));
      const destino = siguiente >= 0 ? campos[siguiente].querySelector('input') : opcion;
      destino.focus();
      destino.closest('fieldset').scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else if (e.key === 'Enter' && campos.every(c => c.querySelector('input:checked'))) {
      e.preventDefault();
      form.requestSubmit();
    }
  };
  if (segundos && preguntas.length) {
    // Al llegar a cero se corrige solo: lo que quedó sin responder cuenta como error.
    let resta = segundos;
    const reloj = app.querySelector('#reloj');
    const tic = () => {
      reloj.textContent = ` · ⏱ ${Math.floor(resta / 60)}:${String(resta % 60).padStart(2, '0')}`;
      if (resta-- <= 0) { clearInterval(temporizador); form.onsubmit({ preventDefault() {} }); }
    };
    tic();
    temporizador = setInterval(tic, 1000);
  }
}

function render() {
  const [, ruta, id, leccion] = location.hash.split('/');
  clearInterval(temporizador); // si se sale de un examen con tiempo, el reloj no sigue corriendo
  document.onkeydown = null;   // los atajos del quiz solo valen dentro del quiz
  window.speechSynthesis?.cancel(); // al cambiar de página se deja de leer
  scrollTo(0, 0);
  if (ruta === 'm') modulo(id, leccion != null && leccion !== '' ? Number(leccion) : null);
  else if (ruta === 'buscar') busqueda();
  else if (ruta === 'glosario') glosario();
  else if (ruta === 'tarjetas') tarjetas();
  else if (ruta === 'progreso') progreso();
  else if (ruta === 'certificado') certificado();
  else if (ruta === 'hoy') hoy();
  else if (ruta === 'nivel' && NIVELES.some(([c]) => c === id)) {
    const nombre = NIVELES.find(([c]) => c === id)[1];
    quiz(`🎯 Quiz de nivel ${nombre}: 15 preguntas al azar`, mezclar(preguntasDeNivel(id)).slice(0, 15));
  }
  else if (ruta === 'nivel') elegirNivel();
  else if (ruta === 'pasar') pasarProgreso();
  else if (ruta === 'traer' && id) traerProgreso(id);
  else if (ruta === 'novedades') novedadesPagina();
  else if (ruta === 'quiz' && T.some(m => m.id === id)) {
    const m = T.find(x => x.id === id);
    quiz(`${icono(m)} Quiz: ${m.titulo}`, rondaModulo(m, cargar()), (p, pct) => { p.notas[m.id] = Math.max(p.notas[m.id] ?? 0, pct); }, undefined,
      { logro: `el módulo "${m.titulo}"`, intento: m.id });
  }
  else if (ruta === 'examen') quiz('🏁 Examen final: 25 preguntas al azar', mezclar(todas()).slice(0, 25), registrarExamen, undefined,
    { aviso: '<p><a href="#/examen-tiempo">⏱ Prefiero hacerlo con tiempo límite (1 minuto por pregunta)</a></p>', logro: 'el examen final' });
  else if (ruta === 'examen-tiempo') quiz('⏱ Examen final con tiempo: 25 preguntas, 25 minutos', mezclar(todas()).slice(0, 25), registrarExamen, undefined,
    { segundos: 25 * 60, aviso: '<p class="suave">Al terminar el tiempo se corrige solo; lo que quede sin responder cuenta como error.</p>', logro: 'el examen final con tiempo límite' });
  else if (ruta === 'repaso') {
    const p = cargar(), pendientes = todas().filter(q => p.falladas[clave(q)]);
    const proxima = pendientes.map(q => p.agenda[clave(q)]?.d).filter(Boolean).sort()[0];
    quiz('🔁 Repaso de hoy', mezclar(pendientes.filter(q => tocaHoy(p, clave(q)))), null,
      proxima ? `Nada para repasar hoy. Próximo repaso: ${proxima} (${pendientes.length} preguntas en agenda).` : 'No tenés preguntas falladas. 🎉');
  }
  else inicio();
}

// El tema se aplica en curso.html antes de pintar, para evitar un parpadeo; acá solo el botón.
const botonTema = document.getElementById('tema');
const iconoTema = () => { botonTema.textContent = document.documentElement.dataset.tema === 'claro' ? '🌙' : '☀️'; };
botonTema.onclick = () => {
  const tema = document.documentElement.dataset.tema === 'claro' ? 'oscuro' : 'claro';
  document.documentElement.dataset.tema = tema;
  localStorage.setItem('tema', tema);
  iconoTema();
};
iconoTema();

// Tamaño de letra: escala del 80% al 150%, se recuerda y se aplica en curso.html antes de pintar.
function cambiarLetra(delta) {
  const actual = Number(localStorage.getItem('letra')) || 1;
  const nueva = Math.round(Math.min(1.5, Math.max(0.8, actual + delta)) * 10) / 10;
  localStorage.setItem('letra', nueva);
  document.documentElement.style.fontSize = Math.round(nueva * 100) + '%';
  return nueva;
}
document.getElementById('letra-menos').onclick = () => cambiarLetra(-0.1);
document.getElementById('letra-mas').onclick = () => cambiarLetra(0.1);

// Sin conexión: el service worker solo funciona servido por http(s), no abriendo el archivo local.
if (window.navigator?.serviceWorker && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register(CURSO.sw);
  navigator.serviceWorker.addEventListener('message', e => { if (e.data === 'contenido-nuevo') avisarContenidoNuevo(); });
}
function avisarContenidoNuevo() {
  if (document.querySelector('.aviso-nuevo')) return;
  const aviso = Object.assign(document.createElement('div'), { className: 'aviso-nuevo', role: 'status' });
  aviso.innerHTML = 'Hay contenido nuevo en el curso. <button onclick="location.reload()">Recargar</button>';
  document.body.append(aviso);
}

iniciarNovedades();
let ultimaActividad = Date.now();
['click', 'keydown', 'scroll', 'touchstart'].forEach(ev => addEventListener(ev, () => { ultimaActividad = Date.now(); }, { passive: true }));
setInterval(() => {
  if (document.visibilityState !== 'visible' || Date.now() - ultimaActividad > 2 * 60 * 1000) return;
  const p = cargar(); sumarMinuto(p); guardar(p);
}, 60 * 1000);
addEventListener('hashchange', render);
render();
