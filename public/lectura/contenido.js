// Temario del curso "Leer mejor y entender lo que leés". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js lectura y node tools/metodologia.js lectura
window.TEMARIO = [
{
  id: "entender",
  icono: "📖",
  titulo: "Qué es entender lo que leés",
  nivel: "Básico",
  objetivos: [
    "Distinguir entre leer las palabras y entender el texto",
    "Reconocer el tipo de texto y qué esperar de él",
    "Medir tu comprensión contándolo con tus palabras",
  ],
  lecciones: [
    { titulo: "Leer no es solo pasar la vista", video: {"id":"rkWb3uAGSSw","t":"8 estrategias para mejorar tu comprensión lectora · Sapiencia práctica (5:50)"}, html: `
      <p class="idea">Podés leer todas las palabras de un texto y no entender qué dice. <strong>Comprender</strong> es poder contar, con tus palabras, de qué se trata y para qué sirve.</p>
      <p>En todo el curso acompañamos a <strong>Raúl</strong>, chofer de colectivo en Rosario. Lee los mensajes del celular sin problema, pero se traba con el contrato del alquiler, los papeles del banco y los apuntes del secundario que está terminando de noche.</p>
      <table>
        <tr><th>Leer las palabras</th><th>Comprender el texto</th></tr>
        <tr><td>Saber pronunciar y reconocer cada palabra</td><td>Saber qué quiere decir el texto en conjunto</td></tr>
        <tr><td>"Terminé la página"</td><td>"Esta página dice que el aumento del alquiler es cada 6 meses y según un índice"</td></tr>
        <tr><td>Es automático</td><td>Requiere atención y, a veces, volver atrás</td></tr>
      </table>
      <p><strong>Todos nos perdemos a veces:</strong> llegar al final de un párrafo y no saber qué dijo pasa incluso a lectores con experiencia. La diferencia es que ellos se dan cuenta y vuelven a leer.</p>
      <p><strong>La comprensión se entrena</strong>, como un músculo. Este curso te da herramientas concretas: qué hacer antes, durante y después de leer.</p>
      <p><strong>No es una cuestión de inteligencia:</strong> un texto puede ser difícil porque está mal escrito, usa palabras técnicas o habla de algo que no conocés. Eso tiene solución.</p>
      <p>Por ejemplo, Raúl leyó tres veces una cláusula del contrato y "no se le quedaba". Cuando se preguntó "¿qué me pide esto que haga?", vio que era cuándo y cómo tenía que avisar si se iba antes.</p>` },
    { titulo: "Cada texto tiene su manera", html: `
      <p class="idea">No se lee igual un contrato que una novela. Reconocer el <strong>tipo de texto</strong> te dice qué buscar y cómo leerlo.</p>
      <table>
        <tr><th>Tipo</th><th>Para qué está escrito</th><th>Ejemplos</th><th>Qué buscás</th></tr>
        <tr><td>Informativo</td><td>Explicar o contar hechos</td><td>Una noticia, un apunte, un folleto</td><td>Los datos principales</td></tr>
        <tr><td>Instructivo</td><td>Decir cómo hacer algo</td><td>Una receta, un manual, un prospecto</td><td>Los pasos y las advertencias</td></tr>
        <tr><td>Argumentativo</td><td>Convencerte de algo</td><td>Una columna de opinión, una publicidad</td><td>Qué quiere que pienses y con qué razones</td></tr>
        <tr><td>Narrativo</td><td>Contar una historia</td><td>Un cuento, una novela, una crónica</td><td>Quién, qué pasó, cuándo y por qué</td></tr>
        <tr><td>Normativo</td><td>Fijar reglas y obligaciones</td><td>Un contrato, un reglamento, una ley</td><td>Qué tenés que hacer, qué no y qué pasa si no cumplís</td></tr>
      </table>
      <p><strong>Un mismo texto puede mezclar tipos:</strong> una noticia (informativo) puede tener una opinión del periodista (argumentativo). Darse cuenta de eso es parte de leer bien.</p>
      <p><strong>El tipo cambia la velocidad:</strong> una novela se puede leer de corrido; un contrato o un prospecto se lee despacio, con lápiz en la mano.</p>
      <p>Por ejemplo, Raúl leía los apuntes de historia como una novela, de corrido, y no le quedaban los datos. Al darse cuenta de que eran informativos, empezó a buscar fechas, personas y causas.</p>` },
    { titulo: "Contarlo con tus palabras", html: `
      <p class="idea">La mejor prueba de que entendiste es <strong>contarlo con tus palabras</strong>, sin mirar el texto. Si no podés, todavía no lo entendiste del todo, y eso está bien: ahora sabés dónde volver.</p>
      <pre><code>La prueba de las 3 preguntas (después de leer):
1. ¿De qué trata? (en una oración)
2. ¿Qué es lo más importante que dice?
3. ¿Qué tengo que hacer, saber o pensar después de leerlo?</code></pre>
      <table>
        <tr><th>Si te pasa...</th><th>Probá...</th></tr>
        <tr><td>No podés decir de qué trata</td><td>Mirá de nuevo el título y la primera oración de cada párrafo</td></tr>
        <tr><td>Te acordás de detalles sueltos</td><td>Buscá la idea que los une (lo vas a ver en el módulo de ideas principales)</td></tr>
        <tr><td>Te perdiste en una parte</td><td>Releé solo esa parte, despacio</td></tr>
      </table>
      <p><strong>Contáselo a alguien:</strong> explicar un texto a otra persona (o en voz alta, solo) obliga a ordenarlo. Si te trabás, ahí está lo que no entendiste.</p>
      <p><strong>Medí tu avance:</strong> si cada semana probás con un texto parecido y cada vez respondés mejor las 3 preguntas, estás mejorando.</p>
      <p>Por ejemplo, Raúl le contó a su hija lo que había leído sobre la Revolución de Mayo. Cuando ella le preguntó "¿y por qué pasó?", se dio cuenta de que esa parte no la había entendido y volvió a leerla.</p>` },
  ],
  practica: [
    "Leé una noticia corta, respondé las 3 preguntas sin mirar el texto y anotá cuántas pudiste responder.",
    "Juntá 5 textos de tu casa (una boleta, un folleto, una receta, un contrato, una revista) y anotá qué tipo es cada uno.",
    "Contale a alguien un texto que leíste esta semana y anotá en qué parte te trabaste.",
  ],
  recursos: [
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si leíste toda la página pero no sabés qué dijo, ¿qué pasó?", opciones: ["Que no sabés leer","Que el texto no dice nada","Leíste las palabras, pero no comprendiste el texto","Que es un problema de la vista"], correcta: 2, explicacion: "Leer palabras y comprender son cosas distintas. \"No sabés leer\" tienta como explicación, pero sí leíste: falta comprender." },
    { q: "Si llegás al final de un párrafo y no sabés qué dijo, ¿qué hacés?", opciones: ["Te das cuenta y lo volvés a leer","Seguís igual","Dejás de leer para siempre","Pensás que no es para vos"], correcta: 0, explicacion: "Darse cuenta y volver es lo que hacen los buenos lectores. Seguir tienta por apuro, pero te perdés lo que sigue." },
    { q: "Si un texto te cuesta, ¿qué no es una causa posible?", opciones: ["Que está mal escrito","Que usa palabras técnicas","Que habla de algo que no conocés","Que no sos inteligente"], correcta: 3, explicacion: "La dificultad viene del texto o del tema, y tiene solución. Culparte tienta, pero no ayuda." },
    { q: "Si vas a leer un prospecto de un remedio, ¿qué tipo de texto es?", opciones: ["Narrativo","Instructivo: buscás los pasos y las advertencias","Argumentativo","Una novela"], correcta: 1, explicacion: "Dice cómo usar el remedio. Narrativo tienta porque cuenta cosas, pero no es una historia." },
    { q: "Si leés una columna de opinión, ¿qué buscás?", opciones: ["Solo las fechas","Los pasos a seguir","Qué quiere que pienses y con qué razones","Quién es el protagonista"], correcta: 2, explicacion: "Es argumentativo: quiere convencerte. Los pasos tientan, pero eso es de un instructivo." },
    { q: "Vas a leer tu contrato de alquiler. ¿Qué tipo de texto es y cómo lo leés?", opciones: ["Normativo: despacio, buscando qué tenés que hacer y qué pasa si no cumplís","Narrativo: de corrido","Informativo: solo el título","Argumentativo: buscando quién tiene razón"], correcta: 0, explicacion: "Fija obligaciones. De corrido tienta por rápido, pero se pierden cosas importantes." },
    { q: "Si una noticia tiene datos y también la opinión del periodista, ¿qué pasa?", opciones: ["Es solo informativa","Es una novela","No es un texto","Mezcla tipos: informativo y argumentativo"], correcta: 3, explicacion: "Muchos textos mezclan. \"Solo informativa\" tienta, pero se te pasa la opinión." },
    { q: "Lees apuntes de historia de corrido y no te quedan los datos. ¿Qué cambiás?", opciones: ["Los leés más rápido","Los leés como informativos: buscando fechas, personas y causas","Los leés una sola vez","Los leés salteando"], correcta: 1, explicacion: "Saber el tipo dice qué buscar. Más rápido tienta, pero te quedan menos datos." },
    { q: "¿Cuál es la mejor prueba de que entendiste un texto?", opciones: ["Haberlo leído entero","Recordar la primera palabra","Poder contarlo con tus palabras sin mirarlo","Que tenga pocas páginas"], correcta: 2, explicacion: "Contarlo muestra que lo entendiste. Haberlo leído entero tienta, pero no garantiza comprender." },
    { q: "Si no podés decir de qué trata un texto, ¿qué mirás de nuevo?", opciones: ["El título y la primera oración de cada párrafo","La última palabra","El número de página","Nada, lo dejás"], correcta: 0, explicacion: "Ahí suele estar lo central. La última palabra tienta, pero casi nunca resume." },
    { q: "Si le contás un texto a alguien y te trabás en una parte, ¿qué te dice eso?", opciones: ["Que la otra persona no entiende","Que el texto está mal","Nada","Que esa parte no la entendiste y hay que volver a leerla"], correcta: 3, explicacion: "El traspié marca lo que falta. Culpar a la otra persona tienta, pero el que se trabó fuiste vos." },
    { q: "Querés saber si mejora tu comprensión. ¿Qué hacés?", opciones: ["Leés más rápido","Cada semana probás las 3 preguntas con un texto parecido y comparás","Contás las páginas","Nada, se nota solo"], correcta: 1, explicacion: "Comparar en el tiempo muestra el avance. Contar páginas tienta, pero mide cantidad, no comprensión." },
  ],
},
{
  id: "antes",
  icono: "🔭",
  titulo: "Antes de leer",
  nivel: "Básico",
  objetivos: [
    "Tener claro para qué leés un texto antes de empezar",
    "Dar un vistazo rápido al texto para saber qué te espera",
    "Recordar lo que ya sabés del tema",
  ],
  lecciones: [
    { titulo: "¿Para qué leés esto?", html: `
      <p class="idea">Antes de empezar, preguntate <strong>para qué leés</strong>. No es lo mismo leer para encontrar un dato, para estudiar o para decidir si firmás algo: cada propósito pide una lectura distinta.</p>
      <table>
        <tr><th>Propósito</th><th>Cómo leés</th><th>Ejemplo</th></tr>
        <tr><td>Encontrar un dato</td><td>Buscás con la vista, sin leer todo</td><td>El vencimiento en una boleta</td></tr>
        <tr><td>Tener una idea general</td><td>Rápido, mirando títulos y primeras oraciones</td><td>Decidir si una nota te interesa</td></tr>
        <tr><td>Estudiar o aprender</td><td>Despacio, con lápiz, haciendo pausas</td><td>Un apunte para un examen</td></tr>
        <tr><td>Decidir o firmar</td><td>Todo, despacio, buscando obligaciones y costos</td><td>Un contrato, un préstamo</td></tr>
        <tr><td>Disfrutar</td><td>A tu ritmo</td><td>Una novela</td></tr>
      </table>
      <p><strong>Buscar un dato no es leer todo:</strong> si solo necesitás el monto de la boleta, buscá con la vista los números grandes o la palabra "total". Ahorra tiempo y cansancio.</p>
      <p><strong>Escribí el propósito en una línea</strong> cuando el texto es largo o importante: "leo esto para saber cuánto aumenta el alquiler y cuándo".</p>
      <p>Por ejemplo, Raúl leía el resumen de la tarjeta de punta a punta y se mareaba. Cuando se propuso buscar solo tres cosas (el total, el mínimo y el vencimiento), lo resolvía en un minuto.</p>` },
    { titulo: "El vistazo previo", html: `
      <p class="idea">Antes de leer un texto largo, dale un <strong>vistazo de un minuto</strong>: títulos, subtítulos, palabras destacadas, imágenes y el primer y último párrafo. Te arma un mapa de lo que viene.</p>
      <pre><code>El vistazo (1 o 2 minutos):
1. Título: ¿de qué trata?
2. Subtítulos: ¿en qué partes se divide?
3. Palabras en negrita, cuadros, imágenes y sus epígrafes.
4. Primer párrafo: ¿qué promete explicar?
5. Último párrafo: ¿a qué conclusión llega?
6. Largo: ¿cuánto tiempo me va a llevar?</code></pre>
      <table>
        <tr><th>Sin vistazo</th><th>Con vistazo</th></tr>
        <tr><td>Empezás sin saber adónde va</td><td>Sabés de antemano las partes</td></tr>
        <tr><td>Te sorprende cada tema</td><td>Ubicás cada parte en el mapa</td></tr>
        <tr><td>Te cuesta saber qué es importante</td><td>Los títulos y las negritas te lo marcan</td></tr>
      </table>
      <p>El <strong>epígrafe</strong> es el texto chiquito debajo de una foto o un cuadro: muchas veces explica algo clave.</p>
      <p><strong>El vistazo no reemplaza la lectura:</strong> es como mirar el mapa antes de un viaje. Después hay que recorrer el camino.</p>
      <p>Por ejemplo, antes de leer un capítulo de 12 páginas, Raúl miró los 4 subtítulos y el resumen del final. Ya sabía que hablaba de 4 causas, y mientras leía las fue buscando.</p>` },
    { titulo: "Lo que ya sabés", html: `
      <p class="idea">Entendés mejor lo nuevo cuando lo <strong>conectás con lo que ya sabés</strong>. Antes de leer, tomate un momento para recordar qué sabés del tema y qué te gustaría averiguar.</p>
      <pre><code>Antes de leer sobre "inflación":
Lo que ya sé:            los precios suben, el sueldo alcanza menos.
Lo que quiero averiguar: ¿por qué pasa? ¿cómo se mide?
Después de leer:         ¿qué aprendí? ¿qué me sigue faltando?</code></pre>
      <table>
        <tr><th>Si del tema sabés...</th><th>Antes de leer</th></tr>
        <tr><td>Mucho</td><td>Anotá 2 preguntas que todavía no sabés responder</td></tr>
        <tr><td>Algo</td><td>Escribí lo que sabés en 3 líneas</td></tr>
        <tr><td>Nada</td><td>Buscá antes algo más fácil: un video corto o un artículo para principiantes</td></tr>
      </table>
      <p><strong>Si un texto es demasiado difícil</strong>, a veces conviene leer primero algo más simple sobre el mismo tema. Después el texto difícil se entiende mucho mejor.</p>
      <p><strong>Las preguntas guían la lectura:</strong> si leés buscando respuestas, prestás atención a lo que importa en lugar de pasar la vista.</p>
      <p>Por ejemplo, Raúl no entendía nada de un apunte de economía. Miró primero un video corto sobre el tema y, al volver al apunte, las palabras ya le sonaban.</p>` },
  ],
  practica: [
    "Antes de leer 3 textos, escribí en una línea para qué los vas a leer, y anotá si cambió cómo los leíste.",
    "Hacé el vistazo de 2 minutos a un texto largo y anotá cuántas partes tiene y de qué trata cada una, antes de leerlo.",
    "Antes de leer sobre un tema, anotá lo que ya sabés y 2 preguntas; después de leer, anotá cuáles pudiste responder.",
  ],
  recursos: [
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
    { t: "CONABIP: buscador de bibliotecas populares de todo el país", url: "https://www.conabip.gob.ar/buscador_bp" },
  ],
  quiz: [
    { q: "Si solo necesitás saber cuánto pagar en la boleta de la luz, ¿cómo la leés?", opciones: ["De punta a punta, despacio","Solo el logo","Buscás con la vista el total y el vencimiento, sin leer todo","No la leés"], correcta: 2, explicacion: "Para un dato alcanza con buscarlo. Leerla entera tienta por prolijo, pero no hace falta." },
    { q: "Si vas a firmar un préstamo, ¿cómo lo leés?", opciones: ["Todo y despacio, buscando obligaciones y costos","Solo el monto que te dan","Rápido, por arriba","Solo la firma"], correcta: 0, explicacion: "Lo que firmás te obliga. Leer solo el monto tienta, pero los costos están en el resto." },
    { q: "Si vas a estudiar un apunte para un examen, ¿cómo lo leés?", opciones: ["Como una novela, de corrido","Solo el título","Con la tele prendida","Despacio, con lápiz y haciendo pausas"], correcta: 3, explicacion: "Estudiar pide atención y pausas. De corrido tienta, pero se olvida rápido." },
    { q: "Querés saber si una nota te interesa. ¿Qué hacés?", opciones: ["La leés entera dos veces","La leés rápido, mirando títulos y primeras oraciones","La subrayás toda","La copiás a mano"], correcta: 1, explicacion: "Para decidir si interesa, alcanza un vistazo. Leerla dos veces tienta, pero es mucho tiempo." },
    { q: "Antes de un texto largo, ¿qué mirás en el vistazo?", opciones: ["Solo la última página","La cantidad de palabras","Título, subtítulos, negritas, imágenes y el primer y último párrafo","Nada"], correcta: 2, explicacion: "Eso arma el mapa del texto. La última página tienta, pero solo da el final." },
    { q: "¿Qué es un epígrafe?", opciones: ["El texto chiquito debajo de una foto o un cuadro","El título","La última oración","Un tipo de letra"], correcta: 0, explicacion: "Muchas veces explica algo clave. El título tienta, pero es otra cosa." },
    { q: "Si hiciste el vistazo previo, ¿ya entendiste el texto?", opciones: ["Sí, alcanza","Sí, si fue largo","Sí, si miraste las imágenes","No: el vistazo es el mapa; después hay que leerlo"], correcta: 3, explicacion: "El vistazo ayuda, no reemplaza. \"Alcanza\" tienta por rápido, pero te perdés el contenido." },
    { q: "Vas a leer un capítulo y en el vistazo ves 4 subtítulos. ¿Qué ganás?", opciones: ["Nada","Sabés que tiene 4 partes y podés ubicar cada una mientras leés","Que no hace falta leerlo","Que es más corto"], correcta: 1, explicacion: "El mapa ordena la lectura. \"No hace falta leerlo\" tienta, pero los subtítulos no dicen todo." },
    { q: "Antes de leer sobre un tema que conocés algo, ¿qué hacés?", opciones: ["Te olvidás de lo que sabés","Leés sin pensar","Escribís lo que ya sabés en 3 líneas","Lo dejás para después"], correcta: 2, explicacion: "Conectar con lo que sabés ayuda a entender. Olvidarlo tienta para \"leer limpio\", pero perdés esa ayuda." },
    { q: "Si un texto es demasiado difícil y no sabés nada del tema, ¿qué conviene?", opciones: ["Leer o mirar primero algo más simple sobre el mismo tema","Leerlo 10 veces seguidas","Abandonar el tema","Memorizarlo sin entender"], correcta: 0, explicacion: "Lo simple prepara para lo difícil. Leerlo 10 veces tienta por esfuerzo, pero cansa sin avanzar." },
    { q: "¿Para qué sirve hacerte preguntas antes de leer?", opciones: ["Para leer más rápido sin entender","Para no leer","Para nada","Para leer buscando respuestas y prestar atención a lo importante"], correcta: 3, explicacion: "Las preguntas guían la atención. \"Para nada\" tienta, pero sin preguntas pasás la vista." },
    { q: "El resumen de la tarjeta te marea. ¿Qué hacés?", opciones: ["Lo leés entero cada mes","Te proponés buscar solo el total, el mínimo y el vencimiento","No lo mirás","Pagás lo que te parece"], correcta: 1, explicacion: "Un propósito claro simplifica. No mirarlo tienta, pero te puede costar intereses." },
  ],
},
{
  id: "durante",
  icono: "✏️",
  titulo: "Mientras leés",
  nivel: "Intermedio",
  objetivos: [
    "Subrayar poco y bien, solo lo importante",
    "Entender una palabra desconocida por el contexto o con el diccionario",
    "Darte cuenta cuando te perdiste y volver a tiempo",
  ],
  lecciones: [
    { titulo: "Subrayar poco y bien", video: {"id":"NWVw51l-JTc","t":"Técnicas de estudio: el subrayado · clasElástica (3:44)"}, html: `
      <p class="idea">Subrayar sirve si marcás <strong>solo lo importante</strong>. Si subrayás todo, es como no subrayar nada: al volver, no sabés qué era lo central.</p>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Leer el párrafo entero primero y después subrayar</td><td>Subrayar mientras leés por primera vez</td></tr>
        <tr><td>Unas pocas palabras clave por párrafo</td><td>Oraciones enteras o el párrafo completo</td></tr>
        <tr><td>Un color para lo principal</td><td>Cinco colores sin regla</td></tr>
        <tr><td>Notas cortas en el margen: "causa", "ejemplo", "?"</td><td>Nada más que rayas</td></tr>
      </table>
      <pre><code>Párrafo de ejemplo con buen subrayado (las palabras subrayadas, entre [ ]):
"La [inflación] es el [aumento general y sostenido de los precios].
Cuando ocurre, con la misma plata se compran menos cosas.
Una de sus [causas] puede ser que se [emita más dinero] del que
la economía necesita."
Margen: "definición" · "causa"</code></pre>
      <p><strong>La prueba del subrayado:</strong> leé solo lo que subrayaste. Si se entiende la idea, está bien. Si no se entiende, subrayaste de menos; si es casi todo el texto, de más.</p>
      <p><strong>En pantalla:</strong> muchos lectores de PDF y de libros electrónicos dejan resaltar. Vale la misma regla: poco.</p>
      <p>Por ejemplo, los apuntes de Raúl estaban casi todos amarillos. Probó leer primero cada párrafo y subrayar después: le quedaban 3 o 4 palabras por párrafo y al repasar entendía enseguida.</p>` },
    { titulo: "Las palabras que no conocés", html: `
      <p class="idea">Cuando aparece una palabra que no conocés, primero tratá de <strong>deducirla por el contexto</strong>: lo que dicen las oraciones de alrededor. Si no alcanza y es importante, buscala en el <strong>diccionario</strong>.</p>
      <pre><code>"El inquilino deberá abonar el canon locativo el día 10 de cada mes."
- "deberá abonar ... el día 10 de cada mes" → algo que se paga todos los meses
- en un contrato de alquiler → el canon locativo es el alquiler
Comprobá en el diccionario: canon locativo = precio del alquiler.</code></pre>
      <table>
        <tr><th>Pista del contexto</th><th>Ejemplo</th></tr>
        <tr><td>Una explicación después de una coma o un paréntesis</td><td>"la tasa nominal anual (TNA)"</td></tr>
        <tr><td>Un ejemplo</td><td>"cítricos, como la naranja y el limón"</td></tr>
        <tr><td>Un contrario</td><td>"no era tímido; al contrario, era extrovertido"</td></tr>
        <tr><td>Las partes de la palabra</td><td>"in-" suele ser "no": incompleto, inseguro</td></tr>
      </table>
      <p><strong>El diccionario de la Real Academia Española</strong> está gratis en internet y en una app. Si la palabra tiene varios significados, elegí el que encaja en tu oración.</p>
      <p><strong>No frenes por cada palabra:</strong> si no cambia el sentido, seguí y anotala para buscarla al final. Si es una palabra que se repite o es clave (como "rescisión" en un contrato), buscala ya.</p>
      <p>Por ejemplo, en el contrato de Raúl aparecía "rescisión anticipada". Por el contexto entendió que hablaba de irse antes; en el diccionario confirmó que rescindir es dejar sin efecto un contrato.</p>` },
    { titulo: "Darte cuenta de que te perdiste", html: `
      <p class="idea">Los buenos lectores <strong>se controlan mientras leen</strong>: cada tanto se preguntan si están entendiendo. Si no, paran y usan una estrategia, en vez de seguir pasando la vista.</p>
      <table>
        <tr><th>Señal de que te perdiste</th><th>Qué hacés</th></tr>
        <tr><td>Llegaste al final de la página pensando en otra cosa</td><td>Volvé al último párrafo que te acordás</td></tr>
        <tr><td>Una oración larga no se entiende</td><td>Partila en pedazos: ¿quién hace qué?</td></tr>
        <tr><td>Un párrafo usa algo que no explicaste</td><td>Volvé atrás: quizás se explicó antes</td></tr>
        <tr><td>Estás cansado y releés lo mismo</td><td>Hacé una pausa de 5 minutos</td></tr>
      </table>
      <pre><code>Oración difícil:
"El locatario que, habiendo notificado fehacientemente su voluntad,
rescindiera el contrato durante el primer año, abonará una indemnización."
Partida:
¿Quién?            el inquilino (locatario)
¿Qué hace?         termina el contrato antes
¿Cuándo?           en el primer año, después de avisar formalmente
¿Qué le pasa?      paga una indemnización</code></pre>
      <p><strong>Pausas cada párrafo importante:</strong> al terminar cada uno, decite en una frase qué dijo. Si no te sale, releelo.</p>
      <p><strong>El celular cerca distrae:</strong> una notificación corta el hilo. Para textos importantes, ponelo en silencio o en otra habitación.</p>
      <p>Por ejemplo, Raúl se perdía en las oraciones largas del contrato. Empezó a partirlas en "quién, qué, cuándo y qué le pasa", y las cláusulas dejaron de parecer un idioma extraño.</p>` },
  ],
  practica: [
    "Subrayá una página de un texto con la regla de la lección y hacé la prueba del subrayado: anotá cuántas palabras subrayaste por párrafo.",
    "Elegí 5 palabras desconocidas de un texto, deducí su significado por el contexto y compará con el diccionario: anotá cuántas acertaste.",
    "Partí 3 oraciones largas de un contrato o un reglamento en quién, qué, cuándo y qué le pasa, y anotá lo que dice cada una en una frase.",
  ],
  recursos: [
    { t: "FundéuRAE: consultas sobre dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
  ],
  quiz: [
    { q: "Tus apuntes están casi todos subrayados. ¿Qué problema hay?", opciones: ["Ninguno, cuanto más mejor","Gastás más marcador","Al volver no sabés qué era lo importante","Se ve lindo"], correcta: 2, explicacion: "Subrayar todo es como no subrayar nada. \"Cuanto más mejor\" tienta, pero borra lo importante." },
    { q: "¿Cuándo subrayás un párrafo?", opciones: ["Después de leerlo entero","Mientras lo leés por primera vez","Antes de leerlo","Nunca"], correcta: 0, explicacion: "Primero entendés, después marcás. Mientras leés tienta por rápido, pero marcás de más." },
    { q: "¿Qué subrayás de un párrafo?", opciones: ["Oraciones enteras","El párrafo completo","Solo los números","Unas pocas palabras clave"], correcta: 3, explicacion: "Pocas palabras alcanzan para recordar. Oraciones enteras tientan por seguras, pero se pierde lo central." },
    { q: "Si leés solo lo que subrayaste y no se entiende la idea, ¿qué pasó?", opciones: ["Subrayaste de más","Subrayaste de menos","El texto está mal","Está perfecto"], correcta: 1, explicacion: "Falta algo clave. \"De más\" tienta, pero eso sería si subrayaste casi todo." },
    { q: "Encontrás una palabra que no conocés. ¿Qué probás primero?", opciones: ["Saltearte el texto entero","Inventar un significado","Deducirla por el contexto","Dejar de leer"], correcta: 2, explicacion: "Las oraciones de alrededor suelen dar la pista. Dejar de leer tienta, pero no hace falta." },
    { q: "Si leés \"deberá abonar el canon locativo el día 10 de cada mes\", ¿qué es el canon locativo?", opciones: ["El precio del alquiler","Un impuesto a las ganancias","La firma del contrato","Una multa"], correcta: 0, explicacion: "Es lo que se paga cada mes en un alquiler. Multa tienta porque se paga, pero no es mensual." },
    { q: "Si leés \"no era tímido; al contrario, era extrovertido\", ¿qué pista da el significado?", opciones: ["Un ejemplo","Un número","Un paréntesis","Un contrario"], correcta: 3, explicacion: "\"Al contrario\" dice que extrovertido es lo opuesto de tímido. El ejemplo tienta, pero no hay ninguno." },
    { q: "La palabra tiene varios significados en el diccionario. ¿Cuál elegís?", opciones: ["El primero siempre","El que encaja en tu oración","El más largo","Cualquiera"], correcta: 1, explicacion: "El contexto decide. El primero tienta, pero puede no ser el de tu texto." },
    { q: "Una palabra desconocida aparece una sola vez y no cambia el sentido. ¿Qué hacés?", opciones: ["Frenás todo hasta encontrarla","Abandonás el texto","Seguís y la anotás para buscarla al final","Te la salteás para siempre"], correcta: 2, explicacion: "No todas las palabras frenan la lectura. Frenar todo tienta por prolijo, pero cortás el hilo." },
    { q: "Llegaste al final de la página pensando en otra cosa. ¿Qué hacés?", opciones: ["Volvés al último párrafo que te acordás","Seguís con la página siguiente","Empezás el libro de nuevo","Lo das por leído"], correcta: 0, explicacion: "Volver al último punto claro recupera el hilo. Seguir tienta, pero te perdiste lo del medio." },
    { q: "Una oración de un contrato es larguísima y no se entiende. ¿Qué hacés?", opciones: ["La firmás igual","La leés más rápido","La salteás","La partís: quién, qué hace, cuándo y qué le pasa"], correcta: 3, explicacion: "Partirla la vuelve clara. Firmar igual tienta por apuro, pero te puede obligar a algo que no entendiste." },
    { q: "Vas a leer un texto importante. ¿Qué hacés con el celular?", opciones: ["Lo tenés en la mano","Lo ponés en silencio o en otra habitación","Le subís el volumen","Mirás cada notificación"], correcta: 1, explicacion: "Las notificaciones cortan el hilo. Tenerlo cerca tienta por las dudas, pero distrae." },
  ],
},
{
  id: "ideas",
  icono: "🗂️",
  titulo: "Ideas principales y resumen",
  nivel: "Intermedio",
  objetivos: [
    "Encontrar la idea principal de cada párrafo y del texto",
    "Separar las ideas principales de los ejemplos y detalles",
    "Hacer un resumen corto y un esquema con tus palabras",
  ],
  lecciones: [
    { titulo: "La idea principal", video: {"id":"_g7Wjnm4PEE","t":"Cómo identificar el tema central, la idea principal y las secundarias · Profesor Paolo Astorga (3:29)"}, html: `
      <p class="idea">Cada párrafo suele tener una <strong>idea principal</strong>: lo más importante que dice. Lo demás son <strong>ideas secundarias</strong>: ejemplos, detalles o explicaciones que la apoyan.</p>
      <table>
        <tr><th>Término</th><th>Qué es</th><th>Pregunta que lo encuentra</th></tr>
        <tr><td>Tema</td><td>De qué habla el texto, en pocas palabras</td><td>¿De qué se trata?</td></tr>
        <tr><td>Idea principal</td><td>Lo más importante que dice sobre el tema</td><td>¿Qué dice sobre eso?</td></tr>
        <tr><td>Ideas secundarias</td><td>Ejemplos, datos, explicaciones</td><td>¿Qué agrega para apoyarla?</td></tr>
      </table>
      <pre><code>Párrafo:
"Caminar media hora por día tiene muchos beneficios. Mejora la
circulación, ayuda a dormir mejor y baja el estrés. Además, no
cuesta nada y se puede hacer en cualquier barrio."

Tema:              caminar
Idea principal:    caminar media hora por día tiene muchos beneficios
Ideas secundarias: circulación, sueño, estrés, es gratis</code></pre>
      <p><strong>Dónde suele estar:</strong> muchas veces en la primera oración del párrafo, a veces al final, como conclusión. Si no está escrita, la armás vos uniendo lo que dicen las demás.</p>
      <p><strong>La prueba:</strong> si sacás la idea principal, el párrafo queda sin sentido; si sacás un ejemplo, se entiende igual.</p>
      <p>Por ejemplo, en un apunte de ciencias Raúl subrayaba los ejemplos porque eran lo más fácil de recordar. Al buscar la idea principal de cada párrafo, entendió para qué estaban esos ejemplos.</p>` },
    { titulo: "El resumen", video: {"id":"wurBExpZiBk","t":"Cómo hacer un buen resumen paso a paso · Profesor Paolo Astorga (7:19)"}, html: `
      <p class="idea">Un <strong>resumen</strong> cuenta lo importante de un texto <strong>con tus palabras</strong> y mucho más corto. Hacerlo te obliga a entender, y te deja un repaso listo.</p>
      <pre><code>Cómo hacer un resumen:
1. Leé el texto entero (con el vistazo antes).
2. Marcá la idea principal de cada párrafo.
3. Escribí esas ideas con tus palabras, en orden.
4. Uní las oraciones con conectores: "además", "por eso", "en cambio".
5. Revisá: ¿se entiende sin el texto original? ¿falta algo clave?

Largo de referencia: entre la cuarta parte y la mitad del original.</code></pre>
      <table>
        <tr><th>Un buen resumen</th><th>Un mal resumen</th></tr>
        <tr><td>Con tus palabras</td><td>Copiar oraciones del texto</td></tr>
        <tr><td>Solo lo importante</td><td>Lleno de ejemplos y detalles</td></tr>
        <tr><td>En el orden del texto</td><td>Ideas saltadas o mezcladas</td></tr>
        <tr><td>Sin tu opinión</td><td>"Me parece que el autor se equivoca..."</td></tr>
      </table>
      <p><strong>Tus palabras, no las del texto:</strong> si podés decirlo distinto, lo entendiste. Copiar oraciones parece más rápido, pero no te obliga a pensar.</p>
      <p><strong>La IA puede resumir,</strong> pero si la dejás hacerlo a ella, el que entiende es la IA. Para aprender, hacelo vos primero y, si querés, comparalo después.</p>
      <p>Por ejemplo, Raúl resumió un capítulo de 8 páginas en media carilla. La noche antes del examen repasó solo el resumen y se acordaba de todo lo importante.</p>` },
    { titulo: "El esquema", html: `
      <p class="idea">Un <strong>esquema</strong> ordena las ideas de forma visual: la idea general arriba y las partes debajo, con flechas o sangrías. Muestra de un vistazo cómo se relaciona todo.</p>
      <pre><code>Esquema de un texto sobre el ahorro:

AHORRAR
├── Por qué
│   ├── Imprevistos (una heladera que se rompe)
│   └── Metas (vacaciones, un estudio)
├── Cómo
│   ├── Separar apenas cobrás
│   └── Anotar los gastos
└── Dónde guardarlo
    ├── Cuenta en el banco
    └── Opciones que protegen de la inflación</code></pre>
      <table>
        <tr><th>Resumen</th><th>Esquema</th></tr>
        <tr><td>Oraciones seguidas</td><td>Palabras clave ordenadas en niveles</td></tr>
        <tr><td>Bueno para textos que cuentan o explican</td><td>Bueno para textos con partes y clasificaciones</td></tr>
        <tr><td>Se lee</td><td>Se ve de un vistazo</td></tr>
      </table>
      <p><strong>Los subtítulos te dan el esqueleto:</strong> si el texto tiene subtítulos, cada uno suele ser una rama del esquema.</p>
      <p><strong>Un mapa conceptual</strong> es parecido: las ideas en recuadros unidas con flechas que dicen la relación ("causa", "por ejemplo", "se divide en").</p>
      <p>Para profundizar en técnicas de estudio está el curso <strong>Aprender a aprender</strong> de este sitio.</p>
      <p>Por ejemplo, para historia Raúl armó un esquema de "causas de la Revolución de Mayo" con dos ramas, internas y externas. Antes del examen, le alcanzó con mirarlo para recordar todo.</p>` },
  ],
  practica: [
    "Elegí 3 párrafos de un texto y anotá de cada uno el tema, la idea principal y una idea secundaria.",
    "Resumí un texto de 2 páginas en media carilla con tus palabras y anotá cuántas palabras tiene tu resumen.",
    "Armá un esquema de un texto con subtítulos y anotá cuántos niveles tiene.",
  ],
  recursos: [
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "¿Qué es la idea principal de un párrafo?", opciones: ["El primer ejemplo","La palabra más larga","Lo más importante que dice sobre el tema","El título del libro"], correcta: 2, explicacion: "Es lo central que dice. El ejemplo tienta porque es fácil de recordar, pero es secundario." },
    { q: "\"Caminar tiene muchos beneficios. Mejora la circulación y baja el estrés.\" ¿Cuál es la idea principal?", opciones: ["Caminar tiene muchos beneficios","Mejora la circulación","Baja el estrés","Caminar es gratis"], correcta: 0, explicacion: "La circulación y el estrés son ejemplos de los beneficios. Tientan porque son concretos, pero apoyan la idea principal." },
    { q: "¿Dónde suele estar la idea principal de un párrafo?", opciones: ["Siempre en la mitad","En el título del capítulo siempre","Nunca está escrita","Muchas veces en la primera oración, a veces al final"], correcta: 3, explicacion: "Suele abrir o cerrar el párrafo. \"Siempre en la mitad\" tienta, pero no es lo común." },
    { q: "Si sacás una oración y el párrafo se sigue entendiendo, ¿qué era?", opciones: ["La idea principal","Una idea secundaria","El tema","La conclusión del libro"], correcta: 1, explicacion: "Sin la principal el párrafo pierde sentido. Que sea la principal tienta, pero esa no se puede sacar." },
    { q: "Querés hacer un resumen. ¿Cómo lo escribís?", opciones: ["Copiando oraciones del texto","Con todos los ejemplos","Con tus palabras, solo lo importante y en orden","Con tu opinión sobre el autor"], correcta: 2, explicacion: "Con tus palabras demostrás que entendiste. Copiar tienta por rápido, pero no te obliga a pensar." },
    { q: "Si el texto original tiene 8 páginas, ¿qué largo debería tener tu resumen?", opciones: ["Entre 2 y 4 páginas","16 páginas","Una sola palabra","8 páginas"], correcta: 0, explicacion: "Entre la cuarta parte y la mitad: de 2 a 4 páginas. 8 páginas tienta por completo, pero ya no es un resumen." },
    { q: "En tu resumen escribiste \"me parece que el autor se equivoca\". ¿Qué pasa?", opciones: ["Está perfecto","Es obligatorio opinar","Le falta otra opinión","Un resumen no lleva tu opinión"], correcta: 3, explicacion: "El resumen cuenta lo que dice el texto. Opinar tienta, pero eso va en un comentario aparte." },
    { q: "Para unir las oraciones del resumen, ¿qué usás?", opciones: ["Puntos suspensivos","Conectores como \"además\", \"por eso\", \"en cambio\"","Emojis","Nada"], correcta: 1, explicacion: "Los conectores muestran la relación entre ideas. Puntos suspensivos tientan, pero no dicen nada." },
    { q: "Dejás que una IA haga el resumen por vos. ¿Qué pasa con tu aprendizaje?", opciones: ["Aprendés igual","Aprendés el doble","El que entiende es la IA: conviene hacerlo vos primero","No cambia nada"], correcta: 2, explicacion: "Resumir es lo que te obliga a entender. \"Aprendés igual\" tienta por cómodo, pero no." },
    { q: "Si un texto tiene partes y clasificaciones, ¿qué te conviene hacer?", opciones: ["Un esquema","Copiarlo entero","Un dibujo libre sin palabras","Nada"], correcta: 0, explicacion: "El esquema muestra las partes de un vistazo. Copiarlo tienta, pero no ordena nada." },
    { q: "Si vas a armar un esquema de un texto con subtítulos, ¿de dónde salen las ramas?", opciones: ["De los ejemplos","Del número de página","De las imágenes solamente","De los subtítulos"], correcta: 3, explicacion: "Cada subtítulo suele ser una rama. Los ejemplos tientan, pero van en los niveles de abajo." },
    { q: "¿Qué es un mapa conceptual?", opciones: ["Un mapa de la ciudad","Ideas en recuadros unidas con flechas que dicen la relación","Una lista de compras","Un resumen sin palabras"], correcta: 1, explicacion: "Las flechas dicen \"causa\", \"por ejemplo\". Un mapa de la ciudad tienta por la palabra, pero no." },
  ],
},
{
  id: "letra-chica",
  icono: "🔍",
  titulo: "La letra chica de la vida diaria",
  nivel: "Intermedio",
  objetivos: [
    "Encontrar en un contrato las obligaciones, los plazos, los costos y qué pasa si no cumplís",
    "Leer un prospecto buscando dosis, contraindicaciones y efectos adversos",
    "Revisar una factura o un resumen y detectar un cargo que no reconocés",
  ],
  lecciones: [
    { titulo: "Contratos: qué buscar antes de firmar", html: `
      <p class="idea">Un contrato te obliga a lo que dice, lo hayas leído o no. Antes de firmar, buscá cuatro cosas: <strong>qué tenés que hacer, cuándo, cuánto cuesta y qué pasa si no cumplís</strong>.</p>
      <table>
        <tr><th>Qué buscás</th><th>Palabras que lo marcan</th><th>Ejemplo en un alquiler</th></tr>
        <tr><td>Obligaciones</td><td>"deberá", "se obliga a", "a cargo de"</td><td>Pagar el alquiler y las expensas ordinarias</td></tr>
        <tr><td>Plazos</td><td>"dentro de", "a partir de", "con una antelación de"</td><td>Avisar con 30 días si te vas</td></tr>
        <tr><td>Costos</td><td>"monto", "importe", "actualización", "intereses"</td><td>Cómo y cada cuánto aumenta</td></tr>
        <tr><td>Consecuencias</td><td>"en caso de", "penalidad", "indemnización", "rescisión"</td><td>Cuánto pagás si te vas antes</td></tr>
      </table>
      <p>Una <strong>cláusula</strong> es cada punto numerado del contrato. Leelas todas, aunque sean muchas: la que importa puede estar en el medio.</p>
      <pre><code>Método para un contrato:
1. Pedilo antes, no el día de la firma, para leerlo con tiempo.
2. Marcá en cada cláusula: obligación (O), plazo (P), costo ($), consecuencia (!).
3. Anotá las dudas al margen con un "?".
4. Preguntá cada "?" antes de firmar.
5. Guardá una copia firmada.</code></pre>
      <p><strong>Si no entendés, no firmes todavía:</strong> preguntá a quien te lo da y, si es algo importante (un alquiler, un préstamo, un trabajo), consultá a un abogado o a un organismo como Defensa del Consumidor. Esta lección te ayuda a entender y preparar preguntas, pero no reemplaza a un profesional.</p>
      <p>Por ejemplo, Raúl marcó las cláusulas de su contrato con O, P, $ y !. Le quedaron 3 signos de pregunta y los llevó escritos a la inmobiliaria: en 10 minutos se los aclararon.</p>` },
    { titulo: "El prospecto de un remedio", video: {"id":"XhR_dVMldRM","t":"¿Cómo leer el prospecto de un medicamento? · Pharma 2.0 (1:59)"}, html: `
      <p class="idea">El <strong>prospecto</strong> es el papel que viene dentro de la caja de un remedio. No hace falta leerlo de corrido: buscá las secciones que responden <strong>para qué es, cómo se toma, quién no debe tomarlo y qué puede pasar</strong>.</p>
      <table>
        <tr><th>Sección</th><th>Qué te dice</th></tr>
        <tr><td>Indicaciones</td><td>Para qué se usa</td></tr>
        <tr><td>Posología o dosis</td><td>Cuánto tomar, cada cuánto y por cuántos días</td></tr>
        <tr><td>Contraindicaciones</td><td>Quién no lo debe tomar (por ejemplo, embarazadas o alérgicos a un componente)</td></tr>
        <tr><td>Advertencias y precauciones</td><td>Cuidados: manejar, alcohol, otras enfermedades</td></tr>
        <tr><td>Interacciones</td><td>Qué otros remedios o alimentos lo afectan</td></tr>
        <tr><td>Reacciones adversas</td><td>Efectos no deseados que pueden aparecer</td></tr>
        <tr><td>Conservación</td><td>Cómo guardarlo y hasta cuándo sirve</td></tr>
      </table>
      <p><strong>Posología</strong> quiere decir cuánto y cómo se toma. <strong>Contraindicación</strong> es una situación en la que no hay que tomarlo.</p>
      <p><strong>Lo que te indicó el médico manda:</strong> si la dosis que te dijo es distinta a la del prospecto, no la cambies por tu cuenta; preguntale a tu médico o al farmacéutico. Esta lección te ayuda a entender el papel, pero no reemplaza a un profesional de la salud.</p>
      <p><strong>Los efectos adversos asustan</strong> porque la lista es larga, pero ahí figuran también los muy raros. Si notás algo de esa lista, consultá; no dejes el remedio sin preguntar.</p>
      <p>En Argentina, la ANMAT es el organismo que autoriza los medicamentos.</p>
      <p>Por ejemplo, a la mamá de Raúl le dieron un antibiótico. Raúl buscó "posología" y vio que era cada 8 horas por 7 días; en "interacciones" leyó que no se mezclaba con alcohol, y se lo anotó en un papel pegado en la heladera.</p>` },
    { titulo: "Facturas, resúmenes y términos y condiciones", html: `
      <p class="idea">Las facturas y los resúmenes se leen <strong>buscando</strong>: el total, el vencimiento y cada cargo. Si algo no lo reconocés, preguntá antes de pagar.</p>
      <pre><code>Resumen de tarjeta (lo que mirás):
Saldo actual (total a pagar) ......... $ 185.400
Pago mínimo .......................... $  18.540
Vencimiento .......................... 10/12
Detalle de consumos:
  05/11  SUPERMERCADO .................. $  42.300
  08/11  STREAMING PLUS ................ $   7.900   ← ¿me suscribí?
  12/11  CUOTA 3/6 HELADERA ............ $  35.200
  ...
Intereses / cargos ..................... $   4.100   ← ¿por qué?</code></pre>
      <table>
        <tr><th>Concepto</th><th>Qué significa</th></tr>
        <tr><td>Saldo o total</td><td>Todo lo que debés en este resumen</td></tr>
        <tr><td>Pago mínimo</td><td>Lo menos que podés pagar; el resto genera intereses</td></tr>
        <tr><td>Cuota 3/6</td><td>Vas por la cuota 3 de 6</td></tr>
        <tr><td>Cargo</td><td>Un cobro extra: mantenimiento, seguro, intereses</td></tr>
      </table>
      <p><strong>Términos y condiciones</strong> son las reglas de un servicio o una app. Son largos: usá el buscador del navegador (Ctrl+F en la computadora, "buscar en la página" en el celular) con palabras como "cancelar", "renovación", "costo" o "datos".</p>
      <p><strong>Si no reconocés un cargo</strong>, reclamá a la empresa y guardá el número de reclamo. Si no te responden, Defensa del Consumidor recibe reclamos.</p>
      <p>Por ejemplo, Raúl encontró en el resumen un cobro de "STREAMING PLUS" que no conocía. Buscó en los términos de una app que había bajado y decía "renovación automática después de 7 días gratis": la canceló y reclamó el cargo.</p>` },
  ],
  practica: [
    "Agarrá un contrato o reglamento (alquiler, trabajo, club, gimnasio) y marcá cada cláusula con O, P, $ y !; anotá cuántas de cada una encontraste.",
    "Buscá el prospecto de un remedio de tu casa y anotá en 5 líneas: para qué es, la dosis, una contraindicación, una interacción y cómo se guarda.",
    "Revisá una factura o un resumen y anotá el total, el vencimiento y cada cargo que no reconozcas.",
    "En los términos de una app que uses, buscá con Ctrl+F \"cancelar\" y \"renovación\" y anotá qué dicen.",
  ],
  recursos: [
    { t: "Defensa del Consumidor (Argentina): derechos y reclamos", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
    { t: "ANMAT: Administración Nacional de Medicamentos, Alimentos y Tecnología Médica", url: "https://www.argentina.gob.ar/anmat" },
  ],
  quiz: [
    { q: "Si te dan un contrato para firmar en el momento, ¿qué conviene?", opciones: ["Firmarlo rápido para no quedar mal","Leer solo la primera hoja","Pedirlo antes para leerlo con tiempo","Firmar y leerlo después"], correcta: 2, explicacion: "Un contrato te obliga aunque no lo hayas leído. Firmar rápido tienta por compromiso, pero después es tarde." },
    { q: "Si una cláusula dice \"el locatario deberá abonar las expensas ordinarias\", ¿qué es?", opciones: ["Una obligación","Un plazo","Una consecuencia","Una opinión"], correcta: 0, explicacion: "\"Deberá\" marca una obligación. Plazo tienta, pero no dice cuándo." },
    { q: "Si leés \"con una antelación de 30 días\", ¿qué marcás?", opciones: ["Un costo","Una obligación de pago","Nada importante","Un plazo"], correcta: 3, explicacion: "Dice cuándo tenés que hacer algo. Costo tienta por el número, pero son días, no plata." },
    { q: "En el contrato hay algo que no entendés y es un alquiler. ¿Qué hacés?", opciones: ["Firmás igual","No firmás todavía: preguntás y, si hace falta, consultás a un profesional","Lo tachás","Lo dejás para la próxima"], correcta: 1, explicacion: "Un alquiler es importante. Firmar igual tienta por apuro, pero te obliga a algo que no entendiste." },
    { q: "Querés saber cuántas veces por día tomar un remedio. ¿Qué sección del prospecto buscás?", opciones: ["Conservación","Contraindicaciones","Posología o dosis","Indicaciones"], correcta: 2, explicacion: "La posología dice cuánto y cada cuánto. Indicaciones tienta, pero dice para qué sirve." },
    { q: "Querés saber si podés tomar un remedio estando embarazada. ¿Qué buscás?", opciones: ["Contraindicaciones y advertencias","Conservación","Indicaciones solamente","La marca"], correcta: 0, explicacion: "Ahí dice quién no debe tomarlo. Indicaciones tienta, pero dice para qué sirve, no para quién no." },
    { q: "El médico te indicó una dosis distinta a la del prospecto. ¿Qué hacés?", opciones: ["Cambiás a la del prospecto por tu cuenta","Dejás el remedio","Tomás el doble","Seguís lo del médico y, si dudás, le preguntás a él o al farmacéutico"], correcta: 3, explicacion: "El médico conoce tu caso. Cambiarla por tu cuenta tienta porque está escrito, pero puede ser un error." },
    { q: "La lista de reacciones adversas es larguísima y te asusta. ¿Qué hacés?", opciones: ["Dejás el remedio sin preguntar","Sabés que incluye efectos muy raros; si notás alguno, consultás","No lo tomás nunca","La ignorás siempre"], correcta: 1, explicacion: "La lista incluye lo raro. Dejarlo sin preguntar tienta por miedo, pero puede ser peor." },
    { q: "En tu resumen de tarjeta, ¿qué pasa si pagás solo el mínimo?", opciones: ["Quedás al día con todo","Te descuentan el resto","El resto genera intereses","No pasa nada"], correcta: 2, explicacion: "El mínimo no cancela la deuda. \"Quedás al día\" tienta porque pagaste, pero lo que queda cobra intereses." },
    { q: "Si en el resumen dice \"CUOTA 3/6\", ¿qué significa?", opciones: ["Vas por la cuota 3 de 6","Pagaste la mitad del total del resumen","Te faltan 3 meses de tarjeta","Es un descuento"], correcta: 0, explicacion: "Es el número de cuota de esa compra. \"La mitad del total\" tienta, pero es de esa compra sola." },
    { q: "Aparece un cobro que no reconocés. ¿Qué hacés?", opciones: ["Lo pagás igual","No pagás nada del resumen","Esperás que se borre solo","Reclamás a la empresa, guardás el número y, si no responden, vas a Defensa del Consumidor"], correcta: 3, explicacion: "Reclamar con número deja constancia. Pagarlo igual tienta por no hacer trámites, pero perdés esa plata." },
    { q: "Los términos y condiciones de una app son larguísimos. ¿Cómo encontrás si se renueva sola?", opciones: ["Los leés en voz alta enteros","Buscás con Ctrl+F palabras como \"renovación\" o \"cancelar\"","Aceptás sin mirar","Leés solo el título"], correcta: 1, explicacion: "El buscador va directo a lo que importa. Aceptar sin mirar tienta, pero te pueden cobrar sin que sepas." },
  ],
},
{
  id: "critico",
  icono: "🧐",
  titulo: "Leer con ojo crítico",
  nivel: "Avanzado",
  objetivos: [
    "Separar hechos de opiniones en una noticia o una publicación",
    "Revisar quién escribió un texto, cuándo y con qué fuentes",
    "Reconocer títulos engañosos y trucos para convencerte",
  ],
  lecciones: [
    { titulo: "Hechos y opiniones", video: {"id":"_VfmpouJmE4","t":"Hechos y opiniones · Profesor Paolo Astorga (5:12)"}, html: `
      <p class="idea">Un <strong>hecho</strong> se puede comprobar: pasó o no pasó, es verdad o no. Una <strong>opinión</strong> es lo que alguien piensa o siente sobre algo: se puede compartir o no, pero no se comprueba.</p>
      <table>
        <tr><th>Hecho</th><th>Opinión</th></tr>
        <tr><td>"El colectivo aumentó un 20% este mes"</td><td>"El aumento del colectivo es injusto"</td></tr>
        <tr><td>"El partido terminó 2 a 1"</td><td>"Fue el mejor partido del año"</td></tr>
        <tr><td>"La biblioteca abre de 9 a 18"</td><td>"La biblioteca tiene un horario cómodo"</td></tr>
      </table>
      <pre><code>Palabras que suelen marcar una opinión:
"creo", "me parece", "sin duda", "lo mejor", "lo peor",
"injusto", "increíble", "debería", "es una vergüenza"

Pregunta para separar:
¿Se puede comprobar con un dato, una fecha, un documento o una foto?
  sí → hecho (todavía hay que ver si es cierto)
  no → opinión</code></pre>
      <p><strong>Un hecho puede ser falso:</strong> "el colectivo aumentó un 50%" tiene forma de hecho, pero si en realidad fue un 20%, es un dato equivocado. Por eso, además de separar, hay que comprobar.</p>
      <p><strong>Las opiniones valen</strong> cuando están bien argumentadas: con razones y datos. El problema es cuando una opinión se presenta como si fuera un hecho.</p>
      <p>Esto conecta con los tipos de texto del primer módulo: una noticia debería informar hechos; una columna de opinión, argumentar. Muchas veces se mezclan.</p>
      <p>Por ejemplo, Raúl leyó en un grupo "la nueva línea de colectivo es un desastre y tarda una hora". La primera parte era opinión; la segunda, un hecho que se podía comprobar: lo midió y tardaba 35 minutos.</p>` },
    { titulo: "Quién lo dice, cuándo y con qué pruebas", html: `
      <p class="idea">Antes de creer o compartir algo, preguntá <strong>quién lo escribió, cuándo y en qué se basa</strong>. Un texto sin autor, sin fecha y sin fuentes merece más dudas.</p>
      <table>
        <tr><th>Pregunta</th><th>Qué mirás</th><th>Señal de alerta</th></tr>
        <tr><td>¿Quién lo dice?</td><td>El autor o el medio, y si sabe del tema</td><td>No hay autor, o es una cuenta anónima</td></tr>
        <tr><td>¿Cuándo?</td><td>La fecha de publicación</td><td>Es viejo y se comparte como nuevo</td></tr>
        <tr><td>¿En qué se basa?</td><td>Datos, documentos, nombres de estudios u organismos</td><td>"Dicen que...", "un estudio demostró" sin decir cuál</td></tr>
        <tr><td>¿Lo dice alguien más?</td><td>Si otros medios serios cuentan lo mismo</td><td>Solo aparece en un lugar</td></tr>
        <tr><td>¿Qué quiere?</td><td>Si vende algo o busca que hagas algo</td><td>Te pide plata, datos o compartir urgente</td></tr>
      </table>
      <p>Una <strong>fuente</strong> es de dónde sale un dato: un organismo, un estudio, un documento, una persona que lo vio.</p>
      <pre><code>Antes de compartir (30 segundos):
1. ¿Quién lo publicó?
2. ¿De qué fecha es?
3. ¿Qué fuente nombra?
4. Buscalo en otro medio confiable.
Si no pasa los 4, no lo compartas todavía.</code></pre>
      <p><strong>Para datos oficiales,</strong> la mejor fuente es el propio organismo: si dicen que cambió un trámite, buscalo en la página del organismo y no solo en una cadena.</p>
      <p>Por ejemplo, a Raúl le llegó una cadena: "desde mañana el SUBE cuesta el doble". No tenía fecha ni fuente. Buscó en la página oficial y era un aviso de otro año que alguien había reenviado.</p>` },
    { titulo: "Títulos engañosos y trucos para convencer", html: `
      <p class="idea">Muchos textos están escritos para que <strong>hagas clic o te enojes</strong>, no para informarte. Reconocer los trucos te protege.</p>
      <table>
        <tr><th>Truco</th><th>Ejemplo</th><th>Qué hacés</th></tr>
        <tr><td>Título exagerado</td><td>"¡Lo que descubrieron va a cambiar tu vida!"</td><td>Leé el texto: muchas veces no dice eso</td></tr>
        <tr><td>Generalizar</td><td>"Todos los jóvenes son así"</td><td>Preguntá: ¿todos? ¿según qué dato?</td></tr>
        <tr><td>Dato sin comparación</td><td>"Subió 1.000 casos"</td><td>¿De cuántos a cuántos? ¿en cuánto tiempo?</td></tr>
        <tr><td>Urgencia</td><td>"Compartilo antes de que lo borren"</td><td>Lo urgente sin fuente es sospechoso</td></tr>
        <tr><td>Emoción fuerte</td><td>Palabras de miedo o bronca</td><td>Pausá antes de reaccionar</td></tr>
        <tr><td>Foto fuera de contexto</td><td>Una imagen vieja con un texto nuevo</td><td>Buscá la imagen en internet</td></tr>
      </table>
      <p><strong>Leé más allá del título:</strong> muchas personas comparten solo por el título, y a veces el texto dice otra cosa o lo matiza.</p>
      <p><strong>Si te enoja mucho, pausá:</strong> una emoción fuerte es justo lo que buscan los textos engañosos. Respirá, revisá la fuente y después decidí.</p>
      <p><strong>Las estafas usan los mismos trucos:</strong> urgencia, premios increíbles, pedidos de datos o de un código. Un banco nunca te pide la clave por mensaje.</p>
      <p>Por ejemplo, Raúl vio "Crece la inseguridad: 500 robos más". Buscó la nota completa: eran 500 más en un año en toda la provincia, sobre un total de 40.000. La noticia era cierta, pero el título exageraba.</p>` },
  ],
  practica: [
    "Elegí una noticia y marcá con dos colores los hechos y las opiniones; anotá cuántos hay de cada uno.",
    "Tomá 3 mensajes o publicaciones que te llegaron y pasalos por las 4 preguntas de \"antes de compartir\"; anotá cuántos las pasaron.",
    "Buscá 3 títulos exagerados en internet, leé la nota completa y anotá en una línea qué decía en realidad cada una.",
  ],
  recursos: [
    { t: "Defensa del Consumidor (Argentina): derechos y reclamos", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
    { t: "FundéuRAE: consultas sobre dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si leés \"el colectivo aumentó un 20% este mes\", ¿es hecho u opinión?", opciones: ["Opinión","Las dos cosas","Hecho: se puede comprobar","Ninguna"], correcta: 2, explicacion: "Se comprueba con la tarifa. Opinión tienta si no te gusta el aumento, pero eso es otra frase." },
    { q: "Si leés \"el aumento del colectivo es injusto\", ¿es hecho u opinión?", opciones: ["Opinión","Hecho","Un dato oficial","Una ley"], correcta: 0, explicacion: "\"Injusto\" es una valoración. Hecho tienta porque habla de algo real, pero el juicio no se comprueba." },
    { q: "Si una frase tiene forma de hecho, pero el dato está mal, ¿qué es?", opciones: ["Una opinión","Una verdad","Un resumen","Un hecho equivocado: hay que comprobar"], correcta: 3, explicacion: "La forma no garantiza que sea cierto. Opinión tienta, pero se puede comprobar, y resulta falso." },
    { q: "Leés \"un estudio demostró que...\" sin decir cuál. ¿Qué te pasa con eso?", opciones: ["Es seguro, es un estudio","Es una señal de alerta: falta la fuente","Es una opinión","No importa"], correcta: 1, explicacion: "Sin decir cuál, no se puede revisar. \"Es seguro\" tienta por la palabra estudio, pero puede no existir." },
    { q: "Te llega una cadena sin autor ni fecha diciendo que cambió un trámite. ¿Qué hacés?", opciones: ["Lo compartís con todos","Lo creés porque te lo mandó un amigo","Lo buscás en la página del organismo antes de creerlo","Lo borrás sin leer"], correcta: 2, explicacion: "El organismo es la fuente. Creerlo por el amigo tienta, pero él también pudo recibirlo reenviado." },
    { q: "Si una noticia es de hace 3 años y se comparte como nueva, ¿qué mirás para darte cuenta?", opciones: ["La fecha de publicación","El color del título","La cantidad de likes","El largo"], correcta: 0, explicacion: "La fecha muestra si es vieja. Los likes tientan, pero no dicen cuándo se publicó." },
    { q: "Si un dato aparece solo en una página y en ningún otro medio, ¿qué conviene?", opciones: ["Creerlo porque es exclusivo","Compartirlo rápido","No pasa nada","Dudar y buscar si otros medios serios lo cuentan"], correcta: 3, explicacion: "Lo que nadie más cuenta merece dudas. \"Exclusivo\" tienta, pero puede ser falso." },
    { q: "Si un mensaje dice \"compartilo antes de que lo borren\", ¿qué truco usa?", opciones: ["Generalizar","Urgencia","Comparación","Fuente oficial"], correcta: 1, explicacion: "Te apura para que no pienses. Generalizar tienta, pero eso es \"todos son así\"." },
    { q: "Leés \"subió 1.000 casos\". ¿Qué preguntás?", opciones: ["Nada, es claro","¿Quién lo escribió con qué letra?","¿De cuántos a cuántos y en cuánto tiempo?","¿Por qué 1.000 y no 2.000?"], correcta: 2, explicacion: "Sin comparación, el número no dice si es mucho. \"Es claro\" tienta, pero 1.000 de 40.000 es poco." },
    { q: "Un título te da mucha bronca. ¿Qué hacés antes de compartir?", opciones: ["Pausás, leés la nota completa y revisás la fuente","Lo compartís enseguida","Comentás insultando","Lo mandás a todos tus grupos"], correcta: 0, explicacion: "La bronca es lo que buscan los textos engañosos. Compartir enseguida tienta, pero puede ser falso." },
    { q: "Si un mensaje del \"banco\" te pide la clave con urgencia, ¿qué es?", opciones: ["Un aviso real","Un trámite normal","Una promoción","Una estafa: un banco nunca pide la clave por mensaje"], correcta: 3, explicacion: "Usa urgencia y pide datos. \"Aviso real\" tienta por el nombre del banco, pero los bancos no piden claves." },
    { q: "Si leés \"todos los jóvenes son así\", ¿qué truco es?", opciones: ["Urgencia","Generalizar","Foto fuera de contexto","Dato sin comparación"], correcta: 1, explicacion: "Habla de todos sin datos. Urgencia tienta, pero no te apura a nada." },
  ],
},
{
  id: "habito",
  icono: "📚",
  titulo: "El hábito de leer",
  nivel: "Intermedio",
  objetivos: [
    "Armar un plan de lectura de pocos minutos por día que puedas sostener",
    "Elegir textos a tu nivel y conseguirlos gratis en una biblioteca",
    "Leer en pantalla sin perder la concentración",
  ],
  lecciones: [
    { titulo: "Poco y todos los días", html: `
      <p class="idea">Se lee mejor <strong>leyendo más</strong>. No hace falta mucho: <strong>15 minutos por día</strong> sostenidos valen más que 3 horas un domingo y después nada.</p>
      <table>
        <tr><th>Momento</th><th>Qué leer</th><th>Minutos</th></tr>
        <tr><td>En el colectivo o el tren</td><td>Un libro en el celular o en papel</td><td>15</td></tr>
        <tr><td>Antes de dormir</td><td>Un cuento o una novela</td><td>10</td></tr>
        <tr><td>En el almuerzo</td><td>Una nota larga de un medio</td><td>10</td></tr>
      </table>
      <pre><code>Cuenta de un año:
15 minutos por día × 365 días = 5.475 minutos, unas 91 horas.
Leyendo unas 30 páginas por hora: unas 2.700 páginas,
más o menos 10 libros de 270 páginas.</code></pre>
      <p><strong>Atalo a algo que ya hacés:</strong> "cuando me subo al colectivo, abro el libro". Un hábito nuevo se sostiene mejor pegado a uno viejo.</p>
      <p><strong>Anotá lo que leés:</strong> un cuaderno o una lista en el celular con la fecha, el título y una línea de lo que te dejó. Ver que crece motiva.</p>
      <p><strong>Si un día no leíste, no pasa nada:</strong> retomá al día siguiente. Lo que cuenta es la mayoría de los días, no ser perfecto.</p>
      <p>Por ejemplo, Raúl tiene 20 minutos de descanso entre vueltas. Empezó a leer 15 en ese rato y, en tres meses, terminó dos novelas y llevaba los apuntes al día.</p>` },
    { titulo: "Elegir qué leer y dónde conseguirlo", html: `
      <p class="idea">Para que el hábito arranque, elegí textos <strong>que te interesen y estén a tu nivel</strong>: ni tan fáciles que aburran, ni tan difíciles que frustren.</p>
      <pre><code>La prueba de la página:
Leé una página cualquiera del libro.
Contá las palabras que no conocés.
  0 a 2  → está a tu nivel
  3 a 5  → se puede, con un poco de esfuerzo
  más de 5 → por ahora buscá algo más fácil sobre el mismo tema</code></pre>
      <table>
        <tr><th>Si te gusta...</th><th>Probá...</th></tr>
        <tr><td>El fútbol</td><td>Crónicas y biografías de jugadores</td></tr>
        <tr><td>Las series policiales</td><td>Novelas policiales</td></tr>
        <tr><td>La cocina</td><td>Libros de recetas con historia</td></tr>
        <tr><td>La historia argentina</td><td>Libros de divulgación (escritos para todo público)</td></tr>
      </table>
      <p><strong>Las bibliotecas populares</strong> son bibliotecas de barrio, muchas veces sostenidas por vecinos, que prestan libros gratis o con una cuota baja. En Argentina hay más de mil: la CONABIP (Comisión Nacional de Bibliotecas Populares) tiene un buscador para encontrar la más cercana.</p>
      <p><strong>Dejar un libro está permitido:</strong> si después de 50 páginas no te engancha, cambialo. Obligarte a terminar algo que no te gusta es la forma más rápida de dejar de leer.</p>
      <p>Por ejemplo, Raúl probó una novela que le recomendaron y en la primera página contó 8 palabras desconocidas. La cambió por una policial más simple, la terminó en dos semanas y la siguiente ya le costó menos.</p>` },
    { titulo: "Leer en pantalla sin perderte", html: `
      <p class="idea">En pantalla leemos más rápido y <strong>más por arriba</strong>, saltando de una cosa a otra. Para textos importantes, armá la pantalla para leer, no para distraerte.</p>
      <table>
        <tr><th>Problema</th><th>Solución</th></tr>
        <tr><td>Notificaciones que cortan</td><td>Modo "no molestar" mientras leés</td></tr>
        <tr><td>Publicidades y ventanas</td><td>El "modo lectura" del navegador, que deja solo el texto</td></tr>
        <tr><td>Letra chica</td><td>Agrandá la letra (en el celular, con dos dedos o en la configuración)</td></tr>
        <tr><td>Saltar de pestaña en pestaña</td><td>Una sola pestaña abierta: la que estás leyendo</td></tr>
        <tr><td>Ojos cansados</td><td>Cada 20 minutos, mirá algo lejos por unos segundos</td></tr>
      </table>
      <p>El <strong>modo lectura</strong> es un botón del navegador (en Edge, Chrome o Safari) que muestra el texto limpio, sin publicidad ni menús. Suele aparecer como un ícono de libro o de página en la barra de la dirección.</p>
      <p><strong>Para estudiar, el papel sigue ganando:</strong> si un texto es largo y difícil, imprimirlo o leerlo en un libro ayuda a concentrarse y a subrayar.</p>
      <p><strong>Escuchar también vale:</strong> los audiolibros y la función de "leer en voz alta" del navegador ayudan cuando estás cansado o viajás de pie. Para estudiar, mejor combinarlos con el texto escrito.</p>
      <p>Por ejemplo, Raúl leía notas largas en el celular y lo cortaban los mensajes. Activó "no molestar" y el modo lectura, y leyó una nota entera de corrido por primera vez en meses.</p>` },
  ],
  practica: [
    "Elegí un momento del día, leé 15 minutos durante 7 días seguidos y anotá cada día cuántas páginas leíste.",
    "Hacé la prueba de la página con 3 libros y anotá cuántas palabras desconocidas tuvo cada uno; elegí el que está a tu nivel.",
    "Buscá en el buscador de la CONABIP la biblioteca popular más cercana y anotá su dirección y su horario.",
    "Leé una nota larga en el modo lectura y con \"no molestar\"; anotá cuántos minutos leíste sin cortar.",
  ],
  recursos: [
    { t: "CONABIP: buscador de bibliotecas populares de todo el país", url: "https://www.conabip.gob.ar/buscador_bp" },
    { t: "CONABIP: Comisión Nacional de Bibliotecas Populares", url: "https://www.conabip.gob.ar/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Querés empezar a leer más. ¿Qué plan conviene?", opciones: ["3 horas un domingo y después nada","Un libro entero por semana desde el primer día","15 minutos por día, todos los días","Leer solo cuando tenés ganas"], correcta: 2, explicacion: "Lo sostenido gana. Las 3 horas tientan por mucho, pero no arman el hábito." },
    { q: "Leés 15 minutos por día durante un año. ¿Cuántas horas son, más o menos?", opciones: ["Unas 91 horas","Unas 9 horas","Unas 365 horas","Unas 15 horas"], correcta: 0, explicacion: "15 × 365 = 5.475 minutos, unas 91 horas. 365 tienta por los días, pero cada día son 15 minutos, no una hora." },
    { q: "Te cuesta acordarte de leer. ¿Qué hacés?", opciones: ["Esperás tener ganas","Lo dejás para el fin de semana","Te ponés una meta de 2 horas","Lo atás a algo que ya hacés, como subir al colectivo"], correcta: 3, explicacion: "Pegado a un hábito viejo se sostiene. Esperar ganas tienta, pero nunca llegan solas." },
    { q: "Un día no leíste. ¿Qué hacés?", opciones: ["Abandonás el plan","Retomás al día siguiente sin culparte","Leés 3 horas para compensar","Empezás de cero el año que viene"], correcta: 1, explicacion: "Cuenta la mayoría de los días. Abandonar tienta por \"ya lo rompí\", pero no hace falta." },
    { q: "Si en una página de un libro contás 8 palabras desconocidas, ¿qué conviene?", opciones: ["Leerlo igual a la fuerza","Dejar de leer","Buscar por ahora algo más fácil sobre el mismo tema","Saltar las palabras siempre"], correcta: 2, explicacion: "Más de 5 frustra. Leerlo a la fuerza tienta por esfuerzo, pero es el camino a abandonar." },
    { q: "Si en una página contás 1 palabra desconocida, ¿qué te dice?", opciones: ["Que está a tu nivel","Que es demasiado difícil","Que es para chicos","Nada"], correcta: 0, explicacion: "0 a 2 es tu nivel. \"Para chicos\" tienta, pero fácil de leer no quiere decir infantil." },
    { q: "Si te encantan las series policiales, ¿qué podés probar leer?", opciones: ["Un manual de física","El código civil","Nada, no es lo mismo","Novelas policiales"], correcta: 3, explicacion: "Partir de lo que te gusta engancha. El manual tienta como \"lectura seria\", pero no engancha." },
    { q: "No tenés plata para comprar libros. ¿Dónde conseguís?", opciones: ["En ningún lado","En una biblioteca popular, con el buscador de la CONABIP","Solo en una librería","Copiándolos a mano"], correcta: 1, explicacion: "Las bibliotecas populares prestan gratis o con cuota baja. La librería tienta, pero cuesta plata." },
    { q: "Llevás 50 páginas de un libro que no te engancha. ¿Qué hacés?", opciones: ["Te obligás a terminarlo","Dejás de leer para siempre","Lo cambiás por otro","Lo empezás de nuevo"], correcta: 2, explicacion: "Dejarlo está permitido. Obligarte tienta por terminar lo empezado, pero te aleja de leer." },
    { q: "Leés una nota en el celular y te llenan las publicidades. ¿Qué usás?", opciones: ["El modo lectura del navegador","Más brillo","Otra pestaña","Nada, se aguanta"], correcta: 0, explicacion: "El modo lectura deja solo el texto. Más brillo tienta, pero no saca las publicidades." },
    { q: "Los mensajes te cortan la lectura. ¿Qué hacés?", opciones: ["Contestás cada uno","Subís el volumen","Leés más rápido","Activás \"no molestar\" mientras leés"], correcta: 3, explicacion: "Sin cortes mantenés el hilo. Contestar tienta por no hacer esperar, pero perdés lo que leías." },
    { q: "Tenés que estudiar un texto largo y difícil. ¿Qué te conviene?", opciones: ["Leerlo saltando entre pestañas","Leerlo en papel si podés, para concentrarte y subrayar","Escucharlo solo con el audio mientras hacés otra cosa","Leer solo el título"], correcta: 1, explicacion: "El papel ayuda a concentrarse en lo difícil. El audio tienta por cómodo, pero para estudiar conviene con el texto." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu caja de herramientas de lectura",
  nivel: "Avanzado",
  objetivos: [
    "Aplicar el antes, el durante y el después a un texto real que necesites",
    "Entregar un resumen, un esquema y la lista de dudas de ese texto",
    "Evaluar tu trabajo con una rúbrica y planear tu lectura del mes",
  ],
  lecciones: [
    { titulo: "Elegí tu texto y armá el plan", html: `
      <p class="idea">El proyecto es leer <strong>un texto real que necesites</strong> usando todo el curso, y dejar por escrito lo que entendiste.</p>
      <table>
        <tr><th>Si sos...</th><th>Texto posible</th></tr>
        <tr><td>Estudiante</td><td>Un capítulo de un apunte de 5 a 10 páginas</td></tr>
        <tr><td>Inquilino o por alquilar</td><td>Tu contrato o un modelo de contrato</td></tr>
        <tr><td>Alguien que busca trabajo</td><td>Las condiciones de un empleo o un reglamento</td></tr>
        <tr><td>Curioso</td><td>Una nota larga o un capítulo de un libro de divulgación</td></tr>
      </table>
      <pre><code>Tu plan (anotalo antes de empezar):
Texto:        ________________________
Tipo:         informativo / instructivo / argumentativo / normativo / narrativo
Para qué:     ________________________ (en una línea)
Lo que sé:    ________________________ (3 líneas)
Mis preguntas: 1. ______  2. ______
Tiempo:       ___ sesiones de ___ minutos</code></pre>
      <p><strong>Elegí algo de 5 a 10 páginas:</strong> suficiente para usar todas las herramientas, sin que el proyecto se vuelva eterno.</p>
      <p><strong>Si es un contrato o un tema de salud,</strong> el proyecto te ayuda a entenderlo y a llevar preguntas claras; la decisión final la tomás con un profesional si hace falta.</p>
      <p>Por ejemplo, Raúl eligió el capítulo de "Economía argentina" del secundario: 8 páginas, informativo, para el examen del mes que viene. Escribió lo que ya sabía de inflación y dos preguntas.</p>` },
    { titulo: "Leé con todas las herramientas", html: `
      <p class="idea">Recorré el texto en <strong>tres momentos</strong>: antes, durante y después. Cada uno deja algo anotado que vas a entregar.</p>
      <pre><code>ANTES
  [ ] Vistazo de 2 minutos: título, subtítulos, negritas, primer y último párrafo
  [ ] Propósito y preguntas escritas

DURANTE
  [ ] Leer cada párrafo y después subrayar pocas palabras
  [ ] Marcar al margen: "?", "causa", "ejemplo" (o O, P, $, ! si es un contrato)
  [ ] Palabras desconocidas: deducir por el contexto y confirmar en el diccionario
  [ ] Partir las oraciones largas: quién, qué, cuándo, qué le pasa

DESPUÉS
  [ ] Idea principal de cada párrafo
  [ ] Resumen con tus palabras (un cuarto a la mitad del original)
  [ ] Esquema con los subtítulos como ramas
  [ ] Las 3 preguntas: de qué trata, qué es lo más importante, qué hago con esto
  [ ] Si tiene opiniones o datos: ¿hechos u opiniones? ¿qué fuente usa?</code></pre>
      <table>
        <tr><th>Entregás</th><th>Qué es</th></tr>
        <tr><td>1. El plan</td><td>Lo de la lección anterior</td></tr>
        <tr><td>2. Glosario personal</td><td>Las palabras nuevas con su significado</td></tr>
        <tr><td>3. Resumen</td><td>Con tus palabras</td></tr>
        <tr><td>4. Esquema</td><td>Las ideas ordenadas en niveles</td></tr>
        <tr><td>5. Dudas</td><td>Lo que no quedó claro, para preguntar</td></tr>
      </table>
      <p><strong>Dividilo en sesiones:</strong> por ejemplo, una para el antes y la mitad del texto, otra para el resto y la última para el resumen y el esquema.</p>
      <p>Por ejemplo, Raúl usó 3 sesiones de 30 minutos en sus descansos. Su glosario personal tuvo 9 palabras, entre ellas "inflación", "PBI" y "déficit".</p>` },
    { titulo: "Evaluá tu trabajo con la rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para revisar tu proyecto y ver qué mejorar.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Plan</td><td>Propósito, tipo y preguntas claras</td><td>Falta una parte</td><td>No hay plan</td></tr>
        <tr><td>Glosario</td><td>Cada palabra con su significado en este texto</td><td>Algunas sin significado</td><td>No hay</td></tr>
        <tr><td>Resumen</td><td>Tus palabras, solo lo importante, en orden</td><td>Copia oraciones o tiene detalles de más</td><td>No hay</td></tr>
        <tr><td>Esquema</td><td>Idea general y partes en niveles</td><td>Lista sin niveles</td><td>No hay</td></tr>
        <tr><td>Comprensión</td><td>Respondés las 3 preguntas sin mirar</td><td>Respondés 2</td><td>Respondés 1 o ninguna</td></tr>
        <tr><td>Dudas</td><td>Escritas como preguntas concretas</td><td>Vagas ("no entendí nada")</td><td>No hay</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → muy bien: tenés tu caja de herramientas
7 a 9   → bien: repasá el módulo del criterio más bajo
0 a 6   → volvé a los módulos de "Mientras leés" e "Ideas principales"</code></pre>
      <p><strong>Plan del mes:</strong> después de la rúbrica, anotá un texto para leer cada semana, el momento del día y los minutos. Así lo que aprendiste se vuelve costumbre.</p>
      <p><strong>Pedí otra mirada:</strong> mostrale tu resumen a alguien que no leyó el texto. Si entiende de qué se trata, tu resumen funciona.</p>
      <p>Por ejemplo, Raúl sacó 10 de 12: perdió un punto en el esquema (era una lista sin niveles) y otro en dudas. Rehízo el esquema con ramas y llevó al profesor 2 preguntas concretas.</p>` },
  ],
  practica: [
    "Completá el plan de tu texto (tipo, para qué, lo que sabés, 2 preguntas y sesiones) y anotá cuántas sesiones vas a usar.",
    "Leé tu texto con la lista de antes, durante y después, y anotá cuántas casillas marcaste.",
    "Entregá el plan, el glosario personal, el resumen, el esquema y las dudas, y puntuá cada criterio de la rúbrica: anotá tu total de 12.",
    "Mostrale tu resumen a alguien que no leyó el texto y anotá si entendió de qué se trataba.",
  ],
  recursos: [
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "CONABIP: buscador de bibliotecas populares de todo el país", url: "https://www.conabip.gob.ar/buscador_bp" },
    { t: "FundéuRAE: consultas sobre dudas del español", url: "https://www.fundeu.es/consultas/" },
  ],
  quiz: [
    { q: "Tenés que elegir el texto del proyecto. ¿Cuál conviene?", opciones: ["Un libro de 500 páginas","Un mensaje de WhatsApp","Uno real que necesites, de 5 a 10 páginas","Uno que no te sirva para nada"], correcta: 2, explicacion: "Real y del largo justo permite usar todo. El libro largo tienta por desafío, pero se vuelve eterno." },
    { q: "Vas a leer tu contrato para el proyecto. ¿Qué agregás al plan?", opciones: ["Que la decisión final la tomás con un profesional si hace falta","Que el proyecto reemplaza al abogado","Que no hace falta leerlo entero","Nada"], correcta: 0, explicacion: "El curso ayuda a entender y preguntar. Reemplazar al abogado tienta por ahorrar, pero no corresponde." },
    { q: "En tu plan, ¿qué escribís en \"para qué\"?", opciones: ["El nombre del autor","El número de páginas","Tu opinión del texto","El propósito de la lectura en una línea"], correcta: 3, explicacion: "El propósito guía cómo leés. Tu opinión tienta, pero va después y aparte." },
    { q: "Antes de leer tu texto, ¿qué hacés primero?", opciones: ["El resumen","El vistazo de 2 minutos","El esquema","La rúbrica"], correcta: 1, explicacion: "El vistazo arma el mapa. El resumen tienta, pero va después de leer." },
    { q: "Mientras leés, encontrás una palabra nueva. ¿Dónde la anotás para el proyecto?", opciones: ["En ningún lado","En el resumen","En tu glosario personal, con su significado en este texto","En la rúbrica"], correcta: 2, explicacion: "El glosario personal es una de las entregas. El resumen tienta, pero ahí van las ideas." },
    { q: "Tu resumen copia oraciones del texto. ¿Cuántos puntos saca en la rúbrica?", opciones: ["1 punto","2 puntos","0 puntos","12 puntos"], correcta: 0, explicacion: "La rúbrica da 1 a \"copia oraciones\". 2 tienta porque existe, pero son para tus palabras." },
    { q: "Tu esquema es una lista sin niveles. ¿Qué te falta?", opciones: ["Más colores","Más páginas","Nada, está bien","Ordenar la idea general arriba y las partes debajo"], correcta: 3, explicacion: "Los niveles muestran la relación. Más colores tienta, pero no ordena." },
    { q: "Si escribiste como duda \"no entendí nada\", ¿qué mejorás?", opciones: ["Borrarla","Escribirla como una pregunta concreta","Escribirla con mayúsculas","Dejarla igual"], correcta: 1, explicacion: "Una pregunta concreta se puede responder. Borrarla tienta, pero la duda sigue ahí." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Abandonás","Empezás el curso de cero","Repasás el módulo del criterio más bajo","No hacés nada"], correcta: 2, explicacion: "De 7 a 9 es bien: falta pulir algo. Empezar de cero tienta, pero no hace falta." },
    { q: "Si sacaste 5 de 12, ¿qué módulos repasás?", opciones: ["\"Mientras leés\" e \"Ideas principales\"","Solo el proyecto","Ninguno","Solo el hábito"], correcta: 0, explicacion: "Ahí están las herramientas centrales. El hábito tienta, pero no ayuda con el resumen ni el esquema." },
    { q: "Querés saber si tu resumen funciona. ¿Qué probás?", opciones: ["Contar sus palabras","Leerlo vos de nuevo","Pasarlo en limpio","Mostrárselo a alguien que no leyó el texto y ver si entiende"], correcta: 3, explicacion: "Si otro entiende, funciona. Leerlo vos tienta, pero ya sabés de qué trata." },
    { q: "Si terminaste el proyecto, ¿qué sigue para no perder lo aprendido?", opciones: ["Nada, ya aprendiste","Un plan del mes: un texto por semana, momento y minutos","Esperar al próximo curso","Leer solo cuando haga falta"], correcta: 1, explicacion: "La costumbre sostiene lo aprendido. \"Ya aprendiste\" tienta, pero sin práctica se pierde." },
  ],
},
];
