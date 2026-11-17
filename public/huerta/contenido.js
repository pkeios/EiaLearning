// Temario del curso "Huerta en casa o en el balcón". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js huerta y node tools/metodologia.js huerta
window.TEMARIO = [
{
  id: "empezar",
  icono: "🌱",
  titulo: "Antes de sembrar",
  nivel: "Básico",
  objetivos: [
    "Medir cuántas horas de sol tiene tu espacio",
    "Elegir qué cultivar según el sol, el espacio y lo que comés",
    "Juntar las herramientas básicas sin gastar de más",
  ],
  lecciones: [
    { titulo: "El sol manda", video: {"id":"1Co4vHnmgW0","t":"Cómo armar mi primera huerta en el balcón · De Raíz TV (4:48)"}, html: `
      <p class="idea">Lo más importante para una huerta es el <strong>sol</strong>. Antes de comprar nada, medí cuántas horas de sol directo recibe tu espacio en un día.</p>
      <pre><code>Cómo medirlo:
Mirá el lugar cada hora, de 8 a 18, un día despejado.
Anotá en qué horas le da el sol directo.

Balcón de ejemplo: sol de 10 a 16 → 6 horas</code></pre>
      <table>
        <tr><th>Horas de sol directo</th><th>Qué podés cultivar</th></tr>
        <tr><td>6 o más</td><td>Hortalizas de fruto: tomate, pimiento, zapallito, frutilla</td></tr>
        <tr><td>4 a 6</td><td>Hojas y raíces: lechuga, acelga, rabanito, espinaca</td></tr>
        <tr><td>2 a 4</td><td>Algunas aromáticas: perejil, menta, ciboulette</td></tr>
        <tr><td>Menos de 2</td><td>Muy poco: probá en otro lugar de la casa</td></tr>
      </table>
      <p><strong>El sol cambia con las estaciones:</strong> en invierno el sol va más bajo y un balcón puede quedar más a la sombra que en verano.</p>
      <p><strong>En Argentina, el lado norte es el más soleado</strong> (estamos en el hemisferio sur).</p>
      <p>En todo el curso armamos la misma huerta de ejemplo: <strong>1 metro cuadrado en un balcón</strong> de la ciudad, con cajones y macetas. Las fechas son para el centro del país; en tu zona pueden correrse unas semanas.</p>
      <p>Por ejemplo, un balcón al sur con 2 horas de sol no va a dar tomates, pero sí perejil y menta.</p>` },
    { titulo: "Qué cultivar", html: `
      <p class="idea">Para empezar, elegí pocas plantas fáciles, que comas seguido y que se den en tu estación. Es mejor tener éxito con 4 que fracasar con 15.</p>
      <table>
        <tr><th>Fácil para empezar</th><th>Por qué</th><th>Cosecha aproximada</th></tr>
        <tr><td>Rabanito</td><td>Crece rápido</td><td>Unos 30 días</td></tr>
        <tr><td>Lechuga</td><td>Se corta de a hojas</td><td>45 a 60 días</td></tr>
        <tr><td>Acelga</td><td>Da hojas durante meses</td><td>60 días y sigue</td></tr>
        <tr><td>Albahaca, perejil</td><td>Se usan todos los días</td><td>40 a 70 días</td></tr>
        <tr><td>Tomate cherry</td><td>Rinde mucho en maceta</td><td>70 a 90 días desde el trasplante</td></tr>
      </table>
      <p><strong>Pensá en lo que comés:</strong> no tiene sentido llenar el balcón de rúcula si nadie en casa la come.</p>
      <p><strong>Dejá para más adelante</strong> lo que ocupa mucho lugar (zapallo, choclo) o tarda mucho.</p>
      <p>Por ejemplo, para el balcón de 1 m² con 6 horas de sol, en primavera alcanzan 2 tomates cherry, 4 lechugas, una fila de rabanitos y 2 albahacas.</p>` },
    { titulo: "Herramientas sin gastar de más", html: `
      <p class="idea">Para una huerta chica alcanza con pocas herramientas. Muchas cosas se pueden reciclar.</p>
      <table>
        <tr><th>Herramienta</th><th>Alternativa reciclada</th></tr>
        <tr><td>Macetas y cajones</td><td>Baldes, cajones de fruta forrados, bidones cortados (con agujeros abajo)</td></tr>
        <tr><td>Almaciguera</td><td>Maples de huevos, vasitos de yogur</td></tr>
        <tr><td>Regadera</td><td>Botella con agujeritos en la tapa</td></tr>
        <tr><td>Pala de mano</td><td>Una cuchara grande vieja para las macetas</td></tr>
        <tr><td>Tutores</td><td>Cañas, palos de escoba</td></tr>
        <tr><td>Guantes</td><td>Imprescindibles para el compost y la tierra</td></tr>
      </table>
      <p><strong>En un balcón, el peso importa:</strong> la tierra mojada pesa mucho. No llenes el balcón de macetas grandes sin consultar si la estructura lo soporta, y no las cuelgues de la baranda hacia afuera.</p>
      <p><strong>Lavate las manos</strong> después de trabajar con tierra y compost.</p>
      <p>Por ejemplo, un cajón de fruta forrado con una bolsa de nylon agujereada sirve como cantero para lechugas y no cuesta nada.</p>` },
  ],
  practica: [
    "Medí las horas de sol directo de tu espacio un día despejado y anotá desde qué hora hasta qué hora le da.",
    "Elegí 4 cultivos para empezar según tu sol y lo que comés, y anotá cuántos días tarda cada uno en dar cosecha.",
    "Hacé la lista de herramientas y anotá cuáles vas a reciclar y cuáles tenés que comprar.",
  ],
  recursos: [
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Tus primeros pasos de huerta\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/tus-primeros-pasos-de-huerta.pdf" },
    { t: "INTA: información agroclimática (heladas y clima de tu zona)", url: "https://www.argentina.gob.ar/inta/informacion-agroclimatica" },
  ],
  quiz: [
    { q: "Si vas a armar una huerta, ¿qué medís primero?", opciones: ["El color de las macetas","Cuántas semillas entran","Cuántas horas de sol directo recibe el lugar","La temperatura del agua"], correcta: 2, explicacion: "Sin sol, no hay huerta. Las semillas tientan como primer paso, pero sin sol no crecen." },
    { q: "Si tu balcón tiene 6 horas de sol, ¿qué podés cultivar?", opciones: ["Hortalizas de fruto como el tomate, además de hojas","Solo menta","Nada","Solo hongos"], correcta: 0, explicacion: "Con 6 horas se dan las de fruto. \"Solo menta\" tienta por precaución, pero alcanza para más." },
    { q: "Si tu balcón tiene 2 horas de sol, ¿qué conviene?", opciones: ["Tomates","Zapallos","Pimientos","Algunas aromáticas como perejil o menta"], correcta: 3, explicacion: "Las de fruto necesitan mucho sol. Tomates tienta porque son los más deseados, pero no van a producir." },
    { q: "Si vivís en Argentina, ¿qué orientación tiene más sol?", opciones: ["El sur","El norte","Da igual","El oeste siempre"], correcta: 1, explicacion: "En el hemisferio sur, el sol va por el norte. El sur tienta si pensás en el hemisferio norte." },
    { q: "Si en verano tu balcón tiene mucho sol, ¿pasa lo mismo en invierno?", opciones: ["Sí, siempre","Tiene más sol en invierno","No necesariamente: el sol va más bajo y puede haber más sombra","No hay sol en invierno"], correcta: 2, explicacion: "El ángulo del sol cambia. \"Sí, siempre\" tienta, pero edificios cercanos pueden tapar más en invierno." },
    { q: "Si recién empezás, ¿cuántas plantas distintas conviene tener?", opciones: ["Pocas y fáciles, por ejemplo 4","15 o más","Una de cada semilla que encuentres","Ninguna"], correcta: 0, explicacion: "Pocas te dejan aprender. Muchas tientan por entusiasmo, pero se descuidan." },
    { q: "Si querés una cosecha rápida, ¿qué sembrás?", opciones: ["Zapallo","Choclo","Ajo","Rabanitos: unos 30 días"], correcta: 3, explicacion: "El rabanito es de los más rápidos. El ajo tienta por fácil, pero tarda meses." },
    { q: "Si nadie en tu casa come rúcula, ¿conviene sembrar mucha?", opciones: ["Sí, es fácil","No: conviene cultivar lo que comés","Sí, para regalar siempre","Sí, porque es verde"], correcta: 1, explicacion: "La huerta tiene sentido si la usás. \"Es fácil\" tienta, pero se desperdicia." },
    { q: "Si no tenés almaciguera, ¿qué podés usar?", opciones: ["Nada, hay que comprarla","Una bolsa cerrada sin agujeros","Maples de huevos o vasitos de yogur","Un vaso de vidrio sin drenaje"], correcta: 2, explicacion: "Se puede reciclar. La bolsa cerrada tienta, pero sin agujeros se pudre la raíz." },
    { q: "Si reciclás un bidón como maceta, ¿qué tenés que hacerle?", opciones: ["Agujeros abajo para que drene el agua","Nada","Pintarlo de negro","Taparlo arriba"], correcta: 0, explicacion: "Sin drenaje se encharca. \"Nada\" tienta por rápido, pero las raíces se pudren." },
    { q: "Si querés llenar el balcón de macetas grandes, ¿qué tenés en cuenta?", opciones: ["Nada","Solo el color","Que se vean desde la calle","El peso de la tierra mojada y si la estructura lo soporta"], correcta: 3, explicacion: "La tierra mojada pesa mucho. \"Nada\" tienta, pero puede ser peligroso." },
    { q: "Si querés colgar macetas de la baranda hacia afuera, ¿qué hacés?", opciones: ["Las colgás con hilo","No lo hacés: se pueden caer a la calle","Las colgás sin atar","Las ponés en el borde"], correcta: 1, explicacion: "Una maceta que cae puede lastimar a alguien. Atarlas con hilo tienta, pero no es seguro." },
  ],
},
{
  id: "macetas",
  icono: "🪴",
  titulo: "Macetas, cajones y sustrato",
  nivel: "Básico",
  objetivos: [
    "Elegir el tamaño de maceta según la planta",
    "Asegurar el drenaje de cada recipiente",
    "Preparar un sustrato suelto y nutritivo",
  ],
  lecciones: [
    { titulo: "El tamaño justo", video: {"id":"UC0CUapiyls","t":"Así se cultiva en poco espacio: huerta en 1 m² · Mario Cantarutti (8:02)"}, html: `
      <p class="idea">Cada planta necesita un mínimo de tierra para sus raíces. Una maceta chica limita a la planta y se seca enseguida.</p>
      <table>
        <tr><th>Cultivo</th><th>Profundidad mínima</th><th>Ejemplo de recipiente</th></tr>
        <tr><td>Lechuga, rúcula, aromáticas</td><td>15 a 20 cm</td><td>Cajón o jardinera</td></tr>
        <tr><td>Acelga, espinaca</td><td>20 a 25 cm</td><td>Cajón hondo</td></tr>
        <tr><td>Zanahoria, remolacha</td><td>25 a 30 cm</td><td>Balde o cajón hondo</td></tr>
        <tr><td>Tomate, pimiento</td><td>30 a 40 cm</td><td>Balde de unos 20 litros por planta</td></tr>
      </table>
      <pre><code>Balcón de 1 m² (2 m × 0,5 m):
2 baldes de 20 L       → 2 tomates cherry
1 cajón de 60 × 20 cm  → 4 lechugas
1 cajón de 60 × 20 cm  → rabanitos en fila
2 macetas de 15 cm     → 2 albahacas</code></pre>
      <p><strong>Más grande se seca menos:</strong> en verano, las macetas chicas pueden necesitar riego dos veces por día.</p>
      <p>Por ejemplo, un tomate en una maceta de 3 litros da pocos frutos y chicos; en un balde de 20 litros, mucho más.</p>` },
    { titulo: "El drenaje", html: `
      <p class="idea">Las raíces necesitan agua y también aire. Si el agua no sale, la tierra queda encharcada y las raíces se pudren. Por eso cada recipiente necesita <strong>drenaje</strong>.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Agujeros en la base de cada recipiente</td><td>Macetas sin agujeros</td></tr>
        <tr><td>Un plato abajo para no mojar el piso, vaciado después de regar</td><td>Dejar el plato siempre lleno de agua</td></tr>
        <tr><td>Levantar un poco la maceta del piso</td><td>Apoyarla directo sobre el piso, tapando los agujeros</td></tr>
      </table>
      <pre><code>Prueba de drenaje:
Regá una maceta hasta que salga agua por abajo.
Si tarda más de 1 minuto en empezar a salir
o el agua queda arriba, el sustrato está muy compacto
o los agujeros están tapados.</code></pre>
      <p><strong>Las capas de piedras en el fondo</strong> no mejoran tanto el drenaje como se cree: lo más importante son los agujeros y un sustrato suelto.</p>
      <p>Por ejemplo, una albahaca con las hojas amarillas y la tierra siempre mojada casi siempre tiene un problema de drenaje, no de falta de agua.</p>` },
    { titulo: "El sustrato", html: `
      <p class="idea">El <strong>sustrato</strong> es la tierra preparada donde crecen las plantas. Para macetas tiene que ser suelto, retener algo de humedad y tener nutrientes.</p>
      <pre><code>Mezcla simple para macetas:
2 partes de tierra negra o tierra fértil
1 parte de compost (o humus de lombriz)
(opcional) 1 puñado de perlita o arena gruesa por balde,
si la tierra es muy pesada

Para un balde de 20 L:
unos 13 L de tierra + unos 7 L de compost</code></pre>
      <table>
        <tr><th>Sustrato bueno</th><th>Sustrato malo</th></tr>
        <tr><td>Oscuro, suelto, se desarma en la mano</td><td>Se hace un bloque duro al secarse</td></tr>
        <tr><td>Huele a bosque</td><td>Huele a podrido</td></tr>
        <tr><td>Drena bien</td><td>Queda encharcado</td></tr>
      </table>
      <p><strong>No uses tierra del jardín sola:</strong> en maceta se compacta y puede traer plagas o semillas de malezas.</p>
      <p><strong>Cada temporada,</strong> sumale una capa de compost: las plantas se van comiendo los nutrientes.</p>
      <p>Por ejemplo, si al apretar un puñado de sustrato húmedo se forma una pelota dura que no se desarma, le falta compost o algo que lo afloje.</p>` },
  ],
  practica: [
    "Elegí los recipientes para tus 4 cultivos y anotá la profundidad de cada uno y si cumple el mínimo de la tabla.",
    "Hacé la prueba de drenaje en una maceta y anotá cuántos segundos tardó en salir el agua.",
    "Prepará sustrato para un recipiente con la mezcla 2 a 1 y anotá cuántos litros de cada cosa usaste.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: guía de hortalizas (en inglés)", url: "https://rhs.org.uk/vegetables" },
    { t: "Penn State Extension: huerta de hortalizas (en inglés)", url: "https://extension.psu.edu/vegetable-gardening" },
  ],
  quiz: [
    { q: "Si vas a plantar un tomate, ¿qué recipiente conviene?", opciones: ["Una maceta de 3 litros","Un vaso de yogur","Un balde de unos 20 litros, de 30 a 40 cm de hondo","Un plato"], correcta: 2, explicacion: "El tomate tiene raíces grandes. La maceta chica tienta por espacio, pero da pocos frutos." },
    { q: "Si vas a plantar lechugas, ¿qué profundidad alcanza?", opciones: ["15 a 20 cm","50 cm","5 cm","1 metro"], correcta: 0, explicacion: "La lechuga tiene raíces cortas. 50 cm tienta \"por las dudas\", pero gastás tierra de más." },
    { q: "Si querés zanahorias, ¿qué profundidad necesitás?", opciones: ["10 cm","5 cm","15 cm","25 a 30 cm"], correcta: 3, explicacion: "La raíz es lo que comés. 15 cm tienta porque alcanza para hojas, pero la zanahoria queda corta." },
    { q: "Si una maceta es muy chica, ¿qué pasa en verano?", opciones: ["Retiene más agua","Se seca enseguida y puede necesitar riego dos veces por día","No pasa nada","La planta crece más"], correcta: 1, explicacion: "Poca tierra guarda poca agua. \"Retiene más\" tienta, pero es al revés." },
    { q: "Si una maceta no tiene agujeros, ¿qué pasa?", opciones: ["La planta crece mejor","Ahorra agua sin problemas","El agua se acumula y las raíces se pudren","Nada"], correcta: 2, explicacion: "Sin drenaje se encharca. \"Ahorra agua\" tienta, pero ahoga las raíces." },
    { q: "Si ponés un plato debajo de la maceta, ¿qué hacés después de regar?", opciones: ["Lo vaciás para que no quede agua estancada","Lo dejás lleno siempre","Le agregás más agua","Lo tapás"], correcta: 0, explicacion: "El agua estancada vuelve a la tierra. Dejarlo lleno tienta para \"reservar\", pero encharca." },
    { q: "Si regás y el agua tarda mucho en salir por abajo, ¿qué puede pasar?", opciones: ["Está perfecto","La planta tomó toda el agua","Falta sol","El sustrato está compacto o los agujeros tapados"], correcta: 3, explicacion: "El agua tiene que pasar. \"Está perfecto\" tienta, pero es señal de mal drenaje." },
    { q: "Si una albahaca tiene hojas amarillas y la tierra siempre mojada, ¿qué revisás?", opciones: ["Regarla más","El drenaje","Ponerle más tierra encima","Nada"], correcta: 1, explicacion: "Exceso de agua también amarillea. Regarla más tienta, pero empeora el problema." },
    { q: "Si querés preparar sustrato simple, ¿qué mezcla usás?", opciones: ["Solo arena","Solo tierra del jardín","2 partes de tierra y 1 de compost","Solo compost sin tierra"], correcta: 2, explicacion: "La mezcla equilibra estructura y nutrientes. Tierra del jardín sola tienta por gratis, pero se compacta." },
    { q: "Si tu balde es de 20 litros, ¿cuánto compost lleva con la mezcla 2 a 1?", opciones: ["Unos 7 litros","20 litros","2 litros","13 litros"], correcta: 0, explicacion: "20 / 3 ≈ 7 de compost y 13 de tierra. 13 tienta, pero esa es la parte de tierra." },
    { q: "Si un puñado de sustrato húmedo se hace una pelota dura, ¿qué le falta?", opciones: ["Más agua","Más presión","Nada","Compost o algo que lo afloje"], correcta: 3, explicacion: "Tiene que desarmarse. Más agua tienta, pero lo compacta más." },
    { q: "Si ya cosechaste una temporada, ¿qué hacés con el sustrato?", opciones: ["Lo tirás todo siempre","Le sumás una capa de compost","Nada, sirve igual para siempre","Le echás sal"], correcta: 1, explicacion: "Las plantas consumen nutrientes. \"Sirve para siempre\" tienta, pero se agota." },
  ],
},
{
  id: "sembrar",
  icono: "🌾",
  titulo: "Sembrar y trasplantar",
  nivel: "Intermedio",
  objetivos: [
    "Elegir qué sembrar en cada estación",
    "Hacer almácigos y trasplantar plantines",
    "Sembrar directo las especies que no se trasplantan",
  ],
  lecciones: [
    { titulo: "Cada cosa en su estación", html: `
      <p class="idea">Cada planta tiene su época. Sembrar fuera de estación es la causa más común de que una huerta no prospere. Las fechas cambian según tu zona: en el sur del país todo se corre más tarde.</p>
      <table>
        <tr><th>Época (centro del país)</th><th>Qué sembrar o plantar</th></tr>
        <tr><td>Primavera-verano (septiembre a febrero)</td><td>Tomate, pimiento, zapallito, albahaca, chaucha, pepino, lechuga de verano</td></tr>
        <tr><td>Otoño-invierno (marzo a agosto)</td><td>Lechuga, acelga, espinaca, rabanito, arveja, haba, ajo, cebolla de verdeo, perejil</td></tr>
        <tr><td>Casi todo el año</td><td>Rabanito, lechuga y acelga (con más cuidado en pleno verano o invierno)</td></tr>
      </table>
      <p><strong>Las heladas:</strong> tomate, pimiento, albahaca y zapallito no aguantan heladas. Se trasplantan afuera cuando ya pasó el riesgo de la última helada de tu zona.</p>
      <p><strong>Consultá tu zona:</strong> el INTA publica información agroclimática con las fechas de heladas de cada región.</p>
      <p>Por ejemplo, un tomate trasplantado en julio en Buenos Aires probablemente se hiele; el mismo tomate en octubre crece sin problemas.</p>` },
    { titulo: "Almácigos y trasplante", video: {"id":"QYlN4aE0cec","t":"Huerta en casa: siembra en almácigos · Terrafertil (4:35)"}, html: `
      <p class="idea">Un <strong>almácigo</strong> es un recipiente chico donde nacen las plantas protegidas. Cuando crecen un poco, se <strong>trasplantan</strong> a su lugar definitivo.</p>
      <pre><code>1. Llená los vasitos con sustrato fino y húmedo.
2. Sembrá 2 o 3 semillas por vasito, a una profundidad
   de 2 o 3 veces el tamaño de la semilla.
3. Tapá apenas y regá con pulverizador (sin arrastrar las semillas).
4. Lugar con luz y abrigado, sin sol fuerte directo.
5. Cuando nacen, dejá la más fuerte de cada vasito.
6. Trasplantá cuando tengan 4 a 6 hojas verdaderas.</code></pre>
      <table>
        <tr><th>Para trasplantar bien</th></tr>
        <tr><td>Regá el almácigo antes, para que salga el pan de tierra entero</td></tr>
        <tr><td>Hacelo a la tarde, para que no le dé el sol fuerte enseguida</td></tr>
        <tr><td>Plantá a la misma altura (el tomate se puede enterrar un poco más)</td></tr>
        <tr><td>Regá enseguida después del trasplante</td></tr>
      </table>
      <p>Por ejemplo, si trasplantás un plantín de lechuga al mediodía de un día de calor, se marchita; a la tarde, con riego, se recupera en un día.</p>` },
    { titulo: "Siembra directa", html: `
      <p class="idea">Algunas plantas no se llevan bien con el trasplante y se siembran <strong>directo</strong> en su recipiente definitivo.</p>
      <table>
        <tr><th>Siembra directa</th><th>Por qué</th></tr>
        <tr><td>Rabanito, zanahoria, remolacha</td><td>Son raíces: el trasplante las deforma</td></tr>
        <tr><td>Arveja, chaucha, haba</td><td>Semillas grandes que nacen fáciles</td></tr>
        <tr><td>Rúcula, espinaca</td><td>Crecen rápido</td></tr>
      </table>
      <pre><code>Rabanitos en un cajón de 60 cm:
Hacé un surco de 1 cm de hondo.
Una semilla cada 3 a 4 cm → unas 15 a 20 semillas.
Tapá, apretá suave y regá.

Siembra escalonada:
Sembrá una fila nueva cada 2 semanas
→ cosechás un poco todo el tiempo, no todo junto.</code></pre>
      <p><strong>Ralear:</strong> si nacen muy juntas, sacá algunas para que las demás tengan lugar. Las que sacás de lechuga o rúcula se pueden comer.</p>
      <p>Por ejemplo, sembrar rabanitos cada 2 semanas en el mismo cajón da una cosecha chica, pero continua, en vez de 40 rabanitos que se pasan el mismo día.</p>` },
  ],
  practica: [
    "Armá un calendario de tu huerta: anotá qué vas a sembrar en primavera-verano y qué en otoño-invierno.",
    "Hacé un almácigo con al menos 6 vasitos y anotá el día que sembraste y el día que nació cada uno.",
    "Sembrá rabanitos directo y anotá cuántas semillas pusiste, cuántas nacieron y en cuántos días.",
  ],
  recursos: [
    { t: "INTA: información agroclimática (heladas y clima de tu zona)", url: "https://www.argentina.gob.ar/inta/informacion-agroclimatica" },
    { t: "Royal Horticultural Society: guía de hortalizas (en inglés)", url: "https://rhs.org.uk/vegetables" },
  ],
  quiz: [
    { q: "Si querés sembrar tomate en el centro del país, ¿en qué época lo hacés?", opciones: ["Pleno invierno","Cualquier momento","Primavera-verano, después de las heladas","Solo en otoño"], correcta: 2, explicacion: "El tomate no aguanta heladas. \"Cualquier momento\" tienta, pero en invierno se hiela." },
    { q: "Si estás en otoño-invierno, ¿qué podés sembrar?", opciones: ["Lechuga, acelga, espinaca, arveja, haba o ajo","Tomate y albahaca","Pimiento y pepino","Zapallito y chaucha"], correcta: 0, explicacion: "Son cultivos de frío. Tomate tienta por ser el más conocido, pero es de verano." },
    { q: "Si trasplantás tomate en julio en Buenos Aires, ¿qué puede pasar?", opciones: ["Que crezca más rápido","Nada","Que dé más frutos","Que se hiele"], correcta: 3, explicacion: "Julio tiene heladas. \"Nada\" tienta si el día está lindo, pero las noches hielan." },
    { q: "Si querés saber cuándo es la última helada en tu zona, ¿dónde lo buscás?", opciones: ["En el envase de cualquier semilla de otro país","En la información agroclimática del INTA","En redes sin fuente","No se puede saber"], correcta: 1, explicacion: "El INTA publica datos por región. Un envase de otro país tienta, pero tiene otras estaciones." },
    { q: "Si hacés un almácigo, ¿cuántas semillas ponés por vasito?", opciones: ["Una sola siempre","20","2 o 3, y después dejás la más fuerte","Ninguna"], correcta: 2, explicacion: "Así asegurás que nazca alguna. 20 tienta \"por las dudas\", pero compiten y salen débiles." },
    { q: "Si una semilla es chica, ¿a qué profundidad la sembrás?", opciones: ["A 2 o 3 veces su tamaño: casi en la superficie","A 10 cm","A 30 cm","Encima, sin tapar nunca"], correcta: 0, explicacion: "Las chicas van superficiales. 10 cm tienta por protegerla, pero no llega a salir." },
    { q: "Si querés regar un almácigo recién sembrado, ¿cómo lo hacés?", opciones: ["Con la manguera fuerte","Con un balde de golpe","No se riega","Con pulverizador, para no arrastrar las semillas"], correcta: 3, explicacion: "El agua fuerte mueve las semillas. La manguera tienta por rápida, pero las desparrama." },
    { q: "Si un plantín tiene 4 a 6 hojas verdaderas, ¿qué hacés?", opciones: ["Lo dejás en el almácigo para siempre","Lo trasplantás a su lugar definitivo","Lo cortás","Lo ponés al sol fuerte sin regar"], correcta: 1, explicacion: "Es el momento justo. Dejarlo tienta, pero el vasito queda chico." },
    { q: "Si vas a trasplantar, ¿en qué momento del día conviene?", opciones: ["Al mediodía con calor","Sin regar después","A la tarde, y regando enseguida","A cualquier hora sin cuidado"], correcta: 2, explicacion: "A la tarde no sufre el sol. El mediodía tienta por tener tiempo libre, pero se marchita." },
    { q: "Si querés zanahorias, ¿cómo las sembrás?", opciones: ["Directo en su recipiente: el trasplante deforma las raíces","En almácigo y después trasplante","En agua","De a una en vasitos para trasplantar"], correcta: 0, explicacion: "Las raíces se deforman al trasplantar. El almácigo tienta porque sirve para otras, pero no para estas." },
    { q: "Si en un cajón de 60 cm ponés un rabanito cada 3 o 4 cm, ¿cuántas semillas entran?", opciones: ["2","200","60","Unas 15 a 20"], correcta: 3, explicacion: "60 / 4 = 15 y 60 / 3 = 20. 60 tienta si ponés una por centímetro, pero quedan muy juntas." },
    { q: "Si querés cosechar rabanitos de a poco todo el tiempo, ¿qué hacés?", opciones: ["Sembrás todo junto","Siembra escalonada: una fila nueva cada 2 semanas","Sembrás una vez por año","No se puede"], correcta: 1, explicacion: "Escalonar reparte la cosecha. Todo junto tienta por simple, pero se pasan el mismo día." },
  ],
},
{
  id: "cuidar",
  icono: "💧",
  titulo: "Riego y cuidados",
  nivel: "Intermedio",
  objetivos: [
    "Regar en la cantidad y el momento justos",
    "Proteger el sustrato con cobertura",
    "Usar tutores y podas simples en tomates",
  ],
  lecciones: [
    { titulo: "Regar bien", html: `
      <p class="idea">Más plantas se pierden por exceso de riego que por falta. La regla es simple: regá cuando la tierra está seca un poco por debajo de la superficie, y regá bien.</p>
      <pre><code>Prueba del dedo:
Meté un dedo 2 cm en la tierra.
Seco → regá hasta que salga agua por abajo.
Húmedo → esperá.</code></pre>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Regar temprano a la mañana o al atardecer</td><td>Regar al mediodía con sol fuerte</td></tr>
        <tr><td>Mojar la tierra, al pie de la planta</td><td>Mojar las hojas (favorece hongos)</td></tr>
        <tr><td>Regar a fondo y menos seguido</td><td>Mojar un poquito todos los días</td></tr>
        <tr><td>Ajustar según el clima</td><td>Regar siempre igual todo el año</td></tr>
      </table>
      <p><strong>En pleno verano,</strong> las macetas chicas pueden necesitar riego mañana y tarde; en invierno, a veces una vez por semana alcanza.</p>
      <p><strong>Ahorrá agua:</strong> el agua de lavar verduras (sin detergente) sirve para regar.</p>
      <p>Por ejemplo, un tomate en balde que se riega un poquito todos los días tiene raíces superficiales y sufre con el calor; regado a fondo cada 2 días, sus raíces bajan y aguanta mejor.</p>` },
    { titulo: "Cobertura del suelo", html: `
      <p class="idea">La <strong>cobertura</strong> (o mulch) es una capa de material seco sobre la tierra. Guarda la humedad, protege del calor y frena las malezas.</p>
      <table>
        <tr><th>Material</th><th>Comentario</th></tr>
        <tr><td>Paja o pasto seco</td><td>El más común; sin semillas de malezas</td></tr>
        <tr><td>Hojas secas trituradas</td><td>Gratis en otoño</td></tr>
        <tr><td>Chips de madera o corteza</td><td>Duran más; mejor para aromáticas</td></tr>
      </table>
      <pre><code>Cómo ponerla:
- Capa de 3 a 5 cm sobre la tierra húmeda.
- Dejá libre unos centímetros alrededor del tallo
  (pegada al tallo puede pudrirlo).
- Renovala cuando se descompone.</code></pre>
      <p><strong>En verano,</strong> una buena cobertura puede reducir mucho la frecuencia de riego en macetas al sol.</p>
      <p>Por ejemplo, un cajón de lechugas sin cobertura se seca en un día de calor; con 4 cm de paja, la tierra sigue húmeda hasta el día siguiente.</p>` },
    { titulo: "Tutores y podas en el tomate", html: `
      <p class="idea">El tomate crece alto y se cae con el peso de los frutos. Necesita un <strong>tutor</strong> (una caña o estaca) y algunas podas simples.</p>
      <pre><code>Tutor:
Clavá una caña de 1,5 m al trasplantar (no después: rompés raíces).
Atá el tallo con tiras de tela, flojo, en forma de ocho,
cada 20 o 30 cm a medida que crece.

Desbrote (para tomates de crecimiento alto):
En la unión entre el tallo y cada hoja nace un brote.
Sacalo con los dedos cuando es chico (menos de 5 cm).
→ la planta pone la energía en los frutos.</code></pre>
      <table>
        <tr><th>Señal</th><th>Qué hacer</th></tr>
        <tr><td>Hojas de abajo amarillas o manchadas</td><td>Sacarlas, para que circule el aire</td></tr>
        <tr><td>Tallo doblado por el peso</td><td>Atar más arriba o sumar otro tutor</td></tr>
        <tr><td>Muchísimas hojas y pocas flores</td><td>Desbrotar y revisar que no le sobre abono</td></tr>
      </table>
      <p><strong>Lavate las manos</strong> después de tocar plantas de tomate: tienen una sustancia que puede irritar.</p>
      <p>Por ejemplo, atar con alambre fino corta el tallo cuando engrosa; las tiras de tela en ocho lo sostienen sin lastimarlo.</p>` },
  ],
  practica: [
    "Hacé la prueba del dedo en cada maceta durante 5 días y anotá qué días regaste cada una.",
    "Poné cobertura en un recipiente y dejá otro sin cobertura. Anotá cuántos días tarda cada uno en secarse.",
    "Si tenés un tomate, poné el tutor y anotá cuántos brotes sacaste en una semana.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: guía de hortalizas (en inglés)", url: "https://rhs.org.uk/vegetables" },
    { t: "Penn State Extension: huerta de hortalizas (en inglés)", url: "https://extension.psu.edu/vegetable-gardening" },
  ],
  quiz: [
    { q: "Si querés saber si regar una maceta, ¿qué hacés?", opciones: ["Regás todos los días igual","Mirás solo la superficie","Metés un dedo 2 cm en la tierra: si está seca, regás","Esperás a que la planta se caiga"], correcta: 2, explicacion: "El dedo muestra la humedad real. Regar todos los días tienta por rutina, pero puede ser demasiado." },
    { q: "Si la tierra está húmeda a 2 cm, ¿qué hacés?", opciones: ["Esperás para regar","Regás igual","Regás el doble","Cambiás la tierra"], correcta: 0, explicacion: "Todavía tiene agua. Regar igual tienta por cuidado, pero encharca." },
    { q: "Si querés regar, ¿en qué momento del día conviene?", opciones: ["Al mediodía con sol fuerte","A cualquier hora igual","Nunca de día","Temprano a la mañana o al atardecer"], correcta: 3, explicacion: "Con menos calor se evapora menos. El mediodía tienta porque la planta se ve sedienta, pero se pierde agua." },
    { q: "Si regás, ¿qué mojás?", opciones: ["Las hojas","La tierra, al pie de la planta","Las flores","El tallo y las hojas"], correcta: 1, explicacion: "Mojar hojas favorece hongos. Las hojas tientan porque se ven secas, pero el agua va a la raíz." },
    { q: "Si mojás un poquito todos los días, ¿qué pasa con las raíces?", opciones: ["Bajan más hondo","Crecen el doble","Quedan superficiales y la planta sufre más con el calor","No cambia nada"], correcta: 2, explicacion: "Regar a fondo y menos seguido hace raíces profundas. \"No cambia\" tienta, pero la planta queda débil." },
    { q: "Si querés ahorrar agua, ¿qué podés usar para regar?", opciones: ["El agua de lavar verduras, sin detergente","Agua con lavandina","Agua con detergente","Agua de la pileta con cloro fuerte"], correcta: 0, explicacion: "Esa agua no tiene químicos. Con detergente tienta por reciclar, pero daña las plantas." },
    { q: "Si querés que la tierra no se seque tan rápido, ¿qué ponés?", opciones: ["Un nylon negro sin agujeros","Piedras pintadas","Nada","Cobertura de 3 a 5 cm, como paja u hojas secas"], correcta: 3, explicacion: "La cobertura guarda humedad y deja respirar. El nylon tienta, pero no deja pasar el agua." },
    { q: "Si ponés cobertura, ¿qué cuidás alrededor del tallo?", opciones: ["Taparlo bien","Dejar unos centímetros libres, porque pegada puede pudrirlo","Apretarla contra el tallo","Nada"], correcta: 1, explicacion: "La humedad pegada pudre el tallo. Taparlo bien tienta por proteger, pero es al revés." },
    { q: "Si vas a poner un tutor a un tomate, ¿cuándo lo clavás?", opciones: ["Cuando ya está grande","Cuando tiene frutos","Al trasplantar, para no romper raíces","Nunca"], correcta: 2, explicacion: "Después rompés raíces. Cuando está grande tienta porque ahí se ve la necesidad, pero ya es tarde." },
    { q: "Si atás el tallo del tomate, ¿con qué lo hacés?", opciones: ["Con tiras de tela, flojo, en forma de ocho","Con alambre fino apretado","Con hilo de nylon apretado","Con cinta pegada al tallo"], correcta: 0, explicacion: "La tela no corta. El alambre tienta por firme, pero corta el tallo cuando engrosa." },
    { q: "Si en la unión entre el tallo y una hoja nace un brote, ¿qué hacés en un tomate alto?", opciones: ["Lo dejás crecer siempre","Cortás el tallo principal","Le ponés abono","Lo sacás con los dedos cuando es chico"], correcta: 3, explicacion: "El desbrote concentra la energía en los frutos. Dejarlo tienta por más planta, pero da menos frutos." },
    { q: "Si un tomate tiene muchísimas hojas y pocas flores, ¿qué revisás?", opciones: ["Agregar más abono","Desbrotar y que no le sobre abono","Regarlo el triple","Nada"], correcta: 1, explicacion: "Mucho abono da hojas en vez de frutos. Agregar más tienta, pero empeora." },
  ],
},
{
  id: "compost",
  icono: "♻️",
  titulo: "Compost en casa",
  nivel: "Intermedio",
  objetivos: [
    "Separar los residuos que van al compost y los que no",
    "Armar una compostera chica para un departamento o patio",
    "Resolver los problemas comunes: olor, moscas y compost seco",
  ],
  lecciones: [
    { titulo: "Qué va y qué no", html: `
      <p class="idea">El <strong>compost</strong> es abono que se hace con restos de cocina y jardín. Mezcla dos tipos de material: <strong>húmedos</strong> (verdes) y <strong>secos</strong> (marrones).</p>
      <table>
        <tr><th>Húmedos (verdes)</th><th>Secos (marrones)</th><th>No van</th></tr>
        <tr><td>Cáscaras de frutas y verduras</td><td>Hojas secas</td><td>Carne y pescado</td></tr>
        <tr><td>Yerba y café usados</td><td>Cartón y papel sin tinta de color</td><td>Lácteos y aceite</td></tr>
        <tr><td>Pasto recién cortado</td><td>Aserrín de madera sin tratar</td><td>Heces de mascotas</td></tr>
        <tr><td>Restos de la huerta</td><td>Ramitas secas</td><td>Plantas enfermas, colillas, plástico</td></tr>
      </table>
      <pre><code>Proporción aproximada:
por cada balde de húmedos, 2 o 3 baldes de secos.

Si hay muchos húmedos → olor y moscas.
Si hay muchos secos   → no se descompone.</code></pre>
      <p><strong>Cortá en pedazos chicos:</strong> se descompone más rápido.</p>
      <p>Por ejemplo, una familia que separa los restos de verdura y la yerba de la semana puede reducir mucho la basura que saca a la calle.</p>` },
    { titulo: "Una compostera chica", video: {"id":"cIOkj7sMrPo","t":"Cómo hacer compost casero sin mal olor en poco espacio · Desde la Raíz (10:26)"}, html: `
      <p class="idea">En un departamento alcanza con un balde o un tacho con tapa. Lo importante es que tenga aire, la humedad justa y capas alternadas.</p>
      <pre><code>Compostera en balde:
1. Balde de 20 L con tapa, con agujeros chicos en tapa y costados.
2. Base: 5 cm de material seco (hojas, cartón cortado).
3. Cada vez que agregás húmedos, tapalos con secos.
4. Revolvé una vez por semana para que entre aire.
5. Humedad: como una esponja escurrida.
6. En 2 a 6 meses está listo: oscuro, suelto y con olor a bosque.</code></pre>
      <table>
        <tr><th>Tipo</th><th>Para</th></tr>
        <tr><td>Balde o tacho</td><td>Departamentos y balcones</td></tr>
        <tr><td>Compostera de cajones o malla</td><td>Patios</td></tr>
        <tr><td>Lombricompuesto (con lombrices californianas)</td><td>Interiores: es más rápido y casi no huele</td></tr>
      </table>
      <p><strong>Usá guantes</strong> y lavate las manos después de manipular el compost.</p>
      <p>Por ejemplo, dos baldes que se alternan (uno se llena mientras el otro madura) dan compost para un balcón chico todo el año.</p>` },
    { titulo: "Problemas comunes", html: `
      <p class="idea">Casi todos los problemas del compost se arreglan ajustando la mezcla de húmedos y secos o el aire.</p>
      <table>
        <tr><th>Problema</th><th>Causa probable</th><th>Arreglo</th></tr>
        <tr><td>Olor a podrido</td><td>Demasiados húmedos o falta de aire</td><td>Sumar secos y revolver</td></tr>
        <tr><td>Mosquitas</td><td>Restos húmedos a la vista</td><td>Tapar siempre con secos</td></tr>
        <tr><td>No se descompone</td><td>Muy seco o demasiados secos</td><td>Humedecer y sumar húmedos</td></tr>
        <tr><td>Muy mojado, chorrea</td><td>Exceso de agua o de húmedos</td><td>Sumar cartón seco</td></tr>
        <tr><td>Ratas u otros animales</td><td>Restos de carne o comida cocida</td><td>Sacar esos restos y tapar bien</td></tr>
      </table>
      <pre><code>Cómo usar el compost listo:
- Mezclado con tierra: 1 parte de compost por 2 de tierra.
- Como capa de 2 cm sobre las macetas, cada temporada.
- Tamizado, para almácigos.</code></pre>
      <p>Por ejemplo, si el balde huele mal, una buena cantidad de cartón cortado y una revuelta lo arreglan en pocos días.</p>` },
  ],
  practica: [
    "Separá durante una semana tus restos de cocina en húmedos, secos y \"no van\". Anotá cuántos baldes o bolsas juntaste de cada uno.",
    "Armá una compostera en balde y anotá la fecha de inicio y cuántas veces la revolviste en un mes.",
    "Si aparece un problema, anotá cuál fue, la causa que creés y qué hiciste para arreglarlo.",
  ],
  recursos: [
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Tus primeros pasos de huerta\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/tus-primeros-pasos-de-huerta.pdf" },
    { t: "Penn State Extension: huerta de hortalizas (en inglés)", url: "https://extension.psu.edu/vegetable-gardening" },
  ],
  quiz: [
    { q: "Si querés hacer compost, ¿qué dos tipos de material mezclás?", opciones: ["Solo cáscaras","Solo cartón","Húmedos (verdes) y secos (marrones)","Carne y lácteos"], correcta: 2, explicacion: "La mezcla equilibra. Solo cáscaras tienta porque es lo que más sobra, pero huele mal." },
    { q: "Si te sobran restos de carne, ¿van al compost casero?", opciones: ["No: atraen animales y huelen mal","Sí, siempre","Sí, si es poco","Sí, cocidos"], correcta: 0, explicacion: "La carne no va. \"Si es poco\" tienta, pero igual atrae ratas." },
    { q: "Si querés agregar yerba usada, ¿qué tipo de material es?", opciones: ["Seco","No va","Plástico","Húmedo (verde)"], correcta: 3, explicacion: "La yerba usada es húmeda. Seco tienta porque cuando está vieja se seca, pero aporta como húmedo." },
    { q: "Si querés agregar cartón, ¿qué tipo de material es?", opciones: ["Húmedo","Seco (marrón)","No va nunca","Es veneno"], correcta: 1, explicacion: "El cartón sin tinta de color es seco. \"No va\" tienta, pero es uno de los mejores secos." },
    { q: "Si ponés un balde de húmedos, ¿cuántos de secos conviene sumar?", opciones: ["Ninguno","Medio balde","2 o 3","10"], correcta: 2, explicacion: "La proporción evita olor. Ninguno tienta porque los húmedos se descomponen solos, pero se pudren." },
    { q: "Si querés que se descomponga más rápido, ¿qué hacés con los restos?", opciones: ["Los cortás en pedazos chicos","Los dejás enteros","Los congelás","Los envolvés en nylon"], correcta: 0, explicacion: "Más superficie, más rápido. Dejarlos enteros tienta por cómodo, pero tarda mucho más." },
    { q: "Si armás una compostera en balde, ¿qué le hacés a la tapa y los costados?", opciones: ["Nada, cerrado del todo","Un agujero gigante","La pintás","Agujeros chicos para que entre aire"], correcta: 3, explicacion: "Sin aire se pudre. Cerrado del todo tienta para que no huela, pero huele peor." },
    { q: "Si querés saber si la humedad del compost está bien, ¿cómo tiene que estar?", opciones: ["Seco como arena","Como una esponja escurrida","Chorreando agua","Congelado"], correcta: 1, explicacion: "Húmedo pero sin chorrear. Chorreando tienta por \"bien regado\", pero se pudre." },
    { q: "Si el compost huele a podrido, ¿qué hacés?", opciones: ["Le agregás más húmedos","Le echás perfume","Sumás secos y lo revolvés","Lo tapás sin agujeros"], correcta: 2, explicacion: "El olor es exceso de húmedos o falta de aire. Perfume tienta, pero no arregla la causa." },
    { q: "Si aparecen mosquitas, ¿qué hacés?", opciones: ["Tapás siempre los húmedos con una capa de secos","Insecticida en el compost","Más fruta arriba","Nada"], correcta: 0, explicacion: "Taparlos corta el acceso. El insecticida tienta, pero contamina el abono." },
    { q: "Si el compost no se descompone después de meses, ¿qué le pasa?", opciones: ["Tiene demasiado aire siempre","Está perfecto","Le falta carne","Está muy seco o tiene demasiados secos"], correcta: 3, explicacion: "Le falta humedad o húmedos. \"Le falta carne\" tienta, pero la carne no va." },
    { q: "Si el compost está oscuro, suelto y huele a bosque, ¿qué significa?", opciones: ["Que está podrido","Que está listo para usar","Que hay que tirarlo","Que le falta un año más"], correcta: 1, explicacion: "Así se ve el compost maduro. Podrido tienta por el color oscuro, pero el olor a bosque dice que está bien." },
  ],
},
{
  id: "plagas",
  icono: "🐛",
  titulo: "Plagas, asociaciones y cosecha",
  nivel: "Avanzado",
  objetivos: [
    "Prevenir plagas con diversidad y plantas bien cuidadas",
    "Controlar plagas comunes con métodos simples y seguros",
    "Cosechar en el momento justo",
  ],
  lecciones: [
    { titulo: "Prevenir es más fácil", video: {"id":"tCleaxsk-Nw","t":"Asociación de cultivos · Nakeltem (3:06)"}, html: `
      <p class="idea">Las plantas sanas, con sol, buen riego y buen sustrato, resisten mejor las plagas. La mejor defensa es la <strong>prevención</strong> y la <strong>diversidad</strong>.</p>
      <table>
        <tr><th>Asociación</th><th>Por qué ayuda</th></tr>
        <tr><td>Tomate + albahaca</td><td>La albahaca aleja algunos insectos y aprovecha el mismo sol</td></tr>
        <tr><td>Lechuga + rabanito</td><td>El rabanito crece rápido y deja lugar a la lechuga</td></tr>
        <tr><td>Zanahoria + cebolla de verdeo</td><td>Los olores se confunden y despistan a algunas plagas</td></tr>
        <tr><td>Flores (caléndula, copete) entre las hortalizas</td><td>Atraen insectos que comen plagas</td></tr>
      </table>
      <pre><code>Rutina de prevención:
- Mirá las plantas cada 2 o 3 días, también debajo de las hojas.
- Sacá hojas enfermas o amarillas.
- No mojes las hojas al regar.
- No plantes siempre lo mismo en el mismo lugar (rotá).</code></pre>
      <p>Por ejemplo, un balcón con una sola especie se llena de pulgones más rápido que uno con hortalizas, aromáticas y flores mezcladas.</p>` },
    { titulo: "Control simple y seguro", video: {"id":"A86urdDRuac","t":"Huertas: control de plagas y enfermedades · Canal Encuentro (2:25)"}, html: `
      <p class="idea">Si aparece una plaga, empezá por lo más simple: sacarla a mano o con agua. Recién después, preparados suaves.</p>
      <table>
        <tr><th>Plaga</th><th>Cómo reconocerla</th><th>Qué hacer</th></tr>
        <tr><td>Pulgones</td><td>Bichitos verdes o negros en brotes y debajo de las hojas</td><td>Chorro de agua, o agua con jabón blanco neutro rallado</td></tr>
        <tr><td>Babosas y caracoles</td><td>Hojas comidas y rastros brillantes</td><td>Juntarlas a mano a la noche o temprano</td></tr>
        <tr><td>Hormigas</td><td>Caminitos hacia la planta</td><td>Seguirlas hasta el hormiguero; las barreras de ceniza o tiza ayudan en macetas</td></tr>
        <tr><td>Oídio (hongo)</td><td>Polvillo blanco en las hojas</td><td>Sacar hojas afectadas, ventilar, no mojar las hojas</td></tr>
      </table>
      <p class="aviso">No uses insecticidas ni agroquímicos sin asesoramiento: en una huerta para comer, en un balcón y cerca de chicos y mascotas, pueden ser peligrosos. Si usás un preparado casero, probalo primero en una hoja, aplicalo con guantes y lavá bien lo que cosechás.</p>
      <p><strong>Algunos bichos ayudan:</strong> las vaquitas de San Antonio comen pulgones. No las mates.</p>
      <p>Por ejemplo, unos pocos pulgones en un brote de tomate se sacan con un chorro de agua; no hace falta ningún producto.</p>` },
    { titulo: "Cosechar en el momento justo", html: `
      <p class="idea">Cosechar a tiempo da mejor sabor y, en muchas plantas, hace que sigan produciendo.</p>
      <table>
        <tr><th>Cultivo</th><th>Cuándo cosechar</th><th>Cómo</th></tr>
        <tr><td>Lechuga, acelga</td><td>Cuando las hojas de afuera son grandes</td><td>Cortar las de afuera; el centro sigue creciendo</td></tr>
        <tr><td>Rabanito</td><td>Unos 30 días, cuando asoma del tamaño de una moneda grande</td><td>Arrancar entero; si se pasa, se pone picante y hueco</td></tr>
        <tr><td>Tomate</td><td>Cuando tiene color parejo y cede un poco al apretarlo</td><td>Girar suave o cortar con tijera</td></tr>
        <tr><td>Albahaca</td><td>Antes de que florezca</td><td>Cortar las puntas: la planta se ramifica</td></tr>
      </table>
      <pre><code>Para cosechar más:
- Cosechá seguido: muchas plantas responden produciendo más.
- Si la albahaca o la lechuga florecen, las hojas se ponen amargas.
- Lavá bien todo antes de comerlo.</code></pre>
      <p><strong>Anotá lo que cosechás:</strong> fecha y cantidad. Te ayuda a planificar la próxima temporada.</p>
      <p>Por ejemplo, cortar las hojas de afuera de 4 lechugas cada semana da ensalada durante más de un mes, en lugar de 4 lechugas de una sola vez.</p>` },
  ],
  practica: [
    "Revisá tus plantas cada 2 o 3 días durante 2 semanas, también debajo de las hojas, y anotá qué bichos encontraste.",
    "Planificá 2 asociaciones para tu huerta y anotá qué plantas van juntas y por qué.",
    "Anotá durante un mes cada cosecha: fecha, cultivo y cantidad.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: guía de hortalizas (en inglés)", url: "https://rhs.org.uk/vegetables" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Tus primeros pasos de huerta\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/tus-primeros-pasos-de-huerta.pdf" },
  ],
  quiz: [
    { q: "Si querés tener menos plagas, ¿qué es lo primero?", opciones: ["Insecticida todas las semanas","Plantar una sola especie","Plantas sanas y diversidad: mezclar hortalizas, aromáticas y flores","Regar las hojas"], correcta: 2, explicacion: "La prevención es la mejor defensa. El insecticida tienta por rápido, pero mata también a los bichos que ayudan." },
    { q: "Si plantás albahaca junto al tomate, ¿qué ganás?", opciones: ["Aleja algunos insectos y aprovecha el mismo sol","Nada","El tomate se seca","La albahaca se come al tomate"], correcta: 0, explicacion: "Es una asociación conocida. \"Nada\" tienta, pero ayuda a la huerta." },
    { q: "Si querés atraer insectos que comen plagas, ¿qué sumás?", opciones: ["Restos de carne","Plástico","Más agua en las hojas","Flores como caléndula o copete"], correcta: 3, explicacion: "Las flores atraen insectos útiles. Más agua tienta, pero favorece hongos." },
    { q: "Si revisás tus plantas, ¿dónde mirás además de arriba?", opciones: ["En ningún otro lado","Debajo de las hojas","Solo en las flores","En la maceta vacía"], correcta: 1, explicacion: "Muchas plagas se esconden debajo. \"En ningún otro lado\" tienta, pero se te escapan." },
    { q: "Si plantás siempre lo mismo en el mismo lugar, ¿qué pasa?", opciones: ["Nada","Crece mejor siempre","Las plagas y enfermedades se acumulan: conviene rotar","El sustrato se renueva solo"], correcta: 2, explicacion: "Rotar corta el ciclo de plagas. \"Crece mejor\" tienta por costumbre, pero se agota el sustrato." },
    { q: "Si encontrás unos pocos pulgones, ¿qué hacés primero?", opciones: ["Un chorro de agua o agua con jabón blanco neutro","Un insecticida fuerte","Cortar toda la planta","Nada nunca"], correcta: 0, explicacion: "Lo simple primero. El insecticida tienta por efectivo, pero en una huerta para comer es riesgoso." },
    { q: "Si las hojas tienen rastros brillantes y están comidas, ¿qué plaga es probable?", opciones: ["Pulgones","Oídio","Hormigas","Babosas o caracoles"], correcta: 3, explicacion: "El rastro brillante es de babosas. Pulgones tienta, pero esos se ven pegados a los brotes." },
    { q: "Si ves polvillo blanco en las hojas, ¿qué es?", opciones: ["Harina","Oídio, un hongo","Pulgones blancos","Que le falta agua"], correcta: 1, explicacion: "Es un hongo común. \"Le falta agua\" tienta, pero mojar las hojas lo empeora." },
    { q: "Si querés usar un preparado casero, ¿qué hacés antes?", opciones: ["Lo echás en toda la huerta de una","Lo tomás para probarlo","Lo probás en una hoja, con guantes, y lavás bien lo que cosechás","Lo mezclás con insecticida"], correcta: 2, explicacion: "Probar en una hoja evita daños. Echarlo todo tienta por rápido, pero puede quemar la planta." },
    { q: "Si ves una vaquita de San Antonio, ¿qué hacés?", opciones: ["La dejás: come pulgones","La matás","Le echás insecticida","La sacás de la huerta"], correcta: 0, explicacion: "Es una aliada. Matarla tienta porque es un bicho, pero te ayuda." },
    { q: "Si querés cosechar lechuga durante más tiempo, ¿cómo lo hacés?", opciones: ["Arrancás la planta entera","Esperás a que florezca","Cortás el centro","Cortás las hojas de afuera y dejás que el centro siga creciendo"], correcta: 3, explicacion: "Así sigue produciendo. Arrancarla tienta por simple, pero se termina." },
    { q: "Si la albahaca empieza a florecer, ¿qué pasa con las hojas?", opciones: ["Se ponen más dulces","Se ponen amargas: conviene cortar las puntas antes","No cambian","Crecen el doble"], correcta: 1, explicacion: "La floración cambia el sabor. \"Más dulces\" tienta por las flores, pero es al revés." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu huerta de 1 m²",
  nivel: "Avanzado",
  objetivos: [
    "Planificar una huerta de 1 metro cuadrado para una temporada",
    "Llevar un registro de siembra, riego y cosecha",
    "Evaluar tu huerta con una rúbrica",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es <strong>tu huerta de 1 m²</strong>: planificada, sembrada y registrada durante una temporada (unos 2 o 3 meses).</p>
      <table>
        <tr><th>Parte del plan</th><th>Módulo</th></tr>
        <tr><td>Horas de sol y cultivos elegidos</td><td>Antes de sembrar</td></tr>
        <tr><td>Recipientes y sustrato</td><td>Macetas, cajones y sustrato</td></tr>
        <tr><td>Calendario de siembra según tu estación</td><td>Sembrar y trasplantar</td></tr>
        <tr><td>Rutina de riego y cobertura</td><td>Riego y cuidados</td></tr>
        <tr><td>Compost o abono</td><td>Compost en casa</td></tr>
        <tr><td>Asociaciones, revisión de plagas y cosecha</td><td>Plagas, asociaciones y cosecha</td></tr>
      </table>
      <pre><code>Registro semanal (ejemplo):
Fecha   Sembré/planté     Regué  Plagas      Cosecha
5/10    2 tomates         sí     no          —
12/10   rabanitos fila 1  sí     pulgones*   —
19/10   rabanitos fila 2  sí     no          —
9/11    —                 sí     no          12 rabanitos
* chorro de agua</code></pre>
      <p>Por ejemplo, el registro le muestra a quien empieza que los rabanitos tardaron 28 días y que el riego de los martes no alcanzaba en semanas de calor.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu huerta al final de la temporada.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Planificación</td><td>Cultivos según el sol y la estación</td><td>Alguno fuera de estación o sin sol suficiente</td><td>Sin plan</td></tr>
        <tr><td>Recipientes y sustrato</td><td>Profundidad correcta, drenaje y mezcla con compost</td><td>Falta uno</td><td>Macetas sin drenaje</td></tr>
        <tr><td>Cuidados</td><td>Riego con la prueba del dedo y cobertura</td><td>Solo uno</td><td>Riego al azar</td></tr>
        <tr><td>Registro</td><td>Siembra, riego, plagas y cosecha, cada semana</td><td>Incompleto</td><td>No hay</td></tr>
        <tr><td>Cosecha</td><td>Al menos 2 cultivos cosechados</td><td>1 cultivo</td><td>Ninguno</td></tr>
        <tr><td>Seguridad</td><td>Sin agroquímicos sin asesoramiento, macetas seguras en el balcón</td><td>—</td><td>Usó agroquímicos sin asesoramiento o macetas que pueden caer</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡excelente temporada!
7 a 10  → mejorá lo que sacó 0 o 1 en la próxima
0 a 6   → repasá los módulos y volvé a planificar
Regla: si "Seguridad" tiene 0, la huerta no está bien hecha,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, una huerta muy productiva con macetas colgadas de la baranda hacia la calle saca 0 en seguridad.</p>` },
    { titulo: "Seguir aprendiendo", html: `
      <p class="idea">Cada temporada enseña algo. Con lo que anotaste, la próxima huerta va a salir mejor.</p>
      <table>
        <tr><th>Al terminar la temporada</th><th>Para qué</th></tr>
        <tr><td>Anotá qué funcionó y qué no</td><td>Repetir lo bueno</td></tr>
        <tr><td>Guardá semillas de lo que mejor se dio (tomate, albahaca, arveja)</td><td>Tener semillas propias y adaptadas</td></tr>
        <tr><td>Agregá compost al sustrato</td><td>Reponer nutrientes</td></tr>
        <tr><td>Rotá: lo que estuvo en un cajón, la próxima va en otro</td><td>Evitar plagas</td></tr>
      </table>
      <p><strong>Dónde seguir:</strong> muchos municipios tienen huertas comunitarias y talleres gratuitos. La información agroclimática del INTA te ayuda con las fechas de tu zona. La FAO tiene material sobre huertas urbanas.</p>
      <p><strong>Compartí:</strong> intercambiar semillas y plantines con vecinos es una forma barata de sumar variedades.</p>
      <p>El curso "Jardinería y cuidado de plantas" está en la lista de este sitio, para seguir con plantas de interior y de jardín.</p>
      <p>Por ejemplo, guardar las semillas de los tomates cherry que mejor se dieron te ahorra comprar plantines la próxima primavera.</p>` },
  ],
  practica: [
    "Armá el plan de tu huerta de 1 m² con las 6 partes y anotá la fecha de inicio.",
    "Llevá el registro semanal durante toda la temporada y anotá cuántas semanas completaste.",
    "Al final, evaluá tu huerta con la rúbrica y anotá el puntaje de cada criterio y el total.",
  ],
  recursos: [
    { t: "INTA: información agroclimática (heladas y clima de tu zona)", url: "https://www.argentina.gob.ar/inta/informacion-agroclimatica" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Tus primeros pasos de huerta\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/tus-primeros-pasos-de-huerta.pdf" },
    { t: "Royal Horticultural Society: guía de hortalizas (en inglés)", url: "https://rhs.org.uk/vegetables" },
  ],
  quiz: [
    { q: "Si planificás tu huerta de 1 m², ¿qué tiene que incluir?", opciones: ["Solo las semillas","Solo las macetas","Sol, cultivos, recipientes, calendario, riego, compost, asociaciones y cosecha","Solo el riego"], correcta: 2, explicacion: "El plan junta todo el curso. Las semillas tientan como inicio, pero sin el resto no funcionan." },
    { q: "Si querés aprender de tu temporada, ¿qué llevás?", opciones: ["Un registro semanal de siembra, riego, plagas y cosecha","Nada, te acordás","Solo fotos lindas","Solo la lista de compras"], correcta: 0, explicacion: "El registro muestra qué funcionó. \"Te acordás\" tienta, pero se olvidan los detalles." },
    { q: "Si sembraste tomate en invierno, ¿cuánto sacás en \"Planificación\"?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto: un cultivo fuera de estación"], correcta: 3, explicacion: "Hay plan, pero con un error. 0 tienta, pero ese es para cuando no hay plan." },
    { q: "Si tus macetas no tienen drenaje, ¿cuánto sacás en \"Recipientes y sustrato\"?", opciones: ["2 puntos","0 puntos","1 punto","No se evalúa"], correcta: 1, explicacion: "Sin drenaje es 0. Sacar 1 tienta si el sustrato es bueno, pero las raíces se pudren igual." },
    { q: "Si regaste al azar, sin prueba del dedo ni cobertura, ¿cuánto sacás en \"Cuidados\"?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 2, explicacion: "Riego al azar es 0. Sacar 1 tienta si las plantas vivieron, pero no hubo método." },
    { q: "Si cosechaste un solo cultivo, ¿cuánto sacás en \"Cosecha\"?", opciones: ["1 punto","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "La rúbrica pide al menos 2. Sacar 2 tienta porque cosechaste, pero falta uno." },
    { q: "Si tu huerta suma 11, pero usaste un insecticida sin asesoramiento, ¿está bien hecha?", opciones: ["Sí, 11 es excelente","Sí, si no hubo plagas","Depende del producto","No: \"Seguridad\" tiene 0 y eso no se compensa con el total"], correcta: 3, explicacion: "La regla lo dice. \"Si no hubo plagas\" tienta, pero el riesgo para la salud no se compensa." },
    { q: "Si tu huerta saca 8, ¿qué hacés?", opciones: ["Dejás la huerta","Mejorás lo que sacó 0 o 1 en la próxima temporada","Cambiás la rúbrica","Repetís todo igual"], correcta: 1, explicacion: "De 7 a 10 se mejora lo flojo. Dejar la huerta tienta si te frustra, pero ya aprendiste mucho." },
    { q: "Si un tomate cherry se dio muy bien, ¿qué podés hacer al final?", opciones: ["Tirar todo","Comprar plantines igual siempre","Guardar sus semillas para la próxima temporada","Nada"], correcta: 2, explicacion: "Las semillas propias se adaptan a tu lugar. Comprar siempre tienta por fácil, pero gastás de más." },
    { q: "Si en un cajón tuviste tomates, ¿qué conviene la próxima temporada?", opciones: ["Rotar: poner otro cultivo en ese cajón","Tomates otra vez en el mismo","Dejarlo vacío para siempre","Tirar el cajón"], correcta: 0, explicacion: "Rotar evita plagas. Repetir tienta porque funcionó, pero se acumulan problemas." },
    { q: "Si querés talleres gratuitos de huerta, ¿dónde buscás?", opciones: ["En publicidades de semillas mágicas","En ningún lado","En una red anónima sin fuentes","En tu municipio, que muchas veces tiene huertas comunitarias"], correcta: 3, explicacion: "Los municipios suelen ofrecerlos. Las semillas mágicas tientan, pero no existen." },
    { q: "Si querés sumar variedades sin gastar, ¿qué podés hacer?", opciones: ["Comprar todo nuevo cada año","Intercambiar semillas y plantines con vecinos","Sacar plantas de lugares públicos","Nada"], correcta: 1, explicacion: "El intercambio es barato y comunitario. Sacar plantas públicas tienta, pero no corresponde." },
  ],
},
];
