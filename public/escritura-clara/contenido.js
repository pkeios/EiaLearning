// Temario del curso "Escribir claro". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js escritura-clara y node tools/metodologia.js escritura-clara
window.TEMARIO = [
{
  id: "empezar",
  icono: "✍️",
  titulo: "Empezar: escribir para que te entiendan",
  nivel: "Básico",
  objetivos: [
    "Explicar qué es el lenguaje claro y por qué importa",
    "Definir para quién escribís y qué tiene que hacer después de leer",
    "Reconocer los problemas más comunes de un texto difícil",
  ],
  lecciones: [
    { titulo: "Qué es el lenguaje claro", video: {"id":"N5mlrIA1Abw","t":"Lenguaje claro · Senado Argentina (7:50)"}, html: `
      <p class="idea">Un texto está en <strong>lenguaje claro</strong> cuando quien lo lee puede encontrar lo que necesita, entenderlo y usarlo a la primera. No es escribir "simple" o "pobre": es escribir pensando en el lector.</p>
      <table>
        <tr><th>Difícil</th><th>Claro</th></tr>
        <tr><td>"Se informa a los señores propietarios que, a los efectos de proceder a la realización de las tareas de mantenimiento del ascensor, el mismo permanecerá fuera de servicio."</td><td>"El ascensor no va a funcionar el martes 12, de 9 a 13, porque lo vamos a arreglar."</td></tr>
      </table>
      <p><strong>Por qué importa:</strong> un texto confuso hace perder tiempo, genera errores y deja afuera a quien no tiene mucha práctica leyendo. En Argentina, varios organismos públicos ya escriben así: la sección "Ley simple" de Derecho fácil explica leyes en lenguaje claro.</p>
      <p><strong>Escribir claro no es fácil:</strong> lleva más trabajo para quien escribe, pero ahorra mucho a quien lee. Y quien lee son muchas personas, muchas veces.</p>
      <p>Por ejemplo, el aviso del ascensor en versión clara dice cuándo, cuánto tiempo y por qué en una sola oración. La versión difícil, con más palabras, no dice ni el día.</p>` },
    { titulo: "Para quién y para qué", html: `
      <p class="idea">Antes de escribir, respondé dos preguntas: <strong>¿quién va a leer esto?</strong> y <strong>¿qué tiene que saber o hacer después?</strong> Todo lo demás sale de ahí.</p>
      <table>
        <tr><th>Texto</th><th>Quién lee</th><th>Qué tiene que hacer</th></tr>
        <tr><td>Aviso del consorcio</td><td>Vecinos de todas las edades</td><td>Saber que no hay ascensor el martes</td></tr>
        <tr><td>Instrucciones de una máquina</td><td>Un compañero nuevo</td><td>Usarla sin lastimarse</td></tr>
        <tr><td>Informe para la jefa</td><td>Alguien con poco tiempo</td><td>Decidir si compra o no</td></tr>
        <tr><td>Nota para la maestra</td><td>La docente</td><td>Saber que tu hijo falta el viernes</td></tr>
      </table>
      <p><strong>Pensá en el lector más apurado o con menos práctica:</strong> si lo entiende esa persona, lo entienden todos.</p>
      <p><strong>Escribí la meta en una oración</strong> antes de empezar: "Quiero que los vecinos sepan que el martes de 9 a 13 no hay ascensor". Si el texto final no cumple esa oración, algo sobra o falta.</p>
      <p>Por ejemplo, un informe para tu jefa que empieza contando cómo hiciste el trabajo la obliga a buscar la conclusión; uno que empieza con "Recomiendo comprar la máquina B" le ahorra tiempo.</p>` },
    { titulo: "Los problemas más comunes", html: `
      <p class="idea">La mayoría de los textos difíciles tienen los mismos problemas. Saber reconocerlos es la mitad del trabajo: el resto del curso enseña a arreglar cada uno.</p>
      <table>
        <tr><th>Problema</th><th>Ejemplo</th><th>Módulo</th></tr>
        <tr><td>Oraciones larguísimas</td><td>Una oración de 60 palabras con tres ideas</td><td>Oraciones cortas</td></tr>
        <tr><td>Palabras difíciles o de más</td><td>"Proceder a la realización de"</td><td>Palabras simples</td></tr>
        <tr><td>Párrafos sin orden</td><td>Ideas mezcladas, sin conectores</td><td>Párrafos</td></tr>
        <tr><td>Lo importante escondido</td><td>El dato clave en el último renglón</td><td>Estructura</td></tr>
        <tr><td>Sin revisar</td><td>Errores, repeticiones, frases que no cierran</td><td>Revisar</td></tr>
      </table>
      <p><strong>Escribir y revisar son dos pasos distintos:</strong> primero escribí todo sin frenarte; después revisá con calma. Si querés hacer las dos cosas a la vez, te trabás.</p>
      <p>Por ejemplo, el primer borrador de un aviso puede tener todos los problemas de la tabla. Está bien: el segundo paso es arreglarlos uno por uno.</p>` },
  ],
  practica: [
    "Buscá un texto difícil de tu vida (un aviso, una factura, un reglamento) y anotá 3 cosas que no se entienden a la primera.",
    "Elegí un texto que tengas que escribir pronto y anotá quién lo va a leer, qué tiene que hacer después y tu meta en una oración.",
    "Revisá un texto tuyo con la tabla de problemas comunes y anotá cuántas veces aparece cada uno.",
  ],
  recursos: [
    { t: "Derecho fácil: leyes explicadas en lenguaje claro", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple" },
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
  ],
  quiz: [
    { q: "¿Qué es un texto en lenguaje claro?", opciones: ["Uno escrito con palabras infantiles","Uno muy corto, sin importar qué dice","Uno que el lector puede encontrar, entender y usar a la primera","Uno con letra grande"], correcta: 2, explicacion: "Lenguaje claro es pensar en el lector. \"Palabras infantiles\" tienta como idea de simple, pero no es escribir pobre." },
    { q: "Tu aviso dice \"a los efectos de proceder a la realización de las tareas de mantenimiento\". ¿Qué le falta?", opciones: ["Decir lo importante simple: qué pasa, cuándo y por qué","Más palabras formales","Un sello","Nada, suena profesional"], correcta: 0, explicacion: "La versión difícil no dice ni el día. Que suena profesional tienta, pero nadie sabe cuándo no hay ascensor." },
    { q: "¿Por qué conviene escribir claro?", opciones: ["Porque es más rápido de escribir","Porque queda más elegante","No conviene","Porque ahorra tiempo, evita errores y no deja afuera a quien lee con menos práctica"], correcta: 3, explicacion: "El esfuerzo de quien escribe ahorra a muchos lectores. Que es más rápido tienta, pero escribir claro lleva más trabajo." },
    { q: "Antes de escribir, ¿qué dos preguntas te hacés?", opciones: ["¿Cuántas páginas? y ¿qué letra uso?","¿Quién va a leer esto? y ¿qué tiene que saber o hacer después?","¿Qué palabras difíciles uso? y ¿cuánto tardo?","¿Quién me lo pidió? y ¿cuándo lo entrego?"], correcta: 1, explicacion: "Lector y propósito guían todo. La cantidad de páginas tienta como dato, pero no dice qué escribir." },
    { q: "Tu aviso va a todos los vecinos del edificio. ¿En quién pensás al escribir?", opciones: ["En el vecino abogado","En vos","En el lector más apurado o con menos práctica","En el administrador"], correcta: 2, explicacion: "Si lo entiende quien tiene menos práctica, lo entienden todos. El abogado tienta porque sabe leer textos formales, pero no es el único." },
    { q: "Escribís un informe para tu jefa. ¿Cómo empezás?", opciones: ["Con la conclusión: \"Recomiendo comprar la máquina B\"","Contando cómo hiciste el trabajo","Con la historia de la empresa","Con un saludo largo"], correcta: 0, explicacion: "Quien tiene poco tiempo quiere la conclusión primero. Contar cómo lo hiciste tienta porque es el orden en que trabajaste." },
    { q: "¿Para qué sirve escribir tu meta en una oración antes de empezar?", opciones: ["Para tener una oración de más","Para el título","No sirve","Para controlar después si el texto la cumple"], correcta: 3, explicacion: "La meta es tu vara para revisar. Usarla de título tienta, pero su función es guiarte." },
    { q: "Tu texto tiene una oración de 60 palabras con tres ideas. ¿Qué problema es?", opciones: ["Palabras difíciles","Oración larguísima","Falta de revisión ortográfica","Ninguno"], correcta: 1, explicacion: "Una oración con tres ideas se pierde. Palabras difíciles tienta, pero el problema principal es el largo." },
    { q: "El dato más importante de tu texto está en el último renglón. ¿Qué problema es?", opciones: ["Oraciones largas","Palabras difíciles","Lo importante escondido","Ninguno, se lee igual"], correcta: 2, explicacion: "Muchos lectores no llegan al final. \"Se lee igual\" tienta, pero quien lee rápido se lo pierde." },
    { q: "¿Conviene escribir y revisar al mismo tiempo?", opciones: ["No: primero escribís todo y después revisás","Sí, así sale perfecto","Sí, es más rápido","No hace falta revisar"], correcta: 0, explicacion: "Son dos pasos distintos. Hacerlo a la vez tienta para no reescribir, pero te trabás y tardás más." },
    { q: "Tu primer borrador tiene oraciones largas y palabras difíciles. ¿Qué pensás?", opciones: ["Que no sabés escribir","Que hay que empezar de cero","Que hay que mandarlo así","Que está bien: el segundo paso es arreglarlos uno por uno"], correcta: 3, explicacion: "Todo borrador tiene problemas. Pensar que no sabés escribir tienta, pero es parte del proceso." },
    { q: "Querés ver un ejemplo de leyes explicadas en lenguaje claro en Argentina. ¿Dónde?", opciones: ["En el Boletín Oficial","En \"Ley simple\" de Derecho fácil","En un contrato de alquiler","En ningún lado"], correcta: 1, explicacion: "Ley simple explica leyes en lenguaje claro. El Boletín Oficial tienta porque publica leyes, pero en lenguaje jurídico." },
  ],
},
{
  id: "oraciones",
  icono: "📏",
  titulo: "Oraciones cortas y directas",
  nivel: "Básico",
  objetivos: [
    "Escribir oraciones de una idea, de unas 20 palabras o menos",
    "Ordenar la oración: quién hace qué",
    "Preferir verbos a sustantivos largos y la voz activa a la pasiva",
  ],
  lecciones: [
    { titulo: "Una idea por oración", html: `
      <p class="idea">Una oración clara dice <strong>una idea</strong>. Si tiene dos o tres, partila. Una referencia útil: alrededor de 20 palabras o menos.</p>
      <pre><code>Larga (45 palabras, 3 ideas):
"Les recordamos que el pago de las expensas debe realizarse antes del
día 10 de cada mes, ya que en caso contrario se aplicará un recargo del
5 %, y que el pago puede efectuarse por transferencia o en efectivo."

Clara (3 oraciones):
"Paguen las expensas antes del 10 de cada mes.
Si pagan después, hay un recargo del 5 %.
Pueden pagar por transferencia o en efectivo."</code></pre>
      <p><strong>Cómo partir una oración larga:</strong> buscá las palabras que unen ideas ("y", "ya que", "por lo cual", "que") y probá poner un punto ahí.</p>
      <p><strong>No todas tienen que ser cortísimas:</strong> mezclar oraciones cortas con alguna un poco más larga hace que el texto no suene a telegrama.</p>
      <p>Por ejemplo, contá las palabras de tu oración más larga: si pasa de 30, casi seguro se puede partir.</p>` },
    { titulo: "Quién hace qué", video: {"id":"7ft-nSTHCEA","t":"Partes de la oración: sujeto, verbo y predicado · LearnFree en Español (3:40)"}, html: `
      <p class="idea">El orden más fácil de leer en castellano es: <strong>quién</strong> (sujeto) + <strong>hace qué</strong> (verbo) + <strong>a qué o a quién</strong> (complemento). Cuando el sujeto y el verbo están lejos, el lector se pierde.</p>
      <table>
        <tr><th>Desordenada</th><th>Ordenada</th></tr>
        <tr><td>"El informe, que fue solicitado por la gerencia la semana pasada y que incluye los datos de ventas de las tres sucursales, fue enviado."</td><td>"Ana envió el informe de ventas que pidió la gerencia."</td></tr>
        <tr><td>"Por parte de la escuela se suspenden las clases."</td><td>"La escuela suspende las clases."</td></tr>
      </table>
      <p>El <strong>sujeto</strong> es quién hace la acción; el <strong>verbo</strong> es la acción.</p>
      <p><strong>Voz activa y voz pasiva:</strong> en la voz activa, el sujeto hace la acción ("El técnico arregló la heladera"). En la pasiva, la acción "le pasa" a algo ("La heladera fue arreglada por el técnico"). La activa es más corta y más clara: preferila.</p>
      <p><strong>Cuidado con el "se" que esconde a quién:</strong> "Se decidió cerrar el local" no dice quién decidió. "La dueña decidió cerrar el local" sí.</p>
      <p>Por ejemplo, "Fue aprobado el presupuesto" deja la duda de quién lo aprobó; "La comisión aprobó el presupuesto" la resuelve.</p>` },
    { titulo: "Verbos en vez de sustantivos largos", html: `
      <p class="idea">Un error muy común es usar un sustantivo largo más un verbo vacío ("realizar la entrega") en vez del verbo directo ("entregar"). Queda más largo y suena más pesado.</p>
      <table>
        <tr><th>Pesado</th><th>Directo</th></tr>
        <tr><td>Realizar la entrega</td><td>Entregar</td></tr>
        <tr><td>Efectuar el pago</td><td>Pagar</td></tr>
        <tr><td>Proceder a la verificación</td><td>Verificar</td></tr>
        <tr><td>Llevar a cabo una reunión</td><td>Reunirse</td></tr>
        <tr><td>Hacer una revisión de</td><td>Revisar</td></tr>
        <tr><td>Tomar la decisión de</td><td>Decidir</td></tr>
      </table>
      <p><strong>Cómo detectarlo:</strong> buscá en tu texto las palabras "realizar", "efectuar", "proceder", "llevar a cabo" y "hacer" seguidas de un sustantivo. Casi siempre hay un verbo más directo.</p>
      <pre><code>Antes: "Procederemos a la realización de la limpieza del tanque."
Después: "Vamos a limpiar el tanque."</code></pre>
      <p>Por ejemplo, "Se efectuará el pago" pasa a "Vamos a pagar" o "Te pagamos": más corto y más claro.</p>` },
  ],
  practica: [
    "Buscá en un texto tuyo (o en un aviso) las 3 oraciones más largas. Contá sus palabras y partilas en oraciones de una idea. Anotá cuántas palabras tiene cada una después.",
    "Reescribí 5 oraciones en voz pasiva o con \"se\" en voz activa, diciendo quién hace la acción. Anotá las dos versiones.",
    "Buscá en un texto las palabras \"realizar\", \"efectuar\", \"proceder\" y \"llevar a cabo\". Reemplazalas por un verbo directo y anotá cuántas encontraste.",
  ],
  recursos: [
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
    { t: "Purdue OWL: escritura concisa (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html" },
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
  ],
  quiz: [
    { q: "Tu oración tiene 45 palabras y tres ideas. ¿Qué hacés?", opciones: ["Le agregás comas","La dejás, está completa","La partís en tres oraciones, una por idea","Le sacás los puntos"], correcta: 2, explicacion: "Una idea por oración. Agregar comas tienta para ordenarla, pero sigue siendo una oración larga." },
    { q: "¿Cuántas palabras conviene que tenga una oración, como referencia?", opciones: ["Alrededor de 20 o menos","Más de 50","Siempre menos de 5","No importa"], correcta: 0, explicacion: "Unas 20 palabras se leen fácil. Menos de 5 tienta por corto, pero el texto suena a telegrama." },
    { q: "Querés partir una oración larga. ¿Dónde probás poner el punto?", opciones: ["En la mitad exacta","Antes del verbo","Al azar","Donde están las palabras que unen ideas: \"y\", \"ya que\", \"por lo cual\""], correcta: 3, explicacion: "Esas palabras marcan el cambio de idea. La mitad exacta tienta por simple, pero puede cortar una idea por la mitad." },
    { q: "¿Cuál es el orden más fácil de leer en castellano?", opciones: ["A quién + quién + qué","Quién + hace qué + a qué o a quién","Qué + cuándo + quién","No importa el orden"], correcta: 1, explicacion: "Sujeto, verbo y complemento. \"No importa\" tienta, pero si sujeto y verbo están lejos el lector se pierde." },
    { q: "¿Qué es el sujeto de una oración?", opciones: ["La acción","El tema del texto","Quién hace la acción","La primera palabra"], correcta: 2, explicacion: "El sujeto es quién hace. La acción tienta, pero es el verbo." },
    { q: "Si escribiste \"La heladera fue arreglada por el técnico\", ¿en qué voz está?", opciones: ["Pasiva","Activa","Imperativa","Ninguna"], correcta: 0, explicacion: "La acción \"le pasa\" a la heladera. Activa tienta porque hay un técnico que actúa, pero está al final." },
    { q: "Si tu texto dice \"Fue aprobado el presupuesto\", ¿cómo lo hacés más claro?", opciones: ["\"El presupuesto ha sido aprobado\"","\"Se aprobó el presupuesto\"","Lo dejás así","\"La comisión aprobó el presupuesto\""], correcta: 3, explicacion: "La voz activa dice quién. \"Se aprobó\" tienta por corto, pero sigue sin decir quién aprobó." },
    { q: "Tu aviso dice \"Se decidió cerrar el local\". ¿Qué le falta?", opciones: ["Más formalidad","Decir quién decidió","Un adjetivo","Nada"], correcta: 1, explicacion: "El \"se\" esconde a quién. \"Nada\" tienta porque se entiende la acción, pero el lector no sabe a quién preguntar." },
    { q: "Si tu texto dice \"Realizar la entrega\", ¿cómo lo escribís de forma directa?", opciones: ["\"Efectuar la entrega\"","\"Llevar a cabo la entrega\"","\"Entregar\"","\"Hacer entrega\""], correcta: 2, explicacion: "El verbo directo es más corto. \"Efectuar la entrega\" tienta por formal, pero es el mismo problema." },
    { q: "Si escribiste \"Procederemos a la realización de la limpieza del tanque\", ¿cómo lo mejorás?", opciones: ["\"Vamos a limpiar el tanque\"","\"Se procederá a limpiar el tanque\"","\"Realizaremos la limpieza del tanque\"","Lo dejás así"], correcta: 0, explicacion: "Verbo directo y quién lo hace. \"Realizaremos la limpieza\" tienta por más corto, pero sigue con el verbo vacío." },
    { q: "Querés encontrar verbos vacíos en tu texto. ¿Qué palabras buscás?", opciones: ["Los adjetivos","Los números","Las comas","\"Realizar\", \"efectuar\", \"proceder\", \"llevar a cabo\" seguidas de un sustantivo"], correcta: 3, explicacion: "Esas palabras suelen esconder un verbo directo. Los adjetivos tientan como sobrantes, pero son otro tema." },
    { q: "¿Conviene que todas las oraciones sean cortísimas?", opciones: ["Sí, cuanto más cortas mejor","No: mezclar cortas con alguna más larga evita que suene a telegrama","Sí, de 5 palabras como máximo","No, conviene que sean largas"], correcta: 1, explicacion: "La variedad hace el texto natural. Cuanto más cortas mejor tienta, pero suena entrecortado." },
  ],
},
{
  id: "palabras",
  icono: "🔤",
  titulo: "Palabras simples y precisas",
  nivel: "Intermedio",
  objetivos: [
    "Elegir la palabra común en vez de la rebuscada",
    "Explicar los términos técnicos y las siglas la primera vez",
    "Sacar las palabras de más y las repeticiones inútiles",
  ],
  lecciones: [
    { titulo: "La palabra común", html: `
      <p class="idea">Si hay una palabra común y una rebuscada que dicen lo mismo, usá la común. No es escribir pobre: es escribir para que te entiendan.</p>
      <table>
        <tr><th>Rebuscada</th><th>Común</th></tr>
        <tr><td>Abonar</td><td>Pagar</td></tr>
        <tr><td>Finalizar</td><td>Terminar</td></tr>
        <tr><td>Adquirir</td><td>Comprar</td></tr>
        <tr><td>Con posterioridad</td><td>Después</td></tr>
        <tr><td>En el día de la fecha</td><td>Hoy</td></tr>
        <tr><td>Solicitar</td><td>Pedir</td></tr>
        <tr><td>A efectos de</td><td>Para</td></tr>
      </table>
      <p><strong>Sé preciso:</strong> claro no es vago. "Pronto" no dice nada; "el jueves" sí. "Algunos vecinos" deja dudas; "los vecinos del tercer piso" no.</p>
      <p><strong>Cuidado con el "lenguaje de oficina":</strong> frases como "Por medio de la presente", "Sin otro particular" o "Quedando a su entera disposición" alargan sin agregar nada.</p>
      <p>Por ejemplo, "Solicitamos abonar con anterioridad al día 10" dice lo mismo que "Paguen antes del 10", con el doble de palabras.</p>` },
    { titulo: "Términos técnicos y siglas", html: `
      <p class="idea">A veces no hay forma de evitar una palabra técnica o una sigla. En ese caso, explicala la primera vez que aparece, con palabras comunes.</p>
      <table>
        <tr><th>Sin explicar</th><th>Explicado</th></tr>
        <tr><td>"Presentar el CBU."</td><td>"Presentar el CBU (el número de 22 dígitos de tu cuenta del banco)."</td></tr>
        <tr><td>"Se requiere el certificado de libre deuda."</td><td>"Necesitás el certificado de libre deuda, un papel que muestra que no debés expensas."</td></tr>
        <tr><td>"Contactar a RR. HH."</td><td>"Contactar a Recursos Humanos (RR. HH.), el área que se ocupa del personal."</td></tr>
      </table>
      <p><strong>Las siglas:</strong> escribí el nombre completo la primera vez y la sigla entre paréntesis; después ya podés usar solo la sigla.</p>
      <pre><code>Primera vez:  Agencia de Recaudación y Control Aduanero (ARCA)
Después:      ARCA</code></pre>
      <p><strong>Pensá en quién lee:</strong> para un grupo de electricistas, "disyuntor" no necesita explicación; para los vecinos, sí ("el disyuntor, la llave que corta la luz si hay una pérdida").</p>
      <p>Por ejemplo, un aviso que dice "Traer DNI y CUIL" puede dejar dudas; "Traer DNI y CUIL (el número que figura en tu recibo de sueldo)" ayuda a quien no sabe dónde buscarlo.</p>` },
    { titulo: "Palabras de más", html: `
      <p class="idea">Muchas frases tienen palabras que repiten lo que ya se dijo. Sacarlas hace el texto más corto y más fuerte. A esto se le llama ser <strong>conciso</strong>.</p>
      <table>
        <tr><th>Con palabras de más</th><th>Conciso</th></tr>
        <tr><td>Subir arriba</td><td>Subir</td></tr>
        <tr><td>Volver a repetir</td><td>Repetir</td></tr>
        <tr><td>Totalmente gratis</td><td>Gratis</td></tr>
        <tr><td>Hace 3 años atrás</td><td>Hace 3 años</td></tr>
        <tr><td>Es por eso que</td><td>Por eso</td></tr>
        <tr><td>En el caso de que</td><td>Si</td></tr>
        <tr><td>Debido al hecho de que</td><td>Porque</td></tr>
      </table>
      <p><strong>Adjetivos y adverbios que no aportan:</strong> "muy importante", "realmente necesario", "absolutamente imprescindible". Si todo es "muy importante", nada lo es.</p>
      <p><strong>Una prueba:</strong> tachá una palabra y leé la frase. Si dice lo mismo, la palabra sobraba.</p>
      <pre><code>"Es muy importante que todos los vecinos sin excepción
 traigan obligatoriamente su DNI."
→ "Todos los vecinos tienen que traer su DNI."</code></pre>
      <p>Por ejemplo, "En el caso de que no puedas venir, avisá" pasa a "Si no podés venir, avisá": cuatro palabras menos y se entiende igual.</p>` },
  ],
  practica: [
    "Buscá en un texto formal (una carta del banco, un aviso) 5 palabras rebuscadas y reemplazalas por palabras comunes. Anotá las dos versiones.",
    "Escribí un párrafo para vecinos sobre un tema técnico (luz, gas, plomería) explicando cada término y sigla la primera vez. Pedile a alguien que lo lea y anotá si quedó alguna duda.",
    "Tomá un texto de unas 100 palabras y sacale todas las palabras de más con la prueba de tachar. Contá las palabras antes y después.",
  ],
  recursos: [
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
    { t: "Purdue OWL: escritura concisa (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html" },
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
  ],
  quiz: [
    { q: "Tu texto dice \"abonar\". ¿Qué palabra común usás?", opciones: ["Efectuar el abono","Cancelar","Pagar","Depositar"], correcta: 2, explicacion: "Pagar es la palabra común. Cancelar tienta porque se usa en bancos, pero confunde con \"anular\"." },
    { q: "Escribiste \"en el día de la fecha\". ¿Cómo lo decís simple?", opciones: ["Hoy","En la fecha del día","En el día de hoy en curso","Lo dejás así"], correcta: 0, explicacion: "\"Hoy\" dice lo mismo. \"En el día de hoy\" tienta como término medio, pero sigue alargando." },
    { q: "Tu aviso dice \"Lo arreglamos pronto\". ¿Qué le falta?", opciones: ["Más palabras amables","Una palabra más formal","Nada","Precisión: decir cuándo, por ejemplo \"el jueves\""], correcta: 3, explicacion: "Claro no es vago. \"Nada\" tienta porque la oración es corta, pero \"pronto\" no dice nada." },
    { q: "Tu carta empieza con \"Por medio de la presente\". ¿Qué hacés?", opciones: ["Lo dejás, es obligatorio","Lo sacás: alarga sin agregar nada","Lo ponés en mayúsculas","Agregás \"Sin otro particular\" al final"], correcta: 1, explicacion: "Es lenguaje de oficina que no aporta. Que es obligatorio tienta como regla, pero no lo es." },
    { q: "Tenés que usar la palabra \"CBU\" en un aviso. ¿Qué hacés la primera vez?", opciones: ["La usás sin explicar, todos saben","La evitás y no pedís el dato","La explicás: \"el número de 22 dígitos de tu cuenta del banco\"","La escribís en minúsculas"], correcta: 2, explicacion: "Explicarla ayuda a quien no la conoce. \"Todos saben\" tienta, pero no es así para todos." },
    { q: "¿Cómo escribís una sigla la primera vez?", opciones: ["El nombre completo y la sigla entre paréntesis","Solo la sigla","Solo el nombre completo, siempre","La sigla en mayúsculas y negrita"], correcta: 0, explicacion: "Nombre completo y sigla, después solo la sigla. Solo la sigla tienta por corta, pero quien no la conoce se pierde." },
    { q: "Si escribís para un grupo de electricistas, ¿hace falta explicar \"disyuntor\"?", opciones: ["Sí, siempre","No, nunca","Solo si es largo el texto","No: lo conocen; para los vecinos, sí"], correcta: 3, explicacion: "Depende de quién lee. \"Siempre\" tienta por prudente, pero a los electricistas les sobra." },
    { q: "¿Qué es ser conciso?", opciones: ["Escribir con palabras difíciles","Decir lo mismo con menos palabras, sin repetir","Escribir textos cortos aunque falte información","Usar muchas siglas"], correcta: 1, explicacion: "Conciso es sin palabras de más. Corto aunque falte información tienta, pero entonces no es claro." },
    { q: "¿Qué sobra en \"subir arriba\"?", opciones: ["\"Subir\"","Nada","\"Arriba\": subir ya es hacia arriba","Hay que agregar \"para\""], correcta: 2, explicacion: "Subir siempre es hacia arriba. \"Nada\" tienta porque se dice mucho, pero repite." },
    { q: "Escribiste \"En el caso de que no puedas venir, avisá\". ¿Cómo lo hacés conciso?", opciones: ["\"Si no podés venir, avisá\"","\"En caso de no poder venir, avise\"","\"Ante la eventualidad de no venir, avisá\"","Lo dejás así"], correcta: 0, explicacion: "\"Si\" reemplaza a \"en el caso de que\". \"En caso de\" tienta por más corto, pero \"si\" es más directo." },
    { q: "Tu texto dice que todo es \"muy importante\". ¿Qué pasa?", opciones: ["Que el lector presta más atención","Nada","Que queda más formal","Que nada se destaca: si todo es muy importante, nada lo es"], correcta: 3, explicacion: "El énfasis pierde fuerza si está en todo. Más atención tienta, pero el lector deja de creerlo." },
    { q: "Querés saber si una palabra sobra. ¿Qué prueba hacés?", opciones: ["Contás las letras","La tachás y leés: si dice lo mismo, sobraba","La buscás en el diccionario","Le preguntás a la IA si es linda"], correcta: 1, explicacion: "La prueba de tachar es rápida y efectiva. El diccionario tienta, pero dice qué significa, no si sobra." },
  ],
},
{
  id: "parrafos",
  icono: "🧱",
  titulo: "Párrafos ordenados y conectados",
  nivel: "Intermedio",
  objetivos: [
    "Armar párrafos de una idea con una oración principal",
    "Unir ideas con conectores que dicen la relación",
    "Ordenar los párrafos para que el texto avance",
  ],
  lecciones: [
    { titulo: "Un párrafo, una idea", video: {"id":"3neCEW378vc","t":"Aprende a redactar tus párrafos · Blog de Lengua (6:49)"}, html: `
      <p class="idea">Un <strong>párrafo</strong> es un grupo de oraciones sobre una misma idea. La primera oración suele decir esa idea (la <strong>oración principal</strong>) y las demás la explican o la apoyan.</p>
      <pre><code>Oración principal:   El tanque de agua necesita una limpieza.
Apoyo (dato):        La última fue hace dos años.
Apoyo (consecuencia): Varios vecinos notaron el agua turbia.
Apoyo (propuesta):   Un plomero puede limpiarlo el sábado por $ 80.000.</code></pre>
      <p><strong>Señales de que un párrafo tiene dos ideas:</strong> en la mitad cambia de tema, o empieza a hablar de otra cosa con "además" sin relación con lo anterior. Partilo.</p>
      <p><strong>Largo:</strong> entre 3 y 6 líneas en pantalla suele ser cómodo. Un bloque de 20 líneas espanta antes de leerlo.</p>
      <p><strong>Si leés solo las primeras oraciones de cada párrafo,</strong> tendrías que entender el texto completo. Es la mejor prueba de que los párrafos están bien armados.</p>
      <p>Por ejemplo, un párrafo que empieza hablando del tanque y termina hablando del portón tiene dos ideas: el portón va en otro párrafo.</p>` },
    { titulo: "Conectores", html: `
      <p class="idea">Los <strong>conectores</strong> son palabras que unen ideas y dicen qué relación tienen: suma, contraste, causa, consecuencia, ejemplo. Bien usados, el lector sigue el razonamiento sin esfuerzo.</p>
      <table>
        <tr><th>Relación</th><th>Conectores</th><th>Ejemplo</th></tr>
        <tr><td>Sumar</td><td>además, también</td><td>"El tanque está sucio. Además, la tapa está rota."</td></tr>
        <tr><td>Contrastar</td><td>pero, sin embargo</td><td>"Es caro, pero evita problemas de salud."</td></tr>
        <tr><td>Causa</td><td>porque, ya que</td><td>"Hay que limpiarlo porque el agua sale turbia."</td></tr>
        <tr><td>Consecuencia</td><td>por eso, entonces</td><td>"Hace dos años que no se limpia. Por eso sale turbia."</td></tr>
        <tr><td>Ejemplo</td><td>por ejemplo</td><td>"Hay señales, por ejemplo, el olor."</td></tr>
        <tr><td>Orden</td><td>primero, después, por último</td><td>"Primero cortamos el agua; después, vaciamos el tanque."</td></tr>
      </table>
      <p><strong>Elegí el conector justo:</strong> "pero" anuncia algo opuesto; si lo usás para sumar, confundís.</p>
      <p><strong>No abuses:</strong> un conector en cada oración cansa. Usalos donde la relación no es obvia.</p>
      <p>Por ejemplo, "Es caro. Evita problemas" deja al lector adivinando la relación; "Es caro, pero evita problemas" la dice.</p>` },
    { titulo: "El orden de los párrafos", html: `
      <p class="idea">Un texto avanza cuando cada párrafo lleva al siguiente. Antes de escribir, armá un <strong>esquema</strong>: una lista con la idea de cada párrafo en el orden en que van.</p>
      <pre><code>Esquema de una nota a los vecinos:
1. Qué proponemos: limpiar el tanque el sábado
2. Por qué: dos años sin limpiar, agua turbia
3. Cuánto sale y cómo se paga: $ 80.000 → $ 4.000 por depto
4. Qué tienen que hacer: juntar agua el viernes a la noche</code></pre>
      <table>
        <tr><th>Orden</th><th>Sirve para</th></tr>
        <tr><td>Lo importante primero</td><td>Avisos, mails, informes</td></tr>
        <tr><td>Cronológico (en el tiempo)</td><td>Contar lo que pasó, instrucciones</td></tr>
        <tr><td>Problema → causa → solución</td><td>Propuestas, reclamos</td></tr>
      </table>
      <p><strong>Transiciones entre párrafos:</strong> la primera oración de un párrafo puede retomar el anterior: "Para hacerlo, el plomero necesita que…".</p>
      <p>Por ejemplo, si leés solo tu esquema y se entiende la historia completa, el orden funciona; si no, falta o sobra un párrafo.</p>` },
  ],
  practica: [
    "Escribí un párrafo con oración principal y 3 oraciones de apoyo sobre un tema de tu barrio o trabajo. Marcá cuál es la principal.",
    "Tomá un texto tuyo y subrayá los conectores. Anotá cuántos hay de cada tipo (sumar, contrastar, causa, consecuencia, ejemplo, orden) y si alguno está mal usado.",
    "Armá el esquema de un texto de 4 párrafos antes de escribirlo. Leelo a alguien y anotá si entendió el texto solo con el esquema.",
  ],
  recursos: [
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
  ],
  quiz: [
    { q: "¿Qué es la oración principal de un párrafo?", opciones: ["La más larga","La última siempre","La que dice la idea del párrafo; las demás la explican","La que tiene más datos"], correcta: 2, explicacion: "La principal dice la idea. La más larga tienta como \"importante\", pero el largo no la define." },
    { q: "Tu párrafo empieza hablando del tanque y termina hablando del portón. ¿Qué hacés?", opciones: ["Lo partís: el portón va en otro párrafo","Le agregás \"además\"","Lo dejás, es del mismo edificio","Sacás lo del portón"], correcta: 0, explicacion: "Un párrafo, una idea. \"Además\" tienta para unirlos, pero siguen siendo dos temas." },
    { q: "¿Cuánto conviene que mida un párrafo en pantalla?", opciones: ["20 líneas o más","Una sola palabra","No importa","Entre 3 y 6 líneas"], correcta: 3, explicacion: "Un bloque largo espanta. \"No importa\" tienta, pero un párrafo de 20 líneas no se lee." },
    { q: "¿Qué prueba muestra que tus párrafos están bien armados?", opciones: ["Contar las comas","Leer solo la primera oración de cada uno y entender el texto","Ver que todos midan igual","Que tengan muchos conectores"], correcta: 1, explicacion: "Las oraciones principales cuentan la historia. Que midan igual tienta por prolijo, pero no dice si se entienden." },
    { q: "¿Qué son los conectores?", opciones: ["Los signos de puntuación","Las palabras difíciles","Palabras que unen ideas y dicen qué relación tienen","Los títulos"], correcta: 2, explicacion: "Los conectores dicen la relación entre ideas. La puntuación tienta porque también une, pero no dice la relación." },
    { q: "Querés decir que algo es caro, pero conviene. ¿Qué conector usás?", opciones: ["Pero","Además","Por eso","Primero"], correcta: 0, explicacion: "\"Pero\" anuncia contraste. \"Además\" tienta, pero suma en vez de oponer." },
    { q: "Querés unir \"Hace dos años que no se limpia\" con \"Sale turbia\". ¿Qué conector usás?", opciones: ["Pero","Por ejemplo","Además","Por eso"], correcta: 3, explicacion: "Es una consecuencia. \"Pero\" tienta, pero anuncia contraste y confunde." },
    { q: "Usaste \"pero\" para sumar una idea parecida. ¿Qué problema hay?", opciones: ["Ninguno","Confundís al lector: \"pero\" anuncia algo opuesto","Que es informal","Que es muy largo"], correcta: 1, explicacion: "Cada conector dice una relación. \"Ninguno\" tienta porque se entiende más o menos, pero el lector espera un contraste." },
    { q: "Si pusiste un conector en cada oración, ¿qué pasa?", opciones: ["Queda mejor","Se entiende más","Cansa: conviene usarlos donde la relación no es obvia","Nada"], correcta: 2, explicacion: "Demasiados conectores cansan. Que se entiende más tienta, pero la lectura se vuelve pesada." },
    { q: "¿Qué es un esquema?", opciones: ["Una lista con la idea de cada párrafo en orden, antes de escribir","Un dibujo","El título del texto","El último párrafo"], correcta: 0, explicacion: "El esquema ordena antes de escribir. El título tienta como resumen, pero no ordena los párrafos." },
    { q: "Vas a escribir instrucciones paso a paso. ¿Qué orden usás?", opciones: ["Lo importante primero","Problema, causa y solución","Alfabético","Cronológico: en el orden en que se hacen"], correcta: 3, explicacion: "Las instrucciones siguen el tiempo. Lo importante primero tienta, pero si el paso 3 va primero se hace mal." },
    { q: "Si escribís un reclamo, ¿qué orden conviene?", opciones: ["Cronológico desde hace 10 años","Problema, causa y solución","Alfabético","Sin orden"], correcta: 1, explicacion: "Problema, causa y solución ordenan un reclamo. Cronológico tienta para contar todo, pero alarga." },
  ],
},
{
  id: "estructura",
  icono: "🗂️",
  titulo: "Estructura: que se lea de un vistazo",
  nivel: "Intermedio",
  objetivos: [
    "Poner lo importante primero con la pirámide invertida",
    "Usar títulos, listas y tablas para que el texto se escanee",
    "Escribir instrucciones paso a paso que se puedan seguir",
  ],
  lecciones: [
    { titulo: "La pirámide invertida", html: `
      <p class="idea">Los diarios escriben con la <strong>pirámide invertida</strong>: lo más importante arriba, los detalles abajo. Así, quien lee solo el principio ya se lleva lo esencial.</p>
      <pre><code>   ┌─────────────────────────────┐
   │ Lo esencial: qué, cuándo,    │  ← lo lee todo el mundo
   │ dónde, qué tenés que hacer   │
   └──┬───────────────────────┬──┘
      │ Detalles y razones     │      ← lo lee quien quiere saber más
      └──┬─────────────────┬──┘
         │ Datos extra      │         ← lo lee poca gente
         └─────────────────┘</code></pre>
      <table>
        <tr><th>Al revés (lo importante al final)</th><th>Pirámide invertida</th></tr>
        <tr><td>"Como saben, el edificio tiene 40 años y las cañerías… (5 líneas)… por eso el sábado no habrá agua."</td><td>"El sábado de 8 a 14 no va a haber agua: arreglamos las cañerías. Junten agua el viernes."</td></tr>
      </table>
      <p><strong>Las cinco preguntas del primer párrafo:</strong> ¿qué?, ¿cuándo?, ¿dónde?, ¿quién? y ¿qué tengo que hacer? Si las respondés arriba, el resto es apoyo.</p>
      <p>Por ejemplo, en un grupo de WhatsApp muchas personas leen solo la vista previa del mensaje: si lo importante está en la primera línea, les llega.</p>` },
    { titulo: "Títulos, listas y tablas", html: `
      <p class="idea">La mayoría de la gente no lee de punta a punta: <strong>escanea</strong>, buscando lo que le interesa. Títulos, listas y tablas ayudan a encontrar rápido.</p>
      <table>
        <tr><th>Recurso</th><th>Cuándo usarlo</th></tr>
        <tr><td>Títulos y subtítulos</td><td>Textos de más de media página; que digan qué hay en cada parte</td></tr>
        <tr><td>Lista con viñetas</td><td>Varias cosas del mismo tipo, sin orden</td></tr>
        <tr><td>Lista numerada</td><td>Pasos o cosas en un orden</td></tr>
        <tr><td>Tabla</td><td>Comparar datos o mostrar varias características</td></tr>
        <tr><td>Negrita</td><td>Lo que no se puede pasar por alto (con moderación)</td></tr>
      </table>
      <pre><code>En un párrafo:
"Para el trámite necesitás traer el DNI, una factura de luz o gas a
tu nombre, el último recibo de sueldo y una foto carnet."

En una lista:
Para el trámite traé:
- DNI
- Una factura de luz o gas a tu nombre
- El último recibo de sueldo
- Una foto carnet</code></pre>
      <p><strong>Títulos que informan:</strong> "Qué traer al trámite" es mejor que "Requisitos"; "El sábado no hay agua" es mejor que "Aviso".</p>
      <p>Por ejemplo, la lista de documentos se puede revisar con una marca en cada línea antes de salir de casa; el párrafo, no.</p>` },
    { titulo: "Instrucciones que se siguen", html: `
      <p class="idea">Unas buenas instrucciones permiten hacer algo sin preguntar. Se escriben en pasos numerados, cada uno con una sola acción y un verbo al principio.</p>
      <pre><code>Cómo cargar la SUBE en el kiosco
1. Llevá la tarjeta SUBE y el efectivo.
2. Decí cuánto querés cargar.
3. Apoyá la tarjeta en el lector cuando te lo pidan.
4. Esperá el sonido y mirá el saldo en la pantalla.
5. Guardá el ticket hasta ver la carga acreditada.</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Un paso, una acción</td><td>Si un paso tiene dos acciones, una se olvida</td></tr>
        <tr><td>Verbo al principio</td><td>"Apoyá la tarjeta" dice qué hacer de entrada</td></tr>
        <tr><td>Avisar antes del paso peligroso</td><td>"Antes de abrir la tapa, desenchufá" (no después)</td></tr>
        <tr><td>Decir cómo saber que salió bien</td><td>"Esperá el sonido"</td></tr>
      </table>
      <p><strong>Probalas con alguien:</strong> dale las instrucciones a una persona que no sabe hacerlo, mirá sin ayudar y anotá dónde se traba. Ahí falta algo.</p>
      <p>Por ejemplo, "Desenchufá antes de limpiar" en el paso 1 protege; si está en el paso 4, alguien ya metió la mano con la máquina enchufada.</p>` },
  ],
  practica: [
    "Reescribí un aviso o un mensaje con la pirámide invertida: las 5 preguntas en el primer párrafo. Anotá cuántas respondías antes y cuántas después.",
    "Tomá un párrafo con una enumeración y pasalo a una lista, con un título que informe. Anotá el título.",
    "Escribí instrucciones de 5 pasos para algo que sepas hacer y probalas con alguien que no sabe. Anotá en qué paso se trabó.",
  ],
  recursos: [
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
    { t: "Derecho fácil: leyes explicadas en lenguaje claro", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple" },
  ],
  quiz: [
    { q: "¿Qué es la pirámide invertida?", opciones: ["Empezar por los detalles y terminar con la conclusión","Poner el título abajo","Escribir lo más importante arriba y los detalles abajo","Escribir en forma de triángulo"], correcta: 2, explicacion: "Lo esencial va primero. Empezar por los detalles tienta porque es el orden en que pasaron las cosas, pero el lector se pierde." },
    { q: "Tu aviso dice al final \"por eso el sábado no habrá agua\". ¿Qué cambiás?", opciones: ["Ponés arriba: \"El sábado de 8 a 14 no va a haber agua\"","Lo ponés en negrita al final","Agregás más explicación antes","Lo dejás así"], correcta: 0, explicacion: "Lo importante arriba se lee seguro. La negrita al final tienta, pero muchos no llegan." },
    { q: "¿Qué preguntas tiene que responder el primer párrafo?", opciones: ["¿Por qué? y ¿desde cuándo?","Solo ¿qué?","¿Cuántas palabras? y ¿qué letra?","¿Qué?, ¿cuándo?, ¿dónde?, ¿quién? y ¿qué tengo que hacer?"], correcta: 3, explicacion: "Las cinco preguntas dan lo esencial. Solo \"¿qué?\" tienta por corto, pero falta cuándo y qué hacer." },
    { q: "Si mandás un mensaje a un grupo de WhatsApp, ¿dónde va lo importante?", opciones: ["Al final, como remate","En la primera línea, que se ve en la vista previa","En un audio","En una foto"], correcta: 1, explicacion: "Muchos leen solo la vista previa. Al final tienta como cierre, pero no les llega." },
    { q: "¿Cómo lee la mayoría de la gente un texto?", opciones: ["De punta a punta, palabra por palabra","Solo el final","Escanea, buscando lo que le interesa","Dos veces siempre"], correcta: 2, explicacion: "La mayoría escanea. Pensar que lee todo tienta, pero por eso ayudan los títulos y las listas." },
    { q: "Tenés que enumerar 4 documentos para un trámite. ¿Cómo los ponés?", opciones: ["En una lista, uno por línea","En un párrafo con comas","En una tabla de una sola columna sin título","En mayúsculas"], correcta: 0, explicacion: "La lista se revisa fácil. El párrafo tienta por compacto, pero un documento se pierde entre comas." },
    { q: "Querés comparar 3 presupuestos con precio, envío y plazo. ¿Qué usás?", opciones: ["Tres párrafos","Una lista con viñetas larga","Un audio","Una tabla"], correcta: 3, explicacion: "La tabla compara de un vistazo. Tres párrafos tientan, pero hay que leerlos y memorizarlos para comparar." },
    { q: "Tu título dice \"Aviso\". ¿Cómo lo mejorás?", opciones: ["\"AVISO IMPORTANTE\"","\"El sábado no hay agua\"","\"Comunicado\"","\"Información\""], correcta: 1, explicacion: "El título que informa dice de qué se trata. \"AVISO IMPORTANTE\" tienta para que lo lean, pero no dice nada." },
    { q: "Si pusiste en negrita la mitad del texto, ¿qué pasa?", opciones: ["Todo se lee mejor","Queda más prolijo","Nada se destaca: la negrita va con moderación","Nada"], correcta: 2, explicacion: "Si todo está resaltado, nada lo está. Que se lee mejor tienta, pero el ojo no sabe dónde ir." },
    { q: "Un paso de tus instrucciones dice \"Desenchufá la máquina y limpiá el filtro con agua tibia\". ¿Qué cambiás?", opciones: ["Lo partís en dos pasos: una acción por paso","Lo dejás, es corto","Le agregás \"rápidamente\"","Lo pasás a un párrafo"], correcta: 0, explicacion: "Un paso, una acción. \"Es corto\" tienta, pero con dos acciones una se olvida." },
    { q: "¿Dónde va el aviso de seguridad en unas instrucciones?", opciones: ["Al final, en letra chica","Después del paso peligroso","No hace falta","Antes del paso peligroso"], correcta: 3, explicacion: "El aviso tiene que llegar antes de actuar. Al final tienta para no asustar, pero ya es tarde." },
    { q: "Querés saber si tus instrucciones funcionan. ¿Qué hacés?", opciones: ["Las leés vos de nuevo","Se las das a alguien que no sabe, mirás sin ayudar y anotás dónde se traba","Le preguntás a alguien si le gustan","Las mandás sin probar"], correcta: 1, explicacion: "Probar con alguien muestra lo que falta. Leerlas vos tienta, pero sabés hacerlo y no ves los huecos." },
  ],
},
{
  id: "revisar",
  icono: "🔍",
  titulo: "Revisar y recortar",
  nivel: "Intermedio",
  objetivos: [
    "Revisar un texto en capas: contenido, orden, oraciones y errores",
    "Recortar sin perder información y escribir un resumen",
    "Usar la lectura en voz alta, otra persona y la IA como ayuda para revisar",
  ],
  lecciones: [
    { titulo: "Revisar en capas", video: {"id":"pJPm2CGTPgc","t":"5 claves para redactar mejor tus textos · Blog de Lengua (8:24)"}, html: `
      <p class="idea">Revisar todo a la vez no funciona: el ojo se pierde. Mejor revisar en <strong>capas</strong>, de lo grande a lo chico, una pasada para cada cosa.</p>
      <table>
        <tr><th>Pasada</th><th>Qué mirás</th><th>Pregunta</th></tr>
        <tr><td>1. Contenido</td><td>Lo que dice</td><td>¿Cumple la meta? ¿Falta o sobra algo?</td></tr>
        <tr><td>2. Orden</td><td>Párrafos y estructura</td><td>¿Lo importante está primero? ¿Cada párrafo tiene una idea?</td></tr>
        <tr><td>3. Oraciones</td><td>Largo, voz activa, verbos</td><td>¿Hay oraciones de más de 30 palabras? ¿Verbos vacíos?</td></tr>
        <tr><td>4. Palabras</td><td>Rebuscadas, de más, siglas</td><td>¿Hay una palabra más común? ¿Algo que tachar?</td></tr>
        <tr><td>5. Errores</td><td>Ortografía, puntuación, nombres y números</td><td>¿Los datos y las fechas están bien?</td></tr>
      </table>
      <p><strong>Dejá reposar el texto:</strong> si podés, revisalo al otro día o al menos después de un rato. Con la cabeza fresca ves lo que antes no veías.</p>
      <p><strong>Leé en voz alta:</strong> donde te trabás o te quedás sin aire, hay una oración para arreglar.</p>
      <p>Por ejemplo, corregir la ortografía de un párrafo que después vas a borrar en la pasada de contenido es tiempo perdido: por eso lo grande va primero.</p>` },
    { titulo: "Recortar y resumir", video: {"id":"wurBExpZiBk","t":"Cómo hacer un buen resumen paso a paso · Profesor Paolo Astorga (7:19)"}, html: `
      <p class="idea">Casi todo primer borrador se puede recortar un tercio sin perder información. Y saber hacer un <strong>resumen</strong> (decir lo esencial en pocas palabras) es una de las habilidades más útiles al escribir.</p>
      <table>
        <tr><th>Qué recortar</th><th>Ejemplo</th></tr>
        <tr><td>Introducciones que no dicen nada</td><td>"Como es de público conocimiento…"</td></tr>
        <tr><td>Repeticiones</td><td>Decir lo mismo en el primer y el último párrafo, con otras palabras</td></tr>
        <tr><td>Detalles que el lector no necesita</td><td>Cómo te enteraste de algo, si no importa</td></tr>
        <tr><td>Palabras de más</td><td>"totalmente gratis", "en el caso de que"</td></tr>
      </table>
      <p><strong>Cómo hacer un resumen:</strong></p>
      <ol>
        <li>Leé el texto completo.</li>
        <li>Subrayá la idea principal de cada párrafo.</li>
        <li>Escribí esas ideas con tus palabras, unidas con conectores.</li>
        <li>Revisá que no agregaste opiniones ni datos que no estaban.</li>
      </ol>
      <p><strong>Una medida:</strong> un resumen suele quedar en un cuarto o menos del texto original.</p>
      <p>Por ejemplo, un reglamento de 2 páginas del consorcio se puede resumir en 6 líneas con lo que más le importa a un vecino nuevo.</p>` },
    { titulo: "Ayudas para revisar", html: `
      <p class="idea">No tenés que revisar solo. Otra persona, el corrector del programa, la IA y los sitios de dudas son ayudas útiles, cada una con su límite.</p>
      <table>
        <tr><th>Ayuda</th><th>Sirve para</th><th>Cuidado</th></tr>
        <tr><td>Otra persona</td><td>Saber si se entiende: "¿Qué entendiste?"</td><td>Elegí a alguien parecido a tu lector</td></tr>
        <tr><td>Corrector del procesador de texto</td><td>Errores de ortografía y algunos de gramática</td><td>No detecta si el texto se entiende</td></tr>
        <tr><td>Inteligencia artificial (IA)</td><td>Proponer versiones más claras, detectar oraciones largas</td><td>Puede cambiar el sentido o inventar datos: revisá todo</td></tr>
        <tr><td>FundéuRAE</td><td>Dudas puntuales de escritura</td><td>Busca la duda concreta</td></tr>
      </table>
      <p><strong>Un pedido útil a la IA:</strong></p>
      <pre><code>Reescribí este aviso en lenguaje claro para vecinos de todas las
edades. Oraciones de menos de 20 palabras. Lo importante primero.
No agregues datos que no estén en el texto. Marcá lo que cambiaste.
[pegar el aviso]</code></pre>
      <p><strong>Nunca pegues datos privados</strong> (nombres, DNI, teléfonos de otras personas) en una IA. El curso de prompts de este sitio explica cómo pedirle bien las cosas.</p>
      <p>Por ejemplo, la pregunta "¿Qué entendiste?" a una persona vale más que diez pasadas del corrector: te dice si el mensaje llegó.</p>` },
  ],
  practica: [
    "Revisá un texto tuyo en las 5 capas de la tabla, una pasada por vez. Anotá cuántos cambios hiciste en cada capa.",
    "Recortá un texto tuyo de unas 200 palabras sin perder información. Contá las palabras antes y después y anotá el porcentaje que sacaste.",
    "Hacé un resumen de un texto largo (una nota, un reglamento) con los 4 pasos. Anotá cuántas palabras tenía el original y cuántas el resumen.",
    "Pedile a una IA una versión clara de un aviso con el modelo de la lección. Anotá qué cambió y si agregó o cambió algún dato.",
  ],
  recursos: [
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
    { t: "Purdue OWL: escritura concisa (en inglés)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html" },
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
  ],
  quiz: [
    { q: "¿Por qué conviene revisar en capas y no todo a la vez?", opciones: ["Porque es más rápido mirar todo junto","Porque lo pide el programa","Porque el ojo se pierde si mira todo junto","No conviene"], correcta: 2, explicacion: "Una pasada para cada cosa ve más. Mirar todo junto tienta por rápido, pero se escapan errores." },
    { q: "¿Qué capa revisás primero?", opciones: ["El contenido: si cumple la meta y si falta o sobra algo","La ortografía","Las comas","El tipo de letra"], correcta: 0, explicacion: "Lo grande primero. La ortografía tienta porque se ve, pero si después borrás el párrafo, perdiste tiempo." },
    { q: "Encontraste una oración de 40 palabras. ¿En qué capa la arreglás?", opciones: ["En la de contenido","En la de errores","En ninguna","En la de oraciones"], correcta: 3, explicacion: "El largo de la oración es de esa capa. Errores tienta porque \"está mal\", pero no es un error ortográfico." },
    { q: "¿Por qué conviene dejar reposar el texto antes de revisarlo?", opciones: ["Para entregarlo tarde","Porque con la cabeza fresca ves lo que antes no veías","Porque se corrige solo","No conviene"], correcta: 1, explicacion: "El descanso da distancia. \"No conviene\" tienta por apuro, pero revisar en caliente deja pasar errores." },
    { q: "Leés tu texto en voz alta y te quedás sin aire en una oración. ¿Qué significa?", opciones: ["Que tenés que respirar mejor","Nada","Que esa oración es demasiado larga y hay que arreglarla","Que hay que leer más rápido"], correcta: 2, explicacion: "Donde te trabás, hay algo para arreglar. Respirar mejor tienta, pero el problema es la oración." },
    { q: "Tu aviso empieza con \"Como es de público conocimiento\". ¿Qué hacés?", opciones: ["Lo recortás: no dice nada","Lo dejás, es formal","Lo ponés en negrita","Lo repetís al final"], correcta: 0, explicacion: "Las introducciones vacías se recortan. Que es formal tienta, pero alarga sin informar." },
    { q: "¿Qué es un resumen?", opciones: ["Copiar el primer párrafo","Dar tu opinión sobre el texto","Hacer una lista de palabras difíciles","Decir lo esencial de un texto en pocas palabras, sin agregar opiniones"], correcta: 3, explicacion: "El resumen dice lo esencial con tus palabras. Copiar el primer párrafo tienta por rápido, pero deja afuera lo demás." },
    { q: "Al hacer un resumen agregaste tu opinión. ¿Qué pasa?", opciones: ["Queda más completo","Ya no es un resumen fiel: hay que sacarla","Está bien si es buena","Nada"], correcta: 1, explicacion: "El resumen no agrega opiniones. Que queda más completo tienta, pero cambia lo que dice el original." },
    { q: "Si el texto original tiene 800 palabras, ¿cuánto suele medir un resumen?", opciones: ["Unas 700","Unas 1.000","Unas 200 o menos","10 palabras siempre"], correcta: 2, explicacion: "Un cuarto o menos del original. 700 tienta para no dejar nada afuera, pero casi no resume." },
    { q: "Querés saber si tu texto se entiende. ¿Qué ayuda es la mejor?", opciones: ["Preguntarle a otra persona: \"¿Qué entendiste?\"","El corrector ortográfico","Contar las palabras","Ponerle más títulos"], correcta: 0, explicacion: "Otra persona te dice si el mensaje llegó. El corrector tienta porque es automático, pero no sabe si se entiende." },
    { q: "Le pediste a la IA una versión clara de tu aviso. ¿Qué revisás?", opciones: ["Nada, la IA no se equivoca","Solo la ortografía","Que sea más largo","Que no haya cambiado el sentido ni inventado datos"], correcta: 3, explicacion: "La IA puede inventar o cambiar datos. \"No se equivoca\" tienta por rápido, pero el aviso lo firmás vos." },
    { q: "Querés que la IA mejore un texto con nombres y DNI de vecinos. ¿Qué hacés?", opciones: ["Lo pegás tal cual","Sacás los datos privados antes de pegarlo","Le pedís a la IA que no los guarde","Solo sacás los nombres"], correcta: 1, explicacion: "Los datos privados no van a la IA. Pedirle que no los guarde tienta, pero no lo podés controlar." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: reescribir un texto difícil",
  nivel: "Avanzado",
  objetivos: [
    "Reescribir un texto real difícil en lenguaje claro",
    "Probarlo con lectores y evaluarlo con una rúbrica",
    "Medir la mejora con datos concretos",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tomar un <strong>texto real difícil</strong> y reescribirlo en lenguaje claro, usando todo el curso. Después lo probás con personas reales.</p>
      <p><strong>Elegí uno de estos (o parecido):</strong></p>
      <ul>
        <li>Un aviso o un reglamento del consorcio, del club o de la escuela.</li>
        <li>Las instrucciones de un aparato o de un trámite.</li>
        <li>Una carta formal que recibiste y que costó entender.</li>
        <li>Un texto de tu trabajo que los clientes no entienden.</li>
      </ul>
      <table>
        <tr><th>Paso</th><th>Módulo</th></tr>
        <tr><td>Lector, propósito y meta en una oración</td><td>Escribir para que te entiendan</td></tr>
        <tr><td>Esquema y pirámide invertida</td><td>Párrafos, Estructura</td></tr>
        <tr><td>Oraciones cortas y en voz activa</td><td>Oraciones</td></tr>
        <tr><td>Palabras comunes, términos explicados, sin palabras de más</td><td>Palabras</td></tr>
        <tr><td>Títulos, listas o tablas donde sirvan</td><td>Estructura</td></tr>
        <tr><td>Revisión en 5 capas</td><td>Revisar</td></tr>
      </table>
      <p><strong>No cambies la información:</strong> el objetivo es que se entienda lo mismo, no que diga otra cosa. Si el texto es legal (un contrato, un reglamento), aclará que tu versión es una guía y que vale el original.</p>
      <p>Por ejemplo, el reglamento de 2 páginas del consorcio puede quedar como "Lo que tenés que saber como vecino", con 5 títulos y listas.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si un trabajo está listo. Usala para evaluar tu versión antes de probarla con lectores.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Lo importante primero</td><td>Las 5 preguntas en el primer párrafo</td><td>Algunas</td><td>Lo importante al final</td></tr>
        <tr><td>Oraciones</td><td>Casi todas de menos de 25 palabras, en voz activa</td><td>Algunas largas</td><td>Muchas de más de 40</td></tr>
        <tr><td>Palabras</td><td>Comunes, términos y siglas explicados</td><td>Alguna palabra rebuscada o sigla sin explicar</td><td>Lenguaje de oficina</td></tr>
        <tr><td>Estructura visual</td><td>Títulos que informan, listas o tablas donde sirven</td><td>Algunos</td><td>Un solo bloque</td></tr>
        <tr><td>Fidelidad</td><td>Dice lo mismo que el original</td><td>Falta un dato menor</td><td>Cambió o inventó información</td></tr>
        <tr><td>Prueba con lectores</td><td>2 personas lo entendieron a la primera</td><td>1 persona</td><td>Nadie lo probó</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios
Si "Fidelidad" sacó 0, no aprueba aunque el total sea alto.</code></pre>
      <p>Por ejemplo, una versión muy clara que dice que el recargo es del 3 % cuando el original dice 5 % no sirve: confunde más que el texto difícil.</p>` },
    { titulo: "Medir la mejora", html: `
      <p class="idea">Para saber si tu versión es mejor, medí. Comparar números del original y de tu versión muestra el avance mejor que cualquier opinión.</p>
      <pre><code>                               Original    Mi versión
Palabras                       620         340
Oración más larga (palabras)   74          22
Promedio de palabras/oración   38          14
Siglas sin explicar            4           0
Tiempo para encontrar "cuándo
  hay que pagar" (2 lectores)  1 min 40 s  8 s</code></pre>
      <p><strong>La prueba más valiosa:</strong> dale a dos personas el original y tu versión (en distinto orden) y hacé la misma pregunta: "¿Cuándo hay que pagar?" o "¿Qué tenés que traer?". Medí cuánto tardan y si aciertan.</p>
      <p><strong>Contalo:</strong> en un trabajo, "Reescribí el instructivo y las consultas de los clientes bajaron a la mitad" es un logro concreto para un CV o una entrevista.</p>
      <p><strong>Seguí practicando:</strong> cada vez que escribas algo para otros (un mail, un aviso, un informe), hacé al menos la pasada de oraciones y la de palabras. Con el tiempo, vas a escribir claro desde el primer borrador.</p>
      <p>Por ejemplo, pasar de 1 minuto 40 segundos a 8 segundos para encontrar un dato muestra, en números, el valor del lenguaje claro.</p>` },
  ],
  practica: [
    "Elegí un texto real difícil y reescribilo con los pasos de la tabla del encargo. Anotá qué texto elegiste y tu meta en una oración.",
    "Evaluá tu versión con la rúbrica y anotá el puntaje de cada criterio y el total sobre 12.",
    "Completá la tabla de medición: palabras, oración más larga, promedio y siglas sin explicar, del original y de tu versión.",
    "Probá las dos versiones con 2 personas haciendo la misma pregunta. Anotá cuánto tardaron y si acertaron con cada una.",
  ],
  recursos: [
    { t: "Derecho fácil: leyes explicadas en lenguaje claro", url: "https://www.argentina.gob.ar/justicia/derechofacil/leysimple" },
    { t: "Digital.gov: guías de lenguaje claro (en inglés)", url: "https://www.plainlanguage.gov/guidelines/" },
    { t: "FundéuRAE: dudas de escritura en español", url: "https://www.fundeu.es/" },
  ],
  quiz: [
    { q: "Al reescribir un texto difícil, ¿qué no podés cambiar?", opciones: ["El orden","Las palabras","La información: tiene que decir lo mismo que el original","El largo de las oraciones"], correcta: 2, explicacion: "Se cambia la forma, no el contenido. El orden tienta como intocable, pero reordenar es justamente lo que ayuda." },
    { q: "Si reescribís el reglamento del consorcio, ¿qué aclarás?", opciones: ["Que tu versión es una guía y que vale el original","Que el original ya no sirve","Nada","Que tu versión es la oficial"], correcta: 0, explicacion: "Un texto legal sigue valiendo en su versión original. Decir que la tuya es oficial tienta, pero no lo es." },
    { q: "¿Qué es una rúbrica?", opciones: ["Un resumen del texto","Un tipo de reglamento","Una lista de palabras difíciles","Una lista de criterios con puntaje para saber si un trabajo está listo"], correcta: 3, explicacion: "La rúbrica muestra qué mejorar. Un resumen tienta porque también es corto, pero no evalúa." },
    { q: "Tu versión tiene muchas oraciones de más de 40 palabras. ¿Cuánto saca \"Oraciones\"?", opciones: ["2","0","1","No se evalúa"], correcta: 1, explicacion: "Muchas de más de 40 es 0. 1 tienta porque \"algunas\", pero la rúbrica dice muchas." },
    { q: "Tu versión dice recargo del 3 % y el original dice 5 %. ¿Qué pasa con la rúbrica?", opciones: ["Pierde un punto y aprueba igual","No importa si se entiende","Fidelidad saca 0 y no aprueba, aunque el total sea alto","Gana puntos por claridad"], correcta: 2, explicacion: "Cambiar información anula el trabajo. Que se entiende tienta, pero confunde más que el original." },
    { q: "Nadie probó tu versión. ¿Cuánto saca \"Prueba con lectores\"?", opciones: ["0","2, si vos la entendés","1","No se evalúa"], correcta: 0, explicacion: "Sin lectores no hay prueba. Que vos la entendés tienta, pero vos ya sabías lo que decía." },
    { q: "Sacaste 9 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Empezás de cero","Cambiás de texto","Mejorás lo que sacó 0 o 1 y volvés a medir"], correcta: 3, explicacion: "Entre 7 y 10 se mejora lo que falló. Empezar de cero tienta, pero desperdicia lo que ya funciona." },
    { q: "¿Por qué conviene medir con números?", opciones: ["Porque queda más largo","Porque muestra el avance mejor que cualquier opinión","Porque lo pide la ley","No conviene"], correcta: 1, explicacion: "Los números son concretos. \"No conviene\" tienta por trabajo extra, pero sin medir no sabés si mejoró." },
    { q: "Tu versión bajó el promedio de 38 a 14 palabras por oración. ¿Qué significa?", opciones: ["Que falta información","Que el texto es peor","Que las oraciones son mucho más cortas y fáciles de leer","Nada"], correcta: 2, explicacion: "Oraciones más cortas se leen mejor. Que falta información tienta, pero eso lo dice el criterio de fidelidad." },
    { q: "¿Cuál es la prueba más valiosa para comparar las dos versiones?", opciones: ["Hacer la misma pregunta a dos personas y medir cuánto tardan y si aciertan","Contar las letras","Preguntar cuál les gusta más","Pasarlas por el corrector"], correcta: 0, explicacion: "Medir si encuentran el dato muestra la claridad real. \"¿Cuál te gusta?\" tienta, pero gustar no es entender." },
    { q: "En tu trabajo reescribiste el instructivo y las consultas bajaron a la mitad. ¿Qué hacés con eso?", opciones: ["Nada, era parte del trabajo","Lo guardás en secreto","Lo olvidás","Lo usás como logro concreto en tu CV o en una entrevista"], correcta: 3, explicacion: "Un resultado con números es un logro. \"Era parte del trabajo\" tienta por humildad, pero muestra lo que sabés hacer." },
    { q: "Terminaste el curso. ¿Qué pasadas conviene hacer siempre que escribas para otros?", opciones: ["Ninguna, ya aprendiste","Al menos la de oraciones y la de palabras","Solo la ortografía","Todas, siempre tres veces"], correcta: 1, explicacion: "Dos pasadas rápidas sostienen el hábito. \"Ya aprendiste\" tienta, pero sin práctica se vuelve a los vicios." },
  ],
},
];
