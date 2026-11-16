// Temario del curso "Costos y precios: cuánto cobrar". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js costos-precios y node tools/metodologia.js costos-precios
window.TEMARIO = [
{
  id: "empezar",
  icono: "🏷️",
  titulo: "Por qué el precio importa",
  nivel: "Básico",
  objetivos: [
    "Reconocer los errores más comunes al poner precios",
    "Distinguir materiales, mano de obra y costos fijos",
    "Explicar por qué tu tiempo es un costo",
  ],
  lecciones: [
    { titulo: "Los errores más comunes", html: `
      <p class="idea">Muchos emprendimientos venden mucho y, aun así, pierden plata, porque el precio no cubre lo que cuesta hacer y vender el producto. La mayoría cae en los mismos errores.</p>
      <table>
        <tr><th>Error</th><th>Qué pasa</th></tr>
        <tr><td>Copiar el precio de otro</td><td>Sus costos no son los tuyos: puede ganar él y perder vos</td></tr>
        <tr><td>Contar solo los materiales</td><td>Tu trabajo y los gastos del mes quedan sin pagar</td></tr>
        <tr><td>Cobrar "lo que la gente paga" sin saber tu costo</td><td>No sabés si ganás o perdés</td></tr>
        <tr><td>No actualizar con la inflación</td><td>Cada mes ganás menos sin darte cuenta</td></tr>
        <tr><td>Olvidar comisiones y envíos</td><td>Lo que te llega es menos de lo que cobrás</td></tr>
      </table>
      <p><strong>El precio no es solo un número:</strong> también dice qué tipo de producto es. Un precio muy bajo puede hacer pensar que es de mala calidad.</p>
      <p>En todo el curso seguimos a <strong>Lucía</strong>, que hace velas aromáticas artesanales en frasco y las vende por redes y en ferias. Los números son inventados, pero las cuentas cierran.</p>
      <p>Por ejemplo, Lucía empezó cobrando $ 6.000 cada vela porque "así las vendía otra chica". Cuando hizo las cuentas de este curso, descubrió que cada vela le costaba $ 7.400.</p>` },
    { titulo: "Los tres tipos de costo", video: {"id":"wBPMAwKKSpg","t":"Aprendé a calcular el costo de tus productos · Secretaría de Industria y Desarrollo Productivo (3:21)"}, html: `
      <p class="idea">Para saber cuánto te cuesta cada producto, sumás tres cosas: los <strong>materiales</strong>, tu <strong>mano de obra</strong> y una parte de los <strong>costos fijos</strong> del mes.</p>
      <table>
        <tr><th>Tipo</th><th>Qué es</th><th>Ejemplo en las velas</th></tr>
        <tr><td>Materiales (o insumos)</td><td>Lo que se usa en cada unidad</td><td>Cera, mecha, esencia, frasco, etiqueta</td></tr>
        <tr><td>Mano de obra</td><td>El tiempo de trabajo que lleva cada unidad</td><td>20 minutos por vela</td></tr>
        <tr><td>Costos fijos</td><td>Gastos del mes que se pagan igual, vendas mucho o poco</td><td>Gas, internet, publicidad, cuota del monotributo</td></tr>
      </table>
      <pre><code>Costo total de una unidad =
  materiales + mano de obra + parte de los costos fijos</code></pre>
      <p><strong>Materiales y mano de obra</strong> cambian con cada unidad (son costos variables). Los <strong>fijos</strong> se reparten entre todas las unidades del mes (lo vas a ver en el módulo siguiente).</p>
      <p>Por ejemplo, el gas que usa Lucía para derretir la cera y el internet para publicar se pagan aunque un mes venda pocas velas: son costos fijos.</p>` },
    { titulo: "Tu tiempo también cuesta", html: `
      <p class="idea">Si no cobrás tu tiempo, el emprendimiento parece rentable, pero en realidad estás trabajando gratis. Tu mano de obra es un costo como cualquier otro.</p>
      <pre><code>Valor de tu hora = lo que querés ganar por mes / horas que trabajás por mes

Lucía quiere ganar 480.000 por mes y trabaja 80 horas:
480.000 / 80 = 6.000 por hora

Cada vela lleva 20 minutos (un tercio de hora):
6.000 / 3 = 2.000 de mano de obra por vela</code></pre>
      <table>
        <tr><th>Para calcular el tiempo</th><th>Cómo</th></tr>
        <tr><td>Medilo, no lo adivines</td><td>Hacé una tanda y dividí el tiempo por las unidades</td></tr>
        <tr><td>Contá todo el proceso</td><td>Preparar, hacer, esperar, limpiar, empaquetar</td></tr>
        <tr><td>No cuentes acá vender y publicar</td><td>Ese tiempo va en los costos fijos o en tu sueldo general</td></tr>
      </table>
      <p><strong>¿Cuánto vale tu hora?</strong> Una referencia es lo que ganarías en un empleo parecido. Si cobrás mucho menos, conviene revisar si el emprendimiento te conviene.</p>
      <p>Por ejemplo, Lucía midió una tanda de 12 velas: tardó 4 horas en total, o sea 20 minutos por vela. Antes creía que eran 5 minutos.</p>` },
  ],
  practica: [
    "Anotá cuál de los 5 errores comunes cometiste o viste en un emprendimiento y qué consecuencia tuvo.",
    "Hacé una tabla con los costos de un producto tuyo (o inventado) separados en materiales, mano de obra y costos fijos.",
    "Medí cuánto tardás en hacer una tanda de tu producto y anotá el tiempo por unidad y el valor de tu hora.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): calcular los costos para empezar (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" },
  ],
  quiz: [
    { q: "Si copiás el precio de otro emprendedor, ¿qué riesgo tenés?", opciones: ["Ninguno, es un precio probado","Vender demasiado","Que sus costos no sean los tuyos y vos pierdas plata","Que te copie él"], correcta: 2, explicacion: "El precio depende de tus costos. \"Es un precio probado\" tienta, pero tus materiales y tu tiempo son distintos." },
    { q: "Si calculás el precio contando solo los materiales, ¿qué queda sin pagar?", opciones: ["Tu trabajo y los gastos fijos del mes","Nada","Solo el envío","Los materiales"], correcta: 0, explicacion: "Faltan mano de obra y fijos. \"Nada\" tienta porque los materiales son lo que se ve, pero no es todo." },
    { q: "Si un precio es muy bajo, ¿qué puede pensar el cliente?", opciones: ["Que es el mejor","Nada","Que es importado","Que el producto es de mala calidad"], correcta: 3, explicacion: "El precio comunica. \"Que es el mejor\" tienta, pero un precio muy bajo suele generar desconfianza." },
    { q: "Si querés saber el costo total de una unidad, ¿qué sumás?", opciones: ["Solo los materiales","Materiales, mano de obra y una parte de los costos fijos","Solo los costos fijos","El precio de la competencia"], correcta: 1, explicacion: "Son los tres tipos. Solo materiales tienta por ser lo más fácil de calcular, pero se queda corto." },
    { q: "Si pagás internet igual vendas 10 o 100 velas, ¿qué tipo de costo es?", opciones: ["Material","Mano de obra","Costo fijo","Comisión"], correcta: 2, explicacion: "No cambia con las ventas. Material tienta porque es un gasto, pero no se usa en cada vela." },
    { q: "Si cada vela lleva un frasco, ¿qué tipo de costo es el frasco?", opciones: ["Material (costo variable)","Costo fijo","Mano de obra","No es un costo"], correcta: 0, explicacion: "Se usa uno por unidad. Fijo tienta si comprás muchos juntos, pero cada vela lleva el suyo." },
    { q: "Si no contás tu tiempo en el costo, ¿qué pasa?", opciones: ["Ganás más","Nada","Pagás menos impuestos","El emprendimiento parece rentable, pero trabajás gratis"], correcta: 3, explicacion: "Tu trabajo es un costo. \"Ganás más\" tienta por el número, pero es porque no te pagás." },
    { q: "Si querés ganar $ 480.000 por mes y trabajás 80 horas, ¿cuánto vale tu hora?", opciones: ["$ 600","$ 6.000","$ 38.400.000","$ 60.000"], correcta: 1, explicacion: "480.000 / 80 = 6.000. $ 60.000 tienta por un cero de más." },
    { q: "Si tu hora vale $ 6.000 y cada unidad lleva 20 minutos, ¿cuánto es la mano de obra por unidad?", opciones: ["$ 120.000","$ 6.000","$ 2.000","$ 300"], correcta: 2, explicacion: "20 minutos es un tercio de hora: 6.000 / 3 = 2.000. $ 120.000 tienta si multiplicás por 20." },
    { q: "Si querés saber cuánto tardás por unidad, ¿qué hacés?", opciones: ["Medís una tanda y dividís el tiempo por las unidades","Lo adivinás","Copiás lo que dice un video","Contás solo el tiempo más rápido"], correcta: 0, explicacion: "Medir da el dato real. Adivinar tienta por rápido, pero casi siempre se calcula de menos." },
    { q: "Si tardaste 4 horas en hacer 12 velas, ¿cuánto lleva cada una?", opciones: ["3 minutos","48 minutos","12 minutos","20 minutos"], correcta: 3, explicacion: "240 minutos / 12 = 20. 48 tienta si multiplicás en vez de dividir." },
    { q: "Si querés saber si tu hora está bien valorada, ¿con qué la comparás?", opciones: ["Con lo que gana un famoso","Con lo que ganarías en un empleo parecido","Con nada","Con el precio del dólar"], correcta: 1, explicacion: "El empleo parecido es una referencia real. \"Con nada\" tienta, pero te quedás sin saber si te conviene." },
  ],
},
{
  id: "costear",
  icono: "🧮",
  titulo: "La hoja de costos",
  nivel: "Básico",
  objetivos: [
    "Calcular el costo de los materiales de una unidad a partir de lo que comprás",
    "Repartir los costos fijos entre las unidades del mes",
    "Armar la hoja de costos completa de un producto",
  ],
  lecciones: [
    { titulo: "Materiales por unidad", html: `
      <p class="idea">Los materiales se compran en cantidad (un kilo, un litro, una caja), pero cada unidad usa solo una parte. La <strong>receta de costos</strong> calcula cuánto cuesta lo que usa una unidad.</p>
      <pre><code>Costo de lo que usa una unidad =
  precio de compra / cantidad comprada × cantidad que usa

Vela de Lucía:
Cera      8.000 por kilo (1.000 g), usa 200 g → 8.000 / 1.000 × 200 = 1.600
Mecha     150 cada una, usa 1                                     =   150
Esencia   12.000 por 100 ml, usa 10 ml → 12.000 / 100 × 10        = 1.200
Frasco    900 cada uno                                            =   900
Etiqueta y caja                                                   =   350
Materiales por vela                                               = 4.200</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Usá el precio de hoy, no el de cuando compraste</td><td>Con inflación, el viejo te deja corto para reponer</td></tr>
        <tr><td>Sumá el desperdicio</td><td>Si de cada kilo perdés 50 g, la cuenta cambia</td></tr>
        <tr><td>No te olvides de lo chico</td><td>Cinta, pegamento, bolsa: sumados pesan</td></tr>
      </table>
      <p>Por ejemplo, la esencia parece un gasto chico porque el frasco dura, pero en cada vela suma $ 1.200: casi un tercio de los materiales.</p>` },
    { titulo: "Repartir los costos fijos", video: {"id":"mP230FSTYZs","t":"Costos fijos y variables explicado para principiantes · Kotaro en Español (4:44)"}, html: `
      <p class="idea">Los costos fijos se pagan una vez por mes, pero cada unidad tiene que ayudar a pagarlos. Se reparten dividiendo el total del mes por las unidades que hacés en un mes normal.</p>
      <pre><code>Costos fijos de Lucía por mes:
Gas (parte de la cocina)     25.000
Internet y celular           20.000
Publicidad en redes          30.000
Cuota del monotributo        35.000
Moldes y herramientas         10.000
Total                       120.000

Hace unas 100 velas por mes:
120.000 / 100 = 1.200 de costos fijos por vela</code></pre>
      <table>
        <tr><th>Si hacés...</th><th>Costo fijo por unidad</th></tr>
        <tr><td>50 velas por mes</td><td>120.000 / 50 = 2.400</td></tr>
        <tr><td>100 velas por mes</td><td>120.000 / 100 = 1.200</td></tr>
        <tr><td>200 velas por mes</td><td>120.000 / 200 = 600</td></tr>
      </table>
      <p><strong>Usá un mes normal,</strong> no tu mejor mes: si calculás con 200 y vendés 100, los fijos no se cubren.</p>
      <p><strong>Las herramientas que duran</strong> (moldes, una olla) se reparten en los meses que van a durar: una olla de $ 120.000 que dura un año suma 10.000 por mes.</p>
      <p>Por ejemplo, la tabla muestra por qué los emprendimientos chicos tienen costos por unidad más altos: los fijos se reparten entre menos unidades.</p>` },
    { titulo: "La hoja de costos completa", html: `
      <p class="idea">La <strong>hoja de costos</strong> junta todo en un lugar: materiales, mano de obra y costos fijos por unidad. Es la base para poner el precio y conviene tenerla en una planilla.</p>
      <pre><code>HOJA DE COSTOS · Vela aromática en frasco (200 g)

Materiales                         4.200
Mano de obra (20 min × 6.000/h)    2.000
Costos fijos por unidad            1.200
─────────────────────────────────────────
COSTO TOTAL POR VELA               7.400</code></pre>
      <table>
        <tr><th>Qué te dice</th><th>Ejemplo</th></tr>
        <tr><td>El precio mínimo para no perder</td><td>Por debajo de $ 7.400, cada vela pierde plata</td></tr>
        <tr><td>Qué pesa más</td><td>Los materiales son más de la mitad del costo</td></tr>
        <tr><td>Dónde ahorrar</td><td>Comprar cera por mayor o frascos más baratos baja el costo</td></tr>
      </table>
      <p><strong>Una hoja por producto:</strong> si tenés velas de distintos tamaños, cada una tiene su hoja.</p>
      <p><strong>En una planilla,</strong> cuando cambia un precio de compra, el costo se actualiza solo. El curso "Excel y Google Sheets" de este sitio explica cómo armar fórmulas.</p>
      <p>Por ejemplo, con la hoja, Lucía entiende que cobrar $ 6.000 le hacía perder $ 1.400 por vela, aunque "vendía bien".</p>` },
  ],
  practica: [
    "Armá la receta de costos de los materiales de un producto, con precio de compra, cantidad comprada y cantidad que usa cada unidad. Anotá el total.",
    "Hacé la lista de tus costos fijos del mes y dividila por las unidades de un mes normal. Anotá el costo fijo por unidad.",
    "Armá la hoja de costos completa en una planilla y anotá el costo total por unidad y qué parte pesa más.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: costo de la mercadería vendida (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/cost-of-goods-sold/" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): calcular los costos para empezar (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" },
  ],
  quiz: [
    { q: "Si la cera cuesta $ 8.000 el kilo y cada vela usa 200 g, ¿cuánto cuesta la cera de una vela?", opciones: ["$ 8.000","$ 40","$ 1.600","$ 16.000"], correcta: 2, explicacion: "8.000 / 1.000 × 200 = 1.600. $ 8.000 tienta porque es el precio del kilo, pero usás solo 200 g." },
    { q: "Si la esencia cuesta $ 12.000 los 100 ml y cada vela usa 10 ml, ¿cuánto suma por vela?", opciones: ["$ 1.200","$ 120","$ 12.000","$ 1.000"], correcta: 0, explicacion: "12.000 / 100 × 10 = 1.200. $ 120 tienta si te comés un cero." },
    { q: "Si compraste cera hace 3 meses y hoy está más cara, ¿qué precio usás en la hoja de costos?", opciones: ["El de hace 3 meses","El promedio","El más barato que encuentres en internet","El de hoy, para poder reponerla"], correcta: 3, explicacion: "Tenés que poder volver a comprar. El viejo tienta porque es lo que pagaste, pero te deja corto." },
    { q: "Si de cada kilo de cera perdés un poco al trabajar, ¿qué hacés en la cuenta?", opciones: ["Nada","Sumás ese desperdicio al costo","Lo restás","Lo cobrás aparte al cliente"], correcta: 1, explicacion: "Lo que se pierde también se paga. \"Nada\" tienta porque es poco, pero se acumula." },
    { q: "Si tus costos fijos son $ 120.000 y hacés 100 velas por mes, ¿cuánto suma cada vela?", opciones: ["$ 120.000","$ 12.000","$ 1.200","$ 120"], correcta: 2, explicacion: "120.000 / 100 = 1.200. $ 12.000 tienta por un cero de más." },
    { q: "Si en vez de 100 velas hacés 50 por mes, ¿qué pasa con el costo fijo por vela?", opciones: ["Se duplica: $ 2.400","Baja a la mitad","No cambia","Desaparece"], correcta: 0, explicacion: "Los mismos fijos se reparten entre menos velas. \"No cambia\" tienta, pero el total del mes es el mismo." },
    { q: "Si querés repartir los costos fijos, ¿con qué cantidad de unidades calculás?", opciones: ["Con tu mejor mes","Con lo que te gustaría vender","Con 1 unidad","Con un mes normal, no con tu mejor mes"], correcta: 3, explicacion: "Con el mejor mes, los fijos quedan cortos. Tienta porque baja el costo, pero no se cumple todos los meses." },
    { q: "Si compraste una olla de $ 120.000 que dura un año, ¿cuánto suma por mes a los fijos?", opciones: ["$ 120.000","$ 10.000","$ 1.200","$ 12.000"], correcta: 1, explicacion: "120.000 / 12 meses = 10.000. $ 120.000 tienta porque es lo que pagaste, pero dura 12 meses." },
    { q: "Si sumás materiales $ 4.200, mano de obra $ 2.000 y fijos $ 1.200, ¿cuál es el costo total?", opciones: ["$ 6.200","$ 4.200","$ 7.400","$ 5.400"], correcta: 2, explicacion: "4.200 + 2.000 + 1.200 = 7.400. $ 6.200 tienta si te olvidás de los fijos." },
    { q: "Si tu costo total es $ 7.400 y vendés a $ 6.000, ¿qué pasa con cada venta?", opciones: ["Perdés $ 1.400 por unidad","Ganás $ 1.400","Quedás en cero","Ganás $ 6.000"], correcta: 0, explicacion: "6.000 - 7.400 = -1.400. \"Ganás\" tienta porque entra plata, pero no cubre el costo." },
    { q: "Si tenés velas de dos tamaños, ¿cuántas hojas de costos armás?", opciones: ["Una sola para todo","Ninguna","Una por mes","Una por cada producto"], correcta: 3, explicacion: "Cada producto usa distintos materiales y tiempo. Una sola tienta por simple, pero mezcla costos distintos." },
    { q: "Si querés que el costo se actualice solo cuando cambia un precio de compra, ¿dónde armás la hoja?", opciones: ["En un papel","En una planilla con fórmulas","De memoria","En un mensaje de WhatsApp"], correcta: 1, explicacion: "La planilla recalcula sola. El papel tienta por simple, pero hay que rehacer todas las cuentas." },
  ],
},
{
  id: "por-costo",
  icono: "➕",
  titulo: "Precio a partir del costo",
  nivel: "Intermedio",
  objetivos: [
    "Calcular un precio con recargo sobre el costo y con margen sobre el precio",
    "Sumar comisiones de cobro y de plataformas al precio",
    "Redondear el precio de forma clara",
  ],
  lecciones: [
    { titulo: "Recargo y margen no son lo mismo", video: {"id":"gabgrfiiHmI","t":"Cómo calcular el precio de venta de tu producto · Karla García (14:22)"}, html: `
      <p class="idea">La forma más común de poner un precio es sumarle una ganancia al costo. Pero "ganar un 40%" puede querer decir dos cosas distintas, y la diferencia es grande.</p>
      <pre><code>Costo total: 7.400

RECARGO del 40% sobre el costo:
precio = costo × 1,40 = 7.400 × 1,40 = 10.360
ganancia = 2.960, que es el 40% del COSTO
(y el 28,6% del precio)

MARGEN del 40% sobre el precio:
precio = costo / (1 - 0,40) = 7.400 / 0,60 = 12.333
ganancia = 4.933, que es el 40% del PRECIO</code></pre>
      <table>
        <tr><th></th><th>Recargo</th><th>Margen</th></tr>
        <tr><td>Se calcula sobre</td><td>El costo</td><td>El precio</td></tr>
        <tr><td>Fórmula</td><td>costo × (1 + recargo)</td><td>costo / (1 - margen)</td></tr>
        <tr><td>Con 40%, precio de la vela</td><td>10.360</td><td>12.333</td></tr>
      </table>
      <p><strong>Cuando alguien te diga "ganá un 40%",</strong> preguntá si es sobre el costo o sobre el precio.</p>
      <p>Por ejemplo, si Lucía cree que tiene un margen del 40%, pero en realidad aplicó un recargo del 40%, gana $ 2.960 por vela y no $ 4.933 como pensaba.</p>` },
    { titulo: "Comisiones y lo que te llega", html: `
      <p class="idea">Entre lo que paga el cliente y lo que te llega a vos hay descuentos: la comisión de la tarjeta, de la plataforma de venta o del medio de cobro. Si no los sumás, tu ganancia se achica.</p>
      <pre><code>Lucía quiere que le lleguen 10.400 por vela.
Vende por una plataforma que cobra 10% de comisión.

Si cobra 10.400: le llegan 10.400 × 0,90 = 9.360 (pierde 1.040)

Precio para que le lleguen 10.400:
10.400 / (1 - 0,10) = 10.400 / 0,90 = 11.556 → 11.600</code></pre>
      <table>
        <tr><th>Descuento sobre la venta</th><th>Dónde averiguarlo</th></tr>
        <tr><td>Comisión de la plataforma</td><td>En sus condiciones de venta</td></tr>
        <tr><td>Comisión del medio de cobro o de la tarjeta</td><td>En el resumen o en la app de cobro</td></tr>
        <tr><td>Cuotas "sin interés" que ofrecés</td><td>El costo lo pagás vos</td></tr>
        <tr><td>Ingresos Brutos u otros impuestos sobre la venta</td><td>Según tu provincia y tu régimen</td></tr>
      </table>
      <p><strong>Podés tener dos precios:</strong> uno en efectivo o transferencia y otro con tarjeta o por plataforma, si lo informás con claridad.</p>
      <p>Por ejemplo, vendiendo en la feria con transferencia a $ 10.400 y por la plataforma a $ 11.600, a Lucía le llega lo mismo por cada vela.</p>` },
    { titulo: "Redondear y presentar el precio", html: `
      <p class="idea">El precio calculado casi nunca es un número cómodo. Redondealo <strong>para arriba</strong>, a un número fácil de leer y de cobrar.</p>
      <table>
        <tr><th>Precio calculado</th><th>Redondeo</th><th>Por qué</th></tr>
        <tr><td>10.360</td><td>10.400 o 10.500</td><td>Fácil de leer y de dar el vuelto</td></tr>
        <tr><td>11.556</td><td>11.600</td><td>Para arriba, para no perder</td></tr>
        <tr><td>12.333</td><td>12.400 o 12.500</td><td>Número redondo en la lista</td></tr>
      </table>
      <pre><code>Lista de precios clara:
Vela aromática 200 g ............ $ 10.400
  (efectivo o transferencia)
Vela aromática 200 g ............ $ 11.600
  (por la tienda en línea)
Combo 3 velas ................... $ 29.000
Precios válidos hasta el 30/6.</code></pre>
      <p><strong>Poné una fecha de validez:</strong> con inflación, te protege si los costos suben.</p>
      <p><strong>Redondeá para arriba, no para abajo:</strong> varios redondeos a la baja, sumados, se comen la ganancia.</p>
      <p>Por ejemplo, el combo de 3 velas a $ 29.000 en lugar de $ 31.200 es un descuento pensado: Lucía vende más unidades por cliente y sigue por encima del costo (3 × 7.400 = 22.200).</p>` },
  ],
  practica: [
    "Calculá el precio de tu producto con un recargo del 40% sobre el costo y con un margen del 40% sobre el precio. Anotá los dos y la diferencia.",
    "Averiguá la comisión de un medio de cobro o plataforma que uses y calculá el precio para que te llegue lo mismo. Anotá ese precio.",
    "Armá tu lista de precios redondeados con fecha de validez y comprobá que ningún precio quede por debajo del costo. Anotá el más ajustado.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: recargo (markup) y margen (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/markup/" },
    { t: "Corporate Finance Institute: costo de la mercadería vendida (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/cost-of-goods-sold/" },
  ],
  quiz: [
    { q: "Si tu costo es $ 7.400 y aplicás un recargo del 40%, ¿cuál es el precio?", opciones: ["$ 12.333","$ 2.960","$ 10.360","$ 7.440"], correcta: 2, explicacion: "7.400 × 1,40 = 10.360. $ 12.333 tienta, pero es el margen sobre el precio." },
    { q: "Si tu costo es $ 7.400 y querés un margen del 40% sobre el precio, ¿cuál es el precio?", opciones: ["$ 12.333","$ 10.360","$ 4.440","$ 7.800"], correcta: 0, explicacion: "7.400 / 0,60 = 12.333. $ 10.360 tienta, pero es el recargo sobre el costo." },
    { q: "Si alguien te dice \"ganá un 40%\", ¿qué preguntás?", opciones: ["Nada, es lo mismo","Si es en dólares","Si incluye IVA siempre","Si es sobre el costo o sobre el precio"], correcta: 3, explicacion: "Recargo y margen dan precios distintos. \"Es lo mismo\" tienta, pero la diferencia es de miles de pesos." },
    { q: "Si aplicaste un recargo del 40%, ¿qué porcentaje del precio es tu ganancia?", opciones: ["40%","Alrededor del 28,6%","60%","14%"], correcta: 1, explicacion: "2.960 / 10.360 = 28,6%. El 40% tienta, pero es sobre el costo, no sobre el precio." },
    { q: "Si vendés a $ 10.400 por una plataforma que cobra 10%, ¿cuánto te llega?", opciones: ["$ 10.400","$ 11.440","$ 9.360","$ 1.040"], correcta: 2, explicacion: "10.400 × 0,90 = 9.360. $ 10.400 tienta porque es lo que paga el cliente, pero hay comisión." },
    { q: "Si querés que te lleguen $ 10.400 y la plataforma cobra 10%, ¿qué precio ponés?", opciones: ["Unos $ 11.600 (10.400 / 0,90)","$ 11.440 (10.400 × 1,10)","$ 10.400","$ 9.360"], correcta: 0, explicacion: "Hay que dividir por 0,90. Multiplicar por 1,10 tienta, pero te deja un poco corto." },
    { q: "Si ofrecés cuotas \"sin interés\", ¿quién paga ese costo?", opciones: ["Nadie","El banco gratis","El cliente sin saberlo","Vos, el que vende"], correcta: 3, explicacion: "El costo de las cuotas lo absorbe el vendedor. \"Nadie\" tienta por el nombre, pero tiene costo." },
    { q: "Si querés cobrar distinto en efectivo y con tarjeta, ¿qué tenés en cuenta?", opciones: ["No decir nada y cobrar más al final","Informar los dos precios con claridad","Esconder el precio de tarjeta","No se puede nunca"], correcta: 1, explicacion: "La claridad evita reclamos. Cobrar más al final tienta, pero el cliente se siente engañado." },
    { q: "Si el precio calculado da $ 11.556, ¿cómo lo redondeás?", opciones: ["Para abajo: $ 11.500","Lo dejás en 11.556","Para arriba: $ 11.600","A $ 11.000"], correcta: 2, explicacion: "Para arriba evita perder. Para abajo tienta por más atractivo, pero sumado se come la ganancia." },
    { q: "Si publicás tu lista de precios, ¿qué conviene agregar?", opciones: ["Una fecha de validez","Nada","El costo de cada producto","Tu sueldo"], correcta: 0, explicacion: "La validez te protege de la inflación. Mostrar el costo tienta por transparencia, pero no es necesario." },
    { q: "Si armás un combo de 3 velas a $ 29.000 y cada una cuesta $ 7.400, ¿estás por encima del costo?", opciones: ["No, perdés plata","Quedás en cero","No se puede saber","Sí: el costo de las 3 es $ 22.200"], correcta: 3, explicacion: "3 × 7.400 = 22.200, menos que 29.000. \"Perdés\" tienta porque es más barato que 3 sueltas, pero sigue cubriendo el costo." },
    { q: "Si redondeás todos los precios para abajo, ¿qué pasa?", opciones: ["Vendés más y ganás más siempre","Sumados, los redondeos se comen la ganancia","Nada","Pagás menos impuestos"], correcta: 1, explicacion: "Cada redondeo a la baja resta. \"Vendés más\" tienta, pero no siempre compensa." },
  ],
},
{
  id: "mercado",
  icono: "🔎",
  titulo: "Precio según el mercado y el valor",
  nivel: "Intermedio",
  objetivos: [
    "Relevar los precios de la competencia y ubicar tu producto",
    "Reconocer cuándo el cliente paga por el valor y no por el costo",
    "Combinar costo, mercado y valor para decidir el precio final",
  ],
  lecciones: [
    { titulo: "Mirar la competencia", html: `
      <p class="idea">El costo te dice el <strong>precio mínimo</strong>. El mercado te dice <strong>cuánto paga la gente</strong> por productos parecidos. Las dos cosas se miran juntas.</p>
      <table>
        <tr><th>Competidor</th><th>Producto</th><th>Precio</th><th>Diferencia con el tuyo</th></tr>
        <tr><td>Tienda de decoración</td><td>Vela 200 g, parafina</td><td>9.000</td><td>Parafina, menos aroma</td></tr>
        <tr><td>Emprendedora en redes</td><td>Vela 200 g, soja</td><td>12.000</td><td>Similar, caja simple</td></tr>
        <tr><td>Marca conocida</td><td>Vela 180 g, soja</td><td>14.000</td><td>Marca reconocida, más chica</td></tr>
      </table>
      <pre><code>Rango del mercado: 9.000 a 14.000
Costo de Lucía:    7.400
Su precio:         10.400 → en la parte baja-media del rango</code></pre>
      <p><strong>Compará productos parecidos:</strong> mismo tamaño, material y calidad. Una vela de parafina de 100 g no es la misma competencia.</p>
      <p><strong>Si tu costo está por encima del rango,</strong> hay que bajar costos, diferenciarte para cobrar más o repensar el producto.</p>
      <p>Por ejemplo, la tabla le muestra a Lucía que podría cobrar más que $ 10.400: hay quien vende algo parecido a $ 12.000.</p>` },
    { titulo: "El valor para el cliente", video: {"id":"6b7h9To3Y7E","t":"Estrategias de precio · De la idea a tu negocio (2:48)"}, html: `
      <p class="idea">A veces el cliente no paga por lo que cuesta hacer el producto, sino por lo que <strong>significa para él</strong>: un regalo especial, ahorrar tiempo, algo hecho a medida. Eso es el <strong>valor percibido</strong>.</p>
      <table>
        <tr><th>Mismo producto</th><th>Para quién</th><th>Precio posible</th></tr>
        <tr><td>Vela en frasco</td><td>Uso propio</td><td>10.400</td></tr>
        <tr><td>Vela en caja de regalo con tarjeta escrita</td><td>Regalo de cumpleaños</td><td>13.500</td></tr>
        <tr><td>Vela con logo, en caja personalizada</td><td>Regalo empresarial (50 unidades)</td><td>15.000 cada una</td></tr>
      </table>
      <p><strong>Qué sube el valor percibido:</strong> la presentación, la personalización, la historia del producto, la rapidez, la atención y las opiniones de otros clientes.</p>
      <p><strong>El costo extra suele ser chico:</strong> una caja de regalo y una tarjeta cuestan poco, pero cambian lo que el cliente está dispuesto a pagar.</p>
      <p>Por ejemplo, la caja de regalo le suma a Lucía $ 800 de costo, pero le permite cobrar $ 3.100 más por vela.</p>` },
    { titulo: "Juntar los tres métodos", html: `
      <p class="idea">El precio final sale de combinar los tres métodos: el <strong>costo</strong> pone el piso, el <strong>mercado</strong> da la referencia y el <strong>valor</strong> marca hasta dónde podés llegar.</p>
      <pre><code>Piso (costo total):            7.400   → nunca por debajo
Precio por costo (+40%):      10.360
Mercado (productos parecidos): 9.000 a 14.000
Valor (regalo con caja):      13.500

Decisión de Lucía:
- Vela simple:          10.900 (dentro del mercado, buen margen)
- Vela en caja regalo:  13.500 (por el valor percibido)</code></pre>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>Tu precio por costo está muy debajo del mercado</td><td>Podés subirlo: probablemente estás regalando ganancia</td></tr>
        <tr><td>Tu precio por costo está arriba del mercado</td><td>Bajá costos o diferenciate para justificarlo</td></tr>
        <tr><td>Hay un segmento que valora algo especial</td><td>Ofrecé una versión con más valor y otro precio</td></tr>
      </table>
      <p><strong>Probá y medí:</strong> si subís un precio, mirá cuántas ventas tenés en las semanas siguientes.</p>
      <p>Por ejemplo, Lucía sube la vela simple de $ 10.400 a $ 10.900 y en un mes vende casi la misma cantidad: ganó $ 500 más por vela sin perder clientes.</p>` },
  ],
  practica: [
    "Relevá al menos 3 precios de productos parecidos al tuyo y armá la tabla con producto, precio y diferencia. Anotá el rango del mercado.",
    "Pensá una versión de tu producto con más valor percibido (regalo, personalizado) y anotá cuánto suma al costo y a qué precio la venderías.",
    "Completá la tabla de los tres métodos (piso, costo, mercado, valor) y anotá tu precio final con el motivo.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: recargo (markup) y margen (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/markup/" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
  ],
  quiz: [
    { q: "Si querés saber cuánto paga la gente por productos parecidos al tuyo, ¿qué hacés?", opciones: ["Calculás solo tu costo","Le preguntás a tu familia","Relevás los precios de la competencia","Lo adivinás"], correcta: 2, explicacion: "El mercado se mira afuera. El costo tienta porque ya lo tenés, pero no dice cuánto paga la gente." },
    { q: "Si comparás tu vela de 200 g de soja con una de parafina de 100 g, ¿qué problema hay?", opciones: ["No son productos parecidos: la comparación engaña","Ninguno","Que la tuya es mejor seguro","Que la otra es más cara"], correcta: 0, explicacion: "Hay que comparar tamaño y material similares. \"Ninguno\" tienta porque las dos son velas, pero no son lo mismo." },
    { q: "Si el mercado va de $ 9.000 a $ 14.000 y tu costo es $ 7.400, ¿qué concluís?", opciones: ["Que tenés que cobrar $ 7.400","Que no podés vender","Que tenés que cobrar $ 20.000","Que hay espacio para un precio con buena ganancia"], correcta: 3, explicacion: "El costo está debajo del rango. $ 20.000 tienta para ganar más, pero queda fuera del mercado." },
    { q: "Si tu costo está por encima de lo que cobra el mercado, ¿qué hacés?", opciones: ["Vendés igual por debajo del costo","Bajás costos o te diferenciás para justificar un precio más alto","Copiás el precio y perdés","Nada"], correcta: 1, explicacion: "Vender por debajo del costo pierde plata. Copiar el precio tienta para vender, pero cada venta resta." },
    { q: "Si alguien compra una vela para regalar, ¿por qué puede pagar más?", opciones: ["Porque la vela cuesta más hacerla","Porque se equivocó","Por el valor percibido: presentación y lo que significa el regalo","No paga más nunca"], correcta: 2, explicacion: "El valor no es solo el costo. \"Cuesta más hacerla\" tienta, pero la caja suma poco al costo." },
    { q: "Si una caja de regalo cuesta $ 800 y te deja cobrar $ 3.100 más, ¿qué te conviene?", opciones: ["Ofrecer esa versión: suma mucho más de lo que cuesta","No ofrecerla","Regalar la caja","Cobrar solo $ 800 más"], correcta: 0, explicacion: "El valor percibido supera el costo extra. Cobrar solo $ 800 más tienta por justo, pero dejás plata en la mesa." },
    { q: "Si una empresa te pide 50 velas con su logo, ¿cómo pensás el precio?", opciones: ["Igual que la simple","Más barato porque son muchas, sin calcular","Gratis por la publicidad","Por el valor de un regalo empresarial personalizado, por encima del precio de la vela simple"], correcta: 3, explicacion: "La personalización tiene valor. \"Más barato porque son muchas\" tienta, pero sin calcular podés perder." },
    { q: "Si combinás los métodos, ¿qué pone el piso del precio?", opciones: ["La competencia","El costo total","El valor percibido","Tu intuición"], correcta: 1, explicacion: "Por debajo del costo perdés. La competencia tienta como piso, pero sus costos no son los tuyos." },
    { q: "Si tu precio por costo está muy por debajo del mercado, ¿qué puede estar pasando?", opciones: ["Que está perfecto","Que tenés que bajarlo más","Que estás regalando ganancia: podés subirlo","Que el mercado está mal"], correcta: 2, explicacion: "Hay margen para cobrar más. \"Está perfecto\" tienta, pero ganás menos de lo que podrías." },
    { q: "Si hay clientes que valoran algo especial, ¿qué ofrecés?", opciones: ["Una versión con más valor y otro precio","El mismo producto más caro sin cambios","Nada","Un descuento"], correcta: 0, explicacion: "Una versión distinta justifica el precio. Subir sin cambios tienta, pero el cliente no ve por qué." },
    { q: "Si subís un precio, ¿cómo sabés si funcionó?", opciones: ["Por intuición","Preguntando a un amigo","No se puede saber","Midiendo cuántas ventas tenés en las semanas siguientes"], correcta: 3, explicacion: "Las ventas muestran la respuesta. La intuición tienta, pero puede engañarte." },
    { q: "Si subiste de $ 10.400 a $ 10.900 y vendés casi lo mismo, ¿qué lograste?", opciones: ["Perder clientes","Ganar $ 500 más por unidad sin perder clientes","Nada","Ganar $ 10.900 más"], correcta: 1, explicacion: "10.900 - 10.400 = 500 por unidad. \"Perder clientes\" tienta por miedo, pero las ventas se mantuvieron." },
  ],
},
{
  id: "servicios",
  icono: "🧑‍💻",
  titulo: "Precios de servicios",
  nivel: "Intermedio",
  objetivos: [
    "Calcular una tarifa por hora que cubra tu sueldo y tus gastos",
    "Presupuestar un trabajo por proyecto con un margen para imprevistos",
    "Armar paquetes mensuales sin perder plata",
  ],
  lecciones: [
    { titulo: "Tu tarifa por hora", video: {"id":"g8olOTsslNU","t":"Cómo cobra un freelance: calcular tu tarifa · LearnFree en Español (4:20)"}, html: `
      <p class="idea">Si vendés un servicio (diseño, clases, arreglos, limpieza), lo que vendés es tu tiempo. La tarifa por hora tiene que cubrir tu sueldo y tus gastos, dividida por las horas que <strong>de verdad podés cobrar</strong>.</p>
      <pre><code>Tarifa por hora = (sueldo que querés + gastos del mes) / horas que cobrás por mes

Valeria, diseñadora gráfica:
Sueldo que quiere      900.000
Gastos (internet, programas, monotributo, equipo)  100.000
Total                1.000.000

Horas que cobra por mes: 80
(el resto del tiempo busca clientes, presupuesta, factura y aprende)

1.000.000 / 80 = 12.500 por hora</code></pre>
      <table>
        <tr><th>Error común</th><th>Por qué falla</th></tr>
        <tr><td>Dividir por 160 horas (8 por día)</td><td>No todas tus horas se cobran</td></tr>
        <tr><td>Olvidar vacaciones, días de enfermedad y aguinaldo</td><td>Esos meses también tenés que vivir</td></tr>
        <tr><td>Cobrar lo mismo que hace un año</td><td>Con inflación, ganás menos</td></tr>
      </table>
      <p>El curso "Monotributo, facturación e impuestos para independientes" de este sitio tiene un cálculo completo con vacaciones y aguinaldo.</p>
      <p>Por ejemplo, si Valeria dividiera por 160 horas, cobraría $ 6.250 la hora y, como solo factura 80, ganaría la mitad de lo que necesita.</p>` },
    { titulo: "Presupuestar por proyecto", html: `
      <p class="idea">Muchos clientes prefieren un precio cerrado por el trabajo completo. Para calcularlo, estimás las horas, las multiplicás por tu tarifa y sumás un margen para imprevistos.</p>
      <pre><code>Logo para un emprendimiento:
Reunión inicial                    1 h
Bocetos                            4 h
Ajustes (2 rondas)                 3 h
Archivos finales y manual chico    2 h
Total                             10 h

10 h × 12.500 = 125.000
Imprevistos +20% = 25.000
Presupuesto: 150.000</code></pre>
      <table>
        <tr><th>El presupuesto dice</th><th>Por qué</th></tr>
        <tr><td>Qué incluye (por ejemplo, 2 rondas de ajustes)</td><td>Pone un límite claro</td></tr>
        <tr><td>Qué no incluye y cuánto cuesta lo extra</td><td>Evita trabajar gratis</td></tr>
        <tr><td>Plazo de entrega</td><td>Ordena las expectativas</td></tr>
        <tr><td>Forma de pago (por ejemplo, 50% al empezar)</td><td>Te protege si el cliente desaparece</td></tr>
        <tr><td>Validez del presupuesto</td><td>Te protege de la inflación</td></tr>
      </table>
      <p><strong>Anotá las horas reales</strong> de cada trabajo: con el tiempo, tus estimaciones van a ser cada vez más precisas.</p>
      <p>Por ejemplo, si el cliente pide una cuarta ronda de cambios, el presupuesto que decía "2 rondas incluidas" le permite a Valeria cobrarla aparte, sin discutir.</p>` },
    { titulo: "Paquetes mensuales", html: `
      <p class="idea">Un <strong>paquete mensual</strong> es un servicio que se repite todos los meses por un precio fijo. Da ingresos más estables, pero hay que calcularlo bien para no trabajar de más.</p>
      <pre><code>Paquete de redes para un comercio:
12 publicaciones por mes, 1,5 h cada una = 18 h
Reunión mensual y ajustes                =  2 h
Total                                      20 h

20 h × 12.500 = 250.000

Con contrato de 3 meses: 230.000 por mes
(un 8% menos, a cambio de ingresos seguros)</code></pre>
      <table>
        <tr><th>Para que el paquete funcione</th></tr>
        <tr><td>Definí cuántas unidades incluye (12 publicaciones, 4 clases)</td></tr>
        <tr><td>Lo que excede se cobra aparte, con la tarifa por hora</td></tr>
        <tr><td>Revisá cada mes cuántas horas te llevó de verdad</td></tr>
        <tr><td>Actualizá el precio cada pocos meses, con aviso</td></tr>
      </table>
      <p><strong>Un descuento por compromiso</strong> tiene sentido si te ahorra tiempo de buscar clientes. No lo des sin pedir algo a cambio.</p>
      <p>Por ejemplo, si en la práctica el paquete le lleva a Valeria 30 horas en vez de 20, está cobrando $ 7.667 la hora: es momento de ajustar el precio o lo que incluye.</p>` },
  ],
  practica: [
    "Calculá tu tarifa por hora con tu sueldo deseado, tus gastos y las horas que de verdad podés cobrar. Anotá el resultado.",
    "Presupuestá un trabajo por proyecto: lista de tareas con horas, total, imprevistos y qué incluye. Anotá el precio final.",
    "Armá un paquete mensual con unidades incluidas, horas y precio, y anotá cuánto te queda por hora si te lleva un 50% más de lo calculado.",
  ],
  recursos: [
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): manejar las finanzas del negocio (en inglés)", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
  ],
  quiz: [
    { q: "Si querés ganar $ 900.000, tenés $ 100.000 de gastos y cobrás 80 horas por mes, ¿cuál es tu tarifa?", opciones: ["$ 6.250 por hora","$ 11.250 por hora","$ 12.500 por hora","$ 1.250 por hora"], correcta: 2, explicacion: "1.000.000 / 80 = 12.500. $ 6.250 tienta si dividís por 160 horas." },
    { q: "Si dividís tus necesidades por 160 horas, pero solo cobrás 80, ¿qué pasa?", opciones: ["Ganás la mitad de lo que necesitás","Ganás el doble","Nada","Ganás justo lo que necesitás"], correcta: 0, explicacion: "No todas tus horas se cobran. \"Nada\" tienta porque trabajás 160, pero solo facturás 80." },
    { q: "Si calculás tu tarifa, ¿qué tiempo no se cobra directamente?", opciones: ["El trabajo para el cliente","Nada, todo se cobra","Solo el almuerzo","Buscar clientes, presupuestar, facturar y aprender"], correcta: 3, explicacion: "Ese tiempo es necesario, pero nadie lo paga. \"Todo se cobra\" tienta, pero en la práctica no pasa." },
    { q: "Si estimás 10 horas para un logo y tu tarifa es $ 12.500, ¿cuánto es antes de imprevistos?", opciones: ["$ 12.500","$ 125.000","$ 150.000","$ 1.250"], correcta: 1, explicacion: "10 × 12.500 = 125.000. $ 150.000 tienta porque es con imprevistos." },
    { q: "Si a $ 125.000 le sumás 20% de imprevistos, ¿cuál es el presupuesto?", opciones: ["$ 145.000","$ 125.020","$ 150.000","$ 100.000"], correcta: 2, explicacion: "125.000 × 1,20 = 150.000. $ 145.000 tienta si sumás 20.000 en vez del 20%." },
    { q: "Si el cliente pide una cuarta ronda de cambios y el presupuesto incluía 2, ¿qué hacés?", opciones: ["La cobrás aparte, como dice el presupuesto","La hacés gratis","Te enojás","Abandonás el trabajo"], correcta: 0, explicacion: "El límite escrito te protege. Hacerla gratis tienta para quedar bien, pero trabajás sin cobrar." },
    { q: "Si querés protegerte de que el cliente desaparezca sin pagar, ¿qué ponés en el presupuesto?", opciones: ["Nada","Pago a 6 meses","Que pague cuando quiera","Un pago parcial al empezar, por ejemplo 50%"], correcta: 3, explicacion: "El adelanto reduce el riesgo. \"Cuando quiera\" tienta para conseguir el trabajo, pero arriesgás todo." },
    { q: "Si querés estimar mejor tus próximos trabajos, ¿qué hacés?", opciones: ["Seguís adivinando","Anotás las horas reales de cada trabajo","Cobrás siempre lo mismo","Preguntás a la competencia"], correcta: 1, explicacion: "Los datos reales mejoran las estimaciones. Seguir adivinando tienta por rápido, pero repetís errores." },
    { q: "Si un paquete de redes lleva 20 horas y tu tarifa es $ 12.500, ¿cuánto vale por mes?", opciones: ["$ 12.500","$ 25.000","$ 250.000","$ 2.500.000"], correcta: 2, explicacion: "20 × 12.500 = 250.000. $ 25.000 tienta por un cero de menos." },
    { q: "Si ofrecés un descuento por contrato de 3 meses, ¿qué tiene sentido?", opciones: ["Darlo a cambio de algo, como ingresos seguros","Darlo sin pedir nada","Darlo a todos siempre","No ofrecer paquetes nunca"], correcta: 0, explicacion: "El descuento se cambia por algo valioso. Darlo sin pedir nada tienta para cerrar la venta, pero perdés plata." },
    { q: "Si cobrás $ 230.000 por un paquete que te lleva 30 horas, ¿cuánto te queda por hora?", opciones: ["$ 12.500","$ 23.000","$ 6.900.000","Unos $ 7.667"], correcta: 3, explicacion: "230.000 / 30 = 7.667. $ 12.500 tienta porque es tu tarifa, pero el paquete se excedió." },
    { q: "Si un paquete te lleva más horas de las calculadas, ¿qué hacés?", opciones: ["Nada, ya está pactado para siempre","Ajustás el precio o lo que incluye","Trabajás más gratis","Lo abandonás sin avisar"], correcta: 1, explicacion: "El paquete se revisa con datos. \"Pactado para siempre\" tienta, pero cada mes perdés plata." },
  ],
},
{
  id: "ajustar",
  icono: "🔄",
  titulo: "Ajustar precios, descuentos y aumentos",
  nivel: "Avanzado",
  objetivos: [
    "Actualizar tus precios cuando suben los costos",
    "Calcular cuánto más tenés que vender para compensar un descuento",
    "Comunicar un aumento sin perder clientes",
  ],
  lecciones: [
    { titulo: "Cuando suben los costos", html: `
      <p class="idea">Con inflación, los costos suben cada mes. Si no actualizás tus precios, cada venta te deja menos. La hoja de costos te dice exactamente cuánto subir.</p>
      <pre><code>Subieron la cera (de 8.000 a 9.600 el kilo, +20%)
y la esencia (+10%):

Cera por vela:     1.600 → 1.920  (+320)
Esencia por vela:  1.200 → 1.320  (+120)
Materiales:        4.200 → 4.640
Costo total:       7.400 → 7.840  (+440)

Precio con el mismo recargo del 40%:
7.840 × 1,40 = 10.976 → 11.000</code></pre>
      <table>
        <tr><th>Hábito</th><th>Frecuencia</th></tr>
        <tr><td>Revisar los precios de compra de tus 3 insumos más caros</td><td>Cada mes</td></tr>
        <tr><td>Actualizar la hoja de costos</td><td>Cada vez que cambia un precio de compra</td></tr>
        <tr><td>Revisar tu lista de precios</td><td>Cada 1 a 3 meses, según la inflación</td></tr>
      </table>
      <p><strong>Para tener una referencia de la inflación general,</strong> el INDEC publica cada mes el índice de precios. Pero lo que importa es cuánto subieron <strong>tus</strong> costos.</p>
      <p>Por ejemplo, si Lucía no actualiza el precio de $ 10.400 cuando su costo pasa a $ 7.840, su ganancia por vela baja de $ 3.000 a $ 2.560 sin que se dé cuenta.</p>` },
    { titulo: "Cuánto cuesta un descuento", html: `
      <p class="idea">Un descuento sale de tu ganancia, no del costo. Por eso un descuento que parece chico obliga a vender mucho más para ganar lo mismo.</p>
      <pre><code>Vela a 10.900 · costo total 7.400 · ganancia 3.500

Con 15% de descuento:
Precio: 10.900 × 0,85 = 9.265
Ganancia: 9.265 - 7.400 = 1.865

Para ganar lo mismo que con 1 vela sin descuento:
3.500 / 1.865 = 1,88 → tenés que vender casi el doble</code></pre>
      <table>
        <tr><th>En vez de descuento, probá</th><th>Por qué</th></tr>
        <tr><td>Combo (3 velas por un precio)</td><td>Vendés más unidades por cliente</td></tr>
        <tr><td>Regalo de bajo costo (una vela chica)</td><td>Se siente generoso y cuesta poco</td></tr>
        <tr><td>Descuento por pago en efectivo o transferencia</td><td>Te ahorrás la comisión, así que el descuento casi no te cuesta</td></tr>
        <tr><td>Descuento con fecha de fin</td><td>No se vuelve el precio de siempre</td></tr>
      </table>
      <p><strong>Nunca un descuento que deje el precio por debajo del costo,</strong> salvo que sea una decisión pensada (liquidar algo que no se vende) y por poco tiempo.</p>
      <p>El curso "Números de un pequeño negocio" de este sitio sigue con el margen de contribución y el punto de equilibrio.</p>
      <p>Por ejemplo, un "15% en toda la tienda" en el Día de la Madre solo conviene si Lucía casi duplica las ventas de ese día.</p>` },
    { titulo: "Comunicar un aumento", html: `
      <p class="idea">Subir los precios da miedo, pero no subirlos te hace perder plata todos los meses. Comunicado bien, la mayoría de los clientes lo entiende.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Avisar con anticipación a los clientes fijos (1 o 2 semanas)</td><td>Cambiar el precio de golpe en medio de un pedido</td></tr>
        <tr><td>Explicar en una frase el motivo (subieron los insumos)</td><td>Pedir perdón de más o dar explicaciones largas</td></tr>
        <tr><td>Aumentos chicos y frecuentes</td><td>Un aumento enorme una vez por año</td></tr>
        <tr><td>Respetar los presupuestos ya enviados mientras estén vigentes</td><td>Cambiar un precio ya acordado</td></tr>
      </table>
      <pre><code>Mensaje de ejemplo:
"Hola, Marta. Te aviso que desde el 1 de julio las velas pasan
a $ 11.000, porque subieron la cera y las esencias.
Si querés hacer un pedido antes, lo tomo con el precio actual.
¡Gracias por seguir eligiéndonos!"</code></pre>
      <p><strong>Si perdés algún cliente por el aumento,</strong> revisá: a veces es un cliente que solo compraba por precio y no te dejaba ganancia.</p>
      <p>Por ejemplo, el aviso con la opción de comprar antes al precio actual hace que muchos clientes adelanten pedidos: Lucía vende más ese mes y nadie se siente sorprendido.</p>` },
  ],
  practica: [
    "Actualizá la hoja de costos con los precios de compra de hoy y anotá el costo nuevo y el precio con tu mismo recargo.",
    "Calculá cuántas unidades más tendrías que vender con un descuento del 10% y del 20% sobre tu precio actual. Anotá los dos números.",
    "Escribí el mensaje para avisar un aumento a tus clientes fijos, con fecha, nuevo precio y motivo. Anotá cuántos días de anticipación vas a dar.",
  ],
  recursos: [
    { t: "INDEC: índice de precios al consumidor (inflación)", url: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-5-31" },
    { t: "Corporate Finance Institute: recargo (markup) y margen (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/markup/" },
  ],
  quiz: [
    { q: "Si la cera sube de $ 8.000 a $ 9.600 el kilo y la vela usa 200 g, ¿cuánto suma ahora por vela?", opciones: ["$ 1.600","$ 9.600","$ 1.920","$ 320"], correcta: 2, explicacion: "9.600 / 1.000 × 200 = 1.920. $ 320 tienta porque es la diferencia, no el total." },
    { q: "Si tu costo pasa a $ 7.840 y aplicás el mismo recargo del 40%, ¿cuál es el nuevo precio?", opciones: ["Unos $ 11.000 (10.976)","$ 10.400","$ 7.840","$ 12.000 exacto"], correcta: 0, explicacion: "7.840 × 1,40 = 10.976. $ 10.400 tienta porque es el precio viejo, pero ya no cubre igual." },
    { q: "Si tu costo sube y no cambiás el precio, ¿qué pasa?", opciones: ["Nada","Ganás más","Vendés el doble","Ganás menos por cada venta sin darte cuenta"], correcta: 3, explicacion: "La ganancia se achica. \"Nada\" tienta porque el precio es el mismo, pero el costo no." },
    { q: "Si querés una referencia de la inflación general en Argentina, ¿dónde la buscás?", opciones: ["En el precio de un solo producto","En el índice de precios del INDEC","En redes sociales","En lo que dice un vecino"], correcta: 1, explicacion: "El INDEC publica el índice oficial. Un solo producto tienta por simple, pero no representa la inflación." },
    { q: "Si querés saber cuánto subir tus precios, ¿qué mirás primero?", opciones: ["Solo la inflación general","Lo que subió la competencia","Cuánto subieron tus propios costos","Nada"], correcta: 2, explicacion: "Tus costos son los que importan. La inflación general tienta, pero tus insumos pueden subir más o menos." },
    { q: "Si una vela a $ 10.900 tiene 15% de descuento, ¿a cuánto la vendés?", opciones: ["$ 9.265","$ 9.400","$ 1.635","$ 12.535"], correcta: 0, explicacion: "10.900 × 0,85 = 9.265. $ 12.535 tienta si sumás el 15%." },
    { q: "Si con descuento ganás $ 1.865 en vez de $ 3.500, ¿cuántas veces más tenés que vender?", opciones: ["15% más","Lo mismo","10 veces más","Casi el doble (1,88 veces)"], correcta: 3, explicacion: "3.500 / 1.865 = 1,88. \"15% más\" tienta porque es el descuento, pero la ganancia bajó casi a la mitad." },
    { q: "Si querés atraer clientes sin regalar ganancia, ¿qué probás en vez de un descuento grande?", opciones: ["50% de descuento","Un combo o un regalo de bajo costo","Vender por debajo del costo","Bajar todos los precios para siempre"], correcta: 1, explicacion: "Combos y regalos cuidan la ganancia. El 50% tienta por llamativo, pero casi no deja nada." },
    { q: "Si das un descuento por pago con transferencia, ¿por qué casi no te cuesta?", opciones: ["Porque es ilegal","Porque el banco lo paga","Porque te ahorrás la comisión de la tarjeta o la plataforma","Porque no hay costo nunca"], correcta: 2, explicacion: "Lo que descontás es parecido a la comisión que no pagás. \"El banco lo paga\" tienta, pero no es así." },
    { q: "Si vas a subir los precios, ¿cómo avisás a los clientes fijos?", opciones: ["Con 1 o 2 semanas de anticipación y el motivo en una frase","El mismo día, sin explicar","Con un mensaje de 3 párrafos pidiendo perdón","No avisás"], correcta: 0, explicacion: "Anticipar y explicar breve funciona. No avisar tienta para evitar el mal momento, pero el cliente se sorprende." },
    { q: "Si ya mandaste un presupuesto vigente y suben tus costos, ¿qué hacés?", opciones: ["Le cambiás el precio","Lo anulás sin avisar","Cobrás la diferencia sin decir","Lo respetás mientras esté vigente"], correcta: 3, explicacion: "Lo acordado se respeta. Cambiarlo tienta por los costos, pero rompe la confianza." },
    { q: "Si conviene subir, ¿qué es mejor: aumentos chicos frecuentes o uno enorme por año?", opciones: ["Uno enorme por año","Aumentos chicos y frecuentes","Ninguno","Da lo mismo"], correcta: 1, explicacion: "Los chicos se aceptan mejor. El enorme tienta para no molestar seguido, pero asusta y mientras tanto perdés plata." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu lista de precios",
  nivel: "Avanzado",
  objetivos: [
    "Armar la hoja de costos y la lista de precios de tus productos o servicios",
    "Evaluarla con una rúbrica y corregir lo que falte",
    "Definir cada cuánto la vas a revisar",
  ],
  lecciones: [
    { titulo: "El encargo", video: {"id":"4T02IMZQdY8","t":"¿No sabés cuánto cobrar por tus artesanías? Guía paso a paso · tinagus (26:27)"}, html: `
      <p class="idea">El proyecto final es tu <strong>lista de precios con respaldo</strong>: para cada producto o servicio, su hoja de costos, el precio calculado y el precio final con su motivo.</p>
      <table>
        <tr><th>Parte</th><th>Módulo</th></tr>
        <tr><td>Valor de tu hora</td><td>Por qué el precio importa</td></tr>
        <tr><td>Hoja de costos de al menos 3 productos o servicios</td><td>La hoja de costos</td></tr>
        <tr><td>Precio por costo, con comisiones y redondeo</td><td>Precio a partir del costo</td></tr>
        <tr><td>Tabla de competencia y decisión final</td><td>Precio según el mercado y el valor</td></tr>
        <tr><td>Tarifa, presupuesto o paquete (si vendés servicios)</td><td>Precios de servicios</td></tr>
        <tr><td>Plan de actualización y mensaje de aumento</td><td>Ajustar precios</td></tr>
      </table>
      <pre><code>Resumen de Lucía:
Producto            Costo   Precio   Ganancia   Rango del mercado
Vela simple 200 g   7.840   11.000   3.160      9.000 a 14.000
Vela caja regalo    8.640   13.500   4.860      12.000 a 16.000
Combo 3 velas      23.520   30.000   6.480      —</code></pre>
      <p>Por ejemplo, con el resumen, Lucía ve de un vistazo que la caja de regalo es su producto más rentable y decide mostrarla primero en sus redes.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu lista de precios.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Costos</td><td>Materiales, mano de obra y fijos, con precios de hoy</td><td>Falta uno de los tres</td><td>Solo materiales</td></tr>
        <tr><td>Cálculo del precio</td><td>Recargo o margen bien aplicado, con comisiones</td><td>Sin comisiones</td><td>Precio sin cálculo</td></tr>
        <tr><td>Mercado</td><td>Al menos 3 competidores parecidos</td><td>Menos de 3 o no comparables</td><td>No hay</td></tr>
        <tr><td>Presentación</td><td>Precios redondeados, con fecha de validez y formas de pago</td><td>Falta algo</td><td>Desordenada</td></tr>
        <tr><td>Actualización</td><td>Cada cuánto se revisa y mensaje de aumento</td><td>Solo uno</td><td>No hay</td></tr>
        <tr><td>Precio sobre el costo</td><td>Todos los precios cubren el costo total</td><td>—</td><td>Algún precio queda por debajo del costo sin una decisión pensada</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarla
Regla: si "Precio sobre el costo" tiene 0, la lista no está lista,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, una lista prolija con un producto a $ 6.000 que cuesta $ 7.400 saca 0 en ese criterio: cada venta de ese producto pierde plata.</p>` },
    { titulo: "Revisar y seguir aprendiendo", html: `
      <p class="idea">Una lista de precios no se arma una vez: se revisa. Con una rutina corta, tus precios siguen cubriendo tus costos aunque todo suba.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué hacer</th><th>Tiempo</th></tr>
        <tr><td>Cada mes</td><td>Revisar precios de compra de los 3 insumos más caros</td><td>15 minutos</td></tr>
        <tr><td>Cuando cambia un costo</td><td>Actualizar la hoja de costos</td><td>5 minutos</td></tr>
        <tr><td>Cada 1 a 3 meses</td><td>Revisar la lista de precios y avisar aumentos</td><td>30 minutos</td></tr>
        <tr><td>Cada 6 meses</td><td>Volver a relevar la competencia</td><td>1 hora</td></tr>
      </table>
      <p><strong>Seguir aprendiendo:</strong> el curso "Números de un pequeño negocio" de este sitio sigue con el estado de resultados, el punto de equilibrio y el flujo de caja; el portal de capacitación del Estado tiene cursos gratis para emprendedores.</p>
      <p><strong>Anotá lo que pasa con cada cambio de precio:</strong> qué subiste, cuándo y cómo reaccionaron las ventas. Con el tiempo, sabés hasta dónde podés llegar.</p>
      <p>Por ejemplo, 15 minutos por mes de revisión evitan que Lucía descubra, 6 meses después, que estuvo vendiendo velas casi al costo.</p>` },
  ],
  practica: [
    "Armá tu lista de precios con las 6 partes del encargo y el resumen de costo, precio, ganancia y rango del mercado. Anotá cuál es tu producto más rentable.",
    "Evaluá tu lista con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Poné en tu calendario las 4 revisiones de la rutina y anotá la fecha de la primera.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): manejar las finanzas del negocio (en inglés)", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { t: "Corporate Finance Institute: recargo (markup) y margen (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/markup/" },
  ],
  quiz: [
    { q: "Si armás tu lista de precios final, ¿qué tiene que incluir?", opciones: ["Solo los precios","Solo los costos","Hojas de costos, precio calculado, competencia, presentación y plan de actualización","Solo la competencia"], correcta: 2, explicacion: "La lista con respaldo junta todo el curso. Solo los precios tienta por simple, pero no sabés si cubren el costo." },
    { q: "Si la vela en caja cuesta $ 8.640 y la vendés a $ 13.500, ¿cuánto ganás por unidad?", opciones: ["$ 4.860","$ 13.500","$ 5.860","$ 22.140"], correcta: 0, explicacion: "13.500 - 8.640 = 4.860. $ 5.860 tienta por un error de resta." },
    { q: "Si un combo de 3 velas cuesta $ 23.520 y lo vendés a $ 30.000, ¿cuánto ganás?", opciones: ["$ 30.000","$ 7.480","$ 2.160","$ 6.480"], correcta: 3, explicacion: "30.000 - 23.520 = 6.480. $ 7.480 tienta por un error de resta." },
    { q: "Si calculaste los costos solo con materiales, ¿cuánto sacás en \"Costos\"?", opciones: ["2 puntos","0 puntos","1 punto","No se evalúa"], correcta: 1, explicacion: "Solo materiales es 0. Sacar 1 tienta si los calculaste bien, pero faltan dos tipos de costo." },
    { q: "Si aplicaste bien el recargo, pero sin sumar comisiones, ¿cuánto sacás en \"Cálculo del precio\"?", opciones: ["2 puntos","0 puntos","1 punto","3 puntos"], correcta: 2, explicacion: "Faltan las comisiones. Sacar 2 tienta porque el recargo está bien, pero lo que te llega es menos." },
    { q: "Si comparaste con 2 competidores, ¿cuánto sacás en \"Mercado\"?", opciones: ["1 punto","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "La rúbrica pide al menos 3. Sacar 2 tienta porque hay comparación, pero es poca." },
    { q: "Si tu lista suma 11, pero un producto se vende por debajo del costo sin motivo, ¿está lista?", opciones: ["Sí, 11 es listo","Sí, si vende mucho","Depende del mes","No: \"Precio sobre el costo\" tiene 0 y eso no se compensa con el total"], correcta: 3, explicacion: "La regla lo dice. \"Si vende mucho\" tienta, pero cuanto más vende, más pierde." },
    { q: "Si tu lista saca 8, ¿qué hacés?", opciones: ["La das por terminada","Mejorás lo que sacó 0 o 1","Bajás todos los precios","Cambiás la rúbrica"], correcta: 1, explicacion: "De 7 a 10 se mejora lo flojo. Bajar precios tienta para vender más, pero no arregla el problema." },
    { q: "Si el resumen muestra que la caja de regalo deja más ganancia, ¿qué podés decidir?", opciones: ["Dejar de venderla","Bajarle el precio al costo","Mostrarla primero y empujar su venta","Nada"], correcta: 2, explicacion: "El producto más rentable conviene destacarlo. \"Nada\" tienta, pero desaprovechás el dato." },
    { q: "Si querés que tus precios sigan cubriendo los costos, ¿cada cuánto revisás los insumos más caros?", opciones: ["Cada mes","Cada 2 años","Nunca","Solo cuando un cliente se queja"], correcta: 0, explicacion: "Con inflación, cada mes cuenta. Cada 2 años tienta por cómodo, pero perdés plata mientras tanto." },
    { q: "Si cambiás un precio, ¿qué anotás?", opciones: ["Nada","Solo el precio nuevo","Quién se quejó","Qué subiste, cuándo y cómo reaccionaron las ventas"], correcta: 3, explicacion: "El registro te enseña hasta dónde llegar. \"Solo el precio nuevo\" tienta, pero no aprendés del efecto." },
    { q: "Si querés seguir con punto de equilibrio y flujo de caja, ¿qué curso del sitio hacés?", opciones: ["\"Portugués básico\"","\"Números de un pequeño negocio\"","\"Git y GitHub desde cero\"","Ninguno"], correcta: 1, explicacion: "Ese curso sigue desde acá. Los otros tientan porque están en el sitio, pero son de otros temas." },
  ],
},
];
