// Pasa el texto de un curso (lecciones sin código, preguntas, opciones, explicaciones y glosario) por el corrector LanguageTool en español.
// Uso: node tools/ortografia.js <carpeta> (si falla con "self-signed certificate", corré node --use-system-ca tools/ortografia.js <carpeta>). Manda el texto del curso a la API pública de LanguageTool (es contenido público del sitio). Los avisos son sugerencias: corregí solo los errores reales.
const fs = require('fs');
const D = require('path').join(__dirname, '..', 'public', process.argv[2] || '') + '/';
const T = new Function('window', fs.readFileSync(D + 'contenido.js', 'utf8') + ';return window.TEMARIO')({});
const G = new Function('window', fs.readFileSync(D + 'glosario.js', 'utf8') + ';return window.GLOSARIO')({});
const plano = h => h.replace(/<pre>[\s\S]*?<\/pre>/g, '\n').replace(/<(p|li|tr|h\d)[^>]*>/g, '\n').replace(/<\/t[dh]>/g, ' · ').replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/[ \t]+/g, ' ').split('\n').map(s => s.trim()).filter(Boolean).join('\n');
const IGNORAR = /VOSEO|MORFOLOGIK|WHITESPACE|UPPERCASE_SENTENCE|PUNCTUATION_PARAGRAPH_END|DOUBLE_PUNCTUATION|ES_QUESTION_MARK|SPANISH_WORD_REPEAT|COMMA_PARENTHESIS|DASH|TYPOGRAPHY|ES_SIMPLE_REPLACE_SIMPLE_ESCRIBIR|PREFERENCE/;
const espera = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const bloques = T.map(m => [m.id, [m.titulo, ...m.objetivos, ...m.practica, ...m.lecciones.flatMap(l => [l.titulo, plano(l.html)]), ...m.quiz.flatMap(q => [q.q, ...q.opciones, q.explicacion])].join('\n')]);
  bloques.push(['glosario', G.map(g => g.t + ': ' + g.d).join('\n')]);
  let n = 0;
  for (const [id, text] of bloques) {
    // La API pública acepta ~20 KB por pedido: se parte en pedazos por línea.
    const lineas = text.split('\n'), partes = [];
    let actual = '';
    for (const l of lineas) { if ((actual + l).length > 15000) { partes.push(actual); actual = ''; } actual += l + '\n'; }
    partes.push(actual);
    for (const parte of partes) {
      const r = await fetch('https://api.languagetool.org/v2/check', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', 'user-agent': 'curso-revision' }, body: new URLSearchParams({ text: parte, language: 'es' }) });
      if (!r.ok) { console.log(id, 'ERROR', r.status); continue; }
      for (const m of (await r.json()).matches) {
        if (IGNORAR.test(m.rule.id)) continue;
        n++;
        console.log(`${id} · ${m.rule.id} · «${parte.slice(Math.max(0, m.offset - 25), m.offset + m.length + 25).replace(/\n/g, ' / ')}» → ${m.replacements.slice(0, 2).map(x => x.value).join(' | ')} (${m.message.slice(0, 70)})`);
      }
      await espera(3500);
    }
  }
  console.log('avisos:', n);
})();
