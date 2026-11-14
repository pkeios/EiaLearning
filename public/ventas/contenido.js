// Temario del curso "Vender sin ser pesado". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ventas y node tools/metodologia.js ventas
window.TEMARIO = [
{
  id: "empezar",
  icono: "🤝",
  titulo: "Empezar: vender es ayudar a decidir",
  nivel: "Básico",
  objetivos: [
    "Distinguir la venta que ayuda de la venta que presiona",
    "Reconocer los lugares donde se vende: mostrador, a domicilio, por redes y entre empresas",
    "Aplicar tres reglas éticas: no mentir, no presionar y no vender lo que no sirve",
  ],
  lecciones: [
    { titulo: "Qué es vender", html: `
      <p class="idea">Vender bien es ayudar a una persona a decidir si lo que ofrecés le sirve. Si le sirve, se lo llevás fácil; si no, se lo decís. Eso es lo que hace que vuelva.</p>
      <table>
        <tr><th>Venta pesada</th><th>Venta que ayuda</th></tr>
        <tr><td>Habla todo el tiempo del producto</td><td>Pregunta qué necesita la persona</td></tr>
        <tr><td>Presiona: "Es ahora o nunca"</td><td>Da información para decidir</td></tr>
        <tr><td>Vende lo más caro</td><td>Vende lo que sirve</td></tr>
        <tr><td>Desaparece después de cobrar</td><td>Hace seguimiento y vuelve a vender</td></tr>
      </table>
      <p>A esta forma de vender, preguntando y aconsejando, se la llama <strong>venta consultiva</strong>: el vendedor actúa como un consultor que ayuda a elegir.</p>
      <p><strong>Por qué conviene:</strong> conseguir un cliente nuevo cuesta mucho más que hacer que vuelva uno contento. Y un cliente contento te recomienda.</p>
      <p>Por ejemplo, el verdulero que te dice "Hoy el tomate no está bueno, llevá estos de mañana" pierde una venta hoy, pero te gana como cliente por años.</p>` },
    { titulo: "Dónde se vende", html: `
      <p class="idea">Se vende en todos lados, y en cada lugar cambia el ritmo, pero no la idea: entender qué necesita la persona y mostrarle si lo tuyo le sirve.</p>
      <table>
        <tr><th>Dónde</th><th>Cómo es</th><th>Clave</th></tr>
        <tr><td>Mostrador (un local)</td><td>El cliente viene a vos</td><td>Atender rápido y preguntar</td></tr>
        <tr><td>A domicilio o por catálogo</td><td>Vas vos al cliente</td><td>Confianza y cumplir lo prometido</td></tr>
        <tr><td>Por redes y WhatsApp</td><td>Por escrito, con fotos</td><td>Responder rápido y completo</td></tr>
        <tr><td>Entre empresas</td><td>Ventas más largas, con varias personas que deciden</td><td>Paciencia y seguimiento</td></tr>
      </table>
      <p>Un <strong>emprendimiento</strong> chico suele vender en varios lugares a la vez: una feria el sábado, pedidos por WhatsApp en la semana y algún cliente fijo que compra por mayor.</p>
      <p><strong>Lo que tienen en común:</strong> en todos los casos, el cliente compra cuando siente que entendiste lo que necesita y confía en vos.</p>
      <p>Por ejemplo, quien vende tortas puede tener el mismo producto en una feria, en Instagram y en una cafetería del barrio: en cada lugar cambia cómo lo muestra, no lo que ofrece.</p>` },
    { titulo: "Tres reglas éticas", html: `
      <p class="idea">Vender sin ser pesado tiene tres reglas que no se negocian: no mentir, no presionar y no vender lo que no sirve. Además de ser lo correcto, en Argentina la ley protege al consumidor.</p>
      <table>
        <tr><th>Regla</th><th>Qué no hacer</th><th>Qué hacer</th></tr>
        <tr><td>No mentir</td><td>"Es original" (cuando no lo es), "Dura toda la vida"</td><td>Decir lo que es y lo que no es</td></tr>
        <tr><td>No presionar</td><td>"Quedan dos" (cuando hay veinte), "Solo hoy" (cuando no es cierto)</td><td>Dar tiempo y datos para decidir</td></tr>
        <tr><td>No vender lo que no sirve</td><td>Vender el modelo caro a quien necesita el básico</td><td>Recomendar lo que le conviene</td></tr>
      </table>
      <p><strong>La ley acompaña:</strong> la Ley 24.240 de Defensa del Consumidor obliga a dar información clara sobre precio, características y condiciones. Una promoción falsa o un precio oculto pueden terminar en un reclamo formal.</p>
      <p><strong>Precio claro:</strong> decí el precio final, con lo que incluye y lo que no (envío, instalación, cuotas con o sin interés).</p>
      <p>Por ejemplo, "Son $ 30.000 en efectivo; con tarjeta, 3 cuotas de $ 11.000" es claro. "Son tres cuotitas" y que después aparezca el interés genera desconfianza y reclamos.</p>` },
  ],
  practica: [
    "Recordá una compra donde te vendieron bien y otra donde te presionaron. Anotá en una tabla qué hizo cada vendedor según la lección.",
    "Anotá 3 lugares donde podrías vender algo que sepas hacer o tengas (ropa usada, comida, un servicio) y qué cambiaría en cada uno.",
    "Escribí el precio de 3 productos como lo dirías a un cliente: precio final, qué incluye y formas de pago. Revisá que no falte ningún dato y anotá cuál corregiste.",
  ],
  recursos: [
    { t: "Derecho fácil: Defensa del consumidor (ley simple)", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "HubSpot: blog de ventas", url: "https://blog.hubspot.es/sales" },
  ],
  quiz: [
    { q: "Tu cliente quiere un producto que no le sirve para lo que lo va a usar. ¿Qué hacés?", opciones: ["Se lo vendés igual, es su decisión","Le vendés el más caro","Le decís que no le sirve y le recomendás lo que sí","No decís nada"], correcta: 2, explicacion: "Vender lo que sirve hace que vuelva. Vendérselo igual tienta porque es una venta segura, pero vuelve a reclamar o no vuelve más." },
    { q: "¿Qué es la venta consultiva?", opciones: ["Vender preguntando y aconsejando para ayudar a elegir","Vender por teléfono","Vender solo a empresas","Vender con descuentos"], correcta: 0, explicacion: "El vendedor actúa como consultor. Pensar que es por teléfono tienta por la palabra \"consulta\", pero se trata de cómo vendés, no del canal." },
    { q: "Si el verdulero te dice que hoy el tomate no está bueno, ¿qué gana?", opciones: ["Nada, perdió plata","Que compres más caro","Que no vuelvas","Tu confianza: perdió una venta hoy, pero vas a volver"], correcta: 3, explicacion: "La honestidad hace clientes fijos. Pensar que perdió plata tienta, pero solo mira la venta de hoy." },
    { q: "Querés conseguir más ventas. ¿Qué suele costar menos?", opciones: ["Conseguir clientes nuevos todo el tiempo","Que vuelva un cliente contento","Bajar todos los precios","Hacer más publicidad sin cambiar nada"], correcta: 1, explicacion: "Un cliente contento vuelve y recomienda. Los clientes nuevos tientan porque se ven, pero cuestan mucho más." },
    { q: "Vendés tortas en una feria y por Instagram. ¿Qué cambia entre un lugar y otro?", opciones: ["El producto","La calidad","Cómo lo mostrás, no lo que ofrecés","Nada en absoluto"], correcta: 2, explicacion: "La idea de vender es la misma; el formato cambia. Pensar que no cambia nada tienta, pero en redes dependés de fotos y respuestas escritas." },
    { q: "Vendés entre empresas. ¿Qué es lo más importante?", opciones: ["Paciencia y seguimiento: son ventas más largas con varias personas que deciden","Cerrar en la primera reunión","Bajar el precio de entrada","Hablar solo con el dueño"], correcta: 0, explicacion: "Entre empresas decide más de una persona. Cerrar en la primera tienta para no perder tiempo, pero presionar ahí suele espantar." },
    { q: "Tenés 20 unidades y querés decir \"Quedan dos\" para apurar al cliente. ¿Qué pensás?", opciones: ["Que es una técnica normal","Que funciona y está bien","Que no se va a enterar","Que es presionar con una mentira: no se hace"], correcta: 3, explicacion: "Presionar con datos falsos rompe la confianza. Que funciona tienta, pero cuando se entera no vuelve." },
    { q: "Un cliente pregunta si un producto es original y no lo es. ¿Qué decís?", opciones: ["Que sí, total no se nota","La verdad: que no es original, y qué calidad tiene","Que no sabés","Cambiás de tema"], correcta: 1, explicacion: "No mentir es la primera regla. \"No se nota\" tienta, pero además de perder al cliente puede ser un problema legal." },
    { q: "Si decís \"Son tres cuotitas\" y después aparece el interés, ¿qué pasa?", opciones: ["Nada, ya compró","Que compra más","Desconfianza y posibles reclamos","Que te recomienda"], correcta: 2, explicacion: "La ley pide información clara. Pensar que ya compró tienta, pero el reclamo llega después." },
    { q: "Tenés que decir un precio con envío aparte. ¿Cómo lo decís?", opciones: ["Precio final, qué incluye y que el envío es aparte, con su costo","Solo el precio del producto","Que el envío \"es poquito\"","El envío lo decís después del pago"], correcta: 0, explicacion: "El precio claro evita sorpresas. Decir solo el producto tienta porque parece más barato, pero el cliente siente que lo engañaste." },
    { q: "¿Qué ley obliga a dar información clara sobre precio y condiciones?", opciones: ["Ninguna","La ley de tránsito","Solo las reglas de cada comercio","La Ley 24.240 de Defensa del Consumidor"], correcta: 3, explicacion: "La Ley 24.240 protege al consumidor. Pensar que depende de cada comercio tienta, pero la ley vale para todos." },
    { q: "Tu cliente necesita el modelo básico y vos ganás más con el caro. ¿Qué hacés?", opciones: ["Le vendés el caro","Le recomendás el básico, que es el que le conviene","Le ocultás el básico","Le decís que el básico se rompe"], correcta: 1, explicacion: "Vender lo que sirve es una regla ética. El caro tienta por la ganancia, pero ese cliente no vuelve y no te recomienda." },
  ],
},
{
  id: "producto",
  icono: "📦",
  titulo: "Conocer lo que vendés y a quién",
  nivel: "Básico",
  objetivos: [
    "Conocer tu producto o servicio: qué es, para qué sirve y qué no hace",
    "Traducir características en beneficios para el cliente",
    "Escribir tu propuesta de valor y describir a tu cliente ideal",
  ],
  lecciones: [
    { titulo: "Conocer el producto", html: `
      <p class="idea">No podés aconsejar sobre lo que no conocés. Antes de vender, sabé qué es, para qué sirve, qué no hace, cuánto cuesta y en qué se diferencia de otros.</p>
      <table>
        <tr><th>Pregunta</th><th>Ejemplo: mochila escolar</th></tr>
        <tr><td>¿Qué es?</td><td>Mochila de 25 litros, tela impermeable</td></tr>
        <tr><td>¿Para qué sirve?</td><td>Útiles y una notebook de hasta 15 pulgadas</td></tr>
        <tr><td>¿Qué no hace?</td><td>No tiene rueditas; no aguanta lluvia fuerte por horas</td></tr>
        <tr><td>¿Cuánto cuesta y cómo se paga?</td><td>$ 25.000; efectivo, transferencia o tarjeta</td></tr>
        <tr><td>¿En qué se diferencia?</td><td>Garantía de 6 meses en costuras y cierres</td></tr>
      </table>
      <p><strong>Lo que no hace es tan importante como lo que hace:</strong> decirlo de entrada te da credibilidad y evita reclamos.</p>
      <p><strong>Si no sabés, averiguá:</strong> "No sé si entra una notebook de 17 pulgadas; dejame medirla" es mejor que "Sí, seguro entra".</p>
      <p>Por ejemplo, armá una ficha como la de la tabla para cada producto que vendas más: en un minuto respondés cualquier pregunta.</p>` },
    { titulo: "Características y beneficios", html: `
      <p class="idea">Una <strong>característica</strong> es lo que el producto tiene. Un <strong>beneficio</strong> es lo que eso le resuelve al cliente. La gente compra beneficios.</p>
      <table>
        <tr><th>Característica</th><th>Beneficio</th></tr>
        <tr><td>Tela impermeable</td><td>Los cuadernos no se mojan si te agarra la lluvia</td></tr>
        <tr><td>Batería de 5.000 mAh</td><td>El celular te dura todo el día sin cargar</td></tr>
        <tr><td>Pintura lavable</td><td>Si los chicos rayan la pared, se limpia con un trapo</td></tr>
        <tr><td>Envío en 24 horas</td><td>Lo tenés mañana para el cumpleaños</td></tr>
      </table>
      <p><strong>El truco del "o sea que":</strong> después de cada característica, completá "…o sea que…" y aparece el beneficio.</p>
      <pre><code>"Tiene tela impermeable, o sea que los cuadernos no se mojan."
"Tiene envío en 24 horas, o sea que lo tenés para el cumpleaños."</code></pre>
      <p><strong>El beneficio depende de la persona:</strong> la misma pintura lavable es "se limpia fácil" para una familia con chicos y "dura más" para el dueño de un local.</p>
      <p>Por ejemplo, decir "Tiene 128 GB" no le dice nada a alguien que no sabe de celulares. "Te entran unos miles de fotos y videos sin que se llene" sí.</p>` },
    { titulo: "Propuesta de valor y cliente ideal", video: {"id":"PLNe9Uy9QCY","t":"Cómo crear una propuesta de valor · HubSpot Español (6:12)"}, html: `
      <p class="idea">La <strong>propuesta de valor</strong> es una oración que dice para quién es lo que vendés, qué problema resuelve y por qué elegirte. Si la tenés clara, todo lo demás es más fácil.</p>
      <pre><code>Para [quién] que [problema o deseo],
ofrezco [producto o servicio] que [beneficio principal],
a diferencia de [otras opciones], [lo que te distingue].

Ejemplo:
Para familias del barrio que no tienen tiempo de cocinar,
ofrezco viandas caseras que llegan calientes al mediodía,
a diferencia de la rotisería, con menú distinto cada día
y opción sin sal.</code></pre>
      <p>El <strong>cliente ideal</strong> es la persona a la que mejor le sirve lo tuyo. Describirlo ayuda a saber dónde encontrarlo y cómo hablarle.</p>
      <table>
        <tr><th>Pregunta</th><th>Ejemplo (viandas)</th></tr>
        <tr><td>¿Quién es?</td><td>Familias con padres que trabajan; personas mayores que viven solas</td></tr>
        <tr><td>¿Qué le preocupa?</td><td>Comer sano sin tiempo para cocinar</td></tr>
        <tr><td>¿Dónde está?</td><td>En el barrio, en grupos de WhatsApp de la escuela</td></tr>
      </table>
      <p>Por ejemplo, "Viandas para todos" es difícil de vender. "Viandas sin sal para personas mayores del barrio" encuentra rápido a quién le sirve.</p>` },
  ],
  practica: [
    "Armá la ficha de la tabla (qué es, para qué sirve, qué no hace, precio, diferencia) para un producto o servicio que vendas o podrías vender. Anotá si te faltó algún dato.",
    "Escribí 5 características de ese producto y pasalas a beneficios con el truco del \"o sea que\". Anotá las 5 frases.",
    "Escribí tu propuesta de valor con el modelo de la lección y describí a tu cliente ideal con las 3 preguntas. Leésela a alguien y anotá si entendió qué vendés y para quién.",
  ],
  recursos: [
    { t: "HubSpot: blog de ventas", url: "https://blog.hubspot.es/sales" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Un cliente pregunta si en la mochila entra una notebook de 17 pulgadas y no sabés. ¿Qué hacés?", opciones: ["\"Sí, seguro entra\"","\"Creo que sí\"","\"No sé, dejame medirla\" y la medís","\"Probala en tu casa\""], correcta: 2, explicacion: "Averiguar evita prometer lo que no es. \"Seguro entra\" tienta para no perder la venta, pero si no entra vuelve a reclamar." },
    { q: "¿Por qué conviene decir lo que tu producto no hace?", opciones: ["Te da credibilidad y evita reclamos","No conviene, espanta al cliente","Para vender más barato","Porque lo pide el cliente siempre"], correcta: 0, explicacion: "Decirlo de entrada genera confianza. Que espanta tienta como miedo, pero el cliente se entera igual después." },
    { q: "\"Tela impermeable\" es…", opciones: ["Un beneficio","Una propuesta de valor","Un precio","Una característica"], correcta: 3, explicacion: "Es lo que el producto tiene. El beneficio tienta porque suena bien, pero el beneficio es lo que le resuelve al cliente." },
    { q: "Si querés decir el beneficio de \"envío en 24 horas\", ¿qué decís?", opciones: ["\"Envío en 24 horas\"","\"Lo tenés mañana para el cumpleaños\"","\"Envío rápido\"","\"Envío con seguimiento\""], correcta: 1, explicacion: "El beneficio dice qué le resuelve. \"Envío rápido\" tienta por corto, pero sigue siendo una característica." },
    { q: "Si un cliente que no sabe de celulares escucha \"Tiene 128 GB\", ¿qué le decís mejor?", opciones: ["\"Tiene 128 GB de almacenamiento\"","\"Es mucha memoria\"","\"Te entran unos miles de fotos y videos sin que se llene\"","\"Es el mejor\""], correcta: 2, explicacion: "El beneficio en palabras comunes se entiende. \"Es mucha memoria\" tienta, pero no le dice qué puede hacer." },
    { q: "Tenés una lista de características. ¿Qué truco usás para pasarlas a beneficios?", opciones: ["Agregar \"…o sea que…\" después de cada una","Repetirlas más fuerte","Ponerlas en mayúsculas","Agregar el precio"], correcta: 0, explicacion: "El \"o sea que\" obliga a decir qué le resuelve. Repetirlas tienta, pero no cambia nada." },
    { q: "Si vendés pintura lavable a una familia con chicos y a un local, ¿cambia el beneficio?", opciones: ["No, es el mismo para todos","Solo cambia el precio","Solo cambia el color","Sí: \"se limpia fácil\" para la familia, \"dura más\" para el local"], correcta: 3, explicacion: "El beneficio depende de la persona. Que es el mismo tienta por simple, pero cada uno compra por un motivo distinto." },
    { q: "¿Qué dice una propuesta de valor?", opciones: ["El precio y nada más","Para quién es, qué problema resuelve y por qué elegirte","La historia del emprendimiento","La lista completa de productos"], correcta: 1, explicacion: "Es una oración que resume por qué comprarte. La lista de productos tienta por completa, pero no dice por qué elegirte." },
    { q: "Tu propuesta dice \"Viandas para todos\". ¿Qué le falta?", opciones: ["Más productos","Un precio más bajo","Un cliente concreto y un problema: por ejemplo, viandas sin sal para personas mayores","Nada, cuanto más amplio mejor"], correcta: 2, explicacion: "Lo concreto encuentra a quién le sirve. Lo amplio tienta para no dejar a nadie afuera, pero no le habla a nadie." },
    { q: "¿Qué es el cliente ideal?", opciones: ["La persona a la que mejor le sirve lo que vendés","El que más paga","El que nunca reclama","Cualquier persona"], correcta: 0, explicacion: "Es a quien mejor le resolvés el problema. El que más paga tienta, pero no siempre es al que mejor le sirve." },
    { q: "Querés encontrar a tu cliente ideal para viandas. ¿Qué te preguntás?", opciones: ["Cuánto gana","Qué edad tiene y nada más","Qué equipo de fútbol tiene","Quién es, qué le preocupa y dónde está"], correcta: 3, explicacion: "Las tres preguntas te dicen cómo hablarle y dónde buscarlo. La edad sola tienta por fácil, pero no dice qué necesita." },
    { q: "Armaste una ficha de producto. ¿Para qué te sirve?", opciones: ["Para no tener que hablar con el cliente","Para responder cualquier pregunta en un minuto","Para subir el precio","Para nada, el cliente no la ve"], correcta: 1, explicacion: "La ficha te prepara. Pensar que no sirve porque el cliente no la ve tienta, pero la usás vos al responder." },
  ],
},
{
  id: "conversacion",
  icono: "💬",
  titulo: "La conversación de venta",
  nivel: "Intermedio",
  objetivos: [
    "Abrir una conversación de venta sin presionar",
    "Preguntar para descubrir la necesidad antes de ofrecer",
    "Presentar 2 o 3 opciones con sus beneficios y dejar que la persona elija",
  ],
  lecciones: [
    { titulo: "Abrir sin presionar", html: `
      <p class="idea">Los primeros segundos deciden si la persona se relaja o se pone a la defensiva. Saludá, dejá espacio y mostrá que estás para ayudar, no para empujar.</p>
      <table>
        <tr><th>Apertura que espanta</th><th>Apertura que invita</th></tr>
        <tr><td>"¿Qué le vendo?"</td><td>"¡Hola! Avisame si te puedo ayudar en algo."</td></tr>
        <tr><td>Seguir a la persona por todo el local</td><td>Saludar y quedarte cerca, sin encima</td></tr>
        <tr><td>"Este está en oferta, llevalo"</td><td>"¿Buscás algo en especial o estás mirando?"</td></tr>
      </table>
      <p><strong>Si dice "Solo estoy mirando":</strong> respetalo. "¡Dale! Cualquier cosa estoy acá." Muchas ventas empiezan después, cuando la persona vuelve con una pregunta.</p>
      <p><strong>Por chat:</strong> la apertura es tu primera respuesta. Saludá por el nombre y respondé lo que preguntó antes de ofrecer otra cosa.</p>
      <p>Por ejemplo, en una feria, un "Hola, son todos hechos a mano, preguntame lo que quieras" invita a acercarse sin sentir que lo van a enganchar.</p>` },
    { titulo: "Preguntar antes de ofrecer", html: `
      <p class="idea">El error más común es ofrecer antes de entender. Dos o tres preguntas bien hechas te dicen qué mostrar y te ahorran mostrar todo el local.</p>
      <table>
        <tr><th>Qué querés saber</th><th>Pregunta</th></tr>
        <tr><td>Para qué lo quiere</td><td>"¿Para qué lo vas a usar?"</td></tr>
        <tr><td>Para quién es</td><td>"¿Es para vos o para regalar?"</td></tr>
        <tr><td>Qué tuvo antes</td><td>"¿Qué usabas hasta ahora? ¿Qué no te gustaba?"</td></tr>
        <tr><td>Cuánto quiere gastar</td><td>"¿Tenés un presupuesto pensado?"</td></tr>
      </table>
      <p><strong>Preguntar el presupuesto no es de mala educación:</strong> si se hace con naturalidad, evita mostrar cosas que no puede pagar y que se sienta incómodo.</p>
      <p><strong>Escuchá la respuesta entera:</strong> lo que el cliente dice que no le gustaba de lo anterior es oro: te dice qué tenés que resolver.</p>
      <pre><code>Cliente: Quiero una zapatilla para correr.
Vos:     ¿Corrés seguido? ¿En calle o en tierra?
Cliente: Tres veces por semana, en la calle. Las que tengo me lastiman.
Vos:     ¿Dónde te lastiman? (→ ahí está lo que tenés que resolver)</code></pre>
      <p>Por ejemplo, saber que es "para regalar" cambia todo: importa el cambio de talle, el envoltorio y que el ticket no muestre el precio.</p>` },
    { titulo: "Presentar opciones", html: `
      <p class="idea">Con lo que te dijo, mostrá 2 o 3 opciones, no 10. Para cada una, el beneficio que le importa a esa persona. Y dejá que elija.</p>
      <table>
        <tr><th>Opción</th><th>Cómo presentarla</th></tr>
        <tr><td>Básica</td><td>"Esta cumple lo que necesitás y es la más económica."</td></tr>
        <tr><td>Recomendada</td><td>"Esta es la que te recomiendo por lo que me contaste: tiene X, o sea que…"</td></tr>
        <tr><td>Superior (si tiene sentido)</td><td>"Si querés que dure más, esta tiene Y, pero cuesta más."</td></tr>
      </table>
      <p><strong>¿Por qué no más de 3?</strong> Con demasiadas opciones la gente se confunde y muchas veces se va sin elegir ninguna.</p>
      <p><strong>Que lo pruebe:</strong> si se puede, que lo toque, lo use o lo pruebe. Una <strong>demostración</strong> convence más que cualquier explicación.</p>
      <p><strong>Usá sus palabras:</strong> si dijo "las que tengo me lastiman", decí "esta tiene más acolchado justo en el talón, que es donde te lastimaban".</p>
      <p>Por ejemplo, en un servicio (un corte de pelo, un arreglo) las opciones pueden ser niveles: "arreglo básico", "arreglo con repuesto original" y "arreglo con garantía extendida".</p>` },
  ],
  practica: [
    "Escribí 3 aperturas que invitan para un lugar donde podrías vender (local, feria o chat). Probá una con alguien y anotá cómo reaccionó.",
    "Escribí 4 preguntas para descubrir la necesidad de un cliente de tu producto y practicalas con alguien que haga de cliente. Anotá qué descubriste con cada una.",
    "Prepará 3 opciones (básica, recomendada y superior) de tu producto o servicio con un beneficio cada una. Anotá cuál eligió tu \"cliente\" de práctica y por qué.",
  ],
  recursos: [
    { t: "HubSpot: blog de ventas", url: "https://blog.hubspot.es/sales" },
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
  ],
  quiz: [
    { q: "Entra alguien a tu local. ¿Qué apertura usás?", opciones: ["\"¿Qué le vendo?\"","\"Este está en oferta, llevalo\"","\"¡Hola! Avisame si te puedo ayudar en algo.\"","Lo seguís por todo el local"], correcta: 2, explicacion: "Invitar sin empujar relaja al cliente. La oferta de entrada tienta para enganchar, pero se pone a la defensiva." },
    { q: "Tu cliente dice \"Solo estoy mirando\". ¿Qué hacés?", opciones: ["Lo respetás: \"¡Dale! Cualquier cosa estoy acá.\"","Le mostrás las ofertas igual","Lo seguís de cerca","Te ofendés"], correcta: 0, explicacion: "Respetar el espacio deja la puerta abierta. Mostrar las ofertas igual tienta para no perderlo, pero lo espanta." },
    { q: "Por chat te preguntan el precio de una campera. ¿Qué hacés primero?", opciones: ["Ofrecés otros productos antes","Preguntás su presupuesto sin responder","Mandás el catálogo completo","Saludás por el nombre y respondés el precio"], correcta: 3, explicacion: "Primero lo que preguntó. Ofrecer otros productos tienta para vender más, pero no responde y molesta." },
    { q: "Un cliente pide \"una zapatilla\". ¿Qué hacés antes de mostrar?", opciones: ["Le mostrás todas las que hay","Preguntás para qué la va a usar y cómo","Le mostrás la más cara","Le mostrás la más vendida"], correcta: 1, explicacion: "Preguntar te dice qué mostrar. Mostrar la más vendida tienta por segura, pero puede no servirle." },
    { q: "¿Está mal preguntar el presupuesto?", opciones: ["Sí, es de mala educación","Solo con clientes ricos","No: con naturalidad, evita mostrar lo que no puede pagar","Solo al final"], correcta: 2, explicacion: "Preguntarlo con naturalidad ayuda a los dos. Que es de mala educación tienta como reparo, pero mostrarle lo que no puede pagar es peor." },
    { q: "Tu cliente dice \"Las que tengo me lastiman\". ¿Qué hacés con eso?", opciones: ["Preguntás dónde y buscás una opción que lo resuelva","Lo ignorás","Le decís que es normal","Le mostrás cualquier modelo"], correcta: 0, explicacion: "Lo que no le gustaba te dice qué resolver. Decir que es normal tienta, pero pierdes la pista principal." },
    { q: "Si te dicen que es para regalar, ¿qué cambia?", opciones: ["Nada","Solo el precio","Que hay que venderle más caro","Importan el cambio de talle, el envoltorio y que el ticket no muestre el precio"], correcta: 3, explicacion: "Para regalar cambian las prioridades. Pensar que no cambia nada tienta, pero el cliente se va contento si lo pensaste." },
    { q: "Ya entendiste qué necesita. ¿Cuántas opciones mostrás?", opciones: ["Todas las que hay","2 o 3","Una sola, la más cara","10, para que elija bien"], correcta: 1, explicacion: "Con muchas opciones la gente se confunde y se va. Todas tienta para que tenga dónde elegir, pero termina sin elegir." },
    { q: "¿Cómo presentás la opción que recomendás?", opciones: ["Diciendo que es la más cara","Diciendo que es la que más vendés","Con el beneficio que le importa por lo que te contó","Sin explicar"], correcta: 2, explicacion: "Conectar con lo que dijo convence. \"La que más vendo\" tienta como argumento, pero no habla de lo que necesita." },
    { q: "Si el cliente puede probar el producto, ¿qué hacés?", opciones: ["Le ofrecés probarlo: la demostración convence más que la explicación","No lo dejás, se puede romper","Le explicás más","Le das un folleto"], correcta: 0, explicacion: "Probarlo convence. Explicar más tienta, pero tocar y usar dice más que mil palabras." },
    { q: "El cliente dijo \"las que tengo me lastiman\". ¿Cómo presentás la zapatilla?", opciones: ["\"Tiene tecnología de amortiguación avanzada.\"","\"Es la más linda.\"","\"Es importada.\"","\"Tiene más acolchado justo en el talón, que es donde te lastimaban.\""], correcta: 3, explicacion: "Usar sus palabras muestra que lo escuchaste. La tecnología tienta por técnica, pero no habla de su problema." },
    { q: "Vendés un servicio de arreglos. ¿Cómo armás tus opciones?", opciones: ["Una sola opción, la mejor","Por niveles: básico, con repuesto original y con garantía extendida","Todas las combinaciones posibles","Según el humor del día"], correcta: 1, explicacion: "Los niveles ordenan la decisión. Una sola tienta por simple, pero el cliente siente que no tiene opción." },
  ],
},
{
  id: "objeciones",
  icono: "🧱",
  titulo: "Objeciones: \"Está caro\" y \"Lo voy a pensar\"",
  nivel: "Intermedio",
  objetivos: [
    "Responder objeciones con 4 pasos: escuchar, preguntar, responder y confirmar",
    "Hablar del precio mostrando el valor, sin desesperarte por bajar",
    "Respetar el \"no\" y dejar la puerta abierta",
  ],
  lecciones: [
    { titulo: "Un método para las objeciones", video: {"id":"l_Epr57t7wk","t":"Cómo manejar las objeciones en las ventas · HubSpot Español (3:41)"}, html: `
      <p class="idea">Una <strong>objeción</strong> es una duda o un freno del cliente: "Está caro", "Lo voy a pensar", "No sé si me sirve". No es un no: es una pregunta que todavía no se respondió.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th><th>Ejemplo</th></tr>
        <tr><td>1. Escuchar</td><td>Lo dejás terminar sin defenderte</td><td>(silencio)</td></tr>
        <tr><td>2. Preguntar</td><td>Descubrís qué hay detrás</td><td>"¿Caro comparado con qué?"</td></tr>
        <tr><td>3. Responder</td><td>Con datos y beneficios, sin discutir</td><td>"Esta dura el doble porque…"</td></tr>
        <tr><td>4. Confirmar</td><td>Verificás si quedó resuelto</td><td>"¿Eso responde tu duda?"</td></tr>
      </table>
      <p><strong>Las objeciones más comunes y qué esconden:</strong></p>
      <ul>
        <li><strong>"Está caro":</strong> no ve el valor, o de verdad no le alcanza.</li>
        <li><strong>"Lo voy a pensar":</strong> le falta un dato, desconfía o tiene que consultarlo con alguien.</li>
        <li><strong>"No sé si me sirve":</strong> no le mostraste el beneficio que le importa.</li>
      </ul>
      <p>Por ejemplo, ante "Lo voy a pensar", un "¡Claro! ¿Hay algo que te haga dudar que te pueda aclarar ahora?" muchas veces descubre que faltaba un dato del envío.</p>` },
    { titulo: "Hablar del precio", html: `
      <p class="idea">Cuando te dicen "Está caro", no salgas corriendo a bajar el precio. Primero averiguá con qué lo compara y mostrá qué incluye. El <strong>valor</strong> es lo que el cliente recibe por lo que paga.</p>
      <table>
        <tr><th>Respuesta que pierde</th><th>Respuesta que muestra valor</th></tr>
        <tr><td>"Bueno, te lo dejo a menos."</td><td>"¿Caro comparado con qué? Así te explico la diferencia."</td></tr>
        <tr><td>"Es lo que sale."</td><td>"Incluye la instalación y 6 meses de garantía; la otra opción no."</td></tr>
        <tr><td>"En otro lado está más caro."</td><td>"Si te sirve, tengo una opción más económica que cumple lo básico."</td></tr>
      </table>
      <p><strong>Partir el precio en el tiempo</strong> ayuda a verlo distinto, siempre con números reales:</p>
      <pre><code>Zapatillas de $ 90.000 que duran 2 años (unos 730 días):
90.000 ÷ 730 = unos $ 123 por día
Zapatillas de $ 45.000 que duran 6 meses (unos 180 días):
45.000 ÷ 180 = $ 250 por día</code></pre>
      <p><strong>Si de verdad no le alcanza,</strong> ofrecé lo que sí podés: una opción más simple, cuotas o reservar con una seña. Nunca lo hagas sentir mal por eso.</p>
      <p>Por ejemplo, si bajás el precio apenas te dicen "Está caro", le enseñás al cliente que siempre conviene regatear y le restás valor a lo que hacés.</p>` },
    { titulo: "Respetar el no", html: `
      <p class="idea">No todas las conversaciones terminan en venta, y está bien. Un "no" respetado deja la puerta abierta; un "no" presionado la cierra para siempre.</p>
      <table>
        <tr><th>Cuando dicen que no</th><th>Qué hacer</th></tr>
        <tr><td>"No, gracias."</td><td>"¡Gracias a vos! Cualquier cosa estoy acá."</td></tr>
        <tr><td>"Ahora no me alcanza."</td><td>Ofrecer avisarle si hay una promo, con su permiso</td></tr>
        <tr><td>"Lo voy a pensar" (después de aclarar dudas)</td><td>"Dale. ¿Te parece si te escribo el jueves para ver qué decidiste?"</td></tr>
      </table>
      <p><strong>Lo que nunca se hace:</strong> insistir tres veces, hacer sentir culpa ("Pero te expliqué todo…"), inventar urgencias o mandar mensajes todos los días.</p>
      <p><strong>Pedí permiso para el seguimiento:</strong> "¿Te puedo escribir el jueves?" Si dice que sí, escribile ese día; si dice que no, no le escribas.</p>
      <p><strong>Aprendé del no:</strong> anotá por qué no compró. Si diez personas dicen que el envío es caro, el problema no es tu forma de vender, es el envío.</p>
      <p>Por ejemplo, la persona a la que trataste bien cuando dijo que no es la que vuelve dos meses después, o la que te recomienda a una amiga.</p>` },
  ],
  practica: [
    "Escribí tu respuesta a \"Está caro\", \"Lo voy a pensar\" y \"No sé si me sirve\" con los 4 pasos. Practicalas con alguien y anotá cuál te costó más.",
    "Calculá el precio por día de dos productos que conozcas (uno caro que dura más y uno barato que dura menos). Anotá las cuentas y cuál conviene.",
    "Durante una semana (o en una práctica), anotá en una tabla cada \"no\" que recibiste y el motivo. Contá cuál motivo se repite más.",
  ],
  recursos: [
    { t: "HubSpot: blog de ventas", url: "https://blog.hubspot.es/sales" },
    { t: "Derecho fácil: Defensa del consumidor (ley simple)", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
  ],
  quiz: [
    { q: "Tu cliente dice \"Está caro\". ¿Qué es eso?", opciones: ["Un no definitivo","Una falta de respeto","Una objeción: una duda que todavía no se respondió","Una señal de que hay que bajar el precio"], correcta: 2, explicacion: "Una objeción es una pregunta escondida. Tomarla como un no tienta, pero muchas veces se resuelve con un dato." },
    { q: "Si te dicen \"Está caro\", ¿qué preguntás?", opciones: ["\"¿Caro comparado con qué?\"","\"¿Cuánto querés pagar?\" de entrada","\"¿Y vos cuánto ganás?\"","Nada, bajás el precio"], correcta: 0, explicacion: "Saber con qué compara te dice qué explicar. Bajar el precio tienta para cerrar, pero quizás solo faltaba mostrar qué incluye." },
    { q: "Ya respondiste una objeción. ¿Cuál es el último paso?", opciones: ["Cobrar enseguida","Pasar a otra objeción","Nada","Confirmar: \"¿Eso responde tu duda?\""], correcta: 3, explicacion: "Confirmar verifica que quedó resuelto. Cobrar enseguida tienta, pero si la duda sigue, no compra." },
    { q: "Si el cliente dice \"Lo voy a pensar\", ¿qué suele esconder?", opciones: ["Que no le gustó nada","Que le falta un dato, desconfía o tiene que consultarlo con alguien","Que es un mal cliente","Que va a volver seguro"], correcta: 1, explicacion: "Hay que descubrir cuál de las tres. Pensar que no le gustó tienta, pero muchas veces es solo un dato que falta." },
    { q: "Si el cliente dice \"Lo voy a pensar\", ¿qué le decís?", opciones: ["\"Es ahora o nunca\"","\"Bueno, chau\"","\"¡Claro! ¿Hay algo que te haga dudar que te pueda aclarar ahora?\"","\"Pero si ya te expliqué todo\""], correcta: 2, explicacion: "La pregunta descubre la duda sin presionar. \"Es ahora o nunca\" tienta para cerrar, pero es presión y espanta." },
    { q: "¿Qué es el valor de un producto?", opciones: ["Lo que el cliente recibe por lo que paga","El precio","Lo que te costó a vos","Lo que cobra la competencia"], correcta: 0, explicacion: "El valor es lo que recibe. Confundirlo con el precio tienta, pero dos productos con el mismo precio pueden valer muy distinto." },
    { q: "Unas zapatillas de $ 90.000 duran unos 730 días. ¿Cuánto cuestan por día, más o menos?", opciones: ["$ 900","$ 250","$ 12","Unos $ 123"], correcta: 3, explicacion: "90.000 ÷ 730 ≈ 123. $ 250 tienta porque aparece en la lección, pero es el de las zapatillas baratas." },
    { q: "Te dicen \"Está caro\" y ya bajaste el precio enseguida. ¿Qué enseñaste?", opciones: ["Que sos generoso","Que con vos siempre conviene regatear, y le restaste valor","Nada","Que tu producto es mejor"], correcta: 1, explicacion: "Bajar de una le resta valor a lo que hacés. Que sos generoso tienta como lectura, pero el próximo te va a pedir lo mismo." },
    { q: "Si al cliente de verdad no le alcanza, ¿qué le ofrecés?", opciones: ["Nada, que vuelva cuando tenga","Que pida prestado","Una opción más simple, cuotas o reservar con una seña","El mismo producto más caro en cuotas sin decir el interés"], correcta: 2, explicacion: "Ofrecer lo que sí podés deja la puerta abierta. Esconder el interés tienta para cerrar, pero es engañoso y va contra la ley." },
    { q: "Tu cliente dijo que no y vos insistís por tercera vez. ¿Qué pasa?", opciones: ["Cerrás la puerta para siempre","Lo convencés","Le mostrás interés","Nada"], correcta: 0, explicacion: "Insistir hace sentir presión. Que muestra interés tienta como lectura, pero el cliente siente que no lo escuchaste." },
    { q: "Querés hacer seguimiento a alguien que dijo \"Lo voy a pensar\". ¿Qué hacés?", opciones: ["Le escribís todos los días","Lo llamás esa misma noche","No le preguntás y le escribís cuando quieras","Le pedís permiso: \"¿Te puedo escribir el jueves?\""], correcta: 3, explicacion: "Con permiso, el seguimiento es bienvenido. Escribir todos los días tienta para que no se olvide, pero lo vas a perder." },
    { q: "Diez personas no compraron porque el envío es caro. ¿Qué concluís?", opciones: ["Que tenés que insistir más","Que el problema es el envío, no tu forma de vender","Que esos clientes no sirven","Que es mala suerte"], correcta: 1, explicacion: "Anotar los motivos del no muestra patrones. Insistir más tienta, pero no arregla el envío." },
  ],
},
{
  id: "cierre",
  icono: "✅",
  titulo: "Cerrar, seguir y medir",
  nivel: "Intermedio",
  objetivos: [
    "Cerrar una venta con una pregunta simple, sin presionar",
    "Ofrecer un complemento que sirva y llevar una lista de seguimiento de clientes",
    "Calcular la tasa de conversión y el ticket promedio de tus ventas",
  ],
  lecciones: [
    { titulo: "Cerrar sin presionar", html: `
      <p class="idea">Muchas ventas se pierden porque nadie pregunta. Cuando el cliente ya resolvió sus dudas, hacé una pregunta simple que lo invite a decidir.</p>
      <table>
        <tr><th>Señales de que está listo</th><th>Pregunta de cierre</th></tr>
        <tr><td>Pregunta por formas de pago o envío</td><td>"¿Te lo llevás en efectivo o con tarjeta?"</td></tr>
        <tr><td>Vuelve a mirar o tocar el mismo producto</td><td>"¿Querés que te lo prepare?"</td></tr>
        <tr><td>Pregunta por el cambio o la garantía</td><td>"Tiene 30 días de cambio. ¿Te lo envuelvo?"</td></tr>
        <tr><td>Por chat: "¿Cuánto tarda en llegar?"</td><td>"Llega el jueves. ¿Te paso el link de pago?"</td></tr>
      </table>
      <p><strong>Después de la pregunta, callate:</strong> el silencio le da tiempo para decidir. Si hablás enseguida, lo interrumpís.</p>
      <p><strong>Si dice que sí, cumplí rápido:</strong> cobrá, envolvé o mandá el link sin vueltas. Un cierre lento puede hacer que se arrepienta.</p>
      <p><strong>Si duda,</strong> volvé a las objeciones: preguntá qué le falta, sin insistir.</p>
      <p>Por ejemplo, después de 10 minutos de charla sobre una bici, "¿La querés en negro o en azul?" ayuda a decidir más que "Bueno… ¿y?".</p>` },
    { titulo: "Complementos y seguimiento", video: {"id":"iEkOtlFZFWg","t":"Etiquetas · Curso de WhatsApp Business · LearnFree en Español (2:04)"}, html: `
      <p class="idea">Una vez que compró, podés ofrecer un <strong>complemento</strong>: algo que mejora lo que ya eligió. Y después, el <strong>seguimiento</strong> hace que vuelva.</p>
      <table>
        <tr><th>Compró</th><th>Complemento que sirve</th><th>Complemento que molesta</th></tr>
        <tr><td>Un celular</td><td>Funda y vidrio templado</td><td>Un seguro caro que no pidió</td></tr>
        <tr><td>Pintura</td><td>Rodillo y cinta de enmascarar</td><td>Otro color "por las dudas"</td></tr>
        <tr><td>Una torta</td><td>Velitas y una tarjeta</td><td>Una segunda torta</td></tr>
      </table>
      <p>Un complemento se ofrece <strong>una vez</strong>, y si dice que no, se respeta.</p>
      <p><strong>La lista de seguimiento:</strong> una planilla simple con tus clientes y consultas. Es la versión casera de un <strong>CRM</strong> (un programa para ordenar clientes y ventas).</p>
      <pre><code>Nombre  | Contacto     | Qué consultó   | Estado        | Próximo paso
Marta   | 11 5555-0001 | Torta 20 pers. | Compró        | Escribir en 1 año (cumple)
Diego   | 11 5555-0002 | Viandas        | Lo va a pensar| Escribir el jueves (con permiso)
Lucía   | 11 5555-0003 | Torta + mesa   | No le alcanzó | Avisar si hay promo (pidió)</code></pre>
      <p>En WhatsApp Business podés hacer algo parecido con <strong>etiquetas</strong> en los chats: "Nuevo", "Pagó", "Para entregar".</p>
      <p>Por ejemplo, escribirle a Marta a los 3 días ("¿Qué tal salió la torta en el cumple?") hace que se acuerde de vos para el próximo.</p>` },
    { titulo: "Medir tus ventas", html: `
      <p class="idea">Dos números simples te dicen cómo van tus ventas: la <strong>tasa de conversión</strong> (de cada 100 consultas, cuántas compran) y el <strong>ticket promedio</strong> (cuánto gasta cada cliente en promedio).</p>
      <pre><code>Tasa de conversión = ventas ÷ consultas × 100
Ticket promedio    = total vendido ÷ cantidad de ventas

Ejemplo de una semana:
Consultas: 40   Ventas: 6   Total vendido: $ 180.000
Conversión:  6 ÷ 40 × 100 = 15 %
Ticket:      180.000 ÷ 6  = $ 30.000</code></pre>
      <table>
        <tr><th>Si querés vender más, podés…</th><th>Qué número mueve</th></tr>
        <tr><td>Conseguir más consultas (más publicaciones, más recomendaciones)</td><td>Consultas</td></tr>
        <tr><td>Responder más rápido y mejor</td><td>Conversión</td></tr>
        <tr><td>Ofrecer un complemento que sirva</td><td>Ticket promedio</td></tr>
      </table>
      <p><strong>Medí antes y después de cambiar algo:</strong> si empezás a responder en menos de 15 minutos, fijate si la conversión sube.</p>
      <p>Por ejemplo, si la semana siguiente tenés 40 consultas y 10 ventas, la conversión pasó de 15 % a 25 %: algo de lo que cambiaste funcionó.</p>` },
  ],
  practica: [
    "Escribí 4 preguntas de cierre para tu producto, una para cada señal de la tabla. Probalas con alguien y anotá cuál sonó más natural.",
    "Armá tu lista de seguimiento en una planilla con las 5 columnas de la lección y cargá al menos 5 clientes o consultas (reales o inventados).",
    "Anotá durante una semana tus consultas, tus ventas y el total vendido (o inventá datos realistas). Calculá la tasa de conversión y el ticket promedio.",
  ],
  recursos: [
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
    { t: "HubSpot: blog de ventas", url: "https://blog.hubspot.es/sales" },
  ],
  quiz: [
    { q: "Tu cliente pregunta \"¿Aceptan tarjeta?\". ¿Qué señal es?", opciones: ["Que no tiene plata","Que quiere irse","Que está listo: hacés una pregunta de cierre","Ninguna"], correcta: 2, explicacion: "Preguntar por el pago es señal de compra. Pensar que no tiene plata tienta, pero está pensando cómo pagar." },
    { q: "Después de 10 minutos de charla sobre una bici, ¿qué pregunta ayuda a decidir?", opciones: ["\"¿La querés en negro o en azul?\"","\"Bueno… ¿y?\"","\"¿Me la vas a comprar o no?\"","No preguntás nada"], correcta: 0, explicacion: "Una pregunta simple invita a decidir. \"¿Me la vas a comprar o no?\" tienta por directa, pero presiona." },
    { q: "Hiciste la pregunta de cierre. ¿Qué hacés después?", opciones: ["Seguís hablando de las ventajas","Le contás otra opción","Le decís que se apure","Te callás y le das tiempo para decidir"], correcta: 3, explicacion: "El silencio deja decidir. Seguir hablando tienta para convencer más, pero lo interrumpís." },
    { q: "El cliente dijo que sí. ¿Qué hacés?", opciones: ["Le mostrás más productos durante 10 minutos","Cobrás o mandás el link enseguida, sin vueltas","Le contás tu historia","Le pedís que vuelva mañana"], correcta: 1, explicacion: "Un cierre ágil evita arrepentimientos. Mostrar más tienta para aprovechar, pero lo cansás." },
    { q: "Tu cliente compró un celular. ¿Qué complemento ofrecés?", opciones: ["Un seguro caro que no pidió, varias veces","Otro celular","Funda y vidrio templado, una vez","Nada nunca"], correcta: 2, explicacion: "El complemento mejora lo que eligió. El seguro caro tienta por la ganancia, pero si insistís, molesta." },
    { q: "Ofreciste un complemento y dijo que no. ¿Qué hacés?", opciones: ["Lo respetás y seguís con la venta","Insistís dos veces más","Le decís que se va a arrepentir","Se lo agregás igual"], correcta: 0, explicacion: "Se ofrece una vez. Insistir tienta porque puede servirle, pero arruina una venta que ya estaba hecha." },
    { q: "¿Qué es un CRM?", opciones: ["Un tipo de tarjeta","Un impuesto","Una red social","Un programa (o planilla) para ordenar clientes y ventas"], correcta: 3, explicacion: "Es una lista de clientes con su estado. Pensar que es un programa caro tienta, pero una planilla simple cumple la misma función." },
    { q: "Diego dijo \"Lo voy a pensar\" y aceptó que le escribas el jueves. ¿Qué anotás en la lista?", opciones: ["Nada, ya se va a acordar","Estado \"Lo va a pensar\" y próximo paso \"Escribir el jueves\"","Estado \"Perdido\"","Escribirle todos los días"], correcta: 1, explicacion: "La lista te recuerda el próximo paso. No anotar tienta, pero con muchos clientes te olvidás." },
    { q: "Tuviste 40 consultas y 6 ventas. ¿Cuál es tu tasa de conversión?", opciones: ["6 %","40 %","15 %","24 %"], correcta: 2, explicacion: "6 ÷ 40 × 100 = 15. El 6 % tienta porque son 6 ventas, pero hay que dividir por las consultas." },
    { q: "Vendiste $ 180.000 en 6 ventas. ¿Cuál es el ticket promedio?", opciones: ["$ 30.000","$ 180.000","$ 6.000","$ 18.000"], correcta: 0, explicacion: "180.000 ÷ 6 = 30.000. $ 180.000 tienta porque es el total, pero el promedio es por venta." },
    { q: "Si querés subir el ticket promedio, ¿qué hacés?", opciones: ["Bajás todos los precios","Respondés más lento","Publicás menos","Ofrecés un complemento que sirva"], correcta: 3, explicacion: "El complemento suma a cada venta. Bajar precios tienta para vender más, pero baja el ticket." },
    { q: "Empezaste a responder en menos de 15 minutos y la conversión pasó de 15 % a 25 %. ¿Qué concluís?", opciones: ["Que fue suerte","Que responder rápido probablemente ayudó: conviene seguir midiendo","Que hay que volver a responder lento","Nada, los números no dicen nada"], correcta: 1, explicacion: "Medir antes y después muestra qué funciona. Que fue suerte tienta, pero si se sostiene varias semanas, no lo es." },
  ],
},
{
  id: "redes",
  icono: "📱",
  titulo: "Vender por WhatsApp y redes",
  nivel: "Intermedio",
  objetivos: [
    "Armar un perfil comercial claro con fotos, precios y forma de contacto",
    "Publicar con buenas fotos y precio visible, y responder rápido",
    "Contactar clientes con permiso, sin spam y cuidando sus datos personales",
  ],
  lecciones: [
    { titulo: "Un perfil que vende", video: {"id":"QvGhGS_fLI8","t":"Cómo configurar el perfil comercial en Instagram · LearnFree en Español (1:58)"}, html: `
      <p class="idea">Tu perfil es tu vidriera. En pocos segundos tiene que decir qué vendés, dónde, cómo comprar y cómo contactarte.</p>
      <table>
        <tr><th>Parte</th><th>Qué poner</th></tr>
        <tr><td>Nombre</td><td>El del emprendimiento y qué hace: "Dulce Ana · Tortas por encargo"</td></tr>
        <tr><td>Foto de perfil</td><td>El logo o tu mejor producto, que se vea en chiquito</td></tr>
        <tr><td>Descripción</td><td>Qué vendés, zona, horario y cómo pedir</td></tr>
        <tr><td>Contacto</td><td>Enlace a WhatsApp (wa.me/ y tu número)</td></tr>
        <tr><td>Destacados o catálogo</td><td>Precios, envíos, opiniones de clientes</td></tr>
      </table>
      <p>En Instagram conviene pasar a una <strong>cuenta profesional</strong> (o comercial): es gratis y muestra el rubro, un botón de contacto y estadísticas de tus publicaciones.</p>
      <p>En WhatsApp Business, el <strong>catálogo</strong> muestra tus productos con foto, precio y descripción dentro de la app.</p>
      <p>Por ejemplo, una descripción como "Tortas por encargo · Zona Oeste · Pedidos con 48 h · Escribime 👇" responde las tres preguntas que todos hacen antes de escribirte.</p>` },
    { titulo: "Publicar y responder", video: {"id":"NnAVenpcQOs","t":"¿Cómo crear un catálogo digital? · Curso de WhatsApp Business · LearnFree en Español (3:08)"}, html: `
      <p class="idea">En redes, la foto vende y el precio visible ahorra consultas. Y una consulta respondida tarde es, muchas veces, una venta perdida.</p>
      <table>
        <tr><th>Foto que vende</th><th>Foto que no</th></tr>
        <tr><td>Luz natural, de día, cerca de una ventana</td><td>Con flash, de noche, amarillenta</td></tr>
        <tr><td>Fondo liso que no distrae</td><td>La mesa con cosas atrás</td></tr>
        <tr><td>El producto en uso (la torta cortada, la campera puesta)</td><td>Una foto de internet que no es tuya</td></tr>
      </table>
      <p><strong>Precio visible:</strong> "Precio por privado" genera desconfianza y llena tu chat de preguntas. Poné el precio, o al menos "desde $ …".</p>
      <p><strong>Usá fotos tuyas:</strong> copiar fotos de otros es engañar al cliente y puede traerte problemas.</p>
      <p><strong>Responder:</strong> mientras antes, mejor. Si no podés, configurá un mensaje de ausencia y, cuando respondas, hacelo completo: precio, envío, cómo pagar y una pregunta de cierre.</p>
      <p>Por ejemplo, si publicás 3 veces por semana con buena luz y precio a la vista, vas a notar que las consultas llegan con menos preguntas y más ganas de comprar.</p>` },
    { titulo: "Permiso, spam y datos", html: `
      <p class="idea">Vender por mensajes funciona cuando la persona quiere recibirlos. Mandar promociones a quien no las pidió es <strong>spam</strong>: molesta, te bloquean y, en algunos casos, va contra la ley.</p>
      <table>
        <tr><th>Sí</th><th>No</th></tr>
        <tr><td>Escribir a quien te consultó o te dio permiso</td><td>Agregar a desconocidos a un grupo de ventas</td></tr>
        <tr><td>Una lista de difusión de clientes que aceptaron</td><td>Mandar el mismo mensaje a todos tus contactos</td></tr>
        <tr><td>Avisar cómo dejar de recibir mensajes</td><td>Seguir escribiendo a quien te pidió que pares</td></tr>
      </table>
      <p><strong>Registro Nacional No Llame:</strong> en Argentina, las personas pueden anotar su número para no recibir llamadas ni mensajes de promoción de quienes no conocen. Si hacés venta por teléfono a gente que no es tu cliente, tenés que respetarlo.</p>
      <p><strong>Datos personales:</strong> los nombres, teléfonos y direcciones de tus clientes son <strong>datos personales</strong> y están protegidos por la ley. Usalos solo para lo que te dieron, guardalos con cuidado y no los compartas ni los vendas.</p>
      <p>Este resumen ayuda a entender las reglas; si vas a hacer campañas grandes, consultá con la Agencia de Acceso a la Información Pública o un abogado.</p>
      <p>Por ejemplo, "¿Querés que te avise cuando haya tortas de temporada?" y anotar a quien dice que sí arma una lista de clientes que quieren saber de vos.</p>` },
  ],
  practica: [
    "Revisá tu perfil (o armá uno de práctica) con las 5 partes de la tabla. Anotá cuáles tenías y cuáles agregaste.",
    "Sacá 3 fotos de un producto con luz natural y fondo liso, y otras 3 como las sacabas antes. Mostráselas a alguien y anotá cuáles eligió.",
    "Armá una lista de difusión solo con personas que aceptaron recibir novedades. Anotá cuántas son y cómo les pediste permiso.",
  ],
  recursos: [
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
    { t: "Registro Nacional No Llame", url: "https://nollame.aaip.gob.ar/" },
    { t: "AAIP: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Tu perfil dice solo \"Dulce Ana\". ¿Qué le falta?", opciones: ["Más emojis","Una frase motivacional","Qué vende, la zona, cómo pedir y el contacto","Nada, el nombre alcanza"], correcta: 2, explicacion: "El perfil tiene que responder las preguntas de siempre. El nombre solo tienta por limpio, pero nadie sabe qué vendés." },
    { q: "Querés vender por Instagram. ¿Qué tipo de cuenta conviene?", opciones: ["Una cuenta profesional o comercial, que es gratis","Una personal privada","Una cuenta paga obligatoria","Ninguna, solo WhatsApp"], correcta: 0, explicacion: "La cuenta profesional suma contacto y estadísticas. La privada tienta por cuidar la intimidad, pero nadie puede ver tus productos." },
    { q: "¿Para qué sirve el catálogo de WhatsApp Business?", opciones: ["Para mandar mensajes masivos","Para cobrar impuestos","Para bloquear clientes","Para mostrar productos con foto, precio y descripción dentro de la app"], correcta: 3, explicacion: "El catálogo es tu vidriera en WhatsApp. Pensar que es para mensajes masivos tienta, pero eso es otra función." },
    { q: "Tenés que sacar fotos de tus tortas. ¿Qué conviene?", opciones: ["Flash de noche","Luz natural, fondo liso y la torta cortada","Fotos de internet más lindas","La mesa con cosas atrás"], correcta: 1, explicacion: "La luz natural y el producto en uso venden. Fotos de internet tientan porque se ven mejor, pero es engañar al cliente." },
    { q: "Tus publicaciones dicen \"Precio por privado\". ¿Qué pasa?", opciones: ["Da misterio y vende más","Nada","Genera desconfianza y te llena el chat de preguntas","Es obligatorio"], correcta: 2, explicacion: "El precio visible ahorra consultas. El misterio tienta, pero la mayoría prefiere no preguntar y se va." },
    { q: "Si usás fotos de otro emprendimiento para tus productos, ¿qué problema hay?", opciones: ["Engañás al cliente y puede traerte problemas","Ninguno si son lindas","Solo si te descubren","Que pesan mucho"], correcta: 0, explicacion: "La foto tiene que ser de lo que vendés. \"Si son lindas\" tienta, pero el cliente recibe otra cosa." },
    { q: "Te consultan a las 22 y no podés responder hasta mañana. ¿Qué tenés configurado?", opciones: ["Nada","Una respuesta rápida","El catálogo","Un mensaje de ausencia"], correcta: 3, explicacion: "El mensaje de ausencia avisa cuándo respondés. La respuesta rápida tienta, pero la tenés que mandar vos." },
    { q: "Querés avisar una promo. ¿A quién le escribís?", opciones: ["A todos tus contactos","A quienes te consultaron o te dieron permiso","A un grupo de desconocidos","A números de una lista comprada"], correcta: 1, explicacion: "Con permiso, el mensaje es bienvenido. Todos tus contactos tienta por alcance, pero es spam y te bloquean." },
    { q: "Un cliente te pide que dejes de mandarle promociones. ¿Qué hacés?", opciones: ["Le mandás una última","Lo pasás a otra lista","Dejás de mandarle","Le explicás por qué le conviene"], correcta: 2, explicacion: "Respetar el pedido es obligatorio. La última promo tienta, pero lo perdés como cliente." },
    { q: "¿Qué es el Registro Nacional No Llame?", opciones: ["Un registro donde las personas anotan su número para no recibir llamadas ni mensajes de promoción","Una lista de clientes para venderles","Un registro de vendedores","Una app de llamadas gratis"], correcta: 0, explicacion: "Sirve para que no te contacten con promociones. Pensar que es una lista de clientes tienta, pero es lo contrario." },
    { q: "¿Qué son el nombre, el teléfono y la dirección de tus clientes?", opciones: ["Datos públicos que se pueden compartir","Información tuya para vender","Nada importante","Datos personales protegidos por la ley"], correcta: 3, explicacion: "Son datos personales. Compartirlos tienta si alguien te los pide, pero no podés usarlos para otra cosa." },
    { q: "Otro emprendimiento te ofrece comprar tu lista de clientes. ¿Qué hacés?", opciones: ["La vendés, es tuya","No la vendés: son datos personales que te dieron para otra cosa","La vendés si pagan bien","Vendés solo los teléfonos"], correcta: 1, explicacion: "Los datos se usan solo para lo que te dieron. Que es tuya tienta, pero los datos son de tus clientes." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu kit de ventas",
  nivel: "Avanzado",
  objetivos: [
    "Armar un kit de ventas: ficha, propuesta de valor, preguntas, opciones, respuestas a objeciones y cierre",
    "Practicar una venta completa y evaluarla con una rúbrica",
    "Medir una semana de ventas y elegir una mejora",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>kit de ventas</strong> para un producto o servicio real o posible: todo lo que necesitás tener preparado para vender sin improvisar.</p>
      <table>
        <tr><th>Parte del kit</th><th>Usa el módulo</th></tr>
        <tr><td>Ficha del producto y 5 beneficios</td><td>Conocer lo que vendés</td></tr>
        <tr><td>Propuesta de valor y cliente ideal</td><td>Conocer lo que vendés</td></tr>
        <tr><td>Apertura y 4 preguntas</td><td>La conversación de venta</td></tr>
        <tr><td>3 opciones con beneficios</td><td>La conversación de venta</td></tr>
        <tr><td>Respuestas a "Está caro" y "Lo voy a pensar"</td><td>Objeciones</td></tr>
        <tr><td>Preguntas de cierre y un complemento</td><td>Cerrar, seguir y medir</td></tr>
        <tr><td>Respuesta completa por chat y descripción del perfil</td><td>Vender por WhatsApp y redes</td></tr>
      </table>
      <p><strong>Elegí algo concreto:</strong> tortas, ropa usada, clases particulares, arreglos de bicis, uñas, viandas. Si no vendés nada todavía, elegí algo que sabrías hacer.</p>
      <p>Por ejemplo, un kit para "clases de apoyo de matemática" tendría como cliente ideal a familias con chicos de secundaria, opciones de 1, 2 o 4 clases por semana y una respuesta para "Lo voy a pensar" que ofrezca una primera clase de prueba.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Practicá una venta completa con alguien que haga de cliente y pedile que te evalúe.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Apertura</td><td>Invita sin presionar</td><td>Algo de presión</td><td>"¿Qué le vendo?" o lo persigue</td></tr>
        <tr><td>Preguntas</td><td>Descubre la necesidad antes de ofrecer</td><td>Una sola pregunta</td><td>Ofrece sin preguntar</td></tr>
        <tr><td>Opciones</td><td>2 o 3, con el beneficio que le importa</td><td>Opciones sin beneficio</td><td>Una sola o diez</td></tr>
        <tr><td>Objeción</td><td>Escucha, pregunta, responde y confirma</td><td>Responde sin preguntar</td><td>Baja el precio o discute</td></tr>
        <tr><td>Cierre</td><td>Pregunta simple y silencio</td><td>Pregunta con presión</td><td>No pregunta</td></tr>
        <tr><td>Ética</td><td>Precio claro, sin mentir ni presionar</td><td>Algún dato poco claro</td><td>Miente o inventa urgencias</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → practicá lo que sacó 0 o 1
0 a 6   → repasá el módulo de ese criterio
Si "Ética" sacó 0, la venta no aprueba aunque el total sea alto.</code></pre>
      <p>Por ejemplo, si cerraste la venta, pero inventaste que "quedan dos", la rúbrica no aprueba: una venta con mentiras sale cara después.</p>` },
    { titulo: "Medir y mejorar", html: `
      <p class="idea">Un kit se mejora con datos. Durante una semana (real o de práctica), anotá consultas, ventas, total vendido y motivos de los "no". Con eso elegí <strong>una</strong> mejora.</p>
      <pre><code>Semana 1: 30 consultas, 3 ventas, $ 75.000
Conversión: 3 ÷ 30 × 100 = 10 %
Ticket:     75.000 ÷ 3   = $ 25.000
Motivos del no: precio (8), envío caro (12), no respondí a tiempo (5)

Mejora elegida: envío (el motivo que más se repite)
Semana 2: 30 consultas, 6 ventas → conversión 20 %</code></pre>
      <table>
        <tr><th>Si el problema es…</th><th>Probá…</th></tr>
        <tr><td>Pocas consultas</td><td>Publicar más seguido, pedir recomendaciones</td></tr>
        <tr><td>Muchas consultas y pocas ventas</td><td>Responder más rápido y completo, revisar objeciones</td></tr>
        <tr><td>Ventas chicas</td><td>Un complemento que sirva, o una opción superior</td></tr>
      </table>
      <p><strong>Una mejora por vez:</strong> si cambiás cinco cosas juntas, no sabés cuál funcionó.</p>
      <p>Por ejemplo, si el motivo más repetido es "no respondí a tiempo", la mejora más barata es un mensaje de ausencia y respuestas rápidas.</p>` },
  ],
  practica: [
    "Armá tu kit de ventas con las 7 partes de la tabla del encargo. Anotá para qué producto o servicio es.",
    "Practicá una venta completa con alguien que haga de cliente y pedile que te evalúe con la rúbrica. Anotá el puntaje de cada criterio y el total sobre 12.",
    "Volvé a practicar el criterio más bajo y anotá el puntaje antes y después.",
    "Anotá una semana de consultas, ventas y motivos de los \"no\" (reales o de práctica). Calculá conversión y ticket promedio y elegí una sola mejora.",
  ],
  recursos: [
    { t: "HubSpot: blog de ventas", url: "https://blog.hubspot.es/sales" },
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Querés armar tu kit de ventas, pero todavía no vendés nada. ¿Qué hacés?", opciones: ["Esperás a tener un negocio","Lo armás para \"cualquier cosa\"","Elegís algo concreto que sabrías hacer y armás el kit para eso","Copiás el kit de otro"], correcta: 2, explicacion: "Lo concreto se puede practicar. \"Cualquier cosa\" tienta por flexible, pero no podés escribir beneficios ni opciones." },
    { q: "Tu kit es para clases de apoyo. ¿Qué respuesta a \"Lo voy a pensar\" podría servir?", opciones: ["Ofrecer una primera clase de prueba","Decir que hay pocos lugares (cuando no es cierto)","Bajar el precio a la mitad","Insistir tres veces"], correcta: 0, explicacion: "La prueba resuelve la duda sin presionar. Inventar pocos lugares tienta para apurar, pero es mentir." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una técnica de cierre","Un tipo de objeción","Un precio especial","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica te dice qué mejorar. Confundirla con una técnica tienta porque es parte del curso, pero sirve para evaluar." },
    { q: "Si en la práctica ofreciste sin preguntar nada, ¿cuánto sacás en \"Preguntas\"?", opciones: ["2","0","1","No se evalúa"], correcta: 1, explicacion: "Ofrecer sin preguntar es 0. Pensar que cuenta si vendiste tienta, pero sin preguntas podés vender lo que no sirve." },
    { q: "Ante \"Está caro\", bajaste el precio de una. ¿Qué criterio falla?", opciones: ["Apertura","Cierre","Objeción","Ninguno, vendiste"], correcta: 2, explicacion: "Bajar el precio sin preguntar es 0 en objeción. Que vendiste tienta como éxito, pero perdiste valor." },
    { q: "Sacaste 11 sobre 12, pero dijiste \"quedan dos\" cuando había veinte. ¿Aprueba?", opciones: ["No: si Ética saca 0, no aprueba aunque el total sea alto","Sí, 11 es casi perfecto","Sí, si vendiste","Depende del cliente"], correcta: 0, explicacion: "La ética no se compensa con otros puntos. El 11 tienta como aprobado, pero una venta con mentiras sale cara después." },
    { q: "Tuviste 30 consultas y 3 ventas. ¿Cuál es la conversión?", opciones: ["3 %","30 %","33 %","10 %"], correcta: 3, explicacion: "3 ÷ 30 × 100 = 10. El 3 % tienta porque son 3 ventas, pero hay que dividir por las consultas." },
    { q: "Vendiste $ 75.000 en 3 ventas. ¿Cuál es el ticket promedio?", opciones: ["$ 75.000","$ 25.000","$ 7.500","$ 225.000"], correcta: 1, explicacion: "75.000 ÷ 3 = 25.000. $ 75.000 tienta porque es el total, pero el promedio es por venta." },
    { q: "Los motivos del no fueron: precio (8), envío caro (12), no respondí a tiempo (5). ¿Qué mejora elegís primero?", opciones: ["Bajar el precio","Responder más rápido","El envío, que es el motivo que más se repite","Cambiar todo a la vez"], correcta: 2, explicacion: "Empezar por lo más repetido da más resultado. El precio tienta porque es lo que más se nombra en ventas, pero acá aparece menos." },
    { q: "¿Por qué conviene cambiar una sola cosa por vez?", opciones: ["Para saber cuál funcionó","Porque es más fácil","Porque lo pide la ley","No conviene"], correcta: 0, explicacion: "Con una sola mejora, el resultado se puede atribuir. Cambiar todo tienta para mejorar rápido, pero no aprendés qué sirvió." },
    { q: "Tenés muchas consultas y pocas ventas. ¿Qué probás?", opciones: ["Publicar más","Ofrecer complementos","Subir los precios","Responder más rápido y completo, y revisar cómo respondés las objeciones"], correcta: 3, explicacion: "El problema está en la conversación. Publicar más tienta, pero traería más consultas que tampoco compran." },
    { q: "Tus ventas son pocas pero de poco monto. ¿Qué probás?", opciones: ["Bajar más los precios","Un complemento que sirva o una opción superior","Dejar de responder","Comprar seguidores"], correcta: 1, explicacion: "Eso sube el ticket promedio. Bajar precios tienta para vender más, pero baja aún más el monto." },
  ],
},
];
