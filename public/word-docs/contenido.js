// Temario del curso "Documentos con Word y Google Docs". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js word-docs y node tools/metodologia.js word-docs
window.TEMARIO = [
{
  id: "empezar",
  icono: "📄",
  titulo: "Empezar: crear, guardar y encontrar tus documentos",
  nivel: "Básico",
  objetivos: [
    "Crear un documento en Word para la web o en Google Docs, con un nombre que lo identifique",
    "Saber dónde se guarda y cómo encontrarlo, compartirlo y descargarlo en el formato que te pidan",
    "Escribir y corregir rápido con los atajos de teclado básicos",
  ],
  lecciones: [
    { titulo: "Word y Google Docs: gratis y casi iguales", html: `
      <p class="idea">Un <strong>procesador de texto</strong> es el programa para escribir documentos: un CV, una carta, un informe, un trabajo práctico. Los dos más usados son Word (de Microsoft) y Google Docs (de Google, en castellano "Documentos de Google"). Funcionan casi igual y los dos tienen versión gratis.</p>
      <table>
        <tr><th>Programa</th><th>Cuenta</th><th>Dónde</th></tr>
        <tr><td>Word para la web</td><td>Cuenta de Microsoft (gratis)</td><td>office.com, y elegís Word</td></tr>
        <tr><td>Google Docs</td><td>Cuenta de Google (la de Gmail)</td><td>docs.google.com</td></tr>
      </table>
      <p>Las dos guardan solas en la nube cada vez que escribís: no hace falta apretar "Guardar". Lo que sí hay que hacer es <strong>ponerle un buen nombre</strong> al documento, haciendo clic en el título de arriba ("Documento sin título" o "Documento1").</p>
      <pre><code>Nombres que no sirven:   Documento1 · nuevo · final · final2
Nombres que sirven:      CV-Ana-Gomez-2026 · Carta-reclamo-luz-marzo · TP-Historia-Revolucion-Mayo</code></pre>
      <p>Por ejemplo, si dentro de seis meses buscás "CV" en tu Google Drive o tu OneDrive, un buen nombre hace que lo encuentres en segundos.</p>
      <p>Las dos herramientas tienen aplicación para el celular, pero para escribir algo largo conviene una computadora. Si no tenés, en muchas bibliotecas y centros comunitarios hay para usar: entrá con tu cuenta y, al irte, cerrá la sesión.</p>` },
    { titulo: "Compartir, descargar y PDF", html: `
      <p class="idea">Un documento se puede compartir de dos formas: mandando un <strong>enlace</strong> (la otra persona lo abre en la nube) o mandando un <strong>archivo</strong> descargado (Word o PDF). Cada una sirve para algo distinto.</p>
      <table>
        <tr><th>Querés...</th><th>Usás</th></tr>
        <tr><td>Que otra persona lo lea o lo edite con vos</td><td>El botón Compartir, eligiendo si puede ver, comentar o editar</td></tr>
        <tr><td>Mandar un CV, una carta o algo que no se tiene que cambiar</td><td>Descargar en <strong>PDF</strong></td></tr>
        <tr><td>Que alguien lo siga editando en su computadora</td><td>Descargar en formato Word (.docx)</td></tr>
      </table>
      <p><strong>El PDF</strong> es un formato que se ve igual en cualquier computadora o celular y que no se desarma. Para un CV o una carta formal, casi siempre conviene PDF.</p>
      <ul>
        <li>En Google Docs: Archivo → Descargar → Documento PDF.</li>
        <li>En Word: Archivo → Guardar como (o Descargar) → PDF.</li>
      </ul>
      <p><strong>Cuidado al compartir con enlace:</strong> si elegís "cualquier persona con el enlace", cualquiera que lo reciba (o lo encuentre reenviado) lo puede abrir. Para documentos con datos personales, compartí solo con las personas que lo necesitan.</p>
      <p>Por ejemplo, para postularte a un trabajo, mandá el CV en PDF con un nombre claro. Un enlace de Google Docs puede pedir permiso para abrirse y hacer perder tiempo a quien lo recibe.</p>` },
    { titulo: "Escribir y corregir rápido", html: `
      <p class="idea">Unos pocos atajos de teclado te ahorran mucho tiempo. Funcionan igual en Word y en Google Docs (en Mac, en vez de Ctrl se usa Cmd).</p>
      <table>
        <tr><th>Atajo</th><th>Qué hace</th></tr>
        <tr><td>Ctrl + Z</td><td>Deshacer el último cambio</td></tr>
        <tr><td>Ctrl + C y Ctrl + V</td><td>Copiar y pegar</td></tr>
        <tr><td>Ctrl + X</td><td>Cortar (para mover un texto)</td></tr>
        <tr><td>Ctrl + B (en Word en castellano, Ctrl + N)</td><td>Negrita</td></tr>
        <tr><td>Ctrl + F (en Word en castellano, Ctrl + B)</td><td>Buscar una palabra en el documento</td></tr>
        <tr><td>Ctrl + Mayús + V</td><td>Pegar sin formato (lección siguiente)</td></tr>
      </table>
      <p>Ojo: en Word configurado en castellano algunos atajos cambian de letra (por ejemplo, negrita es Ctrl + N). Si un atajo hace otra cosa, probá con el otro o usá el botón.</p>
      <p><strong>Pegar sin formato.</strong> Cuando copiás un texto de una página web o de un mail, se trae su letra, su tamaño y sus colores. Con Ctrl + Mayús + V pegás solo el texto, y toma el formato de tu documento. Funciona en Google Docs y en las versiones recientes de Word; si en tu Word hace otra cosa, usá clic derecho → Opciones de pegado → Mantener solo texto.</p>
      <p><strong>La corrección ortográfica:</strong> las palabras con rayita roja pueden estar mal escritas. Clic derecho sobre la palabra muestra sugerencias. Fijate que el idioma del documento sea español (en Google Docs, Archivo → Idioma; en Word, en la barra de abajo).</p>
      <p>Por ejemplo, el corrector no detecta todo: "voy a ser la tarea" (en vez de "hacer") no tiene rayita porque las dos palabras existen. Releé siempre en voz alta antes de mandar algo importante.</p>` },
  ],
  practica: [
    "Creá un documento en Word para la web o Google Docs, ponele un nombre claro y escribí un párrafo sobre vos. Anotá dónde quedó guardado.",
    "Descargá ese documento en PDF y mandátelo a vos mismo. Abrilo en el celular y anotá si se ve bien.",
    "Copiá un párrafo de una página web y pegalo dos veces: una con Ctrl + V y otra con Ctrl + Mayús + V. Anotá qué diferencia ves.",
  ],
  recursos: [
    { t: "Google: cómo usar Documentos de Google", url: "https://support.google.com/docs/answer/7068618?hl=es" },
    { t: "Microsoft: ayuda y aprendizaje de Word", url: "https://support.microsoft.com/es-es/word" },
    { t: "Google: crear, ver o descargar archivos", url: "https://support.google.com/docs/answer/49114?hl=es" },
  ],
  quiz: [
    { q: "Querés escribir documentos sin pagar. ¿Qué usás?", opciones: ["Un Word trucho descargado","Nada, hay que pagar sí o sí","Word para la web con una cuenta de Microsoft o Google Docs con una de Google","El bloc de notas para todo"], correcta: 2, explicacion: "Las dos versiones en el navegador son gratis. El programa trucho tienta, pero puede traer virus y es ilegal." },
    { q: "Escribiste un documento en Google Docs y se cortó internet. ¿Qué pasó con lo escrito?", opciones: ["Se guardó lo escrito hasta ese momento: se guarda solo en la nube","Se perdió todo","Se guarda solo si apretaste Guardar","Se borró el documento"], correcta: 0, explicacion: "Google Docs y Word para la web guardan solos. Pensar que se perdió tienta por costumbre de los programas viejos, pero lo escrito ya está guardado." },
    { q: "¿Cuál de estos es un buen nombre para tu CV?", opciones: ["Documento1","final2","nuevo","CV-Ana-Gomez-2026"], correcta: 3, explicacion: "Un buen nombre dice qué es y de quién. \"final2\" tienta porque es el último, pero en seis meses no sabés qué es." },
    { q: "Tenés que mandar tu CV para un trabajo. ¿En qué formato?", opciones: ["Un enlace de edición de Google Docs","PDF, que se ve igual en cualquier computadora","Una foto del CV","El documento sin descargar"], correcta: 1, explicacion: "El PDF no se desarma y abre en cualquier lado. El enlace tienta por rápido, pero puede pedir permiso o dejar que lo editen." },
    { q: "Querés que tu compañero de trabajo práctico escriba en el mismo documento que vos. ¿Qué hacés?", opciones: ["Le mandás un PDF","Le mandás una foto","Lo compartís con él con permiso para editar","Le dictás por teléfono"], correcta: 2, explicacion: "Compartir con permiso de edición deja que los dos escriban. El PDF tienta porque es el formato \"serio\", pero no se puede editar." },
    { q: "Tu documento tiene datos personales. ¿Cómo lo compartís?", opciones: ["Solo con las personas que lo necesitan, no con \"cualquier persona con el enlace\"","Con cualquiera que tenga el enlace","Lo publicás en redes","Lo mandás a todos tus contactos"], correcta: 0, explicacion: "Un enlace abierto puede llegar a cualquiera. Abrirlo a todos tienta por cómodo, pero expone los datos." },
    { q: "Copiaste un texto de una página y al pegarlo trajo otra letra y colores. ¿Qué hacés?", opciones: ["Cambiás todo tu documento a esa letra","Lo escribís de nuevo a mano","Lo dejás así","Lo pegás sin formato con Ctrl + Mayús + V"], correcta: 3, explicacion: "Pegar sin formato toma el estilo de tu documento. Escribirlo de nuevo tienta, pero es trabajo de más." },
    { q: "Borraste un párrafo sin querer. ¿Qué hacés?", opciones: ["Cerrás sin guardar","Ctrl + Z para deshacer","Lo escribís de nuevo de memoria","Ctrl + C"], correcta: 1, explicacion: "Ctrl + Z deshace el último cambio. Cerrar sin guardar tienta por costumbre, pero en la nube ya se guardó el borrado." },
    { q: "En Word en castellano apretás Ctrl + B para negrita y se abre el buscador. ¿Por qué?", opciones: ["Porque Word está roto","Porque no hay negrita","Porque en Word en castellano algunos atajos cambian: negrita es Ctrl + N","Porque es un virus"], correcta: 2, explicacion: "Los atajos dependen del idioma de Word. Pensar que está roto tienta, pero es la configuración en castellano." },
    { q: "Escribiste \"voy a ser la tarea\" y el corrector no marcó nada. ¿Qué concluís?", opciones: ["Que el corrector no detecta todo: hay que releer","Que está bien escrito","Que el corrector está apagado","Que hay que cambiar de programa"], correcta: 0, explicacion: "\"Ser\" existe, así que no lo marca. Confiar en el corrector tienta, pero no entiende el sentido de la frase." },
    { q: "El corrector marca en rojo palabras bien escritas en castellano. ¿Qué revisás?", opciones: ["Que la letra sea Arial","Que el documento tenga nombre","Que estés conectado a internet","Que el idioma del documento esté en español"], correcta: 3, explicacion: "Si el idioma está en inglés, todo lo castellano parece error. La letra tienta como causa, pero no tiene nada que ver con la ortografía." },
    { q: "Usaste una computadora de la biblioteca para escribir tu CV. ¿Qué hacés al irte?", opciones: ["Dejás la sesión abierta para la próxima","Cerrás la sesión de tu cuenta","Apagás solo el monitor","Nada, total no hay nadie"], correcta: 1, explicacion: "La próxima persona entraría a tus documentos y tu mail. Dejarla abierta tienta para volver rápido, pero expone todo." },
  ],
},
{
  id: "formato",
  icono: "🔤",
  titulo: "Dar formato: letra, párrafos y listas",
  nivel: "Básico",
  objetivos: [
    "Elegir una letra y un tamaño legibles y usar la negrita con moderación",
    "Ajustar alineación, interlineado y márgenes de un párrafo",
    "Armar listas con viñetas y numeradas que se mantengan ordenadas",
  ],
  lecciones: [
    { titulo: "La letra: legible y sin exagerar", html: `
      <p class="idea">El objetivo del formato es que el documento se lea fácil. Una o dos letras, un tamaño cómodo y la negrita solo para lo importante. Cuantos más colores y letras distintas, más difícil de leer.</p>
      <table>
        <tr><th>Elemento</th><th>Recomendación</th></tr>
        <tr><td>Letra (fuente)</td><td>Una sola para el texto, simple y legible: Arial, Calibri, Roboto o similar</td></tr>
        <tr><td>Tamaño del texto</td><td>Entre 11 y 12</td></tr>
        <tr><td>Títulos</td><td>Más grandes y en negrita, usando estilos (módulo 2)</td></tr>
        <tr><td>Negrita</td><td>Para destacar pocas palabras clave, no párrafos enteros</td></tr>
        <tr><td>Cursiva</td><td>Para títulos de libros o palabras en otro idioma</td></tr>
        <tr><td>Subrayado</td><td>Mejor evitarlo: se confunde con un enlace</td></tr>
        <tr><td>Colores</td><td>Texto negro o gris oscuro; un solo color de acento, si hace falta</td></tr>
      </table>
      <p><strong>Las mayúsculas sostenidas cansan:</strong> UN PÁRRAFO ENTERO EN MAYÚSCULAS SE LEE MÁS LENTO Y PARECE QUE GRITA. Usá mayúsculas solo al principio de las oraciones y en los nombres.</p>
      <p><strong>Copiar formato:</strong> el botón con forma de pincel ("Copiar formato" o "Pintar formato") copia el formato de un texto a otro. Seleccionás el texto que tiene el formato, apretás el pincel y después seleccionás el texto al que se lo querés aplicar.</p>
      <p>Por ejemplo, en un CV, la negrita sirve para el nombre del puesto y de la empresa; si ponés todo en negrita, nada se destaca.</p>` },
    { titulo: "Párrafos: alineación, espacios y márgenes", html: `
      <p class="idea">Un párrafo bien formateado deja aire: espacio entre líneas, espacio entre párrafos y márgenes razonables. Un bloque de texto apretado cuesta leerlo aunque esté bien escrito.</p>
      <table>
        <tr><th>Ajuste</th><th>Dónde</th><th>Recomendación</th></tr>
        <tr><td>Alineación</td><td>Botones de alinear a la izquierda, centrar, derecha, justificar</td><td>Izquierda para el texto; centrado solo para títulos de portada</td></tr>
        <tr><td>Interlineado</td><td>Botón de interlineado</td><td>Entre 1,15 y 1,5</td></tr>
        <tr><td>Espacio entre párrafos</td><td>En el mismo botón: "agregar espacio antes o después"</td><td>Un poco de espacio después de cada párrafo</td></tr>
        <tr><td>Márgenes</td><td>Configurar página (Google Docs) o Disposición (Word)</td><td>Alrededor de 2,5 cm</td></tr>
      </table>
      <p><strong>No uses Enter para separar párrafos ni espacios para acomodar.</strong> Apretar Enter dos veces o la barra espaciadora muchas veces se ve bien en tu pantalla, pero se desarma cuando cambia algo. Usá el espacio después del párrafo y la sangría o el tabulador.</p>
      <pre><code>Así no:   palabra··········palabra   (muchos espacios para alinear)
Así sí:   una tabla o un tabulador (módulo 3)</code></pre>
      <p><strong>Saltos de página:</strong> si querés que algo empiece en una página nueva (por ejemplo, un capítulo), insertá un salto de página (Insertar → Salto → Salto de página; en Word, Ctrl + Enter) en vez de apretar Enter muchas veces.</p>
      <p>Por ejemplo, el texto justificado (alineado a los dos márgenes) a veces deja espacios grandes entre palabras: para documentos comunes, la alineación a la izquierda se lee mejor.</p>` },
    { titulo: "Listas con viñetas y numeradas", html: `
      <p class="idea">Las listas ordenan la información y se leen más rápido que un párrafo. Se usan <strong>viñetas</strong> (puntos) cuando el orden no importa y <strong>números</strong> cuando sí importa, como en una lista de pasos.</p>
      <table>
        <tr><th>Tipo</th><th>Para</th><th>Ejemplo</th></tr>
        <tr><td>Viñetas</td><td>Elementos sin orden</td><td>Habilidades en un CV, requisitos de un trámite</td></tr>
        <tr><td>Numerada</td><td>Pasos o un orden de importancia</td><td>Instrucciones, prioridades</td></tr>
        <tr><td>Con niveles</td><td>Elementos dentro de otros</td><td>Un tema con subtemas</td></tr>
      </table>
      <p><strong>Cómo se usan bien:</strong></p>
      <ul>
        <li>Usá el botón de lista, no escribas guiones o números a mano: así la numeración se actualiza sola si agregás un punto en el medio.</li>
        <li>Para bajar un nivel, apretá Tab al principio del punto; para subir, Mayús + Tab.</li>
        <li>Empezá cada punto de la misma forma (todos con verbo, o todos con sustantivo).</li>
        <li>Para cortar la lista, apretá Enter dos veces o el botón de lista de nuevo.</li>
      </ul>
      <pre><code>Requisitos para el trámite:        Pasos para descargar en PDF:
• DNI                              1. Abrí el documento
• Constancia de CUIL               2. Archivo → Descargar
• Comprobante de domicilio         3. Elegí Documento PDF</code></pre>
      <p>Por ejemplo, si escribiste los números a mano (1., 2., 3.) y agregás un paso en el medio, tenés que renumerar todo. Con el botón de lista numerada se renumera sola.</p>` },
  ],
  practica: [
    "Tomá un texto tuyo de media página y aplicale: una sola letra de tamaño 11 o 12, interlineado 1,15 y espacio después de cada párrafo. Anotá cuántas letras distintas tenía antes.",
    "Buscá en tu documento lugares donde usaste muchos espacios o varios Enter para acomodar, y reemplazalos por espacio entre párrafos o salto de página. Anotá cuántos encontraste.",
    "Escribí una lista de pasos para un trámite con el botón de lista numerada y agregá un paso en el medio. Anotá si la numeración se actualizó sola.",
  ],
  recursos: [
    { t: "Google: cómo usar Documentos de Google", url: "https://support.google.com/docs/answer/7068618?hl=es" },
    { t: "Microsoft: ayuda y aprendizaje de Word", url: "https://support.microsoft.com/es-es/word" },
  ],
  quiz: [
    { q: "Tu documento tiene cinco letras distintas y tres colores. ¿Qué cambiás?", opciones: ["Agregás más colores para que sea alegre","Ponés todo en negrita","Dejás una sola letra legible y texto oscuro, con un color de acento como mucho","Usás mayúsculas en todo"], correcta: 2, explicacion: "Menos variedad se lee más fácil. Más colores tienta para que sea llamativo, pero distrae." },
    { q: "¿Qué tamaño de letra conviene para el texto de un documento?", opciones: ["Entre 11 y 12","8","20","30"], correcta: 0, explicacion: "11 o 12 se lee cómodo. 8 tienta para que entre todo en una página, pero cansa la vista." },
    { q: "Querés destacar el nombre del puesto en tu CV. ¿Qué usás?", opciones: ["Subrayado","Todo el párrafo en negrita","Mayúsculas y rojo","Negrita en esas pocas palabras"], correcta: 3, explicacion: "La negrita en pocas palabras destaca. El subrayado tienta, pero se confunde con un enlace." },
    { q: "Si escribiste un aviso entero en mayúsculas, ¿qué pasa?", opciones: ["Se lee más rápido","Se lee más lento y parece que grita","Se ve más profesional","No cambia nada"], correcta: 1, explicacion: "Las mayúsculas sostenidas cansan. Que es más profesional tienta porque llama la atención, pero se lee peor." },
    { q: "Querés que un subtítulo tenga el mismo formato que otro que ya armaste. ¿Qué usás?", opciones: ["Lo armás de nuevo a mano","Copiás y pegás el subtítulo entero","El pincel de copiar formato","Le cambiás la letra a todo el documento"], correcta: 2, explicacion: "El pincel copia el formato con un clic. Armarlo a mano tienta, pero es fácil que quede distinto." },
    { q: "¿Qué alineación conviene para el texto común de un documento?", opciones: ["A la izquierda","Centrado","A la derecha","Justificado siempre"], correcta: 0, explicacion: "A la izquierda se lee mejor. Centrado tienta porque se ve prolijo, pero un párrafo centrado es difícil de leer." },
    { q: "Separaste los párrafos apretando Enter dos veces y al cambiar la letra se desacomodó todo. ¿Qué cambiás?", opciones: ["Enter tres veces","La barra espaciadora","Una imagen en blanco","El espacio después del párrafo"], correcta: 3, explicacion: "El espacio del párrafo se adapta al cambiar el formato. Enter tres veces tienta para separar más, pero se desarma igual." },
    { q: "Querés que un capítulo empiece en una página nueva. ¿Qué hacés?", opciones: ["Apretás Enter hasta que baje","Insertás un salto de página","Dejás el capítulo pegado","Agregás espacios"], correcta: 1, explicacion: "El salto de página es fijo aunque cambie el texto de arriba. Apretar Enter tienta por simple, pero se corre apenas editás algo." },
    { q: "Tenés que escribir los pasos de un trámite. ¿Qué lista usás?", opciones: ["Con viñetas","Ninguna, un párrafo","Numerada, porque el orden importa","Una tabla de 10 columnas"], correcta: 2, explicacion: "Los pasos tienen orden. Las viñetas tientan porque se ven prolijas, pero no dicen qué va primero." },
    { q: "Escribiste los números de una lista a mano y agregaste un paso en el medio. ¿Qué pasa?", opciones: ["Tenés que renumerar todo a mano: conviene usar el botón de lista numerada","Se renumera solo","No pasa nada","Se borra la lista"], correcta: 0, explicacion: "Solo la lista automática se renumera sola. Pensar que se renumera solo tienta, pero los números escritos a mano son texto." },
    { q: "Querés poner un subpunto dentro de un punto de la lista. ¿Qué tecla usás?", opciones: ["Enter","La barra espaciadora varias veces","Ctrl + Z","Tab al principio del punto"], correcta: 3, explicacion: "Tab baja un nivel. La barra espaciadora tienta para correrlo, pero no lo convierte en subpunto." },
    { q: "Querés alinear dos columnas de palabras. ¿Qué no conviene hacer?", opciones: ["Usar una tabla","Usar muchos espacios para acomodar","Usar un tabulador","Usar dos columnas"], correcta: 1, explicacion: "Los espacios se desarman con cualquier cambio. Parece que funcionan en tu pantalla, pero en otra computadora quedan torcidos." },
  ],
},
{
  id: "estilos",
  icono: "🗂️",
  titulo: "Estilos, títulos e índice automático",
  nivel: "Intermedio",
  objetivos: [
    "Usar los estilos de título para que el documento tenga estructura",
    "Insertar un índice automático y actualizarlo",
    "Agregar números de página, encabezado y pie",
  ],
  lecciones: [
    { titulo: "Los estilos de título", html: `
      <p class="idea">Un <strong>estilo</strong> es un formato con nombre: "Título 1", "Título 2", "Texto normal". En vez de agrandar y poner en negrita cada título a mano, le aplicás el estilo. Así todos quedan iguales y el programa sabe que es un título.</p>
      <table>
        <tr><th>Estilo</th><th>Para</th></tr>
        <tr><td>Título (o Título del documento)</td><td>El título principal, una sola vez</td></tr>
        <tr><td>Título 1</td><td>Los capítulos o secciones grandes</td></tr>
        <tr><td>Título 2</td><td>Las partes dentro de cada sección</td></tr>
        <tr><td>Texto normal</td><td>Todo lo demás</td></tr>
      </table>
      <p><strong>Dónde están:</strong> en Google Docs, en la lista desplegable que dice "Texto normal" en la barra de arriba. En Word, en la pestaña Inicio, en la galería de Estilos.</p>
      <p><strong>Por qué conviene usarlos:</strong></p>
      <ul>
        <li><strong>Todo queda igual:</strong> si cambiás el formato de "Título 1", cambian todos los títulos de ese nivel a la vez.</li>
        <li><strong>Índice automático:</strong> el programa arma el índice con los títulos (lección siguiente).</li>
        <li><strong>Navegación:</strong> el panel de esquema (Google Docs) o de navegación (Word) muestra los títulos y te deja saltar a cualquier parte.</li>
        <li><strong>Accesibilidad:</strong> los lectores de pantalla que usan las personas ciegas reconocen los estilos de título para moverse por el documento.</li>
      </ul>
      <p>Por ejemplo, en un trabajo práctico con 5 secciones, si el profesor pide los títulos en otro color, con estilos lo cambiás una vez. Sin estilos, tenés que buscar y cambiar los 5 a mano.</p>` },
    { titulo: "El índice automático", html: `
      <p class="idea">Si usaste los estilos de título, el índice se arma solo, con los números de página. Y si después cambiás el documento, lo actualizás con un clic.</p>
      <ul>
        <li><strong>Google Docs:</strong> poné el cursor donde va el índice → Insertar → Índice (o Tabla de contenido) y elegí un modelo.</li>
        <li><strong>Word:</strong> Referencias → Tabla de contenido y elegí un modelo.</li>
      </ul>
      <p><strong>Actualizarlo:</strong> el índice no cambia solo cuando agregás secciones. Hacé clic sobre él y apretá el botón de actualizar (el ícono de flecha circular en Google Docs, o "Actualizar tabla" en Word).</p>
      <pre><code>ÍNDICE
1. Introducción ..................... 2
2. El problema ...................... 3
   2.1 Datos del barrio ............. 3
   2.2 Encuestas .................... 5
3. Propuesta ........................ 6</code></pre>
      <table>
        <tr><th>Si el índice...</th><th>Causa</th></tr>
        <tr><td>No muestra un título</td><td>Ese título no tiene estilo de título (es texto grande a mano)</td></tr>
        <tr><td>Muestra un párrafo entero</td><td>Le aplicaste un estilo de título a un párrafo común</td></tr>
        <tr><td>Tiene números de página viejos</td><td>Falta actualizarlo</td></tr>
      </table>
      <p>Por ejemplo, antes de entregar o mandar el documento, actualizá el índice como último paso: es el error más común dejar un índice con páginas viejas.</p>` },
    { titulo: "Números de página, encabezado y pie", html: `
      <p class="idea">El <strong>encabezado</strong> y el <strong>pie de página</strong> son las zonas de arriba y de abajo de cada página. Lo que ponés ahí se repite en todas las páginas: el número de página, tu nombre, el título del trabajo.</p>
      <ul>
        <li><strong>Google Docs:</strong> Insertar → Encabezados y pies de página; y Insertar → Números de página.</li>
        <li><strong>Word:</strong> Insertar → Encabezado, Pie de página o Número de página.</li>
      </ul>
      <table>
        <tr><th>Documento</th><th>Qué poner</th></tr>
        <tr><td>Trabajo práctico</td><td>Encabezado: materia y tu nombre. Pie: número de página</td></tr>
        <tr><td>Informe</td><td>Encabezado: título corto. Pie: número de página y fecha</td></tr>
        <tr><td>CV de dos páginas</td><td>Pie: tu nombre y "página 1 de 2"</td></tr>
      </table>
      <p><strong>Primera página distinta:</strong> muchas veces la portada no lleva número. Las dos herramientas tienen la opción "Primera página diferente" en las opciones del encabezado o del pie.</p>
      <p><strong>No escribas el número de página a mano:</strong> el campo automático se actualiza solo cuando agregás o sacás páginas.</p>
      <p>Por ejemplo, si imprimís un documento largo y se te caen las hojas, los números de página te salvan. Y si alguien te comenta "en la página 4 hay un error", los dos están mirando lo mismo.</p>` },
  ],
  practica: [
    "Tomá un documento con al menos 3 secciones y aplicá Título 1 y Título 2 a los títulos. Abrí el panel de esquema o de navegación y anotá cuántos títulos aparecen.",
    "Insertá un índice automático, agregá una sección nueva y actualizá el índice. Anotá si apareció la sección nueva con su número de página.",
    "Agregá números de página en el pie, con la primera página sin número. Anotá en qué menú lo encontraste.",
  ],
  recursos: [
    { t: "Google: añadir un título o un índice a un documento", url: "https://support.google.com/docs/answer/116338?hl=es" },
    { t: "Microsoft: insertar una tabla de contenido", url: "https://support.microsoft.com/es-es/office/insertar-una-tabla-de-contenido-882e8564-0edb-435e-84b5-1d8552ccf0c0" },
    { t: "Microsoft: ayuda y aprendizaje de Word", url: "https://support.microsoft.com/es-es/word" },
  ],
  quiz: [
    { q: "Hiciste los títulos agrandando la letra y poniendo negrita a mano. ¿Qué te perdés?", opciones: ["Nada, se ve igual","La ortografía","El índice automático, el panel de navegación y cambiar todos los títulos a la vez","El guardado automático"], correcta: 2, explicacion: "El programa no sabe que es un título si no tiene estilo. Que se ve igual tienta, pero el programa lo trata como texto común." },
    { q: "El profesor te pide todos los títulos en azul. Usaste estilos. ¿Qué hacés?", opciones: ["Cambiás el formato del estilo una vez y cambian todos","Cambiás cada título a mano","Hacés el trabajo de nuevo","No se puede"], correcta: 0, explicacion: "Con estilos, un cambio alcanza. Cambiar cada uno tienta si no sabés lo del estilo, pero es más lento y se escapan algunos." },
    { q: "¿Qué estilo usás para las secciones grandes de un trabajo?", opciones: ["Texto normal en negrita","Título 2","Subtítulo","Título 1"], correcta: 3, explicacion: "Título 1 es el primer nivel de sección. Título 2 tienta, pero es para las partes dentro de cada sección." },
    { q: "¿Por qué los estilos de título ayudan a las personas ciegas?", opciones: ["Porque agrandan la letra","Porque los lectores de pantalla los reconocen para moverse por el documento","Porque cambian el color","No ayudan"], correcta: 1, explicacion: "El lector de pantalla salta de título en título. Agrandar la letra tienta como respuesta, pero una persona ciega no ve la letra." },
    { q: "Querés un índice con números de página. ¿Qué necesitás antes?", opciones: ["Escribir el índice a mano","Poner los números de página a mano","Haber aplicado estilos de título","Nada"], correcta: 2, explicacion: "El índice se arma con los títulos con estilo. Escribirlo a mano tienta, pero no se actualiza." },
    { q: "Agregaste una sección y el índice no la muestra. ¿Qué hacés?", opciones: ["Actualizás el índice","Borrás el índice","Escribís la sección a mano en el índice","Nada, no se puede"], correcta: 0, explicacion: "El índice no cambia solo: hay que actualizarlo. Escribirla a mano tienta, pero se desarma con la próxima actualización." },
    { q: "Un título no aparece en el índice. ¿Qué concluís?", opciones: ["El índice está roto","El título es muy corto","Hay que reiniciar la computadora","Ese título no tiene estilo de título"], correcta: 3, explicacion: "El índice solo toma lo que tiene estilo de título. Pensar que está roto tienta, pero falta aplicar el estilo." },
    { q: "Si en el índice aparece un párrafo entero, ¿qué pasó?", opciones: ["Es normal","Le aplicaste un estilo de título a un párrafo común","El párrafo es importante","El índice copia todo"], correcta: 1, explicacion: "El estilo de título hace que entre al índice. Pensar que es normal tienta, pero ese párrafo tiene que volver a Texto normal." },
    { q: "¿Cuál es el último paso antes de entregar un documento con índice?", opciones: ["Cambiar la letra","Sacar los números de página","Actualizar el índice","Borrar los títulos"], correcta: 2, explicacion: "Así los números de página quedan bien. Olvidarlo tienta porque el índice \"ya estaba\", pero queda con páginas viejas." },
    { q: "Querés tu nombre arriba de todas las páginas de un trabajo. ¿Dónde lo ponés?", opciones: ["En el encabezado","Arriba de cada página a mano","En el índice","En el título"], correcta: 0, explicacion: "El encabezado se repite solo en todas las páginas. Escribirlo a mano tienta, pero se corre cuando editás." },
    { q: "La portada de tu trabajo no tiene que tener número de página. ¿Qué opción usás?", opciones: ["Borrar el número de la portada a mano","Empezar el documento en la página 2","Poner una imagen tapando el número","\"Primera página diferente\""], correcta: 3, explicacion: "Esa opción saca el número solo de la primera página. Tapar con una imagen tienta, pero es un parche que se mueve." },
    { q: "Escribiste los números de página a mano y agregaste una página en el medio. ¿Qué pasa?", opciones: ["Se corrigen solos","Quedan todos mal: conviene el número de página automático","No pasa nada","Se borra el documento"], correcta: 1, explicacion: "Los números escritos a mano son texto fijo. Pensar que se corrigen solos tienta, pero solo el campo automático lo hace." },
  ],
},
{
  id: "tablas",
  icono: "📊",
  titulo: "Tablas e imágenes",
  nivel: "Intermedio",
  objetivos: [
    "Insertar y ajustar tablas para ordenar datos en filas y columnas",
    "Insertar imágenes y ubicarlas sin que desarmen el texto",
    "Agregar texto alternativo a las imágenes para que el documento sea accesible",
  ],
  lecciones: [
    { titulo: "Tablas", html: `
      <p class="idea">Una <strong>tabla</strong> ordena información en filas y columnas. Sirve para comparar, para listas con varios datos (nombre, teléfono, horario) y para alinear cosas sin usar espacios.</p>
      <ul>
        <li><strong>Insertar:</strong> Insertar → Tabla y elegís cuántas filas y columnas.</li>
        <li><strong>Agregar filas o columnas:</strong> clic derecho dentro de la tabla → Insertar fila arriba o abajo, o columna a la izquierda o derecha. En la última celda, Tab agrega una fila nueva.</li>
        <li><strong>Cambiar el ancho:</strong> arrastrá el borde de la columna.</li>
      </ul>
      <pre><code>| Día      | Horario        | Lugar               |
|----------|----------------|---------------------|
| Lunes    | 9 a 12 h       | Biblioteca          |
| Miércoles| 14 a 17 h      | Centro comunitario  |</code></pre>
      <table>
        <tr><th>Para que la tabla se lea bien</th></tr>
        <tr><td>La primera fila con los títulos de las columnas, en negrita</td></tr>
        <tr><td>Pocas columnas: si son más de 5 o 6, quizás conviene una planilla</td></tr>
        <tr><td>Bordes suaves o solo líneas horizontales</td></tr>
        <tr><td>Los números alineados a la derecha, el texto a la izquierda</td></tr>
      </table>
      <p><strong>Tablas para acomodar:</strong> una tabla sin bordes es una buena forma de poner dos cosas lado a lado (por ejemplo, tus datos de contacto en un CV) sin usar espacios. Ojo: para documentos que se leen con lectores de pantalla, las tablas para acomodar pueden confundir, así que usalas con moderación.</p>
      <p>Por ejemplo, si tenés que hacer cuentas con los números de la tabla, conviene una planilla (Excel o Google Sheets) y después pegar el resultado en el documento.</p>` },
    { titulo: "Imágenes que no desarman el texto", html: `
      <p class="idea">Insertar una imagen es fácil; que no desarme todo el texto alrededor es lo que cuesta. La clave es elegir cómo se ubica la imagen respecto del texto.</p>
      <p><strong>Insertar:</strong> Insertar → Imagen, y la elegís de tu computadora, de Drive o de la web.</p>
      <table>
        <tr><th>Opción</th><th>Qué hace</th><th>Cuándo</th></tr>
        <tr><td>En línea con el texto</td><td>La imagen se comporta como una letra grande</td><td>Lo más simple y estable</td></tr>
        <tr><td>Ajustar texto (o cuadrado)</td><td>El texto rodea la imagen</td><td>Una foto chica al costado de un párrafo</td></tr>
        <tr><td>Separar texto (arriba y abajo)</td><td>La imagen ocupa su propio espacio, sin texto a los costados</td><td>Gráficos y fotos grandes</td></tr>
      </table>
      <p><strong>Cuidados:</strong></p>
      <ul>
        <li>Achicala arrastrando una esquina (no un costado) para que no se deforme.</li>
        <li>Agregale un epígrafe abajo que diga qué muestra.</li>
        <li>Respetá los derechos: no uses imágenes de otros sin permiso. Para trabajos y presentaciones, usá fotos propias o de bancos de imágenes libres, y citá la fuente.</li>
        <li>Imágenes muy pesadas hacen lento el documento: si vas a mandarlo, mejor imágenes de tamaño razonable.</li>
      </ul>
      <p>Por ejemplo, si al agregar una línea arriba la imagen salta a otra página, cambiá su ubicación a "en línea con el texto": es la opción que menos se desarma.</p>` },
    { titulo: "Texto alternativo: imágenes para todos", html: `
      <p class="idea">El <strong>texto alternativo</strong> es una descripción corta de la imagen que no se ve en la página, pero que leen los lectores de pantalla que usan las personas ciegas o con baja visión. Sin él, para esas personas la imagen no existe.</p>
      <p>La ayuda de Microsoft para hacer documentos accesibles lo incluye entre los primeros pasos, junto con usar estilos de título y tablas simples.</p>
      <ul>
        <li><strong>Google Docs:</strong> clic derecho en la imagen → Texto alternativo.</li>
        <li><strong>Word:</strong> clic derecho en la imagen → Ver texto alternativo (o Editar texto alternativo).</li>
      </ul>
      <table>
        <tr><th>Texto alternativo flojo</th><th>Texto alternativo útil</th></tr>
        <tr><td>"imagen1.jpg"</td><td>"Gráfico de barras: las ventas de Norte crecieron de enero a junio"</td></tr>
        <tr><td>"foto"</td><td>"Plaza del barrio con juegos nuevos para chicos"</td></tr>
        <tr><td>"logo"</td><td>"Logo de la cooperativa La Esquina"</td></tr>
      </table>
      <p><strong>Cómo escribirlo:</strong> una o dos frases que digan lo importante de la imagen para entender el documento. Si es un gráfico, la conclusión. Si es decorativa y no aporta nada, se puede marcar como decorativa.</p>
      <p><strong>Accesibilidad en general:</strong> estilos de título (módulo 2), contraste suficiente entre la letra y el fondo, tablas simples con fila de títulos, y enlaces con texto que diga adónde llevan ("formulario de inscripción", no "hacé clic acá"). Word tiene un comprobador de accesibilidad que señala los problemas.</p>
      <p>Por ejemplo, si un documento oficial de tu trabajo lo va a leer mucha gente, el texto alternativo y los estilos de título hacen que también lo puedan usar personas con discapacidad visual.</p>` },
  ],
  practica: [
    "Armá una tabla con tus horarios de la semana (día, horario, actividad). Agregale una fila al final con Tab y anotá cuántas filas y columnas tiene.",
    "Insertá una imagen en un documento con texto y probá las tres ubicaciones. Anotá con cuál el texto se desarmó menos al agregar una línea arriba.",
    "Agregale texto alternativo a 2 imágenes de un documento tuyo. Anotá lo que escribiste en cada una.",
  ],
  recursos: [
    { t: "Microsoft: hacer accesibles los documentos de Word", url: "https://support.microsoft.com/es-es/office/crear-un-documento-accesible-de-word-d9bf3683-87ac-47ea-b91a-78dcacb3c66d" },
    { t: "Google: cómo usar Documentos de Google", url: "https://support.google.com/docs/answer/7068618?hl=es" },
    { t: "Microsoft: ayuda y aprendizaje de Word", url: "https://support.microsoft.com/es-es/word" },
  ],
  quiz: [
    { q: "Querés alinear días, horarios y lugares en tu documento. ¿Qué usás?", opciones: ["Espacios entre las palabras","Una imagen","Una tabla","Mayúsculas"], correcta: 2, explicacion: "La tabla mantiene todo alineado. Los espacios tientan, pero se desarman con cualquier cambio." },
    { q: "Estás en la última celda de una tabla y necesitás otra fila. ¿Qué tecla apretás?", opciones: ["Tab","Enter","Ctrl + Z","Esc"], correcta: 0, explicacion: "Tab en la última celda crea una fila nueva. Enter tienta, pero agrega una línea dentro de la misma celda." },
    { q: "Tu tabla tiene 12 columnas y no se lee. ¿Qué conviene?", opciones: ["Achicar la letra a 6","Agregar más columnas","Ponerla en mayúsculas","Pasarla a una planilla o simplificarla a pocas columnas"], correcta: 3, explicacion: "Con muchas columnas, el documento no es el lugar. Achicar la letra tienta para que entre, pero nadie la puede leer." },
    { q: "En una tabla, ¿cómo alineás los números?", opciones: ["Centrados siempre","A la derecha","A la izquierda","Justificados"], correcta: 1, explicacion: "A la derecha se comparan mejor las cifras. A la izquierda tienta porque es como el texto, pero las cifras quedan desalineadas." },
    { q: "Tenés que hacer cuentas con los números de una tabla. ¿Qué conviene?", opciones: ["Hacerlas de memoria y escribir el resultado","Usar la calculadora y no anotar","Hacerlas en una planilla y pegar el resultado","No ponerlas"], correcta: 2, explicacion: "La planilla calcula y se actualiza. Hacerlas de memoria tienta para no abrir otro programa, pero es fácil equivocarse." },
    { q: "Al agregar una línea, la imagen salta a otra página. ¿Qué cambiás?", opciones: ["Su ubicación a \"en línea con el texto\"","Agrandás la imagen","Borrás la línea","Ponés la imagen en otra página a mano cada vez"], correcta: 0, explicacion: "\"En línea\" es la opción más estable. Acomodarla a mano cada vez tienta, pero vuelve a saltar con el próximo cambio." },
    { q: "Achicaste una foto arrastrando un costado y quedó estirada. ¿Qué tenías que hacer?", opciones: ["Arrastrar el otro costado","Recortarla","Cambiar la letra","Arrastrar una esquina para que no se deforme"], correcta: 3, explicacion: "La esquina mantiene la proporción. El otro costado tienta para compensar, pero es difícil que quede igual." },
    { q: "Querés usar una foto que encontraste en internet en un trabajo. ¿Qué tenés en cuenta?", opciones: ["Que se vea bien, nada más","Que sea libre de usar o tengas permiso, y citás la fuente","Que sea grande","Que tenga marca de agua"], correcta: 1, explicacion: "Las imágenes tienen derechos de autor. Que se vea bien tienta como único criterio, pero usarla sin permiso puede ser un problema." },
    { q: "¿Qué es el texto alternativo de una imagen?", opciones: ["El epígrafe que se ve abajo","El nombre del archivo","Una descripción que leen los lectores de pantalla para personas ciegas o con baja visión","Una marca de agua"], correcta: 2, explicacion: "No se ve en la página, pero lo lee el lector de pantalla. El epígrafe tienta porque también describe, pero es visible para todos." },
    { q: "Tu gráfico de barras tiene como texto alternativo \"imagen1.jpg\". ¿Cómo lo mejorás?", opciones: ["Con la conclusión: \"las ventas de Norte crecieron de enero a junio\"","\"gráfico\"","\"imagen\"","Lo dejás así"], correcta: 0, explicacion: "El texto alternativo útil dice lo importante. \"gráfico\" tienta por corto, pero no dice qué muestra." },
    { q: "Una imagen es solo un adorno y no aporta información. ¿Qué hacés con el texto alternativo?", opciones: ["Le ponés una descripción larguísima","Le ponés el nombre del archivo","La borrás siempre","La marcás como decorativa"], correcta: 3, explicacion: "Marcarla decorativa hace que el lector la saltee. Una descripción larga tienta para cumplir, pero hace perder tiempo a quien escucha." },
    { q: "Tu enlace dice \"hacé clic acá\". ¿Cómo lo mejorás para la accesibilidad?", opciones: ["Poniéndolo en mayúsculas","Con un texto que diga adónde lleva, como \"formulario de inscripción\"","Subrayándolo dos veces","Dejándolo así"], correcta: 1, explicacion: "Un lector de pantalla lee la lista de enlaces: \"hacé clic acá\" no dice nada. Ponerlo en mayúsculas tienta para destacarlo, pero no cambia lo que dice." },
  ],
},
{
  id: "colaborar",
  icono: "🤝",
  titulo: "Trabajar con otros: comentarios, sugerencias e historial",
  nivel: "Intermedio",
  objetivos: [
    "Dejar y responder comentarios en un documento compartido",
    "Proponer cambios en modo sugerencia o con control de cambios, y aceptarlos o rechazarlos",
    "Recuperar una versión anterior con el historial de versiones",
  ],
  lecciones: [
    { titulo: "Comentarios", html: `
      <p class="idea">Un <strong>comentario</strong> es una nota al margen sobre una parte del texto, sin cambiar el texto. Es la forma ordenada de opinar, preguntar o pedir algo en un documento que escriben varias personas.</p>
      <ul>
        <li><strong>Agregar:</strong> seleccioná el texto → clic derecho → Comentario (o el ícono de globito). En Google Docs, Ctrl + Alt + M.</li>
        <li><strong>Mencionar a alguien:</strong> en Google Docs, escribí @ y el nombre o mail en el comentario: le llega un aviso. Podés asignarle el comentario como tarea.</li>
        <li><strong>Resolver:</strong> cuando el tema está hecho, marcalo como resuelto. El comentario se oculta, pero queda en el historial.</li>
      </ul>
      <table>
        <tr><th>Comentario poco útil</th><th>Comentario útil</th></tr>
        <tr><td>"Esto está mal"</td><td>"Este dato es de 2022; ¿hay uno más nuevo en la página del INDEC?"</td></tr>
        <tr><td>"No me gusta"</td><td>"Este párrafo repite lo de la introducción: ¿lo sacamos o lo resumimos?"</td></tr>
        <tr><td>"???"</td><td>"No entiendo a qué se refiere 'el sistema' acá: ¿el de turnos o el de stock?"</td></tr>
      </table>
      <p>Un buen comentario dice qué ves, por qué importa y qué proponés. Así la otra persona puede actuar sin tener que preguntarte de nuevo.</p>
      <p>Por ejemplo, en un trabajo práctico en grupo, los comentarios dejan registro de quién pidió qué. Mucho mejor que diez mensajes de WhatsApp que se pierden.</p>` },
    { titulo: "Sugerir cambios", html: `
      <p class="idea">El <strong>modo sugerencia</strong> (Google Docs) o el <strong>control de cambios</strong> (Word) te deja editar el texto de otra persona sin cambiarlo directamente: tus cambios quedan marcados en color y el autor decide si los acepta o los rechaza.</p>
      <ul>
        <li><strong>Google Docs:</strong> arriba a la derecha, el menú de modo (con un lápiz) → Sugerencias.</li>
        <li><strong>Word:</strong> pestaña Revisar → Control de cambios (activalo).</li>
      </ul>
      <pre><code>Texto original:  La reunión es el jueves.
Con sugerencia:  La reunión es el <s>jueves</s> viernes a las 10.
                 (lo tachado y lo nuevo aparecen en color, con tu nombre)</code></pre>
      <table>
        <tr><th>Si sos...</th><th>Hacés</th></tr>
        <tr><td>Quien revisa</td><td>Activás sugerencias y editás normalmente; explicás en un comentario los cambios grandes</td></tr>
        <tr><td>Quien escribió</td><td>Revisás cada sugerencia y la aceptás (✓) o la rechazás (✗)</td></tr>
      </table>
      <p><strong>Antes de mandar la versión final,</strong> aceptá o rechazá todas las sugerencias pendientes. Si mandás un documento de Word con control de cambios sin resolver, la otra persona ve todos los tachados y las correcciones.</p>
      <p>Por ejemplo, para que alguien te revise el CV, compartiselo con permiso de "comentar" o pedile que use sugerencias. Así ves cada cambio y decidís vos, en vez de recibir otro documento distinto.</p>` },
    { titulo: "El historial de versiones", html: `
      <p class="idea">Google Docs y Word en la nube guardan versiones anteriores del documento. Si alguien borró algo importante o te arrepentiste de un cambio de hace días, podés volver atrás.</p>
      <ul>
        <li><strong>Google Docs:</strong> Archivo → Historial de versiones → Ver historial de versiones.</li>
        <li><strong>Word para la web:</strong> Archivo → Información → Historial de versiones.</li>
      </ul>
      <p>En el historial ves las versiones por fecha y hora, y quién hizo cada cambio (con colores). Podés abrir una versión vieja, copiar un pedazo o restaurarla entera.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Alguien borró una sección ayer</td><td>Abrís la versión de antes del borrado y copiás la sección</td></tr>
        <tr><td>Querés volver todo a como estaba el lunes</td><td>Restaurás la versión del lunes (las otras no se pierden)</td></tr>
        <tr><td>Querés marcar un momento importante</td><td>Le ponés nombre a la versión, como "Versión enviada al profesor"</td></tr>
      </table>
      <p>Restaurar una versión vieja no borra las nuevas: siguen en el historial. Por eso no hace falta guardar copias como "final", "final2", "finalfinal".</p>
      <p>Por ejemplo, antes de mandar un documento importante, nombrá esa versión ("Enviada a RR. HH. 10/03"). Si después hacés cambios, siempre sabés exactamente qué mandaste.</p>` },
  ],
  practica: [
    "Compartí un documento con alguien con permiso para comentar y pedile 3 comentarios. Anotá cuántos resolviste y cuántos te sirvieron.",
    "Pedile a alguien que revise un texto tuyo en modo sugerencia. Anotá cuántas sugerencias aceptaste y cuántas rechazaste.",
    "Abrí el historial de versiones de un documento que editaste varias veces y nombrá una versión. Anotá cuántas versiones aparecían.",
  ],
  recursos: [
    { t: "Google: usar comentarios, tareas y reacciones", url: "https://support.google.com/docs/answer/65129?hl=es" },
    { t: "Google: sugerir cambios en Documentos de Google", url: "https://support.google.com/docs/answer/6033474?hl=es" },
    { t: "Microsoft: control de cambios en Word", url: "https://support.microsoft.com/es-es/office/realizar-un-seguimiento-de-los-cambios-en-word-197ba630-0f5f-4a8e-9a77-3712475e806a" },
    { t: "Google: ver los cambios de un archivo (historial)", url: "https://support.google.com/docs/answer/190843?hl=es" },
  ],
  quiz: [
    { q: "Querés opinar sobre un párrafo de tu compañero sin cambiarlo. ¿Qué usás?", opciones: ["Borrás el párrafo y escribís el tuyo","Le mandás un audio","Un comentario","Escribís en mayúsculas al lado"], correcta: 2, explicacion: "El comentario deja tu opinión sin tocar el texto. Borrar y escribir el tuyo tienta por rápido, pero pisa el trabajo del otro." },
    { q: "¿Cuál de estos comentarios es más útil?", opciones: ["\"Este dato es de 2022; ¿hay uno más nuevo en la página del INDEC?\"","\"Esto está mal\"","\"???\"","\"No me gusta\""], correcta: 0, explicacion: "Dice qué ve, por qué y qué propone. \"Esto está mal\" tienta por corto, pero la otra persona no sabe qué arreglar." },
    { q: "Querés que una compañera vea un comentario y le llegue un aviso. ¿Qué hacés en Google Docs?", opciones: ["Escribís su nombre en el texto","Le cambiás el color","Esperás a que lo vea","La mencionás con @ en el comentario"], correcta: 3, explicacion: "La mención con @ le manda un aviso. Escribir su nombre en el texto tienta, pero no le avisa nada." },
    { q: "Ya hiciste lo que pedía un comentario. ¿Qué hacés con él?", opciones: ["Lo dejás abierto para siempre","Lo marcás como resuelto","Lo borrás sin hacer nada","Le respondés \"ok\" y lo dejás"], correcta: 1, explicacion: "Resolverlo deja claro que está hecho. Dejarlo abierto tienta, pero llena el documento de pendientes que ya no lo son." },
    { q: "Vas a corregir el trabajo de otra persona y querés que ella decida qué cambios acepta. ¿Qué activás?", opciones: ["Nada, editás directo","Le hacés una copia y la corregís","El modo sugerencia en Google Docs o el control de cambios en Word","Le mandás los cambios por mail"], correcta: 2, explicacion: "Así cada cambio queda marcado para que lo acepte o rechace. Editar directo tienta por rápido, pero el autor no sabe qué cambiaste." },
    { q: "Recibiste 15 sugerencias en tu documento. ¿Qué hacés con cada una?", opciones: ["La revisás y la aceptás o la rechazás","Las aceptás todas sin leer","Las ignorás","Copiás el documento sin ellas"], correcta: 0, explicacion: "Vos decidís qué cambios entran. Aceptar todo sin leer tienta por rápido, pero puede entrar algo con lo que no estás de acuerdo." },
    { q: "Mandaste un Word con control de cambios sin resolver. ¿Qué ve quien lo recibe?", opciones: ["Solo la versión final","Nada raro","Un documento en blanco","Todos los tachados y las correcciones"], correcta: 3, explicacion: "Las marcas quedan hasta que se aceptan o rechazan. Pensar que ve solo la versión final tienta, pero el control de cambios viaja con el archivo." },
    { q: "Querés que alguien te revise el CV sin que te mande otro documento distinto. ¿Qué hacés?", opciones: ["Le das permiso de editar y que lo cambie como quiera","Se lo compartís con permiso de comentar o le pedís que use sugerencias","Le mandás un PDF y que lo imprima","Le dictás el CV"], correcta: 1, explicacion: "Así ves cada cambio y decidís vos. Darle permiso de edición tienta por simple, pero podés perder de vista qué cambió." },
    { q: "Alguien borró una sección importante ayer. ¿Cómo la recuperás?", opciones: ["La escribís de nuevo de memoria","No se puede recuperar","Con el historial de versiones: abrís la de antes del borrado y la copiás","Con Ctrl + Z hoy"], correcta: 2, explicacion: "El historial guarda las versiones anteriores. Ctrl + Z tienta, pero solo deshace lo que hiciste vos en esta sesión." },
    { q: "Restaurás la versión del lunes. ¿Qué pasa con los cambios de después?", opciones: ["Siguen en el historial: no se pierden","Se borran para siempre","Se mezclan con la del lunes","Se mandan por mail"], correcta: 0, explicacion: "Restaurar crea una versión nueva; las otras quedan. Pensar que se borran tienta, y por miedo mucha gente no usa el historial." },
    { q: "Tenés archivos \"final\", \"final2\" y \"finalfinal\". ¿Qué te evitaría ese lío?", opciones: ["Más copias con fecha","Mandarte cada versión por mail","Imprimir cada versión","Un solo documento con el historial de versiones y nombres para las importantes"], correcta: 3, explicacion: "El historial guarda todo en un solo archivo. Más copias con fecha tienta por ordenado, pero sigue siendo un lío de archivos." },
    { q: "Vas a mandar un documento importante. ¿Qué hacés para saber después qué mandaste?", opciones: ["Nada, te vas a acordar","Nombrás esa versión en el historial, como \"Enviada a RR. HH. 10/03\"","Borrás el historial","Hacés una captura de la primera página"], correcta: 1, explicacion: "Una versión con nombre te muestra exactamente lo enviado. Acordarte tienta, pero después de varios cambios es imposible." },
  ],
},
{
  id: "documentos",
  icono: "📝",
  titulo: "Documentos útiles: CV, carta formal, informe y plantillas",
  nivel: "Intermedio",
  objetivos: [
    "Armar un CV prolijo de una página usando estilos y tablas sin bordes",
    "Escribir una carta formal o una nota de reclamo con sus partes",
    "Usar y crear plantillas para no empezar de cero",
  ],
  lecciones: [
    { titulo: "El CV en un procesador de texto", html: `
      <p class="idea">Un CV prolijo no necesita diseño complicado: una letra, estilos para los títulos, buen uso del espacio y que entre en una o dos páginas. El contenido (qué poner y cómo escribirlo) está en el curso "Buscar trabajo con IA" de este sitio; acá vemos cómo armarlo.</p>
      <table>
        <tr><th>Parte</th><th>Cómo armarla</th></tr>
        <tr><td>Nombre</td><td>Estilo Título, tamaño grande</td></tr>
        <tr><td>Datos de contacto</td><td>Una línea o una tabla sin bordes de dos columnas</td></tr>
        <tr><td>Secciones (Experiencia, Educación...)</td><td>Estilo Título 1</td></tr>
        <tr><td>Cada experiencia</td><td>Puesto en negrita, lugar y fechas en la misma línea; abajo, una lista con viñetas</td></tr>
        <tr><td>Márgenes</td><td>Alrededor de 2 cm, para que respire y entre en una página</td></tr>
      </table>
      <pre><code>ANA GÓMEZ
Lomas de Zamora · 11 5555-5555 · ana.gomez@mail.com

EXPERIENCIA
Vendedora · Feria del barrio · 2023 a 2025
• Atendí unas 30 personas por día y cobré en efectivo y con QR.
• Llevé las ventas en una planilla y saqué el total de cada mes.</code></pre>
      <p><strong>Plantillas de CV:</strong> Google Docs y Word traen modelos de CV (en Google Docs, en la galería de plantillas al crear un documento; en Word, Archivo → Nuevo). Sirven para empezar, pero elegí uno simple: los diseños con muchas columnas, íconos y colores a veces no se leen bien en los sistemas que usan las empresas para filtrar CV.</p>
      <p>Por ejemplo, antes de mandarlo, descargalo en PDF y abrilo: fijate que no se haya corrido nada a una segunda página por una línea suelta.</p>` },
    { titulo: "Carta formal y nota de reclamo", html: `
      <p class="idea">Una carta formal (para un trámite, una empresa, la escuela, el consorcio) tiene partes que se esperan. Respetarlas hace que te tomen en serio y que tu pedido se entienda.</p>
      <pre><code>Lomas de Zamora, 10 de marzo de 2026          ← lugar y fecha

Señores Empresa de Energía                              ← destinatario
Atención al Cliente

Ref.: Reclamo por facturación – cliente N.º [NÚMERO]   ← referencia

De mi consideración:                           ← saludo

Me dirijo a ustedes para reclamar ...         ← motivo (primer párrafo)
El día ... sucedió ...                         ← hechos, con fechas
Por lo expuesto, solicito ...                  ← pedido concreto

Sin otro particular, saludo atentamente.       ← cierre

Ana Gómez                                      ← firma y aclaración
DNI [NÚMERO] · Tel. 11 5555-5555</code></pre>
      <table>
        <tr><th>Parte</th><th>Consejo</th></tr>
        <tr><td>Referencia</td><td>Una línea que diga de qué se trata: ayuda a que llegue a la persona correcta</td></tr>
        <tr><td>Hechos</td><td>Con fechas, números de reclamo y montos, en orden</td></tr>
        <tr><td>Pedido</td><td>Concreto: "solicito la refacturación del período febrero", no "solicito que lo solucionen"</td></tr>
        <tr><td>Adjuntos</td><td>Nombrá lo que adjuntás: "Adjunto copia de la factura y del reclamo N.º ..."</td></tr>
      </table>
      <p>La IA te puede ayudar con el borrador (el curso de prompts de este sitio explica cómo pedirlo bien), pero revisá los datos: fechas, números y nombres los ponés vos.</p>
      <p>Por ejemplo, guardá una copia en PDF de cada carta que mandes, con la fecha en el nombre del archivo: si el reclamo sigue, tenés todo ordenado.</p>` },
    { titulo: "Plantillas", html: `
      <p class="idea">Una <strong>plantilla</strong> es un documento modelo que se copia para no empezar de cero cada vez. Hay plantillas que traen los programas, y podés hacer las tuyas con lo que usás seguido.</p>
      <p><strong>Usar las que vienen:</strong> al crear un documento, Google Docs muestra una galería de plantillas (CV, carta, informe, acta) y Word tiene las suyas en Archivo → Nuevo. Elegí una, reemplazá los textos de ejemplo y borrá lo que no uses.</p>
      <p><strong>Hacer las tuyas:</strong> si escribís seguido el mismo tipo de documento, armá uno bien hecho y usalo de modelo:</p>
      <ol>
        <li>Armá el documento con estilos, encabezado, pie y lo que se repite siempre.</li>
        <li>Reemplazá lo que cambia por marcas entre corchetes: [NOMBRE], [FECHA], [MONTO].</li>
        <li>Guardalo con un nombre como "PLANTILLA - Presupuesto".</li>
        <li>Cada vez que lo uses, hacé una copia (Archivo → Hacer una copia) y completá la copia, no la plantilla.</li>
      </ol>
      <table>
        <tr><th>Plantilla</th><th>Para quién</th></tr>
        <tr><td>Presupuesto con logo, datos y condiciones</td><td>Quien ofrece servicios o vende lo que hace</td></tr>
        <tr><td>Nota de reclamo</td><td>Cualquiera</td></tr>
        <tr><td>Acta de reunión (fecha, presentes, temas, acuerdos)</td><td>Consorcios, cooperadoras, clubes, equipos de trabajo</td></tr>
        <tr><td>Informe mensual</td><td>Quien reporta algo todos los meses</td></tr>
      </table>
      <p>Por ejemplo, el error más común es completar la plantilla misma y perder el modelo. Por eso conviene que el nombre empiece con "PLANTILLA": te avisa que no la edites.</p>` },
  ],
  practica: [
    "Armá tu CV (o uno de ejemplo) con estilos y una tabla sin bordes para los datos de contacto. Descargalo en PDF y anotá si entró en una página.",
    "Escribí una nota de reclamo con todas las partes del modelo (puede ser de ejemplo). Anotá cuántas partes tiene y cuál te costó más.",
    "Armá una plantilla para algo que escribas seguido, con marcas entre corchetes. Hacé una copia y completala. Anotá cuánto tiempo te llevó completarla.",
  ],
  recursos: [
    { t: "Google: cómo usar Documentos de Google", url: "https://support.google.com/docs/answer/7068618?hl=es" },
    { t: "Microsoft: ayuda y aprendizaje de Word", url: "https://support.microsoft.com/es-es/word" },
    { t: "Google: crear, ver o descargar archivos (plantillas y PDF)", url: "https://support.google.com/docs/answer/49114?hl=es" },
  ],
  quiz: [
    { q: "Querés que tu nombre se destaque arriba del CV. ¿Qué estilo usás?", opciones: ["Texto normal en negrita","Título 2","Título, en tamaño grande","Mayúsculas en rojo"], correcta: 2, explicacion: "El estilo Título es para el nombre principal. Mayúsculas en rojo tientan para llamar la atención, pero se ve poco profesional." },
    { q: "Querés poner tus datos de contacto en dos columnas sin usar espacios. ¿Qué usás?", opciones: ["Una tabla sin bordes","Muchos espacios","Una imagen con los datos","Dos documentos"], correcta: 0, explicacion: "La tabla sin bordes mantiene todo alineado. Una imagen tienta porque queda fija, pero los sistemas de filtrado no la leen." },
    { q: "Encontraste una plantilla de CV con tres columnas, íconos y muchos colores. ¿Qué tenés en cuenta?", opciones: ["Que cuanto más diseño, mejor","Que los colores son obligatorios","Que los íconos reemplazan las palabras","Que los diseños complicados a veces no se leen bien en los sistemas que filtran CV"], correcta: 3, explicacion: "Un diseño simple se lee bien en todos lados. Más diseño tienta para destacarte, pero puede hacer que el sistema no lea tu experiencia." },
    { q: "Antes de mandar el CV en PDF, ¿qué revisás?", opciones: ["Que tenga muchos colores","Que no se haya corrido nada a una segunda página por una línea suelta","Que pese mucho","Nada, ya está"], correcta: 1, explicacion: "El PDF puede cortar distinto que la pantalla. No revisar tienta porque en el documento se veía bien, pero una línea suelta en otra página queda mal." },
    { q: "En una carta formal, ¿para qué sirve la línea de referencia?", opciones: ["Para poner tu firma","Para saludar","Para decir de qué se trata y que llegue a la persona correcta","Para la fecha"], correcta: 2, explicacion: "La referencia resume el tema en una línea. La fecha tienta porque también va arriba, pero va en otra línea." },
    { q: "Tu pedido dice \"solicito que lo solucionen\". ¿Cómo lo mejorás?", opciones: ["Con un pedido concreto: \"solicito la refacturación del período febrero\"","Con más signos de exclamación","Con \"urgente\" en mayúsculas","Dejándolo así"], correcta: 0, explicacion: "Un pedido concreto dice qué tiene que pasar. \"Urgente\" en mayúsculas tienta para presionar, pero no aclara qué querés." },
    { q: "Le pediste a la IA el borrador de un reclamo. ¿Qué revisás vos?", opciones: ["Nada, la IA no se equivoca","Solo la letra","Solo el saludo","Las fechas, los números de cliente y los nombres"], correcta: 3, explicacion: "La IA puede inventar o confundir datos. Confiar sin revisar tienta por rápido, pero un número mal hace que el reclamo no avance." },
    { q: "Mandaste una carta de reclamo. ¿Qué guardás?", opciones: ["Nada","Una copia en PDF con la fecha en el nombre del archivo","Solo la respuesta, si llega","Una foto de la pantalla"], correcta: 1, explicacion: "La copia te sirve si el reclamo sigue. Guardar solo la respuesta tienta, pero si no llega, no tenés prueba de lo que mandaste." },
    { q: "Escribís un presupuesto todas las semanas. ¿Qué te ahorra tiempo?", opciones: ["Escribirlo de cero cada vez","Copiar el de otra persona","Una plantilla con marcas entre corchetes para lo que cambia","Mandarlo por audio"], correcta: 2, explicacion: "La plantilla deja fijo lo que se repite. Escribirlo de cero tienta para que quede \"nuevo\", pero es trabajo repetido." },
    { q: "Vas a usar tu plantilla. ¿Qué hacés primero?", opciones: ["Una copia, y completás la copia","Completás la plantilla directamente","La borrás","La imprimís"], correcta: 0, explicacion: "Si completás la plantilla, perdés el modelo. Completarla directo tienta por rápido, pero la próxima vez no la tenés." },
    { q: "¿Por qué conviene que el nombre de una plantilla empiece con \"PLANTILLA\"?", opciones: ["Porque es obligatorio","Para que se vea primero en la lista de compras","No sirve para nada","Para recordarte que no la edites y que hagas una copia"], correcta: 3, explicacion: "El nombre funciona como aviso. Que es obligatorio tienta pensarlo, pero es solo una costumbre útil." },
    { q: "En tu cooperadora escriben actas de cada reunión. ¿Qué plantilla les sirve?", opciones: ["Una de CV","Una con fecha, presentes, temas y acuerdos","Una carta de reclamo","Ninguna, cada acta distinta"], correcta: 1, explicacion: "Las actas repiten siempre las mismas partes. Cada acta distinta tienta por libertad, pero después cuesta encontrar los acuerdos." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Proyecto final: un documento profesional",
  nivel: "Avanzado",
  objetivos: [
    "Producir un documento de varias páginas con estilos, índice, tablas, imágenes accesibles y números de página",
    "Revisarlo con otra persona usando comentarios y sugerencias",
    "Evaluarlo con una rúbrica y entregarlo en PDF",
  ],
  lecciones: [
    { titulo: "El proyecto", html: `
      <p class="idea">El proyecto final es un documento de 3 a 6 páginas que junte todo el curso. Elegí un tema que te sirva: un informe para tu trabajo o tu barrio, un trabajo práctico, un manual de instrucciones o una propuesta.</p>
      <table>
        <tr><th>Idea</th><th>Para quién</th></tr>
        <tr><td>Manual de cómo hacer un trámite paso a paso</td><td>Tu familia, tu barrio o tu trabajo</td></tr>
        <tr><td>Informe de un problema del barrio con una propuesta</td><td>La junta vecinal o el municipio</td></tr>
        <tr><td>Propuesta de un emprendimiento</td><td>Un posible socio o un programa de apoyo</td></tr>
        <tr><td>Trabajo práctico de una materia</td><td>La escuela o un curso</td></tr>
      </table>
      <p><strong>Lo que tiene que tener:</strong></p>
      <ol>
        <li>Portada sin número de página (módulo 2).</li>
        <li>Índice automático actualizado (módulo 2).</li>
        <li>Al menos 3 secciones con estilos Título 1 y Título 2 (módulo 2).</li>
        <li>Una lista numerada o con viñetas hecha con el botón (módulo 1).</li>
        <li>Una tabla con fila de títulos (módulo 3).</li>
        <li>Una imagen con texto alternativo y epígrafe (módulo 3).</li>
        <li>Números de página en el pie (módulo 2).</li>
        <li>Formato legible: una letra, tamaño 11 o 12, interlineado cómodo (módulo 1).</li>
      </ol>
      <p>Por ejemplo, un manual de "cómo sacar turno en el hospital" tiene naturalmente pasos (lista numerada), requisitos (tabla) y capturas de pantalla (imágenes con texto alternativo).</p>` },
    { titulo: "Revisar con otra persona", html: `
      <p class="idea">Un documento mejora mucho cuando lo lee otra persona. Usá lo del módulo 4: compartilo con permiso de comentar o pedí que use sugerencias, y decidí vos qué cambios aceptás.</p>
      <p><strong>Pedile a quien revise que mire estas preguntas:</strong></p>
      <table>
        <tr><th>Pregunta</th><th>Por qué</th></tr>
        <tr><td>¿Se entiende de qué trata en la primera página?</td><td>Quien lee decide en segundos si sigue</td></tr>
        <tr><td>¿Hay algo que no se entiende o falta?</td><td>Vos conocés el tema; quien lee, no</td></tr>
        <tr><td>¿Encontraste errores de ortografía o datos raros?</td><td>Otros ojos ven lo que vos no</td></tr>
        <tr><td>¿Se ve prolijo impreso o en PDF?</td><td>El formato cambia entre la pantalla y el papel</td></tr>
      </table>
      <p><strong>Después de la revisión:</strong></p>
      <ol>
        <li>Respondé o resolvé cada comentario.</li>
        <li>Aceptá o rechazá cada sugerencia.</li>
        <li>Actualizá el índice.</li>
        <li>Nombrá la versión final en el historial (módulo 4).</li>
        <li>Descargá en PDF y revisá el PDF entero.</li>
      </ol>
      <p>Por ejemplo, si nadie puede revisarlo, leelo en voz alta vos, al día siguiente: se notan frases largas, repeticiones y errores que al escribir no se vieron.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si el documento está listo. Puntuá cada criterio de 0 a 2.</p>
      <table>
        <tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Estructura</td><td>Sin estilos de título</td><td>Estilos, pero índice desactualizado</td><td>Estilos, índice actualizado y portada sin número</td></tr>
        <tr><td>Formato</td><td>Varias letras, todo apretado</td><td>Legible con algún detalle</td><td>Una letra, buen interlineado, sin espacios ni Enter para acomodar</td></tr>
        <tr><td>Elementos</td><td>Faltan tabla, lista o imagen</td><td>Están, con algún problema</td><td>Tabla con títulos, lista automática e imagen con epígrafe</td></tr>
        <tr><td>Accesibilidad</td><td>Imágenes sin texto alternativo</td><td>Algunas con texto alternativo</td><td>Todas con texto alternativo útil y enlaces que dicen adónde llevan</td></tr>
        <tr><td>Revisión y entrega</td><td>Sin revisión</td><td>Revisado, con sugerencias pendientes</td><td>Revisado, todo resuelto, versión nombrada y PDF revisado</td></tr>
      </table>
      <p>El máximo es 10. El documento está listo con <strong>8 o más</strong> y sin ningún 0.</p>
      <p><strong>Para tu portafolio:</strong> un documento profesional bien hecho es una muestra de lo que sabés hacer. En el CV podés poner algo concreto: "Redacción de documentos con estilos, índices, tablas y control de cambios en Word y Google Docs". Y si te lo piden en una entrevista, tenés el PDF para mostrar.</p>
      <p>Por ejemplo, pedile a otra persona que puntúe tu documento con la misma rúbrica. Si su puntaje es distinto del tuyo, revisen juntos el criterio en el que no coinciden.</p>` },
  ],
  practica: [
    "Elegí el tema y armá el documento con los 8 elementos de la primera lección. Anotá cuántas páginas quedó y cuáles elementos te costaron más.",
    "Compartilo con alguien para que lo revise con comentarios o sugerencias. Anotá cuántos comentarios y sugerencias recibiste y cuántos aceptaste.",
    "Puntuá tu documento con la rúbrica. Anotá el puntaje de cada criterio y mejorá hasta llegar a 8 o más, sin ningún 0.",
  ],
  recursos: [
    { t: "Google: cómo usar Documentos de Google", url: "https://support.google.com/docs/answer/7068618?hl=es" },
    { t: "Microsoft: ayuda y aprendizaje de Word", url: "https://support.microsoft.com/es-es/word" },
    { t: "Microsoft: hacer accesibles los documentos de Word", url: "https://support.microsoft.com/es-es/office/crear-un-documento-accesible-de-word-d9bf3683-87ac-47ea-b91a-78dcacb3c66d" },
  ],
  quiz: [
    { q: "Elegís un tema para el proyecto. ¿Cuál conviene?", opciones: ["Uno inventado sin uso","Uno de una sola página","Uno que te sirva de verdad, como un manual de un trámite para tu familia","Copiar un documento de internet"], correcta: 2, explicacion: "Un documento útil te motiva y te sirve después. Copiar uno de internet tienta por rápido, pero no practicás nada." },
    { q: "Tu proyecto tiene la portada numerada. ¿Qué te faltó?", opciones: ["La opción \"Primera página diferente\" en el pie","Borrar la portada","Poner la portada al final","Nada, está bien"], correcta: 0, explicacion: "La portada no lleva número. Borrarla tienta para resolverlo rápido, pero el proyecto la pide." },
    { q: "Tu lista de pasos tiene los números escritos a mano. ¿Qué criterio afecta?", opciones: ["Accesibilidad","Revisión","Ninguno","Elementos: la lista tiene que ser automática"], correcta: 3, explicacion: "La rúbrica pide lista automática. Pensar que no afecta tienta porque se ve igual, pero no se renumera sola." },
    { q: "Vas a pedir que alguien revise tu documento. ¿Qué permiso le das?", opciones: ["Ser propietario","Comentar, o le pedís que use sugerencias","Ninguno, le mandás una foto","Editar sin sugerencias"], correcta: 1, explicacion: "Así ves cada cambio y decidís. Editar sin sugerencias tienta por simple, pero no sabés qué cambió." },
    { q: "Quien revisa tu documento te pregunta \"¿de qué trata esto?\" después de leer la primera página. ¿Qué concluís?", opciones: ["Que no leyó bien","Que está perfecto","Que la primera página no deja claro el tema y hay que mejorarla","Que hay que agregar más páginas"], correcta: 2, explicacion: "Quien lee decide en segundos. Pensar que no leyó bien tienta, pero si a esa persona le pasó, le va a pasar a otras." },
    { q: "Nadie puede revisar tu documento. ¿Qué hacés?", opciones: ["Lo leés en voz alta al día siguiente","Lo entregás sin leer","Le pedís a la IA que diga que está bien","Lo leés rápido en silencio enseguida"], correcta: 0, explicacion: "En voz alta y con otro día se notan errores. Leerlo rápido enseguida tienta, pero leés lo que pensabas escribir, no lo que escribiste." },
    { q: "Terminaste la revisión. ¿Qué hacés antes de descargar el PDF?", opciones: ["Nada, descargás directo","Borrás el historial","Cambiás la letra","Resolvés comentarios y sugerencias, actualizás el índice y nombrás la versión"], correcta: 3, explicacion: "Así el PDF sale limpio y con el índice correcto. Descargar directo tienta por apuro, pero quedan sugerencias o páginas viejas en el índice." },
    { q: "Tus imágenes no tienen texto alternativo. ¿Cuánto sacás en Accesibilidad?", opciones: ["2","0","1","Depende del tamaño"], correcta: 1, explicacion: "Sin texto alternativo, la rúbrica da 0. 1 tienta como término medio, pero corresponde a algunas imágenes con texto." },
    { q: "Tu documento suma 8, pero tiene un 0 en Estructura. ¿Está listo?", opciones: ["Sí, llegó a 8","Sí, la estructura no importa","No: tiene que tener 8 o más y ningún 0","No, tiene que sacar 10"], correcta: 2, explicacion: "Sin estilos de título no hay índice ni navegación. Llegar a 8 tienta como aprobado, pero falta la base del documento." },
    { q: "Querés poner en tu CV que sabés usar procesadores de texto. ¿Qué frase muestra más?", opciones: ["\"Redacción de documentos con estilos, índices, tablas y control de cambios en Word y Google Docs\"","\"Manejo de Word\"","\"Sé usar la computadora\"","\"Word avanzado\""], correcta: 0, explicacion: "Lo concreto se puede comprobar. \"Word avanzado\" tienta porque suena más, pero no dice qué sabés hacer." },
    { q: "Otra persona le puso 6 a tu documento y vos le pusiste 9. ¿Qué hacés?", opciones: ["Te quedás con tu 9","Promediás","No le pedís más opinión","Revisan juntos el criterio en el que no coinciden"], correcta: 3, explicacion: "La diferencia muestra dónde mirar. Promediar tienta por justo, pero perdés la razón del desacuerdo." },
    { q: "Querés mostrar tu documento en una entrevista. ¿En qué formato lo llevás?", opciones: ["El enlace de edición","En PDF, revisado","Una foto del monitor","El archivo sin descargar"], correcta: 1, explicacion: "El PDF se ve igual en cualquier lado. El enlace de edición tienta por rápido, pero puede pedir permisos o dejar que lo cambien." },
  ],
},
];
