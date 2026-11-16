// Temario del curso "Jardinería y cuidado de plantas". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js jardineria y node tools/metodologia.js jardineria
window.TEMARIO = [
{
  id: "conocer",
  icono: "🌿",
  titulo: "Conocer tus plantas",
  nivel: "Básico",
  objetivos: [
    "Medir cuánta luz recibe cada rincón y elegir plantas que se den ahí",
    "Reconocer los tipos de plantas del jardín y qué cuidado pide cada uno",
    "Identificar una planta por su nombre y saber si es tóxica para chicos o mascotas",
  ],
  lecciones: [
    { titulo: "Sol, media sombra y sombra", html: `
      <p class="idea">Cada planta necesita una cantidad de <strong>luz</strong>. Si la ponés donde le falta o le sobra, ningún cuidado la va a salvar. Por eso lo primero es medir la luz de cada rincón.</p>
      <p>Los viveros usan tres palabras. Las vas a ver en las etiquetas:</p>
      <table>
        <tr><th>Etiqueta</th><th>Qué significa</th><th>Ejemplos</th></tr>
        <tr><td>Sol pleno</td><td>6 horas o más de sol directo</td><td>Lavanda, rosal, salvia, gazania</td></tr>
        <tr><td>Media sombra</td><td>Entre 3 y 6 horas de sol, mejor el de la mañana</td><td>Hortensia, azalea, helecho serrucho</td></tr>
        <tr><td>Sombra</td><td>Menos de 3 horas, con luz clara</td><td>Helechos, clivia, aspidistra</td></tr>
      </table>
      <p><strong>Cómo medirla:</strong> un día despejado, mirá el lugar cada hora, de 8 a 18, y anotá en qué horas le da el sol directo. Sol directo es cuando la planta hace sombra marcada en el piso.</p>
      <pre><code>Patio de ejemplo:
Cantero contra la pared norte  → sol de 9 a 17 → 8 horas → sol pleno
Galería                        → sol de 9 a 12 → 3 horas → media sombra
Rincón junto a la medianera    → 1 hora        → sombra</code></pre>
      <p><strong>En Argentina, el lado norte es el más soleado</strong>, porque estamos en el hemisferio sur. Y el sol cambia con las estaciones: en invierno va más bajo y una pared o un árbol pueden tapar más que en verano.</p>
      <p><strong>El sol de la tarde quema más</strong> que el de la mañana. Una hortensia aguanta 4 horas de sol de mañana, pero se marchita con 4 horas de sol de la tarde en enero.</p>
      <p>En todo el curso cuidamos el mismo <strong>jardín de ejemplo</strong>: un patio de 6 por 4 metros en el conurbano, con un cantero, un rosal, un limonero, una franja de pasto y macetas en la galería. Las fechas son para el centro del país; en tu zona se pueden correr unas semanas.</p>
      <p>Por ejemplo, si una lavanda vive en el rincón de sombra, se estira, florece poco y se pudre. No le falta abono ni agua: le falta sol. Cambiarla al cantero norte la salva.</p>` },
    { titulo: "Los tipos de plantas", html: `
      <p class="idea">Saber qué <strong>tipo de planta</strong> tenés te dice cuánto vive, cuándo se poda y qué esperar en invierno.</p>
      <table>
        <tr><th>Tipo</th><th>Qué es</th><th>Ejemplos</th></tr>
        <tr><td>Anual</td><td>Nace, florece y muere en un año. Se vuelve a plantar.</td><td>Copete, petunia, alegría del hogar</td></tr>
        <tr><td>Perenne</td><td>Vive muchos años; algunas se secan arriba en invierno y rebrotan.</td><td>Agapanto, lavanda, margarita</td></tr>
        <tr><td>Arbusto</td><td>Planta leñosa de varios tallos desde la base.</td><td>Hortensia, jazmín del país, rosal</td></tr>
        <tr><td>Árbol</td><td>Planta leñosa con un tronco principal.</td><td>Limonero, jacarandá, fresno</td></tr>
        <tr><td>Trepadora</td><td>Se agarra o se enrosca para subir; necesita apoyo.</td><td>Santa Rita, jazmín, madreselva</td></tr>
        <tr><td>Bulbosa</td><td>Guarda reservas en un bulbo bajo tierra.</td><td>Fresia, narciso, amarilis</td></tr>
        <tr><td>Suculenta</td><td>Guarda agua en hojas o tallos gruesos.</td><td>Cactus, aloe, echeveria</td></tr>
      </table>
      <p><strong>Hojas que se caen o que se quedan.</strong> Una planta de hoja <strong>caduca</strong> pierde todas las hojas en otoño y queda pelada en invierno: no está muerta, está en reposo. Una de hoja <strong>persistente</strong> tiene hojas todo el año.</p>
      <p><strong>Leñoso</strong> quiere decir que el tallo se vuelve duro como madera. <strong>Herbáceo</strong> quiere decir que el tallo es verde y blando.</p>
      <p>Por ejemplo, en el patio de ejemplo, el fresno de la vereda es un árbol de hoja caduca; el limonero, un árbol de hoja persistente; el copete del cantero, una anual que en mayo ya se va a secar. Si sabés eso, no te asustás en junio ni tirás el fresno por "seco".</p>
      <p>Esto te va a servir en el módulo de poda: cada tipo se poda en un momento distinto.</p>` },
    { titulo: "Saber el nombre y si es tóxica", html: `
      <p class="idea">Con el <strong>nombre</strong> de la planta podés buscar sus cuidados. Y antes de tenerla cerca de chicos o mascotas, fijate si es <strong>tóxica</strong>.</p>
      <p><strong>Cómo averiguar el nombre:</strong></p>
      <ul>
        <li>Mirá la etiqueta del vivero y guardala, o sacale una foto.</li>
        <li>Usá una app de identificación por foto, como <strong>Pl@ntNet</strong>, que es gratis. Sacá la foto de una hoja o flor de cerca, con buena luz. La app te da varias opciones con un porcentaje: tomalo como una pista, no como una certeza.</li>
        <li>Preguntá en el vivero llevando una foto o una ramita.</li>
      </ul>
      <p><strong>Nombre común y nombre científico.</strong> El nombre común cambia según el lugar: "Santa Rita" en Argentina se llama "buganvilla" en otros países. El nombre científico, en latín (Bougainvillea), es el mismo en todo el mundo. Con ese nombre encontrás información confiable.</p>
      <p><strong>Plantas comunes que son tóxicas si se comen o mastican:</strong></p>
      <table>
        <tr><th>Planta</th><th>Riesgo</th></tr>
        <tr><td>Laurel de jardín (adelfa)</td><td>Muy tóxica en todas sus partes, para personas y animales</td></tr>
        <tr><td>Difenbaquia</td><td>Irrita la boca y la garganta</td></tr>
        <tr><td>Potus</td><td>Irrita la boca de perros y gatos</td></tr>
        <tr><td>Lirios y azucenas</td><td>Muy peligrosos para los gatos</td></tr>
        <tr><td>Cala</td><td>Irrita la boca</td></tr>
      </table>
      <p>Si alguien comió una planta y tenés dudas, llamá gratis al <strong>Centro Nacional de Intoxicaciones: 0800-333-0160</strong>, que atiende las 24 horas. Si es tu mascota, llamá al veterinario. Este curso no reemplaza esa consulta.</p>
      <p>Por ejemplo, si tenés un gato que muerde hojas, un potus colgado alto o una lista de plantas seguras de la ASPCA te ahorran un susto.</p>` },
  ],
  practica: [
    "Medí las horas de sol directo de 3 rincones de tu casa un día despejado y anotá si cada uno es sol pleno, media sombra o sombra.",
    "Anotá 5 plantas que tengas o que veas en tu cuadra, con su tipo (anual, perenne, arbusto, árbol, trepadora, bulbosa o suculenta).",
    "Identificá 3 plantas con Pl@ntNet o en un vivero y anotá su nombre científico y si son tóxicas para chicos o mascotas.",
  ],
  recursos: [
    { t: "Pl@ntNet: identificar una planta con una foto (gratis)", url: "https://plantnet.org/" },
    { t: "ASPCA: plantas tóxicas y no tóxicas para perros y gatos (en inglés)", url: "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Cómo cuidar tus plantas\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/segundo-paso-jardineria.pdf" },
  ],
  quiz: [
    { q: "Si una etiqueta dice \"sol pleno\", ¿cuánto sol directo necesita la planta?", opciones: ["Menos de 1 hora","Solo luz de una lámpara","6 horas o más","Entre 1 y 2 horas"], correcta: 2, explicacion: "Sol pleno es 6 horas o más de sol directo. \"Entre 1 y 2 horas\" tienta porque parece mucho sol, pero eso es sombra." },
    { q: "Tenés un rincón con sol de 9 a 12. ¿Cómo lo clasificás?", opciones: ["Media sombra: 3 horas, de mañana","Sol pleno","Sombra total","No se puede saber"], correcta: 0, explicacion: "Son 3 horas de sol de la mañana: media sombra. Sol pleno tienta porque le da sol, pero son menos de 6 horas." },
    { q: "Si vivís en Argentina, ¿qué lado de la casa recibe más sol?", opciones: ["El sur","Todos por igual","El que tenga más plantas","El norte"], correcta: 3, explicacion: "En el hemisferio sur el sol pasa por el norte. El sur tienta si leíste guías del hemisferio norte." },
    { q: "Tu hortensia se marchita todas las tardes de enero en un lugar con sol de 14 a 18. ¿Qué hacés?", opciones: ["La regás tres veces por día","La cambiás a un lugar con sol de mañana","Le ponés abono","La cortás al ras"], correcta: 1, explicacion: "El sol de la tarde quema más y la hortensia es de media sombra. Regar más tienta, pero no cambia que el sol la quema." },
    { q: "Si una lavanda en sombra crece estirada y casi no florece, ¿qué le falta?", opciones: ["Más agua","Una maceta más chica","Sol: es una planta de sol pleno","Que la poden fuerte"], correcta: 2, explicacion: "La lavanda pide sol pleno. Más agua tienta, pero en sombra hasta la pudre." },
    { q: "Si en junio tu fresno está sin hojas, ¿qué pasa?", opciones: ["Es de hoja caduca y está en reposo","Se murió","Le falta agua","Tiene una plaga"], correcta: 0, explicacion: "Las caducas pierden las hojas en otoño y rebrotan en primavera. \"Se murió\" tienta, pero es su ciclo normal." },
    { q: "Si en mayo los copetes del cantero se secan, ¿qué es lo esperable?", opciones: ["Hay que regar el doble","Les falta abono","Son perennes y van a rebrotar solas","Son anuales: terminaron su ciclo"], correcta: 3, explicacion: "El copete es anual: vive un año. Pensar que rebrota tienta, pero eso hacen las perennes." },
    { q: "Querés cubrir una pared con una planta que suba. ¿Qué tipo elegís?", opciones: ["Una suculenta","Una trepadora, con un apoyo para agarrarse","Una bulbosa","Una anual rastrera"], correcta: 1, explicacion: "Las trepadoras, como la Santa Rita, suben si tienen apoyo. La anual tienta porque crece rápido, pero no sube." },
    { q: "Si buscás cuidados de una planta en internet, ¿qué nombre conviene usar?", opciones: ["El nombre que le puso tu abuela","El color de la flor","El nombre científico, que es igual en todo el mundo","El precio del vivero"], correcta: 2, explicacion: "El nombre común cambia según el país. El nombre familiar tienta, pero puede llevarte a otra planta." },
    { q: "Si la app de identificación dice \"62 %: potus\", ¿cómo lo tomás?", opciones: ["Como una pista que conviene confirmar","Como una certeza total","Como un error seguro","Como el precio de la planta"], correcta: 0, explicacion: "El porcentaje dice qué tan segura está la app. Tomarlo como certeza tienta, pero puede equivocarse." },
    { q: "Tu perro mordió un laurel de jardín. ¿Qué hacés?", opciones: ["Esperás a ver si le pasa algo","Le das leche","Nada, es una planta común","Llamás al veterinario enseguida: el laurel de jardín es muy tóxico"], correcta: 3, explicacion: "El laurel de jardín es muy tóxico. Esperar tienta, pero se pierde tiempo valioso." },
    { q: "Si un chico se comió una hoja y no sabés si es tóxica, ¿a quién llamás?", opciones: ["A nadie, se le va a pasar","Al Centro Nacional de Intoxicaciones: 0800-333-0160","Al vivero el lunes","Buscás un remedio casero"], correcta: 1, explicacion: "El 0800 atiende gratis las 24 horas. El remedio casero tienta, pero puede empeorar las cosas." },
  ],
},
{
  id: "suelo",
  icono: "🪴",
  titulo: "Tierra, macetas y compost",
  nivel: "Básico",
  objetivos: [
    "Probar si la tierra de tu cantero drena bien y mejorarla si no",
    "Preparar una mezcla de sustrato y trasplantar una planta sin dañarla",
    "Armar un compost casero y abonar en la época y la dosis justas",
  ],
  lecciones: [
    { titulo: "La tierra del cantero", html: `
      <p class="idea">Las raíces necesitan <strong>agua y aire</strong> a la vez. Una buena tierra guarda algo de agua y deja pasar el resto. Eso se llama <strong>drenaje</strong>.</p>
      <p>La tierra está hecha de partículas de tres tamaños. Cuánto hay de cada una es la <strong>textura</strong>:</p>
      <table>
        <tr><th>Partícula</th><th>Al tacto</th><th>Qué hace</th></tr>
        <tr><td>Arena</td><td>Áspera, no se pega</td><td>Drena rápido y guarda poca agua</td></tr>
        <tr><td>Limo</td><td>Suave como talco</td><td>Intermedio</td></tr>
        <tr><td>Arcilla</td><td>Pegajosa, se hace un chorizo</td><td>Guarda mucha agua y se encharca</td></tr>
      </table>
      <p>En gran parte de la zona pampeana la tierra tiene bastante arcilla: se pone dura cuando se seca y se encharca cuando llueve.</p>
      <p><strong>Prueba de drenaje:</strong></p>
      <pre><code>1. Cavá un pozo de 30 cm de hondo.
2. Llenalo de agua y dejá que se vacíe.
3. Llenalo de nuevo y mirá cuánto tarda.
   Se vacía en pocas horas   → drena bien
   Al otro día sigue con agua → drena mal</code></pre>
      <p><strong>Cómo mejorarla:</strong> agregá <strong>materia orgánica</strong>, que son restos de plantas descompuestos, como el compost. Mezclá una capa de 5 cm en los primeros 20 cm del cantero. La materia orgánica afloja la arcilla y ayuda a la arena a guardar agua. No sirve agregar solo arena a una tierra muy arcillosa: se puede formar algo parecido al cemento.</p>
      <p><strong>El pH</strong> dice si la tierra es ácida o alcalina, en una escala del 0 al 14 donde 7 es neutro. Casi todas las plantas andan bien entre 6 y 7. Algunas, como la azalea y la camelia, piden tierra ácida. Se mide con un kit barato de vivero.</p>
      <p>Por ejemplo, la hortensia cambia de color según el pH: en tierra ácida da flores azules y en tierra alcalina, rosadas.</p>` },
    { titulo: "Macetas, sustrato y trasplante", video: {"id":"4SrGZK7rL6k","t":"Cómo trasplantar una planta · Hágalo Usted Mismo con Sodimac (7:05)"}, html: `
      <p class="idea">En una maceta la planta depende de vos para todo. Necesita <strong>agujeros de drenaje</strong>, un <strong>sustrato</strong> suelto y una maceta más grande cuando las raíces ya no entran.</p>
      <p>El <strong>sustrato</strong> es la mezcla que ponés en la maceta en lugar de tierra de jardín. La tierra del patio sola se compacta en la maceta y ahoga las raíces.</p>
      <pre><code>Mezcla simple para macetas (en partes iguales):
1 balde de tierra negra
1 balde de compost
1 balde de perlita o arena gruesa</code></pre>
      <p>La <strong>perlita</strong> es un material de piedritas blancas muy livianas que dejan pasar el aire. Para suculentas y cactus, sumá más perlita o arena gruesa.</p>
      <p><strong>Señales de que hay que trasplantar:</strong> raíces que salen por los agujeros, agua que pasa de largo sin mojar el pan de tierra o una planta que dejó de crecer en primavera.</p>
      <p><strong>Paso a paso del trasplante:</strong></p>
      <ol>
        <li>Regá la planta el día anterior.</li>
        <li>Elegí una maceta 2 a 4 cm más ancha. Una mucho más grande guarda agua de más y pudre las raíces.</li>
        <li>Poné un poco de sustrato en el fondo. No hace falta una capa de piedras: no mejora el drenaje.</li>
        <li>Dala vuelta sosteniendo la base del tallo y sacala con su <strong>pan de tierra</strong>, que es el bloque de raíces y tierra.</li>
        <li>Si las raíces dan vueltas en círculo, aflojalas con los dedos.</li>
        <li>Ubicala a la misma altura que estaba, rellená y apretá suave.</li>
        <li>Regá hasta que salga agua por abajo y dejala unos días a la sombra.</li>
      </ol>
      <p><strong>La mejor época</strong> es el comienzo de la primavera, cuando la planta arranca a crecer. Usá guantes: el sustrato y el compost pueden tener bacterias, y lavate las manos al terminar.</p>
      <p>Por ejemplo, el potus de la galería tiene raíces saliendo por abajo de una maceta de 14 cm: en septiembre pasa a una de 17 cm.</p>` },
    { titulo: "Compost y abono", video: {"id":"uPh1dPvHosQ","t":"Paso a paso para la elaboración de compost (1ra parte) · INTA Chubut (3:03)"}, html: `
      <p class="idea">El <strong>compost</strong> es abono casero hecho con restos de cocina y de jardín. Mejora la tierra y aprovecha lo que irías a tirar.</p>
      <p>Se arma mezclando dos tipos de restos:</p>
      <table>
        <tr><th>Verdes (húmedos)</th><th>Marrones (secos)</th><th>Nunca</th></tr>
        <tr><td>Cáscaras de fruta y verdura, yerba, café, pasto cortado</td><td>Hojas secas, cartón sin tinta, ramitas, aserrín sin tratar</td><td>Carne, lácteos, aceite, caca de perro o gato, plantas enfermas</td></tr>
      </table>
      <pre><code>La receta:
Por cada balde de verdes, 1 o 2 de marrones.
Humedad: como una esponja escurrida.
Dar vuelta la pila cada 1 o 2 semanas para que entre aire.
Listo en 3 a 6 meses: oscuro, con olor a tierra de bosque.</code></pre>
      <p><strong>Si huele mal</strong>, tiene mucho verde o mucha agua: sumá marrones. <strong>Si no avanza</strong>, está seco: mojalo.</p>
      <p><strong>Los nutrientes.</strong> Las plantas toman de la tierra tres nutrientes principales. Los abonos de vivero los indican con las letras <strong>NPK</strong>:</p>
      <ul>
        <li><strong>N, nitrógeno:</strong> hojas verdes y crecimiento.</li>
        <li><strong>P, fósforo:</strong> raíces y flores.</li>
        <li><strong>K, potasio:</strong> salud general, flores y frutos.</li>
      </ul>
      <p>Un abono "15-15-15" tiene 15 % de cada uno. Uno para plantas con flor suele tener más P y K.</p>
      <p><strong>Cuándo y cuánto:</strong> aboná en primavera y verano, que es cuando la planta crece. En invierno casi no lo usa. Seguí la dosis de la etiqueta y, ante la duda, poné menos: el abono de más <strong>quema las raíces</strong> y deja los bordes de las hojas secos. Usá guantes y guardalo lejos de chicos y mascotas.</p>
      <p>Por ejemplo, en el patio de ejemplo, en septiembre se esparcen 2 cm de compost en el cantero y, de octubre a febrero, el rosal recibe abono para flores una vez por mes, a la mitad de la dosis de la etiqueta.</p>` },
  ],
  practica: [
    "Hacé la prueba de drenaje en un cantero o en una maceta grande y anotá cuántas horas tardó en vaciarse.",
    "Prepará un balde de sustrato con la mezcla en partes iguales y trasplantá una planta a una maceta 2 a 4 cm más ancha. Anotá el ancho de las dos macetas.",
    "Armá una compostera (un balde con agujeros o un rincón del patio) y anotá durante 4 semanas qué agregaste, si diste vuelta la pila y cómo olía.",
    "Leé la etiqueta de un abono y anotá sus números NPK y la dosis que indica.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: suelo, compost y cobertura (en inglés)", url: "https://www.rhs.org.uk/soil-composts-mulches" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Cómo cuidar tus plantas\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/segundo-paso-jardineria.pdf" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"El verano en el jardín\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/el-verano-en-el-jardin.pdf" },
  ],
  quiz: [
    { q: "Hiciste la prueba de drenaje y al otro día el pozo sigue con agua. ¿Qué significa?", opciones: ["Que drena muy bien","Que falta abono","Que la tierra drena mal","Que hay que regar más"], correcta: 2, explicacion: "Si el agua no baja en un día, el drenaje es malo. Regar más tienta si pensás que la tierra tiene sed, pero empeora el encharcamiento." },
    { q: "Tu cantero tiene tierra arcillosa que se encharca. ¿Qué agregás?", opciones: ["Materia orgánica, como compost, mezclada en los primeros 20 cm","Solo arena","Piedras arriba","Nada, se arregla sola"], correcta: 0, explicacion: "La materia orgánica afloja la arcilla. Solo arena tienta, pero con mucha arcilla puede quedar como cemento." },
    { q: "Si una tierra se siente pegajosa y se puede hacer un chorizo, ¿qué tiene mucho?", opciones: ["Arena","Perlita","Aire","Arcilla"], correcta: 3, explicacion: "La arcilla es pegajosa y se moldea. La arena tienta porque también es tierra, pero es áspera y no se pega." },
    { q: "Tu hortensia da flores rosadas y querías azules. ¿Qué tiene que ver?", opciones: ["La cantidad de sol","El pH: en tierra ácida da azules","El color de la maceta","La hora de riego"], correcta: 1, explicacion: "El color de la hortensia depende del pH. El sol tienta porque cambia mucho a las plantas, pero no el color de esta flor." },
    { q: "Si llenás una maceta con tierra del patio sola, ¿qué pasa?", opciones: ["Crece el doble","Nada, es lo ideal","Se compacta y ahoga las raíces","Se seca en una hora"], correcta: 2, explicacion: "En maceta la tierra sola se aprieta y no deja pasar aire. \"Es lo ideal\" tienta porque en el patio anda, pero la maceta es otro ambiente." },
    { q: "Ves raíces saliendo por los agujeros de la maceta. ¿Qué hacés en primavera?", opciones: ["La trasplantás a una maceta 2 a 4 cm más ancha","Cortás las raíces y listo","La pasás a una maceta el triple de grande","La dejás igual para siempre"], correcta: 0, explicacion: "Conviene un tamaño más. La maceta enorme tienta para no repetir, pero guarda agua de más y pudre raíces." },
    { q: "Si vas a trasplantar, ¿ponés una capa de piedras en el fondo?", opciones: ["Sí, siempre 10 cm de piedras","Sí, y tapás los agujeros","Sí, con arcilla","No hace falta: lo importante son los agujeros y un sustrato suelto"], correcta: 3, explicacion: "La capa de piedras no mejora el drenaje. Tienta porque es un consejo muy repetido, pero lo que drena son los agujeros y el sustrato." },
    { q: "Al sacar la planta, las raíces dan vueltas en círculo. ¿Qué hacés?", opciones: ["Las arrancás todas","Las aflojás suave con los dedos antes de plantarla","La plantás así","Las pintás"], correcta: 1, explicacion: "Aflojarlas las ayuda a ir hacia la tierra nueva. Arrancarlas tienta para \"limpiar\", pero lastima a la planta." },
    { q: "Tu compost huele mal. ¿Qué le falta?", opciones: ["Más restos de cocina","Más agua","Marrones secos, como hojas secas o cartón","Carne para que se active"], correcta: 2, explicacion: "El mal olor viene de mucho verde o mucha agua. Más agua tienta si pensás que está seco, pero lo empeora." },
    { q: "Si sobró un pedazo de asado, ¿va al compost casero?", opciones: ["No: la carne atrae animales y huele mal","Sí, es lo mejor","Sí, si está cocida","Sí, en verano"], correcta: 0, explicacion: "Carne y lácteos no van. \"Si está cocida\" tienta, pero sigue atrayendo moscas y roedores." },
    { q: "Un abono dice \"8-12-20\". ¿Para qué parte ayuda más?", opciones: ["Solo hojas verdes","Nada: son precios","Solo para el pasto","Flores y frutos: tiene más P y K"], correcta: 3, explicacion: "El orden es N-P-K y acá predominan P y K. Hojas verdes tienta porque el abono \"pone verde\", pero eso es el N." },
    { q: "Le pusiste el doble de abono a tu planta y los bordes de las hojas se secaron. ¿Qué pasó?", opciones: ["Le faltó abono","El abono de más quemó las raíces","Es una plaga","Le falta sol"], correcta: 1, explicacion: "El exceso de abono quema. Pensar que le faltó tienta porque se ve mal, pero el problema es lo contrario." },
  ],
},
{
  id: "riego",
  icono: "💧",
  titulo: "Regar bien",
  nivel: "Básico",
  objetivos: [
    "Decidir cuándo regar con la prueba del dedo en vez de un calendario fijo",
    "Regar a fondo, a la hora justa y según la estación",
    "Elegir entre regadera, manguera, aspersión o goteo y ahorrar agua",
  ],
  lecciones: [
    { titulo: "Cuándo regar", video: {"id":"W7bb3wIqgRQ","t":"Consejos para regar plantas de interior: 6 tips básicos · Infojardineria (7:45)"}, html: `
      <p class="idea">No riegues por calendario: <strong>regá cuando la tierra lo pide</strong>. Más plantas mueren por exceso de agua que por falta.</p>
      <p><strong>La prueba del dedo:</strong></p>
      <pre><code>Meté el dedo en la tierra hasta 2 o 3 cm.
  Seca       → regá
  Húmeda     → esperá y volvé a probar mañana
Para macetas grandes, usá un palito de brochette:
  sale limpio → seca adentro
  sale con tierra pegada → húmeda</code></pre>
      <p><strong>El peso también avisa.</strong> Levantá la maceta recién regada y otra vez a los días: una maceta seca pesa mucho menos. Con la práctica lo notás sin pensar.</p>
      <p><strong>Exceso y falta se parecen</strong>: en los dos casos la planta se ve caída. Para distinguirlos, mirá la tierra:</p>
      <table>
        <tr><th>Señal</th><th>Falta de agua</th><th>Exceso de agua</th></tr>
        <tr><td>Tierra</td><td>Seca, separada del borde</td><td>Mojada hace días, olor feo</td></tr>
        <tr><td>Hojas</td><td>Caídas y secas, crujientes</td><td>Caídas y blandas, amarillas abajo</td></tr>
        <tr><td>Después de regar</td><td>Se recupera en horas</td><td>No mejora o empeora</td></tr>
      </table>
      <p>El exceso pudre las raíces: se ponen marrones y blandas, en lugar de blancas y firmes. Se llama <strong>podredumbre de raíz</strong>.</p>
      <p><strong>Cada planta pide distinto.</strong> Un helecho quiere la tierra apenas húmeda siempre; un cactus quiere que se seque del todo entre riegos.</p>
      <p>Por ejemplo, en la galería de ejemplo la clivia y el potus se riegan cuando los 3 cm de arriba están secos: en verano es cada 4 o 5 días y en invierno, cada 10 a 15.</p>` },
    { titulo: "Cómo y a qué hora", html: `
      <p class="idea">Regá <strong>a fondo y de una vez</strong>, temprano a la mañana o al atardecer, mojando la tierra y no las hojas.</p>
      <p><strong>A fondo:</strong> en maceta, regá despacio hasta que salga agua por los agujeros. Así se moja todo el pan de tierra. Pasados unos 20 minutos, <strong>vaciá el plato</strong>: si queda agua abajo, las raíces se ahogan.</p>
      <p>Un poquito todos los días moja solo la superficie, y las raíces se quedan arriba, donde se secan rápido. Mejor menos veces y más profundo.</p>
      <p><strong>La hora:</strong></p>
      <table>
        <tr><th>Momento</th><th>Qué pasa</th></tr>
        <tr><td>Temprano a la mañana</td><td>El mejor: la planta tiene agua para el calor y las hojas se secan rápido</td></tr>
        <tr><td>Al atardecer</td><td>Bien en verano; evitá mojar las hojas, que de noche quedan húmedas</td></tr>
        <tr><td>Mediodía de verano</td><td>Se evapora mucha agua antes de llegar a las raíces</td></tr>
      </table>
      <p><strong>No mojes las hojas:</strong> las hojas mojadas por mucho tiempo favorecen los <strong>hongos</strong>, como el oídio, que vas a ver en el módulo de plagas. Apuntá a la base de la planta.</p>
      <p><strong>Según la estación:</strong> en verano las plantas toman mucha más agua; en invierno, mucho menos. Una planta en reposo con la tierra mojada se pudre.</p>
      <pre><code>Patio de ejemplo, en enero:
Cantero          → riego profundo 2 o 3 veces por semana
Macetas al sol   → casi todos los días (prueba del dedo)
Pasto            → 1 o 2 riegos largos por semana

El mismo patio, en julio:
Cantero y pasto  → casi nunca: alcanza con la lluvia
Macetas          → cada 1 o 2 semanas</code></pre>
      <p>Por ejemplo, si en enero regás las macetas al mediodía con la manguera sobre las hojas, perdés agua y les abrís la puerta a los hongos. A las 8 de la mañana, en la base, el mismo riego rinde mucho más.</p>` },
    { titulo: "Sistemas de riego y ahorro de agua", html: `
      <p class="idea">Elegí el <strong>sistema de riego</strong> según el tamaño del espacio, y cuidá el agua con cobertura y buenos horarios.</p>
      <table>
        <tr><th>Sistema</th><th>Para qué sirve</th><th>A tener en cuenta</th></tr>
        <tr><td>Regadera</td><td>Macetas y plantas sueltas</td><td>Lenta, pero controlás bien cuánto</td></tr>
        <tr><td>Manguera con pistola</td><td>Canteros y patios</td><td>Usá la lluvia suave, no el chorro fuerte</td></tr>
        <tr><td>Aspersión</td><td>Pasto</td><td>Moja hojas y pierde agua con viento y sol</td></tr>
        <tr><td>Goteo</td><td>Canteros, macetas y huertas</td><td>Lleva el agua a la raíz y ahorra mucho</td></tr>
      </table>
      <p>El <strong>riego por goteo</strong> es una manguera fina con <strong>goteros</strong>, que sueltan agua de a gotas al pie de cada planta. Se vende en kits y se puede conectar a un <strong>programador de canilla</strong>, que abre y cierra el agua solo a la hora que le digas. Sirve para cuando te vas de vacaciones.</p>
      <p><strong>Cobertura (mulch).</strong> Es una capa de 5 cm de hojas secas, chips de corteza o pasto seco sobre la tierra, sin tocar los tallos. Tiene tres ventajas:</p>
      <ul>
        <li>La tierra pierde menos agua.</li>
        <li>Salen menos malezas, que son las plantas que crecen donde no las querés.</li>
        <li>Al descomponerse, alimenta la tierra.</li>
      </ul>
      <p><strong>Más formas de ahorrar:</strong></p>
      <ul>
        <li>Juntá agua de lluvia en un tacho tapado (así no crían mosquitos).</li>
        <li>Agrupá las plantas que piden agua parecida.</li>
        <li>Si tu municipio pide no regar en ciertos horarios en verano, respetalo.</li>
      </ul>
      <p><strong>Vacaciones sin goteo:</strong> regá a fondo, juntá las macetas a la sombra y apoyalas sobre una toalla mojada en una bandeja. Para 1 o 2 semanas, pedile a un vecino que pase.</p>
      <p>Por ejemplo, en el cantero de ejemplo, un kit de goteo de 6 goteros con programador riega 20 minutos a las 7 de la mañana, y una capa de hojas secas mantiene la tierra húmeda el doble de tiempo.</p>` },
  ],
  practica: [
    "Durante 1 semana, hacé la prueba del dedo cada día en 3 macetas y anotá qué días regaste cada una.",
    "Regá una maceta a fondo, medí con un reloj cuántos minutos tarda en salir agua por abajo y anotá si vaciaste el plato a los 20 minutos.",
    "Poné 5 cm de cobertura en una parte de un cantero y no en otra. Compará después de 3 días con la prueba del dedo cuál está más húmeda.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: plantas de interior (en inglés)", url: "https://www.rhs.org.uk/plants/types/houseplants" },
    { t: "INTA: información agroclimática (heladas y lluvias de tu zona)", url: "https://www.argentina.gob.ar/inta/informacion-agroclimatica" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"El verano en el jardín\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/el-verano-en-el-jardin.pdf" },
  ],
  quiz: [
    { q: "Si querés saber si regar una maceta, ¿qué hacés?", opciones: ["Regás todos los lunes, sí o sí","Mirás si las hojas brillan","Metés el dedo 2 o 3 cm: si está seco, regás","Regás cuando te acordás"], correcta: 2, explicacion: "La prueba del dedo te dice lo que la tierra necesita. El calendario fijo tienta por ordenado, pero no tiene en cuenta el clima." },
    { q: "Tu planta está caída, la tierra está mojada hace días y huele feo. ¿Qué le pasa?", opciones: ["Exceso de agua: podés tener podredumbre de raíz","Le falta agua","Le falta abono","Le falta sol de la tarde"], correcta: 0, explicacion: "Tierra mojada y olor feo son exceso. Regar tienta porque la planta está caída, pero la terminás de pudrir." },
    { q: "Tu planta está caída, con hojas crujientes y la tierra separada del borde. ¿Qué hacés?", opciones: ["La dejás sin regar una semana","Le ponés abono","La pasás a la sombra total","La regás a fondo: le falta agua"], correcta: 3, explicacion: "Tierra seca y hojas crujientes es falta de agua. Abono tienta, pero en tierra seca quema más." },
    { q: "Si en una maceta grande el palito sale con tierra húmeda pegada, ¿qué hacés?", opciones: ["Regás igual","Esperás: adentro todavía hay humedad","Regás el doble","Cambiás la maceta"], correcta: 1, explicacion: "El palito con tierra pegada indica humedad. Regar igual tienta si la superficie se ve seca, pero abajo sigue mojada." },
    { q: "Regaste tu maceta y quedó agua en el plato. ¿Qué hacés a los 20 minutos?", opciones: ["Lo dejás para que tome después","Le agregás más agua","Vaciás el plato","Lo tapás"], correcta: 2, explicacion: "El agua del plato ahoga las raíces. Dejarla \"para después\" tienta, pero la tierra queda empapada." },
    { q: "Si regás un poquito todos los días, ¿qué pasa con las raíces?", opciones: ["Se quedan arriba, donde la tierra se seca rápido","Bajan más hondo","Crecen el doble","No pasa nada"], correcta: 0, explicacion: "El riego corto moja solo arriba. Pensar que es más cuidado tienta, pero es mejor menos veces y más profundo." },
    { q: "En enero, ¿a qué hora conviene regar el patio?", opciones: ["Al mediodía","A las 15, con más calor","A cualquier hora da igual","Temprano a la mañana"], correcta: 3, explicacion: "Temprano se pierde menos agua y las hojas se secan. El mediodía tienta porque la planta \"tiene calor\", pero se evapora mucha agua." },
    { q: "Si mojás las hojas al regar al atardecer, ¿qué riesgo hay?", opciones: ["Que se quemen con la luna","Que queden húmedas de noche y aparezcan hongos","Ninguno","Que crezcan más rápido"], correcta: 1, explicacion: "La humedad nocturna en las hojas favorece hongos. \"Ninguno\" tienta porque al atardecer no hay sol, pero ese es justo el problema." },
    { q: "En julio, tu cantero está húmedo por la lluvia. ¿Lo regás igual que en enero?", opciones: ["Sí, igual que siempre","Sí, el doble por el frío","No: en invierno las plantas toman mucha menos agua","Sí, con agua caliente"], correcta: 2, explicacion: "En invierno el consumo baja mucho. \"Igual que siempre\" tienta por costumbre, pero pudre raíces." },
    { q: "Tenés un cantero y te vas 10 días de vacaciones en enero. ¿Qué te sirve?", opciones: ["Un riego por goteo con programador de canilla","Un aspersor prendido 10 días","Regar una vez con mucha agua y nada más","Tapar las plantas con nylon"], correcta: 0, explicacion: "El goteo con programador riega solo y ahorra agua. El aspersor prendido tienta, pero gasta muchísima agua y encharca." },
    { q: "Si ponés 5 cm de hojas secas sobre la tierra del cantero, ¿qué ganás?", opciones: ["Que se pudran las plantas","Más plagas seguro","Nada","Menos pérdida de agua y menos malezas"], correcta: 3, explicacion: "La cobertura guarda humedad y frena malezas. Pensar que pudre tienta, pero no pasa si no toca los tallos." },
    { q: "Querés juntar agua de lluvia para regar. ¿Cómo la guardás?", opciones: ["En un balde destapado todo el verano","En un tacho tapado, para que no críen mosquitos","En una pileta abierta","No se puede usar para regar"], correcta: 1, explicacion: "El agua quieta y destapada cría mosquitos. El balde destapado tienta porque junta más, pero es un criadero." },
  ],
},
{
  id: "cesped",
  icono: "🌾",
  titulo: "El césped",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer si tu pasto es de verano o de invierno y cuidarlo según la estación",
    "Cortar el pasto a la altura justa con la regla del tercio",
    "Usar la cortadora de césped y la bordeadora sin riesgos",
  ],
  lecciones: [
    { titulo: "Pastos de verano y de invierno", html: `
      <p class="idea">No hay un solo "pasto". Hay especies que crecen con el calor y otras con el fresco. Saber cuál tenés explica por qué se pone amarillo en invierno.</p>
      <p>El <strong>césped</strong> es una alfombra de pastos que se cortan bajos. Esos pastos son <strong>gramíneas</strong>, la misma familia del trigo y del maíz.</p>
      <table>
        <tr><th></th><th>Pastos de verano</th><th>Pastos de invierno</th></tr>
        <tr><td>Ejemplos</td><td>Bermuda (gramilla), grama bahiana, grama brasilera, kikuyo</td><td>Ray grass, festuca</td></tr>
        <tr><td>Crecen más</td><td>Con calor, de octubre a marzo</td><td>Con fresco, en otoño y primavera</td></tr>
        <tr><td>En invierno</td><td>Se ponen amarillos y paran (reposo)</td><td>Siguen verdes</td></tr>
        <tr><td>En verano</td><td>Aguantan sol y calor</td><td>Sufren el calor fuerte</td></tr>
      </table>
      <p><strong>Resiembra de invierno.</strong> Para tener verde todo el año sobre un pasto de verano, en otoño (marzo y abril) se siembra <strong>ray grass</strong> encima. Crece en invierno y, cuando vuelve el calor, se seca y deja paso al pasto de verano.</p>
      <pre><code>Resiembra con ray grass, paso a paso:
1. Cortá el pasto bien bajo.
2. Rastrillá para que la semilla toque la tierra.
3. Esparcí la semilla con la dosis del envase.
4. Tapá con una capa fina de tierra o compost.
5. Mantené húmedo con riegos cortos hasta que nazca (1 o 2 semanas).</code></pre>
      <p><strong>Formas de implantar un césped nuevo:</strong> con semilla (barato, tarda más), con <strong>panes</strong> o tepes, que son rectángulos de pasto con su tierra, listos para apoyar (caro, verde enseguida), o con gajos de pastos que se extienden.</p>
      <p><strong>Para la sombra</strong>, casi ningún pasto anda bien. La grama brasilera aguanta algo de media sombra; abajo de un árbol con sombra cerrada conviene otra cobertura, como plantas de sombra o un cantero con mulch.</p>
      <p>Por ejemplo, la franja de pasto del patio de ejemplo es bermuda: amarillea en junio. En abril se le hace resiembra con ray grass y así se mantiene verde.</p>` },
    { titulo: "Cortar a la altura justa", video: {"id":"Nn7epkMOnW0","t":"Cómo cortar el pasto correctamente · Hágalo Usted Mismo con Sodimac (7:21)"}, html: `
      <p class="idea">La regla de oro: <strong>nunca cortes más de un tercio</strong> de la altura del pasto de una sola vez. Se llama la <strong>regla del tercio</strong>.</p>
      <pre><code>Querés dejarlo a 4 cm.
Un tercio de 6 cm es 2 cm → cortalo cuando llegue a 6 cm.
Si lo dejaste crecer hasta 12 cm:
  12 → 8 cm   (primer corte)
   8 → 5,5 cm (unos días después)
   5,5 → 4 cm (unos días después)</code></pre>
      <p>Si cortás de golpe mucho más, el pasto queda amarillo, se debilita y entran malezas. Por eso en verano, cuando crece rápido, hay que cortar seguido: a veces cada semana.</p>
      <table>
        <tr><th>Altura de corte</th><th>Para qué</th></tr>
        <tr><td>3 a 4 cm</td><td>Bermuda bien cuidada, a pleno sol</td></tr>
        <tr><td>5 a 7 cm</td><td>Grama brasilera, bahiana, ray grass y zonas con algo de sombra</td></tr>
        <tr><td>Más alto en verano seco</td><td>Un pasto un poco más alto da sombra a su propia tierra y aguanta mejor la sequía</td></tr>
      </table>
      <p><strong>Más consejos:</strong></p>
      <ul>
        <li>Cortá con el pasto seco: mojado se aplasta, el corte sale desparejo y la máquina se tapa.</li>
        <li>Cambiá la dirección de las pasadas cada vez, para que no se acueste siempre para el mismo lado.</li>
        <li>Mantené la cuchilla afilada: una cuchilla sin filo arranca y deja las puntas blancas y deshilachadas.</li>
        <li>Si cortás seguido, podés dejar los recortes cortitos en el pasto: se descomponen y lo abonan.</li>
      </ul>
      <p><strong>Aireación.</strong> Con el tiempo la tierra bajo el pasto se aprieta y el agua no entra. Una vez por año, en primavera, se pincha con una horquilla cada 10 o 15 cm, para que entren agua y aire.</p>
      <p>Por ejemplo, la bermuda del patio de ejemplo se deja a 4 cm: en enero se corta cada 5 a 7 días, apenas llega a 6 cm. En invierno, casi no se corta.</p>` },
    { titulo: "Cortadora y bordeadora seguras", html: `
      <p class="idea">La cortadora de césped y la bordeadora lastiman en serio: cortan dedos y pies y tiran piedras con fuerza. Antes de prenderlas, preparate a vos y al terreno.</p>
      <p>La <strong>cortadora</strong> tiene una cuchilla que gira abajo de una carcasa. La <strong>bordeadora</strong> corta con un hilo de nylon que gira muy rápido y sirve para bordes y rincones.</p>
      <table>
        <tr><th>Protección</th><th>Por qué</th></tr>
        <tr><td>Calzado cerrado y firme</td><td>Nunca en ojotas ni descalzo: la cuchilla corta los pies</td></tr>
        <tr><td>Anteojos de seguridad</td><td>La bordeadora tira piedras y astillas a los ojos</td></tr>
        <tr><td>Protectores de oídos</td><td>Las máquinas a nafta hacen mucho ruido</td></tr>
        <tr><td>Pantalón largo</td><td>Protege las piernas de lo que salta</td></tr>
      </table>
      <p><strong>Antes de empezar:</strong></p>
      <ul>
        <li>Recorré el pasto y sacá piedras, ramas, juguetes y huesos.</li>
        <li>Que no haya chicos ni mascotas cerca mientras cortás.</li>
        <li>En una eléctrica, revisá que el cable esté sano y llevalo siempre por detrás, del lado ya cortado. Usá un alargue para exterior y un enchufe con disyuntor.</li>
        <li>Con nafta, cargá el combustible con el motor apagado y frío, al aire libre.</li>
      </ul>
      <p><strong>Lo que nunca se hace:</strong></p>
      <ul>
        <li>Meter la mano o el pie bajo la carcasa con el motor andando. Para destrabar la cuchilla, <strong>apagá y desenchufá</strong> (en la de nafta, sacá el cable de la bujía) y esperá a que pare del todo.</li>
        <li>Cortar con pasto mojado o con lluvia con una máquina eléctrica.</li>
        <li>Tirar la cortadora hacia vos en una pendiente: en las barrancas, cortá de costado.</li>
        <li>Prestar la máquina a un chico.</li>
      </ul>
      <p><strong>Contra los troncos:</strong> el hilo de la bordeadora lastima la corteza de los árboles jóvenes y puede matarlos. Dejá un círculo con mulch alrededor del tronco.</p>
      <p>Por ejemplo, en el patio de ejemplo, antes de cada corte se juntan los juguetes del perro, se lo deja adentro, se revisa el cable y se corta con zapatillas cerradas y anteojos.</p>` },
  ],
  practica: [
    "Averiguá qué tipo de pasto tenés (en tu casa, en una plaza o preguntando en un vivero) y anotá si es de verano o de invierno.",
    "Medí con una regla la altura de un pasto antes de cortarlo, calculá un tercio y anotá a qué altura lo vas a dejar.",
    "Armá una lista de control de seguridad de 6 puntos para usar antes de cada corte y marcala la próxima vez que cortes.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: cuidado del césped (en inglés)", url: "https://www.rhs.org.uk/lawns" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Cómo cuidar tus plantas\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/segundo-paso-jardineria.pdf" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"El verano en el jardín\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/el-verano-en-el-jardin.pdf" },
  ],
  quiz: [
    { q: "En junio, tu pasto de bermuda se pone amarillo. ¿Qué pasa?", opciones: ["Se murió y hay que sacarlo","Le falta agua","Es un pasto de verano y entró en reposo","Tiene una plaga"], correcta: 2, explicacion: "La bermuda para en invierno y rebrota con el calor. \"Se murió\" tienta por el color, pero vuelve en primavera." },
    { q: "Querés tener verde todo el año sobre un pasto de verano. ¿Qué hacés en otoño?", opciones: ["Una resiembra con ray grass","Lo pintás de verde","Le ponés el doble de agua","Lo cortás al ras"], correcta: 0, explicacion: "El ray grass crece en invierno sobre el pasto de verano. Regar más tienta, pero el pasto de verano igual para con el frío." },
    { q: "Si necesitás un césped verde para la semana que viene, ¿cómo lo implantás?", opciones: ["Con semillas","Con gajos","Esperando que crezca solo","Con panes de pasto"], correcta: 3, explicacion: "Los panes dan verde enseguida. La semilla tienta por barata, pero tarda semanas." },
    { q: "Abajo de un árbol con sombra cerrada el pasto no prende. ¿Qué conviene?", opciones: ["Más semilla de bermuda","Otra cobertura, como plantas de sombra o mulch","Cortarlo más bajo","Regar el triple"], correcta: 1, explicacion: "Casi ningún pasto anda en sombra cerrada. Más semilla tienta, pero la bermuda pide sol pleno." },
    { q: "Querés dejar el pasto a 4 cm. ¿Cuándo lo cortás según la regla del tercio?", opciones: ["Cuando llega a 20 cm","Cuando llega a 4,5 cm","Cuando llega a unos 6 cm","Una vez por mes, sin medir"], correcta: 2, explicacion: "Un tercio de 6 cm es 2 cm: queda en 4. Esperar a 20 cm tienta para cortar menos veces, pero sacarías mucho más de un tercio." },
    { q: "Volviste de vacaciones y el pasto tiene 12 cm. ¿Qué hacés?", opciones: ["Lo bajás de a poco, en varios cortes separados por unos días","Lo cortás a 4 cm de una vez","Lo dejás así para siempre","Lo quemás"], correcta: 0, explicacion: "Así respetás la regla del tercio. Cortar todo de una vez tienta para terminar rápido, pero el pasto queda amarillo y débil." },
    { q: "Después de cortar, las puntas del pasto quedan blancas y deshilachadas. ¿Qué pasa?", opciones: ["Le falta agua","Es una plaga","Cortaste muy alto","La cuchilla no tiene filo"], correcta: 3, explicacion: "La cuchilla sin filo arranca en vez de cortar. Falta de agua tienta, pero ese daño es justo en la punta cortada." },
    { q: "Si llovió a la mañana, ¿cortás el pasto a la tarde con la eléctrica?", opciones: ["Sí, se corta mejor mojado","No: esperás a que esté seco","Sí, si usás ojotas","Sí, con el cable por delante"], correcta: 1, explicacion: "Mojado sale desparejo y con una eléctrica es más riesgoso. \"Se corta mejor\" tienta, pero el pasto se aplasta." },
    { q: "La cuchilla de la cortadora se trabó con una rama. ¿Qué hacés primero?", opciones: ["Metés la mano rápido","La destrabás con el pie","Apagás, desenchufás y esperás a que pare del todo","La levantás andando"], correcta: 2, explicacion: "Primero se corta la energía. Meter la mano rápido tienta porque \"es un segundo\", pero la cuchilla puede arrancar." },
    { q: "Vas a usar la bordeadora. ¿Qué protección no puede faltar?", opciones: ["Anteojos de seguridad y calzado cerrado","Solo guantes de lana","Ojotas cómodas","Ninguna, es chica"], correcta: 0, explicacion: "El hilo tira piedras a los ojos y a los pies. \"Es chica\" tienta, pero gira muy rápido." },
    { q: "Usás una cortadora eléctrica. ¿Dónde llevás el cable?", opciones: ["Por delante, para verlo","Abajo de la cortadora","Enrollado en el brazo","Por detrás, del lado ya cortado"], correcta: 3, explicacion: "Por detrás no lo pisa la cuchilla. Por delante tienta para verlo, pero ahí lo podés cortar." },
    { q: "Querés pasar la bordeadora alrededor de un árbol joven. ¿Qué conviene?", opciones: ["Pasar el hilo pegado a la corteza","Dejar un círculo con mulch para no tocar el tronco con el hilo","Sacar la corteza antes","Pintar el tronco"], correcta: 1, explicacion: "El hilo lastima la corteza y puede matar al árbol. Pasar pegado tienta para que quede prolijo, pero daña." },
  ],
},
{
  id: "poda",
  icono: "✂️",
  titulo: "Poda",
  nivel: "Intermedio",
  objetivos: [
    "Decidir si una planta necesita poda y en qué época hacerla",
    "Hacer un corte correcto sobre una yema y la regla de los 3 cortes en ramas gruesas",
    "Podar un rosal paso a paso y cuidar las herramientas sin lastimarte",
  ],
  lecciones: [
    { titulo: "Para qué y cuándo podar", html: `
      <p class="idea"><strong>Podar</strong> es cortar partes de una planta con un objetivo. Si no sabés para qué cortás, mejor no cortes: una mala poda hace más daño que no podar.</p>
      <table>
        <tr><th>Tipo de poda</th><th>Para qué</th></tr>
        <tr><td>De limpieza</td><td>Sacar ramas secas, enfermas, rotas o que se cruzan. Se puede hacer todo el año.</td></tr>
        <tr><td>De formación</td><td>Darle forma a una planta joven: elegir qué ramas quedan.</td></tr>
        <tr><td>De mantenimiento</td><td>Controlar el tamaño y que siga floreciendo.</td></tr>
        <tr><td>De rejuvenecimiento</td><td>Cortar fuerte un arbusto viejo y pelado para que rebrote desde abajo.</td></tr>
      </table>
      <p><strong>Cuándo:</strong> depende del tipo de planta, que viste en el primer módulo.</p>
      <pre><code>Caducas (fresno, rosal, glicina)
  → en invierno, en reposo: julio y agosto,
    pasadas las heladas más fuertes.
Arbustos que florecen en primavera (jazmín del país, spirea)
  → justo después de la floración.
    Si los podás en invierno, cortás los pimpollos.
Persistentes (limonero, laurel)
  → poda suave al final del invierno o comienzo de la primavera.
Flores marchitas
  → todo el año: sacarlas ayuda a que vuelva a florecer.</code></pre>
      <p><strong>Nunca saques más de un tercio</strong> de las ramas de una planta en un año, salvo en un rejuvenecimiento planeado. Tampoco podes justo antes de una helada: el brote nuevo se quema.</p>
      <p><strong>Árboles grandes: no los podés vos.</strong> Trabajar en altura, con motosierra o cerca de cables es para profesionales con equipo. Los árboles de la vereda, en muchos municipios, solo los puede podar el municipio o alguien con permiso: consultá antes de cortar. Y el "desmoche", que es cortar todas las ramas gruesas dejando muñones, enferma y debilita al árbol.</p>
      <p>Por ejemplo, en el patio de ejemplo el rosal se poda en agosto, el jazmín del país en diciembre, al terminar de florecer, y al limonero solo se le hace limpieza en septiembre.</p>` },
    { titulo: "El corte correcto", video: {"id":"BwS-CZBtjgk","t":"Poda de rosas, arbustos y plantas ornamentales · INTA Montecarlo (14:44)"}, html: `
      <p class="idea">Cada corte se hace en un lugar preciso: <strong>apenas arriba de una yema</strong> o junto al <strong>cuello de la rama</strong>. Así la planta cierra la herida rápido.</p>
      <p>Una <strong>yema</strong> es el bultito en el tallo de donde sale una hoja o una rama nueva. La rama nueva va a crecer hacia donde mira la yema.</p>
      <pre><code>Corte sobre yema:
        /   ← corte en bisel, 5 mm arriba de la yema,
       /      con la pendiente hacia el lado contrario
      •       ← yema que mira hacia afuera de la planta
      |
Muy arriba → queda un muñón que se seca.
Muy pegado → se seca la yema.</code></pre>
      <p><strong>Elegí yemas que miren hacia afuera</strong>: así el centro de la planta queda abierto, con aire y luz, y hay menos hongos.</p>
      <p><strong>Ramas gruesas: la regla de los 3 cortes.</strong> Si cortás una rama pesada de una vez, su peso la arranca y desgarra la corteza del tronco.</p>
      <ol>
        <li>A unos 30 cm del tronco, un corte <strong>desde abajo</strong> hasta un tercio de la rama.</li>
        <li>Un poco más afuera, un corte <strong>desde arriba</strong> hasta que la rama caiga.</li>
        <li>Con el peso fuera, el <strong>corte final</strong> junto al cuello de la rama.</li>
      </ol>
      <p>El <strong>cuello de la rama</strong> es el engrosamiento arrugado donde la rama se une al tronco. No lo cortes al ras del tronco ni dejes un muñón largo: el cuello es lo que cierra la herida.</p>
      <p><strong>No hace falta pintar los cortes</strong> en la mayoría de los casos: el árbol los cierra solo si el corte es limpio y en el lugar correcto.</p>
      <p>Por ejemplo, en el limonero de ejemplo, una rama seca de 4 cm de grosor se saca con serrucho y la regla de los 3 cortes, y el corte final queda justo afuera del cuello.</p>` },
    { titulo: "Rosales y herramientas", html: `
      <p class="idea">El <strong>rosal</strong> es la poda clásica para aprender: tiene un paso a paso claro y perdona errores. Y como toda poda, empieza por herramientas filosas, limpias y seguras.</p>
      <p><strong>Poda de invierno de un rosal arbustivo</strong> (en agosto, en el centro del país):</p>
      <ol>
        <li>Sacá las ramas secas, enfermas y las finitas como un lápiz o menos.</li>
        <li>Sacá las que se cruzan o van hacia el centro.</li>
        <li>Dejá entre 3 y 5 ramas sanas y fuertes, formando una copa abierta.</li>
        <li>Cortá cada una dejando 3 a 5 yemas desde la base, sobre una yema que mire hacia afuera.</li>
        <li>Sacá los <strong>chupones</strong> que nacen del pie, por debajo del injerto: son brotes del portainjerto, la planta de base sobre la que se injertó el rosal, y le roban fuerza.</li>
      </ol>
      <p>En primavera y verano, cortá las flores marchitas sobre la primera hoja de 5 folíolos (las hojitas en que se divide cada hoja) para que vuelva a florecer.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué grosor</th></tr>
        <tr><td>Tijera de podar de una mano</td><td>Hasta 2 cm</td></tr>
        <tr><td>Tijera de dos manos (podadora)</td><td>Hasta 4 cm</td></tr>
        <tr><td>Serrucho de podar</td><td>Más de 4 cm</td></tr>
        <tr><td>Tijera de cerco</td><td>Recortar cercos de hojas chicas</td></tr>
      </table>
      <p>Preferí tijeras de <strong>tipo bypass</strong>, que cortan como una tijera común. Las de yunque, que aprietan contra una base, aplastan el tallo verde.</p>
      <p><strong>Seguridad y cuidado:</strong></p>
      <ul>
        <li>Guantes gruesos y mangas largas: las espinas del rosal lastiman y se infectan.</li>
        <li>Anteojos cuando cortás ramas a la altura de la cara.</li>
        <li>Cortá alejando la hoja del cuerpo y con la otra mano fuera del recorrido.</li>
        <li>Nunca uses la escalera en un piso desparejo ni te estires de más: bajá y movela.</li>
        <li>Limpiá la hoja con alcohol entre una planta y otra si hubo alguna enferma, y guardá la tijera cerrada, seca y aceitada.</li>
      </ul>
      <p>Por ejemplo, el rosal del patio de ejemplo tenía 9 ramas: quedaron 4, cada una con 4 yemas, y se sacaron 2 chupones del pie.</p>` },
  ],
  practica: [
    "Elegí 3 plantas de tu casa o de tu barrio y anotá para cada una de qué tipo es y en qué mes conviene podarla.",
    "En una rama que igual ibas a sacar, practicá 5 cortes en bisel a 5 mm de una yema y compará cuáles quedaron bien ubicados.",
    "Si tenés un rosal, contá cuántas ramas tiene antes de podar y cuántas dejaste después. Anotá cuántas yemas dejaste en cada una.",
    "Revisá tus herramientas de poda: anotá cuáles tienen filo, limpialas con alcohol y aceitalas.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: poda, consejos y técnicas (en inglés)", url: "https://www.rhs.org.uk/pruning" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Cómo cuidar tus plantas\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/segundo-paso-jardineria.pdf" },
    { t: "INTA: microcurso \"Cuidado de las plantas ornamentales y sus enfermedades\" (PDF)", url: "https://formacion.inta.gob.ar/wp-content/uploads/2024/04/Cuidado-de-las-plantas-ornamentales-y-sus-enfermedades.pdf" },
  ],
  quiz: [
    { q: "Si tu rosal tiene ramas secas en marzo, ¿podés sacarlas aunque no sea agosto?", opciones: ["No, nunca fuera de agosto","Solo con luna llena","Sí: la poda de limpieza se puede hacer todo el año","Solo si florece"], correcta: 2, explicacion: "Las ramas secas o enfermas se sacan cuando aparecen. \"Solo en agosto\" tienta porque es la poda fuerte del rosal, pero esa es otra poda." },
    { q: "Tu jazmín del país florece en primavera. ¿Cuándo lo podás?", opciones: ["Justo después de la floración","En pleno invierno","Justo antes de florecer","Nunca"], correcta: 0, explicacion: "Si lo podás en invierno cortás los pimpollos. El invierno tienta porque ahí se podan las caducas, pero este florece en madera vieja." },
    { q: "Tu fresno de hoja caduca necesita poda de formación. ¿Cuándo la hacés?", opciones: ["En enero, con todas las hojas","Antes de una helada fuerte","En cualquier momento da igual","En invierno, en reposo, pasadas las heladas fuertes"], correcta: 3, explicacion: "Las caducas se podan en reposo. Antes de una helada tienta porque es invierno, pero el brote nuevo se quema." },
    { q: "Un vecino quiere cortar las ramas gruesas del árbol de la vereda dejando muñones. ¿Qué le decís?", opciones: ["Que está bien, así rebrota","Que el desmoche enferma al árbol y que consulte al municipio antes","Que lo haga con una escalera chica","Que corte también el tronco"], correcta: 1, explicacion: "El desmoche debilita al árbol y en muchos municipios la vereda necesita permiso. \"Así rebrota\" tienta, pero rebrota débil y enfermo." },
    { q: "Cortás un tallo de rosal 3 cm arriba de una yema. ¿Qué pasa?", opciones: ["Es el corte perfecto","Se seca la yema","Queda un muñón que se seca","Florece el doble"], correcta: 2, explicacion: "El corte va unos 5 mm arriba. \"Se seca la yema\" tienta, pero eso pasa cuando cortás muy pegado." },
    { q: "Querés que tu arbusto quede abierto, con luz en el centro. ¿Sobre qué yemas cortás?", opciones: ["Sobre yemas que miran hacia afuera","Sobre yemas que miran hacia adentro","Da igual","Sin mirar las yemas"], correcta: 0, explicacion: "La rama nueva crece hacia donde mira la yema. \"Da igual\" tienta, pero las de adentro cierran el centro." },
    { q: "Tenés que sacar una rama de 8 cm de grosor. ¿Cómo lo hacés?", opciones: ["Un solo corte desde arriba, pegado al tronco","Con tijera de una mano","Arrancándola","Con la regla de los 3 cortes"], correcta: 3, explicacion: "Con un solo corte, el peso desgarra la corteza. Cortar de una vez tienta por rápido, pero arranca un pedazo del tronco." },
    { q: "En el corte final de una rama gruesa, ¿dónde cortás?", opciones: ["Al ras del tronco","Junto al cuello de la rama, sin cortarlo","Dejando 20 cm de muñón","En el medio de la rama"], correcta: 1, explicacion: "El cuello cierra la herida. Al ras tienta porque queda prolijo, pero corta el cuello y la herida no cierra." },
    { q: "Le hiciste un corte limpio a una rama, en el lugar correcto. ¿Hace falta pintarlo?", opciones: ["Sí, siempre con pintura de pared","Sí, con aceite de auto","En general no: el árbol lo cierra solo","Sí, con lavandina"], correcta: 2, explicacion: "Un corte bien hecho cierra solo. Pintarlo tienta como protección, pero no hace falta y algunos productos dañan." },
    { q: "Ves brotes que nacen del pie del rosal, por debajo del injerto. ¿Qué hacés?", opciones: ["Los sacás: son chupones que le roban fuerza","Los dejás, son ramas nuevas","Los abonás","Cortás el resto del rosal"], correcta: 0, explicacion: "Los chupones vienen del portainjerto. Dejarlos tienta porque son ramas vigorosas, pero no dan las rosas que querés." },
    { q: "Tenés que cortar ramas de 3 cm. ¿Qué herramienta usás?", opciones: ["Tijera de una mano","Tijera de cerco","Cuchillo de cocina","Tijera de dos manos"], correcta: 3, explicacion: "La de dos manos llega hasta 4 cm. La de una mano tienta porque es la que tenés a mano, pero se fuerza y corta mal." },
    { q: "Podaste un rosal con hongos y vas a seguir con otro sano. ¿Qué hacés con la tijera?", opciones: ["Seguís igual","La limpiás con alcohol antes de seguir","La lavás con barro","La dejás al sol un minuto"], correcta: 1, explicacion: "La tijera puede llevar la enfermedad. Seguir igual tienta por apuro, pero contagiás a la planta sana." },
  ],
},
{
  id: "multiplicar",
  icono: "🌱",
  titulo: "Multiplicar plantas",
  nivel: "Intermedio",
  objetivos: [
    "Hacer esquejes de plantas comunes y lograr que echen raíces",
    "Dividir una mata o plantar bulbos a la profundidad correcta",
    "Sembrar flores en almácigo y trasplantarlas a tiempo",
  ],
  lecciones: [
    { titulo: "Esquejes", video: {"id":"qX0_FzTwKmo","t":"Cómo hacer esquejes: multiplicá tus plantas de interior · Infojardineria (9:22)"}, html: `
      <p class="idea">Un <strong>esqueje</strong> (también le dicen gajo) es un pedazo de tallo que, puesto en agua o en tierra, echa raíces y se vuelve una planta nueva, igual a la madre. Es gratis y muchas plantas lo hacen fácil.</p>
      <p>Un <strong>nudo</strong> es el lugar del tallo de donde sale una hoja. De ahí también salen las raíces nuevas.</p>
      <pre><code>Esqueje paso a paso:
1. Elegí un tallo sano, sin flores, de 10 a 15 cm.
2. Cortalo con tijera limpia, justo debajo de un nudo.
3. Sacale las hojas de la mitad de abajo.
4. Ponelo en agua o en sustrato húmedo, con 1 o 2 nudos enterrados.
5. Dejalo con luz clara, sin sol directo.
6. Mantené la humedad: cambiá el agua cada 3 o 4 días.
7. Cuando las raíces tengan unos 3 cm, pasalo a una maceta.</code></pre>
      <table>
        <tr><th>Planta</th><th>Dónde enraíza</th><th>Tiempo aproximado</th></tr>
        <tr><td>Potus</td><td>Agua o tierra</td><td>2 a 3 semanas</td></tr>
        <tr><td>Malvón</td><td>Tierra (en agua se pudre)</td><td>3 a 4 semanas</td></tr>
        <tr><td>Lavanda, romero</td><td>Tierra con arena</td><td>4 a 8 semanas</td></tr>
        <tr><td>Suculentas</td><td>Tierra seca, después de dejar secar el corte 2 o 3 días</td><td>2 a 4 semanas</td></tr>
      </table>
      <p><strong>La mejor época</strong> para la mayoría es primavera o fin del verano. Las <strong>hormonas de enraizamiento</strong>, un polvo que se vende en viveros, ayudan con las plantas leñosas difíciles, pero las fáciles no las necesitan.</p>
      <p><strong>Si se pudre</strong>, había mucha agua o sol fuerte. Siempre hacé 3 o 4 esquejes: no todos prenden.</p>
      <p>Esto es lo mismo que la poda: un tallo que sacás al podar un romero puede ser un esqueje.</p>
      <p>Por ejemplo, de los 5 esquejes de potus que se hicieron en el patio de ejemplo en octubre, 4 tenían raíces de 3 cm a las 3 semanas y se pasaron a una maceta colgante.</p>` },
    { titulo: "División de matas y bulbos", html: `
      <p class="idea">Muchas perennes forman <strong>matas</strong> que crecen hacia los costados. Se pueden <strong>dividir</strong> en varias plantas. Y las bulbosas se multiplican solas: cada año hay más bulbos.</p>
      <p><strong>División de matas</strong> (agapanto, cinta, clivia, lirio, margarita):</p>
      <ol>
        <li>Hacelo al final del invierno o después de la floración.</li>
        <li>Regá el día anterior.</li>
        <li>Sacá la mata entera con pala o desmacetala.</li>
        <li>Separala en partes con las manos, o con una pala o cuchillo si es dura. Cada parte tiene que tener raíces y hojas.</li>
        <li>Plantá cada parte enseguida, a la misma altura, y regá.</li>
      </ol>
      <p>Una mata muy grande y apretada florece menos: dividirla cada 3 o 4 años la renueva.</p>
      <p><strong>Bulbos.</strong> Un <strong>bulbo</strong> es una reserva de alimento bajo tierra, como una cebolla. Hay otras formas parecidas: el <strong>rizoma</strong>, un tallo que crece acostado bajo tierra (como el lirio), y el <strong>tubérculo</strong>, como el de la dalia.</p>
      <pre><code>Profundidad para plantar un bulbo:
2 o 3 veces su altura.
Bulbo de 4 cm → pozo de 8 a 12 cm.
La punta va para arriba; las raíces, para abajo.</code></pre>
      <table>
        <tr><th>Cuándo se plantan</th><th>Florecen</th><th>Ejemplos</th></tr>
        <tr><td>Otoño (marzo a mayo)</td><td>Fin del invierno y primavera</td><td>Fresia, narciso, jacinto</td></tr>
        <tr><td>Fin del invierno y primavera</td><td>Verano</td><td>Dalia, gladiolo, amarilis</td></tr>
      </table>
      <p><strong>Después de florecer, dejá las hojas</strong> hasta que se sequen solas: con ellas el bulbo junta reserva para el año siguiente.</p>
      <p>Por ejemplo, en el cantero de ejemplo, un agapanto grande se dividió en agosto en 4 partes; 2 quedaron en el cantero y 2 se regalaron a un vecino. En abril se plantaron 20 bulbos de fresia a 8 cm de hondo.</p>` },
    { titulo: "Semillas y almácigos", html: `
      <p class="idea">Las <strong>anuales</strong> de flor, como el copete y el cosmos, se siembran cada año. Un <strong>almácigo</strong> es un recipiente donde nacen las plantitas protegidas antes de pasarlas a su lugar.</p>
      <p><strong>Leé el sobre de semillas:</strong> dice la época de siembra, la profundidad, la distancia entre plantas y los días hasta que nacen. La germinación es el momento en que la semilla se abre y sale la plantita.</p>
      <pre><code>Siembra en almácigo:
1. Usá un maple de huevos o vasitos con agujeros.
2. Llenalos con sustrato fino y húmedo.
3. Profundidad: 2 o 3 veces el tamaño de la semilla.
   Semillas muy chicas: apenas apoyadas, sin tapar.
4. 2 o 3 semillas por hueco.
5. Mojá con rociador para no moverlas.
6. Luz clara, sin sol fuerte, y tierra siempre apenas húmeda.</code></pre>
      <p><strong>Raleo.</strong> Si nacen varias por hueco, dejá la más fuerte y cortá las otras al ras con tijera. No las arranques, porque movés la raíz de la que queda.</p>
      <p><strong>Rustificar</strong> es acostumbrar las plantitas al exterior de a poco antes de trasplantarlas: unas horas por día afuera durante una semana. Si las sacás de golpe, el sol y el viento las queman.</p>
      <p><strong>Trasplante al cantero:</strong> cuando tengan 4 a 6 hojas verdaderas, en un día nublado o al atardecer, respetando la distancia del sobre. Las primeras dos hojitas que salen se llaman cotiledones y no cuentan.</p>
      <table>
        <tr><th>Flor anual</th><th>Siembra (centro del país)</th></tr>
        <tr><td>Copete, cosmos, zinnia</td><td>Septiembre a noviembre</td></tr>
        <tr><td>Caléndula, pensamiento, conejito</td><td>Febrero a abril</td></tr>
      </table>
      <p><strong>Las semillas guardadas</strong> se conservan en un frasco seco y fresco, con nombre y fecha.</p>
      <p>Por ejemplo, en el patio de ejemplo se sembraron 12 huecos de copete en septiembre: nacieron a los 7 días, se ralearon y en octubre se trasplantaron 10 plantas al cantero a 25 cm entre sí.</p>` },
  ],
  practica: [
    "Hacé 4 esquejes de una misma planta (potus, malvón o la que tengas) y anotá cada semana cuántos tienen raíces.",
    "Dividí una mata que esté muy apretada o plantá 5 bulbos. Anotá la altura de cada bulbo y a qué profundidad lo enterraste.",
    "Sembrá un almácigo de 12 huecos con una flor de estación y anotá cuántos días tardó en nacer y cuántas plantas llegaron a 4 hojas.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: multiplicar plantas (en inglés)", url: "https://www.rhs.org.uk/propagation" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Cómo cuidar tus plantas\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/segundo-paso-jardineria.pdf" },
    { t: "Royal Horticultural Society: tareas del jardín mes a mes (en inglés; hemisferio norte, corré 6 meses)", url: "https://www.rhs.org.uk/garden-jobs" },
  ],
  quiz: [
    { q: "Vas a hacer un esqueje. ¿Dónde cortás el tallo?", opciones: ["En el medio entre dos nudos","En la punta de la hoja","Justo debajo de un nudo","Arrancándolo con la mano"], correcta: 2, explicacion: "Del nudo salen las raíces. Cortar entre nudos tienta porque deja un tallo más largo, pero ese pedazo se pudre." },
    { q: "Pusiste un esqueje en agua y las hojas de abajo quedaron sumergidas. ¿Qué hacés?", opciones: ["Se las sacás: las hojas bajo el agua se pudren","Las dejás para que alimenten","Le agregás azúcar","Le ponés sol fuerte"], correcta: 0, explicacion: "Las hojas sumergidas se pudren y contaminan el agua. Dejarlas \"para alimentar\" tienta, pero el esqueje se pierde." },
    { q: "Querés multiplicar un malvón. ¿Dónde ponés el esqueje?", opciones: ["En agua sin cambiarla","En un frasco cerrado sin aire","Al sol fuerte, sin tierra","En tierra: en agua se pudre"], correcta: 3, explicacion: "El malvón enraíza mejor en tierra. El agua tienta porque funciona con el potus, pero no con todas las plantas." },
    { q: "Hiciste esquejes de una suculenta. ¿Qué hacés antes de plantarlos?", opciones: ["Los plantás mojados enseguida","Dejás secar el corte 2 o 3 días","Los ponés en agua una semana","Les sacás todas las hojas"], correcta: 1, explicacion: "El corte seco evita que se pudran. Plantarlos enseguida tienta por apuro, pero las suculentas se pudren con humedad." },
    { q: "Tus esquejes se pudren todos. ¿Qué es lo más probable?", opciones: ["Les faltó abono","Les faltó hormona en una planta fácil","Mucha agua o sol fuerte","Eran demasiados"], correcta: 2, explicacion: "La pudrición viene del exceso de humedad o del calor. La hormona tienta como solución, pero no la necesitan las plantas fáciles." },
    { q: "Tu agapanto forma una mata enorme y florece cada vez menos. ¿Qué hacés?", opciones: ["Dividís la mata en varias partes con raíces y hojas","Le cortás todas las hojas","Lo regás el triple","Lo trasplantás entero a una maceta chica"], correcta: 0, explicacion: "Dividirla la renueva. Regar más tienta, pero el problema es que está apretada." },
    { q: "Al dividir una mata, ¿qué tiene que tener cada parte?", opciones: ["Solo hojas","Solo tierra","Una flor abierta","Raíces y hojas"], correcta: 3, explicacion: "Sin raíces no se alimenta y sin hojas no hace fotosíntesis. \"Solo hojas\" tienta porque es lo que se ve, pero no prende." },
    { q: "Tenés un bulbo de 5 cm de alto. ¿A qué profundidad lo plantás?", opciones: ["Apenas tapado, a 1 cm","Entre 10 y 15 cm","A 50 cm","Sobre la tierra, sin enterrar"], correcta: 1, explicacion: "Va a 2 o 3 veces su altura. Apenas tapado tienta para que salga rápido, pero el bulbo queda flojo y se seca." },
    { q: "Querés fresias que florezcan en primavera. ¿Cuándo las plantás?", opciones: ["En diciembre","En enero","En otoño","Cuando ya florecieron otras"], correcta: 2, explicacion: "Las bulbosas de primavera se plantan en otoño. La primavera tienta porque es cuando florecen, pero ahí ya es tarde." },
    { q: "Tus narcisos terminaron de florecer. ¿Qué hacés con las hojas?", opciones: ["Las dejás hasta que se sequen solas","Las cortás enseguida","Las atás con un nudo","Las arrancás con el bulbo"], correcta: 0, explicacion: "Con las hojas el bulbo junta reserva. Cortarlas tienta por prolijidad, pero el año siguiente florece menos." },
    { q: "En tu almácigo nacieron 3 plantitas por hueco. ¿Qué hacés?", opciones: ["Las dejás a todas","Arrancás dos con la raíz","Arrancás la más fuerte","Dejás la más fuerte y cortás las otras al ras"], correcta: 3, explicacion: "Cortar al ras no mueve la raíz de la que queda. Arrancar tienta por rápido, pero daña a la elegida." },
    { q: "Tus plantitas de almácigo crecieron adentro. ¿Cómo las pasás al cantero?", opciones: ["Las sacás al sol del mediodía de golpe","Las rustificás unos días y las trasplantás con 4 a 6 hojas verdaderas","Las trasplantás con las 2 primeras hojitas","Las dejás en el almácigo para siempre"], correcta: 1, explicacion: "Acostumbrarlas de a poco evita que se quemen. Sacarlas de golpe tienta para ganar tiempo, pero el sol y el viento las dañan." },
  ],
},
{
  id: "sanidad",
  icono: "🐞",
  titulo: "Plagas y enfermedades",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer las plagas y enfermedades más comunes del jardín por sus señales",
    "Controlarlas primero con prevención, a mano, con agua jabonosa y con insectos aliados",
    "Leer la etiqueta de un producto y usarlo con la protección correcta, o decidir no usarlo",
  ],
  lecciones: [
    { titulo: "Reconocer el problema", html: `
      <p class="idea">Antes de tratar, <strong>mirá bien y nombrá el problema</strong>. Una <strong>plaga</strong> es un bicho que daña la planta; una <strong>enfermedad</strong> la causan hongos, bacterias o virus. Cada una se trata distinto.</p>
      <table>
        <tr><th>Qué ves</th><th>Qué es</th><th>Dónde mirar</th></tr>
        <tr><td>Bichitos verdes o negros en grupo, hojas enruladas y pegajosas</td><td><strong>Pulgón</strong></td><td>Brotes tiernos y pimpollos</td></tr>
        <tr><td>Motas blancas como algodón</td><td><strong>Cochinilla algodonosa</strong></td><td>Axilas de las hojas, envés</td></tr>
        <tr><td>Escamas marrones pegadas al tallo</td><td><strong>Cochinilla de escudo</strong></td><td>Tallos y nervios de las hojas</td></tr>
        <tr><td>Una nube de mosquitas blancas al mover la planta</td><td><strong>Mosca blanca</strong></td><td>Envés de las hojas</td></tr>
        <tr><td>Hojas punteadas y opacas, telitas finas</td><td><strong>Arañuela</strong> (un ácaro diminuto)</td><td>Envés, con tiempo seco y caluroso</td></tr>
        <tr><td>Hojas cortadas en medialuna, caminos de hormigas</td><td><strong>Hormiga cortadora</strong></td><td>De noche, siguiendo el camino</td></tr>
        <tr><td>Polvillo blanco como harina</td><td><strong>Oídio</strong> (hongo)</td><td>Cara de arriba de las hojas</td></tr>
        <tr><td>Manchitas anaranjadas como óxido</td><td><strong>Roya</strong> (hongo)</td><td>Envés de las hojas</td></tr>
        <tr><td>Planta caída con tierra mojada, raíces marrones</td><td><strong>Podredumbre de raíz</strong></td><td>Raíces (repasá el módulo de riego)</td></tr>
      </table>
      <p>El <strong>envés</strong> es la cara de abajo de la hoja: muchas plagas se esconden ahí.</p>
      <p><strong>Pegajoso y negro:</strong> el pulgón, la cochinilla y la mosca blanca largan una melaza dulce. Encima crece un hongo negro, la <strong>fumagina</strong>, que ensucia las hojas. Y la melaza atrae hormigas que "cuidan" a la plaga. Si ves hormigas subiendo a una planta, buscá pulgón.</p>
      <p><strong>Revisá una vez por semana</strong>, dando vuelta algunas hojas, sobre todo en primavera. Una lupa ayuda. Un problema chico se arregla con los dedos; uno grande, no.</p>
      <p>Por ejemplo, en el patio de ejemplo, en octubre el rosal tenía los pimpollos llenos de bichitos verdes y hormigas subiendo: era pulgón, no un problema de riego.</p>` },
    { titulo: "Controlar sin venenos de más", video: {"id":"LfKUWKxS6hU","t":"Vaquitas de San Antonio como alternativa de control · INTA Informa (5:34)"}, html: `
      <p class="idea">El orden es: <strong>prevenir, sacar a mano, usar remedios suaves y dejar trabajar a los insectos aliados</strong>. Los productos químicos van al final, si hacen falta.</p>
      <p>Este orden se llama <strong>manejo integrado de plagas</strong>: combinar varias formas de control y usar la más fuerte solo cuando las otras no alcanzan.</p>
      <p><strong>1. Prevenir.</strong> Una planta en el lugar justo, bien regada y sin exceso de abono se enferma menos. El exceso de nitrógeno da brotes blandos que atraen pulgones. Dejá aire entre plantas y no mojes las hojas.</p>
      <p><strong>2. Sacar a mano.</strong></p>
      <ul>
        <li>Cortá y tirá a la basura (no al compost) las hojas con hongos.</li>
        <li>Aplastá el pulgón con los dedos con guantes, o sacalo con un chorro de agua.</li>
        <li>Pasá un algodón con alcohol sobre las cochinillas.</li>
      </ul>
      <p><strong>3. Remedios suaves.</strong></p>
      <pre><code>Agua jabonosa para pulgón y mosca blanca:
1 litro de agua + 1 cucharada de jabón blanco rallado
o de jabón potásico (no detergente ni lavandina).
Rociá bien el envés, al atardecer, sin sol fuerte.
Repetí cada 5 a 7 días, 2 o 3 veces.
Probalo antes en 2 o 3 hojas: algunas plantas se manchan.</code></pre>
      <p>Lo casero también es un producto: no lo mezcles con otros ni lo uses más fuerte "para que ande mejor".</p>
      <p><strong>4. Insectos aliados.</strong> No todos los bichos son malos. Los <strong>insectos benéficos</strong> comen plagas:</p>
      <table>
        <tr><th>Aliado</th><th>Qué come</th></tr>
        <tr><td>Vaquita de San Antonio (adulta y larva)</td><td>Pulgones, muchísimos por día</td></tr>
        <tr><td>Crisopa (un insecto verde de alas transparentes)</td><td>Pulgones y cochinillas</td></tr>
        <tr><td>Avispitas y moscas sírfidas</td><td>Pulgones</td></tr>
      </table>
      <p>Si fumigás con un insecticida fuerte, matás también a los aliados, y la plaga vuelve más rápido que ellos. Las flores variadas, como la caléndula, el hinojo o la lavanda, los atraen al jardín.</p>
      <p>Por ejemplo, el pulgón del rosal de ejemplo se controló con 2 chorros de agua y agua jabonosa. A la semana aparecieron larvas de vaquita y en 15 días casi no quedaba pulgón.</p>` },
    { titulo: "Productos químicos con cuidado", html: `
      <p class="idea">Un insecticida o un fungicida es un veneno. Si lo vas a usar, <strong>leé la etiqueta completa</strong>, protegete y guardalo lejos de chicos y mascotas. Muchas veces la mejor decisión es no usarlo.</p>
      <p>A estos productos se los llama <strong>agroquímicos</strong> o <strong>fitosanitarios</strong>. En Argentina los registra el <strong>SENASA</strong>, y cada envase tiene una <strong>banda de color</strong> abajo que dice qué tan tóxico es:</p>
      <table>
        <tr><th>Banda</th><th>Qué significa</th></tr>
        <tr><td>Roja</td><td>Muy peligroso o sumamente peligroso. No es para una casa.</td></tr>
        <tr><td>Amarilla</td><td>Moderadamente peligroso</td></tr>
        <tr><td>Azul</td><td>Poco peligroso</td></tr>
        <tr><td>Verde</td><td>Normalmente no ofrece peligro, usado como indica la etiqueta</td></tr>
      </table>
      <p>Para un jardín familiar, elegí siempre el de menor toxicidad que sirva para esa plaga y esa planta, y comprá solo productos con registro de SENASA.</p>
      <p><strong>La etiqueta dice</strong> para qué plaga y qué planta sirve, la dosis, cada cuánto repetir, qué protección usar y qué hacer en caso de intoxicación. Seguila al pie de la letra: más dosis no es más eficaz, es más riesgo.</p>
      <p><strong>Al aplicar:</strong></p>
      <ul>
        <li>Guantes de nitrilo, anteojos, barbijo, mangas y pantalón largos.</li>
        <li>Sin viento, sin lluvia prevista y sin sol fuerte. Chicos, mascotas y ropa tendida, adentro.</li>
        <li>No comas, ni tomes, ni fumes mientras aplicás.</li>
        <li>No apliques sobre flores abiertas: matás a las abejas.</li>
        <li>Al terminar, lavate las manos y la ropa aparte.</li>
      </ul>
      <p><strong>Al guardar:</strong> siempre en el envase original, cerrado, alto y bajo llave. <strong>Nunca</strong> lo pases a una botella de gaseosa o de agua: es una causa común de intoxicaciones en chicos. No reutilices los envases vacíos para nada.</p>
      <p><strong>Si alguien se intoxica</strong>, llamá al <strong>Centro Nacional de Intoxicaciones: 0800-333-0160</strong>, las 24 horas, con el envase en la mano. Este curso no reemplaza a un ingeniero agrónomo ni al médico.</p>
      <p>Por ejemplo, para el oídio del rosal de ejemplo primero se sacaron las hojas enfermas y se dejó de mojar las hojas. Como siguió, en el vivero recomendaron un fungicida de banda verde, que se aplicó con guantes y anteojos un atardecer sin viento.</p>` },
  ],
  practica: [
    "Revisá 5 plantas dando vuelta 3 hojas de cada una y anotá qué encontraste (plaga, enfermedad o nada) y en qué cara de la hoja.",
    "Prepará 1 litro de agua jabonosa, probala en 3 hojas y, si no se mancharon, aplicala sobre una planta con pulgón. Anotá cuánto pulgón había antes y a los 7 días.",
    "Buscá 3 insectos aliados en tu jardín, en una plaza o en fotos de INTA, y anotá qué plaga come cada uno.",
    "Leé la etiqueta de un producto del vivero o de tu casa y anotá su banda de color, la dosis y la protección que pide.",
  ],
  recursos: [
    { t: "Universidad de California (UC IPM): plagas del jardín y la casa (en inglés)", url: "https://ipm.ucanr.edu/home-and-landscape/" },
    { t: "Royal Horticultural Society: pulgones (en inglés)", url: "https://www.rhs.org.uk/biodiversity/aphids" },
    { t: "Universidad de California (UC IPM): cochinillas algodonosas (en inglés)", url: "https://ipm.ucanr.edu/home-and-landscape/mealybugs/" },
    { t: "INTA: microcurso \"Cuidado de las plantas ornamentales y sus enfermedades\" (PDF)", url: "https://formacion.inta.gob.ar/wp-content/uploads/2024/04/Cuidado-de-las-plantas-ornamentales-y-sus-enfermedades.pdf" },
    { t: "SENASA: Servicio Nacional de Sanidad y Calidad Agroalimentaria", url: "https://www.argentina.gob.ar/senasa" },
  ],
  quiz: [
    { q: "Tu rosal tiene bichitos verdes en los brotes y hojas pegajosas. ¿Qué es?", opciones: ["Oídio","Roya","Pulgón","Falta de riego"], correcta: 2, explicacion: "Bichitos en grupo y melaza pegajosa son pulgón. Oídio tienta porque también ataca rosales, pero es un polvillo blanco, no bichos." },
    { q: "Ves motas blancas como algodón en las axilas de las hojas. ¿Qué es?", opciones: ["Cochinilla algodonosa","Oídio","Mosca blanca","Arañuela"], correcta: 0, explicacion: "Las motas de algodón son cochinillas. El oídio tienta por el color blanco, pero es un polvillo plano, no motas." },
    { q: "Las hojas de tu planta tienen manchitas anaranjadas como óxido en el envés. ¿Qué es?", opciones: ["Pulgón","Exceso de sol","Hormigas","Roya, un hongo"], correcta: 3, explicacion: "Las manchas color óxido son roya. El exceso de sol tienta porque también mancha, pero no forma polvillo anaranjado abajo." },
    { q: "Ves hormigas subiendo y bajando de tu limonero. ¿Qué buscás?", opciones: ["Nada, es normal","Pulgón, cochinilla o mosca blanca: las hormigas buscan su melaza","Agua en las hojas","Flores nuevas"], correcta: 1, explicacion: "Las hormigas cuidan a las plagas que largan melaza. \"Es normal\" tienta, pero suelen avisar de otra plaga." },
    { q: "Si querés encontrar plagas a tiempo, ¿qué hacés?", opciones: ["Mirás solo de lejos una vez por año","Fumigás cada semana por las dudas","Revisás una vez por semana, dando vuelta algunas hojas","Esperás a que la planta se seque"], correcta: 2, explicacion: "Mirar seguido el envés te deja actuar cuando el problema es chico. Fumigar por las dudas tienta, pero mata a los aliados." },
    { q: "Tu planta tiene un poco de pulgón en dos brotes. ¿Qué hacés primero?", opciones: ["Lo sacás con un chorro de agua o con los dedos con guantes","Un insecticida de banda roja","Cortás la planta entera","Nada, nunca"], correcta: 0, explicacion: "Un problema chico se arregla a mano. El insecticida tienta por efectivo, pero es exagerado y mata a los aliados." },
    { q: "Para preparar agua jabonosa contra el pulgón, ¿qué usás?", opciones: ["Detergente con lavandina","Nafta diluida","Sal gruesa","Jabón blanco o potásico disuelto en agua"], correcta: 3, explicacion: "El jabón suave sirve contra el pulgón. El detergente con lavandina tienta porque \"limpia\", pero quema las hojas." },
    { q: "Sacaste hojas con oídio. ¿Dónde las tirás?", opciones: ["Al compost","A la basura, no al compost","Al pie de la misma planta","Las guardás para abono"], correcta: 1, explicacion: "En el compost casero el hongo puede sobrevivir. El compost tienta para aprovecharlas, pero devolvés la enfermedad al jardín." },
    { q: "Ves larvas de vaquita de San Antonio entre el pulgón. ¿Qué hacés?", opciones: ["Las matás porque son plaga","Fumigás todo enseguida","Las dejás trabajar: comen pulgones","Las sacás a mano"], correcta: 2, explicacion: "Las vaquitas son aliadas. Matarlas tienta porque las larvas parecen bichos raros, pero son las que controlan la plaga." },
    { q: "Vas a comprar un producto para el jardín de tu casa con chicos. ¿Qué banda de color evitás?", opciones: ["La roja","La verde","La azul","Ninguna, son todas iguales"], correcta: 0, explicacion: "La banda roja es muy peligrosa. \"Son todas iguales\" tienta, pero el color dice cuán tóxico es." },
    { q: "Te sobró insecticida. ¿Dónde lo guardás?", opciones: ["En una botella de gaseosa","En la heladera, junto a la comida","En el piso del lavadero, abierto","En su envase original, cerrado, alto y bajo llave"], correcta: 3, explicacion: "El envase original evita confusiones. La botella de gaseosa tienta por práctica, pero es una causa común de intoxicación en chicos." },
    { q: "Querés aplicar un producto en tu jardín. ¿Cuándo lo hacés?", opciones: ["Con viento, para que llegue más lejos","Sin viento y sin flores abiertas, con chicos y mascotas adentro","Sobre las flores, que es donde hay más bichos","Al mediodía de verano"], correcta: 1, explicacion: "Con viento el producto vuela hacia vos y tus vecinos. Aplicar en flores tienta, pero mata a las abejas." },
  ],
},
{
  id: "proyecto",
  icono: "📅",
  titulo: "Proyecto final: el plan de tu jardín",
  nivel: "Avanzado",
  objetivos: [
    "Armar el plano y la lista de plantas de un espacio real, con su luz y sus necesidades",
    "Hacer un calendario de cuidados para las 4 estaciones",
    "Presupuestar un trabajo de mantenimiento si querés ofrecerlo como servicio",
  ],
  lecciones: [
    { titulo: "El plano y las plantas", html: `
      <p class="idea">Todo plan empieza por un <strong>plano</strong> del espacio, con la luz de cada rincón y las plantas que hay o que querés poner.</p>
      <p>No hace falta saber dibujar. Usá una hoja cuadriculada: cada cuadrito es 50 cm.</p>
      <pre><code>Patio de ejemplo (6 x 4 m), norte arriba:

N  ┌──────────────────────────┐
   │ CANTERO (sol pleno)      │  rosal, lavandas, copetes
   │                          │
   │      PASTO (bermuda)     │  limonero en la esquina
   │                          │
   │ GALERÍA (media sombra)   │  potus, clivias, helechos
S  └──────────────────────────┘</code></pre>
      <p><strong>Al lado, una ficha por planta:</strong></p>
      <table>
        <tr><th>Planta</th><th>Tipo</th><th>Luz</th><th>Riego en verano</th><th>Poda</th></tr>
        <tr><td>Rosal</td><td>Arbusto caduco</td><td>Sol pleno</td><td>2 o 3 veces por semana</td><td>Agosto</td></tr>
        <tr><td>Lavanda</td><td>Perenne</td><td>Sol pleno</td><td>Poco</td><td>Después de florecer</td></tr>
        <tr><td>Clivia</td><td>Perenne de sombra</td><td>Media sombra</td><td>Con prueba del dedo</td><td>Solo limpieza</td></tr>
      </table>
      <p><strong>Antes de agregar plantas nuevas, preguntate:</strong></p>
      <ul>
        <li>¿Le va a dar la luz que pide? (módulo 1)</li>
        <li>¿Va a tener el espacio que ocupa de adulta? Un árbol chiquito en maceta puede llegar a 10 metros.</li>
        <li>¿Es tóxica y hay chicos o mascotas?</li>
        <li>¿Pide un riego parecido al de sus vecinas? Agrupar por riego ahorra agua (módulo 3).</li>
      </ul>
      <p><strong>Preferí plantas nativas</strong> o adaptadas a tu clima: necesitan menos agua y cuidados y atraen insectos aliados. Por ejemplo, la salvia guaranítica, la verbena y el ceibo son nativas de la zona del Río de la Plata.</p>
      <p>Por ejemplo, el plano del patio de ejemplo mostró que las clivias estaban al sol de la tarde y la lavanda en la galería: con solo cambiarlas de lugar, las dos mejoraron.</p>` },
    { titulo: "El calendario de las 4 estaciones", html: `
      <p class="idea">Un <strong>calendario de cuidados</strong> reparte las tareas en el año, para hacer cada cosa en su momento y no olvidarte de nada.</p>
      <p>Este es un calendario general para el centro del país. Ajustalo a tu zona: más al sur o en zonas altas las heladas duran más; en el norte, el calor llega antes. El INTA publica la información de heladas de cada región.</p>
      <table>
        <tr><th>Estación</th><th>Tareas principales</th></tr>
        <tr><td>Primavera (sep a nov)</td><td>Trasplantar, abonar, sembrar anuales de verano, hacer esquejes, airear el pasto, revisar plagas cada semana</td></tr>
        <tr><td>Verano (dic a feb)</td><td>Regar temprano y a fondo, cobertura, cortar el pasto seguido, sacar flores marchitas, podar arbustos que ya florecieron</td></tr>
        <tr><td>Otoño (mar a may)</td><td>Resiembra con ray grass, plantar bulbos de primavera, sembrar anuales de invierno, juntar hojas para el compost</td></tr>
        <tr><td>Invierno (jun a ago)</td><td>Regar poco, proteger de heladas las plantas sensibles, podar caducas y rosales, afilar y limpiar herramientas</td></tr>
      </table>
      <p><strong>Proteger de las heladas</strong> es tapar de noche las plantas sensibles con tela antihelada o una tela liviana (no nylon tocando las hojas), y entrar o arrimar a una pared las macetas delicadas.</p>
      <pre><code>Mi calendario (formato simple):
Mes        | Tarea                         | Hecho
Septiembre | Trasplantar potus             | [ ]
Septiembre | 2 cm de compost en el cantero | [ ]
Octubre    | Revisar pulgón del rosal      | [ ]
...</code></pre>
      <p>Pegalo en la heladera o cargalo como recordatorio en el celular, una alarma por mes.</p>
      <p>Por ejemplo, en el calendario del patio de ejemplo, agosto tiene 3 tareas: podar el rosal, sacar sus chupones y dividir el agapanto. Abril tiene 2: resiembra del pasto y plantar las fresias.</p>` },
    { titulo: "Si querés ofrecerlo como trabajo", html: `
      <p class="idea">El mantenimiento de jardines es un trabajo con mucha demanda. Para ofrecerlo, tenés que saber <strong>qué hacés, cuánto tardás y cuánto cobrás</strong>, y presupuestar por escrito.</p>
      <p><strong>Qué podés ofrecer con lo que aprendiste:</strong> corte de pasto y bordes, limpieza de canteros, poda de arbustos y rosales, trasplantes, armado de macetas y control suave de plagas. <strong>Qué no:</strong> poda de árboles grandes en altura, trabajos cerca de cables eléctricos o aplicaciones de productos de banda roja. Para eso hace falta formación, equipo y seguros que este curso no da.</p>
      <p>Un <strong>presupuesto</strong> es el detalle escrito del trabajo y su precio, que el cliente aprueba antes de empezar.</p>
      <pre><code>Presupuesto de ejemplo (los precios son inventados:
averiguá cuánto se cobra en tu zona)

Mantenimiento mensual, patio de 6 x 4 m
  2 visitas por mes, 2 horas cada una
  Mano de obra: 4 horas x $10.000      = $40.000
  Traslado: 2 viajes x $3.000          =  $6.000
  Materiales (abono, hilo de bordeadora) = $5.000
  Total por mes                        = $51.000

Incluye: corte de pasto y bordes, limpieza de canteros,
riego de macetas, revisión de plagas.
No incluye: plantas nuevas ni poda de árboles.
Validez: 15 días.</code></pre>
      <p><strong>Para calcular las horas</strong>, medí cuánto tardás vos en tu propio patio y sumá un margen para imprevistos.</p>
      <p><strong>Antes de empezar en lo de un cliente:</strong> preguntá si hay chicos o mascotas, dónde está la canilla y el enchufe con disyuntor, y si hay plantas que no quiere que toques. Llevá tu equipo de protección.</p>
      <p>Si lo hacés seguido, averiguá cómo facturar: el curso "Monotributo, facturación e impuestos para independientes" de este sitio explica el monotributo.</p>
      <p><strong>El proyecto final</strong> de este curso es armar el plan completo de un espacio real, el tuyo o el de alguien que conozcas. Lo evaluás con la rúbrica de las prácticas.</p>
      <p>Por ejemplo, con el plan del patio de ejemplo en la mano, el presupuesto salió en 10 minutos, porque ya sabías qué tareas hay en cada mes y cuánto tarda cada una.</p>` },
  ],
  practica: [
    "Dibujá el plano de un espacio real en hoja cuadriculada (cada cuadrito, 50 cm), con el norte marcado y la luz de cada zona.",
    "Armá la ficha de al menos 6 plantas de ese espacio con tipo, luz, riego en verano y época de poda.",
    "Hacé el calendario de las 4 estaciones con al menos 2 tareas por estación y cargá 4 recordatorios en el celular.",
    "Rúbrica del proyecto (sumá 1 punto por cada uno; está listo con 7 de 8): plano con norte y luz · 6 fichas completas · ninguna planta en un lugar con luz equivocada · plantas tóxicas marcadas · calendario con las 4 estaciones · tareas de riego, poda, abono y plagas · un presupuesto de prueba con horas medidas · una foto de antes y otra a los 2 meses.",
  ],
  recursos: [
    { t: "Royal Horticultural Society: diseño del jardín (en inglés)", url: "https://www.rhs.org.uk/garden-design" },
    { t: "Royal Horticultural Society: tareas del jardín mes a mes (en inglés; hemisferio norte, corré 6 meses)", url: "https://www.rhs.org.uk/garden-jobs" },
    { t: "FAUBA, Escuela de Floricultura y Jardinería: programa \"Cómo cuidar tus plantas\" (PDF)", url: "https://agro.uba.ar/sites/default/files/documentos/floryjar/segundo-paso-jardineria.pdf" },
  ],
  quiz: [
    { q: "Vas a armar el plano de tu patio. ¿Qué no puede faltar?", opciones: ["El color de las paredes","El precio de cada planta","El norte marcado y la luz de cada zona","La marca de la manguera"], correcta: 2, explicacion: "El norte y la luz deciden qué planta va en cada lugar. El precio tienta porque importa, pero no dice dónde ponerla." },
    { q: "En tu plano, la lavanda quedó en la galería de media sombra. ¿Qué hacés?", opciones: ["La cambiás al lugar de sol pleno","La regás más","Le ponés más abono","La dejás donde está"], correcta: 0, explicacion: "La lavanda pide sol pleno. Regar más tienta, pero no le da la luz que le falta." },
    { q: "Querés plantar en una maceta del patio un árbol que de adulto mide 10 metros. ¿Qué tenés en cuenta?", opciones: ["Solo cómo se ve hoy","El color de la maceta","Nada: se queda chico","El espacio que va a ocupar de adulto"], correcta: 3, explicacion: "Las plantas crecen. Mirar solo cómo es hoy tienta porque es lo que ves en el vivero, pero en pocos años no entra." },
    { q: "Si querés gastar menos agua, ¿cómo ubicás las plantas?", opciones: ["Mezcladas al azar","Agrupadas según cuánto riego piden","Las de más riego al sol más fuerte, separadas","Todas en una maceta"], correcta: 1, explicacion: "Agruparlas por riego evita regar de más a unas para darles a otras. El azar tienta por lindo, pero desperdicia agua." },
    { q: "Si elegís plantas nativas de tu zona, ¿qué ganás?", opciones: ["Que nunca necesitan nada","Que florecen todo el año sí o sí","Menos agua y cuidados, y más insectos aliados","Que no se pueden podar"], correcta: 2, explicacion: "Las nativas están adaptadas al clima. \"Nunca necesitan nada\" tienta, pero igual piden algún cuidado." },
    { q: "Es abril en el centro del país. ¿Qué tarea va en tu calendario?", opciones: ["Resiembra con ray grass y plantar bulbos de primavera","Podar el rosal fuerte","Sembrar copetes","Regar todos los días el cantero"], correcta: 0, explicacion: "Otoño es para resiembra y bulbos. Podar el rosal tienta porque es una tarea grande, pero va en agosto." },
    { q: "Anuncian helada para esta noche. ¿Qué hacés con una planta sensible del cantero?", opciones: ["La regás con agua fría a la noche","La tapás con nylon pegado a las hojas","La podás fuerte","La tapás con tela antihelada o una tela liviana"], correcta: 3, explicacion: "La tela la protege sin quemarla. El nylon tienta porque tapa bien, pero donde toca las hojas, se hielan." },
    { q: "Tu calendario dice \"agosto: podar el rosal\". Vivís en una zona con heladas hasta octubre. ¿Qué hacés?", opciones: ["Lo podás igual el 1 de agosto","Lo corrés unas semanas, pasadas las heladas fuertes","No lo podás nunca","Lo podás en enero"], correcta: 1, explicacion: "El calendario es para el centro del país y se ajusta a tu zona. Seguirlo al pie de la letra tienta, pero el brote nuevo se quema con la helada." },
    { q: "Un cliente te pide podar un árbol de 12 metros junto a los cables. ¿Qué hacés?", opciones: ["Lo hacés con una escalera común","Lo hacés si te paga el doble","No lo tomás: es para profesionales con equipo y seguro","Cortás solo las ramas que tocan los cables"], correcta: 2, explicacion: "Altura y cables son un riesgo serio. Cobrar el doble tienta, pero no cambia el peligro." },
    { q: "Vas a presupuestar un mantenimiento. ¿Cómo calculás las horas?", opciones: ["Midiendo cuánto tardás de verdad y sumando un margen","Adivinando por la cara del cliente","Siempre 1 hora, sea lo que sea","Copiando el precio de otro sin mirar el trabajo"], correcta: 0, explicacion: "Medir te da un número real. Copiar el precio de otro tienta por rápido, pero no dice cuánto tardás vos." },
    { q: "Tu presupuesto dice \"No incluye: plantas nuevas\". ¿Para qué sirve esa línea?", opciones: ["Para cobrar más después sin avisar","No sirve: se puede borrar","Para que el presupuesto sea más largo","Para que el cliente sepa qué paga y qué no, y evitar malentendidos"], correcta: 3, explicacion: "Decir qué no incluye evita discusiones. \"No sirve\" tienta para simplificar, pero después aparecen los reclamos." },
    { q: "Llegás a lo de un cliente nuevo para cortar el pasto. ¿Qué preguntás antes de empezar?", opciones: ["Nada, empezás enseguida","Si hay chicos o mascotas, dónde están la canilla y el enchufe, y qué plantas no tocar","Solo cuánto te va a pagar","Si le gusta tu ropa"], correcta: 1, explicacion: "Esas preguntas evitan accidentes y errores. Empezar enseguida tienta para ganar tiempo, pero podés cortar algo que no debías." },
  ],
},
];
