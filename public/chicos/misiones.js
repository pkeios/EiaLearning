// Motor de los cursos para chicos en formato de misiones (web.html, internet.html, programar.html).
// Cada página carga antes su archivo de datos, que define window.CURSO_CHICOS = { clave, titulo, emoji, color, intro, laboratorio, misiones }.
// Pasos de una misión:
//   idea       emoji + frase corta (ej: código de ejemplo; video: { id, t } de YouTube, opcional)
//   q          pregunta con una correcta            ┐
//   clasificar cada ítem en su grupo                ├ los 3 ejercicios con estrella
//   ordenar    tocar los pasos en el orden correcto ┘
//   codigo     editor con vista previa y consola; ej: un ejemplo parecido (no la solución) que se muestra arriba;
//              chequeo(doc, codigo, consola) devuelve '' si está bien o una pista
//   tarea      pasos para hacer fuera de la página (en la compu, en papel o con un adulto), que el chico marca
// Los textos se muestran como HTML (< y > van escritos &lt; y &gt;). Las opciones, los ítems y ej se escapan solos.
// La prueba de esta lógica está en tools/test-chicos-misiones.js.

// ---------- Lógica sin pantalla ----------
const CURSO = window.CURSO_CHICOS, MISIONES = CURSO.misiones;
const CLAVE = CURSO.clave;
const vacio = () => ({ m: {}, codigo: {} });
const cargar = () => { try { return Object.assign(vacio(), JSON.parse(localStorage.getItem(CLAVE))); } catch { return vacio(); } };
const guardar = p => { try { localStorage.setItem(CLAVE, JSON.stringify(p)); } catch {} };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const esEjercicio = s => !!(s.q || s.clasificar || s.ordenar);
// Ordenar: los pasos se muestran mezclados, pero nunca ya ordenados (si no, no hay nada que pensar).
function mezclar(items, azar = Math.random) {
  if (items.length < 2) return items.map((_, k) => k);
  for (;;) {
    const o = items.map((_, k) => k);
    for (let k = o.length - 1; k > 0; k--) { const j = Math.floor(azar() * (k + 1)); [o[k], o[j]] = [o[j], o[k]]; }
    if (o.some((x, k) => x !== k)) return o;
    azar = Math.random;
  }
}
// Los mensajes de error del navegador están en inglés: los traducimos a algo que un chico entienda.
function errorAmigable(msg) {
  const m = String(msg).replace(/^Uncaught\s+/, '');
  let x;
  if ((x = m.match(/(\S+) is not defined/))) return `No conozco "${x[1]}". ¿Lo escribiste igual que cuando lo creaste? Mayúsculas y minúsculas cuentan.`;
  if ((x = m.match(/(\S+) is not a function/))) return `"${x[1]}" no es una función. Revisá cómo se escribe y los paréntesis.`;
  if (/Cannot (read|set) propert(y|ies) of (null|undefined)/.test(m)) return 'No encontré ese elemento. Revisá el id o lo que pusiste en querySelector.';
  if (/Unexpected end of input|missing \) |Unexpected token|Invalid or unexpected token|Unterminated string/.test(m)) return 'Falta o sobra un símbolo: revisá paréntesis ( ), llaves { } y comillas " ".';
  if (/Assignment to constant/.test(m)) return 'Quisiste cambiar una const. Si va a cambiar, creala con let.';
  return m;
}
// El código del chico va adentro de un iframe. Antes le agregamos (en la misma línea, así no cambian los números de línea,
// y después del DOCTYPE, para no romperlo) un script que manda console.log y los errores a la consola de abajo.
const ESPIA = '<script>(function(){var P=parent;console.log=function(){var a=[].slice.call(arguments).map(function(x){return typeof x==="object"?JSON.stringify(x):String(x)});P.__consola&&P.__consola(a.join(" "))};window.onerror=function(m,s,l){P.__error&&P.__error(m,l);return true}})()<\/script>';
const armarDoc = src => { const d = src.match(/^\s*<!doctype[^>]*>/i); return d ? d[0] + ESPIA + src.slice(d[0].length) : ESPIA + src; };
// Las pistas del chequeo usan &lt; y &gt; (como el resto de los textos): para mostrarlas como texto, las volvemos a < y >.
const sinEntidades = t => String(t).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

// Video de apoyo: la tarjeta se entiende sin verlo; está para quien quiere verlo explicado de otra forma.
// Se inserta sin cookies (youtube-nocookie) y se carga recién al abrirlo.
const video = v => `<details class="video"><summary>🎬 ¿No se entendió? Mirá este video</summary>
  <iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}" title="${esc(v.t)}" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
  <p class="suave">${esc(v.t)}. Miralo con un adulto.</p></details>`;

// ---------- Pantalla ----------
const app = document.getElementById('app');
function leer(texto) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const voces = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang));
  const voz = voces.find(v => /^es[-_](419|AR|MX|US|CO|CL|PE|UY)/i.test(v.lang)) || voces.find(v => !/^es[-_]ES/i.test(v.lang)) || voces[0];
  speechSynthesis.speak(Object.assign(new SpeechSynthesisUtterance(sinEntidades(texto.replace(/<[^>]+>/g, '')).replace(/\p{Extended_Pictographic}/gu, '')), { lang: 'es-419', voice: voz || null, rate: .95 }));
}

// Editor con vista previa y consola. clave: dónde se guarda lo que escribe.
function montarEditor(cont, clave, inicial) {
  const p = cargar();
  cont.innerHTML = `<div class="editor lado">
      <div><p class="rotulo">✏️ Tu código</p><textarea spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor de código"></textarea></div>
      <div><p class="rotulo">👀 Así se ve</p><iframe title="Vista previa de tu página"></iframe>
        <p class="rotulo">🖥️ Consola</p><pre class="consola" aria-live="polite"></pre></div>
    </div>
    <div class="fila"><button class="opcion" data-ed="reiniciar">↩️ Empezar de nuevo</button><button class="opcion" data-ed="bajar">💾 Descargar</button></div>`;
  const ta = cont.querySelector('textarea'), fr = cont.querySelector('iframe'), con = cont.querySelector('.consola');
  ta.value = p.codigo[clave] ?? inicial;
  let salida = [], espera;
  const linea = (t, err) => { const s = document.createElement('div'); s.textContent = t; if (err) s.className = 'err'; con.append(s); };
  const correr = () => new Promise(listo => {
    salida = []; con.textContent = '';
    window.__consola = t => { salida.push(t); linea(t); };
    window.__error = (m, l) => { salida.push('ERROR ' + m); linea(`🐞 Línea ${l}: ${errorAmigable(m)}`, true); };
    fr.onload = () => setTimeout(listo, 60);
    fr.srcdoc = armarDoc(ta.value);
  });
  ta.addEventListener('input', () => { const q = cargar(); q.codigo[clave] = ta.value; guardar(q); clearTimeout(espera); espera = setTimeout(correr, 500); });
  // Tab escribe dos espacios (en un editor de verdad pasa lo mismo). Escape suelta el foco, para no quedar atrapado con el teclado.
  ta.addEventListener('keydown', e => {
    if (e.key === 'Escape') return ta.blur();
    if (e.key !== 'Tab' || e.shiftKey) return;
    e.preventDefault();
    ta.setRangeText('  ', ta.selectionStart, ta.selectionEnd, 'end');
    ta.dispatchEvent(new Event('input'));
  });
  cont.querySelector('[data-ed="reiniciar"]').onclick = () => { if (!confirm('¿Borrar tus cambios y volver al código del principio?')) return; ta.value = inicial; ta.dispatchEvent(new Event('input')); correr(); };
  cont.querySelector('[data-ed="bajar"]').onclick = () => {
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([ta.value], { type: 'text/html' })), download: 'index.html' });
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  correr();
  return { comprobar: async chequeo => { await correr(); try { return chequeo(fr.contentDocument, ta.value, salida) || ''; } catch (e) { return 'Algo no está todavía. Revisá la consola y la pista.'; } } };
}

function inicio() {
  const p = cargar(), total = Object.values(p.m).reduce((a, b) => a + b, 0);
  app.className = '';
  document.documentElement.style.setProperty('--color', CURSO.color);
  app.innerHTML = `<a class="volver" href="./">← Elegir curso</a>
    <h2 class="seccion">${CURSO.emoji} ${CURSO.titulo}</h2>
    <p class="chip" style="display:block">${CURSO.intro}</p>
    <p class="estrellas">⭐ <strong>${total}</strong> de ${MISIONES.length * 3} estrellas</p>
    <div class="misiones">${MISIONES.map((m, i) => `<button class="mision" style="--c:${m.color}" data-i="${i}">
      <span class="emoji">${m.emoji}</span><strong>${i + 1}. ${m.titulo}</strong><small>${p.m[i] != null ? '⭐'.repeat(p.m[i]) + '☆'.repeat(3 - p.m[i]) : '▶️ Jugar'}</small></button>`).join('')}</div>
    ${CURSO.laboratorio ? `<h2 class="seccion">🧪 Laboratorio libre</h2>
    <div class="misiones"><a class="mision" style="--c:#1f9d55;color:inherit;text-decoration:none" href="#/libre"><span class="emoji">🧪</span><strong>Mi editor</strong><small>Probá lo que quieras</small></a></div>` : ''}`;
  app.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { location.hash = '#/' + b.dataset.i; });
  scrollTo(0, 0);
}

function libre() {
  app.className = 'ancho';
  document.documentElement.style.setProperty('--color', '#1f9d55');
  app.innerHTML = `<a class="volver" href="#/">← Misiones</a>
    <section class="tarjeta"><div class="grande">🧪</div><p class="texto">Tu laboratorio: escribí lo que quieras. Se guarda solo en este navegador.</p><div id="ed"></div></section>`;
  montarEditor(app.querySelector('#ed'), 'libre', '<h1>Mi laboratorio</h1>\n<p>Probá acá lo que aprendiste.</p>\n');
  scrollTo(0, 0);
}

function mision(i) {
  const m = MISIONES[i];
  document.documentElement.style.setProperty('--color', m.color);
  let paso = 0, estrellas = 0;
  const mostrar = () => {
    if (paso === m.pasos.length) return final();
    const s = m.pasos[paso], bloquea = !s.idea;
    let primerIntento = true;
    const orden = s.ordenar ? mezclar(s.items) : [];
    app.className = s.codigo ? 'ancho' : '';
    app.innerHTML = `<a class="volver" href="#/">← Misiones</a>
      <div class="barra">${m.pasos.map((_, k) => `<span class="${k <= paso ? 'hecho' : ''}"></span>`).join('')}</div>
      <section class="tarjeta">
        ${s.idea ? `<div class="grande">${s.idea}</div><p class="texto">${s.t}</p>${s.ej ? `<pre class="consola" style="text-align:left">${esc(s.ej)}</pre>` : ''}${s.video ? video(s.video) : ''}` : ''}
        ${s.q ? `<p class="texto">${s.q}</p>${s.ej ? `<pre class="consola" style="text-align:left">${esc(s.ej)}</pre>` : ''}<div class="opciones">${s.o.map((o, j) => `<button class="opcion" data-j="${j}">${esc(o)}</button>`).join('')}</div>` : ''}
        ${s.clasificar ? `<p class="texto">${s.clasificar}</p><div class="chips">${s.items.map(([t], k) => `<div class="chip" data-k="${k}"><span>${esc(t)}</span>${s.grupos.map((g, j) => `<button data-g="${j}">${g}</button>`).join('')}</div>`).join('')}</div>` : ''}
        ${s.ordenar ? `<p class="texto">${s.ordenar}</p><p class="suave">Tocá los pasos en orden, del primero al último.</p>
          <ol class="ordenados"></ol><div class="opciones">${orden.map(k => `<button class="opcion" data-o="${k}">${esc(s.items[k])}</button>`).join('')}</div>` : ''}
        ${s.codigo ? `<div class="grande" style="font-size:3rem">⌨️</div><p class="texto">${s.codigo}</p>
          ${s.ej ? `<p class="rotulo" style="text-align:left">📖 Así se escribe (un ejemplo parecido, no igual):</p><pre class="consola" style="text-align:left">${esc(s.ej)}</pre>` : ''}<div id="ed"></div>
          <details class="pista"><summary>💡 Pista</summary><p>${s.pista}</p></details>
          <button class="boton" id="comprobar">✅ Comprobar</button>` : ''}
        ${s.tarea ? `<div class="grande" style="font-size:3rem">${s.emoji || '🖥️'}</div><p class="texto">${s.tarea}</p><div class="lista-tarea">${s.pasos.map((x, k) => `<label><input type="checkbox" data-t="${k}"> <span>${x}</span></label>`).join('')}</div>` : ''}
        <p class="aviso" id="aviso-mision" aria-live="polite"></p>
        <div class="acciones"><button class="chico" id="oir" aria-label="Escuchar">🔊</button><button class="boton" id="seguir" ${bloquea ? 'disabled' : ''}>Seguir →</button></div>
      </section>`;
    const aviso = app.querySelector('#aviso-mision'), seguir = app.querySelector('#seguir');
    const listo = (cuenta = true) => { if (cuenta && primerIntento) estrellas++; seguir.disabled = false; seguir.focus(); };
    app.querySelector('#oir').onclick = () => leer((s.idea ? s.t : s.q || s.clasificar || s.ordenar || s.codigo || s.tarea) + (s.o ? '. ' + s.o.join('. ') : '') + (s.tarea ? '. ' + s.pasos.join('. ') : ''));
    seguir.onclick = () => { paso++; mostrar(); scrollTo(0, 0); };
    app.querySelectorAll('.opcion[data-j]').forEach(b => b.onclick = () => {
      if (Number(b.dataset.j) === s.c) {
        b.classList.add('bien');
        app.querySelectorAll('.opcion[data-j]').forEach(x => x.disabled = true);
        aviso.className = 'aviso bien'; aviso.textContent = '🎉 ¡Bien! ' + s.e;
        listo();
      } else {
        primerIntento = false;
        b.classList.add('mal'); b.disabled = true;
        aviso.className = 'aviso mal'; aviso.textContent = '🤔 Casi... ¡probá otra!';
      }
    });
    let faltan = s.clasificar ? s.items.length : 0;
    app.querySelectorAll('.chips > .chip[data-k]').forEach(chip => chip.querySelectorAll('button').forEach(b => b.onclick = () => {
      const bien = Number(b.dataset.g) === s.items[chip.dataset.k][1];
      chip.classList.remove('mal'); void chip.offsetWidth;
      chip.classList.add(bien ? 'bien' : 'mal');
      if (!bien) { primerIntento = false; aviso.className = 'aviso mal'; aviso.textContent = '🤔 Ese no va ahí. ¡Probá el otro!'; return; }
      chip.querySelectorAll('button').forEach(x => x.disabled = true);
      aviso.className = 'aviso bien'; aviso.textContent = '✅ ¡Bien!';
      if (--faltan === 0) { aviso.textContent = '🎉 ¡Todos en su lugar!'; listo(); }
    }));
    if (s.ordenar) {
      let siguiente = 0;
      const lista = app.querySelector('.ordenados');
      app.querySelectorAll('.opcion[data-o]').forEach(b => b.onclick = () => {
        if (Number(b.dataset.o) !== siguiente) {
          primerIntento = false;
          b.classList.remove('mal'); void b.offsetWidth; b.classList.add('mal');
          aviso.className = 'aviso mal'; aviso.textContent = `🤔 Ese no es el paso ${siguiente + 1}. ¿Qué tiene que pasar antes?`;
          return;
        }
        b.remove();
        lista.insertAdjacentHTML('beforeend', `<li>${esc(s.items[siguiente])}</li>`);
        aviso.className = 'aviso bien'; aviso.textContent = '✅ ¡Bien!';
        if (++siguiente === s.items.length) { aviso.textContent = '🎉 ¡Todo en orden! ' + (s.e || ''); listo(); }
      });
    }
    if (s.codigo) {
      const ed = montarEditor(app.querySelector('#ed'), i + '-' + paso, s.inicial);
      aviso.textContent = '⌨️ Escribí el código y tocá Comprobar.';
      app.querySelector('#comprobar').onclick = async () => {
        const falta = await ed.comprobar(s.chequeo);
        if (falta) { aviso.className = 'aviso mal'; aviso.textContent = '🤔 ' + sinEntidades(falta); return; }
        aviso.className = 'aviso bien'; aviso.textContent = '🎉 ¡Funciona! ' + (s.bien || 'Lo programaste vos.');
        listo(false);
      };
    }
    if (s.tarea) {
      const pedido = s.aviso || '✋ Hacelo y marcá cada paso.';
      aviso.textContent = pedido;
      const cajas = app.querySelectorAll('[data-t]');
      cajas.forEach(c => c.onchange = () => {
        if ([...cajas].every(x => x.checked)) { aviso.className = 'aviso bien'; aviso.textContent = '🎉 ¡Hecho!'; listo(false); }
        else { seguir.disabled = true; aviso.className = 'aviso'; aviso.textContent = pedido; }
      });
    }
  };
  const final = () => {
    const p = cargar(); p.m[i] = Math.max(p.m[i] || 0, estrellas); guardar(p);
    app.className = '';
    const ultima = i + 1 === MISIONES.length;
    app.innerHTML = `<section class="tarjeta">
      <div class="fiesta">🎉${CURSO.emoji}🎉</div>
      <p class="texto">¡Misión ${i + 1} cumplida!</p>
      <div class="grande">${'⭐'.repeat(estrellas) + '☆'.repeat(3 - estrellas)}</div>
      <p class="chip" style="display:block">💭 <strong>Contale a alguien de tu casa:</strong> ${m.reflexion} Si podés explicarlo con tus palabras, ¡lo aprendiste de verdad!</p>
      <p>${estrellas === 3 ? '¡Perfecto, todo al primer intento!' : 'Podés volver a jugarla para ganar más estrellas.'}</p>
      ${ultima && CURSO.cierre ? `<p>${CURSO.cierre}</p>` : ''}
      <div class="acciones"><a class="volver" href="#/">← Misiones</a>${!ultima ? `<a class="boton" href="#/${i + 1}">Siguiente misión →</a>` : CURSO.laboratorio ? '<a class="boton" href="#/libre">🧪 Ir a mi laboratorio</a>' : '<a class="boton" href="#/">🏆 Ver mis estrellas</a>'}</div>
    </section>`;
    scrollTo(0, 0);
  };
  mostrar();
  scrollTo(0, 0);
}

function rutear() {
  window.speechSynthesis?.cancel();
  if (location.hash === '#/libre' && CURSO.laboratorio) return libre();
  const i = Number(location.hash.slice(2));
  if (location.hash.length > 2 && MISIONES[i]) mision(i); else inicio();
}
addEventListener('hashchange', rutear);
rutear();
