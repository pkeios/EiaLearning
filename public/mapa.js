// Mapa del curso: un diagrama de flujo vertical (etapas unidas por flechas, con vueltas atrás cuando hace falta).
// Lo usan los 4 cursos. Cada curso arma las etapas con sus propios módulos, misiones o unidades:
// tools/test-mapas.js controla que el mapa tenga todos, una sola vez y en orden.
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const CSS = `
.mapa { margin: 1.5rem 0; border: 1px solid var(--borde, #e4dcf7); border-radius: 16px; padding: .9rem 1.1rem; background: var(--card, #fff); text-align: left; }
.mapa summary { cursor: pointer; font-weight: 800; font-size: 1.15rem; }
.mapa .intro-mapa { margin: .6rem 0 0; color: var(--suave, #6b6280); }
.mapa ol { list-style: none; margin: 1rem 0 0; padding: 0; display: grid; gap: 1.7rem; }
.mapa .etapa { position: relative; border: 2px solid var(--mapa, var(--acento, var(--color, #7b5cff))); border-radius: 14px; padding: .7rem .9rem; }
.mapa .etapa:not(:last-child)::after { content: '↓'; position: absolute; left: 50%; bottom: -1.65rem; transform: translateX(-50%); font-size: 1.3rem; line-height: 1.6rem; font-weight: 800; color: var(--mapa, var(--acento, var(--color, #7b5cff))); }
.mapa h3 { margin: 0; font-size: 1.05rem; display: flex; align-items: center; gap: .5rem; }
.mapa h3 a { color: inherit; }
.mapa .n { flex: none; display: inline-grid; place-items: center; width: 1.8em; height: 1.8em; border-radius: 50%; background: var(--mapa, var(--acento, var(--color, #7b5cff))); color: #fff; font-size: .9rem; }
.mapa .etapa p { margin: .35rem 0 .5rem; }
.mapa .pasos-m { display: flex; flex-wrap: wrap; gap: .4rem; }
.mapa .paso-m { border: 1px solid var(--borde, #e4dcf7); border-radius: 999px; padding: .2rem .75rem; font-size: .9rem; color: inherit; text-decoration: none; background: var(--card2, #fbf9ff); }
.mapa .paso-m:hover { text-decoration: none; border-color: var(--mapa, var(--acento, var(--color, #7b5cff))); }
.mapa .paso-m.hecho { border-color: var(--ok, var(--bien, #1f9d55)); }
.mapa .vuelta { margin: .6rem 0 0; border: 2px dashed var(--suave, #6b6280); border-radius: 10px; padding: .35rem .7rem; font-size: .92rem; }
.mapa .cierre { margin: 1.1rem 0 .2rem; border: 2px dashed var(--suave, #6b6280); border-radius: 12px; padding: .5rem .8rem; }`;
  // mapa: { titulo, intro, etapas: [{ nombre, href?, texto, items: [{ icono, titulo, href, num, hecho }], vuelta? }], cierre? }
  window.mapaFlujo = mapa => {
    if (typeof document !== 'undefined' && !document.getElementById('estilo-mapa')) {
      const s = document.createElement('style'); s.id = 'estilo-mapa'; s.textContent = CSS; document.head.appendChild(s);
    }
    return `<details class="mapa" open><summary>🗺️ ${esc(mapa.titulo)}</summary>
      ${mapa.intro ? `<p class="intro-mapa">${esc(mapa.intro)}</p>` : ''}
      <ol>${mapa.etapas.map((e, i) => `<li class="etapa">
        <h3><span class="n">${i + 1}</span>${e.href ? `<a href="${esc(e.href)}">${esc(e.nombre)}</a>` : esc(e.nombre)}</h3>
        ${e.texto ? `<p>${esc(e.texto)}</p>` : ''}
        ${e.items && e.items.length ? `<div class="pasos-m">${e.items.map(x => `<a class="paso-m${x.hecho ? ' hecho' : ''}" href="${esc(x.href)}">${x.hecho ? '✅ ' : ''}${esc(x.icono || '')} ${x.num ? esc(x.num) + ': ' : ''}${esc(x.titulo)}</a>`).join('')}</div>` : ''}
        ${e.vuelta ? `<p class="vuelta">↺ ${esc(e.vuelta)}</p>` : ''}
      </li>`).join('')}</ol>
      ${mapa.cierre ? `<p class="cierre">↺ ${esc(mapa.cierre)}</p>` : ''}
    </details>`;
  };
})();
