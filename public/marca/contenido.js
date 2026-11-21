// Temario del curso "Tu marca: nombre, logo y estilo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js marca y node tools/metodologia.js marca
window.TEMARIO = [
{
  id: "que-es",
  icono: "💡",
  titulo: "Qué es una marca",
  nivel: "Básico",
  objetivos: [
    "Explicar la diferencia entre marca, logo e identidad visual",
    "Definir para quién es tu emprendimiento y qué lo hace distinto",
    "Escribir en una oración qué querés que la gente piense de tu marca",
  ],
  lecciones: [
    { titulo: "Marca no es solo un logo", video: {"id":"tquJKXFPY3M","t":"Qué es la identidad de marca y cuáles son sus componentes · LearnFree en Español (6:33)"}, html: `
      <p class="idea">Una <strong>marca</strong> es lo que la gente reconoce y piensa de tu emprendimiento. El logo es solo una parte: también cuentan el nombre, los colores, cómo hablás y cómo tratás a los clientes.</p>
      <p>En todo el curso acompañamos a <strong>Joaquín</strong>, de Corrientes, que pinta mates a mano y los vende por Instagram con el nombre "Mates Joaco". Quiere que su marca se vea profesional, que la gente la reconozca y no tener problemas con el nombre.</p>
      <table>
        <tr><th>Parte</th><th>Qué es</th><th>Ejemplo de Joaquín</th></tr>
        <tr><td>Nombre</td><td>Cómo te llaman</td><td>Mates Joaco</td></tr>
        <tr><td>Logo</td><td>El símbolo o la forma escrita del nombre</td><td>Un mate con una flor de lapacho</td></tr>
        <tr><td>Colores y tipografías</td><td>La paleta y las letras que usás siempre</td><td>Verde, rosa lapacho y crema</td></tr>
        <tr><td>Tono de voz</td><td>Cómo escribís y hablás</td><td>Cercano, con humor correntino</td></tr>
        <tr><td>Experiencia</td><td>Cómo se siente comprarte</td><td>Respuesta rápida, mate envuelto con cuidado</td></tr>
      </table>
      <p>La <strong>identidad visual</strong> es la parte que se ve: logo, colores, tipografías y el estilo de las fotos. Este curso se enfoca en eso, más el nombre y el tono.</p>
      <p><strong>La marca se construye con el tiempo:</strong> un logo lindo no sirve si el producto llega roto o no contestás los mensajes. Lo que hacés también es marca.</p>
      <p><strong>Coherencia</strong> es usar siempre lo mismo (nombre, colores, tono) en todos lados. Es lo que hace que te reconozcan.</p>
      <p>Por ejemplo, Joaquín usaba un color distinto en cada publicación y el logo cambiaba según el día. Sus clientes le decían "el chico de los mates", pero no recordaban el nombre. Con una identidad fija, empezaron a etiquetarlo.</p>` },
    { titulo: "Para quién es y qué te hace distinto", html: `
      <p class="idea">Antes de elegir colores o un logo, respondé dos preguntas: <strong>¿para quién es lo que hacés?</strong> y <strong>¿por qué te elegirían a vos y no a otro?</strong> Todo lo demás sale de ahí.</p>
      <table>
        <tr><th>Pregunta</th><th>Respuesta de Joaquín</th></tr>
        <tr><td>¿Qué vendés?</td><td>Mates de calabaza pintados a mano</td></tr>
        <tr><td>¿Para quién?</td><td>Personas de 20 a 40 años que quieren un mate único, para ellas o para regalar</td></tr>
        <tr><td>¿Qué problema o deseo resuelve?</td><td>Regalar algo personal y hecho a mano</td></tr>
        <tr><td>¿Qué te hace distinto?</td><td>Diseños de flora del Litoral, cada mate es único y se puede pedir personalizado</td></tr>
      </table>
      <p>El <strong>público</strong> son las personas a las que les vendés. La <strong>propuesta de valor</strong> es lo que les ofrecés que otros no: lo que te hace distinto y por qué les sirve.</p>
      <p><strong>"Para todos" no es un público:</strong> si querés gustarle a todo el mundo, tu marca termina sin personalidad. Elegir un público no impide que otros te compren.</p>
      <p><strong>Mirá la competencia</strong> (otros que venden algo parecido): qué colores usan, cómo hablan. No para copiarlos, sino para diferenciarte.</p>
      <p>Para trabajar más el modelo de tu emprendimiento, está el curso <strong>Emprender desde cero</strong> de este sitio.</p>
      <p>Por ejemplo, Joaquín vio que casi todos los que vendían mates usaban negro y dorado. Decidió diferenciarse con los colores del Litoral: el verde del monte y el rosa del lapacho.</p>` },
    { titulo: "Tu marca en una oración", html: `
      <p class="idea">Escribí <strong>una oración</strong> que diga qué querés que la gente piense y sienta de tu marca. Esa oración te va a servir para decidir el nombre, los colores, el logo y cómo hablar.</p>
      <pre><code>Fórmula:
[Marca] es [qué es] para [quién]
que [qué la hace distinta], y se siente [3 palabras].

Joaquín:
"Mates Joaco son mates pintados a mano para quienes quieren
un regalo único, con la flora del Litoral; se sienten
cálidos, artesanales y alegres."</code></pre>
      <table>
        <tr><th>Las 3 palabras te guían</th><th>Si tus palabras son...</th><th>Probablemente...</th></tr>
        <tr><td>Colores</td><td>Cálida, alegre</td><td>Colores vivos y cálidos</td></tr>
        <tr><td>Tipografía</td><td>Artesanal</td><td>Letra con algo de trazo a mano</td></tr>
        <tr><td>Tono</td><td>Cercana</td><td>Tutear, frases cortas, algún emoji</td></tr>
        <tr><td>Fotos</td><td>Natural</td><td>Luz de día, fondos de madera o plantas</td></tr>
      </table>
      <p><strong>Las 3 palabras se llaman atributos de marca:</strong> son las cualidades que querés transmitir. Elegí palabras concretas: "lindo" no orienta; "artesanal" sí.</p>
      <p><strong>Volvé a esta oración</strong> cada vez que tengas que decidir algo de la marca: ¿este color, esta foto, esta frase, transmiten esas 3 palabras?</p>
      <p>Por ejemplo, Joaquín dudaba entre un logo negro y elegante y uno de colores. Releyó su oración ("cálidos, artesanales y alegres") y eligió el de colores sin dudar.</p>` },
  ],
  practica: [
    "Completá la tabla de las 5 partes de la marca para tu emprendimiento (o uno inventado) y anotá cuál todavía no tenés definida.",
    "Respondé las 4 preguntas de público y propuesta de valor, y anotá 3 competidores y qué colores usa cada uno.",
    "Escribí tu oración de marca con la fórmula y anotá tus 3 atributos.",
  ],
  recursos: [
    { t: "Curso de este sitio: Emprender desde cero", url: "https://pkeios.github.io/EiaLearning/emprender/" },
    { t: "OMPI: marcas (Organización Mundial de la Propiedad Intelectual)", url: "https://www.wipo.int/es/web/trademarks" },
    { t: "Coolors: armar paletas de colores", url: "https://coolors.co/" },
  ],
  quiz: [
    { q: "Tenés un logo muy lindo pero los pedidos llegan tarde. ¿Cómo está tu marca?", opciones: ["Fuerte, porque el logo es lindo","Igual, el logo es lo que importa","Débil: la experiencia también es marca","Mejor que antes"], correcta: 2, explicacion: "Lo que hacés también construye la marca. \"El logo es lo que importa\" tienta, pero la gente recuerda la experiencia." },
    { q: "Usás un color distinto en cada publicación. ¿Qué te falta?", opciones: ["Coherencia: usar siempre lo mismo","Más colores","Un logo más grande","Más publicaciones"], correcta: 0, explicacion: "Lo repetido se reconoce. Más colores tienta por variedad, pero confunde." },
    { q: "¿Qué es la identidad visual?", opciones: ["Solo el nombre","El precio","La cuenta bancaria","La parte que se ve: logo, colores, tipografías y estilo de fotos"], correcta: 3, explicacion: "Es lo visual de la marca. El nombre tienta, pero no se \"ve\" igual." },
    { q: "Te preguntan para quién es tu producto y respondés \"para todos\". ¿Qué problema hay?", opciones: ["Ninguno, vendés más","Tu marca termina sin personalidad","Que es caro","Que es ilegal"], correcta: 1, explicacion: "Elegir un público da dirección. \"Vendés más\" tienta, pero en general no pasa." },
    { q: "¿Qué es la propuesta de valor?", opciones: ["El precio más bajo","El nombre de la marca","Lo que ofrecés que otros no y por qué le sirve a tu público","El logo"], correcta: 2, explicacion: "Es tu diferencia. El precio tienta, pero no siempre es lo que te distingue." },
    { q: "Todos los que venden lo mismo que vos usan negro y dorado. ¿Qué hacés?", opciones: ["Buscás colores que te diferencien y encajen con tu marca","Usás negro y dorado también","Copiás el logo del más vendedor","No usás colores"], correcta: 0, explicacion: "Mirar la competencia sirve para diferenciarte. Imitar tienta porque \"les funciona\", pero te confunde con ellos." },
    { q: "¿Para qué sirve la oración de marca?", opciones: ["Para ponerla en el logo","Para el registro del INPI","Para nada","Para decidir nombre, colores, logo y tono con un mismo criterio"], correcta: 3, explicacion: "Es tu guía interna. Ponerla en el logo tienta, pero es para vos." },
    { q: "Tus atributos son \"cálida, artesanal y alegre\". ¿Qué colores encajan mejor?", opciones: ["Gris y negro","Colores vivos y cálidos","Solo blanco","Colores fríos y metálicos"], correcta: 1, explicacion: "Los colores transmiten los atributos. Gris y negro tientan por elegantes, pero no son cálidos." },
    { q: "Si elegiste como atributo \"lindo\", ¿qué problema tiene?", opciones: ["Ninguno","Que es feo","Es muy general y no orienta decisiones","Que no se puede registrar"], correcta: 2, explicacion: "Las palabras concretas guían. \"Ninguno\" tienta porque todos queremos algo lindo." },
    { q: "Dudás entre dos logos. ¿Qué hacés?", opciones: ["Releés tu oración y elegís el que transmite tus 3 atributos","Elegís el que te guste más ese día","Hacés una votación entre amigos sin criterio","Usás los dos"], correcta: 0, explicacion: "La oración da un criterio. Usar los dos tienta, pero rompe la coherencia." },
    { q: "¿Qué son los atributos de marca?", opciones: ["Los productos que vendés","Los precios","Las redes sociales","Las cualidades que querés transmitir, como \"artesanal\""], correcta: 3, explicacion: "Son cómo querés que se sienta. Los productos tientan, pero eso es qué vendés." },
    { q: "Querés mirar a la competencia. ¿Para qué?", opciones: ["Para copiar lo que hacen","Para diferenciarte, no para copiar","Para criticarlos en redes","No sirve"], correcta: 1, explicacion: "Ver qué hacen te muestra qué hacer distinto. Copiar tienta, pero perdés identidad." },
  ],
},
{
  id: "nombre",
  icono: "🏷️",
  titulo: "El nombre",
  nivel: "Básico",
  objetivos: [
    "Generar opciones de nombre con distintas estrategias",
    "Elegir un nombre con criterios claros: corto, fácil, sin límites y propio",
    "Comprobar si el nombre está libre en el INPI, en dominios y en redes",
  ],
  lecciones: [
    { titulo: "Tipos de nombres", video: {"id":"PWM_ENngO9A","t":"Crear un buen nombre de marca · Coderhouse (4:32)"}, html: `
      <p class="idea">Hay varias formas de crear un nombre. Probá con todas y armá una lista larga antes de elegir: <strong>las primeras ideas rara vez son las mejores</strong>.</p>
      <table>
        <tr><th>Tipo</th><th>Qué es</th><th>Ejemplo inventado</th><th>Ojo</th></tr>
        <tr><td>Descriptivo</td><td>Dice lo que hacés</td><td>Mates Pintados Corrientes</td><td>Fácil de entender, difícil de registrar y de diferenciar</td></tr>
        <tr><td>Evocativo</td><td>Sugiere una sensación o una imagen</td><td>Lapacho</td><td>Más memorable; hay que explicarlo un poco al principio</td></tr>
        <tr><td>Inventado</td><td>Una palabra nueva</td><td>Matiú</td><td>Muy registrable; hay que darle significado con el tiempo</td></tr>
        <tr><td>De persona</td><td>Tu nombre o apodo</td><td>Mates Joaco</td><td>Cercano; queda atado a vos si algún día lo vendés</td></tr>
        <tr><td>Combinado</td><td>Mezcla de dos palabras</td><td>Yerbaflor</td><td>Original si suena bien</td></tr>
      </table>
      <pre><code>Lluvia de nombres (20 minutos):
1. Escribí 10 palabras de tu oración de marca y de tu producto.
2. Buscá sinónimos, palabras en guaraní, nombres de plantas, lugares.
3. Combiná, cortá y mezclá: armá 30 opciones sin juzgar.
4. Tachá las que no cumplen los criterios de la próxima lección.
5. Quedate con 5 para comprobar.</code></pre>
      <p><strong>Usar palabras de una lengua indígena</strong> puede ser muy lindo, pero hacelo con respeto: averiguá bien el significado y no uses palabras sagradas o de uso comunitario como si fueran tuyas.</p>
      <p><strong>La IA puede ayudarte a generar opciones,</strong> pero revisá que no te proponga nombres que ya existen.</p>
      <p>Por ejemplo, Joaquín hizo una lista de 32 nombres combinando plantas del Litoral, palabras del mate y su apodo. "Lapacho Mates" fue el que más le gustó a él y a 8 clientes a los que les preguntó.</p>` },
    { titulo: "Criterios para elegir", html: `
      <p class="idea">Un buen nombre se <strong>dice fácil, se escribe sin dudar, se recuerda</strong>, no te limita y, sobre todo, <strong>nadie más lo tiene</strong> en tu rubro.</p>
      <table>
        <tr><th>Criterio</th><th>Prueba</th></tr>
        <tr><td>Corto</td><td>De 1 a 3 palabras; mejor si entra en un @ sin cortar</td></tr>
        <tr><td>Fácil de decir</td><td>Decíselo a alguien por teléfono: ¿lo repite bien?</td></tr>
        <tr><td>Fácil de escribir</td><td>Que alguien lo escuche y lo escriba: ¿lo escribe igual?</td></tr>
        <tr><td>No te limita</td><td>Si mañana vendés bombillas o termos, ¿sigue sirviendo?</td></tr>
        <tr><td>Sin dobles sentidos</td><td>Preguntá a varias personas qué les hace pensar</td></tr>
        <tr><td>Propio</td><td>No lo usa otro emprendimiento de tu rubro (próxima lección)</td></tr>
      </table>
      <p><strong>La prueba del teléfono</strong> descarta muchos nombres: si tenés que deletrearlo cada vez ("con y griega y dos ese"), tus clientes no te van a encontrar.</p>
      <p><strong>Evitá nombres muy parecidos a marcas conocidas,</strong> aunque cambies una letra: confunde a la gente y te puede traer problemas legales.</p>
      <p><strong>Pedí opiniones, pero decidí vos:</strong> preguntá a personas de tu público (no solo a tu familia) qué les transmite cada nombre.</p>
      <p>Por ejemplo, Joaquín descartó "Mates Joaco" porque lo limitaba a mates y a su persona, y "Ka'a Porã" (yerba linda, en guaraní) porque en la prueba del teléfono nadie lo escribió igual. Quedó "Lapacho Mates".</p>` },
    { titulo: "¿Está libre?", html: `
      <p class="idea">Antes de enamorarte de un nombre, comprobá que <strong>no lo tenga otro</strong>: en las marcas registradas, en los dominios de internet y en las redes sociales.</p>
      <pre><code>Comprobación en 4 lugares:
1. INPI (marcas en Argentina): buscá el nombre y nombres parecidos
   en la base de marcas del portal de trámites.
2. Google: "nombre" + tu rubro, y "nombre" + Argentina.
3. Dominios: en NIC Argentina fijate si nombre.com.ar está libre.
4. Redes: buscá @nombre en Instagram, TikTok y Facebook.</code></pre>
      <table>
        <tr><th>Si encontrás...</th><th>Qué hacés</th></tr>
        <tr><td>Una marca registrada igual o parecida en tu rubro</td><td>Descartá el nombre</td></tr>
        <tr><td>Un emprendimiento sin registrar con el mismo nombre en tu rubro</td><td>Mejor descartarlo: confunde y puede registrarlo antes</td></tr>
        <tr><td>El mismo nombre en un rubro muy distinto</td><td>Puede convivir, pero consultá antes de registrar</td></tr>
        <tr><td>El @ ocupado</td><td>Una variante clara (lapacho.mates, lapachomates.ar)</td></tr>
      </table>
      <p>Un <strong>dominio</strong> es la dirección de una página web, como lapachomates.com.ar. En Argentina los .ar se registran en NIC Argentina.</p>
      <p><strong>Tener el @ o el dominio no te da la marca,</strong> y tener la marca no te da el @. Son cosas separadas: conviene asegurar las tres.</p>
      <p>Por ejemplo, Joaquín buscó "Lapacho Mates" en el INPI y no había nada en su rubro. El dominio .com.ar estaba libre y el @ también. Los reservó el mismo día.</p>` },
  ],
  practica: [
    "Hacé una lluvia de 30 nombres en 20 minutos y anotá cuántos te quedaron después de tachar.",
    "Hacé la prueba del teléfono con tus 5 favoritos y anotá cuántos se escribieron bien.",
    "Comprobá tu nombre favorito en el INPI, Google, NIC Argentina y las redes, y anotá qué encontraste en cada lugar.",
  ],
  recursos: [
    { t: "INPI: portal de trámites (búsqueda y solicitud de marcas)", url: "https://portaltramites.inpi.gob.ar/" },
    { t: "NIC Argentina: registro de dominios .ar", url: "https://nic.ar/" },
    { t: "INPI: marcas (qué son, tipos, cuánto dura la protección)", url: "https://www.argentina.gob.ar/inpi/marcas" },
  ],
  quiz: [
    { q: "Tu nombre es \"Mates Pintados Corrientes\". ¿Qué tipo es y qué problema tiene?", opciones: ["Inventado: nadie lo entiende","Evocativo: es muy abstracto","Descriptivo: fácil de entender, pero difícil de registrar y diferenciar","De persona: queda atado a vos"], correcta: 2, explicacion: "Dice lo que hacés. Inventado tienta por raro, pero es lo contrario." },
    { q: "Querés un nombre muy fácil de registrar. ¿Qué tipo conviene?", opciones: ["Inventado","Descriptivo","Genérico","Una palabra común del rubro"], correcta: 0, explicacion: "Una palabra nueva no la tiene nadie. Descriptivo tienta por claro, pero suele no poder registrarse." },
    { q: "Usás tu apodo como marca. ¿Qué tenés que tener en cuenta?", opciones: ["Que es ilegal","Que no se puede usar en redes","Nada","Queda atado a vos si algún día querés vender el emprendimiento"], correcta: 3, explicacion: "Es cercano pero personal. \"Nada\" tienta porque es tuyo." },
    { q: "Escribiste tus primeros 3 nombres. ¿Qué conviene?", opciones: ["Elegir el primero","Seguir hasta una lista larga, de unos 30, antes de elegir","Elegir el más largo","Pedirle a la IA uno y listo"], correcta: 1, explicacion: "Las primeras ideas rara vez son las mejores. El primero tienta por rápido." },
    { q: "Querés usar una palabra en guaraní. ¿Qué hacés?", opciones: ["La usás sin saber qué significa","La inventás parecida","Averiguás bien su significado y la usás con respeto","No se puede"], correcta: 2, explicacion: "Respeto por la lengua y su comunidad. Usarla sin saber tienta por linda." },
    { q: "Decís tu nombre por teléfono y la persona lo escribe mal. ¿Qué te dice?", opciones: ["Que no es fácil de escribir: tus clientes no te van a encontrar","Que la persona escucha mal","Que está perfecto","Que hay que gritarlo"], correcta: 0, explicacion: "Es la prueba del teléfono. Culpar al que escucha tienta, pero les pasará a muchos." },
    { q: "Tu nombre es \"Mates del Joaco\". Mañana querés vender termos. ¿Qué criterio revisás?", opciones: ["Que sea corto","Que tenga doble sentido","Que sea en inglés","Que no te limite"], correcta: 3, explicacion: "Si solo dice mates, limita. Corto tienta, pero no es el problema acá." },
    { q: "Tu nombre se parece mucho a una marca conocida, con una letra cambiada. ¿Qué pasa?", opciones: ["Te ayuda a vender más","Confunde y te puede traer problemas legales","Nada, cambiaste una letra","Es un homenaje"], correcta: 1, explicacion: "El parecido es el problema. \"Cambiaste una letra\" tienta, pero sigue confundiendo." },
    { q: "Querés saber si hay una marca registrada con tu nombre en Argentina. ¿Dónde buscás?", opciones: ["Solo en Instagram","En NIC Argentina","En la base de marcas del INPI","En el registro civil"], correcta: 2, explicacion: "El INPI registra las marcas. NIC tienta, pero es para dominios." },
    { q: "Encontraste una marca registrada igual a tu nombre en tu rubro. ¿Qué hacés?", opciones: ["Descartás el nombre","Lo usás igual","Lo registrás también","Le agregás un emoji"], correcta: 0, explicacion: "No podés usar una marca de otro en tu rubro. Un emoji tienta, pero no la diferencia." },
    { q: "Tenés el @ en Instagram. ¿Ya tenés la marca?", opciones: ["Sí, es lo mismo","Sí, si tenés muchos seguidores","Sí, si lo tenés hace un año","No: el @, el dominio y la marca registrada son cosas separadas"], correcta: 3, explicacion: "El @ no da derechos de marca. \"Es lo mismo\" tienta, pero no lo es." },
    { q: "Tu @ ideal está ocupado. ¿Qué hacés?", opciones: ["Usás uno sin relación","Usás una variante clara, como lapacho.mates","Usás el ocupado con un número al azar","No abrís la cuenta"], correcta: 1, explicacion: "Una variante clara se reconoce. Un número al azar tienta, pero es difícil de recordar." },
  ],
},
{
  id: "registro",
  icono: "⚖️",
  titulo: "Registrar la marca",
  nivel: "Intermedio",
  objetivos: [
    "Explicar qué te da registrar una marca en el INPI",
    "Elegir el tipo de marca y las clases para tu solicitud",
    "Conocer los pasos del trámite y cuándo pedir ayuda profesional",
  ],
  lecciones: [
    { titulo: "Qué te da el registro", video: {"id":"lSWFZpLgPrc","t":"INPI Argentina: cómo registrar una marca · INPI Argentina (6:23)"}, html: `
      <p class="idea">Registrar tu marca en el <strong>INPI</strong> (Instituto Nacional de la Propiedad Industrial) te da el <strong>derecho exclusivo</strong> de usarla para tus productos o servicios en Argentina, y de impedir que otro use una igual o parecida en tu rubro.</p>
      <table>
        <tr><th>Con la marca registrada podés...</th><th>Sin registro...</th></tr>
        <tr><td>Impedir que otro la use en tu rubro</td><td>Otro puede registrarla antes y pedirte que dejes de usarla</td></tr>
        <tr><td>Licenciarla o venderla</td><td>Es difícil demostrar que es tuya</td></tr>
        <tr><td>Reclamar en redes y marketplaces por copias</td><td>Las plataformas suelen pedir el registro</td></tr>
      </table>
      <p><strong>Dura 10 años</strong> desde que se concede, y se puede <strong>renovar indefinidamente</strong> por períodos de 10 años más, según informa el INPI.</p>
      <p><strong>Vale en Argentina:</strong> si vendés en otros países, cada uno tiene su propio registro.</p>
      <p><strong>¿Cuándo registrar?</strong> Antes de invertir mucho en la marca (cartelería, packaging, publicidad). Si el nombre se vuelve conocido y no lo registraste, alguien más podría hacerlo.</p>
      <p><strong>Esta lección te ayuda a entender, pero no reemplaza a un profesional:</strong> los agentes de la propiedad industrial y los abogados especializados te pueden ayudar con la búsqueda y la solicitud.</p>
      <p>Por ejemplo, una amiga de Joaquín vendía alfajores con un nombre que no había registrado. Otra persona lo registró y ella tuvo que cambiar el nombre, las etiquetas y la cuenta de Instagram. Joaquín decidió registrar antes de imprimir nada.</p>` },
    { titulo: "Tipos de marca y clases", html: `
      <p class="idea">Al pedir el registro elegís <strong>qué tipo de marca</strong> es (palabras, dibujo o las dos) y <strong>en qué clases</strong>: los rubros de productos o servicios que querés proteger.</p>
      <table>
        <tr><th>Tipo (según el INPI)</th><th>Qué protege</th><th>Ejemplo</th></tr>
        <tr><td>Denominativa</td><td>Solo palabras, letras o números</td><td>El nombre "Lapacho Mates", escrito de cualquier forma</td></tr>
        <tr><td>Figurativa</td><td>Solo un dibujo o símbolo, sin letras</td><td>La flor de lapacho del logo</td></tr>
        <tr><td>Mixta</td><td>Palabras y dibujo juntos, con ese diseño</td><td>El logo completo con el nombre</td></tr>
      </table>
      <p><strong>Las clases:</strong> los productos y servicios se dividen en grupos numerados (en Argentina se usa la Clasificación Internacional de Niza). Una marca se protege en las clases que elegís. Por ejemplo, los utensilios para el hogar están en una clase y la ropa en otra.</p>
      <pre><code>Para elegir clases:
1. Anotá todo lo que vendés y lo que pensás vender pronto.
2. Buscá a qué clase corresponde cada cosa (el INPI tiene buscadores).
3. Cada clase es una solicitud con su propio arancel:
   elegí las que de verdad vas a usar.</code></pre>
      <p><strong>Qué no se puede registrar</strong> (según el INPI): los nombres que son la forma habitual o la descripción del producto. "Mates" solo, para mates, no se puede registrar: es el nombre común del producto.</p>
      <p>Por ejemplo, Joaquín consultó y decidió registrar "Lapacho Mates" como denominativa en la clase de sus mates, para proteger el nombre aunque después cambie el diseño del logo.</p>` },
    { titulo: "El trámite paso a paso", html: `
      <p class="idea">El trámite se hace en línea en el <strong>portal del INPI</strong>. Tiene una búsqueda previa, la solicitud con su pago, una publicación y un tiempo de espera hasta que se concede.</p>
      <pre><code>Pasos generales (confirmalos en el INPI, pueden cambiar):
1. Búsqueda de antecedentes: ¿hay marcas iguales o parecidas?
2. Solicitud en línea: datos del titular, tipo de marca, clase
   y productos, y el logo si es figurativa o mixta.
3. Pago del arancel de cada clase.
4. Publicación en el Boletín de Marcas: terceros pueden oponerse.
5. Examen del INPI.
6. Concesión: desde ahí corren los 10 años.</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>Titular</td><td>La persona o empresa dueña de la marca</td></tr>
        <tr><td>Antecedentes</td><td>Marcas ya registradas o pedidas que pueden chocar con la tuya</td></tr>
        <tr><td>Oposición</td><td>Cuando otra persona se opone a tu solicitud porque cree que se parece a la suya</td></tr>
        <tr><td>Arancel</td><td>Lo que se paga por el trámite (consultá el valor actual en el INPI)</td></tr>
      </table>
      <p><strong>Lleva tiempo:</strong> el trámite puede tardar meses. Mientras tanto, podés usar la marca; la fecha de solicitud te da prioridad frente a otros que pidan algo parecido después.</p>
      <p><strong>Si hay oposiciones o dudas,</strong> conviene consultar a un agente de la propiedad industrial o a un abogado especializado.</p>
      <p>Por ejemplo, Joaquín hizo la búsqueda, cargó la solicitud y pagó el arancel de una clase. Guardó el comprobante con la fecha: le da prioridad mientras el trámite avanza.</p>` },
  ],
  practica: [
    "Anotá 3 cosas que te daría registrar tu marca que hoy no tenés.",
    "Decidí si tu marca sería denominativa, figurativa o mixta y anotá en qué clase o clases la registrarías.",
    "Entrá al portal de trámites del INPI, encontrá dónde se hace la búsqueda de marcas y anotá los pasos que te pide.",
  ],
  recursos: [
    { t: "INPI: marcas (qué son, tipos, cuánto dura la protección)", url: "https://www.argentina.gob.ar/inpi/marcas" },
    { t: "INPI: portal de trámites (búsqueda y solicitud de marcas)", url: "https://portaltramites.inpi.gob.ar/" },
    { t: "OMPI: marcas (Organización Mundial de la Propiedad Intelectual)", url: "https://www.wipo.int/es/web/trademarks" },
  ],
  quiz: [
    { q: "Si querés registrar tu marca en Argentina, ¿a qué organismo vas?", opciones: ["NIC Argentina","ARCA (ex AFIP)","El INPI","Defensa del Consumidor"], correcta: 2, explicacion: "El Instituto Nacional de la Propiedad Industrial. NIC tienta, pero es para dominios." },
    { q: "Registraste tu marca. ¿Qué podés hacer?", opciones: ["Impedir que otro use una igual o parecida en tu rubro","Usarla en cualquier país del mundo","Impedir que cualquiera use esa palabra en cualquier rubro","No pagar impuestos"], correcta: 0, explicacion: "Es exclusiva en tu rubro y en Argentina. \"Cualquier rubro\" tienta, pero se protege por clases." },
    { q: "Si registrás tu marca hoy, ¿cuánto dura la protección según el INPI?", opciones: ["Para siempre sin renovar","1 año","5 años y se pierde","10 años desde la concesión, renovable indefinidamente"], correcta: 3, explicacion: "Se renueva cada 10 años. \"Para siempre\" tienta, pero hay que renovar." },
    { q: "Vas a imprimir 500 etiquetas con tu nombre. ¿Cuándo conviene registrar?", opciones: ["Cuando seas famoso","Antes de invertir en etiquetas y publicidad","Nunca","Después de 10 años"], correcta: 1, explicacion: "Si otro lo registra antes, perdés la inversión. \"Cuando seas famoso\" tienta, pero ya puede ser tarde." },
    { q: "Querés proteger el nombre aunque cambies el diseño del logo. ¿Qué tipo de marca pedís?", opciones: ["Figurativa","Ninguna","Denominativa","Mixta solamente"], correcta: 2, explicacion: "Protege las palabras de cualquier forma. Mixta tienta, pero protege ese diseño en particular." },
    { q: "Querés proteger solo el dibujo de tu logo, sin letras. ¿Qué tipo es?", opciones: ["Figurativa","Denominativa","Mixta","Descriptiva"], correcta: 0, explicacion: "Es solo el símbolo. Mixta tienta, pero lleva palabras." },
    { q: "¿Qué son las clases en el registro de marcas?", opciones: ["Los colores del logo","Los años de protección","Las tipografías","Los rubros de productos o servicios en los que se protege la marca"], correcta: 3, explicacion: "Se usa la Clasificación de Niza. Los colores tientan, pero no tienen que ver." },
    { q: "Si vendés solo mates y registrás en 10 clases, ¿qué problema hay?", opciones: ["Ninguno","Cada clase tiene su arancel: pagás por rubros que no usás","Que es ilegal","Que tarda menos"], correcta: 1, explicacion: "Conviene elegir las que vas a usar. \"Ninguno\" tienta por proteger más." },
    { q: "¿Podés registrar \"Mates\" como marca para vender mates?", opciones: ["Sí, si llegás primero","Sí, en mayúsculas","No: es el nombre común del producto","Sí, pagando más"], correcta: 2, explicacion: "Lo descriptivo o habitual no se registra. \"Si llegás primero\" tienta, pero no aplica." },
    { q: "¿Qué es una oposición en el trámite de marca?", opciones: ["Cuando alguien se opone porque cree que tu marca se parece a la suya","Un pago extra","La aprobación","Un tipo de logo"], correcta: 0, explicacion: "Pasa después de la publicación. \"La aprobación\" tienta, pero es lo contrario." },
    { q: "Si presentaste la solicitud y el trámite tarda meses, ¿qué te da la fecha de solicitud?", opciones: ["Nada hasta que se conceda","La marca ya concedida","El derecho a usar cualquier nombre","Prioridad frente a otros que pidan algo parecido después"], correcta: 3, explicacion: "La fecha cuenta. \"Nada\" tienta porque falta la concesión, pero la prioridad sí vale." },
    { q: "Si te llegó una oposición y no sabés qué hacer, ¿qué conviene?", opciones: ["Ignorarla","Consultar a un agente de la propiedad industrial o un abogado especializado","Cambiar el logo y seguir","Abandonar sin preguntar"], correcta: 1, explicacion: "Es un tema legal. Ignorarla tienta, pero puede hacerte perder la marca." },
  ],
},
{
  id: "estilo",
  icono: "🎨",
  titulo: "Colores y tipografías",
  nivel: "Intermedio",
  objetivos: [
    "Armar una paleta de 2 o 3 colores más neutros, con sus códigos",
    "Comprobar que el texto tenga suficiente contraste para leerse",
    "Elegir 1 o 2 tipografías legibles y con licencia para usar",
  ],
  lecciones: [
    { titulo: "La paleta de colores", video: {"id":"JyNsdboI7yY","t":"Psicología del color en el diseño de logotipos y marcas · FOROALFA (5:59)"}, html: `
      <p class="idea">Una <strong>paleta</strong> es el grupo de colores que usás siempre. Con <strong>1 color principal, 1 o 2 de acento y 1 o 2 neutros</strong> alcanza. Pocos colores, repetidos, se reconocen.</p>
      <table>
        <tr><th>Rol</th><th>Para qué</th><th>Paleta de Joaquín</th><th>Código</th></tr>
        <tr><td>Principal</td><td>El que más se asocia a la marca: logo, botones</td><td>Verde monte</td><td>#2F6B3A</td></tr>
        <tr><td>Acento</td><td>Para destacar: ofertas, detalles</td><td>Rosa lapacho</td><td>#E0679A</td></tr>
        <tr><td>Neutro claro</td><td>Fondos</td><td>Crema</td><td>#F7F0E3</td></tr>
        <tr><td>Neutro oscuro</td><td>Textos</td><td>Casi negro</td><td>#222222</td></tr>
      </table>
      <p>El <strong>código hexadecimal</strong> (como #2F6B3A) es la forma exacta de nombrar un color en la computadora. Anotalo: "verde" puede ser cien verdes distintos; #2F6B3A es siempre el mismo.</p>
      <p><strong>Lo que sugieren los colores</strong> cambia según la cultura y el contexto: el verde suele asociarse a naturaleza, el rosa a calidez o dulzura, el negro a elegancia. Usalo como guía, no como regla.</p>
      <p><strong>Herramientas:</strong> en Coolors podés generar paletas y bloquear el color que ya elegiste para buscar los que combinan.</p>
      <p><strong>Pensá en tus fotos:</strong> tus productos también tienen colores. La paleta tiene que convivir con ellos.</p>
      <p>Por ejemplo, Joaquín eligió el verde del monte como principal y el rosa del lapacho como acento. Con el crema de fondo, sus publicaciones se reconocen en el inicio de Instagram antes de leer el nombre.</p>` },
    { titulo: "Contraste: que se pueda leer", html: `
      <p class="idea">Un texto tiene que <strong>leerse bien</strong> sobre su fondo, también para personas con baja visión o en una pantalla al sol. Eso depende del <strong>contraste</strong>: la diferencia de luz entre el texto y el fondo.</p>
      <table>
        <tr><th>Combinación</th><th>¿Se lee bien?</th></tr>
        <tr><td>Casi negro sobre crema</td><td>Sí, muy bien</td></tr>
        <tr><td>Blanco sobre verde oscuro</td><td>Sí</td></tr>
        <tr><td>Rosa claro sobre crema</td><td>No: poco contraste</td></tr>
        <tr><td>Amarillo sobre blanco</td><td>No</td></tr>
        <tr><td>Rojo sobre verde</td><td>Difícil, y muy difícil para personas daltónicas</td></tr>
      </table>
      <pre><code>Cómo comprobarlo:
1. Entrá a un comprobador de contraste (por ejemplo, el de WebAIM).
2. Poné el código del color del texto y el del fondo.
3. Para texto común se recomienda una relación de al menos 4,5 a 1
   (en la herramienta aparece como 4.5:1).
4. Si no llega, oscurecé el texto o aclará el fondo.</code></pre>
      <p>Una persona <strong>daltónica</strong> no distingue bien algunos colores, sobre todo rojo y verde. Por eso no conviene que el color sea la única forma de mostrar algo importante.</p>
      <p><strong>Los colores de acento</strong> suelen ser buenos para detalles y fondos de botones, pero no para textos largos.</p>
      <p>Por ejemplo, Joaquín escribía los precios en rosa lapacho sobre crema y una clienta mayor le dijo que no los veía. En el comprobador dio 2,8 a 1. Los pasó a casi negro y dejó el rosa para un recuadro.</p>` },
    { titulo: "Tipografías", video: {"id":"9uM6BkH5Uqc","t":"Cómo elegir la tipografía de tu marca · Coderhouse (5:14)"}, html: `
      <p class="idea">Una <strong>tipografía</strong> (o fuente) es el diseño de las letras. Elegí <strong>1 o 2</strong>: una para títulos con personalidad y otra para textos, muy legible.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo es</th><th>Transmite</th><th>Ejemplo en Google Fonts</th></tr>
        <tr><td>Con serifa</td><td>Pequeños remates en las puntas de las letras</td><td>Tradición, elegancia</td><td>Merriweather</td></tr>
        <tr><td>Sin serifa (sans serif)</td><td>Trazos limpios, sin remates</td><td>Moderno, claro</td><td>Poppins, Open Sans</td></tr>
        <tr><td>Manuscrita</td><td>Parece escrita a mano</td><td>Cercanía, artesanía</td><td>Caveat</td></tr>
        <tr><td>Decorativa</td><td>Muy particular</td><td>Mucha personalidad</td><td>Solo para títulos cortos</td></tr>
      </table>
      <p><strong>Regla práctica:</strong> una tipografía con personalidad para el nombre y los títulos, y una sin serifa simple para todo lo demás (precios, descripciones). Las manuscritas y decorativas no sirven para textos largos: cansan y se leen mal en chiquito.</p>
      <p><strong>Licencias:</strong> no todas las tipografías se pueden usar gratis en una marca. Las de Google Fonts tienen en su mayoría licencias libres que permiten uso comercial; igual, revisá la licencia de cada una. No uses fuentes descargadas de sitios dudosos.</p>
      <p><strong>Probala en chiquito y en el celular:</strong> si en una etiqueta de 3 cm o en una historia no se lee, no sirve.</p>
      <p>Por ejemplo, Joaquín usaba una letra muy decorativa para todo y la gente no leía los precios. Dejó la decorativa solo para "Lapacho Mates" y pasó los textos a Poppins.</p>` },
  ],
  practica: [
    "Armá tu paleta de 4 colores con sus roles y anotá el código hexadecimal de cada uno.",
    "Comprobá en un comprobador de contraste tu color de texto sobre tu fondo y anotá la relación que da.",
    "Elegí 2 tipografías en Google Fonts (una para títulos y otra para textos), probalas en un texto de 3 cm y anotá si se leen.",
  ],
  recursos: [
    { t: "Coolors: armar paletas de colores", url: "https://coolors.co/" },
    { t: "WebAIM: comprobador de contraste de colores (en inglés)", url: "https://webaim.org/resources/contrastchecker/" },
    { t: "Google Fonts: tipografías gratis", url: "https://fonts.google.com/" },
  ],
  quiz: [
    { q: "Armás tu paleta. ¿Cuántos colores conviene?", opciones: ["10 colores distintos","Uno nuevo en cada publicación","1 principal, 1 o 2 de acento y 1 o 2 neutros","Solo blanco"], correcta: 2, explicacion: "Pocos y repetidos se reconocen. 10 colores tienta por variedad, pero no se recuerda ninguno." },
    { q: "Si le decís a la imprenta \"verde\", ¿qué problema hay?", opciones: ["Hay cientos de verdes: hay que darle el código exacto","Ninguno","Que el verde es caro","Que no imprimen verde"], correcta: 0, explicacion: "El código lo define. \"Ninguno\" tienta, pero te puede llegar otro verde." },
    { q: "¿Qué es un código como #2F6B3A?", opciones: ["Una contraseña","Un número de registro de marca","Una tipografía","La forma exacta de nombrar un color en la computadora"], correcta: 3, explicacion: "Es el código hexadecimal del color. El registro de marca tienta, pero no tiene que ver." },
    { q: "¿Qué color usás para destacar una oferta?", opciones: ["El neutro claro del fondo","El de acento","Uno nuevo cada vez","El mismo del texto común"], correcta: 1, explicacion: "El acento destaca. El neutro tienta, pero se pierde con el fondo." },
    { q: "¿Lo que sugieren los colores es una regla fija?", opciones: ["Sí, siempre igual","Sí, lo dice la ley","No: cambia según la cultura y el contexto; es una guía","No sirve para nada"], correcta: 2, explicacion: "Sirve como guía. \"Siempre igual\" tienta por las listas de internet." },
    { q: "Si escribís precios en rosa claro sobre crema, ¿qué problema hay?", opciones: ["Poco contraste: cuesta leerlo","Ninguno, combinan","Que el rosa es caro","Que es muy oscuro"], correcta: 0, explicacion: "Combinar no es lo mismo que leerse. \"Combinan\" tienta porque se ve lindo." },
    { q: "¿Qué relación de contraste se recomienda para texto común?", opciones: ["1 a 1","2 a 1 alcanza","No importa","Al menos 4,5 a 1"], correcta: 3, explicacion: "Es la referencia de accesibilidad. 2 a 1 tienta, pero es poco." },
    { q: "Si mostrás \"agotado\" solo en rojo y \"disponible\" solo en verde, ¿a quién perjudica?", opciones: ["A nadie","A las personas daltónicas, que pueden no distinguirlos","Solo a los chicos","A la impresora"], correcta: 1, explicacion: "Rojo y verde se confunden con daltonismo. \"A nadie\" tienta porque vos los ves bien." },
    { q: "¿Cuántas tipografías conviene usar en tu marca?", opciones: ["Una distinta por publicación","5 o más","1 o 2","Ninguna"], correcta: 2, explicacion: "Pocas dan coherencia. Una por publicación tienta por variedad." },
    { q: "Querés una letra para descripciones y precios. ¿Cuál conviene?", opciones: ["Una sin serifa simple y legible","Una manuscrita","Una decorativa","Una que imite grafiti"], correcta: 0, explicacion: "Los textos largos y chicos necesitan legibilidad. La manuscrita tienta por artesanal." },
    { q: "Descargaste una tipografía de un sitio dudoso para tu logo. ¿Qué riesgo hay?", opciones: ["Ninguno","Que se vea más lindo","Que sea más rápida","Que no tenga licencia para uso comercial"], correcta: 3, explicacion: "No todas se pueden usar en una marca. \"Ninguno\" tienta porque estaba gratis." },
    { q: "Tu tipografía se ve bien en la compu. ¿Qué probás antes de decidir?", opciones: ["Nada más","Cómo se lee en chiquito y en el celular","Cómo se ve en mayúsculas gigantes","Si tiene muchos estilos"], correcta: 1, explicacion: "Etiquetas e historias son chiquitas. \"Nada más\" tienta, pero en el celular puede no leerse." },
  ],
},
{
  id: "logo",
  icono: "✏️",
  titulo: "El logo",
  nivel: "Intermedio",
  objetivos: [
    "Distinguir logotipo, isotipo, imagotipo e isologo y elegir el que te sirve",
    "Evaluar un logo con las pruebas de tamaño chico y blanco y negro",
    "Armar las versiones del logo que vas a necesitar y guardarlas en los formatos correctos",
  ],
  lecciones: [
    { titulo: "Tipos de logo", html: `
      <p class="idea">"Logo" se usa para todo, pero hay distintos tipos según tengan <strong>texto, símbolo o los dos</strong>. Elegí el que funcione en los lugares donde vas a mostrar tu marca.</p>
      <table>
        <tr><th>Tipo</th><th>Qué es</th><th>Ejemplo para Lapacho Mates</th></tr>
        <tr><td>Logotipo</td><td>Solo el nombre escrito con un diseño</td><td>"Lapacho Mates" en su tipografía</td></tr>
        <tr><td>Isotipo</td><td>Solo un símbolo, sin texto</td><td>La flor de lapacho</td></tr>
        <tr><td>Imagotipo</td><td>Símbolo y nombre juntos, pero se pueden separar</td><td>La flor al lado del nombre</td></tr>
        <tr><td>Isologo</td><td>Símbolo y nombre fundidos, no se separan</td><td>El nombre adentro de un mate dibujado</td></tr>
      </table>
      <p><strong>Para un emprendimiento chico</strong>, el imagotipo suele ser lo más práctico: el nombre completo para etiquetas y carteles, y el símbolo solo para la foto de perfil de las redes (que es un círculo chiquito).</p>
      <p><strong>Un isotipo solo</strong> funciona cuando la gente ya conoce tu marca. Al principio, el nombre tiene que verse.</p>
      <p><strong>Simple es mejor:</strong> los logos más reconocidos del mundo son muy simples. Uno con muchos detalles no se ve en chiquito ni se recuerda.</p>
      <p>Por ejemplo, Joaquín tenía un logo con un mate, una bombilla, tres flores, el nombre y "pintado a mano en Corrientes". En la foto de perfil de Instagram no se veía nada. Lo pasó a imagotipo: la flor sola para el perfil y la flor con el nombre para todo lo demás.</p>` },
    { titulo: "Hacerlo: las pruebas de un buen logo", video: {"id":"KmfhtNgcnRI","t":"Cómo hacer un logo en Canva sin fondo · Canvademy (6:07)"}, html: `
      <p class="idea">Podés hacer tu logo en una herramienta como Canva o encargarlo a un diseñador. En los dos casos, un buen logo tiene que pasar <strong>cuatro pruebas</strong>.</p>
      <table>
        <tr><th>Prueba</th><th>Cómo se hace</th><th>Si falla...</th></tr>
        <tr><td>Chiquito</td><td>Achicalo a 1 cm o a la foto de perfil</td><td>Sacá detalles y texto chico</td></tr>
        <tr><td>Blanco y negro</td><td>Miralo en un solo color</td><td>Si solo funciona en colores, depende demasiado de ellos</td></tr>
        <tr><td>Sobre fondos</td><td>Probalo sobre claro, oscuro y una foto</td><td>Necesitás una versión en negativo (clara)</td></tr>
        <tr><td>Original</td><td>Buscá con Google Lens si se parece a otro</td><td>Si se parece a uno existente, cambialo</td></tr>
      </table>
      <p><strong>Canva y las plantillas:</strong> son útiles para empezar, pero las plantillas las usa mucha gente. Si partís de una, cambiala bastante: tipografía, símbolo y colores tuyos. Y revisá las condiciones de uso: algunos elementos no se pueden registrar como marca.</p>
      <p><strong>La IA puede darte bocetos</strong> para tener ideas, como viste en el curso de imágenes con IA, pero un logo para años conviene terminarlo con un diseñador: tiene que ser único y tuyo.</p>
      <p><strong>Un diseñador</strong> aporta criterio, originalidad y los archivos correctos. Si contratás uno, pedí que te entregue los archivos editables y que te ceda los derechos del diseño.</p>
      <p>Por ejemplo, Joaquín armó bocetos en Canva y con IA, eligió la idea de la flor y se la encargó a una diseñadora de Corrientes. Ella lo simplificó, pasó las 4 pruebas y le entregó todos los archivos.</p>` },
    { titulo: "Versiones y archivos", html: `
      <p class="idea">Un logo no es un solo archivo: necesitás <strong>varias versiones</strong> (para distintos espacios y fondos) en <strong>varios formatos</strong> (para pantalla e impresión).</p>
      <table>
        <tr><th>Versión</th><th>Para qué</th></tr>
        <tr><td>Principal (color)</td><td>Casi todo</td></tr>
        <tr><td>Horizontal y vertical</td><td>Espacios anchos (encabezado) y altos (etiqueta)</td></tr>
        <tr><td>Isotipo solo</td><td>Foto de perfil, sello, ícono</td></tr>
        <tr><td>Negativo (claro)</td><td>Sobre fondos oscuros o fotos</td></tr>
        <tr><td>Un solo color (negro)</td><td>Sellos, grabados, impresiones baratas</td></tr>
      </table>
      <table>
        <tr><th>Formato</th><th>Qué es</th><th>Para qué</th></tr>
        <tr><td>PNG con fondo transparente</td><td>Imagen sin fondo</td><td>Redes, web, ponerlo sobre fotos</td></tr>
        <tr><td>SVG o PDF vectorial</td><td>Vector: se agranda sin perder calidad</td><td>Imprenta, cartelería, bordado, registro</td></tr>
        <tr><td>JPG</td><td>Imagen con fondo</td><td>Solo cuando no queda otra</td></tr>
      </table>
      <p>Un archivo <strong>vectorial</strong> guarda el logo como formas matemáticas: se puede agrandar a un cartel de 3 metros sin que se pixele. Una imagen común (PNG o JPG) se ve borrosa si la agrandás mucho.</p>
      <p><strong>Ordená los archivos</strong> en una carpeta "Marca" en la nube, con nombres claros (logo-horizontal-color.png). Cuando una imprenta te los pida, los tenés a mano.</p>
      <p>Por ejemplo, la imprenta le pidió a Joaquín el logo para un cartel y él mandó una captura de Instagram: salió borroso. Desde que tiene el SVG, todo se imprime nítido.</p>` },
  ],
  practica: [
    "Decidí qué tipo de logo te conviene (logotipo, isotipo, imagotipo o isologo) y anotá por qué.",
    "Pasá tu logo (o un boceto) por las 4 pruebas y anotá cuáles pasó y cuáles no.",
    "Armá la carpeta \"Marca\" con las versiones que tengas y anotá cuáles te faltan y en qué formato.",
  ],
  recursos: [
    { t: "Curso de este sitio: Crear imágenes con IA, con responsabilidad", url: "https://pkeios.github.io/EiaLearning/ia-imagenes/" },
    { t: "Coolors: armar paletas de colores", url: "https://coolors.co/" },
    { t: "Google Fonts: tipografías gratis", url: "https://fonts.google.com/" },
  ],
  quiz: [
    { q: "Tu logo es solo el nombre escrito con un diseño. ¿Qué tipo es?", opciones: ["Isotipo","Isologo","Logotipo","Imagotipo"], correcta: 2, explicacion: "Solo texto es logotipo. Isotipo tienta, pero es solo símbolo." },
    { q: "Tu logo tiene una flor al lado del nombre y se pueden usar por separado. ¿Qué tipo es?", opciones: ["Imagotipo","Isologo","Logotipo","Isotipo"], correcta: 0, explicacion: "Se separan: imagotipo. Isologo tienta, pero ahí están fundidos." },
    { q: "Recién empezás y nadie conoce tu marca. ¿Conviene usar solo el símbolo?", opciones: ["Sí, es más elegante","Sí, siempre","Da igual","No: al principio el nombre tiene que verse"], correcta: 3, explicacion: "Solo el símbolo funciona cuando ya te conocen. \"Más elegante\" tienta, pero no te encuentran." },
    { q: "Tu logo tiene mucho detalle y en la foto de perfil no se ve. ¿Qué hacés?", opciones: ["Le agregás más detalles","Lo simplificás y usás solo el símbolo para el perfil","Agrandás la foto de perfil","Lo dejás así"], correcta: 1, explicacion: "Simple funciona chiquito. Agrandar la foto tienta, pero el círculo de perfil es fijo." },
    { q: "Tu logo solo funciona en colores; en negro no se entiende. ¿Qué te dice?", opciones: ["Que está perfecto","Que hay que usar más colores","Que depende demasiado del color y conviene revisarlo","Nada"], correcta: 2, explicacion: "Tiene que funcionar en un color (sellos, grabados). \"Perfecto\" tienta si solo lo ves en color." },
    { q: "Partís de una plantilla de Canva para tu logo. ¿Qué hacés?", opciones: ["La cambiás bastante y revisás las condiciones de uso","La usás tal cual","Le cambiás solo el nombre","La registrás así"], correcta: 0, explicacion: "Muchas personas usan las mismas plantillas. Cambiar solo el nombre tienta, pero queda igual a otras." },
    { q: "Querés un logo para muchos años. ¿Qué conviene?", opciones: ["El primero que salga de la IA","Copiar uno que te guste","No tener logo","Bocetos con Canva o IA, y terminarlo con un diseñador"], correcta: 3, explicacion: "Tiene que ser único y tuyo. El de la IA tienta por gratis." },
    { q: "Si contratás a un diseñador, ¿qué le pedís además del logo?", opciones: ["Nada más","Los archivos editables y la cesión de los derechos","Solo un JPG","Que lo publique él"], correcta: 1, explicacion: "Así el logo es tuyo y lo podés usar. \"Solo un JPG\" tienta, pero no sirve para imprenta." },
    { q: "Vas a poner tu logo sobre una foto oscura. ¿Qué versión usás?", opciones: ["La de color oscuro","El isotipo en negro","La versión en negativo (clara)","Cualquiera"], correcta: 2, explicacion: "Sobre oscuro, claro. La oscura tienta por ser la principal, pero no se ve." },
    { q: "La imprenta necesita tu logo para un cartel grande. ¿Qué formato le mandás?", opciones: ["Un vectorial: SVG o PDF","Una captura de Instagram","Un JPG chico","Una foto del logo impreso"], correcta: 0, explicacion: "El vector se agranda sin perder calidad. La captura tienta por fácil, pero sale borrosa." },
    { q: "Querés poner tu logo sobre fotos en las redes. ¿Qué formato usás?", opciones: ["JPG con fondo blanco","Un documento de Word","Una captura","PNG con fondo transparente"], correcta: 3, explicacion: "Transparente no tapa la foto. JPG tienta por común, pero trae un fondo." },
    { q: "¿Qué es un archivo vectorial?", opciones: ["Una foto de alta calidad","Un archivo con formas matemáticas que se agranda sin pixelarse","Un video","Un archivo comprimido"], correcta: 1, explicacion: "Por eso sirve para carteles. \"Foto de alta calidad\" tienta, pero igual se pixela si la agrandás mucho." },
  ],
},
{
  id: "voz",
  icono: "🗣️",
  titulo: "Cómo habla tu marca",
  nivel: "Intermedio",
  objetivos: [
    "Definir el tono de voz de tu marca con ejemplos de qué decir y qué no",
    "Escribir una descripción corta y una frase que se recuerde",
    "Mantener la misma voz en redes, mensajes y etiquetas",
  ],
  lecciones: [
    { titulo: "El tono de voz", html: `
      <p class="idea">El <strong>tono de voz</strong> es cómo habla tu marca: las palabras que usa, si es formal o cercana, seria o con humor. Igual que los colores, si cambia todo el tiempo, la marca no se reconoce.</p>
      <table>
        <tr><th>Escala</th><th>Lapacho Mates</th></tr>
        <tr><td>Formal ←→ Cercana</td><td>Cercana: tutea, habla de vos</td></tr>
        <tr><td>Seria ←→ Con humor</td><td>Con un poco de humor, sin burlarse de nadie</td></tr>
        <tr><td>Técnica ←→ Simple</td><td>Simple: palabras de todos los días</td></tr>
        <tr><td>Neutra ←→ Con identidad local</td><td>Con identidad correntina</td></tr>
      </table>
      <pre><code>Guía de tono de Lapacho Mates:
SÍ decimos: "¡Este mate está listo para su primera cebada!"
            "Cada mate es único, como vos."
NO decimos: "Estimado cliente, le informamos que..."
            "¡¡¡OFERTÓN IMPERDIBLE!!!"
Emojis: 1 o 2 por mensaje, de plantas y mate 🌿🧉</code></pre>
      <p><strong>Tus atributos guían el tono:</strong> si tu marca es "cálida, artesanal y alegre", el tono no puede ser frío y técnico.</p>
      <p><strong>Cercano no es descuidado:</strong> podés tutear y usar humor, e igual escribir bien y con respeto (lo ves en el curso de ortografía de este sitio).</p>
      <p><strong>Adaptá el tono a la situación,</strong> sin cambiar la voz: ante un reclamo, la misma marca cercana se pone más seria y empática.</p>
      <p>Por ejemplo, Joaquín escribía a veces "Estimado cliente" y a veces "¡Holaaa!". Armó su guía de tono con 3 ejemplos de sí y 3 de no, y ahora todos sus mensajes suenan a Lapacho Mates.</p>` },
    { titulo: "Descripción corta y frase", html: `
      <p class="idea">Tu marca necesita <strong>textos cortos que se repiten en todos lados</strong>: una descripción de una línea (para la biografía de las redes) y, si querés, una frase que se recuerde (un eslogan).</p>
      <pre><code>Descripción corta (qué + para quién + diferencia):
"Mates pintados a mano con la flora del Litoral 🌿
 Diseños únicos y personalizados · Envíos a todo el país"

Frase o eslogan (opcional, corta y propia):
"Flores para tu ronda."</code></pre>
      <table>
        <tr><th>Un buen eslogan</th><th>Evitá</th></tr>
        <tr><td>Corto: menos de 6 palabras</td><td>Oraciones largas</td></tr>
        <tr><td>Dice algo de tu marca o tu diferencia</td><td>Frases que sirven para cualquiera ("Calidad y servicio")</td></tr>
        <tr><td>Fácil de recordar y de decir</td><td>Juegos de palabras que hay que explicar</td></tr>
        <tr><td>Propio</td><td>Frases famosas de otras marcas</td></tr>
      </table>
      <p>Un <strong>eslogan</strong> es una frase corta que acompaña a la marca. No es obligatorio: mejor ninguno que uno genérico.</p>
      <p><strong>La biografía de Instagram</strong> tiene pocos caracteres: priorizá qué vendés, tu diferencia y cómo comprar (enlace a WhatsApp o tienda).</p>
      <p>Para más sobre redes, está el curso <strong>Redes sociales para tu emprendimiento</strong> de este sitio.</p>
      <p>Por ejemplo, la biografía de Joaquín decía "Hola! Bienvenidos a mi cuenta de mates 😊". La cambió por la descripción de arriba con el enlace a WhatsApp, y empezaron a escribirle preguntando por diseños personalizados.</p>` },
    { titulo: "La misma voz en todos lados", html: `
      <p class="idea">La marca se nota cuando <strong>suena igual en todos los lugares</strong>: una publicación, un mensaje de WhatsApp, la etiqueta del producto y la respuesta a un reclamo.</p>
      <table>
        <tr><th>Lugar</th><th>Ejemplo de Lapacho Mates</th></tr>
        <tr><td>Publicación</td><td>"Nuevo diseño: flores de lapacho sobre fondo crema 🌸 ¿Para vos o para regalar?"</td></tr>
        <tr><td>Bienvenida de WhatsApp</td><td>"¡Hola! Gracias por escribir a Lapacho Mates 🌿 ¿Buscás un diseño del catálogo o uno personalizado?"</td></tr>
        <tr><td>Etiqueta</td><td>"Pintado a mano en Corrientes. Curalo antes de la primera cebada."</td></tr>
        <tr><td>Reclamo</td><td>"Lamentamos mucho que tu mate llegara con un detalle. Te enviamos otro sin costo."</td></tr>
      </table>
      <pre><code>Lista para revisar un texto antes de publicarlo:
[ ] ¿Usa el trato de la marca (vos)?
[ ] ¿Transmite mis 3 atributos?
[ ] ¿Respeta los sí y no de mi guía de tono?
[ ] ¿Está bien escrito?</code></pre>
      <p><strong>Si alguien te ayuda</strong> con las redes o los mensajes, pasale tu guía de tono: así la marca suena igual aunque escriba otra persona.</p>
      <p><strong>Los mensajes automáticos también son marca:</strong> el de bienvenida y el de ausencia de WhatsApp Business tienen que sonar como vos (lo ves en el curso de atención por WhatsApp).</p>
      <p>Por ejemplo, el hermano de Joaquín lo ayudaba a contestar mensajes y escribía muy formal. Con la guía de tono, sus respuestas empezaron a sonar como las de Joaquín y los clientes no notaron la diferencia.</p>` },
  ],
  practica: [
    "Ubicá tu marca en las 4 escalas de tono y escribí 3 ejemplos de qué sí decir y 3 de qué no. Anotá cuántos emojis permitís por mensaje.",
    "Escribí tu descripción corta de una línea y, si querés, un eslogan de menos de 6 palabras. Anotá cuántas palabras tiene cada uno.",
    "Pasá 3 textos tuyos (una publicación, un mensaje y una etiqueta) por la lista de revisión y anotá cuántos puntos cumplió cada uno.",
  ],
  recursos: [
    { t: "Curso de este sitio: Redes sociales para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/redes-sociales/" },
    { t: "Curso de este sitio: Atender clientes por WhatsApp", url: "https://pkeios.github.io/EiaLearning/whatsapp-negocio/" },
    { t: "Curso de este sitio: Fotos de producto con el celular", url: "https://pkeios.github.io/EiaLearning/fotos-producto/" },
  ],
  quiz: [
    { q: "Si a veces escribís \"Estimado cliente\" y a veces \"¡Holaaa!\", ¿qué te falta?", opciones: ["Más emojis","Más publicaciones","Un tono de voz definido","Un logo nuevo"], correcta: 2, explicacion: "El tono también es coherencia. Más emojis tienta, pero no lo ordena." },
    { q: "Tu marca es \"cálida, artesanal y alegre\". ¿Qué tono encaja?", opciones: ["Cercano y simple, con algo de humor","Muy formal y técnico","Agresivo de ofertas","Sin ninguna personalidad"], correcta: 0, explicacion: "El tono sigue a los atributos. Formal tienta por profesional, pero no es cálido." },
    { q: "¿Qué es una guía de tono?", opciones: ["El logo en blanco y negro","La lista de precios","El registro del INPI","Ejemplos de qué decir y qué no, y cómo habla tu marca"], correcta: 3, explicacion: "Ordena cómo escribís. El logo tienta, pero es lo visual." },
    { q: "Tu marca es cercana. ¿Podés escribir con errores?", opciones: ["Sí, es más auténtico","No: cercano no es descuidado","Sí, si usás emojis","Sí, en las historias"], correcta: 1, explicacion: "Se puede tutear y escribir bien. \"Más auténtico\" tienta, pero da mala imagen." },
    { q: "Si llega un reclamo, ¿cómo cambia el tono?", opciones: ["Igual de chistoso","Muy frío y legal","Más serio y empático, sin dejar de ser tu marca","No se responde"], correcta: 2, explicacion: "Se adapta a la situación. \"Igual de chistoso\" tienta por coherencia, pero no es momento." },
    { q: "Si escribís la biografía de Instagram, ¿qué priorizás?", opciones: ["Qué vendés, tu diferencia y cómo comprar","Un saludo largo","Tu historia personal completa","Muchos hashtags"], correcta: 0, explicacion: "Hay pocos caracteres. El saludo tienta por amable, pero no informa." },
    { q: "Tu eslogan es \"Calidad y servicio\". ¿Qué problema tiene?", opciones: ["Es muy corto","Es muy original","Ninguno","Es genérico: sirve para cualquier marca"], correcta: 3, explicacion: "No dice nada de vos. \"Ninguno\" tienta porque suena profesional." },
    { q: "¿Es obligatorio tener eslogan?", opciones: ["Sí, lo pide el INPI","No: mejor ninguno que uno genérico","Sí, siempre","Sí, para tener Instagram"], correcta: 1, explicacion: "Es opcional. \"Lo pide el INPI\" tienta, pero no es así." },
    { q: "¿Cuántas palabras conviene que tenga un eslogan?", opciones: ["Más de 20","Exactamente 15","Menos de 6","Lo que haga falta"], correcta: 2, explicacion: "Corto se recuerda. \"Lo que haga falta\" tienta, pero se vuelve largo." },
    { q: "Tu hermano te ayuda con los mensajes y escribe muy distinto. ¿Qué hacés?", opciones: ["Le pasás tu guía de tono","Lo dejás así","Dejás de responder","Le pedís que no use tu nombre"], correcta: 0, explicacion: "Así la marca suena igual. \"Lo dejás así\" tienta por no incomodar." },
    { q: "Tu mensaje automático de WhatsApp es muy formal y tu marca es cercana. ¿Qué hacés?", opciones: ["Lo dejás, es automático","Lo borrás","Lo pasás a inglés","Lo reescribís con el tono de tu marca"], correcta: 3, explicacion: "Los automáticos también son marca. \"Es automático\" tienta, pero es lo primero que leen." },
    { q: "Antes de publicar, ¿qué revisás del texto?", opciones: ["Solo la cantidad de emojis","Trato, atributos, guía de tono y que esté bien escrito","Nada","Solo que sea largo"], correcta: 1, explicacion: "La lista completa asegura coherencia. Solo los emojis tienta por fácil." },
  ],
},
{
  id: "aplicar",
  icono: "📦",
  titulo: "Aplicar la marca y el manual",
  nivel: "Avanzado",
  objetivos: [
    "Aplicar la marca en redes, etiquetas, packaging y mensajes",
    "Armar plantillas para que todo salga parejo",
    "Escribir un manual de marca simple de 1 o 2 páginas",
  ],
  lecciones: [
    { titulo: "Dónde se ve tu marca", html: `
      <p class="idea">Tu marca aparece en muchos lugares además del logo. Hacé una lista de <strong>todos los puntos de contacto</strong> y aplicá en cada uno los mismos colores, tipografías y tono.</p>
      <table>
        <tr><th>Punto de contacto</th><th>Qué aplicás</th></tr>
        <tr><td>Foto de perfil de las redes</td><td>Isotipo sobre el color principal</td></tr>
        <tr><td>Publicaciones e historias</td><td>Plantillas con tu paleta y tus tipografías</td></tr>
        <tr><td>WhatsApp Business</td><td>Perfil, catálogo, mensajes con tu tono</td></tr>
        <tr><td>Etiqueta del producto</td><td>Logo, cuidados, contacto</td></tr>
        <tr><td>Packaging (envoltorio)</td><td>Un sticker con el logo, papel en tus colores, una tarjeta de agradecimiento</td></tr>
        <tr><td>Fotos de producto</td><td>Mismo fondo, luz y estilo (lo ves en el curso de fotos)</td></tr>
      </table>
      <p>Un <strong>punto de contacto</strong> es cualquier lugar donde una persona se encuentra con tu marca. El <strong>packaging</strong> es el envase o envoltorio del producto.</p>
      <p><strong>No hace falta gastar mucho:</strong> un sello con tu logo sobre papel madera, un sticker y una tarjetita escrita a mano pueden ser más memorables que una caja cara.</p>
      <p><strong>Empezá por lo que más ve la gente:</strong> el perfil de las redes y el producto que llega a la casa.</p>
      <p>Por ejemplo, Joaquín mandaba los mates envueltos en papel de diario. Ahora usa papel madera con un sello de la flor en verde y una tarjeta rosa con "Gracias por elegir Lapacho Mates 🌿". Varios clientes subieron foto del paquete.</p>` },
    { titulo: "Plantillas: que todo salga parejo", html: `
      <p class="idea">Las <strong>plantillas</strong> son diseños base que reusás cambiando solo el texto o la foto. Ahorran tiempo y hacen que todo se vea de la misma marca.</p>
      <table>
        <tr><th>Plantilla</th><th>Qué tiene fijo</th><th>Qué cambia</th></tr>
        <tr><td>Publicación de producto</td><td>Fondo crema, logo abajo, tipografías</td><td>Foto y nombre del diseño</td></tr>
        <tr><td>Historia de novedad</td><td>Franja verde, título en la tipografía de títulos</td><td>El texto</td></tr>
        <tr><td>Etiqueta</td><td>Logo, cuidados, contacto</td><td>Nombre del diseño</td></tr>
        <tr><td>Tarjeta de agradecimiento</td><td>Diseño y frase</td><td>El nombre del cliente a mano</td></tr>
      </table>
      <pre><code>Cómo armarlas (en Canva o la herramienta que uses):
1. Cargá tus colores con sus códigos y tus tipografías.
2. Diseñá cada plantilla con tu logo en el mismo lugar.
3. Guardalas con nombre claro: "post-producto", "historia-novedad".
4. Para publicar: duplicás, cambiás foto y texto, y listo.</code></pre>
      <p><strong>Menos variedad, más reconocimiento:</strong> 3 o 4 plantillas alcanzan. Si cada publicación tiene un diseño distinto, la marca se diluye.</p>
      <p><strong>Muchas herramientas guardan tu "kit de marca"</strong> (colores, logos y tipografías) para tenerlo a mano en cada diseño.</p>
      <p>Por ejemplo, Joaquín tardaba 40 minutos en cada publicación. Con 3 plantillas tarda 10, y su perfil de Instagram se ve ordenado, como una vidriera.</p>` },
    { titulo: "El manual de marca", video: {"id":"lqpsojxVudo","t":"Cómo hacer un manual de marca · Zeta Viez (7:43)"}, html: `
      <p class="idea">Un <strong>manual de marca</strong> es un documento que junta todo lo que definiste: logo, colores, tipografías, tono y ejemplos de uso. Para un emprendimiento, <strong>1 o 2 páginas alcanzan</strong>.</p>
      <pre><code>Manual de marca de Lapacho Mates (1 página):

1. Quiénes somos: "Mates pintados a mano para quienes quieren un
   regalo único, con la flora del Litoral. Cálidos, artesanales y alegres."
2. Logo: versión principal, horizontal, isotipo y negativo.
   Espacio libre alrededor: el alto de la flor. No deformar, no rotar,
   no cambiar colores.
3. Colores: Verde monte #2F6B3A · Rosa lapacho #E0679A
   Crema #F7F0E3 · Casi negro #222222
4. Tipografías: títulos y nombre en [decorativa]; textos en Poppins.
5. Tono: cercano, con humor, de vos. Sí: "lista para su primera cebada".
   No: "Estimado cliente".
6. Ejemplos: una publicación, una etiqueta y el packaging.</code></pre>
      <table>
        <tr><th>Usos incorrectos del logo (ejemplos)</th><th>Por qué</th></tr>
        <tr><td>Estirarlo o aplastarlo</td><td>Se deforma</td></tr>
        <tr><td>Cambiarle los colores</td><td>Deja de ser reconocible</td></tr>
        <tr><td>Ponerlo sobre un fondo que no contrasta</td><td>No se ve</td></tr>
        <tr><td>Agregarle efectos (sombras, brillos)</td><td>Pierde limpieza</td></tr>
      </table>
      <p><strong>Para qué sirve:</strong> cuando le pedís algo a una imprenta, a un diseñador o a alguien que te ayuda, le pasás el manual y todo sale igual.</p>
      <p>Por ejemplo, Joaquín le pidió a una imprenta stickers y le pasó el manual en PDF. Le llegaron con el verde exacto y el espacio libre correcto, sin tener que explicar nada.</p>` },
  ],
  practica: [
    "Hacé la lista de tus puntos de contacto y anotá en cuáles tu marca todavía no se aplica.",
    "Armá 3 plantillas (publicación, historia y etiqueta) y anotá cuántos minutos tardás en hacer una publicación con ellas.",
    "Escribí tu manual de marca de 1 página con los 6 puntos de la lección y anotá cuáles te faltaron.",
  ],
  recursos: [
    { t: "Curso de este sitio: Fotos de producto con el celular", url: "https://pkeios.github.io/EiaLearning/fotos-producto/" },
    { t: "Curso de este sitio: Redes sociales para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/redes-sociales/" },
    { t: "WebAIM: comprobador de contraste de colores (en inglés)", url: "https://webaim.org/resources/contrastchecker/" },
  ],
  quiz: [
    { q: "Si te preguntan qué es un punto de contacto de tu marca, ¿qué respondés?", opciones: ["El teléfono del negocio","Solo el logo","Cualquier lugar donde una persona se encuentra con tu marca","El registro del INPI"], correcta: 2, explicacion: "Redes, etiqueta, paquete, mensajes. El teléfono tienta por la palabra contacto." },
    { q: "Tu presupuesto es chico. ¿Cómo hacés un packaging con tu marca?", opciones: ["Papel madera con un sello del logo, un sticker y una tarjeta","Cajas impresas carísimas","Papel de diario","Sin envoltorio"], correcta: 0, explicacion: "Lo simple y cuidado se recuerda. Las cajas caras tientan, pero no hacen falta." },
    { q: "¿Por dónde empezás a aplicar tu marca?", opciones: ["Por las tarjetas personales","Por un cartel en la ruta","Por el uniforme","Por lo que más ve la gente: el perfil y el producto que llega"], correcta: 3, explicacion: "Lo que más se ve, más impacta. El cartel tienta por grande, pero es caro y lo ven pocos." },
    { q: "Si armás una plantilla en Canva, ¿qué estás creando?", opciones: ["El logo","Un diseño base que reusás cambiando la foto o el texto","Una foto","Un manual"], correcta: 1, explicacion: "Ahorra tiempo y da coherencia. El manual tienta, pero es otra cosa." },
    { q: "¿Cuántas plantillas conviene tener para empezar?", opciones: ["Una distinta por publicación","50","3 o 4","Ninguna"], correcta: 2, explicacion: "Pocas dan reconocimiento. Una por publicación tienta por variedad, pero diluye la marca." },
    { q: "Si vas a armar plantillas en Canva, ¿qué cargás primero?", opciones: ["Tus colores con sus códigos y tus tipografías","Las fotos de otro","Una plantilla ajena sin cambiar","Colores al azar"], correcta: 0, explicacion: "Así todo sale con tu marca. Una plantilla ajena tienta, pero no es tuya." },
    { q: "Si una imprenta te pide tu manual de marca, ¿qué le mandás?", opciones: ["El registro del INPI","Un libro de 200 páginas obligatorio","La lista de precios","Un documento con logo, colores, tipografías, tono y ejemplos de uso"], correcta: 3, explicacion: "Junta tus definiciones. \"200 páginas\" tienta por profesional, pero con 1 o 2 alcanza." },
    { q: "¿Para qué te sirve el manual con una imprenta?", opciones: ["Para no pagar","Para que todo salga igual sin tener que explicar cada vez","Para registrar la marca","No sirve"], correcta: 1, explicacion: "Lo pasás y listo. \"Para registrar\" tienta, pero es otro trámite." },
    { q: "Alguien estiró tu logo para que entre en un cartel. ¿Qué pasa?", opciones: ["Queda mejor","Nada","Se deforma: es un uso incorrecto","Es lo recomendado"], correcta: 2, explicacion: "El logo no se deforma. \"Nada\" tienta si no se nota mucho." },
    { q: "Querés ponerle sombra y brillo a tu logo en una publicación. ¿Qué dice el manual?", opciones: ["Que no: los efectos le quitan limpieza","Que sí, siempre","Que solo los domingos","Nada"], correcta: 0, explicacion: "Es un uso incorrecto típico. \"Sí, siempre\" tienta por llamativo." },
    { q: "¿Qué es el espacio libre alrededor del logo?", opciones: ["Un espacio para escribir el precio","El fondo transparente","El borde de la foto","Un margen que no se invade para que el logo respire"], correcta: 3, explicacion: "Nada se pone tan cerca. El precio tienta, pero no va ahí." },
    { q: "Tu manual dice el verde como \"#2F6B3A\". ¿Por qué el código y no solo \"verde\"?", opciones: ["Porque queda más técnico","Porque así todos usan exactamente el mismo verde","Porque lo pide el INPI","Da igual"], correcta: 1, explicacion: "El código evita verdes distintos. \"Más técnico\" tienta, pero la razón es la exactitud." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu identidad de marca",
  nivel: "Avanzado",
  objetivos: [
    "Reunir en un kit todas las piezas de tu marca",
    "Probar la marca con personas de tu público",
    "Evaluar el resultado con una rúbrica y planear los próximos pasos",
  ],
  lecciones: [
    { titulo: "Tu kit de marca", html: `
      <p class="idea">El proyecto es armar el <strong>kit completo de tu marca</strong>: todo lo que definiste en el curso, en una carpeta ordenada y un manual de una página.</p>
      <pre><code>Carpeta "Marca":
  /logo          principal, horizontal, isotipo, negativo, un color
                 (PNG transparente + SVG o PDF)
  /plantillas    publicación, historia, etiqueta
  manual.pdf     1 página: quiénes somos, logo, colores, tipografías, tono
  textos.txt     descripción corta, eslogan, mensajes de WhatsApp
  registro.pdf   comprobante de la búsqueda o solicitud en el INPI (si lo hiciste)</code></pre>
      <table>
        <tr><th>Pieza</th><th>Módulo</th></tr>
        <tr><td>Oración de marca y atributos</td><td>Qué es una marca</td></tr>
        <tr><td>Nombre comprobado</td><td>El nombre</td></tr>
        <tr><td>Decisión sobre el registro</td><td>Registrar la marca</td></tr>
        <tr><td>Paleta y tipografías</td><td>Colores y tipografías</td></tr>
        <tr><td>Logo y versiones</td><td>El logo</td></tr>
        <tr><td>Guía de tono y textos</td><td>Cómo habla tu marca</td></tr>
        <tr><td>Plantillas y manual</td><td>Aplicar la marca</td></tr>
      </table>
      <p><strong>Si todavía no tenés emprendimiento,</strong> armá el kit para uno que te gustaría tener: es una forma muy concreta de practicar.</p>
      <p><strong>Guardá la carpeta en la nube</strong> y compartila con quien te ayude. Una marca ordenada se mantiene ordenada.</p>
      <p>Por ejemplo, Joaquín juntó todo en una carpeta "Lapacho Mates - Marca" en la nube. Cuando una tienda de Posadas quiso vender sus mates, les mandó el enlace y en un día tenían todo lo que necesitaban.</p>` },
    { titulo: "Probarla con tu público", html: `
      <p class="idea">Antes de cambiar todo, <strong>mostrale tu marca a 5 personas de tu público</strong> (no solo a tu familia) y escuchá qué entienden y qué sienten. Lo que importa es lo que perciben ellos.</p>
      <pre><code>Prueba de 5 minutos por persona:
1. Mostrá el logo y una publicación, sin explicar nada.
2. Preguntá:
   - ¿Qué creés que vende esta marca?
   - ¿Qué 3 palabras te vienen a la cabeza?
   - ¿Te acordás del nombre? (después de un rato)
   - ¿Lo comprarías o lo regalarías? ¿Por qué?
3. Anotá las respuestas tal cual, sin defender tu diseño.</code></pre>
      <table>
        <tr><th>Si la mayoría...</th><th>Qué hacés</th></tr>
        <tr><td>Entiende qué vendés y dice palabras parecidas a tus atributos</td><td>Vas bien</td></tr>
        <tr><td>No entiende qué vendés</td><td>Revisá el nombre, la descripción o el logo</td></tr>
        <tr><td>Dice palabras opuestas a tus atributos</td><td>Revisá colores, tipografías o fotos</td></tr>
        <tr><td>No recuerda el nombre</td><td>Revisá que sea simple y que se vea en todo</td></tr>
      </table>
      <p><strong>No defiendas, escuchá:</strong> si explicás "es que la flor representa...", ya no estás probando qué entiende la gente sola.</p>
      <p><strong>Cambiá lo que se repite,</strong> no lo que dijo una sola persona.</p>
      <p>Por ejemplo, 4 de 5 personas dijeron "artesanal", "colorido" y "regalo" al ver la marca de Joaquín: justo lo que buscaba. Dos no leyeron bien el nombre en la etiqueta, así que agrandó la letra.</p>` },
    { titulo: "Evaluá con la rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para revisar tu marca y decidir qué mejorar primero.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Base</td><td>Oración de marca, público y atributos claros</td><td>Falta uno</td><td>Sin definir</td></tr>
        <tr><td>Nombre</td><td>Pasó los criterios y está comprobado en INPI, dominio y redes</td><td>Comprobado en parte</td><td>Sin comprobar</td></tr>
        <tr><td>Logo</td><td>Pasa las 4 pruebas y tiene sus versiones y formatos</td><td>Pasa algunas pruebas</td><td>No pasa las pruebas</td></tr>
        <tr><td>Color y tipografía</td><td>Paleta con códigos, contraste comprobado, 1 o 2 fuentes con licencia</td><td>Falta algo</td><td>Sin definir</td></tr>
        <tr><td>Voz</td><td>Guía de tono con ejemplos y textos listos</td><td>Solo algunos textos</td><td>Sin definir</td></tr>
        <tr><td>Aplicación</td><td>Plantillas, manual y la prueba con 5 personas</td><td>Falta uno</td><td>Faltan varios</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → marca lista: aplicala con constancia
7 a 9   → mejorá el criterio más bajo
0 a 6   → volvé a la base: oración de marca y nombre</code></pre>
      <p><strong>La constancia vale más que la perfección:</strong> una marca simple usada siempre igual se reconoce más que una brillante que cambia cada mes.</p>
      <p><strong>Revisala una vez por año:</strong> las marcas pueden actualizarse de a poco, sin perder lo que la gente ya reconoce.</p>
      <p>Por ejemplo, Joaquín sacó 11 de 12: le faltaba hacer la solicitud en el INPI (solo había hecho la búsqueda). La presentó al mes siguiente.</p>` },
  ],
  practica: [
    "Armá la carpeta \"Marca\" con la estructura de la lección y anotá cuántas piezas tiene y cuáles faltan.",
    "Hacé la prueba con 5 personas de tu público y anotá las 3 palabras que más se repitieron.",
    "Puntuá tu marca con la rúbrica, anotá tu total de 12 y escribí el próximo paso para el criterio más bajo.",
  ],
  recursos: [
    { t: "INPI: marcas (qué son, tipos, cuánto dura la protección)", url: "https://www.argentina.gob.ar/inpi/marcas" },
    { t: "WebAIM: comprobador de contraste de colores (en inglés)", url: "https://webaim.org/resources/contrastchecker/" },
    { t: "Google Fonts: tipografías gratis", url: "https://fonts.google.com/" },
  ],
  quiz: [
    { q: "¿Qué formatos del logo van en la carpeta del kit?", opciones: ["Solo una captura","Solo JPG chico","PNG transparente y SVG o PDF vectorial","Una foto del logo impreso"], correcta: 2, explicacion: "Uno para pantalla, otro para imprenta. La captura tienta por fácil, pero sale borrosa." },
    { q: "Todavía no tenés emprendimiento. ¿Podés hacer el proyecto?", opciones: ["Sí, armando el kit para uno que te gustaría tener","No, hace falta uno real","Solo leyendo el curso","Solo si registrás la marca"], correcta: 0, explicacion: "Es una práctica concreta. \"Hace falta uno real\" tienta, pero no." },
    { q: "Una tienda quiere vender tus productos y pide tu marca. ¿Qué le mandás?", opciones: ["Una captura de Instagram","Nada, que la busquen","Solo el nombre","El enlace a tu carpeta de marca con logos y manual"], correcta: 3, explicacion: "Así tienen todo. La captura tienta por rápida, pero no sirve para imprimir." },
    { q: "Vas a probar tu marca. ¿A quién le mostrás?", opciones: ["Solo a tu familia","A 5 personas de tu público","A nadie","A tu competencia"], correcta: 1, explicacion: "Tu público es el que compra. La familia tienta porque es fácil, pero suele opinar con cariño." },
    { q: "Si mostrás el logo y empezás a explicar qué significa la flor, ¿qué problema hay?", opciones: ["Ninguno","Que te demorás","Ya no probás qué entiende la gente sola","Que la flor es fea"], correcta: 2, explicacion: "Hay que mostrar sin explicar. \"Ninguno\" tienta por ayudar." },
    { q: "La mayoría no entiende qué vendés. ¿Qué revisás?", opciones: ["El nombre, la descripción o el logo","Solo los precios","El color de tu ropa","Nada"], correcta: 0, explicacion: "Eso comunica qué hacés. Los precios tientan, pero no explican qué vendés." },
    { q: "La gente dice \"frío\" y \"serio\" y tus atributos son \"cálido y alegre\". ¿Qué revisás?", opciones: ["El nombre del INPI","El horario de atención","Nada","Colores, tipografías o fotos"], correcta: 3, explicacion: "Lo visual transmite las sensaciones. El INPI tienta, pero no tiene que ver." },
    { q: "Una sola persona de cinco opinó que el logo no le gusta. ¿Qué hacés?", opciones: ["Cambiás todo","Lo anotás, pero cambiás lo que se repite, no lo de una sola persona","La ignorás sin anotar","Le pedís que cambie de opinión"], correcta: 1, explicacion: "Lo repetido es la señal. \"Cambiás todo\" tienta por complacer." },
    { q: "Tu nombre no está comprobado en el INPI. ¿Cuántos puntos sacás en \"Nombre\"?", opciones: ["2 seguro","12","0 o 1, según lo que comprobaste","No cuenta"], correcta: 2, explicacion: "2 es con INPI, dominio y redes. \"2 seguro\" tienta si te gusta el nombre." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Mejorás el criterio más bajo","Cambiás toda la marca","Dejás de publicar","Pagás publicidad"], correcta: 0, explicacion: "De 7 a 9, falta pulir. Cambiar todo tienta, pero perdés lo que funciona." },
    { q: "¿Qué vale más para que te reconozcan?", opciones: ["Una marca brillante que cambia cada mes","Muchos logos distintos","Muchas tipografías","Una marca simple usada siempre igual"], correcta: 3, explicacion: "La constancia construye reconocimiento. Cambiar tienta por novedad." },
    { q: "¿Cada cuánto conviene revisar la marca?", opciones: ["Cada semana","Una vez por año, actualizando de a poco","Nunca","Cada vez que ves una marca que te gusta"], correcta: 1, explicacion: "De a poco no perdés el reconocimiento. Cada semana tienta, pero rompe la coherencia." },
  ],
},
];
