// Temario del curso "Internet para adultos mayores". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js adultos-mayores-digital y node tools/metodologia.js adultos-mayores-digital
window.TEMARIO = [
{
  id: "empezar",
  icono: "📱",
  titulo: "Primeros pasos con el celular",
  nivel: "Básico",
  objetivos: [
    "Conectar el celular al wifi de tu casa y saber cuándo usás datos",
    "Moverte por el celular: tocar, deslizar, volver atrás y agrandar la letra",
    "Instalar una app solo desde la tienda oficial",
  ],
  lecciones: [
    { titulo: "Internet, wifi y datos", html: `
      <p class="idea"><strong>Internet</strong> es una red que conecta celulares y computadoras de todo el mundo. Tu celular se conecta de dos formas: por <strong>wifi</strong> o con <strong>datos</strong>.</p>
      <table>
        <tr><th></th><th>Wifi</th><th>Datos móviles</th></tr>
        <tr><td>Qué es</td><td>La conexión de tu casa (o de un bar, una plaza)</td><td>La conexión que da la compañía del celular</td></tr>
        <tr><td>Dónde anda</td><td>Cerca del aparato que tiene el wifi (el módem)</td><td>En casi todos lados</td></tr>
        <tr><td>Cuánto cuesta</td><td>Ya lo pagás con el servicio de la casa</td><td>Se gasta del plan o de la carga del celular</td></tr>
      </table>
      <p>El <strong>módem</strong> es la cajita con lucecitas que instaló la empresa de internet. Abajo o atrás tiene una etiqueta con el nombre de la red y la <strong>contraseña del wifi</strong>.</p>
      <pre><code>Para conectarte al wifi:
1. Abrí Ajustes (el ícono de engranaje ⚙️).
2. Tocá Wifi (o Conexiones → Wifi).
3. Elegí el nombre de tu red.
4. Escribí la contraseña de la etiqueta del módem.
5. Arriba de la pantalla aparece el abanico del wifi.</code></pre>
      <p><strong>Cuidá los datos:</strong> los videos gastan muchos datos. Si podés, miralos con wifi.</p>
      <p>En todo el curso acompañamos a <strong>Norma, de 72 años</strong>, que vive en Lanús. Su hija le regaló un celular y Norma quiere hablar con sus nietos, buscar cosas y no caer en estafas. Lo que hace Norma lo podés hacer vos, a tu ritmo.</p>
      <p>Por ejemplo, Norma se conectó al wifi de su casa con la contraseña de la etiqueta. Ahora ve los videos de sus nietos sin gastar la carga del celular.</p>` },
    { titulo: "Tocar, deslizar y volver", html: `
      <p class="idea">El celular se maneja con los dedos. Con 3 o 4 movimientos ya podés hacer casi todo. Y si te perdés, siempre se puede <strong>volver atrás</strong>.</p>
      <table>
        <tr><th>Movimiento</th><th>Cómo se hace</th><th>Para qué sirve</th></tr>
        <tr><td>Tocar</td><td>Un toque corto con la yema del dedo</td><td>Abrir una app o apretar un botón</td></tr>
        <tr><td>Mantener</td><td>Dejar el dedo apoyado 2 segundos</td><td>Ver más opciones</td></tr>
        <tr><td>Deslizar</td><td>Arrastrar el dedo hacia arriba o abajo</td><td>Leer más, como pasar las páginas</td></tr>
        <tr><td>Pellizcar</td><td>Separar dos dedos sobre la pantalla</td><td>Agrandar una foto o un texto</td></tr>
      </table>
      <p><strong>Si te perdés:</strong> tocá la flecha de <strong>volver</strong> (←), abajo o arriba a la izquierda, según el celular. Para ir a la pantalla principal, tocá el botón o la rayita de abajo al medio. No se rompe nada por tocar.</p>
      <p><strong>Agrandar la letra:</strong> si te cuesta leer, se puede poner la letra más grande en todo el celular.</p>
      <pre><code>Android: Ajustes → Pantalla → Tamaño de fuente
iPhone:  Ajustes → Pantalla y brillo → Tamaño del texto
(los nombres pueden cambiar un poco según la marca)</code></pre>
      <p>Por ejemplo, Norma agrandó la letra dos puntos y ahora lee los mensajes sin anteojos. Cuando se pierde en una app, toca la flecha de volver hasta llegar a la pantalla principal.</p>` },
    { titulo: "Las apps y la tienda oficial", html: `
      <p class="idea">Una <strong>app</strong> (aplicación) es un programa para hacer algo: WhatsApp para mensajes, la cámara para fotos. Las apps se bajan <strong>solo de la tienda oficial</strong>.</p>
      <table>
        <tr><th>Celular</th><th>Tienda oficial</th></tr>
        <tr><td>Android (Samsung, Motorola, Xiaomi y otros)</td><td>Play Store (un triángulo de colores)</td></tr>
        <tr><td>iPhone</td><td>App Store (una A azul)</td></tr>
      </table>
      <pre><code>Para instalar una app:
1. Abrí la tienda.
2. Tocá la lupa y escribí el nombre, por ejemplo "Mi PAMI".
3. Fijate que el que la publica sea el oficial.
4. Tocá Instalar. Muchas apps son gratis.</code></pre>
      <p><strong>Cuidados:</strong></p>
      <ul>
        <li>Nunca instales una app porque te lo pidió alguien por teléfono o por mensaje. Es una trampa común.</li>
        <li>Al abrirla, la app pide <strong>permisos</strong>: usar la cámara, el micrófono o tus contactos. Si una linterna pide tus contactos, es raro: no aceptes.</li>
        <li>Si la tienda te pide pagar y no sabés por qué, no toques nada y preguntá.</li>
      </ul>
      <p>Por ejemplo, Norma quería la app de PAMI. La buscó en la tienda, vio que la publicaba PAMI y la instaló gratis.</p>` },
  ],
  practica: [
    "Buscá la etiqueta de tu módem, conectá el celular al wifi y anotá el nombre de tu red.",
    "Agrandá la letra del celular y anotá en qué menú lo encontraste.",
    "Instalá una app útil desde la tienda oficial (por ejemplo, la del clima) y anotá quién la publica y qué permisos pidió.",
  ],
  recursos: [
    { t: "LearnFree (GCF): cursos gratis de computación e internet básicos (en inglés)", url: "https://www.learnfree.org/series/computer-basics" },
    { t: "Con Vos en la Web: cuidados en internet (Gobierno de Argentina)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
  ],
  quiz: [
    { q: "Si estás en tu casa, ¿qué conexión conviene usar para ver videos?", opciones: ["Los datos móviles","Ninguna","El wifi de la casa","Apagar el celular"], correcta: 2, explicacion: "Con wifi no gastás la carga del celular. Los datos tientan porque andan solos, pero los videos los gastan rápido." },
    { q: "Tenés que poner la contraseña del wifi y no la sabés. ¿Dónde la buscás?", opciones: ["En la etiqueta del módem","En la boleta de la luz","En la caja del celular","En el DNI"], correcta: 0, explicacion: "El módem trae una etiqueta con la red y la contraseña. La caja del celular tienta, pero no tiene ese dato." },
    { q: "Si querés leer el resto de un mensaje largo, ¿qué movimiento hacés?", opciones: ["Mantenés apretado","Pellizcás","Tocás la flecha de volver","Deslizás el dedo hacia arriba"], correcta: 3, explicacion: "Deslizar es como pasar páginas. Volver tienta, pero te saca del mensaje." },
    { q: "Te perdiste dentro de una app. ¿Qué hacés?", opciones: ["Tirás el celular","Tocás la flecha de volver hasta llegar al inicio","Lo apagás y no lo usás más","Tocás cualquier cosa rápido"], correcta: 1, explicacion: "Volver te lleva paso a paso hacia atrás. Apagarlo tienta, pero no hace falta: no se rompe nada." },
    { q: "Si te cuesta leer la letra de los mensajes, ¿qué podés hacer?", opciones: ["Comprar otro celular","Leer con lupa siempre","Agrandar la letra en los Ajustes","Nada, es así"], correcta: 2, explicacion: "En Ajustes se agranda la letra de todo el celular. Comprar otro tienta, pero no hace falta." },
    { q: "Querés ver más grande una foto que te mandaron. ¿Qué hacés?", opciones: ["Separás dos dedos sobre la foto","La borrás","Deslizás hacia abajo","Mantenés 10 segundos"], correcta: 0, explicacion: "Pellizcar al revés agranda. Deslizar tienta, pero pasa a otra cosa." },
    { q: "Tenés un celular Samsung. ¿De dónde bajás las apps?", opciones: ["De un link que te mandaron por mensaje","De la App Store","De cualquier página","De la Play Store"], correcta: 3, explicacion: "Android usa la Play Store. La App Store tienta por el nombre, pero es la de iPhone." },
    { q: "Por teléfono, alguien dice ser del banco y te pide instalar una app. ¿Qué hacés?", opciones: ["La instalás para que te ayude","No la instalás y cortás","Le das tu clave","Le pasás el número de la tarjeta"], correcta: 1, explicacion: "Es una trampa común para entrar a tu celular. Que diga ser del banco tienta, pero el banco no te pide eso." },
    { q: "Una app de linterna te pide permiso para ver tus contactos. ¿Qué hacés?", opciones: ["Lo aceptás siempre","Le das también la ubicación","No lo das: una linterna no necesita tus contactos","Le mandás tus fotos"], correcta: 2, explicacion: "Cada permiso tiene que tener sentido. Aceptar tienta para que funcione rápido, pero le das datos de más." },
    { q: "Si querés instalar la app de PAMI, ¿qué controlás antes?", opciones: ["Que la publique PAMI, en la tienda oficial","Que tenga muchos colores","Que sea la primera que aparece, sin mirar","Que alguien te la mande por WhatsApp"], correcta: 0, explicacion: "Así sabés que es la verdadera. La primera que aparece tienta, pero puede ser una copia." },
    { q: "La tienda te pide pagar una app y no sabés por qué. ¿Qué hacés?", opciones: ["Pagás igual","Ponés los datos de la tarjeta de un familiar","Tocás todos los botones","No tocás nada y preguntás a alguien de confianza"], correcta: 3, explicacion: "Muchas apps son gratis. Pagar igual tienta para terminar rápido, pero puede ser un cobro que no querías." },
    { q: "Si un video dura mucho y no tenés wifi, ¿qué pasa?", opciones: ["No gasta nada","Gasta muchos datos de tu plan o tu carga","Gasta solo batería","Se ve mejor"], correcta: 1, explicacion: "Los videos son lo que más datos gasta. \"No gasta nada\" tienta, pero eso pasa solo con wifi." },
  ],
},
{
  id: "buscar",
  icono: "🔎",
  titulo: "Buscar en internet",
  nivel: "Básico",
  objetivos: [
    "Buscar algo escribiendo o con la voz",
    "Elegir buenas palabras para encontrar rápido lo que necesitás",
    "Distinguir una página oficial y confiable de una publicidad o una noticia falsa",
  ],
  lecciones: [
    { titulo: "El navegador y el buscador", html: `
      <p class="idea">Para buscar en internet usás un <strong>navegador</strong>, como Chrome o Safari, y adentro un <strong>buscador</strong>, como Google. Escribís lo que querés saber y te muestra páginas.</p>
      <table>
        <tr><th>Palabra</th><th>Qué es</th></tr>
        <tr><td>Navegador</td><td>La app para ver páginas de internet: Chrome (redonda de colores) o Safari (brújula azul)</td></tr>
        <tr><td>Buscador</td><td>La página donde escribís lo que buscás: Google es la más usada</td></tr>
        <tr><td>Página web</td><td>Cada lugar de internet que podés visitar, como la de PAMI</td></tr>
      </table>
      <pre><code>Para buscar:
1. Abrí Chrome (o Safari).
2. Tocá la barra de arriba, donde dice "Buscar".
3. Escribí lo que querés saber, o tocá el micrófono 🎤 y decilo.
4. Tocá la lupa o "Ir".
5. Tocá uno de los resultados para abrirlo.</code></pre>
      <p><strong>Buscar con la voz:</strong> si te cuesta escribir en el teclado chico, tocá el micrófono y hablá claro, como si le dictaras a alguien.</p>
      <p>Por ejemplo, Norma tocó el micrófono y dijo "receta de budín de limón". Le aparecieron muchas recetas y eligió una con fotos.</p>` },
    { titulo: "Buscar bien", html: `
      <p class="idea">Para encontrar rápido, escribí <strong>pocas palabras importantes</strong>, sin saludar ni explicar. Y si buscás algo cerca, sumá tu ciudad.</p>
      <table>
        <tr><th>En vez de esto</th><th>Escribí esto</th></tr>
        <tr><td>Hola, quisiera saber qué farmacia está abierta hoy</td><td>farmacia de turno Lanús</td></tr>
        <tr><td>¿Me podés decir el teléfono de PAMI por favor?</td><td>teléfono PAMI</td></tr>
        <tr><td>Quiero ver el partido de hoy</td><td>Boca hoy horario</td></tr>
      </table>
      <p><strong>Publicidad:</strong> los primeros resultados a veces dicen <strong>"Patrocinado"</strong>. Eso es publicidad: alguien pagó para aparecer primero. No siempre es lo que buscabas.</p>
      <p><strong>Si no encontrás:</strong> cambiá las palabras. Probá con otra forma de decirlo o con menos palabras.</p>
      <p>Las mismas búsquedas sirven en <strong>Google Maps</strong>, la app de mapas: escribís "farmacia" y te muestra las más cercanas, con su dirección y su horario.</p>
      <p>Por ejemplo, Norma escribió "farmacia de turno Lanús" y en el primer resultado que no decía "Patrocinado" encontró la de su barrio.</p>` },
    { titulo: "¿Es confiable?", html: `
      <p class="idea">En internet hay de todo. Antes de creer o compartir algo, fijate <strong>quién lo publica</strong>. Para trámites, usá solo las páginas oficiales.</p>
      <table>
        <tr><th>Señal</th><th>Qué te dice</th></tr>
        <tr><td>Termina en <strong>.gob.ar</strong></td><td>Es una página del Estado argentino</td></tr>
        <tr><td>Es pami.org.ar o anses.gob.ar</td><td>Son las páginas oficiales de PAMI y de ANSES</td></tr>
        <tr><td>Promete regalos, bonos o plata fácil</td><td>Casi siempre es una trampa</td></tr>
        <tr><td>Te apura: "¡Solo por hoy!"</td><td>Quieren que no pienses</td></tr>
      </table>
      <p><strong>Noticias falsas:</strong> si ves una noticia que te asusta o te enoja mucho, antes de reenviarla buscala en un diario o en la radio de siempre. Si no aparece en ningún lado, probablemente sea falsa.</p>
      <pre><code>Antes de creer algo, preguntate:
1. ¿Quién lo publica?
2. ¿Lo dicen otros medios conocidos?
3. ¿Me pide plata, datos o apuro?</code></pre>
      <p>Por ejemplo, a Norma le llegó "ANSES regala un bono de 200.000 pesos, anotate acá". Lo buscó en la página de ANSES y no existía: era una trampa para robarle los datos.</p>` },
  ],
  practica: [
    "Buscá con la voz una receta o un dato que te interese y anotá qué palabras dijiste.",
    "Buscá \"farmacia de turno\" con tu ciudad y anotá cuántos resultados de arriba decían \"Patrocinado\".",
    "Buscá la página oficial de PAMI o de ANSES y anotá cómo termina su dirección.",
  ],
  recursos: [
    { t: "Con Vos en la Web: cuidados en internet (Gobierno de Argentina)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "LearnFree (GCF): cursos gratis de computación e internet básicos (en inglés)", url: "https://www.learnfree.org/series/computer-basics" },
  ],
  quiz: [
    { q: "Si querés buscar algo en internet, ¿qué app abrís?", opciones: ["La calculadora","La cámara","El navegador, como Chrome o Safari","El reloj"], correcta: 2, explicacion: "El navegador abre páginas y el buscador. La cámara tienta porque se usa mucho, pero no busca." },
    { q: "Te cuesta escribir en el teclado chico. ¿Qué hacés para buscar?", opciones: ["Tocás el micrófono y lo decís en voz alta","No buscás nada","Escribís con la uña","Le pedís que adivine"], correcta: 0, explicacion: "El micrófono escribe por vos. Dejar de buscar tienta, pero hablar es muy fácil." },
    { q: "Querés saber qué farmacia está abierta hoy cerca. ¿Qué escribís?", opciones: ["Hola, quisiera saber, por favor, qué farmacia...","farmacia","remedios","farmacia de turno y tu ciudad"], correcta: 3, explicacion: "Pocas palabras importantes y tu ciudad. La frase con saludo tienta por educación, pero el buscador no la necesita." },
    { q: "Un resultado de arriba dice \"Patrocinado\". ¿Qué significa?", opciones: ["Que es la página oficial","Que es publicidad: alguien pagó para salir primero","Que es la mejor","Que es gratis"], correcta: 1, explicacion: "Patrocinado es publicidad. Que esté primero tienta, pero no lo hace mejor." },
    { q: "Buscaste algo y no aparece lo que querías. ¿Qué hacés?", opciones: ["Te rendís","Escribís todo más largo","Probás con otras palabras o con menos","Apagás el celular"], correcta: 2, explicacion: "Cambiar las palabras suele alcanzar. Escribir más largo tienta, pero confunde al buscador." },
    { q: "Querés saber dónde queda la farmacia más cercana. ¿Qué app te ayuda?", opciones: ["Google Maps","La galería de fotos","La calculadora","El despertador"], correcta: 0, explicacion: "Maps muestra lugares cercanos con dirección y horario. La galería tienta, pero guarda tus fotos." },
    { q: "Una página termina en .gob.ar. ¿Qué te dice?", opciones: ["Que es una tienda","Que es de un banco","Que es falsa","Que es una página del Estado argentino"], correcta: 3, explicacion: ".gob.ar es del Estado. \"Banco\" tienta, pero los bancos tienen otras direcciones." },
    { q: "Te llega \"ANSES regala un bono, anotate acá con tu clave\". ¿Qué hacés?", opciones: ["Te anotás enseguida","Lo buscás en la página oficial de ANSES antes de tocar nada","Le pasás el link a tus amigas","Mandás tu clave"], correcta: 1, explicacion: "ANSES no pide claves por mensaje. Anotarte rápido tienta por el bono, pero es una trampa." },
    { q: "Un mensaje dice \"¡Solo por hoy!\" y te apura a anotarte. ¿Qué te dice eso?", opciones: ["Que es oficial","Que es un regalo seguro","Que puede ser una trampa: quieren que no pienses","Que es urgente de verdad"], correcta: 2, explicacion: "El apuro es una señal de estafa. \"Urgente de verdad\" tienta, pero los trámites oficiales no te apuran así." },
    { q: "Te mandan una noticia que te asusta mucho. ¿Qué hacés antes de reenviarla?", opciones: ["La buscás en un diario o radio conocidos","La reenviás a todos","La creés sin mirar","La mandás a tus nietos para que se cuiden"], correcta: 0, explicacion: "Si no está en otros medios, probablemente sea falsa. Reenviarla tienta para cuidar a otros, pero la desparramás." },
    { q: "Para un trámite de PAMI, ¿qué página usás?", opciones: ["La primera que diga \"PAMI gratis\"","Una que te mandaron por mensaje","Una con publicidad","pami.org.ar, la oficial"], correcta: 3, explicacion: "Para trámites, solo la oficial. La que dice \"gratis\" tienta, pero puede ser falsa." },
    { q: "Antes de creer algo de internet, ¿qué te preguntás primero?", opciones: ["¿Tiene lindos colores?","¿Quién lo publica?","¿Cuántos emojis tiene?","¿Es largo?"], correcta: 1, explicacion: "Quién lo publica dice si es confiable. Los colores tientan, pero cualquiera hace una página linda." },
  ],
},
{
  id: "whatsapp",
  icono: "💬",
  titulo: "WhatsApp",
  nivel: "Básico",
  objetivos: [
    "Mandar mensajes, audios y fotos por WhatsApp",
    "Manejar los grupos: silenciarlos, salir y no reenviar cadenas",
    "Agendar un contacto y bloquear a quien molesta",
  ],
  lecciones: [
    { titulo: "Mensajes, audios y fotos", video: {"id":"L15A6BU247c","t":"Tutorial para personas mayores: ¿cómo enviar un WhatsApp? · El Bosque TV (3:27)"}, html: `
      <p class="idea"><strong>WhatsApp</strong> es la app para mandar mensajes, audios, fotos y hacer llamadas por internet. Cada conversación se llama <strong>chat</strong>.</p>
      <pre><code>Mandar un mensaje:
1. Abrí WhatsApp (el globito verde con un teléfono).
2. Tocá el chat de la persona (o el ícono de mensaje nuevo y buscala).
3. Tocá abajo, donde dice "Mensaje", y escribí.
4. Tocá la flechita verde ➤ para enviar.</code></pre>
      <table>
        <tr><th>Quiero mandar...</th><th>Cómo</th></tr>
        <tr><td>Un audio</td><td>Mantené apretado el micrófono 🎤 mientras hablás. Al soltar, se envía.</td></tr>
        <tr><td>Una foto que ya tengo</td><td>Tocá el clip 📎 o el + → Galería → elegí la foto → ➤</td></tr>
        <tr><td>Una foto nueva</td><td>Tocá la cámara 📷 → sacá la foto → ➤</td></tr>
      </table>
      <p><strong>Las tildes del mensaje:</strong> una tilde gris ✓ es enviado; dos tildes grises ✓✓, que llegó; dos tildes azules, que lo leyeron.</p>
      <p><strong>Si el audio salió mal:</strong> mientras grabás, deslizá el dedo hacia la izquierda y se cancela.</p>
      <p>Por ejemplo, Norma le mandó un audio a su nieta Sofía para felicitarla. Vio las dos tildes azules y al ratito Sofía le contestó con una foto.</p>` },
    { titulo: "Los grupos", html: `
      <p class="idea">Un <strong>grupo</strong> es un chat con varias personas, como el de la familia. Si suena mucho, lo podés <strong>silenciar</strong>. Y no reenvíes <strong>cadenas</strong> sin saber si son verdad.</p>
      <table>
        <tr><th>Quiero...</th><th>Cómo</th></tr>
        <tr><td>Que no suene a cada rato</td><td>Abrí el grupo → tocá el nombre de arriba → Silenciar notificaciones → Siempre. Igual podés leerlo cuando quieras.</td></tr>
        <tr><td>Salir de un grupo</td><td>Tocá el nombre de arriba → bajá hasta el final → Salir del grupo</td></tr>
        <tr><td>Contestarle a una persona</td><td>Deslizá su mensaje hacia la derecha y escribí la respuesta</td></tr>
      </table>
      <p><strong>Cadenas:</strong> son mensajes que alguien manda a muchos para que los reenvíen: "pasalo a 10 personas", remedios milagrosos, alertas que asustan. WhatsApp los marca con la etiqueta <strong>"Reenviado muchas veces"</strong> (dos flechitas). Esa etiqueta es una alerta: casi siempre son falsos.</p>
      <p><strong>Grupos de desconocidos:</strong> si te agregan a un grupo de gente que no conocés que ofrece premios o inversiones, salí. Es una trampa común.</p>
      <p>Por ejemplo, el grupo "Primos" sonaba toda la noche. Norma lo silenció: ahora lo lee a la mañana con el mate, tranquila.</p>` },
    { titulo: "Contactos y bloquear", html: `
      <p class="idea">Para hablarle a alguien por WhatsApp, primero lo <strong>agendás</strong> en los contactos del celular. Y si alguien te molesta, lo podés <strong>bloquear</strong>.</p>
      <pre><code>Agendar a alguien nuevo:
1. Abrí la app Contactos (o Teléfono → Contactos).
2. Tocá el + (Crear contacto).
3. Escribí el nombre y el número con la característica,
   por ejemplo 11 1234-5678.
4. Guardá. En unos minutos aparece en WhatsApp.</code></pre>
      <p><strong>Bloquear:</strong> abrí el chat de esa persona → tocá su nombre arriba → Bloquear. Ya no te puede escribir ni llamar por WhatsApp. Ella no recibe ningún aviso.</p>
      <p><strong>Reportar:</strong> si es una estafa o un mensaje feo, además de bloquear podés tocar <strong>Reportar</strong>, así WhatsApp lo revisa.</p>
      <table>
        <tr><th>Si te escribe...</th><th>Qué hacés</th></tr>
        <tr><td>Un número desconocido que dice ser un familiar</td><td>Llamás al familiar a su número de siempre antes de responder</td></tr>
        <tr><td>Alguien que te insulta o molesta</td><td>Bloqueás y reportás</td></tr>
        <tr><td>Un número que ofrece premios</td><td>No contestás, bloqueás y reportás</td></tr>
      </table>
      <p>Por ejemplo, a Norma le escribía todos los días un número que ofrecía "créditos fáciles". Lo bloqueó y lo reportó, y no le escribió más.</p>` },
  ],
  practica: [
    "Mandale un audio corto a alguien de tu familia y anotá cuánto tardaron en aparecer las dos tildes azules.",
    "Silenciá un grupo que suene mucho y anotá su nombre.",
    "Agendá un contacto nuevo con la característica y anotá en cuántos minutos aparece en WhatsApp.",
  ],
  recursos: [
    { t: "WhatsApp: cómo activar la verificación en dos pasos", url: "https://faq.whatsapp.com/1920866721452534/" },
    { t: "Con Vos en la Web: cuidados en internet (Gobierno de Argentina)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
  ],
  quiz: [
    { q: "Querés mandar un audio a tu nieta. ¿Qué hacés?", opciones: ["Tocás el micrófono una vez y esperás","Llamás por teléfono","Mantenés apretado el micrófono mientras hablás y soltás","Tocás la cámara"], correcta: 2, explicacion: "El audio se graba mientras mantenés apretado. Tocar una vez tienta, pero solo graba un instante." },
    { q: "Te equivocaste mientras grababas un audio. ¿Cómo lo cancelás?", opciones: ["Deslizás el dedo hacia la izquierda sin soltar","Soltás rápido","Apagás el celular","Seguís hablando"], correcta: 0, explicacion: "Deslizar a la izquierda lo cancela. Soltar tienta, pero lo envía." },
    { q: "Ves dos tildes azules en tu mensaje. ¿Qué quiere decir?", opciones: ["Que no llegó","Que se borró","Que hay un error","Que lo leyeron"], correcta: 3, explicacion: "Dos azules es leído. \"No llegó\" tienta, pero eso sería una sola tilde." },
    { q: "Querés mandar una foto que ya tenés guardada. ¿Qué tocás?", opciones: ["El micrófono","El clip o el + y después Galería","La lupa","La flecha de volver"], correcta: 1, explicacion: "Desde la galería elegís la foto. El micrófono tienta porque está cerca, pero graba audio." },
    { q: "El grupo de la familia suena toda la noche. ¿Qué hacés?", opciones: ["Te peleás con todos","Tirás el celular","Lo silenciás: seguís en el grupo y lo leés cuando quieras","Apagás el wifi para siempre"], correcta: 2, explicacion: "Silenciar saca el ruido sin salir del grupo. Salir tienta, pero te perdés las noticias." },
    { q: "Te llega un mensaje con la etiqueta \"Reenviado muchas veces\" sobre un remedio milagroso. ¿Qué hacés?", opciones: ["No lo reenviás: esa etiqueta es una alerta","Lo reenviás a todos","Comprás el remedio","Lo mandás al médico como receta"], correcta: 0, explicacion: "Las cadenas suelen ser falsas. Reenviarlo tienta para ayudar, pero se desparrama el engaño." },
    { q: "Te agregaron a un grupo de desconocidos que ofrece inversiones. ¿Qué hacés?", opciones: ["Invertís un poco para probar","Mandás tus datos","Agregás a tus amigas","Salís del grupo y no respondés"], correcta: 3, explicacion: "Es una trampa común. Probar con poco tienta, pero así empiezan las estafas." },
    { q: "Querés responderle a una persona en un grupo. ¿Qué hacés?", opciones: ["Le escribís a todos sin decir a quién","Deslizás su mensaje hacia la derecha y escribís","Borrás el grupo","Mantenés el micrófono 1 minuto"], correcta: 1, explicacion: "Así queda claro a qué mensaje contestás. Escribir sin más tienta, pero en un grupo se pierde." },
    { q: "Querés hablar por WhatsApp con alguien nuevo. ¿Qué hacés primero?", opciones: ["Esperás que te aparezca solo","Lo buscás en Google","Lo agendás en Contactos con su número y característica","Le mandás un mail"], correcta: 2, explicacion: "Agendado, aparece en WhatsApp. Esperar tienta, pero no aparece si no está guardado." },
    { q: "Un número desconocido dice \"Hola ma, cambié de número\". ¿Qué hacés?", opciones: ["Llamás a tu hijo a su número de siempre antes de responder","Le contestás y le hacés caso","Le mandás plata si te pide","Borrás el número viejo de tu hijo"], correcta: 0, explicacion: "Es una estafa muy común. Contestar tienta por cariño, pero primero confirmá con el número de siempre." },
    { q: "Alguien te insulta por WhatsApp. ¿Qué hacés?", opciones: ["Le contestás con insultos","Le pasás tu dirección","Lo agregás a un grupo","Lo bloqueás y lo reportás"], correcta: 3, explicacion: "Bloquear corta el contacto. Contestar tienta, pero empeora las cosas." },
    { q: "Si bloqueás a alguien, ¿le llega un aviso?", opciones: ["Sí, le llega un mensaje","No, no recibe ningún aviso","Sí, le avisa WhatsApp por mail","Sí, y te puede seguir escribiendo"], correcta: 1, explicacion: "Bloquear es silencioso. Pensar que se entera tienta y da vergüenza, pero no le avisa." },
  ],
},
{
  id: "videollamadas",
  icono: "📹",
  titulo: "Videollamadas",
  nivel: "Básico",
  objetivos: [
    "Hacer y atender una videollamada de WhatsApp",
    "Preparar la luz, el lugar y el sonido para que salga bien",
    "Entrar a una reunión por link, como Google Meet",
  ],
  lecciones: [
    { titulo: "Videollamada por WhatsApp", video: {"id":"MLv4sj87H2g","t":"Videotutorial para personas mayores: ¿cómo hacer videollamadas de WhatsApp? · AUPEX (5:05)"}, html: `
      <p class="idea">Una <strong>videollamada</strong> es una llamada en la que se ven las caras. Con WhatsApp es gratis si tenés wifi.</p>
      <pre><code>Para llamar:
1. Abrí el chat de la persona.
2. Tocá la camarita 📹 de arriba a la derecha.
3. Esperá a que atienda. Tu cara aparece en un cuadradito.
4. Para cortar, tocá el botón rojo.

Para atender:
Cuando te llaman, deslizá o tocá el botón verde.</code></pre>
      <table>
        <tr><th>Botón</th><th>Para qué sirve</th></tr>
        <tr><td>Micrófono tachado</td><td>Silenciarte: el otro no te escucha</td></tr>
        <tr><td>Camarita tachada</td><td>Apagar tu cámara: el otro no te ve</td></tr>
        <tr><td>Flechas en círculo</td><td>Dar vuelta la cámara, para mostrar lo que tenés adelante</td></tr>
        <tr><td>Rojo</td><td>Cortar</td></tr>
      </table>
      <p><strong>Con varias personas:</strong> durante la llamada, tocá "Agregar participante" para sumar a otro familiar.</p>
      <p>Por ejemplo, Norma hizo una videollamada con su nieto y dio vuelta la cámara para mostrarle las plantas del patio.</p>` },
    { titulo: "Que salga bien", html: `
      <p class="idea">Una videollamada sale mejor con <strong>luz de frente</strong>, el celular <strong>apoyado</strong> y un lugar <strong>tranquilo</strong>.</p>
      <table>
        <tr><th>Problema</th><th>Solución</th></tr>
        <tr><td>Se te ve oscuro</td><td>Ponete de frente a la ventana, no de espaldas</td></tr>
        <tr><td>La imagen se mueve</td><td>Apoyá el celular en una taza o en unos libros</td></tr>
        <tr><td>Se corta o se congela</td><td>Acercate al módem del wifi</td></tr>
        <tr><td>No escuchás bien</td><td>Subí el volumen con el botón del costado, o usá auriculares</td></tr>
        <tr><td>Hay mucho ruido</td><td>Apagá la tele y cerrá la puerta</td></tr>
      </table>
      <pre><code>Lista antes de una videollamada importante:
☐ Batería cargada (más de la mitad)
☐ Conectada al wifi
☐ Luz de frente
☐ Celular apoyado a la altura de la cara
☐ Lugar tranquilo</code></pre>
      <p><strong>Para una consulta médica por video:</strong> tené a mano tus remedios, tus estudios y una lista de preguntas escrita. Así no te olvidás nada.</p>
      <p>Por ejemplo, Norma se veía muy oscura porque tenía la ventana atrás. Se dio vuelta, apoyó el celular en el azucarero y su hija la vio perfecto.</p>` },
    { titulo: "Reuniones por link", html: `
      <p class="idea">Algunas videollamadas, como una clase o un turno médico virtual, se hacen con un <strong>link</strong> (un enlace) de Google Meet o Zoom. Tocás el link y entrás.</p>
      <p>Un <strong>link</strong> es un texto azul o subrayado que, al tocarlo, abre una página o una app. Un link de Google Meet empieza con <strong>meet.google.com</strong>.</p>
      <pre><code>Para entrar a una reunión de Google Meet:
1. Tocá el link que te mandó tu médico o tu profe.
2. Si te lo pide, instalá la app Meet desde la tienda oficial.
3. Permití usar la cámara y el micrófono.
4. Escribí tu nombre si te lo pide.
5. Tocá "Unirse" o "Solicitar unirse" y esperá.</code></pre>
      <p><strong>Cuidado:</strong> entrá solo a links que esperabas, de alguien que conocés. Un link que llega de un número desconocido puede ser una trampa (lo vas a ver en el módulo de estafas).</p>
      <p><strong>Durante la reunión:</strong> si hay muchas personas, apagá tu micrófono mientras no hablás. Así no se escuchan ruidos de tu casa.</p>
      <p>Por ejemplo, el médico de Norma le mandó un link de Meet para un control. Ella tocó el link 5 minutos antes, permitió la cámara y esperó a que la hicieran pasar.</p>` },
  ],
  practica: [
    "Hacé una videollamada de WhatsApp con un familiar y anotá cuántos minutos duró.",
    "Probá dos lugares de tu casa para videollamar: uno con la ventana de frente y otro de espaldas. Anotá en cuál se te ve mejor.",
    "Pedile a alguien que te mande un link de Google Meet de prueba y anotá cuántos pasos hiciste para entrar.",
  ],
  recursos: [
    { t: "Ayuda de Google Meet (videollamadas por link)", url: "https://support.google.com/meet/?hl=es" },
    { t: "LearnFree (GCF): cursos gratis de computación e internet básicos (en inglés)", url: "https://www.learnfree.org/series/computer-basics" },
  ],
  quiz: [
    { q: "Querés ver la cara de tu nieto mientras hablan. ¿Qué tocás en su chat?", opciones: ["El teléfono","El clip","La camarita de arriba","La lupa"], correcta: 2, explicacion: "La camarita hace videollamada. El teléfono tienta porque es una llamada, pero es solo de voz." },
    { q: "Querés mostrarle a tu hija las plantas del patio durante la videollamada. ¿Qué tocás?", opciones: ["Las flechas en círculo, para dar vuelta la cámara","El botón rojo","El micrófono tachado","Nada, se puede"], correcta: 0, explicacion: "Dar vuelta la cámara muestra lo de adelante. El rojo tienta porque es grande, pero corta." },
    { q: "Necesitás toser y no querés que te escuchen. ¿Qué tocás?", opciones: ["La cámara","El botón rojo","El volumen","El micrófono, para silenciarte"], correcta: 3, explicacion: "El micrófono tachado te silencia. Cortar tienta, pero se termina la llamada." },
    { q: "Querés sumar a otro familiar a la videollamada. ¿Qué hacés?", opciones: ["Cortás y llamás a los dos a la vez","Tocás \"Agregar participante\"","Le gritás","Le mandás un audio"], correcta: 1, explicacion: "Se puede sumar gente durante la llamada. Cortar tienta, pero no hace falta." },
    { q: "En la videollamada se te ve muy oscura. ¿Qué hacés?", opciones: ["Te ponés de espaldas a la ventana","Apagás la luz","Te ponés de frente a la ventana","Tapás la cámara"], correcta: 2, explicacion: "La luz tiene que darte en la cara. De espaldas tienta porque se ve la ventana, pero te deja a contraluz." },
    { q: "La imagen se mueve todo el tiempo. ¿Qué hacés?", opciones: ["Apoyás el celular en algo firme","Lo sostenés con una mano más alto","Caminás mientras hablás","Lo sacudís"], correcta: 0, explicacion: "Apoyado no se mueve. Sostenerlo tienta, pero el brazo se cansa y tiembla." },
    { q: "La videollamada se congela y se corta. ¿Qué probás?", opciones: ["Gritar más fuerte","Subir el brillo","Agrandar la letra","Acercarte al módem del wifi"], correcta: 3, explicacion: "Lejos del módem la señal es débil. Hablar más fuerte tienta, pero no arregla la conexión." },
    { q: "Tenés una consulta médica por video. ¿Qué preparás?", opciones: ["Nada, se improvisa","Tus remedios, tus estudios y las preguntas escritas","Solo el control remoto","La tele prendida para no aburrirte"], correcta: 1, explicacion: "Así no te olvidás nada. Improvisar tienta, pero se te pueden pasar preguntas." },
    { q: "¿Qué es un link?", opciones: ["Una foto","Un tipo de batería","Un texto que, al tocarlo, abre una página o una app","Un número de teléfono"], correcta: 2, explicacion: "El link te lleva a otro lugar. El número tienta, pero ese sirve para llamar." },
    { q: "Te llega un link de Meet de un número que no conocés y no esperabas. ¿Qué hacés?", opciones: ["No lo tocás y preguntás a alguien de confianza","Lo tocás enseguida","Lo reenviás","Le mandás tu clave para entrar"], correcta: 0, explicacion: "Entrá solo a links que esperabas. Tocarlo tienta por curiosidad, pero puede ser una trampa." },
    { q: "Al entrar a Meet te pide permiso para usar la cámara. ¿Qué hacés?", opciones: ["Lo rechazás siempre","Instalás otra app rara","Apagás el celular","Lo permitís: sin cámara no te ven"], correcta: 3, explicacion: "Para una videollamada, la cámara hace falta. Rechazar tienta por desconfianza, pero acá es lo que esperabas." },
    { q: "Estás en una clase por Meet con 20 personas y no te toca hablar. ¿Qué hacés con tu micrófono?", opciones: ["Lo dejás prendido con la tele fuerte","Lo apagás hasta que te toque","Lo tapás con la mano","Te salís de la clase"], correcta: 1, explicacion: "Así no se escuchan ruidos de tu casa. Dejarlo prendido tienta por comodidad, pero molesta a todos." },
  ],
},
{
  id: "seguridad",
  icono: "🛡️",
  titulo: "Estafas y cuidados",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer las estafas más comunes por teléfono y por WhatsApp",
    "Proteger tu WhatsApp: no pasar nunca el código y activar la verificación en dos pasos",
    "Saber qué hacer en los primeros minutos si caíste en una estafa",
  ],
  lecciones: [
    { titulo: "Las estafas más comunes", video: {"id":"bXxHVS-xt9k","t":"Medidas de seguridad para prevenir estafas virtuales en nombre de PAMI · PAMI (1:11)"}, html: `
      <p class="idea">Las estafas cambian de forma, pero casi siempre tienen lo mismo: <strong>te apuran</strong>, <strong>te prometen algo o te asustan</strong>, y <strong>te piden un dato, un código o plata</strong>.</p>
      <table>
        <tr><th>La trampa</th><th>Cómo llega</th><th>Lo que quieren</th></tr>
        <tr><td>El falso familiar</td><td>"Hola ma, cambié de número. Necesito que me transfieras..."</td><td>Plata</td></tr>
        <tr><td>El falso PAMI o ANSES</td><td>"Tenés un bono, un reintegro o remedios gratis: pasame tus datos"</td><td>Tus claves y datos</td></tr>
        <tr><td>El falso banco</td><td>"Detectamos un problema en tu cuenta, decime el código que te llegó"</td><td>Entrar a tu banco</td></tr>
        <tr><td>El premio</td><td>"¡Ganaste un sorteo! Pagá el envío"</td><td>Plata o datos de la tarjeta</td></tr>
        <tr><td>El código de WhatsApp</td><td>"Te mandé un código por error, ¿me lo pasás?"</td><td>Robarte el WhatsApp</td></tr>
      </table>
      <p><strong>Lo que PAMI, ANSES y los bancos nunca hacen:</strong> pedirte claves, códigos ni datos de la tarjeta por teléfono, WhatsApp o redes sociales.</p>
      <pre><code>La regla de las 3 P:
Parar:     no respondas enseguida, aunque te apuren.
Preguntar: llamá vos al número oficial o al familiar de siempre.
Proteger:  nunca des claves, códigos ni datos de la tarjeta.</code></pre>
      <p>Por ejemplo, a Norma la llamaron "de PAMI" para darle remedios gratis si decía un código que le iba a llegar. Paró, cortó y llamó ella al 138, el número oficial de PAMI: era una estafa.</p>` },
    { titulo: "El código y la verificación en dos pasos", video: {"id":"LuiCdFW_ofQ","t":"Cómo usar la verificación en dos pasos en WhatsApp · WhatsApp (1:05)"}, html: `
      <p class="idea">Cuando alguien quiere usar tu WhatsApp en otro celular, WhatsApp te manda un <strong>código de 6 números</strong> por SMS. Ese código es la llave de tu cuenta: <strong>no se lo pases a nadie</strong>, nunca.</p>
      <p>Un <strong>SMS</strong> es un mensaje de texto común, de los que llegan a la app Mensajes, no a WhatsApp.</p>
      <table>
        <tr><th>Si alguien te pide el código...</th><th>Es...</th></tr>
        <tr><td>"Te lo mandé por error"</td><td>Una estafa</td></tr>
        <tr><td>"Es para un sorteo o una encuesta"</td><td>Una estafa</td></tr>
        <tr><td>"Soy de WhatsApp, es para verificar"</td><td>Una estafa: WhatsApp no te lo pide nunca</td></tr>
      </table>
      <p>Si se lo pasás, pueden usar tu WhatsApp, escribirle a tu familia como si fueras vos y pedirles plata.</p>
      <p><strong>Verificación en dos pasos:</strong> le agrega a tu WhatsApp un <strong>PIN</strong>, un número de 6 cifras que elegís vos. Aunque alguien consiga el código, sin tu PIN no puede entrar.</p>
      <pre><code>Para activarla:
WhatsApp → Ajustes (o los 3 puntos ⋮ → Ajustes)
→ Cuenta → Verificación en dos pasos → Activar
Elegí un PIN que no sea tu cumpleaños.
Anotalo en tu cuaderno, guardado en tu casa.</code></pre>
      <p>Por ejemplo, Norma activó la verificación en dos pasos con su hija. Anotó el PIN en su cuaderno, que guarda en el cajón de la cocina.</p>` },
    { titulo: "Si caíste: qué hacer enseguida", html: `
      <p class="idea">Si diste un dato, un código o mandaste plata, <strong>no te quedes callada ni callado</strong>: actuar rápido sirve. Y no es tu culpa: los estafadores engañan a gente de todas las edades.</p>
      <pre><code>En los primeros minutos:
1. Cortá la comunicación. No sigas respondiendo.
2. Si es plata o la tarjeta: llamá a tu banco al número
   que está atrás de la tarjeta y pedí bloquear.
3. Si te robaron el WhatsApp: avisá a tus contactos
   por otro medio (llamada o SMS) que no te escriban plata.
4. Pedí ayuda a un familiar de confianza.
5. Hacé la denuncia en la comisaría o en la fiscalía.</code></pre>
      <table>
        <tr><th>Número oficial</th><th>Para qué</th></tr>
        <tr><td>138</td><td>PAMI Escucha y Responde, gratis las 24 horas</td></tr>
        <tr><td>130</td><td>ANSES, gratis</td></tr>
        <tr><td>El de atrás de tu tarjeta</td><td>Tu banco, para bloquear</td></tr>
      </table>
      <p><strong>Guardá las pruebas:</strong> no borres los mensajes. Sacá una <strong>captura de pantalla</strong>, una foto de lo que se ve en el celular: en muchos, se hace apretando a la vez el botón de encender y el de bajar el volumen.</p>
      <p>Por ejemplo, a una vecina de Norma le robaron el WhatsApp. Su hijo llamó a todos los familiares para avisar que no mandaran plata, y ella hizo la denuncia con las capturas.</p>` },
  ],
  practica: [
    "Anotá en tu cuaderno los números 138 (PAMI) y 130 (ANSES), y el de atrás de tu tarjeta del banco.",
    "Activá la verificación en dos pasos de WhatsApp con alguien de confianza y anotá en qué menú la encontraste.",
    "Sacá una captura de pantalla de prueba y anotá qué botones apretaste.",
  ],
  recursos: [
    { t: "PAMI: página oficial (trámites, cartilla y avisos de estafas)", url: "https://www.pami.org.ar/" },
    { t: "WhatsApp: cómo activar la verificación en dos pasos", url: "https://faq.whatsapp.com/1920866721452534/" },
    { t: "Centro Nacional de Ciberseguridad (Argentina)", url: "https://www.argentina.gob.ar/ciberseguridad" },
  ],
  quiz: [
    { q: "Te escriben de un número nuevo: \"Hola ma, cambié de número, transferime urgente\". ¿Qué hacés?", opciones: ["Transferís enseguida","Le contestás que sí y esperás","Llamás a tu hijo a su número de siempre","Le pedís el CBU nuevo"], correcta: 2, explicacion: "Es la estafa del falso familiar. Transferir tienta por la urgencia, pero primero confirmás con el número de siempre." },
    { q: "Te llaman \"de PAMI\" y piden un código que te va a llegar por mensaje. ¿Qué hacés?", opciones: ["Cortás y llamás vos al 138","Le decís el código","Le das tu DNI","Le pedís que te llame más tarde y se lo das"], correcta: 0, explicacion: "PAMI nunca pide códigos por teléfono. Que diga ser de PAMI tienta, pero cualquiera puede decirlo." },
    { q: "¿Qué tienen en común casi todas las estafas?", opciones: ["Son siempre en inglés","Llegan solo por carta","Nunca prometen nada","Te apuran y te piden un dato, un código o plata"], correcta: 3, explicacion: "Apuro y pedido de datos son la señal. \"Solo por carta\" tienta, pero hoy llegan por teléfono y WhatsApp." },
    { q: "Te llega \"Ganaste un sorteo, pagá solo el envío\". No participaste de ningún sorteo. ¿Qué hacés?", opciones: ["Pagás el envío, es poco","No pagás nada: es una trampa","Mandás tus datos de la tarjeta","Le avisás a tus amigas para que participen"], correcta: 1, explicacion: "Si no participaste, no ganaste. \"Es poco\" tienta, pero así te sacan la tarjeta." },
    { q: "Alguien te dice \"te mandé un código de WhatsApp por error, ¿me lo pasás?\". ¿Qué hacés?", opciones: ["Se lo pasás, total es un error","Se lo pasás si es amable","No se lo pasás: con ese código te roban el WhatsApp","Lo publicás en el grupo"], correcta: 2, explicacion: "El código es la llave de tu cuenta. Ser amable tienta, pero es la estafa más común." },
    { q: "¿Qué agrega la verificación en dos pasos a tu WhatsApp?", opciones: ["Un PIN que elegís vos, que hace falta además del código","Más emojis","Más espacio en el celular","Un sorteo"], correcta: 0, explicacion: "El PIN es una segunda llave: sin él, aunque roben el código, no entran. \"Más espacio\" tienta porque suena a mejora, pero no tiene nada que ver." },
    { q: "Vas a elegir el PIN de la verificación en dos pasos. ¿Cuál es mejor?", opciones: ["Tu fecha de nacimiento","123456","El mismo que tu DNI","Uno que no sea tu cumpleaños, anotado en tu cuaderno en casa"], correcta: 3, explicacion: "Tu cumpleaños es fácil de averiguar. 123456 tienta porque es fácil, pero es lo primero que prueban." },
    { q: "Le dijiste tu código del banco a un estafador. ¿Qué hacés primero?", opciones: ["Esperás a ver qué pasa","Llamás al banco al número de atrás de la tarjeta y pedís bloquear","Llamás al número que te dio el estafador","Borrás todos los mensajes"], correcta: 1, explicacion: "Bloquear rápido evita que saquen plata. Esperar tienta por vergüenza, pero cada minuto cuenta." },
    { q: "Te robaron el WhatsApp. ¿Cómo avisás a tus contactos?", opciones: ["Por el mismo WhatsApp robado","No avisás","Por otro medio, como una llamada o un SMS","Por una red de desconocidos"], correcta: 2, explicacion: "El ladrón maneja tu WhatsApp. Avisar por ahí tienta, pero él puede borrar tus mensajes." },
    { q: "Caíste en una estafa y tenés los mensajes. ¿Qué hacés con ellos?", opciones: ["Los guardás y sacás capturas para la denuncia","Los borrás para olvidarte","Se los reenviás al estafador","Los publicás en Facebook"], correcta: 0, explicacion: "Son pruebas para la denuncia. Borrarlos tienta para no verlos, pero se pierden las pruebas." },
    { q: "Te da vergüenza haber caído en una estafa. ¿Qué es verdad?", opciones: ["Mejor no contárselo a nadie","Solo les pasa a los distraídos","Ya no se puede hacer nada","No es tu culpa: engañan a gente de todas las edades, y contarlo ayuda"], correcta: 3, explicacion: "Contarlo rápido permite actuar. Callarse tienta por vergüenza, pero el estafador gana tiempo." },
    { q: "¿Por qué medio te pide claves tu banco?", opciones: ["Por WhatsApp","Por ninguno: el banco nunca te pide claves ni códigos","Por teléfono","Por mensaje de texto"], correcta: 1, explicacion: "Ni el banco, ni PAMI, ni ANSES piden claves. Que te llamen \"del banco\" tienta, pero así empieza la estafa." },
  ],
},
{
  id: "servicios",
  icono: "🏛️",
  titulo: "Trámites y servicios útiles",
  nivel: "Intermedio",
  objetivos: [
    "Usar Mi Argentina para tener tu DNI digital y pedir turnos",
    "Ubicar los servicios de PAMI y ANSES por internet y sus teléfonos oficiales",
    "Usar el celular para disfrutar: música, radio, videos, mapas y fotos",
  ],
  lecciones: [
    { titulo: "Mi Argentina", html: `
      <p class="idea"><strong>Mi Argentina</strong> es la app oficial del Estado. Ahí tenés tu <strong>DNI digital</strong>, tus vacunas y algunos turnos, sin hacer filas.</p>
      <table>
        <tr><th>En Mi Argentina podés...</th><th>Para qué te sirve</th></tr>
        <tr><td>Tener tu DNI en el celular</td><td>Mostrarlo si te lo piden</td></tr>
        <tr><td>Ver tu credencial de vacunación</td><td>Saber qué vacunas tenés</td></tr>
        <tr><td>Sacar turnos para algunos trámites</td><td>Ir el día y la hora justos</td></tr>
      </table>
      <pre><code>Para empezar:
1. Instalá "Mi Argentina" desde la tienda oficial.
2. Creá tu cuenta con tu DNI y tu mail.
3. Para validar tu identidad, la app te saca una foto
   de la cara y del DNI.
4. Elegí una contraseña y anotala en tu cuaderno.</code></pre>
      <p>Una <strong>contraseña</strong> es la palabra secreta para entrar a tu cuenta. Tiene que ser difícil de adivinar: nada de tu nombre ni tu cumpleaños.</p>
      <p>Este curso te da una idea general. Si querés aprender a hacer trámites paso a paso, en este sitio está el curso "Trámites por internet sin perderse".</p>
      <p>Por ejemplo, Norma instaló Mi Argentina con su hija. Ahora, cuando en el banco le piden el DNI y se lo olvidó, lo muestra en el celular.</p>` },
    { titulo: "PAMI y ANSES por internet", html: `
      <p class="idea">PAMI y ANSES tienen apps y páginas oficiales para hacer cosas desde tu casa. Y tienen <strong>teléfonos gratis</strong> para consultar.</p>
      <table>
        <tr><th></th><th>PAMI</th><th>ANSES</th></tr>
        <tr><td>App</td><td>Mi PAMI</td><td>Mi ANSES</td></tr>
        <tr><td>Página</td><td>pami.org.ar</td><td>anses.gob.ar</td></tr>
        <tr><td>Teléfono gratis</td><td>138, las 24 horas</td><td>130</td></tr>
        <tr><td>Por ejemplo</td><td>Credencial digital, recetas electrónicas, cartilla de médicos</td><td>Recibo de haberes, fechas de cobro</td></tr>
      </table>
      <p>Para entrar a Mi ANSES necesitás la <strong>Clave de la Seguridad Social</strong>, una clave tuya que se crea en la página de ANSES o en una oficina. Es secreta: no se la des a nadie por teléfono.</p>
      <p><strong>Una receta electrónica</strong> es una receta que el médico carga en el sistema: en la farmacia la buscan con tu número de afiliado o tu DNI, sin papel.</p>
      <p><strong>Recordá:</strong> si un mensaje dice ser de PAMI o de ANSES y te pide claves, es falso. Ante la duda, llamá vos al 138 o al 130.</p>
      <p>Por ejemplo, Norma tiene la credencial de PAMI en la app Mi PAMI. En la farmacia muestra la credencial y le dan los remedios de la receta electrónica.</p>` },
    { titulo: "Para disfrutar", html: `
      <p class="idea">El celular también es para <strong>pasarla bien</strong>: escuchar la radio de siempre, ver videos, mirar fotos de la familia y saber cómo llegar a un lugar.</p>
      <table>
        <tr><th>Quiero...</th><th>Uso...</th></tr>
        <tr><td>Escuchar mi radio</td><td>Buscá en Google "radio" y el nombre: casi todas se escuchan en vivo por internet</td></tr>
        <tr><td>Ver videos, recetas o música</td><td>YouTube: buscás con la lupa o con el micrófono</td></tr>
        <tr><td>Saber cómo llegar a un lugar</td><td>Google Maps: escribís la dirección y tocás "Cómo llegar"</td></tr>
        <tr><td>Saber el clima de mañana</td><td>La app del clima o buscar "clima" en Google</td></tr>
        <tr><td>Guardar las fotos de los nietos</td><td>En WhatsApp, tocá la foto y después Guardar</td></tr>
      </table>
      <p><strong>Para YouTube:</strong> si un video te pide instalar algo o te ofrece plata fácil, cerralo. Y recordá que los videos gastan muchos datos: mejor con wifi.</p>
      <p><strong>Google Maps</strong> también te dice qué colectivo tomar: en "Cómo llegar", tocá el dibujo del colectivo.</p>
      <p>Por ejemplo, Norma escucha su radio de AM por internet mientras cocina, y busca en YouTube los tangos que le gustan.</p>` },
  ],
  practica: [
    "Instalá Mi Argentina o Mi PAMI desde la tienda oficial con alguien de confianza y anotá qué te pidió para crear la cuenta.",
    "Anotá en tu cuaderno las páginas y los teléfonos oficiales de PAMI y ANSES.",
    "Buscá en Google Maps cómo llegar en colectivo a un lugar que conozcas y anotá cuántos minutos dice que tardás.",
  ],
  recursos: [
    { t: "Mi Argentina: la app oficial con tu DNI digital y tus turnos", url: "https://www.argentina.gob.ar/miargentina" },
    { t: "PAMI: página oficial (trámites, cartilla y avisos de estafas)", url: "https://www.pami.org.ar/" },
    { t: "ANSES: página oficial", url: "https://www.anses.gob.ar/" },
  ],
  quiz: [
    { q: "Querés tener tu DNI en el celular. ¿Qué app usás?", opciones: ["WhatsApp","Una app que te recomendó un desconocido","Mi Argentina","La galería de fotos"], correcta: 2, explicacion: "Mi Argentina es la oficial y tiene el DNI digital. La galería tienta porque podrías sacarle una foto, pero no es lo mismo." },
    { q: "Al crear tu cuenta en Mi Argentina te pide una foto de tu cara y del DNI. ¿Por qué?", opciones: ["Para confirmar que sos vos","Para un concurso","Para venderte algo","Es una estafa"], correcta: 0, explicacion: "Es la validación de identidad de la app oficial. Pensar que es estafa tienta, pero acá la instalaste vos desde la tienda oficial." },
    { q: "Vas a elegir la contraseña de Mi Argentina. ¿Cuál es mejor?", opciones: ["Tu nombre","Tu cumpleaños","123456","Una difícil de adivinar, anotada en tu cuaderno en casa"], correcta: 3, explicacion: "Tiene que ser difícil para otros. El cumpleaños tienta porque no se olvida, pero es fácil de averiguar." },
    { q: "Querés consultar algo de PAMI por teléfono. ¿A qué número llamás?", opciones: ["Al que te mandaron por WhatsApp","Al 138, gratis las 24 horas","Al 911","Al 130"], correcta: 1, explicacion: "El 138 es el oficial de PAMI. El 130 tienta, pero es el de ANSES." },
    { q: "Querés ver tu recibo de haberes. ¿Dónde lo buscás?", opciones: ["En un link que te mandaron","En Mi PAMI","En Mi ANSES, con tu Clave de la Seguridad Social","En YouTube"], correcta: 2, explicacion: "El recibo es de ANSES. Mi PAMI tienta porque también es oficial, pero ahí está tu credencial de salud." },
    { q: "Te llama alguien \"de ANSES\" y te pide tu Clave de la Seguridad Social. ¿Qué hacés?", opciones: ["No se la das y llamás vos al 130","Se la das, es de ANSES","Le das la mitad","Le pedís que te la mande por mensaje"], correcta: 0, explicacion: "La clave es secreta y ANSES no la pide. Que diga ser de ANSES tienta, pero cualquiera puede decirlo." },
    { q: "¿Qué es una receta electrónica?", opciones: ["Una receta de cocina","Un remedio que se compra por internet","Una foto de la receta en WhatsApp","Una receta que el médico carga en el sistema, sin papel"], correcta: 3, explicacion: "La farmacia la busca en el sistema. La foto tienta, pero no es lo mismo que la receta cargada." },
    { q: "En la farmacia te piden la credencial de PAMI y no la llevaste. ¿Qué te sirve?", opciones: ["Tu foto de perfil","La credencial digital de la app Mi PAMI","Un audio","Tu contraseña"], correcta: 1, explicacion: "La app tiene tu credencial digital. La contraseña tienta, pero nunca se muestra." },
    { q: "Querés escuchar tu radio de AM en el celular. ¿Qué hacés?", opciones: ["Comprás otra radio","Instalás cualquier app que te manden","La buscás en Google por su nombre y la escuchás en vivo","No se puede"], correcta: 2, explicacion: "Casi todas las radios se escuchan por internet. Instalar algo que te mandan tienta, pero mejor buscarla vos." },
    { q: "Un video de YouTube te ofrece plata fácil si instalás algo. ¿Qué hacés?", opciones: ["Lo cerrás y no instalás nada","Instalás para probar","Le das tus datos","Se lo mandás a tus amigas"], correcta: 0, explicacion: "Plata fácil es señal de trampa. Probar tienta, pero así entran en tu celular." },
    { q: "Querés saber qué colectivo tomar para ir al hospital. ¿Qué usás?", opciones: ["La calculadora","El reloj","La galería","Google Maps → Cómo llegar → el dibujo del colectivo"], correcta: 3, explicacion: "Maps te dice el colectivo y cuánto tardás. Preguntar en la parada tienta y también sirve, pero Maps te lo dice antes de salir." },
    { q: "Te mandaron una foto linda de tu nieto por WhatsApp. ¿Cómo la guardás?", opciones: ["Le sacás una foto a la pantalla con otro celular","Tocás la foto y después Guardar","La reenviás a todos","No se puede guardar"], correcta: 1, explicacion: "WhatsApp deja guardarla en tu galería. Reenviarla tienta para no perderla, pero no hace falta." },
  ],
},
{
  id: "proyecto",
  icono: "📒",
  titulo: "Proyecto final: mi cuaderno digital",
  nivel: "Avanzado",
  objetivos: [
    "Armar un cuaderno con tus números de ayuda, tus apps y lo que ya sabés hacer",
    "Revisar con una rúbrica que tu celular quede seguro",
    "Pedir ayuda sin depender de nadie y enseñarle a otra persona",
  ],
  lecciones: [
    { titulo: "Mi cuaderno digital", html: `
      <p class="idea">Tu <strong>cuaderno digital</strong> es un cuaderno de papel donde anotás todo lo importante del celular. Así no dependés de acordarte, y si alguien te ayuda, lo encuentra.</p>
      <pre><code>Mi cuaderno digital (ejemplo de Norma):

NÚMEROS DE AYUDA
- PAMI: 138 (24 horas)       - ANSES: 130
- Banco: el de atrás de la tarjeta
- Mi hija Laura: 11 ....     - Mi vecino Juan: 11 ....

MI WIFI
- Red: (la de la etiqueta del módem)

MIS APPS
- WhatsApp, Mi PAMI, Mi Argentina, Google Maps, YouTube

LO QUE YA SÉ HACER
- Mandar audios y fotos
- Hacer videollamadas
- Buscar con la voz

MIS REGLAS
- Nunca paso códigos ni claves.
- Si me apuran: paro, pregunto, protejo.</code></pre>
      <p><strong>¿Y las contraseñas?</strong> Si las anotás, que sea en este cuaderno, guardado en un lugar de tu casa. No las anotes en un papelito en la billetera ni en el mismo celular.</p>
      <p><strong>El proyecto final</strong> de este curso es armar tu propio cuaderno, con las partes del ejemplo.</p>
      <p>Por ejemplo, Norma guarda su cuaderno en el cajón de la cocina. Cuando su nieto la ayuda con el celular, primero lo abre ahí.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista para revisar si algo está completo. Revisá tu cuaderno y tu celular con alguien de confianza.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Números de ayuda</td><td>Tiene 138, 130, el banco y 2 personas de confianza</td><td>Le falta alguno</td><td>No tiene</td></tr>
        <tr><td>Conexión</td><td>Sabe conectarse al wifi y tiene anotada la red</td><td>Una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Comunicación</td><td>Manda audios y fotos, y hace videollamadas</td><td>Solo mensajes</td><td>Nada todavía</td></tr>
        <tr><td>Seguridad</td><td>Verificación en dos pasos activada y las 3 P anotadas</td><td>Una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Servicios</td><td>Tiene instalada y abierta al menos una app oficial</td><td>La tiene sin usar</td><td>Ninguna</td></tr>
        <tr><td>Contraseñas</td><td>Anotadas en el cuaderno, guardado en casa</td><td>—</td><td>En la billetera, en el celular o se las dio a alguien</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡listo!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos con calma y volvé a probar
Regla: si "Seguridad" tiene 0, el cuaderno no está listo,
aunque el total sea alto.</code></pre>
      <p>Por ejemplo, Norma sacó 10: le faltaba activar la verificación en dos pasos. La activó con su hija y llegó a 12.</p>` },
    { titulo: "Pedir ayuda y enseñar", html: `
      <p class="idea">Pedir ayuda está bien. La mejor ayuda es la que te <strong>enseña</strong> a hacerlo, no la que lo hace por vos. Y lo que aprendiste lo podés enseñar.</p>
      <table>
        <tr><th>Cuando pidas ayuda, decí...</th><th>Por qué sirve</th></tr>
        <tr><td>"Mostrame despacio, que lo quiero hacer yo"</td><td>Lo aprendés y la próxima vez no dependés</td></tr>
        <tr><td>"Esperá que lo anoto"</td><td>Te queda en el cuaderno</td></tr>
        <tr><td>"¿Lo repetimos una vez más?"</td><td>Practicar es lo que hace que no se olvide</td></tr>
      </table>
      <p><strong>Para enseñarle a otra persona</strong> (una amiga, un vecino):</p>
      <ol>
        <li>Que el celular lo tenga ella, no vos.</li>
        <li>Explicá un paso por vez, y que lo haga.</li>
        <li>Que lo anote en su cuaderno.</li>
        <li>Contale la regla de las 3 P.</li>
      </ol>
      <p><strong>Seguí aprendiendo:</strong> muchos municipios, centros de jubilados y universidades dan talleres gratis de celular para personas mayores. Preguntá en tu centro de jubilados o en el municipio.</p>
      <p>Por ejemplo, Norma le enseñó a su amiga Elsa a mandar audios. Elsa tenía el celular en la mano y lo anotó en su cuaderno: a la semana ya mandaba audios sola.</p>` },
  ],
  practica: [
    "Armá tu cuaderno digital con las 5 partes del ejemplo y anotá cuántos números de ayuda tiene.",
    "Revisá tu cuaderno y tu celular con la rúbrica junto a alguien de confianza. Anotá el puntaje de cada criterio y el total.",
    "Enseñale una cosa a otra persona con los 4 pasos y anotá qué le enseñaste y si lo pudo hacer sola.",
  ],
  recursos: [
    { t: "Con Vos en la Web: cuidados en internet (Gobierno de Argentina)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "PAMI: página oficial (trámites, cartilla y avisos de estafas)", url: "https://www.pami.org.ar/" },
    { t: "Centro Nacional de Ciberseguridad (Argentina)", url: "https://www.argentina.gob.ar/ciberseguridad" },
  ],
  quiz: [
    { q: "Si se te pierde el celular, ¿para qué te sirve el cuaderno digital?", opciones: ["Para escribir las contraseñas en la billetera","Para pasarle tus claves al banco","Para tener anotado lo importante y no depender de acordarte","No sirve, todo está en el celular"], correcta: 2, explicacion: "Todo queda a mano y guardado en casa. \"Está en el celular\" tienta, pero si se pierde o se rompe, el cuaderno sigue." },
    { q: "Si armás tu cuaderno hoy, ¿qué números de ayuda no pueden faltar?", opciones: ["PAMI 138, ANSES 130, el del banco y 2 personas de confianza","Solo el de la pizzería","Los números que te mandaron por WhatsApp como \"oficiales\"","Ninguno"], correcta: 0, explicacion: "Son los que necesitás si algo pasa. Los \"oficiales\" de WhatsApp tientan, pero pueden ser falsos." },
    { q: "Si querés anotar tus contraseñas, ¿dónde conviene?", opciones: ["En un papelito en la billetera","En una nota del mismo celular","En el grupo de la familia","En el cuaderno, guardado en un lugar de tu casa"], correcta: 3, explicacion: "En casa están seguras. La billetera tienta porque la llevás siempre, pero si te la roban, se llevan todo." },
    { q: "Revisaste con la rúbrica y \"Seguridad\" sacó 0. ¿Tu cuaderno está listo?", opciones: ["Sí, si el total es alto","No: primero activás la verificación en dos pasos y anotás las 3 P","Sí, la seguridad no importa","No se puede arreglar"], correcta: 1, explicacion: "La regla dice que sin seguridad no está listo. Un total alto tienta, pero lo más importante es cuidarte." },
    { q: "Sacaste 9 en la rúbrica. ¿Qué hacés?", opciones: ["Dejás todo como está","Empezás de cero el curso entero","Mejorás los criterios que sacaron 0 o 1","Le pedís a alguien que lo complete por vos"], correcta: 2, explicacion: "De 7 a 10 se mejora lo que falta. Empezar de cero tienta, pero no hace falta." },
    { q: "Tu nieto quiere ayudarte y lo hace todo él muy rápido. ¿Qué le decís?", opciones: ["\"Mostrame despacio, que lo quiero hacer yo\"","Nada, que lo haga siempre él","\"Dejá, no quiero aprender\"","\"Hacelo más rápido\""], correcta: 0, explicacion: "Si lo hacés vos, aprendés. Que lo haga él tienta por comodidad, pero la próxima vez dependés otra vez." },
    { q: "Si te están enseñando algo nuevo, ¿qué conviene hacer?", opciones: ["Confiar en que te vas a acordar","Mirar la tele","Apagar el celular","Anotarlo en el cuaderno"], correcta: 3, explicacion: "Lo anotado no se olvida. Acordarte tienta, pero con varios pasos es difícil." },
    { q: "Vas a enseñarle a una amiga a mandar audios. ¿Quién tiene el celular?", opciones: ["Vos, y ella mira","Ella: así lo hace con sus manos","Nadie","Un tercero"], correcta: 1, explicacion: "Se aprende haciendo. Hacerlo vos tienta porque es más rápido, pero ella no aprende." },
    { q: "Le enseñás algo a una amiga. ¿Qué regla le contás sí o sí?", opciones: ["Que acepte todos los grupos","Que pase el código si se lo piden amable","La de las 3 P: parar, preguntar y proteger","Que instale lo que le manden"], correcta: 2, explicacion: "Es la que la cuida de las estafas. Las otras tientan por ser \"amables\", pero son trampas." },
    { q: "Querés seguir aprendiendo con otras personas. ¿Dónde preguntás?", opciones: ["En tu centro de jubilados o en el municipio","En un grupo de desconocidos que ofrece cursos pagos por WhatsApp","En ningún lado","En un link que te mandaron sin conocer a nadie"], correcta: 0, explicacion: "Muchos dan talleres gratis. El grupo de desconocidos tienta por cómodo, pero puede ser una trampa." },
    { q: "Se te rompió el celular y tenés uno nuevo. ¿Qué te ayuda a dejarlo como antes?", opciones: ["Acordarte de todo de memoria","Pedirle las claves a un desconocido","Nada","Tu cuaderno con las apps, la red del wifi y lo que sabés hacer"], correcta: 3, explicacion: "El cuaderno tiene todo lo que necesitás. La memoria tienta, pero es fácil olvidarse algo." },
    { q: "Una vecina te cuenta que cayó en una estafa. ¿Qué le decís?", opciones: ["Que se lo guarde","Que no es su culpa y que llame al banco y haga la denuncia","Que fue distraída","Que espere a ver qué pasa"], correcta: 1, explicacion: "Actuar rápido sirve. Callarse tienta por vergüenza, pero el estafador gana tiempo." },
  ],
},
];
