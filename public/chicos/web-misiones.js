// Misiones de "Programá tu web" (chicos de 12 a 14 años). El motor está en misiones.js y la prueba en tools/test-chicos-misiones.js.
// Pasos: idea (emoji + frase corta, ej = código de ejemplo), q (una correcta), clasificar (cada ítem en su grupo),
// codigo (editor con vista previa: chequeo(doc, codigo, consola) devuelve '' si está bien o una pista) y tarea (pasos en la compu).
// Los textos se muestran como HTML: < y > van escritos &lt; y &gt;. Las opciones (o), los ítems y ej se escapan solos.
(function () {
  const css = (d, sel, prop) => { const el = d.querySelector(sel); return el ? d.defaultView.getComputedStyle(el)[prop] : ''; };
  const texto = (d, sel) => (d.querySelector(sel)?.textContent || '').trim();
  const huboError = consola => consola.some(l => l.startsWith('ERROR'));
  // Corre el JavaScript del chico fuera de la página, cambiando un valor, para ver si su if funciona en todos los casos.
  const correrJS = (src, buscar, poner) => {
    const js = (src.split(/<script>/i)[1] || '').split(/<\/script>/i)[0];
    const out = [];
    new Function('console', js.replace(buscar, poner))({ log: (...a) => out.push(a.join(' ')) });
    return out.join('\n');
  };
  window.CURSO_CHICOS = {
  clave: 'chicos-web', titulo: 'Programá tu web', emoji: '💻', color: '#2f6fe4', laboratorio: true,
  intro: 'Vas a hacer tu propia página web con <strong>HTML</strong> (lo que hay), <strong>CSS</strong> (cómo se ve) y <strong>JavaScript</strong> (lo que hace). Primero acá, y después en tu compu con un editor de verdad.',
  misiones: [
  { emoji: '🌐', titulo: '¿Qué es una página web?', color: '#2f6fe4', reflexion: '¿Qué hacen HTML, CSS y JavaScript en una página?', pasos: [
    { idea: '🌐', t: 'Una página web es un archivo de texto. El navegador lo lee y lo dibuja en la pantalla.', video: { id: '0xSPgPKJ7mo', t: '¿Qué es HTML y para qué sirve? · Retro (4:01)' } },
    { idea: '🦴 👕 🧠', t: 'HTML es el esqueleto, CSS es la ropa y JavaScript es el cerebro de la página.' },
    { clasificar: '¿Qué parte hace cada cosa?', grupos: ['🦴 HTML', '👕 CSS', '🧠 JS'], items: [['Un título que dice "Hola"', 0], ['El fondo de color azul', 1], ['Un botón que cuenta clics', 2], ['Una lista de tus juegos', 0], ['Letras más grandes', 1]] },
    { idea: '✏️', t: 'En el editor escribís código a la izquierda y ves la página a la derecha. El texto va entre las etiquetas.', ej: '<h1>Hola, mundo</h1>\n    ↑ abre    ↑ el texto que se ve    ↑ cierra' },
    { codigo: 'Cambiá "Hola, mundo" por tu nombre o tu apodo y mirá cómo cambia la página.', inicial: '<h1>Hola, mundo</h1>\n<p>Esta es mi primera página.</p>\n',
      ej: '<h1>Hola, soy Lucas</h1>', pista: 'Borrá solo las palabras Hola, mundo. No toques &lt;h1&gt; ni &lt;/h1&gt;.',
      chequeo: d => { const t = texto(d, 'h1'); return !t ? 'No encuentro el título: ¿borraste &lt;h1&gt;?' : t === 'Hola, mundo' ? 'Todavía dice "Hola, mundo". Cambialo por tu nombre.' : ''; } },
    { q: 'Una página web, ¿qué es por dentro?', o: ['📄 Texto con código que el navegador entiende', '🎨 Un dibujo pegado', '🪄 Magia de internet'], c: 0, e: 'Es texto. El navegador lo lee y lo dibuja.' },
    { idea: '🔍', t: 'En casi cualquier página, Ctrl+U muestra su código. ¡Todas están hechas de texto!' },
    { q: '¿Qué parte haría que un botón haga algo al tocarlo?', o: ['🦴 HTML', '👕 CSS', '🧠 JavaScript'], c: 2, e: 'JavaScript es el cerebro: decide qué pasa cuando tocás algo.' },
  ] },
  { emoji: '📝', titulo: 'Tu editor de texto', color: '#e0582f', reflexion: '¿Por qué hay que guardar y recargar para ver los cambios?', pasos: [
    { idea: '📝', t: 'Para programar se usa un editor de texto, no Word. Word agrega cosas escondidas que rompen el código.' },
    { idea: '🆓', t: 'Visual Studio Code es gratis y anda en Windows y Mac. En Windows, el Bloc de notas también sirve.', video: { id: 'CxF3ykWP1H4', t: 'Visual Studio Code: tutorial para principiantes · MoureDev (9:32)' } },
    { idea: '🏷️', t: 'El final del nombre de un archivo es la extensión. Una página web se guarda con .html al final.' },
    { clasificar: '¿Qué tipo de archivo es?', grupos: ['🌐 Página web', '📄 Otra cosa'], items: [['index.html', 0], ['tarea.docx', 1], ['foto.jpg', 1], ['juego.html', 0], ['notas.txt', 1]] },
    { tarea: 'Armá tu primera página en tu compu. Si no es tuya, pedí permiso a un adulto.', pasos: [
      'Creá una carpeta nueva llamada <code>mi-web</code>, en Documentos o en el Escritorio.',
      'Abrí tu editor: Visual Studio Code o el Bloc de notas.',
      'Escribí <code>&lt;h1&gt;Hola, soy yo&lt;/h1&gt;</code>.',
      'Guardá con Ctrl+S adentro de <code>mi-web</code>, con el nombre <code>index.html</code>. En el Bloc de notas, elegí "Todos los archivos" y la codificación UTF-8.',
      'Hacé doble clic en <code>index.html</code>: se abre en el navegador. ¡Es tu página!',
    ] },
    { q: 'Cambiaste tu archivo en el editor, pero el navegador muestra lo viejo. ¿Qué hacés?', o: ['💾 Guardo con Ctrl+S y recargo con F5', '🗑️ Borro todo', '🔌 Apago la compu'], c: 0, e: 'El navegador muestra lo último guardado. Guardás, recargás y aparece.' },
    { idea: '🔁', t: 'El ciclo del programador: escribir, guardar con Ctrl+S, recargar con F5 y mirar. ¡Muchas veces por día!' },
    { tarea: 'Probá el ciclo en tu compu:', pasos: [
      'En tu <code>index.html</code>, abajo del título, agregá <code>&lt;p&gt;Me gusta...&lt;/p&gt;</code> con algo que te guste.',
      'Guardá con Ctrl+S.',
      'En el navegador, recargá con F5 y fijate que aparezca.',
    ] },
    { q: 'Querés escribir tu página. ¿Dónde lo hacés?', o: ['📃 En Word', '📝 En un editor de texto', '🖼️ En Paint'], c: 1, e: 'Word y Paint guardan otras cosas. El código va en un editor de texto.' },
  ] },
  { emoji: '🏷️', titulo: 'Etiquetas HTML', color: '#7a5af8', reflexion: '¿Para qué sirve la etiqueta que cierra, la que tiene la barra?', pasos: [
    { idea: '🏷️', t: 'HTML usa etiquetas. Una abre, como &lt;p&gt;, y otra cierra, como &lt;/p&gt;. Lo de adentro es el contenido.', ej: '<p>Hola, este es un párrafo.</p>', video: { id: 'mNbnV3aN3KA', t: 'Aprendé HTML en 15 minutos · Victor Robles WEB (16:11)' } },
    { idea: '📏', t: 'Los títulos van de &lt;h1&gt;, el más grande, a &lt;h6&gt;, el más chico. Los párrafos van en &lt;p&gt;.', ej: '<h1>Título grande</h1>\n<h2>Subtítulo</h2>\n<p>Un párrafo con texto.</p>' },
    { codigo: 'Debajo del título que ya está, agregá un &lt;h2&gt; que diga "Mis cosas favoritas" y, abajo, un párrafo &lt;p&gt; contando una.', necesita: ['h1'], inicial: '<h1>Mi página</h1>\n\n',
      ej: '<h2>Mis mascotas</h2>\n<p>Tengo un perro que se llama Toto.</p>', pista: 'Así: &lt;h2&gt;Mis cosas favoritas&lt;/h2&gt; y en otra línea &lt;p&gt;Me encanta...&lt;/p&gt;',
      chequeo: d => !/favorit/i.test(texto(d, 'h2')) ? 'Falta un &lt;h2&gt; que diga "Mis cosas favoritas".' : !texto(d, 'p') ? 'Falta el párrafo &lt;p&gt; con algo adentro.' : '' },
    { q: 'Escribiste esto y toda la página quedó gigante. ¿Qué falta?', ej: '<h1>Hola<h1>\n<p>Chau</p>', o: ['Más espacios', 'La barra en la que cierra: </h1>', 'Un punto al final'], c: 1, e: 'Sin </h1> el título nunca termina, y todo lo que sigue queda gigante.' },
    { idea: '💪', t: '&lt;strong&gt; pone en negrita, &lt;em&gt; en cursiva y &lt;br&gt; hace un salto de línea.', ej: '<p>Esto es <strong>muy</strong> bueno y esto <em>no tanto</em>.</p>' },
    { codigo: 'En el párrafo que ya está, rodeá la palabra "importante" con &lt;strong&gt; y &lt;/strong&gt; para ponerla en negrita.', necesita: ['p'], inicial: '<p>Esto es importante: guardá seguido.</p>\n',
      ej: '<p>Mañana hay <strong>prueba</strong> de mate.</p>', pista: 'Rodeá la palabra: &lt;strong&gt;importante&lt;/strong&gt;',
      chequeo: d => texto(d, 'strong').toLowerCase() === 'importante' ? '' : 'Lo que está entre &lt;strong&gt; y &lt;/strong&gt; tiene que ser solo "importante".' },
    { clasificar: '¿Está bien escrita?', grupos: ['✅ Bien', '❌ Mal'], items: [['<p>Hola</p>', 0], ['<p>Hola<p>', 1], ['<h2>Juegos</h2>', 0], ['<strong>Ojo</strong>', 0], ['<h1>Título</h2>', 1]] },
    { idea: '🪆', t: 'Una etiqueta puede ir adentro de otra. Se cierran en orden: primero la de adentro, después la de afuera.' },
    { q: '¿Cuál está bien anidada?', o: ['<p><strong>Hola</p></strong>', '<p><strong>Hola</strong></p>'], c: 1, e: 'Primero cerrás la de adentro (strong) y después la de afuera (p).' },
  ] },
  { emoji: '🔗', titulo: 'Listas, enlaces e imágenes', color: '#1f9d55', reflexion: '¿Para qué sirve el alt de una imagen?', pasos: [
    { idea: '📋', t: 'Una lista con viñetas es &lt;ul&gt;. Cada cosa de la lista va en un &lt;li&gt;.', ej: '<ul>\n  <li>Fútbol</li>\n  <li>Dibujar</li>\n</ul>' },
    { codigo: 'Debajo de "Me gusta", hacé una lista &lt;ul&gt; con 3 cosas que te gusten, cada una en su &lt;li&gt;.', necesita: ['h2'], inicial: '<h2>Me gusta</h2>\n\n',
      ej: '<ul>\n  <li>Pizza</li>\n  <li>Helado</li>\n  <li>Milanesas</li>\n</ul>', pista: 'Abrí &lt;ul&gt;, poné tres &lt;li&gt;algo&lt;/li&gt; y cerrá con &lt;/ul&gt;.',
      chequeo: d => { const li = [...d.querySelectorAll('ul li')]; return li.length < 3 ? `Hay ${li.length} &lt;li&gt; dentro de un &lt;ul&gt;. Tienen que ser 3.` : li.some(x => !x.textContent.trim()) ? 'Hay un &lt;li&gt; vacío: escribí algo adentro.' : ''; } },
    { idea: '🔢', t: 'Si el orden importa, como en una receta, usá &lt;ol&gt;: numera solo cada &lt;li&gt;.' },
    { q: '¿Qué lista usás para los pasos de una receta?', o: ['<ul>, con viñetas', '<ol>, numerada', '<p>, un párrafo'], c: 1, e: 'Los pasos tienen orden: <ol> los numera solos.' },
    { idea: '🔗', t: 'Un enlace es &lt;a&gt;. En href va la página a la que lleva cuando le hacés clic.', ej: '<a href="juegos.html">Mis juegos</a>' },
    { codigo: 'Debajo del título, agregá un enlace &lt;a&gt; que lleve a "contacto.html" y diga "Escribime".', necesita: ['h1'], inicial: '<h1>Mi página</h1>\n\n',
      ej: '<a href="fotos.html">Mis fotos</a>', pista: '&lt;a href="contacto.html"&gt;Escribime&lt;/a&gt;',
      chequeo: d => { const a = d.querySelector('a'); return !a ? 'Falta la etiqueta &lt;a&gt;.' : a.getAttribute('href') !== 'contacto.html' ? 'El href tiene que ser "contacto.html", entre comillas.' : !a.textContent.trim() ? 'El enlace no tiene texto: escribí "Escribime" entre &lt;a ...&gt; y &lt;/a&gt;.' : ''; } },
    { idea: '🖼️', t: 'Una imagen es &lt;img&gt;. En src va el archivo y en alt, qué muestra. La img no tiene etiqueta que cierra.', ej: '<img src="perro.jpg" alt="Mi perro jugando en la plaza">' },
    { codigo: 'Debajo de "Mi mascota", agregá una imagen con src="gato.png" y un alt que diga qué hay. Aunque el archivo no exista, el alt se ve.', necesita: ['h2'], inicial: '<h2>Mi mascota</h2>\n\n',
      ej: '<img src="playa.jpg" alt="La playa al atardecer">', pista: '&lt;img src="gato.png" alt="Mi gato durmiendo"&gt;. La img no tiene etiqueta que cierra.',
      chequeo: d => { const i = d.querySelector('img'); return !i ? 'Falta la etiqueta &lt;img&gt;.' : i.getAttribute('src') !== 'gato.png' ? 'El src tiene que ser "gato.png".' : (i.getAttribute('alt') || '').trim().length < 3 ? 'Escribí en alt qué muestra la imagen.' : ''; } },
    { clasificar: '¿Qué etiqueta usás?', grupos: ['🔗 &lt;a&gt;', '🖼️ &lt;img&gt;', '📋 &lt;li&gt;'], items: [['Llevar a otra página', 0], ['Mostrar una foto', 1], ['Un renglón de una lista', 2], ['El logo de tu equipo', 1]] },
    { q: 'Tu imagen no aparece y solo se ve el texto del alt. ¿Qué revisás?', o: ['Que el nombre en src sea igual al del archivo, y que esté en la misma carpeta', 'El color del fondo', 'Que la página tenga título'], c: 0, e: 'Si el nombre no coincide (o falta .png o .jpg), el navegador no la encuentra.' },
  ] },
  { emoji: '🎨', titulo: 'CSS: colores y letras', color: '#d6457a', reflexion: '¿Qué parte de una regla CSS va entre llaves?', pasos: [
    { idea: '👕', t: 'CSS dice cómo se ve. Va dentro de &lt;style&gt;: primero qué elegís, y entre llaves cómo se ve.', ej: 'h1 {\n  color: blue;\n  font-size: 40px;\n}' },
    { idea: '🧩', t: 'Cada línea tiene propiedad, dos puntos, valor y punto y coma. color cambia el color de las letras.', ej: '<style>\n  h1 {\n    color: red;\n  }\n</style>\n<h1>Este título sale rojo</h1>' },
    { codigo: 'El código ya tiene un título &lt;h1&gt;. En la línea vacía entre &lt;style&gt; y &lt;/style&gt;, escribí una regla para que ese título sea de color tomato (un rojo).', necesita: ['h1'], inicial: '<style>\n\n</style>\n<h1>Mi página</h1>\n',
      ej: '<style>\n  h1 { color: green; }\n</style>', pista: 'Entre &lt;style&gt; y &lt;/style&gt;: h1 { color: tomato; }',
      chequeo: d => css(d, 'h1', 'color') === 'rgb(255, 99, 71)' ? '' : 'El h1 todavía no es tomato. Revisá llaves, dos puntos y punto y coma.' },
    { q: '¿Qué está mal en esta regla?', ej: 'h1 { color red; }', o: ['Faltan los dos puntos: color: red;', 'Falta un <p>', 'Nada, está perfecta'], c: 0, e: 'Entre la propiedad y el valor van dos puntos. Sin ellos, CSS ignora la línea.' },
    { idea: '🌈', t: 'background-color pinta el fondo y font-size cambia el tamaño de la letra, en px (puntitos de la pantalla).', ej: 'body {\n  background-color: lightblue;\n}\np {\n  font-size: 30px;\n}', video: { id: '4CC1wxHQQ5k', t: 'Aprendé a manejar los colores en CSS · Kiko Palomares (8:03)' } },
    { idea: '🎨', t: 'Los colores pueden ir por nombre, como gold o lightyellow, o en código, como #ff6600.' },
    { codigo: 'Entre &lt;style&gt; y &lt;/style&gt;, escribí dos reglas: una para body con un background-color claro, y otra para p con font-size de 22px.', necesita: ['h1', 'p'], inicial: '<style>\n\n</style>\n<h1>Mi página</h1>\n<p>Hola, este es mi espacio.</p>\n',
      ej: '<style>\n  body { background-color: pink; }\n  p { font-size: 18px; }\n</style>', pista: 'body { background-color: lightyellow; } y p { font-size: 22px; }',
      chequeo: d => ['rgba(0, 0, 0, 0)', 'rgb(255, 255, 255)', 'transparent'].includes(css(d, 'body', 'backgroundColor')) ? 'El fondo del body sigue blanco. Usá background-color.' : css(d, 'p', 'fontSize') !== '22px' ? 'Los párrafos todavía no tienen 22px. Usá font-size: 22px;' : '' },
    { clasificar: '¿Es CSS o HTML?', grupos: ['👕 CSS', '🦴 HTML'], items: [['color', 0], ['<p>', 1], ['font-size', 0], ['<ul>', 1], ['background-color', 0]] },
    { idea: '🎯', t: 'Con class le ponés nombre a un elemento. En CSS lo elegís con un punto adelante: .especial', ej: '<p class="especial">Hola</p>\n\n.especial { color: purple; }' },
    { q: 'Escribiste .aviso { color: red; } y en HTML pusiste class="aviso" en un párrafo. ¿Qué pasa?', o: ['Toda la página se pone roja', 'Nada, falta algo', 'Solo ese párrafo se pone rojo'], c: 2, e: 'El punto elige solo los elementos que tienen esa class.' },
  ] },
  { emoji: '📦', titulo: 'Cajas y lugar', color: '#e0a100', reflexion: '¿Cuál es la diferencia entre padding y margin?', pasos: [
    { idea: '📦', t: 'Para CSS, todo es una caja: el contenido, el relleno (padding), el borde (border) y el espacio de afuera (margin).', ej: '┌──────── margin: espacio afuera ────────┐\n│  ┏━━━━━━ border: el borde ━━━━━━┓      │\n│  ┃  padding: relleno de adentro ┃      │\n│  ┃      [ el contenido ]        ┃      │\n│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛      │\n└────────────────────────────────────────┘', video: { id: 'YEikl4avKd4', t: 'Margin vs padding en CSS: cuándo usar cada uno · Kiko Palomares (5:42)' } },
    { idea: '🖊️', t: 'El borde se escribe con 3 cosas: grosor, tipo de línea y color. solid es una línea llena.', ej: '.caja {\n  border: 2px solid blue;\n}\n/* 2px = grosor   solid = línea llena   blue = color */' },
    { idea: '📏', t: 'padding y margin llevan una medida en px. border-radius redondea las esquinas: más px, más redondas.', ej: '.caja {\n  border: 2px solid blue;\n  padding: 10px;        /* relleno adentro */\n  margin: 15px;         /* espacio afuera */\n  border-radius: 8px;   /* esquinas redondas */\n}' },
    { codigo: 'Adentro de las llaves de .tarjeta { }, escribí 3 líneas: un border de 3px, un padding de 20px y un border-radius para redondear las esquinas.', necesita: ['.tarjeta'], inicial: '<style>\n.tarjeta {\n  \n}\n</style>\n<p class="tarjeta">Soy una tarjeta</p>\n',
      ej: '.aviso {\n  border: 5px solid orange;\n  padding: 8px;\n  border-radius: 30px;\n}', pista: 'Adentro de .tarjeta { }: border: 3px solid purple; padding: 20px; border-radius: 12px;',
      chequeo: d => css(d, '.tarjeta', 'borderTopWidth') !== '3px' ? 'Falta el borde de 3px: border: 3px solid purple;' : css(d, '.tarjeta', 'paddingTop') !== '20px' ? 'Falta padding: 20px;' : css(d, '.tarjeta', 'borderTopLeftRadius') === '0px' ? 'Faltan las esquinas redondeadas: border-radius: 12px;' : '' },
    { q: 'Querés que el texto no quede pegado al borde de su caja. ¿Qué usás?', o: ['margin', 'padding', 'color'], c: 1, e: 'padding es el relleno de adentro: separa el texto del borde.' },
    { idea: '↔️', t: 'Para poner cajas una al lado de la otra, al contenedor le ponés display: flex. Con gap las separás.', ej: '.fila { display: flex; gap: 10px; }' },
    { codigo: 'Adentro de las llaves de .fila { }, escribí display: flex para poner las 3 cajas en fila, y gap para separarlas.', necesita: ['.fila'], inicial: '<style>\n.fila {\n  \n}\n.fila div { background: gold; padding: 10px; }\n</style>\n<div class="fila">\n  <div>Uno</div>\n  <div>Dos</div>\n  <div>Tres</div>\n</div>\n',
      ej: '.menu {\n  display: flex;\n  gap: 25px;\n}', pista: 'Adentro de .fila { }: display: flex; gap: 10px;',
      chequeo: d => css(d, '.fila', 'display') !== 'flex' ? 'Todavía no están en fila: display: flex;' : ['normal', '0px'].includes(css(d, '.fila', 'columnGap')) ? 'Están pegadas: agregá gap: 10px;' : '' },
    { clasificar: '¿Es espacio de adentro o de afuera?', grupos: ['📥 padding', '📤 margin'], items: [['Separar dos tarjetas entre sí', 1], ['Que el texto no toque el borde', 0], ['Alejar un botón del título', 1], ['Una tarjeta más "gordita" por dentro', 0]] },
    { idea: '📱', t: 'Una buena página se ve bien en el celu. Por eso conviene flex en vez de medidas fijas muy anchas.' },
    { q: '¿Qué hace display: flex en una caja?', o: ['La hace invisible', 'La pinta de rojo', 'Pone sus cajas de adentro una al lado de la otra'], c: 2, e: 'flex acomoda en fila lo que está adentro del contenedor.' },
  ] },
  { emoji: '🧠', titulo: 'JavaScript: primeros comandos', color: '#7b5cff', reflexion: '¿Qué es una variable y para qué sirve?', pasos: [
    { idea: '🧠', t: 'JavaScript da instrucciones. Va dentro de &lt;script&gt; y la compu lo hace en orden, de arriba hacia abajo.' },
    { idea: '🖥️', t: 'console.log escribe en la consola. El texto va entre comillas, adentro de los paréntesis.', ej: '<script>\n  console.log("hola");\n</script>\n\nConsola:  hola' },
    { codigo: 'Cambiá "Hola" por tu nombre, sin borrar las comillas, y mirá la consola.', inicial: '<script>\n  console.log("Hola");\n</script>\n',
      ej: 'console.log("Me gusta el fútbol");', pista: 'Cambiá Hola por tu nombre y dejá las comillas: console.log("Sofi");',
      chequeo: (d, src, con) => huboError(con) ? 'Hay un error: mirá la consola.' : !con.some(l => l.trim() && l.trim() !== 'Hola') ? 'La consola todavía dice "Hola". Poné tu nombre.' : '' },
    { idea: '🔧', t: 'En tu navegador, F12 abre las herramientas del programador. En la pestaña Consola ves tus console.log.', video: { id: 'wqsGyI3jZX8', t: 'Depurar páginas web con la consola del navegador · Khan Academy en Español (2:58)' } },
    { idea: '📦', t: 'Una variable es una caja con nombre que guarda un dato. Se crea con let.', ej: 'let puntos = 10;\nconsole.log(puntos); // muestra 10\n// sin comillas: muestra lo que hay en la caja', video: { id: 'kXMpu07zjN4', t: 'Variables y tipos de datos en JavaScript · TodoCode (11:59)' } },
    { q: '¿Qué muestra la consola?', ej: 'let vidas = 3;\nvidas = vidas - 1;\nconsole.log(vidas);', o: ['3', '2', 'vidas'], c: 1, e: 'Empieza en 3, le restás 1 y queda 2.' },
    { idea: '➕', t: 'Con números hacés cuentas: + suma, - resta, * multiplica y / divide. Podés mostrar el resultado directo.', ej: 'let goles = 3;\nconsole.log(goles + 2); // muestra 5\nconsole.log(goles * 10); // muestra 30' },
    { codigo: 'Cambiá el 0 por tu edad. En la línea vacía de abajo, mostrá en la consola cuántos años vas a tener dentro de 10 años.', inicial: '<script>\n  let edad = 0;\n  \n</script>\n',
      ej: 'let hermanos = 2;\nconsole.log(hermanos + 1);', pista: 'Cambiá el 0 por tu edad y abajo escribí: console.log(edad + 10);',
      chequeo: (d, src, con) => { const n = Number((src.match(/let\s+edad\s*=\s*(\d+)/) || [])[1]); return !n ? 'Poné tu edad en let edad = ...' : huboError(con) ? 'Hay un error: mirá la consola.' : !con.some(l => l.trim() === String(n + 10)) ? `La consola tendría que mostrar ${n + 10}. Usá console.log(edad + 10);` : ''; } },
    { clasificar: '¿Es texto o número?', grupos: ['🔤 Texto', '🔢 Número'], items: [['"hola"', 0], ['42', 1], ['"42"', 0], ['3.5', 1], ['"Juana"', 0]] },
    { idea: '🧵', t: 'El texto va entre comillas. Con + pegás textos: "Hola, " + nombre.' },
    { q: '¿Qué muestra la consola?', ej: 'let nombre = "Sol";\nconsole.log("Hola, " + nombre);', o: ['Hola, Sol', 'Hola, nombre', '"Hola, " + nombre'], c: 0, e: 'nombre sin comillas es la variable, y adentro dice Sol.' },
  ] },
  { emoji: '🔘', titulo: 'Botones que hacen cosas', color: '#ff7a59', reflexion: '¿Qué pasa cuando tocás un botón que tiene addEventListener?', pasos: [
    { idea: '🎯', t: 'Para cambiar algo, JavaScript primero lo busca por su id, con # adelante. textContent cambia su texto.', ej: '<h1 id="titulo">Hola</h1>\n<script>\n  let t = document.querySelector("#titulo");\n  t.textContent = "¡Cambié!";\n</script>' },
    { codigo: 'En la línea vacía entre &lt;script&gt; y &lt;/script&gt;, buscá el párrafo #mensaje con querySelector y cambiá su texto con textContent.', necesita: ['#mensaje'], inicial: '<p id="mensaje">Texto viejo</p>\n<script>\n  \n</script>\n',
      ej: '<p id="saludo">Chau</p>\n<script>\n  let s = document.querySelector("#saludo");\n  s.textContent = "¡Hola de nuevo!";\n</script>', pista: 'let m = document.querySelector("#mensaje");<br>m.textContent = "¡Lo cambié con JavaScript!";',
      chequeo: (d, src, con) => huboError(con) ? 'Hay un error: mirá la consola.' : ['Texto viejo', ''].includes(texto(d, '#mensaje')) ? 'El párrafo todavía dice "Texto viejo".' : '' },
    { idea: '👆', t: 'Un evento es algo que pasa, como un clic. Con addEventListener le decís qué hacer cuando pasa.', ej: '<button id="b">Tocame</button>\n<p id="p">...</p>\n<script>\n  let b = document.querySelector("#b");\n  let p = document.querySelector("#p");\n  b.addEventListener("click", () => {\n    p.textContent = "¡Me tocaste!";\n  });\n</script>', video: { id: 'TzhpyFmSioY', t: 'Eventos con addEventListener · Code Hive (13:22)' } },
    { idea: '🔢', t: 'Para contar, guardás el número en una variable y en cada clic le sumás 1. Después lo mostrás.', ej: 'let vidas = 0;\nvidas = vidas + 1;  // ahora vale 1\ncaja.textContent = vidas;  // la caja muestra 1' },
    { q: '¿Qué es un evento?', o: ['Una etiqueta de HTML', 'Algo que pasa, como un clic o una tecla', 'Un tipo de letra'], c: 1, e: 'Los eventos son cosas que pasan. JavaScript puede escucharlos.' },
    { codigo: 'Contador: donde dice "sumá 1 a clics y mostralo en numero", escribí 2 líneas para que cada clic sume 1 a clics y lo muestre en #numero.', necesita: ['#boton', '#numero'], inicial: '<button id="boton">Sumar</button>\n<p id="numero">0</p>\n<script>\n  let clics = 0;\n  let boton = document.querySelector("#boton");\n  let numero = document.querySelector("#numero");\n  boton.addEventListener("click", () => {\n    // sumá 1 a clics y mostralo en numero\n  });\n</script>\n',
      ej: 'b.addEventListener("click", () => {\n  goles = goles + 1;\n  marcador.textContent = goles;\n});', pista: 'Adentro de las llaves: clics = clics + 1; y en la línea de abajo numero.textContent = clics;',
      chequeo: (d, src, con) => { const b = d.querySelector('#boton'); if (!b) return 'No encuentro el botón #boton.'; b.click(); b.click(); b.click(); return huboError(con) ? 'Hay un error: mirá la consola.' : texto(d, '#numero') === '3' ? '' : `Toqué 3 veces y #numero dice "${texto(d, '#numero')}". Tendría que decir 3.`; } },
    { clasificar: '¿Qué hace cada pedazo?', grupos: ['🔎 Busca', '✏️ Cambia', '👂 Escucha'], items: [['querySelector', 0], ['textContent = ...', 1], ['addEventListener', 2], ['style.color = ...', 1]] },
    { idea: '🎨', t: 'JavaScript también cambia el estilo. document.body es toda la página, y style.background, su fondo.', ej: 'document.body.style.background = "pink";\n// la página entera se pone rosa' },
    { codigo: 'En la línea vacía, hacé que al tocar el botón b el fondo de la página (document.body) se ponga de color gold.', necesita: ['#b'], inicial: '<button id="b">Modo dorado</button>\n<script>\n  let b = document.querySelector("#b");\n  \n</script>\n',
      ej: 'boton.addEventListener("click", () => {\n  document.body.style.background = "lightgreen";\n});', pista: 'b.addEventListener("click", () => {<br>&nbsp;&nbsp;document.body.style.background = "gold";<br>});',
      chequeo: (d, src, con) => { if (css(d, 'body', 'backgroundColor') === 'rgb(255, 215, 0)') return 'El fondo ya es dorado antes del clic: tiene que cambiar recién al tocar el botón.'; d.querySelector('#b')?.click(); return huboError(con) ? 'Hay un error: mirá la consola.' : css(d, 'body', 'backgroundColor') === 'rgb(255, 215, 0)' ? '' : 'Toqué el botón y el fondo no cambió a gold.'; } },
    { idea: '🧰', t: 'Una función es un bloque de código con nombre. La escribís una vez y la usás cuantas veces quieras.', ej: 'function saludar() {\n  console.log("¡Hola!");\n}\nsaludar();\n// Si escribís mal el nombre, la consola dice\n// "saludar is not defined": no existe.' },
    { q: 'Tocás el botón y la consola dice: saludar is not defined. ¿Qué pasa?', ej: 'boton.addEventListener("click", saludar);', o: ['El botón está roto', 'Falta CSS', 'Falta crear la función saludar, o está mal escrita'], c: 2, e: 'Not defined quiere decir que no existe con ese nombre. Revisá cómo la escribiste.' },
  ] },
  { emoji: '🔀', titulo: 'Decisiones con if', color: '#1f9dd6', reflexion: '¿Para qué sirve el else en un if?', pasos: [
    { idea: '🔀', t: 'if decide: si algo es verdad, hace una cosa. Si no, else hace otra.', video: { id: 'XYs3nHEKfeY', t: 'Condicionales if y else en JavaScript · TodoCode (11:06)' }, ej: 'if (puntos >= 10) {\n  console.log("¡Ganaste!");\n} else {\n  console.log("Seguí jugando");\n}' },
    { idea: '⚖️', t: 'Para comparar: &gt; mayor, &lt; menor, &gt;= mayor o igual, === igual y !== distinto. Un solo = guarda.', ej: 'puntos > 10    ¿más que 10?\npuntos >= 10   ¿10 o más?\npuntos === 10  ¿igual a 10?' },
    { q: '¿Qué muestra la consola?', ej: 'let edad = 12;\nif (edad >= 13) {\n  console.log("Podés");\n} else {\n  console.log("Todavía no");\n}', o: ['Podés', 'Todavía no', 'Las dos cosas'], c: 1, e: '12 no es mayor o igual a 13, así que va por el else.' },
    { codigo: 'Donde dice "escribí tu if acá": si nota es 6 o más, que la consola diga "Aprobado"; si no, que diga "A estudiar".', inicial: '<script>\n  let nota = 8;\n  // escribí tu if acá\n  \n</script>\n',
      ej: 'let temperatura = 30;\nif (temperatura >= 25) {\n  console.log("Hace calor");\n} else {\n  console.log("Está fresco");\n}', pista: 'if (nota >= 6) {<br>&nbsp;&nbsp;console.log("Aprobado");<br>} else {<br>&nbsp;&nbsp;console.log("A estudiar");<br>}',
      chequeo: (d, src) => {
        if (!/let\s+nota\s*=\s*\d+/.test(src)) return 'No borres la línea let nota = 8;';
        const con = n => correrJS(src, /let\s+nota\s*=\s*\d+/, 'let nota = ' + n);
        return !con(8).includes('Aprobado') ? 'Con nota 8 tendría que decir "Aprobado".' : !con(6).includes('Aprobado') ? 'Con nota 6 también aprueba: usá >= en vez de >.' : !con(4).includes('A estudiar') || con(4).includes('Aprobado') ? 'Con nota 4 tendría que decir solo "A estudiar". ¿Pusiste el else?' : '';
      } },
    { idea: '⌨️', t: 'Para leer lo que alguien escribió en un input, usás .value. Number() lo convierte en número para comparar.', ej: '<input id="edad">\n<script>\n  let n = Number(document.querySelector("#edad").value);\n  // si escribieron 12, n vale 12\n</script>' },
    { clasificar: 'puntos vale 5. ¿Es verdadero o falso?', grupos: ['✅ Verdadero', '❌ Falso'], items: [['puntos > 3', 0], ['puntos === 5', 0], ['puntos < 2', 1], ['puntos !== 5', 1]] },
    { codigo: 'Juego de adivinar: donde dice "tu if acá", si n es igual a secreto, que #res diga "¡Ganaste!"; si no, "Probá de nuevo".', necesita: ['#num', '#probar', '#res'], inicial: '<input id="num" type="number">\n<button id="probar">Probar</button>\n<p id="res"></p>\n<script>\n  let secreto = 7;\n  document.querySelector("#probar").addEventListener("click", () => {\n    let n = Number(document.querySelector("#num").value);\n    let res = document.querySelector("#res");\n    // tu if acá\n  });\n</script>\n',
      ej: 'if (n === 10) {\n  res.textContent = "¡Diez!";\n} else {\n  res.textContent = "No es diez";\n}', pista: 'if (n === secreto) { res.textContent = "¡Ganaste!"; } else { res.textContent = "Probá de nuevo"; }',
      chequeo: (d, src, con) => {
        const num = d.querySelector('#num'), b = d.querySelector('#probar');
        if (!num || !b) return 'No borres el input #num ni el botón #probar.';
        num.value = '3'; b.click();
        if (!/prob/i.test(texto(d, '#res')) || /gan/i.test(texto(d, '#res'))) return 'Escribí 3 y toqué Probar: tendría que decir "Probá de nuevo".';
        num.value = '7'; b.click();
        return huboError(con) ? 'Hay un error: mirá la consola.' : /gan/i.test(texto(d, '#res')) ? '' : 'Escribí 7 y toqué Probar: tendría que decir "¡Ganaste!".';
      } },
    { q: 'Escribiste if (vidas = 0). ¿Qué está mal?', o: ['Falta un punto y coma', 'Nada, está perfecto', 'Para comparar va ===, no un solo ='], c: 2, e: 'Un solo = guarda un valor. Para preguntar "¿es igual?" va ===.' },
  ] },
  { emoji: '🔁', titulo: 'Bucles y listas', color: '#c2185b', reflexion: '¿Por qué un bucle te ahorra escribir código?', pasos: [
    { idea: '🔁', t: 'Un bucle repite código. for cuenta: arranca en un número, suma 1 en cada vuelta (i++) y para al final.', ej: 'for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}\n// i empieza en 1, sigue mientras i <= 3, e i++ le suma 1\n// muestra 1, 2 y 3', video: { id: '7bO5wlqeeEI', t: 'Bucles for: qué son y cómo funcionan · Retro (3:03)' } },
    { q: '¿Cuántas veces dice hola?', ej: 'for (let i = 1; i <= 3; i++) {\n  console.log("hola");\n}', o: ['1', '3', '4'], c: 1, e: 'i vale 1, 2 y 3. Con 4 la condición ya no se cumple.' },
    { codigo: 'Adentro de las llaves del for, mostrá en la consola 7 * i. Así sale la tabla del 7: 7, 14, 21... hasta 70.', inicial: '<script>\n  for (let i = 1; i <= 10; i++) {\n    \n  }\n</script>\n',
      ej: 'for (let i = 1; i <= 5; i++) {\n  console.log(2 * i);\n}\n// muestra 2, 4, 6, 8 y 10', pista: 'Adentro del for: console.log(7 * i);',
      chequeo: (d, src, con) => { const nums = (con.join(' ').match(/\d+/g) || []).map(Number); const falta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(k => 7 * k).find(x => !nums.includes(x)); return huboError(con) ? 'Hay un error: mirá la consola.' : falta ? `Falta el ${falta} en la consola.` : ''; } },
    { idea: '📚', t: 'Un array es una lista de datos entre corchetes. Se cuenta desde 0: el primero es juegos[0].', ej: 'let juegos = ["Minecraft", "Fútbol", "Ajedrez"];\nconsole.log(juegos[0]);     // Minecraft\nconsole.log(juegos.length); // 3' },
    { clasificar: 'let frutas = ["pera", "uva", "kiwi"]. ¿Qué da cada uno?', grupos: ['🍐 "pera"', '🍇 "uva"', '🔢 3'], items: [['frutas[0]', 0], ['frutas[1]', 1], ['frutas.length', 2]] },
    { idea: '🔂', t: 'for (let x of lista) recorre un array: en cada vuelta, x vale el siguiente elemento.', ej: 'let colores = ["rojo", "verde", "azul"];\nfor (let c of colores) {\n  console.log(c);\n}\n// muestra rojo, verde y azul' },
    { idea: '🏗️', t: 'document.createElement("li") crea un elemento nuevo y lista.append(li) lo pone en la página.', ej: 'let li = document.createElement("li");\nli.textContent = "Pizza";\nlista.append(li);\n// la lista ahora tiene un renglón que dice Pizza' },
    { codigo: 'Adentro del for, donde dice "creá un li...", escribí 3 líneas para crear un &lt;li&gt; con el nombre de cada amigo y agregarlo a #lista.', necesita: ['#lista'], inicial: '<ul id="lista"></ul>\n<script>\n  let amigos = ["Lu", "Tomi", "Sofi", "Benja"];\n  let lista = document.querySelector("#lista");\n  for (let a of amigos) {\n    // creá un li con el nombre y agregalo a la lista\n  }\n</script>\n',
      ej: 'for (let f of ["pera", "uva"]) {\n  let li = document.createElement("li");\n  li.textContent = f;\n  frutas.append(li);\n}', pista: 'let li = document.createElement("li");<br>li.textContent = a;<br>lista.append(li);',
      chequeo: (d, src, con) => { const li = [...d.querySelectorAll('#lista li')].map(x => x.textContent.trim()); return huboError(con) ? 'Hay un error: mirá la consola.' : li.length !== 4 ? `La lista tiene ${li.length} &lt;li&gt;. Tendría que tener 4, uno por amigo.` : li.join() !== 'Lu,Tomi,Sofi,Benja' ? 'Cada &lt;li&gt; tiene que tener el nombre: li.textContent = a;' : ''; } },
    { q: 'Tu bucle nunca termina y la página se cuelga. ¿Qué pasó?', o: ['La condición nunca deja de cumplirse', 'Faltó CSS', 'El array tiene nombres largos'], c: 0, e: 'Si la condición siempre es verdad, repite para siempre. Revisá que i cambie.' },
  ] },
  { emoji: '🐞', titulo: 'Errores y cómo arreglarlos', color: '#d64545', reflexion: '¿Qué hacés primero cuando tu programa no anda?', pasos: [
    { idea: '🐞', t: 'Todos los programadores se equivocan, todos los días. Encontrar y arreglar errores se llama depurar.' },
    { idea: '🔎', t: 'Cuando algo falla, mirá la consola: dice qué pasó y en qué línea. Empezá por ahí.', ej: 'Línea 3: No conozco "Puntos".\n→ en la línea 3 escribiste Puntos con mayúscula,\n  pero la variable se llama puntos.' },
    { codigo: 'Este código tiene 2 errores. Leé la consola, arreglalos y hacé que la consola diga "Listo".', inicial: '<script>\n  let mensaje = "Listo";\n  consol.log(Mensaje);\n</script>\n',
      ej: 'Con error:   consol.log(Nombre);\nArreglado:   console.log(nombre);', pista: 'Uno: console se escribe con e al final. Dos: la variable se llama mensaje, con minúscula.',
      chequeo: (d, src, con) => huboError(con) ? 'Todavía hay un error: leé qué dice la consola.' : con.some(l => l.trim() === 'Listo') ? '' : 'La consola tiene que mostrar Listo.' },
    { clasificar: '¿Qué tipo de error es?', grupos: ['✏️ Mal escrito', '🔣 Falta un símbolo'], items: [['consol.log("hola")', 0], ['console.log("hola"', 1], ['documento.querySelector("p")', 0], ['if (x > 3 {', 1]] },
    { idea: '🧪', t: 'Si no hay error rojo pero no anda, revisá que cada querySelector busque el id correcto.', ej: '<button id="jugar">Jugar</button>\nlet b = document.querySelector("#jugra");  ← mal escrito\nlet b = document.querySelector("#jugar");  ← bien' },
    { codigo: 'El botón debería mostrar "¡Hola!" en #saludo, pero no anda. No hay errores rojos: buscá qué está mal y cambiá solo eso.', necesita: ['#saludar', '#saludo'], inicial: '<button id="saludar">Saludar</button>\n<p id="saludo"></p>\n<script>\n  let boton = document.querySelector("#saludo");\n  let p = document.querySelector("#saludo");\n  boton.addEventListener("click", () => {\n    p.textContent = "¡Hola!";\n  });\n</script>\n',
      ej: 'Para encontrarlo, compará cada id:\n<button id="saludar">  ←  querySelector("#saludar")\n<p id="saludo">        ←  querySelector("#saludo")', pista: 'Mirá qué busca la variable boton. ¿Es el id del botón o el del párrafo?',
      chequeo: (d, src, con) => { if (texto(d, '#saludo')) return 'El saludo tiene que aparecer recién al tocar el botón.'; d.querySelector('#saludar')?.click(); return texto(d, '#saludo') === '¡Hola!' ? '' : 'Toqué el botón Saludar y #saludo sigue vacío.'; } },
    { q: 'La consola dice: Línea 4: No conozco "puntaje". ¿Qué revisás primero?', o: ['Borrás todo y empezás de cero', 'Cómo escribiste puntaje en la línea 4 y dónde lo creaste', 'Cambiás el color del fondo'], c: 1, e: 'La consola te dice la línea. Ahí suele haber una letra distinta o una variable sin crear.' },
    { idea: '🦆', t: 'El truco del patito: explicá tu código en voz alta, línea por línea, a alguien o a un muñeco.' },
    { q: '¿Cuál es la mejor forma de arreglar errores?', o: ['Cambiar de a una cosa y probar cada vez', 'Cambiar 10 cosas juntas', 'Rendirse'], c: 0, e: 'Si cambiás de a una, sabés cuál fue la que lo arregló.' },
  ] },
  { emoji: '🏆', titulo: 'Proyecto final: tu página', color: '#00897b', reflexion: '¿Qué parte te costó más y cómo la resolviste?', pasos: [
    { idea: '🏆', t: 'Llegó el proyecto final: tu propia página, en tu compu, hecha con un editor de texto de verdad.' },
    { idea: '🗺️', t: 'Primero el plan: elegí un tema, como tus hobbies, tu equipo o un juego, y dibujalo en papel.' },
    { q: 'Vas a hacer tu página. ¿Qué datos NO ponés?', o: ['Tus juegos favoritos', 'Un dibujo tuyo', 'Tu dirección, tu escuela o tu teléfono'], c: 2, e: 'Tus datos personales no van en internet. Tus gustos y tus dibujos, sí.' },
    { idea: '📄', t: 'Una página completa tiene &lt;!DOCTYPE html&gt;, &lt;head&gt; con datos y estilos, y &lt;body&gt; con lo que se ve.', ej: '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Mi página</title>\n  <style> /* tu CSS */ </style>\n</head>\n<body>\n  <h1>Lo que se ve</h1>\n  <script> /* tu JavaScript */ </script>\n</body>\n</html>' },
    { codigo: 'Calentamiento: completá la plantilla. Ya tiene el &lt;h1&gt;: sumale una lista en el body, una regla en &lt;style&gt; y un botón que haga algo con &lt;script&gt;. Después bajalo con 💾 Descargar.', necesita: ['h1'], inicial: '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <title>Mi página</title>\n  <style>\n    \n  </style>\n</head>\n<body>\n  <h1>Mi página</h1>\n  \n  <script>\n    \n  </script>\n</body>\n</html>\n',
      ej: 'Un poco de cada misión:\n<ul><li>...</li></ul>                     (misión 4)\nh1 { color: tomato; }                     (misión 5)\n<button id="b">...</button>               (misión 8)\nb.addEventListener("click", () => {...}); (misión 8)', pista: 'Usá lo que aprendiste: &lt;ul&gt; con &lt;li&gt;, una regla como h1 { color: tomato; } y un botón con addEventListener.',
      chequeo: (d, src, con) => {
        if (!texto(d, 'h1')) return 'Falta un &lt;h1&gt; con texto.';
        if (!d.querySelector('ul li, ol li')) return 'Falta una lista con al menos un &lt;li&gt;.';
        if (![...d.styleSheets].some(s => s.cssRules.length)) return 'Falta al menos una regla de CSS dentro de &lt;style&gt;.';
        const b = d.querySelector('button');
        if (!b) return 'Falta un &lt;button&gt;.';
        const antes = d.body.innerHTML + d.body.getAttribute('style') + con.length;
        b.click();
        return huboError(con) ? 'Hay un error: mirá la consola.' : antes === d.body.innerHTML + d.body.getAttribute('style') + con.length ? 'Toqué el botón y no pasó nada. Hacé que cambie algo.' : '';
      } },
    { tarea: 'Ahora en tu compu, con tu editor de texto:', pasos: [
      'Mové el <code>index.html</code> que descargaste a tu carpeta <code>mi-web</code> y abrilo con tu editor.',
      'Agregá al menos 3 partes: quién sos (sin datos personales), tus gustos y algo que sepas hacer.',
      'Sumá una imagen o un dibujo tuyo: copiá el archivo a <code>mi-web</code> y usá <code>&lt;img src="..." alt="..."&gt;</code>.',
      'Dale estilo con CSS: colores, letras y cajas con padding.',
      'Agregá algo con JavaScript: un botón, un contador o un juego de adivinar.',
      'Guardá con Ctrl+S, recargá con F5 y abrí la consola con F12: no tiene que haber errores rojos.',
    ] },
    { clasificar: 'Revisá tu página antes de mostrarla. ¿Está bien o hay que arreglar?', grupos: ['✅ Está bien', '🔧 Arreglar'], items: [['Cada etiqueta que abre, cierra', 0], ['La consola muestra errores rojos', 1], ['Las imágenes tienen alt', 0], ['Aparece el nombre de tu escuela', 1]] },
    { idea: '🌍', t: '¿Querés publicarla en internet? Hacelo siempre con un adulto: hay sitios gratis, pero piden crear una cuenta.' },
    { q: 'Terminaste tu página. ¿Qué te ayuda más a seguir aprendiendo?', o: ['Hacer otra página o un juego, cada vez un poco más difícil', 'No programar más', 'Copiar páginas sin entenderlas'], c: 0, e: 'Se aprende programando: cada proyecto nuevo te enseña algo.' },
  ] },
  ],
  ayuda: { correrJS },
  };
})();
