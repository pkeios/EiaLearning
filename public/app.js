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

function inicio() {
  const p = cargar();
  app.innerHTML = `
    <h1>Ruta de AI Engineering</h1>
    <p class="intro">Método: <strong>leé</strong> la lección → <strong>hacé</strong> la práctica → <strong>explicalo</strong> con tus palabras → aprobá el quiz con ${APROBADO}% → siguiente módulo.
      Lo que fallás va a <a href="#/repaso">Repaso</a> (${Object.keys(p.falladas).length} pendientes). Examen final: ${p.examen != null ? p.examen + '%' : 'sin hacer'}.</p>
    <ol class="modulos" start="0">${T.map(m => {
      const leidas = m.lecciones.filter((_, i) => p.leidas[m.id + ':' + i]).length;
      const nota = p.notas[m.id];
      return `<li class="${nota >= APROBADO ? 'ok' : ''}"><a href="#/m/${m.id}">${esc(m.titulo)}</a>
        <small>${esc(m.nivel)} · lecciones ${leidas}/${m.lecciones.length} · quiz ${nota != null ? nota + '%' : '—'}</small></li>`;
    }).join('')}</ol>`;
}

function modulo(id) {
  const m = T.find(x => x.id === id);
  if (!m) return inicio();
  const p = cargar();
  const leida = i => p.leidas[m.id + ':' + i];
  app.innerHTML = `
    <p><a href="#/">← Temario</a></p>
    <h1>${esc(m.titulo)}</h1>
    <h2>Objetivos</h2><ul>${m.objetivos.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
    <h2>Lecciones</h2>${m.lecciones.map((l, i) => `
      <details ${leida(i) ? '' : 'open'}><summary>${leida(i) ? '✔ ' : ''}${esc(l.titulo)}</summary>
        <div class="leccion">${l.html}</div>
        ${leida(i) ? '' : `<button data-leida="${i}">Marcar como leída</button>`}</details>`).join('')}
    <h2>Práctica</h2><ol>${m.practica.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
    <h2>Explicalo con tus palabras</h2>
    <p class="explicacion">Técnica Feynman: si no lo podés explicar simple, todavía no lo entendiste. Se guarda solo.</p>
    <textarea id="apunte" rows="6" aria-label="Tu explicación">${esc(p.apuntes[m.id] || '')}</textarea>
    <h2>Recursos</h2><ul>${m.recursos.map(r => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.t)}</a></li>`).join('')}</ul>
    <p><a class="boton" href="#/quiz/${m.id}">Hacer quiz (${m.quiz.length} preguntas)</a></p>`;
  app.querySelectorAll('[data-leida]').forEach(b => b.onclick = () => {
    const p = cargar(); p.leidas[m.id + ':' + b.dataset.leida] = true; guardar(p); modulo(id);
  });
  app.querySelector('#apunte').oninput = e => { const p = cargar(); p.apuntes[m.id] = e.target.value; guardar(p); };
}

function quiz(titulo, preguntas, alTerminar) {
  app.innerHTML = `<p><a href="#/">← Temario</a></p><h1>${esc(titulo)}</h1>
    ${preguntas.length ? '' : '<p>No hay preguntas pendientes. 🎉</p>'}
    <form id="quiz">${preguntas.map((q, i) => `
      <fieldset><legend>${i + 1}. ${esc(q.q)}</legend>
        ${q.opciones.map((o, j) => `<label><input type="radio" name="p${i}" value="${j}" required> ${esc(o)}</label>`).join('')}
        <p class="explicacion" hidden></p></fieldset>`).join('')}
      ${preguntas.length ? '<button>Corregir</button>' : ''}</form>
    <p id="resultado" class="resultado" aria-live="polite"></p>`;
  const form = app.querySelector('#quiz');
  form.onsubmit = e => {
    e.preventDefault();
    const datos = new FormData(form), p = cargar(), campos = form.querySelectorAll('fieldset');
    let bien = 0;
    preguntas.forEach((q, i) => {
      const ok = Number(datos.get('p' + i)) === q.correcta;
      bien += ok;
      campos[i].className = ok ? 'bien' : 'mal';
      const exp = campos[i].querySelector('.explicacion');
      exp.hidden = false;
      exp.innerHTML = (ok ? '✔ ' : `✘ Correcta: <strong>${esc(q.opciones[q.correcta])}</strong>. `) + esc(q.explicacion);
      if (ok) delete p.falladas[clave(q)]; else p.falladas[clave(q)] = true;
    });
    const pct = Math.round(100 * bien / preguntas.length);
    alTerminar?.(p, pct);
    guardar(p);
    form.querySelector('button').disabled = true;
    const res = app.querySelector('#resultado');
    res.innerHTML = `${bien}/${preguntas.length} (${pct}%) — ${pct >= APROBADO ? 'Aprobado ✔' : 'Leé las explicaciones y reintentá.'} <button onclick="render()">Reintentar</button>`;
    res.scrollIntoView({ behavior: 'smooth' });
  };
}

function render() {
  const [, ruta, id] = location.hash.split('/');
  const todas = () => T.flatMap(preguntasDe);
  if (ruta === 'm') modulo(id);
  else if (ruta === 'quiz' && T.some(m => m.id === id)) {
    const m = T.find(x => x.id === id);
    quiz('Quiz: ' + m.titulo, mezclar(preguntasDe(m)), (p, pct) => { p.notas[m.id] = Math.max(p.notas[m.id] ?? 0, pct); });
  }
  else if (ruta === 'examen') quiz('Examen final (25 preguntas al azar de todo el temario)', mezclar(todas()).slice(0, 25), (p, pct) => { p.examen = Math.max(p.examen ?? 0, pct); });
  else if (ruta === 'repaso') { const f = cargar().falladas; quiz('Repaso: preguntas que fallaste', mezclar(todas().filter(q => f[clave(q)]))); }
  else inicio();
  scrollTo(0, 0);
}

addEventListener('hashchange', render);
render();
