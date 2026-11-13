// Temario del curso "Seguridad digital y estafas". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js seguridad-digital y node tools/metodologia.js seguridad-digital
window.TEMARIO = [
{
  id: "trucos",
  icono: "🎣",
  titulo: "Cómo piensan los estafadores",
  nivel: "Básico",
  objetivos: [
    "Reconocer las cuatro palancas de un engaño: apuro, miedo, premio y autoridad",
    "Aplicar la regla del minuto y cortar la comunicación para verificar por tu cuenta",
    "Explicar con datos reales por qué cualquiera puede caer en una estafa virtual",
  ],
  lecciones: [
    { titulo: "Cualquiera puede caer", html: `
      <p class="idea">Las estafas virtuales no le pasan solo a la gente distraída. Están pensadas por profesionales para engañar a cualquiera, y funcionan cuando te agarran apurado, asustado o ilusionado.</p>
      <p>Según el informe anual de la Unidad Fiscal Especializada en Ciberdelincuencia (UFECI) del Ministerio Público Fiscal, que publicó Chequeado, en 2024 hubo en Argentina <strong>34.468 denuncias</strong> por delitos informáticos, un 21% más que el año anterior. Y esas son solo las que se denunciaron.</p>
      <table>
        <tr><th>Tipo de delito</th><th>Parte de las denuncias de 2024</th></tr>
        <tr><td>Fraudes en línea (compras, home banking, inversiones)</td><td>63%</td></tr>
        <tr><td>Robo de identidad</td><td>13,5%</td></tr>
        <tr><td>Entrar a cuentas ajenas (WhatsApp, billeteras virtuales, redes)</td><td>8,3%</td></tr>
        <tr><td>Mails y mensajes falsos para robar datos</td><td>4,5%</td></tr>
      </table>
      <p>Dentro de los fraudes en línea, más de la mitad fueron por compras de productos o servicios. Y entre las cuentas robadas, la más afectada fue WhatsApp. Por eso el curso tiene módulos enteros sobre compras, plata y WhatsApp.</p>
      <p>A esto se le llama <strong>ingeniería social</strong>: engañar a una persona para que haga algo que la perjudica, como dar una clave o transferir plata. No hace falta "hackear" nada: el estafador consigue que la víctima le abra la puerta.</p>
      <p>Por ejemplo, nadie le roba la cuenta de WhatsApp a tu tía con una computadora potente. Le escriben haciéndose pasar por un conocido, le piden "un código que te llegó por error" y ella se lo pasa. Con ese código, la cuenta es de ellos.</p>
      <p><strong>La buena noticia:</strong> casi todas las estafas usan los mismos trucos. Si aprendés a reconocerlos, te das cuenta aunque el cuento sea nuevo. Eso es lo que vas a aprender en este curso, y también a ayudar a otras personas de tu familia.</p>` },
    { titulo: "Las cuatro palancas del engaño", html: `
      <p class="idea">Casi todas las estafas tocan una de cuatro emociones para que no pienses: el <strong>apuro</strong>, el <strong>miedo</strong>, el <strong>premio</strong> y la <strong>autoridad</strong>. Si sentís una de ellas con fuerza, es el momento de frenar.</p>
      <table>
        <tr><th>Palanca</th><th>Qué te hacen sentir</th><th>Frases típicas</th></tr>
        <tr><td>Apuro</td><td>Que no hay tiempo para pensar</td><td>"Tenés 10 minutos", "si no lo hacés ahora se pierde"</td></tr>
        <tr><td>Miedo</td><td>Que algo malo va a pasar</td><td>"Detectamos un movimiento sospechoso en tu cuenta", "tu hijo tuvo un accidente"</td></tr>
        <tr><td>Premio</td><td>Que ganaste algo</td><td>"Ganaste un sorteo", "inversión con ganancia garantizada", "trabajo desde casa, mucha plata"</td></tr>
        <tr><td>Autoridad</td><td>Que te habla alguien importante</td><td>"Le hablo del banco", "soy de ANSES", "le escribe la policía"</td></tr>
      </table>
      <p>Muchas veces usan dos o tres juntas. Por ejemplo:</p>
      <pre><code>"Le hablamos del área de seguridad de su banco (autoridad).
Detectamos una compra de $350.000 con su tarjeta (miedo).
Para cancelarla tiene que hacer el procedimiento ahora,
antes de que se acredite (apuro)."</code></pre>
      <p>En la vida real, un banco no te llama para que hagas cosas en el cajero o en la app. El BCRA lo dice claro: no vayas al cajero, a la app ni al home banking por indicación de quien te llama; la comunicación la tenés que iniciar vos.</p>
      <p><strong>Otra señal: te piden algo que no se pide.</strong> Una clave, un código que te llegó por SMS, una foto de tu DNI, una transferencia "de prueba". Ningún banco ni organismo serio te pide esas cosas por teléfono, mail o mensaje.</p>
      <p>Las cuatro palancas funcionan con cualquiera, incluso con gente que sabe mucho de computación, porque no atacan lo que sabés: atacan lo que sentís en ese momento.</p>` },
    { titulo: "La regla del minuto y cortar para verificar", html: `
      <p class="idea">El BCRA cierra sus recomendaciones con una idea simple: antes de actuar, tomate un minuto. Y si algo te parece raro, cortá y verificá vos por un canal que conocés.</p>
      <p><strong>La regla del minuto.</strong> Los estafadores necesitan que actúes rápido. Si te tomás un minuto para respirar y pensar, la mayoría de los engaños se caen solos. Ningún trámite real se pierde por esperar un minuto.</p>
      <p><strong>Cortar y verificar.</strong> Si te llaman o te escriben diciendo ser de un lugar, no sigas la conversación ni uses el número o el link que te dan. Cortá y comunicate vos:</p>
      <table>
        <tr><th>Si dicen ser...</th><th>Verificás así</th></tr>
        <tr><td>Tu banco</td><td>Llamás al número que figura atrás de tu tarjeta o en la app oficial</td></tr>
        <tr><td>Un familiar con número nuevo</td><td>Llamás al número viejo de esa persona o a otro familiar</td></tr>
        <tr><td>Un organismo (ANSES, AFIP, el correo)</td><td>Entrás vos a la página oficial escribiendo la dirección, no por el link</td></tr>
        <tr><td>Una tienda donde compraste</td><td>Entrás a tu cuenta en la tienda desde la app o la página</td></tr>
      </table>
      <p>Por ejemplo, te llega un WhatsApp: "Hola ma, cambié de número, guardá este. Necesito que me hagas una transferencia urgente". Antes de nada, llamá al número de siempre de tu hijo o tu hija. Si atiende y no sabe nada, era una estafa.</p>
      <p><strong>Una palabra clave familiar.</strong> Algunas familias acuerdan una palabra secreta para emergencias: si alguien pide plata urgente "de parte de" un familiar y no sabe la palabra, no es quien dice ser. Es simple y sirve también ahora que hay programas que imitan voces.</p>
      <pre><code>Sentís apuro, miedo, ilusión o "me habla alguien importante"
        ↓
Te tomás un minuto
        ↓
Cortás y verificás por un canal que conocés
        ↓
Si era real, lo hacés tranquilo. Si no, te salvaste.</code></pre>` },
  ],
  practica: [
    "Buscá en tu celular 3 mensajes o mails que hayas recibido de empresas o desconocidos. Para cada uno, anotá qué palanca usa (apuro, miedo, premio o autoridad) o si no usa ninguna.",
    "Anotá los canales oficiales para verificar de tu banco, de tu billetera virtual y de un organismo que uses (teléfono o dirección web). Compará con lo que figura en la tarjeta o en la app.",
    "Proponé en tu familia una palabra clave para emergencias. Anotá cuántas personas la acordaron y dónde la van a recordar sin escribirla en el celular.",
  ],
  recursos: [
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
    { t: "Chequeado: las denuncias de estafas virtuales aumentaron un 21% en 2024", url: "https://chequeado.com/el-explicador/las-denuncias-de-estafas-virtuales-aumentaron-un-21-en-2024-cuales-son-los-tipos-de-fraude-mas-comunes/" },
    { t: "INCIBE (España): guías de ciberseguridad para la ciudadanía, entre ellas cómo identificar fraudes online", url: "https://www.incibe.es/ciudadania/formacion/guias" },
  ],
  quiz: [
    { q: "Tu vecino dice que \"a él nunca lo van a estafar porque sabe de computación\". ¿Qué le respondés?", opciones: ["Que tiene razón","Que solo estafan a los adultos mayores","Que las estafas atacan lo que sentís en el momento, no lo que sabés, así que cualquiera puede caer","Que hay que no usar internet"], correcta: 2, explicacion: "La ingeniería social usa el apuro, el miedo o la ilusión. Pensar que saber de computación alcanza tienta, pero las palancas emocionales funcionan igual con gente que sabe." },
    { q: "Según el informe de la UFECI, ¿qué tipo de delito informático tuvo más denuncias en 2024?", opciones: ["Los fraudes en línea, como compras, home banking e inversiones","Los virus en la computadora","El robo de computadoras","Las fotos borrosas"], correcta: 0, explicacion: "Fueron el 63% de las denuncias, sobre todo por compras. Los virus tientan porque es lo que se imagina como delito informático, pero la mayoría de los casos son engaños a personas." },
    { q: "Te escriben: \"Ganaste un celular, pagá solo el envío en los próximos 15 minutos\". ¿Qué palancas usa?", opciones: ["Miedo y autoridad","Ninguna, es un sorteo","Solo autoridad","Premio y apuro"], correcta: 3, explicacion: "Te ilusiona con un premio y te apura con el tiempo. Pensar que es un sorteo de verdad tienta, pero en un sorteo real no tenés que pagar para recibir el premio." },
    { q: "Te llama alguien del \"banco\" y te pide que vayas al cajero a cancelar una compra sospechosa. ¿Qué hacés?", opciones: ["Vas al cajero rápido para cancelarla","Cortás y llamás vos al número que figura en tu tarjeta","Le pedís que te explique de nuevo","Le das tu número de cliente para que verifique"], correcta: 1, explicacion: "El BCRA dice que no vayas al cajero ni a la app por indicación de quien te llama. Pedir más explicaciones tienta, pero el estafador tiene una respuesta para todo." },
    { q: "Te piden \"el código que te llegó por SMS\" para \"confirmar tu identidad\". ¿Qué concluís?", opciones: ["Que es un trámite normal","Que el código no sirve para nada","Que es una estafa: ningún banco ni organismo pide los códigos que te llegan","Que es seguro si es un número de celular argentino"], correcta: 2, explicacion: "Esos códigos son la llave de tus cuentas. Que es un trámite normal tienta porque muchas apps mandan códigos, pero te los mandan para que los escribas vos, nunca para dárselos a alguien." },
    { q: "Si sentís mucho miedo o mucho apuro por un mensaje, ¿qué conviene hacer?", opciones: ["Tomarte un minuto antes de actuar","Actuar rápido antes de que sea tarde","Reenviárselo a todos tus contactos","Contestar para pedir más datos"], correcta: 0, explicacion: "Las estafas necesitan que actúes sin pensar. Actuar rápido tienta justo por el miedo, pero ningún trámite real se pierde por esperar un minuto." },
    { q: "Te llega un WhatsApp: \"Hola, soy tu hijo, cambié de número, necesito plata urgente\". ¿Qué hacés primero?", opciones: ["Le transferís, total es tu hijo","Le pedís una foto para confirmar","Le preguntás cómo se llama","Llamás al número de siempre de tu hijo"], correcta: 3, explicacion: "Verificás por un canal que ya conocés. Pedir una foto tienta, pero el estafador puede sacarla de las redes de tu hijo." },
    { q: "Te mandan un mail de \"ANSES\" con un link para cobrar un bono. ¿Cómo lo verificás?", opciones: ["Hacés clic en el link para ver si es real","Entrás vos a la página oficial escribiendo la dirección, sin usar el link","Contestás el mail preguntando","Llamás al teléfono que figura en el mail"], correcta: 1, explicacion: "El link y el teléfono del mensaje los puso el estafador. Llamar al número del mail tienta porque parece verificar, pero te atiende el mismo estafador." },
    { q: "Querés protegerte de que alguien imite la voz de un familiar para pedirte plata. ¿Qué podés acordar?", opciones: ["No atender más el teléfono","Pedir siempre que te manden un audio","Una palabra clave familiar para emergencias","Darle a todos tu clave del banco"], correcta: 2, explicacion: "Si quien pide plata no sabe la palabra, no es quien dice ser. Pedir un audio tienta, pero hay programas que imitan voces con pocos segundos de grabación." },
    { q: "¿Qué es la ingeniería social?", opciones: ["Engañar a una persona para que haga algo que la perjudica, como dar una clave","Una carrera universitaria de ingeniería","Un virus que entra solo a la computadora","La forma en que funcionan las redes sociales"], correcta: 0, explicacion: "Es el engaño a la persona, no a la máquina. El virus tienta porque suena a ataque informático, pero en la ingeniería social la víctima abre la puerta sin darse cuenta." },
    { q: "Un mensaje dice: \"Le escribe la Policía Federal. Tiene una causa abierta, pague la multa hoy para evitar la detención\". ¿Qué palancas usa?", opciones: ["Solo premio","Ninguna, la policía avisa así","Solo apuro","Autoridad, miedo y apuro"], correcta: 3, explicacion: "Usa la autoridad de la policía, el miedo a la detención y el apuro del \"hoy\". Pensar que la policía avisa así tienta por el susto, pero una causa real no se paga por mensaje." },
    { q: "Tu tía te cuenta que casi transfiere plata, pero se frenó porque \"algo no le cerraba\". ¿Qué le decís?", opciones: ["Que fue exagerada","Que hizo muy bien: frenar y verificar es la mejor defensa","Que la próxima transfiera rápido para no perder la oportunidad","Que tendría que haber dado sus datos para ver qué pasaba"], correcta: 1, explicacion: "Frenar cuando algo no cierra es exactamente lo que recomienda el BCRA. Decirle que exageró tienta para no preocuparla, pero la hace dudar de lo que la salvó." },
  ],
},
{
  id: "claves",
  icono: "🔑",
  titulo: "Contraseñas y verificación en dos pasos",
  nivel: "Básico",
  objetivos: [
    "Armar contraseñas largas y fáciles de recordar con el método de la frase",
    "Activar la verificación en dos pasos en tu mail y en WhatsApp",
    "Decidir dónde guardar tus contraseñas y qué hacer si una se filtró",
  ],
  lecciones: [
    { titulo: "Una buena contraseña: larga y única", html: `
      <p class="idea">Una contraseña buena tiene dos cosas: es <strong>larga</strong> y es <strong>única</strong>, es decir, no la usás en ningún otro lado. El largo importa más que los símbolos raros.</p>
      <p>Los programas que adivinan contraseñas prueban millones de combinaciones por segundo, empezando por las más comunes: 123456, el nombre del perro, la fecha de cumpleaños. Cada letra de más multiplica las combinaciones que tienen que probar.</p>
      <table>
        <tr><th>Contraseña</th><th>¿Es buena?</th><th>Por qué</th></tr>
        <tr><td>123456</td><td>No</td><td>Es de las más usadas del mundo: es lo primero que prueban</td></tr>
        <tr><td>Boca1905</td><td>No</td><td>Un club y un año: muy fácil de adivinar si te conocen</td></tr>
        <tr><td>Xk#9p!</td><td>Floja</td><td>Rara, pero corta y difícil de recordar</td></tr>
        <tr><td>MiPerroComeMandarinasLosMartes</td><td>Sí</td><td>Larga, fácil de recordar y no tiene sentido para nadie más</td></tr>
      </table>
      <p><strong>El método de la frase.</strong> Pensá una frase absurda de 4 o 5 palabras que puedas imaginar como una escena, y usala como contraseña. Si el sitio pide números o símbolos, agregalos: MiPerroComeMandarinas3Martes!.</p>
      <p><strong>Que sea única.</strong> Este es el error más común: usar la misma contraseña en todos lados. Cuando una página chica sufre una filtración (un robo de datos), los delincuentes prueban esa misma contraseña en tu mail, tu banco y tus redes. Si es la misma, entran en todo. El BCRA también lo recomienda: no repitas la misma clave en distintos servicios.</p>
      <p><strong>La más importante es la del mail.</strong> Con tu mail se pueden recuperar casi todas tus otras cuentas ("¿olvidaste tu contraseña?"). Si alguien entra a tu mail, puede cambiar todas las demás. Por eso, la contraseña del mail tiene que ser la mejor y no estar en ningún otro lado.</p>
      <p>Por ejemplo, si solo vas a cambiar una contraseña hoy, que sea la del mail.</p>` },
    { titulo: "La verificación en dos pasos", html: `
      <p class="idea">La <strong>verificación en dos pasos</strong> agrega una segunda llave: además de la contraseña, te pide un código que te llega al celular o que genera una app. Aunque alguien sepa tu contraseña, sin ese código no entra.</p>
      <p>Es como una puerta con dos cerraduras: la contraseña es lo que sabés y el celular es lo que tenés. Un ladrón que consiguió una de las dos llaves igual se queda afuera.</p>
      <table>
        <tr><th>Cuenta</th><th>Dónde se activa</th></tr>
        <tr><td>Gmail / Google</td><td>Cuenta de Google → Seguridad → Verificación en dos pasos</td></tr>
        <tr><td>WhatsApp</td><td>Configuración → Cuenta → Verificación en dos pasos → crear un PIN de 6 dígitos</td></tr>
        <tr><td>Redes sociales (Instagram, Facebook)</td><td>Configuración → Centro de cuentas → Contraseña y seguridad</td></tr>
        <tr><td>Banco y billetera virtual</td><td>En su app; muchos ya lo traen activado con un token</td></tr>
      </table>
      <p>Los menús cambian seguido. Si no lo encontrás, buscá en la ayuda oficial de la app "verificación en dos pasos" (en inglés se llama <em>two-factor authentication</em> o 2FA).</p>
      <p><strong>Formas de recibir el segundo paso, de menos a más seguras:</strong></p>
      <ol>
        <li><strong>SMS:</strong> mejor que nada, pero alguien podría desviar tus mensajes.</li>
        <li><strong>Una app de autenticación</strong> que genera códigos cada 30 segundos.</li>
        <li><strong>Un aviso en el celular</strong> que tocás para confirmar ("¿Sos vos el que intenta entrar?").</li>
      </ol>
      <p><strong>La regla de oro: ese código es solo para vos.</strong> La verificación en dos pasos te protege solo si nunca le pasás el código a nadie. Los estafadores lo saben, y por eso inventan excusas para que se lo des: "te llegó por error", "es para confirmar el envío". Ningún banco, empresa ni organismo te lo va a pedir.</p>
      <p>Por ejemplo, si te llega un código que no pediste, quiere decir que alguien está intentando entrar a tu cuenta con tu contraseña. No lo compartas y cambiá la contraseña.</p>` },
    { titulo: "Dónde guardarlas y qué hacer si se filtró una", html: `
      <p class="idea">Nadie puede recordar 30 contraseñas distintas. Para eso existen los <strong>gestores de contraseñas</strong>: un lugar seguro, con una sola contraseña maestra, que guarda todas las demás.</p>
      <table>
        <tr><th>Dónde guardarlas</th><th>¿Conviene?</th></tr>
        <tr><td>Un gestor de contraseñas (el de Google, el de Apple o uno de una empresa conocida)</td><td>Sí: las guarda cifradas y las completa solo</td></tr>
        <tr><td>Un cuaderno en casa, bien guardado</td><td>Aceptable para pocas cuentas, si nadie más lo ve</td></tr>
        <tr><td>Una nota en el celular o un mail a vos mismo</td><td>No: si te roban el celular o el mail, están todas</td></tr>
        <tr><td>Un papelito pegado en la computadora</td><td>No: lo ve cualquiera</td></tr>
      </table>
      <p>Los navegadores y los celulares traen un gestor incorporado: por ejemplo, el de Google guarda las contraseñas en tu cuenta de Google y te avisa si alguna es débil, está repetida o apareció en una filtración. Si usás uno, la contraseña de esa cuenta tiene que ser excelente y con verificación en dos pasos.</p>
      <p><strong>¿Cómo saber si una contraseña tuya se filtró?</strong></p>
      <ul>
        <li>El gestor de Google y el de Apple te avisan solos.</li>
        <li>La página <em>Have I Been Pwned</em> (en inglés) te dice si tu mail apareció en filtraciones conocidas. Escribís solo tu mail, nunca una contraseña.</li>
        <li>Algunas apps te mandan un aviso de "inicio de sesión nuevo" que no reconocés.</li>
      </ul>
      <p><strong>Si se filtró:</strong></p>
      <ol>
        <li>Cambiala en esa cuenta.</li>
        <li>Cambiala en todas las cuentas donde usabas la misma.</li>
        <li>Activá la verificación en dos pasos si no la tenías.</li>
        <li>Revisá la cuenta: dispositivos conectados, mails reenviados, cambios que no hiciste.</li>
      </ol>
      <p>Por ejemplo, si una tienda en la que compraste hace años sufrió una filtración y usabas ahí la misma contraseña que en tu mail, cambiá primero la del mail. Esa es la que abre todas las puertas.</p>` },
  ],
  practica: [
    "Armá con el método de la frase una contraseña nueva para tu mail (no la escribas en ningún lado). Contá cuántas letras tiene y anotá solo ese número.",
    "Activá la verificación en dos pasos en tu mail y en WhatsApp. Anotá qué método elegiste en cada uno (SMS, app o aviso en el celular).",
    "Revisá en la página Have I Been Pwned o en el gestor de contraseñas de tu celular si tu mail aparece en alguna filtración. Anotá cuántas encontró y qué contraseñas cambiaste.",
  ],
  recursos: [
    { t: "Google: crear una contraseña segura y proteger mejor la cuenta", url: "https://support.google.com/accounts/answer/32040?hl=es" },
    { t: "Google: activar la verificación en dos pasos", url: "https://support.google.com/accounts/answer/185839?hl=es" },
    { t: "WhatsApp: cómo administrar la verificación en dos pasos", url: "https://faq.whatsapp.com/1920866721452534" },
    { t: "Have I Been Pwned: saber si tu mail apareció en una filtración (en inglés)", url: "https://haveibeenpwned.com/" },
  ],
  quiz: [
    { q: "Tenés que elegir una contraseña nueva. ¿Cuál es mejor?", opciones: ["\"Boca1905\"","\"Xk#9p!\"","\"MiPerroComeMandarinasLosMartes\"","\"123456\""], correcta: 2, explicacion: "Larga, fácil de recordar y sin sentido para otros. \"Xk#9p!\" tienta porque parece complicada, pero es corta, y el largo importa más que los símbolos." },
    { q: "Usás la misma contraseña en el mail y en una tienda online, y la tienda sufre una filtración. ¿Qué pasa?", opciones: ["Los delincuentes pueden probar esa contraseña en tu mail y entrar","Nada, solo afecta a la tienda","Se borra tu cuenta de la tienda","Te avisan siempre antes de usarla"], correcta: 0, explicacion: "Con una contraseña filtrada prueban en todos lados. Que solo afecta a la tienda tienta, pero si la repetiste, abre también tus otras cuentas." },
    { q: "Solo tenés tiempo de cambiar una contraseña hoy. ¿Cuál elegís?", opciones: ["La de un juego","La de una tienda donde compraste una vez","La del Wi-Fi de tu casa","La del mail"], correcta: 3, explicacion: "Con el mail se recuperan casi todas las demás cuentas. La del Wi-Fi tienta porque la usás todos los días, pero si alguien entra a tu mail puede cambiar todas tus contraseñas." },
    { q: "Alguien consiguió tu contraseña de Gmail, pero tenés activada la verificación en dos pasos. ¿Qué pasa?", opciones: ["Entra igual, la contraseña alcanza","No puede entrar sin el código o la confirmación de tu celular","Se borra tu cuenta","Google le manda el código a él"], correcta: 1, explicacion: "La segunda llave está en tu celular. Pensar que la contraseña alcanza tienta, pero esa es justo la protección que agrega el segundo paso, mientras no compartas el código." },
    { q: "Te llega un código de verificación de tu mail que vos no pediste. ¿Qué concluís?", opciones: ["Que es un error del sistema","Que tenés que reenviárselo a quien te lo pida","Que alguien intenta entrar con tu contraseña: no compartas el código y cambiala","Que te ganaste algo"], correcta: 2, explicacion: "Un código que no pediste indica que alguien tiene tu contraseña. Pensar que es un error tienta porque no hiciste nada, pero es la señal para cambiarla." },
    { q: "Querés activar la verificación en dos pasos en WhatsApp. ¿Qué tenés que crear?", opciones: ["Un PIN de 6 dígitos","Una contraseña de 20 letras","Una foto de tu DNI","Un código que te manda un contacto"], correcta: 0, explicacion: "WhatsApp pide un PIN de 6 dígitos que solo sabés vos. Pensar que hace falta una foto del DNI tienta porque se pide en otros trámites, pero WhatsApp nunca la pide." },
    { q: "¿Cuál de estas formas de recibir el segundo paso es la menos segura?", opciones: ["Una app de autenticación","Un aviso en el celular para confirmar","Todas son iguales","El SMS"], correcta: 3, explicacion: "El SMS es mejor que nada, pero los mensajes se pueden desviar. Que todas son iguales tienta por simple, pero las apps y los avisos no dependen de la línea telefónica." },
    { q: "Tu primo guarda todas sus contraseñas en una nota del celular. ¿Qué le aconsejás?", opciones: ["Que está bien, el celular es personal","Usar un gestor de contraseñas con una contraseña maestra muy buena","Que las mande por mail a sí mismo","Que use la misma en todos lados para no anotarlas"], correcta: 1, explicacion: "Si le roban el celular, la nota tiene todas sus claves. Usar la misma en todos lados tienta para no tener que anotar, pero es el error más peligroso de todos." },
    { q: "Querés saber si tu mail apareció en una filtración con Have I Been Pwned. ¿Qué escribís en la página?", opciones: ["Tu mail y tu contraseña","Tu número de DNI","Solo tu mail","Tu contraseña sola"], correcta: 2, explicacion: "La página busca tu mail en filtraciones conocidas. Escribir la contraseña tienta para \"ver si se filtró\", pero nunca se escribe una contraseña en una página para probarla." },
    { q: "Te enterás de que una contraseña tuya se filtró y la usabas en tres cuentas. ¿Qué hacés?", opciones: ["La cambiás en las tres cuentas y activás la verificación en dos pasos","La cambiás solo en la cuenta que se filtró","Esperás a ver si pasa algo","Borrás las tres cuentas"], correcta: 0, explicacion: "Si la repetías, las tres están en riesgo. Cambiarla solo donde se filtró tienta porque es donde pasó, pero los delincuentes la prueban en todos lados." },
    { q: "Te piden \"el código que te llegó\" para \"confirmar un envío\". ¿Qué hacés?", opciones: ["Lo pasás, es para el envío","Pasás solo la mitad del código","Lo pasás si te lo piden con amabilidad","No lo pasás: ese código es solo para vos"], correcta: 3, explicacion: "La verificación en dos pasos solo protege si nunca compartís el código. Pasarlo porque te lo piden con amabilidad tienta, pero la amabilidad es parte del engaño." },
    { q: "Usás el gestor de contraseñas de tu cuenta de Google. ¿Qué cuidado extra tenés?", opciones: ["Ninguno, el gestor hace todo","Que la contraseña de tu cuenta de Google sea excelente y tenga verificación en dos pasos","Usar la misma contraseña en el gestor y en todo lo demás","Desactivar la verificación en dos pasos para entrar más rápido"], correcta: 1, explicacion: "Esa cuenta guarda todas las demás, así que es la más importante. Desactivar el segundo paso tienta por comodidad, pero dejaría todas tus claves detrás de una sola contraseña." },
  ],
},
{
  id: "mensajes-falsos",
  icono: "📧",
  titulo: "Mails, SMS y links falsos",
  nivel: "Básico",
  objetivos: [
    "Reconocer un mail, un SMS o un mensaje falso por sus señales: remitente, dirección del link, pedido y urgencia",
    "Revisar adónde lleva un link antes de tocarlo y entrar a los sitios escribiendo la dirección",
    "Decidir qué hacer con un adjunto o un código QR que no esperabas, y cómo reportar el mensaje",
  ],
  lecciones: [
    { titulo: "Las señales de un mensaje falso", html: `
      <p class="idea">El <strong>phishing</strong> (se pronuncia "fishing", como pescar) es un mensaje que se hace pasar por una empresa o un organismo para que toques un link y escribas tus datos. Tiene señales que se repiten.</p>
      <p>Mirá este SMS:</p>
      <pre><code>CORREO ARGENTINO: Su paquete está retenido por falta de pago
de $1.250. Abone hoy para evitar la devolución:
http://correo-argentino-envios.com.pagos-ar.xyz</code></pre>
      <table>
        <tr><th>Señal</th><th>En el ejemplo</th></tr>
        <tr><td>No esperabas el mensaje</td><td>¿Estás esperando un paquete del correo?</td></tr>
        <tr><td>Apuro o miedo</td><td>"Abone hoy para evitar la devolución"</td></tr>
        <tr><td>Te piden plata o datos</td><td>Un pago chico, que en realidad sirve para robar los datos de tu tarjeta</td></tr>
        <tr><td>Un link raro</td><td>La dirección real termina en .xyz, no es la del correo</td></tr>
        <tr><td>Saludo genérico, errores o mayúsculas</td><td>No dice tu nombre; muchos mensajes falsos tienen faltas de ortografía</td></tr>
      </table>
      <p>No hace falta que estén todas: con una o dos, ya conviene desconfiar. Y ojo: cada vez hay mensajes falsos muy bien escritos, con logos perfectos. Un mensaje prolijo no es prueba de que sea real.</p>
      <p><strong>Lo que nunca hace una entidad seria:</strong> el BCRA recuerda que no pide datos personales ni bancarios por mail, redes sociales, llamadas ni mensajes, y que los bancos y organismos nunca te piden cambiar claves ni entregar códigos de verificación. Si un mensaje te lo pide, es falso.</p>
      <p>Según el informe de la UFECI de 2024, los mails falsos ya no imitan solo a bancos: cada vez más se hacen pasar por organismos del Estado. Por ejemplo, avisos falsos de ANSES, de multas de tránsito o de devolución de impuestos.</p>` },
    { titulo: "Leer un link antes de tocarlo", html: `
      <p class="idea">La parte más importante de un link es su <strong>dominio</strong>: el nombre del sitio, justo antes de la primera barra (/). Los estafadores arman direcciones que se parecen a las reales, pero el dominio los delata.</p>
      <p>El dominio se lee de derecha a izquierda desde la primera barra. Lo que manda son las dos últimas partes antes de la barra:</p>
      <pre><code>https://www.bancoejemplo.com.ar/clientes        → bancoejemplo.com.ar   ✔
https://bancoejemplo.com.ar.seguridad-web.com/  → seguridad-web.com     ✘
https://www.banco-ejemplo-clientes.net/login    → banco-ejemplo-clientes.net ✘
https://www.bancoejernplo.com.ar/               → "rn" en vez de "m"    ✘</code></pre>
      <p>En el segundo, "bancoejemplo.com.ar" aparece, pero adelante: el sitio de verdad es seguridad-web.com. En el último cambiaron la "m" por "rn", que de lejos se ven iguales.</p>
      <p><strong>Cómo ver adónde lleva un link sin tocarlo:</strong></p>
      <ul>
        <li><strong>En la computadora:</strong> apoyá el mouse sobre el link (sin hacer clic) y mirá la dirección que aparece abajo a la izquierda.</li>
        <li><strong>En el celular:</strong> mantené apretado el link (sin soltarlo rápido) y aparece la dirección. Después tocá "copiar" o cerrá el cartel.</li>
      </ul>
      <p><strong>El candadito no alcanza.</strong> El candado o el "https" quiere decir que la conexión está cifrada, no que el sitio sea de quien dice. Los sitios falsos también tienen candado.</p>
      <p><strong>La costumbre más segura:</strong> no entres a tu banco, tu billetera virtual ni un organismo desde un link de un mensaje. Abrí la app oficial o escribí vos la dirección en el navegador. Es lo que recomienda el BCRA: verificá que estés en la página legítima.</p>
      <p>Por ejemplo, si te llega un mail de "tu banco" con un link para "actualizar tus datos", no lo toques. Abrí la app del banco: si de verdad hay algo pendiente, va a aparecer ahí.</p>` },
    { titulo: "Adjuntos, códigos QR y cómo reportar", html: `
      <p class="idea">Además de los links, los estafadores usan archivos adjuntos y códigos QR. La regla es la misma: si no lo esperabas, no lo abras ni lo escanees sin verificar.</p>
      <p><strong>Adjuntos.</strong> Un archivo puede instalar un programa malicioso (en inglés, <em>malware</em>) que roba datos o bloquea tu computadora. Desconfiá especialmente de:</p>
      <ul>
        <li>Archivos que terminan en .exe, .apk, .scr o .zip que no esperabas.</li>
        <li>"Facturas", "comprobantes" o "citaciones" de gente que no conocés.</li>
        <li>Documentos que te piden "habilitar contenido" o "habilitar macros" para verse.</li>
        <li>Archivos .apk que te mandan por WhatsApp para "instalar la app del banco": las apps se bajan solo de la tienda oficial.</li>
      </ul>
      <p><strong>Códigos QR.</strong> Un QR es un link escondido en un dibujo. Escanearlo es como tocar un link sin poder leerlo antes. Hay estafas que pegan un QR falso encima del verdadero en un local o en un cartel.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Te mandan un QR para "recibir" plata</td><td>Desconfiá: para recibir plata no hace falta escanear nada</td></tr>
        <tr><td>Un QR en un cartel o un volante</td><td>Mirá la dirección que te muestra el celular antes de abrirla</td></tr>
        <tr><td>El QR de pago de un local</td><td>Antes de confirmar, fijate que el nombre del comercio coincida</td></tr>
      </table>
      <p><strong>Reportar.</strong> Avisar ayuda a que bloqueen la estafa:</p>
      <ul>
        <li>En Gmail: los tres puntos del mensaje → "Notificar phishing".</li>
        <li>En WhatsApp: tocá el nombre del contacto → "Reportar" y "Bloquear".</li>
        <li>Si imita a tu banco, avisale al banco por sus canales oficiales.</li>
        <li>El BCRA recibe los mensajes que simulan ser del BCRA en ayudaenlinea@bcra.gob.ar.</li>
      </ul>
      <p>Por ejemplo, después de reportar, borrá el mensaje. Así nadie de tu casa lo abre por error.</p>` },
  ],
  practica: [
    "Buscá en tu carpeta de spam o de correo no deseado 3 mails sospechosos. Para cada uno anotá cuántas de las 5 señales de la primera lección tiene.",
    "Apoyá el mouse (o mantené apretado en el celular) sobre 3 links de mails reales que recibiste y anotá el dominio de cada uno. Marcá si coincide con la empresa que dice ser.",
    "Reportá un mensaje sospechoso como phishing en tu mail o en WhatsApp. Anotá qué pasos seguiste.",
  ],
  recursos: [
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
    { t: "Manual de cibercuidados: fraudes y estafas (Gobierno de Argentina, PDF)", url: "https://www.argentina.gob.ar/sites/default/files/manual_talleres_ti_cibercuidados_fraudes_y_estafas.pdf" },
    { t: "INCIBE (España): guías de ciberseguridad para la ciudadanía, entre ellas cómo identificar fraudes online", url: "https://www.incibe.es/ciudadania/formacion/guias" },
  ],
  quiz: [
    { q: "Te llega un SMS del \"correo\" porque tu paquete está retenido y tenés que pagar $1.250 hoy. No esperabas ningún paquete. ¿Qué concluís?", opciones: ["Que es real porque el monto es chico","Que tenés que pagar rápido para no perder el paquete","Que es muy probablemente un mensaje falso para robar los datos de tu tarjeta","Que el correo siempre avisa así"], correcta: 2, explicacion: "No lo esperabas, te apura y te pide un pago. Que el monto chico lo haga creíble tienta, pero el objetivo no es el pago: son los datos de tu tarjeta." },
    { q: "Un mail falso tiene el logo perfecto y no tiene ninguna falta de ortografía. ¿Qué tenés en cuenta?", opciones: ["Que un mensaje prolijo no prueba que sea real: hay que mirar el link y lo que pide","Que si está bien escrito es real","Que los mails falsos siempre tienen errores","Que el logo garantiza que es de la empresa"], correcta: 0, explicacion: "Cada vez hay más mensajes falsos impecables. Confiar en el logo tienta, pero copiar un logo es facilísimo." },
    { q: "Tenés que leer este link: https://bancoejemplo.com.ar.seguridad-web.com/ ¿Cuál es el sitio de verdad?", opciones: ["bancoejemplo.com.ar","com.ar","https","seguridad-web.com"], correcta: 3, explicacion: "El dominio son las últimas partes antes de la primera barra. Que sea bancoejemplo.com.ar tienta porque aparece primero, pero está puesto adelante justo para engañarte." },
    { q: "Querés saber adónde lleva un link de un mail sin abrirlo, en la computadora. ¿Qué hacés?", opciones: ["Hacés clic rápido y cerrás","Apoyás el mouse sobre el link sin hacer clic y mirás la dirección abajo","Lo reenviás a un amigo para que lo abra","Le preguntás al remitente"], correcta: 1, explicacion: "La dirección real aparece al apoyar el mouse. Hacer clic rápido tienta, pero con solo abrir algunas páginas ya pueden intentar robarte datos." },
    { q: "Una página tiene candadito y dice \"https\". ¿Ya podés confiar en que es tu banco?", opciones: ["Sí, el candado lo garantiza","Sí, si además es de color verde","No: el candado indica que la conexión está cifrada, no de quién es el sitio","No, ninguna página con candado es segura"], correcta: 2, explicacion: "Los sitios falsos también tienen candado. Que lo garantiza tienta porque durante años se recomendó mirarlo, pero lo que importa es el dominio." },
    { q: "Te llega un mail de tu banco para \"actualizar tus datos\" con un link. ¿Qué hacés?", opciones: ["No tocás el link y abrís vos la app oficial del banco","Tocás el link y revisás si la página se ve bien","Contestás el mail con tus datos","Llamás al número del mail"], correcta: 0, explicacion: "Si de verdad hay algo pendiente, va a aparecer en la app. Revisar si la página se ve bien tienta, pero las páginas falsas son copias exactas." },
    { q: "Te mandan por WhatsApp un archivo .apk para \"instalar la nueva app del banco\". ¿Qué hacés?", opciones: ["Lo instalás si te lo mandó alguien conocido","Lo instalás y después lo borrás","Lo abrís para ver qué tiene","No lo instalás: las apps se bajan solo de la tienda oficial"], correcta: 3, explicacion: "Un .apk fuera de la tienda puede ser un programa malicioso. Instalarlo porque lo mandó un conocido tienta, pero la cuenta de ese conocido puede estar robada." },
    { q: "Un documento adjunto te pide \"habilitar contenido\" para poder verlo. ¿Qué concluís?", opciones: ["Que es normal en todos los documentos","Que puede estar intentando instalar un programa malicioso: no lo habilitás","Que es una factura real","Que hay que habilitarlo para leer"], correcta: 1, explicacion: "Habilitar contenido o macros puede ejecutar un programa escondido. Pensar que es normal tienta porque aparece en documentos de trabajo, pero en un adjunto que no esperabas es una señal de alerta." },
    { q: "Alguien que te compra algo por internet te manda un QR para que \"recibas el pago\". ¿Qué pensás?", opciones: ["Que es la forma normal de cobrar","Que tenés que escanearlo rápido","Que es sospechoso: para recibir plata no hace falta escanear nada","Que si el QR es lindo, es seguro"], correcta: 2, explicacion: "Escanear ese QR suele llevar a pagar o a dar datos, no a cobrar. Que es la forma normal tienta porque los QR se usan para pagar, pero para cobrar alcanza con tu alias o tu CBU." },
    { q: "Vas a pagar con QR en un local. ¿Qué revisás antes de confirmar?", opciones: ["Que el nombre del comercio que aparece coincida con el local","Nada, el QR siempre es del local","Que el QR sea grande","Que tenga colores"], correcta: 0, explicacion: "Hay estafas que pegan un QR falso encima del verdadero. Confiar en que siempre es del local tienta, pero un sticker puesto encima no se nota a simple vista." },
    { q: "Recibiste un mail que imita al BCRA. ¿A dónde lo podés reenviar?", opciones: ["A todos tus contactos para avisarles","Al mismo remitente para quejarte","A ningún lado: solo lo borrás sin avisar","A ayudaenlinea@bcra.gob.ar"], correcta: 3, explicacion: "El BCRA recibe esos mensajes para alertar. Reenviarlo a tus contactos tienta para avisarles, pero alguien podría tocar el link por error." },
    { q: "Según la UFECI, ¿a quién imitan cada vez más los mails falsos, además de los bancos?", opciones: ["A tus amigos","A organismos del Estado","A los diarios","A nadie: solo imitan bancos"], correcta: 1, explicacion: "En 2024 crecieron los mails que imitan organismos públicos. Pensar que solo imitan bancos tienta porque es lo más conocido, pero así te agarran desprevenido con un aviso de ANSES o una multa." },
  ],
},
{
  id: "whatsapp",
  icono: "💬",
  titulo: "WhatsApp: robo de cuentas y cuentos del tío",
  nivel: "Básico",
  objetivos: [
    "Explicar cómo roban una cuenta de WhatsApp con el código de 6 dígitos y cómo evitarlo",
    "Configurar la verificación en dos pasos y la privacidad de WhatsApp",
    "Reconocer los cuentos más comunes por WhatsApp y recuperar una cuenta robada",
  ],
  lecciones: [
    { titulo: "Cómo roban una cuenta de WhatsApp", html: `
      <p class="idea">Para usar tu WhatsApp en otro celular, alcanza con tu número y un código de 6 dígitos que WhatsApp te manda por SMS. Si alguien consigue ese código, se queda con tu cuenta. Por eso todo el engaño apunta a que se lo pases.</p>
      <p>Según el informe de la UFECI de 2024, WhatsApp fue la cuenta más afectada entre los accesos indebidos: el 30% de esos casos. El paso a paso del robo casi siempre es este:</p>
      <ol>
        <li>El estafador pone tu número en su celular y pide entrar a WhatsApp.</li>
        <li>A vos te llega un SMS con un código de 6 dígitos.</li>
        <li>Te escribe con una excusa para que se lo pases.</li>
        <li>Con el código, entra a tu cuenta en su celular y vos quedás afuera.</li>
        <li>Les escribe a tus contactos haciéndose pasar por vos y les pide plata.</li>
      </ol>
      <p><strong>Las excusas más comunes:</strong></p>
      <table>
        <tr><th>Te dicen...</th><th>En realidad...</th></tr>
        <tr><td>"Te mandé un código por error, ¿me lo pasás?"</td><td>Es tu código de WhatsApp</td></tr>
        <tr><td>"Soy del soporte de WhatsApp, verificamos tu cuenta"</td><td>WhatsApp nunca te escribe para pedirte el código</td></tr>
        <tr><td>"Ganaste un premio, te mandamos un código para confirmar"</td><td>Es tu código de WhatsApp</td></tr>
        <tr><td>"Soy de la escuela/el consorcio, te agrego al grupo, pasame el código"</td><td>Para agregarte a un grupo no hace falta ningún código</td></tr>
      </table>
      <p>Muchas veces el mensaje te llega desde la cuenta de un amigo que ya robaron: por eso parece de confianza.</p>
      <p><strong>La regla es una sola:</strong> el código de 6 dígitos de WhatsApp no se le pasa a nadie, nunca. El SMS de WhatsApp lo dice en el mismo mensaje: no compartas este código.</p>
      <p>Por ejemplo, si te llega un código de WhatsApp que no pediste, no hagas nada con él: quiere decir que alguien está intentando entrar con tu número. Si tenés la verificación en dos pasos activada (la próxima lección), no va a poder.</p>` },
    { titulo: "Configurar WhatsApp para que sea más difícil", html: `
      <p class="idea">Con tres ajustes que llevan cinco minutos, tu WhatsApp queda mucho más protegido: la verificación en dos pasos, quién te puede agregar a grupos y quién ve tus datos.</p>
      <p><strong>1. Verificación en dos pasos.</strong> Es un PIN de 6 dígitos que elegís vos y que WhatsApp te pide cuando alguien quiere usar tu número en otro celular. Aunque el estafador consiga el código del SMS, sin el PIN no entra.</p>
      <pre><code>WhatsApp → Configuración → Cuenta → Verificación en dos pasos → Activar
→ elegís un PIN de 6 dígitos (que no sea tu fecha de nacimiento)
→ agregás un mail para recuperarlo si te lo olvidás</code></pre>
      <p>WhatsApp te va a pedir el PIN de vez en cuando para que no te lo olvides. Ese PIN tampoco se le pasa a nadie.</p>
      <p><strong>2. Privacidad.</strong> En Configuración → Privacidad podés elegir quién ve tu foto, tu "info" y tu última conexión, y quién te puede agregar a grupos.</p>
      <table>
        <tr><th>Ajuste</th><th>Recomendado</th><th>Por qué</th></tr>
        <tr><td>Foto de perfil</td><td>Mis contactos</td><td>Los estafadores usan fotos ajenas para hacerse pasar por otros</td></tr>
        <tr><td>Grupos</td><td>Mis contactos</td><td>Evita que te metan en grupos de estafas de "inversiones"</td></tr>
        <tr><td>Silenciar llamadas de desconocidos</td><td>Activado</td><td>Menos llamadas de números raros</td></tr>
      </table>
      <p><strong>3. Dispositivos vinculados.</strong> En Configuración → Dispositivos vinculados ves las computadoras donde está abierto tu WhatsApp (WhatsApp Web). Si aparece alguno que no reconocés, cerrá la sesión ahí mismo.</p>
      <p>Por ejemplo, si usaste WhatsApp Web en una computadora de un locutorio o de la biblioteca y te olvidaste de cerrar, desde ahí lo cerrás. El BCRA recomienda directamente no entrar a tus cuentas desde equipos ajenos.</p>
      <p>Los nombres de los menús pueden cambiar con las actualizaciones. Si no los encontrás, la ayuda oficial de WhatsApp los explica paso a paso.</p>` },
    { titulo: "Los cuentos por WhatsApp y qué hacer si te roban la cuenta", html: `
      <p class="idea">Además de robar cuentas, por WhatsApp circulan cuentos para sacarte plata. Se reconocen por las mismas palancas del módulo 0: apuro, miedo, premio y autoridad.</p>
      <table>
        <tr><th>El cuento</th><th>Cómo se ve</th><th>Qué hacés</th></tr>
        <tr><td>Familiar con número nuevo</td><td>"Hola ma, cambié de número, necesito que me pagues algo urgente"</td><td>Llamás al número de siempre</td></tr>
        <tr><td>Amigo con apuro</td><td>Desde la cuenta real de un amigo: "¿Me prestás plata hasta mañana? Te paso el alias"</td><td>Lo llamás por teléfono antes de transferir</td></tr>
        <tr><td>Trabajo fácil</td><td>"Ganá dinero dando 'me gusta' a videos" y después piden un pago para seguir</td><td>Ningún trabajo real te cobra para trabajar</td></tr>
        <tr><td>Inversión milagrosa</td><td>Un grupo donde todos "ganan" y muestran capturas</td><td>Salís del grupo y lo reportás</td></tr>
      </table>
      <p><strong>Audios y videos falsos.</strong> Hoy existen programas que imitan una voz con unos pocos segundos de audio. Un audio que suena como tu sobrino no prueba que sea él. Por eso sirve la palabra clave familiar del módulo 0 y llamar al número de siempre.</p>
      <p><strong>Si te robaron la cuenta:</strong></p>
      <ol>
        <li>Avisá enseguida a tus contactos por otro medio (otra red, un mail, un familiar que avise en los grupos): "Me robaron el WhatsApp, no transfieran nada".</li>
        <li>Abrí WhatsApp en tu celular, poné tu número y pedí el código de nuevo. Al entrar vos, el estafador queda afuera.</li>
        <li>Si te pide un PIN de verificación en dos pasos que no pusiste, es porque el estafador lo activó: vas a tener que esperar el tiempo que indique WhatsApp para volver a entrar. Mientras, seguí avisando a tus contactos.</li>
        <li>Escribile al soporte de WhatsApp desde la ayuda oficial y hacé la denuncia (módulo 7).</li>
      </ol>
      <p>Por ejemplo, si a tu tía le robaron la cuenta, lo más urgente no es recuperarla: es que nadie de su lista le transfiera plata al estafador. Ese aviso, en los primeros minutos, evita la mayor parte del daño.</p>` },
  ],
  practica: [
    "Activá la verificación en dos pasos de WhatsApp y agregá un mail de recuperación. Anotá la fecha en que lo hiciste (el PIN no lo anotes en el celular).",
    "Revisá en Configuración → Privacidad quién ve tu foto y quién te puede agregar a grupos. Anotá cómo estaba cada ajuste antes y cómo lo dejaste.",
    "Mirá en Dispositivos vinculados cuántas computadoras tienen abierto tu WhatsApp. Anotá cuántas había y cerrá las que no reconozcas.",
    "Ayudá a un familiar o a un amigo a activar la verificación en dos pasos. Anotá cuánto tiempo tardaron.",
  ],
  recursos: [
    { t: "WhatsApp: consejos de seguridad para proteger tu cuenta", url: "https://faq.whatsapp.com/1095301557782068" },
    { t: "WhatsApp: cómo administrar la verificación en dos pasos", url: "https://faq.whatsapp.com/1920866721452534" },
    { t: "WhatsApp: cómo recuperar una cuenta comprometida", url: "https://faq.whatsapp.com/1131652977717250" },
  ],
  quiz: [
    { q: "Un contacto te escribe: \"Te mandé un código de 6 dígitos por error, ¿me lo pasás?\". ¿Qué hacés?", opciones: ["Se lo pasás, es un conocido","Le pasás la mitad para ayudarlo","No lo pasás: es el código para entrar a tu WhatsApp","Se lo pasás y después cambiás la foto"], correcta: 2, explicacion: "Con ese código se quedan con tu cuenta. Pasárselo porque es un conocido tienta, pero muchas veces la cuenta de ese conocido ya está robada." },
    { q: "Te llega un código de WhatsApp que vos no pediste. ¿Qué concluís?", opciones: ["Que alguien intenta entrar a WhatsApp con tu número","Que es una actualización","Que WhatsApp te regaló algo","Que tenés que reenviarlo a soporte"], correcta: 0, explicacion: "El código llega cuando alguien pide usar tu número en otro celular. Reenviarlo a \"soporte\" tienta, pero WhatsApp nunca te pide el código." },
    { q: "Te escriben del \"soporte de WhatsApp\" para verificar tu cuenta y te piden el código. ¿Qué pensás?", opciones: ["Que es un control de rutina","Que hay que obedecer porque es WhatsApp","Que si tiene el logo es real","Que es una estafa: WhatsApp nunca te escribe para pedirte el código"], correcta: 3, explicacion: "El código no se comparte con nadie, tampoco con \"soporte\". El logo tienta como prueba, pero cualquiera puede poner un logo de foto de perfil." },
    { q: "Te piden un código para \"agregarte al grupo de la escuela\". ¿Qué hacés?", opciones: ["Lo pasás para no quedar afuera del grupo","No lo pasás: para agregarte a un grupo no hace falta ningún código","Pedís que te lo manden de nuevo","Lo pasás solo si es del grado de tu hijo"], correcta: 1, explicacion: "Para entrar a un grupo alcanza con que te agreguen o con un link de invitación. No quedar afuera tienta, pero ese código es el de tu cuenta." },
    { q: "El estafador consiguió el código de 6 dígitos del SMS, pero vos tenías la verificación en dos pasos activada. ¿Qué pasa?", opciones: ["Entra igual","Se borra tu cuenta","No puede entrar sin tu PIN","WhatsApp le manda el PIN"], correcta: 2, explicacion: "El PIN es una segunda llave que solo sabés vos. Pensar que entra igual tienta, pero esa es justo la protección que agrega." },
    { q: "¿Qué PIN conviene elegir para la verificación en dos pasos?", opciones: ["Uno de 6 dígitos que no sea tu fecha de nacimiento ni algo fácil de adivinar","123456","Tu fecha de nacimiento","El mismo de la tarjeta del banco"], correcta: 0, explicacion: "Un PIN fácil de adivinar no protege. El de la tarjeta tienta para no olvidarlo, pero si alguien lo descubre, tiene dos llaves de una vez." },
    { q: "Usaste WhatsApp Web en una computadora de la biblioteca y no te acordás si cerraste. ¿Qué hacés?", opciones: ["Volvés a la biblioteca mañana","Nada, se cierra sola enseguida","Cambiás de número","Entrás a Dispositivos vinculados en tu celular y cerrás esa sesión"], correcta: 3, explicacion: "Desde el celular cerrás cualquier sesión abierta. Pensar que se cierra sola enseguida tienta, pero puede quedar abierta mucho tiempo." },
    { q: "Querés que no te metan en grupos de \"inversiones\" desconocidos. ¿Qué ajuste cambiás?", opciones: ["Cambiás la foto de perfil","En Privacidad, que solo tus contactos te puedan agregar a grupos","Desinstalás WhatsApp","Silenciás todos los grupos"], correcta: 1, explicacion: "Ese ajuste evita que te agregue cualquiera. Silenciar los grupos tienta, pero seguís estando adentro y te pueden escribir." },
    { q: "Un amigo te escribe desde su cuenta de siempre: \"¿Me prestás $50.000 hasta mañana? Te paso el alias\". ¿Qué hacés antes de transferir?", opciones: ["Transferís, es su cuenta de siempre","Le pedís un audio","Lo llamás por teléfono para confirmar que es él","Le preguntás algo que sabe todo el mundo"], correcta: 2, explicacion: "Su cuenta puede estar robada. Pedir un audio tienta, pero hay programas que imitan voces con pocos segundos de grabación." },
    { q: "Te ofrecen \"ganar plata dando me gusta a videos\", y después te piden un pago para seguir. ¿Qué concluís?", opciones: ["Que es una estafa: ningún trabajo real te cobra para trabajar","Que es una inversión normal","Que hay que pagar para ganar más","Que es seguro porque ya te pagaron una vez"], correcta: 0, explicacion: "Primero pagan poco para ganar tu confianza y después te piden más. Que ya te pagaron tienta como prueba, pero es parte del engaño." },
    { q: "Le robaron el WhatsApp a tu tía. ¿Qué es lo más urgente?", opciones: ["Comprarle un celular nuevo","Esperar a que WhatsApp lo resuelva","Borrar la aplicación","Avisar a sus contactos por otro medio que no transfieran plata"], correcta: 3, explicacion: "El estafador les va a pedir plata a sus contactos en los primeros minutos. Comprarle un celular tienta como solución, pero la cuenta robada no está en el celular, está en la línea." },
    { q: "Querés recuperar tu WhatsApp robado. ¿Qué intentás primero?", opciones: ["Mandarle un mensaje al estafador","Abrir WhatsApp en tu celular, poner tu número y pedir el código de nuevo","Cambiar de número para siempre","Escribirles a tus contactos desde la cuenta robada"], correcta: 1, explicacion: "Al verificar vos tu número, el estafador queda afuera, salvo que haya activado un PIN. Escribirle al estafador tienta para pedirle que la devuelva, pero no sirve y te expone más." },
  ],
},
{
  id: "plata",
  icono: "💸",
  titulo: "Banco, compras y plata: las estafas más caras",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer el engaño del falso empleado del banco y responder sin dar datos",
    "Comprar y vender por internet sin caer en señas, comprobantes falsos ni avisos truchos",
    "Distinguir una inversión o un trabajo real de una estafa",
  ],
  lecciones: [
    { titulo: "El falso empleado del banco", html: `
      <p class="idea">Es de las estafas más caras: alguien llama haciéndose pasar por tu banco, te asusta con un problema y te guía para que vos mismo le des acceso a tu cuenta o le transfieras la plata.</p>
      <p>Así suele ser la llamada:</p>
      <pre><code>"Le hablamos del área de seguridad del banco. Detectamos un
intento de compra con su tarjeta. Para protegerlo, vamos a
generar un código. Va a llegarle un SMS: díctemelo.
Ahora vaya a la app y entre a la sección Préstamos..."</code></pre>
      <p>Con tus códigos entran a tu cuenta, piden un préstamo a tu nombre y lo transfieren. Muchas veces la víctima ni sabe que tenía un préstamo preaprobado.</p>
      <p><strong>Las recomendaciones del BCRA:</strong></p>
      <ul>
        <li>No vayas al cajero, a la app ni al home banking por indicación de quien te llama: la comunicación la tenés que iniciar vos.</li>
        <li>No compartas claves, PIN, clave token, clave de la seguridad social, DNI ni fotos, por ningún canal.</li>
        <li>Si te avisan de un "error en una transferencia", no respondas: llamá vos al banco.</li>
      </ul>
      <table>
        <tr><th>Tu banco sí puede...</th><th>Tu banco nunca...</th></tr>
        <tr><td>Avisarte de un movimiento en la app</td><td>Te pide claves, PIN, token ni códigos de SMS</td></tr>
        <tr><td>Llamarte por un trámite que pediste vos</td><td>Te guía para hacer operaciones en el cajero o la app</td></tr>
        <tr><td>Mandarte un mail informativo</td><td>Te pide que transfieras plata "para protegerla"</td></tr>
      </table>
      <p><strong>Qué decir:</strong> "Voy a cortar y llamar yo al número de mi tarjeta". Si es real, te van a atender igual. Si es estafa, se termina ahí.</p>
      <p>Por ejemplo, si un "empleado" te pide que transfieras tus ahorros a una "cuenta segura", es estafa siempre. No existe la cuenta segura: es la cuenta del estafador.</p>` },
    { titulo: "Comprar y vender por internet", html: `
      <p class="idea">Más de la mitad de los fraudes en línea denunciados en 2024 fueron por compras de productos o servicios, según la UFECI. Casi todos se evitan con tres hábitos: comprar dentro de la plataforma, desconfiar de precios regalados y no pagar señas a desconocidos.</p>
      <p><strong>Si comprás:</strong></p>
      <ul>
        <li><strong>Pagá dentro de la plataforma</strong> (la tienda, el sitio de compraventa) y no por transferencia directa a un particular: si algo sale mal, la plataforma te puede devolver la plata. Si te piden "seguir por WhatsApp" para pagar, desconfiá.</li>
        <li><strong>Si el precio es demasiado bajo</strong>, preguntate por qué. Un celular nuevo a la mitad de precio casi siempre es estafa.</li>
        <li><strong>No pagues señas</strong> por un producto o un alquiler que no viste, a alguien que no conocés.</li>
        <li><strong>Revisá la reputación</strong> del vendedor: tiempo en la plataforma, cantidad de ventas y opiniones.</li>
      </ul>
      <p><strong>Si vendés:</strong></p>
      <ul>
        <li><strong>Comprobantes falsos:</strong> te mandan una captura de una transferencia que nunca existió. Entregá el producto solo cuando veas la plata acreditada en tu cuenta, en tu app.</li>
        <li><strong>"Te pago de más, devolveme la diferencia":</strong> el pago "de más" es falso, y la devolución que hacés vos es real.</li>
        <li>Para cobrar alcanza con tu alias o tu CBU. Si te piden tu clave, un código o que escanees un QR "para recibir", es estafa.</li>
      </ul>
      <table>
        <tr><th>Alquileres temporarios</th><th>Señal de alerta</th></tr>
        <tr><td>Fotos de una casa hermosa a un precio bajísimo</td><td>Las fotos pueden ser de otra propiedad</td></tr>
        <tr><td>"Hay muchos interesados, señá hoy"</td><td>Apuro: la palanca del módulo 0</td></tr>
        <tr><td>No aceptan que alguien vaya a verla</td><td>No existe o no es de ellos</td></tr>
      </table>
      <p>Por ejemplo, según la UFECI, las estafas con alquileres temporarios se concentran en el primer trimestre del año: justo cuando se planean las vacaciones de verano.</p>` },
    { titulo: "Inversiones y trabajos que son estafas", html: `
      <p class="idea">Si alguien te promete ganancias altas, rápidas y "garantizadas", es estafa. Las inversiones reales tienen riesgo y nadie puede garantizar cuánto vas a ganar.</p>
      <p>Según el informe de la UFECI, en 2024 crecieron las plataformas de inversión falsas, las ofertas falsas de trabajo remoto y las estafas con criptomonedas. Y el BCRA alertó por videos falsos que usan su imagen para promocionar inversiones.</p>
      <table>
        <tr><th>Señal</th><th>Ejemplo</th></tr>
        <tr><td>Ganancia garantizada</td><td>"Duplicá tu plata en 30 días, sin riesgo"</td></tr>
        <tr><td>Famosos o el Estado "recomiendan"</td><td>Un video de un periodista o del BCRA promocionando una plataforma</td></tr>
        <tr><td>Te muestran que ganás, pero no podés retirar</td><td>"Para retirar tus ganancias tenés que pagar un impuesto primero"</td></tr>
        <tr><td>Te piden que sumes a otras personas</td><td>"Si traés 3 amigos, ganás más"</td></tr>
      </table>
      <p>La última es un <strong>esquema piramidal</strong> (o esquema Ponzi): les pagan a los primeros con la plata de los que entran después, hasta que deja de entrar gente y se cae. Según la UFECI, fueron el 10% de los fraudes en línea denunciados en 2024.</p>
      <p><strong>La estafa del romance o la amistad.</strong> Alguien te conoce por una red o una app de citas, charla con vos durante semanas y, cuando ya hay confianza, te recomienda "su" plataforma de inversión. Es una estafa larga y muy dolorosa: no pongas plata por recomendación de alguien que conociste por internet.</p>
      <p><strong>Trabajos falsos.</strong> Un trabajo real no te cobra para empezar: ni "materiales", ni "capacitación", ni "activar la cuenta". Tampoco te pide que recibas plata en tu cuenta y la transfieras a otra: eso puede ser lavado de dinero y te puede meter en un problema legal.</p>
      <p>Antes de invertir, buscá si la empresa está registrada en la Comisión Nacional de Valores (CNV), el organismo que controla las inversiones en Argentina. Y para cualquier decisión importante con tu plata, consultá con un profesional: este curso te ayuda a reconocer estafas, no reemplaza un asesoramiento financiero.</p>
      <p>Por ejemplo, si una plataforma te deja "ganar" 20% en una semana, pero te pide pagar para retirar, no pagues: esa plata no la vas a ver nunca.</p>` },
  ],
  practica: [
    "Escribí en un papel la frase para cortar una llamada sospechosa (\"Voy a cortar y llamar yo al número de mi tarjeta\") y el número de tu banco que figura en la tarjeta. Anotá si coincide con el de la app oficial.",
    "Elegí un producto que quieras comprar por internet y compará 3 publicaciones: precio, reputación del vendedor y si permite pagar dentro de la plataforma. Anotá cuál elegirías y por qué.",
    "Buscá en internet una publicidad de \"inversión\" o de \"trabajo desde casa\" y marcá cuántas de las señales de la última lección tiene. Anotá el resultado.",
  ],
  recursos: [
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
    { t: "BCRA: recomendaciones para evitar estafas virtuales", url: "https://www.bcra.gob.ar/noticias/recomendaciones-del-bcra-para-evitar-estafas-virtuales/" },
    { t: "Chequeado: los tipos de fraude más comunes en 2024, según la UFECI", url: "https://chequeado.com/el-explicador/las-denuncias-de-estafas-virtuales-aumentaron-un-21-en-2024-cuales-son-los-tipos-de-fraude-mas-comunes/" },
  ],
  quiz: [
    { q: "Te llama el \"área de seguridad\" de tu banco y te pide que le dictes un código que te va a llegar por SMS. ¿Qué hacés?", opciones: ["Le dictás el código para proteger tu cuenta","Le pedís su nombre y número de legajo","Cortás y llamás vos al número que figura en tu tarjeta","Le dictás solo los primeros números"], correcta: 2, explicacion: "El banco nunca pide códigos. Pedir el legajo tienta como verificación, pero el estafador te puede inventar uno sin problema." },
    { q: "El \"empleado del banco\" te guía para entrar a la sección Préstamos de tu app. ¿Qué está pasando?", opciones: ["Te quiere hacer sacar un préstamo a tu nombre para robarlo","Te está ayudando a cancelar una compra","Es un trámite de seguridad normal","Te quiere regalar un préstamo"], correcta: 0, explicacion: "El BCRA dice que no hagas operaciones en la app por indicación de quien llama. Pensar que te ayuda tienta por el susto, pero con tu préstamo transfieren la plata a su cuenta." },
    { q: "Te dicen que transfieras tus ahorros a una \"cuenta segura\" para protegerlos. ¿Qué concluís?", opciones: ["Que es una medida de seguridad del banco","Que conviene transferir la mitad","Que es seguro si es una cuenta del mismo banco","Que es estafa siempre: la \"cuenta segura\" es del estafador"], correcta: 3, explicacion: "No existe la cuenta segura. Que sea del mismo banco tienta como garantía, pero el estafador también puede tener una cuenta en tu banco." },
    { q: "Te llega un mensaje: \"Por error te transferimos $80.000, devolvelos a este alias\". ¿Qué hacés?", opciones: ["Devolvés la plata rápido","No respondés y llamás vos al banco para verificar","Devolvés la mitad","Contestás pidiendo el comprobante"], correcta: 1, explicacion: "Es una recomendación del BCRA: no respondas y llamá vos. Devolverla rápido tienta por honestidad, pero muchas veces la transferencia nunca existió." },
    { q: "Querés comprar un celular por internet y un vendedor te propone \"seguir por WhatsApp\" y pagar por transferencia. ¿Qué hacés?", opciones: ["Aceptás si el precio es bueno","Le pedís una foto del celular","Desconfiás y pagás solo dentro de la plataforma","Le transferís una seña para reservarlo"], correcta: 2, explicacion: "Fuera de la plataforma no tenés cómo recuperar la plata. Pedir una foto tienta como prueba, pero las fotos se sacan de cualquier publicación." },
    { q: "Vendiste algo y el comprador te manda la captura de la transferencia. ¿Cuándo entregás el producto?", opciones: ["Cuando ves la plata acreditada en tu cuenta, en tu app","Apenas llega la captura","Cuando te manda dos capturas","Cuando te promete que ya pagó"], correcta: 0, explicacion: "Los comprobantes falsos son de las estafas más comunes. La captura tienta porque parece una prueba, pero se arma en minutos." },
    { q: "Un comprador te dice: \"Te pagué de más sin querer, devolveme la diferencia\". ¿Qué hacés?", opciones: ["Devolvés la diferencia para ser honesto","Le devolvés todo","Le pedís que te mande otro comprobante","Revisás en tu app si de verdad entró esa plata antes de hacer nada"], correcta: 3, explicacion: "El pago de más suele ser falso y la devolución, real. Pedir otro comprobante tienta, pero un comprobante falso se repite igual de fácil." },
    { q: "Encontrás una casa para las vacaciones a un precio bajísimo, y te piden señar hoy porque \"hay muchos interesados\". ¿Qué concluís?", opciones: ["Que es una oportunidad que no hay que perder","Que tiene dos señales de estafa: precio regalado y apuro","Que si muestra fotos, existe","Que hay que señar para asegurarla"], correcta: 1, explicacion: "Precio muy bajo más apuro es la receta de la estafa de alquileres. Las fotos tientan como prueba, pero pueden ser de otra propiedad." },
    { q: "Una plataforma te promete duplicar tu plata en 30 días sin riesgo. ¿Qué concluís?", opciones: ["Que es una inversión moderna","Que conviene probar con poca plata","Que es estafa: nadie puede garantizar ganancias así","Que si tiene página web, es seria"], correcta: 2, explicacion: "Las inversiones reales tienen riesgo. Probar con poca plata tienta, pero muchas estafas te dejan ganar al principio para que pongas más." },
    { q: "Ves \"ganancias\" en una plataforma, pero para retirarlas te piden pagar un impuesto primero. ¿Qué hacés?", opciones: ["No pagás nada: esa plata no la vas a ver","Pagás el impuesto para cobrar","Pagás la mitad","Le pedís a un amigo que pague"], correcta: 0, explicacion: "Pedir un pago para retirar es una señal clásica de estafa. Pagar para cobrar tienta porque ves las ganancias en la pantalla, pero son números que pone el estafador." },
    { q: "Una persona que conociste hace un mes por una app de citas te recomienda invertir en \"su\" plataforma. ¿Qué hacés?", opciones: ["Invertís porque ya le tenés confianza","Invertís poco para no ofenderla","Le pedís que invierta primero ella","No ponés plata por recomendación de alguien que conociste por internet"], correcta: 3, explicacion: "Es la estafa del romance: construyen confianza durante semanas. La confianza tienta como garantía, pero es justo la herramienta del estafador." },
    { q: "Una oferta de trabajo te pide recibir plata en tu cuenta y transferirla a otra. ¿Qué pensás?", opciones: ["Que es un trabajo fácil","Que puede ser lavado de dinero y meterte en un problema legal","Que está bien si te dejan una comisión","Que es normal en los trabajos remotos"], correcta: 1, explicacion: "Usar tu cuenta para mover plata ajena puede ser delito. La comisión tienta como paga, pero el responsable ante la ley sos vos." },
  ],
},
{
  id: "equipos",
  icono: "📱",
  titulo: "Tu celular y tu computadora",
  nivel: "Intermedio",
  objetivos: [
    "Mantener el celular y la computadora actualizados y bajar apps solo de las tiendas oficiales",
    "Decidir cuándo usar o no una red Wi-Fi pública y un equipo ajeno",
    "Bloquear el celular, hacer copias de seguridad y saber qué hacer si lo perdés",
  ],
  lecciones: [
    { titulo: "Actualizaciones y apps oficiales", html: `
      <p class="idea">Las actualizaciones no son solo para cambiar el diseño: muchas arreglan agujeros de seguridad que los delincuentes ya conocen. Un celular sin actualizar es una casa con una ventana rota.</p>
      <p>El BCRA lo incluye en sus recomendaciones: mantené actualizados el navegador, el sistema operativo y las aplicaciones, y borrá las que no uses.</p>
      <table>
        <tr><th>Qué actualizar</th><th>Dónde</th></tr>
        <tr><td>El sistema del celular (Android o iPhone)</td><td>Configuración → Sistema o General → Actualización de software</td></tr>
        <tr><td>Las apps</td><td>Play Store o App Store → tu perfil → Administrar apps o Actualizaciones</td></tr>
        <tr><td>La computadora (Windows o Mac)</td><td>Configuración → Windows Update, o Configuración del sistema → General</td></tr>
        <tr><td>El navegador</td><td>Suele actualizarse solo: reinicialo de vez en cuando</td></tr>
      </table>
      <p>Lo más simple: activá las <strong>actualizaciones automáticas</strong> y aceptá cuando el celular te pida reiniciar.</p>
      <p><strong>Apps solo de la tienda oficial.</strong> Bajá las apps de Google Play (Android) o la App Store (iPhone). Las que te mandan como archivo por WhatsApp o desde una página pueden ser falsas: por ejemplo, una "app del banco" que copia tus claves. Google Play tiene un protector, Play Protect, que revisa las apps y te avisa si alguna es peligrosa.</p>
      <p><strong>Mirá los permisos.</strong> Una app de linterna no necesita leer tus mensajes ni tus contactos. Si una app pide permisos que no tienen nada que ver con lo que hace, no la instales o sacale esos permisos en Configuración → Aplicaciones.</p>
      <p><strong>Las apps que te piden "control" del celular.</strong> Hay estafas que te hacen instalar una app de "asistencia remota" para "ayudarte con un trámite". Con eso el estafador ve tu pantalla y maneja tu celular. Nunca instales una app porque te lo pide alguien que te llamó.</p>
      <p>Por ejemplo, el BCRA aconseja que, si sospechás de una app, la desinstales enseguida y cambies tus claves desde otro equipo que sea seguro.</p>` },
    { titulo: "Wi-Fi pública y equipos ajenos", html: `
      <p class="idea">Una red Wi-Fi pública (la del bar, la plaza o la terminal) la comparte mucha gente que no conocés. Sirve para leer noticias o mirar un mapa, pero no para entrar a tu banco ni escribir contraseñas.</p>
      <p>El BCRA recomienda no usar redes Wi-Fi públicas para entrar a sitios que piden contraseña, y no entrar a tus cuentas desde computadoras públicas o de otras personas.</p>
      <table>
        <tr><th>En una Wi-Fi pública...</th><th>¿Sí o no?</th></tr>
        <tr><td>Leer el diario, mirar un mapa, ver un video</td><td>Sí</td></tr>
        <tr><td>Entrar al home banking o la billetera virtual</td><td>No: usá tus datos móviles</td></tr>
        <tr><td>Comprar con tarjeta</td><td>No</td></tr>
        <tr><td>Conectarte a una red que se llama igual que la del bar, pero sin contraseña</td><td>Cuidado: puede ser una red falsa armada por alguien</td></tr>
      </table>
      <p><strong>Las redes falsas.</strong> Cualquiera puede crear una red Wi-Fi con un nombre como "Wifi_Gratis_Terminal". Si te conectás, esa persona puede ver parte de lo que hacés. Preguntá en el lugar cuál es el nombre exacto de su red.</p>
      <p><strong>Equipos ajenos</strong> (locutorio, biblioteca, la compu de un amigo):</p>
      <ul>
        <li>Si es imprescindible, usá la ventana de incógnito (o privada) del navegador.</li>
        <li>No toques "recordar contraseña" ni "mantener la sesión iniciada".</li>
        <li>Cerrá sesión en todo antes de irte y cerrá el navegador.</li>
        <li>Para el banco, mejor esperá a tener tu celular.</li>
      </ul>
      <p><strong>La Wi-Fi de tu casa.</strong> Ponele una contraseña larga (como las del módulo 1) y cambiá la contraseña que trae el router de fábrica para entrar a su configuración. Si no sabés cómo, la empresa de internet te puede guiar.</p>
      <p>Por ejemplo, si estás en la terminal de ómnibus y tenés que transferir plata urgente, desconectá el Wi-Fi y usá los datos del celular, aunque gastes un poco.</p>` },
    { titulo: "Bloqueo, copias de seguridad y celular perdido", html: `
      <p class="idea">Tu celular tiene tus fotos, tus mensajes, tu banco y tus contraseñas. Tres cosas lo protegen si te lo roban o se rompe: un bloqueo de pantalla, una copia de seguridad y saber encontrarlo o borrarlo a distancia.</p>
      <p><strong>1. Bloqueo de pantalla.</strong> Un PIN de 6 números, un patrón difícil o la huella. Evitá 1234, 0000 o tu fecha de nacimiento. Activá que se bloquee solo al minuto de no usarlo.</p>
      <p><strong>2. Copia de seguridad</strong> (en inglés, <em>backup</em>). Una copia de tus fotos, contactos y chats guardada en otro lado, por si perdés el celular:</p>
      <table>
        <tr><th>Qué</th><th>Cómo</th></tr>
        <tr><td>Fotos</td><td>Google Fotos o iCloud, con la copia automática activada</td></tr>
        <tr><td>Contactos</td><td>Guardados en tu cuenta de Google o de Apple, no solo en el chip</td></tr>
        <tr><td>Chats de WhatsApp</td><td>Configuración → Chats → Copia de seguridad</td></tr>
        <tr><td>Documentos importantes de la computadora</td><td>Una copia en la nube o en un pendrive guardado en otro lugar</td></tr>
      </table>
      <p>Las copias también te salvan de un tipo de programa malicioso que bloquea tus archivos y pide plata para devolverlos (en inglés, <em>ransomware</em>): si tenés copia, no dependés de pagar.</p>
      <p><strong>3. Si perdés el celular o te lo roban:</strong></p>
      <ol>
        <li>Desde otra computadora o celular, entrá a "Encontrar mi dispositivo" (Android, con tu cuenta de Google) o "Buscar" (iPhone, con tu cuenta de Apple). Podés ver dónde está, hacerlo sonar, bloquearlo o borrarlo.</li>
        <li>Llamá a tu banco y a tu billetera virtual para bloquear el acceso desde ese celular.</li>
        <li>Llamá a tu compañía de teléfono para bloquear el chip y la línea: así nadie recibe tus códigos por SMS.</li>
        <li>Cambiá la contraseña de tu mail desde otro equipo.</li>
      </ol>
      <p>Por ejemplo, la mayoría de la gente se acuerda de la copia de seguridad cuando ya perdió las fotos. Activala hoy: después es tarde.</p>` },
  ],
  practica: [
    "Revisá si tu celular tiene actualizaciones pendientes del sistema y de las apps. Anotá cuántas había e instalalas.",
    "Mirá los permisos de 3 apps de tu celular (Configuración → Aplicaciones → Permisos). Anotá si alguna pide algo que no necesita y qué hiciste.",
    "Activá la copia de seguridad automática de tus fotos y de WhatsApp. Anotá la fecha de la última copia que aparece.",
    "Entrá desde una computadora a \"Encontrar mi dispositivo\" o \"Buscar\" y comprobá que aparece tu celular. Anotá si lo encontró.",
  ],
  recursos: [
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
    { t: "Google: usar Play Protect para proteger tus aplicaciones", url: "https://support.google.com/android/answer/2812853?hl=es" },
    { t: "Google: centro de seguridad", url: "https://safety.google/intl/es-419/" },
    { t: "INCIBE (España): guías para configurar dispositivos móviles y hacer copias de seguridad", url: "https://www.incibe.es/ciudadania/formacion/guias" },
  ],
  quiz: [
    { q: "El celular te pide instalar una actualización y reiniciar. ¿Qué hacés?", opciones: ["La ignorás siempre","La instalás solo si cambia el diseño","La instalás: muchas actualizaciones arreglan agujeros de seguridad","Borrás la notificación y apagás las actualizaciones"], correcta: 2, explicacion: "Las actualizaciones tapan agujeros que los delincuentes ya conocen. Ignorarla tienta porque interrumpe, pero un celular desactualizado queda expuesto." },
    { q: "Alguien te manda por WhatsApp un archivo para instalar \"la nueva app de tu banco\". ¿Qué hacés?", opciones: ["No la instalás y bajás la app solo desde Google Play o la App Store","La instalás porque es del banco","La instalás y le das todos los permisos","La instalás en el celular de otro"], correcta: 0, explicacion: "Las apps falsas copian tus claves. Que sea del banco tienta como garantía, pero los bancos publican sus apps solo en las tiendas oficiales." },
    { q: "Una app de linterna te pide permiso para leer tus mensajes y tus contactos. ¿Qué concluís?", opciones: ["Que es normal, todas piden todo","Que es más segura","Que hay que aceptar para que funcione","Que pide permisos que no necesita: no la instalás o le sacás esos permisos"], correcta: 3, explicacion: "Una linterna no necesita tus mensajes. Pensar que todas piden todo tienta, pero los permisos de más son una señal de que la app hace otra cosa." },
    { q: "Te llama alguien para \"ayudarte con un trámite\" y te pide que instales una app de asistencia remota. ¿Qué hacés?", opciones: ["La instalás para que te ayude","No la instalás: con eso el estafador ve y maneja tu celular","La instalás y la borrás después","Le pasás el código de la app"], correcta: 1, explicacion: "Las apps de control remoto le dan tu celular al otro. Borrarla después tienta, pero en esos minutos ya pueden hacer transferencias." },
    { q: "Sospechás de una app que instalaste. ¿Qué recomienda el BCRA?", opciones: ["Esperar a ver si pasa algo","Cambiar las claves desde ese mismo celular","Desinstalarla enseguida y cambiar tus claves desde otro equipo seguro","Reiniciar el celular y listo"], correcta: 2, explicacion: "Si la app es maliciosa, puede ver lo que escribís en ese celular. Cambiar las claves ahí mismo tienta por cómodo, pero la app podría copiar las nuevas." },
    { q: "Estás en un bar con Wi-Fi gratis y tenés que entrar al home banking. ¿Qué hacés?", opciones: ["Desconectás el Wi-Fi y usás los datos móviles","Usás el Wi-Fi del bar, total tiene contraseña","Entrás rápido para no dar tiempo","Usás el Wi-Fi y después cambiás la clave"], correcta: 0, explicacion: "El BCRA recomienda no usar Wi-Fi pública para sitios con contraseña. Que tenga contraseña tienta como seguridad, pero la comparte todo el bar." },
    { q: "En la terminal aparecen dos redes: la oficial con contraseña y \"Wifi_Gratis_Terminal\" sin contraseña. ¿Qué hacés?", opciones: ["Te conectás a la gratis","Te conectás a las dos","Te conectás a la que tenga más señal","Preguntás cuál es la red oficial: la otra puede ser falsa"], correcta: 3, explicacion: "Cualquiera puede crear una red con un nombre tentador. La más fuerte tienta por velocidad, pero una red falsa cerca tuyo puede tener mucha señal." },
    { q: "Tenés que entrar a tu mail desde una computadora del locutorio. ¿Qué hacés?", opciones: ["Tildás \"recordar contraseña\" para la próxima","Usás una ventana de incógnito, no guardás la contraseña y cerrás sesión al terminar","Dejás la sesión abierta para el próximo","Anotás la clave en un papel al lado del teclado"], correcta: 1, explicacion: "En un equipo ajeno no tiene que quedar nada tuyo. Recordar la contraseña tienta por comodidad, pero la próxima persona entraría a tu mail." },
    { q: "El PIN de tu celular es 1234. ¿Qué cambiás?", opciones: ["Nada, nadie lo va a adivinar","Lo cambiás a 0000","Ponés un PIN de 6 números que no sea fácil de adivinar, o la huella","Sacás el bloqueo para entrar más rápido"], correcta: 2, explicacion: "1234 es de lo primero que prueba cualquiera. Sacar el bloqueo tienta por rapidez, pero si te roban el celular, entran a todo." },
    { q: "Se te rompió el celular y tenías todas las fotos de tus hijos. ¿Qué te habría salvado?", opciones: ["Una copia de seguridad automática en la nube","Un PIN más largo","Una funda más gruesa","Más memoria en el celular"], correcta: 0, explicacion: "La copia guarda las fotos en otro lado. La funda tienta porque protege el celular, pero no protege lo que tiene adentro si igual se rompe o te lo roban." },
    { q: "Un programa bloqueó los archivos de tu computadora y pide plata para devolverlos. ¿Qué te deja no depender de pagar?", opciones: ["Pagar rápido","Apagar y prender la computadora","Escribirle al delincuente para negociar","Tener una copia de seguridad guardada en otro lugar"], correcta: 3, explicacion: "Con copia, recuperás tus archivos sin pagar. Pagar tienta para terminar rápido, pero no hay garantía de que te los devuelvan." },
    { q: "Te robaron el celular. Además de buscarlo con \"Encontrar mi dispositivo\", ¿qué hacés?", opciones: ["Esperás a que aparezca","Llamás al banco, a la billetera virtual y a la compañía de teléfono para bloquear","Comprás otro y listo","Mandás un mensaje al celular robado"], correcta: 1, explicacion: "Con el chip pueden recibir tus códigos por SMS. Comprar otro tienta como solución, pero tu línea y tus cuentas siguen abiertas en el celular robado." },
  ],
},
{
  id: "privacidad",
  icono: "🕵️",
  titulo: "Redes sociales y datos personales",
  nivel: "Intermedio",
  objetivos: [
    "Decidir qué no publicar porque sirve para engañarte a vos o a tu familia",
    "Configurar la privacidad de tus redes y reconocer perfiles falsos",
    "Cuidar a los chicos de la casa y saber a quién pedir ayuda",
  ],
  lecciones: [
    { titulo: "Lo que publicás sirve para engañarte", html: `
      <p class="idea">Cada cosa que publicás le cuenta algo de vos a cualquiera: dónde vivís, cómo se llaman tus hijos, cuándo te vas de viaje. Los estafadores juntan esos datos para armar cuentos creíbles.</p>
      <p>Por ejemplo, si publicás "¡Feliz cumple, Tomi! 8 años ya", con la foto de la escuela de fondo, alguien ya sabe el nombre de tu hijo, su edad y a qué escuela va. Con eso puede llamarte: "Le hablamos de la escuela de Tomi, tuvo un accidente...".</p>
      <table>
        <tr><th>Mejor no publicar</th><th>Por qué</th></tr>
        <tr><td>Fotos del DNI, la tarjeta, un pasaje o un ticket con código</td><td>Tienen datos para hacerse pasar por vos</td></tr>
        <tr><td>Que te vas de viaje, mientras estás viajando</td><td>Avisa que tu casa está vacía: subí las fotos a la vuelta</td></tr>
        <tr><td>Tu dirección, el colegio de los chicos, tus horarios</td><td>Sirven para armar un cuento o para encontrarte</td></tr>
        <tr><td>Respuestas a "preguntas de seguridad" (el nombre de tu primera mascota, la calle donde creciste)</td><td>Son las respuestas que algunas cuentas usan para recuperar la contraseña</td></tr>
      </table>
      <p><strong>Ojo con los juegos y las encuestas</strong> del tipo "¿Cuál es tu nombre de superhéroe? Tu primera mascota + la calle donde naciste". Parecen inocentes, pero juntan justo esas respuestas.</p>
      <p><strong>Tus datos personales tienen protección.</strong> En Argentina, la Ley 25.326 de protección de datos personales te da derecho a saber qué datos tuyos tiene una empresa, a pedir que los corrijan y, en ciertos casos, que los borren. El organismo que controla es la Agencia de Acceso a la Información Pública.</p>
      <p>Una pregunta antes de publicar: <em>"¿Me molestaría que esto lo vea un desconocido que quiere engañarme?"</em>. Si la respuesta es sí, no lo publiques, o publicalo solo para tus contactos.</p>` },
    { titulo: "Privacidad de las redes y perfiles falsos", html: `
      <p class="idea">Las redes sociales te dejan elegir quién ve lo que publicás. Por defecto, muchas cosas son públicas. Revisar la privacidad lleva diez minutos y reduce mucho lo que un desconocido sabe de vos.</p>
      <p><strong>Qué revisar en cada red:</strong></p>
      <ul>
        <li><strong>Quién ve tus publicaciones:</strong> amigos o seguidores que aprobaste, no "público".</li>
        <li><strong>Quién ve tu lista de amigos y tu información</strong> (teléfono, mail, fecha de nacimiento): solo vos o tus amigos.</li>
        <li><strong>Cuenta privada</strong> en Instagram o TikTok: solo te ven quienes vos aceptás.</li>
        <li><strong>Etiquetas:</strong> que te avise antes de que aparezcas en fotos de otros.</li>
      </ul>
      <p>Cada red tiene un "control" o "revisión de privacidad" que te guía paso a paso: buscalo en Configuración.</p>
      <p><strong>Perfiles falsos.</strong> Los estafadores crean perfiles que imitan a empresas, bancos, famosos o a gente que conocés. El BCRA da pistas para reconocerlos:</p>
      <table>
        <tr><th>Perfil real de una empresa</th><th>Perfil falso</th></tr>
        <tr><td>Tiene la tilde azul de verificado</td><td>No la tiene, o la imita en la foto</td></tr>
        <tr><td>Muchas publicaciones a lo largo del tiempo</td><td>Pocas publicaciones, todas recientes</td></tr>
        <tr><td>Muchos seguidores</td><td>Pocos seguidores</td></tr>
        <tr><td>Te contesta por canales oficiales</td><td>Te escribe por privado para "resolver tu reclamo"</td></tr>
      </table>
      <p>Una estafa común: dejás una queja pública a tu banco en una red, y enseguida te escribe por privado un perfil "de atención al cliente" que te pide tus datos. Es falso: el banco real no te pide datos por mensaje privado.</p>
      <p><strong>Un amigo duplicado.</strong> Si te llega una solicitud de amistad de alguien que ya tenés como contacto, es muy probable que le hayan copiado la foto y el nombre. No la aceptes y avisale a tu amigo por otro lado.</p>
      <p>Por ejemplo, el BCRA recomienda reportar los perfiles falsos como spam: así la red los puede dar de baja.</p>` },
    { titulo: "Los chicos de la casa", html: `
      <p class="idea">Los chicos usan celulares y juegos en línea desde muy chicos. Más que prohibir, lo que más los protege es que confíen en contarte lo que les pasa, sin miedo a que les saques el celular.</p>
      <p>El <strong>grooming</strong> es cuando un adulto se gana la confianza de un chico o una chica por internet (en un juego, una red o un chat) para después pedirle fotos, videos o un encuentro. Es un delito. Suele empezar con regalos dentro del juego, halagos y pedidos de secreto: "esto queda entre nosotros".</p>
      <table>
        <tr><th>Señal de alerta</th><th>Qué hacés</th></tr>
        <tr><td>Un "amigo" del juego que pide pasar a un chat privado o a WhatsApp</td><td>Hablás con tu hijo sobre quién es esa persona</td></tr>
        <tr><td>Le pide fotos, aunque sean "normales"</td><td>No se mandan: es la primera señal de grooming</td></tr>
        <tr><td>Le pide que no les cuente a los adultos</td><td>Un secreto con un desconocido es siempre una alarma</td></tr>
        <tr><td>Le ofrece regalos o monedas del juego a cambio de algo</td><td>Nadie regala sin querer algo a cambio</td></tr>
      </table>
      <p><strong>Lo que ayuda en casa:</strong></p>
      <ul>
        <li>Charlar seguido de lo que hacen en internet, como cuando les preguntás por la escuela.</li>
        <li>Decirles que, si algo los incomoda, pueden contarlo y no se van a meter en problemas.</li>
        <li>Usar los controles parentales del celular y de las consolas, y que la cuenta del juego sea privada.</li>
        <li>Que entiendan que una foto que mandan ya no la controlan más.</li>
      </ul>
      <p><strong>Dónde pedir ayuda en Argentina:</strong> la línea <strong>137</strong>, gratuita y las 24 horas, tiene un equipo contra las violencias digitales que asesora y acompaña para hacer la denuncia. Según la página oficial del Gobierno, para sospechas de grooming también hay un WhatsApp: 11-3133-1000. Y la línea <strong>102</strong> es para temas de derechos de chicos y adolescentes.</p>
      <p>Por ejemplo, si tu hija te cuenta que alguien del juego le pidió una foto, lo primero es agradecerle que te lo contó. Después guardá las capturas, no le contestes a esa persona y pedí ayuda al 137.</p>` },
  ],
  practica: [
    "Hacé la revisión de privacidad de una red social que uses. Anotá cuántas cosas estaban en \"público\" y cuántas cambiaste.",
    "Revisá tus últimas 20 publicaciones y anotá cuántas tienen datos de la tabla de la primera lección (dirección, colegio, viajes en el momento, documentos). Archivá o borrá las que quieras.",
    "Buscá el perfil oficial de tu banco en una red social y compará con las pistas del BCRA: tilde azul, publicaciones y seguidores. Anotá qué encontraste.",
    "Si hay chicos en tu casa, charlá con ellos sobre qué juegos usan y con quién hablan. Anotá un acuerdo al que llegaron (por ejemplo, avisar si alguien les pide fotos).",
  ],
  recursos: [
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
    { t: "Gobierno de Argentina: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "Gobierno de Argentina: si fuiste víctima de un ciberdelito, denuncialo", url: "https://www.argentina.gob.ar/node/90919" },
  ],
  quiz: [
    { q: "Estás de vacaciones y querés subir fotos de la playa. ¿Qué conviene?", opciones: ["Subirlas en el momento en público","Subirlas con la dirección de tu casa","Subirlas a la vuelta, o solo para tus contactos","Subir también el pasaje con el código"], correcta: 2, explicacion: "Publicar mientras viajás avisa que tu casa está vacía. Subirlas en el momento tienta porque es cuando las disfrutás, pero se las mostrás a cualquiera." },
    { q: "Te aparece un juego: \"Tu nombre de superhéroe es tu primera mascota más la calle donde naciste\". ¿Qué hacés?", opciones: ["No lo contestás: junta respuestas que se usan para recuperar contraseñas","Lo contestás en público, es un juego","Lo compartís con tus amigos","Lo contestás con tu DNI"], correcta: 0, explicacion: "Esas respuestas son típicas preguntas de seguridad. Pensar que es solo un juego tienta, pero está diseñado para juntar esos datos." },
    { q: "Publicaste el feliz cumpleaños de tu hijo con su nombre, su edad y la escuela de fondo. ¿Qué riesgo hay?", opciones: ["Ninguno","Que te bajen la publicación","Que la foto se vea mal","Que alguien use esos datos para armar un cuento creíble, como una llamada falsa de la escuela"], correcta: 3, explicacion: "Con nombre, edad y escuela, el cuento suena real. Que no hay riesgo tienta porque es una publicación con cariño, pero cualquiera la puede leer." },
    { q: "Una empresa tiene tus datos y querés saber cuáles. ¿Qué te garantiza la ley en Argentina?", opciones: ["Nada: los datos son de la empresa","El derecho a saber qué datos tiene, a pedir que los corrijan y, en ciertos casos, que los borren","Que te paguen por tus datos","Que nunca puedan tener tus datos"], correcta: 1, explicacion: "La Ley 25.326 te da esos derechos. Que los datos son de la empresa tienta porque los guarda ella, pero siguen siendo tus datos personales." },
    { q: "Querés que solo tu familia y tus amigos vean lo que publicás en Instagram. ¿Qué hacés?", opciones: ["Publicás menos fotos","Cambiás la foto de perfil","Ponés la cuenta privada y aceptás solo a quienes conocés","Borrás la cuenta"], correcta: 2, explicacion: "Con la cuenta privada, solo te ven quienes vos aceptás. Publicar menos tienta, pero lo que publiques sigue siendo público." },
    { q: "Dejaste una queja a tu banco en una red y enseguida te escribe por privado \"Atención al Cliente\" pidiendo tus datos. ¿Qué concluís?", opciones: ["Que es un perfil falso: el banco no te pide datos por mensaje privado","Que el banco te responde rápido","Que hay que darle los datos para resolver la queja","Que es real si usa el logo"], correcta: 0, explicacion: "Los estafadores buscan quejas públicas para escribir haciéndose pasar por el banco. El logo tienta como prueba, pero se copia en segundos." },
    { q: "¿Cuál de estas es una pista de que un perfil de empresa es falso, según el BCRA?", opciones: ["Tener la tilde azul","Tener muchas publicaciones a lo largo de los años","Contestar por canales oficiales","Pocas publicaciones recientes y pocos seguidores"], correcta: 3, explicacion: "Los perfiles falsos suelen ser nuevos y con pocos seguidores. Tener muchas publicaciones tienta como señal rara, pero es lo normal en un perfil real." },
    { q: "Te llega una solicitud de amistad de un amigo que ya tenías como contacto. ¿Qué hacés?", opciones: ["La aceptás, es tu amigo","No la aceptás y le avisás a tu amigo por otro lado","La aceptás y le pedís plata para probar","Borrás tu cuenta"], correcta: 1, explicacion: "Lo más probable es que le hayan copiado la foto y el nombre. Aceptarla tienta porque lo conocés, pero ese perfil no es el de tu amigo." },
    { q: "Un \"amigo\" del juego de tu hijo le pide pasar a WhatsApp y que no les cuente a los adultos. ¿Qué concluís?", opciones: ["Que es un amigo nuevo, está todo bien","Que hay que sacarle el celular para siempre","Que son señales de grooming: hablás con tu hijo y no dejás que siga esa charla","Que es normal en los juegos"], correcta: 2, explicacion: "El pedido de secreto con un desconocido es una alarma. Sacarle el celular tienta para cortar el problema, pero puede hacer que la próxima vez no te cuente nada." },
    { q: "Tu hija te cuenta que alguien en un juego le pidió una foto. ¿Qué hacés primero?", opciones: ["Le agradecés que te lo contó y guardás las capturas","La retás por hablar con desconocidos","Le contestás a esa persona para enfrentarla","Borrás todo para olvidarlo"], correcta: 0, explicacion: "Agradecerle hace que confíe en contarte. Enfrentar al adulto tienta, pero puede borrar sus rastros; las capturas sirven para la denuncia." },
    { q: "Sospechás que un adulto está haciendo grooming con un chico de tu familia. ¿A qué línea podés llamar?", opciones: ["Al número del juego","A la empresa de internet","A ninguna, hay que resolverlo en casa","Al 137, gratuita y las 24 horas"], correcta: 3, explicacion: "El 137 tiene un equipo contra las violencias digitales que asesora y acompaña. Resolverlo en casa tienta para no exponer al chico, pero el grooming es un delito y hay gente preparada para ayudar." },
    { q: "Tu sobrino de 12 años quiere mandarle una foto \"normal\" a alguien que conoció en un juego. ¿Qué le explicás?", opciones: ["Que si es normal no pasa nada","Que no se mandan fotos a desconocidos: una vez enviada, ya no la controla","Que la mande con filtro","Que la mande y después la borre"], correcta: 1, explicacion: "Pedir fotos, aunque sean comunes, suele ser el primer paso del grooming. Borrarla después tienta, pero la otra persona ya la puede haber guardado." },
  ],
},
{
  id: "si-paso",
  icono: "🚨",
  titulo: "Si te pasó: qué hacer y dónde denunciar",
  nivel: "Intermedio",
  objetivos: [
    "Actuar en los primeros minutos después de una estafa: banco, claves y contactos",
    "Guardar las pruebas y hacer la denuncia en el lugar correcto",
    "Acompañar a alguien que fue estafado sin culparlo",
  ],
  lecciones: [
    { titulo: "Los primeros minutos", html: `
      <p class="idea">Si te estafaron o creés que te robaron una cuenta, lo que hagas en los primeros minutos importa mucho. No es momento de sentir vergüenza: es momento de cortar el daño.</p>
      <p><strong>Si dieste datos del banco o hiciste una transferencia:</strong></p>
      <ol>
        <li><strong>Llamá ya a tu banco</strong> o a tu billetera virtual, al número oficial (el de la tarjeta o la app). Pedí que bloqueen la cuenta, la tarjeta y los accesos, y que intenten frenar la transferencia.</li>
        <li><strong>Cambiá tus claves desde otro equipo seguro</strong>, no desde el celular que pudo estar comprometido. Es lo que recomienda el BCRA.</li>
        <li><strong>Desinstalá</strong> cualquier app que te hayan hecho instalar.</li>
        <li><strong>Revisá</strong> los movimientos y si aparecen préstamos que no pediste.</li>
      </ol>
      <p><strong>Si te robaron una cuenta</strong> (WhatsApp, mail, red social):</p>
      <ol>
        <li>Avisá a tus contactos por otro medio para que no transfieran plata.</li>
        <li>Intentá recuperarla con la opción "¿olvidaste tu contraseña?" o, en WhatsApp, pidiendo el código de nuevo (módulo 3).</li>
        <li>Cuando la recuperes, cambiá la contraseña, activá la verificación en dos pasos y cerrá las sesiones abiertas en otros dispositivos.</li>
      </ol>
      <table>
        <tr><th>Primero</th><th>Después</th></tr>
        <tr><td>Banco, claves, avisar a contactos</td><td>Pruebas y denuncia (próxima lección)</td></tr>
      </table>
      <p><strong>Cuidado con la segunda estafa.</strong> Después de una estafa, a veces aparece alguien que "recupera tu plata" a cambio de un pago, o un falso abogado o policía. Es otra estafa. Las denuncias se hacen en los organismos oficiales y no se cobran.</p>
      <p>Por ejemplo, si a la noche te das cuenta de que le dictaste un código al "banco", no esperes a mañana: los bancos tienen líneas de denuncia de robo o fraude que atienden las 24 horas.</p>` },
    { titulo: "Guardar pruebas y denunciar", html: `
      <p class="idea">Denunciar sirve: ayuda a investigar, a recuperar plata en algunos casos y a frenar al estafador antes de que engañe a otros. Para que sirva, hace falta guardar las pruebas.</p>
      <p><strong>Antes de borrar nada, guardá:</strong></p>
      <ul>
        <li>Capturas de pantalla de los mensajes, con el número o el perfil del estafador visible.</li>
        <li>Los comprobantes de transferencia: fecha, monto, CBU o alias de destino.</li>
        <li>Los links que te mandaron, los mails (sin borrarlos) y los números desde donde te llamaron.</li>
        <li>Una nota con lo que pasó, en orden y con horarios, mientras te acordás.</li>
      </ul>
      <p><strong>Dónde denunciar en Argentina,</strong> según la página oficial del Gobierno:</p>
      <table>
        <tr><th>Dónde</th><th>Cómo</th></tr>
        <tr><td>La fiscalía más cercana a tu casa</td><td>Buscala en el mapa de fiscalías del Ministerio Público Fiscal</td></tr>
        <tr><td>UFECI, la unidad del Ministerio Público Fiscal que se especializa en delitos informáticos</td><td>Por su página web o al teléfono (011) 5071-0040</td></tr>
        <tr><td>En la Ciudad de Buenos Aires</td><td>El Ministerio Público Fiscal de la Ciudad recibe denuncias por internet, al 0800-33-347225 o en sus unidades de orientación y denuncia</td></tr>
        <tr><td>Línea 137</td><td>Gratuita, las 24 horas: asesora y acompaña en casos de violencia digital</td></tr>
      </table>
      <p>También podés hacer la denuncia en una comisaría. Llevá tu DNI y las pruebas, y pedí una copia de la denuncia: muchas veces el banco te la va a pedir.</p>
      <p><strong>Avisale también al banco por escrito.</strong> Hacé el reclamo por sus canales oficiales y guardá el número de reclamo. Si el banco no te responde, el BCRA tiene un canal de reclamos para usuarios de servicios financieros.</p>
      <p>Por ejemplo, si te estafaron con una compra en una plataforma, además de denunciar, hacé el reclamo dentro de la plataforma: muchas tienen programas de protección al comprador que solo funcionan si pagaste por ahí.</p>
      <p>Los teléfonos y las páginas pueden cambiar: confirmalos en la página oficial del Gobierno que está en los recursos.</p>` },
    { titulo: "Acompañar sin culpar", html: `
      <p class="idea">A alguien que fue estafado le da vergüenza contarlo. Si lo retamos ("¿cómo pudiste caer?"), la próxima vez no va a pedir ayuda a tiempo. Lo que sirve es acompañar y actuar rápido.</p>
      <table>
        <tr><th>No ayuda</th><th>Ayuda</th></tr>
        <tr><td>"¿Cómo no te diste cuenta?"</td><td>"Esto le pasa a mucha gente. Vamos a hacer lo que hay que hacer."</td></tr>
        <tr><td>"Te lo dije"</td><td>"Bien que me avisaste. Llamemos al banco ahora."</td></tr>
        <tr><td>Hacer todo vos sin explicar</td><td>Hacerlo juntos, para que la próxima sepa qué hacer</td></tr>
        <tr><td>Sacarle el celular o la tarjeta</td><td>Configurar juntos la seguridad de sus cuentas</td></tr>
      </table>
      <p>Recordá lo del módulo 0: las estafas están armadas por profesionales para engañar a cualquiera. Caer no es ser tonto; es que ese día te agarraron con la palanca justa.</p>
      <p><strong>Con adultos mayores.</strong> Muchas estafas apuntan a personas mayores porque confían en el teléfono y tienen ahorros. Algunas cosas que ayudan:</p>
      <ul>
        <li>Anotarles en un papel, cerca del teléfono, la regla: "El banco nunca te pide claves ni códigos. Si llaman, cortá y llamame".</li>
        <li>Acordar una palabra clave familiar (módulo 0).</li>
        <li>Activar juntos la verificación en dos pasos en WhatsApp.</li>
        <li>Llamarlos seguido, para que tengan a quién consultar antes de actuar.</li>
      </ul>
      <p><strong>Cuidate vos también.</strong> Una estafa puede dejar mucha angustia, además de la pérdida de plata. Hablarlo con alguien de confianza ayuda. Si la angustia no se va, pedí ayuda a un profesional de la salud.</p>
      <p>Por ejemplo, contar lo que te pasó (sin datos personales) en tu familia o en un grupo de vecinos ayuda a que otros reconozcan la misma estafa antes de caer.</p>` },
  ],
  practica: [
    "Armá una \"tarjeta de emergencia\" en papel con el número de denuncias de tu banco, el de tu billetera virtual y el de tu compañía de teléfono. Anotá dónde la guardaste.",
    "Buscá en el mapa de fiscalías del Ministerio Público Fiscal cuál es la más cercana a tu casa. Anotá la dirección.",
    "Escribí en una nota, como si hubiera pasado, la lista de pruebas que guardarías después de una estafa por WhatsApp. Anotá cuántas cosas pusiste y compará tu lista con la de la lección.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: si fuiste víctima de un ciberdelito, denuncialo", url: "https://www.argentina.gob.ar/node/90919" },
    { t: "Ministerio Público Fiscal: UFECI, unidad especializada en ciberdelincuencia", url: "https://www.mpf.gob.ar/ufeci/" },
    { t: "Ministerio Público Fiscal: mapa de fiscalías", url: "https://www.mpf.gob.ar/mapa-fiscalias/" },
    { t: "Gobierno de Argentina: ley simple sobre delitos informáticos", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/delitos-informaticos" },
  ],
  quiz: [
    { q: "Te diste cuenta de que le dictaste un código al falso \"banco\". ¿Qué hacés primero?", opciones: ["Esperás a mañana para ver si pasó algo","Hacés la denuncia primero y después llamás al banco","Llamás ya al número oficial del banco para bloquear la cuenta y frenar movimientos","Le escribís al estafador para pedirle la plata"], correcta: 2, explicacion: "En los primeros minutos el banco puede bloquear y a veces frenar una transferencia. Denunciar primero tienta porque es lo correcto, pero mientras tanto pueden seguir sacando plata." },
    { q: "Creés que tu celular tiene una app maliciosa y tenés que cambiar las claves. ¿Desde dónde las cambiás?", opciones: ["Desde otro equipo que sea seguro","Desde ese mismo celular","Desde una computadora del locutorio","No las cambiás para no levantar sospechas"], correcta: 0, explicacion: "Si el celular está comprometido, puede copiar las claves nuevas. El locutorio tienta porque es \"otro equipo\", pero no es seguro." },
    { q: "Te robaron el WhatsApp. ¿Qué es lo primero?", opciones: ["Comprar un chip nuevo","Borrar todas tus redes sociales","Esperar a que WhatsApp te escriba","Avisar a tus contactos por otro medio que no transfieran plata"], correcta: 3, explicacion: "El estafador va a pedir plata a tus contactos enseguida. Esperar a WhatsApp tienta, pero WhatsApp no te va a escribir: tenés que actuar vos." },
    { q: "Después de una estafa te escribe alguien que \"recupera tu plata\" si le pagás un adelanto. ¿Qué concluís?", opciones: ["Que es una oportunidad de recuperar la plata","Que es una segunda estafa: las denuncias se hacen en organismos oficiales y no se cobran","Que conviene pagar la mitad","Que es la policía"], correcta: 1, explicacion: "Los estafadores buscan a las víctimas de nuevo. Pensar que es una oportunidad tienta por las ganas de recuperar la plata, pero vas a perder más." },
    { q: "Querés denunciar una estafa por WhatsApp. ¿Qué guardás antes de borrar el chat?", opciones: ["Nada, borrás todo para olvidarlo","Solo el último mensaje","Capturas con el número del estafador, comprobantes y una nota de lo que pasó","Solo la foto de perfil del estafador"], correcta: 2, explicacion: "Las pruebas hacen que la denuncia sirva. Borrar todo tienta para sacarte el mal momento de encima, pero sin pruebas es muy difícil investigar." },
    { q: "Tenés que hacer una denuncia por una estafa virtual en Argentina. ¿Dónde podés hacerla?", opciones: ["En la fiscalía más cercana, en la UFECI o en una comisaría","Solo en la empresa de internet","En un grupo de Facebook","En ningún lado, no se puede denunciar"], correcta: 0, explicacion: "La página oficial del Gobierno lista fiscalías, la UFECI y otros canales. Un grupo de Facebook tienta para avisar a otros, pero no es una denuncia." },
    { q: "Vivís en la Ciudad de Buenos Aires y querés denunciar por internet. ¿Qué organismo recibe denuncias en línea?", opciones: ["El banco","La red social","La compañía de teléfono","El Ministerio Público Fiscal de la Ciudad"], correcta: 3, explicacion: "El MPF de la Ciudad recibe denuncias por internet, por teléfono o en persona. El banco tienta porque es donde estaba la plata, pero el banco recibe reclamos, no denuncias penales." },
    { q: "Hiciste la denuncia en una comisaría. ¿Qué pedís antes de irte?", opciones: ["Nada","Una copia de la denuncia","El teléfono del estafador","Que te devuelvan la plata en el momento"], correcta: 1, explicacion: "El banco muchas veces te pide la copia para el reclamo. Esperar la devolución en el momento tienta, pero la comisaría toma la denuncia, no devuelve plata." },
    { q: "Te estafaron en una compra pagada dentro de una plataforma de compraventa. ¿Qué hacés además de denunciar?", opciones: ["Nada más","Le escribís al vendedor amenazándolo","Hacés el reclamo dentro de la plataforma, que puede tener protección al comprador","Publicás tus datos para que te ayuden"], correcta: 2, explicacion: "Las protecciones de la plataforma funcionan si pagaste por ahí. Amenazar al vendedor tienta por bronca, pero no sirve y te puede traer problemas." },
    { q: "Tu papá cayó en una estafa y está avergonzado. ¿Qué le decís?", opciones: ["\"Esto le pasa a mucha gente. Vamos a hacer juntos lo que hay que hacer.\"","\"¿Cómo no te diste cuenta?\"","\"Te lo dije\"","\"Dame tu celular, no lo uses más\""], correcta: 0, explicacion: "Acompañar sin culpar hace que la próxima vez pida ayuda a tiempo. \"Te lo dije\" tienta cuando lo advertiste antes, pero lo hace sentir peor y no resuelve nada." },
    { q: "Querés proteger a tu abuela que vive sola. ¿Qué ayuda más?", opciones: ["Sacarle el teléfono","Decirle que no atienda a nadie nunca","Darle tu clave del banco por si necesita","Un papel cerca del teléfono con la regla \"el banco nunca pide claves: cortá y llamame\", y llamarla seguido"], correcta: 3, explicacion: "Una regla simple y alguien a quien consultar la protegen sin aislarla. Sacarle el teléfono tienta para eliminar el riesgo, pero la deja sin forma de pedir ayuda." },
    { q: "Te estafaron hace semanas y seguís con mucha angustia. ¿Qué hacés?", opciones: ["No contárselo a nadie","Hablarlo con alguien de confianza y, si no se va, pedir ayuda a un profesional de la salud","Pensar que es tu culpa","Esperar a que se pase solo sin hablarlo"], correcta: 1, explicacion: "Una estafa puede doler más allá de la plata. Callarlo tienta por vergüenza, pero hablarlo ayuda a vos y, además, puede evitar que le pase a otro." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Proyecto final: tu plan de seguridad",
  nivel: "Avanzado",
  objetivos: [
    "Revisar tus cuentas con una lista de control y llegar al puntaje de \"listo\"",
    "Armar un plan de emergencia para vos y tu familia",
    "Ayudar a otra persona a proteger sus cuentas y enseñarle a reconocer estafas",
  ],
  lecciones: [
    { titulo: "La lista de control de tus cuentas", html: `
      <p class="idea">El proyecto final es dejar tus cuentas protegidas de verdad. Vas a revisarlas con una lista de control (una lista de cosas para tildar) y contar tus puntos.</p>
      <p>Revisá cada punto y anotá 1 si lo cumplís y 0 si no:</p>
      <table>
        <tr><th>#</th><th>Punto</th><th>Módulo</th></tr>
        <tr><td>1</td><td>La contraseña del mail es larga, única y no está en ningún otro lado</td><td>1</td></tr>
        <tr><td>2</td><td>El mail tiene verificación en dos pasos</td><td>1</td></tr>
        <tr><td>3</td><td>No repetís la misma contraseña en el banco, el mail y las redes</td><td>1</td></tr>
        <tr><td>4</td><td>Tus contraseñas están en un gestor o en un lugar seguro, no en una nota del celular</td><td>1</td></tr>
        <tr><td>5</td><td>WhatsApp tiene verificación en dos pasos con PIN</td><td>3</td></tr>
        <tr><td>6</td><td>Revisaste los dispositivos vinculados de WhatsApp</td><td>3</td></tr>
        <tr><td>7</td><td>El celular y las apps están actualizados, con actualizaciones automáticas</td><td>5</td></tr>
        <tr><td>8</td><td>El celular tiene bloqueo de pantalla que no es 1234 ni tu fecha de nacimiento</td><td>5</td></tr>
        <tr><td>9</td><td>Tenés copia de seguridad de fotos y chats</td><td>5</td></tr>
        <tr><td>10</td><td>Hiciste la revisión de privacidad de tus redes</td><td>6</td></tr>
        <tr><td>11</td><td>Tenés anotado el número oficial de tu banco para emergencias</td><td>7</td></tr>
        <tr><td>12</td><td>Acordaste una palabra clave familiar</td><td>0</td></tr>
      </table>
      <p><strong>¿Cuándo está listo?</strong> Con <strong>10 puntos o más</strong>, y con los puntos 1, 2 y 5 cumplidos sí o sí: el mail y WhatsApp son las dos puertas más atacadas.</p>
      <p>Si no llegás, empezá por los puntos 1, 2 y 5. Hacé uno por día si te cuesta: no hace falta hacer todo en una tarde.</p>
      <p>Por ejemplo, alguien que arranca con 4 puntos puede llegar a 10 en una semana dedicando 15 minutos por día. Anotá tu puntaje del primer día y el del último: ver cómo sube ayuda a seguir.</p>` },
    { titulo: "Tu plan de emergencia", html: `
      <p class="idea">Un plan de emergencia es una hoja con lo que tenés que hacer y a quién llamar si algo pasa. Se arma con calma para no tener que pensar en el momento del susto.</p>
      <p>Armalo en papel y guardalo en un lugar que sepa tu familia (no solo en el celular, que puede ser lo que te robaron):</p>
      <pre><code>MI PLAN DE EMERGENCIA DIGITAL

Si me piden claves, códigos o plata con apuro:
  → Me tomo un minuto, corto y verifico por un canal que conozco.

Números para bloquear (los de la tarjeta o la página oficial):
  Banco: ......................  Billetera virtual: ................
  Compañía de teléfono: .........

Si me roban el celular:
  1. Buscarlo y bloquearlo desde "Encontrar mi dispositivo" o "Buscar"
  2. Llamar al banco, a la billetera y a la compañía de teléfono
  3. Cambiar la contraseña del mail desde otro equipo

Si me estafan:
  1. Banco ya     2. Claves desde otro equipo     3. Avisar a mis contactos
  4. Guardar pruebas     5. Denunciar (fiscalía, UFECI o comisaría)

Ayuda: 137 (violencia digital y grooming, gratis, 24 h)
Palabra clave familiar: (no la escribas acá: sabéla de memoria)</code></pre>
      <p><strong>Completalo con datos reales</strong> y fijate que los números sean los oficiales, de la tarjeta o de la página del banco, no de un mensaje.</p>
      <p><strong>Probalo.</strong> Un plan que nunca se probó puede fallar. Hacé un simulacro: elegí un día y repasá en voz alta qué harías si te roban el celular, mirando la hoja. ¿Encontraste todos los números? ¿Sabés tu contraseña del mail para entrar desde otro equipo?</p>
      <p>Por ejemplo, mucha gente descubre en el simulacro que no se acuerda la contraseña de su mail porque siempre entra sola en el celular. Mejor descubrirlo ahora que el día del robo.</p>` },
    { titulo: "Enseñarle a otra persona", html: `
      <p class="idea">La mejor forma de terminar el curso es ayudar a alguien: un familiar, un vecino, un amigo. Al explicarlo, lo aprendés mejor, y esa persona queda más protegida.</p>
      <p><strong>Elegí a alguien</strong> que use WhatsApp y el banco en el celular. Muchas veces son los adultos mayores de la familia, pero puede ser cualquiera.</p>
      <p><strong>En una charla de 30 minutos, hacé estas tres cosas juntos:</strong></p>
      <ol>
        <li><strong>La regla de oro:</strong> "Nadie serio te pide claves, códigos ni que hagas cosas en el cajero por teléfono. Si te piden, cortá y verificá". Escribila en un papel para que la tenga a mano.</li>
        <li><strong>WhatsApp con verificación en dos pasos:</strong> activala con esa persona, en su celular, y que elija ella el PIN.</li>
        <li><strong>Las cuatro palancas:</strong> mostrale un mensaje falso real (de tu carpeta de spam, por ejemplo) y que descubra ella el apuro, el miedo, el premio o la autoridad.</li>
      </ol>
      <p><strong>La rúbrica del proyecto.</strong> Puntuá de 0 a 2 cada parte:</p>
      <table>
        <tr><th>Parte</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Lista de control</td><td>Menos de 7 puntos</td><td>7 a 9 puntos</td><td>10 o más, con 1, 2 y 5</td></tr>
        <tr><td>Plan de emergencia</td><td>No está</td><td>Está, sin probar</td><td>Completo y probado con un simulacro</td></tr>
        <tr><td>Enseñarle a alguien</td><td>No</td><td>Charlaron</td><td>Activaron juntos la verificación y reconoció un mensaje falso</td></tr>
      </table>
      <p>El proyecto está completo con <strong>5 o 6 puntos</strong> y sin ningún 0.</p>
      <p><strong>Para seguir aprendiendo:</strong> las recomendaciones del BCRA, las guías de INCIBE y el centro de seguridad de Google, que están en los recursos. Las estafas cambian, pero las palancas son siempre las mismas: si te tomás un minuto y verificás, vas a estar bien.</p>
      <p>Por ejemplo, si trabajás o buscás trabajo en atención al público, en un comercio o en una oficina, saber reconocer estas estafas también te sirve ahí: muchas empresas sufren los mismos engaños.</p>` },
  ],
  practica: [
    "Completá la lista de control de 12 puntos y anotá tu puntaje. Mejorá lo que falte hasta llegar a 10 o más, con los puntos 1, 2 y 5 cumplidos, y anotá el puntaje final.",
    "Armá tu plan de emergencia en papel con los números reales. Hacé un simulacro de robo de celular y anotá qué te faltó.",
    "Ayudá a otra persona con las tres cosas de la última lección. Anotá si activaron la verificación en dos pasos y si reconoció las palancas de un mensaje falso.",
    "Puntuá tu proyecto con la rúbrica. Anotá el puntaje de cada parte y el total.",
  ],
  recursos: [
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
    { t: "Google: centro de seguridad", url: "https://safety.google/intl/es-419/" },
    { t: "INCIBE (España): guías de ciberseguridad para la ciudadanía", url: "https://www.incibe.es/ciudadania/formacion/guias" },
    { t: "Gobierno de Argentina: si fuiste víctima de un ciberdelito, denuncialo", url: "https://www.argentina.gob.ar/node/90919" },
  ],
  quiz: [
    { q: "Tu lista de control da 11 puntos, pero WhatsApp no tiene verificación en dos pasos. ¿Está listo?", opciones: ["Sí, pasó los 10 puntos","Sí, WhatsApp no importa","No: los puntos 1, 2 y 5 tienen que estar sí o sí","No, tiene que dar 12"], correcta: 2, explicacion: "El mail y WhatsApp son las puertas más atacadas. Pasar los 10 tienta como aprobado, pero sin el PIN de WhatsApp tu cuenta sigue expuesta al robo más común." },
    { q: "Arrancás con 4 puntos y te parece mucho trabajo. ¿Qué hacés?", opciones: ["Empezás por los puntos 1, 2 y 5 y hacés uno por día","Lo dejás para cuando tengas tiempo","Hacés los más fáciles aunque no sean importantes","Lo hacés todo en una noche sin dormir"], correcta: 0, explicacion: "De a poco y empezando por lo más importante se llega. Hacer los más fáciles tienta para sumar rápido, pero dejarías abiertas las puertas más atacadas." },
    { q: "¿Dónde conviene guardar tu plan de emergencia?", opciones: ["Solo en el celular","En un mail a vos mismo","Publicado en tus redes","En papel, en un lugar que sepa tu familia"], correcta: 3, explicacion: "Si te roban el celular, el plan tiene que estar en otro lado. Guardarlo en el celular tienta por cómodo, pero es justo lo que podés perder." },
    { q: "Tenés que anotar el número de tu banco en el plan. ¿De dónde lo sacás?", opciones: ["De un mensaje que te llegó del banco","De la tarjeta o de la página oficial del banco","De un buscador, el primero que aparezca","Te lo pasa un amigo"], correcta: 1, explicacion: "Los números de mensajes o de anuncios pueden ser falsos. El buscador tienta por rápido, pero a veces el primer resultado es una publicidad trucha." },
    { q: "En el simulacro descubrís que no te acordás la contraseña de tu mail. ¿Qué hacés?", opciones: ["Nada, entra sola en el celular","La anotás en el plan de emergencia","La guardás en un gestor de contraseñas o en un lugar seguro y te asegurás de poder entrar desde otro equipo","La cambiás por 123456 para recordarla"], correcta: 2, explicacion: "Si te roban el celular, vas a necesitar entrar desde otro lado. Anotarla en el plan tienta, pero esa hoja la puede ver cualquiera de la casa." },
    { q: "¿Por qué conviene hacer un simulacro del plan de emergencia?", opciones: ["Porque un plan que nunca se probó puede fallar justo cuando lo necesitás","Porque es obligatorio","Para que el plan sea más largo","No sirve, alcanza con escribirlo"], correcta: 0, explicacion: "Probarlo muestra lo que falta antes del problema real. Pensar que alcanza con escribirlo tienta, pero en el simulacro mucha gente descubre que le falta un número o una contraseña." },
    { q: "La palabra clave familiar, ¿la escribís en el plan de emergencia?", opciones: ["Sí, en grande","Sí, y la mandás por WhatsApp a todos","Sí, en la foto de perfil","No: se sabe de memoria para que nadie la lea"], correcta: 3, explicacion: "Una palabra clave escrita deja de ser secreta. Escribirla tienta para no olvidarla, pero cualquiera que vea el papel la conoce." },
    { q: "Vas a ayudar a tu tío con su WhatsApp. ¿Quién elige el PIN de la verificación en dos pasos?", opciones: ["Vos, para recordarlo si se olvida","Él, en su celular","Le ponés su fecha de nacimiento","Le ponés 111111 para que sea fácil"], correcta: 1, explicacion: "El PIN tiene que saberlo solo el dueño. Elegirlo vos tienta para poder ayudarlo después, pero un PIN que saben dos personas es menos seguro." },
    { q: "Le mostraste a tu abuela un mensaje falso. ¿Qué la ayuda más a aprender?", opciones: ["Que vos se la digas rápido","Borrarlo antes de que lo lea","Que ella descubra la palanca (apuro, miedo, premio o autoridad)","Decirle que nunca use el celular"], correcta: 2, explicacion: "Descubrirlo ella hace que lo reconozca la próxima vez. Decírsela rápido tienta para ahorrar tiempo, pero así aprende menos." },
    { q: "Tu proyecto sacó 5 puntos, pero tiene un 0 en \"Enseñarle a alguien\". ¿Está completo?", opciones: ["No: tiene que tener 5 o 6 puntos y ningún 0","Sí, llegó a 5","Sí, esa parte es opcional","No, tiene que sacar 6"], correcta: 0, explicacion: "Ningún 0 quiere decir que hiciste las tres partes. Llegar a 5 tienta como aprobado, pero ayudar a otra persona es parte del proyecto." },
    { q: "Un amigo dice que las estafas cambian tanto que no vale la pena aprender. ¿Qué le respondés?", opciones: ["Que tiene razón","Que hay que comprar un antivirus y listo","Que solo hay que cuidarse del mail","Que los cuentos cambian, pero las palancas son siempre las mismas"], correcta: 3, explicacion: "Apuro, miedo, premio y autoridad aparecen en casi todas las estafas. El antivirus tienta como solución única, pero no frena a alguien que te convence de darle un código." },
    { q: "Trabajás en atención al público y un \"proveedor\" llama apurado pidiendo un pago a una cuenta nueva. ¿Qué hacés?", opciones: ["Pagás para no perder el proveedor","Cortás y verificás por el contacto de siempre del proveedor antes de pagar","Le pedís el CBU por mail y pagás","Pagás la mitad para probar"], correcta: 1, explicacion: "Las mismas palancas engañan a empresas. Pedirle el CBU por mail tienta como verificación, pero si el estafador escribe desde un mail parecido, se lo va a dar igual." },
  ],
},
];
