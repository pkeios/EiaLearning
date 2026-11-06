// Huella de lo que sale en el PDF del curso de inglés: solo la teoría, así cambiar un ejercicio no pide regenerarlo.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
function huellaTeoria() {
  const datos = fs.readFileSync(path.join(__dirname, '..', 'public', 'chicos', 'ingles-unidades.js'), 'utf8');
  const { UNIDADES, GRUPOS_VERBOS } = new Function(datos + ';return { UNIDADES, GRUPOS_VERBOS };')();
  const teoria = UNIDADES.map(u => [u.titulo, u.objetivos, u.reflexion, u.pasos.filter(s => (s.idea && !s.pantalla) || s.tabla || s.vocab || s.personal).map(s => {
    const { modelo, patron, pista, clave, ...resto } = s; // de las preguntas personales, en papel solo va la pregunta
    return resto;
  })]);
  return crypto.createHash('sha256').update(JSON.stringify([teoria, GRUPOS_VERBOS])).digest('hex');
}
module.exports = { huellaTeoria };
