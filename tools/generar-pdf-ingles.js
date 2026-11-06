// Arma public/chicos/ingles-teoria.pdf, el PDF para descargar con la teoría del curso de inglés.
// Volvé a correrlo cuando cambie la teoría: node tools/generar-pdf-ingles.js (test-ingles.js avisa si quedó desactualizado).
// Necesita playwright-core (npm i --no-save playwright-core) y Edge o Chrome instalado.
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');
const { huellaTeoria } = require('./huella-ingles.js');
const RAIZ = path.join(__dirname, '..', 'public');
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };
const srv = http.createServer((q, r) => {
  const f = path.join(RAIZ, decodeURIComponent(q.url.split('?')[0]));
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'content-type': tipos[path.extname(f)] || 'application/octet-stream' });
  r.end(fs.readFileSync(f));
});
(async () => {
  await new Promise(ok => srv.listen(0, ok));
  const nav = await chromium.launch({ channel: process.env.NAVEGADOR || 'msedge', headless: true });
  const pag = await nav.newPage();
  await pag.goto(`http://localhost:${srv.address().port}/chicos/ingles.html#/imprimir/todo`);
  await pag.waitForSelector('.hoja');
  await pag.pdf({
    path: path.join(RAIZ, 'chicos', 'ingles-teoria.pdf'),
    format: 'A4',
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:9px;width:100%;text-align:center;color:#555">Inglés básico · página <span class="pageNumber"></span> de <span class="totalPages"></span></div>',
  });
  await nav.close();
  srv.close();
  // La huella permite detectar, sin navegador, que la teoría cambió y el PDF quedó viejo.
  fs.writeFileSync(path.join(RAIZ, 'chicos', 'ingles-teoria.huella'), huellaTeoria() + '\n');
  console.log('PDF generado: public/chicos/ingles-teoria.pdf');
})().catch(e => { console.error('FALLA:', e.message); process.exit(1); });
