// Temario del curso "Las cuentas del emprendimiento". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js cuentas-emprendimiento y node tools/metodologia.js cuentas-emprendimiento
window.TEMARIO = [
{
  id: "separar",
  icono: "👛",
  titulo: "Separar la plata del negocio",
  nivel: "Básico",
  objetivos: [
    "Separar la plata del emprendimiento de la plata de tu casa",
    "Registrar cada retiro personal en lugar de sacar sin anotar",
    "Asignarte un sueldo fijo que el negocio pueda pagar",
  ],
  lecciones: [
    { titulo: "Dos bolsillos, no uno", video: {"id":"MVLp-bh8pvU","t":"Separá tus gastos personales y los de tu negocio · Querido Dinero (2:08)"}, html: `<p>En todo el curso acompañamos a <strong>Rocío</strong>, que tiene un almacén chico en el frente de su casa en Santiago del Estero. Vende bien, pero a fin de mes nunca sabe si ganó o perdió: la plata del almacén y la de su casa están en el mismo cajón.</p>
      <p class="idea">El primer paso para tener cuentas claras es <strong>separar la plata del negocio de la plata de tu casa</strong>. Si están mezcladas, no hay forma de saber si el negocio gana.</p>
      <table>
        <tr><th>Mezclado</th><th>Separado</th></tr>
        <tr><td>Un solo cajón o una sola cuenta para todo</td><td>Un cajón o una cuenta para el negocio, otra para la casa</td></tr>
        <tr><td>Pagás el súper de tu casa con la caja del negocio</td><td>Te pasás una plata del negocio a tu casa y la anotás</td></tr>
        <tr><td>No sabés cuánto ganaste</td><td>Mirás la cuenta del negocio y lo sabés</td></tr>
        <tr><td>Creés que ganás porque "hay plata"</td><td>Sabés cuánto es para reponer y cuánto es ganancia</td></tr>
      </table>
      <p><strong>Cómo separar sin gastar:</strong></p>
      <ul>
        <li>Una <strong>caja</strong> o un sobre solo para el efectivo del negocio.</li>
        <li>Una <strong>cuenta bancaria</strong> o una <strong>billetera virtual</strong> solo para el negocio (muchas son gratis).</li>
        <li>Si cobrás con QR o transferencia, que sea a la cuenta del negocio.</li>
      </ul>
      <p>Una <strong>billetera virtual</strong> es una app que guarda plata y permite cobrar y pagar con el celular, por ejemplo con un código QR.</p>
      <p><strong>Por qué importa tanto:</strong> la plata de la caja no es toda tuya. Una parte es para reponer mercadería, otra para pagar luz o alquiler del local, otra para impuestos. Lo que queda es la ganancia.</p>
      <p>Por ejemplo, Rocío abrió una cuenta gratis en una billetera virtual solo para el almacén y puso una caja de lata para el efectivo. La cartera de su casa ya no se toca para el negocio.</p>` },
    { titulo: "Los retiros: cuando sacás plata para vos", html: `
      <p class="idea">Sacar plata del negocio para tu casa está bien, pero <strong>cada retiro se anota</strong>. Si no, la caja no cierra y no sabés qué pasó.</p>
      <p>Un <strong>retiro</strong> es la plata que el dueño saca del negocio para uso personal. No es un gasto del negocio: es plata que se lleva el dueño.</p>
      <pre><code>Registro de retiros de Rocío (marzo)
Fecha   Concepto                 Monto
03/03   Para el súper de casa    $25.000
10/03   Garrafa de casa          $15.000
15/03   Sueldo de la quincena    $150.000
28/03   Zapatillas del hijo      $40.000
        Total retirado           $230.000</code></pre>
      <table>
        <tr><th>Hacé esto</th><th>Evitá esto</th></tr>
        <tr><td>Anotar cada retiro con fecha y motivo</td><td>"Agarrar un billete" de la caja sin decir nada</td></tr>
        <tr><td>Pasar los retiros por transferencia a tu cuenta personal</td><td>Pagar cosas de la casa directo con la tarjeta del negocio</td></tr>
        <tr><td>Retirar en días fijos</td><td>Retirar cada vez que te falta algo</td></tr>
      </table>
      <p><strong>Lo que se lleva tu familia también cuenta:</strong> si sacás mercadería del almacén para tu casa (fideos, leche), es un retiro. Anotalo al precio que te costó.</p>
      <p>Por ejemplo, a fin de mes Rocío contaba la caja y le faltaban $60.000. Revisando, encontró 3 veces que sacó plata para la casa sin anotar. Desde abril anota todo y la caja le cierra.</p>` },
    { titulo: "Tu sueldo como dueño", html: `
      <p class="idea">En vez de sacar plata cuando te hace falta, ponete un <strong>sueldo fijo</strong>: un monto que el negocio te paga cada semana, quincena o mes. Así sabés con qué contás en tu casa y el negocio no se queda sin plata.</p>
      <pre><code>Cómo elegir tu sueldo (ejemplo con números de Rocío)
1. Mirá lo que quedó en los últimos 3 meses después de pagar todo
   (mercadería, luz, impuestos):  $420.000 · $380.000 · $450.000
2. Promedio: (420.000 + 380.000 + 450.000) ÷ 3 = $416.667
3. Sueldo: menos que el promedio, para dejar un margen.
   Rocío eligió $300.000 por mes (dos pagos de $150.000).
4. Lo que sobra queda en el negocio para imprevistos y crecer.</code></pre>
      <table>
        <tr><th>Si el sueldo es...</th><th>Qué pasa</th></tr>
        <tr><td>Demasiado alto</td><td>El negocio se queda sin plata para reponer</td></tr>
        <tr><td>Demasiado bajo o cero</td><td>Trabajás gratis y tu casa no llega a fin de mes</td></tr>
        <tr><td>Fijo y posible</td><td>Tu casa se organiza y el negocio crece de a poco</td></tr>
      </table>
      <p>Un <strong>promedio</strong> es la suma de varios números dividida por cuántos son.</p>
      <p><strong>Revisalo cada 3 meses:</strong> si el negocio deja más, subilo; si deja menos, bajalo antes de endeudarte.</p>
      <p>Para organizar la plata de tu casa con ese sueldo, está el curso <strong>Finanzas personales</strong> de este sitio.</p>
      <p>Por ejemplo, con el sueldo fijo de $300.000, Rocío armó el presupuesto de su casa. Y en el negocio empezaron a quedar unos $100.000 por mes para un fondo de imprevistos.</p>` },
  ],
  practica: [
    "Elegí dónde vas a guardar la plata del negocio (caja, cuenta o billetera virtual) y anotá cuál es.",
    "Durante 2 semanas, anotá cada retiro con fecha, motivo y monto, y sumalos al final.",
    "Calculá el promedio de lo que te quedó en los últimos 3 meses y anotá qué sueldo te vas a poner.",
  ],
  recursos: [
    { t: "Universidad de Santa Clara (Mobi): la contabilidad y el flujo de caja (curso gratis en castellano)", url: "https://www.scu.edu/mobiespanol/cursos/iniciar-un-negocio/la-contabilidad-y-el-flujo-de-caja/" },
    { t: "Curso de este sitio: Finanzas personales", url: "https://pkeios.github.io/EiaLearning/finanzas-personales/" },
    { t: "Argentina.gob.ar: emprender (trámites y programas)", url: "https://www.argentina.gob.ar/tema/emprender" },
  ],
  quiz: [
    { q: "Tu negocio y tu casa usan el mismo cajón. ¿Qué problema tenés?", opciones: ["Ninguno, es más cómodo","Pagás más impuestos","No podés saber si el negocio gana o pierde","Vendés menos"], correcta: 2, explicacion: "Mezclado no se ve nada. \"Es más cómodo\" tienta, pero no sabés qué pasa con tu plata." },
    { q: "Querés separar la plata sin gastar. ¿Qué hacés?", opciones: ["Una caja y una cuenta o billetera virtual solo para el negocio","Contratar un contador","Abrir una empresa","Dejar todo como está"], correcta: 0, explicacion: "Separar es gratis. El contador tienta, pero no hace falta para este paso." },
    { q: "¿Qué es una billetera virtual?", opciones: ["Una billetera de cuero","Una tarjeta de crédito","Un banco con sucursal","Una app para guardar plata, cobrar y pagar con el celular"], correcta: 3, explicacion: "Es una app. \"Tarjeta de crédito\" tienta, pero no es lo mismo." },
    { q: "Hay $200.000 en la caja. ¿Es todo ganancia?", opciones: ["Sí, es todo tuyo","No: una parte es para reponer, pagar gastos e impuestos","Sí, si es efectivo","Depende del día"], correcta: 1, explicacion: "La caja no es toda ganancia. \"Es todo tuyo\" tienta porque está ahí." },
    { q: "Sacás plata de la caja para el súper de tu casa. ¿Qué es eso?", opciones: ["Un gasto del negocio","Nada, no hace falta anotarlo","Un retiro, y se anota","Una venta"], correcta: 2, explicacion: "Es plata que se lleva el dueño. \"Gasto del negocio\" tienta, pero el súper de tu casa no lo es." },
    { q: "A fin de mes falta plata en la caja. ¿Qué revisás primero?", opciones: ["Si hubo retiros sin anotar","Si te robaron","Si la calculadora anda","Nada, pasa siempre"], correcta: 0, explicacion: "Los retiros sin anotar son la causa más común. El robo tienta, pero primero revisá lo tuyo." },
    { q: "Te llevás 2 paquetes de fideos del almacén para tu casa. ¿Qué hacés?", opciones: ["Nada, es poco","Lo anoto como venta","Lo anoto como pérdida","Lo anoto como retiro al precio que me costó"], correcta: 3, explicacion: "La mercadería que te llevás también es un retiro. \"Es poco\" tienta, pero sumado a fin de mes es mucho." },
    { q: "¿Cuál es la mejor forma de retirar plata para tu casa?", opciones: ["Cada vez que me falta algo","En días fijos, por transferencia y anotado","Pagando la casa con la tarjeta del negocio","Agarrando de la caja sin contar"], correcta: 1, explicacion: "Días fijos y anotado es ordenado. \"Cada vez que me falta\" tienta, pero desordena todo." },
    { q: "En 3 meses te quedaron $420.000, $380.000 y $450.000. ¿Cuál es el promedio?", opciones: ["$1.250.000","$450.000","$416.667","$380.000"], correcta: 2, explicacion: "Sumás y dividís por 3. $1.250.000 tienta, pero es la suma, no el promedio." },
    { q: "Tu promedio es $416.667 por mes. ¿Qué sueldo te ponés?", opciones: ["Uno menor, como $300.000, para dejar margen","$416.667 exacto","$600.000","Cero"], correcta: 0, explicacion: "Un margen te cubre los meses flojos. El promedio exacto tienta, pero un mes malo te deja sin plata." },
    { q: "Si te ponés un sueldo muy alto, ¿qué puede pasar?", opciones: ["Nada","Vendés más","Pagás menos impuestos","El negocio se queda sin plata para reponer"], correcta: 3, explicacion: "El negocio necesita plata para seguir. \"Nada\" tienta porque al principio alcanza." },
    { q: "Hace 3 meses que tenés el mismo sueldo y el negocio deja más. ¿Qué hacés?", opciones: ["Lo dejo igual para siempre","Reviso y lo subo un poco","Me lo bajo","Retiro todo lo que sobra"], correcta: 1, explicacion: "Se revisa cada 3 meses. Retirar todo tienta, pero no queda para imprevistos." },
  ],
},
{
  id: "registrar",
  icono: "📒",
  titulo: "Anotar cada movimiento",
  nivel: "Básico",
  objetivos: [
    "Anotar cada ingreso y cada egreso con fecha, concepto, categoría y medio de pago",
    "Guardar los comprobantes para respaldar lo anotado",
    "Agrupar los movimientos en categorías para entender en qué se va la plata",
  ],
  lecciones: [
    { titulo: "Ingresos y egresos", html: `
      <p class="idea">Llevar las cuentas es <strong>anotar cada plata que entra y cada plata que sale</strong>. Lo que entra es un <strong>ingreso</strong>; lo que sale, un <strong>egreso</strong>.</p>
      <table>
        <tr><th>Ingresos (entra plata)</th><th>Egresos (sale plata)</th></tr>
        <tr><td>Ventas en efectivo</td><td>Compra de mercadería</td></tr>
        <tr><td>Ventas por QR o transferencia</td><td>Luz, gas, internet del negocio</td></tr>
        <tr><td>Cobro de fiados</td><td>Alquiler del local</td></tr>
        <tr><td>Otros cobros del negocio</td><td>Impuestos (por ejemplo, el monotributo)</td></tr>
        <tr><td></td><td>Retiros del dueño</td></tr>
      </table>
      <pre><code>Cuaderno de movimientos de Rocío
Fecha  Concepto                 Tipo     Categoría    Medio      Monto
04/03  Ventas del día           Ingreso  Ventas       Efectivo   $68.000
04/03  Ventas del día           Ingreso  Ventas       QR         $42.000
04/03  Pan para vender          Egreso   Mercadería   Efectivo   $18.000
05/03  Luz del local            Egreso   Servicios    Transf.    $35.000
05/03  Retiro para casa         Egreso   Retiro       Transf.    $25.000</code></pre>
      <p><strong>Anotá todos los días:</strong> si esperás a fin de semana, te olvidás de cosas. Al cierre del día te lleva 5 minutos.</p>
      <p><strong>En cuaderno o en el celular:</strong> sirve un cuaderno, una planilla o una app. Lo importante es que sea siempre el mismo lugar.</p>
      <p>Por ejemplo, Rocío empezó con un cuaderno de tapa dura que deja al lado de la caja. Cada noche, antes de cerrar, anota las ventas del día y lo que pagó.</p>` },
    { titulo: "Comprobantes: el respaldo de lo que anotás", html: `
      <p class="idea">Cada movimiento tiene que tener su <strong>comprobante</strong>: un papel o archivo que prueba que pasó. Sirven para revisar, para reclamar y para los impuestos.</p>
      <table>
        <tr><th>Comprobante</th><th>Qué prueba</th></tr>
        <tr><td>Factura o ticket de compra</td><td>Que compraste algo y cuánto pagaste</td></tr>
        <tr><td>Factura que emitís vos</td><td>Que vendiste y cuánto cobraste</td></tr>
        <tr><td>Comprobante de transferencia o QR</td><td>Que entró o salió plata de tu cuenta</td></tr>
        <tr><td>Boleta de luz, gas o alquiler</td><td>Que pagaste un servicio</td></tr>
        <tr><td>Recibo</td><td>Que alguien te pagó o le pagaste, sin factura</td></tr>
      </table>
      <pre><code>Cómo guardarlos
- Una caja o carpeta por mes: "2026-03".
- En el celular: sacá foto el mismo día y guardala en una carpeta por mes.
- Anotá en el cuaderno el número del comprobante si lo tiene.
- Los tickets térmicos (los del súper) se borran con el tiempo:
  sacales foto.</code></pre>
      <p>Un <strong>comprobante</strong> es el documento que respalda un movimiento de plata.</p>
      <p><strong>Si sos monotributista,</strong> tenés que emitir factura por cada venta. Las reglas de facturación las ves en el curso <strong>Monotributo, facturación e impuestos</strong>. Este cuaderno es aparte: es para que vos entiendas tu negocio.</p>
      <p>Por ejemplo, el proveedor de Rocío le cobró dos veces el mismo pedido. Como ella guardaba las facturas por mes, encontró las dos y le devolvieron $54.000.</p>` },
    { titulo: "Categorías: en qué se va la plata", html: `
      <p class="idea">Agrupar los movimientos en <strong>categorías</strong> te muestra en qué se va la plata. Pocas categorías, siempre las mismas.</p>
      <table>
        <tr><th>Categoría</th><th>Qué incluye</th></tr>
        <tr><td>Ventas</td><td>Todo lo que cobrás por vender</td></tr>
        <tr><td>Mercadería</td><td>Lo que comprás para vender o para fabricar</td></tr>
        <tr><td>Servicios</td><td>Luz, gas, agua, internet, teléfono del negocio</td></tr>
        <tr><td>Alquiler</td><td>Local o espacio de trabajo</td></tr>
        <tr><td>Impuestos</td><td>Monotributo, Ingresos Brutos, tasas</td></tr>
        <tr><td>Comisiones</td><td>Lo que te cobran las apps de cobro o de venta</td></tr>
        <tr><td>Otros gastos</td><td>Bolsas, limpieza, arreglos</td></tr>
        <tr><td>Retiros</td><td>Plata que se lleva el dueño</td></tr>
      </table>
      <pre><code>Resumen de egresos de Rocío (marzo)
Mercadería   $1.250.000   ████████████████  62%
Retiros      $  300.000   ████               15%
Alquiler     $  180.000   ██                  9%
Servicios    $  120.000   █                   6%
Impuestos    $   95.000   █                   5%
Otros        $   55.000   ▌                   3%
Total        $2.000.000</code></pre>
      <p>Una <strong>comisión</strong> es lo que te cobra una empresa por un servicio, por ejemplo un porcentaje de cada cobro con QR o tarjeta.</p>
      <p><strong>Usá siempre los mismos nombres:</strong> si un día ponés "Luz" y otro el nombre de la empresa de luz, después no podés sumar. Elegí "Servicios" y listo.</p>
      <p>Por ejemplo, al agrupar, Rocío vio que gastaba $55.000 por mes en "otros". Casi todo eran bolsas: empezó a cobrar las bolsas grandes y bajó el gasto a la mitad.</p>` },
  ],
  practica: [
    "Anotá durante 7 días todos los ingresos y egresos con fecha, concepto, tipo, categoría, medio y monto.",
    "Juntá los comprobantes de una semana en una carpeta o en fotos y anotá cuántos faltaban.",
    "Agrupá los egresos de la semana en las categorías de la tabla y anotá cuál fue la más grande.",
  ],
  recursos: [
    { t: "Universidad de Santa Clara (Mobi): la contabilidad y el flujo de caja (curso gratis en castellano)", url: "https://www.scu.edu/mobiespanol/cursos/iniciar-un-negocio/la-contabilidad-y-el-flujo-de-caja/" },
    { t: "Curso de este sitio: Monotributo, facturación e impuestos para independientes", url: "https://pkeios.github.io/EiaLearning/impuestos-independientes/" },
    { t: "BBVA Argentina: qué es el flujo de caja y cómo hacerlo", url: "https://www.bbva.com/es/ar/salud-financiera/emprendimientos-que-es-el-flujo-de-caja-y-como-hacerlo/" },
  ],
  quiz: [
    { q: "Cobrás $5.000 de un fiado. ¿Qué es en tu cuaderno?", opciones: ["Un egreso","Un retiro","Un ingreso","Nada, ya lo habías vendido"], correcta: 2, explicacion: "Entra plata, es un ingreso. \"Ya lo habías vendido\" tienta, pero la plata entra recién ahora." },
    { q: "Si pagás la luz del local, ¿qué es?", opciones: ["Un egreso de la categoría servicios","Un ingreso","Un retiro","Mercadería"], correcta: 0, explicacion: "Sale plata para un servicio del negocio. Retiro tienta, pero un retiro es plata para vos." },
    { q: "¿Cuándo conviene anotar los movimientos?", opciones: ["Una vez por mes","Cuando me acuerdo","Solo los grandes","Todos los días, al cierre"], correcta: 3, explicacion: "Cada día te lleva 5 minutos y no te olvidás. Una vez por mes tienta, pero se pierden cosas." },
    { q: "Usás un cuaderno, después una app y después otra planilla. ¿Qué problema hay?", opciones: ["Ninguno","Los datos quedan desparramados: conviene un solo lugar","Que gastás más","Que vendés menos"], correcta: 1, explicacion: "Siempre el mismo lugar. \"Ninguno\" tienta porque cada una anda bien, pero no podés sumar." },
    { q: "¿Para qué sirve un comprobante?", opciones: ["Para decorar la caja","Solo para el contador","Para probar que pasó un movimiento de plata","Para nada"], correcta: 2, explicacion: "Es el respaldo. \"Solo para el contador\" tienta, pero también te sirve a vos para reclamar." },
    { q: "Tenés un ticket del súper de hace 6 meses y casi no se lee. ¿Qué tendrías que haber hecho?", opciones: ["Sacarle una foto el día que lo recibí","Plastificarlo","Tirarlo","Nada, no importa"], correcta: 0, explicacion: "Los tickets térmicos se borran. Plastificarlo tienta, pero el calor lo borra igual." },
    { q: "Si un proveedor te cobra dos veces lo mismo, ¿qué te ayuda a reclamar?", opciones: ["Acordarte","Pagar y no decir nada","Discutir sin pruebas","Tener las facturas guardadas por mes"], correcta: 3, explicacion: "Con el comprobante probás. Acordarte tienta, pero sin papel es tu palabra contra la suya." },
    { q: "Si sos monotributista, ¿tu cuaderno de movimientos reemplaza la factura?", opciones: ["Sí, alcanza con el cuaderno","No: la factura se emite igual; el cuaderno es para entender tu negocio","Sí, si está en el celular","No hace falta ninguno"], correcta: 1, explicacion: "Son cosas distintas. \"Alcanza con el cuaderno\" tienta, pero la factura es obligatoria." },
    { q: "Un día anotás \"Luz\" y otro el nombre de la empresa de luz. ¿Qué problema tenés?", opciones: ["Ninguno","Que la empresa te cobra más","No podés sumar fácil: conviene usar siempre \"Servicios\"","Que la luz es más cara"], correcta: 2, explicacion: "Mismos nombres siempre. \"Ninguno\" tienta porque vos sabés que es lo mismo, pero la suma no lo sabe." },
    { q: "Si la app de cobro te descuenta un porcentaje de cada venta, ¿en qué categoría va?", opciones: ["Comisiones","Ventas","Retiros","Alquiler"], correcta: 0, explicacion: "Es lo que te cobra la empresa por el servicio. Ventas tienta porque viene junto con la venta." },
    { q: "Gastaste $1.250.000 en mercadería de un total de $2.000.000. ¿Qué porcentaje es?", opciones: ["12%","125%","50%","62%, más o menos"], correcta: 3, explicacion: "1.250.000 ÷ 2.000.000 = 0,625. 50% tienta como número redondo, pero es más." },
    { q: "Ves que \"otros gastos\" es más grande de lo que creías. ¿Qué hacés?", opciones: ["Lo ignoro","Miro qué hay adentro y busco qué se puede bajar","Borro la categoría","Vendo más caro todo"], correcta: 1, explicacion: "Las categorías sirven para ver y decidir. Subir todos los precios tienta, pero quizá el problema es uno solo." },
  ],
},
{
  id: "caja",
  icono: "💵",
  titulo: "La caja del día",
  nivel: "Intermedio",
  objetivos: [
    "Abrir la caja con un fondo de cambio fijo",
    "Hacer el arqueo de caja al cierre y calcular la diferencia",
    "Controlar los cobros digitales y las comisiones contra lo que llega a la cuenta",
  ],
  lecciones: [
    { titulo: "Abrir la caja con un fondo fijo", html: `
      <p class="idea">Cada día la caja empieza con un <strong>fondo de cambio</strong>: un monto fijo en billetes chicos y monedas para dar vuelto. Siempre el mismo, así es fácil controlar.</p>
      <pre><code>Fondo de cambio de Rocío: $20.000
  4 billetes de $2.000 = $8.000
  8 billetes de $1.000 = $8.000
  8 billetes de $500   = $4.000
  Total                  $20.000

Al cerrar, los $20.000 quedan separados para el día siguiente.
El resto es lo que entró en el día.</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>El fondo siempre es el mismo monto</td><td>Así sabés que todo lo demás es venta del día</td></tr>
        <tr><td>No se usa para pagar cosas</td><td>Si lo usás, al otro día no tenés cambio</td></tr>
        <tr><td>Billetes chicos</td><td>Para dar vuelto sin quedarte sin cambio</td></tr>
        <tr><td>Una sola persona responsable por turno</td><td>Si hay diferencia, se sabe quién atendía</td></tr>
      </table>
      <p>El <strong>fondo de cambio</strong> es el dinero fijo que queda en la caja para dar vuelto. No es ganancia ni venta.</p>
      <p><strong>Seguridad:</strong> no dejes mucho efectivo en la caja. Sacá lo que sobra del fondo varias veces al día y guardalo en un lugar seguro o depositalo. Cobrar más con QR y transferencia también ayuda.</p>
      <p>Por ejemplo, Rocío empezaba cada día con "lo que había" en la caja. Nunca sabía cuánto vendió. Desde que deja fijos $20.000 de fondo, todo lo que hay arriba de eso es la venta del día.</p>` },
    { titulo: "El arqueo: contar y comparar", video: {"id":"aaN46ACA0p8","t":"Ejercicio de arqueo de caja con faltante · Educación de Excelencia, Sebastián Carli (4:47)"}, html: `
      <p class="idea">El <strong>arqueo de caja</strong> es contar la plata que hay al final del día y compararla con la que <strong>debería haber</strong> según lo anotado. Si no coincide, hay una <strong>diferencia</strong> que investigar.</p>
      <pre><code>Arqueo de Rocío (martes)
Debería haber:
  Fondo de cambio inicial          $20.000
+ Ventas en efectivo anotadas      $68.000
− Pagos en efectivo del día        $18.000 (pan)
− Retiros en efectivo              $     0
= Debería haber                    $70.000

Contado:                           $68.500
Diferencia: 68.500 − 70.000 =      −$1.500 (faltante)</code></pre>
      <table>
        <tr><th>Resultado</th><th>Qué es</th><th>Causas comunes</th></tr>
        <tr><td>Contado = debería haber</td><td>La caja cierra</td><td>Todo bien</td></tr>
        <tr><td>Contado menor</td><td>Faltante</td><td>Vuelto mal dado, venta no cobrada, retiro sin anotar, billete falso</td></tr>
        <tr><td>Contado mayor</td><td>Sobrante</td><td>Venta no anotada, vuelto de menos a un cliente</td></tr>
      </table>
      <p><strong>Anotá la diferencia todos los días,</strong> aunque sea chica. Si es seguido o crece, hay un problema que resolver.</p>
      <p><strong>Contá con calma</strong>, separando los billetes por valor, y contá dos veces si no te da.</p>
      <p>Por ejemplo, durante una semana a Rocío le faltaban entre $500 y $2.000 por día. Se dio cuenta de que cuando había cola anotaba las ventas al final y se olvidaba algunas. Empezó a anotar en el momento y dejó de faltar.</p>` },
    { titulo: "Cobros digitales y comisiones", html: `
      <p class="idea">Los cobros con <strong>QR, transferencia, débito o crédito</strong> no están en la caja, pero también se controlan: lo que vendiste tiene que coincidir con lo que <strong>llega a tu cuenta</strong>, menos las comisiones.</p>
      <table>
        <tr><th>Medio</th><th>Cuándo llega la plata</th><th>Qué puede descontar</th></tr>
        <tr><td>Transferencia</td><td>En el momento</td><td>Normalmente nada</td></tr>
        <tr><td>QR de billetera virtual</td><td>En el momento o en unos días, según el plan</td><td>Una comisión que depende del plazo</td></tr>
        <tr><td>Débito con posnet</td><td>En unos días</td><td>Comisión y a veces impuestos</td></tr>
        <tr><td>Crédito con posnet</td><td>Más tarde (días o semanas)</td><td>Comisión más alta; las cuotas pueden costar más</td></tr>
      </table>
      <pre><code>Control semanal de Rocío
Ventas con QR anotadas en el cuaderno:   $280.000
Llegó a la cuenta del negocio:           $271.600
Diferencia:                              $  8.400
Comisión esperada (3% de 280.000):       $  8.400  ✔ coincide</code></pre>
      <p>Un <strong>posnet</strong> es la maquinita para cobrar con tarjeta de débito o crédito.</p>
      <p><strong>Las comisiones cambian según la empresa y el plan:</strong> fijate en la app o en el contrato cuánto te cobran y en cuántos días te dan la plata. El 3% del ejemplo es solo para hacer la cuenta.</p>
      <p><strong>Cuidado con los comprobantes falsos:</strong> hay estafas con capturas de pantalla de transferencias que no se hicieron. Antes de entregar, confirmá en tu app que la plata entró.</p>
      <p>Por ejemplo, un cliente le mostró a Rocío una captura de una transferencia de $45.000. Ella revisó su app: no había entrado nada. No le entregó la mercadería hasta que la plata llegó de verdad.</p>` },
  ],
  practica: [
    "Armá tu fondo de cambio con billetes chicos y anotá cuánto es y cómo está compuesto.",
    "Hacé el arqueo de caja 5 días seguidos y anotá la diferencia de cada día.",
    "Compará las ventas digitales de una semana con lo que llegó a tu cuenta y anotá cuánto se fue en comisiones.",
    "Buscá en tu app de cobro cuánto te cobran de comisión y en cuántos días te dan la plata, y anotá los 2 datos.",
  ],
  recursos: [
    { t: "Universidad de Santa Clara (Mobi): la contabilidad y el flujo de caja (curso gratis en castellano)", url: "https://www.scu.edu/mobiespanol/cursos/iniciar-un-negocio/la-contabilidad-y-el-flujo-de-caja/" },
    { t: "BBVA Argentina: qué es el flujo de caja y cómo hacerlo", url: "https://www.bbva.com/es/ar/salud-financiera/emprendimientos-que-es-el-flujo-de-caja-y-como-hacerlo/" },
    { t: "Argentina.gob.ar: emprender (trámites y programas)", url: "https://www.argentina.gob.ar/tema/emprender" },
  ],
  quiz: [
    { q: "Empezás cada día con \"lo que haya\" en la caja. ¿Qué problema tenés?", opciones: ["Ninguno","Que te roban más","No sabés cuánto vendiste en el día","Que pagás más impuestos"], correcta: 2, explicacion: "Con un fondo fijo, lo demás es venta. \"Ninguno\" tienta porque igual hay plata." },
    { q: "Te falta cambio y usás el fondo para pagar al proveedor. ¿Qué pasa mañana?", opciones: ["No tenés para dar vuelto","Nada","Tenés más ventas","Se repone solo"], correcta: 0, explicacion: "El fondo no se toca para pagar. \"Se repone solo\" tienta, pero no." },
    { q: "Si un vecino te pregunta qué es el fondo de cambio, ¿qué le decís?", opciones: ["La ganancia del día","Las ventas del día","La plata para impuestos","El dinero fijo que queda en la caja para dar vuelto"], correcta: 3, explicacion: "No es venta ni ganancia. \"Ventas\" tienta porque está en la misma caja." },
    { q: "Tenés mucho efectivo en la caja a la tarde. ¿Qué hacés?", opciones: ["Lo dejo para mostrar que vendí","Saco lo que sobra del fondo y lo guardo en un lugar seguro","Lo cuento delante de los clientes","Nada"], correcta: 1, explicacion: "Menos efectivo, menos riesgo. Dejarlo tienta por comodidad." },
    { q: "Fondo $20.000, ventas en efectivo $68.000 y pagaste $18.000 en efectivo. ¿Cuánto debería haber?", opciones: ["$88.000","$68.000","$70.000","$106.000"], correcta: 2, explicacion: "20.000 + 68.000 − 18.000. $88.000 tienta si te olvidás de restar el pago." },
    { q: "Debería haber $70.000 y contaste $68.500. ¿Qué tenés?", opciones: ["Un faltante de $1.500","Un sobrante de $1.500","Todo bien","Una ganancia de $68.500"], correcta: 0, explicacion: "Contado menor es faltante. Sobrante tienta si restás al revés." },
    { q: "Te sobran $3.000 en el arqueo. ¿Qué pudo pasar?", opciones: ["Ganaste más","Nada, es suerte","Un retiro sin anotar","Una venta sin anotar o un vuelto de menos a un cliente"], correcta: 3, explicacion: "El sobrante también es error. Un retiro sin anotar tienta, pero causaría faltante." },
    { q: "Te faltan entre $500 y $2.000 casi todos los días. ¿Qué hacés?", opciones: ["Lo ignoro porque es poco","Busco la causa: cómo anoto, cómo doy vuelto, quién atiende","Pongo plata mía","Dejo de hacer arqueo"], correcta: 1, explicacion: "Una diferencia seguida es un problema. \"Es poco\" tienta, pero en un mes es mucho." },
    { q: "Vendiste $280.000 con QR y te llegaron $271.600. La comisión es 3%. ¿Está bien?", opciones: ["No, faltan $8.400","No se puede saber","Sí: el 3% de 280.000 es 8.400","No, tendría que llegar todo"], correcta: 2, explicacion: "La diferencia es justo la comisión. \"Faltan $8.400\" tienta si te olvidás de la comisión." },
    { q: "Vas a cobrar con crédito en cuotas. ¿Qué tenés que saber?", opciones: ["Cuánto te cobran de comisión y cuándo te llega la plata","Nada, llega igual","Que llega en el momento","Que no tiene costo"], correcta: 0, explicacion: "Crédito suele tener comisión más alta y llegar más tarde. \"Llega igual\" tienta porque la venta se hizo." },
    { q: "¿Qué es un posnet?", opciones: ["Una billetera virtual","Una caja registradora","Un tipo de factura","La maquinita para cobrar con tarjeta"], correcta: 3, explicacion: "Es para tarjetas. Billetera virtual tienta, pero es una app." },
    { q: "Un cliente te muestra una captura de una transferencia. ¿Qué hacés antes de entregar?", opciones: ["Le creo y entrego","Confirmo en mi app que la plata entró","Le pido otra captura","Le saco foto a la captura"], correcta: 1, explicacion: "Las capturas se pueden falsificar. Otra captura tienta, pero también puede ser falsa." },
  ],
},
{
  id: "planilla",
  icono: "📊",
  titulo: "Tu planilla de cuentas",
  nivel: "Intermedio",
  objetivos: [
    "Armar una planilla de movimientos con columnas fijas",
    "Sumar ingresos y egresos con SUMA y SUMAR.SI",
    "Leer el saldo y el resumen por categoría",
  ],
  lecciones: [
    { titulo: "Armar la planilla", video: {"id":"BeTPX92c02I","t":"Cómo llevar ingresos y egresos en Excel para un negocio pequeño · Kevin Ramirez (11:22)"}, html: `
      <p class="idea">Una <strong>planilla de cálculo</strong> (Excel, Hojas de cálculo de Google o similar) hace las cuentas por vos. Pasás el cuaderno a columnas y las sumas salen solas.</p>
      <pre><code>     A        B                  C         D           E          F
1  Fecha    Concepto           Tipo      Categoría   Medio      Monto
2  04/03    Ventas del día     Ingreso   Ventas      Efectivo   68000
3  04/03    Ventas del día     Ingreso   Ventas      QR         42000
4  04/03    Pan para vender    Egreso    Mercadería  Efectivo   18000
5  05/03    Luz del local      Egreso    Servicios   Transf.    35000
6  05/03    Retiro para casa   Egreso    Retiros     Transf.    25000</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Una fila por movimiento</td><td>Así se puede sumar y filtrar</td></tr>
        <tr><td>Los montos sin signo $ ni puntos</td><td>La planilla los toma como números</td></tr>
        <tr><td>Siempre las mismas palabras en Tipo y Categoría</td><td>Si no, las fórmulas no las encuentran</td></tr>
        <tr><td>Una hoja por mes, o una sola con la fecha bien puesta</td><td>Para comparar meses</td></tr>
      </table>
      <p>Una <strong>planilla de cálculo</strong> es un programa con filas y columnas donde cada casillero (<strong>celda</strong>) tiene un dato o una cuenta. Cada celda se nombra con su columna y su fila: F2 es la columna F, fila 2.</p>
      <p><strong>Lista desplegable:</strong> en Tipo y Categoría podés armar una lista para elegir en vez de escribir. Así no hay errores de tipeo. Se ve en el curso <strong>Excel y planillas</strong> de este sitio.</p>
      <p><strong>Desde el celular:</strong> la app de Hojas de cálculo de Google es gratis y te deja anotar desde el mostrador.</p>
      <p>Por ejemplo, Rocío pasó a la planilla los movimientos de marzo de su cuaderno. Le llevó 1 hora la primera vez; desde ahí anota directo en el celular.</p>` },
    { titulo: "Sumar con SUMA y SUMAR.SI", video: {"id":"chXHJLaZWr8","t":"Excel: SUMAR.SI y SUMAR.SI.CONJUNTO · Saber Programas (6:45)"}, html: `
      <p class="idea">Con dos fórmulas tenés casi todo: <strong>SUMA</strong> suma una columna entera y <strong>SUMAR.SI</strong> suma solo las filas que cumplen una condición, por ejemplo "solo los ingresos".</p>
      <pre><code>Total de todos los montos:
=SUMA(F2:F200)

Total de ingresos (suma F solo donde C dice "Ingreso"):
=SUMAR.SI(C2:C200; "Ingreso"; F2:F200)

Total de egresos:
=SUMAR.SI(C2:C200; "Egreso"; F2:F200)

Total de una categoría, por ejemplo Mercadería:
=SUMAR.SI(D2:D200; "Mercadería"; F2:F200)

Saldo (lo que entró menos lo que salió):
=H2-H3   (si en H2 está el total de ingresos y en H3 el de egresos)</code></pre>
      <table>
        <tr><th>Parte de SUMAR.SI</th><th>Qué es</th><th>Ejemplo</th></tr>
        <tr><td>Rango donde buscar</td><td>La columna con la condición</td><td>C2:C200 (Tipo)</td></tr>
        <tr><td>Condición</td><td>Lo que tiene que decir</td><td>"Ingreso"</td></tr>
        <tr><td>Rango a sumar</td><td>La columna con los montos</td><td>F2:F200 (Monto)</td></tr>
      </table>
      <p>Una <strong>fórmula</strong> es una cuenta que escribís en una celda empezando con el signo =. Un <strong>rango</strong> es un grupo de celdas, como F2:F200 (de la F2 a la F200).</p>
      <p><strong>Punto y coma o coma:</strong> según cómo esté configurada tu computadora, las partes de la fórmula se separan con ; o con ,. Si una no funciona, probá con la otra.</p>
      <p>Por ejemplo, con los 5 movimientos de la planilla de Rocío: ingresos 68.000 + 42.000 = 110.000; egresos 18.000 + 35.000 + 25.000 = 78.000; saldo 110.000 − 78.000 = 32.000.</p>` },
    { titulo: "El resumen por categoría", html: `
      <p class="idea">Con SUMAR.SI armás un <strong>resumen</strong> al costado de la planilla: una tabla chica con el total de cada categoría que se actualiza sola cada vez que anotás algo.</p>
      <pre><code>     H              I
1  Categoría      Total
2  Ventas         =SUMAR.SI(D$2:D$200; H2; F$2:F$200)
3  Mercadería     (la misma fórmula, se arrastra hacia abajo)
4  Servicios
5  Alquiler
6  Impuestos
7  Comisiones
8  Otros gastos
9  Retiros</code></pre>
      <table>
        <tr><th>Truco</th><th>Para qué</th></tr>
        <tr><td>Usar H2 como condición en vez de escribir "Ventas"</td><td>La misma fórmula sirve para todas las filas</td></tr>
        <tr><td>El signo $ en D$2:D$200</td><td>Que el rango no se mueva al arrastrar la fórmula</td></tr>
        <tr><td>Un gráfico de barras con el resumen</td><td>Ver de un vistazo en qué se va la plata</td></tr>
      </table>
      <p><strong>Arrastrar</strong> una fórmula es copiarla a las celdas de abajo tirando de la esquina de la celda. La planilla ajusta las referencias solas, salvo las que tienen $.</p>
      <p><strong>Lo que el resumen no te dice:</strong> si ganás de verdad hay que mirar también lo que te deben, lo que debés y el stock. Eso lo vemos en los próximos módulos, y más a fondo en el curso <strong>Números de un pequeño negocio</strong>.</p>
      <p>Por ejemplo, cuando Rocío armó el resumen de marzo vio que en Comisiones se le iban $38.000. Empezó a ofrecer transferencia, que no le cobra nada, y en abril bajó a $22.000.</p>` },
  ],
  practica: [
    "Armá la planilla con las 6 columnas de la lección y cargá al menos 15 movimientos reales.",
    "Escribí las fórmulas de total de ingresos, total de egresos y saldo, y anotá los 3 resultados.",
    "Armá el resumen por categoría con SUMAR.SI y anotá cuál es la categoría de egreso más grande.",
  ],
  recursos: [
    { t: "Ayuda de Google: función SUMAR.SI en Hojas de cálculo", url: "https://support.google.com/docs/answer/3093583?hl=es" },
    { t: "Ayuda de Microsoft: función SUMAR.SI en Excel", url: "https://support.microsoft.com/es-es/office/sumar-si-funci%C3%B3n-sumar-si-169b8c99-c05c-4483-a712-1697a653039b" },
    { t: "Curso de este sitio: Excel y planillas", url: "https://pkeios.github.io/EiaLearning/excel/" },
  ],
  quiz: [
    { q: "Si vas a pasar el cuaderno a una planilla, ¿cómo ponés los datos?", opciones: ["Todo el día en una sola celda","Una hoja por movimiento","Una fila por movimiento, con columnas fijas","Como un texto largo"], correcta: 2, explicacion: "Una fila por movimiento se puede sumar. Todo en una celda tienta por rápido, pero no se puede calcular." },
    { q: "Escribiste \"$68.000\" en la celda del monto y no suma. ¿Qué pasa?", opciones: ["Con $ y puntos la planilla puede tomarlo como texto: escribí 68000","Que la planilla está rota","Que el número es muy grande","Que falta la fecha"], correcta: 0, explicacion: "Los montos van como números. \"Está rota\" tienta, pero es el formato." },
    { q: "Si en la columna Tipo escribiste \"ingreso\", \"Ingresos\" e \"Ingreso\", ¿qué pasa con SUMAR.SI(C2:C200; \"Ingreso\"; F2:F200)?", opciones: ["Suma todo igual","Da error siempre","Suma el doble","Puede no sumar los escritos distinto"], correcta: 3, explicacion: "La condición tiene que coincidir con lo escrito; \"Ingresos\" con s no coincide. \"Suma todo igual\" tienta porque para vos es lo mismo." },
    { q: "En una planilla, ¿qué es la celda F2?", opciones: ["La fila F, columna 2","El casillero de la columna F, fila 2","La hoja 2","Una fórmula"], correcta: 1, explicacion: "Primero la columna (letra) y después la fila (número). \"Fila F\" tienta si lo leés al revés." },
    { q: "Querés el total de todos los montos de F2 a F200. ¿Qué escribís?", opciones: ["SUMA F2 F200","=F2+F200","=SUMA(F2:F200)","=SUMAR.SI(F2:F200)"], correcta: 2, explicacion: "SUMA con el rango. =F2+F200 tienta, pero suma solo dos celdas." },
    { q: "Querés sumar solo los ingresos. ¿Qué escribís?", opciones: ["=SUMAR.SI(C2:C200; \"Ingreso\"; F2:F200)","=SUMA(C2:C200)","=SUMAR.SI(F2:F200; \"Ingreso\"; C2:C200)","=SUMA(\"Ingreso\")"], correcta: 0, explicacion: "Primero dónde buscar, después la condición, después qué sumar. Invertir los rangos tienta, pero suma la columna equivocada." },
    { q: "Querés saber cuánto gastaste en mercadería. ¿Qué rango usás para buscar?", opciones: ["La columna Fecha (A)","La columna Monto (F)","La columna Medio (E)","La columna Categoría (D)"], correcta: 3, explicacion: "La condición \"Mercadería\" está en Categoría. Monto tienta porque es lo que querés sumar, pero ese va al final." },
    { q: "Una fórmula con ; no funciona en tu computadora. ¿Qué probás?", opciones: ["Borrar la planilla","Cambiar ; por ,","Escribirla sin el =","Usar la calculadora"], correcta: 1, explicacion: "Depende de la configuración. Sacar el = tienta, pero sin él no es fórmula." },
    { q: "Ingresos 110.000 y egresos 78.000. ¿Cuál es el saldo?", opciones: ["188.000","78.000","32.000","-32.000"], correcta: 2, explicacion: "Ingresos menos egresos. 188.000 tienta si sumás en vez de restar." },
    { q: "Si arrastrás la fórmula del resumen y el rango se corre hacia abajo, ¿qué te faltó?", opciones: ["El signo $ para fijar el rango: D$2:D$200","Más filas","Un gráfico","Escribir la categoría a mano"], correcta: 0, explicacion: "El $ fija la referencia. Escribir a mano tienta, pero tenés que hacer cada fórmula de nuevo." },
    { q: "Usás H2 como condición en vez de escribir \"Ventas\". ¿Qué ganás?", opciones: ["Nada","Que sume más rápido","Que no necesite rango","La misma fórmula sirve para todas las categorías al arrastrarla"], correcta: 3, explicacion: "Así la fórmula se reutiliza. \"Nada\" tienta porque el resultado de la primera fila es igual." },
    { q: "El resumen muestra que te queda plata. ¿Ya sabés que tu negocio gana?", opciones: ["Sí, seguro","No del todo: falta mirar lo que te deben, lo que debés y el stock","Sí, si es efectivo","No se puede saber nunca"], correcta: 1, explicacion: "El saldo es una parte. \"Sí, seguro\" tienta, pero puede haber deudas que no ves." },
  ],
},
{
  id: "deudas",
  icono: "🤝",
  titulo: "Lo que te deben y lo que debés",
  nivel: "Intermedio",
  objetivos: [
    "Llevar la libreta de fiados con un límite y una fecha de pago por cliente",
    "Cobrar lo que te deben sin perder al cliente",
    "Organizar los pagos a proveedores en un calendario",
  ],
  lecciones: [
    { titulo: "El fiado con reglas", html: `
      <p class="idea">Vender <strong>fiado</strong> (entregar ahora y cobrar después) ayuda a los vecinos y fideliza, pero es plata que <strong>todavía no tenés</strong>. Con reglas claras no se te va de las manos.</p>
      <p>Lo que los clientes te deben se llama <strong>cuentas por cobrar</strong>. Es plata tuya, pero está afuera de la caja.</p>
      <pre><code>Libreta de fiados de Rocío
Cliente        Límite    Fecha    Compra          Pagó      Debe
Marta (lote 4) $30.000   02/03    $8.500                    $8.500
                         06/03    $6.000                    $14.500
                         10/03              $14.500         $0
Don Luis       $20.000   04/03    $12.000                   $12.000
                         15/03    $9.000  ✘ pasa el límite: no se fía</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Un límite por cliente</td><td>Si alguien no paga, la pérdida tiene techo</td></tr>
        <tr><td>Una fecha de pago acordada (por ejemplo, el día que cobran)</td><td>Así los dos saben cuándo</td></tr>
        <tr><td>Anotar cada compra y cada pago en el momento</td><td>Evita discusiones</td></tr>
        <tr><td>Que el cliente vea o firme lo anotado</td><td>Los dos tienen la misma cuenta</td></tr>
        <tr><td>Sumar el total fiado cada semana</td><td>Para saber cuánto tenés afuera</td></tr>
      </table>
      <p><strong>Cuánto fiar en total:</strong> nunca más de lo que podés perder sin tener que dejar de reponer mercadería. Rocío se puso un tope de $150.000 entre todos los clientes.</p>
      <p>Por ejemplo, antes Rocío anotaba los fiados en papelitos sueltos y perdió dos. Desde que usa una libreta con una hoja por cliente, sabe al peso cuánto le deben.</p>` },
    { titulo: "Cobrar sin perder al cliente", video: {"id":"fx5TvBGmiW4","t":"Cómo cobrar a un cliente que no quiere pagar: 5 estrategias · Emprendedor Eficaz (3:44)"}, html: `
      <p class="idea">Cobrar es parte del trabajo, no un favor. Se cobra con <strong>respeto, claridad y en el momento acordado</strong>, sin esperar a que la deuda sea enorme.</p>
      <table>
        <tr><th>Paso</th><th>Qué decís o hacés</th></tr>
        <tr><td>1. Recordatorio amable el día acordado</td><td>"Hola Marta, hoy es el día que quedamos para la cuenta: son $14.500."</td></tr>
        <tr><td>2. Ofrecé formas de pago</td><td>Efectivo, transferencia o QR, para que sea fácil</td></tr>
        <tr><td>3. Si no puede, acordá una fecha nueva o en partes</td><td>"¿Te parece la mitad el viernes y la mitad el 15?"</td></tr>
        <tr><td>4. Mientras debe, no se suma fiado</td><td>"Cuando quede al día, seguimos con la libreta."</td></tr>
        <tr><td>5. Anotá cada promesa y cada pago</td><td>Así no hay "yo te pagué" sin registro</td></tr>
      </table>
      <p><strong>Lo que no conviene:</strong> reclamar delante de otros clientes, enojarte o exponer a alguien en redes. Además de feo, podés perder al cliente y tener problemas.</p>
      <p><strong>Si la deuda es grande y no hay forma,</strong> consultá con un abogado o en el centro de mediación de tu municipio antes de hacer nada por tu cuenta.</p>
      <p><strong>Los clientes que pagan bien</strong> son los que más vale cuidar: un límite más alto para ellos es un premio.</p>
      <p>Por ejemplo, Don Luis debía $12.000 hacía un mes. Rocío le mandó un mensaje amable y le ofreció pagar en 2 partes. Pagó las dos y siguió comprando.</p>` },
    { titulo: "Lo que vos debés: proveedores y vencimientos", html: `
      <p class="idea">Lo que vos debés (proveedores, servicios, impuestos) se llama <strong>cuentas por pagar</strong>. Si lo anotás en un <strong>calendario de pagos</strong>, no te agarran los vencimientos por sorpresa.</p>
      <pre><code>Calendario de pagos de Rocío (marzo)
Día   Qué                         Monto      Cómo
05    Distribuidora (pedido 1)    $380.000   Transferencia
10    Luz del local               $35.000    Débito automático
15    Alquiler                    $180.000   Transferencia
20    Monotributo                 $95.000    Débito automático
20    Distribuidora (pedido 2)    $410.000   Transferencia
      Total del mes               $1.100.000</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Anotá cada factura de proveedor con su fecha de vencimiento</td><td>Para tener la plata ese día</td></tr>
        <tr><td>Mirá el calendario cada lunes</td><td>Para ver qué se viene en la semana</td></tr>
        <tr><td>Si el proveedor te da plazo, usalo</td><td>Vendés la mercadería antes de pagarla</td></tr>
        <tr><td>Pagá en fecha</td><td>Un proveedor que confía te da mejores condiciones</td></tr>
        <tr><td>Cuidado con los intereses por pagar tarde</td><td>Un impuesto o servicio vencido sale más caro</td></tr>
      </table>
      <p>Un <strong>vencimiento</strong> es la fecha límite para pagar algo sin recargo.</p>
      <p><strong>Lo que te deben y lo que debés, juntos:</strong> si te deben $150.000 en fiados y el 5 tenés que pagar $380.000, necesitás tener esa plata en caja o cobrar antes. Mirar las dos cosas a la vez es el principio del <strong>flujo de caja</strong>, que se ve a fondo en el curso <strong>Números de un pequeño negocio</strong>.</p>
      <p>Por ejemplo, Rocío se olvidaba del vencimiento del monotributo y pagaba con intereses. Desde que lo puso en débito automático y en el calendario, no le pasó más.</p>` },
  ],
  practica: [
    "Pasá tus fiados a una libreta con una hoja por cliente, poné un límite a cada uno y anotá el total que te deben.",
    "Escribí el mensaje de recordatorio para un cliente que te debe y anotá qué fecha de pago le vas a proponer.",
    "Armá el calendario de pagos del mes que viene con al menos 5 vencimientos y anotá el total.",
  ],
  recursos: [
    { t: "Universidad de Santa Clara (Mobi): la contabilidad y el flujo de caja (curso gratis en castellano)", url: "https://www.scu.edu/mobiespanol/cursos/iniciar-un-negocio/la-contabilidad-y-el-flujo-de-caja/" },
    { t: "BBVA Argentina: qué es el flujo de caja y cómo hacerlo", url: "https://www.bbva.com/es/ar/salud-financiera/emprendimientos-que-es-el-flujo-de-caja-y-como-hacerlo/" },
    { t: "Curso de este sitio: Números de un pequeño negocio", url: "https://pkeios.github.io/EiaLearning/finanzas-negocio/" },
  ],
  quiz: [
    { q: "Le fiás a una vecina $8.500. ¿Dónde está esa plata?", opciones: ["En la caja","Perdida","Afuera de la caja: es una cuenta por cobrar","En el banco"], correcta: 2, explicacion: "Es tuya, pero todavía no la tenés. \"En la caja\" tienta porque ya la vendiste." },
    { q: "¿Por qué conviene un límite de fiado por cliente?", opciones: ["Para que, si alguien no paga, la pérdida tenga techo","Para vender menos","Porque lo pide la ley","No conviene"], correcta: 0, explicacion: "El límite te protege. \"Lo pide la ley\" tienta, pero es una regla tuya." },
    { q: "Don Luis debe $12.000, su límite es $20.000 y quiere llevar $9.000 más. ¿Qué hacés?", opciones: ["Se lo fío igual","Le fío $20.000 más","Le cobro el doble","No se lo fío: pasaría el límite"], correcta: 3, explicacion: "12.000 + 9.000 = 21.000, más que 20.000. Fiarle igual tienta para no quedar mal." },
    { q: "Si anotás los fiados en papelitos sueltos, ¿qué riesgo hay?", opciones: ["Ninguno","Perder papeles y no saber cuánto te deben","Vender más","Pagar más impuestos"], correcta: 1, explicacion: "Una libreta con una hoja por cliente lo evita. \"Ninguno\" tienta porque te acordás de memoria." },
    { q: "Hoy es el día que acordaste con un cliente. ¿Qué hacés?", opciones: ["Espero a que se acuerde solo","Le reclamo delante de otros clientes","Le mando un recordatorio amable con el monto","Lo publico en redes"], correcta: 2, explicacion: "Amable, claro y en fecha. Esperar tienta para no incomodar, pero la deuda crece." },
    { q: "Si un cliente no puede pagar todo, ¿qué le proponés?", opciones: ["Pagar en partes con fechas acordadas","Olvidar la deuda","Seguir fiándole más","Cortarle el saludo"], correcta: 0, explicacion: "En partes se cobra y se cuida al cliente. Seguir fiando tienta, pero la deuda crece." },
    { q: "Mientras un cliente debe, ¿le seguís fiando?", opciones: ["Sí, sin límite","Sí, el doble","Depende del humor","No: cuando quede al día, seguimos"], correcta: 3, explicacion: "Primero se pone al día. Seguir fiando tienta para no perderlo." },
    { q: "Una deuda grande no se cobra de ninguna forma. ¿Qué hacés?", opciones: ["Lo expongo en redes","Consulto con un abogado o en el centro de mediación del municipio","Voy a su casa a gritarle","Le saco algo sin permiso"], correcta: 1, explicacion: "Un profesional te orienta. Exponerlo tienta, pero te puede traer problemas a vos." },
    { q: "¿Qué es un vencimiento?", opciones: ["La fecha en que se vence la mercadería","Un descuento","La fecha límite para pagar sin recargo","Una deuda que se perdonó"], correcta: 2, explicacion: "Es la fecha de pago. \"Mercadería vencida\" tienta por la palabra." },
    { q: "Si el proveedor te da 15 días para pagar, ¿qué te conviene?", opciones: ["Usar el plazo y pagar en fecha","Pagar tarde porque igual te espera","No usarlo nunca","Pagar el doble"], correcta: 0, explicacion: "El plazo te deja vender antes de pagar. Pagar tarde tienta, pero perdés la confianza." },
    { q: "Te deben $150.000 y el 5 tenés que pagar $380.000. ¿Qué mirás?", opciones: ["Nada, ya veré","Solo lo que te deben","Solo lo que debés","Si vas a tener esa plata en caja o si cobrás antes"], correcta: 3, explicacion: "Las dos cosas juntas. Mirar solo una tienta, pero así te quedás sin plata." },
    { q: "Te olvidás seguido del vencimiento del monotributo. ¿Qué hacés?", opciones: ["Pago con intereses cada mes","Lo pongo en el calendario y, si se puede, en débito automático","Dejo de pagarlo","Lo pago cuando me acuerdo"], correcta: 1, explicacion: "Así no te pasa más. \"Cuando me acuerdo\" tienta, pero sale más caro." },
  ],
},
{
  id: "stock",
  icono: "📦",
  titulo: "El stock: la plata que está en los estantes",
  nivel: "Intermedio",
  objetivos: [
    "Llevar una planilla simple de stock con entradas y salidas",
    "Contar el stock y valorizarlo al costo",
    "Detectar pérdidas, faltantes y productos que no rotan",
  ],
  lecciones: [
    { titulo: "Entradas, salidas y stock mínimo", video: {"id":"rqT8XuUOErA","t":"Cómo crear inventario y control de stock en Excel: entradas y salidas · Saber Programas (11:33)"}, html: `
      <p class="idea">El <strong>stock</strong> es la mercadería que tenés para vender. Es plata convertida en productos, y también se controla: lo que entra, lo que sale y lo que queda.</p>
      <pre><code>Stock de Rocío (yerba 1 kg)
Fecha   Movimiento         Entra   Sale   Queda
01/03   Había                              12
03/03   Compra             24              36
01-15   Ventas                      28      8
15/03   Stock mínimo: 10 → hay que pedir</code></pre>
      <table>
        <tr><th>Concepto</th><th>Qué es</th></tr>
        <tr><td>Entrada</td><td>Lo que comprás o te llega</td></tr>
        <tr><td>Salida</td><td>Lo que vendés, regalás, se rompe o se vence</td></tr>
        <tr><td>Stock actual</td><td>Lo que había + entradas − salidas</td></tr>
        <tr><td>Stock mínimo</td><td>La cantidad más baja antes de volver a pedir</td></tr>
      </table>
      <p><strong>Empezá por lo importante:</strong> no hace falta controlar cada caramelo. Elegí los 10 o 20 productos que más vendés o que más cuestan.</p>
      <p><strong>Stock mínimo:</strong> pensá cuánto vendés por semana y cuántos días tarda el proveedor. Si vendés 14 yerbas por semana y el pedido tarda 5 días, necesitás al menos 10 cuando pedís.</p>
      <p>Por ejemplo, Rocío se quedaba sin yerba justo los fines de semana. Puso un stock mínimo de 10 y desde ese día pide a tiempo.</p>` },
    { titulo: "Contar y valorizar el stock", html: `
      <p class="idea">Una vez por mes, <strong>contá el stock</strong> y multiplicá cada producto por lo que te costó. Así sabés <strong>cuánta plata tenés en los estantes</strong>.</p>
      <pre><code>Conteo de fin de marzo (al costo)
Producto           Cantidad   Costo unitario   Valor
Yerba 1 kg            8          $3.200        $25.600
Fideos 500 g         30          $  900        $27.000
Aceite 1,5 L         10          $2.800        $28.000
Arroz 1 kg           15          $1.500        $22.500
Galletitas           40          $  700        $28.000
...
Total del stock                               $640.000</code></pre>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>1. Elegí un día y hora fijos</td><td>Por ejemplo, el último domingo del mes, con el negocio cerrado</td></tr>
        <tr><td>2. Contá estante por estante</td><td>Anotá producto y cantidad</td></tr>
        <tr><td>3. Poné el costo unitario</td><td>Lo que pagaste al proveedor por cada uno, no el precio de venta</td></tr>
        <tr><td>4. Multiplicá y sumá</td><td>Cantidad × costo = valor; el total es tu stock</td></tr>
      </table>
      <p><strong>Valorizar</strong> es ponerle un valor en plata a lo que contaste. Se usa el <strong>costo</strong> porque es lo que pusiste; la ganancia recién aparece cuando vendés.</p>
      <p><strong>Por qué importa:</strong> si en la caja hay menos plata que el mes pasado, pero el stock creció, no perdiste: tenés la plata en mercadería. Y al revés: si la caja creció porque no repusiste, el stock bajó.</p>
      <p>Para calcular bien el costo de cada producto, está el curso <strong>Costos y precios</strong> de este sitio.</p>
      <p>Por ejemplo, en abril Rocío tenía $80.000 menos en la cuenta que en marzo y se asustó. Al contar, vio que el stock había subido $120.000 porque compró una oferta grande de aceite.</p>` },
    { titulo: "Pérdidas, faltantes y lo que no se vende", html: `
      <p class="idea">Si el conteo da <strong>menos de lo que debería</strong>, hay mercadería que salió sin venderse: vencida, rota, regalada, consumida en casa o robada. Encontrarla es plata recuperada.</p>
      <pre><code>Yerba en marzo
Había 12 + compré 24 − vendí (según el cuaderno) 26 = deberían quedar 10
Contadas: 8
Faltante: 2 paquetes × $3.200 = $6.400</code></pre>
      <table>
        <tr><th>Causa</th><th>Qué hacer</th></tr>
        <tr><td>Vencimientos</td><td>Poné adelante lo que vence antes; ofertá lo que está por vencer</td></tr>
        <tr><td>Roturas</td><td>Anotalas como salida "rotura"</td></tr>
        <tr><td>Consumo de tu casa</td><td>Anotalo como retiro (lo viste en el módulo de separar la plata)</td></tr>
        <tr><td>Ventas sin anotar</td><td>Anotar en el momento</td></tr>
        <tr><td>Robo</td><td>Ordenar el local para ver todo desde la caja; lo caro, cerca tuyo</td></tr>
      </table>
      <p>La <strong>rotación</strong> es qué tan rápido se vende un producto. Lo que <strong>no rota</strong> (queda meses en el estante) es plata parada.</p>
      <p><strong>Productos que no rotan:</strong> no los vuelvas a pedir, ofertalos o armá combos. Con esa plata comprá lo que sí se vende.</p>
      <p>Por ejemplo, Rocío encontró 15 frascos de una salsa que nadie compraba hacía 4 meses: $27.000 parados. Los ofertó en combo con fideos, los vendió en 2 semanas y no los pidió más.</p>` },
  ],
  practica: [
    "Elegí tus 10 productos más vendidos y anotá el stock mínimo de cada uno.",
    "Hacé el conteo de stock de esos 10 productos, valorizalo al costo y anotá el total.",
    "Compará el stock contado con el que debería haber para 3 productos y anotá los faltantes en plata.",
    "Buscá 3 productos que no se venden hace más de 2 meses y anotá cuánta plata hay parada en ellos.",
  ],
  recursos: [
    { t: "Curso de este sitio: Excel y planillas", url: "https://pkeios.github.io/EiaLearning/excel/" },
    { t: "Curso de este sitio: Costos y precios, cuánto cobrar", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Universidad de Santa Clara (Mobi): la contabilidad y el flujo de caja (curso gratis en castellano)", url: "https://www.scu.edu/mobiespanol/cursos/iniciar-un-negocio/la-contabilidad-y-el-flujo-de-caja/" },
  ],
  quiz: [
    { q: "¿Qué es el stock?", opciones: ["La plata de la caja","Lo que te deben","La mercadería que tenés para vender","Las ventas del mes"], correcta: 2, explicacion: "Es plata convertida en productos. \"La plata de la caja\" tienta, pero el stock está en los estantes." },
    { q: "Si había 12, compraste 24 y vendiste 28, ¿cuántos quedan?", opciones: ["8","36","40","16"], correcta: 0, explicacion: "12 + 24 − 28 = 8. 36 tienta si te olvidás de restar las ventas." },
    { q: "Se rompe un frasco. ¿Qué es en tu stock?", opciones: ["Una entrada","Una venta","Nada","Una salida"], correcta: 3, explicacion: "Sale del stock aunque no se vendió. \"Nada\" tienta porque no entró plata." },
    { q: "Si vendés 14 yerbas por semana y el proveedor tarda 5 días, ¿qué stock mínimo ponés?", opciones: ["1","Unas 10","50","0"], correcta: 1, explicacion: "En 5 días vendés unas 10. 0 tienta, pero te quedás sin yerba mientras llega el pedido." },
    { q: "Tenés 300 productos distintos. ¿Por dónde empezás a controlar?", opciones: ["Por todos a la vez","Por los más baratos","Por los 10 o 20 que más vendés o más cuestan","No controlo nada"], correcta: 2, explicacion: "Empezá por lo importante. Todos a la vez tienta, pero es fácil abandonar." },
    { q: "Vas a valorizar el stock. ¿Qué precio usás?", opciones: ["El costo: lo que pagaste al proveedor","El precio de venta","El precio de la competencia","Uno inventado"], correcta: 0, explicacion: "Se usa el costo porque es lo que pusiste. El precio de venta tienta, pero esa ganancia todavía no existe." },
    { q: "Tenés 30 paquetes de fideos que te costaron $900 cada uno. ¿Cuánto vale ese stock?", opciones: ["$930","$2.700","$270.000","$27.000"], correcta: 3, explicacion: "30 × 900 = 27.000. $2.700 tienta si te comés un cero." },
    { q: "Este mes tenés menos plata en la cuenta, pero el stock subió mucho. ¿Perdiste?", opciones: ["Sí, seguro","No necesariamente: la plata está en mercadería","Sí, el negocio anda mal","No se puede saber nada"], correcta: 1, explicacion: "Hay que mirar caja y stock juntos. \"Sí, seguro\" tienta si solo mirás la cuenta." },
    { q: "Deberían quedar 10 yerbas y contaste 8. ¿Qué hacés?", opciones: ["Nada, son 2","Anoto 10 igual","Busco la causa: vencimiento, rotura, consumo de casa, venta sin anotar o robo","Dejo de vender yerba"], correcta: 2, explicacion: "Encontrar la causa es plata recuperada. Anotar 10 igual tienta, pero escondés el problema." },
    { q: "Te llevás un paquete de yerba para tu casa. ¿Cómo lo anotás?", opciones: ["Como salida del stock y como retiro","No lo anoto","Como venta","Como rotura"], correcta: 0, explicacion: "Es mercadería que se lleva el dueño. Rotura tienta, pero no se rompió." },
    { q: "¿Qué quiere decir que un producto no rota?", opciones: ["Que se cayó","Que no gira","Que se vende mucho","Que queda mucho tiempo en el estante sin venderse"], correcta: 3, explicacion: "Es plata parada. \"Se vende mucho\" tienta, pero es al revés." },
    { q: "Tenés 15 frascos que no se venden hace 4 meses. ¿Qué hacés?", opciones: ["Pido 15 más","Los oferto o armo combos y no los vuelvo a pedir","Los dejo hasta que se vendan","Los escondo"], correcta: 1, explicacion: "Liberás la plata parada. Dejarlos tienta, pero pueden vencerse." },
  ],
},
{
  id: "resumen-mes",
  icono: "🗓️",
  titulo: "El resumen del mes",
  nivel: "Avanzado",
  objetivos: [
    "Armar el resumen mensual con ingresos, egresos, fiados, deudas y stock",
    "Calcular una ganancia aproximada del mes",
    "Separar reservas para impuestos, imprevistos y reposición",
  ],
  lecciones: [
    { titulo: "Juntar todo en una página", video: {"id":"vb-xc9DnsZI","t":"¿Qué es el flujo de caja? Explicación fácil · Better Wallet en Español (3:19)"}, html: `
      <p class="idea">A fin de mes, juntá en <strong>una sola página</strong> lo que aprendiste a registrar: lo que entró, lo que salió, lo que te deben, lo que debés y el stock. Es la foto de tu negocio.</p>
      <pre><code>Resumen de Rocío · marzo
Ingresos (ventas cobradas)            $2.250.000
Egresos del negocio (sin retiros)    −$1.700.000
Retiros del dueño                    −$  300.000
Saldo de caja y cuenta del mes        $  250.000

Fiados por cobrar al 31/03            $  110.000
Deudas con proveedores al 31/03       $  410.000
Stock al costo al 31/03               $  640.000
Stock al costo al 28/02               $  600.000</code></pre>
      <table>
        <tr><th>Dato</th><th>De dónde sale</th><th>Lo viste en</th></tr>
        <tr><td>Ingresos y egresos</td><td>La planilla con SUMAR.SI</td><td>Tu planilla</td></tr>
        <tr><td>Retiros</td><td>La categoría Retiros</td><td>Separar la plata</td></tr>
        <tr><td>Fiados y deudas</td><td>La libreta y el calendario de pagos</td><td>Lo que te deben y lo que debés</td></tr>
        <tr><td>Stock</td><td>El conteo valorizado</td><td>El stock</td></tr>
      </table>
      <p>El <strong>flujo de caja</strong> es el movimiento de la plata que entra y sale en un período. El saldo del mes te dice si te quedó más o menos plata que al principio.</p>
      <p><strong>Siempre el mismo día:</strong> hacé el resumen el primer día hábil del mes siguiente, con los datos del mes que terminó.</p>
      <p>Por ejemplo, Rocío arma su resumen el primer lunes de cada mes en unos 40 minutos: planilla, libreta de fiados, calendario de pagos y el conteo del domingo.</p>` },
    { titulo: "Una ganancia aproximada", html: `
      <p class="idea">La plata que te quedó no es lo mismo que la <strong>ganancia</strong>. Para acercarte, sumá lo que te quedó y lo que te llevaste, y ajustá por lo que cambió en fiados, deudas y stock.</p>
      <pre><code>Ganancia aproximada de marzo (números de Rocío)
  Saldo del mes                         $250.000
+ Retiros (te los llevaste vos)         $300.000
+ Aumento del stock (640.000 − 600.000) $ 40.000
+ Aumento de fiados (110.000 − 90.000)  $ 20.000
− Aumento de deudas (410.000 − 380.000) $ 30.000
= Ganancia aproximada                   $580.000</code></pre>
      <table>
        <tr><th>Ajuste</th><th>Por qué se suma o se resta</th></tr>
        <tr><td>Retiros: se suman</td><td>Salieron, pero fueron tu ganancia (tu sueldo)</td></tr>
        <tr><td>Si el stock subió: se suma</td><td>Esa plata sigue siendo tuya, en mercadería</td></tr>
        <tr><td>Si los fiados subieron: se suma</td><td>Vendiste, todavía no cobraste</td></tr>
        <tr><td>Si las deudas subieron: se resta</td><td>Usaste mercadería que todavía no pagaste</td></tr>
      </table>
      <p>Si el stock, los fiados o las deudas <strong>bajaron</strong>, el signo se da vuelta: lo que antes sumaba, resta, y al revés.</p>
      <p><strong>Es aproximada a propósito:</strong> esta cuenta te sirve para decidir. Un estado de resultados completo se ve en el curso <strong>Números de un pequeño negocio</strong>, y lo de impuestos, con un contador.</p>
      <p><strong>Comparar sueldo y ganancia:</strong> si tu sueldo es más alto que la ganancia varios meses seguidos, el negocio se está achicando aunque haya plata en la caja.</p>
      <p>Por ejemplo, la ganancia aproximada de Rocío fue $580.000 y su sueldo, $300.000. Los otros $280.000 quedaron en el negocio: en la cuenta, en stock y en fiados.</p>` },
    { titulo: "Reservas: la plata que ya tiene destino", html: `
      <p class="idea">De la plata del negocio, una parte <strong>ya tiene destino</strong>. Separala en <strong>reservas</strong> apenas entra, así no la gastás sin darte cuenta.</p>
      <table>
        <tr><th>Reserva</th><th>Para qué</th><th>Cómo calcularla (ejemplo)</th></tr>
        <tr><td>Reposición</td><td>Volver a comprar la mercadería que vendiste</td><td>Lo que costó lo vendido en la semana</td></tr>
        <tr><td>Impuestos</td><td>Monotributo, Ingresos Brutos, tasas</td><td>Lo que pagás por mes, dividido en 4 semanas</td></tr>
        <tr><td>Gastos fijos</td><td>Alquiler, luz, internet</td><td>Lo que pagás por mes, dividido en 4 semanas</td></tr>
        <tr><td>Imprevistos</td><td>Se rompe la heladera, un mes malo</td><td>Un porcentaje fijo de la ganancia, por ejemplo 10%</td></tr>
      </table>
      <pre><code>Separar cada semana (Rocío)
Impuestos:    95.000 ÷ 4  = $23.750
Fijos:       335.000 ÷ 4  = $83.750   (alquiler + luz + internet + otros)
Imprevistos:  10% de la ganancia semanal aprox.
→ La billetera virtual del negocio tiene "apartados" con nombre:
  Impuestos · Fijos · Imprevistos</code></pre>
      <p>Un <strong>fondo de imprevistos</strong> es una reserva para gastos que no esperabas. La meta de Rocío es juntar el equivalente a 1 mes de gastos fijos.</p>
      <p><strong>Lo que pagás de impuestos</strong> depende de tu categoría y tu situación. Los detalles están en el curso <strong>Monotributo, facturación e impuestos</strong> y en la página de ARCA; para tu caso, consultá a un contador.</p>
      <p>Por ejemplo, en julio se le rompió la heladera exhibidora a Rocío. Gracias a los $210.000 que había juntado en imprevistos, la arregló sin pedir un préstamo.</p>` },
  ],
  practica: [
    "Armá el resumen de un mes con los 7 datos de la lección y anotá el saldo.",
    "Calculá tu ganancia aproximada con los ajustes y compará con lo que te retiraste.",
    "Calculá cuánto tenés que separar por semana para impuestos y gastos fijos, y anotá los 2 montos.",
  ],
  recursos: [
    { t: "Curso de este sitio: Números de un pequeño negocio", url: "https://pkeios.github.io/EiaLearning/finanzas-negocio/" },
    { t: "Curso de este sitio: Monotributo, facturación e impuestos para independientes", url: "https://pkeios.github.io/EiaLearning/impuestos-independientes/" },
    { t: "ARCA: monotributo", url: "https://www.arca.gob.ar/monotributo/" },
    { t: "BBVA Argentina: qué es el flujo de caja y cómo hacerlo", url: "https://www.bbva.com/es/ar/salud-financiera/emprendimientos-que-es-el-flujo-de-caja-y-como-hacerlo/" },
  ],
  quiz: [
    { q: "¿Qué datos juntás en el resumen del mes?", opciones: ["Solo las ventas","Solo lo que hay en la caja","Ingresos, egresos, retiros, fiados, deudas y stock","Solo los gastos"], correcta: 2, explicacion: "Todo junto es la foto del negocio. Solo las ventas tienta porque es lo más fácil." },
    { q: "Si tenés ingresos de $2.250.000, egresos de $1.700.000 y retiros de $300.000, ¿cuál es el saldo del mes?", opciones: ["$250.000","$550.000","$4.250.000","$-250.000"], correcta: 0, explicacion: "2.250.000 − 1.700.000 − 300.000. $550.000 tienta si te olvidás de los retiros." },
    { q: "¿Qué es el flujo de caja?", opciones: ["La ganancia del año","El stock del negocio","Una caja registradora","El movimiento de la plata que entra y sale en un período"], correcta: 3, explicacion: "Es entrada y salida de plata. \"Ganancia\" tienta, pero no es lo mismo." },
    { q: "¿Cuándo conviene hacer el resumen?", opciones: ["Cuando me acuerdo","Siempre el mismo día, al empezar el mes siguiente","Una vez por año","Nunca"], correcta: 1, explicacion: "Siempre el mismo día se vuelve costumbre. \"Cuando me acuerdo\" tienta, pero no pasa." },
    { q: "Si te quedaron $250.000 en el mes, ¿ganaste $250.000?", opciones: ["Sí, exactamente","No, perdiste","No necesariamente: hay que ajustar por retiros, stock, fiados y deudas","No se puede saber nada"], correcta: 2, explicacion: "La plata que quedó no es la ganancia. \"Sí, exactamente\" tienta porque es el número que ves." },
    { q: "Si calculás la ganancia aproximada, ¿qué hacés con los retiros?", opciones: ["Los sumo, porque fueron tu ganancia","Los resto","Los ignoro","Los multiplico"], correcta: 0, explicacion: "Salieron, pero eran para vos. Restarlos tienta porque son plata que salió." },
    { q: "Tu stock subió $40.000 en el mes. ¿Qué hacés en la cuenta?", opciones: ["Lo resto","Lo ignoro","Lo cuento como deuda","Lo sumo: esa plata está en mercadería"], correcta: 3, explicacion: "Más stock es plata tuya en otra forma. Restarlo tienta porque gastaste en comprarlo." },
    { q: "Tus deudas con proveedores subieron $30.000. ¿Qué hacés?", opciones: ["Lo sumo","Lo resto: usaste mercadería que todavía no pagaste","Lo ignoro","Lo cuento como venta"], correcta: 1, explicacion: "Es plata que debés. Sumarlo tienta porque tenés esa mercadería, pero no es tuya todavía." },
    { q: "Tu sueldo es más alto que la ganancia hace 4 meses. ¿Qué pasa?", opciones: ["Nada","El negocio crece","El negocio se está achicando aunque haya plata en la caja","Pagás menos impuestos"], correcta: 2, explicacion: "Te llevás más de lo que gana. \"Nada\" tienta porque todavía alcanza." },
    { q: "¿Para qué sirve separar reservas apenas entra la plata?", opciones: ["Para no gastar sin darte cuenta la plata que ya tiene destino","Para gastar más","Para pagar menos impuestos","No sirve"], correcta: 0, explicacion: "Esa plata ya está comprometida. \"Pagar menos impuestos\" tienta, pero no cambia lo que pagás." },
    { q: "Si pagás $95.000 de impuestos por mes, ¿cuánto separás por semana?", opciones: ["$95.000","$9.500","$380.000","$23.750"], correcta: 3, explicacion: "95.000 ÷ 4. $9.500 tienta si dividís por 10." },
    { q: "Si se te rompe la heladera exhibidora, ¿qué te salva de pedir un préstamo?", opciones: ["La reserva de impuestos","El fondo de imprevistos","Los fiados","El stock"], correcta: 1, explicacion: "Para eso está. Usar la reserva de impuestos tienta, pero después no podés pagarlos." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: un mes con las cuentas claras",
  nivel: "Avanzado",
  objetivos: [
    "Armar tu propio sistema de cuentas con las herramientas del curso",
    "Llevarlo durante un mes completo",
    "Presentar el resumen del mes y evaluarlo con una rúbrica",
  ],
  lecciones: [
    { titulo: "Armá tu sistema", html: `
      <p class="idea">El proyecto final es <strong>llevar las cuentas de tu emprendimiento durante un mes completo</strong> con todo lo del curso. Si todavía no tenés uno, usá un negocio inventado o el de alguien que conozcas (con su permiso).</p>
      <table>
        <tr><th>Herramienta</th><th>Qué es</th><th>Cuándo se usa</th></tr>
        <tr><td>Caja y cuenta separadas</td><td>La plata del negocio aparte</td><td>Desde el día 1</td></tr>
        <tr><td>Planilla de movimientos</td><td>Una fila por ingreso o egreso</td><td>Todos los días</td></tr>
        <tr><td>Arqueo de caja</td><td>Contar y comparar al cierre</td><td>Todos los días</td></tr>
        <tr><td>Libreta de fiados</td><td>Una hoja por cliente, con límite</td><td>Cada fiado y cada pago</td></tr>
        <tr><td>Calendario de pagos</td><td>Vencimientos del mes</td><td>Cada lunes</td></tr>
        <tr><td>Planilla de stock</td><td>Tus 10 o 20 productos principales</td><td>Al comprar y al fin de mes</td></tr>
        <tr><td>Resumen del mes</td><td>La foto en una página</td><td>El primer día del mes siguiente</td></tr>
      </table>
      <pre><code>Tu rutina
Cada día (10 min):    anotar movimientos · arqueo · fiados
Cada lunes (15 min):  calendario de pagos · separar reservas
Fin de mes (1 hora):  conteo de stock · resumen · ganancia aproximada</code></pre>
      <p><strong>Si es la primera vez,</strong> empezá con menos: separar la plata y anotar los movimientos. Sumá una herramienta por semana.</p>
      <p>Por ejemplo, Rocío arrancó un 1 de abril. La primera semana solo anotó movimientos y arqueo; la segunda sumó la libreta de fiados; la tercera, el stock.</p>` },
    { titulo: "Las preguntas que responde tu resumen", html: `
      <p class="idea">Un resumen sirve si te ayuda a <strong>decidir</strong>. Al terminar el mes, respondé estas preguntas con tus números.</p>
      <table>
        <tr><th>Pregunta</th><th>Dónde mirar</th><th>Qué podés decidir</th></tr>
        <tr><td>¿Gané o perdí?</td><td>Ganancia aproximada</td><td>Seguir igual, ajustar precios o gastos</td></tr>
        <tr><td>¿Mi sueldo es posible?</td><td>Sueldo comparado con ganancia</td><td>Subirlo, bajarlo o mantenerlo</td></tr>
        <tr><td>¿En qué se va la plata?</td><td>Resumen por categoría</td><td>Qué gasto bajar</td></tr>
        <tr><td>¿Me deben mucho?</td><td>Total de fiados</td><td>Bajar límites, cobrar antes</td></tr>
        <tr><td>¿Tengo plata parada?</td><td>Stock que no rota</td><td>Ofertar, no volver a pedir</td></tr>
        <tr><td>¿Me alcanza para los vencimientos?</td><td>Calendario y reservas</td><td>Separar más por semana</td></tr>
      </table>
      <pre><code>Conclusiones de Rocío (abril)
1. Gané unos $560.000; mi sueldo de $300.000 es posible.
2. Comisiones: $22.000 (bajaron con la transferencia) → sigo así.
3. Fiados: $140.000, cerca del tope → bajo el límite de 2 clientes.
4. Stock parado: $18.000 en galletitas de un sabor → combo con leche.</code></pre>
      <p><strong>Una decisión por pregunta, como máximo:</strong> mejor 3 cambios que hacés de verdad que 10 que quedan en el papel.</p>
      <p><strong>Esto no reemplaza a un contador:</strong> para impuestos, facturación y trámites con ARCA, consultá a un profesional.</p>
      <p>Por ejemplo, con sus 4 conclusiones de abril, Rocío tomó 3 decisiones. En mayo los fiados volvieron a $100.000 y las galletitas se vendieron.</p>` },
    { titulo: "Presentá y evaluá con la rúbrica", html: `
      <p class="idea">Presentá tu resumen del mes en <strong>una página</strong> (o mostráselo a alguien en 5 minutos) y evaluá tu sistema con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Separación</td><td>Plata del negocio aparte y retiros anotados</td><td>Separada pero con retiros sin anotar</td><td>Todo mezclado</td></tr>
        <tr><td>Registro</td><td>Movimientos de todos los días, con categoría</td><td>Con días salteados</td><td>Sin registro</td></tr>
        <tr><td>Caja</td><td>Arqueo diario con diferencias anotadas</td><td>Algunos días</td><td>Nunca</td></tr>
        <tr><td>Deudas</td><td>Fiados con límite y calendario de pagos</td><td>Solo uno de los dos</td><td>Ninguno</td></tr>
        <tr><td>Stock</td><td>Conteo valorizado y faltantes revisados</td><td>Conteo sin valorizar</td><td>Sin conteo</td></tr>
        <tr><td>Resumen y decisiones</td><td>Ganancia aproximada y al menos 2 decisiones</td><td>Resumen sin decisiones</td><td>Sin resumen</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → sistema completo: seguilo y pasá al curso Números de un pequeño negocio
7 a 9   → mejorá el criterio más bajo el mes que viene
0 a 6   → volvé a empezar por separar la plata y registrar</code></pre>
      <p><strong>Lo que más se abandona</strong> es el registro diario. Si un día no pudiste, anotá al día siguiente con los comprobantes; no esperes al fin de mes.</p>
      <p>Por ejemplo, Rocío sacó 9 de 12 en abril: le faltó hacer el arqueo varios días y no valorizó el stock. En mayo puso una alarma a las 21 para el arqueo y sacó 11.</p>` },
  ],
  practica: [
    "Elegí el negocio (tuyo, inventado o de alguien con su permiso) y anotá qué herramientas vas a usar la primera semana.",
    "Llevá las cuentas durante 1 mes con la rutina diaria, semanal y mensual de la lección.",
    "Respondé las 6 preguntas del resumen con tus números y anotá 3 decisiones.",
    "Puntuá tu sistema con la rúbrica y anotá tu total de 12.",
  ],
  recursos: [
    { t: "Curso de este sitio: Números de un pequeño negocio", url: "https://pkeios.github.io/EiaLearning/finanzas-negocio/" },
    { t: "Ayuda de Google: función SUMAR.SI en Hojas de cálculo", url: "https://support.google.com/docs/answer/3093583?hl=es" },
    { t: "Curso de este sitio: Monotributo, facturación e impuestos para independientes", url: "https://pkeios.github.io/EiaLearning/impuestos-independientes/" },
  ],
  quiz: [
    { q: "Todavía no tenés emprendimiento. ¿Cómo hacés el proyecto?", opciones: ["No lo hago","Con los datos de un negocio sin pedir permiso","Con un negocio inventado o el de alguien que conozco, con su permiso","Invento todo sin pensar"], correcta: 2, explicacion: "Así practicás igual. Usar datos ajenos sin permiso tienta, pero no corresponde." },
    { q: "Es tu primera vez llevando cuentas. ¿Cómo arrancás?", opciones: ["Con separar la plata y anotar movimientos, y sumo una herramienta por semana","Con todas las herramientas el primer día","Con el resumen del año","Esperando a tener tiempo"], correcta: 0, explicacion: "De a poco se sostiene. Todo el primer día tienta, pero se abandona." },
    { q: "¿Qué hacés todos los días?", opciones: ["Contar todo el stock","Hacer el resumen del mes","Nada","Anotar movimientos, hacer el arqueo y actualizar fiados"], correcta: 3, explicacion: "Lo diario son 10 minutos. Contar todo el stock tienta, pero es mensual." },
    { q: "¿Cuándo revisás el calendario de pagos y separás reservas?", opciones: ["Una vez por año","Cada lunes","Cuando vence algo","Nunca"], correcta: 1, explicacion: "Así ves qué se viene en la semana. \"Cuando vence algo\" tienta, pero ya es tarde." },
    { q: "Querés saber si tu sueldo es posible. ¿Qué comparás?", opciones: ["El sueldo con las ventas","El sueldo con lo que hay en la caja","El sueldo con la ganancia aproximada","El sueldo con el de un vecino"], correcta: 2, explicacion: "La ganancia es lo que el negocio deja. Las ventas tientan porque son un número grande, pero no es lo que gana." },
    { q: "Tus fiados están cerca del tope que te pusiste. ¿Qué decidís?", opciones: ["Bajar límites o cobrar antes","Subir el tope","Dejar de anotar","Nada"], correcta: 0, explicacion: "Así no se te va de las manos. Subir el tope tienta para vender más, pero arriesgás más plata." },
    { q: "Tenés $27.000 en productos que no rotan. ¿Qué decidís?", opciones: ["Pedir más","Esconderlos","Subirles el precio","Ofertarlos y no volver a pedirlos"], correcta: 3, explicacion: "Liberás la plata parada. Subirles el precio tienta para ganar más, pero se venden menos." },
    { q: "Si sacaste 10 conclusiones del resumen, ¿cuántas decisiones tomás?", opciones: ["Las 10 a la vez","Pocas que pueda hacer de verdad, como 3","Ninguna","20"], correcta: 1, explicacion: "Mejor 3 hechas que 10 en el papel. Las 10 tientan, pero no se sostienen." },
    { q: "Tenés dudas con la facturación y ARCA. ¿Qué hacés?", opciones: ["Hago lo que dice el resumen","No facturo","Consulto a un contador","Le pregunto al proveedor"], correcta: 2, explicacion: "El resumen no reemplaza al contador. El proveedor tienta porque sabe del rubro, pero no es su tema." },
    { q: "Si en la rúbrica, hiciste arqueo solo algunos días, ¿cuántos puntos en Caja?", opciones: ["1","2","0","12"], correcta: 0, explicacion: "Algunos días es 1 punto. 2 tienta, pero es para el arqueo diario." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Abandono las cuentas","Vuelvo a mezclar la plata","Cambio todo el sistema","Mejoro el criterio más bajo el mes que viene"], correcta: 3, explicacion: "De 7 a 9, mejorá uno. Cambiar todo tienta, pero perdés lo que funciona." },
    { q: "Un día no pudiste anotar nada. ¿Qué hacés?", opciones: ["Espero a fin de mes","Anoto al día siguiente con los comprobantes","Lo dejo sin anotar","Invento los números"], correcta: 1, explicacion: "Con los comprobantes recuperás el día. Esperar a fin de mes tienta, pero te olvidás de cosas." },
  ],
},
];
