// Temario del curso "Fotos de producto con el celular". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js fotos-producto y node tools/metodologia.js fotos-producto
window.TEMARIO = [
{
  id: "luz",
  icono: "☀️",
  titulo: "La luz lo es todo",
  nivel: "Básico",
  objetivos: [
    "Usar la luz de una ventana para sacar fotos claras y con colores reales",
    "Suavizar la luz con un difusor y rellenar sombras con un reflector casero",
    "Elegir la hora y el lugar de la casa con mejor luz",
  ],
  lecciones: [
    { titulo: "La luz de la ventana", video: {"id":"HLhf2py8t5s","t":"Fotos de producto con luz de ventana · Negocios Tips Ok (1:01)"}, html: `
      <p class="idea">La diferencia entre una foto casera y una profesional casi nunca es el celular: es la <strong>luz</strong>. La mejor luz gratis es la de una <strong>ventana</strong>, de costado al producto.</p>
      <p>En todo el curso acompañamos a <strong>Mati</strong>, que hace mates de calabaza y bombillas artesanales en Salta. Vende por Instagram y por WhatsApp, y sus fotos salen oscuras y amarillentas.</p>
      <table>
        <tr><th>Luz</th><th>Qué pasa en la foto</th></tr>
        <tr><td>Ventana de costado, sin sol directo</td><td>Colores reales, sombras suaves: la mejor para empezar</td></tr>
        <tr><td>Sol directo</td><td>Sombras duras y brillos quemados</td></tr>
        <tr><td>Lámpara amarilla de la casa</td><td>Todo se ve amarillento o anaranjado</td></tr>
        <tr><td>Flash del celular</td><td>Brillo fuerte adelante, fondo oscuro y reflejos</td></tr>
        <tr><td>Mezcla de ventana y lámpara prendida</td><td>Colores raros: parte azulada, parte amarilla</td></tr>
      </table>
      <pre><code>Cómo armar tu lugar de fotos:
1. Una mesa al lado de una ventana grande.
2. El producto de costado a la ventana (la luz le llega de un lado).
3. Todas las lámparas de la habitación apagadas.
4. Sin flash.</code></pre>
      <p><strong>Una sola fuente de luz</strong> es la regla más importante. Si apagás las lámparas y dejás solo la ventana, los colores se ven como son.</p>
      <p>Por ejemplo, Mati sacaba las fotos de noche, con la lámpara del comedor: los mates salían anaranjados. Al día siguiente sacó la misma foto al lado de la ventana, con la luz apagada, y el color de la calabaza era el real.</p>` },
    { titulo: "Difusor y reflector caseros", html: `
      <p class="idea">Con dos cosas baratas mejorás mucho la luz: un <strong>difusor</strong> que la suaviza y un <strong>reflector</strong> que devuelve luz a las sombras.</p>
      <table>
        <tr><th>Herramienta</th><th>Qué es</th><th>Versión casera</th></tr>
        <tr><td>Difusor</td><td>Algo translúcido entre la ventana y el producto: ablanda la luz y las sombras</td><td>Una cortina blanca fina, papel manteca o papel de calcar pegado al vidrio</td></tr>
        <tr><td>Reflector</td><td>Algo blanco del lado contrario a la ventana: ilumina la parte en sombra</td><td>Una cartulina blanca, una tapa de caja forrada con papel de aluminio o una telgopor</td></tr>
      </table>
      <pre><code>Vista desde arriba:

  VENTANA          producto          REFLECTOR
 (con difusor) →     [  ]     ←    (cartulina blanca)
                       ↑
                    CELULAR</code></pre>
      <p><strong>El reflector se acerca o se aleja:</strong> más cerca, menos sombra; más lejos, más sombra. Probá hasta que el lado oscuro del producto se vea, pero sin perder del todo la sombra (la sombra da volumen).</p>
      <p><strong>El aluminio refleja más fuerte</strong> que la cartulina blanca: usalo con cuidado, porque puede dar brillos.</p>
      <p>Por ejemplo, los mates de Mati tenían un costado negro. Puso una cartulina blanca del lado contrario a la ventana y el costado oscuro mostró el grabado de la calabaza.</p>` },
    { titulo: "La hora y el lugar", html: `
      <p class="idea">La luz cambia con la <strong>hora</strong> y con el <strong>día</strong>. Elegí un horario fijo para sacar fotos: así todas las de tu catálogo se ven parecidas.</p>
      <table>
        <tr><th>Momento</th><th>Cómo es la luz de la ventana</th></tr>
        <tr><td>Media mañana o media tarde</td><td>Pareja y suave: la mejor</td></tr>
        <tr><td>Mediodía con sol entrando</td><td>Dura: usá difusor o esperá</td></tr>
        <tr><td>Día nublado</td><td>Muy suave, como un difusor natural: excelente</td></tr>
        <tr><td>Atardecer</td><td>Anaranjada: linda para fotos de ambiente, no para mostrar el color real</td></tr>
        <tr><td>Noche</td><td>Sin luz natural: hace falta luz artificial (te conviene evitarla al empezar)</td></tr>
      </table>
      <p><strong>Una ventana que no da al sol directo</strong> tiene luz pareja casi todo el día. En Argentina, las que miran al sur casi no reciben sol directo. Igual, la prueba segura es mirar: si entra un rectángulo de sol sobre la mesa, no es la ventana para fotos en ese momento.</p>
      <p><strong>Siempre en el mismo lugar y a la misma hora:</strong> si un día sacás a la mañana y otro a la tarde, el catálogo se ve desparejo, con fotos de distinto color.</p>
      <p>Por ejemplo, Mati probó tres horarios en su ventana: a las 10 la luz era pareja, a las 13 entraba sol directo y a las 18 todo se veía naranja. Ahora saca todas las fotos los sábados a las 10.</p>` },
  ],
  practica: [
    "Sacá la misma foto de un producto con la lámpara prendida, con flash y al lado de una ventana sin flash, y anotá en cuál el color se ve más real.",
    "Armá un difusor y un reflector caseros, sacá una foto con y otra sin, y anotá qué cambió en las sombras.",
    "Sacá una foto en tu ventana a 3 horarios distintos y anotá cuál fue el mejor horario y por qué.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de fotografía básica", url: "https://edu.gcfglobal.org/es/fotografia-basica/" },
    { t: "Adobe: guía de fotografía de producto (en español)", url: "https://www.adobe.com/es/creativecloud/photography/discover/product-photography.html" },
  ],
  quiz: [
    { q: "Tus fotos salen amarillentas y las sacás de noche con la lámpara. ¿Qué cambiás?", opciones: ["Usás el flash","Comprás otro celular","Las sacás de día, al lado de una ventana, con las lámparas apagadas","Las sacás más cerca de la lámpara"], correcta: 2, explicacion: "La lámpara tiñe de amarillo. Otro celular tienta, pero el problema es la luz." },
    { q: "Si usás el flash del celular para un producto chico, ¿qué suele pasar?", opciones: ["Brillos fuertes adelante y el fondo oscuro","Colores perfectos","Sombras suaves","Nada"], correcta: 0, explicacion: "El flash es una luz dura de frente. \"Colores perfectos\" tienta porque ilumina, pero aplana y da reflejos." },
    { q: "¿Dónde ponés el producto respecto de la ventana?", opciones: ["Con la ventana detrás del producto, a contraluz","Lejos de la ventana","Debajo de la mesa","De costado a la ventana, para que la luz le llegue de un lado"], correcta: 3, explicacion: "La luz de costado da volumen. A contraluz tienta por lindo, pero el producto queda oscuro." },
    { q: "Tenés la ventana y además una lámpara prendida. ¿Qué pasa con los colores?", opciones: ["Mejoran","Se mezclan: parte azulada y parte amarilla","No cambia nada","Se ven en blanco y negro"], correcta: 1, explicacion: "Dos luces de distinto color confunden al celular. \"Mejoran\" tienta por más luz, pero se ven raros." },
    { q: "Entra sol directo por la ventana y da sombras duras. ¿Qué usás?", opciones: ["El flash","Una lámpara amarilla","Un difusor: una cortina blanca fina o papel manteca","Nada, está bien"], correcta: 2, explicacion: "El difusor ablanda la luz. El flash tienta para compensar, pero suma otra luz dura." },
    { q: "Si un costado del producto queda muy oscuro, ¿qué ponés del lado contrario a la ventana?", opciones: ["Un reflector: una cartulina blanca","Una tela negra","Una lámpara amarilla","Nada"], correcta: 0, explicacion: "Lo blanco devuelve luz a la sombra. La tela negra tienta, pero la oscurece más." },
    { q: "Querés menos sombra todavía. ¿Qué hacés con el reflector?", opciones: ["Lo alejás","Lo das vuelta","Lo sacás","Lo acercás al producto"], correcta: 3, explicacion: "Más cerca, más luz rebotada. Alejarlo tienta, pero da más sombra." },
    { q: "¿Por qué no conviene borrar del todo la sombra?", opciones: ["Porque gasta batería","Porque la sombra da volumen al producto","Porque es ilegal","Sí conviene borrarla siempre"], correcta: 1, explicacion: "Sin sombra el producto se ve chato. \"Conviene siempre\" tienta por prolijo, pero pierde forma." },
    { q: "Si es un día nublado, ¿es bueno para sacar fotos de producto?", opciones: ["No, nunca","Solo con flash","Sí: la luz es muy suave, como un difusor natural","Solo de noche"], correcta: 2, explicacion: "Las nubes suavizan la luz. \"Nunca\" tienta porque hay menos sol, pero la luz es ideal." },
    { q: "Si al atardecer la luz es anaranjada, ¿para qué sirve?", opciones: ["Para fotos de ambiente, no para mostrar el color real","Para todas las fotos de catálogo","Para nada","Para fotos con flash"], correcta: 0, explicacion: "Tiñe el producto. \"Para todo el catálogo\" tienta porque es linda, pero los colores no son los reales." },
    { q: "Ves un rectángulo de sol sobre la mesa. ¿Es buen momento para las fotos?", opciones: ["Sí, es la mejor luz","Sí, si usás flash","Da igual","No: hay sol directo; esperá o usá difusor"], correcta: 3, explicacion: "El sol directo da sombras duras. \"La mejor luz\" tienta porque hay mucha, pero es dura." },
    { q: "Querés que todas las fotos de tu catálogo se vean parejas. ¿Qué hacés?", opciones: ["Cada una a una hora distinta","Las sacás siempre en el mismo lugar y a la misma hora","Unas de día y otras de noche","Cambiás de lugar cada vez"], correcta: 1, explicacion: "Misma luz, mismas fotos. Cambiar de hora tienta por comodidad, pero cada foto sale de otro color." },
  ],
},
{
  id: "fondo",
  icono: "🖼️",
  titulo: "Fondo y escena",
  nivel: "Básico",
  objetivos: [
    "Armar un fondo liso \"infinito\" con una cartulina",
    "Elegir entre fondo blanco y foto de ambiente según dónde se va a usar",
    "Usar pocos objetos de decoración que acompañen sin robar atención",
  ],
  lecciones: [
    { titulo: "El fondo infinito", video: {"id":"W_MwxOleM9s","t":"Cómo hacer fotografía de productos fácil y barato · República Fotográfica (5:52)"}, html: `
      <p class="idea">Un <strong>fondo infinito</strong> es un fondo liso que va de la mesa a la pared en curva, sin línea de quiebre. El producto parece flotar en un espacio limpio, como en las tiendas grandes.</p>
      <pre><code>Fondo infinito con una cartulina:
1. Una cartulina grande (blanca o de un color suave).
2. Pegá el borde de arriba a la pared o a una caja, con cinta.
3. Dejá que baje en curva y se apoye sobre la mesa.
4. El producto va sobre la parte plana, lejos de la curva.
   ─────┐   ← pared
        │
        ╰────────────  ← mesa (curva, sin esquina)</code></pre>
      <table>
        <tr><th>Fondo</th><th>Para qué</th></tr>
        <tr><td>Blanco</td><td>Catálogos y tiendas online: muestra el producto sin distracciones</td></tr>
        <tr><td>Gris claro o un color suave</td><td>Productos blancos (sobre blanco se pierden)</td></tr>
        <tr><td>Negro</td><td>Joyas y productos brillantes, para que resalten</td></tr>
        <tr><td>Madera, tela o una mesa real</td><td>Fotos de ambiente para redes</td></tr>
      </table>
      <p><strong>La cartulina se ensucia y se arruga:</strong> guardala enrollada y cambiala cuando tenga marcas; las arrugas se ven en la foto.</p>
      <p><strong>Una caja de luz casera:</strong> una caja de cartón grande, sin una tapa, forrada por dentro con papel blanco, frente a la ventana, también funciona como estudio chiquito.</p>
      <p>Por ejemplo, Mati sacaba los mates sobre el mantel de la cocina, con la pared y la heladera de fondo. Con una cartulina blanca en curva, el mate pasó a ser lo único que se veía.</p>` },
    { titulo: "Catálogo o ambiente", html: `
      <p class="idea">Hay dos tipos de foto de producto y conviene tener las dos: la de <strong>catálogo</strong>, con fondo liso, y la de <strong>ambiente</strong>, con el producto en uso.</p>
      <table>
        <tr><th></th><th>Foto de catálogo</th><th>Foto de ambiente</th></tr>
        <tr><td>Fondo</td><td>Liso, sin nada más</td><td>Un lugar real: una mesa, una mano, un espacio</td></tr>
        <tr><td>Para qué</td><td>Mostrar exactamente cómo es</td><td>Mostrar cómo se usa y transmitir una sensación</td></tr>
        <tr><td>Dónde se usa</td><td>Tiendas online, catálogos, primera foto de una publicación</td><td>Redes sociales, historias, publicidad</td></tr>
        <tr><td>Ejemplo con un mate</td><td>El mate solo sobre fondo blanco, de frente</td><td>El mate con yerba y bombilla en una mesa de madera, con un termo</td></tr>
      </table>
      <p><strong>Las tiendas online tienen sus reglas:</strong> muchas piden o recomiendan fondo claro en la primera foto y no aceptan textos, logos grandes ni collages. Revisá la ayuda de la plataforma donde vendés antes de subir.</p>
      <p><strong>Una foto de escala</strong> ayuda mucho: el producto en una mano o al lado de un objeto conocido muestra el tamaño real. Evita el clásico "¿qué tamaño tiene?".</p>
      <p>Por ejemplo, Mati usa la foto en fondo blanco como primera foto en su tienda, y en Instagram publica el mate en uso, con un termo y unas medialunas.</p>` },
    { titulo: "Decorar sin robar atención", html: `
      <p class="idea">Los objetos de decoración (en fotografía se llaman <strong>props</strong>) cuentan una historia, pero el <strong>producto tiene que ser lo primero que se ve</strong>. Menos es más.</p>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>1 a 3 objetos que tengan que ver con el producto</td><td>La mesa llena de cosas</td></tr>
        <tr><td>Colores que combinan con el producto</td><td>Un objeto de color fuerte que llama más que el producto</td></tr>
        <tr><td>Los objetos más chicos o desenfocados</td><td>Un objeto más grande que el producto, adelante</td></tr>
        <tr><td>Fondo ordenado</td><td>Cables, enchufes o la heladera atrás</td></tr>
      </table>
      <pre><code>La prueba del segundo:
Mostrale la foto a alguien un segundo y preguntale qué vio.
Si dice el producto → bien.
Si dice "la taza roja" o "el gato" → sobra algo.</code></pre>
      <p><strong>Props que cuentan cómo se usa:</strong> yerba y un termo para un mate, una toalla para un jabón, un cuaderno para una lapicera. Ayudan a que la persona se imagine usándolo.</p>
      <p><strong>Ojo con las marcas ajenas:</strong> no muestres logos de otras marcas grandes en tus fotos (una lata de gaseosa, una taza de una cadena de café): distraen y no son tuyas.</p>
      <p>Por ejemplo, Mati armó una foto con 7 objetos alrededor del mate. Hizo la prueba del segundo con su hermana: dijo "las flores". Dejó solo el termo y la yerba.</p>` },
  ],
  practica: [
    "Armá un fondo infinito con una cartulina, sacá la misma foto con y sin él, y anotá qué se veía de fondo en cada una.",
    "Sacá una foto de catálogo y otra de ambiente del mismo producto, y anotá dónde usarías cada una.",
    "Hacé la prueba del segundo con 3 fotos tuyas y 2 personas, y anotá cuántas veces dijeron primero el producto.",
  ],
  recursos: [
    { t: "Adobe: guía de fotografía de producto (en español)", url: "https://www.adobe.com/es/creativecloud/photography/discover/product-photography.html" },
    { t: "Curso de este sitio: Vender por internet (publicaciones, cobros y envíos)", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
    { t: "GCFAprendeLibre: curso gratis de fotografía básica", url: "https://edu.gcfglobal.org/es/fotografia-basica/" },
  ],
  quiz: [
    { q: "Querés que el producto parezca flotar en un fondo limpio, sin línea entre mesa y pared. ¿Qué armás?", opciones: ["Una cartulina doblada en ángulo recto","El mantel de la cocina","Un fondo infinito: una cartulina en curva de la pared a la mesa","Una pared con cuadros"], correcta: 2, explicacion: "La curva borra la línea de quiebre. Doblarla en ángulo tienta por fácil, pero se ve la esquina." },
    { q: "Tu producto es blanco. ¿Qué fondo conviene?", opciones: ["Gris claro o un color suave","Blanco","Uno lleno de dibujos","Fluor"], correcta: 0, explicacion: "Sobre blanco se pierde. El blanco tienta porque es el clásico, pero no se distingue el borde." },
    { q: "Si vas a fotografiar un anillo brillante, ¿qué fondo lo hace resaltar?", opciones: ["Uno de colores fuertes","Un mantel estampado","Uno con mucha textura","Negro"], correcta: 3, explicacion: "El negro hace resaltar el brillo. El estampado tienta por alegre, pero distrae." },
    { q: "Si la cartulina del fondo está arrugada, ¿qué pasa?", opciones: ["No se nota","Las arrugas se ven en la foto: hay que cambiarla o alisarla","Queda mejor","Se arregla con flash"], correcta: 1, explicacion: "Se ven como líneas y sombras. \"No se nota\" tienta, pero con buena luz se notan más." },
    { q: "Vas a poner la primera foto de un producto en una tienda online. ¿Qué tipo usás?", opciones: ["De ambiente con muchos objetos","Un collage de 4 fotos","De catálogo, con fondo liso","Una foto con mucho texto encima"], correcta: 2, explicacion: "La primera foto muestra el producto tal cual. El collage tienta por mostrar más, pero muchas tiendas no lo aceptan." },
    { q: "Querés que la gente se imagine usando tu mate. ¿Qué foto sacás?", opciones: ["De ambiente: el mate en uso, en una mesa con un termo","De catálogo en fondo blanco","Solo la etiqueta","Una foto borrosa"], correcta: 0, explicacion: "La de ambiente cuenta cómo se usa. La de catálogo tienta por prolija, pero no transmite el uso." },
    { q: "Te preguntan todo el tiempo qué tamaño tiene tu producto. ¿Qué foto agregás?", opciones: ["Una más grande","Una con más luz","Una de otro producto","Una con el producto en una mano o al lado de un objeto conocido"], correcta: 3, explicacion: "La escala muestra el tamaño real. Una foto más grande tienta, pero no dice cuánto mide." },
    { q: "Antes de subir a una tienda online, ¿qué revisás?", opciones: ["Nada, todas aceptan todo","Las reglas de fotos de esa plataforma en su ayuda","Solo el precio","Que la foto tenga tu logo gigante"], correcta: 1, explicacion: "Cada tienda tiene reglas. \"Aceptan todo\" tienta, pero te pueden pausar la publicación." },
    { q: "Tu foto tiene 7 objetos alrededor del producto. ¿Qué hacés?", opciones: ["Agregás más","Los dejás todos","Dejás 1 a 3 que tengan que ver con el producto","Sacás el producto"], correcta: 2, explicacion: "Menos objetos, más protagonismo para el producto. Dejarlos tienta porque se ve lleno, pero distrae." },
    { q: "Mostrás tu foto un segundo y la persona dice \"la taza roja\". ¿Qué te dice?", opciones: ["Que sobra algo que roba atención","Que la foto está perfecta","Que tenés que vender tazas","Nada"], correcta: 0, explicacion: "El producto tiene que ser lo primero que se ve. \"Perfecta\" tienta, pero vieron otra cosa." },
    { q: "Querés mostrar cómo se usa un jabón. ¿Qué prop agregás?", opciones: ["Una lata de gaseosa","Un control remoto","Un cable","Una toalla o un lavatorio"], correcta: 3, explicacion: "El prop tiene que tener que ver con el uso. La gaseosa tienta por colorida, pero no tiene relación." },
    { q: "En tu foto se ve el logo de una marca famosa de café en una taza. ¿Qué hacés?", opciones: ["Lo agrandás","Lo sacás: distrae y no es tuyo","Lo dejás para que parezca de marca","Le ponés tu nombre encima"], correcta: 1, explicacion: "Las marcas ajenas distraen y no son tuyas. Dejarlo tienta para que se vea \"pro\", pero confunde." },
  ],
},
{
  id: "celular",
  icono: "📱",
  titulo: "Sacarle provecho al celular",
  nivel: "Intermedio",
  objetivos: [
    "Enfocar y ajustar la exposición tocando la pantalla",
    "Evitar el zoom digital y las fotos movidas",
    "Usar la cuadrícula y los modos de la cámara con criterio",
  ],
  lecciones: [
    { titulo: "Enfoque y exposición", video: {"id":"NJGyj_5iWi4","t":"Tips para tomar mejores fotos con tu celular · Isa Marcial (7:46)"}, html: `
      <p class="idea">Antes de disparar, <strong>tocá el producto en la pantalla</strong>: el celular enfoca ahí y ajusta la luz para eso. Después podés subir o bajar la <strong>exposición</strong> (qué tan clara sale la foto).</p>
      <pre><code>1. Limpiá la lente con un trapito suave (casi siempre tiene marcas de dedos).
2. Tocá el producto en la pantalla: aparece un cuadrado o un círculo.
3. Al lado aparece un solcito o una barra: deslizá el dedo
   para hacer la foto más clara o más oscura.
4. Si querés que no cambie, dejá el dedo apretado sobre el producto
   hasta que diga "bloqueo" (en muchos celulares: AE/AF).
5. Disparar.</code></pre>
      <table>
        <tr><th>Si la foto sale...</th><th>Hacé esto</th></tr>
        <tr><td>Borrosa</td><td>Limpiá la lente, tocá el producto para enfocar y apoyá el celular</td></tr>
        <tr><td>Muy oscura</td><td>Subí la exposición o acercate a la ventana</td></tr>
        <tr><td>Con partes blancas "quemadas"</td><td>Bajá la exposición hasta que se vea el detalle</td></tr>
        <tr><td>Con el fondo enfocado y el producto no</td><td>Tocá el producto, no el fondo</td></tr>
      </table>
      <p><strong>La lente sucia</strong> es la causa número uno de fotos "lechosas", sin contraste. Limpiala siempre antes de una sesión.</p>
      <p>Los nombres y los íconos cambian según la marca del celular, pero casi todos tienen tocar para enfocar y la barra de exposición.</p>
      <p>Por ejemplo, las fotos de las bombillas de Mati salían con la plata "quemada", toda blanca. Bajó un poco la exposición con el solcito y aparecieron los detalles del alpaca.</p>` },
    { titulo: "Sin zoom y sin movimiento", html: `
      <p class="idea">Dos errores arruinan muchas fotos: el <strong>zoom digital</strong>, que agranda achicando la calidad, y el <strong>movimiento</strong> de la mano al disparar.</p>
      <table>
        <tr><th>En vez de...</th><th>Hacé esto</th></tr>
        <tr><td>Hacer zoom con los dedos</td><td>Acercate con el celular (o usá la lente 2x o 3x si tu celular la tiene, que es óptica)</td></tr>
        <tr><td>Sostener el celular en el aire</td><td>Apoyalo en una pila de libros, un vaso o un trípode barato</td></tr>
        <tr><td>Apretar fuerte el botón de disparo</td><td>Usá el temporizador de 2 o 3 segundos, o el botón de volumen</td></tr>
      </table>
      <p>El <strong>zoom óptico</strong> usa otra lente del celular y no pierde calidad; el <strong>zoom digital</strong> solo recorta y agranda la imagen, que pierde nitidez. En la app de cámara, los botones "1x", "2x", "3x" suelen ser lentes reales; lo que está entre medio es digital.</p>
      <p><strong>El temporizador es tu trípode:</strong> con el celular apoyado y 2 segundos de temporizador, la foto sale firme aunque haya poca luz.</p>
      <p><strong>Acercate, pero no tanto:</strong> si te acercás demasiado, el celular no puede enfocar. Si no enfoca, alejate un poco.</p>
      <p>Por ejemplo, Mati hacía zoom con los dedos para mostrar el grabado de un mate y salía granulado. Apoyó el celular en dos libros, se acercó con el teléfono y usó el temporizador: el grabado se veía nítido.</p>` },
    { titulo: "Cuadrícula y modos de la cámara", html: `
      <p class="idea">La cámara del celular tiene ayudas que conviene activar (como la <strong>cuadrícula</strong>) y modos que hay que usar con criterio (retrato, HDR, filtros).</p>
      <table>
        <tr><th>Función</th><th>Para qué sirve</th><th>¿Usarla?</th></tr>
        <tr><td>Cuadrícula</td><td>Líneas que dividen la pantalla en 9 partes: para encuadrar derecho y ubicar el producto</td><td>Siempre: activala en la configuración de la cámara</td></tr>
        <tr><td>Modo retrato</td><td>Desenfoca el fondo</td><td>Para fotos de ambiente; a veces corta mal los bordes del producto: revisá</td></tr>
        <tr><td>HDR</td><td>Junta varias fotos para que no haya partes muy claras ni muy oscuras</td><td>Útil con mucho contraste; a veces cambia los colores</td></tr>
        <tr><td>Filtros de la cámara</td><td>Cambian los colores</td><td>No para catálogo: el color tiene que ser el real</td></tr>
        <tr><td>Máxima resolución</td><td>Más detalle para poder recortar</td><td>Sí, si tenés espacio en el celular</td></tr>
      </table>
      <p><strong>Con la cuadrícula, las líneas de la mesa y de la pared quedan derechas.</strong> Una foto torcida se nota enseguida y parece descuidada.</p>
      <p><strong>Sacá varias:</strong> de cada producto, sacá 5 o 6 fotos cambiando un poco el ángulo y la exposición. Después elegís la mejor; borrar es gratis.</p>
      <p>Por ejemplo, Mati usaba el modo retrato para todo y el borde de las bombillas salía "comido" por el desenfoque. Para las fotos de catálogo volvió al modo foto normal.</p>` },
  ],
  practica: [
    "Limpiá la lente, sacá una foto antes y otra después de limpiarla, y anotá qué diferencia notaste.",
    "Sacá la misma foto con zoom digital y acercándote con el celular apoyado y temporizador, y anotá cuál salió más nítida.",
    "Activá la cuadrícula, sacá 6 fotos de un producto cambiando ángulo y exposición, y anotá cuál elegiste y por qué.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de fotografía básica", url: "https://edu.gcfglobal.org/es/fotografia-basica/" },
    { t: "Adobe: guía de fotografía de producto (en español)", url: "https://www.adobe.com/es/creativecloud/photography/discover/product-photography.html" },
  ],
  quiz: [
    { q: "Si estás por sacar la foto de un producto, ¿qué tocás en la pantalla antes de disparar?", opciones: ["El fondo","Cualquier lugar","El producto, para que el celular enfoque y ajuste la luz ahí","Nada"], correcta: 2, explicacion: "Tocar el producto lo enfoca. El fondo tienta si querés verlo, pero el producto queda borroso." },
    { q: "Tus fotos salen \"lechosas\", sin contraste. ¿Qué revisás primero?", opciones: ["Que la lente esté limpia","El precio del producto","La batería","El fondo de pantalla"], correcta: 0, explicacion: "Las marcas de dedos en la lente lavan la imagen. La batería tienta como causa, pero no cambia la foto." },
    { q: "La parte plateada de tu producto sale toda blanca, sin detalle. ¿Qué hacés?", opciones: ["Subís la exposición","Usás flash","Usás un filtro","Bajás la exposición con la barra o el solcito"], correcta: 3, explicacion: "Bajar la exposición recupera los detalles. El flash tienta para iluminar, pero da más brillo." },
    { q: "Querés que el enfoque y la luz no cambien mientras acomodás el producto. ¿Qué hacés?", opciones: ["Movés el celular","Dejás el dedo apretado hasta que diga bloqueo (AE/AF)","Apagás la cámara","Hacés zoom"], correcta: 1, explicacion: "El bloqueo fija enfoque y exposición. Mover el celular tienta, pero lo hace recalcular." },
    { q: "Querés mostrar un detalle de cerca. ¿Hacés zoom con los dedos?", opciones: ["Sí, siempre","Sí, al máximo","No: te acercás con el celular o usás una lente 2x real","Sí, y después agrandás más"], correcta: 2, explicacion: "El zoom digital pierde nitidez. Hacer zoom tienta por cómodo, pero sale granulado." },
    { q: "¿Cuál es la diferencia entre zoom óptico y digital?", opciones: ["El óptico usa otra lente y no pierde calidad; el digital recorta y pierde nitidez","Son iguales","El digital es mejor","El óptico es más lento"], correcta: 0, explicacion: "El digital solo agranda la imagen. \"Son iguales\" tienta porque los dos acercan, pero no." },
    { q: "Hay poca luz y las fotos salen movidas. ¿Qué hacés?", opciones: ["Usás zoom","Disparás más rápido","Movés el celular mientras disparás","Apoyás el celular y usás el temporizador de 2 segundos"], correcta: 3, explicacion: "Apoyado y con temporizador no se mueve. Disparar más rápido tienta, pero la mano sigue moviéndose." },
    { q: "Te acercaste mucho y el celular no enfoca. ¿Qué hacés?", opciones: ["Te acercás más","Te alejás un poco","Usás zoom digital al máximo","Usás flash"], correcta: 1, explicacion: "Cada lente tiene una distancia mínima. Acercarte más tienta, pero empeora." },
    { q: "¿Para qué sirve la cuadrícula de la cámara?", opciones: ["Para cambiar colores","Para hacer zoom","Para encuadrar derecho y ubicar el producto","Para borrar el fondo"], correcta: 2, explicacion: "Las líneas ayudan a alinear. Cambiar colores tienta, pero eso hacen los filtros." },
    { q: "Usás modo retrato y el borde del producto sale \"comido\". ¿Qué hacés para el catálogo?", opciones: ["Usás el modo foto normal","Más modo retrato","Un filtro","Zoom digital"], correcta: 0, explicacion: "El retrato a veces corta mal los bordes. Seguir con retrato tienta por el fondo desenfocado, pero arruina el borde." },
    { q: "¿Usás un filtro de la cámara para las fotos de catálogo?", opciones: ["Sí, el más colorido","Sí, siempre","Sí, en blanco y negro","No: el color tiene que ser el real"], correcta: 3, explicacion: "En catálogo el color tiene que coincidir con el producto. El filtro tienta para que luzca, pero engaña al cliente." },
    { q: "¿Cuántas fotos conviene sacar de cada producto?", opciones: ["Una sola","5 o 6, variando un poco, para elegir la mejor","200","Ninguna, mejor dibujarlo"], correcta: 1, explicacion: "Varias opciones permiten elegir. Una sola tienta por rápido, pero si salió mal no hay otra." },
  ],
},
{
  id: "composicion",
  icono: "📐",
  titulo: "Composición y ángulos",
  nivel: "Intermedio",
  objetivos: [
    "Usar la regla de los tercios para ubicar el producto",
    "Elegir el ángulo según la forma del producto",
    "Armar una serie de fotos de catálogo con el mismo encuadre",
  ],
  lecciones: [
    { titulo: "La regla de los tercios", video: {"id":"hZRpQiqrziE","t":"Regla de los tercios explicada en un minuto · Army Films (1:00)"}, html: `
      <p class="idea">La <strong>regla de los tercios</strong> divide la foto en 9 partes con dos líneas verticales y dos horizontales. Ubicar el producto sobre una línea o un cruce da fotos más interesantes que ponerlo siempre en el centro.</p>
      <pre><code>┌──────┬──────┬──────┐
│      │      │      │
├──────●──────●──────┤   ● = puntos fuertes:
│      │      │      │       buenos lugares para el producto
├──────●──────●──────┤
│      │      │      │
└──────┴──────┴──────┘</code></pre>
      <table>
        <tr><th>Foto</th><th>Dónde va el producto</th></tr>
        <tr><td>Catálogo (fondo liso)</td><td>En el centro, para que se vea entero y parejo: acá el centro está bien</td></tr>
        <tr><td>Ambiente o redes</td><td>Sobre un punto fuerte, dejando aire hacia donde "mira" el producto</td></tr>
        <tr><td>Con texto encima (una promo)</td><td>En un tercio, dejando lugar libre para el texto</td></tr>
      </table>
      <p><strong>Dejá aire alrededor:</strong> no cortes el producto en los bordes y dejá un margen. Así después podés recortar para cada red social sin perder partes.</p>
      <p><strong>Es una guía, no una ley:</strong> en catálogo, el centro manda. En las fotos de ambiente, probá las dos y elegí la que te guste más.</p>
      <p>Por ejemplo, para una promo de Instagram, Mati puso el mate en el tercio izquierdo y dejó el lado derecho libre para escribir "20 % off esta semana".</p>` },
    { titulo: "El ángulo según el producto", html: `
      <p class="idea">El <strong>ángulo</strong> es desde dónde mirás el producto. Cada forma tiene su mejor ángulo: el que muestra lo que la persona quiere ver antes de comprar.</p>
      <table>
        <tr><th>Ángulo</th><th>Cómo se saca</th><th>Bueno para</th></tr>
        <tr><td>De frente (a la altura del producto)</td><td>El celular a la misma altura que el producto</td><td>Botellas, frascos, mates, cosas altas</td></tr>
        <tr><td>45 grados</td><td>Desde arriba en diagonal, como lo verías en una mesa</td><td>Tazas, cajas, platos con comida: muestra frente y arriba</td></tr>
        <tr><td>Cenital (desde arriba)</td><td>El celular paralelo a la mesa, mirando hacia abajo</td><td>Cosas planas: ropa doblada, papelería, joyas sobre una superficie</td></tr>
        <tr><td>Detalle (macro)</td><td>Muy cerca de una parte</td><td>Texturas, costuras, grabados, terminaciones</td></tr>
      </table>
      <p><strong>Para una publicación de venta, pensá en 4 a 6 fotos:</strong> el frente, otro ángulo, un detalle, la escala (en la mano o al lado de algo) y, si aplica, el producto en uso.</p>
      <pre><code>Serie de un mate:
1. De frente, fondo blanco
2. 45 grados, con la boca del mate
3. Detalle del grabado
4. En la mano (escala)
5. En uso, con yerba y bombilla</code></pre>
      <p><strong>En el cenital, el celular bien paralelo:</strong> si queda inclinado, el producto se deforma (un cuadrado sale como trapecio). La cuadrícula ayuda.</p>
      <p>Por ejemplo, Mati sacaba los mates siempre desde arriba y no se veía el grabado del costado. Cambió a de frente y a 45 grados, y empezó a recibir preguntas por el diseño.</p>` },
    { titulo: "Un catálogo parejo", html: `
      <p class="idea">Cuando tenés muchos productos, las fotos de catálogo tienen que verse <strong>parejas</strong>: mismo fondo, misma luz, mismo ángulo y el producto del mismo tamaño en la foto. Así tu tienda se ve ordenada y confiable.</p>
      <table>
        <tr><th>Mantené igual</th><th>Cómo</th></tr>
        <tr><td>Fondo y luz</td><td>Misma cartulina, misma ventana, misma hora</td></tr>
        <tr><td>Posición del celular</td><td>Marcá con cinta en la mesa dónde va el producto y dónde apoyás el celular</td></tr>
        <tr><td>Tamaño del producto en la foto</td><td>Misma distancia; si un producto es más grande, se ve más grande (está bien)</td></tr>
        <tr><td>Orden de las fotos</td><td>Siempre la misma serie: frente, ángulo, detalle, escala</td></tr>
      </table>
      <pre><code>Puesto fijo de fotos:
- Cinta en la mesa: una cruz donde va el producto.
- Una pila de libros siempre en el mismo lugar para el celular.
- Una nota con: hora, exposición usada y orden de fotos.</code></pre>
      <p><strong>Sacá en tandas:</strong> armar el puesto lleva tiempo. Sacá todos los productos nuevos el mismo día, uno detrás del otro, sin mover nada.</p>
      <p>Por ejemplo, la tienda de Mati tenía fotos de todos los tamaños y colores. Marcó con cinta el lugar del mate y del celular, y en una mañana rehizo las fotos de 15 productos: la tienda pasó a verse prolija.</p>` },
  ],
  practica: [
    "Sacá una foto de ambiente con el producto en el centro y otra en un punto fuerte de la cuadrícula, y anotá cuál te gusta más y por qué.",
    "Sacá la serie de 5 fotos de un producto (frente, 45 grados, detalle, escala y uso) y anotá cuál fue la más difícil.",
    "Armá un puesto fijo con cinta, sacá 5 productos sin mover nada y anotá cuántos minutos te llevó.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: la regla de los tercios", url: "https://edu.gcfglobal.org/es/fotografia-basica/la-regla-de-los-tercios/1/" },
    { t: "GCFAprendeLibre: curso gratis de fotografía básica", url: "https://edu.gcfglobal.org/es/fotografia-basica/" },
    { t: "Adobe: guía de fotografía de producto (en español)", url: "https://www.adobe.com/es/creativecloud/photography/discover/product-photography.html" },
  ],
  quiz: [
    { q: "¿Qué es la regla de los tercios?", opciones: ["Sacar 3 fotos de cada producto","Usar 3 luces","Dividir la foto en 9 partes y ubicar el producto sobre líneas o cruces","Recortar un tercio de la foto"], correcta: 2, explicacion: "Es una guía de ubicación. Tres fotos tienta por el número, pero no es eso." },
    { q: "Si vas a sacar una foto de catálogo en fondo liso, ¿dónde ponés el producto?", opciones: ["En el centro, para que se vea entero y parejo","En una esquina","Cortado en el borde","Muy chiquito abajo"], correcta: 0, explicacion: "En catálogo el centro manda. La esquina tienta por la regla de los tercios, pero acá no aplica." },
    { q: "Querés poner un texto de promoción encima de la foto. ¿Cómo la sacás?", opciones: ["Con el producto en el centro y el texto encima","Sin lugar libre","Con el producto cortado","Con el producto en un tercio, dejando lugar libre para el texto"], correcta: 3, explicacion: "El espacio libre es para el texto. En el centro tienta, pero el texto tapa el producto." },
    { q: "¿Por qué conviene dejar aire alrededor del producto?", opciones: ["Para que se vea más chico","Para poder recortar para cada red sin cortarlo","No conviene","Para gastar menos batería"], correcta: 1, explicacion: "Con margen podés recortar en cuadrado o vertical. \"No conviene\" tienta por llenar la foto, pero después no podés recortar." },
    { q: "Vas a fotografiar una botella alta. ¿Qué ángulo usás?", opciones: ["Cenital, desde arriba","Desde abajo del todo","De frente, a la altura del producto","Solo detalle"], correcta: 2, explicacion: "De frente se ve la forma y la etiqueta. Desde arriba tienta, pero solo verías la tapa." },
    { q: "Si vas a fotografiar ropa doblada, ¿qué ángulo conviene?", opciones: ["Cenital, desde arriba","De frente al ras de la mesa","Desde el piso","Muy de costado"], correcta: 0, explicacion: "Las cosas planas se ven enteras desde arriba. De frente tienta, pero se ve solo el borde." },
    { q: "Querés mostrar la costura o el grabado de tu producto. ¿Qué foto agregás?", opciones: ["Una más lejos","Una con más objetos","Una con filtro","Una de detalle, de cerca"], correcta: 3, explicacion: "El detalle muestra la terminación. Más lejos tienta para ver todo, pero el detalle no se aprecia." },
    { q: "Para una publicación de venta, ¿cuántas fotos conviene armar?", opciones: ["1 sola","Entre 4 y 6: frente, otro ángulo, detalle, escala y uso","30","Ninguna, solo texto"], correcta: 1, explicacion: "Varias fotos responden las dudas antes de que pregunten. Una sola tienta por rápido, pero deja dudas." },
    { q: "Si en una foto cenital, una caja cuadrada sale como trapecio, ¿qué pasó?", opciones: ["La caja está deformada","Falta luz","El celular no estaba paralelo a la mesa","El fondo es blanco"], correcta: 2, explicacion: "La inclinación deforma. La caja tienta como culpable, pero es el ángulo." },
    { q: "Tu tienda tiene fotos de distintos tamaños y colores. ¿Qué te ayuda?", opciones: ["Un puesto fijo: mismo fondo, misma luz y el producto y el celular siempre en el mismo lugar","Sacar cada producto en un lugar distinto","Usar filtros distintos","Sacarlas a cualquier hora"], correcta: 0, explicacion: "Un puesto fijo da fotos parejas. Variar tienta por creatividad, pero la tienda se ve desordenada." },
    { q: "¿Cómo marcás dónde va el producto para que siempre quede igual?", opciones: ["A ojo cada vez","Con un marcador en el producto","No hace falta","Con una cruz de cinta en la mesa"], correcta: 3, explicacion: "La cinta repite la posición exacta. A ojo tienta, pero cada foto sale distinta." },
    { q: "Tenés 15 productos nuevos. ¿Cómo los fotografiás?", opciones: ["Uno por día en lugares distintos","En una tanda, el mismo día, sin mover el puesto","Cada uno con otra luz","Sin fondo"], correcta: 1, explicacion: "En tanda salen todas iguales y ahorrás tiempo. Uno por día tienta, pero cambian la luz y el lugar." },
  ],
},
{
  id: "edicion",
  icono: "🎚️",
  titulo: "Editar sin engañar",
  nivel: "Intermedio",
  objetivos: [
    "Hacer los ajustes básicos: recortar, enderezar, luz y blancos",
    "Mantener el color real del producto al editar",
    "Recortar la foto en el formato de cada red",
  ],
  lecciones: [
    { titulo: "Los ajustes básicos", video: {"id":"rbTSIdy4o7U","t":"Snapseed: la mejor app gratis para editar fotos · ChicaGeek (14:08)"}, html: `
      <p class="idea">Una buena foto necesita poca edición. Con el editor que trae el celular o una app gratis como <strong>Snapseed</strong> alcanza para los <strong>ajustes básicos</strong>, siempre en este orden.</p>
      <table>
        <tr><th>Orden</th><th>Ajuste</th><th>Para qué</th></tr>
        <tr><td>1</td><td>Enderezar</td><td>Que las líneas de la mesa queden horizontales</td></tr>
        <tr><td>2</td><td>Recortar</td><td>Sacar lo que sobra y dejar el producto bien ubicado</td></tr>
        <tr><td>3</td><td>Exposición o brillo</td><td>Que la foto no quede ni oscura ni quemada</td></tr>
        <tr><td>4</td><td>Blancos (balance de blancos o temperatura)</td><td>Que el fondo blanco se vea blanco, no amarillo ni azulado</td></tr>
        <tr><td>5</td><td>Contraste y nitidez, poquito</td><td>Que se vea definido, sin exagerar</td></tr>
      </table>
      <p>El <strong>balance de blancos</strong> corrige el color general de la foto. Si la foto salió amarillenta, se mueve hacia el azul hasta que el blanco se vea blanco; si salió azulada, al revés.</p>
      <p><strong>Editá una y copiá a las demás:</strong> muchas apps dejan copiar los ajustes de una foto y pegarlos en las otras de la misma tanda. Así el catálogo queda parejo.</p>
      <p><strong>Guardá el original:</strong> la mayoría de los editores guardan una copia. Si te pasaste, volvés a empezar.</p>
      <p>Por ejemplo, la foto de un mate de Mati salió con el fondo crema en vez de blanco. Movió la temperatura un poco hacia el azul y el fondo quedó blanco, con el color de la calabaza intacto.</p>` },
    { titulo: "El color real", html: `
      <p class="idea">Editar está bien; <strong>engañar no</strong>. El cliente tiene que recibir lo mismo que vio. Si la foto muestra otro color u otro tamaño, va a reclamar, y con razón.</p>
      <table>
        <tr><th>Ajuste que está bien</th><th>Ajuste que engaña</th></tr>
        <tr><td>Corregir que salió oscura o amarillenta</td><td>Cambiar el color del producto</td></tr>
        <tr><td>Sacar una pelusa o una mancha del fondo</td><td>Borrar una falla del producto (un raspón, una costura torcida)</td></tr>
        <tr><td>Recortar y enderezar</td><td>Estirar el producto para que parezca más grande</td></tr>
        <tr><td>Un poco de contraste</td><td>Filtros que cambian todos los colores</td></tr>
      </table>
      <pre><code>La prueba del color:
1. Poné el producto real al lado de la pantalla, con luz de día.
2. Compará: ¿el color es el mismo?
3. Si no, ajustá la temperatura y la saturación hasta que coincida.</code></pre>
      <p><strong>La saturación</strong> es qué tan intensos son los colores. Subirla mucho hace que un rojo parezca más vivo de lo que es: el cliente recibe uno más apagado.</p>
      <p><strong>Las pantallas muestran distinto:</strong> el mismo color se ve un poco diferente en cada celular. Si un color es difícil (un verde, un bordó), aclaralo en el texto: "el color real es un bordó oscuro".</p>
      <p><strong>Quitar el fondo con apps</strong> sirve, pero revisá los bordes: a veces se comen partes del producto o dejan restos.</p>
      <p>Por ejemplo, Mati subió la saturación de un mate teñido de verde y quedó fluor. Una clienta lo compró y le dijo que era más oscuro. Desde entonces hace la prueba del color antes de publicar.</p>` },
    { titulo: "El formato para cada lugar", html: `
      <p class="idea">Cada lugar muestra las fotos con una forma distinta: <strong>cuadrada, vertical o a pantalla completa</strong>. Sacá con aire alrededor y recortá después para cada uno.</p>
      <table>
        <tr><th>Formato</th><th>Proporción</th><th>Dónde se usa</th></tr>
        <tr><td>Cuadrado</td><td>1:1</td><td>Publicaciones de redes, muchas tiendas online</td></tr>
        <tr><td>Vertical</td><td>4:5 o 3:4</td><td>Publicaciones de redes (ocupan más pantalla en el celular)</td></tr>
        <tr><td>Pantalla completa vertical</td><td>9:16</td><td>Historias y videos cortos</td></tr>
        <tr><td>Horizontal</td><td>16:9 o 3:2</td><td>Portadas, banners de una página web</td></tr>
      </table>
      <p>Una <strong>proporción</strong> como 4:5 dice la relación entre el ancho y el alto: 4 de ancho por 5 de alto. No es el tamaño, es la forma. Los editores tienen esos recortes ya armados.</p>
      <p><strong>Los formatos que aceptan las redes y las tiendas cambian:</strong> fijate en la ayuda de cada una. La regla que no cambia: sacá con margen para poder recortar en cualquier forma.</p>
      <p><strong>El peso del archivo:</strong> para la web y WhatsApp, una foto de unos 1.200 a 2.000 píxeles del lado más largo alcanza y carga rápido. Las fotos enormes tardan y gastan datos.</p>
      <p>Por ejemplo, Mati sacaba las fotos muy justas y al recortarlas en cuadrado se le cortaba la bombilla. Ahora deja aire alrededor y de la misma foto saca la cuadrada, la vertical y la de historias.</p>` },
  ],
  practica: [
    "Editá 3 fotos con los 5 ajustes en orden y anotá cuál ajuste cambió más cada foto.",
    "Hacé la prueba del color con 2 productos, poniéndolos al lado de la pantalla, y anotá si tuviste que corregir el color.",
    "Recortá una misma foto en cuadrado, vertical y 9:16, y anotá en cuál quedó mejor el producto.",
  ],
  recursos: [
    { t: "Snapseed: editor de fotos gratis de Google (Google Play)", url: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed" },
    { t: "GCFAprendeLibre: curso gratis de fotografía básica", url: "https://edu.gcfglobal.org/es/fotografia-basica/" },
    { t: "Adobe: guía de fotografía de producto (en español)", url: "https://www.adobe.com/es/creativecloud/photography/discover/product-photography.html" },
  ],
  quiz: [
    { q: "Vas a editar una foto. ¿Qué hacés primero?", opciones: ["Poner un filtro","Subir la saturación al máximo","Enderezar y recortar","Agregar texto"], correcta: 2, explicacion: "Primero la forma, después la luz y el color. El filtro tienta por rápido, pero no es lo primero." },
    { q: "Si el fondo blanco salió amarillento, ¿qué ajustás?", opciones: ["El balance de blancos (temperatura), hacia el azul","La saturación hacia arriba","El zoom","El contraste al máximo"], correcta: 0, explicacion: "El balance de blancos corrige el tono general. La saturación tienta, pero intensifica el amarillo." },
    { q: "Editaste una foto de una tanda y querés que las demás queden iguales. ¿Qué hacés?", opciones: ["Editás cada una distinta","No editás las demás","Usás otro filtro en cada una","Copiás los ajustes y los pegás en las otras"], correcta: 3, explicacion: "Así el catálogo queda parejo. Editar cada una distinta tienta, pero quedan desparejas." },
    { q: "Si te pasaste con la edición, ¿qué te salva?", opciones: ["Editar más","Tener guardado el original","Borrar la foto","Sacarle una captura de pantalla"], correcta: 1, explicacion: "Con el original empezás de nuevo. La captura tienta por rápida, pero pierde calidad." },
    { q: "Tu producto tiene un raspón. ¿Lo borrás al editar?", opciones: ["Sí, siempre","Sí, si es chico","No: borrar una falla del producto es engañar al cliente","Sí, y no lo decís"], correcta: 2, explicacion: "El cliente tiene que recibir lo que vio. \"Si es chico\" tienta, pero igual lo va a ver." },
    { q: "¿Cuál de estos ajustes está bien?", opciones: ["Sacar una pelusa del fondo","Cambiar el color del producto","Estirar el producto para que parezca más grande","Borrar una costura torcida"], correcta: 0, explicacion: "El fondo no es el producto. Las otras opciones cambian lo que el cliente va a recibir." },
    { q: "Querés saber si el color de la foto es el real. ¿Cómo lo comprobás?", opciones: ["Le preguntás a la app","Lo comparás con la foto de otro vendedor","No se puede saber","Ponés el producto al lado de la pantalla, con luz de día, y comparás"], correcta: 3, explicacion: "Comparar con el producto real es la prueba. La app tienta, pero no conoce tu producto." },
    { q: "¿Qué es la saturación?", opciones: ["El brillo de la pantalla","Qué tan intensos son los colores","El tamaño de la foto","El enfoque"], correcta: 1, explicacion: "Más saturación, colores más vivos. El brillo tienta, pero es la luz general." },
    { q: "Tu producto es de un bordó difícil de fotografiar. ¿Qué agregás?", opciones: ["Nada","Un filtro rojo","En el texto: \"el color real es un bordó oscuro\"","Más saturación"], correcta: 2, explicacion: "Las pantallas muestran distinto. Más saturación tienta, pero lo aleja del real." },
    { q: "Usás una app para quitar el fondo. ¿Qué revisás?", opciones: ["Los bordes: que no se haya comido partes del producto","Nada, siempre sale bien","El color del fondo nuevo solamente","La hora"], correcta: 0, explicacion: "Las apps a veces cortan mal. \"Siempre sale bien\" tienta, pero puede faltar un pedazo." },
    { q: "Querés usar la misma foto en una publicación cuadrada y en una historia. ¿Cómo la sacás?", opciones: ["Bien justa al producto","Muy de cerca","En horizontal siempre","Con aire alrededor, para poder recortarla en las dos formas"], correcta: 3, explicacion: "El margen permite recortar en cualquier forma. Justa tienta por llenar, pero al recortar se corta el producto." },
    { q: "¿Qué proporción usan las historias y los videos cortos?", opciones: ["1:1","9:16, pantalla completa vertical","16:9 horizontal","4:3"], correcta: 1, explicacion: "Ocupan toda la pantalla del celular. 16:9 tienta, pero es horizontal." },
  ],
},
{
  id: "tipos",
  icono: "🛍️",
  titulo: "Según el producto",
  nivel: "Avanzado",
  objetivos: [
    "Fotografiar productos brillantes y de vidrio controlando los reflejos",
    "Mostrar ropa y textiles de forma prolija",
    "Sacar comida, joyas y productos grandes con sus trucos propios",
  ],
  lecciones: [
    { titulo: "Brillantes, vidrio y metal", video: {"id":"crV4artnzqY","t":"Cómo fotografiar objetos brillantes · Felipe Passolas Fotografía (5:43)"}, html: `
      <p class="idea">Los productos brillantes (vidrio, metal, cerámica esmaltada) <strong>reflejan</strong> todo lo que tienen alrededor: la ventana, la cocina y hasta a vos con el celular. El truco es controlar <strong>qué</strong> se refleja.</p>
      <table>
        <tr><th>Problema</th><th>Solución</th></tr>
        <tr><td>Se ve el reflejo de la ventana como un rectángulo blanco</td><td>Difusor en la ventana: el reflejo pasa a ser una franja suave</td></tr>
        <tr><td>Te ves reflejado vos o el celular</td><td>Una cartulina blanca grande con un agujerito para la lente, delante tuyo</td></tr>
        <tr><td>Se reflejan objetos de la habitación</td><td>Rodeá el producto con cartulinas blancas (o negras, para bordes oscuros)</td></tr>
        <tr><td>Un frasco transparente "desaparece"</td><td>Fondo blanco con luz de atrás, o bordes negros con cartulinas negras a los costados</td></tr>
      </table>
      <p><strong>Cartulinas negras para dar forma:</strong> en el vidrio y el metal, unas franjas negras a los costados se reflejan como bordes oscuros y marcan la silueta del producto.</p>
      <p><strong>Moverse un poco cambia todo:</strong> con brillantes, girá el producto de a poquito y mirá en la pantalla cómo cambian los reflejos antes de disparar.</p>
      <p>Por ejemplo, las bombillas de alpaca de Mati reflejaban la ventana y su propia remera. Con un difusor en la ventana y una cartulina blanca con un agujero para la lente, quedaron con un brillo parejo.</p>` },
    { titulo: "Ropa y textiles", video: {"id":"vFs_HQgtVds","t":"Fotos profesionales de ropa sin edición, solo con tu celular · March Cadena (16:05)"}, html: `
      <p class="idea">La ropa se ve mejor <strong>planchada, con forma y mostrando cómo queda</strong>. Hay tres maneras de sacarla, y conviene combinarlas.</p>
      <table>
        <tr><th>Forma</th><th>Cómo</th><th>Para qué</th></tr>
        <tr><td>Plana (desde arriba)</td><td>Sobre una superficie lisa, acomodada y sin arrugas, foto cenital</td><td>Mostrar la prenda entera, el corte y el color</td></tr>
        <tr><td>Colgada</td><td>En una percha, sobre una pared lisa</td><td>Mostrar la caída de la tela</td></tr>
        <tr><td>Puesta</td><td>Una persona con la prenda (con su permiso)</td><td>Mostrar cómo queda en el cuerpo</td></tr>
      </table>
      <pre><code>Lista antes de sacar ropa:
□ Planchada o sin arrugas (vapor)
□ Sin pelusas ni pelos (un rodillo o cinta de embalar)
□ Etiquetas y hilos sueltos escondidos
□ Bien acomodada: mangas y cuello simétricos
□ Una foto de la etiqueta de talle o de la tela, si ayuda
□ Las medidas en el texto (largo, ancho), no solo el talle</code></pre>
      <p><strong>El talle no alcanza:</strong> cada marca talla distinto. Medí la prenda plana (ancho de axila a axila y largo) y poné los números: evitás cambios y devoluciones.</p>
      <p><strong>Personas en las fotos:</strong> pedí permiso por escrito si vas a publicar a alguien, y nunca uses fotos de chicos sin el permiso de su madre, padre o tutor.</p>
      <p>Por ejemplo, una amiga de Mati vende remeras y las fotografiaba arrugadas sobre la cama. Con vapor, un rodillo de pelusas y la foto plana desde arriba, sus fotos se ven de tienda.</p>` },
    { titulo: "Comida, joyas y productos grandes", video: {"id":"O3M0Ovzo0Oo","t":"Fotografía de producto con celular: joyería y bisutería · Rod Hilfer (13:59)"}, html: `
      <p class="idea">Cada tipo de producto tiene su truco. Lo que no cambia: <strong>luz de ventana, fondo ordenado y el producto como protagonista</strong>.</p>
      <table>
        <tr><th>Producto</th><th>Truco principal</th><th>Error común</th></tr>
        <tr><td>Comida</td><td>Luz de costado o desde atrás para mostrar textura; fotografiarla recién hecha</td><td>Luz de frente que la aplana; flash</td></tr>
        <tr><td>Joyas y bijouterie</td><td>Muy de cerca, fondo oscuro o neutro, apoyadas en algo que dé escala (una mano, una piedra)</td><td>Fondo con dibujos que compite con la pieza</td></tr>
        <tr><td>Muebles y productos grandes</td><td>En un ambiente real y ordenado, de frente y a 45 grados, con algo que muestre el tamaño</td><td>Un rincón desordenado o mal iluminado</td></tr>
        <tr><td>Cosmética y frascos</td><td>Como los brillantes: controlar reflejos; mostrar la textura del producto aparte</td><td>Etiqueta que no se lee</td></tr>
      </table>
      <p><strong>Con comida, vale lo mismo que con todo:</strong> lo que mostrás es lo que el cliente espera recibir. No uses fotos de internet ni de otro local.</p>
      <p><strong>Las joyas chiquitas</strong> necesitan enfoque cercano: si tu celular tiene modo macro, probalo; si no, acercate hasta donde enfoque y después recortá un poco.</p>
      <p><strong>Productos grandes:</strong> si no tenés un ambiente lindo, una pared lisa y un piso ordenado alcanzan. Sacá desde un poco más lejos y a la altura del medio del mueble.</p>
      <p>Por ejemplo, Mati probó fotografiar unos aros de alpaca que vende su hermana: sobre fondo de pizarra negra y con una mano para la escala, se veían mucho mejor que sobre el mantel floreado.</p>` },
  ],
  practica: [
    "Fotografiá un producto brillante con y sin cartulinas alrededor, y anotá qué reflejos desaparecieron.",
    "Fotografiá una prenda plana después de la lista de control y anotá las medidas que pondrías en el texto.",
    "Elegí un producto de los de la tabla (comida, joya o grande), aplicá su truco y anotá qué error común evitaste.",
  ],
  recursos: [
    { t: "Adobe: guía de fotografía de producto (en español)", url: "https://www.adobe.com/es/creativecloud/photography/discover/product-photography.html" },
    { t: "GCFAprendeLibre: curso gratis de fotografía básica", url: "https://edu.gcfglobal.org/es/fotografia-basica/" },
    { t: "Curso de este sitio: Vender por internet (publicaciones, cobros y envíos)", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
  ],
  quiz: [
    { q: "Tu frasco de vidrio refleja la ventana como un rectángulo blanco fuerte. ¿Qué hacés?", opciones: ["Usás flash","Subís la exposición","Ponés un difusor en la ventana para que el reflejo sea suave","Lo fotografiás de noche con lámpara"], correcta: 2, explicacion: "El difusor convierte el reflejo en una franja suave. El flash tienta, pero suma otro reflejo." },
    { q: "Te ves reflejado en una tetera de metal. ¿Qué usás?", opciones: ["Una cartulina blanca con un agujerito para la lente, delante tuyo","Una remera más clara","Zoom digital al máximo","Más luz de lámpara"], correcta: 0, explicacion: "La cartulina te tapa y solo asoma la lente. El zoom tienta para alejarte, pero pierde calidad." },
    { q: "Querés marcar la silueta de un producto de vidrio. ¿Qué agregás a los costados?", opciones: ["Más objetos de colores","Un fondo estampado","Nada","Cartulinas negras, que se reflejan como bordes oscuros"], correcta: 3, explicacion: "Las franjas negras dibujan el borde. Objetos de colores tientan por decoración, pero se reflejan." },
    { q: "Con un producto brillante, ¿qué hacés antes de disparar?", opciones: ["Disparás sin mirar","Lo girás de a poco mirando cómo cambian los reflejos","Lo movés rápido","Le ponés aceite para que brille"], correcta: 1, explicacion: "Un pequeño giro cambia los reflejos. Disparar sin mirar tienta por rápido, pero salen reflejos feos." },
    { q: "Si vas a mostrar el corte y el color de una remera entera, ¿cómo la sacás?", opciones: ["Arrugada sobre la cama","Doblada en un cajón","Plana sobre una superficie lisa, desde arriba","Hecha un bollo"], correcta: 2, explicacion: "Plana y desde arriba se ve entera. La cama tienta por cómoda, pero las arrugas se ven." },
    { q: "Antes de fotografiar ropa, ¿qué revisás?", opciones: ["Que esté sin arrugas, sin pelusas y con las etiquetas escondidas","Solo el precio","Nada","Que esté mojada"], correcta: 0, explicacion: "Los detalles de prolijidad se notan mucho en foto. \"Nada\" tienta, pero las pelusas se ven." },
    { q: "Si vendés ropa y te devuelven por el talle, ¿qué agregás a la publicación?", opciones: ["Solo \"talle M\"","Una foto más","Un filtro","Las medidas de la prenda: ancho y largo"], correcta: 3, explicacion: "Cada marca talla distinto: las medidas evitan cambios. \"Talle M\" tienta por simple, pero no alcanza." },
    { q: "Querés publicar la foto de una amiga usando tu prenda. ¿Qué necesitás?", opciones: ["Nada, es tu prenda","Su permiso","Que no se le vea la cara","Ponerle un filtro"], correcta: 1, explicacion: "Su imagen es suya. \"Es tu prenda\" tienta, pero la persona tiene derecho sobre su foto." },
    { q: "Si vas a fotografiar una tarta, ¿qué luz muestra mejor la textura?", opciones: ["De frente con flash","Una lámpara amarilla arriba","De costado o desde atrás","Sin luz"], correcta: 2, explicacion: "La luz lateral marca la textura. El flash de frente tienta, pero la aplana." },
    { q: "Querés publicar tu menú y no tenés fotos de un plato. ¿Usás una de internet?", opciones: ["No: lo que mostrás es lo que el cliente espera recibir","Sí, si es parecida","Sí, de otro local","Sí, si es más linda"], correcta: 0, explicacion: "Una foto ajena engaña al cliente. \"Si es parecida\" tienta, pero no es tu plato." },
    { q: "Fotografiás unos aros chiquitos. ¿Qué fondo y qué truco usás?", opciones: ["Mantel floreado","Fondo con muchos colores","Desde muy lejos","Fondo oscuro o neutro, muy de cerca y con una mano o algo que dé escala"], correcta: 3, explicacion: "El fondo simple deja ver la pieza. El floreado tienta por alegre, pero compite con los aros." },
    { q: "Vendés muebles y no tenés un ambiente lindo. ¿Qué alcanza?", opciones: ["El rincón como esté","Una pared lisa y un piso ordenado, sacando a la altura del medio del mueble","Una foto de un catálogo de otra marca","Solo detalles sin el mueble entero"], correcta: 1, explicacion: "Ordenado y simple alcanza. El rincón como esté tienta por rápido, pero distrae." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu catálogo",
  nivel: "Avanzado",
  objetivos: [
    "Armar un puesto de fotos fijo con luz, fondo y celular siempre en el mismo lugar",
    "Fotografiar y editar 10 productos en una tanda pareja",
    "Evaluar el catálogo con la rúbrica y mejorar las fotos flojas",
  ],
  lecciones: [
    { titulo: "Tu puesto y tu lista", html: `
      <p class="idea">El proyecto final es un <strong>catálogo de 10 productos</strong> con fotos parejas. Empieza por dejar armado tu <strong>puesto de fotos</strong> y escribir tu lista de control.</p>
      <pre><code>Mi puesto de fotos (ejemplo de Mati):
Lugar:      mesa al lado de la ventana del living (mira al sur)
Hora:       sábados a las 10
Luz:        ventana con papel manteca, cartulina blanca a la derecha
Fondo:      cartulina blanca en curva
Celular:    sobre 3 libros, marca de cinta en la mesa
Cámara:     cuadrícula activada, sin flash, temporizador 2 s
Serie:      frente · 45 grados · detalle · mano · en uso</code></pre>
      <table>
        <tr><th>Lista de control antes de cada foto</th></tr>
        <tr><td>□ Lámparas apagadas, sin flash</td></tr>
        <tr><td>□ Lente limpia</td></tr>
        <tr><td>□ Producto limpio, sin pelusas ni huellas</td></tr>
        <tr><td>□ Producto en la marca de cinta</td></tr>
        <tr><td>□ Tocar para enfocar y ajustar la exposición</td></tr>
      </table>
      <p><strong>Escribí tu puesto en una nota:</strong> la próxima vez que tengas productos nuevos, lo armás igual en minutos y las fotos nuevas combinan con las viejas.</p>
      <p>Por ejemplo, Mati armó su puesto un sábado, sacó los 10 mates y las bombillas en dos horas y guardó la nota. El mes siguiente sumó 4 productos y combinaron perfecto con los anteriores.</p>` },
    { titulo: "La tanda: sacar, elegir y editar", html: `
      <p class="idea">La tanda tiene tres partes: <strong>sacar todas</strong> las fotos sin mover el puesto, <strong>elegir</strong> las mejores y <strong>editar</strong> todas igual.</p>
      <pre><code>1. Sacar:  la serie completa de cada producto, varias tomas de cada foto.
2. Elegir: de cada toma, la más nítida y mejor ubicada.
           Borrá las movidas, las desenfocadas y las repetidas.
3. Editar: una foto bien editada → copiar ajustes → pegar en las demás.
4. Revisar: la prueba del color con el producto al lado.
5. Exportar: en los formatos que usás (cuadrado, vertical, 9:16).
6. Nombrar: mate-calabaza-grabado-01.jpg, para encontrarlas.</code></pre>
      <table>
        <tr><th>Al elegir, descartá la foto si...</th></tr>
        <tr><td>Está movida o el producto no está enfocado</td></tr>
        <tr><td>Hay un reflejo o una sombra que distrae</td></tr>
        <tr><td>El producto está cortado o torcido</td></tr>
        <tr><td>Se ve algo del fondo que no debería (un cable, la cinta)</td></tr>
      </table>
      <p><strong>Nombrá los archivos con el producto:</strong> "IMG_4523.jpg" no te dice nada en tres meses; "mate-calabaza-grabado-01.jpg" sí.</p>
      <p>Por ejemplo, de 180 tomas Mati se quedó con 50 (5 por producto). Editó una, copió los ajustes a las otras 49 y en una hora tenía el catálogo listo.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Revisá tu catálogo con la <strong>rúbrica</strong>. Mirá las fotos en el celular, que es donde las va a ver la mayoría de tus clientes.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Luz</td><td>Pareja, sin sombras duras ni partes quemadas</td><td>Alguna foto con problemas</td><td>Oscuras o con flash</td></tr>
        <tr><td>Color real</td><td>Pasan la prueba del color</td><td>Alguna se aleja un poco</td><td>Colores cambiados o filtros</td></tr>
        <tr><td>Nitidez</td><td>Todas enfocadas y firmes</td><td>Alguna borrosa</td><td>Varias movidas o con zoom digital</td></tr>
        <tr><td>Parejas</td><td>Mismo fondo, luz y ángulo en todo el catálogo</td><td>Casi todas</td><td>Cada una distinta</td></tr>
        <tr><td>Serie completa</td><td>Frente, ángulo, detalle y escala en cada producto</td><td>Falta una en algunos</td><td>Una sola foto por producto</td></tr>
      </table>
      <pre><code>Máximo: 10 puntos
9 o 10 → catálogo listo para publicar
6 a 8  → rehacé las fotos de los criterios con 0 o 1
0 a 5  → volvé a armar el puesto: casi siempre es la luz</code></pre>
      <p><strong>Pedí una segunda opinión:</strong> mostrale el catálogo a alguien que no conozca tus productos y preguntale si entiende qué vendés, de qué tamaño y de qué color.</p>
      <p>Para publicar y vender las fotos están los cursos <strong>Vender por internet</strong> y <strong>Redes sociales para tu emprendimiento</strong> de este sitio.</p>
      <p>Por ejemplo, Mati sacó 8: dos productos no tenían la foto de escala y uno tenía un reflejo. Los rehizo el sábado siguiente y llegó a 10.</p>` },
  ],
  practica: [
    "Escribí la nota de tu puesto de fotos con lugar, hora, luz, fondo, celular y serie, y anotá cuántos minutos tardaste en armarlo.",
    "Hacé la tanda de 10 productos y anotá cuántas tomas sacaste y con cuántas fotos te quedaste.",
    "Evaluá tu catálogo con la rúbrica y anotá tu puntaje sobre 10 y qué rehiciste.",
  ],
  recursos: [
    { t: "Curso de este sitio: Vender por internet (publicaciones, cobros y envíos)", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
    { t: "Curso de este sitio: Redes sociales para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/redes-sociales/" },
    { t: "Snapseed: editor de fotos gratis de Google (Google Play)", url: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed" },
  ],
  quiz: [
    { q: "Vas a fotografiar 10 productos. ¿Qué armás primero?", opciones: ["Un lugar distinto para cada producto","Un fondo nuevo por foto","Un puesto fijo: luz, fondo y celular siempre en el mismo lugar","Nada, a ojo"], correcta: 2, explicacion: "El puesto fijo da fotos parejas. Un lugar por producto tienta por variedad, pero el catálogo queda desparejo." },
    { q: "¿Para qué sirve escribir la nota de tu puesto?", opciones: ["Para armarlo igual la próxima vez y que las fotos nuevas combinen","Para nada","Para venderla","Para el contador"], correcta: 0, explicacion: "Así las fotos de otro mes combinan. \"Para nada\" tienta, pero después no te acordás de los detalles." },
    { q: "Antes de cada foto, ¿qué revisás de la lente?", opciones: ["Que tenga funda","Que tenga zoom","Nada","Que esté limpia"], correcta: 3, explicacion: "Una huella en la lente arruina la nitidez. \"Nada\" tienta, pero es el error más común." },
    { q: "Sacaste muchas tomas de cada producto. ¿Qué hacés después?", opciones: ["Publicás todas","Elegís la más nítida y mejor ubicada y borrás las movidas","Borrás todas","Elegís al azar"], correcta: 1, explicacion: "Elegir es parte del trabajo. Publicar todas tienta para mostrar más, pero cansa y se repiten." },
    { q: "Querés que todas las fotos del catálogo tengan la misma edición. ¿Qué hacés?", opciones: ["Editás cada una a mano distinto","No editás ninguna","Editás una y copiás los ajustes a las demás","Usás un filtro distinto por foto"], correcta: 2, explicacion: "Copiar ajustes da un catálogo parejo y rápido. Editar cada una tienta por detalle, pero salen distintas." },
    { q: "¿Cuál de estos nombres de archivo conviene?", opciones: ["mate-calabaza-grabado-01.jpg","IMG_4523.jpg","foto.jpg","asdf.jpg"], correcta: 0, explicacion: "El nombre dice qué es. IMG_4523 tienta porque es el que pone el celular, pero no te dice nada." },
    { q: "En una foto se ve el pedazo de cinta de la marca. ¿Qué hacés?", opciones: ["La publicás igual","Le ponés un filtro","Le agregás texto encima","La descartás o la recortás"], correcta: 3, explicacion: "Un detalle del puesto a la vista se ve descuidado. Publicarla tienta por apuro, pero se nota." },
    { q: "¿Dónde conviene mirar el catálogo para evaluarlo?", opciones: ["Solo impreso","En el celular, donde lo ve la mayoría de los clientes","En una tele gigante","No hace falta mirarlo"], correcta: 1, explicacion: "Tus clientes lo ven en el celular. La tele tienta por grande, pero no es como lo ven." },
    { q: "Tus fotos tienen colores cambiados por un filtro. ¿Cuánto sacás en \"Color real\"?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 2, explicacion: "Con colores cambiados el cliente recibe otra cosa. Uno tienta, pero los filtros son el 0." },
    { q: "Si varios productos tienen una sola foto, ¿cuánto sacás en \"Serie completa\"?", opciones: ["0 puntos","2 puntos","1 punto","No se evalúa"], correcta: 0, explicacion: "Una sola foto deja dudas. Un punto tienta, pero eso es cuando falta una de la serie." },
    { q: "Si sacaste 5 en la rúbrica, ¿por dónde empezás a mejorar?", opciones: ["Comprando otro celular","Usando más filtros","Abandonando","Volviendo a armar el puesto: casi siempre es la luz"], correcta: 3, explicacion: "La luz es la base de todo. Otro celular tienta, pero con mala luz sale igual." },
    { q: "¿Qué le preguntás a la persona que ve tu catálogo por primera vez?", opciones: ["Si le gusta tu celular","Si entiende qué vendés, de qué tamaño y de qué color","Cuántos seguidores tenés","Nada"], correcta: 1, explicacion: "Son las dudas que tiene un cliente. \"Si le gusta\" tienta, pero no dice si la foto informa." },
  ],
},
];
