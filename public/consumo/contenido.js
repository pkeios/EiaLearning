// Temario del curso "Comprar mejor: derechos del consumidor". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js consumo y node tools/metodologia.js consumo
window.TEMARIO = [
{
  id: "derechos",
  icono: "🛡️",
  titulo: "Tus derechos como consumidor",
  nivel: "Básico",
  objetivos: [
    "Reconocer cuándo una compra está protegida por la Ley de Defensa del Consumidor",
    "Nombrar los derechos básicos: información, trato digno, oferta y publicidad",
    "Aplicar la regla de que, ante la duda, se interpreta a favor del consumidor",
  ],
  lecciones: [
    { titulo: "Quién es consumidor", video: {"id":"GHaQXLf14pg","t":"¿Cuándo se aplica la ley de defensa del consumidor? · Usuarios y Consumidores Unidos (3:35)"}, html: `
      <p class="idea">Sos <strong>consumidor</strong> cuando comprás un producto o contratás un servicio <strong>para vos o tu familia</strong>, no para revenderlo. En esa relación, la ley te protege porque la empresa sabe y puede más que vos.</p>
      <p>En todo el curso acompañamos a <strong>Hugo</strong>, jubilado de San Juan. Compró un lavarropas que se rompió a los dos meses, le cobran un servicio que dio de baja y no sabe por dónde empezar a reclamar.</p>
      <table>
        <tr><th>Situación</th><th>¿Relación de consumo?</th></tr>
        <tr><td>Comprás una heladera para tu casa</td><td>Sí</td></tr>
        <tr><td>Contratás internet, telefonía o un gimnasio</td><td>Sí</td></tr>
        <tr><td>Abrís una cuenta en un banco o sacás una tarjeta</td><td>Sí</td></tr>
        <tr><td>Comprás por internet a una empresa</td><td>Sí</td></tr>
        <tr><td>Le comprás algo usado a un vecino que no se dedica a vender</td><td>En general no: es entre particulares</td></tr>
      </table>
      <p>La <strong>relación de consumo</strong> es el vínculo entre vos (consumidor) y quien vende o presta el servicio (el <strong>proveedor</strong>, que lo hace de forma profesional). La protegen la <strong>Ley 24.240 de Defensa del Consumidor</strong> y el Código Civil y Comercial.</p>
      <p><strong>Ante la duda, a favor tuyo:</strong> la ley dice que, si hay dudas sobre cómo interpretar una norma o un contrato, se elige lo más favorable para el consumidor.</p>
      <p><strong>Tus derechos no se pueden renunciar:</strong> aunque firmes un papel que diga "renuncio a la garantía", esa cláusula no vale.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, el vendedor le dijo a Hugo que "la garantía la tiene que pedir al fabricante, nosotros no tenemos nada que ver". Hugo no sabía que, por ser consumidor, la tienda también es responsable.</p>` },
    { titulo: "Información clara y trato digno", html: `
      <p class="idea">Tenés derecho a recibir <strong>información cierta, clara y detallada</strong> antes de comprar, y a ser atendido con <strong>trato digno</strong>: sin humillaciones, amenazas ni maltrato.</p>
      <table>
        <tr><th>Derecho</th><th>Qué dice la ley (en palabras simples)</th><th>Artículo de la Ley 24.240</th></tr>
        <tr><td>Información</td><td>El proveedor tiene que informarte gratis y con claridad las características del producto y las condiciones de venta</td><td>4</td></tr>
        <tr><td>Trato digno</td><td>No pueden ponerte en situaciones vergonzantes, humillantes o intimidatorias</td><td>8 bis</td></tr>
        <tr><td>Igualdad con extranjeros</td><td>No pueden cobrarle otro precio a un turista extranjero por el mismo producto</td><td>8 bis</td></tr>
      </table>
      <pre><code>Ejemplos de trato indigno:
- Te hacen esperar horas sin razón ni información.
- Te gritan o te amenazan por una deuda.
- Te revisan la cartera a la salida delante de todos sin motivo.
- Te llaman muchas veces por día o a la noche para cobrarte.</code></pre>
      <p><strong>Pedí la información por escrito</strong> cuando es importante: un presupuesto, las condiciones de una promoción, el costo total de un crédito.</p>
      <p><strong>Si te tratan mal, anotá:</strong> fecha, hora, nombre de quien te atendió y qué pasó. Te sirve para reclamar.</p>
      <p>Por ejemplo, a Hugo lo llamaban 6 veces por día de una cobranza por una deuda que no era suya, con tono amenazante. Anotó cada llamada con la fecha y la hora para su reclamo.</p>` },
    { titulo: "La oferta y la publicidad obligan", html: `
      <p class="idea">Lo que el comercio <strong>ofrece y publica</strong> (precio, condiciones, promociones) lo <strong>tiene que cumplir</strong>. Si la publicidad dice algo, eso es parte del contrato.</p>
      <table>
        <tr><th>Regla</th><th>Qué significa</th><th>Artículo</th></tr>
        <tr><td>La oferta obliga</td><td>Una oferta al público obliga mientras dura, y tiene que decir fecha de comienzo y fin y sus condiciones</td><td>7</td></tr>
        <tr><td>La publicidad obliga</td><td>Lo que dice la publicidad se considera incluido en el contrato</td><td>8</td></tr>
        <tr><td>Si no cumplen</td><td>Podés exigir que cumplan, aceptar algo equivalente o rescindir y que te devuelvan lo pagado</td><td>10 bis</td></tr>
      </table>
      <p><strong>Rescindir</strong> es terminar un contrato. <strong>Rescindir con devolución</strong> quiere decir que se termina y te devuelven lo que pagaste.</p>
      <pre><code>Casos comunes:
- La góndola dice $3.500 y en la caja te cobran $3.900.
  → Te tienen que respetar el precio exhibido.
- La publicidad dice "12 cuotas sin interés" y al pagar
  te dicen que no aplica.
  → Pedí que cumplan las condiciones publicadas.
- "Envío gratis" y después te cobran el envío.
  → Lo publicado obliga.</code></pre>
      <p><strong>Guardá la prueba:</strong> una foto de la góndola, una captura de la publicidad con la fecha, el folleto. Sin prueba es tu palabra contra la de ellos.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, Hugo vio el lavarropas publicado a un precio en la página de la tienda y en el local le querían cobrar más. Mostró la captura de pantalla con la fecha y le respetaron el precio publicado.</p>` },
  ],
  practica: [
    "Anotá 5 compras o servicios que tengas y marcá cuáles son relaciones de consumo.",
    "Escribí 2 situaciones de trato indigno que hayas vivido o visto y anotá qué datos guardarías para reclamar.",
    "La próxima vez que veas una promoción, sacale una captura o una foto y anotá la fecha de comienzo y fin que figura.",
  ],
  recursos: [
    { t: "Ley 24.240 de Defensa del Consumidor (texto actualizado)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/actualizacion" },
    { t: "Derecho Fácil: la Ley de Defensa del Consumidor explicada", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
    { t: "Defensa del Consumidor (Argentina)", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Comprás una heladera para tu casa en una tienda. ¿Sos consumidor?", opciones: ["No, solo si la pagás al contado","No, solo si es cara","Sí: es para vos y la vende un proveedor","Solo si tenés factura A"], correcta: 2, explicacion: "Es una relación de consumo. \"Solo si es cara\" tienta, pero el monto no importa." },
    { q: "Si le comprás una bicicleta usada a un vecino que no vende cosas, ¿se aplica la ley del consumidor?", opciones: ["En general no: es una venta entre particulares","Sí, siempre","Sí, si es nueva","Solo si pagás con tarjeta"], correcta: 0, explicacion: "Falta un proveedor profesional. \"Siempre\" tienta, pero la ley protege la relación con un proveedor." },
    { q: "Hay dudas sobre cómo interpretar una cláusula de tu contrato. ¿A favor de quién se interpreta?", opciones: ["A favor de la empresa","De quien lo escribió","Se sortea","A favor del consumidor"], correcta: 3, explicacion: "Es una regla de la ley. \"De quien lo escribió\" tienta, pero justamente se protege a la parte débil." },
    { q: "Si firmaste un papel que dice \"renuncio a la garantía\", ¿vale?", opciones: ["Sí, lo firmaste","No: tus derechos no se pueden renunciar","Sí, si fue ante escribano","Depende de la tienda"], correcta: 1, explicacion: "Esa cláusula no vale. \"Lo firmaste\" tienta, pero la ley lo impide." },
    { q: "El vendedor no te explica qué cubre el servicio técnico. ¿Qué derecho tenés?", opciones: ["Ninguno, es tu culpa no preguntar","Solo si pagás la consulta","A recibir información clara, detallada y gratis","Solo por escrito con abogado"], correcta: 2, explicacion: "El artículo 4 obliga a informar. \"Tu culpa\" tienta, pero la obligación es del proveedor." },
    { q: "Si te llaman 6 veces por día con amenazas por una deuda, ¿qué derecho se viola?", opciones: ["El trato digno","Ninguno, es cobranza","El de garantía","El de arrepentimiento"], correcta: 0, explicacion: "No pueden intimidarte. \"Es cobranza\" tienta, pero no autoriza el maltrato." },
    { q: "Si te trataron mal en un local, ¿qué anotás para reclamar?", opciones: ["Nada, no sirve","Solo tu nombre","El color del local","Fecha, hora, nombre de quien te atendió y qué pasó"], correcta: 3, explicacion: "Los datos sostienen el reclamo. \"No sirve\" tienta, pero sin datos es difícil." },
    { q: "La góndola dice $3.500 y en la caja te cobran $3.900. ¿Qué podés pedir?", opciones: ["Nada, el de la caja es el real","Que te cobren el precio exhibido","La mitad de la diferencia","Que te lo regalen"], correcta: 1, explicacion: "La oferta obliga. \"El de la caja es el real\" tienta, pero lo exhibido es lo ofrecido." },
    { q: "Si la publicidad dice \"envío gratis\" y después te cobran el envío, ¿qué dice la ley?", opciones: ["Que la publicidad es solo orientativa","Que podés no pagar nada","Lo publicado se considera parte del contrato y obliga","Nada"], correcta: 2, explicacion: "Artículo 8. \"Orientativa\" tienta, pero la publicidad obliga." },
    { q: "Una empresa no cumple lo que ofreció. ¿Qué podés elegir según el artículo 10 bis?", opciones: ["Que cumplan, aceptar algo equivalente o rescindir con devolución","Solo esperar","Solo aceptar lo que te den","Solo pagar más"], correcta: 0, explicacion: "La elección es tuya. \"Solo aceptar lo que te den\" tienta, pero tenés tres opciones." },
    { q: "¿Qué es rescindir un contrato?", opciones: ["Firmarlo de nuevo","Pagarlo en cuotas","Renovarlo","Terminarlo"], correcta: 3, explicacion: "Rescindir es terminar. Renovar tienta por parecido, pero es lo contrario." },
    { q: "Querés reclamar una promoción que no te respetaron. ¿Qué te conviene tener?", opciones: ["Nada, te van a creer","Una captura o foto de la promoción con la fecha","Solo tu memoria","Un audio tuyo contándolo"], correcta: 1, explicacion: "Sin prueba es tu palabra contra la de ellos. \"Te van a creer\" tienta por confianza." },
  ],
},
{
  id: "antes",
  icono: "🧮",
  titulo: "Antes de comprar",
  nivel: "Básico",
  objetivos: [
    "Comparar precios por unidad de medida y precio final",
    "Leer la letra chica de promociones, cuotas y descuentos",
    "Pedir presupuestos por escrito con todo lo que incluyen",
  ],
  lecciones: [
    { titulo: "Comparar de verdad", html: `
      <p class="idea">El paquete más barato no siempre es el que conviene. Para comparar, mirá el <strong>precio por unidad</strong> (por kilo, por litro o por unidad) y el <strong>precio final</strong> con todo incluido.</p>
      <pre><code>Precio por kilo = precio ÷ peso en kilos

Yerba A: 500 g a $2.100  → $2.100 ÷ 0,5 = $4.200 el kilo
Yerba B: 1 kg a $3.900   → $3.900 ÷ 1   = $3.900 el kilo
Yerba C: 2 kg a $8.200   → $8.200 ÷ 2   = $4.100 el kilo
La más barata por kilo es la B, aunque no es el paquete más barato.
(Precios de ejemplo.)</code></pre>
      <table>
        <tr><th>Mirá también</th><th>Por qué</th></tr>
        <tr><td>Precio por kilo o litro en la etiqueta</td><td>Muchas góndolas ya lo informan: buscalo en chiquito</td></tr>
        <tr><td>Envío, instalación, flete</td><td>Pueden cambiar cuál conviene</td></tr>
        <tr><td>Recargo por pagar con tarjeta o en cuotas</td><td>El precio de lista puede no ser el que pagás</td></tr>
        <tr><td>Calidad y rendimiento</td><td>Un detergente concentrado rinde más</td></tr>
      </table>
      <p><strong>El precio final</strong> es lo que pagás en total: producto, envío, instalación, recargos e impuestos. Compará siempre precios finales.</p>
      <p><strong>"Llevá 3 y pagá 2"</strong> conviene solo si lo vas a usar antes de que se venza. Si se tira, no es ahorro.</p>
      <p>Para practicar estas cuentas, está el curso <strong>Matemática para la vida diaria</strong> de este sitio.</p>
      <p>Por ejemplo, Hugo siempre compraba el paquete de yerba de medio kilo porque "es más barato". Hizo la cuenta por kilo y vio que el de un kilo le ahorraba unos $300 por kilo.</p>` },
    { titulo: "La letra chica de las promociones", html: `
      <p class="idea">Las promociones tienen <strong>condiciones</strong>: fechas, medios de pago, topes de reintegro. Leelas antes de comprar para que el descuento sea real.</p>
      <table>
        <tr><th>Promoción</th><th>Qué revisar</th></tr>
        <tr><td>"30% de descuento"</td><td>¿Es en el momento o es un reintegro? ¿Tiene tope?</td></tr>
        <tr><td>"Reintegro"</td><td>Cuándo te lo devuelven (a veces en el resumen de otro mes) y el tope en pesos</td></tr>
        <tr><td>"12 cuotas sin interés"</td><td>¿El precio en cuotas es igual al de contado? ¿Con qué tarjetas?</td></tr>
        <tr><td>"Hasta 50% off"</td><td>"Hasta" quiere decir que solo algunos productos llegan a ese descuento</td></tr>
        <tr><td>"2x1"</td><td>¿En qué productos? ¿El segundo es el de menor precio?</td></tr>
      </table>
      <pre><code>Un reintegro con tope:
Promoción: 30% de reintegro, tope $5.000.
Comprás $30.000 → 30% sería $9.000, pero el tope es $5.000.
Descuento real: $5.000, o sea, 16,7% (no 30%).</code></pre>
      <p>Un <strong>reintegro</strong> es plata que te devuelven después de comprar. El <strong>tope</strong> es el máximo que te devuelven, aunque el porcentaje diera más.</p>
      <p><strong>Cuotas "sin interés" con precio inflado:</strong> si el precio en cuotas es más alto que el de contado, las cuotas sí tienen un costo. Compará el total.</p>
      <p>Para entender el costo de las cuotas y los créditos, está el curso <strong>Finanzas personales</strong> de este sitio.</p>
      <p>Por ejemplo, Hugo iba a comprar $30.000 con "30% de reintegro" y calculaba ahorrar $9.000. Leyó la letra chica: tope $5.000. Dividió la compra en dos días distintos y obtuvo el reintegro completo.</p>` },
    { titulo: "Presupuesto por escrito", html: `
      <p class="idea">Para servicios y compras grandes (reparaciones, instalaciones, muebles a medida), pedí un <strong>presupuesto por escrito</strong> con todo lo que incluye. Es tu prueba de lo que acordaron.</p>
      <table>
        <tr><th>Un buen presupuesto dice</th><th>Ejemplo</th></tr>
        <tr><td>Datos de quien lo hace</td><td>Nombre o razón social, CUIT, dirección, teléfono</td></tr>
        <tr><td>Qué se va a hacer, en detalle</td><td>"Reparación de bomba de desagote del lavarropas marca X"</td></tr>
        <tr><td>Materiales y repuestos</td><td>Cuáles, si son originales o alternativos</td></tr>
        <tr><td>Precio total y forma de pago</td><td>Con impuestos; si hay seña, cuánto</td></tr>
        <tr><td>Plazo</td><td>Fecha de entrega o de terminación</td></tr>
        <tr><td>Validez del presupuesto</td><td>"Válido por 10 días"</td></tr>
        <tr><td>Garantía del trabajo</td><td>Cuánto tiempo y qué cubre</td></tr>
      </table>
      <p>El <strong>CUIT</strong> es el número de identificación fiscal de una persona o empresa que vende. Sirve para saber con quién estás tratando y para reclamar.</p>
      <p><strong>Pedí 2 o 3 presupuestos</strong> para comparar. Lo más barato no siempre conviene: mirá qué incluye cada uno.</p>
      <p><strong>Si el trabajo sale más caro de lo presupuestado</strong>, te tienen que avisar antes y pedir tu aceptación. Sin eso, vale el presupuesto.</p>
      <p>Por ejemplo, un técnico le dijo a Hugo de palabra "son unos 40 mil" y después le cobró 70. Desde entonces pide todo por escrito, aunque sea por WhatsApp, con el precio total y qué incluye.</p>` },
  ],
  practica: [
    "Compará el precio por kilo o por litro de 3 tamaños de un producto que comprás seguido y anotá cuál conviene.",
    "Buscá una promoción con reintegro, leé las condiciones y calculá el descuento real con el tope. Anotá el porcentaje real.",
    "Pedí 2 presupuestos por escrito para un arreglo y anotá cuántos de los 7 datos de la tabla tiene cada uno.",
  ],
  recursos: [
    { t: "Curso de este sitio: Matemática para la vida diaria", url: "https://pkeios.github.io/EiaLearning/matematica-vida/" },
    { t: "Curso de este sitio: Finanzas personales", url: "https://pkeios.github.io/EiaLearning/finanzas-personales/" },
    { t: "Ley 24.240 de Defensa del Consumidor (texto actualizado)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/actualizacion" },
  ],
  quiz: [
    { q: "Yerba de 500 g a $2.100 y de 1 kg a $3.900. ¿Cuál conviene por kilo?", opciones: ["La de 500 g, porque es más barata","Son iguales","La de 1 kg: $3.900 el kilo contra $4.200","No se puede saber"], correcta: 2, explicacion: "$2.100 ÷ 0,5 = $4.200 el kilo. \"Más barata\" tienta por el precio del paquete, pero rinde menos." },
    { q: "Para comparar dos productos de distinto tamaño, ¿qué mirás?", opciones: ["El precio por unidad: por kilo, por litro o por unidad","Solo el precio del paquete","El color del envase","La marca"], correcta: 0, explicacion: "Así comparás lo mismo. El precio del paquete tienta, pero los tamaños son distintos." },
    { q: "Si una heladera es más barata, pero cobran el envío y la otra no, ¿qué comparás?", opciones: ["Solo el precio de la heladera","Solo el envío","La marca","El precio final con envío incluido"], correcta: 3, explicacion: "Lo que pagás en total es lo que importa. El precio de lista tienta, pero no es el final." },
    { q: "Si \"Llevá 3 y pagá 2\" de un yogur que se vence en 4 días, ¿conviene?", opciones: ["Siempre","Solo si lo vas a consumir antes de que se venza","Nunca","Solo si es de marca"], correcta: 1, explicacion: "Lo que se tira no es ahorro. \"Siempre\" tienta por la oferta." },
    { q: "30% de reintegro con tope de $5.000 y comprás $30.000. ¿Cuánto te devuelven?", opciones: ["$9.000","$30.000","$5.000","$1.500"], correcta: 2, explicacion: "El 30% daría $9.000, pero el tope es $5.000. $9.000 tienta si no leés la letra chica." },
    { q: "Si la publicidad dice \"hasta 50% off\", ¿qué significa?", opciones: ["Que solo algunos productos llegan a ese descuento","Que todo tiene 50% de descuento","Que el descuento es de más del 50%","Que es gratis"], correcta: 0, explicacion: "\"Hasta\" es el máximo. \"Todo tiene 50%\" tienta, pero no es lo que dice." },
    { q: "Si 12 cuotas \"sin interés\", pero el precio en cuotas es más alto que el de contado, ¿qué pasa?", opciones: ["Siguen sin interés","Es ilegal siempre","Conviene igual","Las cuotas sí tienen un costo: compará el total"], correcta: 3, explicacion: "La diferencia es el costo. \"Siguen sin interés\" tienta por el cartel." },
    { q: "Si una promoción ofrece reintegro, ¿qué significa?", opciones: ["Un descuento en el momento siempre","Plata que te devuelven después de comprar","Un impuesto","Una cuota"], correcta: 1, explicacion: "Llega después, a veces en otro resumen. \"En el momento\" tienta, pero ese es otro tipo de descuento." },
    { q: "Si un técnico te dice el precio de palabra, ¿qué pedís?", opciones: ["Nada, confiás","Que te lo repita","Un presupuesto por escrito con el precio total y qué incluye","Un audio"], correcta: 2, explicacion: "Por escrito es tu prueba. Un audio tienta, pero suele quedar incompleto." },
    { q: "Si el presupuesto trae el CUIT, ¿para qué te sirve?", opciones: ["Para saber con quién tratás y poder reclamar","Para pagar menos","Para nada","Para la garantía del fabricante"], correcta: 0, explicacion: "Identifica al proveedor. \"Para nada\" tienta si confiás en la persona." },
    { q: "Te pasaron 3 presupuestos. ¿Cuál elegís?", opciones: ["Siempre el más barato","Siempre el más caro","El primero que llegó","El que mejor relación tiene entre lo que incluye y el precio"], correcta: 3, explicacion: "Hay que ver qué incluye. \"El más barato\" tienta, pero puede no incluir repuestos o garantía." },
    { q: "Si el trabajo salió más caro que el presupuesto y no te avisaron, ¿qué vale?", opciones: ["Lo que te cobran al final","El presupuesto aceptado","La mitad de la diferencia","Lo que diga el técnico"], correcta: 1, explicacion: "Tienen que avisarte y pedir tu aceptación antes. \"Lo que te cobran\" tienta, pero no es lo acordado." },
  ],
},
{
  id: "garantia",
  icono: "🔧",
  titulo: "La garantía",
  nivel: "Intermedio",
  objetivos: [
    "Saber cuánto dura la garantía legal de un producto nuevo y de uno usado",
    "Reclamar la garantía al vendedor o al fabricante",
    "Saber qué podés pedir si la reparación no funciona",
  ],
  lecciones: [
    { titulo: "La garantía legal", video: {"id":"Q5xZEtdkN84","t":"Garantía: defensa del consumidor, Ley 24.240 art. 11 · Del Hecho al Derecho (3:39)"}, html: `
      <p class="idea">Por ley, las cosas que no se consumen al usarlas (electrodomésticos, celulares, muebles, ropa) tienen <strong>garantía legal</strong>: <strong>6 meses si son nuevas y 3 meses si son usadas</strong>, desde la entrega.</p>
      <table>
        <tr><th>Qué cubre</th><th>Ejemplo</th></tr>
        <tr><td>Defectos de cualquier tipo</td><td>El lavarropas no centrifuga</td></tr>
        <tr><td>Que no funcione bien</td><td>El celular se reinicia solo</td></tr>
        <tr><td>Que no sea lo que te ofrecieron</td><td>Compraste un televisor de 50 pulgadas y es de 43</td></tr>
        <tr><td>Aunque el defecto se viera al comprar</td><td>La ley lo dice expresamente</td></tr>
      </table>
      <p><strong>Es la garantía mínima:</strong> el fabricante o el vendedor pueden dar más tiempo (por ejemplo, 1 año), pero nunca menos que lo que dice la ley (artículo 11 de la Ley 24.240).</p>
      <p><strong>Sin certificado igual tenés garantía:</strong> el certificado de garantía tiene que dártelo el vendedor, pero si no te lo dieron, con la factura o el ticket alcanza para demostrar la fecha de compra.</p>
      <p><strong>Lo que no cubre:</strong> el desgaste normal por el uso o los daños por mal uso (por ejemplo, si se cayó y se rompió).</p>
      <p><strong>Las cosas que se consumen al usarlas</strong> (comida, productos de limpieza) no tienen esta garantía, pero igual tienen que estar en buen estado y no vencidas.</p>
      <p>Por ejemplo, el lavarropas de Hugo dejó de centrifugar a los 2 meses. Estaba dentro de los 6 meses de garantía legal, así que no tenía que pagar la reparación.</p>` },
    { titulo: "Cómo pedir la garantía", html: `
      <p class="idea">Podés pedir la garantía al <strong>vendedor o al fabricante</strong>: la ley dice que todos son responsables juntos (responsabilidad <strong>solidaria</strong>). No te pueden "pasar la pelota".</p>
      <pre><code>Pasos para pedir la garantía:
1. Juntá: factura o ticket, certificado de garantía (si te lo dieron),
   fotos o video del problema.
2. Reclamá por escrito (mail, formulario web, WhatsApp de la empresa)
   y pedí un número de reclamo.
3. Si retiran el producto, pedí una constancia escrita con fecha,
   estado del producto y qué falla tiene.
4. Anotá todo: fechas, nombres, números de reclamo.</code></pre>
      <table>
        <tr><th>Lo que te dicen</th><th>Lo que dice la ley</th></tr>
        <tr><td>"Tenés que ir al fabricante, nosotros no"</td><td>Vendedor, fabricante, importador y distribuidor son responsables solidarios (artículo 13)</td></tr>
        <tr><td>"El flete corre por tu cuenta"</td><td>Los gastos de traslado para la reparación en garantía están a cargo del responsable de la garantía</td></tr>
        <tr><td>"No tenemos repuestos"</td><td>Tienen que asegurar servicio técnico y repuestos (artículo 12)</td></tr>
      </table>
      <p><strong>Responsabilidad solidaria</strong> quiere decir que podés reclamarle a cualquiera de ellos por la garantía completa, y después ellos se arreglan entre sí.</p>
      <p><strong>El tiempo que el producto está en reparación</strong> se suma al plazo de la garantía: no lo perdés mientras lo arreglan.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, la tienda le dijo a Hugo que llamara al fabricante. Hugo respondió por escrito que la tienda también es responsable por el artículo 13. Le dieron un número de reclamo y retiraron el lavarropas al día siguiente.</p>` },
    { titulo: "Si la reparación no funciona", html: `
      <p class="idea">Si te lo devuelven "arreglado" pero sigue sin funcionar bien, la ley te da opciones: <strong>pedir uno nuevo, que te devuelvan la plata o un descuento</strong>.</p>
      <table>
        <tr><th>Opción (artículo 17)</th><th>Qué es</th></tr>
        <tr><td>Cambio</td><td>Te dan otro producto igual, y la garantía empieza de nuevo desde esa entrega</td></tr>
        <tr><td>Devolución</td><td>Devolvés el producto y te reintegran lo pagado según el precio actual del producto</td></tr>
        <tr><td>Quita del precio</td><td>Te quedás con el producto con una rebaja proporcional al problema</td></tr>
      </table>
      <pre><code>Para elegir:
- Si el producto te sirve con un detalle menor → quita del precio.
- Si querés el mismo producto funcionando     → cambio.
- Si perdiste la confianza en ese producto    → devolución.
En todos los casos, además, podés reclamar los daños que te causó.</code></pre>
      <p><strong>"Reparación no satisfactoria"</strong> es cuando el producto reparado no queda en condiciones de cumplir su función como corresponde.</p>
      <p><strong>Pedí por escrito la opción que elegís</strong> y guardá la respuesta. Si no te responden o se niegan, es momento de reclamar ante Defensa del Consumidor (módulo de reclamos).</p>
      <p>Por ejemplo, el lavarropas de Hugo volvió de la reparación y a la semana volvió a fallar. Pidió por escrito el cambio por uno nuevo, citando el artículo 17, y se lo cambiaron.</p>` },
  ],
  practica: [
    "Buscá la factura o el ticket de 3 electrodomésticos o aparatos tuyos y anotá hasta qué fecha tienen garantía legal.",
    "Escribí un mensaje para pedir una garantía con los datos de la lección y anotá qué pruebas adjuntarías.",
    "Escribí en 3 líneas qué opción del artículo 17 elegirías si una reparación no funciona y por qué.",
  ],
  recursos: [
    { t: "Ley 24.240 de Defensa del Consumidor (texto actualizado)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/actualizacion" },
    { t: "Derecho Fácil: la Ley de Defensa del Consumidor explicada", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
    { t: "Defensa del Consumidor (Argentina)", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si compraste un televisor nuevo, ¿cuánto dura como mínimo la garantía legal?", opciones: ["1 mes","3 meses","6 meses desde la entrega","Lo que diga la tienda, aunque sea menos"], correcta: 2, explicacion: "Nuevos: 6 meses. 3 meses tienta, pero es para usados." },
    { q: "Si compraste una heladera usada en un comercio, ¿cuánto dura la garantía legal?", opciones: ["3 meses","No tiene","6 meses","1 año"], correcta: 0, explicacion: "Los usados tienen 3 meses. \"No tiene\" tienta por ser usada, pero sí tiene." },
    { q: "Si el fabricante da 1 año de garantía, ¿es legal?", opciones: ["No, tiene que ser 6 meses exactos","No, es demasiado","Solo si lo autoriza el INPI","Sí: pueden dar más que el mínimo, nunca menos"], correcta: 3, explicacion: "La ley fija el mínimo. \"6 meses exactos\" tienta, pero se puede dar más." },
    { q: "Si no te dieron certificado de garantía, ¿la perdés?", opciones: ["Sí, sin certificado no hay garantía","No: con la factura o el ticket demostrás la fecha","Solo si pagaste con tarjeta","Depende del vendedor"], correcta: 1, explicacion: "El certificado lo debían dar ellos. \"Sin certificado no hay\" tienta, pero la garantía es legal." },
    { q: "Si se te cayó el celular y se rompió la pantalla, ¿lo cubre la garantía legal?", opciones: ["Sí, siempre","Sí, si es nuevo","No: es un daño por mal uso","Sí, si tiene menos de 6 meses"], correcta: 2, explicacion: "La garantía cubre defectos, no golpes. \"Si es nuevo\" tienta, pero el daño lo causó la caída." },
    { q: "Si la tienda te dice que vayas al fabricante, ¿qué dice la ley?", opciones: ["Que vendedor y fabricante son responsables solidarios","Que solo responde el fabricante","Que solo responde la tienda","Que no responde nadie"], correcta: 0, explicacion: "Podés reclamarle a cualquiera. \"Solo el fabricante\" tienta porque es quien repara." },
    { q: "¿Qué significa responsabilidad solidaria?", opciones: ["Que se reparten la culpa a medias","Que nadie es responsable","Que pagás vos la mitad","Que podés reclamarle a cualquiera de ellos por la garantía completa"], correcta: 3, explicacion: "Cualquiera responde por todo. \"A medias\" tienta por la palabra, pero no es así." },
    { q: "Si te quieren cobrar el flete para llevar el lavarropas al servicio técnico en garantía, ¿qué dice la ley?", opciones: ["Lo pagás vos siempre","Ese gasto está a cargo del responsable de la garantía","Se paga a medias","Depende del peso"], correcta: 1, explicacion: "La reparación en garantía no te tiene que costar. \"Lo pagás vos\" tienta porque lo dicen seguido." },
    { q: "Retiran tu producto para repararlo. ¿Qué pedís?", opciones: ["Nada","Que te lo devuelvan sin papeles","Una constancia escrita con fecha, estado y falla","Solo el teléfono del técnico"], correcta: 2, explicacion: "La constancia es tu prueba. \"Nada\" tienta por confianza." },
    { q: "Tu producto estuvo 20 días en reparación. ¿Qué pasa con la garantía?", opciones: ["Ese tiempo se suma al plazo de la garantía","Se pierde","Se acorta","Empieza de cero siempre"], correcta: 0, explicacion: "No perdés días mientras lo arreglan. \"Empieza de cero\" tienta, pero eso es cuando te dan uno nuevo." },
    { q: "Si te lo devolvieron reparado y sigue fallando, ¿qué podés pedir?", opciones: ["Nada más","Solo otra reparación","Solo un vale de compra","Cambio por uno nuevo, devolución de la plata o una quita del precio"], correcta: 3, explicacion: "El artículo 17 te da esas opciones. \"Solo otra reparación\" tienta, pero podés elegir." },
    { q: "Si te cambian el producto por uno nuevo, ¿desde cuándo corre la garantía?", opciones: ["Desde la compra original","Desde la entrega del nuevo","No tiene garantía","Desde que lo pediste"], correcta: 1, explicacion: "Empieza de nuevo. \"Desde la compra original\" tienta, pero es otro producto." },
  ],
},
{
  id: "distancia",
  icono: "🛒",
  titulo: "Compras por internet y a distancia",
  nivel: "Intermedio",
  objetivos: [
    "Usar el derecho a arrepentirte de una compra a distancia dentro de los 10 días",
    "Revisar que un vendedor online informe sus datos antes de comprar",
    "Reconocer estafas comunes en compras por internet",
  ],
  lecciones: [
    { titulo: "Los 10 días para arrepentirte", video: {"id":"iFVjGNEKAns","t":"Compras online: cómo funciona el botón de arrepentimiento · C5N (3:08)"}, html: `
      <p class="idea">Si comprás <strong>por internet, por teléfono o fuera del local</strong>, tenés <strong>10 días corridos</strong> para arrepentirte y devolver lo que compraste, sin dar explicaciones.</p>
      <table>
        <tr><th>Regla</th><th>Detalle</th><th>Dónde está</th></tr>
        <tr><td>Plazo</td><td>10 días corridos desde que recibís el producto o firmás el contrato (lo último que pase)</td><td>Ley 24.240, artículo 34, y Código Civil y Comercial, artículo 1110</td></tr>
        <tr><td>Sin explicaciones</td><td>No tenés que decir por qué</td><td>Artículo 34</td></tr>
        <tr><td>No se puede renunciar</td><td>Aunque la tienda diga "sin cambios ni devoluciones"</td><td>Artículo 34</td></tr>
        <tr><td>Botón de arrepentimiento</td><td>Las páginas web de venta tienen que tener un botón visible para pedir la revocación</td><td>Norma de Defensa del Consumidor</td></tr>
      </table>
      <p><strong>Revocar</strong> la compra es echarse atrás: devolvés el producto y te devuelven lo que pagaste. Los gastos de devolución, en general, no corren por tu cuenta.</p>
      <p><strong>Hay excepciones</strong> en el Código Civil y Comercial: por ejemplo, productos hechos a tu medida, que se echan a perder rápido o que por su naturaleza no se pueden devolver. Ante la duda, consultá.</p>
      <p><strong>Devolvé el producto en buen estado:</strong> lo podés revisar como en un local, pero no usarlo a fondo.</p>
      <p><strong>Pedilo por escrito</strong> (o con el botón) y guardá el comprobante con la fecha: los 10 días se cuentan hasta el día en que avisaste.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, Hugo compró por internet una silla que en persona le resultó incómoda. Al día 6 tocó el botón de arrepentimiento de la página, guardó la captura del pedido y le devolvieron la plata cuando retiraron la silla.</p>` },
    { titulo: "Antes de comprar online", html: `
      <p class="idea">Antes de pagar por internet, comprobá <strong>quién te vende</strong> y <strong>cómo pagás</strong>. Una tienda seria informa sus datos y usa medios de pago seguros.</p>
      <table>
        <tr><th>Revisá</th><th>Señal de confianza</th><th>Señal de alerta</th></tr>
        <tr><td>Datos del vendedor</td><td>Nombre o razón social, CUIT, dirección (la ley exige nombre, domicilio y CUIT en ventas a distancia)</td><td>Solo un WhatsApp y un alias</td></tr>
        <tr><td>Dirección de la página</td><td>La que conocés, escrita bien</td><td>Letras cambiadas (tiendaa-oficial.com), enlace de un anuncio raro</td></tr>
        <tr><td>Precio</td><td>Parecido al de otras tiendas</td><td>Muchísimo más barato que en todos lados</td></tr>
        <tr><td>Medio de pago</td><td>Tarjeta o plataformas de pago con protección al comprador</td><td>Te piden transferencia a una cuenta personal y apuro</td></tr>
        <tr><td>Opiniones</td><td>De otros compradores, en varios lugares</td><td>Sin opiniones o todas iguales y recientes</td></tr>
      </table>
      <p><strong>Guardá todo:</strong> captura de la publicación con el precio, el comprobante de pago, los mails de confirmación. Si hay un problema, son tus pruebas.</p>
      <p><strong>Leé la descripción completa</strong> antes de comprar: medidas, modelo, si es original, qué incluye. Si recibís algo distinto de lo publicado, podés reclamar por la oferta (módulo 1) o arrepentirte.</p>
      <p>Por ejemplo, Hugo vio un televisor a la mitad de precio en un anuncio de redes. La página no tenía CUIT ni dirección y pedía transferencia a una cuenta personal. No compró: era una página falsa.</p>` },
    { titulo: "Estafas comunes", video: {"id":"F7vp31IEf7c","t":"Cyber Monday: los consejos para evitar estafas y comprar con inteligencia · LA NACION (2:08)"}, html: `
      <p class="idea">Las estafas en compras online se repiten. Conocerlas es la mejor protección: <strong>urgencia, precio irreal y pedido de datos o de un código</strong> son las señales de siempre.</p>
      <table>
        <tr><th>Estafa</th><th>Cómo es</th><th>Qué hacés</th></tr>
        <tr><td>Página falsa</td><td>Copia de una tienda conocida con otra dirección</td><td>Entrá escribiendo vos la dirección, no desde anuncios</td></tr>
        <tr><td>Vendedor que pide pagar fuera de la plataforma</td><td>"Pagame por transferencia y te hago descuento"</td><td>Pagá siempre por la plataforma: fuera de ella perdés la protección</td></tr>
        <tr><td>Falso comprador (si vendés)</td><td>Manda un comprobante falso o pide que "confirmes" con un código</td><td>Verificá en tu cuenta que la plata llegó; nunca pases códigos</td></tr>
        <tr><td>Falso soporte</td><td>"Tu pedido está retenido, pagá el envío en este enlace"</td><td>Consultá en la página oficial, no en el enlace</td></tr>
        <tr><td>Sorteos falsos</td><td>"Ganaste, pagá el envío para recibir el premio"</td><td>Si no participaste, no ganaste</td></tr>
      </table>
      <p><strong>Si pagaste a una estafa:</strong> avisá enseguida a tu banco o a la plataforma de pago, guardá todas las pruebas y hacé la denuncia policial. Cuanto antes, más posibilidades hay.</p>
      <p><strong>Los códigos que llegan por SMS no se pasan nunca,</strong> a nadie. Con ellos pueden entrar a tus cuentas.</p>
      <p>Para profundizar, está el curso <strong>Seguridad digital y estafas</strong> de este sitio.</p>
      <p>Por ejemplo, a Hugo le llegó un mensaje: "Su paquete está retenido en aduana, pague $2.500 en este enlace". No esperaba ningún paquete de afuera. No tocó el enlace y lo borró.</p>` },
  ],
  practica: [
    "Revisá una tienda online donde compres y anotá si muestra nombre, CUIT, dirección y el botón de arrepentimiento.",
    "Calculá en qué fecha vence el plazo de 10 días corridos si recibís un producto hoy, y anotala.",
    "Anotá 3 señales de alerta de un mensaje o anuncio sospechoso que te haya llegado.",
  ],
  recursos: [
    { t: "Código Civil y Comercial (el artículo 1110 trata la revocación en ventas a distancia)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/texto" },
    { t: "Curso de este sitio: Seguridad digital y estafas", url: "https://pkeios.github.io/EiaLearning/seguridad-digital/" },
    { t: "Iniciar un reclamo ante Defensa del Consumidor (Ventanilla Federal Única)", url: "https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor" },
  ],
  quiz: [
    { q: "Compraste algo por internet y te arrepentiste. ¿Cuántos días tenés para revocar la compra?", opciones: ["3 días hábiles","30 días","10 días corridos","No se puede"], correcta: 2, explicacion: "Lo dicen la Ley 24.240 y el Código Civil y Comercial. 3 días tienta, pero es más." },
    { q: "¿Desde cuándo se cuentan los 10 días?", opciones: ["Desde que recibís el producto o firmás el contrato, lo último que pase","Desde que viste la publicidad","Desde que pagaste siempre","Desde fin de mes"], correcta: 0, explicacion: "Lo último de los dos. \"Desde que pagaste\" tienta, pero si el producto llega después, se cuenta desde la entrega." },
    { q: "Querés arrepentirte. ¿Tenés que explicar por qué?", opciones: ["Sí, con un motivo válido","Sí, por escrito y firmado","Solo si está roto","No"], correcta: 3, explicacion: "No hace falta motivo. \"Solo si está roto\" tienta, pero eso sería garantía." },
    { q: "Si la tienda online dice \"sin cambios ni devoluciones\", ¿perdés el derecho a arrepentirte?", opciones: ["Sí, porque lo avisaron","No: no se puede renunciar","Sí, si aceptaste las condiciones","Solo si es una oferta"], correcta: 1, explicacion: "Ese derecho no se puede dejar de lado. \"Lo avisaron\" tienta, pero no vale." },
    { q: "¿Qué tiene que tener una página web de venta para arrepentirte fácil?", opciones: ["Un número de fax","Un chat con robot obligatorio","Un botón de arrepentimiento visible","Nada especial"], correcta: 2, explicacion: "Es una exigencia para las ventas online. \"Nada especial\" tienta, pero hay que tenerlo." },
    { q: "Encargaste un mueble hecho a tu medida. ¿Podés arrepentirte igual?", opciones: ["Puede ser una excepción: consultá","Sí, siempre, sin excepciones","No, nunca nada online","Solo si es barato"], correcta: 0, explicacion: "Los productos a medida pueden quedar fuera. \"Sin excepciones\" tienta, pero las hay." },
    { q: "Si te arrepentiste, ¿cómo avisás?", opciones: ["De palabra por teléfono y listo","No hace falta avisar","Mandando el producto sin avisar","Por escrito o con el botón, guardando el comprobante con la fecha"], correcta: 3, explicacion: "El comprobante prueba que fue dentro del plazo. \"De palabra\" tienta, pero no queda registro." },
    { q: "Si una tienda online solo tiene un WhatsApp y un alias para pagar, ¿qué te falta saber?", opciones: ["El color de la página","Nombre o razón social, CUIT y dirección del vendedor","Cuántos seguidores tiene","Nada, alcanza"], correcta: 1, explicacion: "La ley exige esos datos en ventas a distancia. \"Alcanza\" tienta, pero no sabés con quién tratás." },
    { q: "Si un televisor está a mitad de precio en una página que no conocés, ¿qué pensás?", opciones: ["Que es una oportunidad única","Que hay que comprar ya","Que puede ser una estafa: un precio irreal es señal de alerta","Que es un error a tu favor"], correcta: 2, explicacion: "Muy por debajo del mercado es sospechoso. \"Oportunidad única\" tienta, pero así funcionan las estafas." },
    { q: "Un vendedor te ofrece descuento si le pagás fuera de la plataforma. ¿Qué hacés?", opciones: ["Pagás por la plataforma: fuera de ella perdés la protección","Aceptás el descuento","Pagás la mitad afuera","Le pasás tus datos de tarjeta"], correcta: 0, explicacion: "La plataforma te protege. El descuento tienta, pero es la estafa típica." },
    { q: "Te llega \"su paquete está retenido, pague $2.500 en este enlace\" y no esperás nada. ¿Qué hacés?", opciones: ["Pagás por las dudas","Respondés con tus datos","Lo reenviás a tus contactos","No tocás el enlace y lo borrás"], correcta: 3, explicacion: "Es un falso aviso. \"Por las dudas\" tienta, pero es así como roban." },
    { q: "Pagaste a una página falsa. ¿Qué hacés primero?", opciones: ["Esperás a ver si llega","Avisás enseguida a tu banco o a la plataforma de pago y guardás las pruebas","Le escribís al estafador","No hacés nada por vergüenza"], correcta: 1, explicacion: "Cuanto antes, más posibilidades. Esperar tienta, pero se pierde tiempo valioso." },
  ],
},
{
  id: "servicios",
  icono: "📶",
  titulo: "Servicios: contratos, facturas y bajas",
  nivel: "Intermedio",
  objetivos: [
    "Revisar un contrato de servicio antes de aceptarlo: precio, aumentos, permanencia",
    "Detectar cargos no reconocidos en una factura y reclamarlos",
    "Dar de baja un servicio por el mismo medio por el que lo contrataste",
  ],
  lecciones: [
    { titulo: "Antes de contratar un servicio", html: `
      <p class="idea">Internet, telefonía, cable, gimnasio, seguros: antes de contratar, preguntá y pedí por escrito <strong>cuánto cuesta, cómo aumenta, si hay permanencia y cómo se da de baja</strong>.</p>
      <table>
        <tr><th>Preguntá</th><th>Por qué</th></tr>
        <tr><td>¿Cuál es el precio final por mes, con impuestos?</td><td>El precio de la publicidad suele ser sin impuestos o promocional</td></tr>
        <tr><td>¿Cuánto dura la promoción y cuánto cuesta después?</td><td>Muchas veces el precio sube al tercer o sexto mes</td></tr>
        <tr><td>¿Cada cuánto y cómo aumenta?</td><td>Para no tener sorpresas en la factura</td></tr>
        <tr><td>¿Hay instalación, equipos o cargos extra?</td><td>Pueden sumar bastante</td></tr>
        <tr><td>¿Hay permanencia mínima o penalidad por baja?</td><td>Para saber si podés irte cuando quieras</td></tr>
        <tr><td>¿Cómo se da de baja?</td><td>Para tenerlo claro desde el principio</td></tr>
      </table>
      <p>La <strong>permanencia mínima</strong> es un tiempo que la empresa te pide quedarte; si te vas antes, puede haber una penalidad. Que exista tiene que estar informado claramente antes de contratar.</p>
      <p><strong>Guardá el contrato o el mail de confirmación</strong> con las condiciones: si después te cobran otra cosa, es tu prueba.</p>
      <p><strong>Leé la letra chica</strong> buscando palabras como "promocional", "bonificación", "permanencia", "penalidad" y "actualización" (lo ves en el curso de lectura de este sitio).</p>
      <p>Por ejemplo, Hugo contrató internet "a $9.900" y en la tercera factura le llegó $21.000. El precio era promocional por 2 meses. Desde entonces, antes de contratar pregunta el precio después de la promoción y lo pide por mail.</p>` },
    { titulo: "Revisar la factura", html: `
      <p class="idea">Revisá cada factura de servicios: <strong>período, cargos, total y vencimiento</strong>. Si aparece algo que no contrataste o que no corresponde, reclamalo antes de que se acumule.</p>
      <pre><code>Factura de internet (lo que mirás):
Período: 01/03 al 31/03
Abono mensual ................... $15.000
Bonificación promocional ........ -$5.000   ← ¿hasta cuándo dura?
Servicio "Asistencia Plus" ...... $2.500    ← ¿lo pedí?
Impuestos ....................... $2.600
Total ........................... $15.100
Vencimiento: 10/04</code></pre>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Un servicio que no pediste</td><td>Reclamá que lo den de baja y te devuelvan lo cobrado</td></tr>
        <tr><td>Un aumento no informado</td><td>Pedí que te muestren dónde te lo informaron</td></tr>
        <tr><td>Te cobran un período en que no tuviste servicio</td><td>Pedí el descuento de esos días</td></tr>
        <tr><td>Un cargo que no entendés</td><td>Preguntá qué es antes de pagar</td></tr>
      </table>
      <p><strong>No pagar no es la forma de reclamar:</strong> si dejás de pagar todo, te pueden cortar el servicio o sumarte intereses. En general conviene pagar lo que sí corresponde y reclamar por escrito lo que no.</p>
      <p><strong>Pedí número de reclamo siempre:</strong> es la prueba de que reclamaste y en qué fecha.</p>
      <p>Por ejemplo, Hugo encontró "Asistencia Plus" en su factura, un servicio que nunca pidió. Reclamó por el chat de la empresa, pidió número de reclamo y le devolvieron los 3 meses cobrados.</p>` },
    { titulo: "Darse de baja", html: `
      <p class="idea">Si contrataste un servicio <strong>por teléfono, por internet o de forma similar</strong>, podés darlo de baja <strong>por el mismo medio</strong>. La empresa tiene que mandarte una constancia de la baja dentro de las <strong>72 horas</strong>.</p>
      <table>
        <tr><th>Regla</th><th>Qué dice</th><th>Dónde está</th></tr>
        <tr><td>Baja por el mismo medio</td><td>Si contrataste por teléfono o por internet, podés rescindir por ese mismo medio</td><td>Ley 24.240, artículo 10 ter</td></tr>
        <tr><td>Constancia</td><td>La empresa tiene que enviarte sin cargo una constancia dentro de las 72 horas</td><td>Artículo 10 ter</td></tr>
        <tr><td>Botón de baja</td><td>Las empresas con venta online tienen que tener un acceso visible para dar de baja</td><td>Norma de Defensa del Consumidor</td></tr>
      </table>
      <pre><code>Cómo dar de baja sin vueltas:
1. Usá el mismo medio con que contrataste (web, app, teléfono).
2. Decí claramente: "Quiero dar de baja el servicio" (no "consultar").
3. Si te ofrecen descuentos para que te quedes y no te interesan,
   repetí que querés la baja.
4. Pedí número de gestión y la constancia de baja.
5. Si no te mandan la constancia en 72 horas, reclamá.
6. Revisá que la factura siguiente no te cobre el servicio.</code></pre>
      <p><strong>"Retención"</strong> es cuando la empresa te ofrece algo para que no te vayas. Podés escucharla, pero no te pueden impedir la baja.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, Hugo había contratado el cable por la página web. Para darlo de baja le decían que fuera a una sucursal. Usó el botón de baja de la página, guardó la captura y a las 48 horas le llegó la constancia por mail.</p>` },
  ],
  practica: [
    "Para un servicio que tengas, buscá el contrato o el mail de alta y anotá el precio final, cómo aumenta y si tiene permanencia.",
    "Revisá tu última factura de un servicio línea por línea y anotá cada cargo que no entiendas o no reconozcas.",
    "Buscá en la página de una empresa de servicios dónde está el botón o el acceso para dar de baja y anotá los pasos.",
  ],
  recursos: [
    { t: "Ley 24.240 de Defensa del Consumidor (texto actualizado)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/actualizacion" },
    { t: "Curso de este sitio: Leer mejor y entender lo que leés (la letra chica)", url: "https://pkeios.github.io/EiaLearning/lectura/" },
    { t: "Defensa del Consumidor (Argentina)", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Te ofrecen internet \"a $9.900\". ¿Qué preguntás antes de contratar?", opciones: ["Solo la velocidad","Nada, el precio está claro","El precio final con impuestos, cuánto dura la promoción y cuánto cuesta después","El color del módem"], correcta: 2, explicacion: "Muchas promociones suben después. \"El precio está claro\" tienta por el número grande del anuncio." },
    { q: "Si el contrato tiene permanencia mínima de 12 meses, ¿qué significa?", opciones: ["Que si te vas antes puede haber una penalidad","Que el precio no aumenta en 12 meses","Que el servicio dura 12 meses y se corta","Nada"], correcta: 0, explicacion: "Es un tiempo mínimo para quedarte. \"No aumenta\" tienta, pero es otra cosa." },
    { q: "Si contrataste un servicio por teléfono, ¿qué guardás?", opciones: ["Nada","Solo el número de teléfono de la empresa","La publicidad de la tele","El mail de confirmación o el número de gestión con las condiciones"], correcta: 3, explicacion: "Es tu prueba de lo acordado. \"Nada\" tienta por confianza." },
    { q: "En la factura aparece \"Asistencia Plus\" y nunca lo pediste. ¿Qué hacés?", opciones: ["Lo pagás igual","Reclamás que lo den de baja y te devuelvan lo cobrado, con número de reclamo","Dejás de pagar todo","Lo ignorás"], correcta: 1, explicacion: "Es un cargo no pedido. Dejar de pagar todo tienta, pero te pueden cortar." },
    { q: "Querés reclamar un cargo. ¿Dejás de pagar toda la factura?", opciones: ["Sí, así presionás","Sí, siempre","En general conviene pagar lo que corresponde y reclamar por escrito lo que no","No pagás nunca más"], correcta: 2, explicacion: "No pagar trae cortes e intereses. \"Así presionás\" tienta, pero te perjudica." },
    { q: "Si estuviste 5 días sin internet por una falla de la empresa, ¿qué podés pedir?", opciones: ["El descuento de esos días","Nada","Un mes gratis siempre","Que te paguen el doble"], correcta: 0, explicacion: "Te cobran un servicio que no tuviste. \"Nada\" tienta si nunca reclamaste antes." },
    { q: "Si te aumentaron el abono y no te avisaron, ¿qué pedís?", opciones: ["Nada, siempre aumenta","La baja inmediata sin preguntar","Que te bajen el precio a la mitad","Que te muestren dónde te informaron el aumento"], correcta: 3, explicacion: "El aumento tiene que estar informado. \"Siempre aumenta\" tienta, pero hay que informarlo." },
    { q: "Si contrataste el cable por la página web y te dicen que la baja es solo en una sucursal, ¿qué dice la ley?", opciones: ["Que tienen razón","Que podés darlo de baja por el mismo medio: la web","Que tenés que mandar carta documento","Que no se puede dar de baja"], correcta: 1, explicacion: "Artículo 10 ter. \"Tienen razón\" tienta porque lo dice la empresa." },
    { q: "Si pediste la baja, ¿en cuánto tiempo te tienen que mandar la constancia?", opciones: ["En un mes","Nunca","Dentro de las 72 horas","En 15 días hábiles"], correcta: 2, explicacion: "Lo dice el artículo 10 ter. Un mes tienta, pero es mucho más." },
    { q: "Llamás para dar de baja y te ofrecen un descuento para que te quedes. ¿Qué hacés si no te interesa?", opciones: ["Repetís que querés la baja y pedís el número de gestión","Aceptás para no discutir","Cortás sin decir nada","Pedís otro descuento sin dar la baja"], correcta: 0, explicacion: "La retención no puede impedir la baja. Aceptar tienta para no discutir, pero seguís pagando." },
    { q: "Ya diste de baja un servicio. ¿Qué revisás después?", opciones: ["Nada","Que te manden publicidad","El precio de otro servicio","Que la factura siguiente no te lo cobre"], correcta: 3, explicacion: "A veces siguen cobrando. \"Nada\" tienta porque ya diste la baja." },
    { q: "Querés dar de baja y la empresa tiene venta online. ¿Qué tiene que tener la página?", opciones: ["Solo un teléfono que no atiende","Un acceso visible para dar de baja","Nada","Un formulario en papel"], correcta: 1, explicacion: "Es una exigencia para quienes venden online. \"Solo un teléfono\" tienta porque pasa seguido." },
  ],
},
{
  id: "reclamar",
  icono: "📣",
  titulo: "Cómo reclamar",
  nivel: "Avanzado",
  objetivos: [
    "Reclamar primero a la empresa, por escrito y con pruebas",
    "Iniciar un reclamo en la Ventanilla Federal Única de Defensa del Consumidor",
    "Saber qué es una carta documento y cuándo conviene pedir ayuda profesional",
  ],
  lecciones: [
    { titulo: "Primero, a la empresa", html: `
      <p class="idea">El primer paso es reclamar <strong>a la empresa, por escrito y con pruebas</strong>. Muchos problemas se resuelven acá, y si no, ese reclamo es la base de los siguientes pasos.</p>
      <pre><code>Reclamo por escrito (mail, formulario web o chat de la empresa):

Asunto: Reclamo por garantía - Factura N.º 0001-00012345

Hola. Soy Hugo Pérez, DNI [tu DNI], cliente de la tienda.
El 10/01 compré un lavarropas modelo X (factura adjunta).
El 15/03 dejó de centrifugar. Está dentro de la garantía legal
de 6 meses (Ley 24.240, artículo 11).
Pido la reparación sin cargo, con retiro a domicilio.
Adjunto factura y un video de la falla.
Quedo a la espera de una respuesta y del número de reclamo.
Hugo Pérez · Teléfono [tu teléfono]</code></pre>
      <table>
        <tr><th>Un buen reclamo tiene</th><th>Por qué</th></tr>
        <tr><td>Tus datos y los de la compra</td><td>Que puedan encontrar tu caso</td></tr>
        <tr><td>Qué pasó, con fechas</td><td>Hechos, no enojo</td></tr>
        <tr><td>Qué derecho tenés (si lo sabés)</td><td>Muestra que conocés la ley</td></tr>
        <tr><td>Qué pedís, concreto</td><td>Reparación, cambio, devolución, baja</td></tr>
        <tr><td>Pruebas adjuntas</td><td>Factura, fotos, capturas</td></tr>
      </table>
      <p><strong>Tranquilo y concreto:</strong> un reclamo con insultos se lee peor. Un reclamo claro, con fechas y pruebas, se resuelve más rápido.</p>
      <p><strong>Si es por teléfono,</strong> anotá el número de gestión, la fecha, la hora y el nombre de quien te atendió, y después mandá un mail resumiendo lo hablado.</p>
      <p>Para escribir mails claros, está el curso <strong>Mails profesionales</strong> de este sitio.</p>
      <p>Por ejemplo, Hugo mandó el reclamo del lavarropas con este formato. Al día siguiente le respondieron con un número de reclamo y una fecha de retiro.</p>` },
    { titulo: "La Ventanilla Federal Única", video: {"id":"HQjJ8ku7zBg","t":"¿Cómo realizar reclamos en defensa del consumidor? · LA NACION (6:03)"}, html: `
      <p class="idea">Si la empresa no responde o no resuelve, podés reclamar ante <strong>Defensa del Consumidor</strong>. A nivel nacional se hace en línea y gratis por la <strong>Ventanilla Federal Única</strong>, que deriva el caso al mecanismo que corresponda.</p>
      <pre><code>Antes de iniciar, tené a mano:
- Tu DNI.
- Los datos de la empresa (nombre, CUIT si lo tenés).
- La factura, el contrato o el comprobante.
- Tu reclamo previo a la empresa y su respuesta (o falta de respuesta),
  con el número de reclamo.
- Fotos, capturas y todo lo que pruebe el problema.
- Qué pedís, concreto.</code></pre>
      <table>
        <tr><th>Paso</th><th>Qué pasa</th></tr>
        <tr><td>1. Cargás el reclamo</td><td>En la página de Defensa del Consumidor (Ventanilla Federal Única), con tus pruebas</td></tr>
        <tr><td>2. Se deriva</td><td>Al organismo o al procedimiento que corresponda según el caso y el lugar</td></tr>
        <tr><td>3. Conciliación</td><td>Muchas veces hay una instancia para llegar a un acuerdo con la empresa</td></tr>
        <tr><td>4. Resolución</td><td>Si no hay acuerdo, sigue el procedimiento que corresponda</td></tr>
      </table>
      <p>La <strong>conciliación</strong> es una instancia en la que las dos partes, con ayuda de un tercero, intentan llegar a un acuerdo.</p>
      <p><strong>También hay oficinas en tu provincia y tu municipio,</strong> y asociaciones de consumidores que asesoran gratis. Buscá la más cercana.</p>
      <p><strong>Los procedimientos y plazos pueden cambiar:</strong> seguí siempre las indicaciones de la página oficial.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, la empresa de cable no le mandó la constancia de baja a Hugo y le siguió cobrando. Hugo cargó el reclamo en la Ventanilla Federal Única con las capturas y el número de gestión. En la conciliación, la empresa aceptó dar la baja y devolverle lo cobrado.</p>` },
    { titulo: "Carta documento y ayuda profesional", video: {"id":"PVGUVaksBok","t":"Cómo redactar una carta documento · Juan Bautista Torres López (3:01)"}, html: `
      <p class="idea">La <strong>carta documento</strong> es una comunicación que se manda por correo y deja <strong>prueba de qué dijiste y cuándo la recibieron</strong>. Se usa cuando necesitás una constancia fuerte, por ejemplo antes de un reclamo judicial.</p>
      <table>
        <tr><th>Cuándo puede convenir</th><th>Cuándo alcanza con otra cosa</th></tr>
        <tr><td>La empresa no responde los reclamos por mail ni chat</td><td>La empresa responde y da número de reclamo</td></tr>
        <tr><td>Necesitás dejar constancia de una fecha (por ejemplo, que avisaste algo dentro de un plazo)</td><td>Tenés el comprobante del botón de arrepentimiento o de baja</td></tr>
        <tr><td>El caso puede terminar en un juicio</td><td>Es un reclamo chico que se resuelve en la Ventanilla</td></tr>
      </table>
      <p><strong>Lo que escribís en una carta documento queda como prueba,</strong> también en tu contra si te equivocás. Por eso, para casos importantes, conviene que la revise un abogado.</p>
      <p><strong>Dónde pedir ayuda:</strong></p>
      <table>
        <tr><th>Quién</th><th>Para qué</th></tr>
        <tr><td>Oficina de Defensa del Consumidor de tu municipio o provincia</td><td>Orientación y reclamos</td></tr>
        <tr><td>Asociaciones de consumidores</td><td>Asesoramiento, muchas veces gratis</td></tr>
        <tr><td>Abogado o consultorio jurídico gratuito (colegios de abogados, universidades)</td><td>Casos complejos, cartas documento, juicios</td></tr>
      </table>
      <p><strong>Los plazos importan:</strong> los derechos tienen plazos para reclamarse. No dejes pasar meses.</p>
      <p>Por ejemplo, un servicio de medicina prepaga no le respondía a Hugo ni a la Ventanilla. Fue al consultorio jurídico gratuito del colegio de abogados de San Juan, que le redactó una carta documento.</p>` },
  ],
  practica: [
    "Escribí un reclamo por escrito para un problema real o inventado con los 5 elementos de la tabla y anotá qué pruebas adjuntarías.",
    "Entrá a la página de Defensa del Consumidor, encontrá dónde se inicia el reclamo y anotá qué datos te pide.",
    "Buscá la oficina de Defensa del Consumidor de tu municipio o una asociación de consumidores y anotá su dirección o contacto.",
  ],
  recursos: [
    { t: "Iniciar un reclamo ante Defensa del Consumidor (Ventanilla Federal Única)", url: "https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor" },
    { t: "Defensa del Consumidor (Argentina)", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
    { t: "Curso de este sitio: Mails profesionales", url: "https://pkeios.github.io/EiaLearning/mail-profesional/" },
  ],
  quiz: [
    { q: "Tu lavarropas se rompió en garantía. ¿A quién reclamás primero?", opciones: ["Directo a un juicio","A tus vecinos en redes","A la empresa, por escrito y con pruebas","A nadie, ya fue"], correcta: 2, explicacion: "Es el primer paso y la base de los siguientes. El juicio tienta por enojo, pero es el último paso." },
    { q: "Escribís un reclamo. ¿Qué tono usás?", opciones: ["Tranquilo y concreto, con fechas y pruebas","Con insultos para que reaccionen","Todo en mayúsculas","Sin datos para no exponerte"], correcta: 0, explicacion: "Lo claro se resuelve más rápido. Los insultos tientan, pero se leen peor." },
    { q: "Tu reclamo dice \"quiero que me solucionen esto\". ¿Qué falta?", opciones: ["Más enojo","Nada","Un emoji","Qué pedís concretamente: reparación, cambio, devolución o baja"], correcta: 3, explicacion: "Un pedido concreto se puede cumplir. \"Nada\" tienta porque se entiende que querés una solución." },
    { q: "Reclamaste por teléfono. ¿Qué hacés después?", opciones: ["Nada, ya reclamaste","Anotás número de gestión, fecha, hora y nombre, y mandás un mail resumiendo","Llamás de nuevo para repetir","Esperás sin anotar"], correcta: 1, explicacion: "Por escrito queda prueba. \"Ya reclamaste\" tienta, pero sin registro es difícil demostrarlo." },
    { q: "Si la empresa no te responde, ¿dónde reclamás a nivel nacional?", opciones: ["En el INPI","En la AFIP","En la Ventanilla Federal Única de Defensa del Consumidor, en línea y gratis","Solo en un juzgado"], correcta: 2, explicacion: "Es el canal oficial. El juzgado tienta, pero hay pasos antes." },
    { q: "Si vas a iniciar un reclamo en la Ventanilla, ¿qué es importante tener?", opciones: ["El reclamo previo a la empresa con su número, y tus pruebas","Solo tu DNI","Una foto tuya","Nada"], correcta: 0, explicacion: "El reclamo previo muestra que intentaste resolverlo. \"Solo el DNI\" tienta, pero no alcanza." },
    { q: "¿Qué es la conciliación?", opciones: ["Una multa","Un juicio","El pago de la factura","Una instancia en la que las partes, con un tercero, intentan llegar a un acuerdo"], correcta: 3, explicacion: "Busca un acuerdo. \"Un juicio\" tienta, pero es antes y más simple." },
    { q: "Si no sabés a qué oficina ir, ¿qué otras opciones hay además de la nacional?", opciones: ["Ninguna","Oficinas de tu provincia o municipio y asociaciones de consumidores","Solo una escribanía","Solo la policía"], correcta: 1, explicacion: "Hay oficinas locales y asociaciones que asesoran gratis. \"Ninguna\" tienta si no las conocés." },
    { q: "¿Qué te da una carta documento?", opciones: ["El dinero de vuelta automáticamente","Una sentencia","Prueba de qué dijiste y de cuándo lo recibieron","Nada"], correcta: 2, explicacion: "Es una constancia fuerte. \"Plata automática\" tienta, pero no la garantiza." },
    { q: "La empresa responde tus mails y te dio número de reclamo. ¿Necesitás carta documento?", opciones: ["En general no: alcanza con el reclamo por escrito","Sí, siempre","Sí, dos","Sí, antes de escribir el mail"], correcta: 0, explicacion: "Se usa cuando no responden o se necesita una constancia fuerte. \"Siempre\" tienta por seguridad." },
    { q: "Si vas a mandar una carta documento en un caso importante, ¿qué conviene?", opciones: ["Escribirla rápido y enojado","Copiar una de internet sin leer","No poner fechas","Que la revise un abogado: lo que escribís queda como prueba"], correcta: 3, explicacion: "Un error puede jugar en tu contra. Copiar una de internet tienta, pero puede no servir para tu caso." },
    { q: "Tu problema es complejo y no tenés plata para un abogado. ¿Dónde podés ir?", opciones: ["A ningún lado","A un consultorio jurídico gratuito, de colegios de abogados o universidades","Solo a un abogado caro","A una red social"], correcta: 1, explicacion: "Hay atención gratuita. \"A ningún lado\" tienta si no sabés que existe." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu caso de principio a fin",
  nivel: "Avanzado",
  objetivos: [
    "Analizar una compra o un servicio real con lo aprendido",
    "Preparar un reclamo completo con pruebas y el derecho que corresponde",
    "Evaluar tu caso con una rúbrica y armar tu kit de consumidor",
  ],
  lecciones: [
    { titulo: "Analizá tu caso", html: `
      <p class="idea">El proyecto es tomar <strong>un caso real</strong> (tuyo, de tu familia o inventado a partir de algo que pasó) y analizarlo con todo el curso: qué pasó, qué derecho tenés y qué podés pedir.</p>
      <pre><code>Ficha del caso:
Qué compraste o contrataste: __________________
Dónde y cómo (local, online, teléfono): ________
Fecha de compra o contrato: ___________________
Qué pasó, con fechas: _________________________
¿Es una relación de consumo?  sí / no
Derecho que aplica:  información / oferta y publicidad / garantía /
                     arrepentimiento / baja / trato digno
¿Está dentro del plazo?  (garantía 6 o 3 meses, arrepentimiento 10 días)
Qué pedís: ____________________________________
Pruebas que tenés: ____________________________</code></pre>
      <table>
        <tr><th>Si tu caso es...</th><th>Módulo para repasar</th></tr>
        <tr><td>Un producto que se rompió</td><td>La garantía</td></tr>
        <tr><td>Una compra online de la que te arrepentiste</td><td>Compras por internet y a distancia</td></tr>
        <tr><td>Un precio o una promoción no respetada</td><td>Tus derechos (oferta y publicidad)</td></tr>
        <tr><td>Un cargo o una baja de un servicio</td><td>Servicios</td></tr>
        <tr><td>Maltrato o amenazas</td><td>Tus derechos (trato digno)</td></tr>
      </table>
      <p><strong>Si no tenés un caso real,</strong> usá uno común: una garantía, una promoción no cumplida o una baja que no se respetó.</p>
      <p>Por ejemplo, Hugo eligió el caso del cable: contratado por web, pidió la baja por el botón, no le llegó la constancia en 72 horas y le siguieron cobrando dos meses. Derecho: artículo 10 ter.</p>` },
    { titulo: "Prepará el reclamo", html: `
      <p class="idea">Con la ficha completa, prepará <strong>el reclamo a la empresa</strong> y, por si no responde, <strong>la carpeta para la Ventanilla</strong>.</p>
      <pre><code>Carpeta del reclamo (en el celular o en papel):
1. Factura, contrato o comprobante de compra.
2. Capturas, fotos o videos del problema.
3. El reclamo a la empresa (texto que mandaste) y su número.
4. Las respuestas de la empresa (o la constancia de que no respondió).
5. Una línea de tiempo: fecha y qué pasó en cada paso.
6. Lo que pedís, en una oración.</code></pre>
      <table>
        <tr><th>Línea de tiempo de Hugo</th><th></th></tr>
        <tr><td>05/02</td><td>Pidió la baja con el botón de la web (captura)</td></tr>
        <tr><td>08/02</td><td>No llegó la constancia (pasaron 72 horas)</td></tr>
        <tr><td>10/02</td><td>Reclamo por chat, número 4521</td></tr>
        <tr><td>10/03</td><td>Factura de marzo cobra el servicio</td></tr>
        <tr><td>12/03</td><td>Reclamo en la Ventanilla Federal Única</td></tr>
      </table>
      <p><strong>La línea de tiempo ordena todo:</strong> cualquiera que la lea entiende el caso en un minuto. Es lo más útil para una conciliación.</p>
      <p><strong>Pedí algo concreto y razonable:</strong> la baja, la devolución de lo cobrado, la reparación. Pedidos exagerados suelen demorar el acuerdo.</p>
      <p class="suave">Este curso te ayuda a conocer tus derechos y preparar un reclamo, pero no reemplaza el asesoramiento de un abogado ni de Defensa del Consumidor en tu caso concreto.</p>
      <p>Por ejemplo, con su carpeta y su línea de tiempo, Hugo explicó el caso en la conciliación en 3 minutos. La empresa reconoció el error y le devolvió los dos meses.</p>` },
    { titulo: "Evaluá con la rúbrica y armá tu kit", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para revisar tu caso. Después, armá un <strong>kit de consumidor</strong> para la próxima vez.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Análisis</td><td>Ficha completa: relación de consumo, derecho y plazo</td><td>Falta una parte</td><td>Sin análisis</td></tr>
        <tr><td>Pruebas</td><td>Factura, capturas y reclamos guardados</td><td>Algunas</td><td>Ninguna</td></tr>
        <tr><td>Reclamo escrito</td><td>Con datos, hechos, derecho, pedido concreto y pruebas</td><td>Le falta algo</td><td>Solo de palabra</td></tr>
        <tr><td>Línea de tiempo</td><td>Con fechas de cada paso</td><td>Incompleta</td><td>Sin línea de tiempo</td></tr>
        <tr><td>Siguiente paso</td><td>Sabés dónde reclamar si no responden</td><td>Más o menos</td><td>No sabés</td></tr>
        <tr><td>Tono</td><td>Claro y respetuoso</td><td>Algo de enojo</td><td>Insultos</td></tr>
      </table>
      <pre><code>Total: ___ de 12

Kit de consumidor (una carpeta en el celular):
- Fotos de facturas y garantías de lo que compraste
- Contratos y mails de alta de tus servicios
- Modelo de reclamo por escrito (el tuyo)
- Enlaces: Defensa del Consumidor, Ventanilla Federal Única,
  oficina de tu municipio, una asociación de consumidores</code></pre>
      <p><strong>La mejor defensa es la prevención:</strong> pedir todo por escrito, guardar comprobantes y leer la letra chica evita la mayoría de los problemas.</p>
      <p>Por ejemplo, Hugo sacó 11 de 12: perdió un punto en el tono, porque en el primer chat se había enojado. Armó su kit y lo compartió con su grupo del centro de jubilados.</p>` },
  ],
  practica: [
    "Completá la ficha de un caso real o inventado y anotá qué derecho aplica y si está dentro del plazo.",
    "Armá la carpeta del reclamo con la línea de tiempo y anotá cuántas pruebas tenés.",
    "Puntuá tu caso con la rúbrica y anotá tu total de 12.",
    "Armá tu kit de consumidor en el celular y anotá cuántas facturas y garantías guardaste.",
  ],
  recursos: [
    { t: "Iniciar un reclamo ante Defensa del Consumidor (Ventanilla Federal Única)", url: "https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor" },
    { t: "Derecho Fácil: la Ley de Defensa del Consumidor explicada", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
    { t: "Defensa del Consumidor (Argentina)", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Analizás tu caso. ¿Qué es lo primero que revisás?", opciones: ["Cuánto podés cobrar de más","El color del producto","Si es una relación de consumo","Si tenés abogado"], correcta: 2, explicacion: "Define si aplica la ley. \"Cuánto cobrar\" tienta, pero primero hay que ver si te protege." },
    { q: "Tu celular nuevo falló a los 4 meses. ¿Qué derecho aplica y está en plazo?", opciones: ["Garantía legal, dentro de los 6 meses","Arrepentimiento, dentro de los 10 días","Ninguno","Garantía, pero vencida a los 3 meses"], correcta: 0, explicacion: "Nuevo: 6 meses. 3 meses tienta, pero es para usados." },
    { q: "Si te arrepentiste de una compra online a los 15 días de recibirla, ¿podés revocar?", opciones: ["Sí, siempre","Sí, si no lo usaste","Sí, si es caro","No por arrepentimiento: pasaron los 10 días"], correcta: 3, explicacion: "El plazo es de 10 días corridos. \"Si no lo usaste\" tienta, pero el plazo ya pasó." },
    { q: "¿Qué va en la carpeta del reclamo?", opciones: ["Solo la factura","Comprobante, pruebas, reclamos, respuestas, línea de tiempo y pedido","Solo tu enojo por escrito","Nada"], correcta: 1, explicacion: "Todo junto arma el caso. \"Solo la factura\" tienta, pero falta lo que pasó después." },
    { q: "¿Para qué sirve la línea de tiempo?", opciones: ["Para decorar","Para alargar el reclamo","Para que cualquiera entienda el caso en un minuto","No sirve"], correcta: 2, explicacion: "Ordena los hechos. \"Para decorar\" tienta, pero es lo más útil." },
    { q: "Pedís en tu reclamo \"un millón de pesos por las molestias\" por un cargo de $2.500. ¿Qué pasa?", opciones: ["Un pedido exagerado suele demorar el acuerdo","Te lo dan seguro","Es lo recomendado","Nada"], correcta: 0, explicacion: "Lo razonable se resuelve antes. \"Te lo dan\" tienta, pero rara vez." },
    { q: "Si reclamaste solo de palabra, ¿cuántos puntos sacás en \"Reclamo escrito\"?", opciones: ["2","1","12","0"], correcta: 3, explicacion: "\"Solo de palabra\" es 0. 1 tienta, pero es para un reclamo escrito incompleto." },
    { q: "Tu reclamo tuvo algo de enojo pero sin insultos. ¿Cuántos puntos en \"Tono\"?", opciones: ["2","1","0","12"], correcta: 1, explicacion: "\"Algo de enojo\" es 1. 0 tienta, pero es para insultos." },
    { q: "¿Qué va en el kit de consumidor?", opciones: ["Solo fotos del producto","Contraseñas del banco","Facturas, garantías, contratos, tu modelo de reclamo y enlaces útiles","Nada"], correcta: 2, explicacion: "Te prepara para la próxima vez. Las contraseñas tientan como \"datos útiles\", pero no van ahí." },
    { q: "¿Cuál es la mejor defensa como consumidor?", opciones: ["Prevenir: pedir por escrito, guardar comprobantes y leer la letra chica","Reclamar siempre gritando","Comprar sin mirar","No guardar nada"], correcta: 0, explicacion: "La prevención evita la mayoría de los problemas. Gritar tienta por enojo, pero no ayuda." },
    { q: "Tu caso es de una baja de cable no respetada. ¿Qué artículo citás?", opciones: ["El 11, de garantía","El 34, de arrepentimiento","Ninguno","El 10 ter de la Ley 24.240"], correcta: 3, explicacion: "El 10 ter trata la baja por el mismo medio. El 11 tienta, pero es para productos." },
    { q: "La empresa no responde tu reclamo escrito. ¿Cuál es el siguiente paso?", opciones: ["Rendirte","Reclamar en la Ventanilla Federal Única u oficina de tu zona","Escribir lo mismo 20 veces","Dejar de pagar todo"], correcta: 1, explicacion: "Es el paso siguiente. Escribir 20 veces tienta, pero no avanza." },
  ],
},
];
