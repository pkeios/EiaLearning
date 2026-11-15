// Temario del curso "Liderar un equipo por primera vez". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js liderar y node tools/metodologia.js liderar
window.TEMARIO = [
{
  id: "empezar",
  icono: "🧭",
  titulo: "Empezar: de compañero a líder",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué cambia cuando pasás a liderar un equipo",
    "Manejar la relación con quienes antes eran tus compañeros",
    "Armar un plan simple para tus primeros 90 días",
  ],
  lecciones: [
    { titulo: "Qué cambia", video: {"id":"67Lmn6-N2po","t":"De compañero a jefe: 5 claves para liderar · Daniel Colombo (6:31)"}, html: `
      <p class="idea">Cuando pasás a liderar, tu trabajo ya no es hacer las tareas vos, sino lograr que el equipo las haga bien. Es un cambio grande, y casi nadie lo aprende antes de tener que hacerlo.</p>
      <table>
        <tr><th>Antes</th><th>Ahora</th></tr>
        <tr><td>Te medían por lo que hacías vos</td><td>Te miden por lo que logra el equipo</td></tr>
        <tr><td>Resolvías tus tareas</td><td>Ayudás a que otros resuelvan las suyas</td></tr>
        <tr><td>Recibías indicaciones</td><td>Das dirección y también las recibís de arriba</td></tr>
        <tr><td>Te quejabas de decisiones</td><td>Tenés que explicarlas, aunque no las hayas tomado</td></tr>
      </table>
      <p><strong>El error más común:</strong> seguir haciendo todo vos porque "es más rápido". El equipo no aprende y vos te quemás.</p>
      <p><strong>Lo que hace un buen líder,</strong> según los estudios de equipos de Google (proyecto Oxygen): es buen guía, da autonomía, se interesa por las personas, tiene en claro los objetivos, escucha y comunica bien.</p>
      <p>Por ejemplo, la mejor cajera ascendida a encargada que sigue cobrando todo el día deja a la caja sin supervisión y al equipo sin guía.</p>` },
    { titulo: "Liderar a excompañeros", html: `
      <p class="idea">Liderar a quienes ayer eran tus compañeros es una de las situaciones más delicadas. La relación cambia, y conviene hablarlo en lugar de hacer como que nada pasó.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Una charla individual con cada uno al empezar</td><td>Hacer como que nada cambió</td></tr>
        <tr><td>Reglas claras e iguales para todos</td><td>Favorecer a tus amigos del equipo</td></tr>
        <tr><td>Pedir ayuda: "Ustedes saben cosas que yo no"</td><td>Llegar con "ahora mando yo"</td></tr>
        <tr><td>Mantener la confidencialidad de lo que sabés como líder</td><td>Seguir en los chismes del grupo</td></tr>
      </table>
      <pre><code>Charla inicial (5 a 10 minutos con cada persona):
"Ahora me toca coordinar el equipo. Quiero que nos vaya bien a todos.
¿Qué te parece que funciona bien? ¿Qué cambiarías?
¿Cómo preferís que te avise si algo no sale bien?"</code></pre>
      <p><strong>Si alguien también quería el puesto,</strong> reconocelo en privado y con respeto. Pedile ayuda en lo que sabe hacer bien.</p>
      <p>Por ejemplo, seguir yendo al after con un grupo del equipo y no con otro hace que el resto sienta que hay favoritos, aunque no lo sea.</p>` },
    { titulo: "Tus primeros 90 días", html: `
      <p class="idea">Los primeros meses definen cómo te va a ver el equipo. Un plan simple en tres etapas evita querer cambiar todo el primer día.</p>
      <table>
        <tr><th>Etapa</th><th>Qué hacer</th></tr>
        <tr><td>Días 1 a 30: escuchar</td><td>Charlas con cada persona, entender cómo se trabaja, qué funciona y qué no</td></tr>
        <tr><td>Días 31 a 60: ordenar</td><td>Acordar objetivos y roles, resolver 1 o 2 problemas chicos que molestan a todos</td></tr>
        <tr><td>Días 61 a 90: mejorar</td><td>Proponer los cambios más grandes, con el equipo</td></tr>
      </table>
      <p><strong>Victorias rápidas:</strong> resolver algo chico que molesta a todos (una herramienta que falta, un turno mal repartido) genera confianza.</p>
      <p><strong>Hablá con tu propio jefe:</strong> preguntá qué espera de vos y del equipo, y cómo te va a evaluar. Un líder también tiene que gestionar hacia arriba.</p>
      <p>Por ejemplo, cambiar todos los horarios la primera semana, sin preguntar, genera resistencia aunque el cambio sea bueno; proponerlo en el día 60, con la opinión del equipo, se acepta mucho mejor.</p>` },
  ],
  practica: [
    "Pensá en un líder que tuviste (bueno o malo) y anotá en una tabla qué hacía de las 6 conductas de un buen líder y qué no.",
    "Escribí tu charla inicial con un excompañero, con 3 preguntas. Practicala en voz alta y anotá cuánto dura.",
    "Armá tu plan de 90 días con una acción por etapa y una victoria rápida posible. Anotalo.",
  ],
  recursos: [
    { t: "Google re:Work: qué hace a un buen líder de equipo (en inglés)", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager" },
    { t: "Harvard Business Review: artículos de liderazgo (en inglés)", url: "https://hbr.org/topic/subject/leadership" },
  ],
  quiz: [
    { q: "Te ascienden a encargada del equipo de caja. ¿Qué cambia en tu trabajo?", opciones: ["Nada, seguís cobrando igual","Ahora solo mandás","Ahora te miden por lo que logra el equipo, no solo por lo que hacés vos","Trabajás menos"], correcta: 2, explicacion: "El foco pasa al equipo. \"Seguís cobrando igual\" tienta por lo conocido, pero el equipo queda sin guía." },
    { q: "Si ya sos líder y seguís haciendo todo vos porque \"es más rápido\", ¿qué pasa?", opciones: ["El equipo no aprende y vos te quemás","El equipo te admira más","Todo sale mejor siempre","Nada"], correcta: 0, explicacion: "Hacer todo vos frena al equipo. Que sale mejor tienta a corto plazo, pero no escala." },
    { q: "La empresa toma una decisión que no te gusta y tenés que comunicarla. ¿Qué hacés?", opciones: ["Le decís al equipo que es una decisión tonta","No la comunicás","La cambiás por tu cuenta","La explicás al equipo, aunque no la hayas tomado, y planteás tus dudas arriba"], correcta: 3, explicacion: "El líder explica y plantea sus dudas por el canal correcto. Criticarla delante del equipo tienta para quedar bien, pero rompe la confianza con la empresa." },
    { q: "Según los estudios de Google sobre líderes, ¿qué hace un buen líder?", opciones: ["Controla cada detalle","Guía, da autonomía, se interesa por las personas, tiene claros los objetivos, escucha y comunica bien","Sabe más que todos de todo","Nunca se equivoca"], correcta: 1, explicacion: "Esas conductas aparecen en los mejores líderes. Controlar cada detalle tienta por seguro, pero quita autonomía." },
    { q: "Empezás a liderar a tus excompañeros. ¿Qué hacés primero?", opciones: ["Hacés como que nada cambió","Anunciás \"ahora mando yo\"","Una charla individual con cada uno","Cambiás todas las reglas"], correcta: 2, explicacion: "Hablarlo evita malentendidos. Hacer como que nada cambió tienta por cómodo, pero la relación ya es otra." },
    { q: "Tenés amigos dentro del equipo. ¿Cómo los tratás ahora?", opciones: ["Con las mismas reglas que al resto","Con más privilegios","Los dejás de saludar","Les contás lo que sabés como líder"], correcta: 0, explicacion: "Las reglas iguales evitan favoritismos. Más privilegios tienta por amistad, pero el resto lo nota." },
    { q: "Un compañero también quería el puesto que te dieron. ¿Qué hacés?", opciones: ["Lo ignorás","Le recordás que ganaste vos","Lo cambiás de área","Lo reconocés en privado con respeto y le pedís ayuda en lo que sabe hacer bien"], correcta: 3, explicacion: "Reconocer y sumar cuida la relación. Ignorarlo tienta para evitar el tema, pero la tensión crece." },
    { q: "Como líder te enterás de algo confidencial. ¿Qué hacés?", opciones: ["Se lo contás a tus amigos del equipo","No lo comentás con el equipo","Lo publicás en el grupo","Lo usás como chisme"], correcta: 1, explicacion: "La confidencialidad es parte del rol. Contárselo a amigos tienta por confianza, pero rompe la regla." },
    { q: "¿Qué conviene hacer en los primeros 30 días como líder?", opciones: ["Cambiar todo","Despedir a alguien para mostrar autoridad","Escuchar: charlar con cada persona y entender cómo se trabaja","No hablar con nadie"], correcta: 2, explicacion: "Primero se entiende. Cambiar todo tienta para mostrar iniciativa, pero genera resistencia." },
    { q: "¿Qué es una victoria rápida?", opciones: ["Resolver algo chico que molesta a todos, para generar confianza","Ganar una discusión","Terminar antes de hora","Un aumento de sueldo"], correcta: 0, explicacion: "Resolver un problema chico muestra que escuchás. Ganar una discusión tienta por el nombre, pero no genera confianza." },
    { q: "Querés cambiar todos los horarios del equipo en tu primera semana. ¿Qué pensás?", opciones: ["Que es el momento ideal","Que hay que hacerlo sin avisar","Que no importa la opinión del equipo","Que conviene esperar, escuchar y proponerlo con el equipo más adelante"], correcta: 3, explicacion: "Proponerlo con opinión del equipo se acepta mejor. Hacerlo ya tienta para marcar el cambio, pero genera rechazo." },
    { q: "¿Por qué conviene hablar con tu propio jefe al empezar?", opciones: ["Para pedirle un aumento","Para saber qué espera de vos y del equipo y cómo te va a evaluar","Para quejarte del equipo","No hace falta"], correcta: 1, explicacion: "Saber qué esperan orienta tu trabajo. \"No hace falta\" tienta, pero podés trabajar en algo que no le importa." },
  ],
},
{
  id: "objetivos",
  icono: "🎯",
  titulo: "Objetivos claros y roles",
  nivel: "Básico",
  objetivos: [
    "Traducir lo que pide la empresa en objetivos concretos para el equipo",
    "Repartir roles y responsabilidades sin huecos ni superposiciones",
    "Seguir el avance con un tablero simple",
  ],
  lecciones: [
    { titulo: "Objetivos que se entienden", html: `
      <p class="idea">Un equipo sin objetivo claro trabaja mucho, pero en distintas direcciones. Tu tarea es traducir lo que pide la empresa en objetivos concretos, medibles y con fecha.</p>
      <table>
        <tr><th>Vago</th><th>Claro</th></tr>
        <tr><td>"Hay que vender más"</td><td>"Pasar de 40 a 50 ventas por semana antes de fin de mes"</td></tr>
        <tr><td>"Mejorar la atención"</td><td>"Responder todos los mensajes en menos de 2 horas"</td></tr>
        <tr><td>"Ordenar el depósito"</td><td>"Que cada producto tenga código de ubicación antes del 30"</td></tr>
      </table>
      <p><strong>Pocos objetivos:</strong> 2 o 3 por período. Si todo es prioridad, nada lo es.</p>
      <p><strong>Explicá el porqué:</strong> "Queremos responder en 2 horas porque perdemos clientes que se van a otro lado" hace que el equipo entienda y se comprometa.</p>
      <p>El curso "Organizar el tiempo y las tareas" de este sitio explica las metas SMART en detalle.</p>
      <p>Por ejemplo, "vender más" no le dice a nadie qué hacer el lunes; "50 ventas por semana" sí, y se puede medir cada viernes.</p>` },
    { titulo: "Roles sin huecos", html: `
      <p class="idea">Muchos problemas de equipo vienen de no saber quién hace qué. Una tabla de roles simple evita tareas duplicadas y tareas que no hace nadie.</p>
      <pre><code>Tarea                      Responsable  Ayuda      Avisar a
Abrir el local             Ana          —          Encargada
Responder WhatsApp         Pedro        Ana        —
Pedir mercadería           Lucía        Pedro      Encargada
Cierre de caja             Ana          Lucía      Encargada</code></pre>
      <table>
        <tr><th>Columna</th><th>Qué significa</th></tr>
        <tr><td>Responsable</td><td>Quien tiene que hacerlo y responde por el resultado (una sola persona)</td></tr>
        <tr><td>Ayuda</td><td>Quien colabora o la reemplaza</td></tr>
        <tr><td>Avisar a</td><td>Quien tiene que enterarse cuando se hace o si hay un problema</td></tr>
      </table>
      <p><strong>Un solo responsable por tarea:</strong> si son dos, cada uno piensa que lo hace el otro.</p>
      <p><strong>Reemplazos:</strong> la columna de ayuda dice quién cubre cuando alguien falta o se va de vacaciones.</p>
      <p>Por ejemplo, "Pedro y Ana responden WhatsApp" suele terminar con mensajes que nadie responde; "Pedro responde, Ana lo cubre" no.</p>` },
    { titulo: "Seguir el avance", html: `
      <p class="idea">Un <strong>tablero</strong> simple muestra cómo va el equipo sin perseguir a nadie: tareas por hacer, en curso y hechas, más los números de los objetivos.</p>
      <pre><code>POR HACER          EN CURSO            HECHO
- Pedir cajas      - Inventario (Lucía) - Etiquetar pasillo A
- Capacitar Pedro  - Ofertas (Ana)      - Arreglar la balanza

Objetivo: 50 ventas/semana   Semana 1: 42   Semana 2: 47</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Cuándo</th></tr>
        <tr><td>Pizarra o papeles en la pared</td><td>Equipos que trabajan en el mismo lugar</td></tr>
        <tr><td>Planilla compartida</td><td>Equipos con computadora</td></tr>
        <tr><td>Aplicaciones de tableros (como Trello)</td><td>Equipos a distancia o con muchas tareas</td></tr>
      </table>
      <p><strong>Revisalo con el equipo una vez por semana,</strong> en 15 minutos: qué se hizo, qué está trabado y qué sigue.</p>
      <p><strong>El tablero no es para controlar:</strong> es para que todos vean lo mismo y pidan ayuda a tiempo.</p>
      <p>Por ejemplo, ver una tarea dos semanas en "En curso" te avisa que alguien está trabado, sin tener que preguntar todos los días.</p>` },
  ],
  practica: [
    "Pasá 3 objetivos vagos de un trabajo que conozcas a objetivos claros con número y fecha. Anotá las dos versiones.",
    "Armá una tabla de roles con 5 tareas de un equipo (real o imaginario), con responsable, ayuda y a quién avisar. Anotá si quedó alguna tarea sin responsable.",
    "Armá un tablero de por hacer, en curso y hecho con al menos 6 tareas y un número de objetivo. Anotá cuántas tareas hay en cada columna.",
  ],
  recursos: [
    { t: "Google re:Work: guías sobre equipos y liderazgo (en inglés)", url: "https://rework.withgoogle.com/" },
    { t: "Google re:Work: qué hace a un buen líder de equipo (en inglés)", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager" },
  ],
  quiz: [
    { q: "Tu jefe te dice \"hay que vender más\". ¿Qué objetivo le das al equipo?", opciones: ["\"Vendamos más\"","\"Esfuércense\"","\"Pasar de 40 a 50 ventas por semana antes de fin de mes\"","\"Vamos a ser los mejores\""], correcta: 2, explicacion: "Con número y fecha se puede medir. \"Vendamos más\" tienta por motivador, pero nadie sabe qué hacer." },
    { q: "¿Cuántos objetivos conviene tener por período?", opciones: ["2 o 3","10 o más","Ninguno","Uno distinto por día"], correcta: 0, explicacion: "Pocos objetivos enfocan. Muchos tientan por ambiciosos, pero si todo es prioridad, nada lo es." },
    { q: "¿Por qué conviene explicar el porqué de un objetivo?", opciones: ["Porque lo pide la ley","Para alargar la reunión","No conviene","Porque el equipo entiende y se compromete más"], correcta: 3, explicacion: "Entender el motivo compromete. \"No conviene\" tienta por rápido, pero el equipo cumple sin ganas." },
    { q: "Si dos personas son responsables de responder WhatsApp, ¿qué suele pasar?", opciones: ["Que se responda el doble de rápido","Que cada uno piense que lo hace el otro y queden mensajes sin responder","Que nunca haya problemas","Que se peleen siempre"], correcta: 1, explicacion: "Un solo responsable evita huecos. \"El doble de rápido\" tienta por lógica, pero en la práctica nadie se hace cargo." },
    { q: "En la tabla de roles, ¿qué indica la columna \"Ayuda\"?", opciones: ["Quien manda","Quien cobra más","Quien colabora o reemplaza al responsable","Quien evalúa"], correcta: 2, explicacion: "Ayuda es quien colabora o cubre. Quien manda tienta, pero eso es otra cosa." },
    { q: "Si Ana se va de vacaciones y nadie sabe quién hace el cierre de caja, ¿qué faltó?", opciones: ["Definir quién la reemplaza en la tabla de roles","Que Ana no se vaya","Contratar a otra persona","Nada, ya se arreglarán"], correcta: 0, explicacion: "La columna de ayuda define reemplazos. Que no se vaya tienta, pero las vacaciones son un derecho." },
    { q: "Si el responsable de una tarea tiene un problema, ¿a quién avisa?", opciones: ["A nadie","A todos los clientes","Al que esté más cerca","A quien figura en la columna \"Avisar a\""], correcta: 3, explicacion: "La tabla dice a quién avisar. El que esté más cerca tienta por rápido, pero puede no poder resolverlo." },
    { q: "¿Qué muestra un tablero de tareas?", opciones: ["Los sueldos del equipo","Qué está por hacer, en curso y hecho, y cómo van los objetivos","Las faltas de cada uno","Los errores de cada persona"], correcta: 1, explicacion: "Muestra el avance del trabajo. Las faltas tientan como control, pero el tablero es para avanzar, no para vigilar." },
    { q: "Tu equipo trabaja a distancia. ¿Qué tablero conviene?", opciones: ["Una pizarra en tu casa","Ninguno","Una planilla compartida o una aplicación de tableros","Un cuaderno tuyo"], correcta: 2, explicacion: "A distancia todos tienen que verlo. La pizarra tienta por simple, pero solo la ves vos." },
    { q: "¿Cada cuánto conviene revisar el tablero con el equipo?", opciones: ["Una vez por semana, unos 15 minutos","Una vez por año","Cada hora","Nunca, cada uno lo mira solo"], correcta: 0, explicacion: "Una revisión semanal corta alcanza. Cada hora tienta por control, pero interrumpe el trabajo." },
    { q: "Una tarea lleva dos semanas en \"En curso\". ¿Qué concluís?", opciones: ["Que la persona es vaga","Que está todo bien","Que hay que borrarla","Que alguien puede estar trabado y conviene preguntar cómo ayudar"], correcta: 3, explicacion: "Una tarea quieta es una señal. \"Es vaga\" tienta, pero puede faltarle algo que vos podés resolver." },
    { q: "Si querés usar el tablero para controlar a cada persona, ¿qué problema hay?", opciones: ["Ninguno","Que el equipo esconde los problemas en vez de pedir ayuda a tiempo","Que se llena","Que es muy caro"], correcta: 1, explicacion: "El tablero sirve si todos lo usan con confianza. \"Ninguno\" tienta, pero si es para vigilar, nadie muestra lo trabado." },
  ],
},
{
  id: "delegar",
  icono: "🤲",
  titulo: "Delegar sin desaparecer ni controlar todo",
  nivel: "Intermedio",
  objetivos: [
    "Elegir qué delegar y a quién",
    "Delegar con contexto, resultado esperado, plazo y autoridad",
    "Hacer seguimiento sin caer en la microgestión",
  ],
  lecciones: [
    { titulo: "Qué delegar", html: `
      <p class="idea"><strong>Delegar</strong> es pasarle a otra persona una tarea con la responsabilidad de hacerla. No es "sacarte trabajo de encima": es hacer crecer al equipo y liberar tu tiempo para lo que solo vos podés hacer.</p>
      <table>
        <tr><th>Conviene delegar</th><th>Conviene quedártelo (por ahora)</th></tr>
        <tr><td>Tareas que se repiten y otro puede aprender</td><td>Decisiones sobre personas (evaluaciones, sanciones)</td></tr>
        <tr><td>Tareas que alguien del equipo hace mejor que vos</td><td>Temas confidenciales</td></tr>
        <tr><td>Tareas que hacen crecer a alguien</td><td>Crisis donde se necesita tu decisión</td></tr>
      </table>
      <p><strong>A quién:</strong> a quien tiene las habilidades, o a quien quiere aprenderlas (y le das apoyo).</p>
      <p><strong>Los miedos de quien delega:</strong> "lo va a hacer peor", "tardo más en explicarlo", "me van a reemplazar". Los primeros días puede ser así; a las semanas, ganás tiempo y el equipo crece.</p>
      <p>Por ejemplo, si tardás 30 minutos en explicar el pedido de mercadería y te ahorra 1 hora por semana, en un mes ganaste casi 4 horas.</p>` },
    { titulo: "Cómo delegar bien", html: `
      <p class="idea">Una delegación clara tiene cinco partes: el contexto, el resultado esperado, el plazo, hasta dónde puede decidir y cuándo revisan juntos.</p>
      <table>
        <tr><th>Parte</th><th>Ejemplo</th></tr>
        <tr><td>Contexto (para qué)</td><td>"Nos faltan productos los viernes y perdemos ventas."</td></tr>
        <tr><td>Resultado esperado</td><td>"Quiero que hagas el pedido semanal a la distribuidora."</td></tr>
        <tr><td>Plazo</td><td>"Cada martes antes de las 12."</td></tr>
        <tr><td>Autoridad</td><td>"Podés decidir cantidades hasta $ 300.000; si pasa de eso, consultame."</td></tr>
        <tr><td>Seguimiento</td><td>"Las primeras dos semanas lo revisamos juntos el martes a las 11."</td></tr>
      </table>
      <p><strong>Confirmá que se entendió:</strong> pedí que te lo cuente con sus palabras, no "¿entendiste?".</p>
      <p><strong>Delegá el resultado, no cada paso:</strong> si hay varias formas de hacerlo bien, dejá que elija la suya.</p>
      <p>Por ejemplo, "Encargate del pedido" sin decir plazo ni límite de plata termina en un pedido tarde o demasiado grande.</p>` },
    { titulo: "Seguimiento sin microgestión", html: `
      <p class="idea">Después de delegar hay dos errores opuestos: desaparecer (y enterarte del problema cuando ya es tarde) o controlar cada paso, lo que se llama <strong>microgestión</strong>.</p>
      <table>
        <tr><th>Desaparecer</th><th>Seguimiento justo</th><th>Microgestión</th></tr>
        <tr><td>No preguntás nunca</td><td>Revisiones acordadas de antemano</td><td>Preguntás cada hora</td></tr>
        <tr><td>Te enterás del problema tarde</td><td>Preguntás "¿qué necesitás?"</td><td>Corregís cada detalle</td></tr>
        <tr><td>La persona se siente sola</td><td>La persona se siente apoyada</td><td>La persona se siente vigilada</td></tr>
      </table>
      <p><strong>Ajustá según la experiencia:</strong> con alguien que recién empieza, más seguimiento; con alguien que ya lo domina, menos.</p>
      <p><strong>Si sale mal:</strong> no le quites la tarea en el primer error. Revisen juntos qué pasó, qué faltó (¿información?, ¿práctica?, ¿tiempo?) y probá de nuevo.</p>
      <p>Por ejemplo, preguntar "¿Cómo vas con el pedido? ¿Necesitás algo?" el martes a las 11 es seguimiento; mandar cinco mensajes esa mañana es microgestión.</p>` },
  ],
  practica: [
    "Anotá 6 tareas que hacés (o haría un líder) y marcá cuáles conviene delegar y cuáles no, con el motivo.",
    "Escribí una delegación completa con las 5 partes para una tarea real o imaginaria. Practicala en voz alta y anotá cuánto dura.",
    "Elegí una tarea que hayas delegado o te hayan delegado y anotá si el seguimiento fue desaparecer, justo o microgestión, y qué cambiarías.",
  ],
  recursos: [
    { t: "Google re:Work: qué hace a un buen líder de equipo (en inglés)", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager" },
    { t: "Harvard Business Review: artículos de liderazgo (en inglés)", url: "https://hbr.org/topic/subject/leadership" },
  ],
  quiz: [
    { q: "¿Qué es delegar?", opciones: ["Sacarte trabajo de encima sin explicar","Hacer todo vos","Pasarle a otra persona una tarea con la responsabilidad de hacerla","Pedir que otro lo haga y desaparecer"], correcta: 2, explicacion: "Delegar incluye responsabilidad y apoyo. \"Sacarte trabajo\" tienta como definición, pero sin explicar no funciona." },
    { q: "Si una tarea se repite todas las semanas y alguien del equipo puede aprenderla, ¿qué conviene?", opciones: ["Delegarla","Quedártela siempre","Eliminarla","Hacerla de noche"], correcta: 0, explicacion: "Las tareas repetidas son buenas para delegar. Quedártela tienta por control, pero te quita tiempo." },
    { q: "Si tenés que hacer la evaluación de desempeño de una persona, ¿la delegás?", opciones: ["Sí, al compañero que más sabe","Sí, a la persona misma","Sí, al azar","No: las decisiones sobre personas conviene que las hagas vos"], correcta: 3, explicacion: "Las decisiones sobre personas son del líder. Delegarla al que más sabe tienta, pero pone en un lugar incómodo a un par." },
    { q: "Si tardás 30 minutos en explicar una tarea que te ahorra 1 hora por semana, ¿conviene?", opciones: ["No, perdés 30 minutos","Sí: en un mes ganaste casi 4 horas","Solo si lo hace perfecto","No, es más rápido hacerlo vos"], correcta: 1, explicacion: "La inversión inicial se recupera rápido. \"Es más rápido hacerlo vos\" tienta a corto plazo, pero no a largo." },
    { q: "Si vas a delegar el pedido semanal, ¿qué tiene que incluir?", opciones: ["Solo \"encargate del pedido\"","Solo el plazo","Contexto, resultado esperado, plazo, hasta dónde puede decidir y cuándo revisan","Todos los pasos detallados para que no piense"], correcta: 2, explicacion: "Las cinco partes evitan errores. \"Encargate\" tienta por corto, pero no dice plazo ni límites." },
    { q: "¿Para qué sirve definir \"hasta dónde puede decidir\"?", opciones: ["Para que sepa qué decide solo y qué tiene que consultar","Para controlarlo","Para que no haga nada","No sirve"], correcta: 0, explicacion: "La autoridad clara da autonomía segura. Controlarlo tienta como motivo, pero es para que actúe con confianza." },
    { q: "Querés confirmar que entendió la tarea delegada. ¿Qué hacés?", opciones: ["Le preguntás \"¿entendiste?\"","Se lo repetís tres veces","Confiás en que sí","Le pedís que te la cuente con sus palabras"], correcta: 3, explicacion: "Contarlo con sus palabras muestra lo que entendió. \"¿Entendiste?\" tienta, pero casi todos dicen que sí." },
    { q: "Hay varias formas correctas de hacer la tarea delegada. ¿Qué hacés?", opciones: ["Le imponés tu forma en cada paso","Delegás el resultado y dejás que elija su forma","Lo hacés vos","Cambiás de persona"], correcta: 1, explicacion: "Delegar el resultado da autonomía. Imponer tu forma tienta por seguro, pero es microgestión." },
    { q: "¿Qué es la microgestión?", opciones: ["Gestionar un equipo chico","Hacer un seguimiento semanal","Controlar cada paso y cada detalle de lo que delegaste","Delegar tareas pequeñas"], correcta: 2, explicacion: "Microgestión es controlar de más. Equipo chico tienta por \"micro\", pero no es eso." },
    { q: "Delegaste y no preguntás nada durante un mes. ¿Qué riesgo hay?", opciones: ["Enterarte de un problema cuando ya es tarde","Ninguno, confiás","Que la persona se sienta vigilada","Que lo haga demasiado bien"], correcta: 0, explicacion: "Desaparecer también es un error. \"Confiás\" tienta, pero la persona puede estar trabada sin ayuda." },
    { q: "Si delegaste a alguien que recién empieza, ¿cuánto seguimiento das?", opciones: ["Ninguno","El mismo que a todos","Cada hora","Más que a alguien con experiencia, con revisiones acordadas"], correcta: 3, explicacion: "El seguimiento se ajusta a la experiencia. Cada hora tienta por cuidado, pero es microgestión." },
    { q: "La primera vez que delegaste, salió mal. ¿Qué hacés?", opciones: ["Le sacás la tarea para siempre","Revisan juntos qué faltó y prueban de nuevo","Lo retás delante de todos","Lo hacés vos de ahora en más"], correcta: 1, explicacion: "El primer error es parte de aprender. Sacarle la tarea tienta por seguro, pero nunca va a aprender." },
  ],
},
{
  id: "comunicar",
  icono: "💬",
  titulo: "Reuniones, 1 a 1 y comunicación",
  nivel: "Intermedio",
  objetivos: [
    "Hacer reuniones de equipo cortas y útiles",
    "Hacer reuniones individuales (1 a 1) que sirvan a la persona",
    "Escuchar de verdad y comunicar decisiones con claridad",
  ],
  lecciones: [
    { titulo: "Reuniones de equipo cortas", video: {"id":"jwKrXH8F5lo","t":"Aprende a comunicarte como un líder · LearnFree en Español (2:07)"}, html: `
      <p class="idea">Como líder, vas a convocar reuniones. Una reunión de equipo útil es corta, tiene un orden del día y termina con tareas claras.</p>
      <table>
        <tr><th>Tipo</th><th>Duración</th><th>Para qué</th></tr>
        <tr><td>Reunión diaria corta (de pie)</td><td>10 a 15 minutos</td><td>Qué hago hoy, qué me traba</td></tr>
        <tr><td>Reunión semanal</td><td>30 minutos</td><td>Revisar el tablero y los objetivos</td></tr>
        <tr><td>Reunión de mejora (mensual)</td><td>45 a 60 minutos</td><td>Qué funcionó, qué no y qué cambiamos</td></tr>
      </table>
      <p><strong>Hablá vos lo menos posible:</strong> el líder que habla todo el tiempo no se entera de lo que pasa. Preguntá y escuchá.</p>
      <p><strong>Cerrá siempre con tareas:</strong> qué, quién y para cuándo, por escrito en el grupo o en el tablero.</p>
      <p><strong>Si un tema es de dos personas,</strong> sacalo de la reunión: "Eso lo vemos después vos y yo".</p>
      <p>Por ejemplo, una reunión diaria de 10 minutos de pie en la que cada uno dice qué hace y qué lo traba detecta problemas antes de que crezcan.</p>` },
    { titulo: "Las reuniones 1 a 1", video: {"id":"btFJkE9DViU","t":"One to ones: Manager Tips #3 · Factorial en español (3:56)"}, html: `
      <p class="idea">Una <strong>reunión 1 a 1</strong> es una charla individual y periódica entre el líder y cada persona del equipo. Es el momento para hablar de lo que no se habla en grupo: cómo está, qué necesita, cómo quiere crecer.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Periódica: cada 1 o 2 semanas, 15 a 30 minutos</td><td>Que no sea solo cuando hay un problema</td></tr>
        <tr><td>Es de la persona, no tuya</td><td>Ella trae los temas; vos escuchás</td></tr>
        <tr><td>No se cancela por cualquier cosa</td><td>Cancelarla dice "no sos prioridad"</td></tr>
        <tr><td>Confidencial</td><td>Lo que se habla queda ahí</td></tr>
      </table>
      <pre><code>Preguntas útiles para una 1 a 1:
- ¿Cómo estás? ¿Qué tal la semana?
- ¿Qué te está costando o trabando?
- ¿Qué necesitás de mí?
- ¿Qué te gustaría aprender o hacer más?
- ¿Hay algo que yo podría hacer distinto?</code></pre>
      <p>Por ejemplo, la 1 a 1 es muchas veces donde te enterás de que alguien está pensando en irse, a tiempo para hacer algo.</p>` },
    { titulo: "Escuchar y comunicar decisiones", html: `
      <p class="idea">Liderar es en gran parte comunicar: escuchar de verdad lo que dice el equipo y explicar con claridad las decisiones, sobre todo las difíciles.</p>
      <table>
        <tr><th>Escuchar de verdad</th><th>Comunicar una decisión</th></tr>
        <tr><td>Dejar terminar sin interrumpir</td><td>Qué se decidió</td></tr>
        <tr><td>Preguntar antes de opinar</td><td>Por qué se decidió</td></tr>
        <tr><td>Repetir con tus palabras para confirmar</td><td>Qué cambia para cada uno y desde cuándo</td></tr>
        <tr><td>No defenderte enseguida</td><td>Qué no cambia</td></tr>
        <tr><td>Agradecer aunque no estés de acuerdo</td><td>A quién preguntar dudas</td></tr>
      </table>
      <p><strong>Las malas noticias, en persona y pronto:</strong> que el equipo se entere por un rumor es peor que la noticia misma.</p>
      <p><strong>No prometas lo que no depende de vos:</strong> "Voy a plantear lo de los aumentos" en vez de "Seguro que nos aumentan".</p>
      <p>Por ejemplo, anunciar un cambio de horario por un mensaje en el grupo el domingo a la noche genera mucho más enojo que explicarlo el viernes en persona con el porqué.</p>` },
  ],
  practica: [
    "Diseñá una reunión semanal de 30 minutos para un equipo: orden del día con minutos y cómo cerrás con tareas. Anotala.",
    "Hacé una 1 a 1 de práctica con alguien (puede ser un compañero o un familiar) usando 3 de las preguntas. Anotá qué aprendiste que no sabías.",
    "Escribí cómo comunicarías una decisión difícil (por ejemplo, un cambio de horario) con las 5 partes de la tabla. Anotala.",
  ],
  recursos: [
    { t: "Google re:Work: qué hace a un buen líder de equipo (en inglés)", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager" },
    { t: "Harvard Business Review: artículos de liderazgo (en inglés)", url: "https://hbr.org/topic/subject/leadership" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Si convocás una reunión de equipo, ¿qué tiene que tener al final?", opciones: ["Un aplauso","Una nueva reunión sin tema","Tareas claras: qué, quién y para cuándo","Nada"], correcta: 2, explicacion: "Las tareas hacen que la reunión sirva. \"Nada\" tienta si se habló bien, pero sin tareas no pasa nada después." },
    { q: "En la reunión diaria de 10 minutos, ¿qué dice cada persona?", opciones: ["Qué hace hoy y qué la traba","Todo lo que hizo en la semana","Sus problemas personales en detalle","Nada, escucha al líder"], correcta: 0, explicacion: "Lo corto y concreto detecta trabas. Todo lo de la semana tienta, pero se alarga." },
    { q: "Si en las reuniones hablás vos todo el tiempo, ¿qué pasa?", opciones: ["El equipo aprende más","La reunión es más corta","Nada","No te enterás de lo que pasa en el equipo"], correcta: 3, explicacion: "El líder que habla todo no escucha. \"El equipo aprende más\" tienta, pero se desconecta." },
    { q: "En la reunión surge un tema que es solo de dos personas. ¿Qué hacés?", opciones: ["Lo discuten delante de todos","\"Eso lo vemos después vos y yo\"","Lo ignorás para siempre","Terminás la reunión"], correcta: 1, explicacion: "Sacarlo cuida el tiempo de todos. Discutirlo ahí tienta por resolverlo ya, pero los demás esperan." },
    { q: "¿Qué es una reunión 1 a 1?", opciones: ["Una reunión para retar a alguien","Una entrevista de trabajo","Una charla individual y periódica entre el líder y cada persona del equipo","Una reunión con el cliente"], correcta: 2, explicacion: "Es periódica y para la persona. \"Para retar\" tienta porque es individual, pero no es su propósito." },
    { q: "En una 1 a 1, ¿quién trae los temas?", opciones: ["La persona; vos escuchás","Vos, siempre","Recursos Humanos","Nadie, se improvisa"], correcta: 0, explicacion: "Es el espacio de la persona. \"Vos siempre\" tienta por ser el líder, pero se vuelve otra reunión de control." },
    { q: "Tenés mucho trabajo y pensás cancelar las 1 a 1 de esta semana. ¿Qué mensaje das?", opciones: ["Que estás ocupado y está bien","Ninguno","Que confiás en ellas","Que las personas no son prioridad"], correcta: 3, explicacion: "Cancelar seguido dice que no importan. \"Está bien\" tienta por razonable, pero se nota." },
    { q: "En una 1 a 1, una persona te cuenta algo personal. ¿Qué hacés con eso?", opciones: ["Se lo contás al equipo","Lo mantenés confidencial","Lo comentás con tu jefe sin permiso","Lo anotás en el tablero"], correcta: 1, explicacion: "La 1 a 1 es confidencial. Contárselo a tu jefe tienta por transparencia, pero rompe la confianza." },
    { q: "¿Por qué conviene hacer 1 a 1 aunque no haya problemas?", opciones: ["Para llenar la agenda","No conviene","Porque ahí te enterás a tiempo de cosas, como que alguien piensa en irse","Para evaluar el sueldo"], correcta: 2, explicacion: "Periódicas detectan temas antes de que exploten. \"No conviene\" tienta si todo parece bien, pero ahí se entera de lo que no se ve." },
    { q: "Un compañero del equipo te cuenta una queja. ¿Qué hacés primero?", opciones: ["Lo dejás terminar y repetís con tus palabras para confirmar","Te defendés enseguida","Le decís que no es para tanto","Cambiás de tema"], correcta: 0, explicacion: "Escuchar de verdad es lo primero. Defenderte tienta, pero la persona deja de contarte cosas." },
    { q: "Tenés que comunicar un cambio de horario. ¿Cuándo y cómo?", opciones: ["Un mensaje en el grupo el domingo a la noche","Que se enteren por un rumor","Sin explicar el porqué","Pronto y en persona, con qué cambia, por qué y desde cuándo"], correcta: 3, explicacion: "En persona y con el porqué se acepta mejor. El mensaje tienta por rápido, pero genera enojo." },
    { q: "Si el equipo pregunta por aumentos y no depende de vos, ¿qué decís?", opciones: ["\"Seguro que nos aumentan\"","\"Voy a plantear lo de los aumentos\"","\"Ni lo sueñen\"","\"No me importa\""], correcta: 1, explicacion: "No prometas lo que no depende de vos. \"Seguro\" tienta para dejarlos contentos, pero si no pasa, perdés credibilidad." },
  ],
},
{
  id: "feedback",
  icono: "🌱",
  titulo: "Feedback, reconocimiento y motivación",
  nivel: "Intermedio",
  objetivos: [
    "Dar feedback a tu equipo con hechos, impacto y un pedido concreto",
    "Reconocer el buen trabajo de forma específica",
    "Detectar qué motiva a cada persona y cuidar el clima del equipo",
  ],
  lecciones: [
    { titulo: "Dar feedback como líder", html: `
      <p class="idea">El <strong>feedback</strong> es decirle a alguien cómo está haciendo su trabajo para que pueda seguir igual o mejorar. Como líder, es una de tus tareas principales, y conviene darlo seguido, no solo una vez por año.</p>
      <table>
        <tr><th>Paso</th><th>Ejemplo</th></tr>
        <tr><td>Hecho concreto (qué viste)</td><td>"Esta semana el cierre de caja se entregó tarde dos días."</td></tr>
        <tr><td>Impacto (qué causó)</td><td>"El depósito del banco salió tarde y pagamos un recargo."</td></tr>
        <tr><td>Pregunta (qué pasó)</td><td>"¿Qué pasó? ¿Hay algo que te esté complicando?"</td></tr>
        <tr><td>Pedido o acuerdo</td><td>"¿Te parece que la semana que viene lo tengas a las 19?"</td></tr>
      </table>
      <p><strong>Lo que mejorar, en privado; lo bueno, también en público.</strong></p>
      <p><strong>Pronto:</strong> el feedback de algo de hace tres meses no sirve, porque nadie se acuerda de los detalles.</p>
      <p><strong>Sobre la conducta, no sobre la persona:</strong> "llegaste tarde tres veces" y no "sos un irresponsable".</p>
      <p>El curso "Trabajar en equipo" de este sitio tiene más práctica de feedback entre compañeros.</p>
      <p>Por ejemplo, "tenés que mejorar la actitud" no le dice a nadie qué cambiar; "en la reunión interrumpiste a Lucía tres veces" sí.</p>` },
    { titulo: "Reconocer el buen trabajo", html: `
      <p class="idea">El <strong>reconocimiento</strong> es mostrar que viste y valorás el buen trabajo. Es gratis y es de lo que más motiva, pero muchos líderes solo hablan cuando algo sale mal.</p>
      <table>
        <tr><th>Genérico (sirve poco)</th><th>Específico (sirve mucho)</th></tr>
        <tr><td>"Buen trabajo."</td><td>"Gracias por quedarte a ordenar el depósito: el lunes encontramos todo en 5 minutos."</td></tr>
        <tr><td>"Sos genial."</td><td>"El mensaje que le mandaste al cliente enojado fue clarísimo; volvió a comprar."</td></tr>
      </table>
      <p><strong>Qué incluir:</strong> qué hizo, por qué importó y gracias.</p>
      <p><strong>Formas de reconocer:</strong> decirlo en la reunión de equipo, contárselo a tu propio jefe con su nombre, darle una tarea que quería o más autonomía.</p>
      <p><strong>Sé justo:</strong> reconocé a todos los que aportan, no solo a quienes se hacen ver. Los callados también trabajan.</p>
      <p>Por ejemplo, decirle a tu jefe "la idea de las ofertas fue de Pedro" hace más por Pedro que diez "buen trabajo".</p>` },
    { titulo: "Motivación y clima", video: {"id":"qp0HIF3SfI4","t":"Cómo los grandes líderes inspiran la acción · Simon Sinek, TED (18:35, subtítulos en español)"}, html: `
      <p class="idea">No podés "motivar" a alguien a la fuerza, pero sí podés crear las condiciones para que quiera hacer bien su trabajo. Esas condiciones forman el <strong>clima</strong> del equipo.</p>
      <table>
        <tr><th>Lo que suele motivar</th><th>Qué podés hacer vos</th></tr>
        <tr><td>Saber para qué sirve lo que hago</td><td>Explicar el porqué de los objetivos</td></tr>
        <tr><td>Autonomía</td><td>Delegar el resultado, no cada paso</td></tr>
        <tr><td>Aprender y crecer</td><td>Tareas nuevas, capacitación, preguntar en la 1 a 1</td></tr>
        <tr><td>Ser tratado con justicia</td><td>Reglas iguales para todos</td></tr>
        <tr><td>Sentirse seguro para hablar</td><td>No castigar a quien avisa un error</td></tr>
      </table>
      <p><strong>Seguridad psicológica:</strong> el estudio de Google sobre equipos (proyecto Aristóteles) encontró que lo que más distingue a los mejores equipos es que la gente se anima a preguntar, opinar y admitir errores sin miedo.</p>
      <p><strong>A cada uno lo mueve algo distinto:</strong> preguntá en la 1 a 1 qué le gusta de su trabajo y qué le gustaría hacer más.</p>
      <p><strong>Lo que la plata no reemplaza:</strong> un buen sueldo importa, pero no compensa un mal clima por mucho tiempo.</p>
      <p>Por ejemplo, si cuando alguien avisa un error lo retás delante de todos, la próxima vez lo va a esconder.</p>` },
  ],
  practica: [
    "Escribí un feedback de mejora con los 4 pasos para una situación real o imaginaria. Practicalo en voz alta y anotá cuánto dura.",
    "Escribí 3 reconocimientos específicos (qué hizo, por qué importó y gracias) para personas reales. Anotá a cuántas se los dijiste de verdad.",
    "Anotá en una tabla las 5 condiciones que motivan y marcá de 1 a 5 cómo está cada una en un equipo que conozcas.",
  ],
  recursos: [
    { t: "Google re:Work: guías sobre equipos y liderazgo (en inglés)", url: "https://rework.withgoogle.com/" },
    { t: "Google re:Work: qué hace a un buen líder de equipo (en inglés)", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager" },
    { t: "Harvard Business Review: artículos de liderazgo (en inglés)", url: "https://hbr.org/topic/subject/leadership" },
  ],
  quiz: [
    { q: "Si el cierre de caja se entregó tarde dos días, ¿cómo empezás el feedback?", opciones: ["\"Sos un irresponsable\"","\"Siempre llegás tarde con todo\"","Con el hecho concreto: \"esta semana se entregó tarde dos días\"","\"Tenés que mejorar la actitud\""], correcta: 2, explicacion: "El hecho concreto se puede conversar. \"Irresponsable\" tienta por directo, pero ataca a la persona y genera defensa." },
    { q: "Después del hecho y el impacto, ¿qué paso sigue en el feedback?", opciones: ["Preguntar qué pasó","Sancionar","Terminar la charla","Contárselo al equipo"], correcta: 0, explicacion: "Preguntar puede mostrar una causa que no sabías. Sancionar tienta por firme, pero sin escuchar podés equivocarte." },
    { q: "Querés marcarle a alguien algo que tiene que mejorar. ¿Dónde?", opciones: ["En la reunión de equipo","En el grupo de WhatsApp","Delante de los clientes","En privado"], correcta: 3, explicacion: "Lo que mejorar va en privado. En la reunión tienta para que todos aprendan, pero humilla." },
    { q: "Si te acordás de un error de hace tres meses, ¿sirve dar feedback ahora?", opciones: ["Sí, igual que siempre","Poco: el feedback sirve cuando es pronto","Sí, más que antes","Es lo ideal"], correcta: 1, explicacion: "Pasado tanto tiempo, nadie recuerda los detalles. \"Igual que siempre\" tienta, pero llega tarde." },
    { q: "¿Qué tiene un reconocimiento específico?", opciones: ["Solo \"buen trabajo\"","Un premio en plata","Qué hizo, por qué importó y gracias","Una comparación con otro"], correcta: 2, explicacion: "Lo específico muestra que viste el trabajo. \"Buen trabajo\" tienta por rápido, pero dice poco." },
    { q: "La idea de las ofertas fue de Pedro y le fue bien. ¿Qué hacés?", opciones: ["Se lo contás a tu jefe con el nombre de Pedro","Lo presentás como idea tuya","No decís nada","Decís que fue del equipo sin nombrarlo"], correcta: 0, explicacion: "Dar el crédito a quien corresponde motiva mucho. Presentarla como tuya tienta, pero si se sabe, perdés la confianza de todos." },
    { q: "Si solo reconocés a quienes se hacen ver, ¿qué pasa?", opciones: ["Nada","Que todos se esfuerzan más","Que el clima mejora","Que los que trabajan callados se desmotivan"], correcta: 3, explicacion: "El reconocimiento tiene que ser justo. \"Todos se esfuerzan más\" tienta, pero los callados sienten que no los ves." },
    { q: "¿Qué es el clima de un equipo?", opciones: ["La temperatura de la oficina","Las condiciones que hacen que la gente quiera o no hacer bien su trabajo","El sueldo","La cantidad de personas"], correcta: 1, explicacion: "Clima es el ambiente de trabajo. La temperatura tienta por la palabra, pero no es eso." },
    { q: "Según el estudio de Google sobre equipos, ¿qué distingue a los mejores?", opciones: ["Tener a los más talentosos","Trabajar más horas","La seguridad psicológica: animarse a preguntar, opinar y admitir errores","Tener un jefe estricto"], correcta: 2, explicacion: "La seguridad para hablar fue lo más importante. Los más talentosos tienta, pero no alcanzó para explicar los resultados." },
    { q: "Si alguien avisa un error y lo retás delante de todos, ¿qué pasa la próxima vez?", opciones: ["Lo va a esconder","No se va a equivocar más","Lo va a avisar antes","Nada"], correcta: 0, explicacion: "Castigar al que avisa enseña a esconder. \"No se va a equivocar más\" tienta, pero los errores siguen y no te enterás." },
    { q: "Querés saber qué motiva a cada persona. ¿Qué hacés?", opciones: ["Suponés que a todos les motiva lo mismo","Le preguntás a otro","Nada, eso no se puede saber","Le preguntás en la 1 a 1 qué le gusta y qué le gustaría hacer más"], correcta: 3, explicacion: "Preguntar es lo más directo. Suponer que es lo mismo tienta por simple, pero a cada uno lo mueve algo distinto." },
    { q: "El equipo tiene buen sueldo, pero un mal clima. ¿Qué concluís?", opciones: ["Que todo está bien","Que la plata no compensa un mal clima por mucho tiempo","Que hay que bajar el sueldo","Que el clima no importa"], correcta: 1, explicacion: "El sueldo importa, pero no reemplaza el clima. \"Todo está bien\" tienta, pero la gente termina yéndose." },
  ],
},
{
  id: "dificiles",
  icono: "⚠️",
  titulo: "Situaciones difíciles",
  nivel: "Avanzado",
  objetivos: [
    "Encarar un problema de rendimiento con un plan de mejora",
    "Mediar en un conflicto entre dos personas del equipo",
    "Reconocer los límites legales y cuándo escalar a Recursos Humanos",
  ],
  lecciones: [
    { titulo: "Bajo rendimiento", html: `
      <p class="idea">Cuando alguien no rinde, lo peor es no decir nada y esperar. Lo mejor es hablarlo pronto, entender la causa y acordar un plan concreto.</p>
      <table>
        <tr><th>Causa posible</th><th>Qué hacer</th></tr>
        <tr><td>No sabe qué se espera</td><td>Aclarar el objetivo y el resultado esperado</td></tr>
        <tr><td>No sabe cómo hacerlo</td><td>Capacitar, acompañar, darle un compañero de apoyo</td></tr>
        <tr><td>Le falta algo (herramienta, tiempo)</td><td>Conseguirlo o ajustar la carga</td></tr>
        <tr><td>Problema personal</td><td>Escuchar, ver qué flexibilidad se puede dar, derivar a RR. HH. si hace falta</td></tr>
        <tr><td>No quiere</td><td>Ser claro con las consecuencias y documentar</td></tr>
      </table>
      <pre><code>Plan de mejora (por escrito, acordado):
Qué tiene que mejorar:  cierre de caja entregado a las 19
Cómo lo vamos a medir:  hora de entrega cada día
Qué apoyo le doy:       repasar juntos el procedimiento el lunes
Plazo:                  4 semanas, revisamos cada viernes</code></pre>
      <p><strong>Anotá fechas y hechos:</strong> si las cosas no mejoran, vas a necesitar mostrar qué se habló y qué se acordó.</p>
      <p>Por ejemplo, alguien que empezó a llegar tarde todos los días puede estar cuidando a un familiar enfermo; preguntar antes de sancionar cambia la solución.</p>` },
    { titulo: "Conflictos en el equipo", html: `
      <p class="idea">Los conflictos entre personas del equipo son normales. Tu papel no es elegir un ganador, sino ayudar a que lleguen a un acuerdo sobre cómo trabajar.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacer</th></tr>
        <tr><td>1. Escuchar por separado</td><td>Cada uno cuenta su versión, sin el otro</td></tr>
        <tr><td>2. Juntarlos</td><td>En privado, con una regla: hablar de hechos, sin insultos</td></tr>
        <tr><td>3. Buscar el interés común</td><td>"Los dos quieren que el turno salga bien"</td></tr>
        <tr><td>4. Acordar algo concreto</td><td>Quién hace qué y cómo se avisan</td></tr>
        <tr><td>5. Revisar</td><td>A las dos semanas, ver si el acuerdo funciona</td></tr>
      </table>
      <p><strong>Sé neutral:</strong> si uno de los dos es tu amigo, tené más cuidado todavía de no tomar partido.</p>
      <p><strong>No es un conflicto si hay violencia:</strong> gritos, insultos, amenazas, acoso o discriminación no se "median". Se frenan y se escalan (lección siguiente).</p>
      <p>Por ejemplo, dos personas que discuten por quién cierra el local muchas veces tienen un problema de roles, que se arregla con la tabla de roles del módulo "Objetivos claros y roles".</p>` },
    { titulo: "Límites y cuándo escalar", html: `
      <p class="idea">Como líder tenés responsabilidades que van más allá de los resultados: cuidar que nadie del equipo sufra <strong>violencia laboral</strong> y saber cuándo un tema no lo podés resolver solo.</p>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>Acoso, maltrato, discriminación o violencia</td><td>Frenarlo, cuidar a quien lo sufre, escalar a RR. HH. o a tu jefe de inmediato</td></tr>
        <tr><td>Sanciones o despidos</td><td>Siempre con RR. HH.; no las decidas ni anuncies solo</td></tr>
        <tr><td>Salud mental o problemas graves</td><td>Escuchar y derivar; no hagas de psicólogo</td></tr>
        <tr><td>Algo ilegal o peligroso</td><td>Frenarlo y avisar por el canal que tenga la empresa</td></tr>
      </table>
      <p><strong>Lo que un líder no puede hacer:</strong> gritar o humillar, amenazar con el despido, tratar distinto por género, edad, origen u otras características, o pedir cosas fuera de la ley (como trabajar sin registrar horas).</p>
      <p><strong>Dónde consultar en Argentina:</strong> el Ministerio de Trabajo tiene una oficina de asesoramiento sobre violencia laboral (ver recursos); también el sindicato o un abogado laboralista.</p>
      <p class="aviso">Este curso no reemplaza el asesoramiento de Recursos Humanos ni de un abogado. Las normas pueden cambiar: verificá en las fuentes oficiales.</p>
      <p>Por ejemplo, si una persona del equipo te cuenta que un compañero le manda mensajes que la incomodan, no es un conflicto para mediar: es un tema para escalar enseguida y cuidarla.</p>` },
  ],
  practica: [
    "Escribí un plan de mejora con las 4 partes (qué, cómo medirlo, apoyo y plazo) para un caso imaginario. Anotalo con fechas.",
    "Elegí un conflicto que hayas visto en un trabajo y anotá cómo serían los 5 pasos de la mediación.",
    "Buscá cuál es el canal de denuncias o de RR. HH. de tu trabajo (o de uno que conozcas) y anotá a quién escalarías cada situación de la tabla.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: violencia laboral, qué es y dónde consultar", url: "https://www.argentina.gob.ar/trabajo/violencialaboral" },
    { t: "Harvard Business Review: artículos de liderazgo (en inglés)", url: "https://hbr.org/topic/subject/leadership" },
  ],
  quiz: [
    { q: "Alguien del equipo no rinde desde hace un mes. ¿Qué hacés?", opciones: ["Esperás a que se arregle solo","Lo despedís","Lo hablás pronto, entendés la causa y acuerdan un plan","Le cargás menos trabajo sin decir nada"], correcta: 2, explicacion: "Hablarlo pronto da la chance de mejorar. Esperar tienta por evitar el mal momento, pero el problema crece." },
    { q: "Si alguien empezó a llegar tarde todos los días, ¿qué hacés antes de sancionar?", opciones: ["Preguntás qué pasa: puede haber una causa personal","Sancionás enseguida","Lo retás delante de todos","No hacés nada"], correcta: 0, explicacion: "La causa cambia la solución. Sancionar tienta por firme, pero puede estar cuidando a un familiar." },
    { q: "Si la persona no sabe cómo hacer bien la tarea, ¿qué conviene?", opciones: ["Sancionarla","Sacarla del equipo","Hacerlo vos para siempre","Capacitarla y acompañarla"], correcta: 3, explicacion: "Si falta saber, se enseña. Sancionar tienta, pero no le das la herramienta para mejorar." },
    { q: "¿Qué tiene un plan de mejora?", opciones: ["Solo una advertencia","Qué mejorar, cómo medirlo, qué apoyo le das y un plazo","Una lista de errores","La fecha del despido"], correcta: 1, explicacion: "Las cuatro partes lo hacen concreto y justo. Solo advertir tienta por corto, pero no dice qué hacer." },
    { q: "¿Por qué conviene anotar fechas y hechos de un problema de rendimiento?", opciones: ["Para castigar","No conviene","Para mostrar qué se habló y acordó si las cosas no mejoran","Para contárselo al equipo"], correcta: 2, explicacion: "Documentar protege a todos. \"Para castigar\" tienta, pero sirve sobre todo para ser justo y claro." },
    { q: "Si dos personas del equipo están en conflicto, ¿cuál es el primer paso?", opciones: ["Escuchar a cada una por separado","Juntarlas enseguida delante de todos","Elegir quién tiene razón","Ignorarlo"], correcta: 0, explicacion: "Escuchar por separado deja hablar con libertad. Juntarlas tienta por rápido, pero pueden no decir todo." },
    { q: "En un conflicto, uno de los dos es tu amigo. ¿Qué hacés?", opciones: ["Le das la razón a tu amigo","Te retirás y que lo resuelvan","Lo cambiás de turno a él","Tenés más cuidado todavía de ser neutral"], correcta: 3, explicacion: "La neutralidad cuida la confianza del equipo. Darle la razón tienta por amistad, pero el otro lo nota." },
    { q: "Si dos personas discuten siempre por quién cierra el local, ¿qué puede estar fallando?", opciones: ["Que se odian","Los roles: falta definir quién es responsable","El horario del local","Nada, es normal"], correcta: 1, explicacion: "Muchos conflictos son de roles. \"Se odian\" tienta, pero la tabla de roles suele arreglarlo." },
    { q: "Una persona te cuenta que un compañero le manda mensajes que la incomodan. ¿Qué hacés?", opciones: ["Mediás entre los dos","Le decís que no es para tanto","La cuidás y lo escalás enseguida a RR. HH. o a tu jefe","Esperás a ver si sigue"], correcta: 2, explicacion: "El acoso no se media: se frena y se escala. Mediar tienta como en otros conflictos, pero expone a quien lo sufre." },
    { q: "Querés sancionar a alguien del equipo. ¿Cómo lo hacés?", opciones: ["Con RR. HH., sin decidirlo ni anunciarlo solo","Lo anunciás vos en la reunión","Lo decidís solo y avisás después","Le descontás del sueldo"], correcta: 0, explicacion: "Las sanciones tienen reglas legales. Decidirlo solo tienta por rápido, pero podés cometer un error grave." },
    { q: "Si como líder le decís a alguien \"si seguís así te echo\" a los gritos, ¿qué pasa?", opciones: ["Está bien si se lo merece","Es una forma de motivar","No pasa nada","Es maltrato: un líder no puede gritar ni amenazar"], correcta: 3, explicacion: "Gritar y amenazar es violencia laboral. \"Si se lo merece\" tienta por enojo, pero nunca está permitido." },
    { q: "En Argentina, ¿dónde se puede consultar por violencia laboral?", opciones: ["En ningún lado","En la oficina del Ministerio de Trabajo, el sindicato o un abogado laboralista","Solo con el jefe que maltrata","En redes sociales"], correcta: 1, explicacion: "Hay lugares oficiales para consultar. \"Solo con el jefe\" tienta por la jerarquía, pero puede ser parte del problema." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu plan de 90 días",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de 90 días para liderar un equipo real o imaginario",
    "Evaluarlo con una rúbrica y corregir lo que falte",
    "Elegir cómo seguir aprendiendo a liderar",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>plan de 90 días</strong> como líder de un equipo: real (el tuyo) o imaginario (por ejemplo, un local de 5 personas). Junta todo lo del curso en un solo documento.</p>
      <table>
        <tr><th>Parte del plan</th><th>Módulo</th></tr>
        <tr><td>Charla inicial y plan escuchar, ordenar, mejorar</td><td>Empezar: de compañero a líder</td></tr>
        <tr><td>2 o 3 objetivos con número y fecha, y la tabla de roles</td><td>Objetivos claros y roles</td></tr>
        <tr><td>2 tareas para delegar, con las 5 partes</td><td>Delegar</td></tr>
        <tr><td>Calendario de reuniones y de 1 a 1</td><td>Reuniones, 1 a 1 y comunicación</td></tr>
        <tr><td>Cómo vas a dar feedback y reconocer</td><td>Feedback, reconocimiento y motivación</td></tr>
        <tr><td>A quién escalás cada situación difícil</td><td>Situaciones difíciles</td></tr>
      </table>
      <p><strong>Formato:</strong> un documento de 1 o 2 páginas, o una planilla con una hoja por parte.</p>
      <p>Por ejemplo, el plan de una encargada nueva de un local podría tener como objetivo "pasar de 40 a 50 ventas por semana" y delegar el pedido semanal a Lucía.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu plan.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Etapas</td><td>Escuchar, ordenar y mejorar con acciones y fechas</td><td>Etapas sin acciones</td><td>Cambia todo el primer día</td></tr>
        <tr><td>Objetivos</td><td>2 o 3, con número y fecha</td><td>Con número o con fecha</td><td>Vagos</td></tr>
        <tr><td>Roles y delegación</td><td>Un responsable por tarea y delegación con las 5 partes</td><td>A medias</td><td>No hay</td></tr>
        <tr><td>Comunicación</td><td>Reuniones y 1 a 1 con frecuencia definida</td><td>Solo una de las dos</td><td>No hay</td></tr>
        <tr><td>Feedback y reconocimiento</td><td>Cómo y cuándo, con un ejemplo de cada uno</td><td>Uno solo</td><td>No hay</td></tr>
        <tr><td>Límites y respeto</td><td>Sabe a quién escalar y el plan respeta a las personas y la ley</td><td>—</td><td>Algo del plan maltrata, discrimina o es ilegal</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Límites y respeto" tiene 0, el plan no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un plan con objetivos perfectos que propone "controlar el celular de cada empleado" saca 0 en límites y no está listo.</p>` },
    { titulo: "Seguir aprendiendo", html: `
      <p class="idea">Nadie aprende a liderar en un curso: se aprende liderando, pidiendo opinión y corrigiendo. Estas son formas de seguir.</p>
      <table>
        <tr><th>Cómo</th><th>Para qué</th></tr>
        <tr><td>Pedir feedback a tu equipo cada 3 meses</td><td>Saber cómo te ven: "¿Qué hago bien? ¿Qué cambiarías?"</td></tr>
        <tr><td>Un mentor o mentora</td><td>Alguien con más experiencia con quien consultar casos</td></tr>
        <tr><td>Las guías de Google re:Work (en inglés)</td><td>Herramientas para equipos y líderes, gratis</td></tr>
        <tr><td>Artículos de Harvard Business Review</td><td>Ideas y estudios sobre liderazgo</td></tr>
        <tr><td>Otros cursos del sitio</td><td>"Trabajar en equipo", "Organizar el tiempo" y "Gestión de proyectos"</td></tr>
      </table>
      <p><strong>Un diario de liderazgo:</strong> una vez por semana, anotá en 5 minutos una situación difícil, qué hiciste y qué harías distinto.</p>
      <p>Por ejemplo, revisar el diario después de 3 meses muestra en qué mejoraste y en qué seguís trabado.</p>` },
  ],
  practica: [
    "Armá tu plan de 90 días con las 6 partes del encargo. Anotá en qué fecha lo terminaste.",
    "Evaluá tu plan con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Corregí los criterios que sacaron 0 o 1 y volvé a medir. Anotá el puntaje nuevo.",
  ],
  recursos: [
    { t: "Google re:Work: guías sobre equipos y liderazgo (en inglés)", url: "https://rework.withgoogle.com/" },
    { t: "Google re:Work: qué hace a un buen líder de equipo (en inglés)", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager" },
    { t: "Harvard Business Review: artículos de liderazgo (en inglés)", url: "https://hbr.org/topic/subject/leadership" },
  ],
  quiz: [
    { q: "Vas a armar tu plan de 90 días. ¿Qué tiene que incluir?", opciones: ["Solo los objetivos","Solo una lista de reglas","Etapas, objetivos, roles, delegación, comunicación, feedback y a quién escalar","Solo el calendario de reuniones"], correcta: 2, explicacion: "El plan junta todo el curso. Solo los objetivos tienta por ser lo principal, pero falta cómo liderar." },
    { q: "Tu plan propone cambiar todo el primer día. ¿Cuánto saca en \"Etapas\"?", opciones: ["0 puntos","2 puntos","1 punto","No importa"], correcta: 0, explicacion: "Cambiar todo el primer día es el error que las etapas evitan. 1 punto tienta por tener iniciativa, pero la rúbrica marca 0." },
    { q: "Tus objetivos tienen número, pero no fecha. ¿Cuánto sacan?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto"], correcta: 3, explicacion: "Falta la fecha. 2 puntos tienta porque el número está, pero la rúbrica pide las dos cosas." },
    { q: "Tu plan tiene reuniones semanales, pero ninguna 1 a 1. ¿Qué pasa en \"Comunicación\"?", opciones: ["2 puntos","Saca 1 punto: falta una de las dos","0 puntos","No se evalúa"], correcta: 1, explicacion: "La rúbrica pide las dos. Sacar 2 tienta porque hay reuniones, pero sin 1 a 1 falta el espacio individual." },
    { q: "Tu plan suma 11 puntos, pero propone controlar el celular de cada empleado. ¿Está listo?", opciones: ["Sí, 11 es listo","Sí, si los objetivos son buenos","No: \"Límites y respeto\" tiene 0 y eso no se compensa con el total","Depende del equipo"], correcta: 2, explicacion: "La regla de la rúbrica lo dice. \"11 es listo\" tienta por el número, pero un plan que no respeta a las personas no sirve." },
    { q: "Tu plan saca 8. ¿Qué hacés?", opciones: ["Mejorás los criterios que sacaron 0 o 1","Lo das por terminado","Empezás todo de cero","Bajás la exigencia de la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Darlo por terminado tienta, pero todavía le falta." },
    { q: "¿Cómo se aprende a liderar?", opciones: ["Solo con un curso","Naciendo con el talento","Leyendo un libro una vez","Liderando, pidiendo opinión y corrigiendo"], correcta: 3, explicacion: "Se aprende con práctica y feedback. \"Solo con un curso\" tienta, pero el curso es el comienzo." },
    { q: "Querés saber cómo te ve tu equipo como líder. ¿Qué hacés?", opciones: ["Suponés que te ven bien","Pedís feedback cada 3 meses: qué hacés bien y qué cambiarían","Le preguntás solo a tu jefe","Esperás la evaluación anual"], correcta: 1, explicacion: "Preguntar al equipo es lo más directo. Esperar la evaluación anual tienta, pero llega tarde." },
    { q: "¿Para qué sirve un mentor o mentora?", opciones: ["Para que haga tu trabajo","Para evaluar a tu equipo","Para consultar casos con alguien con más experiencia","Para pedir un aumento"], correcta: 2, explicacion: "El mentor aconseja. Que haga tu trabajo tienta por ayuda, pero no es su papel." },
    { q: "¿Qué es un diario de liderazgo?", opciones: ["Anotar cada semana una situación difícil, qué hiciste y qué harías distinto","Una agenda de reuniones","Una lista de errores del equipo","Un diario personal sin relación con el trabajo"], correcta: 0, explicacion: "Sirve para reflexionar y mejorar. La lista de errores del equipo tienta, pero el foco está en lo que hacés vos." },
    { q: "Después de 3 meses revisás tu diario de liderazgo. ¿Qué te muestra?", opciones: ["Nada útil","Quién del equipo falla más","Cuánto vas a cobrar","En qué mejoraste y en qué seguís trabado"], correcta: 3, explicacion: "Ver los casos juntos muestra patrones. \"Quién falla más\" tienta, pero el diario es sobre vos." },
    { q: "Terminaste el curso y querés seguir. ¿Qué es lo más útil?", opciones: ["No hacer nada más","Liderar, pedir feedback, buscar un mentor y usar las guías de re:Work","Hacer el mismo curso otra vez","Esperar a tener más experiencia"], correcta: 1, explicacion: "Seguir aprendiendo es práctica más fuentes. Esperar tienta, pero la experiencia viene liderando." },
  ],
},
];
