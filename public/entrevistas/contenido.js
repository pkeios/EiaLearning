// Temario del curso "Entrevistas de trabajo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js entrevistas y node tools/metodologia.js entrevistas
window.TEMARIO = [
{
  id: "tipos",
  icono: "🤝",
  titulo: "Empezar: qué es y qué busca una entrevista",
  nivel: "Básico",
  objetivos: [
    "Explicar qué busca saber quien entrevista",
    "Reconocer los tipos de entrevista y de pruebas más comunes",
    "Ubicar quién te entrevista en cada etapa y qué le importa",
  ],
  lecciones: [
    { titulo: "Qué busca saber quien entrevista", video: {"id":"MZA4jWcE56o","t":"Consejos para presentar una entrevista de trabajo · LearnFree en Español (0:56)"}, html: `
      <p class="idea">Una entrevista no es un examen de preguntas raras: es una charla para responder tres dudas. ¿Puede hacer el trabajo? ¿Quiere hacerlo? ¿Va a encajar con el equipo?</p>
      <table>
        <tr><th>Duda de quien entrevista</th><th>Qué mira</th><th>Cómo la respondés</th></tr>
        <tr><td>¿Puede?</td><td>Experiencia, conocimientos, ejemplos</td><td>Historias concretas de lo que hiciste</td></tr>
        <tr><td>¿Quiere?</td><td>Interés, motivos, si averiguó</td><td>Saber de la empresa y decir por qué te interesa</td></tr>
        <tr><td>¿Encaja?</td><td>Trato, actitud, cómo trabaja con otros</td><td>Puntualidad, respeto, ejemplos de trabajo en equipo</td></tr>
      </table>
      <p><strong>También es tu entrevista:</strong> vos averiguás si el trabajo te conviene: horario, tareas, trato, condiciones.</p>
      <p><strong>Lo que más pesa:</strong> los ejemplos concretos. "Soy responsable" lo dice cualquiera; "Durante un año abrí el local a las 7 sin faltar un día" lo demuestra.</p>
      <p>El curso "Buscar trabajo con IA" de este sitio cubre el CV, la carta y dónde buscar. Este curso va a fondo con la entrevista.</p>
      <p>Por ejemplo, si te preguntan "¿Sabés usar Excel?", "Sí" responde a medias; "Sí, en mi último trabajo llevaba el stock en una planilla con fórmulas" responde las tres dudas.</p>` },
    { titulo: "Tipos de entrevista", html: `
      <p class="idea">Una búsqueda puede tener varias etapas, y cada una tiene su formato. Saber cuál te toca ayuda a prepararte.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo es</th><th>Qué preparar</th></tr>
        <tr><td>Preselección telefónica</td><td>Llamada corta de 10 a 15 minutos para confirmar datos e interés</td><td>Tener el CV a mano y un lugar tranquilo</td></tr>
        <tr><td>Individual (presencial o por video)</td><td>Charla con una o dos personas</td><td>Tus historias y preguntas</td></tr>
        <tr><td>Por competencias</td><td>Preguntas del tipo "Contame una vez que…"</td><td>Historias con el método STAR (módulo 3)</td></tr>
        <tr><td>Grupal</td><td>Varias personas candidatas juntas, con una actividad</td><td>Participar sin pisar a otros (módulo 5)</td></tr>
        <tr><td>Prueba práctica o técnica</td><td>Hacer una tarea real: cobrar, cocinar, una planilla</td><td>Repasar lo básico del oficio</td></tr>
        <tr><td>Video grabado</td><td>Respondés preguntas que aparecen en pantalla, sin persona del otro lado</td><td>Practicar frente a la cámara (módulo 5)</td></tr>
      </table>
      <p><strong>Preguntá cómo va a ser:</strong> cuando te citan, es normal preguntar "¿Cuánto dura y con quién voy a hablar?".</p>
      <p>Por ejemplo, para un puesto de cocina es común que la segunda etapa sea una prueba práctica: ir con ropa cómoda y el pelo atado ya muestra que lo pensaste.</p>` },
    { titulo: "Quién te entrevista", html: `
      <p class="idea">No es lo mismo hablar con alguien de Recursos Humanos que con tu futuro jefe. Cada uno mira cosas distintas, y conviene adaptar el foco.</p>
      <table>
        <tr><th>Quién</th><th>Qué le importa</th><th>Ejemplo de pregunta</th></tr>
        <tr><td>Recursos Humanos (RR. HH.) o una consultora</td><td>Que cumplas los requisitos, tu actitud, que no haya señales de alerta</td><td>"¿Por qué dejaste tu último trabajo?"</td></tr>
        <tr><td>Jefe o jefa directa</td><td>Que puedas hacer las tareas y trabajar con el equipo</td><td>"¿Cómo harías para atender a dos clientes a la vez?"</td></tr>
        <tr><td>Dueño o dueña (en negocios chicos)</td><td>Confianza, compromiso, que te quedes</td><td>"¿Hasta cuándo pensás quedarte?"</td></tr>
      </table>
      <p>Una <strong>consultora</strong> es una empresa que busca personal para otras empresas. A veces no te dicen para qué empresa es hasta una etapa avanzada.</p>
      <p><strong>En todas las etapas:</strong> ser puntual, tratar bien a todos (también a quien te recibe en la puerta) y no hablar mal de trabajos anteriores.</p>
      <p>Por ejemplo, en una entrevista con el dueño de una ferretería, contar que sabés de herramientas pesa más que contar tus estudios; con RR. HH. de una empresa grande, conviene mencionar ambos.</p>` },
  ],
  practica: [
    "Elegí un aviso real que te interese y anotá cómo vas a demostrar que podés, que querés y que encajás, con un ejemplo para cada uno.",
    "Anotá qué tipos de entrevista son más probables para ese puesto y qué prepararías para cada uno según la tabla.",
    "Escribí 2 preguntas que te haría RR. HH. y 2 que te haría el jefe directo para ese puesto. Anotá una respuesta corta para cada una.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Argentina.gob.ar: Empleo", url: "https://www.argentina.gob.ar/trabajo/empleo" },
    { t: "Portal Empleo: cursos y recursos gratuitos", url: "https://portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "¿Qué tres dudas quiere responder quien te entrevista?", opciones: ["¿Cuánto sabe? ¿Cuánto cobra? ¿Dónde vive?","¿Tiene título? ¿Tiene auto? ¿Tiene hijos?","¿Puede hacer el trabajo? ¿Quiere? ¿Va a encajar con el equipo?","Solo si es simpático"], correcta: 2, explicacion: "Poder, querer y encajar. Que sea simpático tienta como resumen, pero sin poder hacer el trabajo no alcanza." },
    { q: "Si te preguntan \"¿Sabés usar Excel?\", ¿qué respuesta es mejor?", opciones: ["\"Sí, en mi último trabajo llevaba el stock en una planilla con fórmulas\"","\"Sí\"","\"Más o menos\"","\"Sí, mucho, soy experto\""], correcta: 0, explicacion: "Un ejemplo concreto demuestra. \"Sí, soy experto\" tienta para impresionar, pero sin ejemplo no convence y te pueden poner a prueba." },
    { q: "¿La entrevista sirve solo para que te evalúen?", opciones: ["Sí, vos solo respondés","Sí, preguntar queda mal","Solo si sos gerente","No: también es tu momento para averiguar si el trabajo te conviene"], correcta: 3, explicacion: "Es en las dos direcciones. Que preguntar queda mal tienta, pero muestra interés." },
    { q: "Si te llaman 10 minutos para confirmar datos e interés, ¿qué tipo de entrevista es?", opciones: ["Entrevista grupal","Preselección telefónica","Prueba técnica","Entrevista final"], correcta: 1, explicacion: "Es una primera llamada corta. Final tienta porque es por teléfono con la empresa, pero recién empieza." },
    { q: "Si te dicen que la entrevista es \"por competencias\", ¿qué tipo de preguntas esperás?", opciones: ["Preguntas de matemática","Solo datos del CV","\"Contame una vez que…\"","Ninguna, es un examen escrito"], correcta: 2, explicacion: "Por competencias piden historias reales. Solo datos del CV tienta, pero quieren saber cómo actuaste." },
    { q: "Si para un puesto de cocina te citan a una segunda etapa, ¿qué es probable?", opciones: ["Una prueba práctica: conviene ir con ropa cómoda y el pelo atado","Un examen de historia","Una charla sobre tus hobbies","Nada, ya está"], correcta: 0, explicacion: "En oficios, es común probar el trabajo. Que ya está tienta, pero la prueba define mucho." },
    { q: "Te citan a una entrevista y no sabés cómo va a ser. ¿Qué hacés?", opciones: ["Nada, preguntar queda mal","Vas sin saber y ves","Llamás cinco veces para preguntar todo","Preguntás cuánto dura y con quién vas a hablar"], correcta: 3, explicacion: "Preguntar lo básico es normal. Que queda mal tienta, pero ir sin saber te deja menos preparado." },
    { q: "¿Qué le suele importar a alguien de Recursos Humanos?", opciones: ["Solo tus conocimientos técnicos","Que cumplas los requisitos, tu actitud y que no haya señales de alerta","Tus hobbies","Nada, solo agenda la reunión"], correcta: 1, explicacion: "RR. HH. filtra requisitos y actitud. Los conocimientos técnicos tientan, pero eso lo mira más el jefe directo." },
    { q: "¿Qué es una consultora?", opciones: ["Un tipo de entrevista","Una oficina del Estado","Una empresa que busca personal para otras empresas","Una prueba psicológica"], correcta: 2, explicacion: "La consultora hace la búsqueda para otra empresa. Oficina del Estado tienta porque también ayuda a buscar trabajo, pero es privada." },
    { q: "Si te entrevista el dueño de una ferretería, ¿qué pesa más?", opciones: ["Contar lo que sabés de herramientas y que te vas a comprometer","Tus estudios universitarios","Tus redes sociales","Que tengas auto"], correcta: 0, explicacion: "El dueño quiere confianza y que sepas del rubro. Los estudios tientan, pero en un negocio chico importa más lo práctico." },
    { q: "Si llegás a la entrevista y te recibe un recepcionista, ¿a quién tratás bien?", opciones: ["Solo a quien te entrevista","Solo al jefe","A nadie en especial","A todos, también a quien te recibe en la puerta"], correcta: 3, explicacion: "Muchas veces preguntan cómo te comportaste. Solo a quien entrevista tienta, pero el recepcionista también opina." },
    { q: "Te preguntan por tu último trabajo, donde te trataron mal. ¿Qué evitás?", opciones: ["Decir que trabajaste ahí","Hablar mal de la empresa o de tu jefe anterior","Decir qué aprendiste","Decir cuánto tiempo estuviste"], correcta: 1, explicacion: "Hablar mal preocupa a quien entrevista. Contar la verdad tienta como desahogo, pero suena a que harías lo mismo con ellos." },
  ],
},
{
  id: "preparar",
  icono: "🔎",
  titulo: "Prepararte antes del día",
  nivel: "Básico",
  objetivos: [
    "Investigar la empresa y el puesto en 20 minutos",
    "Relacionar los requisitos del aviso con tu experiencia",
    "Organizar la logística: cómo llegar, qué llevar y qué ponerte",
  ],
  lecciones: [
    { titulo: "Investigar la empresa", html: `
      <p class="idea">Saber algo de la empresa muestra interés y te ayuda a responder "¿Por qué querés trabajar acá?". Con 20 minutos alcanza.</p>
      <table>
        <tr><th>Qué averiguar</th><th>Dónde</th></tr>
        <tr><td>Qué hace o qué vende</td><td>Su sitio web o sus redes</td></tr>
        <tr><td>Dónde está y cuántas sucursales tiene</td><td>Google Maps, su sitio</td></tr>
        <tr><td>Qué dicen los clientes</td><td>Opiniones en Google o en redes</td></tr>
        <tr><td>Novedades</td><td>Noticias, publicaciones recientes</td></tr>
      </table>
      <p><strong>Anotá 3 cosas</strong> que sepas de la empresa y una que te guste de verdad: eso arma tu respuesta a "¿Por qué acá?".</p>
      <pre><code>Empresa: Panadería del barrio (3 sucursales)
1. Abrió en 1995, empezó con una sola panadería.
2. Hace entregas a domicilio desde el año pasado.
3. En Google tiene muchas opiniones sobre la atención.
Lo que me gusta: que crecieron sin perder la atención de barrio.</code></pre>
      <p>Por ejemplo, "Vi que hace poco empezaron con entregas a domicilio; tengo experiencia en armar pedidos" conecta lo que averiguaste con lo que sabés hacer.</p>` },
    { titulo: "El aviso y tu experiencia", html: `
      <p class="idea">El aviso es la guía de la entrevista: casi todas las preguntas van a salir de sus requisitos. Prepará un ejemplo tuyo para cada requisito importante.</p>
      <table>
        <tr><th>Requisito del aviso</th><th>Mi ejemplo</th></tr>
        <tr><td>Experiencia en atención al público</td><td>2 años en el kiosco de mi tío, atendiendo y cobrando</td></tr>
        <tr><td>Manejo de caja</td><td>Hacía el cierre de caja todas las noches sin diferencias</td></tr>
        <tr><td>Disponibilidad fines de semana</td><td>Sí, puedo sábados y domingos</td></tr>
        <tr><td>Trabajo en equipo</td><td>Organizamos con mis compañeros los turnos de las vacaciones</td></tr>
        <tr><td>Deseable: inglés básico</td><td>No tengo; estoy haciendo un curso gratuito en línea</td></tr>
      </table>
      <p><strong>Si no cumplís un requisito, no lo inventes:</strong> decí lo que tenés de parecido o lo que estás haciendo para aprenderlo.</p>
      <p><strong>Requisitos "deseables":</strong> son un plus, no una condición. Muchas personas contratadas no los tienen todos.</p>
      <p>Por ejemplo, si el aviso pide "manejo de caja" y te preguntan por eso, tener preparado "hacía el cierre de caja sin diferencias" te deja responder seguro.</p>` },
    { titulo: "La logística del día", html: `
      <p class="idea">Llegar tarde, perderse o no tener el CV a mano arruina una entrevista antes de empezar. La logística se resuelve el día anterior.</p>
      <table>
        <tr><th>Qué</th><th>Cómo</th></tr>
        <tr><td>Cómo llegar</td><td>Buscá el recorrido y calculá el tiempo más 30 minutos de margen</td></tr>
        <tr><td>A qué hora llegar</td><td>10 minutos antes (no 40: también incomoda)</td></tr>
        <tr><td>Qué llevar</td><td>CV impreso, DNI, una birome, el nombre de quien te cita</td></tr>
        <tr><td>Qué ponerte</td><td>Ropa limpia y un poco más formal que la del puesto</td></tr>
        <tr><td>Contacto</td><td>El teléfono para avisar si surge un problema</td></tr>
      </table>
      <p><strong>La ropa según el lugar:</strong> para una oficina, camisa o blusa; para un comercio o una fábrica, ropa limpia y prolija. No hace falta comprar nada: limpio y prolijo es lo que importa.</p>
      <p><strong>Si vas a llegar tarde por algo que no controlás,</strong> avisá antes de la hora, no después: "Hay un corte en la línea, llego 15 minutos tarde. ¿Les sirve o reprogramamos?".</p>
      <p>Por ejemplo, hacer el recorrido una vez el día anterior (o mirarlo en el mapa con calma) te saca de encima la preocupación más común.</p>` },
  ],
  practica: [
    "Investigá una empresa real en 20 minutos y anotá 3 cosas que sabés de ella y una que te guste.",
    "Armá una tabla con los requisitos de un aviso real y un ejemplo tuyo para cada uno. Anotá cuáles cumplís y qué dirías de los que no.",
    "Prepará la logística de una entrevista (real o imaginaria): recorrido, tiempo con margen, qué llevar y qué ponerte. Anotá la hora a la que saldrías.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Portal Empleo: cursos y recursos gratuitos", url: "https://portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Tenés una entrevista mañana. ¿Cuánto tiempo conviene dedicar a investigar la empresa?", opciones: ["Una semana entera","Nada, no hace falta","Unos 20 minutos alcanzan","5 segundos mirando el logo"], correcta: 2, explicacion: "Con 20 minutos sabés lo básico. \"No hace falta\" tienta, pero te van a preguntar por qué querés trabajar ahí." },
    { q: "¿Para qué sirve anotar 3 cosas de la empresa y una que te guste?", opciones: ["Para responder bien \"¿Por qué querés trabajar acá?\"","Para corregirles errores","Para hablar mal de la competencia","No sirve"], correcta: 0, explicacion: "Esas notas arman tu respuesta. Hablar de la competencia tienta para mostrar que sabés, pero suena mal." },
    { q: "Averiguaste que la panadería empezó con entregas a domicilio. ¿Cómo lo usás?", opciones: ["No lo mencionás","Les decís que es mala idea","Lo leés del celular","Lo conectás con tu experiencia: \"Tengo experiencia armando pedidos\""], correcta: 3, explicacion: "Conectar lo averiguado con lo tuyo es lo que más suma. No mencionarlo tienta por timidez, pero desperdiciás lo que preparaste." },
    { q: "¿De dónde salen casi todas las preguntas de la entrevista?", opciones: ["De tus redes sociales","De los requisitos del aviso","De preguntas al azar","De tu horóscopo"], correcta: 1, explicacion: "El aviso es la guía. Al azar tienta como miedo, pero la mayoría de las preguntas son previsibles." },
    { q: "Si el aviso pide \"manejo de caja\", ¿qué preparás?", opciones: ["Decir \"sí\" y nada más","Una explicación de qué es una caja","Un ejemplo tuyo: \"Hacía el cierre de caja todas las noches sin diferencias\"","Nada"], correcta: 2, explicacion: "Un ejemplo concreto responde seguro. \"Sí\" tienta por corto, pero no demuestra nada." },
    { q: "Si el aviso pide inglés y no sabés, ¿qué decís?", opciones: ["Que no tenés y qué estás haciendo para aprenderlo","Que sí, total no lo van a probar","Que no importa","No respondés"], correcta: 0, explicacion: "La honestidad con un plan suma. Decir que sí tienta, pero si lo prueban, perdés todo lo demás." },
    { q: "¿Qué es un requisito \"deseable\"?", opciones: ["Algo obligatorio","Algo que hay que tener sí o sí para postularte","Algo que nadie tiene","Un plus, no una condición: muchas personas contratadas no lo tienen"], correcta: 3, explicacion: "Deseable es un extra. Obligatorio tienta, pero entonces dejarías de postularte a muchos puestos que podrías conseguir." },
    { q: "Si la entrevista es a las 10 y el viaje lleva 40 minutos, ¿a qué hora salís?", opciones: ["A las 9:20 justo","A las 8:50: 40 minutos de viaje más 30 de margen","A las 9:50","A las 7"], correcta: 1, explicacion: "El margen cubre los imprevistos. Salir justo tienta para no esperar, pero un colectivo que no pasa te hace llegar tarde." },
    { q: "¿Cuánto antes conviene llegar a la entrevista?", opciones: ["40 minutos antes","Justo a la hora","Unos 10 minutos antes","5 minutos tarde"], correcta: 2, explicacion: "10 minutos es lo ideal. 40 tienta para asegurarte, pero incomoda a quien te recibe; esperá cerca." },
    { q: "Tenés una entrevista presencial. ¿Qué llevás?", opciones: ["CV impreso, DNI, una birome y el nombre de quien te cita","Nada, está todo en el celular","Solo el celular","Una carpeta con todos tus papeles desde la primaria"], correcta: 0, explicacion: "Lo básico, a mano. Todo en el celular tienta, pero si se queda sin batería no tenés nada." },
    { q: "Si te citan para un comercio, ¿qué te ponés?", opciones: ["Traje nuevo comprado para la ocasión","Ropa deportiva gastada","Lo que tengas puesto","Ropa limpia y prolija, un poco más formal que la del puesto"], correcta: 3, explicacion: "Limpio y prolijo es lo que importa. Comprar un traje tienta para impresionar, pero no hace falta." },
    { q: "Hay un corte en la línea de tren y vas a llegar tarde. ¿Qué hacés?", opciones: ["Llegás tarde sin avisar","Avisás antes de la hora y preguntás si les sirve o reprogramar","No vas y no avisás","Avisás cuando llegás"], correcta: 1, explicacion: "Avisar antes muestra responsabilidad. Avisar al llegar tienta, pero ya los hiciste esperar sin saber." },
  ],
},
{
  id: "historias",
  icono: "📚",
  titulo: "Tu banco de historias",
  nivel: "Intermedio",
  objetivos: [
    "Responder \"Contame de vos\" en 1 minuto con presente, pasado y futuro",
    "Contar experiencias con el método STAR",
    "Armar un banco de 6 historias que sirven para muchas preguntas",
  ],
  lecciones: [
    { titulo: "\"Contame de vos\"", video: {"id":"tYwtvtaxtmM","t":"Cómo responder a la pregunta \"Háblame de ti\" · Virna Vitteri (8:22)"}, html: `
      <p class="idea">Casi todas las entrevistas empiezan con "Contame de vos" o "Presentate". No es para contar tu vida: es un resumen de 1 minuto de quién sos como trabajador y por qué estás ahí.</p>
      <table>
        <tr><th>Parte</th><th>Qué decir</th><th>Ejemplo</th></tr>
        <tr><td>Presente</td><td>Qué hacés hoy</td><td>"Trabajo hace 2 años en atención al público en un kiosco."</td></tr>
        <tr><td>Pasado</td><td>Experiencia o estudios que suman</td><td>"Antes ayudé en la administración del club del barrio y terminé el secundario."</td></tr>
        <tr><td>Futuro</td><td>Qué buscás y por qué este puesto</td><td>"Quiero crecer en atención al cliente, y esta empresa tiene muy buena fama en eso."</td></tr>
      </table>
      <p><strong>Lo que no va:</strong> edad, estado civil, hijos, religión, problemas personales. No son relevantes y no tenés por qué contarlos.</p>
      <p><strong>Ensayala en voz alta</strong> con reloj hasta que te salga natural en 1 minuto, sin sonar recitada.</p>
      <p>Por ejemplo, empezar con "Bueno, nací en Merlo, tengo dos hermanos…" gasta el minuto en algo que a quien entrevista no le sirve.</p>` },
    { titulo: "El método STAR", video: {"id":"f2GQPmPVEK0","t":"¿Cómo superar una entrevista con el método STAR? · Michelle Engelmann (7:36)"}, html: `
      <p class="idea">Para preguntas del tipo "Contame una vez que…", el <strong>método STAR</strong> ordena la respuesta en cuatro partes. Es una sigla en inglés: Situación, Tarea, Acción y Resultado.</p>
      <table>
        <tr><th>Parte</th><th>Qué decir</th><th>Ejemplo</th></tr>
        <tr><td>Situación</td><td>Dónde y cuándo</td><td>"En el kiosco, un sábado de mucho movimiento…"</td></tr>
        <tr><td>Tarea</td><td>Qué tenías que lograr</td><td>"…tenía que atender la fila y además reponer las bebidas."</td></tr>
        <tr><td>Acción</td><td>Qué hiciste vos (lo más largo)</td><td>"Le pedí a mi compañero que cobrara mientras yo reponía en tandas de 5 minutos, y avisé a los clientes."</td></tr>
        <tr><td>Resultado</td><td>Cómo terminó, mejor con un número</td><td>"La fila no pasó de 4 personas y no se cortó el stock."</td></tr>
      </table>
      <p><strong>La acción es lo más importante:</strong> decí "yo hice", no "hicimos", aunque haya sido en equipo. Quieren saber qué hiciste vos.</p>
      <p><strong>Duración:</strong> entre 1 y 2 minutos. Si te extendés, quien entrevista pierde el hilo.</p>
      <p>Por ejemplo, "Soy bueno resolviendo problemas" no convence; la historia del sábado en el kiosco, sí.</p>` },
    { titulo: "Seis historias para todo", html: `
      <p class="idea">No hace falta preparar una respuesta para cada pregunta posible. Con un <strong>banco de 6 historias</strong> bien armadas con STAR podés responder la mayoría, adaptándolas.</p>
      <table>
        <tr><th>Historia sobre…</th><th>Sirve para preguntas como</th></tr>
        <tr><td>Un logro</td><td>"¿De qué estás orgulloso?", "¿Qué te destaca?"</td></tr>
        <tr><td>Un problema que resolviste</td><td>"Contame una situación difícil"</td></tr>
        <tr><td>Un error y qué aprendiste</td><td>"¿Cuál fue tu mayor error?"</td></tr>
        <tr><td>Trabajo en equipo</td><td>"¿Cómo trabajás con otros?"</td></tr>
        <tr><td>Un cliente o una persona difícil</td><td>"Contame de un conflicto"</td></tr>
        <tr><td>Algo que aprendiste rápido</td><td>"¿Cómo te adaptás a lo nuevo?"</td></tr>
      </table>
      <p><strong>Si no tenés experiencia laboral,</strong> usá la escuela, un club, un voluntariado, changas o la familia. Lo que se evalúa es cómo actuaste.</p>
      <p><strong>Anotalas en una hoja</strong> con una línea por parte de STAR y repasalas antes de cada entrevista.</p>
      <p>Por ejemplo, la historia del sábado en el kiosco sirve para "un problema que resolviste", para "trabajo en equipo" y para "trabajo bajo presión": la misma historia, con distinto foco.</p>` },
  ],
  practica: [
    "Escribí tu respuesta a \"Contame de vos\" con presente, pasado y futuro. Decila con reloj y anotá cuánto duró.",
    "Escribí una historia con el método STAR, con un número en el resultado. Anotá las 4 partes.",
    "Armá tu banco de 6 historias en una hoja, una línea por parte de STAR. Anotá a qué preguntas responde cada una.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Portal Empleo: cursos y recursos gratuitos", url: "https://portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Te dicen \"Contame de vos\". ¿Qué estructura usás?", opciones: ["Tu vida desde que naciste","Tu nombre y nada más","Presente, pasado y futuro, en 1 minuto","Tus hobbies y tu familia"], correcta: 2, explicacion: "Un resumen laboral corto. Tu vida desde que naciste tienta para presentarte completo, pero gasta el minuto." },
    { q: "En \"Contame de vos\", ¿qué no hace falta contar?", opciones: ["Edad, estado civil, hijos, religión o problemas personales","Tu experiencia","Qué buscás","Qué hacés hoy"], correcta: 0, explicacion: "No son relevantes para el trabajo. Contarlos tienta para generar cercanía, pero no tenés por qué." },
    { q: "Tu presentación suena recitada. ¿Qué hacés?", opciones: ["La leés del celular","La memorizás más","Improvisás siempre","La ensayás en voz alta hasta que salga natural, sin memorizar palabra por palabra"], correcta: 3, explicacion: "Ensayar con ideas, no con palabras exactas, suena natural. Memorizar más tienta, pero suena todavía más recitada." },
    { q: "Si te piden contar una experiencia con el método STAR, ¿qué significa la sigla?", opciones: ["Saludo, Tema, Argumento, Respuesta","Situación, Tarea, Acción y Resultado","Sueldo, Trabajo, Horario, Requisitos","Ser, Tener, Aprender, Resolver"], correcta: 1, explicacion: "Las cuatro partes de una historia ordenada. \"Saludo, tema…\" tienta porque suena a estructura, pero no es el método." },
    { q: "Si tenés poco tiempo para contar una historia STAR, ¿qué parte no puede faltar?", opciones: ["La situación","El saludo","La acción: qué hiciste vos","La fecha"], correcta: 2, explicacion: "Quieren saber qué hiciste. La situación tienta porque da contexto, pero si es larga no queda tiempo para lo importante." },
    { q: "Contás una historia de equipo y decís \"hicimos\" todo el tiempo. ¿Qué cambiás?", opciones: ["Decís \"yo hice\" en la parte de la acción","Nada, es más humilde","Hablás de lo que hizo el jefe","La contás más larga"], correcta: 0, explicacion: "Quieren saber tu parte. \"Hicimos\" tienta por humildad, pero no muestra qué hiciste vos." },
    { q: "¿Cuánto debería durar una historia STAR?", opciones: ["10 minutos","5 segundos","Lo que haga falta","Entre 1 y 2 minutos"], correcta: 3, explicacion: "Corta y ordenada. \"Lo que haga falta\" tienta, pero quien entrevista pierde el hilo." },
    { q: "Si querés que el resultado de tu historia STAR convenza, ¿qué le agregás?", opciones: ["Un adjetivo: \"Fue genial\"","Un número: \"La fila no pasó de 4 personas\"","Una opinión del jefe sin datos","Nada"], correcta: 1, explicacion: "Un número es concreto y creíble. \"Fue genial\" tienta, pero no dice qué pasó." },
    { q: "¿Para qué sirve un banco de 6 historias?", opciones: ["Para recitarlas todas juntas","Para leerlas en la entrevista","Para responder la mayoría de las preguntas adaptándolas","No sirve"], correcta: 2, explicacion: "Pocas historias cubren muchas preguntas. Recitarlas juntas tienta para mostrar todo, pero cansa." },
    { q: "Te preguntan \"¿Cuál fue tu mayor error?\". ¿Qué historia del banco usás?", opciones: ["La del error y qué aprendiste","La del logro","Ninguna, decís que nunca te equivocaste","La de trabajo en equipo"], correcta: 0, explicacion: "Mostrar un error y el aprendizaje da confianza. \"Nunca me equivoqué\" tienta para quedar bien, pero no es creíble." },
    { q: "Si nunca trabajaste, ¿de dónde sacás tus historias?", opciones: ["Las inventás","No respondés","Contás historias de otros como si fueran tuyas","De la escuela, un club, un voluntariado, changas o la familia"], correcta: 3, explicacion: "Lo que importa es cómo actuaste. Inventar tienta, pero si te repreguntan se nota." },
    { q: "La historia del sábado en el kiosco, ¿para qué preguntas sirve?", opciones: ["Solo para una pregunta","Para \"un problema\", \"trabajo en equipo\" y \"trabajo bajo presión\", cambiando el foco","Para ninguna","Solo si te preguntan por kioscos"], correcta: 1, explicacion: "Una historia sirve para varias preguntas. \"Solo para una\" tienta, pero así necesitarías decenas de historias." },
  ],
},
{
  id: "dificiles",
  icono: "🧗",
  titulo: "Preguntas difíciles",
  nivel: "Intermedio",
  objetivos: [
    "Responder sobre debilidades, huecos en el CV y por qué te fuiste",
    "Responder sin experiencia mostrando lo que sí tenés",
    "Hablar de la pretensión salarial con un rango investigado",
  ],
  lecciones: [
    { titulo: "Debilidades y errores", html: `
      <p class="idea">"¿Cuál es tu mayor debilidad?" no busca que te autodestruyas ni que digas "soy perfeccionista". Busca ver si te conocés y si hacés algo para mejorar.</p>
      <table>
        <tr><th>Respuesta que no sirve</th><th>Por qué</th></tr>
        <tr><td>"No tengo debilidades"</td><td>No es creíble</td></tr>
        <tr><td>"Soy muy perfeccionista" (sin más)</td><td>Suena a respuesta armada</td></tr>
        <tr><td>"Llego tarde siempre"</td><td>Es una debilidad clave para casi cualquier trabajo</td></tr>
      </table>
      <p><strong>Una fórmula:</strong> una debilidad real, que no sea central para el puesto, más lo que estás haciendo para mejorarla.</p>
      <pre><code>"Me cuesta hablar en público. Para mejorar, me anoté en un
taller y ya presenté dos veces en las reuniones del club."</code></pre>
      <p><strong>Con los errores, lo mismo:</strong> contá un error real (con STAR), hacete cargo y decí qué aprendiste. Quien entrevista quiere ver que no culpás a otros.</p>
      <p>Por ejemplo, para un puesto de atención al público, "me cuesta el Excel avanzado" es una debilidad honesta que no afecta lo central del trabajo.</p>` },
    { titulo: "Huecos, despidos y sin experiencia", html: `
      <p class="idea">Hay preguntas que dan miedo porque tocan algo que preferirías no contar. La regla es la misma para todas: <strong>honesto, corto y mirando hacia adelante</strong>.</p>
      <table>
        <tr><th>Pregunta</th><th>Cómo responder</th></tr>
        <tr><td>"¿Qué hiciste estos 2 años sin trabajo?"</td><td>"Cuidé a mi mamá durante una enfermedad. Hoy ya está bien y estoy lista para volver; mientras tanto hice un curso de Excel."</td></tr>
        <tr><td>"¿Por qué te fuiste del último trabajo?"</td><td>"Buscaba un horario que me permitiera estudiar" (sin hablar mal de nadie)</td></tr>
        <tr><td>"¿Por qué te despidieron?"</td><td>"Hubo un recorte de personal" o, si fue por un error, contarlo corto y qué aprendiste</td></tr>
        <tr><td>"No tenés experiencia, ¿por qué te elegiríamos?"</td><td>Lo que sí tenés: ganas de aprender, una historia de la escuela o un club, disponibilidad</td></tr>
      </table>
      <p><strong>No mientas:</strong> las referencias y los registros pueden mostrar la verdad, y una mentira descubierta descalifica más que cualquier hueco.</p>
      <p><strong>No des de más:</strong> no hace falta entrar en detalles personales o de salud. Una oración alcanza, y después pasá a lo que podés aportar.</p>
      <p>Por ejemplo, un hueco por cuidar a un familiar es muy común y la mayoría de las personas que entrevistan lo entienden: decirlo con naturalidad es mejor que esquivarlo.</p>` },
    { titulo: "La pretensión salarial", html: `
      <p class="idea">"¿Cuál es tu pretensión salarial?" es cuánto querés cobrar. Para responder bien, investigá antes cuánto se paga ese puesto y respondé con un <strong>rango</strong>.</p>
      <p><strong>Dónde averiguar:</strong> el convenio colectivo del rubro (muchos sindicatos publican las escalas de sueldo), avisos parecidos que dicen el sueldo, personas que trabajan en lo mismo.</p>
      <p><strong>Bruto y neto:</strong> el <strong>sueldo bruto</strong> es el total antes de descuentos; el <strong>neto</strong> es lo que cobrás en mano. En un empleo en relación de dependencia, los descuentos de ley suelen sumar alrededor de un 17 % (jubilación, PAMI y obra social).</p>
      <pre><code>Sueldo bruto:          $ 1.000.000
Descuentos (≈ 17 %):  − $   170.000
Neto (en mano):        $   830.000</code></pre>
      <p><strong>Aclará de cuál hablás:</strong> "Mi pretensión es de entre $ 950.000 y $ 1.050.000 brutos".</p>
      <table>
        <tr><th>Situación</th><th>Respuesta</th></tr>
        <tr><td>Investigaste el rango</td><td>Das un rango que incluya lo que necesitás</td></tr>
        <tr><td>No sabés cuánto se paga</td><td>"¿Cuál es el rango previsto para el puesto?"</td></tr>
        <tr><td>Te ofrecen menos de lo que necesitás</td><td>Preguntá por otros beneficios o decí con respeto que no te alcanza</td></tr>
      </table>
      <p>Esta lección ayuda a preparar la respuesta; para dudas sobre tu recibo o tus derechos, consultá al sindicato o a un abogado laboralista.</p>
      <p>Por ejemplo, decir un número neto cuando te preguntaban por el bruto puede hacer que te ofrezcan un 17 % menos de lo que esperabas cobrar.</p>` },
  ],
  practica: [
    "Escribí tu respuesta a \"¿Cuál es tu mayor debilidad?\" con la fórmula: debilidad real no central más lo que hacés para mejorar. Anotá la respuesta y contá sus palabras.",
    "Elegí la pregunta difícil que más te preocupa (hueco, despido o sin experiencia) y escribí una respuesta honesta de 2 oraciones mirando hacia adelante. Anotá cuánto tardás en decirla.",
    "Investigá cuánto se paga un puesto que te interesa (convenio o avisos) y calculá el neto de un bruto de ese rango con el 17 % de descuentos. Anotá el rango bruto y el neto.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Argentina.gob.ar: Empleo", url: "https://www.argentina.gob.ar/trabajo/empleo" },
  ],
  quiz: [
    { q: "Te preguntan tu mayor debilidad y respondés \"No tengo\". ¿Qué pasa?", opciones: ["Queda muy bien","Te contratan enseguida","No es creíble y parece que no te conocés","Nada"], correcta: 2, explicacion: "Todos tenemos debilidades. Que queda bien tienta, pero quien entrevista lo toma como falta de autoconocimiento." },
    { q: "¿Qué fórmula conviene para responder sobre una debilidad?", opciones: ["Una debilidad real, no central para el puesto, más lo que hacés para mejorar","\"Soy perfeccionista\" y nada más","La debilidad más grave que tengas","Una debilidad inventada"], correcta: 0, explicacion: "Real, no central y con plan. \"Soy perfeccionista\" tienta porque suena positiva, pero parece armada." },
    { q: "Te postulás a atención al público y tu debilidad es llegar tarde. ¿Conviene decirla?", opciones: ["Sí, la honestidad es lo primero","Sí, y sin plan de mejora","No respondas nada","No como ejemplo: es central para el puesto; elegí otra real que no lo sea"], correcta: 3, explicacion: "Elegí una debilidad que no afecte lo central. La honestidad tienta, pero hay otras debilidades reales para contar." },
    { q: "Si contás un error en la entrevista, ¿qué quiere ver quien entrevista?", opciones: ["Que el error fue culpa de otro","Que te hacés cargo, no culpás a otros y aprendiste","Que no fue grave","Que nunca más te pasó nada"], correcta: 1, explicacion: "Hacerte cargo da confianza. Culpar a otro tienta para quedar bien, pero preocupa." },
    { q: "¿Cuál es la regla para las preguntas difíciles?", opciones: ["Largo y con todos los detalles","Esquivar la pregunta","Honesto, corto y mirando hacia adelante","Mentir si hace falta"], correcta: 2, explicacion: "Corto y hacia adelante. Esquivar tienta para no incomodarte, pero quien entrevista lo nota." },
    { q: "Tenés 2 años sin trabajo porque cuidaste a tu mamá. ¿Cómo lo contás?", opciones: ["Con naturalidad, en una oración, y lo que hiciste o aprendiste mientras tanto","Inventás un trabajo","Contás todos los detalles médicos","Decís que no querés hablar de eso"], correcta: 0, explicacion: "Es un motivo común y entendible. Inventar tienta para llenar el hueco, pero si lo descubren te descalifica." },
    { q: "Te preguntan por qué te fuiste de un trabajo donde te trataban mal. ¿Qué decís?", opciones: ["Todo lo malo que te hicieron","Que tu jefe era un desastre","Que no te acordás","Un motivo mirando hacia adelante, sin hablar mal de nadie"], correcta: 3, explicacion: "Hablar mal preocupa. Contar todo tienta para justificarte, pero suena a que harías lo mismo." },
    { q: "No tenés experiencia y te preguntan por qué te elegirían. ¿Qué respondés?", opciones: ["\"Porque necesito el trabajo\"","Lo que sí tenés: ganas, una historia de la escuela o un club, disponibilidad","\"No sé\"","\"Porque soy el mejor\""], correcta: 1, explicacion: "Mostrá lo que sí aportás. \"Porque necesito el trabajo\" tienta por sincero, pero no dice qué das vos." },
    { q: "¿Qué es la pretensión salarial?", opciones: ["Lo que cobrabas antes","Un impuesto","Cuánto querés cobrar por el puesto","El aguinaldo"], correcta: 2, explicacion: "Es lo que pedís. Lo que cobrabas antes tienta como respuesta, pero no siempre es lo mismo." },
    { q: "¿Dónde averiguás cuánto se paga un puesto?", opciones: ["En el convenio colectivo del rubro, en avisos parecidos y preguntando a quienes trabajan en lo mismo","Inventando un número","Pidiendo el doble de lo que cobrabas","No hace falta averiguar"], correcta: 0, explicacion: "Investigar te da un rango real. Inventar tienta por rápido, pero podés pedir de más o de menos." },
    { q: "Si el sueldo bruto es $ 1.000.000 y los descuentos son del 17 %, ¿cuánto cobrás en mano?", opciones: ["$ 1.170.000","$ 1.000.000","$ 170.000","$ 830.000"], correcta: 3, explicacion: "1.000.000 − 170.000 = 830.000. $ 1.170.000 tienta por sumar, pero los descuentos restan." },
    { q: "No sabés cuánto se paga el puesto y te preguntan tu pretensión. ¿Qué podés decir?", opciones: ["Un número al azar","\"¿Cuál es el rango previsto para el puesto?\"","\"Lo que sea\"","\"El doble que en mi último trabajo\""], correcta: 1, explicacion: "Preguntar el rango es válido. \"Lo que sea\" tienta para no perder la oportunidad, pero te pueden ofrecer muy poco." },
  ],
},
{
  id: "formatos",
  icono: "💻",
  titulo: "Videollamada, grupal y pruebas",
  nivel: "Intermedio",
  objetivos: [
    "Preparar una entrevista por videollamada o grabada en video",
    "Participar en una entrevista grupal sin pisar a los demás",
    "Encarar pruebas prácticas, técnicas y psicotécnicas con calma",
  ],
  lecciones: [
    { titulo: "Por videollamada", video: {"id":"zOR1baFMPuM","t":"¿Cómo prepararte para una entrevista virtual? · LearnFree en Español (3:01)"}, html: `
      <p class="idea">Una entrevista por videollamada tiene las mismas preguntas que una presencial, pero suma la técnica: conexión, cámara, luz y sonido. Probalos antes.</p>
      <table>
        <tr><th>Qué preparar</th><th>Cómo</th></tr>
        <tr><td>La aplicación</td><td>Instalala y probala el día anterior (Meet, Zoom o Teams)</td></tr>
        <tr><td>Cámara</td><td>A la altura de los ojos; si es el celular, apoyado y horizontal</td></tr>
        <tr><td>Luz</td><td>De frente (una ventana delante de vos), no detrás</td></tr>
        <tr><td>Fondo</td><td>Pared lisa o lugar ordenado; si no, fondo difuminado</td></tr>
        <tr><td>Sonido</td><td>Lugar sin ruido; auriculares si tenés</td></tr>
        <tr><td>Mirada</td><td>A la cámara cuando hablás, no a tu imagen</td></tr>
      </table>
      <p><strong>Entrá 5 minutos antes</strong> y tené el teléfono de contacto a mano por si se corta.</p>
      <p><strong>Si se corta:</strong> volvé a entrar y, si no funciona, mandá un mensaje enseguida. Es común y nadie te va a descalificar por eso.</p>
      <p><strong>Entrevista grabada:</strong> algunas empresas te mandan preguntas que respondés grabándote, sin nadie del otro lado. Leé bien cuánto tiempo tenés por respuesta y practicá con el celular antes.</p>
      <p>Por ejemplo, una ventana detrás de vos te deja como una sombra; dar vuelta la mesa para que la luz te dé de frente cambia todo.</p>` },
    { titulo: "Entrevista grupal", video: {"id":"I-tZbwo5VsI","t":"Cómo hacer una buena dinámica de grupo o entrevista grupal · Humanos como recurso (6:38)"}, html: `
      <p class="idea">En una entrevista grupal, varias personas candidatas hacen una actividad juntas (resolver un caso, armar algo, debatir) mientras las observan. No gana quien más habla: gana quien mejor trabaja con otros.</p>
      <table>
        <tr><th>Suma</th><th>Resta</th></tr>
        <tr><td>Escuchar y retomar lo que dijo otro: "Como dijo Ana…"</td><td>Interrumpir o hablar por encima</td></tr>
        <tr><td>Proponer orden: "¿Arrancamos por repartir tareas?"</td><td>Imponer tu idea sin escuchar</td></tr>
        <tr><td>Invitar a quien no habló: "¿Vos qué pensás?"</td><td>Quedarte callado todo el tiempo</td></tr>
        <tr><td>Cuidar el tiempo: "Nos quedan 5 minutos"</td><td>Criticar las ideas de otros con desprecio</td></tr>
      </table>
      <p><strong>La presentación inicial:</strong> suele haber una ronda de 30 segundos. Usá una versión corta de tu "Contame de vos".</p>
      <p><strong>No es contra los demás:</strong> pueden elegir a varias personas del mismo grupo. Colaborar suma más que competir.</p>
      <p>Por ejemplo, decir "Me parece buena la idea de Juan; le sumaría…" muestra que escuchás y que aportás, las dos cosas que observan.</p>` },
    { titulo: "Pruebas prácticas y psicotécnicos", html: `
      <p class="idea">Algunas búsquedas suman pruebas: hacer una tarea del puesto, un ejercicio técnico o un test psicotécnico. Se encaran con preparación y honestidad.</p>
      <table>
        <tr><th>Prueba</th><th>Ejemplo</th><th>Cómo prepararte</th></tr>
        <tr><td>Práctica</td><td>Cobrar con una caja de prueba, preparar un plato, armar un pedido</td><td>Repasar lo básico; preguntar si hay que llevar algo</td></tr>
        <tr><td>Técnica</td><td>Una planilla de Excel, un texto con errores para corregir</td><td>Practicar con ejercicios parecidos</td></tr>
        <tr><td>Psicotécnico</td><td>Dibujos, preguntas de personalidad, ejercicios de lógica</td><td>Dormir bien; responder con honestidad</td></tr>
      </table>
      <p>Un <strong>psicotécnico</strong> es un conjunto de pruebas que mide aptitudes (atención, lógica) y rasgos de personalidad. Lo suele interpretar un profesional de la psicología.</p>
      <p><strong>En los tests de personalidad, sé honesto:</strong> muchos incluyen preguntas repetidas con otras palabras para detectar respuestas "armadas". Querer parecer perfecto suele salir peor.</p>
      <p><strong>Si no sabés algo en una prueba práctica,</strong> decilo y mostrá cómo lo resolverías: "Esta fórmula no la conozco; la buscaría así".</p>
      <p>Por ejemplo, en una prueba de caja, contar el vuelto en voz alta y con calma muestra cuidado, aunque tardes unos segundos más.</p>` },
  ],
  practica: [
    "Prepará una videollamada de prueba con alguien: cámara a la altura de los ojos, luz de frente y fondo ordenado. Anotá qué tuviste que cambiar.",
    "Grabate respondiendo 3 preguntas con el celular, con 2 minutos por respuesta como en una entrevista grabada. Anotá cuánto duró cada una.",
    "Con 2 o 3 personas, hagan una actividad grupal corta (por ejemplo, organizar un evento en 10 minutos). Anotá cuántas veces retomaste lo que dijo otro e invitaste a alguien a hablar.",
  ],
  recursos: [
    { t: "Portal Empleo: cursos y recursos gratuitos", url: "https://portalempleo.gob.ar/" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Tenés una entrevista por videollamada mañana. ¿Qué hacés hoy?", opciones: ["Nada, mañana entrás y ves","Comprás una cámara nueva","Instalás y probás la aplicación, la cámara, la luz y el sonido","Solo elegís la ropa"], correcta: 2, explicacion: "Probar antes evita sorpresas. Entrar y ver tienta, pero si la app no anda perdés los primeros minutos." },
    { q: "Si usás el celular para la videollamada, ¿cómo lo ponés?", opciones: ["Apoyado, horizontal y a la altura de los ojos","En la mano","Sobre la mesa mirando hacia arriba","Vertical en el bolsillo"], correcta: 0, explicacion: "Apoyado y a la altura de los ojos se ve estable. En la mano tienta por práctico, pero la imagen se mueve todo el tiempo." },
    { q: "Tenés una ventana detrás de vos en la videollamada. ¿Qué pasa?", opciones: ["Te ves mejor","Nada","Se ve más profesional","Te ves como una sombra: la luz tiene que estar de frente"], correcta: 3, explicacion: "La luz de atrás oscurece la cara. Que se ve mejor tienta porque hay luz, pero no te ilumina a vos." },
    { q: "En la videollamada, ¿a dónde mirás cuando hablás?", opciones: ["A tu imagen","A la cámara","A la persona en la pantalla","Al teclado"], correcta: 1, explicacion: "Mirar a la cámara es mirar a los ojos. A la persona en pantalla tienta, pero del otro lado se ve que mirás para abajo." },
    { q: "Se corta la videollamada en medio de la entrevista. ¿Qué hacés?", opciones: ["Te das por vencido","Esperás que te llamen ellos","Volvés a entrar y, si no funciona, mandás un mensaje enseguida","Mandás un mensaje al día siguiente"], correcta: 2, explicacion: "Es común y se resuelve rápido. Esperar que te llamen tienta, pero quizás no tienen tu número a mano." },
    { q: "Te piden una entrevista grabada con 2 minutos por respuesta. ¿Qué hacés antes?", opciones: ["Practicás grabándote con el celular para controlar el tiempo","Nada, es igual que una charla","Escribís las respuestas para leerlas","Grabás lo más largo posible"], correcta: 0, explicacion: "Practicar el tiempo evita cortes. Leer tienta por seguro, pero se nota y suena frío." },
    { q: "En una entrevista grupal, ¿quién suele destacarse?", opciones: ["Quien más habla","Quien critica las ideas de los demás","Quien no dice nada","Quien mejor trabaja con otros: escucha, propone y ordena"], correcta: 3, explicacion: "Se observa cómo trabajás en grupo. Hablar más tienta para hacerte notar, pero si pisás a otros resta." },
    { q: "Si en la actividad grupal, Ana propone una idea buena, ¿qué decís?", opciones: ["Proponés otra cosa sin mencionarla","\"Como dijo Ana… le sumaría…\"","Te quedás callado","Decís que tu idea es mejor"], correcta: 1, explicacion: "Retomar y sumar muestra que escuchás y aportás. Proponer otra cosa tienta para destacarte, pero parece que no escuchaste." },
    { q: "En la grupal, una persona no habló nada. ¿Qué podés hacer?", opciones: ["Ignorarla, es mejor para vos","Hablar por ella","Invitarla: \"¿Vos qué pensás?\"","Señalar que no habla"], correcta: 2, explicacion: "Incluir a otros suma. Ignorarla tienta porque compiten, pero pueden elegir a varios del grupo." },
    { q: "¿Qué es un psicotécnico?", opciones: ["Pruebas que miden aptitudes y rasgos de personalidad, interpretadas por un profesional","Un examen médico","Una entrevista con el dueño","Una prueba de Excel"], correcta: 0, explicacion: "Mide aptitudes y personalidad. El examen médico tienta porque también es una evaluación, pero es otra cosa." },
    { q: "En un test de personalidad querés parecer perfecto. ¿Qué pasa?", opciones: ["Te va mejor","Nadie lo nota","Es lo recomendado","Suele salir peor: hay preguntas repetidas para detectar respuestas armadas"], correcta: 3, explicacion: "La honestidad funciona mejor. Parecer perfecto tienta, pero las contradicciones se notan." },
    { q: "En una prueba técnica te piden una fórmula que no conocés. ¿Qué hacés?", opciones: ["Ponés cualquier cosa","Lo decís y mostrás cómo lo resolverías","Te vas","Dejás todo en blanco sin decir nada"], correcta: 1, explicacion: "Mostrar cómo lo buscarías suma. Poner cualquier cosa tienta para no dejarlo vacío, pero un error escondido es peor." },
  ],
},
{
  id: "cierre",
  icono: "🛡️",
  titulo: "Tus preguntas, tus derechos y el después",
  nivel: "Intermedio",
  objetivos: [
    "Hacer 2 o 3 preguntas buenas al final de la entrevista",
    "Reconocer preguntas discriminatorias y saber cómo responder",
    "Hacer seguimiento y aprender de cada entrevista, también de los rechazos",
  ],
  lecciones: [
    { titulo: "Tus preguntas al final", html: `
      <p class="idea">Casi todas las entrevistas terminan con "¿Tenés alguna pregunta?". Decir "No" desperdicia el momento. Llevá 2 o 3 preguntas preparadas: muestran interés y te dan información.</p>
      <table>
        <tr><th>Buenas preguntas</th><th>Para qué</th></tr>
        <tr><td>"¿Cómo es un día típico en este puesto?"</td><td>Saber qué vas a hacer de verdad</td></tr>
        <tr><td>"¿Con quién voy a trabajar?"</td><td>Conocer al equipo</td></tr>
        <tr><td>"¿Qué esperan que logre en los primeros meses?"</td><td>Saber cómo te van a evaluar</td></tr>
        <tr><td>"¿Cuáles son los próximos pasos de la búsqueda?"</td><td>Saber cuándo y cómo te avisan</td></tr>
      </table>
      <p><strong>Las condiciones también se preguntan:</strong> horario, tipo de contrato, si es en blanco (registrado). Es tu derecho saberlo antes de aceptar. Conviene hacerlo con naturalidad: "¿Me podrían contar el horario y la modalidad de contratación?".</p>
      <p><strong>Lo que no conviene como primera pregunta:</strong> "¿Cuántas vacaciones tengo?" o "¿Puedo faltar?", antes de mostrar interés por el trabajo.</p>
      <p>Por ejemplo, "¿Cuáles son los próximos pasos?" te dice si te avisan en una semana o en un mes, y te evita la ansiedad de no saber.</p>` },
    { titulo: "Preguntas que no te pueden hacer", html: `
      <p class="idea">En Argentina está prohibido discriminar en el acceso al trabajo. Algunas preguntas no tienen nada que ver con el puesto y pueden usarse para discriminar: no estás obligado a responderlas.</p>
      <table>
        <tr><th>Pregunta que puede ser discriminatoria</th><th>Qué tiene que ver con el puesto</th></tr>
        <tr><td>"¿Estás embarazada o pensás tener hijos?"</td><td>Nada</td></tr>
        <tr><td>"¿Sos casado? ¿Tenés novia?"</td><td>Nada</td></tr>
        <tr><td>"¿Qué religión tenés?" o "¿A quién votaste?"</td><td>Nada</td></tr>
        <tr><td>"¿De dónde son tus padres?"</td><td>Nada</td></tr>
        <tr><td>Preguntas sobre una enfermedad, si no tienen relación directa con las tareas</td><td>En general, nada</td></tr>
      </table>
      <p>La <strong>Ley 23.592</strong> sanciona los actos discriminatorios, y la Ley de Contrato de Trabajo prohíbe discriminar a trabajadores por sexo, religión, nacionalidad, ideas políticas, edad y otros motivos.</p>
      <p><strong>Cómo responder sin cerrarte la puerta:</strong> "Prefiero no hablar de mi vida personal, pero te cuento sobre mi disponibilidad: puedo trabajar de lunes a sábado".</p>
      <p><strong>Si sentís que te discriminaron:</strong> anotá qué pasó, cuándo y quién. Podés consultar con el sindicato del rubro, un abogado laboralista o la Defensoría del Pueblo de tu provincia o ciudad. Esta lección orienta; no reemplaza un asesoramiento legal.</p>
      <p>Por ejemplo, si te preguntan si tenés hijos, lo que de verdad quieren saber suele ser tu disponibilidad: respondé eso.</p>` },
    { titulo: "Después de la entrevista", html: `
      <p class="idea">La entrevista no termina al salir. Un agradecimiento corto, un seguimiento a tiempo y anotar lo que aprendiste hacen que cada entrevista te prepare para la siguiente.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué</th></tr>
        <tr><td>El mismo día</td><td>Mensaje o mail corto de agradecimiento</td></tr>
        <tr><td>Esa noche</td><td>Anotar qué te preguntaron, qué salió bien y qué mejorar</td></tr>
        <tr><td>Pasado el plazo que te dieron</td><td>Un seguimiento amable</td></tr>
      </table>
      <pre><code>Hola, Laura:
Gracias por la entrevista de hoy. Me gustó conocer más sobre
el puesto y el equipo; sigo muy interesada.
Saludos,
Juana Pérez</code></pre>
      <p><strong>El registro de entrevistas:</strong> una hoja con fecha, empresa, preguntas que te hicieron y qué mejorar. Después de 3 o 4 entrevistas vas a ver qué preguntas se repiten.</p>
      <p><strong>Los rechazos:</strong> son parte de cualquier búsqueda y casi nunca son personales. Si te dicen que no, podés pedir una devolución con amabilidad: "¿Hay algo que me recomiendes mejorar?".</p>
      <p>Por ejemplo, si en tres entrevistas te trabaste con la misma pregunta, ya sabés cuál practicar antes de la cuarta.</p>` },
  ],
  practica: [
    "Escribí 3 preguntas para hacer al final de una entrevista, incluida una sobre los próximos pasos. Anotá las 3.",
    "Escribí cómo responderías a una pregunta sobre tu vida personal (hijos, pareja, religión) sin cerrarte la puerta, llevando la respuesta a lo laboral. Anotá la frase y probala en voz alta.",
    "Armá un registro de entrevistas con fecha, empresa, preguntas, qué salió bien y qué mejorar. Cargá una entrevista real o una práctica y anotá qué mejorarías.",
  ],
  recursos: [
    { t: "Ministerio de Trabajo: Violencia laboral", url: "https://www.argentina.gob.ar/trabajo/violencialaboral" },
    { t: "Argentina.gob.ar: Empleo", url: "https://www.argentina.gob.ar/trabajo/empleo" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Al final te preguntan \"¿Tenés alguna pregunta?\". ¿Qué respondés?", opciones: ["\"No, todo claro\"","\"¿Cuántas vacaciones tengo?\"","2 o 3 preguntas preparadas sobre el puesto y los próximos pasos","\"¿Cuándo cobro?\" como primera pregunta"], correcta: 2, explicacion: "Las preguntas muestran interés. \"Todo claro\" tienta para no molestar, pero desperdicia el momento." },
    { q: "¿Qué pregunta te dice cuándo te van a avisar?", opciones: ["\"¿Cuáles son los próximos pasos de la búsqueda?\"","\"¿Me van a llamar?\"","\"¿Quedé?\"","\"¿Cuántos se postularon?\""], correcta: 0, explicacion: "Los próximos pasos te dan el plazo. \"¿Quedé?\" tienta por directo, pero pone incómodo a quien entrevista." },
    { q: "¿Podés preguntar si el trabajo es registrado (en blanco)?", opciones: ["No, queda mal","Solo después de empezar","Solo si te lo ofrecen","Sí: es tu derecho saber las condiciones antes de aceptar"], correcta: 3, explicacion: "Las condiciones se preguntan. Que queda mal tienta, pero aceptar sin saber puede salirte caro." },
    { q: "Si te preguntan \"¿Pensás tener hijos?\", ¿qué es?", opciones: ["Una pregunta normal","Una pregunta que puede ser discriminatoria y no tenés obligación de responder","Una pregunta obligatoria","Una prueba de honestidad"], correcta: 1, explicacion: "No tiene relación con el puesto. Que es normal tienta porque es común, pero está mal." },
    { q: "¿Qué ley sanciona los actos discriminatorios en Argentina?", opciones: ["La Ley de Tránsito","La Ley de Defensa del Consumidor","La Ley 23.592","Ninguna"], correcta: 2, explicacion: "La 23.592 trata los actos discriminatorios. Defensa del Consumidor tienta porque también protege derechos, pero es para compras." },
    { q: "Te preguntan si estás casado. ¿Cómo respondés sin cerrarte la puerta?", opciones: ["\"Prefiero no hablar de mi vida personal, pero te cuento mi disponibilidad…\"","\"Eso es ilegal, me voy\"","Respondés con todos los detalles","Mentís"], correcta: 0, explicacion: "Llevar la respuesta a lo laboral es firme y amable. Irte tienta como reacción, pero perdés la oportunidad de mostrar lo tuyo." },
    { q: "Si te preguntan si tenés hijos, ¿qué suelen querer saber?", opciones: ["Tu sueldo anterior","Tu edad","Nada","Tu disponibilidad"], correcta: 3, explicacion: "Detrás suele estar la disponibilidad. Responder eso tienta menos que contar tu vida, y es lo que importa." },
    { q: "Sentís que te discriminaron en una entrevista. ¿Qué hacés primero?", opciones: ["Lo publicás en redes","Anotás qué pasó, cuándo y quién","Lo olvidás","Llamás a la empresa para discutir"], correcta: 1, explicacion: "El registro da peso a tu relato. Publicarlo tienta para que se sepa, pero puede traerte problemas." },
    { q: "Si querés consultar por una posible discriminación, ¿adónde podés ir?", opciones: ["A la empresa que te discriminó","A Defensa del Consumidor","Al sindicato del rubro, a un abogado laboralista o a la Defensoría del Pueblo","A ningún lado"], correcta: 2, explicacion: "Hay lugares que asesoran. La empresa tienta como primer paso, pero difícilmente reconozca el problema." },
    { q: "Si saliste de la entrevista, ¿qué mandás ese mismo día?", opciones: ["Un mensaje o mail corto de agradecimiento","Nada, ya está","Un mensaje preguntando si quedaste","Tu CV de nuevo"], correcta: 0, explicacion: "El agradecimiento suma. Preguntar si quedaste tienta, pero es muy pronto y presiona." },
    { q: "¿Para qué sirve un registro de entrevistas?", opciones: ["Para reclamar a las empresas","Para mostrarlo en la próxima entrevista","No sirve","Para ver qué preguntas se repiten y qué mejorar"], correcta: 3, explicacion: "El registro te prepara para la siguiente. \"No sirve\" tienta, pero sin anotarlo repetís los mismos errores." },
    { q: "Si te dicen que no quedaste, ¿qué podés hacer?", opciones: ["Discutir la decisión","Agradecer y pedir con amabilidad una devolución","No responder","Hablar mal de la empresa"], correcta: 1, explicacion: "La devolución te ayuda a mejorar. Discutir tienta por la bronca, pero cierra la puerta para futuras búsquedas." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu simulacro de entrevista",
  nivel: "Avanzado",
  objetivos: [
    "Preparar una entrevista completa para un aviso real",
    "Hacer un simulacro con otra persona y evaluarlo con una rúbrica",
    "Hacer un segundo simulacro y medir la mejora",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>simulacro</strong>: una entrevista de práctica completa, con otra persona haciendo de entrevistador, para un aviso real que te interese.</p>
      <table>
        <tr><th>Qué preparar</th><th>Módulo</th></tr>
        <tr><td>Investigación de la empresa (3 cosas y una que te guste)</td><td>Prepararte</td></tr>
        <tr><td>Tabla de requisitos con tus ejemplos</td><td>Prepararte</td></tr>
        <tr><td>"Contame de vos" en 1 minuto</td><td>Tu banco de historias</td></tr>
        <tr><td>Banco de 6 historias STAR</td><td>Tu banco de historias</td></tr>
        <tr><td>Respuestas a debilidad, hueco o sin experiencia, y pretensión</td><td>Preguntas difíciles</td></tr>
        <tr><td>3 preguntas para el final</td><td>Tus preguntas y tus derechos</td></tr>
      </table>
      <p><strong>Para quien hace de entrevistador:</strong> dale el aviso y una lista de 8 preguntas: "Contame de vos", "¿Por qué este puesto?", 3 de "Contame una vez que…", una difícil, la pretensión y "¿Tenés preguntas?".</p>
      <p><strong>Grabalo</strong> (con permiso de la otra persona) para mirarlo después.</p>
      <p>Por ejemplo, si no tenés a nadie para practicar, el curso "Buscar trabajo con IA" de este sitio explica cómo usar una IA como entrevistador, aunque practicar con una persona real se parece más a lo que vas a vivir.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Quien hace de entrevistador te evalúa con esta al terminar.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>"Contame de vos"</td><td>Presente, pasado y futuro, 1 minuto</td><td>Desordenado o largo</td><td>Contó su vida personal</td></tr>
        <tr><td>Historias</td><td>STAR completo, con acción propia y un resultado</td><td>Historia sin resultado o en "nosotros"</td><td>Respuestas generales sin ejemplos</td></tr>
        <tr><td>Conocimiento de la empresa</td><td>Mencionó algo concreto y lo conectó con lo suyo</td><td>Algo general</td><td>Nada</td></tr>
        <tr><td>Pregunta difícil</td><td>Honesta, corta, mirando adelante</td><td>Larga o esquiva</td><td>Mintió o habló mal de otros</td></tr>
        <tr><td>Pretensión</td><td>Rango investigado, aclarando bruto o neto</td><td>Número sin aclarar</td><td>"Lo que sea" o no supo</td></tr>
        <tr><td>Cierre</td><td>2 o 3 preguntas, incluidos los próximos pasos</td><td>Una pregunta</td><td>"No, todo claro"</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → practicá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios</code></pre>
      <p>Por ejemplo, si sacaste 0 en historias porque respondiste "soy muy responsable" sin ejemplo, volvé a tu banco de historias antes del segundo simulacro.</p>` },
    { titulo: "Segundo simulacro y comparación", html: `
      <p class="idea">El primer simulacro muestra qué falla; el segundo, cuánto mejoraste. Hacelo unos días después, con otras preguntas si se puede, y compará.</p>
      <pre><code>                          Simulacro 1   Simulacro 2
"Contame de vos" (tiempo) 2 min 30 s    1 min 05 s
Historias con resultado   1 de 3        3 de 3
Muletillas (en el video)  15            6
Rúbrica                   6/12          11/12
Nervios (1 a 10)          8             5</code></pre>
      <p><strong>Mirá el video con la rúbrica al lado:</strong> anotá el minuto donde algo salió bien y donde algo falló. Es más útil que una impresión general.</p>
      <p><strong>Antes de una entrevista real:</strong> repasá tu hoja con el banco de historias, la investigación de la empresa y tus 3 preguntas. Con eso, ya hiciste la mitad del trabajo.</p>
      <p>Por ejemplo, pasar de 1 a 3 historias con resultado es la diferencia entre "parece buena persona" y "demostró lo que sabe hacer".</p>` },
  ],
  practica: [
    "Prepará el simulacro para un aviso real con las 6 piezas de la tabla del encargo. Anotá el aviso que elegiste.",
    "Hacé el primer simulacro con otra persona y pedile que te evalúe con la rúbrica. Anotá el puntaje de cada criterio y el total sobre 12.",
    "Practicá los criterios con 0 o 1 y hacé un segundo simulacro. Completá la tabla de comparación y anotá cuál mejoró más.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Portal Empleo: cursos y recursos gratuitos", url: "https://portalempleo.gob.ar/" },
    { t: "Argentina.gob.ar: Empleo", url: "https://www.argentina.gob.ar/trabajo/empleo" },
  ],
  quiz: [
    { q: "Si un amigo te propone hacer un simulacro de entrevista, ¿qué es?", opciones: ["Una entrevista falsa para engañar","Un test psicotécnico","Una entrevista de práctica completa, con otra persona haciendo de entrevistador","Leer preguntas en internet"], correcta: 2, explicacion: "Es práctica real con alguien. Leer preguntas tienta como preparación, pero no es lo mismo que responderlas en voz alta." },
    { q: "¿Qué le das a la persona que hace de entrevistador?", opciones: ["El aviso y una lista de 8 preguntas","Tus respuestas para que las lea","Nada, que improvise","Solo tu CV"], correcta: 0, explicacion: "El aviso y las preguntas hacen el simulacro realista. Tus respuestas tientan para que te ayude, pero arruina la práctica." },
    { q: "Querés grabar el simulacro. ¿Qué hacés primero?", opciones: ["Grabás sin avisar","Lo subís a redes","No grabás nunca","Pedís permiso a la otra persona"], correcta: 3, explicacion: "Grabar a otro requiere permiso. Sin avisar tienta por natural, pero no es respetuoso." },
    { q: "No tenés a nadie para practicar. ¿Qué alternativa hay?", opciones: ["No practicar","Practicar con una IA como entrevistador, aunque con una persona se parece más a lo real","Ir directo a la entrevista real","Practicar solo leyendo"], correcta: 1, explicacion: "La IA sirve como alternativa. No practicar tienta, pero llegás sin haberte escuchado nunca." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una lista de preguntas de entrevista","Un tipo de CV","Una lista de criterios con puntaje para saber si algo está listo","Un test de personalidad"], correcta: 2, explicacion: "La rúbrica evalúa. La lista de preguntas tienta porque también es una lista, pero es para la entrevista, no para evaluarla." },
    { q: "Si respondiste \"Soy muy responsable\" sin ejemplo, ¿cuánto sacás en \"Historias\"?", opciones: ["0: respuestas generales sin ejemplos","2","1","No se evalúa"], correcta: 0, explicacion: "Sin ejemplo, es 0. 1 tienta porque dijiste algo positivo, pero no demostraste nada." },
    { q: "Tu pretensión fue \"Lo que sea\". ¿Cuánto saca ese criterio?", opciones: ["2","1","No se evalúa","0"], correcta: 3, explicacion: "\"Lo que sea\" es 0. Pensar que muestra flexibilidad tienta, pero te pueden ofrecer muy poco." },
    { q: "Si al final dijiste \"No, todo claro\", ¿cuánto saca \"Cierre\"?", opciones: ["2","0","1","No se evalúa"], correcta: 1, explicacion: "Sin preguntas es 0. Que no molestaste tienta como virtud, pero desperdiciaste el momento." },
    { q: "Sacaste 6 sobre 12. ¿Qué hacés?", opciones: ["Vas igual a la entrevista real sin practicar","Dejás de buscar trabajo","Volvés a los módulos de los criterios que fallaron y practicás","Hacés el segundo simulacro sin cambiar nada"], correcta: 2, explicacion: "Con 6 o menos, hay que repasar. Repetir sin cambiar tienta por rápido, pero vas a sacar lo mismo." },
    { q: "¿Cuándo conviene hacer el segundo simulacro?", opciones: ["Unos días después, practicando lo que falló","Inmediatamente después del primero","Un año después","Nunca"], correcta: 0, explicacion: "Unos días dan tiempo a practicar. Inmediatamente tienta para aprovechar, pero no hubo tiempo de mejorar." },
    { q: "Si mirás el video del simulacro, ¿qué conviene anotar?", opciones: ["Solo si te gustó","Nada, alcanza con mirarlo","Lo que hizo mal el entrevistador","El minuto donde algo salió bien y donde algo falló, con la rúbrica al lado"], correcta: 3, explicacion: "Anotar momentos concretos es más útil. \"Si te gustó\" tienta, pero no te dice qué mejorar." },
    { q: "Tenés una entrevista real mañana. ¿Qué repasás?", opciones: ["Nada, ya practicaste","Tu banco de historias, la investigación de la empresa y tus 3 preguntas","Todo el curso de nuevo","Solo la ropa"], correcta: 1, explicacion: "Repasar tu hoja te deja listo. Todo el curso tienta para estar seguro, pero cansa y no hace falta." },
  ],
},
];
