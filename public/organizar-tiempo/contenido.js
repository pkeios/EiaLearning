// Temario del curso "Organizar el tiempo y las tareas". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js organizar-tiempo y node tools/metodologia.js organizar-tiempo
window.TEMARIO = [
{
  id: "empezar",
  icono: "⏱️",
  titulo: "Empezar: a dónde se va tu tiempo",
  nivel: "Básico",
  objetivos: [
    "Registrar en qué usás tu tiempo durante 3 días y encontrar dónde se escapa",
    "Reconocer tus momentos de más y menos energía en el día",
    "Poner expectativas realistas: organizarse no es hacer todo",
  ],
  lecciones: [
    { titulo: "Medir antes de cambiar", video: {"id":"4Dss-mavZHc","t":"Cómo gestionar el tiempo · Innovación Educativa UPC (2:13)"}, html: `
      <p class="idea">Antes de organizarte, mirá en qué se te va el tiempo de verdad. Casi todos creemos saberlo, y casi todos nos sorprendemos al anotarlo.</p>
      <p>Un <strong>registro de tiempo</strong> es anotar, durante unos días, qué hiciste en cada bloque de media hora o una hora.</p>
      <pre><code>Martes
08:00–08:30  Desayuno y viaje
08:30–09:30  Mails y mensajes del trabajo
09:30–10:00  Redes sociales ("un ratito")
10:00–11:00  Informe (con 4 interrupciones)
11:00–11:30  Charla con un compañero
...</code></pre>
      <p><strong>Después de 3 días, sumá por tipo:</strong></p>
      <table>
        <tr><th>Tipo</th><th>Horas en 3 días</th></tr>
        <tr><td>Trabajo o estudio con foco</td><td>7</td></tr>
        <tr><td>Mensajes y mails</td><td>5</td></tr>
        <tr><td>Redes sociales y videos</td><td>6</td></tr>
        <tr><td>Viajes y esperas</td><td>4</td></tr>
      </table>
      <p>Anotalo sin juzgarte: el objetivo es ver, no sentir culpa.</p>
      <p>Por ejemplo, descubrir que las redes sociales suman 2 horas por día no significa dejarlas: significa que ahí hay tiempo para decidir qué hacer con él.</p>` },
    { titulo: "Tu energía en el día", html: `
      <p class="idea">No todas las horas valen lo mismo. Hay momentos en que te concentrás fácil y otros en que te cuesta todo. Poner las tareas difíciles en tus horas de más energía rinde mucho más.</p>
      <table>
        <tr><th>Momento</th><th>Energía (ejemplo)</th><th>Qué hacer</th></tr>
        <tr><td>Mañana temprano</td><td>Alta</td><td>Lo que exige pensar: estudiar, escribir, resolver</td></tr>
        <tr><td>Después de comer</td><td>Baja</td><td>Tareas simples: ordenar, responder mensajes</td></tr>
        <tr><td>Media tarde</td><td>Media</td><td>Reuniones, llamadas, trámites</td></tr>
        <tr><td>Noche</td><td>Baja</td><td>Preparar el día siguiente, descansar</td></tr>
      </table>
      <p>Cada persona es distinta: hay quienes rinden más de noche. Con el registro de tiempo, anotá también tu energía del 1 al 5 en cada bloque.</p>
      <p><strong>La energía también depende de</strong> dormir bien, comer y moverte. Organizar el tiempo sin cuidar eso es como querer andar rápido con el tanque vacío.</p>
      <p>Por ejemplo, si estudiás de noche cansado y te lleva 2 horas lo que a la mañana harías en 1, el problema no es la disciplina, es el horario.</p>` },
    { titulo: "Expectativas realistas", html: `
      <p class="idea">Organizarte no es hacer todo: es elegir qué hacer con un tiempo que es limitado. Un buen sistema te ayuda a decidir, no a meter más cosas en el día.</p>
      <table>
        <tr><th>Mito</th><th>Realidad</th></tr>
        <tr><td>"Si me organizo, me va a alcanzar el tiempo para todo"</td><td>Siempre va a haber más cosas que tiempo; organizarte es elegir</td></tr>
        <tr><td>"Las personas organizadas no procrastinan"</td><td>Todos lo hacemos; la diferencia es tener herramientas para retomar</td></tr>
        <tr><td>"Necesito la app perfecta"</td><td>Un papel y una lapicera alcanzan si los usás todos los días</td></tr>
        <tr><td>"Tengo que cambiar todo de una vez"</td><td>Un cambio chico sostenido vale más que cinco que dejás en una semana</td></tr>
      </table>
      <p><strong>Las cosas que no controlás:</strong> chicos que se enferman, un colectivo que no pasa, un jefe que cambia la prioridad. Un plan realista deja lugar para eso.</p>
      <p>Por ejemplo, planificar 8 horas de tareas en un día con 8 horas disponibles garantiza que no llegues: cualquier imprevisto te desarma.</p>` },
  ],
  practica: [
    "Hacé un registro de tiempo de 3 días en bloques de media hora o una hora. Sumá las horas por tipo y anotá los 3 tipos que más tiempo ocupan.",
    "Durante esos días, anotá también tu energía del 1 al 5 en cada bloque. Anotá cuáles son tus 2 horas de más energía.",
    "Elegí un solo cambio chico a partir de lo que viste (por ejemplo, mover una tarea difícil a tu hora de más energía). Anotá el cambio y probalo una semana.",
  ],
  recursos: [
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
    { t: "Google Tasks: información y uso", url: "https://support.google.com/tasks/answer/7675772?hl=es" },
  ],
  quiz: [
    { q: "Querés organizarte mejor. ¿Qué hacés primero?", opciones: ["Bajás la app más famosa","Te levantás 2 horas antes desde mañana","Un registro de tiempo de unos días para ver en qué se te va","Hacés una lista de todo lo que querés cambiar"], correcta: 2, explicacion: "Medir muestra dónde está el problema. La app tienta porque es el paso más visible, pero no sabés todavía qué necesitás." },
    { q: "¿Qué es un registro de tiempo?", opciones: ["Anotar durante unos días qué hiciste en cada bloque de tiempo","Un reloj especial","Una lista de tareas pendientes","Un horario ideal"], correcta: 0, explicacion: "Es anotar lo que pasó, no lo que planeás. El horario ideal tienta, pero es lo contrario: describe lo que querrías." },
    { q: "Tu registro muestra que las redes suman 2 horas por día. ¿Qué concluís?", opciones: ["Que tenés que borrar todas las redes ya","Que no tenés arreglo","Que el registro está mal","Que ahí hay tiempo para decidir qué hacer con él, sin culpa"], correcta: 3, explicacion: "El registro es para ver, no para castigarte. Borrar todo tienta como solución rápida, pero los cambios bruscos casi nunca se sostienen." },
    { q: "Si tu energía es más alta a la mañana temprano, ¿qué conviene hacer en ese momento?", opciones: ["Responder mensajes","Lo que exige pensar: estudiar, escribir, resolver","Mirar redes","Ordenar el escritorio"], correcta: 1, explicacion: "Las horas de energía alta rinden más en lo difícil. Responder mensajes tienta porque es lo primero que aparece, pero gasta tu mejor momento en lo simple." },
    { q: "Después de comer te cuesta concentrarte. ¿Qué tareas ponés ahí?", opciones: ["El examen más difícil","El informe más importante","Tareas simples: ordenar, responder mensajes","Nada, dormís siesta siempre"], correcta: 2, explicacion: "En energía baja, lo simple. El informe importante tienta para sacártelo de encima, pero te va a llevar el doble." },
    { q: "Estudiás de noche cansado y tardás el doble. ¿Qué concluís?", opciones: ["Que el problema puede ser el horario, no la disciplina","Que sos vago","Que tenés que estudiar más horas","Que el tema es imposible"], correcta: 0, explicacion: "La energía cambia el rendimiento. Culparte tienta, pero mover el horario puede resolverlo." },
    { q: "¿De qué depende también tu energía?", opciones: ["Solo de la fuerza de voluntad","De la app que uses","De nada, es fija","De dormir bien, comer y moverte"], correcta: 3, explicacion: "El cuerpo pone la base. La fuerza de voluntad tienta como explicación, pero sin descanso no alcanza." },
    { q: "¿Qué es organizarse, según la lección?", opciones: ["Hacer todo lo que hay que hacer","Elegir qué hacer con un tiempo limitado","Trabajar más horas","Tener la app perfecta"], correcta: 1, explicacion: "Siempre hay más cosas que tiempo. Hacer todo tienta como meta, pero es imposible y frustra." },
    { q: "Querés empezar a organizarte. ¿Qué necesitás sí o sí?", opciones: ["Una app paga","Una agenda cara","Algo que uses todos los días, aunque sea papel y lapicera","Un curso de 6 meses"], correcta: 2, explicacion: "La herramienta importa menos que el hábito. La app paga tienta por completa, pero si no la abrís no sirve." },
    { q: "Querés cambiar 5 hábitos de golpe desde el lunes. ¿Qué suele pasar?", opciones: ["Que los dejás en una semana: mejor uno chico y sostenido","Que funciona si tenés ganas","Que te organizás para siempre","Que ganás tiempo enseguida"], correcta: 0, explicacion: "Un cambio chico sostenido rinde más. Las ganas del lunes tientan, pero se gastan rápido." },
    { q: "Planificaste 8 horas de tareas en un día de 8 horas libres. ¿Qué va a pasar?", opciones: ["Que terminás justo","Que te sobra tiempo","Que es un buen plan","Que cualquier imprevisto te desarma y no llegás"], correcta: 3, explicacion: "Un plan sin margen no aguanta imprevistos. Terminar justo tienta como cuenta, pero siempre pasa algo." },
    { q: "Si te organizás muy bien, ¿dejás de procrastinar para siempre?", opciones: ["Sí, se termina","No: todos procrastinamos; la diferencia es tener herramientas para retomar","Sí, si usás la app correcta","No, organizarse no sirve"], correcta: 1, explicacion: "Procrastinar es humano. Que se termina tienta como promesa, pero lo que cambia es cuánto tardás en volver." },
  ],
},
{
  id: "capturar",
  icono: "📝",
  titulo: "Sacar todo de la cabeza",
  nivel: "Básico",
  objetivos: [
    "Anotar todas las tareas y pendientes en una lista única",
    "Convertir cada pendiente en una próxima acción concreta",
    "Revisar la lista todos los días y una vez por semana",
  ],
  lecciones: [
    { titulo: "Una lista única", html: `
      <p class="idea">La cabeza es buena para pensar, no para acordarse de 40 cosas. Anotá todo lo pendiente en <strong>un solo lugar</strong> que revises todos los días.</p>
      <p>A esto se le llama <strong>capturar</strong>: apenas aparece algo que hay que hacer, lo anotás, sin decidir todavía cuándo.</p>
      <table>
        <tr><th>Disperso (se pierde)</th><th>Lista única</th></tr>
        <tr><td>Un papelito en la heladera</td><td rowspan="4">Todo en un mismo cuaderno o app</td></tr>
        <tr><td>Un mensaje que te mandaste a vos mismo</td></tr>
        <tr><td>"Me acuerdo"</td></tr>
        <tr><td>Una nota del celular de hace un mes</td></tr>
      </table>
      <p><strong>Herramientas que sirven:</strong> un cuaderno chico, Google Tasks o Microsoft To Do (gratis, en el celular y la computadora). Elegí una y usá solo esa.</p>
      <p><strong>Primera vez:</strong> sentate 20 minutos y anotá todo lo que tengas pendiente: trabajo, casa, trámites, estudio, llamadas. Va a ser una lista larga, y está bien.</p>
      <p>Por ejemplo, anotar "renovar el DNI" apenas te acordás en el colectivo evita que vuelva a aparecer en tu cabeza a las 2 de la mañana.</p>` },
    { titulo: "La próxima acción", html: `
      <p class="idea">"Arreglar lo del auto" no es una tarea: es un proyecto con varios pasos. Para cada pendiente, escribí la <strong>próxima acción</strong>: lo primero, concreto y visible, que podés hacer.</p>
      <table>
        <tr><th>Pendiente vago</th><th>Próxima acción</th></tr>
        <tr><td>Lo del auto</td><td>Llamar al taller de Carlos para pedir turno</td></tr>
        <tr><td>Estudiar para el parcial</td><td>Hacer el resumen del capítulo 3</td></tr>
        <tr><td>Cumpleaños de mamá</td><td>Mandarle un mensaje a mi hermana para ver qué le regalamos</td></tr>
        <tr><td>Buscar trabajo</td><td>Actualizar el CV con el último trabajo</td></tr>
      </table>
      <p><strong>Empezá con un verbo:</strong> llamar, escribir, comprar, buscar, mandar. Si no empieza con un verbo, probablemente es vaga.</p>
      <p><strong>¿Por qué funciona?</strong> Una tarea vaga da pereza porque el cerebro no sabe por dónde empezar. Una acción concreta se ve hacible.</p>
      <p>Este método viene de <strong>GTD</strong> (Getting Things Done, de David Allen), uno de los sistemas de organización más usados.</p>
      <p>Por ejemplo, "Estudiar" puede quedarse días en la lista; "Leer las páginas 40 a 55" se hace en una tarde.</p>` },
    { titulo: "Revisar la lista", html: `
      <p class="idea">Una lista que no se revisa se vuelve una lista de culpa. Mirala todos los días para elegir qué hacer, y una vez por semana para limpiarla.</p>
      <table>
        <tr><th>Revisión</th><th>Cuándo</th><th>Qué hacés</th></tr>
        <tr><td>Diaria</td><td>5 minutos a la mañana o la noche anterior</td><td>Elegís las tareas del día</td></tr>
        <tr><td>Semanal</td><td>30 minutos, por ejemplo el domingo o el viernes</td><td>Limpiás, actualizás y planificás la semana</td></tr>
      </table>
      <p><strong>En la revisión semanal:</strong></p>
      <ol>
        <li>Juntá todo lo suelto (papelitos, notas, mensajes) y pasalo a la lista.</li>
        <li>Tachá lo hecho y borrá lo que ya no hace falta.</li>
        <li>Revisá que cada pendiente tenga una próxima acción.</li>
        <li>Mirá el calendario de la semana que viene.</li>
      </ol>
      <p><strong>Si algo lleva semanas en la lista sin moverse,</strong> preguntate: ¿de verdad lo voy a hacer? Si no, borralo o pasalo a una lista de "algún día".</p>
      <p>Por ejemplo, una revisión de 30 minutos el domingo hace que el lunes arranques sabiendo qué hacer, en vez de pasarte la mañana pensando por dónde empezar.</p>` },
  ],
  practica: [
    "Sentate 20 minutos y anotá todo lo que tengas pendiente en una lista única. Contá cuántos pendientes salieron.",
    "Reescribí 10 pendientes de tu lista como próximas acciones que empiecen con un verbo. Anotá las 10.",
    "Hacé una revisión semanal con los 4 pasos de la lección. Anotá cuántas tareas tachaste, cuántas borraste y cuántas agregaste.",
  ],
  recursos: [
    { t: "Google Tasks: información y uso", url: "https://support.google.com/tasks/answer/7675772?hl=es" },
    { t: "Microsoft To Do: ayuda y aprendizaje", url: "https://support.microsoft.com/es-es/todo" },
    { t: "Getting Things Done: qué es el método (en inglés)", url: "https://gettingthingsdone.com/what-is-gtd/" },
  ],
  quiz: [
    { q: "Tenés pendientes en papelitos, notas del celular y en la cabeza. ¿Qué hacés?", opciones: ["Los dejás donde están","Comprás más papelitos","Los pasás todos a una lista única que revises todos los días","Confiás en la memoria"], correcta: 2, explicacion: "Un solo lugar evita que algo se pierda. Dejarlos donde están tienta porque ya están anotados, pero no los vas a ver juntos." },
    { q: "¿Qué es capturar?", opciones: ["Anotar algo pendiente apenas aparece, sin decidir todavía cuándo","Hacerlo en el momento","Delegarlo","Sacarle una foto"], correcta: 0, explicacion: "Capturar es anotar para no olvidar. Hacerlo en el momento tienta, pero interrumpe lo que estabas haciendo." },
    { q: "Querés empezar con una herramienta. ¿Qué conviene?", opciones: ["Usar tres apps a la vez","Esperar a encontrar la perfecta","Ninguna, todo en la cabeza","Elegir una (cuaderno, Google Tasks o To Do) y usar solo esa"], correcta: 3, explicacion: "Una sola herramienta es una lista única. Tres apps tientan para tener opciones, pero volvés a dispersar." },
    { q: "Hiciste tu primera lista y salieron 60 pendientes. ¿Qué pensás?", opciones: ["Que estás perdido","Que es normal la primera vez: ahora están afuera de tu cabeza","Que tenés que hacerlos todos hoy","Que la lista está mal"], correcta: 1, explicacion: "La primera lista siempre es larga. Pensar que tenés que hacer todo hoy tienta, pero la lista es para elegir, no para cumplir de golpe." },
    { q: "Tu lista dice \"Lo del auto\". ¿Cómo lo cambiás?", opciones: ["\"Auto URGENTE\"","\"Arreglar todo lo del auto\"","\"Llamar al taller de Carlos para pedir turno\"","Lo dejás así"], correcta: 2, explicacion: "La próxima acción es concreta y empieza con un verbo. \"URGENTE\" tienta para darle peso, pero sigue sin decir qué hacer." },
    { q: "Si una tarea de tu lista no empieza con un verbo, ¿qué suele pasar?", opciones: ["Que es vaga y cuesta empezarla","Que es más importante","Que está mal escrita, pero da igual","Nada"], correcta: 0, explicacion: "El verbo dice qué hacer. Que da igual tienta, pero las tareas vagas se quedan semanas en la lista." },
    { q: "¿Por qué una tarea vaga da pereza?", opciones: ["Porque sos vago","Porque es muy fácil","Porque está mal anotada en el papel","Porque el cerebro no sabe por dónde empezar"], correcta: 3, explicacion: "Lo concreto se ve hacible. Culparte tienta, pero el problema es cómo está escrita." },
    { q: "Tu tarea es \"Estudiar\". ¿Cuál es una mejor próxima acción?", opciones: ["\"Estudiar mucho\"","\"Leer las páginas 40 a 55\"","\"Estudiar todo\"","\"Ponerme las pilas\""], correcta: 1, explicacion: "Las páginas exactas se pueden hacer en una tarde. \"Estudiar mucho\" tienta como compromiso, pero no dice qué hacer." },
    { q: "¿De dónde viene la idea de la próxima acción?", opciones: ["De la técnica Pomodoro","De la matriz de Eisenhower","Del método GTD (Getting Things Done), de David Allen","De Google Calendar"], correcta: 2, explicacion: "La próxima acción es parte de GTD. Pomodoro tienta porque también es de productividad, pero trata de bloques de foco." },
    { q: "¿Cada cuánto conviene revisar la lista?", opciones: ["Todos los días un rato, y una revisión más larga por semana","Una vez por mes","Solo cuando te acordás","Nunca, solo anotar"], correcta: 0, explicacion: "La revisión diaria elige y la semanal limpia. Cuando te acordás tienta, pero la lista se llena de cosas viejas." },
    { q: "En la revisión semanal, ¿qué hacés con los papelitos sueltos?", opciones: ["Los tirás sin leer","Los guardás en un cajón","Los dejás para la otra semana","Los pasás a la lista"], correcta: 3, explicacion: "Juntar lo suelto es el primer paso. Guardarlos tienta para no perderlos, pero así no aparecen en la lista." },
    { q: "Una tarea lleva 6 semanas en la lista sin moverse. ¿Qué hacés?", opciones: ["La dejás, ya la vas a hacer","Te preguntás si de verdad la vas a hacer; si no, la borrás o la pasás a \"algún día\"","La marcás como urgente","Te sentís mal y seguís"], correcta: 1, explicacion: "Una lista con cosas muertas genera culpa. Marcarla urgente tienta, pero si no la hiciste en 6 semanas, no lo es." },
  ],
},
{
  id: "prioridades",
  icono: "🎯",
  titulo: "Elegir qué va primero",
  nivel: "Intermedio",
  objetivos: [
    "Ordenar tareas con la matriz de urgente e importante",
    "Elegir 1 a 3 tareas importantes por día",
    "Decir que no o negociar plazos cuando no llegás",
  ],
  lecciones: [
    { titulo: "Urgente e importante", video: {"id":"MuFGXJZjeEc","t":"Matriz de Eisenhower en 2 minutos · Instructor Creativo (1:47)"}, html: `
      <p class="idea">Lo <strong>urgente</strong> pide atención ya. Lo <strong>importante</strong> te acerca a lo que te importa. No son lo mismo, y lo urgente suele tapar lo importante. La <strong>matriz de Eisenhower</strong> te ayuda a separarlos.</p>
      <table>
        <tr><th></th><th>Urgente</th><th>No urgente</th></tr>
        <tr><td><strong>Importante</strong></td><td>1. Hacelo ya<br>(entregar el trabajo que vence hoy)</td><td>2. Planificalo<br>(estudiar para el examen del mes que viene)</td></tr>
        <tr><td><strong>No importante</strong></td><td>3. Hacelo rápido o delegalo<br>(un mensaje que pide respuesta)</td><td>4. Dejalo<br>(mirar videos sin fin)</td></tr>
      </table>
      <p><strong>El cuadrante 2 es el que más cambia tu vida:</strong> estudiar, cuidar la salud, buscar un trabajo mejor, pasar tiempo con tu familia. Nunca es urgente, y por eso se posterga.</p>
      <p><strong>Si vivís en el cuadrante 1,</strong> todo es un incendio. Casi siempre es porque lo del 2 se postergó hasta volverse urgente.</p>
      <p>Por ejemplo, si estudiás un poco cada semana (cuadrante 2), el examen no se vuelve un incendio la noche anterior (cuadrante 1).</p>` },
    { titulo: "Las tareas del día", html: `
      <p class="idea">Una lista de 20 tareas para un día garantiza que termines frustrado. Elegí <strong>1 a 3 tareas importantes</strong> por día: si hacés esas, el día valió, aunque quede el resto.</p>
      <pre><code>Hoy, martes:
★ 1. Mandar el CV a los 2 avisos que guardé
★ 2. Hacer el resumen del capítulo 3
★ 3. Llamar al médico para el turno
Si queda tiempo:
- Ordenar la carpeta de papeles
- Responder el mail del club</code></pre>
      <p><strong>Hacelas temprano,</strong> en tus horas de energía alta, antes de que el día se llene de urgencias de otros.</p>
      <p><strong>Elegí la noche anterior:</strong> 5 minutos antes de dormir para elegir las 3 tareas del día siguiente te ahorra la mañana dudando.</p>
      <p><strong>Si una tarea grande no entra en un día,</strong> elegí un pedazo: "Escribir la introducción del informe" en vez de "Hacer el informe".</p>
      <p>Por ejemplo, si a las 11 ya mandaste los CV y llamaste al médico, aunque después aparezcan mil cosas, el día ya tuvo lo importante.</p>` },
    { titulo: "Decir que no y negociar", html: `
      <p class="idea">Cada vez que decís que sí a algo, le decís que no a otra cosa, aunque no lo notes. Aprender a decir que no, o a negociar el plazo, protege tu tiempo.</p>
      <table>
        <tr><th>Situación</th><th>Respuesta</th></tr>
        <tr><td>Te piden algo que no podés hacer</td><td>"Esta semana no llego. ¿Te sirve el lunes?"</td></tr>
        <tr><td>Tu jefa te da una tarea nueva y ya estás lleno</td><td>"Puedo hacerla. ¿Cuál de estas dos dejo para después?"</td></tr>
        <tr><td>Te invitan a algo que no querés</td><td>"Gracias por invitarme, esta vez no voy a poder."</td></tr>
        <tr><td>Te piden un favor que lleva mucho tiempo</td><td>"Te puedo ayudar media hora el sábado."</td></tr>
      </table>
      <p><strong>Pedir que elijan la prioridad</strong> ("¿Cuál dejo para después?") es una forma respetuosa de mostrar que tu tiempo es limitado, sobre todo en el trabajo.</p>
      <p><strong>No hace falta dar mil explicaciones:</strong> un motivo corto y una alternativa alcanzan.</p>
      <p><strong>Avisar a tiempo:</strong> si ves que no llegás con algo, avisá antes del plazo, no el mismo día. "No llego al viernes, lo tengo el martes" el miércoles es mucho mejor que el viernes a la noche.</p>
      <p>Por ejemplo, decir que sí a todo en el trabajo puede parecer buena voluntad, pero si después entregás todo tarde, la impresión es peor.</p>` },
  ],
  practica: [
    "Pasá 12 tareas de tu lista a la matriz de urgente e importante. Anotá cuántas quedaron en cada cuadrante.",
    "Durante 5 días, elegí la noche anterior 1 a 3 tareas importantes. Anotá cuántas cumpliste cada día.",
    "Escribí cómo dirías que no (o negociarías el plazo) en 3 situaciones reales tuyas. Anotá las frases.",
  ],
  recursos: [
    { t: "Google Tasks: información y uso", url: "https://support.google.com/tasks/answer/7675772?hl=es" },
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
    { t: "Getting Things Done: qué es el método (en inglés)", url: "https://gettingthingsdone.com/what-is-gtd/" },
  ],
  quiz: [
    { q: "Tu trabajo vence hoy y es importante. ¿En qué cuadrante va?", opciones: ["Importante no urgente: planificalo","Urgente no importante: delegalo","Urgente e importante: hacelo ya","Ni urgente ni importante: dejalo"], correcta: 2, explicacion: "Vence hoy y tiene consecuencias. Planificarlo tienta para hacerlo con calma, pero ya no hay tiempo." },
    { q: "Estudiar para el examen del mes que viene, ¿en qué cuadrante va?", opciones: ["Importante no urgente: planificalo","Urgente e importante","Urgente no importante","Ni urgente ni importante"], correcta: 0, explicacion: "Es importante, pero todavía no urge. Ponerlo en \"ni urgente ni importante\" tienta porque falta mucho, pero si lo dejás, se vuelve un incendio." },
    { q: "¿Por qué el cuadrante \"importante no urgente\" es el que más cambia tu vida?", opciones: ["Porque tiene menos tareas","Porque es el más fácil","Porque no hace falta hacer nada","Porque ahí están estudiar, la salud y la familia, que se postergan por no ser urgentes"], correcta: 3, explicacion: "Lo importante sin urgencia es lo que más se posterga. \"El más fácil\" tienta, pero justamente cuesta porque nadie te apura." },
    { q: "Vivís apagando incendios. ¿Qué suele estar pasando?", opciones: ["Que sos muy trabajador","Que lo importante se postergó hasta volverse urgente","Que es mala suerte","Que tu trabajo es así y no se puede cambiar"], correcta: 1, explicacion: "Lo postergado se vuelve urgente. Mala suerte tienta como explicación, pero muchas veces es un patrón." },
    { q: "Tenés una lista de 20 tareas para hoy. ¿Qué conviene?", opciones: ["Intentar hacer las 20","Empezar por las más fáciles","Elegir 1 a 3 tareas importantes y hacer esas primero","Hacer las que te pidan otros"], correcta: 2, explicacion: "Con 1 a 3 importantes, el día vale. Las 20 tientan como meta, pero terminás frustrado." },
    { q: "¿Cuándo conviene hacer tus tareas importantes del día?", opciones: ["Temprano, en tus horas de energía alta","Al final del día","Cuando termines todo lo demás","Cuando tengas ganas"], correcta: 0, explicacion: "Temprano, antes de que aparezcan las urgencias de otros. Al final tienta para \"sacarte lo chico\", pero a esa hora ya no hay energía." },
    { q: "¿Cuándo conviene elegir las tareas del día?", opciones: ["A la mañana, cuando ya empezaste","Una vez por mes","No hace falta elegir","La noche anterior, en 5 minutos"], correcta: 3, explicacion: "Elegir la noche anterior te ahorra la mañana dudando. A la mañana tienta, pero ese rato se te va pensando." },
    { q: "Tu tarea \"Hacer el informe\" no entra en un día. ¿Qué hacés?", opciones: ["La dejás para cuando tengas un día libre","Elegís un pedazo: \"Escribir la introducción del informe\"","Te quedás hasta las 3 de la mañana","La sacás de la lista"], correcta: 1, explicacion: "Un pedazo concreto entra en el día. El día libre tienta, pero casi nunca llega." },
    { q: "Tu jefa te da una tarea nueva y ya estás lleno. ¿Qué decís?", opciones: ["\"Sí\" y la sumás a todo","\"No\" sin explicación","\"Puedo hacerla. ¿Cuál de estas dos dejo para después?\"","Nada, y la hacés tarde"], correcta: 2, explicacion: "Pedir que elija la prioridad muestra que tu tiempo es limitado. Decir que sí a todo tienta para quedar bien, pero después entregás tarde." },
    { q: "Te piden un favor que lleva mucho tiempo. ¿Qué podés ofrecer?", opciones: ["Una parte: \"Te puedo ayudar media hora el sábado\"","Todo el fin de semana","Nada, sin responder","Una excusa inventada"], correcta: 0, explicacion: "Ofrecer una parte ayuda sin perder tu tiempo. Todo el fin de semana tienta por generoso, pero después te falta para lo tuyo." },
    { q: "Si decís que no a algo, ¿hace falta dar muchas explicaciones?", opciones: ["Sí, para que no se enojen","Sí, con detalles de tu semana","No, ni siquiera respondés","No: un motivo corto y una alternativa alcanzan"], correcta: 3, explicacion: "Corto y claro es respetuoso. Muchas explicaciones tientan para que no se ofendan, pero suenan a excusa." },
    { q: "El miércoles ves que no llegás con algo para el viernes. ¿Qué hacés?", opciones: ["Esperás al viernes por si llegás","Avisás ese mismo día y proponés otra fecha","No decís nada","Entregás cualquier cosa el viernes"], correcta: 1, explicacion: "Avisar a tiempo deja reorganizar. Esperar tienta por si llegás, pero el viernes a la noche ya nadie puede ayudar." },
  ],
},
{
  id: "planificar",
  icono: "🗓️",
  titulo: "Planificar la semana y el día",
  nivel: "Intermedio",
  objetivos: [
    "Pasar las tareas importantes a bloques en el calendario",
    "Estimar cuánto tarda una tarea y dejar margen",
    "Armar rutinas para lo que se repite",
  ],
  lecciones: [
    { titulo: "Bloques en el calendario", html: `
      <p class="idea">Una tarea que está solo en la lista compite con todo. Una tarea con un <strong>bloque</strong> en el calendario ("martes de 9 a 10: resumen capítulo 3") tiene su lugar reservado.</p>
      <pre><code>         Lunes          Martes          Miércoles
08:00   Viaje           Viaje           Viaje
09:00   ★ CV a avisos   ★ Resumen cap.3 ★ Práctica
10:00   Trabajo         Trabajo         Trabajo
...
18:00   Gimnasio        Libre           Gimnasio
21:00   Revisar día     Revisar día     Revisar día</code></pre>
      <p><strong>Primero lo fijo:</strong> trabajo, viajes, horarios de los chicos. Después, en los huecos, los bloques de tus tareas importantes.</p>
      <p><strong>Tratá tus bloques como una cita:</strong> si alguien te pide algo en ese horario, decí "a esa hora tengo algo, ¿te sirve a las 11?".</p>
      <p><strong>Dejá huecos vacíos:</strong> no llenes cada hora. Los huecos absorben los imprevistos.</p>
      <p>Por ejemplo, en Google Calendar podés crear un evento repetido "Estudiar" los martes y jueves de 19 a 20, y te avisa unos minutos antes.</p>` },
    { titulo: "Estimar y dejar margen", html: `
      <p class="idea">Casi todos calculamos mal cuánto tarda una tarea, y casi siempre para menos. A ese error tan común se lo llama la <strong>falacia de la planificación</strong>.</p>
      <table>
        <tr><th>Tarea</th><th>Lo que pensé</th><th>Lo que tardé</th></tr>
        <tr><td>Hacer un trámite</td><td>30 min</td><td>1 h 15 min (fila y viaje)</td></tr>
        <tr><td>Escribir un informe</td><td>1 h</td><td>2 h</td></tr>
        <tr><td>Ordenar el placard</td><td>1 h</td><td>2 h 30 min</td></tr>
      </table>
      <p><strong>Una regla práctica:</strong> multiplicá tu estimación por 1,5. Si pensás que lleva 1 hora, reservá 1 hora y media.</p>
      <pre><code>Tu estimación:  40 min
× 1,5        =  60 min → reservá 1 hora</code></pre>
      <p><strong>Medí y aprendé:</strong> anotá cuánto pensabas y cuánto tardaste en algunas tareas. Con el tiempo vas a saber tu propio factor.</p>
      <p><strong>Incluí lo que no se ve:</strong> viajes, esperas, prepararse, ordenar después.</p>
      <p>Por ejemplo, si un trámite "de media hora" está a 40 minutos de viaje, en realidad te ocupa casi 2 horas de la mañana.</p>` },
    { titulo: "Rutinas para lo que se repite", html: `
      <p class="idea">Lo que se repite no debería decidirse cada vez. Una <strong>rutina</strong> convierte tareas en costumbre: las hacés sin pensar, y tu cabeza queda libre para lo demás.</p>
      <table>
        <tr><th>Rutina</th><th>Ejemplo</th></tr>
        <tr><td>De la mañana</td><td>Levantarse, desayunar, mirar las 3 tareas del día</td></tr>
        <tr><td>De la noche</td><td>Preparar la ropa y la mochila, elegir las 3 tareas de mañana</td></tr>
        <tr><td>Semanal</td><td>Domingo: revisión de la lista, compras, plan de la semana</td></tr>
        <tr><td>Mensual</td><td>Pagar servicios, revisar gastos, trámites</td></tr>
      </table>
      <p><strong>Agrupá tareas parecidas:</strong> responder todos los mensajes juntos, hacer todos los trámites en una salida, cocinar para varios días. Cambiar de tarea a cada rato cansa.</p>
      <p><strong>Empezá con una sola rutina</strong> y sostenela dos semanas antes de sumar otra.</p>
      <p>Por ejemplo, dejar la mochila lista la noche anterior evita la corrida de la mañana y los olvidos.</p>` },
  ],
  practica: [
    "Armá tu semana en un calendario: primero lo fijo y después 3 bloques para tareas importantes. Anotá en qué días y horarios quedaron.",
    "Antes de 5 tareas, anotá cuánto pensás que van a tardar; después anotá cuánto tardaron. Calculá tu factor (real ÷ estimado).",
    "Elegí una rutina (de la mañana o de la noche), escribí sus 3 o 4 pasos y sostenela una semana. Anotá cuántos días la cumpliste.",
  ],
  recursos: [
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
    { t: "Google Tasks: información y uso", url: "https://support.google.com/tasks/answer/7675772?hl=es" },
    { t: "Microsoft To Do: ayuda y aprendizaje", url: "https://support.microsoft.com/es-es/todo" },
  ],
  quiz: [
    { q: "Tu tarea \"Resumen capítulo 3\" lleva una semana en la lista. ¿Qué probás?", opciones: ["Escribirla en mayúsculas","Moverla al final de la lista","Ponerle un bloque en el calendario: \"martes de 9 a 10\"","Esperar a tener ganas"], correcta: 2, explicacion: "Con un bloque tiene su lugar reservado. Las mayúsculas tientan para que se note, pero sigue compitiendo con todo." },
    { q: "Vas a armar tu semana. ¿Qué ponés primero?", opciones: ["Lo fijo: trabajo, viajes, horarios de los chicos","Las tareas importantes","El tiempo libre","Las reuniones que todavía no confirmaron"], correcta: 0, explicacion: "Sobre lo fijo se arma lo demás. Las tareas importantes tientan para priorizarlas, pero si se superponen con lo fijo no sirven." },
    { q: "Alguien te pide algo justo en tu bloque de estudio. ¿Qué decís?", opciones: ["\"Sí\" y lo movés para nunca","\"No\" sin alternativa","Lo atendés y estudiás de noche cansado","\"A esa hora tengo algo, ¿te sirve a las 11?\""], correcta: 3, explicacion: "Tratar el bloque como una cita lo protege. Decir que sí tienta por amable, pero el bloque desaparece." },
    { q: "¿Por qué conviene dejar huecos vacíos en el calendario?", opciones: ["Para descansar todo el día","Porque absorben los imprevistos","Porque no hay nada que hacer","No conviene, hay que llenar todo"], correcta: 1, explicacion: "Sin huecos, un imprevisto desarma todo. Llenar todo tienta para aprovechar, pero no aguanta la realidad." },
    { q: "¿Qué es la falacia de la planificación?", opciones: ["Planificar demasiado","No planificar nunca","El error común de calcular que las tareas tardan menos de lo que tardan","Una técnica para estudiar"], correcta: 2, explicacion: "Casi siempre estimamos de menos. Planificar demasiado tienta por el nombre, pero el error es de cálculo." },
    { q: "Si pensás que una tarea lleva 40 minutos, con la regla práctica, ¿cuánto reservás?", opciones: ["1 hora","40 minutos","20 minutos","3 horas"], correcta: 0, explicacion: "40 × 1,5 = 60 minutos. 40 tienta porque es tu cálculo, pero casi siempre se tarda más." },
    { q: "Anotaste que pensabas 1 hora y tardaste 2. ¿Cuál es tu factor?", opciones: ["1","0,5","3","2"], correcta: 3, explicacion: "Real ÷ estimado = 2 ÷ 1 = 2. El 0,5 tienta porque es la división al revés." },
    { q: "Si un trámite \"de media hora\" está a 40 minutos de viaje, ¿cuánto te ocupa?", opciones: ["Media hora","Casi 2 horas: media hora más 40 minutos de ida y 40 de vuelta","40 minutos","1 hora"], correcta: 1, explicacion: "Hay que sumar lo que no se ve. Media hora tienta porque es lo que dura el trámite, pero el viaje también cuenta." },
    { q: "¿Para qué sirve una rutina?", opciones: ["Para no tener tiempo libre","Para hacer todo igual siempre","Para hacer lo que se repite sin tener que decidirlo cada vez","Para impresionar a otros"], correcta: 2, explicacion: "La rutina libera tu cabeza. \"Todo igual siempre\" tienta como crítica, pero se aplica solo a lo que se repite." },
    { q: "Si respondés mensajes cada 5 minutos mientras estudiás, ¿qué conviene?", opciones: ["Agruparlos: responder todos juntos en un momento","Seguir así, es más rápido","No responder nunca","Estudiar con el celular en la mano"], correcta: 0, explicacion: "Cambiar de tarea a cada rato cansa. Seguir así tienta porque cada mensaje es corto, pero el estudio se corta todo el tiempo." },
    { q: "Querés armar rutinas. ¿Cómo empezás?", opciones: ["Con cinco rutinas a la vez","Con la más difícil","Copiando la de un famoso","Con una sola, y la sostenés dos semanas antes de sumar otra"], correcta: 3, explicacion: "Una rutina sostenida vale más que cinco abandonadas. Cinco a la vez tientan por el entusiasmo, pero se caen juntas." },
    { q: "Siempre llegás tarde porque a la mañana buscás la mochila y la ropa. ¿Qué rutina ayuda?", opciones: ["Levantarte más temprano sin cambiar nada","Una rutina de la noche: dejar todo listo antes de dormir","Salir sin mochila","Poner más alarmas"], correcta: 1, explicacion: "Preparar la noche anterior saca decisiones de la mañana. Más alarmas tientan, pero el problema es lo que hacés después de levantarte." },
  ],
},
{
  id: "foco",
  icono: "🔕",
  titulo: "Concentrarte y dejar de postergar",
  nivel: "Intermedio",
  objetivos: [
    "Trabajar en bloques de foco con la técnica Pomodoro",
    "Reducir las distracciones del celular y las interrupciones",
    "Arrancar una tarea que venís postergando con pasos chicos",
  ],
  lecciones: [
    { titulo: "La técnica Pomodoro", video: {"id":"3D0-l2O5k8Y","t":"Técnica Pomodoro (animado) · Ser – Hacer Mejor (3:58)"}, html: `
      <p class="idea">La <strong>técnica Pomodoro</strong> es trabajar 25 minutos en una sola tarea, sin interrupciones, y después descansar 5. Cada bloque es un "pomodoro". Después de 4, un descanso más largo.</p>
      <pre><code>25 min foco → 5 min descanso
25 min foco → 5 min descanso
25 min foco → 5 min descanso
25 min foco → 15 a 30 min descanso largo</code></pre>
      <p><strong>Por qué funciona:</strong></p>
      <ul>
        <li>25 minutos parece poco, así que cuesta menos empezar.</li>
        <li>Saber que viene un descanso hace más fácil no mirar el celular.</li>
        <li>Contar pomodoros te dice cuánto te lleva una tarea de verdad.</li>
      </ul>
      <p><strong>Las reglas:</strong> una sola tarea por pomodoro. Si aparece algo que tenés que hacer, lo anotás en la lista y seguís. En el descanso, levantate y movete un poco: no es para mirar redes.</p>
      <p><strong>Ajustalo a vos:</strong> hay a quienes les rinden más 50 minutos de foco y 10 de descanso. Lo importante es el bloque sin interrupciones y la pausa.</p>
      <p>Por ejemplo, "Hoy hago 2 pomodoros del resumen" es una meta clara: en una hora sabés si la cumpliste.</p>` },
    { titulo: "Menos distracciones", html: `
      <p class="idea">Cada interrupción te cuesta más que el minuto que dura: después tardás un rato en volver a concentrarte. Y la <strong>multitarea</strong> (hacer varias cosas a la vez) en realidad es saltar de una a otra, y se hace todo peor y más lento.</p>
      <table>
        <tr><th>Distracción</th><th>Qué probar</th></tr>
        <tr><td>Notificaciones del celular</td><td>Modo "No molestar" durante el bloque de foco</td></tr>
        <tr><td>El celular a la vista</td><td>Dejarlo en otra habitación o boca abajo lejos</td></tr>
        <tr><td>Muchas pestañas abiertas</td><td>Cerrar todo lo que no sea de la tarea</td></tr>
        <tr><td>Gente que interrumpe</td><td>Avisar "hasta las 10 estoy con esto, después te ayudo"</td></tr>
        <tr><td>Pensamientos de "me tengo que acordar de…"</td><td>Anotarlos en la lista y volver</td></tr>
      </table>
      <p><strong>El celular lejos funciona mejor que la fuerza de voluntad:</strong> si está a la vista, la cabeza gasta energía en no agarrarlo.</p>
      <p><strong>En casa con chicos o con poco espacio:</strong> los bloques pueden ser más cortos (15 minutos) y en los momentos más tranquilos, como cuando duermen.</p>
      <p>Por ejemplo, si cada vez que suena el celular lo mirás "un segundo" mientras estudiás, una hora de estudio puede rendir como media.</p>` },
    { titulo: "Dejar de postergar", video: {"id":"bcOaW-qMc0s","t":"Por qué procrastinas aun cuando no se siente bien · TED-Ed en español (5:44)"}, html: `
      <p class="idea"><strong>Procrastinar</strong> es postergar algo aunque sabés que te conviene hacerlo. Casi nunca es vagancia: suele ser evitar una emoción incómoda (aburrimiento, miedo a que salga mal, no saber por dónde empezar).</p>
      <table>
        <tr><th>Truco</th><th>Cómo</th></tr>
        <tr><td>La regla de los 2 minutos</td><td>Si algo lleva menos de 2 minutos, hacelo ya</td></tr>
        <tr><td>Empezar con 5 minutos</td><td>"Solo 5 minutos y si no quiero, paro": casi siempre seguís</td></tr>
        <tr><td>Partir la tarea</td><td>"Escribir el informe" → "Escribir 3 líneas de la introducción"</td></tr>
        <tr><td>Hacer lo peor primero</td><td>La tarea que más pesa, temprano, antes de pensarla mucho</td></tr>
        <tr><td>Avisarle a alguien</td><td>"Le dije a mi hermana que hoy mando el CV"</td></tr>
      </table>
      <p><strong>Tratate con amabilidad:</strong> retarte por haber postergado genera más malestar, y el malestar lleva a postergar más. Mejor: "Bueno, pasó. ¿Cuál es el paso más chico que puedo hacer ahora?".</p>
      <p><strong>Si postergar te pasa con todo y por mucho tiempo,</strong> con desgano y tristeza, puede ser algo más que organización: hablalo con un profesional de salud.</p>
      <p>Por ejemplo, abrir el documento y escribir solo el título del informe parece poco, pero rompe la barrera de empezar.</p>` },
  ],
  practica: [
    "Hacé 4 pomodoros de 25 minutos en una tarea importante. Anotá cuántas veces te distrajiste en cada uno.",
    "Hacé un bloque de estudio o trabajo con el celular en otra habitación y otro con el celular a la vista. Anotá cuánto avanzaste en cada uno.",
    "Elegí una tarea que venís postergando, partila en pasos de 5 minutos y hacé el primero hoy. Anotá la tarea, el paso y si seguiste después.",
  ],
  recursos: [
    { t: "The Learning Scientists: materiales para estudiar mejor (en inglés)", url: "https://www.learningscientists.org/downloadable-materials" },
    { t: "Google Tasks: información y uso", url: "https://support.google.com/tasks/answer/7675772?hl=es" },
  ],
  quiz: [
    { q: "¿Qué es la técnica Pomodoro?", opciones: ["Trabajar 4 horas seguidas","Hacer varias tareas a la vez","Trabajar 25 minutos en una sola tarea sin interrupciones y descansar 5","Descansar 25 minutos y trabajar 5"], correcta: 2, explicacion: "Bloques cortos de foco con pausa. Varias tareas a la vez tienta por rendir más, pero es lo contrario al Pomodoro." },
    { q: "Si hiciste 4 pomodoros seguidos, ¿qué toca?", opciones: ["Un descanso más largo, de 15 a 30 minutos","Otro pomodoro sin pausa","Terminar el día","Un descanso de 1 minuto"], correcta: 0, explicacion: "Después de 4, descanso largo. Seguir sin pausa tienta si venís bien, pero el cansancio se acumula." },
    { q: "En medio de un pomodoro te acordás de que tenés que llamar al médico. ¿Qué hacés?", opciones: ["Llamás ya","Lo pensás hasta que termine el bloque","Abandonás el pomodoro","Lo anotás en la lista y seguís con la tarea"], correcta: 3, explicacion: "Anotarlo te lo saca de la cabeza. Llamar ya tienta por rápido, pero rompe el bloque de foco." },
    { q: "¿Qué conviene hacer en el descanso de 5 minutos?", opciones: ["Mirar redes sociales","Levantarte y moverte un poco","Responder todos los mensajes","Seguir trabajando"], correcta: 1, explicacion: "Moverte descansa la cabeza. Las redes tientan porque es lo que tenés a mano, pero cuesta volver." },
    { q: "Te rinden más 50 minutos de foco que 25. ¿Qué hacés?", opciones: ["Seguís con 25, es la regla","Trabajás sin descanso","Ajustás los bloques a 50 y 10 de descanso","Dejás la técnica"], correcta: 2, explicacion: "Lo importante es el bloque sin interrupciones y la pausa. Seguir con 25 tienta por ser la regla, pero la técnica se adapta." },
    { q: "¿Qué es la multitarea?", opciones: ["Saltar de una tarea a otra, que hace todo peor y más lento","Una forma de rendir el doble","Una técnica de concentración","Trabajar en equipo"], correcta: 0, explicacion: "El cerebro salta, no hace dos cosas a la vez. Rendir el doble tienta como idea, pero cada salto cuesta tiempo." },
    { q: "Tu celular suena a cada rato mientras estudiás. ¿Qué probás?", opciones: ["Más fuerza de voluntad","Subir el volumen para no perder nada","Estudiar con el celular en la mano","Modo \"No molestar\" y el celular en otra habitación"], correcta: 3, explicacion: "Lejos funciona mejor que la voluntad. La fuerza de voluntad tienta, pero si está a la vista igual gasta energía." },
    { q: "Tus compañeros te interrumpen todo el tiempo. ¿Qué decís?", opciones: ["Nada, los atendés siempre","\"Hasta las 10 estoy con esto, después te ayudo\"","\"No me molesten nunca\"","Te ponés auriculares sin avisar"], correcta: 1, explicacion: "Avisar el horario protege tu foco sin cerrar la puerta. \"Nunca\" tienta por firme, pero cae mal en un equipo." },
    { q: "Si estás en casa con chicos y poco espacio, ¿cómo adaptás los bloques de foco?", opciones: ["No se puede hacer nada","Bloques de 3 horas a la tarde","Bloques más cortos, de 15 minutos, en los momentos más tranquilos","Solo de madrugada siempre"], correcta: 2, explicacion: "Más cortos y en los mejores momentos. \"No se puede\" tienta, pero 15 minutos con foco valen." },
    { q: "¿Por qué solemos procrastinar?", opciones: ["Para evitar una emoción incómoda: aburrimiento, miedo o no saber por dónde empezar","Porque somos vagos","Porque no tenemos tiempo","Porque la tarea es fácil"], correcta: 0, explicacion: "Procrastinar es evitar una emoción. La vagancia tienta como explicación, pero no ayuda a resolverlo." },
    { q: "Tenés que mandar un mail que lleva 1 minuto. ¿Qué dice la regla de los 2 minutos?", opciones: ["Que lo anotes para mañana","Que lo delegues","Que lo hagas en un pomodoro","Que lo hagas ya"], correcta: 3, explicacion: "Si lleva menos de 2 minutos, anotarlo lleva casi lo mismo. Anotarlo tienta para no interrumpir, pero se acumulan cosas chicas." },
    { q: "Hace una semana que no empezás el informe y te retás por eso. ¿Qué conviene?", opciones: ["Retarte más fuerte","Tratarte con amabilidad y buscar el paso más chico para hacer ahora","Esperar a tener ganas","Abandonar el informe"], correcta: 1, explicacion: "Retarte genera malestar y más postergación. Retarte más fuerte tienta como motivación, pero suele empeorarlo." },
  ],
},
{
  id: "metas",
  icono: "🌱",
  titulo: "Metas, hábitos y descanso",
  nivel: "Intermedio",
  objetivos: [
    "Escribir metas claras y medibles con el modelo SMART",
    "Armar hábitos chicos que se sostienen",
    "Cuidar el descanso, el sueño y el movimiento como parte de organizarte",
  ],
  lecciones: [
    { titulo: "Metas SMART", video: {"id":"5wk1Ia9DhF4","t":"Objetivos SMART: cómo establecer metas · Datademia (3:16)"}, html: `
      <p class="idea">Una meta vaga ("quiero estar mejor") no te dice qué hacer. Una meta <strong>SMART</strong> es concreta y se puede medir. SMART es una sigla en inglés; en castellano la podemos leer así:</p>
      <table>
        <tr><th>Letra</th><th>Significa</th><th>Pregunta</th></tr>
        <tr><td>S</td><td>Específica</td><td>¿Qué exactamente?</td></tr>
        <tr><td>M</td><td>Medible</td><td>¿Cómo sé que lo logré?</td></tr>
        <tr><td>A</td><td>Alcanzable</td><td>¿Es posible con mi tiempo y mis recursos?</td></tr>
        <tr><td>R</td><td>Relevante</td><td>¿Me importa de verdad?</td></tr>
        <tr><td>T</td><td>Con tiempo</td><td>¿Para cuándo?</td></tr>
      </table>
      <pre><code>Vaga:   "Quiero conseguir trabajo"
SMART:  "Voy a mandar mi CV a 10 avisos de administración
         por semana durante este mes"</code></pre>
      <p><strong>Medible no es lo mismo que el resultado:</strong> no controlás si te llaman, pero sí cuántos CV mandás. Poné metas sobre lo que depende de vos.</p>
      <p>Por ejemplo, "leer más" es vaga; "leer 10 páginas antes de dormir, de lunes a viernes, durante un mes" se puede cumplir y controlar.</p>` },
    { titulo: "Hábitos chicos", html: `
      <p class="idea">Un <strong>hábito</strong> es algo que hacés casi sin pensar. Los hábitos que se sostienen empiezan ridículamente chicos y van pegados a algo que ya hacés.</p>
      <table>
        <tr><th>Hábito grande (difícil)</th><th>Hábito chico (se sostiene)</th></tr>
        <tr><td>Hacer una hora de ejercicio por día</td><td>Caminar 10 minutos después de almorzar</td></tr>
        <tr><td>Estudiar 3 horas por día</td><td>Una tarjeta de repaso con el café de la mañana</td></tr>
        <tr><td>Ordenar toda la casa</td><td>Dejar la cocina limpia antes de dormir</td></tr>
      </table>
      <p><strong>Pegalo a algo que ya hacés:</strong> "Después de cepillarme los dientes, anoto las 3 tareas de mañana". Lo que ya hacés funciona como recordatorio.</p>
      <p><strong>Registrá los días que lo cumplís:</strong> una cruz en un calendario de papel. Ver la cadena de cruces motiva a no cortarla.</p>
      <pre><code>Caminar 10 min      L  M  M  J  V  S  D
Semana 1            ✗  ✗  ✗  -  ✗  ✗  -
Semana 2            ✗  ✗  -  ✗  ✗  ✗  ✗</code></pre>
      <p><strong>Si fallás un día, no pasa nada:</strong> la regla es no fallar dos días seguidos.</p>
      <p>Por ejemplo, el curso de este sitio ya usa este principio: repasar unas preguntas por día rinde más que estudiar todo junto la noche anterior.</p>` },
    { titulo: "Descanso, sueño y límites", html: `
      <p class="idea">Organizar el tiempo incluye organizar el descanso. Dormir poco, no moverte y no cortar nunca hacen que todo te cueste más, por más ordenado que estés.</p>
      <table>
        <tr><th>Base</th><th>Qué dicen las guías</th></tr>
        <tr><td>Sueño</td><td>Los adultos necesitan, en general, entre 7 y 9 horas por noche</td></tr>
        <tr><td>Movimiento</td><td>La OMS recomienda a los adultos al menos 150 minutos de actividad moderada por semana (por ejemplo, caminar a paso rápido)</td></tr>
        <tr><td>Pausas</td><td>Cortes cortos durante el día para levantarte y despejarte</td></tr>
      </table>
      <p><strong>Poné límites a la disponibilidad:</strong> si respondés mensajes de trabajo a cualquier hora, el trabajo no termina nunca. Elegí un horario de corte y silenciá los grupos después.</p>
      <p><strong>Agendá el descanso:</strong> el tiempo libre y con la familia también va en el calendario. Si no, se lo come todo lo demás.</p>
      <p><strong>Señales de agotamiento:</strong> cansancio que no se va durmiendo, irritabilidad, no poder desconectarte, dolores de cabeza seguidos. Si se sostienen, consultá con un profesional de salud: en Argentina hay atención gratuita en hospitales y centros de salud.</p>
      <p>Este curso no reemplaza a un profesional de salud.</p>
      <p>Por ejemplo, 150 minutos por semana son 30 minutos 5 días: una caminata de ida y vuelta al trabajo o a la parada puede cubrir buena parte.</p>` },
  ],
  practica: [
    "Escribí una meta vaga tuya y reescribila como SMART, respondiendo las 5 preguntas. Anotá las dos versiones.",
    "Elegí un hábito chico, pegalo a algo que ya hacés y registrá con una cruz cada día durante 2 semanas. Anotá cuántos días lo cumpliste.",
    "Durante una semana, anotá cuántas horas dormís cada noche y cuántos minutos te movés. Compará con las guías de la lección.",
  ],
  recursos: [
    { t: "OMS: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" },
    { t: "Sleep Foundation: cuántas horas de sueño necesitamos (en inglés)", url: "https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need" },
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
  ],
  quiz: [
    { q: "Tu meta es \"Quiero estar mejor\". ¿Qué le falta?", opciones: ["Más entusiasmo","Ser más grande","Ser concreta y medible: qué exactamente, cómo sabés que lo lograste y para cuándo","Nada, está bien"], correcta: 2, explicacion: "Una meta vaga no dice qué hacer. Más entusiasmo tienta, pero sin claridad se apaga." },
    { q: "En una meta SMART, ¿qué significa la M?", opciones: ["Medible: cómo sabés que lo lograste","Motivadora","Mensual","Mínima"], correcta: 0, explicacion: "M es medible. Motivadora tienta porque suena bien, pero la clave es poder controlarla." },
    { q: "¿Cuál de estas metas es SMART?", opciones: ["\"Conseguir trabajo\"","\"Esforzarme más\"","\"Ser exitoso este año\"","\"Mandar mi CV a 10 avisos por semana durante este mes\""], correcta: 3, explicacion: "Tiene qué, cuánto y cuándo. \"Conseguir trabajo\" tienta como meta real, pero no depende solo de vos ni dice qué hacer." },
    { q: "Tu meta es \"Que me llamen de 5 empresas\". ¿Qué problema tiene?", opciones: ["Que es muy chica","Que no depende de vos: mejor una meta sobre lo que sí controlás, como cuántos CV mandás","Que no tiene fecha y nada más","Ninguno"], correcta: 1, explicacion: "Poné metas sobre lo que depende de vos. Que es muy chica tienta, pero el problema es que no la controlás." },
    { q: "Querés hacer ejercicio y nunca hiciste. ¿Cómo empezás?", opciones: ["Una hora por día desde mañana","Anotarte en el gimnasio 6 días","Con algo chico: caminar 10 minutos después de almorzar","Esperar a tener más tiempo"], correcta: 2, explicacion: "Los hábitos chicos se sostienen. La hora por día tienta por ambiciosa, pero casi siempre se abandona." },
    { q: "¿Por qué conviene pegar un hábito a algo que ya hacés?", opciones: ["Porque lo que ya hacés funciona como recordatorio","Porque así tardás menos","Porque es más divertido","No conviene"], correcta: 0, explicacion: "El hábito existente te lo recuerda. Que tardás menos tienta, pero la ventaja es no olvidarte." },
    { q: "Fallaste un día con tu hábito. ¿Qué hacés?", opciones: ["Lo abandonás, ya se cortó","Empezás de cero en un mes","Hacés el doble mañana","Seguís al otro día: la regla es no fallar dos días seguidos"], correcta: 3, explicacion: "Un día no rompe un hábito. Abandonarlo tienta porque \"ya se cortó\", pero lo que importa es volver." },
    { q: "¿Cuántas horas de sueño necesitan en general los adultos?", opciones: ["4 o 5","Entre 7 y 9 por noche","12","Depende solo de las ganas"], correcta: 1, explicacion: "Las guías hablan de 7 a 9. 4 o 5 tienta porque mucha gente duerme eso, pero no alcanza para rendir bien." },
    { q: "¿Cuánta actividad física recomienda la OMS a los adultos?", opciones: ["10 minutos por semana","3 horas por día","Al menos 150 minutos de actividad moderada por semana","Ninguna si trabajás"], correcta: 2, explicacion: "150 minutos por semana, como caminar rápido. 3 horas por día tienta como ideal, pero no es lo que dice la guía." },
    { q: "Si respondés mensajes de trabajo a cualquier hora, ¿qué pasa?", opciones: ["El trabajo no termina nunca: conviene un horario de corte","Quedás mejor siempre","Rendís más","No pasa nada"], correcta: 0, explicacion: "Sin límites no descansás. Quedar bien tienta, pero el cansancio después se nota en todo." },
    { q: "¿Por qué agendar el tiempo libre?", opciones: ["Porque lo pide el jefe","No hace falta, aparece solo","Para mostrarlo en redes","Porque si no, se lo come todo lo demás"], correcta: 3, explicacion: "Lo que no está en la agenda se pierde. \"Aparece solo\" tienta, pero las tareas siempre llenan el hueco." },
    { q: "Hace semanas estás cansado aunque dormís, irritable y no podés desconectarte. ¿Qué hacés?", opciones: ["Te organizás más fuerte","Consultás con un profesional de salud","Lo aguantás","Tomás más café"], correcta: 1, explicacion: "Pueden ser señales de agotamiento. Organizarte más fuerte tienta, pero puede ser algo que necesita atención profesional." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu sistema de dos semanas",
  nivel: "Avanzado",
  objetivos: [
    "Armar un sistema personal con lista, prioridades, calendario y revisión",
    "Usarlo dos semanas y medir resultados",
    "Evaluarlo con una rúbrica y ajustar lo que no funcionó",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es armar tu propio <strong>sistema</strong> con lo que viste en el curso, usarlo durante dos semanas y medir qué cambió.</p>
      <table>
        <tr><th>Parte del sistema</th><th>Usa el módulo</th></tr>
        <tr><td>Registro de tiempo de 3 días (antes de empezar)</td><td>A dónde se va tu tiempo</td></tr>
        <tr><td>Una lista única con próximas acciones</td><td>Sacar todo de la cabeza</td></tr>
        <tr><td>1 a 3 tareas importantes por día</td><td>Elegir qué va primero</td></tr>
        <tr><td>Bloques en el calendario y una rutina</td><td>Planificar la semana y el día</td></tr>
        <tr><td>Pomodoros para las tareas difíciles</td><td>Concentrarte y dejar de postergar</td></tr>
        <tr><td>Una meta SMART y un hábito chico</td><td>Metas, hábitos y descanso</td></tr>
        <tr><td>Una revisión semanal</td><td>Sacar todo de la cabeza</td></tr>
      </table>
      <p><strong>Simple antes que completo:</strong> si todo esto te parece mucho, empezá con lista única, 3 tareas por día y revisión semanal. Es el corazón del sistema.</p>
      <p>Por ejemplo, alguien que estudia y trabaja puede tener: cuaderno como lista, 2 bloques de estudio fijos por semana en el calendario, 3 tareas por día y revisión el domingo a la noche.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Evaluá tu sistema al final de cada semana.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Lista única</td><td>Todo anotado en un solo lugar</td><td>Casi todo, con algunos papelitos sueltos</td><td>Pendientes dispersos</td></tr>
        <tr><td>Tareas del día</td><td>Elegidas 5 días o más</td><td>3 o 4 días</td><td>Menos de 3</td></tr>
        <tr><td>Bloques</td><td>Se respetaron casi todos</td><td>La mitad</td><td>Casi ninguno</td></tr>
        <tr><td>Revisión semanal</td><td>Hecha completa</td><td>Hecha a medias</td><td>No se hizo</td></tr>
        <tr><td>Descanso</td><td>Dormí 7 horas o más casi todas las noches</td><td>La mitad de las noches</td><td>Casi nunca</td></tr>
      </table>
      <pre><code>Máximo: 10 por semana
9 o 10 → el sistema funciona
6 a 8  → ajustá lo que sacó 0 o 1
0 a 5  → simplificá: quedate con lista, 3 tareas y revisión</code></pre>
      <p><strong>El descanso cuenta:</strong> un sistema que te deja sin dormir no es un buen sistema, aunque hagas muchas tareas.</p>
      <p>Por ejemplo, si sacaste 0 en bloques porque siempre se te superponen con el trabajo, quizás el problema es el horario elegido, no la técnica.</p>` },
    { titulo: "Medir y ajustar", html: `
      <p class="idea">Al final de las dos semanas, compará con cómo estabas antes. Sin números, todo es "me parece"; con números, sabés qué funcionó.</p>
      <pre><code>                         Antes     Semana 1   Semana 2
Tareas importantes hechas  —         9 de 15    12 de 15
Pomodoros por día          0         2          3
Horas de redes por día     2,5       2          1,5
Horas de sueño promedio    6         6,5        7
Rúbrica                    —         6/10       9/10</code></pre>
      <p><strong>Preguntas para ajustar:</strong></p>
      <ol>
        <li>¿Qué parte del sistema usé casi todos los días? Esa se queda.</li>
        <li>¿Qué parte abandoné? ¿Por qué? ¿La simplifico o la saco?</li>
        <li>¿Qué cambio chico pruebo las próximas dos semanas?</li>
      </ol>
      <p><strong>Un sistema es tuyo cuando lo adaptás:</strong> no hay un sistema perfecto para todos. Lo que importa es que te sirva a vos y lo sigas usando.</p>
      <p><strong>Contalo:</strong> en una entrevista de trabajo, "¿Cómo organizás tus tareas?" es una pregunta común. Con este proyecto tenés una respuesta concreta y con números.</p>
      <p>Por ejemplo, pasar de 9 a 12 tareas importantes por semana y dormir una hora más es una mejora real, aunque no hayas hecho todo.</p>` },
  ],
  practica: [
    "Hacé el registro de tiempo de 3 días y armá tu sistema con las partes de la tabla del encargo (o al menos lista, 3 tareas y revisión). Anotá qué partes elegiste.",
    "Usá el sistema dos semanas y evaluá cada semana con la rúbrica. Anotá el puntaje de cada criterio y el total sobre 10.",
    "Completá la tabla de antes, semana 1 y semana 2 con tus números. Anotá cuál mejoró más.",
    "Respondé las 3 preguntas para ajustar y anotá el cambio chico que vas a probar las próximas dos semanas.",
  ],
  recursos: [
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
    { t: "Google Tasks: información y uso", url: "https://support.google.com/tasks/answer/7675772?hl=es" },
    { t: "Getting Things Done: qué es el método (en inglés)", url: "https://gettingthingsdone.com/what-is-gtd/" },
  ],
  quiz: [
    { q: "Si todo el sistema te parece mucho, ¿con qué empezás?", opciones: ["Con todo junto desde el lunes","Con la app más completa","Lista única, 3 tareas por día y revisión semanal","Con nada hasta tener tiempo"], correcta: 2, explicacion: "Esas tres partes son el corazón. Todo junto tienta por completo, pero se cae rápido." },
    { q: "¿Qué hacés antes de empezar a usar tu sistema?", opciones: ["Un registro de tiempo de 3 días para tener con qué comparar","Nada, arrancás directo","Comprás una agenda","Le avisás a todos"], correcta: 0, explicacion: "El registro es el \"antes\". Arrancar directo tienta, pero después no sabés si mejoraste." },
    { q: "¿Qué es una rúbrica?", opciones: ["Un tipo de agenda","Una app de tareas","Una meta SMART","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica muestra qué ajustar. Confundirla con una meta tienta, pero la meta es lo que querés lograr y la rúbrica cómo lo evaluás." },
    { q: "Hiciste muchas tareas, pero dormiste 5 horas casi todas las noches. ¿Cuánto saca \"Descanso\"?", opciones: ["2, porque hiciste muchas tareas","0","1","No se evalúa"], correcta: 1, explicacion: "El descanso cuenta aparte. Las muchas tareas tientan como compensación, pero un sistema sin descanso no se sostiene." },
    { q: "Sacaste 5 sobre 10 la primera semana. ¿Qué hacés?", opciones: ["Agregás más partes","Abandonás todo","Simplificás: te quedás con lista, 3 tareas y revisión","Te esforzás el doble igual"], correcta: 2, explicacion: "Con puntaje bajo, menos es más. Agregar partes tienta para compensar, pero suma carga." },
    { q: "Sacaste 0 en bloques porque siempre se superponen con el trabajo. ¿Qué concluís?", opciones: ["Que el problema puede ser el horario elegido, no la técnica","Que los bloques no sirven","Que tenés que dejar el trabajo","Que sos desorganizado"], correcta: 0, explicacion: "Cambiar el horario puede resolverlo. Que no sirven tienta, pero probaste en un mal momento." },
    { q: "¿Por qué conviene medir con números al final de las dos semanas?", opciones: ["Para mostrarlo en redes","Porque lo pide el curso y nada más","No conviene","Para saber qué funcionó, en vez de \"me parece\""], correcta: 3, explicacion: "Los números muestran el cambio real. \"Me parece\" tienta por rápido, pero el cansancio o el ánimo lo distorsionan." },
    { q: "Pasaste de 9 a 12 tareas importantes de 15. ¿Qué concluís?", opciones: ["Que fallaste porque no llegaste a 15","Que mejoraste de verdad, aunque no hiciste todo","Que es casualidad","Que no cambió nada"], correcta: 1, explicacion: "Es una mejora concreta. \"Fallaste\" tienta por no llegar al 100 %, pero el objetivo es mejorar, no la perfección." },
    { q: "Abandonaste los pomodoros a los 3 días. ¿Qué te preguntás?", opciones: ["Nada, sos un desastre","Cómo obligarte más","Por qué los dejaste y si conviene simplificarlos o sacarlos","Qué app comprar"], correcta: 2, explicacion: "Ajustar es parte del sistema. Obligarte más tienta, pero si algo no encaja conviene cambiarlo." },
    { q: "¿Existe un sistema perfecto para todos?", opciones: ["No: el mejor es el que te sirve a vos y seguís usando","Sí, el GTD completo","Sí, el de la app más descargada","Sí, el de las personas exitosas"], correcta: 0, explicacion: "Cada sistema se adapta. El GTD completo tienta por famoso, pero a mucha gente le resulta demasiado." },
    { q: "En una entrevista te preguntan \"¿Cómo organizás tus tareas?\". ¿Qué respondés?", opciones: ["\"Soy muy organizado\" y nada más","\"Me acuerdo de todo\"","\"Uso una app\"","Contás tu sistema con un ejemplo y los números de tu proyecto"], correcta: 3, explicacion: "Un ejemplo con números es creíble. \"Soy muy organizado\" tienta por corto, pero cualquiera lo dice." },
    { q: "Después de dos semanas, ¿qué cambio probás?", opciones: ["Cambiar todo el sistema","Uno chico, por dos semanas más","Ninguno, ya está","Cinco cambios a la vez"], correcta: 1, explicacion: "Un cambio por vez deja ver qué funciona. Cinco a la vez tientan para mejorar rápido, pero no sabés cuál sirvió." },
  ],
},
];
