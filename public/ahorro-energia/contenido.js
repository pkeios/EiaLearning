// Temario del curso "Ahorrar luz, gas y agua en casa". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ahorro-energia y node tools/metodologia.js ahorro-energia
window.TEMARIO = [
{
  id: "factura",
  icono: "🧾",
  titulo: "Entender la boleta",
  nivel: "Básico",
  objetivos: [
    "Encontrar en la boleta de luz el consumo en kWh, el período y el total",
    "Leer la boleta de gas en metros cúbicos y comparar con el mismo mes del año anterior",
    "Leer el medidor para controlar el consumo antes de que llegue la boleta",
  ],
  lecciones: [
    { titulo: "La boleta de luz", video: {"id":"ia8weaGpZ5k","t":"Cómo leer e interpretar la factura de luz · ERSeP, Ente Regulador de los Servicios Públicos de Córdoba (1:28)"}, html: `<p>En todo el curso acompañamos a <strong>Mabel</strong>, que vive en Paraná con sus dos hijos adolescentes. Las boletas de luz y gas subieron mucho y quiere bajarlas sin pasar frío ni calor. Va a medir antes y después de cada cambio.</p>
      <p class="idea">Para ahorrar, primero hay que saber <strong>cuánto gastás</strong>. La boleta de luz dice cuántos <strong>kWh</strong> usaste en un período y cuánto te cobran por eso.</p>
      <p>El <strong>kWh</strong> (kilovatio hora) es la unidad en la que se mide la electricidad que usás. Un aparato de 1.000 vatios prendido 1 hora gasta 1 kWh.</p>
      <table>
        <tr><th>Parte de la boleta</th><th>Qué dice</th></tr>
        <tr><td>Período</td><td>Desde qué día hasta qué día se midió (suele ser 1 o 2 meses)</td></tr>
        <tr><td>Lectura anterior y actual</td><td>Los números del medidor al principio y al final</td></tr>
        <tr><td>Consumo</td><td>Lectura actual menos anterior: los kWh que usaste</td></tr>
        <tr><td>Cargo fijo</td><td>Lo que pagás aunque no uses nada</td></tr>
        <tr><td>Cargo variable</td><td>kWh usados por el precio de cada kWh</td></tr>
        <tr><td>Impuestos y tasas</td><td>Nacionales, provinciales y municipales</td></tr>
        <tr><td>Gráfico de consumos</td><td>Barras con tus últimos meses, para comparar</td></tr>
      </table>
      <pre><code>Boleta de Mabel (ejemplo)
Período: 01/06 al 31/07 (61 días)
Lectura actual 18.540 − lectura anterior 18.020 = 520 kWh
Consumo por día: 520 ÷ 61 = 8,5 kWh</code></pre>
      <p><strong>Compará por día, no por boleta:</strong> los períodos no siempre tienen la misma cantidad de días. Dividir el consumo por los días te deja comparar bien.</p>
      <p>Por ejemplo, Mabel creía que su consumo había subido mucho. Al dividir por los días vio que la boleta nueva tenía 61 días y la anterior 58: el consumo por día casi no había cambiado; lo que subió fue el precio.</p>` },
    { titulo: "La boleta de gas", html: `
      <p class="idea">El gas natural de red se mide en <strong>metros cúbicos</strong> (m³). La boleta de gas se lee igual que la de luz: período, lecturas, consumo, cargos e impuestos.</p>
      <p>Un <strong>metro cúbico</strong> es el volumen de una caja de 1 metro de cada lado. Es la unidad con la que el medidor cuenta el gas que pasa.</p>
      <table>
        <tr><th>Mes del año</th><th>Qué pasa con el gas</th></tr>
        <tr><td>Invierno</td><td>Sube mucho: calefacción y agua más fría para calentar</td></tr>
        <tr><td>Verano</td><td>Baja: queda el agua caliente y la cocina</td></tr>
      </table>
      <pre><code>Gas de Mabel (m³ por boleta)
Invierno del año pasado:  310 m³
Invierno de este año:     265 m³
Ahorro: 310 − 265 = 45 m³
45 ÷ 310 = 0,145 → bajó un 14,5%</code></pre>
      <p><strong>Compará con el mismo período del año anterior,</strong> no con el mes de antes: en gas, el invierno y el verano son muy distintos. Muchas boletas traen el gráfico de los últimos 12 meses.</p>
      <p><strong>Si usás garrafa:</strong> anotá cada cuántos días la cambiás. Es tu forma de medir el consumo.</p>
      <p><strong>Ayuda del Estado:</strong> según tus ingresos, podrías tener un subsidio en la luz o el gas. Las reglas cambian; consultá en la página oficial de subsidios si te corresponde.</p>
      <p><strong>Para reclamos</strong> por una boleta mal hecha, primero reclamá a la empresa por escrito y guardá el número de reclamo. El curso <strong>Comprar mejor</strong> de este sitio explica tus derechos.</p>
      <p>Por ejemplo, Mabel guardó las boletas de gas del año pasado en una carpeta. Así pudo comparar invierno con invierno y ver que sus cambios funcionaban.</p>` },
    { titulo: "Leer el medidor", html: `
      <p class="idea">El <strong>medidor</strong> cuenta lo que consumís todo el tiempo. Si lo leés vos, sabés cuánto gastás <strong>sin esperar la boleta</strong> y podés ver el efecto de cada cambio en días.</p>
      <pre><code>Cómo medir una semana
Lunes 8:00     medidor de luz: 18.540
Lunes 8:00     (7 días después)    18.596
Consumo: 18.596 − 18.540 = 56 kWh en 7 días
Por día: 56 ÷ 7 = 8 kWh</code></pre>
      <table>
        <tr><th>Medidor</th><th>Qué número mirar</th></tr>
        <tr><td>Luz digital</td><td>El que dice kWh (algunos van pasando varias pantallas)</td></tr>
        <tr><td>Luz a disco</td><td>Los números de la ventanita, sin los decimales</td></tr>
        <tr><td>Gas</td><td>Los números negros (m³); los rojos son decimales</td></tr>
        <tr><td>Agua (si tenés)</td><td>Los números negros (m³); muchas casas no tienen medidor de agua</td></tr>
      </table>
      <p><strong>Seguridad:</strong> solo mirá, nunca toques cables, conexiones ni el gabinete abierto. Si el medidor está dentro de un gabinete con llave o en la vereda, mirá a través del vidrio. Si ves algo roto o quemado, avisá a la empresa.</p>
      <p><strong>Siempre a la misma hora</strong> y el mismo día de la semana, así comparás bien.</p>
      <p>Por ejemplo, Mabel leyó el medidor de luz dos lunes seguidos: 8 kWh por día. Después de cambiar unas costumbres volvió a medir y le dio 6,5 kWh por día, sin esperar la boleta.</p>` },
  ],
  practica: [
    "Buscá tu última boleta de luz y anotá el período, el consumo en kWh, los días y el consumo por día.",
    "Compará tu última boleta de gas con la del mismo período del año pasado y anotá cuántos m³ subió o bajó.",
    "Leé el medidor de luz dos veces con 7 días de diferencia y anotá tu consumo por día.",
  ],
  recursos: [
    { t: "ENRE: consejos para el uso eficiente de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/consejos" },
    { t: "Argentina.gob.ar: subsidios a la energía (quién puede pedirlos)", url: "https://www.argentina.gob.ar/subsidios" },
    { t: "Curso de este sitio: Comprar mejor, derechos del consumidor", url: "https://pkeios.github.io/EiaLearning/consumo/" },
  ],
  quiz: [
    { q: "Tu boleta dice \"Consumo: 520 kWh\". ¿Qué es un kWh?", opciones: ["El precio de la luz","La potencia del medidor","La unidad en la que se mide la electricidad que usaste","Un impuesto"], correcta: 2, explicacion: "Es la energía usada. \"El precio\" tienta porque está en la boleta, pero el precio es aparte." },
    { q: "La lectura anterior es 18.020 y la actual 18.540. ¿Cuánto consumiste?", opciones: ["520 kWh","36.560 kWh","18.540 kWh","18.020 kWh"], correcta: 0, explicacion: "Actual menos anterior. 18.540 tienta porque es el número grande, pero es la lectura del medidor, no el consumo." },
    { q: "Si una boleta tiene 61 días y la anterior 58, ¿cómo comparás?", opciones: ["Comparo los totales directo","No se puede comparar","Comparo solo el precio","Divido el consumo por los días de cada una"], correcta: 3, explicacion: "Por día comparás bien. Los totales tientan, pero un período más largo siempre da más." },
    { q: "No usaste nada de luz un mes porque estuviste de viaje. ¿Qué pagás igual?", opciones: ["Nada","El cargo fijo y los impuestos","Lo mismo que siempre","Solo el cargo variable"], correcta: 1, explicacion: "El cargo fijo se paga igual. \"Nada\" tienta, pero la boleta llega con ese cargo." },
    { q: "¿En qué unidad se mide el gas natural de red?", opciones: ["En kWh","En litros","En metros cúbicos (m³)","En kilos"], correcta: 2, explicacion: "Es un volumen. Kilos tienta por la garrafa, que se vende por peso." },
    { q: "Querés saber si ahorraste gas este invierno. ¿Con qué comparás?", opciones: ["Con el invierno del año pasado","Con el verano","Con el mes anterior","Con la boleta de luz"], correcta: 0, explicacion: "Mismo período del año anterior. El mes anterior tienta, pero si era otoño, el invierno siempre da más." },
    { q: "Si pasaste de 310 m³ a 265 m³, ¿cuánto bajó, más o menos?", opciones: ["Un 45%","Un 31%","Un 85%","Un 14,5%"], correcta: 3, explicacion: "45 ÷ 310 = 0,145. 45% tienta porque bajó 45 m³, pero eso no es el porcentaje." },
    { q: "Usás garrafa y no tenés boleta de gas. ¿Cómo medís?", opciones: ["No se puede medir","Anoto cada cuántos días la cambio","Pesando la cocina","Con el medidor de luz"], correcta: 1, explicacion: "Si dura más días, gastás menos. \"No se puede\" tienta, pero sí se puede." },
    { q: "Te llega una boleta con un error. ¿Qué hacés primero?", opciones: ["No la pago y no digo nada","La rompo","Reclamo a la empresa por escrito y guardo el número de reclamo","Espero a la próxima"], correcta: 2, explicacion: "El reclamo escrito te protege. No pagar sin reclamar tienta, pero te pueden cortar el servicio." },
    { q: "El medidor marcaba 18.540 y una semana después 18.596. ¿Cuánto gastás por día?", opciones: ["8 kWh","56 kWh","18.596 kWh","7 kWh"], correcta: 0, explicacion: "56 kWh ÷ 7 días = 8. 56 tienta, pero es la semana entera." },
    { q: "Si en el medidor de gas hay números negros y rojos, ¿cuáles anotás?", opciones: ["Solo los rojos","Todos juntos sin coma","Ninguno","Los negros: los rojos son decimales"], correcta: 3, explicacion: "Los negros son los m³ enteros. \"Todos juntos\" tienta, pero así el número queda mil veces más grande." },
    { q: "El gabinete del medidor está abierto y ves un cable quemado. ¿Qué hacés?", opciones: ["Lo arreglo con cinta","No toco nada y aviso a la empresa","Lo toco para ver si está caliente","Lo ignoro"], correcta: 1, explicacion: "Solo se mira. Arreglarlo con cinta tienta, pero es peligroso y lo hace la empresa o un matriculado." },
  ],
},
{
  id: "luz",
  icono: "💡",
  titulo: "Cuánto gasta cada aparato",
  nivel: "Básico",
  objetivos: [
    "Calcular los kWh de un aparato con su potencia y sus horas de uso",
    "Encontrar los aparatos que más gastan en tu casa",
    "Reducir el consumo en espera y usar la electricidad de forma segura",
  ],
  lecciones: [
    { titulo: "La cuenta de los kWh", video: {"id":"nca2Lt-BS3U","t":"¿Cómo calcular el consumo de energía de mis artefactos eléctricos? · Coopeguanacaste (2:26)"}, html: `
      <p class="idea">Cada aparato tiene una <strong>potencia</strong> en vatios (W). Si la multiplicás por las horas que está prendido, sabés cuánto gasta.</p>
      <pre><code>kWh = vatios × horas ÷ 1.000

Ejemplo: una estufa eléctrica de 2.000 W, 4 horas por día, 30 días
2.000 × 4 × 30 ÷ 1.000 = 240 kWh por mes

Una lamparita LED de 9 W, 5 horas por día, 30 días
9 × 5 × 30 ÷ 1.000 = 1,35 kWh por mes</code></pre>
      <p>La <strong>potencia</strong> es cuánta electricidad usa un aparato por cada momento que está prendido. Se mide en <strong>vatios (W)</strong> y viene en una etiqueta en el aparato, en la caja o en el manual.</p>
      <table>
        <tr><th>Dónde encontrar los vatios</th><th>Cómo dice</th></tr>
        <tr><td>Etiqueta o chapita del aparato</td><td>"Potencia: 2.000 W" o "2 kW"</td></tr>
        <tr><td>Caja o manual</td><td>"Consumo" o "Potencia nominal"</td></tr>
        <tr><td>Página del ENRE</td><td>Una lista con el consumo aproximado de cada electrodoméstico</td></tr>
      </table>
      <p><strong>Para pasar a plata:</strong> multiplicá los kWh por el precio de cada kWh que dice tu boleta (cargo variable). Si el kWh te sale $150 (precio de ejemplo), la estufa del cálculo cuesta 240 × 150 = $36.000 por mes.</p>
      <p><strong>Ojo con la heladera:</strong> el motor se prende y se apaga solo, así que no gasta su potencia las 24 horas. Para heladeras conviene mirar la etiqueta de eficiencia, que dice el consumo por año.</p>
      <p>Por ejemplo, Mabel calculó la estufa eléctrica del cuarto de su hijo: 240 kWh por mes, casi la mitad de su boleta. Ese fue el primer aparato a cambiar.</p>` },
    { titulo: "Los que más gastan", html: `
      <p class="idea">En casi todas las casas, unos pocos aparatos son la mayor parte de la boleta: <strong>los que generan calor o frío</strong>. Ahí está el ahorro grande.</p>
      <table>
        <tr><th>Aparato</th><th>Potencia aproximada</th><th>Por qué gasta</th></tr>
        <tr><td>Estufa eléctrica o caloventor</td><td>1.000 a 2.000 W</td><td>Hacer calor con electricidad gasta mucho</td></tr>
        <tr><td>Aire acondicionado</td><td>1.000 a 2.500 W</td><td>Muchas horas en verano</td></tr>
        <tr><td>Termotanque eléctrico</td><td>1.500 a 2.000 W</td><td>Calienta agua todo el día</td></tr>
        <tr><td>Horno eléctrico</td><td>1.500 a 2.500 W</td><td>Calor fuerte</td></tr>
        <tr><td>Plancha</td><td>1.000 a 1.500 W</td><td>Calor fuerte</td></tr>
        <tr><td>Pava eléctrica</td><td>1.500 a 2.000 W</td><td>Mucha potencia, pero pocos minutos</td></tr>
        <tr><td>Heladera</td><td>100 a 200 W</td><td>Poca potencia, pero las 24 horas</td></tr>
        <tr><td>Televisor LED</td><td>50 a 150 W</td><td>Muchas horas</td></tr>
        <tr><td>Lamparita LED</td><td>5 a 15 W</td><td>Muy poco</td></tr>
      </table>
      <p>Los valores son aproximados y cambian según el modelo. Mirá la etiqueta de tus aparatos.</p>
      <p><strong>Lo que importa es potencia por horas:</strong> la pava tiene mucha potencia, pero se usa 5 minutos; la heladera tiene poca pero está siempre. Por eso hay que hacer la cuenta.</p>
      <p><strong>Pava:</strong> calentá solo el agua que vas a usar. Llenarla entera para un mate es gastar el triple.</p>
      <p>Por ejemplo, Mabel hizo la lista de los 10 aparatos de su casa con sus horas de uso. La estufa eléctrica, el aire acondicionado y la plancha sumaban más del 60% del total.</p>` },
    { titulo: "El consumo en espera y la seguridad", html: `
      <p class="idea">Muchos aparatos siguen gastando aunque estén "apagados" con el control remoto. Es el <strong>consumo en espera</strong>. Y usar la electricidad bien también es cuidarte.</p>
      <p>El <strong>consumo en espera</strong> (o stand-by) es lo que gasta un aparato enchufado que no estás usando: la lucecita del televisor, el cargador sin celular, el reloj del microondas.</p>
      <table>
        <tr><th>Aparato en espera</th><th>Qué hacer</th></tr>
        <tr><td>Televisor, decodificador, equipo de música</td><td>Una zapatilla con interruptor y apagarla a la noche</td></tr>
        <tr><td>Cargadores</td><td>Desenchufarlos cuando terminan</td></tr>
        <tr><td>Computadora</td><td>Apagarla del todo si no la usás por horas</td></tr>
        <tr><td>Heladera, alarma, router</td><td>Estos quedan enchufados</td></tr>
      </table>
      <p><strong>Seguridad eléctrica en casa:</strong></p>
      <ul>
        <li>No conectes muchos aparatos de mucha potencia en una misma zapatilla o "triple".</li>
        <li>Cables pelados, enchufes que calientan o huelen a quemado: desconectá y hacé revisar.</li>
        <li>No toques aparatos eléctricos con las manos mojadas o descalzo en piso mojado.</li>
        <li>La casa tiene que tener disyuntor (corta la luz si hay una fuga a tierra). Si salta seguido, algo anda mal.</li>
        <li>La instalación eléctrica la hace o la revisa un <strong>electricista matriculado</strong>; no la hagas vos.</li>
      </ul>
      <p>Un <strong>disyuntor</strong> es un aparato del tablero que corta la luz en una fracción de segundo si detecta una fuga de corriente, por ejemplo si alguien recibe una descarga.</p>
      <p>Por ejemplo, Mabel puso una zapatilla con interruptor en el televisor y el decodificador. Cada noche la apaga con un botón y se ahorra lo que gastaban las lucecitas toda la noche.</p>` },
  ],
  practica: [
    "Calculá los kWh por mes de 3 aparatos de tu casa con la fórmula y anotá cuál gasta más.",
    "Hacé la lista de tus 10 aparatos con potencia y horas de uso y anotá los 3 que más gastan.",
    "Contá cuántos aparatos quedan en espera a la noche en tu casa y anotá cuáles vas a desenchufar.",
    "Revisá las zapatillas de tu casa y anotá si alguna tiene más de 2 aparatos de mucha potencia.",
  ],
  recursos: [
    { t: "ENRE: calculá el consumo eléctrico de tu hogar en kWh", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/calcula-tu-consumo-electrico-hogar-kwh" },
    { t: "ENRE: consumo básico de los electrodomésticos", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/consumo-basico-electrodomesticos" },
    { t: "ENRE: consejos para el uso eficiente de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/consejos" },
  ],
  quiz: [
    { q: "Una estufa de 2.000 W está prendida 4 horas por día durante 30 días. ¿Cuántos kWh gasta?", opciones: ["8.000 kWh","24 kWh","240 kWh","2.400 kWh"], correcta: 2, explicacion: "2.000 × 4 × 30 ÷ 1.000 = 240. 2.400 tienta si te equivocás en un cero." },
    { q: "Si una lamparita LED de 9 W, 5 horas por día, 30 días, ¿cuánto gasta?", opciones: ["1,35 kWh","1.350 kWh","45 kWh","135 kWh"], correcta: 0, explicacion: "9 × 5 × 30 ÷ 1.000. 1.350 tienta si te olvidás de dividir por mil." },
    { q: "¿Dónde encontrás los vatios de un aparato?", opciones: ["En la boleta de luz","En el medidor","En el enchufe","En la etiqueta del aparato, la caja o el manual"], correcta: 3, explicacion: "Cada aparato lo dice. La boleta tienta, pero muestra el total de la casa." },
    { q: "Si la estufa gasta 240 kWh y el kWh te sale $150, ¿cuánto cuesta por mes?", opciones: ["$390","$36.000","$3.600","$360.000"], correcta: 1, explicacion: "240 × 150. $3.600 tienta si te comés un cero." },
    { q: "¿Por qué no se calcula la heladera con su potencia por 24 horas?", opciones: ["Porque no gasta nada","Porque gasta más","Porque el motor se prende y se apaga solo","Porque es a gas"], correcta: 2, explicacion: "No funciona todo el tiempo. \"No gasta nada\" tienta, pero gasta y bastante en el año." },
    { q: "Querés bajar mucho la boleta de luz. ¿Por dónde empezás?", opciones: ["Por los aparatos que generan calor o frío","Por las lamparitas LED","Por los cargadores","Por la radio"], correcta: 0, explicacion: "Ahí está el ahorro grande. Las LED tientan porque son fáciles, pero gastan muy poco." },
    { q: "La pava eléctrica tiene mucha potencia. ¿Por qué no es siempre la que más gasta?", opciones: ["Porque es chica","Porque usa agua","Porque es nueva","Porque se usa pocos minutos"], correcta: 3, explicacion: "Potencia por horas. \"Es chica\" tienta, pero tiene mucha potencia." },
    { q: "Querés tomar un mate. ¿Cuánta agua calentás?", opciones: ["La pava llena siempre","Solo la que voy a usar","El doble por las dudas","Hiervo y dejo enfriar"], correcta: 1, explicacion: "Calentar de más es gastar de más. La pava llena tienta para tener para después, pero se enfría." },
    { q: "Si el televisor tiene la lucecita roja prendida toda la noche, ¿qué es eso?", opciones: ["Que está roto","Que no gasta nada","Consumo en espera","Que se está cargando"], correcta: 2, explicacion: "Sigue gastando aunque no lo uses. \"No gasta nada\" tienta porque la pantalla está negra." },
    { q: "Querés cortar el consumo en espera del televisor y el decodificador fácil. ¿Qué usás?", opciones: ["Una zapatilla con interruptor","Desenchufar la heladera","Cortar el disyuntor","Nada"], correcta: 0, explicacion: "Un botón apaga todo. Cortar el disyuntor tienta, pero apaga también la heladera." },
    { q: "Un enchufe calienta y huele a quemado. ¿Qué hacés?", opciones: ["Sigo usándolo","Le pongo cinta","Lo arreglo yo","Desconecto y llamo a un electricista matriculado"], correcta: 3, explicacion: "Puede haber un incendio. Arreglarlo vos tienta para ahorrar, pero la instalación la toca un matriculado." },
    { q: "Si el disyuntor salta seguido, ¿qué significa?", opciones: ["Que anda perfecto","Que algo anda mal y hay que revisarlo","Que hay que sacarlo","Que gastás poco"], correcta: 1, explicacion: "Es un aviso. Sacarlo tienta para que no corte, pero te deja sin protección." },
  ],
},
{
  id: "electrodomesticos",
  icono: "🧊",
  titulo: "Elegir y usar tus aparatos",
  nivel: "Intermedio",
  objetivos: [
    "Leer la etiqueta de eficiencia energética antes de comprar",
    "Usar la heladera y el lavarropas para que gasten menos",
    "Elegir la iluminación y comparar el costo de uso, no solo el precio",
  ],
  lecciones: [
    { titulo: "La etiqueta de eficiencia energética", video: {"id":"FIE35sXm8GY","t":"La etiqueta de eficiencia energética explica la escala de los equipos · Ministerio de Energía y Minas del Perú (3:04)"}, html: `
      <p class="idea">La <strong>etiqueta de eficiencia energética</strong> es un adhesivo con letras de la <strong>A (verde, la que menos gasta)</strong> a la <strong>G (roja, la que más gasta)</strong>. En Argentina es obligatoria en muchos electrodomésticos.</p>
      <table>
        <tr><th>Aparato</th><th>Etiqueta en Argentina</th></tr>
        <tr><td>Heladeras y freezers</td><td>Obligatoria; no se pueden vender por debajo de B</td></tr>
        <tr><td>Lavarropas</td><td>Obligatoria; mínimo B</td></tr>
        <tr><td>Aire acondicionado</td><td>Obligatoria; mínimo A</td></tr>
        <tr><td>Calefones, termotanques, estufas, televisores, microondas, hornos eléctricos</td><td>Obligatoria, sin mínimo</td></tr>
        <tr><td>Lamparitas incandescentes</td><td>Prohibidas de vender por ley</td></tr>
      </table>
      <pre><code>Qué mirar en la etiqueta
1. La letra: cuanto más cerca de la A, menos gasta.
2. El consumo por año (kWh/año en los eléctricos).
3. Otros datos según el aparato: litros de la heladera,
   kilos de ropa del lavarropas, frío y calor del aire.</code></pre>
      <p>La <strong>eficiencia energética</strong> es hacer lo mismo (enfriar, lavar, iluminar) gastando menos energía.</p>
      <p><strong>Algunas etiquetas de otros países usan A+, A++ y A+++.</strong> Fijate siempre en la etiqueta argentina del producto que comprás.</p>
      <p>Por ejemplo, Mabel tenía que cambiar la heladera. Comparó dos del mismo tamaño en el negocio: una A y una B. La A decía en la etiqueta unos 100 kWh menos por año.</p>` },
    { titulo: "Heladera y lavarropas", html: `
      <p class="idea">La heladera está prendida todo el año y el lavarropas puede gastar mucho si calienta el agua. Con unas pocas costumbres gastan bastante menos.</p>
      <table>
        <tr><th>Heladera</th><th>Por qué</th></tr>
        <tr><td>Al menos a 15 cm de paredes, muebles y fuentes de calor</td><td>Necesita aire para largar el calor de atrás (lo recomienda el ENRE)</td></tr>
        <tr><td>Lejos del sol, el horno y la cocina</td><td>Si le llega calor, trabaja más</td></tr>
        <tr><td>Abrirla poco y cerrarla rápido</td><td>Cada vez que abrís entra aire caliente</td></tr>
        <tr><td>No meter comida caliente</td><td>Dejala entibiar unos minutos antes</td></tr>
        <tr><td>Revisar el burlete de la puerta</td><td>Si una hoja de papel se sale fácil al cerrar, cierra mal</td></tr>
        <tr><td>Descongelar si se forma mucha escarcha</td><td>El hielo aísla y la hace trabajar más</td></tr>
      </table>
      <table>
        <tr><th>Lavarropas</th><th>Por qué</th></tr>
        <tr><td>Lavar con agua fría</td><td>Según el ENRE, con agua caliente gasta un 80% más de energía</td></tr>
        <tr><td>Carga completa</td><td>Un lavado lleno en vez de dos a medias</td></tr>
        <tr><td>Secar al aire cuando se pueda</td><td>El secarropas con calor gasta mucho</td></tr>
      </table>
      <p>Un <strong>burlete</strong> es una tira de goma o plástico que cierra el espacio entre una puerta y su marco.</p>
      <p><strong>Prueba del papel:</strong> cerrá la puerta de la heladera sobre una hoja. Si sale sin hacer fuerza, el burlete no cierra bien en ese lugar. Probá en varios lados.</p>
      <p>Por ejemplo, la heladera de Mabel estaba pegada a la pared y al lado del horno. La corrió, dejó 15 cm atrás y en la prueba del papel vio que el burlete de abajo no cerraba. Lo cambió.</p>` },
    { titulo: "Luz y el costo de usar, no solo de comprar", html: `
      <p class="idea">Un aparato cuesta dos veces: cuando lo comprás y <strong>cada mes que lo usás</strong>. A veces el más caro en el negocio sale más barato en total.</p>
      <pre><code>Dos heladeras (precios y consumos de ejemplo)
              Precio      Consumo por año   Costo por año ($150 el kWh)
Heladera A    $900.000    300 kWh           300 × 150 = $45.000
Heladera B    $820.000    400 kWh           400 × 150 = $60.000
Diferencia de compra: $80.000 más la A
Ahorro por año con la A: $15.000
En 10 años de uso: la A ahorra $150.000 → conviene la A</code></pre>
      <table>
        <tr><th>Iluminación</th><th>Qué hacer</th></tr>
        <tr><td>Lamparitas LED</td><td>Gastan mucho menos que las viejas y duran años</td></tr>
        <tr><td>Luz natural</td><td>Abrir cortinas de día</td></tr>
        <tr><td>Apagar al salir</td><td>Una luz prendida en un cuarto vacío no sirve a nadie</td></tr>
        <tr><td>Limpiar lámparas y artefactos</td><td>Según el ENRE, sucias pierden hasta un 50% de luz</td></tr>
        <tr><td>Paredes claras</td><td>Reflejan la luz y necesitás menos</td></tr>
      </table>
      <p>La <strong>vida útil</strong> es la cantidad de años que dura un aparato funcionando bien. Una heladera suele durar muchos años, por eso el consumo pesa tanto.</p>
      <p><strong>Usados:</strong> una heladera muy vieja barata puede salir cara en luz. Pedí ver la etiqueta o buscá el modelo.</p>
      <p>Por ejemplo, Mabel iba a comprar la heladera B por ser más barata. Hizo la cuenta de 10 años y eligió la A: le salía $70.000 menos en total.</p>` },
  ],
  practica: [
    "Mirá la etiqueta de 2 electrodomésticos de tu casa (o de un negocio) y anotá la letra y el consumo por año.",
    "Hacé la prueba del papel en 4 lados de la puerta de tu heladera y anotá en cuáles se sale.",
    "Medí con una cinta cuántos centímetros hay entre tu heladera y la pared, y anotá si llega a 15.",
    "Compará 2 modelos del mismo aparato con la cuenta de 10 años y anotá cuál conviene.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: etiquetado en eficiencia energética", url: "https://www.argentina.gob.ar/node/169584" },
    { t: "ENRE: consejos para el uso eficiente de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/consejos" },
    { t: "Educ.ar: uso responsable de la energía", url: "https://www.educ.ar/recursos/132531/uso-responsable-de-la-energia" },
  ],
  quiz: [
    { q: "En la etiqueta, ¿qué letra gasta menos?", opciones: ["La G, en rojo","La D, en el medio","La A, en verde","Todas gastan igual"], correcta: 2, explicacion: "A es la más eficiente. La G tienta si pensás que es \"la mejor nota\", pero es la que más gasta." },
    { q: "Querés comprar una heladera. ¿Qué mínimo de etiqueta tiene que tener en Argentina?", opciones: ["B","G","D","No hay mínimo"], correcta: 0, explicacion: "Heladeras y lavarropas tienen mínimo B. \"No hay mínimo\" tienta porque en otros aparatos no hay." },
    { q: "Si buscás lamparitas incandescentes viejas en un negocio, ¿qué pasa?", opciones: ["Son las más eficientes","Tienen etiqueta A","Son obligatorias","Están prohibidas de vender por ley"], correcta: 3, explicacion: "Se prohibieron por gastar mucho. \"Etiqueta A\" tienta, pero no tienen." },
    { q: "Ves una etiqueta con A+++ de otro país. ¿Qué hacés?", opciones: ["Asumo que es la mejor siempre","Me fijo en la etiqueta argentina del producto","La ignoro","Compro el que tenga más +"], correcta: 1, explicacion: "Las escalas cambian según el país. Más + tienta, pero no se compara directo." },
    { q: "¿Qué es la eficiencia energética?", opciones: ["Usar menos los aparatos","Comprar más barato","Hacer lo mismo gastando menos energía","Pasar frío"], correcta: 2, explicacion: "Es hacer lo mismo con menos. Usar menos tienta, pero eso es otra forma de ahorrar." },
    { q: "Tu heladera está pegada a la pared y al lado del horno. ¿Qué hacés?", opciones: ["La corro: al menos 15 cm de la pared y lejos del horno","La dejo así","La tapo con un mantel","Le subo el frío"], correcta: 0, explicacion: "Necesita largar el calor. Subirle el frío tienta, pero la hace gastar más." },
    { q: "Si cerrás la heladera sobre una hoja y sale sin hacer fuerza, ¿qué pasa?", opciones: ["La heladera anda perfecto","Le falta gas","Hay que descongelar","El burlete no cierra bien en ese lugar"], correcta: 3, explicacion: "Por ahí entra aire caliente. \"Le falta gas\" tienta, pero es la puerta." },
    { q: "Tenés una olla de guiso caliente. ¿Qué hacés antes de meterla en la heladera?", opciones: ["La meto hirviendo","La dejo entibiar unos minutos","La dejo afuera toda la noche","La pongo en la puerta"], correcta: 1, explicacion: "Caliente hace trabajar mucho a la heladera; toda la noche afuera es peligroso. Hirviendo tienta por rápido." },
    { q: "Si vas a lavar ropa común, ¿con qué agua?", opciones: ["Bien caliente siempre","Tibia del termotanque","Fría","Da igual"], correcta: 2, explicacion: "Con agua caliente gasta un 80% más. Caliente tienta porque parece que limpia más." },
    { q: "Tenés media carga de ropa. ¿Qué conviene?", opciones: ["Esperar a tener la carga completa","Lavar ahora y otra media mañana","Usar el programa más largo","Lavar a mano siempre"], correcta: 0, explicacion: "Un lavado lleno gasta menos que dos a medias. Lavar ahora tienta por tenerla lista." },
    { q: "La heladera A cuesta $80.000 más, pero ahorra $15.000 por año. ¿Conviene si dura 10 años?", opciones: ["No, es más cara","No se puede saber","Da igual","Sí: ahorra $150.000 en 10 años"], correcta: 3, explicacion: "Contá el costo de usar. \"Es más cara\" tienta porque solo mirás el precio del negocio." },
    { q: "Las lámparas de tu casa están llenas de polvo. ¿Qué pasa?", opciones: ["Nada","Pueden perder hasta la mitad de la luz","Gastan menos","Duran más"], correcta: 1, explicacion: "Sucias iluminan menos y prendés más. \"Nada\" tienta porque igual prenden." },
  ],
},
{
  id: "clima",
  icono: "🌡️",
  titulo: "Frío y calor gastando menos",
  nivel: "Intermedio",
  objetivos: [
    "Usar el aire acondicionado y la calefacción a las temperaturas recomendadas",
    "Sellar las entradas de aire con burletes y cortinas",
    "Elegir la forma de calefaccionar o refrescar que menos gasta para cada caso",
  ],
  lecciones: [
    { titulo: "La temperatura justa", html: `
      <p class="idea">El ENRE recomienda poner el aire acondicionado a <strong>24 °C en verano</strong> y a <strong>20 °C en invierno</strong>. Cada grado más de frío o de calor hace trabajar más al equipo.</p>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>24 °C en verano, 20 °C en invierno</td><td>Es una temperatura cómoda y el equipo no se esfuerza de más</td></tr>
        <tr><td>Puertas y ventanas cerradas con el equipo prendido</td><td>Si no, enfriás o calentás la calle</td></tr>
        <tr><td>Limpiar los filtros al menos cada 6 meses</td><td>Sucios, el equipo trabaja más y tira peor aire</td></tr>
        <tr><td>Apagar al salir del cuarto</td><td>Nadie lo aprovecha</td></tr>
        <tr><td>Usar el temporizador a la noche</td><td>Que se apague solo después de dormirte</td></tr>
        <tr><td>Ventilador para el calor moderado</td><td>Gasta mucho menos que el aire</td></tr>
      </table>
      <p>Un <strong>termostato</strong> es la parte del equipo que lo apaga y prende solo para mantener la temperatura que elegiste.</p>
      <p><strong>Poner 16 °C no enfría más rápido:</strong> el equipo enfría a la misma velocidad; solo sigue trabajando hasta bajar a 16, gastando más.</p>
      <p><strong>En invierno, abrigate antes de subir la calefacción:</strong> un buzo, medias y una manta te dan varios grados de comodidad gratis.</p>
      <p>Por ejemplo, el hijo de Mabel ponía el aire a 17 °C y cerraba con una manta. Lo pasaron a 24 °C con el ventilador de techo prendido y estaban igual de cómodos.</p>` },
    { titulo: "Sellar la casa: burletes y cortinas", video: {"id":"SPkmNshFYSo","t":"¿Cómo elegir burletes para sellar puertas y ventanas? · Sodimac Argentina (1:32)"}, html: `
      <p class="idea">Por las rendijas de puertas y ventanas se escapa el calor en invierno y entra en verano. <strong>Sellarlas</strong> es de lo más barato y efectivo.</p>
      <table>
        <tr><th>Dónde</th><th>Qué usar</th></tr>
        <tr><td>Marco de puertas y ventanas</td><td>Burlete autoadhesivo de goma o espuma</td></tr>
        <tr><td>Abajo de la puerta</td><td>Burlete de puerta o un "chorizo" de tela relleno</td></tr>
        <tr><td>Ventanas de noche en invierno</td><td>Cortinas gruesas cerradas</td></tr>
        <tr><td>Ventanas con sol en verano</td><td>Cortinas o persianas cerradas de día</td></tr>
        <tr><td>Vidrios rotos o flojos</td><td>Hacerlos arreglar o sellar con masilla</td></tr>
      </table>
      <pre><code>Cómo encontrar rendijas
1. Un día de viento, pasá una vela apagada humeando o un papel finito
   cerca del marco (con cuidado, lejos de cortinas).
2. Si el humo o el papel se mueve, entra aire.
3. Marcá los lugares con cinta y medí los metros de burlete.</code></pre>
      <p><strong>Nunca tapes las rejillas de ventilación</strong> de los ambientes con artefactos a gas. Son obligatorias y te protegen del monóxido de carbono. Sellás puertas y ventanas, no las rejillas.</p>
      <p><strong>Cómo poner el burlete:</strong> limpiá y secá el marco, medí, cortá y pegá apretando. Si la puerta cuesta mucho cerrar, el burlete es demasiado grueso.</p>
      <p>Por ejemplo, Mabel compró 12 metros de burlete y un burlete de puerta. Le llevó una tarde y en el cuarto de los chicos dejó de entrar ese chiflete de la ventana.</p>` },
    { titulo: "Qué calefacción conviene", html: `
      <p class="idea">No todas las formas de calentar gastan igual. En general, <strong>calentar con electricidad común</strong> (caloventores, radiadores, estufas de cuarzo) es de lo que más gasta; el aire acondicionado frío/calor y el gas natural suelen salir más baratos por el mismo calor.</p>
      <table>
        <tr><th>Forma</th><th>Lo bueno</th><th>Lo que cuidar</th></tr>
        <tr><td>Estufa a gas de tiro balanceado</td><td>Calienta mucho, toma y larga el aire afuera</td><td>Instalación por un gasista matriculado</td></tr>
        <tr><td>Aire acondicionado frío/calor</td><td>Con la misma luz da más calor que una estufa eléctrica común</td><td>A 20 °C, con filtros limpios</td></tr>
        <tr><td>Caloventor, cuarzo, radiador eléctrico</td><td>Baratos para comprar, sirven un rato en un lugar chico</td><td>Gastan mucha luz; nunca cerca de cortinas ni ropa</td></tr>
        <tr><td>Estufa sin salida al exterior</td><td>Ninguno que valga el riesgo</td><td>No se usan en dormitorios ni baños: riesgo de monóxido</td></tr>
      </table>
      <p>Una estufa de <strong>tiro balanceado</strong> es la que toma el aire de afuera y larga los gases afuera por un conducto en la pared, sin usar el aire del cuarto.</p>
      <p><strong>Nunca uses el horno ni las hornallas de la cocina para calefaccionar:</strong> gastan mucho gas y pueden producir monóxido de carbono.</p>
      <p><strong>Calentá el cuarto donde estás,</strong> no toda la casa, y cerrá las puertas de los cuartos que no usás.</p>
      <p>Por ejemplo, Mabel cambió la estufa eléctrica del cuarto de su hijo por el aire frío/calor que ya tenía y casi no usaban en invierno. Puesto a 20 °C, su consumo de luz bajó en la boleta siguiente.</p>` },
  ],
  practica: [
    "Fijate a qué temperatura usan el aire en tu casa y anotá si está en 24 °C en verano o 20 °C en invierno.",
    "Buscá las rendijas de 3 ventanas o puertas con la prueba del papel y anotá cuántos metros de burlete necesitás.",
    "Revisá los filtros del aire acondicionado y anotá la fecha en que los limpiaste.",
    "Anotá qué forma de calefacción usás en cada cuarto y cuál podrías cambiar.",
  ],
  recursos: [
    { t: "ENRE: consejos para el uso eficiente de la electricidad", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/consejos" },
    { t: "Secretaría de Energía: guía residencial de buenas prácticas para reducir el consumo (PDF)", url: "https://argentina.gob.ar/sites/default/files/guia_residencial_enereficiente.pdf" },
    { t: "Secretaría de Energía: eficiencia energética", url: "https://www.argentina.gob.ar/economia/energia/eficiencia-energetica" },
  ],
  quiz: [
    { q: "¿A qué temperatura recomienda el ENRE poner el aire en verano?", opciones: ["16 °C","18 °C","24 °C","30 °C"], correcta: 2, explicacion: "Es cómodo y no fuerza el equipo. 16 °C tienta para enfriar rápido, pero gasta más." },
    { q: "Si ponés el aire a 16 °C para que enfríe más rápido, ¿qué pasa?", opciones: ["Enfría a la misma velocidad, pero sigue trabajando más y gasta más","Enfría el doble de rápido","Gasta menos","Se apaga solo"], correcta: 0, explicacion: "La velocidad es la misma. \"El doble de rápido\" tienta, pero es un mito." },
    { q: "Tenés el aire prendido con la ventana abierta. ¿Qué pasa?", opciones: ["Se ventila mejor","Gasta menos","Nada","Enfriás la calle y gastás de más"], correcta: 3, explicacion: "El frío se va por la ventana. Ventilar tienta, pero con el aire prendido no." },
    { q: "Hace un año que no limpiás los filtros del aire. ¿Qué hacés?", opciones: ["Nada, no hace falta","Los limpio: se recomienda al menos cada 6 meses","Compro otro aire","Lo pongo más frío"], correcta: 1, explicacion: "Sucios hacen trabajar más al equipo. Ponerlo más frío tienta, pero gasta más." },
    { q: "En invierno tenés frío en casa. ¿Qué hacés primero?", opciones: ["Subo la calefacción a 26 °C","Prendo el horno","Me abrigo: buzo, medias, manta","Abro las ventanas"], correcta: 2, explicacion: "Abrigarse es gratis. Subir a 26 °C tienta, pero gasta mucho." },
    { q: "Entra aire frío por debajo de la puerta. ¿Qué usás?", opciones: ["Un burlete de puerta o un \"chorizo\" de tela","Tapo la rejilla de ventilación","Nada","Una estufa al lado de la puerta"], correcta: 0, explicacion: "Sellás la puerta. Tapar la rejilla tienta, pero es peligroso." },
    { q: "Querés ahorrar y pensás tapar la rejilla del cuarto que tiene estufa a gas. ¿Qué hacés?", opciones: ["La tapo con cinta","La tapo solo de noche","La tapo con un mueble","No la tapo: me protege del monóxido de carbono"], correcta: 3, explicacion: "Las rejillas son obligatorias. Taparla de noche tienta porque hace más frío, pero es cuando más peligro hay." },
    { q: "Si pusiste un burlete y ahora la puerta cuesta mucho cerrar, ¿qué pasó?", opciones: ["Está perfecto","El burlete es demasiado grueso","La puerta está rota","Hace falta otro burlete"], correcta: 1, explicacion: "Tiene que cerrar sin forzar. \"Está perfecto\" tienta porque sella, pero se va a despegar." },
    { q: "Tenés aire frío/calor y una estufa eléctrica común. ¿Cuál suele gastar menos para calentar?", opciones: ["La estufa eléctrica","Gastan igual","El aire frío/calor","Ninguno gasta"], correcta: 2, explicacion: "Con la misma luz da más calor. La estufa tienta porque es más chica, pero gasta mucho." },
    { q: "¿Qué es una estufa de tiro balanceado?", opciones: ["Una que toma el aire de afuera y larga los gases afuera por un conducto","Una estufa eléctrica","Una estufa con ruedas","Una que no necesita gas"], correcta: 0, explicacion: "No usa el aire del cuarto. \"Eléctrica\" tienta, pero es a gas." },
    { q: "Hace mucho frío y pensás prender el horno con la puerta abierta. ¿Qué hacés?", opciones: ["Lo prendo toda la noche","Prendo también las hornallas","Lo prendo solo en el dormitorio","No: gasta mucho gas y puede producir monóxido"], correcta: 3, explicacion: "La cocina no es calefacción. Prenderlo un rato tienta, pero es peligroso." },
    { q: "Tenés 4 cuartos y estás todos en el comedor. ¿Qué calentás?", opciones: ["Toda la casa","El comedor, con las puertas de los otros cuartos cerradas","Ningún cuarto","Solo el baño"], correcta: 1, explicacion: "Calentá donde estás. Toda la casa tienta para que esté igual en todos lados." },
  ],
},
{
  id: "gas",
  icono: "🔥",
  titulo: "Gas y agua caliente",
  nivel: "Intermedio",
  objetivos: [
    "Usar el calefón y el termotanque gastando menos gas",
    "Cocinar gastando menos gas",
    "Reconocer los riesgos del gas y saber qué hacer ante una pérdida o una llama amarilla",
  ],
  lecciones: [
    { titulo: "Calefón, termotanque y el piloto", video: {"id":"0Ppz6gURBRg","t":"¿Cuál es la diferencia entre un calefón a piloto y uno eficiente? · Vida Silvestre (1:06)"}, html: `
      <p class="idea">El agua caliente es uno de los mayores gastos de gas de la casa. Y el <strong>piloto</strong>, esa llamita que queda prendida todo el día, gasta aunque no uses agua caliente.</p>
      <p>El <strong>piloto</strong> es la llama chica que queda encendida en el calefón, el termotanque o la estufa para prender el quemador cuando hace falta.</p>
      <table>
        <tr><th>Calefón</th><th>Termotanque</th></tr>
        <tr><td>Calienta el agua solo cuando abrís la canilla</td><td>Tiene un tanque y mantiene el agua caliente todo el día</td></tr>
        <tr><td>Regulá la temperatura con la perilla en vez de mezclar con agua fría</td><td>Ponelo en una temperatura media, no al máximo</td></tr>
        <tr><td>Si tiene piloto y no lo vas a usar por días, apagalo</td><td>Si no hay nadie en casa por horas o días, dejalo en "piloto"</td></tr>
        <tr><td>Al cambiarlo, buscá uno sin piloto permanente y con buena etiqueta</td><td>Que no sea más grande de lo que tu familia necesita</td></tr>
      </table>
      <p><strong>No mezclar:</strong> si el agua sale muy caliente y la mezclás con fría, calentaste de más para nada. Bajá la perilla hasta que salga a la temperatura que usás.</p>
      <p><strong>En verano</strong> muchas familias apagan la calefacción y sus pilotos. Encenderlos de nuevo en otoño lo puede hacer cualquiera siguiendo el manual; si no sabés, pedí ayuda a un gasista matriculado.</p>
      <p><strong>Duchas más cortas:</strong> cada minuto menos de ducha es agua y gas que no gastás. Lo vemos en el módulo del agua.</p>
      <p>Por ejemplo, el termotanque de Mabel estaba al máximo y ella mezclaba con agua fría. Lo bajó a la mitad, ya no necesita mezclar y el gas del verano le bajó en la boleta siguiente.</p>` },
    { titulo: "Cocinar gastando menos gas", html: `
      <p class="idea">En la cocina, unas costumbres simples ahorran gas en cada comida: <strong>tapa, llama justa y olla del tamaño de la hornalla</strong>.</p>
      <table>
        <tr><th>Costumbre</th><th>Por qué</th></tr>
        <tr><td>Cocinar con la olla tapada</td><td>El calor no se escapa y hierve antes</td></tr>
        <tr><td>Que la llama no salga por los costados de la olla</td><td>Lo que sale por el costado calienta el aire, no la comida</td></tr>
        <tr><td>Olla del tamaño de la hornalla</td><td>Olla chica en hornalla grande desperdicia llama</td></tr>
        <tr><td>Bajar el fuego cuando hierve</td><td>Hirviendo despacio o fuerte, el agua está a la misma temperatura</td></tr>
        <tr><td>Remojar las legumbres</td><td>Se cocinan en mucho menos tiempo</td></tr>
        <tr><td>Aprovechar el horno prendido</td><td>Hacé varias cosas a la vez</td></tr>
        <tr><td>Llama azul</td><td>Si es amarilla o anaranjada, el artefacto quema mal y hay que revisarlo</td></tr>
      </table>
      <p><strong>Llama azul</strong> quiere decir que el gas se quema bien. Una llama <strong>amarilla o anaranjada</strong> indica mala combustión: gasta más y puede producir monóxido de carbono.</p>
      <p><strong>Pava en la hornalla:</strong> igual que con la eléctrica, calentá solo el agua que vas a usar.</p>
      <p>Para cocinar rico y rendidor, está el curso <strong>Cocina básica</strong> de este sitio.</p>
      <p>Por ejemplo, Mabel hacía los fideos en una olla chica destapada sobre la hornalla grande con la llama al máximo. Ahora usa tapa, la hornalla mediana y baja el fuego al hervir: el agua hierve antes y gasta menos.</p>` },
    { titulo: "Gas seguro: pérdidas y monóxido", html: `
      <p class="idea">Ahorrar nunca puede ser a costa de la seguridad. El gas tiene dos riesgos: las <strong>pérdidas</strong> y el <strong>monóxido de carbono</strong>.</p>
      <p>El <strong>monóxido de carbono</strong> es un gas que no se ve ni tiene olor. Sale de artefactos que queman mal o sin buena ventilación y puede matar. Da dolor de cabeza, mareos, náuseas y sueño.</p>
      <table>
        <tr><th>Si pasa esto</th><th>Hacé esto</th></tr>
        <tr><td>Olor a gas</td><td>No prendas nada (ni luces ni fósforos), abrí puertas y ventanas, cerrá la llave de paso y llamá a la distribuidora desde afuera</td></tr>
        <tr><td>Dolor de cabeza o mareos de varias personas con artefactos prendidos</td><td>Apagá los artefactos, ventilá, salí al aire libre y llamá a emergencias</td></tr>
        <tr><td>Llama amarilla o anaranjada</td><td>Que lo revise un gasista matriculado</td></tr>
        <tr><td>Manchas negras en la pared arriba de un artefacto</td><td>Indica mala combustión: que lo revise un gasista matriculado</td></tr>
      </table>
      <pre><code>Siempre
✔ Rejillas de ventilación libres, nunca tapadas
✔ Revisión de la instalación por un gasista matriculado
✔ Estufas de tiro balanceado en dormitorios (nunca otras)
✘ No usar el horno ni las hornallas para calefaccionar
✘ No dormir con estufas sin salida al exterior prendidas
✘ No hacer ni arreglar instalaciones de gas por tu cuenta</code></pre>
      <p>Un <strong>gasista matriculado</strong> es un profesional habilitado para instalar y revisar artefactos de gas. Las conexiones de gas no las hagas vos.</p>
      <p>Por ejemplo, Mabel vio una mancha negra arriba del calefón y la llama era amarilla. Llamó a un gasista matriculado: el calefón quemaba mal. Lo arregló, ahora la llama es azul y además gasta menos.</p>` },
  ],
  practica: [
    "Mirá la perilla del calefón o el termotanque, bajala hasta no tener que mezclar con agua fría y anotá en qué posición quedó.",
    "Contá cuántos artefactos de tu casa tienen piloto y anotá cuáles podrías apagar en verano.",
    "Cociná fideos con tapa y la llama justa y anotá cuántos minutos tardó en hervir el agua.",
    "Revisá el color de la llama de cada artefacto y si hay rejillas tapadas, y anotá lo que encontraste.",
  ],
  recursos: [
    { t: "ENARGAS: seguridad con el gas en el hogar", url: "https://www.enargas.gob.ar/secciones/seguridad-en-el-hogar/seguridad-en-el-hogar.php" },
    { t: "ENARGAS: monóxido de carbono, cómo prevenirlo", url: "https://www.enargas.gob.ar/secciones/monoxido-de-carbono/monoxido-de-carbono.php" },
    { t: "CONICET: cómo evitar gastos innecesarios de gas en casa", url: "https://www.conicet.gov.ar/?p=44763" },
    { t: "Argentina.gob.ar: etiquetado en eficiencia energética", url: "https://www.argentina.gob.ar/node/169584" },
  ],
  quiz: [
    { q: "¿Qué es el piloto de un calefón?", opciones: ["La perilla de temperatura","El caño de salida","La llama chica que queda prendida para encender el quemador","Un sensor eléctrico"], correcta: 2, explicacion: "Es una llama que gasta todo el día. \"La perilla\" tienta porque es lo que tocás." },
    { q: "Si el agua del calefón sale muy caliente y la mezclás con fría, ¿qué conviene?", opciones: ["Bajar la perilla hasta no tener que mezclar","Seguir mezclando","Subir la perilla","Abrir más el agua fría"], correcta: 0, explicacion: "Si mezclás, calentaste de más. Seguir mezclando tienta por costumbre." },
    { q: "Te vas una semana de vacaciones y tenés termotanque. ¿Qué hacés?", opciones: ["Lo dejo al máximo","Lo subo para tener agua al volver","Abro una canilla","Lo dejo en \"piloto\""], correcta: 3, explicacion: "No hace falta mantener el agua caliente sin nadie. Dejarlo al máximo tienta para no pensar." },
    { q: "Si vas a cambiar el calefón, ¿qué buscás?", opciones: ["El más grande que haya","Uno sin piloto permanente y con buena etiqueta de eficiencia","El más barato siempre","Uno con dos pilotos"], correcta: 1, explicacion: "Sin piloto no gasta cuando no lo usás. El más grande tienta, pero gasta de más." },
    { q: "Hacés fideos en una olla destapada. ¿Qué cambiás?", opciones: ["Subo el fuego al máximo","Pongo más agua","La tapo para que hierva antes","Nada"], correcta: 2, explicacion: "Con tapa el calor no se escapa. Subir el fuego tienta, pero gasta más." },
    { q: "La llama sale por los costados de la olla. ¿Qué hacés?", opciones: ["La bajo o uso una olla más grande u otra hornalla","La dejo así","La subo más","Pongo dos ollas"], correcta: 0, explicacion: "Lo que sale por el costado no calienta la comida. Dejarla tienta porque parece que cocina más rápido." },
    { q: "El agua ya hierve. ¿Qué hacés con el fuego?", opciones: ["Lo subo","Lo dejo al máximo","Lo apago y espero","Lo bajo: hirviendo despacio o fuerte, el agua está a la misma temperatura"], correcta: 3, explicacion: "Más fuego no calienta más el agua que hierve. Dejarlo al máximo tienta para que cocine más rápido." },
    { q: "Si la llama de una hornalla es anaranjada, ¿qué indica?", opciones: ["Que anda perfecto","Que quema mal: gasta más y puede producir monóxido","Que cocina más rápido","Que es gas envasado"], correcta: 1, explicacion: "La llama tiene que ser azul. \"Cocina más rápido\" tienta, pero no." },
    { q: "Entrás a casa y hay olor a gas. ¿Qué hacés?", opciones: ["Prendo la luz","Busco la pérdida con un fósforo","No prendo nada, ventilo, cierro la llave de paso y llamo desde afuera","Prendo la cocina para ver"], correcta: 2, explicacion: "Cualquier chispa puede encender el gas. Prender la luz tienta, pero hace chispa." },
    { q: "Con la estufa prendida, en tu casa a varios les duele la cabeza y están mareados. ¿Qué hacés?", opciones: ["Apago, ventilo, salimos al aire libre y llamo a emergencias","Tomo un analgésico y sigo","Me acuesto a dormir","Subo la estufa"], correcta: 0, explicacion: "Puede ser monóxido. Acostarse tienta, pero es lo más peligroso." },
    { q: "Ves manchas negras en la pared arriba de la estufa. ¿Qué hacés?", opciones: ["Pinto la pared","La limpio y listo","Nada","Llamo a un gasista matriculado: quema mal"], correcta: 3, explicacion: "Es una señal de mala combustión. Pintar tienta, pero el problema sigue." },
    { q: "Querés ahorrar y pensás mover vos la estufa a gas a otra pared. ¿Qué hacés?", opciones: ["La muevo yo con una manguera","Llamo a un gasista matriculado","Uso cinta en la conexión","Le pido a un vecino"], correcta: 1, explicacion: "Las conexiones de gas las hace un matriculado. Hacerlo vos tienta para ahorrar, pero es peligroso." },
  ],
},
{
  id: "agua",
  icono: "💧",
  titulo: "Cuidar el agua",
  nivel: "Intermedio",
  objetivos: [
    "Estimar cuántos litros usa tu casa en cada actividad",
    "Detectar pérdidas en canillas, inodoros y tanques",
    "Cambiar costumbres que más agua gastan",
  ],
  lecciones: [
    { titulo: "Cuántos litros usamos", html: `
      <p class="idea">Muchas casas en Argentina pagan el agua aunque no tengan medidor, pero <strong>cuidarla importa igual</strong>: es un recurso que se trata y se bombea, y el agua caliente además gasta gas o luz.</p>
      <table>
        <tr><th>Actividad (según el ERAS)</th><th>Litros aproximados</th></tr>
        <tr><td>Ducha de 5 minutos</td><td>50 a 100</td></tr>
        <tr><td>Baño de inmersión</td><td>150 a 250</td></tr>
        <tr><td>Descarga del inodoro</td><td>6 a 20</td></tr>
        <tr><td>Lavarropas (un ciclo)</td><td>50 a 100</td></tr>
        <tr><td>Lavar los platos a mano</td><td>20 a 50</td></tr>
        <tr><td>Lavar el auto con manguera</td><td>300 a 500</td></tr>
        <tr><td>Regar con manguera</td><td>Unos 500 por hora</td></tr>
      </table>
      <pre><code>Ducha de Mabel y sus hijos (3 personas, ducha de 10 a 15 L por minuto)
Antes: 15 minutos × 3 personas × 12 L = 540 litros por día
Ahora:  7 minutos × 3 personas × 12 L = 252 litros por día
Ahorro: 288 litros por día, y el gas para calentarlos</code></pre>
      <p>El <strong>caudal</strong> es cuánta agua sale por minuto. Lo podés medir: poné un balde de 10 litros bajo la ducha y contá cuántos segundos tarda en llenarse.</p>
      <p><strong>Agua caliente = doble ahorro:</strong> cada litro de agua caliente que no usás es agua y también gas o luz que no gastás.</p>
      <p>Por ejemplo, Mabel midió la ducha con un balde de 10 litros: se llenó en 50 segundos, unos 12 litros por minuto. Con ese número hizo la cuenta de la familia.</p>` },
    { titulo: "Encontrar las pérdidas", video: {"id":"LBOiyVYb-hc","t":"Te ayudamos a detectar una fuga de agua · Aguas Andinas (3:48)"}, html: `
      <p class="idea">Las <strong>pérdidas</strong> son el desperdicio más grande y el más fácil de evitar. Según el ERAS, una canilla que gotea puede perder hasta 50 litros por día y un inodoro con pérdida, varios miles.</p>
      <table>
        <tr><th>Dónde</th><th>Cómo darte cuenta</th></tr>
        <tr><td>Canilla</td><td>Gotea con la canilla cerrada</td></tr>
        <tr><td>Inodoro</td><td>Se escucha correr agua o hay un hilito en la taza</td></tr>
        <tr><td>Tanque de agua</td><td>Rebalsa por el caño de desborde o la bomba arranca sola seguido</td></tr>
        <tr><td>Caños escondidos</td><td>Manchas de humedad en paredes o pisos</td></tr>
      </table>
      <pre><code>Prueba del colorante (inodoro)
1. Poné unas gotas de colorante de cocina en la mochila (el tanque del inodoro).
2. No tires la cadena durante 30 minutos.
3. Si aparece color en la taza, la mochila pierde.

Prueba del medidor (si tenés)
1. Cerrá todas las canillas y no uses agua.
2. Anotá el número del medidor.
3. Esperá 1 hora sin usar agua y volvé a mirar.
4. Si cambió, hay una pérdida en algún lado.</code></pre>
      <p>La <strong>mochila</strong> es el tanque del inodoro donde se junta el agua para la descarga.</p>
      <p><strong>Arreglos simples y los que no:</strong> cambiar el cuerito de una canilla o el flotante de la mochila lo podés aprender con un tutorial y cortando la llave de paso. Caños dentro de la pared, el tanque de la terraza o lo que no sepas hacer, lo hace un plomero.</p>
      <p>Por ejemplo, Mabel hizo la prueba del colorante y a los 20 minutos la taza estaba azul. Cambió el sopapo de la mochila y el ruido de agua que se escuchaba a la noche desapareció.</p>` },
    { titulo: "Costumbres que ahorran agua", html: `
      <p class="idea">Después de las pérdidas, el ahorro está en las costumbres de todos los días: <strong>cerrar la canilla cuando no la usás</strong> y elegir la forma que menos agua gasta.</p>
      <table>
        <tr><th>En vez de...</th><th>Hacé...</th></tr>
        <tr><td>Dejar correr el agua al cepillarte los dientes</td><td>Mojar el cepillo, cerrar y abrir solo para enjuagar</td></tr>
        <tr><td>Lavar los platos con la canilla abierta</td><td>Llenar la pileta o un recipiente para enjabonar y abrir para enjuagar</td></tr>
        <tr><td>Ducha de 15 minutos</td><td>Ducha de 5 a 7 minutos (un tema musical o dos)</td></tr>
        <tr><td>Baño de inmersión</td><td>Ducha corta</td></tr>
        <tr><td>Lavar el auto con manguera</td><td>Balde y esponja</td></tr>
        <tr><td>Regar al mediodía</td><td>Regar temprano o al atardecer, cuando se evapora menos</td></tr>
        <tr><td>Lavar la vereda con manguera</td><td>Barrer</td></tr>
        <tr><td>Lavarropas a media carga</td><td>Carga completa</td></tr>
      </table>
      <p><strong>Agua de lluvia o del lavarropas:</strong> el agua del enjuague del lavarropas sirve para baldear el patio o el inodoro. No la uses para tomar ni para regar verduras que se comen crudas.</p>
      <p><strong>En familia:</strong> los cambios duran si todos los entienden. Un cartel en el baño con el tiempo de ducha y una "competencia" de quién tarda menos funcionan con chicos y adolescentes.</p>
      <p>Por ejemplo, en la casa de Mabel pusieron un reloj de arena de 5 minutos en el baño. Los chicos lo tomaron como un juego y la ducha de la familia bajó a la mitad.</p>` },
  ],
  practica: [
    "Medí el caudal de tu ducha con un balde y un reloj y anotá cuántos litros por minuto salen.",
    "Hacé la prueba del colorante en cada inodoro de tu casa y anotá si alguno pierde.",
    "Revisá todas las canillas cerradas durante 1 minuto y anotá cuáles gotean.",
    "Elegí 2 costumbres de la tabla, aplicalas una semana con tu familia y anotá cuántos minutos de ducha bajaron.",
  ],
  recursos: [
    { t: "ERAS: cuidado del agua (consumos y pérdidas en litros)", url: "https://www.argentina.gob.ar/eras/cuidado-del-agua" },
    { t: "AySA: agua y saneamiento (consejos y reclamos en su zona)", url: "https://www.aysa.com.ar/" },
    { t: "Secretaría de Energía: guía residencial de buenas prácticas para reducir el consumo (PDF)", url: "https://argentina.gob.ar/sites/default/files/guia_residencial_enereficiente.pdf" },
  ],
  quiz: [
    { q: "Una ducha de 5 minutos, según el ERAS, ¿cuánta agua usa?", opciones: ["5 litros","1.000 litros","Entre 50 y 100 litros","10 litros"], correcta: 2, explicacion: "Depende del caudal. 10 litros tienta porque parece poco tiempo, pero sale mucho por minuto." },
    { q: "Tu ducha llena un balde de 10 litros en 50 segundos. ¿Cuál es el caudal, más o menos?", opciones: ["Unos 12 litros por minuto","10 litros por minuto","50 litros por minuto","2 litros por minuto"], correcta: 0, explicacion: "10 litros en 50 segundos son 12 por cada 60. 10 tienta porque es el tamaño del balde." },
    { q: "Si 3 personas bajan la ducha de 15 a 7 minutos, a 12 L por minuto, ¿cuánto ahorran por día?", opciones: ["96 litros","540 litros","8 litros","288 litros"], correcta: 3, explicacion: "(15 − 7) × 3 × 12 = 288. 96 tienta si te olvidás de multiplicar por las 3 personas." },
    { q: "¿Por qué ahorrar agua caliente ahorra el doble?", opciones: ["Porque el agua caliente es más cara de comprar","Porque ahorrás el agua y también el gas o la luz para calentarla","No ahorra el doble","Porque se evapora"], correcta: 1, explicacion: "Calentarla gasta energía. \"No ahorra el doble\" tienta si solo pensás en el agua." },
    { q: "Una canilla gotea con la canilla cerrada. Según el ERAS, ¿cuánto puede perder?", opciones: ["Nada importante","Medio litro por año","Hasta 50 litros por día","10.000 litros por minuto"], correcta: 2, explicacion: "Gota a gota suma mucho. \"Nada importante\" tienta porque se ve poco." },
    { q: "Escuchás correr agua en el inodoro a la noche. ¿Qué hacés?", opciones: ["Hago la prueba del colorante en la mochila","Nada, es normal","Tiro la cadena más seguido","Cierro la puerta del baño"], correcta: 0, explicacion: "Puede perder miles de litros por día. \"Es normal\" tienta porque pasa en muchas casas." },
    { q: "Si pusiste colorante en la mochila y a los 20 minutos la taza está de color, ¿qué significa?", opciones: ["Que el colorante es malo","Que el inodoro anda perfecto","Que hay que tirar la cadena","Que la mochila pierde agua"], correcta: 3, explicacion: "El agua de la mochila pasa a la taza. \"Anda perfecto\" tienta, pero es al revés." },
    { q: "Si cerraste todo y en 1 hora el medidor de agua cambió, ¿qué pasa?", opciones: ["El medidor está roto seguro","Hay una pérdida en algún lado","Es normal","Alguien te roba agua seguro"], correcta: 1, explicacion: "Sin usar agua, no tendría que moverse. \"Roto seguro\" tienta, pero primero buscá la pérdida." },
    { q: "Hay una mancha de humedad que crece en la pared del baño. ¿Qué hacés?", opciones: ["La pinto","Rompo la pared yo","Llamo a un plomero: puede ser un caño roto dentro de la pared","Nada"], correcta: 2, explicacion: "Lo de adentro de la pared lo ve un plomero. Pintar tienta, pero la pérdida sigue." },
    { q: "Te cepillás los dientes. ¿Qué hacés con la canilla?", opciones: ["Mojo el cepillo, cierro y abro solo para enjuagar","La dejo abierta","La abro al máximo","Uso agua caliente"], correcta: 0, explicacion: "Abierta se van litros. Dejarla abierta tienta por costumbre." },
    { q: "¿Cuándo conviene regar el jardín?", opciones: ["Al mediodía","Con el sol más fuerte","Toda la noche con manguera","Temprano o al atardecer"], correcta: 3, explicacion: "Se evapora menos. Al mediodía tienta porque las plantas parecen secas." },
    { q: "Querés reusar el agua del enjuague del lavarropas. ¿Para qué sirve?", opciones: ["Para tomar","Para baldear el patio o el inodoro","Para cocinar","Para regar lechuga que comés cruda"], correcta: 1, explicacion: "No es agua potable. Regar la huerta tienta, pero no en verduras que se comen crudas." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el plan de ahorro de tu casa",
  nivel: "Avanzado",
  objetivos: [
    "Medir el consumo de luz, gas y agua de tu casa antes de cambiar",
    "Armar un plan con cambios priorizados por ahorro y costo",
    "Medir después, comparar y evaluar tu plan con una rúbrica",
  ],
  lecciones: [
    { titulo: "Medí antes de cambiar", html: `
      <p class="idea">El proyecto es <strong>bajar el consumo de tu casa durante un mes</strong> y demostrarlo con números. Primero se mide; si no, no sabés si funcionó.</p>
      <pre><code>Línea de base (la casa de Mabel)
Luz:   medidor 7 días → 56 kWh → 8 kWh por día
Gas:   boleta del mismo bimestre del año pasado → 310 m³
Agua:  ducha 12 L/min · 3 personas · 15 min cada una
       inodoro: pierde (prueba del colorante)
Aparatos que más gastan: estufa eléctrica, aire acondicionado, plancha</code></pre>
      <table>
        <tr><th>Qué medir</th><th>Cómo</th><th>Lo viste en</th></tr>
        <tr><td>Luz por día</td><td>Medidor 7 días o boleta dividida por días</td><td>Entender la boleta</td></tr>
        <tr><td>Gas</td><td>Boleta comparada con el año anterior, o días que dura la garrafa</td><td>Entender la boleta</td></tr>
        <tr><td>Aparatos</td><td>Lista con vatios y horas</td><td>Cuánto gasta cada aparato</td></tr>
        <tr><td>Agua</td><td>Caudal de la ducha, minutos y pruebas de pérdidas</td><td>Cuidar el agua</td></tr>
      </table>
      <p>La <strong>línea de base</strong> es la medición de cómo estaban las cosas antes de cambiar. Sirve para comparar después.</p>
      <p><strong>Anotá todo en una hoja:</strong> fecha, número del medidor, qué medías. Si cambia el clima mucho (una semana de ola de calor), anotalo también: explica diferencias.</p>
      <p>Por ejemplo, Mabel anotó su línea de base en una hoja pegada en la heladera, con fecha y hora de cada lectura del medidor.</p>` },
    { titulo: "Armá el plan", html: `
      <p class="idea">No hace falta cambiar todo. Elegí <strong>pocos cambios con mucho ahorro</strong>: primero los gratis, después los baratos y por último los que necesitan una inversión.</p>
      <table>
        <tr><th>Tipo de cambio</th><th>Ejemplos</th><th>Costo</th></tr>
        <tr><td>Costumbres (gratis)</td><td>24 °C en el aire, duchas cortas, apagar el stand-by, agua fría en el lavarropas, tapa en la olla</td><td>$0</td></tr>
        <tr><td>Arreglos baratos</td><td>Burletes, sopapo de la mochila, cuerito de la canilla, zapatilla con interruptor, lamparitas LED</td><td>Bajo</td></tr>
        <tr><td>Inversiones</td><td>Heladera más eficiente, calefón sin piloto, aire frío/calor en vez de estufa eléctrica</td><td>Alto: hacer la cuenta de años</td></tr>
      </table>
      <pre><code>Plan de Mabel (un mes)
Gratis:   aire a 24 °C · reloj de arena en la ducha · termotanque a la mitad
          · zapatilla con interruptor en el TV · agua fría en el lavarropas
Barato:   12 m de burlete · sopapo de la mochila
Inversión (más adelante): cambiar la estufa eléctrica por el aire frío/calor
Meta:     bajar la luz de 8 a 6,5 kWh por día (casi 20%)</code></pre>
      <p>Una <strong>meta</strong> medible dice cuánto y para cuándo: "bajar de 8 a 6,5 kWh por día en un mes", no "gastar menos".</p>
      <p><strong>Seguridad primero:</strong> ningún ahorro justifica tapar rejillas, tocar la instalación de gas o eléctrica, o usar estufas sin salida al exterior en dormitorios.</p>
      <p>Para decidir si una inversión entra en el presupuesto familiar, está el curso <strong>Finanzas personales</strong> de este sitio.</p>
      <p>Por ejemplo, Mabel eligió 5 cambios gratis y 2 baratos. Dejó la inversión para cuando viera cuánto ahorraba con los primeros.</p>` },
    { titulo: "Medí después y evaluá con la rúbrica", video: {"id":"hxnhoPvbhqA","t":"Paso a paso para saber cuánto gasta una casa en electricidad y cómo mejorarlo · Todo Noticias (2:37)"}, html: `
      <p class="idea">Después de un mes, <strong>medí de nuevo igual que la primera vez</strong>, comparalo con la línea de base y evaluá tu plan con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <pre><code>Resultado de Mabel
Luz:   antes 8 kWh por día → después 6,4 kWh por día
       (8 − 6,4) ÷ 8 = 0,20 → bajó 20% ✔ meta cumplida
Agua:  ducha 15 → 7 minutos · inodoro sin pérdida
Gas:   se verá en la próxima boleta (comparar con el año pasado)</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Línea de base</td><td>Luz, gas y agua medidos con fecha</td><td>Solo uno o dos</td><td>Sin medición</td></tr>
        <tr><td>Aparatos</td><td>Lista con vatios, horas y los 3 que más gastan</td><td>Lista sin cuentas</td><td>Sin lista</td></tr>
        <tr><td>Plan</td><td>Cambios gratis, baratos e inversión, con meta medible</td><td>Cambios sin meta</td><td>Sin plan</td></tr>
        <tr><td>Seguridad</td><td>Rejillas, llamas y enchufes revisados</td><td>Algo revisado</td><td>Nada revisado</td></tr>
        <tr><td>Resultado</td><td>Medición después y porcentaje calculado</td><td>Medición sin cuenta</td><td>Sin medición</td></tr>
        <tr><td>Familia</td><td>Todos participaron y saben por qué</td><td>Algunos</td><td>Solo vos</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → plan logrado: mantenelo y sumá un cambio por mes
7 a 9   → mejorá el criterio más bajo el mes que viene
0 a 6   → volvé a medir la línea de base y elegí cambios más simples</code></pre>
      <p><strong>El ahorro se mantiene si se vuelve costumbre:</strong> volvé a medir cada 3 meses para que no se pierda.</p>
      <p>Por ejemplo, Mabel sacó 11 de 12: le faltó revisar las llamas de todos los artefactos. Lo hizo la semana siguiente y encontró la del calefón amarilla.</p>` },
  ],
  practica: [
    "Armá tu línea de base de luz, gas y agua y anotá las 3 mediciones con su fecha en una hoja.",
    "Escribí tu plan con al menos 3 cambios gratis y 1 barato, y una meta medible.",
    "Después de 1 mes, medí de nuevo y calculá el porcentaje de ahorro de luz.",
    "Puntuá tu plan con la rúbrica y anotá tu total de 12.",
  ],
  recursos: [
    { t: "ENRE: calculá el consumo eléctrico de tu hogar en kWh", url: "https://www.argentina.gob.ar/enre/uso-eficiente-y-seguro/calcula-tu-consumo-electrico-hogar-kwh" },
    { t: "Secretaría de Energía: guía residencial de buenas prácticas para reducir el consumo (PDF)", url: "https://argentina.gob.ar/sites/default/files/guia_residencial_enereficiente.pdf" },
    { t: "Curso de este sitio: Finanzas personales", url: "https://pkeios.github.io/EiaLearning/finanzas-personales/" },
  ],
  quiz: [
    { q: "Querés saber si tus cambios funcionan. ¿Qué hacés primero?", opciones: ["Cambio todo de una","Espero la boleta del año que viene","Mido cómo estaba antes: la línea de base","Nada"], correcta: 2, explicacion: "Sin medir antes no sabés si funcionó. Cambiar todo de una tienta por rápido." },
    { q: "¿Qué es la línea de base?", opciones: ["La medición de cómo estaban las cosas antes de cambiar","La línea del medidor","El cargo fijo","El mínimo de consumo"], correcta: 0, explicacion: "Sirve para comparar. \"La línea del medidor\" tienta por la palabra." },
    { q: "La semana de la medición hubo una ola de calor. ¿Qué hacés?", opciones: ["Lo ignoro","Tiro la medición","Invento otro número","Lo anoto, porque explica diferencias"], correcta: 3, explicacion: "El clima cambia el consumo. Ignorarlo tienta, pero confunde la comparación." },
    { q: "Tenés poca plata para el plan. ¿Por dónde empezás?", opciones: ["Por cambiar la heladera","Por las costumbres gratis","Por un calefón nuevo","Por pintar la casa"], correcta: 1, explicacion: "Lo gratis ahorra sin gastar. La heladera tienta porque gasta mucho, pero es una inversión." },
    { q: "¿Cuál de estos cambios es barato?", opciones: ["Cambiar la heladera","Instalar un aire nuevo","Poner burletes","Cambiar el calefón"], correcta: 2, explicacion: "Cuesta poco y ahorra. El calefón tienta porque ahorra gas, pero es una inversión." },
    { q: "Tu meta es \"gastar menos\". ¿Qué le falta?", opciones: ["Que diga cuánto y para cuándo","Nada","Más palabras","Un dibujo"], correcta: 0, explicacion: "Una meta medible se puede comprobar. \"Nada\" tienta porque se entiende la idea." },
    { q: "Querés ahorrar gas y pensás tapar una rejilla. ¿Qué hacés?", opciones: ["La tapo solo de noche","La tapo a medias","La tapo en invierno","No: ningún ahorro justifica tapar rejillas"], correcta: 3, explicacion: "Las rejillas protegen del monóxido. Taparla a medias tienta, pero también es peligroso." },
    { q: "Si antes gastabas 8 kWh por día y ahora 6,4, ¿cuánto bajó?", opciones: ["Un 1,6%","Un 20%","Un 80%","Un 64%"], correcta: 1, explicacion: "(8 − 6,4) ÷ 8 = 0,2. 1,6% tienta si no dividís por 8." },
    { q: "Para medir después, ¿cómo lo hacés?", opciones: ["De cualquier forma","Solo mirando la boleta de otro mes","Igual que la primera vez: mismos días, misma hora, mismo método","Preguntando a un vecino"], correcta: 2, explicacion: "Así la comparación es justa. \"De cualquier forma\" tienta por rápido." },
    { q: "Si en el criterio Familia, solo vos hiciste los cambios, ¿cuántos puntos?", opciones: ["0","2","1","12"], correcta: 0, explicacion: "\"Solo vos\" es 0. 1 tienta, pero es para cuando participan algunos." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Abandono","Vuelvo a las costumbres de antes","Cambio la heladera ya","Mejoro el criterio más bajo el mes que viene"], correcta: 3, explicacion: "De 7 a 9, mejorá uno. Cambiar la heladera tienta, pero no es lo que falta." },
    { q: "Lograste ahorrar. ¿Cómo hacés que dure?", opciones: ["No mido más","Vuelvo a medir cada 3 meses","Mido una vez por década","Confío en la memoria"], correcta: 1, explicacion: "Medir mantiene la costumbre. No medir más tienta porque ya funcionó, pero se pierde." },
  ],
},
];
