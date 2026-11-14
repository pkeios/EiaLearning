// Temario del curso "Mails y mensajes de trabajo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js mail-profesional y node tools/metodologia.js mail-profesional
window.TEMARIO = [
{
  id: "empezar",
  icono: "📧",
  titulo: "Empezar: el mail y sus partes",
  nivel: "Básico",
  objetivos: [
    "Tener una dirección de correo seria para el trabajo y la búsqueda de empleo",
    "Reconocer las partes de un mail: para, CC, CCO, asunto, cuerpo, adjunto y firma",
    "Elegir entre mail, mensaje o llamada según lo que tenés que comunicar",
  ],
  lecciones: [
    { titulo: "Una dirección seria", html: `
      <p class="idea">Tu <strong>dirección de correo</strong> es lo primero que ve quien recibe tu mail. Para el trabajo, usá una con tu nombre y apellido, sin apodos ni números raros.</p>
      <table>
        <tr><th>Evitá</th><th>Usá</th></tr>
        <tr><td>lacapa_del_barrio99@…</td><td>juana.perez@…</td></tr>
        <tr><td>bebota.2003@…</td><td>jperez.trabajo@…</td></tr>
        <tr><td>El mail de tu hermano o compartido</td><td>Uno solo tuyo, que revises todos los días</td></tr>
      </table>
      <p><strong>Cómo crearla:</strong> Gmail (de Google) y Outlook (de Microsoft) son gratis. Si tu nombre ya está tomado, probá con un punto, la inicial del segundo nombre o un número corto que no diga tu edad.</p>
      <p><strong>Usala para todo lo serio:</strong> búsqueda de trabajo, trámites, clientes. Y revisala: un mail de una entrevista que leés tres días tarde es una oportunidad perdida.</p>
      <p>Por ejemplo, si mandás tu CV desde "elfacha_10@…", antes de leer tu experiencia ya diste una impresión que no elegiste.</p>` },
    { titulo: "Las partes de un mail", video: {"id":"aBNRU3GSMiY","t":"Cómo redactar un correo electrónico · LearnFree en Español (2:48)"}, html: `
      <p class="idea">Todo mail tiene las mismas partes. Saber para qué sirve cada una evita los errores más comunes, como mandarle a todos algo que era para uno.</p>
      <table>
        <tr><th>Parte</th><th>Para qué</th></tr>
        <tr><td>Para</td><td>Las personas que tienen que leer y responder</td></tr>
        <tr><td>CC (con copia)</td><td>Personas que tienen que estar enteradas, pero no hacer nada. Todos ven quién está en copia.</td></tr>
        <tr><td>CCO (con copia oculta)</td><td>Personas que reciben el mail sin que los demás lo vean. Sirve para mandar a muchos sin mostrar sus direcciones.</td></tr>
        <tr><td>Asunto</td><td>De qué se trata, en pocas palabras</td></tr>
        <tr><td>Cuerpo</td><td>El mensaje: saludo, contenido y despedida</td></tr>
        <tr><td>Adjunto</td><td>Un archivo que va con el mail, como un CV en PDF</td></tr>
        <tr><td>Firma</td><td>Tu nombre y tus datos de contacto al final</td></tr>
      </table>
      <p>Por ejemplo, si tenés que mandarle el mismo aviso a 40 padres de la escuela, ponelos en CCO: así nadie ve las direcciones de los demás y nadie responde a todos por error.</p>` },
    { titulo: "¿Mail, mensaje o llamada?", html: `
      <p class="idea">No todo va por mail. Elegí el canal según lo urgente, lo largo y si tiene que quedar por escrito.</p>
      <table>
        <tr><th>Situación</th><th>Canal</th><th>Por qué</th></tr>
        <tr><td>Mandar un CV, un presupuesto o un documento</td><td>Mail</td><td>Queda registro y el adjunto se guarda ordenado</td></tr>
        <tr><td>Avisar que llegás 10 minutos tarde</td><td>Mensaje (WhatsApp)</td><td>Es corto y urgente</td></tr>
        <tr><td>Un problema delicado o un malentendido</td><td>Llamada o en persona</td><td>El tono se entiende mejor hablando</td></tr>
        <tr><td>Un acuerdo hablado (precio, fecha)</td><td>Llamada y después un mail que lo resume</td><td>Así queda por escrito lo que acordaron</td></tr>
      </table>
      <p><strong>Lo que queda por escrito vale:</strong> un mail puede reenviarse, imprimirse o mostrarse años después. Escribí siempre pensando que lo puede leer otra persona.</p>
      <p>Por ejemplo, si por teléfono acordaste con un cliente arreglar su mesa por $ 40.000 el jueves, un mail corto que diga "Como hablamos: mesa, $ 40.000, entrega el jueves" evita discusiones después.</p>` },
  ],
  practica: [
    "Revisá tu dirección de correo. Si tiene apodos o números raros, creá una con tu nombre y apellido. Anotá la dirección nueva.",
    "Mandate un mail de prueba a vos mismo con asunto, cuerpo, firma y un adjunto en PDF. Anotá qué partes usaste.",
    "Pensá en 4 cosas que tuviste que comunicar esta semana y anotá en una tabla qué canal usaste y cuál conviene según la lección.",
  ],
  recursos: [
    { t: "Gmail: enviar mensajes o deshacer el envío", url: "https://support.google.com/mail/answer/2819488?hl=es" },
    { t: "Microsoft: ayuda y formación de Outlook", url: "https://support.microsoft.com/es-es/outlook" },
    { t: "Purdue OWL: etiqueta del correo electrónico (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html" },
  ],
  quiz: [
    { q: "Vas a mandar tu CV y tu único mail es \"lacapa_del_barrio99\". ¿Qué hacés?", opciones: ["Lo mandás igual, nadie mira la dirección","Usás el mail de tu hermano","Creás uno gratis con tu nombre y apellido y lo usás para lo serio","Mandás el CV por mensaje de Instagram"], correcta: 2, explicacion: "La dirección es lo primero que ven. Mandarlo igual tienta porque es rápido, pero la primera impresión ya juega en contra." },
    { q: "Tu nombre ya está tomado en Gmail. ¿Qué probás?", opciones: ["Agregar un punto, la inicial del segundo nombre o un número corto","Un apodo gracioso","Tu año de nacimiento y tu equipo de fútbol","Usar uno compartido con la familia"], correcta: 0, explicacion: "Hay variantes serias de tu nombre. El apodo tienta porque está libre, pero no sirve para el trabajo." },
    { q: "Tenés que mandar un aviso a 40 padres de la escuela. ¿Dónde ponés las direcciones?", opciones: ["Todas en Para","Todas en CC","Mandás 40 mails iguales uno por uno","En CCO, para que nadie vea las direcciones de los demás"], correcta: 3, explicacion: "CCO oculta las direcciones y evita el \"responder a todos\". CC tienta porque parece lo mismo, pero todos ven todas las direcciones." },
    { q: "Tu jefa tiene que estar enterada de un mail, pero no tiene que hacer nada. ¿Dónde la ponés?", opciones: ["En Para","En CC","En CCO sin avisar","En el asunto"], correcta: 1, explicacion: "CC es para quien tiene que estar al tanto. Para tienta porque es lo de siempre, pero da a entender que ella tiene que responder." },
    { q: "Si una empresa te pide el CV como adjunto, ¿qué te está pidiendo?", opciones: ["Una persona en copia","El texto del asunto","Un archivo que va con el mail, como un CV en PDF","La firma del final"], correcta: 2, explicacion: "El adjunto es el archivo. Confundirlo con una persona en copia tienta porque \"adjuntar\" suena a sumar a alguien, pero se refiere a archivos." },
    { q: "¿Qué va en la firma de un mail de trabajo?", opciones: ["Tu nombre y tus datos de contacto","Una frase motivacional larga","Tu dirección de casa completa siempre","Nada, no hace falta"], correcta: 0, explicacion: "La firma dice quién sos y cómo contactarte. La frase motivacional tienta para darle personalidad, pero alarga y distrae." },
    { q: "Vas a llegar 10 minutos tarde a una entrevista. ¿Cómo avisás?", opciones: ["Por mail con asunto \"Demora\"","No avisás","Por carta","Por mensaje o llamada, que es corto y urgente"], correcta: 3, explicacion: "Lo urgente va por un canal rápido. El mail tienta porque es formal, pero puede no leerse a tiempo." },
    { q: "Hubo un malentendido delicado con un compañero. ¿Qué canal conviene primero?", opciones: ["Un mail largo con copia al jefe","Una llamada o hablarlo en persona","Un audio de 8 minutos","Un mensaje en el grupo"], correcta: 1, explicacion: "Hablando, el tono se entiende mejor. El mail largo tienta para dejar todo claro, pero por escrito el tono se malinterpreta y queda para siempre." },
    { q: "Acordaste un precio por teléfono con un cliente. ¿Qué hacés después?", opciones: ["Nada, ya está hablado","Le mandás un audio","Mandás un mail corto que resume lo acordado","Lo anotás solo en tu cuaderno"], correcta: 2, explicacion: "El mail deja registro para los dos. Pensar que ya está hablado tienta, pero después cada uno recuerda algo distinto." },
    { q: "Si escribís un mail enojado sobre un cliente a tu compañera, ¿qué riesgo hay?", opciones: ["Que se reenvíe o lo lea otra persona, incluso el cliente","Ninguno, es privado","Que se borre solo","Que no llegue"], correcta: 0, explicacion: "Lo escrito puede reenviarse o mostrarse. Pensar que es privado tienta, pero un reenvío equivocado alcanza." },
    { q: "Te escribieron por una entrevista y lo viste tres días después. ¿Qué te faltó?", opciones: ["Tener más mails","Responder más largo","Poner una firma","Revisar todos los días el mail que usás para buscar trabajo"], correcta: 3, explicacion: "De nada sirve un buen mail si no lo revisás. Tener más cuentas tienta para separar, pero se hace más fácil perder mensajes." },
    { q: "Tenés que mandar un presupuesto con un documento. ¿Qué canal usás?", opciones: ["Un audio de WhatsApp","Mail, con el documento adjunto","Una llamada sin dejar nada escrito","Un comentario en una red social"], correcta: 1, explicacion: "El mail deja registro y guarda el adjunto ordenado. El audio tienta por rápido, pero no se puede buscar ni guardar fácil." },
  ],
},
{
  id: "claro",
  icono: "🎯",
  titulo: "Mails claros y cortos",
  nivel: "Básico",
  objetivos: [
    "Escribir un asunto que diga de qué se trata y qué necesitás",
    "Poner lo importante y el pedido en las primeras líneas",
    "Hacer pedidos concretos con fecha y armar el mail en párrafos cortos",
  ],
  lecciones: [
    { titulo: "El asunto lo dice todo", video: {"id":"RfW2Mbri-9Y","t":"Cómo escribir un correo laboral · LearnFree en Español (2:50)"}, html: `
      <p class="idea">Mucha gente decide si abre un mail mirando solo el <strong>asunto</strong>. Un buen asunto dice de qué se trata y, si hace falta, qué necesitás y para cuándo.</p>
      <table>
        <tr><th>Asunto flojo</th><th>Asunto claro</th></tr>
        <tr><td>Hola</td><td>CV de Juana Pérez para el puesto de cajera</td></tr>
        <tr><td>Consulta</td><td>Consulta por turno: ¿hay lugar el martes 12?</td></tr>
        <tr><td>Importante!!!</td><td>Necesito tu firma en el contrato antes del viernes</td></tr>
        <tr><td>(sin asunto)</td><td>Presupuesto de pintura: departamento de 2 ambientes</td></tr>
      </table>
      <p><strong>Reglas simples:</strong></p>
      <ul>
        <li>Entre 4 y 10 palabras.</li>
        <li>Nada de mayúsculas ni signos de exclamación para "llamar la atención".</li>
        <li>Si respondés y el tema cambió, cambiá el asunto.</li>
      </ul>
      <p>Por ejemplo, si buscás dentro de un mes "presupuesto de pintura", lo encontrás al instante. Si el asunto era "Hola", no.</p>` },
    { titulo: "Lo importante primero", html: `
      <p class="idea">Escribí al revés de un cuento: primero lo que necesitás, después el detalle. Quien lee tiene poco tiempo y puede no llegar al final.</p>
      <pre><code>Al revés (se pierde el pedido):
Hola, te escribo porque el otro día estuvimos viendo con el equipo
que las ventas bajaron y pensamos varias cosas... (4 líneas más)
...así que necesitaríamos el informe para el jueves.

Al derecho (el pedido arriba):
Hola Marta:
¿Me mandás el informe de ventas de marzo antes del jueves?
Lo necesito para la reunión del viernes con el equipo.</code></pre>
      <p><strong>Párrafos cortos:</strong> 2 a 4 líneas cada uno, con una idea por párrafo. Si hay varios pasos o preguntas, numeralos.</p>
      <p><strong>Una regla de longitud:</strong> si el mail no entra en la pantalla del celular sin bajar mucho, probablemente es demasiado largo. Lo que sobra puede ir en un adjunto o en una llamada.</p>
      <p>Por ejemplo, numerar las preguntas ("1. ¿Hay lugar el martes? 2. ¿Cuánto cuesta?") hace que te respondan las dos, y no solo la primera.</p>` },
    { titulo: "Pedidos concretos", html: `
      <p class="idea">Un pedido vago no se cumple. Un pedido concreto dice <strong>qué</strong>, <strong>quién</strong> y <strong>para cuándo</strong>.</p>
      <table>
        <tr><th>Vago</th><th>Concreto</th></tr>
        <tr><td>"Cuando puedas mirá lo del cliente"</td><td>"¿Podés llamar al cliente García antes del miércoles a las 12 para confirmar la entrega?"</td></tr>
        <tr><td>"Avisame"</td><td>"Avisame por acá si te sirve el martes a las 10"</td></tr>
        <tr><td>"Lo antes posible"</td><td>"Antes del viernes 14 a las 18"</td></tr>
      </table>
      <p><strong>Una lista para revisar antes de enviar:</strong></p>
      <ol>
        <li>¿El asunto dice de qué se trata?</li>
        <li>¿El pedido está en las primeras líneas?</li>
        <li>¿Tiene fecha?</li>
        <li>¿La persona que lee sabe qué tiene que hacer sin preguntar?</li>
      </ol>
      <p><strong>Escribí simple:</strong> palabras comunes, oraciones cortas. "Le informo que procederemos a efectuar la entrega" se dice mejor "Le llevamos el pedido". Eso se llama <strong>lenguaje claro</strong>.</p>
      <p>Por ejemplo, "Necesito el presupuesto antes del viernes 14" te da una fecha para volver a escribir si no llega. "Cuando puedas" no.</p>` },
  ],
  practica: [
    "Buscá 5 mails viejos tuyos y reescribí el asunto con la regla de 4 a 10 palabras. Anotá los asuntos antes y después.",
    "Tomá un mail largo (tuyo o inventado) y reescribilo con el pedido en las primeras 2 líneas y párrafos de 2 a 4 líneas. Contá las palabras antes y después.",
    "Escribí 3 pedidos concretos con qué, quién y para cuándo. Pasales la lista de 4 preguntas y anotá cuántas cumple cada uno.",
  ],
  recursos: [
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
    { t: "Purdue OWL: etiqueta del correo electrónico (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html" },
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
  ],
  quiz: [
    { q: "Mandás tu CV con el asunto \"Hola\". ¿Cómo lo mejorás?", opciones: ["\"HOLA!!!\"","\"Importante\"","\"CV de Juana Pérez para el puesto de cajera\"","Lo dejás sin asunto"], correcta: 2, explicacion: "El asunto dice de qué se trata. \"Importante\" tienta para que lo abran, pero no dice nada y parece spam." },
    { q: "¿Cuántas palabras conviene que tenga un asunto?", opciones: ["Entre 4 y 10","Una sola","Más de 25","No importa"], correcta: 0, explicacion: "Entre 4 y 10 entra completo en la bandeja. Una sola tienta por corta, pero no alcanza para decir de qué se trata." },
    { q: "Respondés un mail y el tema cambió por completo. ¿Qué hacés con el asunto?", opciones: ["Lo dejás igual","Le agregás \"RE: RE: RE:\"","Lo borrás","Lo cambiás para que diga el tema nuevo"], correcta: 3, explicacion: "Un asunto actualizado ayuda a encontrarlo después. Dejarlo igual tienta por cómodo, pero después nadie encuentra el mail nuevo." },
    { q: "Tu pedido quedó en la última línea de un mail de 8 líneas. ¿Qué cambiás?", opciones: ["Lo ponés en negrita al final","Lo subís a las primeras líneas","Agregás más contexto","Lo dejás, se va a leer"], correcta: 1, explicacion: "Quien lee rápido puede no llegar al final. La negrita tienta, pero si está abajo igual se pierde." },
    { q: "Tenés que hacer 3 preguntas en un mail. ¿Cómo las ponés?", opciones: ["Todas en un mismo párrafo largo","Una por mail, en 3 mails","Numeradas, una por línea","Solo la más importante"], correcta: 2, explicacion: "Numeradas, te responden todas. Un párrafo tienta por compacto, pero suelen responder solo la primera." },
    { q: "Tu mail no entra en la pantalla del celular sin bajar mucho. ¿Qué concluís?", opciones: ["Que probablemente es demasiado largo: mové detalles a un adjunto o a una llamada","Que está completo","Que hay que achicar la letra","Que hay que mandarlo igual"], correcta: 0, explicacion: "Un mail largo se lee a medias. Pensar que está completo tienta, pero lo importante se pierde entre el detalle." },
    { q: "Escribiste \"Cuando puedas mirá lo del cliente\". ¿Qué le falta?", opciones: ["Un saludo más largo","Signos de exclamación","Nada, está claro","Qué hacer exactamente, y para cuándo"], correcta: 3, explicacion: "Un pedido concreto dice qué, quién y para cuándo. Pensar que está claro tienta porque vos sabés de qué hablás, pero el otro no." },
    { q: "Querés que te manden un presupuesto. ¿Cuál es el pedido más útil?", opciones: ["\"Lo antes posible\"","\"Necesito el presupuesto antes del viernes 14\"","\"Cuando puedas\"","\"Urgente!!!\""], correcta: 1, explicacion: "Con fecha, sabés cuándo volver a escribir. \"Lo antes posible\" tienta por urgente, pero cada uno lo entiende distinto." },
    { q: "Escribiste \"Le informo que procederemos a efectuar la entrega\". ¿Cómo lo decís en lenguaje claro?", opciones: ["\"Por medio de la presente le comunicamos la entrega\"","\"Se procederá a efectuar la entrega\"","\"Le llevamos el pedido\"","\"Entrega: efectuada próximamente\""], correcta: 2, explicacion: "El lenguaje claro usa palabras comunes y oraciones cortas. \"Por medio de la presente\" tienta porque suena formal, pero alarga sin agregar nada." },
    { q: "Antes de enviar, ¿qué te preguntás sobre quien lee?", opciones: ["Si sabe qué tiene que hacer sin preguntarte","Si el mail es largo","Si usaste palabras difíciles","Si tiene muchos colores"], correcta: 0, explicacion: "Si tiene que preguntarte, el mail no cumplió. Que sea largo tienta como señal de esfuerzo, pero no dice si se entiende." },
    { q: "Si dentro de un mes buscás un presupuesto, ¿qué asunto te ayuda a encontrarlo?", opciones: ["\"Hola\"","\"Consulta\"","(sin asunto)","\"Presupuesto de pintura: departamento de 2 ambientes\""], correcta: 3, explicacion: "Un asunto con palabras clave se encuentra con el buscador. \"Consulta\" tienta por correcto, pero hay cientos iguales." },
    { q: "Tu mail tiene un solo párrafo de 12 líneas con tres temas. ¿Qué hacés?", opciones: ["Lo dejás, es un solo mail","Lo partís en párrafos cortos, uno por idea","Le sacás los puntos","Lo ponés todo en negrita"], correcta: 1, explicacion: "Un párrafo por idea se lee de un vistazo. La negrita tienta para destacar, pero si todo está en negrita no se destaca nada." },
  ],
},
{
  id: "tono",
  icono: "🤝",
  titulo: "El tono justo",
  nivel: "Intermedio",
  objetivos: [
    "Elegir el saludo, la despedida y el trato (usted o vos) según a quién le escribís",
    "Escribir con cortesía sin mayúsculas gritonas, ironías ni emojis fuera de lugar",
    "Escribir mails difíciles: reclamar, decir que no y pedir disculpas",
  ],
  lecciones: [
    { titulo: "Saludo, despedida y trato", html: `
      <p class="idea">El <strong>tono</strong> es la forma en que suena tu mail: más formal o más cercano. Elegilo según a quién le escribís y cómo te escribió esa persona.</p>
      <table>
        <tr><th>A quién</th><th>Saludo</th><th>Despedida</th><th>Trato</th></tr>
        <tr><td>Alguien que no conocés (empresa, organismo)</td><td>Buenos días, Sr. López: / Estimada Laura:</td><td>Saludos cordiales,</td><td>Usted</td></tr>
        <tr><td>Un cliente o un jefe con quien ya hablaste</td><td>Hola, Laura:</td><td>Saludos,</td><td>Vos o usted, según cómo te escriba</td></tr>
        <tr><td>Un compañero de todos los días</td><td>Hola, Pablo:</td><td>Gracias,</td><td>Vos</td></tr>
      </table>
      <p><strong>Una regla segura:</strong> si dudás, empezá un poco más formal. Si la otra persona responde con "vos" y un "Hola", podés seguir así.</p>
      <p><strong>El nombre bien escrito:</strong> revisá cómo se escribe el nombre de la persona (Matías o Mathías, Yésica o Jésica). Escribirlo mal muestra poco cuidado.</p>
      <p>Por ejemplo, si una empresa te escribe "Estimada Juana" y le respondés "Holaa!! 😊", el cambio de tono llama la atención más que tu respuesta.</p>` },
    { titulo: "Cortesía por escrito", html: `
      <p class="idea">Por escrito no se ven tu cara ni tu tono de voz, así que un mensaje seco puede leerse como enojado. Unas pocas palabras amables cambian todo.</p>
      <table>
        <tr><th>Suena seco o enojado</th><th>Suena amable</th></tr>
        <tr><td>"Mandame el archivo."</td><td>"¿Me mandás el archivo, por favor?"</td></tr>
        <tr><td>"Como ya te dije…"</td><td>"Te paso de nuevo el dato:"</td></tr>
        <tr><td>"NECESITO UNA RESPUESTA"</td><td>"¿Me podés confirmar antes del jueves?"</td></tr>
        <tr><td>"Ok."</td><td>"¡Gracias! Lo reviso hoy."</td></tr>
      </table>
      <p><strong>Lo que conviene evitar:</strong></p>
      <ul>
        <li><strong>Mayúsculas sostenidas:</strong> por escrito se leen como gritos.</li>
        <li><strong>Ironía:</strong> sin la voz, casi nunca se entiende como chiste.</li>
        <li><strong>Emojis:</strong> con un compañero, alguno puede estar bien; con una empresa o un cliente nuevo, mejor no.</li>
        <li><strong>Escribir enojado:</strong> si estás enojado, escribí el borrador y esperá una hora antes de mandarlo.</li>
      </ul>
      <p>Por ejemplo, "Como ya te dije…" suena a reproche aunque no lo quieras. "Te paso de nuevo el dato" da la misma información sin la carga.</p>` },
    { titulo: "Mails difíciles", html: `
      <p class="idea">Reclamar, decir que no y pedir disculpas son los mails que más cuesta escribir. Los tres funcionan con la misma receta: hechos concretos, sin culpar, y una propuesta.</p>
      <table>
        <tr><th>Mail</th><th>Estructura</th></tr>
        <tr><td>Reclamo</td><td>Qué pasó (con fecha y número de pedido) → qué esperabas → qué pedís</td></tr>
        <tr><td>Decir que no</td><td>Gracias → no, con un motivo corto → una alternativa si la hay</td></tr>
        <tr><td>Disculpa</td><td>Reconocer el error → qué hacés para arreglarlo → qué cambia para que no se repita</td></tr>
      </table>
      <pre><code>Asunto: Pedido 4512 llegó incompleto
Hola:
El pedido 4512, entregado el 3 de marzo, llegó sin las 2 sillas.
Pagué el juego completo (factura adjunta).
¿Me pueden enviar las sillas antes del 15 de marzo?
Saludos,
Juana Pérez – 11 5555-0000</code></pre>
      <p><strong>Sin culpar y sin rogar:</strong> un reclamo firme y amable consigue más que uno enojado. Una disculpa no necesita tres párrafos de excusas: reconocé, arreglá y seguí.</p>
      <p>Por ejemplo, para decir que no a un trabajo: "Gracias por pensar en mí. Esta semana no llego con los tiempos; si les sirve, puedo hacerlo a partir del lunes 20".</p>` },
  ],
  practica: [
    "Escribí el saludo, la despedida y el trato para 3 personas: una empresa, un cliente y un compañero. Anotá por qué elegiste cada uno.",
    "Tomá 4 frases secas de mensajes reales tuyos y reescribilas en tono amable. Anotá las frases antes y después.",
    "Escribí un mail de reclamo con la estructura de la lección: qué pasó con fecha, qué esperabas y qué pedís. Contá si tiene los 3 pasos.",
    "Escribí un mail para decir que no con gracias, motivo corto y alternativa. Pedile a alguien que lo lea y anotá si le sonó amable.",
  ],
  recursos: [
    { t: "Purdue OWL: etiqueta del correo electrónico (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html" },
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
    { t: "Microsoft: ayuda y formación de Outlook", url: "https://support.microsoft.com/es-es/outlook" },
  ],
  quiz: [
    { q: "Le escribís por primera vez a una empresa. ¿Qué saludo usás?", opciones: ["\"Holaa!! 😊\"","\"Che, una consulta\"","\"Buenos días, Sr. López:\" o \"Estimada Laura:\"","Sin saludo"], correcta: 2, explicacion: "Con quien no conocés, empezá formal. \"Che\" tienta por natural, pero suena a confianza que todavía no hay." },
    { q: "Dudás entre usted y vos. ¿Qué hacés?", opciones: ["Empezás un poco más formal y te adaptás a cómo te responden","Usás vos siempre","Mezclás los dos en el mismo mail","Evitás dirigirte a la persona"], correcta: 0, explicacion: "Más formal es lo seguro. Usar vos siempre tienta porque es como hablamos, pero con algunas personas cae mal al principio." },
    { q: "Una empresa te escribe \"Estimada Juana\". ¿Cómo respondés?", opciones: ["\"Holaa!! 😊\"","\"Ok\"","Con un audio","Con un tono parecido: \"Hola, Laura:\" o \"Estimada Laura:\""], correcta: 3, explicacion: "Acompañá el tono de quien te escribe. El emoji tienta para mostrar simpatía, pero rompe el tono que eligió la empresa." },
    { q: "Tu mensaje dice \"Mandame el archivo.\" ¿Cómo suena y qué cambiás?", opciones: ["Suena bien, no cambio nada","Suena seco: \"¿Me mandás el archivo, por favor?\"","Lo pongo en mayúsculas","Agrego \"YA\""], correcta: 1, explicacion: "Por escrito no se ve tu cara, y lo seco se lee como enojo. Pensar que suena bien tienta porque vos sabés que no estás enojado, pero el otro no." },
    { q: "¿Por qué evitar escribir en MAYÚSCULAS sostenidas?", opciones: ["Porque gastan más espacio","Porque el programa no las acepta","Porque por escrito se leen como gritos","Porque son difíciles de escribir"], correcta: 2, explicacion: "Las mayúsculas se leen como gritar. Que llaman la atención tienta, pero la atención va al tono, no al pedido." },
    { q: "Querés hacer un chiste irónico en un mail a un cliente. ¿Qué pensás?", opciones: ["Que sin la voz casi nunca se entiende como chiste: mejor no","Que da cercanía","Que queda profesional","Que siempre se entiende"], correcta: 0, explicacion: "La ironía depende del tono de voz. La cercanía tienta, pero el riesgo de que se lea como burla es alto." },
    { q: "Estás enojado y tenés que responder un mail. ¿Qué hacés?", opciones: ["Lo mandás ya, mientras está fresco","Lo mandás en mayúsculas","Copiás al jefe para que vea","Escribís el borrador y esperás una hora antes de mandarlo"], correcta: 3, explicacion: "Esperar te deja releerlo con calma. Mandarlo ya tienta para descargarte, pero lo escrito queda." },
    { q: "Escribiste \"Como ya te dije…\". ¿Cómo lo cambiás?", opciones: ["\"Como ya te dije MIL veces…\"","\"Te paso de nuevo el dato:\"","\"Por si no leíste…\"","Lo dejás"], correcta: 1, explicacion: "La misma información sin reproche. \"Por si no leíste\" tienta como aclaración, pero suena a acusación." },
    { q: "Tu pedido llegó incompleto. ¿Qué tiene que tener tu reclamo?", opciones: ["Todo tu enojo, para que entiendan","Solo \"Llegó mal\"","Qué pasó con fecha y número de pedido, qué esperabas y qué pedís","Amenazas de no volver a comprar"], correcta: 2, explicacion: "Hechos concretos y un pedido claro se resuelven más rápido. Mostrar el enojo tienta, pero no dice qué hay que arreglar." },
    { q: "Te ofrecen un trabajo que no podés hacer esta semana. ¿Cómo respondés?", opciones: ["Gracias, no con un motivo corto, y una alternativa si la hay","No respondés","Decís que sí y después ves","Un \"No\" solo"], correcta: 0, explicacion: "Decir que no bien deja la puerta abierta. Decir que sí tienta para no perder el cliente, pero si no cumplís lo perdés seguro." },
    { q: "Te equivocaste con una entrega. ¿Qué tiene tu disculpa?", opciones: ["Tres párrafos de excusas","Culpar al correo","Nada, mejor no decir","Reconocer el error, cómo lo arreglás y qué cambia para que no se repita"], correcta: 3, explicacion: "Reconocer y arreglar da confianza. Las excusas tientan para explicar, pero alargan y suenan a no hacerse cargo." },
    { q: "Tu reclamo dice \"Siempre hacen todo mal\". ¿Qué le falta?", opciones: ["Más signos de exclamación","Hechos concretos: qué pedido, qué fecha y qué falta","Copias a más gente","Nada, es claro"], correcta: 1, explicacion: "Sin datos no pueden buscar tu caso. El reclamo general tienta porque expresa la bronca, pero no se puede resolver." },
  ],
},
{
  id: "responder",
  icono: "↩️",
  titulo: "Responder, reenviar y adjuntar",
  nivel: "Intermedio",
  objetivos: [
    "Elegir entre responder, responder a todos y reenviar",
    "Adjuntar archivos con nombre claro, en PDF y sin pasarse de tamaño",
    "Hacer un seguimiento amable cuando no te responden",
  ],
  lecciones: [
    { titulo: "Responder o responder a todos", video: {"id":"Fxvmt3kkoaw","t":"Cómo leer, responder y reenviar un correo electrónico · LearnFree en Español (3:29)"}, html: `
      <p class="idea">Antes de apretar el botón, preguntate quién necesita leer tu respuesta. Ese es el error que más vergüenza da: responder a todos algo que era para uno.</p>
      <table>
        <tr><th>Botón</th><th>A quién le llega</th><th>Cuándo</th></tr>
        <tr><td>Responder</td><td>Solo a quien te escribió</td><td>Casi siempre</td></tr>
        <tr><td>Responder a todos</td><td>A todos los de Para y CC</td><td>Cuando todos necesitan saber tu respuesta</td></tr>
        <tr><td>Reenviar</td><td>A alguien nuevo, con el mail original abajo</td><td>Para pasarle el tema a otra persona</td></tr>
      </table>
      <p><strong>Al reenviar, agregá una línea arriba</strong> que explique por qué: "Juan, te reenvío el pedido del cliente García: ¿lo podés presupuestar?". Un reenvío sin texto obliga a leer todo para entender qué querés.</p>
      <p><strong>Mirá lo que hay abajo:</strong> un reenvío arrastra todos los mensajes anteriores. Revisá que no haya comentarios privados antes de mandarlo a otra persona.</p>
      <p><strong>Respondé a tiempo:</strong> en el trabajo, lo esperable es responder en uno o dos días hábiles. Si necesitás más, avisá: "Lo recibí, te respondo el jueves".</p>
      <p>Por ejemplo, si el colegio manda un mail a 200 familias y respondés a todos "¡Gracias!", les llega a las 200.</p>` },
    { titulo: "Adjuntar bien", video: {"id":"JAX9y4re_vA","t":"Cómo adjuntar un archivo en un correo electrónico · LearnFree en Español (2:54)"}, html: `
      <p class="idea">Un adjunto prolijo se abre en cualquier dispositivo, se reconoce por el nombre y no rebota por pesado.</p>
      <table>
        <tr><th>Revisá</th><th>Por qué</th></tr>
        <tr><td>Que sea PDF si no lo tienen que editar</td><td>Se ve igual en cualquier computadora o celular</td></tr>
        <tr><td>El nombre del archivo</td><td>"CV-Juana-Perez.pdf" en vez de "documento final (3).pdf"</td></tr>
        <tr><td>El tamaño</td><td>Gmail permite adjuntar hasta 25 MB; si es más grande, mandá un enlace de Drive</td></tr>
        <tr><td>Que esté adjunto de verdad</td><td>El error más común: "te adjunto el CV" y no hay CV</td></tr>
      </table>
      <p>Un <strong>MB</strong> (megabyte) es una medida del tamaño de un archivo. Un CV en PDF pesa menos de 1 MB; un video de un minuto puede pesar más de 100 MB.</p>
      <p><strong>Mencioná el adjunto en el texto:</strong> "Te adjunto mi CV en PDF". Así quien lee sabe que tiene que buscarlo. Gmail incluso avisa si escribís "adjunto" y te olvidaste del archivo.</p>
      <p>Por ejemplo, si mandás tres fotos sacadas con el celular y pesan 30 MB juntas, es mejor subirlas a Drive y mandar el enlace.</p>` },
    { titulo: "Seguimiento sin molestar", html: `
      <p class="idea">Que no te respondan no siempre es un no: muchas veces el mail quedó tapado. Un <strong>seguimiento</strong> amable, unos días después, es normal y está bien visto.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué</th></tr>
        <tr><td>3 a 5 días hábiles después</td><td>Primer seguimiento, corto</td></tr>
        <tr><td>Una semana después</td><td>Segundo seguimiento, o una llamada</td></tr>
        <tr><td>Si sigue sin respuesta</td><td>Probá otro canal o dalo por cerrado</td></tr>
      </table>
      <pre><code>Asunto: RE: CV de Juana Pérez para el puesto de cajera
Hola, Laura:
Te escribo para saber si pudiste ver mi CV, que te mandé el lunes 3.
Sigo muy interesada en el puesto. Quedo atenta.
Saludos,
Juana Pérez</code></pre>
      <p><strong>Respondé sobre el mismo mail</strong> (no uno nuevo), así quien lee tiene todo el historial a mano.</p>
      <p><strong>Sin reproches:</strong> "Te escribí hace una semana y no me contestaste" suena a queja. "Te escribo para saber si pudiste verlo" pide lo mismo con amabilidad.</p>
      <p>Por ejemplo, anotá en un calendario cuándo mandaste cada mail importante y cuándo toca el seguimiento: así no dependés de acordarte.</p>` },
  ],
  practica: [
    "Mirá tus últimos 10 mails respondidos y anotá cuántas veces usaste \"Responder a todos\" y si hacía falta en cada caso.",
    "Renombrá 3 archivos que mandes seguido (por ejemplo, tu CV) con un nombre claro y guardalos en PDF. Anotá el nombre y el tamaño en MB de cada uno.",
    "Reenviá un mail (a vos mismo o a alguien de confianza) agregando una línea arriba que explique por qué lo reenviás. Anotá la línea.",
    "Escribí un mail de seguimiento con la estructura de la lección y anotá en un calendario la fecha del primer y del segundo seguimiento.",
  ],
  recursos: [
    { t: "Gmail: enviar archivos adjuntos", url: "https://support.google.com/mail/answer/6584?hl=es" },
    { t: "Gmail: enviar mensajes o deshacer el envío", url: "https://support.google.com/mail/answer/2819488?hl=es" },
    { t: "Purdue OWL: etiqueta del correo electrónico (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html" },
  ],
  quiz: [
    { q: "El colegio mandó un mail a 200 familias. Querés agradecer. ¿Qué botón usás?", opciones: ["Responder a todos","Reenviar a todos","Responder, solo a quien lo mandó","Responder a todos con CCO"], correcta: 2, explicacion: "Tu agradecimiento es para quien escribió. Responder a todos tienta porque es el botón de al lado, pero les llega a las 200 familias." },
    { q: "¿Cuándo usás \"Responder a todos\"?", opciones: ["Cuando todos los de Para y CC necesitan saber tu respuesta","Siempre, por las dudas","Nunca","Cuando estás apurado"], correcta: 0, explicacion: "Solo si todos lo necesitan. Por las dudas tienta para no dejar a nadie afuera, pero llena bandejas ajenas." },
    { q: "Le reenviás a Juan un pedido de un cliente sin escribir nada. ¿Qué falta?", opciones: ["Nada, ya lo va a entender","Copiar al cliente","Cambiar el asunto a \"FW\"","Una línea arriba que diga por qué se lo reenviás y qué necesitás"], correcta: 3, explicacion: "Sin esa línea, Juan tiene que leer todo para adivinar. Pensar que lo va a entender tienta porque vos sabés el motivo, pero él no." },
    { q: "Vas a reenviar un mail con varias respuestas anteriores. ¿Qué revisás?", opciones: ["Solo el asunto","Que no haya comentarios privados en los mensajes de abajo","El color de la letra","Nada"], correcta: 1, explicacion: "El reenvío arrastra todo el historial. Revisar solo el asunto tienta por rápido, pero lo de abajo también llega." },
    { q: "Recibiste un pedido que no podés resolver hasta el jueves. ¿Qué hacés hoy?", opciones: ["No respondés hasta el jueves","Respondés el jueves sin avisar","Respondés \"Lo recibí, te respondo el jueves\"","Le pasás el mail a otro sin decir nada"], correcta: 2, explicacion: "Avisar evita que la otra persona quede esperando. Esperar al jueves tienta para responder completo, pero parece que no lo viste." },
    { q: "Tu CV se llama \"documento final (3).docx\". ¿Qué cambiás?", opciones: ["Lo guardás en PDF como \"CV-Juana-Perez.pdf\"","Nada, se abre igual","Lo llamás \"CV\" a secas","Lo comprimís en un ZIP"], correcta: 0, explicacion: "Nombre claro y PDF se reconocen y se ven igual en cualquier lado. \"CV\" a secas tienta por corto, pero quien recibe cien no sabe de quién es." },
    { q: "Tenés que mandar fotos que pesan 30 MB juntas por Gmail. ¿Qué hacés?", opciones: ["Las adjuntás igual","Las mandás en 10 mails","Las sacás de nuevo en baja calidad sin avisar","Las subís a Drive y mandás el enlace"], correcta: 3, explicacion: "Gmail permite hasta 25 MB adjuntos. Mandarlas en 10 mails tienta, pero llena la bandeja de quien recibe." },
    { q: "Escribiste \"te adjunto el CV\" y apretaste enviar sin el archivo. ¿Cómo lo evitás la próxima?", opciones: ["No mencionás el adjunto","Adjuntás el archivo antes de escribir el texto y revisás antes de enviar","Mandás siempre dos mails","No adjuntás nunca"], correcta: 1, explicacion: "Adjuntar primero evita el olvido. No mencionarlo tienta para que no se note, pero entonces nadie sabe que tiene que buscarlo." },
    { q: "¿Qué es un MB?", opciones: ["Un tipo de archivo","Una marca de correo","Una medida del tamaño de un archivo","Una carpeta de Gmail"], correcta: 2, explicacion: "MB (megabyte) mide cuánto pesa un archivo. Pensar que es un tipo de archivo tienta como PDF, pero mide tamaño." },
    { q: "Mandaste tu CV hace 4 días hábiles y no te respondieron. ¿Qué hacés?", opciones: ["Un seguimiento corto y amable sobre el mismo mail","Nada, ya es un no","Un mail nuevo diciendo que no te contestaron","Llamar 5 veces el mismo día"], correcta: 0, explicacion: "Muchas veces el mail quedó tapado. Darlo por perdido tienta para no molestar, pero un seguimiento amable está bien visto." },
    { q: "Tu seguimiento dice \"Te escribí hace una semana y no me contestaste\". ¿Cómo lo mejorás?", opciones: ["\"¿¿Me vas a contestar??\"","\"Última vez que escribo\"","Lo dejás así","\"Te escribo para saber si pudiste ver mi CV\""], correcta: 3, explicacion: "Pide lo mismo sin reproche. La versión directa tienta por honesta, pero suena a queja y predispone mal." },
    { q: "¿Por qué conviene hacer el seguimiento sobre el mismo mail?", opciones: ["Porque Gmail no deja mandar mails nuevos","Para que quien lee tenga todo el historial a mano","Para que parezca más largo","No importa"], correcta: 1, explicacion: "Con el historial abajo, no tiene que buscar. Un mail nuevo tienta para que destaque, pero pierde el contexto." },
  ],
},
{
  id: "whatsapp",
  icono: "💬",
  titulo: "WhatsApp y mensajes de trabajo",
  nivel: "Intermedio",
  objetivos: [
    "Escribir mensajes de trabajo completos en un solo mensaje, en horarios razonables",
    "Decidir cuándo conviene un audio y cuándo un texto, y comportarse bien en grupos de trabajo",
    "Usar las funciones de WhatsApp Business para atender clientes",
  ],
  lecciones: [
    { titulo: "Un mensaje completo", html: `
      <p class="idea">En el trabajo, WhatsApp no es un chat con amigos. Un buen mensaje se entiende solo: saludo, quién sos si no te conocen, qué necesitás y para cuándo, todo junto.</p>
      <pre><code>Así no (5 mensajes y la otra persona espera):
Hola
Una pregunta
Soy Juana
Por lo del presupuesto
¿Está?

Así sí (uno solo):
Hola, Marcos. Soy Juana Pérez, la del presupuesto de pintura
del depto de calle Mitre. ¿Me lo podés mandar antes del viernes?
¡Gracias!</code></pre>
      <p><strong>Horarios:</strong> en general, de lunes a viernes de 9 a 19 es razonable. Fuera de ese horario, si no es urgente, programá el mensaje o esperá. Si lo mandás igual, aclaralo: "Te lo dejo para cuando puedas".</p>
      <p><strong>Ortografía:</strong> no hace falta que sea un mail formal, pero sí que se entienda. Nada de "q", "xq" o "tmb" con un cliente o un jefe que no conocés bien.</p>
      <p>Por ejemplo, el "Hola" solo, sin nada más, obliga a la otra persona a responder "Hola, ¿qué necesitás?" y esperar. Un mensaje completo ahorra la vuelta.</p>` },
    { titulo: "Audios y grupos", html: `
      <p class="idea">El audio es cómodo para quien lo manda e incómodo para quien lo recibe: no se puede leer en una reunión, no se busca y obliga a escuchar todo. En el trabajo, el texto casi siempre gana.</p>
      <table>
        <tr><th>Texto</th><th>Audio (corto)</th></tr>
        <tr><td>Datos: direcciones, precios, fechas, horarios</td><td>Explicar algo largo a alguien de confianza que te lo pidió</td></tr>
        <tr><td>Primer contacto con alguien</td><td>Cuando escribir te lleva mucho más que hablar</td></tr>
        <tr><td>Algo que hay que poder buscar después</td><td>Siempre de menos de 1 minuto, y avisando el tema</td></tr>
      </table>
      <p><strong>En los grupos de trabajo:</strong></p>
      <ul>
        <li>Respondé en privado lo que es para una sola persona.</li>
        <li>Nada de cadenas, chistes o política en el grupo del trabajo.</li>
        <li>Si un tema largo es entre dos, sigan por privado o con una llamada.</li>
        <li>Silenciá el grupo fuera de tu horario si podés: no tenés que estar disponible siempre.</li>
      </ul>
      <p>Por ejemplo, una dirección dictada en un audio de 2 minutos obliga a escucharlo tres veces para anotarla. Escrita, se copia y se pega en el mapa.</p>` },
    { titulo: "WhatsApp Business para tu emprendimiento", video: {"id":"PT7HGULrUSE","t":"¿Qué es WhatsApp Business? · LearnFree en Español (1:50)"}, html: `
      <p class="idea"><strong>WhatsApp Business</strong> es una aplicación gratis de WhatsApp pensada para negocios chicos. Usa otro número que tu WhatsApp personal y trae funciones para atender clientes con orden.</p>
      <table>
        <tr><th>Función</th><th>Para qué</th></tr>
        <tr><td>Perfil de empresa</td><td>Horario, dirección, rubro y sitio web visibles para el cliente</td></tr>
        <tr><td>Mensaje de bienvenida</td><td>Responde solo la primera vez que alguien te escribe</td></tr>
        <tr><td>Mensaje de ausencia</td><td>Avisa fuera de tu horario cuándo vas a responder</td></tr>
        <tr><td>Respuestas rápidas</td><td>Textos guardados que insertás con un atajo, como "/precios"</td></tr>
        <tr><td>Etiquetas</td><td>Ordenar los chats: "Nuevo", "Pagó", "Para entregar"</td></tr>
        <tr><td>Catálogo</td><td>Mostrar tus productos con foto y precio</td></tr>
      </table>
      <p><strong>Un enlace para que te escriban:</strong> con la función de clic para chatear, un enlace como wa.me/ seguido de tu número abre un chat con vos. Sirve para ponerlo en Instagram o en una tarjeta.</p>
      <p><strong>Cuidado con los datos:</strong> no pidas ni mandes contraseñas, ni datos completos de tarjetas, por WhatsApp. Si alguien te pide un código que te llegó por SMS, no lo pases: es la forma más común de robar cuentas.</p>
      <p>Por ejemplo, si te preguntan todos los días los precios, una respuesta rápida "/precios" con la lista te ahorra escribirla cada vez.</p>` },
  ],
  practica: [
    "Reescribí 3 mensajes de trabajo que mandaste en varias partes como un solo mensaje completo. Anotá cuántos mensajes eran antes y cuántos después.",
    "Durante una semana, anotá cuántos audios de trabajo mandaste y cuántos podrían haber sido texto según la tabla de la lección.",
    "Si tenés un emprendimiento, instalá WhatsApp Business y configurá el perfil, un mensaje de ausencia y 2 respuestas rápidas. Anotá cuáles armaste.",
  ],
  recursos: [
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
    { t: "WhatsApp: cómo usar la función de clic para chatear", url: "https://faq.whatsapp.com/5913398998672934/?locale=es_LA" },
    { t: "Servicio de ayuda de WhatsApp", url: "https://faq.whatsapp.com/?locale=es_LA" },
  ],
  quiz: [
    { q: "Le querés pedir un presupuesto a alguien que no te conoce. ¿Cómo empieza tu mensaje?", opciones: ["\"Hola\" y esperás que conteste","Cinco mensajes cortos seguidos","Saludo, quién sos, qué necesitás y para cuándo, en un solo mensaje","Un audio de 3 minutos"], correcta: 2, explicacion: "Un mensaje completo se responde de una. El \"Hola\" solo tienta por cortés, pero obliga a una vuelta más." },
    { q: "Son las 23 y querés pasarle un dato no urgente a un cliente. ¿Qué hacés?", opciones: ["Lo programás o lo mandás a la mañana","Lo mandás ya, así no te olvidás","Lo llamás","Mandás varios mensajes para que lo vea"], correcta: 0, explicacion: "Fuera de horario, si no es urgente, esperá. Mandarlo ya tienta para no olvidarte, pero puede molestar." },
    { q: "Tu mensaje a un cliente dice \"q t parece xq tmb tengo otro\". ¿Qué cambiás?", opciones: ["Nada, en WhatsApp se escribe así","Agregás emojis","Lo mandás por audio","Escribís las palabras completas para que se entienda"], correcta: 3, explicacion: "No hace falta ser formal, pero sí claro. Pensar que en WhatsApp se escribe así tienta, pero con un cliente da mala impresión." },
    { q: "Tenés que pasarle una dirección y un horario a un compañero. ¿Texto o audio?", opciones: ["Audio, es más rápido","Texto: se copia, se busca y se pega en el mapa","Audio de 2 minutos con todo explicado","Una foto de un papel"], correcta: 1, explicacion: "Los datos van por escrito. El audio tienta por rápido para vos, pero el otro tiene que escucharlo varias veces." },
    { q: "¿Cuándo puede estar bien un audio de trabajo?", opciones: ["Siempre en el primer contacto","Para pasar precios","Corto, con alguien de confianza, para explicar algo largo que te pidió","Cuando dura más de 5 minutos"], correcta: 2, explicacion: "Corto y con confianza puede servir. El primer contacto tienta por cercano, pero quien no te conoce prefiere leer." },
    { q: "En el grupo de trabajo, alguien te pregunta algo que es solo para vos. ¿Dónde respondés?", opciones: ["Por privado","En el grupo, para que todos sepan","No respondés","Con un audio en el grupo"], correcta: 0, explicacion: "Lo que es para uno va por privado. Responder en el grupo tienta por rápido, pero les llena el chat a todos." },
    { q: "Querés compartir un chiste en el grupo del trabajo. ¿Qué pensás?", opciones: ["Que une al equipo","Que si es gracioso está bien","Que hay que mandarlo de noche","Que mejor no: chistes, cadenas y política no van en el grupo del trabajo"], correcta: 3, explicacion: "El grupo es para el trabajo. Que une al equipo tienta, pero lo que a uno le causa gracia a otro le molesta." },
    { q: "Tenés un emprendimiento y te preguntan los precios todos los días. ¿Qué función de WhatsApp Business usás?", opciones: ["Un mensaje de ausencia","Una respuesta rápida, como \"/precios\"","Una etiqueta","El catálogo vacío"], correcta: 1, explicacion: "La respuesta rápida inserta el texto con un atajo. El mensaje de ausencia tienta porque también es automático, pero solo sale fuera de horario." },
    { q: "Querés que tus clientes sepan cuándo respondés si escriben de noche. ¿Qué configurás?", opciones: ["Una respuesta rápida","Una etiqueta \"Noche\"","Un mensaje de ausencia","Nada"], correcta: 2, explicacion: "El mensaje de ausencia responde solo fuera de horario. La respuesta rápida tienta, pero la tenés que mandar vos." },
    { q: "Querés ordenar tus chats entre clientes que pagaron y los que no. ¿Qué usás?", opciones: ["Etiquetas, como \"Pagó\" y \"Para entregar\"","El catálogo","El mensaje de bienvenida","Borrar los chats viejos"], correcta: 0, explicacion: "Las etiquetas ordenan los chats. Borrar tienta para limpiar, pero perdés el historial de cada cliente." },
    { q: "Querés poner en Instagram un enlace para que te escriban directo. ¿Qué usás?", opciones: ["Tu número sin nada más","Una foto de tu número","El enlace de tu perfil personal","El enlace de clic para chatear: wa.me/ seguido de tu número"], correcta: 3, explicacion: "El enlace abre el chat con un toque. El número solo tienta por simple, pero obliga a agendarlo primero." },
    { q: "Un \"cliente\" te pide por WhatsApp el código que te llegó por SMS. ¿Qué hacés?", opciones: ["Se lo pasás si parece amable","No se lo pasás: es la forma más común de robar cuentas","Se lo pasás si es un cliente viejo","Le pasás la mitad"], correcta: 1, explicacion: "Ese código es la llave de tu cuenta. Que parece amable tienta, pero los estafadores siempre lo parecen." },
  ],
},
{
  id: "orden",
  icono: "🗂️",
  titulo: "Orden, firma y cuidado",
  nivel: "Intermedio",
  objetivos: [
    "Mantener la bandeja ordenada con búsqueda, etiquetas y archivo",
    "Armar una firma profesional y revisar cada mail antes de enviarlo",
    "Usar la IA para redactar sin perder tu voz y reconocer mails de phishing",
  ],
  lecciones: [
    { titulo: "La bandeja ordenada", html: `
      <p class="idea">No hace falta leer todo apenas llega. Hace falta que lo importante no se pierda. Tres herramientas alcanzan: buscar, etiquetar y archivar.</p>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th><th>Ejemplo</th></tr>
        <tr><td>Buscar</td><td>Encuentra mails por palabra, persona o fecha</td><td>from:laura presupuesto</td></tr>
        <tr><td>Etiquetas (carpetas en Outlook)</td><td>Agrupan mails por tema</td><td>"Búsqueda de trabajo", "Clientes"</td></tr>
        <tr><td>Archivar</td><td>Saca el mail de la bandeja sin borrarlo</td><td>Lo que ya resolviste</td></tr>
      </table>
      <p><strong>Una rutina simple, dos veces por día:</strong></p>
      <ol>
        <li>Lo que se resuelve en 2 minutos, resolvelo ya.</li>
        <li>Lo que lleva más, marcalo o etiquetalo como pendiente.</li>
        <li>Lo resuelto, archivalo.</li>
        <li>Las publicidades que nunca leés: date de baja con el enlace "Cancelar suscripción" de las empresas que conocés.</li>
      </ol>
      <p>Un <strong>filtro</strong> hace esto solo: por ejemplo, que todo lo que llega de tu banco vaya directo a la etiqueta "Banco".</p>
      <p>Por ejemplo, escribir "from:laura presupuesto" en el buscador de Gmail trae solo los mails de Laura que dicen "presupuesto", aunque sean de hace un año.</p>` },
    { titulo: "Firma y revisión antes de enviar", video: {"id":"W-c5kvB4vYs","t":"Cómo añadir una firma a tus emails en Gmail · EducaTIC (2:05)"}, html: `
      <p class="idea">Una firma bien hecha se configura una vez y aparece sola. La revisión antes de enviar, en cambio, se hace cada vez: es la diferencia entre un mail prolijo y uno con el adjunto olvidado.</p>
      <pre><code>Juana Pérez
Pintora de obra – presupuestos sin cargo
11 5555-0000 · juana.perez@…
Zona Oeste, GBA</code></pre>
      <p><strong>La firma:</strong> nombre, qué hacés y un teléfono. Sin frases largas, sin imágenes pesadas. En Gmail se arma en Configuración → Firma.</p>
      <p><strong>Antes de enviar, revisá en este orden:</strong></p>
      <ol>
        <li>Destinatarios: ¿es la persona correcta? ¿CC o CCO?</li>
        <li>Asunto: ¿dice de qué se trata?</li>
        <li>Adjunto: ¿está?</li>
        <li>Nombre de la persona: ¿bien escrito?</li>
        <li>Releé en voz baja: ¿se entiende?, ¿el tono es el que querés?</li>
      </ol>
      <p><strong>Deshacer el envío:</strong> Gmail deja unos segundos para arrepentirte después de apretar Enviar. En la configuración podés llevarlo hasta 30 segundos.</p>
      <p>Por ejemplo, completar el destinatario al final, cuando el mail ya está revisado, evita mandarlo a medio escribir.</p>` },
    { titulo: "IA para redactar y mails trampa", html: `
      <p class="idea">La IA puede ayudarte a escribir un mail, pero el que firma sos vos: revisá datos, tono y que suene a vos. Y del otro lado, aprendé a reconocer el <strong>phishing</strong>: mails falsos que buscan robarte datos o plata.</p>
      <p><strong>Pedirle un mail a la IA:</strong></p>
      <pre><code>Escribí un mail corto y amable para Laura, de una empresa de limpieza.
Le pido que me confirme si el puesto de recepcionista sigue abierto.
Le mandé el CV el lunes 3. Tono formal, en castellano de Argentina,
menos de 80 palabras. No inventes datos.</code></pre>
      <p>Después revisá: ¿inventó algo?, ¿suena exagerado ("¡Estoy sumamente entusiasmada!")?, ¿usó el trato que querías? Nunca le pases contraseñas ni datos de otras personas.</p>
      <p>Gmail también trae <strong>Redacción inteligente</strong>, que sugiere cómo terminar la frase mientras escribís. Aceptá solo lo que de verdad quieras decir.</p>
      <p><strong>Señales de phishing:</strong></p>
      <table>
        <tr><th>Señal</th><th>Ejemplo</th></tr>
        <tr><td>Urgencia o amenaza</td><td>"Su cuenta será bloqueada en 24 horas"</td></tr>
        <tr><td>Remitente raro</td><td>soporte@banco-seguridad-ar.info</td></tr>
        <tr><td>Pide datos o claves</td><td>"Confirme su contraseña en este enlace"</td></tr>
        <tr><td>Adjunto inesperado</td><td>"Factura pendiente.zip" de alguien que no conocés</td></tr>
      </table>
      <p>Por ejemplo, si te llega una "oferta de trabajo" que pide pagar un curso o un kit para empezar, es una estafa: un trabajo real no te cobra por trabajar. El curso de seguridad digital de este sitio profundiza en esto.</p>` },
  ],
  practica: [
    "Creá 3 etiquetas (o carpetas) para tus mails importantes y archivá lo resuelto de la última semana. Anotá cuántos mails quedaron en la bandeja antes y después.",
    "Buscá en tu correo con \"from:\" y una palabra clave. Anotá la búsqueda y cuántos resultados trajo.",
    "Armá tu firma con nombre, qué hacés y un teléfono, y activá el deshacer envío en 30 segundos. Mandate un mail de prueba y anotá si aparecen los dos.",
    "Pedile a una IA un mail con el modelo de la lección y marcá lo que cambiaste. Anotá cuántas cosas tuviste que corregir (datos, tono, exageraciones).",
  ],
  recursos: [
    { t: "Gmail: acotar las búsquedas", url: "https://support.google.com/mail/answer/7190?hl=es" },
    { t: "Gmail: crear una firma", url: "https://support.google.com/mail/answer/8395?hl=es" },
    { t: "Gmail: enviar mensajes o deshacer el envío", url: "https://support.google.com/mail/answer/2819488?hl=es" },
    { t: "Gmail: evitar y denunciar los correos de phishing", url: "https://support.google.com/mail/answer/8253?hl=es" },
    { t: "Gmail: usar Redacción inteligente", url: "https://support.google.com/mail/answer/9116836?hl=es" },
  ],
  quiz: [
    { q: "Tenés 600 mails en la bandeja y perdés los importantes. ¿Qué hacés primero?", opciones: ["Borrás todo","Leés los 600 hoy","Archivás lo resuelto y etiquetás lo importante","Abrís otra cuenta"], correcta: 2, explicacion: "Archivar no borra y deja la bandeja limpia. Borrar todo tienta por rápido, pero perdés lo que todavía sirve." },
    { q: "¿Qué diferencia hay entre archivar y borrar?", opciones: ["Archivar saca el mail de la bandeja sin borrarlo; se puede buscar después","Ninguna","Archivar lo manda a la papelera","Archivar lo reenvía a otra cuenta"], correcta: 0, explicacion: "Lo archivado se encuentra con el buscador. Pensar que es lo mismo tienta, pero lo borrado termina desapareciendo." },
    { q: "Querés encontrar los mails de Laura que hablan de un presupuesto. ¿Qué buscás en Gmail?", opciones: ["laura laura laura","Bajás hasta encontrarlo","presupuesto from","from:laura presupuesto"], correcta: 3, explicacion: "from: filtra por remitente y la palabra acota. Bajar hasta encontrarlo tienta, pero con cientos de mails no termina nunca." },
    { q: "Un mail se resuelve en 1 minuto. ¿Qué hacés según la rutina?", opciones: ["Lo etiquetás como pendiente","Lo resolvés ya","Lo dejás para el viernes","Lo reenviás a alguien"], correcta: 1, explicacion: "Lo de 2 minutos se hace en el momento. Etiquetarlo tienta para ordenar, pero anotarlo lleva casi lo mismo que hacerlo." },
    { q: "Querés que todo lo de tu banco vaya solo a una etiqueta. ¿Qué armás?", opciones: ["Una firma","Una respuesta rápida","Un filtro","Un mail nuevo"], correcta: 2, explicacion: "El filtro clasifica solo lo que llega. La etiqueta sola tienta, pero hay que ponerla a mano en cada mail." },
    { q: "Tu firma tiene una frase de 4 líneas y una imagen de 2 MB. ¿Qué cambiás?", opciones: ["La dejás en nombre, qué hacés y un teléfono, sin imágenes pesadas","Le agregás otra frase","La dejás, es tu estilo","Le sacás el nombre"], correcta: 0, explicacion: "Una firma corta se lee y no pesa. El estilo tienta, pero cada mail carga la imagen y la frase." },
    { q: "Antes de enviar, ¿qué revisás primero?", opciones: ["El color de la letra","La cantidad de palabras","La hora","Los destinatarios: persona correcta y CC o CCO"], correcta: 3, explicacion: "Un destinatario equivocado no tiene arreglo. La cantidad de palabras tienta como control, pero no evita el peor error." },
    { q: "Apretaste Enviar y te diste cuenta de que faltaba el adjunto. ¿Qué te puede salvar en Gmail?", opciones: ["Borrar el mail de tu bandeja de enviados","Deshacer el envío, en los segundos que da","Apagar la computadora","Nada, nunca"], correcta: 1, explicacion: "Deshacer el envío lo frena si llegás a tiempo. Borrarlo de enviados tienta, pero al otro ya le llegó." },
    { q: "Le pediste un mail a la IA y dice \"¡Estoy sumamente entusiasmada y apasionada!\". ¿Qué hacés?", opciones: ["Lo mandás tal cual","Le agregás más entusiasmo","Lo bajás a un tono que suene a vos","Le pedís que lo haga más largo"], correcta: 2, explicacion: "El que firma sos vos. Mandarlo tal cual tienta por rápido, pero suena exagerado y poco tuyo." },
    { q: "Querés que la IA te ayude con un mail sobre un cliente. ¿Qué no le pasás?", opciones: ["Contraseñas ni datos privados de otras personas","El tono que querés","La cantidad de palabras","Para quién es el mail"], correcta: 0, explicacion: "Los datos privados no van a la IA. El tono y la longitud tientan como lo que hay que cuidar, pero son lo que la ayuda a escribir bien." },
    { q: "Te llega un mail: \"Su cuenta será bloqueada en 24 horas. Confirme su clave en este enlace\". ¿Qué es?", opciones: ["Un aviso real del banco","Spam inofensivo","Un error del sistema","Phishing: urgencia más pedido de clave"], correcta: 3, explicacion: "Urgencia y pedido de clave son señales claras. Que parece del banco tienta, pero un banco nunca pide la clave por mail." },
    { q: "Una \"oferta de trabajo\" te pide pagar un kit para empezar. ¿Qué concluís?", opciones: ["Que es una inversión normal","Que es una estafa: un trabajo real no te cobra por trabajar","Que hay que pagar la mitad","Que es una prueba de compromiso"], correcta: 1, explicacion: "Un trabajo de verdad no cobra para empezar. La inversión tienta como explicación, pero es el engaño más común." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu carpeta de mensajes",
  nivel: "Avanzado",
  objetivos: [
    "Escribir 5 mensajes reales de trabajo con todo lo del curso",
    "Evaluarlos con una rúbrica y corregir lo que falla",
    "Guardar los mejores como plantillas para usar de nuevo",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es una carpeta con 5 mensajes de trabajo, escritos para situaciones reales tuyas o muy probables. Vas a usar todo el curso.</p>
      <table>
        <tr><th>Mensaje</th><th>Canal</th><th>Usa el módulo</th></tr>
        <tr><td>1. Mandar tu CV o un presupuesto con adjunto</td><td>Mail</td><td>Partes del mail, Mails claros, Adjuntar</td></tr>
        <tr><td>2. Seguimiento de ese mail</td><td>Mail</td><td>Responder y seguimiento</td></tr>
        <tr><td>3. Un reclamo o un "no" con alternativa</td><td>Mail</td><td>El tono justo</td></tr>
        <tr><td>4. Un pedido a alguien que no te conoce</td><td>WhatsApp</td><td>Mensajes de trabajo</td></tr>
        <tr><td>5. Resumen de un acuerdo hablado</td><td>Mail</td><td>¿Mail, mensaje o llamada?</td></tr>
      </table>
      <p><strong>Cómo hacerlo:</strong> escribí los 5 en un documento o como borradores en tu correo. No hace falta mandarlos: si querés probarlos, mandátelos a vos mismo o a alguien de confianza.</p>
      <p>Por ejemplo, si estás buscando trabajo, el mensaje 1 puede ser tu CV para un aviso real, y el 2, el seguimiento que mandarías 4 días después.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si el trabajo está listo. Pasale esta rúbrica a cada uno de tus 5 mensajes.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Asunto o primera línea</td><td>Dice de qué se trata</td><td>Genérico ("Consulta")</td><td>Vacío u "Hola"</td></tr>
        <tr><td>Lo importante primero</td><td>El pedido en las 2 primeras líneas</td><td>En el medio</td><td>Al final o no está</td></tr>
        <tr><td>Pedido concreto</td><td>Qué, quién y para cuándo</td><td>Falta la fecha</td><td>"Cuando puedas"</td></tr>
        <tr><td>Tono</td><td>Acorde a la persona, amable</td><td>Algo seco o algo exagerado</td><td>Mayúsculas, ironía o reproche</td></tr>
        <tr><td>Forma</td><td>Párrafos cortos, sin errores, nombre bien escrito</td><td>Algún error</td><td>Un bloque con errores</td></tr>
        <tr><td>Canal y extras</td><td>Canal justo; adjunto con nombre claro o firma</td><td>Canal justo sin extras</td><td>Canal equivocado</td></tr>
      </table>
      <pre><code>Puntaje por mensaje: máximo 12
11 o 12 → listo
7 a 10  → corregí los criterios con 0 o 1
0 a 6   → volvé a escribirlo desde el pedido</code></pre>
      <p>Por ejemplo, si un mensaje saca 0 en "Pedido concreto", arreglá eso antes que la ortografía: sin un pedido claro, el resto no alcanza.</p>` },
    { titulo: "Tus plantillas", html: `
      <p class="idea">Una <strong>plantilla</strong> es un mensaje modelo que guardás para no empezar de cero. Los 5 mensajes del proyecto, corregidos, son tus primeras plantillas.</p>
      <pre><code>Plantilla: seguimiento de CV
Asunto: RE: CV de [nombre] para el puesto de [puesto]
Hola, [nombre]:
Te escribo para saber si pudiste ver mi CV, que te mandé el [día].
Sigo muy interesada en el puesto. Quedo atenta.
Saludos,
[tu nombre] – [teléfono]</code></pre>
      <p><strong>Dónde guardarlas:</strong></p>
      <table>
        <tr><th>Lugar</th><th>Cómo</th></tr>
        <tr><td>Gmail</td><td>Plantillas (hay que activarlas en Configuración → Avanzado) o un borrador guardado</td></tr>
        <tr><td>WhatsApp Business</td><td>Respuestas rápidas</td></tr>
        <tr><td>Cualquier lado</td><td>Un documento con todas, para copiar y pegar</td></tr>
      </table>
      <p><strong>Antes de usar una plantilla, cambiá todo lo que está entre corchetes</strong> y releé: el error clásico es mandar "Hola, [nombre]" o el nombre de la persona anterior.</p>
      <p>Por ejemplo, con 5 plantillas bien hechas resolvés en 2 minutos mails que antes te llevaban 20.</p>` },
  ],
  practica: [
    "Escribí los 5 mensajes del encargo. Anotá para cada uno el canal y a quién va dirigido.",
    "Pasale la rúbrica a cada mensaje y anotá el puntaje de cada criterio y el total sobre 12.",
    "Corregí los mensajes con menos de 11 puntos y volvé a medirlos. Anotá el puntaje antes y después de cada uno.",
    "Guardá al menos 3 mensajes como plantillas con corchetes en las partes que cambian. Anotá dónde las guardaste.",
  ],
  recursos: [
    { t: "Purdue OWL: etiqueta del correo electrónico (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html" },
    { t: "Gmail: enviar mensajes o deshacer el envío", url: "https://support.google.com/mail/answer/2819488?hl=es" },
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
  ],
  quiz: [
    { q: "Tu carpeta tiene que incluir un seguimiento. ¿De qué mensaje?", opciones: ["De un mail que nunca mandaste","De un audio","Del mail con tu CV o presupuesto, unos días después","De un mensaje en el grupo"], correcta: 2, explicacion: "El seguimiento va sobre el mismo mail. Hacerlo sobre otro tienta para practicar más, pero pierde el historial." },
    { q: "Querés probar tus mensajes sin mandarlos a un cliente real. ¿Qué hacés?", opciones: ["Te los mandás a vos mismo o a alguien de confianza","Los mandás igual al cliente","No los probás","Los publicás en redes"], correcta: 0, explicacion: "Mandártelos muestra cómo llegan. Mandarlos al cliente tienta por realista, pero si están a medio corregir quedás mal." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una firma de mail","Un tipo de adjunto","Una etiqueta de Gmail","Una lista de criterios con puntaje para saber si el trabajo está listo"], correcta: 3, explicacion: "La rúbrica te dice qué mejorar. Confundirla con una firma tienta por el nombre, pero es una herramienta para evaluar." },
    { q: "Tu mail dice \"Cuando puedas, avisame lo del presupuesto\". ¿Cuánto saca en \"Pedido concreto\"?", opciones: ["2: es amable","0: falta qué exactamente y la fecha","1: tiene un pedido","No se evalúa"], correcta: 1, explicacion: "\"Cuando puedas\" es el ejemplo de 0. Que es amable tienta, pero el tono se evalúa en otro criterio." },
    { q: "Un mensaje saca 0 en pedido y 2 en ortografía. ¿Qué arreglás primero?", opciones: ["La ortografía","El color de la firma","El pedido: sin pedido claro, el resto no alcanza","Nada, el promedio da bien"], correcta: 2, explicacion: "El pedido es lo que hace que el mensaje sirva. La ortografía tienta porque es fácil de ver, pero ya estaba bien." },
    { q: "Tu mensaje saca 9 sobre 12. ¿Qué hacés?", opciones: ["Corregís los criterios con 0 o 1 y volvés a medir","Lo das por listo","Lo borrás y empezás de cero","Lo hacés más largo"], correcta: 0, explicacion: "Entre 7 y 10 se corrige lo que falló. Empezar de cero tienta, pero desperdicia lo que ya funciona." },
    { q: "Tu reclamo tiene la palabra \"SIEMPRE\" en mayúsculas. ¿Qué criterio pierde puntos?", opciones: ["Asunto","Canal","Adjunto","Tono"], correcta: 3, explicacion: "Las mayúsculas suenan a grito y bajan el tono a 0. Forma tienta porque es algo visual, pero lo que falla es cómo suena." },
    { q: "Le escribiste a un desconocido por WhatsApp con un \"Hola\" solo. ¿Qué criterio falla?", opciones: ["Canal","Lo importante primero: el pedido no está","Adjunto","Ninguno"], correcta: 1, explicacion: "Sin pedido, el mensaje no dice nada. Canal tienta como problema, pero WhatsApp era el canal pedido para ese mensaje." },
    { q: "Si querés dejar de escribir de cero los mismos mails, ¿qué te conviene armar?", opciones: ["Mails ya mandados que no se pueden cambiar","Una firma más larga","Plantillas: mensajes modelo que guardás y adaptás","Un archivo PDF por cada mail"], correcta: 2, explicacion: "La plantilla se copia y se adapta. Usar mails viejos sin cambiarlos tienta, pero justamente se hace para adaptarla." },
    { q: "Vas a usar una plantilla de seguimiento. ¿Qué revisás antes de enviar?", opciones: ["Que no quede nada entre corchetes ni el nombre de la persona anterior","Nada, ya está corregida","Solo el asunto","Que tenga más palabras"], correcta: 0, explicacion: "El error clásico es mandar \"Hola, [nombre]\". Pensar que ya está corregida tienta, pero cada uso cambia los datos." },
    { q: "Tenés un emprendimiento y querés guardar plantillas para WhatsApp. ¿Dónde?", opciones: ["En las etiquetas","En el mensaje de ausencia","En el estado","En las respuestas rápidas de WhatsApp Business"], correcta: 3, explicacion: "Las respuestas rápidas guardan textos para insertar. Las etiquetas tientan porque también ordenan, pero clasifican chats, no textos." },
    { q: "Acordaste por teléfono una entrega con un cliente. ¿Qué mensaje de la carpeta corresponde?", opciones: ["El seguimiento de CV","El resumen del acuerdo hablado, por mail","El reclamo","Ninguno"], correcta: 1, explicacion: "El mail que resume deja registro. Ninguno tienta porque ya lo hablaron, pero después cada uno recuerda algo distinto." },
  ],
},
];
