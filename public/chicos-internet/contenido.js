// Temario del curso "Cuidarse en internet". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js chicos-internet y node tools/metodologia.js chicos-internet
window.TEMARIO = [
{
  id: "empezar",
  icono: "🌐",
  titulo: "Internet: lo bueno y los cuidados",
  nivel: "Básico",
  objetivos: [
    "Nombrar cosas buenas de internet y cosas que hay que cuidar",
    "Elegir a tus adultos de confianza",
    "Saber qué hacer si algo te hace sentir mal",
  ],
  lecciones: [
    { titulo: "Internet es como una ciudad", html: `
      <p class="idea">Internet es como una ciudad enorme. Tiene plazas, bibliotecas y amigos. También tiene lugares y personas de las que hay que cuidarse.</p>
      <table>
        <tr><th>Lo bueno</th><th>Lo que hay que cuidar</th></tr>
        <tr><td>Aprender cosas nuevas</td><td>Lo que contás de vos</td></tr>
        <tr><td>Jugar con amigos</td><td>Hablar con desconocidos</td></tr>
        <tr><td>Ver videos y escuchar música</td><td>Mensajes que te hacen sentir mal</td></tr>
        <tr><td>Hacer tareas de la escuela</td><td>Premios que parecen demasiado buenos</td></tr>
      </table>
      <p>En la calle no le das tu dirección a un desconocido. En internet tampoco.</p>
      <p>Las mismas reglas de la vida real sirven en internet: respeto, cuidado y pedir ayuda.</p>
      <p>Por ejemplo, un juego en línea puede ser muy divertido. Igual, el chat del juego también tiene sus cuidados.</p>` },
    { titulo: "Tus adultos de confianza", html: `
      <p class="idea">Un adulto de confianza es una persona grande que te cuida y te escucha. Puede ser tu mamá, tu papá, tu abuela, una tía o tu maestra.</p>
      <table>
        <tr><th>Un adulto de confianza...</th></tr>
        <tr><td>Te escucha sin retarte primero</td></tr>
        <tr><td>Te ayuda a resolver el problema</td></tr>
        <tr><td>Te cuida, aunque te hayas equivocado</td></tr>
      </table>
      <pre><code>Mis adultos de confianza:
1. ______________________
2. ______________________
3. ______________________</code></pre>
      <p>Conviene tener por lo menos dos. Si uno no está, podés ir con el otro.</p>
      <p>Contar algo no es "buchonear". Pedir ayuda es de valientes.</p>
      <p>Por ejemplo, si tu mamá trabaja hasta tarde, tu abuela o tu maestra pueden ser tu segundo adulto de confianza.</p>` },
    { titulo: "La regla de oro", html: `
      <p class="idea">La regla de oro es simple. Si algo en internet te hace sentir mal, raro o con miedo, contáselo a un adulto de confianza.</p>
      <pre><code>STOP · Si algo te hace sentir mal:
1. Pará: no respondas.
2. Guardá: sacá una captura de pantalla.
3. Contá: hablá con tu adulto de confianza.</code></pre>
      <table>
        <tr><th>Situaciones para contar</th></tr>
        <tr><td>Alguien te pide fotos o secretos</td></tr>
        <tr><td>Te insultan o se burlan de vos</td></tr>
        <tr><td>Viste algo que te asustó</td></tr>
        <tr><td>Alguien te pide encontrarse</td></tr>
        <tr><td>Te piden contraseñas o datos</td></tr>
      </table>
      <p>No es tu culpa. Aunque hayas respondido o hecho algo, igual podés contarlo.</p>
      <p>Por ejemplo, si en un video aparece algo que te da miedo, cerralo y contáselo a un adulto. No tenés que guardártelo.</p>` },
  ],
  practica: [
    "Anotá 3 cosas buenas que hacés en internet y 3 cuidados que vas a tener.",
    "Escribí los nombres de al menos 2 adultos de confianza. Contales que los elegiste.",
    "Anotá los 3 pasos de la regla de oro y pegalos cerca de la compu o del celular.",
  ],
  recursos: [
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "PantallasAmigas: videos y consejos (para ver con un adulto)", url: "https://www.pantallasamigas.net/" },
  ],
  quiz: [
    { q: "Si comparás internet con una ciudad, ¿qué tiene?", opciones: ["Solo cosas buenas","Solo cosas peligrosas","Lugares buenos y lugares de los que hay que cuidarse","Nada parecido"], correcta: 2, explicacion: "Como una ciudad, tiene de todo. \"Solo cosas buenas\" tienta, pero también hay que cuidarse." },
    { q: "Si un desconocido en la calle te pide tu dirección, ¿se la das?", opciones: ["No, y en internet tampoco","Sí, si es amable","Solo en internet","Sí, siempre"], correcta: 0, explicacion: "Las reglas de la calle sirven en internet. \"Si es amable\" tienta, pero no lo conocés." },
    { q: "Si querés saber quién es un adulto de confianza, ¿qué hace esa persona?", opciones: ["Te reta siempre","Te pide secretos","Es alguien que conociste en un juego","Te escucha, te ayuda y te cuida"], correcta: 3, explicacion: "Te cuida de verdad. Alguien de un juego tienta si es simpático, pero no lo conocés en persona." },
    { q: "Si tu adulto de confianza no está, ¿qué hacés?", opciones: ["Te lo guardás","Vas con tu segundo adulto de confianza","Le preguntás a un desconocido","Esperás un año"], correcta: 1, explicacion: "Por eso conviene tener dos. Guardártelo tienta para no molestar, pero el problema sigue." },
    { q: "Si le contás a un adulto que alguien te molesta, ¿estás \"buchoneando\"?", opciones: ["Sí, está mal","Sí, si es un amigo","No: pedir ayuda es de valientes","Depende del día"], correcta: 2, explicacion: "Pedir ayuda te cuida. \"Está mal\" tienta por lo que dicen algunos, pero no es así." },
    { q: "Si algo en internet te hace sentir mal, ¿qué dice la regla de oro?", opciones: ["Contárselo a un adulto de confianza","Guardártelo","Responder enojado","Borrar todo y olvidarte"], correcta: 0, explicacion: "Contar es la regla de oro. Borrar todo tienta para olvidarte, pero perdés las pruebas." },
    { q: "Si alguien te manda un mensaje feo, ¿cuál es el primer paso?", opciones: ["Responder con algo peor","Reenviarlo a todos","Darle tu número","Parar: no responder"], correcta: 3, explicacion: "Primero se para. Responder peor tienta por el enojo, pero empeora todo." },
    { q: "Si querés guardar una prueba de un mensaje feo, ¿qué hacés?", opciones: ["Lo borrás","Sacás una captura de pantalla","Lo contestás","Lo olvidás"], correcta: 1, explicacion: "La captura guarda la prueba. Borrarlo tienta para no verlo más, pero se pierde." },
    { q: "Si alguien te pide fotos o que guardes un secreto, ¿qué hacés?", opciones: ["Le hacés caso","Guardás el secreto","Se lo contás a un adulto de confianza","Le mandás una foto vieja"], correcta: 2, explicacion: "Pedir fotos o secretos es una señal de alarma. Guardar el secreto tienta, pero te pone en riesgo." },
    { q: "Si ya respondiste a alguien que te hizo sentir mal, ¿podés contarlo igual?", opciones: ["Sí: no es tu culpa y podés contarlo","No, ahora es tarde","No, te van a retar","Solo si nadie se entera"], correcta: 0, explicacion: "Siempre se puede pedir ayuda. \"Es tarde\" tienta por vergüenza, pero nunca es tarde." },
    { q: "Si ves un video que te asusta, ¿qué hacés?", opciones: ["Lo mirás entero","Se lo mandás a tus amigos","Te lo guardás","Lo cerrás y se lo contás a un adulto"], correcta: 3, explicacion: "Cerrarlo y contarlo te cuida. Mandarlo a amigos tienta, pero también los asusta." },
    { q: "Si en internet alguien te pide encontrarse en persona, ¿qué hacés?", opciones: ["Vas solo","No vas y se lo contás a un adulto de confianza","Vas con un amigo sin avisar","Le das tu dirección"], correcta: 1, explicacion: "Nunca te encuentres con alguien de internet. Ir con un amigo tienta por sentirte seguro, pero tampoco es seguro." },
  ],
},
{
  id: "datos",
  icono: "🔒",
  titulo: "Tus datos y tus contraseñas",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué datos tuyos son privados",
    "Crear una contraseña fuerte y fácil de recordar",
    "Revisar qué muestran tus fotos antes de subirlas",
  ],
  lecciones: [
    { titulo: "Datos privados", video: {"id":"rHDTJQKW2y8","t":"Privacidad en internet para chicos · Smile and Learn (3:21)"}, html: `
      <p class="idea">Tus datos privados son los que dicen quién sos y dónde estás. No se publican ni se mandan a desconocidos.</p>
      <table>
        <tr><th>Privado: no se comparte</th><th>Se puede compartir</th></tr>
        <tr><td>Tu dirección</td><td>Tu comida favorita</td></tr>
        <tr><td>Tu escuela</td><td>Tu equipo de fútbol</td></tr>
        <tr><td>Tu número de teléfono</td><td>Un dibujo que hiciste</td></tr>
        <tr><td>Dónde estás ahora</td><td>Tu juego preferido</td></tr>
        <tr><td>Tus contraseñas</td><td>Una foto sin datos, con permiso</td></tr>
      </table>
      <p>Algunos datos parecen inofensivos, pero juntos dicen mucho de vos.</p>
      <p>Lo que se sube a internet es difícil de borrar del todo.</p>
      <p>Por ejemplo, tu nombre más el nombre de tu escuela alcanzan para que un desconocido sepa dónde encontrarte.</p>` },
    { titulo: "Contraseñas fuertes", video: {"id":"Cp4Tiq3LOrc","t":"Contraseña segura: ocho claves · PantallasAmigas (6:10)"}, html: `
      <p class="idea">Una contraseña es la llave de tus cuentas. Tiene que ser difícil de adivinar para otros y fácil de recordar para vos.</p>
      <table>
        <tr><th>Contraseña débil</th><th>Por qué es débil</th></tr>
        <tr><td>123456</td><td>Es la primera que prueban</td></tr>
        <tr><td>Tu nombre</td><td>Cualquiera lo sabe</td></tr>
        <tr><td>Tu fecha de cumpleaños</td><td>Es fácil de averiguar</td></tr>
      </table>
      <pre><code>Truco de la frase:
Pensá una frase rara que solo vos entiendas.
"Mi gato Pancho come 3 tostadas!"

Contraseña: MiGatoPanchoCome3Tostadas!
Es larga, tiene mayúsculas, un número y un signo.</code></pre>
      <p>Tu contraseña no se la contás a tus amigos, aunque sean tus mejores amigos.</p>
      <p>Sí la pueden saber tus papás o el adulto que te cuida.</p>
      <p>Por ejemplo, un amigo que sabe tu contraseña se puede enojar con vos. Ahí puede entrar a tu cuenta y publicar cosas en tu nombre.</p>` },
    { titulo: "Fotos que cuentan cosas", html: `
      <p class="idea">Una foto puede contar más de lo que pensás. Antes de subirla, mirá qué se ve en el fondo.</p>
      <table>
        <tr><th>Mirá si aparece...</th><th>Qué cuenta</th></tr>
        <tr><td>El uniforme o el escudo de la escuela</td><td>Dónde estás todos los días</td></tr>
        <tr><td>El número de tu casa o el nombre de la calle</td><td>Dónde vivís</td></tr>
        <tr><td>La ubicación activada</td><td>Dónde estás en ese momento</td></tr>
        <tr><td>Otras personas</td><td>Su cara, sin su permiso</td></tr>
      </table>
      <pre><code>Antes de subir una foto, preguntate:
1. ¿Se ve algo que diga dónde estoy?
2. ¿Aparece alguien que no me dio permiso?
3. ¿Me molestaría que la vea cualquier persona?
Si alguna respuesta te hace dudar → no la subas.</code></pre>
      <p>Pedí permiso antes de subir una foto de un amigo. Él también tiene derecho a cuidar su imagen.</p>
      <p>Por ejemplo, una selfie en la puerta de casa con el número a la vista le dice a todos dónde vivís.</p>` },
  ],
  practica: [
    "Hacé una tabla con 5 datos tuyos y marcá cuáles son privados y cuáles se pueden compartir.",
    "Inventá una frase rara y convertila en contraseña. No la anotes acá: anotá solo cuántas letras tiene.",
    "Elegí 3 fotos de tu celular y revisá las 3 preguntas en cada una. Anotá cuántas se podrían subir.",
  ],
  recursos: [
    { t: "PantallasAmigas: videos y consejos (para ver con un adulto)", url: "https://www.pantallasamigas.net/" },
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
  ],
  quiz: [
    { q: "Si un desconocido en un juego te pregunta a qué escuela vas, ¿qué hacés?", opciones: ["Se lo decís si es simpático","Le mandás una foto del uniforme","No se lo decís: es un dato privado","Le decís también tu dirección"], correcta: 2, explicacion: "La escuela dice dónde encontrarte. \"Si es simpático\" tienta, pero no lo conocés." },
    { q: "Si querés contar cuál es tu comida favorita, ¿podés?", opciones: ["Sí: no dice quién sos ni dónde estás","No, nunca","Solo con tu dirección","Solo a desconocidos"], correcta: 0, explicacion: "No es un dato privado. \"Nunca\" tienta por cuidado, pero eso se puede compartir." },
    { q: "Si tu contraseña es 123456, ¿qué problema tiene?", opciones: ["Ninguno","Es muy larga","Es muy difícil","Es la primera que prueban: muy fácil de adivinar"], correcta: 3, explicacion: "Es de las más usadas. \"Ninguno\" tienta porque es fácil de recordar, pero también de adivinar." },
    { q: "Si querés una contraseña fuerte y fácil de recordar, ¿qué usás?", opciones: ["Tu nombre","Una frase rara con mayúsculas, un número y un signo","Tu fecha de cumpleaños","123456"], correcta: 1, explicacion: "La frase es larga y la recordás. Tu nombre tienta por fácil, pero cualquiera lo sabe." },
    { q: "Si tu mejor amigo te pide tu contraseña, ¿se la das?", opciones: ["Sí, es tu mejor amigo","Sí, si te da la suya","No: la contraseña no se comparte con amigos","Sí, por un ratito"], correcta: 2, explicacion: "Si se pelean, puede usarla. \"Es tu mejor amigo\" tienta, pero la cuenta es tuya." },
    { q: "Si tu mamá o tu papá quieren saber tu contraseña, ¿qué pasa?", opciones: ["Ellos sí la pueden saber, porque te cuidan","Nunca se la decís","Se la decís a tus amigos también","La publicás"], correcta: 0, explicacion: "Tus adultos de confianza sí. \"Nunca\" tienta por privacidad, pero ellos te cuidan." },
    { q: "Si en una selfie se ve el número de tu casa, ¿qué hacés?", opciones: ["La subís igual","La subís con la ubicación activada","La mandás a desconocidos","No la subís, porque dice dónde vivís"], correcta: 3, explicacion: "El número dice dónde vivís. Subirla igual tienta porque salió linda, pero cuenta demasiado." },
    { q: "Si en la foto aparece el escudo de tu escuela, ¿qué cuenta?", opciones: ["Nada","Dónde estás todos los días","Tu comida favorita","Tu juego preferido"], correcta: 1, explicacion: "El escudo dice tu escuela. \"Nada\" tienta porque es un detalle chico, pero dice mucho." },
    { q: "Si querés subir una foto de un amigo, ¿qué hacés antes?", opciones: ["La subís sin decirle","La subís con su nombre y escuela","Le pedís permiso","Le cambiás la cara"], correcta: 2, explicacion: "Tu amigo también cuida su imagen. Subirla sin decirle tienta por rápido, pero no es justo." },
    { q: "Si una foto te hace dudar con alguna de las 3 preguntas, ¿qué hacés?", opciones: ["No la subís","La subís igual","La subís a la noche","Se la mandás a un desconocido"], correcta: 0, explicacion: "Si dudás, mejor no. Subirla igual tienta, pero después es difícil de borrar." },
    { q: "Si subís algo a internet y después te arrepentís, ¿se borra del todo?", opciones: ["Sí, siempre","Sí, en un minuto","No importa","Es difícil: alguien pudo guardarlo o copiarlo"], correcta: 3, explicacion: "Lo que se sube puede quedar. \"Siempre se borra\" tienta, pero otros pudieron guardarlo." },
    { q: "Si tu nombre y tu escuela aparecen juntos en un perfil público, ¿qué riesgo hay?", opciones: ["Ninguno","Que un desconocido sepa dónde encontrarte","Que te feliciten","Que te den premios"], correcta: 1, explicacion: "Juntos dicen dónde estás. \"Ninguno\" tienta porque cada dato solo parece inofensivo." },
  ],
},
{
  id: "desconocidos",
  icono: "🚨",
  titulo: "Desconocidos y señales de alarma",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer que alguien en internet puede mentir sobre quién es",
    "Detectar las señales de alarma del grooming",
    "Saber qué hacer si alguien te incomoda",
  ],
  lecciones: [
    { titulo: "En internet se puede mentir", html: `
      <p class="idea">En internet cualquiera puede decir que es otra persona. Una foto, un nombre y una edad se pueden inventar.</p>
      <table>
        <tr><th>Dice</th><th>Puede ser en realidad</th></tr>
        <tr><td>"Tengo 12 años, como vos"</td><td>Un adulto</td></tr>
        <tr><td>"Soy amiga de tu prima"</td><td>Alguien que vio el perfil de tu prima</td></tr>
        <tr><td>"Soy de un equipo de un juego famoso"</td><td>Alguien que quiere tu cuenta</td></tr>
      </table>
      <p>Un amigo de internet que nunca viste en persona es un desconocido.</p>
      <p>Aunque hablen todos los días y sea muy simpático, sigue siendo un desconocido.</p>
      <p>Por ejemplo, una persona puede usar la foto de un chico de otro país para hacerse pasar por alguien de tu edad.</p>` },
    { titulo: "Señales de alarma", video: {"id":"OdixH25nCHk","t":"Qué es el grooming · Magic Markers (4:09)"}, html: `
      <p class="idea">El <strong>grooming</strong> es cuando un adulto se hace pasar por amigo de un chico en internet para hacerle daño. Hay señales que te avisan.</p>
      <table>
        <tr><th>Señal de alarma</th><th>Ejemplo</th></tr>
        <tr><td>Te pide que guardes un secreto</td><td>"No le cuentes a tus papás que hablamos"</td></tr>
        <tr><td>Te pide fotos</td><td>"Mandame una foto tuya"</td></tr>
        <tr><td>Te hace regalos</td><td>Monedas para un juego, recargas, regalos</td></tr>
        <tr><td>Te pide hablar por otra app</td><td>"Pasame tu número, hablemos por otro lado"</td></tr>
        <tr><td>Te pide encontrarse</td><td>"Vení a la plaza, no le digas a nadie"</td></tr>
        <tr><td>Te hace sentir culpa o miedo</td><td>"Si no me mandás, cuento lo que me dijiste"</td></tr>
      </table>
      <p>Si ves una sola de estas señales, ya es momento de contarle a un adulto.</p>
      <p>Por ejemplo, si alguien te regala monedas de un juego y después te pide una foto, esas son dos señales juntas.</p>` },
    { titulo: "Qué hacer", html: `
      <p class="idea">Si alguien te incomoda, no estás en problemas. La persona que hace algo mal es el adulto, nunca vos.</p>
      <pre><code>Si alguien te incomoda:
1. No respondas más.
2. No mandes fotos ni datos.
3. Sacá capturas de pantalla de los mensajes.
4. No borres la conversación.
5. Contáselo a tu adulto de confianza.
6. Tu adulto puede bloquear, denunciar y pedir ayuda.</code></pre>
      <table>
        <tr><th>Tu adulto puede llamar a</th><th>Para</th></tr>
        <tr><td>Línea 137</td><td>Ayuda las 24 horas, gratis, también por grooming</td></tr>
        <tr><td>Línea 102</td><td>Derechos de chicas y chicos</td></tr>
      </table>
      <p>Aunque ya hayas mandado algo, igual pedí ayuda. No es tu culpa.</p>
      <p>Por ejemplo, si alguien te amenaza con mostrar una foto, no le mandes otra: contáselo a un adulto enseguida.</p>` },
  ],
  practica: [
    "Anotá las 6 señales de alarma con tus palabras.",
    "Escribí los 6 pasos de \"Qué hacer\" en un papel y anotá dónde lo vas a guardar.",
    "Con un adulto de confianza, anotá en el celular los números 137 y 102 y para qué sirve cada uno.",
  ],
  recursos: [
    { t: "Grooming Argentina: información para familias (para ver con un adulto)", url: "https://www.groomingarg.org/" },
    { t: "Dónde pedir ayuda: 137, 102 y más (para ver con un adulto)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia" },
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
  ],
  quiz: [
    { q: "Si alguien en un juego dice \"tengo 12 años\", ¿podés estar seguro?", opciones: ["Sí, siempre","Sí, si tiene foto","No: en internet cualquiera puede mentir su edad","Sí, si es simpático"], correcta: 2, explicacion: "Las fotos y la edad se inventan. \"Si tiene foto\" tienta, pero la foto puede ser de otro." },
    { q: "Si hablás todos los días con alguien que nunca viste en persona, ¿qué es?", opciones: ["Un desconocido","Tu mejor amigo","Tu primo","Alguien seguro"], correcta: 0, explicacion: "Sin conocerlo en persona, es un desconocido. \"Mejor amigo\" tienta porque hablan mucho, pero no sabés quién es." },
    { q: "Si alguien te dice \"no le cuentes a tus papás que hablamos\", ¿qué es?", opciones: ["Un secreto entre amigos","Algo normal","Un juego","Una señal de alarma: contáselo a un adulto"], correcta: 3, explicacion: "Pedir secretos es señal de alarma. \"Secreto entre amigos\" tienta, pero un amigo de verdad no pide eso." },
    { q: "Si alguien de internet te pide una foto tuya, ¿qué hacés?", opciones: ["Le mandás una","No la mandás y se lo contás a un adulto","Le mandás una vieja","Le mandás la de un amigo"], correcta: 1, explicacion: "Pedir fotos es señal de alarma. Una foto vieja tienta como solución, pero tampoco se manda." },
    { q: "Si alguien te regala monedas para un juego sin conocerte, ¿qué puede ser?", opciones: ["Un amigo generoso","Un premio del juego","Una señal de alarma: los regalos pueden ser una trampa","Nada raro"], correcta: 2, explicacion: "Los regalos crean una deuda falsa. \"Amigo generoso\" tienta, pero es una señal de grooming." },
    { q: "Si alguien te pide pasar a hablar por otra app, ¿qué hacés?", opciones: ["No pasás y se lo contás a un adulto","Le das tu número","Pasás a escondidas","Le das tu dirección"], correcta: 0, explicacion: "Cambiar de app es una señal. Darle el número tienta para seguir hablando, pero ahí es más difícil que te cuiden." },
    { q: "Si alguien de internet te pide encontrarse en una plaza, ¿qué hacés?", opciones: ["Vas solo","Vas sin avisar","Le pedís que te busque en tu casa","No vas y se lo contás a un adulto"], correcta: 3, explicacion: "Nunca te encuentres con alguien de internet. Ir sin avisar tienta por la aventura, pero es muy peligroso." },
    { q: "Si ves una sola señal de alarma, ¿qué hacés?", opciones: ["Esperás a ver 3","Ya es momento de contarle a un adulto","No hacés nada","Le preguntás a la persona si es mala"], correcta: 1, explicacion: "Una señal alcanza. Esperar a ver más tienta, pero mientras tanto corrés riesgo." },
    { q: "Si alguien te incomoda, ¿qué hacés con la conversación?", opciones: ["La borrás enseguida","La reenviás a tus amigos","Sacás capturas y no la borrás","Respondés enojado"], correcta: 2, explicacion: "Las capturas son pruebas. Borrarla tienta para no verla más, pero se pierden las pruebas." },
    { q: "Si alguien que te incomoda te amenaza con mostrar una foto, ¿qué hacés?", opciones: ["No le mandás nada más y se lo contás a un adulto enseguida","Le mandás otra foto para que se calme","Te lo guardás","Le pagás"], correcta: 0, explicacion: "Hacerle caso empeora todo. Mandar otra tienta para que pare, pero nunca para." },
    { q: "Si ya mandaste algo que no tenías que mandar, ¿podés pedir ayuda?", opciones: ["No, te van a retar","No, ya es tarde","Solo si nadie se entera","Sí: no es tu culpa, el que hace mal es el adulto"], correcta: 3, explicacion: "Siempre podés pedir ayuda. \"Te van a retar\" tienta por miedo, pero tu adulto te va a cuidar." },
    { q: "Si tu adulto necesita ayuda las 24 horas por grooming, ¿a qué número llama?", opciones: ["Al número que aparece en el juego","Al 137","A ningún número","Al número de la persona que molesta"], correcta: 1, explicacion: "El 137 atiende las 24 horas y es gratis. Llamar a la persona tienta para enfrentarla, pero no se hace." },
  ],
},
{
  id: "bullying",
  icono: "💬",
  titulo: "Ciberbullying y buen trato",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer qué es el ciberbullying",
    "Saber qué hacer si te pasa o si lo ves",
    "Tratar bien a los demás en internet",
  ],
  lecciones: [
    { titulo: "Qué es el ciberbullying", video: {"id":"ZHQ03fSn9J0","t":"Ciberbullying: cómo evitar el ciberacoso · Smile and Learn (3:01)"}, html: `
      <p class="idea">El <strong>ciberbullying</strong> es molestar, insultar o dejar de lado a alguien una y otra vez. Se hace por internet o por el celular.</p>
      <table>
        <tr><th>Es ciberbullying</th><th>Ejemplo</th></tr>
        <tr><td>Insultar o burlarse seguido</td><td>Comentarios feos en todas tus fotos</td></tr>
        <tr><td>Difundir fotos para reírse</td><td>Pasar una foto tuya en un grupo para burlarse</td></tr>
        <tr><td>Dejar afuera a propósito</td><td>Armar un grupo con toda la clase menos uno</td></tr>
        <tr><td>Hacerse pasar por otro</td><td>Crear un perfil falso con tu nombre</td></tr>
      </table>
      <p>Duele igual que en la vida real. A veces más, porque lo ven muchos.</p>
      <p>Una broma deja de ser broma cuando a la otra persona no le causa gracia.</p>
      <p>Por ejemplo, un meme con la cara de un compañero puede parecer gracioso. Si a él le duele, es ciberbullying.</p>` },
    { titulo: "Si te pasa a vos", html: `
      <p class="idea">Si alguien te molesta por internet, no es tu culpa y no tenés que aguantarlo solo.</p>
      <pre><code>Si te molestan:
1. No respondas con más insultos.
2. Guardá capturas de los mensajes.
3. Bloqueá a quien te molesta.
4. Contáselo a tu adulto de confianza.
5. Si es de la escuela, tu adulto puede hablar con la escuela.</code></pre>
      <table>
        <tr><th>Lo que ayuda</th><th>Lo que no ayuda</th></tr>
        <tr><td>Hablar con alguien</td><td>Guardártelo</td></tr>
        <tr><td>Bloquear y denunciar en la app</td><td>Responder con más insultos</td></tr>
        <tr><td>Estar con amigos que te quieren</td><td>Leer los mensajes una y otra vez</td></tr>
      </table>
      <p>Si te sentís muy triste, decilo. Pedir ayuda es de valientes.</p>
      <p>Por ejemplo, si en un grupo se burlan de vos, podés salir del grupo, guardar capturas y contárselo a un adulto.</p>` },
    { titulo: "Si lo ves: no seas parte", html: `
      <p class="idea">Cuando alguien ve un caso de ciberbullying, puede ayudar o empeorarlo. Vos podés elegir ayudar.</p>
      <table>
        <tr><th>Empeora</th><th>Ayuda</th></tr>
        <tr><td>Reenviar el meme o la foto</td><td>No reenviar nada</td></tr>
        <tr><td>Poner "jaja" o un emoji de risa</td><td>No reírse</td></tr>
        <tr><td>Quedarse callado</td><td>Mandarle un mensaje de apoyo a quien sufre</td></tr>
        <tr><td>Sumarse para no quedar afuera</td><td>Contárselo a un adulto</td></tr>
      </table>
      <pre><code>Antes de publicar, preguntate:
¿Lo diría en persona, mirando a los ojos?
¿Me gustaría que me lo digan a mí?
Si la respuesta es no → no lo publiques.</code></pre>
      <p>Un mensaje amable puede cambiarle el día a alguien.</p>
      <p>Por ejemplo, en el grupo pasan una foto para burlarse de un compañero. No la reenvíes. Escribile a él: "Eso estuvo mal, estoy con vos".</p>` },
  ],
  practica: [
    "Anotá 2 ejemplos de ciberbullying y por qué cada uno lastima.",
    "Escribí los 5 pasos de \"Si te molestan\" con tus palabras.",
    "Escribí un mensaje de apoyo que le mandarías a un compañero al que molestan. Anotá cuántas palabras tiene.",
  ],
  recursos: [
    { t: "PantallasAmigas: videos y consejos (para ver con un adulto)", url: "https://www.pantallasamigas.net/" },
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
  ],
  quiz: [
    { q: "Si alguien escribe comentarios feos en todas tus fotos, una y otra vez, ¿qué es?", opciones: ["Una broma","Algo normal","Ciberbullying","Un premio"], correcta: 2, explicacion: "Molestar seguido es ciberbullying. \"Una broma\" tienta, pero si duele, no es broma." },
    { q: "Si arman un grupo con toda la clase menos con uno, a propósito, ¿qué es?", opciones: ["Ciberbullying: dejar afuera a propósito","Nada malo","Un grupo normal","Un juego"], correcta: 0, explicacion: "Dejar afuera a propósito lastima. \"Nada malo\" tienta porque nadie insulta, pero duele igual." },
    { q: "Si alguien crea un perfil falso con tu nombre, ¿qué hacés?", opciones: ["Creás uno falso de él","Lo ignorás para siempre","Le pedís la contraseña","Guardás capturas y se lo contás a tu adulto de confianza"], correcta: 3, explicacion: "Tu adulto puede denunciarlo. Crear uno falso tienta para vengarte, pero empeora todo." },
    { q: "Si un meme con la cara de un compañero le duele a él, ¿qué es?", opciones: ["Solo una broma","Ciberbullying, aunque a otros les cause gracia","Algo gracioso","Nada"], correcta: 1, explicacion: "Lo que importa es cómo se siente él. \"Solo una broma\" tienta porque otros se ríen." },
    { q: "Si alguien te insulta por internet, ¿qué no hacés?", opciones: ["No guardás capturas","No le contás a nadie","No respondés con más insultos","No bloqueás"], correcta: 2, explicacion: "Responder empeora todo. Las otras opciones tientan, pero sí conviene guardar, contar y bloquear." },
    { q: "Si te molestan en una app, ¿qué podés hacer en la app?", opciones: ["Bloquear y denunciar a quien te molesta","Seguir leyendo todo","Darle tu número","Responderle"], correcta: 0, explicacion: "Bloquear corta el contacto. Seguir leyendo tienta, pero te hace sentir peor." },
    { q: "Si te molestan compañeros de la escuela por internet, ¿qué puede hacer tu adulto?", opciones: ["Nada","Retarte a vos","Publicar insultos","Hablar con la escuela"], correcta: 3, explicacion: "La escuela puede ayudar. \"Nada\" tienta si pasó fuera del horario, pero la escuela igual puede intervenir." },
    { q: "Si te sentís muy triste por lo que te dicen en internet, ¿qué hacés?", opciones: ["Te lo guardás","Lo decís y pedís ayuda a un adulto","Leés los mensajes una y otra vez","Dejás de comer"], correcta: 1, explicacion: "Pedir ayuda es de valientes. Guardártelo tienta para no molestar, pero no tenés que aguantarlo solo." },
    { q: "Si en el grupo pasan una foto para burlarse de alguien, ¿qué hacés?", opciones: ["La reenviás","Ponés \"jaja\"","No la reenviás y le mandás apoyo a esa persona","Te sumás para no quedar afuera"], correcta: 2, explicacion: "No reenviar corta la cadena. Sumarte tienta para no quedar afuera, pero lastimás." },
    { q: "Si ves ciberbullying y te quedás callado, ¿qué pasa?", opciones: ["Quien lo sufre se siente más solo","No pasa nada","Se arregla solo","Ayudás"], correcta: 0, explicacion: "El silencio no ayuda. \"No pasa nada\" tienta porque no hiciste nada malo, pero podías ayudar." },
    { q: "Si vas a publicar algo sobre otra persona, ¿qué te preguntás?", opciones: ["¿Cuántos likes va a tener?","¿Es gracioso para mí?","Nada","¿Lo diría en persona y me gustaría que me lo digan a mí?"], correcta: 3, explicacion: "Ponerte en su lugar evita lastimar. Los likes tientan, pero no dicen si está bien." },
    { q: "Si un compañero sufre ciberbullying, ¿qué mensaje le podés mandar?", opciones: ["\"Jaja\"","\"Eso estuvo mal, estoy con vos\"","Nada","\"Te lo merecías\""], correcta: 1, explicacion: "Un mensaje amable ayuda mucho. \"Nada\" tienta para no meterte, pero tu apoyo importa." },
  ],
},
{
  id: "enganos",
  icono: "🎣",
  titulo: "Engaños, premios y links falsos",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer premios y regalos falsos",
    "Revisar un link antes de tocarlo",
    "Descargar juegos y apps solo de lugares seguros",
  ],
  lecciones: [
    { titulo: "Premios demasiado buenos", html: `
      <p class="idea">Si un premio parece demasiado bueno para ser verdad, casi siempre es mentira. Es una trampa para robarte la cuenta o tus datos.</p>
      <table>
        <tr><th>Mensaje trampa</th><th>Qué quieren en realidad</th></tr>
        <tr><td>"¡Ganaste un celular! Poné tus datos"</td><td>Tus datos y los de tu familia</td></tr>
        <tr><td>"Monedas gratis para tu juego: entrá con tu usuario y contraseña"</td><td>Robar tu cuenta del juego</td></tr>
        <tr><td>"Sos el visitante un millón"</td><td>Que toques un link peligroso</td></tr>
        <tr><td>"Apurate, quedan 5 minutos"</td><td>Que no pienses y no le preguntes a nadie</td></tr>
      </table>
      <p>Nadie regala monedas de un juego a cambio de tu contraseña.</p>
      <p>El apuro es una trampa: quieren que hagas clic sin pensar.</p>
      <p>Por ejemplo, un video que promete "monedas infinitas" con un programa raro suele terminar con la cuenta robada.</p>` },
    { titulo: "Links y mensajes raros", html: `
      <p class="idea">Un link es una puerta. Antes de tocarlo, conviene mirar quién lo mandó y adónde lleva.</p>
      <pre><code>Antes de tocar un link, preguntate:
1. ¿Conozco a quien me lo mandó?
2. ¿Esperaba este mensaje?
3. ¿Me pide apurarme o me promete un premio?
4. ¿El nombre de la página está raro o mal escrito?
Si dudás → no lo toques y preguntale a un adulto.</code></pre>
      <table>
        <tr><th>Señal rara</th><th>Ejemplo</th></tr>
        <tr><td>Nombre mal escrito</td><td>juegos-gratiss.xyz en vez del nombre real</td></tr>
        <tr><td>Un amigo que escribe distinto</td><td>"hola mira esto jaja" con un link, sin más</td></tr>
        <tr><td>Te piden la contraseña</td><td>"Para ver la foto, iniciá sesión"</td></tr>
      </table>
      <p>A veces la cuenta de un amigo es robada y manda links sin que él sepa.</p>
      <p>Por ejemplo, tu amigo te manda "mirá este video donde salís vos" con un link raro. Preguntale por otro medio si de verdad lo mandó.</p>` },
    { titulo: "Descargar seguro", video: {"id":"tBObvkx_nOg","t":"Uso responsable de la tecnología para chicos · Smile and Learn (11:29)"}, html: `
      <p class="idea">Los juegos y las apps se bajan solo de las tiendas oficiales. Y siempre con permiso de un adulto.</p>
      <table>
        <tr><th>Seguro</th><th>Peligroso</th></tr>
        <tr><td>La tienda oficial de apps del celular</td><td>Una página que ofrece el juego "gratis" cuando cuesta plata</td></tr>
        <tr><td>Con permiso de un adulto</td><td>Un archivo que te mandó un desconocido</td></tr>
        <tr><td>Leer qué permisos pide la app</td><td>Aceptar todo sin leer</td></tr>
      </table>
      <p>Si una app de linterna pide tus contactos y tu ubicación, es raro. Preguntale a un adulto.</p>
      <p>Las compras dentro de los juegos se hacen solo con permiso. Gastan plata de verdad.</p>
      <p>Por ejemplo, un juego "pirata" de una página rara puede traer un virus. El virus puede robar las fotos y las contraseñas del celular.</p>` },
  ],
  practica: [
    "Anotá 3 mensajes trampa que viste o que te contaron, y qué querían en realidad.",
    "Escribí las 4 preguntas antes de tocar un link y pegalas cerca de la compu o el celular.",
    "Con un adulto, revisá los permisos de 2 apps de tu celular y anotá si alguna pide algo raro.",
  ],
  recursos: [
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "PantallasAmigas: videos y consejos (para ver con un adulto)", url: "https://www.pantallasamigas.net/" },
  ],
  quiz: [
    { q: "Si te llega \"¡Ganaste un celular! Poné tus datos\", ¿qué es?", opciones: ["Un premio de verdad","Un regalo de un amigo","Una trampa para robar tus datos","Algo normal"], correcta: 2, explicacion: "Si parece demasiado bueno, es mentira. \"Premio de verdad\" tienta por la emoción, pero nadie regala celulares así." },
    { q: "Si te ofrecen monedas gratis para un juego a cambio de tu contraseña, ¿qué hacés?", opciones: ["No la das: quieren robar tu cuenta","La das, son gratis","Das la de tu hermano","La das a medias"], correcta: 0, explicacion: "Nadie regala monedas por tu contraseña. \"Son gratis\" tienta, pero perdés la cuenta." },
    { q: "Si un mensaje dice \"apurate, quedan 5 minutos\", ¿qué buscan?", opciones: ["Ayudarte","Que ganes rápido","Nada","Que no pienses ni le preguntes a nadie"], correcta: 3, explicacion: "El apuro es una trampa. \"Que ganes rápido\" tienta, pero quieren que no pienses." },
    { q: "Si no conocés a quien te mandó un link, ¿qué hacés?", opciones: ["Lo tocás para ver","No lo tocás y le preguntás a un adulto","Lo reenviás a todos","Ponés tu contraseña"], correcta: 1, explicacion: "Un link desconocido puede ser peligroso. Tocarlo \"para ver\" tienta por curiosidad, pero es el riesgo." },
    { q: "Si la página se llama \"juegos-gratiss.xyz\", ¿qué te dice?", opciones: ["Que es oficial","Que es segura","Que es rara: nombre mal escrito","Nada"], correcta: 2, explicacion: "Un nombre raro es señal de trampa. \"Es oficial\" tienta porque dice \"juegos\", pero no lo es." },
    { q: "Si tu amigo te manda \"mirá este video donde salís vos\" con un link raro, ¿qué hacés?", opciones: ["Le preguntás por otro medio si de verdad lo mandó","Lo tocás enseguida","Lo reenviás","Ponés tu contraseña para verlo"], correcta: 0, explicacion: "Su cuenta pudo ser robada. Tocarlo tienta porque es tu amigo, pero puede no ser él." },
    { q: "Si para ver una foto te piden iniciar sesión con tu contraseña, ¿qué hacés?", opciones: ["La ponés","Ponés la de un amigo","La mandás por mensaje","No la ponés y le preguntás a un adulto"], correcta: 3, explicacion: "Es una forma común de robar cuentas. Ponerla tienta por curiosidad, pero la perdés." },
    { q: "Si querés bajar un juego, ¿de dónde lo bajás?", opciones: ["De una página que lo da gratis","De la tienda oficial de apps, con permiso de un adulto","De un archivo que mandó un desconocido","De cualquier lado"], correcta: 1, explicacion: "La tienda oficial es más segura. \"Gratis\" tienta, pero puede traer un virus." },
    { q: "Si una app de linterna pide tus contactos y tu ubicación, ¿qué pensás?", opciones: ["Que es normal","Que la aceptás sin leer","Que es raro y le preguntás a un adulto","Que es mejor así"], correcta: 2, explicacion: "Una linterna no necesita eso. \"Es normal\" tienta porque muchas apps piden cosas, pero esta es rara." },
    { q: "Si querés comprar algo dentro de un juego, ¿qué hacés?", opciones: ["Pedís permiso a un adulto: gasta plata de verdad","Lo comprás sin preguntar","Usás la tarjeta sin avisar","Comprás todo lo que puedas"], correcta: 0, explicacion: "Es plata real de tu familia. Comprar sin preguntar tienta porque es fácil, pero no está bien." },
    { q: "Si bajás un juego \"pirata\" de una página rara, ¿qué riesgo hay?", opciones: ["Ninguno","Que el juego sea mejor","Que te regalen monedas","Que traiga un virus que robe fotos y contraseñas"], correcta: 3, explicacion: "Los juegos piratas pueden traer virus. \"Ninguno\" tienta porque funciona, pero puede robar en silencio." },
    { q: "Si dudás de un mensaje, ¿a quién le preguntás?", opciones: ["Al que te lo mandó","A tu adulto de confianza","A un desconocido de un juego","A nadie"], correcta: 1, explicacion: "Tu adulto te ayuda a decidir. Preguntarle al que lo mandó tienta, pero si es trampa, te va a mentir." },
  ],
},
{
  id: "pantallas",
  icono: "⏰",
  titulo: "Pantallas, descanso y configuración",
  nivel: "Intermedio",
  objetivos: [
    "Darte cuenta de cuánto tiempo pasás frente a las pantallas",
    "Cuidar el sueño y otras actividades",
    "Poner tus cuentas en privado con un adulto",
  ],
  lecciones: [
    { titulo: "¿Cuánto tiempo?", html: `
      <p class="idea">Las pantallas son divertidas, pero también te pueden atrapar sin que te des cuenta. Saber cuánto tiempo pasás es el primer paso para equilibrar.</p>
      <table>
        <tr><th>Señal de que es mucho</th></tr>
        <tr><td>Te enojás mucho cuando te piden dejar el celular</td></tr>
        <tr><td>Dejás de hacer cosas que te gustaban, como jugar afuera</td></tr>
        <tr><td>Te cuesta concentrarte en la tarea</td></tr>
        <tr><td>Te duelen los ojos o la cabeza</td></tr>
      </table>
      <pre><code>Mi día:
Escuela + tarea      ____ horas
Pantallas            ____ horas
Jugar afuera/deporte ____ horas
Familia y amigos     ____ horas
Dormir               ____ horas</code></pre>
      <p>Muchos celulares muestran cuánto tiempo usaste cada app. Miralo con un adulto.</p>
      <p>Por ejemplo, ver "solo un video más" diez veces seguidas puede ser una hora entera sin darte cuenta.</p>` },
    { titulo: "Dormir y desconectar", html: `
      <p class="idea">El sueño es clave para crecer, aprender y estar de buen humor. Las pantallas antes de dormir hacen que te cueste más dormirte.</p>
      <table>
        <tr><th>Buen hábito</th><th>Por qué</th></tr>
        <tr><td>Dejar el celular un rato antes de dormir</td><td>La luz de la pantalla te despierta</td></tr>
        <tr><td>El celular fuera de la cama</td><td>Las notificaciones te despiertan a la noche</td></tr>
        <tr><td>Comer sin pantallas</td><td>Charlar con tu familia</td></tr>
        <tr><td>Hacer algo con el cuerpo cada día</td><td>Moverte te da energía</td></tr>
      </table>
      <p>A tu edad, se recomienda dormir entre 9 y 11 horas por noche.</p>
      <p>Desconectar un rato no es aburrido: es tiempo para jugar, leer, dibujar o salir.</p>
      <p>Por ejemplo, si dejás el celular cargando en la cocina a la noche, dormís mejor y no te despiertan los mensajes.</p>` },
    { titulo: "Configuración privada", html: `
      <p class="idea">Muchas apps y juegos se pueden configurar para que solo te vean tus amigos de verdad. Se hace con un adulto, una sola vez.</p>
      <pre><code>Con un adulto, revisen en cada app o juego:
☐ Cuenta privada (solo amigos)
☐ Quién puede escribirme (solo amigos o nadie)
☐ Ubicación desactivada
☐ Foto de perfil sin datos (sin uniforme ni casa)
☐ Bloquear y denunciar: saber dónde está el botón</code></pre>
      <table>
        <tr><th>Tené en cuenta</th></tr>
        <tr><td>Muchas redes sociales piden una edad mínima, por ejemplo 13 años</td></tr>
        <tr><td>Mentir la edad para entrar te deja sin las protecciones para chicos</td></tr>
        <tr><td>Aceptá solo amigos que conocés en persona</td></tr>
      </table>
      <p>Revisen la configuración cada tanto: las apps cambian sus opciones.</p>
      <p>Por ejemplo, poner "solo amigos pueden escribirme" en un juego evita que desconocidos te manden mensajes.</p>` },
  ],
  practica: [
    "Completá la tabla \"Mi día\" con las horas de cada cosa. Anotá cuántas horas son de pantallas.",
    "Elegí un buen hábito de descanso y probalo una semana. Anotá cuántos días lo cumpliste.",
    "Con un adulto, revisá la lista de configuración en una app o juego. Anotá cuántas casillas marcaste.",
  ],
  recursos: [
    { t: "PantallasAmigas: videos y consejos (para ver con un adulto)", url: "https://www.pantallasamigas.net/" },
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
  ],
  quiz: [
    { q: "Si te enojás mucho cuando te piden dejar el celular, ¿qué puede indicar?", opciones: ["Que todo está bien","Que el celular está roto","Que estás pasando mucho tiempo con pantallas","Nada"], correcta: 2, explicacion: "Es una señal para equilibrar. \"Todo está bien\" tienta, pero vale la pena mirarlo." },
    { q: "Si querés saber cuánto tiempo usás cada app, ¿qué hacés?", opciones: ["Lo mirás en el celular con un adulto","Lo adivinás","Lo ignorás","Le preguntás a un desconocido"], correcta: 0, explicacion: "El celular lo registra. Adivinar tienta, pero casi siempre calculás de menos." },
    { q: "Si mirás \"solo un video más\" diez veces seguidas, ¿qué puede pasar?", opciones: ["Nada","Que pasen 2 minutos","Que duermas mejor","Que se te pase una hora sin darte cuenta"], correcta: 3, explicacion: "Los videos cortos suman mucho tiempo. \"2 minutos\" tienta porque cada uno es corto." },
    { q: "Si usás el celular justo antes de dormir, ¿qué pasa?", opciones: ["Dormís mejor","Te cuesta más dormirte","No pasa nada","Soñás más lindo"], correcta: 1, explicacion: "La luz de la pantalla te despierta. \"No pasa nada\" tienta, pero el sueño se acorta." },
    { q: "Si dejás el celular en la cama a la noche, ¿qué puede pasar?", opciones: ["Que duermas más","Nada","Que las notificaciones te despierten","Que cargue más rápido"], correcta: 2, explicacion: "Fuera de la cama dormís mejor. \"Nada\" tienta si lo silenciás, pero igual da ganas de mirarlo." },
    { q: "Si tenés entre 10 y 13 años, ¿cuántas horas conviene dormir?", opciones: ["Entre 9 y 11 horas por noche","4 horas","6 horas","15 horas"], correcta: 0, explicacion: "A tu edad el cuerpo necesita mucho sueño. 6 horas tienta porque algunos adultos duermen eso, pero no alcanza." },
    { q: "Si desconectás un rato, ¿qué podés hacer?", opciones: ["Nada, es aburrido","Mirar otra pantalla","Quedarte quieto","Jugar, leer, dibujar o salir"], correcta: 3, explicacion: "Hay muchas cosas para hacer. \"Es aburrido\" tienta al principio, pero después se disfruta." },
    { q: "Si querés que solo tus amigos vean tu cuenta, ¿qué configurás?", opciones: ["Cuenta pública","Cuenta privada, con un adulto","Ubicación activada","Nada"], correcta: 1, explicacion: "Privada es solo para amigos. Pública tienta para tener más seguidores, pero te ve cualquiera." },
    { q: "Si un juego permite que te escriban desconocidos, ¿qué cambiás?", opciones: ["Lo dejás así","Aceptás a todos","Ponés que solo te escriban amigos o nadie","Le das tu número a todos"], correcta: 2, explicacion: "Así evitás mensajes de desconocidos. Dejarlo así tienta por pereza, pero cualquiera te escribe." },
    { q: "Si una red social pide 13 años y tenés 11, ¿qué pasa si mentís la edad?", opciones: ["Te quedás sin las protecciones para chicos","Nada","Tenés más protección","Te regalan un premio"], correcta: 0, explicacion: "Las protecciones dependen de la edad. \"Nada\" tienta porque todos lo hacen, pero quedás menos cuidado." },
    { q: "Si te llega una solicitud de amistad de alguien que no conocés en persona, ¿qué hacés?", opciones: ["La aceptás para tener más amigos","La aceptás si tiene foto","Le mandás tus datos","No la aceptás"], correcta: 3, explicacion: "Aceptá solo a quienes conocés en persona. \"Si tiene foto\" tienta, pero la foto puede ser falsa." },
    { q: "Si ya configuraste una app hace mucho, ¿qué hacés?", opciones: ["Nunca más la mirás","La revisás de nuevo cada tanto con un adulto","La ponés pública","Le pedís a un desconocido que la revise"], correcta: 1, explicacion: "Las apps cambian sus opciones. \"Nunca más\" tienta, pero pueden aparecer opciones nuevas." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: mi pacto para internet",
  nivel: "Avanzado",
  objetivos: [
    "Escribir tu pacto para usar internet con cuidado",
    "Evaluarlo con una rúbrica junto a un adulto",
    "Enseñarle a otro chico lo que aprendiste",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>pacto para internet</strong>: una hoja con tus reglas. La hacés vos y la charlás con tu adulto de confianza.</p>
      <table>
        <tr><th>Parte del pacto</th><th>Módulo</th></tr>
        <tr><td>Mis adultos de confianza y la regla de oro</td><td>Internet: lo bueno y los cuidados</td></tr>
        <tr><td>Datos que no comparto y mi truco de contraseña</td><td>Tus datos y tus contraseñas</td></tr>
        <tr><td>Señales de alarma y qué hago</td><td>Desconocidos y señales de alarma</td></tr>
        <tr><td>Cómo trato a los demás</td><td>Ciberbullying y buen trato</td></tr>
        <tr><td>Antes de tocar un link</td><td>Engaños, premios y links falsos</td></tr>
        <tr><td>Horarios de pantalla y descanso</td><td>Pantallas, descanso y configuración</td></tr>
      </table>
      <pre><code>Ejemplo de pacto:
- Mis adultos de confianza: mamá y la abuela Ana.
- Si algo me hace sentir mal: paro, guardo y cuento.
- No comparto mi dirección, mi escuela ni mis contraseñas.
- No hablo con desconocidos ni me encuentro con nadie de internet.
- No reenvío fotos para burlarme de nadie.
- Antes de tocar un link, me hago las 4 preguntas.
- El celular duerme en la cocina.</code></pre>
      <p>Por ejemplo, podés decorar tu pacto y pegarlo en la pared, cerca de donde usás la compu.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista para revisar si algo está completo. Revisá tu pacto junto a tu adulto de confianza.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Datos</td><td>Dice qué datos no comparte y cómo arma su contraseña</td><td>Solo uno de los dos</td><td>No dice nada</td></tr>
        <tr><td>Señales de alarma</td><td>Nombra al menos 3 señales y qué hacer</td><td>Menos de 3</td><td>No hay</td></tr>
        <tr><td>Buen trato</td><td>Dice cómo trata a los demás y qué hace si ve bullying</td><td>Solo uno</td><td>No hay</td></tr>
        <tr><td>Links y engaños</td><td>Tiene las preguntas antes de tocar un link</td><td>Algunas</td><td>No hay</td></tr>
        <tr><td>Pantallas</td><td>Tiene horarios y un hábito de descanso</td><td>Solo uno</td><td>No hay</td></tr>
        <tr><td>Adultos de confianza</td><td>Nombra al menos 2 y la regla de oro</td><td>—</td><td>No nombra a ningún adulto</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡listo!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Adultos de confianza" tiene 0, el pacto no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un pacto muy completo que no dice a quién pedir ayuda no está listo. Lo más importante es saber a quién contarle.</p>` },
    { titulo: "Enseñarle a otro", html: `
      <p class="idea">Una de las mejores formas de aprender es enseñar. Si le contás a otro chico lo que sabés, los dos se cuidan mejor.</p>
      <table>
        <tr><th>A quién</th><th>Qué le podés enseñar</th></tr>
        <tr><td>Un hermano o primo más chico</td><td>La regla de oro y no hablar con desconocidos</td></tr>
        <tr><td>Un amigo</td><td>El truco de la contraseña y las señales de alarma</td></tr>
        <tr><td>Tu grupo de la escuela</td><td>No reenviar fotos para burlarse</td></tr>
        <tr><td>Un adulto</td><td>Las 4 preguntas antes de tocar un link</td></tr>
      </table>
      <pre><code>Para enseñar en 3 minutos:
1. Contá una situación ("¿Qué harías si...?").
2. Escuchá qué contesta.
3. Explicá la regla con un ejemplo.
4. Preguntale cuál es su adulto de confianza.</code></pre>
      <p>Si alguien te cuenta un problema, ayudalo a contárselo a un adulto. No lo resuelvas solo.</p>
      <p>Por ejemplo, contale a tu primo de 8 años la regla de oro con un ejemplo de un juego. Eso lo puede cuidar el día que le pase algo.</p>` },
  ],
  practica: [
    "Escribí tu pacto para internet con las 6 partes. Anotá cuántas reglas tiene.",
    "Revisá tu pacto con la rúbrica junto a un adulto y anotá el puntaje de cada criterio y el total.",
    "Enseñale una regla a otro chico en 3 minutos y anotá qué regla elegiste y qué te contestó.",
  ],
  recursos: [
    { t: "Con vos en la web: para ver con un adulto (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "Dónde pedir ayuda: 137, 102 y más (para ver con un adulto)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia" },
    { t: "PantallasAmigas: videos y consejos (para ver con un adulto)", url: "https://www.pantallasamigas.net/" },
  ],
  quiz: [
    { q: "Si armás tu pacto para internet, ¿qué tiene que tener?", opciones: ["Solo los juegos que te gustan","Solo tus contraseñas escritas","Adultos de confianza, datos, señales, buen trato, links y pantallas","Nada"], correcta: 2, explicacion: "El pacto junta todo el curso. Escribir tus contraseñas tienta para no olvidarlas, pero no van en el pacto." },
    { q: "Si tu pacto no nombra a ningún adulto de confianza, ¿está listo?", opciones: ["No: es lo más importante y no se compensa con el total","Sí, si lo demás está bien","Sí, siempre","Depende del día"], correcta: 0, explicacion: "La regla de la rúbrica lo dice. \"Si lo demás está bien\" tienta, pero sin adulto no sabés a quién contar." },
    { q: "Si tu pacto nombra 2 señales de alarma, ¿cuánto saca en ese criterio?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto: tiene menos de 3"], correcta: 3, explicacion: "La rúbrica pide al menos 3. Sacar 2 tienta porque hay señales, pero faltan." },
    { q: "Si tu pacto saca 9, ¿qué hacés?", opciones: ["Lo tirás","Mejorás lo que sacó 0 o 1","Lo dejás así para siempre","Cambiás la rúbrica"], correcta: 1, explicacion: "Se mejora lo que falta. Tirarlo tienta si te frustra, pero está casi listo." },
    { q: "Si querés acordarte de tu pacto, ¿dónde lo ponés?", opciones: ["Escondido en un cajón","En internet para todos","Cerca de donde usás la compu o el celular","En ningún lado"], correcta: 2, explicacion: "A la vista te lo recuerda. Publicarlo en internet tienta para mostrarlo, pero puede tener datos tuyos." },
    { q: "Si querés enseñarle a tu primo chico, ¿qué le contás primero?", opciones: ["La regla de oro: si algo te hace sentir mal, contale a un adulto","Tu contraseña","Cómo entrar a redes con otra edad","Nada"], correcta: 0, explicacion: "La regla de oro es lo más importante. Tu contraseña tienta para enseñarle, pero no se comparte." },
    { q: "Si querés enseñar en 3 minutos, ¿cómo empezás?", opciones: ["Con una lista de 50 reglas","Retando al otro","Sin preguntar nada","Contando una situación: \"¿Qué harías si...?\""], correcta: 3, explicacion: "Una situación hace pensar. La lista larga tienta por completa, pero aburre." },
    { q: "Si un amigo te cuenta que alguien de internet le pide fotos, ¿qué hacés?", opciones: ["Lo resolvés vos solo","Lo ayudás a contárselo a un adulto","Le decís que no pasa nada","Lo contás en el grupo de la escuela"], correcta: 1, explicacion: "Es un problema para un adulto. Resolverlo solo tienta para ayudar, pero no alcanza." },
    { q: "Si tu pacto dice \"el celular duerme en la cocina\", ¿qué cuida?", opciones: ["Tu contraseña","Tus fotos","Tu descanso","Nada"], correcta: 2, explicacion: "Lejos de la cama dormís mejor. \"Nada\" tienta porque es una regla simple, pero ayuda mucho." },
    { q: "Si en tu pacto escribís \"no reenvío fotos para burlarme\", ¿qué parte cumple?", opciones: ["Buen trato","Pantallas","Links","Contraseñas"], correcta: 0, explicacion: "Es sobre cómo tratás a otros. Links tienta porque se reenvía algo, pero es buen trato." },
    { q: "Si querés revisar tu pacto, ¿con quién lo hacés?", opciones: ["Con un desconocido de un juego","Solo","Con nadie","Con tu adulto de confianza"], correcta: 3, explicacion: "Tu adulto te ayuda a completarlo. Hacerlo solo tienta, pero se te pueden escapar cosas." },
    { q: "Si después del curso algo te hace sentir mal en internet, ¿qué hacés?", opciones: ["Me lo guardo","Paro, guardo y cuento a un adulto de confianza","Respondo enojado","Lo borro y me olvido"], correcta: 1, explicacion: "Es la regla de oro. Borrar y olvidar tienta, pero perdés la ayuda y las pruebas." },
  ],
},
];
