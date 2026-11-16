// Temario del curso "Emprender desde cero". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js emprender y node tools/metodologia.js emprender
window.TEMARIO = [
{
  id: "empezar",
  icono: "🌱",
  titulo: "Antes de emprender",
  nivel: "Básico",
  objetivos: [
    "Decidir cuánto tiempo y cuánta plata podés arriesgar sin poner en peligro tu casa",
    "Distinguir los mitos de emprender de lo que realmente funciona",
    "Elegir una forma de empezar chica y de bajo riesgo",
  ],
  lecciones: [
    { titulo: "Emprender es probar", html: `
      <p class="idea">Emprender no es tener una idea genial y apostarlo todo. Es <strong>probar con poco riesgo</strong> si hay gente dispuesta a pagar por algo, aprender de lo que pasa y ajustar.</p>
      <table>
        <tr><th>Mito</th><th>Lo que funciona</th></tr>
        <tr><td>"Necesito una idea que nadie tuvo"</td><td>Casi todo ya existe: alcanza con hacerlo mejor para un grupo de clientes concreto</td></tr>
        <tr><td>"Primero armo todo y después vendo"</td><td>Primero probás si alguien compra, después invertís</td></tr>
        <tr><td>"Necesito mucha plata para empezar"</td><td>Muchos emprendimientos empiezan con casi nada y crecen con lo que venden</td></tr>
        <tr><td>"Si es bueno, se vende solo"</td><td>Hay que salir a buscar a los clientes, sobre todo al principio</td></tr>
      </table>
      <p><strong>Emprender también es un trabajo:</strong> tiene horas, cansancio y meses flojos. Conviene empezar sabiéndolo.</p>
      <p>En todo el curso seguimos a <strong>Carla</strong>, que quiere vender viandas caseras saludables a gente que trabaja en oficinas de su barrio. Los números son inventados, pero las cuentas cierran.</p>
      <p>Por ejemplo, Carla no alquila un local ni compra una heladera industrial: primero cocina en su casa 10 viandas y prueba si las vende.</p>` },
    { titulo: "Tu punto de partida", html: `
      <p class="idea">Antes de empezar, hacé un inventario honesto de lo que tenés: tiempo, plata que podés arriesgar, habilidades y gente que te puede ayudar.</p>
      <table>
        <tr><th>Recurso</th><th>Pregunta</th><th>Carla</th></tr>
        <tr><td>Tiempo</td><td>¿Cuántas horas por semana podés dedicarle?</td><td>15 horas, a la mañana temprano y los domingos</td></tr>
        <tr><td>Plata que podés arriesgar</td><td>¿Cuánto podés perder sin afectar el alquiler, la comida ni las deudas?</td><td>$ 200.000</td></tr>
        <tr><td>Habilidades</td><td>¿Qué sabés hacer bien?</td><td>Cocinar, organizarse</td></tr>
        <tr><td>Lo que te falta</td><td>¿Qué no sabés?</td><td>Vender, llevar números</td></tr>
        <tr><td>Red</td><td>¿Quién te puede ayudar o comprar primero?</td><td>Compañeros de un trabajo anterior, vecinos</td></tr>
      </table>
      <p><strong>La plata que arriesgás tiene que ser plata que podés perder.</strong> No uses el fondo de emergencia, ni la plata del alquiler, ni pidas un préstamo caro para probar una idea.</p>
      <p>El curso "Finanzas personales con números" de este sitio te ayuda a saber cuánto te sobra cada mes.</p>
      <p>Por ejemplo, Carla sigue con su trabajo de medio tiempo mientras prueba las viandas: si el emprendimiento tarda en arrancar, igual paga sus cuentas.</p>` },
    { titulo: "Empezar chico", html: `
      <p class="idea">La forma más segura de emprender es empezar chico, en paralelo con otro ingreso si podés, y crecer a medida que vendés.</p>
      <table>
        <tr><th>Forma de empezar</th><th>Ventaja</th><th>Riesgo</th></tr>
        <tr><td>A tiempo parcial, sin dejar tu trabajo</td><td>Seguís cobrando mientras probás</td><td>Cansancio, menos horas</td></tr>
        <tr><td>Por encargo (producís solo lo que te piden)</td><td>No te queda mercadería sin vender</td><td>Ventas más lentas al principio</td></tr>
        <tr><td>Revender antes que fabricar</td><td>Aprendés del cliente sin invertir en producción</td><td>Margen más chico</td></tr>
        <tr><td>Dejar todo e invertir fuerte</td><td>Más tiempo para el proyecto</td><td>Si no funciona, perdés mucho</td></tr>
      </table>
      <pre><code>Regla práctica:
Primero probá con lo que tenés.
Invertí más solo cuando ya vendiste
y sabés que hay gente que vuelve a comprar.</code></pre>
      <p>Por ejemplo, Carla empieza por encargo: los domingos toma pedidos para la semana y cocina solo esas viandas, así no tira comida.</p>` },
  ],
  practica: [
    "Completá la tabla de tu punto de partida con tus datos: horas por semana, plata que podés arriesgar, habilidades, lo que te falta y tu red.",
    "Elegí uno de los 4 mitos que creías y anotá qué vas a hacer distinto.",
    "Anotá qué forma de empezar chico te conviene y por qué, con un número: cuántas horas o cuánta plata.",
  ],
  recursos: [
    { t: "The Lean Startup: los principios (en inglés)", url: "https://theleanstartup.com/principles" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
  ],
  quiz: [
    { q: "Si tenés una idea, ¿qué es lo primero que conviene hacer?", opciones: ["Invertir todos tus ahorros","Alquilar un local","Probar con poco riesgo si alguien está dispuesto a pagar","Esperar a tener la idea perfecta"], correcta: 2, explicacion: "Probar primero evita perder plata. Alquilar un local tienta para sentirlo real, pero es un gasto fijo antes de saber si vende." },
    { q: "Si pensás \"necesito una idea que nadie tuvo\", ¿qué te contesta el curso?", opciones: ["Que casi todo existe: alcanza con hacerlo mejor para un grupo concreto","Que tenés razón","Que sin eso no se puede emprender","Que hay que copiar todo igual"], correcta: 0, explicacion: "La diferencia está en el cliente y la ejecución. \"Tenés razón\" tienta, pero frena a mucha gente sin motivo." },
    { q: "Si creés que un buen producto se vende solo, ¿qué pasa?", opciones: ["Se vende igual","Te va mejor","No cambia nada","Te quedás esperando: al principio hay que salir a buscar clientes"], correcta: 3, explicacion: "Nadie compra lo que no conoce. \"Se vende igual\" tienta, pero sin difusión no llegan los clientes." },
    { q: "Si tenés $ 200.000 ahorrados y $ 150.000 son del alquiler, ¿cuánto podés arriesgar?", opciones: ["$ 200.000","Como mucho $ 50.000, lo que podés perder sin afectar lo básico","$ 150.000","Todo y un préstamo más"], correcta: 1, explicacion: "Lo del alquiler no se arriesga. $ 200.000 tienta por ser todo lo ahorrado, pero pondría en riesgo tu casa." },
    { q: "Si querés probar una idea, ¿conviene pedir un préstamo caro?", opciones: ["Sí, así arrancás más grande","Sí, siempre","No: se prueba con plata que podés perder","Sí, si la idea es buena"], correcta: 2, explicacion: "Si la prueba falla, la deuda queda. \"Arrancás más grande\" tienta, pero agranda la pérdida." },
    { q: "Si tenés un trabajo y querés emprender, ¿qué es más seguro al principio?", opciones: ["Empezar a tiempo parcial sin dejar el trabajo","Renunciar mañana","No dormir","Esperar a jubilarte"], correcta: 0, explicacion: "Seguís cobrando mientras probás. Renunciar tienta para dedicarte de lleno, pero si no funciona, quedás sin ingresos." },
    { q: "Si querés saber qué te falta para emprender, ¿qué hacés?", opciones: ["Nada, se aprende en el camino","Copiar a otro emprendedor","Comprar un curso caro","Un inventario honesto de tiempo, plata, habilidades, lo que no sabés y tu red"], correcta: 3, explicacion: "Saber qué te falta te deja buscar ayuda. \"Se aprende en el camino\" tienta, pero te sorprende cuando ya invertiste." },
    { q: "Si no querés que te sobre mercadería, ¿qué forma de empezar conviene?", opciones: ["Fabricar mucho de entrada","Por encargo: producís solo lo que te piden","Comprar stock grande para que salga más barato","Invertir fuerte"], correcta: 1, explicacion: "Por encargo no queda stock. El stock grande tienta por el precio, pero si no vende, perdés." },
    { q: "Si querés aprender del cliente sin invertir en producción, ¿qué podés hacer?", opciones: ["Fabricar 1.000 unidades","Comprar máquinas","Revender antes de fabricar","Esperar"], correcta: 2, explicacion: "Revender te muestra qué compran. Fabricar mucho tienta para tener margen, pero arriesgás antes de saber." },
    { q: "Si ya vendiste y la gente vuelve a comprar, ¿qué podés hacer?", opciones: ["Invertir un poco más para crecer","Seguir sin cambiar nada nunca","Dejar de vender","Gastar todo lo ganado"], correcta: 0, explicacion: "Invertir después de comprobar es más seguro. Gastarlo todo tienta, pero frena el crecimiento." },
    { q: "Si emprender te parece \"ser tu propio jefe y trabajar poco\", ¿qué tenés en cuenta?", opciones: ["Que es así siempre","Que se gana mucho desde el primer mes","Que no hay riesgo","Que también es un trabajo, con horas, cansancio y meses flojos"], correcta: 3, explicacion: "Saberlo evita frustraciones. \"Se gana mucho desde el primer mes\" tienta, pero casi nunca pasa." },
    { q: "Si Carla quiere vender viandas, ¿cómo empieza según el curso?", opciones: ["Alquilando un local","Cocinando 10 viandas en su casa para probar si las vende","Comprando una heladera industrial","Contratando empleados"], correcta: 1, explicacion: "Empezar chico prueba la idea. La heladera tienta para hacerlo \"en serio\", pero es inversión antes de saber." },
  ],
},
{
  id: "cliente",
  icono: "🔍",
  titulo: "El problema y el cliente",
  nivel: "Básico",
  objetivos: [
    "Describir el problema que resolvés y a quién, en una frase",
    "Hacer entrevistas a posibles clientes sin venderles",
    "Mapear la competencia y las alternativas que ya usan",
  ],
  lecciones: [
    { titulo: "Primero el problema", video: {"id":"a732oiYiux4","t":"Paso 1: definir el problema · Innpulsa Colombia (1:45)"}, html: `
      <p class="idea">La gente no compra productos: compra soluciones a sus problemas. Antes de pensar qué vas a vender, definí <strong>qué problema resolvés y para quién</strong>.</p>
      <pre><code>Frase del problema:
[Quién] necesita [qué] porque [por qué],
pero hoy [qué le pasa].

Carla:
Las personas que trabajan en oficinas del barrio necesitan
almorzar sano y rápido porque tienen 40 minutos,
pero hoy comen sándwiches o gastan mucho en delivery.</code></pre>
      <table>
        <tr><th>Cliente vago</th><th>Cliente concreto</th></tr>
        <tr><td>"Todo el mundo"</td><td>"Empleados de oficinas a 10 cuadras, de 25 a 45 años"</td></tr>
        <tr><td>"Gente que come"</td><td>"Quienes quieren comer sano y no tienen tiempo de cocinar"</td></tr>
      </table>
      <p><strong>Si tu cliente es "todo el mundo", no es nadie:</strong> no sabés dónde encontrarlo ni qué decirle.</p>
      <p>Por ejemplo, "viandas para todos" no le dice nada a nadie; "almuerzo sano en tu escritorio a las 13, para oficinas del barrio" le habla directo a quien lo necesita.</p>` },
    { titulo: "Entrevistas sin vender", html: `
      <p class="idea">Hablar con posibles clientes es la forma más barata de aprender. La clave es <strong>preguntar por lo que hacen, no por lo que harían</strong>, y no venderles tu idea.</p>
      <table>
        <tr><th>Pregunta que engaña</th><th>Pregunta que sirve</th></tr>
        <tr><td>"¿Comprarías viandas sanas?"</td><td>"¿Qué almorzaste ayer? ¿Cómo lo conseguiste?"</td></tr>
        <tr><td>"¿Te parece buena mi idea?"</td><td>"¿Qué es lo más difícil de almorzar en el trabajo?"</td></tr>
        <tr><td>"¿Cuánto pagarías?"</td><td>"¿Cuánto gastaste en almuerzos la semana pasada?"</td></tr>
      </table>
      <p><strong>Por qué engañan:</strong> la gente es amable y dice "sí, compraría" para no desanimarte. Lo que hizo ayer es un dato; lo que dice que haría, una opinión.</p>
      <pre><code>Guía para 10 entrevistas de 15 minutos:
1. Contá que estás investigando, no vendiendo.
2. Preguntá por el pasado: qué hace hoy, cuánto gasta, qué le molesta.
3. Escuchá más de lo que hablás.
4. Anotá frases textuales.
5. Al final: "¿Conocés a alguien más con este problema?"</code></pre>
      <p>Por ejemplo, si 7 de 10 personas cuentan que gastan $ 8.000 por día en delivery y se quejan de que llega frío, Carla tiene un dato mucho más fuerte que 10 "sí, compraría".</p>` },
    { titulo: "Competencia y alternativas", html: `
      <p class="idea">Siempre hay competencia, aunque no veas un negocio igual al tuyo: tu cliente ya resuelve su problema de alguna forma. Esas formas son tus <strong>alternativas</strong>.</p>
      <table>
        <tr><th>Alternativa</th><th>Precio</th><th>Lo bueno</th><th>Lo malo</th></tr>
        <tr><td>Delivery de comida rápida</td><td>$ 8.000</td><td>Rápido</td><td>Poco sano, a veces llega frío</td></tr>
        <tr><td>Sándwich del kiosco</td><td>$ 4.000</td><td>Barato, cerca</td><td>Siempre lo mismo</td></tr>
        <tr><td>Traer comida de casa</td><td>$ 2.500</td><td>Barato y sano</td><td>Hay que cocinar la noche anterior</td></tr>
        <tr><td>Otra persona que vende viandas</td><td>$ 6.500</td><td>Casero</td><td>Hay que encargar con 2 días</td></tr>
      </table>
      <p><strong>Tu lugar</strong> está en lo que las alternativas hacen mal y a tu cliente le importa: en el ejemplo, sano, caliente y sin tener que cocinar.</p>
      <p><strong>No te asustes si hay competencia:</strong> muestra que hay gente que paga por resolver ese problema. Preocupate si no hay nadie y nadie lo resuelve: puede que el problema no importe.</p>
      <p>Por ejemplo, la tabla le muestra a Carla que, si cobra entre $ 4.000 y $ 8.000, está en el rango que su cliente ya paga.</p>` },
  ],
  practica: [
    "Escribí la frase del problema de tu idea con quién, qué, por qué y qué le pasa hoy. Anotá si tiene las 4 partes.",
    "Hacé al menos 5 entrevistas con preguntas sobre el pasado y anotá 3 frases textuales que te sorprendieron.",
    "Armá la tabla de alternativas con al menos 3 filas, con precio, lo bueno y lo malo de cada una.",
  ],
  recursos: [
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): investigar el mercado y la competencia (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
    { t: "The Lean Startup: los principios (en inglés)", url: "https://theleanstartup.com/principles" },
  ],
  quiz: [
    { q: "Si querés emprender, ¿qué definís antes que el producto?", opciones: ["El logo","El nombre","Qué problema resolvés y para quién","El color del local"], correcta: 2, explicacion: "El problema guía todo lo demás. El logo tienta por ser lo más visible, pero no dice si alguien te va a comprar." },
    { q: "Si decís que tu cliente es \"todo el mundo\", ¿qué problema tenés?", opciones: ["No sabés dónde encontrarlo ni qué decirle","Ninguno, más clientes es mejor","Que vas a vender demasiado","Que es muy específico"], correcta: 0, explicacion: "Un cliente concreto se encuentra y se convence. \"Más clientes es mejor\" tienta, pero en la práctica no le hablás a nadie." },
    { q: "Si querés saber si alguien compraría tus viandas, ¿qué pregunta sirve?", opciones: ["\"¿Comprarías viandas sanas?\"","\"¿Te gusta mi idea?\"","\"¿No es genial?\"","\"¿Qué almorzaste ayer? ¿Cómo lo conseguiste?\""], correcta: 3, explicacion: "El pasado muestra lo que hace de verdad. \"¿Comprarías?\" tienta por directa, pero la gente dice que sí por amabilidad." },
    { q: "Si en una entrevista la persona dice \"sí, compraría\", ¿qué vale más?", opciones: ["Su \"sí, compraría\"","Lo que hizo ayer y cuánto gastó","Su opinión sobre tu logo","Que le caigas bien"], correcta: 1, explicacion: "Lo que hizo es un dato. El \"sí\" tienta porque entusiasma, pero es una opinión amable." },
    { q: "Si durante la entrevista empezás a explicar tu idea con entusiasmo, ¿qué pasa?", opciones: ["Aprendés más","La convencés y ya es cliente","La persona te dice lo que querés oír y aprendés menos","Nada"], correcta: 2, explicacion: "Vender sesga las respuestas. \"La convencés\" tienta, pero la entrevista es para aprender, no para vender." },
    { q: "Si querés saber cuánto pagaría alguien, ¿qué preguntás?", opciones: ["\"¿Cuánto gastaste en almuerzos la semana pasada?\"","\"¿Cuánto pagarías?\"","\"¿Pagarías $ 10.000?\"","\"¿Te parece caro?\""], correcta: 0, explicacion: "El gasto real es un dato. \"¿Cuánto pagarías?\" tienta, pero la gente adivina o dice menos." },
    { q: "Si terminás una entrevista, ¿qué preguntás al final?", opciones: ["\"¿Me comprás ya?\"","\"¿Te gustó?\"","Nada","\"¿Conocés a alguien más con este problema?\""], correcta: 3, explicacion: "Así conseguís más entrevistas. \"¿Me comprás?\" tienta, pero cambia la conversación a venta." },
    { q: "Si 7 de 10 personas cuentan que gastan $ 8.000 en delivery y se quejan de que llega frío, ¿qué tenés?", opciones: ["Nada útil","Un dato fuerte de un problema real y de lo que pagan","Una opinión","Una venta segura"], correcta: 1, explicacion: "Es lo que hacen y pagan. \"Venta segura\" tienta, pero todavía no probaste si te compran a vos." },
    { q: "Si no ves ningún negocio igual al tuyo, ¿no tenés competencia?", opciones: ["No, el mercado es tuyo","No, es una idea única","Sí tenés: las alternativas que tu cliente usa hoy","Solo si hay un local igual enfrente"], correcta: 2, explicacion: "Tu cliente ya resuelve el problema de algún modo. \"El mercado es tuyo\" tienta, pero compite con el delivery y el sándwich." },
    { q: "Si tus alternativas cobran entre $ 4.000 y $ 8.000, ¿qué te dice?", opciones: ["El rango de precio que tu cliente ya está dispuesto a pagar","Que tenés que cobrar $ 20.000","Que tenés que regalarlo","Nada"], correcta: 0, explicacion: "Las alternativas marcan referencias de precio. $ 20.000 tienta si pensás que lo tuyo es mejor, pero el cliente compara." },
    { q: "Si hay varios negocios que venden viandas en tu barrio, ¿qué concluís?", opciones: ["Que no tenés que emprender","Que vas a fracasar","Que hay que bajar el precio a la mitad","Que hay gente que paga por resolver ese problema; tenés que encontrar tu diferencia"], correcta: 3, explicacion: "La competencia muestra demanda. \"No emprender\" tienta por miedo, pero el desafío es diferenciarte." },
    { q: "Si nadie resuelve un problema y nadie lo busca, ¿qué puede pasar?", opciones: ["Que es una mina de oro segura","Que el problema no le importe a nadie lo suficiente como para pagar","Que vas a ser millonario","Nada"], correcta: 1, explicacion: "Sin interés no hay ventas. \"Mina de oro\" tienta, pero conviene confirmarlo con entrevistas." },
  ],
},
{
  id: "propuesta",
  icono: "💎",
  titulo: "Tu propuesta de valor",
  nivel: "Intermedio",
  objetivos: [
    "Escribir tu propuesta de valor en una frase",
    "Elegir en qué te diferenciás y en qué no",
    "Presentar tu emprendimiento en 30 segundos",
  ],
  lecciones: [
    { titulo: "Por qué te comprarían a vos", video: {"id":"yvgNSHqb4_M","t":"Qué es la propuesta de valor, cómo crearla y ejemplos · Modelo Canvas (4:45)"}, html: `
      <p class="idea">La <strong>propuesta de valor</strong> es la razón por la que un cliente te elegiría a vos y no a las alternativas. Se escribe en una frase, desde lo que gana el cliente.</p>
      <pre><code>Fórmula:
Ayudo a [cliente] a [lograr algo o sacarse un problema]
con [tu solución], a diferencia de [alternativa].

Carla:
Ayudo a quienes trabajan en oficinas del barrio a almorzar sano
sin cocinar, con viandas caseras que llegan calientes a las 13,
a diferencia del delivery, que es caro y llega frío.</code></pre>
      <table>
        <tr><th>Habla del producto</th><th>Habla del cliente</th></tr>
        <tr><td>"Viandas con ingredientes de calidad"</td><td>"Almorzás sano sin cocinar"</td></tr>
        <tr><td>"Tenemos 3 menús"</td><td>"No comés lo mismo toda la semana"</td></tr>
        <tr><td>"Entrega a domicilio"</td><td>"Llega caliente a tu escritorio a las 13"</td></tr>
      </table>
      <p><strong>Usá las palabras de tus clientes:</strong> las frases textuales de las entrevistas suelen ser la mejor propuesta de valor.</p>
      <p>Por ejemplo, si en las entrevistas varias personas dijeron "llega frío", decir "llega caliente" le habla directo a ese problema.</p>` },
    { titulo: "Diferenciarte sin hacer todo", html: `
      <p class="idea">No podés ser el más barato, el más rápido y el de mejor calidad a la vez. Diferenciarte es <strong>elegir</strong> en qué vas a ser mejor y en qué vas a ser igual o peor.</p>
      <table>
        <tr><th>Atributo</th><th>Delivery</th><th>Kiosco</th><th>Carla</th></tr>
        <tr><td>Precio</td><td>Alto</td><td>Bajo</td><td>Medio</td></tr>
        <tr><td>Sano</td><td>Bajo</td><td>Bajo</td><td>Alto ✔</td></tr>
        <tr><td>Llega caliente</td><td>Medio</td><td>No aplica</td><td>Alto ✔</td></tr>
        <tr><td>Variedad</td><td>Alta</td><td>Baja</td><td>Media</td></tr>
        <tr><td>Pedir a último momento</td><td>Sí</td><td>Sí</td><td>No (encargo del día anterior)</td></tr>
      </table>
      <p><strong>Lo que no hacés también es una decisión:</strong> Carla no acepta pedidos de último momento, y gracias a eso puede cocinar justo lo necesario.</p>
      <p><strong>Ser el más barato es peligroso para un emprendimiento chico:</strong> siempre aparece alguien más barato, y con margen chico no te queda para crecer.</p>
      <p>Por ejemplo, con la tabla, Carla sabe que en su publicidad tiene que hablar de "sano" y "caliente", no de "barato".</p>` },
    { titulo: "Contarlo en 30 segundos", video: {"id":"2b3xG_YjgvI","t":"Elevator pitch: tenés 20 segundos · eduCaixa (3:01)"}, html: `
      <p class="idea">Un <strong>pitch</strong> es una presentación corta de tu emprendimiento, para cuando alguien te pregunta "¿y vos qué hacés?". Tiene que entenderse en 30 segundos.</p>
      <pre><code>Estructura (4 partes):
1. El problema:   "¿Viste que en la oficina almorzar sano es difícil?"
2. La solución:   "Hago viandas caseras que llegan calientes a las 13."
3. La prueba:     "Ya tengo 12 clientes fijos en 3 oficinas."
4. El pedido:     "¿Te paso el menú de la semana?"</code></pre>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Hablar del problema del otro</td><td>Empezar con tu historia de vida</td></tr>
        <tr><td>Un dato concreto (clientes, ventas)</td><td>"Somos los mejores"</td></tr>
        <tr><td>Terminar con un pedido o una pregunta</td><td>Terminar sin decir qué querés</td></tr>
        <tr><td>Practicarlo en voz alta</td><td>Leerlo</td></tr>
      </table>
      <p><strong>Adaptalo a quién te escucha:</strong> a un cliente le pedís que pruebe; a un proveedor, condiciones; a un conocido, que te recomiende.</p>
      <p>El curso "Hablar en público sin miedo" de este sitio tiene más práctica para presentarte.</p>
      <p>Por ejemplo, en un cumpleaños, el pitch de Carla en 30 segundos puede terminar con alguien pidiéndole el menú para su oficina.</p>` },
  ],
  practica: [
    "Escribí tu propuesta de valor con la fórmula. Leésela a 3 personas y anotá qué entendió cada una.",
    "Armá la tabla de diferenciación con 4 atributos y 2 alternativas, y marcá en cuáles vas a ser mejor. Anotá uno en el que elegís no competir.",
    "Escribí tu pitch con las 4 partes, practicalo en voz alta y anotá cuántos segundos dura (meta: 30 o menos).",
  ],
  recursos: [
    { t: "Strategyzer: el lienzo del modelo de negocio (en inglés)", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
    { t: "The Lean Startup: los principios (en inglés)", url: "https://theleanstartup.com/principles" },
  ],
  quiz: [
    { q: "Si querés explicar por qué un cliente te elegiría, ¿qué escribís?", opciones: ["Tu historia de vida","La lista de ingredientes","Tu propuesta de valor","Tu CV"], correcta: 2, explicacion: "La propuesta de valor responde eso. La historia tienta por emotiva, pero no dice qué gana el cliente." },
    { q: "Si tu propuesta dice \"viandas con ingredientes de calidad\", ¿qué le falta?", opciones: ["Hablar de lo que gana el cliente, como \"almorzás sano sin cocinar\"","Más adjetivos","El precio en dólares","Nada"], correcta: 0, explicacion: "Lo que vende es el beneficio para el cliente. Más adjetivos tienta, pero sigue hablando del producto." },
    { q: "Si en las entrevistas varias personas dijeron \"el delivery llega frío\", ¿cómo lo usás?", opciones: ["No lo usás","Lo escondés","Hablás mal del delivery por nombre","En tu propuesta: \"llega caliente a tu escritorio\""], correcta: 3, explicacion: "Las palabras del cliente conectan. Hablar mal de un competidor tienta, pero queda mal y no suma." },
    { q: "Si querés ser el más barato, el más rápido y el mejor a la vez, ¿qué pasa?", opciones: ["Es fácil","Es casi imposible: hay que elegir en qué ser mejor","Es lo normal","Ganás seguro"], correcta: 1, explicacion: "Diferenciarse es elegir. \"Es fácil\" tienta, pero los recursos no alcanzan para todo." },
    { q: "Si Carla decide no aceptar pedidos de último momento, ¿qué gana?", opciones: ["Nada, solo pierde clientes","Más trabajo","Cocinar justo lo necesario y no tirar comida","Más desperdicio"], correcta: 2, explicacion: "Lo que no hacés también es una decisión. \"Solo pierde\" tienta, pero ordena su producción." },
    { q: "Si un emprendimiento chico compite solo por ser el más barato, ¿qué riesgo tiene?", opciones: ["Siempre aparece alguien más barato y con margen chico no queda para crecer","Ninguno","Que vende demasiado","Que gana demasiado"], correcta: 0, explicacion: "Competir por precio deja poco margen. \"Ninguno\" tienta porque atrae clientes, pero no se sostiene." },
    { q: "Si tu tabla muestra que ganás en \"sano\" y \"caliente\", ¿de qué hablás en tu publicidad?", opciones: ["De que es el más barato","De todo un poco","De tu logo","De que es sano y llega caliente"], correcta: 3, explicacion: "Se comunica la diferencia. \"El más barato\" tienta, pero no es donde ganás." },
    { q: "Si alguien te pregunta \"¿y vos qué hacés?\", ¿qué usás?", opciones: ["Tu historia completa de 10 minutos","Tu pitch de 30 segundos","Un folleto de 4 páginas","Nada, cambiás de tema"], correcta: 1, explicacion: "El pitch es corto y claro. La historia completa tienta por contarlo todo, pero la otra persona se pierde." },
    { q: "Si armás tu pitch, ¿con qué empezás?", opciones: ["Con tu historia de vida","Con el precio","Con el problema del otro","Con \"somos los mejores\""], correcta: 2, explicacion: "El problema engancha al que escucha. \"Somos los mejores\" tienta, pero no prueba nada." },
    { q: "Si querés que tu pitch sea creíble, ¿qué incluís?", opciones: ["Un dato concreto, como \"ya tengo 12 clientes fijos\"","\"Somos los mejores\"","Muchos adjetivos","Nada"], correcta: 0, explicacion: "Un dato demuestra. \"Somos los mejores\" tienta por seguro, pero cualquiera lo puede decir." },
    { q: "Si terminás tu pitch, ¿cómo lo cerrás?", opciones: ["Sin decir nada más","Con \"bueno, eso\"","Con tu número de CBU","Con un pedido o una pregunta: \"¿Te paso el menú?\""], correcta: 3, explicacion: "Cerrar con un pedido abre el siguiente paso. Terminar sin pedir tienta por timidez, pero se pierde la oportunidad." },
    { q: "Si querés que tu pitch salga natural, ¿qué hacés?", opciones: ["Lo leés del celular","Lo practicás en voz alta y medís el tiempo","Lo improvisás cada vez","Lo memorizás palabra por palabra sin entenderlo"], correcta: 1, explicacion: "Practicarlo lo hace natural. Improvisar tienta por espontáneo, pero se alarga y se pierde." },
  ],
},
{
  id: "validar",
  icono: "🧪",
  titulo: "Validar antes de invertir",
  nivel: "Intermedio",
  objetivos: [
    "Diseñar un producto mínimo para probar tu idea con poco gasto",
    "Fijar una meta medible para tu prueba",
    "Decidir con los resultados si seguir, ajustar o abandonar",
  ],
  lecciones: [
    { titulo: "El producto mínimo", video: {"id":"LCrMWe09EQY","t":"Qué es un producto mínimo viable · Emprende Aprendiendo (6:21)"}, html: `
      <p class="idea">Un <strong>producto mínimo viable</strong> (PMV) es la versión más simple de tu idea que alguien puede comprar o usar de verdad. Sirve para aprender rápido y gastando poco.</p>
      <table>
        <tr><th>Idea completa</th><th>Producto mínimo</th></tr>
        <tr><td>Marca, local, app de pedidos, 10 menús</td><td>1 menú por día, pedidos por WhatsApp, entrega a pie en 2 oficinas</td></tr>
        <tr><td>Tienda en línea con 50 productos</td><td>5 productos en una publicación con fotos y precio</td></tr>
        <tr><td>Academia de clases con plataforma</td><td>3 clases de prueba por videollamada</td></tr>
      </table>
      <p><strong>Mínimo no quiere decir mal hecho:</strong> lo que entregás tiene que ser bueno. Lo mínimo es lo que lo rodea: el envase, la app, la marca, la variedad.</p>
      <p><strong>Si te da vergüenza mostrarlo, probablemente ya está para probar.</strong> Lo vas a mejorar con lo que aprendas.</p>
      <p>Por ejemplo, Carla no necesita una página web para saber si las oficinas le compran viandas: necesita una semana de viandas ricas y un número de WhatsApp.</p>` },
    { titulo: "Una prueba con meta", video: {"id":"_SJhGYlho9s","t":"Cómo validar tu idea de negocio: 3 métodos fáciles y gratis · Ana Ivars (10:47)"}, html: `
      <p class="idea">Una prueba sin meta no te dice nada: cualquier resultado parece bueno. Antes de empezar, fijá <strong>qué tiene que pasar, en cuánto tiempo</strong>, para que la idea valga la pena.</p>
      <pre><code>PRUEBA DE CARLA (2 semanas)
Qué hago:   ofrezco viandas en 2 oficinas, con pedido del día anterior
Meta:       vender al menos 40 viandas en 2 semanas
            y que al menos 5 personas compren 3 veces o más

Resultado:  48 viandas vendidas
            7 personas compraron 3 veces o más
            → la prueba se cumplió</code></pre>
      <table>
        <tr><th>Tipo de prueba</th><th>Qué mide</th></tr>
        <tr><td>Preventa (cobrar antes de producir)</td><td>Si pagan de verdad, no solo si dicen que sí</td></tr>
        <tr><td>Muestra gratis y después venta</td><td>Si lo prueban y vuelven a comprar</td></tr>
        <tr><td>Publicación con precio</td><td>Cuántos preguntan y cuántos compran</td></tr>
      </table>
      <pre><code>Tasa de conversión = compradores / personas contactadas × 100
Carla escribió a 60 personas y compraron 12: 12 / 60 × 100 = 20%</code></pre>
      <p><strong>La señal más fuerte es que vuelvan a comprar:</strong> comprar una vez puede ser curiosidad; volver es que les sirve.</p>
      <p>Por ejemplo, si Carla hubiera vendido 15 viandas y nadie hubiera repetido, la meta le diría que algo hay que cambiar antes de invertir.</p>` },
    { titulo: "Seguir, ajustar o abandonar", html: `
      <p class="idea">Con los resultados de la prueba, tomás una de tres decisiones. Abandonar una idea que no funciona también es un buen resultado: te ahorra plata y tiempo.</p>
      <table>
        <tr><th>Resultado</th><th>Decisión</th><th>Ejemplo</th></tr>
        <tr><td>Cumpliste la meta y vuelven a comprar</td><td>Seguir: crecer de a poco</td><td>Sumar una tercera oficina</td></tr>
        <tr><td>Interés, pero no se cumple la meta</td><td>Ajustar una cosa y volver a probar</td><td>Cambiar el precio, el menú o el horario</td></tr>
        <tr><td>Poco interés después de 2 o 3 ajustes</td><td>Abandonar o cambiar de idea</td><td>Probar viandas para otro tipo de cliente</td></tr>
      </table>
      <p><strong>Ajustá de a una cosa por vez:</strong> si cambiás precio, menú y horario juntos, no sabés qué funcionó.</p>
      <p><strong>Pedí opinión a quienes compraron y a quienes no:</strong> "¿Qué te haría volver a comprar?" y "¿Por qué no pediste esta semana?".</p>
      <pre><code>Registro de pruebas:
Prueba 1: 2 oficinas, $ 7.000 → 25 viandas, 2 repiten (no cumple)
Ajuste:   bajar a $ 6.000
Prueba 2: 2 oficinas, $ 6.000 → 48 viandas, 7 repiten (cumple)</code></pre>
      <p>Por ejemplo, el registro le muestra a Carla que el precio era la traba, porque fue lo único que cambió entre las dos pruebas.</p>` },
  ],
  practica: [
    "Describí el producto mínimo de tu idea en 3 líneas: qué ofrecés, cómo lo piden y cómo lo entregás. Anotá cuánto cuesta armarlo.",
    "Escribí una prueba con meta: qué hacés, en cuánto tiempo y qué número tiene que pasar. Anotá la meta con su número y su plazo.",
    "Hacé la prueba (o simulala) y anotá los resultados, la tasa de conversión y tu decisión: seguir, ajustar o abandonar.",
  ],
  recursos: [
    { t: "The Lean Startup: los principios (en inglés)", url: "https://theleanstartup.com/principles" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): investigar el mercado y la competencia (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
  ],
  quiz: [
    { q: "Si querés probar tu idea gastando poco, ¿qué armás?", opciones: ["La versión completa con marca y app","Un local con todo","Un producto mínimo viable: la versión más simple que alguien puede comprar","Nada, esperás"], correcta: 2, explicacion: "El PMV prueba rápido y barato. La versión completa tienta por profesional, pero gastás antes de saber." },
    { q: "Si tu producto mínimo es una vianda, ¿qué tiene que ser bueno sí o sí?", opciones: ["La vianda: lo mínimo es lo que la rodea, no la calidad","El envase de lujo","La marca","La página web"], correcta: 0, explicacion: "Lo que el cliente compra tiene que ser bueno. El envase tienta por imagen, pero no es lo que se prueba." },
    { q: "Si te da vergüenza mostrar tu primera versión, ¿qué hacés?", opciones: ["Esperar a que sea perfecta","No mostrarla nunca","Gastar más antes de mostrarla","Probarla igual: la vas a mejorar con lo que aprendas"], correcta: 3, explicacion: "Mostrarla temprano enseña. Esperar la perfección tienta, pero gastás tiempo sin datos." },
    { q: "Si hacés una prueba sin meta, ¿qué problema tenés?", opciones: ["Ninguno","Cualquier resultado parece bueno y no sabés qué decidir","Que vendés menos","Que trabajás más"], correcta: 1, explicacion: "La meta dice si se cumplió. \"Ninguno\" tienta por simple, pero te engañás con cualquier número." },
    { q: "Si la meta era 40 viandas en 2 semanas y vendiste 48, ¿qué pasó?", opciones: ["No se cumplió","Sobraron 8 viandas","Se cumplió la meta de ventas","Hay que abandonar"], correcta: 2, explicacion: "48 es más que 40. \"Sobraron 8\" tienta por la resta, pero son ventas de más, no sobrantes." },
    { q: "Si escribiste a 60 personas y compraron 12, ¿cuál es la tasa de conversión?", opciones: ["20%","12%","60%","5%"], correcta: 0, explicacion: "12 / 60 × 100 = 20. El 12% tienta porque es el número de compradores, pero hay que dividir." },
    { q: "Si querés saber si pagan de verdad y no solo si dicen que sí, ¿qué prueba hacés?", opciones: ["Una encuesta de \"¿comprarías?\"","Preguntar a tu familia","Nada","Una preventa: cobrar antes de producir"], correcta: 3, explicacion: "Pagar es la prueba real. La encuesta tienta por fácil, pero mide opiniones." },
    { q: "Si muchas personas compran una vez y nadie repite, ¿qué te dice?", opciones: ["Que es un éxito","Que puede ser curiosidad: algo hay que cambiar antes de invertir","Que hay que invertir fuerte ya","Nada"], correcta: 1, explicacion: "Volver a comprar es la señal fuerte. \"Es un éxito\" tienta por las ventas, pero sin repetición no se sostiene." },
    { q: "Si cumpliste la meta y la gente vuelve a comprar, ¿qué decidís?", opciones: ["Abandonar","Invertir todo de golpe","Seguir y crecer de a poco","Cambiar todo"], correcta: 2, explicacion: "Crecer de a poco cuida lo logrado. Invertir todo tienta por el entusiasmo, pero aumenta el riesgo." },
    { q: "Si hay interés, pero no se cumple la meta, ¿qué hacés?", opciones: ["Ajustás una cosa y volvés a probar","Abandonás enseguida","Cambiás todo a la vez","Seguís igual sin cambiar nada"], correcta: 0, explicacion: "Ajustar de a una muestra qué funciona. Cambiar todo tienta por apuro, pero no sabés qué sirvió." },
    { q: "Si después de 3 ajustes sigue habiendo poco interés, ¿qué hacés?", opciones: ["Invertís más para forzarlo","Pedís un préstamo","Seguís igual un año más","Abandonás o cambiás de idea: también es un buen resultado"], correcta: 3, explicacion: "Abandonar a tiempo ahorra plata. Invertir más tienta para no \"perder\" lo hecho, pero agranda la pérdida." },
    { q: "Si entre la prueba 1 y la 2 solo cambiaste el precio y mejoraron las ventas, ¿qué concluís?", opciones: ["Que fue suerte","Que el precio era la traba","Que el menú era el problema","No se puede saber"], correcta: 1, explicacion: "Fue lo único que cambió. \"Fue suerte\" tienta, pero el registro muestra la causa." },
  ],
},
{
  id: "modelo",
  icono: "🧩",
  titulo: "El modelo en una página y los números básicos",
  nivel: "Intermedio",
  objetivos: [
    "Resumir tu emprendimiento en un lienzo de modelo de negocio",
    "Calcular el margen por unidad y cuántas ventas recuperan la inversión",
    "Armar una lista de inversión inicial chica y realista",
  ],
  lecciones: [
    { titulo: "El lienzo del modelo de negocio", video: {"id":"7B8bGB0CZVI","t":"Modelo Canvas explicado paso a paso con ejemplo · Judit Català (9:16)"}, html: `
      <p class="idea">El <strong>lienzo del modelo de negocio</strong> (o Canvas) resume en una página cómo funciona tu emprendimiento: a quién le vendés, qué le ofrecés, cómo te llega la plata y qué necesitás.</p>
      <table>
        <tr><th>Bloque</th><th>Carla</th></tr>
        <tr><td>Clientes</td><td>Empleados de oficinas del barrio que quieren comer sano</td></tr>
        <tr><td>Propuesta de valor</td><td>Almuerzo sano y caliente sin cocinar</td></tr>
        <tr><td>Canales (cómo llega)</td><td>WhatsApp para pedidos, entrega a pie</td></tr>
        <tr><td>Relación con clientes</td><td>Menú semanal por WhatsApp, trato personal</td></tr>
        <tr><td>Ingresos</td><td>Venta por vianda, pago por transferencia</td></tr>
        <tr><td>Recursos clave</td><td>Su cocina, recipientes, bolsas térmicas</td></tr>
        <tr><td>Actividades clave</td><td>Comprar, cocinar, entregar</td></tr>
        <tr><td>Socios clave</td><td>Verdulería del barrio con buen precio</td></tr>
        <tr><td>Costos</td><td>Insumos, envases, gas y luz de la cocina</td></tr>
      </table>
      <p><strong>Es un borrador, no un contrato:</strong> se llena con lápiz (o en una planilla) y se cambia con cada cosa que aprendés.</p>
      <p>Por ejemplo, si Carla descubre que las oficinas prefieren pagar a fin de mes, cambia el bloque de ingresos y revisa si le alcanza la plata mientras tanto.</p>` },
    { titulo: "Margen y recuperar la inversión", html: `
      <p class="idea">Dos cuentas simples te dicen si el emprendimiento puede funcionar: cuánto te deja cada venta (el <strong>margen</strong>) y cuántas ventas necesitás para recuperar lo que invertiste.</p>
      <pre><code>Margen por unidad = precio - costo de cada unidad

Vianda: precio 6.000 · costo (insumos + envase) 3.500
Margen: 6.000 - 3.500 = 2.500 por vianda

Ventas para recuperar la inversión inicial:
inversión / margen = 190.000 / 2.500 = 76 viandas
Vendiendo 24 por semana: 76 / 24 = 3,2 → unas 4 semanas</code></pre>
      <table>
        <tr><th>Y además</th><th>Cuenta</th></tr>
        <tr><td>Para ganar $ 400.000 por mes</td><td>400.000 / 2.500 = 160 viandas por mes (unas 40 por semana)</td></tr>
        <tr><td>Tu tiempo</td><td>Si cocinás 15 horas por semana, ¿cuánto te queda por hora?</td></tr>
      </table>
      <p><strong>Contá todos los costos de cada unidad:</strong> insumos, envase, el gas del horno, la comisión del cobro. Si te olvidás de alguno, el margen real es más chico.</p>
      <p>El curso "Números de un pequeño negocio" de este sitio sigue con costos fijos, punto de equilibrio y flujo de caja, cuando ya vendés.</p>
      <p>Por ejemplo, con 24 viandas por semana Carla recupera la inversión en un mes, pero todavía no tiene un sueldo: para eso necesita casi el doble de ventas.</p>` },
    { titulo: "La inversión inicial", html: `
      <p class="idea">La <strong>inversión inicial</strong> es lo que tenés que gastar antes de empezar a vender. Para un emprendimiento que recién prueba, tiene que ser chica y estar en una lista, con cada precio buscado de verdad.</p>
      <pre><code>Inversión inicial de Carla:
20 recipientes reutilizables         60.000
2 bolsas térmicas                    40.000
Insumos de la primera semana         90.000
Total                               190.000

Lo que NO compra todavía:
heladera nueva, local, moto, cartelería</code></pre>
      <table>
        <tr><th>Preguntá por cada gasto</th><th>Por qué</th></tr>
        <tr><td>¿Lo necesito para la primera venta?</td><td>Si no, puede esperar</td></tr>
        <tr><td>¿Lo tengo, lo puedo pedir prestado o comprar usado?</td><td>Reduce lo que arriesgás</td></tr>
        <tr><td>¿Pedí 2 o 3 precios?</td><td>Los precios cambian mucho de un lugar a otro</td></tr>
      </table>
      <p><strong>Mantenela dentro de la plata que podés arriesgar</strong> (lo que calculaste en el módulo "Antes de emprender").</p>
      <p>Por ejemplo, la lista le muestra a Carla que con $ 190.000 puede empezar; la heladera nueva queda para cuando las ventas la justifiquen.</p>` },
  ],
  practica: [
    "Completá el lienzo de tu emprendimiento con los 9 bloques, en una hoja o planilla. Anotá qué bloque te costó más.",
    "Calculá tu margen por unidad y cuántas ventas recuperan tu inversión inicial. Anotá en cuántas semanas, según lo que estimás vender.",
    "Armá tu lista de inversión inicial con precios reales de al menos 2 lugares, y anotá qué cosas dejás para después.",
  ],
  recursos: [
    { t: "Strategyzer: el lienzo del modelo de negocio (en inglés)", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): escribir el plan de negocio (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" },
  ],
  quiz: [
    { q: "Si querés resumir en una página cómo funciona tu emprendimiento, ¿qué usás?", opciones: ["Un plan de 80 páginas","Solo la lista de precios","El lienzo del modelo de negocio (Canvas)","El logo"], correcta: 2, explicacion: "El Canvas resume todo en una hoja. El plan de 80 páginas tienta por completo, pero nadie lo actualiza." },
    { q: "Si en el lienzo ponés \"WhatsApp para pedidos, entrega a pie\", ¿en qué bloque va?", opciones: ["Canales: cómo le llega tu propuesta al cliente","Costos","Socios clave","Ingresos"], correcta: 0, explicacion: "Los canales son cómo llegás al cliente. Ingresos tienta porque hay pedidos, pero ahí va cómo te pagan." },
    { q: "Si descubrís algo nuevo de tus clientes, ¿qué hacés con el lienzo?", opciones: ["Nada, ya está hecho","Lo tirás","Lo dejás para fin de año","Lo cambiás: es un borrador que se actualiza"], correcta: 3, explicacion: "El lienzo cambia con lo que aprendés. \"Ya está hecho\" tienta, pero queda viejo." },
    { q: "Si una vianda se vende a $ 6.000 y cuesta $ 3.500, ¿cuál es el margen?", opciones: ["$ 9.500","$ 2.500","$ 6.000","$ 3.500"], correcta: 1, explicacion: "6.000 - 3.500 = 2.500. $ 6.000 tienta porque es lo que cobrás, pero parte es costo." },
    { q: "Si invertiste $ 190.000 y cada vianda deja $ 2.500, ¿cuántas tenés que vender para recuperarlo?", opciones: ["32 viandas","190 viandas","76 viandas","7,6 viandas"], correcta: 2, explicacion: "190.000 / 2.500 = 76. 32 tienta si dividís por 6.000, el precio, en vez del margen." },
    { q: "Si vendés 24 viandas por semana, ¿en cuánto recuperás 76?", opciones: ["En unas 4 semanas (76 / 24 = 3,2)","En 1 semana","En 76 semanas","En 3 días"], correcta: 0, explicacion: "76 / 24 = 3,2, o sea 4 semanas. 76 semanas tienta si dividís por 1." },
    { q: "Si querés ganar $ 400.000 por mes con un margen de $ 2.500, ¿cuántas viandas necesitás?", opciones: ["40 por mes","400 por mes","16 por mes","160 por mes"], correcta: 3, explicacion: "400.000 / 2.500 = 160. 40 tienta porque es por semana, no por mes." },
    { q: "Si calculás el margen y te olvidás del gas del horno y del envase, ¿qué pasa?", opciones: ["Es más grande","El margen real es más chico de lo que creés","No cambia","Se compensa solo"], correcta: 1, explicacion: "Cada costo olvidado achica el margen. \"No cambia\" tienta si son montos chicos, pero se suman en cada unidad." },
    { q: "Si estás armando la inversión inicial, ¿qué preguntás por cada gasto?", opciones: ["Si es lo más lindo","Si lo tiene la competencia","Si lo necesitás para la primera venta y si lo podés conseguir usado o prestado","Nada, comprás todo"], correcta: 2, explicacion: "Preguntar achica el riesgo. \"Lo tiene la competencia\" tienta, pero ellos ya venden." },
    { q: "Si Carla quiere comprar una heladera nueva antes de vender la primera vianda, ¿qué le dice el curso?", opciones: ["Que espere a que las ventas la justifiquen","Que la compre ya","Que compre dos","Que pida un préstamo para comprarla"], correcta: 0, explicacion: "Primero vender, después invertir. Comprarla ya tienta para hacerlo \"en serio\", pero es riesgo antes de saber." },
    { q: "Si tu inversión inicial supera la plata que podés arriesgar, ¿qué hacés?", opciones: ["Pedís un préstamo caro","Usás la plata del alquiler","La hacés igual","La achicás: sacás lo que no hace falta para la primera venta"], correcta: 3, explicacion: "La inversión entra en lo que podés perder. El préstamo tienta para no achicar, pero pone en riesgo tu casa." },
    { q: "Si recuperaste la inversión, ¿ya tenés un sueldo?", opciones: ["Sí, siempre","No necesariamente: hay que calcular cuánto te queda por mes y por hora","Sí, si vendiste mucho","No importa"], correcta: 1, explicacion: "Recuperar no es ganar un sueldo. \"Sí, siempre\" tienta por el logro, pero puede quedarte poco por hora." },
  ],
},
{
  id: "vender",
  icono: "🤝",
  titulo: "Los primeros clientes y trabajar en regla",
  nivel: "Avanzado",
  objetivos: [
    "Conseguir tus primeros 10 clientes con canales que no cuestan plata",
    "Cobrar, entregar y pedir opinión y recomendación",
    "Dar los primeros pasos para trabajar en regla",
  ],
  lecciones: [
    { titulo: "Los primeros 10 clientes", video: {"id":"39tC5tkNlu4","t":"Cómo consigo a mis primeros clientes · Judit Català (8:21)"}, html: `
      <p class="idea">Los primeros clientes casi nunca llegan solos: hay que ir a buscarlos, uno por uno. Empezá por la gente que ya te conoce y por los lugares donde está tu cliente.</p>
      <table>
        <tr><th>Canal</th><th>Cómo</th><th>Costo</th></tr>
        <tr><td>Tu red</td><td>Mensaje personal a 20 conocidos que encajan con tu cliente</td><td>Gratis</td></tr>
        <tr><td>Donde está tu cliente</td><td>Ir a las oficinas, ferias o grupos donde está</td><td>Tu tiempo</td></tr>
        <tr><td>Muestras</td><td>Dar a probar a quienes pueden recomendar</td><td>Algunas unidades</td></tr>
        <tr><td>Redes y grupos del barrio</td><td>Publicación con foto, precio y cómo pedir</td><td>Gratis</td></tr>
        <tr><td>Recomendaciones</td><td>Pedirle a cada cliente que te recomiende</td><td>Gratis o un descuento</td></tr>
      </table>
      <pre><code>Mensaje personal (no masivo):
"Hola Laura, ¿cómo va? Empecé a hacer viandas caseras para oficinas:
llegan calientes a las 13 y cuestan $ 6.000. Esta semana hay
pollo al horno con verduras. ¿Querés probar una el jueves?"</code></pre>
      <p><strong>Un mensaje personal funciona mucho mejor que uno masivo:</strong> nombrá a la persona y hacele una propuesta concreta.</p>
      <p>Los cursos "Vender sin ser pesado" y "Atención al cliente, en persona y por chat" de este sitio siguen con técnicas de venta y atención.</p>
      <p>Por ejemplo, Carla consiguió sus primeros 12 clientes con 3 cosas: mensajes a excompañeros de trabajo, una bandeja de muestras en 2 oficinas y pedir a cada cliente que la recomiende.</p>` },
    { titulo: "Cobrar, entregar y escuchar", html: `
      <p class="idea">La primera venta es el comienzo de la relación. Cumplir lo prometido, cobrar con claridad y escuchar al cliente hace que vuelva y te recomiende.</p>
      <table>
        <tr><th>Momento</th><th>Qué cuidar</th></tr>
        <tr><td>Antes</td><td>Precio, qué incluye, cuándo y cómo se entrega, cómo se paga, por escrito</td></tr>
        <tr><td>Cobro</td><td>Medios simples (transferencia, billetera); en encargos, una seña</td></tr>
        <tr><td>Entrega</td><td>A la hora prometida; si hay un problema, avisar antes</td></tr>
        <tr><td>Después</td><td>Preguntar qué le pareció y qué cambiaría</td></tr>
      </table>
      <pre><code>3 preguntas después de la primera compra:
1. ¿Qué te gustó?
2. ¿Qué cambiarías?
3. ¿Conocés a alguien a quien le pueda servir?</code></pre>
      <p><strong>Anotá a cada cliente:</strong> nombre, qué compró, cuándo y qué dijo. Con 10 clientes ya ves patrones.</p>
      <p><strong>Una queja es información:</strong> respondé rápido, sin discutir, y solucioná. Un cliente con una queja bien resuelta suele volver.</p>
      <p>Por ejemplo, si 3 clientes dicen "las porciones son chicas", Carla tiene un dato concreto para ajustar, y les puede avisar que lo cambió.</p>` },
    { titulo: "Trabajar en regla desde el principio", html: `
      <p class="idea">Cuando empezás a vender de forma regular, conviene estar en regla: te permite facturar, tener obra social y aportes, y vender a empresas que piden factura.</p>
      <table>
        <tr><th>Tema</th><th>Qué saber</th></tr>
        <tr><td>Monotributo</td><td>El régimen más simple para empezar: una cuota mensual que incluye impuestos, jubilación y obra social</td></tr>
        <tr><td>Factura</td><td>Como monotributista emitís factura C electrónica</td></tr>
        <tr><td>Rubro con habilitación</td><td>Algunos rubros, como la venta de alimentos, piden habilitaciones del municipio y cursos de manipulación de alimentos</td></tr>
        <tr><td>Marca</td><td>Si el nombre te importa, se puede registrar en el INPI para que nadie lo use</td></tr>
        <tr><td>Datos de clientes</td><td>Usalos solo para lo que te autorizaron (pedidos, menú) y no los compartas</td></tr>
      </table>
      <p><strong>Averiguá en tu municipio</strong> qué pide tu rubro: varía mucho de un lugar a otro.</p>
      <p>El curso "Monotributo, facturación e impuestos para independientes" de este sitio explica paso a paso cómo inscribirte y facturar.</p>
      <p class="aviso">Este curso no reemplaza el asesoramiento de un contador ni las normas de tu municipio. Verificá siempre en las fuentes oficiales.</p>
      <p>Por ejemplo, para vender viandas a una empresa grande, Carla va a necesitar factura y, según su municipio, una habilitación para elaborar alimentos.</p>` },
  ],
  practica: [
    "Escribí 10 mensajes personales a conocidos que encajan con tu cliente, con propuesta concreta. Anotá cuántos respondieron y cuántos compraron.",
    "Hacé las 3 preguntas a tus primeros clientes (o a quienes probaron una muestra) y anotá las respuestas en una tabla.",
    "Averiguá en tu municipio qué habilitaciones pide tu rubro y anotá cuáles son y dónde se tramitan.",
  ],
  recursos: [
    { t: "ARCA: portal del monotributo", url: "https://www.arca.gob.ar/monotributo/" },
    { t: "INPI: Instituto Nacional de la Propiedad Industrial (registro de marcas)", url: "https://www.argentina.gob.ar/inpi" },
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
  ],
  quiz: [
    { q: "Si recién empezás, ¿dónde buscás tus primeros clientes?", opciones: ["Esperás a que lleguen solos","Solo en publicidad paga","En tu red y en los lugares donde está tu cliente","En otra ciudad"], correcta: 2, explicacion: "Los primeros se buscan uno por uno. Esperar tienta, pero nadie compra lo que no conoce." },
    { q: "Si querés ofrecer tus viandas a un conocido, ¿qué mensaje funciona mejor?", opciones: ["Uno personal, con su nombre y una propuesta concreta","Uno masivo igual para todos","Solo un sticker","Un audio de 5 minutos"], correcta: 0, explicacion: "Lo personal genera respuesta. El masivo tienta por rápido, pero casi nadie contesta." },
    { q: "Si querés que prueben tu producto quienes pueden recomendarte, ¿qué hacés?", opciones: ["Les cobrás el doble","No les ofrecés nada","Les mandás el CBU","Les das muestras"], correcta: 3, explicacion: "Probar convence más que contar. Cobrar el doble tienta para recuperar, pero no lo prueban." },
    { q: "Si un cliente quedó contento, ¿qué le pedís?", opciones: ["Nada","Que te recomiende a alguien a quien le pueda servir","Que te pague más","Que no le cuente a nadie"], correcta: 1, explicacion: "Las recomendaciones son el canal más barato. \"Nada\" tienta por timidez, pero se pierde el mejor canal." },
    { q: "Si vas a vender por encargo, ¿qué acordás antes y por escrito?", opciones: ["Nada, se arregla en el momento","Solo el día","Precio, qué incluye, cuándo se entrega y cómo se paga","Solo el precio"], correcta: 2, explicacion: "Acordarlo evita malentendidos. \"Se arregla en el momento\" tienta por confianza, pero genera discusiones." },
    { q: "Si hacés un encargo grande, ¿qué conviene pedir?", opciones: ["Una seña","Nada","El pago dentro de 6 meses","Que pague otro"], correcta: 0, explicacion: "La seña cubre parte del costo si el cliente cancela. \"Nada\" tienta para no espantar, pero arriesgás los insumos." },
    { q: "Si vas a llegar tarde con una entrega, ¿qué hacés?", opciones: ["Llegás sin decir nada","No entregás","Le echás la culpa al tránsito después","Avisás antes al cliente"], correcta: 3, explicacion: "Avisar cuida la confianza. Llegar sin decir nada tienta para no molestar, pero el cliente se enoja más." },
    { q: "Si querés aprender de tus primeros clientes, ¿qué les preguntás?", opciones: ["Si te quieren","Qué les gustó, qué cambiarían y a quién le puede servir","Si te pagan más","Nada"], correcta: 1, explicacion: "Las 3 preguntas dan ideas y clientes. \"Nada\" tienta por vergüenza, pero perdés información clave." },
    { q: "Si 3 clientes dicen que las porciones son chicas, ¿qué hacés?", opciones: ["Discutís con ellos","Lo ignorás","Lo tomás como un dato, ajustás y les avisás que lo cambiaste","Subís el precio"], correcta: 2, explicacion: "Una queja repetida es información. Discutir tienta para defender tu producto, pero perdés clientes." },
    { q: "Si empezás a vender seguido y querés facturar, ¿qué régimen suele ser el más simple?", opciones: ["El monotributo","Ninguno, no hace falta","Una sociedad anónima","Facturar con la CUIT de otra persona"], correcta: 0, explicacion: "El monotributo es el más simple. Usar la CUIT de otro tienta, pero esos ingresos quedan a su nombre." },
    { q: "Si vas a vender alimentos, ¿qué averiguás en tu municipio?", opciones: ["Nada, se vende igual","Solo el horario de la feria","El color del cartel","Qué habilitaciones y cursos de manipulación de alimentos pide"], correcta: 3, explicacion: "Los alimentos tienen requisitos. \"Se vende igual\" tienta, pero arriesgás multas y la salud de tus clientes." },
    { q: "Si no querés que otro use el nombre de tu emprendimiento, ¿dónde lo registrás?", opciones: ["En ARCA","En el INPI","En el municipio","En redes sociales"], correcta: 1, explicacion: "El INPI registra marcas. Redes tienta porque ahí aparece el nombre, pero no da protección legal." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu plan de lanzamiento",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de lanzamiento de 30 días para tu emprendimiento",
    "Evaluarlo con una rúbrica y corregir lo que falte",
    "Definir qué medir cada semana para decidir los próximos pasos",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>plan de lanzamiento de 30 días</strong>: lo que vas a hacer en el primer mes para probar tu idea con clientes reales, gastando poco.</p>
      <table>
        <tr><th>Parte del plan</th><th>Módulo</th></tr>
        <tr><td>Tu punto de partida y la plata que podés arriesgar</td><td>Antes de emprender</td></tr>
        <tr><td>Frase del problema, entrevistas y tabla de alternativas</td><td>El problema y el cliente</td></tr>
        <tr><td>Propuesta de valor y pitch</td><td>Tu propuesta de valor</td></tr>
        <tr><td>Producto mínimo y prueba con meta</td><td>Validar antes de invertir</td></tr>
        <tr><td>Lienzo, margen e inversión inicial</td><td>El modelo y los números</td></tr>
        <tr><td>Cómo vas a conseguir los primeros 10 clientes y qué trámites necesitás</td><td>Los primeros clientes</td></tr>
      </table>
      <pre><code>Calendario de 30 días (ejemplo):
Semana 1: 10 entrevistas · tabla de alternativas · propuesta de valor
Semana 2: producto mínimo · 20 mensajes personales · muestras
Semana 3: prueba con meta · registro de ventas y opiniones
Semana 4: decisión: seguir, ajustar o abandonar · próximos pasos</code></pre>
      <p>Por ejemplo, el plan de Carla entra en 2 páginas y le dice qué hacer cada semana sin gastar más de $ 190.000.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu plan.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Cliente y problema</td><td>Cliente concreto y al menos 5 entrevistas sobre el pasado</td><td>Cliente concreto sin entrevistas</td><td>"Todo el mundo"</td></tr>
        <tr><td>Propuesta</td><td>Propuesta desde el cliente y diferencia clara</td><td>Habla del producto</td><td>No hay</td></tr>
        <tr><td>Prueba</td><td>Producto mínimo y meta con número y plazo</td><td>Sin meta medible</td><td>No hay prueba</td></tr>
        <tr><td>Números</td><td>Margen, ventas para recuperar y lista de inversión</td><td>Falta uno</td><td>No hay</td></tr>
        <tr><td>Primeros clientes</td><td>Canales concretos y trámites averiguados</td><td>Solo uno de los dos</td><td>No hay</td></tr>
        <tr><td>Riesgo de la plata</td><td>La inversión entra en lo que podés perder, sin deudas caras</td><td>—</td><td>Usa plata que no puede perder o una deuda cara antes de validar</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Riesgo de la plata" tiene 0, el plan no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un plan muy bien armado que se financia con la plata del alquiler saca 0 en riesgo: si la prueba falla, se pone en juego la casa.</p>` },
    { titulo: "Medir cada semana", html: `
      <p class="idea">Un emprendimiento que arranca se maneja con pocos números, mirados cada semana. Te dicen si vas bien y qué ajustar.</p>
      <table>
        <tr><th>Número</th><th>Cómo se calcula</th><th>Carla, semana 3</th></tr>
        <tr><td>Ventas</td><td>Unidades vendidas en la semana</td><td>24 viandas</td></tr>
        <tr><td>Clientes que repiten</td><td>Cuántos compraron más de una vez</td><td>7</td></tr>
        <tr><td>Conversión</td><td>Compradores / contactados × 100</td><td>12 / 60 = 20%</td></tr>
        <tr><td>Margen de la semana</td><td>Ventas × margen por unidad</td><td>24 × 2.500 = 60.000</td></tr>
        <tr><td>Horas trabajadas</td><td>Las que le dedicaste</td><td>15</td></tr>
        <tr><td>Margen por hora</td><td>Margen de la semana / horas</td><td>60.000 / 15 = 4.000</td></tr>
      </table>
      <p><strong>El margen por hora</strong> te muestra si el esfuerzo vale la pena y si conviene subir el precio o ser más eficiente.</p>
      <p><strong>Seguir aprendiendo:</strong> el portal de capacitación del Estado tiene cursos gratis para emprendedores; las guías de Lean Startup y del lienzo Canvas están en inglés, pero son muy claras.</p>
      <p>Por ejemplo, si el margen por hora de Carla es $ 4.000, sabe que necesita más ventas por tanda de cocina o un precio un poco más alto para que le convenga.</p>` },
  ],
  practica: [
    "Armá tu plan de lanzamiento de 30 días con las 6 partes y el calendario semanal. Anotá la fecha de inicio.",
    "Evaluá tu plan con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Armá la tabla de números semanales con las 6 filas y completala con una semana real o simulada. Anotá tu margen por hora.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: capacitación para emprendedores y pymes", url: "https://www.argentina.gob.ar/produccion/capacitacion" },
    { t: "Strategyzer: el lienzo del modelo de negocio (en inglés)", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
    { t: "SBA (agencia de pequeñas empresas de EE. UU.): escribir el plan de negocio (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" },
  ],
  quiz: [
    { q: "Si armás tu plan de lanzamiento, ¿qué tiene que incluir?", opciones: ["Solo el logo y el nombre","Solo la lista de compras","Punto de partida, cliente, propuesta, prueba con meta, números y primeros clientes","Solo el precio"], correcta: 2, explicacion: "El plan junta todo el curso. El logo tienta por ser lo primero que se imagina, pero no prueba nada." },
    { q: "Si tu cliente es \"todo el mundo\", ¿cuánto sacás en \"Cliente y problema\"?", opciones: ["0 puntos","2 puntos","1 punto","No se evalúa"], correcta: 0, explicacion: "\"Todo el mundo\" es 0. Sacar 1 tienta por haber pensado algo, pero no es un cliente concreto." },
    { q: "Si tenés cliente concreto, pero ninguna entrevista, ¿cuánto sacás?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto"], correcta: 3, explicacion: "Falta hablar con clientes. Sacar 2 tienta porque el cliente está definido, pero sin entrevistas es una suposición." },
    { q: "Si tu prueba dice \"vender bastante\", ¿cuánto sacás en \"Prueba\"?", opciones: ["2 puntos","1 punto: falta una meta con número y plazo","0 puntos","3 puntos"], correcta: 1, explicacion: "\"Bastante\" no se mide. Sacar 2 tienta porque hay prueba, pero sin meta no se puede decidir." },
    { q: "Si tu plan suma 11, pero se financia con la plata del alquiler, ¿está listo?", opciones: ["Sí, 11 es listo","Sí, si la idea es buena","No: \"Riesgo de la plata\" tiene 0 y eso no se compensa con el total","Depende del mes"], correcta: 2, explicacion: "La regla lo dice. \"Si la idea es buena\" tienta, pero si la prueba falla, se pone en juego la casa." },
    { q: "Si tu plan saca 8, ¿qué hacés?", opciones: ["Mejorás lo que sacó 0 o 1","Lo das por terminado","Abandonás la idea","Cambiás la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Abandonar tienta si el número decepciona, pero el plan se corrige." },
    { q: "Si estás en la semana 4 de tu plan, ¿qué decidís?", opciones: ["Nada, seguís igual siempre","Invertir todo","Empezar otra idea sin mirar los datos","Si seguir, ajustar o abandonar, con los resultados de la prueba"], correcta: 3, explicacion: "La semana 4 es para decidir con datos. Seguir igual tienta, pero no aprovechás lo que aprendiste." },
    { q: "Si vendiste 24 viandas con margen de $ 2.500, ¿cuál es el margen de la semana?", opciones: ["$ 2.500","$ 60.000","$ 6.000","$ 144.000"], correcta: 1, explicacion: "24 × 2.500 = 60.000. $ 144.000 tienta si multiplicás por el precio, no por el margen." },
    { q: "Si el margen de la semana fue $ 60.000 y trabajaste 15 horas, ¿cuál es el margen por hora?", opciones: ["$ 900.000","$ 15","$ 4.000","$ 60.000"], correcta: 2, explicacion: "60.000 / 15 = 4.000. $ 900.000 tienta si multiplicás en vez de dividir." },
    { q: "Si tu margen por hora es bajo, ¿qué podés revisar?", opciones: ["Subir un poco el precio o ser más eficiente en cada tanda","Nada, es normal siempre","Trabajar más horas al mismo margen","Regalar el producto"], correcta: 0, explicacion: "El margen por hora guía esas decisiones. Trabajar más horas tienta, pero no mejora lo que ganás por hora." },
    { q: "Si querés saber si tus clientes están contentos, ¿qué número mirás?", opciones: ["Cuántos seguidores tenés","Cuántas horas trabajaste","El color de las bolsas","Cuántos clientes repiten"], correcta: 3, explicacion: "Volver a comprar muestra satisfacción. Los seguidores tientan por visibles, pero no compran." },
    { q: "Si querés seguir aprendiendo gratis sobre emprender en Argentina, ¿dónde buscás?", opciones: ["En publicidades de \"hacete millonario\"","En el portal de capacitación para emprendedores y pymes del Estado","En un grupo anónimo","En ningún lado"], correcta: 1, explicacion: "Es una fuente oficial y gratis. Las publicidades de millonario tientan, pero suelen ser estafas." },
  ],
},
];
