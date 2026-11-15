// Temario del curso "Recepción y secretariado". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js recepcion y node tools/metodologia.js recepcion
window.TEMARIO = [
{
  id: "empezar",
  icono: "🛎️",
  titulo: "Empezar: el puesto de recepción",
  nivel: "Básico",
  objetivos: [
    "Reconocer dónde se trabaja en recepción y qué tareas tiene el puesto",
    "Cuidar la primera impresión: el escritorio, la presentación y el saludo",
    "Identificar las habilidades que más piden para el puesto",
  ],
  lecciones: [
    { titulo: "Qué hace una recepcionista", video: {"id":"kK2xMIy3hG8","t":"Tareas y responsabilidades de recepción · FEHGRA (0:42)"}, html: `
      <p class="idea">La recepción es la puerta de entrada de un lugar: lo primero que ve un cliente, un paciente o un proveedor. La persona de recepción recibe, orienta, atiende el teléfono, maneja la agenda y cuida que la información llegue a quien corresponde.</p>
      <table>
        <tr><th>Dónde</th><th>Tareas típicas</th></tr>
        <tr><td>Consultorio o clínica</td><td>Turnos, recibir pacientes, cobrar, pedir autorizaciones a la obra social</td></tr>
        <tr><td>Empresa u oficina</td><td>Recibir visitas y proveedores, teléfono, correspondencia</td></tr>
        <tr><td>Estudio (contable, jurídico)</td><td>Agenda, llamadas, documentos de clientes</td></tr>
        <tr><td>Hotel</td><td>Ingreso y salida de huéspedes, reservas, consultas</td></tr>
        <tr><td>Gimnasio, club, peluquería</td><td>Turnos, cobros, consultas, inscripciones</td></tr>
      </table>
      <p>En muchos lugares, al puesto también se lo llama <strong>secretaria o secretario</strong>, sobre todo cuando además lleva la agenda y los papeles de un profesional.</p>
      <p>Por ejemplo, en un consultorio, la secretaria es quien decide en qué orden pasan los pacientes, avisa si el médico se atrasa y guarda las órdenes: sin ella, el consultorio no funciona.</p>` },
    { titulo: "La primera impresión", video: {"id":"ArgOKdFvBNs","t":"¿Qué hace un recepcionista de hotel? · Mijnzzp Español (2:29)"}, html: `
      <p class="idea">La recepción da la primera impresión de todo el lugar. Un escritorio ordenado, una presentación prolija y un saludo a tiempo dicen "acá te van a atender bien".</p>
      <table>
        <tr><th>Suma</th><th>Resta</th></tr>
        <tr><td>Escritorio despejado, solo lo necesario</td><td>Papeles apilados, comida, el celular personal a la vista</td></tr>
        <tr><td>Saludar apenas alguien entra, aunque estés ocupado</td><td>Seguir con la computadora sin levantar la vista</td></tr>
        <tr><td>Ropa prolija o uniforme limpio</td><td>Ropa arrugada o desarreglada</td></tr>
        <tr><td>Información a mano (horarios, internos, precios)</td><td>"No sé, esperá que pregunto" para todo</td></tr>
      </table>
      <p><strong>Si estás al teléfono y entra alguien:</strong> un gesto con la mano y una sonrisa ("ya te atiendo") alcanzan hasta que cortes.</p>
      <p><strong>El trato:</strong> en Argentina, en muchos lugares se trata de vos, pero en consultorios, estudios y hoteles suele preferirse usted, sobre todo con personas mayores. Adaptate a cómo te hablan.</p>
      <p>Por ejemplo, alguien que entra a un estudio y espera dos minutos sin que nadie lo mire siente que no le importa a nadie, aunque después lo atiendan muy bien.</p>` },
    { titulo: "Lo que piden para el puesto", html: `
      <p class="idea">Recepción es un buen primer empleo para quien es ordenado y le gusta tratar con gente. Las habilidades que más piden se aprenden y se practican.</p>
      <table>
        <tr><th>Habilidad</th><th>Cómo se ve en el trabajo</th><th>Dónde la practicás</th></tr>
        <tr><td>Buen trato</td><td>Amable aunque haya fila o el otro esté enojado</td><td>Curso "Atención al cliente"</td></tr>
        <tr><td>Organización</td><td>Agenda sin errores, nada se pierde</td><td>Curso "Administración básica de una oficina"</td></tr>
        <tr><td>Comunicación escrita</td><td>Mails y mensajes claros</td><td>Curso "Mails y mensajes de trabajo"</td></tr>
        <tr><td>Computación básica</td><td>Agenda digital, planillas, procesador de texto</td><td>Cursos de Excel y Word de este sitio</td></tr>
        <tr><td>Discreción</td><td>No comentar lo que escuchás ni los datos de nadie</td><td>Módulo de confidencialidad de este curso</td></tr>
        <tr><td>Calma</td><td>Resolver varias cosas a la vez sin perder el trato</td><td>Práctica y prioridades</td></tr>
      </table>
      <p><strong>Muchas cosas pasan a la vez:</strong> suena el teléfono, llega alguien y un médico te pide algo. Elegí qué va primero: lo urgente para la salud o la seguridad, después la persona que está delante, después el teléfono (con un "¿me espera un momento?").</p>
      <p>Por ejemplo, en una entrevista para recepción, contar cómo resolviste estar con el teléfono y la fila al mismo tiempo dice más que "soy organizada".</p>` },
  ],
  practica: [
    "Elegí un lugar donde te gustaría trabajar en recepción y anotá 5 tareas que creés que tendrías, según la tabla.",
    "Fijate en la recepción de un lugar al que vayas (consultorio, banco, gimnasio) y anotá 3 cosas que suman y 3 que restan en la primera impresión.",
    "Puntuate del 1 al 5 en cada habilidad de la tabla y anotá cuál vas a practicar primero y con qué curso.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Si trabajás en la recepción de un consultorio, ¿qué tareas son típicas?", opciones: ["Atender a los pacientes como médica","Hacer recetas","Turnos, recibir pacientes, cobrar y pedir autorizaciones a la obra social","Limpiar los equipos médicos"], correcta: 2, explicacion: "La recepción organiza, no atiende la salud. Hacer recetas tienta porque estás en un consultorio, pero eso es del profesional." },
    { q: "Si en tu escritorio de recepción hay papeles apilados y tu celular personal a la vista, ¿qué transmitís?", opciones: ["Desorden y poca atención","Que trabajás mucho","Que sos moderna","Nada"], correcta: 0, explicacion: "El escritorio es la vidriera. \"Que trabajás mucho\" tienta como lectura, pero el visitante ve desorden." },
    { q: "Estás al teléfono y entra alguien. ¿Qué hacés?", opciones: ["Lo ignorás hasta cortar","Cortás el teléfono de golpe","Le hablás mientras seguís al teléfono","Un gesto y una sonrisa de \"ya te atiendo\" hasta que cortás"], correcta: 3, explicacion: "El gesto reconoce a quien llegó. Ignorarlo tienta para terminar la llamada, pero se siente invisible." },
    { q: "Si trabajás en la recepción de un estudio jurídico y llega una señora mayor, ¿cómo la tratás?", opciones: ["De vos siempre","De usted, y te adaptás a cómo te habla","Con apodos cariñosos","Sin dirigirte a ella"], correcta: 1, explicacion: "En estudios suele preferirse usted. Tratar de vos siempre tienta porque es común, pero con algunas personas cae mal." },
    { q: "Si un visitante espera dos minutos sin que nadie lo mire, ¿qué siente?", opciones: ["Que lo respetan","Nada","Que no le importa a nadie, aunque después lo atiendan bien","Que está en un lugar exclusivo"], correcta: 2, explicacion: "Los primeros segundos marcan todo. \"Nada\" tienta, pero la espera sin saludo molesta mucho." },
    { q: "Si te preguntan los horarios y respondés \"No sé, esperá que pregunto\" cada vez, ¿qué te falta?", opciones: ["Tener la información frecuente a mano","Más paciencia","Otro teléfono","Nada, es normal"], correcta: 0, explicacion: "Tener horarios, internos y precios a mano agiliza. Más paciencia tienta, pero el problema es la información." },
    { q: "¿Qué es la discreción en recepción?", opciones: ["Hablar poco con todos","Esconder la agenda","No saludar","No comentar lo que escuchás ni los datos de nadie"], correcta: 3, explicacion: "Discreción es cuidar la información ajena. Hablar poco tienta como sinónimo, pero se puede ser amable y discreto." },
    { q: "Si suena el teléfono, llega un paciente y un médico te pide algo, ¿qué va primero?", opciones: ["Siempre el teléfono","Lo urgente para la salud o la seguridad, después la persona que está delante, después el teléfono","Siempre el médico","Lo que te guste más"], correcta: 1, explicacion: "La urgencia manda. Siempre el teléfono tienta porque suena fuerte, pero la persona delante también espera." },
    { q: "Querés mejorar tu manejo de la agenda y los papeles. ¿Qué curso del sitio te ayuda?", opciones: ["\"Logística y depósito\"","\"Hablar en público sin miedo\"","\"Administración básica de una oficina\"","Ninguno"], correcta: 2, explicacion: "Ese curso trabaja agenda, archivo y comprobantes. Logística tienta por el orden, pero es para depósitos." },
    { q: "Si en una entrevista para recepción te preguntan cómo te organizás, ¿qué respuesta es mejor?", opciones: ["Contar un ejemplo concreto de cuando resolviste varias cosas a la vez","\"Soy organizada\"","\"Nunca tengo problemas\"","\"Depende del día\""], correcta: 0, explicacion: "Un ejemplo demuestra. \"Soy organizada\" tienta por corto, pero cualquiera lo dice." },
    { q: "En un hotel, ¿qué tarea suele tener la recepción?", opciones: ["Cocinar el desayuno","Limpiar las habitaciones","Hacer el mantenimiento","Ingreso y salida de huéspedes, reservas y consultas"], correcta: 3, explicacion: "La recepción del hotel maneja huéspedes y reservas. Limpiar tienta porque es del hotel, pero lo hace otro equipo." },
    { q: "Si sos recepcionista y además llevás la agenda y los papeles de un profesional, ¿cómo se suele llamar tu puesto?", opciones: ["Gerente","Secretaria o secretario","Administradora de empresas","Asistente técnica"], correcta: 1, explicacion: "Secretariado es el nombre más común. Gerente tienta por las responsabilidades, pero es otro nivel." },
  ],
},
{
  id: "visitas",
  icono: "🚪",
  titulo: "Recibir visitas, proveedores y paquetes",
  nivel: "Básico",
  objetivos: [
    "Recibir a una visita con saludo, identificación y aviso a quien la espera",
    "Llevar un registro de ingresos y cuidar la seguridad del lugar",
    "Recibir proveedores y paquetes dejando constancia",
  ],
  lecciones: [
    { titulo: "Recibir a una visita", html: `
      <p class="idea">Recibir bien a una visita tiene cinco pasos: saludar, preguntar a quién viene a ver, avisar, ofrecer dónde esperar y despedir. Parece simple, pero cada paso cuenta.</p>
      <table>
        <tr><th>Paso</th><th>Qué decís</th></tr>
        <tr><td>1. Saludo</td><td>"Buen día, bienvenido. ¿En qué lo puedo ayudar?"</td></tr>
        <tr><td>2. Identificar</td><td>"¿Me dice su nombre y a quién viene a ver?"</td></tr>
        <tr><td>3. Anunciar</td><td>Avisás por interno o mensaje: "Está el señor Gómez para su reunión de las 10"</td></tr>
        <tr><td>4. Esperar</td><td>"La licenciada Ruiz lo recibe en unos minutos. ¿Quiere tomar asiento?"</td></tr>
        <tr><td>5. Despedir</td><td>"Gracias por venir, que tenga buen día."</td></tr>
      </table>
      <p><strong>Si la espera se alarga,</strong> volvé a avisar cada tanto: "Disculpe la demora, la licenciada está terminando una llamada". Una espera con información se tolera mucho mejor.</p>
      <p><strong>Si la persona llega sin cita,</strong> preguntá el motivo y consultá a quien corresponda antes de prometer nada: "Déjeme consultar si la pueden recibir hoy".</p>
      <p>Por ejemplo, avisar "el doctor viene con 20 minutos de atraso" apenas llega el paciente evita que pregunte tres veces y se enoje.</p>` },
    { titulo: "Registro y seguridad", html: `
      <p class="idea">En muchas empresas, la recepción controla quién entra. Un <strong>registro de ingresos</strong> (en un libro, una planilla o un sistema) sirve para la seguridad y para saber quién está en el edificio si hay una emergencia.</p>
      <pre><code>Registro de visitas – 12/03/2026
Hora   Nombre          DNI          Visita a          Salida
10:02  Carlos Gómez    (verificado) Lic. Ruiz         10:45
10:15  Técnico aire    (verificado) Mantenimiento     11:30</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>No dejar pasar sin autorización de quien la recibe</td><td>Cualquiera puede decir "me esperan"</td></tr>
        <tr><td>Pedir solo los datos que el lugar necesita</td><td>Son datos personales y hay que cuidarlos</td></tr>
        <tr><td>Anotar la hora de salida</td><td>En una evacuación, se sabe quién sigue adentro</td></tr>
        <tr><td>No dejar el registro a la vista de otros visitantes</td><td>Los datos de una persona no son para los demás</td></tr>
      </table>
      <p><strong>Ante algo raro</strong> (alguien insiste en pasar sin autorización, una actitud agresiva), no te enfrentes: avisá a seguridad o al responsable.</p>
      <p>Por ejemplo, un "técnico" que dice venir a revisar las computadoras sin que nadie lo haya pedido tiene que esperar hasta que alguien de la empresa lo confirme.</p>` },
    { titulo: "Proveedores y paquetes", html: `
      <p class="idea">Por la recepción entran también proveedores, repartidores y paquetes. Recibirlos con orden evita que se pierdan cosas y que se firme lo que no llegó.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Llega un paquete</td><td>Controlás destinatario y estado, lo anotás en el registro y avisás a quien es</td></tr>
        <tr><td>Te piden firmar un remito</td><td>Contás bultos y anotás si algo está dañado antes de firmar</td></tr>
        <tr><td>Un proveedor viene a cobrar</td><td>Lo derivás a administración; no pagás sin autorización</td></tr>
        <tr><td>Un paquete para alguien que no está</td><td>Lo guardás en un lugar seguro y avisás por mensaje</td></tr>
      </table>
      <pre><code>Registro de paquetes
Fecha  Para           De               Bultos  Estado    Retiró / firma
12/03  Lic. Ruiz      Librería Sur     1       Bien      R. Ruiz 15:10
12/03  Contaduría     Distribuidora N. 3       1 golpe   (pendiente)</code></pre>
      <p><strong>Cuidado con los paquetes "de cobro":</strong> si alguien trae algo que nadie pidió y te pide pagar al recibirlo, no pagues: consultá primero.</p>
      <p>Por ejemplo, un registro con quién retiró y a qué hora evita el clásico "a mí nunca me llegó".</p>` },
  ],
  practica: [
    "Practicá con alguien la recepción de una visita con los 5 pasos. Anotá qué paso te costó más.",
    "Armá una planilla de registro de visitas con hora, nombre, a quién visita y salida. Cargá 3 visitas inventadas.",
    "Armá un registro de paquetes con las columnas del ejemplo y cargá 3 casos, uno con un bulto dañado. Anotá qué hiciste con ese.",
  ],
  recursos: [
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Llega una visita. ¿Qué preguntás después de saludar?", opciones: ["Su edad","Cuánto tiempo se va a quedar","Su nombre y a quién viene a ver","Nada, la dejás pasar"], correcta: 2, explicacion: "Nombre y a quién viene permite anunciarla. Dejarla pasar tienta por amable, pero no sabés quién es." },
    { q: "Ya sabés a quién viene a ver la visita. ¿Qué hacés?", opciones: ["La anunciás por interno o mensaje","La mandás directo a la oficina","Le decís que busque la oficina","Esperás que la persona salga sola"], correcta: 0, explicacion: "Anunciar avisa y respeta a quien recibe. Mandarla directo tienta por rápido, pero puede interrumpir una reunión." },
    { q: "Si la espera de una visita se alarga, ¿qué hacés?", opciones: ["No decís nada","Le decís que se vaya","Le pedís que no pregunte","Volvés a avisar cada tanto con información"], correcta: 3, explicacion: "Una espera con información se tolera mejor. No decir nada tienta, pero la persona se impacienta." },
    { q: "Llega alguien sin cita y quiere ver al gerente. ¿Qué hacés?", opciones: ["Le decís que sí","Preguntás el motivo y consultás antes de prometer nada","Le decís que no sin consultar","Lo dejás pasar"], correcta: 1, explicacion: "Consultar evita promesas que no se cumplen. Decir que sí tienta por amable, pero quizás no lo pueden recibir." },
    { q: "¿Para qué sirve el registro de ingresos?", opciones: ["Para cobrar la entrada","Para mandar publicidad","Para la seguridad y para saber quién está adentro en una emergencia","No sirve"], correcta: 2, explicacion: "Registra quién entra y sale. Mandar publicidad tienta como uso de datos, pero sería un mal uso." },
    { q: "Si alguien dice \"me esperan\" pero nadie avisó, ¿lo dejás pasar?", opciones: ["No: esperás la autorización de quien lo recibe","Sí, si parece amable","Sí, si insiste","Sí, si tiene traje"], correcta: 0, explicacion: "Cualquiera puede decir \"me esperan\". Que parece amable tienta, pero no confirma nada." },
    { q: "¿Qué datos pedís a una visita?", opciones: ["Todos los posibles, por las dudas","Su clave del banco","Su dirección y teléfono siempre","Solo los que el lugar necesita, y los cuidás"], correcta: 3, explicacion: "Los datos personales se piden con medida. Por las dudas tienta, pero cada dato de más es un riesgo." },
    { q: "Si el registro de visitas queda abierto sobre el mostrador, ¿qué problema hay?", opciones: ["Ninguno","Otros visitantes pueden ver datos personales de los demás","Que se ensucia","Que ocupa lugar"], correcta: 1, explicacion: "Los datos de una persona no son para los demás. \"Ninguno\" tienta, pero es una exposición de datos." },
    { q: "Llega un \"técnico\" a revisar las computadoras y nadie lo pidió. ¿Qué hacés?", opciones: ["Lo dejás pasar, es técnico","Lo acompañás a las computadoras","Le pedís que espere hasta que alguien de la empresa lo confirme","Le das la clave del wifi"], correcta: 2, explicacion: "Confirmar evita engaños. \"Es técnico\" tienta, pero es una forma común de entrar a robar o a instalar algo." },
    { q: "Te piden firmar el remito de 3 bultos y uno está golpeado. ¿Qué hacés?", opciones: ["Lo anotás en el remito antes de firmar","Firmás igual","No firmás ni avisás","Abrís todos los paquetes"], correcta: 0, explicacion: "Tu firma dice que llegó bien. Firmar igual tienta para no demorar, pero después no hay cómo reclamar." },
    { q: "Un proveedor viene a cobrar una factura. ¿Qué hacés?", opciones: ["Le pagás de la caja chica","Le decís que vuelva en un año","Le firmás un papel","Lo derivás a administración; no pagás sin autorización"], correcta: 3, explicacion: "Pagar es de administración. Pagar de la caja chica tienta por rápido, pero no es tu decisión." },
    { q: "Traen un paquete que nadie pidió y te piden pagar al recibirlo. ¿Qué hacés?", opciones: ["Pagás para no demorar","No pagás: consultás primero","Lo recibís y pagás después","Pagás la mitad"], correcta: 1, explicacion: "Es un engaño conocido. Pagar para no demorar tienta, pero puede ser una estafa." },
  ],
},
{
  id: "telefono",
  icono: "☎️",
  titulo: "El teléfono y los mensajes",
  nivel: "Intermedio",
  objetivos: [
    "Atender con un saludo completo y una voz clara",
    "Tomar mensajes completos que no haya que volver a preguntar",
    "Transferir, filtrar y manejar llamadas difíciles con calma",
  ],
  lecciones: [
    { titulo: "Atender bien", video: {"id":"q0N-YRyzAXI","t":"Protocolo de etiqueta telefónica · Comunicación Interna UCundinamarca (4:12)"}, html: `
      <p class="idea">Por teléfono, tu voz es la imagen del lugar. Un saludo completo, una voz clara y una sonrisa (que se nota en la voz) hacen la diferencia.</p>
      <table>
        <tr><th>Momento</th><th>Qué decir</th></tr>
        <tr><td>Saludo</td><td>"Consultorio del doctor López, buenos días, habla Ana. ¿En qué la puedo ayudar?"</td></tr>
        <tr><td>Si no entendés</td><td>"¿Me repite su nombre, por favor?"</td></tr>
        <tr><td>Poner en espera</td><td>"¿Me permite un momento?" y esperás el sí</td></tr>
        <tr><td>Volver de la espera</td><td>"Gracias por esperar."</td></tr>
        <tr><td>Despedida</td><td>"¿Algo más en que la pueda ayudar? Que tenga buen día."</td></tr>
      </table>
      <p><strong>Atendé rápido:</strong> idealmente antes del tercer timbre.</p>
      <p><strong>Usá el nombre de la persona</strong> durante la llamada: "Sí, señora Pérez, le confirmo el turno".</p>
      <p><strong>No comas ni hables con otros mientras atendés:</strong> se escucha todo.</p>
      <p>Por ejemplo, contestar "¿Hola?" obliga a la persona a preguntar "¿Es el consultorio del doctor López?"; el saludo completo responde antes de que pregunte.</p>` },
    { titulo: "Tomar mensajes completos", video: {"id":"He7-L-fPGc0","t":"Ideas para hablar bien por teléfono · Andrea Vilallonga · La Vanguardia (2:10)"}, html: `
      <p class="idea">Un mensaje incompleto obliga a volver a llamar y molesta a todos. Un buen mensaje responde quién, para quién, qué quiere, cómo devolver el llamado y cuándo.</p>
      <pre><code>MENSAJE
Para: Lic. Ruiz
De: Carlos Gómez (Distribuidora Norte)
Teléfono: 11 5555-0000 (mejor después de las 14)
Fecha y hora: 12/03, 10:20
Motivo: quiere confirmar la entrega del jueves
Urgente: no
Tomó: Ana</code></pre>
      <table>
        <tr><th>Paso</th><th>Por qué</th></tr>
        <tr><td>Repetir el teléfono en voz alta</td><td>Un número mal anotado es un mensaje perdido</td></tr>
        <tr><td>Preguntar el mejor horario</td><td>Evita llamadas que nadie atiende</td></tr>
        <tr><td>Anotar el motivo en pocas palabras</td><td>Quien devuelve el llamado sabe de qué se trata</td></tr>
        <tr><td>Entregar el mensaje enseguida</td><td>Por mensaje, mail o el sistema que se use</td></tr>
      </table>
      <p><strong>No prometas por otro:</strong> "Le paso el mensaje y la licenciada lo llama" en vez de "la licenciada lo llama hoy seguro".</p>
      <p>Por ejemplo, "Llamó un señor por algo de una entrega" no sirve; el mensaje del modelo permite devolver la llamada sin dudas.</p>` },
    { titulo: "Transferir, filtrar y llamadas difíciles", video: {"id":"opf4K_vwTog","t":"Atención telefónica correcta: qué NO debes hacer · Audiolís (2:13)"}, html: `
      <p class="idea">Parte del trabajo es decidir qué llamada pasa, a quién y cuándo. Hacerlo bien protege el tiempo de los demás sin maltratar a quien llama.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>Transferir</td><td>"Le paso con contaduría." Avisás a quien recibe de quién es y para qué</td></tr>
        <tr><td>La persona está ocupada</td><td>"En este momento no puede atender. ¿Le tomo un mensaje?"</td></tr>
        <tr><td>Filtrar ventas no pedidas</td><td>"Déjeme sus datos y si nos interesa lo contactamos."</td></tr>
        <tr><td>Alguien enojado</td><td>Dejarlo hablar, reconocer ("entiendo que es molesto"), proponer algo concreto</td></tr>
        <tr><td>Alguien que insulta</td><td>"Quiero ayudarlo, pero necesito que no me insulte." Si sigue, cortar con aviso y contar al responsable</td></tr>
      </table>
      <p><strong>Nunca digas por qué alguien no atiende</strong> si es personal: "está en el médico", "se fue temprano". Alcanza con "no está disponible".</p>
      <p><strong>Llamadas raras:</strong> si alguien pide datos de empleados, de pacientes o claves "para un control", no los des. Tomá el mensaje y avisá.</p>
      <p>Por ejemplo, "El gerente se fue a buscar a su hijo" da información privada; "El gerente no está disponible, ¿le tomo un mensaje?" dice lo necesario.</p>` },
  ],
  practica: [
    "Escribí tu saludo telefónico para un lugar imaginario y decilo en voz alta 3 veces. Anotá cuántos segundos dura.",
    "Armá un formulario de mensaje con los campos del modelo y tomá 3 mensajes en una práctica con alguien. Anotá si faltó algún dato.",
    "Practicá con alguien una llamada de una persona enojada y otra de alguien que pide datos de un empleado. Anotá qué dijiste en cada una.",
  ],
  recursos: [
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si atendés el teléfono del consultorio, ¿cómo saludás?", opciones: ["\"¿Hola?\"","\"¿Quién habla?\"","Nombre del lugar, saludo, tu nombre y \"¿En qué la puedo ayudar?\"","\"Diga\""], correcta: 2, explicacion: "El saludo completo ubica a quien llama. \"¿Hola?\" tienta por natural, pero no dice dónde llamó." },
    { q: "¿Antes de qué timbre conviene atender?", opciones: ["Antes del tercero","Después del décimo","Cuando termines lo que estás haciendo","Da igual"], correcta: 0, explicacion: "Atender rápido muestra atención. \"Cuando termines\" tienta, pero la persona puede cortar." },
    { q: "Tenés que buscar algo durante la llamada. ¿Qué hacés?", opciones: ["Lo dejás en silencio sin avisar","Cortás y llamás después","Le decís que espere sin preguntar","Pedís un momento, esperás el sí y al volver agradecés"], correcta: 3, explicacion: "Pedir y agradecer cuida a quien llama. El silencio tienta por rápido, pero cree que se cortó." },
    { q: "Estás comiendo y suena el teléfono. ¿Qué hacés?", opciones: ["Atendés comiendo","Dejás de comer antes de atender: se escucha todo","No atendés nunca","Atendés y le pedís que espere a que termines"], correcta: 1, explicacion: "Por teléfono se escucha todo. Atender comiendo tienta para no demorar, pero queda muy mal." },
    { q: "Tu mensaje dice \"Llamó un señor por algo de una entrega\". ¿Qué le falta?", opciones: ["Nada","Una firma","Nombre, empresa, teléfono, mejor horario, fecha y hora, y motivo claro","El color de la birome"], correcta: 2, explicacion: "Sin datos, hay que volver a llamar. \"Nada\" tienta porque algo se anotó, pero no se puede devolver la llamada." },
    { q: "¿Para qué repetís el teléfono en voz alta al tomar un mensaje?", opciones: ["Para confirmar que lo anotaste bien","Para que te escuchen los demás","Para ganar tiempo","No sirve"], correcta: 0, explicacion: "Un número mal anotado es un mensaje perdido. Para que te escuchen tienta, pero es para confirmar." },
    { q: "Si te piden que la licenciada devuelva la llamada, ¿qué prometés?", opciones: ["\"La licenciada lo llama hoy seguro\"","\"Mañana a primera hora la llama\"","Nada","\"Le paso el mensaje\""], correcta: 3, explicacion: "No prometas por otro. \"Hoy seguro\" tienta para dejarlo contento, pero si no pasa, el enojo es con vos." },
    { q: "Transferís una llamada a contaduría. ¿Qué hacés?", opciones: ["Transferís sin decir nada","Avisás a contaduría de quién es y para qué","Le das otro número para que llame","Le decís que no es tu tema"], correcta: 1, explicacion: "Avisar evita que la persona repita todo. Transferir sin decir nada tienta por rápido, pero empieza de cero." },
    { q: "Si llama alguien vendiendo algo que nadie pidió, ¿qué decís?", opciones: ["Lo pasás con el gerente","Le cortás sin decir nada","\"Déjeme sus datos y si nos interesa lo contactamos\"","Le das el mail de todos"], correcta: 2, explicacion: "Filtrar con amabilidad protege el tiempo de los demás. Pasarlo con el gerente tienta para sacártelo de encima, pero le hacés perder tiempo." },
    { q: "Te preguntan por qué no atiende el gerente, que fue al médico. ¿Qué decís?", opciones: ["\"No está disponible, ¿le tomo un mensaje?\"","\"Está en el médico\"","\"Se fue temprano\"","\"No sé dónde está\""], correcta: 0, explicacion: "Lo personal no se cuenta. \"Está en el médico\" tienta por sincero, pero es información privada." },
    { q: "Alguien llama enojado. ¿Qué hacés primero?", opciones: ["Le decís que se calme","Le cortás","Le explicás que no es tu culpa","Lo dejás hablar y reconocés: \"entiendo que es molesto\""], correcta: 3, explicacion: "Escuchar y reconocer calma. \"Cálmese\" tienta, pero suele enojar más." },
    { q: "Llaman pidiendo el teléfono de un empleado \"para un control\". ¿Qué hacés?", opciones: ["Lo das si suena oficial","No lo das: tomás el mensaje y avisás","Lo das si insisten","Das el de otro empleado"], correcta: 1, explicacion: "Los datos de empleados no se dan. Que suena oficial tienta, pero es una forma común de engaño." },
  ],
},
{
  id: "agenda",
  icono: "📅",
  titulo: "Turnos y agenda",
  nivel: "Intermedio",
  objetivos: [
    "Dar, confirmar y cancelar turnos sin superposiciones",
    "Manejar sobreturnos, atrasos y lista de espera",
    "Bajar los faltazos con recordatorios y medirlos",
  ],
  lecciones: [
    { titulo: "Dar un turno bien", html: `
      <p class="idea">Un turno bien dado tiene todos los datos para que la persona venga a horario, con lo que necesita, y para que se pueda avisar si algo cambia.</p>
      <table>
        <tr><th>Dato</th><th>Ejemplo</th></tr>
        <tr><td>Nombre completo y teléfono</td><td>Marta Gómez, 11 5555-0001</td></tr>
        <tr><td>Profesional o servicio</td><td>Dra. López, control</td></tr>
        <tr><td>Día, hora y duración</td><td>Martes 12, 10:00, 20 minutos</td></tr>
        <tr><td>Obra social o forma de pago</td><td>Obra social X, plan Y</td></tr>
        <tr><td>Qué traer</td><td>DNI, credencial, estudios anteriores</td></tr>
      </table>
      <p><strong>Repetí el turno al final:</strong> "Le confirmo: martes 12 a las 10 con la doctora López. Traiga DNI y credencial."</p>
      <p><strong>Una sola agenda:</strong> si hay agenda en papel y en la computadora a la vez, tarde o temprano se dan dos turnos a la misma hora. Elegí una (mejor la digital, con acceso para quien la necesite).</p>
      <p><strong>Cada profesional tiene sus reglas:</strong> cuánto dura cada tipo de turno, qué días atiende, cuántos sobreturnos acepta. Tenelas por escrito.</p>
      <p>Por ejemplo, olvidarte de decir "traiga los estudios anteriores" puede hacer que la consulta no sirva y haya que dar otro turno.</p>` },
    { titulo: "Sobreturnos, atrasos y cancelaciones", html: `
      <p class="idea">La agenda nunca sale perfecta: hay atrasos, urgencias y cancelaciones. Manejarlos con reglas claras y avisando a tiempo evita enojos.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>El profesional viene atrasado</td><td>Avisar a quienes esperan y, si se puede, a los próximos por mensaje</td></tr>
        <tr><td>Piden un sobreturno</td><td>Consultar al profesional según sus reglas; avisar que puede haber espera</td></tr>
        <tr><td>Alguien cancela</td><td>Liberar el turno y ofrecerlo a la lista de espera</td></tr>
        <tr><td>Se cancela la agenda del día</td><td>Llamar o escribir a todos con tiempo y ofrecer nueva fecha</td></tr>
        <tr><td>Urgencia de salud en un consultorio</td><td>Avisar enseguida al profesional; si es grave, llamar a emergencias</td></tr>
      </table>
      <p>Un <strong>sobreturno</strong> es un turno extra que se agrega a una agenda ya completa. La <strong>lista de espera</strong> es la lista de personas que quieren un turno antes si se libera uno.</p>
      <p><strong>En la sala de espera, la información calma:</strong> "La doctora tuvo una urgencia y viene con 30 minutos de atraso. Si prefiere, le doy otro turno."</p>
      <p>Por ejemplo, un turno cancelado a las 9 que se ofrece a la lista de espera puede quedar ocupado a las 9:15 en vez de quedar vacío.</p>` },
    { titulo: "Recordatorios y faltazos", html: `
      <p class="idea">Un <strong>faltazo</strong> es un turno al que la persona no vino sin avisar. Cada faltazo es tiempo perdido para el profesional y un turno que otra persona necesitaba. Los recordatorios los bajan mucho.</p>
      <pre><code>Recordatorio (el día anterior):
"Hola, Marta. Te recordamos tu turno con la Dra. López
mañana martes a las 10. Traé DNI y credencial.
Si no podés venir, avisanos respondiendo este mensaje."</code></pre>
      <p><strong>Medir los faltazos:</strong></p>
      <pre><code>Semana 1 (sin recordatorio): 40 turnos, 6 faltazos
6 ÷ 40 × 100 = 15 %
Semana 2 (con recordatorio): 40 turnos, 2 faltazos
2 ÷ 40 × 100 = 5 %</code></pre>
      <table>
        <tr><th>Para bajar faltazos</th><th>Cómo</th></tr>
        <tr><td>Recordatorio el día anterior</td><td>Mensaje con día, hora y cómo avisar si no puede</td></tr>
        <tr><td>Facilitar la cancelación</td><td>Que alcance con responder el mensaje</td></tr>
        <tr><td>Lista de espera</td><td>Para ocupar enseguida los turnos que se liberan</td></tr>
      </table>
      <p><strong>Respuestas rápidas:</strong> en WhatsApp Business, los recordatorios se pueden guardar como respuestas rápidas para no escribirlos cada vez.</p>
      <p>Por ejemplo, con 40 turnos por semana, bajar de 15 % a 5 % de faltazos son 4 turnos más aprovechados por semana.</p>` },
  ],
  practica: [
    "Practicá con alguien dar un turno con los 5 datos de la tabla y la confirmación al final. Anotá qué dato te olvidaste.",
    "Escribí cómo avisarías en la sala de espera que el profesional viene 30 minutos atrasado y el mensaje a los próximos turnos. Anotá los dos textos.",
    "Escribí un recordatorio de turno con el modelo y calculá el porcentaje de faltazos con estos datos: 50 turnos, 7 faltazos. Anotá la cuenta.",
  ],
  recursos: [
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Das un turno por teléfono. ¿Qué datos pedís?", opciones: ["Solo el nombre","Solo la hora","Nombre completo, teléfono, profesional, día y hora, obra social o pago, y qué traer","El nombre y el signo del zodíaco"], correcta: 2, explicacion: "Con todos los datos se puede avisar y atender bien. Solo el nombre tienta por rápido, pero si hay un cambio no tenés cómo avisar." },
    { q: "Terminaste de dar un turno. ¿Qué hacés antes de cortar?", opciones: ["Lo repetís: día, hora, profesional y qué traer","Cortás enseguida","Le pedís que lo anote","Nada"], correcta: 0, explicacion: "Repetir evita errores de los dos lados. Pedirle que lo anote tienta, pero si lo anotó mal no te enterás." },
    { q: "Si en recepción hay agenda en papel y en la computadora, ¿qué riesgo hay?", opciones: ["Ninguno, hay respaldo","Que se gaste el papel","Que la computadora se apague","Dar dos turnos a la misma hora"], correcta: 3, explicacion: "Dos agendas no se ven entre sí. \"Hay respaldo\" tienta, pero se superponen turnos." },
    { q: "Si olvidás decir \"traiga los estudios anteriores\", ¿qué puede pasar?", opciones: ["Nada","Que la consulta no sirva y haya que dar otro turno","Que la consulta sea más corta","Que el paciente los traiga igual"], correcta: 1, explicacion: "Lo que hay que traer es parte del turno. \"Nada\" tienta, pero la persona pierde el viaje." },
    { q: "La doctora viene con 30 minutos de atraso. ¿Qué hacés?", opciones: ["No decís nada para no generar problemas","Les decís que ya viene","Avisás a quienes esperan y, si se puede, a los próximos por mensaje","Cancelás todos los turnos"], correcta: 2, explicacion: "La información calma. No decir nada tienta para evitar quejas, pero la espera sin información enoja más." },
    { q: "¿Qué es un sobreturno?", opciones: ["Un turno extra que se agrega a una agenda completa","Un turno cancelado","Un turno muy largo","Un turno para el día siguiente"], correcta: 0, explicacion: "Es un turno de más. Cancelado tienta, pero es lo contrario." },
    { q: "Te piden un sobreturno. ¿Qué hacés?", opciones: ["Lo das siempre","Lo negás siempre","Lo das sin avisar a nadie","Consultás al profesional según sus reglas y avisás que puede haber espera"], correcta: 3, explicacion: "El profesional decide. Darlo siempre tienta por amable, pero la agenda se desborda." },
    { q: "Alguien cancela su turno de las 9. ¿Qué hacés?", opciones: ["Lo dejás vacío","Lo liberás y lo ofrecés a la lista de espera","Lo borrás sin anotar","Esperás que venga otro"], correcta: 1, explicacion: "La lista de espera aprovecha el turno. Dejarlo vacío tienta por cómodo, pero alguien lo necesitaba." },
    { q: "Un paciente en la sala de espera se descompone. ¿Qué hacés?", opciones: ["Le das un remedio que tengas","Esperás que se le pase","Avisás enseguida al profesional y, si es grave, llamás a emergencias","Le pedís que vuelva otro día"], correcta: 2, explicacion: "La urgencia de salud va primero. Darle un remedio tienta por ayudar, pero no te corresponde y puede ser peligroso." },
    { q: "¿Qué es un faltazo?", opciones: ["Un turno al que la persona no vino sin avisar","Un turno cancelado con tiempo","Un turno atrasado","Un sobreturno"], correcta: 0, explicacion: "Faltazo es no venir sin avisar. Cancelado con tiempo tienta, pero ese sí se puede reasignar." },
    { q: "Tuviste 40 turnos y 6 faltazos en la semana. ¿Qué porcentaje es?", opciones: ["6 %","40 %","24 %","15 %"], correcta: 3, explicacion: "6 ÷ 40 × 100 = 15. El 6 % tienta porque son 6 faltazos, pero hay que dividir por los turnos." },
    { q: "Si querés bajar los faltazos, ¿qué conviene?", opciones: ["Retar a quien falta","Un recordatorio el día anterior con cómo avisar si no puede venir","Dar más turnos por si faltan","Nada, es normal"], correcta: 1, explicacion: "El recordatorio los baja mucho. Dar más turnos tienta, pero si vienen todos no das abasto." },
  ],
},
{
  id: "papeles",
  icono: "🗂️",
  titulo: "Mail, correspondencia y cobros",
  nivel: "Intermedio",
  objetivos: [
    "Manejar el mail de recepción con respuestas guardadas y derivaciones",
    "Recibir, registrar y enviar correspondencia y documentos",
    "Cobrar en recepción y entregar comprobante, con la caja ordenada",
  ],
  lecciones: [
    { titulo: "El mail y los mensajes de recepción", html: `
      <p class="idea">Muchas consultas llegan por escrito: mail, WhatsApp, formulario web. La recepción responde lo que puede, deriva lo que no, y no deja nada sin respuesta.</p>
      <table>
        <tr><th>Tipo de consulta</th><th>Qué hacés</th></tr>
        <tr><td>Horarios, dirección, precios, qué traer</td><td>Respondés con una respuesta guardada, personalizada</td></tr>
        <tr><td>Turnos</td><td>Los das o cambiás según las reglas de la agenda</td></tr>
        <tr><td>Consultas de salud, legales o técnicas</td><td>Derivás al profesional; no respondés vos</td></tr>
        <tr><td>Reclamos</td><td>Acusás recibo y pasás al responsable con los datos</td></tr>
      </table>
      <p><strong>Acusar recibo</strong> es responder "Recibimos tu consulta, te respondemos antes del jueves" aunque todavía no tengas la respuesta. Evita que la persona escriba de nuevo.</p>
      <p><strong>Respuestas guardadas:</strong> armá textos para las preguntas de siempre, pero personalizalos cada vez (nombre y lo que preguntó).</p>
      <p><strong>Lo que nunca respondés vos en un consultorio:</strong> qué remedio tomar, si un síntoma es grave, resultados de estudios. Eso lo hace el profesional.</p>
      <p>Por ejemplo, ante "¿Este dolor es grave?", la respuesta de recepción es "Eso lo tiene que evaluar la doctora; si es intenso, vaya a una guardia o llame a emergencias. ¿Le doy el primer turno?".</p>` },
    { titulo: "Correspondencia y documentos", html: `
      <p class="idea">Por recepción pasan cartas, documentos para firmar, sobres para enviar y papeles que dejan los clientes. Todo tiene que quedar registrado y llegar a quien corresponde.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Llega una carta o documento</td><td>Lo registrás (fecha, de quién, para quién) y lo entregás</td></tr>
        <tr><td>Un cliente deja papeles</td><td>Le das una constancia de lo que dejó, con fecha</td></tr>
        <tr><td>Hay que enviar algo</td><td>Lo mandás con seguimiento o con acuse de recibo si es importante</td></tr>
        <tr><td>Documentos para firmar</td><td>Los ordenás en una carpeta "para firmar" y los devolvés donde corresponde</td></tr>
      </table>
      <pre><code>Constancia de recepción de documentos
Fecha: 12/03/2026
Recibimos de: Marta Gómez
Documentos: 2 recibos de sueldo, fotocopia de DNI
Para: Estudio contable – Cdora. Ruiz
Recibió: Ana (recepción)</code></pre>
      <p><strong>Una carta documento</strong> o una notificación legal se entrega enseguida al responsable: tiene plazos.</p>
      <p><strong>Los papeles de clientes no quedan a la vista:</strong> se guardan en carpetas cerradas o bajo llave.</p>
      <p>Por ejemplo, la constancia firmada evita la discusión "yo te dejé los recibos" "acá no llegaron".</p>` },
    { titulo: "Cobrar en recepción", html: `
      <p class="idea">En muchos lugares, la recepción cobra: consultas, cuotas, señas. Cobrar bien es dar el precio claro, entregar comprobante y llevar la caja ordenada.</p>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>Precio claro</td><td>Decí el monto y qué incluye antes de cobrar</td></tr>
        <tr><td>Medio de pago</td><td>Efectivo, débito, crédito, transferencia: confirmá que se acreditó</td></tr>
        <tr><td>Comprobante</td><td>Factura o recibo según indique el lugar</td></tr>
        <tr><td>Vuelto</td><td>Contalo en voz alta</td></tr>
        <tr><td>Registro</td><td>Anotá cada cobro en la planilla o el sistema</td></tr>
        <tr><td>Cierre de caja</td><td>Al final del día, contar y comparar con lo registrado</td></tr>
      </table>
      <pre><code>Cierre de caja – 12/03
Efectivo inicial:     $  20.000
Cobros en efectivo:   $ 145.000
Debe haber:           $ 165.000
Contado:              $ 165.000  ✔</code></pre>
      <p><strong>Transferencias:</strong> no des por cobrado algo porque te muestran una captura de pantalla: verificá en la cuenta que la plata entró. Las capturas falsas son un engaño común.</p>
      <p><strong>Si la caja no cierra,</strong> no lo tapes: revisá los registros y avisá. El curso de administración explica la caja chica y el control con el banco.</p>
      <p>Por ejemplo, contar el vuelto en voz alta ("son 8.000, le doy 2.000 de vuelto") evita la mayoría de las discusiones.</p>` },
  ],
  practica: [
    "Escribí 3 respuestas guardadas para las preguntas más comunes de un lugar que conozcas y un mensaje de acuse de recibo. Anotalos.",
    "Armá una constancia de recepción de documentos con el modelo y completala con un caso inventado. Anotá qué documentos incluiste.",
    "Simulá el cierre de caja de un día con efectivo inicial, 5 cobros y el conteo final. Anotá si cerró y la cuenta.",
  ],
  recursos: [
    { t: "Correo Argentino: envíos y seguimiento", url: "https://www.correoargentino.com.ar/" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Te preguntan por mail los horarios de atención. ¿Qué hacés?", opciones: ["No respondés","Derivás al gerente","Respondés con una respuesta guardada, personalizada con el nombre","Respondés con todos los horarios del año"], correcta: 2, explicacion: "Lo frecuente se responde rápido y personalizado. Derivarlo tienta, pero le hacés perder tiempo a otro." },
    { q: "Te llega una consulta que no podés responder hoy. ¿Qué hacés?", opciones: ["Acusás recibo y decís cuándo vas a responder","No respondés hasta tener la respuesta","Respondés cualquier cosa","La borrás"], correcta: 0, explicacion: "Acusar recibo evita que escriban de nuevo. Esperar a tener todo tienta, pero parece que no la viste." },
    { q: "Un paciente pregunta por WhatsApp si su dolor es grave. ¿Qué respondés?", opciones: ["Que no es nada","Qué remedio tomar","Que espere a mañana","Que eso lo evalúa la doctora; si es intenso, que vaya a una guardia o llame a emergencias, y le ofrecés turno"], correcta: 3, explicacion: "La recepción no evalúa síntomas. \"No es nada\" tienta para tranquilizar, pero puede ser grave." },
    { q: "Llegan resultados de estudios y un paciente pregunta qué dicen. ¿Qué hacés?", opciones: ["Se los leés y explicás","Le decís que los resultados los explica el profesional","Le decís que están bien","Se los mandás por mail sin consultar"], correcta: 1, explicacion: "Interpretar resultados es del profesional. Decir que están bien tienta por amable, pero no sabés." },
    { q: "Si un cliente deja papeles en la recepción del estudio, ¿qué le das?", opciones: ["Nada","Una sonrisa","Una constancia de lo que dejó, con fecha","Una copia de sus papeles"], correcta: 2, explicacion: "La constancia evita discusiones. \"Nada\" tienta por rápido, pero después no hay prueba." },
    { q: "Llega una carta documento para la empresa. ¿Qué hacés?", opciones: ["La entregás enseguida al responsable: tiene plazos","La dejás para el viernes","La abrís y la leés","La archivás"], correcta: 0, explicacion: "Las notificaciones legales tienen plazos. Dejarla para el viernes tienta, pero puede vencer un plazo." },
    { q: "Tenés que enviar un documento importante. ¿Cómo lo mandás?", opciones: ["Como carta simple","Con un cadete sin anotar","Por debajo de la puerta","Con seguimiento o con acuse de recibo"], correcta: 3, explicacion: "El seguimiento prueba que llegó. Carta simple tienta por barata, pero no hay prueba." },
    { q: "Los recibos de sueldo de un cliente quedan sobre el mostrador. ¿Qué hacés?", opciones: ["Los dejás, ya los va a buscar","Los guardás en una carpeta cerrada o bajo llave","Los apilás con otros","Los tirás"], correcta: 1, explicacion: "Los papeles de clientes no quedan a la vista. Dejarlos tienta por rápido, pero cualquiera puede leerlos." },
    { q: "Vas a cobrar una consulta. ¿Qué hacés antes?", opciones: ["Cobrás y después decís cuánto era","Pedís que adivine","Decís el monto y qué incluye","Cobrás lo que te parezca"], correcta: 2, explicacion: "El precio claro antes evita discusiones. Cobrar y después decir tienta por rápido, pero genera reclamos." },
    { q: "Si te muestran una captura de una transferencia, ¿das por cobrado?", opciones: ["No: verificás en la cuenta que la plata entró","Sí, la captura alcanza","Sí, si la persona es conocida","Sí, si es poco"], correcta: 0, explicacion: "Las capturas falsas son un engaño común. Que es conocida tienta, pero el engaño no distingue." },
    { q: "Si efectivo inicial $ 20.000 y cobraste $ 145.000 en efectivo, ¿cuánto tiene que haber?", opciones: ["$ 145.000","$ 125.000","$ 20.000","$ 165.000"], correcta: 3, explicacion: "20.000 + 145.000 = 165.000. $ 145.000 tienta porque es lo cobrado, pero falta el inicial." },
    { q: "La caja no cierra: faltan $ 2.000. ¿Qué hacés?", opciones: ["Ponés la plata de tu bolsillo sin decir nada","Revisás los registros y avisás","Lo tapás","Lo ignorás"], correcta: 1, explicacion: "Una diferencia avisada se puede explicar. Poner de tu bolsillo tienta para que cierre, pero no se sabe qué pasó." },
  ],
},
{
  id: "confidencial",
  icono: "🔒",
  titulo: "Confidencialidad y situaciones difíciles",
  nivel: "Avanzado",
  objetivos: [
    "Cuidar los datos personales y los datos de salud que pasan por recepción",
    "Responder a terceros sin dar información que no corresponde",
    "Actuar en situaciones difíciles: enojo, emergencias y personas vulnerables",
  ],
  lecciones: [
    { titulo: "Los datos que cuidás", html: `
      <p class="idea">Por recepción pasan nombres, teléfonos, direcciones, DNI y, en un consultorio, datos de salud. En Argentina, los <strong>datos personales</strong> están protegidos por la Ley 25.326, y los datos de salud son <strong>datos sensibles</strong>, que se cuidan todavía más.</p>
      <table>
        <tr><th>Situación</th><th>Cuidado</th></tr>
        <tr><td>Pantalla con la agenda o historias</td><td>Que no la vean desde el mostrador; bloquearla al levantarte</td></tr>
        <tr><td>Hablar por teléfono con un paciente</td><td>Sin decir en voz alta datos de salud delante de la sala de espera</td></tr>
        <tr><td>Planillas y órdenes</td><td>Guardadas, no sobre el mostrador</td></tr>
        <tr><td>Mensajes y mails</td><td>Desde las cuentas del trabajo, no desde tu celular personal</td></tr>
        <tr><td>Papeles para tirar</td><td>Rotos o triturados, nunca enteros a la basura</td></tr>
      </table>
      <p>La Ley 26.529 de <strong>derechos del paciente</strong> incluye la confidencialidad: lo que se sabe de la salud de una persona no se comparte sin su autorización.</p>
      <p><strong>La regla de oro:</strong> lo que escuchás y ves en recepción, no lo comentás afuera, ni con tu familia ni en redes.</p>
      <p>Por ejemplo, decir en voz alta "Señora Pérez, ¿trajo los análisis del embarazo?" en una sala de espera llena expone información que ella quizás no quería compartir.</p>` },
    { titulo: "Qué decir a terceros", html: `
      <p class="idea">Muchas veces alguien pregunta por otra persona: un familiar, un vecino, un supuesto "de la empresa". La regla es simple: <strong>sin autorización, no se da información</strong>.</p>
      <table>
        <tr><th>Te preguntan</th><th>Respondés</th></tr>
        <tr><td>"¿Mi marido vino hoy a la consulta?"</td><td>"No puedo darle esa información. Puede preguntarle directamente a él."</td></tr>
        <tr><td>"¿A qué hora tiene turno Juan Pérez? Soy un amigo."</td><td>"No puedo dar datos de turnos de otras personas."</td></tr>
        <tr><td>"Soy del banco, necesito el teléfono de un empleado."</td><td>"Déjeme sus datos y se lo paso al empleado."</td></tr>
        <tr><td>"¿Qué tiene mi mamá? Soy la hija."</td><td>"Eso se lo explica la doctora, con autorización de su mamá."</td></tr>
      </table>
      <p><strong>Con amabilidad y firmeza:</strong> no hace falta explicar la ley; alcanza con "no puedo darle esa información" y ofrecer una alternativa (tomar un mensaje, que pregunten a la persona).</p>
      <p><strong>Cuando hay autorización:</strong> algunos pacientes autorizan por escrito a un familiar. Si está registrado, se puede; si no, no.</p>
      <p>Esta lección explica criterios generales; ante dudas, seguí el protocolo del lugar y consultá al responsable.</p>
      <p>Por ejemplo, confirmar a un "amigo" a qué hora tiene turno alguien puede exponer a esa persona a un riesgo que vos no conocés.</p>` },
    { titulo: "Situaciones difíciles y emergencias", html: `
      <p class="idea">En recepción vas a vivir situaciones difíciles: personas enojadas, alguien que se descompone, una persona mayor desorientada. Tener claro qué hacer te da calma.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>Alguien enojado por la espera</td><td>Escuchar, reconocer, informar y ofrecer una alternativa</td></tr>
        <tr><td>Alguien que insulta o amenaza</td><td>Poner un límite tranquilo; si sigue, pedir ayuda al responsable o a seguridad</td></tr>
        <tr><td>Alguien se descompone</td><td>Avisar al profesional si hay; llamar a emergencias (107 o 911 según la zona); no darle remedios</td></tr>
        <tr><td>Incendio u olor a gas</td><td>Seguir el plan de evacuación; llamar a bomberos (100) o al 911</td></tr>
        <tr><td>Persona mayor desorientada o un chico solo</td><td>Acompañar, no dejarla sola, buscar a un familiar o pedir ayuda</td></tr>
      </table>
      <p><strong>Tené a mano</strong> los teléfonos de emergencia de tu zona, la dirección exacta del lugar y el plan de evacuación.</p>
      <p><strong>Tu seguridad primero:</strong> no te enfrentes a nadie violento; alejate y pedí ayuda.</p>
      <p>Esta lección no reemplaza un curso de primeros auxilios ni la capacitación del lugar.</p>
      <p>Por ejemplo, al llamar a emergencias, decir enseguida la dirección exacta ("Mitre 450, primer piso, consultorio 3") ahorra minutos que pueden ser vitales.</p>` },
  ],
  practica: [
    "Revisá una recepción que conozcas (o tu propio escritorio) con la tabla de datos que cuidás y anotá 3 cosas que habría que cambiar.",
    "Escribí cómo responderías a 3 personas que preguntan por otra (un familiar, un amigo, \"alguien del banco\"). Anotá las respuestas.",
    "Armá una tarjeta de emergencias para una recepción: teléfonos de tu zona, dirección exacta y qué hacer ante un desmayo o un incendio. Anotá los teléfonos.",
  ],
  recursos: [
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "AAIP: tus derechos sobre tus datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales/derechos" },
    { t: "Derecho fácil: derechos del paciente (ley simple)", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/derechos-del-paciente" },
  ],
  quiz: [
    { q: "¿Qué ley protege los datos personales en Argentina?", opciones: ["La Ley 24.240","La Ley 27.555","La Ley 25.326","Ninguna"], correcta: 2, explicacion: "La 25.326 es la de datos personales. La 24.240 tienta porque se nombra seguido, pero es la del consumidor." },
    { q: "¿Qué tipo de datos son los datos de salud?", opciones: ["Datos sensibles, que se cuidan todavía más","Datos públicos","Datos sin importancia","Datos de la empresa"], correcta: 0, explicacion: "Los datos de salud son sensibles. Públicos tienta si la persona los cuenta, pero no los podés compartir vos." },
    { q: "La pantalla con la agenda se ve desde el mostrador. ¿Qué hacés?", opciones: ["Nada, nadie mira","La dejás para que vean sus turnos","Apagás la computadora todo el día","La girás para que no se vea y la bloqueás al levantarte"], correcta: 3, explicacion: "La agenda tiene datos de otras personas. \"Nadie mira\" tienta, pero alguien sí puede mirar." },
    { q: "Querés confirmarle algo de un estudio a una paciente en la sala de espera llena. ¿Qué hacés?", opciones: ["Se lo decís en voz alta para que escuche","Se lo decís en privado o bajo, sin datos de salud en voz alta","Se lo gritás desde el mostrador","Lo anunciás por altoparlante"], correcta: 1, explicacion: "Los datos de salud no se dicen delante de otros. En voz alta tienta para que escuche bien, pero la expone." },
    { q: "Si te escribe un paciente, ¿desde dónde le respondés?", opciones: ["Desde tu celular personal","Desde la cuenta de un familiar","Desde las cuentas del trabajo","Desde cualquier lado"], correcta: 2, explicacion: "Las cuentas del trabajo cuidan los datos. Tu celular personal tienta por cómodo, pero los datos quedan en tu teléfono." },
    { q: "¿Qué hacés con los papeles con datos que hay que tirar?", opciones: ["Los rompés o los trituras antes","Los tirás enteros a la basura","Los usás de borrador","Los dejás en la vereda"], correcta: 0, explicacion: "Rotos no se leen. Usarlos de borrador tienta por ahorro, pero los datos quedan a la vista." },
    { q: "Una señora pregunta si su marido vino hoy a la consulta. ¿Qué respondés?", opciones: ["\"Sí, vino a las 10\"","\"No, no vino\"","\"Pregúntele a la doctora\"","\"No puedo darle esa información. Puede preguntarle directamente a él.\""], correcta: 3, explicacion: "Sin autorización no se da información. Responder tienta porque es su esposa, pero el dato es del marido." },
    { q: "Un \"amigo\" pregunta a qué hora tiene turno un paciente. ¿Qué hacés?", opciones: ["Se lo das si parece amable","No das el dato","Le das solo el día","Le das el teléfono del paciente"], correcta: 1, explicacion: "Dar turnos de otros puede exponerlos a riesgos. Que parece amable tienta, pero no sabés quién es." },
    { q: "Una paciente autorizó por escrito a su hija a recibir información. ¿Qué hacés?", opciones: ["Nunca le decís nada a nadie","Le das toda la información sin verificar","Si está registrado, se puede; seguís el protocolo del lugar","Le pedís que la paciente llame"], correcta: 2, explicacion: "Con autorización registrada se puede. \"Nunca\" tienta por prudente, pero la paciente decidió compartirla." },
    { q: "Alguien se descompone en la sala de espera. ¿Qué hacés?", opciones: ["Avisás al profesional si hay y llamás a emergencias; no le das remedios","Le das un analgésico","Esperás que se le pase","Le pedís que se vaya"], correcta: 0, explicacion: "Avisar y llamar a emergencias es lo correcto. El analgésico tienta por ayudar, pero puede ser peligroso." },
    { q: "Si llamás a emergencias, ¿qué decís primero?", opciones: ["Tu nombre completo","Qué hora es","Que no sabés qué pasa","La dirección exacta del lugar"], correcta: 3, explicacion: "La dirección ahorra minutos vitales. Tu nombre tienta por educación, pero lo más urgente es dónde ir." },
    { q: "Un hombre se pone violento en recepción. ¿Qué hacés?", opciones: ["Lo enfrentás","Te alejás y pedís ayuda al responsable o a seguridad","Le gritás más fuerte","Lo agarrás del brazo"], correcta: 1, explicacion: "Tu seguridad va primero. Enfrentarlo tienta para defender el lugar, pero te expone a una agresión." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el manual de recepción",
  nivel: "Avanzado",
  objetivos: [
    "Armar un manual de recepción para un lugar real o imaginario",
    "Practicar 3 situaciones y evaluarlas con una rúbrica",
    "Contar en una entrevista cómo trabajás en recepción",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>manual de recepción</strong>: lo que cualquier persona necesita para cubrir la recepción de un lugar, más la práctica de 3 situaciones.</p>
      <table>
        <tr><th>Parte del manual</th><th>Módulo</th></tr>
        <tr><td>Saludo en persona y por teléfono, y datos frecuentes (horarios, internos, precios)</td><td>El puesto, El teléfono</td></tr>
        <tr><td>Pasos para recibir visitas y registro de ingresos</td><td>Recibir visitas</td></tr>
        <tr><td>Formulario de mensaje telefónico</td><td>El teléfono</td></tr>
        <tr><td>Reglas de la agenda y recordatorio de turno</td><td>Turnos y agenda</td></tr>
        <tr><td>Respuestas guardadas, constancia de documentos y cierre de caja</td><td>Mail, correspondencia y cobros</td></tr>
        <tr><td>Reglas de confidencialidad y tarjeta de emergencias</td><td>Confidencialidad</td></tr>
      </table>
      <p><strong>Las 3 situaciones para practicar</strong> (con otra persona):</p>
      <ol>
        <li>Recibir una visita sin cita que insiste en pasar.</li>
        <li>Tomar un mensaje telefónico de alguien apurado.</li>
        <li>Un familiar que pide información de un paciente.</li>
      </ol>
      <p>Por ejemplo, para un consultorio odontológico, el manual tendría los horarios de cada profesional, cuánto dura cada tipo de turno, qué obras sociales se atienden y el teléfono de emergencias de la zona.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Quien hace de visitante o de llamante evalúa cada situación con esta.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Saludo y trato</td><td>Saludo completo, amable y a tiempo</td><td>Saludo incompleto o frío</td><td>Sin saludo</td></tr>
        <tr><td>Datos</td><td>Pidió y anotó todo lo necesario</td><td>Faltó un dato</td><td>No anotó nada</td></tr>
        <tr><td>Seguridad</td><td>No dejó pasar sin autorización</td><td>Dudó, pero no dejó pasar</td><td>Dejó pasar</td></tr>
        <tr><td>Confidencialidad</td><td>No dio información de otros</td><td>Dio un dato menor</td><td>Dio información sensible</td></tr>
        <tr><td>Calma y límites</td><td>Firme y amable ante la insistencia</td><td>Algo tenso</td><td>Discutió o cedió</td></tr>
        <tr><td>Cierre</td><td>Ofreció alternativa y despidió</td><td>Despidió sin alternativa</td><td>Sin cierre</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → practicá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios
Si "Confidencialidad" sacó 0, no aprueba aunque el total sea alto.</code></pre>
      <p>Por ejemplo, si en la situación del familiar dijiste "sí, vino a las 10", sacaste 0 en confidencialidad: practicá la frase "no puedo darle esa información".</p>` },
    { titulo: "Contarlo en una entrevista", html: `
      <p class="idea">En las entrevistas para recepción se repiten algunas preguntas. Con lo que practicaste, tenés respuestas concretas.</p>
      <table>
        <tr><th>Pregunta típica</th><th>Qué mostrar</th></tr>
        <tr><td>"¿Qué hacés si suena el teléfono y llega alguien a la vez?"</td><td>Que sabés priorizar y no dejás a nadie sin atención</td></tr>
        <tr><td>"¿Cómo manejás a alguien enojado por la espera?"</td><td>Escuchar, informar y ofrecer una alternativa</td></tr>
        <tr><td>"¿Qué hacés si te piden información de otra persona?"</td><td>Que cuidás la confidencialidad</td></tr>
        <tr><td>"¿Qué programas manejás?"</td><td>Agenda digital, mail, planillas y procesador de texto, con ejemplos</td></tr>
      </table>
      <pre><code>"Si suena el teléfono mientras atiendo a alguien, le pido
a la persona un momento, atiendo, digo 'ya lo llamo en
unos minutos' y anoto el número. Así nadie queda esperando
sin saber qué pasa."</code></pre>
      <p><strong>Llevá tu manual:</strong> si es de un lugar imaginario, contalo como un proyecto que hiciste para prepararte. Muestra iniciativa y orden.</p>
      <p>Por ejemplo, el curso "Entrevistas de trabajo" de este sitio te ayuda a practicar estas respuestas con el método STAR.</p>` },
  ],
  practica: [
    "Armá el manual de recepción con las 6 partes de la tabla del encargo para un lugar real o imaginario. Anotá para qué lugar es.",
    "Practicá las 3 situaciones con otra persona y pedile que te evalúe con la rúbrica. Anotá el puntaje de cada una sobre 12.",
    "Escribí tus respuestas a las 4 preguntas típicas de entrevista y decilas en voz alta. Anotá cuánto tardaste en cada una.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
  ],
  quiz: [
    { q: "Si te toca dejar la recepción a un reemplazo, ¿para qué sirve el manual de recepción?", opciones: ["Para decorar el escritorio","Para mostrarle al jefe","Para que cualquier persona pueda cubrir la recepción con lo que necesita","Para nada"], correcta: 2, explicacion: "Es una guía práctica. Mostrárselo al jefe tienta como motivo, pero el valor es que sirva." },
    { q: "Si armás el manual de un consultorio, ¿qué datos frecuentes ponés?", opciones: ["Horarios de cada profesional, duración de turnos, obras sociales y teléfonos de emergencia","La historia del edificio","Recetas de cocina","Los diagnósticos de los pacientes"], correcta: 0, explicacion: "Lo práctico para atender. Los diagnósticos tientan como información del consultorio, pero son confidenciales." },
    { q: "¿Qué es una rúbrica?", opciones: ["Un formulario de mensaje","Una agenda","Un registro de visitas","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica evalúa. El formulario tienta porque también es una lista, pero sirve para anotar mensajes." },
    { q: "Si en la práctica dejaste pasar a la visita sin cita que insistía, ¿cuánto sacás en \"Seguridad\"?", opciones: ["2","0","1","No se evalúa"], correcta: 1, explicacion: "Dejar pasar sin autorización es 0. 1 tienta si dudaste, pero lo que cuenta es que pasó." },
    { q: "Si en la práctica le dijiste al familiar \"sí, vino a las 10\", ¿aprueba?", opciones: ["Sí, si el resto estuvo bien","Sí, era un familiar","No: confidencialidad saca 0 y no aprueba aunque el total sea alto","Depende del total"], correcta: 2, explicacion: "La confidencialidad no se compensa. \"Era un familiar\" tienta, pero sin autorización no se da información." },
    { q: "Si al tomar un mensaje, faltó el teléfono, ¿cuánto sacás en \"Datos\"?", opciones: ["1: faltó un dato","2","0","No se evalúa"], correcta: 0, explicacion: "Faltó un dato, es 1. 0 tienta porque sin teléfono no se puede llamar, pero anotaste lo demás." },
    { q: "Sacaste 9 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Cambiás de lugar","Dejás de practicar","Practicás lo que sacó 0 o 1"], correcta: 3, explicacion: "Entre 7 y 10 se practica lo que falló. Darlo por listo tienta, pero ese criterio va a fallar en el trabajo real." },
    { q: "En una entrevista te preguntan qué hacés si suena el teléfono y llega alguien a la vez. ¿Qué mostrás?", opciones: ["Que atendés solo el teléfono","Que sabés priorizar y no dejás a nadie sin atención","Que te ponés nervioso","Que esperás a que se vayan"], correcta: 1, explicacion: "Priorizar sin abandonar a nadie es la clave. Atender solo el teléfono tienta porque suena, pero la persona delante espera." },
    { q: "Si en la entrevista te preguntan qué programas manejás, ¿cómo respondés?", opciones: ["\"Todos\"","\"Ninguno\"","Nombrándolos con ejemplos de para qué los usaste","\"Los básicos\""], correcta: 2, explicacion: "Los ejemplos demuestran. \"Todos\" tienta para impresionar, pero no es creíble." },
    { q: "Si hiciste el manual para un lugar imaginario, ¿lo mencionás en la entrevista?", opciones: ["Sí, como un proyecto que hiciste para prepararte","No, no es real","Sí, diciendo que trabajaste ahí","Solo si te lo piden"], correcta: 0, explicacion: "Muestra iniciativa. Decir que trabajaste ahí tienta, pero es mentir." },
    { q: "Si te preguntan cómo manejás a alguien enojado por la espera, ¿qué respondés?", opciones: ["Que le decís que se calme","Que lo ignorás","Que llamás a seguridad siempre","Que escuchás, informás la demora y ofrecés una alternativa"], correcta: 3, explicacion: "Escuchar e informar calma. \"Que se calme\" tienta, pero suele enojar más." },
    { q: "¿Qué curso del sitio te ayuda a practicar respuestas de entrevista con el método STAR?", opciones: ["\"Logística y depósito\"","\"Entrevistas de trabajo\"","\"Escribir claro\"","Ninguno"], correcta: 1, explicacion: "Ese curso trabaja el método STAR. \"Escribir claro\" tienta porque ayuda a expresarse, pero no practica entrevistas." },
  ],
},
];
