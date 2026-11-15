// Temario del curso "Inglés para el trabajo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ingles-trabajo y node tools/metodologia.js ingles-trabajo
window.TEMARIO = [
{
  id: "presentarte",
  icono: "👋",
  titulo: "Presentarte y hablar de tu trabajo",
  nivel: "Básico",
  objetivos: [
    "Presentarte en inglés con tu nombre, tu puesto y lo que hacés",
    "Saludar y despedirte en el trabajo según el momento y la persona",
    "Hablar de tus tareas diarias usando el presente simple",
  ],
  lecciones: [
    { titulo: "Presentarte", video: {"id":"I_tRSrPru94","t":"How to introduce yourself · BBC Learning English (2:38)"}, html: `
      <p class="idea">La presentación en inglés de trabajo es corta y sigue casi siempre la misma estructura: saludo, nombre, puesto y qué hacés. Con 4 frases alcanza para empezar.</p>
      <pre><code>Hi, I'm Juana Pérez.            (Hola, soy Juana Pérez.)
I'm a receptionist.              (Soy recepcionista.)
I work at a dental clinic.       (Trabajo en una clínica dental.)
I manage appointments and calls. (Manejo los turnos y las llamadas.)</code></pre>
      <table>
        <tr><th>Para decir</th><th>En inglés</th></tr>
        <tr><td>Soy + puesto</td><td>I'm a cashier / I'm an assistant (a o an delante del puesto)</td></tr>
        <tr><td>Trabajo en + lugar</td><td>I work at a hotel / I work in sales</td></tr>
        <tr><td>Me encargo de…</td><td>I'm in charge of… / I handle…</td></tr>
        <tr><td>Encantada/o de conocerte</td><td>Nice to meet you.</td></tr>
      </table>
      <p><strong>"A" o "an":</strong> delante del puesto va el artículo. "An" cuando la palabra siguiente empieza con sonido de vocal: <em>an assistant, an engineer</em>; "a" en los demás casos: <em>a nurse, a cook</em>.</p>
      <p><strong>Cuando te presentan a alguien,</strong> respondé "Nice to meet you" y la otra persona suele decir "Nice to meet you too".</p>
      <p>Por ejemplo, decir "I am receptionist" (sin "a") se entiende, pero suena a error; "I'm a receptionist" es lo correcto.</p>` },
    { titulo: "Saludos y despedidas", html: `
      <p class="idea">En inglés de trabajo hay saludos más formales y más informales. Elegí según la persona y el momento, igual que en castellano con "buen día" y "hola".</p>
      <table>
        <tr><th>Momento</th><th>Más formal</th><th>Más informal</th></tr>
        <tr><td>Saludo</td><td>Good morning / Good afternoon</td><td>Hi / Hello</td></tr>
        <tr><td>Preguntar cómo está</td><td>How are you?</td><td>How's it going?</td></tr>
        <tr><td>Responder</td><td>I'm fine, thank you. And you?</td><td>Good, thanks! You?</td></tr>
        <tr><td>Despedida</td><td>Have a nice day. / Goodbye.</td><td>See you tomorrow! / Bye!</td></tr>
      </table>
      <p><strong>Good morning</strong> va hasta el mediodía; <strong>good afternoon</strong>, desde el mediodía hasta la tarde; <strong>good evening</strong>, a la noche al llegar. <strong>Good night</strong> no es un saludo: es una despedida para irse a dormir o terminar el día.</p>
      <p><strong>"How are you?" es casi un saludo:</strong> no esperan que cuentes tus problemas. Una respuesta corta y devolver la pregunta alcanza.</p>
      <p>Por ejemplo, entrar a una reunión a las 20 diciendo "Good night!" suena a que te estás yendo; lo correcto es "Good evening".</p>` },
    { titulo: "Hablar de lo que hacés", html: `
      <p class="idea">Para contar tus tareas de todos los días se usa el <strong>presente simple</strong>: el verbo en su forma básica, y con <em>he/she/it</em> se le agrega una <strong>-s</strong>.</p>
      <pre><code>I answer the phone.      She answers the phone.
I check the orders.      He checks the orders.
I work from 9 to 5.      It works well.</code></pre>
      <table>
        <tr><th>Verbo útil</th><th>Ejemplo</th></tr>
        <tr><td>answer (responder)</td><td>I answer emails every morning.</td></tr>
        <tr><td>check (controlar)</td><td>I check the stock on Mondays.</td></tr>
        <tr><td>help (ayudar)</td><td>I help customers choose products.</td></tr>
        <tr><td>prepare (preparar)</td><td>I prepare the orders.</td></tr>
        <tr><td>manage (manejar, administrar)</td><td>I manage the schedule.</td></tr>
      </table>
      <p><strong>Para negar y preguntar</strong> se usa <em>do / does</em>:</p>
      <pre><code>I don't work on Sundays.   (No trabajo los domingos.)
Do you work on weekends?   (¿Trabajás los fines de semana?)
Does she speak Spanish?    (¿Ella habla español?)</code></pre>
      <p>Por ejemplo, "She answer the phone" se entiende, pero le falta la -s: "She answers the phone".</p>` },
  ],
  practica: [
    "Escribí tu presentación de 4 frases (saludo, nombre, puesto y qué hacés) y decila en voz alta 3 veces. Anotá cuántos segundos dura.",
    "Escribí cómo saludarías en inglés a tu jefa a las 9, a un compañero a las 15 y a un cliente a las 20. Anotá los tres saludos.",
    "Escribí 5 tareas que hacés (o harías) en un trabajo con el presente simple, y después pasalas a \"she\". Anotá las 10 frases.",
  ],
  recursos: [
    { t: "Cambridge English: aprender inglés (en inglés)", url: "https://www.cambridgeenglish.org/learning-english/" },
    { t: "BBC Learning English (en inglés)", url: "https://www.bbc.co.uk/learningenglish/" },
    { t: "Diccionario Cambridge inglés-español, con pronunciación", url: "https://dictionary.cambridge.org/es/" },
  ],
  quiz: [
    { q: "Querés decir que sos recepcionista. ¿Qué frase es correcta?", opciones: ["I am receptionist.","I'm receptionist a.","I'm a receptionist.","I receptionist."], correcta: 2, explicacion: "Delante del puesto va \"a\" o \"an\". \"I am receptionist\" tienta porque se entiende, pero suena a error." },
    { q: "Si sos asistente, ¿qué artículo usás?", opciones: ["I'm an assistant.","I'm a assistant.","I'm the assistant of.","I'm assistant."], correcta: 0, explicacion: "\"An\" va delante de sonido de vocal. \"A assistant\" tienta porque \"a\" es más común, pero choca con la vocal." },
    { q: "Si te presentan a una persona, ¿qué decís?", opciones: ["Good night.","See you tomorrow.","I'm fine.","Nice to meet you."], correcta: 3, explicacion: "\"Nice to meet you\" es lo esperado. \"I'm fine\" tienta porque es una respuesta común, pero responde a \"How are you?\"." },
    { q: "Si querés decir que trabajás en un hotel, ¿cómo lo decís?", opciones: ["I work a hotel.","I work at a hotel.","I working at hotel.","I am work at a hotel."], correcta: 1, explicacion: "Presente simple: I work at. \"I am work\" tienta porque traducís \"estoy\", pero mezcla dos formas." },
    { q: "Si llegás a la oficina a las 10 de la mañana, ¿cómo saludás formalmente?", opciones: ["Good night.","Good evening.","Good morning.","Good afternoon."], correcta: 2, explicacion: "Morning es hasta el mediodía. Good afternoon tienta porque ya es tarde para vos, pero sigue siendo la mañana." },
    { q: "Entrás a una reunión a las 20. ¿Qué saludo usás?", opciones: ["Good evening.","Good night.","Good morning.","Good afternoon."], correcta: 0, explicacion: "Good evening saluda a la noche. Good night tienta por \"noche\", pero es una despedida." },
    { q: "Si un compañero te pregunta \"How are you?\", ¿qué respondés?", opciones: ["Una lista de tus problemas de la semana","Nothing.","Yes.","Good, thanks! You?"], correcta: 3, explicacion: "Es casi un saludo: respuesta corta y devolverla. Contar tus problemas tienta por sincero, pero no es lo que esperan." },
    { q: "Si terminás el día y te despedís de un cliente a las 17, ¿qué decís?", opciones: ["Good morning.","Have a nice day. / Goodbye.","Nice to meet you.","How are you?"], correcta: 1, explicacion: "Son despedidas formales. \"Nice to meet you\" tienta, pero es para cuando conocés a alguien." },
    { q: "Si querés contar tus tareas de todos los días, ¿qué tiempo verbal usás?", opciones: ["El pasado","El futuro","El presente simple","El presente continuo siempre"], correcta: 2, explicacion: "Lo que hacés habitualmente va en presente simple. El continuo tienta porque traducís \"estoy haciendo\", pero es para lo que pasa ahora." },
    { q: "Si querés decir que ella responde el teléfono, ¿qué frase es correcta?", opciones: ["She answers the phone.","She answer the phone.","She answering the phone.","She is answer the phone."], correcta: 0, explicacion: "Con he/she/it se agrega -s. \"She answer\" tienta porque es la forma de I, pero falta la -s." },
    { q: "Querés decir que no trabajás los domingos. ¿Qué frase es correcta?", opciones: ["I not work on Sundays.","I no work on Sundays.","I doesn't work on Sundays.","I don't work on Sundays."], correcta: 3, explicacion: "Se niega con don't. \"I no work\" tienta porque es como en castellano, pero en inglés se necesita do." },
    { q: "Querés preguntar si ella habla español. ¿Qué frase es correcta?", opciones: ["Do she speaks Spanish?","Does she speak Spanish?","She speak Spanish?","Does she speaks Spanish?"], correcta: 1, explicacion: "Con she se usa does y el verbo sin -s. \"Does she speaks\" tienta porque pusiste la -s, pero ya la lleva does." },
  ],
},
{
  id: "mails",
  icono: "📧",
  titulo: "Mails y mensajes en inglés",
  nivel: "Básico",
  objetivos: [
    "Escribir un mail corto con saludo, pedido y cierre en inglés",
    "Usar frases hechas para pedir, confirmar y agradecer",
    "Revisar un mail en inglés con herramientas, sin depender del traductor",
  ],
  lecciones: [
    { titulo: "La estructura de un mail", video: {"id":"3Tu1jN65slw","t":"How to write professional emails in English · English with Alex, engVid (18:30)"}, html: `
      <p class="idea">Un mail de trabajo en inglés sigue la misma lógica que en castellano: asunto claro, saludo, lo importante primero, pedido concreto y cierre. Y suele ser más corto y directo.</p>
      <pre><code>Subject: Order 2031 – delivery date

Hi Mark,

I hope you're well.
Could you confirm the delivery date for order 2031?
We need it by Friday, March 14.

Thank you,
Juana Pérez</code></pre>
      <table>
        <tr><th>Parte</th><th>Opciones</th></tr>
        <tr><td>Saludo formal</td><td>Dear Mr. Smith, / Dear Ms. Lee,</td></tr>
        <tr><td>Saludo neutro</td><td>Hi Mark, / Hello Mark,</td></tr>
        <tr><td>Frase de apertura (opcional)</td><td>I hope you're well. / Thank you for your email.</td></tr>
        <tr><td>Cierre</td><td>Best regards, / Kind regards, / Thank you,</td></tr>
      </table>
      <p><strong>Ms. y Mr.:</strong> <em>Mr.</em> para hombres; <em>Ms.</em> para mujeres, sin importar si están casadas.</p>
      <p><strong>Las fechas:</strong> en mails internacionales conviene escribir el mes con palabras ("March 14") para evitar confusiones: en Estados Unidos 03/04 es 4 de marzo, y en Argentina, 3 de abril.</p>
      <p>Por ejemplo, empezar con tres párrafos de contexto antes del pedido es tan poco claro en inglés como en castellano: el pedido va arriba.</p>` },
    { titulo: "Frases para pedir, confirmar y agradecer", html: `
      <p class="idea">En inglés de trabajo se repiten muchas frases hechas. Aprenderlas de memoria te ahorra traducir y suena natural.</p>
      <table>
        <tr><th>Para</th><th>Frase</th><th>Significa</th></tr>
        <tr><td>Pedir con amabilidad</td><td>Could you send me…?</td><td>¿Me podrías mandar…?</td></tr>
        <tr><td>Adjuntar</td><td>Please find attached the invoice.</td><td>Te adjunto la factura.</td></tr>
        <tr><td>Confirmar</td><td>I confirm the meeting on Tuesday at 10.</td><td>Confirmo la reunión del martes a las 10.</td></tr>
        <tr><td>Agradecer</td><td>Thank you for your quick reply.</td><td>Gracias por la respuesta rápida.</td></tr>
        <tr><td>Disculparse</td><td>Sorry for the delay.</td><td>Perdón por la demora.</td></tr>
        <tr><td>Dejar la puerta abierta</td><td>Let me know if you have any questions.</td><td>Avisame si tenés dudas.</td></tr>
      </table>
      <p><strong>"Could you…?" es más amable que "Send me…":</strong> en inglés, el imperativo solo suena brusco en mails de trabajo.</p>
      <p><strong>Cuidado con los "falsos amigos":</strong> palabras que parecen iguales, pero no lo son. <em>Actually</em> es "en realidad" (no "actualmente"); <em>assist</em> es "ayudar" (no "asistir a un lugar", que es <em>attend</em>).</p>
      <p>Por ejemplo, "Send me the report" es correcto, pero suena seco; "Could you send me the report?" pide lo mismo con amabilidad.</p>` },
    { titulo: "Revisar sin depender del traductor", html: `
      <p class="idea">Los traductores automáticos y la IA ayudan, pero pueden cambiar el tono o traducir mal una palabra. Lo mejor es escribir vos con frases que sabés y usar las herramientas para revisar.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th><th>Cuidado</th></tr>
        <tr><td>Diccionario (Cambridge, WordReference)</td><td>Ver qué significa una palabra y cómo se usa</td><td>Mirá los ejemplos, no solo la traducción</td></tr>
        <tr><td>Corrector del mail o del procesador</td><td>Errores de ortografía en inglés</td><td>Configurá el idioma en inglés</td></tr>
        <tr><td>Traductor o IA</td><td>Entender un texto largo; comprobar tu versión</td><td>Puede inventar o cambiar el sentido</td></tr>
      </table>
      <p><strong>Un truco para controlar:</strong> escribí tu mail en inglés, pegalo en el traductor y traducilo al castellano. Si lo que vuelve dice lo que querías, vas bien.</p>
      <pre><code>Pedido útil a una IA:
"Revisá este mail en inglés. Corregí errores de gramática sin cambiar
el sentido ni agregar datos, y explicame cada cambio en castellano."</code></pre>
      <p><strong>No pegues datos privados</strong> de clientes en la IA ni en traductores en línea.</p>
      <p>Por ejemplo, un traductor puede pasar "Te paso el presupuesto" a "I pass you the budget", que no se usa así; "I'm sending you the quote" es lo natural.</p>` },
  ],
  practica: [
    "Escribí un mail en inglés pidiendo confirmar una fecha de entrega, con asunto, saludo, pedido y cierre. Anotá cuántas palabras tiene.",
    "Escribí 6 frases con las expresiones de la tabla (pedir, adjuntar, confirmar, agradecer, disculparte, dejar la puerta abierta). Anotalas con su traducción.",
    "Pasá tu mail por el traductor de vuelta al castellano y anotá si dice lo que querías. Corregí lo que no y anotá qué cambiaste.",
  ],
  recursos: [
    { t: "BBC Learning English: English at Work (en inglés)", url: "https://www.bbc.co.uk/learningenglish/english/features/english-at-work" },
    { t: "Diccionario Cambridge inglés-español, con pronunciación", url: "https://dictionary.cambridge.org/es/" },
    { t: "WordReference: diccionario y foros", url: "https://www.wordreference.com/" },
  ],
  quiz: [
    { q: "Si le escribís por primera vez al señor Smith, un proveedor, ¿cómo saludás?", opciones: ["Hey Smithy,","Yo Smith,","Dear Mr. Smith,","Dear Smith Mr.,"], correcta: 2, explicacion: "Dear + Mr. + apellido es el saludo formal. \"Hey\" tienta por amistoso, pero es muy informal para un primer contacto." },
    { q: "Le escribís a una mujer y no sabés si está casada. ¿Qué título usás?", opciones: ["Ms.","Mrs. siempre","Miss siempre","Mr."], correcta: 0, explicacion: "Ms. sirve sin importar el estado civil. Mrs. tienta porque es conocido, pero supone que está casada." },
    { q: "Querés cerrar un mail de trabajo. ¿Qué cierre es adecuado?", opciones: ["Love,","Bye bye,","XOXO,","Best regards,"], correcta: 3, explicacion: "Best regards es estándar y neutro. \"Love\" tienta por cálido, pero es para amigos y familia." },
    { q: "Si escribís \"03/04\" a alguien de Estados Unidos, ¿qué problema puede haber?", opciones: ["Ninguno","Que lo lea como 4 de marzo: conviene escribir el mes con palabras","Que no entienda los números","Que piense que es un precio"], correcta: 1, explicacion: "En Estados Unidos va primero el mes. \"Ninguno\" tienta, pero la fecha puede cambiar por completo." },
    { q: "Querés pedir un informe con amabilidad. ¿Qué frase usás?", opciones: ["Send me the report.","Give report now.","Could you send me the report?","You send report."], correcta: 2, explicacion: "\"Could you…?\" es amable. \"Send me the report\" tienta por directo y es correcto, pero suena seco." },
    { q: "Querés decir \"Te adjunto la factura\". ¿Qué frase usás?", opciones: ["Please find attached the invoice.","I adjunct the invoice.","The invoice is attaching.","I attach you the invoice to you."], correcta: 0, explicacion: "Es la frase hecha estándar. \"I adjunct\" tienta por parecerse a \"adjuntar\", pero no se usa." },
    { q: "Si respondés un mail con una semana de demora, ¿cómo empezás?", opciones: ["Excuse me.","Pardon.","I'm sorry for nothing.","Sorry for the delay."], correcta: 3, explicacion: "\"Sorry for the delay\" es lo usual. \"Excuse me\" tienta por cortés, pero se usa para llamar la atención o pedir paso." },
    { q: "Si un cliente te escribe \"Actually, I need it on Monday\", ¿qué significa \"actually\"?", opciones: ["Actualmente","En realidad","Activamente","Exactamente"], correcta: 1, explicacion: "Es un falso amigo. \"Actualmente\" tienta por el parecido, pero en inglés es \"currently\"." },
    { q: "Querés decir que asististe a una reunión. ¿Qué verbo usás?", opciones: ["Assist: I assisted the meeting.","Help: I helped the meeting.","Attend: I attended the meeting.","Go: I goed the meeting."], correcta: 2, explicacion: "\"Attend\" es asistir a un lugar. \"Assist\" tienta por el parecido, pero significa ayudar." },
    { q: "Escribiste un mail en inglés. ¿Cómo controlás si dice lo que querías?", opciones: ["Lo traducís de vuelta al castellano con el traductor y comparás","Lo mandás sin revisar","Le preguntás al destinatario si entendió","Lo hacés más largo"], correcta: 0, explicacion: "La traducción de vuelta muestra errores de sentido. Mandarlo sin revisar tienta, pero un error puede confundir al cliente." },
    { q: "Querés que una IA revise tu mail en inglés. ¿Qué le pedís?", opciones: ["Que lo escriba de cero","Que lo haga más largo y formal","Nada, lo pegás y mandás lo que devuelva","Que corrija gramática sin cambiar el sentido ni agregar datos, y explique cada cambio"], correcta: 3, explicacion: "Así aprendés y controlás. Que lo escriba de cero tienta por rápido, pero puede cambiar lo que querías decir." },
    { q: "Si el traductor pasó \"Te paso el presupuesto\" a \"I pass you the budget\", ¿cómo lo decís natural?", opciones: ["I pass you the budget.","I'm sending you the quote.","I give budget to you passing.","I am passing the budget you."], correcta: 1, explicacion: "\"Quote\" es presupuesto de venta y \"send\" es mandar. \"Pass\" tienta por traducción literal, pero no se usa así." },
  ],
},
{
  id: "reuniones",
  icono: "💻",
  titulo: "Reuniones y videollamadas",
  nivel: "Intermedio",
  objetivos: [
    "Participar en una videollamada con frases para empezar, opinar y cerrar",
    "Pedir que repitan o aclaren sin ponerte nervioso",
    "Resolver problemas técnicos de la llamada en inglés",
  ],
  lecciones: [
    { titulo: "Frases para la reunión", video: {"id":"PLhAzAymMsY","t":"40 English phrases you need for online meetings · Maria Sheeran (5:15)"}, html: `
      <p class="idea">No hace falta un inglés perfecto para participar en una reunión: alcanza con un puñado de frases para entrar, opinar y cerrar. Tenelas anotadas cerca.</p>
      <table>
        <tr><th>Para</th><th>Frase</th></tr>
        <tr><td>Saludar al entrar</td><td>Hi everyone! / Good morning, everyone.</td></tr>
        <tr><td>Dar tu opinión</td><td>I think… / In my opinion…</td></tr>
        <tr><td>Estar de acuerdo</td><td>I agree. / That's a good idea.</td></tr>
        <tr><td>No estar de acuerdo con respeto</td><td>I see your point, but… / I'm not sure about that.</td></tr>
        <tr><td>Pedir la palabra</td><td>Can I add something?</td></tr>
        <tr><td>Resumir lo acordado</td><td>So, to sum up, we agreed to…</td></tr>
        <tr><td>Despedirte</td><td>Thank you, everyone. Have a good day!</td></tr>
      </table>
      <p><strong>Preparate antes:</strong> mirá el orden del día y escribí en inglés las 2 o 3 cosas que querés decir. Así no improvisás todo.</p>
      <p><strong>Hablá más lento de lo que te parece:</strong> se entiende más un inglés simple y pausado que uno rápido con errores.</p>
      <p>Por ejemplo, "I see your point, but I think we need more time" muestra desacuerdo sin chocar; "No, that's wrong" suena brusco.</p>` },
    { titulo: "Pedir que repitan o aclaren", html: `
      <p class="idea">No entender todo es normal, incluso para quienes hablan bien inglés. Pedir que repitan es mucho mejor que hacer como que entendiste y equivocarte después.</p>
      <table>
        <tr><th>Situación</th><th>Frase</th></tr>
        <tr><td>No escuchaste bien</td><td>Sorry, could you repeat that?</td></tr>
        <tr><td>Habla muy rápido</td><td>Could you speak a little more slowly, please?</td></tr>
        <tr><td>No entendiste una palabra</td><td>Sorry, what does "deadline" mean?</td></tr>
        <tr><td>Querés confirmar</td><td>So, you mean that… Is that right?</td></tr>
        <tr><td>Querés que lo escriban</td><td>Could you write it in the chat, please?</td></tr>
      </table>
      <p><strong>Confirmar con tus palabras</strong> ("So, you mean that the delivery is on Friday. Is that right?") es la mejor forma de no equivocarte, igual que en castellano.</p>
      <p><strong>El chat de la reunión es tu aliado:</strong> pedí que escriban fechas, números y nombres. Leer es más fácil que escuchar.</p>
      <p>Por ejemplo, un <em>deadline</em> (fecha límite) mal entendido puede hacer que entregues tarde: preguntar "What's the deadline?" lleva 3 segundos.</p>` },
    { titulo: "Problemas técnicos en inglés", html: `
      <p class="idea">En las videollamadas siempre algo falla: el micrófono, la conexión, la pantalla compartida. Tener estas frases listas te saca del apuro.</p>
      <table>
        <tr><th>Problema</th><th>Frase</th></tr>
        <tr><td>No te escuchan</td><td>Can you hear me?</td></tr>
        <tr><td>Alguien tiene el micrófono silenciado</td><td>I think you're on mute.</td></tr>
        <tr><td>La conexión anda mal</td><td>Sorry, my connection is unstable.</td></tr>
        <tr><td>No se ve la pantalla</td><td>I can't see your screen.</td></tr>
        <tr><td>Vas a compartir pantalla</td><td>Let me share my screen.</td></tr>
        <tr><td>Se cortó</td><td>Sorry, I got disconnected. Could you repeat the last part?</td></tr>
      </table>
      <p><strong>"Mute"</strong> es silenciar el micrófono; <em>"unmute"</em>, activarlo. Lo vas a escuchar mucho: "You're on mute!".</p>
      <p>Por ejemplo, hablar dos minutos con el micrófono silenciado es de lo más común; si te dicen "You're on mute", activalo y repetí: "Sorry! As I was saying…".</p>` },
  ],
  practica: [
    "Elegí 5 frases de reunión de la tabla y escribilas en una tarjeta para tener cerca. Decilas en voz alta y anotá cuál te costó pronunciar.",
    "Mirá un video corto en inglés y practicá pedir que repitan: escribí 3 preguntas de aclaración sobre lo que no entendiste.",
    "Hacé una videollamada de práctica con alguien y usá al menos 3 frases de problemas técnicos. Anotá cuáles usaste.",
  ],
  recursos: [
    { t: "BBC Learning English (en inglés)", url: "https://www.bbc.co.uk/learningenglish/" },
    { t: "BBC Learning English: English at Work (en inglés)", url: "https://www.bbc.co.uk/learningenglish/english/features/english-at-work" },
    { t: "Diccionario Cambridge inglés-español, con pronunciación", url: "https://dictionary.cambridge.org/es/" },
  ],
  quiz: [
    { q: "Si entrás a una videollamada con varias personas, ¿qué decís?", opciones: ["Goodbye.","You're on mute.","Hi everyone!","Nice to meet you too."], correcta: 2, explicacion: "\"Hi everyone\" saluda a todos. \"Nice to meet you too\" tienta, pero responde a una presentación." },
    { q: "Querés dar tu opinión. ¿Cómo empezás?", opciones: ["I think… / In my opinion…","I opinion…","My think is…","For me opinion…"], correcta: 0, explicacion: "\"I think\" es lo más simple. \"My think is\" tienta por traducción literal, pero no es correcto." },
    { q: "Si no estás de acuerdo con una propuesta, ¿qué frase es respetuosa?", opciones: ["No, that's wrong.","You are bad.","Stop talking.","I see your point, but…"], correcta: 3, explicacion: "Reconocer y después disentir no choca. \"That's wrong\" tienta por directo, pero suena brusco." },
    { q: "Si querés sumar algo a la conversación, ¿qué preguntás?", opciones: ["I talk now.","Can I add something?","Silence!","Give me the word."], correcta: 1, explicacion: "Es la forma amable de pedir la palabra. \"Give me the word\" tienta por traducir \"dame la palabra\", pero no se dice así." },
    { q: "¿Qué conviene hacer antes de una reunión en inglés?", opciones: ["Improvisar todo","No ir","Escribir en inglés las 2 o 3 cosas que querés decir","Leer un libro de gramática entero"], correcta: 2, explicacion: "Preparar lo tuyo baja los nervios. Improvisar tienta porque no da trabajo, pero te trabás más." },
    { q: "Si no escuchaste bien lo que dijeron, ¿qué decís?", opciones: ["Sorry, could you repeat that?","Nada, hacés como que entendiste","What?!","Repeat."], correcta: 0, explicacion: "Pedir que repitan es normal. Hacer como que entendiste tienta para no quedar mal, pero después te equivocás." },
    { q: "Si hablan muy rápido, ¿qué pedís?", opciones: ["Speak slow!","Stop!","More slow you.","Could you speak a little more slowly, please?"], correcta: 3, explicacion: "La frase completa es amable. \"Speak slow!\" tienta por corto, pero suena a orden." },
    { q: "Si no sabés qué significa \"deadline\", ¿qué preguntás?", opciones: ["What is mean deadline?","Sorry, what does \"deadline\" mean?","Deadline what?","Nada, lo adivinás"], correcta: 1, explicacion: "Es la forma correcta de preguntar. Adivinar tienta, pero \"deadline\" es la fecha límite y no conviene errarle." },
    { q: "Querés confirmar que entendiste que la entrega es el viernes. ¿Qué decís?", opciones: ["Friday?","OK.","So, you mean that the delivery is on Friday. Is that right?","Yes, yes."], correcta: 2, explicacion: "Confirmar con tus palabras evita errores. \"OK\" tienta por rápido, pero no confirma nada." },
    { q: "Si te dicen un número de pedido largo y no lo podés anotar, ¿qué pedís?", opciones: ["Could you write it in the chat, please?","Again, again.","Number?","Nada"], correcta: 0, explicacion: "Leer es más fácil que escuchar. \"Number?\" tienta por corto, pero no pide que lo escriban." },
    { q: "Si alguien habla, pero no se escucha nada, ¿qué le decís?", opciones: ["You are silent person.","Speak louder!","Your microphone is dead.","I think you're on mute."], correcta: 3, explicacion: "\"On mute\" es silenciado. \"Speak louder\" tienta, pero el problema es el micrófono, no el volumen." },
    { q: "Si se te cortó la conexión y volvés a entrar, ¿qué decís?", opciones: ["I'm back, continue.","Sorry, I got disconnected. Could you repeat the last part?","Internet bad.","Nada, seguís como si nada"], correcta: 1, explicacion: "Avisar y pedir lo que te perdiste es lo correcto. Seguir como si nada tienta, pero te perdiste algo." },
  ],
},
{
  id: "telefono",
  icono: "☎️",
  titulo: "Teléfono, números y fechas",
  nivel: "Intermedio",
  objetivos: [
    "Atender y hacer llamadas simples de trabajo en inglés",
    "Decir y entender números, precios, horarios y fechas",
    "Deletrear nombres y mails sin errores",
  ],
  lecciones: [
    { titulo: "Atender y llamar", video: {"id":"2sN4dkzk_Rc","t":"Answering the phone (message taking) · English Together (5:16)"}, html: `
      <p class="idea">El teléfono en inglés asusta porque no ves a la otra persona. Con un saludo armado, frases para tomar un mensaje y la confianza de pedir que repitan, se puede.</p>
      <table>
        <tr><th>Momento</th><th>Frase</th></tr>
        <tr><td>Atender</td><td>Good morning, Dental Clinic, Juana speaking. How can I help you?</td></tr>
        <tr><td>Preguntar quién llama</td><td>May I ask who's calling?</td></tr>
        <tr><td>Pedir que espere</td><td>Could you hold on a moment, please?</td></tr>
        <tr><td>La persona no está</td><td>I'm sorry, she's not available right now.</td></tr>
        <tr><td>Tomar un mensaje</td><td>Can I take a message?</td></tr>
        <tr><td>Llamar a alguien</td><td>Hi, this is Juana from the Dental Clinic. Could I speak to Mark?</td></tr>
      </table>
      <p><strong>Por teléfono se dice "this is…", no "I am…":</strong> "Hi, this is Juana" es la forma natural de presentarse.</p>
      <p><strong>Antes de llamar,</strong> escribí lo que vas a decir y las preguntas. Tenelo adelante.</p>
      <p>Por ejemplo, "Hold on a moment, please" con un "Thank you for waiting" al volver suena tan profesional como en castellano.</p>` },
    { titulo: "Números, precios y horarios", html: `
      <p class="idea">Los números son lo que más se confunde por teléfono. Algunas reglas simples y repetir siempre los números en voz alta evitan la mayoría de los errores.</p>
      <table>
        <tr><th>Qué</th><th>Cómo se dice</th></tr>
        <tr><td>13 y 30</td><td>thir<strong>teen</strong> (acento al final) y <strong>thir</strong>ty (acento al principio)</td></tr>
        <tr><td>Teléfono 4523-0011</td><td>four five two three, zero zero one one (o "double one")</td></tr>
        <tr><td>Precio US$ 25.50</td><td>twenty-five dollars and fifty cents</td></tr>
        <tr><td>Hora 9:30</td><td>nine thirty / half past nine</td></tr>
        <tr><td>Hora 14:15</td><td>two fifteen p.m. / a quarter past two</td></tr>
      </table>
      <p><strong>Decimales y miles:</strong> en inglés el punto separa decimales y la coma separa miles, al revés que en Argentina. <em>1,500.50</em> es "mil quinientos con cincuenta".</p>
      <pre><code>Argentina:   $ 1.500,50
Inglés:      $ 1,500.50</code></pre>
      <p><strong>Horario de 12 horas:</strong> en Estados Unidos se usa <em>a.m.</em> (mañana) y <em>p.m.</em> (tarde y noche). "3 p.m." son las 15.</p>
      <p>Por ejemplo, entender "thirty" cuando dijeron "thirteen" en un precio es un error de 17 dólares: repetí siempre el número para confirmar.</p>` },
    { titulo: "Fechas y deletreo", html: `
      <p class="idea">Las fechas y los nombres deletreados son los otros dos lugares donde aparecen errores. Saber el alfabeto en inglés y la forma de decir las fechas los evita.</p>
      <table>
        <tr><th>Qué</th><th>Cómo</th></tr>
        <tr><td>Días</td><td>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (con mayúscula)</td></tr>
        <tr><td>Fecha hablada</td><td>Friday, March fourteenth / the fourteenth of March</td></tr>
        <tr><td>Fecha escrita</td><td>March 14 (Estados Unidos) / 14 March (Reino Unido)</td></tr>
        <tr><td>Arroba en un mail</td><td>at (juana.perez@… = "juana dot perez at…")</td></tr>
        <tr><td>Punto en un mail</td><td>dot</td></tr>
      </table>
      <p><strong>Las letras que más se confunden</strong> al deletrear en inglés: la <em>E</em> se dice "i", la <em>I</em> se dice "ai", la <em>A</em> se dice "ei", la <em>G</em> se dice "yi" y la <em>J</em> se dice "yei".</p>
      <pre><code>Deletrear "Pérez":  P - E - R - E - Z
                    "pi - i - ar - i - zi" (en Estados Unidos)</code></pre>
      <p><strong>Un truco:</strong> usá palabras para las letras dudosas: "P as in Paris, E as in England".</p>
      <p>Por ejemplo, si deletreás tu mail diciendo "e" como en castellano, del otro lado van a escribir una "a": aprender cómo suenan las vocales en inglés evita mails que nunca llegan.</p>` },
  ],
  practica: [
    "Escribí el saludo para atender el teléfono de un lugar en inglés y una frase para tomar un mensaje. Decilos en voz alta y anotá cuántas veces practicaste.",
    "Escribí en inglés 5 números de la vida real (un teléfono, un precio, una hora, un año y un número con decimales) y cómo se dicen. Anotalos.",
    "Deletreá tu nombre completo y tu mail en inglés y grabate. Escuchalo y anotá qué letras te costaron.",
  ],
  recursos: [
    { t: "Cambridge English: aprender inglés (en inglés)", url: "https://www.cambridgeenglish.org/learning-english/" },
    { t: "Diccionario Cambridge inglés-español, con pronunciación", url: "https://dictionary.cambridge.org/es/" },
    { t: "BBC Learning English (en inglés)", url: "https://www.bbc.co.uk/learningenglish/" },
  ],
  quiz: [
    { q: "Si atendés el teléfono de una clínica en inglés, ¿qué decís?", opciones: ["Hello? Who?","Yes?","Good morning, Dental Clinic, Juana speaking. How can I help you?","Dental. Speak."], correcta: 2, explicacion: "El saludo completo ubica a quien llama. \"Hello? Who?\" tienta por corto, pero es brusco." },
    { q: "Querés saber quién llama. ¿Qué preguntás?", opciones: ["May I ask who's calling?","Who are you?","Your name now.","Who is?"], correcta: 0, explicacion: "\"May I ask…\" es amable. \"Who are you?\" tienta por directo, pero suena desconfiado." },
    { q: "Si te presentás por teléfono, ¿cómo lo decís?", opciones: ["Hi, I am the Juana.","Hi, here Juana.","Hi, my is Juana.","Hi, this is Juana from the Dental Clinic."], correcta: 3, explicacion: "Por teléfono se usa \"this is\". \"Here Juana\" tienta por traducción de \"acá Juana\", pero no se usa." },
    { q: "Si la persona que buscan no está, ¿qué ofrecés?", opciones: ["Call later.","Can I take a message?","She is not.","Bye."], correcta: 1, explicacion: "Ofrecer tomar un mensaje es lo profesional. \"Call later\" tienta por corto, pero suena a que cortás." },
    { q: "Si por teléfono no sabés si te dijeron \"thirteen\" o \"thirty\", ¿cómo los diferenciás?", opciones: ["No se diferencian","Thirteen es más largo siempre","Thirteen lleva el acento al final; thirty, al principio","Por el contexto solamente"], correcta: 2, explicacion: "El acento marca la diferencia. \"No se diferencian\" tienta, pero sí: y conviene confirmar repitiendo." },
    { q: "Ves escrito \"1,500.50\" en un mail en inglés. ¿Cuánto es?", opciones: ["Mil quinientos con cincuenta","Uno coma quinientos","Ciento cincuenta mil cincuenta","Quince mil"], correcta: 0, explicacion: "En inglés la coma separa miles y el punto decimales. \"Uno coma quinientos\" tienta por la costumbre argentina, pero es al revés." },
    { q: "Si te dicen una reunión a las \"3 p.m.\", ¿a qué hora es?", opciones: ["A las 3 de la mañana","A las 13","A las 18","A las 15"], correcta: 3, explicacion: "p.m. es tarde. \"3 de la mañana\" tienta, pero eso es a.m." },
    { q: "Si querés decir \"nueve y media\" en inglés, ¿cómo lo decís?", opciones: ["Nine and half","Nine thirty / half past nine","Half nine past","Nine media"], correcta: 1, explicacion: "Las dos formas son correctas. \"Nine and half\" tienta por traducción literal, pero no se usa así." },
    { q: "Si escribís un mail en inglés con un día de la semana, ¿cómo lo escribís?", opciones: ["Con minúscula, como en castellano","Todo en mayúsculas","Con mayúscula: Monday, Tuesday…","Abreviados siempre"], correcta: 2, explicacion: "En inglés van con mayúscula. \"Con minúscula\" tienta por la costumbre del castellano." },
    { q: "Le dictás tu mail juana.perez@… por teléfono. ¿Cómo decís \"@\" y \".\"?", opciones: ["\"at\" y \"dot\"","\"arroba\" y \"punto\"","\"a\" y \"point\"","\"circle\" y \"stop\""], correcta: 0, explicacion: "Arroba es \"at\" y punto es \"dot\". \"Point\" tienta por \"punto\", pero en direcciones se dice dot." },
    { q: "Deletreás tu apellido y decís la \"E\" como en castellano. ¿Qué puede pasar?", opciones: ["Nada","Que no te escuchen","Que escriban una \"O\"","Que escriban una \"A\": en inglés la E suena \"i\""], correcta: 3, explicacion: "Las vocales suenan distinto. \"Nada\" tienta, pero un mail mal escrito no llega." },
    { q: "Al deletrear, una letra no queda clara. ¿Qué truco usás?", opciones: ["Repetirla más fuerte","Decir una palabra: \"P as in Paris\"","Saltearla","Escribirla en el aire"], correcta: 1, explicacion: "Una palabra conocida aclara la letra. Más fuerte tienta, pero el problema es el sonido, no el volumen." },
  ],
},
{
  id: "clientes",
  icono: "🧳",
  titulo: "Atender clientes y turistas",
  nivel: "Intermedio",
  objetivos: [
    "Recibir y ofrecer ayuda a un cliente que habla inglés",
    "Dar indicaciones, precios y formas de pago",
    "Resolver un problema o un reclamo simple en inglés",
  ],
  lecciones: [
    { titulo: "Recibir y ofrecer ayuda", html: `
      <p class="idea">En comercios, hoteles, restaurantes y lugares turísticos de Argentina es común atender a personas que hablan inglés. Con unas pocas frases amables, la mayoría de las situaciones se resuelven.</p>
      <table>
        <tr><th>Para</th><th>Frase</th></tr>
        <tr><td>Saludar y ofrecer ayuda</td><td>Hi! Can I help you? / How can I help you?</td></tr>
        <tr><td>Preguntar qué busca</td><td>Are you looking for anything in particular?</td></tr>
        <tr><td>Ofrecer algo</td><td>Would you like to try it?</td></tr>
        <tr><td>Pedir un momento</td><td>Just a moment, please.</td></tr>
        <tr><td>Agradecer y despedir</td><td>Thank you! Enjoy your stay in Buenos Aires!</td></tr>
      </table>
      <p><strong>"Would you like…?" es la forma amable de ofrecer:</strong> "Would you like a bag?" (¿Quiere una bolsa?).</p>
      <p><strong>Si no entendés,</strong> sonreí y pedí que repitan despacio: "Sorry, could you say that again more slowly?". Mostrar el producto, señalar o escribir un número también sirven.</p>
      <p>Por ejemplo, en una heladería, "Would you like a cone or a cup?" (¿Cucurucho o vasito?) resuelve la pregunta más común sin necesitar mucho más.</p>` },
    { titulo: "Indicaciones, precios y pagos", html: `
      <p class="idea">Las preguntas más comunes de un cliente que habla inglés son dónde queda algo, cuánto cuesta y cómo puede pagar. Estas frases cubren casi todas.</p>
      <table>
        <tr><th>Situación</th><th>Frase</th></tr>
        <tr><td>Dónde queda algo</td><td>It's on the left / on the right / straight ahead.</td></tr>
        <tr><td>Más indicaciones</td><td>Go two blocks and turn left. It's next to the bank.</td></tr>
        <tr><td>Precio</td><td>It's twenty thousand pesos.</td></tr>
        <tr><td>Formas de pago</td><td>You can pay in cash or by card.</td></tr>
        <tr><td>Factura o ticket</td><td>Here's your receipt.</td></tr>
        <tr><td>No aceptan algo</td><td>Sorry, we don't accept dollars. There's an exchange office nearby.</td></tr>
      </table>
      <p><strong>Block</strong> es "cuadra". <em>Next to</em> es "al lado de"; <em>across from</em>, "enfrente de"; <em>on the corner</em>, "en la esquina".</p>
      <p><strong>Precios en pesos:</strong> decí el número completo y, si hace falta, mostralo escrito en la calculadora o el celular. Los números grandes en inglés confunden.</p>
      <pre><code>$ 20.000   → twenty thousand pesos
$ 150.000  → one hundred and fifty thousand pesos</code></pre>
      <p>Por ejemplo, señalar mientras decís "Go straight ahead and turn right at the corner" ayuda mucho más que la frase sola.</p>` },
    { titulo: "Resolver un problema", html: `
      <p class="idea">Cuando algo sale mal (un producto fallado, un error en la cuenta, una reserva que no aparece), las mismas reglas de atención al cliente sirven en inglés: escuchar, disculparse y proponer una solución.</p>
      <table>
        <tr><th>Paso</th><th>Frase</th></tr>
        <tr><td>Reconocer</td><td>I understand. I'm sorry about that.</td></tr>
        <tr><td>Preguntar</td><td>Could you tell me what happened?</td></tr>
        <tr><td>Proponer</td><td>I can change it for a new one. / I can give you a refund.</td></tr>
        <tr><td>Derivar</td><td>Let me call my manager. She can help you.</td></tr>
        <tr><td>Cerrar</td><td>Is everything OK now? Thank you for your patience.</td></tr>
      </table>
      <p><strong>Refund</strong> es "devolución del dinero"; <em>exchange</em>, "cambio"; <em>receipt</em>, "ticket o comprobante".</p>
      <p><strong>Si no podés resolverlo en inglés,</strong> buscá a un compañero que hable mejor o usá el traductor del celular con el cliente: lo importante es resolver, no quedar bien con tu inglés.</p>
      <p>Por ejemplo, "I'm sorry about that. Let me check" dicho con calma baja la tensión aunque después tengas que buscar ayuda.</p>` },
  ],
  practica: [
    "Elegí un lugar donde trabajás o te gustaría trabajar y escribí 5 frases en inglés que usarías con un cliente. Decilas en voz alta y anotá cuál te costó más.",
    "Escribí cómo le indicarías a un turista cómo llegar desde tu trabajo (o tu casa) a un lugar cercano, en 3 frases. Anotalas.",
    "Practicá con alguien un reclamo simple en inglés con los 5 pasos. Anotá qué frase usaste en cada paso.",
  ],
  recursos: [
    { t: "BBC Learning English (en inglés)", url: "https://www.bbc.co.uk/learningenglish/" },
    { t: "Diccionario Cambridge inglés-español, con pronunciación", url: "https://dictionary.cambridge.org/es/" },
    { t: "WordReference: diccionario y foros", url: "https://www.wordreference.com/" },
  ],
  quiz: [
    { q: "Entra un turista a tu local. ¿Qué decís?", opciones: ["What you want?","Speak Spanish?","Hi! How can I help you?","Go away."], correcta: 2, explicacion: "\"How can I help you?\" es amable y completo. \"What you want?\" tienta por directo, pero es incorrecto y brusco." },
    { q: "Querés ofrecer una bolsa. ¿Qué frase usás?", opciones: ["Would you like a bag?","You want bag?","Bag?","Take bag."], correcta: 0, explicacion: "\"Would you like…?\" es la forma amable de ofrecer. \"You want bag?\" tienta por corto, pero suena brusco." },
    { q: "No entendiste lo que te dijo un cliente. ¿Qué hacés?", opciones: ["Hacés como que entendiste","Le hablás en castellano más fuerte","Te vas","Pedís con una sonrisa que lo repita más despacio"], correcta: 3, explicacion: "Pedir que repitan es normal. Hacer como que entendiste tienta, pero le das algo que no pidió." },
    { q: "En una heladería querés preguntar \"¿cucurucho o vasito?\". ¿Cómo lo decís?", opciones: ["Cone or glass?","Would you like a cone or a cup?","You like cucurucho?","Cone cup?"], correcta: 1, explicacion: "Cone es cucurucho y cup, vasito. \"Glass\" tienta por \"vaso\", pero es de vidrio." },
    { q: "Si un cliente pregunta dónde queda el baño y está a la izquierda, ¿qué decís?", opciones: ["It's in the left.","Is left.","It's on the left.","Left it is."], correcta: 2, explicacion: "Se dice \"on the left\". \"In the left\" tienta por traducir \"en\", pero no es correcto." },
    { q: "Si un turista te pregunta \"How many blocks?\", ¿qué significa \"block\"?", opciones: ["Cuadra","Bloqueado","Edificio","Esquina"], correcta: 0, explicacion: "\"Go two blocks\" es \"caminá dos cuadras\". \"Bloqueado\" tienta por el parecido, pero no en este contexto." },
    { q: "Querés decir que se puede pagar en efectivo o con tarjeta. ¿Qué frase usás?", opciones: ["You can pay with cash or with card always.","Pay effective or card.","Cash card yes.","You can pay in cash or by card."], correcta: 3, explicacion: "Es la frase estándar. \"Pay effective\" tienta por traducir \"efectivo\", pero se dice cash." },
    { q: "Si un precio es $ 20.000, ¿cómo lo decís en inglés?", opciones: ["Twenty point zero pesos","Twenty thousand pesos","Two thousand pesos","Twenty mil pesos"], correcta: 1, explicacion: "20.000 es twenty thousand. \"Twenty point zero\" tienta por el punto argentino, pero en inglés el punto es decimal." },
    { q: "Un turista quiere pagar en dólares y no aceptan. ¿Qué le decís?", opciones: ["No dollars. Bye.","Dollars no good.","Sorry, we don't accept dollars. There's an exchange office nearby.","You must pesos."], correcta: 2, explicacion: "Disculparse y ofrecer una alternativa ayuda. \"No dollars. Bye.\" tienta por corto, pero deja al cliente sin solución." },
    { q: "Si un cliente reclama un producto fallado, ¿qué decís primero?", opciones: ["I understand. I'm sorry about that.","Not my problem.","It was OK when you bought it.","No refund."], correcta: 0, explicacion: "Reconocer baja la tensión. \"Not my problem\" tienta si no fue tu culpa, pero el cliente se enoja más." },
    { q: "Si un cliente te pide un \"refund\", ¿qué te está pidiendo?", opciones: ["Recibo","Descuento","Cambio de producto","Devolución del dinero"], correcta: 3, explicacion: "Refund es devolver el dinero. \"Cambio\" tienta, pero eso es exchange." },
    { q: "No podés resolver un reclamo en inglés. ¿Qué hacés?", opciones: ["Lo dejás sin resolver","Buscás a un compañero que hable mejor o usás el traductor con el cliente","Le decís que vuelva con alguien que hable castellano","Le contestás cualquier cosa"], correcta: 1, explicacion: "Lo importante es resolver. Pedirle que vuelva tienta, pero el cliente se va molesto." },
  ],
},
{
  id: "entrevista",
  icono: "🤝",
  titulo: "Entrevista y CV en inglés",
  nivel: "Avanzado",
  objetivos: [
    "Responder \"Tell me about yourself\" en inglés en 1 minuto",
    "Contar una experiencia con el pasado simple y el método STAR",
    "Describir tu nivel de inglés con honestidad y preparar preguntas para el final",
  ],
  lecciones: [
    { titulo: "\"Tell me about yourself\"", video: {"id":"KN2jyw6D1ak","t":"How to prepare for an interview · English at Work · BBC Learning English (4:36)"}, html: `
      <p class="idea">Si una entrevista tiene parte en inglés, casi siempre empieza con "Tell me about yourself" (contame de vos). Prepará una respuesta de 1 minuto con presente, pasado y futuro, igual que en castellano.</p>
      <pre><code>Present:  I'm a receptionist at a dental clinic. I manage
          appointments, calls and payments.
Past:     Before that, I worked in a shop for two years,
          where I helped customers every day.
Future:   Now I'm looking for a position in a hotel, because
          I enjoy working with people from other countries.</code></pre>
      <table>
        <tr><th>Parte</th><th>Frases útiles</th></tr>
        <tr><td>Presente</td><td>I'm a… / I work as a… / I'm responsible for…</td></tr>
        <tr><td>Pasado</td><td>Before that, I worked… / I have experience in…</td></tr>
        <tr><td>Futuro</td><td>I'm looking for… / I'd like to…</td></tr>
      </table>
      <p><strong>Memorizá las ideas, no el texto exacto:</strong> si te trabás con una palabra, seguís con la idea.</p>
      <p><strong>Practicala en voz alta muchas veces:</strong> en inglés, la práctica pesa todavía más que en castellano.</p>
      <p>Por ejemplo, una respuesta de 1 minuto bien practicada te da confianza para todo lo que sigue en la entrevista.</p>` },
    { titulo: "Contar experiencias en pasado", html: `
      <p class="idea">Para contar lo que hiciste se usa el <strong>pasado simple</strong>. Muchos verbos agregan <strong>-ed</strong>; otros son irregulares y hay que aprenderlos.</p>
      <table>
        <tr><th>Regular (-ed)</th><th>Irregular</th></tr>
        <tr><td>work → worked</td><td>do → did</td></tr>
        <tr><td>help → helped</td><td>make → made</td></tr>
        <tr><td>organize → organized</td><td>lead → led</td></tr>
        <tr><td>solve → solved</td><td>find → found</td></tr>
      </table>
      <p><strong>Una historia con el método STAR, en inglés:</strong></p>
      <pre><code>Situation: In my last job, the card machine stopped working on a busy Saturday.
Task:      I had to keep serving customers.
Action:    I asked a colleague to call the bank, and I accepted
           cash and transfers.
Result:    We didn't lose any sales that day.</code></pre>
      <p><strong>Preguntas en pasado</strong> llevan <em>did</em> y el verbo en su forma básica: "Did you work in a team?" — "Yes, I did."</p>
      <p>El curso "Entrevistas de trabajo" de este sitio explica el método STAR en detalle.</p>
      <p>Por ejemplo, "I work in a shop for two years" mezcla presente y pasado; "I worked in a shop for two years" es lo correcto.</p>` },
    { titulo: "Tu nivel de inglés y tus preguntas", html: `
      <p class="idea">Te van a preguntar cuánto inglés sabés. Lo mejor es ser honesto y concreto: qué podés hacer en inglés, y qué estás haciendo para mejorar.</p>
      <table>
        <tr><th>Respuesta floja</th><th>Respuesta concreta</th></tr>
        <tr><td>"My English is very good." (y no lo es)</td><td>"I can answer emails and help customers. I'm improving my speaking with a weekly course."</td></tr>
        <tr><td>"My English is bad, sorry."</td><td>"My English is basic, but I can handle simple conversations at work."</td></tr>
      </table>
      <p><strong>Los niveles A1 a C2</strong> son una escala internacional (el Marco Común Europeo): A1 y A2 son básicos; B1 y B2, intermedios; C1 y C2, avanzados. Si no hiciste un examen, no digas un nivel que no podés demostrar.</p>
      <p><strong>Preguntas para el final</strong> (también en inglés):</p>
      <pre><code>What does a typical day look like in this position?
What are the next steps in the process?</code></pre>
      <p><strong>En el CV en inglés,</strong> el formato es el mismo, pero sin foto ni datos personales como estado civil (en muchos países no se ponen) y con los verbos en pasado para trabajos anteriores.</p>
      <p>Por ejemplo, decir "B2" sin poder sostener una charla puede salir mal si la entrevista sigue en inglés; describir lo que podés hacer es más seguro.</p>` },
  ],
  practica: [
    "Escribí tu \"Tell me about yourself\" con presente, pasado y futuro, y decilo en voz alta con reloj. Anotá cuánto duró.",
    "Escribí una historia en inglés con el método STAR y verbos en pasado. Marcá los verbos regulares e irregulares y anotá cuántos de cada uno usaste.",
    "Escribí cómo describirías tu nivel de inglés con lo que podés hacer, y 2 preguntas para el final. Anotalas.",
  ],
  recursos: [
    { t: "BBC Learning English: English at Work (en inglés)", url: "https://www.bbc.co.uk/learningenglish/english/features/english-at-work" },
    { t: "BBC Learning English: curso de nivel intermedio bajo (en inglés)", url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate" },
    { t: "Diccionario Cambridge inglés-español, con pronunciación", url: "https://dictionary.cambridge.org/es/" },
  ],
  quiz: [
    { q: "Te dicen \"Tell me about yourself\". ¿Qué estructura usás?", opciones: ["Tu vida desde que naciste","Solo tu nombre","Presente, pasado y futuro, en 1 minuto","Tus hobbies"], correcta: 2, explicacion: "La misma estructura que en castellano. Tu vida desde que naciste tienta, pero no entra en un minuto." },
    { q: "Si querés decir que buscás un puesto en un hotel, ¿cómo lo decís?", opciones: ["I'm looking for a position in a hotel.","I search a position hotel.","I am look for hotel.","I looking position."], correcta: 0, explicacion: "\"Looking for\" es buscar. \"I search a position\" tienta por traducción de \"busco\", pero no se dice así." },
    { q: "¿Conviene memorizar la respuesta palabra por palabra?", opciones: ["Sí, es lo más seguro","Sí, y leerla","No hace falta prepararla","No: memorizás las ideas, así si te trabás seguís"], correcta: 3, explicacion: "Las ideas te permiten seguir. Palabra por palabra tienta por seguro, pero un olvido te desarma." },
    { q: "¿Qué tiempo verbal usás para contar lo que hiciste en un trabajo anterior?", opciones: ["El presente simple","El pasado simple","El futuro","El presente continuo"], correcta: 1, explicacion: "Lo terminado va en pasado. El presente tienta porque es lo que más practicaste, pero cambia el sentido." },
    { q: "Querés decir que trabajaste en un comercio dos años. ¿Qué frase es correcta?", opciones: ["I work in a shop for two years.","I working in a shop two years.","I worked in a shop for two years.","I did worked in a shop."], correcta: 2, explicacion: "Pasado simple: worked. \"I work\" tienta por ser la forma base, pero dice que trabajás ahora." },
    { q: "Si querés contar que lideraste un equipo, ¿cuál es el pasado de \"lead\"?", opciones: ["Led","Leaded","Leading","Lead"], correcta: 0, explicacion: "Es irregular: led. \"Leaded\" tienta por la regla del -ed, pero no se usa." },
    { q: "Si te preguntan \"Did you work in a team?\", ¿cómo respondés corto?", opciones: ["Yes, I worked did.","Yes, I do.","Yes, I was.","Yes, I did."], correcta: 3, explicacion: "Se responde con did. \"Yes, I do\" tienta porque es la forma del presente, pero la pregunta es en pasado." },
    { q: "Tu inglés es básico. ¿Qué respuesta conviene en la entrevista?", opciones: ["\"My English is very good.\"","\"My English is basic, but I can handle simple conversations at work.\"","\"My English is bad, sorry.\"","No responder"], correcta: 1, explicacion: "Honesto y concreto. \"Very good\" tienta para quedar bien, pero si la entrevista sigue en inglés se nota." },
    { q: "Si un aviso pide \"English level B1\", ¿qué indican los niveles A1 a C2?", opciones: ["Tipos de visa","Notas del secundario","Una escala internacional de nivel de idioma: de básico a avanzado","Puestos de trabajo"], correcta: 2, explicacion: "Es el Marco Común Europeo. Notas del secundario tienta por las letras, pero no tiene que ver." },
    { q: "Si nunca hiciste un examen y no podés sostener una charla en inglés, ¿decís \"B2\"?", opciones: ["No: describís lo que podés hacer, sin decir un nivel que no podés demostrar","Sí, suena bien","Sí, nadie lo controla","Sí, y C1 mejor"], correcta: 0, explicacion: "Un nivel que no podés demostrar se nota. \"Nadie lo controla\" tienta, pero la entrevista puede seguir en inglés." },
    { q: "Si al final te preguntan \"Do you have any questions?\", ¿qué podés preguntar?", opciones: ["No.","How much vacation?","When I start?","What are the next steps in the process?"], correcta: 3, explicacion: "Preguntar por los próximos pasos muestra interés. \"No\" tienta por timidez, pero desperdicia el momento." },
    { q: "Armás tu CV en inglés. ¿Qué cambia respecto del argentino?", opciones: ["Nada","En muchos países no se pone foto ni estado civil, y los trabajos anteriores van en pasado","Se pone la foto más grande","Se agregan los datos de tus padres"], correcta: 1, explicacion: "Las costumbres cambian según el país. \"Nada\" tienta, pero algunos datos pueden jugar en contra." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu kit de inglés para el trabajo",
  nivel: "Avanzado",
  objetivos: [
    "Armar un kit con frases para tu puesto: presentación, mails, teléfono y clientes",
    "Practicar 3 situaciones y evaluarlas con una rúbrica",
    "Armar un plan para seguir mejorando el inglés",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>kit de inglés para el trabajo</strong>: las frases y textos que vas a usar en tu puesto, listos para tener a mano, más la práctica de 3 situaciones.</p>
      <table>
        <tr><th>Parte del kit</th><th>Módulo</th></tr>
        <tr><td>Tu presentación de 4 frases</td><td>Presentarte</td></tr>
        <tr><td>Un mail modelo de tu trabajo (pedido o respuesta)</td><td>Mails y mensajes</td></tr>
        <tr><td>Tarjeta con 8 frases de reunión y de problemas técnicos</td><td>Reuniones</td></tr>
        <tr><td>Saludo telefónico y formulario de mensaje en inglés</td><td>Teléfono</td></tr>
        <tr><td>10 frases para clientes de tu rubro</td><td>Atender clientes</td></tr>
        <tr><td>Tu "Tell me about yourself" y una historia STAR</td><td>Entrevista</td></tr>
      </table>
      <p><strong>Adaptalo a tu rubro:</strong> una moza necesita frases del menú; un administrativo, de facturas; un técnico, de herramientas. Agregá 10 palabras propias de tu trabajo con su pronunciación (el diccionario Cambridge tiene audio).</p>
      <p><strong>Las 3 situaciones para practicar</strong> (con otra persona o grabándote):</p>
      <ol>
        <li>Atender un llamado y tomar un mensaje.</li>
        <li>Atender a un cliente que pregunta un precio y cómo pagar.</li>
        <li>Responder "Tell me about yourself".</li>
      </ol>
      <p>Por ejemplo, el kit de alguien que trabaja en un hotel tendría frases de reservas, horarios del desayuno y cómo llegar a los lugares turísticos.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar cada situación practicada.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Se entiende</td><td>La otra persona entendió todo</td><td>Entendió con alguna repetición</td><td>No se entendió</td></tr>
        <tr><td>Frases hechas</td><td>Usó las frases del kit con naturalidad</td><td>Las usó leyendo</td><td>Tradujo palabra por palabra</td></tr>
        <tr><td>Gramática básica</td><td>Presente y pasado bien usados</td><td>Algún error que no cambia el sentido</td><td>Errores que confunden</td></tr>
        <tr><td>Números y datos</td><td>Dijo y confirmó números, fechas o nombres</td><td>Los dijo sin confirmar</td><td>Errores en los datos</td></tr>
        <tr><td>Estrategias</td><td>Pidió que repitan o aclaren cuando hizo falta</td><td>Lo hizo a medias</td><td>Hizo como que entendió</td></tr>
        <tr><td>Trato</td><td>Amable y profesional</td><td>Algo seco</td><td>Brusco</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → practicá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios</code></pre>
      <p><strong>No buscás un inglés perfecto:</strong> buscás que se entienda y que resuelvas. Un error de gramática que no cambia el sentido vale mucho menos que un número mal dicho.</p>
      <p>Por ejemplo, si en la situación del teléfono no confirmaste el número, sacaste 1 en "Números y datos": practicá repetirlo siempre.</p>` },
    { titulo: "Seguir mejorando", html: `
      <p class="idea">El inglés se mantiene con un poco de práctica todos los días. Un plan simple y sostenido rinde más que un curso intensivo que abandonás.</p>
      <table>
        <tr><th>Habilidad</th><th>Práctica de 10 a 15 minutos</th></tr>
        <tr><td>Escuchar</td><td>Un episodio corto de BBC Learning English, o un video con subtítulos en inglés</td></tr>
        <tr><td>Hablar</td><td>Repetir en voz alta frases del kit; grabarte una vez por semana</td></tr>
        <tr><td>Leer</td><td>Una noticia corta o un mail en inglés de tu rubro</td></tr>
        <tr><td>Escribir</td><td>Un mensaje o un mail corto por semana, revisado con el diccionario</td></tr>
        <tr><td>Vocabulario</td><td>5 palabras nuevas por semana, con tarjetas de repaso</td></tr>
      </table>
      <pre><code>Plan semanal (ejemplo):
Lunes:    escuchar 10 min (BBC)
Martes:   5 palabras nuevas del rubro
Miércoles: escribir un mail corto
Jueves:   repetir frases del kit en voz alta
Viernes:  grabarme 1 minuto y escucharme</code></pre>
      <p><strong>Aprovechá el repaso de este sitio:</strong> las tarjetas del glosario y el repaso espaciado sirven también para las frases en inglés.</p>
      <p><strong>Medí el avance:</strong> grabate respondiendo "Tell me about yourself" hoy y dentro de un mes, y compará.</p>
      <p>Por ejemplo, 10 minutos por día son más de 60 horas en un año: suficiente para notar un cambio grande.</p>` },
  ],
  practica: [
    "Armá tu kit de inglés con las 6 partes de la tabla y 10 palabras de tu rubro con su pronunciación. Anotá para qué puesto es.",
    "Practicá las 3 situaciones (con alguien o grabándote) y evaluá cada una con la rúbrica. Anotá el puntaje de cada una sobre 12.",
    "Armá tu plan semanal de 10 a 15 minutos por día y seguilo 2 semanas. Anotá cuántos días lo cumpliste.",
  ],
  recursos: [
    { t: "BBC Learning English: English at Work (en inglés)", url: "https://www.bbc.co.uk/learningenglish/english/features/english-at-work" },
    { t: "BBC Learning English (en inglés)", url: "https://www.bbc.co.uk/learningenglish/" },
    { t: "Cambridge English: aprender inglés (en inglés)", url: "https://www.cambridgeenglish.org/learning-english/" },
  ],
  quiz: [
    { q: "Trabajás en un hotel. ¿Qué frases ponés en tu kit?", opciones: ["Vocabulario de carpintería","Frases de un banco","Reservas, horarios del desayuno y cómo llegar a lugares turísticos","Solo saludos"], correcta: 2, explicacion: "El kit se adapta al rubro. Solo saludos tienta por simple, pero no alcanza para el trabajo." },
    { q: "Querés saber cómo se pronuncia una palabra de tu rubro. ¿Qué usás?", opciones: ["El diccionario Cambridge, que tiene audio","Adivinar","Leerla como en castellano","Nada"], correcta: 0, explicacion: "El audio muestra la pronunciación real. Leerla como en castellano tienta, pero muchas veces suena muy distinta." },
    { q: "Si querés evaluar tu práctica con una rúbrica, ¿qué es una rúbrica?", opciones: ["Un diccionario","Un examen de nivel","Una frase hecha","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica evalúa la práctica. Examen de nivel tienta, pero la rúbrica es tuya, para mejorar." },
    { q: "Si en la práctica tradujiste palabra por palabra en vez de usar frases hechas, ¿cuánto sacás?", opciones: ["2","0 en \"Frases hechas\"","1","No se evalúa"], correcta: 1, explicacion: "Traducir palabra por palabra es 0. 1 tienta porque dijiste algo, pero el criterio es usar las frases del kit." },
    { q: "Si no entendiste al cliente e hiciste como que sí, ¿qué criterio falla?", opciones: ["Trato","Gramática básica","Estrategias","Ninguno"], correcta: 2, explicacion: "Hacer como que entendiste es 0 en estrategias. Trato tienta porque fuiste amable, pero el problema es otro." },
    { q: "Si dijiste el número del cliente, pero no lo confirmaste, ¿cuánto sacás en \"Números y datos\"?", opciones: ["1","2","0","No se evalúa"], correcta: 0, explicacion: "Sin confirmar, es 1. 2 tienta porque lo dijiste bien, pero confirmar es lo que evita errores." },
    { q: "Si tenés que atender a un cliente en inglés en tu trabajo, ¿qué vale más?", opciones: ["Un inglés perfecto aunque no resuelvas","Hablar rápido","Usar palabras difíciles","Que se entienda y resuelvas, aunque haya algún error de gramática"], correcta: 3, explicacion: "Resolver es lo que importa. El inglés perfecto tienta como meta, pero no es lo que mide el trabajo." },
    { q: "Sacaste 8 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Practicás lo que sacó 0 o 1","Abandonás el inglés","Cambiás todo el kit"], correcta: 1, explicacion: "Entre 7 y 10 se practica lo que falló. Abandonar tienta por frustración, pero ya tenés una base." },
    { q: "Querés seguir mejorando el inglés. ¿Qué plan conviene?", opciones: ["8 horas un solo día por mes","Esperar a tener tiempo","10 a 15 minutos por día, sostenidos","Solo mirar series sin subtítulos"], correcta: 2, explicacion: "Poco y constante rinde más. 8 horas un día tienta por intenso, pero se olvida entre medio." },
    { q: "Si practicás 10 minutos por día durante un año, ¿cuántas horas sumás?", opciones: ["Más de 60","Unas 10","Unas 6","Unas 1.000"], correcta: 0, explicacion: "10 × 365 = 3.650 minutos, unas 61 horas. 10 tienta por el número del plan, pero son minutos por día." },
    { q: "Si querés saber cuánto mejoraste en inglés, ¿cómo lo medís?", opciones: ["Por cómo te sentís","Contando las páginas que leíste","No se puede medir","Grabándote hoy y dentro de un mes con la misma respuesta, y comparando"], correcta: 3, explicacion: "La grabación muestra el cambio real. Cómo te sentís tienta, pero varía con el día." },
    { q: "Si querés repasar frases en inglés en este sitio, ¿qué podés usar?", opciones: ["Clases en vivo","Las tarjetas del glosario y el repaso espaciado","Un examen oficial","Nada"], correcta: 1, explicacion: "El repaso del sitio sirve para las frases. Un examen oficial tienta, pero este sitio no lo da." },
  ],
},
];
