// Temario del curso "Gráficos que cuentan algo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js graficos y node tools/metodologia.js graficos
window.TEMARIO = [
{
  id: "mensaje",
  icono: "💬",
  titulo: "Un gráfico es una respuesta",
  nivel: "Básico",
  objetivos: [
    "Escribir en una frase la pregunta y el mensaje de un gráfico antes de hacerlo",
    "Decidir si conviene un gráfico, una tabla o un solo número",
    "Pensar en quién va a mirar el gráfico y qué necesita saber",
  ],
  lecciones: [
    { titulo: "Para qué sirve un gráfico", video: {"id":"JvWjgIJE77M","t":"Data Storytelling: aprendé a contar historias con datos · Datademia (3:06)"}, html: `
      <p class="idea">Un gráfico sirve para que otra persona <strong>entienda algo de un vistazo</strong>. No es un adorno: es la respuesta a una pregunta.</p>
      <p>En este curso vamos a usar los datos de un almacén de barrio con 3 sucursales (Centro, Norte y Sur), que vendió de enero a junio de 2025. Son los mismos de la planilla de práctica del sitio. Primero, los números en una tabla:</p>
      <table>
        <tr><th>Categoría</th><th>Total vendido</th></tr>
        <tr><td>Almacén</td><td>$ 1.960.100</td></tr>
        <tr><td>Bebidas</td><td>$ 884.550</td></tr>
        <tr><td>Frescos</td><td>$ 2.679.100</td></tr>
        <tr><td>Limpieza</td><td>$ 746.600</td></tr>
      </table>
      <p>¿Qué categoría vende más? Hay que leer los cuatro números y compararlos. Ahora, lo mismo como gráfico de barras, ordenado de mayor a menor:</p>
      <pre><code>Frescos   ███████████████████████████  2.679.100
Almacén   ████████████████████         1.960.100
Bebidas   █████████                      884.550
Limpieza  ███████                        746.600</code></pre>
      <p>Ahora se ve sin leer: Frescos es la más grande, y Bebidas y Limpieza juntas no llegan a Almacén. Eso hace un buen gráfico: el ojo compara largos mucho más rápido de lo que la cabeza compara números.</p>
      <p>Un <strong>gráfico</strong> es un dibujo hecho con datos: cada número se convierte en un largo, una altura, una posición o un color. A esa forma de mostrar los datos se la llama <strong>visualización de datos</strong>.</p>
      <p>Por ejemplo, el dueño del almacén no tiene tiempo de leer una planilla de 947 ventas, pero mira el gráfico de barras en 5 segundos y decide dónde poner más mercadería.</p>` },
    { titulo: "La pregunta y el mensaje", html: `
      <p class="idea">Antes de abrir cualquier programa, escribí dos frases: <strong>qué pregunta responde</strong> el gráfico y <strong>qué querés que la persona se lleve</strong>.</p>
      <table>
        <tr><th>Paso</th><th>Ejemplo con el almacén</th></tr>
        <tr><td>La pregunta</td><td>¿Qué categoría vende más?</td></tr>
        <tr><td>El mensaje</td><td>Frescos vende más que cualquier otra: 4 de cada 10 pesos</td></tr>
        <tr><td>Para qué sirve</td><td>Decidir dónde conviene tener más stock</td></tr>
      </table>
      <p>El <strong>mensaje</strong> es la conclusión en una frase. Si no lo podés escribir, todavía no sabés qué mostrar, y el gráfico va a salir confuso.</p>
      <p>Los mismos datos responden preguntas distintas, y cada pregunta pide un gráfico distinto:</p>
      <pre><code>Pregunta                              Qué mostrar
¿Qué categoría vende más?          -> total por categoría
¿Las ventas suben o bajan?         -> total por mes
¿Cómo pagan los clientes?          -> ventas por medio de pago
¿Qué sucursal vende más?           -> total por sucursal</code></pre>
      <p><strong>Un gráfico, una idea.</strong> Querer mostrar todo junto (categorías, meses y sucursales en el mismo dibujo) es la forma más común de que no se entienda nada. Si tenés tres mensajes, hacé tres gráficos.</p>
      <p>Por ejemplo, para la pregunta "¿Las ventas suben o bajan?", el mensaje podría ser: "Las ventas crecieron de enero a junio, con un pozo en febrero". Con esa frase ya sabés que vas a mostrar los meses en orden.</p>` },
    { titulo: "Gráfico, tabla o un solo número", html: `
      <p class="idea">No todo necesita un gráfico. A veces una <strong>tabla</strong> o <strong>un número grande</strong> comunican mejor.</p>
      <table>
        <tr><th>Usá...</th><th>Cuando...</th><th>Ejemplo</th></tr>
        <tr><td>Un número solo</td><td>El mensaje es un dato</td><td>"Vendimos $ 6.270.350 en el semestre"</td></tr>
        <tr><td>Una tabla</td><td>La persona necesita buscar valores exactos</td><td>Una lista de precios, los totales para la contadora</td></tr>
        <tr><td>Un gráfico</td><td>Importa la forma: quién es más grande, si sube o baja</td><td>Las ventas mes a mes</td></tr>
      </table>
      <p>Pensá también en el <strong>público</strong>: las personas que van a mirar el gráfico. No es lo mismo un gráfico para el dueño, que conoce el negocio, que uno para un cliente o para una reunión de vecinos.</p>
      <ul>
        <li>¿Qué saben del tema? Si no saben, explicá las palabras raras en el título o en una nota.</li>
        <li>¿Cuánto tiempo le van a dedicar? En una diapositiva, pocos segundos: una sola idea, bien grande.</li>
        <li>¿Qué tienen que hacer después? Si tienen que decidir algo, que el gráfico lo muestre claro.</li>
      </ul>
      <p>Por ejemplo, para la contadora, una tabla con los 6 totales mensuales exactos sirve más que un gráfico. Para el dueño, que quiere saber si el negocio va bien, sirve más la línea de ventas por mes.</p>` },
  ],
  practica: [
    "Elegí un tema con datos de tu vida (gastos del mes, horas de sueño, goles de tu equipo). Anotá 1 pregunta y 1 mensaje en una frase cada uno.",
    "Buscá un gráfico en un diario o en redes. Anotá cuál es su mensaje en una frase y si se entiende en menos de 10 segundos.",
    "Para cada uno de estos casos, anotá si usarías un número, una tabla o un gráfico: el total del mes, la lista de precios y las ventas de los últimos 12 meses.",
  ],
  recursos: [
    { t: "Storytelling with Data, de Cole Nussbaumer Knaflic: blog y ejercicios (en inglés)", url: "https://www.storytellingwithdata.com/" },
    { t: "Fundamentals of Data Visualization, de Claus Wilke, libro gratis en línea (en inglés)", url: "https://clauswilke.com/dataviz/" },
  ],
  quiz: [
    { q: "Si tenés los totales de 4 categorías y querés que se vea cuál vende más, ¿qué conviene?", opciones: ["Un párrafo con los 4 números","Una tabla sin orden","Un gráfico de barras ordenado de mayor a menor","Un solo número"], correcta: 2, explicacion: "Las barras ordenadas se comparan de un vistazo. La tabla tienta porque tiene los datos, pero obliga a leer y comparar números." },
    { q: "¿Qué es un gráfico?", opciones: ["Un dibujo donde cada número se convierte en un largo, una altura, una posición o un color","Un adorno para que la presentación sea linda","Una tabla con colores","Una foto del negocio"], correcta: 0, explicacion: "Un gráfico traduce números a formas. \"Un adorno\" tienta, pero un gráfico sin mensaje no sirve." },
    { q: "Si vas a hacer un gráfico, ¿qué escribís antes de abrir el programa?", opciones: ["El color que te gusta","El nombre del archivo","Nada, se ve después","La pregunta que responde y el mensaje en una frase"], correcta: 3, explicacion: "Sin pregunta ni mensaje, el gráfico sale confuso. \"Se ve después\" tienta por rápido, pero terminás mostrando todo junto." },
    { q: "Si no podés escribir el mensaje del gráfico en una frase, ¿qué significa?", opciones: ["Que el gráfico va a quedar mejor","Que todavía no sabés qué querés mostrar","Que hacen falta más colores","Que tenés que usar 3D"], correcta: 1, explicacion: "El mensaje es la conclusión. Más colores tienta como solución, pero no arregla la falta de idea." },
    { q: "Tu jefe quiere ver categorías, meses y sucursales. ¿Qué hacés?", opciones: ["Un solo gráfico con todo","Ningún gráfico","Tres gráficos, uno por mensaje","Una torta con 12 porciones"], correcta: 2, explicacion: "Un gráfico, una idea. Uno solo con todo tienta por ahorrar espacio, pero no se entiende nada." },
    { q: "Si el mensaje es \"Vendimos $ 6.270.350 en el semestre\", ¿qué conviene mostrar?", opciones: ["El número solo, bien grande","Un gráfico de barras con una sola barra","Una torta","Una tabla de 947 filas"], correcta: 0, explicacion: "Si el mensaje es un dato, alcanza con el número. Una barra sola tienta porque es un gráfico, pero no compara nada." },
    { q: "Si la contadora necesita los totales exactos de cada mes, ¿qué le das?", opciones: ["Un gráfico de líneas sin números","Una torta","Un dibujo a mano","Una tabla con los valores"], correcta: 3, explicacion: "Para buscar valores exactos, la tabla. El gráfico tienta porque es más vistoso, pero no muestra el número exacto." },
    { q: "Si querés mostrar si las ventas suben o bajan, ¿qué conviene?", opciones: ["Un solo número","Un gráfico con los meses en orden","Una lista de productos","Una tabla desordenada"], correcta: 1, explicacion: "Importa la forma en el tiempo: un gráfico. El número solo tienta por simple, pero no muestra el cambio." },
    { q: "¿Qué es el público de un gráfico?", opciones: ["Los datos","El programa que lo hace","Las personas que lo van a mirar","El título"], correcta: 2, explicacion: "El público decide cuánto explicar. \"Los datos\" tienta, pero eso es lo que se muestra, no a quién." },
    { q: "Si el gráfico va en una diapositiva que se ve pocos segundos, ¿qué hacés?", opciones: ["Una sola idea, bien grande","Todos los datos posibles","Letra chica para que entre todo","Ningún título"], correcta: 0, explicacion: "Con poco tiempo, una idea. Todos los datos tienta por completo, pero nadie llega a leerlos." },
    { q: "Tu gráfico es para vecinos que no conocen las palabras del negocio. ¿Qué hacés?", opciones: ["Lo dejás igual","Le sacás el título","Agregás más datos","Explicás las palabras raras en el título o en una nota"], correcta: 3, explicacion: "Pensá en lo que sabe el público. Dejarlo igual tienta porque vos lo entendés, pero ellos no." },
    { q: "Si el mensaje es \"Frescos vende más que cualquier otra\", ¿qué pregunta responde?", opciones: ["¿Las ventas suben o bajan?","¿Qué categoría vende más?","¿Cómo pagan los clientes?","¿Qué sucursal vende más?"], correcta: 1, explicacion: "Habla de categorías. \"¿Qué sucursal vende más?\" tienta porque también compara, pero es otra pregunta." },
  ],
},
{
  id: "elegir",
  icono: "🧭",
  titulo: "Elegir el gráfico justo",
  nivel: "Básico",
  objetivos: [
    "Elegir barras, líneas, torta, histograma o dispersión según lo que querés mostrar",
    "Reconocer cuándo una torta confunde y cambiarla por barras",
    "Usar una guía de decisión para casos nuevos",
  ],
  lecciones: [
    { titulo: "Comparar y ver el cambio: barras y líneas", video: {"id":"IqIv1HOMKzQ","t":"Tipos de gráficas en estadística: barras, circular y lineal · AltumX Educación (2:21)"}, html: `
      <p class="idea">Para <strong>comparar cosas</strong>, barras. Para ver <strong>cómo cambia algo en el tiempo</strong>, líneas. Con esos dos resolvés la mayoría de los casos.</p>
      <p>Un <strong>gráfico de barras</strong> muestra cada valor como una barra: cuanto más larga, más grande el número. Sirve para comparar categorías, sucursales o productos.</p>
      <p>Un <strong>gráfico de líneas</strong> une puntos en orden, de izquierda a derecha. Sirve para el tiempo: días, meses, años. La línea muestra la tendencia, es decir, si en general sube, baja o se mantiene.</p>
      <p>Las ventas del almacén por mes:</p>
      <table>
        <tr><th>Mes</th><th>Total ($)</th></tr>
        <tr><td>Enero</td><td>932.250</td></tr>
        <tr><td>Febrero</td><td>781.600</td></tr>
        <tr><td>Marzo</td><td>1.149.550</td></tr>
        <tr><td>Abril</td><td>939.100</td></tr>
        <tr><td>Mayo</td><td>1.174.950</td></tr>
        <tr><td>Junio</td><td>1.292.900</td></tr>
      </table>
      <pre><code>1,3 M |                                  ●
1,2 M |                             ●
1,1 M |              ●
1,0 M |
0,9 M |  ●                  ●
0,8 M |        ●
      +---------------------------------------
         Ene   Feb   Mar   Abr   May   Jun</code></pre>
      <p>Con la línea (uniendo los puntos) se ve el mensaje: las ventas suben en el semestre, con altibajos y un pozo en febrero.</p>
      <table>
        <tr><th>Querés mostrar...</th><th>Usá</th></tr>
        <tr><td>Quién es más grande (categorías, sucursales)</td><td>Barras</td></tr>
        <tr><td>Cómo cambia en el tiempo</td><td>Líneas</td></tr>
        <tr><td>Pocos meses, comparando cada uno</td><td>Barras verticales también sirven</td></tr>
      </table>
      <p>Por ejemplo, para "¿qué sucursal vende más?" van barras; para "¿cómo vino el semestre?", una línea.</p>` },
    { titulo: "Partes de un todo: torta y barras apiladas", html: `
      <p class="idea">Una <strong>torta</strong> (gráfico circular) muestra cómo se reparte un total. Funciona solo con <strong>pocas partes y muy distintas</strong>; si no, conviene usar barras.</p>
      <p>Cómo pagan los clientes del almacén (947 ventas):</p>
      <table>
        <tr><th>Medio de pago</th><th>Ventas</th><th>Porcentaje</th></tr>
        <tr><td>QR</td><td>294</td><td>31,0 %</td></tr>
        <tr><td>Débito</td><td>281</td><td>29,7 %</td></tr>
        <tr><td>Efectivo</td><td>194</td><td>20,5 %</td></tr>
        <tr><td>Crédito</td><td>178</td><td>18,8 %</td></tr>
      </table>
      <p>En una torta, QR y Débito parecen porciones iguales: el ojo compara mal ángulos y áreas. En barras, la diferencia se ve:</p>
      <pre><code>QR        ███████████████████████████████  31,0 %
Débito    ██████████████████████████████   29,7 %
Efectivo  █████████████████████            20,5 %
Crédito   ███████████████████              18,8 %</code></pre>
      <p>Un <strong>porcentaje</strong> dice cuántos de cada 100: 31,0 % significa que 31 de cada 100 ventas fueron con QR. Las partes de una torta siempre suman 100 %.</p>
      <table>
        <tr><th>La torta sirve si...</th><th>Mejor barras si...</th></tr>
        <tr><td>Hay 2 o 3 partes</td><td>Hay 5 o más partes</td></tr>
        <tr><td>Una parte es claramente la mayor (por ejemplo, más de la mitad)</td><td>Las partes son parecidas</td></tr>
        <tr><td>Suman un total con sentido</td><td>Querés comparar entre grupos o en el tiempo</td></tr>
      </table>
      <p>Las <strong>barras apiladas</strong> muestran partes de un todo para varios grupos a la vez: una barra por sucursal, partida en colores por medio de pago.</p>
      <p>Por ejemplo, "Frescos es 42,7 % de las ventas" se ve bien en una torta de 2 partes: Frescos contra el resto.</p>` },
    { titulo: "Distribución y relación", html: `
      <p class="idea">Para ver <strong>cómo se reparten muchos valores</strong>, un histograma. Para ver si <strong>dos cosas van juntas</strong>, un gráfico de dispersión.</p>
      <p>Un <strong>histograma</strong> agrupa valores en rangos y cuenta cuántos cayeron en cada uno. Por ejemplo, el importe de cada venta: ¿la mayoría son compras chicas o grandes?</p>
      <pre><code>Ventas según el importe (histograma, ejemplo)
hasta $ 2.000     ████████████
$ 2.000 a 5.000   ████████████████████
$ 5.000 a 10.000  ██████████
más de $ 10.000   ███</code></pre>
      <p>La diferencia con las barras: en el histograma, las barras son <strong>rangos de un número</strong> en orden (de menor a mayor), no categorías.</p>
      <p>Un <strong>gráfico de dispersión</strong> pone un punto por cada caso, con un valor en cada eje. Sirve para ver una <strong>relación</strong>: si cuando una cosa sube, la otra también.</p>
      <pre><code>Temperatura del día vs. botellas de agua vendidas (ejemplo)
botellas
  40 |                          ●  ●
  30 |                 ●   ●
  20 |        ●   ●
  10 |  ●  ●
     +----------------------------------
       15°   20°   25°   30°   35°</code></pre>
      <p>Los puntos suben juntos: los días de más calor se vende más agua. Eso no prueba que una cosa cause la otra (lo vas a ver en el módulo de gráficos que engañan), pero muestra que van juntas.</p>
      <table>
        <tr><th>Querés mostrar...</th><th>Gráfico</th></tr>
        <tr><td>Comparar categorías</td><td>Barras</td></tr>
        <tr><td>Cambio en el tiempo</td><td>Líneas</td></tr>
        <tr><td>Partes de un todo (pocas)</td><td>Torta o barras apiladas</td></tr>
        <tr><td>Cómo se reparten muchos valores</td><td>Histograma</td></tr>
        <tr><td>Si dos cosas van juntas</td><td>Dispersión</td></tr>
      </table>
      <p>Por ejemplo, para saber si los clientes que compran más productos también gastan más por producto, hacés una dispersión: un punto por venta.</p>` },
  ],
  practica: [
    "Con la tabla de ventas por mes, dibujá a mano un gráfico de líneas. Anotá cuál fue el mejor y el peor mes.",
    "Dibujá los 4 medios de pago como torta y como barras. Anotá en cuál se nota mejor que QR supera a Débito.",
    "Para 5 preguntas tuyas (por ejemplo, \"¿en qué gasto más?\"), anotá qué gráfico usarías según la tabla de la lección 3.",
  ],
  recursos: [
    { t: "Visual Vocabulary del Financial Times: qué gráfico usar según lo que querés mostrar (en inglés)", url: "https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary" },
    { t: "From Data to Viz: árbol para elegir el gráfico según tus datos (en inglés)", url: "https://www.data-to-viz.com/" },
    { t: "The Data Visualisation Catalogue: cada tipo de gráfico explicado (en inglés)", url: "https://datavizcatalogue.com/" },
  ],
  quiz: [
    { q: "Si querés comparar las ventas de 3 sucursales, ¿qué gráfico usás?", opciones: ["Líneas","Dispersión","Barras","Histograma"], correcta: 2, explicacion: "Comparar categorías: barras. Líneas tienta porque es común, pero es para el tiempo." },
    { q: "Si querés mostrar cómo cambiaron las ventas de enero a junio, ¿qué gráfico usás?", opciones: ["Líneas","Torta","Dispersión","Histograma"], correcta: 0, explicacion: "El cambio en el tiempo va en líneas. La torta tienta porque usa los mismos totales, pero no muestra orden." },
    { q: "Si tenés 4 medios de pago con porcentajes parecidos (31 %, 30 %, 21 %, 19 %), ¿qué conviene?", opciones: ["Torta, porque suman 100 %","Líneas","Un solo número","Barras, porque en la torta las porciones parecidas no se distinguen"], correcta: 3, explicacion: "Con partes parecidas, la torta engaña al ojo. \"Suman 100 %\" tienta, pero no alcanza." },
    { q: "Si querés mostrar que Frescos es el 42,7 % de las ventas y el resto, el 57,3 %, ¿qué sirve?", opciones: ["Una dispersión","Una torta de 2 partes","Un histograma","Una línea"], correcta: 1, explicacion: "Dos partes de un todo: la torta funciona. La dispersión tienta por técnica, pero es para relaciones." },
    { q: "¿Qué dice un porcentaje de 31 %?", opciones: ["31 en total","31 pesos","31 de cada 100","31 de cada 10"], correcta: 2, explicacion: "Por ciento es de cada 100. \"31 en total\" tienta, pero es un número absoluto, no una proporción." },
    { q: "Si querés ver si la mayoría de las ventas son compras chicas o grandes, ¿qué gráfico usás?", opciones: ["Un histograma","Una torta","Una línea","Un número"], correcta: 0, explicacion: "El histograma muestra cómo se reparten muchos valores. La torta tienta, pero no ordena rangos." },
    { q: "¿En qué se diferencia un histograma de un gráfico de barras?", opciones: ["El histograma no tiene barras","Las barras son siempre horizontales","No hay diferencia","En el histograma cada barra es un rango de un número, en orden"], correcta: 3, explicacion: "Rangos ordenados contra categorías. \"No hay diferencia\" tienta porque se parecen, pero muestran cosas distintas." },
    { q: "Si querés saber si los días de más calor se vende más agua, ¿qué gráfico usás?", opciones: ["Torta","Dispersión: un punto por día","Barras apiladas","Un solo número"], correcta: 1, explicacion: "Dos cosas que pueden ir juntas: dispersión. Barras apiladas tientan, pero son partes de un todo." },
    { q: "En una dispersión los puntos suben juntos. ¿Qué podés decir?", opciones: ["Que una causa la otra","Que los datos están mal","Que las dos cosas van juntas, pero no que una cause la otra","Nada"], correcta: 2, explicacion: "Ir juntas no es causar. \"Una causa la otra\" tienta porque parece obvio, pero puede haber otra explicación." },
    { q: "Si querés mostrar, para cada sucursal, cómo se reparten los medios de pago, ¿qué usás?", opciones: ["Barras apiladas: una barra por sucursal","Una sola torta","Una línea","Un histograma"], correcta: 0, explicacion: "Partes de un todo para varios grupos. Una sola torta tienta, pero mezcla las sucursales." },
    { q: "Tenés 9 productos para mostrar como partes de las ventas. ¿Qué conviene?", opciones: ["Torta de 9 porciones","Líneas","Dispersión","Barras ordenadas"], correcta: 3, explicacion: "Con 5 o más partes, barras. La torta tienta porque son partes de un todo, pero 9 porciones no se leen." },
    { q: "Si querés comparar pocos meses uno por uno, ¿qué otra opción sirve además de la línea?", opciones: ["Torta","Barras verticales","Dispersión","Histograma"], correcta: 1, explicacion: "Con pocos meses, barras verticales también funcionan. La torta tienta, pero no muestra orden." },
  ],
},
{
  id: "barras-lineas",
  icono: "📏",
  titulo: "Barras y líneas bien hechas",
  nivel: "Intermedio",
  objetivos: [
    "Hacer barras con el eje desde cero y en un orden que ayude",
    "Hacer líneas legibles, con pocas series y etiquetas al final",
    "Poner ejes, unidades y fuente para que el gráfico se entienda solo",
  ],
  lecciones: [
    { titulo: "Barras que se leen bien", video: {"id":"zVqOkEebv3w","t":"Excel 3: gráfico de barras · Universidad Pontificia Comillas (3:26)"}, html: `
      <p class="idea">En un gráfico de barras, el largo es el dato. Por eso el <strong>eje empieza siempre en cero</strong> y las barras van <strong>en un orden que ayude</strong>.</p>
      <p>El <strong>eje</strong> es la regla del gráfico: la línea con los números que dice cuánto vale cada largo. Si el eje no empieza en cero, una barra que es el doble de otra no representa el doble.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Eje desde cero</td><td>El largo tiene que ser proporcional al número</td></tr>
        <tr><td>Ordenar de mayor a menor</td><td>Se ve enseguida quién gana y quién pierde</td></tr>
        <tr><td>Excepción: orden natural</td><td>Meses, días o rangos van en su orden, no por tamaño</td></tr>
        <tr><td>Barras horizontales si los nombres son largos</td><td>Los nombres se leen sin girar la cabeza</td></tr>
        <tr><td>Un solo color</td><td>Si todas son lo mismo (ventas), no hace falta pintarlas distinto</td></tr>
      </table>
      <p>Comparalo con las sucursales del almacén:</p>
      <pre><code>Desordenado (como vino en la planilla)
Norte   █████████████████
Centro  █████████████████████████████
Sur     █████████████████

Ordenado de mayor a menor
Centro  █████████████████████████████
Sur     █████████████████
Norte   █████████████████</code></pre>
      <p>Ordenado se ve que Centro vende casi lo mismo que Norte y Sur juntas: $ 2.891.950 contra $ 3.378.400.</p>
      <p>Las <strong>etiquetas</strong> son los textos que nombran cada barra o muestran su valor. Si ponés el valor en la punta de cada barra, podés sacar el eje y las líneas de fondo.</p>
      <p>Por ejemplo, con 15 productos de nombres largos, como "Aceite de girasol 1,5 l", las barras horizontales ordenadas se leen mucho mejor que las verticales con texto inclinado.</p>` },
    { titulo: "Líneas que se leen bien", html: `
      <p class="idea">Una línea muestra la tendencia. Se lee bien con <strong>pocas series</strong>, el <strong>tiempo en el eje horizontal</strong> y el <strong>nombre de cada línea al final</strong>, en lugar de una leyenda.</p>
      <p>Una <strong>serie</strong> es cada conjunto de datos que se dibuja como una línea: por ejemplo, las ventas de Centro mes a mes. La <strong>leyenda</strong> es el cuadrito que dice qué color es cada serie.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>El tiempo siempre de izquierda a derecha</td><td>Es como se lee una historia</td></tr>
        <tr><td>Hasta 3 o 4 líneas</td><td>Con más, se vuelve un plato de fideos</td></tr>
        <tr><td>Nombre al final de cada línea</td><td>No hace falta ir y volver de la leyenda</td></tr>
        <tr><td>El eje puede no empezar en cero</td><td>En líneas importa la forma, no el largo; pero avisalo y no exageres</td></tr>
        <tr><td>Intervalos iguales</td><td>Si falta un mes, que se note el hueco</td></tr>
      </table>
      <pre><code>Con leyenda (hay que ir y volver)     Con nombres al final
 ── Centro  ── Norte  ── Sur
     ___/‾‾‾                          ___/‾‾‾  Centro
 ___/‾‾‾                             ___/‾‾‾   Sur
 ____/‾‾                             ____/‾‾   Norte</code></pre>
      <p>¿Y si tenés 10 líneas? Elegí: o mostrás solo las 2 o 3 que importan para tu mensaje y el resto en gris, o hacés <strong>gráficos chicos repetidos</strong>, uno por serie, todos con la misma escala.</p>
      <p>Por ejemplo, para mostrar que en junio crecieron las ventas, alcanza con una línea del total. Si el mensaje es que Centro tira del negocio, ponés Centro en color y las otras en gris.</p>` },
    { titulo: "Títulos, ejes, unidades y fuente", html: `
      <p class="idea">Un gráfico tiene que <strong>entenderse solo</strong>, aunque alguien lo vea sin tu explicación: con título, unidades, fuente y fecha.</p>
      <table>
        <tr><th>Parte</th><th>Qué lleva</th><th>Ejemplo</th></tr>
        <tr><td>Título</td><td>El mensaje, no solo el tema</td><td>"Frescos vende más que cualquier otra categoría"</td></tr>
        <tr><td>Subtítulo</td><td>Qué se mide, dónde y cuándo</td><td>"Ventas por categoría, en pesos, enero a junio de 2025"</td></tr>
        <tr><td>Unidades</td><td>Pesos, unidades, %, personas</td><td>"en pesos", "en %"</td></tr>
        <tr><td>Fuente</td><td>De dónde salen los datos</td><td>"Fuente: planilla de ventas del almacén"</td></tr>
        <tr><td>Fecha</td><td>De cuándo son los datos</td><td>"Datos a junio de 2025"</td></tr>
      </table>
      <p>La <strong>fuente</strong> dice de dónde salen los datos. Sin fuente, nadie puede revisar si el gráfico es cierto. Si los datos son tuyos, decilo: "Fuente: registro propio".</p>
      <p>Las <strong>unidades</strong> evitan malentendidos. "1,3" puede ser 1,3 millones de pesos o 1,3 %. Si los números son grandes, se pueden abreviar: 1,3 M (millones) o 900 mil, siempre que lo aclares.</p>
      <pre><code>Frescos vende más que cualquier otra categoría
Ventas por categoría, en pesos, enero a junio de 2025

Frescos   ███████████████████████████  2.679.100
Almacén   ████████████████████         1.960.100
Bebidas   █████████                      884.550
Limpieza  ███████                        746.600

Fuente: planilla de ventas del almacén.</code></pre>
      <p>Por ejemplo, si mandás este gráfico por WhatsApp, quien lo reciba lo entiende aunque no haya estado en la reunión.</p>` },
  ],
  practica: [
    "Dibujá las 3 sucursales en barras ordenadas, con el eje desde cero. Anotá cuánto le falta a Norte para alcanzar a Centro.",
    "Escribí un título con mensaje, un subtítulo, las unidades y la fuente para el gráfico de ventas por mes. Anotá las 4 cosas.",
    "Buscá un gráfico en un diario y anotá cuáles de estas 5 partes tiene: título con mensaje, subtítulo, unidades, fuente y fecha.",
  ],
  recursos: [
    { t: "Datawrapper Academy: guías para hacer gráficos claros (en inglés)", url: "https://academy.datawrapper.de/" },
    { t: "Fundamentals of Data Visualization, de Claus Wilke, libro gratis en línea (en inglés)", url: "https://clauswilke.com/dataviz/" },
  ],
  quiz: [
    { q: "Si hacés un gráfico de barras, ¿dónde empieza el eje?", opciones: ["En el valor más chico","Donde quede más lindo","En cero","En el promedio"], correcta: 2, explicacion: "En barras el largo es el dato. Empezar en el valor más chico tienta porque resalta diferencias, pero las exagera." },
    { q: "Si las barras son de sucursales, ¿en qué orden van?", opciones: ["De mayor a menor","Alfabético siempre","Al azar","Como vinieron en la planilla"], correcta: 0, explicacion: "Ordenadas, se ve quién gana. El orden alfabético tienta por prolijo, pero esconde la comparación." },
    { q: "Si las barras son meses, ¿en qué orden van?", opciones: ["De mayor a menor","Alfabético","Al azar","En el orden del calendario"], correcta: 3, explicacion: "Los meses tienen orden natural. De mayor a menor tienta por la regla anterior, pero rompe el tiempo." },
    { q: "Tenés 15 productos con nombres largos. ¿Qué barras usás?", opciones: ["Verticales con el texto inclinado","Horizontales y ordenadas","Una torta","Una línea"], correcta: 1, explicacion: "Horizontales se leen sin girar la cabeza. Verticales tientan porque es lo que sale por defecto." },
    { q: "Si ponés el valor en la punta de cada barra, ¿qué podés sacar?", opciones: ["El título","Las barras","El eje y las líneas de fondo","La fuente"], correcta: 2, explicacion: "El valor ya está escrito. Sacar la fuente tienta por limpieza, pero la fuente siempre va." },
    { q: "Querés mostrar 10 líneas en un gráfico. ¿Qué hacés?", opciones: ["Destacás 2 o 3 y el resto en gris, o hacés gráficos chicos repetidos","Las ponés todas de colores distintos","Usás 3D","Sacás el eje del tiempo"], correcta: 0, explicacion: "Con muchas líneas se arma un plato de fideos. Diez colores tientan, pero nadie los distingue." },
    { q: "¿Qué es una serie en un gráfico de líneas?", opciones: ["El título","El eje","La fuente","Cada conjunto de datos que se dibuja como una línea"], correcta: 3, explicacion: "Una serie es una línea, por ejemplo, Centro mes a mes. El eje tienta, pero es la regla." },
    { q: "Si cada línea tiene su nombre escrito al final, ¿qué te ahorrás?", opciones: ["El título","La leyenda, y el ir y venir para leerla","Los datos","El eje del tiempo"], correcta: 1, explicacion: "El nombre al final reemplaza la leyenda. El título tienta, pero siempre hace falta." },
    { q: "En un gráfico de líneas, ¿el eje tiene que empezar en cero?", opciones: ["Sí, siempre, como en barras","Nunca","No siempre: importa la forma, pero hay que avisarlo y no exagerar","Solo si hay más de 3 líneas"], correcta: 2, explicacion: "En líneas importa la forma. \"Siempre, como en barras\" tienta por la regla anterior, pero ahí el largo es el dato." },
    { q: "Si el título dice \"Ventas por categoría\", ¿cómo lo mejorás?", opciones: ["Con el mensaje: \"Frescos vende más que cualquier otra categoría\"","Lo dejás así","Lo sacás","Le agregás signos de exclamación"], correcta: 0, explicacion: "El título dice la conclusión. Dejarlo tienta porque es correcto, pero obliga a buscar la idea." },
    { q: "Si los datos son tuyos, ¿qué ponés como fuente?", opciones: ["Nada","Una página cualquiera","\"Fuente: internet\"","\"Fuente: registro propio\""], correcta: 3, explicacion: "La fuente dice de dónde salen. \"Nada\" tienta porque son tuyos, pero quien lo ve no lo sabe." },
    { q: "Si el gráfico muestra \"1,3\" sin unidades, ¿qué problema hay?", opciones: ["Ninguno","No se sabe si son millones de pesos, porcentaje u otra cosa","Que el número es chico","Que falta color"], correcta: 1, explicacion: "Sin unidades hay malentendidos. \"Ninguno\" tienta porque vos sabés qué es, pero el que lo ve no." },
  ],
},
{
  id: "claridad",
  icono: "✨",
  titulo: "Menos es más: color y foco",
  nivel: "Intermedio",
  objetivos: [
    "Sacar del gráfico todo lo que no ayuda a entender el mensaje",
    "Usar el color para destacar y no para decorar",
    "Elegir colores que también vean las personas con daltonismo",
  ],
  lecciones: [
    { titulo: "Sacar lo que sobra", html: `
      <p class="idea">Cada cosa del gráfico tiene que ayudar a entender. Lo que no ayuda <strong>distrae</strong>: sacalo.</p>
      <p>A lo que no aporta se lo llama <strong>ruido</strong>: adornos, bordes, fondos de color, sombras, 3D y líneas de fondo fuertes. Los programas lo agregan solos, y hay que sacarlo a mano.</p>
      <table>
        <tr><th>Sacá o suavizá</th><th>Por qué</th></tr>
        <tr><td>Efecto 3D</td><td>Deforma los largos: las barras de atrás parecen más chicas</td></tr>
        <tr><td>Bordes y fondos de color</td><td>Compiten con los datos</td></tr>
        <tr><td>Líneas de fondo (la grilla) fuertes</td><td>Si hacen falta, en gris clarito</td></tr>
        <tr><td>Leyenda lejos</td><td>Mejor el nombre pegado a cada dato</td></tr>
        <tr><td>Decimales de más</td><td>$ 2.679.100,00 no aporta: $ 2.679.100 o 2,7 M</td></tr>
        <tr><td>Letra inclinada o chica</td><td>Cuesta leer</td></tr>
      </table>
      <pre><code>Antes                                   Después
╔═══════════════════════════╗
║ ░░ VENTAS 2025 ░░         ║            Frescos vende más
║ ▓▓▓▓▓▓▓▓▓▓ ▒▒▒▒▒▒ ▓▓▓ ▒▒  ║            Frescos   ███████████  2,7 M
║ ── ── ── ── ── ── ── ──   ║            Almacén   ████████     2,0 M
║ [■ Frescos ■ Almacén ...] ║            Bebidas   ████         0,9 M
╚═══════════════════════════╝            Limpieza  ███          0,7 M</code></pre>
      <p>La pregunta para cada parte: <strong>¿si la saco, se entiende menos?</strong> Si la respuesta es no, sacala.</p>
      <p>Por ejemplo, un gráfico de Excel trae por defecto título genérico, leyenda abajo, grilla y bordes. Sacando la leyenda (con una sola serie no hace falta) y la grilla, queda más claro en 1 minuto.</p>` },
    { titulo: "El color para destacar", video: {"id":"A-MoCjGFhDY","t":"Uso del color en visualizaciones de datos · Sergio Bromberg (3:56)"}, html: `
      <p class="idea">El color es lo primero que ve el ojo. Usalo para <strong>señalar lo importante</strong>: un color fuerte para lo que importa y gris para el resto.</p>
      <p>Si todas las barras son de colores distintos, el ojo no sabe dónde mirar. Si una sola tiene color, va directo ahí.</p>
      <pre><code>Mensaje: "Junio fue el mejor mes del semestre"

Ene  ░░░░░░░░░░░░░░░░░░░         (gris)
Feb  ░░░░░░░░░░░░░░░░            (gris)
Mar  ░░░░░░░░░░░░░░░░░░░░░░░     (gris)
Abr  ░░░░░░░░░░░░░░░░░░░         (gris)
May  ░░░░░░░░░░░░░░░░░░░░░░░     (gris)
Jun  ██████████████████████████  (color)</code></pre>
      <table>
        <tr><th>Regla</th><th>Ejemplo</th></tr>
        <tr><td>Un color para destacar, gris para el resto</td><td>Junio en azul, los otros meses en gris</td></tr>
        <tr><td>El mismo color significa lo mismo en todos los gráficos</td><td>Si Centro es azul en uno, es azul en todos</td></tr>
        <tr><td>Colores con significado, con cuidado</td><td>Rojo para lo malo, verde para lo bueno, si tu público lo entiende así</td></tr>
        <tr><td>Para valores de menos a más, un solo color en tonos</td><td>Celeste clarito a azul oscuro</td></tr>
      </table>
      <p>Una <strong>paleta</strong> es el conjunto de colores que usás. Para no inventarla, hay paletas ya probadas, como las de ColorBrewer, pensadas para gráficos y mapas.</p>
      <p>Por ejemplo, para mostrar que Centro tira del negocio, pintás la línea de Centro de color y las de Norte y Sur en gris: el mensaje se ve antes de leer el título.</p>` },
    { titulo: "Colores que todos ven", html: `
      <p class="idea">Cerca de 1 de cada 12 varones y 1 de cada 200 mujeres tiene algún tipo de <strong>daltonismo</strong>: no distinguen bien algunos colores, sobre todo el rojo del verde.</p>
      <p>Si tu gráfico depende de distinguir rojo de verde, una parte de tu público no lo va a entender. Algunas reglas simples:</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Azul y naranja como par de colores</td><td>Rojo y verde juntos como única diferencia</td></tr>
        <tr><td>Diferencias de claro y oscuro, no solo de tono</td><td>Dos colores con el mismo brillo</td></tr>
        <tr><td>Nombres escritos al lado de cada dato</td><td>Depender solo de la leyenda de colores</td></tr>
        <tr><td>Probar el gráfico con un simulador</td><td>Suponer que todos ven igual</td></tr>
      </table>
      <p>Un <strong>simulador de daltonismo</strong> muestra cómo ve una imagen alguien con daltonismo. Subís tu gráfico y lo mirás: si dos colores parecen iguales, cambialos.</p>
      <p>El <strong>contraste</strong> es la diferencia entre el color del texto o de la barra y el fondo. Con poco contraste (gris clarito sobre blanco), cuesta leer, sobre todo en el celular al sol o en un proyector.</p>
      <pre><code>Prueba rápida antes de compartir
1. ¿Se entiende en blanco y negro? (imprimilo o sacale el color)
2. ¿Los nombres están escritos al lado de los datos?
3. ¿Lo pasé por un simulador de daltonismo?
4. ¿Se lee en el celular?</code></pre>
      <p>Por ejemplo, un semáforo de verde, amarillo y rojo para "bien, regular y mal" se vuelve ilegible para muchas personas; si además escribís "bien", "regular" y "mal", lo entienden todas.</p>` },
  ],
  practica: [
    "Hacé un gráfico con las opciones por defecto de tu planilla y otro sacando el ruido. Anotá cuántas cosas sacaste.",
    "Pintá solo junio de color y el resto de los meses en gris. Mostráselo a alguien 5 segundos y anotá qué recuerda.",
    "Pasá un gráfico tuyo por un simulador de daltonismo. Anotá si algún par de colores se confunde y qué cambiaste.",
  ],
  recursos: [
    { t: "ColorBrewer: paletas de colores para gráficos y mapas", url: "https://colorbrewer2.org/" },
    { t: "Coblis: simulador de daltonismo para probar tus colores", url: "https://www.color-blindness.com/coblis-color-blindness-simulator/" },
    { t: "Storytelling with Data, de Cole Nussbaumer Knaflic: blog y ejercicios (en inglés)", url: "https://www.storytellingwithdata.com/" },
  ],
  quiz: [
    { q: "Si una parte del gráfico no ayuda a entender el mensaje, ¿qué hacés?", opciones: ["La dejás porque la puso el programa","La agrandás","La sacás","La pintás de rojo"], correcta: 2, explicacion: "Lo que no ayuda distrae. Dejarla tienta porque vino por defecto, pero el programa no conoce tu mensaje." },
    { q: "¿Qué problema tiene el efecto 3D en un gráfico de barras?", opciones: ["Deforma los largos y las barras de atrás parecen más chicas","Ninguno, se ve más moderno","Ocupa más memoria","No se puede imprimir"], correcta: 0, explicacion: "El 3D engaña al ojo. \"Más moderno\" tienta, pero la lectura empeora." },
    { q: "Si el gráfico tiene una sola serie, ¿hace falta la leyenda?", opciones: ["Sí, siempre","Sí, con muchos colores","Solo en 3D","No: alcanza con el título"], correcta: 3, explicacion: "Con una serie, la leyenda no dice nada nuevo. \"Siempre\" tienta porque los programas la ponen." },
    { q: "Si querés mostrar que junio fue el mejor mes, ¿cómo usás el color?", opciones: ["Cada mes de un color distinto","Junio de color y el resto en gris","Todos en rojo","Sin color"], correcta: 1, explicacion: "El color señala lo importante. Seis colores tientan por alegres, pero el ojo no sabe dónde mirar." },
    { q: "Si Centro es azul en un gráfico, ¿de qué color va en el siguiente?", opciones: ["Otro color para variar","Gris","Azul también","Da igual"], correcta: 2, explicacion: "El mismo color significa lo mismo. Variar tienta para que no aburra, pero confunde." },
    { q: "¿Qué es una paleta?", opciones: ["El conjunto de colores que usás en tus gráficos","Un tipo de gráfico","La fuente de los datos","El título"], correcta: 0, explicacion: "Es el juego de colores. \"Un tipo de gráfico\" tienta por el nombre, pero no." },
    { q: "Si querés mostrar valores de menos a más, ¿qué colores usás?", opciones: ["Colores muy distintos al azar","Rojo y verde","Todo gris","Un solo color en tonos, de claro a oscuro"], correcta: 3, explicacion: "Los tonos muestran orden. Colores al azar tientan por vistosos, pero no dicen cuál es más." },
    { q: "Tu gráfico usa solo rojo y verde para separar dos grupos. ¿Qué problema hay?", opciones: ["Ninguno","Muchas personas con daltonismo no los distinguen","Que son colores feos","Que no se imprimen"], correcta: 1, explicacion: "Rojo y verde es la confusión más común. \"Ninguno\" tienta si vos los ves bien." },
    { q: "Si querés que tu gráfico se entienda aunque no se distingan los colores, ¿qué hacés?", opciones: ["Agregás más colores","Sacás el título","Escribís el nombre al lado de cada dato","Usás 3D"], correcta: 2, explicacion: "El texto no depende del color. Más colores tienta, pero empeora el problema." },
    { q: "¿Para qué sirve un simulador de daltonismo?", opciones: ["Para ver cómo ve tu gráfico alguien con daltonismo","Para elegir el tipo de gráfico","Para calcular promedios","Para buscar la fuente"], correcta: 0, explicacion: "Muestra la imagen como la ve otra persona. Elegir el tipo tienta, pero eso es otra decisión." },
    { q: "Si tu gráfico tiene texto gris clarito sobre fondo blanco, ¿qué falta?", opciones: ["Más datos","Una leyenda","Efecto 3D","Contraste"], correcta: 3, explicacion: "Con poco contraste cuesta leer. Una leyenda tienta, pero no arregla la lectura." },
    { q: "Usás un semáforo verde, amarillo y rojo para \"bien, regular y mal\". ¿Cómo lo hacés legible para todos?", opciones: ["Usás colores más fuertes","Escribís también \"bien\", \"regular\" y \"mal\"","Agregás un cuarto color","Lo dejás así"], correcta: 1, explicacion: "El texto no depende del color. Colores más fuertes tientan, pero el rojo y el verde se siguen confundiendo." },
  ],
},
{
  id: "enganos",
  icono: "🕵️",
  titulo: "Gráficos que engañan",
  nivel: "Intermedio",
  objetivos: [
    "Detectar ejes cortados, períodos elegidos a dedo y comparaciones injustas",
    "Distinguir números totales de promedios y porcentajes",
    "Explicar por qué que dos cosas vayan juntas no prueba que una cause la otra",
  ],
  lecciones: [
    { titulo: "El eje cortado", video: {"id":"Zzbl33nRG9E","t":"Cómo los gráficos te pueden manipular · Datademia (4:38)"}, html: `
      <p class="idea">El engaño más común: un gráfico de barras con el eje que <strong>no empieza en cero</strong>. Una diferencia chica parece enorme.</p>
      <p>Las sucursales Norte y Sur del almacén vendieron casi lo mismo: Norte $ 1.670.050 y Sur $ 1.708.350. Sur vendió $ 38.300 más: apenas un 2,3 % más.</p>
      <pre><code>Eje desde 0 (honesto)
Norte  ████████████████████████████████  1.670.050
Sur    █████████████████████████████████ 1.708.350

Eje desde 1.650.000 (engañoso)
Norte  ███████████                       1.670.050
Sur    ██████████████████████████████    1.708.350</code></pre>
      <p>Con el eje cortado, la barra de Sur parece casi 3 veces la de Norte. Pasa porque solo se dibuja lo que está arriba de 1.650.000: 58.350 contra 20.050.</p>
      <table>
        <tr><th>Cómo detectarlo</th><th>Qué hacer</th></tr>
        <tr><td>Mirá dónde empieza el eje en las barras</td><td>Si no es cero, desconfiá del tamaño de las diferencias</td></tr>
        <tr><td>Leé los números, no solo los largos</td><td>Calculá la diferencia real</td></tr>
        <tr><td>Fijate si el eje tiene un corte (una zeta o dos rayitas)</td><td>Aunque esté avisado, el ojo se engaña igual</td></tr>
      </table>
      <p>En los gráficos de <strong>líneas</strong>, en cambio, cortar el eje puede estar bien, porque importa la forma y no el largo. Pero si el eje es muy angosto, una suba chiquita parece una montaña.</p>
      <p>Por ejemplo, un aviso que dice "¡Nuestras ventas explotaron!" con barras de eje cortado puede estar mostrando una suba del 2 %.</p>` },
    { titulo: "Elegir el período y comparar mal", html: `
      <p class="idea">Otro engaño es elegir <strong>desde cuándo</strong> mirar, o comparar <strong>totales</strong> cuando lo justo es comparar promedios o porcentajes.</p>
      <p><strong>Elegir el período a dedo.</strong> Las ventas del almacén fueron $ 932.250 en enero, $ 781.600 en febrero y $ 1.292.900 en junio.</p>
      <table>
        <tr><th>Si arrancás en...</th><th>De ahí a junio crecieron...</th></tr>
        <tr><td>Enero</td><td>39 %</td></tr>
        <tr><td>Febrero (el peor mes)</td><td>65 %</td></tr>
      </table>
      <p>Los dos números son ciertos, pero arrancar en febrero, justo el peor mes, exagera el crecimiento. Por eso conviene mostrar todo el período y preguntar: ¿por qué empieza ahí?</p>
      <p><strong>Totales contra promedios.</strong> Un <strong>promedio</strong> es el total dividido por la cantidad de casos. El almacén de Centro vendió mucho más que las otras sucursales en total, pero porque hizo más ventas:</p>
      <table>
        <tr><th>Sucursal</th><th>Ventas</th><th>Total ($)</th><th>Promedio por venta ($)</th></tr>
        <tr><td>Centro</td><td>436</td><td>2.891.950</td><td>6.633</td></tr>
        <tr><td>Sur</td><td>255</td><td>1.708.350</td><td>6.699</td></tr>
        <tr><td>Norte</td><td>256</td><td>1.670.050</td><td>6.524</td></tr>
      </table>
      <p>Por cada venta, las tres sucursales venden casi lo mismo. Decir "Centro vende mejor" con un gráfico de totales es injusto: Centro tiene más clientes, no clientes que gastan más.</p>
      <p>Lo mismo pasa con ciudades o países: una ciudad grande siempre tiene más de todo. Para comparar en serio, se usa <strong>por habitante</strong> (dividir por la población) o un porcentaje.</p>
      <p>Por ejemplo, si una provincia tiene más accidentes que otra, antes de concluir algo preguntá: ¿y cuántos autos o habitantes tiene cada una?</p>` },
    { titulo: "Ir juntos no es causar", html: `
      <p class="idea">Que dos cosas suban juntas se llama <strong>correlación</strong>. No prueba que una <strong>cause</strong> la otra: puede haber una tercera cosa detrás, o ser casualidad.</p>
      <p>El ejemplo clásico: en verano se venden más helados y también hay más personas que se ahogan. Un gráfico de dispersión mostraría los puntos subiendo juntos. ¿Los helados ahogan? No: el <strong>calor</strong> hace que la gente compre helados y también que vaya más a nadar.</p>
      <pre><code>Correlación sin causa

        calor
       ↙     ↘
  helados    más gente nadando
                   ↓
             más ahogados</code></pre>
      <table>
        <tr><th>Antes de decir "A causa B", preguntá</th><th>Ejemplo</th></tr>
        <tr><td>¿Hay una tercera cosa que mueve a las dos?</td><td>El calor, en helados y ahogados</td></tr>
        <tr><td>¿Puede ser al revés?</td><td>¿Los que hacen ejercicio duermen mejor, o los que duermen mejor tienen ganas de hacer ejercicio?</td></tr>
        <tr><td>¿Son pocos datos y puede ser casualidad?</td><td>Dos meses que coinciden no prueban nada</td></tr>
      </table>
      <p>Otros engaños para tener en la lista: <strong>dos ejes</strong> con escalas distintas en el mismo gráfico (se puede hacer que dos líneas parezcan ir juntas eligiendo las escalas), tortas cuyas partes no suman 100 % y gráficos sin fuente.</p>
      <pre><code>Lista para revisar un gráfico antes de creerle
□ ¿Dónde empieza el eje de las barras?
□ ¿Por qué empieza en esa fecha?
□ ¿Compara totales o promedios? ¿Es justo?
□ ¿Dice de dónde salen los datos?
□ ¿Afirma una causa solo porque dos cosas van juntas?</code></pre>
      <p>Por ejemplo, si un gráfico muestra que en los barrios con más farmacias hay más gente enferma, la tercera cosa puede ser la cantidad de habitantes: más gente, más farmacias y más enfermos.</p>` },
  ],
  practica: [
    "Dibujá Norte y Sur con el eje desde 0 y desde 1.650.000. Anotá cuántas veces más larga parece la barra de Sur en cada caso.",
    "Calculá cuánto crecieron las ventas de marzo a junio y de enero a junio. Anotá los dos porcentajes y cuál elegiría alguien que quiere exagerar.",
    "Buscá un gráfico en redes o en un diario y pasale la lista de 5 preguntas. Anotá cuántas pasa.",
  ],
  recursos: [
    { t: "Our World in Data: gráficos con fuentes citadas sobre temas del mundo (en inglés)", url: "https://ourworldindata.org/" },
    { t: "Fundamentals of Data Visualization, de Claus Wilke, libro gratis en línea (en inglés)", url: "https://clauswilke.com/dataviz/" },
  ],
  quiz: [
    { q: "Si un gráfico de barras arranca el eje en 1.650.000, ¿qué pasa?", opciones: ["Se ve más preciso","No cambia nada","Las diferencias chicas parecen enormes","Las barras quedan iguales"], correcta: 2, explicacion: "Solo se dibuja lo que está arriba del corte. \"Más preciso\" tienta porque se notan las diferencias, pero se exageran." },
    { q: "Si Norte vendió $ 1.670.050 y Sur $ 1.708.350, ¿cuánto más vendió Sur?", opciones: ["Un 2,3 %","El triple","El doble","Un 50 %"], correcta: 0, explicacion: "La diferencia es de $ 38.300. El triple tienta porque así se ve con el eje cortado." },
    { q: "En un gráfico de líneas, ¿siempre está mal que el eje no empiece en cero?", opciones: ["Sí, siempre está mal","Nunca importa","Solo si hay colores","No: importa la forma, pero si es muy angosto exagera"], correcta: 3, explicacion: "En líneas se puede cortar con cuidado. \"Siempre está mal\" tienta por la regla de las barras." },
    { q: "Si alguien muestra el crecimiento desde febrero, el peor mes, ¿qué preguntás?", opciones: ["Nada, los números son ciertos","¿Por qué empieza ahí? Y pedís ver todo el período","Si usó Excel","De qué color es"], correcta: 1, explicacion: "Los números son ciertos, pero elegidos para exagerar. \"Son ciertos\" tienta, pero no cuentan todo." },
    { q: "Si las ventas fueron 932.250 en enero y 1.292.900 en junio, ¿cuánto crecieron?", opciones: ["Un 65 %","Un 100 %","Un 39 %","Un 10 %"], correcta: 2, explicacion: "De enero a junio, 39 %. El 65 % tienta, pero es desde febrero." },
    { q: "¿Qué es un promedio?", opciones: ["El total dividido por la cantidad de casos","El valor más grande","El total","El valor del medio de la tabla"], correcta: 0, explicacion: "Total sobre cantidad. \"El total\" tienta, pero no tiene en cuenta cuántos casos hay." },
    { q: "Si Centro vendió más en total porque hizo 436 ventas contra unas 255 de las otras, ¿qué conviene comparar?", opciones: ["Solo el total","El nombre de la sucursal","El color de las barras","El promedio por venta"], correcta: 3, explicacion: "El promedio saca el efecto de tener más clientes. El total tienta, pero es injusto." },
    { q: "Si una ciudad grande tiene más robos que una chica, ¿qué mirás para comparar?", opciones: ["Solo el total de robos","Los robos por habitante","La superficie","El nombre de la ciudad"], correcta: 1, explicacion: "Por habitante es justo. El total tienta por simple, pero una ciudad grande tiene más de todo." },
    { q: "Si en verano suben los helados y los ahogados, ¿qué explica las dos cosas?", opciones: ["Los helados causan ahogos","Es casualidad siempre","El calor, una tercera cosa que mueve a las dos","Los ahogados causan helados"], correcta: 2, explicacion: "Una tercera cosa detrás. \"Los helados causan ahogos\" tienta porque van juntos, pero no hay causa." },
    { q: "Los que hacen ejercicio duermen mejor. ¿Qué otra explicación revisás?", opciones: ["Que sea al revés: los que duermen mejor tienen ganas de hacer ejercicio","Ninguna","Que el sueño no existe","Que el gráfico es lindo"], correcta: 0, explicacion: "La causa puede ir al revés. \"Ninguna\" tienta porque la primera idea parece obvia." },
    { q: "Si un gráfico tiene dos ejes con escalas distintas y las líneas parecen ir juntas, ¿qué pensás?", opciones: ["Que seguro una causa la otra","Que es el mejor gráfico","Nada","Que eligiendo las escalas se puede hacer parecer eso"], correcta: 3, explicacion: "Con dos ejes se pueden fabricar coincidencias. \"Una causa la otra\" tienta porque se ven pegadas." },
    { q: "Ves un gráfico impactante en redes sin fuente. ¿Qué hacés?", opciones: ["Lo compartís enseguida","Desconfiás y buscás de dónde salen los datos antes de compartirlo","Le creés porque tiene números","Lo imprimís"], correcta: 1, explicacion: "Sin fuente no se puede revisar. Compartirlo tienta porque impacta, pero puede ser falso." },
  ],
},
{
  id: "herramientas",
  icono: "🛠️",
  titulo: "Hacer el gráfico: planillas y Datawrapper",
  nivel: "Avanzado",
  objetivos: [
    "Hacer y limpiar un gráfico en Google Sheets o en Excel",
    "Hacer un gráfico en Datawrapper en 4 pasos",
    "Compartir el gráfico como imagen, con fuente y texto alternativo",
  ],
  lecciones: [
    { titulo: "En Google Sheets o en Excel", video: {"id":"M2CsxRphj4I","t":"Cómo crear gráficos en Google Sheets · El Rincón de Primaria (4:44)"}, html: `
      <p class="idea">Las planillas hacen el gráfico en segundos. Lo que lleva trabajo es <strong>limpiarlo</strong>: lo que trae por defecto casi nunca es lo mejor.</p>
      <p>Primero, los datos en dos columnas: la categoría y el valor, con el nombre de cada columna en la primera fila.</p>
      <pre><code>   A           B
1  Categoría   Total
2  Frescos     2679100
3  Almacén     1960100
4  Bebidas     884550
5  Limpieza    746600</code></pre>
      <table>
        <tr><th>Paso</th><th>Google Sheets</th><th>Excel</th></tr>
        <tr><td>1. Elegir los datos</td><td>Seleccioná A1:B5</td><td>Seleccioná A1:B5</td></tr>
        <tr><td>2. Insertar</td><td>Menú Insertar → Gráfico</td><td>Pestaña Insertar → Gráficos recomendados</td></tr>
        <tr><td>3. Elegir el tipo</td><td>Editor de gráficos → Configuración → Tipo de gráfico</td><td>Elegí el tipo en la ventana</td></tr>
        <tr><td>4. Limpiar</td><td>Editor → Personalizar: título, ejes, leyenda, líneas de cuadrícula</td><td>Botón + al lado del gráfico: título, ejes, leyenda, líneas</td></tr>
      </table>
      <p>Una lista para limpiar, que es lo que ya viste en el curso:</p>
      <ul>
        <li>Ordená los datos de mayor a menor en la planilla antes de hacer el gráfico.</li>
        <li>Poné un título con el mensaje y sacá la leyenda si hay una sola serie.</li>
        <li>Sacá o aclará la cuadrícula, y poné los valores en las barras si ayudan.</li>
        <li>Revisá que el eje de las barras empiece en cero.</li>
        <li>Agregá la fuente en el subtítulo o abajo, en un cuadro de texto.</li>
      </ul>
      <p>Por ejemplo, con la tabla de categorías, en 2 minutos tenés un gráfico de barras ordenado, con título y fuente, listo para copiar y pegar en un documento o en una presentación.</p>` },
    { titulo: "Datawrapper en 4 pasos", video: {"id":"fD8euZN5mUs","t":"Tutorial para crear gráficos en Datawrapper · Bitácora Digital por Lucero Hernández (10:36)"}, html: `
      <p class="idea"><strong>Datawrapper</strong> es una página gratis para hacer gráficos claros desde el navegador. La usan muchos diarios, y ya trae buenas opciones por defecto.</p>
      <p>Se trabaja en 4 pasos, que aparecen arriba en la pantalla:</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>1. Subir los datos</td><td>Copiás la tabla de tu planilla y la pegás</td></tr>
        <tr><td>2. Revisar y describir</td><td>Controlás que cada columna sea texto o número</td></tr>
        <tr><td>3. Visualizar</td><td>Elegís el tipo de gráfico, los colores, el título, la descripción y la fuente</td></tr>
        <tr><td>4. Publicar y compartir</td><td>Bajás una imagen o conseguís un enlace</td></tr>
      </table>
      <p>Ventajas frente a la planilla: los títulos, la fuente y las notas tienen su lugar propio, los colores ya son prolijos y el gráfico se adapta al celular.</p>
      <pre><code>Lo que completás en el paso 3
Título:       Frescos vende más que cualquier otra categoría
Descripción:  Ventas por categoría, en pesos, enero a junio de 2025
Fuente:       Planilla de ventas del almacén
Notas:        Datos de las 3 sucursales</code></pre>
      <p>Cuidado con los números: si tu planilla escribe 2.679.100 con puntos, revisá en el paso 2 que Datawrapper los tome como números y no como texto.</p>
      <p>Para guardar tus gráficos y volver a editarlos, conviene crear una cuenta gratis. Y no subas datos personales de otras personas (nombres, teléfonos o documentos) a ninguna página.</p>
      <p>Por ejemplo, con las ventas por mes, en el paso 3 elegís "Líneas", destacás junio con un color y escribís el título con el mensaje: en 5 minutos queda listo para un informe.</p>` },
    { titulo: "Compartirlo bien", html: `
      <p class="idea">Un gráfico se comparte como <strong>imagen</strong> (para WhatsApp, documentos o presentaciones) o como <strong>enlace</strong>. En los dos casos, que viaje con su título, su fuente y una descripción.</p>
      <table>
        <tr><th>Formato</th><th>Para qué</th></tr>
        <tr><td>Imagen PNG</td><td>WhatsApp, redes, documentos: se ve igual en todos lados</td></tr>
        <tr><td>Enlace</td><td>Si los datos cambian o querés que se pueda acercar</td></tr>
        <tr><td>Pegar en una presentación</td><td>Una idea por diapositiva, el gráfico grande</td></tr>
      </table>
      <p><strong>PNG</strong> es un formato de imagen que mantiene nítidos el texto y las líneas. Para gráficos es mejor que una foto de la pantalla.</p>
      <p>El <strong>texto alternativo</strong> es una descripción escrita de la imagen. Lo leen en voz alta los lectores de pantalla que usan las personas ciegas o con baja visión. Word, Google Docs, PowerPoint y las redes tienen dónde escribirlo.</p>
      <pre><code>Texto alternativo de ejemplo
"Gráfico de barras: ventas por categoría de enero a junio de 2025.
Frescos vende más, con $ 2.679.100; sigue Almacén con $ 1.960.100;
Bebidas, $ 884.550, y Limpieza, $ 746.600."</code></pre>
      <p>La regla para escribirlo: empezá por el tipo de gráfico, después el mensaje y al final los datos principales. Si el gráfico es muy complejo, poné los datos en una tabla al lado.</p>
      <p>Antes de mandarlo, revisá que el texto se lea en el celular: lo que en la computadora se ve bien, en una pantalla chica puede quedar diminuto.</p>
      <p>Por ejemplo, si mandás el gráfico de ventas al grupo de WhatsApp del negocio, va como PNG, con el título con el mensaje y la fuente dentro de la imagen, para que no se pierdan si alguien lo reenvía.</p>` },
  ],
  practica: [
    "Hacé el gráfico de categorías en Google Sheets o en Excel y limpialo con la lista de la lección. Anotá cuántos pasos de la lista aplicaste.",
    "Hacé el gráfico de ventas por mes en Datawrapper, con título, descripción y fuente. Anotá cuántos minutos tardaste.",
    "Escribí el texto alternativo de uno de tus gráficos y leéselo a alguien sin mostrárselo. Anotá si pudo decirte el mensaje.",
  ],
  recursos: [
    { t: "Ayuda de Google: agregar y editar un gráfico en Hojas de cálculo", url: "https://support.google.com/docs/answer/63824" },
    { t: "Ayuda de Microsoft: crear un gráfico de principio a fin en Excel", url: "https://support.microsoft.com/es-es/office/crear-un-gr%C3%A1fico-de-principio-a-fin-0baf399e-dd61-4e18-8a73-b3fd5d5680c2" },
    { t: "Datawrapper: hacer gráficos gratis en el navegador", url: "https://www.datawrapper.de/" },
    { t: "W3C: cómo describir imágenes complejas, como gráficos, con texto alternativo (en inglés)", url: "https://www.w3.org/WAI/tutorials/images/complex/" },
  ],
  quiz: [
    { q: "Si vas a hacer un gráfico en la planilla, ¿cómo ponés los datos?", opciones: ["Todo en una celda","Mezclados con texto","En columnas, con el nombre de cada una en la primera fila","En una foto"], correcta: 2, explicacion: "Columnas con encabezado. Todo en una celda tienta por rápido, pero la planilla no lo entiende." },
    { q: "En Google Sheets, ¿dónde está la opción para hacer un gráfico?", opciones: ["Menú Insertar → Gráfico","Menú Archivo → Imprimir","Menú Ayuda","Menú Formato → Número"], correcta: 0, explicacion: "Insertar → Gráfico. Formato tienta porque cambia cómo se ve, pero no crea gráficos." },
    { q: "En Excel, ¿qué opción te sugiere tipos de gráfico para tus datos?", opciones: ["Archivo → Guardar","Revisar → Ortografía","Vista → Zoom","Insertar → Gráficos recomendados"], correcta: 3, explicacion: "Gráficos recomendados está en Insertar. Vista tienta, pero solo cambia cómo ves la hoja." },
    { q: "Si la planilla te hizo el gráfico, ¿ya está listo?", opciones: ["Sí, siempre","No: hay que limpiarlo (título, leyenda, eje, fuente)","Sí, si tiene colores","Solo si es 3D"], correcta: 1, explicacion: "Lo que trae por defecto casi nunca es lo mejor. \"Sí, siempre\" tienta porque se ve terminado." },
    { q: "Querés las barras ordenadas de mayor a menor. ¿Qué hacés?", opciones: ["Las movés a mano en el dibujo","No se puede","Ordenás los datos en la planilla antes de hacer el gráfico","Cambiás los colores"], correcta: 2, explicacion: "El gráfico sigue el orden de la tabla. \"No se puede\" tienta, pero se ordena desde los datos." },
    { q: "¿Qué es Datawrapper?", opciones: ["Una página gratis para hacer gráficos claros desde el navegador","Un tipo de gráfico","Una planilla de cálculo","Un formato de imagen"], correcta: 0, explicacion: "Es una herramienta web. \"Una planilla\" tienta porque pegás tablas, pero no calcula como una." },
    { q: "En Datawrapper, ¿en qué paso elegís el tipo de gráfico y el título?", opciones: ["En el paso 1, Subir los datos","En el paso 4, Publicar","En ninguno","En el paso 3, Visualizar"], correcta: 3, explicacion: "Visualizar es donde se arma. Subir los datos tienta porque es el primero, pero ahí solo pegás." },
    { q: "Si Datawrapper tomó tus números 2.679.100 como texto, ¿dónde lo arreglás?", opciones: ["En el paso 4","En el paso 2, Revisar y describir","No se puede","Cambiando el color"], correcta: 1, explicacion: "El paso 2 controla si cada columna es número o texto. \"No se puede\" tienta, pero se revisa ahí." },
    { q: "Tu planilla tiene nombres y teléfonos de clientes. ¿Los subís a una página de gráficos?", opciones: ["Sí, para que el gráfico tenga más datos","Sí, si es gratis","No: no se suben datos personales de otras personas","Sí, si después los borrás"], correcta: 2, explicacion: "Los datos personales no se suben. \"Si después los borrás\" tienta, pero ya quedaron en otro lado." },
    { q: "Si vas a mandar el gráfico por WhatsApp, ¿en qué formato?", opciones: ["Imagen PNG, con título y fuente dentro de la imagen","Una foto movida de la pantalla","Solo el enlace a la planilla","Un texto describiendo los números"], correcta: 0, explicacion: "El PNG se ve nítido y la fuente viaja con la imagen. La foto de la pantalla tienta por rápida, pero sale borrosa." },
    { q: "¿Para qué sirve el texto alternativo de un gráfico?", opciones: ["Para cambiar el color","Para que el gráfico pese menos","Para ocultar la fuente","Para que lo lean en voz alta los lectores de pantalla de personas ciegas o con baja visión"], correcta: 3, explicacion: "Es una descripción para quien no ve la imagen. \"Para que pese menos\" tienta, pero no cambia la imagen." },
    { q: "Si escribís el texto alternativo de un gráfico, ¿con qué empezás?", opciones: ["Todos los números de la tabla","El tipo de gráfico, después el mensaje y al final los datos principales","El nombre del archivo","\"Imagen\""], correcta: 1, explicacion: "Tipo, mensaje y datos. Todos los números tientan por completos, pero esconden el mensaje." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu gráfico con mensaje",
  nivel: "Avanzado",
  objetivos: [
    "Elegir datos reales, una pregunta y un mensaje",
    "Hacer un gráfico claro, honesto y accesible",
    "Evaluarlo con una rúbrica y mejorarlo con la opinión de otra persona",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es hacer <strong>un gráfico con mensaje</strong> a partir de datos reales, que otra persona entienda en menos de 10 segundos.</p>
      <table>
        <tr><th>Paso</th><th>Módulo</th></tr>
        <tr><td>Elegí datos reales: tuyos, de la planilla de práctica o de una fuente pública</td><td>Gráficos que engañan (fuente)</td></tr>
        <tr><td>Escribí la pregunta y el mensaje en una frase</td><td>Un gráfico es una respuesta</td></tr>
        <tr><td>Elegí el tipo de gráfico</td><td>Elegir el gráfico justo</td></tr>
        <tr><td>Hacelo y limpialo</td><td>Barras y líneas, Menos es más, Herramientas</td></tr>
        <tr><td>Revisalo con la lista de engaños</td><td>Gráficos que engañan</td></tr>
        <tr><td>Compartilo con texto alternativo</td><td>Hacer el gráfico</td></tr>
      </table>
      <p>¿De dónde sacar datos? Tus gastos del mes, los kilómetros que caminás, las ventas de tu emprendimiento, o fuentes públicas: <strong>datos abiertos</strong> son datos que el Estado u otras organizaciones publican para que cualquiera los use. En la Argentina están el portal Datos Argentina y el INDEC.</p>
      <pre><code>Plan de ejemplo
Datos:     mis gastos de los últimos 6 meses (registro propio)
Pregunta:  ¿en qué se me va la plata?
Mensaje:   "La comida es casi la mitad de mis gastos"
Gráfico:   barras horizontales ordenadas, comida de color, el resto en gris
Fuente:    registro propio, enero a junio</code></pre>
      <p>Por ejemplo, si tu mensaje es "Gasto más en delivery que en el súper", el gráfico tiene que hacer que esa comparación salte a la vista, y el título lo dice con esas palabras.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si un trabajo está listo. Usala para evaluar tu gráfico.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Mensaje</td><td>El título dice la conclusión y se entiende en menos de 10 segundos</td><td>Se entiende, pero el título solo nombra el tema</td><td>No se sabe qué quiere decir</td></tr>
        <tr><td>Tipo de gráfico</td><td>El justo para lo que muestra</td><td>Sirve, pero hay uno mejor</td><td>Confunde (por ejemplo, torta de 9 partes)</td></tr>
        <tr><td>Claridad</td><td>Sin ruido, ordenado, color solo para destacar</td><td>Le sobra algo</td><td>Lleno de adornos o 3D</td></tr>
        <tr><td>Partes</td><td>Unidades, fuente y fecha</td><td>Falta una</td><td>Faltan dos o más</td></tr>
        <tr><td>Accesible</td><td>Se entiende sin colores, tiene texto alternativo y se lee en el celular</td><td>Cumple una o dos</td><td>Ninguna</td></tr>
        <tr><td>Honestidad</td><td>Eje desde cero en barras, período completo, comparación justa, sin afirmar causas</td><td>—</td><td>Exagera o engaña, aunque sea sin querer</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Honestidad" tiene 0, el gráfico no está listo,
       aunque el total sea alto.</code></pre>
      <p>La honestidad no se compensa: un gráfico lindo y claro que engaña es peor que uno feo y honesto, porque la gente le cree.</p>
      <p>Por ejemplo, un gráfico perfecto en todo, pero con las barras arrancando en 1.650.000, saca 0 en Honestidad y no está listo.</p>` },
    { titulo: "La prueba de los 10 segundos y seguir aprendiendo", html: `
      <p class="idea">La mejor prueba de un gráfico es <strong>mostrárselo a otra persona</strong> 10 segundos, sacárselo y preguntarle qué entendió.</p>
      <pre><code>Prueba de los 10 segundos
1. Mostrale el gráfico a alguien durante 10 segundos.
2. Sacáselo y preguntale: "¿Qué te quedó?".
3. Compará lo que dice con tu mensaje.
   Si coincide → listo.
   Si no → cambiá el título, el color o el tipo, y probá de nuevo.</code></pre>
      <p>No le expliques nada antes: en la vida real, el gráfico va a estar solo, sin vos al lado.</p>
      <table>
        <tr><th>Para seguir</th><th>Qué tiene</th></tr>
        <tr><td>Storytelling with Data, de Cole Nussbaumer Knaflic</td><td>Libro y blog sobre contar historias con datos</td></tr>
        <tr><td>Fundamentals of Data Visualization, de Claus Wilke (en inglés, gratis en línea)</td><td>Cada tipo de gráfico, en profundidad</td></tr>
        <tr><td>Datawrapper Academy (en inglés)</td><td>Guías cortas y ejemplos para cada caso</td></tr>
        <tr><td>El curso "Estadística sin miedo" de este sitio</td><td>Promedios, porcentajes y cómo no equivocarse con los números</td></tr>
        <tr><td>El curso "Excel y Google Sheets" de este sitio</td><td>Ordenar y resumir los datos antes de graficar</td></tr>
      </table>
      <p>Por ejemplo, si tu mensaje era "La comida es casi la mitad de mis gastos" y la persona te dice "gastás mucho en todo", el color no está destacando la comida: probá con comida en color y el resto en gris.</p>` },
  ],
  practica: [
    "Elegí tus datos y escribí el plan (datos, pregunta, mensaje, gráfico y fuente). Anotá de dónde salen los datos.",
    "Hacé el gráfico y la prueba de los 10 segundos con 2 personas. Anotá qué entendió cada una.",
    "Evaluá tu gráfico con la rúbrica y anotá el puntaje de cada criterio y el total.",
  ],
  recursos: [
    { t: "Datos Argentina: datos abiertos del Estado para practicar", url: "https://www.datos.gob.ar/" },
    { t: "INDEC: estadísticas oficiales de la Argentina", url: "https://www.indec.gob.ar/" },
    { t: "Datawrapper Academy: guías para hacer gráficos claros (en inglés)", url: "https://academy.datawrapper.de/" },
  ],
  quiz: [
    { q: "Si querés datos públicos de la Argentina para tu proyecto, ¿dónde buscás?", opciones: ["En un gráfico de redes sin fuente","Los inventás","En el portal Datos Argentina o en el INDEC","En un chat"], correcta: 2, explicacion: "Son fuentes oficiales. Un gráfico de redes tienta porque ya está hecho, pero no sabés de dónde salen los datos." },
    { q: "¿Qué son los datos abiertos?", opciones: ["Datos que el Estado u otras organizaciones publican para que cualquiera los use","Datos secretos","Datos inventados","Datos personales de otros"], correcta: 0, explicacion: "Son públicos para usar. \"Datos personales\" tienta porque son de personas, pero los abiertos no identifican a nadie." },
    { q: "Si tus datos son tus gastos anotados por vos, ¿qué ponés de fuente?", opciones: ["Nada","\"Internet\"","\"INDEC\"","\"Registro propio\" y el período"], correcta: 3, explicacion: "Decí que son tuyos. INDEC tienta porque es oficial, pero no es de donde salen." },
    { q: "Tu gráfico es lindo y claro, pero las barras arrancan en 1.650.000. ¿Está listo?", opciones: ["Sí, porque es claro","No: \"Honestidad\" tiene 0 y eso no se compensa","Sí, si el total da 10","Depende del color"], correcta: 1, explicacion: "La regla de la rúbrica lo dice. \"Es claro\" tienta, pero engaña a quien lo mira." },
    { q: "Tu título dice \"Gastos\" y se entiende, pero no dice la conclusión. ¿Cuánto sacás en \"Mensaje\"?", opciones: ["2 puntos","0 puntos","1 punto","3 puntos"], correcta: 2, explicacion: "Se entiende, pero solo nombra el tema: 1. Sacar 2 tienta porque se entiende, pero el título no dice la conclusión." },
    { q: "Usaste una torta de 9 porciones. ¿Cuánto sacás en \"Tipo de gráfico\"?", opciones: ["0 puntos","2 puntos","1 punto","No se evalúa"], correcta: 0, explicacion: "Una torta de 9 partes confunde. Sacar 1 tienta porque \"sirve\", pero no se lee." },
    { q: "Tu gráfico tiene unidades y fuente, pero no la fecha. ¿Cuánto sacás en \"Partes\"?", opciones: ["2 puntos","0 puntos","No importa la fecha","1 punto"], correcta: 3, explicacion: "Falta una parte: 1. \"No importa la fecha\" tienta, pero sin fecha no se sabe si los datos están viejos." },
    { q: "Tu gráfico saca 9 en total y nada en 0. ¿Qué hacés?", opciones: ["Lo dejás así","Mejorás lo que sacó 1","Lo borrás","Cambiás la rúbrica"], correcta: 1, explicacion: "De 7 a 10 se mejora lo flojo. Dejarlo tienta porque está cerca, pero puede quedar listo." },
    { q: "En la prueba de los 10 segundos, ¿qué le decís a la persona antes de mostrarle el gráfico?", opciones: ["Le explicás el mensaje","Le leés los números","Nada: el gráfico tiene que entenderse solo","Le decís qué mirar"], correcta: 2, explicacion: "En la vida real no vas a estar al lado. Explicarle tienta para ayudar, pero arruina la prueba." },
    { q: "La persona entendió otra cosa que tu mensaje. ¿Qué hacés?", opciones: ["Cambiás el título, el color o el tipo, y probás de nuevo","Le decís que se equivocó","Lo dejás así","Agregás más datos"], correcta: 0, explicacion: "Si no se entiende, el problema es el gráfico. Decirle que se equivocó tienta, pero no lo mejora." },
    { q: "Tu mensaje es \"Gasto más en delivery que en el súper\". ¿Cómo hacés que salte a la vista?", opciones: ["Todas las barras de colores distintos","Sin título","Torta en 3D","Delivery de color, el resto en gris, y el título con ese mensaje"], correcta: 3, explicacion: "Color para destacar y título con mensaje. Muchos colores tientan por llamativos, pero esconden la comparación." },
    { q: "Querés aprender más sobre promedios y porcentajes. ¿Qué curso del sitio sigue?", opciones: ["\"Carpintería básica\"","\"Estadística sin miedo\"","\"Portugués básico\"","Ninguno"], correcta: 1, explicacion: "Estadística sin miedo trata esos temas. Los otros tientan porque están en el sitio, pero son de otra cosa." },
  ],
},
];
