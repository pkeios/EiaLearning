// Controla la guía de granadas de cs2-calls: datos completos y enlaces de las lecciones que apuntan a mapas que existen.
// Uso: node tools/test-granadas.js
const assert = require('assert');
const path = require('path');
global.window = {};
require(path.join(__dirname, '../public/cs2-calls/granadas-datos.js'));
require(path.join(__dirname, '../public/cs2-calls/contenido.js'));
const G = window.GRANADAS;
const MAPAS = ['mirage', 'inferno', 'dust2', 'nuke', 'ancient', 'anubis', 'cache'];
let total = 0;
for (const m of MAPAS) {
  assert(G[m] && G[m].length > 0, `sin granadas: ${m}`);
  for (const x of G[m]) {
    total++;
    assert(['smoke', 'flashbang', 'molotov', 'he'].includes(x.t), `tipo raro en ${m}: ${x.t}`);
    assert(['t', 'ct', 'any'].includes(x.l), `lado raro en ${m}: ${x.l}`);
    assert(x.a && x.d && x.p && x.r, `faltan textos en ${m}: ${x.u}`);
    assert(/^[a-z0-9]+-[a-z]+-[A-Za-z0-9]+$/.test(x.v), `video raro en ${m}: ${x.v}`);
    assert(x.u.startsWith(`https://csnades.gg/${m}/`), `enlace raro en ${m}: ${x.u}`);
    assert(!x.c || x.c.startsWith('setpos '), `consola rara en ${m}: ${x.c}`);
  }
}
const enlaces = JSON.stringify(window.TEMARIO).match(/granadas\.html#[a-z0-9]+\/[a-z]+/g) || [];
assert(enlaces.length === MAPAS.length * 2, `se esperaban ${MAPAS.length * 2} enlaces a la guía, hay ${enlaces.length}`);
for (const e of enlaces) {
  const [m, l] = e.split('#')[1].split('/');
  assert(G[m] && ['t', 'ct'].includes(l), `enlace roto: ${e}`);
}
console.log(`test-granadas OK: ${total} granadas, ${enlaces.length} enlaces desde las lecciones`);
