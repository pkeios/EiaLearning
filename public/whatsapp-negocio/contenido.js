// Temario del curso "Atender clientes por WhatsApp". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js whatsapp-negocio y node tools/metodologia.js whatsapp-negocio
window.TEMARIO = [
{
  id: "empezar",
  icono: "📱",
  titulo: "WhatsApp Business: empezar bien",
  nivel: "Básico",
  objetivos: [
    "Elegir entre WhatsApp común y WhatsApp Business para tu negocio",
    "Completar el perfil de empresa con todo lo que un cliente necesita saber",
    "Compartir tu enlace y tu código QR para que te escriban fácil",
  ],
  lecciones: [
    { titulo: "WhatsApp o WhatsApp Business", video: {"id":"UOj_1r8fir0","t":"WhatsApp Business: cómo funciona · Charlypi (8:32)"}, html: `
      <p class="idea"><strong>WhatsApp Business</strong> es una app gratis de WhatsApp pensada para negocios chicos. Se ve casi igual que la común, pero suma herramientas para atender mejor.</p>
      <p>En todo el curso acompañamos a <strong>Matías</strong>, que vende viandas caseras en Neuquén. Todos los pedidos le llegan por WhatsApp a su número personal, mezclados con el grupo de la familia y el del fútbol, y ya se le pasaron pedidos sin contestar.</p>
      <table>
        <tr><th></th><th>WhatsApp común</th><th>WhatsApp Business</th></tr>
        <tr><td>Precio</td><td>Gratis</td><td>Gratis</td></tr>
        <tr><td>Perfil</td><td>Nombre y foto</td><td>Perfil de empresa: descripción, horario, dirección, sitio, catálogo</td></tr>
        <tr><td>Mensajes automáticos</td><td>No</td><td>Bienvenida y ausencia</td></tr>
        <tr><td>Respuestas guardadas</td><td>No</td><td>Respuestas rápidas</td></tr>
        <tr><td>Ordenar chats</td><td>Básico</td><td>Etiquetas por estado del pedido</td></tr>
      </table>
      <p><strong>Un número para el negocio:</strong> lo ideal es un número aparte (un chip barato alcanza). Así separás los clientes de tu vida personal, podés apagar el negocio a la noche y, si algún día alguien te ayuda a atender, le das ese teléfono y no el tuyo.</p>
      <p><strong>Se puede usar en el mismo celular:</strong> muchos teléfonos permiten tener las dos apps, una con cada número (si tu celular acepta dos chips o un chip virtual, eSIM).</p>
      <p><strong>Pasar un número a Business:</strong> si ya usás un número con WhatsApp común, al instalar Business podés pasarlo y se conservan los chats. Antes, hacé una copia de seguridad.</p>
      <p>Por ejemplo, Matías compró un chip nuevo de $1.000, instaló WhatsApp Business con ese número y avisó a sus clientes: "desde ahora, los pedidos a este número".</p>` },
    { titulo: "El perfil de empresa", html: `
      <p class="idea">El <strong>perfil de empresa</strong> es tu vidriera: responde las preguntas de siempre antes de que te las hagan. Un perfil completo te ahorra decenas de mensajes por semana.</p>
      <table>
        <tr><th>Campo</th><th>Ejemplo de Matías</th><th>Consejo</th></tr>
        <tr><td>Nombre</td><td>Viandas Mati · Neuquén</td><td>Como te buscan, con la ciudad si sirve</td></tr>
        <tr><td>Foto</td><td>Logo o una foto de una vianda</td><td>Que se reconozca en chiquito</td></tr>
        <tr><td>Categoría</td><td>Comida</td><td>La que más se acerque</td></tr>
        <tr><td>Descripción</td><td>Viandas caseras de lunes a viernes. Pedidos hasta las 20 h del día anterior.</td><td>Qué vendés y la regla más importante</td></tr>
        <tr><td>Horario</td><td>Lunes a viernes de 9 a 20 h</td><td>El real, el que podés cumplir</td></tr>
        <tr><td>Dirección o zona</td><td>Envíos en Neuquén capital</td><td>Si no tenés local, la zona de entrega</td></tr>
        <tr><td>Correo y sitio web</td><td>Si tenés</td><td>No inventes uno solo para llenar</td></tr>
      </table>
      <p><strong>El horario es una promesa:</strong> si decís de 9 a 20 h, la gente espera respuesta en ese horario. Mejor un horario más corto que puedas cumplir que uno largo en el que no contestás.</p>
      <p><strong>Revisalo como cliente:</strong> pedile a alguien que entre a tu perfil desde su celular y te diga si entendió qué vendés, cuándo y dónde.</p>
      <p><strong>Actualizalo:</strong> en vacaciones, feriados o si cambian los precios, cambiá la descripción el mismo día.</p>
      <p>Por ejemplo, Matías recibía 10 mensajes por día preguntando "¿hacés envíos?" y "¿hasta qué hora tomás pedidos?". Puso las dos respuestas en la descripción y esas preguntas bajaron a la mitad.</p>` },
    { titulo: "Que te encuentren: enlace y QR", html: `
      <p class="idea">Con un <strong>enlace directo</strong> o un <strong>código QR</strong>, el cliente abre un chat con vos sin tener que agendar tu número. Es la forma más fácil de pasar de una publicación a una conversación.</p>
      <pre><code>Enlace directo (sirve con WhatsApp común y Business):
https://wa.me/5492991234567
         └── código del país (54) + 9 + código de área sin 0 + número sin 15
(Este número es de ejemplo: usá el tuyo.)

Con un mensaje ya escrito:
https://wa.me/5492991234567?text=Hola,%20quiero%20pedir%20una%20vianda
(%20 es un espacio)</code></pre>
      <table>
        <tr><th>Dónde ponerlo</th><th>Cómo</th></tr>
        <tr><td>Instagram o Facebook</td><td>En la biografía o el botón de contacto</td></tr>
        <tr><td>Estados de WhatsApp</td><td>"Pedí acá" con el enlace</td></tr>
        <tr><td>Folletos, imanes, bolsas</td><td>El código QR impreso</td></tr>
        <tr><td>Mostrador o local</td><td>Un cartel con el QR: "Escaneá y pedí"</td></tr>
      </table>
      <p>Un <strong>código QR</strong> es un cuadradito de puntos que la cámara del celular lee y abre un enlace. WhatsApp Business genera el tuyo desde la configuración de la herramienta de empresa (busca "código QR" o "enlace corto").</p>
      <p><strong>Probá el enlace antes de imprimir:</strong> abrilo desde otro celular y fijate que abra tu chat. Un número mal escrito en 500 folletos es caro.</p>
      <p>Por ejemplo, Matías pegó un imán con su QR en cada vianda que entrega. Al mes, el 30% de los pedidos nuevos llegaban escaneando el imán.</p>` },
  ],
  practica: [
    "Completá los 7 campos del perfil de empresa (o escribilos en un papel si todavía no tenés la app) y anotá cuál te costó más.",
    "Armá tu enlace wa.me con un mensaje ya escrito, probalo desde otro celular y anotá si abrió bien.",
    "Pedile a alguien que mire tu perfil y anotá qué preguntas le quedaron sin responder.",
  ],
  recursos: [
    { t: "WhatsApp Business: la app gratis para negocios (página oficial)", url: "https://business.whatsapp.com/products/business-app" },
    { t: "Centro de ayuda de WhatsApp (en castellano)", url: "https://faq.whatsapp.com/" },
    { t: "Curso de este sitio: Atención al cliente", url: "https://pkeios.github.io/EiaLearning/atencion-cliente/" },
  ],
  quiz: [
    { q: "Vendés viandas y querés mensajes de bienvenida y respuestas guardadas. ¿Qué app usás?", opciones: ["WhatsApp común","Una app paga obligatoria","WhatsApp Business, que es gratis","Solo Instagram"], correcta: 2, explicacion: "Business trae esas herramientas gratis. La común tienta porque ya la usás, pero no las tiene." },
    { q: "Si los pedidos te llegan al número personal, mezclados con la familia, ¿qué conviene?", opciones: ["Un número aparte para el negocio","Silenciar a la familia","Contestar más rápido","Cambiar la foto"], correcta: 0, explicacion: "Separar ordena y te deja apagar el negocio. Silenciar a la familia tienta, pero el problema sigue." },
    { q: "Si pasás tu número de WhatsApp común a Business, ¿qué hacés antes?", opciones: ["Borrar todos los chats","Cambiar de número","Nada","Una copia de seguridad de los chats"], correcta: 3, explicacion: "La copia protege tus chats si algo falla. \"Nada\" tienta porque suelen conservarse, pero mejor prevenir." },
    { q: "Te preguntan todo el tiempo hasta qué hora tomás pedidos. ¿Qué hacés?", opciones: ["Contestás cada vez a mano","Lo ponés en la descripción del perfil","No contestás","Lo ponés en tu estado personal"], correcta: 1, explicacion: "El perfil responde antes de que pregunten. Contestar a mano tienta, pero gasta tu tiempo." },
    { q: "Si atendés de verdad de 10 a 18 h, ¿qué horario ponés en el perfil?", opciones: ["Las 24 h para parecer atento","De 8 a 22 h por las dudas","De 10 a 18 h, el que podés cumplir","Ninguno"], correcta: 2, explicacion: "El horario es una promesa. Las 24 h tientan, pero la gente espera respuesta y se enoja." },
    { q: "No tenés local, hacés envíos. ¿Qué ponés en dirección?", opciones: ["La zona de entrega","Tu dirección exacta de casa","Una dirección inventada","Nada y que pregunten"], correcta: 0, explicacion: "La zona informa sin exponer tu casa. La dirección exacta tienta por completa, pero no hace falta." },
    { q: "Te vas de vacaciones una semana. ¿Qué hacés con el perfil?", opciones: ["Nada, ya volverás","Borrás la cuenta","Bloqueás a los clientes","Actualizás la descripción ese mismo día"], correcta: 3, explicacion: "Así nadie espera una respuesta que no llega. \"Nada\" tienta, pero los clientes se frustran." },
    { q: "Querés que te escriban desde Instagram sin agendar tu número. ¿Qué usás?", opciones: ["Tu número escrito con espacios","Un enlace wa.me","Un mail","Una captura de tu perfil"], correcta: 1, explicacion: "El enlace abre el chat directo. El número escrito tienta, pero obliga a agendarlo." },
    { q: "Tu número es 0299 15 123-4567. ¿Cómo va en el enlace wa.me?", opciones: ["0299151234567","2991234567","5492991234567","54029915"], correcta: 2, explicacion: "54 del país, 9, área sin 0 y número sin 15. El número con 0 y 15 tienta, pero así no funciona." },
    { q: "Vas a imprimir 500 folletos con tu QR. ¿Qué hacés antes?", opciones: ["Lo probás desde otro celular","Lo imprimís directo","Lo hacés más chico","Le cambiás el color"], correcta: 0, explicacion: "Un error en 500 folletos es caro. Imprimir directo tienta por apuro, pero no sabés si anda." },
    { q: "Querés que el cliente llegue con un mensaje ya escrito. ¿Qué agregás al enlace?", opciones: ["El mensaje después de un espacio","Un # y el mensaje","No se puede","?text= y el mensaje"], correcta: 3, explicacion: "wa.me acepta ?text=. \"No se puede\" tienta, pero existe esa opción." },
    { q: "Entregás viandas en tuppers. ¿Dónde te conviene poner el QR?", opciones: ["Solo en tu casa","En un imán o una etiqueta en cada entrega","En ningún lado","En el chat"], correcta: 1, explicacion: "El cliente lo tiene a mano para volver a pedir. \"En el chat\" tienta, pero si ya está en el chat no hace falta." },
  ],
},
{
  id: "escribir",
  icono: "✍️",
  titulo: "Escribirle a un cliente",
  nivel: "Básico",
  objetivos: [
    "Responder con un mensaje claro: saludo, respuesta y siguiente paso",
    "Elegir entre texto, audio, foto o video según lo que hay que comunicar",
    "Usar un tono amable y profesional, sin exagerar con emojis ni abreviaturas",
  ],
  lecciones: [
    { titulo: "La respuesta en tres partes", html: `
      <p class="idea">Una buena respuesta tiene <strong>saludo, respuesta y siguiente paso</strong>. Así el cliente sabe qué hacer y la conversación avanza hacia la venta.</p>
      <pre><code>Cliente: "Hola, ¿cuánto sale la vianda?"

Mala respuesta:
"2500"

Buena respuesta:
"¡Hola! Gracias por escribir 😊               ← saludo
La vianda del día sale $2.500 e incluye        ← respuesta
plato principal y postre. El envío en el
centro es gratis.
¿Te anoto una para mañana? Hoy recibo          ← siguiente paso
pedidos hasta las 20 h."</code></pre>
      <table>
        <tr><th>Parte</th><th>Para qué</th></tr>
        <tr><td>Saludo</td><td>Que se sienta atendido por una persona</td></tr>
        <tr><td>Respuesta completa</td><td>Contestar lo que preguntó y lo que seguro va a preguntar después (qué incluye, envío)</td></tr>
        <tr><td>Siguiente paso</td><td>Una pregunta o una propuesta para avanzar: "¿te anoto?", "¿qué talle?"</td></tr>
      </table>
      <p><strong>Adelantate a la próxima pregunta:</strong> si te preguntan el precio, casi seguro después preguntan por el envío. Respondé las dos juntas y te ahorrás un ida y vuelta.</p>
      <p><strong>Corto, pero completo:</strong> párrafos de una o dos líneas. En el celular, un bloque largo cansa.</p>
      <p>Por ejemplo, Matías contestaba solo "2500" y la mitad de la gente no volvía a escribir. Con la respuesta en tres partes, empezaron a contestarle "dale, anotame una".</p>` },
    { titulo: "Texto, audio, foto o video", html: `
      <p class="idea">Cada formato sirve para algo distinto. Elegí el que haga <strong>más fácil la vida del cliente</strong>, no el que te resulte más cómodo a vos.</p>
      <table>
        <tr><th>Formato</th><th>Conviene para</th><th>No conviene para</th></tr>
        <tr><td>Texto</td><td>Precios, direcciones, horarios, datos para pagar (se pueden buscar y copiar)</td><td>Explicaciones muy largas</td></tr>
        <tr><td>Foto</td><td>Mostrar el producto real, el menú, la tabla de talles</td><td>Datos que el cliente tiene que copiar</td></tr>
        <tr><td>Video corto</td><td>Mostrar cómo es, cómo se usa o cómo se arma</td><td>Información de una línea</td></tr>
        <tr><td>Audio</td><td>Si el cliente te mandó audio y prefiere hablar; explicaciones con tono</td><td>Precios y datos (no se pueden buscar ni copiar)</td></tr>
      </table>
      <p><strong>Los audios largos cansan:</strong> mucha gente no puede escucharlos en el trabajo o en el colectivo. Si mandás audio, que sea corto (menos de un minuto) y después mandá por escrito los datos importantes.</p>
      <p><strong>Los datos siempre por escrito:</strong> alias o CBU para transferir, dirección, fecha y hora de entrega, total a pagar. El cliente los va a querer copiar.</p>
      <p><strong>Fotos reales:</strong> mostrá tu producto como es (lo ves en el curso de fotos de producto). Si el cliente recibe algo distinto de la foto, se pierde la confianza.</p>
      <p>Por ejemplo, Matías mandaba el menú de la semana en un audio de 3 minutos. Lo cambió por una foto del menú escrito y un texto con los precios: los pedidos llegaron más rápido y con menos errores.</p>` },
    { titulo: "El tono: amable, claro y profesional", html: `
      <p class="idea">En WhatsApp se escribe cercano, pero estás representando a tu negocio. El tono justo es <strong>amable, claro y respetuoso</strong>, como hablarías en un mostrador.</p>
      <table>
        <tr><th>Mejor</th><th>Evitá</th></tr>
        <tr><td>"¡Hola! ¿En qué te puedo ayudar?"</td><td>"q necesitas"</td></tr>
        <tr><td>"Disculpá la demora, recién veo tu mensaje"</td><td>Contestar al día siguiente sin decir nada</td></tr>
        <tr><td>Uno o dos emojis que suman calidez 😊</td><td>Diez emojis por mensaje 😍🔥🙌💯✨</td></tr>
        <tr><td>Palabras completas y bien escritas</td><td>"xq", "tmb", "bno"</td></tr>
        <tr><td>Respetar el trato que use el cliente (vos o usted)</td><td>Decirle "gordi" o "amor" a quien no conocés</td></tr>
        <tr><td>MAYÚSCULAS solo para algo puntual</td><td>ESCRIBIR TODO EN MAYÚSCULAS (parece que gritás)</td></tr>
      </table>
      <p><strong>Usted o vos:</strong> en Argentina, el "vos" es lo común. Si un cliente te trata de usted (muchas personas mayores lo hacen), respondé igual.</p>
      <p><strong>Releé antes de enviar:</strong> el corrector del celular cambia palabras. "Mañana te llevo la vianda" puede salir "Mañana te llevo la viuda".</p>
      <p><strong>Nunca respondas enojado:</strong> si un mensaje te molesta, esperá unos minutos antes de contestar. Lo vas a ver en el módulo de situaciones difíciles.</p>
      <p>Para más sobre cómo tratar a los clientes, está el curso de <strong>Atención al cliente</strong> de este sitio.</p>
      <p>Por ejemplo, una señora le escribía a Matías "Buenas tardes, quisiera saber...". Él respondía "Hola gordi, sale 2500". Desde que la trata de usted y escribe completo, ella le encarga viandas para toda su familia.</p>` },
  ],
  practica: [
    "Reescribí 3 respuestas que mandaste hace poco con el formato de saludo, respuesta y siguiente paso. Anotá cuántas palabras agregaste.",
    "Armá una foto de tu menú, catálogo o lista de precios y anotá qué datos van además por escrito.",
    "Releé tus últimos 10 mensajes a clientes y anotá cuántos tenían abreviaturas, errores o demasiados emojis.",
  ],
  recursos: [
    { t: "Curso de este sitio: Atención al cliente", url: "https://pkeios.github.io/EiaLearning/atencion-cliente/" },
    { t: "Curso de este sitio: Ventas", url: "https://pkeios.github.io/EiaLearning/ventas/" },
    { t: "Centro de ayuda de WhatsApp (en castellano)", url: "https://faq.whatsapp.com/" },
  ],
  quiz: [
    { q: "Si un cliente pregunta cuánto sale la vianda, ¿qué le respondés?", opciones: ["\"2500\"","\"Depende\"","Saludo, el precio con lo que incluye y el envío, y \"¿te anoto una?\"","Un audio de 3 minutos"], correcta: 2, explicacion: "Las tres partes avanzan la venta. \"2500\" tienta por rápido, pero el cliente queda sin saber qué sigue." },
    { q: "Si te preguntan el precio, ¿qué otra pregunta conviene adelantar?", opciones: ["El envío","Su edad","Su dirección exacta","Cuántos hermanos tiene"], correcta: 0, explicacion: "Casi siempre preguntan por el envío después. La dirección tienta, pero recién hace falta al confirmar." },
    { q: "Tu respuesta es un bloque de 15 líneas. ¿Qué cambiás?", opciones: ["Lo mandás igual","Lo pasás a mayúsculas","Lo mandás en un audio largo","Párrafos cortos de una o dos líneas"], correcta: 3, explicacion: "En el celular, los bloques cansan. El audio largo tienta, pero es peor." },
    { q: "Tenés que pasar el alias para que te transfieran. ¿Cómo lo mandás?", opciones: ["En un audio","Por escrito","En una foto borrosa","En un video"], correcta: 1, explicacion: "El cliente lo tiene que copiar. El audio tienta por rápido, pero no se puede copiar." },
    { q: "Querés mostrar cómo viene armada la vianda. ¿Qué mandás?", opciones: ["Un audio describiéndola","Solo el precio","Una foto real o un video corto","Una foto de internet"], correcta: 2, explicacion: "Ver el producto real convence. La foto de internet tienta por linda, pero no es lo que recibe." },
    { q: "Un cliente te manda audios y prefiere hablar. ¿Qué hacés?", opciones: ["Le respondés con audios cortos y le mandás los datos por escrito","Le exigís que escriba","Audios de 5 minutos","No le contestás"], correcta: 0, explicacion: "Te adaptás, pero los datos van escritos. Exigirle que escriba tienta, pero no lo atiende como quiere." },
    { q: "Si tardaste un día en responder, ¿cómo empezás el mensaje?", opciones: ["Como si nada","Explicando todo lo que hiciste ayer","Con un \"bueno, ¿qué querías?\"","Pidiendo disculpas por la demora"], correcta: 3, explicacion: "Reconocerlo muestra respeto. \"Como si nada\" tienta, pero el cliente lo nota." },
    { q: "Si escribiste \"xq tmb hay de pollo\", ¿qué mejorás?", opciones: ["Agregar emojis","Escribir las palabras completas","Ponerlo en mayúsculas","Nada, se entiende"], correcta: 1, explicacion: "Las abreviaturas parecen descuido. \"Se entiende\" tienta, pero no da imagen profesional." },
    { q: "Si un cliente te trata de usted, ¿cómo le respondés?", opciones: ["De vos, que es más cercano","Con apodos cariñosos","De usted también","Sin saludar"], correcta: 2, explicacion: "Respetar su trato es respetarlo. Vos tienta por costumbre, pero puede incomodarlo." },
    { q: "¿Por qué conviene no escribir todo en mayúsculas?", opciones: ["Porque parece que gritás","Porque gasta más datos","Porque WhatsApp lo prohíbe","Porque no se puede leer"], correcta: 0, explicacion: "En los mensajes, las mayúsculas se leen como gritos. \"Gasta más datos\" tienta como excusa, pero no es eso." },
    { q: "Escribiste un mensaje rápido desde el celular. ¿Qué hacés antes de enviarlo?", opciones: ["Lo mandás sin mirar","Lo borrás","Le agregás 5 emojis","Lo releés por si el corrector cambió palabras"], correcta: 3, explicacion: "El corrector cambia palabras. Mandarlo sin mirar tienta por rápido, pero puede salir un error vergonzoso." },
    { q: "Un mensaje de un cliente te hizo enojar. ¿Qué hacés?", opciones: ["Contestás enseguida lo que pensás","Esperás unos minutos antes de contestar","Lo bloqueás sin decir nada","Lo escrachás en tus estados"], correcta: 1, explicacion: "En caliente se escribe lo que después lamentás. Contestar enseguida tienta, pero empeora todo." },
  ],
},
{
  id: "herramientas",
  icono: "🧰",
  titulo: "Las herramientas que te ahorran tiempo",
  nivel: "Intermedio",
  objetivos: [
    "Configurar el mensaje de bienvenida y el de ausencia",
    "Crear respuestas rápidas para las preguntas que se repiten",
    "Armar un catálogo con fotos, precios y descripciones claras",
  ],
  lecciones: [
    { titulo: "Mensajes de bienvenida y de ausencia", video: {"id":"wegKYFIjMUY","t":"Configurar WhatsApp Business para mensajes automáticos · Maspedidos (4:55)"}, html: `
      <p class="idea">WhatsApp Business manda dos mensajes automáticos: el de <strong>bienvenida</strong> (a quien te escribe por primera vez o después de un tiempo) y el de <strong>ausencia</strong> (cuando estás fuera de horario).</p>
      <pre><code>Mensaje de bienvenida:
"¡Hola! Gracias por escribir a Viandas Mati 🍲
El menú de esta semana está en el catálogo.
Tomamos pedidos hasta las 20 h para el día siguiente.
En un ratito te respondo."

Mensaje de ausencia (fuera de horario):
"¡Hola! Ahora estamos fuera de horario.
Atendemos de lunes a viernes de 9 a 20 h.
Dejanos tu pedido y te confirmamos mañana a primera hora."</code></pre>
      <table>
        <tr><th>Mensaje</th><th>Dónde se configura</th><th>Clave</th></tr>
        <tr><td>Bienvenida</td><td>Herramientas para la empresa → Mensaje de bienvenida</td><td>Corto, con lo más útil (catálogo, horario de pedidos)</td></tr>
        <tr><td>Ausencia</td><td>Herramientas para la empresa → Mensaje de ausencia</td><td>Decí cuándo vas a responder; programalo "fuera del horario comercial"</td></tr>
      </table>
      <p><strong>Un mensaje automático no reemplaza la respuesta:</strong> el cliente sabe que es automático. Después contestá vos, en persona.</p>
      <p><strong>No prometas lo que no vas a cumplir:</strong> "te respondemos en 5 minutos" en un mensaje automático es una promesa. Mejor "en un ratito" o "en el día".</p>
      <p><strong>Los nombres de los menús</strong> pueden cambiar un poco según la versión de la app. Si no lo encontrás, buscalo en Configuración → Herramientas para la empresa.</p>
      <p>Por ejemplo, Matías configuró el mensaje de ausencia. Los pedidos que llegan a la noche ya no quedan sin respuesta: el cliente sabe que se confirma a la mañana.</p>` },
    { titulo: "Respuestas rápidas", html: `
      <p class="idea">Las <strong>respuestas rápidas</strong> son mensajes guardados que mandás escribiendo una barra (/) y un atajo. Sirven para lo que contestás todos los días.</p>
      <pre><code>Atajo        Mensaje guardado
/precios  →  "La vianda del día sale $2.500 e incluye plato y postre.
              Pack de 5: $11.000. Envío gratis en el centro."
/pago     →  "Podés pagar por transferencia al alias VIANDAS.MATI
              o en efectivo al recibir. Mandame el comprobante 🙌"
/envio    →  "Entregamos de 11:30 a 13 h en Neuquén capital.
              Fuera del centro, el envío cuesta $800."
/gracias  →  "¡Gracias por tu pedido! Cualquier cosa, escribime."</code></pre>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>1</td><td>Anotá durante una semana las preguntas que más te hacen</td></tr>
        <tr><td>2</td><td>Escribí la mejor respuesta para cada una (con las tres partes del módulo anterior)</td></tr>
        <tr><td>3</td><td>Guardalas en Herramientas para la empresa → Respuestas rápidas, con un atajo fácil</td></tr>
        <tr><td>4</td><td>Al usarlas, personalizá: agregá el nombre del cliente o un detalle</td></tr>
      </table>
      <p><strong>Personalizá antes de enviar:</strong> "Hola, Laura" antes de la respuesta guardada cambia todo. Que no parezca un robot.</p>
      <p><strong>Actualizalas:</strong> si cambian los precios y te olvidás de cambiar la respuesta rápida, vas a mandar el precio viejo a todos. Revisalas cada vez que cambies algo.</p>
      <p>Por ejemplo, Matías tardaba 2 minutos en escribir los datos de pago cada vez. Con /pago tarda 5 segundos y nunca más se equivocó en una letra del alias.</p>` },
    { titulo: "El catálogo", video: {"id":"FHtXFIvW0Zw","t":"Cómo crear un catálogo de productos en WhatsApp Business · Cyberclick (4:36)"}, html: `
      <p class="idea">El <strong>catálogo</strong> es una vidriera dentro de WhatsApp: cada producto con foto, precio y descripción. El cliente lo mira sin preguntarte, y vos lo compartís con un toque.</p>
      <table>
        <tr><th>Campo</th><th>Ejemplo</th><th>Consejo</th></tr>
        <tr><td>Foto</td><td>La vianda real, desde arriba, con buena luz</td><td>Foto tuya, no de internet</td></tr>
        <tr><td>Nombre</td><td>Pollo al horno con papas</td><td>Lo que es, sin vueltas</td></tr>
        <tr><td>Precio</td><td>$2.500</td><td>El que cobrás hoy (actualizalo)</td></tr>
        <tr><td>Descripción</td><td>Porción de 400 g. Incluye postre del día. Sin TACC: no.</td><td>Lo que el cliente pregunta: tamaño, qué incluye, ingredientes importantes</td></tr>
        <tr><td>Código o enlace</td><td>Opcional</td><td>Si tenés tienda online, el enlace</td></tr>
      </table>
      <p><strong>Colecciones:</strong> podés agrupar productos ("Viandas", "Postres", "Packs") para que se encuentren más fácil.</p>
      <p><strong>Compartir:</strong> desde un chat tocás el clip (📎) → Catálogo y mandás un producto o todo. También tiene su propio enlace para ponerlo en redes.</p>
      <p><strong>Lo que no se puede vender:</strong> WhatsApp tiene una política para empresas con productos prohibidos (por ejemplo, medicamentos, alcohol en algunos casos, armas). Revisala si vendés algo dudoso.</p>
      <p><strong>Un catálogo desactualizado es peor que no tener:</strong> si el cliente pide algo que ya no tenés o a un precio viejo, se frustra. Ocultá los productos que no hay.</p>
      <p>Por ejemplo, Matías carga cada domingo las 5 viandas de la semana en el catálogo. El lunes le escriben directamente "quiero la de pollo y la de lentejas".</p>` },
  ],
  practica: [
    "Escribí tu mensaje de bienvenida y tu mensaje de ausencia y contá cuántas líneas tiene cada uno (que no pasen de 5).",
    "Anotá durante 3 días las preguntas que te hacen, elegí las 4 más repetidas y creá una respuesta rápida para cada una.",
    "Cargá 3 productos en el catálogo con los 4 campos de la tabla y anotá qué dato agregaste en la descripción.",
  ],
  recursos: [
    { t: "WhatsApp Business: la app gratis para negocios (página oficial)", url: "https://business.whatsapp.com/products/business-app" },
    { t: "Centro de ayuda de WhatsApp (en castellano)", url: "https://faq.whatsapp.com/" },
    { t: "WhatsApp: política para empresas (qué se permite vender y cómo)", url: "https://www.whatsapp.com/legal/business-policy" },
  ],
  quiz: [
    { q: "Si alguien te escribe por primera vez, ¿qué mensaje automático le llega?", opciones: ["El de ausencia","Una respuesta rápida","El de bienvenida","Ninguno nunca"], correcta: 2, explicacion: "La bienvenida es para el primer contacto. La ausencia tienta, pero es para fuera de horario." },
    { q: "Si te escriben a las 23 h y atendés hasta las 20 h, ¿qué mensaje les llega?", opciones: ["El de ausencia, si lo programaste fuera de horario","El de bienvenida siempre","Nada","Una respuesta rápida automática"], correcta: 0, explicacion: "La ausencia avisa cuándo vas a responder. Las respuestas rápidas tientan, pero las mandás vos." },
    { q: "Tu mensaje de ausencia dice \"te respondemos en 5 minutos\". ¿Qué problema hay?", opciones: ["Ninguno","Que es muy corto","Que tiene un número","Es una promesa que fuera de horario no vas a cumplir"], correcta: 3, explicacion: "El automático también promete. \"Ninguno\" tienta porque suena atento, pero el cliente espera esos 5 minutos." },
    { q: "Ya le llegó al cliente el mensaje de bienvenida. ¿Qué hacés?", opciones: ["Nada, ya está atendido","Le respondés vos en persona","Le mandás otra vez la bienvenida","Esperás que pregunte de nuevo"], correcta: 1, explicacion: "El automático no reemplaza tu respuesta. \"Ya está atendido\" tienta, pero el cliente sigue esperando." },
    { q: "Escribís los datos de pago 20 veces por día. ¿Qué usás?", opciones: ["Copiar y pegar de un chat viejo","Un audio","Una respuesta rápida, como /pago","Mandarlos solo si insisten"], correcta: 2, explicacion: "La respuesta rápida es un toque y sin errores. Copiar de un chat viejo tienta, pero lleva tiempo buscarlo." },
    { q: "Vas a usar la respuesta rápida /precios con Laura. ¿Qué hacés antes de enviarla?", opciones: ["Le agregás \"Hola, Laura\" para personalizarla","La mandás tal cual","Le sacás los precios","La mandás dos veces"], correcta: 0, explicacion: "Personalizar evita que parezca un robot. Tal cual tienta por rápido, pero se siente frío." },
    { q: "Cambiaste los precios. ¿Qué más tenés que actualizar?", opciones: ["Solo la foto de perfil","Nada más","El nombre del negocio","Las respuestas rápidas y el catálogo"], correcta: 3, explicacion: "Si no, mandás precios viejos. \"Nada más\" tienta, pero las respuestas guardadas siguen con el precio anterior." },
    { q: "¿Cómo elegís qué respuestas rápidas crear?", opciones: ["Copiando las de otro negocio","Anotando unos días las preguntas que más te hacen","Inventando preguntas posibles","Creando 50 por las dudas"], correcta: 1, explicacion: "Las tuyas responden a tus clientes. Copiar las de otro tienta, pero tienen otras preguntas." },
    { q: "Vas a cargar una vianda en el catálogo. ¿Qué foto usás?", opciones: ["Una foto linda de internet","Una foto del logo","Una foto real de tu vianda","Ninguna"], correcta: 2, explicacion: "El cliente compra lo que ve. La de internet tienta por linda, pero no es tu producto." },
    { q: "Si te preguntan siempre de cuántos gramos es la porción, ¿dónde lo ponés?", opciones: ["En la descripción del producto en el catálogo","En el nombre del negocio","En tu estado personal","En ningún lado"], correcta: 0, explicacion: "La descripción responde lo que preguntan. El nombre del negocio tienta, pero no es por producto." },
    { q: "Se te terminó un producto del catálogo. ¿Qué hacés?", opciones: ["Lo dejás y explicás a cada uno","Lo dejás con el precio viejo","Borrás todo el catálogo","Lo ocultás hasta que vuelva"], correcta: 3, explicacion: "Un catálogo desactualizado frustra. Explicar a cada uno tienta, pero gastás tiempo y el cliente se desilusiona." },
    { q: "Querés vender algo y no sabés si WhatsApp lo permite. ¿Qué revisás?", opciones: ["Lo que hacen otros","La política de WhatsApp para empresas","Nada, todo se puede","Las reseñas de la app"], correcta: 1, explicacion: "La política dice qué está prohibido. \"Lo que hacen otros\" tienta, pero pueden estar incumpliendo." },
  ],
},
{
  id: "ordenar",
  icono: "🗂️",
  titulo: "Ordenar los chats y los pedidos",
  nivel: "Intermedio",
  objetivos: [
    "Usar etiquetas para saber en qué estado está cada pedido",
    "Llevar una lista de pedidos que no dependa de buscar en los chats",
    "Responder en un tiempo razonable sin estar pegado al celular todo el día",
  ],
  lecciones: [
    { titulo: "Etiquetas: el estado de cada cliente", video: {"id":"TArJ5i0v_Qk","t":"Cómo usar las etiquetas de WhatsApp Business · Susan Gorbina (9:14)"}, html: `
      <p class="idea">Las <strong>etiquetas</strong> son marcas de colores que le ponés a cada chat. Con ellas ves de un vistazo <strong>en qué estado está cada pedido</strong> y nadie queda olvidado.</p>
      <table>
        <tr><th>Etiqueta</th><th>Qué significa</th><th>Qué tenés que hacer</th></tr>
        <tr><td>🟡 Consulta</td><td>Preguntó, todavía no pidió</td><td>Responder y proponer</td></tr>
        <tr><td>🟠 Pedido nuevo</td><td>Confirmó qué quiere</td><td>Anotarlo y pedir el pago</td></tr>
        <tr><td>🔴 Pendiente de pago</td><td>Falta que pague</td><td>Recordar con amabilidad</td></tr>
        <tr><td>🟢 Pagado</td><td>Ya pagó</td><td>Preparar y entregar</td></tr>
        <tr><td>🔵 Entregado</td><td>Recibió su pedido</td><td>Agradecer; a los días, preguntar qué le pareció</td></tr>
        <tr><td>⭐ Cliente frecuente</td><td>Compra seguido</td><td>Tratarlo bien: avisarle primero de novedades</td></tr>
      </table>
      <p><strong>Cómo se usan:</strong> mantené apretado un chat → ícono de etiqueta → elegí o creá una. Después, en la lista de chats, filtrás por etiqueta y ves solo esos.</p>
      <p><strong>Cambiá la etiqueta cuando cambia el estado:</strong> si ya pagó, sacá "Pendiente de pago" y poné "Pagado". Si no las actualizás, dejan de servir.</p>
      <p><strong>Pocas y claras:</strong> 5 o 6 etiquetas alcanzan. Con 20 te perdés.</p>
      <p>Por ejemplo, Matías filtra cada mañana por "Pagado" y ahí tiene la lista exacta de viandas para preparar. Antes recorría todos los chats y se le escapaba alguno.</p>` },
    { titulo: "La lista de pedidos", html: `
      <p class="idea">Los chats no son una lista de pedidos: los mensajes se pierden entre otros. Pasá cada pedido confirmado a una <strong>lista aparte</strong>: un cuaderno, una planilla o una nota.</p>
      <pre><code>Planilla de pedidos (Google Sheets, Excel o un cuaderno):

Fecha  | Cliente | Pedido          | Total   | Pago        | Entrega        | Estado
10/3   | Laura   | 2 pollo         | $5.000  | Transf. ✓   | 11/3 12 h, centro | Pagado
10/3   | Jorge   | 1 lentejas      | $2.500  | Efectivo    | 11/3 12:30 h   | Pedido
10/3   | Ana     | Pack 5          | $11.000 | Falta       | 11/3           | Pend. pago

Al final del día: ¿cuántas viandas de cada una? ¿cuánta plata entró?</code></pre>
      <table>
        <tr><th>Ventaja de la lista</th><th>Ejemplo</th></tr>
        <tr><td>Saber cuánto producir</td><td>Sumás: 8 de pollo, 5 de lentejas</td></tr>
        <tr><td>Controlar la plata</td><td>Cuánto cobraste y cuánto falta</td></tr>
        <tr><td>Armar el recorrido de entrega</td><td>Ordenás por zona y horario</td></tr>
        <tr><td>Conocer a tus clientes</td><td>Quién compra más, qué piden</td></tr>
      </table>
      <p><strong>Confirmá el pedido con un resumen en el chat</strong> y recién ahí lo pasás a la lista. Así los dos tienen lo mismo por escrito (lo vas a ver en el módulo de ventas).</p>
      <p><strong>Una planilla en Google Sheets</strong> se puede ver desde el celular y la compu, y compartir con alguien que te ayude. Para empezar, un cuaderno también sirve.</p>
      <p>Por ejemplo, Matías anotaba los pedidos "en la cabeza" y un martes se olvidó de dos. Ahora los pasa a una planilla en el momento en que se confirman y al final del día la suma le dice cuánto cocinar.</p>` },
    { titulo: "Tiempos de respuesta sin vivir pegado al celular", html: `
      <p class="idea">Responder rápido vende, pero no podés estar pendiente del celular todo el día. La solución es <strong>organizar momentos para responder</strong> y avisar los tiempos.</p>
      <table>
        <tr><th>Momento</th><th>Qué hacés</th></tr>
        <tr><td>A primera hora</td><td>Respondés lo que llegó a la noche; confirmás pedidos</td></tr>
        <tr><td>Cada 1 o 2 horas</td><td>Una vuelta corta de respuestas (10 minutos)</td></tr>
        <tr><td>Antes del cierre</td><td>Respondés todo lo pendiente; mirás las etiquetas</td></tr>
        <tr><td>Fuera de horario</td><td>Actúa el mensaje de ausencia: no respondés</td></tr>
      </table>
      <p><strong>Chats fijados:</strong> podés fijar arriba de todo los chats más importantes (por ejemplo, un pedido grande del día). Mantené apretado el chat → ícono de chincheta.</p>
      <p><strong>Archivar no es borrar:</strong> archivá los chats de pedidos terminados para que la lista quede limpia. Vuelven solos si el cliente escribe de nuevo.</p>
      <p><strong>Marcar como no leído:</strong> si abriste un mensaje, pero no podés responder ahora, marcalo como no leído para que no se te olvide.</p>
      <p><strong>Tu descanso también cuenta:</strong> responder a las 2 de la mañana enseña a los clientes que estás siempre disponible. El horario del perfil y el mensaje de ausencia te protegen.</p>
      <p>Por ejemplo, Matías revisaba el celular cada 2 minutos mientras cocinaba y se le quemó una olla. Ahora responde en 4 momentos del día y en el resto cocina tranquilo; las ventas no bajaron.</p>` },
  ],
  practica: [
    "Creá 5 o 6 etiquetas como las de la tabla y etiquetá tus últimos 10 chats de clientes. Anotá cuántos quedaron en cada estado.",
    "Armá una planilla de pedidos con las 7 columnas de la lección y cargá los pedidos de una semana. Anotá el total cobrado.",
    "Durante 3 días respondé solo en 4 momentos fijos y anotá si algún cliente se quejó por la demora.",
  ],
  recursos: [
    { t: "Centro de ayuda de WhatsApp (en castellano)", url: "https://faq.whatsapp.com/" },
    { t: "WhatsApp Business: la app gratis para negocios (página oficial)", url: "https://business.whatsapp.com/products/business-app" },
    { t: "Curso de este sitio: Ventas", url: "https://pkeios.github.io/EiaLearning/ventas/" },
  ],
  quiz: [
    { q: "Querés saber de un vistazo qué pedidos faltan pagar. ¿Qué usás?", opciones: ["Leés todos los chats","Te acordás","Una etiqueta \"Pendiente de pago\" y filtrás por ella","Les escribís a todos"], correcta: 2, explicacion: "La etiqueta filtra en un toque. Leer todo tienta por seguro, pero se escapa alguno." },
    { q: "Un cliente ya pagó. ¿Qué hacés con su etiqueta?", opciones: ["Cambiás \"Pendiente de pago\" por \"Pagado\"","Le agregás otra y dejás las dos","Nada","La borrás sin poner otra"], correcta: 0, explicacion: "Si no la actualizás, la etiqueta miente. Dejar las dos tienta, pero confunde." },
    { q: "Si creaste 20 etiquetas distintas, ¿qué problema hay?", opciones: ["Ninguno, cuantas más mejor","WhatsApp no deja","Se ven feas","Te perdés: con 5 o 6 claras alcanza"], correcta: 3, explicacion: "Pocas y claras sirven. \"Cuantas más mejor\" tienta, pero nadie las mantiene." },
    { q: "Cada mañana querés la lista de viandas para preparar. ¿Qué filtrás?", opciones: ["\"Consulta\"","La etiqueta \"Pagado\"","\"Entregado\"","Todos los chats"], correcta: 1, explicacion: "Lo pagado es lo que hay que preparar. \"Consulta\" tienta, pero todavía no compraron." },
    { q: "Si anotás los pedidos \"en la cabeza\", ¿qué riesgo hay?", opciones: ["Ninguno","Cocinar de más siempre","Olvidarte de alguno","Que te cobren más"], correcta: 2, explicacion: "La memoria falla con muchos pedidos. \"Ninguno\" tienta si son pocos, pero al crecer se escapan." },
    { q: "¿Cuándo pasás un pedido a la lista?", opciones: ["Cuando lo confirmaste con un resumen en el chat","Apenas preguntan el precio","Cuando lo entregás","Nunca, está en el chat"], correcta: 0, explicacion: "Confirmado, los dos tienen lo mismo. Al preguntar el precio tienta, pero todavía no es pedido." },
    { q: "Sumás tu lista: 8 de pollo y 5 de lentejas. ¿Para qué te sirve?", opciones: ["Para nada","Para subir los precios","Para cambiar el menú","Para saber cuánto producir"], correcta: 3, explicacion: "La lista dice qué cocinar. \"Para nada\" tienta, pero sin sumar cocinás a ojo." },
    { q: "Querés que una persona que te ayuda vea los pedidos. ¿Qué te conviene?", opciones: ["Mandarle capturas de cada chat","Una planilla compartida en Google Sheets","Darle tu celular personal","Dictarle por teléfono"], correcta: 1, explicacion: "La planilla compartida está siempre al día. Darle tu celular tienta, pero mezclás tu vida personal." },
    { q: "Si cocinás y revisás el celular cada 2 minutos, ¿qué conviene?", opciones: ["Responder cada mensaje al instante","No responder nunca","Responder en momentos fijos del día","Poner el celular en la olla"], correcta: 2, explicacion: "Momentos fijos te dejan trabajar. Responder al instante tienta para vender más, pero te descuida lo demás." },
    { q: "Abriste un mensaje y no podés responder ahora. ¿Qué hacés?", opciones: ["Lo marcás como no leído","Lo archivás","Lo borrás","Lo dejás y confiás en acordarte"], correcta: 0, explicacion: "Así no se te olvida. Archivarlo tienta para limpiar, pero lo escondés." },
    { q: "Terminaste un pedido y querés limpiar la lista de chats. ¿Qué hacés?", opciones: ["Lo borrás","Bloqueás al cliente","Lo dejás arriba de todo","Lo archivás: vuelve si el cliente escribe"], correcta: 3, explicacion: "Archivar no borra el historial. Borrarlo tienta para limpiar, pero perdés la conversación." },
    { q: "Un cliente te escribe a las 2 de la mañana. ¿Qué hacés?", opciones: ["Respondés enseguida","Dejás que actúe el mensaje de ausencia y respondés en horario","Lo bloqueás","Le reprochás la hora"], correcta: 1, explicacion: "Responder de madrugada enseña que estás siempre. Responder enseguida tienta para no perder la venta, pero te agota." },
  ],
},
{
  id: "vender",
  icono: "🛒",
  titulo: "De la consulta a la venta",
  nivel: "Intermedio",
  objetivos: [
    "Hacer preguntas para entender qué necesita el cliente antes de ofrecer",
    "Confirmar cada pedido con un resumen completo por escrito",
    "Cobrar y hacer seguimiento sin presionar",
  ],
  lecciones: [
    { titulo: "Preguntar antes de ofrecer", html: `
      <p class="idea">Muchas consultas no se vuelven ventas porque <strong>respondemos sin entender qué necesita</strong> el cliente. Una o dos preguntas cortas te dejan ofrecer justo lo que busca.</p>
      <pre><code>Cliente: "Hola, ¿qué viandas tenés?"

Sin preguntar:  (le mandás las 12 opciones con precios)

Preguntando:
"¡Hola! Tengo varias opciones 😊 ¿Es para vos o para varias
personas? ¿Buscás algo en especial (liviano, sin carne...)?"

Cliente: "Para mí, para la semana, algo liviano"

"¡Genial! Te recomiendo el pack de 5 livianas: ensalada de pollo,
tarta de verdura, wok de vegetales, lentejas y pescado al horno.
Sale $11.000 con envío gratis en el centro. ¿Te lo anoto para
el lunes?"</code></pre>
      <table>
        <tr><th>Pregunta útil</th><th>Para qué</th></tr>
        <tr><td>¿Para quién es? ¿Para cuántos?</td><td>Ofrecer la cantidad justa</td></tr>
        <tr><td>¿Para cuándo lo necesitás?</td><td>Saber si llegás y armar la entrega</td></tr>
        <tr><td>¿Buscás algo en especial?</td><td>Recomendar la opción que le sirve</td></tr>
        <tr><td>¿Ya probaste alguna?</td><td>Saber si es cliente nuevo o vuelve</td></tr>
      </table>
      <p><strong>Una o dos preguntas, no un interrogatorio:</strong> si preguntás demasiado, el cliente se cansa. Lo justo para recomendar bien.</p>
      <p><strong>Recomendá, no solo listes:</strong> "te recomiendo" ayuda a decidir. Con 12 opciones sin guía, mucha gente no elige ninguna.</p>
      <p>Más técnicas para entender al cliente y cerrar una venta están en el curso de <strong>Ventas</strong> de este sitio.</p>
      <p>Por ejemplo, Matías mandaba la lista completa a cada consulta y pocas se convertían en pedido. Desde que pregunta "¿para vos o para varios?", recomienda un pack y la mitad de las consultas terminan en venta.</p>` },
    { titulo: "El resumen del pedido", html: `
      <p class="idea">Antes de preparar nada, mandá un <strong>resumen del pedido</strong> y pedí que lo confirme. Así los dos tienen lo mismo por escrito y se evitan la mayoría de los reclamos.</p>
      <pre><code>"Te paso el resumen para confirmar:

🍲 Pack 5 viandas livianas ........ $11.000
🚚 Envío (centro) .................. gratis
💰 Total ......................... $11.000

📅 Entrega: lunes 11/3, entre 11:30 y 13 h
📍 Dirección: Belgrano 123, 2.° B
💳 Pago: transferencia al alias VIANDAS.MATI
   (mandame el comprobante, por favor)

¿Está todo bien? Respondé "confirmo" y lo preparo 🙌"</code></pre>
      <table>
        <tr><th>El resumen tiene que decir</th><th>Por qué</th></tr>
        <tr><td>Qué lleva, con cantidades</td><td>Que no haya dudas de qué compró</td></tr>
        <tr><td>Precio de cada cosa y total, con envío</td><td>Nada de sorpresas al cobrar</td></tr>
        <tr><td>Día, horario y dirección de entrega</td><td>Que esté cuando llegás</td></tr>
        <tr><td>Forma de pago</td><td>Que sepa cómo y cuándo pagar</td></tr>
        <tr><td>Un pedido de confirmación</td><td>Que diga que sí, por escrito</td></tr>
      </table>
      <p><strong>La oferta te obliga:</strong> según la Ley de Defensa del Consumidor (24.240), lo que ofrecés y publicás (precio, condiciones, promociones con fecha) te obliga mientras lo ofrecés. Si publicaste un precio, tenés que respetarlo.</p>
      <p><strong>Guardalo como respuesta rápida:</strong> tené una plantilla del resumen y completá los datos de cada pedido.</p>
      <p>Por ejemplo, un cliente le reclamó a Matías que había pedido sin cebolla. Matías buscó el resumen confirmado: no decía nada de cebolla. Lo resolvió amablemente y desde entonces agregó "Aclaraciones:" al resumen.</p>` },
    { titulo: "Cobrar y hacer seguimiento", html: `
      <p class="idea">El cobro tiene que ser <strong>claro y seguro</strong>, y el seguimiento, <strong>amable y sin insistir</strong>. Un cliente bien atendido después de la venta vuelve a comprar.</p>
      <table>
        <tr><th>Forma de cobro</th><th>Cuidado</th></tr>
        <tr><td>Transferencia (alias o CBU/CVU)</td><td>Verificá en tu cuenta que la plata llegó; no alcanza con la captura del comprobante</td></tr>
        <tr><td>Link o código QR de pago</td><td>Generalo desde la app de tu banco o billetera; tiene comisión</td></tr>
        <tr><td>Efectivo al entregar</td><td>Llevá cambio; contá frente al cliente</td></tr>
      </table>
      <p><strong>Nunca pidas ni des claves ni códigos:</strong> para cobrar solo hace falta tu alias o CBU. Nadie necesita tu clave del banco ni el código que te llega por SMS (lo ves en el módulo de cuidados).</p>
      <pre><code>Seguimiento (sin molestar):
- Recordatorio de pago, una vez y amable:
  "¡Hola, Ana! Te recuerdo que para preparar tu pack
   necesito el comprobante antes de las 20 h. ¡Gracias!"
- Aviso de entrega: "Estoy saliendo, llego en 15 minutos."
- Después de entregar (al día siguiente):
  "¿Qué te parecieron las viandas? Cualquier comentario me sirve."</code></pre>
      <p><strong>Un recordatorio, no cinco:</strong> si el cliente no responde después de un recordatorio, dejalo. Insistir espanta.</p>
      <p><strong>Pedí opiniones:</strong> lo que te dicen después de comer es oro para mejorar, y una buena opinión la podés compartir (con su permiso) en tus estados.</p>
      <p>Por ejemplo, Matías empezó a preguntar "¿qué te parecieron?" al día siguiente. Una clienta le dijo que las porciones eran chicas para su hijo, y él sumó una vianda "grande" que hoy es la que más vende.</p>` },
  ],
  practica: [
    "Escribí 2 preguntas cortas para entender qué necesita un cliente nuevo y usalas en las próximas 5 consultas. Anotá cuántas terminaron en venta.",
    "Armá tu plantilla de resumen del pedido con los 5 datos de la tabla y guardala como respuesta rápida.",
    "Escribí tu mensaje de recordatorio de pago y el de \"¿qué te pareció?\", y anotá cuántas respuestas te llegaron en una semana.",
  ],
  recursos: [
    { t: "Curso de este sitio: Ventas", url: "https://pkeios.github.io/EiaLearning/ventas/" },
    { t: "Ley 24.240 de Defensa del Consumidor (texto)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/texto" },
    { t: "Defensa del Consumidor (Argentina): derechos y reclamos", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Un cliente pregunta \"¿qué viandas tenés?\". ¿Qué hacés primero?", opciones: ["Le mandás las 12 opciones","Le mandás el precio más caro","Una o dos preguntas para saber qué necesita","Le pedís la dirección"], correcta: 2, explicacion: "Preguntar te deja recomendar. Mandar todo tienta por completo, pero abruma y no elige." },
    { q: "Le hacés 10 preguntas seguidas a un cliente. ¿Qué pasa?", opciones: ["Se cansa: con una o dos alcanza","Compra más","Te agradece","Nada"], correcta: 0, explicacion: "Es un interrogatorio. \"Compra más\" tienta, pero la mayoría deja de responder." },
    { q: "Si sabés que el cliente quiere algo liviano para la semana, ¿qué le decís?", opciones: ["La lista completa sin recomendar","\"Fijate vos\"","Solo el precio más barato","\"Te recomiendo el pack de 5 livianas\" con precio y siguiente paso"], correcta: 3, explicacion: "Recomendar ayuda a decidir. La lista completa tienta, pero lo deja solo con la elección." },
    { q: "El cliente dijo \"quiero el pack\". ¿Qué hacés antes de preparar?", opciones: ["Lo preparás enseguida","Le mandás el resumen del pedido y pedís que confirme","Le cobrás sin decir el total","Esperás que pregunte"], correcta: 1, explicacion: "El resumen evita malentendidos. Prepararlo enseguida tienta por rápido, pero puede no ser lo que quería." },
    { q: "Si tu resumen dice el total, pero no aclara el envío, ¿qué problema puede haber?", opciones: ["Ninguno","Que el cliente pague de más siempre","Una sorpresa al cobrar si el envío se cobra aparte","Que no llegue"], correcta: 2, explicacion: "El total tiene que incluir todo. \"Ninguno\" tienta si el envío es gratis, pero hay que decirlo." },
    { q: "Publicaste una promo con fecha y precio. Un cliente la pide dentro de la fecha. ¿Qué hacés?", opciones: ["La respetás: la oferta te obliga mientras la ofrecés","Le decís que se terminó aunque no","Le cobrás el precio normal","Le pedís que espere otra promo"], correcta: 0, explicacion: "La Ley 24.240 dice que la oferta obliga. Cobrar el precio normal tienta, pero no corresponde." },
    { q: "Si un cliente reclama algo que no estaba en el resumen confirmado, ¿qué te ayuda?", opciones: ["Tu memoria","Discutir más fuerte","Bloquearlo","Tener el resumen confirmado por escrito"], correcta: 3, explicacion: "El resumen muestra qué se acordó. La memoria tienta, pero los dos recuerdan distinto." },
    { q: "Si te mandan la captura de una transferencia, ¿entregás?", opciones: ["Sí, la captura alcanza","Primero verificás en tu cuenta que la plata llegó","Sí, si la captura es nítida","Sí, si es un cliente nuevo"], correcta: 1, explicacion: "Las capturas se pueden falsificar. \"La captura alcanza\" tienta por confianza, pero podés perder la plata." },
    { q: "Para cobrarle a un cliente, ¿qué dato necesitás darle?", opciones: ["Tu clave del banco","El código que te llega por SMS","Tu alias o CBU","Tu DNI y tu clave"], correcta: 2, explicacion: "Para recibir plata alcanza con el alias. La clave tienta como \"dato del banco\", pero nunca se da." },
    { q: "Si una clienta no mandó el comprobante, ¿cuántos recordatorios le mandás?", opciones: ["Uno, amable","Uno cada hora","Ninguno y cancelás sin avisar","Cinco en el día"], correcta: 0, explicacion: "Uno alcanza; insistir espanta. Ninguno tienta para no molestar, pero un aviso amable ayuda." },
    { q: "Entregaste el pedido. ¿Qué hacés al día siguiente?", opciones: ["Nada","Le mandás la lista de precios de nuevo","Le pedís que te recomiende a 10 personas","Preguntás qué le pareció"], correcta: 3, explicacion: "Su opinión te ayuda a mejorar. Pedirle 10 recomendaciones tienta, pero es mucho para empezar." },
    { q: "Una clienta te dejó una opinión muy linda. ¿Podés compartirla en tus estados?", opciones: ["Sí, con su nombre y foto sin preguntar","Sí, pidiéndole permiso","No, nunca","Sí, inventándole una más linda"], correcta: 1, explicacion: "Su opinión es suya. Compartirla sin preguntar tienta por lo buena que es, pero expone sus datos." },
  ],
},
{
  id: "dificiles",
  icono: "🌧️",
  titulo: "Reclamos y situaciones difíciles",
  nivel: "Avanzado",
  objetivos: [
    "Responder un reclamo con los pasos: escuchar, disculparse, resolver y cumplir",
    "Manejar clientes enojados, regateos y desapariciones sin perder la calma",
    "Conocer los derechos del consumidor que aplican a las ventas por WhatsApp",
  ],
  lecciones: [
    { titulo: "Responder un reclamo", html: `
      <p class="idea">Un reclamo bien resuelto puede convertir a un cliente enojado en uno fiel. Seguí cuatro pasos: <strong>escuchar, disculparte, proponer una solución y cumplirla</strong>.</p>
      <pre><code>Cliente: "La vianda llegó fría y tarde. Muy mal."

1. Escuchar (y preguntar si hace falta):
   "Lamento mucho que haya pasado. ¿A qué hora te llegó?"
2. Disculparte, sin excusas largas:
   "Tenés razón, tendría que haber llegado antes de las 13 h.
    Te pido disculpas."
3. Proponer una solución concreta:
   "Mañana te mando la vianda sin cargo, y voy a salir más
    temprano para que llegue caliente."
4. Cumplir y cerrar:
   (al día siguiente) "¡Hola! Ya salió tu vianda. ¿Llegó bien?"</code></pre>
      <table>
        <tr><th>Sí</th><th>No</th></tr>
        <tr><td>Responder rápido y en privado</td><td>Ignorar el mensaje esperando que se olvide</td></tr>
        <tr><td>Disculparte aunque no sea 100% tu culpa (el cadete se demoró)</td><td>Echarle la culpa al cliente o a otro</td></tr>
        <tr><td>Una solución concreta y con fecha</td><td>"Vamos a ver qué podemos hacer"</td></tr>
        <tr><td>Contestar por escrito lo que acordaron</td><td>Resolver solo por audio sin dejar nada escrito</td></tr>
      </table>
      <p><strong>Las soluciones posibles:</strong> reponer el producto, devolver la plata, descontar en la próxima compra. Elegí lo que el cliente prefiera dentro de lo que podés.</p>
      <p><strong>Aprendé del reclamo:</strong> si dos clientes se quejan de lo mismo, hay algo para cambiar en tu forma de trabajar.</p>
      <p>Por ejemplo, la clienta de la vianda fría recibió la reposición y un mensaje al día siguiente. Hoy le encarga a Matías las viandas para toda su oficina.</p>` },
    { titulo: "Clientes enojados, regateos y desapariciones", html: `
      <p class="idea">Hay situaciones que se repiten en cualquier negocio. Tener pensada la respuesta te ayuda a <strong>mantener la calma y los límites</strong>.</p>
      <table>
        <tr><th>Situación</th><th>Respuesta posible</th></tr>
        <tr><td>Cliente que insulta</td><td>"Quiero ayudarte, pero así no puedo seguir la conversación. Si querés, lo retomamos con calma." Si sigue, dejás de responder.</td></tr>
        <tr><td>Regateo: "¿me lo dejás en $2.000?"</td><td>"Entiendo. El precio es $2.500 porque [razón]. Lo que sí puedo ofrecerte es el pack de 5, que sale $2.200 cada una."</td></tr>
        <tr><td>Pregunta el precio y desaparece</td><td>Un solo mensaje al día siguiente: "¡Hola! ¿Pudiste ver las opciones? Cualquier duda, acá estoy." Y no más.</td></tr>
        <tr><td>Pide algo que no hacés</td><td>"Eso no lo hago, pero te puedo ofrecer [alternativa]." O le recomendás a otro.</td></tr>
        <tr><td>Escribe fuera de horario esperando respuesta inmediata</td><td>Mensaje de ausencia y respuesta en horario, con amabilidad.</td></tr>
      </table>
      <p><strong>Regatear no es ofensa:</strong> es parte de comprar. Si bajás el precio a cada uno que pide, tu precio deja de tener sentido. Mejor ofrecer algo distinto (un pack, un envío gratis) que bajar sin razón.</p>
      <p><strong>Bloquear es el último recurso:</strong> para alguien que insulta o acosa después de que le pusiste un límite. No por un reclamo, aunque sea molesto.</p>
      <p><strong>Nunca escraches a un cliente</strong> en estados o redes, aunque tengas razón. Te perjudica a vos y puede tener consecuencias legales.</p>
      <p>Por ejemplo, un cliente le pedía siempre descuento a Matías. En lugar de bajarle el precio, le ofreció el pack semanal con precio por vianda más bajo. El cliente pasó a comprar 5 en lugar de 1.</p>` },
    { titulo: "Los derechos del cliente", html: `
      <p class="idea">Cuando vendés por WhatsApp, tus clientes tienen los <strong>mismos derechos</strong> que en un local, y algunos más por ser una venta a distancia. Conocerlos evita problemas.</p>
      <table>
        <tr><th>Derecho</th><th>Qué dice</th><th>Dónde está</th></tr>
        <tr><td>Información clara</td><td>Precio total, características y condiciones, sin letra chica engañosa</td><td>Ley 24.240 de Defensa del Consumidor</td></tr>
        <tr><td>La oferta y la publicidad obligan</td><td>Lo que publicaste (precio, promo con fecha) tenés que cumplirlo</td><td>Ley 24.240</td></tr>
        <tr><td>Arrepentirse de una compra a distancia</td><td>En las ventas a distancia (como por WhatsApp), el cliente puede revocar la compra dentro de los 10 días</td><td>Código Civil y Comercial, artículo 1110</td></tr>
        <tr><td>Reclamar</td><td>Si no se resuelve, puede hacer un reclamo ante Defensa del Consumidor</td><td>Defensa del Consumidor</td></tr>
      </table>
      <p><strong>Revocar</strong> quiere decir echarse atrás de la compra: devolver el producto y que le devuelvas la plata. Hay excepciones según el tipo de producto (por ejemplo, cosas hechas a medida o que se echan a perder rápido, como la comida), que están en el Código Civil y Comercial.</p>
      <p><strong>Esta lección te orienta, pero no reemplaza a un abogado</strong> ni a lo que te diga Defensa del Consumidor. Si tenés un caso concreto, consultá.</p>
      <p><strong>Lo más simple es prevenir:</strong> información clara, resumen confirmado y buena atención evitan casi todos los problemas.</p>
      <p>Por ejemplo, una emprendedora amiga de Matías, que vende remeras, recibió el pedido de devolver una remera a los 5 días. Le explicó cómo devolverla y le reintegró la plata: la clienta le volvió a comprar en otra talla.</p>` },
  ],
  practica: [
    "Escribí tu respuesta a un reclamo de ejemplo siguiendo los 4 pasos y anotá qué solución concreta ofreciste.",
    "Escribí tu respuesta a un regateo ofreciendo una alternativa en lugar de bajar el precio, y anotá cuánto sale esa alternativa por unidad.",
    "Leé el artículo 1110 del Código Civil y Comercial y anotá en 2 líneas qué derecho tiene tu cliente y desde cuándo corren los 10 días.",
  ],
  recursos: [
    { t: "Defensa del Consumidor (Argentina): derechos y reclamos", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
    { t: "Código Civil y Comercial (el artículo 1110 trata la revocación en ventas a distancia)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/texto" },
    { t: "Curso de este sitio: Atención al cliente", url: "https://pkeios.github.io/EiaLearning/atencion-cliente/" },
  ],
  quiz: [
    { q: "Si un cliente escribe \"la vianda llegó fría y tarde\", ¿qué es lo primero?", opciones: ["Explicar que el tránsito estaba terrible","Decirle que nadie más se quejó","Escuchar y preguntar lo que haga falta, sin excusas","No responder"], correcta: 2, explicacion: "Escuchar baja la tensión. La excusa del tránsito tienta, pero suena a que no te importa." },
    { q: "El cadete se demoró, no fue tu culpa directa. ¿Te disculpás?", opciones: ["Sí: el cliente no tiene por qué saber de quién fue","No, culpás al cadete","No, si no fue tu culpa","Solo si insiste"], correcta: 0, explicacion: "Para el cliente, el negocio sos vos. Culpar al cadete tienta, pero no le resuelve nada." },
    { q: "Si le respondés a un reclamo \"vamos a ver qué podemos hacer\", ¿qué falta?", opciones: ["Más emojis","Un audio","Nada","Una solución concreta con fecha"], correcta: 3, explicacion: "Lo vago enoja más. Un audio tienta por cálido, pero sigue sin solución." },
    { q: "Si dos clientes se quejaron de que las viandas llegan frías, ¿qué te dice eso?", opciones: ["Que son exigentes","Que hay algo para cambiar en tu forma de entregar","Que es casualidad","Que hay que bloquearlos"], correcta: 1, explicacion: "Un reclamo repetido señala un problema. \"Son exigentes\" tienta, pero el problema es tuyo." },
    { q: "Un cliente te insulta. ¿Qué hacés?", opciones: ["Lo insultás también","Lo escrachás en tus estados","Ponés un límite con calma y, si sigue, dejás de responder","Le bajás el precio para calmarlo"], correcta: 2, explicacion: "Un límite claro protege tu negocio. Escracharlo tienta si tenés razón, pero te perjudica." },
    { q: "Te piden \"¿me lo dejás en $2.000?\" y vale $2.500. ¿Qué conviene?", opciones: ["Explicar el precio y ofrecer una alternativa, como un pack","Bajarlo siempre","Ofenderte","No responder"], correcta: 0, explicacion: "Una alternativa da valor sin bajar el precio. Bajarlo siempre tienta para vender, pero tu precio pierde sentido." },
    { q: "Alguien pregunta el precio y no responde más. ¿Qué hacés?", opciones: ["Un mensaje cada día","Lo llamás por teléfono","Lo agregás a un grupo de promos","Un solo mensaje al día siguiente y nada más"], correcta: 3, explicacion: "Uno amable alcanza. Un mensaje por día tienta para no perderlo, pero molesta." },
    { q: "¿Cuándo corresponde bloquear a un cliente?", opciones: ["Si hace un reclamo","Si insulta o acosa después de que le pusiste un límite","Si regatea","Si tarda en pagar"], correcta: 1, explicacion: "Es el último recurso. Bloquear por un reclamo tienta si molesta, pero es un cliente con derecho a reclamar." },
    { q: "Si vendés por WhatsApp, ¿tus clientes tienen los derechos del consumidor?", opciones: ["No, por WhatsApp no aplica","Solo si tenés local","Sí, los mismos que en un local y algunos más por ser a distancia","Solo si facturás"], correcta: 2, explicacion: "La venta a distancia también está protegida. \"No aplica\" tienta por informal, pero sí aplica." },
    { q: "En una venta a distancia, ¿cuántos días tiene el cliente para revocar la compra según el Código Civil y Comercial?", opciones: ["10 días","1 día","30 días","No tiene ese derecho"], correcta: 0, explicacion: "El artículo 1110 dice 10 días. \"No tiene ese derecho\" tienta por ser venta informal, pero lo tiene, con excepciones." },
    { q: "¿Qué quiere decir revocar una compra?", opciones: ["Cambiar el precio","Pedir un descuento","Comprar otra vez","Echarse atrás: devolver el producto y recibir la plata"], correcta: 3, explicacion: "Es arrepentirse de la compra. Pedir descuento tienta por parecido, pero es otra cosa." },
    { q: "Tenés un caso concreto de devolución y no sabés qué te corresponde. ¿Qué hacés?", opciones: ["Decidís lo que te convenga","Consultás a Defensa del Consumidor o a un abogado","Le decís al cliente que no tiene derechos","Lo ignorás"], correcta: 1, explicacion: "La lección orienta, pero no reemplaza a un profesional. Decidir lo que te convenga tienta, pero puede traerte un reclamo." },
  ],
},
{
  id: "cuidados",
  icono: "🔐",
  titulo: "Seguridad, datos y difusión",
  nivel: "Avanzado",
  objetivos: [
    "Proteger tu cuenta con la verificación en dos pasos y reconocer las estafas más comunes",
    "Cuidar los datos de tus clientes",
    "Enviar novedades sin hacer spam, solo a quien quiere recibirlas",
  ],
  lecciones: [
    { titulo: "Proteger tu cuenta", video: {"id":"LuiCdFW_ofQ","t":"Cómo usar la verificación en dos pasos en WhatsApp · WhatsApp (1:05)"}, html: `
      <p class="idea">Si te roban la cuenta de WhatsApp, te roban el negocio: los chats, los clientes y la confianza. La <strong>verificación en dos pasos</strong> es la protección más importante, y lleva un minuto.</p>
      <pre><code>Activar la verificación en dos pasos:
Configuración → Cuenta → Verificación en dos pasos → Activar
1. Elegí un PIN de 6 números que no sea tu fecha de nacimiento.
2. Agregá un correo para recuperarlo si te lo olvidás.
3. Anotá el PIN en un lugar seguro (no en el mismo celular).</code></pre>
      <table>
        <tr><th>Estafa común</th><th>Cómo es</th><th>Qué hacés</th></tr>
        <tr><td>Robo de cuenta</td><td>"Te mandé un código por error, ¿me lo pasás?"</td><td>Nunca pases el código de 6 números que te llega por SMS</td></tr>
        <tr><td>Comprobante falso</td><td>Te mandan una captura de una transferencia que nunca se hizo</td><td>Entregá solo cuando ves la plata en tu cuenta</td></tr>
        <tr><td>Falso soporte</td><td>"Somos WhatsApp, tu cuenta será suspendida, verificá acá"</td><td>WhatsApp no te escribe así; no toques enlaces</td></tr>
        <tr><td>Pedido grande con pago "después"</td><td>Un pedido enorme de alguien desconocido que quiere pagar al recibir lejos</td><td>Pedí seña o pago anticipado</td></tr>
      </table>
      <p><strong>El código de 6 números</strong> que te llega por SMS es la llave de tu cuenta. Quien lo tiene puede instalar tu WhatsApp en otro celular. Ni siquiera a un "amigo" que te lo pide.</p>
      <p>Para más sobre estafas y cómo protegerte, está el curso de <strong>Seguridad digital y estafas</strong> de este sitio.</p>
      <p>Por ejemplo, a una vecina de Matías le robaron la cuenta del negocio y pidieron plata a sus clientes en su nombre. Esa misma tarde, Matías activó la verificación en dos pasos.</p>` },
    { titulo: "Los datos de tus clientes", html: `
      <p class="idea">Los números, nombres y direcciones de tus clientes son <strong>datos personales</strong>. Te los confiaron para comprarte, no para otra cosa. En Argentina los protege la <strong>Ley 25.326</strong>.</p>
      <table>
        <tr><th>Sí</th><th>No</th></tr>
        <tr><td>Usar los datos para el pedido y la entrega</td><td>Pasar números de clientes a otros negocios</td></tr>
        <tr><td>Guardar la planilla de pedidos en un lugar con clave</td><td>Dejar la lista de direcciones a la vista de cualquiera</td></tr>
        <tr><td>Pedir permiso antes de agregar a alguien a una lista de novedades</td><td>Agregar a un grupo a todos tus clientes sin preguntar</td></tr>
        <tr><td>Borrar lo que ya no necesitás</td><td>Guardar fotos de DNI que no hacen falta</td></tr>
      </table>
      <p><strong>Grupos: cuidado.</strong> Si armás un grupo con clientes, todos ven el número de todos. Eso expone sus datos a desconocidos. Para mandar novedades, mejor otras opciones (próxima lección).</p>
      <p><strong>Capturas de pantalla:</strong> si compartís una captura de un chat (por ejemplo, una opinión), tapá el número y el nombre, salvo que la persona te dé permiso.</p>
      <p><strong>Si alguien te ayuda</strong> a atender, explicale estas reglas y usá el número del negocio, no el tuyo personal.</p>
      <p>La <strong>AAIP</strong> (Agencia de Acceso a la Información Pública) es el organismo que controla el uso de datos personales y recibe reclamos.</p>
      <p>Por ejemplo, un proveedor le pidió a Matías "la lista de tus clientes para mandarles una promo". Matías le dijo que no podía compartirla y le ofreció mencionar la promo él mismo en sus estados.</p>` },
    { titulo: "Novedades sin spam", html: `
      <p class="idea">Avisar novedades vende, pero <strong>el spam espanta</strong> y puede hacer que WhatsApp te limite la cuenta. Mandá solo a quien quiere recibir, con poca frecuencia y algo útil.</p>
      <table>
        <tr><th>Forma</th><th>Cómo funciona</th><th>Ojo</th></tr>
        <tr><td>Estados de WhatsApp</td><td>Lo ven tus contactos que te tienen agendado, si quieren</td><td>La forma más respetuosa: nadie recibe un mensaje</td></tr>
        <tr><td>Listas de difusión</td><td>Un mensaje a varios contactos, que lo reciben como chat individual</td><td>Solo les llega a quienes guardaron tu número; WhatsApp está cambiando estas funciones y algunas tienen límites o costo: revisá lo que ofrece tu app hoy</td></tr>
        <tr><td>Canal de WhatsApp</td><td>La gente se suscribe a tu canal y ve tus novedades</td><td>Solo lo ve quien se une</td></tr>
        <tr><td>Grupo</td><td>Todos hablan con todos</td><td>Expone los números de todos: evitalo para clientes</td></tr>
      </table>
      <pre><code>Reglas para no hacer spam:
1. Preguntá antes: "¿Querés que te avise del menú cada domingo?"
2. Poca frecuencia: una vez por semana, como máximo.
3. Algo útil: menú, precios, un descuento real. No "¡Hola! 😊" vacío.
4. Fácil de salir: "Si no querés recibir más, respondé BAJA."
5. Si alguien pide salir: lo sacás ese mismo día.</code></pre>
      <p><strong>Si muchos te bloquean o reportan</strong> como spam, WhatsApp puede restringir tu cuenta. Por eso conviene mandar solo a quien aceptó.</p>
      <p><strong>Las condiciones cambian:</strong> WhatsApp modifica seguido cómo funcionan las difusiones para empresas. Revisá el centro de ayuda antes de armar tu sistema de novedades.</p>
      <p>Por ejemplo, Matías preguntó a sus clientes quiénes querían recibir el menú. 40 dijeron que sí. Les manda una vez por semana y el lunes recibe la mitad de los pedidos de la semana.</p>` },
  ],
  practica: [
    "Activá la verificación en dos pasos en tu WhatsApp Business y anotá dónde guardaste el PIN (sin escribir el PIN).",
    "Revisá dónde guardás los datos de tus clientes y anotá 2 cosas que vas a cambiar para cuidarlos mejor.",
    "Escribí tu mensaje para preguntar si quieren recibir novedades y tu mensaje semanal con la opción de salir, y anotá cuántas personas aceptaron recibirlas.",
  ],
  recursos: [
    { t: "Curso de este sitio: Seguridad digital y estafas", url: "https://pkeios.github.io/EiaLearning/seguridad-digital/" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "Centro de ayuda de WhatsApp (en castellano)", url: "https://faq.whatsapp.com/" },
  ],
  quiz: [
    { q: "Querés proteger tu cuenta del negocio. ¿Qué activás primero?", opciones: ["Las notificaciones","El modo oscuro","La verificación en dos pasos","La copia de seguridad solamente"], correcta: 2, explicacion: "Pide un PIN para instalar tu cuenta en otro celular. La copia tienta, pero no impide el robo." },
    { q: "Elegís el PIN de la verificación en dos pasos. ¿Cuál conviene?", opciones: ["6 números que no sean tu fecha de nacimiento","123456","Tu fecha de nacimiento","El número de tu casa"], correcta: 0, explicacion: "Tiene que ser difícil de adivinar. La fecha de nacimiento tienta por fácil de recordar, pero es lo primero que prueban." },
    { q: "Un \"amigo\" te escribe: \"te mandé un código por error, ¿me lo pasás?\". ¿Qué hacés?", opciones: ["Se lo pasás, es un amigo","Se lo pasás si insiste","Le pasás la mitad","No lo pasás: es la llave de tu cuenta"], correcta: 3, explicacion: "Con ese código instalan tu WhatsApp. \"Es un amigo\" tienta, pero su cuenta puede estar robada." },
    { q: "Si te mandan la captura de una transferencia de un pedido grande, ¿cuándo entregás?", opciones: ["Al recibir la captura","Cuando ves la plata en tu cuenta","Si la captura tiene el logo del banco","Si el cliente es amable"], correcta: 1, explicacion: "Las capturas se falsifican fácil. El logo tienta como prueba, pero se copia." },
    { q: "Te llega un mensaje \"Somos WhatsApp, verificá tu cuenta en este enlace\". ¿Qué hacés?", opciones: ["Lo tocás por las dudas","Ponés tus datos","No tocás el enlace: WhatsApp no te escribe así","Lo reenviás a tus clientes"], correcta: 2, explicacion: "Es una estafa típica. \"Por las dudas\" tienta por miedo a perder la cuenta, pero así la perdés." },
    { q: "Si un desconocido hace un pedido enorme y quiere pagar al recibir lejos, ¿qué pedís?", opciones: ["Una seña o el pago anticipado","Nada, se lo llevás","Su foto","Que te pase su clave"], correcta: 0, explicacion: "La seña te protege. Llevarlo sin más tienta por la venta grande, pero puede ser una estafa." },
    { q: "Un proveedor te pide la lista de tus clientes para mandar promos. ¿Qué hacés?", opciones: ["Se la pasás, es para algo bueno","Le pasás la mitad","Se la vendés","No la compartís: te dieron sus datos para comprarte a vos"], correcta: 3, explicacion: "Son datos personales protegidos. \"Es para algo bueno\" tienta, pero ellos no aceptaron." },
    { q: "Querés mandarles el menú a todos tus clientes. ¿Por qué no un grupo?", opciones: ["Porque es más caro","Porque todos ven el número de todos","Porque no entran fotos","Porque se ve feo"], correcta: 1, explicacion: "Un grupo expone los datos. \"Es más caro\" tienta como razón, pero es gratis: el problema son los datos." },
    { q: "Vas a compartir una captura de una opinión de un cliente. ¿Qué hacés?", opciones: ["La subís tal cual","Le cambiás el texto","Tapás el nombre y el número, salvo que te dé permiso","La mandás a un grupo"], correcta: 2, explicacion: "Protegés sus datos. Tal cual tienta por auténtica, pero lo expone." },
    { q: "Querés empezar a mandar novedades. ¿Qué hacés primero?", opciones: ["Preguntás quién quiere recibirlas","Mandás a todos tus contactos","Armás un grupo con todos","Mandás todos los días"], correcta: 0, explicacion: "Solo a quien acepta. Mandar a todos tienta para llegar a más, pero es spam." },
    { q: "Alguien responde \"BAJA\" a tus novedades. ¿Qué hacés?", opciones: ["Le preguntás por qué","Le mandás una promo especial","Lo dejás un mes más","Lo sacás ese mismo día"], correcta: 3, explicacion: "Respetar el pedido es la regla. La promo especial tienta para retenerlo, pero ya dijo que no." },
    { q: "Si muchos te reportan como spam, ¿qué puede pasar?", opciones: ["Nada","WhatsApp puede restringir tu cuenta","Te dan más alcance","Te regalan una cuenta nueva"], correcta: 1, explicacion: "Los reportes tienen consecuencias. \"Nada\" tienta si no pasó antes, pero puede pasar." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu WhatsApp de negocio listo",
  nivel: "Avanzado",
  objetivos: [
    "Configurar tu WhatsApp Business completo: perfil, mensajes, respuestas, catálogo y etiquetas",
    "Armar tu guía de respuestas para las situaciones más comunes",
    "Evaluar tu atención con una rúbrica y un cliente de prueba",
  ],
  lecciones: [
    { titulo: "Configurar todo", html: `
      <p class="idea">El proyecto es dejar tu <strong>WhatsApp de negocio listo para atender</strong>, con todo lo que viste en el curso. Si todavía no tenés negocio, armalo para uno que te gustaría tener.</p>
      <pre><code>Lista de configuración:
[ ] Número para el negocio (o decisión tomada de usar el tuyo)
[ ] WhatsApp Business instalado, con copia de seguridad
[ ] Perfil completo: nombre, foto, descripción, horario, zona
[ ] Verificación en dos pasos activada
[ ] Mensaje de bienvenida
[ ] Mensaje de ausencia programado fuera de horario
[ ] 4 respuestas rápidas (precios, pago, envío, resumen)
[ ] Catálogo con al menos 3 productos
[ ] 5 o 6 etiquetas de estado
[ ] Enlace wa.me y código QR probados
[ ] Planilla o cuaderno de pedidos</code></pre>
      <table>
        <tr><th>Si te trabás en...</th><th>Volvé al módulo...</th></tr>
        <tr><td>Perfil, enlace o QR</td><td>WhatsApp Business: empezar bien</td></tr>
        <tr><td>Mensajes automáticos, respuestas rápidas, catálogo</td><td>Las herramientas que te ahorran tiempo</td></tr>
        <tr><td>Etiquetas y lista de pedidos</td><td>Ordenar los chats y los pedidos</td></tr>
        <tr><td>Verificación en dos pasos</td><td>Seguridad, datos y difusión</td></tr>
      </table>
      <p><strong>Hacelo en partes:</strong> un día el perfil y la seguridad, otro los mensajes y las respuestas, otro el catálogo y las etiquetas. Son unas 2 a 3 horas en total.</p>
      <p>Por ejemplo, Matías hizo la lista en tres tardes. La última casilla que marcó fue el QR: lo probó desde el celular de su hermana antes de imprimir los imanes.</p>` },
    { titulo: "Tu guía de respuestas", html: `
      <p class="idea">Una <strong>guía de respuestas</strong> es un documento con cómo responder a cada situación. Te ayuda a vos en los días complicados y a cualquiera que te ayude a atender.</p>
      <table>
        <tr><th>Situación</th><th>Tu respuesta (escribila vos)</th></tr>
        <tr><td>Primera consulta</td><td>Saludo + 1 o 2 preguntas</td></tr>
        <tr><td>Pregunta de precio</td><td>Precio + qué incluye + envío + siguiente paso</td></tr>
        <tr><td>Confirmación de pedido</td><td>Resumen con los 5 datos</td></tr>
        <tr><td>Recordatorio de pago</td><td>Uno, amable, con hora límite</td></tr>
        <tr><td>Reclamo</td><td>Escuchar, disculparse, solución con fecha, cumplir</td></tr>
        <tr><td>Regateo</td><td>Razón del precio + alternativa</td></tr>
        <tr><td>Cliente que desaparece</td><td>Un mensaje al día siguiente</td></tr>
        <tr><td>Insulto</td><td>Límite con calma</td></tr>
        <tr><td>Pedido de baja de novedades</td><td>Confirmar y sacarlo ese día</td></tr>
      </table>
      <pre><code>Cómo armarla:
1. Copiá la tabla en un documento o en tu cuaderno.
2. Escribí tu respuesta real para cada situación, con tus palabras.
3. Las más usadas, guardalas también como respuestas rápidas.
4. Revisala cada mes: ¿apareció una situación nueva?</code></pre>
      <p><strong>Con tus palabras:</strong> la guía tiene que sonar a vos. Las respuestas del curso son ejemplos; adaptalas a tu negocio y a tu forma de hablar.</p>
      <p>Por ejemplo, cuando Matías se enfermó una semana, su hermana atendió el WhatsApp con la guía de respuestas. Los clientes ni notaron el cambio.</p>` },
    { titulo: "Probar y evaluar con la rúbrica", html: `
      <p class="idea">Antes de dar por terminado, <strong>probá tu atención</strong> con un cliente de prueba y evaluala con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <pre><code>Cliente de prueba:
Pedile a un familiar o amigo que te escriba como cliente desde su celular:
1. Que use tu enlace o QR.
2. Que pregunte el precio de algo.
3. Que haga un pedido y lo confirme.
4. Que se queje de algo inventado.
Después preguntale: ¿qué fue fácil? ¿qué fue confuso?</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Configuración</td><td>Lista completa</td><td>Faltan 1 o 2 casillas</td><td>Faltan más</td></tr>
        <tr><td>Seguridad</td><td>Dos pasos activado y reglas de datos claras</td><td>Solo una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Respuestas</td><td>Saludo, respuesta y siguiente paso siempre</td><td>A veces</td><td>Respuestas sueltas</td></tr>
        <tr><td>Pedido</td><td>Resumen confirmado y anotado en la lista</td><td>Solo una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Reclamo</td><td>Los 4 pasos</td><td>Faltó la solución concreta</td><td>Excusas o sin respuesta</td></tr>
        <tr><td>Guía de respuestas</td><td>Las 9 situaciones escritas</td><td>Más de la mitad</td><td>Menos de la mitad</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → listo para atender
7 a 9   → mejorá el criterio más bajo y repetí la prueba
0 a 6   → repasá los módulos de herramientas y de ventas</code></pre>
      <p><strong>Medí después de un mes:</strong> cuántas consultas se volvieron ventas, cuántos reclamos hubo y cuánto tiempo te lleva atender por día. Así sabés si mejoró.</p>
      <p>Por ejemplo, la hermana de Matías hizo de cliente de prueba y le dijo que el resumen no decía la hora de entrega. Matías lo agregó a su plantilla y sacó 12 de 12.</p>` },
  ],
  practica: [
    "Completá la lista de configuración y anotá cuántas casillas marcaste de 11.",
    "Escribí tu guía de respuestas con las 9 situaciones y anotá cuál te costó más.",
    "Hacé la prueba con un cliente de prueba, puntuá con la rúbrica y anotá tu total de 12 y qué vas a mejorar.",
    "Después de un mes, anotá cuántas consultas terminaron en venta y compará con el mes anterior.",
  ],
  recursos: [
    { t: "WhatsApp Business: la app gratis para negocios (página oficial)", url: "https://business.whatsapp.com/products/business-app" },
    { t: "Curso de este sitio: Atención al cliente", url: "https://pkeios.github.io/EiaLearning/atencion-cliente/" },
    { t: "Centro de ayuda de WhatsApp (en castellano)", url: "https://faq.whatsapp.com/" },
  ],
  quiz: [
    { q: "Todavía no tenés negocio. ¿Podés hacer el proyecto?", opciones: ["No, hace falta un negocio","Solo leyendo","Sí, armándolo para un negocio que te gustaría tener","Solo si comprás un chip"], correcta: 2, explicacion: "Practicar antes te prepara. \"Hace falta un negocio\" tienta, pero podés simularlo." },
    { q: "¿Cuánto tiempo lleva más o menos configurar todo?", opciones: ["Unas 2 a 3 horas, mejor en partes","5 minutos","Un mes entero","Una semana sin parar"], correcta: 0, explicacion: "Es un trabajo de unas horas. 5 minutos tienta, pero son muchas cosas para hacer bien." },
    { q: "En tu lista falta la verificación en dos pasos. ¿Qué módulo repasás?", opciones: ["Escribirle a un cliente","Las herramientas que te ahorran tiempo","Ninguno","Seguridad, datos y difusión"], correcta: 3, explicacion: "Ahí está cómo activarla. Herramientas tienta, pero trata otros temas." },
    { q: "¿Para qué sirve una guía de respuestas?", opciones: ["Para reemplazarte con un robot","Para responder bien en los días complicados y que otro pueda atender igual","Para nada, cada caso es distinto","Para mostrarla en el perfil"], correcta: 1, explicacion: "Ordena tu atención. \"Cada caso es distinto\" tienta, pero las situaciones se repiten." },
    { q: "Si copiaste las respuestas del curso palabra por palabra, ¿qué mejorás?", opciones: ["Nada","Les agregás emojis","Las adaptás a tus palabras y tu negocio","Las hacés más largas"], correcta: 2, explicacion: "Tiene que sonar a vos. \"Nada\" tienta porque son buenas, pero son de ejemplo." },
    { q: "Una respuesta de tu guía la usás todos los días. ¿Qué hacés con ella?", opciones: ["La guardás también como respuesta rápida","La borrás de la guía","La escribís a mano cada vez","La mandás en audio"], correcta: 0, explicacion: "Así la mandás en un toque. Escribirla a mano tienta, pero gastás tiempo." },
    { q: "Querés saber si tu atención funciona. ¿Qué hacés?", opciones: ["Leés tus mensajes vos mismo","Esperás reclamos","Le preguntás a la IA","Probás con un cliente de prueba y le preguntás qué fue confuso"], correcta: 3, explicacion: "Otra persona ve lo que vos no. Leerlos vos tienta, pero ya sabés lo que quisiste decir." },
    { q: "Si en la prueba, respondiste el reclamo sin solución concreta, ¿cuántos puntos sacás en \"Reclamo\"?", opciones: ["2","1","0","12"], correcta: 1, explicacion: "Faltó la solución: 1 punto. 2 tienta porque respondiste, pero faltó lo más importante." },
    { q: "Tu resumen no decía la hora de entrega. ¿Qué cambiás?", opciones: ["Nada, el cliente pregunta","Lo decís por audio","Agregás la hora a tu plantilla de resumen","Quitás la fecha también"], correcta: 2, explicacion: "Así no falta nunca más. \"El cliente pregunta\" tienta, pero genera idas y vueltas." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Mejorás el criterio más bajo y repetís la prueba","Abandonás","Empezás el curso de cero","Cambiás de número"], correcta: 0, explicacion: "De 7 a 9, falta pulir. Empezar de cero tienta, pero no hace falta." },
    { q: "Pasó un mes con todo configurado. ¿Qué medís?", opciones: ["Cuántos emojis usaste","Nada","Solo cuántos mensajes llegaron","Cuántas consultas se volvieron ventas, cuántos reclamos y cuánto tiempo atendés"], correcta: 3, explicacion: "Esos números dicen si mejoró. Solo los mensajes tienta, pero no dice si vendiste." },
    { q: "Si te enfermás una semana, ¿qué permite que otra persona atienda bien?", opciones: ["Darle tu celular personal","La guía de respuestas y el número del negocio","Cerrar el negocio sin avisar","Que improvise"], correcta: 1, explicacion: "La guía y el número aparte permiten delegar. Tu celular personal tienta, pero mezcla tu vida privada." },
  ],
},
];
