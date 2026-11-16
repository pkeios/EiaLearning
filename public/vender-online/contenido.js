// Temario del curso "Vender por internet". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js vender-online y node tools/metodologia.js vender-online
window.TEMARIO = [
{
  id: "empezar",
  icono: "🛒",
  titulo: "Dónde vender por internet",
  nivel: "Básico",
  objetivos: [
    "Comparar redes sociales, marketplaces y tienda propia",
    "Elegir un canal para empezar según tu producto y tu tiempo",
    "Preparar lo mínimo antes de publicar",
  ],
  lecciones: [
    { titulo: "Tres formas de vender", video: {"id":"0Ak1l42gkF4","t":"Diferencia entre marketplace y e-commerce · Greentech Educación (2:06)"}, html: `
      <p class="idea">Hay tres formas principales de vender por internet. Cada una tiene ventajas y costos distintos, y no hace falta usar las tres al mismo tiempo.</p>
      <table>
        <tr><th>Canal</th><th>Ventaja</th><th>Desventaja</th></tr>
        <tr><td>Redes sociales y mensajería</td><td>Gratis, cercano, ya tenés contactos</td><td>Todo es manual: consultas, cobros y envíos</td></tr>
        <tr><td>Marketplace (un sitio donde venden muchos)</td><td>Mucha gente ya busca ahí; cobros y envíos integrados</td><td>Comisión por venta y mucha competencia</td></tr>
        <tr><td>Tienda en línea propia</td><td>Tu marca, tus reglas, sin comisión del marketplace</td><td>Costo mensual y tenés que llevar la gente vos</td></tr>
      </table>
      <p><strong>Empezá por uno:</strong> manejar bien un canal es mejor que manejar mal tres.</p>
      <p><strong>El canal depende de tu cliente:</strong> si tu cliente busca "vela aromática" en un marketplace, conviene estar ahí; si compra regalos porque ve fotos lindas en redes, empezá por redes.</p>
      <p>En todo el curso seguimos a <strong>Lucía</strong>, que hace velas aromáticas y empieza a venderlas por internet. Los números son inventados, pero las cuentas cierran.</p>
      <p>Por ejemplo, Lucía empieza por redes y mensajería con sus conocidos; cuando vende 20 velas por mes, suma un marketplace para llegar a gente nueva.</p>` },
    { titulo: "Elegir tu primer canal", html: `
      <p class="idea">Para elegir, mirá tres cosas: dónde busca tu cliente, cuánto tiempo tenés y cuánto te cuesta cada venta en ese canal.</p>
      <table>
        <tr><th>Si...</th><th>Conviene empezar por</th></tr>
        <tr><td>Tenés muchos contactos y poco tiempo para aprender</td><td>Redes y mensajería</td></tr>
        <tr><td>Tu producto se busca por nombre (repuestos, artículos conocidos)</td><td>Marketplace</td></tr>
        <tr><td>Ya vendés seguido y querés tu propia marca</td><td>Tienda propia</td></tr>
        <tr><td>Vendés servicios (clases, arreglos)</td><td>Redes, mensajería y un perfil profesional</td></tr>
      </table>
      <pre><code>Cuánto te queda por venta (vela a 12.000):
Redes, cobro por transferencia:     12.000 (sin comisión)
Marketplace con 13% de comisión:    12.000 × 0,87 = 10.440
Tienda propia con 4% del medio de pago
y 15.000 por mes de suscripción, con 20 ventas:
12.000 × 0,96 - 15.000 / 20 = 11.520 - 750 = 10.770</code></pre>
      <p><strong>Las comisiones cambian:</strong> buscá las actuales de cada plataforma antes de decidir.</p>
      <p>Por ejemplo, con pocas ventas por mes, la suscripción de una tienda propia pesa mucho por venta; con muchas, se reparte y conviene.</p>` },
    { titulo: "Lo mínimo antes de publicar", html: `
      <p class="idea">Antes de la primera publicación, tené resuelto lo básico: qué vendés, a qué precio, cómo cobrás y cómo llega al cliente. Si no, cada consulta se vuelve un problema.</p>
      <pre><code>Lista para empezar:
☐ 3 a 5 productos con fotos y precio final
☐ Cómo cobrás (transferencia, link de pago, efectivo)
☐ Cómo entregás (retiro, moto, correo) y cuánto cuesta
☐ Cuánto tardás en preparar un pedido
☐ Qué pasa si el cliente se arrepiente o el producto falla
☐ Un mensaje de respuesta rápida para consultas</code></pre>
      <table>
        <tr><th>Pregunta frecuente</th><th>Tené la respuesta lista</th></tr>
        <tr><td>"¿Cuánto sale?"</td><td>Precio final, con lo que incluye</td></tr>
        <tr><td>"¿Hacés envíos?"</td><td>A dónde, cómo y cuánto cuesta</td></tr>
        <tr><td>"¿Cómo pago?"</td><td>Medios y datos claros</td></tr>
        <tr><td>"¿Cuándo llega?"</td><td>Un plazo que puedas cumplir</td></tr>
      </table>
      <p><strong>Para vender de forma regular,</strong> conviene estar en regla: el curso "Monotributo, facturación e impuestos para independientes" de este sitio explica cómo.</p>
      <p>Por ejemplo, tener el mensaje "Hola, gracias por escribir. La vela cuesta $ 12.000, hacemos envíos a todo el país..." listo te ahorra escribirlo 30 veces por semana.</p>` },
  ],
  practica: [
    "Armá una tabla con los 3 canales y anotá, para tu producto, una ventaja y una desventaja de cada uno.",
    "Calculá cuánto te queda por venta en 2 canales con las comisiones actuales que encuentres. Anotá los dos números.",
    "Completá la lista \"Lo mínimo antes de publicar\" y anotá cuántas casillas te faltan.",
  ],
  recursos: [
    { t: "Defensa del Consumidor: portal oficial", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "Defensa del Consumidor: conocé tus derechos (para saber qué tenés que cumplir)", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor/conoce-tus-derechos" },
  ],
  quiz: [
    { q: "Si querés empezar a vender sin pagar nada, ¿qué canal usás?", opciones: ["Una tienda propia con suscripción","Un marketplace con comisión","Redes sociales y mensajería con tus contactos","Publicidad paga"], correcta: 2, explicacion: "Las redes son gratis. El marketplace tienta por la gente que hay, pero cobra comisión." },
    { q: "Si querés llegar a gente que ya busca tu producto por nombre, ¿qué canal conviene?", opciones: ["Un marketplace","Solo tus contactos","Un cartel en la puerta","Ninguno"], correcta: 0, explicacion: "En el marketplace la gente busca. Tus contactos tientan por cercanos, pero son pocos." },
    { q: "Si recién empezás, ¿cuántos canales conviene manejar?", opciones: ["Todos a la vez","Cinco","Ninguno","Uno, y manejarlo bien"], correcta: 3, explicacion: "Uno bien manejado rinde más. Todos a la vez tienta para llegar a más gente, pero se descuidan." },
    { q: "Si vendés una vela a $ 12.000 en un marketplace con 13% de comisión, ¿cuánto te queda?", opciones: ["$ 12.000","$ 10.440","$ 1.560","$ 13.560"], correcta: 1, explicacion: "12.000 × 0,87 = 10.440. $ 1.560 tienta, pero esa es la comisión, no lo que te queda." },
    { q: "Si tu tienda propia cuesta $ 15.000 por mes y hacés 20 ventas, ¿cuánto pesa por venta?", opciones: ["$ 15.000","$ 300","$ 750","$ 7.500"], correcta: 2, explicacion: "15.000 / 20 = 750. $ 7.500 tienta por un cero de más." },
    { q: "Si hacés pocas ventas por mes, ¿qué pasa con la suscripción de una tienda propia?", opciones: ["Pesa mucho por cada venta","No importa","Se vuelve gratis","Baja la comisión"], correcta: 0, explicacion: "Un costo fijo se reparte entre pocas ventas. \"No importa\" tienta, pero se come la ganancia." },
    { q: "Si las comisiones de las plataformas cambian, ¿qué hacés antes de decidir?", opciones: ["Usás las de un video viejo","Las adivinás","No importan","Buscás las actuales de cada plataforma"], correcta: 3, explicacion: "Cambian seguido. El video viejo tienta por explicado, pero los números ya no son esos." },
    { q: "Si todavía no sabés cómo vas a entregar los pedidos, ¿publicás igual?", opciones: ["Sí, después ves","Mejor no: resolvé antes cómo entregás y cuánto cuesta","Sí, y le preguntás al cliente","Sí, sin decir nada del envío"], correcta: 1, explicacion: "Cada consulta se vuelve un problema. \"Después ves\" tienta por apuro, pero perdés ventas." },
    { q: "Si te preguntan \"¿cuánto sale?\", ¿qué respondés?", opciones: ["\"Escribime por privado\"","Un precio sin el envío ni recargos","El precio final, con lo que incluye","\"Depende\""], correcta: 2, explicacion: "El precio claro genera confianza. \"Escribime por privado\" tienta para conversar, pero mucha gente no vuelve a preguntar." },
    { q: "Si te escriben 30 veces por semana con la misma pregunta, ¿qué conviene?", opciones: ["Tener un mensaje de respuesta rápida listo","Escribir todo cada vez","No responder","Responder al día siguiente siempre"], correcta: 0, explicacion: "Ahorrás tiempo y respondés rápido. Escribir cada vez tienta por personal, pero se te va la semana." },
    { q: "Si vas a vender de forma regular, ¿qué conviene resolver?", opciones: ["Nada","Vender sin facturar siempre","Usar la cuenta de otra persona","Estar en regla, por ejemplo con el monotributo"], correcta: 3, explicacion: "Estar en regla te permite crecer. Usar la cuenta de otro tienta por fácil, pero los ingresos quedan a su nombre." },
    { q: "Si te preguntan \"¿cuándo llega?\", ¿qué plazo das?", opciones: ["El más corto posible aunque no puedas","Uno que puedas cumplir","Ninguno","\"Pronto\""], correcta: 1, explicacion: "Lo prometido hay que cumplirlo. El más corto tienta para cerrar la venta, pero si no cumplís, perdés al cliente." },
  ],
},
{
  id: "publicar",
  icono: "📝",
  titulo: "Una publicación que vende",
  nivel: "Básico",
  objetivos: [
    "Escribir un título que tu cliente buscaría",
    "Tomar fotos claras con el celular",
    "Escribir una descripción que responda las dudas antes de que pregunten",
  ],
  lecciones: [
    { titulo: "El título", html: `
      <p class="idea">El título es lo primero que se lee y, en un marketplace, lo que hace que te encuentren. Tiene que decir <strong>qué es, para qué sirve y lo que lo distingue</strong>, con las palabras que usaría tu cliente.</p>
      <table>
        <tr><th>Título flojo</th><th>Título claro</th></tr>
        <tr><td>"Vela linda"</td><td>"Vela aromática de soja 200 g en frasco de vidrio, lavanda"</td></tr>
        <tr><td>"Oferta!!!"</td><td>"Set de 3 velas aromáticas de soja para regalo, con caja"</td></tr>
        <tr><td>"Producto artesanal"</td><td>"Vela de soja artesanal, 40 horas de duración, aroma vainilla"</td></tr>
      </table>
      <pre><code>Fórmula:
Qué es + material o tamaño + característica clave + variante

"Vela aromática + de soja 200 g + 40 horas + vainilla"</code></pre>
      <p><strong>Usá las palabras de tu cliente:</strong> si la gente busca "vela aromática", no pongas solo "vela decorativa".</p>
      <p><strong>Evitá</strong> los signos de exclamación de más, las mayúsculas en todo el título y las palabras que no dicen nada ("increíble", "único").</p>
      <p>Por ejemplo, alguien que busca "vela de soja lavanda" encuentra el título claro, pero nunca encuentra "Vela linda".</p>` },
    { titulo: "Fotos con el celular", video: {"id":"W_MwxOleM9s","t":"Fotografía de productos fácil y barata · República Fotográfica (5:52)"}, html: `
      <p class="idea">En internet, el cliente no puede tocar el producto: las fotos hacen ese trabajo. Con un celular y luz natural se logran fotos claras.</p>
      <table>
        <tr><th>Foto</th><th>Para qué</th></tr>
        <tr><td>Principal, con fondo claro y liso</td><td>Que se entienda qué es</td></tr>
        <tr><td>Detalles (textura, etiqueta)</td><td>Mostrar la calidad</td></tr>
        <tr><td>En uso o con algo de referencia (una mano, una taza)</td><td>Que se entienda el tamaño</td></tr>
        <tr><td>Variantes (colores, aromas)</td><td>Ver las opciones</td></tr>
        <tr><td>El paquete</td><td>Saber cómo llega, sobre todo si es regalo</td></tr>
      </table>
      <pre><code>Para que salga bien:
- Cerca de una ventana, sin sol directo.
- Fondo liso: una cartulina blanca o una mesa clara.
- Limpiá la lente del celular.
- Sin zoom digital: acercate.
- La foto tiene que mostrar el producto real, sin filtros que lo cambien.</code></pre>
      <p>El curso "Fotos de producto con el celular" está en la lista de este sitio para quien quiera profundizar.</p>
      <p>Por ejemplo, una foto de la vela junto a una taza de café le muestra al cliente el tamaño real mejor que cualquier medida escrita.</p>` },
    { titulo: "La descripción", video: {"id":"Rf_bxTGGG0Q","t":"Descripciones de producto que sorprenden a tus clientes · Maïder Tomasena (10:26)"}, html: `
      <p class="idea">Una buena descripción responde las dudas <strong>antes</strong> de que el cliente pregunte. Empieza por el beneficio y después da los datos concretos.</p>
      <pre><code>Vela aromática de soja 200 g · Lavanda

Una vela para relajarte al final del día: aroma suave
que llena el ambiente sin empalagar.

• Cera de soja y mecha de algodón
• 200 g · frasco de vidrio reutilizable · 8 × 7 cm
• Duración aproximada: 40 horas
• Aromas: lavanda, vainilla, cítricos

Cuidados: no la dejes encendida sin supervisión
ni cerca de cortinas, chicos o mascotas.

Envíos a todo el país · Retiro sin cargo en el barrio
Llega en caja de cartón, lista para regalar.</code></pre>
      <table>
        <tr><th>Incluí siempre</th></tr>
        <tr><td>Medidas, peso, material y cantidad</td></tr>
        <tr><td>Variantes disponibles</td></tr>
        <tr><td>Cuidados o advertencias de seguridad</td></tr>
        <tr><td>Envío, retiro y tiempo de preparación</td></tr>
      </table>
      <p><strong>No exageres:</strong> si decís "dura 60 horas" y dura 40, el cliente reclama con razón.</p>
      <p>Por ejemplo, poner las medidas del frasco evita la consulta "¿de qué tamaño es?", que es la más repetida en productos chicos.</p>` },
  ],
  practica: [
    "Escribí el título de 3 productos con la fórmula. Anotá cuántas palabras de búsqueda de tu cliente usaste.",
    "Sacá 5 fotos de un producto (principal, detalle, en uso, variante y paquete) cerca de una ventana. Anotá cuál quedó mejor y por qué.",
    "Escribí la descripción de un producto con las 4 cosas que hay que incluir siempre. Anotá cuántas preguntas frecuentes responde.",
  ],
  recursos: [
    { t: "Defensa del Consumidor: conocé tus derechos (para saber qué tenés que cumplir)", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor/conoce-tus-derechos" },
    { t: "Defensa del Consumidor: portal oficial", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si tu título dice \"Vela linda\", ¿qué problema tiene?", opciones: ["Ninguno","Es muy largo","No dice qué es ni lo que la distingue, y nadie la va a encontrar","Es muy técnico"], correcta: 2, explicacion: "El título tiene que describir. \"Ninguno\" tienta porque es corto, pero nadie busca \"linda\"." },
    { q: "Si escribís un título, ¿qué fórmula usás?", opciones: ["Qué es + material o tamaño + característica clave + variante","Solo el nombre de tu marca","Muchos signos de exclamación","Todo en mayúsculas"], correcta: 0, explicacion: "La fórmula dice todo lo que se busca. La marca tienta, pero nadie la conoce todavía." },
    { q: "Si tus clientes buscan \"vela aromática\", ¿qué palabras usás?", opciones: ["\"Vela decorativa\" solamente","Un nombre inventado","Palabras en otro idioma","Las mismas: \"vela aromática\""], correcta: 3, explicacion: "Usar sus palabras te hace aparecer. Un nombre inventado tienta por original, pero nadie lo busca." },
    { q: "Si vas a sacar la foto principal, ¿qué fondo usás?", opciones: ["Uno lleno de objetos","Uno claro y liso, como una cartulina blanca","Una pared con dibujos","De noche con flash"], correcta: 1, explicacion: "El fondo liso destaca el producto. Muchos objetos tientan por decorativos, pero distraen." },
    { q: "Si querés que se entienda el tamaño, ¿qué foto sumás?", opciones: ["Una con mucho zoom","Una borrosa","Una con algo de referencia, como una mano o una taza","Ninguna"], correcta: 2, explicacion: "La referencia muestra el tamaño real. El zoom tienta por detalle, pero confunde el tamaño." },
    { q: "Si sacás fotos, ¿dónde conviene hacerlo?", opciones: ["Cerca de una ventana, sin sol directo","Al sol del mediodía","En un lugar oscuro con flash","En cualquier lado"], correcta: 0, explicacion: "La luz suave de ventana es pareja. El sol fuerte tienta por luminoso, pero hace sombras duras." },
    { q: "Si querés acercarte al producto, ¿qué hacés?", opciones: ["Usás el zoom al máximo","Recortás mucho la foto","Te alejás","Te acercás vos, sin zoom digital"], correcta: 3, explicacion: "El zoom digital pierde calidad. Tienta por cómodo, pero la foto sale pixelada." },
    { q: "Si una foto tiene un filtro que cambia el color del producto, ¿qué pasa?", opciones: ["Vende más sin problemas","El cliente recibe algo distinto y puede reclamar","Nada","Mejora la calidad"], correcta: 1, explicacion: "La foto tiene que mostrar el producto real. \"Vende más\" tienta, pero genera reclamos." },
    { q: "Si escribís la descripción, ¿por dónde empezás?", opciones: ["Por tu historia de vida","Por el precio de los insumos","Por el beneficio para el cliente","Por las condiciones legales"], correcta: 2, explicacion: "El beneficio engancha. La historia tienta por emotiva, pero el cliente quiere saber qué gana." },
    { q: "Si vendés velas, ¿qué advertencia incluís?", opciones: ["No dejarla encendida sin supervisión ni cerca de cortinas, chicos o mascotas","Ninguna","Que es mágica","Que dura para siempre"], correcta: 0, explicacion: "Los cuidados de seguridad son parte de la descripción. \"Ninguna\" tienta para no asustar, pero es necesaria." },
    { q: "Si la vela dura 40 horas, ¿qué decís en la descripción?", opciones: ["\"Dura 60 horas\"","\"Dura para siempre\"","No lo decís","\"Duración aproximada: 40 horas\""], correcta: 3, explicacion: "Exagerar genera reclamos con razón. 60 horas tienta para vender más, pero no es verdad." },
    { q: "Si la consulta más repetida es \"¿de qué tamaño es?\", ¿qué hacés?", opciones: ["Seguís respondiendo una por una","Ponés las medidas en la descripción","Sacás el producto","No respondés"], correcta: 1, explicacion: "La descripción responde antes de que pregunten. Responder una por una tienta por personal, pero perdés tiempo y ventas." },
  ],
},
{
  id: "cobrar",
  icono: "💳",
  titulo: "Cobrar sin sustos",
  nivel: "Intermedio",
  objetivos: [
    "Elegir medios de cobro según el canal y su costo",
    "Confirmar un pago antes de entregar",
    "Reconocer las estafas más comunes a vendedores",
  ],
  lecciones: [
    { titulo: "Medios de cobro", video: {"id":"7WggBIcMeK4","t":"Empezá tu e-commerce en Argentina: herramientas para vender online · Alejandro Piedrabuena (20:21)"}, html: `
      <p class="idea">Cada medio de cobro tiene un costo, un tiempo de acreditación y un nivel de seguridad distinto. Ofrecé pocos, claros y que puedas controlar.</p>
      <table>
        <tr><th>Medio</th><th>Costo para vos</th><th>Cuidado</th></tr>
        <tr><td>Transferencia bancaria o de billetera</td><td>En general sin costo</td><td>Verificar que el dinero llegó a tu cuenta</td></tr>
        <tr><td>Link de pago o código QR</td><td>Comisión por venta</td><td>La plata puede tardar días en acreditarse</td></tr>
        <tr><td>Tarjeta en cuotas</td><td>Comisión más alta</td><td>Las cuotas "sin interés" las pagás vos</td></tr>
        <tr><td>Efectivo contra entrega</td><td>Sin comisión</td><td>Riesgo de que no esté el cliente o de billetes falsos</td></tr>
        <tr><td>Cobro dentro del marketplace</td><td>Incluido en la comisión</td><td>Cumplir sus reglas de envío y reclamos</td></tr>
      </table>
      <p><strong>Sumá las comisiones al precio,</strong> como se explica en el curso "Costos y precios: cuánto cobrar" de este sitio.</p>
      <p><strong>Usá una cuenta solo para el emprendimiento:</strong> te deja ver claro cuánto vendés.</p>
      <p>Por ejemplo, Lucía cobra con transferencia a $ 12.000 y con link de pago a $ 12.600, para cubrir la comisión, y lo informa en la publicación.</p>` },
    { titulo: "Confirmar antes de entregar", html: `
      <p class="idea">Un comprobante no es lo mismo que la plata en tu cuenta. Antes de entregar o despachar, <strong>confirmá que el pago se acreditó</strong>.</p>
      <pre><code>Antes de entregar:
1. Entrá a tu cuenta (no te fíes de una captura que te mandan).
2. Verificá que el monto llegó completo.
3. Verificá el nombre de quien pagó.
4. Recién ahí, despachá o entregá.

Registro de pedidos:
Fecha · cliente · producto · monto · medio · acreditado (sí/no) · enviado</code></pre>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Te mandan una captura de transferencia, pero no ves la plata</td><td>Esperás a que se acredite antes de entregar</td></tr>
        <tr><td>El cliente pide entregar "y después te paga"</td><td>Solo con gente de mucha confianza, o pedís seña</td></tr>
        <tr><td>Pagó de más "por error" y pide que le devuelvas la diferencia</td><td>Desconfiá: verificá en tu cuenta antes de devolver nada</td></tr>
      </table>
      <p>Por ejemplo, una captura editada de una transferencia que nunca existió es una estafa común: solo tu cuenta te dice si la plata llegó.</p>` },
    { titulo: "Estafas a vendedores", html: `
      <p class="idea">Los vendedores también reciben intentos de estafa. Casi todos buscan que saques la venta de los canales seguros o que entregues antes de cobrar.</p>
      <table>
        <tr><th>Estafa</th><th>Señal</th><th>Qué hacer</th></tr>
        <tr><td>Comprobante falso</td><td>Captura de un pago que no aparece en tu cuenta</td><td>Entregar solo con la plata acreditada</td></tr>
        <tr><td>Pago fuera del marketplace</td><td>"Pagame por fuera, así no te cobran comisión"</td><td>Cobrar siempre por la plataforma: si no, perdés su protección</td></tr>
        <tr><td>Falso soporte de la plataforma</td><td>Mensaje que pide tu contraseña o un código para "liberar el pago"</td><td>Nunca dar contraseñas ni códigos; entrar vos a la plataforma</td></tr>
        <tr><td>Pago de más</td><td>"Te pagué de más, devolveme la diferencia"</td><td>Verificar en tu cuenta antes de devolver</td></tr>
        <tr><td>Retiro por un "tercero"</td><td>Alguien que retira en nombre del comprador sin datos claros</td><td>Pedir datos y confirmar con el comprador por el canal original</td></tr>
      </table>
      <p>El curso "Seguridad digital y estafas" de este sitio tiene más sobre cómo protegerte.</p>
      <p>Por ejemplo, un mensaje "de la plataforma" que pide el código que te llegó por SMS para acreditar una venta es una estafa: ese código sirve para entrar a tu cuenta.</p>` },
  ],
  practica: [
    "Elegí 2 o 3 medios de cobro y anotá el costo, el tiempo de acreditación y el cuidado de cada uno.",
    "Armá la planilla de registro de pedidos con las 7 columnas y cargá 3 pedidos reales o inventados.",
    "Anotá las 5 estafas de la tabla y qué mensaje responderías a cada una.",
  ],
  recursos: [
    { t: "Defensa del Consumidor: portal oficial", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Si querés cobrar sin comisión, ¿qué medio suele servir?", opciones: ["Tarjeta en cuotas","Link de pago","Transferencia bancaria o de billetera","Marketplace"], correcta: 2, explicacion: "La transferencia en general no tiene costo. El link tienta por cómodo, pero cobra comisión." },
    { q: "Si cobrás con link de pago, ¿qué tenés en cuenta?", opciones: ["La comisión y que la plata puede tardar días en acreditarse","Que es gratis siempre","Que llega al instante siempre","Nada"], correcta: 0, explicacion: "Tiene costo y demora. \"Gratis siempre\" tienta por lo fácil, pero no es así." },
    { q: "Si ofrecés cuotas \"sin interés\" con tarjeta, ¿quién paga el costo?", opciones: ["Nadie","El cliente","El correo","Vos, el que vende"], correcta: 3, explicacion: "El costo de las cuotas lo absorbe el vendedor. \"Nadie\" tienta por el nombre, pero alguien lo paga." },
    { q: "Si cobrás con link de pago y tiene comisión, ¿qué hacés con el precio?", opciones: ["Lo dejás igual y perdés esa plata","Sumás la comisión y lo informás en la publicación","Cobrás de más sin avisar","Escondés el recargo"], correcta: 1, explicacion: "Informarlo es claro y justo. Cobrar de más sin avisar tienta, pero genera reclamos." },
    { q: "Si te mandan una captura de la transferencia, ¿ya podés entregar?", opciones: ["Sí, la captura alcanza","Sí, si la captura es clara","No: primero verificás en tu cuenta que la plata llegó","Sí, si el cliente es amable"], correcta: 2, explicacion: "Las capturas se editan. \"Si es clara\" tienta, pero solo tu cuenta confirma el pago." },
    { q: "Si querés llevar control de tus ventas, ¿qué armás?", opciones: ["Un registro con fecha, cliente, producto, monto, medio, acreditado y enviado","Nada, te acordás","Solo una lista de nombres","Solo las capturas en el celular"], correcta: 0, explicacion: "El registro evita errores. \"Te acordás\" tienta, pero con 20 pedidos se mezcla todo." },
    { q: "Si un cliente pide que le entregues y te pague después, ¿qué hacés?", opciones: ["Aceptás siempre","Le entregás el doble","Le pedís la contraseña del banco","Solo con alguien de mucha confianza, o pedís una seña"], correcta: 3, explicacion: "Entregar sin cobrar es riesgoso. Aceptar siempre tienta para no perder la venta, pero podés perder el producto." },
    { q: "Si un comprador del marketplace te dice \"pagame por fuera, así no te cobran comisión\", ¿qué hacés?", opciones: ["Aceptás para ahorrar la comisión","Cobrás por la plataforma: si no, perdés su protección","Le das tu CBU y despachás","Le pedís que pague en efectivo a un tercero"], correcta: 1, explicacion: "Fuera de la plataforma no hay protección. Ahorrar la comisión tienta, pero es una estafa común." },
    { q: "Si \"la plataforma\" te pide el código que te llegó por SMS para liberar un pago, ¿qué hacés?", opciones: ["Lo das para cobrar más rápido","Lo publicás","No lo das: ese código sirve para entrar a tu cuenta","Lo mandás por mail"], correcta: 2, explicacion: "Nadie legítimo pide ese código. Darlo tienta por cobrar rápido, pero te roban la cuenta." },
    { q: "Si alguien dice \"te pagué de más, devolveme la diferencia\", ¿qué hacés?", opciones: ["Verificás en tu cuenta antes de devolver nada","Le devolvés enseguida","Le devolvés el doble","Le pasás tu contraseña"], correcta: 0, explicacion: "Muchas veces el pago nunca existió. Devolver enseguida tienta por honestidad, pero perdés plata." },
    { q: "Si alguien retira un pedido en nombre del comprador, ¿qué hacés?", opciones: ["Le entregás a cualquiera","No preguntás nada","Le pedís que pague de nuevo","Pedís datos y confirmás con el comprador por el canal original"], correcta: 3, explicacion: "Confirmar evita entregarle a un estafador. Entregar a cualquiera tienta por rápido, pero es un riesgo." },
    { q: "Si querés ver claro cuánto vendés, ¿qué cuenta usás?", opciones: ["La de todos los gastos de tu casa","Una cuenta solo para el emprendimiento","La de un amigo","Ninguna, solo efectivo"], correcta: 1, explicacion: "Separar cuentas ordena los números. La cuenta de tu casa tienta por cómoda, pero se mezcla todo." },
  ],
},
{
  id: "envios",
  icono: "📦",
  titulo: "Envíos y entregas",
  nivel: "Intermedio",
  objetivos: [
    "Elegir formas de entrega según la distancia y el producto",
    "Empacar para que el producto llegue sano",
    "Calcular y comunicar el costo y el plazo de envío",
  ],
  lecciones: [
    { titulo: "Formas de entrega", video: {"id":"OoVjWiWDkoQ","t":"Envíos para tu tienda online: guía paso a paso · Valeria Digital (16:05)"}, html: `
      <p class="idea">No hay una sola forma de entregar. Ofrecé las que puedas cumplir bien y que le sirvan a tu cliente.</p>
      <table>
        <tr><th>Forma</th><th>Para</th><th>Costo y cuidado</th></tr>
        <tr><td>Retiro en un punto</td><td>Clientes cercanos</td><td>Sin costo; acordar horario y lugar seguro</td></tr>
        <tr><td>Envío en moto o cadetería</td><td>Misma ciudad, en el día</td><td>Costo por viaje; confirmar dirección y horario</td></tr>
        <tr><td>Correo o empresa de envíos</td><td>Todo el país</td><td>Según peso, tamaño y distancia; dar el número de seguimiento</td></tr>
        <tr><td>Envío del marketplace</td><td>Ventas por esa plataforma</td><td>Según sus reglas; cumplir sus plazos de despacho</td></tr>
      </table>
      <p><strong>Punto de retiro seguro:</strong> si entregás en mano, elegí lugares públicos y concurridos, de día.</p>
      <p><strong>El tiempo total</strong> es tu tiempo de preparación más el tiempo del envío. Comunicá los dos.</p>
      <p>Por ejemplo, Lucía ofrece retiro gratis en una estación de tren del barrio los sábados, moto en la ciudad y correo para el resto del país.</p>` },
    { titulo: "Empacar bien", html: `
      <p class="idea">Un producto que llega roto es una venta perdida, un reclamo y un mal comentario. Empacar bien cuesta poco y evita mucho.</p>
      <pre><code>Para productos frágiles (como un frasco de vidrio):
1. Envolvé el producto con papel o plástico de burbujas.
2. Caja un poco más grande que el producto.
3. Rellená los huecos (papel arrugado, cartón): que no se mueva.
4. Prueba: cerrá la caja y sacudila suave. Si se mueve, falta relleno.
5. Cerrá con cinta en todos los bordes.
6. Etiqueta clara: nombre, dirección, teléfono y "Frágil".</code></pre>
      <table>
        <tr><th>Detalle</th><th>Por qué</th></tr>
        <tr><td>Una tarjeta de agradecimiento</td><td>Mejora la experiencia y ayuda a que vuelvan a comprar</td></tr>
        <tr><td>Foto del paquete antes de despachar</td><td>Prueba de cómo salió si hay un reclamo</td></tr>
        <tr><td>Empaque del tamaño justo</td><td>Las cajas grandes pueden costar más de envío</td></tr>
      </table>
      <p>Por ejemplo, una vela en frasco de vidrio sin relleno en la caja llega rota con facilidad; con papel arrugado alrededor, llega sana.</p>` },
    { titulo: "Costo y plazo del envío", html: `
      <p class="idea">El costo del envío es una de las razones más comunes por las que alguien abandona una compra. Calculalo bien y comunicalo desde el principio.</p>
      <pre><code>Opciones para el costo de envío:

1. Lo paga el cliente: precio del producto + envío aparte.
2. Envío gratis desde un monto: por ejemplo, desde $ 36.000.
   Si el envío te cuesta $ 6.000 y el ticket es $ 36.000,
   el envío es el 6.000 / 36.000 × 100 = 16,7% de la venta.
3. Envío incluido en el precio: sumás un promedio del envío
   al precio de cada producto.</code></pre>
      <table>
        <tr><th>Comunicá siempre</th></tr>
        <tr><td>A qué zonas enviás</td></tr>
        <tr><td>Cuánto cuesta o desde qué monto es gratis</td></tr>
        <tr><td>Cuánto tardás en preparar y cuánto tarda en llegar</td></tr>
        <tr><td>Cómo se sigue el envío</td></tr>
      </table>
      <p><strong>Cumplí los plazos que ofrecés:</strong> según Defensa del Consumidor, los plazos de entrega prometidos se tienen que cumplir.</p>
      <p>Por ejemplo, ofrecer "envío gratis desde 3 velas" hace que muchos clientes sumen una tercera vela para no pagar el envío.</p>` },
  ],
  practica: [
    "Elegí 2 o 3 formas de entrega para tu producto y anotá el costo y el plazo de cada una.",
    "Empacá un producto con los 6 pasos y hacé la prueba de sacudirlo. Anotá si se movió y qué agregaste.",
    "Calculá qué porcentaje de tu ticket promedio es el envío y anotá si te conviene ofrecer envío gratis desde algún monto.",
  ],
  recursos: [
    { t: "Correo Argentino: envíos y tarifas", url: "https://www.correoargentino.com.ar/" },
    { t: "Defensa del Consumidor: conocé tus derechos (para saber qué tenés que cumplir)", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor/conoce-tus-derechos" },
  ],
  quiz: [
    { q: "Si tu cliente está en otra provincia, ¿qué forma de entrega usás?", opciones: ["Retiro en tu casa","Moto en el día","Correo o empresa de envíos, con número de seguimiento","Ninguna"], correcta: 2, explicacion: "Para distancias largas sirve el correo. La moto tienta por rápida, pero no llega a otra provincia." },
    { q: "Si vas a entregar en mano, ¿dónde conviene?", opciones: ["En un lugar público y concurrido, de día","En un lugar oscuro y solitario","En la casa de un desconocido","De noche en un descampado"], correcta: 0, explicacion: "La seguridad va primero. La casa del desconocido tienta por cómoda, pero es riesgosa." },
    { q: "Si te preguntan cuándo llega, ¿qué tiempo comunicás?", opciones: ["Solo el del correo","Solo el tuyo","Ninguno","Tu tiempo de preparación más el tiempo del envío"], correcta: 3, explicacion: "Las dos partes suman. Solo el del correo tienta, pero tu preparación también lleva días." },
    { q: "Si vas a enviar un frasco de vidrio, ¿qué hacés?", opciones: ["Lo mandás en una bolsa","Lo envolvés, lo ponés en una caja con relleno para que no se mueva","Lo mandás sin caja","Lo mandás en una caja enorme vacía"], correcta: 1, explicacion: "El relleno evita que se rompa. La caja enorme tienta por espacio, pero se mueve y se rompe." },
    { q: "Si sacudís la caja y el producto se mueve, ¿qué falta?", opciones: ["Cinta en la tapa","Una caja más grande","Relleno","Nada"], correcta: 2, explicacion: "Si se mueve, falta relleno. Una caja más grande tienta, pero empeora el problema." },
    { q: "Si querés tener una prueba de cómo salió el paquete, ¿qué hacés?", opciones: ["Le sacás una foto antes de despachar","Nada","Le preguntás al correo","Lo pesás nada más"], correcta: 0, explicacion: "La foto sirve ante un reclamo. \"Nada\" tienta por apuro, pero después no tenés cómo probarlo." },
    { q: "Si usás una caja mucho más grande que el producto, ¿qué puede pasar?", opciones: ["Que llegue mejor siempre","Que sea más barato","Nada","Que el envío cueste más y el producto se mueva"], correcta: 3, explicacion: "El tamaño influye en el costo. \"Llega mejor\" tienta por espacio, pero sin relleno se mueve." },
    { q: "Si el envío te cuesta $ 6.000 y el ticket es $ 36.000, ¿qué porcentaje de la venta es?", opciones: ["6%","Cerca del 16,7%","36%","60%"], correcta: 1, explicacion: "6.000 / 36.000 × 100 = 16,7. El 6% tienta por el número 6, pero hay que dividir." },
    { q: "Si ofrecés envío gratis desde 3 velas, ¿qué suele pasar?", opciones: ["Nadie compra","Perdés siempre","Muchos clientes suman una tercera vela para no pagar el envío","No cambia nada"], correcta: 2, explicacion: "El umbral sube el ticket. \"Perdés siempre\" tienta, pero si está bien calculado, conviene." },
    { q: "Si querés incluir el envío en el precio, ¿qué hacés?", opciones: ["Sumás un promedio del costo del envío al precio de cada producto","Lo regalás sin calcular","Cobrás el doble","Lo cobrás al final sin avisar"], correcta: 0, explicacion: "Calcularlo protege tu ganancia. Regalarlo sin calcular tienta por atractivo, pero puede dejarte en pérdida." },
    { q: "Si prometiste entregar en 3 días, ¿qué dice Defensa del Consumidor?", opciones: ["Que es solo una sugerencia","Que podés tardar lo que quieras","Nada","Que los plazos de entrega ofrecidos se tienen que cumplir"], correcta: 3, explicacion: "Lo prometido es obligatorio. \"Una sugerencia\" tienta, pero el cliente puede reclamar." },
    { q: "Si un cliente abandona la compra al ver el costo del envío, ¿qué podés revisar?", opciones: ["Esconder el envío hasta el final","Comunicarlo desde el principio u ofrecer envío gratis desde un monto","Subir el envío","Nada"], correcta: 1, explicacion: "La claridad reduce abandonos. Esconderlo tienta para que avance, pero abandona igual al final." },
  ],
},
{
  id: "derechos",
  icono: "⚖️",
  titulo: "Atención y derechos del consumidor",
  nivel: "Avanzado",
  objetivos: [
    "Responder consultas y reclamos rápido y bien",
    "Cumplir el derecho de arrepentimiento y la garantía legal",
    "Cuidar los datos personales de tus clientes",
  ],
  lecciones: [
    { titulo: "Responder rápido y bien", html: `
      <p class="idea">En internet, quien responde primero muchas veces vende. Una respuesta rápida, amable y completa vale tanto como una buena foto.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Responder en el día, idealmente en pocas horas</td><td>Dejar consultas días sin respuesta</td></tr>
        <tr><td>Dar el precio final y el envío en la primera respuesta</td><td>"Escribime por privado" sin dar el precio</td></tr>
        <tr><td>Saludar por el nombre y terminar con una pregunta</td><td>Respuestas de una sola palabra</td></tr>
        <tr><td>Avisar si hay demora antes de que el cliente pregunte</td><td>Desaparecer después del cobro</td></tr>
      </table>
      <pre><code>Ante un reclamo:
1. Agradecé que te avise.
2. Pedí una foto o detalle del problema.
3. Proponé una solución concreta (cambio, devolución, reenvío).
4. Cumplí lo que prometiste y avisá cuando esté hecho.</code></pre>
      <p>Los cursos "Atención al cliente, en persona y por chat" y "Vender sin ser pesado" de este sitio tienen más sobre esto.</p>
      <p>Por ejemplo, si una vela llega rota, cambiarla enseguida y sin discutir suele convertir a ese cliente en uno que vuelve y recomienda.</p>` },
    { titulo: "Arrepentimiento y garantía", video: {"id":"iFVjGNEKAns","t":"Compras online: cómo funciona el botón de arrepentimiento · C5N (3:08)"}, html: `
      <p class="idea">Quien compra por internet tiene derechos que vos, como vendedor, tenés que cumplir. Los más importantes son el <strong>arrepentimiento</strong> y la <strong>garantía</strong>.</p>
      <table>
        <tr><th>Derecho</th><th>Qué dice</th></tr>
        <tr><td>Arrepentimiento</td><td>En compras por internet, el cliente tiene 10 días desde que recibe el producto para cancelar la compra y pedir que le devuelvan la plata</td></tr>
        <tr><td>Botón de arrepentimiento</td><td>Los sitios de venta tienen que ofrecer una forma visible y simple de arrepentirse</td></tr>
        <tr><td>Garantía legal</td><td>6 meses para productos nuevos y 3 meses para usados; podés ofrecer más, nunca menos</td></tr>
        <tr><td>Plazos de entrega</td><td>Los que ofrecés se tienen que cumplir</td></tr>
        <tr><td>Precio</td><td>Se informa el precio final, con impuestos</td></tr>
      </table>
      <pre><code>Tu política de cambios y devoluciones, por escrito:
"Tenés 10 días desde que recibís tu compra para arrepentirte.
Escribinos a [contacto] y te decimos cómo devolverlo.
Garantía: 6 meses por fallas de fabricación."</code></pre>
      <p class="aviso">Este curso resume las reglas generales. No reemplaza el asesoramiento legal: revisá la Ley 24.240 y las normas de Defensa del Consumidor, que pueden cambiar.</p>
      <p>Por ejemplo, si un cliente recibe la vela el lunes y el miércoles se arrepiente, está dentro del plazo: le corresponde la devolución de la plata.</p>` },
    { titulo: "Datos personales", html: `
      <p class="idea">Cuando vendés, recibís datos de tus clientes: nombre, dirección, teléfono, mail. Esos datos no son tuyos: te los prestan para un fin, y tenés que cuidarlos.</p>
      <table>
        <tr><th>Hacé</th><th>No hagas</th></tr>
        <tr><td>Usar los datos solo para la venta y el envío</td><td>Venderlos o pasarlos a otros</td></tr>
        <tr><td>Pedir permiso antes de mandar promociones</td><td>Sumar a todos a un grupo masivo sin preguntar</td></tr>
        <tr><td>Guardar la planilla de clientes con contraseña</td><td>Publicar capturas con nombres, direcciones o teléfonos</td></tr>
        <tr><td>Borrar o tachar los datos al mostrar un pedido en redes</td><td>Mostrar etiquetas de envío con la dirección a la vista</td></tr>
      </table>
      <p><strong>En Argentina,</strong> la protección de los datos personales tiene una ley propia y un organismo de control, la AAIP (ver recursos).</p>
      <p><strong>Si alguien te pide que borres sus datos,</strong> hacelo.</p>
      <p>Por ejemplo, subir una foto de "¡pedidos listos para salir!" con las etiquetas legibles expone la dirección de tus clientes: tapalas antes de publicar.</p>` },
  ],
  practica: [
    "Escribí tu respuesta tipo para una consulta y para un reclamo, con los 4 pasos. Anotá cuántos minutos tardaste en responder tu última consulta real.",
    "Escribí tu política de cambios y devoluciones con el plazo de arrepentimiento y la garantía. Anotá dónde la vas a publicar.",
    "Revisá dónde guardás los datos de tus clientes y anotá qué vas a cambiar para cuidarlos mejor.",
  ],
  recursos: [
    { t: "Defensa del Consumidor: conocé tus derechos (para saber qué tenés que cumplir)", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor/conoce-tus-derechos" },
    { t: "Ley 24.240 de Defensa del Consumidor (texto actualizado)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/actualizacion" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Si te llega una consulta, ¿cuándo conviene responder?", opciones: ["A la semana","Solo los fines de semana","En el día, idealmente en pocas horas","Nunca"], correcta: 2, explicacion: "Quien responde primero muchas veces vende. A la semana tienta si estás ocupado, pero el cliente ya compró en otro lado." },
    { q: "Si alguien pregunta el precio, ¿qué respondés?", opciones: ["El precio final y el envío en la primera respuesta","\"Escribime por privado\"","Solo \"hola\"","Un precio sin el envío ni recargos"], correcta: 0, explicacion: "La respuesta completa vende. \"Por privado\" tienta para conversar, pero mucha gente no vuelve." },
    { q: "Si vas a demorar un pedido, ¿qué hacés?", opciones: ["No decís nada","Esperás a que reclame","Bloqueás al cliente","Avisás antes de que el cliente pregunte"], correcta: 3, explicacion: "Avisar cuida la confianza. \"No decir nada\" tienta para evitar el mal momento, pero empeora todo." },
    { q: "Si una vela llega rota, ¿qué hacés primero?", opciones: ["Le decís que es culpa del correo y listo","Agradecés el aviso y pedís una foto del problema","No respondés","Le pedís que la pegue"], correcta: 1, explicacion: "Escuchar y pedir detalle es el primer paso. Culpar al correo tienta, pero el cliente te compró a vos." },
    { q: "Si un cliente se arrepiente de una compra por internet, ¿qué plazo tiene?", opciones: ["1 día","10 días desde la compra","10 días desde que recibe el producto","No tiene derecho"], correcta: 2, explicacion: "El plazo cuenta desde que lo recibe. \"Desde la compra\" tienta, pero la página oficial dice desde la recepción." },
    { q: "Si el cliente recibe el lunes y se arrepiente el miércoles, ¿le corresponde la devolución?", opciones: ["Sí: está dentro de los 10 días","No, ya lo usó","No, las compras online no tienen arrepentimiento","Solo si paga una multa"], correcta: 0, explicacion: "Está en plazo. \"No tienen arrepentimiento\" tienta, pero la ley lo establece." },
    { q: "Si vendés un producto nuevo, ¿cuánto dura la garantía legal mínima?", opciones: ["1 mes","3 meses","No tiene garantía","6 meses"], correcta: 3, explicacion: "Para nuevos son 6 meses. 3 meses tienta, pero ese es para usados." },
    { q: "Si vendés un producto usado, ¿cuánto dura la garantía legal mínima?", opciones: ["6 meses","3 meses","Ninguna","1 semana"], correcta: 1, explicacion: "Para usados son 3 meses. \"Ninguna\" tienta por ser usado, pero la ley la da igual." },
    { q: "Si querés ofrecer una garantía de 1 mes para un producto nuevo, ¿podés?", opciones: ["Sí, la elegís vos","Sí, si lo aclarás","No: podés ofrecer más que la legal, nunca menos","Sí, si es barato"], correcta: 2, explicacion: "La garantía legal es el mínimo. \"Si lo aclarás\" tienta, pero no se puede dar menos." },
    { q: "Si querés que el cliente sepa cómo devolver, ¿qué hacés?", opciones: ["Publicás tu política de cambios y devoluciones por escrito","Lo explicás solo si pregunta","No lo decís para que no devuelvan","Lo escondés"], correcta: 0, explicacion: "La política clara genera confianza. Esconderla tienta para que no devuelvan, pero el derecho existe igual." },
    { q: "Si querés mandar promociones a tus clientes, ¿qué hacés antes?", opciones: ["Los sumás a un grupo sin preguntar","Les vendés los datos a otro","Publicás sus teléfonos","Les pedís permiso"], correcta: 3, explicacion: "Los datos se usan para lo que te autorizaron. Sumarlos sin preguntar tienta por rápido, pero no corresponde." },
    { q: "Si querés mostrar en redes los pedidos listos, ¿qué cuidás?", opciones: ["Nada","Tapar las etiquetas con nombres y direcciones","Que se lea bien la dirección","Mostrar también los teléfonos"], correcta: 1, explicacion: "Las etiquetas exponen datos. \"Nada\" tienta porque la foto se ve linda, pero expone a tus clientes." },
  ],
},
{
  id: "medir",
  icono: "📈",
  titulo: "Medir y mejorar",
  nivel: "Avanzado",
  objetivos: [
    "Calcular visitas, consultas, ventas y conversión",
    "Calcular el ticket promedio y la recompra",
    "Probar un cambio por vez y medir si funcionó",
  ],
  lecciones: [
    { titulo: "Los números de tu tienda", html: `
      <p class="idea">Con pocos números sabés qué funciona: cuánta gente mira, cuánta pregunta, cuánta compra y cuánto gasta cada una.</p>
      <pre><code>Un mes de Lucía:
Visitas a sus publicaciones:  400
Consultas:                     20
Ventas:                         8
Plata vendida:            240.000

Conversión (ventas / visitas):     8 / 400 × 100 = 2%
Consultas que terminan en venta:   8 / 20 × 100  = 40%
Ticket promedio:                   240.000 / 8   = 30.000</code></pre>
      <table>
        <tr><th>Si...</th><th>Probablemente</th></tr>
        <tr><td>Muchas visitas y pocas consultas</td><td>Las fotos, el título o el precio no convencen</td></tr>
        <tr><td>Muchas consultas y pocas ventas</td><td>Las respuestas, el envío o los medios de pago traban</td></tr>
        <tr><td>Pocas visitas</td><td>Hay que difundir más o mejorar el título para que te encuentren</td></tr>
      </table>
      <p><strong>Las plataformas muestran estos números:</strong> visitas y ventas suelen estar en el panel de vendedor.</p>
      <p>Por ejemplo, con 40% de consultas que terminan en venta, Lucía responde bien: su problema es que pocos consultan, así que conviene mejorar las fotos.</p>` },
    { titulo: "Ticket promedio y recompra", html: `
      <p class="idea">Vender más no es solo conseguir clientes nuevos. Que cada cliente compre un poco más (<strong>ticket promedio</strong>) y que vuelva (<strong>recompra</strong>) suele ser más fácil y más barato.</p>
      <table>
        <tr><th>Para subir el ticket promedio</th><th>Ejemplo</th></tr>
        <tr><td>Combos</td><td>3 velas por un precio menor que 3 sueltas</td></tr>
        <tr><td>Envío gratis desde un monto</td><td>Desde $ 36.000</td></tr>
        <tr><td>Sugerir un complemento</td><td>"¿Querés sumar fósforos largos o una caja de regalo?"</td></tr>
      </table>
      <pre><code>Recompra:
Clientes del trimestre:                 30
Clientes que compraron más de una vez:   9
Tasa de recompra: 9 / 30 × 100 = 30%

Para que vuelvan:
- Una tarjeta de agradecimiento en el paquete
- Avisar novedades (a quien te dio permiso)
- Un beneficio en la segunda compra</code></pre>
      <p>Por ejemplo, si la tasa de recompra de Lucía sube de 30% a 40%, vende más sin conseguir ningún cliente nuevo.</p>` },
    { titulo: "Probar un cambio por vez", html: `
      <p class="idea">Para mejorar, cambiá <strong>una sola cosa por vez</strong>, durante un tiempo fijo, y compará los números antes y después. Si cambiás todo junto, no sabés qué funcionó.</p>
      <pre><code>Prueba de Lucía:
Cambio:  nueva foto principal con fondo blanco
Tiempo:  2 semanas antes y 2 semanas después

                Antes   Después
Visitas          200      210
Consultas          8       15
Ventas             4        7

Consultas / visitas: 4% → 7,1%
→ la foto nueva ayuda: queda.</code></pre>
      <table>
        <tr><th>Cosas para probar, de a una</th></tr>
        <tr><td>La foto principal</td></tr>
        <tr><td>El título</td></tr>
        <tr><td>El precio o el envío gratis desde un monto</td></tr>
        <tr><td>El horario en que publicás en redes</td></tr>
      </table>
      <p><strong>Con pocas ventas, las diferencias chicas pueden ser casualidad:</strong> mirá tendencias de varias semanas antes de sacar conclusiones. El curso "Estadística sin miedo" de este sitio explica por qué.</p>
      <p>Por ejemplo, si Lucía cambiara la foto, el título y el precio la misma semana y subieran las ventas, no sabría cuál de los tres cambios funcionó.</p>` },
  ],
  practica: [
    "Anotá las visitas, consultas, ventas y plata vendida de un mes y calculá la conversión, las consultas que terminan en venta y el ticket promedio.",
    "Calculá tu tasa de recompra de los últimos 3 meses y anotá una acción para subirla.",
    "Elegí un cambio, probalo 2 semanas y anotá los números de antes y después en una tabla.",
  ],
  recursos: [
    { t: "Defensa del Consumidor: portal oficial", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "Defensa del Consumidor: leyes y resoluciones", url: "https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor/leyes-proteccion-consumidor" },
  ],
  quiz: [
    { q: "Si tuviste 400 visitas y 8 ventas, ¿cuál es la conversión?", opciones: ["8%","50%","2%","0,02%"], correcta: 2, explicacion: "8 / 400 × 100 = 2. El 8% tienta porque son 8 ventas, pero hay que dividir." },
    { q: "Si tuviste 20 consultas y 8 ventas, ¿qué porcentaje de consultas terminó en venta?", opciones: ["40%","8%","20%","160%"], correcta: 0, explicacion: "8 / 20 × 100 = 40. El 160% tienta si dividís al revés." },
    { q: "Si vendiste $ 240.000 en 8 ventas, ¿cuál es el ticket promedio?", opciones: ["$ 240.000","$ 3.000","$ 1.920.000","$ 30.000"], correcta: 3, explicacion: "240.000 / 8 = 30.000. $ 3.000 tienta por un cero de menos." },
    { q: "Si tenés muchas visitas y pocas consultas, ¿qué revisás?", opciones: ["Tus respuestas","Las fotos, el título o el precio","El envío solamente","Nada"], correcta: 1, explicacion: "Si casi nadie consulta, la publicación no convence. Tus respuestas tientan, pero todavía nadie preguntó." },
    { q: "Si tenés muchas consultas y pocas ventas, ¿qué revisás?", opciones: ["La foto principal solamente","Nada","Las respuestas, el envío o los medios de pago","Subir más publicaciones"], correcta: 2, explicacion: "La gente se interesa, pero algo traba la compra. La foto tienta, pero ya llevó a la consulta." },
    { q: "Si querés que cada cliente gaste un poco más, ¿qué podés ofrecer?", opciones: ["Combos, envío gratis desde un monto o un complemento","Subir todos los precios sin avisar","Esconder los precios","Nada"], correcta: 0, explicacion: "Esas ofertas suben el ticket. Subir precios sin avisar tienta, pero genera desconfianza." },
    { q: "Si de 30 clientes, 9 compraron más de una vez, ¿cuál es la recompra?", opciones: ["9%","39%","3%","30%"], correcta: 3, explicacion: "9 / 30 × 100 = 30. El 9% tienta porque son 9 clientes." },
    { q: "Si la recompra sube de 30% a 40%, ¿qué pasa?", opciones: ["Vendés menos","Vendés más sin conseguir clientes nuevos","No cambia nada","Perdés clientes"], correcta: 1, explicacion: "Los clientes que vuelven suman ventas. \"No cambia\" tienta, pero son más compras de la misma gente." },
    { q: "Si querés mejorar, ¿cuántos cambios hacés a la vez?", opciones: ["Todos juntos","Ninguno","Uno solo, para saber si funcionó","Uno distinto cada día"], correcta: 2, explicacion: "Uno por vez muestra qué sirvió. Todos juntos tienta por rápido, pero no sabés cuál funcionó." },
    { q: "Si con la foto nueva las consultas por visita pasan de 4% a 7,1%, ¿qué concluís?", opciones: ["Que la foto nueva ayuda y conviene dejarla","Que no cambió nada","Que hay que volver a la vieja","Que es casualidad seguro"], correcta: 0, explicacion: "La mejora es clara. \"Casualidad seguro\" tienta, pero es una diferencia grande." },
    { q: "Si tenés pocas ventas y ves una diferencia chica, ¿qué tenés en cuenta?", opciones: ["Que es una prueba definitiva","Que hay que cambiar todo ya","Nada","Que puede ser casualidad: mirá tendencias de varias semanas"], correcta: 3, explicacion: "Con pocos datos, el azar pesa. \"Prueba definitiva\" tienta por el número, pero puede no repetirse." },
    { q: "Si querés ver tus visitas y ventas en un marketplace, ¿dónde las buscás?", opciones: ["Las adivinás","En el panel de vendedor de la plataforma","En redes de otros","No se pueden ver"], correcta: 1, explicacion: "Las plataformas las muestran. Adivinarlas tienta, pero el panel da el dato real." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu tienda en marcha",
  nivel: "Avanzado",
  objetivos: [
    "Lanzar tu canal de venta con 5 publicaciones completas",
    "Escribir tus políticas de cobro, envío y devolución",
    "Evaluar tu tienda con una rúbrica",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es <strong>tu tienda en marcha</strong>: un canal elegido, 5 publicaciones completas y tus políticas escritas, listas para recibir la primera venta.</p>
      <table>
        <tr><th>Parte</th><th>Módulo</th></tr>
        <tr><td>Canal elegido y cuánto te queda por venta</td><td>Dónde vender por internet</td></tr>
        <tr><td>5 publicaciones con título, fotos y descripción</td><td>Una publicación que vende</td></tr>
        <tr><td>Medios de cobro y registro de pedidos</td><td>Cobrar sin sustos</td></tr>
        <tr><td>Formas de entrega, empaque y costo de envío</td><td>Envíos y entregas</td></tr>
        <tr><td>Respuestas tipo, política de devoluciones y cuidado de datos</td><td>Atención y derechos</td></tr>
        <tr><td>Tabla de números del primer mes</td><td>Medir y mejorar</td></tr>
      </table>
      <pre><code>Políticas de la tienda (ejemplo):
Cobro:      transferencia ($ 12.000) o link de pago ($ 12.600).
            Despachamos con el pago acreditado.
Envíos:     retiro gratis los sábados; moto en la ciudad;
            correo a todo el país. Preparamos en 48 h.
Devolución: 10 días desde que recibís para arrepentirte.
Garantía:   6 meses por fallas de fabricación.
Datos:      usamos tus datos solo para tu pedido.</code></pre>
      <p>Por ejemplo, con las políticas escritas, Lucía responde las dudas con un mensaje y no improvisa en cada venta.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu tienda.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Publicaciones</td><td>5 con título claro, 3 fotos o más y descripción completa</td><td>Faltan partes</td><td>Sin publicaciones completas</td></tr>
        <tr><td>Precio y cobro</td><td>Precio final claro, medios con sus costos y pago confirmado antes de entregar</td><td>Falta algo</td><td>Entrega sin confirmar el pago</td></tr>
        <tr><td>Envíos</td><td>Formas, costos y plazos que puede cumplir, y empaque seguro</td><td>Falta uno</td><td>Sin información de envío</td></tr>
        <tr><td>Atención</td><td>Respuestas tipo y responde en el día</td><td>Solo una</td><td>No hay</td></tr>
        <tr><td>Medición</td><td>Tabla de visitas, consultas, ventas y ticket</td><td>Incompleta</td><td>No hay</td></tr>
        <tr><td>Derechos del consumidor</td><td>Arrepentimiento de 10 días, garantía legal y datos cuidados</td><td>—</td><td>Niega el arrepentimiento, da menos garantía o expone datos</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → lista para vender
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarla
Regla: si "Derechos del consumidor" tiene 0, la tienda no está lista,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, una tienda muy linda que dice "no se aceptan devoluciones" en compras online saca 0 en derechos: el arrepentimiento es un derecho del cliente.</p>` },
    { titulo: "Seguir creciendo", html: `
      <p class="idea">Con la tienda en marcha, el crecimiento viene de mejorar de a poco: mejores fotos, más productos que se venden juntos y clientes que vuelven.</p>
      <table>
        <tr><th>Cuando...</th><th>Podés...</th></tr>
        <tr><td>Vendés seguido por un canal</td><td>Sumar un segundo canal</td></tr>
        <tr><td>Tenés muchas consultas repetidas</td><td>Sumar preguntas frecuentes a las publicaciones</td></tr>
        <tr><td>Muchos clientes vuelven</td><td>Armar una lista de novedades (con permiso)</td></tr>
        <tr><td>No das abasto</td><td>Revisar tus precios y tiempos antes de aceptar más pedidos</td></tr>
      </table>
      <pre><code>Otros cursos del sitio para seguir:
- "Costos y precios: cuánto cobrar"
- "Números de un pequeño negocio"
- "Monotributo, facturación e impuestos para independientes"
- "Seguridad digital y estafas"</code></pre>
      <p><strong>Revisá tus números una vez por mes:</strong> la tabla del módulo "Medir y mejorar" te dice dónde poner el esfuerzo.</p>
      <p>Por ejemplo, cuando Lucía vende 30 velas por mes por redes, suma un marketplace; con los números de los dos canales, decide dónde invertir más tiempo.</p>` },
  ],
  practica: [
    "Armá tu tienda con las 6 partes del encargo y publicá las 5 publicaciones. Anotá la fecha de lanzamiento.",
    "Evaluá tu tienda con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Después de un mes, completá la tabla de números y anotá un cambio para probar el mes siguiente.",
  ],
  recursos: [
    { t: "Defensa del Consumidor: conocé tus derechos (para saber qué tenés que cumplir)", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor/conoce-tus-derechos" },
    { t: "Defensa del Consumidor: leyes y resoluciones", url: "https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor/leyes-proteccion-consumidor" },
    { t: "Defensa del Consumidor: portal oficial", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si armás tu tienda final, ¿qué tiene que incluir?", opciones: ["Solo una foto linda","Solo el logo","Canal, 5 publicaciones, cobros, envíos, políticas y números","Solo el precio"], correcta: 2, explicacion: "La tienda junta todo el curso. La foto tienta por visual, pero sin políticas no está lista." },
    { q: "Si tus publicaciones tienen una sola foto y sin descripción, ¿cuánto sacás en \"Publicaciones\"?", opciones: ["1 punto: faltan partes","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "Hay publicaciones, pero incompletas. 0 tienta, pero ese es cuando no hay ninguna completa." },
    { q: "Si entregás sin confirmar que el pago se acreditó, ¿cuánto sacás en \"Precio y cobro\"?", opciones: ["2 puntos","1 punto","No se evalúa","0 puntos"], correcta: 3, explicacion: "Es el error que permite estafas. Sacar 1 tienta si lo demás está bien, pero la rúbrica lo marca como 0." },
    { q: "Si tu tienda dice \"no se aceptan devoluciones\" en compras online, ¿está lista?", opciones: ["Sí, si lo aclarás","No: \"Derechos del consumidor\" tiene 0 y eso no se compensa","Sí, si el producto es barato","Depende del cliente"], correcta: 1, explicacion: "El arrepentimiento es un derecho. \"Si lo aclarás\" tienta, pero no se puede negar por escrito." },
    { q: "Si tu tienda saca 9, ¿qué hacés?", opciones: ["La cerrás","Cambiás la rúbrica","Mejorás lo que sacó 0 o 1","La dejás así para siempre"], correcta: 2, explicacion: "De 7 a 10 se mejora lo flojo. Cerrarla tienta si te frustra, pero está casi lista." },
    { q: "Si querés responder dudas sin improvisar, ¿qué tenés listo?", opciones: ["Tus políticas de cobro, envío y devolución escritas","Nada","Solo tu número de cuenta","Un audio largo"], correcta: 0, explicacion: "Las políticas responden casi todo. \"Nada\" tienta para ser flexible, pero improvisás en cada venta." },
    { q: "Si vendés seguido por un canal, ¿qué podés hacer?", opciones: ["Cerrar el que funciona","Sumar cinco canales a la vez","Nada","Sumar un segundo canal"], correcta: 3, explicacion: "Crecer de a uno es más manejable. Cinco a la vez tienta por ambición, pero se descuidan." },
    { q: "Si no das abasto con los pedidos, ¿qué revisás antes de aceptar más?", opciones: ["Nada, aceptás todos","Tus precios y tus tiempos","Bajás los precios","Dejás de responder"], correcta: 1, explicacion: "Si no das abasto, quizás tu precio es bajo o tus tiempos no alcanzan. Aceptar todos tienta, pero no vas a cumplir." },
    { q: "Si querés saber dónde poner el esfuerzo, ¿qué revisás cada mes?", opciones: ["Solo cuántos seguidores tenés","Nada","La tabla de visitas, consultas, ventas y ticket","Lo que hace la competencia nada más"], correcta: 2, explicacion: "Tus números dicen dónde está la traba. Los seguidores tientan, pero no son ventas." },
    { q: "Si tenés muchas consultas repetidas, ¿qué podés sumar?", opciones: ["Preguntas frecuentes en las publicaciones","Un aviso de \"no pregunten\"","Nada","Más fotos borrosas"], correcta: 0, explicacion: "Responder antes ahorra tiempo. \"No pregunten\" tienta, pero ahuyenta clientes." },
    { q: "Si querés mandar novedades a clientes que vuelven, ¿qué hacés?", opciones: ["Los sumás a todos sin preguntar","Les mandás 10 mensajes por día","Pasás la lista a otros","Armás una lista con su permiso"], correcta: 3, explicacion: "El permiso es necesario. Sumarlos sin preguntar tienta por rápido, pero no corresponde." },
    { q: "Si querés calcular bien cuánto cobrar, ¿qué curso del sitio te ayuda?", opciones: ["\"Huerta en casa o en el balcón\"","\"Costos y precios: cuánto cobrar\"","\"Git y GitHub desde cero\"","Ninguno"], correcta: 1, explicacion: "Ese curso trata precios. Los otros tientan porque están en el sitio, pero son de otros temas." },
  ],
},
];
