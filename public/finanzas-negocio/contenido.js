// Temario del curso "Números de un pequeño negocio". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js finanzas-negocio y node tools/metodologia.js finanzas-negocio
window.TEMARIO = [
{
  id: "resultados",
  icono: "📊",
  titulo: "¿Gana plata tu negocio?",
  nivel: "Básico",
  objetivos: [
    "Separar las cuentas del negocio de las personales",
    "Armar un estado de resultados mensual y calcular el margen",
    "Distinguir ganancia de plata en la caja",
  ],
  lecciones: [
    { titulo: "Separar la plata", html: `
      <p class="idea">El primer paso para saber si un negocio gana plata es que su plata no se mezcle con la tuya. Si pagás el súper con la caja del negocio, nunca vas a saber cuánto deja.</p>
      <table>
        <tr><th>Hábito</th><th>Por qué</th></tr>
        <tr><td>Una cuenta solo para el negocio</td><td>Todo lo que entra y sale queda registrado</td></tr>
        <tr><td>Un sueldo fijo para vos</td><td>Te pagás una vez por mes, como un gasto más del negocio</td></tr>
        <tr><td>Anotar cada gasto con comprobante</td><td>Sin registro, los gastos chicos desaparecen</td></tr>
        <tr><td>No sacar plata "porque hay"</td><td>La plata en la caja puede ser de proveedores o impuestos que todavía no pagaste</td></tr>
      </table>
      <p><strong>Tu sueldo es un costo:</strong> si no lo contás, el negocio parece ganar más de lo que gana. Un negocio que solo "da ganancia" porque el dueño trabaja gratis, en realidad no da ganancia.</p>
      <p>Este curso es para quien ya vende. Si recién empezás, los cursos "Costos y precios" y "Las cuentas del emprendimiento" de este sitio van primero.</p>
      <p>En todo el curso seguimos el mismo negocio de ejemplo, un taller de pastelería, con números inventados, para que puedas ver cómo se conectan las cuentas de un módulo con las del siguiente.</p>
      <p>Por ejemplo, la dueña del taller retira $ 400.000 por mes como sueldo, siempre el día 5, en lugar de sacar plata cada vez que le hace falta.</p>` },
    { titulo: "El estado de resultados", video: {"id":"3rBpqzoW12o","t":"Estado de resultados explicado para no contadores · Kotaro en Español (5:39)"}, html: `
      <p class="idea">El <strong>estado de resultados</strong> muestra, para un período (un mes, un año), cuánto vendiste, cuánto te costó y cuánto quedó. Responde la pregunta "¿gana plata mi negocio?".</p>
      <pre><code>Taller de pastelería · mes de marzo

Ventas                                    3.000.000
- Costo de lo vendido (insumos, envases) - 1.200.000
= Margen bruto                            1.800.000  (60%)
- Gastos fijos
    Alquiler                    500.000
    Luz, gas e internet         150.000
    Sueldo del ayudante         600.000
    Sueldo de la dueña          400.000
                                          - 1.650.000
= Resultado operativo                       150.000
- Impuestos                                -  80.000
= Resultado neto                             70.000  (2,3% de las ventas)</code></pre>
      <table>
        <tr><th>Indicador</th><th>Cómo se calcula</th></tr>
        <tr><td>Margen bruto %</td><td>Margen bruto / ventas × 100</td></tr>
        <tr><td>Margen neto %</td><td>Resultado neto / ventas × 100</td></tr>
      </table>
      <p><strong>Un margen neto chico es una alarma:</strong> con 2,3%, cualquier suba de costos lleva al negocio a perder plata.</p>
      <p>Por ejemplo, si el alquiler sube $ 100.000, el resultado neto de $ 70.000 pasa a ser una pérdida de $ 30.000.</p>` },
    { titulo: "Ganancia no es caja", html: `
      <p class="idea">Un negocio puede ganar plata en el estado de resultados y, al mismo tiempo, no tener plata para pagar. La <strong>ganancia</strong> mide lo que vendiste y lo que costó; la <strong>caja</strong> mide lo que efectivamente entró y salió.</p>
      <table>
        <tr><th>Situación</th><th>Estado de resultados</th><th>Caja</th></tr>
        <tr><td>Vendiste a 30 días</td><td>Cuenta como venta este mes</td><td>Entra el mes que viene</td></tr>
        <tr><td>Compraste insumos para 2 meses</td><td>Cuenta lo que usaste</td><td>Sale todo ahora</td></tr>
        <tr><td>Pagaste una máquina</td><td>Se reparte en los años que dura</td><td>Sale todo el día que la pagás</td></tr>
        <tr><td>Pediste un préstamo</td><td>No es una venta</td><td>Entra plata</td></tr>
      </table>
      <p><strong>Por eso hacen falta las dos miradas:</strong> el estado de resultados dice si el negocio sirve; el flujo de caja (módulo "La caja") dice si vas a poder pagar el mes que viene.</p>
      <p>Por ejemplo, el taller vende $ 3.000.000 en marzo, pero un cliente grande paga $ 1.000.000 recién en abril: en marzo ganó plata y, aun así, puede quedarse corto para pagar el alquiler.</p>` },
  ],
  practica: [
    "Anotá durante una semana cada gasto del negocio y cada retiro personal en dos columnas separadas. Compará los totales.",
    "Armá el estado de resultados de un mes de tu negocio (o uno inventado) con ventas, costo de lo vendido, gastos fijos e impuestos. Anotá el margen bruto % y el margen neto %.",
    "Anotá 3 situaciones de tu negocio en las que la ganancia y la caja no coinciden, con el monto de cada una.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: el estado de resultados (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/income-statement/" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): manejar las finanzas del negocio (en inglés)", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
  ],
  quiz: [
    { q: "Si pagás gastos personales con la caja del negocio, ¿qué problema tenés?", opciones: ["Ninguno, es tu plata","Pagás menos impuestos","No podés saber cuánto gana realmente el negocio","El negocio gana más"], correcta: 2, explicacion: "Mezclar cuentas esconde el resultado. \"Es tu plata\" tienta, pero parte de esa caja es de proveedores e impuestos." },
    { q: "Si el negocio da ganancia solo porque no te pagás sueldo, ¿qué concluís?", opciones: ["Que en realidad no da ganancia: tu sueldo es un costo","Que es un buen negocio","Que hay que subir los precios a la mitad","Que el sueldo no cuenta"], correcta: 0, explicacion: "Tu trabajo vale. \"Es un buen negocio\" tienta por el número, pero trabajás gratis." },
    { q: "Si querés saber cuánto vendiste, cuánto costó y cuánto quedó en un mes, ¿qué armás?", opciones: ["El flujo de caja","Una lista de clientes","El inventario","El estado de resultados"], correcta: 3, explicacion: "El estado de resultados responde eso. El flujo de caja tienta, pero mide lo que entró y salió, no la ganancia." },
    { q: "Si vendiste $ 3.000.000 y el costo de lo vendido fue $ 1.200.000, ¿cuál es el margen bruto?", opciones: ["$ 1.200.000, un 40%","$ 1.800.000, un 60%","$ 4.200.000","$ 150.000"], correcta: 1, explicacion: "3.000.000 - 1.200.000 = 1.800.000 / 3.000.000 = 60%. El 40% tienta porque es el costo, no el margen." },
    { q: "Si al margen bruto de $ 1.800.000 le restás $ 1.650.000 de gastos fijos, ¿qué obtenés?", opciones: ["El resultado neto: $ 150.000","Las ventas","El resultado operativo: $ 150.000","El margen bruto"], correcta: 2, explicacion: "Antes de impuestos es el resultado operativo. Neto tienta, pero faltan los impuestos." },
    { q: "Si el resultado neto es $ 70.000 sobre ventas de $ 3.000.000, ¿cuál es el margen neto?", opciones: ["Cerca del 2,3%","70%","23%","0,23%"], correcta: 0, explicacion: "70.000 / 3.000.000 × 100 = 2,33%. El 23% tienta por un cero de más." },
    { q: "Si tu margen neto es 2,3% y el alquiler sube $ 100.000, ¿qué pasa en el ejemplo?", opciones: ["Seguís ganando $ 70.000","Ganás $ 170.000","No cambia nada","Pasás a perder $ 30.000"], correcta: 3, explicacion: "70.000 - 100.000 = -30.000. \"Seguís ganando\" tienta, pero con margen chico cualquier suba te lleva a pérdida." },
    { q: "Si vendiste a 30 días, ¿cuándo entra la plata a la caja?", opciones: ["Hoy","El mes que viene, aunque la venta cuente este mes en el resultado","Nunca","Cuando quieras"], correcta: 1, explicacion: "La venta y el cobro pueden estar en meses distintos. \"Hoy\" tienta porque ya vendiste, pero todavía no cobraste." },
    { q: "Si pedís un préstamo de $ 1.000.000, ¿es una venta en el estado de resultados?", opciones: ["Sí, es ganancia","Sí, es margen bruto","No: entra plata a la caja, pero no es una venta ni una ganancia","Sí, si es en dólares"], correcta: 2, explicacion: "Un préstamo hay que devolverlo. \"Es ganancia\" tienta porque entra plata, pero es una deuda." },
    { q: "Si pagaste una máquina de contado, ¿cómo aparece en la caja y en el resultado?", opciones: ["Sale toda la plata de la caja, pero el costo se reparte en los años que dura","Igual en los dos","No aparece en ninguno","Solo en el resultado"], correcta: 0, explicacion: "La caja la ve entera; el resultado la reparte. \"Igual en los dos\" tienta por simple, pero miden cosas distintas." },
    { q: "Si el estado de resultados da ganancia y no tenés plata para el alquiler, ¿qué puede estar pasando?", opciones: ["Que el estado de resultados está mal seguro","Que alguien te roba","Que no vendiste nada","Que vendiste, pero todavía no cobraste, o compraste stock por adelantado"], correcta: 3, explicacion: "Ganancia y caja no coinciden siempre. \"Está mal seguro\" tienta, pero suele ser un tema de tiempos." },
    { q: "Si querés saber si vas a poder pagar el mes que viene, ¿qué mirás además del resultado?", opciones: ["Solo el margen bruto","El flujo de caja","El precio de un producto","Nada más"], correcta: 1, explicacion: "El flujo de caja muestra los pagos y cobros futuros. El margen bruto tienta, pero no dice cuándo entra la plata." },
  ],
},
{
  id: "margen",
  icono: "🧁",
  titulo: "Costos fijos, variables y margen de contribución",
  nivel: "Intermedio",
  objetivos: [
    "Clasificar los costos de tu negocio en fijos y variables",
    "Calcular el margen de contribución por unidad y en porcentaje",
    "Comparar productos según cuánto deja cada uno",
  ],
  lecciones: [
    { titulo: "Fijos y variables", html: `
      <p class="idea">Los <strong>costos variables</strong> cambian con cada venta: si vendés el doble, gastás el doble. Los <strong>costos fijos</strong> se pagan igual, vendas mucho o poco.</p>
      <table>
        <tr><th>Variables (por unidad)</th><th>Fijos (por mes)</th></tr>
        <tr><td>Insumos y envases</td><td>Alquiler</td></tr>
        <tr><td>Comisión de la tarjeta o de la plataforma</td><td>Sueldos fijos</td></tr>
        <tr><td>Envío, si lo pagás vos</td><td>Internet, contador, seguros</td></tr>
        <tr><td>Ingresos Brutos y otros impuestos sobre la venta</td><td>Cuota del monotributo</td></tr>
      </table>
      <p><strong>Las comisiones son variables:</strong> si una plataforma te cobra 10% de cada venta, en un producto de $ 10.000 son $ 1.000 de costo variable.</p>
      <p><strong>Algunos costos son mixtos:</strong> la luz tiene un cargo fijo y una parte que sube si usás más el horno. Si no sabés, tratalo como fijo y revisalo después.</p>
      <p>Por ejemplo, en el taller los insumos de una torta son variables; el alquiler del local es fijo, aunque ese mes no venda ninguna torta.</p>` },
    { titulo: "El margen de contribución", video: {"id":"U2P-b98ZMiA","t":"Qué es el margen de contribución · Contador Productivo (5:46)"}, html: `
      <p class="idea">El <strong>margen de contribución</strong> es lo que deja cada venta después de pagar sus costos variables. Esa plata es la que "contribuye" a pagar los costos fijos y, después, a la ganancia.</p>
      <pre><code>Margen de contribución = precio - costo variable
Margen de contribución % = margen / precio × 100

Una caja de masas:
Precio                          10.000
- Insumos y envase             - 3.000
- Comisión de la tarjeta (10%) - 1.000
= Margen de contribución         6.000   (60%)</code></pre>
      <table>
        <tr><th>Si el margen es...</th><th>Qué significa</th></tr>
        <tr><td>Alto (por ejemplo, 60%)</td><td>Cada venta ayuda mucho a pagar los fijos</td></tr>
        <tr><td>Bajo (por ejemplo, 10%)</td><td>Necesitás vender muchísimo para cubrir los fijos</td></tr>
        <tr><td>Negativo</td><td>Cada venta te hace perder plata: más ventas, más pérdida</td></tr>
      </table>
      <p><strong>Es el mismo 60% del estado de resultados</strong> del módulo anterior, visto desde una sola unidad.</p>
      <p>Por ejemplo, un producto con precio $ 5.000 y costo variable $ 5.500 tiene margen negativo: vender más de ese producto solo agranda la pérdida.</p>` },
    { titulo: "Qué producto deja más", html: `
      <p class="idea">No todos tus productos dejan lo mismo. Comparar el margen de cada uno te ayuda a decidir qué empujar, qué subir de precio y qué dejar de vender.</p>
      <pre><code>Producto     Precio    Costo var.   Margen   Margen %
Torta        20.000     12.000       8.000     40%
Budín         6.000      2.400       3.600     60%
Caja masas   10.000      4.000       6.000     60%</code></pre>
      <table>
        <tr><th>Pregunta</th><th>Respuesta en el ejemplo</th></tr>
        <tr><td>¿Cuál deja más por unidad?</td><td>La torta: $ 8.000</td></tr>
        <tr><td>¿Cuál deja más por cada peso vendido?</td><td>Budín y caja de masas: 60%</td></tr>
        <tr><td>¿Cuál deja más por hora de horno?</td><td>Depende de cuánto horno usa cada uno: medilo</td></tr>
      </table>
      <p><strong>El recurso escaso manda:</strong> si tu límite es el horno o tus horas, compará cuánto margen deja cada producto por hora, no por unidad.</p>
      <pre><code>Si en 1 hora de horno salen 1 torta u 8 budines:
Torta:   1 × 8.000 = 8.000 por hora
Budines: 8 × 3.600 = 28.800 por hora</code></pre>
      <p>Por ejemplo, con el horno lleno toda la semana, conviene empujar los budines, aunque la torta deje más por unidad.</p>` },
  ],
  practica: [
    "Hacé una tabla con 8 costos de tu negocio (o uno inventado) y marcá cada uno como fijo o variable. Anotá cuál te costó clasificar.",
    "Calculá el margen de contribución en pesos y en % de 3 productos o servicios, incluyendo comisiones. Anotalos en una tabla.",
    "Medí cuántas unidades de cada producto salen por hora de tu recurso escaso (horno, máquina, tus horas) y compará el margen por hora.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: margen de contribución (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/contribution-margin-ratio/" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): manejar las finanzas del negocio (en inglés)", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
  ],
  quiz: [
    { q: "Si vendés el doble y un costo se duplica, ¿qué tipo de costo es?", opciones: ["Fijo","Mixto siempre","Variable","No es un costo"], correcta: 2, explicacion: "Cambia con las ventas, así que es variable. Fijo tienta, pero el fijo no se mueve con las ventas." },
    { q: "Si pagás el alquiler igual vendas mucho o poco, ¿qué tipo de costo es?", opciones: ["Fijo","Variable","Margen","Inversión"], correcta: 0, explicacion: "No cambia con las ventas: es fijo. Variable tienta si el alquiler sube, pero no sube por vender más." },
    { q: "Si una plataforma cobra 10% de cada venta y tu producto vale $ 10.000, ¿cuánto suma al costo variable?", opciones: ["$ 100","$ 10.000","Nada, es un gasto fijo","$ 1.000"], correcta: 3, explicacion: "10% de 10.000 = 1.000. \"Gasto fijo\" tienta, pero se cobra en cada venta, así que es variable." },
    { q: "Si la luz tiene un cargo fijo y otra parte que sube cuando usás más el horno, ¿qué tipo de costo es?", opciones: ["Solo variable","Mixto: tiene una parte fija y otra variable","No es un costo","Una inversión"], correcta: 1, explicacion: "Tiene las dos partes. \"Solo variable\" tienta por la parte del horno, pero el cargo fijo se paga igual." },
    { q: "Si un producto vale $ 10.000 y su costo variable es $ 4.000, ¿cuál es su margen de contribución?", opciones: ["$ 4.000, un 40%","$ 14.000","$ 6.000, un 60%","$ 10.000"], correcta: 2, explicacion: "10.000 - 4.000 = 6.000. El 40% tienta porque es el costo variable, no el margen." },
    { q: "Si querés saber cuánto deja cada venta para pagar los costos fijos, ¿qué calculás?", opciones: ["El margen de contribución","El precio","El total de ventas","El alquiler"], correcta: 0, explicacion: "El margen es lo que queda después de los variables. El precio tienta, pero incluye costos." },
    { q: "Si un producto vale $ 5.000 y su costo variable es $ 5.500, ¿qué pasa si vendés más?", opciones: ["Ganás más","No cambia","Cubrís los fijos","Perdés más: el margen es negativo"], correcta: 3, explicacion: "Con margen negativo, cada venta resta. \"Ganás más\" tienta por el volumen, pero cada unidad pierde $ 500." },
    { q: "Si una torta deja $ 8.000 por unidad y un budín $ 3.600, ¿cuál deja más por unidad?", opciones: ["El budín","La torta","Iguales","No se puede saber"], correcta: 1, explicacion: "8.000 es más que 3.600 por unidad. El budín tienta porque tiene mejor %, pero la pregunta es por unidad." },
    { q: "Si el budín tiene 60% de margen y la torta 40%, ¿cuál deja más por cada peso vendido?", opciones: ["La torta","Iguales","El budín","El que cuesta más"], correcta: 2, explicacion: "El % mide lo que queda por peso vendido. La torta tienta porque deja más por unidad, pero menos por peso." },
    { q: "Si tu horno está lleno toda la semana, ¿cómo comparás productos?", opciones: ["Por margen por hora de horno","Solo por precio","Por el que más te gusta","Por margen por unidad siempre"], correcta: 0, explicacion: "El recurso escaso manda. Por unidad tienta porque es lo más común, pero el horno es el límite." },
    { q: "Si en 1 hora de horno salen 8 budines de $ 3.600 de margen, ¿cuánto margen dejan por hora?", opciones: ["$ 3.600","$ 8.000","$ 450","$ 28.800"], correcta: 3, explicacion: "8 × 3.600 = 28.800. $ 3.600 tienta porque es uno solo, pero salen 8." },
    { q: "Si con el horno lleno la torta deja $ 8.000 por hora y los budines $ 28.800, ¿qué conviene empujar?", opciones: ["La torta, porque deja más por unidad","Los budines","Ninguno","Bajar el precio de la torta"], correcta: 1, explicacion: "Con el horno como límite, gana el que deja más por hora. La torta tienta por su margen unitario." },
  ],
},
{
  id: "equilibrio",
  icono: "⚖️",
  titulo: "Punto de equilibrio",
  nivel: "Intermedio",
  objetivos: [
    "Calcular el punto de equilibrio en unidades y en pesos",
    "Medir el margen de seguridad de tu negocio",
    "Simular cómo cambia el equilibrio si suben costos o bajan precios",
  ],
  lecciones: [
    { titulo: "Cuánto tenés que vender", video: {"id":"MBMIN21lrYI","t":"Punto de equilibrio explicado para principiantes · Kotaro en Español (2:32)"}, html: `
      <p class="idea">El <strong>punto de equilibrio</strong> es cuánto tenés que vender para no ganar ni perder: el margen de contribución de las ventas cubre justo los costos fijos.</p>
      <pre><code>En unidades:  costos fijos / margen por unidad
En pesos:     costos fijos / margen %

Taller: costos fijos 1.650.000 · margen por caja 6.000 (60%)

Unidades: 1.650.000 / 6.000 = 275 cajas por mes
Pesos:    1.650.000 / 0,60  = 2.750.000 por mes</code></pre>
      <table>
        <tr><th>Si vendés...</th><th>Resultado</th></tr>
        <tr><td>Menos de 275 cajas</td><td>Perdés plata</td></tr>
        <tr><td>275 cajas</td><td>Quedás en cero</td></tr>
        <tr><td>Más de 275 cajas</td><td>Cada caja de más deja $ 6.000 de ganancia</td></tr>
      </table>
      <p><strong>Si vendés varios productos,</strong> usá el cálculo en pesos con el margen % promedio de tus ventas.</p>
      <p><strong>Redondeá para arriba:</strong> si el resultado da 274,3, necesitás vender 275, porque no se vende media caja.</p>
      <p>Por ejemplo, 275 cajas por mes son unas 11 por día si abrís 25 días: esa cifra concreta te dice si la meta es realista.</p>` },
    { titulo: "Margen de seguridad", html: `
      <p class="idea">El <strong>margen de seguridad</strong> es cuánto pueden bajar tus ventas antes de llegar al punto de equilibrio. Mide qué tan cerca estás de perder plata.</p>
      <pre><code>Margen de seguridad % = (ventas - ventas de equilibrio) / ventas × 100

Taller: ventas 3.000.000 · equilibrio 2.750.000
(3.000.000 - 2.750.000) / 3.000.000 × 100 = 8,3%</code></pre>
      <table>
        <tr><th>Margen de seguridad</th><th>Lectura</th></tr>
        <tr><td>Menos de 10%</td><td>Frágil: un mes flojo te lleva a pérdida</td></tr>
        <tr><td>10% a 25%</td><td>Aceptable, pero vigilá</td></tr>
        <tr><td>Más de 25%</td><td>Cómodo</td></tr>
      </table>
      <p><strong>Comprobación con el estado de resultados:</strong> 60% de 3.000.000 = 1.800.000 de margen; menos 1.650.000 de fijos = 150.000 de resultado operativo, el mismo número del primer módulo.</p>
      <p>Por ejemplo, con 8,3% de margen, si en enero las ventas bajan 10% por vacaciones, el taller pierde plata ese mes. Conviene saberlo en diciembre, no en febrero.</p>` },
    { titulo: "Simular cambios", html: `
      <p class="idea">La utilidad más grande del punto de equilibrio es simular decisiones antes de tomarlas: ¿qué pasa si sube el alquiler, si bajo el precio o si contrato a alguien?</p>
      <pre><code>Base: fijos 1.650.000 · margen 6.000 → 275 cajas

Sube el alquiler 200.000:
1.850.000 / 6.000 = 308,3 → 309 cajas (+34)

Bajás el precio de 10.000 a 9.000 (costo variable igual, 4.000):
margen 5.000 → 1.650.000 / 5.000 = 330 cajas (+55)

Conseguís insumos 500 más baratos:
margen 6.500 → 1.650.000 / 6.500 = 253,8 → 254 cajas (-21)</code></pre>
      <table>
        <tr><th>Decisión</th><th>Pregunta para hacerte</th></tr>
        <tr><td>Bajar el precio</td><td>¿Voy a vender tantas cajas más como pide el nuevo equilibrio?</td></tr>
        <tr><td>Sumar un costo fijo</td><td>¿Cuántas ventas más necesito para pagarlo?</td></tr>
        <tr><td>Negociar insumos</td><td>¿Cuánto baja mi equilibrio?</td></tr>
      </table>
      <p>Por ejemplo, bajar $ 1.000 el precio parece poco, pero obliga a vender 55 cajas más por mes solo para quedar igual.</p>` },
  ],
  practica: [
    "Calculá el punto de equilibrio en unidades y en pesos de tu negocio (o uno inventado). Anotá cuántas ventas por día representa.",
    "Calculá tu margen de seguridad % con las ventas del último mes y anotá en qué franja de la tabla queda.",
    "Simulá 3 cambios (un costo fijo nuevo, una baja de precio y un insumo más barato) y anotá el nuevo equilibrio de cada uno.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: punto de equilibrio (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/break-even-analysis/" },
    { t: "Corporate Finance Institute: margen de contribución (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/contribution-margin-ratio/" },
  ],
  quiz: [
    { q: "Si querés saber cuánto tenés que vender para no perder plata, ¿qué calculás?", opciones: ["El margen bruto","El precio de venta","El punto de equilibrio","El flujo de caja"], correcta: 2, explicacion: "El equilibrio es donde no se gana ni se pierde. El margen bruto tienta, pero no dice cuánto vender." },
    { q: "Si tus costos fijos son $ 1.650.000 y el margen por unidad $ 6.000, ¿cuál es el equilibrio en unidades?", opciones: ["275 unidades","6.000 unidades","27,5 unidades","9.900 unidades"], correcta: 0, explicacion: "1.650.000 / 6.000 = 275. El 27,5 tienta por un cero de menos." },
    { q: "Si tus costos fijos son $ 1.650.000 y el margen es 60%, ¿cuál es el equilibrio en pesos?", opciones: ["$ 990.000","$ 1.650.000","$ 3.000.000","$ 2.750.000"], correcta: 3, explicacion: "1.650.000 / 0,60 = 2.750.000. $ 990.000 tienta porque es multiplicar por 0,60 en vez de dividir." },
    { q: "Si el cálculo te da 274,3 unidades, ¿cuántas tenés que vender?", opciones: ["274","275","274,3","270"], correcta: 1, explicacion: "Se redondea para arriba. El 274 tienta por el redondeo común, pero te quedarías corto." },
    { q: "Si vendés varios productos distintos, ¿cómo calculás el equilibrio?", opciones: ["Con el margen del producto más caro","No se puede calcular","En pesos, con el margen % promedio de tus ventas","Sumando los precios"], correcta: 2, explicacion: "El margen promedio refleja tu mezcla. El más caro tienta, pero no representa todas las ventas." },
    { q: "Si vendés $ 3.000.000 y tu equilibrio es $ 2.750.000, ¿cuál es tu margen de seguridad?", opciones: ["Cerca del 8,3%","25%","91,7%","250.000%"], correcta: 0, explicacion: "250.000 / 3.000.000 × 100 = 8,3%. El 91,7% tienta si dividís el equilibrio por las ventas." },
    { q: "Si tu margen de seguridad es 8% y en enero las ventas bajan 10%, ¿qué pasa?", opciones: ["Seguís ganando","Quedás en cero exacto","No cambia nada","Ese mes perdés plata, porque quedás debajo del equilibrio"], correcta: 3, explicacion: "La baja supera tu margen de seguridad. \"Seguís ganando\" tienta, pero el 10% es más que el 8%." },
    { q: "Si sube el alquiler $ 200.000 con margen de $ 6.000, ¿cuántas unidades más necesitás vender?", opciones: ["200 más","Unas 34 más (de 275 a 309)","Ninguna","6 más"], correcta: 1, explicacion: "1.850.000 / 6.000 = 308,3 → 309. El 200 tienta por el monto, pero cada unidad aporta 6.000." },
    { q: "Si bajás el precio de $ 10.000 a $ 9.000 y el costo variable sigue en $ 4.000, ¿cuál es el nuevo equilibrio?", opciones: ["275 unidades","300 unidades","330 unidades","183 unidades"], correcta: 2, explicacion: "Margen 5.000: 1.650.000 / 5.000 = 330. El 275 tienta porque es el original, pero el margen bajó." },
    { q: "Si vas a bajar el precio, ¿qué te preguntás primero?", opciones: ["Si vas a vender tantas unidades más como pide el nuevo equilibrio","Si a la competencia le gusta","Nada, bajar siempre conviene","Si el cartel queda lindo"], correcta: 0, explicacion: "Un precio más bajo exige más ventas. \"Siempre conviene\" tienta por atraer clientes, pero puede dejarte en pérdida." },
    { q: "Si conseguís insumos $ 500 más baratos por unidad, ¿qué pasa con el equilibrio?", opciones: ["Sube","No cambia","Se duplica","Baja: necesitás vender menos para cubrir los fijos"], correcta: 3, explicacion: "Más margen por unidad baja el equilibrio. \"No cambia\" tienta porque los fijos son los mismos, pero cada venta aporta más." },
    { q: "Si querés comprobar tu punto de equilibrio, ¿con qué lo comparás?", opciones: ["Con el precio de la competencia","Con el estado de resultados: margen menos fijos tiene que dar el resultado operativo","Con nada","Con el saldo del banco"], correcta: 1, explicacion: "Los dos cálculos usan los mismos números. El saldo del banco tienta, pero mide caja, no resultado." },
  ],
},
{
  id: "caja",
  icono: "💧",
  titulo: "La caja: flujo y capital de trabajo",
  nivel: "Avanzado",
  objetivos: [
    "Armar un flujo de caja proyectado de 3 meses y detectar meses en rojo",
    "Calcular el ciclo de caja de tu negocio en días",
    "Calcular el capital de trabajo y decidir cómo mejorarlo",
  ],
  lecciones: [
    { titulo: "El flujo de caja proyectado", video: {"id":"cfkjNQLHsdg","t":"Qué es el flujo de caja, para qué sirve y cómo prepararlo · Enrique Núñez (6:14)"}, html: `
      <p class="idea">El <strong>flujo de caja proyectado</strong> anticipa cuánta plata va a entrar y salir en los próximos meses. Sirve para ver un problema antes de que llegue.</p>
      <pre><code>                    Abril       Mayo        Junio
Saldo inicial        500.000     100.000    -200.000
+ Cobros           2.500.000   2.800.000   3.200.000
- Pagos           -2.900.000  -3.100.000  -2.800.000
= Saldo final        100.000    -200.000     200.000</code></pre>
      <table>
        <tr><th>Qué cargar</th><th>Cuándo</th></tr>
        <tr><td>Cobros</td><td>En el mes en que realmente entra la plata, no cuando vendés</td></tr>
        <tr><td>Pagos</td><td>En el mes en que realmente sale: proveedores, sueldos, alquiler, impuestos, cuotas</td></tr>
        <tr><td>Pagos grandes del año</td><td>Aguinaldo, vacaciones, compras de temporada</td></tr>
      </table>
      <p><strong>Mayo está en rojo:</strong> faltan $ 200.000. Saberlo en marzo te deja actuar: adelantar cobros, pedir más plazo a un proveedor, postergar una compra o conseguir financiamiento barato.</p>
      <p>Por ejemplo, si en junio se paga el aguinaldo del ayudante y no lo cargaste, el flujo te muestra un saldo que en la realidad no vas a tener.</p>` },
    { titulo: "El ciclo de caja", html: `
      <p class="idea">El <strong>ciclo de caja</strong> es cuántos días pasan desde que pagás los insumos hasta que cobrás la venta. Mientras dura, el negocio tiene que poner plata propia.</p>
      <pre><code>Ciclo de caja = días de stock + días de cobro - días de pago

Taller:
Los insumos están 20 días en stock
Los clientes grandes pagan a 30 días
El proveedor te da 15 días para pagar

20 + 30 - 15 = 35 días</code></pre>
      <table>
        <tr><th>Para achicar el ciclo</th><th>Ejemplo</th></tr>
        <tr><td>Menos días de stock</td><td>Comprar más seguido y en menos cantidad</td></tr>
        <tr><td>Menos días de cobro</td><td>Pedir una seña, cobrar al contado con descuento chico</td></tr>
        <tr><td>Más días de pago</td><td>Negociar 30 días con el proveedor</td></tr>
      </table>
      <p><strong>Vender más con un ciclo largo pide más plata:</strong> por eso un negocio que crece rápido se puede quedar sin caja, aunque gane plata.</p>
      <p>Por ejemplo, si el taller consigue que el proveedor le dé 30 días en vez de 15, el ciclo baja de 35 a 20 días.</p>` },
    { titulo: "Capital de trabajo", video: {"id":"p_ZEyKuTKic","t":"El capital de trabajo: qué es · Yo Empresa (4:46)"}, html: `
      <p class="idea">El <strong>capital de trabajo</strong> es la plata que el negocio necesita para funcionar en el día a día: lo que tiene para cobrar y vender en el corto plazo, menos lo que debe pagar en el corto plazo.</p>
      <pre><code>Capital de trabajo = activo corriente - pasivo corriente

Activo corriente (se convierte en plata en menos de un año):
  Caja y banco             300.000
  Clientes por cobrar      900.000
  Stock de insumos         600.000
                         1.800.000
Pasivo corriente (se paga en menos de un año):
  Proveedores y deudas     700.000

Capital de trabajo = 1.800.000 - 700.000 = 1.100.000</code></pre>
      <table>
        <tr><th>Si el capital de trabajo es...</th><th>Qué significa</th></tr>
        <tr><td>Positivo y holgado</td><td>Podés pagar lo que debés en el corto plazo</td></tr>
        <tr><td>Chico o negativo</td><td>Riesgo de no poder pagar a tiempo</td></tr>
      </table>
      <p><strong>Ojo con el stock y los clientes:</strong> cuentan como activo, pero si el stock no se vende o el cliente no paga, esa plata no está.</p>
      <p>Por ejemplo, un negocio con $ 900.000 por cobrar de un cliente que siempre se atrasa tiene, en la práctica, menos capital de trabajo del que dice la cuenta.</p>` },
  ],
  practica: [
    "Armá un flujo de caja proyectado de 3 meses para tu negocio (o uno inventado), con cobros y pagos en el mes real. Anotá si algún mes queda en rojo.",
    "Calculá el ciclo de caja de tu negocio en días y anotá una acción para achicarlo y cuántos días ganarías.",
    "Calculá el capital de trabajo con caja, clientes por cobrar, stock y deudas de corto plazo. Anotá el resultado.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: capital de trabajo (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/working-capital-formula/" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): manejar las finanzas del negocio (en inglés)", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
  ],
  quiz: [
    { q: "Si querés saber si te va a faltar plata en los próximos meses, ¿qué armás?", opciones: ["Un estado de resultados del año pasado","Una lista de precios","Un flujo de caja proyectado","Un logo nuevo"], correcta: 2, explicacion: "El flujo proyectado anticipa los saldos. El estado de resultados tienta, pero mira el pasado y no los tiempos de cobro." },
    { q: "Si vendés en abril y te pagan en mayo, ¿en qué mes cargás el cobro en el flujo?", opciones: ["Mayo","Abril","Los dos","Ninguno"], correcta: 0, explicacion: "El flujo va con el mes en que entra la plata. Abril tienta porque vendiste, pero la plata llega en mayo." },
    { q: "Si empezás abril con $ 500.000, cobrás $ 2.500.000 y pagás $ 2.900.000, ¿con cuánto terminás?", opciones: ["$ 900.000","-$ 400.000","$ 3.000.000","$ 100.000"], correcta: 3, explicacion: "500.000 + 2.500.000 - 2.900.000 = 100.000. -400.000 tienta si te olvidás del saldo inicial." },
    { q: "Si tu flujo muestra que en mayo faltan $ 200.000, ¿qué hacés?", opciones: ["Esperás a mayo y ves","Actuás antes: adelantar cobros, pedir más plazo, postergar una compra o buscar financiamiento barato","Dejás de vender","Borrás el flujo"], correcta: 1, explicacion: "El flujo sirve para anticiparse. Esperar tienta, pero en mayo ya no hay margen para actuar." },
    { q: "Si en junio pagás el aguinaldo y no lo cargaste en el flujo, ¿qué pasa?", opciones: ["Nada","El flujo se corrige solo","El flujo muestra un saldo que en la realidad no vas a tener","El aguinaldo no es un pago"], correcta: 2, explicacion: "Los pagos grandes del año tienen que estar. \"Nada\" tienta, pero te puede faltar plata justo ese mes." },
    { q: "Si los insumos están 20 días en stock, cobrás a 30 y pagás a 15, ¿cuál es el ciclo de caja?", opciones: ["35 días","65 días","5 días","25 días"], correcta: 0, explicacion: "20 + 30 - 15 = 35. El 65 tienta si sumás todo, pero los días de pago se restan." },
    { q: "Si el proveedor te da 30 días en vez de 15, ¿qué pasa con el ciclo de caja de 35 días?", opciones: ["Sube a 50 días","No cambia","Baja a 5 días","Baja a 20 días"], correcta: 3, explicacion: "20 + 30 - 30 = 20. \"Sube\" tienta porque el número es mayor, pero los días de pago se restan." },
    { q: "Si querés cobrar antes sin perder clientes, ¿qué podés hacer?", opciones: ["Cobrar a 90 días","Pedir una seña o dar un descuento chico por pagar al contado","Dejar de facturar","Subir el precio sin avisar"], correcta: 1, explicacion: "Seña y descuento por contado acortan el cobro. Cobrar a 90 días tienta para vender más, pero alarga el ciclo." },
    { q: "Si tu negocio crece rápido y tiene un ciclo de caja largo, ¿qué riesgo tiene?", opciones: ["Ninguno","Ganar demasiado","Quedarse sin caja, aunque gane plata","Pagar menos impuestos"], correcta: 2, explicacion: "Crecer con ciclo largo pide más plata. \"Ninguno\" tienta porque vende más, pero cada venta inmoviliza plata." },
    { q: "Si tenés activo corriente de $ 1.800.000 y pasivo corriente de $ 700.000, ¿cuál es el capital de trabajo?", opciones: ["$ 1.100.000","$ 2.500.000","$ 700.000","-$ 1.100.000"], correcta: 0, explicacion: "1.800.000 - 700.000 = 1.100.000. $ 2.500.000 tienta si sumás en vez de restar." },
    { q: "Si tu capital de trabajo es negativo, ¿qué significa?", opciones: ["Que ganás mucho","Que no tenés deudas","Nada","Que debés en el corto plazo más de lo que vas a tener disponible: riesgo de no pagar a tiempo"], correcta: 3, explicacion: "Negativo es una alarma. \"Nada\" tienta si el negocio vende bien, pero los pagos pueden no llegar a tiempo." },
    { q: "Si tenés $ 900.000 por cobrar de un cliente que siempre se atrasa, ¿cómo lo mirás?", opciones: ["Como plata segura","Con cuidado: en la práctica tenés menos capital de trabajo del que dice la cuenta","Como si fuera caja","Como una deuda tuya"], correcta: 1, explicacion: "Lo que cuesta cobrar no está disponible. \"Plata segura\" tienta por figurar como activo, pero puede no llegar." },
  ],
},
{
  id: "precios",
  icono: "🏷️",
  titulo: "Precios, descuentos e inflación",
  nivel: "Avanzado",
  objetivos: [
    "Fijar precios con el costo de reposición y no con lo que pagaste",
    "Calcular cuánto más tenés que vender para compensar un descuento",
    "Calcular cuánto vale hoy un cobro a plazo o en cuotas con inflación",
  ],
  lecciones: [
    { titulo: "Costo de reposición", html: `
      <p class="idea">Con inflación, el precio de tus productos tiene que alcanzar para <strong>volver a comprar</strong> los insumos, no solo para cubrir lo que te costaron. Eso se llama costo de reposición.</p>
      <pre><code>Compraste harina a 1.000 el kilo hace un mes.
Hoy el mismo kilo cuesta 1.200.

Si calculás el precio con 1.000:
vendés, cobrás y no te alcanza para reponer la harina.

Calculá con 1.200, lo que te cuesta reponerla hoy.</code></pre>
      <table>
        <tr><th>Hábito</th><th>Por qué</th></tr>
        <tr><td>Actualizar la lista de costos cada mes</td><td>Los precios de los insumos cambian seguido</td></tr>
        <tr><td>Pedir precios actualizados a proveedores antes de cambiar tu lista</td><td>Para calcular con datos de hoy</td></tr>
        <tr><td>Revisar los precios de los productos que más vendés primero</td><td>Son los que más impactan en el margen</td></tr>
        <tr><td>Avisar los cambios con anticipación a los clientes fijos</td><td>Cuida la relación</td></tr>
      </table>
      <p><strong>Ganancia de mentira:</strong> si vendés con el costo viejo, el estado de resultados puede mostrar ganancia, pero el negocio se achica porque cada vez puede comprar menos insumos.</p>
      <p>Por ejemplo, un taller que no actualiza precios en tres meses de inflación alta termina vendiendo varias cajas por debajo de su costo de reposición sin darse cuenta.</p>` },
    { titulo: "Cuánto cuesta un descuento", html: `
      <p class="idea">Un descuento sale del margen de contribución, no del precio. Por eso un descuento que parece chico obliga a vender mucho más para ganar lo mismo.</p>
      <pre><code>Caja de masas: precio 10.000 · costo variable 4.000 · margen 6.000

Con 20% de descuento:
precio 8.000 · costo variable 4.000 · margen 4.000

Para ganar lo mismo que con 100 cajas sin descuento:
100 × 6.000 = 600.000
600.000 / 4.000 = 150 cajas  → tenés que vender 50% más</code></pre>
      <table>
        <tr><th>Descuento (con margen de 60%)</th><th>Ventas extra necesarias</th></tr>
        <tr><td>10%</td><td>20% más</td></tr>
        <tr><td>20%</td><td>50% más</td></tr>
        <tr><td>30%</td><td>100% más (el doble)</td></tr>
      </table>
      <p><strong>Alternativas al descuento:</strong> un producto de regalo con costo bajo, combos que suban el ticket promedio o un descuento solo por pagar al contado.</p>
      <p>Por ejemplo, un 30% de descuento en el día del cliente solo tiene sentido si ese día vendés el doble que un día normal.</p>` },
    { titulo: "Cobrar a plazo y en cuotas", html: `
      <p class="idea">Con inflación, un peso que cobrás dentro de un mes vale menos que uno que cobrás hoy. Las ventas a plazo y las "cuotas sin interés" tienen un costo para el negocio.</p>
      <pre><code>Valor de hoy = monto / (1 + inflación mensual) ^ meses

Inflación de 3% por mes:

Cobrás 100.000 dentro de 1 mes:
100.000 / 1,03 = 97.087 de hoy

3 cuotas de 10.000 "sin interés":
10.000 / 1,03   = 9.709
10.000 / 1,03^2 = 9.426
10.000 / 1,03^3 = 9.151
Total en pesos de hoy: 28.286 (en vez de 30.000)</code></pre>
      <table>
        <tr><th>Qué tener en cuenta</th><th>Por qué</th></tr>
        <tr><td>La inflación esperada</td><td>Cuanto más alta, más pierde el cobro a plazo</td></tr>
        <tr><td>La comisión de la tarjeta o del medio de cobro</td><td>Se suma como costo variable</td></tr>
        <tr><td>Cuándo te acreditan</td><td>Algunos medios de cobro tardan días o semanas en pagarte</td></tr>
      </table>
      <p>Por ejemplo, vender en 3 cuotas sin interés con 3% de inflación mensual es como hacer un descuento de casi 6%, más la comisión del medio de cobro.</p>` },
  ],
  practica: [
    "Elegí 3 insumos de tu negocio, pedí o buscá su precio de hoy y recalculá el costo variable de un producto con el costo de reposición. Anotá la diferencia.",
    "Calculá cuántas ventas más necesitás para compensar un descuento de 15% en tu producto principal. Anotá el resultado.",
    "Calculá el valor de hoy de 6 cuotas de $ 20.000 con 2% de inflación mensual y compará con $ 120.000.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: margen de contribución (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/contribution-margin-ratio/" },
    { t: "BCRA: comparar comisiones de productos financieros", url: "https://www.bcra.gob.ar/comparar-comisiones-de-productos-financieros/" },
  ],
  quiz: [
    { q: "Si compraste harina a $ 1.000 y hoy cuesta $ 1.200, ¿con qué costo calculás el precio?", opciones: ["Con $ 1.000, lo que pagaste","Con el promedio, $ 1.100","Con $ 1.200, el costo de reposición","Con lo que cobra la competencia"], correcta: 2, explicacion: "El precio tiene que alcanzar para reponer. $ 1.000 tienta porque es lo que pagaste, pero no te alcanza para volver a comprar." },
    { q: "Si vendés con el costo viejo en meses de inflación, ¿qué pasa con el negocio?", opciones: ["Puede mostrar ganancia, pero se achica porque cada vez compra menos insumos","Crece","No cambia","Gana más clientes y más plata"], correcta: 0, explicacion: "Es una ganancia de mentira. \"Crece\" tienta por las ventas, pero la capacidad de reponer baja." },
    { q: "Si querés actualizar tu lista de precios, ¿por cuáles empezás?", opciones: ["Por los que menos vendés","Por los más baratos","Por orden alfabético","Por los productos que más vendés"], correcta: 3, explicacion: "Los que más vendés impactan más en el margen. Los más baratos tientan por fáciles, pero mueven poco." },
    { q: "Si hacés un descuento, ¿de dónde sale?", opciones: ["Del costo variable","Del margen de contribución","De los impuestos","De ningún lado"], correcta: 1, explicacion: "El costo variable no cambia: el descuento lo pagás con tu margen. \"De ningún lado\" tienta, pero alguien lo paga." },
    { q: "Si un producto de $ 10.000 con costo variable de $ 4.000 tiene 20% de descuento, ¿cuál es el nuevo margen?", opciones: ["$ 4.800","$ 6.000","$ 4.000","$ 2.000"], correcta: 2, explicacion: "Precio 8.000 - 4.000 = 4.000. $ 4.800 tienta si le restás 20% al margen en vez de al precio." },
    { q: "Si con 20% de descuento el margen baja de $ 6.000 a $ 4.000, ¿cuánto más tenés que vender para ganar lo mismo?", opciones: ["50% más","20% más","10% más","Lo mismo"], correcta: 0, explicacion: "6.000 / 4.000 = 1,5. El 20% tienta porque es el descuento, pero el margen bajó un tercio." },
    { q: "Si querés atraer clientes sin regalar margen, ¿qué podés hacer?", opciones: ["Un 40% de descuento en todo","Bajar el precio sin calcular","Vender por debajo del costo","Un combo que suba el ticket o un regalo de costo bajo"], correcta: 3, explicacion: "Hay alternativas que cuidan el margen. El 40% tienta por llamativo, pero obliga a vender muchísimo más." },
    { q: "Si cobrás $ 100.000 dentro de un mes con 3% de inflación mensual, ¿cuánto valen hoy?", opciones: ["$ 100.000","Unos $ 97.087","$ 103.000","$ 70.000"], correcta: 1, explicacion: "100.000 / 1,03 = 97.087. $ 103.000 tienta si multiplicás en vez de dividir." },
    { q: "Si vendés en 3 cuotas de $ 10.000 sin interés con 3% de inflación mensual, ¿cuánto cobrás en pesos de hoy?", opciones: ["$ 30.000","$ 30.900","Unos $ 28.286","$ 27.000"], correcta: 2, explicacion: "Cada cuota vale menos cuanto más tarde llega. $ 30.000 tienta porque es el total nominal." },
    { q: "Si ofrecés \"cuotas sin interés\", ¿quién paga ese interés?", opciones: ["El negocio, en el margen","Nadie","El banco siempre, gratis","El cliente sin saberlo"], correcta: 0, explicacion: "La inflación y la comisión los paga el negocio. \"Nadie\" tienta por el nombre, pero tiene costo." },
    { q: "Si un medio de cobro te acredita la plata a los 15 días, ¿qué tenés en cuenta?", opciones: ["Nada, es lo mismo","Que te pagan más","Que no hay comisión","Que esos días también pierden valor con la inflación y alargan tu ciclo de caja"], correcta: 3, explicacion: "Los días de acreditación son días de cobro. \"Es lo mismo\" tienta, pero afecta la caja y el valor." },
    { q: "Si vendés en 3 cuotas sin interés con 3% de inflación mensual, ¿a qué se parece?", opciones: ["A cobrar de más","A hacer un descuento de casi 6%, más la comisión","A no tener costo","A un descuento de 30%"], correcta: 1, explicacion: "28.286 frente a 30.000 es casi 6% menos. \"No tener costo\" tienta, pero el costo está en el tiempo." },
  ],
},
{
  id: "decidir",
  icono: "🔧",
  titulo: "Invertir y financiarte",
  nivel: "Avanzado",
  objetivos: [
    "Calcular en cuántos meses se recupera una inversión",
    "Comparar créditos con el costo financiero total (CFT)",
    "Decidir si conviene endeudarte según lo que genera la inversión",
  ],
  lecciones: [
    { titulo: "Cuándo se recupera una inversión", html: `
      <p class="idea">Antes de comprar una máquina o hacer una reforma, calculá en cuánto tiempo la plata que genera devuelve lo que costó. Se llama <strong>período de recupero</strong>.</p>
      <pre><code>Recupero (meses) = inversión / ganancia extra por mes

Un horno nuevo de 3.000.000 permite vender más budines
y deja 250.000 más de margen por mes (después de sus costos de luz):

3.000.000 / 250.000 = 12 meses</code></pre>
      <table>
        <tr><th>Qué contar en la ganancia extra</th><th>Qué no olvidar</th></tr>
        <tr><td>El margen de contribución de las ventas nuevas</td><td>Los costos nuevos: luz, mantenimiento, seguro</td></tr>
        <tr><td>Los ahorros (menos tiempo, menos desperdicio)</td><td>Si vas a poder vender esas unidades de más</td></tr>
      </table>
      <p><strong>Cuanto más corto, mejor:</strong> con inflación e incertidumbre, recuperar en 12 meses es mucho más seguro que en 48.</p>
      <p><strong>Ojo con suponer ventas:</strong> si el horno te deja hacer el doble de budines, pero no tenés el doble de clientes, la ganancia extra es menor.</p>
      <p>Por ejemplo, si el horno solo deja 100.000 más por mes porque no hay tanta demanda, el recupero pasa de 12 a 30 meses.</p>` },
    { titulo: "El costo real de un crédito", video: {"id":"Q-qwswekR3Y","t":"Qué es y cómo calcular el costo financiero total · Ministerio de Economía (1:01)"}, html: `
      <p class="idea">La tasa de interés no es todo lo que pagás por un crédito. El <strong>costo financiero total (CFT)</strong> suma interés, comisiones, seguros e impuestos. Es el número para comparar créditos.</p>
      <table>
        <tr><th>Oferta</th><th>Tasa (TNA)</th><th>CFT</th></tr>
        <tr><td>Crédito A</td><td>50%</td><td>68%</td></tr>
        <tr><td>Crédito B</td><td>55%</td><td>62%</td></tr>
      </table>
      <p>El crédito A tiene menor tasa, pero el B es <strong>más barato</strong>, porque su CFT es menor: el A tiene comisiones y seguros más caros.</p>
      <table>
        <tr><th>Qué preguntar</th><th>Por qué</th></tr>
        <tr><td>¿Cuál es el CFT con impuestos?</td><td>Es obligatorio informarlo y es el número para comparar</td></tr>
        <tr><td>¿La tasa es fija o variable?</td><td>Con tasa variable, la cuota puede subir</td></tr>
        <tr><td>¿Cuánto es la cuota total por mes?</td><td>Para cargarla en el flujo de caja</td></tr>
        <tr><td>¿Hay costo por cancelar antes?</td><td>Por si te va mejor y querés pagarlo antes</td></tr>
      </table>
      <p><strong>El BCRA</strong> tiene un comparador de comisiones de productos financieros (ver recursos).</p>
      <p>Por ejemplo, financiar insumos con la tarjeta de crédito personal en cuotas con interés suele tener uno de los CFT más altos: es de las formas más caras de financiar un negocio.</p>` },
    { titulo: "¿Conviene endeudarte?", html: `
      <p class="idea">Un crédito conviene cuando lo que genera la inversión paga la cuota con holgura. Si la cuota sale de las ventas de siempre, el crédito te empobrece.</p>
      <pre><code>Horno de 3.000.000 financiado:
Cuota mensual del crédito: 180.000
Margen extra del horno:    250.000
Queda por mes:              70.000  → la inversión paga su cuota

Si el margen extra fuera 100.000:
100.000 - 180.000 = -80.000 → el resto del negocio paga la cuota</code></pre>
      <table>
        <tr><th>Deuda que suele tener sentido</th><th>Deuda peligrosa</th></tr>
        <tr><td>Una máquina que genera más de lo que cuesta su cuota</td><td>Pagar gastos fijos de todos los meses con crédito</td></tr>
        <tr><td>Capital de trabajo para una temporada con ventas seguras</td><td>Tapar pérdidas sin cambiar nada</td></tr>
        <tr><td>Con CFT comparado y cuota en el flujo</td><td>Sin saber el CFT ni cómo vas a pagar</td></tr>
      </table>
      <p><strong>Cargá la cuota en el flujo de caja</strong> antes de firmar: si algún mes queda en rojo, el crédito es demasiado grande o el plazo demasiado corto.</p>
      <p>Por ejemplo, pedir un préstamo para pagar el alquiler de varios meses, sin cambiar precios ni costos, solo posterga el problema y le suma intereses.</p>` },
  ],
  practica: [
    "Elegí una inversión para tu negocio (real o imaginaria) y calculá su recupero en meses, contando sus costos nuevos. Anotá el resultado.",
    "Pedí o buscá el CFT de 2 créditos o de una tarjeta y compará cuál es más barato. Anotalos en una tabla.",
    "Cargá la cuota de un crédito imaginario en tu flujo de caja de 3 meses y anotá si algún mes queda en rojo.",
  ],
  recursos: [
    { t: "Corporate Finance Institute: período de recupero de una inversión (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/payback-period/" },
    { t: "BCRA: comparar comisiones de productos financieros", url: "https://www.bcra.gob.ar/comparar-comisiones-de-productos-financieros/" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
  ],
  quiz: [
    { q: "Si un horno de $ 3.000.000 deja $ 250.000 más de margen por mes, ¿en cuánto se recupera?", opciones: ["En 1,2 meses","En 120 meses","En 12 meses","En 25 meses"], correcta: 2, explicacion: "3.000.000 / 250.000 = 12. El 120 tienta por un cero de más." },
    { q: "Si calculás la ganancia extra de una máquina, ¿qué tenés que restar?", opciones: ["Sus costos nuevos: luz, mantenimiento y seguro","Nada","El precio de la máquina cada mes","El sueldo de todos"], correcta: 0, explicacion: "Los costos nuevos achican la ganancia. \"Nada\" tienta para que el número dé lindo, pero sería falso." },
    { q: "Si el horno te deja hacer el doble, pero no tenés más clientes, ¿qué pasa con la ganancia extra?", opciones: ["Se duplica igual","No cambia","Sube sola","Es menor de lo que calculaste, porque no vas a vender todo lo que podés producir"], correcta: 3, explicacion: "Producir no es vender. \"Se duplica\" tienta por la capacidad, pero sin demanda no hay margen." },
    { q: "Si dudás entre una inversión que se recupera en 12 meses y otra en 48, ¿cuál es más segura?", opciones: ["La de 48","La de 12 meses","Son iguales","La más cara"], correcta: 1, explicacion: "Recuperar antes reduce el riesgo. La de 48 tienta si deja más en total, pero hay más incertidumbre." },
    { q: "Si querés comparar dos créditos, ¿qué número usás?", opciones: ["Solo la tasa","El monto de la primera cuota","El costo financiero total (CFT)","El color de la publicidad"], correcta: 2, explicacion: "El CFT incluye todo. La tasa tienta porque es lo que se anuncia, pero deja afuera comisiones y seguros." },
    { q: "Si el crédito A tiene tasa 50% y CFT 68%, y el B tasa 55% y CFT 62%, ¿cuál es más barato?", opciones: ["El B","El A","Son iguales","No se puede saber"], correcta: 0, explicacion: "Gana el CFT más bajo. El A tienta por su tasa menor, pero sus costos extra lo encarecen." },
    { q: "Si un crédito tiene tasa variable, ¿qué riesgo tenés?", opciones: ["Que la cuota baje siempre","Ninguno","Que te devuelvan plata","Que la cuota suba"], correcta: 3, explicacion: "Variable puede subir. \"Baje siempre\" tienta, pero no hay garantía." },
    { q: "Si financiás insumos con la tarjeta personal en cuotas con interés, ¿qué tenés en cuenta?", opciones: ["Que es gratis","Que suele ser de las formas más caras, por su CFT alto","Que es lo más barato","Que no afecta al negocio"], correcta: 1, explicacion: "La tarjeta suele tener CFT muy alto. \"Es gratis\" tienta por la comodidad, pero es caro." },
    { q: "Si la cuota es $ 180.000 y el margen extra de la inversión $ 250.000, ¿qué pasa?", opciones: ["Perdés $ 70.000 por mes","Quedás en cero","La inversión paga su cuota y quedan $ 70.000 por mes","Ganás $ 430.000"], correcta: 2, explicacion: "250.000 - 180.000 = 70.000. $ 430.000 tienta si sumás la cuota en vez de restarla." },
    { q: "Si el margen extra es $ 100.000 y la cuota $ 180.000, ¿quién paga la diferencia?", opciones: ["El resto del negocio: $ 80.000 por mes","Nadie","La máquina","El banco"], correcta: 0, explicacion: "100.000 - 180.000 = -80.000. \"Nadie\" tienta, pero sale de las ventas de siempre." },
    { q: "Si pedís un préstamo para pagar el alquiler sin cambiar precios ni costos, ¿qué pasa?", opciones: ["Se soluciona","El negocio crece","Bajás tus costos","Solo postergás el problema y le sumás intereses"], correcta: 3, explicacion: "Tapar pérdidas con deuda no arregla la causa. \"Se soluciona\" tienta por el alivio del mes, pero vuelve con intereses." },
    { q: "Si querés saber si podés pagar un crédito antes de firmarlo, ¿qué hacés?", opciones: ["Firmás y después ves","Cargás la cuota en el flujo de caja y revisás que ningún mes quede en rojo","Preguntás solo la tasa","Confiás en que va a salir bien"], correcta: 1, explicacion: "El flujo muestra si te alcanza. Firmar y ver tienta por la urgencia, pero después es tarde." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el tablero de tu negocio",
  nivel: "Avanzado",
  objetivos: [
    "Armar un tablero financiero con resultado, margen, equilibrio y caja",
    "Evaluarlo con una rúbrica y corregir lo que falte",
    "Definir una rutina mensual para actualizarlo y tomar decisiones",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es el <strong>tablero financiero</strong> de tu negocio (o de uno inventado): una planilla con una hoja por tema, que te diga en 5 minutos cómo está y qué decidir.</p>
      <table>
        <tr><th>Hoja</th><th>Módulo</th></tr>
        <tr><td>Estado de resultados del último mes, con margen bruto % y neto %</td><td>¿Gana plata tu negocio?</td></tr>
        <tr><td>Margen de contribución de tus 3 productos principales</td><td>Costos fijos, variables y margen</td></tr>
        <tr><td>Punto de equilibrio y margen de seguridad</td><td>Punto de equilibrio</td></tr>
        <tr><td>Flujo de caja de 3 meses y ciclo de caja</td><td>La caja</td></tr>
        <tr><td>Precios con costo de reposición</td><td>Precios, descuentos e inflación</td></tr>
        <tr><td>Una decisión evaluada (inversión, crédito, descuento o precio)</td><td>Invertir y financiarte</td></tr>
      </table>
      <pre><code>Resumen arriba de todo (5 números):
Resultado neto del mes · Margen neto %
Ventas de equilibrio · Margen de seguridad %
Saldo de caja más bajo de los próximos 3 meses</code></pre>
      <p>Por ejemplo, el resumen del taller diría: resultado $ 70.000, margen neto 2,3%, equilibrio $ 2.750.000, seguridad 8,3% y saldo más bajo -$ 200.000 en mayo. Con eso, ya sabés qué atender primero.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu tablero.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Resultado</td><td>Estado de resultados completo, con sueldo del dueño</td><td>Sin sueldo del dueño</td><td>No hay</td></tr>
        <tr><td>Margen</td><td>3 productos con costo de reposición y comisiones</td><td>Falta alguno de los dos</td><td>No hay</td></tr>
        <tr><td>Equilibrio</td><td>En pesos o unidades, con margen de seguridad</td><td>Sin margen de seguridad</td><td>No hay</td></tr>
        <tr><td>Decisión</td><td>Evaluada con números (recupero, CFT o ventas extra)</td><td>Sin números</td><td>No hay</td></tr>
        <tr><td>Coherencia</td><td>Los números de las hojas coinciden entre sí</td><td>Alguna diferencia chica</td><td>Se contradicen</td></tr>
        <tr><td>Caja</td><td>Flujo de 3 meses, con un plan para cada mes en rojo</td><td>—</td><td>Hay meses en rojo sin plan, o no hay flujo</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Caja" tiene 0, el tablero no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un tablero con márgenes perfectos que muestra mayo en -$ 200.000 sin decir qué vas a hacer saca 0 en caja y no está listo.</p>` },
    { titulo: "Tu rutina mensual", html: `
      <p class="idea">Un tablero sirve si lo actualizás. Con una rutina de una hora por mes, los números dejan de ser una sorpresa y pasan a ser una herramienta para decidir.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué hacer</th></tr>
        <tr><td>Primera semana del mes</td><td>Cerrar el estado de resultados del mes anterior</td></tr>
        <tr><td>Primera semana del mes</td><td>Actualizar costos de reposición y márgenes</td></tr>
        <tr><td>Cada mes</td><td>Mover el flujo de caja un mes para adelante</td></tr>
        <tr><td>Cuando hay que decidir</td><td>Simular en el tablero antes de hacer</td></tr>
        <tr><td>Una vez por año</td><td>Revisar con un contador el balance y los impuestos</td></tr>
      </table>
      <p><strong>Mirá la tendencia:</strong> más que el número de un mes, importa si el margen y la seguridad suben o bajan mes a mes.</p>
      <p><strong>Seguir aprendiendo:</strong> hay recursos gratis en el sitio de capacitación para emprendedores y pymes del Estado, y guías en inglés de la SBA y del Corporate Finance Institute.</p>
      <p>Por ejemplo, ver que el margen neto bajó tres meses seguidos te avisa que hay que revisar precios antes de que el negocio pase a perder.</p>` },
  ],
  practica: [
    "Armá tu tablero con las 6 hojas del encargo y el resumen de 5 números. Anotá la fecha.",
    "Evaluá tu tablero con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Hacé la rutina mensual una vez y anotá cuánto tiempo te llevó y qué decisión tomarías con lo que viste.",
  ],
  recursos: [
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): manejar las finanzas del negocio (en inglés)", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
    { t: "Corporate Finance Institute: período de recupero de una inversión (en inglés)", url: "https://corporatefinanceinstitute.com/resources/accounting/payback-period/" },
  ],
  quiz: [
    { q: "Si armás el tablero de tu negocio, ¿qué tiene que incluir?", opciones: ["Solo las ventas del mes","Solo el saldo del banco","Resultado, márgenes, equilibrio, caja, precios y una decisión evaluada","Solo la lista de precios"], correcta: 2, explicacion: "El tablero junta todo el curso. Las ventas tientan por ser lo más visible, pero no dicen si ganás." },
    { q: "Si tu estado de resultados no incluye tu sueldo, ¿cuánto saca en \"Resultado\"?", opciones: ["1 punto","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "Sin sueldo del dueño es 1. Sacar 2 tienta porque el resto está, pero el resultado queda inflado." },
    { q: "Si calculaste el margen con costos viejos y sin comisiones, ¿cuánto saca en \"Margen\"?", opciones: ["2 puntos","1 punto","No se evalúa","0 puntos, porque faltan los dos"], correcta: 3, explicacion: "Faltan reposición y comisiones. 1 punto tienta, pero ese es para cuando falta uno solo." },
    { q: "Si el equilibrio de tu tablero no coincide con el estado de resultados, ¿qué criterio falla?", opciones: ["Caja","Coherencia","Decisión","Ninguno"], correcta: 1, explicacion: "Los números tienen que coincidir entre hojas. Caja tienta, pero el problema es de coherencia." },
    { q: "Si tu tablero suma 11, pero mayo está en rojo sin plan, ¿está listo?", opciones: ["Sí, 11 es listo","Sí, si el margen es bueno","No: \"Caja\" tiene 0 y eso no se compensa con el total","Depende del mes"], correcta: 2, explicacion: "La regla de la rúbrica lo dice. \"11 es listo\" tienta, pero quedarte sin caja puede cerrar el negocio." },
    { q: "Si tu tablero saca 8, ¿qué hacés?", opciones: ["Mejorás los criterios que sacaron 0 o 1","Lo das por terminado","Empezás de cero","Cambiás la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Darlo por terminado tienta, pero le falta poco." },
    { q: "Si querés ver en 5 minutos cómo está tu negocio, ¿qué mirás del tablero?", opciones: ["Todas las facturas","Solo el saldo de hoy","La lista de clientes","El resumen de 5 números"], correcta: 3, explicacion: "El resumen junta lo importante. El saldo de hoy tienta, pero no dice si ganás ni cómo viene la caja." },
    { q: "Si el resumen del taller muestra seguridad 8,3% y mayo en -$ 200.000, ¿qué atendés primero?", opciones: ["El logo","La caja de mayo, y después cómo subir el margen de seguridad","Nada, el resultado da positivo","Bajar precios"], correcta: 1, explicacion: "La caja negativa es lo más urgente. \"Resultado positivo\" tienta, pero no paga las cuentas de mayo." },
    { q: "Si recién empieza el mes, ¿qué hacés según tu rutina?", opciones: ["Esperás a fin de año","Nada","Cerrás el resultado del mes anterior y actualizás costos","Bajás todos los precios"], correcta: 2, explicacion: "La rutina empieza con el cierre del mes. Esperar a fin de año tienta, pero los problemas llegan antes." },
    { q: "Si tenés que decidir algo importante, ¿qué hacés con el tablero?", opciones: ["Simulás la decisión antes de hacerla","Lo dejás de lado","Decidís y después actualizás","Le preguntás a la competencia"], correcta: 0, explicacion: "Simular evita sorpresas. Decidir y después actualizar tienta por rápido, pero ya es tarde." },
    { q: "Si el margen neto bajó tres meses seguidos, ¿qué concluís?", opciones: ["Que es casualidad","Que todo está bien","Que hay que dejar de medir","Que hay que revisar precios y costos antes de pasar a pérdida"], correcta: 3, explicacion: "La tendencia avisa. \"Casualidad\" tienta con un mes, pero tres seguidos es una señal." },
    { q: "Si querés revisar el balance y los impuestos del año, ¿con quién lo hacés?", opciones: ["Solo, sin ayuda nunca","Con un contador, una vez por año","Con un grupo de redes","Con nadie"], correcta: 1, explicacion: "El contador revisa lo que el tablero no cubre. Hacerlo solo tienta por ahorrar, pero los impuestos tienen reglas propias." },
  ],
},
];
