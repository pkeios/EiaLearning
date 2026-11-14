// Temario del curso "Trabajar en equipo y resolver conflictos". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js trabajo-equipo y node tools/metodologia.js trabajo-equipo
window.TEMARIO = [
{
  id: "empezar",
  icono: "👥",
  titulo: "Empezar: qué hace funcionar a un equipo",
  nivel: "Básico",
  objetivos: [
    "Reconocer las 4 bases de un equipo que funciona: objetivo, roles, confianza y comunicación",
    "Explicar qué es la seguridad psicológica y por qué importa",
    "Identificar tu propio aporte y tus puntos a mejorar en un equipo",
  ],
  lecciones: [
    { titulo: "Grupo o equipo", video: {"id":"wDPXj8X30BY","t":"Cómo trabajar mejor en equipo · LearnFree en Español (2:28)"}, html: `
      <p class="idea">Un <strong>grupo</strong> son personas que trabajan cerca. Un <strong>equipo</strong> son personas que trabajan juntas para un mismo objetivo y se necesitan entre sí.</p>
      <table>
        <tr><th>Base</th><th>Qué es</th><th>Si falta…</th></tr>
        <tr><td>Objetivo común</td><td>Todos saben qué quieren lograr</td><td>Cada uno tira para su lado</td></tr>
        <tr><td>Roles claros</td><td>Cada uno sabe qué le toca</td><td>Cosas que hacen dos y cosas que no hace nadie</td></tr>
        <tr><td>Confianza</td><td>Te podés equivocar o preguntar sin miedo</td><td>Se esconden los errores hasta que explotan</td></tr>
        <tr><td>Comunicación</td><td>La información llega a quien la necesita</td><td>"Nadie me avisó"</td></tr>
      </table>
      <p>Hay equipos en todos lados: en una cocina, en una obra, en una escuela, en un club, en una familia que organiza un cumpleaños.</p>
      <p><strong>Lo que piden los trabajos:</strong> "saber trabajar en equipo" aparece en casi todos los avisos. Significa, en concreto, cumplir lo tuyo, avisar a tiempo, ayudar y tratar bien.</p>
      <p>Por ejemplo, en una cocina de restaurante, si el que hace la carne no avisa que se terminó, el mozo sigue tomando pedidos que no se pueden hacer.</p>` },
    { titulo: "Seguridad psicológica", html: `
      <p class="idea">La <strong>seguridad psicológica</strong> es sentir que en tu equipo podés preguntar, opinar distinto o reconocer un error sin que te humillen ni te castiguen. Las investigaciones sobre equipos la señalan como una de las cosas que más diferencia a los equipos que funcionan.</p>
      <table>
        <tr><th>Con seguridad psicológica</th><th>Sin seguridad psicológica</th></tr>
        <tr><td>"Me equivoqué con el pedido, lo arreglo"</td><td>Se esconde el error hasta que el cliente reclama</td></tr>
        <tr><td>"No entendí, ¿me lo explicás de nuevo?"</td><td>Hacés como que entendiste y lo hacés mal</td></tr>
        <tr><td>"Tengo una idea distinta"</td><td>Te callás para no quedar mal</td></tr>
      </table>
      <p><strong>Cómo la construís vos, aunque no seas el jefe:</strong></p>
      <ul>
        <li>Agradecé cuando alguien avisa un error: "Gracias por decirlo".</li>
        <li>No te burles de las preguntas.</li>
        <li>Reconocé tus propios errores primero.</li>
        <li>Criticá ideas, no personas.</li>
      </ul>
      <p>Por ejemplo, si en tu equipo el que pregunta recibe un "¿Todavía no sabés eso?", nadie más va a preguntar, y los errores van a aparecer más tarde y más caros.</p>` },
    { titulo: "Tu aporte al equipo", html: `
      <p class="idea">Cada persona aporta algo distinto: hay quien organiza, quien tiene ideas, quien termina las cosas, quien calma los ánimos. Conocer tu aporte te ayuda a ubicarte y a saber qué mejorar.</p>
      <table>
        <tr><th>Aporte</th><th>Fortaleza</th><th>Riesgo</th></tr>
        <tr><td>Organizador</td><td>Ordena tareas y tiempos</td><td>Querer controlar todo</td></tr>
        <tr><td>Creativo</td><td>Propone ideas nuevas</td><td>No bajarlas a tierra</td></tr>
        <tr><td>Ejecutor</td><td>Termina lo que empieza</td><td>No escuchar otras formas</td></tr>
        <tr><td>Conciliador</td><td>Cuida el clima y une</td><td>Evitar los conflictos necesarios</td></tr>
        <tr><td>Detallista</td><td>Encuentra errores</td><td>Trabarse en lo chico</td></tr>
      </table>
      <p>Nadie es un solo tipo, y un equipo necesita de todos.</p>
      <p><strong>Lo que todo equipo espera de cualquiera:</strong> cumplir lo que te toca, avisar a tiempo si no llegás, pedir ayuda antes de que sea tarde y tratar bien.</p>
      <p>Por ejemplo, en una entrevista, decir "en los equipos suelo ser el que organiza las tareas; estoy aprendiendo a delegar más" muestra que te conocés.</p>` },
  ],
  practica: [
    "Pensá en un equipo del que fuiste parte (trabajo, escuela, club, familia). Puntuá del 1 al 5 cada una de las 4 bases y anotá cuál era la más floja.",
    "Durante una semana, anotá cuántas veces en tu equipo alguien preguntó o reconoció un error, y cómo reaccionaron los demás.",
    "Elegí tus 2 aportes más fuertes de la tabla y tu riesgo principal. Pedile a alguien que te conoce que opine y anotá si coincidió.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
  ],
  quiz: [
    { q: "Cinco personas trabajan en la misma oficina, cada una en lo suyo, sin necesitarse. ¿Son un equipo?", opciones: ["Sí, porque trabajan juntos en el mismo lugar","Sí, si se llevan bien","No: son un grupo; un equipo tiene un objetivo común y se necesitan","Depende del jefe"], correcta: 2, explicacion: "Equipo es objetivo común y dependencia. Compartir el lugar tienta como definición, pero no los hace equipo." },
    { q: "En tu equipo hay tareas que hacen dos personas y otras que no hace nadie. ¿Qué falta?", opciones: ["Roles claros","Más gente","Más horas","Un objetivo nuevo"], correcta: 0, explicacion: "Sin roles claros pasa eso. Más gente tienta como solución, pero el desorden sigue igual." },
    { q: "Siempre que algo sale mal en tu equipo se escucha \"Nadie me avisó\". ¿Qué base falla?", opciones: ["El objetivo común","Los roles","La confianza","La comunicación"], correcta: 3, explicacion: "\"Nadie me avisó\" es un problema de comunicación. Los roles tientan porque también generan confusión, pero acá la información no llegó." },
    { q: "¿Qué significa \"saber trabajar en equipo\" en un aviso de trabajo?", opciones: ["Hacer lo que dice el jefe sin preguntar","Cumplir lo tuyo, avisar a tiempo, ayudar y tratar bien","Llevarse bien con todos y nada más","Hacer el trabajo de los demás"], correcta: 1, explicacion: "Es concreto: cumplir, avisar, ayudar y tratar bien. Llevarse bien tienta como resumen, pero sin cumplir no alcanza." },
    { q: "¿Qué es la seguridad psicológica?", opciones: ["Tener un trabajo estable","Tener cámaras de seguridad","Sentir que podés preguntar, opinar distinto o reconocer un error sin que te humillen","Que nadie te critique nunca"], correcta: 2, explicacion: "Es poder hablar sin miedo. Que nadie te critique tienta, pero se pueden criticar ideas con respeto." },
    { q: "Te equivocaste con un pedido y tenés miedo de decirlo. Si tu equipo tiene seguridad psicológica, ¿qué pasa?", opciones: ["Lo decís y lo arreglan juntos antes de que llegue al cliente","Te echan","Lo escondés igual","Se burlan de vos"], correcta: 0, explicacion: "Con seguridad psicológica, los errores salen a tiempo. Esconderlo tienta para evitar el mal momento, pero el problema crece." },
    { q: "Un compañero pregunta algo básico y otro le dice \"¿Todavía no sabés eso?\". ¿Qué consecuencia tiene?", opciones: ["Que el compañero va a estudiar más","Ninguna","Que el equipo es más exigente","Que nadie más va a preguntar, y los errores aparecen más tarde"], correcta: 3, explicacion: "Burlarse de las preguntas las apaga. Pensar que lo motiva a estudiar tienta, pero lo que aprende es a callarse." },
    { q: "Si no sos el jefe, ¿cómo podés construir seguridad psicológica?", opciones: ["No se puede, es tarea del jefe","Agradeciendo cuando alguien avisa un error y reconociendo los tuyos","Callándote siempre","Señalando los errores de los demás en público"], correcta: 1, explicacion: "Cualquiera puede aportar. \"Es tarea del jefe\" tienta, pero el clima lo hace todo el equipo." },
    { q: "En una discusión de ideas, ¿qué conviene criticar?", opciones: ["A la persona que tuvo la idea","Nada nunca","Las ideas, no a las personas","Lo que te caiga mal"], correcta: 2, explicacion: "Criticar ideas es sano. No criticar nada tienta para evitar conflictos, pero se pierden mejores soluciones." },
    { q: "Sos muy organizador. ¿Cuál es tu riesgo en un equipo?", opciones: ["Querer controlar todo","No terminar las cosas","No tener ideas","Trabarte en lo chico"], correcta: 0, explicacion: "El organizador puede pasar a controlar. No terminar tienta, pero es el riesgo de otro tipo de aporte." },
    { q: "Tu equipo tiene solo personas creativas. ¿Qué puede faltar?", opciones: ["Más ideas","Nada, está completo","Más reuniones","Alguien que baje las ideas a tierra y termine las cosas"], correcta: 3, explicacion: "Un equipo necesita aportes distintos. Más ideas tienta, pero el problema es llevarlas a cabo." },
    { q: "En una entrevista te preguntan cómo sos en un equipo. ¿Qué respuesta muestra que te conocés?", opciones: ["\"Soy perfecto en equipo\"","\"Suelo organizar las tareas; estoy aprendiendo a delegar más\"","\"Me llevo bien con todos\"","\"Prefiero trabajar solo\""], correcta: 1, explicacion: "Fortaleza y algo a mejorar es honesto y concreto. \"Me llevo bien con todos\" tienta, pero no dice nada de tu aporte." },
  ],
},
{
  id: "comunicar",
  icono: "💬",
  titulo: "Comunicarse bien en el equipo",
  nivel: "Básico",
  objetivos: [
    "Escuchar sin interrumpir y confirmar lo que entendiste",
    "Dejar los acuerdos por escrito: qué, quién y para cuándo",
    "Elegir el canal justo y avisar a tiempo cuando algo cambia",
  ],
  lecciones: [
    { titulo: "Escuchar de verdad", html: `
      <p class="idea">Muchos problemas de equipo empiezan con alguien que entendió otra cosa. <strong>Escuchar de verdad</strong> es dejar terminar, preguntar lo que no quedó claro y repetir con tus palabras lo que entendiste.</p>
      <table>
        <tr><th>Paso</th><th>Ejemplo</th></tr>
        <tr><td>Dejar terminar</td><td>No cortar aunque ya creas saber qué va a decir</td></tr>
        <tr><td>Preguntar</td><td>"¿Para cuándo lo necesitás?"</td></tr>
        <tr><td>Repetir con tus palabras</td><td>"O sea que lo querés el jueves y en PDF, ¿es así?"</td></tr>
      </table>
      <p><strong>Repetir con tus palabras</strong> parece una pérdida de tiempo, pero ahorra muchísimo: si entendiste mal, te corrigen antes de que hagas el trabajo equivocado.</p>
      <p><strong>Escuchar también es mirar:</strong> dejá el celular, mirá a la persona. En una videollamada, apagá las otras pestañas.</p>
      <p><strong>Si no estás de acuerdo,</strong> primero mostrá que entendiste ("Entiendo que querés hacerlo así porque…") y después decí tu punto. La otra persona escucha mejor cuando se siente escuchada.</p>
      <p>Por ejemplo, "Pasame lo de Gómez" puede ser el presupuesto, la factura o el teléfono. "¿El presupuesto de Gómez, el de la pintura?" evita una vuelta.</p>` },
    { titulo: "Acuerdos por escrito", html: `
      <p class="idea">Lo que se habla se olvida o se recuerda distinto. Un <strong>acuerdo</strong> claro dice qué se hace, quién lo hace y para cuándo, y queda por escrito.</p>
      <table>
        <tr><th>Acuerdo vago</th><th>Acuerdo claro</th></tr>
        <tr><td>"Después vemos lo del stand"</td><td>"Lucía arma el stand el viernes a las 10; Marcos lleva la mesa"</td></tr>
        <tr><td>"Alguien llame al proveedor"</td><td>"Pedro llama al proveedor hoy antes de las 15"</td></tr>
        <tr><td>"Lo terminamos pronto"</td><td>"Lo entregamos el martes 20"</td></tr>
      </table>
      <p><strong>"Alguien" es nadie:</strong> si una tarea no tiene nombre, nadie la hace.</p>
      <p><strong>Cómo dejarlo por escrito:</strong> un mensaje en el grupo del equipo al terminar la charla, un mail corto o el acta de la reunión.</p>
      <pre><code>Resumen de lo que acordamos hoy:
- Lucía: arma el stand, viernes 10 h
- Marcos: lleva la mesa y las sillas, viernes 9:30
- Pedro: llama al proveedor, hoy antes de las 15
Si algo cambia, avisen acá.</code></pre>
      <p>Por ejemplo, si a la semana alguien dice "Yo pensé que lo hacías vos", el mensaje con el resumen resuelve la duda sin discusión.</p>` },
    { titulo: "Canal justo y avisar a tiempo", html: `
      <p class="idea">No todo va por el mismo canal, y lo más importante de comunicar en un equipo son los cambios: si algo se atrasa o se complica, avisá apenas lo sabés.</p>
      <table>
        <tr><th>Situación</th><th>Canal</th></tr>
        <tr><td>Un dato rápido para todos</td><td>Mensaje en el grupo del equipo</td></tr>
        <tr><td>Algo para una sola persona</td><td>Mensaje privado</td></tr>
        <tr><td>Algo que tiene que quedar registrado</td><td>Mail</td></tr>
        <tr><td>Un tema delicado o un malentendido</td><td>Hablarlo en persona o por llamada</td></tr>
        <tr><td>Decisiones con varias personas</td><td>Reunión corta, con resumen después</td></tr>
      </table>
      <p><strong>Avisar a tiempo:</strong></p>
      <pre><code>Lunes:    te das cuenta de que el jueves no llegás
Mal:      lo decís el jueves a la tarde
Bien:     lo decís el lunes: "No llego al jueves, lo tengo el viernes
           a las 12. ¿Les complica?"</code></pre>
      <p>Avisar el lunes deja que el equipo se reorganice. Avisar el jueves deja a todos sin opciones.</p>
      <p>Por ejemplo, un "Llego 20 minutos tarde, arranquen sin mí" mandado antes de salir le ahorra al equipo media hora de espera.</p>` },
  ],
  practica: [
    "En 3 conversaciones de esta semana, repetí con tus palabras lo que te pidieron. Anotá cuántas veces te corrigieron algo.",
    "Después de una charla o reunión de equipo, mandá un resumen de acuerdos con qué, quién y para cuándo. Anotá cuántos acuerdos quedaron.",
    "Anotá 5 mensajes de equipo que mandaste esta semana y si el canal fue el justo según la tabla. Anotá cuáles cambiarías.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: mediación y resolución de conflictos", url: "https://www.argentina.gob.ar/justicia/mediacion" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Tu compañera te pide \"Pasame lo de Gómez\". ¿Qué hacés?", opciones: ["Le mandás lo primero que encontrás","Le mandás todo lo de Gómez","Preguntás qué exactamente: \"¿El presupuesto de Gómez, el de la pintura?\"","No hacés nada hasta que insista"], correcta: 2, explicacion: "Preguntar evita mandar lo que no era. Mandar todo tienta para cubrirte, pero la obligás a buscar." },
    { q: "¿Por qué conviene repetir con tus palabras lo que te pidieron?", opciones: ["Porque si entendiste mal, te corrigen antes de hacer el trabajo equivocado","Para ganar tiempo","Para que el otro se sienta controlado","No conviene, queda raro"], correcta: 0, explicacion: "Repetir detecta malentendidos a tiempo. Que queda raro tienta, pero es mucho peor hacer el trabajo dos veces." },
    { q: "No estás de acuerdo con la propuesta de un compañero. ¿Qué hacés primero?", opciones: ["Le decís que está equivocado","Te quedás callado","Hablás más fuerte","Mostrás que entendiste su idea y después decís tu punto"], correcta: 3, explicacion: "La otra persona escucha mejor cuando se siente escuchada. Decirle que está equivocado tienta por directo, pero lo pone a la defensiva." },
    { q: "En una videollamada de equipo tenés otras pestañas abiertas. ¿Qué hacés?", opciones: ["Seguís con las dos cosas","Las cerrás para escuchar de verdad","Apagás la cámara y hacés otra cosa","Nada, no se nota"], correcta: 1, explicacion: "Escuchar también es prestar atención. Que no se nota tienta, pero te perdés detalles y se nota en las respuestas." },
    { q: "En la reunión se dijo \"Alguien llame al proveedor\". ¿Qué va a pasar?", opciones: ["Lo va a hacer el más responsable","Lo va a hacer el jefe","Probablemente nadie lo haga: \"alguien\" es nadie","Se va a hacer solo"], correcta: 2, explicacion: "Sin nombre, nadie se hace cargo. Que lo hará el más responsable tienta, pero cada uno piensa que lo hace otro." },
    { q: "Tu equipo acordó \"Después vemos lo del stand\". ¿Cómo lo mejorás?", opciones: ["\"Lucía arma el stand el viernes a las 10; Marcos lleva la mesa\"","\"Lo vemos la semana que viene\"","\"Stand: pendiente\"","Lo dejás así"], correcta: 0, explicacion: "Un acuerdo claro dice qué, quién y cuándo. \"Lo vemos la semana que viene\" tienta como fecha, pero sigue sin responsable." },
    { q: "Terminó la charla con tu equipo. ¿Cómo dejás los acuerdos por escrito?", opciones: ["No hace falta, todos se acuerdan","Un audio largo","Lo anotás solo en tu cuaderno","Un mensaje o mail corto con qué, quién y para cuándo"], correcta: 3, explicacion: "Por escrito y compartido, todos ven lo mismo. Tu cuaderno tienta, pero los demás no lo ven." },
    { q: "Tenés que pasarle un dato solo a una persona del equipo. ¿Por dónde va?", opciones: ["Por el grupo del equipo","Por mensaje privado","Por mail a todos","En la próxima reunión"], correcta: 1, explicacion: "Lo que es para uno va por privado. El grupo tienta por rápido, pero llena el chat de todos." },
    { q: "Hubo un malentendido delicado con un compañero. ¿Qué canal conviene?", opciones: ["Un mensaje largo en el grupo","Un mail con copia al jefe","Hablarlo en persona o por llamada","No decir nada"], correcta: 2, explicacion: "El tono se entiende mejor hablando. El mail con copia tienta para que quede registro, pero escala el problema." },
    { q: "El lunes te das cuenta de que el jueves no llegás. ¿Cuándo avisás?", opciones: ["El lunes, con una nueva fecha","El jueves, por si llegás","Nunca, lo entregás tarde","El miércoles a la noche"], correcta: 0, explicacion: "Avisar temprano deja reorganizarse. Esperar al jueves tienta por si llegás, pero deja a todos sin opciones." },
    { q: "Vas a llegar 20 minutos tarde a una reunión. ¿Qué hacés?", opciones: ["Llegás y pedís disculpas","No vas","Avisás cuando llegás","Avisás antes de salir: \"Llego 20 minutos tarde, arranquen sin mí\""], correcta: 3, explicacion: "Avisar antes evita que esperen. Pedir disculpas al llegar tienta, pero ya les hiciste perder tiempo." },
    { q: "Si una decisión involucra a varias personas del equipo, ¿qué canal conviene?", opciones: ["Un mensaje privado a cada uno","Una reunión corta y un resumen escrito después","Que decida uno solo sin avisar","Un audio en el grupo"], correcta: 1, explicacion: "Juntos se decide y por escrito queda. Mensajes privados tientan por rápidos, pero cada uno entiende algo distinto." },
  ],
},
{
  id: "emociones",
  icono: "🧘",
  titulo: "Manejar las emociones en el trabajo",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer tus emociones y las señales del cuerpo antes de reaccionar",
    "Hacer una pausa antes de responder en caliente",
    "Hablar en primera persona con mensajes \"yo\" en vez de acusar",
  ],
  lecciones: [
    { titulo: "Reconocer lo que sentís", video: {"id":"6VXYxYedmFk","t":"Inteligencia emocional · Dr. Daniel López Rosetti (2:18)"}, html: `
      <p class="idea">La <strong>inteligencia emocional</strong> es la capacidad de reconocer lo que sentís (y lo que sienten los demás) y manejarlo sin que te maneje. No es no sentir: es darte cuenta a tiempo.</p>
      <table>
        <tr><th>Emoción</th><th>Señales en el cuerpo</th><th>Qué puede estar diciendo</th></tr>
        <tr><td>Enojo</td><td>Calor en la cara, mandíbula apretada, ganas de levantar la voz</td><td>Algo me parece injusto</td></tr>
        <tr><td>Ansiedad</td><td>Corazón rápido, nudo en el estómago</td><td>Algo me preocupa o no sé qué va a pasar</td></tr>
        <tr><td>Frustración</td><td>Cansancio, ganas de largar todo</td><td>Algo no sale como esperaba</td></tr>
        <tr><td>Tristeza</td><td>Desgano, ganas de no hablar</td><td>Perdí algo o me siento poco valorado</td></tr>
      </table>
      <p><strong>Ponerle nombre ayuda:</strong> decirte "estoy enojado porque me cambiaron el turno sin avisar" baja la intensidad y te deja pensar qué hacer.</p>
      <p><strong>Las emociones de los demás:</strong> si un compañero contesta mal, puede estar con un problema que no conocés. No justifica el maltrato, pero ayuda a no tomarlo personal.</p>
      <p>Por ejemplo, notar la mandíbula apretada antes de contestar un mensaje te da la señal de esperar un rato.</p>` },
    { titulo: "La pausa antes de responder", html: `
      <p class="idea">Lo que decís enojado en 5 segundos puede costar semanas de arreglo. Una <strong>pausa</strong> entre lo que sentís y lo que hacés es la herramienta más simple y más útil.</p>
      <table>
        <tr><th>Situación</th><th>Pausa</th></tr>
        <tr><td>Te llega un mensaje que te enoja</td><td>Escribí la respuesta, no la mandes; releela en una hora</td></tr>
        <tr><td>Alguien te dice algo en una reunión</td><td>Respirá lento 3 veces antes de contestar</td></tr>
        <tr><td>Estás muy enojado en una charla</td><td>"Necesito unos minutos, ¿lo seguimos después?"</td></tr>
      </table>
      <p><strong>Respirar lento</strong> (inhalar contando hasta 4, exhalar contando hasta 6) baja la activación del cuerpo y te deja pensar con más claridad.</p>
      <p><strong>Pedir un corte no es escapar,</strong> si después volvés: "Ahora estoy muy enojado para hablar bien. ¿Lo charlamos a las 4?".</p>
      <pre><code>Algo pasa → Siento (enojo) → PAUSA → Elijo qué hacer
                              ↑
                    acá está tu margen</code></pre>
      <p>Por ejemplo, el mail enojado que no mandaste es el que nunca vas a tener que explicar.</p>` },
    { titulo: "Mensajes \"yo\"", html: `
      <p class="idea">Un <strong>mensaje "yo"</strong> habla de lo que pasó y de cómo te afecta, en vez de acusar al otro. Dice lo mismo, pero el otro escucha en vez de defenderse.</p>
      <table>
        <tr><th>Mensaje "vos" (acusa)</th><th>Mensaje "yo" (explica)</th></tr>
        <tr><td>"Vos nunca avisás nada."</td><td>"Cuando me entero el mismo día de un cambio, me cuesta reorganizarme. ¿Me podés avisar el día anterior?"</td></tr>
        <tr><td>"Siempre llegás tarde."</td><td>"Cuando la reunión empieza 20 minutos tarde, se me complica el resto del día."</td></tr>
        <tr><td>"Sos un desordenado."</td><td>"Cuando las herramientas no vuelven a su lugar, pierdo tiempo buscándolas."</td></tr>
      </table>
      <p><strong>La fórmula:</strong></p>
      <pre><code>Cuando [lo que pasó, sin juzgar]
me pasa [cómo me afecta]
¿Podemos [lo que pedís]?</code></pre>
      <p><strong>Evitá "siempre" y "nunca":</strong> casi nunca son ciertos, y el otro va a discutir la palabra en vez del problema ("¡No es cierto que nunca aviso, el martes avisé!").</p>
      <p>Por ejemplo, "Sos un desordenado" ataca a la persona; "Cuando las herramientas no vuelven a su lugar, pierdo tiempo" habla de un hecho que se puede cambiar.</p>` },
  ],
  practica: [
    "Durante una semana, anotá 3 momentos en que sentiste una emoción fuerte en el trabajo o el estudio: qué pasó, qué sentiste y qué señal te dio el cuerpo.",
    "La próxima vez que algo te enoje, hacé la pausa (escribir sin mandar o respirar 3 veces). Anotá qué habrías dicho sin pausa y qué dijiste.",
    "Reescribí 4 quejas que tengas como mensajes \"yo\" con la fórmula. Anotá las dos versiones.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
    { t: "Argentina.gob.ar: mediación y resolución de conflictos", url: "https://www.argentina.gob.ar/justicia/mediacion" },
  ],
  quiz: [
    { q: "¿Qué es la inteligencia emocional?", opciones: ["No sentir nada","Ser muy inteligente","Reconocer lo que sentís y lo que sienten otros, y manejarlo sin que te maneje","Decir siempre lo que pensás"], correcta: 2, explicacion: "No es no sentir, es darte cuenta a tiempo. No sentir nada tienta como ideal de calma, pero es imposible." },
    { q: "Si sentís calor en la cara y la mandíbula apretada, ¿qué emoción puede ser?", opciones: ["Enojo","Tristeza","Alegría","Aburrimiento"], correcta: 0, explicacion: "Son señales típicas del enojo. La tristeza tienta, pero se siente más como desgano." },
    { q: "¿Para qué sirve ponerle nombre a lo que sentís?", opciones: ["Para tener una excusa","Para contárselo a todos","No sirve para nada","Para bajar la intensidad y pensar qué hacer"], correcta: 3, explicacion: "Nombrarlo te da distancia. La excusa tienta como uso, pero la idea es elegir mejor qué hacer." },
    { q: "Si un compañero te contesta mal, ¿qué te ayuda a no tomarlo personal?", opciones: ["Contestarle peor","Pensar que puede estar con un problema que no conocés","Ignorarlo para siempre","Contárselo al jefe enseguida"], correcta: 1, explicacion: "No justifica el maltrato, pero baja tu reacción. Contestarle peor tienta, pero empieza una pelea." },
    { q: "Te llega un mensaje que te enoja mucho. ¿Qué hacés?", opciones: ["Respondés ya, mientras está fresco","Respondés en mayúsculas","Escribís la respuesta, no la mandás y la relees en una hora","Reenviás el mensaje al grupo"], correcta: 2, explicacion: "La pausa evita decir lo que después cuesta arreglar. Responder ya tienta para descargarte, pero lo escrito queda." },
    { q: "Si estás muy enojado en medio de una charla, ¿qué podés decir?", opciones: ["\"Necesito unos minutos, ¿lo seguimos a las 4?\"","Te vas sin decir nada","Decís todo lo que pensás","\"Hacé lo que quieras\""], correcta: 0, explicacion: "Pedir un corte y volver es manejar la emoción. Irte sin decir nada tienta, pero el otro no sabe qué pasa." },
    { q: "¿Cómo es la respiración que ayuda a calmarte?", opciones: ["Rápida y corta","Contener la respiración un minuto","No tiene efecto","Lenta: inhalar contando hasta 4 y exhalar contando hasta 6"], correcta: 3, explicacion: "Exhalar más largo calma el cuerpo. Contener la respiración tienta, pero aumenta la tensión." },
    { q: "Si pedís un corte en una discusión, ¿cuándo no es escapar?", opciones: ["Nunca, siempre es escapar","Cuando después volvés a hablar del tema","Cuando no volvés más","Cuando te vas a tu casa"], correcta: 1, explicacion: "El corte con regreso es manejar la emoción. No volver tienta para evitar el mal rato, pero el problema sigue." },
    { q: "Querés decirle a un compañero que siempre llega tarde. ¿Qué mensaje usás?", opciones: ["\"Siempre llegás tarde.\"","\"Sos un irresponsable.\"","\"Cuando la reunión empieza 20 minutos tarde, se me complica el resto del día.\"","No decís nada y te enojás"], correcta: 2, explicacion: "El mensaje \"yo\" habla del hecho y su efecto. \"Siempre llegás tarde\" tienta por directo, pero el otro va a discutir el \"siempre\"." },
    { q: "¿Qué tiene la fórmula del mensaje \"yo\"?", opciones: ["Lo que pasó sin juzgar, cómo te afecta y lo que pedís","Lo que el otro hizo mal y su castigo","Solo cómo te sentís","Una lista de quejas"], correcta: 0, explicacion: "Hecho, efecto y pedido. Solo cómo te sentís tienta, pero sin pedido el otro no sabe qué hacer." },
    { q: "¿Por qué conviene evitar \"siempre\" y \"nunca\"?", opciones: ["Porque son malas palabras","Porque son muy largas","No conviene evitarlas","Porque casi nunca son ciertos y el otro discute la palabra en vez del problema"], correcta: 3, explicacion: "El otro va a buscar la excepción. Que son exageraciones inofensivas tienta, pero desvían la charla." },
    { q: "Si le dijiste a un compañero \"Sos un desordenado\", ¿cómo lo reformulás?", opciones: ["\"Sos un poco desordenado.\"","\"Cuando las herramientas no vuelven a su lugar, pierdo tiempo buscándolas.\"","\"Todos dicen que sos desordenado.\"","\"No te enojes, pero sos desordenado.\""], correcta: 1, explicacion: "Hablar del hecho permite cambiarlo. \"Un poco desordenado\" tienta por más suave, pero sigue atacando a la persona." },
  ],
},
{
  id: "devolucion",
  icono: "🔁",
  titulo: "Dar y recibir devoluciones",
  nivel: "Intermedio",
  objetivos: [
    "Dar una devolución concreta con el modelo situación, comportamiento e impacto",
    "Recibir una devolución sin defenderte y decidir qué hacer con ella",
    "Reconocer lo que salió bien, no solo lo que salió mal",
  ],
  lecciones: [
    { titulo: "Dar una devolución", html: `
      <p class="idea">Una <strong>devolución</strong> (o feedback) es decirle a alguien cómo afectó lo que hizo, para que pueda mejorar o seguir haciéndolo. Funciona cuando es concreta, a tiempo y en privado.</p>
      <p><strong>El modelo SCI:</strong> Situación, Comportamiento, Impacto.</p>
      <table>
        <tr><th>Parte</th><th>Qué decís</th><th>Ejemplo</th></tr>
        <tr><td>Situación</td><td>Cuándo y dónde</td><td>"Ayer, en la reunión con el cliente…"</td></tr>
        <tr><td>Comportamiento</td><td>Lo que hizo, observable, sin juzgar</td><td>"…interrumpiste al cliente tres veces…"</td></tr>
        <tr><td>Impacto</td><td>Qué efecto tuvo</td><td>"…y se fue sin contarnos qué necesitaba."</td></tr>
      </table>
      <p>Después, preguntá o proponé: "¿Cómo lo ves vos?" o "La próxima, ¿probamos dejarlo terminar?".</p>
      <p><strong>Comportamiento, no personalidad:</strong> "interrumpiste tres veces" se puede cambiar; "sos maleducado" no.</p>
      <p><strong>A tiempo y en privado:</strong> mejor el mismo día o el siguiente, y nunca delante de otros.</p>
      <p>Por ejemplo, "Tenés que mejorar la actitud" no le dice a nadie qué cambiar. "Hoy, cuando llegó el cliente, seguiste con el celular y esperó dos minutos" sí.</p>` },
    { titulo: "Recibir una devolución", html: `
      <p class="idea">Recibir una devolución cuesta, sobre todo si no te la esperabas. La reacción natural es defenderte. La más útil es escuchar, preguntar y decidir después.</p>
      <table>
        <tr><th>Reacción que cierra</th><th>Reacción que suma</th></tr>
        <tr><td>"No es así, vos también…"</td><td>"Gracias por decírmelo."</td></tr>
        <tr><td>"Es que me pasó tal cosa…" (excusa)</td><td>"¿Me das un ejemplo para entender mejor?"</td></tr>
        <tr><td>Enojarte y no hablarle más</td><td>"Lo voy a pensar y te digo."</td></tr>
      </table>
      <p><strong>No tenés que estar de acuerdo con todo:</strong> escuchar no es aceptar. Después, con calma, decidís qué parte te sirve.</p>
      <p><strong>Pedí devoluciones:</strong> "¿Qué podría haber hecho mejor en la entrega de hoy?" muestra que querés aprender, y te enterás antes de los problemas.</p>
      <pre><code>Recibo → Agradezco → Pregunto un ejemplo → Pienso → Decido qué cambio</code></pre>
      <p>Por ejemplo, si tu encargada te dice que tus pedidos llegan incompletos, preguntar "¿Me mostrás uno?" te da información para arreglarlo, en vez de una discusión.</p>` },
    { titulo: "Reconocer lo que sale bien", html: `
      <p class="idea">Las devoluciones no son solo para lo que sale mal. Reconocer lo que alguien hizo bien, en concreto, hace que lo repita y mejora el clima del equipo.</p>
      <table>
        <tr><th>Reconocimiento vago</th><th>Reconocimiento concreto</th></tr>
        <tr><td>"Bien ahí."</td><td>"Gracias por quedarte a ordenar el depósito; hoy encontramos todo en 5 minutos."</td></tr>
        <tr><td>"Buen trabajo."</td><td>"La planilla que armaste nos ahorró una hora de cuentas."</td></tr>
      </table>
      <p>Usá el mismo modelo SCI: situación, comportamiento e impacto positivo.</p>
      <p><strong>Reconocé en público, corregí en privado:</strong> un "gracias" delante del equipo motiva; una corrección delante de todos humilla.</p>
      <p><strong>Lo que reconocés, se repite:</strong> si solo hablás de errores, la gente aprende a esconderlos. Si también reconocés lo bueno, aprende qué valorás.</p>
      <p>Por ejemplo, un compañero que avisó a tiempo un error merece un "gracias por avisar": así la próxima vez también avisa.</p>` },
  ],
  practica: [
    "Escribí una devolución con el modelo SCI para una situación real (de trabajo, estudio o casa). Anotá la situación, el comportamiento y el impacto.",
    "Pedile una devolución a alguien sobre algo que hiciste y practicá recibirla con los pasos de la lección. Anotá qué te dijo y qué vas a cambiar.",
    "Durante una semana, hacé 3 reconocimientos concretos a personas de tu entorno. Anotá a quién, qué le dijiste y cómo reaccionó.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Argentina.gob.ar: mediación y resolución de conflictos", url: "https://www.argentina.gob.ar/justicia/mediacion" },
  ],
  quiz: [
    { q: "¿Qué es una devolución?", opciones: ["Devolver un producto","Un reto","Decirle a alguien cómo afectó lo que hizo, para que mejore o lo siga haciendo","Una evaluación de sueldo"], correcta: 2, explicacion: "Es información para mejorar. Un reto tienta como sinónimo, pero la devolución busca cambiar algo, no castigar." },
    { q: "¿Qué significa SCI en el modelo de devolución?", opciones: ["Situación, Comportamiento, Impacto","Siempre, Claro, Inmediato","Sueldo, Cargo, Ingreso","Solución, Culpa, Idea"], correcta: 0, explicacion: "Situación, comportamiento e impacto. \"Siempre, claro, inmediato\" tienta porque suena a consejo, pero no es el modelo." },
    { q: "Querés decirle a tu compañero que mejore. ¿Qué devolución es concreta?", opciones: ["\"Tenés que mejorar la actitud.\"","\"Sos un desinteresado.\"","\"Ponete las pilas.\"","\"Hoy, cuando llegó el cliente, seguiste con el celular y esperó dos minutos.\""], correcta: 3, explicacion: "Lo concreto se puede cambiar. \"Mejorar la actitud\" tienta por corto, pero no dice qué hacer distinto." },
    { q: "Tu devolución dice \"Sos maleducado\". ¿Qué cambiás?", opciones: ["Lo decís más suave","Hablás del comportamiento: \"Interrumpiste al cliente tres veces\"","Lo decís delante de todos","No cambiás nada"], correcta: 1, explicacion: "El comportamiento se puede cambiar; la personalidad, no. Decirlo más suave tienta, pero sigue atacando a la persona." },
    { q: "¿Dónde y cuándo conviene dar una devolución sobre algo que salió mal?", opciones: ["Delante del equipo, para que todos aprendan","Un mes después","En privado y a tiempo, el mismo día o el siguiente","En la evaluación anual"], correcta: 2, explicacion: "En privado y pronto, se escucha. Delante de todos tienta para que aprendan, pero humilla." },
    { q: "Si te dan una devolución que no esperabas, ¿cuál es la reacción que suma?", opciones: ["\"Gracias por decírmelo. ¿Me das un ejemplo?\"","\"No es así, vos también…\"","\"Es que me pasó tal cosa…\"","Enojarte y no hablarle más"], correcta: 0, explicacion: "Agradecer y preguntar te da información. Explicar tu excusa tienta para que te entiendan, pero corta la charla." },
    { q: "Si recibiste una devolución con la que no estás de acuerdo, ¿tenés que aceptarla?", opciones: ["Sí, siempre","No, y se lo decís enseguida","Sí, si viene del jefe","No: escuchar no es aceptar; después decidís qué parte te sirve"], correcta: 3, explicacion: "Escuchás y después decidís. Rechazarla enseguida tienta, pero quizás tenía algo útil." },
    { q: "¿Por qué conviene pedir devoluciones?", opciones: ["Para que te feliciten","Porque te enterás antes de los problemas y mostrás que querés aprender","Para mostrar que sos mejor","No conviene"], correcta: 1, explicacion: "Pedirlas da información a tiempo. Que te feliciten tienta como motivo, pero el valor está en lo que podés mejorar." },
    { q: "Tu encargada dice que tus pedidos llegan incompletos. ¿Qué preguntás?", opciones: ["\"¿Quién te dijo eso?\"","\"¿Y los de los demás?\"","\"¿Me mostrás uno?\"","No preguntás nada"], correcta: 2, explicacion: "Un ejemplo te deja arreglarlo. \"¿Y los de los demás?\" tienta para compartir la culpa, pero no resuelve lo tuyo." },
    { q: "Querés agradecer a un compañero que ordenó el depósito. ¿Qué decís?", opciones: ["\"Gracias por ordenar el depósito; hoy encontramos todo en 5 minutos.\"","\"Bien ahí.\"","\"Buen trabajo.\"","Nada, era su trabajo"], correcta: 0, explicacion: "El reconocimiento concreto dice qué valorás. \"Bien ahí\" tienta por rápido, pero no dice qué estuvo bien." },
    { q: "¿Dónde conviene reconocer lo que alguien hizo bien?", opciones: ["Solo en privado","Nunca, se agranda","Solo en la evaluación anual","En público, delante del equipo"], correcta: 3, explicacion: "Reconocer en público motiva. \"Se agranda\" tienta como miedo, pero lo que se reconoce se repite." },
    { q: "En tu equipo solo se habla de los errores. ¿Qué aprende la gente?", opciones: ["A no equivocarse","A esconder los errores","A trabajar más","Nada"], correcta: 1, explicacion: "Si solo hay críticas, se esconden los errores. \"A no equivocarse\" tienta como resultado, pero nadie deja de equivocarse." },
  ],
},
{
  id: "conflictos",
  icono: "🤝",
  titulo: "Resolver conflictos",
  nivel: "Intermedio",
  objetivos: [
    "Distinguir conflictos de tarea, de proceso y de relación",
    "Resolver un conflicto con 5 pasos: separar, intereses, opciones, acuerdo y seguimiento",
    "Saber cuándo pedir ayuda a un tercero o a una mediación",
  ],
  lecciones: [
    { titulo: "Tipos de conflicto", video: {"id":"VkFJ0szyGQo","t":"Cómo resolver un conflicto laboral · LearnFree en Español (2:21)"}, html: `
      <p class="idea">Un <strong>conflicto</strong> es un desacuerdo que molesta y no se resuelve solo. En un equipo es normal que aparezcan; lo que importa es cómo se manejan. Conocer el tipo ayuda a elegir cómo resolverlo.</p>
      <table>
        <tr><th>Tipo</th><th>De qué se trata</th><th>Ejemplo</th></tr>
        <tr><td>De tarea</td><td>Qué hay que hacer</td><td>"Yo creo que hay que pintar primero; vos, arreglar la pared"</td></tr>
        <tr><td>De proceso</td><td>Cómo y quién lo hace</td><td>"Siempre me tocan los turnos de sábado"</td></tr>
        <tr><td>De relación</td><td>Entre las personas</td><td>"Me habla mal delante de los clientes"</td></tr>
      </table>
      <p><strong>Los de tarea pueden ser buenos:</strong> discutir ideas, con respeto, muchas veces lleva a una solución mejor.</p>
      <p><strong>Los de relación desgastan:</strong> si no se hablan, contaminan todo lo demás.</p>
      <p><strong>Evitar no es resolver:</strong> hacer como que no pasa nada suele hacer que el conflicto crezca hasta explotar.</p>
      <p>Por ejemplo, una pelea por el turno del sábado (proceso) puede terminar en "no me hablo con él" (relación) si nadie la resuelve a tiempo.</p>` },
    { titulo: "Cinco pasos para resolver", video: {"id":"ZgmSfdE2y-s","t":"¿Qué es la comunicación asertiva? · Prepa en Línea-SEP (1:53)"}, html: `
      <p class="idea">Para resolver un conflicto, separá a la persona del problema y buscá lo que cada uno necesita de verdad, no lo que pide. Estos 5 pasos sirven para la mayoría de los casos.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacer</th></tr>
        <tr><td>1. Separar</td><td>El problema es el turno del sábado, no "Juan es un egoísta"</td></tr>
        <tr><td>2. Intereses</td><td>Preguntar por qué quiere lo que quiere</td></tr>
        <tr><td>3. Opciones</td><td>Pensar juntos varias soluciones antes de elegir</td></tr>
        <tr><td>4. Acuerdo</td><td>Elegir una y dejarla clara: qué, quién y desde cuándo</td></tr>
        <tr><td>5. Seguimiento</td><td>Ver en unas semanas si funciona</td></tr>
      </table>
      <p><strong>Posición e interés:</strong> la <strong>posición</strong> es lo que alguien pide; el <strong>interés</strong> es el motivo de fondo.</p>
      <pre><code>Ana: "No quiero trabajar los sábados."  (posición)
Por qué: tiene que cuidar a su mamá los sábados a la tarde.  (interés)
Juan: "Yo tampoco."  (posición)
Por qué: juega al fútbol los sábados a la mañana.  (interés)
Opción: Ana hace sábados a la mañana, Juan a la tarde.</code></pre>
      <p>Por ejemplo, cuando las posiciones chocan ("no quiero" contra "yo tampoco"), muchas veces los intereses se pueden combinar.</p>` },
    { titulo: "Cuándo pedir ayuda", html: `
      <p class="idea">No todos los conflictos se resuelven entre dos. Si ya lo intentaron y no funciona, o si hay una diferencia de poder grande, conviene sumar a un tercero.</p>
      <table>
        <tr><th>Situación</th><th>Con quién</th></tr>
        <tr><td>Lo hablaron y no llegan a un acuerdo</td><td>El encargado o jefe, para que ayude a decidir</td></tr>
        <tr><td>El conflicto es con tu jefe</td><td>Recursos humanos, si hay, o el delegado gremial</td></tr>
        <tr><td>Conflictos vecinales, familiares o comunitarios</td><td>Mediación comunitaria (en muchos municipios es gratis)</td></tr>
        <tr><td>Hay insultos, amenazas o acoso</td><td>No es un conflicto común: ver el módulo siguiente</td></tr>
      </table>
      <p>La <strong>mediación</strong> es una charla guiada por una persona neutral (el mediador) que ayuda a las partes a encontrar un acuerdo. El mediador no decide: ayuda a que decidan ellas.</p>
      <p><strong>Antes de escalar,</strong> intentá hablarlo directamente, salvo que haya maltrato o riesgo. Ir al jefe sin haber hablado antes suele empeorar la relación.</p>
      <p>Por ejemplo, "Juan, quiero hablar con vos de los turnos antes de llevarlo al encargado. ¿Tenés 10 minutos hoy?" abre la puerta a resolverlo entre los dos.</p>` },
  ],
  practica: [
    "Pensá en 3 conflictos que viviste (trabajo, estudio, familia) y clasificalos en tarea, proceso o relación. Anotá cómo terminó cada uno.",
    "Tomá uno de esos conflictos y escribí la posición y el interés de cada parte, y 3 opciones de solución. Anotá cuál elegirías.",
    "Escribí cómo le propondrías a la otra persona hablar del conflicto antes de escalarlo. Practicalo en voz alta y anotá cuánto duró.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: mediación y resolución de conflictos", url: "https://www.argentina.gob.ar/justicia/mediacion" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Vos creés que hay que pintar primero y tu compañero, arreglar la pared. ¿Qué tipo de conflicto es?", opciones: ["De relación","De proceso","De tarea: sobre qué hay que hacer","No es un conflicto"], correcta: 2, explicacion: "Es sobre qué hacer. De relación tienta porque hay dos personas, pero no es entre ellas sino sobre la tarea." },
    { q: "Tu compañera se queja de que siempre le tocan los sábados. ¿Qué tipo de conflicto es?", opciones: ["De proceso: sobre cómo y quién hace las cosas","De tarea","De relación","Personal, no de trabajo"], correcta: 0, explicacion: "Es sobre cómo se reparten las tareas. De relación tienta porque genera bronca, pero el tema es la organización." },
    { q: "¿Los conflictos de tarea son siempre malos?", opciones: ["Sí, siempre","Sí, si hay más de dos personas","No existen","No: discutir ideas con respeto puede llevar a una solución mejor"], correcta: 3, explicacion: "Las ideas distintas mejoran las soluciones. Que son siempre malos tienta para evitar discusiones, pero se pierden buenas ideas." },
    { q: "En tu equipo hay un conflicto y todos hacen como que no pasa nada. ¿Qué suele pasar?", opciones: ["Que se resuelve solo","Que el conflicto crece hasta explotar","Que se olvida","Que el equipo se une más"], correcta: 1, explicacion: "Evitar no es resolver. Que se resuelve solo tienta porque a veces pasa, pero casi siempre crece." },
    { q: "¿Qué es separar a la persona del problema?", opciones: ["No hablar con la persona","Echar a la persona","Hablar del turno del sábado, no de que \"Juan es un egoísta\"","Hablar del problema con otros"], correcta: 2, explicacion: "El problema se puede resolver; un ataque a la persona, no. No hablarle tienta para evitar el mal rato, pero no resuelve nada." },
    { q: "Si Ana dice \"No quiero trabajar los sábados\", ¿qué es eso?", opciones: ["Su posición: lo que pide","Su interés","Un acuerdo","Una opción"], correcta: 0, explicacion: "La posición es lo que pide; el interés es el porqué. Interés tienta, pero falta saber por qué no quiere." },
    { q: "Querés resolver el conflicto de los sábados. ¿Qué preguntás?", opciones: ["Quién tiene más antigüedad","Quién tiene razón","Nada, decide el jefe","Por qué cada uno quiere lo que quiere"], correcta: 3, explicacion: "Los intereses abren opciones. Quién tiene razón tienta, pero deja a uno perdiendo." },
    { q: "Ana cuida a su mamá los sábados a la tarde y Juan juega al fútbol a la mañana. ¿Qué opción combina los intereses?", opciones: ["Que trabaje siempre Ana","Ana hace sábados a la mañana y Juan a la tarde","Que trabaje siempre Juan","Que no trabaje nadie los sábados"], correcta: 1, explicacion: "Combinar intereses deja bien a los dos. Que trabaje siempre uno tienta por simple, pero el conflicto vuelve." },
    { q: "Si ya llegaron a un acuerdo, ¿qué falta?", opciones: ["Nada, ya está","Festejarlo","Seguimiento: ver en unas semanas si funciona","Contárselo a todos"], correcta: 2, explicacion: "El seguimiento confirma que el acuerdo se cumple. \"Ya está\" tienta, pero muchos acuerdos se caen solos." },
    { q: "Tu conflicto es con tu jefe. ¿A quién podés recurrir?", opciones: ["A recursos humanos, si hay, o al delegado gremial","A tus amigos en redes","A nadie","Al cliente"], correcta: 0, explicacion: "Cuando hay diferencia de poder, conviene un tercero. Las redes tientan para desahogarte, pero pueden traerte problemas." },
    { q: "¿Qué hace un mediador?", opciones: ["Decide quién tiene razón","Castiga al culpable","Defiende a una de las partes","Guía la charla para que las partes encuentren un acuerdo; no decide"], correcta: 3, explicacion: "El mediador es neutral y no decide. Decidir quién tiene razón tienta como su función, pero eso lo hace un juez." },
    { q: "Tenés un problema con Juan por los turnos y no hay maltrato. ¿Qué hacés primero?", opciones: ["Vas directo al encargado","Intentás hablarlo directamente con él antes de ir al encargado","Lo contás en el grupo del equipo","Dejás de hablarle"], correcta: 1, explicacion: "Hablarlo primero cuida la relación. Ir directo al encargado tienta por rápido, pero Juan se entera por otro y se enoja más." },
  ],
},
{
  id: "respeto",
  icono: "🛡️",
  titulo: "Respeto, límites y violencia laboral",
  nivel: "Intermedio",
  objetivos: [
    "Trabajar con personas distintas a vos con respeto",
    "Reconocer qué es violencia laboral y en qué se diferencia de un conflicto",
    "Saber qué hacer y dónde consultar si sufrís o ves violencia o acoso",
  ],
  lecciones: [
    { titulo: "Equipos diversos", html: `
      <p class="idea">En un equipo hay personas de distintas edades, orígenes, géneros, creencias y formas de pensar. La <strong>diversidad</strong> suma ideas, pero necesita una regla básica: el respeto.</p>
      <table>
        <tr><th>Sí</th><th>No</th></tr>
        <tr><td>Llamar a cada persona como pide que la llamen</td><td>Apodos sobre el cuerpo, el origen o la religión</td></tr>
        <tr><td>Preguntar si no sabés algo de otra cultura</td><td>Suponer o burlarte</td></tr>
        <tr><td>Hacer chistes que no se ríen de nadie</td><td>"Es una broma" después de algo ofensivo</td></tr>
        <tr><td>Darle a todos la misma oportunidad de hablar</td><td>Interrumpir siempre a las mismas personas</td></tr>
      </table>
      <p><strong>Un chiste ofende aunque "no fuera la intención":</strong> lo que cuenta es el efecto. Si alguien dice que le molestó, la respuesta es "Perdón, no lo vuelvo a hacer", no "Sos muy sensible".</p>
      <p><strong>Discriminar</strong> es tratar peor a alguien por lo que es (su origen, su género, su edad, una discapacidad). En Argentina está prohibido por la ley.</p>
      <p>Por ejemplo, decirle "el paraguayo" a un compañero en vez de su nombre puede parecer inofensivo, pero lo reduce a su origen y lo deja afuera.</p>` },
    { titulo: "Qué es violencia laboral", html: `
      <p class="idea">Un conflicto es un desacuerdo entre partes. La <strong>violencia laboral</strong> es otra cosa: es el abuso de poder que daña a una persona en su trabajo. No es un "problema de comunicación", y no hay que aguantarla.</p>
      <table>
        <tr><th>Conflicto común</th><th>Violencia o acoso laboral</th></tr>
        <tr><td>Un desacuerdo sobre cómo hacer algo</td><td>Gritos, insultos o humillaciones repetidas</td></tr>
        <tr><td>Una discusión que se resuelve</td><td>Aislar a alguien a propósito, no pasarle información, dejarlo sin tareas</td></tr>
        <tr><td>Una devolución dura, pero concreta</td><td>Amenazas con echarlo, burlas delante de otros</td></tr>
        <tr><td>Una crítica a una idea</td><td>Comentarios, mensajes o contactos de tipo sexual que la persona no quiere</td></tr>
      </table>
      <p>La violencia laboral puede ser <strong>física</strong> (golpes, empujones), <strong>psicológica</strong> (humillar, aislar, amenazar) o <strong>sexual</strong> (acoso, insinuaciones, contactos no deseados).</p>
      <p>Argentina ratificó en 2020 (Ley 27.580) el Convenio 190 de la Organización Internacional del Trabajo (OIT), que reconoce el derecho a un mundo del trabajo libre de violencia y acoso.</p>
      <p>Por ejemplo, que un encargado grite e insulte a una empleada todas las semanas delante de los clientes no es "su carácter": es violencia laboral.</p>` },
    { titulo: "Qué hacer y dónde consultar", html: `
      <p class="idea">Si sufrís violencia o acoso en el trabajo, o lo ves, hay pasos que te protegen y lugares donde consultar gratis. No estás exagerando por pedir ayuda.</p>
      <ol>
        <li><strong>Anotá lo que pasa:</strong> fecha, hora, lugar, qué se dijo o hizo, y quién lo vio.</li>
        <li><strong>Guardá pruebas:</strong> mensajes, mails, audios.</li>
        <li><strong>Contalo a alguien de confianza:</strong> no te quedes solo con esto.</li>
        <li><strong>Avisá en tu trabajo:</strong> a recursos humanos, a un superior que no sea quien agrede, o al delegado gremial.</li>
        <li><strong>Consultá afuera</strong> si adentro no te escuchan o tenés miedo.</li>
      </ol>
      <table>
        <tr><th>Dónde</th><th>Para qué</th></tr>
        <tr><td>Oficina de Violencia Laboral del Ministerio de Trabajo: 0800-666-4100 o violencialaboral@trabajo.gob.ar</td><td>Asesoramiento sobre violencia laboral</td></tr>
        <tr><td>Línea 144 (gratis, las 24 horas)</td><td>Violencia por motivos de género</td></tr>
        <tr><td>Emergencias: 911</td><td>Si hay riesgo para tu cuerpo</td></tr>
        <tr><td>Un abogado laboralista o el sindicato</td><td>Para saber qué derechos tenés y qué hacer</td></tr>
      </table>
      <p><strong>Si lo ves:</strong> acercate a la persona, preguntale cómo está y ofrecé ser testigo. Muchas veces el silencio del resto es lo que más aísla.</p>
      <p>Esta lección ayuda a reconocer la situación y a saber dónde consultar; no reemplaza el asesoramiento de un abogado ni la atención de un profesional de salud.</p>
      <p>Por ejemplo, un registro con 10 fechas y lo que pasó en cada una tiene mucho más peso que "siempre me grita".</p>` },
  ],
  practica: [
    "Revisá durante una semana los apodos y chistes que circulan en un grupo del que sos parte. Anotá cuántos se refieren al cuerpo, el origen o la religión de alguien.",
    "Armá una tabla con 4 situaciones (inventadas) y clasificá cada una como conflicto común o violencia laboral. Anotá por qué.",
    "Agendá en tu celular el 0800-666-4100 (Violencia Laboral), la Línea 144 y el 911. Anotá también a quién avisarías en tu trabajo o estudio.",
  ],
  recursos: [
    { t: "Ministerio de Trabajo: Violencia laboral", url: "https://www.argentina.gob.ar/trabajo/violencialaboral" },
    { t: "Línea 144: atención por violencia de género", url: "https://www.argentina.gob.ar/generos/linea-144" },
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
  ],
  quiz: [
    { q: "Si hiciste un chiste y una compañera te dice que le molestó, ¿qué respondés?", opciones: ["\"Sos muy sensible.\"","\"Era una broma.\"","\"Perdón, no lo vuelvo a hacer.\"","\"Los demás se rieron.\""], correcta: 2, explicacion: "Lo que cuenta es el efecto. \"Era una broma\" tienta porque no tenías mala intención, pero igual la lastimó." },
    { q: "En tu equipo le dicen \"el paraguayo\" a un compañero en vez de su nombre. ¿Qué pasa?", opciones: ["Lo reducen a su origen y lo dejan afuera","Nada, es cariñoso","Le da identidad","Es una tradición"], correcta: 0, explicacion: "Llamar a alguien por su origen lo excluye. Que es cariñoso tienta, pero preguntale a él si le gusta." },
    { q: "¿Qué es discriminar?", opciones: ["Tener una opinión distinta","Elegir a quién contratar por su experiencia","Criticar una idea","Tratar peor a alguien por lo que es: su origen, género, edad o una discapacidad"], correcta: 3, explicacion: "Discriminar es tratar peor por lo que la persona es. Opinar distinto tienta como ejemplo, pero no es discriminar." },
    { q: "Si no sabés algo de la cultura de un compañero, ¿qué hacés?", opciones: ["Suponés","Le preguntás con respeto","Hacés un chiste","Lo evitás"], correcta: 1, explicacion: "Preguntar muestra interés y evita errores. Suponer tienta por cómodo, pero suele ofender." },
    { q: "¿En qué se diferencia la violencia laboral de un conflicto?", opciones: ["En nada, son lo mismo","En que la violencia es solo física","La violencia es abuso de poder que daña a una persona; el conflicto es un desacuerdo entre partes","En que el conflicto es más grave"], correcta: 2, explicacion: "La violencia no es un desacuerdo. Que es solo física tienta, pero también es psicológica y sexual." },
    { q: "Tu encargado grita e insulta a una compañera todas las semanas delante de clientes. ¿Qué es?", opciones: ["Violencia laboral","Su carácter","Un problema de comunicación","Una devolución dura"], correcta: 0, explicacion: "Insultos repetidos con abuso de poder son violencia. \"Su carácter\" tienta como explicación, pero no justifica el maltrato." },
    { q: "A una compañera la dejan sin tareas a propósito y no le pasan información. ¿Qué tipo de violencia es?", opciones: ["Física","No es violencia","Sexual","Psicológica: aislar a alguien a propósito"], correcta: 3, explicacion: "Aislar es violencia psicológica. \"No es violencia\" tienta porque no hay gritos, pero el daño es real." },
    { q: "¿Qué reconoce el Convenio 190 de la OIT, que ratificó Argentina?", opciones: ["El sueldo mínimo","El derecho a un mundo del trabajo libre de violencia y acoso","Las vacaciones","El horario de trabajo"], correcta: 1, explicacion: "El Convenio 190 trata violencia y acoso. El sueldo tienta porque la OIT también trata eso, pero en otros convenios." },
    { q: "Sufrís maltrato en el trabajo. ¿Qué hacés primero para protegerte?", opciones: ["Nada, para no tener problemas","Renunciás sin decir nada","Anotás fecha, hora, qué pasó y quién lo vio, y guardás mensajes","Lo publicás en redes"], correcta: 2, explicacion: "El registro da peso a tu relato. Publicarlo tienta para que se sepa, pero puede traerte problemas y no te protege." },
    { q: "Querés asesoramiento por violencia laboral. ¿Dónde consultás?", opciones: ["En la Oficina de Violencia Laboral del Ministerio de Trabajo: 0800-666-4100","En Defensa del Consumidor","En ARCA","En ningún lado, no existe"], correcta: 0, explicacion: "Hay una oficina específica y gratuita. Defensa del Consumidor tienta porque recibe reclamos, pero es para compras." },
    { q: "Si la violencia en el trabajo es por motivos de género, ¿qué línea gratuita existe?", opciones: ["El 0800 de ARCA","La línea de turnos del hospital","No hay ninguna","La Línea 144, las 24 horas"], correcta: 3, explicacion: "La 144 atiende violencia de género. Que no hay ninguna tienta, pero existe y es gratis." },
    { q: "Ves que maltratan a un compañero. ¿Qué podés hacer?", opciones: ["Nada, no es tu problema","Acercarte, preguntarle cómo está y ofrecerte como testigo","Reírte para no quedar mal","Contarlo en el grupo como chisme"], correcta: 1, explicacion: "El silencio del resto aísla. \"No es tu problema\" tienta para no meterte, pero tu apoyo puede cambiar mucho." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: acuerdos del equipo",
  nivel: "Avanzado",
  objetivos: [
    "Escribir los acuerdos de convivencia de un equipo real o imaginario",
    "Practicar la resolución de un conflicto y evaluarla con una rúbrica",
    "Contar en una entrevista cómo trabajás en equipo y resolvés conflictos",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final tiene dos partes: escribir los <strong>acuerdos del equipo</strong> (las reglas de convivencia que todos aceptan) y practicar la resolución de un conflicto con otra persona.</p>
      <p><strong>Parte 1: acuerdos del equipo.</strong> Una página con reglas concretas para un equipo real o imaginario (un local, una cocina, un grupo de estudio, un club).</p>
      <pre><code>Acuerdos del equipo de la cocina
1. Si no llegás a tu turno, avisás antes de las 8 en el grupo.
2. Lo que es para una persona va por privado.
3. Los errores se avisan apenas se ven; nadie se burla.
4. Las devoluciones van en privado, con un ejemplo concreto.
5. Si hay un conflicto, primero se habla entre los dos;
   si no se resuelve, con la encargada.
6. Cero insultos, cero apodos sobre el cuerpo o el origen.
7. Los viernes, 10 minutos para ver qué mejorar.</code></pre>
      <p><strong>Parte 2: práctica de conflicto.</strong> Con otra persona, elijan un conflicto (por ejemplo, los turnos del sábado) y resuélvanlo con los 5 pasos. Una tercera persona observa y evalúa con la rúbrica.</p>
      <p>Por ejemplo, los acuerdos sirven más si los escribe el equipo junto: la gente cumple más lo que ayudó a decidir.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. La persona que observa la práctica de conflicto la completa.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Escucha</td><td>Dejó terminar y repitió con sus palabras</td><td>Interrumpió alguna vez</td><td>Interrumpió todo el tiempo</td></tr>
        <tr><td>Mensajes "yo"</td><td>Habló de hechos y efectos</td><td>Mezcló con algún "siempre" o "nunca"</td><td>Acusó a la persona</td></tr>
        <tr><td>Intereses</td><td>Preguntó por qué y lo entendió</td><td>Preguntó, pero no lo usó</td><td>Se quedó en las posiciones</td></tr>
        <tr><td>Opciones</td><td>Propusieron 3 o más</td><td>1 o 2</td><td>Ninguna</td></tr>
        <tr><td>Acuerdo</td><td>Qué, quién y desde cuándo</td><td>Acuerdo vago</td><td>Sin acuerdo</td></tr>
        <tr><td>Calma</td><td>Tono tranquilo todo el tiempo</td><td>Algún momento tenso</td><td>Gritos o burlas</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → practicá de nuevo lo que sacó 0 o 1
0 a 6   → repasá los módulos de emociones y conflictos</code></pre>
      <p><strong>Para los acuerdos escritos,</strong> revisá que cada regla sea concreta (se puede saber si se cumple) y que haya al menos una sobre respeto y una sobre conflictos.</p>
      <p>Por ejemplo, "Respetarnos" es una buena intención, pero no se puede controlar; "Cero apodos sobre el cuerpo o el origen" sí.</p>` },
    { titulo: "Contarlo en una entrevista", html: `
      <p class="idea">"Contame de un conflicto con un compañero y cómo lo resolviste" es una de las preguntas más comunes en las entrevistas. Con lo que practicaste, tenés una respuesta ordenada.</p>
      <p><strong>Un modelo:</strong> situación, qué hiciste, resultado y qué aprendiste.</p>
      <pre><code>Situación: "En el local, un compañero y yo queríamos franco los sábados."
Qué hice:  "Le propuse hablarlo antes de ir a la encargada. Pregunté por
            qué lo necesitaba: él jugaba al fútbol a la mañana y yo cuidaba
            a mi mamá a la tarde."
Resultado: "Acordamos repartir el sábado: él a la tarde y yo a la mañana.
            Lo probamos un mes y funcionó."
Aprendí:   "Que detrás de un 'no' suele haber un motivo que se puede combinar."</code></pre>
      <table>
        <tr><th>Evitá</th><th>Por qué</th></tr>
        <tr><td>"Nunca tuve un conflicto"</td><td>No es creíble y no muestra nada</td></tr>
        <tr><td>Hablar mal del compañero o del jefe anterior</td><td>Da a entender que harías lo mismo</td></tr>
        <tr><td>Una historia sin resultado</td><td>No muestra que sabés resolver</td></tr>
      </table>
      <p><strong>Si no tenés experiencia laboral,</strong> usá un ejemplo de la escuela, un club, un grupo de estudio o tu familia. Lo que se evalúa es el método.</p>
      <p>Por ejemplo, el curso "Buscar trabajo con IA" de este sitio te deja practicar esta pregunta en una entrevista simulada.</p>` },
  ],
  practica: [
    "Escribí los acuerdos del equipo con al menos 6 reglas concretas, una sobre respeto y una sobre conflictos. Anotá cuántas reglas quedaron.",
    "Hacé la práctica de conflicto con otra persona y pedile a una tercera que evalúe con la rúbrica. Anotá el puntaje de cada criterio y el total sobre 12.",
    "Repetí la práctica mejorando el criterio más bajo. Anotá el puntaje antes y después.",
    "Escribí tu respuesta a \"Contame de un conflicto y cómo lo resolviste\" con el modelo y decila en voz alta en menos de 2 minutos. Anotá cuánto tardaste.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: mediación y resolución de conflictos", url: "https://www.argentina.gob.ar/justicia/mediacion" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Ministerio de Trabajo: Violencia laboral", url: "https://www.argentina.gob.ar/trabajo/violencialaboral" },
  ],
  quiz: [
    { q: "¿Qué son los acuerdos del equipo?", opciones: ["El contrato de trabajo","Las órdenes del jefe","Las reglas de convivencia que todos aceptan, escritas y concretas","Un chat del equipo"], correcta: 2, explicacion: "Son reglas acordadas por el equipo. Las órdenes del jefe tientan como reglas, pero no son acordadas." },
    { q: "Tu acuerdo dice \"Respetarnos\". ¿Qué le falta?", opciones: ["Ser concreto: por ejemplo, \"Cero apodos sobre el cuerpo o el origen\"","Nada, es clarísimo","Más palabras lindas","Una firma"], correcta: 0, explicacion: "Una regla concreta se puede controlar. \"Es clarísimo\" tienta, pero cada uno entiende algo distinto por respeto." },
    { q: "¿Por qué conviene que los acuerdos los escriba el equipo junto?", opciones: ["Porque el jefe no tiene tiempo","Para que sean más largos","No conviene","Porque la gente cumple más lo que ayudó a decidir"], correcta: 3, explicacion: "Participar compromete. Que el jefe no tiene tiempo tienta como motivo, pero lo importante es el compromiso." },
    { q: "¿Qué es una rúbrica?", opciones: ["Un tipo de acuerdo","Una lista de criterios con puntaje para saber si algo está listo","Un mediador","Un mensaje \"yo\""], correcta: 1, explicacion: "La rúbrica muestra qué mejorar. Confundirla con un acuerdo tienta porque ambos son listas, pero la rúbrica evalúa." },
    { q: "En la práctica dijiste \"Vos siempre te quedás con los mejores turnos\". ¿Qué criterio pierde puntos?", opciones: ["Opciones","Acuerdo","Mensajes \"yo\"","Ninguno"], correcta: 2, explicacion: "Es un mensaje \"vos\" con \"siempre\". Calma tienta porque puede subir la tensión, pero el criterio es cómo lo dijiste." },
    { q: "En la práctica nunca preguntaron por qué cada uno quería el sábado. ¿Cuánto sacan en \"Intereses\"?", opciones: ["0: se quedaron en las posiciones","2","1","No se evalúa"], correcta: 0, explicacion: "Sin preguntar el porqué, no hay intereses. Pensar que no se evalúa tienta, pero es el corazón del método." },
    { q: "Si acordaron \"Vemos cómo seguimos\", ¿cuánto sacan en \"Acuerdo\"?", opciones: ["2: hay acuerdo","0: no hablaron","No se evalúa","1: es un acuerdo vago"], correcta: 3, explicacion: "Sin qué, quién y desde cuándo, es vago. 2 tienta porque hubo acuerdo, pero no se puede cumplir ni controlar." },
    { q: "Sacaron 8 sobre 12. ¿Qué hacen?", opciones: ["Lo dan por listo","Practican de nuevo lo que sacó 0 o 1","Empiezan otro curso","Cambian de compañero"], correcta: 1, explicacion: "Entre 7 y 10 se practica lo que falló. Darlo por listo tienta porque aprobaron, pero ese criterio va a fallar en un conflicto real." },
    { q: "En una entrevista te preguntan por un conflicto. ¿Qué modelo usás?", opciones: ["Contás quién tenía la culpa","Decís que nunca tuviste uno","Situación, qué hiciste, resultado y qué aprendiste","Hablás de lo mal que estaba el jefe"], correcta: 2, explicacion: "El modelo muestra que sabés resolver. \"Nunca tuve uno\" tienta para quedar bien, pero no es creíble." },
    { q: "Si en la entrevista hablás mal de tu jefe anterior, ¿qué das a entender?", opciones: ["Que harías lo mismo con el próximo","Que sos sincero","Que tenías razón","Nada"], correcta: 0, explicacion: "Hablar mal de otros preocupa al entrevistador. Que sos sincero tienta como lectura, pero lo que escucha es una queja." },
    { q: "Nunca trabajaste y te preguntan por un conflicto en el trabajo. ¿Qué hacés?", opciones: ["Inventás un trabajo","Decís que no sabés","Cambiás de tema","Usás un ejemplo de la escuela, un club o tu familia, con el mismo método"], correcta: 3, explicacion: "Lo que se evalúa es el método. Inventar tienta para tener un ejemplo laboral, pero si te repreguntan se nota." },
    { q: "Tu respuesta de entrevista dura 6 minutos. ¿Qué cambiás?", opciones: ["La alargás con más detalles","La acortás a menos de 2 minutos con el modelo","Hablás más rápido","No cambiás nada"], correcta: 1, explicacion: "Corta y ordenada se recuerda. Hablar más rápido tienta, pero el entrevistador se pierde igual." },
  ],
},
];
