const T = window.TEMARIO;
const app = document.getElementById('app');
const APROBADO = 80;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cargar = () => ({ leidas: {}, notas: {}, falladas: {}, apuntes: {}, ...JSON.parse(localStorage.getItem('progreso') || '{}') });
const guardar = p => localStorage.setItem('progreso', JSON.stringify(p));
const mezclar = a => a.map(x => [Math.random(), x]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
// La clave de una pregunta es su texto: sobrevive a reordenar o insertar preguntas.
const preguntasDe = m => m.quiz.map(q => ({ ...q, m: m.id }));
const clave = q => q.m + '|' + q.q;
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
        <a class="stat" href="#/repaso"><strong>${Object.keys(p.falladas).length}</strong><span>preguntas para repasar</span></a>
        <a class="stat" href="#/examen"><strong>${p.examen != null ? p.examen + '%' : '—'}</strong><span>examen final</span></a>
      </div>
      <a class="boton" href="#/m/${siguiente.id}">${aprobados || leidas ? 'Continuar' : 'Empezar'}: ${icono(siguiente)} ${esc(siguiente.titulo)} →</a>
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
}

function modulo(id) {
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
      <details class="leccion ${leida(n) ? 'leida' : ''}" ${leida(n) ? '' : 'open'}>
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
    <nav class="pasos">
      ${prev ? `<a href="#/m/${prev.id}">← ${icono(prev)} ${esc(prev.titulo)}</a>` : '<span></span>'}
      ${next ? `<a href="#/m/${next.id}">${icono(next)} ${esc(next.titulo)} →</a>` : ''}
    </nav>`;
  app.querySelectorAll('[data-leida]').forEach(b => b.onclick = () => {
    const p = cargar(); p.leidas[m.id + ':' + b.dataset.leida] = true; guardar(p); modulo(id);
  });
  app.querySelector('#apunte').oninput = e => { const p = cargar(); p.apuntes[m.id] = e.target.value; guardar(p); };
}

function quiz(titulo, preguntas, alTerminar) {
  app.innerHTML = `<a class="volver" href="#/">← Temario</a><h1>${esc(titulo)}</h1>
    ${preguntas.length ? `<div class="quiz-estado"><span id="contador">0/${preguntas.length} respondidas</span>${barra(0)}</div>` : '<section class="card"><p>No hay preguntas pendientes. 🎉</p></section>'}
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
    preguntas.forEach((q, i) => {
      const elegida = Number(datos.get('p' + i)), ok = elegida === q.correcta, opciones = campos[i].querySelectorAll('.opcion');
      bien += ok;
      campos[i].classList.add(ok ? 'bien' : 'mal');
      opciones[q.correcta].classList.add('correcta');
      if (!ok) opciones[elegida].classList.add('incorrecta');
      const exp = campos[i].querySelector('.explicacion');
      exp.hidden = false;
      exp.innerHTML = (ok ? '✔ ' : `✘ La correcta era: <strong>${esc(q.opciones[q.correcta])}</strong>. `) + esc(q.explicacion);
      if (ok) delete p.falladas[clave(q)]; else p.falladas[clave(q)] = true;
    });
    form.querySelectorAll('input, button').forEach(el => el.disabled = true);
    const pct = Math.round(100 * bien / preguntas.length);
    alTerminar?.(p, pct);
    guardar(p);
    const res = app.querySelector('#resultado');
    res.innerHTML = `<section class="card resultado ${pct >= APROBADO ? 'ok' : ''}">
      <div class="nota">${pct}%</div>
      <p><strong>${bien} de ${preguntas.length} correctas.</strong> ${pct >= APROBADO ? '¡Aprobado! 🎉' : 'Leé las explicaciones de arriba y volvé a intentarlo.'}</p>
      <button onclick="render()">↻ Reintentar</button> <a class="boton secundario" href="#/">Volver al temario</a>
    </section>`;
    res.scrollIntoView({ behavior: 'smooth' });
  };
}

function render() {
  const [, ruta, id] = location.hash.split('/');
  const todas = () => T.flatMap(preguntasDe);
  if (ruta === 'm') modulo(id);
  else if (ruta === 'quiz' && T.some(m => m.id === id)) {
    const m = T.find(x => x.id === id);
    quiz(`${icono(m)} Quiz: ${m.titulo}`, mezclar(preguntasDe(m)), (p, pct) => { p.notas[m.id] = Math.max(p.notas[m.id] ?? 0, pct); });
  }
  else if (ruta === 'examen') quiz('🏁 Examen final: 25 preguntas al azar', mezclar(todas()).slice(0, 25), (p, pct) => { p.examen = Math.max(p.examen ?? 0, pct); });
  else if (ruta === 'repaso') { const f = cargar().falladas; quiz('🔁 Repaso: preguntas que fallaste', mezclar(todas().filter(q => f[clave(q)]))); }
  else inicio();
  scrollTo(0, 0);
}

addEventListener('hashchange', render);
render();
