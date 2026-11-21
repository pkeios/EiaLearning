// Temario del curso "IA para tu negocio o emprendimiento". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ia-pymes y node tools/metodologia.js ia-pymes
window.TEMARIO = [
{
  id: "donde",
  icono: "🔎",
  titulo: "Dónde ayuda la IA en un negocio chico",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué tareas de tu negocio puede acelerar la IA y cuáles no",
    "Elegir una sola tarea para empezar, la que más tiempo te come",
    "Medir el tiempo antes y después para saber si de verdad ayudó",
  ],
  lecciones: [
    { titulo: "Lo que la IA hace bien y lo que no", video: {"id":"EhfnQa2X6G4","t":"Cómo aprovechar la inteligencia artificial en tu negocio · Judit Català (11:12)"}, html: `
      <p class="idea">Una IA de chat (como ChatGPT, Gemini, Claude o Copilot) es muy buena con <strong>texto</strong>: escribir, resumir, ordenar y explicar. Es mala para <strong>saber datos de tu negocio</strong> que no le diste y puede <strong>inventar</strong> con total seguridad.</p>
      <p>En todo el curso acompañamos a <strong>Gabriel</strong>, que tiene una ferretería de barrio en Mendoza con dos empleados. Todos los días contesta las mismas preguntas por WhatsApp, arma presupuestos a mano y no tiene tiempo para las redes.</p>
      <table>
        <tr><th>Ayuda mucho</th><th>Ayuda con cuidado</th><th>No sirve o es riesgoso</th></tr>
        <tr><td>Borradores de textos: publicaciones, mails, descripciones</td><td>Cuentas y fórmulas: siempre se controlan</td><td>Decidir por vos precios, despidos o créditos</td></tr>
        <tr><td>Respuestas tipo para preguntas que se repiten</td><td>Información de leyes o impuestos: se verifica con un profesional</td><td>Datos que no le diste (tu stock, tus precios de hoy)</td></tr>
        <tr><td>Ordenar ideas, listas y procedimientos</td><td>Atención automática a clientes</td><td>Manejar datos personales de clientes sin cuidado</td></tr>
      </table>
      <p><strong>Pensala como un empleado nuevo, rápido y muy entusiasta:</strong> te ahorra el primer borrador, pero no conoce tu negocio y a veces habla de más. Vos revisás y decidís.</p>
      <p>Para aprender a pedirle bien (los "prompts"), está el curso <strong>Prompts desde cero</strong> de este sitio. Acá nos enfocamos en usarla en tu negocio.</p>
      <p>Por ejemplo, Gabriel le preguntó a una IA "¿cuánto cuesta el caño de PVC de 110?". Le respondió un precio con seguridad, pero era inventado: la IA no sabe los precios de su proveedor. Desde ese día le da él los datos.</p>` },
    { titulo: "Encontrar la tarea que más tiempo te come", html: `
      <p class="idea">No empieces por la herramienta más famosa: empezá por <strong>la tarea que más tiempo te come</strong> y que se repite todas las semanas. Ahí la IA ahorra más.</p>
      <pre><code>Registro de una semana (5 minutos por día):
Tarea                                  | Veces | Minutos cada vez
Contestar "¿tienen X?" por WhatsApp    |  60   | 2
Armar presupuestos                     |  15   | 20
Publicar en Instagram                  |   2   | 45
Escribir mails a proveedores           |   8   | 10

Total por semana:
WhatsApp:     60 × 2  = 120 min
Presupuestos: 15 × 20 = 300 min   ← la que más come
Instagram:     2 × 45 =  90 min
Proveedores:   8 × 10 =  80 min</code></pre>
      <table>
        <tr><th>Buena candidata para la IA si...</th><th>Mala candidata si...</th></tr>
        <tr><td>Se repite seguido</td><td>Pasa una vez por año</td></tr>
        <tr><td>Es sobre todo texto</td><td>Es físico (descargar mercadería)</td></tr>
        <tr><td>Un error se nota y se corrige fácil</td><td>Un error cuesta caro (un contrato, un precio a un cliente grande)</td></tr>
      </table>
      <p><strong>Una tarea por vez:</strong> si querés meter IA en todo a la vez, no sabés qué ayudó y te cansás. Elegí una, probala dos semanas, y recién después la siguiente.</p>
      <p>Por ejemplo, Gabriel pensaba que su problema eran las redes. Al anotar una semana vio que los presupuestos le comían 5 horas: empezó por ahí.</p>` },
    { titulo: "Medir antes y después", html: `
      <p class="idea">La única forma de saber si la IA te sirve es <strong>medir</strong>: cuánto tardabas antes, cuánto tardás después y si el resultado es igual de bueno.</p>
      <pre><code>Prueba de dos semanas con los presupuestos:
Antes:    15 presupuestos × 20 min = 300 min
Después:  15 presupuestos × 8 min  = 120 min (borrador con IA + revisión)
Ahorro:   180 min por semana = 3 horas
Errores encontrados al revisar: 2 (un precio viejo, una medida)</code></pre>
      <table>
        <tr><th>Qué medís</th><th>Por qué</th></tr>
        <tr><td>Minutos por tarea</td><td>El ahorro de tiempo es la ganancia principal</td></tr>
        <tr><td>Errores que encontrás al revisar</td><td>Si son muchos, la IA te hace perder tiempo</td></tr>
        <tr><td>Qué dicen los clientes</td><td>Si notan textos fríos o raros, hay que ajustar</td></tr>
        <tr><td>Cuánto pagás por la herramienta</td><td>Para comparar con lo que ahorrás</td></tr>
      </table>
      <p><strong>El tiempo de revisión cuenta:</strong> si la IA escribe en 1 minuto pero corregís durante 25, no ahorraste nada. Medí el total.</p>
      <p><strong>Calcular si conviene pagar:</strong> si ahorrás 3 horas por semana y tu hora vale $8.000 (número de ejemplo), son unas 12 horas por mes: $96.000. Si el plan pago cuesta menos que eso, conviene.</p>
      <p>Por ejemplo, Gabriel midió dos semanas: ahorraba 3 horas por semana en presupuestos, pero encontró 2 errores. Decidió seguir, siempre con una revisión final suya.</p>` },
  ],
  practica: [
    "Anotá durante 5 días hábiles las tareas repetitivas de tu negocio con sus veces y minutos, y calculá el total semanal de cada una.",
    "Elegí la tarea que más tiempo te come y anotá por qué es (o no) buena candidata para la IA según la tabla.",
    "Probá la IA en esa tarea durante 2 semanas y anotá los minutos antes y después, y los errores que encontraste al revisar.",
  ],
  recursos: [
    { t: "Curso de este sitio: Prompts desde cero (cómo pedirle bien a la IA)", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "Google: cursos y herramientas gratis para negocios (Crece con Google)", url: "https://grow.google/intl/es/" },
  ],
  quiz: [
    { q: "Le preguntás a una IA el precio de hoy de un producto de tu proveedor. ¿Qué pasa?", opciones: ["Te da el precio exacto","Llama a tu proveedor","Puede inventar un precio con seguridad: no tiene ese dato","Se niega siempre"], correcta: 2, explicacion: "La IA no sabe datos que no le diste. El precio exacto tienta porque responde muy segura, pero puede ser inventado." },
    { q: "Si necesitás el borrador de una publicación para Instagram, ¿la IA sirve?", opciones: ["Sí: escribir borradores de texto es de lo que mejor hace","No, nunca sirve para textos","Sí, y no hace falta revisarlo","Solo si le pagás"], correcta: 0, explicacion: "Los borradores son su fuerte. \"No hace falta revisarlo\" tienta, pero vos decidís el texto final." },
    { q: "Si querés que la IA decida a quién darle crédito en tu negocio, ¿qué conviene?", opciones: ["Dejar que decida sola","Hacerle caso siempre","Preguntarle dos veces","No dejarle esa decisión: la tomás vos"], correcta: 3, explicacion: "Las decisiones importantes son tuyas. Preguntarle dos veces tienta, pero sigue sin conocer a tus clientes." },
    { q: "Si querés saber qué tarea conviene pasar primero a la IA, ¿qué hacés?", opciones: ["Elegís la herramienta más famosa","Anotás una semana cuánto tiempo te come cada tarea repetitiva","Pasás todo a la vez","Elegís la tarea más rara"], correcta: 1, explicacion: "Medir muestra dónde se ahorra más. La herramienta famosa tienta, pero no dice qué te conviene." },
    { q: "Si una tarea se repite 15 veces por semana y te lleva 20 minutos, ¿cuánto tiempo te come por semana?", opciones: ["35 minutos","20 minutos","300 minutos (5 horas)","150 minutos"], correcta: 2, explicacion: "15 × 20 = 300. 35 tienta si sumás en vez de multiplicar." },
    { q: "Si una tarea pasa una vez por año, ¿es buena candidata para empezar con IA?", opciones: ["No: conviene empezar por lo que se repite seguido","Sí, la mejor","Sí, si es difícil","Da igual"], correcta: 0, explicacion: "El ahorro viene de la repetición. \"Si es difícil\" tienta, pero ahorrás poco." },
    { q: "Si un error en la tarea te puede costar un contrato importante, ¿qué hacés con la IA?", opciones: ["Le das el control total","La usás sin revisar","Le pedís que firme","La usás con mucho cuidado o no la usás para eso"], correcta: 3, explicacion: "Donde un error cuesta caro, la revisión humana es obligatoria. Usarla sin revisar tienta por rápido, pero el riesgo es alto." },
    { q: "Si querés meter IA en todo tu negocio la misma semana, ¿qué pasa?", opciones: ["Ahorrás el máximo","No sabés qué ayudó y te cansás: mejor una tarea por vez","Nada malo","Es lo que recomiendan todos"], correcta: 1, explicacion: "De a una se mide y se aprende. \"Ahorrás el máximo\" tienta, pero sin medir no sabés." },
    { q: "Si la IA escribe en 1 minuto pero corregís durante 25, ¿cuánto ahorraste respecto de los 20 minutos de antes?", opciones: ["19 minutos","25 minutos","Nada: tardás 26 minutos en total","Todo"], correcta: 2, explicacion: "El tiempo de revisión cuenta. 19 tienta si mirás solo el minuto de la IA." },
    { q: "Ahorrás 3 horas por semana y tu hora vale $8.000. ¿Cuánto vale ese ahorro en un mes de unas 4 semanas?", opciones: ["Unos $96.000","$24.000","$8.000","$384.000"], correcta: 0, explicacion: "3 × 4 = 12 horas, por 8.000 = 96.000. $24.000 tienta, pero es una sola semana." },
    { q: "Si después de dos semanas encontrás muchos errores en lo que hace la IA, ¿qué concluís?", opciones: ["Que igual conviene siempre","Que es culpa tuya siempre","Que hay que pagar más","Que en esa tarea te hace perder tiempo: ajustás o la dejás"], correcta: 3, explicacion: "Los errores también son costo. \"Pagar más\" tienta como solución, pero no garantiza menos errores." },
    { q: "¿Cómo conviene pensar a la IA en tu negocio?", opciones: ["Como el dueño","Como un empleado nuevo y rápido: ayuda, pero vos revisás y decidís","Como un experto que nunca se equivoca","Como un adorno"], correcta: 1, explicacion: "Ahorra trabajo, pero no conoce tu negocio. \"Nunca se equivoca\" tienta porque habla segura, pero inventa." },
  ],
},
{
  id: "herramientas",
  icono: "🧰",
  titulo: "Herramientas, costos y privacidad",
  nivel: "Básico",
  objetivos: [
    "Distinguir entre las IA de chat y la IA que ya viene dentro de otras apps",
    "Decidir entre un plan gratis y uno pago con números",
    "Saber qué datos no cargar en una herramienta de IA",
  ],
  lecciones: [
    { titulo: "Dos tipos de herramientas", html: `
      <p class="idea">Hay dos grandes tipos: las <strong>IA de chat</strong>, donde escribís lo que querés, y la <strong>IA que ya viene adentro</strong> de programas que usás (planillas, editores de diseño, el correo). Para empezar alcanza con una de cada.</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplos</th><th>Para qué</th></tr>
        <tr><td>IA de chat</td><td>ChatGPT, Gemini, Claude, Copilot</td><td>Escribir, resumir, ordenar ideas, armar borradores</td></tr>
        <tr><td>IA dentro de otras apps</td><td>Planillas de cálculo, editores de diseño como Canva, correo y documentos</td><td>Hacer lo mismo sin salir del programa donde trabajás</td></tr>
        <tr><td>IA para atender clientes</td><td>Asistentes y respuestas automáticas en apps de mensajería y redes</td><td>Contestar preguntas frecuentes (lo ves en el módulo de atención)</td></tr>
      </table>
      <p>Los nombres, las funciones y los precios <strong>cambian todo el tiempo</strong>. Este curso enseña a decidir, no a usar un botón: antes de pagar, mirá la página oficial de la herramienta.</p>
      <p><strong>Probá dos antes de elegir:</strong> hacé la misma tarea (por ejemplo, el borrador de un presupuesto) en dos IA de chat distintas y compará cuál te dio algo más útil para tu caso.</p>
      <p>Por ejemplo, Gabriel probó el mismo pedido en dos IA de chat: una le armó una tabla clara de presupuesto y la otra un texto largo. Se quedó con la primera para esa tarea.</p>` },
    { titulo: "Gratis o pago: la cuenta", html: `
      <p class="idea">Casi todas las herramientas tienen un <strong>plan gratis</strong> con límites (cuántos pedidos por día, funciones que faltan) y un <strong>plan pago</strong> mensual. Pagar conviene solo si lo que ahorrás vale más de lo que cuesta.</p>
      <pre><code>La cuenta (números de ejemplo):
Plan pago:            $25.000 por mes
Tiempo que ahorrás:   10 horas por mes
Valor de tu hora:     $8.000
Ahorro:               10 × 8.000 = $80.000 por mes
→ Conviene: ahorrás más de lo que pagás.

Si ahorrás 2 horas por mes: 2 × 8.000 = $16.000
→ No conviene: con el plan gratis alcanza.</code></pre>
      <table>
        <tr><th>Antes de pagar, revisá</th><th>Por qué</th></tr>
        <tr><td>En qué moneda se cobra</td><td>Muchas cobran en dólares: el monto en pesos cambia y se suman impuestos</td></tr>
        <tr><td>Si se puede cancelar cuando quieras</td><td>Para no quedar atado a un plan anual</td></tr>
        <tr><td>Qué hace con tus datos</td><td>Lo ves en la próxima lección</td></tr>
      </table>
      <p><strong>Empezá gratis:</strong> usá el plan gratis hasta que el límite te frene de verdad. Recién ahí sabés si te hace falta pagar.</p>
      <p>Los montos son de ejemplo. Por ejemplo, Gabriel usó el plan gratis un mes. Cuando llegaba al límite casi todos los días y ya ahorraba unas 12 horas por mes, hizo la cuenta y pasó al pago.</p>` },
    { titulo: "Qué datos no cargar", video: {"id":"uLiPogQRg2E","t":"Qué datos no compartir con la inteligencia artificial · Movistar España (1:50)"}, html: `
      <p class="idea">Lo que escribís en una IA puede quedar guardado y, en muchas herramientas, usarse para mejorar sus modelos salvo que lo desactives o uses una versión para empresas. Por eso hay datos que <strong>nunca</strong> se cargan.</p>
      <table>
        <tr><th>No cargues</th><th>En su lugar</th></tr>
        <tr><td>Nombres, DNI, teléfonos o direcciones de clientes</td><td>Reemplazalos por "Cliente A", "Cliente B"</td></tr>
        <tr><td>Contraseñas, claves del banco o de la AFIP/ARCA</td><td>Nada: esas no van en ningún lado</td></tr>
        <tr><td>Datos de salud o de deudas de una persona</td><td>Nada, o anonimizados del todo</td></tr>
        <tr><td>Contratos o acuerdos confidenciales completos</td><td>Solo la parte que necesitás, sin nombres</td></tr>
      </table>
      <p><strong>Anonimizar</strong> es sacar o reemplazar los datos que identifican a una persona, para que no se sepa de quién se habla.</p>
      <p><strong>La ley:</strong> en Argentina, los datos personales de tus clientes están protegidos por la Ley 25.326. La Agencia de Acceso a la Información Pública (AAIP) publicó una guía para usar la IA de manera responsable, con recomendaciones de transparencia y cuidado de datos. Ante una duda concreta, consultá con un profesional.</p>
      <p><strong>Revisá la configuración:</strong> muchas IA de chat tienen una opción para que tus conversaciones no se usen para entrenar. Buscala en la configuración de privacidad.</p>
      <p>Por ejemplo, Gabriel iba a pegar la lista de deudores con nombres y teléfonos para que la IA le armara mensajes. En cambio, pidió una plantilla con "[nombre]" y "[monto]" y completó él los datos.</p>` },
  ],
  practica: [
    "Hacé la misma tarea en 2 IA de chat distintas y anotá cuál te dio un resultado más útil y por qué.",
    "Calculá si te conviene un plan pago: anotá el precio, las horas que ahorrarías por mes y el valor de tu hora.",
    "Revisá la configuración de privacidad de la IA que usás y anotá si tus conversaciones se usan para entrenar y cómo se desactiva.",
  ],
  recursos: [
    { t: "AAIP (Argentina): guía para usar la IA de manera responsable (PDF)", url: "https://argentina.gob.ar/sites/default/files/aaip-argentina-guia_para_usar_la_ia_de_manera_responsable.pdf" },
    { t: "Argentina.gob.ar: la guía de la AAIP para usar la IA de manera responsable", url: "https://www.argentina.gob.ar/noticias/guia-de-la-aaip-para-usar-la-inteligencia-artificial-de-manera-responsable" },
    { t: "Curso de este sitio: Prompts desde cero (cómo pedirle bien a la IA)", url: "https://pkeios.github.io/EiaLearning/prompts/" },
  ],
  quiz: [
    { q: "Querés usar IA sin salir de la planilla donde llevás las ventas. ¿Qué tipo de herramienta buscás?", opciones: ["Solo una IA de chat aparte","Un traductor","IA que viene dentro de la planilla","Ninguna, no existe"], correcta: 2, explicacion: "Muchas apps traen IA adentro. La IA de chat tienta porque es la más conocida, pero te hace copiar y pegar." },
    { q: "Querés elegir entre dos IA de chat. ¿Cómo lo decidís?", opciones: ["Haciendo la misma tarea real en las dos y comparando","Por la más famosa","Por el logo","Por la que usa un amigo"], correcta: 0, explicacion: "Tu tarea muestra cuál te sirve. La más famosa tienta, pero puede no ser la mejor para tu caso." },
    { q: "Leés en un video de hace un año cuánto cuesta una herramienta. ¿Qué hacés antes de pagar?", opciones: ["Confiás en el video","Pagás sin mirar","Preguntás en un comentario","Mirás el precio actual en la página oficial"], correcta: 3, explicacion: "Precios y funciones cambian seguido. Confiar en el video tienta, pero puede estar viejo." },
    { q: "Un plan cuesta $25.000 por mes y te ahorra 10 horas; tu hora vale $8.000. ¿Conviene?", opciones: ["No, nunca conviene pagar","Sí: ahorrás $80.000, más de lo que pagás","Sí, pero ahorrás $25.000","No se puede calcular"], correcta: 1, explicacion: "10 × 8.000 = 80.000. \"Nunca conviene\" tienta para ahorrar, pero acá ganás." },
    { q: "El plan pago te ahorraría 2 horas por mes y tu hora vale $8.000. Cuesta $25.000. ¿Conviene?", opciones: ["Sí, siempre","Sí, porque es más rápido","No: ahorrás $16.000 y pagás $25.000","Da igual"], correcta: 2, explicacion: "Pagás más de lo que ahorrás. \"Es más rápido\" tienta, pero la cuenta da en contra." },
    { q: "Una herramienta cobra en dólares. ¿Qué tenés en cuenta?", opciones: ["Que el monto en pesos cambia y se suman impuestos","Nada, es lo mismo","Que es gratis","Que no se puede pagar desde Argentina"], correcta: 0, explicacion: "El precio en pesos varía. \"Es lo mismo\" tienta, pero el resumen de la tarjeta puede sorprenderte." },
    { q: "Si estás empezando, ¿qué plan te conviene?", opciones: ["El más caro, por las dudas","Uno anual sin probar","Ninguno","El gratis, hasta que el límite te frene de verdad"], correcta: 3, explicacion: "Así sabés si de verdad lo necesitás. El más caro tienta por completo, pero no sabés si lo vas a usar." },
    { q: "Querés que la IA te arme mensajes para tus clientes deudores. ¿Qué cargás?", opciones: ["La lista con nombres y teléfonos","Una plantilla con [nombre] y [monto], sin los datos reales","Sus DNI","Las capturas de sus chats"], correcta: 1, explicacion: "Los datos personales no se cargan. La lista completa tienta por cómoda, pero expone a tus clientes." },
    { q: "Necesitás ayuda con un trámite en ARCA (ex AFIP). ¿Le pasás tu clave a la IA?", opciones: ["Sí, para que lo haga más rápido","Sí, si es un plan pago","No: las claves no se pasan nunca","Solo la mitad de la clave"], correcta: 2, explicacion: "Ninguna herramienta necesita tu clave. \"Si es pago\" tienta como garantía, pero tampoco." },
    { q: "¿Qué quiere decir anonimizar un dato?", opciones: ["Sacar o reemplazar lo que identifica a una persona","Borrar el archivo","Traducirlo","Ponerlo en mayúsculas"], correcta: 0, explicacion: "Se reemplaza, por ejemplo, el nombre por \"Cliente A\". Borrar el archivo tienta, pero ya no tenés el dato." },
    { q: "¿Qué ley protege en Argentina los datos personales de tus clientes?", opciones: ["La ley de tránsito","No hay ninguna","La ley del monotributo","La Ley 25.326"], correcta: 3, explicacion: "La 25.326 es la de protección de datos personales. \"No hay ninguna\" tienta, pero existe y obliga a cuidarlos." },
    { q: "No querés que tus conversaciones con la IA se usen para entrenarla. ¿Qué hacés?", opciones: ["Escribís más rápido","Buscás esa opción en la configuración de privacidad","Usás mayúsculas","No se puede hacer nada nunca"], correcta: 1, explicacion: "Muchas herramientas lo permiten desactivar. \"No se puede\" tienta, pero suele haber una opción." },
  ],
},
{
  id: "textos",
  icono: "✍️",
  titulo: "Textos que venden",
  nivel: "Intermedio",
  objetivos: [
    "Pedirle a la IA descripciones de productos y publicaciones con los datos de tu negocio",
    "Armar una guía de estilo para que todos los textos suenen como vos",
    "Revisar cada texto antes de publicarlo: datos, promesas y tono",
  ],
  lecciones: [
    { titulo: "Darle los datos, no pedirle que adivine", html: `
      <p class="idea">La IA escribe bien, pero no conoce tu negocio. Un buen pedido le da <strong>los datos</strong>: qué vendés, a quién, el precio, qué lo diferencia y qué querés que haga quien lo lee.</p>
      <table>
        <tr><th>Pedido flojo</th><th>Pedido con datos</th></tr>
        <tr><td>"Escribí una publicación para mi ferretería."</td><td>"Escribí una publicación de Instagram para una ferretería de barrio en Mendoza. Producto: kit de tarugos y tornillos para colgar estantes, $6.500. Para vecinos que hacen arreglos en su casa. Diferencia: te explicamos cómo colgarlo. Terminá invitando a escribir por WhatsApp. Máximo 80 palabras, tono cercano, sin exagerar."</td></tr>
      </table>
      <pre><code>La fórmula del pedido para un texto de venta:
1. Qué es (formato y red): publicación de Instagram, mail, cartel
2. Producto y precio
3. Para quién
4. Qué lo diferencia
5. Qué querés que haga la persona
6. Largo y tono</code></pre>
      <p><strong>Pedí opciones:</strong> "dame 3 versiones" te deja elegir y mezclar. Después pedí ajustes concretos: "más corta", "sin emojis", "con el precio en la primera línea".</p>
      <p>El precio es de ejemplo. Por ejemplo, la primera publicación que le escribió la IA a Gabriel hablaba de "la mejor ferretería del país". Cuando le dio los 6 datos de la fórmula, el texto sonó a su negocio de verdad.</p>` },
    { titulo: "Tu guía de estilo", html: `
      <p class="idea">Una <strong>guía de estilo</strong> es un texto corto que describe cómo habla tu negocio. La pegás al principio de cada pedido y todos los textos suenan parecidos, los escriba la IA o un empleado.</p>
      <pre><code>Guía de estilo de la ferretería (ejemplo):
- Hablamos de "vos", como en el mostrador.
- Frases cortas y claras. Nada de "¡¡¡increíble!!!".
- Siempre el precio y cómo conseguir el producto.
- Sin palabras técnicas sin explicar.
- Nunca prometemos lo que no podemos cumplir (plazos, stock).
- Firma: "Ferretería Don Gabi, Godoy Cruz".</code></pre>
      <table>
        <tr><th>Sin guía</th><th>Con guía</th></tr>
        <tr><td>Un día suena formal, otro día exagerado</td><td>Todos los textos suenan a tu negocio</td></tr>
        <tr><td>Cada pedido empieza de cero</td><td>Copiás la guía y listo</td></tr>
      </table>
      <p><strong>Cómo armar la tuya:</strong> juntá 3 textos tuyos que te gusten (mensajes reales a clientes, una publicación) y pedile a la IA: "describí en 6 puntos el estilo de estos textos". Corregí lo que no te represente y guardala.</p>
      <p><strong>Guardala donde la tengas a mano:</strong> en una nota del celular o en un documento. Muchas IA de chat permiten guardar instrucciones fijas para que la usen siempre.</p>
      <p>Por ejemplo, Gabriel armó su guía con 4 mensajes de WhatsApp a clientes. Desde entonces, su empleada también la usa para escribir los carteles del local.</p>` },
    { titulo: "Revisar antes de publicar", html: `
      <p class="idea">Todo texto hecho con IA se <strong>revisa antes de publicarlo</strong>. Lo que se publica con el nombre de tu negocio es responsabilidad tuya, lo haya escrito quien lo haya escrito.</p>
      <table>
        <tr><th>Revisá</th><th>Qué buscás</th></tr>
        <tr><td>Datos</td><td>Precio, medidas, horarios: que coincidan con la realidad</td></tr>
        <tr><td>Promesas</td><td>"Entrega en 24 horas", "el más barato": ¿lo podés cumplir y probar?</td></tr>
        <tr><td>Tono</td><td>Que suene a tu negocio y no a un aviso genérico</td></tr>
        <tr><td>Palabras raras</td><td>Expresiones de otros países que tus clientes no usan</td></tr>
        <tr><td>Información de otros</td><td>Que no copie frases o datos de otra marca</td></tr>
      </table>
      <p><strong>Las promesas obligan:</strong> en Argentina, lo que anunciás forma parte de la oferta. Si publicás "envío gratis" o un precio, tenés que cumplirlo. No dejes que la IA agregue promesas que no decidiste.</p>
      <p><strong>Ojo con el español de otros países:</strong> muchas IA escriben "tú" o palabras de otros lugares ("ordenar" por "pedir", "celular" está bien, pero "móvil" no se usa acá). Pedí "en español rioplatense, con vos".</p>
      <p>Por ejemplo, la IA le agregó a una publicación de Gabriel "envío gratis a todo Mendoza". Él no hacía envíos. Lo vio al revisar y lo sacó antes de publicar.</p>` },
  ],
  practica: [
    "Escribí con la fórmula de 6 datos el pedido de una publicación real y anotá cuántos cambios le hiciste al resultado.",
    "Armá tu guía de estilo con 3 textos tuyos y anotá los 6 puntos que quedaron.",
    "Revisá 3 textos hechos con IA con la tabla de la lección y anotá cuántos errores de datos o promesas encontraste.",
  ],
  recursos: [
    { t: "Curso de este sitio: Prompts desde cero (cómo pedirle bien a la IA)", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "AAIP (Argentina): guía para usar la IA de manera responsable (PDF)", url: "https://argentina.gob.ar/sites/default/files/aaip-argentina-guia_para_usar_la_ia_de_manera_responsable.pdf" },
  ],
  quiz: [
    { q: "Si le pedís \"escribí una publicación para mi negocio\" y sale genérica, ¿qué te faltó?", opciones: ["Pedirlo en mayúsculas","Pedirlo dos veces igual","Darle los datos: producto, precio, para quién, diferencia, qué hacer y tono","Usar otra IA sin cambiar nada"], correcta: 2, explicacion: "Sin datos, la IA adivina. Pedirlo de nuevo igual tienta, pero sale parecido." },
    { q: "Querés elegir entre varias ideas de texto. ¿Qué le pedís?", opciones: ["\"Dame 3 versiones\"","\"Hacelo perfecto\"","\"No te equivoques\"","Nada, te quedás con la primera"], correcta: 0, explicacion: "Las opciones te dejan elegir y mezclar. \"Hacelo perfecto\" tienta, pero no le da nada concreto." },
    { q: "Si el texto está bien pero muy largo, ¿qué pedís?", opciones: ["\"Mejoralo\"","Empezar de cero","Nada","Un ajuste concreto: \"más corto, máximo 50 palabras\""], correcta: 3, explicacion: "Los ajustes concretos funcionan mejor. \"Mejoralo\" tienta por corto, pero es vago." },
    { q: "¿Qué es una guía de estilo?", opciones: ["Un manual de la IA","Un texto corto que describe cómo habla tu negocio","La lista de precios","Un logo"], correcta: 1, explicacion: "Hace que todos los textos suenen igual. La lista de precios tienta, pero es otra cosa." },
    { q: "Tus textos un día suenan formales y otro día exagerados. ¿Qué te ayuda?", opciones: ["Usar más emojis","Escribir en inglés","Pegar tu guía de estilo al principio de cada pedido","No usar la IA nunca más"], correcta: 2, explicacion: "La guía unifica el tono. Más emojis tienta para darle onda, pero no lo ordena." },
    { q: "Querés armar tu guía de estilo. ¿De dónde partís?", opciones: ["De 3 textos tuyos reales que te gusten","De la guía de una gran empresa","De nada, que la invente la IA","De un diccionario"], correcta: 0, explicacion: "Tus textos muestran cómo hablás. La de una gran empresa tienta por profesional, pero no suena a vos." },
    { q: "La IA escribió \"el precio más bajo de Mendoza\". ¿Qué hacés?", opciones: ["Lo dejás, suena bien","Lo ponés en negrita","Agregás \"del país\"","Lo sacás si no lo podés probar"], correcta: 3, explicacion: "Lo que anunciás tiene que ser cierto. \"Suena bien\" tienta, pero es una promesa que no podés sostener." },
    { q: "La IA agregó \"envío gratis\" y vos no hacés envíos. ¿Qué pasa si lo publicás?", opciones: ["Nada, nadie lo lee","Lo anunciado forma parte de la oferta: te lo pueden reclamar","Es culpa de la IA","Solo vale si está en mayúsculas"], correcta: 1, explicacion: "Lo que publicás te obliga. \"Es culpa de la IA\" tienta, pero el anuncio es de tu negocio." },
    { q: "Si el texto dice \"tú\" y \"ordená ahora\", ¿qué pedís?", opciones: ["Nada, está bien","\"En inglés\"","\"En español rioplatense, con vos\"","\"Más formal\""], correcta: 2, explicacion: "Así suena a tus clientes. \"Está bien\" tienta, pero suena a otro país." },
    { q: "Un texto hecho con IA tiene un precio. ¿Qué revisás?", opciones: ["Que coincida con tu precio real de hoy","Nada, la IA lo sabe","Solo la ortografía","Solo los emojis"], correcta: 0, explicacion: "La IA no conoce tu precio de hoy. La ortografía tienta, pero un precio mal es peor." },
    { q: "¿De quién es la responsabilidad de lo que se publica con el nombre de tu negocio?", opciones: ["De la IA","De la red social","De nadie","Tuya, lo haya escrito quien lo haya escrito"], correcta: 3, explicacion: "El texto sale con tu nombre. \"De la IA\" tienta, pero no responde ante tus clientes." },
    { q: "Querés que la IA use siempre tu guía sin pegarla cada vez. ¿Qué buscás?", opciones: ["Escribir más rápido","La opción de instrucciones fijas que tienen muchas IA de chat","Otra cuenta","No se puede"], correcta: 1, explicacion: "Muchas permiten guardar instrucciones. \"No se puede\" tienta, pero suele existir." },
  ],
},
{
  id: "atencion",
  icono: "💬",
  titulo: "Atención al cliente con IA",
  nivel: "Intermedio",
  objetivos: [
    "Armar respuestas tipo para las preguntas que más se repiten",
    "Saber qué puede y qué no puede hacer un asistente automático",
    "Mantener siempre una persona disponible para los casos difíciles",
  ],
  lecciones: [
    { titulo: "Las preguntas que se repiten", html: `
      <p class="idea">Casi todos los negocios reciben <strong>las mismas 10 preguntas</strong> todo el día. Con IA armás en una tarde las respuestas tipo, y después las mandás con un toque.</p>
      <pre><code>1. Juntá 20 mensajes reales de clientes (sin nombres ni números).
2. Pedile a la IA: "Agrupá estas preguntas por tema y decime
   las 10 más repetidas".
3. Para cada una, escribí vos los datos reales (horario, precios,
   envíos, medios de pago).
4. Pedile: "Con estos datos, escribí una respuesta corta y amable
   para cada pregunta, con vos y terminando con una pregunta".
5. Revisalas y cargalas como respuestas rápidas en tu app de mensajes.</code></pre>
      <table>
        <tr><th>Pregunta frecuente</th><th>Respuesta tipo (ejemplo)</th></tr>
        <tr><td>"¿Hasta qué hora están?"</td><td>"¡Hola! Abrimos de lunes a sábado de 8 a 13 y de 16 a 20. ¿Qué estás buscando?"</td></tr>
        <tr><td>"¿Tienen pintura látex?"</td><td>"Sí, tenemos de 4, 10 y 20 litros. ¿Para interior o exterior?"</td></tr>
      </table>
      <p><strong>Las respuestas rápidas</strong> son textos guardados en apps como WhatsApp Business que se mandan con un toque: no hace falta ninguna IA para usarlas, solo para escribirlas la primera vez.</p>
      <p>Por ejemplo, Gabriel juntó 20 mensajes de la semana y la IA los agrupó en 8 temas. En una tarde dejó 8 respuestas cargadas y ahora contesta la mitad de los mensajes en segundos.</p>` },
    { titulo: "Asistentes automáticos: lo que pueden y lo que no", video: {"id":"V8Wb3aijSdc","t":"Qué es un agente de inteligencia artificial, explicado fácil · Alan Daitch (4:37)"}, html: `
      <p class="idea">Un <strong>asistente automático</strong> (chatbot) contesta solo, a cualquier hora. Sirve para lo simple y repetido, pero <strong>se equivoca</strong> y puede inventar: nunca lo dejes solo con lo importante.</p>
      <table>
        <tr><th>Un asistente puede</th><th>Un asistente no debería</th></tr>
        <tr><td>Contestar horarios, ubicación y medios de pago</td><td>Confirmar precios o stock que cambian si no está conectado a tus datos al día</td></tr>
        <tr><td>Tomar los datos de un pedido para que lo confirme una persona</td><td>Resolver reclamos o devoluciones solo</td></tr>
        <tr><td>Avisar que fuera de horario respondés al día siguiente</td><td>Prometer plazos, descuentos o garantías</td></tr>
      </table>
      <p>Un <strong>agente de IA</strong> es un asistente que, además de conversar, puede hacer acciones (anotar un pedido, buscar en una planilla). Cuantas más cosas puede hacer solo, más importante es revisar qué hace.</p>
      <p><strong>Decí que es automático:</strong> que la persona sepa que habla con un asistente y cómo pedir hablar con alguien. La guía de la AAIP recomienda transparencia cuando se usa IA con las personas.</p>
      <p><strong>Antes de activarlo, probalo vos:</strong> hacele 20 preguntas, incluidas algunas raras, y anotá cuántas contestó bien.</p>
      <p>Por ejemplo, Gabriel probó un asistente y le preguntó "¿tienen descuento por cantidad?". El asistente inventó un 15 % que no existía. Gabriel lo limitó a horarios, ubicación y tomar pedidos.</p>` },
    { titulo: "Siempre una persona disponible", html: `
      <p class="idea">La IA atiende lo repetido para que <strong>vos</strong> tengas tiempo para lo importante: un reclamo, un cliente enojado, un pedido grande. Esos casos los atiende siempre una persona.</p>
      <pre><code>Regla de pase a una persona (escribila y respetala):
Pasa a una persona si el cliente:
- Tiene un reclamo o quiere devolver algo
- Pregunta algo que el asistente no sabe
- Pide hablar con alguien
- Escribe enojado o repite la misma pregunta
- Hace un pedido grande o especial</code></pre>
      <table>
        <tr><th>Mal</th><th>Bien</th></tr>
        <tr><td>El cliente da vueltas con el asistente y nunca llega a alguien</td><td>En el primer mensaje dice cómo hablar con una persona</td></tr>
        <tr><td>Un reclamo lo contesta la IA con una frase hecha</td><td>Lo contesta el dueño o un empleado, el mismo día</td></tr>
        <tr><td>Nadie revisa lo que contestó el asistente</td><td>Una vez por semana revisás 10 conversaciones al azar</td></tr>
      </table>
      <p><strong>Los derechos del cliente no cambian</strong> porque atienda una IA: garantía, devolución y trato digno siguen valiendo igual.</p>
      <p><strong>Revisión semanal:</strong> leé 10 conversaciones del asistente. Si encontrás errores, ajustá las respuestas o lo que tiene permitido hacer.</p>
      <p>Por ejemplo, una clienta de Gabriel escribió enojada porque una canilla vino fallada. El asistente la pasó enseguida a Gabriel, que la llamó y le cambió la canilla esa misma tarde.</p>` },
  ],
  practica: [
    "Juntá 20 mensajes reales sin nombres ni números, agrupalos con la IA y anotá las 10 preguntas más repetidas.",
    "Escribí con datos reales las respuestas tipo de esas preguntas, cargalas como respuestas rápidas y anotá cuántos minutos te ahorran en una semana.",
    "Escribí tu regla de pase a una persona con al menos 4 casos y anotá cuántas veces la usaste en una semana.",
  ],
  recursos: [
    { t: "AAIP (Argentina): guía para usar la IA de manera responsable (PDF)", url: "https://argentina.gob.ar/sites/default/files/aaip-argentina-guia_para_usar_la_ia_de_manera_responsable.pdf" },
    { t: "Argentina.gob.ar: la guía de la AAIP para usar la IA de manera responsable", url: "https://www.argentina.gob.ar/noticias/guia-de-la-aaip-para-usar-la-inteligencia-artificial-de-manera-responsable" },
    { t: "Google: cursos y herramientas gratis para negocios (Crece con Google)", url: "https://grow.google/intl/es/" },
  ],
  quiz: [
    { q: "Querés armar respuestas tipo con IA. ¿Qué le pasás primero?", opciones: ["Los chats completos con datos personales","Nada, que invente las preguntas","Mensajes reales de clientes, sin nombres ni números, para que los agrupe","Tu contraseña de WhatsApp"], correcta: 2, explicacion: "Mensajes reales y anonimizados muestran qué preguntan. Los chats con datos tientan por cómodos, pero exponen a tus clientes." },
    { q: "Si la IA te escribe respuestas tipo, ¿de dónde salen los horarios y los precios?", opciones: ["Los escribís vos con los datos reales","Los inventa la IA","De internet","De otro negocio parecido"], correcta: 0, explicacion: "La IA no los sabe. Que los invente tienta por rápido, pero pueden estar mal." },
    { q: "¿Necesitás una IA para mandar respuestas rápidas en WhatsApp Business?", opciones: ["Sí, siempre","Sí, y una paga","No se pueden guardar respuestas","No: son textos guardados; la IA solo ayuda a escribirlos la primera vez"], correcta: 3, explicacion: "Las respuestas rápidas son una función de la app. \"Sí, siempre\" tienta, pero no hace falta." },
    { q: "Querés que un asistente automático confirme el stock, pero no está conectado a tus datos al día. ¿Qué pasa?", opciones: ["Siempre acierta","Puede inventar o dar un dato viejo: mejor que no confirme stock","Lo adivina bien","Se conecta solo"], correcta: 1, explicacion: "Sin datos al día, no sabe. \"Siempre acierta\" tienta porque responde seguro, pero no tiene de dónde sacarlo." },
    { q: "Si un cliente tiene un reclamo por un producto fallado, ¿quién lo atiende?", opciones: ["El asistente con una frase hecha","Nadie","Una persona, el mismo día","El asistente, prometiendo un descuento"], correcta: 2, explicacion: "Los reclamos los atiende una persona. La frase hecha tienta por rápida, pero enoja más." },
    { q: "¿Qué es un agente de IA?", opciones: ["Un asistente que además de conversar puede hacer acciones, como anotar un pedido","Una persona que vende IA","Un antivirus","Un plan pago"], correcta: 0, explicacion: "Conversa y actúa. \"Una persona\" tienta por la palabra agente, pero es un programa." },
    { q: "Si tu asistente es automático, ¿conviene decírselo al cliente?", opciones: ["No, mejor que crea que es una persona","Da igual","Solo si pregunta tres veces","Sí, y explicar cómo hablar con una persona"], correcta: 3, explicacion: "La transparencia es una recomendación de la AAIP. Ocultarlo tienta para parecer más cercano, pero engaña al cliente." },
    { q: "Antes de activar un asistente, ¿cómo lo probás?", opciones: ["No hace falta probarlo","Haciéndole 20 preguntas, incluidas raras, y anotando cuántas contesta bien","Con una sola pregunta","Activándolo directo con clientes"], correcta: 1, explicacion: "Probar muestra dónde falla. Activarlo directo tienta por apuro, pero los errores los ven tus clientes." },
    { q: "El asistente inventó un descuento del 15 % que no existe. ¿Qué hacés?", opciones: ["Le das el descuento a todos","No hacés nada","Le limitás lo que puede contestar a lo simple y seguro","Lo dejás contestar todo"], correcta: 2, explicacion: "Limitarlo evita promesas falsas. \"No hacer nada\" tienta, pero va a seguir inventando." },
    { q: "Un cliente escribe enojado y repite la misma pregunta. ¿Qué dice tu regla?", opciones: ["Pasa a una persona","Que el asistente le conteste lo mismo","Que lo bloquees","Que lo ignores"], correcta: 0, explicacion: "Enojo y repetición son señales de pase. Repetir la respuesta tienta por automático, pero lo enoja más." },
    { q: "¿Cambian los derechos del cliente si lo atiende una IA?", opciones: ["Sí, tiene menos derechos","Sí, no puede reclamar","Depende de la IA","No: garantía, devolución y trato digno valen igual"], correcta: 3, explicacion: "Los derechos son los mismos. \"Depende de la IA\" tienta, pero la responsabilidad es del negocio." },
    { q: "¿Cada cuánto conviene revisar lo que contestó el asistente?", opciones: ["Nunca","Una vez por semana, leyendo 10 conversaciones al azar","Una vez por año","Solo si alguien se queja"], correcta: 1, explicacion: "La revisión encuentra errores antes de que crezcan. Esperar quejas tienta, pero ya es tarde." },
  ],
},
{
  id: "numeros",
  icono: "🧮",
  titulo: "Planillas y números con IA",
  nivel: "Intermedio",
  objetivos: [
    "Pedirle a la IA fórmulas de planilla explicadas paso a paso",
    "Usarla para leer tus ventas y encontrar patrones, sin cargar datos personales",
    "Controlar siempre las cuentas que hace la IA",
  ],
  lecciones: [
    { titulo: "Fórmulas sin saberlas de memoria", video: {"id":"BZe9aqGD8dA","t":"El truco para automatizar Excel con ChatGPT, sin saber programar · IA con Daniel (5:02)"}, html: `
      <p class="idea">No hace falta saber de memoria las fórmulas de Excel o de Google Sheets: describile a la IA <strong>qué columnas tenés y qué querés calcular</strong>, y pedile la fórmula <strong>explicada</strong>.</p>
      <table>
        <tr><th>Pedido flojo</th><th>Pedido claro</th></tr>
        <tr><td>"Haceme una fórmula de ventas."</td><td>"Tengo una planilla con: A = fecha, B = producto, C = cantidad, D = precio unitario. Quiero en E el total de cada fila y abajo el total del mes. Dame las fórmulas para Google Sheets y explicame cada una en una línea."</td></tr>
      </table>
      <pre><code>Lo que te puede devolver (y vos probás):
E2:   =C2*D2            → cantidad por precio de esa fila
E100: =SUMA(E2:E99)     → suma todos los totales
Ventas de un producto:
      =SUMAR.SI(B2:B99; "Pintura"; E2:E99)</code></pre>
      <p><strong>Las planillas en español</strong> usan nombres en castellano (SUMA, SUMAR.SI) y, según la configuración, punto y coma para separar. Si la fórmula da error, decile a la IA qué programa usás y el mensaje de error exacto.</p>
      <p><strong>Probá con un caso que sepas la respuesta:</strong> poné 2 filas con números fáciles y fijate si la fórmula da lo que calculás de cabeza.</p>
      <p>Para aprender las planillas desde cero está el curso <strong>Excel y planillas</strong> de este sitio.</p>
      <p>Por ejemplo, Gabriel quería saber cuánto vendía de pintura por mes. Le describió sus columnas a la IA, le dio la fórmula con SUMAR.SI y la probó con dos ventas que conocía: daba bien.</p>` },
    { titulo: "Leer tus ventas", html: `
      <p class="idea">La IA puede ayudarte a <strong>encontrar patrones</strong> en tus ventas: qué se vende más, qué días, qué productos casi no salen. La condición: le pasás <strong>números sin datos personales</strong>.</p>
      <pre><code>Datos que sí podés pasar (resumen sin clientes):
Mes     | Producto        | Unidades | Total
Agosto  | Pintura 20 L    | 18       | $1.080.000
Agosto  | Tornillería     | 240      | $  360.000
Agosto  | Herramientas    | 12       | $  540.000
...

Pedido: "Con estos datos de 6 meses, decime: qué productos crecen,
cuáles bajan y qué preguntas debería hacerme. No inventes datos
que no están en la tabla."</code></pre>
      <table>
        <tr><th>Buenas preguntas para tus datos</th><th>Lo que decidís vos después</th></tr>
        <tr><td>¿Qué productos venden más y cuáles casi nada?</td><td>Qué reponer y qué dejar de comprar</td></tr>
        <tr><td>¿Qué meses o días se vende más?</td><td>Cuándo hacer promociones o tener más gente</td></tr>
        <tr><td>¿Qué cambió respecto del mes pasado?</td><td>Si hay que ajustar precios o stock</td></tr>
      </table>
      <p><strong>"No inventes datos que no están en la tabla"</strong> es una frase que conviene agregar siempre: reduce que la IA complete huecos con números falsos.</p>
      <p><strong>La IA muestra, vos decidís:</strong> puede notar que la pintura sube en primavera, pero si conviene comprar más stock depende de tu plata, tu depósito y tu proveedor.</p>
      <p>Los montos son de ejemplo. Por ejemplo, la IA le marcó a Gabriel que las herramientas eléctricas casi no salían en invierno. Decidió no reponerlas hasta septiembre y liberó plata para pintura.</p>` },
    { titulo: "Controlar las cuentas", html: `
      <p class="idea">Las IA de chat <strong>pueden equivocarse con las cuentas</strong>, sobre todo con muchos números. Toda cuenta que vaya a un presupuesto, un precio o un pago se <strong>controla</strong>.</p>
      <table>
        <tr><th>Cómo controlar</th><th>Ejemplo</th></tr>
        <tr><td>Estimar antes: redondear y calcular de cabeza</td><td>18 latas a unos $60.000 son más o menos $1.080.000</td></tr>
        <tr><td>Rehacer la cuenta en la planilla o la calculadora</td><td>18 × 60.000 = 1.080.000</td></tr>
        <tr><td>Revisar que use todos los datos</td><td>¿Sumó las 6 filas o se olvidó una?</td></tr>
        <tr><td>Pedirle que muestre la cuenta paso a paso</td><td>Así ves dónde está el error</td></tr>
      </table>
      <pre><code>Mejor que pedir el resultado:
✘ "¿Cuánto da el presupuesto?"
✔ "Armame la tabla del presupuesto con cantidad, precio unitario
   y subtotal por renglón, y el total al final. Mostrá cada cuenta."
   → después lo pasás a la planilla, que hace las cuentas sin errores.</code></pre>
      <p><strong>La planilla calcula, la IA ordena:</strong> usá la IA para armar la estructura y las fórmulas, y dejá que la planilla haga las cuentas. Es más seguro que confiar en una cuenta escrita en un chat.</p>
      <p>Para calcular bien tus costos y tus precios está el curso <strong>Costos y precios</strong> de este sitio.</p>
      <p>Los precios son de ejemplo. Por ejemplo, en un presupuesto de 14 renglones, la IA le dio a Gabriel un total que no coincidía. Lo pasó a la planilla: la IA había salteado un renglón.</p>` },
  ],
  practica: [
    "Pedile a la IA una fórmula para tu planilla describiendo tus columnas, probala con 2 filas de números fáciles y anotá si dio bien.",
    "Armá un resumen de ventas de 3 meses sin datos de clientes, pedile a la IA 3 patrones y anotá qué decidirías con cada uno.",
    "Pedile a la IA un presupuesto de al menos 8 renglones, controlalo en la planilla y anotá si encontraste alguna diferencia.",
  ],
  recursos: [
    { t: "Curso de este sitio: Excel y planillas", url: "https://pkeios.github.io/EiaLearning/excel/" },
    { t: "Curso de este sitio: Costos y precios, cuánto cobrar", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Curso de este sitio: Prompts desde cero (cómo pedirle bien a la IA)", url: "https://pkeios.github.io/EiaLearning/prompts/" },
  ],
  quiz: [
    { q: "Querés una fórmula para tu planilla. ¿Qué le contás a la IA?", opciones: ["Solo \"haceme una fórmula\"","Tu contraseña de la planilla","Qué columnas tenés, qué querés calcular y en qué programa","Nada, que adivine"], correcta: 2, explicacion: "Con las columnas y el objetivo, la fórmula sale justa. \"Haceme una fórmula\" tienta por corto, pero es vago." },
    { q: "La fórmula que te dio la IA da error en tu planilla. ¿Qué hacés?", opciones: ["Le decís qué programa usás y el mensaje de error exacto","Abandonás la planilla","Borrás todo","Le pedís lo mismo sin más datos"], correcta: 0, explicacion: "El error exacto la ayuda a corregir. Repetir el pedido tienta, pero suele dar lo mismo." },
    { q: "Querés saber si una fórmula funciona. ¿Cómo la probás?", opciones: ["Confiando en la IA","Con miles de filas de una","No se puede probar","Con 2 filas de números fáciles cuyo resultado sabés de cabeza"], correcta: 3, explicacion: "Un caso conocido muestra si da bien. Confiar tienta, pero la fórmula puede estar mal." },
    { q: "Querés que la IA analice tus ventas. ¿Qué le pasás?", opciones: ["La lista de clientes con sus compras y teléfonos","Un resumen con productos, unidades y totales, sin datos de clientes","Tu clave del banco","Las fotos de los tickets con DNI"], correcta: 1, explicacion: "Los números alcanzan para encontrar patrones. La lista de clientes tienta por completa, pero expone sus datos." },
    { q: "¿Qué frase conviene agregar cuando le pedís que analice una tabla?", opciones: ["\"Hacelo rápido\"","\"Inventá lo que falte\"","\"No inventes datos que no están en la tabla\"","\"No me expliques nada\""], correcta: 2, explicacion: "Reduce que complete huecos con números falsos. \"Hacelo rápido\" tienta, pero no la frena de inventar." },
    { q: "La IA te dice que un producto casi no se vende en invierno. ¿Quién decide si dejás de comprarlo?", opciones: ["Vos, según tu plata, tu depósito y tu proveedor","La IA","El proveedor solo","Nadie"], correcta: 0, explicacion: "La IA muestra el patrón; la decisión es tuya. \"La IA\" tienta porque lo encontró, pero no conoce tu situación." },
    { q: "Si querés detectar en qué días se vende más, ¿qué pregunta le hacés a la IA?", opciones: ["\"¿Soy buen comerciante?\"","\"¿Cuánto voy a vender el año que viene exacto?\"","\"¿Qué hacen otros negocios?\"","\"¿Qué días de la semana se vende más según esta tabla?\""], correcta: 3, explicacion: "Una pregunta concreta sobre tus datos. El pronóstico exacto tienta, pero nadie lo sabe." },
    { q: "La IA te da el total de un presupuesto largo. ¿Qué hacés?", opciones: ["Lo mandás directo al cliente","Lo controlás en la planilla o con la calculadora","Le sumás un 10 % por las dudas","Lo redondeás y listo"], correcta: 1, explicacion: "Las IA de chat se equivocan con las cuentas largas. Mandarlo directo tienta por rápido, pero un error lo paga tu negocio." },
    { q: "18 latas a $60.000 cada una. ¿Cuánto tiene que dar más o menos?", opciones: ["$108.000","$10.800.000","$1.080.000","$600.000"], correcta: 2, explicacion: "18 × 60.000 = 1.080.000. $108.000 tienta si te comés un cero." },
    { q: "¿Qué conviene pedirle a la IA para un presupuesto?", opciones: ["La tabla con cantidad, precio y subtotal por renglón, para pasarla a la planilla","Solo el total final","Que lo mande ella al cliente","Que invente los precios"], correcta: 0, explicacion: "Con la tabla ves y controlás cada cuenta. Solo el total tienta por simple, pero no ves dónde se equivocó." },
    { q: "Si el total de la IA no coincide con la planilla, ¿qué es lo primero que revisás?", opciones: ["Si la planilla está rota","El color de las celdas","Nada, gana la IA","Si usó todos los renglones"], correcta: 3, explicacion: "Saltearse un renglón es un error común. \"La planilla está rota\" tienta, pero suele ser la IA." },
    { q: "¿Quién conviene que haga las cuentas finales?", opciones: ["La IA de chat siempre","La planilla: la IA ordena y arma las fórmulas","Nadie","El cliente"], correcta: 1, explicacion: "La planilla calcula sin errores de cuenta. La IA tienta por cómoda, pero puede fallar." },
  ],
},
{
  id: "ideas",
  icono: "💡",
  titulo: "Ideas, planificación y marketing",
  nivel: "Intermedio",
  objetivos: [
    "Usar la IA para generar muchas ideas y elegir vos las mejores",
    "Armar un calendario de publicaciones y un plan simple de un mes",
    "Validar las ideas con clientes reales antes de invertir",
  ],
  lecciones: [
    { titulo: "Muchas ideas, vos elegís", html: `
      <p class="idea">La IA es muy buena para <strong>tirar ideas en cantidad</strong>: nombres de promociones, temas para publicar, formas de mostrar un producto. Pedí muchas y elegí pocas.</p>
      <pre><code>Pedido de ideas (con contexto):
"Tengo una ferretería de barrio en Godoy Cruz, Mendoza.
Mis clientes son vecinos que hacen arreglos en su casa y algunos
albañiles. Dame 15 ideas de promociones para la primavera,
cada una en una línea, que no impliquen bajar precios más de un 10 %."</code></pre>
      <table>
        <tr><th>Cómo elegir entre 15 ideas</th><th>Preguntas</th></tr>
        <tr><td>¿La puedo hacer?</td><td>¿Tengo el tiempo, la plata y el stock?</td></tr>
        <tr><td>¿Le sirve a mi cliente?</td><td>¿Resuelve algo que me piden?</td></tr>
        <tr><td>¿Se puede medir?</td><td>¿Cómo sé si funcionó? (ventas, consultas)</td></tr>
      </table>
      <p><strong>Las ideas genéricas son el riesgo:</strong> sin contexto, la IA propone lo mismo que a todo el mundo. Cuantos más datos de tu negocio y tu barrio le des, más útiles salen.</p>
      <p><strong>Mezclá ideas:</strong> a veces lo mejor es combinar dos ("taller gratis" + "kit con descuento para los que vinieron al taller").</p>
      <p>Por ejemplo, de 15 ideas, Gabriel eligió una: un sábado de "arreglá tu canilla" con una demostración en el local y un kit de repuestos. Vendió 22 kits esa mañana.</p>` },
    { titulo: "Un plan de un mes", html: `
      <p class="idea">Con la IA armás en minutos un <strong>calendario de publicaciones</strong> o un plan de un mes. Lo importante es darle el ritmo real que podés sostener.</p>
      <pre><code>Pedido:
"Armame un calendario de 4 semanas para Instagram de mi ferretería.
Puedo publicar 2 veces por semana y subir historias 3 días.
Mezclá: productos con precio, consejos de arreglos y detrás de escena.
Devolvelo en una tabla con fecha, tipo, idea y texto corto."</code></pre>
      <table>
        <tr><th>Semana</th><th>Martes</th><th>Viernes</th></tr>
        <tr><td>1</td><td>Consejo: cómo destapar una pileta sin químicos</td><td>Producto: sopapa y destapador, con precio</td></tr>
        <tr><td>2</td><td>Detrás de escena: llegó la pintura</td><td>Consejo: cuánta pintura comprar por m²</td></tr>
      </table>
      <p><strong>El ritmo lo ponés vos:</strong> si le pedís "un plan para crecer en redes", te arma uno de publicar todos los días que no vas a poder cumplir. Decile cuántas horas tenés.</p>
      <p><strong>Las ideas de consejos se revisan:</strong> si la IA sugiere un consejo técnico (por ejemplo, de electricidad o gas), verificá que sea correcto y seguro; las instalaciones de gas y eléctricas de una casa las hace un profesional matriculado.</p>
      <p>Para profundizar en redes está el curso <strong>Redes sociales para tu emprendimiento</strong> de este sitio.</p>
      <p>Por ejemplo, Gabriel pidió un plan de 2 publicaciones por semana. La IA propuso un consejo sobre cambiar un tomacorriente; él lo cambió por uno de pintura, porque los trabajos eléctricos no se los recomienda a sus clientes.</p>` },
    { titulo: "Validar antes de invertir", html: `
      <p class="idea">Una idea que la IA dice que es buena <strong>no está probada</strong>. Antes de gastar plata, probala en chico con <strong>clientes reales</strong>.</p>
      <table>
        <tr><th>Forma de validar</th><th>Costo</th><th>Qué te dice</th></tr>
        <tr><td>Preguntarle a 10 clientes</td><td>Gratis</td><td>Si les interesa y cuánto pagarían</td></tr>
        <tr><td>Una encuesta en historias</td><td>Gratis</td><td>Qué opción prefieren</td></tr>
        <tr><td>Probar una semana con poco stock</td><td>Bajo</td><td>Si se vende de verdad</td></tr>
        <tr><td>Comprar mucho stock de entrada</td><td>Alto</td><td>Lo mismo, pero arriesgás plata</td></tr>
      </table>
      <pre><code>La IA ayuda a preparar la validación:
"Escribime 5 preguntas cortas para preguntarles a mis clientes
si les interesaría un servicio de corte de madera a medida.
Que no sean preguntas que inducen la respuesta."</code></pre>
      <p><strong>Preguntas que inducen la respuesta</strong> son las que empujan a decir que sí: "¿No te parece genial...?". Las buenas preguntas son neutras: "¿Cuándo fue la última vez que necesitaste...?".</p>
      <p><strong>La IA no conoce a tus clientes:</strong> puede decir que una idea "tiene mucho potencial" para cualquier cosa. Los que deciden si funciona son ellos, comprando o no.</p>
      <p>Por ejemplo, la IA le dijo a Gabriel que un servicio de corte de madera "tenía gran potencial". Preguntó a 10 clientes: solo 2 lo usarían. Lo probó un mes con lo que ya tenía, sin comprar una máquina nueva.</p>` },
  ],
  practica: [
    "Pedile a la IA 15 ideas para tu negocio con contexto, elegí 2 con las tres preguntas de la lección y anotá por qué.",
    "Armá con la IA un calendario de 4 semanas según tu ritmo real y anotá cuántas publicaciones cumpliste.",
    "Validá una idea con 10 clientes reales y anotá cuántos dijeron que la usarían.",
  ],
  recursos: [
    { t: "Google: cursos y herramientas gratis para negocios (Crece con Google)", url: "https://grow.google/intl/es/" },
    { t: "Curso de este sitio: Prompts desde cero (cómo pedirle bien a la IA)", url: "https://pkeios.github.io/EiaLearning/prompts/" },
  ],
  quiz: [
    { q: "Le pedís ideas a la IA sin contarle nada de tu negocio. ¿Qué suele pasar?", opciones: ["Te da ideas perfectas para vos","No te da nada","Te da ideas genéricas, las mismas que a todos","Te pide tu contraseña"], correcta: 2, explicacion: "Sin contexto no sabe para quién son. \"Ideas perfectas\" tienta, pero no conoce tu negocio." },
    { q: "La IA te dio 15 ideas. ¿Qué hacés?", opciones: ["Elegís pocas: las que podés hacer, sirven al cliente y se pueden medir","Hacés las 15 a la vez","Elegís la más larga","Ninguna, son de la IA"], correcta: 0, explicacion: "Pocas y bien elegidas. Las 15 tientan por ambición, pero no podés hacerlas todas bien." },
    { q: "Si una idea no se puede medir, ¿qué problema tiene?", opciones: ["Ninguno","Es ilegal","Es más cara","No vas a saber si funcionó"], correcta: 3, explicacion: "Sin medida no hay aprendizaje. \"Ninguno\" tienta, pero quedás adivinando." },
    { q: "Si le pedís a la IA \"un plan para crecer en redes\" sin más, ¿qué te puede armar?", opciones: ["Exactamente lo que podés hacer","Un plan de publicar todos los días que no vas a poder cumplir","Nada","Un plan sin redes"], correcta: 1, explicacion: "Sin tu ritmo real, propone de más. \"Exactamente lo que podés\" tienta, pero no sabe tu tiempo." },
    { q: "Querés un calendario de publicaciones. ¿Qué le decís a la IA?", opciones: ["\"Hacé lo mejor\"","Nada","Cuántas veces por semana podés publicar y qué tipos de contenido mezclar","Que publique ella sola"], correcta: 2, explicacion: "El ritmo lo ponés vos. \"Hacé lo mejor\" tienta, pero es vago." },
    { q: "La IA te propone publicar un consejo para cambiar un tomacorriente. ¿Qué hacés?", opciones: ["Lo revisás y lo cambiás: los trabajos eléctricos de una casa los hace un profesional matriculado","Lo publicás tal cual","Le agregás más pasos","Lo ponés en mayúsculas"], correcta: 0, explicacion: "Un consejo inseguro puede lastimar a alguien. Publicarlo tienta porque parece útil, pero es riesgoso." },
    { q: "La IA dice que tu idea \"tiene mucho potencial\". ¿Qué sabés con eso?", opciones: ["Que va a funcionar","Que tenés que invertir ya","Que la competencia la copia","Nada seguro: hay que probarla con clientes reales"], correcta: 3, explicacion: "La IA no conoce a tus clientes. \"Va a funcionar\" tienta porque suena convincente, pero no está probado." },
    { q: "¿Cuál es la forma más barata de validar una idea?", opciones: ["Comprar mucho stock","Preguntarles a 10 clientes reales","Contratar una agencia","Hacer un local nuevo"], correcta: 1, explicacion: "Preguntar es gratis y rápido. El stock tienta para \"probar en serio\", pero arriesgás plata." },
    { q: "¿Cuál de estas preguntas induce la respuesta?", opciones: ["\"¿Cuándo fue la última vez que necesitaste cortar madera?\"","\"¿Cuánto pagarías por esto?\"","\"¿No te parece genial este servicio nuevo?\"","\"¿Qué usás ahora para resolverlo?\""], correcta: 2, explicacion: "Empuja a decir que sí. Las otras son neutras: preguntan por hechos." },
    { q: "Querés preguntas neutras para tus clientes. ¿Qué le pedís a la IA?", opciones: ["\"5 preguntas cortas que no induzcan la respuesta\"","\"Preguntas para que digan que sí\"","\"Una sola pregunta larga\"","Nada"], correcta: 0, explicacion: "Así obtenés respuestas reales. \"Para que digan que sí\" tienta, pero te engaña a vos." },
    { q: "De 10 clientes, 2 usarían tu servicio nuevo. ¿Qué conviene?", opciones: ["Comprar la máquina más cara","Hacerlo igual en grande","Ignorar a los clientes","Probar en chico, sin invertir mucho"], correcta: 3, explicacion: "Pocos interesados es señal de cuidado. En grande tienta por entusiasmo, pero el riesgo es alto." },
    { q: "Para combinar ideas, ¿qué podés hacer?", opciones: ["Elegir siempre la primera","Mezclar dos ideas en una propuesta mejor","Pedir 100 ideas más","No mezclar nunca"], correcta: 1, explicacion: "Combinar suele dar lo mejor. Pedir 100 más tienta, pero no elige por vos." },
  ],
},
{
  id: "riesgos",
  icono: "⚠️",
  titulo: "Riesgos y reglas",
  nivel: "Avanzado",
  objetivos: [
    "Reconocer los errores típicos de la IA: inventos, datos viejos y sesgos",
    "Cuidar los derechos de autor y la imagen de otros en lo que publicás",
    "Escribir reglas de uso de IA para tu negocio",
  ],
  lecciones: [
    { titulo: "Inventos, datos viejos y sesgos", video: {"id":"IEqILz4ycpU","t":"Meta entrena su IA con tus publicaciones: qué riesgos hay y cómo proteger tu privacidad · DW Tecnología y mundo digital (6:34)"}, html: `
      <p class="idea">La IA tiene tres errores típicos: <strong>inventa</strong> datos con seguridad, puede tener <strong>información vieja</strong> y repite <strong>sesgos</strong> (prejuicios) de los textos con los que aprendió.</p>
      <table>
        <tr><th>Error</th><th>Ejemplo en un negocio</th><th>Cómo cuidarte</th></tr>
        <tr><td>Inventa (alucina)</td><td>Cita una ley que no existe o un dato de un producto</td><td>Pedí la fuente y verificala</td></tr>
        <tr><td>Información vieja</td><td>Te habla de un impuesto o una regla que ya cambió</td><td>Para leyes e impuestos, fuentes oficiales o un profesional</td></tr>
        <tr><td>Sesgos</td><td>Un aviso de empleo que sin querer deja afuera a mujeres o a personas mayores</td><td>Revisá que el texto sea para todos</td></tr>
      </table>
      <p>Que la IA "alucine" quiere decir que produce algo falso que suena verdadero. No miente a propósito: completa con lo que le parece probable.</p>
      <p><strong>Impuestos y leyes:</strong> la IA te puede ayudar a entender una idea general o a preparar preguntas, pero para monotributo, facturación o contratos, la palabra final es de la fuente oficial o de tu contador.</p>
      <p><strong>Lo que publicás en redes</strong> también puede usarse para entrenar IA, según la plataforma. Revisá la configuración de privacidad de tus cuentas.</p>
      <p>Por ejemplo, la IA le explicó a Gabriel una categoría del monotributo con montos de otro año. Su contadora le mostró los valores actuales en la página oficial.</p>` },
    { titulo: "Imágenes, derechos y personas", html: `
      <p class="idea">Con IA se crean imágenes en segundos, pero hay límites: <strong>no copies marcas ni personas reales</strong>, no muestres productos distintos de lo que vendés y respetá los derechos de los demás.</p>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Una ilustración para un cartel de promoción</td><td>Una "foto" de tu producto que no es tu producto</td></tr>
        <tr><td>Un fondo o un diseño genérico</td><td>El logo o el personaje de otra marca</td></tr>
        <tr><td>Fotos reales de tus productos, mejoradas con luz y recorte</td><td>La cara de una persona real sin su permiso</td></tr>
      </table>
      <p><strong>Mostrar algo distinto de lo que vendés es engañar:</strong> si la imagen hecha con IA muestra una torta más grande o una herramienta que no es la tuya, el cliente puede reclamar. Para productos, usá fotos reales.</p>
      <p><strong>Decí cuando una imagen es generada:</strong> en publicidad, aclarar "imagen ilustrativa" o "creada con IA" evita confusiones.</p>
      <p><strong>Las personas reales</strong> tienen derecho sobre su imagen. No uses la cara de un cliente, un famoso o un empleado (ni siquiera modificada con IA) sin su permiso.</p>
      <p>Por ejemplo, Gabriel quería una imagen de una caja de herramientas "más linda" para un sorteo. En vez de una generada, sacó una foto real de la caja con buena luz y usó la IA solo para el fondo del cartel.</p>` },
    { titulo: "Las reglas de tu negocio", html: `
      <p class="idea">Si en tu negocio usan IA varias personas, escribí <strong>reglas de uso</strong> simples. Una hoja alcanza, y evita errores caros.</p>
      <pre><code>Reglas de uso de IA (ejemplo para una ferretería)
1. No cargamos datos personales de clientes ni proveedores.
2. No cargamos contraseñas ni datos del banco.
3. Todo texto para clientes lo revisa una persona antes de salir.
4. Precios, stock y promesas los confirma una persona.
5. Reclamos y devoluciones los atiende siempre una persona.
6. Leyes e impuestos: se confirman con fuente oficial o con la contadora.
7. No usamos imágenes de personas reales ni de otras marcas.
8. Si algo sale mal por un error de IA, se avisa y se corrige.</code></pre>
      <table>
        <tr><th>Para que las reglas funcionen</th><th>Cómo</th></tr>
        <tr><td>Que todos las conozcan</td><td>Leelas con tu equipo y pegalas cerca de la compu</td></tr>
        <tr><td>Que sean pocas</td><td>Ocho alcanzan; cien no las lee nadie</td></tr>
        <tr><td>Que se revisen</td><td>Cada tres meses, o cuando pase algo</td></tr>
      </table>
      <p><strong>Transparencia:</strong> la guía de la AAIP recomienda explicar cuándo se usa IA y cuidar los datos personales. Unas reglas escritas te ayudan a cumplirlo y a contarlo si un cliente pregunta.</p>
      <p>Esta lección ayuda a ordenar el uso de la IA, pero no reemplaza el asesoramiento de un abogado o un contador ante un caso concreto.</p>
      <p>Por ejemplo, la empleada de Gabriel le pasó a una IA una planilla con los teléfonos de los clientes para "ordenarla". Después de eso, Gabriel escribió las 8 reglas y las pegó al lado de la caja.</p>` },
  ],
  practica: [
    "Pedile a la IA un dato de una ley o un impuesto, buscalo en la fuente oficial y anotá si coincidía.",
    "Revisá 5 imágenes que uses o quieras usar en tu negocio y anotá cuáles cumplen la tabla de la lección.",
    "Escribí las reglas de uso de IA de tu negocio, con al menos 6 puntos, y anotá con quién las compartiste.",
  ],
  recursos: [
    { t: "AAIP (Argentina): guía para usar la IA de manera responsable (PDF)", url: "https://argentina.gob.ar/sites/default/files/aaip-argentina-guia_para_usar_la_ia_de_manera_responsable.pdf" },
    { t: "AAIP (Argentina): protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "¿Qué quiere decir que una IA \"alucina\"?", opciones: ["Que se apaga","Que se pone creativa a propósito para engañar","Que produce algo falso que suena verdadero","Que habla de sueños"], correcta: 2, explicacion: "Completa con lo que le parece probable. \"A propósito\" tienta, pero no tiene intención." },
    { q: "La IA te cita una ley para un tema de tu negocio. ¿Qué hacés?", opciones: ["Pedís la fuente y la verificás en un sitio oficial o con un profesional","La aplicás directo","La copiás en tu web","La compartís con tus clientes"], correcta: 0, explicacion: "Puede inventar o estar vieja. Aplicarla directo tienta, pero puede no existir." },
    { q: "Querés saber los montos actuales del monotributo. ¿Dónde los confirmás?", opciones: ["En la respuesta de la IA","En un video viejo","En un comentario de redes","En la página oficial o con tu contador"], correcta: 3, explicacion: "Los montos cambian seguido. La IA tienta por rápida, pero puede tener valores de otro año." },
    { q: "Si la IA te escribe un aviso de empleo que, sin querer, pide \"chicos jóvenes\", ¿qué problema es?", opciones: ["Ninguno","Un sesgo: deja afuera a personas sin motivo","Un error de ortografía","Un problema de formato"], correcta: 1, explicacion: "Los sesgos se cuelan en los textos. \"Ninguno\" tienta porque no es ofensivo a simple vista, pero discrimina." },
    { q: "Querés mostrar tu producto en una publicación. ¿Qué imagen usás?", opciones: ["Una imagen generada que se ve mejor que el producto","La foto del producto de otra marca","Una foto real de tu producto","Una de internet sin permiso"], correcta: 2, explicacion: "Mostrar otra cosa engaña al cliente. La generada tienta porque luce, pero no es lo que vendés." },
    { q: "Querés usar el personaje de una marca famosa en tu cartel. ¿Qué pasa?", opciones: ["No corresponde: es de otra marca","Está bien si lo hace la IA","Está bien si es chiquito","Está bien en las historias"], correcta: 0, explicacion: "Los derechos no cambian porque lo haga la IA. \"Si lo hace la IA\" tienta, pero sigue siendo de otro." },
    { q: "Si publicás una imagen creada con IA en una promoción, ¿qué conviene aclarar?", opciones: ["Nada","Que es una foto real","El precio de la IA","\"Imagen ilustrativa\" o \"creada con IA\""], correcta: 3, explicacion: "Aclarar evita confusiones. \"Que es real\" tienta para que guste más, pero engaña." },
    { q: "Querés usar la cara de un cliente en una publicidad, modificada con IA. ¿Qué necesitás?", opciones: ["Nada, está modificada","Su permiso","Que no se note","Pagarle a la IA"], correcta: 1, explicacion: "Las personas tienen derecho sobre su imagen. \"Está modificada\" tienta, pero sigue siendo su cara." },
    { q: "En tu negocio usan IA tres personas. ¿Qué conviene?", opciones: ["Que cada uno haga lo que quiera","Prohibirla sin explicar","Escribir reglas de uso simples que todos conozcan","Un manual de cien páginas"], correcta: 2, explicacion: "Pocas reglas claras evitan errores caros. Cien páginas tientan por completas, pero nadie las lee." },
    { q: "¿Cuál de estas reglas es buena para un negocio?", opciones: ["\"Todo texto para clientes lo revisa una persona antes de salir\"","\"La IA responde todo sola\"","\"Cargamos la planilla de clientes completa\"","\"Las promesas las decide la IA\""], correcta: 0, explicacion: "La revisión humana evita errores en lo que sale. Las otras tientan por cómodas, pero son riesgosas." },
    { q: "Una empleada cargó la planilla de clientes con teléfonos en una IA. ¿Qué hacés?", opciones: ["Nada","Cargás más planillas","Publicás la planilla","Escribís y explicás las reglas, y revisás cómo cuidar esos datos"], correcta: 3, explicacion: "Es el momento de poner reglas. \"Nada\" tienta para no molestar, pero se va a repetir." },
    { q: "¿Cada cuánto conviene revisar las reglas de uso de IA?", opciones: ["Nunca","Cada tres meses, o cuando pase algo","Todos los días","Una vez cada diez años"], correcta: 1, explicacion: "Las herramientas cambian rápido. \"Nunca\" tienta porque ya están escritas, pero quedan viejas." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: un proceso con IA en tu negocio",
  nivel: "Avanzado",
  objetivos: [
    "Elegir un proceso real de tu negocio y medirlo antes de cambiarlo",
    "Escribir el nuevo procedimiento con IA, paso a paso, con los controles",
    "Evaluar el resultado con números y con la rúbrica",
  ],
  lecciones: [
    { titulo: "Elegir y medir el proceso", html: `
      <p class="idea">El proyecto final es mejorar <strong>un proceso real</strong> de tu negocio con IA: elegirlo, medirlo antes, cambiarlo y medirlo después.</p>
      <table>
        <tr><th>Procesos que suelen funcionar</th><th>Qué se mide</th></tr>
        <tr><td>Contestar las preguntas frecuentes</td><td>Minutos por día contestando mensajes</td></tr>
        <tr><td>Armar presupuestos</td><td>Minutos por presupuesto y errores</td></tr>
        <tr><td>Publicar en redes</td><td>Minutos por publicación y publicaciones por semana</td></tr>
        <tr><td>Escribir descripciones de productos</td><td>Minutos por producto</td></tr>
      </table>
      <pre><code>Ficha de partida:
Proceso:          ...
Veces por semana: ...
Minutos cada vez: ...
Total semanal:    ... minutos
Errores típicos:  ...
Meta:             bajar a ... minutos sin más errores</code></pre>
      <p><strong>Una semana de medición alcanza</strong> para tener el "antes". Sin ese número, después no podés decir si mejoró.</p>
      <p>Por ejemplo, Gabriel eligió los presupuestos: 15 por semana, 20 minutos cada uno, 300 minutos. Su meta: bajar a 150 sin más errores.</p>` },
    { titulo: "El procedimiento escrito", html: `
      <p class="idea">El cambio se escribe como un <strong>procedimiento</strong>: los pasos en orden, qué hace la IA, qué hace una persona y dónde están los controles. Así lo puede hacer cualquiera del equipo.</p>
      <pre><code>Procedimiento: presupuestos con IA (ferretería)
1. El cliente pide un presupuesto (anotamos qué necesita, sin sus datos personales).
2. Pegamos en la IA la guía de presupuestos y la lista de productos con precios de hoy.
3. Le pedimos la tabla: producto, cantidad, precio, subtotal.
4. Pasamos la tabla a la planilla, que hace las cuentas.
5. CONTROL: una persona revisa precios, cantidades y total.
6. Agregamos los datos del cliente y lo mandamos.
7. Anotamos los minutos que llevó.</code></pre>
      <table>
        <tr><th>Un buen procedimiento</th><th>Por qué</th></tr>
        <tr><td>Dice qué datos se cargan y cuáles no</td><td>Cuida la privacidad</td></tr>
        <tr><td>Tiene al menos un control de una persona</td><td>Atrapa los errores de la IA</td></tr>
        <tr><td>Guarda el pedido que funciona (la plantilla)</td><td>No se empieza de cero cada vez</td></tr>
        <tr><td>Anota el tiempo</td><td>Para medir el después</td></tr>
      </table>
      <p>Por ejemplo, la empleada de Gabriel usó el procedimiento escrito sin que él estuviera: el presupuesto salió bien porque el paso 5 la hizo revisar el total.</p>` },
    { titulo: "Medir el después y la rúbrica", html: `
      <p class="idea">Después de dos semanas con el procedimiento nuevo, <strong>comparás con el antes</strong> y evaluás el proyecto con la rúbrica.</p>
      <pre><code>Resultado de Gabriel (dos semanas):
Antes:   300 min por semana, 1 error cada tanto
Después: 135 min por semana, 2 errores encontrados en el control
Ahorro:  165 min por semana
Decisión: sigue, con el control del paso 5 obligatorio.</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Medición</td><td>Antes y después, con números</td><td>Solo uno de los dos</td><td>Sin medir</td></tr>
        <tr><td>Procedimiento</td><td>Escrito, con pasos y controles</td><td>Escrito sin controles</td><td>No está escrito</td></tr>
        <tr><td>Privacidad</td><td>No se cargaron datos personales</td><td>Se cargó alguno por error y se corrigió</td><td>Se cargaron datos personales</td></tr>
        <tr><td>Revisión humana</td><td>Todo lo que sale a clientes lo revisa una persona</td><td>A veces</td><td>Nunca</td></tr>
        <tr><td>Resultado</td><td>Ahorra tiempo sin más errores</td><td>Ahorra tiempo con algún error más</td><td>No ahorra o empeora</td></tr>
      </table>
      <pre><code>Máximo: 10 puntos
9 o 10 → el proceso queda; elegí el siguiente
6 a 8  → ajustá lo que dio 0 o 1 y repetí dos semanas
0 a 5  → volvé a elegir: quizás no era un buen proceso para la IA</code></pre>
      <p><strong>Si "Privacidad" da 0</strong>, el proyecto no está aprobado aunque ahorre tiempo: los datos de tus clientes valen más que unos minutos.</p>
      <p>Por ejemplo, Gabriel sacó 9: perdió un punto en Resultado porque al principio hubo un error más. Ajustó la guía de presupuestos y en la tercera semana no hubo ninguno.</p>` },
  ],
  practica: [
    "Completá la ficha de partida de un proceso real de tu negocio y anotá los minutos medidos durante una semana.",
    "Escribí el procedimiento con IA de ese proceso, con al menos un control de una persona, y anotá cuántos pasos tiene.",
    "Aplicá el procedimiento dos semanas, anotá los minutos y errores del después, y calculá tu puntaje con la rúbrica sobre 10.",
  ],
  recursos: [
    { t: "AAIP (Argentina): guía para usar la IA de manera responsable (PDF)", url: "https://argentina.gob.ar/sites/default/files/aaip-argentina-guia_para_usar_la_ia_de_manera_responsable.pdf" },
    { t: "Curso de este sitio: Prompts desde cero (cómo pedirle bien a la IA)", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "Curso de este sitio: Excel y planillas", url: "https://pkeios.github.io/EiaLearning/excel/" },
  ],
  quiz: [
    { q: "¿Qué necesitás antes de cambiar un proceso con IA?", opciones: ["Comprar el plan más caro","Contratar a alguien","Medir cuánto tarda hoy, para comparar después","Nada"], correcta: 2, explicacion: "Sin el antes no sabés si mejoró. El plan caro tienta, pero no te dice nada del proceso." },
    { q: "Hacés 15 presupuestos por semana de 20 minutos. ¿Cuál es tu número de partida?", opciones: ["300 minutos por semana","35 minutos","15 minutos","20 minutos"], correcta: 0, explicacion: "15 × 20 = 300. 35 tienta si sumás en vez de multiplicar." },
    { q: "¿Cuánto tiempo conviene medir el \"antes\"?", opciones: ["Un día suelto","Un año","No hace falta","Una semana alcanza"], correcta: 3, explicacion: "Una semana muestra el ritmo normal. Un día tienta por rápido, pero puede ser un día raro." },
    { q: "¿Qué tiene que tener un buen procedimiento con IA?", opciones: ["Solo el nombre de la herramienta","Pasos en orden, qué datos se cargan y al menos un control de una persona","Que la IA haga todo sola","Nada escrito"], correcta: 1, explicacion: "Así lo puede seguir cualquiera sin errores. \"Que la IA haga todo\" tienta, pero no hay quién controle." },
    { q: "En tu procedimiento, ¿quién hace las cuentas del presupuesto?", opciones: ["La IA de chat, sin control","El cliente","La planilla, y una persona las controla","Nadie"], correcta: 2, explicacion: "La planilla calcula y la persona revisa. La IA sola tienta por rápida, pero puede saltear renglones." },
    { q: "¿Por qué conviene guardar el pedido (prompt) que funciona?", opciones: ["Para no empezar de cero cada vez y que todos lo usen igual","Para venderlo","No conviene","Para borrarlo después"], correcta: 0, explicacion: "La plantilla ahorra tiempo y unifica. \"No conviene\" tienta por simple, pero perdés lo que aprendiste." },
    { q: "Antes: 300 minutos. Después: 135. ¿Cuánto ahorraste por semana?", opciones: ["435 minutos","135 minutos","300 minutos","165 minutos"], correcta: 3, explicacion: "300 − 135 = 165. 435 tienta si sumás en vez de restar." },
    { q: "Si el control encontró 2 errores en dos semanas, ¿qué te dice?", opciones: ["Que hay que sacarlo","Que el control sirve y hay que mantenerlo","Que la IA es perfecta","Nada"], correcta: 1, explicacion: "El control atrapó errores antes de que lleguen al cliente. Sacarlo tienta para ahorrar tiempo, pero esos errores llegarían." },
    { q: "Tu proyecto ahorra mucho tiempo, pero se cargaron datos personales de clientes. ¿Está aprobado?", opciones: ["Sí, ahorra tiempo","Sí, si nadie se entera","No: si Privacidad da 0, no se aprueba","Depende del ahorro"], correcta: 2, explicacion: "Los datos de los clientes valen más que unos minutos. \"Si nadie se entera\" tienta, pero es justamente el problema." },
    { q: "Sacaste 7 sobre 10. ¿Qué hacés?", opciones: ["Ajustás lo que dio 0 o 1 y repetís dos semanas","Abandonás la IA","Lo das por terminado","Cambiás la rúbrica"], correcta: 0, explicacion: "Entre 6 y 8 se ajusta. Abandonar tienta, pero estás cerca." },
    { q: "Si sacaste 4 sobre 10, ¿qué conviene?", opciones: ["Insistir igual sin cambios","Pagar un plan más caro","Cargar más datos personales","Volver a elegir: quizás ese proceso no era bueno para la IA"], correcta: 3, explicacion: "Un puntaje bajo dice que el proceso no encaja. Pagar más tienta, pero no cambia el problema." },
    { q: "Si sacaste 9, ¿qué sigue?", opciones: ["Repetir el mismo para siempre","El proceso queda y elegís el siguiente","Pasar todo a la IA de una vez","Dejar de medir"], correcta: 1, explicacion: "Uno por vez y medido. Pasar todo de una tienta por el éxito, pero es lo que la lección pide evitar." },
  ],
},
];
