// Temario del curso "Atención al cliente, en persona y por chat". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js atencion-cliente y node tools/metodologia.js atencion-cliente
window.TEMARIO = [
{
  id: "empezar",
  icono: "🛎️",
  titulo: "Empezar: qué es atender bien",
  nivel: "Básico",
  objetivos: [
    "Reconocer los trabajos de atención al cliente y lo que se espera en cada uno",
    "Cuidar la primera impresión: saludo, presentación personal y actitud",
    "Explicar qué hace que un cliente vuelva o no vuelva",
  ],
  lecciones: [
    { titulo: "Los trabajos de atención", html: `
      <p class="idea">Atender al cliente es ayudar a una persona a resolver lo que vino a buscar: comprar, preguntar, cambiar algo o reclamar. Está en muchísimos trabajos, y muchos son un buen primer empleo.</p>
      <table>
        <tr><th>Trabajo</th><th>Dónde atendés</th><th>Lo más importante</th></tr>
        <tr><td>Cajero o cajera</td><td>En persona, rápido</td><td>Exactitud con la plata y amabilidad con la fila</td></tr>
        <tr><td>Vendedor de mostrador</td><td>En persona</td><td>Conocer el producto y escuchar qué necesita</td></tr>
        <tr><td>Recepcionista</td><td>En persona y por teléfono</td><td>Orden, agenda y buen trato</td></tr>
        <tr><td>Operador de call center</td><td>Por teléfono</td><td>Voz clara, paciencia y seguir el procedimiento</td></tr>
        <tr><td>Atención por chat o redes</td><td>Por escrito</td><td>Responder rápido, claro y sin errores</td></tr>
      </table>
      <p>Un <strong>cliente</strong> es cualquier persona que usa lo que ofrecés, pague o no: el que compra en el almacén, el paciente de un consultorio, el vecino que hace un trámite.</p>
      <p><strong>Lo que tienen en común:</strong> escuchar, explicar claro, resolver o derivar bien, y mantener la calma. Eso se aprende, y este curso lo practica.</p>
      <p>Por ejemplo, la cajera del supermercado que saluda, avisa si hay una promo y despide con un "gracias" hace el mismo trabajo que la que cobra en silencio, pero el cliente se va con otra sensación.</p>` },
    { titulo: "La primera impresión", html: `
      <p class="idea">Los primeros segundos marcan cómo sigue la atención. Un saludo, mirar a la persona y una actitud de "te escucho" valen más que cualquier frase armada.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Saludar apenas la persona llega: "Buen día, ¿en qué te puedo ayudar?"</td><td>Seguir con el celular o charlando con un compañero</td></tr>
        <tr><td>Mirar a la persona y sonreír si corresponde</td><td>Atender sin levantar la vista</td></tr>
        <tr><td>Presentación prolija: ropa limpia, uniforme si hay, manos limpias</td><td>Comer o masticar chicle mientras atendés</td></tr>
        <tr><td>Si estás ocupado, avisar: "Ya te atiendo"</td><td>Hacer como que no la viste</td></tr>
      </table>
      <p><strong>Usted o vos:</strong> en Argentina, en muchos comercios se trata de vos. Si la persona es mayor o el lugar es más formal, empezá con usted y adaptate a cómo te habla.</p>
      <p>Por ejemplo, en una fila larga, un "Ya te atiendo, gracias por esperar" a quien acaba de llegar hace que la espera se sienta más corta, aunque dure lo mismo.</p>` },
    { titulo: "Por qué un cliente vuelve", html: `
      <p class="idea">Un cliente vuelve cuando se sintió bien tratado y le resolvieron lo que necesitaba. La <strong>experiencia del cliente</strong> es todo lo que vive desde que entra (o escribe) hasta que se va.</p>
      <pre><code>Entra → lo saludan → explica → lo escuchan → le resuelven → lo despiden
          ↓             ↓            ↓              ↓              ↓
       ¿Lo vieron?  ¿Le hablaron  ¿Lo           ¿Funcionó?    ¿Se fue con
                     claro?       interrumpieron?               ganas de volver?</code></pre>
      <p><strong>Lo que más pesa:</strong></p>
      <ul>
        <li>Que le resuelvan el problema, o que le digan con honestidad quién puede hacerlo.</li>
        <li>Que no tenga que repetir la misma historia a tres personas.</li>
        <li>Que le cumplan lo que le prometieron.</li>
      </ul>
      <p><strong>No prometas lo que no podés cumplir:</strong> "Mañana seguro llega" y que no llegue es peor que "Llega entre mañana y el jueves".</p>
      <p>Por ejemplo, un cliente al que le resolvieron bien un reclamo suele volver más contento que uno que nunca tuvo un problema: sintió que lo cuidaron.</p>` },
  ],
  practica: [
    "Elegí 2 trabajos de la tabla que te interesen y anotá para cada uno 3 cosas que tendrías que hacer bien según la lección.",
    "La próxima vez que te atiendan en un comercio, anotá los primeros 10 segundos: si te saludaron, si te miraron y cómo te hablaron. Puntualo del 1 al 5.",
    "Recordá una vez que volviste a un lugar por cómo te atendieron y otra en la que no volviste. Anotá en una tabla qué pasó en cada paso del recorrido de la lección.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si atendés en una farmacia y entra alguien que viene a preguntar, no a comprar, ¿es un cliente?", opciones: ["No, solo si compra","Solo si es habitual","Sí: cliente es cualquier persona que usa lo que ofrecés, pague o no","No, es un curioso"], correcta: 2, explicacion: "La forma en que lo atendés hoy decide si mañana compra. Pensar que solo cuenta si compra tienta, pero ese trato se nota." },
    { q: "Querés trabajar en un call center. ¿Qué es lo más importante?", opciones: ["Voz clara, paciencia y seguir el procedimiento","Saber vender lo que sea","Hablar rápido para atender más","Tener mucha ropa formal"], correcta: 0, explicacion: "Por teléfono solo cuenta tu voz y tu calma. Hablar rápido tienta para atender más llamadas, pero el cliente no te entiende y vuelve a llamar." },
    { q: "Llega un cliente y estás terminando de hablar con un compañero. ¿Qué hacés?", opciones: ["Terminás la charla y después lo atendés","Lo mirás sin decir nada","Le hacés una seña de esperar","Cortás la charla y lo saludás enseguida"], correcta: 3, explicacion: "El cliente va primero. Terminar la charla tienta porque falta poco, pero él siente que no importa." },
    { q: "Estás atendiendo a alguien y llega otra persona a la fila. ¿Qué hacés?", opciones: ["Hacés como que no la viste","Le decís \"Ya te atiendo, gracias por esperar\"","Dejás al primero para atenderla","Le decís que vuelva más tarde"], correcta: 1, explicacion: "Reconocer que llegó hace la espera más llevadera. Hacer como que no la viste tienta para no apurarte, pero se siente ignorada." },
    { q: "Atendés en un comercio y llega una señora mayor. ¿Cómo la tratás?", opciones: ["Siempre de vos, como a todos","De \"abuela\"","Empezás con usted y te adaptás a cómo te habla","Sin dirigirte a ella"], correcta: 2, explicacion: "Con personas mayores, usted es lo seguro. \"Abuela\" tienta por cariñoso, pero a muchas personas les cae mal." },
    { q: "¿Cuál de estas cosas conviene evitar mientras atendés?", opciones: ["Mirar el celular o masticar chicle","Saludar","Mirar a la persona","Avisar si vas a tardar"], correcta: 0, explicacion: "El celular y el chicle muestran poco interés. Pensar que nadie lo nota tienta, pero es lo primero que se ve." },
    { q: "¿Qué es la experiencia del cliente?", opciones: ["Los años que lleva comprando","Solo el momento de pagar","Lo que opina en internet","Todo lo que vive desde que entra o escribe hasta que se va"], correcta: 3, explicacion: "Cada paso suma o resta. Solo el pago tienta porque es el final, pero la experiencia empieza en el saludo." },
    { q: "Un cliente tuvo que contar su problema a 3 personas distintas. ¿Qué siente?", opciones: ["Que lo atendieron mucho","Cansancio y bronca: es de lo que más pesa en contra","Que es un lugar grande y serio","Nada en especial"], correcta: 1, explicacion: "Repetir la historia agota. Que lo atendieron mucho tienta como lectura, pero nadie se hizo cargo." },
    { q: "Si un cliente pregunta cuándo llega su pedido y no estás seguro, ¿qué le decís?", opciones: ["\"Mañana seguro\"","\"No sé\"","Un rango honesto: \"Entre mañana y el jueves\"","\"Pronto\""], correcta: 2, explicacion: "Lo que prometés tiene que cumplirse. \"Mañana seguro\" tienta para dejarlo contento, pero si no llega pierde la confianza." },
    { q: "Si a un cliente le resolvieron bien un reclamo, ¿qué suele pasar?", opciones: ["Vuelve, a veces más contento que si nunca hubiera tenido un problema","No vuelve nunca","Vuelve solo a reclamar","Da igual"], correcta: 0, explicacion: "Un problema bien resuelto genera confianza. Pensar que no vuelve tienta, pero sintió que lo cuidaron." },
    { q: "No sabés resolver lo que te pide un cliente. ¿Qué hacés?", opciones: ["Inventás una respuesta","Le decís que no se puede","Lo hacés esperar sin decir nada","Le decís con honestidad quién puede resolverlo y lo derivás bien"], correcta: 3, explicacion: "Derivar bien también es resolver. Inventar tienta para no quedar mal, pero el problema vuelve más grande." },
    { q: "Tenés una entrevista para cajero. ¿Qué dos cosas conviene mostrar?", opciones: ["Velocidad aunque te equivoques","Exactitud con la plata y amabilidad con la gente","Que sabés mucho de tecnología","Que no te gusta hablar"], correcta: 1, explicacion: "La caja necesita exactitud y buen trato. La velocidad tienta porque las filas son largas, pero un error con la plata es grave." },
  ],
},
{
  id: "escuchar",
  icono: "👂",
  titulo: "Escuchar para entender",
  nivel: "Básico",
  objetivos: [
    "Practicar la escucha activa sin interrumpir y confirmando lo que entendiste",
    "Usar preguntas abiertas y cerradas para descubrir qué necesita la persona",
    "Mostrar empatía con frases concretas, sin exagerar",
  ],
  lecciones: [
    { titulo: "Escucha activa", video: {"id":"rzsVh8YwZEQ","t":"Escucha activa · LearnFree (1:28)"}, html: `
      <p class="idea">La <strong>escucha activa</strong> es escuchar para entender, no para responder. Se nota en tres cosas: no interrumpir, mostrar que seguís lo que dice y confirmar lo que entendiste.</p>
      <table>
        <tr><th>Paso</th><th>Cómo se ve</th></tr>
        <tr><td>Dejar hablar</td><td>No cortar, aunque ya creas saber qué va a decir</td></tr>
        <tr><td>Mostrar atención</td><td>Mirar, asentir, "ajá", "entiendo"</td></tr>
        <tr><td>Parafrasear</td><td>Repetir con tus palabras: "O sea que la heladera hace ruido desde que la instalaron, ¿es así?"</td></tr>
        <tr><td>Anotar</td><td>Datos clave: nombre, número de pedido, fecha</td></tr>
      </table>
      <p><strong>Parafrasear</strong> es repetir lo que entendiste con tus palabras. Sirve para dos cosas: el cliente siente que lo escuchaste, y si entendiste mal, te corrige antes de que hagas algo equivocado.</p>
      <p>Por ejemplo, si un cliente dice "Me cobraron dos veces" y vos ya estás buscando el ticket mientras sigue hablando, te podés perder que el segundo cobro fue en otra sucursal.</p>` },
    { titulo: "Preguntar bien", html: `
      <p class="idea">Muchas veces el cliente no sabe explicar qué necesita. Con buenas preguntas lo descubrís sin que se sienta interrogado.</p>
      <table>
        <tr><th>Tipo</th><th>Para qué</th><th>Ejemplo</th></tr>
        <tr><td>Abierta</td><td>Que cuente más</td><td>"¿Para qué lo vas a usar?"</td></tr>
        <tr><td>Cerrada</td><td>Confirmar un dato</td><td>"¿Es para una pared de material o de durlock?"</td></tr>
        <tr><td>De opción</td><td>Ayudar a decidir</td><td>"¿Preferís la más económica o la que dura más?"</td></tr>
      </table>
      <p><strong>Una secuencia que funciona:</strong> primero una abierta, después cerradas para los detalles, y al final una de opción.</p>
      <pre><code>Cliente: Quiero un taladro.
Vos:     ¿Para qué lo vas a usar?            (abierta)
Cliente: Para colgar unos estantes.
Vos:     ¿Las paredes son de ladrillo?         (cerrada)
Cliente: Sí.
Vos:     ¿Preferís uno básico o uno con batería? (de opción)</code></pre>
      <p>Por ejemplo, sin preguntar, le podés vender el taladro más caro a alguien que lo va a usar dos veces por año, y no vuelve.</p>` },
    { titulo: "Empatía sin exagerar", html: `
      <p class="idea">La <strong>empatía</strong> es mostrar que entendés cómo se siente la otra persona. No hace falta estar de acuerdo con todo: alcanza con reconocer su situación antes de resolver.</p>
      <table>
        <tr><th>Frase empática</th><th>Frase que enfría</th></tr>
        <tr><td>"Entiendo que es un problema, sobre todo si lo necesitabas hoy."</td><td>"Y bueno, son cosas que pasan."</td></tr>
        <tr><td>"Tiene razón en que tendría que haber llegado ayer."</td><td>"No es mi culpa."</td></tr>
        <tr><td>"Gracias por avisarnos, lo vemos ahora."</td><td>"Eso no es de mi área."</td></tr>
      </table>
      <p><strong>Sin exagerar:</strong> "¡Lamentamos profundamente este terrible inconveniente!" suena a guion. Una frase simple y sincera funciona mejor.</p>
      <p><strong>Después de la empatía, la acción:</strong> la frase empática abre, pero el cliente quiere que pase algo. Seguí siempre con lo que vas a hacer: "Te lo cambio ahora" o "Lo consulto y en 10 minutos te digo".</p>
      <p>Por ejemplo, "Entiendo, si lo necesitabas para hoy es un problema. Fijate: tengo uno igual en otra sucursal, ¿te lo reservo?" junta empatía y solución en dos oraciones.</p>` },
  ],
  practica: [
    "En una charla con alguien, parafraseá 3 veces lo que te dice (\"O sea que…\"). Anotá cuántas veces te corrigió.",
    "Escribí una secuencia de pregunta abierta, cerrada y de opción para vender algo que conozcas (una bici, una heladera, un corte de pelo). Probala con alguien y anotá qué respondió a cada una.",
    "Tomá 4 frases que enfrían (como \"No es mi culpa\") y reescribilas como frases empáticas seguidas de una acción. Anotá las dos versiones.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Un cliente te está explicando su problema y ya sabés lo que va a decir. ¿Qué hacés?", opciones: ["Lo interrumpís para ahorrar tiempo","Empezás a buscar la solución mientras habla","Lo dejás terminar","Le decís \"ya sé, ya sé\""], correcta: 2, explicacion: "Dejarlo hablar evita perderte un detalle. Interrumpir tienta para ser rápido, pero se siente no escuchado." },
    { q: "¿Qué es parafrasear?", opciones: ["Repetir con tus palabras lo que entendiste para confirmarlo","Repetir exactamente lo que dijo","Contar una historia parecida","Cambiar de tema"], correcta: 0, explicacion: "Con tus palabras muestra que entendiste. Repetir exacto tienta por fiel, pero suena a loro y no confirma nada." },
    { q: "Un cliente dice \"La heladera hace ruido\". ¿Qué parafraseo es mejor?", opciones: ["\"La heladera hace ruido.\"","\"Todas hacen ruido.\"","\"¿Y qué querés que haga?\"","\"O sea que hace ruido desde que la instalaron, ¿es así?\""], correcta: 3, explicacion: "El parafraseo confirma y suma un detalle para verificar. Repetir la frase igual tienta, pero no agrega nada." },
    { q: "Tu cliente dice \"Me cobraron dos veces\". ¿Qué anotás mientras escuchás?", opciones: ["Nada, te acordás","Datos clave: nombre, fecha, número de pedido o de ticket","Solo su nombre","Lo que opinás del caso"], correcta: 1, explicacion: "Los datos anotados evitan pedirlos de nuevo. Pensar que te acordás tienta, pero con la próxima persona se mezclan." },
    { q: "Si un cliente dice \"Quiero un taladro\", ¿qué preguntás primero?", opciones: ["\"¿Lo querés?\"","\"¿Pagás con tarjeta?\"","Una abierta: \"¿Para qué lo vas a usar?\"","\"¿El más caro?\""], correcta: 2, explicacion: "La abierta descubre la necesidad. Preguntar cómo paga tienta para cerrar la venta, pero todavía no sabés qué necesita." },
    { q: "Querés confirmar si la pared es de ladrillo o de durlock. ¿Qué tipo de pregunta usás?", opciones: ["Cerrada","Abierta","De opción sobre el precio","Ninguna, suponés"], correcta: 0, explicacion: "La cerrada confirma un dato. Suponer tienta para no molestar, pero le podés vender lo que no le sirve." },
    { q: "Tu cliente duda entre dos productos. ¿Qué pregunta lo ayuda a decidir?", opciones: ["\"¿Para qué lo querés?\" otra vez","\"¿Lo llevás o no?\"","\"¿Cuánto ganás?\"","\"¿Preferís el más económico o el que dura más?\""], correcta: 3, explicacion: "La de opción ordena la decisión. \"¿Lo llevás o no?\" tienta por directo, pero presiona sin ayudar." },
    { q: "Vendiste el taladro más caro sin preguntar para qué era. ¿Qué riesgo hay?", opciones: ["Ninguno, vendiste más","Que no lo necesitaba y no vuelva","Que vuelva a comprar otro","Que te feliciten"], correcta: 1, explicacion: "Vender sin entender la necesidad aleja al cliente. Vender más tienta como logro, pero se pierde la confianza." },
    { q: "Un pedido llegó tarde y el cliente está molesto. ¿Qué frase usás?", opciones: ["\"Y bueno, son cosas que pasan.\"","\"No es mi culpa.\"","\"Entiendo que es un problema, sobre todo si lo necesitabas hoy.\"","\"Eso no es de mi área.\""], correcta: 2, explicacion: "La frase empática reconoce cómo se siente. \"No es mi culpa\" tienta porque es verdad, pero al cliente no le resuelve nada." },
    { q: "Escribiste \"¡Lamentamos profundamente este terrible inconveniente!\". ¿Cómo suena?", opciones: ["Exagerado, a guion: mejor una frase simple y sincera","Perfecto, muy empático","Poco formal","Muy corto"], correcta: 0, explicacion: "Lo exagerado suena falso. Que es muy empático tienta, pero el cliente nota que es una frase armada." },
    { q: "Ya le dijiste al cliente \"Entiendo tu situación\". ¿Qué falta?", opciones: ["Otra frase empática","Nada, ya está","Explicarle por qué pasó con detalle","La acción: qué vas a hacer y cuándo"], correcta: 3, explicacion: "La empatía abre, la acción resuelve. Pensar que ya está tienta, pero el cliente sigue con el problema." },
    { q: "Si no estás de acuerdo con lo que reclama el cliente, ¿podés mostrar empatía igual?", opciones: ["No, empatía es darle la razón","Sí: reconocés cómo se siente aunque no le des la razón en todo","Solo si tiene razón","No hace falta"], correcta: 1, explicacion: "Empatía es entender, no darle la razón. Pensar que es darle la razón tienta, pero podés reconocer su enojo y explicar lo que sí podés hacer." },
  ],
},
{
  id: "hablar",
  icono: "🗣️",
  titulo: "Hablar claro y en positivo",
  nivel: "Intermedio",
  objetivos: [
    "Explicar con lenguaje claro y sin palabras técnicas",
    "Decir lo que sí se puede en vez de \"no se puede\", con comunicación asertiva",
    "Atender por teléfono: saludo, espera, transferencia y cierre",
  ],
  lecciones: [
    { titulo: "Explicar claro", html: `
      <p class="idea">El cliente no tiene por qué conocer las palabras de tu trabajo. Explicá con palabras comunes, de a un paso, y confirmá que se entendió.</p>
      <table>
        <tr><th>Con palabras del trabajo</th><th>Claro</th></tr>
        <tr><td>"Tiene que hacer el alta en el sistema y después validar el CBU."</td><td>"Primero te registrás en la página. Después cargás los números de tu cuenta del banco."</td></tr>
        <tr><td>"Está en tránsito, en el centro de distribución."</td><td>"Ya salió del depósito y está viajando a tu ciudad."</td></tr>
        <tr><td>"No aplica la promo por el BIN de la tarjeta."</td><td>"Esa promo es solo para tarjetas de otro banco."</td></tr>
      </table>
      <p><strong>Pasos numerados:</strong> si son varias cosas, decilas en orden y de a una: "Primero…, después…, y al final…".</p>
      <p><strong>Confirmá sin hacer sentir mal:</strong> en vez de "¿Entendió?", preguntá "¿Te quedó alguna duda?" o "¿Querés que te lo anote?".</p>
      <p>Por ejemplo, anotarle los pasos en un papel o mandárselos por mensaje sirve mucho cuando son más de dos.</p>` },
    { titulo: "Lo que sí se puede", video: {"id":"ZgmSfdE2y-s","t":"¿Qué es la comunicación asertiva? · Prepa en Línea-SEP (1:53)"}, html: `
      <p class="idea">Cuando no podés darle al cliente lo que pide, decí primero lo que <strong>sí</strong> podés hacer. El mismo "no" se recibe muy distinto.</p>
      <table>
        <tr><th>En negativo</th><th>En positivo</th></tr>
        <tr><td>"No hay más talles."</td><td>"En ese talle me queda en azul, o te lo pido para el jueves."</td></tr>
        <tr><td>"No se puede cambiar sin ticket."</td><td>"Con el ticket te lo cambio al momento. Si no lo tenés, fijate si te llegó por mail."</td></tr>
        <tr><td>"No atendemos los domingos."</td><td>"Te esperamos de lunes a sábado de 9 a 20."</td></tr>
      </table>
      <p><strong>Comunicación asertiva:</strong> es decir lo que pensás o lo que se puede hacer de forma clara y respetuosa, sin agredir y sin dejarte pasar por encima. Está en el medio entre callarte todo (pasivo) y pelear (agresivo).</p>
      <pre><code>Pasivo:    "Bueno, está bien, como quiera…" (y hacés algo que no podés)
Agresivo:  "¡Le dije que no se puede!"
Asertivo:  "Eso no lo puedo hacer, pero sí puedo ofrecerle esto."</code></pre>
      <p>Por ejemplo, si un cliente insiste con un descuento que no existe, "Ese descuento no lo tenemos, pero pagando en efectivo hay un 10 %" es firme y amable a la vez.</p>` },
    { titulo: "Por teléfono", video: {"id":"Cg-0OjwDKt4","t":"5 tips para hablar por teléfono profesionalmente · LearnFree en Español (2:48)"}, html: `
      <p class="idea">Por teléfono no te ven: tu voz lo es todo. Hablá un poco más lento, sonreí (se nota en la voz) y nunca dejes a nadie esperando sin avisar.</p>
      <table>
        <tr><th>Momento</th><th>Qué decir</th></tr>
        <tr><td>Saludo</td><td>"Ferretería Mitre, buenas tardes, habla Juana. ¿En qué te puedo ayudar?"</td></tr>
        <tr><td>Poner en espera</td><td>"¿Me esperás un minuto mientras lo busco?" (y esperá el sí)</td></tr>
        <tr><td>Volver de la espera</td><td>"Gracias por esperar. Ya lo tengo."</td></tr>
        <tr><td>Transferir</td><td>"Te paso con Carlos, de reparaciones, que te lo resuelve. Ya le conté tu caso."</td></tr>
        <tr><td>Cierre</td><td>"¿Te puedo ayudar en algo más? Gracias por llamar."</td></tr>
      </table>
      <p><strong>Al transferir, contale el caso a quien recibe:</strong> así el cliente no tiene que repetir todo.</p>
      <p><strong>Si se corta:</strong> pedí el número al principio de la llamada. Si se corta, lo llamás vos.</p>
      <p>Por ejemplo, si buscar algo te va a llevar más de 2 minutos, mejor: "Lo averiguo y te llamo en 15 minutos a este número, ¿te parece?". Y cumplilo.</p>` },
  ],
  practica: [
    "Elegí 3 palabras técnicas de un trabajo que conozcas y escribí cómo se las explicarías a un cliente. Pedile a alguien que las lea y anotá si las entendió.",
    "Reescribí 4 frases negativas (\"No hay\", \"No se puede\") en positivo, diciendo primero lo que sí se puede. Anotá las dos versiones.",
    "Practicá con alguien una llamada completa (saludo, espera, transferencia y cierre) y grabala. Anotá cuántos de los 5 momentos de la tabla dijiste bien.",
  ],
  recursos: [
    { t: "Derecho fácil: Defensa del consumidor (ley simple)", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Le decís a un cliente \"Tiene que validar el CBU\". Te mira confundido. ¿Qué hacés?", opciones: ["Lo repetís más fuerte","Le decís que lo busque en internet","Lo explicás con palabras comunes: \"cargás los números de tu cuenta del banco\"","Seguís con el siguiente paso"], correcta: 2, explicacion: "Las palabras del trabajo no las conoce todo el mundo. Repetirlo más fuerte tienta, pero el problema no es el volumen." },
    { q: "Tenés que explicar 4 pasos. ¿Cómo lo hacés?", opciones: ["En orden y de a uno: \"Primero…, después…\"; si hace falta, se los anotás","Todos juntos, rápido","Solo el primero","Le das el manual"], correcta: 0, explicacion: "De a uno se siguen. Todos juntos tienta por rápido, pero se olvida la mitad." },
    { q: "¿Qué pregunta conviene para confirmar que se entendió?", opciones: ["\"¿Entendió o se lo explico de nuevo?\"","\"¿Está claro, no?\"","No preguntás","\"¿Te quedó alguna duda?\""], correcta: 3, explicacion: "Preguntar por dudas no hace sentir mal. \"¿Entendió?\" tienta por directo, pero puede sonar a que el cliente es lento." },
    { q: "Si no hay más talles del color que pidió el cliente, ¿qué le decís?", opciones: ["\"No hay.\"","\"En ese talle me queda en azul, o te lo pido para el jueves.\"","\"Se agotó, mala suerte.\"","\"Volvé otro día.\""], correcta: 1, explicacion: "Decir lo que sí se puede abre opciones. \"No hay\" tienta por honesto, pero cierra la conversación." },
    { q: "Si un cliente quiere cambiar algo sin ticket y la regla pide ticket, ¿cómo empezás?", opciones: ["\"Sin ticket no se puede.\"","\"Bueno, te lo cambio igual.\"","\"Con el ticket te lo cambio al momento. Fijate si te llegó por mail.\"","\"Las reglas son las reglas.\""], correcta: 2, explicacion: "En positivo das un camino. Cambiarlo igual tienta para dejarlo contento, pero no podés saltear la regla." },
    { q: "¿Qué es la comunicación asertiva?", opciones: ["Decir lo que se puede o lo que pensás de forma clara y respetuosa, sin agredir y sin dejarte pasar por encima","Decirle que sí a todo al cliente","Imponer tu opinión","Hablar lo menos posible"], correcta: 0, explicacion: "Asertivo es el medio entre pasivo y agresivo. Decir que sí a todo tienta para evitar conflictos, pero terminás prometiendo lo que no podés." },
    { q: "Si un cliente insiste con un descuento que no existe, ¿qué respuesta es asertiva?", opciones: ["\"¡Le dije que no!\"","\"Bueno, se lo hago igual.\"","Te quedás callado","\"Ese descuento no lo tenemos, pero pagando en efectivo hay un 10 %.\""], correcta: 3, explicacion: "Firme y amable a la vez. Hacérselo igual tienta para terminar rápido, pero es pasivo y te puede traer problemas." },
    { q: "Atendés el teléfono de un comercio. ¿Cómo saludás?", opciones: ["\"¿Hola?\"","Nombre del lugar, saludo, tu nombre y \"¿En qué te puedo ayudar?\"","\"Diga.\"","\"¿Quién habla?\""], correcta: 1, explicacion: "El saludo completo ubica al cliente. \"¿Hola?\" tienta por natural, pero no sabe si llamó al lugar correcto." },
    { q: "Tenés que buscar un dato y vas a tardar un minuto. ¿Qué hacés?", opciones: ["Lo dejás en silencio sin avisar","Cortás y lo llamás otro día","Pedís si te puede esperar, esperás el sí y al volver le agradecés","Le pedís que llame más tarde"], correcta: 2, explicacion: "Avisar y agradecer cuida al cliente. El silencio tienta porque es rápido, pero cree que se cortó." },
    { q: "Tenés que transferir una llamada a otra área. ¿Qué hacés?", opciones: ["Le contás el caso a quien recibe, así el cliente no repite todo","Transferís sin decir nada","Le das otro número para que llame","Le decís que no es tu área"], correcta: 0, explicacion: "Contar el caso evita que repita. Transferir sin decir nada tienta por rápido, pero el cliente empieza de cero." },
    { q: "Al principio de una llamada, ¿qué dato conviene pedir por si se corta?", opciones: ["La edad","Su opinión del local","Ninguno","El número de teléfono"], correcta: 3, explicacion: "Con el número podés volver a llamar. No pedir nada tienta para no demorar, pero si se corta lo perdés." },
    { q: "Si averiguar algo te va a llevar 15 minutos, ¿qué le decís al cliente por teléfono?", opciones: ["Que espere 15 minutos en línea","\"Lo averiguo y te llamo en 15 minutos a este número\", y lo cumplís","Que vuelva a llamar mañana","Que no se puede saber"], correcta: 1, explicacion: "Ofrecer devolver la llamada respeta su tiempo. Dejarlo esperando tienta para no perderlo, pero 15 minutos en línea desespera a cualquiera." },
  ],
},
{
  id: "chat",
  icono: "💬",
  titulo: "Atender por chat, WhatsApp y redes",
  nivel: "Intermedio",
  objetivos: [
    "Responder por escrito rápido, completo y sin errores",
    "Usar respuestas guardadas sin sonar a robot",
    "Cuidar los datos del cliente y saber cuándo pasar del chat a otro canal",
  ],
  lecciones: [
    { titulo: "Rápido y completo", video: {"id":"5W-WOZ9zQfM","t":"Cómo ofrecer un buen servicio al cliente: 9 consejos prácticos · HubSpot Español (6:11)"}, html: `
      <p class="idea">Por chat, el cliente espera una respuesta rápida, pero sobre todo completa: que no tenga que preguntar tres veces para saber el precio, el envío y cómo pagar.</p>
      <pre><code>Respuesta incompleta (el cliente tiene que volver a preguntar):
"Sí, hay."

Respuesta completa:
"¡Hola, Marta! Sí, tenemos la mochila negra.
Precio: $ 25.000. Envío a todo el país: $ 4.500 (llega en 3 a 5 días).
Pagás con transferencia o tarjeta. ¿Te la reservo?"</code></pre>
      <p><strong>Tiempos:</strong> si no podés responder enseguida, un "¡Hola! Lo consulto y te respondo en 15 minutos" evita que el cliente se vaya a otro lado.</p>
      <p><strong>Escribí bien:</strong> sin abreviaturas ("xq", "q"), con signos de pregunta y con el nombre de la persona si lo sabés. Un error de ortografía en un precio ("$ 2.500" en vez de "$ 25.000") puede ser un problema serio.</p>
      <p><strong>Cerrá con una pregunta que lleve a la acción:</strong> "¿Te la reservo?", "¿Te paso el link de pago?".</p>
      <p>Por ejemplo, contestar con precio, envío y medio de pago en el primer mensaje ahorra tres idas y vueltas.</p>` },
    { titulo: "Respuestas guardadas", html: `
      <p class="idea">Las <strong>respuestas guardadas</strong> (o plantillas) ahorran tiempo con las preguntas de siempre. El truco es personalizarlas cada vez para que no suenen a robot.</p>
      <table>
        <tr><th>Pregunta frecuente</th><th>Respuesta guardada</th></tr>
        <tr><td>Horarios</td><td>"Atendemos de lunes a sábado de 9 a 20. Estamos en Mitre 450."</td></tr>
        <tr><td>Medios de pago</td><td>"Aceptamos efectivo, transferencia y tarjeta de débito y crédito."</td></tr>
        <tr><td>Envíos</td><td>"Enviamos a todo el país. El costo depende del código postal: ¿me pasás el tuyo?"</td></tr>
      </table>
      <p><strong>Personalizá siempre:</strong> agregá el nombre, respondé exactamente lo que preguntó y sacá lo que no aplica.</p>
      <pre><code>Robot:          "Aceptamos efectivo, transferencia y tarjeta."
Personalizada:  "¡Hola, Diego! Sí, con tarjeta de crédito podés pagar
                 en 3 cuotas sin interés esa campera."</code></pre>
      <p>En WhatsApp Business, estas respuestas se guardan como <strong>respuestas rápidas</strong> y se insertan escribiendo una barra y una palabra, como "/horarios".</p>
      <p>Por ejemplo, si alguien pregunta "¿aceptan tarjeta para la campera?", pegar la lista de todos los medios de pago contesta, pero no responde lo que preguntó.</p>` },
    { titulo: "Datos y cuándo cambiar de canal", html: `
      <p class="idea">Por chat circulan datos personales. Pedí solo lo que hace falta, nunca pidas contraseñas ni códigos, y sabé cuándo conviene pasar a una llamada.</p>
      <table>
        <tr><th>Podés pedir (si hace falta)</th><th>Nunca pidas</th></tr>
        <tr><td>Nombre, número de pedido</td><td>Contraseñas</td></tr>
        <tr><td>Dirección de envío</td><td>Códigos que llegan por SMS</td></tr>
        <tr><td>Un teléfono de contacto</td><td>Los números completos de una tarjeta con su código de seguridad</td></tr>
      </table>
      <p><strong>Las redes son públicas:</strong> si un cliente reclama en un comentario de Instagram, respondé en público con amabilidad y pasá a privado para los datos: "¡Hola, Lucía! Te escribimos por mensaje privado para resolverlo".</p>
      <p><strong>Cuándo cambiar de canal:</strong></p>
      <ul>
        <li>Si llevan más de 6 o 7 mensajes y no se entienden, ofrecé una llamada.</li>
        <li>Si el cliente está muy enojado, la voz calma más que el texto.</li>
        <li>Si hace falta ver algo (un producto roto), pedí una foto.</li>
      </ul>
      <p>Por ejemplo, si un "cliente" te pide por chat que le pases el código que te llegó por SMS "para verificar tu cuenta", es un intento de robo: no lo pases nunca.</p>` },
  ],
  practica: [
    "Escribí una respuesta completa por chat para un producto que conozcas: precio, envío, medio de pago y una pregunta de cierre. Anotá cuántos de esos 4 datos tiene.",
    "Armá 3 respuestas guardadas para preguntas frecuentes y después personalizá cada una para un cliente con nombre. Anotá las dos versiones.",
    "Escribí la respuesta pública a un reclamo en un comentario de una red social y el primer mensaje por privado. Anotá qué datos pedís y cuáles no.",
  ],
  recursos: [
    { t: "WhatsApp Business: la aplicación", url: "https://business.whatsapp.com/products/business-app?lang=es" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si te preguntan por chat \"¿Tienen la mochila negra?\", ¿qué respondés?", opciones: ["\"Sí, hay.\"","\"Sí\" y esperás la próxima pregunta","Sí, con precio, envío, medio de pago y una pregunta de cierre","Una foto sola"], correcta: 2, explicacion: "La respuesta completa ahorra idas y vueltas. \"Sí, hay\" tienta por rápido, pero el cliente tiene que preguntar todo de nuevo." },
    { q: "Te escriben y no podés responder hasta dentro de un rato. ¿Qué hacés?", opciones: ["Avisás: \"Lo consulto y te respondo en 15 minutos\"","No respondés hasta tener todo","Respondés cualquier cosa rápido","Le dejás el visto"], correcta: 0, explicacion: "Avisar evita que se vaya. Esperar a tener todo tienta para responder completo, pero el cliente cree que no lo viste." },
    { q: "Escribiste por error \"$ 2.500\" en vez de \"$ 25.000\". ¿Qué problema hay?", opciones: ["Ninguno, se entiende","Solo un error de tipeo","Que queda informal","El cliente puede exigir ese precio o enojarse: hay que revisar los números antes de enviar"], correcta: 3, explicacion: "Los números por escrito valen. Pensar que se entiende tienta, pero el cliente leyó ese precio." },
    { q: "¿Cómo conviene terminar un mensaje de venta por chat?", opciones: ["\"Cualquier cosa avisá\"","Con una pregunta que lleve a la acción: \"¿Te la reservo?\"","Sin cierre","\"Saludos\""], correcta: 1, explicacion: "La pregunta invita a avanzar. \"Cualquier cosa avisá\" tienta por amable, pero deja todo en el aire." },
    { q: "Tenés una respuesta guardada con los medios de pago. Diego pregunta si puede pagar la campera en cuotas. ¿Qué hacés?", opciones: ["Pegás la lista tal cual","Le pedís que lea el perfil","La personalizás: lo saludás por su nombre y respondés lo de las cuotas","No respondés"], correcta: 2, explicacion: "Personalizar responde lo que preguntó. Pegarla tal cual tienta por rápido, pero suena a robot y no contesta." },
    { q: "En WhatsApp Business, ¿cómo insertás una respuesta guardada?", opciones: ["Escribiendo una barra y la palabra, como \"/horarios\"","Copiándola de otro chat cada vez","Mandando un audio","No se puede"], correcta: 0, explicacion: "Las respuestas rápidas se insertan con la barra. Copiarla de otro chat tienta, pero es más lento y te podés equivocar de texto." },
    { q: "Tenés que hacer un envío. ¿Qué dato podés pedir por chat?", opciones: ["La contraseña de su mail","El código que le llegó por SMS","El código de seguridad de la tarjeta","La dirección de envío"], correcta: 3, explicacion: "La dirección hace falta para enviar. Los códigos tientan como \"verificación\", pero nunca se piden." },
    { q: "Un cliente reclama en un comentario público de Instagram. ¿Qué hacés?", opciones: ["Borrás el comentario","Respondés en público con amabilidad y pasás a privado para los datos","Discutís en público","Lo ignorás"], correcta: 1, explicacion: "Responder en público muestra que te ocupás. Borrar tienta para que nadie lo vea, pero el cliente se enoja más y lo cuenta." },
    { q: "Llevan 8 mensajes con un cliente y no se entienden. ¿Qué hacés?", opciones: ["Seguís escribiendo más largo","Le mandás un audio de 5 minutos","Le ofrecés una llamada","Dejás de responder"], correcta: 2, explicacion: "Hablando se destraba más rápido. Escribir más largo tienta para explicar mejor, pero el problema es el canal." },
    { q: "Si un cliente dice que su producto llegó roto, ¿qué le pedís por chat?", opciones: ["Una foto del producto","Que lo traiga sin avisar","Que espere","Su contraseña"], correcta: 0, explicacion: "La foto muestra el problema y agiliza la solución. Que lo traiga tienta, pero quizás no hace falta el viaje." },
    { q: "Un \"cliente\" te pide por chat que le pases el código que te llegó por SMS. ¿Qué es?", opciones: ["Una verificación normal","Un trámite del banco","Un pedido de un cliente fiel","Un intento de robo: no lo pasás nunca"], correcta: 3, explicacion: "Ese código da acceso a tu cuenta. Que parece un trámite tienta, pero nadie legítimo lo pide." },
    { q: "Si un cliente está muy enojado por chat, ¿qué canal calma más?", opciones: ["Más mensajes escritos","Una llamada: la voz calma más que el texto","Emojis","Dejar de responder"], correcta: 1, explicacion: "La voz transmite tono. Los emojis tientan para suavizar, pero con alguien muy enojado pueden sonar a burla." },
  ],
},
{
  id: "dificiles",
  icono: "🌩️",
  titulo: "Clientes enojados y situaciones difíciles",
  nivel: "Intermedio",
  objetivos: [
    "Atender a un cliente enojado con un método de 5 pasos",
    "Poner límites con respeto y saber cuándo llamar a un supervisor o a seguridad",
    "Cuidarte después de una situación difícil",
  ],
  lecciones: [
    { titulo: "Un método para el cliente enojado", html: `
      <p class="idea">Un cliente enojado casi siempre está enojado con la situación, no con vos. Si no lo tomás personal y seguís un método, la mayoría de las veces se calma.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th><th>Ejemplo</th></tr>
        <tr><td>1. Escuchar</td><td>Lo dejás descargar sin interrumpir</td><td>(silencio, asentir)</td></tr>
        <tr><td>2. Reconocer</td><td>Mostrás que entendés</td><td>"Entiendo, esperaste dos semanas y no llegó."</td></tr>
        <tr><td>3. Disculpar</td><td>Pedís disculpas por lo que pasó, sin culpar a nadie</td><td>"Lamento que haya pasado esto."</td></tr>
        <tr><td>4. Resolver</td><td>Proponés algo concreto, con plazo</td><td>"Te lo reenvío hoy y te paso el seguimiento."</td></tr>
        <tr><td>5. Cerrar</td><td>Confirmás que quedó bien</td><td>"¿Te parece bien así? ¿Algo más?"</td></tr>
      </table>
      <p><strong>Lo que empeora todo:</strong> interrumpir, decir "cálmese", discutir quién tiene la culpa o culpar a otra área ("Eso es culpa de los de depósito").</p>
      <p><strong>Bajá vos el tono:</strong> si el cliente sube la voz, vos hablá más bajo y más lento. Casi siempre la otra persona termina acompañando.</p>
      <p>Por ejemplo, "Cálmese, señor" suele enojar más. "Entiendo que es muy molesto, vamos a resolverlo" hace el mismo pedido sin chocar.</p>` },
    { titulo: "Límites y seguridad", html: `
      <p class="idea">Atender bien no es aguantar todo. Si el cliente insulta, amenaza o se pone violento, tenés derecho a poner un límite y pedir ayuda.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>Grita, pero no insulta</td><td>Seguí el método de 5 pasos</td></tr>
        <tr><td>Insulta</td><td>Límite claro y tranquilo: "Quiero ayudarte, pero necesito que no me insultes."</td></tr>
        <tr><td>Sigue insultando</td><td>Avisás que vas a llamar a tu supervisor, y lo llamás</td></tr>
        <tr><td>Amenaza, rompe cosas o intenta agredir</td><td>Te alejás, llamás a seguridad o al 911. Tu seguridad va primero.</td></tr>
      </table>
      <p><strong>No te pongas en riesgo:</strong> no retengas a nadie, no salgas a perseguir a quien se lleva algo y no te metas en una pelea. Ningún producto vale más que tu cuerpo.</p>
      <p><strong>Escalar</strong> es pasar el caso a alguien con más autoridad (un supervisor o encargado). No es fracasar: es parte del trabajo cuando el problema supera lo que vos podés resolver.</p>
      <p>Por ejemplo, conocé de antemano cómo se llama a seguridad o al encargado en tu trabajo: en el momento difícil no vas a tener tiempo de averiguarlo.</p>` },
    { titulo: "Cuidarte después", html: `
      <p class="idea">Una situación difícil deja huella aunque la hayas manejado bien. Darte unos minutos para recuperarte es parte de hacer bien el trabajo.</p>
      <ul>
        <li><strong>Respirá:</strong> unas respiraciones lentas antes de atender a la próxima persona.</li>
        <li><strong>No te lo lleves puesto:</strong> el enojo era con la situación. Contalo a un compañero o al encargado en vez de guardártelo.</li>
        <li><strong>Registrá lo que pasó:</strong> qué pasó, cuándo y qué hiciste. Sirve si el caso sigue y para que el lugar mejore.</li>
        <li><strong>Pedí ayuda si se repite:</strong> si salís mal de muchas jornadas, hablalo con tu encargado o con un profesional de salud.</li>
      </ul>
      <table>
        <tr><th>Señal de que necesitás un corte</th><th>Qué hacer</th></tr>
        <tr><td>Te tiemblan las manos o tenés ganas de llorar</td><td>Pedí cubrirte unos minutos</td></tr>
        <tr><td>Le contestás mal al próximo cliente</td><td>Pausa breve y respiración</td></tr>
        <tr><td>No podés dejar de pensarlo en tu casa</td><td>Hablalo con alguien de confianza</td></tr>
      </table>
      <p>Este curso no reemplaza a un profesional de salud mental. Si el malestar dura o te afecta mucho, consultá: en Argentina hay atención gratuita en hospitales públicos.</p>
      <p>Por ejemplo, un "¿me cubrís cinco minutos?" a un compañero después de una discusión fuerte evita que la próxima persona reciba tu enojo.</p>` },
  ],
  practica: [
    "Escribí el diálogo de un cliente enojado (un pedido que no llegó) y tu respuesta con los 5 pasos. Marcá cada paso y anotá si cumpliste los 5.",
    "Escribí la frase exacta que dirías para poner un límite ante un insulto. Decila en voz alta 3 veces y anotá cómo sonó (tranquila, nerviosa, agresiva).",
    "Averiguá (o inventá para un trabajo imaginario) cómo se llama a un supervisor y a seguridad. Anotá el paso a paso.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Un cliente llega gritando porque su pedido no llegó. ¿Qué hacés primero?", opciones: ["Le decís \"cálmese\"","Le explicás que no es tu culpa","Lo dejás descargar sin interrumpir","Le hablás más fuerte"], correcta: 2, explicacion: "Escuchar es el primer paso. \"Cálmese\" tienta porque es lo que querés, pero suele enojar más." },
    { q: "Ya escuchaste al cliente enojado. ¿Qué sigue?", opciones: ["Reconocer: \"Entiendo, esperaste dos semanas y no llegó.\"","Ofrecer un descuento sin escuchar más","Contarle tu día","Pasarlo a otro sin decir nada"], correcta: 0, explicacion: "Reconocer muestra que entendiste. El descuento tienta para cerrar rápido, pero sin reconocer suena a \"tomá y andate\"." },
    { q: "Tu compañero de depósito se equivocó con el envío. ¿Qué le decís al cliente?", opciones: ["\"Es culpa de los de depósito.\"","\"Yo no fui.\"","\"Pasa siempre.\"","\"Lamento que haya pasado esto. Te lo reenvío hoy.\""], correcta: 3, explicacion: "Disculpar sin culpar mantiene la confianza en el lugar. Culpar a otra área tienta porque es verdad, pero el cliente siente que nadie se hace cargo." },
    { q: "Ya pediste disculpas. ¿Qué tiene que tener la solución?", opciones: ["Una promesa general","Algo concreto y con plazo","Más disculpas","Una explicación técnica larga"], correcta: 1, explicacion: "Concreto y con plazo se puede cumplir y controlar. La promesa general tienta porque no compromete, pero no resuelve." },
    { q: "Si el cliente sube la voz, ¿qué hacés con la tuya?", opciones: ["La subís para que te escuche","Te quedás callado todo el tiempo","La bajás y hablás más lento","Te vas"], correcta: 2, explicacion: "Bajar el tono contagia calma. Subirla tienta para hacerte oír, pero se transforma en pelea." },
    { q: "Un cliente te insulta. ¿Qué decís?", opciones: ["\"Quiero ayudarte, pero necesito que no me insultes.\"","Le devolvés el insulto","Lo aguantás en silencio","Te ponés a llorar delante de él"], correcta: 0, explicacion: "Un límite claro y tranquilo. Aguantarlo tienta para no empeorar, pero no tenés por qué soportar insultos." },
    { q: "El cliente sigue insultando después del límite. ¿Qué hacés?", opciones: ["Seguís atendiendo como si nada","Lo echás a empujones","Llamás a tus amigos","Avisás que vas a llamar a tu supervisor, y lo llamás"], correcta: 3, explicacion: "Escalar es parte del trabajo. Seguir como si nada tienta para terminar rápido, pero te desgasta y no resuelve." },
    { q: "Un cliente amenaza y empieza a romper cosas. ¿Qué hacés?", opciones: ["Lo enfrentás","Te alejás y llamás a seguridad o al 911: tu seguridad va primero","Lo retenés hasta que llegue alguien","Seguís atendiendo"], correcta: 1, explicacion: "Ningún producto vale más que tu cuerpo. Enfrentarlo tienta para defender el local, pero te expone a una agresión." },
    { q: "Alguien se va corriendo con un producto sin pagar. ¿Qué hacés?", opciones: ["Salís corriendo atrás","Lo agarrás del brazo","No lo perseguís: avisás a seguridad o al encargado","Le tirás algo"], correcta: 2, explicacion: "Perseguirlo te pone en riesgo. Correr atrás tienta por reflejo, pero puede terminar en una agresión." },
    { q: "¿Qué es escalar un caso?", opciones: ["Pasarlo a alguien con más autoridad, como un supervisor","Gritar más fuerte","Subir el precio","Ignorar al cliente"], correcta: 0, explicacion: "Escalar es parte del trabajo. Pensar que es fracasar tienta, pero hay problemas que vos no podés resolver." },
    { q: "Terminaste una discusión fuerte y te tiemblan las manos. ¿Qué hacés?", opciones: ["Atendés al próximo enseguida","Te vas a tu casa sin avisar","Hacés como que no pasó nada","Pedís que te cubran unos minutos y respirás"], correcta: 3, explicacion: "Un corte breve evita descargarte con el próximo. Atender enseguida tienta para no hacer esperar, pero el próximo recibe tu tensión." },
    { q: "Hace semanas salís mal de cada jornada. ¿Qué hacés?", opciones: ["Lo aguantás, es parte del trabajo","Lo hablás con tu encargado o con un profesional de salud","Lo escondés","Esperás que se pase solo"], correcta: 1, explicacion: "Si se repite, conviene pedir ayuda. Aguantarlo tienta porque parece lo normal, pero el malestar sostenido se agrava." },
  ],
},
{
  id: "derechos",
  icono: "⚖️",
  titulo: "Reclamos, derechos y atención para todas las personas",
  nivel: "Intermedio",
  objetivos: [
    "Tomar un reclamo con los datos completos y darle seguimiento",
    "Conocer los derechos básicos del consumidor en Argentina: trato digno, información y garantía",
    "Atender bien a personas mayores y a personas con discapacidad",
  ],
  lecciones: [
    { titulo: "Tomar un reclamo", html: `
      <p class="idea">Un <strong>reclamo</strong> bien tomado ya es la mitad de la solución. Anotá todo para que nadie tenga que volver a preguntar, y decile al cliente qué va a pasar y cuándo.</p>
      <table>
        <tr><th>Dato</th><th>Ejemplo</th></tr>
        <tr><td>Nombre y contacto</td><td>Marta Gómez, 11 5555-0000</td></tr>
        <tr><td>Qué compró o qué servicio</td><td>Heladera modelo X, factura 0001-4512</td></tr>
        <tr><td>Qué pasó y desde cuándo</td><td>No enfría desde el 3 de marzo</td></tr>
        <tr><td>Qué pide</td><td>Reparación o cambio</td></tr>
        <tr><td>Número de reclamo</td><td>R-2031 (se lo das al cliente)</td></tr>
        <tr><td>Próximo paso y plazo</td><td>El técnico la llama antes del viernes</td></tr>
      </table>
      <p><strong>El número de reclamo</strong> le sirve al cliente para preguntar sin contar todo de nuevo, y te protege a vos: queda registrado que lo tomaste.</p>
      <p><strong>Seguimiento:</strong> si dijiste "antes del viernes", el viernes revisá que se haya cumplido. Si no, llamá vos al cliente antes de que llame él.</p>
      <p>Por ejemplo, "Tu reclamo es el R-2031; el técnico te llama antes del viernes" deja al cliente mucho más tranquilo que "Ya lo anoté, quedate tranquila".</p>` },
    { titulo: "Los derechos del consumidor", html: `
      <p class="idea">En Argentina, la <strong>Ley 24.240 de Defensa del Consumidor</strong> protege a quien compra o usa un servicio. Conocerla te ayuda a atender bien y a no prometer cosas que van contra la ley.</p>
      <table>
        <tr><th>Derecho</th><th>Qué significa en el mostrador</th></tr>
        <tr><td>Trato digno</td><td>Nada de tratos vergonzantes, intimidatorios ni discriminatorios</td></tr>
        <tr><td>Información clara y gratuita</td><td>Precio, características, forma de pago y condiciones, antes de comprar</td></tr>
        <tr><td>Garantía</td><td>6 meses para cosas nuevas y 3 meses para usadas, con reparación y traslado a cargo del vendedor</td></tr>
        <tr><td>Reclamar</td><td>En el comercio y, si no se resuelve, en Defensa del Consumidor</td></tr>
      </table>
      <p><strong>Arrepentimiento:</strong> en las compras a distancia (por internet o por teléfono), la ley da un plazo de 10 días corridos para arrepentirse y devolver.</p>
      <p><strong>Dónde reclamar si el comercio no lo resuelve:</strong> en la Ventanilla Única Federal de Defensa del Consumidor (un formulario en internet) o en la oficina de defensa del consumidor de tu provincia o municipio.</p>
      <p>Esta lección resume la ley para entenderla; no reemplaza el asesoramiento de un abogado ni de la oficina de defensa del consumidor.</p>
      <p>Por ejemplo, si un cliente trae una licuadora nueva que dejó de andar a los 4 meses, está dentro de la garantía: decirle "Ya pasó mucho tiempo" va contra sus derechos.</p>` },
    { titulo: "Atención para todas las personas", video: {"id":"wk2p48ptyNo","t":"Los saludos en LSA (Lengua de Señas Argentina) · Departamento LSA Chaco (0:53)"}, html: `
      <p class="idea">Atender bien es atender bien a todos: personas mayores, personas con discapacidad, personas que no hablan bien el castellano. Casi siempre alcanza con preguntar y tener paciencia.</p>
      <table>
        <tr><th>Situación</th><th>Qué ayuda</th></tr>
        <tr><td>Persona mayor con dudas con la tecnología</td><td>Explicar de a un paso, sin apurar, y ofrecer anotar</td></tr>
        <tr><td>Persona ciega o con baja visión</td><td>Presentarte, decir en voz alta lo que hacés ("te doy el vuelto: dos billetes de mil")</td></tr>
        <tr><td>Persona sorda</td><td>Mirarla al hablar, no taparte la boca, escribir si hace falta; un saludo en lengua de señas ayuda mucho</td></tr>
        <tr><td>Persona en silla de ruedas</td><td>Hablarle a ella, no a su acompañante; ponerte a su altura si la charla es larga</td></tr>
      </table>
      <p><strong>La regla de oro:</strong> preguntá antes de ayudar. "¿Te ayudo con algo?" en vez de agarrar a alguien del brazo o empujar una silla de ruedas sin permiso.</p>
      <p><strong>Hablá con la persona, no con su acompañante:</strong> aunque venga con alguien, la clienta es ella.</p>
      <p>La <strong>LSA</strong> (Lengua de Señas Argentina) es la lengua de la comunidad sorda en Argentina. Aprender a saludar y a decir "gracias" es un buen comienzo.</p>
      <p>Por ejemplo, decir el vuelto en voz alta a una persona ciega le permite controlarlo sin tener que preguntarte, igual que cualquier otro cliente.</p>` },
  ],
  practica: [
    "Armá una planilla de reclamos con las 6 columnas de la lección y cargá 2 reclamos inventados. Anotá el número de reclamo y el plazo que diste en cada uno.",
    "Leé la página de Derecho fácil sobre defensa del consumidor y anotá 3 derechos con un ejemplo de mostrador para cada uno.",
    "Mirá el video de saludos en LSA y practicá \"hola\", \"buen día\" y \"gracias\". Anotá cuántos podés hacer sin mirar.",
  ],
  recursos: [
    { t: "Derecho fácil: Defensa del consumidor (ley simple)", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor" },
    { t: "Ley 24.240 de Defensa del Consumidor (resumen oficial)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-24240-638" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "Agencia Nacional de Discapacidad", url: "https://www.argentina.gob.ar/andis" },
  ],
  quiz: [
    { q: "Tenés que tomar un reclamo por una heladera que no enfría. ¿Qué datos anotás?", opciones: ["Solo el nombre","Solo el problema","Nombre y contacto, qué compró, qué pasó y desde cuándo, qué pide, número de reclamo y próximo paso","Nada, lo resolvés de memoria"], correcta: 2, explicacion: "Con todos los datos nadie tiene que volver a preguntar. Solo el problema tienta por rápido, pero después no sabés a quién llamar." },
    { q: "¿Para qué sirve darle al cliente un número de reclamo?", opciones: ["Para que pregunte sin contar todo de nuevo y quede registrado","Para que no vuelva","Para cobrarle","Para nada"], correcta: 0, explicacion: "El número ordena el seguimiento y te protege. Pensar que no sirve tienta, pero sin él el reclamo se pierde." },
    { q: "Le dijiste al cliente \"el técnico te llama antes del viernes\". El viernes, ¿qué hacés?", opciones: ["Nada, ya lo derivaste","Esperás que el cliente llame","Cerrás el reclamo","Revisás si se cumplió y, si no, llamás vos al cliente"], correcta: 3, explicacion: "El seguimiento cumple la promesa. Esperar que llame tienta, pero llega más enojado." },
    { q: "¿Qué ley protege a quien compra o usa un servicio en Argentina?", opciones: ["El Código Penal","La Ley 24.240 de Defensa del Consumidor","La ley de tránsito","Ninguna, depende de cada comercio"], correcta: 1, explicacion: "La Ley 24.240 es la de defensa del consumidor. Pensar que depende de cada comercio tienta, pero hay derechos que valen siempre." },
    { q: "Si un cliente trae una licuadora nueva que dejó de andar a los 4 meses, ¿qué le decís?", opciones: ["\"Ya pasó mucho tiempo\"","\"Se usa y se rompe\"","Que está dentro de la garantía y cómo sigue el trámite","\"Tenía que fijarse al comprar\""], correcta: 2, explicacion: "Las cosas nuevas tienen 6 meses de garantía. \"Ya pasó mucho tiempo\" tienta para sacártelo de encima, pero va contra sus derechos." },
    { q: "¿Cuánto dura la garantía legal de una cosa usada?", opciones: ["3 meses","6 meses","1 año","No tiene"], correcta: 0, explicacion: "Usadas, 3 meses; nuevas, 6. Pensar que no tiene tienta porque es usada, pero la ley la cubre." },
    { q: "Si un cliente compró por internet y quiere arrepentirse a los 5 días, ¿puede?", opciones: ["No, la compra es final","Solo si el producto está roto","Solo con 48 horas","Sí: en compras a distancia hay 10 días corridos para arrepentirse"], correcta: 3, explicacion: "La ley da 10 días en compras a distancia. \"La compra es final\" tienta como regla del comercio, pero la ley está por encima." },
    { q: "Si un cliente no logra resolver su reclamo en el comercio, ¿dónde puede ir?", opciones: ["A ningún lado","A Defensa del Consumidor: la Ventanilla Única Federal o la oficina de su provincia o municipio","Solo a un juicio con abogado","A las redes sociales y nada más"], correcta: 1, explicacion: "Hay un camino oficial y gratuito. El juicio tienta como única opción, pero antes está Defensa del Consumidor." },
    { q: "Atendés a una persona ciega y le das el vuelto. ¿Qué hacés?", opciones: ["Se lo das en silencio","Se lo das al acompañante","Le decís en voz alta qué le das: \"dos billetes de mil\"","Le pedís que cuente rápido"], correcta: 2, explicacion: "Decirlo le permite controlarlo. Dárselo al acompañante tienta por práctico, pero la clienta es ella." },
    { q: "Si atendés a una persona sorda, ¿qué ayuda?", opciones: ["Mirarla al hablar, no taparte la boca y escribir si hace falta","Hablarle más fuerte","Hablarle al acompañante","Hablar muy rápido para terminar"], correcta: 0, explicacion: "Mirarla y escribir facilita la comunicación. Hablar más fuerte tienta por reflejo, pero no le sirve a una persona sorda." },
    { q: "Si una persona en silla de ruedas viene con su hijo, ¿a quién le hablás?", opciones: ["Al hijo","A los dos por igual, mirando al hijo","A nadie","A ella, que es la clienta"], correcta: 3, explicacion: "La clienta es ella. Hablarle al hijo tienta porque está parado a tu altura, pero la deja afuera." },
    { q: "Ves a una persona mayor con dificultad para subir un escalón. ¿Qué hacés primero?", opciones: ["La agarrás del brazo sin preguntar","Le preguntás \"¿Te ayudo?\"","No hacés nada","Le decís que tenga cuidado"], correcta: 1, explicacion: "Preguntar respeta a la persona. Agarrarla tienta para ser útil, pero puede asustarla o desequilibrarla." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu guion de atención",
  nivel: "Avanzado",
  objetivos: [
    "Armar un guion de atención para un trabajo real o imaginario",
    "Practicar 3 situaciones con otra persona y evaluarlas con una rúbrica",
    "Contar en una entrevista cómo atendés a un cliente difícil",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>guion de atención</strong>: lo que decís y hacés en las situaciones más comunes de un trabajo. Después lo practicás con otra persona haciendo de cliente.</p>
      <p><strong>Elegí un lugar:</strong> un almacén, una farmacia, una ferretería, un consultorio, un call center o tu propio emprendimiento.</p>
      <table>
        <tr><th>Parte del guion</th><th>Usa el módulo</th></tr>
        <tr><td>Saludo en persona y por teléfono</td><td>Qué es atender bien, Hablar claro</td></tr>
        <tr><td>3 preguntas para descubrir qué necesita</td><td>Escuchar para entender</td></tr>
        <tr><td>3 respuestas guardadas para el chat</td><td>Atender por chat</td></tr>
        <tr><td>Respuesta a un cliente enojado con los 5 pasos</td><td>Clientes enojados</td></tr>
        <tr><td>Planilla para tomar reclamos</td><td>Reclamos y derechos</td></tr>
        <tr><td>Cierre y despedida</td><td>Qué es atender bien</td></tr>
      </table>
      <p><strong>Las 3 situaciones para practicar:</strong></p>
      <ol>
        <li>Una consulta común (en persona o por chat).</li>
        <li>Un cliente enojado por algo que salió mal.</li>
        <li>Algo que no podés darle (decir lo que sí se puede).</li>
      </ol>
      <p>Por ejemplo, para una farmacia: saludo, "¿Para quién es?" como pregunta abierta, una respuesta guardada con los horarios de guardia, y un reclamo por un pedido que faltó.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. La persona que hace de cliente te evalúa con esta en cada situación.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Saludo y primera impresión</td><td>Saludo enseguida, mirada, tono amable</td><td>Saludo tardío o frío</td><td>Sin saludo</td></tr>
        <tr><td>Escucha</td><td>No interrumpe y parafrasea</td><td>Interrumpe una vez</td><td>Interrumpe todo el tiempo</td></tr>
        <tr><td>Claridad</td><td>Palabras comunes, de a un paso</td><td>Alguna palabra técnica</td><td>No se entiende</td></tr>
        <tr><td>En positivo</td><td>Dice lo que sí se puede</td><td>Dice que no y después ofrece algo</td><td>Solo "no se puede"</td></tr>
        <tr><td>Solución</td><td>Concreta y con plazo</td><td>Concreta sin plazo</td><td>Promesa vaga</td></tr>
        <tr><td>Cierre</td><td>Confirma y despide</td><td>Despide sin confirmar</td><td>Sin cierre</td></tr>
      </table>
      <pre><code>Máximo por situación: 12
11 o 12 → listo
7 a 10  → practicá de nuevo lo que sacó 0 o 1
0 a 6   → repasá el módulo de ese criterio y volvé a probar</code></pre>
      <p>Por ejemplo, si en la situación del cliente enojado sacaste 0 en "Escucha", volvé a practicar solo los dos primeros pasos del método hasta que salgan naturales.</p>` },
    { titulo: "Contarlo en una entrevista", html: `
      <p class="idea">En casi todas las entrevistas para atención al cliente te preguntan "¿Cómo atenderías a un cliente enojado?" o "Contame una vez que resolviste un problema". Con lo que practicaste, tenés la respuesta.</p>
      <p><strong>Un modelo para responder:</strong> situación, qué hiciste, resultado.</p>
      <pre><code>Situación:  "Un cliente vino enojado porque su pedido no llegaba."
Qué hice:   "Lo escuché sin interrumpir, le dije que entendía la
             molestia, le pedí disculpas, rastreé el envío y le
             prometí llamarlo a las 17 con novedades."
Resultado:  "Lo llamé a las 17, el pedido llegó al otro día
             y siguió comprando."</code></pre>
      <p><strong>Si nunca trabajaste atendiendo:</strong> usá un ejemplo de la vida (un club, la escuela, una changa, tu familia) o contá cómo lo harías con el método de los 5 pasos. Lo que importa es que se note que tenés un método.</p>
      <table>
        <tr><th>Pregunta típica</th><th>Qué muestra tu respuesta</th></tr>
        <tr><td>¿Cómo atenderías a un cliente enojado?</td><td>Que tenés un método y no lo tomás personal</td></tr>
        <tr><td>¿Qué hacés si no sabés la respuesta?</td><td>Que no inventás y derivás bien</td></tr>
        <tr><td>¿Qué es para vos atender bien?</td><td>Que pensás en resolver, no solo en ser amable</td></tr>
      </table>
      <p>Por ejemplo, el curso "Buscar trabajo con IA" de este sitio te ayuda a practicar estas respuestas en una entrevista simulada.</p>` },
  ],
  practica: [
    "Escribí tu guion de atención completo con las 6 partes de la tabla del encargo. Anotá para qué lugar es.",
    "Practicá las 3 situaciones con otra persona que haga de cliente. Pedile que te evalúe con la rúbrica y anotá el puntaje de cada situación sobre 12.",
    "Volvé a practicar la situación con menos puntaje y anotá el puntaje antes y después.",
    "Escribí tu respuesta a \"¿Cómo atenderías a un cliente enojado?\" con situación, qué hiciste y resultado, y decila en voz alta en menos de 1 minuto. Anotá cuánto tardaste.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Tu guion de atención es para una farmacia. ¿Qué pregunta abierta usás para empezar?", opciones: ["\"¿Lo querés?\"","\"¿Pagás con tarjeta?\"","\"¿Para quién es?\" o \"¿Qué te está pasando?\"","\"¿Es todo?\""], correcta: 2, explicacion: "La abierta descubre la necesidad. \"¿Pagás con tarjeta?\" tienta para ir al cobro, pero todavía no sabés qué necesita." },
    { q: "En tu práctica, ¿qué tres situaciones tenés que probar?", opciones: ["Una consulta común, un cliente enojado y algo que no podés darle","Tres consultas comunes","Solo el cliente enojado","Tres ventas grandes"], correcta: 0, explicacion: "Las tres cubren lo que más pasa. Solo consultas comunes tienta por fácil, pero lo difícil es lo que más se practica." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una firma","Un tipo de reclamo","Un guion de venta","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica muestra qué mejorar. Confundirla con un guion tienta porque es parte del proyecto, pero el guion es lo que evaluás." },
    { q: "En la práctica interrumpiste al cliente todo el tiempo. ¿Cuánto sacás en \"Escucha\"?", opciones: ["2","0","1","No se evalúa"], correcta: 1, explicacion: "Interrumpir todo el tiempo es 0. Pensar que cuenta solo si resolviste tienta, pero escuchar es un criterio aparte." },
    { q: "Le dijiste al cliente \"No se puede\" y nada más. ¿Qué criterio falla?", opciones: ["Saludo","Cierre","En positivo","Ninguno"], correcta: 2, explicacion: "Solo \"no se puede\" es 0 en positivo. Cierre tienta porque la charla se cortó, pero el problema es cómo dijiste que no." },
    { q: "Tu solución fue \"Ya lo vemos\". ¿Cuánto saca en \"Solución\"?", opciones: ["0: es una promesa vaga","2: es amable","1: hay una solución","No se evalúa"], correcta: 0, explicacion: "Sin qué ni cuándo, es vaga. Que es amable tienta, pero la amabilidad no resuelve." },
    { q: "Sacaste 8 sobre 12 en una situación. ¿Qué hacés?", opciones: ["Lo das por listo","Cambiás de situación","Dejás de practicar","Practicás de nuevo lo que sacó 0 o 1"], correcta: 3, explicacion: "Entre 7 y 10 se practica lo que falló. Darlo por listo tienta porque aprobaste, pero ese criterio va a fallar con un cliente real." },
    { q: "En una entrevista te preguntan cómo atenderías a un cliente enojado. ¿Cómo respondés?", opciones: ["\"Con paciencia\" y nada más","Con situación, qué hiciste y resultado, mostrando un método","\"Nunca tuve uno\"","\"Llamo a mi jefe siempre\""], correcta: 1, explicacion: "El modelo muestra un método concreto. \"Con paciencia\" tienta por corto, pero no muestra qué harías." },
    { q: "Nunca trabajaste atendiendo y te preguntan por un cliente difícil. ¿Qué hacés?", opciones: ["Inventás un trabajo que no tuviste","Decís que no sabés","Usás un ejemplo de la vida o contás cómo lo harías con el método de 5 pasos","Cambiás de tema"], correcta: 2, explicacion: "Un ejemplo real o un método muestran que sabés hacerlo. Inventar tienta para no quedar mal, pero si te repreguntan se nota." },
    { q: "Te preguntan \"¿Qué hacés si no sabés la respuesta?\". ¿Qué querés mostrar?", opciones: ["Que no inventás y derivás bien","Que siempre sabés todo","Que improvisás","Que le pedís al cliente que busque"], correcta: 0, explicacion: "Derivar bien es parte del trabajo. Mostrar que siempre sabés tienta, pero nadie sabe todo y el entrevistador lo sabe." },
    { q: "Tenés que contar tu respuesta de entrevista. ¿Cuánto tiempo conviene?", opciones: ["Diez minutos con todos los detalles","Una sola palabra","No importa","Menos de 1 minuto, con situación, qué hiciste y resultado"], correcta: 3, explicacion: "Corta y ordenada se recuerda. Todos los detalles tientan para mostrar que sabés, pero el entrevistador se pierde." },
    { q: "En tu guion falta la planilla de reclamos. ¿Qué módulo repasás?", opciones: ["Hablar claro y en positivo","Reclamos, derechos y atención para todas las personas","Atender por chat","Qué es atender bien"], correcta: 1, explicacion: "La planilla con sus 6 columnas está en ese módulo. Hablar claro tienta porque también es atención, pero no enseña a registrar reclamos." },
  ],
},
];
