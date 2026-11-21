// Temario del curso "JavaScript desde cero". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js javascript y node tools/metodologia.js javascript
window.TEMARIO = [
{
  id: "empezar",
  icono: "🚀",
  titulo: "Dónde corre JavaScript",
  nivel: "Básico",
  objetivos: [
    "Correr JavaScript en el laboratorio del curso y en la consola del navegador",
    "Mostrar resultados con console.log y leer la salida",
    "Leer un mensaje de error y encontrar la línea que lo causa",
  ],
  lecciones: [
    { titulo: "El laboratorio y la consola", video: {"id":"fxfeGzQDcS4","t":"Introducción a DevTools de Chrome en español · OpenWebinars (5:11)"}, html: `
      <p class="idea"><strong>JavaScript</strong> es el lenguaje de programación de la web: corre en cualquier navegador. En este curso lo probás en el <strong>laboratorio</strong> (el botón "Probar este código") y en la <strong>consola</strong> del navegador.</p>
      <p>En todo el curso acompañamos a <strong>Nico</strong>, de Mendoza, que hizo el curso de desarrollo web y ahora quiere armar una app para anotar los gastos de su casa y la lista del súper, con JavaScript de verdad.</p>
      <pre class="web"><code>console.log('Hola, soy Nico');
console.log(2 + 3);
console.log('El súper salió', 15000 + 8500, 'pesos');</code></pre>
      <pre><code>Salida:
Hola, soy Nico
5
El súper salió 23500 pesos</code></pre>
      <table>
        <tr><th>Dónde</th><th>Cómo se abre</th><th>Para qué</th></tr>
        <tr><td>Laboratorio del curso</td><td>Botón "Probar este código" debajo de cada ejemplo</td><td>Cambiar los ejemplos y ver qué pasa</td></tr>
        <tr><td>Consola del navegador</td><td>F12 (o clic derecho → Inspeccionar) → pestaña Consola</td><td>Probar una línea rápida en cualquier página</td></tr>
        <tr><td>Un archivo .html propio</td><td>Tu editor y el navegador, como en el curso de web</td><td>Tus proyectos de verdad</td></tr>
      </table>
      <p><strong>console.log</strong> muestra en la consola lo que le pongas entre paréntesis. Si le pasás varias cosas separadas por coma, las muestra separadas por un espacio. Es tu forma de "ver" qué hace el programa.</p>
      <p><strong>El bloque "Salida:"</strong> que aparece después de cada ejemplo es exactamente lo que se ve al correrlo. Todos se probaron automáticamente.</p>
      <p><strong>Si venís del curso de web:</strong> ahí viste lo básico de JavaScript para una página. Acá vas más a fondo: textos, listas, objetos, funciones y guardar datos.</p>
      <p>Por ejemplo, Nico abrió la consola en la página de su banco (F12) y escribió 15000 + 8500: la consola le respondió 23500 al instante. Es una calculadora con superpoderes.</p>` },
    { titulo: "Variables: let y const", html: `
      <p class="idea">Una <strong>variable</strong> es un nombre que guarda un dato. Con <strong>const</strong> el dato no se puede reemplazar; con <strong>let</strong>, sí.</p>
      <pre class="web"><code>const nombre = 'Nico';
let gastado = 0;
gastado = gastado + 12000;   // verdulería
gastado += 8000;             // carnicería (+= suma y guarda)
console.log(nombre, 'gastó', gastado);</code></pre>
      <pre><code>Salida:
Nico gastó 20000</code></pre>
      <pre class="web"><code>const presupuesto = 50000;
presupuesto = 60000;</code></pre>
      <pre><code>Error:
TypeError: Assignment to constant variable.</code></pre>
      <table>
        <tr><th>Declaración</th><th>¿Se puede reemplazar?</th><th>Cuándo usarla</th></tr>
        <tr><td>const</td><td>No</td><td>Por defecto: la mayoría de los datos</td></tr>
        <tr><td>let</td><td>Sí</td><td>Contadores, totales, algo que cambia</td></tr>
        <tr><td>var</td><td>Sí</td><td>Forma vieja: no la uses en código nuevo</td></tr>
      </table>
      <p><strong>Empezá con const</strong> y cambiala a let solo si necesitás reemplazar el valor. Así el error de arriba te avisa si cambiás algo sin querer.</p>
      <p><strong>Nombres:</strong> sin espacios ni tildes, empezando con letra. Para juntar palabras se usa <strong>camelCase</strong>: la primera en minúscula y las demás con mayúscula (totalDelMes, precioConIva).</p>
      <p>Por ejemplo, Nico guardó el presupuesto del mes en una const. Cuando un día escribió presupuesto = 0 por error, la consola le avisó enseguida en vez de borrarle el dato.</p>` },
    { titulo: "Leer los errores", html: `
      <p class="idea">Cuando algo falla, JavaScript muestra un <strong>error</strong> en la consola con el tipo, un mensaje y la línea. Leerlo con calma ahorra horas.</p>
      <pre class="web"><code>const precio = 1500;
console.log(precio * cantidad);</code></pre>
      <pre><code>Error:
ReferenceError: cantidad is not defined</code></pre>
      <table>
        <tr><th>Error</th><th>Qué significa</th><th>Causa típica</th></tr>
        <tr><td>ReferenceError: x is not defined</td><td>Usás un nombre que no existe</td><td>Variable mal escrita o sin declarar</td></tr>
        <tr><td>TypeError: x is not a function</td><td>Llamás con () algo que no es una función</td><td>consol.log, un nombre equivocado</td></tr>
        <tr><td>TypeError: Cannot read properties of undefined</td><td>Pedís algo de un dato que no existe</td><td>Un elemento que no se encontró, un índice fuera de la lista</td></tr>
        <tr><td>SyntaxError</td><td>El código está mal escrito</td><td>Falta un paréntesis, una llave o una comilla</td></tr>
      </table>
      <pre><code>Cómo leer un error:
1. Mirá el tipo (ReferenceError, TypeError, SyntaxError).
2. Leé el mensaje: casi siempre nombra lo que falla ("cantidad").
3. Buscá la línea (en la consola aparece a la derecha, por ejemplo app.js:2).
4. Arreglá ese primer error y volvé a probar.</code></pre>
      <p><strong>Los mensajes están en inglés,</strong> pero son siempre los mismos: con 5 o 6 aprendidos, entendés casi todo. "is not defined" es "no está definido"; "is not a function", "no es una función".</p>
      <p><strong>Un error no rompe nada:</strong> es el programa diciéndote dónde mirar. Equivocarse es parte de programar.</p>
      <p>Por ejemplo, a Nico le salía "cantidad is not defined". Miró la línea y vio que había escrito "cantidad" pero la variable se llamaba "cant". Las cambió por el mismo nombre y funcionó.</p>` },
  ],
  practica: [
    "Corré el primer ejemplo en el laboratorio, cambiá los números y anotá qué mostró la última línea.",
    "Abrí la consola del navegador (F12) en cualquier página, escribí 3 cuentas y anotá los resultados.",
    "Escribí a propósito un nombre de variable mal y anotá el tipo de error y el mensaje que aparece.",
  ],
  recursos: [
    { t: "Chrome DevTools: la consola (en inglés)", url: "https://developer.chrome.com/docs/devtools/console" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
    { t: "Curso de este sitio: Desarrollo web desde cero", url: "https://pkeios.github.io/EiaLearning/web/" },
  ],
  quiz: [
    { q: "Querés probar una cuenta rápida en cualquier página web. ¿Dónde la escribís?", opciones: ["En la barra de direcciones","En un mail","En la consola del navegador (F12)","En el buscador de Google"], correcta: 2, explicacion: "La consola corre JavaScript. El buscador tienta porque también hace cuentas, pero no corre tu código." },
    { q: "Si escribís console.log('Total:', 100 + 50), ¿qué se muestra?", opciones: ["Total: 150","Total: 100 + 50","Total:,150","'Total:' 150"], correcta: 0, explicacion: "Primero se calcula la cuenta y las partes se separan con un espacio. \"100 + 50\" tienta, pero la cuenta se resuelve antes." },
    { q: "Tenés un total que va a ir cambiando. ¿Cómo lo declarás?", opciones: ["const total = 0;","var total = 0; siempre","total = 0; sin nada","let total = 0;"], correcta: 3, explicacion: "Si cambia, let. const tienta por ser la recomendada, pero no deja reemplazar el valor." },
    { q: "Si gastado vale 12000 y escribís gastado += 8000, ¿cuánto vale después?", opciones: ["8000","20000","12000","120008000"], correcta: 1, explicacion: "+= suma y guarda. 8000 tienta si lo leés como \"es igual a 8000\"." },
    { q: "Si escribís presupuesto = 60000 y presupuesto era una const, ¿qué pasa?", opciones: ["Se reemplaza sin problema","Se suma 60000","Da TypeError: no se puede reemplazar una const","Se convierte en let sola"], correcta: 2, explicacion: "const no deja reemplazar. \"Se reemplaza\" tienta, pero justamente ese es el aviso de const." },
    { q: "Querés nombrar una variable \"total del mes\". ¿Cómo la escribís?", opciones: ["totalDelMes","total del mes","Total-Del-Mes","totál_mes"], correcta: 0, explicacion: "camelCase, sin espacios ni tildes. Con espacios tienta por legible, pero no se puede." },
    { q: "Te aparece \"ReferenceError: cantidad is not defined\". ¿Qué revisás?", opciones: ["El color de la página","Si falta una coma en el texto","Si la compu tiene internet","Si la variable cantidad existe y está bien escrita"], correcta: 3, explicacion: "El nombre no existe. La coma tienta como causa común, pero el mensaje habla de un nombre." },
    { q: "Escribiste consol.log('hola') y aparece un TypeError. ¿Qué pasó?", opciones: ["El texto está mal","consol no existe como lo escribiste: falta la e de console","La consola está rota","Falta un punto y coma"], correcta: 1, explicacion: "Es un nombre mal escrito. El punto y coma tienta, pero el error es el nombre." },
    { q: "Si te aparece un SyntaxError, ¿qué buscás primero?", opciones: ["Una variable sin valor","Un número muy grande","Un paréntesis, una llave o una comilla sin cerrar","Un error de internet"], correcta: 2, explicacion: "SyntaxError es código mal escrito. La variable sin valor tienta, pero eso da otro error." },
    { q: "Si hay 4 errores en la consola, ¿por cuál empezás?", opciones: ["Por el primero","Por el último","Por el más largo","Por ninguno"], correcta: 0, explicacion: "Muchos errores son consecuencia del primero. El último tienta por estar más a la vista." },
    { q: "¿Dónde dice la consola en qué línea está el error?", opciones: ["En el título de la pestaña","No lo dice nunca","En la barra de direcciones","A la derecha del mensaje, como app.js:2"], correcta: 3, explicacion: "El archivo y la línea aparecen junto al error. \"No lo dice\" tienta si no lo viste, pero está." },
    { q: "Si ves \"Salida:\" después de un ejemplo del curso, ¿qué es?", opciones: ["Otro ejemplo para copiar","Lo que se ve exactamente al correrlo","Un error a propósito","Una explicación del autor"], correcta: 1, explicacion: "Es el resultado real, probado. El error a propósito tienta, pero esos dicen \"Error:\"." },
  ],
},
{
  id: "textos",
  icono: "🔤",
  titulo: "Textos y números",
  nivel: "Básico",
  objetivos: [
    "Usar los métodos de texto más comunes: length, toUpperCase, includes, slice, trim",
    "Armar mensajes con plantillas de texto",
    "Convertir textos en números y redondear sin caer en las trampas de los decimales",
  ],
  lecciones: [
    { titulo: "Trabajar con textos", video: {"id":"s-C8OpALC6E","t":"Strings: cadenas de texto y sus métodos · jonmircha (16:11)"}, html: `
      <p class="idea">Un texto (en inglés <strong>string</strong>) va entre comillas y trae <strong>métodos</strong>: funciones que se escriben después de un punto y hacen algo con ese texto.</p>
      <pre class="web"><code>const producto = '  Yerba Mate 1 kg  ';
const limpio = producto.trim();
console.log(limpio);
console.log(limpio.length);
console.log(limpio.toUpperCase());
console.log(limpio.includes('Mate'));
console.log(limpio.slice(0, 4));
console.log(limpio.replace('1 kg', '500 g'));</code></pre>
      <pre><code>Salida:
Yerba Mate 1 kg
15
YERBA MATE 1 KG
true
Yerb
Yerba Mate 500 g</code></pre>
      <table>
        <tr><th>Método</th><th>Qué hace</th></tr>
        <tr><td>.trim()</td><td>Saca los espacios del principio y del final</td></tr>
        <tr><td>.length</td><td>Cuántos caracteres tiene (va sin paréntesis: es una propiedad)</td></tr>
        <tr><td>.toUpperCase() / .toLowerCase()</td><td>Todo en mayúsculas / en minúsculas</td></tr>
        <tr><td>.includes('x')</td><td>true si contiene ese texto</td></tr>
        <tr><td>.slice(desde, hasta)</td><td>Un pedazo: desde la posición indicada hasta antes de la otra</td></tr>
        <tr><td>.replace('a', 'b')</td><td>Cambia la primera aparición de a por b</td></tr>
      </table>
      <p><strong>Las posiciones empiezan en 0:</strong> en 'Yerba', la Y es la posición 0. Por eso slice(0, 4) da 'Yerb': las posiciones 0, 1, 2 y 3.</p>
      <p><strong>Los métodos no cambian el original:</strong> producto.trim() devuelve un texto nuevo; producto sigue con sus espacios. Si querés usar el resultado, guardalo en otra variable.</p>
      <p>Por ejemplo, Nico buscaba en su lista si había "yerba", pero no la encontraba porque la había anotado como "Yerba". Usó toLowerCase() en los dos lados antes de comparar.</p>` },
    { titulo: "Plantillas de texto", html: `
      <p class="idea">Las <strong>plantillas de texto</strong> se escriben entre comillas invertidas (la tecla al lado del Enter o con Alt Gr) y dejan meter variables adentro con <strong>\${ }</strong>. Son más fáciles de leer que sumar textos.</p>
      <pre class="web"><code>const nombre = 'Nico';
const total = 23500;
const items = 7;

// sumando textos (forma vieja)
console.log('Hola ' + nombre + ', compraste ' + items + ' cosas por $' + total);

// con plantilla de texto
console.log(&#96;Hola \${nombre}, compraste \${items} cosas por $\${total}&#96;);
console.log(&#96;Promedio por cosa: $\${total / items}&#96;);</code></pre>
      <pre><code>Salida:
Hola Nico, compraste 7 cosas por $23500
Hola Nico, compraste 7 cosas por $23500
Promedio por cosa: $3357.1428571428573</code></pre>
      <table>
        <tr><th>Sumando textos</th><th>Plantilla</th></tr>
        <tr><td>Muchos + y comillas</td><td>Un solo texto</td></tr>
        <tr><td>Fácil olvidarse un espacio</td><td>Se ve tal cual va a salir</td></tr>
        <tr><td>Solo en una línea</td><td>Puede ocupar varias líneas</td></tr>
      </table>
      <p><strong>Adentro de \${ } va cualquier cuenta o expresión,</strong> como total / items. Una <strong>expresión</strong> es cualquier cosa que da un valor.</p>
      <p><strong>Ese promedio tiene demasiados decimales:</strong> en la próxima lección vas a ver cómo redondearlo.</p>
      <p><strong>En teclados en español,</strong> la comilla invertida suele estar en la tecla de la llave de cierre y sale apretando dos veces o con Alt Gr. En el celular, manteniendo apretada la comilla simple.</p>
      <p>Por ejemplo, Nico armaba el mensaje de WhatsApp para su familia sumando textos y siempre se le pegaban las palabras. Con una plantilla, el mensaje salió perfecto a la primera.</p>` },
    { titulo: "Números, decimales y conversiones", html: `
      <p class="idea">Los números en JavaScript tienen dos trampas: <strong>los decimales no siempre son exactos</strong> y <strong>un número entre comillas es un texto</strong>. Conocerlas evita errores con la plata.</p>
      <pre class="web"><code>console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));
console.log(Math.round(3357.14));
console.log('5' + 1);
console.log(Number('5') + 1);
console.log(Number('cinco'));</code></pre>
      <pre><code>Salida:
0.30000000000000004
0.30
3357
51
6
NaN</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th><th>Ejemplo</th></tr>
        <tr><td>.toFixed(2)</td><td>Texto con 2 decimales, redondeado</td><td>(2.567).toFixed(2) → '2.57'</td></tr>
        <tr><td>Math.round(x)</td><td>Redondea al entero más cercano</td><td>Math.round(2.5) → 3</td></tr>
        <tr><td>Math.floor(x) / Math.ceil(x)</td><td>Redondea para abajo / para arriba</td><td>Math.ceil(2.1) → 3</td></tr>
        <tr><td>Number('5')</td><td>Convierte texto en número</td><td>Number('5') → 5</td></tr>
        <tr><td>NaN</td><td>"Not a Number": no se pudo convertir</td><td>Number('cinco') → NaN</td></tr>
      </table>
      <p><strong>¿Por qué 0.1 + 0.2 no da 0.3?</strong> Las computadoras guardan los decimales en binario y algunos no se pueden representar exactos. Pasa en casi todos los lenguajes. Para mostrar plata, redondeá con toFixed(2); para cuentas muy exactas, trabajá en centavos (enteros).</p>
      <p><strong>Lo que escribe una persona en un formulario siempre llega como texto,</strong> aunque sea un número. Antes de sumar, convertilo con Number(). Si no, '5' + 1 da '51'.</p>
      <p>Por ejemplo, la app de Nico sumaba los gastos del formulario y le daba "120008000" en lugar de 20000: estaba pegando textos. Con Number() antes de sumar, la cuenta dio bien.</p>` },
  ],
  practica: [
    "Usá trim, toUpperCase e includes con el nombre de 3 productos y anotá qué devolvió cada método.",
    "Armá con una plantilla de texto el mensaje \"Compraste N cosas por $X\" con tus datos y anotá cómo quedó.",
    "Probá '10' + 5 y Number('10') + 5 en el laboratorio y anotá los dos resultados.",
  ],
  recursos: [
    { t: "MDN Web Docs: String, todos los métodos de texto (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
    { t: "MDN Web Docs: guía de JavaScript (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" },
  ],
  quiz: [
    { q: "Un producto quedó guardado como '  Arroz  ' con espacios. ¿Qué método usás?", opciones: [".length",".toUpperCase()",".trim()",".slice()"], correcta: 2, explicacion: "trim saca los espacios de los bordes. length tienta, pero solo cuenta." },
    { q: "Si escribís 'Yerba'.length, ¿qué da?", opciones: ["5","4","6","'Yerba'"], correcta: 0, explicacion: "Tiene 5 caracteres. 4 tienta si confundís con la última posición (que es 4)." },
    { q: "Querés saber si un texto contiene la palabra \"Mate\". ¿Qué usás?", opciones: [".replace('Mate')",".trim('Mate')",".length('Mate')",".includes('Mate')"], correcta: 3, explicacion: "includes da true o false. replace tienta porque nombra la palabra, pero la cambia." },
    { q: "Si escribís 'Yerba Mate'.slice(0, 4), ¿qué da?", opciones: ["'Yerba'","'Yerb'","'erba'","'Yer'"], correcta: 1, explicacion: "Desde la posición 0 hasta antes de la 4: Y, e, r, b. \"Yerba\" tienta, pero la 4 no se incluye." },
    { q: "Usaste producto.trim() pero producto sigue con espacios. ¿Por qué?", opciones: ["trim no funciona","Hay que escribirlo dos veces","Los métodos devuelven un texto nuevo: hay que guardarlo","Hay que usar let"], correcta: 2, explicacion: "El original no cambia. \"trim no funciona\" tienta, pero sí funciona: el resultado se perdió." },
    { q: "Buscás \"yerba\" y en la lista está \"Yerba\". ¿Qué hacés?", opciones: ["Pasás los dos a minúsculas con toLowerCase() antes de comparar","Nada, se encuentra igual","Borrás la lista","Usás length"], correcta: 0, explicacion: "Las comparaciones distinguen mayúsculas. \"Se encuentra igual\" tienta, pero no la encuentra." },
    { q: "Querés meter una variable adentro de un texto sin usar +. ¿Qué usás?", opciones: ["Comillas simples con ${ }","Comillas dobles con { }","Paréntesis","Una plantilla con comillas invertidas y ${ }"], correcta: 3, explicacion: "${ } solo funciona con comillas invertidas. Las simples tientan, pero muestran el texto tal cual." },
    { q: "Si escribís console.log(0.1 + 0.2), ¿qué muestra?", opciones: ["0.3","0.30000000000000004","0.30","Error"], correcta: 1, explicacion: "Los decimales no siempre son exactos. 0.3 tienta porque es la cuenta, pero la compu da otra cosa." },
    { q: "Querés mostrar un precio con 2 decimales. ¿Qué usás?", opciones: ["Math.round",".length",".toFixed(2)","Number()"], correcta: 2, explicacion: "toFixed deja 2 decimales. Math.round tienta, pero deja sin decimales." },
    { q: "Si escribís '5' + 1, ¿qué da?", opciones: ["'51'","6","Error","NaN"], correcta: 0, explicacion: "Con un texto, + pega. 6 tienta porque parecen números, pero '5' es texto." },
    { q: "Tu formulario suma gastos y da \"120008000\". ¿Qué falta?", opciones: ["Usar const","Usar toUpperCase()","Más paréntesis","Convertir cada valor con Number() antes de sumar"], correcta: 3, explicacion: "Lo que viene de un formulario es texto. Más paréntesis tienta, pero sigue pegando textos." },
    { q: "Number('cinco') da NaN. ¿Qué significa?", opciones: ["Que vale cero","Que no se pudo convertir en número","Que es un número muy grande","Que es nulo"], correcta: 1, explicacion: "NaN es \"Not a Number\". \"Vale cero\" tienta, pero cero sería 0." },
  ],
},
{
  id: "decisiones",
  icono: "🔀",
  titulo: "Decisiones",
  nivel: "Intermedio",
  objetivos: [
    "Comparar con === y !== sin caer en la trampa de ==",
    "Combinar condiciones con &&, || y !",
    "Elegir entre if, else if y el operador ternario",
  ],
  lecciones: [
    { titulo: "Comparar bien: ===", html: `
      <p class="idea">Para comparar usá <strong>===</strong> (igual) y <strong>!==</strong> (distinto). Comparan el valor <strong>y el tipo</strong>: así '5' (texto) no es igual a 5 (número).</p>
      <pre class="web"><code>console.log(5 === 5);
console.log('5' === 5);
console.log('5' == 5);
console.log(10 &gt; 3);
console.log('Nico' !== 'nico');</code></pre>
      <pre><code>Salida:
true
false
true
true
true</code></pre>
      <table>
        <tr><th>Operador</th><th>Pregunta</th></tr>
        <tr><td>===</td><td>¿Igual valor y tipo?</td></tr>
        <tr><td>!==</td><td>¿Distinto?</td></tr>
        <tr><td>&gt; &lt; &gt;= &lt;=</td><td>Mayor, menor, mayor o igual, menor o igual</td></tr>
        <tr><td>== (evitalo)</td><td>Igual después de convertir tipos: da sorpresas</td></tr>
      </table>
      <p><strong>¿Por qué evitar ==?</strong> Convierte los tipos antes de comparar y da resultados raros: '' == 0 da true. Con === no hay sorpresas.</p>
      <p><strong>Un solo = guarda,</strong> como viste en variables. Comparar es === (tres iguales).</p>
      <p>Por ejemplo, la app de Nico comparaba la cantidad del formulario ('0', texto) con 0 usando ===, y nunca daba igual. Convirtió con Number() primero y la comparación funcionó.</p>` },
    { titulo: "if, else if, else", html: `
      <p class="idea"><strong>if</strong> ejecuta un bloque si la condición es verdadera. Con <strong>else if</strong> agregás más casos, y <strong>else</strong> atrapa todo lo demás. Se revisan en orden y entra en el primero que se cumple.</p>
      <pre class="web"><code>const gastado = 42000;
const presupuesto = 50000;
const resto = presupuesto - gastado;

if (resto &lt; 0) {
  console.log('Te pasaste del presupuesto');
} else if (resto &lt; 10000) {
  console.log(&#96;Ojo: quedan solo $\${resto}&#96;);
} else {
  console.log('Vas bien');
}</code></pre>
      <pre><code>Salida:
Ojo: quedan solo $8000</code></pre>
      <pre class="web"><code>const hora = 21;
const esFeriado = false;
const abierto = hora &gt;= 8 &amp;&amp; hora &lt; 22 &amp;&amp; !esFeriado;
console.log(abierto ? 'Súper abierto' : 'Súper cerrado');</code></pre>
      <pre><code>Salida:
Súper abierto</code></pre>
      <table>
        <tr><th>Operador</th><th>Verdadero si...</th></tr>
        <tr><td>a &amp;&amp; b</td><td>a y b son verdaderas</td></tr>
        <tr><td>a || b</td><td>al menos una es verdadera</td></tr>
        <tr><td>!a</td><td>a es falsa</td></tr>
        <tr><td>condición ? x : y</td><td>Ternario: si se cumple da x, si no da y</td></tr>
      </table>
      <p><strong>El ternario</strong> es un if corto para elegir entre dos valores. Si hay más de dos casos o mucho código, mejor if.</p>
      <p>Por ejemplo, Nico agregó el aviso de "Ojo" cuando le quedan menos de $10.000. Lo probó con gastos de 55000, 42000 y 20000 para ver los tres mensajes.</p>` },
    { titulo: "Verdadero, falso y valores vacíos", html: `
      <p class="idea">En un if, JavaScript convierte cualquier valor en verdadero o falso. Algunos valores cuentan como <strong>falsos</strong>: 0, '' (texto vacío), null, undefined y NaN. Todo lo demás es verdadero.</p>
      <pre class="web"><code>const nombre = '';
if (!nombre) {
  console.log('Falta el nombre');
}

const cantidad = Number('3');
if (cantidad) {
  console.log('Hay', cantidad);
}

const apodo = '' || 'Sin apodo';
console.log(apodo);</code></pre>
      <pre><code>Salida:
Falta el nombre
Hay 3
Sin apodo</code></pre>
      <table>
        <tr><th>Valores falsos (falsy)</th><th>Por qué importan</th></tr>
        <tr><td>'' (texto vacío)</td><td>Un campo del formulario sin completar</td></tr>
        <tr><td>0</td><td>Ojo: 0 puede ser una cantidad válida</td></tr>
        <tr><td>null y undefined</td><td>"No hay dato": algo que no existe o no se cargó</td></tr>
        <tr><td>NaN</td><td>Una conversión a número que falló</td></tr>
      </table>
      <p><strong>undefined</strong> es el valor de algo que no tiene valor todavía (una variable sin asignar, una propiedad que no existe). <strong>null</strong> es "vacío a propósito".</p>
      <p><strong>|| para un valor por defecto:</strong> a || b da a si es verdadero, y si no, b. Sirve para "si no completó el apodo, poné Sin apodo".</p>
      <p><strong>Cuidado con el 0:</strong> si "cantidad 0" es válido, if (cantidad) lo trata como falso. En ese caso compará explícito: cantidad === 0.</p>
      <p>Por ejemplo, Nico validó el formulario de gastos con if (!descripcion): si la persona no escribía nada, aparecía "Falta la descripción".</p>` },
  ],
  practica: [
    "Probá '5' === 5 y '5' == 5 en el laboratorio y anotá los dos resultados y por qué difieren.",
    "Cambiá el gasto del ejemplo del presupuesto a 3 valores que muestren los 3 mensajes y anotá cuáles usaste.",
    "Probá en un if los valores 0, '', 'hola' y 5 y anotá cuáles cuentan como verdaderos.",
  ],
  recursos: [
    { t: "MDN Web Docs: control de flujo y manejo de errores (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
    { t: "MDN Web Docs: guía de JavaScript (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" },
  ],
  quiz: [
    { q: "Si escribís '5' === 5, ¿qué da?", opciones: ["true","Error","false: son de distinto tipo","5"], correcta: 2, explicacion: "=== compara también el tipo. true tienta porque el valor parece el mismo." },
    { q: "Querés comparar dos valores sin sorpresas. ¿Qué usás?", opciones: ["===","==","=","=>"], correcta: 0, explicacion: "== convierte tipos y da resultados raros. = tienta, pero guarda." },
    { q: "Si escribís if (total = 0), ¿qué pasa?", opciones: ["Compara bien","Da siempre true","No pasa nada","Guarda 0 en total: para comparar es ==="], correcta: 3, explicacion: "Un = guarda. \"Compara bien\" tienta, pero borra el total." },
    { q: "Si resto vale 8000 y la cadena es resto < 0, resto < 10000, else, ¿qué mensaje sale?", opciones: ["El de resto < 0","El de resto < 10000","El del else","Los tres"], correcta: 1, explicacion: "Entra en el primero que se cumple. \"Los tres\" tienta, pero sale de la cadena." },
    { q: "El súper abre de 8 a 22 y no en feriados. ¿Qué condición usás?", opciones: ["hora >= 8 || hora < 22","8 <= hora < 22","hora >= 8 && hora < 22 && !esFeriado","hora === 8"], correcta: 2, explicacion: "Se tienen que cumplir todas: &&. || tienta, pero alcanzaría con una." },
    { q: "Querés elegir entre dos textos en una línea. ¿Qué usás?", opciones: ["El ternario: condición ? x : y","Un for","Un switch obligatorio","=="], correcta: 0, explicacion: "El ternario elige entre dos valores. switch tienta, pero es para muchos casos." },
    { q: "Tu condición tiene 5 casos y mucho código en cada uno. ¿Ternario o if?", opciones: ["Ternarios anidados","Cinco ternarios en una línea","Ninguno","if con else if"], correcta: 3, explicacion: "Con muchos casos, if es más claro. Los ternarios anidados tientan por cortos, pero cuestan leer." },
    { q: "Si nombre es '' (vacío), ¿qué da !nombre?", opciones: ["false","true","''","Error"], correcta: 1, explicacion: "El texto vacío cuenta como falso, y ! lo invierte. false tienta si leés nombre como \"existe\"." },
    { q: "Escribís const apodo = '' || 'Sin apodo'. ¿Qué guarda?", opciones: ["''","true","'Sin apodo'","Error"], correcta: 2, explicacion: "Como el primero es falso, || da el segundo. '' tienta porque es el primero." },
    { q: "Una cantidad puede ser 0 y es válida. ¿Por qué no usar if (cantidad)?", opciones: ["Porque 0 cuenta como falso y lo trataría como vacío","Porque 0 da error","Porque if no acepta números","No hay problema"], correcta: 0, explicacion: "0 es falsy. \"No hay problema\" tienta, pero el 0 válido se pierde." },
    { q: "Si una variable no tiene valor asignado todavía, ¿qué vale?", opciones: ["0","''","null siempre","undefined"], correcta: 3, explicacion: "Sin asignar es undefined. null tienta, pero null es \"vacío a propósito\"." },
    { q: "Querés avisar si falta la descripción del gasto. ¿Qué condición usás?", opciones: ["if (descripcion)","if (!descripcion)","if (descripcion = '')","if (descripcion > 0)"], correcta: 1, explicacion: "!descripcion es verdadero si está vacía. if (descripcion) tienta, pero es lo contrario." },
  ],
},
{
  id: "funciones",
  icono: "🧩",
  titulo: "Funciones",
  nivel: "Intermedio",
  objetivos: [
    "Escribir funciones con parámetros, valores por defecto y return",
    "Usar funciones flecha para funciones cortas",
    "Pasar una función como dato a otra función",
  ],
  lecciones: [
    { titulo: "Crear y usar funciones", html: `
      <p class="idea">Una <strong>función</strong> es un bloque de código con nombre que recibe datos (<strong>parámetros</strong>), hace una tarea y puede <strong>devolver</strong> un resultado con return.</p>
      <pre class="web"><code>function conDescuento(precio, porcentaje = 10) {
  const descuento = precio * porcentaje / 100;
  return precio - descuento;
}

console.log(conDescuento(20000));
console.log(conDescuento(20000, 25));
console.log(conDescuento(5000) + conDescuento(3000));</code></pre>
      <pre><code>Salida:
18000
15000
7200</code></pre>
      <table>
        <tr><th>Parte</th><th>En el ejemplo</th></tr>
        <tr><td>Nombre</td><td>conDescuento</td></tr>
        <tr><td>Parámetros</td><td>precio, porcentaje</td></tr>
        <tr><td>Valor por defecto</td><td>porcentaje = 10 (si no lo pasás, vale 10)</td></tr>
        <tr><td>return</td><td>Devuelve el resultado y termina la función</td></tr>
        <tr><td>Llamada</td><td>conDescuento(20000, 25): los valores que le pasás son los argumentos</td></tr>
      </table>
      <p><strong>Sin return, la función devuelve undefined:</strong> si te olvidás el return, console.log(conDescuento(20000)) mostraría undefined.</p>
      <p><strong>Una función, una tarea:</strong> si el nombre necesita "y" (calcularYMostrar), conviene partirla.</p>
      <p><strong>¿Por qué funciones?</strong> Si cambia cómo se calcula el descuento, lo cambiás en un solo lugar.</p>
      <p>Por ejemplo, Nico calculaba el descuento de la tarjeta en 4 lugares de su app. Lo pasó a una función y, cuando el banco cambió el porcentaje, lo corrigió en una sola línea.</p>` },
    { titulo: "Funciones flecha", video: {"id":"MVOmgMujH2U","t":"Curso JavaScript: arrow functions (ES6) · codigofacilito (9:06)"}, html: `
      <p class="idea">Las <strong>funciones flecha</strong> son una forma más corta de escribir funciones, sobre todo las de una línea. Se usan muchísimo con las listas.</p>
      <pre class="web"><code>// forma clásica
function doble(n) {
  return n * 2;
}

// la misma, como función flecha
const dobleFlecha = n =&gt; n * 2;

// con dos parámetros van entre paréntesis
const sumar = (a, b) =&gt; a + b;

// con varias líneas, llaves y return
const conIva = precio =&gt; {
  const iva = precio * 0.21;
  return precio + iva;
};

console.log(doble(4), dobleFlecha(4), sumar(2, 3), conIva(1000));</code></pre>
      <pre><code>Salida:
8 8 5 1210</code></pre>
      <table>
        <tr><th>Forma</th><th>Cuándo</th></tr>
        <tr><td>n =&gt; n * 2</td><td>Un parámetro y una línea: el resultado se devuelve solo</td></tr>
        <tr><td>(a, b) =&gt; a + b</td><td>Dos o más parámetros: entre paréntesis</td></tr>
        <tr><td>() =&gt; ...</td><td>Sin parámetros: paréntesis vacíos</td></tr>
        <tr><td>x =&gt; { ...; return ...; }</td><td>Varias líneas: con llaves hay que escribir return</td></tr>
      </table>
      <p><strong>La flecha (=&gt;)</strong> se lee "da como resultado": n =&gt; n * 2 es "n da como resultado n por 2".</p>
      <p><strong>Con llaves, el return no es automático:</strong> es el error más común con funciones flecha.</p>
      <p>Por ejemplo, Nico tenía 6 funciones chiquitas de cálculo. Las pasó a flechas de una línea y el archivo quedó la mitad de largo y más fácil de leer.</p>` },
    { titulo: "Funciones como datos", html: `
      <p class="idea">En JavaScript una función es un dato más: se puede guardar en una variable y <strong>pasar a otra función</strong>. A la función que pasás se le dice <strong>callback</strong> (la que "se llama después").</p>
      <pre class="web"><code>function aplicarATodos(precios, cambio) {
  const resultado = [];
  for (const p of precios) {
    resultado.push(cambio(p));
  }
  return resultado;
}

const precios = [1000, 2500, 400];
console.log(aplicarATodos(precios, p =&gt; p * 1.21));
console.log(aplicarATodos(precios, p =&gt; p - 100));</code></pre>
      <pre><code>Salida:
[1210,3025,484]
[900,2400,300]</code></pre>
      <pre><code>aplicarATodos(precios, p =&gt; p * 1.21)
                       └─────┬──────┘
                    el callback: qué hacer con cada precio
La función aplicarATodos sabe RECORRER;
el callback le dice QUÉ HACER con cada uno.</code></pre>
      <p><strong>Lo vas a usar todo el tiempo:</strong> en el próximo módulo, map, filter y find reciben callbacks; en el módulo de la página, addEventListener recibe un callback que se ejecuta cuando hacen clic.</p>
      <p><strong>Las listas se muestran entre corchetes</strong> en la salida del laboratorio, como [1210,3025,484]. Las vas a ver a fondo en el próximo módulo.</p>
      <p><strong>No pongas paréntesis al pasar la función:</strong> aplicarATodos(precios, doble) pasa la función; aplicarATodos(precios, doble()) la ejecuta antes y pasa el resultado.</p>
      <p>Por ejemplo, Nico necesitaba aplicar el IVA, después un descuento y después redondear a todos los precios. Con una sola función que recibe "qué hacer", resolvió los tres casos.</p>` },
  ],
  practica: [
    "Escribí una función conIva(precio) y probala con 3 precios. Anotá los resultados.",
    "Pasá a función flecha una función tuya de una línea y anotá cuántas líneas te ahorraste.",
    "Usá aplicarATodos con un callback que redondee cada precio con Math.round y anotá la lista que da.",
  ],
  recursos: [
    { t: "MDN Web Docs: funciones (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
    { t: "MDN Web Docs: Array, todos los métodos de listas (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array" },
  ],
  quiz: [
    { q: "Si llamás conDescuento(20000) y el porcentaje por defecto es 10, ¿qué devuelve?", opciones: ["20000","2000","18000","undefined"], correcta: 2, explicacion: "20000 menos el 10% = 18000. 2000 tienta, pero ese es el descuento, no el precio final." },
    { q: "Tu función calcula bien pero console.log muestra undefined. ¿Qué falta?", opciones: ["El return","Un console.log adentro","Más parámetros","Una const"], correcta: 0, explicacion: "Sin return devuelve undefined. Un console.log adentro tienta, pero no devuelve nada." },
    { q: "Querés que el porcentaje valga 10 si no lo pasan. ¿Cómo lo escribís?", opciones: ["function f(precio, 10)","function f(precio, porcentaje) = 10","Con un if siempre","function f(precio, porcentaje = 10)"], correcta: 3, explicacion: "Así se define un valor por defecto. Un if tienta, pero es más largo." },
    { q: "Tu función se llama calcularYMostrarYGuardar. ¿Qué conviene?", opciones: ["Dejarla así","Partirla en funciones de una tarea","Agregarle más cosas","Hacerla flecha"], correcta: 1, explicacion: "Una función, una tarea. Hacerla flecha tienta, pero sigue haciendo tres cosas." },
    { q: "Si escribís const doble = n => n * 2, ¿qué da doble(5)?", opciones: ["5","undefined","10","n * 2"], correcta: 2, explicacion: "En una línea sin llaves, el resultado se devuelve solo. undefined tienta, pero no hay llaves." },
    { q: "Tu flecha con llaves x => { x * 2 } devuelve undefined. ¿Qué falta?", opciones: ["return adentro de las llaves","Paréntesis en x","Un punto y coma","Sacar la flecha"], correcta: 0, explicacion: "Con llaves, el return no es automático. Paréntesis tienta, pero no cambia eso." },
    { q: "Si una flecha recibe dos parámetros, ¿cómo se escribe?", opciones: ["a, b => a + b","a b => a + b","=> (a, b) a + b","(a, b) => a + b"], correcta: 3, explicacion: "Dos o más parámetros van entre paréntesis. Sin paréntesis tienta, pero no funciona." },
    { q: "Escribís aplicarATodos(precios, p => p * 1.21). ¿Qué es p => p * 1.21?", opciones: ["Un error","Un callback: la función que se pasa para usar con cada precio","Una variable con un número","Un comentario"], correcta: 1, explicacion: "Es una función pasada como dato. \"Variable con un número\" tienta, pero es una función." },
    { q: "Si aplicarATodos([1000, 2500], p => p - 100) ¿qué devuelve?", opciones: ["[1000,2500]","3300","[900,2400]","[100,100]"], correcta: 2, explicacion: "Le resta 100 a cada uno. 3300 tienta si sumás todo." },
    { q: "Querés pasar la función doble a otra función. ¿Cómo la escribís?", opciones: ["otra(lista, doble)","otra(lista, doble())","otra(lista, \"doble\")","otra(lista, =doble)"], correcta: 0, explicacion: "Sin paréntesis pasás la función. Con paréntesis tienta, pero la ejecutás antes." },
    { q: "Querés usar map, filter o addEventListener. ¿Qué tipo de dato reciben?", opciones: ["Un número","Un texto con el nombre","Nada","Un callback: una función"], correcta: 3, explicacion: "Todos reciben una función que se ejecuta después. El texto tienta, pero no sirve." },
    { q: "Si calculás el descuento en 4 lugares y cambia el porcentaje, ¿qué hubiera evitado corregir 4 veces?", opciones: ["Más comentarios","Una función que lo calcule en un solo lugar","Usar var","Copiar y pegar"], correcta: 1, explicacion: "La función centraliza el cálculo. Copiar y pegar tienta por rápido, pero multiplica los cambios." },
  ],
},
{
  id: "listas",
  icono: "📋",
  titulo: "Listas (arrays)",
  nivel: "Intermedio",
  objetivos: [
    "Crear listas, agregar y sacar elementos y recorrerlas con for...of",
    "Transformar y filtrar listas con map, filter y find",
    "Sumar o resumir una lista con reduce y ordenarla con sort",
  ],
  lecciones: [
    { titulo: "Crear y recorrer listas", html: `
      <p class="idea">Una <strong>lista</strong> (en inglés <strong>array</strong>) guarda varios datos en orden, entre corchetes. Cada uno tiene una <strong>posición</strong> que empieza en 0.</p>
      <pre class="web"><code>const compras = ['yerba', 'pan', 'leche'];
compras.push('queso');          // agrega al final
console.log(compras.length);
console.log(compras[0]);
console.log(compras[compras.length - 1]);
const sacado = compras.pop();   // saca el último
console.log(sacado, compras);

for (const item of compras) {
  console.log('- ' + item);
}</code></pre>
      <pre><code>Salida:
4
yerba
queso
queso ["yerba","pan","leche"]
- yerba
- pan
- leche</code></pre>
      <table>
        <tr><th>Escribís</th><th>Hace</th></tr>
        <tr><td>lista.push(x)</td><td>Agrega x al final</td></tr>
        <tr><td>lista.pop()</td><td>Saca el último y lo devuelve</td></tr>
        <tr><td>lista.length</td><td>Cuántos elementos tiene</td></tr>
        <tr><td>lista[0]</td><td>El primero; el último es lista[lista.length - 1]</td></tr>
        <tr><td>lista.includes(x)</td><td>true si está</td></tr>
        <tr><td>for (const x of lista)</td><td>Recorre cada elemento</td></tr>
      </table>
      <p><strong>const y las listas:</strong> con const no podés reemplazar la lista entera, pero sí agregarle y sacarle elementos. Por eso compras es const y push funciona.</p>
      <p><strong>Una posición que no existe da undefined:</strong> compras[10] no da error, da undefined. Es una fuente común de errores más adelante.</p>
      <p>Por ejemplo, Nico guardaba la lista del súper en un papel. En su app, cada cosa que agrega es un push y cada cosa que compra la saca de la lista.</p>` },
    { titulo: "map, filter y find", video: {"id":"vk3k4HtSlfY","t":"forEach y map: JavaScript hecho fácil · makigas (12:53)"}, html: `
      <p class="idea">Tres métodos resuelven casi todo con listas: <strong>map</strong> transforma cada elemento, <strong>filter</strong> se queda con los que cumplen algo y <strong>find</strong> busca el primero que cumple. Los tres reciben un callback.</p>
      <pre class="web"><code>const precios = [1200, 450, 3000, 800];

const conIva = precios.map(p =&gt; p * 1.21);
const caros = precios.filter(p =&gt; p &gt; 1000);
const primeroBarato = precios.find(p =&gt; p &lt; 500);
const hayCaros = precios.some(p =&gt; p &gt; 2000);

console.log(conIva);
console.log(caros);
console.log(primeroBarato);
console.log(hayCaros);
console.log(precios);</code></pre>
      <pre><code>Salida:
[1452,544.5,3630,968]
[1200,3000]
450
true
[1200,450,3000,800]</code></pre>
      <table>
        <tr><th>Método</th><th>Devuelve</th><th>Pregunta que responde</th></tr>
        <tr><td>map</td><td>Una lista nueva del mismo largo</td><td>¿Cómo queda cada uno si le hago esto?</td></tr>
        <tr><td>filter</td><td>Una lista nueva, más corta o igual</td><td>¿Cuáles cumplen esto?</td></tr>
        <tr><td>find</td><td>Un solo elemento (o undefined)</td><td>¿Cuál es el primero que cumple?</td></tr>
        <tr><td>some</td><td>true o false</td><td>¿Hay alguno que cumpla?</td></tr>
      </table>
      <p><strong>No cambian la lista original:</strong> fijate que precios sigue igual al final. Devuelven algo nuevo que tenés que guardar.</p>
      <p><strong>Se pueden encadenar:</strong> precios.filter(p =&gt; p &gt; 1000).map(p =&gt; p * 1.21) primero filtra y después transforma.</p>
      <p>Por ejemplo, Nico quería ver solo los gastos de más de $10.000 del mes. Con un filter de una línea tuvo la lista, sin recorrer nada a mano.</p>` },
    { titulo: "reduce y sort", html: `
      <p class="idea"><strong>reduce</strong> resume una lista en un solo valor (por ejemplo, la suma). <strong>sort</strong> ordena, pero con números necesita que le digas cómo comparar.</p>
      <pre class="web"><code>const gastos = [12000, 8000, 23500, 4500];

const total = gastos.reduce((acumulado, g) =&gt; acumulado + g, 0);
console.log('Total:', total);
console.log('Promedio:', total / gastos.length);

const ordenados = [...gastos].sort((a, b) =&gt; a - b);
console.log(ordenados);

console.log([10, 9, 100].sort());</code></pre>
      <pre><code>Salida:
Total: 48000
Promedio: 12000
[4500,8000,12000,23500]
[10,100,9]</code></pre>
      <pre><code>reduce((acumulado, g) =&gt; acumulado + g, 0)
Vuelta 1: acumulado = 0      g = 12000 → 12000
Vuelta 2: acumulado = 12000  g = 8000  → 20000
Vuelta 3: acumulado = 20000  g = 23500 → 43500
Vuelta 4: acumulado = 43500  g = 4500  → 48000</code></pre>
      <p><strong>El 0 del final</strong> es el valor inicial del acumulado. No te lo olvides: sin él, con una lista vacía da error.</p>
      <p><strong>La trampa de sort:</strong> sin función, ordena como si fueran textos, por eso [10, 9, 100] queda [10, 100, 9]. Para números, siempre (a, b) =&gt; a - b (de menor a mayor) o b - a (de mayor a menor).</p>
      <p><strong>sort sí cambia la lista original.</strong> Por eso el ejemplo hace una copia primero con [...gastos]. Los tres puntos (<strong>spread</strong>) copian los elementos en una lista nueva.</p>
      <p>Por ejemplo, Nico sumaba los gastos con un for y una variable. Con reduce lo hizo en una línea, y con sort vio de un vistazo cuál fue el gasto más grande del mes.</p>` },
  ],
  practica: [
    "Armá tu lista del súper con 5 cosas, agregá una con push, sacá una con pop y anotá cómo quedó la lista.",
    "Con una lista de 6 precios, usá map para el IVA, filter para los de más de 1000 y find para el primero barato. Anotá los 3 resultados.",
    "Sumá una lista de gastos con reduce y ordenala de mayor a menor con sort. Anotá el total y el gasto más grande.",
  ],
  recursos: [
    { t: "MDN Web Docs: Array, todos los métodos de listas (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
    { t: "MDN Web Docs: funciones (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions" },
  ],
  quiz: [
    { q: "Querés agregar \"queso\" al final de la lista compras. ¿Qué escribís?", opciones: ["compras.pop('queso')","compras + 'queso'","compras.push('queso')","compras[0] = 'queso'"], correcta: 2, explicacion: "push agrega al final. compras[0] tienta, pero reemplaza el primero." },
    { q: "Si compras tiene 4 elementos, ¿cómo leés el último?", opciones: ["compras[compras.length - 1]","compras[4]","compras[length]","compras.last"], correcta: 0, explicacion: "Las posiciones van de 0 a length - 1. compras[4] tienta, pero no existe." },
    { q: "Si pedís compras[10] y la lista tiene 3 elementos, ¿qué da?", opciones: ["Error","El último","0","undefined"], correcta: 3, explicacion: "No da error: da undefined. \"Error\" tienta, pero JavaScript no avisa." },
    { q: "Tu lista es const y le hacés push. ¿Funciona?", opciones: ["No, da error","Sí: const impide reemplazar la lista, no cambiarle elementos","Solo con let","Solo si está vacía"], correcta: 1, explicacion: "Agregar no es reemplazar. \"Da error\" tienta por cómo funciona const con números." },
    { q: "Querés el IVA de cada precio en una lista nueva. ¿Qué usás?", opciones: ["filter","find","map","pop"], correcta: 2, explicacion: "map transforma cada elemento. filter tienta, pero solo elige cuáles quedan." },
    { q: "Querés solo los gastos de más de $10.000. ¿Qué usás?", opciones: ["filter","map","reduce","push"], correcta: 0, explicacion: "filter se queda con los que cumplen. map tienta, pero devuelve todos transformados." },
    { q: "Querés el primer producto que cueste menos de $500. ¿Qué usás?", opciones: ["filter, que da uno solo","map","sort","find"], correcta: 3, explicacion: "find devuelve el primero. filter tienta, pero devuelve una lista." },
    { q: "Usaste precios.map(...) y precios sigue igual. ¿Qué pasó?", opciones: ["map no funcionó","map devuelve una lista nueva: hay que guardarla","Falta un return en precios","Hay que usar let"], correcta: 1, explicacion: "No cambia el original. \"No funcionó\" tienta, pero el resultado se perdió." },
    { q: "Querés sumar todos los gastos en una línea. ¿Qué usás?", opciones: ["map(g => g + g)","filter(g => g > 0)","reduce((acumulado, g) => acumulado + g, 0)","sort()"], correcta: 2, explicacion: "reduce resume en un valor. map tienta, pero devuelve una lista." },
    { q: "Si ordenás [10, 9, 100] con sort() sin función, ¿qué da?", opciones: ["[10,100,9]","[9,10,100]","[100,10,9]","Error"], correcta: 0, explicacion: "Sin función ordena como textos. [9,10,100] tienta porque es lo lógico, pero hace falta (a, b) => a - b." },
    { q: "Querés ordenar gastos de mayor a menor. ¿Qué función le pasás a sort?", opciones: ["(a, b) => a - b","(a, b) => a + b","Ninguna","(a, b) => b - a"], correcta: 3, explicacion: "b - a ordena de mayor a menor. a - b tienta, pero es de menor a mayor." },
    { q: "Querés ordenar sin cambiar la lista original. ¿Qué hacés?", opciones: ["Usar sort, que no la cambia","Copiarla primero con [...lista] y ordenar la copia","Usar const","Ordenarla dos veces"], correcta: 1, explicacion: "sort cambia la original. \"sort no la cambia\" tienta porque map y filter no lo hacen." },
  ],
},
{
  id: "objetos",
  icono: "🗃️",
  titulo: "Objetos y JSON",
  nivel: "Intermedio",
  objetivos: [
    "Agrupar datos relacionados en un objeto y leer sus propiedades",
    "Trabajar con listas de objetos usando map, filter y reduce",
    "Convertir datos a JSON y de vuelta",
  ],
  lecciones: [
    { titulo: "Objetos: datos con nombre", video: {"id":"5DaZXXbHI_U","t":"Arrays y objetos en JavaScript en 15 minutos · deivchoi (17:25)"}, html: `
      <p class="idea">Un <strong>objeto</strong> agrupa datos relacionados, cada uno con un nombre. Se escribe entre llaves: <strong>{ nombre: valor }</strong>. A cada par se le dice <strong>propiedad</strong>.</p>
      <pre class="web"><code>const gasto = {
  descripcion: 'Verdulería',
  monto: 12000,
  categoria: 'comida',
  pagado: true,
};

console.log(gasto.descripcion);
console.log(gasto['monto']);
gasto.monto = 12500;           // cambiar
gasto.fecha = '2026-03-10';    // agregar
console.log(gasto);
console.log(Object.keys(gasto));</code></pre>
      <pre><code>Salida:
Verdulería
12000
{"descripcion":"Verdulería","monto":12500,"categoria":"comida","pagado":true,"fecha":"2026-03-10"}
["descripcion","monto","categoria","pagado","fecha"]</code></pre>
      <table>
        <tr><th>Escribís</th><th>Hace</th></tr>
        <tr><td>obj.monto</td><td>Lee la propiedad monto (forma común)</td></tr>
        <tr><td>obj['monto']</td><td>Lo mismo, útil si el nombre está en una variable</td></tr>
        <tr><td>obj.x = valor</td><td>Cambia la propiedad o la agrega si no existía</td></tr>
        <tr><td>Object.keys(obj)</td><td>Lista con los nombres de las propiedades</td></tr>
        <tr><td>obj.noExiste</td><td>undefined (no da error)</td></tr>
      </table>
      <p><strong>Lista u objeto:</strong> una lista es para varios datos del mismo tipo en orden (los gastos); un objeto, para los datos de una sola cosa (un gasto).</p>
      <p><strong>Las propiedades pueden ser cualquier cosa:</strong> números, textos, listas, otros objetos y también funciones.</p>
      <p>Por ejemplo, Nico guardaba cada gasto en tres listas separadas (descripciones, montos, categorías) y se le desordenaban. Con un objeto por gasto, cada dato quedó pegado a su gasto.</p>` },
    { titulo: "Listas de objetos", html: `
      <p class="idea">Una <strong>lista de objetos</strong> es como una planilla: cada objeto es una fila y cada propiedad una columna. Con map, filter y reduce la manejás como una planilla de verdad.</p>
      <pre class="web"><code>const gastos = [
  { descripcion: 'Verdulería', monto: 12000, categoria: 'comida' },
  { descripcion: 'Luz', monto: 18000, categoria: 'servicios' },
  { descripcion: 'Carnicería', monto: 15000, categoria: 'comida' },
  { descripcion: 'Internet', monto: 14000, categoria: 'servicios' },
];

const comida = gastos.filter(g =&gt; g.categoria === 'comida');
const totalComida = comida.reduce((t, g) =&gt; t + g.monto, 0);
const descripciones = gastos.map(g =&gt; g.descripcion);
const masCaro = [...gastos].sort((a, b) =&gt; b.monto - a.monto)[0];

console.log(totalComida);
console.log(descripciones);
console.log(masCaro.descripcion);</code></pre>
      <pre><code>Salida:
27000
["Verdulería","Luz","Carnicería","Internet"]
Luz</code></pre>
      <table>
        <tr><th>descripcion</th><th>monto</th><th>categoria</th></tr>
        <tr><td>Verdulería</td><td>12000</td><td>comida</td></tr>
        <tr><td>Luz</td><td>18000</td><td>servicios</td></tr>
        <tr><td>Carnicería</td><td>15000</td><td>comida</td></tr>
        <tr><td>Internet</td><td>14000</td><td>servicios</td></tr>
      </table>
      <p><strong>Leé los callbacks en castellano:</strong> gastos.filter(g =&gt; g.categoria === 'comida') es "de los gastos, quedate con cada g cuya categoría sea comida".</p>
      <p><strong>Este es el corazón de casi cualquier app:</strong> una lista de cosas (gastos, productos, tareas) que se filtra, se suma y se muestra.</p>
      <p>Por ejemplo, Nico quería saber cuánto gastaba en comida por mes. Con un filter y un reduce sobre su lista de gastos tuvo el número exacto: $27.000.</p>` },
    { titulo: "JSON: los datos como texto", video: {"id":"JT-192OiiLo","t":"Curso JavaScript: JSON · codigofacilito (7:29)"}, html: `
      <p class="idea"><strong>JSON</strong> es una forma de escribir objetos y listas como <strong>texto</strong>. Sirve para guardarlos o mandarlos por internet, y después volver a convertirlos en datos.</p>
      <pre class="web"><code>const gasto = { descripcion: 'Luz', monto: 18000, pagado: false };

const texto = JSON.stringify(gasto);
console.log(texto);
console.log(typeof texto);

const deVuelta = JSON.parse(texto);
console.log(deVuelta.monto + 1000);
console.log(typeof deVuelta);</code></pre>
      <pre><code>Salida:
{"descripcion":"Luz","monto":18000,"pagado":false}
string
19000
object</code></pre>
      <table>
        <tr><th>Función</th><th>De</th><th>A</th></tr>
        <tr><td>JSON.stringify(dato)</td><td>Objeto o lista</td><td>Texto JSON</td></tr>
        <tr><td>JSON.parse(texto)</td><td>Texto JSON</td><td>Objeto o lista</td></tr>
        <tr><td>typeof x</td><td>Cualquier valor</td><td>El nombre de su tipo: 'string', 'number', 'object'...</td></tr>
      </table>
      <p><strong>Reglas del JSON:</strong> los nombres de las propiedades van siempre entre comillas dobles, los textos también, y no se pueden guardar funciones. Si el texto no sigue las reglas, JSON.parse da error.</p>
      <p><strong>Por qué importa:</strong> el almacenamiento del navegador (localStorage) solo guarda texto, y las páginas que dan datos por internet (las API) responden en JSON. Lo vas a usar en el módulo de guardar datos.</p>
      <p><strong>Por eso el laboratorio muestra los objetos así:</strong> usa JSON.stringify para mostrarlos en la consola de abajo.</p>
      <p>Por ejemplo, Nico quería mandarle los gastos del mes a su hermana. Con JSON.stringify los convirtió en un texto que ella pegó en su propia app con JSON.parse.</p>` },
  ],
  practica: [
    "Creá un objeto con 4 propiedades de un gasto tuyo, cambiá una, agregá otra y anotá qué muestra Object.keys.",
    "Armá una lista de 5 gastos con categoría y calculá con filter y reduce el total de una categoría. Anotá el número.",
    "Convertí tu lista de gastos a JSON con stringify, volvé a convertirla con parse y anotá el typeof de cada paso.",
  ],
  recursos: [
    { t: "MDN Web Docs: trabajar con objetos (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects" },
    { t: "MDN Web Docs: JSON (en español)", url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
  ],
  quiz: [
    { q: "Tenés descripción, monto y categoría de un gasto. ¿Qué usás para guardarlos juntos?", opciones: ["Tres listas separadas","Un número","Un objeto","Un texto con todo pegado"], correcta: 2, explicacion: "El objeto mantiene juntos los datos de una cosa. Tres listas tientan, pero se desordenan." },
    { q: "Si gasto = { monto: 12000 }, ¿cómo leés el monto?", opciones: ["gasto.monto","gasto[monto] sin comillas","monto.gasto","gasto(monto)"], correcta: 0, explicacion: "Con punto (o con corchetes y comillas). Corchetes sin comillas tienta, pero buscaría una variable monto." },
    { q: "Escribís gasto.fecha = '2026-03-10' y no existía fecha. ¿Qué pasa?", opciones: ["Da error","Se ignora","Se reemplaza el objeto","Se agrega la propiedad fecha"], correcta: 3, explicacion: "Asignar una propiedad nueva la agrega. \"Da error\" tienta, pero JavaScript lo permite." },
    { q: "Pedís gasto.noExiste. ¿Qué da?", opciones: ["Error","undefined","null","0"], correcta: 1, explicacion: "Una propiedad que no existe da undefined. null tienta, pero es otra cosa." },
    { q: "Querés los nombres de todas las propiedades de un objeto. ¿Qué usás?", opciones: ["obj.length","obj.keys","Object.keys(obj)","JSON.parse(obj)"], correcta: 2, explicacion: "Object.keys da la lista de nombres. obj.length tienta, pero los objetos no tienen length." },
    { q: "Tenés muchos gastos, cada uno con sus datos. ¿Qué estructura usás?", opciones: ["Una lista de objetos","Un objeto con una lista de números","Muchas variables sueltas","Un solo texto"], correcta: 0, explicacion: "Es como una planilla: cada objeto una fila. Variables sueltas tientan para pocos, pero no se pueden recorrer." },
    { q: "Querés el total de los gastos de comida. ¿Qué combinás?", opciones: ["map y push","sort y pop","Solo find","filter por categoría y reduce sumando monto"], correcta: 3, explicacion: "Primero filtrás, después sumás. find tienta, pero da uno solo." },
    { q: "Querés una lista solo con las descripciones. ¿Qué usás?", opciones: ["gastos.filter(g => g.descripcion)","gastos.map(g => g.descripcion)","gastos.find(g => g.descripcion)","gastos.descripcion"], correcta: 1, explicacion: "map transforma cada objeto en su descripción. gastos.descripcion tienta, pero la lista no tiene esa propiedad." },
    { q: "Querés guardar un objeto como texto. ¿Qué usás?", opciones: ["JSON.parse(obj)","String(obj)","JSON.stringify(obj)","obj.toString() siempre"], correcta: 2, explicacion: "stringify convierte a texto JSON. String(obj) tienta, pero da \"[object Object]\"." },
    { q: "Tenés un texto JSON y querés volver a usar sus datos. ¿Qué usás?", opciones: ["JSON.parse(texto)","JSON.stringify(texto)","Number(texto)","texto.monto directo"], correcta: 0, explicacion: "parse convierte el texto en objeto. texto.monto tienta, pero un texto no tiene esa propiedad." },
    { q: "Si x = JSON.stringify({ a: 1 }), ¿qué da typeof x?", opciones: ["'object'","'number'","'json'","'string'"], correcta: 3, explicacion: "stringify devuelve texto. object tienta porque empezó siendo un objeto." },
    { q: "Si en JSON escribiste { monto: 100 } sin comillas en monto, ¿qué pasa con JSON.parse?", opciones: ["Funciona igual","Da error: en JSON los nombres van entre comillas dobles","Lo corrige solo","Da undefined"], correcta: 1, explicacion: "JSON es estricto. \"Funciona igual\" tienta porque en JavaScript sí se puede escribir así." },
  ],
},
{
  id: "pagina",
  icono: "🖱️",
  titulo: "JavaScript en la página",
  nivel: "Avanzado",
  objetivos: [
    "Encontrar elementos de la página con querySelector y cambiar su texto",
    "Crear elementos nuevos a partir de una lista de datos",
    "Responder a clics y formularios con addEventListener",
  ],
  lecciones: [
    { titulo: "Encontrar y cambiar elementos", video: {"id":"4ILE0y58J00","t":"Qué es el DOM · TodoCode (12:59)"}, html: `
      <p class="idea">El <strong>DOM</strong> es la página vista como objetos que JavaScript puede leer y cambiar. Con <strong>querySelector</strong> encontrás un elemento y con <strong>textContent</strong> o <strong>classList</strong> lo cambiás.</p>
      <pre class="web"><code>&lt;h1 id="titulo"&gt;Gastos de marzo&lt;/h1&gt;
&lt;p class="total"&gt;Total: $0&lt;/p&gt;

&lt;script&gt;
  const titulo = document.querySelector('#titulo');
  const total = document.querySelector('.total');

  titulo.textContent = 'Gastos de abril';
  total.textContent = 'Total: $48000';
  total.classList.add('alerta');
  total.style.color = 'crimson';
  console.log(titulo.textContent);
&lt;/script&gt;</code></pre>
      <table>
        <tr><th>Escribís</th><th>Hace</th></tr>
        <tr><td>document.querySelector('#id')</td><td>Busca el elemento con ese id</td></tr>
        <tr><td>document.querySelector('.clase')</td><td>Busca el primero con esa clase</td></tr>
        <tr><td>document.querySelectorAll('li')</td><td>Busca todos (una lista)</td></tr>
        <tr><td>el.textContent = '...'</td><td>Cambia el texto</td></tr>
        <tr><td>el.classList.add('x') / remove / toggle</td><td>Agrega, saca o alterna una clase de CSS</td></tr>
      </table>
      <p><strong>Los selectores son los mismos que en CSS:</strong> # para id, punto para clase, el nombre de la etiqueta solo para etiquetas.</p>
      <p><strong>Si no lo encuentra, da null:</strong> y si después hacés null.textContent, aparece "Cannot read properties of null". Revisá el selector y que el script esté después del HTML.</p>
      <p><strong>Probalo en el laboratorio:</strong> este ejemplo tiene HTML, así que el resultado aparece como una página y el console.log debajo.</p>
      <p>Por ejemplo, Nico tenía el total escrito a mano en el HTML. Ahora lo calcula con reduce y lo pone con textContent: siempre está al día.</p>` },
    { titulo: "Crear elementos desde una lista", html: `
      <p class="idea">Las apps muestran listas que cambian. En vez de escribir cada &lt;li&gt; a mano, <strong>recorrés tus datos y creás los elementos</strong> con JavaScript.</p>
      <pre class="web"><code>&lt;h2&gt;Lista del súper&lt;/h2&gt;
&lt;ul id="lista"&gt;&lt;/ul&gt;
&lt;p id="cuantos"&gt;&lt;/p&gt;

&lt;script&gt;
  const compras = ['yerba', 'pan', 'leche', 'queso'];
  const ul = document.querySelector('#lista');

  for (const item of compras) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
  }

  document.querySelector('#cuantos').textContent = &#96;Son \${compras.length} cosas&#96;;
&lt;/script&gt;</code></pre>
      <table>
        <tr><th>Paso</th><th>Código</th></tr>
        <tr><td>1. Crear el elemento</td><td>document.createElement('li')</td></tr>
        <tr><td>2. Ponerle contenido</td><td>li.textContent = item</td></tr>
        <tr><td>3. Agregarlo a la página</td><td>ul.append(li)</td></tr>
        <tr><td>Para empezar de cero</td><td>ul.textContent = '' (vacía la lista antes de volver a dibujarla)</td></tr>
      </table>
      <p><strong>textContent y no innerHTML para datos:</strong> innerHTML interpreta el texto como HTML. Si un dato viene de lo que escribió una persona, con innerHTML alguien podría meter código en tu página. Con textContent, se muestra tal cual. Es una regla de seguridad básica.</p>
      <p><strong>Una función que dibuja:</strong> en las apps se suele tener una función mostrar() que vacía la lista y la vuelve a crear desde los datos. Cada vez que los datos cambian, se llama a mostrar().</p>
      <p>Por ejemplo, la lista del súper de Nico era un &lt;ul&gt; escrito a mano. Ahora sale de una lista de JavaScript: agrega una cosa al array, llama a mostrar() y aparece en la página.</p>` },
    { titulo: "Clics y formularios", html: `
      <p class="idea">Con <strong>addEventListener</strong> la página reacciona a lo que hace la persona: un clic, enviar un formulario, escribir. Le pasás el nombre del evento y un callback.</p>
      <pre class="web"><code>&lt;form id="form"&gt;
  &lt;input id="producto" placeholder="¿Qué te falta?" required&gt;
  &lt;button&gt;Agregar&lt;/button&gt;
&lt;/form&gt;
&lt;ul id="lista"&gt;&lt;/ul&gt;

&lt;script&gt;
  const compras = ['yerba'];
  const ul = document.querySelector('#lista');
  const input = document.querySelector('#producto');

  function mostrar() {
    ul.textContent = '';
    for (const item of compras) {
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', () =&gt; li.classList.toggle('hecho'));
      ul.append(li);
    }
  }

  document.querySelector('#form').addEventListener('submit', evento =&gt; {
    evento.preventDefault();          // que no recargue la página
    compras.push(input.value.trim());
    input.value = '';
    mostrar();
    console.log(compras);
  });

  mostrar();
&lt;/script&gt;
&lt;style&gt;.hecho { text-decoration: line-through; color: gray; }&lt;/style&gt;</code></pre>
      <table>
        <tr><th>Evento</th><th>Cuándo pasa</th></tr>
        <tr><td>'click'</td><td>Al hacer clic (o tocar en el celular)</td></tr>
        <tr><td>'submit'</td><td>Al enviar un formulario (botón o Enter)</td></tr>
        <tr><td>'input'</td><td>Cada vez que cambia lo escrito en un campo</td></tr>
        <tr><td>'change'</td><td>Al cambiar un select o un checkbox</td></tr>
      </table>
      <p><strong>preventDefault()</strong> frena lo que el navegador haría por su cuenta: al enviar un formulario, recargar la página (y perder todo).</p>
      <p><strong>input.value</strong> es lo que escribió la persona, y siempre es texto: para números, usá Number() como viste en el módulo de textos.</p>
      <p>Por ejemplo, Nico agregó el formulario y el clic para tachar. Su familia ya usa la lista desde el celular, aunque todavía se borra al recargar: eso lo resuelve el próximo módulo.</p>` },
  ],
  practica: [
    "Cambiá con textContent el título y un párrafo de una página tuya y anotá qué selectores usaste.",
    "Mostrá en una página una lista de 6 cosas creada desde un array y anotá cuántas líneas de JavaScript usaste.",
    "Agregá al ejemplo del formulario un contador que diga cuántas cosas hay y probalo agregando 3. Anotá qué muestra.",
  ],
  recursos: [
    { t: "MDN Web Docs: introducción al DOM (en español)", url: "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction" },
    { t: "MDN Web Docs: addEventListener (en español)", url: "https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener" },
    { t: "Curso de este sitio: Desarrollo web desde cero (publicar con GitHub Pages)", url: "https://pkeios.github.io/EiaLearning/web/" },
  ],
  quiz: [
    { q: "Querés cambiar el texto del elemento con id titulo. ¿Qué escribís?", opciones: ["document.querySelector('titulo').textContent = 'Nuevo'","titulo = 'Nuevo'","document.querySelector('#titulo').textContent = 'Nuevo'","document.textContent('#titulo')"], correcta: 2, explicacion: "Para id va #, como en CSS. Sin # tienta, pero busca una etiqueta llamada titulo." },
    { q: "Te aparece \"Cannot read properties of null\". ¿Qué revisás?", opciones: ["Que el selector exista y que el script esté después del HTML","La conexión a internet","El tamaño de la letra","Si usaste const"], correcta: 0, explicacion: "querySelector no lo encontró y dio null. const tienta, pero no es la causa." },
    { q: "Querés todos los <li> de la página, no solo el primero. ¿Qué usás?", opciones: ["document.querySelector('li')","document.li","document.getAll('li')","document.querySelectorAll('li')"], correcta: 3, explicacion: "querySelectorAll da todos. querySelector tienta, pero da el primero." },
    { q: "Querés que una tarea se tache al tocarla, alternando. ¿Qué usás?", opciones: ["li.classList.add('hecho') siempre","li.classList.toggle('hecho')","li.textContent = 'hecho'","li.remove()"], correcta: 1, explicacion: "toggle pone y saca la clase. add tienta, pero no la saca al volver a tocar." },
    { q: "Tenés una lista de 20 productos en un array. ¿Cómo los mostrás en la página?", opciones: ["Escribís 20 <li> a mano","Con un solo console.log","Recorrés el array y creás un <li> por cada uno","Con alert"], correcta: 2, explicacion: "Así la página sale de los datos. A mano tienta, pero no se actualiza." },
    { q: "Mostrás en la página lo que escribió una persona. ¿Qué usás?", opciones: ["textContent, que lo muestra tal cual","innerHTML, que es más cómodo","document.write","eval"], correcta: 0, explicacion: "textContent no interpreta HTML y evita que metan código. innerHTML tienta por cómodo, pero es inseguro." },
    { q: "Si volvés a dibujar la lista y aparecen los elementos repetidos, ¿qué faltó?", opciones: ["Más append","Un console.log","Usar let","Vaciar la lista antes con ul.textContent = ''"], correcta: 3, explicacion: "Hay que empezar de cero. Más append tienta, pero repite todo." },
    { q: "Querés que algo pase al hacer clic en un botón. ¿Qué usás?", opciones: ["boton.click = texto","boton.addEventListener('click', callback)","console.log('click')","boton.textContent('click')"], correcta: 1, explicacion: "addEventListener conecta el evento con tu función. console.log tienta, pero solo muestra un texto." },
    { q: "Al enviar tu formulario se recarga la página y se pierde todo. ¿Qué falta?", opciones: ["Un botón más","Más required","evento.preventDefault() en el submit","Cambiar a click"], correcta: 2, explicacion: "preventDefault frena la recarga. Cambiar a click tienta, pero el Enter seguiría enviando." },
    { q: "Querés reaccionar cada vez que la persona escribe una letra en un campo. ¿Qué evento usás?", opciones: ["'input'","'submit'","'click'","'load'"], correcta: 0, explicacion: "input se dispara con cada cambio. submit tienta, pero es solo al enviar." },
    { q: "La persona escribió 5 en un campo y lo sumás con 10. Da '510'. ¿Qué falta?", opciones: ["input.value.trim()","textContent","Nada","Number(input.value)"], correcta: 3, explicacion: "input.value es siempre texto. trim tienta, pero no lo convierte en número." },
    { q: "Cada vez que cambian los datos, querés actualizar la página. ¿Qué patrón conviene?", opciones: ["Cambiar cada elemento a mano","Una función mostrar() que redibuja todo desde los datos","Recargar la página","Un alert"], correcta: 1, explicacion: "Redibujar desde los datos evita que la página y los datos se desincronicen. Recargar tienta, pero se pierde todo." },
  ],
},
{
  id: "guardar",
  icono: "💾",
  titulo: "Guardar datos y esperar",
  nivel: "Avanzado",
  objetivos: [
    "Guardar y recuperar datos en el navegador con localStorage y JSON",
    "Entender qué es el código asíncrono con setTimeout y promesas",
    "Pedir datos a internet con fetch y manejar los errores",
  ],
  lecciones: [
    { titulo: "localStorage: que no se borre al recargar", video: {"id":"hb8O0qRqiSk","t":"Uso del local storage en JavaScript · Fernando Herrera (8:00)"}, html: `
      <p class="idea"><strong>localStorage</strong> es un pequeño almacén del navegador que guarda <strong>texto</strong> y no se borra al recargar. Con JSON guardás listas y objetos.</p>
      <pre><code>// Guardar
const compras = ['yerba', 'pan'];
localStorage.setItem('compras', JSON.stringify(compras));

// Leer (al abrir la página)
const guardado = localStorage.getItem('compras');      // texto o null
const lista = guardado ? JSON.parse(guardado) : [];   // si no había nada, lista vacía

// Borrar
localStorage.removeItem('compras');</code></pre>
      <table>
        <tr><th>Método</th><th>Hace</th></tr>
        <tr><td>localStorage.setItem('clave', texto)</td><td>Guarda un texto con un nombre</td></tr>
        <tr><td>localStorage.getItem('clave')</td><td>Lo lee; si no existe, da null</td></tr>
        <tr><td>localStorage.removeItem('clave')</td><td>Lo borra</td></tr>
      </table>
      <p><strong>Este ejemplo no tiene botón de laboratorio a propósito:</strong> el laboratorio corre en un marco aislado que no permite guardar. Probalo en tu propio archivo .html, abierto desde tu compu o publicado.</p>
      <p><strong>Siempre con JSON:</strong> localStorage guarda texto. Si guardás una lista sin stringify, se guarda "yerba,pan" y al leerla no es una lista.</p>
      <p><strong>Cuidados:</strong> los datos quedan solo en ese navegador y en esa compu (no se comparten entre el celular y la notebook), el usuario los puede borrar, y no es lugar para contraseñas ni datos sensibles.</p>
      <p><strong>El patrón en una app:</strong> al abrir, leer de localStorage; cada vez que cambian los datos, guardar y llamar a mostrar().</p>
      <p>Por ejemplo, Nico agregó dos líneas a su lista del súper: guardar después de cada cambio y leer al abrir. Ahora su familia la encuentra igual aunque cierren el navegador.</p>` },
    { titulo: "Esperar: setTimeout y promesas", html: `
      <p class="idea">Algunas cosas tardan: un temporizador, pedir datos a internet. JavaScript <strong>no se queda esperando</strong>: sigue con lo demás y vuelve cuando termina. A eso se le dice código <strong>asíncrono</strong>.</p>
      <pre class="web"><code>console.log('1. Pido los datos');
setTimeout(() =&gt; console.log('3. Llegaron los datos'), 500);
console.log('2. Mientras tanto, sigo');</code></pre>
      <pre><code>Salida:
1. Pido los datos
2. Mientras tanto, sigo
3. Llegaron los datos</code></pre>
      <pre class="web"><code>function esperar(ms) {
  return new Promise(listo =&gt; setTimeout(listo, ms));
}

async function prepararMate() {
  console.log('Pongo el agua');
  await esperar(500);
  console.log('El agua está a 80 grados');
  return 'Mate listo';
}

prepararMate().then(resultado =&gt; console.log(resultado));</code></pre>
      <pre><code>Salida:
Pongo el agua
El agua está a 80 grados
Mate listo</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th></tr>
        <tr><td>setTimeout(callback, ms)</td><td>Ejecuta el callback después de esos milisegundos (1000 ms = 1 segundo)</td></tr>
        <tr><td>Promise (promesa)</td><td>Un resultado que va a llegar más adelante</td></tr>
        <tr><td>async function</td><td>Una función que puede esperar adentro</td></tr>
        <tr><td>await</td><td>"Esperá a que esto termine" (solo dentro de async)</td></tr>
        <tr><td>.then(callback)</td><td>Qué hacer cuando la promesa termina</td></tr>
      </table>
      <p><strong>Fijate el orden del primer ejemplo:</strong> el 3 sale último aunque está escrito en el medio. Es el error más común: usar un dato antes de que haya llegado.</p>
      <p>Por ejemplo, Nico quería mostrar "Guardado ✓" durante 2 segundos y después sacarlo. Lo resolvió con un setTimeout de 2000 que vacía el mensaje.</p>` },
    { titulo: "Pedir datos a internet con fetch", html: `
      <p class="idea"><strong>fetch</strong> pide datos a una dirección de internet. Muchas páginas ofrecen datos en JSON para programas: se llaman <strong>API</strong>. Como tarda, se usa con async y await.</p>
      <pre><code>async function traerDatos(url) {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error('La página respondió ' + respuesta.status);
    }
    const datos = await respuesta.json();   // convierte el JSON en objetos
    console.log(datos);
  } catch (error) {
    console.log('No se pudo: ' + error.message);
  }
}</code></pre>
      <pre class="web"><code>try {
  JSON.parse('esto no es JSON');
} catch (error) {
  console.log('Algo salió mal y el programa sigue');
}
console.log('Fin');</code></pre>
      <pre><code>Salida:
Algo salió mal y el programa sigue
Fin</code></pre>
      <table>
        <tr><th>Parte</th><th>Para qué</th></tr>
        <tr><td>await fetch(url)</td><td>Pide y espera la respuesta</td></tr>
        <tr><td>respuesta.ok</td><td>true si salió bien (código 200 a 299)</td></tr>
        <tr><td>await respuesta.json()</td><td>Convierte el cuerpo de la respuesta de JSON a datos</td></tr>
        <tr><td>try { } catch (error) { }</td><td>Si algo falla adentro del try, en lugar de cortar el programa, se ejecuta el catch</td></tr>
        <tr><td>throw new Error('...')</td><td>Lanzás un error vos, a propósito</td></tr>
      </table>
      <p><strong>Internet falla:</strong> sin conexión, una dirección mal escrita o un servidor caído. Por eso todo fetch va dentro de try y catch, y le mostrás a la persona un mensaje claro.</p>
      <p><strong>Las claves de API no van en el código de una página:</strong> todo lo que está en tu JavaScript lo puede ver cualquiera con F12. Usá API públicas que no piden clave, o un servidor propio.</p>
      <p>Por ejemplo, Nico quiso mostrar la cotización del dólar en su app con una API pública. Envolvió el fetch en try y catch: cuando no hay internet, aparece "No se pudo actualizar" en lugar de una página rota.</p>` },
  ],
  practica: [
    "Agregá localStorage a tu lista del súper (en tu propio archivo .html), recargá la página y anotá si los datos siguen.",
    "Cambiá los tiempos de los setTimeout del ejemplo y anotá en qué orden salen los mensajes.",
    "Escribí un try y catch que atrape un JSON.parse de un texto inválido y anotá el mensaje del error con error.message.",
  ],
  recursos: [
    { t: "MDN Web Docs: localStorage (en español)", url: "https://developer.mozilla.org/es/docs/Web/API/Window/localStorage" },
    { t: "MDN Web Docs: JavaScript asíncrono (en español)", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Async_JS" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
  ],
  quiz: [
    { q: "Tu lista se borra al recargar la página. ¿Qué usás para guardarla?", opciones: ["Una variable const","console.log","localStorage","Un comentario"], correcta: 2, explicacion: "localStorage no se borra al recargar. const tienta, pero las variables se pierden al recargar." },
    { q: "Querés guardar la lista compras en localStorage. ¿Qué escribís?", opciones: ["localStorage.setItem('compras', JSON.stringify(compras))","localStorage.setItem('compras', compras)","localStorage.compras(compras)","JSON.parse(compras)"], correcta: 0, explicacion: "localStorage guarda texto: hace falta stringify. Sin stringify tienta, pero se guarda \"yerba,pan\"." },
    { q: "Abrís la app por primera vez y getItem da null. ¿Qué hacés?", opciones: ["JSON.parse(null) y listo","Mostrar un error","Recargar hasta que aparezca","Usás una lista vacía: guardado ? JSON.parse(guardado) : []"], correcta: 3, explicacion: "La primera vez no hay nada guardado. JSON.parse(null) tienta, pero da null, no una lista." },
    { q: "Guardaste la lista en la compu. ¿La ves en tu celular?", opciones: ["Sí, se sincroniza sola","No: localStorage queda solo en ese navegador","Sí, si usás Chrome","Sí, con wifi"], correcta: 1, explicacion: "Es local de ese navegador. \"Se sincroniza\" tienta, pero para eso hace falta un servidor." },
    { q: "¿Guardarías una contraseña en localStorage?", opciones: ["Sí, es privado","Sí, si es corta","No: no es un lugar seguro para datos sensibles","Sí, con JSON"], correcta: 2, explicacion: "Cualquier código de la página puede leerlo. \"Es privado\" tienta, pero no está protegido." },
    { q: "Si escribís console.log(1); setTimeout(() => console.log(2), 500); console.log(3), ¿en qué orden sale?", opciones: ["1, 3, 2","1, 2, 3","2, 1, 3","Solo 1 y 3"], correcta: 0, explicacion: "setTimeout no frena: el 2 llega después. 1, 2, 3 tienta porque es el orden escrito." },
    { q: "Querés esperar a que termine algo asíncrono dentro de una función. ¿Qué usás?", opciones: ["while hasta que termine","setTimeout de 0","console.log","await, dentro de una async function"], correcta: 3, explicacion: "await espera sin trabar la página. Un while tienta, pero congela todo." },
    { q: "Querés mostrar \"Guardado ✓\" 2 segundos y después sacarlo. ¿Qué usás?", opciones: ["setTimeout de 2","setTimeout de 2000 que vacía el mensaje","Un for de 2000 vueltas","Un alert"], correcta: 1, explicacion: "setTimeout usa milisegundos: 2000 son 2 segundos. setTimeout de 2 tienta, pero son 2 milésimas." },
    { q: "Querés pedir datos de una API. ¿Qué usás?", opciones: ["localStorage.getItem(url)","JSON.parse(url)","fetch(url) con await","document.querySelector(url)"], correcta: 2, explicacion: "fetch pide datos a internet. JSON.parse tienta, pero convierte texto que ya tenés." },
    { q: "Tu fetch falla cuando no hay internet y la página se rompe. ¿Qué agregás?", opciones: ["try y catch con un mensaje claro","Otro fetch igual","Un console.log antes","Nada, no se puede"], correcta: 0, explicacion: "catch atrapa el error y el programa sigue. Otro fetch tienta, pero falla igual." },
    { q: "Si recibiste la respuesta del fetch, ¿cómo convertís el JSON en datos?", opciones: ["respuesta.text sin await","JSON.stringify(respuesta)","respuesta.ok","await respuesta.json()"], correcta: 3, explicacion: "json() convierte el cuerpo. stringify tienta, pero hace lo contrario." },
    { q: "Una API pide una clave secreta. ¿La ponés en el JavaScript de tu página?", opciones: ["Sí, en una const","No: cualquiera la puede ver con F12","Sí, en un comentario","Sí, si la página es chica"], correcta: 1, explicacion: "Todo el JavaScript de la página es visible. En una const tienta, pero igual se ve." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu app de gastos",
  nivel: "Avanzado",
  objetivos: [
    "Planificar una app con datos, funciones y eventos",
    "Construir una app que agrega, muestra, suma y guarda datos",
    "Evaluarla con casos de prueba y una rúbrica",
  ],
  lecciones: [
    { titulo: "El plan", html: `
      <p class="idea">Antes de programar, escribí <strong>qué hace la app, qué datos guarda y qué funciones necesita</strong>. Así sabés por dónde empezar y cuándo terminaste.</p>
      <pre><code>App de gastos
-------------
Qué hace:
  - Agregar un gasto (descripción, monto, categoría)
  - Mostrar la lista de gastos
  - Mostrar el total y el total por categoría
  - Borrar un gasto
  - Guardar todo en localStorage

Datos:
  gastos = [ { id, descripcion, monto, categoria }, ... ]

Funciones:
  cargar()          lee de localStorage
  guardar()         escribe en localStorage
  agregar(gasto)    push + guardar + mostrar
  borrar(id)        filter + guardar + mostrar
  total(lista)      reduce
  mostrar()         redibuja la lista y los totales</code></pre>
      <table>
        <tr><th>Parte del plan</th><th>Módulo que la resuelve</th></tr>
        <tr><td>Lista de objetos</td><td>Objetos y JSON</td></tr>
        <tr><td>Sumar y filtrar</td><td>Listas (filter, reduce)</td></tr>
        <tr><td>Funciones con una tarea</td><td>Funciones</td></tr>
        <tr><td>Formulario y clics</td><td>JavaScript en la página</td></tr>
        <tr><td>Guardar al recargar</td><td>Guardar datos y esperar</td></tr>
      </table>
      <p><strong>El id</strong> es un número o texto único para cada gasto, para poder borrarlo sin confundirlo con otro igual. Una forma simple: Date.now(), que da los milisegundos desde 1970 y nunca se repite si agregás de a uno.</p>
      <p><strong>Si preferís otro tema,</strong> el mismo esqueleto sirve para una lista de tareas, un registro de lecturas o el stock de un emprendimiento.</p>
      <p>Por ejemplo, Nico escribió el plan en 20 minutos. Cuando se trabó programando, volvió al plan y vio que le faltaba la función guardar().</p>` },
    { titulo: "Construir la lógica", html: `
      <p class="idea">Empezá por la <strong>lógica sin página</strong>: funciones que reciben datos y devuelven resultados. Se prueban fácil con console.log, y después la página solo las usa.</p>
      <pre class="web"><code>const total = lista =&gt; lista.reduce((t, g) =&gt; t + g.monto, 0);

function totalPorCategoria(lista) {
  const resultado = {};
  for (const g of lista) {
    resultado[g.categoria] = (resultado[g.categoria] || 0) + g.monto;
  }
  return resultado;
}

const borrar = (lista, id) =&gt; lista.filter(g =&gt; g.id !== id);

const gastos = [
  { id: 1, descripcion: 'Verdulería', monto: 12000, categoria: 'comida' },
  { id: 2, descripcion: 'Luz', monto: 18000, categoria: 'servicios' },
  { id: 3, descripcion: 'Carnicería', monto: 15000, categoria: 'comida' },
];

console.log(total(gastos));
console.log(totalPorCategoria(gastos));
console.log(borrar(gastos, 2).length);
console.log(total([]));</code></pre>
      <pre><code>Salida:
45000
{"comida":27000,"servicios":18000}
2
0</code></pre>
      <p><strong>resultado[g.categoria] || 0</strong>: si esa categoría todavía no tiene total, empieza en 0. Es el truco del valor por defecto con || que viste en decisiones.</p>
      <p><strong>Probá los casos raros:</strong> la última línea comprueba que con una lista vacía el total sea 0 y no un error. Eso funciona gracias al 0 inicial del reduce.</p>
      <p><strong>Funciones que no tocan la página</strong> (reciben datos y devuelven resultados) se llaman <strong>funciones puras</strong>: son las más fáciles de probar y de reusar.</p>
      <p><strong>Después, la página:</strong> el formulario llama a agregar, cada gasto tiene un botón que llama a borrar con su id, y mostrar() usa total y totalPorCategoria para escribir los números con textContent.</p>
      <p>Por ejemplo, Nico probó sus 3 funciones en el laboratorio antes de tocar el HTML. Cuando armó la página, todo funcionó a la primera porque la lógica ya estaba probada.</p>` },
    { titulo: "Probar, publicar y evaluar", html: `
      <p class="idea">Terminá probando con <strong>casos normales, de borde y raros</strong>, publicá la app y evaluala con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <table>
        <tr><th>Caso</th><th>Qué probás</th><th>Qué tiene que pasar</th></tr>
        <tr><td>Normal</td><td>Agregar 3 gastos</td><td>Aparecen y el total suma bien</td></tr>
        <tr><td>De borde</td><td>Lista vacía; un monto de 0</td><td>Total 0, sin errores</td></tr>
        <tr><td>Raro</td><td>Monto con letras; descripción vacía</td><td>Un aviso claro, no se agrega</td></tr>
        <tr><td>Guardado</td><td>Recargar la página</td><td>Los gastos siguen</td></tr>
      </table>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Funciona</td><td>Agrega, muestra, suma y borra</td><td>Falla una función</td><td>Fallan varias</td></tr>
        <tr><td>Guarda</td><td>Los datos siguen al recargar</td><td>Guarda a veces</td><td>No guarda</td></tr>
        <tr><td>Código</td><td>Funciones de una tarea, nombres claros, const y let bien usados</td><td>Todo en un bloque</td><td>Difícil de seguir</td></tr>
        <tr><td>Validación</td><td>Avisa ante datos vacíos o no numéricos</td><td>Valida solo un caso</td><td>No valida</td></tr>
        <tr><td>Seguridad</td><td>textContent para datos de la persona, sin claves en el código</td><td>Un innerHTML con datos</td><td>Varios</td></tr>
        <tr><td>Publicada</td><td>Con enlace funcionando</td><td>Solo en tu compu</td><td>No se puede abrir</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → muy bien: ya programás apps con JavaScript
7 a 9   → mejorá el criterio más bajo
0 a 6   → repasá Listas, Objetos y JavaScript en la página</code></pre>
      <p><strong>Publicarla:</strong> como en el curso de desarrollo web, con GitHub Pages. Lo ves paso a paso en ese curso y en el de Git y GitHub de este sitio.</p>
      <p><strong>¿Y después?</strong> Los próximos pasos suelen ser módulos de JavaScript (import y export), un framework como React y JavaScript del lado del servidor con Node.js.</p>
      <p>Por ejemplo, Nico sacó 11 de 12: perdió un punto en validación porque un monto con letras daba NaN en el total. Agregó un if con Number() e isNaN() y quedó en 12.</p>` },
  ],
  practica: [
    "Escribí el plan de tu app (qué hace, datos y funciones) y anotá cuántas funciones tiene.",
    "Escribí y probá en el laboratorio total, totalPorCategoria y borrar con tus propios gastos. Anotá los resultados.",
    "Probá los 4 tipos de casos de la tabla en tu app y anotá cuáles pasaron.",
    "Publicá tu app, puntuála con la rúbrica y anotá tu total de 12 y el enlace.",
  ],
  recursos: [
    { t: "Curso de este sitio: Desarrollo web desde cero (publicar con GitHub Pages)", url: "https://pkeios.github.io/EiaLearning/web/" },
    { t: "Curso de este sitio: Git y GitHub desde cero", url: "https://pkeios.github.io/EiaLearning/git/" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
  ],
  quiz: [
    { q: "Vas a programar una app. ¿Qué hacés primero?", opciones: ["Elegir los colores","Escribir todo el HTML","Un plan: qué hace, qué datos guarda y qué funciones necesita","Publicarla vacía"], correcta: 2, explicacion: "El plan ordena el trabajo. El HTML tienta por ser lo visible, pero la lógica es lo central." },
    { q: "Querés borrar un gasto sin confundirlo con otro igual. ¿Qué le agregás a cada gasto?", opciones: ["Un id único","Un color","La posición escrita a mano","Nada"], correcta: 0, explicacion: "El id identifica a cada uno. La posición tienta, pero cambia al borrar." },
    { q: "¿Cómo generás un id simple que no se repita al agregar de a uno?", opciones: ["Math.random() * 2","Siempre 1","lista.length","Date.now()"], correcta: 3, explicacion: "Date.now() da los milisegundos actuales. lista.length tienta, pero se repite después de borrar." },
    { q: "¿Por qué empezar por la lógica sin página?", opciones: ["Porque la página no importa","Porque se prueba fácil con console.log y después la página solo la usa","Porque es más lindo","No conviene"], correcta: 1, explicacion: "Separar facilita probar. \"La página no importa\" tienta, pero sí importa: va después." },
    { q: "Si total([]) da 0, ¿qué parte lo garantiza?", opciones: ["El return","La const","El 0 inicial del reduce","El console.log"], correcta: 2, explicacion: "Sin valor inicial, reduce con lista vacía da error. El return tienta, pero devolvería el error." },
    { q: "Si escribís resultado[cat] = (resultado[cat] || 0) + monto, ¿para qué es el || 0?", opciones: ["Para empezar en 0 si esa categoría todavía no tiene total","Para borrar el total","Para que sea texto","No hace nada"], correcta: 0, explicacion: "undefined + monto daría NaN. \"No hace nada\" tienta, pero sin él el primer total falla." },
    { q: "Querés borrar el gasto con id 2. ¿Qué usás?", opciones: ["lista.find(g => g.id === 2)","lista.pop()","lista.map(g => g.id)","lista.filter(g => g.id !== 2)"], correcta: 3, explicacion: "filter se queda con todos menos ese. pop tienta, pero saca el último." },
    { q: "Si una función recibe datos, devuelve un resultado y no toca la página, ¿qué es?", opciones: ["Un evento","Una función pura","Un callback siempre","Un error"], correcta: 1, explicacion: "Las funciones puras son las más fáciles de probar. Callback tienta, pero eso depende de cómo se use." },
    { q: "Si alguien escribe \"mil\" en el monto y el total da NaN, ¿qué agregás?", opciones: ["Más reduce","Un innerHTML","Una validación con Number() e isNaN() antes de agregar","Nada"], correcta: 2, explicacion: "Hay que frenar el dato inválido. Más reduce tienta, pero sigue sumando NaN." },
    { q: "Mostrás la descripción que escribió la persona. ¿Qué usás para no tener problemas de seguridad?", opciones: ["textContent","innerHTML","eval","document.write"], correcta: 0, explicacion: "textContent no ejecuta código. innerHTML tienta por cómodo, pero puede meter código." },
    { q: "Tu app funciona pero solo en tu compu. ¿Cuántos puntos sacás en \"Publicada\"?", opciones: ["2","0","12","1"], correcta: 3, explicacion: "Solo en tu compu es 1 punto. 2 tienta porque funciona, pero falta el enlace." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Empezás de cero","Mejorás el criterio más bajo","La borrás","Pasás a React directamente"], correcta: 1, explicacion: "De 7 a 9, falta pulir. React tienta como próximo paso, pero primero hay que consolidar lo básico." },
  ],
},
];
