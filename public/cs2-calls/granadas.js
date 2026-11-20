// Guía de granadas: filtra window.GRANADAS por mapa, lado, tipo y texto. El estado va en el hash: #mapa/lado
const MAPAS = { mirage: 'Mirage', inferno: 'Inferno', dust2: 'Dust II', nuke: 'Nuke', ancient: 'Ancient', anubis: 'Anubis', cache: 'Cache' };
const TIPOS = { smoke: ['💨', 'Humos'], flashbang: ['⚡', 'Flashes'], molotov: ['🔥', 'Molotovs'], he: ['💥', 'Granadas HE'] };
const A = 'https://assets.csnades.gg/nades/';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

$('mapa').innerHTML = Object.entries(MAPAS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');

function leerHash() {
  const [m, l] = location.hash.slice(1).split('/');
  if (MAPAS[m]) $('mapa').value = m;
  if (l === 't' || l === 'ct') $('lado').value = l;
}

function granada(x) {
  const ambos = x.l === 'any' ? ' <small>(sirve para los dos lados)</small>' : '';
  return `<details class="granada"><summary>${TIPOS[x.t][0]} <strong>${esc(x.a)}</strong> · desde ${esc(x.d)}${x.e ? ' ⭐' : ''}</summary>
    <p>${esc(x.p)}.${ambos} <em>${esc(x.r)}.</em></p>
    <video src="${A}${esc(x.v)}/lq.mp4" poster="${A}${esc(x.v)}/thumbnail_small.webp" preload="none" controls muted playsinline></video>
    <p><small>Video: <a href="${esc(x.u)}" target="_blank" rel="noopener">CSNADES.gg</a></small></p>
    ${x.c ? `<pre><code>${esc(x.c)}</code></pre>` : '<p><small>Esta no tiene línea de consola: guiate por el video.</small></p>'}
  </details>`;
}

function mostrar() {
  const m = $('mapa').value, l = $('lado').value, t = $('tipo').value, q = $('buscar').value.trim().toLowerCase(), solo = $('solo').checked;
  history.replaceState(null, '', `#${m}/${l}`);
  const lista = window.GRANADAS[m].filter(x => (x.l === l || x.l === 'any') && (!t || x.t === t) && (!solo || x.e)
    && (!q || (x.a + ' ' + x.d).toLowerCase().includes(q)));
  $('cuenta').textContent = `${lista.length} granadas del lado ${l.toUpperCase()} en ${MAPAS[m]}`;
  $('lista').innerHTML = Object.keys(TIPOS).map(tipo => {
    const g = lista.filter(x => x.t === tipo);
    return g.length ? `<h2>${TIPOS[tipo][0]} ${TIPOS[tipo][1]} (${g.length})</h2>${g.map(granada).join('')}` : '';
  }).join('') || '<p>No hay granadas con esos filtros.</p>';
}

for (const id of ['mapa', 'lado', 'tipo', 'solo']) $(id).addEventListener('change', mostrar);
$('buscar').addEventListener('input', mostrar);
addEventListener('hashchange', () => { leerHash(); mostrar(); });
leerHash();
mostrar();
