// Temario del curso "Trabajar a distancia". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js trabajo-remoto y node tools/metodologia.js trabajo-remoto
window.TEMARIO = [
{
  id: "empezar",
  icono: "🏠",
  titulo: "Empezar: qué es trabajar a distancia",
  nivel: "Básico",
  objetivos: [
    "Distinguir teletrabajo en relación de dependencia, trabajo híbrido y trabajo independiente a distancia",
    "Reconocer ventajas y desventajas del trabajo remoto",
    "Evaluar si tu trabajo y tu casa se adaptan al trabajo a distancia",
  ],
  lecciones: [
    { titulo: "Las formas de trabajar a distancia", video: {"id":"NPlZLkfGoBo","t":"¿Qué es freelance? · LearnFree en Español (1:18)"}, html: `
      <p class="idea">Trabajar a distancia es hacer tu trabajo desde un lugar que no es la oficina de la empresa, casi siempre tu casa, usando internet para comunicarte. Hay varias formas.</p>
      <table>
        <tr><th>Forma</th><th>Cómo es</th><th>Ejemplo</th></tr>
        <tr><td>Teletrabajo (en relación de dependencia)</td><td>Sos empleado de una empresa y trabajás desde tu casa</td><td>Atención al cliente por chat para una empresa de servicios</td></tr>
        <tr><td>Híbrido</td><td>Algunos días en la oficina y otros en tu casa</td><td>Administrativa que va martes y jueves</td></tr>
        <tr><td>Independiente o freelance</td><td>Trabajás por tu cuenta para varios clientes y facturás</td><td>Diseño, traducción, carga de datos, clases en línea</td></tr>
      </table>
      <p>El <strong>teletrabajo</strong> en relación de dependencia tiene en Argentina una ley propia, la Ley 27.555, con derechos específicos (los vemos en el módulo de seguridad y derechos).</p>
      <p>Un <strong>freelance</strong> (o trabajador independiente) no es empleado: consigue sus clientes, pone sus precios y factura, por ejemplo como monotributista.</p>
      <p>Por ejemplo, la misma tarea de responder consultas por chat puede ser un empleo con recibo de sueldo o un servicio que facturás a varias empresas: los derechos y las obligaciones cambian mucho.</p>` },
    { titulo: "Ventajas y desventajas", video: {"id":"GbnYBSUTG4k","t":"Pros y contras del teletrabajo · DW Español (1:34)"}, html: `
      <p class="idea">Trabajar desde casa tiene ventajas claras, pero también desafíos que conviene conocer antes. Lo que para una persona es ideal, para otra puede ser difícil.</p>
      <table>
        <tr><th>Ventajas</th><th>Desventajas</th></tr>
        <tr><td>No viajás: ahorrás tiempo y plata</td><td>Te puede costar separar trabajo y casa</td></tr>
        <tr><td>Más flexibilidad para organizarte</td><td>Aislamiento: menos contacto con compañeros</td></tr>
        <tr><td>Podés trabajar para empresas de otras ciudades</td><td>Gastos de luz, internet y equipo en casa</td></tr>
        <tr><td>Menos interrupciones de la oficina</td><td>Otras interrupciones: familia, timbre, tareas de la casa</td></tr>
      </table>
      <p><strong>Las cuentas del viaje:</strong> si viajabas 1 hora y media por día, 5 días por semana, son 7 horas y media por semana que recuperás.</p>
      <pre><code>1,5 h por día × 5 días = 7,5 h por semana
7,5 h × 4 semanas ≈ 30 h por mes</code></pre>
      <p><strong>Lo que más cuesta, según quienes lo hacen:</strong> desconectarse al terminar el día y sostener la motivación sin compañeros cerca. Este curso trabaja los dos.</p>
      <p>Por ejemplo, ganar 30 horas por mes de viaje es mucho, pero si las perdés respondiendo mensajes de trabajo a la noche, el balance cambia.</p>` },
    { titulo: "¿Te sirve el trabajo remoto?", html: `
      <p class="idea">No todos los trabajos ni todas las casas se adaptan al trabajo a distancia. Antes de buscar o aceptar uno, revisá tres cosas: la tarea, tu espacio y tu forma de trabajar.</p>
      <table>
        <tr><th>Revisá</th><th>Preguntas</th></tr>
        <tr><td>La tarea</td><td>¿Se puede hacer con una computadora e internet? ¿Necesita estar físicamente en algún lugar?</td></tr>
        <tr><td>Tu espacio</td><td>¿Tenés un lugar tranquilo? ¿Buena conexión? ¿Computadora propia o te la dan?</td></tr>
        <tr><td>Tu forma de trabajar</td><td>¿Te organizás sin que te controlen? ¿Te molesta trabajar solo muchas horas?</td></tr>
      </table>
      <p><strong>Trabajos que suelen poder hacerse a distancia:</strong> atención al cliente por chat o teléfono, carga de datos, administración, diseño, programación, redacción, traducción, clases particulares, ventas en línea.</p>
      <p><strong>Trabajos que no:</strong> los que requieren estar en un lugar (cocina, construcción, salud presencial, comercio de mostrador), aunque algunas tareas administrativas de esos rubros sí.</p>
      <p><strong>Cuidado con las ofertas:</strong> muchos avisos de "trabajo desde casa" son estafas. Si te piden plata para empezar, no es un trabajo (lo vemos en el módulo de seguridad).</p>
      <p>Por ejemplo, si vivís en un monoambiente con dos chicos chicos, quizás te convenga un trabajo híbrido o con horario en que ellos están en la escuela.</p>` },
  ],
  practica: [
    "Anotá tu trabajo actual o el que buscás y clasificá sus tareas en una tabla: cuáles se podrían hacer a distancia y cuáles no.",
    "Calculá cuántas horas por mes de viaje ahorrarías trabajando desde casa, con tus horarios reales. Anotá la cuenta.",
    "Respondé las preguntas de la tabla (tarea, espacio y forma de trabajar) para tu caso y anotá si el trabajo remoto, el híbrido o el presencial te conviene más.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Teletrabajo", url: "https://www.argentina.gob.ar/trabajo/teletrabajo" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Sos empleada de una empresa y trabajás desde tu casa. ¿Qué forma de trabajo es?", opciones: ["Freelance","Changa","Teletrabajo en relación de dependencia","Monotributo"], correcta: 2, explicacion: "Sos empleada que trabaja a distancia. Freelance tienta porque también es desde casa, pero el freelance no es empleado." },
    { q: "Si vas a la oficina martes y jueves y el resto de los días trabajás en casa, ¿qué modalidad es?", opciones: ["Híbrida","Presencial","Freelance","Remota total"], correcta: 0, explicacion: "Mezcla de oficina y casa. Remota total tienta porque hay días en casa, pero vas a la oficina dos días." },
    { q: "¿Qué es un freelance?", opciones: ["Un empleado que trabaja desde casa","Un trabajo gratis","Un tipo de contrato de la empresa","Un trabajador independiente que consigue clientes, pone precios y factura"], correcta: 3, explicacion: "El freelance no es empleado. \"Empleado desde casa\" tienta, pero eso es teletrabajo en relación de dependencia." },
    { q: "¿Qué ley regula el teletrabajo en relación de dependencia en Argentina?", opciones: ["La Ley 24.240","La Ley 27.555","La Ley de Tránsito","Ninguna"], correcta: 1, explicacion: "La 27.555 es la de teletrabajo. La 24.240 tienta porque se nombra seguido, pero es la de defensa del consumidor." },
    { q: "Si viajás 1 hora y media por día, 5 días, ¿cuántas horas por semana ahorrás trabajando desde casa?", opciones: ["1,5 horas","5 horas","7,5 horas","15 horas"], correcta: 2, explicacion: "1,5 × 5 = 7,5. 15 tienta por duplicar, pero ya contaste ida y vuelta en la hora y media." },
    { q: "¿Cuál es una desventaja común del trabajo remoto?", opciones: ["Costar separar trabajo y casa, y sentirse aislado","Gastar más en colectivo","Tener más interrupciones de la oficina","No poder usar computadora"], correcta: 0, explicacion: "Son los desafíos más mencionados. Gastar en colectivo tienta, pero es justamente lo que se ahorra." },
    { q: "Si ganás 30 horas por mes de viaje, pero respondés mensajes de trabajo todas las noches, ¿qué pasa?", opciones: ["Rendís el doble","Nada, es normal","Te pagan más automáticamente","Perdés la ventaja: el tiempo ganado se va en trabajo fuera de horario"], correcta: 3, explicacion: "Sin límites, la ventaja desaparece. Rendir el doble tienta, pero cansa y no siempre se paga." },
    { q: "Querés un trabajo remoto. ¿Qué tres cosas revisás antes?", opciones: ["El sueldo, el sueldo y el sueldo","La tarea, tu espacio y tu forma de trabajar","Solo si tenés celular","Solo el nombre de la empresa"], correcta: 1, explicacion: "Las tres definen si te va a funcionar. Solo el sueldo tienta, pero sin espacio ni organización se complica." },
    { q: "¿Cuál de estos trabajos suele poder hacerse a distancia?", opciones: ["Cocinero de restaurante","Albañil","Atención al cliente por chat","Cajero de supermercado"], correcta: 2, explicacion: "La atención por chat solo necesita computadora e internet. El cajero tienta porque atiende clientes, pero necesita estar en el local." },
    { q: "Si un aviso de \"trabajo desde casa\" te pide pagar para empezar, ¿qué es?", opciones: ["Una estafa: un trabajo de verdad no te cobra por trabajar","Una inversión normal","Un requisito del teletrabajo","Una oportunidad única"], correcta: 0, explicacion: "Pedir plata es la señal más clara. Que es un requisito tienta, pero ningún empleo real lo pide." },
    { q: "Si vivís en un monoambiente con dos chicos chicos, ¿qué podés considerar?", opciones: ["Que el trabajo remoto es imposible para siempre","Trabajar de noche sin dormir","No trabajar","Un trabajo híbrido o con horario en que ellos están en la escuela"], correcta: 3, explicacion: "Hay opciones intermedias. \"Imposible\" tienta, pero ajustar horario o modalidad puede funcionar." },
    { q: "Si te ofrecen el mismo trabajo como empleado o como freelance, ¿qué cambia?", opciones: ["Nada","Los derechos y las obligaciones: recibo, aportes y facturación","Solo el horario","Solo el nombre"], correcta: 1, explicacion: "Empleado y freelance tienen reglas distintas. \"Nada\" tienta porque la tarea es igual, pero el contrato no." },
  ],
},
{
  id: "espacio",
  icono: "🪑",
  titulo: "Tu espacio de trabajo en casa",
  nivel: "Básico",
  objetivos: [
    "Elegir y preparar un lugar de trabajo con lo mínimo necesario",
    "Revisar la conexión a internet y tener un plan B",
    "Acomodar silla, pantalla y luz para cuidar el cuerpo",
  ],
  lecciones: [
    { titulo: "El lugar", html: `
      <p class="idea">No hace falta una oficina: hace falta un lugar fijo, lo más tranquilo posible, donde puedas dejar tus cosas de trabajo y que tu cabeza asocie con trabajar.</p>
      <table>
        <tr><th>Ideal</th><th>Si no se puede</th></tr>
        <tr><td>Una habitación con puerta</td><td>Un rincón fijo del living, aunque sea chico</td></tr>
        <tr><td>Escritorio propio</td><td>La mesa del comedor, despejada al empezar y al terminar</td></tr>
        <tr><td>Silencio</td><td>Auriculares y horarios acordados con la familia</td></tr>
        <tr><td>Luz natural</td><td>Una lámpara que ilumine de frente o de costado</td></tr>
      </table>
      <p><strong>Evitá la cama y el sillón:</strong> además de ser malos para la espalda, mezclan descanso con trabajo, y después cuesta desconectar.</p>
      <p><strong>Un ritual de inicio y cierre:</strong> si trabajás en la mesa del comedor, armar la computadora al empezar y guardarla al terminar marca el límite entre trabajo y casa.</p>
      <p>Por ejemplo, trabajar siempre en el mismo rincón, con la misma taza y la misma lámpara, hace que te concentres más rápido al sentarte.</p>` },
    { titulo: "Conexión y equipo", html: `
      <p class="idea">Para trabajar a distancia, la conexión a internet es tan importante como la silla. Conocé la tuya y tené un plan B por si se corta.</p>
      <table>
        <tr><th>Revisá</th><th>Cómo</th></tr>
        <tr><td>Velocidad</td><td>Hacé una prueba de velocidad (buscá "test de velocidad" en el navegador) a la hora en que vas a trabajar</td></tr>
        <tr><td>Estabilidad</td><td>Probá una videollamada de media hora y mirá si se corta</td></tr>
        <tr><td>Dónde está el router</td><td>Trabajá cerca, o usá un cable si podés</td></tr>
        <tr><td>Plan B</td><td>Datos del celular para compartir conexión, o un lugar cercano con wifi</td></tr>
      </table>
      <p><strong>Equipo mínimo:</strong> computadora (o notebook), auriculares con micrófono y una cámara (la de la notebook alcanza). Si sos empleado, preguntá qué te da la empresa.</p>
      <p><strong>La velocidad de subida también importa:</strong> en una videollamada, no solo recibís video, también mandás el tuyo. Si se te congela la imagen a vos, puede ser la subida.</p>
      <p><strong>Avisá antes si sabés que vas a tener problemas:</strong> "Mañana hay corte de luz en mi zona de 9 a 12; voy a trabajar desde el celular o recupero a la tarde".</p>
      <p>Por ejemplo, una videollamada importante con la notebook lejos del router puede cortarse; acercarte 5 metros o usar el cable lo resuelve.</p>` },
    { titulo: "Cuidar el cuerpo", video: {"id":"8O_XIWR9MwU","t":"Ajustando el puesto de trabajo en casa · Seguridad y Salud en el Trabajo, UNAL Bogotá (2:15)"}, html: `
      <p class="idea">Pasar muchas horas mal sentado se paga con dolor de espalda, cuello y muñecas. Acomodar silla, pantalla y teclado lleva 10 minutos y se nota todos los días. Esto se llama <strong>ergonomía</strong>.</p>
      <table>
        <tr><th>Parte</th><th>Cómo acomodarla</th></tr>
        <tr><td>Pantalla</td><td>El borde de arriba a la altura de los ojos, a un brazo de distancia</td></tr>
        <tr><td>Silla</td><td>Espalda apoyada, pies en el piso (o en un apoyapiés, como una caja)</td></tr>
        <tr><td>Brazos</td><td>Codos en ángulo recto, muñecas derechas sobre el teclado</td></tr>
        <tr><td>Luz</td><td>Sin reflejos en la pantalla: la ventana de costado, no detrás de la pantalla ni detrás de vos</td></tr>
      </table>
      <p><strong>Con notebook:</strong> la pantalla queda baja. Subila con libros o un soporte y usá un teclado y un mouse aparte, aunque sean baratos.</p>
      <p><strong>Pausas activas:</strong> cada hora, levantate unos minutos, caminá, estirá. Para la vista, cada tanto, mirá algo lejano.</p>
      <p><strong>Si tenés dolor que no se va,</strong> consultá a un médico o a un kinesiólogo. Este curso no reemplaza una consulta profesional.</p>
      <p>Por ejemplo, poner la notebook sobre dos libros y usar un teclado aparte cambia la posición del cuello por completo.</p>` },
  ],
  practica: [
    "Elegí tu lugar de trabajo en casa y anotá qué tiene de la tabla (puerta, escritorio, silencio, luz) y qué vas a resolver con las alternativas.",
    "Hacé una prueba de velocidad a la hora en que trabajarías y anotá la bajada y la subida. Anotá también tu plan B si se corta.",
    "Acomodá pantalla, silla y brazos con la tabla de ergonomía. Sacá una foto antes y después y anotá qué cambiaste.",
  ],
  recursos: [
    { t: "Google Meet: unirse a una reunión", url: "https://support.google.com/meet/answer/9303069?hl=es" },
    { t: "OMS: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" },
  ],
  quiz: [
    { q: "No tenés una habitación libre para trabajar. ¿Qué hacés?", opciones: ["Trabajás desde la cama","Cambiás de lugar cada día","Elegís un rincón fijo, aunque sea chico, y lo usás siempre","No podés trabajar a distancia"], correcta: 2, explicacion: "Un lugar fijo ayuda a concentrarte. La cama tienta por cómoda, pero mezcla descanso y trabajo y daña la espalda." },
    { q: "¿Por qué conviene evitar trabajar en la cama o el sillón?", opciones: ["Son malos para la espalda y mezclan descanso con trabajo","Porque se ensucian","Porque está prohibido","No hay problema"], correcta: 0, explicacion: "Después cuesta desconectar. \"No hay problema\" tienta porque es cómodo, pero se paga en el cuerpo y en el descanso." },
    { q: "Si trabajás en la mesa del comedor, ¿qué ritual ayuda a separar trabajo y casa?", opciones: ["Dejarla siempre abierta","Trabajar con la tele prendida","No tener horario","Armar la computadora al empezar y guardarla al terminar"], correcta: 3, explicacion: "Guardar marca el fin del día. Dejarla abierta tienta por práctico, pero el trabajo te sigue mirando." },
    { q: "Querés saber si tu internet alcanza. ¿Qué hacés?", opciones: ["Preguntarle a un vecino","Una prueba de velocidad a la hora en que vas a trabajar","Suponer que anda","Mirar el router"], correcta: 1, explicacion: "Medir a esa hora muestra lo real. Suponer tienta, pero de noche o en horario pico puede andar peor." },
    { q: "Si en las videollamadas se te congela la imagen a vos, ¿qué puede ser?", opciones: ["La pantalla","El mouse","La velocidad de subida: también mandás tu video","La silla"], correcta: 2, explicacion: "Mandar video usa la subida. La pantalla tienta porque ahí lo ves, pero el problema está en la conexión." },
    { q: "Tenés una videollamada importante y la notebook está lejos del router. ¿Qué hacés?", opciones: ["Te acercás al router o usás un cable","Nada, ya va a andar","Subís el volumen","Apagás la cámara de todos"], correcta: 0, explicacion: "Cerca o con cable la conexión es más estable. \"Ya va a andar\" tienta, pero si se corta perdés la reunión." },
    { q: "Mañana hay corte de luz en tu zona de 9 a 12. ¿Qué hacés?", opciones: ["No decís nada","Avisás a las 9:30","Te tomás el día sin avisar","Avisás hoy y proponés cómo vas a trabajar o recuperar"], correcta: 3, explicacion: "Avisar antes deja reorganizar. Avisar a las 9:30 tienta, pero ya te estaban esperando." },
    { q: "¿Qué es la ergonomía?", opciones: ["Un tipo de silla cara","Acomodar el lugar de trabajo para cuidar el cuerpo","Un programa de computadora","Una enfermedad"], correcta: 1, explicacion: "Es adaptar el puesto al cuerpo. \"Silla cara\" tienta, pero se puede hacer con lo que tenés." },
    { q: "¿A qué altura va la pantalla?", opciones: ["Bien abajo, sobre la mesa","Arriba de la cabeza","El borde de arriba a la altura de los ojos","No importa"], correcta: 2, explicacion: "A la altura de los ojos cuida el cuello. Sobre la mesa tienta porque así viene la notebook, pero obliga a agachar la cabeza." },
    { q: "Si trabajás con notebook todo el día, ¿qué cambio ayuda más?", opciones: ["Subir la pantalla con libros y usar teclado y mouse aparte","Bajar el brillo","Comprar una notebook más cara","Trabajar acostado"], correcta: 0, explicacion: "Así el cuello queda derecho. Una notebook más cara tienta, pero la pantalla sigue baja." },
    { q: "¿Cada cuánto conviene hacer una pausa activa?", opciones: ["Una vez por semana","Nunca, rinde más seguir","Cada 5 minutos","Cada hora, unos minutos para levantarte y estirar"], correcta: 3, explicacion: "Cortes cortos y frecuentes cuidan el cuerpo. \"Rinde más seguir\" tienta, pero el cansancio y el dolor bajan el rendimiento." },
    { q: "Hace semanas te duele la espalda al terminar el día. ¿Qué hacés?", opciones: ["Lo aguantás","Revisás tu puesto y consultás a un médico o kinesiólogo","Tomás analgésicos todos los días sin consultar","Trabajás más rápido para terminar antes"], correcta: 1, explicacion: "El dolor que dura hay que consultarlo. Aguantarlo tienta, pero puede empeorar." },
  ],
},
{
  id: "herramientas",
  icono: "🧰",
  titulo: "Herramientas para trabajar a distancia",
  nivel: "Intermedio",
  objetivos: [
    "Usar una videollamada con cámara, micrófono y pantalla compartida",
    "Usar el chat de trabajo y elegir el canal justo",
    "Compartir archivos con los permisos correctos",
  ],
  lecciones: [
    { titulo: "Videollamadas", video: {"id":"EoLEZ-8rf_A","t":"¿Cómo compartir pantalla en Google Meet? · LearnFree en Español (2:11)"}, html: `
      <p class="idea">Las videollamadas (Google Meet, Microsoft Teams o Zoom) son la sala de reuniones del trabajo remoto. Las tres funcionan parecido: un enlace, cámara, micrófono y pantalla compartida.</p>
      <table>
        <tr><th>Botón</th><th>Para qué</th><th>Consejo</th></tr>
        <tr><td>Micrófono</td><td>Que te escuchen</td><td>Silencialo cuando no hablás, para no meter ruido</td></tr>
        <tr><td>Cámara</td><td>Que te vean</td><td>Prendida en reuniones chicas, salvo que la conexión no dé</td></tr>
        <tr><td>Compartir pantalla</td><td>Mostrar un documento o una planilla</td><td>Compartí solo la ventana, no toda la pantalla</td></tr>
        <tr><td>Levantar la mano</td><td>Pedir la palabra sin interrumpir</td><td>Útil en reuniones grandes</td></tr>
        <tr><td>Chat de la reunión</td><td>Pasar un enlace o un dato</td><td>Lo que se escribe ahí lo ven todos</td></tr>
      </table>
      <p><strong>Antes de entrar:</strong> probá micrófono y cámara, cerrá las pestañas que no uses y silenciá las notificaciones.</p>
      <p><strong>Fondo:</strong> si no tenés un fondo ordenado, la mayoría de las apps permite difuminarlo.</p>
      <p>Por ejemplo, compartir toda la pantalla puede mostrar un mensaje privado que llega en medio de la reunión; compartir solo la ventana del documento lo evita.</p>` },
    { titulo: "Chat de trabajo y canales", html: `
      <p class="idea">En el trabajo remoto, casi toda la comunicación es escrita. Las empresas usan un <strong>chat de trabajo</strong> (como Teams, Slack o Google Chat) con canales por tema, además del mail y las videollamadas.</p>
      <table>
        <tr><th>Canal</th><th>Para qué</th></tr>
        <tr><td>Mensaje directo</td><td>Algo para una sola persona</td></tr>
        <tr><td>Canal del equipo</td><td>Algo que tiene que saber todo el equipo</td></tr>
        <tr><td>Mail</td><td>Lo formal o con gente de afuera de la empresa</td></tr>
        <tr><td>Videollamada</td><td>Temas complejos, decisiones, problemas delicados</td></tr>
      </table>
      <p><strong>Tu estado:</strong> la mayoría de los chats te deja marcar si estás disponible, ocupado o ausente. Mantenelo actualizado: así tu equipo sabe cuándo esperar respuesta.</p>
      <p><strong>Mensajes completos:</strong> igual que en WhatsApp de trabajo, mandá un mensaje con todo ("Hola, Marcos. ¿Me pasás el informe de ventas de marzo antes de las 15?") en vez de "Hola" y esperar.</p>
      <p><strong>No todo es urgente:</strong> si no hace falta respuesta inmediata, decilo: "Sin apuro, cuando puedas hoy".</p>
      <p>Por ejemplo, una duda sobre un cliente que necesita tres mensajes de ida y vuelta se resuelve en 5 minutos de videollamada.</p>` },
    { titulo: "Compartir archivos", html: `
      <p class="idea">A distancia no hay escritorio donde dejar un papel: todo se comparte en la nube (Google Drive, OneDrive). Saber dar los permisos correctos evita líos y fugas de información.</p>
      <table>
        <tr><th>Permiso</th><th>Qué puede hacer</th><th>Cuándo</th></tr>
        <tr><td>Lector</td><td>Solo ver</td><td>Para informar</td></tr>
        <tr><td>Comentador</td><td>Ver y dejar comentarios</td><td>Para pedir revisión</td></tr>
        <tr><td>Editor</td><td>Cambiar todo</td><td>Para quien trabaja en el archivo con vos</td></tr>
      </table>
      <p><strong>Compartí con personas, no con "cualquiera con el enlace",</strong> si el archivo tiene datos de clientes o de la empresa. Un enlace abierto se puede reenviar a cualquiera.</p>
      <p><strong>Una sola versión:</strong> trabajar todos sobre el mismo archivo en la nube evita tener "informe_final_v3_ahora_si.docx" dando vueltas por mail.</p>
      <p><strong>Carpetas compartidas ordenadas:</strong> usá los nombres de archivo con fecha del curso de administración (AAAA-MM-DD_Tipo_Detalle).</p>
      <p>Por ejemplo, si compartís la planilla de clientes con "cualquiera con el enlace" y alguien lo reenvía, los datos de los clientes quedan expuestos.</p>` },
  ],
  practica: [
    "Hacé una videollamada de prueba con alguien y practicá silenciar el micrófono, compartir solo una ventana y difuminar el fondo. Anotá qué te costó.",
    "Escribí 3 mensajes de trabajo completos para el chat (uno directo, uno para el canal del equipo y uno sin urgencia). Anotalos.",
    "Compartí un archivo de prueba en Drive u OneDrive con una persona, con permiso de comentador. Anotá qué permiso usaste y si pudo comentar sin editar.",
  ],
  recursos: [
    { t: "Google Meet: unirse a una reunión", url: "https://support.google.com/meet/answer/9303069?hl=es" },
    { t: "Microsoft Teams: ayuda y aprendizaje", url: "https://support.microsoft.com/es-es/teams" },
    { t: "Google Drive: compartir y gestionar el acceso", url: "https://support.google.com/drive/answer/2494822?hl=es" },
  ],
  quiz: [
    { q: "Estás en una videollamada y no te toca hablar. ¿Qué hacés con el micrófono?", opciones: ["Lo dejás abierto por si acaso","Lo desenchufás","Lo silenciás para no meter ruido","Hablás por lo bajo"], correcta: 2, explicacion: "Silenciado no se escucha tu casa. Abierto tienta para responder rápido, pero se cuelan ruidos." },
    { q: "Tenés que mostrar una planilla en la reunión. ¿Qué compartís?", opciones: ["Solo la ventana de la planilla","Toda la pantalla","Una foto de la pantalla","Nada, la describís"], correcta: 0, explicacion: "Solo la ventana evita mostrar notificaciones. Toda la pantalla tienta por simple, pero muestra todo lo demás." },
    { q: "En una reunión de 30 personas querés hablar. ¿Qué usás?", opciones: ["Interrumpir","Escribir en mayúsculas en el chat","Esperar que te pregunten","Levantar la mano"], correcta: 3, explicacion: "Levantar la mano pide la palabra sin cortar. Interrumpir tienta para no perder el momento, pero con tanta gente se pisan." },
    { q: "¿Qué hacés antes de entrar a una videollamada?", opciones: ["Nada, entrás y ves","Probás micrófono y cámara, cerrás pestañas y silenciás notificaciones","Te ponés a responder mails","Prendés la tele"], correcta: 1, explicacion: "Probar antes evita perder minutos. Entrar y ver tienta, pero los problemas aparecen delante de todos." },
    { q: "Tu fondo está desordenado. ¿Qué hacés?", opciones: ["Apagás la cámara siempre","Te disculpás en cada reunión","Lo difuminás desde la aplicación","Nada"], correcta: 2, explicacion: "Difuminar resuelve sin apagar la cámara. Apagarla siempre tienta, pero en reuniones chicas conviene que te vean." },
    { q: "¿Qué es un chat de trabajo?", opciones: ["Una herramienta de mensajes de la empresa, con canales por tema, como Teams o Slack","El WhatsApp personal","El mail","Un foro público"], correcta: 0, explicacion: "Es el chat interno del trabajo. WhatsApp personal tienta porque es chat, pero mezcla lo personal." },
    { q: "Tenés algo que tiene que saber todo el equipo. ¿Dónde lo escribís?", opciones: ["En un mensaje directo a cada uno","En tu estado","En un mail a tu familia","En el canal del equipo"], correcta: 3, explicacion: "El canal llega a todos a la vez. Mensajes directos tientan, pero cada uno recibe algo distinto." },
    { q: "¿Para qué sirve mantener actualizado tu estado en el chat?", opciones: ["Para parecer ocupado","Para que el equipo sepa cuándo esperar tu respuesta","No sirve","Para que te controlen"], correcta: 1, explicacion: "El estado ordena las expectativas. Parecer ocupado tienta, pero si siempre dice ocupado nadie te escribe." },
    { q: "Una duda necesita tres mensajes de ida y vuelta. ¿Qué conviene?", opciones: ["Diez mensajes más","Un mail largo","Una videollamada corta","Dejarla sin resolver"], correcta: 2, explicacion: "Hablando se resuelve rápido. Más mensajes tientan porque ya empezaste por chat, pero se alarga." },
    { q: "Querés que un compañero revise tu documento sin cambiarlo. ¿Qué permiso le das?", opciones: ["Comentador","Editor","Lector","Propietario"], correcta: 0, explicacion: "Comentador deja notas sin editar. Editor tienta para que corrija directo, pero puede cambiar sin que veas." },
    { q: "La planilla de clientes, ¿la compartís con \"cualquiera con el enlace\"?", opciones: ["Sí, es más fácil","Sí, si es interna","Sí, con permiso de editor","No: se comparte con personas, porque el enlace se puede reenviar"], correcta: 3, explicacion: "Un enlace abierto expone los datos. Que es más fácil tienta, pero si se reenvía, cualquiera los ve." },
    { q: "Tu equipo se manda \"informe_final_v3\" por mail. ¿Qué conviene?", opciones: ["Mandar la v4","Trabajar todos sobre un mismo archivo en la nube","Imprimirlo","Que cada uno tenga su copia"], correcta: 1, explicacion: "Una sola versión evita confusiones. Mandar la v4 tienta, pero el problema sigue." },
  ],
},
{
  id: "comunicar",
  icono: "📡",
  titulo: "Comunicarse a distancia",
  nivel: "Intermedio",
  objetivos: [
    "Avisar avances y bloqueos sin que te lo pidan",
    "Distinguir comunicación sincrónica y asincrónica y usar cada una",
    "Participar bien en reuniones a distancia, también con personas de otros horarios",
  ],
  lecciones: [
    { titulo: "Hacerse visible sin molestar", html: `
      <p class="idea">En la oficina, tu jefa te ve trabajar. A distancia, no. Por eso conviene avisar avances, terminar tareas con un mensaje y pedir ayuda apenas te trabás. Es <strong>comunicar de más</strong> sin llenar de mensajes.</p>
      <table>
        <tr><th>Momento</th><th>Mensaje</th></tr>
        <tr><td>Al empezar el día</td><td>"Buen día. Hoy voy con: 1) informe de ventas, 2) respuestas a clientes."</td></tr>
        <tr><td>Al terminar algo</td><td>"Listo el informe de ventas, está en la carpeta compartida."</td></tr>
        <tr><td>Si te trabás</td><td>"Me trabé con la fórmula de comisiones. ¿Alguien tiene 10 minutos?"</td></tr>
        <tr><td>Al cerrar el día</td><td>"Cierro por hoy. Queda pendiente responder a 2 clientes, mañana a primera hora."</td></tr>
      </table>
      <p><strong>Pedir ayuda temprano:</strong> a distancia, nadie ve que estás trabado. Si pasan 30 minutos sin avanzar, preguntá.</p>
      <p><strong>Sin exagerar:</strong> no hace falta avisar cada 10 minutos. Inicio, cierre, terminados y bloqueos alcanzan.</p>
      <p>Por ejemplo, un mensaje de cierre con lo pendiente hace que si mañana faltás, alguien pueda seguir con tu trabajo.</p>` },
    { titulo: "Sincrónico y asincrónico", html: `
      <p class="idea">La comunicación <strong>sincrónica</strong> es en el mismo momento (una llamada, una reunión). La <strong>asincrónica</strong> es la que cada uno responde cuando puede (un mail, un mensaje en un canal). El trabajo remoto funciona mejor con mucho de lo segundo.</p>
      <table>
        <tr><th>Sincrónica</th><th>Asincrónica</th></tr>
        <tr><td>Reunión, llamada</td><td>Mail, chat, documento compartido con comentarios</td></tr>
        <tr><td>Respuesta inmediata</td><td>Respuesta en horas</td></tr>
        <tr><td>Para decidir rápido o temas delicados</td><td>Para informar, pedir revisión, dejar registro</td></tr>
        <tr><td>Interrumpe lo que estás haciendo</td><td>Respeta el foco de cada uno</td></tr>
      </table>
      <p><strong>Antes de convocar una reunión,</strong> preguntate si alcanza con un mensaje o un documento con comentarios.</p>
      <p><strong>Escribir bien es clave:</strong> en asincrónico, el mensaje tiene que entenderse sin que estés para explicarlo. Los cursos "Escribir claro" y "Mails y mensajes de trabajo" de este sitio ayudan con esto.</p>
      <p>Por ejemplo, para pedir comentarios sobre un presupuesto, compartirlo con permiso de comentador y un plazo ("comentarios hasta el jueves") ahorra una reunión de una hora.</p>` },
    { titulo: "Reuniones a distancia y otros horarios", html: `
      <p class="idea">Una reunión a distancia cansa más que una presencial. Por eso tienen que ser cortas, con orden del día y con un resumen escrito después.</p>
      <table>
        <tr><th>Buena práctica</th><th>Por qué</th></tr>
        <tr><td>Orden del día en la invitación</td><td>Todos llegan sabiendo para qué es</td></tr>
        <tr><td>30 minutos en vez de 60</td><td>Mirar una pantalla cansa más</td></tr>
        <tr><td>Cámara prendida en reuniones chicas</td><td>Se entienden mejor las reacciones</td></tr>
        <tr><td>Resumen escrito con tareas</td><td>Lo que se dijo queda registrado</td></tr>
      </table>
      <p><strong>Personas en otros países:</strong> si trabajás con gente de otro lugar, tené en cuenta el <strong>huso horario</strong> (la diferencia de hora). Al proponer una reunión, aclarala: "Martes 10 h de Argentina (14 h de España)".</p>
      <pre><code>Argentina      10:00
Ciudad de México 07:00  (3 horas menos)
España         14:00  (en general 4 o 5 horas más, según la época del año)</code></pre>
      <p><strong>Usá el calendario:</strong> Google Calendar y Outlook muestran la hora de cada invitado según su zona; revisalo antes de enviar.</p>
      <p>Por ejemplo, proponer "una reunión a las 9" a alguien de México sin aclarar puede hacer que se conecte a las 6 de la mañana o 3 horas tarde.</p>` },
  ],
  practica: [
    "Durante 3 días, mandá un mensaje de inicio y uno de cierre de tu jornada (de trabajo o de estudio) con el modelo de la lección. Anotá si alguien respondió o usó la información.",
    "Anotá 5 comunicaciones de tu semana y clasificá cada una en sincrónica o asincrónica. Anotá cuál podrías haber pasado a asincrónica.",
    "Proponé una reunión imaginaria con alguien de otro país aclarando las dos horas. Anotá la diferencia horaria que calculaste y cómo la comprobaste.",
  ],
  recursos: [
    { t: "Google Meet: unirse a una reunión", url: "https://support.google.com/meet/answer/9303069?hl=es" },
    { t: "Microsoft Teams: ayuda y aprendizaje", url: "https://support.microsoft.com/es-es/teams" },
  ],
  quiz: [
    { q: "Trabajás a distancia y tu jefa no te ve. ¿Qué conviene?", opciones: ["No decir nada hasta que pregunte","Mandar un mensaje cada 10 minutos","Avisar al empezar, al terminar tareas, si te trabás y al cerrar el día","Prender la cámara todo el día"], correcta: 2, explicacion: "Avisos en momentos clave te hacen visible. Cada 10 minutos tienta para mostrar que trabajás, pero llena de mensajes." },
    { q: "Hace 30 minutos que estás trabado con una fórmula. ¿Qué hacés?", opciones: ["Preguntás a alguien del equipo","Seguís solo todo el día","Lo dejás sin avisar","Esperás a la reunión de la semana"], correcta: 0, explicacion: "A distancia nadie ve que estás trabado. Seguir solo tienta para no molestar, pero perdés horas." },
    { q: "¿Para qué sirve el mensaje de cierre del día con lo pendiente?", opciones: ["Para que te paguen horas extra","Para nada","Para despedirte","Para que, si mañana faltás, alguien pueda seguir"], correcta: 3, explicacion: "Deja el trabajo ordenado para otros. Despedirte tienta como motivo, pero lo útil es lo pendiente." },
    { q: "¿Qué es la comunicación sincrónica?", opciones: ["La que se responde cuando cada uno puede","La que ocurre en el mismo momento, como una llamada o una reunión","La que es por mail","La que es en persona solamente"], correcta: 1, explicacion: "Sincrónica es al mismo tiempo. El mail tienta, pero es asincrónico." },
    { q: "Si querés informar algo y dejar registro sin interrumpir a nadie, ¿qué usás?", opciones: ["Una llamada a cada uno","Una reunión de una hora","Comunicación asincrónica: un mensaje en el canal o un mail","Un audio largo"], correcta: 2, explicacion: "Asincrónico respeta el foco y deja registro. La llamada tienta por rápida, pero interrumpe a todos." },
    { q: "Si vas a convocar una reunión, ¿qué te preguntás primero?", opciones: ["Si alcanza con un mensaje o un documento con comentarios","Cuánta gente invitar","Qué fondo usar","Si dura dos horas"], correcta: 0, explicacion: "Muchas reuniones podrían ser un mensaje. Cuánta gente tienta como primera pregunta, pero quizás no hace falta reunirse." },
    { q: "Querés comentarios sobre un presupuesto. ¿Qué conviene?", opciones: ["Una reunión de una hora","Mandarlo sin plazo","Imprimirlo y repartirlo","Compartirlo con permiso de comentador y un plazo"], correcta: 3, explicacion: "Comentarios con plazo ahorran una reunión. La reunión tienta para discutirlo juntos, pero lleva más tiempo de todos." },
    { q: "¿Por qué conviene que las reuniones a distancia sean más cortas?", opciones: ["Porque internet es caro","Porque mirar una pantalla cansa más que una reunión presencial","Porque lo pide la ley","No conviene"], correcta: 1, explicacion: "El cansancio frente a la pantalla es mayor. \"No conviene\" tienta para tratar todo, pero baja la atención." },
    { q: "Si terminó la reunión, ¿qué mandás?", opciones: ["Nada, todos estuvieron","La grabación de una hora","Un resumen escrito con las tareas","Un audio"], correcta: 2, explicacion: "El resumen deja registro claro. La grabación tienta por completa, pero nadie la mira entera." },
    { q: "¿Qué es el huso horario?", opciones: ["La diferencia de hora entre lugares del mundo","El horario de trabajo","Una herramienta de videollamadas","El tiempo de una reunión"], correcta: 0, explicacion: "Es la diferencia horaria. Horario de trabajo tienta por la palabra, pero no es eso." },
    { q: "Si proponés una reunión a alguien de España, ¿cómo la escribís?", opciones: ["\"Martes a las 10\" sin aclarar","Solo la hora de España","Sin hora, que elija","Con las dos horas: \"Martes 10 h de Argentina (14 h de España)\""], correcta: 3, explicacion: "Las dos horas evitan errores. \"A las 10\" tienta por corto, pero no se sabe de qué país." },
    { q: "Querés comprobar la hora de una reunión con personas de otros países. ¿Qué usás?", opciones: ["Tu memoria","El calendario, que muestra la hora de cada invitado según su zona","Le preguntás a la IA sin verificar","Adivinás"], correcta: 1, explicacion: "El calendario calcula la diferencia. La memoria tienta, pero algunos países cambian la hora según la época del año." },
  ],
},
{
  id: "rutina",
  icono: "⏰",
  titulo: "Rutina, límites y desconexión",
  nivel: "Intermedio",
  objetivos: [
    "Armar un horario con inicio, pausas y cierre claros",
    "Acordar límites con la familia o con quienes viven con vos",
    "Desconectarte al terminar y cuidar el aislamiento",
  ],
  lecciones: [
    { titulo: "Un horario con principio y fin", html: `
      <p class="idea">En casa, el trabajo se puede estirar hasta la noche sin que te des cuenta. Un horario fijo, con inicio, pausas y cierre, te protege a vos y le da previsibilidad al equipo.</p>
      <pre><code>08:45  Café y revisar la lista del día
09:00  Inicio: mensaje "Buen día" y tareas importantes
11:00  Pausa de 10 minutos (moverse)
13:00  Almuerzo lejos de la computadora
14:00  Reuniones y mensajes
17:00  Cierre: mensaje con pendientes, guardar la computadora</code></pre>
      <p><strong>Rituales de inicio y cierre:</strong> como ya no viajás, inventá algo que marque el principio y el fin. Una caminata corta, cambiarte de ropa, guardar la computadora.</p>
      <p><strong>Vestite para trabajar:</strong> no hace falta traje, pero sí cambiarte el pijama. Ayuda a la cabeza a entrar en "modo trabajo".</p>
      <p><strong>Las mismas técnicas de siempre sirven:</strong> lista de tareas, 3 tareas importantes por día, bloques de foco. El curso "Organizar el tiempo y las tareas" de este sitio las explica.</p>
      <p>Por ejemplo, una caminata de 10 minutos alrededor de la manzana al terminar funciona como el viaje de vuelta: te despega del trabajo.</p>` },
    { titulo: "Límites con la casa", html: `
      <p class="idea">Si vivís con otras personas, trabajar en casa necesita acuerdos. Que estés en casa no significa que estés disponible para todo.</p>
      <table>
        <tr><th>Acuerdo</th><th>Ejemplo</th></tr>
        <tr><td>Horario de trabajo visible</td><td>Un papel en la heladera: "Mamá trabaja de 9 a 17"</td></tr>
        <tr><td>Señal de "no molestar"</td><td>Puerta cerrada o auriculares puestos = reunión</td></tr>
        <tr><td>Tareas de la casa fuera de horario</td><td>La ropa se cuelga en la pausa del almuerzo, no a cada rato</td></tr>
        <tr><td>Reuniones avisadas</td><td>"A las 11 tengo reunión, ¿me cubrís con los chicos?"</td></tr>
      </table>
      <p><strong>Con chicos chicos:</strong> es muy difícil trabajar y cuidar a la vez. Conversá con tu empleador horarios compatibles; en Argentina, la Ley de Teletrabajo contempla a quienes tienen tareas de cuidado (lo vemos en el próximo módulo).</p>
      <p><strong>Las interrupciones de la casa también cortan el foco:</strong> el timbre, el delivery, "¿dónde está…?". Agrupalas en las pausas cuando se pueda.</p>
      <p>Por ejemplo, la señal de los auriculares puestos le dice a toda la familia que estás en una reunión, sin tener que explicarlo cada vez.</p>` },
    { titulo: "Desconectarte y no aislarte", html: `
      <p class="idea">Los dos riesgos más grandes del trabajo remoto son no cortar nunca y quedarte aislado. Los dos se manejan con hábitos simples.</p>
      <table>
        <tr><th>Para desconectarte</th><th>Para no aislarte</th></tr>
        <tr><td>Silenciar las notificaciones del trabajo al cerrar</td><td>Tener charlas informales con compañeros (un café virtual)</td></tr>
        <tr><td>No tener el mail del trabajo en el celular personal, o pausarlo de noche</td><td>Salir de casa al menos una vez por día</td></tr>
        <tr><td>No responder fuera de horario salvo emergencias acordadas</td><td>Ir a la oficina si es híbrido, o a un espacio de trabajo compartido</td></tr>
        <tr><td>Fines de semana sin trabajo</td><td>Mantener actividades con otras personas</td></tr>
      </table>
      <p><strong>Moverse:</strong> sin el viaje, es fácil pasar el día sentado. La OMS recomienda a los adultos al menos 150 minutos de actividad moderada por semana.</p>
      <p><strong>Señales de alerta:</strong> no poder dejar de pensar en el trabajo, dormir mal, sentirte solo o desganado por semanas. Hablalo con alguien de confianza y, si sigue, consultá con un profesional de salud. Este curso no reemplaza esa consulta.</p>
      <p>Por ejemplo, pausar las notificaciones del chat del trabajo a las 18 hace que el mensaje de las 22 lo veas a la mañana, con la cabeza descansada.</p>` },
  ],
  practica: [
    "Armá tu horario de un día de trabajo remoto con inicio, pausas, almuerzo y cierre. Anotá tu ritual de inicio y de cierre.",
    "Acordá con las personas con las que vivís 3 reglas de la tabla de límites. Anotá cuáles acordaron y cómo funcionaron en una semana.",
    "Durante una semana, silenciá las notificaciones del trabajo o del estudio al terminar el día. Anotá cuántas noches lo cumpliste y cómo dormiste.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Teletrabajo", url: "https://www.argentina.gob.ar/trabajo/teletrabajo" },
    { t: "OMS: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" },
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
  ],
  quiz: [
    { q: "Si trabajás en casa y terminás muchas noches a las 22 sin darte cuenta, ¿qué te falta?", opciones: ["Trabajar más rápido","Una computadora mejor","Un horario con cierre claro y un ritual para terminar","Nada, es normal en remoto"], correcta: 2, explicacion: "Sin cierre, el trabajo se estira. \"Es normal\" tienta, pero es justamente el riesgo a evitar." },
    { q: "Si como no viajás te cuesta arrancar y cortar, ¿qué podés hacer para marcar el inicio y el fin del día?", opciones: ["Un ritual: una caminata corta, cambiarte de ropa o guardar la computadora","Nada, no hace falta","Trabajar en pijama","Dejar la computadora prendida siempre"], correcta: 0, explicacion: "El ritual reemplaza al viaje. \"No hace falta\" tienta, pero sin marca el día se mezcla." },
    { q: "Si trabajás desde casa, ¿conviene hacerlo en pijama?", opciones: ["Sí, es la ventaja del remoto","Solo si no hay cámara","Da igual siempre","Mejor cambiarte: ayuda a la cabeza a entrar en modo trabajo"], correcta: 3, explicacion: "Cambiarte es una señal para vos. Que es la ventaja tienta, pero muchas personas rinden menos así." },
    { q: "Si tenés un día lleno de trabajo remoto, ¿dónde conviene almorzar?", opciones: ["Frente a la computadora respondiendo mails","Lejos de la computadora","No almorzar","En la reunión"], correcta: 1, explicacion: "Cortar de verdad descansa. Almorzar respondiendo tienta para ganar tiempo, pero llegás cansado a la tarde." },
    { q: "Tu familia te interrumpe todo el tiempo porque \"estás en casa\". ¿Qué hacés?", opciones: ["Te enojás cada vez","Trabajás de noche cuando duermen","Acuerdan un horario visible y una señal de \"no molestar\"","No decís nada"], correcta: 2, explicacion: "Los acuerdos claros evitan peleas. Trabajar de noche tienta para evitar el conflicto, pero te quita descanso." },
    { q: "Tenés una reunión a las 11 y estás con los chicos. ¿Qué hacés?", opciones: ["Avisás antes y pedís que alguien te cubra","Entrás a la reunión con los chicos gritando","No vas","Los dejás solos"], correcta: 0, explicacion: "Avisar y organizarte resuelve. Faltar tienta, pero queda mal si no avisás." },
    { q: "¿Qué es una señal de \"no molestar\" en casa?", opciones: ["Un cartel en la puerta de calle","Una app del celular","Un grito","Algo visible, como la puerta cerrada o los auriculares puestos, que indica que estás en reunión"], correcta: 3, explicacion: "Una señal acordada evita explicar cada vez. Una app tienta, pero la familia no la ve." },
    { q: "¿Cuáles son los dos riesgos más grandes del trabajo remoto?", opciones: ["Gastar en nafta y en comida","No cortar nunca y quedarte aislado","Llegar tarde y vestirse mal","Tener mucho tiempo libre"], correcta: 1, explicacion: "Desconexión y aislamiento son los más citados. Gastos tientan, pero en remoto se ahorran." },
    { q: "Te llega un mensaje de trabajo a las 22. ¿Qué conviene si no es una emergencia acordada?", opciones: ["Responder enseguida","Responder y seguir trabajando","Verlo a la mañana, con la cabeza descansada","Enojarte con quien lo mandó"], correcta: 2, explicacion: "Desconectarte es necesario. Responder enseguida tienta para quedar bien, pero se vuelve costumbre." },
    { q: "Si hace semanas que trabajás solo en casa, ¿qué te ayuda a no aislarte?", opciones: ["Charlas informales con compañeros, salir de casa y actividades con otras personas","Trabajar más horas","Apagar la cámara siempre","No hablar con nadie para concentrarte"], correcta: 0, explicacion: "El contacto humano se cuida a propósito. Trabajar más tienta, pero aumenta el aislamiento." },
    { q: "¿Cuánta actividad física recomienda la OMS a los adultos?", opciones: ["10 minutos por mes","3 horas por día","Ninguna si trabajás sentado","Al menos 150 minutos de actividad moderada por semana"], correcta: 3, explicacion: "150 minutos por semana. \"Ninguna si trabajás sentado\" tienta, pero justamente sentado hace más falta moverse." },
    { q: "Hace semanas dormís mal, no dejás de pensar en el trabajo y te sentís solo. ¿Qué hacés?", opciones: ["Trabajás más para distraerte","Lo hablás con alguien de confianza y, si sigue, consultás con un profesional de salud","Lo aguantás","Tomás más café"], correcta: 1, explicacion: "Son señales de alerta. Trabajar más tienta para no pensar, pero suele empeorarlo." },
  ],
},
{
  id: "seguridad",
  icono: "🔐",
  titulo: "Seguridad, derechos y trabajo independiente",
  nivel: "Intermedio",
  objetivos: [
    "Proteger las cuentas y los datos de la empresa desde casa",
    "Conocer los derechos básicos del teletrabajo en Argentina",
    "Entender lo básico de trabajar como independiente a distancia",
  ],
  lecciones: [
    { titulo: "Seguridad desde casa", html: `
      <p class="idea">En la oficina, la empresa cuida la red y las computadoras. En tu casa, parte de esa seguridad depende de vos. Unos pocos hábitos protegen tus cuentas y los datos de la empresa.</p>
      <table>
        <tr><th>Hábito</th><th>Por qué</th></tr>
        <tr><td>Verificación en dos pasos en el mail y el chat del trabajo</td><td>Aunque roben tu contraseña, no pueden entrar</td></tr>
        <tr><td>Contraseña fuerte y distinta en cada cuenta</td><td>Si se filtra una, no caen todas</td></tr>
        <tr><td>Wifi de tu casa con contraseña; evitar redes públicas</td><td>En un bar, otros pueden espiar la conexión</td></tr>
        <tr><td>Bloquear la computadora al levantarte (Windows + L)</td><td>Nadie lee ni toca lo que tenés abierto</td></tr>
        <tr><td>No mezclar: archivos del trabajo en las carpetas del trabajo</td><td>Evita que se pierdan o se compartan sin querer</td></tr>
        <tr><td>Desconfiar de mails urgentes que piden claves</td><td>Es la forma más común de robar cuentas (phishing)</td></tr>
      </table>
      <p><strong>Computadora compartida:</strong> si la usa otra persona de la familia, creá un usuario aparte para el trabajo.</p>
      <p><strong>Si algo pasa</strong> (te roban la notebook, hiciste clic en un enlace raro), avisá enseguida a tu empresa: cuanto antes, menos daño. El curso de seguridad digital de este sitio profundiza esto.</p>
      <p>Por ejemplo, un mail "del jefe" que pide urgente la clave del sistema porque "está en una reunión" es un engaño típico: confirmalo por otro canal antes de hacer nada.</p>` },
    { titulo: "Tus derechos en el teletrabajo", video: {"id":"CpGsTTyeBLI","t":"Ley 27.555 de Teletrabajo · Senado Argentina (0:40)"}, html: `
      <p class="idea">En Argentina, si sos empleado y teletrabajás, la <strong>Ley 27.555</strong> te da los mismos derechos que a quien trabaja en la oficina, más algunos propios del trabajo a distancia.</p>
      <table>
        <tr><th>Derecho</th><th>Qué significa</th></tr>
        <tr><td>Desconexión digital</td><td>No tenés que responder fuera de tu jornada, y no te pueden sancionar por eso</td></tr>
        <tr><td>Tareas de cuidado</td><td>Si cuidás a menores, a personas con discapacidad o a adultos mayores, podés pedir horarios compatibles o interrumpir la jornada</td></tr>
        <tr><td>Voluntariedad</td><td>Pasar de presencial a teletrabajo tiene que ser voluntario y por escrito</td></tr>
        <tr><td>Reversibilidad</td><td>Si empezaste presencial, podés pedir volver a la oficina (con algunas condiciones)</td></tr>
        <tr><td>Elementos de trabajo</td><td>La empresa tiene que darte el equipo y las herramientas, y hacerse cargo de su mantenimiento</td></tr>
        <tr><td>Compensación de gastos</td><td>Te tienen que compensar gastos como la conexión y los servicios</td></tr>
        <tr><td>Intimidad</td><td>Los controles de la empresa tienen que respetar tu privacidad</td></tr>
      </table>
      <p><strong>Las empresas que usan teletrabajo tienen que registrarlo</strong> ante el Ministerio de Trabajo.</p>
      <p>Esta lección resume la ley para entenderla. Las leyes laborales pueden cambiar: verificá si hubo modificaciones recientes con tu sindicato, un abogado laboralista o el Ministerio de Trabajo. No reemplaza un asesoramiento legal.</p>
      <p>Por ejemplo, si tu jefe te escribe a las 23 y no respondés hasta las 9 del día siguiente, estás ejerciendo tu derecho a la desconexión.</p>` },
    { titulo: "Trabajar como independiente", html: `
      <p class="idea">Si trabajás a distancia como <strong>independiente</strong> (freelance), no tenés jefe ni recibo de sueldo: conseguís clientes, ponés precios, facturás y te ocupás de tus aportes.</p>
      <table>
        <tr><th>Tema</th><th>Qué tener en cuenta</th></tr>
        <tr><td>Inscribirte</td><td>Muchas personas empiezan como monotributistas en ARCA</td></tr>
        <tr><td>Precios</td><td>Calculá cuánto necesitás por hora, contando que no todas las horas se cobran</td></tr>
        <tr><td>Acuerdos por escrito</td><td>Qué entregás, para cuándo, cuánto cobrás y cuándo pagan</td></tr>
        <tr><td>Clientes del exterior</td><td>Cobrar desde otro país tiene reglas propias: consultá con un contador</td></tr>
        <tr><td>Sin vacaciones pagas ni aguinaldo</td><td>Tenés que prever ahorros para esos meses</td></tr>
      </table>
      <pre><code>Calcular un precio por hora (ejemplo):
Querés ganar $ 900.000 por mes.
Trabajás 120 horas, pero cobrás solo 90 (el resto: buscar clientes,
administración, aprender).
900.000 ÷ 90 = $ 10.000 por hora cobrada</code></pre>
      <p><strong>Estafas para independientes:</strong> clientes que piden un trabajo de prueba enorme gratis, que no pagan o que te piden plata para "habilitarte" en una plataforma. Pedí una seña en trabajos grandes.</p>
      <p>Esta lección orienta; las decisiones de impuestos y la inscripción conviene hablarlas con un contador.</p>
      <p>Por ejemplo, si dividís por 120 horas en vez de 90, tu precio queda en $ 7.500 y terminás ganando menos de lo que necesitás.</p>` },
  ],
  practica: [
    "Activá la verificación en dos pasos en tu mail y bloqueá la computadora cada vez que te levantes durante un día. Anotá cuántas veces te acordaste.",
    "Anotá los 7 derechos de la tabla del teletrabajo y, para cada uno, una situación concreta en la que lo usarías.",
    "Calculá tu precio por hora como independiente con el modelo de la lección: cuánto querés ganar, horas totales y horas cobradas. Anotá la cuenta.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Teletrabajo", url: "https://www.argentina.gob.ar/trabajo/teletrabajo" },
    { t: "Google: activar la verificación en dos pasos", url: "https://support.google.com/accounts/answer/185839?hl=es" },
    { t: "ARCA: monotributo", url: "https://www.arca.gob.ar/monotributo/" },
  ],
  quiz: [
    { q: "Trabajás desde casa. ¿Qué activás en el mail y el chat del trabajo?", opciones: ["El modo oscuro","Las notificaciones de todo","La verificación en dos pasos","Nada, lo cuida la empresa"], correcta: 2, explicacion: "Protege aunque roben la contraseña. \"Lo cuida la empresa\" tienta, pero en tu casa parte depende de vos." },
    { q: "Querés trabajar desde un bar con wifi abierto. ¿Qué pensás?", opciones: ["Que conviene evitarlo: en una red pública pueden espiar la conexión","Que es igual que en casa","Que es más seguro","Que no importa si es rápido"], correcta: 0, explicacion: "Las redes públicas son riesgosas. \"Es igual\" tienta por cómodo, pero no tenés control de quién está conectado." },
    { q: "Te levantás de la computadora del trabajo. ¿Qué hacés?", opciones: ["La dejás abierta, vuelvo enseguida","La apagás siempre","Le tapás la pantalla","La bloqueás (Windows + L)"], correcta: 3, explicacion: "Bloquear protege en segundos. \"Vuelvo enseguida\" tienta, pero alcanza un minuto para que alguien vea o toque algo." },
    { q: "La computadora del trabajo la usa también tu hijo. ¿Qué conviene?", opciones: ["Compartir todo","Un usuario aparte para el trabajo","Darle tu contraseña","No hacer nada"], correcta: 1, explicacion: "Un usuario separado evita mezclar. Compartir todo tienta por simple, pero puede borrar o ver datos del trabajo." },
    { q: "Te llega un mail \"del jefe\" pidiendo urgente la clave del sistema. ¿Qué hacés?", opciones: ["Le mandás la clave","Respondés preguntando por qué","Lo confirmás por otro canal antes de hacer nada","Lo reenviás a todos"], correcta: 2, explicacion: "Es un engaño típico. Responder al mismo mail tienta, pero le respondés al estafador." },
    { q: "Hiciste clic en un enlace raro con la computadora del trabajo. ¿Qué hacés?", opciones: ["Avisás enseguida a tu empresa","No decís nada por vergüenza","Esperás a ver si pasa algo","Borrás el mail y listo"], correcta: 0, explicacion: "Cuanto antes se avisa, menos daño. Callarte tienta por vergüenza, pero el problema puede crecer." },
    { q: "Tu jefe te escribe a las 23. Sos teletrabajador en relación de dependencia. ¿Tenés que responder?", opciones: ["Sí, siempre","Sí, si es tu jefe","Solo si estás despierto","No: la ley reconoce el derecho a la desconexión fuera de tu jornada"], correcta: 3, explicacion: "La desconexión es un derecho. \"Si es tu jefe\" tienta, pero la ley no hace esa excepción." },
    { q: "Cuidás a tu mamá mayor y teletrabajás. ¿Qué podés pedir según la Ley 27.555?", opciones: ["Nada, es tu problema","Horarios compatibles con las tareas de cuidado o interrumpir la jornada","Cobrar el doble","Que contraten a otra persona"], correcta: 1, explicacion: "La ley contempla las tareas de cuidado. \"Es tu problema\" tienta, pero hay un derecho específico." },
    { q: "¿Quién tiene que poner la computadora para teletrabajar, según la ley?", opciones: ["Vos, siempre","Nadie","La empresa: tiene que darte el equipo y las herramientas","El Estado"], correcta: 2, explicacion: "Los elementos de trabajo los provee el empleador. \"Vos\" tienta porque trabajás en tu casa, pero la ley dice otra cosa." },
    { q: "Las leyes laborales pueden cambiar. ¿Qué hacés para estar seguro de tus derechos?", opciones: ["Verificás con tu sindicato, un abogado laboralista o el Ministerio de Trabajo","Confiás en un video viejo","Preguntás en un grupo de WhatsApp","Suponés que no cambió nada"], correcta: 0, explicacion: "Las fuentes oficiales y profesionales están actualizadas. El grupo tienta por rápido, pero puede tener datos viejos." },
    { q: "Querés ganar $ 900.000 por mes como freelance y cobrás 90 horas. ¿Cuánto por hora?", opciones: ["$ 7.500","$ 900","$ 90.000","$ 10.000"], correcta: 3, explicacion: "900.000 ÷ 90 = 10.000. $ 7.500 tienta porque divide por 120, pero no todas las horas se cobran." },
    { q: "Un cliente te pide un \"trabajo de prueba\" enorme, gratis. ¿Qué hacés?", opciones: ["Lo hacés entero gratis","Desconfiás: proponés una prueba chica o cobrar una seña","Le pagás vos para empezar","Le das tus claves"], correcta: 1, explicacion: "Una prueba enorme gratis es una señal de abuso. Hacerla tienta para conseguir el cliente, pero muchas veces no pagan." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu plan de trabajo remoto",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de trabajo remoto completo para tu situación",
    "Probarlo una semana y medir cómo te fue",
    "Evaluarlo con una rúbrica y ajustarlo",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>plan de trabajo remoto</strong>: un documento de una o dos páginas con cómo vas a trabajar (o estudiar) desde casa, y una semana de prueba.</p>
      <table>
        <tr><th>Parte del plan</th><th>Módulo</th></tr>
        <tr><td>Forma de trabajo (empleado, híbrido o independiente) y por qué</td><td>Qué es trabajar a distancia</td></tr>
        <tr><td>Tu espacio, conexión, plan B y ergonomía</td><td>Tu espacio de trabajo</td></tr>
        <tr><td>Herramientas que vas a usar y para qué</td><td>Herramientas</td></tr>
        <tr><td>Mensajes de inicio y cierre, y cómo pedís ayuda</td><td>Comunicarse a distancia</td></tr>
        <tr><td>Horario, rituales y acuerdos con la casa</td><td>Rutina y límites</td></tr>
        <tr><td>Hábitos de seguridad y derechos que te aplican</td><td>Seguridad y derechos</td></tr>
      </table>
      <p><strong>Si todavía no trabajás a distancia,</strong> hacé el plan para estudiar desde casa o para un trabajo remoto que quieras conseguir: la semana de prueba la podés hacer con un curso de este sitio.</p>
      <p>Por ejemplo, un plan para estudiar este curso desde casa tiene el mismo horario, rituales y acuerdos que uno de trabajo.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Evaluá tu plan antes y después de la semana de prueba.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Espacio</td><td>Lugar fijo, ergonomía revisada y plan B de conexión</td><td>Lugar fijo sin ergonomía o sin plan B</td><td>Sin lugar fijo</td></tr>
        <tr><td>Horario</td><td>Inicio, pausas, cierre y rituales</td><td>Horario sin cierre claro</td><td>Sin horario</td></tr>
        <tr><td>Comunicación</td><td>Mensajes de inicio y cierre, y cuándo pedir ayuda</td><td>Solo uno de los dos</td><td>Nada previsto</td></tr>
        <tr><td>Límites</td><td>Acuerdos con la casa y desconexión al cerrar</td><td>Solo uno de los dos</td><td>Ninguno</td></tr>
        <tr><td>Seguridad</td><td>Dos pasos activado, bloqueo de pantalla y wifi con contraseña</td><td>Uno o dos de los tres</td><td>Ninguno</td></tr>
        <tr><td>Derechos o condiciones</td><td>Conoce sus derechos (empleado) o calculó su precio (independiente)</td><td>Los conoce a medias</td><td>No los consideró</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios</code></pre>
      <p>Por ejemplo, si sacaste 1 en horario porque no tenés cierre claro, agregá un ritual de cierre y una hora fija para silenciar notificaciones.</p>` },
    { titulo: "La semana de prueba", html: `
      <p class="idea">Un plan se prueba usándolo. Durante una semana, seguí tu plan y anotá unos pocos números cada día. Al final, ajustá lo que no funcionó.</p>
      <pre><code>           Horas de  ¿Cerré a   Interrup-  Pausas   Energía
           foco      horario?   ciones     hechas   (1 a 5)
Lunes      4         Sí         6          3        4
Martes     3         No         9          1        2
Miércoles  4,5       Sí         4          3        4
...</code></pre>
      <p><strong>Preguntas al final de la semana:</strong></p>
      <ol>
        <li>¿Qué parte del plan funcionó casi todos los días?</li>
        <li>¿Qué día fue peor y por qué?</li>
        <li>¿Qué cambio chico pruebo la semana que viene?</li>
      </ol>
      <p><strong>Contalo:</strong> en una entrevista para un trabajo remoto, "¿Cómo te organizás trabajando desde casa?" es una pregunta segura. Con este plan y tus números, tenés una respuesta concreta.</p>
      <p>Por ejemplo, si el martes tuviste 9 interrupciones y no cerraste a horario, mirá qué pasó ese día: quizás faltó el acuerdo con la casa para las reuniones.</p>` },
  ],
  practica: [
    "Escribí tu plan de trabajo remoto con las 6 partes de la tabla del encargo. Anotá qué forma de trabajo elegiste y por qué.",
    "Evaluá tu plan con la rúbrica y anotá el puntaje de cada criterio y el total sobre 12.",
    "Seguí tu plan una semana y completá la tabla diaria. Anotá qué día fue peor y qué cambio vas a probar.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Teletrabajo", url: "https://www.argentina.gob.ar/trabajo/teletrabajo" },
    { t: "Google Drive: compartir y gestionar el acceso", url: "https://support.google.com/drive/answer/2494822?hl=es" },
    { t: "Google: activar la verificación en dos pasos", url: "https://support.google.com/accounts/answer/185839?hl=es" },
  ],
  quiz: [
    { q: "Todavía no trabajás a distancia. ¿Cómo hacés el proyecto?", opciones: ["No lo hacés","Inventás que trabajás","Armás el plan para estudiar desde casa o para un trabajo remoto que quieras conseguir","Esperás a conseguir trabajo"], correcta: 2, explicacion: "El plan sirve igual para estudiar. Esperar tienta, pero perdés la práctica." },
    { q: "¿Qué tiene que tener tu plan sobre el espacio?", opciones: ["Lugar fijo, ergonomía revisada y plan B de conexión","Solo la marca de la computadora","Una foto linda","Nada"], correcta: 0, explicacion: "Las tres cosas hacen que funcione. La marca de la computadora tienta como dato, pero no resuelve el puesto." },
    { q: "¿Qué es una rúbrica?", opciones: ["Un horario","Una herramienta de videollamadas","Un tipo de contrato","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica evalúa. El horario tienta porque es parte del plan, pero no lo evalúa." },
    { q: "Tu plan tiene horario pero sin hora de cierre. ¿Cuánto saca \"Horario\"?", opciones: ["2","1","0","No se evalúa"], correcta: 1, explicacion: "Horario sin cierre claro es 1. 2 tienta porque hay horario, pero el cierre es lo que más cuesta en remoto." },
    { q: "No activaste la verificación en dos pasos ni tenés contraseña en el wifi, pero bloqueás la pantalla. ¿Cuánto saca \"Seguridad\"?", opciones: ["2","0","1: uno de los tres hábitos","No se evalúa"], correcta: 2, explicacion: "Uno o dos de los tres es 1. 0 tienta, pero tenés el bloqueo de pantalla." },
    { q: "Sos independiente y calculaste tu precio por hora. ¿Qué criterio cumple?", opciones: ["Derechos o condiciones","Espacio","Horario","Comunicación"], correcta: 0, explicacion: "Para independientes, el precio es la condición clave. Horario tienta porque usaste horas, pero el criterio es otro." },
    { q: "Sacaste 8 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Dejás de trabajar a distancia","Empezás un plan nuevo de cero","Mejorás lo que sacó 0 o 1"], correcta: 3, explicacion: "Entre 7 y 10 se mejora lo que falló. Empezar de cero tienta, pero perdés lo que ya funciona." },
    { q: "¿Qué anotás cada día de la semana de prueba?", opciones: ["Todo lo que hiciste minuto a minuto","Horas de foco, si cerraste a horario, interrupciones, pausas y energía","Nada, alcanza con recordar","Solo si te fue bien"], correcta: 1, explicacion: "Pocos números alcanzan. Minuto a minuto tienta por completo, pero no se sostiene." },
    { q: "El martes tuviste 9 interrupciones y no cerraste a horario. ¿Qué hacés?", opciones: ["Lo ignorás","Te retás","Buscás qué pasó ese día para ajustar el plan","Dejás el plan"], correcta: 2, explicacion: "El peor día muestra qué ajustar. Retarte tienta, pero no te dice qué cambiar." },
    { q: "Al final de la semana, ¿cuántos cambios probás?", opciones: ["Uno chico, la semana siguiente","Cinco a la vez","Ninguno","Cambiar todo el plan"], correcta: 0, explicacion: "Un cambio por vez deja ver qué funciona. Cinco a la vez tientan para mejorar rápido, pero no sabés cuál sirvió." },
    { q: "En una entrevista te preguntan cómo te organizás trabajando desde casa. ¿Qué respondés?", opciones: ["\"Soy muy organizado\"","\"Nunca trabajé en casa\"","\"Como puedo\"","Contás tu plan con ejemplos y los números de tu semana de prueba"], correcta: 3, explicacion: "Un plan con números es creíble. \"Soy muy organizado\" tienta por corto, pero cualquiera lo dice." },
    { q: "Si querés armar el plan para estudiar este curso desde casa, ¿qué cambia respecto de uno de trabajo?", opciones: ["Todo, son cosas distintas","Poco: el horario, los rituales y los acuerdos son los mismos","No hace falta plan para estudiar","Solo hace falta la computadora"], correcta: 1, explicacion: "La organización es la misma. \"No hace falta plan\" tienta, pero estudiar en casa tiene los mismos desafíos." },
  ],
},
];
