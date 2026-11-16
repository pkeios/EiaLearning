// Temario del curso "Arreglos de la casa". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js arreglos-hogar y node tools/metodologia.js arreglos-hogar
window.TEMARIO = [
{
  id: "empezar",
  icono: "🧰",
  titulo: "Herramientas, seguridad y límites",
  nivel: "Básico",
  objetivos: [
    "Armar un kit básico de herramientas para la casa",
    "Usar la protección adecuada para cada tarea",
    "Ubicar las llaves de paso y el tablero, y saber qué arreglos no hacer",
  ],
  lecciones: [
    { titulo: "El kit básico", html: `
      <p class="idea">Con pocas herramientas se resuelve la mayoría de los arreglos de una casa. Conviene comprar pocas y buenas, y guardarlas siempre en el mismo lugar.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th></tr>
        <tr><td>Destornilladores planos y en cruz (Phillips), de 2 o 3 tamaños</td><td>Tornillos de muebles, bisagras, tapas</td></tr>
        <tr><td>Pinza y llave francesa (ajustable)</td><td>Tuercas, canillas, sifones</td></tr>
        <tr><td>Martillo</td><td>Clavos, encastres</td></tr>
        <tr><td>Cinta métrica y nivel</td><td>Medir y colgar derecho</td></tr>
        <tr><td>Taladro con brocas para madera y para pared</td><td>Colgar cosas en la pared</td></tr>
        <tr><td>Cutter, espátula, lija</td><td>Cortar, masillar, alisar</td></tr>
        <tr><td>Linterna</td><td>Mirar debajo de la bacha o cuando se corta la luz</td></tr>
      </table>
      <p><strong>Tamaño justo:</strong> un destornillador que no calza bien "pasa" la cabeza del tornillo y después no hay forma de sacarlo.</p>
      <p>El curso "Carpintería básica" de este sitio explica en detalle las herramientas de madera.</p>
      <p>Por ejemplo, con un destornillador en cruz mediano se ajustan la mayoría de las bisagras y manijas flojas de una casa.</p>` },
    { titulo: "Protegerte", html: `
      <p class="idea">La mayoría de los accidentes en arreglos caseros son golpes, cortes, caídas y partículas en los ojos. Con la protección adecuada casi todos se evitan.</p>
      <table>
        <tr><th>Tarea</th><th>Protección</th></tr>
        <tr><td>Taladrar, lijar, martillar</td><td>Anteojos de seguridad</td></tr>
        <tr><td>Lijar, barrer escombros</td><td>Barbijo para polvo</td></tr>
        <tr><td>Manejar vidrios, chapas, productos de limpieza</td><td>Guantes</td></tr>
        <tr><td>Trabajar en altura</td><td>Escalera firme, abierta del todo, con alguien que la sostenga</td></tr>
        <tr><td>Usar el taladro</td><td>Pelo atado, sin ropa suelta ni pulseras</td></tr>
      </table>
      <p><strong>En la escalera:</strong> nunca te pares en el último escalón, no te estires hacia los costados (bajá y moverla) y nunca uses una silla o un banquito en su lugar.</p>
      <p><strong>Los productos químicos</strong> se usan con ventilación y nunca se mezclan entre sí (lo vas a ver en el módulo del agua).</p>
      <p>Por ejemplo, una astilla de ladrillo al taladrar puede lastimar un ojo en un segundo; unos anteojos de seguridad cuestan menos que una consulta de guardia.</p>` },
    { titulo: "Llaves de corte y límites", html: `
      <p class="idea">Antes de cualquier arreglo, tenés que saber dónde se corta cada servicio. Y también qué arreglos no tenés que hacer vos.</p>
      <table>
        <tr><th>Servicio</th><th>Dónde se corta</th></tr>
        <tr><td>Agua</td><td>Llave de paso general (cerca del medidor o del tanque) y llaves de cada baño o cocina</td></tr>
        <tr><td>Luz</td><td>Tablero eléctrico: la térmica general y las de cada circuito</td></tr>
        <tr><td>Gas</td><td>Llave de paso al lado del medidor y una llave en cada artefacto</td></tr>
      </table>
      <table>
        <tr><th>Lo hacés vos</th><th>Lo hace un profesional matriculado</th></tr>
        <tr><td>Colgar, ajustar, sellar, masillar</td><td>Cualquier cosa de la instalación de gas o de sus artefactos</td></tr>
        <tr><td>Cambiar un cuerito o destapar un sifón</td><td>Cambiar enchufes, cables o agregar circuitos eléctricos</td></tr>
        <tr><td>Cambiar una lámpara</td><td>Caños dentro de la pared o pérdidas que no ves</td></tr>
      </table>
      <p class="aviso">Este curso enseña arreglos simples. La instalación de gas y la instalación eléctrica las tiene que hacer un profesional matriculado: es la ley y es por tu seguridad.</p>
      <p>Por ejemplo, si un caño pierde y no sabés dónde está la llave de paso, el agua sigue saliendo mientras la buscás. Ubicarlas hoy, con calma, te ahorra el apuro.</p>` },
  ],
  practica: [
    "Hacé una lista de las herramientas del kit que ya tenés y las que te faltan. Anotá cuántas te faltan.",
    "Ubicá en tu casa la llave de paso del agua, el tablero eléctrico y la llave del gas. Sacales una foto y anotá dónde está cada una.",
    "Revisá tu escalera: anotá si abre del todo, si está firme y si tiene los topes. Anotá qué le falta.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
    { t: "ENARGAS: seguridad con el gas en el hogar", url: "https://www.enargas.gob.ar/secciones/seguridad-en-el-hogar/seguridad-en-el-hogar.php" },
    { t: "ENReGE (ex ENRE): uso eficiente y seguro de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro" },
  ],
  quiz: [
    { q: "Si vas a armar un kit básico de herramientas, ¿qué conviene?", opciones: ["Muchas herramientas baratas","Una sola herramienta para todo","Pocas herramientas buenas, guardadas siempre en el mismo lugar","Pedirlas prestadas cada vez"], correcta: 2, explicacion: "Pocas y buenas rinden más. Muchas baratas tientan por el precio, pero se rompen o no calzan." },
    { q: "Si usás un destornillador que no calza bien en el tornillo, ¿qué puede pasar?", opciones: ["Que se pase la cabeza del tornillo y después no se pueda sacar","Nada","Que el tornillo ajuste mejor","Que se ajuste solo"], correcta: 0, explicacion: "El tamaño justo evita dañar el tornillo. \"Nada\" tienta si gira igual, pero la cabeza se arruina." },
    { q: "Si vas a taladrar una pared, ¿qué protección usás?", opciones: ["Ninguna","Solo guantes","Ojotas","Anteojos de seguridad"], correcta: 3, explicacion: "Las astillas saltan a los ojos. Guantes tientan porque protegen las manos, pero no los ojos." },
    { q: "Si vas a usar el taladro y tenés el pelo largo, ¿qué hacés?", opciones: ["Nada","Te lo atás, y sacás ropa suelta y pulseras","Lo usás más rápido","Te ponés una bufanda"], correcta: 1, explicacion: "La broca puede enganchar pelo o ropa. \"Nada\" tienta si es un agujero solo, pero alcanza un segundo." },
    { q: "Si no llegás a una parte alta, ¿qué usás?", opciones: ["Una silla","Un banquito apilado","Una escalera firme, abierta del todo, con alguien que la sostenga","El último escalón de la escalera"], correcta: 2, explicacion: "La escalera firme es la forma segura. La silla tienta por estar a mano, pero no es estable." },
    { q: "Si estás en la escalera y te falta un poco para llegar al costado, ¿qué hacés?", opciones: ["Bajás y la movés","Te estirás hacia el costado","Subís al último escalón","Saltás un poco"], correcta: 0, explicacion: "Estirarse desequilibra la escalera. Estirarte tienta por ahorrar tiempo, pero así se producen las caídas." },
    { q: "Si un caño empieza a perder agua, ¿qué hacés primero?", opciones: ["Buscás un balde y esperás","Llamás a alguien sin cerrar nada","Tapás con la mano","Cerrás la llave de paso del agua"], correcta: 3, explicacion: "Cortar el agua frena el daño. Esperar con un balde tienta, pero el agua sigue saliendo." },
    { q: "Si querés cortar la luz de toda la casa, ¿dónde vas?", opciones: ["A la llave de luz del living","Al tablero eléctrico, a la térmica general","Al medidor del gas","A desenchufar todo"], correcta: 1, explicacion: "El tablero corta la luz de la casa. La llave del living tienta, pero solo apaga una lámpara." },
    { q: "Si querés arreglar un artefacto de gas que funciona mal, ¿qué hacés?", opciones: ["Lo desarmás vos","Le preguntás a un vecino que sabe","Llamás a un gasista matriculado","Mirás un video y lo arreglás"], correcta: 2, explicacion: "El gas lo trabaja solo un gasista matriculado. El video tienta por parecer fácil, pero un error puede ser mortal." },
    { q: "Si querés agregar un enchufe nuevo en una pared, ¿quién lo hace?", opciones: ["Un electricista matriculado","Vos, con un tutorial","Cualquier persona con pinza","Nadie, no se puede"], correcta: 0, explicacion: "La instalación eléctrica es de un profesional. El tutorial tienta, pero un error puede causar un incendio o una descarga." },
    { q: "Si querés cambiar el cuerito de una canilla que gotea, ¿lo podés hacer vos?", opciones: ["No, es solo para gasistas","Solo con matrícula","No, hay que cambiar toda la canilla","Sí: es un arreglo simple, cerrando antes el agua"], correcta: 3, explicacion: "Es un arreglo casero. \"Solo con matrícula\" tienta por precaución, pero eso aplica a gas y electricidad." },
    { q: "Si todavía no sabés dónde están las llaves de paso, ¿cuándo conviene buscarlas?", opciones: ["El día que se rompa algo","Hoy, con calma, antes de que haya un problema","Nunca","Cuando venga el plomero"], correcta: 1, explicacion: "Saberlo antes te ahorra el apuro. Buscarlas en la urgencia tienta, pero el agua sigue saliendo mientras tanto." },
  ],
},
{
  id: "colgar",
  icono: "🖼️",
  titulo: "Colgar cosas en la pared",
  nivel: "Básico",
  objetivos: [
    "Reconocer el tipo de pared y elegir el taco adecuado",
    "Taladrar un agujero del tamaño justo sin pasar por caños ni cables",
    "Colgar un estante derecho y firme",
  ],
  lecciones: [
    { titulo: "Conocer la pared", html: `
      <p class="idea">Antes de colgar algo, averiguá de qué es la pared. No se cuelga igual en ladrillo que en placa de yeso (durlock).</p>
      <table>
        <tr><th>Pared</th><th>Cómo reconocerla</th><th>Qué usar</th></tr>
        <tr><td>Ladrillo macizo u hormigón</td><td>Suena "lleno" al golpear; el polvo al taladrar es rojo o gris</td><td>Taco de plástico común</td></tr>
        <tr><td>Ladrillo hueco</td><td>La broca avanza fácil y de golpe "cae" en un hueco</td><td>Taco largo o especial para hueco</td></tr>
        <tr><td>Placa de yeso (durlock)</td><td>Suena hueca; el polvo es blanco; detrás hay perfiles de metal</td><td>Taco para placa (tipo mariposa o paraguas) o atornillar al perfil</td></tr>
      </table>
      <p><strong>El peso importa:</strong> el envase del taco dice cuánto aguanta. Para cosas pesadas (una alacena, un televisor), usá varios puntos de apoyo y respetá ese peso.</p>
      <p><strong>Sin taladro:</strong> para cuadros livianos existen ganchos adhesivos o con clavitos finos; mirá el peso que indican.</p>
      <p>Por ejemplo, un estante con libros en una pared de durlock con tacos comunes se cae en días; con tacos para placa o atornillado al perfil, aguanta.</p>` },
    { titulo: "Taladrar sin sorpresas", video: {"id":"wnVdENMX5ME","t":"Cómo poner un taco en la pared con taladro · Taller en Casa (1:53)"}, html: `
      <p class="idea">Un buen agujero tiene el diámetro del taco, la profundidad justa y no pasa por un caño ni por un cable.</p>
      <pre><code>1. Marcá el punto con lápiz (usá el nivel si son varios).
2. Revisá que no haya caños ni cables:
   - no taladres en línea recta arriba, abajo o a los costados
     de enchufes, llaves de luz, canillas o duchas;
   - si tenés, usá un detector de metales y cables.
3. Broca del mismo número que el taco (taco 6 → broca 6).
   En ladrillo, broca para pared (punta de widia) y percutor.
4. Profundidad: el largo del taco y un poco más.
   Marcala en la broca con un pedazo de cinta.
5. Taladrá derecho, sin hacer palanca.
6. Sacá el polvo, metí el taco (a ras de la pared) y atornillá.</code></pre>
      <table>
        <tr><th>Problema</th><th>Causa probable</th></tr>
        <tr><td>El taco gira y no ajusta</td><td>Agujero demasiado grande o pared hueca</td></tr>
        <tr><td>El taco no entra</td><td>Broca más chica que el taco</td></tr>
        <tr><td>El tornillo no muerde</td><td>Tornillo demasiado fino para ese taco</td></tr>
      </table>
      <p><strong>El percutor</strong> es la función del taladro que "golpea" para entrar en ladrillo y hormigón. En madera, cerámica o durlock se apaga.</p>
      <p>Por ejemplo, taladrar justo arriba de un enchufe es la forma más común de pinchar un cable: los cables suelen subir derecho desde el enchufe.</p>` },
    { titulo: "Un estante derecho", html: `
      <p class="idea">Colgar un estante combina todo: marcar con nivel, taladrar bien y elegir soportes que aguanten el peso.</p>
      <pre><code>Estante de 80 cm con 2 soportes:
1. Marcá la altura y trazá una línea con el nivel.
2. Ubicá los soportes a unos 10 cm de cada punta:
   separación entre soportes = 80 - 10 - 10 = 60 cm
3. Marcá los agujeros de cada soporte sobre la línea.
4. Taladrá, poné los tacos y atornillá los soportes.
5. Controlá con el nivel antes de apoyar el estante.
6. Cargalo de a poco y mirá que no se mueva.</code></pre>
      <table>
        <tr><th>Si el estante...</th><th>Probá</th></tr>
        <tr><td>Queda torcido</td><td>Aflojar un soporte y corregir con el nivel</td></tr>
        <tr><td>Se arquea en el medio</td><td>Agregar un tercer soporte o usar una tabla más gruesa</td></tr>
        <tr><td>Se mueve al cargarlo</td><td>Revisar los tacos: pueden ser de la medida o del tipo equivocado</td></tr>
      </table>
      <p>Por ejemplo, un estante largo con muchos libros necesita soportes más cerca uno de otro que uno corto con adornos.</p>` },
  ],
  practica: [
    "Golpeá con los nudillos 3 paredes de tu casa y anotá cuál creés que es de ladrillo y cuál de durlock, y por qué.",
    "Buscá el envase de un taco (o su ficha en una ferretería) y anotá su número, la broca que pide y el peso que aguanta.",
    "Colgá un cuadro o un estante siguiendo los pasos, y anotá la separación entre soportes y si quedó derecho con el nivel.",
  ],
  recursos: [
    { t: "ENReGE (ex ENRE): uso eficiente y seguro de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si golpeás una pared y suena hueca, con polvo blanco al taladrar, ¿qué pared es?", opciones: ["Ladrillo macizo","Hormigón","Placa de yeso (durlock)","Piedra"], correcta: 2, explicacion: "Hueco y polvo blanco indican durlock. Ladrillo tienta porque es lo más común, pero suena lleno y el polvo es rojo." },
    { q: "Si vas a colgar un estante en una pared de durlock, ¿qué usás?", opciones: ["Tacos para placa (tipo mariposa o paraguas) o atornillar al perfil","Tacos comunes de plástico","Clavos largos","Cinta adhesiva"], correcta: 0, explicacion: "El taco común no agarra en la placa. Tienta porque es el más conocido, pero se sale con el peso." },
    { q: "Si mientras taladrás la broca \"cae\" de golpe en un hueco, ¿qué pared es?", opciones: ["Hormigón","Ladrillo macizo","Madera","Ladrillo hueco"], correcta: 3, explicacion: "El hueco interno hace que la broca caiga. Hormigón tienta por duro, pero ahí la broca avanza parejo y lento." },
    { q: "Si querés colgar algo pesado, ¿qué mirás del taco?", opciones: ["El color","El peso que aguanta, que dice el envase","El precio","Nada"], correcta: 1, explicacion: "El envase indica el peso. El precio tienta como guía de calidad, pero no dice cuánto aguanta." },
    { q: "Si vas a taladrar cerca de un enchufe, ¿dónde no taladrás?", opciones: ["En ningún lado, se puede siempre","Solo a 1 metro","En línea recta arriba, abajo o a los costados del enchufe","Solo en diagonal"], correcta: 2, explicacion: "Los cables suelen ir derecho desde el enchufe. \"Se puede siempre\" tienta, pero podés pinchar un cable." },
    { q: "Si usás un taco número 6, ¿qué broca usás?", opciones: ["Broca 6","Broca 10","Broca 3","Cualquiera"], correcta: 0, explicacion: "Broca y taco del mismo número. La 10 tienta para que entre fácil, pero el taco queda flojo." },
    { q: "Si vas a taladrar ladrillo, ¿qué broca y función usás?", opciones: ["Broca para madera sin percutor","Broca para metal","Un clavo","Broca para pared (widia) y percutor"], correcta: 3, explicacion: "La widia y el percutor entran en ladrillo. La de madera tienta porque es la que estaba puesta, pero se quema." },
    { q: "Si querés que el agujero tenga la profundidad justa, ¿qué hacés?", opciones: ["Taladrás hasta que no puedas más","Marcás en la broca el largo del taco y un poco más con cinta","Lo hacés a ojo","Taladrás 1 cm siempre"], correcta: 1, explicacion: "La cinta te marca dónde parar. A ojo tienta, pero queda corto o demasiado hondo." },
    { q: "Si el taco gira dentro del agujero y no ajusta, ¿qué pasó?", opciones: ["El tornillo es muy corto","El taco es nuevo","El agujero quedó grande o la pared es hueca","Faltó pintura"], correcta: 2, explicacion: "El taco necesita apretar contra la pared. El tornillo corto tienta, pero no hace girar al taco." },
    { q: "Si vas a taladrar una cerámica o durlock, ¿qué hacés con el percutor?", opciones: ["Lo apagás","Lo dejás prendido","Lo ponés al máximo","No importa"], correcta: 0, explicacion: "El percutor rompe la cerámica y la placa. Dejarlo tienta para que entre rápido, pero la quiebra." },
    { q: "Si un estante de 80 cm lleva soportes a 10 cm de cada punta, ¿cuál es la separación entre ellos?", opciones: ["80 cm","70 cm","40 cm","60 cm"], correcta: 3, explicacion: "80 - 10 - 10 = 60. 70 tienta si restás una sola punta." },
    { q: "Si un estante con libros se arquea en el medio, ¿qué probás?", opciones: ["Cargar más libros para que se enderece","Agregar un tercer soporte o usar una tabla más gruesa","Sacar un soporte","Nada, es normal"], correcta: 1, explicacion: "Más apoyo o más grosor evita que se doble. \"Es normal\" tienta, pero termina rompiéndose." },
  ],
},
{
  id: "agua",
  icono: "🚰",
  titulo: "Canillas, inodoros y desagües",
  nivel: "Intermedio",
  objetivos: [
    "Cambiar el cuerito de una canilla que gotea",
    "Detectar si el depósito del inodoro pierde agua",
    "Destapar una pileta sin productos peligrosos",
  ],
  lecciones: [
    { titulo: "La canilla que gotea", video: {"id":"SJgOdw2RCxM","t":"Cómo cambiar el cuerito de una canilla · ComoHacerPara (2:12)"}, html: `
      <p class="idea">Una canilla que gotea casi siempre tiene gastado el <strong>cuerito</strong>: una arandela de goma que cierra el paso del agua. Cambiarlo es barato y lleva unos minutos.</p>
      <pre><code>1. Cerrá la llave de paso de ese baño o cocina.
2. Abrí la canilla para que salga el agua que quedó.
3. Tapá el desagüe con un trapo (para no perder piezas).
4. Sacá la tapita y el tornillo del volante, y sacá el volante.
5. Con la llave francesa, desenroscá el vástago (la pieza de bronce).
6. En la punta está el cuerito: sacalo y poné uno nuevo de la misma medida.
7. Armá todo al revés, sin apretar de más.
8. Abrí la llave de paso y probá.</code></pre>
      <table>
        <tr><th>Si...</th><th>Probablemente</th></tr>
        <tr><td>La canilla es de palanca o de cuarto de vuelta</td><td>No tiene cuerito: tiene un cartucho o un vástago cerámico que se cambia entero</td></tr>
        <tr><td>Sigue goteando con cuerito nuevo</td><td>El asiento (donde apoya el cuerito) está gastado: consultá a un plomero</td></tr>
        <tr><td>Pierde por debajo del volante</td><td>Hay que cambiar el o-ring o la empaquetadura del vástago</td></tr>
      </table>
      <p><strong>Llevá la pieza vieja a la ferretería:</strong> así te dan la medida exacta.</p>
      <p>Por ejemplo, una canilla que gotea una gota por segundo pierde muchos litros por día; un cuerito cuesta muy poco.</p>` },
    { titulo: "El inodoro que pierde", html: `
      <p class="idea">Un depósito de inodoro que pierde hace correr agua todo el día, a veces sin ruido. Hay una prueba simple para saberlo.</p>
      <pre><code>PRUEBA DEL COLORANTE
1. Echá unas gotas de colorante (o de café) en el depósito.
2. No tires la cadena durante 15 minutos.
3. Si aparece color en la taza → el depósito pierde.

Causas comunes:
- La goma de la descarga (el "sapito" o válvula de fondo) está gastada.
- El flotante está alto y el agua se va por el rebalse.</code></pre>
      <table>
        <tr><th>Síntoma</th><th>Qué revisar</th></tr>
        <tr><td>El agua corre por el rebalse sin parar</td><td>Bajar el flotante o regular la válvula de carga</td></tr>
        <tr><td>Hay color en la taza en la prueba</td><td>Cambiar la goma de la descarga (con la llave de paso del inodoro cerrada)</td></tr>
        <tr><td>Pierde agua por afuera, al piso</td><td>Juntas o caños: consultá a un plomero</td></tr>
      </table>
      <p><strong>Mirá antes de comprar:</strong> hay muchos tipos de mecanismos. Sacale una foto al tuyo y llevala a la ferretería.</p>
      <p>Por ejemplo, si escuchás que el depósito se carga solo cada tanto sin que nadie lo use, es casi seguro que la goma de la descarga pierde.</p>` },
    { titulo: "Destapar sin peligro", video: {"id":"FzPsm6H3Z6w","t":"Cómo destapar la pileta de la cocina: el sifón · El profe Pol (10:25)"}, html: `
      <p class="idea">La mayoría de las piletas se destapan con una sopapa o limpiando el <strong>sifón</strong>: la curva del caño debajo de la bacha, donde se junta la grasa y la mugre.</p>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>1. Sopapa</td><td>Con un poco de agua en la pileta, tapá el rebalse con un trapo y bombeá fuerte varias veces</td></tr>
        <tr><td>2. Agua caliente</td><td>En la cocina, agua caliente (no hirviendo si el caño es de plástico) ayuda con la grasa</td></tr>
        <tr><td>3. Sifón</td><td>Poné un balde abajo, desenroscá el sifón a mano, limpialo y volvé a armar</td></tr>
        <tr><td>4. Sonda o cinta</td><td>Para tapones más lejos en el caño</td></tr>
        <tr><td>5. Plomero</td><td>Si se tapan varios desagües a la vez, el problema está en la cañería principal</td></tr>
      </table>
      <p class="aviso">Nunca mezcles productos de limpieza: la lavandina con amoníaco o con productos ácidos (como algunos desengrasantes o antisarro) larga gases tóxicos. Los destapadores químicos son corrosivos: usalos con guantes y anteojos, con ventilación, y nunca después de haber puesto otro producto.</p>
      <p><strong>Prevenir es más fácil:</strong> no tires aceite ni restos de comida por la pileta y usá una rejilla.</p>
      <p>Por ejemplo, en la pileta de la cocina, el sifón lleno de grasa es la causa más común de tapón, y se limpia en 10 minutos con un balde y las manos (con guantes).</p>` },
  ],
  practica: [
    "Ubicá la llave de paso del baño o la cocina y probá cerrarla y abrirla. Anotá si gira bien o está dura.",
    "Hacé la prueba del colorante en tu inodoro y anotá cuántos minutos esperaste y si apareció color.",
    "Mirá el sifón de una pileta de tu casa: anotá si es de plástico o de metal y si se puede desenroscar a mano.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si una canilla común gotea aunque la cerrás fuerte, ¿qué suele estar gastado?", opciones: ["El caño de la pared","La llave de paso","El cuerito","El tanque de agua"], correcta: 2, explicacion: "El cuerito es la goma que cierra el agua. El caño tienta, pero el goteo por la boca es del cuerito." },
    { q: "Si vas a cambiar el cuerito, ¿qué hacés primero?", opciones: ["Cerrás la llave de paso de ese baño o cocina","Desarmás la canilla con el agua abierta","Llamás al gasista","Cortás la luz"], correcta: 0, explicacion: "Sin cerrar el agua, sale con fuerza al desarmar. Cortar la luz tienta por precaución, pero el riesgo acá es el agua." },
    { q: "Si desarmás una canilla sobre la bacha, ¿para qué tapás el desagüe con un trapo?", opciones: ["Para que no salga olor","Para que no gotee","No sirve","Para no perder piezas chicas por el desagüe"], correcta: 3, explicacion: "Un tornillo que cae al desagüe es difícil de recuperar. El olor tienta como motivo, pero no es la razón." },
    { q: "Si tu canilla es de palanca y gotea, ¿qué tiene en lugar de cuerito?", opciones: ["Un cuerito más grande","Un cartucho que se cambia entero","Nada, no tiene arreglo","Un flotante"], correcta: 1, explicacion: "Las de palanca usan cartucho. Un cuerito más grande tienta, pero ese mecanismo no lo usa." },
    { q: "Si cambiaste el cuerito y sigue goteando, ¿qué puede estar gastado?", opciones: ["El cuerito nuevo, seguro","La pared","El asiento donde apoya el cuerito: conviene un plomero","Nada"], correcta: 2, explicacion: "Un asiento gastado no deja cerrar bien. \"El cuerito nuevo, seguro\" tienta, pero el problema está donde apoya." },
    { q: "Si no sabés qué cuerito comprar, ¿qué hacés?", opciones: ["Llevás el viejo a la ferretería para que te den la misma medida","Comprás cualquiera","Comprás el más grande","Usás una goma de borrar"], correcta: 0, explicacion: "La pieza vieja asegura la medida. El más grande tienta por \"sobrar\", pero no entra." },
    { q: "Si querés saber si el depósito del inodoro pierde, ¿qué prueba hacés?", opciones: ["Escuchás un rato","Tirás la cadena 10 veces","Mirás el medidor de luz","Echás colorante en el depósito y esperás 15 minutos sin tirar la cadena"], correcta: 3, explicacion: "Si aparece color en la taza, pierde. Escuchar tienta, pero muchas pérdidas son silenciosas." },
    { q: "Si en la prueba aparece color en la taza, ¿qué suele estar gastado?", opciones: ["El asiento del inodoro","La goma de la descarga","La tapa","El caño de la ducha"], correcta: 1, explicacion: "La goma deja pasar agua a la taza. La tapa tienta por estar arriba, pero no tiene que ver." },
    { q: "Si el inodoro pierde agua por afuera, al piso, ¿qué hacés?", opciones: ["Cambiás la goma de la descarga","Ponés un trapo y te olvidás","Consultás a un plomero: son juntas o caños","Lo tapás con silicona"], correcta: 2, explicacion: "Las pérdidas al piso son de juntas o caños. La goma tienta porque es lo más común, pero esa pierde hacia la taza." },
    { q: "Si la pileta de la cocina está tapada, ¿qué probás primero?", opciones: ["La sopapa, y después limpiar el sifón","Un destapador químico mezclado con lavandina","Llamar a emergencias","Romper el caño"], correcta: 0, explicacion: "Lo mecánico primero. El químico mezclado tienta por fuerte, pero larga gases tóxicos." },
    { q: "Si ya echaste lavandina en la pileta, ¿podés agregar un desengrasante ácido para destapar?", opciones: ["Sí, potencia el efecto","Sí, si es poco","Sí, con agua caliente","No: mezclar productos puede largar gases tóxicos"], correcta: 3, explicacion: "Nunca se mezclan productos de limpieza. \"Potencia el efecto\" tienta, pero el gas es peligroso." },
    { q: "Si se tapan varios desagües de la casa a la vez, ¿qué concluís?", opciones: ["Que hay que limpiar todos los sifones","Que el problema está en la cañería principal: llamás a un plomero","Que es casualidad","Que hay que echar más químicos"], correcta: 1, explicacion: "Si fallan todos, la causa es común. Limpiar todos los sifones tienta, pero el tapón está más adelante." },
  ],
},
{
  id: "puertas",
  icono: "🚪",
  titulo: "Puertas, cerraduras y muebles",
  nivel: "Intermedio",
  objetivos: [
    "Arreglar una puerta que roza ajustando sus bisagras",
    "Lubricar una cerradura dura con el producto correcto",
    "Reparar un tornillo que quedó flojo en la madera",
  ],
  lecciones: [
    { titulo: "La puerta que roza", video: {"id":"_cIkGpHxUVk","t":"Si tu puerta roza o pega, hacé esto · Resuelvelo Tú (6:04)"}, html: `
      <p class="idea">La mayoría de las puertas que rozan tienen las <strong>bisagras flojas</strong>. Antes de lijar o cepillar, ajustá los tornillos: muchas veces alcanza.</p>
      <pre><code>1. Encontrá dónde roza: pasá tiza por el marco, cerrá
   y abrí la puerta. Donde quedó marca, roza.
2. Abrí la puerta y ajustá todos los tornillos de las bisagras,
   del lado de la puerta y del lado del marco.
3. Si roza arriba del lado de la cerradura, suele ser
   la bisagra de arriba floja: ajustá sobre todo esa.
4. Si sigue rozando, recién ahí lijá o cepillá
   solo donde quedó la marca, de a poco.
5. Si lijaste, sellá o pintá esa parte:
   la madera sin protección absorbe humedad y se hincha.</code></pre>
      <table>
        <tr><th>Cuándo roza</th><th>Causa probable</th></tr>
        <tr><td>Todo el año, de golpe</td><td>Bisagra floja</td></tr>
        <tr><td>Solo en invierno o con humedad</td><td>La madera se hinchó</td></tr>
        <tr><td>Contra el piso</td><td>Bisagras flojas o un piso nuevo más alto</td></tr>
      </table>
      <p>Por ejemplo, una puerta que empezó a rozar arriba de golpe casi siempre se arregla en 2 minutos ajustando los tornillos de la bisagra superior.</p>` },
    { titulo: "Cerraduras y bisagras que suenan", html: `
      <p class="idea">Una cerradura dura o una bisagra que chirría se arreglan con el lubricante correcto. El error común es usar aceite de cocina, que junta polvo y empeora todo.</p>
      <table>
        <tr><th>Qué</th><th>Con qué</th><th>Con qué no</th></tr>
        <tr><td>Interior de la cerradura (donde entra la llave)</td><td>Grafito en polvo o lubricante seco</td><td>Aceite: junta polvo y la traba más</td></tr>
        <tr><td>Bisagra que chirría</td><td>Unas gotas de aceite para máquinas, limpiando el sobrante</td><td>Aceite de cocina: se pone pegajoso</td></tr>
        <tr><td>Pestillo que no entra en el marco</td><td>Ajustar o mover un poco la chapita del marco</td><td>Forzar la puerta</td></tr>
      </table>
      <pre><code>Cerradura dura:
1. Soplá o limpiá la entrada de la llave.
2. Poné un poco de grafito en la entrada (o en la llave).
3. Meté y sacá la llave varias veces, girándola.
Si sigue dura o la llave está gastada → cerrajero.</code></pre>
      <p><strong>Si la llave se traba o se gira con miedo a que se rompa,</strong> no la fuerces: una llave rota dentro de la cerradura es un problema mucho mayor.</p>
      <p>Por ejemplo, una cerradura de la puerta de calle que se endurece en invierno suele mejorar con un poco de grafito, sin desarmar nada.</p>` },
    { titulo: "Muebles flojos y tornillos pasados", html: `
      <p class="idea">Sillas que se mueven, puertas de placard caídas y manijas flojas suelen ser tornillos flojos o <strong>pasados</strong>: el agujero se agrandó y el tornillo ya no muerde.</p>
      <table>
        <tr><th>Problema</th><th>Arreglo</th></tr>
        <tr><td>Tornillo flojo</td><td>Ajustarlo con el destornillador del tamaño justo</td></tr>
        <tr><td>Tornillo pasado</td><td>Rellenar el agujero con escarbadientes o una varilla de madera con cola, dejar secar y volver a atornillar</td></tr>
        <tr><td>Puerta de placard caída</td><td>Las bisagras tienen tornillos de regulación: ajustar altura y profundidad</td></tr>
        <tr><td>Silla que se mueve</td><td>Encolar las uniones flojas y sujetarlas mientras seca</td></tr>
      </table>
      <pre><code>Tornillo pasado, paso a paso:
1. Sacá el tornillo.
2. Poné cola de carpintero en el agujero.
3. Metele 2 o 3 escarbadientes de madera, cortá lo que sobra.
4. Esperá que seque (mirá el tiempo en el envase de la cola).
5. Atornillá de nuevo, sin apretar de más.</code></pre>
      <p>El curso "Carpintería básica" de este sitio tiene más sobre uniones y encolado.</p>
      <p>Por ejemplo, la manija de un cajón que gira y no ajusta se arregla con dos escarbadientes y cola, sin comprar nada.</p>` },
  ],
  practica: [
    "Revisá las bisagras de 3 puertas de tu casa y ajustá los tornillos flojos. Anotá cuántos tornillos estaban flojos.",
    "Elegí una cerradura o bisagra dura y anotá qué lubricante usarías y por qué no aceite de cocina.",
    "Arreglá un tornillo pasado con escarbadientes y cola, y anotá cuántas horas esperaste antes de volver a atornillar.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si una puerta empezó a rozar de golpe, ¿qué revisás primero?", opciones: ["La lijás enseguida","Cambiás la puerta","Los tornillos de las bisagras","Le ponés aceite"], correcta: 2, explicacion: "Muchas veces es una bisagra floja. Lijar tienta por directo, pero sacás madera que después falta." },
    { q: "Si querés saber dónde roza la puerta, ¿qué hacés?", opciones: ["Pasás tiza por el marco, cerrás y abrís, y mirás dónde quedó la marca","Adivinás","Lijás toda la puerta","La cerrás más fuerte"], correcta: 0, explicacion: "La tiza marca el punto exacto. Lijar todo tienta, pero sacás de donde no hacía falta." },
    { q: "Si la puerta roza arriba del lado de la cerradura, ¿qué bisagra suele estar floja?", opciones: ["La de abajo","Ninguna","La cerradura","La de arriba"], correcta: 3, explicacion: "Si la de arriba se afloja, la puerta cae hacia la cerradura. La de abajo tienta, pero haría rozar abajo." },
    { q: "Si lijaste el canto de una puerta, ¿qué hacés después?", opciones: ["Nada","Sellás o pintás esa parte para que no absorba humedad","La mojás","Le ponés aceite de cocina"], correcta: 1, explicacion: "La madera sin protección se hincha. \"Nada\" tienta porque ya no roza, pero vuelve a rozar con la humedad." },
    { q: "Si una puerta roza solo en invierno, ¿qué causa es probable?", opciones: ["Una bisagra rota","El piso se movió","La madera se hincha con la humedad","La cerradura"], correcta: 2, explicacion: "La humedad hincha la madera. La bisagra tienta, pero rozaría todo el año." },
    { q: "Si la cerradura está dura, ¿qué ponés dentro?", opciones: ["Grafito en polvo o lubricante seco","Aceite de cocina","Agua","Manteca"], correcta: 0, explicacion: "El grafito no junta polvo. El aceite tienta por ser lubricante, pero junta mugre y la traba más." },
    { q: "Si la bisagra chirría, ¿qué usás?", opciones: ["Aceite de cocina","Cola de carpintero","Agua con jabón","Unas gotas de aceite para máquinas, limpiando el sobrante"], correcta: 3, explicacion: "El aceite para máquinas no se pone pegajoso. El de cocina tienta por estar a mano, pero se espesa." },
    { q: "Si la llave se traba y sentís que se puede romper, ¿qué hacés?", opciones: ["La girás con una pinza","No la forzás y, si no mejora con grafito, llamás a un cerrajero","La forzás más","Le pegás con el martillo"], correcta: 1, explicacion: "Una llave rota adentro es peor. La pinza tienta por fuerza, pero la rompe." },
    { q: "Si un tornillo gira y no ajusta en la madera, ¿cómo se llama?", opciones: ["Tornillo nuevo","Tornillo de regulación","Tornillo pasado","Tornillo flojo de fábrica"], correcta: 2, explicacion: "El agujero se agrandó: está pasado. Flojo tienta, pero uno flojo ajusta si lo girás." },
    { q: "Si querés arreglar un tornillo pasado sin comprar nada, ¿qué hacés?", opciones: ["Rellenás el agujero con escarbadientes y cola, esperás que seque y atornillás","Usás un tornillo más corto","Lo pegás con cinta","Lo dejás así"], correcta: 0, explicacion: "El relleno le da de dónde agarrarse. El tornillo más corto tienta, pero muerde todavía menos." },
    { q: "Si una puerta de placard quedó caída, ¿qué ajustás?", opciones: ["La cerradura","El piso","Nada, hay que cambiarla","Los tornillos de regulación de sus bisagras"], correcta: 3, explicacion: "Esas bisagras se regulan. Cambiarla tienta, pero casi siempre se ajusta en minutos." },
    { q: "Si una silla se mueve porque una unión está floja, ¿qué hacés?", opciones: ["Le clavás un clavo largo","Encolás la unión y la sujetás mientras seca","Te sentás con cuidado","Le ponés cinta"], correcta: 1, explicacion: "La cola une de verdad la madera. El clavo tienta por rápido, pero puede rajarla." },
  ],
},
{
  id: "sellar",
  icono: "🪣",
  titulo: "Sellar, masillar y humedad",
  nivel: "Intermedio",
  objetivos: [
    "Renovar la silicona de la bacha o la bañadera",
    "Tapar agujeros y fisuras chicas con enduido y dejar la pared lista para pintar",
    "Reconocer de dónde viene una mancha de humedad antes de taparla",
  ],
  lecciones: [
    { titulo: "Silicona en el baño y la cocina", html: `
      <p class="idea">La <strong>silicona</strong> sella las uniones entre la bacha, la mesada, la bañadera y la pared. Cuando se pone negra o se despega, el agua se filtra y aparecen hongos y humedad.</p>
      <pre><code>1. Sacá toda la silicona vieja con un cutter o una espátula.
2. Limpiá con alcohol y dejá secar del todo.
3. Poné cinta de papel a los dos lados de la unión,
   dejando la línea donde va la silicona.
4. Cortá la punta del pico en diagonal, del ancho de la junta.
5. Aplicá un cordón parejo, sin cortar.
6. Alisalo con el dedo mojado en agua con un poco de detergente.
7. Sacá la cinta enseguida, con la silicona todavía fresca.
8. No mojes la zona por el tiempo que dice el envase
   (en general, 24 horas).</code></pre>
      <table>
        <tr><th>Elegí</th><th>Para</th></tr>
        <tr><td>Silicona para baños y cocinas (con antihongos)</td><td>Zonas húmedas</td></tr>
        <tr><td>Silicona transparente o blanca</td><td>Según el color de la bacha o los azulejos</td></tr>
      </table>
      <p><strong>No pongas silicona nueva sobre la vieja:</strong> no se pega bien y los hongos siguen abajo.</p>
      <p>Por ejemplo, la cinta de papel a los costados es lo que hace que la junta quede recta y prolija, como hecha por un profesional.</p>` },
    { titulo: "Tapar agujeros y fisuras", video: {"id":"70Mve5rhH6o","t":"Cómo tapar un agujero en la pared · Yoteayudo (0:57)"}, html: `
      <p class="idea">Los agujeros de clavos y tacos viejos y las fisuras finas se tapan con <strong>enduido</strong>: una pasta que se aplica con espátula, se deja secar y se lija.</p>
      <pre><code>1. Sacá el taco viejo o lo que esté suelto.
2. Limpiá el polvo con un pincel.
3. Con la espátula, llená el agujero apretando.
4. Pasá la espátula al ras para sacar el sobrante.
5. Dejá secar (mirá el tiempo en el envase).
6. Si se hundió al secar, poné otra capa fina.
7. Lijá suave con lija fina hasta que quede al ras.
8. Sacá el polvo y pintá encima.</code></pre>
      <table>
        <tr><th>Daño</th><th>Material</th></tr>
        <tr><td>Agujeros chicos y fisuras finas</td><td>Enduido</td></tr>
        <tr><td>Agujeros grandes o pedazos de revoque caídos</td><td>Yeso o revoque, y después enduido</td></tr>
        <tr><td>Fisuras que se abren o crecen</td><td>Consultar a un profesional: pueden ser estructurales</td></tr>
      </table>
      <p><strong>Capas finas:</strong> una capa gruesa tarda mucho en secar y se raja. Mejor dos finas.</p>
      <p>Por ejemplo, después de una mudanza, los agujeros de los cuadros viejos se tapan en una tarde con enduido y una lija, antes de pintar.</p>` },
    { titulo: "Humedad: primero la causa", html: `
      <p class="idea">Una mancha de humedad no se arregla pintando encima: vuelve. Primero hay que encontrar de dónde viene el agua.</p>
      <table>
        <tr><th>Tipo</th><th>Señales</th><th>Qué hacer</th></tr>
        <tr><td>Condensación</td><td>Gotas en vidrios y paredes frías, hongos en rincones, sobre todo en invierno y en baños</td><td>Ventilar todos los días, usar el extractor, secar los vidrios</td></tr>
        <tr><td>Filtración</td><td>Mancha que crece después de llover, cerca de techos, ventanas o terrazas</td><td>Revisar techos, membranas y selladores; consultar a un profesional</td></tr>
        <tr><td>Pérdida de un caño</td><td>Mancha que crece aunque no llueva, cerca de baños o cocinas</td><td>Plomero: puede haber un caño roto dentro de la pared</td></tr>
        <tr><td>Desde el piso (capilaridad)</td><td>Mancha en la parte de abajo de la pared, con pintura que se descascara</td><td>Consultar a un profesional</td></tr>
      </table>
      <pre><code>Prueba simple para saber si es una pérdida de agua:
1. Cerrá todas las canillas de la casa.
2. Anotá los números del medidor de agua (si tenés).
3. Esperá 1 hora sin usar agua.
4. Si el número cambió → hay una pérdida en algún lado.</code></pre>
      <p><strong>Los hongos negros</strong> se limpian con guantes y barbijo, con un producto antihongos y ventilando. Si vuelven, la causa sigue.</p>
      <p>Por ejemplo, una mancha que aparece en la pared del dormitorio pegada al baño y crece aunque no llueva suele ser un caño que pierde dentro de la pared.</p>` },
  ],
  practica: [
    "Revisá la silicona de tu baño y tu cocina: anotá dónde está negra, despegada o rota.",
    "Tapá al menos 3 agujeros de clavos con enduido, siguiendo los pasos. Anotá cuántas capas pusiste y cuánto esperaste para lijar.",
    "Si tenés medidor de agua, hacé la prueba de 1 hora con todo cerrado y anotá los dos números.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si la silicona de la bacha está negra y despegada, ¿qué hacés?", opciones: ["Ponés silicona nueva encima","La pintás de blanco","Sacás toda la vieja, limpiás y ponés silicona nueva","La dejás así"], correcta: 2, explicacion: "Encima no pega y los hongos siguen. Ponerla encima tienta por rápido, pero dura poco." },
    { q: "Si querés que la junta de silicona quede recta y prolija, ¿qué usás?", opciones: ["Cinta de papel a los dos lados de la unión","Mucha silicona","Un pincel","Nada, sale sola"], correcta: 0, explicacion: "La cinta marca el borde. Mucha silicona tienta para que selle más, pero queda desprolija." },
    { q: "Si querés alisar la silicona, ¿con qué?", opciones: ["Con el dedo seco","Con un trapo con aceite","Con el cutter","Con el dedo mojado en agua con un poco de detergente"], correcta: 3, explicacion: "El detergente evita que se pegue. El dedo seco tienta por simple, pero la arrastra." },
    { q: "Si recién pusiste silicona en la bañadera, ¿cuándo podés mojarla?", opciones: ["Enseguida","Cuando pase el tiempo que dice el envase, en general 24 horas","A los 10 minutos","Nunca más"], correcta: 1, explicacion: "Tiene que curar para sellar. \"Enseguida\" tienta si parece seca por afuera, pero adentro sigue blanda." },
    { q: "Si tenés que tapar agujeros de clavos, ¿qué material usás?", opciones: ["Silicona","Cemento puro","Enduido","Pasta dental"], correcta: 2, explicacion: "El enduido se lija y se pinta. La silicona tienta porque tapa, pero no se puede pintar bien." },
    { q: "Si el agujero es grande o se cayó un pedazo de revoque, ¿qué usás?", opciones: ["Yeso o revoque, y después enduido","Solo enduido en una capa gruesa","Silicona","Papel"], correcta: 0, explicacion: "El enduido es para lo chico. Una capa gruesa tienta por rápido, pero se raja." },
    { q: "Si el enduido se hundió al secar, ¿qué hacés?", opciones: ["Lo dejás así","Ponés una capa muy gruesa","Lo pintás directo","Ponés otra capa fina"], correcta: 3, explicacion: "Capas finas secan bien. Una muy gruesa tienta para terminar rápido, pero tarda y se raja." },
    { q: "Si una fisura de la pared se abre o crece con el tiempo, ¿qué hacés?", opciones: ["La tapás con enduido y listo","Consultás a un profesional: puede ser estructural","La pintás","Nada"], correcta: 1, explicacion: "Una fisura que crece puede indicar un problema serio. Taparla tienta, pero esconde la señal." },
    { q: "Si aparecen gotas en los vidrios y hongos en los rincones en invierno, ¿qué tipo de humedad es?", opciones: ["Una filtración del techo","Un caño roto","Condensación: hay que ventilar todos los días","Capilaridad"], correcta: 2, explicacion: "El vapor se condensa en lo frío. Un caño roto tienta, pero no daría gotas en los vidrios." },
    { q: "Si una mancha crece después de cada lluvia, cerca del techo, ¿qué tipo de humedad es?", opciones: ["Filtración","Condensación","Un caño del baño","Normal"], correcta: 0, explicacion: "Aparece con la lluvia: es agua que entra. Condensación tienta, pero no depende de la lluvia." },
    { q: "Si cerrás todas las canillas, esperás 1 hora y el medidor de agua cambió, ¿qué concluís?", opciones: ["Que el medidor anda bien","Que llovió","Nada","Que hay una pérdida en algún lado"], correcta: 3, explicacion: "Sin uso, el medidor no debería moverse. \"Anda bien\" tienta, pero está marcando agua que se pierde." },
    { q: "Si pintás encima de una mancha de humedad sin arreglar la causa, ¿qué pasa?", opciones: ["Se arregla","La mancha vuelve","Se seca sola","La pintura la absorbe para siempre"], correcta: 1, explicacion: "El agua sigue llegando. \"Se arregla\" tienta porque se ve bien unos días, pero vuelve." },
  ],
},
{
  id: "luz-gas",
  icono: "⚡",
  titulo: "Electricidad y gas sin riesgos",
  nivel: "Avanzado",
  objetivos: [
    "Reconocer la térmica y el disyuntor diferencial, y probar el disyuntor",
    "Cambiar una lámpara y usar enchufes y zapatillas de forma segura",
    "Actuar bien ante olor a gas o síntomas de monóxido de carbono",
  ],
  lecciones: [
    { titulo: "El tablero eléctrico", video: {"id":"nT8xR1ofX7g","t":"Cómo funciona el interruptor diferencial · Electrotec (6:58)"}, html: `
      <p class="idea">El <strong>tablero</strong> tiene dos tipos de protección. Conocerlas te ayuda a entender por qué se corta la luz y qué hacer, sin tocar la instalación.</p>
      <table>
        <tr><th>Protección</th><th>Qué protege</th><th>Cuándo salta</th></tr>
        <tr><td>Térmica (llave termomagnética)</td><td>Los cables: que no se recalienten</td><td>Cuando hay demasiados aparatos en un circuito o un cortocircuito</td></tr>
        <tr><td>Disyuntor diferencial</td><td>A las personas: de una descarga eléctrica</td><td>Cuando la corriente se "escapa" por un lugar que no debe, como el cuerpo de alguien</td></tr>
      </table>
      <pre><code>Si se corta la luz y saltó una térmica o el disyuntor:
1. Desenchufá el último aparato que conectaste.
2. Levantá la térmica o el disyuntor.
3. Si vuelve a saltar enseguida, aunque desenchufes todo,
   dejala baja y llamá a un electricista matriculado.

Una vez por mes:
Apretá el botón de prueba (T) del disyuntor: tiene que saltar.
Si no salta, no te está protegiendo → electricista matriculado.</code></pre>
      <p><strong>Nunca</strong> tapes una térmica para que no salte ni la cambies por una más grande: saltar es su trabajo.</p>
      <p>Por ejemplo, si la térmica de la cocina salta cada vez que usás la pava eléctrica con el horno, hay demasiado consumo en ese circuito: usalos por separado y consultá a un electricista.</p>` },
    { titulo: "Lámparas, enchufes y zapatillas", html: `
      <p class="idea">Hay cosas eléctricas que podés hacer vos con cuidado, como cambiar una lámpara, y otras que no. La regla: si hay que tocar cables, es trabajo de un electricista matriculado.</p>
      <pre><code>CAMBIAR UNA LÁMPARA
1. Apagá la llave de la luz (mejor: bajá la térmica de ese circuito).
2. Esperá que la lámpara esté fría.
3. Usá una escalera firme.
4. Sacala y poné una nueva de la misma rosca.

Equivalencias aproximadas (mirá el envase):
LED de 9 a 10 W ≈ incandescente de 60 W
LED de 12 a 14 W ≈ incandescente de 100 W</code></pre>
      <table>
        <tr><th>Hacé</th><th>No hagas</th></tr>
        <tr><td>Usar zapatillas con protección y para el consumo indicado</td><td>Enchufar una zapatilla en otra zapatilla</td></tr>
        <tr><td>Desenchufar tirando del enchufe, no del cable</td><td>Conectar estufas, pavas y hornos eléctricos en la misma zapatilla</td></tr>
        <tr><td>Revisar cables y enchufes de los aparatos</td><td>Usar aparatos con cables pelados o enchufes rotos</td></tr>
        <tr><td>Mantener la electricidad lejos del agua</td><td>Tocar aparatos con las manos mojadas o descalzo en piso mojado</td></tr>
      </table>
      <p><strong>Señales de alarma:</strong> olor a quemado, un enchufe o una zapatilla calientes, chispas o luces que parpadean. Desenchufá y llamá a un electricista matriculado.</p>
      <p>Por ejemplo, una zapatilla caliente con una estufa y una pava enchufadas es un riesgo de incendio: esos aparatos consumen mucho y van cada uno a su enchufe.</p>` },
    { titulo: "Gas: olor y monóxido", html: `
      <p class="idea">Con el gas no se hacen arreglos caseros: <strong>la instalación y la reparación de artefactos de gas las hace siempre un gasista matriculado</strong>. Lo que sí tenés que saber es cómo actuar ante un problema.</p>
      <pre><code>SI SENTÍS OLOR A GAS
1. No prendas ni apagues luces ni aparatos (una chispa puede encenderlo).
2. No fumes ni prendas fuego.
3. Abrí puertas y ventanas.
4. Cerrá la llave de paso del gas.
5. Salí y llamá desde afuera a la emergencia de tu distribuidora de gas.</code></pre>
      <table>
        <tr><th>Monóxido de carbono</th><th>Qué saber</th></tr>
        <tr><td>Qué es</td><td>Un gas que no tiene olor ni color; lo producen artefactos que queman mal</td></tr>
        <tr><td>Señal en el artefacto</td><td>Llama amarilla o anaranjada en vez de azul, manchas negras en la pared</td></tr>
        <tr><td>Síntomas</td><td>Dolor de cabeza, mareos, náuseas, sueño, en varias personas a la vez</td></tr>
        <tr><td>Qué hacer</td><td>Apagar el artefacto, ventilar, salir al aire libre y llamar a emergencias</td></tr>
      </table>
      <p><strong>Prevención:</strong> hacé revisar los artefactos por un gasista matriculado, dejá siempre una ventilación abierta y nunca tapes las rejillas.</p>
      <p>Por ejemplo, si una estufa tiene llama amarilla, hay que apagarla y llamar a un gasista matriculado, aunque la casa esté fría: está produciendo monóxido de carbono.</p>` },
  ],
  practica: [
    "Abrí tu tablero y anotá cuántas térmicas hay, si tiene disyuntor diferencial y qué dice el rótulo de cada una (si tiene).",
    "Apretá el botón de prueba del disyuntor, anotá si saltó y volvé a subirlo. Anotá la fecha para repetirlo en un mes.",
    "Mirá la llama de las hornallas y artefactos de gas de tu casa y anotá de qué color es cada una. Si alguna es amarilla, anotá a qué gasista vas a llamar.",
  ],
  recursos: [
    { t: "ENReGE (ex ENRE): uso eficiente y seguro de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro" },
    { t: "ENARGAS: seguridad con el gas en el hogar", url: "https://www.enargas.gob.ar/secciones/seguridad-en-el-hogar/seguridad-en-el-hogar.php" },
    { t: "ENARGAS: monóxido de carbono", url: "https://www.enargas.gob.ar/secciones/monoxido-de-carbono/monoxido-de-carbono.php" },
  ],
  quiz: [
    { q: "Si querés saber qué protege a las personas de una descarga eléctrica en el tablero, ¿cuál es?", opciones: ["La térmica","El medidor","El disyuntor diferencial","La lámpara"], correcta: 2, explicacion: "El disyuntor detecta corriente que se escapa por el cuerpo. La térmica tienta, pero protege a los cables." },
    { q: "Si la térmica salta cada vez que usás la pava y el horno juntos, ¿qué pasa?", opciones: ["Hay demasiado consumo en ese circuito: los usás por separado y consultás a un electricista","La térmica está rota: hay que taparla","Hay que poner una térmica más grande vos","Es normal, levantala siempre"], correcta: 0, explicacion: "La térmica protege los cables del exceso. Ponerla más grande tienta, pero los cables se recalientan." },
    { q: "Si la térmica vuelve a saltar enseguida, aunque desenchufaste todo, ¿qué hacés?", opciones: ["La subís muchas veces hasta que quede","La atás para que no baje","Cambiás vos los cables","La dejás baja y llamás a un electricista matriculado"], correcta: 3, explicacion: "Saltar sin carga indica una falla. Subirla muchas veces tienta, pero puede haber un cortocircuito." },
    { q: "Si apretás el botón de prueba del disyuntor y no salta, ¿qué concluís?", opciones: ["Que está todo bien","Que no te está protegiendo: llamás a un electricista matriculado","Que el botón es decorativo","Que hay que apretarlo más fuerte cada vez"], correcta: 1, explicacion: "Tiene que saltar al probarlo. \"Está todo bien\" tienta porque hay luz, pero la protección falla." },
    { q: "Si querés cambiar una lámpara quemada, ¿qué hacés antes?", opciones: ["La cambiás con la luz prendida","La sacás caliente","Apagás la luz (mejor la térmica de ese circuito) y esperás que se enfríe","Desenchufás la heladera"], correcta: 2, explicacion: "Sin corriente y fría, es seguro. Con la luz prendida tienta para ver mejor, pero hay riesgo de descarga." },
    { q: "Si querés reemplazar una lámpara incandescente de 60 W por una lámpara LED, ¿de cuánto la buscás?", opciones: ["De unos 9 a 10 W","De 60 W","De 100 W","De 1 W"], correcta: 0, explicacion: "La lámpara LED da la misma luz con mucho menos consumo. 60 W tienta por el número, pero sería muchísima luz." },
    { q: "Si querés cambiar un enchufe de la pared que está flojo, ¿quién lo hace?", opciones: ["Vos, con un tutorial","Un vecino","Nadie, se deja flojo","Un electricista matriculado"], correcta: 3, explicacion: "Tocar cables es trabajo matriculado. El tutorial tienta, pero un error puede causar una descarga o un incendio." },
    { q: "Si necesitás más enchufes, ¿podés enchufar una zapatilla en otra?", opciones: ["Sí, siempre","No: se sobrecarga y puede recalentarse","Sí, si son nuevas","Sí, si es de noche"], correcta: 1, explicacion: "Encadenar zapatillas sobrecarga la primera. \"Si son nuevas\" tienta, pero el límite es de consumo, no de antigüedad." },
    { q: "Si una zapatilla está caliente, ¿qué hacés?", opciones: ["Nada, es normal","La tapás con un trapo","Desenchufás todo y repartís los aparatos; si el enchufe sigue caliente, electricista","Le echás agua"], correcta: 2, explicacion: "El calor es una señal de alarma. \"Es normal\" tienta, pero es riesgo de incendio." },
    { q: "Si entrás a tu casa y sentís olor a gas, ¿qué no hacés?", opciones: ["No prendés ni apagás luces ni aparatos","No abrís las ventanas","No salís de la casa","No cerrás la llave de paso"], correcta: 0, explicacion: "Una chispa puede encender el gas. Prender la luz para ver tienta, pero es lo más peligroso." },
    { q: "Si una estufa tiene llama amarilla, ¿qué significa?", opciones: ["Que calienta más","Que es normal en invierno","Que le falta gas","Que está produciendo monóxido de carbono: la apagás y llamás a un gasista matriculado"], correcta: 3, explicacion: "La llama tiene que ser azul. \"Calienta más\" tienta por el color, pero es una combustión mala." },
    { q: "Si varias personas de la casa tienen dolor de cabeza y mareos con la estufa prendida, ¿qué hacés?", opciones: ["Toman una aspirina y siguen","Apagás el artefacto, ventilás, salen al aire libre y llamás a emergencias","Prenden otra estufa","Se van a dormir"], correcta: 1, explicacion: "Son síntomas de monóxido de carbono. Ir a dormir tienta por el cansancio, pero puede ser mortal." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu plan de mantenimiento",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de mantenimiento de tu casa con tareas y fechas",
    "Hacer 3 arreglos y evaluarlos con una rúbrica",
    "Saber cuándo y a quién llamar en cada caso",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final tiene dos partes: un <strong>plan de mantenimiento</strong> de tu casa y <strong>3 arreglos</strong> hechos por vos, registrados con fotos de antes y después.</p>
      <table>
        <tr><th>Parte</th><th>Módulo</th></tr>
        <tr><td>Kit de herramientas y protección</td><td>Herramientas, seguridad y límites</td></tr>
        <tr><td>Mapa de las llaves de agua, luz y gas</td><td>Herramientas, seguridad y límites</td></tr>
        <tr><td>3 arreglos (por ejemplo: colgar un estante, cambiar un cuerito, renovar silicona)</td><td>Colgar, Canillas, Puertas o Sellar</td></tr>
        <tr><td>Calendario de controles</td><td>Todos</td></tr>
        <tr><td>Lista de profesionales y emergencias</td><td>Electricidad y gas sin riesgos</td></tr>
      </table>
      <pre><code>Calendario de ejemplo:
Cada mes:        botón de prueba del disyuntor · llama de las hornallas
Cada 3 meses:    sifones y desagües · bisagras y cerraduras
Cada 6 meses:    silicona de baño y cocina · pérdidas de agua (medidor)
Cada año:        revisión de artefactos de gas por un gasista matriculado
                 antes del invierno</code></pre>
      <p>Por ejemplo, anotar el calendario en el celular con avisos hace que el control del disyuntor no dependa de la memoria.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar cada arreglo.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Preparación</td><td>Cortó el servicio que correspondía y juntó todo antes</td><td>Le faltó algo a mitad del arreglo</td><td>Empezó sin cortar el agua o la luz</td></tr>
        <tr><td>Herramienta y material</td><td>Los adecuados (broca, taco, lubricante, silicona)</td><td>Funcionó, pero no era lo ideal</td><td>Equivocados: dañó algo</td></tr>
        <tr><td>Resultado</td><td>Funciona y se probó (no gotea, no roza, aguanta)</td><td>Funciona sin probar</td><td>No funciona</td></tr>
        <tr><td>Terminación</td><td>Prolijo y limpio</td><td>Funciona, pero desprolijo</td><td>Dejó daños o suciedad</td></tr>
        <tr><td>Registro</td><td>Fotos de antes y después, y qué hizo</td><td>Solo una foto</td><td>Nada</td></tr>
        <tr><td>Seguridad</td><td>Usó protección y no tocó gas ni instalación eléctrica</td><td>—</td><td>Sin protección o tocó gas o cables</td></tr>
      </table>
      <pre><code>Máximo: 12 por arreglo
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá el módulo y volvé a intentarlo
Regla: si "Seguridad" tiene 0, el arreglo no está bien hecho,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un estante perfecto colgado sin anteojos de seguridad, o cambiando un enchufe de la pared, saca 0 en seguridad.</p>` },
    { titulo: "A quién llamar", html: `
      <p class="idea">Saber tus límites es parte de arreglar bien una casa. Tené a mano una lista de profesionales y de números de emergencia antes de necesitarlos.</p>
      <table>
        <tr><th>Problema</th><th>A quién</th></tr>
        <tr><td>Artefactos o instalación de gas</td><td>Gasista matriculado</td></tr>
        <tr><td>Enchufes, cables, térmicas que saltan sin motivo</td><td>Electricista matriculado</td></tr>
        <tr><td>Caños dentro de la pared, pérdidas que no ves</td><td>Plomero</td></tr>
        <tr><td>Fisuras que crecen, filtraciones del techo</td><td>Un profesional de la construcción</td></tr>
        <tr><td>Cerradura trabada o llave rota adentro</td><td>Cerrajero</td></tr>
        <tr><td>Olor a gas</td><td>Emergencia de tu distribuidora de gas</td></tr>
        <tr><td>Intoxicación, incendio o accidente</td><td>Emergencias: 911 (o 107 para emergencias médicas y 100 para bomberos)</td></tr>
      </table>
      <p><strong>Pedí la matrícula:</strong> un gasista o electricista matriculado te la puede mostrar. Es tu garantía de que sabe y responde por su trabajo.</p>
      <p><strong>Seguir aprendiendo:</strong> el curso "Carpintería básica" de este sitio sigue con trabajos en madera; los centros de formación profesional de tu municipio dan cursos presenciales de plomería, electricidad y gas, con matrícula al final.</p>
      <p>Por ejemplo, tener el número del gasista anotado en la heladera ahorra tiempo justo el día que una estufa tiene llama amarilla.</p>` },
  ],
  practica: [
    "Armá tu plan de mantenimiento con el kit, el mapa de llaves y el calendario. Anotá cuántas tareas tiene cada frecuencia.",
    "Hacé 3 arreglos con fotos de antes y después, y evaluá cada uno con la rúbrica. Anotá los 3 puntajes.",
    "Completá tu lista de profesionales y emergencias con nombres y números, y anotá dónde la dejaste a la vista.",
  ],
  recursos: [
    { t: "ENARGAS: seguridad con el gas en el hogar", url: "https://www.enargas.gob.ar/secciones/seguridad-en-el-hogar/seguridad-en-el-hogar.php" },
    { t: "ENReGE (ex ENRE): uso eficiente y seguro de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si armás tu plan de mantenimiento, ¿qué tiene que incluir?", opciones: ["Solo la lista de herramientas","Solo los arreglos","Kit, mapa de llaves, 3 arreglos registrados, calendario y lista de profesionales","Solo los números de emergencia"], correcta: 2, explicacion: "El plan junta todo el curso. Solo los arreglos tienta por práctico, pero falta prevenir." },
    { q: "Si querés acordarte de probar el disyuntor, ¿cada cuánto lo ponés en el calendario?", opciones: ["Cada mes","Cada 5 años","Nunca","Cuando se corta la luz"], correcta: 0, explicacion: "La prueba es mensual. \"Cuando se corta la luz\" tienta, pero la prueba es para saber si protege antes de necesitarlo." },
    { q: "Si llega el invierno, ¿qué control conviene hacer antes?", opciones: ["Pintar el living","Cambiar las lámparas","Nada","La revisión de los artefactos de gas por un gasista matriculado"], correcta: 3, explicacion: "En invierno se usan más estufas. Pintar tienta como tarea de temporada, pero el gas es lo urgente." },
    { q: "Si empezaste a cambiar un cuerito sin cerrar el agua, ¿cuánto sacás en \"Preparación\"?", opciones: ["2 puntos","0 puntos","1 punto","No se evalúa"], correcta: 1, explicacion: "Cortar el agua es lo primero. Sacar 1 tienta si lo resolviste, pero empezaste mal." },
    { q: "Si el estante quedó firme, pero no lo probaste con peso, ¿cuánto sacás en \"Resultado\"?", opciones: ["2 puntos","0 puntos","1 punto","3 puntos"], correcta: 2, explicacion: "Funciona sin probar es 1. Sacar 2 tienta porque parece firme, pero falta comprobarlo." },
    { q: "Si el arreglo saca 11, pero lo hiciste cambiando un enchufe de la pared, ¿está bien hecho?", opciones: ["No: \"Seguridad\" tiene 0 y eso no se compensa con el total","Sí, 11 es listo","Sí, si funciona","Depende del enchufe"], correcta: 0, explicacion: "La regla de la rúbrica lo dice. \"Si funciona\" tienta, pero tocar la instalación eléctrica es trabajo matriculado." },
    { q: "Si un arreglo saca 8, ¿qué hacés?", opciones: ["Lo das por terminado","Dejás de arreglar cosas","Cambiás la rúbrica","Mejorás lo que sacó 0 o 1"], correcta: 3, explicacion: "De 7 a 10 se mejora lo flojo. Darlo por terminado tienta, pero le falta poco." },
    { q: "Si la térmica salta sin motivo una y otra vez, ¿a quién llamás?", opciones: ["A un plomero","A un electricista matriculado","A un cerrajero","A nadie, la atás"], correcta: 1, explicacion: "Es un problema de la instalación eléctrica. Atarla tienta, pero anula la protección." },
    { q: "Si hay una mancha de humedad que crece aunque no llueva, ¿a quién llamás?", opciones: ["A un electricista","A un pintor","A un plomero: puede ser un caño dentro de la pared","A nadie"], correcta: 2, explicacion: "El agua viene de un caño. El pintor tienta porque se ve la mancha, pero vuelve si no se arregla la pérdida." },
    { q: "Si sentís olor a gas en tu casa, ¿a quién llamás desde afuera?", opciones: ["A la emergencia de tu distribuidora de gas","A un electricista","A un vecino para que entre","A nadie, se va solo"], correcta: 0, explicacion: "La distribuidora atiende las emergencias de gas. \"Se va solo\" tienta, pero puede haber una explosión." },
    { q: "Si contratás a un gasista, ¿qué le pedís?", opciones: ["Que trabaje sin papeles para que salga más barato","Nada","Que te deje hacerlo a vos","Que te muestre su matrícula"], correcta: 3, explicacion: "La matrícula garantiza que sabe y responde. Sin papeles tienta por el precio, pero el riesgo es enorme." },
    { q: "Si querés aprender plomería, electricidad o gas en serio, ¿dónde vas?", opciones: ["Solo a videos de internet","A un centro de formación profesional, con matrícula al final","A un foro","A ningún lado: se aprende probando en tu casa"], correcta: 1, explicacion: "Los centros de formación profesional enseñan y habilitan. Los videos tientan por gratis, pero no dan matrícula ni práctica supervisada." },
  ],
},
];
