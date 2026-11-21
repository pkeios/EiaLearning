// Temario del curso "Desarrollo web desde cero". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js web y node tools/metodologia.js web
window.TEMARIO = [
{
  id: "web",
  icono: "🌐",
  titulo: "Cómo funciona la web",
  nivel: "Básico",
  objetivos: [
    "Explicar qué pasa entre que escribís una dirección y ves la página",
    "Distinguir qué hace el HTML, el CSS y el JavaScript",
    "Preparar tu lugar de trabajo: un editor de código y las herramientas del navegador",
  ],
  lecciones: [
    { titulo: "Del navegador al servidor", html: `
      <p class="idea">Cuando abrís una página, tu <strong>navegador</strong> le pide archivos a un <strong>servidor</strong>, una computadora que está siempre prendida en algún lugar del mundo. El servidor se los manda y el navegador los dibuja en tu pantalla.</p>
      <p>En todo el curso acompañamos a <strong>Sofi</strong>, que hace tortas por encargo en Rosario y quiere armar ella misma la página de su emprendimiento: con sus tortas, precios y un formulario de pedidos.</p>
      <pre><code>1. Escribís: https://tortasdesofi.com.ar
2. El navegador busca en qué servidor está esa dirección.
3. Le pide el archivo index.html.
4. El servidor se lo manda.
5. El navegador lee el HTML, pide también el CSS, el JavaScript
   y las imágenes, y arma la página.</code></pre>
      <table>
        <tr><th>Palabra</th><th>Qué es</th></tr>
        <tr><td>Navegador</td><td>El programa con el que ves páginas: Chrome, Edge, Firefox, Safari</td></tr>
        <tr><td>Servidor</td><td>La computadora que guarda y manda los archivos de la página</td></tr>
        <tr><td>URL o dirección</td><td>El nombre de la página, como https://tortasdesofi.com.ar</td></tr>
        <tr><td>HTTPS</td><td>La forma segura de pedir y mandar los archivos: viajan cifrados</td></tr>
      </table>
      <p><strong>Una página web son archivos de texto.</strong> No hace falta ningún programa especial para crearlos: se escriben con un editor y se abren con el navegador. Eso es lo que vas a hacer en este curso.</p>
      <p>Por ejemplo, Sofi pensaba que para tener una página había que pagarle a una empresa. Cuando entendió que eran archivos de texto, armó la primera versión en una tarde, en su propia computadora.</p>` },
    { titulo: "HTML, CSS y JavaScript", video: {"id":"EvKm8yhM7V8","t":"HTML en 5 minutos · Dot Dager (6:23)"}, html: `
      <p class="idea">Toda página web se arma con tres lenguajes, cada uno con su trabajo: el <strong>HTML</strong> dice qué hay, el <strong>CSS</strong> dice cómo se ve y el <strong>JavaScript</strong> dice qué hace.</p>
      <table>
        <tr><th>Lenguaje</th><th>Su trabajo</th><th>Parecido a una casa</th></tr>
        <tr><td>HTML</td><td>El contenido y su estructura: títulos, textos, imágenes, botones</td><td>Las paredes y los ambientes</td></tr>
        <tr><td>CSS</td><td>El aspecto: colores, letras, tamaños, ubicación</td><td>La pintura y los muebles</td></tr>
        <tr><td>JavaScript</td><td>El comportamiento: lo que pasa al tocar algo</td><td>La electricidad: prender una luz</td></tr>
      </table>
      <p>Mirá los tres juntos en un ejemplo chiquito. Tocá <strong>Probar este código</strong>, cambiá el texto o el color y mirá el resultado:</p>
      <pre class="web"><code>&lt;h1&gt;Tortas de Sofi&lt;/h1&gt;
&lt;p&gt;Tortas por encargo en Rosario.&lt;/p&gt;
&lt;button onclick="alert('¡Gracias por tu pedido!')"&gt;Pedir&lt;/button&gt;

&lt;style&gt;
  h1 { color: darkmagenta; }
&lt;/style&gt;</code></pre>
      <p>En el ejemplo, las líneas con <strong>&lt;h1&gt;</strong>, <strong>&lt;p&gt;</strong> y <strong>&lt;button&gt;</strong> son HTML; lo de adentro de <strong>&lt;style&gt;</strong> es CSS; y lo que pasa al tocar el botón (onclick) es JavaScript.</p>
      <p><strong>No son lenguajes difíciles para empezar:</strong> el HTML y el CSS se aprenden en pocas semanas. JavaScript lleva más, porque es un lenguaje de programación de verdad.</p>
      <p>Por ejemplo, Sofi cambió "darkmagenta" por "chocolate" en el laboratorio y vio enseguida su título color chocolate: así entendió qué parte manejaba el color.</p>` },
    { titulo: "Tu lugar de trabajo", html: `
      <p class="idea">Para trabajar necesitás dos cosas gratis: un <strong>editor de código</strong> para escribir los archivos y las <strong>herramientas para desarrolladores</strong> del navegador para revisarlos.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th></tr>
        <tr><td>Visual Studio Code (VS Code)</td><td>Un editor de código gratis: colorea el código y te ayuda a escribirlo</td></tr>
        <tr><td>Un navegador actualizado</td><td>Para abrir y probar tu página</td></tr>
        <tr><td>Herramientas para desarrolladores (F12)</td><td>Ver el HTML y el CSS de cualquier página y encontrar errores</td></tr>
      </table>
      <pre><code>Tu primera página en la computadora:
1. Creá una carpeta llamada "mi-pagina".
2. Abrila con VS Code (Archivo → Abrir carpeta).
3. Creá un archivo llamado index.html.
4. Escribí: &lt;h1&gt;Hola, mundo&lt;/h1&gt; y guardá.
5. Hacé doble clic en index.html: se abre en el navegador.
6. Cada vez que cambies algo: guardá y actualizá el navegador (F5).</code></pre>
      <p><strong>El nombre index.html</strong> es especial: es la página que los servidores muestran primero cuando alguien entra a una carpeta. Por eso la página principal casi siempre se llama así.</p>
      <p><strong>F12 en cualquier página</strong> abre las herramientas para desarrolladores. En la pestaña Elementos ves el HTML; si tocás un elemento, ves su CSS a la derecha. Es la mejor forma de aprender mirando páginas reales.</p>
      <p>Por ejemplo, Sofi abrió con F12 la página de una pastelería que le gustaba, tocó el título y vio qué letra y qué color usaba.</p>` },
  ],
  practica: [
    "Instalá VS Code, creá la carpeta mi-pagina con un index.html que diga tu nombre en un h1 y anotá cuántos minutos tardaste en verlo en el navegador.",
    "Abrí con F12 tres páginas que uses seguido y anotá qué etiqueta tiene el título principal de cada una.",
    "En el laboratorio de la lección, cambiá el color, el título y el mensaje del botón, y anotá las tres partes que cambiaste y a qué lenguaje pertenecía cada una.",
  ],
  recursos: [
    { t: "MDN Web Docs: aprender desarrollo web (en español)", url: "https://developer.mozilla.org/es/docs/Learn_web_development" },
    { t: "Visual Studio Code: documentación del editor (en inglés)", url: "https://code.visualstudio.com/docs" },
  ],
  quiz: [
    { q: "Escribís una dirección y aparece la página. ¿Quién le manda los archivos a tu navegador?", opciones: ["Tu teclado","El monitor","Un servidor","Otro navegador"], correcta: 2, explicacion: "El servidor guarda y manda los archivos. Otro navegador tienta, pero el navegador pide, no manda." },
    { q: "Querés cambiar el color de un título. ¿Qué lenguaje usás?", opciones: ["CSS","HTML","JavaScript","HTTPS"], correcta: 0, explicacion: "El aspecto es trabajo del CSS. HTML tienta porque el título está ahí, pero el HTML dice qué hay, no cómo se ve." },
    { q: "Querés que al tocar un botón aparezca un mensaje. ¿Qué lenguaje lo hace?", opciones: ["CSS","HTML solo","La URL","JavaScript"], correcta: 3, explicacion: "El comportamiento es de JavaScript. HTML tienta porque el botón es HTML, pero lo que pasa al tocarlo es JavaScript." },
    { q: "Querés agregar un párrafo de texto a tu página. ¿Qué lenguaje usás?", opciones: ["CSS","HTML","JavaScript","Ninguno"], correcta: 1, explicacion: "El contenido es HTML. CSS tienta, pero solo cambia cómo se ve el párrafo." },
    { q: "Ves que una página empieza con https. ¿Qué te dice?", opciones: ["Que la página es gratis","Que es una página del gobierno","Que los archivos viajan cifrados, de forma segura","Que no tiene imágenes"], correcta: 2, explicacion: "La S es de seguro. Que es gratis tienta, pero no tiene que ver." },
    { q: "Si una página web son archivos de texto, ¿con qué los escribís?", opciones: ["Con un editor de código, como VS Code","Solo con programas pagos","Con una cámara","No se pueden escribir"], correcta: 0, explicacion: "Un editor gratis alcanza. Los programas pagos tientan, pero no hacen falta." },
    { q: "Querés que tu página principal se abra primero al entrar a la carpeta. ¿Cómo la llamás?", opciones: ["principal.txt","pagina.doc","home.jpg","index.html"], correcta: 3, explicacion: "Los servidores buscan index.html primero. \"principal\" tienta en castellano, pero el nombre especial es index." },
    { q: "Cambiaste tu archivo y el navegador sigue mostrando lo viejo. ¿Qué hacés?", opciones: ["Reinstalás el navegador","Guardás el archivo y actualizás el navegador con F5","Borrás la carpeta","Esperás una hora"], correcta: 1, explicacion: "Hay que guardar y recargar. Reinstalar tienta, pero no hace falta." },
    { q: "Querés ver qué color usa el título de una página que te gusta. ¿Qué tocás?", opciones: ["F5","Ctrl + P","F12, para abrir las herramientas para desarrolladores","Nada, no se puede ver"], correcta: 2, explicacion: "F12 muestra el HTML y el CSS. F5 tienta porque también es una tecla de función, pero recarga." },
    { q: "Tenés un archivo index.html en tu computadora. ¿Cómo lo ves como página?", opciones: ["Lo abrís con el navegador (por ejemplo, con doble clic)","Lo abrís con la calculadora","Lo imprimís","Lo mandás por mail a un servidor"], correcta: 0, explicacion: "El navegador lee el HTML aunque esté en tu compu. El servidor tienta, pero para probar no hace falta." },
    { q: "En el ejemplo de la lección, lo que está adentro de style es...", opciones: ["HTML","JavaScript","Texto que se ve en la página","CSS"], correcta: 3, explicacion: "La etiqueta style guarda CSS. HTML tienta porque está en el mismo archivo, pero adentro de style es CSS." },
    { q: "Si te comparan la página con una casa, ¿qué sería el CSS?", opciones: ["Las paredes","La pintura y los muebles","La electricidad","El terreno"], correcta: 1, explicacion: "El CSS es cómo se ve. Las paredes tientan, pero esas son el HTML." },
  ],
},
{
  id: "html",
  icono: "📄",
  titulo: "HTML: el contenido",
  nivel: "Básico",
  objetivos: [
    "Armar la estructura base de una página con doctype, head y body",
    "Usar títulos, párrafos, listas, enlaces e imágenes con texto alternativo",
    "Encontrar y corregir errores comunes de HTML",
  ],
  lecciones: [
    { titulo: "Etiquetas y la estructura base", html: `
      <p class="idea">El HTML se escribe con <strong>etiquetas</strong>: palabras entre &lt; y &gt; que marcan qué es cada cosa. Casi todas se abren y se cierran, y lo que va en el medio es el contenido.</p>
      <pre><code>&lt;p&gt;Este es un párrafo.&lt;/p&gt;
 │                      │
 etiqueta que abre      etiqueta que cierra (lleva /)</code></pre>
      <p>Toda página tiene la misma <strong>estructura base</strong>. Probala y cambiá el título y el texto:</p>
      <pre class="web"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Tortas de Sofi&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Tortas de Sofi&lt;/h1&gt;
    &lt;p&gt;Hago tortas por encargo para cumpleaños y eventos.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <table>
        <tr><th>Parte</th><th>Para qué</th></tr>
        <tr><td>&lt;!DOCTYPE html&gt;</td><td>Le avisa al navegador que es HTML moderno</td></tr>
        <tr><td>&lt;html lang="es"&gt;</td><td>Envuelve todo y dice el idioma (sirve a los lectores de pantalla)</td></tr>
        <tr><td>&lt;head&gt;</td><td>Información que no se ve en la página: el título de la pestaña, la codificación</td></tr>
        <tr><td>&lt;meta charset="utf-8"&gt;</td><td>Para que se vean bien la ñ y los acentos</td></tr>
        <tr><td>&lt;body&gt;</td><td>Todo lo que se ve</td></tr>
      </table>
      <p><strong>La sangría</strong> (los espacios al principio de cada línea) no cambia nada en la página, pero hace que el código se lea: lo de adentro va un poco más a la derecha.</p>
      <p>Por ejemplo, a Sofi le aparecían signos raros en lugar de las tildes. Le faltaba &lt;meta charset="utf-8"&gt; en el head: lo agregó y se arreglaron.</p>` },
    { titulo: "Títulos, textos y listas", html: `
      <p class="idea">El HTML marca qué es cada texto: un <strong>título</strong>, un <strong>párrafo</strong>, una <strong>lista</strong>. No lo elijas por cómo se ve (eso lo decide el CSS), sino por lo que es.</p>
      <table>
        <tr><th>Etiqueta</th><th>Qué es</th></tr>
        <tr><td>&lt;h1&gt; a &lt;h6&gt;</td><td>Títulos, del más importante (h1) al menos importante (h6)</td></tr>
        <tr><td>&lt;p&gt;</td><td>Un párrafo</td></tr>
        <tr><td>&lt;strong&gt;</td><td>Texto importante (se ve en negrita)</td></tr>
        <tr><td>&lt;ul&gt; y &lt;li&gt;</td><td>Lista con viñetas; cada ítem es un li</td></tr>
        <tr><td>&lt;ol&gt; y &lt;li&gt;</td><td>Lista numerada, para pasos en orden</td></tr>
      </table>
      <pre class="web"><code>&lt;h1&gt;Tortas de Sofi&lt;/h1&gt;
&lt;h2&gt;Sabores&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Chocolate con dulce de leche&lt;/li&gt;
  &lt;li&gt;Frutilla con crema&lt;/li&gt;
  &lt;li&gt;Limón&lt;/li&gt;
&lt;/ul&gt;
&lt;h2&gt;Cómo pedir&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Elegí el sabor.&lt;/li&gt;
  &lt;li&gt;Escribime con &lt;strong&gt;una semana&lt;/strong&gt; de anticipación.&lt;/li&gt;
  &lt;li&gt;Retirá tu torta el día acordado.&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      <p><strong>Un solo h1 por página</strong>, con el título principal. Después h2 para las secciones y h3 para lo que va adentro. Los buscadores y los lectores de pantalla usan esos niveles para entender la página.</p>
      <p><strong>Etiquetas adentro de etiquetas:</strong> un li va adentro de un ul o un ol; un strong puede ir adentro de un p o de un li. Se cierran en el orden contrario al que se abrieron.</p>
      <p>Por ejemplo, Sofi usaba h3 para todo porque le gustaba el tamaño. Lo cambió a h1 para el título y h2 para las secciones, y el tamaño lo manejó después con CSS.</p>` },
    { titulo: "Enlaces e imágenes", html: `
      <p class="idea">Un <strong>enlace</strong> (&lt;a&gt;) lleva a otra página y una <strong>imagen</strong> (&lt;img&gt;) muestra una foto. Los dos necesitan <strong>atributos</strong>: datos extra que se escriben adentro de la etiqueta que abre.</p>
      <pre class="web"><code>&lt;p&gt;
  Mirá mis tortas en
  &lt;a href="https://www.instagram.com/" target="_blank"&gt;Instagram&lt;/a&gt;.
&lt;/p&gt;

&lt;img src="https://picsum.photos/seed/torta/300/200"
     alt="Torta de chocolate con frutillas arriba"
     width="300"&gt;</code></pre>
      <table>
        <tr><th>Atributo</th><th>Para qué</th></tr>
        <tr><td>href (en a)</td><td>La dirección a la que lleva el enlace</td></tr>
        <tr><td>target="_blank" (en a)</td><td>Que se abra en una pestaña nueva</td></tr>
        <tr><td>src (en img)</td><td>La dirección o el nombre del archivo de la imagen</td></tr>
        <tr><td>alt (en img)</td><td>Una descripción de la imagen, para quien no la puede ver</td></tr>
      </table>
      <p><strong>El alt no es opcional.</strong> Las personas ciegas usan lectores de pantalla que leen el alt en voz alta, y también se muestra si la imagen no carga. Describí lo que se ve: "Torta de chocolate con frutillas arriba", no "imagen1".</p>
      <p><strong>Imágenes propias:</strong> si la foto está en tu carpeta, el src es su nombre: src="torta.jpg". Ojo con las mayúsculas: en muchos servidores Torta.jpg y torta.jpg son archivos distintos.</p>
      <p>La imagen del ejemplo es de un sitio de fotos de prueba; para tu página usá tus propias fotos.</p>
      <p>Por ejemplo, la foto de la torta de Sofi no aparecía en internet aunque en su compu sí. El archivo se llamaba Torta.JPG y en el código decía torta.jpg: lo renombró y apareció.</p>` },
  ],
  practica: [
    "Armá tu index.html con la estructura base, un h1, dos h2 y una lista, y anotá cuántas etiquetas distintas usaste.",
    "Agregá 2 imágenes propias con un alt que las describa y pedile a alguien que lea solo los alt: anotá si entendió qué mostraban.",
    "Agregá 3 enlaces (uno que abra en pestaña nueva) y probalos todos: anotá cuántos funcionaron a la primera.",
  ],
  recursos: [
    { t: "MDN Web Docs: referencia de HTML (en español)", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { t: "web.dev de Google: curso de HTML", url: "https://web.dev/learn/html?hl=es" },
    { t: "MDN Web Docs: accesibilidad (en español)", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Accessibility" },
  ],
  quiz: [
    { q: "Tu página muestra signos raros en vez de la ñ y las tildes. ¿Qué te falta?", opciones: ["Un h1","Una imagen","<meta charset=\"utf-8\"> en el head","Cerrar el body dos veces"], correcta: 2, explicacion: "El charset dice cómo leer las letras. El h1 tienta porque es lo primero que ves, pero no cambia la codificación." },
    { q: "Querés poner el texto de la pestaña del navegador. ¿Qué etiqueta usás?", opciones: ["<title>, adentro del head","<h1>","<p>","<tab>"], correcta: 0, explicacion: "El title va en el head y se ve en la pestaña. El h1 tienta, pero se ve en la página." },
    { q: "Querés poner algo que se vea en la página. ¿Adentro de qué etiqueta va?", opciones: ["<head>","<title>","<meta>","<body>"], correcta: 3, explicacion: "Lo visible va en el body. El head tienta porque está arriba, pero lo que va ahí no se ve." },
    { q: "Tu página tiene varios títulos principales con h1. ¿Qué conviene?", opciones: ["Todo con h1","Un solo h1 y h2 para las secciones","Todo con h6","Sin títulos"], correcta: 1, explicacion: "Un h1 por página ordena la estructura. Todo h1 tienta para que se vea grande, pero el tamaño lo maneja el CSS." },
    { q: "Usás h3 para un título solo porque te gusta su tamaño. ¿Qué tendrías que hacer?", opciones: ["Está bien así","Usar siempre h3","Elegir la etiqueta por lo que es y manejar el tamaño con CSS","Poner todo en strong"], correcta: 2, explicacion: "El HTML dice qué es; el CSS cómo se ve. \"Está bien así\" tienta, pero confunde a buscadores y lectores de pantalla." },
    { q: "Querés escribir los pasos para hacer un pedido, en orden. ¿Qué lista usás?", opciones: ["<ol>, la lista numerada","<ul>, con viñetas","<p> con guiones","<h2>"], correcta: 0, explicacion: "Para pasos en orden, ol. La ul tienta, pero no marca el orden." },
    { q: "Querés que un enlace se abra en una pestaña nueva. ¿Qué atributo agregás?", opciones: ["alt=\"_blank\"","src=\"_blank\"","new=\"true\"","target=\"_blank\""], correcta: 3, explicacion: "target dice dónde se abre. alt tienta porque también es un atributo, pero es para imágenes." },
    { q: "Escribís un enlace. ¿Dónde va la dirección a la que lleva?", opciones: ["En el atributo alt","En el atributo href","Entre las etiquetas, sin atributo","En el title"], correcta: 1, explicacion: "href guarda la dirección. Entre las etiquetas tienta, pero eso es el texto que se ve." },
    { q: "Ponés una foto con alt=\"imagen1\". ¿Qué problema tiene?", opciones: ["Ninguno","Hace la foto más pesada","No describe la foto: quien usa lector de pantalla no sabe qué muestra","La foto no se ve"], correcta: 2, explicacion: "El alt tiene que describir. \"Ninguno\" tienta porque la foto se ve igual, pero no para todos." },
    { q: "Tu foto no aparece en internet pero en tu compu sí. El archivo se llama Torta.JPG y el código dice torta.jpg. ¿Qué pasa?", opciones: ["En muchos servidores las mayúsculas importan: son nombres distintos","Las fotos JPG no se ven en internet","Falta el alt","Falta un h1"], correcta: 0, explicacion: "Los nombres tienen que coincidir exactamente. El alt tienta, pero no hace aparecer la foto." },
    { q: "¿En qué orden se cierran las etiquetas que van una adentro de otra?", opciones: ["En el mismo orden","No hace falta cerrarlas","Todas al final de la página","En el orden contrario al que se abrieron"], correcta: 3, explicacion: "Primero se cierra la de adentro. El mismo orden tienta, pero las mezcla." },
    { q: "Querés marcar un texto como importante dentro de un párrafo. ¿Qué usás?", opciones: ["<h1>","<strong>","<title>","<li>"], correcta: 1, explicacion: "strong marca importancia dentro del texto. h1 tienta para destacar, pero es un título." },
  ],
},
{
  id: "html-semantico",
  icono: "🏗️",
  titulo: "Estructura, formularios y accesibilidad",
  nivel: "Básico",
  objetivos: [
    "Ordenar la página con etiquetas semánticas: header, nav, main, section y footer",
    "Armar un formulario con campos, etiquetas y un botón",
    "Revisar que la página se pueda usar con teclado y lector de pantalla",
  ],
  lecciones: [
    { titulo: "Las partes de una página", html: `
      <p class="idea">Las <strong>etiquetas semánticas</strong> dicen qué parte de la página es cada bloque: la cabecera, el menú, el contenido principal, el pie. Se ven igual que una caja común, pero el navegador, los buscadores y los lectores de pantalla las entienden.</p>
      <pre class="web"><code>&lt;header&gt;
  &lt;h1&gt;Tortas de Sofi&lt;/h1&gt;
  &lt;nav&gt;
    &lt;a href="#sabores"&gt;Sabores&lt;/a&gt; ·
    &lt;a href="#pedidos"&gt;Pedidos&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;section id="sabores"&gt;
    &lt;h2&gt;Sabores&lt;/h2&gt;
    &lt;p&gt;Chocolate, frutilla y limón.&lt;/p&gt;
  &lt;/section&gt;
  &lt;section id="pedidos"&gt;
    &lt;h2&gt;Pedidos&lt;/h2&gt;
    &lt;p&gt;Escribime con una semana de anticipación.&lt;/p&gt;
  &lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;
  &lt;p&gt;Rosario · Tortas por encargo&lt;/p&gt;
&lt;/footer&gt;</code></pre>
      <table>
        <tr><th>Etiqueta</th><th>Qué es</th></tr>
        <tr><td>&lt;header&gt;</td><td>La cabecera: el nombre, el logo, el menú</td></tr>
        <tr><td>&lt;nav&gt;</td><td>Un grupo de enlaces para moverse</td></tr>
        <tr><td>&lt;main&gt;</td><td>El contenido principal (uno por página)</td></tr>
        <tr><td>&lt;section&gt;</td><td>Una sección con su propio título</td></tr>
        <tr><td>&lt;footer&gt;</td><td>El pie: datos de contacto, aclaraciones</td></tr>
        <tr><td>&lt;div&gt;</td><td>Una caja sin significado: solo para agrupar cuando nada de lo anterior sirve</td></tr>
      </table>
      <p><strong>El id y los enlaces internos:</strong> un enlace con href="#sabores" lleva a la parte de la página que tiene id="sabores". Así se arma un menú dentro de una sola página.</p>
      <p>Por ejemplo, la página de Sofi era todo con div. Al cambiar a header, main, section y footer, un amigo que usa lector de pantalla le dijo que ahora podía saltar directo a "Pedidos".</p>` },
    { titulo: "Formularios", html: `
      <p class="idea">Un <strong>formulario</strong> junta datos que escribe la persona: nombre, teléfono, qué quiere pedir. Cada campo tiene su <strong>label</strong>, el texto que dice qué hay que escribir.</p>
      <pre class="web"><code>&lt;form&gt;
  &lt;label for="nombre"&gt;Tu nombre&lt;/label&gt;&lt;br&gt;
  &lt;input id="nombre" type="text" required&gt;&lt;br&gt;&lt;br&gt;

  &lt;label for="tel"&gt;Teléfono&lt;/label&gt;&lt;br&gt;
  &lt;input id="tel" type="tel"&gt;&lt;br&gt;&lt;br&gt;

  &lt;label for="sabor"&gt;Sabor&lt;/label&gt;&lt;br&gt;
  &lt;select id="sabor"&gt;
    &lt;option&gt;Chocolate&lt;/option&gt;
    &lt;option&gt;Frutilla&lt;/option&gt;
    &lt;option&gt;Limón&lt;/option&gt;
  &lt;/select&gt;&lt;br&gt;&lt;br&gt;

  &lt;label for="nota"&gt;Comentarios&lt;/label&gt;&lt;br&gt;
  &lt;textarea id="nota" rows="3"&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;

  &lt;button type="submit"&gt;Enviar pedido&lt;/button&gt;
&lt;/form&gt;</code></pre>
      <table>
        <tr><th>Campo</th><th>Para qué</th></tr>
        <tr><td>&lt;input type="text"&gt;</td><td>Texto corto</td></tr>
        <tr><td>&lt;input type="email"&gt; o "tel"</td><td>Mail o teléfono: en el celular aparece el teclado justo</td></tr>
        <tr><td>&lt;select&gt; con &lt;option&gt;</td><td>Elegir de una lista</td></tr>
        <tr><td>&lt;textarea&gt;</td><td>Texto largo</td></tr>
        <tr><td>required</td><td>Que el campo sea obligatorio</td></tr>
      </table>
      <p><strong>El label se une al campo</strong> con for, que repite el id del campo. Así, al tocar el texto, se activa el campo, y el lector de pantalla sabe qué se pide.</p>
      <p><strong>Para que el formulario mande los datos a algún lado</strong> hace falta un servidor o un servicio de formularios; el HTML solo arma la parte visible. Mientras tanto, muchos emprendimientos usan un enlace a WhatsApp.</p>
      <p>Por ejemplo, Sofi probó tocar "Enviar pedido" con el nombre vacío: el navegador no la dejó y marcó el campo, gracias a required.</p>` },
    { titulo: "Una página que pueda usar todo el mundo", html: `
      <p class="idea">La <strong>accesibilidad</strong> es que tu página la pueda usar cualquier persona: quien no ve bien, quien usa solo el teclado o quien tiene un celular viejo. Casi todo sale de usar bien el HTML.</p>
      <table>
        <tr><th>Revisión</th><th>Cómo la hacés</th></tr>
        <tr><td>Imágenes con alt que describe</td><td>Leé solo los alt: ¿se entiende la página?</td></tr>
        <tr><td>Campos con label</td><td>Tocá el texto del label: ¿se activa el campo?</td></tr>
        <tr><td>Se puede usar con teclado</td><td>Recorré la página solo con Tab y Enter</td></tr>
        <tr><td>Títulos en orden</td><td>h1, después h2, después h3, sin saltear</td></tr>
        <tr><td>Contraste</td><td>Texto oscuro sobre fondo claro (o al revés), nunca gris clarito sobre blanco</td></tr>
        <tr><td>Enlaces que dicen adónde van</td><td>"Ver los sabores", no "hacé clic acá"</td></tr>
      </table>
      <pre class="web"><code>&lt;!-- Mal: un div no se puede usar con el teclado --&gt;
&lt;div onclick="alert('pedido')"&gt;Pedir (div)&lt;/div&gt;

&lt;!-- Bien: un botón de verdad funciona con Tab y Enter --&gt;
&lt;button onclick="alert('pedido')"&gt;Pedir (botón)&lt;/button&gt;</code></pre>
      <p>Probá el ejemplo: tocá dentro del resultado y apretá Tab. El botón se resalta y responde a Enter; el div no.</p>
      <p><strong>Los comentarios</strong> (lo que va entre &lt;!-- y --&gt;) no se ven en la página: sirven para dejar notas en el código.</p>
      <p>Por ejemplo, Sofi recorrió su página solo con Tab y descubrió que su botón "Pedir" era un div: con el teclado no se podía tocar. Lo cambió por un button.</p>` },
  ],
  practica: [
    "Reorganizá tu página con header, nav, main, al menos 2 section y footer, y anotá cuántos div pudiste reemplazar.",
    "Armá un formulario de contacto con 3 campos con su label y uno obligatorio, y anotá qué pasa al enviarlo vacío.",
    "Recorré tu página solo con el teclado (Tab y Enter) y anotá cuántos elementos no pudiste usar.",
  ],
  recursos: [
    { t: "MDN Web Docs: accesibilidad (en español)", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Accessibility" },
    { t: "MDN Web Docs: referencia de HTML (en español)", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { t: "web.dev de Google: curso de HTML", url: "https://web.dev/learn/html?hl=es" },
  ],
  quiz: [
    { q: "Querés marcar el contenido principal de tu página. ¿Qué etiqueta usás?", opciones: ["<header>","<footer>","<main>","<div> siempre"], correcta: 2, explicacion: "main marca lo principal (uno por página). div tienta porque sirve para todo, pero no dice qué es." },
    { q: "Querés agrupar los enlaces del menú. ¿Qué etiqueta usás?", opciones: ["<nav>","<form>","<main>","<ol>"], correcta: 0, explicacion: "nav es para navegación. ol tienta porque es una lista, pero es para pasos numerados." },
    { q: "Si querés que un enlace lleve a la sección con id=\"pedidos\" de la misma página, ¿qué escribís en href?", opciones: ["pedidos.html","id=pedidos","https://pedidos","#pedidos"], correcta: 3, explicacion: "El numeral apunta a un id de la misma página. pedidos.html tienta, pero sería otro archivo." },
    { q: "Ninguna etiqueta semántica sirve para agrupar dos cosas. ¿Qué usás?", opciones: ["Un <main> extra","Un <div>","Un <h1>","Un <form>"], correcta: 1, explicacion: "El div es la caja sin significado para estos casos. Un main extra tienta, pero tiene que haber uno solo." },
    { q: "Querés un campo para un texto largo, como comentarios. ¿Qué usás?", opciones: ["<input type=\"text\">","<select>","<textarea>","<label>"], correcta: 2, explicacion: "textarea es para texto largo. El input text tienta, pero es de una sola línea." },
    { q: "Querés que en el celular aparezca el teclado de números al pedir el teléfono. ¿Qué campo usás?", opciones: ["<input type=\"tel\">","<input type=\"text\">","<textarea>","<select>"], correcta: 0, explicacion: "El tipo tel muestra el teclado justo. text tienta porque sirve para todo, pero muestra el teclado común." },
    { q: "Querés que no se pueda enviar el formulario sin el nombre. ¿Qué agregás al campo?", opciones: ["alt","href","target","required"], correcta: 3, explicacion: "required lo hace obligatorio. alt tienta porque es un atributo conocido, pero es de imágenes." },
    { q: "Tocás el texto \"Tu nombre\" y no se activa el campo. ¿Qué falta?", opciones: ["Un h1","Que el for del label coincida con el id del campo","Un enlace","Más espacio"], correcta: 1, explicacion: "for e id los unen. Más espacio tienta, pero no conecta nada." },
    { q: "Tu formulario se ve bien. ¿Con solo HTML ya te llegan los pedidos a tu mail?", opciones: ["Sí, siempre","Sí, si tiene required","No: hace falta un servidor o un servicio de formularios","Sí, con un h1"], correcta: 2, explicacion: "El HTML arma la parte visible. \"Sí, siempre\" tienta, pero los datos no van a ningún lado solos." },
    { q: "Tu botón de pedir es un div con onclick. ¿Qué problema tiene?", opciones: ["No se puede usar con el teclado","Ninguno","Es más lento","No se ve"], correcta: 0, explicacion: "Un div no recibe el foco con Tab. \"Ninguno\" tienta porque con el mouse anda, pero no para todos." },
    { q: "Querés saber si tu página se puede usar sin mouse. ¿Cómo lo probás?", opciones: ["Con F5","Achicando la ventana","Cambiando el color","Recorriéndola solo con Tab y Enter"], correcta: 3, explicacion: "Tab y Enter simulan a quien no usa mouse. F5 tienta, pero solo recarga." },
    { q: "Un enlace dice \"hacé clic acá\". ¿Qué es mejor?", opciones: ["Dejarlo así","Que diga adónde lleva, como \"Ver los sabores\"","Ponerlo en mayúsculas","Sacarle el href"], correcta: 1, explicacion: "Quien usa lector de pantalla escucha la lista de enlaces sin contexto. Dejarlo tienta, pero \"acá\" no dice nada." },
  ],
},
{
  id: "css",
  icono: "🎨",
  titulo: "CSS: cómo se ve",
  nivel: "Intermedio",
  objetivos: [
    "Escribir reglas de CSS con selectores de etiqueta, clase e id",
    "Elegir colores, letras y tamaños legibles",
    "Entender el modelo de caja: contenido, padding, borde y margin",
  ],
  lecciones: [
    { titulo: "Reglas y selectores", video: {"id":"3yM5uXp-T_0","t":"Aprende CSS en 15 minutos · Victor Robles WEB (20:43)"}, html: `
      <p class="idea">El CSS se escribe en <strong>reglas</strong>: un <strong>selector</strong> dice a qué elementos se aplica, y entre llaves van las <strong>propiedades</strong> con su valor.</p>
      <pre><code>h1 { color: darkmagenta; font-size: 32px; }
│     │       │
│     │       └ valor
│     └ propiedad
└ selector (a qué se aplica)</code></pre>
      <table>
        <tr><th>Selector</th><th>Se escribe</th><th>Se aplica a</th></tr>
        <tr><td>De etiqueta</td><td>p</td><td>Todos los párrafos</td></tr>
        <tr><td>De clase</td><td>.precio</td><td>Los elementos con class="precio"</td></tr>
        <tr><td>De id</td><td>#portada</td><td>El único elemento con id="portada"</td></tr>
      </table>
      <pre class="web"><code>&lt;style&gt;
  p { color: #333; }
  .precio { color: green; font-weight: bold; }
  #destacada { background: lightyellow; }
&lt;/style&gt;

&lt;p&gt;Torta de chocolate&lt;/p&gt;
&lt;p class="precio"&gt;$25.000&lt;/p&gt;
&lt;p id="destacada"&gt;¡La más pedida!&lt;/p&gt;</code></pre>
      <p><strong>La clase es la más usada:</strong> le podés poner la misma clase a muchos elementos y cambiarlos a todos juntos. El id es para un solo elemento.</p>
      <p><strong>Dónde va el CSS:</strong> en los ejemplos lo ponemos en &lt;style&gt; para probarlo rápido. En una página real va en un archivo aparte, por ejemplo estilos.css, que se conecta en el head con &lt;link rel="stylesheet" href="estilos.css"&gt;. Así todas tus páginas comparten el mismo estilo.</p>
      <p>Los precios son de ejemplo. Por ejemplo, Sofi le puso class="precio" a todos sus precios: con una sola regla los pintó de verde en toda la página.</p>` },
    { titulo: "Colores, letras y la cascada", html: `
      <p class="idea">Con pocas propiedades se cambia mucho: color, fondo, tipo de letra y tamaño. Si dos reglas se pisan, gana la más <strong>específica</strong>, y si empatan, la que está <strong>más abajo</strong>: eso es la <strong>cascada</strong>.</p>
      <table>
        <tr><th>Propiedad</th><th>Ejemplo</th></tr>
        <tr><td>color</td><td>color: #3a2a1a; (el color del texto)</td></tr>
        <tr><td>background</td><td>background: #fff8f0; (el fondo)</td></tr>
        <tr><td>font-family</td><td>font-family: Georgia, serif;</td></tr>
        <tr><td>font-size</td><td>font-size: 18px; o 1.2rem;</td></tr>
        <tr><td>line-height</td><td>line-height: 1.6; (espacio entre renglones)</td></tr>
        <tr><td>text-align</td><td>text-align: center;</td></tr>
      </table>
      <pre class="web"><code>&lt;style&gt;
  body { font-family: Georgia, serif; background: #fff8f0; color: #3a2a1a; line-height: 1.6; }
  p { color: gray; }
  .aviso { color: crimson; }      /* clase: más específica que p */
  p { font-size: 18px; }          /* más abajo: suma, no pisa el color */
&lt;/style&gt;

&lt;p&gt;Texto común.&lt;/p&gt;
&lt;p class="aviso"&gt;Pedidos con una semana de anticipación.&lt;/p&gt;</code></pre>
      <p><strong>Los colores</strong> se escriben con nombre (crimson), en hexadecimal (#3a2a1a: rojo, verde y azul de 00 a ff) o con rgb(58, 42, 26). Las herramientas para desarrolladores (F12) tienen un selector de colores.</p>
      <p><strong>Para que se lea bien:</strong> letra de al menos 16 px en el cuerpo, renglones de 1,5 o más, y buen contraste entre texto y fondo.</p>
      <p><strong>Las unidades:</strong> px es un tamaño fijo; rem es relativo al tamaño de letra base (1rem suele ser 16 px) y respeta si la persona agrandó la letra del navegador.</p>
      <p>Por ejemplo, el texto de Sofi era gris clarito sobre blanco y su mamá no lo podía leer. Lo cambió a un marrón oscuro sobre crema y subió la letra a 18 px.</p>` },
    { titulo: "El modelo de caja", html: `
      <p class="idea">Para el CSS, cada elemento es una <strong>caja</strong> con cuatro capas: el <strong>contenido</strong>, el <strong>padding</strong> (relleno de adentro), el <strong>borde</strong> y el <strong>margin</strong> (espacio de afuera).</p>
      <pre><code>┌──────────── margin (afuera) ────────────┐
│  ┌──────────── border ──────────────┐   │
│  │  ┌──────── padding ──────────┐   │   │
│  │  │        contenido          │   │   │
│  │  └───────────────────────────┘   │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘</code></pre>
      <pre class="web"><code>&lt;style&gt;
  .tarjeta {
    width: 220px;
    padding: 16px;              /* espacio adentro, entre el texto y el borde */
    border: 2px solid #c08040;
    border-radius: 12px;        /* esquinas redondeadas */
    margin: 20px;               /* espacio afuera, entre esta tarjeta y lo demás */
    background: #fff8f0;
  }
&lt;/style&gt;

&lt;div class="tarjeta"&gt;Torta de chocolate · $25.000&lt;/div&gt;
&lt;div class="tarjeta"&gt;Torta de frutilla · $23.000&lt;/div&gt;</code></pre>
      <table>
        <tr><th>Si querés...</th><th>Usás</th></tr>
        <tr><td>Que el texto no quede pegado al borde</td><td>padding</td></tr>
        <tr><td>Separar una caja de otra</td><td>margin</td></tr>
        <tr><td>Una línea alrededor</td><td>border</td></tr>
      </table>
      <p><strong>Un truco que casi todos usan:</strong> * { box-sizing: border-box; } hace que el ancho (width) incluya el padding y el borde. Sin eso, una caja de 220 px con 16 px de padding termina midiendo 252 px y desarma los cálculos.</p>
      <p><strong>F12 te muestra la caja:</strong> tocá un elemento y en la pestaña de estilos aparece el dibujo con su margin, borde y padding en números.</p>
      <p>Por ejemplo, las tarjetas de Sofi tenían el texto pegado al borde. Les agregó padding: 16px y quedaron mucho más prolijas.</p>` },
  ],
  practica: [
    "Creá un archivo estilos.css, conectalo a tu página con link y anotá 5 reglas que escribiste.",
    "Elegí 2 colores (texto y fondo) y un tamaño de letra para tu página, y anotá los valores; pedile a alguien que la lea en el celular.",
    "Armá 3 tarjetas de productos con padding, borde y margin, y anotá cuánto mide cada una con F12.",
  ],
  recursos: [
    { t: "MDN Web Docs: referencia de CSS (en español)", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { t: "web.dev de Google: curso de CSS", url: "https://web.dev/learn/css?hl=es" },
  ],
  quiz: [
    { q: "Querés pintar de verde todos los precios, que tienen class=\"precio\". ¿Qué selector usás?", opciones: ["#precio","precio",".precio","*precio"], correcta: 2, explicacion: "El punto selecciona clases. El numeral tienta, pero es para ids." },
    { q: "Querés aplicar un estilo a un único elemento con id=\"portada\". ¿Qué selector usás?", opciones: ["#portada",".portada","portada","@portada"], correcta: 0, explicacion: "El numeral selecciona por id. El punto tienta, pero es para clases." },
    { q: "Querés que el mismo estilo se use en todas tus páginas. ¿Dónde ponés el CSS?", opciones: ["Copiado en cada página con style","Adentro de cada etiqueta","En el title","En un archivo aparte, conectado con link en el head"], correcta: 3, explicacion: "Un archivo aparte se cambia una vez para todas. Copiarlo tienta por rápido, pero después hay que cambiarlo en todos lados." },
    { q: "En la regla \"h1 { color: red; }\", ¿qué es \"color\"?", opciones: ["El selector","La propiedad","El valor","La etiqueta"], correcta: 1, explicacion: "color es la propiedad y red su valor. Selector tienta, pero el selector es h1." },
    { q: "Tenés \"p { color: gray; }\" y \".aviso { color: crimson; }\". Un párrafo con class=\"aviso\", ¿de qué color se ve?", opciones: ["Gris","Negro","Crimson: la clase es más específica","Mezcla de los dos"], correcta: 2, explicacion: "Gana la regla más específica. Gris tienta porque es la regla de todos los p, pero la clase pesa más." },
    { q: "Dos reglas con el mismo selector dan distinto color. ¿Cuál gana?", opciones: ["La que está más abajo","La de más arriba","Ninguna","La más corta"], correcta: 0, explicacion: "Si empatan en especificidad, gana la última. La de arriba tienta por ser la primera, pero la cascada va hacia abajo." },
    { q: "Tu texto es gris clarito sobre blanco y cuesta leerlo. ¿Qué cambiás?", opciones: ["Letra más chica","Más gris","Todo en mayúsculas","Más contraste: texto oscuro sobre fondo claro"], correcta: 3, explicacion: "El contraste hace legible el texto. Mayúsculas tienta para destacar, pero no arregla el contraste." },
    { q: "Querés que tu tamaño de letra respete si la persona agrandó la letra del navegador. ¿Qué unidad usás?", opciones: ["px siempre","rem","Ninguna","cm"], correcta: 1, explicacion: "rem es relativa al tamaño base. px tienta por exacto, pero no acompaña ese ajuste." },
    { q: "El texto de tu tarjeta queda pegado al borde. ¿Qué propiedad agregás?", opciones: ["margin","color","padding","font-family"], correcta: 2, explicacion: "padding es el espacio de adentro. margin tienta, pero separa la caja de las demás." },
    { q: "Querés separar una tarjeta de la siguiente. ¿Qué propiedad usás?", opciones: ["margin","padding","border-radius","line-height"], correcta: 0, explicacion: "margin es el espacio de afuera. padding tienta, pero agranda la tarjeta por dentro." },
    { q: "Una caja de 220 px con 16 px de padding mide 252 px y te desarma todo. ¿Qué agregás?", opciones: ["Más margin","Un h1","border: none","* { box-sizing: border-box; }"], correcta: 3, explicacion: "border-box hace que el ancho incluya padding y borde. Más margin tienta, pero agranda el problema." },
    { q: "Querés esquinas redondeadas en una tarjeta. ¿Qué propiedad usás?", opciones: ["padding","border-radius","text-align","round"], correcta: 1, explicacion: "border-radius redondea las esquinas. \"round\" tienta por el nombre, pero no existe." },
  ],
},
{
  id: "layout",
  icono: "📐",
  titulo: "Maquetar: flexbox y grid",
  nivel: "Intermedio",
  objetivos: [
    "Poner elementos en fila o en columna y alinearlos con flexbox",
    "Armar una grilla de tarjetas con grid",
    "Elegir entre flexbox y grid según lo que necesitás",
  ],
  lecciones: [
    { titulo: "Flexbox: en fila y alineados", video: {"id":"QFXSgGg-HWo","t":"Aprende CSS Flexbox en 15 minutos · Victor Robles WEB (15:55)"}, html: `
      <p class="idea">Con <strong>display: flex</strong> en una caja, sus hijos se ponen en fila y se pueden alinear y repartir fácil. Es la forma más usada de acomodar menús, barras y tarjetas en una línea.</p>
      <pre class="web"><code>&lt;style&gt;
  nav {
    display: flex;
    justify-content: space-between;  /* reparte a lo largo */
    align-items: center;             /* centra a lo alto */
    gap: 12px;                       /* espacio entre hijos */
    background: #3a2a1a; padding: 12px;
  }
  nav a { color: white; text-decoration: none; }
&lt;/style&gt;

&lt;nav&gt;
  &lt;strong style="color:white"&gt;Tortas de Sofi&lt;/strong&gt;
  &lt;a href="#"&gt;Sabores&lt;/a&gt;
  &lt;a href="#"&gt;Precios&lt;/a&gt;
  &lt;a href="#"&gt;Pedidos&lt;/a&gt;
&lt;/nav&gt;</code></pre>
      <table>
        <tr><th>Propiedad (en la caja padre)</th><th>Qué hace</th></tr>
        <tr><td>display: flex</td><td>Activa flexbox: los hijos se ponen en fila</td></tr>
        <tr><td>flex-direction: column</td><td>Los pone en columna</td></tr>
        <tr><td>justify-content</td><td>Reparte en la dirección principal: center, space-between, flex-start</td></tr>
        <tr><td>align-items</td><td>Alinea en la otra dirección: center, flex-start, stretch</td></tr>
        <tr><td>gap</td><td>Espacio entre los hijos</td></tr>
        <tr><td>flex-wrap: wrap</td><td>Si no entran, pasan a la línea de abajo</td></tr>
      </table>
      <p><strong>Centrar algo en el medio</strong>, que antes era un dolor de cabeza: display: flex; justify-content: center; align-items: center; en el padre.</p>
      <p>Por ejemplo, el menú de Sofi eran enlaces uno debajo del otro. Con display: flex y gap quedó una barra horizontal, con el nombre a la izquierda y los enlaces repartidos.</p>` },
    { titulo: "Grid: una grilla de tarjetas", video: {"id":"-kgGATnsPbs","t":"Aprende CSS Grid Layout en 15 minutos · Victor Robles WEB (20:16)"}, html: `
      <p class="idea">Con <strong>display: grid</strong> armás una <strong>grilla</strong> de filas y columnas. Es ideal para galerías de productos o fotos.</p>
      <pre class="web"><code>&lt;style&gt;
  .galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);   /* 3 columnas iguales */
    gap: 16px;
  }
  .galeria div { background: #fff0e0; padding: 20px; border-radius: 10px; text-align: center; }
&lt;/style&gt;

&lt;div class="galeria"&gt;
  &lt;div&gt;Chocolate&lt;/div&gt;
  &lt;div&gt;Frutilla&lt;/div&gt;
  &lt;div&gt;Limón&lt;/div&gt;
  &lt;div&gt;Vainilla&lt;/div&gt;
  &lt;div&gt;Coco&lt;/div&gt;
&lt;/div&gt;</code></pre>
      <table>
        <tr><th>Valor</th><th>Quiere decir</th></tr>
        <tr><td>repeat(3, 1fr)</td><td>3 columnas que se reparten el espacio por igual</td></tr>
        <tr><td>1fr</td><td>Una "fracción" del espacio libre</td></tr>
        <tr><td>200px 1fr</td><td>Una columna fija de 200 px y otra con el resto</td></tr>
        <tr><td>repeat(auto-fit, minmax(160px, 1fr))</td><td>Tantas columnas como entren, de al menos 160 px</td></tr>
      </table>
      <p><strong>El valor mágico para galerías:</strong> repeat(auto-fit, minmax(160px, 1fr)) acomoda solas las columnas según el ancho: 4 en la computadora, 2 en el celular, sin escribir nada más. Probalo en el laboratorio cambiando la línea de grid-template-columns.</p>
      <p>Por ejemplo, Sofi tenía 9 tortas en una lista larga. Con grid y auto-fit armó una galería que se ve en 3 columnas en la compu y en 1 o 2 en el celular.</p>` },
    { titulo: "¿Flexbox o grid?", html: `
      <p class="idea">Los dos acomodan cajas. La regla simple: <strong>flexbox para una sola fila o columna</strong>, <strong>grid para filas y columnas a la vez</strong>. Muchas páginas usan los dos juntos.</p>
      <table>
        <tr><th>Necesitás</th><th>Usá</th></tr>
        <tr><td>Un menú horizontal</td><td>Flexbox</td></tr>
        <tr><td>Centrar algo en el medio</td><td>Flexbox</td></tr>
        <tr><td>Una galería de productos</td><td>Grid</td></tr>
        <tr><td>Una página con barra lateral y contenido</td><td>Grid (o flexbox)</td></tr>
        <tr><td>Los elementos de adentro de una tarjeta</td><td>Flexbox en columna</td></tr>
      </table>
      <pre class="web"><code>&lt;style&gt;
  .pagina { display: grid; grid-template-columns: 160px 1fr; gap: 16px; }
  aside { background: #f3e6d8; padding: 12px; }
  .tarjeta { display: flex; flex-direction: column; gap: 8px; background: #fff8f0; padding: 12px; }
  .tarjeta button { align-self: flex-start; }
&lt;/style&gt;

&lt;div class="pagina"&gt;
  &lt;aside&gt;Categorías&lt;/aside&gt;
  &lt;div class="tarjeta"&gt;
    &lt;strong&gt;Torta de chocolate&lt;/strong&gt;
    &lt;span&gt;Con dulce de leche&lt;/span&gt;
    &lt;button&gt;Pedir&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      <p><strong>Las cajas se anidan:</strong> en el ejemplo, la página es un grid de dos columnas y, adentro, la tarjeta es un flexbox en columna. Cada caja maneja solo a sus hijos directos.</p>
      <p><strong>Para practicar jugando</strong> hay juegos gratis en internet para aprender flexbox y grid. Buscá "Flexbox Froggy" y "Grid Garden".</p>
      <p>Por ejemplo, Sofi armó su página con un grid de dos columnas (categorías y tortas) y cada tarjeta de torta con un flexbox en columna.</p>` },
  ],
  practica: [
    "Armá el menú de tu página con flexbox y anotá qué valor de justify-content elegiste y por qué.",
    "Armá una galería de al menos 6 elementos con grid y auto-fit, y anotá cuántas columnas se ven en la compu y cuántas en el celular.",
    "Dibujá en papel tu página en cajas, marcá cuáles van con flexbox y cuáles con grid, y anotá cuántas cajas anidadas hay.",
  ],
  recursos: [
    { t: "MDN Web Docs: conceptos básicos de flexbox (en español)", url: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox" },
    { t: "web.dev de Google: curso de CSS", url: "https://web.dev/learn/css?hl=es" },
    { t: "MDN Web Docs: referencia de CSS (en español)", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
  ],
  quiz: [
    { q: "Querés poner los enlaces de tu menú en una fila. ¿Qué escribís en la caja que los contiene?", opciones: ["display: none;","float: menu;","display: flex;","position: fila;"], correcta: 2, explicacion: "flex pone los hijos en fila. display: none tienta porque también es display, pero los esconde." },
    { q: "Con flexbox, querés que los elementos se repartan dejando espacio entre ellos. ¿Qué usás?", opciones: ["justify-content: space-between;","align-items: stretch;","flex-direction: column;","text-align: center;"], correcta: 0, explicacion: "justify-content reparte en la dirección principal. align-items tienta, pero alinea en la otra dirección." },
    { q: "Querés centrar una caja en el medio de otra, a lo ancho y a lo alto. ¿Qué ponés en el padre?", opciones: ["margin: center;","text-align: middle;","center: both;","display: flex; justify-content: center; align-items: center;"], correcta: 3, explicacion: "Con flexbox se centra en las dos direcciones. text-align tienta, pero solo centra el texto." },
    { q: "Con flexbox, los elementos no entran en una línea y se aprietan. ¿Qué agregás?", opciones: ["gap: 0;","flex-wrap: wrap;","display: block;","font-size: 1px;"], correcta: 1, explicacion: "wrap los deja pasar a la línea de abajo. Achicar la letra tienta, pero no lo resuelve." },
    { q: "Querés poner la tarjeta en columna en vez de fila con flexbox. ¿Qué propiedad cambiás?", opciones: ["justify-content: column;","grid: column;","flex-direction: column;","align-items: column;"], correcta: 2, explicacion: "flex-direction elige fila o columna. justify-content tienta, pero reparte, no cambia la dirección." },
    { q: "Querés 3 columnas iguales en un grid. ¿Qué escribís?", opciones: ["grid-template-columns: repeat(3, 1fr);","columns: 3;","grid-rows: 3;","display: 3;"], correcta: 0, explicacion: "repeat(3, 1fr) arma 3 columnas iguales. grid-rows tienta, pero define filas." },
    { q: "¿Qué quiere decir 1fr en un grid?", opciones: ["Un pixel","Una fila","Un formulario","Una fracción del espacio libre"], correcta: 3, explicacion: "fr reparte el espacio disponible. Fila tienta por la letra f, pero no es eso." },
    { q: "Querés una galería que acomode sola las columnas según el ancho de la pantalla. ¿Qué usás?", opciones: ["repeat(3, 1fr) siempre","repeat(auto-fit, minmax(160px, 1fr))","Una tabla","Muchos br"], correcta: 1, explicacion: "auto-fit con minmax pone las columnas que entren. repeat(3, 1fr) tienta, pero queda con 3 aunque no entren." },
    { q: "Necesitás un menú horizontal. ¿Flexbox o grid?", opciones: ["Grid, siempre","Ninguno","Flexbox: es una sola fila","Una tabla"], correcta: 2, explicacion: "Para una fila, flexbox. Grid tienta porque también acomoda, pero es para filas y columnas." },
    { q: "Necesitás una galería con filas y columnas de productos. ¿Flexbox o grid?", opciones: ["Grid","Flexbox solo","Ninguno","Muchos div con br"], correcta: 0, explicacion: "Filas y columnas a la vez es trabajo de grid. Flexbox tienta, pero se complica para la grilla." },
    { q: "Tu página es un grid y adentro hay una tarjeta. ¿Puede la tarjeta usar flexbox?", opciones: ["No, se pisan","Solo si saca el grid","Solo en el celular","Sí: cada caja maneja a sus propios hijos"], correcta: 3, explicacion: "Las cajas se anidan. \"Se pisan\" tienta, pero cada caja tiene su propio display." },
    { q: "Querés espacio entre los hijos de un flexbox o un grid sin poner margin a cada uno. ¿Qué usás?", opciones: ["padding en cada hijo","gap","border","line-height"], correcta: 1, explicacion: "gap separa a todos los hijos de una vez. padding tienta, pero agranda cada caja por dentro." },
  ],
},
{
  id: "responsive",
  icono: "📱",
  titulo: "Diseño que se adapta al celular",
  nivel: "Intermedio",
  objetivos: [
    "Agregar la etiqueta viewport y probar la página en tamaño de celular",
    "Usar media queries para cambiar el diseño según el ancho",
    "Hacer imágenes y textos que se adapten solos",
  ],
  lecciones: [
    { titulo: "Pensar primero en el celular", video: {"id":"8JC-XyCSys4","t":"Cómo hacer un diseño responsive solo con HTML y CSS · Soy Dalto (6:46)"}, html: `
      <p class="idea">La mayoría de la gente entra a las páginas desde el celular. Un <strong>diseño adaptable</strong> (responsive) se acomoda al ancho de cada pantalla, sin que haya que hacer zoom ni deslizar de costado.</p>
      <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>
      <p>Esta línea va en el <strong>head</strong> de todas tus páginas. Sin ella, el celular muestra la página como si fuera una computadora achicada, con letras diminutas.</p>
      <table>
        <tr><th>Cómo probar en tamaño celular</th><th>Qué hacés</th></tr>
        <tr><td>Con las herramientas del navegador</td><td>F12 y el ícono de "dispositivo" (o Ctrl + Shift + M): elegís un celular y ves la página en ese tamaño</td></tr>
        <tr><td>En tu celular</td><td>Abrís la página publicada (lo ves en el módulo del proyecto)</td></tr>
      </table>
      <p><strong>Primero el celular</strong> (en inglés, mobile first): escribís el CSS pensando en la pantalla chica, en una sola columna, y después agregás cambios para pantallas grandes. Es más fácil sumar columnas que sacarlas.</p>
      <p><strong>Lo que más rompe una página en el celular:</strong> anchos fijos grandes (width: 900px), imágenes sin límite de ancho y tablas anchas. Todo eso hace aparecer el deslizamiento de costado.</p>
      <p>Por ejemplo, la página de Sofi se veía chiquita en el celular. Le faltaba la etiqueta viewport: la agregó y las letras pasaron a tener tamaño normal.</p>` },
    { titulo: "Media queries", html: `
      <p class="idea">Una <strong>media query</strong> es un bloque de CSS que se aplica solo si la pantalla cumple una condición, por ejemplo, que tenga al menos 700 px de ancho.</p>
      <pre class="web"><code>&lt;style&gt;
  .galeria { display: grid; grid-template-columns: 1fr; gap: 12px; }
  .galeria div { background: #fff0e0; padding: 16px; border-radius: 8px; }

  /* Desde 500 px de ancho: 2 columnas */
  @media (min-width: 500px) {
    .galeria { grid-template-columns: 1fr 1fr; }
  }
  /* Desde 800 px: 3 columnas */
  @media (min-width: 800px) {
    .galeria { grid-template-columns: 1fr 1fr 1fr; }
  }
&lt;/style&gt;

&lt;div class="galeria"&gt;
  &lt;div&gt;Chocolate&lt;/div&gt;&lt;div&gt;Frutilla&lt;/div&gt;&lt;div&gt;Limón&lt;/div&gt;
  &lt;div&gt;Vainilla&lt;/div&gt;&lt;div&gt;Coco&lt;/div&gt;&lt;div&gt;Nuez&lt;/div&gt;
&lt;/div&gt;</code></pre>
      <p>En el laboratorio, la vista es angosta: vas a ver 1 o 2 columnas. Copiá el código a tu archivo, abrilo en la compu y achicá la ventana: las columnas cambian solas.</p>
      <table>
        <tr><th>Condición</th><th>Se aplica cuando...</th></tr>
        <tr><td>(min-width: 800px)</td><td>La pantalla mide 800 px o más (pensando primero en el celular)</td></tr>
        <tr><td>(max-width: 500px)</td><td>La pantalla mide 500 px o menos</td></tr>
      </table>
      <p><strong>Elegí los cortes por tu diseño, no por un modelo de celular:</strong> achicá la ventana y, donde algo se ve mal, ahí va una media query.</p>
      <p>Por ejemplo, Sofi empezó con su galería en una columna. Con dos media queries pasó a 2 columnas en tablet y 3 en la compu.</p>` },
    { titulo: "Imágenes y textos que se adaptan", html: `
      <p class="idea">Algunos valores hacen que las cosas se adapten <strong>solas</strong>, sin media queries: anchos máximos, porcentajes y unidades relativas.</p>
      <pre class="web"><code>&lt;style&gt;
  img { max-width: 100%; height: auto; border-radius: 10px; }
  .contenido { max-width: 600px; margin: 0 auto; padding: 0 16px; }
  h1 { font-size: clamp(1.6rem, 5vw, 2.6rem); }
&lt;/style&gt;

&lt;div class="contenido"&gt;
  &lt;h1&gt;Tortas de Sofi&lt;/h1&gt;
  &lt;img src="https://picsum.photos/seed/sofi/900/500" alt="Mesa con tortas decoradas"&gt;
  &lt;p&gt;La foto nunca es más ancha que la pantalla.&lt;/p&gt;
&lt;/div&gt;</code></pre>
      <table>
        <tr><th>Regla</th><th>Qué logra</th></tr>
        <tr><td>img { max-width: 100%; height: auto; }</td><td>La imagen se achica en pantallas chicas y no se deforma</td></tr>
        <tr><td>max-width: 600px; margin: 0 auto;</td><td>El texto no se estira de más en pantallas grandes y queda centrado</td></tr>
        <tr><td>padding: 0 16px</td><td>El texto no queda pegado a los bordes del celular</td></tr>
        <tr><td>clamp(mínimo, ideal, máximo)</td><td>Un tamaño que crece con la pantalla, sin pasarse</td></tr>
      </table>
      <p><strong>vw</strong> es una unidad que equivale al 1 % del ancho de la pantalla: 5vw en un celular de 360 px son 18 px.</p>
      <p><strong>Las fotos pesadas</strong> hacen lenta la página en el celular con datos móviles. Achicalas antes de subirlas: una foto de 1.200 px de ancho alcanza para casi todo.</p>
      <p>La foto del ejemplo es de un sitio de fotos de prueba. Por ejemplo, las fotos de las tortas de Sofi pesaban 5 MB cada una. Las achicó a 1.200 px y la página pasó a cargar en un par de segundos.</p>` },
  ],
  practica: [
    "Agregá la etiqueta viewport, mirá tu página en 3 tamaños de celular con F12 y anotá qué se rompía en cada uno.",
    "Escribí 2 media queries para tu galería y anotá en qué anchos cambian las columnas.",
    "Achicá las fotos de tu página a 1.200 px de ancho y anotá cuánto pesaba cada una antes y después.",
  ],
  recursos: [
    { t: "web.dev de Google: curso de CSS", url: "https://web.dev/learn/css?hl=es" },
    { t: "MDN Web Docs: referencia de CSS (en español)", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { t: "MDN Web Docs: aprender desarrollo web (en español)", url: "https://developer.mozilla.org/es/docs/Learn_web_development" },
  ],
  quiz: [
    { q: "Tu página se ve diminuta en el celular, como una compu achicada. ¿Qué te falta?", opciones: ["Un h1 más grande","Una media query de 2.000 px","La etiqueta meta viewport en el head","Más imágenes"], correcta: 2, explicacion: "Sin viewport el celular simula una pantalla grande. Agrandar el h1 tienta, pero no resuelve el resto." },
    { q: "Querés ver tu página en tamaño celular sin tener celular a mano. ¿Qué hacés?", opciones: ["F12 y el modo dispositivo (Ctrl + Shift + M)","Achicar la letra","Imprimirla","No se puede"], correcta: 0, explicacion: "El modo dispositivo simula pantallas. Achicar la letra tienta, pero no simula nada." },
    { q: "Pensás primero en el celular (mobile first). ¿Cómo escribís el CSS?", opciones: ["Primero para la compu y después lo achicás","Solo para la compu","Solo para el celular","Primero una columna para pantalla chica y después cambios para pantallas grandes"], correcta: 3, explicacion: "Es más fácil sumar columnas que sacarlas. Empezar por la compu tienta por costumbre, pero cuesta más adaptar." },
    { q: "Tu página se desliza de costado en el celular. ¿Qué suele causarlo?", opciones: ["Usar padding","Algo con ancho fijo grande, como width: 900px","Usar h2","Tener un footer"], correcta: 1, explicacion: "Un ancho fijo más grande que la pantalla obliga a deslizar. El padding tienta como sospechoso, pero suele ser chico." },
    { q: "Querés que un estilo se aplique solo en pantallas de 800 px o más. ¿Qué escribís?", opciones: ["@media (max-width: 800px) { ... }","width: 800px;","@media (min-width: 800px) { ... }","@screen 800 { ... }"], correcta: 2, explicacion: "min-width es \"desde ese ancho\". max-width tienta, pero es \"hasta ese ancho\"." },
    { q: "¿Cómo elegís en qué anchos poner media queries?", opciones: ["Achicando la ventana y poniéndolas donde algo se ve mal","Con el ancho exacto de tu celular","Siempre cada 100 px","Al azar"], correcta: 0, explicacion: "Los cortes los decide tu diseño. Tu celular tienta, pero hay cientos de tamaños." },
    { q: "Tu galería tiene 1 columna en el celular y querés 3 en la compu. ¿Qué usás?", opciones: ["Tres páginas distintas","Muchos br","Una tabla","Media queries que cambian grid-template-columns"], correcta: 3, explicacion: "La media query cambia el diseño en la misma página. Tres páginas tientan, pero son tres veces el trabajo." },
    { q: "Una foto grande se sale de la pantalla del celular. ¿Qué regla agregás?", opciones: ["img { width: 1200px; }","img { max-width: 100%; height: auto; }","img { display: flex; }","img { margin: 100px; }"], correcta: 1, explicacion: "max-width: 100% la achica para que entre. Un ancho fijo tienta por prolijo, pero es justo lo que la hace salir." },
    { q: "En la compu, tu texto ocupa todo el ancho y cuesta leerlo. ¿Qué hacés?", opciones: ["Letra más chica","Más columnas de texto","Le ponés un max-width (por ejemplo 600 px) y margin: 0 auto","Nada"], correcta: 2, explicacion: "Un ancho máximo hace renglones cómodos. Letra más chica tienta, pero se lee peor." },
    { q: "¿Qué hace clamp(1.6rem, 5vw, 2.6rem) en un font-size?", opciones: ["Un tamaño que crece con la pantalla entre un mínimo y un máximo","Un tamaño fijo de 5 px","Esconde el texto","Pone la letra en negrita"], correcta: 0, explicacion: "clamp acota un valor que se adapta. \"Fijo\" tienta por los números, pero cambia con la pantalla." },
    { q: "En un celular de 360 px de ancho, ¿cuánto es 5vw?", opciones: ["5 px","360 px","72 px","18 px"], correcta: 3, explicacion: "1vw es el 1 % del ancho: 3,6 × 5 = 18. 5 px tienta si leés vw como pixeles." },
    { q: "Tus fotos pesan 5 MB cada una y la página tarda en el celular. ¿Qué hacés?", opciones: ["Les sacás el alt","Las achicás antes de subirlas, por ejemplo a 1.200 px de ancho","Las ponés todas juntas","Nada, el celular se arregla"], correcta: 1, explicacion: "Fotos livianas cargan rápido con datos móviles. Sacar el alt tienta como ahorro, pero no cambia el peso y empeora la accesibilidad." },
  ],
},
{
  id: "javascript",
  icono: "⚙️",
  titulo: "JavaScript: primeros pasos",
  nivel: "Avanzado",
  objetivos: [
    "Guardar datos en variables y mostrarlos con console.log",
    "Tomar decisiones con if y repetir con for",
    "Escribir funciones que reciben datos y devuelven un resultado",
  ],
  lecciones: [
    { titulo: "Variables y tipos de datos", video: {"id":"8GTaO9XhA5M","t":"Aprende JavaScript en 10 minutos · Programador X (11:43)"}, html: `
      <p class="idea">Una <strong>variable</strong> es una cajita con nombre donde guardás un dato. Con <strong>console.log</strong> mostrás lo que hay adentro: es la forma de ver qué está haciendo tu programa.</p>
      <pre class="web"><code>const nombre = 'Torta de chocolate';   // texto (string)
const precio = 25000;                   // número
let enStock = true;                     // verdadero o falso (boolean)

console.log(nombre);
console.log('Precio:', precio);
console.log('Con 10 % de descuento:', precio * 0.9);

enStock = false;                        // let se puede cambiar; const no
console.log('¿Hay?', enStock);</code></pre>
      <table>
        <tr><th>Tipo</th><th>Ejemplo</th><th>Para qué</th></tr>
        <tr><td>Texto (string)</td><td>'Chocolate'</td><td>Nombres, mensajes (va entre comillas)</td></tr>
        <tr><td>Número</td><td>25000</td><td>Precios, cantidades (sin comillas y sin punto de miles)</td></tr>
        <tr><td>Booleano</td><td>true o false</td><td>Sí o no</td></tr>
        <tr><td>Lista (array)</td><td>['chocolate', 'limón']</td><td>Varios datos en orden</td></tr>
      </table>
      <p><strong>const o let:</strong> usá const para lo que no cambia y let para lo que sí. Si intentás cambiar una const, el programa da error, y eso te avisa de una equivocación.</p>
      <p><strong>Las comillas importan:</strong> '25000' es un texto y 25000 es un número. '25000' + 1 da '250001' (pega los textos), pero 25000 + 1 da 25001.</p>
      <p><strong>Los comentarios</strong> empiezan con // y no se ejecutan: son notas para quien lee el código.</p>
      <p>Los precios son de ejemplo. Por ejemplo, Sofi guardó el precio de cada torta en una variable: cuando cambió el precio, lo cambió en un solo lugar.</p>` },
    { titulo: "Decisiones y repeticiones", html: `
      <p class="idea">Un programa toma <strong>decisiones</strong> con <strong>if</strong> (si pasa esto, hacé aquello) y <strong>repite</strong> tareas con <strong>for</strong>. Con esas dos cosas se resuelve muchísimo.</p>
      <pre class="web"><code>const total = 42000;

if (total &gt;= 40000) {
  console.log('Envío gratis 🎉');
} else {
  console.log('Envío: $2.000');
}

const sabores = ['chocolate', 'frutilla', 'limón'];
for (const sabor of sabores) {
  console.log('Torta de ' + sabor);
}
console.log('Tenemos', sabores.length, 'sabores');</code></pre>
      <table>
        <tr><th>Comparación</th><th>Quiere decir</th></tr>
        <tr><td>a === b</td><td>a es igual a b (con tres signos igual)</td></tr>
        <tr><td>a !== b</td><td>a es distinto de b</td></tr>
        <tr><td>a &gt; b, a &gt;= b</td><td>Mayor, mayor o igual</td></tr>
        <tr><td>a &amp;&amp; b</td><td>Las dos cosas son verdaderas</td></tr>
        <tr><td>a || b</td><td>Alguna de las dos es verdadera</td></tr>
      </table>
      <p><strong>Un solo = guarda, tres === comparan.</strong> if (total = 40000) no compara: guarda 40000 en total. Es uno de los errores más comunes al empezar.</p>
      <p><strong>for...of</strong> recorre una lista y te da cada elemento, uno por vez. sabores.length dice cuántos elementos tiene la lista.</p>
      <p>Los montos son de ejemplo. Por ejemplo, Sofi quería avisar "envío gratis" en los pedidos grandes: con un if de 4 líneas resolvió el mensaje para cualquier total.</p>` },
    { titulo: "Funciones", html: `
      <p class="idea">Una <strong>función</strong> es un pedazo de código con nombre que podés usar muchas veces. Recibe datos (los <strong>parámetros</strong>) y puede <strong>devolver</strong> un resultado con return.</p>
      <pre class="web"><code>function precioFinal(precio, cantidad) {
  const subtotal = precio * cantidad;
  if (cantidad &gt;= 3) {
    return subtotal * 0.9;    // 10 % de descuento llevando 3 o más
  }
  return subtotal;
}

console.log(precioFinal(25000, 1));   // 25000
console.log(precioFinal(25000, 3));   // 67500
console.log(precioFinal(18000, 2));   // 36000</code></pre>
      <pre><code>function precioFinal(precio, cantidad) {   ← nombre y parámetros
  ...                                       ← lo que hace
  return resultado;                         ← lo que devuelve
}
precioFinal(25000, 3)                       ← usarla (llamarla) con datos</code></pre>
      <p><strong>Para qué sirven:</strong> si la cuenta del descuento está en un solo lugar, la cambiás una vez y sirve para toda la página. Copiar y pegar la misma cuenta en cinco lugares es buscarse errores.</p>
      <p><strong>Nombres que dicen qué hacen:</strong> precioFinal se entiende sola; calc2 no. Por costumbre en JavaScript, los nombres se escriben "camelCase": sin espacios y con mayúscula en cada palabra después de la primera.</p>
      <p><strong>Controlá con ejemplos:</strong> calculá a mano un caso (3 tortas de 25.000 con 10 % de descuento: 67.500) y fijate si la función da lo mismo.</p>
      <p>Por ejemplo, Sofi tenía la cuenta del descuento escrita tres veces y en una se había equivocado. La pasó a una función precioFinal y el error desapareció en los tres lugares.</p>` },
  ],
  practica: [
    "En el laboratorio, creá 3 variables con el nombre, el precio y la cantidad de un producto y mostralos con console.log; anotá qué tipo de dato es cada una.",
    "Escribí un if que muestre \"envío gratis\" desde un monto que elijas y probalo con 3 totales distintos: anotá qué mostró cada uno.",
    "Escribí una función que reciba un precio y un porcentaje de descuento y devuelva el precio final; anotá 3 resultados y controlalos a mano.",
  ],
  recursos: [
    { t: "MDN Web Docs: JavaScript (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { t: "freeCodeCamp en español: cursos gratis con certificado", url: "https://www.freecodecamp.org/espanol/learn" },
  ],
  quiz: [
    { q: "Querés guardar un dato que no va a cambiar. ¿Qué usás?", opciones: ["let","var","const","if"], correcta: 2, explicacion: "const es para lo que no cambia. let tienta porque también crea variables, pero es para lo que sí cambia." },
    { q: "Querés ver qué valor tiene una variable mientras programás. ¿Qué usás?", opciones: ["console.log","alert siempre","return","if"], correcta: 0, explicacion: "console.log muestra el valor sin molestar. alert tienta, pero frena la página cada vez." },
    { q: "Si escribís \"25000\" + 1 con comillas, ¿qué da?", opciones: ["25001","Un error","0","\"250001\": pega los textos"], correcta: 3, explicacion: "Con comillas es texto y + pega textos. 25001 tienta, pero sería sin comillas." },
    { q: "Querés guardar varios sabores en orden en una sola variable. ¿Qué tipo de dato usás?", opciones: ["Un booleano","Una lista (array)","Un número","Un comentario"], correcta: 1, explicacion: "El array guarda varios datos en orden. El booleano tienta porque es un tipo, pero solo es sí o no." },
    { q: "Querés comparar si total es igual a 40000. ¿Qué escribís?", opciones: ["total = 40000","total == \"igual\"","total === 40000","total := 40000"], correcta: 2, explicacion: "Tres signos comparan; uno solo guarda. El = tienta porque es el igual de matemática, pero guarda el valor." },
    { q: "Querés mostrar \"envío gratis\" solo si el total es 40.000 o más. ¿Qué usás?", opciones: ["if (total >= 40000)","for (total >= 40000)","function total()","const total >= 40000"], correcta: 0, explicacion: "if toma decisiones. for tienta porque también tiene paréntesis, pero repite." },
    { q: "Querés mostrar cada sabor de una lista, uno por uno. ¿Qué usás?", opciones: ["if (sabores)","return sabores","const sabores = for","for (const sabor of sabores)"], correcta: 3, explicacion: "for...of recorre la lista. if tienta, pero solo decide una vez." },
    { q: "Querés saber cuántos elementos tiene la lista sabores. ¿Qué escribís?", opciones: ["sabores.size()","sabores.length","count(sabores)","sabores.total"], correcta: 1, explicacion: "length dice la cantidad. size tienta porque en otros lenguajes existe, pero en los arrays de JavaScript es length." },
    { q: "Querés que una condición se cumpla solo si las dos cosas son verdaderas. ¿Qué operador usás?", opciones: ["||","!==","&&","=="], correcta: 2, explicacion: "&& exige las dos. || tienta, pero alcanza con una." },
    { q: "Tenés la cuenta del descuento copiada en cinco lugares. ¿Qué conviene?", opciones: ["Pasarla a una función y usarla en los cinco","Dejarla así","Copiarla a un sexto lugar","Borrarla"], correcta: 0, explicacion: "En una función se cambia una vez. Dejarla tienta porque anda, pero un cambio después hay que hacerlo cinco veces." },
    { q: "En una función, ¿qué hace return?", opciones: ["Repite la función","Borra la función","Muestra un mensaje en pantalla","Devuelve el resultado a quien la llamó"], correcta: 3, explicacion: "return entrega el resultado. Mostrar un mensaje tienta, pero eso es console.log." },
    { q: "Si precioFinal(25000, 3) aplica 10 % de descuento desde 3 unidades, ¿cuánto tiene que dar?", opciones: ["75000","67500","22500","25000"], correcta: 1, explicacion: "25.000 × 3 = 75.000, menos 10 % = 67.500. 75.000 tienta si te olvidás del descuento." },
  ],
},
{
  id: "dom",
  icono: "🖱️",
  titulo: "JavaScript en la página: el DOM y los eventos",
  nivel: "Avanzado",
  objetivos: [
    "Encontrar elementos de la página con querySelector y cambiar su contenido",
    "Reaccionar a clics y a lo que escribe la persona con addEventListener",
    "Armar una calculadora de pedidos que funciona en la página",
  ],
  lecciones: [
    { titulo: "El DOM: la página como objetos", video: {"id":"Jh-LUQMwtRk","t":"Qué es el DOM · DOCUMENT 0 (3:08)"}, html: `
      <p class="idea">Cuando el navegador lee tu HTML, arma el <strong>DOM</strong>: una copia de la página que JavaScript puede leer y cambiar. Con <strong>querySelector</strong> encontrás un elemento usando el mismo selector que en CSS.</p>
      <pre class="web"><code>&lt;h1 id="titulo"&gt;Tortas de Sofi&lt;/h1&gt;
&lt;p class="aviso"&gt;Cargando…&lt;/p&gt;

&lt;script&gt;
  const titulo = document.querySelector('#titulo');
  titulo.textContent = 'Tortas de Sofi 🎂';

  const aviso = document.querySelector('.aviso');
  aviso.textContent = 'Pedidos abiertos esta semana';
  aviso.style.color = 'green';
&lt;/script&gt;</code></pre>
      <table>
        <tr><th>Código</th><th>Qué hace</th></tr>
        <tr><td>document.querySelector('#titulo')</td><td>Busca el primer elemento que coincide con el selector</td></tr>
        <tr><td>document.querySelectorAll('.precio')</td><td>Busca todos los que coinciden</td></tr>
        <tr><td>elemento.textContent = '...'</td><td>Cambia el texto</td></tr>
        <tr><td>elemento.style.color = 'green'</td><td>Cambia un estilo</td></tr>
        <tr><td>elemento.classList.add('activo')</td><td>Le agrega una clase (el CSS hace el resto)</td></tr>
      </table>
      <p><strong>Dónde va el script:</strong> al final del body, o en un archivo aparte con &lt;script src="app.js"&gt;&lt;/script&gt; antes de cerrar el body. Si el script corre antes de que exista el elemento, querySelector no lo encuentra y devuelve null.</p>
      <p><strong>Mejor clases que estilos sueltos:</strong> en vez de cambiar el color desde JavaScript, agregá una clase y dejá que el CSS defina cómo se ve.</p>
      <p>Por ejemplo, Sofi quería cambiar el aviso de "pedidos abiertos" a "pedidos cerrados" sin tocar el HTML cada vez: lo hizo con querySelector y textContent.</p>` },
    { titulo: "Eventos: reaccionar a la persona", html: `
      <p class="idea">Un <strong>evento</strong> es algo que pasa en la página: un clic, una tecla, un cambio en un campo. Con <strong>addEventListener</strong> le decís al navegador qué hacer cuando pasa.</p>
      <pre class="web"><code>&lt;button id="boton"&gt;Me gusta 💜&lt;/button&gt;
&lt;p&gt;Le gustó a &lt;span id="cuenta"&gt;0&lt;/span&gt; personas.&lt;/p&gt;

&lt;script&gt;
  const boton = document.querySelector('#boton');
  const cuenta = document.querySelector('#cuenta');
  let meGusta = 0;

  boton.addEventListener('click', () =&gt; {
    meGusta = meGusta + 1;
    cuenta.textContent = meGusta;
  });
&lt;/script&gt;</code></pre>
      <table>
        <tr><th>Evento</th><th>Cuándo pasa</th></tr>
        <tr><td>click</td><td>Al tocar o hacer clic</td></tr>
        <tr><td>input</td><td>Cada vez que cambia lo escrito en un campo</td></tr>
        <tr><td>change</td><td>Cuando se elige otra opción en un select</td></tr>
        <tr><td>submit</td><td>Al enviar un formulario</td></tr>
      </table>
      <pre><code>boton.addEventListener('click', () =&gt; {
       │                │        └ lo que pasa (una función)
       │                └ qué evento escuchar
       └ en qué elemento
});</code></pre>
      <p><strong>Leer lo que escribió la persona:</strong> en un input, el texto está en campo.value. Ojo: siempre es texto. Para hacer cuentas, convertilo con Number(campo.value).</p>
      <p>Por ejemplo, Sofi puso un botón de "me gusta" en cada torta para ver cuál gustaba más. Cada clic sumaba uno al número que se veía al lado.</p>` },
    { titulo: "Una calculadora de pedidos", html: `
      <p class="idea">Con lo que viste ya podés armar algo útil de verdad: una <strong>calculadora de pedidos</strong> que muestra el total mientras la persona elige. Junta HTML, CSS y JavaScript.</p>
      <pre class="web"><code>&lt;style&gt;
  body { font-family: sans-serif; }
  .total { font-size: 1.4rem; color: #3a2a1a; }
&lt;/style&gt;

&lt;label for="sabor"&gt;Sabor&lt;/label&gt;
&lt;select id="sabor"&gt;
  &lt;option value="25000"&gt;Chocolate ($25.000)&lt;/option&gt;
  &lt;option value="23000"&gt;Frutilla ($23.000)&lt;/option&gt;
  &lt;option value="21000"&gt;Limón ($21.000)&lt;/option&gt;
&lt;/select&gt;

&lt;label for="cantidad"&gt;Cantidad&lt;/label&gt;
&lt;input id="cantidad" type="number" value="1" min="1"&gt;

&lt;p class="total"&gt;Total: $&lt;span id="total"&gt;25000&lt;/span&gt;&lt;/p&gt;

&lt;script&gt;
  const sabor = document.querySelector('#sabor');
  const cantidad = document.querySelector('#cantidad');
  const total = document.querySelector('#total');

  function calcular() {
    const precio = Number(sabor.value);
    const n = Number(cantidad.value) || 0;
    let resultado = precio * n;
    if (n &gt;= 3) resultado = resultado * 0.9;   // 10 % llevando 3 o más
    total.textContent = resultado.toLocaleString('es-AR');
  }

  sabor.addEventListener('change', calcular);
  cantidad.addEventListener('input', calcular);
&lt;/script&gt;</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>HTML</td><td>El select con los precios en el value de cada option, el campo de cantidad y el lugar del total</td></tr>
        <tr><td>Función calcular</td><td>Lee el sabor y la cantidad, hace la cuenta y escribe el total</td></tr>
        <tr><td>addEventListener</td><td>Llama a calcular cada vez que cambia el sabor o la cantidad</td></tr>
      </table>
      <p><strong>toLocaleString('es-AR')</strong> escribe el número con punto de miles, como se usa en Argentina: 67.500 en vez de 67500.</p>
      <p><strong>Number(...) || 0</strong> evita que aparezca "NaN" (no es un número) si el campo queda vacío.</p>
      <p>Los precios son de ejemplo. Por ejemplo, la calculadora de Sofi le ahorró muchos mensajes: los clientes ya sabían el total antes de escribirle.</p>` },
  ],
  practica: [
    "Cambiá con JavaScript el texto y el color de 2 elementos de tu página y anotá qué selector usaste para cada uno.",
    "Agregá un botón que cuente clics y anotá cuántas líneas de JavaScript te llevó.",
    "Adaptá la calculadora de pedidos a tus productos y precios, y anotá 3 totales que controlaste a mano.",
  ],
  recursos: [
    { t: "MDN Web Docs: el DOM (en español)", url: "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model" },
    { t: "MDN Web Docs: JavaScript (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { t: "freeCodeCamp en español: cursos gratis con certificado", url: "https://www.freecodecamp.org/espanol/learn" },
  ],
  quiz: [
    { q: "Querés encontrar desde JavaScript el elemento con id=\"titulo\". ¿Qué escribís?", opciones: ["document.querySelector('titulo')","document.find('#titulo')","document.querySelector('#titulo')","titulo.querySelector()"], correcta: 2, explicacion: "querySelector usa el mismo selector que el CSS: con # para id. Sin el # tienta, pero buscaría una etiqueta llamada titulo." },
    { q: "Querés todos los elementos con class=\"precio\". ¿Qué usás?", opciones: ["document.querySelectorAll('.precio')","document.querySelector('.precio')","document.precio","querySelectorAll('precio')"], correcta: 0, explicacion: "querySelectorAll trae todos. querySelector tienta, pero trae solo el primero." },
    { q: "Querés cambiar el texto de un párrafo desde JavaScript. ¿Qué propiedad usás?", opciones: ["style","value siempre","length","textContent"], correcta: 3, explicacion: "textContent cambia el texto. value tienta, pero es para campos de formulario." },
    { q: "Tu querySelector devuelve null aunque el elemento existe. ¿Qué pasa, probablemente?", opciones: ["El navegador está roto","El script corre antes de que exista el elemento: hay que ponerlo al final del body","Falta un h1","El CSS lo esconde"], correcta: 1, explicacion: "El script tiene que correr después de que se arme el HTML. \"El navegador está roto\" tienta, pero es el orden." },
    { q: "Querés que un elemento se vea \"activo\". ¿Qué conviene desde JavaScript?", opciones: ["Cambiar diez estilos sueltos con style","Borrar el elemento","Agregarle una clase con classList.add y definir el estilo en el CSS","Cambiar el HTML a mano"], correcta: 2, explicacion: "Con una clase, el CSS se ocupa del aspecto. Los estilos sueltos tientan por rápido, pero mezclan todo." },
    { q: "Querés que algo pase cuando la persona toca un botón. ¿Qué usás?", opciones: ["boton.addEventListener('click', ...)","boton.textContent = 'click'","boton.style.click()","if (boton)"], correcta: 0, explicacion: "addEventListener escucha el evento. textContent tienta porque cambia el botón, pero no reacciona al clic." },
    { q: "Querés actualizar algo cada vez que la persona escribe en un campo. ¿Qué evento escuchás?", opciones: ["submit","load","click","input"], correcta: 3, explicacion: "input pasa con cada cambio de lo escrito. click tienta, pero solo pasa al tocar." },
    { q: "Querés reaccionar cuando se elige otra opción de un select. ¿Qué evento usás?", opciones: ["submit","change","keydown del body","scroll"], correcta: 1, explicacion: "change pasa al elegir otra opción. submit tienta, pero es para enviar formularios." },
    { q: "Leés campo.value de un input con el número 3 y le sumás 1. Te da \"31\". ¿Qué pasó?", opciones: ["El input está roto","JavaScript no sabe sumar","value siempre es texto: hay que convertirlo con Number()","Falta un if"], correcta: 2, explicacion: "El texto se pega en vez de sumarse. \"No sabe sumar\" tienta, pero sumó textos." },
    { q: "Tu calculadora muestra \"NaN\" cuando el campo queda vacío. ¿Qué agregás?", opciones: ["Number(campo.value) || 0","Un h1","Más CSS","Borrar el campo"], correcta: 0, explicacion: "|| 0 usa cero si no hay número. Más CSS tienta, pero el problema es la cuenta." },
    { q: "Querés mostrar 67500 como 67.500, a la argentina. ¿Qué usás?", opciones: ["resultado.length","resultado + '.'","Number(resultado)","resultado.toLocaleString('es-AR')"], correcta: 3, explicacion: "toLocaleString pone el punto de miles según el país. Sumarle un punto tienta, pero lo pondría al final." },
    { q: "En la calculadora, ¿por qué hay dos addEventListener?", opciones: ["Por error, sobra uno","Para recalcular cuando cambia el sabor y cuando cambia la cantidad","Para que cargue más rápido","Para que funcione en el celular"], correcta: 1, explicacion: "Cada uno escucha un campo distinto. \"Sobra uno\" tienta, pero sin él un cambio no actualizaría el total." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu página publicada",
  nivel: "Avanzado",
  objetivos: [
    "Armar una página completa de un emprendimiento o un tema propio",
    "Publicarla gratis en internet con GitHub Pages",
    "Revisarla con una rúbrica de contenido, diseño, accesibilidad y funcionamiento",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es <strong>tu propia página</strong>, de un emprendimiento, un club, un portfolio o un tema que te guste, con todo lo del curso: HTML semántico, CSS adaptable al celular y algo de JavaScript.</p>
      <table>
        <tr><th>Tiene que tener</th><th>Del módulo</th></tr>
        <tr><td>Estructura con header, nav, main, sections y footer</td><td>Estructura y formularios</td></tr>
        <tr><td>Al menos 4 imágenes con alt que las describe</td><td>HTML</td></tr>
        <tr><td>Un archivo de CSS aparte, con colores y letras legibles</td><td>CSS</td></tr>
        <tr><td>Una galería con grid y un menú con flexbox</td><td>Maquetar</td></tr>
        <tr><td>Etiqueta viewport y al menos una media query</td><td>Diseño adaptable</td></tr>
        <tr><td>Algo que funcione con JavaScript (una calculadora, un contador, un filtro)</td><td>JavaScript y el DOM</td></tr>
      </table>
      <pre><code>mi-pagina/
├── index.html
├── estilos.css
├── app.js
└── img/
    ├── torta-chocolate.jpg
    └── ...</code></pre>
      <p><strong>Nombres de archivo sin espacios ni tildes</strong>, en minúsculas y con guiones: torta-chocolate.jpg. Así funcionan igual en tu compu y en el servidor.</p>
      <p><strong>Antes de escribir código, dibujá la página en papel:</strong> qué secciones tiene y en qué orden. Te ahorra horas.</p>
      <p>Por ejemplo, Sofi dibujó su página en una hoja: cabecera con el nombre, galería de tortas, calculadora de pedidos y pie con el contacto. Recién después abrió VS Code.</p>` },
    { titulo: "Publicarla con GitHub Pages", video: {"id":"8IdBAysf-U4","t":"Cómo publicar un sitio web gratis con GitHub Pages · Programación Accesible (2:39)"}, html: `
      <p class="idea"><strong>GitHub Pages</strong> publica gratis una página hecha con HTML, CSS y JavaScript. Subís tus archivos a GitHub y en un par de minutos tenés una dirección para compartir.</p>
      <pre><code>1. Creá una cuenta gratis en github.com.
2. Creá un repositorio nuevo, público (por ejemplo, "tortas-de-sofi").
3. Subí tus archivos: "Add file" → "Upload files".
   El index.html tiene que estar en la raíz, no adentro de otra carpeta.
4. Entrá a Settings → Pages.
5. En "Branch" elegí main y la carpeta / (root), y guardá.
6. En un par de minutos aparece tu dirección:
   https://tu-usuario.github.io/tortas-de-sofi/</code></pre>
      <p>Un <strong>repositorio</strong> es una carpeta de proyecto guardada en GitHub, con el historial de cada cambio. Para cambiar la página, subís el archivo de nuevo y GitHub la vuelve a publicar.</p>
      <table>
        <tr><th>Si pasa esto</th><th>Revisá</th></tr>
        <tr><td>Aparece un error 404</td><td>Que index.html esté en la raíz y se llame así, en minúsculas</td></tr>
        <tr><td>No se ven las imágenes o el CSS</td><td>Mayúsculas y nombres de las rutas: Torta.jpg no es torta.jpg</td></tr>
        <tr><td>No se ven los cambios</td><td>Esperá un par de minutos y recargá con Ctrl + F5</td></tr>
      </table>
      <p><strong>Datos personales:</strong> lo que subís a un repositorio público lo puede ver cualquiera. No subas contraseñas, documentos ni datos de tus clientes.</p>
      <p>Por ejemplo, la página de Sofi daba error 404. Había subido la carpeta entera y el index.html quedó adentro de "mi-pagina/". Subió los archivos sueltos y funcionó.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Antes de dar la página por terminada, revisala con esta <strong>rúbrica</strong>: una lista de criterios con puntaje. Pedile a otra persona que la pruebe en su celular.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Estructura</td><td>Etiquetas semánticas y un solo h1</td><td>Algunas</td><td>Todo con div</td></tr>
        <tr><td>Accesibilidad</td><td>alt en todas las imágenes, labels y se usa con teclado</td><td>Falta una de las tres</td><td>Faltan dos o más</td></tr>
        <tr><td>Diseño</td><td>Legible, con buen contraste y ordenado</td><td>Legible, pero desprolijo</td><td>Cuesta leerla</td></tr>
        <tr><td>Celular</td><td>Se ve bien en el celular, sin deslizar de costado</td><td>Se ve, con algún problema</td><td>Se rompe</td></tr>
        <tr><td>JavaScript</td><td>Algo funciona y no hay errores en la consola (F12)</td><td>Funciona con errores</td><td>No hay o no funciona</td></tr>
        <tr><td>Publicada</td><td>Tiene dirección y funciona en otro celular</td><td>Solo en tu compu</td><td>No está terminada</td></tr>
      </table>
      <pre><code>Máximo: 12 puntos
10 a 12 → lista para compartir
7 a 9   → arreglá los criterios con 0 o 1
0 a 6   → volvé a los módulos de lo que te costó</code></pre>
      <p><strong>La consola de errores:</strong> con F12, pestaña Consola, ves en rojo los errores de JavaScript, con el archivo y la línea. Es lo primero que se mira cuando algo no funciona.</p>
      <p><strong>Para seguir aprendiendo:</strong> MDN Web Docs es la referencia más completa en español, y freeCodeCamp tiene cursos gratis con certificado. Este sitio también tiene un curso de Git.</p>
      <p>Por ejemplo, Sofi sacó 10: su página se rompía un poco en el celular porque una tabla de precios era muy ancha. La cambió por tarjetas con grid y llegó a 12.</p>` },
  ],
  practica: [
    "Dibujá tu página en papel con sus secciones y armá la carpeta con index.html, estilos.css, app.js e img; anotá cuántos archivos tiene.",
    "Publicá tu página con GitHub Pages y anotá la dirección y cuántos minutos tardó en aparecer.",
    "Revisá tu página con la rúbrica, pedile a otra persona que la pruebe en su celular y anotá tu puntaje sobre 12.",
  ],
  recursos: [
    { t: "GitHub Docs: empezar con GitHub Pages (en español)", url: "https://docs.github.com/es/pages/getting-started-with-github-pages" },
    { t: "MDN Web Docs: aprender desarrollo web (en español)", url: "https://developer.mozilla.org/es/docs/Learn_web_development" },
    { t: "freeCodeCamp en español: cursos gratis con certificado", url: "https://www.freecodecamp.org/espanol/learn" },
  ],
  quiz: [
    { q: "Si vas a nombrar la foto de una torta, ¿qué nombre conviene?", opciones: ["Torta De Chocolate.JPG","torta chocolate final (2).jpg","torta-chocolate.jpg","tórta.jpg"], correcta: 2, explicacion: "Minúsculas, sin espacios ni tildes y con guiones. El nombre con espacios tienta por legible, pero falla en el servidor." },
    { q: "Antes de escribir código de tu página, ¿qué conviene hacer?", opciones: ["Dibujarla en papel con sus secciones","Elegir los colores más raros","Nada, empezar directo","Publicarla vacía"], correcta: 0, explicacion: "El dibujo ordena el trabajo. Empezar directo tienta por ganas, pero después hay que rehacer." },
    { q: "Tu proyecto tiene que tener algo con JavaScript. ¿Cuál de estos sirve?", opciones: ["Un título en h1","Un color de fondo","Una imagen con alt","Una calculadora de pedidos que funciona"], correcta: 3, explicacion: "La calculadora usa JavaScript. El color tienta, pero es CSS." },
    { q: "Querés publicar tu página gratis con HTML, CSS y JavaScript. ¿Qué podés usar?", opciones: ["Un pendrive","GitHub Pages","Mandar el archivo por WhatsApp","Imprimirla"], correcta: 1, explicacion: "GitHub Pages la publica con una dirección. WhatsApp tienta por rápido, pero no la publica." },
    { q: "En GitHub Pages, ¿dónde tiene que estar el index.html?", opciones: ["Adentro de una carpeta cualquiera","En la carpeta img","En la raíz del repositorio","No hace falta"], correcta: 2, explicacion: "Pages busca el index.html en la raíz. Adentro de una carpeta tienta, pero da error 404." },
    { q: "Publicaste y aparece un error 404. ¿Qué revisás primero?", opciones: ["Que index.html esté en la raíz y se llame así, en minúsculas","El color de fondo","El tamaño de la letra","El alt de las fotos"], correcta: 0, explicacion: "El 404 dice que no encontró la página. El alt tienta, pero no impide que se encuentre." },
    { q: "En tu compu se ven las imágenes, pero publicadas no. ¿Qué revisás?", opciones: ["Que el h1 sea grande","Que la página tenga footer","Que el CSS tenga colores","Que los nombres coincidan exactamente, con mayúsculas y minúsculas"], correcta: 3, explicacion: "En el servidor Torta.jpg y torta.jpg son distintos. El footer tienta, pero no tiene que ver." },
    { q: "Subiste un cambio y no lo ves en la página publicada. ¿Qué hacés?", opciones: ["Borrás el repositorio","Esperás un par de minutos y recargás con Ctrl + F5","Creás otra cuenta","Nada, no se puede cambiar"], correcta: 1, explicacion: "La publicación tarda un poco y el navegador guarda la versión vieja. Borrar el repositorio tienta, pero no hace falta." },
    { q: "Tu repositorio es público. ¿Qué no subís?", opciones: ["Las fotos de tus productos","El CSS","Contraseñas, documentos y datos de tus clientes","El index.html"], correcta: 2, explicacion: "Lo público lo ve cualquiera. Las fotos tientan como riesgo, pero son para mostrar." },
    { q: "Algo de JavaScript no funciona en tu página. ¿Dónde mirás primero?", opciones: ["En la consola de errores, con F12","En el título de la pestaña","En el CSS","En las imágenes"], correcta: 0, explicacion: "La consola muestra el error, el archivo y la línea. El CSS tienta, pero no da errores de JavaScript." },
    { q: "Tu página se ve bien en la compu, pero se desliza de costado en el celular. ¿Cuánto sacás en \"Celular\"?", opciones: ["2: en la compu anda","No se evalúa","3","1 o 0: hay que arreglarlo"], correcta: 3, explicacion: "El criterio es el celular. 2 tienta porque en la compu anda, pero la mayoría entra desde el celular." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["La compartís igual","Arreglás los criterios con 0 o 1 y la revisás de nuevo","Empezás otra página de cero","Cambiás la rúbrica"], correcta: 1, explicacion: "Entre 7 y 9 se arreglan los puntos flojos. Empezar de cero tienta, pero tirás lo que ya está bien." },
  ],
},
];
