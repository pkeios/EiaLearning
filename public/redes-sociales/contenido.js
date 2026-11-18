// Temario del curso "Redes sociales para tu emprendimiento". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js redes-sociales y node tools/metodologia.js redes-sociales
window.TEMARIO = [
{
  id: "estrategia",
  icono: "🧭",
  titulo: "Para qué y dónde estar",
  nivel: "Básico",
  objetivos: [
    "Escribir para qué querés usar las redes en tu emprendimiento, con un objetivo que se pueda medir",
    "Elegir 1 o 2 redes según dónde está tu público y el tiempo que tenés",
    "Describir a tu cliente ideal en 5 líneas",
  ],
  lecciones: [
    { titulo: "Para qué sirven las redes en un emprendimiento", html: `
      <p class="idea">Las redes no venden solas: sirven para que <strong>te encuentren</strong>, <strong>confíen</strong> en vos y <strong>te escriban</strong>. La venta casi siempre se cierra después, en un mensaje.</p>
      <p>En todo el curso acompañamos a <strong>Lucía</strong>, que hace velas y jabones artesanales en su casa de Córdoba y los vende a conocidos. Quiere usar las redes para que le compre gente que todavía no la conoce.</p>
      <pre><code>El camino de un cliente en redes:
Te ve (una publicación, un video)
  → mira tu perfil
  → confía (fotos reales, opiniones, precios claros)
  → te escribe
  → compra
  → vuelve, y te recomienda</code></pre>
      <p>Cada parte del curso trabaja un paso de ese camino: el perfil, para que confíen; el contenido, para que te vean; la comunidad, para que te escriban; las métricas, para saber dónde se corta.</p>
      <p>Un <strong>objetivo</strong> sirve si se puede medir. "Crecer en redes" no se puede medir. "Recibir 10 mensajes de gente nueva por semana" sí.</p>
      <table>
        <tr><th>Objetivo vago</th><th>Objetivo que se mide</th></tr>
        <tr><td>Ser conocida</td><td>Que 500 cuentas nuevas vean mis publicaciones por semana</td></tr>
        <tr><td>Vender más</td><td>Cerrar 4 ventas por mes que empiecen en Instagram</td></tr>
        <tr><td>Tener clientes fieles</td><td>Que 1 de cada 3 clientes vuelva a comprar en 3 meses</td></tr>
      </table>
      <p><strong>Seguidores no es lo mismo que clientes.</strong> Una cuenta con 300 seguidores del barrio que te compran vale más que una con 10.000 que nunca te escriben.</p>
      <p>Por ejemplo, Lucía al principio quería "tener muchos seguidores". Lo cambió por "10 mensajes por semana de gente que no me conoce". Así sabe cada domingo si va bien.</p>` },
    { titulo: "Elegir la red", html: `
      <p class="idea">Mejor <strong>una red bien usada</strong> que cuatro abandonadas. Elegí según dónde está la gente que te compra y cuánto tiempo tenés.</p>
      <table>
        <tr><th>Red</th><th>Fuerte en</th><th>Le sirve a</th></tr>
        <tr><td>Instagram</td><td>Fotos, videos cortos e historias; mensajes directos</td><td>Productos que se ven lindos: ropa, comida, deco, artesanías</td></tr>
        <tr><td>Facebook</td><td>Grupos del barrio y de compra-venta, público adulto</td><td>Servicios locales, ventas en la zona</td></tr>
        <tr><td>TikTok</td><td>Videos cortos que pueden llegar a mucha gente que no te sigue</td><td>Quien se anima a mostrar procesos y a grabar seguido</td></tr>
        <tr><td>WhatsApp (estados y canales)</td><td>Gente que ya tiene tu número</td><td>Avisar novedades a clientes que ya compraron</td></tr>
      </table>
      <p>Un <strong>canal de WhatsApp</strong> es una lista de novedades a la que la gente se suma para recibir tus avisos, sin ser un grupo: no pueden escribirse entre ellos.</p>
      <pre><code>Tres preguntas para elegir:
1. ¿Dónde pasa el tiempo la gente que me compra?
   (preguntale a 5 clientes)
2. ¿Mi producto se luce en foto, en video o en texto?
3. ¿Cuántas horas por semana tengo de verdad? (anotalo)</code></pre>
      <p>Si tenés 2 horas por semana, alcanza para una red principal y los estados de WhatsApp. Con más tiempo, podés sumar una segunda red reutilizando lo mismo: el video que hacés para Instagram sirve para TikTok.</p>
      <p>Los nombres de los botones y las funciones de cada app cambian seguido. Este curso explica las ideas, que duran; si un botón no está donde dice, buscalo en la ayuda oficial de la app.</p>
      <p>Por ejemplo, Lucía les preguntó a 5 clientas: 4 usaban Instagram todos los días y 1 solo Facebook. Eligió Instagram como red principal y estados de WhatsApp para las clientas de siempre.</p>` },
    { titulo: "Tu cliente ideal", html: `
      <p class="idea">El <strong>cliente ideal</strong> es una descripción de la persona que más te compra o que más querés que te compre. Pensar en ella te dice qué publicar y cómo hablar.</p>
      <pre><code>Ficha del cliente ideal (5 líneas):
1. Quién es: edad aproximada, dónde vive, con quién.
2. Qué problema o deseo tiene que tu producto resuelve.
3. Qué le preocupa antes de comprar (precio, calidad, envío).
4. Dónde y cuándo usa el celular.
5. Qué palabras usa para pedir lo que vendés.</code></pre>
      <p>No inventes: sacalo de tus clientes reales. Mirá los mensajes que ya recibiste y anotá qué preguntan y con qué palabras.</p>
      <table>
        <tr><th>Si tu cliente...</th><th>Entonces en redes...</th></tr>
        <tr><td>Pregunta siempre por el envío</td><td>Poné el envío en el perfil y en una historia destacada</td></tr>
        <tr><td>Compra para regalar</td><td>Mostrá el paquete de regalo y las fechas especiales</td></tr>
        <tr><td>Duda de la calidad</td><td>Mostrá el proceso y opiniones de otros clientes</td></tr>
      </table>
      <p><strong>Hablale a una persona.</strong> Un texto escrito "para todos" no le habla a nadie. Si tu clienta ideal es una mamá de 35 años que busca regalos, escribí como le escribirías a ella.</p>
      <p>Por ejemplo, Lucía releyó sus últimos 20 mensajes. 12 eran para regalar, y la pregunta más repetida era "¿hacés envíos a otra ciudad?". Su ficha dice: "mujer de 30 a 50, compra para regalar, quiere saber si llega a tiempo".</p>` },
  ],
  practica: [
    "Escribí un objetivo para tus redes que se pueda medir, con un número y un plazo, y anotá dónde lo vas a tener a la vista.",
    "Preguntale a 5 clientes o conocidos qué red usan más y anotá las respuestas en una tabla.",
    "Releé tus últimos 10 mensajes de clientes y completá la ficha de 5 líneas de tu cliente ideal.",
  ],
  recursos: [
    { t: "Meta para empresas: cursos gratis de Facebook, Instagram y WhatsApp (Meta Blueprint)", url: "https://www.facebook.com/business/learn" },
    { t: "Google Actívate: cursos gratis de marketing digital", url: "https://learndigital.withgoogle.com/activate" },
    { t: "Curso de este sitio: Vender por internet (publicaciones, fotos, cobros y envíos)", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
  ],
  quiz: [
    { q: "Tu objetivo es \"crecer en redes\". ¿Qué le falta?", opciones: ["Nada, está claro","Más redes","Un número y un plazo para poder medirlo","Un logo nuevo"], correcta: 2, explicacion: "Sin número no sabés si vas bien. \"Está claro\" tienta, pero no te dice qué hacer el lunes." },
    { q: "Si tenés que elegir entre 300 seguidores del barrio que te compran y 10.000 que nunca escriben, ¿qué vale más para tu emprendimiento?", opciones: ["Los 300 que compran","Los 10.000, siempre","Da igual","Ninguno"], correcta: 0, explicacion: "Lo que sostiene el emprendimiento son las ventas. El número grande tienta porque impresiona, pero no paga cuentas." },
    { q: "En el camino del cliente, después de ver una publicación tuya, ¿qué suele hacer la persona?", opciones: ["Compra enseguida sin preguntar","Te deja de seguir","Llama por teléfono","Mira tu perfil para ver si confía"], correcta: 3, explicacion: "El perfil es la vidriera. Comprar enseguida tienta pensarlo, pero casi nadie compra sin mirar antes." },
    { q: "Tenés 2 horas por semana para redes. ¿Qué hacés?", opciones: ["Abrís cuenta en las 4 redes","Una red principal bien usada, más los estados de WhatsApp","Esperás a tener más tiempo","Publicás 5 veces por día una semana y después nada"], correcta: 1, explicacion: "Poco tiempo alcanza para una red constante. Estar en todas tienta, pero terminan abandonadas." },
    { q: "Vendés comida casera en tu barrio para gente adulta. ¿Qué red te conviene probar, además de Instagram?", opciones: ["Una red solo para profesionales","Ninguna","Los grupos de Facebook del barrio","Solo TikTok, aunque no grabes videos"], correcta: 2, explicacion: "Los grupos del barrio concentran gente de la zona. TikTok tienta por moda, pero si no grabás seguido no rinde." },
    { q: "Si querés avisar novedades a clientes que ya tienen tu número, sin que se escriban entre ellos, ¿qué usás?", opciones: ["Un canal de WhatsApp o tus estados","Un grupo de WhatsApp con todos","Un mail a cada uno a mano","Una llamada por persona"], correcta: 0, explicacion: "El canal es una lista de avisos. El grupo tienta por fácil, pero ahí todos se escriben y comparten sus números." },
    { q: "Hacés un video para Instagram y también tenés TikTok. ¿Qué hacés?", opciones: ["Hacés uno totalmente distinto","No lo subís a TikTok","Lo subís como foto","Lo reutilizás en TikTok"], correcta: 3, explicacion: "Reutilizar ahorra tiempo. Hacer otro tienta para variar, pero duplica tu trabajo." },
    { q: "Para elegir red, preguntás a 5 clientes y 4 dicen Instagram. ¿Cuál elegís como principal?", opciones: ["La que usa la otra persona","Instagram","Todas por igual","La que esté de moda"], correcta: 1, explicacion: "Tu red es donde está tu cliente. La moda tienta, pero tus clientes ya te dijeron dónde están." },
    { q: "Vas a armar la ficha de tu cliente ideal. ¿De dónde sacás los datos?", opciones: ["Los inventás","De una foto de stock","De tus clientes reales y sus mensajes","De lo que te gustaría a vos"], correcta: 2, explicacion: "Los mensajes reales dicen qué preguntan y cómo hablan. Inventarlo tienta por rápido, pero describís a alguien que no existe." },
    { q: "Tus clientes preguntan siempre por el envío. ¿Qué hacés en redes?", opciones: ["Ponés la información de envíos en el perfil y en una historia destacada","Contestás cada vez lo mismo y nada más","Dejás de hacer envíos","Lo escondés para que pregunten"], correcta: 0, explicacion: "Si está a la vista, la gente no se frena. Que pregunten tienta para empezar charla, pero muchos se van sin preguntar." },
    { q: "Si tu clienta ideal compra para regalar, ¿qué te conviene mostrar?", opciones: ["Solo el precio","Fotos de tu casa","Nada en especial","El paquete de regalo y las fechas especiales"], correcta: 3, explicacion: "Mostrás lo que a ella le importa. Solo el precio tienta por directo, pero no le habla de su deseo." },
    { q: "Si escribís tus publicaciones \"para todo el mundo\", ¿qué pasa?", opciones: ["Llegás a más gente","No le hablás a nadie en especial y el texto convence menos","Vendés más","Nada"], correcta: 1, explicacion: "Hablarle a una persona es más claro. \"Llegás a más gente\" tienta, pero un texto genérico no frena a nadie." },
  ],
},
{
  id: "perfil",
  icono: "🪪",
  titulo: "Un perfil que da confianza",
  nivel: "Básico",
  objetivos: [
    "Pasar tu cuenta a profesional y elegir un nombre fácil de encontrar",
    "Escribir una biografía que diga qué vendés, para quién y cómo comprar",
    "Armar historias destacadas con precios, envíos, opiniones y cómo comprar",
  ],
  lecciones: [
    { titulo: "Cuenta profesional y nombre", video: {"id":"6N4p_yMF2L0","t":"Cómo cambiar a cuenta profesional en Instagram · WilDroid (2:07)"}, html: `
      <p class="idea">Una <strong>cuenta profesional</strong> es gratis y te da dos cosas que una cuenta personal no tiene: <strong>estadísticas</strong> (cuánta gente ve lo que publicás) y <strong>botones de contacto</strong>.</p>
      <table>
        <tr><th>Cuenta personal</th><th>Cuenta profesional</th></tr>
        <tr><td>Sin estadísticas</td><td>Ves alcance, visitas al perfil y mensajes</td></tr>
        <tr><td>Sin botones de contacto</td><td>Botones para escribir, llamar o ver la dirección</td></tr>
        <tr><td>No podés promocionar</td><td>Podés pagar para promocionar una publicación</td></tr>
      </table>
      <p>En Instagram el cambio se hace desde la configuración de la cuenta, en una opción para cuentas profesionales; la app te pregunta la categoría (por ejemplo, "Artículos para el hogar"). Separá tu cuenta personal de la del emprendimiento: tus fotos de vacaciones no van en la vidriera.</p>
      <pre><code>Un buen nombre de usuario:
✔ corto y fácil de dictar por teléfono:   @velaslucia
✔ igual en todas tus redes
✘ con números y guiones raros:           @velas__lu_2024_
✘ con letras que se confunden al dictar:  @belaslusia</code></pre>
      <p><strong>La prueba del dictado:</strong> decile tu usuario a alguien en voz alta, sin deletrear. Si lo encuentra en la app a la primera, está bien.</p>
      <p><strong>La foto de perfil</strong> se ve chiquita y redonda: usá tu logo simple o una foto de tu producto estrella, con fondo liso. Si sos la cara del emprendimiento (una peluquera, un profe), una foto tuya sonriendo da más confianza.</p>
      <p>Por ejemplo, Lucía se llamaba @lu.velas.y.jabones.cba. Le dictó el nombre a una amiga y no la encontró. Lo cambió por @velaslucia y le pasó lo mismo a otra amiga: la encontró en 5 segundos.</p>` },
    { titulo: "La biografía", video: {"id":"6Iv0qCozvh0","t":"¿Cómo optimizar tu perfil de Instagram para negocios? · HubSpot Español (10:24)"}, html: `
      <p class="idea">La <strong>biografía</strong> (bio) es el texto corto de arriba del perfil. En 3 o 4 líneas tiene que contestar: <strong>qué vendés, para quién, dónde, y cómo se compra</strong>.</p>
      <pre><code>Fórmula de la bio:
Línea 1: qué hacés y para quién
Línea 2: lo que te diferencia
Línea 3: dónde estás y si enviás
Línea 4: cómo comprar → enlace

Ejemplo:
🕯️ Velas y jabones artesanales para regalar
🌿 Cera de soja y aromas naturales, hechos a mano
📍 Córdoba · envíos a todo el país
👇 Pedidos por WhatsApp</code></pre>
      <p>Abajo de la bio va <strong>un enlace</strong>. El más útil para empezar es uno que abra un chat de WhatsApp contigo. Tiene esta forma (el número completo, con código de país y sin el 0 ni el 15):</p>
      <pre><code>https://wa.me/549351xxxxxxx
         549 = Argentina, celular
         351 = característica de Córdoba
         xxxxxxx = tu número, sin el 15</code></pre>
      <table>
        <tr><th>Error común</th><th>Mejor</th></tr>
        <tr><td>"Precios por privado"</td><td>Precio a la vista: mucha gente no pregunta y se va</td></tr>
        <tr><td>Bio con frases lindas pero sin decir qué vendés</td><td>La primera línea dice el producto</td></tr>
        <tr><td>Sin forma de contacto</td><td>Enlace a WhatsApp o botón de mensaje</td></tr>
      </table>
      <p>Probá tu enlace desde el celular de otra persona antes de dejarlo: si tiene un número de más o de menos, no abre el chat.</p>
      <p>Por ejemplo, la bio de Lucía decía "Amor en cada aroma ✨". Era linda, pero nadie sabía que vendía velas. Con la fórmula, empezó a recibir mensajes que arrancaban con "¿cuánto sale la vela de lavanda?".</p>` },
    { titulo: "Historias destacadas", html: `
      <p class="idea">Las <strong>historias</strong> duran 24 horas, pero podés guardarlas en <strong>destacadas</strong>: los circulitos debajo de la bio, que quedan fijos. Ahí van las respuestas a las preguntas de siempre.</p>
      <table>
        <tr><th>Destacada</th><th>Qué poner</th></tr>
        <tr><td>Precios</td><td>Una foto por producto con su precio actualizado</td></tr>
        <tr><td>Envíos</td><td>Zonas, costos y cuánto tarda</td></tr>
        <tr><td>Cómo comprar</td><td>Los pasos: elegís, escribís, pagás, recibís</td></tr>
        <tr><td>Opiniones</td><td>Capturas de mensajes de clientes contentos (con su permiso)</td></tr>
        <tr><td>Proceso</td><td>Cómo hacés tu producto</td></tr>
      </table>
      <p><strong>Con permiso:</strong> antes de mostrar el mensaje de un cliente, preguntale si te deja. Tapá su nombre y su foto si no quiere aparecer.</p>
      <pre><code>Orden de las destacadas: de izquierda a derecha,
lo que más te preguntan primero.
  [Precios] [Envíos] [Cómo comprar] [Opiniones] [Proceso]</code></pre>
      <p><strong>Mantenelas al día.</strong> Un precio viejo en una destacada genera discusiones. Cuando cambies precios, borrá la historia vieja de la destacada y subí la nueva.</p>
      <p>Las <strong>portadas</strong> de las destacadas (el dibujito del círculo) se pueden elegir: usá el mismo color o estilo en todas, así el perfil se ve ordenado.</p>
      <p>Por ejemplo, Lucía armó 4 destacadas. A la semana notó que la mitad de los mensajes ya no preguntaban el envío: lo habían visto en "Envíos" y escribían directo para comprar.</p>` },
  ],
  practica: [
    "Hacé la prueba del dictado con tu nombre de usuario: dictáselo a 2 personas y anotá cuántos segundos tardaron en encontrarte.",
    "Escribí tu bio con la fórmula de 4 líneas y mostrásela a 3 personas: anotá si pudieron decir qué vendés sin preguntarte.",
    "Armá tu enlace de WhatsApp, probalo desde otro celular y anotá si abrió el chat a la primera.",
    "Creá al menos 3 historias destacadas (precios, envíos y cómo comprar) y anotá la fecha en que actualizaste los precios.",
  ],
  recursos: [
    { t: "Instagram para empresas: guías oficiales para negocios", url: "https://business.instagram.com/" },
    { t: "Meta para empresas: cursos gratis de Facebook, Instagram y WhatsApp (Meta Blueprint)", url: "https://www.facebook.com/business/learn" },
  ],
  quiz: [
    { q: "Tu cuenta es personal y querés ver cuánta gente ve tus publicaciones. ¿Qué hacés?", opciones: ["Pagás una suscripción","Contás los me gusta a mano","La pasás a cuenta profesional, que es gratis","No se puede saber"], correcta: 2, explicacion: "La cuenta profesional da estadísticas sin costo. Pagar tienta pensando que es un servicio extra, pero no hace falta." },
    { q: "Usás la misma cuenta para tu emprendimiento y tus fotos de vacaciones. ¿Qué conviene?", opciones: ["Separar: una cuenta personal y otra del emprendimiento","Seguir igual, así te conocen más","Borrar todas las fotos personales de tu vida","Hacer la cuenta privada"], correcta: 0, explicacion: "La vidriera muestra solo el negocio. Mezclar tienta \"para que te conozcan\", pero confunde a quien busca comprar." },
    { q: "Tu usuario es @velas__lu_2024_. ¿Qué problema tiene?", opciones: ["Ninguno","Es muy corto","No tiene emojis","Es difícil de dictar y de encontrar"], correcta: 3, explicacion: "Guiones y números raros se pierden al dictarlo. \"Ninguno\" tienta porque vos lo sabés de memoria, pero tus clientes no." },
    { q: "Si querés comprobar si tu nombre de usuario es bueno, ¿qué hacés?", opciones: ["Lo mirás vos","Se lo dictás a alguien en voz alta y ves si te encuentra a la primera","Contás las letras","Le preguntás a una IA"], correcta: 1, explicacion: "La prueba del dictado muestra el uso real. Mirarlo vos tienta, pero no ves lo que confunde a otros." },
    { q: "Tu bio dice \"Amor en cada aroma ✨\". ¿Qué le falta?", opciones: ["Más emojis","Una frase más larga","Decir qué vendés, dónde y cómo se compra","Nada"], correcta: 2, explicacion: "La bio tiene que informar. Más emojis tienta para decorar, pero sigue sin decir qué vendés." },
    { q: "Querés que el enlace de tu bio abra un chat de WhatsApp. ¿Qué formato usás?", opciones: ["https://wa.me/ con el número completo, con código de país, sin 0 ni 15","El número con 0 y 15","Tu número sin código de país","Tu nombre de usuario de Instagram"], correcta: 0, explicacion: "wa.me necesita el número internacional. Con 0 y 15 tienta porque así lo dictás, pero el enlace no abre." },
    { q: "Ya armaste tu enlace de WhatsApp. ¿Qué hacés antes de dejarlo en la bio?", opciones: ["Nada, ya está","Lo copiás en un papel","Lo probás solo en tu celular","Lo probás desde el celular de otra persona"], correcta: 3, explicacion: "Desde otro celular ves lo que ve el cliente. Probarlo en el tuyo tienta, pero ahí ya tenés el chat abierto." },
    { q: "Si ponés \"precios por privado\", ¿qué suele pasar?", opciones: ["Recibís más mensajes de compra","Mucha gente no pregunta y se va","Vendés más caro","Nada"], correcta: 1, explicacion: "El precio a la vista frena menos gente. \"Más mensajes\" tienta, pero muchos no preguntan nunca." },
    { q: "Las preguntas que más te hacen son precios y envíos. ¿Dónde dejás esas respuestas fijas en Instagram?", opciones: ["En una historia común, que dura 24 horas","En un comentario","En historias destacadas","En la foto de perfil"], correcta: 2, explicacion: "Las destacadas quedan fijas. La historia común tienta por fácil, pero desaparece al día siguiente." },
    { q: "Querés mostrar el mensaje de una clienta contenta. ¿Qué hacés antes?", opciones: ["Le pedís permiso y, si quiere, tapás su nombre y su foto","Lo subís directo, es un elogio","Lo cambiás para que suene mejor","Lo subís con su teléfono a la vista"], correcta: 0, explicacion: "Es su mensaje y sus datos. Subirlo directo tienta porque es algo bueno, pero no deja de ser de ella." },
    { q: "Subiste los precios. ¿Qué hacés con la destacada \"Precios\"?", opciones: ["La dejás igual","Agregás la nueva y dejás la vieja","Borrás toda la destacada","Borrás la historia vieja y subís la nueva"], correcta: 3, explicacion: "Un precio viejo genera discusiones. Dejar las dos tienta para no perder nada, pero confunde." },
    { q: "Si tenés 5 destacadas, ¿en qué orden las ponés?", opciones: ["Por orden alfabético","Primero lo que más te preguntan","Al azar","Primero la de tu proceso"], correcta: 1, explicacion: "Lo más buscado tiene que verse primero. El alfabético tienta por ordenado, pero no ayuda al cliente." },
  ],
},
{
  id: "contenido",
  icono: "🗓️",
  titulo: "Qué publicar y cuándo",
  nivel: "Intermedio",
  objetivos: [
    "Elegir 4 tipos de contenido que se repiten para tu emprendimiento",
    "Armar un calendario semanal realista para el tiempo que tenés",
    "Producir en tanda: varias publicaciones en una sola sesión",
  ],
  lecciones: [
    { titulo: "Los 4 tipos de contenido", html: `
      <p class="idea">Si todo lo que publicás es "comprame", la gente deja de mirar. Alterná <strong>4 tipos de contenido</strong>: mostrar, enseñar, detrás de escena y clientes.</p>
      <table>
        <tr><th>Tipo</th><th>Para qué</th><th>Ejemplo para velas</th></tr>
        <tr><td>Mostrar</td><td>Que vean el producto y el precio</td><td>La vela nueva de lavanda, con precio</td></tr>
        <tr><td>Enseñar</td><td>Que te guarden y te vean como alguien que sabe</td><td>"3 errores al prender una vela que la arruinan"</td></tr>
        <tr><td>Detrás de escena</td><td>Que confíen en quién hace las cosas</td><td>Un video corto vertiendo la cera</td></tr>
        <tr><td>Clientes</td><td>Que otros digan que sos de fiar</td><td>Foto de una clienta con su regalo (con permiso)</td></tr>
      </table>
      <p>Una guía para empezar: de cada 4 publicaciones, una muestra un producto para vender y las otras tres enseñan, muestran el proceso o a los clientes. No es una regla fija: probalo y mirá tus números (lo vas a ver en el módulo de métricas).</p>
      <pre><code>Lista de ideas que no se terminan:
- Las preguntas que te hacen por mensaje → una publicación cada una
- Cada producto → foto, video de uso y video de cómo se hace
- Fechas: Día de la Madre, Navidad, Día del Amigo
- Antes y después, errores comunes, consejos de cuidado</code></pre>
      <p><strong>Las preguntas de tus clientes son tu mejor fuente.</strong> Si una persona lo pregunta, muchas otras se lo preguntan sin escribirte.</p>
      <p>Por ejemplo, Lucía publicaba solo fotos de velas con el precio. Agregó un video de "cómo hacer que tu vela dure el doble". Fue la publicación que más gente guardó en el mes, y le llegaron 6 mensajes preguntando por esa vela.</p>` },
    { titulo: "El calendario semanal", video: {"id":"4WvgfAt2-wI","t":"Cómo crear un calendario de contenido para redes sociales · HubSpot Español (8:09)"}, html: `
      <p class="idea">Un <strong>calendario de contenido</strong> es una tabla que dice qué vas a publicar cada día. Te saca la pregunta de todos los días: "¿y hoy qué subo?".</p>
      <table>
        <tr><th>Día</th><th>Tipo</th><th>Formato</th><th>Idea</th></tr>
        <tr><td>Lunes</td><td>Enseñar</td><td>Carrusel</td><td>Cómo cuidar una vela para que dure</td></tr>
        <tr><td>Miércoles</td><td>Detrás de escena</td><td>Video corto</td><td>Vertiendo la cera</td></tr>
        <tr><td>Viernes</td><td>Mostrar</td><td>Foto con precio</td><td>Vela nueva de lavanda</td></tr>
        <tr><td>Todos los días</td><td>Varios</td><td>Historias</td><td>Pedidos del día, preguntas, encuestas</td></tr>
      </table>
      <p><strong>Constancia antes que cantidad.</strong> Tres publicaciones por semana durante tres meses rinden más que diez en una semana y después silencio. Elegí una frecuencia que puedas sostener aunque tengas una semana complicada.</p>
      <pre><code>Para elegir la frecuencia:
Horas por semana para redes:  2
Una publicación te lleva:     30 minutos
Historias y mensajes:         1 hora
→ 2 h - 1 h = 1 h → 2 publicaciones por semana</code></pre>
      <p><strong>¿A qué hora publicar?</strong> Cuando tu público está con el celular. Las estadísticas de la cuenta profesional muestran en qué horarios tus seguidores están más activos: usá eso antes que cualquier lista de "mejores horarios" de internet.</p>
      <p>Por ejemplo, Lucía tiene 3 horas por semana. Hizo la cuenta: 3 publicaciones de 30 minutos y 1 hora y media de historias y mensajes. Lo anotó en una tabla en el celular y lo cumple hace 2 meses.</p>` },
    { titulo: "Producir en tanda", html: `
      <p class="idea">Producir <strong>en tanda</strong> es hacer todo lo de la semana en una sola sesión: sacar fotos, grabar videos y escribir textos juntos. Ahorra tiempo porque armás el lugar una sola vez.</p>
      <pre><code>Una sesión de 2 horas (por ejemplo, el domingo):
1. 15 min  Elegí las 3 ideas de la semana del calendario.
2. 45 min  Fotos y videos de todo, con la misma luz.
3. 30 min  Escribí los 3 textos.
4. 15 min  Programá las publicaciones.
5. 15 min  Guardá ideas nuevas para la semana que viene.</code></pre>
      <p><strong>Programar</strong> es dejar la publicación lista para que salga sola en el día y la hora que elegís. Instagram y Facebook lo permiten desde la app o desde Meta Business Suite, la herramienta gratis de Meta para manejar las dos redes juntas.</p>
      <table>
        <tr><th>Tarea</th><th>En tanda</th><th>Lo que no se puede programar</th></tr>
        <tr><td>Fotos, videos y textos</td><td>Sí</td><td></td></tr>
        <tr><td>Publicaciones y videos</td><td>Sí, programados</td><td></td></tr>
        <tr><td>Responder mensajes</td><td></td><td>Todos los días</td></tr>
        <tr><td>Historias del día a día</td><td></td><td>Cuando pasan las cosas</td></tr>
      </table>
      <p><strong>Guardá ideas al vuelo:</strong> una nota en el celular llamada "Ideas" donde anotás cada pregunta de un cliente o cada cosa que te pasa en el taller. El domingo elegís de ahí.</p>
      <p>Por ejemplo, antes Lucía armaba la mesa de fotos tres veces por semana. Ahora la arma una vez el domingo, saca todo y programa. Ganó casi una hora por semana.</p>` },
  ],
  practica: [
    "Escribí 12 ideas de contenido, 3 de cada tipo (mostrar, enseñar, detrás de escena y clientes), y anotalas en tu nota de ideas.",
    "Hacé la cuenta de tu frecuencia con tus horas reales y armá el calendario de 1 semana en una tabla.",
    "Hacé una sesión en tanda: anotá cuánto tardaste y cuántas publicaciones dejaste programadas.",
  ],
  recursos: [
    { t: "Google Actívate: cursos gratis de marketing digital", url: "https://learndigital.withgoogle.com/activate" },
    { t: "Meta para empresas: cursos gratis de Facebook, Instagram y WhatsApp (Meta Blueprint)", url: "https://www.facebook.com/business/learn" },
    { t: "TikTok para empresas: blog oficial en español", url: "https://www.tiktok.com/business/es/blog" },
  ],
  quiz: [
    { q: "Todo lo que publicás es una foto con precio y cada vez te ven menos. ¿Qué cambiás?", opciones: ["Publicás más fotos con precio","Bajás los precios","Alternás con contenido que enseña, muestra el proceso y a los clientes","Dejás de publicar"], correcta: 2, explicacion: "Variar los tipos mantiene el interés. Más fotos con precio tienta para vender más, pero cansa." },
    { q: "Si querés que la gente guarde tu publicación, ¿qué tipo funciona mejor?", opciones: ["Uno que enseña algo útil","Una foto con precio","Un \"buen día\" sin más","Una foto borrosa"], correcta: 0, explicacion: "Lo útil se guarda para después. La foto con precio tienta, pero no hay nada que guardar." },
    { q: "Te quedaste sin ideas. ¿Dónde buscás primero?", opciones: ["Copiás a otra marca","Esperás la inspiración","Publicás cualquier cosa","En las preguntas que te hacen tus clientes"], correcta: 3, explicacion: "Cada pregunta es una publicación. Copiar tienta por rápido, pero no habla de tu producto ni de tus clientes." },
    { q: "Querés mostrar la foto de una clienta con tu producto. ¿Qué tipo de contenido es y qué necesitás?", opciones: ["Detrás de escena, sin permiso","Contenido de clientes, y su permiso","Enseñar, sin permiso","Mostrar, y pagarle"], correcta: 1, explicacion: "Es contenido de clientes, y la foto es de ella. Pagarle tienta pensarlo, pero lo que hace falta es su permiso." },
    { q: "Tenés 2 horas por semana, cada publicación te lleva 30 minutos y dedicás 1 hora a historias y mensajes. ¿Cuántas publicaciones hacés?", opciones: ["4","7","2","1"], correcta: 2, explicacion: "Te queda 1 hora: 2 publicaciones de 30 minutos. Cuatro tienta si te olvidás de los mensajes." },
    { q: "Si publicás 10 veces en una semana y después nada por un mes, ¿qué pasa?", opciones: ["Se pierde la constancia, que rinde más que la cantidad","Crecés más rápido","La app te premia","Nada"], correcta: 0, explicacion: "La constancia sostiene el crecimiento. \"Crecés más rápido\" tienta, pero después del silencio te olvidan." },
    { q: "Querés saber a qué hora publicar. ¿Qué mirás?", opciones: ["Una lista de horarios de internet","Publicás a la madrugada siempre","La hora que te queda cómoda, sin mirar nada","Las estadísticas de tu cuenta: cuándo están activos tus seguidores"], correcta: 3, explicacion: "Tus estadísticas muestran a tu público. La lista de internet tienta, pero habla de otro público." },
    { q: "Armaste la mesa de fotos tres veces esta semana. ¿Qué te ahorraría tiempo?", opciones: ["Sacar fotos más rápido y peor","Producir en tanda: todo en una sola sesión","Dejar de sacar fotos","Contratar a alguien enseguida"], correcta: 1, explicacion: "En tanda armás el lugar una vez. Sacar peor tienta para ganar minutos, pero se nota." },
    { q: "Si querés que tu publicación salga sola el viernes a las 19, ¿qué hacés?", opciones: ["Ponés una alarma y la subís a mano sí o sí","No se puede","La programás desde la app o Meta Business Suite","La subís ahora"], correcta: 2, explicacion: "Programar la deja lista. La alarma tienta, pero si ese día estás ocupada se te pasa." },
    { q: "¿Cuál de estas tareas no se puede dejar hecha en tanda?", opciones: ["Responder los mensajes de los clientes","Sacar las fotos","Escribir los textos","Programar las publicaciones"], correcta: 0, explicacion: "Los mensajes se responden todos los días. Escribir textos tienta incluirlo, pero eso sí se hace en tanda." },
    { q: "Un cliente te pregunta algo interesante un martes. ¿Qué hacés con esa idea?", opciones: ["La olvidás","La publicás sin pensar a la medianoche","Le pedís que te la escriba de nuevo el domingo","La anotás en tu nota de ideas para la próxima tanda"], correcta: 3, explicacion: "La nota guarda las ideas al vuelo. Publicar enseguida tienta, pero rompe tu calendario y sale apurado." },
    { q: "Si usás Instagram y Facebook, ¿qué herramienta gratis te deja manejarlas juntas?", opciones: ["Una planilla de cálculo","Meta Business Suite","El correo","Ninguna, hay que pagar"], correcta: 1, explicacion: "Meta Business Suite es de Meta y es gratis. \"Hay que pagar\" tienta pensarlo, pero no hace falta." },
  ],
},
{
  id: "formatos",
  icono: "🎬",
  titulo: "Fotos, carruseles, historias y videos cortos",
  nivel: "Intermedio",
  objetivos: [
    "Elegir el formato según lo que querés contar",
    "Grabar un video corto vertical con un gancho en los primeros 3 segundos y subtítulos",
    "Escribir un texto con una primera línea que frene y un llamado a la acción claro",
  ],
  lecciones: [
    { titulo: "Cada formato tiene su trabajo", html: `
      <p class="idea">Las redes tienen 4 formatos principales. No hay uno mejor: cada uno sirve para algo distinto.</p>
      <table>
        <tr><th>Formato</th><th>Qué es</th><th>Sirve para</th></tr>
        <tr><td>Foto</td><td>Una imagen con un texto</td><td>Mostrar un producto y su precio</td></tr>
        <tr><td>Carrusel</td><td>Varias imágenes que se pasan con el dedo, hasta 10 o más</td><td>Enseñar paso a paso, mostrar variantes, antes y después</td></tr>
        <tr><td>Historias</td><td>Fotos o videos verticales que duran 24 horas</td><td>El día a día, encuestas, avisos rápidos; las ven tus seguidores</td></tr>
        <tr><td>Video corto (en Instagram se llama reel)</td><td>Video vertical de pocos segundos a un par de minutos</td><td>Llegar a gente que todavía no te sigue</td></tr>
      </table>
      <p><strong>Vertical</strong> quiere decir más alto que ancho, como se sostiene el celular. La medida más usada es 9:16 (9 de ancho por 16 de alto): es la pantalla completa del celular.</p>
      <pre><code>¿Qué formato uso?
Quiero vender este producto hoy          → foto con precio + historia
Quiero enseñar algo de 4 pasos           → carrusel (1 paso por imagen)
Quiero que me conozca gente nueva        → video corto
Quiero preguntarle algo a mis seguidores → historia con encuesta</code></pre>
      <p><strong>Las historias son para los que ya te siguen</strong>; los videos cortos son los que más se muestran a gente que no te sigue. Por eso conviene usar los dos.</p>
      <p>Las fotos de producto se explican a fondo en el curso <strong>Vender por internet</strong> de este sitio: luz de ventana, fondo liso y el producto en uso.</p>
      <p>Por ejemplo, Lucía hizo un carrusel "Cómo elegir el aroma según el ambiente": una imagen por ambiente (cocina, baño, dormitorio, living). Fue el que más compartieron en el mes.</p>` },
    { titulo: "El video corto", video: {"id":"BzZiZWrviK0","t":"Cómo hacer reels para vender productos, sin salir en cámara · Nats (4:47)"}, html: `
      <p class="idea">En un video corto, los primeros <strong>3 segundos</strong> deciden si la persona se queda o pasa al siguiente. Esa primera parte se llama <strong>gancho</strong>.</p>
      <table>
        <tr><th>Gancho flojo</th><th>Gancho que frena</th></tr>
        <tr><td>"Hola, ¿cómo están? Hoy les quiero mostrar..."</td><td>"Este error hace que tu vela dure la mitad"</td></tr>
        <tr><td>El logo girando 3 segundos</td><td>El resultado final primero, y después cómo se hizo</td></tr>
        <tr><td>Una toma quieta y oscura</td><td>Movimiento: algo que se vierte, se abre, se transforma</td></tr>
      </table>
      <pre><code>Estructura simple de 15 a 30 segundos:
0-3 s    Gancho: el resultado o una frase que intriga
3-20 s   El contenido: el proceso, el consejo, el producto en uso
20-30 s  Cierre: qué hacer ahora ("escribime VELA por mensaje")</code></pre>
      <p><strong>Subtítulos:</strong> mucha gente mira los videos sin sonido, en el colectivo o en la sala de espera. Las apps tienen una opción para agregar subtítulos automáticos: revisalos, porque se equivocan con las palabras raras.</p>
      <p><strong>Sin salir en cámara también se puede:</strong> tus manos trabajando, el producto en uso, texto sobre la imagen. Lo importante es que se vea bien y se entienda.</p>
      <p><strong>Con el celular alcanza.</strong> Limpiá la lente con un trapito, grabá vertical, con luz de ventana de frente, y apoyá el celular en algo firme para que no tiemble.</p>
      <p>Por ejemplo, el primer video de Lucía empezaba con "Hola, soy Lucía". Lo rehízo empezando con la vela ya prendida y el texto "Hecha en 3 minutos (mirá cómo)". La gente lo miró en promedio el doble de tiempo.</p>` },
    { titulo: "El texto que acompaña", html: `
      <p class="idea">El texto de una publicación (en las apps se llama <strong>pie de foto</strong> o descripción) tiene dos partes que importan más que el resto: la <strong>primera línea</strong> y el <strong>llamado a la acción</strong>.</p>
      <p>La primera línea es lo único que se ve sin tocar "más". Si no frena, el resto no se lee. El <strong>llamado a la acción</strong> es la frase que dice qué hacer después.</p>
      <pre><code>Ejemplo:
¿Tu vela hace un pozo en el medio? Tiene arreglo 👇     ← primera línea

La primera vez que la prendés, dejala hasta que
se derrita toda la superficie (unas 2 horas).
Si la apagás antes, la cera "se acuerda" de ese
círculo y hace pozo para siempre.

Velas de soja de 200 g: $12.000 · envíos a todo el país   ← precio
📩 Escribime "VELA" por mensaje y te paso los aromas      ← llamado a la acción</code></pre>
      <table>
        <tr><th>Llamado a la acción flojo</th><th>Claro</th></tr>
        <tr><td>"Consultas al privado"</td><td>"Escribime VELA por mensaje y te paso los aromas"</td></tr>
        <tr><td>(ninguno)</td><td>"Guardalo para tu próxima vela"</td></tr>
        <tr><td>"Seguinos"</td><td>"Seguime para más trucos de aromas cada lunes"</td></tr>
      </table>
      <p><strong>Etiquetas (hashtags):</strong> las palabras con numeral, como #velasartesanales, ayudan a que la app entienda de qué hablás. Usá pocas, de 3 a 5, específicas de tu producto y tu zona (#velascordoba). Veinte etiquetas genéricas no ayudan.</p>
      <p>El precio del ejemplo es inventado: los precios cambian, poné el tuyo actualizado.</p>
      <p>Por ejemplo, cuando Lucía cambió "Consultas al privado" por "Escribime VELA por mensaje", empezó a saber qué mensajes venían de cada publicación: la palabra le avisaba de dónde llegaban.</p>` },
  ],
  practica: [
    "Elegí 1 producto y planificá cómo lo mostrarías en los 4 formatos: anotá una idea por formato.",
    "Grabá un video vertical de 15 a 30 segundos con gancho, contenido y cierre, con subtítulos revisados, y anotá cuántos segundos dura el gancho.",
    "Reescribí el texto de 3 publicaciones viejas con primera línea y llamado a la acción, y anotá cuántos mensajes recibió cada una en la semana.",
  ],
  recursos: [
    { t: "Instagram para empresas: guías oficiales para negocios", url: "https://business.instagram.com/" },
    { t: "TikTok para empresas: blog oficial en español", url: "https://www.tiktok.com/business/es/blog" },
    { t: "Curso de este sitio: Vender por internet (incluye medir y probar un cambio por vez)", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
  ],
  quiz: [
    { q: "Querés enseñar algo que tiene 4 pasos. ¿Qué formato usás?", opciones: ["Una sola foto","Una historia de 24 horas","Un carrusel, con un paso por imagen","Un texto sin imagen"], correcta: 2, explicacion: "El carrusel ordena los pasos y se guarda. La historia tienta por fácil, pero desaparece mañana." },
    { q: "Querés que te conozca gente que todavía no te sigue. ¿Qué formato te conviene?", opciones: ["Videos cortos","Solo historias","Fotos de perfil nuevas","Mensajes directos a desconocidos"], correcta: 0, explicacion: "Los videos cortos son los que más se muestran a no seguidores. Las historias tientan, pero las ven sobre todo tus seguidores." },
    { q: "Si querés preguntarles a tus seguidores qué aroma prefieren, ¿qué usás?", opciones: ["Un video de 2 minutos","Un carrusel de 10 imágenes","Un cambio en la bio","Una historia con encuesta"], correcta: 3, explicacion: "La encuesta en historias es rápida y la contestan con un toque. El video tienta, pero es mucho para una pregunta." },
    { q: "Grabás un video para redes. ¿Cómo sostenés el celular?", opciones: ["Horizontal, siempre","Vertical, como se usa la app","En diagonal","Da igual"], correcta: 1, explicacion: "Vertical ocupa toda la pantalla. Horizontal tienta porque es como la tele, pero queda chiquito en el celular." },
    { q: "Tu video empieza con \"Hola, ¿cómo están? Hoy les quiero mostrar...\". ¿Qué cambiás?", opciones: ["Nada, es amable","Le agregás tu logo girando","Empezás con el resultado o una frase que intrigue","Lo hacés más largo"], correcta: 2, explicacion: "Los primeros 3 segundos deciden. Ser amable tienta, pero la gente pasa antes de ver lo bueno." },
    { q: "Si mucha gente mira tus videos sin sonido, ¿qué agregás?", opciones: ["Subtítulos, revisados","Música más fuerte","Nada","Una voz más rápida"], correcta: 0, explicacion: "Sin sonido, los subtítulos cuentan el video. La música tienta, pero no se escucha si está en silencio." },
    { q: "Usás los subtítulos automáticos de la app. ¿Qué hacés antes de publicar?", opciones: ["Nada, son automáticos","Los borrás","Los traducís al inglés","Los revisás, porque se equivocan con palabras raras"], correcta: 3, explicacion: "Los automáticos fallan con nombres y palabras poco comunes. \"Son automáticos\" tienta, pero un error confunde." },
    { q: "No querés salir en cámara. ¿Podés hacer videos cortos?", opciones: ["No, siempre hay que salir","Sí: tus manos trabajando, el producto en uso y texto en pantalla","Solo con una cámara profesional","Solo con fotos fijas"], correcta: 1, explicacion: "El proceso y el producto también cuentan. \"Siempre hay que salir\" tienta pensarlo, pero hay muchas cuentas que nunca muestran la cara." },
    { q: "Si la primera línea de tu texto no frena a nadie, ¿qué pasa con el resto?", opciones: ["Se lee igual","La app lo muestra entero siempre","No se lee: es lo único que se ve sin tocar \"más\"","Nada"], correcta: 2, explicacion: "Lo de abajo queda escondido. \"Se lee igual\" tienta, pero casi nadie toca \"más\" si la primera línea no le interesa." },
    { q: "Tu texto termina con \"Consultas al privado\". ¿Qué es mejor?", opciones: ["Un llamado a la acción claro, como \"Escribime VELA por mensaje\"","\"Consultas al privado\" con más emojis","No poner nada","\"Seguinos\""], correcta: 0, explicacion: "Decir exactamente qué hacer da más respuestas. \"Seguinos\" tienta, pero no lleva a la venta." },
    { q: "Si pedís que escriban una palabra (como VELA) por mensaje, ¿qué ventaja extra tenés?", opciones: ["La app te paga por eso","Nadie más puede escribirte","No hay ventaja","Sabés de qué publicación viene cada mensaje"], correcta: 3, explicacion: "La palabra te dice qué publicación funcionó. \"No hay ventaja\" tienta, pero es una forma simple de medir." },
    { q: "Vas a usar etiquetas (hashtags). ¿Cuántas y cuáles?", opciones: ["30 genéricas como #love","De 3 a 5, específicas de tu producto y tu zona","Ninguna nunca","Las de moda aunque no tengan que ver"], correcta: 1, explicacion: "Pocas y específicas ayudan a que la app entienda de qué hablás. Muchas genéricas tientan, pero no te acercan a tu cliente." },
  ],
},
{
  id: "comunidad",
  icono: "💬",
  titulo: "Responder, conversar y cuidar la comunidad",
  nivel: "Intermedio",
  objetivos: [
    "Responder mensajes y comentarios en el día con respuestas guardadas",
    "Manejar un comentario negativo: responder en público, resolver en privado",
    "Organizar un sorteo respetando las reglas de la plataforma",
  ],
  lecciones: [
    { titulo: "Responder rápido y bien", html: `
      <p class="idea">Cada mensaje es un posible cliente. <strong>Responder en el día</strong>, y si se puede en pocas horas, es de las cosas que más ventas trae, y es gratis.</p>
      <p>Las <strong>respuestas rápidas</strong> (o guardadas) son textos que dejás escritos y mandás con un toque: precios, envíos, medios de pago. Instagram, Facebook y WhatsApp Business las tienen.</p>
      <pre><code>Respuestas guardadas para empezar:
/precios  → "¡Hola! Las velas de 200 g salen $12.000 y las de 400 g,
             $20.000. ¿Para regalar o para vos?"
/envios   → "Envío a todo el país por correo, llega en 3 a 7 días
             hábiles. En Córdoba capital, entrego los sábados."
/pago     → "Podés pagar por transferencia o con link de pago."</code></pre>
      <p><strong>Terminá con una pregunta.</strong> "¿Para regalar o para vos?" sigue la charla; un precio solo, la corta.</p>
      <table>
        <tr><th>Mensaje</th><th>Respuesta floja</th><th>Mejor</th></tr>
        <tr><td>"Precio"</td><td>"12000"</td><td>Precio, tamaño y una pregunta</td></tr>
        <tr><td>"¿Tenés en verde?"</td><td>"No"</td><td>"En verde no, pero tengo en menta y en salvia, ¿te paso foto?"</td></tr>
        <tr><td>Comentario: "¡Qué lindas!"</td><td>(nada)</td><td>"¡Gracias! ¿Cuál es tu aroma favorito?"</td></tr>
      </table>
      <p><strong>Los comentarios también cuentan:</strong> responderlos muestra que hay alguien atrás, y las apps suelen mostrar más las publicaciones con conversación.</p>
      <p><strong>Elegí horarios.</strong> No hace falta estar todo el día con el celular: revisá mensajes en 2 o 3 momentos fijos del día. Podés dejar un mensaje automático de bienvenida que diga cuándo respondés.</p>
      <p>Los precios de los ejemplos son inventados. Por ejemplo, Lucía tardaba hasta 2 días en contestar. Empezó a revisar a las 9, a las 14 y a las 20, con respuestas guardadas: en un mes, de cada 10 personas que preguntaban, le compraban 4 en vez de 2.</p>` },
    { titulo: "El comentario negativo", video: {"id":"tamRaFcRp-o","t":"Comentarios negativos en redes sociales: 5 estrategias para gestionarlos · Emprendedor Eficaz (3:19)"}, html: `
      <p class="idea">Un comentario negativo no es el fin del mundo: <strong>cómo respondés</strong> lo ven todos los que pasan. Respondé en público, corto y amable, y <strong>resolvé en privado</strong>.</p>
      <pre><code>Los 4 pasos:
1. Esperá a que se te pase el enojo (no respondas en caliente).
2. En público: agradecé, reconocé y ofrecé resolver.
   "Gracias por avisar, Marta. Lamento que la vela llegara rota.
    Te escribo por mensaje para mandarte otra."
3. En privado: resolvé de verdad (reposición, devolución).
4. Si queda resuelto, la persona muchas veces lo cuenta.</code></pre>
      <table>
        <tr><th>Tipo de comentario</th><th>Qué hacés</th></tr>
        <tr><td>Crítica real ("llegó roto", "tardó mucho")</td><td>Respondés y resolvés; no lo borrás</td></tr>
        <tr><td>Opinión ("muy caro")</td><td>Explicás con respeto qué incluye el precio</td></tr>
        <tr><td>Insulto, discriminación o amenaza</td><td>Lo ocultás o borrás, y bloqueás si se repite</td></tr>
        <tr><td>Publicidad de otros, estafas, cadenas</td><td>Lo borrás</td></tr>
      </table>
      <p><strong>No borres las críticas reales.</strong> Si alguien ve que borrás las quejas, desconfía de todo lo demás. Una queja bien resuelta da más confianza que un perfil sin ninguna.</p>
      <p>Las apps tienen herramientas para <strong>ocultar comentarios</strong> con palabras que elijas (insultos, por ejemplo) sin que tengas que verlos uno por uno. Están en la configuración de privacidad.</p>
      <p>Por ejemplo, una clienta comentó que su vela llegó partida. Lucía respondió en público en 10 minutos, le mandó otra al día siguiente, y la clienta agregó al comentario: "¡Me la reenviaron enseguida, re atenta!".</p>` },
    { titulo: "Sorteos con reglas claras", html: `
      <p class="idea">Un <strong>sorteo</strong> puede traer gente nueva, pero tiene reglas: las de la plataforma y las de la ley. Y si lo hacés mal, te llenás de seguidores que solo vienen por el premio.</p>
      <p>Las <strong>políticas de Meta</strong> (Facebook e Instagram) dicen que quien organiza el sorteo es responsable de hacerlo legal, que tiene que aclarar que Meta no organiza ni patrocina el sorteo, y que no se puede pedir a la gente que <strong>comparta</strong> la publicación ni que <strong>etiquete a otras personas</strong> para participar.</p>
      <pre><code>Bases y condiciones (lo mínimo, escrito en la publicación
o en un enlace):
- Quién organiza
- Qué se sortea, exactamente
- Fechas de inicio y fin, y cuándo se sortea
- Cómo se participa (por ejemplo, comentar qué aroma elegirías)
- Quiénes pueden participar (edad, zona de envío)
- Cómo se elige y se avisa al ganador
- Aclaración: "Este sorteo no es organizado ni patrocinado por Meta"</code></pre>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Participan comentando una respuesta</td><td>"Compartí en tu historia y etiquetá a 3 amigos"</td></tr>
        <tr><td>Un premio que solo le interesa a tu cliente ideal (tus velas)</td><td>Un celular, que atrae a cualquiera</td></tr>
        <tr><td>El ganador se elige al azar con una herramienta y se muestra</td><td>"Ganó mi prima"</td></tr>
      </table>
      <p>Si el sorteo es grande o pide comprar para participar, consultá antes con un profesional o con la oficina de defensa del consumidor de tu provincia: las promociones tienen reglas legales. Este curso no reemplaza ese asesoramiento.</p>
      <p>Por ejemplo, Lucía sorteó un kit de 3 velas entre quienes comentaran qué aroma elegirían. No sumó miles de seguidores, pero los 80 nuevos eran gente interesada en velas, y 5 le compraron ese mes.</p>` },
  ],
  practica: [
    "Escribí 3 respuestas guardadas (precios, envíos y pago) que terminen con una pregunta, y cargalas en tu app.",
    "Durante 1 semana anotá a qué hora llega cada mensaje y a qué hora lo respondés: calculá tu demora promedio en horas.",
    "Escribí las bases y condiciones de un sorteo con los 7 puntos de la lista y revisá que no pida compartir ni etiquetar.",
  ],
  recursos: [
    { t: "Meta: políticas de páginas, grupos y eventos (incluye las reglas para sorteos y concursos)", url: "https://www.facebook.com/policies_center/pages_groups_events" },
    { t: "Meta para empresas: cursos gratis de Facebook, Instagram y WhatsApp (Meta Blueprint)", url: "https://www.facebook.com/business/learn" },
    { t: "Instagram para empresas: guías oficiales para negocios", url: "https://business.instagram.com/" },
  ],
  quiz: [
    { q: "Tardás 2 días en contestar los mensajes. ¿Qué pasa?", opciones: ["Nada, igual esperan","Parecés más profesional","Muchos posibles clientes ya compraron en otro lado","La app te muestra más"], correcta: 2, explicacion: "Responder en el día trae ventas. \"Igual esperan\" tienta, pero la mayoría ya siguió buscando." },
    { q: "Te preguntan los mismos precios todos los días. ¿Qué usás?", opciones: ["Respuestas rápidas guardadas","Escribís todo de cero cada vez","No contestás y que miren el perfil","Mandás un audio de 3 minutos"], correcta: 0, explicacion: "Las respuestas guardadas ahorran tiempo. No contestar tienta, pero perdés al que pregunta." },
    { q: "Alguien escribe \"Precio\". ¿Cómo respondés?", opciones: ["\"12000\" y nada más","No respondés porque no saludó","\"Por privado\"","Con el precio, el tamaño y una pregunta para seguir la charla"], correcta: 3, explicacion: "La pregunta sigue la conversación. El número solo tienta por rápido, pero corta la charla." },
    { q: "Te preguntan si tenés en verde y no tenés. ¿Qué respondés?", opciones: ["\"No\" y listo","Que no, y ofrecés colores parecidos con foto","Que sí, y después ves","No respondés"], correcta: 1, explicacion: "Ofrecer una alternativa puede salvar la venta. El \"no\" solo tienta por honesto, pero cierra la puerta." },
    { q: "Si no querés estar todo el día con el celular, ¿qué hacés con los mensajes?", opciones: ["Los revisás una vez por semana","Dejás de recibir mensajes","Los revisás en 2 o 3 horarios fijos y dejás un mensaje automático","Los respondés a la madrugada"], correcta: 2, explicacion: "Horarios fijos te ordenan sin dejar esperando días. Una vez por semana tienta por cómodo, pero es mucho." },
    { q: "Una clienta comenta que su vela llegó rota. ¿Qué hacés?", opciones: ["Respondés en público con calma y lo resolvés en privado","Borrás el comentario","Le respondés que es culpa del correo y listo","No respondés nunca"], correcta: 0, explicacion: "Todos ven cómo respondés. Borrarlo tienta para que no se vea, pero si lo notan desconfían de todo." },
    { q: "Leés un comentario que te enoja. ¿Cuándo respondés?", opciones: ["Enseguida, para defenderte","Nunca","Con un audio en el momento","Cuando se te pasó el enojo"], correcta: 3, explicacion: "En caliente se escribe lo que después se lamenta. Defenderte enseguida tienta, pero lo leen todos." },
    { q: "Si alguien comenta un insulto discriminatorio, ¿qué hacés?", opciones: ["Le respondés con otro insulto","Lo ocultás o borrás, y bloqueás si se repite","Lo dejás para no exagerar","Cerrás la cuenta"], correcta: 1, explicacion: "Los insultos no son críticas: se ocultan. Dejarlo tienta para no exagerar, pero ensucia el espacio de tus clientes." },
    { q: "Te comentan \"muy caro\". ¿Qué respondés?", opciones: ["Lo borrás","Bajás el precio en el comentario","Explicás con respeto qué incluye el precio","Le decís que se vaya a otro lado"], correcta: 2, explicacion: "Es una opinión, no un insulto. Bajar el precio tienta para conformar, pero enseña a todos a regatear en público." },
    { q: "Querés hacer un sorteo en Instagram. ¿Qué podés pedir para participar?", opciones: ["Que comenten una respuesta","Que compartan en su historia","Que etiqueten a 3 amigos","Que te pasen su contraseña"], correcta: 0, explicacion: "Las políticas de Meta no permiten pedir compartir ni etiquetar. Etiquetar amigos tienta porque se ve mucho, pero no está permitido." },
    { q: "Si sorteás un celular para crecer rápido, ¿qué suele pasar?", opciones: ["Todos se vuelven clientes","Vendés más velas seguro","Nada","Llegan seguidores que solo quieren el premio y no te compran"], correcta: 3, explicacion: "Un premio genérico atrae a cualquiera. \"Todos se vuelven clientes\" tienta, pero se van después del sorteo." },
    { q: "En tus bases y condiciones, ¿qué aclaración pide Meta?", opciones: ["Que Meta elige al ganador","Que Meta no organiza ni patrocina el sorteo","Que Meta paga el premio","Ninguna"], correcta: 1, explicacion: "La responsabilidad es de quien organiza. \"Meta elige al ganador\" tienta pensarlo, pero no participa." },
  ],
},
{
  id: "metricas",
  icono: "📊",
  titulo: "Medir lo que importa",
  nivel: "Intermedio",
  objetivos: [
    "Leer las estadísticas de la cuenta profesional: alcance, interacciones, visitas y mensajes",
    "Calcular la tasa de interacción de una publicación",
    "Probar un cambio por vez y comparar con números",
  ],
  lecciones: [
    { titulo: "Las estadísticas básicas", video: {"id":"jmWaW1nQ5Xs","t":"Cómo entender las estadísticas de Instagram · Alex Arano (16:33)"}, html: `
      <p class="idea">La cuenta profesional te muestra números de cada publicación y de la cuenta. No hace falta mirarlos todos: con <strong>5 números</strong> sabés cómo vas.</p>
      <table>
        <tr><th>Número</th><th>Qué dice</th></tr>
        <tr><td>Cuentas alcanzadas</td><td>Cuántas personas distintas vieron lo que publicaste</td></tr>
        <tr><td>Visualizaciones</td><td>Cuántas veces se vio, contando repeticiones de la misma persona</td></tr>
        <tr><td>Interacciones</td><td>Me gusta, comentarios, compartidos y guardados</td></tr>
        <tr><td>Visitas al perfil y toques en el enlace</td><td>Cuánta gente quiso saber más</td></tr>
        <tr><td>Mensajes nuevos</td><td>Cuánta gente te escribió: el más cercano a la venta</td></tr>
      </table>
      <p><strong>Alcance y visualizaciones no son lo mismo:</strong> si 100 personas vieron tu video dos veces cada una, el alcance es 100 y las visualizaciones, 200.</p>
      <pre><code>De la vidriera a la venta (una semana de Lucía):
Cuentas alcanzadas    2.000
Visitas al perfil       120
Toques en el enlace      30
Mensajes                 15
Ventas                    5   ← esta la anotás vos: la app no la sabe</code></pre>
      <p><strong>Las ventas las anotás vos.</strong> La app no sabe cuántas veces cobraste. Una planilla simple con la fecha, el producto y de dónde vino el cliente ("Instagram", "recomendación") te dice qué red te vende de verdad.</p>
      <p>Los nombres de los números cambian con las actualizaciones de la app; la idea de cada uno se mantiene.</p>
      <p>Por ejemplo, Lucía miraba solo los me gusta. Cuando armó su tabla semanal vio que los videos tenían pocos me gusta, pero traían el doble de mensajes que las fotos.</p>` },
    { titulo: "La tasa de interacción", html: `
      <p class="idea">Comparar publicaciones por la cantidad de me gusta engaña: una que llegó a más gente siempre tiene más. La <strong>tasa de interacción</strong> compara de forma justa.</p>
      <pre><code>Tasa de interacción = interacciones ÷ cuentas alcanzadas × 100

Publicación A: 60 interacciones, 2.000 alcanzadas
  60 ÷ 2.000 × 100 = 3 %
Publicación B: 30 interacciones, 500 alcanzadas
  30 ÷ 500 × 100 = 6 %

B tuvo menos interacciones, pero le gustó el doble a quien la vio.</code></pre>
      <p>Una tasa alta dice que el contenido <strong>interesó</strong>. Si una publicación tiene buena tasa, pero poco alcance, es una buena candidata para repetir en otro formato o para promocionar (lo vas a ver en el módulo de publicidad).</p>
      <table>
        <tr><th>Interacción</th><th>Qué te dice</th></tr>
        <tr><td>Me gusta</td><td>Le gustó, pero es la más fácil de dar</td></tr>
        <tr><td>Comentario</td><td>Le interesó tanto como para escribir</td></tr>
        <tr><td>Guardado</td><td>Le sirvió y lo quiere ver de nuevo</td></tr>
        <tr><td>Compartido</td><td>Se lo mostró a otra persona: te trae gente nueva</td></tr>
      </table>
      <p>Por eso, entre dos publicaciones con la misma tasa, la que tiene más guardados y compartidos suele ser mejor: son interacciones que cuestan más.</p>
      <p>Por ejemplo, el carrusel de Lucía "Cómo elegir el aroma" tuvo 45 interacciones con 900 cuentas alcanzadas: 45 ÷ 900 × 100 = 5 %. Su foto de producto tuvo 50 con 2.500: 2 %. El carrusel interesó más, aunque tuvo menos interacciones.</p>` },
    { titulo: "Un cambio por vez", html: `
      <p class="idea">Para saber qué funciona, <strong>cambiá una sola cosa</strong> y compará con los números de antes. Si cambiás tres cosas juntas, no sabés cuál hizo la diferencia.</p>
      <pre><code>La prueba de 2 semanas:
Semanas 1 y 2: publicás como siempre. Anotás los 5 números.
Semanas 3 y 4: cambiás UNA cosa (por ejemplo, el horario).
                Anotás los mismos 5 números.
Comparás. Si mejoró, te quedás con el cambio.</code></pre>
      <table>
        <tr><th>Cosas para probar (de a una)</th><th>Qué número mirar</th></tr>
        <tr><td>El horario de publicación</td><td>Cuentas alcanzadas</td></tr>
        <tr><td>El gancho de los videos</td><td>Cuánto tiempo los miran</td></tr>
        <tr><td>El llamado a la acción</td><td>Mensajes nuevos</td></tr>
        <tr><td>Agregar precio en cada publicación</td><td>Mensajes y ventas</td></tr>
      </table>
      <p><strong>Dos semanas, no dos días.</strong> Los números cambian de un día a otro por cosas que no controlás: un feriado, un partido, la lluvia. Con dos semanas el azar pesa menos.</p>
      <p>Este método es el mismo del curso <strong>Vender por internet</strong>: medir, cambiar una cosa, volver a medir.</p>
      <p>Por ejemplo, Lucía probó publicar a las 20 en vez de a las 10. En las dos semanas de prueba, el alcance promedio pasó de 400 a 650 cuentas por publicación. Se quedó con las 20.</p>` },
  ],
  practica: [
    "Armá una tabla semanal con los 5 números de tu cuenta y tus ventas, y completala 2 semanas seguidas.",
    "Calculá la tasa de interacción de tus últimas 5 publicaciones y anotá cuál fue la más alta.",
    "Elegí un solo cambio para probar, anotalo con la fecha de inicio y compará los números después de 2 semanas.",
  ],
  recursos: [
    { t: "Instagram para empresas: guías oficiales para negocios", url: "https://business.instagram.com/" },
    { t: "Google Actívate: cursos gratis de marketing digital", url: "https://learndigital.withgoogle.com/activate" },
    { t: "Curso de este sitio: Vender por internet (incluye medir y probar un cambio por vez)", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
  ],
  quiz: [
    { q: "Si 100 personas vieron tu video 2 veces cada una, ¿cuánto es el alcance?", opciones: ["200 cuentas","2 cuentas","100 cuentas","50 cuentas"], correcta: 2, explicacion: "El alcance cuenta personas distintas. 200 tienta, pero esas son las visualizaciones." },
    { q: "Querés saber qué número está más cerca de una venta. ¿Cuál mirás?", opciones: ["Los mensajes nuevos","Los me gusta","Las visualizaciones","Los seguidores totales"], correcta: 0, explicacion: "Quien te escribe está por comprar. Los me gusta tientan porque son muchos, pero son fáciles de dar." },
    { q: "Si querés saber cuántas ventas vinieron de Instagram, ¿de dónde sacás el dato?", opciones: ["De las estadísticas de la app","De los me gusta","No se puede saber","De tu propia planilla, anotando de dónde vino cada cliente"], correcta: 3, explicacion: "La app no sabe cuándo cobraste. Las estadísticas tientan, pero no tienen ese dato." },
    { q: "Tus videos tienen menos me gusta que las fotos, pero traen el doble de mensajes. ¿Qué concluís?", opciones: ["Las fotos son mejores porque tienen más me gusta","Los videos te sirven más para vender","Hay que dejar de publicar videos","No se puede concluir nada"], correcta: 1, explicacion: "Los mensajes están más cerca de la venta. Los me gusta tientan como medida, pero no pagan." },
    { q: "Si una publicación tuvo 60 interacciones y 2.000 cuentas alcanzadas, ¿cuál es su tasa de interacción?", opciones: ["60 %","30 %","3 %","0,3 %"], correcta: 2, explicacion: "60 ÷ 2.000 × 100 = 3. El 30 % tienta si te equivocás en un cero." },
    { q: "La publicación A tuvo más me gusta que la B, pero llegó a 4 veces más gente. ¿Cómo las comparás de forma justa?", opciones: ["Con la tasa de interacción","Por los me gusta","Por la hora de publicación","Por el largo del texto"], correcta: 0, explicacion: "La tasa divide por el alcance. Los me gusta tientan, pero la que llegó a más gente siempre tiene más." },
    { q: "Si una publicación tiene tasa alta, pero poco alcance, ¿qué hacés?", opciones: ["La borrás","No hacés nada","Publicás lo contrario","La repetís en otro formato o la considerás para promocionar"], correcta: 3, explicacion: "Interesó a quien la vio: merece más gente. Borrarla tienta por el poco alcance, pero el contenido funcionó." },
    { q: "Dos publicaciones tienen la misma tasa. Una tiene más guardados y compartidos. ¿Cuál suele ser mejor?", opciones: ["La de más me gusta","La de más guardados y compartidos","Son iguales siempre","La más vieja"], correcta: 1, explicacion: "Guardar y compartir cuesta más que un me gusta. \"Son iguales\" tienta por la tasa, pero no todas las interacciones valen lo mismo." },
    { q: "Cambiaste horario, gancho y precios la misma semana, y mejoraron los mensajes. ¿Qué sabés?", opciones: ["Que fue el horario","Que fueron los tres por igual","Que algo funcionó, pero no sabés cuál de los tres","Que fue el precio"], correcta: 2, explicacion: "Con tres cambios juntos no se puede separar. Elegir uno tienta, pero es adivinar." },
    { q: "Probaste un cambio dos días y los números bajaron. ¿Qué hacés?", opciones: ["Seguís la prueba hasta completar 2 semanas","Lo descartás enseguida","Cambiás otras dos cosas más","Dejás de medir"], correcta: 0, explicacion: "En dos días pesan el azar, un feriado o la lluvia. Descartarlo tienta, pero es poco tiempo para saber." },
    { q: "Querés probar si el llamado a la acción trae más mensajes. ¿Qué número mirás?", opciones: ["Seguidores totales","Visualizaciones","Cantidad de etiquetas","Mensajes nuevos"], correcta: 3, explicacion: "El llamado a la acción pide escribir: se mide en mensajes. Las visualizaciones tientan, pero no dicen si escribieron." },
    { q: "Después de 2 semanas, publicar a las 20 dio más alcance que a las 10. ¿Qué hacés?", opciones: ["Volvés a las 10 por costumbre","Te quedás con las 20 y elegís otra cosa para probar","Publicás a las dos horas, el doble","Dejás de probar para siempre"], correcta: 1, explicacion: "Ganó el cambio: lo adoptás. Publicar el doble tienta, pero sería otra prueba distinta." },
  ],
},
{
  id: "publicidad",
  icono: "📣",
  titulo: "Publicidad paga, con poco presupuesto",
  nivel: "Avanzado",
  objetivos: [
    "Promocionar una publicación eligiendo objetivo, público, presupuesto y duración",
    "Calcular cuánto te cuesta cada mensaje que trae un anuncio",
    "Decidir qué promocionar y cuándo cortar un anuncio que no rinde",
  ],
  lecciones: [
    { titulo: "Promocionar una publicación", video: {"id":"DdoqnztirD0","t":"Cómo hacer publicidad en Instagram · Alex Arano (6:25)"}, html: `
      <p class="idea"><strong>Promocionar</strong> es pagarle a la red para que muestre una publicación tuya a más gente. Es la forma más simple de publicidad: se hace desde el botón "Promocionar" de la publicación, con la cuenta profesional.</p>
      <pre><code>Las 4 decisiones al promocionar:
1. Objetivo:    ¿qué querés que haga la gente?
                (visitar tu perfil, ir a tu web, escribirte un mensaje)
2. Público:     automático (la app elige) o el tuyo
                (zona, edad, intereses)
3. Presupuesto: cuánto por día
4. Duración:    cuántos días

Gasto total = presupuesto por día × días</code></pre>
      <p>Si vendés por mensaje, elegí el objetivo de <strong>mensajes</strong>: la app busca gente con más chances de escribirte, no solo de mirar.</p>
      <table>
        <tr><th>Si tu negocio...</th><th>Público</th></tr>
        <tr><td>Entrega solo en tu ciudad</td><td>Tu ciudad o un radio de pocos kilómetros</td></tr>
        <tr><td>Envía a todo el país</td><td>El país, con la edad de tu cliente ideal</td></tr>
        <tr><td>No sabés bien quién te compra</td><td>Empezá con el automático y mirá los resultados</td></tr>
      </table>
      <p><strong>Antes de pagar:</strong> la pantalla muestra un resumen con el total. Al pagar con tarjeta se pueden sumar impuestos: mirá el monto final y el resumen de tu tarjeta. Empezá con un monto que no te duela perder, porque el primer anuncio es una prueba.</p>
      <p>Los anuncios pasan por una revisión de la red antes de salir y tienen que cumplir sus reglas de publicidad.</p>
      <p>Por ejemplo, Lucía promocionó su carrusel de aromas con $3.000 por día durante 5 días (un monto de ejemplo): $15.000 en total, con objetivo mensajes y público en Córdoba capital, mujeres de 25 a 55.</p>` },
    { titulo: "Cuánto te cuesta cada mensaje", html: `
      <p class="idea">El número que importa de un anuncio no es cuánta gente lo vio, sino <strong>cuánto te costó cada resultado</strong>: cada mensaje, y al final, cada venta.</p>
      <pre><code>Costo por mensaje = gasto ÷ mensajes recibidos
Costo por venta   = gasto ÷ ventas

Anuncio de Lucía: gastó $15.000
  Mensajes: 20  → 15.000 ÷ 20 = $750 por mensaje
  Ventas:    6  → 15.000 ÷ 6  = $2.500 por venta</code></pre>
      <p>Después comparás el costo por venta con tu <strong>ganancia por venta</strong>, que es lo que te queda de cada venta después de pagar los materiales y los otros costos. Si cada venta te deja $5.000 y el anuncio te costó $2.500 por venta, te quedan $2.500. Si te costó $6.000 por venta, perdiste plata.</p>
      <table>
        <tr><th>Resultado</th><th>Qué hacer</th></tr>
        <tr><td>Costo por venta bastante menor que tu ganancia</td><td>Repetilo o subí un poco el presupuesto</td></tr>
        <tr><td>Costo por venta parecido a tu ganancia</td><td>Cambiá una cosa: la publicación o el público</td></tr>
        <tr><td>Costo por venta mayor que tu ganancia</td><td>Cortalo: estás pagando por vender</td></tr>
      </table>
      <p>Para calcular tu ganancia por venta mirá el curso <strong>Costos y precios: cuánto cobrar</strong> de este sitio.</p>
      <p><strong>Contá las ventas que vienen del anuncio:</strong> como en el módulo de métricas, preguntá o anotá de dónde viene cada cliente. Si en el texto pediste una palabra ("escribime VELA"), es más fácil saberlo.</p>
      <p>Los montos de los ejemplos son inventados. Por ejemplo, el segundo anuncio de Lucía mostró solo una foto de producto: gastó lo mismo, recibió 8 mensajes y 2 ventas. $7.500 por venta, más que lo que le dejaba cada vela. Lo cortó al tercer día.</p>` },
    { titulo: "Qué promocionar y qué no", html: `
      <p class="idea">La publicidad <strong>agranda lo que ya funciona</strong>. Si una publicación no interesó a tus seguidores, pagar para mostrársela a desconocidos rara vez la salva.</p>
      <pre><code>Elegir qué promocionar:
1. Mirá tus últimas 10 publicaciones.
2. Elegí la de mejor tasa de interacción o la que trajo más mensajes.
3. Revisá que tenga precio, llamado a la acción y se entienda sola.
4. Recién ahí, promocionala.</code></pre>
      <table>
        <tr><th>Promocionar</th><th>Mejor no</th></tr>
        <tr><td>La publicación que más mensajes trajo</td><td>Una que no le interesó a nadie</td></tr>
        <tr><td>Un producto que tenés en stock</td><td>Algo que se te terminó</td></tr>
        <tr><td>Antes de una fecha (Día de la Madre)</td><td>El día anterior, sin tiempo para enviar</td></tr>
        <tr><td>Cuando podés responder los mensajes</td><td>Justo antes de irte de vacaciones</td></tr>
      </table>
      <p><strong>Promocionar no reemplaza lo básico.</strong> Si el perfil no dice qué vendés o tardás dos días en contestar, el anuncio trae gente que se va. Por eso este módulo viene después de perfil, contenido y comunidad.</p>
      <p><strong>Cuidado con las ofertas de "seguidores baratos":</strong> comprar seguidores trae cuentas falsas o gente que nunca te va a comprar, baja tu tasa de interacción y puede hacer que la red te muestre menos.</p>
      <p>Por ejemplo, Lucía quería promocionar su vela nueva, que casi no tenía interacciones. En cambio, promocionó el carrusel que ya había traído 12 mensajes sin pagar, y anotó los resultados en su tabla.</p>` },
  ],
  practica: [
    "Elegí la publicación a promocionar con los 4 pasos y anotá su tasa de interacción y cuántos mensajes trajo.",
    "Calculá el gasto total de un anuncio de 5 días con el presupuesto diario que podrías pagar, y anotá el monto.",
    "Calculá tu ganancia por venta y el costo por venta máximo que podrías pagar en un anuncio: anotá los dos números.",
  ],
  recursos: [
    { t: "Meta (ayuda para empresas): cómo promocionar una publicación de tu página", url: "https://www.facebook.com/business/help/347839548598012" },
    { t: "Meta para empresas: cursos gratis de Facebook, Instagram y WhatsApp (Meta Blueprint)", url: "https://www.facebook.com/business/learn" },
    { t: "Google Actívate: cursos gratis de marketing digital", url: "https://learndigital.withgoogle.com/activate" },
  ],
  quiz: [
    { q: "Vendés por mensaje directo. ¿Qué objetivo elegís al promocionar?", opciones: ["Más me gusta","Visualizaciones","Mensajes","Seguidores, siempre"], correcta: 2, explicacion: "El objetivo le dice a la app qué buscar. Me gusta tienta porque se ve más, pero no lleva a escribirte." },
    { q: "Si promocionás $3.000 por día durante 5 días, ¿cuánto gastás en total, sin contar impuestos?", opciones: ["$15.000","$3.000","$8.000","$1.500"], correcta: 0, explicacion: "Presupuesto por día por días: 3.000 × 5. $3.000 tienta si creés que es el total." },
    { q: "Hacés envíos solo dentro de tu ciudad. ¿Qué público elegís?", opciones: ["Todo el país","Todo el mundo","El que la app quiera, sin límites","Tu ciudad o un radio cercano"], correcta: 3, explicacion: "Pagar por mostrar a quien no podés venderle es tirar plata. Todo el país tienta por grande, pero no te pueden comprar." },
    { q: "Vas a pagar el anuncio con tarjeta. ¿Qué revisás antes de confirmar?", opciones: ["Nada, el presupuesto es el total exacto","El monto final del resumen, porque se pueden sumar impuestos","El color del botón","Solo la foto"], correcta: 1, explicacion: "Al total se le pueden sumar impuestos. \"Es el total exacto\" tienta, pero puede llegar más en la tarjeta." },
    { q: "Si gastaste $15.000 y recibiste 20 mensajes, ¿cuánto te costó cada mensaje?", opciones: ["$300.000","$1.333","$750","$20"], correcta: 2, explicacion: "15.000 ÷ 20 = 750. $300.000 tienta si multiplicás en vez de dividir." },
    { q: "Cada venta te deja $5.000 de ganancia y el anuncio te costó $6.000 por venta. ¿Qué pasa?", opciones: ["Perdés plata con cada venta del anuncio","Ganás $11.000 por venta","Ganás $6.000","Quedás justo"], correcta: 0, explicacion: "Pagás más de lo que ganás. Sumar tienta, pero el costo del anuncio se resta." },
    { q: "Tu anuncio cuesta más por venta de lo que ganás en cada venta. ¿Qué hacés?", opciones: ["Le subís el presupuesto","Lo dejás un mes más","Lo duplicás","Lo cortás"], correcta: 3, explicacion: "Estás pagando por vender. Subir el presupuesto tienta para \"que rinda\", pero multiplica la pérdida." },
    { q: "Si querés saber cuántas ventas vinieron de un anuncio, ¿qué te ayuda?", opciones: ["Mirar solo el alcance","Pedir una palabra en el texto y anotar de dónde viene cada cliente","Contar los me gusta","Adivinar"], correcta: 1, explicacion: "La palabra y tu planilla dicen el origen. El alcance tienta, pero no dice si compraron." },
    { q: "Una publicación no le interesó casi a nadie. ¿La promocionás?", opciones: ["Sí, así la ve más gente","Sí, con el doble de presupuesto","Mejor no: promocionás la que ya funcionó","Sí, porque la hiciste con esfuerzo"], correcta: 2, explicacion: "La publicidad agranda lo que ya funciona. \"La ve más gente\" tienta, pero si no interesó, tampoco va a interesar a desconocidos." },
    { q: "Te vas de vacaciones mañana y no vas a contestar mensajes. ¿Lanzás un anuncio de mensajes hoy?", opciones: ["No: pagarías por mensajes que nadie responde","Sí, así vuelven solos","Sí, a todo el país","Sí, y apagás las notificaciones"], correcta: 0, explicacion: "Mensajes sin respuesta son clientes perdidos. \"Vuelven solos\" tienta, pero casi nadie espera una semana." },
    { q: "Tu perfil no dice qué vendés y tardás 2 días en responder. ¿Qué arreglás antes de pagar publicidad?", opciones: ["Nada, el anuncio lo compensa","Comprás seguidores","Hacés un sorteo","El perfil y la velocidad de respuesta"], correcta: 3, explicacion: "El anuncio trae gente a un perfil que no la convence. \"El anuncio lo compensa\" tienta, pero pagás por gente que se va." },
    { q: "Te ofrecen 1.000 seguidores por un precio bajo. ¿Qué pasa si los comprás?", opciones: ["Vendés más","Son cuentas falsas o sin interés, y baja tu tasa de interacción","Llegás a más clientes reales","La app te premia"], correcta: 1, explicacion: "Seguidores que no miran bajan tu tasa. Vender más tienta pensarlo, pero no son clientes." },
  ],
},
{
  id: "seguridad",
  icono: "🔐",
  titulo: "Cuenta segura y contenido con permiso",
  nivel: "Avanzado",
  objetivos: [
    "Activar la verificación en dos pasos y guardar los códigos de recuperación",
    "Reconocer los mensajes falsos que buscan robar cuentas",
    "Usar música, fotos e imágenes de personas con permiso",
  ],
  lecciones: [
    { titulo: "Proteger la cuenta", video: {"id":"9Af7tHliBcQ","t":"Cómo activar la verificación en dos pasos de Instagram · WilDroid (2:11)"}, html: `
      <p class="idea">Tu cuenta es tu vidriera: si te la roban, perdés clientes y pueden estafar en tu nombre. La protección más importante es la <strong>verificación en dos pasos</strong>.</p>
      <p>La <strong>verificación en dos pasos</strong> pide, además de la contraseña, un código que llega a tu celular o lo genera una app de autenticación. Aunque alguien sepa tu contraseña, sin el código no entra.</p>
      <pre><code>Para activarla (los menús cambian, pero suele estar así):
Configuración → Centro de cuentas → Contraseña y seguridad
  → Autenticación en dos pasos

Al activarla, la app te da CÓDIGOS DE RECUPERACIÓN:
anotalos en papel y guardalos fuera del celular.
Si perdés el teléfono, con esos códigos volvés a entrar.</code></pre>
      <table>
        <tr><th>Hacé</th><th>No hagas</th></tr>
        <tr><td>Una contraseña larga, que no uses en otro lado</td><td>La misma contraseña del mail o del banco</td></tr>
        <tr><td>El mail y el teléfono de la cuenta al día</td><td>Un mail viejo que ya no abrís</td></tr>
        <tr><td>Dar acceso a quien te ayuda desde la configuración de la cuenta o Meta Business Suite</td><td>Pasarle tu contraseña por mensaje</td></tr>
      </table>
      <p>Si alguien te ayuda con las redes, Meta Business Suite permite darle acceso con su propia cuenta y quitárselo cuando quieras, sin compartir tu contraseña.</p>
      <p>Por ejemplo, a una conocida de Lucía le robaron la cuenta y vendieron "velas" falsas a sus seguidores durante 3 días. Lucía activó la verificación en dos pasos esa misma noche y guardó los códigos en un sobre.</p>` },
    { titulo: "Mensajes falsos", html: `
      <p class="idea">La forma más común de robar cuentas de emprendedores es un <strong>mensaje falso</strong> que parece de la red y te apura. Se llama <strong>phishing</strong>: te hacen entrar a una página trucha para que escribas tu contraseña o un código.</p>
      <pre><code>Mensaje falso típico:
"⚠️ Meta Support: tu cuenta será eliminada en 24 horas
 por infringir derechos de autor. Apelá aquí: bit.ly/xxxx"

Señales de alarma:
- Te apura ("24 horas", "último aviso")
- Llega por mensaje directo de una cuenta cualquiera
- Tiene un enlace acortado o raro
- Te pide la contraseña o un código que te llegó por SMS</code></pre>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Un mensaje dice que van a cerrar tu cuenta</td><td>No tocás el enlace; revisás los avisos dentro de la app, en la configuración</td></tr>
        <tr><td>Alguien te pide "el código que te llegó"</td><td>Nunca lo pasás: es la llave de tu cuenta, aunque te lo pida un conocido</td></tr>
        <tr><td>Un "cliente" te manda un enlace para "ver su pedido"</td><td>No lo abrís; que te escriba el pedido en el chat</td></tr>
      </table>
      <p>La red no te avisa de un cierre por un mensaje directo de una cuenta cualquiera. Los avisos reales aparecen dentro de la app, en la configuración de la cuenta (en Instagram, también hay una sección con los correos que te mandó de verdad).</p>
      <p><strong>Si un conocido te pide un código</strong>, puede ser que le hayan robado la cuenta a él: llamalo por teléfono antes de hacer nada.</p>
      <p>El sitio <strong>Con Vos en la Web</strong> del Ministerio de Justicia tiene guías para cuidar tu privacidad y qué hacer si te roban una cuenta.</p>
      <p>Por ejemplo, Lucía recibió "Tu cuenta infringe derechos de autor, apelá en este enlace". Entró a la configuración de Instagram y no había ningún aviso. Bloqueó y denunció la cuenta que le escribió.</p>` },
    { titulo: "Música, fotos y personas", html: `
      <p class="idea">Que algo esté en internet no quiere decir que lo puedas usar. La música, las fotos de otros y la imagen de las personas tienen dueño o necesitan <strong>permiso</strong>.</p>
      <table>
        <tr><th>Qué</th><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Música</td><td>La biblioteca de audios de la app (en cuentas de empresa muestra la permitida para uso comercial)</td><td>Una canción bajada de otro lado en tu video de venta</td></tr>
        <tr><td>Fotos</td><td>Las tuyas, o bancos de imágenes gratis que permiten uso comercial</td><td>Fotos de otra marca o de Google</td></tr>
        <tr><td>Clientes</td><td>Con su permiso, para esa publicación</td><td>Su foto o su mensaje sin preguntar</td></tr>
        <tr><td>Chicos</td><td>Sin mostrar caras, o con permiso de madre, padre o tutor</td><td>La cara de un nene en una publicación de venta sin permiso</td></tr>
      </table>
      <p>Si usás música que no está permitida, la red puede silenciar el video, bloquearlo o limitar tu cuenta. Por eso, para videos de venta, usá los audios que la app ofrece para cuentas comerciales.</p>
      <p><strong>Datos de tus clientes:</strong> nombres, teléfonos y direcciones son datos personales, y en Argentina están protegidos por la Ley 25.326 de Protección de Datos Personales. Usalos solo para la venta, no los publiques y no los compartas. En las capturas, tapá nombres y números.</p>
      <pre><code>Antes de publicar, preguntate:
¿Esta música, esta foto o esta persona... tengo permiso?
  Sí → publicá.
  No sé → no publiques hasta saberlo.</code></pre>
      <p>Si tenés una duda legal concreta (por ejemplo, alguien usa tus fotos sin permiso), consultá con un profesional: este curso no reemplaza el asesoramiento legal.</p>
      <p>Por ejemplo, Lucía encontró sus propias fotos de velas en la cuenta de otra tienda. Las denunció desde la opción de la app para reportar contenido que infringe tus derechos, y las bajaron.</p>` },
  ],
  practica: [
    "Activá la verificación en dos pasos, anotá los códigos de recuperación en papel y anotá la fecha en que lo hiciste.",
    "Revisá tus últimos 20 mensajes: anotá cuántos tenían señales de mensaje falso y qué señal tenía cada uno.",
    "Revisá tus últimas 10 publicaciones y anotá cuántas usan música, fotos o personas sin permiso, y cuáles vas a cambiar.",
  ],
  recursos: [
    { t: "Ministerio de Justicia de Argentina: Con Vos en la Web (privacidad y seguridad en internet)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "Meta: normas comunitarias de Facebook e Instagram", url: "https://transparency.meta.com/policies/community-standards/" },
    { t: "Instagram para empresas: guías oficiales para negocios", url: "https://business.instagram.com/" },
  ],
  quiz: [
    { q: "Alguien sabe tu contraseña, pero tenés la verificación en dos pasos. ¿Puede entrar?", opciones: ["Sí, enseguida","Sí, si lo intenta 3 veces","No, porque además necesita el código de tu celular","Solo de noche"], correcta: 2, explicacion: "El código es el segundo cerrojo. \"Sí, enseguida\" tienta si pensás que la contraseña alcanza, pero sin el código no entra." },
    { q: "Si activás la verificación en dos pasos, ¿qué hacés con los códigos de recuperación?", opciones: ["Los anotás en papel y los guardás fuera del celular","Los mandás por WhatsApp a una amiga","No los guardás","Los publicás en una historia privada"], correcta: 0, explicacion: "Si perdés el celular, te salvan. Mandarlos por WhatsApp tienta por práctico, pero quedan expuestos." },
    { q: "Usás la misma contraseña en Instagram, el mail y el banco. ¿Qué riesgo hay?", opciones: ["Ninguno, es más fácil recordarla","Que se borre sola","Que la app se ponga lenta","Si roban una, entran a todo"], correcta: 3, explicacion: "Una contraseña distinta por servicio limita el daño. \"Es más fácil\" tienta, pero una filtración abre todas las puertas." },
    { q: "Una persona te va a ayudar con las redes. ¿Cómo le das acceso?", opciones: ["Le pasás tu contraseña por mensaje","Desde la configuración de la cuenta o Meta Business Suite, con su propia cuenta","Le das tu celular","Le pasás el código que te llega"], correcta: 1, explicacion: "Así podés quitarle el acceso cuando quieras. Pasar la contraseña tienta por rápido, pero perdés el control." },
    { q: "Te llega \"Meta Support: tu cuenta será eliminada en 24 horas, apelá aquí\". ¿Qué hacés?", opciones: ["Apelás enseguida desde el enlace","Le respondés con tu contraseña","No tocás el enlace y revisás los avisos dentro de la configuración de la app","Le reenviás el mensaje a tus clientes"], correcta: 2, explicacion: "La red avisa dentro de la app, no por mensaje directo. Apelar tienta por el apuro, pero es la trampa." },
    { q: "Un conocido te pide \"el código de 6 números que te llegó por error\". ¿Qué hacés?", opciones: ["No lo pasás y lo llamás por teléfono: puede que le hayan robado la cuenta","Se lo pasás porque lo conocés","Se lo pasás si te lo pide amable","Lo publicás"], correcta: 0, explicacion: "Ese código es la llave de tu cuenta. Confiar porque es conocido tienta, pero puede ser un ladrón usando su cuenta." },
    { q: "Si un \"cliente\" te manda un enlace para \"ver su pedido\", ¿qué hacés?", opciones: ["Lo abrís para no perder la venta","Le pasás tu mail y contraseña","Lo abrís desde la compu, que es más seguro","No lo abrís y le pedís que escriba el pedido en el chat"], correcta: 3, explicacion: "Los enlaces raros son la forma de robar cuentas. No perder la venta tienta, pero un pedido real se puede escribir." },
    { q: "Querés poner una canción famosa en tu video de venta. ¿Qué usás?", opciones: ["La bajás de internet y la agregás","Los audios que la app permite para cuentas comerciales","Cualquiera, total es corto","La cantás vos encima del original"], correcta: 1, explicacion: "La música tiene dueño. \"Es corto\" tienta, pero igual te pueden silenciar o bloquear el video." },
    { q: "Encontrás en Google una foto linda de velas. ¿La usás para tu publicación?", opciones: ["Sí, está en internet","Sí, si le ponés tu logo","No: usás tus fotos o bancos que permiten uso comercial","Sí, si es chiquita"], correcta: 2, explicacion: "Que esté en internet no la hace tuya. Ponerle tu logo tienta, pero sigue siendo de otro." },
    { q: "Querés publicar la foto de un nene de una clienta usando tu producto. ¿Qué necesitás?", opciones: ["Permiso de la madre, el padre o el tutor, o no mostrar su cara","Nada, es una foto linda","Solo el permiso del nene","Ponerle un filtro"], correcta: 0, explicacion: "La imagen de los chicos se cuida especialmente. El filtro tienta, pero no reemplaza el permiso." },
    { q: "Vas a subir una captura con el mensaje de un cliente. ¿Qué tapás?", opciones: ["Nada","Solo los emojis","El precio","Su nombre y su número"], correcta: 3, explicacion: "Son datos personales. \"Nada\" tienta porque es un elogio, pero el teléfono queda a la vista de todos." },
    { q: "Si otra tienda usa tus fotos sin permiso, ¿qué podés hacer?", opciones: ["Usar vos las fotos de esa tienda","Denunciarlo desde la opción de la app para contenido que infringe tus derechos","Insultarla en los comentarios","Nada, es normal"], correcta: 1, explicacion: "La app tiene una vía para reclamar. Insultar tienta, pero lo ven tus clientes y no baja las fotos." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tus redes en 30 días",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de 30 días con objetivo, red, calendario y números de partida",
    "Ejecutar el plan y medir semana a semana",
    "Evaluar tu trabajo con la rúbrica y decidir el próximo cambio",
  ],
  lecciones: [
    { titulo: "El plan de 30 días", html: `
      <p class="idea">El proyecto final es usar todo el curso durante <strong>30 días</strong>: un objetivo, un perfil listo, un calendario y una tabla de números que completás cada semana.</p>
      <pre><code>Antes de empezar (día 0):
□ Objetivo con número y plazo          (módulo Para qué y dónde)
□ Ficha del cliente ideal              (módulo Para qué y dónde)
□ Cuenta profesional, bio, enlace y 3 destacadas  (módulo Perfil)
□ Verificación en dos pasos activa     (módulo Seguridad)
□ Respuestas guardadas cargadas        (módulo Comunidad)
□ Números de partida: alcance, visitas, mensajes y ventas
  de los últimos 7 días</code></pre>
      <p>Los <strong>números de partida</strong> son la foto del antes. Sin ellos, a los 30 días no sabés si mejoraste.</p>
      <table>
        <tr><th>Semana</th><th>Foco</th></tr>
        <tr><td>1</td><td>Perfil listo y primeras publicaciones de los 4 tipos</td></tr>
        <tr><td>2</td><td>Calendario en tanda y al menos 2 videos cortos</td></tr>
        <tr><td>3</td><td>Un cambio para probar (horario, gancho o llamado a la acción)</td></tr>
        <tr><td>4</td><td>Seguir la prueba y, si querés, un anuncio chico con la mejor publicación</td></tr>
      </table>
      <p>El anuncio de la semana 4 es optativo: el proyecto se puede aprobar sin gastar un peso.</p>
      <p>Por ejemplo, el día 0 Lucía tenía: 600 cuentas alcanzadas en la semana, 25 visitas al perfil, 4 mensajes y 1 venta. Su objetivo: 10 mensajes por semana al final del mes.</p>` },
    { titulo: "La tabla semanal", html: `
      <p class="idea">Cada domingo completás <strong>una fila</strong> de la tabla. En 5 minutos ves si vas hacia tu objetivo y qué cambiar.</p>
      <pre><code>Semana | Public. | Alcance | Visitas | Mensajes | Ventas | Nota
  0    |    -    |   600   |   25    |    4     |   1    | partida
  1    |    3    |   900   |   40    |    6     |   2    | bio nueva
  2    |    3    |  1.400  |   55    |    9     |   3    | 2 videos
  3    |    3    |  1.300  |   60    |   11     |   4    | prueba: 20 h
  4    |    3    |  1.800  |   70    |   12     |   4    | anuncio chico</code></pre>
      <p><strong>La columna "Nota"</strong> es la más útil: ahí anotás qué hiciste distinto esa semana. Sin la nota, en un mes no te acordás por qué subieron o bajaron los números.</p>
      <table>
        <tr><th>Si ves...</th><th>Probá...</th></tr>
        <tr><td>Mucho alcance, pocas visitas al perfil</td><td>Contenido más conectado con tu producto</td></tr>
        <tr><td>Muchas visitas, pocos mensajes</td><td>Revisar la bio, el precio y el enlace</td></tr>
        <tr><td>Muchos mensajes, pocas ventas</td><td>Revisar tus respuestas y la velocidad</td></tr>
      </table>
      <p>Esta tabla es el camino del cliente del primer módulo, en números: te muestra en qué paso se pierde la gente.</p>
      <p>Por ejemplo, en la semana 2 Lucía vio 55 visitas al perfil y solo 9 mensajes. Revisó la bio y vio que el enlace de WhatsApp tenía un número de más. Lo arregló y la semana siguiente llegaron 11.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Al terminar los 30 días, evaluate con esta <strong>rúbrica</strong>: una tabla de criterios con puntaje. No mide si "explotaste" en redes, sino si trabajaste con método.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Perfil</td><td>Bio con la fórmula, enlace probado y 3 destacadas al día</td><td>Falta una de las tres cosas</td><td>Faltan dos o más</td></tr>
        <tr><td>Constancia</td><td>Cumpliste tu frecuencia las 4 semanas</td><td>Cumpliste 2 o 3 semanas</td><td>1 semana o menos</td></tr>
        <tr><td>Variedad</td><td>Publicaste los 4 tipos de contenido</td><td>2 o 3 tipos</td><td>1 solo tipo</td></tr>
        <tr><td>Comunidad</td><td>Respondiste en el día casi todos los mensajes</td><td>La mayoría, con demoras</td><td>Muchos sin responder</td></tr>
        <tr><td>Medición</td><td>Tabla completa las 4 semanas, con notas</td><td>Incompleta</td><td>Sin tabla</td></tr>
        <tr><td>Prueba</td><td>Probaste un cambio 2 semanas y sacaste una conclusión</td><td>Probaste, pero menos tiempo</td><td>No probaste nada</td></tr>
        <tr><td>Seguridad</td><td>Dos pasos activa y nada publicado sin permiso</td><td>Una de las dos</td><td>Ninguna</td></tr>
      </table>
      <p>El total es sobre <strong>14 puntos</strong>. Con <strong>11 o más</strong>, tenés un sistema que funciona: seguí mes a mes con un cambio nuevo cada vez. Con menos, repetí el mes enfocándote en los criterios que dieron 0 o 1.</p>
      <p><strong>Y el objetivo:</strong> anotá aparte si llegaste a tu número. Si no llegaste, pero sacaste 11 o más, vas bien: algunos objetivos llevan más de un mes.</p>
      <p>Por ejemplo, Lucía sacó 12 puntos: perdió uno en constancia (una semana publicó solo 1 vez) y otro en comunidad. Llegó a 12 mensajes por semana, más que su objetivo de 10.</p>` },
  ],
  practica: [
    "Completá la lista del día 0 y anotá tus números de partida de los últimos 7 días.",
    "Armá la tabla semanal con sus 7 columnas y completala cada domingo durante 4 semanas.",
    "Al día 30, calculá tu puntaje con la rúbrica sobre 14 y anotá el cambio que vas a probar el mes siguiente.",
  ],
  recursos: [
    { t: "Meta para empresas: cursos gratis de Facebook, Instagram y WhatsApp (Meta Blueprint)", url: "https://www.facebook.com/business/learn" },
    { t: "Instagram para empresas: guías oficiales para negocios", url: "https://business.instagram.com/" },
    { t: "Google Actívate: cursos gratis de marketing digital", url: "https://learndigital.withgoogle.com/activate" },
  ],
  quiz: [
    { q: "Si empezás el plan sin anotar tus números de partida, ¿qué problema tenés al día 30?", opciones: ["Ninguno","La app no te deja publicar","No sabés si mejoraste, porque no tenés el antes","Tenés que empezar de nuevo sí o sí"], correcta: 2, explicacion: "Sin el antes no hay comparación. \"Ninguno\" tienta porque la app tiene números, pero solo de un tiempo hacia atrás." },
    { q: "En el día 0, ¿qué tiene que estar listo además del perfil?", opciones: ["El objetivo, la ficha del cliente, la verificación en dos pasos y las respuestas guardadas","Un anuncio pago","1.000 seguidores","Un logo profesional"], correcta: 0, explicacion: "Son las bases del plan. El anuncio tienta para arrancar fuerte, pero es optativo y va al final." },
    { q: "Querés hacer el proyecto sin gastar en publicidad. ¿Se puede aprobar?", opciones: ["No, hay que pagar","Solo con un sorteo","Solo si tenés 1.000 seguidores","Sí: el anuncio de la semana 4 es optativo"], correcta: 3, explicacion: "La rúbrica no mide gasto. \"Hay que pagar\" tienta pensarlo, pero el método funciona sin anuncios." },
    { q: "En tu tabla semanal, ¿para qué sirve la columna \"Nota\"?", opciones: ["Para poner tu estado de ánimo","Para anotar qué hiciste distinto y entender por qué cambiaron los números","No sirve","Para el precio de la semana"], correcta: 1, explicacion: "Sin la nota, no te acordás qué causó el cambio. \"No sirve\" tienta para ahorrar tiempo, pero es la columna que explica." },
    { q: "Tenés mucho alcance pero pocas visitas al perfil. ¿Qué probás?", opciones: ["Cambiar la contraseña","Responder más rápido","Contenido más conectado con tu producto","Bajar los precios"], correcta: 2, explicacion: "Te ven, pero no les interesa saber más de vos. Responder más rápido tienta, pero el problema está antes del mensaje." },
    { q: "Tenés muchas visitas al perfil y pocos mensajes. ¿Qué revisás?", opciones: ["La bio, el precio y el enlace","El horario de publicación","La música de los videos","Nada"], correcta: 0, explicacion: "Llegan al perfil y algo los frena ahí. El horario tienta, pero ya llegaron: el problema está en el perfil." },
    { q: "Tenés muchos mensajes y pocas ventas. ¿Qué revisás?", opciones: ["Tu foto de perfil","Las etiquetas","El alcance","Tus respuestas y tu velocidad"], correcta: 3, explicacion: "La venta se cae en la charla. La foto tienta, pero ya te escribieron." },
    { q: "Si publicaste 3 tipos de contenido de los 4, ¿cuánto sacás en \"Variedad\"?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 1, explicacion: "2 o 3 tipos es 1 punto. Dos tienta porque es casi todo, pero la rúbrica pide los 4." },
    { q: "Si cumpliste tu frecuencia 3 de las 4 semanas, ¿cuánto sacás en \"Constancia\"?", opciones: ["2 puntos","0 puntos","1 punto","Medio punto"], correcta: 2, explicacion: "2 o 3 semanas es 1 punto. Dos tienta porque fueron casi todas, pero hacen falta las 4." },
    { q: "Si sacaste 9 sobre 14, ¿qué hacés?", opciones: ["Repetís el mes enfocándote en los criterios que dieron 0 o 1","Abandonás las redes","Comprás seguidores","Cambiás de red sin revisar"], correcta: 0, explicacion: "La rúbrica te dice qué mejorar. Cambiar de red tienta para empezar de cero, pero repetirías los mismos huecos." },
    { q: "Si sacaste 12 sobre 14, pero no llegaste a tu objetivo de mensajes, ¿qué concluís?", opciones: ["Fracasaste","La rúbrica está mal","Hay que pagar publicidad sí o sí","Vas bien: algunos objetivos llevan más de un mes"], correcta: 3, explicacion: "Trabajaste con método y los resultados se acumulan. \"Fracasaste\" tienta, pero un mes es poco para algunos objetivos." },
    { q: "Terminaste el mes con 11 o más puntos. ¿Qué hacés el mes siguiente?", opciones: ["Cambiás todo","Seguís con el sistema y probás un cambio nuevo","Dejás de medir","Publicás 5 veces por día"], correcta: 1, explicacion: "Un cambio por vez sigue mejorando. Cambiar todo tienta para crecer rápido, pero perdés lo que funciona." },
  ],
},
];
