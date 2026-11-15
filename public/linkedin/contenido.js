// Temario del curso "Tu perfil profesional en LinkedIn". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js linkedin y node tools/metodologia.js linkedin
window.TEMARIO = [
{
  id: "empezar",
  icono: "🔗",
  titulo: "Empezar: qué es LinkedIn y para qué sirve",
  nivel: "Básico",
  objetivos: [
    "Explicar para qué sirve LinkedIn y para quién conviene",
    "Crear una cuenta con datos reales y un mail serio",
    "Decidir si te alcanza la cuenta gratis y qué ve el resto de tu perfil",
  ],
  lecciones: [
    { titulo: "Qué es LinkedIn", video: {"id":"XRJFBFDoH68","t":"¿Cómo crear cuenta en LinkedIn? · LearnFree en Español (2:47)"}, html: `
      <p class="idea"><strong>LinkedIn</strong> es una red social para el trabajo. En vez de fotos de vacaciones, la gente muestra su experiencia, busca empleo, encuentra personal y se contacta con colegas.</p>
      <table>
        <tr><th>Sirve para</th><th>Ejemplo</th></tr>
        <tr><td>Que te encuentren</td><td>Una consultora busca "administrativa en Rosario" y aparece tu perfil</td></tr>
        <tr><td>Buscar empleos</td><td>Filtrar avisos por ciudad, tipo de trabajo y fecha</td></tr>
        <tr><td>Contactar personas</td><td>Escribirle a alguien que trabaja en la empresa que te interesa</td></tr>
        <tr><td>Aprender del rubro</td><td>Seguir empresas y personas que publican sobre tu oficio</td></tr>
      </table>
      <p><strong>¿Para quién conviene?</strong> Sobre todo para trabajos de oficina, comercio, tecnología, salud, educación y empresas medianas o grandes. Para oficios y comercios de barrio, muchas veces funcionan más los contactos, los carteles y los grupos locales; tener un perfil igual suma.</p>
      <p><strong>No reemplaza al CV:</strong> lo complementa. Muchas personas que seleccionan personal miran tu LinkedIn después de leer tu CV, así que tienen que coincidir.</p>
      <p>Por ejemplo, alguien que busca trabajo de recepcionista en Córdoba puede tener su CV impreso para los consultorios del barrio y su perfil de LinkedIn para las clínicas grandes.</p>` },
    { titulo: "Crear la cuenta bien desde el principio", html: `
      <p class="idea">Una cuenta bien creada te ahorra problemas después: nombre real, un mail que revises y una contraseña segura.</p>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>Mail</td><td>Uno serio, con tu nombre, que revises todos los días</td></tr>
        <tr><td>Nombre</td><td>Tu nombre y apellido reales, como en el CV (sin apodos ni emojis)</td></tr>
        <tr><td>Contraseña</td><td>Larga y distinta de la de otras cuentas</td></tr>
        <tr><td>Verificación en dos pasos</td><td>Activala en la configuración: te pide un código además de la contraseña</td></tr>
        <tr><td>Aplicación</td><td>Instalala en el celular para responder mensajes a tiempo</td></tr>
      </table>
      <p>La <strong>verificación en dos pasos</strong> hace que, aunque alguien sepa tu contraseña, no pueda entrar sin el código que te llega a vos.</p>
      <p><strong>Una sola cuenta:</strong> si ya tenías una vieja, recuperala en vez de crear otra. Dos perfiles con el mismo nombre confunden a quien te busca.</p>
      <p>Por ejemplo, si te registrás con "elfacha_10@…", los avisos de entrevistas te llegan a un mail que quizás no mirás seguido.</p>` },
    { titulo: "Gratis o Premium, y quién te ve", html: `
      <p class="idea">La cuenta gratuita alcanza para casi todo: armar el perfil, buscar empleos, postularte y escribir a tus contactos. <strong>Premium</strong> es una suscripción paga con algunas funciones extra.</p>
      <table>
        <tr><th>Gratis</th><th>Premium (pago)</th></tr>
        <tr><td>Perfil completo</td><td>Ver más datos de quién visitó tu perfil</td></tr>
        <tr><td>Buscar y postularte a empleos</td><td>Mandar mensajes a personas que no son tus contactos</td></tr>
        <tr><td>Conectar y escribir a tus contactos</td><td>Algunos datos extra sobre los avisos</td></tr>
      </table>
      <p><strong>Antes de pagar:</strong> armá bien el perfil gratis. Un perfil incompleto no mejora pagando. Si probás un período gratis de Premium, anotá la fecha en que termina para cancelarlo si no te sirve.</p>
      <p><strong>Quién ve tu perfil:</strong> en general, lo que pongas en el perfil lo puede ver cualquier persona con cuenta, y parte también desde buscadores. Por eso, no pongas tu dirección, tu DNI ni tu teléfono personal a la vista.</p>
      <p>Por ejemplo, dejar visible solo tu ciudad ("La Plata, Buenos Aires") alcanza para que te encuentren en búsquedas locales, sin dar tu dirección.</p>` },
  ],
  practica: [
    "Anotá 3 empleos o empresas que te interesan y buscá si tienen página en LinkedIn. Anotá cuántas encontraste.",
    "Creá tu cuenta (o revisá la que tenés) con mail serio, nombre real y verificación en dos pasos. Anotá qué cambiaste.",
    "Revisá qué datos personales están visibles en tu perfil y sacá dirección, DNI o teléfono si aparecen. Anotá qué quedó visible.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: registrarse", url: "https://www.linkedin.com/help/linkedin/answer/a1338223?lang=es" },
    { t: "Ayuda de LinkedIn: preguntas sobre Premium", url: "https://www.linkedin.com/help/linkedin/answer/a564062?lang=es" },
    { t: "Ayuda de LinkedIn: lo que pueden ver en tu perfil", url: "https://www.linkedin.com/help/linkedin/answer/a541646?lang=es" },
  ],
  quiz: [
    { q: "¿Qué es LinkedIn?", opciones: ["Una bolsa de trabajo del Estado","Una app de mensajes","Una red social para el trabajo","Un portal solo para empresas"], correcta: 2, explicacion: "Es una red social con foco laboral. Bolsa del Estado tienta porque hay avisos, pero es una empresa privada." },
    { q: "Si una consultora busca \"administrativa en Rosario\", ¿qué te conviene tener?", opciones: ["Un perfil con tu puesto y tu ciudad, para aparecer en la búsqueda","Solo tu CV en papel","Un perfil sin ciudad","Muchas fotos personales"], correcta: 0, explicacion: "Si tu perfil dice qué hacés y dónde, te encuentran. El CV en papel tienta, pero la consultora busca en la red." },
    { q: "Trabajás de plomero en tu barrio. ¿LinkedIn es tu canal principal?", opciones: ["Sí, es lo único que sirve","No, está prohibido para oficios","Sí, si pagás Premium","No siempre: los contactos y grupos locales suelen funcionar más, aunque el perfil igual suma"], correcta: 3, explicacion: "Depende del rubro. \"Es lo único\" tienta por popular, pero para oficios de barrio funcionan otros canales." },
    { q: "¿LinkedIn reemplaza al CV?", opciones: ["Sí, ya nadie pide CV","No: lo complementa, y tienen que coincidir","No, y no hace falta que coincidan","Sí, si tenés muchos contactos"], correcta: 1, explicacion: "Muchos miran tu LinkedIn después de tu CV. Que no hace falta coincidir tienta, pero las diferencias generan desconfianza." },
    { q: "Vas a crear tu cuenta. ¿Qué nombre ponés?", opciones: ["Un apodo gracioso","Tu nombre con emojis","Tu nombre y apellido reales, como en el CV","El nombre de tu emprendimiento"], correcta: 2, explicacion: "El nombre real te hace encontrable. El nombre del emprendimiento tienta, pero LinkedIn tiene páginas aparte para empresas." },
    { q: "¿Para qué sirve la verificación en dos pasos?", opciones: ["Para que nadie entre sin el código que te llega a vos, aunque sepa tu contraseña","Para tener dos cuentas","Para pagar Premium","Para que te encuentren más"], correcta: 0, explicacion: "Protege la cuenta. Tener dos cuentas tienta por el nombre, pero no tiene nada que ver." },
    { q: "Ya tenías una cuenta vieja de LinkedIn. ¿Qué hacés?", opciones: ["Creás una nueva y dejás la vieja","Creás tres para tener más chances","Las dejás las dos","La recuperás en vez de crear otra"], correcta: 3, explicacion: "Dos perfiles confunden. Crear una nueva tienta por fácil, pero quien te busca puede encontrar la vieja." },
    { q: "¿La cuenta gratuita alcanza para buscar trabajo?", opciones: ["No, hay que pagar Premium","Sí: perfil, búsqueda, postulaciones y mensajes a contactos","Solo para ver avisos","Solo para empresas"], correcta: 1, explicacion: "Gratis alcanza para casi todo. Pagar tienta como atajo, pero un perfil incompleto no mejora pagando." },
    { q: "Empezás un período gratis de Premium. ¿Qué hacés?", opciones: ["Nada, se cancela solo","Lo dejás seguir sin mirar","Anotás la fecha en que termina para cancelarlo si no te sirve","Le das tu tarjeta a un amigo"], correcta: 2, explicacion: "Si no lo cancelás, se cobra. Que se cancela solo tienta, pero suele renovarse automáticamente." },
    { q: "¿Quién puede ver tu perfil de LinkedIn?", opciones: ["En general, cualquier persona con cuenta, y parte desde buscadores","Solo tus contactos","Nadie","Solo LinkedIn"], correcta: 0, explicacion: "El perfil es bastante público. Solo tus contactos tienta, pero la mayoría de lo que pongas es visible." },
    { q: "Tu perfil muestra tu dirección completa y tu teléfono. ¿Qué hacés?", opciones: ["Los dejás para que te encuentren","Agregás también el DNI","Los ponés en el titular","Los sacás y dejás solo tu ciudad"], correcta: 3, explicacion: "Datos personales a la vista son un riesgo. Dejarlos para que te encuentren tienta, pero la ciudad alcanza." },
    { q: "Si buscás trabajo en clínicas grandes de Córdoba, ¿qué combinación conviene?", opciones: ["Solo LinkedIn","CV impreso para lo de barrio y perfil de LinkedIn para las empresas grandes","Solo carteles","Nada, esperar que llamen"], correcta: 1, explicacion: "Combinar canales cubre más. Solo LinkedIn tienta por moderno, pero los lugares chicos suelen usar otros medios." },
  ],
},
{
  id: "perfil",
  icono: "🪪",
  titulo: "Lo que se ve primero: foto, titular y ubicación",
  nivel: "Básico",
  objetivos: [
    "Elegir una foto de perfil y una imagen de portada profesionales",
    "Escribir un titular que diga qué hacés y qué buscás",
    "Configurar ubicación, enlace personalizado y el aviso de que buscás empleo",
  ],
  lecciones: [
    { titulo: "Foto y portada", html: `
      <p class="idea">La foto es lo primero que se ve. No hace falta un estudio: una foto clara, de frente, con buena luz y fondo simple alcanza.</p>
      <table>
        <tr><th>Foto que suma</th><th>Foto que resta</th></tr>
        <tr><td>De los hombros para arriba, la cara ocupa buena parte</td><td>De cuerpo entero, la cara chiquita</td></tr>
        <tr><td>Luz natural de frente (cerca de una ventana)</td><td>A contraluz o de noche con flash</td></tr>
        <tr><td>Fondo liso o una pared</td><td>En una fiesta, recortada de una foto grupal</td></tr>
        <tr><td>Expresión amable, mirando a la cámara</td><td>Con anteojos de sol o con filtros</td></tr>
        <tr><td>Ropa como la que usarías en una entrevista</td><td>Una foto de hace 10 años</td></tr>
      </table>
      <p><strong>Cómo sacarla:</strong> pedile a alguien que te saque varias con el celular, a la altura de los ojos, de día cerca de una ventana. Elegí la mejor.</p>
      <p><strong>La portada</strong> es la imagen ancha de arriba. Puede ser algo de tu rubro (herramientas, una cocina, un escritorio) o un color liso. No la dejes vacía si podés, pero tampoco la llenes de texto.</p>
      <p>Por ejemplo, los perfiles con foto reciben muchas más visitas que los que no tienen: sin foto, parece una cuenta abandonada o falsa.</p>` },
    { titulo: "El titular", html: `
      <p class="idea">El <strong>titular</strong> es la línea que aparece debajo de tu nombre, en las búsquedas y en cada mensaje. Si no lo cambiás, LinkedIn pone tu último puesto. Usalo para decir qué hacés y qué buscás.</p>
      <table>
        <tr><th>Titular flojo</th><th>Titular claro</th></tr>
        <tr><td>"Buscando nuevos desafíos"</td><td>"Recepcionista y atención al público · Facturación y agenda · Buscando empleo en La Plata"</td></tr>
        <tr><td>"Desempleado"</td><td>"Auxiliar administrativo · Excel y caja · Disponible full time"</td></tr>
        <tr><td>"Estudiante"</td><td>"Estudiante de Enfermería (2.º año) · Experiencia en cuidado de adultos mayores"</td></tr>
      </table>
      <p><strong>Una fórmula:</strong></p>
      <pre><code>[Lo que hacés o querés hacer] · [2 cosas que sabés] · [Qué buscás o dónde]</code></pre>
      <p><strong>Usá las palabras que buscan los reclutadores:</strong> las que aparecen en los avisos de tu rubro ("atención al cliente", "facturación", "cocina"). Así aparecés en sus búsquedas.</p>
      <p>Por ejemplo, "Buscando nuevos desafíos" no aparece en ninguna búsqueda; "Recepcionista · Facturación" aparece cuando alguien busca "recepcionista".</p>` },
    { titulo: "Ubicación, enlace y \"Busco empleo\"", html: `
      <p class="idea">Tres ajustes rápidos que mucha gente olvida: la ubicación, el enlace personalizado y avisar que estás buscando trabajo.</p>
      <table>
        <tr><th>Ajuste</th><th>Para qué</th></tr>
        <tr><td>Ubicación (ciudad y provincia)</td><td>Aparecer en búsquedas por zona</td></tr>
        <tr><td>Enlace personalizado</td><td>Una dirección corta como linkedin.com/in/juana-perez, para poner en el CV</td></tr>
        <tr><td>Avisar que buscás empleo</td><td>Que los reclutadores sepan que estás disponible</td></tr>
      </table>
      <p><strong>Avisar que buscás empleo</strong> tiene dos opciones: que lo vea cualquiera (aparece un marco verde en tu foto) o solo los reclutadores. Si hoy tenés trabajo y no querés que tu empleador se entere, elegí la segunda, sabiendo que LinkedIn no puede garantizar que nadie de tu empresa lo vea.</p>
      <p><strong>Completá qué buscás:</strong> puestos, lugares y modalidad (presencial, a distancia o mixta). Eso define qué te muestran y quién te encuentra.</p>
      <p>Por ejemplo, poner el enlace corto en el encabezado del CV deja que quien lo lee vea tu perfil con un clic.</p>` },
  ],
  practica: [
    "Sacate 5 fotos con luz natural y fondo simple, elegí la mejor y subila. Mostrale a alguien la anterior y la nueva y anotá cuál prefiere.",
    "Escribí 3 versiones de tu titular con la fórmula y elegí una. Anotá qué palabras de avisos reales incluiste.",
    "Configurá ubicación, enlace personalizado y el aviso de que buscás empleo. Anotá tu enlace y qué opción de visibilidad elegiste.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: crear un buen perfil", url: "https://www.linkedin.com/help/linkedin/answer/a554351?lang=es" },
    { t: "Ayuda de LinkedIn: avisar que buscás empleo", url: "https://www.linkedin.com/help/linkedin/answer/a507508?lang=es" },
    { t: "Ayuda de LinkedIn: lo que pueden ver en tu perfil", url: "https://www.linkedin.com/help/linkedin/answer/a541646?lang=es" },
  ],
  quiz: [
    { q: "Tu foto de perfil es de una fiesta, recortada de una foto grupal. ¿Qué hacés?", opciones: ["La dejás, se te ve contento","Le ponés un filtro","La cambiás por una clara, de frente, con fondo simple","La sacás y no ponés ninguna"], correcta: 2, explicacion: "Una foto clara y simple da confianza. Sin foto tienta para no equivocarte, pero parece una cuenta falsa." },
    { q: "Si querés sacarte una buena foto con el celular, ¿cómo lo hacés?", opciones: ["De día cerca de una ventana, a la altura de los ojos, varias para elegir","De noche con flash","A contraluz","Una sola selfie desde abajo"], correcta: 0, explicacion: "La luz natural de frente favorece. El flash tienta por iluminar, pero aplana y da sombras duras." },
    { q: "¿Qué conviene poner en la portada?", opciones: ["Una foto de tus vacaciones","Un texto largo con tu historia","Memes","Algo de tu rubro o un color liso, sin llenarla de texto"], correcta: 3, explicacion: "Simple y del rubro suma. El texto largo tienta para aprovechar el espacio, pero no se lee." },
    { q: "¿Qué es el titular de LinkedIn?", opciones: ["Tu foto","La línea debajo de tu nombre que aparece en búsquedas y mensajes","Tu dirección","El título universitario"], correcta: 1, explicacion: "Es lo que se lee junto a tu nombre. Título universitario tienta por el nombre, pero puede ser cualquier cosa que te describa." },
    { q: "Tu titular dice \"Buscando nuevos desafíos\". ¿Qué problema tiene?", opciones: ["Es muy largo","Es muy formal","No dice qué hacés y no aparece en ninguna búsqueda","Ninguno"], correcta: 2, explicacion: "No tiene palabras que alguien busque. Que suena bien tienta, pero no te encuentran." },
    { q: "Si sos auxiliar administrativo sin trabajo, ¿qué titular conviene?", opciones: ["\"Auxiliar administrativo · Excel y caja · Disponible full time\"","\"Desempleado\"","\"Sin trabajo, cualquier cosa\"","\"Buscando oportunidades\""], correcta: 0, explicacion: "Decí qué sabés hacer. \"Desempleado\" tienta por honesto, pero no dice qué ofrecés." },
    { q: "¿Qué palabras conviene usar en el titular?", opciones: ["Palabras en inglés que suenan bien","Frases motivacionales","Emojis","Las que aparecen en los avisos de tu rubro"], correcta: 3, explicacion: "Los reclutadores buscan con esas palabras. Las frases motivacionales tientan, pero nadie las busca." },
    { q: "Si no ponés ubicación en tu perfil, ¿qué pasa?", opciones: ["Aparecés en todas las búsquedas","No aparecés en las búsquedas por zona","Nada","Te llegan más mensajes"], correcta: 1, explicacion: "La ubicación te pone en el mapa. \"Nada\" tienta, pero muchas búsquedas filtran por ciudad." },
    { q: "¿Para qué sirve el enlace personalizado?", opciones: ["Para pagar menos","Para ocultar tu perfil","Para tener una dirección corta de tu perfil y ponerla en el CV","Para cambiar de nombre"], correcta: 2, explicacion: "Un enlace corto se escribe y se recuerda. Ocultar tienta, pero el enlace hace lo contrario: lo muestra." },
    { q: "Tenés trabajo y buscás otro sin que tu jefe se entere. ¿Qué opción elegís?", opciones: ["Avisar que buscás empleo solo a los reclutadores, sabiendo que no hay garantía total","El marco verde visible para todos","Poner \"Busco trabajo\" en el titular","No buscar en LinkedIn"], correcta: 0, explicacion: "La opción solo para reclutadores es más discreta. El marco verde tienta por visible, pero lo ve tu jefe también." },
    { q: "Si activaste que buscás empleo, ¿qué completás además?", opciones: ["Tu sueldo actual","Tu DNI","Nada más","Puestos, lugares y modalidad que buscás"], correcta: 3, explicacion: "Eso define qué te muestran y quién te encuentra. Tu sueldo actual tienta como dato útil, pero no se pide ahí." },
    { q: "Querés que quien lee tu CV vea tu perfil. ¿Qué hacés?", opciones: ["Escribís \"buscame en LinkedIn\"","Ponés tu enlace personalizado en el encabezado del CV","Ponés una captura del perfil","Nada"], correcta: 1, explicacion: "Con el enlace, es un clic. \"Buscame\" tienta por corto, pero puede haber muchas personas con tu nombre." },
  ],
},
{
  id: "contenido",
  icono: "📄",
  titulo: "Acerca de, experiencia y aptitudes",
  nivel: "Intermedio",
  objetivos: [
    "Escribir la sección \"Acerca de\" en 3 párrafos cortos",
    "Cargar experiencias con logros concretos, como en el CV",
    "Elegir aptitudes y armar un perfil aunque no tengas experiencia formal",
  ],
  lecciones: [
    { titulo: "La sección \"Acerca de\"", video: {"id":"goDUy0MeVsY","t":"Cómo escribir el extracto de LinkedIn · Ivo Fiz (7:13)"}, html: `
      <p class="idea">"Acerca de" es tu presentación escrita, en primera persona. Pensala como tu "Contame de vos" de una entrevista: quién sos como trabajador, qué sabés hacer y qué buscás.</p>
      <pre><code>Párrafo 1 – Quién soy y qué hago
Trabajo hace 4 años en atención al público y administración en
comercios de La Plata. Me gusta que el cliente se vaya con su
problema resuelto.

Párrafo 2 – Qué sé hacer, con un logro
Manejo caja, facturación y agenda de turnos. En mi último trabajo
ordené el archivo de proveedores y bajamos a la mitad el tiempo
para encontrar una factura.

Párrafo 3 – Qué busco y cómo contactarme
Busco un puesto administrativo o de recepción en La Plata.
Me pueden escribir por mensaje acá en LinkedIn.</code></pre>
      <p><strong>Las primeras líneas son las que se ven</strong> sin tocar "ver más": poné lo más importante al principio.</p>
      <p><strong>Escribí como hablás, pero cuidado:</strong> sin errores, sin frases vacías ("persona proactiva y apasionada") y con palabras de tu rubro.</p>
      <p>Por ejemplo, "Bajamos a la mitad el tiempo para encontrar una factura" dice más que tres adjetivos sobre lo ordenado que sos.</p>` },
    { titulo: "Experiencia y formación", video: {"id":"u6FFVhD23Pg","t":"LinkedIn: cómo hacer un buen perfil · David Vaquerizo (10:33)"}, html: `
      <p class="idea">La sección de experiencia es tu CV dentro de LinkedIn. Cada puesto con empresa, fechas y 2 o 3 logros concretos, empezando por un verbo.</p>
      <table>
        <tr><th>Flojo</th><th>Con logros</th></tr>
        <tr><td>"Tareas administrativas varias"</td><td>"Facturé y controlé unas 200 facturas por mes sin diferencias con el banco"</td></tr>
        <tr><td>"Atención al cliente"</td><td>"Atendí unas 80 personas por día en mostrador y armé el sistema de turnos por WhatsApp"</td></tr>
      </table>
      <p><strong>Tiene que coincidir con tu CV:</strong> mismos puestos y mismas fechas. Una diferencia hace dudar a quien compara.</p>
      <p><strong>Trabajos informales también cuentan:</strong> changas, emprendimientos, ayudar en el negocio familiar. Ponelos con su nombre real ("Venta de ropa por Instagram, emprendimiento propio") y logros.</p>
      <p><strong>Formación:</strong> secundario, cursos, oficios, carreras en curso. Los cursos cortos van en "Licencias y certificaciones" si te dieron un certificado.</p>
      <p>Por ejemplo, "Atendí unas 80 personas por día" le permite a quien lee imaginarse tu trabajo; "Atención al cliente" no.</p>` },
    { titulo: "Aptitudes y perfil sin experiencia", html: `
      <p class="idea">Las <strong>aptitudes</strong> son las habilidades que listás en tu perfil, como "Atención al cliente", "Excel" o "Facturación". Los reclutadores filtran por ellas, así que elegí las que piden los avisos.</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplos</th></tr>
        <tr><td>Técnicas (de tu oficio)</td><td>Excel, facturación, cocina, carpintería, primeros auxilios</td></tr>
        <tr><td>Herramientas</td><td>Google Sheets, WhatsApp Business, sistemas de gestión</td></tr>
        <tr><td>Interpersonales</td><td>Atención al cliente, trabajo en equipo, comunicación</td></tr>
      </table>
      <p><strong>Pocas y verdaderas:</strong> mejor 10 que te representen que 50 que no podés demostrar. Ordená arriba las más importantes para el puesto que buscás.</p>
      <p><strong>Si no tenés experiencia formal:</strong></p>
      <ul>
        <li>En "Acerca de", contá qué querés hacer y qué estás aprendiendo.</li>
        <li>Cargá voluntariados, proyectos de la escuela, cursos y changas.</li>
        <li>Sumá aptitudes de lo que hiciste de verdad (organizar un evento del club, atender el kiosco familiar).</li>
      </ul>
      <p>Por ejemplo, un perfil de alguien que recién termina el secundario puede tener como experiencia "Organización de la kermés escolar: coordiné 12 puestos y la recaudación" y eso ya muestra algo concreto.</p>` },
  ],
  practica: [
    "Escribí tu \"Acerca de\" en 3 párrafos con el modelo de la lección. Contá las palabras y revisá que lo importante esté en las primeras 2 líneas.",
    "Cargá o reescribí tus 2 últimas experiencias con 2 o 3 logros cada una, empezando con un verbo. Anotá cuántos logros tienen un número.",
    "Elegí 10 aptitudes a partir de 3 avisos reales que te interesen. Anotá cuáles aparecían en más de un aviso.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: crear un buen perfil", url: "https://www.linkedin.com/help/linkedin/answer/a554351?lang=es" },
    { t: "Ayuda de LinkedIn: validar las aptitudes de alguien", url: "https://www.linkedin.com/help/linkedin/answer/a564088?lang=es" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "¿En qué persona se escribe la sección \"Acerca de\"?", opciones: ["En tercera persona: \"Juana es…\"","En forma de lista de palabras","En primera persona: \"Trabajo hace 4 años…\"","En inglés"], correcta: 2, explicacion: "Primera persona suena natural. La tercera tienta por formal, pero suena raro en tu propio perfil." },
    { q: "¿Qué tiene que tener \"Acerca de\"?", opciones: ["Quién sos, qué sabés hacer con un logro y qué buscás","Tu historia de vida completa","Solo frases motivacionales","Tu dirección y teléfono"], correcta: 0, explicacion: "Tres partes claras. La historia completa tienta para presentarte, pero nadie la lee entera." },
    { q: "Si en tu \"Acerca de\" lo importante está al final, ¿qué pasa?", opciones: ["Se lee igual","Queda más misterioso","LinkedIn lo destaca","Casi nadie lo ve: solo se muestran las primeras líneas sin tocar \"ver más\""], correcta: 3, explicacion: "Las primeras líneas son las visibles. Que se lee igual tienta, pero muchos no tocan \"ver más\"." },
    { q: "Tu \"Acerca de\" dice \"persona proactiva, apasionada y resiliente\". ¿Qué le falta?", opciones: ["Más adjetivos","Algo concreto: qué hiciste y qué lograste","Emojis","Nada"], correcta: 1, explicacion: "Los logros convencen más que los adjetivos. Más adjetivos tientan, pero cualquiera los escribe." },
    { q: "Tu experiencia dice \"Tareas administrativas varias\". ¿Cómo la mejorás?", opciones: ["\"Muchas tareas administrativas\"","\"Administración en general\"","\"Facturé y controlé unas 200 facturas por mes sin diferencias con el banco\"","La dejás así"], correcta: 2, explicacion: "Un logro con verbo y número muestra lo que hiciste. \"Muchas tareas\" tienta por abarcador, pero no dice nada." },
    { q: "Tu LinkedIn y tu CV tienen fechas distintas para el mismo trabajo. ¿Qué pasa?", opciones: ["Quien los compara duda: tienen que coincidir","Nada, nadie compara","Queda mejor","Es normal"], correcta: 0, explicacion: "Las diferencias generan desconfianza. \"Nadie compara\" tienta, pero muchas personas que seleccionan lo hacen." },
    { q: "Si vendiste ropa por Instagram dos años, ¿lo ponés en experiencia?", opciones: ["No, no es un trabajo de verdad","Sí, pero inventando una empresa","Solo si facturabas mucho","Sí, como emprendimiento propio, con logros"], correcta: 3, explicacion: "Los emprendimientos cuentan. \"No es de verdad\" tienta, pero muestra iniciativa, ventas y organización." },
    { q: "Si hiciste un curso corto con certificado, ¿dónde va?", opciones: ["En el titular","En \"Licencias y certificaciones\"","En la foto","En ningún lado"], correcta: 1, explicacion: "Esa sección es para certificados. El titular tienta para que se vea, pero se llena de cosas." },
    { q: "¿Qué son las aptitudes en LinkedIn?", opciones: ["Tus hobbies","Tus contactos","Las habilidades que listás, como Excel o atención al cliente, y por las que filtran los reclutadores","Tus publicaciones"], correcta: 2, explicacion: "Son tus habilidades. Los hobbies tientan como \"cosas que hacés bien\", pero no suelen buscarse." },
    { q: "¿Cuántas aptitudes conviene listar?", opciones: ["Pocas y verdaderas, unas 10 que te representen","50 para aparecer en todo","Ninguna","Solo una"], correcta: 0, explicacion: "Mejor pocas y demostrables. 50 tienta para aparecer en más búsquedas, pero no podés demostrarlas todas." },
    { q: "¿Cómo elegís qué aptitudes poner?", opciones: ["Las que suenan mejor","Las que tienen tus amigos","Al azar","Mirando qué piden los avisos que te interesan"], correcta: 3, explicacion: "Los avisos te dicen qué buscan. Las que suenan mejor tientan, pero quizás nadie las busca." },
    { q: "Si recién terminaste el secundario, ¿qué podés cargar como experiencia?", opciones: ["Nada, el perfil queda vacío","Voluntariados, proyectos escolares, cursos y changas, con algo concreto que hiciste","Trabajos inventados","Solo tu promedio"], correcta: 1, explicacion: "Lo que hiciste de verdad cuenta. Dejarlo vacío tienta, pero un perfil vacío no aparece en búsquedas." },
  ],
},
{
  id: "red",
  icono: "🕸️",
  titulo: "Tu red de contactos",
  nivel: "Intermedio",
  objetivos: [
    "Elegir con quién conectar y mandar invitaciones con una nota",
    "Pedir recomendaciones y validar aptitudes de otros",
    "Escribirle a alguien de una empresa sin parecer pesado",
  ],
  lecciones: [
    { titulo: "Con quién conectar", video: {"id":"P8eQflztMHI","t":"Tips para hacer networking en LinkedIn · Junior Achievement Argentina (4:23)"}, html: `
      <p class="idea">Tu <strong>red</strong> son las personas con las que estás conectado. Cuanto más relacionada con tu rubro, más útil: ves sus publicaciones, te ven a vos y pueden recomendarte.</p>
      <table>
        <tr><th>Empezá por</th><th>Después sumá</th></tr>
        <tr><td>Compañeros y jefes de trabajos anteriores</td><td>Personas de empresas donde te gustaría trabajar</td></tr>
        <tr><td>Compañeros de la escuela, cursos o facultad</td><td>Reclutadores de tu rubro</td></tr>
        <tr><td>Profesores y capacitadores</td><td>Personas que publican cosas útiles de tu oficio</td></tr>
      </table>
      <p><strong>Calidad antes que cantidad:</strong> 100 contactos de tu rubro valen más que 1.000 desconocidos al azar.</p>
      <p>Hacer <strong>networking</strong> es construir relaciones de trabajo: conocer gente, ayudar y dejarte ayudar. No es pedir trabajo a todo el mundo.</p>
      <p><strong>Seguir en vez de conectar:</strong> a empresas y a personas muy conocidas podés "seguirlas" para ver lo que publican, sin pedir conexión.</p>
      <p>Por ejemplo, conectar con tus compañeros del curso de administración hace que, cuando uno vea una búsqueda en su empresa, se acuerde de vos.</p>` },
    { titulo: "Invitaciones y recomendaciones", html: `
      <p class="idea">Una invitación con una nota corta se acepta mucho más que una vacía. Y una <strong>recomendación</strong> (un texto que alguien escribe sobre tu trabajo) es de lo que más confianza da en un perfil.</p>
      <pre><code>Nota de invitación (máx. unas 2 líneas):
"Hola, Marta. Hicimos juntas el curso de Excel en el centro de
formación. Me gustaría seguir en contacto."

Pedido de recomendación:
"Hola, Carlos. ¿Podrías escribir una recomendación breve sobre mi
trabajo en la caja de la ferretería? Si te sirve, podrías mencionar
el cierre de caja diario y la atención en temporada alta. ¡Gracias!"</code></pre>
      <table>
        <tr><th>Recomendación</th><th>Validación de aptitud</th></tr>
        <tr><td>Un texto escrito por alguien que trabajó con vos</td><td>Un clic de un contacto que confirma una aptitud tuya</td></tr>
        <tr><td>Pesa mucho</td><td>Suma, pero pesa menos</td></tr>
      </table>
      <p><strong>Pedí a quien de verdad te vio trabajar</strong> y ayudalo diciendo qué podría mencionar. Y devolvé el favor: escribí recomendaciones sinceras para otros.</p>
      <p>Por ejemplo, una recomendación de tu ex encargado que diga "Juana cerró la caja todos los días sin diferencias durante dos años" pesa más que cualquier cosa que escribas sobre vos.</p>` },
    { titulo: "Escribirle a alguien de una empresa", html: `
      <p class="idea">Escribirle a alguien que trabaja donde te gustaría trabajar puede abrir puertas, si lo hacés con respeto: corto, concreto y sin pedirle trabajo de entrada.</p>
      <pre><code>Hola, Laura. Vi que trabajás en el área administrativa de la
clínica. Me estoy postulando a un puesto de recepción ahí y quería
preguntarte, si tenés un minuto: ¿qué valoran más en ese equipo?
Gracias de antemano. Juana</code></pre>
      <table>
        <tr><th>Sí</th><th>No</th></tr>
        <tr><td>Decir quién sos y por qué le escribís</td><td>"¿Me conseguís trabajo?"</td></tr>
        <tr><td>Una pregunta concreta y fácil de responder</td><td>Mandar el CV sin que te lo pidan</td></tr>
        <tr><td>Agradecer, respondan o no</td><td>Insistir cada dos días</td></tr>
      </table>
      <p><strong>Si no responden,</strong> no lo tomes personal: mucha gente recibe muchos mensajes. Un solo seguimiento amable una semana después, y listo.</p>
      <p><strong>Cuidado con quién te escribe a vos:</strong> si un desconocido te ofrece un trabajo "increíble" y te pide datos, dinero o que sigas la charla por otra app, desconfiá (lo vemos en el módulo de empleos).</p>
      <p>Por ejemplo, preguntar "¿Qué valoran en ese equipo?" se responde en un minuto y te da información para la entrevista; "¿Me conseguís trabajo?" incomoda.</p>` },
  ],
  practica: [
    "Mandá 10 invitaciones con nota a personas que conocés (compañeros, ex jefes, profesores). Anotá cuántas aceptaron en una semana.",
    "Pedí una recomendación a alguien que te vio trabajar, diciendo qué podría mencionar. Escribí vos una para otra persona. Anotá a quién le pediste y a quién le escribiste.",
    "Escribí un mensaje a alguien de una empresa que te interese, con el modelo de la lección. Anotá si respondió y qué aprendiste.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: solicitar una recomendación", url: "https://www.linkedin.com/help/linkedin/answer/a541658?lang=es" },
    { t: "Ayuda de LinkedIn: validar las aptitudes de alguien", url: "https://www.linkedin.com/help/linkedin/answer/a564088?lang=es" },
    { t: "Ayuda de LinkedIn: mensajes", url: "https://www.linkedin.com/help/linkedin/answer/a545663?lang=es" },
  ],
  quiz: [
    { q: "Querés armar tu red. ¿Con quién empezás?", opciones: ["Con 1.000 desconocidos al azar","Con famosos","Con compañeros, jefes anteriores, profesores y gente de cursos","Con nadie"], correcta: 2, explicacion: "Empezá por quienes te conocen. Desconocidos al azar tientan para sumar números, pero no te ayudan." },
    { q: "¿Qué vale más en tu red?", opciones: ["100 contactos de tu rubro","1.000 desconocidos al azar","Solo familiares","Cuantos más mejor, sin importar quiénes"], correcta: 0, explicacion: "Calidad antes que cantidad. Cuantos más mejor tienta, pero llena tu inicio de cosas que no te sirven." },
    { q: "¿Qué es hacer networking?", opciones: ["Pedir trabajo a todos","Mandar el CV a todos tus contactos","Tener muchos seguidores","Construir relaciones de trabajo: conocer gente, ayudar y dejarte ayudar"], correcta: 3, explicacion: "Es relación, no pedido. Pedir trabajo a todos tienta por directo, pero incomoda y cierra puertas." },
    { q: "Querés ver lo que publica una empresa grande sin conectar con nadie. ¿Qué hacés?", opciones: ["Le mandás invitación a todos sus empleados","La seguís","Le escribís al dueño","Nada"], correcta: 1, explicacion: "Seguir te muestra sus publicaciones. Invitar a todos tienta, pero parece spam." },
    { q: "Si vas a mandar una invitación a una compañera de un curso, ¿qué agregás?", opciones: ["Nada, la invitación sola","Tu CV","Una nota corta: dónde se conocieron y que querés seguir en contacto","Un pedido de trabajo"], correcta: 2, explicacion: "La nota hace que te reconozca. La invitación sola tienta por rápida, pero se acepta menos." },
    { q: "¿Qué es una recomendación en LinkedIn?", opciones: ["Un texto que alguien escribe sobre tu trabajo","Un clic que confirma una aptitud","Un aviso de empleo","Un mensaje privado"], correcta: 0, explicacion: "Es un texto de otra persona. El clic tienta, pero eso es una validación de aptitud, que pesa menos." },
    { q: "¿A quién le pedís una recomendación?", opciones: ["A un amigo que nunca trabajó con vos","A un desconocido con muchos contactos","A un familiar","A alguien que de verdad te vio trabajar"], correcta: 3, explicacion: "Tiene que conocer tu trabajo. Alguien con muchos contactos tienta por visible, pero no puede contar nada real." },
    { q: "Le pedís una recomendación a tu ex encargado. ¿Cómo lo ayudás?", opciones: ["Escribiéndola vos y pidiéndole que la firme sin leer","Diciéndole qué podría mencionar, como el cierre de caja diario","No diciéndole nada","Pidiéndole que exagere"], correcta: 1, explicacion: "Sugerir temas le facilita escribir algo verdadero. Pedir que exagere tienta, pero se nota y resta." },
    { q: "Querés escribirle a alguien de una clínica donde te postulás. ¿Qué mensaje conviene?", opciones: ["\"¿Me conseguís trabajo?\"","Tu CV sin explicación","Quién sos, por qué le escribís y una pregunta concreta, como \"¿Qué valoran en ese equipo?\"","Un mensaje largo con tu historia"], correcta: 2, explicacion: "Una pregunta fácil de responder abre la charla. Pedir trabajo tienta por directo, pero incomoda." },
    { q: "Le escribiste a alguien y no respondió. ¿Qué hacés?", opciones: ["Un solo seguimiento amable una semana después, y no lo tomás personal","Le escribís cada dos días","Lo bloqueás","Le reclamás por no responder"], correcta: 0, explicacion: "Mucha gente recibe muchos mensajes. Insistir tienta para que no se olvide, pero molesta." },
    { q: "Un desconocido te ofrece un trabajo \"increíble\" y te pide seguir la charla por otra app. ¿Qué hacés?", opciones: ["Aceptás enseguida","Le pasás tus datos","Le pagás para reservar el puesto","Desconfiás: es una señal típica de estafa"], correcta: 3, explicacion: "Llevar la charla a otra app es una señal de alerta. Aceptar tienta por la oferta, pero puede ser una estafa." },
    { q: "¿Conviene escribir recomendaciones para otros?", opciones: ["No, solo pedirlas","Sí, sinceras: devolver el favor fortalece la red","Sí, para cualquiera, aunque no lo conozcas","No, LinkedIn no lo permite"], correcta: 1, explicacion: "Recomendar con sinceridad suma a los dos. Para cualquiera tienta por amable, pero pierde valor si no es real." },
  ],
},
{
  id: "empleos",
  icono: "🔍",
  titulo: "Buscar empleos y evitar estafas",
  nivel: "Intermedio",
  objetivos: [
    "Buscar empleos con filtros y crear alertas",
    "Postularte con solicitud sencilla o en el sitio de la empresa, adaptando tu perfil",
    "Reconocer avisos falsos y ofertas que son estafas",
  ],
  lecciones: [
    { titulo: "Buscar con filtros y alertas", video: {"id":"E7lYmyvxsd0","t":"Consigue trabajo con LinkedIn: configurar, buscar y postularte · Pablo Simplifica (9:29)"}, html: `
      <p class="idea">En la sección Empleos podés buscar por puesto y lugar, y después <strong>filtrar</strong> para ver solo lo que te sirve. Las <strong>alertas</strong> te avisan cuando aparece un aviso nuevo que coincide.</p>
      <table>
        <tr><th>Filtro</th><th>Para qué</th></tr>
        <tr><td>Fecha de publicación</td><td>Ver solo los de la última semana (los viejos suelen estar cerrados)</td></tr>
        <tr><td>Ubicación y distancia</td><td>Que te quede cerca</td></tr>
        <tr><td>Modalidad</td><td>Presencial, a distancia o mixta</td></tr>
        <tr><td>Nivel de experiencia</td><td>Sin experiencia, junior, semi senior…</td></tr>
        <tr><td>Tipo de empleo</td><td>Jornada completa, media jornada, temporal</td></tr>
      </table>
      <p><strong>Probá distintas palabras:</strong> "recepcionista", "administrativa", "atención al público" pueden traer avisos distintos para el mismo tipo de trabajo.</p>
      <p><strong>Creá una alerta</strong> con la búsqueda que más te sirve: te llega un aviso por mail o en la app, y podés postularte entre los primeros.</p>
      <p>Por ejemplo, filtrar "última semana" y "a menos de 25 km" puede bajar 300 resultados a 20 avisos que de verdad te convienen.</p>` },
    { titulo: "Postularte bien", html: `
      <p class="idea">Hay dos formas de postularte: la <strong>solicitud sencilla</strong>, dentro de LinkedIn con tu perfil y tu CV, o en el sitio de la empresa. En las dos, conviene adaptar antes.</p>
      <table>
        <tr><th>Antes de postularte</th><th>Por qué</th></tr>
        <tr><td>Leé el aviso entero</td><td>Para saber si cumplís lo principal</td></tr>
        <tr><td>Revisá que tu titular y tus aptitudes tengan las palabras del aviso</td><td>Los reclutadores filtran por ellas</td></tr>
        <tr><td>Subí el CV adaptado a ese aviso</td><td>El curso "Buscar trabajo con IA" explica cómo</td></tr>
        <tr><td>Respondé las preguntas extra con cuidado</td><td>Muchas veces filtran por ellas</td></tr>
      </table>
      <p><strong>La solicitud sencilla es rápida, pero no mágica:</strong> por ser fácil, a esos avisos se postula mucha gente. Postularte a 5 avisos bien elegidos y adaptados rinde más que a 50 sin mirar.</p>
      <p><strong>Un mensaje extra:</strong> si el aviso muestra quién lo publicó, podés mandarle un mensaje corto: "Me postulé al puesto de recepción; tengo 4 años de experiencia en atención y agenda. Quedo a disposición".</p>
      <p><strong>Anotá cada postulación</strong> en una planilla (fecha, empresa, puesto, estado), para hacer seguimiento.</p>
      <p>Por ejemplo, si el aviso pide "agenda de turnos" y tu perfil dice "manejo de agenda", conviene usar las mismas palabras que el aviso.</p>` },
    { titulo: "Avisos falsos y estafas", html: `
      <p class="idea">En LinkedIn también hay estafas: avisos falsos o personas que se hacen pasar por reclutadores para robarte datos o plata. Las señales son casi siempre las mismas.</p>
      <table>
        <tr><th>Señal de alerta</th><th>Ejemplo</th></tr>
        <tr><td>Te piden plata</td><td>"Pagá el curso de capacitación" o "el kit para empezar"</td></tr>
        <tr><td>Sueldo demasiado alto para lo que piden</td><td>"Ganá $ 3.000.000 por mes desde tu casa, 2 horas por día"</td></tr>
        <tr><td>Te piden datos sensibles muy pronto</td><td>DNI, CBU, clave del banco o fotos del documento antes de una entrevista</td></tr>
        <tr><td>Te llevan a otra app</td><td>"Seguimos por Telegram o WhatsApp con mi asistente"</td></tr>
        <tr><td>Perfil raro</td><td>Recién creado, pocos contactos, sin historia, empresa que no existe</td></tr>
        <tr><td>Urgencia</td><td>"Tenés que confirmar hoy o perdés el puesto"</td></tr>
      </table>
      <p><strong>Regla de oro:</strong> un trabajo de verdad no te cobra por trabajar.</p>
      <p><strong>Qué hacer:</strong> no pagues, no mandes datos, verificá que la empresa exista (su sitio, su página, una llamada a un teléfono público) y denunciá el perfil o el aviso con la opción "Denunciar" de LinkedIn.</p>
      <p>Por ejemplo, si un "reclutador" te pide una foto de tu DNI de frente y dorso para "reservar la entrevista", con eso pueden sacar créditos a tu nombre: no lo mandes.</p>` },
  ],
  practica: [
    "Hacé una búsqueda con 3 filtros (fecha, ubicación y modalidad) y creá una alerta. Anotá cuántos resultados había antes y después de filtrar.",
    "Elegí un aviso, ajustá tu titular y aptitudes con sus palabras y postulate. Anotá qué palabras agregaste.",
    "Armá una planilla de postulaciones con fecha, empresa, puesto y estado, y cargá tus últimas 5. Anotá cuántas tuvieron respuesta.",
    "Buscá un aviso sospechoso (o inventá uno) y marcá cuántas señales de alerta de la tabla tiene.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: filtrar la búsqueda de empleo", url: "https://www.linkedin.com/help/linkedin/answer/a511258?lang=es" },
    { t: "Ayuda de LinkedIn: alertas de empleo", url: "https://www.linkedin.com/help/linkedin/answer/a511279?lang=es" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Buscaste \"administrativa\" y te salen 300 avisos. ¿Qué hacés?", opciones: ["Te postulás a los 300","Leés los 300 uno por uno","Filtrás por fecha, ubicación y modalidad","Dejás de buscar"], correcta: 2, explicacion: "Los filtros te dejan los que sirven. Postularte a todos tienta para no perder nada, pero no podés adaptarte a ninguno." },
    { q: "¿Por qué conviene filtrar por \"última semana\"?", opciones: ["Porque los avisos viejos suelen estar cerrados","Porque pagan más","Porque son más fáciles","No conviene"], correcta: 0, explicacion: "Los recientes siguen abiertos. \"No conviene\" tienta para ver todo, pero perdés tiempo en búsquedas terminadas." },
    { q: "Si buscás solo \"recepcionista\", ¿qué te puede pasar?", opciones: ["Nada, aparecen todos","Que te bloqueen","Que te salgan avisos de otros países","Perderte avisos parecidos que usan otras palabras, como \"atención al público\""], correcta: 3, explicacion: "Probar varias palabras amplía la búsqueda. \"Aparecen todos\" tienta, pero cada empresa nombra distinto el puesto." },
    { q: "¿Para qué sirve una alerta de empleo?", opciones: ["Para alertar de estafas","Para que te avisen cuando aparece un aviso nuevo que coincide con tu búsqueda","Para que te llamen las empresas","Para pagar menos"], correcta: 1, explicacion: "La alerta te avisa de avisos nuevos. Alertar de estafas tienta por el nombre, pero no es eso." },
    { q: "¿Qué es la solicitud sencilla?", opciones: ["Una entrevista corta","Un aviso sin requisitos","Postularte dentro de LinkedIn con tu perfil y tu CV","Una forma de pagar Premium"], correcta: 2, explicacion: "Es postularte sin salir de LinkedIn. \"Aviso sin requisitos\" tienta por \"sencilla\", pero los requisitos siguen." },
    { q: "¿Qué rinde más?", opciones: ["Postularte a 5 avisos bien elegidos y adaptados","Postularte a 50 sin mirar","Postularte solo a uno por mes","Postularte solo a los que pagan más"], correcta: 0, explicacion: "Lo adaptado se nota. 50 sin mirar tienta por las chances, pero ninguna postulación destaca." },
    { q: "El aviso pide \"agenda de turnos\" y tu perfil dice \"manejo de agenda\". ¿Qué hacés?", opciones: ["Lo dejás, es lo mismo","Sacás la aptitud","Ponés las dos cosas en el nombre","Usás las mismas palabras que el aviso"], correcta: 3, explicacion: "Los filtros buscan palabras exactas. \"Es lo mismo\" tienta, pero el sistema puede no relacionarlas." },
    { q: "Si te postulaste y el aviso muestra quién lo publicó, ¿qué podés hacer?", opciones: ["Mandarle 5 mensajes","Mandarle un mensaje corto con tu experiencia principal","Pedirle que te contrate ya","Nada nunca"], correcta: 1, explicacion: "Un mensaje corto te distingue. Varios mensajes tientan para insistir, pero molestan." },
    { q: "Un aviso te pide pagar \"el kit para empezar\". ¿Qué es?", opciones: ["Una inversión normal","Un requisito común","Una señal de estafa: un trabajo de verdad no te cobra por trabajar","Una oportunidad única"], correcta: 2, explicacion: "Pedir plata es la señal más clara. \"Inversión\" tienta como explicación, pero es el engaño más común." },
    { q: "Un \"reclutador\" te pide foto del DNI de frente y dorso para reservar la entrevista. ¿Qué hacés?", opciones: ["No la mandás: pueden usarla para sacar créditos a tu nombre","La mandás, es un trámite","Mandás solo el frente","La mandás si el perfil tiene foto"], correcta: 0, explicacion: "Los datos sensibles no se mandan tan pronto. \"Es un trámite\" tienta, pero así roban identidades." },
    { q: "Te ofrecen \"$ 3.000.000 por mes, 2 horas por día, desde tu casa\". ¿Qué pensás?", opciones: ["Que es una gran oportunidad","Que hay que aceptar rápido","Que es normal en LinkedIn","Que es demasiado bueno para ser verdad: probable estafa"], correcta: 3, explicacion: "Sueldos irreales son señal de alerta. \"Gran oportunidad\" tienta, pero así enganchan." },
    { q: "Encontraste un aviso falso. ¿Qué hacés?", opciones: ["Lo ignorás nada más","No pagás ni mandás datos, y lo denunciás con la opción de LinkedIn","Le escribís para discutir","Lo compartís para que otros se postulen"], correcta: 1, explicacion: "Denunciar protege a otros. Discutir tienta por la bronca, pero les das tu atención y tus datos." },
  ],
},
{
  id: "actividad",
  icono: "📣",
  titulo: "Publicar, comentar y cuidar tu imagen",
  nivel: "Intermedio",
  objetivos: [
    "Comentar y publicar contenido útil de tu rubro",
    "Decidir qué publicar y qué no en una red de trabajo",
    "Configurar la privacidad y la visibilidad de tu actividad",
  ],
  lecciones: [
    { titulo: "Empezar comentando", html: `
      <p class="idea">No hace falta publicar todos los días para que LinkedIn te sirva. Comentar bien publicaciones de tu rubro ya te hace visible ante otras personas del mismo ámbito.</p>
      <table>
        <tr><th>Comentario que no suma</th><th>Comentario que suma</th></tr>
        <tr><td>"¡Excelente!"</td><td>"Muy útil. En la ferretería donde trabajé aplicamos algo parecido con los turnos y bajó la espera."</td></tr>
        <tr><td>"Totalmente de acuerdo"</td><td>"Coincido, y agregaría que conviene avisar el horario de entrega en el mensaje de bienvenida."</td></tr>
        <tr><td>"Interesado, mándame info"</td><td>Una pregunta concreta sobre el tema</td></tr>
      </table>
      <p><strong>Un buen comentario</strong> agrega una experiencia tuya, un dato o una pregunta. Así, quien lo lee ve que sabés del tema.</p>
      <p><strong>Una rutina posible:</strong> 10 minutos, 3 veces por semana: leer lo que publican tus contactos y dejar 2 o 3 comentarios útiles.</p>
      <p>Por ejemplo, un comentario con tu experiencia en la publicación de una empresa del rubro puede hacer que alguien de esa empresa entre a ver tu perfil.</p>` },
    { titulo: "Qué publicar", html: `
      <p class="idea">Cuando quieras publicar, contá algo de tu trabajo o tu aprendizaje que le sirva a otro. No hace falta ser experto: hace falta ser concreto.</p>
      <table>
        <tr><th>Ideas para publicar</th><th>Ejemplo</th></tr>
        <tr><td>Algo que aprendiste</td><td>"Terminé el curso de Excel. Lo más útil: las tablas dinámicas para ordenar ventas."</td></tr>
        <tr><td>Un logro</td><td>"Este mes organicé el archivo de proveedores de la oficina. Así quedó el sistema:"</td></tr>
        <tr><td>Un consejo de tu oficio</td><td>"3 cosas que reviso siempre antes de cerrar la caja"</td></tr>
        <tr><td>Que buscás trabajo</td><td>"Busco empleo en recepción o administración en La Plata. Tengo 4 años de experiencia en…"</td></tr>
      </table>
      <p><strong>Lo que no va en LinkedIn:</strong> peleas, política partidaria, quejas de tu trabajo o tu jefe, datos de clientes o de la empresa, fotos personales que no tienen que ver con el trabajo.</p>
      <p><strong>Regla simple:</strong> publicá solo lo que te gustaría que vea quien te va a entrevistar.</p>
      <p><strong>Formato:</strong> una primera línea que enganche, párrafos cortos y una foto real si suma. El curso "Escribir claro" de este sitio te ayuda con los textos.</p>
      <p>Por ejemplo, una publicación contando que buscás trabajo, con qué sabés hacer y dónde, la ven tus contactos y los contactos de quienes reaccionan: puede llegar mucho más lejos que tu red.</p>` },
    { titulo: "Privacidad y visibilidad", html: `
      <p class="idea">En la configuración de LinkedIn podés decidir qué se ve de tu perfil y de tu actividad. Revisala una vez y ajustala a lo que querés mostrar.</p>
      <table>
        <tr><th>Ajuste</th><th>Qué controla</th></tr>
        <tr><td>Visibilidad del perfil</td><td>Qué ve alguien que no es tu contacto o te encuentra desde un buscador</td></tr>
        <tr><td>Modo de navegación (público, semiprivado o privado)</td><td>Si los demás ven que visitaste su perfil</td></tr>
        <tr><td>Avisar a tu red de cambios en el perfil</td><td>Si tus contactos reciben un aviso cuando actualizás algo</td></tr>
        <tr><td>Datos de contacto</td><td>Quién ve tu mail y tu teléfono</td></tr>
      </table>
      <p><strong>Cuando estás buscando trabajo sin que tu empleador sepa:</strong> desactivá el aviso a tu red de cambios en el perfil antes de actualizarlo, y usá la opción de "busco empleo" solo para reclutadores.</p>
      <p><strong>Cuidado con lo que ya publicaste:</strong> revisá tu actividad de los últimos meses. Si hay algo que no te representa, podés borrarlo.</p>
      <p><strong>Tu perfil en buscadores:</strong> buscá tu nombre en Google y fijate qué aparece. Muchas veces sale tu LinkedIn primero.</p>
      <p>Por ejemplo, si actualizás todo tu perfil un lunes con el aviso a tu red activado, tu jefe puede recibir una notificación de que "actualizaste tu experiencia".</p>` },
  ],
  practica: [
    "Durante una semana, dejá 5 comentarios útiles (con experiencia, dato o pregunta) en publicaciones de tu rubro. Anotá cuántas visitas a tu perfil tuviste esa semana.",
    "Escribí una publicación sobre algo que aprendiste o un logro, con una primera línea que enganche. Anotá cuántas reacciones y comentarios tuvo en 3 días.",
    "Revisá la configuración de privacidad: visibilidad, modo de navegación y aviso a tu red. Anotá qué cambiaste y buscá tu nombre en Google para ver qué aparece.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: lo que pueden ver en tu perfil", url: "https://www.linkedin.com/help/linkedin/answer/a541646?lang=es" },
    { t: "Ayuda de LinkedIn: ver perfiles en modo privado", url: "https://www.linkedin.com/help/linkedin/answer/a567226?lang=es" },
    { t: "Ayuda de LinkedIn: relevancia y tu experiencia como miembro", url: "https://www.linkedin.com/help/linkedin/answer/a1339724?lang=es" },
  ],
  quiz: [
    { q: "Si no te animás a publicar, ¿cómo podés empezar a hacerte visible?", opciones: ["Mandando invitaciones a 500 desconocidos","Comprando seguidores","Comentando bien publicaciones de tu rubro","No hace falta hacerse visible"], correcta: 2, explicacion: "Comentar bien ya te muestra. Invitar a desconocidos tienta para crecer rápido, pero no te da visibilidad útil." },
    { q: "Si comentaste \"¡Excelente!\" en una publicación, ¿cómo lo mejorás?", opciones: ["Agregando una experiencia tuya, un dato o una pregunta","Con más signos de exclamación","Con un emoji","Copiando el texto de la publicación"], correcta: 0, explicacion: "Un comentario con contenido muestra que sabés. Los emojis tientan por rápidos, pero no aportan." },
    { q: "Querés usar LinkedIn sin que te lleve mucho tiempo. ¿Qué rutina conviene?", opciones: ["3 horas por día","Una vez por año","Publicar 10 veces por día","10 minutos, 3 veces por semana, comentando 2 o 3 publicaciones"], correcta: 3, explicacion: "Poco y constante funciona. 3 horas tienta para avanzar rápido, pero no se sostiene." },
    { q: "¿Hace falta ser experto para publicar?", opciones: ["Sí, solo publican expertos","No: hace falta ser concreto y contar algo útil","Sí, con título universitario","No, cualquier cosa sirve"], correcta: 1, explicacion: "Lo concreto sirve aunque no seas experto. \"Cualquier cosa\" tienta, pero no todo suma en una red de trabajo." },
    { q: "Si terminaste un curso de Excel, ¿qué publicás?", opciones: ["Solo la foto del certificado sin texto","Una queja del curso","Que lo terminaste y qué fue lo más útil que aprendiste","Nada"], correcta: 2, explicacion: "Contar lo aprendido muestra interés y conocimiento. La foto sola tienta, pero no dice qué sabés hacer." },
    { q: "Estás enojado con tu jefe actual. ¿Lo publicás en LinkedIn?", opciones: ["No: las quejas del trabajo no van ahí","Sí, para que se sepa","Sí, sin nombrarlo","Sí, si tenés razón"], correcta: 0, explicacion: "Lo ve quien te va a entrevistar. Sin nombrarlo tienta, pero igual muestra que te quejás en público." },
    { q: "¿Cuál es la regla simple para decidir qué publicar?", opciones: ["Publicar todo lo que pensás","Publicar solo memes","No publicar nunca","Publicar solo lo que te gustaría que vea quien te va a entrevistar"], correcta: 3, explicacion: "Esa regla filtra casi todo. \"Todo lo que pensás\" tienta por auténtico, pero LinkedIn es una vidriera de trabajo." },
    { q: "Querés contar que buscás trabajo. ¿Qué incluís en la publicación?", opciones: ["Solo \"Busco trabajo\"","Qué buscás, qué sabés hacer y dónde","Tu situación económica en detalle","Tu DNI para que te contacten"], correcta: 1, explicacion: "Lo concreto ayuda a que te recomienden. \"Busco trabajo\" solo tienta por corto, pero nadie sabe en qué ayudarte." },
    { q: "¿Qué controla el modo de navegación privado?", opciones: ["Que nadie vea tu perfil","Que no te lleguen mensajes","Que los demás no vean que visitaste su perfil","Que no aparezcas en búsquedas"], correcta: 2, explicacion: "Controla qué ven de tus visitas. Que nadie te vea tienta por el nombre, pero tu perfil sigue visible." },
    { q: "Vas a actualizar todo tu perfil y no querés que tu jefe se entere. ¿Qué hacés antes?", opciones: ["Desactivás el aviso a tu red de cambios en el perfil","Nada, no se entera","Bloqueás a tu jefe","Borrás tu cuenta"], correcta: 0, explicacion: "Ese aviso notifica a tus contactos. \"No se entera\" tienta, pero puede recibir una notificación." },
    { q: "Hace un año compartiste una publicación ofensiva. ¿Qué hacés?", opciones: ["La dejás, ya pasó","La volvés a compartir","Cerrás la cuenta","Revisás tu actividad y la borrás"], correcta: 3, explicacion: "Tu actividad vieja se sigue viendo. \"Ya pasó\" tienta, pero quien te busca puede encontrarla." },
    { q: "Buscás tu nombre en Google. ¿Qué suele aparecer primero?", opciones: ["Nada","Muchas veces, tu perfil de LinkedIn","Tus mensajes privados","Tu sueldo"], correcta: 1, explicacion: "LinkedIn suele aparecer arriba. \"Nada\" tienta, pero por eso conviene que tu perfil esté bien." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu perfil completo y un plan de 4 semanas",
  nivel: "Avanzado",
  objetivos: [
    "Completar tu perfil con todo lo del curso",
    "Evaluarlo con una rúbrica y pedir una devolución",
    "Seguir un plan de 4 semanas y medir resultados",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>perfil completo</strong>, pensado para el tipo de trabajo que buscás, y un plan de 4 semanas para usarlo.</p>
      <table>
        <tr><th>Parte del perfil</th><th>Módulo</th></tr>
        <tr><td>Cuenta segura, sin datos personales a la vista</td><td>Empezar</td></tr>
        <tr><td>Foto, portada, titular con palabras de avisos, ubicación, enlace y "busco empleo"</td><td>Lo que se ve primero</td></tr>
        <tr><td>"Acerca de" en 3 párrafos</td><td>Acerca de, experiencia y aptitudes</td></tr>
        <tr><td>Experiencias con logros y 10 aptitudes</td><td>Acerca de, experiencia y aptitudes</td></tr>
        <tr><td>Al menos 1 recomendación</td><td>Tu red de contactos</td></tr>
        <tr><td>Alerta de empleo y planilla de postulaciones</td><td>Buscar empleos</td></tr>
        <tr><td>Privacidad revisada</td><td>Publicar y cuidar tu imagen</td></tr>
      </table>
      <p><strong>Elegí un objetivo:</strong> un tipo de puesto y una zona (por ejemplo, "administrativo en Mar del Plata"). Todo el perfil se arma pensando en ese objetivo.</p>
      <p>Por ejemplo, si buscás trabajo de cocina en Córdoba, tu titular, tus aptitudes y tu alerta tienen que hablar de cocina y de Córdoba.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Evaluá tu perfil y pedile a alguien que lo mire con esta misma lista.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Foto y titular</td><td>Foto clara; titular con puesto, 2 habilidades y qué buscás</td><td>Uno de los dos flojo</td><td>Sin foto o titular vacío</td></tr>
        <tr><td>Acerca de</td><td>3 párrafos con un logro concreto</td><td>Solo adjetivos</td><td>Vacío</td></tr>
        <tr><td>Experiencia</td><td>Logros con verbo y número, igual que el CV</td><td>Tareas sin logros</td><td>Vacía o distinta del CV</td></tr>
        <tr><td>Aptitudes</td><td>10 relacionadas con avisos reales</td><td>Pocas o al azar</td><td>Ninguna</td></tr>
        <tr><td>Red y recomendación</td><td>Contactos del rubro y al menos 1 recomendación</td><td>Contactos sin recomendación</td><td>Casi sin contactos</td></tr>
        <tr><td>Seguridad y privacidad</td><td>Verificación en dos pasos, sin datos sensibles a la vista</td><td>Una de las dos</td><td>Dirección o DNI visibles</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios</code></pre>
      <p>Por ejemplo, si tu "Acerca de" saca 1 por tener solo adjetivos, agregale el logro que más te enorgullece, con un número.</p>` },
    { titulo: "El plan de 4 semanas", html: `
      <p class="idea">Un perfil completo es el punto de partida. Lo que trae resultados es usarlo un poco cada semana, y medir qué funciona.</p>
      <table>
        <tr><th>Semana</th><th>Qué hacer</th></tr>
        <tr><td>1</td><td>Terminar el perfil, conectar con 20 personas conocidas, crear 2 alertas</td></tr>
        <tr><td>2</td><td>Postularte a 5 avisos adaptados, comentar 5 publicaciones, pedir una recomendación</td></tr>
        <tr><td>3</td><td>Escribirle a 3 personas de empresas que te interesan, publicar algo que aprendiste</td></tr>
        <tr><td>4</td><td>Postularte a 5 avisos más, hacer seguimiento de las postulaciones, revisar números</td></tr>
      </table>
      <pre><code>Números para anotar cada semana:
Visitas al perfil · apariciones en búsquedas · contactos nuevos
postulaciones · respuestas · entrevistas</code></pre>
      <p>LinkedIn muestra en tu perfil cuántas personas lo visitaron y en cuántas búsquedas apareciste. Si las apariciones en búsquedas son pocas, revisá titular y aptitudes; si hay postulaciones, pero no respuestas, revisá cómo adaptás el CV.</p>
      <p>Por ejemplo, pasar de 3 a 25 apariciones en búsquedas por semana después de cambiar el titular muestra que las palabras elegidas funcionan.</p>` },
  ],
  practica: [
    "Elegí tu objetivo (puesto y zona) y completá el perfil con las partes de la tabla del encargo. Anotá qué partes te faltaban al empezar.",
    "Evaluá tu perfil con la rúbrica y pedile a otra persona que también lo evalúe. Anotá los dos puntajes sobre 12.",
    "Seguí el plan de 4 semanas y anotá cada semana visitas al perfil, apariciones en búsquedas, postulaciones, respuestas y entrevistas.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: crear un buen perfil", url: "https://www.linkedin.com/help/linkedin/answer/a554351?lang=es" },
    { t: "Ayuda de LinkedIn: filtrar la búsqueda de empleo", url: "https://www.linkedin.com/help/linkedin/answer/a511258?lang=es" },
    { t: "Ayuda de LinkedIn: lo que pueden ver en tu perfil", url: "https://www.linkedin.com/help/linkedin/answer/a541646?lang=es" },
  ],
  quiz: [
    { q: "Antes de completar el perfil, ¿qué elegís?", opciones: ["El color de la portada","Cuántos contactos querés","Un objetivo: tipo de puesto y zona","Si pagar Premium"], correcta: 2, explicacion: "Todo el perfil se arma para ese objetivo. El color tienta porque es lo visible, pero no orienta nada." },
    { q: "Buscás trabajo de cocina en Córdoba. ¿Qué tiene que reflejar tu perfil?", opciones: ["Cocina y Córdoba en titular, aptitudes y alertas","Todos los trabajos posibles","Solo tus estudios","Nada en especial"], correcta: 0, explicacion: "El objetivo guía las palabras. Todos los trabajos tientan para no cerrarte, pero no aparecés en ninguna búsqueda concreta." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una recomendación","Un tipo de publicación","Una alerta","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica evalúa. La recomendación tienta porque también opina sobre vos, pero es otra cosa." },
    { q: "Tu perfil no tiene foto. ¿Cuánto saca \"Foto y titular\"?", opciones: ["2","0","1","No se evalúa"], correcta: 1, explicacion: "Sin foto es 0. 1 tienta si el titular está bien, pero el criterio pide los dos." },
    { q: "Tu experiencia lista tareas pero ningún logro. ¿Cuánto saca?", opciones: ["2","0","1: tareas sin logros","No se evalúa"], correcta: 2, explicacion: "Tiene contenido, pero sin logros. 0 tienta, pero hay experiencia cargada." },
    { q: "Tu perfil muestra tu dirección. ¿Cuánto saca \"Seguridad y privacidad\"?", opciones: ["0","2","1","No se evalúa"], correcta: 0, explicacion: "Datos sensibles a la vista es 0. 1 tienta si tenés la verificación en dos pasos, pero la dirección visible es un riesgo serio." },
    { q: "Sacaste 9 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Borrás todo y empezás de cero","Pagás Premium","Mejorás lo que sacó 0 o 1"], correcta: 3, explicacion: "Entre 7 y 10 se mejora lo que falló. Pagar tienta como atajo, pero no arregla un perfil incompleto." },
    { q: "¿Qué trae resultados después de completar el perfil?", opciones: ["Esperar a que te escriban","Usarlo un poco cada semana y medir","Cambiar la foto cada día","Nada más"], correcta: 1, explicacion: "El uso constante suma. Esperar tienta porque el perfil ya está, pero sin actividad casi no te ven." },
    { q: "En la semana 1 del plan, ¿qué hacés?", opciones: ["Te postulás a 50 avisos","Publicás todos los días","Terminás el perfil, conectás con 20 conocidos y creás 2 alertas","Pedís 10 recomendaciones"], correcta: 2, explicacion: "Primero la base. Postularte a 50 tienta para avanzar rápido, pero sin perfil listo no destacás." },
    { q: "Tenés pocas apariciones en búsquedas. ¿Qué revisás?", opciones: ["Titular y aptitudes","La portada","Tus publicaciones viejas","La contraseña"], correcta: 0, explicacion: "Las búsquedas usan esas palabras. La portada tienta porque es grande, pero no influye en las búsquedas." },
    { q: "Te postulaste a 10 avisos y no tuviste respuestas. ¿Qué revisás?", opciones: ["Tu foto de portada","Nada, es mala suerte","Cambiar de red social","Cómo adaptás el CV y el perfil a cada aviso"], correcta: 3, explicacion: "Sin respuestas, algo de la postulación no encaja. Mala suerte tienta, pero vale revisar la adaptación." },
    { q: "Después de cambiar el titular, pasaste de 3 a 25 apariciones en búsquedas por semana. ¿Qué concluís?", opciones: ["Que fue casualidad","Que las palabras elegidas funcionan","Que hay que volver al titular anterior","Nada"], correcta: 1, explicacion: "Medir antes y después muestra qué funciona. Casualidad tienta, pero un cambio tan grande suele tener causa." },
  ],
},
];
