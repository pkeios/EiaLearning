// Temario del curso "Estudiar con IA sin hacer trampa". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ia-estudiar y node tools/metodologia.js ia-estudiar
window.TEMARIO = [
{
  id: "por-que",
  icono: "🎯",
  titulo: "Aprender o entregar",
  nivel: "Básico",
  objetivos: [
    "Distinguir entre usar la IA para aprender y usarla para entregar sin aprender",
    "Explicar por qué el esfuerzo de pensar es lo que hace que aprendas",
    "Reconocer qué cuenta como trampa según las reglas de cada materia",
  ],
  lecciones: [
    { titulo: "El problema del 10 sin saber nada", video: {"id":"agup9snAhUw","t":"Sacarse un 10 sin saber nada: la educación en la era de ChatGPT · Santiago Bilinkis (18:28)"}, html: `
      <p class="idea">La IA puede hacerte la tarea en segundos. Pero si ella piensa por vos, <strong>la tarea se entrega y vos no aprendés</strong>. Y el examen, el trabajo o la vida te van a pedir lo que no aprendiste.</p>
      <p>En todo el curso acompañamos a <strong>Valen</strong>, que está en primer año de Enfermería en Córdoba. Usa la IA todos los días, pero en el primer parcial se sacó un 4: los trabajos prácticos le salían perfectos y, en el examen, sin la IA, no sabía explicar nada.</p>
      <table>
        <tr><th>Usar la IA para entregar</th><th>Usar la IA para aprender</th></tr>
        <tr><td>"Haceme el resumen del capítulo"</td><td>"Hice este resumen: ¿qué idea importante me falta?"</td></tr>
        <tr><td>"Resolveme el ejercicio 5"</td><td>"No me des la respuesta: dame una pista para el ejercicio 5"</td></tr>
        <tr><td>"Escribime el ensayo"</td><td>"Leé mi ensayo y decime dónde el argumento es flojo"</td></tr>
        <tr><td>Copiás y pegás</td><td>Pensás, escribís vos, y la IA te ayuda a mejorar</td></tr>
      </table>
      <p><strong>La pregunta clave:</strong> después de usar la IA, ¿podrías hacerlo o explicarlo vos solo? Si la respuesta es no, la IA trabajó y vos no aprendiste.</p>
      <p><strong>No es que la IA sea mala:</strong> bien usada, es un tutor disponible a cualquier hora, que explica de mil formas y no se cansa. Este curso es para usarla así.</p>
      <p>Por ejemplo, Valen empezó a hacerse la pregunta clave después de cada uso. Se dio cuenta de que de 10 usos, en 8 la IA había hecho todo. Cambió la forma de pedir y en el segundo parcial se sacó un 8.</p>` },
    { titulo: "Por qué el esfuerzo enseña", video: {"id":"Pka3NixwYmA","t":"La IA en la educación: ¿mejora o perjudica el aprendizaje? · DW Tecnología y mundo digital (5:27)"}, html: `
      <p class="idea">Aprendés cuando tu cabeza <strong>hace el trabajo</strong>: recordar, conectar, equivocarse y corregir. A ese esfuerzo útil se le dice <strong>dificultad deseable</strong>. Si la IA te lo saca, te saca el aprendizaje.</p>
      <table>
        <tr><th>Se siente fácil, enseña poco</th><th>Cuesta más, enseña mucho</th></tr>
        <tr><td>Leer un resumen hecho</td><td>Hacer el resumen vos</td></tr>
        <tr><td>Releer la respuesta correcta</td><td>Intentar responder antes de mirarla</td></tr>
        <tr><td>Ver cómo se resuelve un ejercicio</td><td>Resolver uno parecido solo</td></tr>
        <tr><td>Que te expliquen</td><td>Explicarlo vos a otro</td></tr>
      </table>
      <p><strong>La trampa de la fluidez:</strong> cuando leés una explicación clarita, sentís que entendiste. Pero entender cuando lo leés no es lo mismo que poder hacerlo solo. Por eso estudiar con IA puede dar una falsa sensación de que ya sabés.</p>
      <p><strong>La regla de este curso:</strong> primero intentás vos, después usás la IA. Aunque tu intento salga mal, ese intento es lo que hace que la explicación de la IA te sirva.</p>
      <p>Las técnicas de estudio con más evidencia (practicar recordar, espaciar el estudio, explicar con tus palabras) las ves a fondo en el curso <strong>Aprender a aprender</strong> de este sitio. Acá vas a ver cómo usar la IA para aplicarlas.</p>
      <p>Por ejemplo, Valen leía las explicaciones de la IA y le parecía todo clarísimo. Empezó a cerrar el chat y tratar de escribir la idea de memoria: la mitad de las veces no podía, y ahí sabía qué repasar.</p>` },
    { titulo: "¿Qué es trampa?", html: `
      <p class="idea">No hay una única regla: <strong>cada docente, materia e institución decide</strong> qué uso de la IA está permitido. Trampa es usarla de una forma que no está permitida, o <strong>presentar como propio</strong> algo que no hiciste vos.</p>
      <table>
        <tr><th>Situación</th><th>¿Trampa?</th></tr>
        <tr><td>La consigna dice "sin IA" y la usás para escribir</td><td>Sí</td></tr>
        <tr><td>Usás la IA en un examen sin permiso</td><td>Sí</td></tr>
        <tr><td>Entregás un texto de la IA como si fuera tuyo</td><td>Sí: es plagio</td></tr>
        <tr><td>La usás para que te explique un tema antes de hacer el trabajo</td><td>Casi siempre está permitido, pero preguntá</td></tr>
        <tr><td>La usaste para corregir tu ortografía y lo declarás</td><td>Depende de la consigna: preguntá</td></tr>
      </table>
      <p><strong>Plagio</strong> es presentar como tuyo un texto o una idea de otro (una persona o una IA) sin decir de dónde salió.</p>
      <pre><code>Ante la duda, preguntale al docente:
"¿Puedo usar IA en este trabajo? ¿Para qué cosas sí y para qué no?
¿Tengo que decir cómo la usé?"</code></pre>
      <p><strong>Las consecuencias pueden ser serias:</strong> desaprobar el trabajo, la materia o sanciones de la institución. Y aunque nadie se dé cuenta, la consecuencia principal es otra: no aprendiste.</p>
      <p><strong>Los detectores de IA se equivocan seguido,</strong> así que no confíes en "no me van a descubrir" ni te asustes si te acusan sin razón: guardá tus borradores, que muestran tu proceso.</p>
      <p>Por ejemplo, en una materia de Valen la consigna decía "podés usar IA para buscar ideas, no para redactar". Ella guardó los chats y los borradores, y al entregar agregó una línea contando cómo la había usado.</p>` },
  ],
  practica: [
    "Revisá tus últimos 5 usos de la IA para estudiar y anotá en cuántos podrías hacer o explicar el tema vos solo.",
    "Leé una explicación de la IA, cerrá el chat y escribí la idea de memoria. Anotá qué parte no te salió.",
    "Buscá en la consigna o el programa de una materia qué dice sobre el uso de IA y anotalo. Si no dice nada, anotá la pregunta para tu docente.",
  ],
  recursos: [
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "The Learning Scientists: estrategias de estudio con evidencia (materiales descargables)", url: "https://www.learningscientists.org/downloadable-materials" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Le pedís a la IA \"haceme el resumen del capítulo\" y lo entregás. ¿Qué pasa con tu aprendizaje?", opciones: ["Aprendés igual porque lo leíste","Aprendés más rápido","Casi nada: la IA hizo el trabajo de pensar","Aprendés el doble"], correcta: 2, explicacion: "Aprender necesita que pienses vos. \"Lo leíste\" tienta, pero leer no es lo mismo que hacer." },
    { q: "Querés usar la IA para aprender con un ejercicio difícil. ¿Qué le pedís?", opciones: ["\"No me des la respuesta: dame una pista\"","\"Resolveme el ejercicio\"","\"Dame solo el resultado\"","\"Hacé todos los ejercicios\""], correcta: 0, explicacion: "La pista te deja pensar. \"Resolveme\" tienta por rápido, pero piensa ella." },
    { q: "Después de usar la IA, ¿qué pregunta te hacés?", opciones: ["¿Quedó lindo?","¿Tardé poco?","¿Lo notará el docente?","¿Podría hacerlo o explicarlo yo solo?"], correcta: 3, explicacion: "Esa pregunta mide si aprendiste. \"¿Lo notará?\" tienta, pero no te dice si sabés." },
    { q: "Si leés una explicación clarísima de la IA y sentís que entendiste todo, ¿qué te conviene?", opciones: ["Pasar al tema siguiente","Cerrar el chat y tratar de explicarlo de memoria","Leerla tres veces más","Guardarla para el examen"], correcta: 1, explicacion: "Sentir que entendiste no es poder hacerlo. Releer tienta, pero es la trampa de la fluidez." },
    { q: "¿Qué es una dificultad deseable?", opciones: ["Un tema que nadie entiende","Un examen injusto","Un esfuerzo útil, como recordar sin mirar, que hace que aprendas","Estudiar con sueño"], correcta: 2, explicacion: "Cuesta, pero enseña. \"Examen injusto\" tienta por la palabra dificultad, pero no es eso." },
    { q: "Tenés que estudiar un tema nuevo con IA. ¿En qué orden?", opciones: ["Primero intentás vos, después usás la IA","Primero la IA, después nada","Solo la IA","Primero la IA y después copiás"], correcta: 0, explicacion: "Tu intento hace que la explicación te sirva. \"Primero la IA\" tienta por cómodo." },
    { q: "La consigna dice \"sin IA\" y la usás para redactar. ¿Es trampa?", opciones: ["No, si nadie se da cuenta","No, si cambiás algunas palabras","Depende de la IA","Sí"], correcta: 3, explicacion: "Va contra la regla. Cambiar palabras tienta, pero sigue siendo usarla." },
    { q: "Entregás un texto escrito por la IA como si fuera tuyo. ¿Cómo se llama?", opciones: ["Resumen","Plagio","Investigación","Corrección"], correcta: 1, explicacion: "Es presentar como propio algo de otro. \"Investigación\" tienta, pero no dijiste de dónde salió." },
    { q: "No sabés si podés usar IA en un trabajo. ¿Qué hacés?", opciones: ["La usás y ves qué pasa","No hacés el trabajo","Le preguntás al docente para qué sí y para qué no","Le preguntás a la IA si podés"], correcta: 2, explicacion: "Cada docente decide. Preguntarle a la IA tienta, pero ella no conoce las reglas de tu materia." },
    { q: "Usaste IA de la forma permitida. ¿Qué te protege si te acusan sin razón?", opciones: ["Guardar tus borradores y tus chats","Borrar todo","Negar todo","Un detector de IA"], correcta: 0, explicacion: "Los borradores muestran tu proceso. El detector tienta, pero se equivoca seguido." },
    { q: "Un detector dice que tu texto es \"90% IA\" y lo escribiste vos. ¿Qué sabés de los detectores?", opciones: ["Que nunca fallan","Que leen la mente","Que solo fallan con textos largos","Que se equivocan seguido"], correcta: 3, explicacion: "No son confiables. \"Nunca fallan\" tienta por el número preciso." },
    { q: "Nadie se da cuenta de que la IA hizo tu trabajo. ¿Cuál es la consecuencia principal?", opciones: ["Ninguna","Que no aprendiste lo que te van a pedir después","Que tenés buena nota para siempre","Que la IA aprende por vos"], correcta: 1, explicacion: "El examen y el trabajo te lo van a pedir. \"Ninguna\" tienta si solo mirás la nota." },
  ],
},
{
  id: "como-funciona",
  icono: "🧠",
  titulo: "Qué hace (y qué no) la IA",
  nivel: "Básico",
  objetivos: [
    "Explicar cómo un modelo de lenguaje arma sus respuestas",
    "Reconocer alucinaciones: datos, citas y fuentes inventadas",
    "Decidir para qué tareas de estudio conviene la IA y para cuáles no",
  ],
  lecciones: [
    { titulo: "Un predictor de palabras muy bueno", html: `
      <p class="idea">ChatGPT, Gemini, Claude y otros son <strong>modelos de lenguaje</strong>: programas entrenados con muchísimos textos que escriben <strong>prediciendo qué palabra viene después</strong>. No buscan la verdad: arman la respuesta más probable.</p>
      <pre><code>"El corazón tiene cuatro ___"
  → "cavidades" (muy probable)
  → "aurículas" (menos probable)
  → "ventanas" (muy poco probable)
El modelo elige palabra por palabra lo más probable según lo que aprendió.</code></pre>
      <table>
        <tr><th>Por eso es bueno para...</th><th>Y por eso puede fallar en...</th></tr>
        <tr><td>Explicar temas muy conocidos de muchas formas</td><td>Datos poco conocidos o muy recientes</td></tr>
        <tr><td>Dar ejemplos, analogías y preguntas</td><td>Citas, autores y páginas exactas</td></tr>
        <tr><td>Revisar la redacción de tu texto</td><td>Cuentas largas sin una herramienta de cálculo</td></tr>
        <tr><td>Resumir un texto que le pasás</td><td>Saber lo que dijo tu docente en clase</td></tr>
      </table>
      <p><strong>Escribe con seguridad aunque se equivoque:</strong> el tono convencido no es una garantía. Una respuesta mal puede sonar igual de segura que una bien.</p>
      <p><strong>Lo que aprendió tiene fecha:</strong> los modelos se entrenan con textos hasta cierto momento. Algunos buscan en internet, otros no. Preguntale si busca o no, y para datos actuales usá fuentes de la fecha.</p>
      <p>Por ejemplo, Valen le preguntó a la IA cuántos huesos tiene el cuerpo humano y respondió bien (206). Después le preguntó qué dijo su profesora en el teórico del martes y la IA inventó una respuesta convincente.</p>` },
    { titulo: "Alucinaciones", video: {"id":"AJaKAJilf7Q","t":"¿Qué es alucinación de IA? · Computer Hoy (3:04)"}, html: `
      <p class="idea">Una <strong>alucinación</strong> es cuando la IA inventa algo que suena real: un dato, una fecha, un autor, una cita o un libro que no existe. No miente a propósito: completa con lo que "suena" bien.</p>
      <table>
        <tr><th>Alucinación típica</th><th>Ejemplo</th><th>Cómo la detectás</th></tr>
        <tr><td>Bibliografía inventada</td><td>Un libro con autor, editorial y año que no existe</td><td>Buscalo en la biblioteca o en Google Académico</td></tr>
        <tr><td>Citas textuales falsas</td><td>"Como dijo Freud: ..." (nunca lo dijo)</td><td>Buscá la frase exacta entre comillas</td></tr>
        <tr><td>Datos y cifras</td><td>Un porcentaje preciso sin fuente</td><td>Pedí la fuente y verificala</td></tr>
        <tr><td>Pasos que se saltean</td><td>Un ejercicio de matemática con un error en el medio</td><td>Resolvelo vos o rehacé las cuentas</td></tr>
      </table>
      <pre><code>Regla de oro para estudiar:
Todo lo que vas a ESTUDIAR, ENTREGAR o CITAR
se verifica en una fuente confiable:
el apunte de la cátedra, el libro, un sitio oficial.</code></pre>
      <p><strong>Pedirle la fuente no alcanza:</strong> la IA puede inventar también la fuente. Hay que abrirla y comprobar que dice lo que la IA dice que dice.</p>
      <p><strong>Las alucinaciones son más frecuentes</strong> en temas raros, muy específicos o recientes. En temas generales y muy conocidos, la IA acierta más, pero igual puede fallar.</p>
      <p>Por ejemplo, Valen pidió bibliografía para un trabajo y la IA le dio 5 libros. Buscó cada uno en el catálogo de la biblioteca de la facultad: 2 no existían.</p>` },
    { titulo: "Para qué sí y para qué no", html: `
      <p class="idea">La IA es una herramienta más del estudio. Úsala donde <strong>te hace pensar más</strong>, y evitala donde <strong>te reemplaza</strong> o donde un error es caro.</p>
      <table>
        <tr><th>Usos que suman</th><th>Usos riesgosos</th></tr>
        <tr><td>Que te explique un tema de otra forma</td><td>Que te haga el trabajo</td></tr>
        <tr><td>Que te tome preguntas de práctica</td><td>Usar sus datos sin verificar</td></tr>
        <tr><td>Que te dé una pista cuando te trabás</td><td>Copiar la respuesta de un ejercicio</td></tr>
        <tr><td>Que critique tu borrador</td><td>Que escriba tu borrador</td></tr>
        <tr><td>Que te arme un plan de estudio</td><td>Que decida qué entra en el examen</td></tr>
        <tr><td>Que te ayude a organizar tus apuntes</td><td>Reemplazar las clases y la bibliografía</td></tr>
      </table>
      <p><strong>En temas de salud, derecho y plata,</strong> la IA te ayuda a entender, pero un error puede tener consecuencias reales. Para tu formación en Enfermería, por ejemplo, lo que vale es lo que dice la cátedra y la bibliografía oficial.</p>
      <p><strong>Tu docente es la fuente principal</strong> de qué hay que saber y cómo. La IA no sabe qué se dio en tu clase ni cómo corrige tu profesora.</p>
      <p>Para aprender a escribirle bien a la IA, está el curso <strong>Prompts desde cero</strong> de este sitio.</p>
      <p>Por ejemplo, Valen usaba la IA para calcular dosis de medicamentos de los ejercicios. Su docente le explicó que en ese tema un error es grave: ahora hace las cuentas ella con la fórmula de la cátedra y usa la IA solo para que le explique la fórmula.</p>` },
  ],
  practica: [
    "Preguntale a la IA algo de un tema que ya sepas bien y anotá si hubo algún error.",
    "Pedile a la IA 3 libros sobre un tema de tu materia y buscalos en un catálogo de biblioteca. Anotá cuántos existen.",
    "Hacé tu lista de 3 usos que suman y 3 usos riesgosos de la IA en tu carrera o tu escuela.",
  ],
  recursos: [
    { t: "Microsoft Learn: fundamentos de la IA generativa (curso gratis en castellano)", url: "https://learn.microsoft.com/es-es/training/modules/explore-generative-ai/" },
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "The Learning Scientists: estrategias de estudio con evidencia (materiales descargables)", url: "https://www.learningscientists.org/downloadable-materials" },
  ],
  quiz: [
    { q: "Si le preguntás algo a la IA, ¿cómo arma la respuesta?", opciones: ["Buscando siempre en internet","Consultando a un experto","Prediciendo palabra por palabra lo más probable","Leyendo tu apunte"], correcta: 2, explicacion: "Es un modelo de lenguaje. \"Busca en internet\" tienta, pero no todas lo hacen." },
    { q: "Si la IA te responde con mucha seguridad, ¿qué te garantiza?", opciones: ["Nada: puede sonar segura y estar equivocada","Que es correcto","Que lo buscó en un libro","Que lo revisó un docente"], correcta: 0, explicacion: "El tono no es garantía. \"Es correcto\" tienta por lo convincente." },
    { q: "Le preguntás qué dijo tu profesora en el teórico del martes. ¿Qué pasa?", opciones: ["Lo sabe porque está en internet","Te dice la verdad siempre","Te pide el audio","No lo puede saber y puede inventar una respuesta"], correcta: 3, explicacion: "No estuvo en tu clase. \"Está en internet\" tienta, pero tu clase no lo está." },
    { q: "Necesitás un dato de este mes. ¿Qué hacés?", opciones: ["Le creés a la IA","Lo buscás en una fuente actual: la IA puede tener datos viejos","Le preguntás dos veces","Lo inventás"], correcta: 1, explicacion: "Los modelos se entrenan hasta cierta fecha. Preguntar dos veces tienta, pero puede repetir el error." },
    { q: "La IA te da un libro con autor, editorial y año. ¿Qué hacés antes de citarlo?", opciones: ["Lo citás directo","Le preguntás a la IA si existe","Lo buscás en un catálogo de biblioteca o en Google Académico","Lo copiás de otro trabajo"], correcta: 2, explicacion: "Puede ser una alucinación. Preguntarle si existe tienta, pero puede volver a inventar." },
    { q: "¿Qué es una alucinación de la IA?", opciones: ["Algo inventado que suena real: un dato, un autor o una cita","Un error de ortografía","Que la IA se apague","Una imagen rara"], correcta: 0, explicacion: "Inventa con tono convincente. Ortografía tienta, pero es otro tipo de error." },
    { q: "Si la IA te da una cita textual de un autor famoso, ¿cómo la verificás?", opciones: ["Confiando en la IA","Preguntando a un amigo","Viendo si suena lógica","Buscando la frase exacta entre comillas en una fuente confiable"], correcta: 3, explicacion: "Las citas falsas son muy comunes. \"Si suena lógica\" tienta, pero se inventan frases lógicas." },
    { q: "Si le pediste la fuente de un dato y te la dio, ¿alcanza?", opciones: ["Sí, ya tiene fuente","No: hay que abrirla y ver que dice eso","Sí, si es un sitio conocido","Sí, si es en inglés"], correcta: 1, explicacion: "La fuente también puede estar inventada. \"Ya tiene fuente\" tienta, pero no la comprobaste." },
    { q: "Querés que la IA te ayude a pensar más, no menos. ¿Qué le pedís?", opciones: ["Que te haga el trabajo","Que te dé las respuestas del examen","Que te tome preguntas de práctica","Que escriba tu borrador"], correcta: 2, explicacion: "Las preguntas te hacen recordar. Que escriba el borrador tienta, pero te reemplaza." },
    { q: "Estudiás Enfermería y tenés que calcular dosis. ¿Cómo usás la IA?", opciones: ["Para que te explique la fórmula, y hacés las cuentas vos con lo de la cátedra","Para que calcule las dosis por vos","No la usás nunca para nada","Para inventar una fórmula más fácil"], correcta: 0, explicacion: "Un error es grave y la fuente es la cátedra. Que calcule por vos tienta, pero no aprendés y puede fallar." },
    { q: "¿Quién define qué tenés que saber para un examen?", opciones: ["La IA","Un video de YouTube","Tus compañeros","Tu docente y el programa de la materia"], correcta: 3, explicacion: "El docente es la fuente principal. La IA tienta porque responde todo, pero no conoce tu materia." },
    { q: "Querés organizar tus apuntes desordenados. ¿Es un buen uso de la IA?", opciones: ["No, nunca","Sí, siempre que revises que no cambie ni invente contenido","Sí, y no hace falta revisar","Solo si son pocos"], correcta: 1, explicacion: "Ordenar suma, pero puede cambiar algo. \"No hace falta revisar\" tienta, pero puede inventar." },
  ],
},
{
  id: "tutor",
  icono: "🧑‍🏫",
  titulo: "La IA como tutor",
  nivel: "Intermedio",
  objetivos: [
    "Pedir explicaciones a tu nivel, con ejemplos y analogías",
    "Usar el modo de preguntas: que la IA te guíe en lugar de responderte",
    "Pedir pistas graduales cuando te trabás con un ejercicio",
  ],
  lecciones: [
    { titulo: "Explicaciones a tu medida", video: {"id":"IpVKCOTMx0Q","t":"7 trucos para estudiar con ayuda de la inteligencia artificial · Xataka (7:45)"}, html: `
      <p class="idea">La gran ventaja de la IA como tutor es que te explica <strong>a tu nivel</strong> y de las formas que necesites. Para eso, contale <strong>qué sabés, qué no entendés y cómo querés que te explique</strong>.</p>
      <pre><code>Prompt de explicación:
"Soy estudiante de primer año de Enfermería. Estoy estudiando
el sistema circulatorio. Entiendo qué es una arteria, pero no
entiendo la diferencia entre la circulación mayor y la menor.
Explicámelo en 5 oraciones simples, con una analogía de la vida
diaria, y después haceme una pregunta para ver si entendí."</code></pre>
      <table>
        <tr><th>Le contás...</th><th>Para que...</th></tr>
        <tr><td>Tu nivel (año, materia)</td><td>No te explique ni muy fácil ni muy difícil</td></tr>
        <tr><td>Qué ya sabés</td><td>Parta de ahí</td></tr>
        <tr><td>Qué no entendés, puntual</td><td>No te repita todo el tema</td></tr>
        <tr><td>El formato (corto, con ejemplo, con analogía)</td><td>Te sirva para estudiar</td></tr>
        <tr><td>Que te haga una pregunta al final</td><td>Compruebes si entendiste de verdad</td></tr>
      </table>
      <p>Una <strong>analogía</strong> es explicar algo comparándolo con otra cosa conocida: "el corazón es como una bomba que empuja el agua por dos circuitos de caños".</p>
      <p><strong>Si no entendés, pedí otra forma:</strong> "explicámelo de otra manera", "dame un ejemplo con números", "hacelo más corto". Un tutor humano se cansa; la IA no.</p>
      <p>Por ejemplo, Valen leyó tres veces el apunte sobre circulación sin entender. Con el prompt de arriba y una analogía de caños de agua, lo entendió, y la pregunta del final le mostró que confundía las venas pulmonares.</p>` },
    { titulo: "Que te pregunte en vez de responderte", html: `
      <p class="idea">En el <strong>modo de preguntas</strong> (o método socrático), le pedís a la IA que <strong>no te dé la respuesta</strong> y te guíe con preguntas para que llegues vos. Es más lento, pero es justo lo que hace que aprendas.</p>
      <pre><code>Prompt de modo de preguntas:
"Quiero entender por qué el agua hierve a menos temperatura
en la montaña. No me expliques la respuesta. Haceme una pregunta
por vez para que yo llegue solo. Si me equivoco, no me corrijas
directo: haceme otra pregunta que me ayude a ver el error."</code></pre>
      <table>
        <tr><th>Modo respuesta</th><th>Modo preguntas</th></tr>
        <tr><td>Rápido</td><td>Más lento</td></tr>
        <tr><td>Leés una explicación</td><td>Pensás y respondés vos</td></tr>
        <tr><td>Sentís que entendiste</td><td>Sabés si entendiste</td></tr>
        <tr><td>Te olvidás rápido</td><td>Lo recordás más</td></tr>
      </table>
      <p><strong>El nombre viene de Sócrates,</strong> un filósofo griego que enseñaba haciendo preguntas en lugar de dar respuestas.</p>
      <p><strong>Algunas herramientas tienen un modo estudio</strong> o modo tutor que hace esto solo. Si la tuya no lo tiene, el prompt de arriba funciona en cualquiera.</p>
      <p><strong>Respondé de verdad:</strong> si escribís "no sé" a todo, la IA termina explicando. Arriesgá una respuesta aunque no estés seguro: equivocarse es parte.</p>
      <p>Por ejemplo, Valen usó el modo de preguntas para entender la presión arterial. Tardó 15 minutos en lugar de 2, pero una semana después todavía podía explicarlo; lo que había leído rápido, no.</p>` },
    { titulo: "Pistas, no soluciones", html: `
      <p class="idea">Cuando te trabás con un ejercicio, pedí <strong>pistas de a una</strong>, de la más chica a la más grande. Así hacés vos la mayor parte del trabajo y la IA te destraba solo lo necesario.</p>
      <pre><code>Prompt de pistas graduales:
"Estoy resolviendo este ejercicio: [pegás el ejercicio].
Hice esto: [pegás lo que hiciste].
No me des la solución. Dame la pista más chica posible
para que pueda seguir. Si después de intentarlo sigo trabado,
te pido otra."</code></pre>
      <table>
        <tr><th>Nivel de pista</th><th>Ejemplo (un problema de porcentajes)</th></tr>
        <tr><td>1. Hacia dónde mirar</td><td>"Fijate qué cantidad es el 100% en este problema."</td></tr>
        <tr><td>2. Qué herramienta usar</td><td>"Probá con una regla de tres."</td></tr>
        <tr><td>3. El primer paso</td><td>"Planteá: si 80 es el 100%, ¿cuánto es el 15%?"</td></tr>
        <tr><td>4. Revisar tu error</td><td>"Revisá la segunda línea: ¿dividiste por el número correcto?"</td></tr>
      </table>
      <p><strong>Pegá siempre lo que hiciste:</strong> así la IA ve dónde te trabaste. Si solo pegás el ejercicio, tiende a resolverlo entero.</p>
      <p><strong>Al terminar, hacé uno parecido sin ayuda.</strong> Si te sale, aprendiste; si no, todavía dependés de la pista.</p>
      <p>Por ejemplo, Valen estaba trabada con un problema de concentraciones. Con dos pistas lo resolvió sola, y después hizo otro igual sin ayuda: le salió a la primera.</p>` },
  ],
  practica: [
    "Pedí una explicación de un tema que te cueste con el prompt de explicación (nivel, qué sabés, qué no, formato) y anotá si la pregunta final te salió bien.",
    "Usá el modo de preguntas durante 10 minutos con un tema de tu materia y anotá cuántas preguntas respondiste solo.",
    "Resolvé un ejercicio pidiendo pistas graduales y después uno parecido sin ayuda. Anotá cuántas pistas usaste y si el segundo te salió.",
  ],
  recursos: [
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "Microsoft Learn: fundamentos de la IA generativa (curso gratis en castellano)", url: "https://learn.microsoft.com/es-es/training/modules/explore-generative-ai/" },
  ],
  quiz: [
    { q: "Querés que la IA te explique un tema a tu nivel. ¿Qué le contás?", opciones: ["Solo el nombre del tema","Tu nombre y tu edad","Tu nivel, qué sabés, qué no entendés y cómo querés la explicación","Nada, que adivine"], correcta: 2, explicacion: "Con contexto te explica justo lo que necesitás. Solo el tema tienta por rápido, pero repite todo." },
    { q: "La explicación de la IA no te quedó clara. ¿Qué hacés?", opciones: ["Le pedís otra forma: más corta, con un ejemplo o una analogía","Te rendís con el tema","Copiás la explicación igual","Le pedís la misma explicación"], correcta: 0, explicacion: "La IA puede explicar de muchas formas. La misma explicación tienta, pero no te va a ayudar." },
    { q: "¿Qué es una analogía?", opciones: ["Un resumen","Una pregunta de examen","Una cita textual","Explicar algo comparándolo con otra cosa conocida"], correcta: 3, explicacion: "Ejemplo: el corazón como una bomba. Un resumen tienta, pero es otra cosa." },
    { q: "Querés comprobar si entendiste una explicación. ¿Qué le pedís al final?", opciones: ["Que te felicite","Que te haga una pregunta","Que lo resuma otra vez","Que te dé la nota"], correcta: 1, explicacion: "Responder te muestra si entendiste. Otro resumen tienta, pero lo leés y no lo comprobás." },
    { q: "Querés que la IA te guíe para que llegues vos a la respuesta. ¿Qué modo usás?", opciones: ["El modo respuesta rápida","Pedirle un resumen","El modo de preguntas: una pregunta por vez, sin darte la respuesta","Pedirle la solución completa"], correcta: 2, explicacion: "Te hace pensar a vos. La solución completa tienta por rápida, pero piensa ella." },
    { q: "Si en el modo de preguntas respondés \"no sé\" a todo, ¿qué pasa?", opciones: ["La IA termina explicando y vos no pensaste","Aprendés igual","La IA se enoja","Se termina el chat"], correcta: 0, explicacion: "Hay que arriesgar respuestas. \"Aprendés igual\" tienta, pero no hiciste el esfuerzo." },
    { q: "El modo de preguntas tarda más. ¿Por qué vale la pena?", opciones: ["No vale la pena","Porque la IA cobra menos","Porque es más divertido siempre","Porque recordás más y sabés si de verdad entendiste"], correcta: 3, explicacion: "El esfuerzo hace que dure. \"No vale la pena\" tienta por el tiempo, pero lo rápido se olvida." },
    { q: "Si te trabaste con un ejercicio, ¿qué le pedís a la IA?", opciones: ["La solución completa","La pista más chica posible para seguir","Que lo haga y te explique después","Que te dé otro ejercicio más fácil y listo"], correcta: 1, explicacion: "Las pistas de a una te dejan hacer el trabajo. La solución tienta por rápida." },
    { q: "Si pegás el ejercicio sin lo que hiciste, ¿qué suele pasar?", opciones: ["Te da una pista perfecta","Te pregunta cómo te llamás","La IA tiende a resolverlo entero","No responde"], correcta: 2, explicacion: "Sin tu intento, no sabe dónde te trabaste. \"Pista perfecta\" tienta, pero no tiene con qué." },
    { q: "Resolviste un ejercicio con pistas. ¿Qué hacés después?", opciones: ["Uno parecido sin ayuda","El siguiente tema directamente","Le pedís a la IA que lo revise y listo","Lo copiás en limpio"], correcta: 0, explicacion: "Así comprobás si aprendiste. Pasar al siguiente tienta, pero no sabés si dependés de la pista." },
    { q: "Tu herramienta tiene un \"modo estudio\". ¿Qué suele hacer?", opciones: ["Hacer la tarea más rápido","Bloquear internet","Corregir la ortografía","Guiarte con preguntas en lugar de darte la respuesta"], correcta: 3, explicacion: "Es el modo de preguntas incorporado. \"Hacer la tarea más rápido\" tienta, pero es lo contrario." },
    { q: "Una pista de nivel 1 sería...", opciones: ["\"El resultado es 12\"","\"Fijate qué cantidad es el 100% en este problema\"","\"Multiplicá 80 por 0,15 y da 12\"","\"Copiá la solución del libro\""], correcta: 1, explicacion: "Te dice hacia dónde mirar, sin resolver. \"Multiplicá...\" tienta, pero ya es casi la solución." },
  ],
},
{
  id: "practicar",
  icono: "🏋️",
  titulo: "Practicar para recordar",
  nivel: "Intermedio",
  objetivos: [
    "Usar la IA para generar preguntas de práctica y simulacros de examen",
    "Aplicar la técnica Feynman con la IA como alumno",
    "Armar un plan de repaso espaciado para un examen",
  ],
  lecciones: [
    { titulo: "Preguntas de práctica y simulacros", html: `
      <p class="idea">La técnica de estudio con más evidencia es la <strong>práctica de recuperación</strong>: tratar de recordar sin mirar. La IA es buenísima para <strong>tomarte preguntas</strong> sobre tu propio material.</p>
      <pre><code>Prompt de preguntas de práctica:
"Te paso mi apunte de [tema]. Haceme 10 preguntas de práctica
sobre este material: 4 de definición, 4 de aplicar a un caso
y 2 de comparar conceptos. Hacelas de a una. Esperá mi respuesta,
decime si está bien y por qué, y recién ahí pasá a la siguiente.
Usá solo lo que está en el apunte."
[pegás tu apunte]</code></pre>
      <table>
        <tr><th>Tipo de pregunta</th><th>Ejemplo</th><th>Qué entrena</th></tr>
        <tr><td>Definición</td><td>¿Qué es la presión arterial?</td><td>Recordar</td></tr>
        <tr><td>Aplicación</td><td>Un paciente tiene 160/100. ¿Qué significa?</td><td>Usar lo que sabés</td></tr>
        <tr><td>Comparación</td><td>¿En qué se diferencian arteria y vena?</td><td>Relacionar ideas</td></tr>
        <tr><td>Simulacro</td><td>Un examen como el real, con tiempo</td><td>Prepararte para la situación real</td></tr>
      </table>
      <p><strong>"Usá solo lo que está en el apunte"</strong> evita que pregunte cosas que no entran o que invente. Así practicás lo que te van a tomar.</p>
      <p><strong>Respondé sin mirar.</strong> Si mirás el apunte para responder, ya no es práctica de recuperación: es releer.</p>
      <p><strong>Un simulacro:</strong> pedile un examen del estilo de los de tu materia (si tenés exámenes viejos, pasáselos como modelo), con tiempo límite. Después revisá qué fallaste.</p>
      <p>Por ejemplo, Valen pasó su apunte de anatomía y pidió 10 preguntas de a una. Respondió 6 bien. Las 4 que falló fueron su lista de repaso para el día siguiente.</p>` },
    { titulo: "La técnica Feynman con la IA", video: {"id":"inZe9kW5djI","t":"La técnica de Feynman · Sprouts Español (2:06)"}, html: `
      <p class="idea">La <strong>técnica Feynman</strong> es explicar un tema con palabras simples, como si se lo contaras a alguien que no sabe nada. Donde te trabás, está lo que no entendiste. La IA puede hacer de <strong>alumno</strong> que te pregunta.</p>
      <pre><code>Los pasos:
1. Elegí un tema.
2. Explicalo por escrito con palabras simples, sin mirar.
3. Donde te trabaste o usaste palabras difíciles sin explicarlas,
   volvé al material.
4. Simplificá y probá de nuevo.

Prompt con la IA como alumno:
"Vas a ser un alumno de 12 años. Te voy a explicar [tema].
Después de mi explicación, haceme 3 preguntas de alguien que
no entendió algo, y decime qué palabras usé sin explicarlas."</code></pre>
      <table>
        <tr><th>Señal</th><th>Qué significa</th></tr>
        <tr><td>Usás una palabra técnica y no podés explicarla</td><td>La memorizaste sin entenderla</td></tr>
        <tr><td>Te salteás un paso con "y bueno, después pasa esto"</td><td>Ese paso no lo entendés</td></tr>
        <tr><td>La IA-alumno pregunta algo que no sabés responder</td><td>Un hueco para estudiar</td></tr>
      </table>
      <p><strong>Richard Feynman</strong> fue un físico ganador del Premio Nobel, famoso por explicar cosas difíciles de forma simple.</p>
      <p><strong>Lo importante es que explicás vos:</strong> la IA solo hace de alumno curioso. Si le pedís que explique ella, perdés la técnica.</p>
      <p>Por ejemplo, Valen le explicó a la "alumna de 12 años" cómo funciona el riñón. La IA le preguntó "¿qué es filtrar?" y Valen se dio cuenta de que repetía esa palabra sin saber explicarla.</p>` },
    { titulo: "Un plan de repaso espaciado", html: `
      <p class="idea">Repasar <strong>varias veces con días de por medio</strong> funciona mucho mejor que estudiar todo el temario la noche anterior. A eso se le dice <strong>estudio espaciado</strong>, y la IA te puede ayudar a armar el plan.</p>
      <pre><code>Prompt de plan de estudio:
"Tengo un examen de [materia] el [fecha]. Los temas son: [lista].
Puedo estudiar [horas] por día, de lunes a viernes.
Armá un plan que:
- reparta los temas en distintos días,
- vuelva a cada tema al menos 3 veces con días de por medio,
- deje los 2 días antes del examen para simulacros,
- incluya en cada sesión 10 minutos de preguntas de práctica."</code></pre>
      <table>
        <tr><th>Día</th><th>Tema nuevo</th><th>Repaso (preguntas sin mirar)</th></tr>
        <tr><td>Lunes 1</td><td>Corazón</td><td>—</td></tr>
        <tr><td>Miércoles 3</td><td>Vasos sanguíneos</td><td>Corazón</td></tr>
        <tr><td>Viernes 5</td><td>Presión arterial</td><td>Vasos, Corazón</td></tr>
        <tr><td>Lunes 8</td><td>—</td><td>Presión, Vasos, Corazón (simulacro)</td></tr>
      </table>
      <p><strong>El plan es una propuesta:</strong> revisalo con tu realidad (otras materias, trabajo, cansancio) y ajustalo. La IA no sabe que el jueves tenés práctica en el hospital.</p>
      <p><strong>El repaso es con preguntas, no releyendo:</strong> cada vez que volvés a un tema, tratá de recordarlo antes de mirar el apunte.</p>
      <p>Por ejemplo, para el segundo parcial Valen armó un plan de 12 días con la IA. Ajustó dos días por las prácticas y llegó al examen habiendo repasado cada tema tres veces.</p>` },
  ],
  practica: [
    "Pedile a la IA 10 preguntas de práctica sobre tu apunte, respondé sin mirar y anotá cuántas acertaste.",
    "Hacé la técnica Feynman con la IA como alumno sobre un tema y anotá qué palabras usaste sin poder explicarlas.",
    "Armá con la IA un plan de repaso espaciado para tu próximo examen, ajustalo a tu semana y anotá cuántas veces vuelve cada tema.",
  ],
  recursos: [
    { t: "The Learning Scientists: estrategias de estudio con evidencia (materiales descargables)", url: "https://www.learningscientists.org/downloadable-materials" },
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si tenés que elegir una sola técnica de estudio, ¿cuál tiene más evidencia?", opciones: ["Releer el apunte muchas veces","Subrayar todo","La práctica de recuperación: tratar de recordar sin mirar","Escuchar música mientras leés"], correcta: 2, explicacion: "Recordar fortalece la memoria. Releer tienta porque se siente fácil, pero rinde poco." },
    { q: "Si le pedís preguntas de práctica a la IA, ¿qué agregás para que no pregunte cosas que no entran?", opciones: ["\"Usá solo lo que está en el apunte\"","\"Hacé preguntas difíciles\"","\"Preguntá cualquier cosa\"","Nada"], correcta: 0, explicacion: "Así practicás lo que te toman. \"Cualquier cosa\" tienta por variado, pero puede salirse del tema." },
    { q: "Si la IA te hace una pregunta de práctica, ¿cómo respondés?", opciones: ["Buscando en el apunte","Preguntándole la respuesta","Copiando de internet","Sin mirar el apunte"], correcta: 3, explicacion: "Si mirás, es releer. Buscar en el apunte tienta por seguro, pero no practicás recordar." },
    { q: "Fallaste 4 de 10 preguntas de práctica. ¿Qué hacés con eso?", opciones: ["Te frustrás y dejás","Esas 4 son tu lista de repaso","Las ignorás","Le pedís a la IA preguntas más fáciles"], correcta: 1, explicacion: "Los errores muestran qué estudiar. Preguntas más fáciles tientan, pero esconden el hueco." },
    { q: "Querés practicar como en el examen real. ¿Qué le pedís a la IA?", opciones: ["Un resumen","Las respuestas del examen","Un simulacro del estilo de tu materia, con tiempo límite","Un chiste para relajarte"], correcta: 2, explicacion: "Simula la situación real. Las respuestas tientan, pero no existen y no te preparan." },
    { q: "En la técnica Feynman, ¿quién explica?", opciones: ["Vos","La IA","El docente","Un video"], correcta: 0, explicacion: "Explicar es lo que te hace aprender. Que explique la IA tienta, pero perdés la técnica." },
    { q: "Explicás un tema y usás \"filtrar\" sin poder decir qué significa. ¿Qué te indica?", opciones: ["Que la explicación está perfecta","Que la palabra está mal","Nada","Que la memorizaste sin entenderla"], correcta: 3, explicacion: "Ahí hay un hueco. \"Perfecta\" tienta porque usaste la palabra correcta, pero no la entendés." },
    { q: "En la técnica Feynman, ¿qué papel le das a la IA?", opciones: ["El de profesor que explica todo","El de un alumno que te pregunta lo que no entendió","El de corrector de ortografía","Ninguno posible"], correcta: 1, explicacion: "Te muestra los huecos. El de profesor tienta, pero entonces explica ella." },
    { q: "Tenés examen en 10 días. ¿Qué conviene?", opciones: ["Estudiar todo el temario la noche anterior","Leer todo una vez el primer día","Repasar cada tema varias veces con días de por medio","Esperar a tener ganas"], correcta: 2, explicacion: "El estudio espaciado rinde más. La noche anterior tienta porque presiona, pero se olvida rápido." },
    { q: "La IA te armó un plan de estudio. ¿Qué hacés?", opciones: ["Lo ajustás a tu semana real","Lo seguís tal cual aunque no puedas","Lo ignorás","Le pedís otro hasta que sea fácil"], correcta: 0, explicacion: "La IA no conoce tu semana. Seguirlo tal cual tienta, pero si no podés, lo abandonás." },
    { q: "En los días de repaso del plan, ¿cómo repasás?", opciones: ["Releyendo el apunte","Mirando el resumen de la IA","Subrayando de nuevo","Con preguntas, tratando de recordar antes de mirar"], correcta: 3, explicacion: "El repaso es práctica de recuperación. Releer tienta por cómodo." },
    { q: "Si armás tu plan de estudio, ¿para qué dejás los 2 días antes del examen?", opciones: ["Para empezar a estudiar","Para simulacros","Para no hacer nada","Para temas nuevos"], correcta: 1, explicacion: "Al final se practica como en el examen. Temas nuevos tienta, pero no da tiempo a repasarlos." },
  ],
},
{
  id: "leer-escribir",
  icono: "📝",
  titulo: "Leer y escribir con IA, sin que lo haga por vos",
  nivel: "Intermedio",
  objetivos: [
    "Usar la IA para comprobar tu resumen en lugar de reemplazarlo",
    "Estudiar con tus propios apuntes en una herramienta como NotebookLM",
    "Pedir devoluciones sobre tus textos sin que la IA los escriba",
  ],
  lecciones: [
    { titulo: "Tu resumen primero, la IA después", html: `
      <p class="idea">Resumir es una de las mejores formas de entender un texto, porque te obliga a elegir lo importante. Si la IA resume por vos, <strong>se saltea justo esa parte</strong>. Hacé tu resumen y después usá la IA para compararlo.</p>
      <pre><code>Prompt para comparar tu resumen:
"Te paso un texto y mi resumen. No me hagas otro resumen.
Decime:
1. Qué idea importante del texto falta en mi resumen.
2. Si puse algo que el texto no dice.
3. Si hay una idea que entendí mal.
Explicámelo en una lista corta."
[pegás el texto]   [pegás tu resumen]</code></pre>
      <table>
        <tr><th>Así no</th><th>Así sí</th></tr>
        <tr><td>"Resumime este capítulo"</td><td>"Este es mi resumen: ¿qué me falta?"</td></tr>
        <tr><td>Leer el resumen de la IA y listo</td><td>Leer el texto, resumir, comparar y corregir</td></tr>
        <tr><td>Estudiar del resumen de la IA</td><td>Estudiar de tu resumen corregido</td></tr>
      </table>
      <p><strong>El resumen de la IA puede tener errores:</strong> omitir algo clave o agregar algo que el texto no dice. Si estudiás de ahí, estudiás los errores.</p>
      <p><strong>Para textos difíciles,</strong> la IA te puede ayudar antes de leer: "¿qué palabras de este texto debería conocer antes?" o "¿de qué trata en dos oraciones?". Después leés vos.</p>
      <p>Las técnicas para encontrar la idea principal y resumir están en el curso <strong>Leer mejor y entender lo que leés</strong> de este sitio.</p>
      <p>Por ejemplo, Valen resumió un capítulo de fisiología y le pidió a la IA que lo comparara. La IA le marcó que había confundido "presión sistólica" y "diastólica". Corrigió su resumen y ese error no se le repitió en el examen.</p>` },
    { titulo: "Estudiar con tus propios apuntes", video: {"id":"Xv5ZrnzA2DA","t":"Domina NotebookLM en menos de 7 minutos · UDIA (6:58)"}, html: `
      <p class="idea">Algunas herramientas, como <strong>NotebookLM</strong> de Google, trabajan <strong>solo con los documentos que les subís</strong>: tus apuntes, el libro de la cátedra, tus resúmenes. Así responden sobre tu material y te dicen de qué parte sacaron cada respuesta.</p>
      <table>
        <tr><th>Le podés pedir...</th><th>Ejemplo</th></tr>
        <tr><td>Preguntas sobre tu material</td><td>"Haceme 10 preguntas del capítulo 3"</td></tr>
        <tr><td>Que te muestre dónde dice algo</td><td>"¿En qué parte del apunte se explica la presión arterial?"</td></tr>
        <tr><td>Relacionar documentos</td><td>"¿En qué coincide el apunte de la clase con el libro?"</td></tr>
        <tr><td>Una guía de estudio</td><td>"Armá una lista de los conceptos clave con la página de cada uno"</td></tr>
      </table>
      <p><strong>Ventaja:</strong> como trabaja con tus fuentes y las cita, inventa menos y podés comprobar cada respuesta en el documento original.</p>
      <p><strong>Ojo:</strong> menos no es nunca. Igual puede equivocarse al interpretar, así que andá a la parte citada y leela vos.</p>
      <p><strong>Derechos y privacidad:</strong> subí tus apuntes y material que tengas permitido usar. No subas trabajos de compañeros ni datos personales (tuyos o de otros, como historias clínicas de las prácticas).</p>
      <p><strong>Las mismas reglas del curso valen acá:</strong> que te haga preguntas, no que te dé resúmenes para no leer.</p>
      <p>Por ejemplo, Valen subió los apuntes de las 8 clases y el capítulo del libro. Le pidió preguntas de práctica con la página de cada respuesta: cuando fallaba, iba directo a esa página.</p>` },
    { titulo: "Escribir vos, con devoluciones", html: `
      <p class="idea">Para los trabajos escritos, <strong>escribí vos</strong> y usá la IA como un lector que te devuelve comentarios. Así mejorás tu escritura en lugar de reemplazarla.</p>
      <pre><code>Prompt de devolución:
"Este es el borrador de mi trabajo práctico sobre [tema].
La consigna es: [pegás la consigna].
No lo reescribas. Decime:
1. Si responde la consigna.
2. Qué parte del argumento es más débil y por qué.
3. Dos oraciones que se entienden mal.
4. Qué te gustaría saber que no expliqué."
[pegás tu borrador]</code></pre>
      <table>
        <tr><th>Pedido</th><th>¿Te ayuda a aprender?</th></tr>
        <tr><td>"Escribime el trabajo"</td><td>No: es entregar algo ajeno (y casi siempre trampa)</td></tr>
        <tr><td>"Reescribí mi texto para que suene mejor"</td><td>Poco: queda su estilo, no el tuyo; además, revisá si está permitido</td></tr>
        <tr><td>"Decime qué está flojo y por qué"</td><td>Sí: mejorás vos</td></tr>
        <tr><td>"Marcá errores de ortografía y explicame la regla"</td><td>Sí, si la consigna lo permite</td></tr>
      </table>
      <p><strong>"No lo reescribas"</strong> es la frase clave: sin ella, la IA suele devolverte el texto cambiado, y es muy tentador copiarlo.</p>
      <p><strong>Guardá las versiones:</strong> borrador 1, borrador 2, final. Muestran tu proceso y te sirven si alguien duda de que lo escribiste vos.</p>
      <p>Por ejemplo, el borrador de Valen tenía un argumento sin datos. La IA le preguntó "¿en qué te basás para decir esto?". Buscó el dato en el libro, lo agregó con la cita y el docente destacó esa parte.</p>` },
  ],
  practica: [
    "Resumí un texto vos, pedile a la IA que lo compare con el prompt de la lección y anotá qué te faltaba.",
    "Subí tus apuntes de un tema a NotebookLM (o una herramienta parecida), pedí 5 preguntas con la página de cada respuesta y anotá cuántas acertaste.",
    "Pedí una devolución de un borrador tuyo con \"no lo reescribas\" y anotá los 2 cambios que hiciste vos.",
  ],
  recursos: [
    { t: "NotebookLM (Google): cuaderno de IA que trabaja con tus propios documentos", url: "https://notebooklm.google/" },
    { t: "Curso de este sitio: Leer mejor y entender lo que leés", url: "https://pkeios.github.io/EiaLearning/lectura/" },
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
  ],
  quiz: [
    { q: "Tenés que estudiar un capítulo. ¿Cómo usás la IA con el resumen?", opciones: ["Le pedís que resuma y estudiás de ahí","No hacés resumen","Hacés tu resumen y después le pedís que lo compare con el texto","Copiás el resumen de un compañero"], correcta: 2, explicacion: "Resumir vos es lo que te hace entender. Estudiar del de la IA tienta por rápido, pero puede tener errores." },
    { q: "Le pasás tu resumen a la IA. ¿Qué le pedís?", opciones: ["Qué idea falta, qué puse que el texto no dice y qué entendí mal","Que haga uno mejor","Que lo alargue","Que lo traduzca"], correcta: 0, explicacion: "Así corregís el tuyo. \"Uno mejor\" tienta, pero vuelve a pensar ella." },
    { q: "Si un texto es muy difícil, ¿cómo puede ayudarte la IA antes de leer?", opciones: ["Leyéndolo por vos","Resumiéndolo para no leerlo","No puede ayudar","Diciéndote qué palabras conviene conocer o de qué trata en dos oraciones"], correcta: 3, explicacion: "Prepara tu lectura sin reemplazarla. Resumirlo para no leer tienta, pero te saltea el aprendizaje." },
    { q: "Querés que la IA responda solo con tus apuntes y te diga de dónde sacó cada cosa. ¿Qué usás?", opciones: ["Un chat sin documentos","Una herramienta como NotebookLM, con tus documentos","Un buscador de imágenes","Un corrector de ortografía"], correcta: 1, explicacion: "Trabaja con tus fuentes y las cita. Un chat sin documentos tienta, pero no conoce tu material." },
    { q: "NotebookLM te responde con una cita de tu apunte. ¿Ya es seguro?", opciones: ["Sí, nunca se equivoca","Sí, si es largo","No del todo: andá a la parte citada y leela vos","Sí, si es en castellano"], correcta: 2, explicacion: "Inventa menos, pero puede interpretar mal. \"Nunca se equivoca\" tienta por las citas." },
    { q: "Querés subir material a una herramienta de IA. ¿Qué NO subís?", opciones: ["Historias clínicas de las prácticas o trabajos de compañeros","Tus propios apuntes","El programa de la materia","Tus resúmenes"], correcta: 0, explicacion: "Son datos personales y obras ajenas. Tus apuntes tientan como riesgo, pero son tuyos." },
    { q: "Tenés que entregar un trabajo escrito. ¿Cómo usás la IA?", opciones: ["Le pedís que lo escriba","Le pedís que reescriba todo","Copiás de varias IA","Escribís vos y le pedís devoluciones"], correcta: 3, explicacion: "Escribir es lo que te enseña. Que lo escriba tienta, pero es entregar algo ajeno." },
    { q: "Si le pedís una devolución y te devuelve el texto reescrito, ¿qué frase faltó?", opciones: ["\"Hacelo mejor\"","\"No lo reescribas\"","\"Usá más palabras\"","\"Por favor\""], correcta: 1, explicacion: "Sin esa frase suele reescribir. \"Hacelo mejor\" tienta, pero pide justo eso." },
    { q: "La IA te pregunta \"¿en qué te basás para decir esto?\". ¿Qué hacés?", opciones: ["Le pedís que invente un dato","Borrás el argumento","Buscás el dato en la bibliografía y lo agregás con la cita","Lo ignorás"], correcta: 2, explicacion: "Así fortalecés tu argumento. Que invente un dato tienta, pero sería una alucinación en tu trabajo." },
    { q: "¿Para qué guardás borrador 1, borrador 2 y final?", opciones: ["Muestran tu proceso y te protegen si alguien duda","Para ocupar espacio","Para entregar los tres","No sirve"], correcta: 0, explicacion: "El proceso demuestra que lo hiciste vos. \"No sirve\" tienta, pero es tu mejor prueba." },
    { q: "Querés corregir la ortografía de tu trabajo con IA. ¿Qué revisás antes?", opciones: ["Nada","El largo del texto","La hora","Si la consigna lo permite"], correcta: 3, explicacion: "Depende de cada consigna. \"Nada\" tienta porque parece un uso menor." },
    { q: "Si le pedís a la IA \"reescribí mi texto para que suene mejor\", ¿qué pasa?", opciones: ["Aprendés a escribir mejor","Queda su estilo, no el tuyo, y aprendés poco","Mejora tu nota sin riesgo","Nada"], correcta: 1, explicacion: "Te reemplaza. \"Aprendés a escribir\" tienta, pero no hiciste el trabajo de mejorar." },
  ],
},
{
  id: "fuentes",
  icono: "🔎",
  titulo: "Verificar y citar",
  nivel: "Avanzado",
  objetivos: [
    "Verificar en fuentes confiables lo que te dice la IA",
    "Encontrar bibliografía real en la biblioteca y en Google Académico",
    "Citar las fuentes y declarar el uso de IA cuando corresponde",
  ],
  lecciones: [
    { titulo: "Verificar antes de usar", html: `
      <p class="idea">Todo lo que te dice la IA es un <strong>punto de partida</strong>, no un dato confirmado. Antes de estudiarlo, entregarlo o citarlo, <strong>buscalo en una fuente confiable</strong>.</p>
      <table>
        <tr><th>Fuente</th><th>Confiable para...</th></tr>
        <tr><td>Apunte y bibliografía de la cátedra</td><td>Lo que te van a tomar</td></tr>
        <tr><td>Libros de editoriales conocidas</td><td>Conceptos y teoría</td></tr>
        <tr><td>Artículos académicos (revistas con revisión)</td><td>Investigaciones y datos</td></tr>
        <tr><td>Organismos oficiales (ministerios, OMS, INDEC)</td><td>Datos y normas</td></tr>
        <tr><td>Wikipedia</td><td>Una primera idea y sus referencias al final (no para citar)</td></tr>
        <tr><td>Un video o un blog sin autor</td><td>Con mucha cautela</td></tr>
      </table>
      <pre><code>Verificación en 3 pasos:
1. Identificá qué afirma la IA que vas a usar (un dato, una definición, un autor).
2. Buscalo en una fuente de la tabla.
3. Si no lo encontrás o dice otra cosa, NO lo uses.
   Si lo encontrás, usá y citá la fuente, no la IA.</code></pre>
      <p>Una <strong>revisión por pares</strong> es cuando otros especialistas leen un artículo antes de publicarlo. Por eso los artículos académicos son más confiables que un blog.</p>
      <p><strong>Citá la fuente real, no la IA:</strong> si la IA te habló de un dato y lo encontraste en el libro, en tu trabajo va el libro.</p>
      <p>Por ejemplo, la IA le dijo a Valen que "el 30% de los adultos tiene hipertensión". Lo buscó en fuentes oficiales y encontró un dato distinto, con año y fuente. Usó ese y lo citó.</p>` },
    { titulo: "Encontrar bibliografía real", html: `
      <p class="idea">Para buscar libros y artículos de verdad, usá <strong>el catálogo de la biblioteca</strong> de tu escuela o facultad y <strong>Google Académico</strong>. La IA te puede ayudar a pensar qué buscar, no a inventar la lista.</p>
      <pre><code>Cómo usar la IA para buscar (sin que invente):
"Estoy buscando bibliografía sobre [tema]. No me des títulos de libros.
Dame 5 palabras clave y sinónimos para buscar en un catálogo
y en Google Académico, en castellano y en inglés."

Después, vos buscás con esas palabras.</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th><th>Truco</th></tr>
        <tr><td>Catálogo de la biblioteca</td><td>Libros que podés pedir prestados</td><td>Buscá por tema, no solo por título</td></tr>
        <tr><td>Google Académico</td><td>Artículos y libros académicos</td><td>"Citado por" muestra los más usados</td></tr>
        <tr><td>Bibliografía del programa</td><td>Lo que tu docente recomienda</td><td>Empezá siempre por acá</td></tr>
        <tr><td>Referencias de un buen libro</td><td>Otras fuentes del mismo tema</td><td>Mirá la lista del final</td></tr>
      </table>
      <p><strong>Palabras clave</strong> son las palabras que describen tu tema y que usás para buscar. Probar sinónimos y el inglés multiplica los resultados.</p>
      <p><strong>Si un libro que te dio la IA no aparece</strong> en ningún catálogo ni en Google Académico, asumí que no existe.</p>
      <p>Por ejemplo, Valen le pidió a la IA palabras clave en lugar de títulos. Con "adherencia al tratamiento" y "adherence" encontró en Google Académico 3 artículos reales que su docente aprobó.</p>` },
    { titulo: "Citar y declarar el uso de IA", video: {"id":"gNTfdcMkKGk","t":"Cómo hacer citas y referencias según normas APA 7.ª edición · El Tío Tech (5:20)"}, html: `
      <p class="idea"><strong>Citar</strong> es decir de dónde sacaste una idea o un dato. Las normas más usadas en Argentina son las <strong>APA</strong>. Y si usaste IA en un trabajo, muchas cátedras piden que lo <strong>declares</strong>.</p>
      <pre><code>Cita en el texto (APA):
... la adherencia mejora con el seguimiento telefónico (Gómez, 2021).

Referencia al final (APA, libro):
Gómez, A. (2021). Título del libro en cursiva. Editorial.

(Ejemplo inventado para mostrar el formato.)</code></pre>
      <table>
        <tr><th>Declarar el uso de IA</th><th>Ejemplo</th></tr>
        <tr><td>Qué herramienta</td><td>"Usé ChatGPT..."</td></tr>
        <tr><td>Para qué</td><td>"...para generar preguntas de práctica y revisar la claridad del borrador."</td></tr>
        <tr><td>Qué hiciste vos</td><td>"El texto, los argumentos y las fuentes son míos; verifiqué cada dato en la bibliografía."</td></tr>
      </table>
      <p><strong>Cómo citar a la IA</strong> depende de cada cátedra: las normas APA tienen un formato para herramientas de IA, pero muchas cátedras prefieren una nota como la de la tabla. Preguntá cuál usar.</p>
      <p><strong>Citar no es opcional:</strong> usar ideas o textos sin citarlos es plagio, aunque los hayas cambiado un poco.</p>
      <p><strong>Las herramientas ayudan:</strong> Word y Google Docs tienen funciones para armar citas y referencias. Igual, revisalas: a veces les falta un dato.</p>
      <p>Por ejemplo, Valen agregó al final de su trabajo una nota de 3 líneas: qué IA usó, para qué y qué hizo ella. Su docente le dijo que era justo lo que pedía la cátedra.</p>` },
  ],
  practica: [
    "Elegí 3 datos que te haya dado la IA y verificalos en fuentes de la tabla. Anotá cuántos coincidían.",
    "Pedí a la IA palabras clave (no títulos) de un tema, buscá en Google Académico y anotá 2 artículos reales con autor y año.",
    "Escribí la nota de declaración de uso de IA para un trabajo tuyo con los 3 datos de la tabla.",
  ],
  recursos: [
    { t: "Google Académico: buscar libros y artículos académicos", url: "https://scholar.google.com/" },
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
  ],
  quiz: [
    { q: "La IA te da un dato que querés poner en tu trabajo. ¿Qué hacés?", opciones: ["Lo ponés tal cual","Lo ponés y citás a la IA","Lo buscás en una fuente confiable antes de usarlo","Le preguntás dos veces"], correcta: 2, explicacion: "La IA es punto de partida. Preguntar dos veces tienta, pero puede repetir el error." },
    { q: "Si encontraste en el libro el dato que te dijo la IA, ¿a quién citás?", opciones: ["Al libro","A la IA","A nadie","A los dos siempre"], correcta: 0, explicacion: "Se cita la fuente real. La IA tienta porque te lo dijo primero, pero el dato es del libro." },
    { q: "No encontrás en ninguna fuente el dato que te dio la IA. ¿Qué hacés?", opciones: ["Lo usás igual","Lo redondeás","Lo ponés sin fuente","No lo usás"], correcta: 3, explicacion: "Si no se verifica, puede ser una alucinación. \"Lo usás igual\" tienta si encaja bien." },
    { q: "¿Para qué sirve Wikipedia en un trabajo?", opciones: ["Para citarla como fuente principal","Para una primera idea y para ir a las referencias del final","Para nada","Para copiar párrafos"], correcta: 1, explicacion: "Sus referencias llevan a fuentes citables. Citarla tienta por cómoda, pero no se acepta como fuente principal." },
    { q: "¿Por qué un artículo académico suele ser más confiable que un blog?", opciones: ["Porque es más largo","Porque está en inglés","Porque pasó por una revisión de especialistas antes de publicarse","Porque tiene más fotos"], correcta: 2, explicacion: "La revisión por pares controla la calidad. \"Más largo\" tienta, pero no es la razón." },
    { q: "Querés que la IA te ayude a buscar bibliografía sin inventar. ¿Qué le pedís?", opciones: ["Palabras clave y sinónimos para buscar vos","Una lista de 10 libros","Los mejores autores con sus obras","Citas textuales de cada libro"], correcta: 0, explicacion: "Las palabras clave no se pueden inventar mal. La lista de libros tienta, pero puede incluir libros que no existen." },
    { q: "Si buscás en Google Académico, ¿qué te muestra cuáles son los artículos más usados?", opciones: ["La fecha de hoy","El color del título","La cantidad de páginas","\"Citado por\""], correcta: 3, explicacion: "Muchas citas indican un artículo importante. La fecha tienta, pero no dice cuán usado es." },
    { q: "Si un libro que te recomendó la IA no aparece en ningún catálogo, ¿qué asumís?", opciones: ["Que es muy nuevo y es bueno","Que probablemente no existe","Que es secreto","Que hay que comprarlo"], correcta: 1, explicacion: "Es una alucinación típica. \"Muy nuevo\" tienta como excusa." },
    { q: "Usaste una idea de un autor con tus palabras. ¿La citás?", opciones: ["No, la reescribí","Solo si copiaste textual","Sí: la idea es suya aunque la cambies","Solo si es famosa"], correcta: 2, explicacion: "Sin citar es plagio. \"La reescribí\" tienta, pero la idea sigue siendo ajena." },
    { q: "Tu cátedra pide declarar el uso de IA. ¿Qué ponés?", opciones: ["Qué herramienta, para qué y qué hiciste vos","Solo \"usé IA\"","Nada","El chat completo pegado"], correcta: 0, explicacion: "Así se entiende tu proceso. \"Usé IA\" tienta por corto, pero no dice cómo." },
    { q: "No sabés con qué formato citar una herramienta de IA. ¿Qué hacés?", opciones: ["No la mencionás","Inventás un formato","Citás a OpenAI como autor del trabajo","Preguntás a tu cátedra cuál prefiere"], correcta: 3, explicacion: "Cada cátedra decide. No mencionarla tienta, pero puede ir contra las reglas." },
    { q: "Word te armó la referencia automáticamente. ¿Qué hacés?", opciones: ["La dejás sin mirar","La revisás: a veces falta un dato","La borrás","La copiás dos veces"], correcta: 1, explicacion: "Las herramientas ayudan, pero fallan. Dejarla sin mirar tienta por automática." },
  ],
},
{
  id: "reglas",
  icono: "⚖️",
  titulo: "Reglas, privacidad y dependencia",
  nivel: "Avanzado",
  objetivos: [
    "Averiguar y respetar las reglas de uso de IA de cada materia",
    "Cuidar tus datos y los de otras personas al usar IA para estudiar",
    "Detectar si te estás volviendo dependiente de la IA y corregirlo",
  ],
  lecciones: [
    { titulo: "Las reglas de cada materia", html: `
      <p class="idea">Cada docente puede tener reglas distintas sobre la IA, y <strong>pueden cambiar de un trabajo a otro</strong>. Conocerlas antes de empezar te evita problemas y te deja aprovechar lo que sí está permitido.</p>
      <table>
        <tr><th>Tipo de regla</th><th>Qué significa</th></tr>
        <tr><td>Prohibida</td><td>No se usa en ningún paso del trabajo</td></tr>
        <tr><td>Permitida para estudiar, no para entregar</td><td>Podés usarla para entender, pero lo que entregás lo escribís vos</td></tr>
        <tr><td>Permitida con declaración</td><td>Podés usarla y tenés que contar cómo</td></tr>
        <tr><td>Parte de la consigna</td><td>El trabajo es justamente usarla y analizarla</td></tr>
      </table>
      <pre><code>Dónde buscar la regla:
1. La consigna del trabajo.
2. El programa de la materia.
3. El reglamento de la escuela o la facultad.
4. Si no está en ningún lado: preguntá por escrito
   (mail o aula virtual), así queda registrado.</code></pre>
      <p><strong>En los exámenes,</strong> salvo que digan lo contrario, la IA no está permitida. Usarla a escondidas es trampa, igual que llevar un machete.</p>
      <p><strong>Si una regla no te parece justa,</strong> podés conversarla con el docente con respeto. Lo que no conviene es ignorarla.</p>
      <p>Por ejemplo, en una materia de Valen la IA estaba prohibida para el informe, pero permitida para estudiar. Ella la usó para practicar con preguntas, escribió el informe sola y no tuvo ningún problema.</p>` },
    { titulo: "Privacidad: qué no se sube", html: `
      <p class="idea">Lo que escribís o subís a una herramienta de IA queda en los servidores de una empresa. <strong>No subas datos personales</strong> tuyos ni de otros, ni material que no te pertenece.</p>
      <table>
        <tr><th>No subas</th><th>Por qué</th></tr>
        <tr><td>Datos de pacientes, de prácticas o de entrevistas</td><td>Son datos sensibles de otras personas y tenés obligación de cuidarlos</td></tr>
        <tr><td>Tu DNI, tu dirección, tus contraseñas</td><td>Riesgo de robo de identidad</td></tr>
        <tr><td>Trabajos de compañeros sin permiso</td><td>Son obras de otros</td></tr>
        <tr><td>Exámenes que el docente pidió no difundir</td><td>Va contra las reglas de la materia</td></tr>
      </table>
      <p><strong>Datos sensibles</strong> son los que pueden perjudicar mucho a alguien si se difunden: salud, religión, ideas políticas, vida sexual. En Argentina los protege especialmente la Ley 25.326 de protección de datos personales.</p>
      <p><strong>Anonimizá:</strong> si querés ayuda con un caso de una práctica, cambiá nombres y datos que identifiquen ("paciente de 60 años con...") y sacá todo lo que no haga falta.</p>
      <p><strong>Configuración:</strong> muchas herramientas permiten que tus chats no se usen para entrenar el modelo. Buscalo en la configuración de privacidad.</p>
      <p>Por ejemplo, Valen quería ayuda para entender el caso de un paciente de su práctica. Escribió solo "adulto mayor con diabetes y estos valores", sin nombre, sin hospital y sin fechas: obtuvo la explicación y cuidó al paciente.</p>` },
    { titulo: "¿Dependés de la IA?", html: `
      <p class="idea">La IA es útil, pero si <strong>ya no podés empezar nada sin ella</strong>, se convirtió en una muleta. Unas señales te avisan, y unos hábitos te ayudan a recuperar la autonomía.</p>
      <table>
        <tr><th>Señal de dependencia</th><th>Hábito para corregirla</th></tr>
        <tr><td>Abrís la IA antes de leer la consigna</td><td>Leé la consigna y escribí tu primera idea a mano</td></tr>
        <tr><td>No podés explicar lo que entregaste</td><td>Antes de entregar, explicalo en voz alta sin mirar</td></tr>
        <tr><td>Te bloqueás en los exámenes sin IA</td><td>Una sesión por semana de estudio sin IA</td></tr>
        <tr><td>Aceptás todo lo que dice sin dudar</td><td>Verificá al menos un dato por sesión</td></tr>
        <tr><td>Ya no escribís borradores propios</td><td>Siempre el primer borrador es tuyo</td></tr>
      </table>
      <pre><code>La regla del 20/80:
Que al menos el 80% del trabajo de pensar lo hagas vos:
leer, intentar, escribir, equivocarte.
La IA, como mucho, el 20%: pistas, preguntas, devoluciones.</code></pre>
      <p><strong>La regla del 20/80 es una guía,</strong> no una medida exacta: sirve para preguntarte quién hizo la mayor parte del trabajo.</p>
      <p><strong>Tu cabeza es la que va al examen,</strong> a la práctica profesional y a la vida. La IA puede no estar, fallar o estar prohibida justo cuando la necesitás.</p>
      <p>Por ejemplo, Valen notó que abría la IA antes de leer cada consigna. Se puso una regla: 10 minutos sola con papel primero. Al mes, empezaba los trabajos sin dudar y usaba la IA solo para revisar.</p>` },
  ],
  practica: [
    "Buscá la regla de uso de IA de 3 materias tuyas y anotá en cuál de los 4 tipos de la tabla entra cada una.",
    "Tomá un caso o consulta que quieras hacerle a la IA y anonimizalo. Anotá qué datos sacaste.",
    "Durante una semana anotá cuántas veces abriste la IA antes de intentar vos y probá el hábito de 10 minutos sin IA. Anotá cómo cambió.",
  ],
  recursos: [
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "The Learning Scientists: estrategias de estudio con evidencia (materiales descargables)", url: "https://www.learningscientists.org/downloadable-materials" },
  ],
  quiz: [
    { q: "Si la consigna dice \"IA permitida para estudiar, no para entregar\", ¿qué podés hacer?", opciones: ["Usarla para todo","No usarla para nada","Usarla para entender y practicar, y escribir vos lo que entregás","Usarla solo para el final"], correcta: 2, explicacion: "Es la regla del medio. \"Para todo\" tienta, pero la entrega tiene que ser tuya." },
    { q: "No encontrás la regla de IA en ningún lado. ¿Qué hacés?", opciones: ["Preguntás por escrito al docente, para que quede registrado","Asumís que todo vale","Asumís que está prohibida y no estudiás","Le preguntás a un compañero"], correcta: 0, explicacion: "Por escrito queda claro. \"Todo vale\" tienta, pero puede no ser así." },
    { q: "Si en un examen nadie dijo nada sobre IA, ¿podés usarla?", opciones: ["Sí, si no lo prohibieron","Sí, si es en el celular","Sí, para una sola pregunta","No, salvo que digan explícitamente que sí"], correcta: 3, explicacion: "En los exámenes, por defecto no. \"Si no lo prohibieron\" tienta, pero es como un machete." },
    { q: "Una regla de IA te parece injusta. ¿Qué hacés?", opciones: ["La ignorás","La conversás con el docente con respeto y mientras la respetás","La rompés sin que se note","Te quejás en redes"], correcta: 1, explicacion: "Se puede conversar. Ignorarla tienta si te parece injusta, pero trae problemas." },
    { q: "Querés ayuda con el caso de un paciente de tu práctica. ¿Qué subís?", opciones: ["La historia clínica completa","El nombre para que sea más preciso","Solo los datos necesarios, sin nombre, lugar ni fechas","Una foto del paciente"], correcta: 2, explicacion: "Anonimizás y cuidás al paciente. El nombre tienta por precisión, pero no hace falta." },
    { q: "¿Qué son los datos sensibles?", opciones: ["Datos que pueden perjudicar mucho si se difunden, como los de salud","Datos aburridos","Datos de fútbol","Los números de página"], correcta: 0, explicacion: "Salud, religión, política, vida sexual. \"Aburridos\" tienta por la palabra, pero no." },
    { q: "Si un compañero te pasó su trabajo para que lo mires, ¿lo subís a la IA?", opciones: ["Sí, total ya te lo pasó","Sí, si cambiás el nombre","Sí, para mejorarlo","No sin su permiso: es su obra"], correcta: 3, explicacion: "Es una obra ajena. \"Ya te lo pasó\" tienta, pero no para subirlo a una empresa." },
    { q: "Querés que tus chats no se usen para entrenar el modelo. ¿Dónde buscás?", opciones: ["En el prompt","En la configuración de privacidad de la herramienta","En el nombre de tu cuenta","No se puede nunca"], correcta: 1, explicacion: "Si existe, está en privacidad. El prompt tienta, pero no cambia la configuración." },
    { q: "Si abrís la IA antes de leer la consigna, ¿qué señal es?", opciones: ["De eficiencia","De inteligencia","De dependencia","Ninguna"], correcta: 2, explicacion: "La IA empieza a pensar antes que vos. \"Eficiencia\" tienta, pero perdés el primer intento." },
    { q: "Si no podés explicar un trabajo que entregaste, ¿qué hábito te ayuda?", opciones: ["Explicarlo en voz alta sin mirar antes de entregar","Entregar más rápido","Usar otra IA","No entregarlo"], correcta: 0, explicacion: "Si no lo podés explicar, no es tuyo todavía. Otra IA tienta, pero no lo resuelve." },
    { q: "Según la regla del 20/80, ¿quién hace la mayor parte del trabajo de pensar?", opciones: ["La IA","Mitad y mitad","El docente","Vos"], correcta: 3, explicacion: "Vos el 80%, la IA como mucho el 20%. \"Mitad y mitad\" tienta por justo, pero es demasiado." },
    { q: "¿Por qué conviene no depender de la IA?", opciones: ["Porque es cara siempre","Porque puede no estar, fallar o estar prohibida cuando la necesitás","Porque es aburrida","No conviene: hay que depender"], correcta: 1, explicacion: "Tu cabeza va con vos al examen y al trabajo. \"Es cara\" tienta, pero muchas son gratis." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu método para un examen real",
  nivel: "Avanzado",
  objetivos: [
    "Diseñar un plan de estudio con IA para un examen real, respetando las reglas",
    "Llevar un registro honesto de cómo usaste la IA",
    "Evaluar tu método con una rúbrica y el resultado del examen",
  ],
  lecciones: [
    { titulo: "El plan", html: `
      <p class="idea">El proyecto es <strong>preparar un examen real</strong> (o una evaluación importante) con todo lo del curso: reglas claras, tus apuntes, la IA como tutor y práctica espaciada.</p>
      <pre><code>Plan de estudio:
Materia y fecha del examen: ________________
Temas (del programa):       ________________
Regla de IA en la materia:  ________________
Material: apuntes, libro, exámenes viejos (si hay)

Semana 1: leer y resumir cada tema (resumen propio + comparación con IA)
Semana 2: preguntas de práctica y técnica Feynman por tema
Últimos 2 días: simulacros con tiempo y repaso de errores

Cada sesión: primero vos (10 min sin IA), después la IA.</code></pre>
      <table>
        <tr><th>Paso del plan</th><th>Módulo del curso</th></tr>
        <tr><td>Reglas de la materia</td><td>Reglas, privacidad y dependencia</td></tr>
        <tr><td>Resúmenes y apuntes</td><td>Leer y escribir con IA</td></tr>
        <tr><td>Entender lo difícil</td><td>La IA como tutor</td></tr>
        <tr><td>Practicar y repasar</td><td>Practicar para recordar</td></tr>
        <tr><td>Datos para un trabajo</td><td>Verificar y citar</td></tr>
      </table>
      <p><strong>Empezá con tiempo:</strong> el estudio espaciado necesita días. Con 10 o 12 días antes del examen alcanza para la mayoría de las materias.</p>
      <p><strong>Si no tenés un examen cerca,</strong> elegí un tema que quieras aprender y armá tu propia evaluación final con la IA.</p>
      <p>Por ejemplo, Valen armó el plan para el segundo parcial de Anatomía 12 días antes. Puso la regla de la materia arriba de todo: "IA permitida para estudiar".</p>` },
    { titulo: "El registro honesto", html: `
      <p class="idea">Durante el plan, llevá un <strong>registro corto de cada sesión</strong>: qué hiciste vos, qué hizo la IA y qué aprendiste. Te muestra si la estás usando bien y te protege si alguien duda.</p>
      <table>
        <tr><th>Fecha</th><th>Lo que hice yo</th><th>Lo que hizo la IA</th><th>Lo que aprendí o fallé</th></tr>
        <tr><td>3/6</td><td>Leí y resumí el tema "corazón"</td><td>Comparó mi resumen: faltaba el nodo sinusal</td><td>No sabía qué era el nodo sinusal</td></tr>
        <tr><td>5/6</td><td>Respondí 10 preguntas sin mirar</td><td>Hizo las preguntas y me corrigió</td><td>7 de 10; fallé válvulas</td></tr>
        <tr><td>8/6</td><td>Expliqué válvulas como Feynman</td><td>Hizo de alumno y me preguntó</td><td>Ya las explico bien</td></tr>
      </table>
      <pre><code>Control de cada sesión (marcá):
[ ] Intenté primero sin IA
[ ] Verifiqué al menos un dato
[ ] No subí datos personales
[ ] Puedo explicar lo de hoy sin mirar</code></pre>
      <p><strong>Honesto quiere decir completo:</strong> si un día le pediste a la IA que hiciera algo por vos, anotalo. El registro es para vos, para ver qué cambiar.</p>
      <p><strong>Medí con números:</strong> cuántas preguntas acertaste por sesión. Si el número sube, tu método funciona.</p>
      <p>Por ejemplo, el registro de Valen mostró que en las preguntas de válvulas pasó de 3 de 10 a 9 de 10 en una semana. Ese tema, que antes le daba miedo, fue el que mejor le salió en el parcial.</p>` },
    { titulo: "Evaluá tu método con la rúbrica", html: `
      <p class="idea">Después del examen, evaluá tu método con la <strong>rúbrica</strong>: una lista de criterios con puntaje. El objetivo no es solo la nota, sino tener un método que puedas repetir.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Reglas</td><td>Las conocí y las respeté</td><td>Las supuse sin confirmar</td><td>No las tuve en cuenta</td></tr>
        <tr><td>Primero yo</td><td>Intenté sin IA en todas las sesiones</td><td>En la mitad</td><td>Casi nunca</td></tr>
        <tr><td>Práctica</td><td>Preguntas sin mirar en cada sesión</td><td>A veces</td><td>Solo releí</td></tr>
        <tr><td>Espaciado</td><td>Cada tema 3 veces o más, con días de por medio</td><td>2 veces</td><td>Todo junto al final</td></tr>
        <tr><td>Verificación</td><td>Verifiqué lo que usé de la IA</td><td>Algunas cosas</td><td>Nada</td></tr>
        <tr><td>Registro</td><td>Completo y honesto</td><td>Incompleto</td><td>Sin registro</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → tenés un método: repetilo en la próxima materia
7 a 9   → mejorá el criterio más bajo en el próximo examen
0 a 6   → repasá los módulos de tutor y de práctica</code></pre>
      <p><strong>Compará con antes:</strong> poné al lado la nota del examen anterior y cómo te sentiste al rendir. ¿Pudiste explicar sin ayuda?</p>
      <p><strong>Compartí lo que funcionó:</strong> un buen método sirve también a tus compañeros, siempre que cada uno haga su propio trabajo.</p>
      <p>Por ejemplo, Valen sacó 11 de 12 en la rúbrica y un 8 en el parcial, contra el 4 del primero. Perdió un punto en "primero yo": dos días abrió la IA antes de intentar.</p>` },
  ],
  practica: [
    "Completá el plan de estudio para un examen real (o un tema elegido) y anotá cuántos días y sesiones tiene.",
    "Llevá el registro honesto de todas las sesiones y anotá cuántas preguntas acertaste en la primera y en la última.",
    "Después del examen, puntuá tu método con la rúbrica y anotá tu total de 12 y la nota del examen.",
    "Escribí en 3 líneas qué vas a repetir y qué vas a cambiar en el próximo examen.",
  ],
  recursos: [
    { t: "NotebookLM (Google): cuaderno de IA que trabaja con tus propios documentos", url: "https://notebooklm.google/" },
    { t: "Curso de este sitio: Aprender a aprender (técnicas de estudio)", url: "https://pkeios.github.io/EiaLearning/estudiar-mejor/" },
    { t: "The Learning Scientists: estrategias de estudio con evidencia (materiales descargables)", url: "https://www.learningscientists.org/downloadable-materials" },
  ],
  quiz: [
    { q: "Vas a armar tu plan de estudio. ¿Qué ponés arriba de todo?", opciones: ["Tu color favorito","La nota que querés","La regla de IA de la materia","El nombre de la IA"], correcta: 2, explicacion: "Todo el plan depende de qué está permitido. La nota tienta como meta, pero primero van las reglas." },
    { q: "¿Cuánto tiempo antes del examen conviene empezar el plan?", opciones: ["Unos 10 a 12 días","La noche anterior","Una hora antes","Un año antes"], correcta: 0, explicacion: "El espaciado necesita días. La noche anterior tienta, pero no da para repasar varias veces." },
    { q: "En cada sesión del plan, ¿qué hacés primero?", opciones: ["Abrís la IA","Mirás redes","Leés el resumen de la IA","10 minutos sin IA"], correcta: 3, explicacion: "Primero vos, después la IA. Abrir la IA tienta por cómodo." },
    { q: "Tenés exámenes viejos de la materia. ¿Para qué los usás?", opciones: ["Para memorizar las respuestas","Como modelo para que la IA arme simulacros parecidos","Para nada","Para subirlos a redes"], correcta: 1, explicacion: "Te preparan para el estilo real. Memorizar respuestas tienta, pero el examen cambia." },
    { q: "¿Qué anotás en el registro de cada sesión?", opciones: ["Solo la hora","Solo lo que hizo la IA","Lo que hiciste vos, lo que hizo la IA y lo que aprendiste o fallaste","Nada, alcanza con estudiar"], correcta: 2, explicacion: "Las tres columnas muestran tu método. Solo la IA tienta, pero falta lo tuyo." },
    { q: "Si un día le pediste a la IA que hiciera algo por vos, ¿lo anotás?", opciones: ["Sí: el registro es honesto y te sirve para cambiar","No, queda feo","No, nadie lo lee","Lo anotás como si lo hubieras hecho vos"], correcta: 0, explicacion: "Es para vos. \"Queda feo\" tienta, pero así no ves qué cambiar." },
    { q: "¿Cómo sabés con números si tu método funciona?", opciones: ["Por cuántas horas usaste la IA","Por la cantidad de chats","Por lo largo del resumen","Viendo si suben tus aciertos en las preguntas de práctica"], correcta: 3, explicacion: "Los aciertos miden lo que sabés. Las horas de IA tientan, pero no dicen cuánto aprendiste." },
    { q: "Usaste la IA casi siempre antes de intentar vos. ¿Cuántos puntos sacás en \"Primero yo\"?", opciones: ["2","0","1","12"], correcta: 1, explicacion: "\"Casi nunca\" es 0. 1 tienta, pero ese es para la mitad de las sesiones." },
    { q: "Si estudiaste todo junto el último día, ¿qué criterio baja?", opciones: ["Reglas","Registro","Espaciado","Verificación"], correcta: 2, explicacion: "Espaciado pide volver a cada tema varias veces. Registro tienta, pero es otro criterio." },
    { q: "Sacaste 8 de 12 en la rúbrica. ¿Qué hacés?", opciones: ["Mejorás el criterio más bajo en el próximo examen","Dejás de usar IA para siempre","Empezás el curso de cero","Nada"], correcta: 0, explicacion: "De 7 a 9, falta pulir. Dejar la IA tienta, pero el problema es cómo la usás." },
    { q: "Además de la nota, ¿qué comparás con el examen anterior?", opciones: ["Cuántos chats tuviste","El color de la hoja","Nada más","Si pudiste explicar sin ayuda y cómo te sentiste al rendir"], correcta: 3, explicacion: "Muestra si aprendiste de verdad. \"Nada más\" tienta si la nota fue buena." },
    { q: "Tu método funcionó. ¿Cómo lo compartís con compañeros?", opciones: ["Pasándoles tus resúmenes para que los entreguen","Contándoles el método, y que cada uno haga su propio trabajo","Haciéndoles el trabajo","No compartiendo"], correcta: 1, explicacion: "El método sirve a todos. Pasar tus resúmenes tienta por solidario, pero les saca el aprendizaje." },
  ],
},
];
