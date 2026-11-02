const T = window.TEMARIO;
const app = document.getElementById('app');
const APROBADO = 80;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cargar = () => ({ leidas: {}, notas: {}, falladas: {}, apuntes: {}, agenda: {}, dias: {}, ...JSON.parse(localStorage.getItem('progreso') || '{}') });
const guardar = p => localStorage.setItem('progreso', JSON.stringify(p));
const mezclar = a => a.map(x => [Math.random(), x]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
// La clave de una pregunta es su texto: sobrevive a reordenar o insertar preguntas.
const preguntasDe = m => m.quiz.map(q => ({ ...q, m: m.id }));
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
// Avance del módulo: cada lección leída cuenta 1 y aprobar el quiz cuenta 1.
const avance = (m, p) => {
  const leidas = m.lecciones.filter((_, i) => p.leidas[m.id + ':' + i]).length;
  return { leidas, pct: Math.round(100 * (leidas + aprobado(m, p)) / (m.lecciones.length + 1)) };
};

function inicio() {
  const p = cargar();
  const aprobados = T.filter(m => aprobado(m, p)).length;
  const leidas = T.reduce((s, m) => s + avance(m, p).leidas, 0);
  const siguiente = T.find(m => !aprobado(m, p)) || T[T.length - 1];
  app.innerHTML = `
    <section class="hero">
      <h1>Convertite en <span class="degradado">AI Engineer</span></h1>
      <p>${T.length} módulos, de los fundamentos a producción. Leé, practicá, explicalo con tus palabras y aprobá cada quiz con ${APROBADO}%.</p>
      ${barra(Math.round(100 * aprobados / T.length))}
      <div class="stats">
        <div class="stat"><strong>${aprobados}/${T.length}</strong><span>módulos aprobados</span></div>
        <div class="stat"><strong>${leidas}</strong><span>lecciones leídas</span></div>
        <a class="stat" href="#/repaso"><strong>${todas().filter(q => tocaHoy(p, clave(q))).length}</strong><span>preguntas para repasar hoy</span></a>
        <div class="stat"><strong>🔥 ${racha(p)}</strong><span>${racha(p) === 1 ? 'día' : 'días'} de racha · ${p.dias[dia()] ? 'meta de hoy cumplida ✔' : 'meta de hoy: 1 lección o 1 quiz'}</span></div>
        <a class="stat" href="#/examen"><strong>${p.examen != null ? p.examen + '%' : '—'}</strong><span>examen final</span></a>
      </div>
      <a class="boton" href="#/m/${siguiente.id}">${aprobados || leidas ? 'Continuar' : 'Empezar'}: ${icono(siguiente)} ${esc(siguiente.titulo)} →</a>
      <div class="datos">
        <button class="secundario" id="exportar">⬇ Exportar progreso</button>
        <button class="secundario" id="importar">⬆ Importar progreso</button>
        <input type="file" id="archivo" accept=".json,application/json" hidden>
      </div>
    </section>
    <div class="grilla">${T.map((m, i) => {
      const a = avance(m, p), nota = p.notas[m.id];
      return `<a class="tarjeta ${aprobado(m, p) ? 'aprobada' : ''}" href="#/m/${m.id}">
        <div class="tarjeta-top"><span class="icono">${icono(m)}</span>${badge(m)}</div>
        <small>Módulo ${i}</small>
        <h3>${esc(m.titulo)}</h3>
        ${barra(a.pct)}
        <small>${a.leidas}/${m.lecciones.length} lecciones · quiz ${nota != null ? nota + '%' : 'pendiente'}${aprobado(m, p) ? ' ✔' : ''}</small>
      </a>`;
    }).join('')}</div>`;
  app.querySelector('#exportar').onclick = exportar;
  app.querySelector('#importar').onclick = () => app.querySelector('#archivo').click();
  app.querySelector('#archivo').onchange = e => e.target.files[0] && importar(e.target.files[0]);
}

function exportar() {
  const url = URL.createObjectURL(new Blob([JSON.stringify(cargar(), null, 2)], { type: 'application/json' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: 'progreso-ai-engineering.json' });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// El archivo viene de afuera: solo se copian los campos conocidos y con el tipo esperado.
// Si agregás campos nuevos al progreso, sumalos acá también.
function limpiarProgreso(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) throw new Error('formato inválido');
  const p = { leidas: {}, notas: {}, falladas: {}, apuntes: {}, agenda: {}, dias: {} };
  for (const k of ['leidas', 'falladas']) for (const c in d[k] || {}) p[k][c] = true;
  for (const c in d.notas || {}) p.notas[c] = Math.min(100, Math.max(0, Number(d.notas[c]) || 0));
  for (const c in d.apuntes || {}) p.apuntes[c] = String(d.apuntes[c]);
  for (const c in d.agenda || {}) {
    const a = d.agenda[c] || {};
    p.agenda[c] = { n: Math.min(INTERVALOS.length - 1, Math.max(0, parseInt(a.n) || 0)), d: /^\d{4}-\d{2}-\d{2}$/.test(a.d) ? a.d : dia() };
  }
  for (const c in d.dias || {}) if (/^\d{4}-\d{2}-\d{2}$/.test(c)) p.dias[c] = Math.max(0, parseInt(d.dias[c]) || 0);
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

function modulo(id, abrir = null) {
  const m = T.find(x => x.id === id);
  if (!m) return inicio();
  const p = cargar(), i = T.indexOf(m), prev = T[i - 1], next = T[i + 1];
  const leida = n => p.leidas[m.id + ':' + n];
  app.innerHTML = `
    <a class="volver" href="#/">← Temario</a>
    <header class="modulo-head">
      <span class="icono grande">${icono(m)}</span>
      <div class="crece"><small>Módulo ${i} · ${badge(m)}</small><h1>${esc(m.titulo)}</h1>${barra(avance(m, p).pct)}</div>
    </header>
    <section class="card"><h2>🎯 Objetivos</h2><ul class="checks">${m.objetivos.map(o => `<li>${esc(o)}</li>`).join('')}</ul></section>
    <h2>📖 Lecciones</h2>${m.lecciones.map((l, n) => `
      <details class="leccion ${leida(n) ? 'leida' : ''}" ${leida(n) && n !== abrir ? '' : 'open'}>
        <summary><span class="num">${leida(n) ? '✔' : n + 1}</span>${esc(l.titulo)}</summary>
        <div class="contenido">${l.html}</div>
        ${leida(n) ? '' : `<button data-leida="${n}">✔ Marcar como leída</button>`}
      </details>`).join('')}
    <h2>🛠️ Práctica</h2><ol class="practica">${m.practica.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
    <section class="card">
      <h2>✍️ Explicalo con tus palabras</h2>
      <p class="suave">Técnica Feynman: si no lo podés explicar simple, todavía no lo entendiste. Se guarda solo.</p>
      <textarea id="apunte" rows="6" aria-label="Tu explicación" placeholder="Explicá este módulo como si se lo contaras a un amigo...">${esc(p.apuntes[m.id] || '')}</textarea>
    </section>
    <h2>🔗 Recursos</h2><div class="recursos">${m.recursos.map(r => `
      <a href="${esc(r.url)}" target="_blank" rel="noopener"><strong>${esc(r.t)}</strong><small>${esc(new URL(r.url).hostname.replace('www.', ''))} ↗</small></a>`).join('')}</div>
    <div class="cta">
      <a class="boton" href="#/quiz/${m.id}">📝 Hacer el quiz (${m.quiz.length} preguntas)</a>
      <span class="suave">${p.notas[m.id] != null ? 'Mejor nota: ' + p.notas[m.id] + '%' : 'Necesitás ' + APROBADO + '% para aprobar'}</span>
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
  app.querySelectorAll('[data-leida]').forEach(b => b.onclick = () => {
    const p = cargar(); p.leidas[m.id + ':' + b.dataset.leida] = true; estudiar(p); guardar(p); modulo(id);
  });
  app.querySelector('#apunte').oninput = e => { const p = cargar(); p.apuntes[m.id] = e.target.value; guardar(p); };
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
  return `Sos mi tutor de AI Engineering. Tomame un examen oral sobre el módulo "${m.titulo}".

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

function quiz(titulo, preguntas, alTerminar, vacio = 'No hay preguntas pendientes. 🎉') {
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>${esc(titulo)}</h1>
    ${preguntas.length ? `<div class="quiz-estado"><span id="contador">0/${preguntas.length} respondidas</span>${barra(0)}</div>` : `<section class="card"><p>${esc(vacio)}</p></section>`}
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
    const datos = new FormData(form), p = cargar(), campos = form.querySelectorAll('fieldset');
    let bien = 0;
    const fallas = [];
    preguntas.forEach((q, i) => {
      const elegida = Number(datos.get('p' + i)), ok = elegida === q.correcta, opciones = campos[i].querySelectorAll('.opcion');
      bien += ok;
      if (!ok) fallas.push(q);
      campos[i].classList.add(ok ? 'bien' : 'mal');
      opciones[q.correcta].classList.add('correcta');
      if (!ok) opciones[elegida].classList.add('incorrecta');
      const exp = campos[i].querySelector('.explicacion');
      exp.hidden = false;
      exp.innerHTML = (ok ? '✔ ' : `✘ La correcta era: <strong>${esc(q.opciones[q.correcta])}</strong>. `) + esc(q.explicacion);
      registrar(p, clave(q), ok);
    });
    form.querySelectorAll('input, button').forEach(el => el.disabled = true);
    const pct = Math.round(100 * bien / preguntas.length);
    alTerminar?.(p, pct);
    estudiar(p);
    guardar(p);
    const res = app.querySelector('#resultado');
    res.innerHTML = `<section class="card resultado ${pct >= APROBADO ? 'ok' : ''}">
      <div class="nota">${pct}%</div>
      <p><strong>${bien} de ${preguntas.length} correctas.</strong> ${pct >= APROBADO ? '¡Aprobado! 🎉' : 'Leé las explicaciones de arriba y volvé a intentarlo.'}</p>
      ${fallas.length ? `<p><strong>Para repasar:</strong></p><div class="repasar">${modulosAFallas(fallas).map(([m, n]) =>
        `<a class="boton secundario" href="#/m/${m.id}">${icono(m)} ${esc(m.titulo)} (${n} ${n === 1 ? 'fallada' : 'falladas'})</a>`).join('')}</div>` : ''}
      <button onclick="render()">↻ Reintentar</button> <a class="boton secundario" href="#/">Volver al temario</a>
    </section>`;
    res.scrollIntoView({ behavior: 'smooth' });
  };
}

function render() {
  const [, ruta, id, leccion] = location.hash.split('/');
  scrollTo(0, 0);
  if (ruta === 'm') modulo(id, leccion != null && leccion !== '' ? Number(leccion) : null);
  else if (ruta === 'buscar') busqueda();
  else if (ruta === 'glosario') glosario();
  else if (ruta === 'quiz' && T.some(m => m.id === id)) {
    const m = T.find(x => x.id === id);
    quiz(`${icono(m)} Quiz: ${m.titulo}`, mezclar(preguntasDe(m)), (p, pct) => { p.notas[m.id] = Math.max(p.notas[m.id] ?? 0, pct); });
  }
  else if (ruta === 'examen') quiz('🏁 Examen final: 25 preguntas al azar', mezclar(todas()).slice(0, 25), (p, pct) => { p.examen = Math.max(p.examen ?? 0, pct); });
  else if (ruta === 'repaso') {
    const p = cargar(), pendientes = todas().filter(q => p.falladas[clave(q)]);
    const proxima = pendientes.map(q => p.agenda[clave(q)]?.d).filter(Boolean).sort()[0];
    quiz('🔁 Repaso de hoy', mezclar(pendientes.filter(q => tocaHoy(p, clave(q)))), null,
      proxima ? `Nada para repasar hoy. Próximo repaso: ${proxima} (${pendientes.length} preguntas en agenda).` : 'No tenés preguntas falladas. 🎉');
  }
  else inicio();
}

// El tema se aplica en index.html antes de pintar, para evitar un parpadeo; acá solo el botón.
const botonTema = document.getElementById('tema');
const iconoTema = () => { botonTema.textContent = document.documentElement.dataset.tema === 'claro' ? '🌙' : '☀️'; };
botonTema.onclick = () => {
  const tema = document.documentElement.dataset.tema === 'claro' ? 'oscuro' : 'claro';
  document.documentElement.dataset.tema = tema;
  localStorage.setItem('tema', tema);
  iconoTema();
};
iconoTema();

addEventListener('hashchange', render);
render();
