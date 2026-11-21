// Temario del curso "IA y sociedad: qué cambia y qué cuidar". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ia-etica y node tools/metodologia.js ia-etica
window.TEMARIO = [
{
  id: "que-es",
  icono: "🤖",
  titulo: "Qué es la IA y dónde ya está",
  nivel: "Básico",
  objetivos: [
    "Explicar con tus palabras cómo aprende un sistema de IA a partir de datos",
    "Reconocer usos de IA en la vida diaria que muchas veces no se ven",
    "Distinguir lo que la IA hace bien de lo que no puede hacer",
  ],
  lecciones: [
    { titulo: "Aprender de datos", video: {"id":"_tA5cinv0U8","t":"¿Qué es y cómo funciona la inteligencia artificial? · Derivando (8:33)"}, html: `
      <p class="idea">La <strong>inteligencia artificial</strong> de hoy son programas que <strong>aprenden patrones a partir de muchísimos ejemplos</strong>, en lugar de seguir reglas escritas una por una por una persona.</p>
      <p>En todo el curso acompañamos a <strong>Marcela</strong>, preceptora en una escuela de Tucumán. Ve que sus alumnos, su familia y hasta el municipio usan IA para todo, y quiere entender qué cambia, qué riesgos hay y qué puede hacer ella para usarla bien.</p>
      <table>
        <tr><th>Programa tradicional</th><th>Sistema de IA</th></tr>
        <tr><td>Una persona escribe las reglas: "si el mail dice X, es spam"</td><td>Se le muestran miles de mails marcados como spam o no, y encuentra los patrones</td></tr>
        <tr><td>Hace exactamente lo que dicen las reglas</td><td>Puede acertar en casos nuevos, pero también equivocarse</td></tr>
        <tr><td>Es fácil saber por qué decidió algo</td><td>A veces es difícil explicar por qué decidió algo</td></tr>
      </table>
      <p>El <strong>aprendizaje automático</strong> es la forma de hacer IA en la que el programa aprende de datos. Un <strong>modelo</strong> es el resultado de ese aprendizaje: lo que después se usa para responder.</p>
      <p><strong>Los datos son la clave:</strong> el modelo aprende lo que hay en sus datos. Si los datos tienen errores o prejuicios, el modelo también (lo ves en el próximo módulo).</p>
      <p><strong>Los chats como ChatGPT o Gemini</strong> son modelos de lenguaje: aprendieron de muchísimos textos a predecir qué palabra sigue. Escriben muy bien, pero no "saben" si lo que dicen es verdad.</p>
      <p>Por ejemplo, Marcela pensaba que la IA "piensa" como una persona. Entendió que aprende patrones de datos, y que por eso puede sonar segura y equivocarse.</p>` },
    { titulo: "Dónde ya está la IA", html: `
      <p class="idea">La IA no está solo en los chats: ya decide o ayuda a decidir muchas cosas de la vida diaria, muchas veces <strong>sin que nos demos cuenta</strong>.</p>
      <table>
        <tr><th>Dónde</th><th>Qué hace</th></tr>
        <tr><td>Redes sociales y plataformas de video</td><td>Elige qué publicaciones y videos te muestra</td></tr>
        <tr><td>Celular</td><td>Reconoce tu cara, corrige lo que escribís, ordena tus fotos</td></tr>
        <tr><td>Bancos y billeteras virtuales</td><td>Detecta movimientos sospechosos, ayuda a decidir si te dan un crédito</td></tr>
        <tr><td>Búsquedas de trabajo</td><td>Algunas empresas filtran currículums con sistemas automáticos</td></tr>
        <tr><td>Salud</td><td>Ayuda a leer estudios por imágenes, siempre con un profesional</td></tr>
        <tr><td>Mapas y transporte</td><td>Calcula rutas y tiempos según el tránsito</td></tr>
        <tr><td>Atención al cliente</td><td>Robots de chat que responden primero</td></tr>
      </table>
      <p><strong>Cuando la IA ayuda a decidir algo importante</strong> sobre una persona (un crédito, un trabajo, un tratamiento), los errores pueden afectar su vida. Por eso importa saber cuándo se usa y poder pedir que la decisión la revise una persona.</p>
      <p><strong>No todo lo que dice "IA" lo es:</strong> a veces es una palabra de moda en una publicidad.</p>
      <p>Por ejemplo, Marcela hizo una lista con sus alumnos de dónde usaron IA en un día: el desbloqueo con la cara, los videos recomendados, el corrector del teclado y el mapa para llegar a la escuela. Contaron 9 usos antes del mediodía.</p>` },
    { titulo: "Lo que hace bien y lo que no", html: `
      <p class="idea">La IA es muy buena para algunas tareas y muy mala para otras. Saber la diferencia evita <strong>confiar de más</strong> y también <strong>tenerle miedo de más</strong>.</p>
      <table>
        <tr><th>Suele hacer bien</th><th>Suele fallar</th></tr>
        <tr><td>Encontrar patrones en muchos datos</td><td>Entender el contexto de una situación nueva</td></tr>
        <tr><td>Resumir, traducir, redactar borradores</td><td>Saber si un dato es verdad (puede inventar: "alucinar")</td></tr>
        <tr><td>Reconocer imágenes parecidas a las que vio</td><td>Casos raros que casi no aparecían en sus datos</td></tr>
        <tr><td>Hacer muchas veces lo mismo sin cansarse</td><td>Explicar por qué decidió algo</td></tr>
        <tr><td>Responder rápido a cualquier hora</td><td>Hacerse responsable de una decisión</td></tr>
      </table>
      <p>Una <strong>alucinación</strong> es cuando la IA inventa algo que suena real: un dato, una cita, un libro. Lo ves también en el curso de estudiar con IA.</p>
      <p><strong>La responsabilidad es de las personas:</strong> la IA no "decide" en el sentido humano. Quien la usa para decidir algo sobre otros sigue siendo responsable del resultado.</p>
      <p><strong>Ni magia ni monstruo:</strong> las noticias exageran para un lado o para el otro. Mirá qué hace en concreto un sistema y qué pasa cuando se equivoca.</p>
      <p>Por ejemplo, la escuela de Marcela quería usar un chat para responder dudas de las familias. Ella propuso que respondiera horarios y trámites, pero que las situaciones de un alumno en particular las atendiera siempre una persona.</p>` },
  ],
  practica: [
    "Durante un día, anotá cada vez que usás algo con IA (aunque no lo parezca) y contá cuántos usos encontraste.",
    "Elegí 2 usos de tu lista y anotá qué pasaría si la IA se equivocara en cada uno.",
    "Hacele a un chat de IA 3 preguntas sobre tu ciudad y anotá cuántas respuestas tenían algún error.",
  ],
  recursos: [
    { t: "Elements of AI: curso gratis de introducción a la IA (en castellano)", url: "https://course.elementsofai.com/es" },
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "OCDE: principios sobre inteligencia artificial (en inglés)", url: "https://oecd.ai/en/ai-principles" },
  ],
  quiz: [
    { q: "Si un sistema aprende a detectar spam viendo miles de mails marcados, ¿qué tipo de programa es?", opciones: ["Un programa con reglas escritas a mano","Un antivirus común","Un sistema de IA que aprende de datos","Una planilla"], correcta: 2, explicacion: "Aprende patrones de ejemplos. Las reglas a mano tientan, pero ahí la persona escribe cada regla." },
    { q: "Si los datos con los que aprendió un modelo tienen prejuicios, ¿qué pasa con el modelo?", opciones: ["Puede repetir esos prejuicios","Los corrige solo","Se apaga","No le afecta"], correcta: 0, explicacion: "Aprende lo que hay en los datos. \"Los corrige solo\" tienta, pero no sabe que son prejuicios." },
    { q: "Si un chat de IA te responde con mucha seguridad, ¿qué sabés?", opciones: ["Que es verdad","Que lo revisó un experto","Que lo buscó en un libro","Que puede estar equivocado igual: no sabe si es verdad"], correcta: 3, explicacion: "Predice texto, no comprueba hechos. \"Es verdad\" tienta por el tono." },
    { q: "Las redes eligen qué videos ves. ¿Hay IA ahí?", opciones: ["No, los elige una persona","Sí: un sistema de recomendación","No, es al azar","Solo si pagás"], correcta: 1, explicacion: "Aprende de lo que mirás. \"Al azar\" tienta, pero está calculado." },
    { q: "Un banco usa IA para ayudar a decidir si te da un crédito. ¿Por qué importa saberlo?", opciones: ["No importa","Porque es más barato","Porque un error te puede afectar y conviene poder pedir que lo revise una persona","Porque así te lo dan seguro"], correcta: 2, explicacion: "Las decisiones importantes necesitan revisión. \"No importa\" tienta, pero afecta tu vida." },
    { q: "Si una publicidad dice \"con inteligencia artificial\", ¿qué pensás?", opciones: ["Que puede ser real o solo una palabra de moda: hay que ver qué hace","Que es mejor seguro","Que es peligroso seguro","Que es gratis"], correcta: 0, explicacion: "La palabra vende. \"Mejor seguro\" tienta, pero no dice nada concreto." },
    { q: "¿En qué suele ser buena la IA?", opciones: ["En saber si un dato es verdad","En hacerse responsable","En entender situaciones nuevas raras","En encontrar patrones en muchos datos"], correcta: 3, explicacion: "Es su fuerte. \"Saber si es verdad\" tienta, pero ahí falla." },
    { q: "¿Qué es una alucinación de la IA?", opciones: ["Cuando se apaga","Cuando inventa algo que suena real","Cuando responde lento","Cuando habla de sueños"], correcta: 1, explicacion: "Inventa datos o citas. \"Se apaga\" tienta, pero es otra cosa." },
    { q: "Si una escuela usa IA para decidir algo sobre un alumno y sale mal, ¿quién es responsable?", opciones: ["La IA","Nadie","Las personas que la usaron para decidir","El alumno"], correcta: 2, explicacion: "La responsabilidad sigue siendo humana. \"La IA\" tienta, pero no responde por nada." },
    { q: "Una noticia dice que la IA va a resolver todo y otra que va a destruir todo. ¿Qué hacés?", opciones: ["Mirás qué hace en concreto un sistema y qué pasa cuando falla","Le creés a la más optimista","Le creés a la más alarmista","Dejás de usar la tecnología"], correcta: 0, explicacion: "Ni magia ni monstruo. Cualquiera de los extremos tienta por llamativo." },
    { q: "Si la escuela quiere un chat para las familias, ¿qué uso es más seguro?", opciones: ["Que resuelva todo sin personas","Que decida sanciones","Que dé información de salud de los alumnos","Que responda horarios y trámites, y una persona atienda los casos de cada alumno"], correcta: 3, explicacion: "Lo sensible lo atiende una persona. \"Que resuelva todo\" tienta por cómodo." },
    { q: "Tu celular se desbloquea con tu cara. ¿Hay IA?", opciones: ["No, es una foto guardada","Sí: reconoce tu cara con un modelo","No, es magia","Solo en celulares caros"], correcta: 1, explicacion: "Usa reconocimiento facial. \"Una foto guardada\" tienta, pero compara rasgos con un modelo." },
  ],
},
{
  id: "sesgos",
  icono: "⚖️",
  titulo: "Sesgos y discriminación",
  nivel: "Intermedio",
  objetivos: [
    "Explicar qué es un sesgo algorítmico y de dónde viene",
    "Reconocer casos en los que la IA puede tratar peor a algunos grupos",
    "Proponer preguntas y controles para detectar sesgos",
  ],
  lecciones: [
    { titulo: "Qué es un sesgo", video: {"id":"FJcyDi4C6Nw","t":"Inteligencia artificial y sesgos · Agesic (5:59)"}, html: `
      <p class="idea">Un <strong>sesgo algorítmico</strong> es cuando un sistema de IA da <strong>resultados injustos o peores para algunos grupos</strong> de personas, en general porque lo aprendió de datos que ya tenían esa desigualdad.</p>
      <table>
        <tr><th>De dónde viene</th><th>Ejemplo</th></tr>
        <tr><td>Datos del pasado con discriminación</td><td>Si antes se contrataba casi solo a hombres para un puesto, el sistema aprende que "lo normal" es un hombre</td></tr>
        <tr><td>Datos que no representan a todos</td><td>Un sistema de reconocimiento de caras entrenado sobre todo con personas de piel clara</td></tr>
        <tr><td>Qué se eligió medir</td><td>Medir "buen alumno" solo por asistencia deja afuera a quien trabaja</td></tr>
        <tr><td>Cómo se usa</td><td>Usar un sistema pensado para otro país sin adaptarlo</td></tr>
      </table>
      <p><strong>Casos reales estudiados:</strong> investigaciones sobre sistemas comerciales de reconocimiento facial encontraron muchos más errores con mujeres de piel oscura que con hombres de piel clara. Y una gran empresa abandonó en 2018 una herramienta para seleccionar currículums porque perjudicaba a las mujeres.</p>
      <p><strong>La IA no es neutral por ser una máquina:</strong> repite y a veces agranda lo que hay en sus datos. Y como decide rápido y en masa, un sesgo puede afectar a miles de personas.</p>
      <p>Esto se conecta con lo que viste en el curso de imágenes con IA: si pedís "un médico", muchas veces sale un varón.</p>
      <p>Por ejemplo, Marcela probó pedirle a una IA "foto de un estudiante destacado" 5 veces: en las 5 salía el mismo tipo de chico. Lo usó en clase para hablar de sesgos.</p>` },
    { titulo: "Dónde puede hacer daño", html: `
      <p class="idea">Un sesgo en una recomendación de videos molesta. En decisiones <strong>sobre personas</strong> (trabajo, crédito, salud, justicia, educación) puede hacer <strong>mucho daño</strong>.</p>
      <table>
        <tr><th>Área</th><th>Riesgo si hay sesgo</th></tr>
        <tr><td>Selección de personal</td><td>Descartar a mujeres, a personas mayores o de ciertos barrios</td></tr>
        <tr><td>Créditos</td><td>Negar préstamos a grupos que antes tuvieron menos acceso</td></tr>
        <tr><td>Salud</td><td>Diagnósticos menos precisos para grupos poco representados en los datos</td></tr>
        <tr><td>Seguridad</td><td>Reconocimiento facial que se equivoca más con algunas personas</td></tr>
        <tr><td>Educación</td><td>Predecir que un alumno "va a abandonar" y tratarlo distinto por eso</td></tr>
      </table>
      <p><strong>El problema de la escala:</strong> un prejuicio de una persona afecta a quienes trata esa persona. Un sistema sesgado usado por una empresa grande afecta a cientos de miles, y muchas veces nadie se entera.</p>
      <p><strong>La profecía que se cumple:</strong> si un sistema predice que alguien va a fallar y por eso se le dan menos oportunidades, termina fallando. La predicción "acierta", pero porque la produjo.</p>
      <p><strong>Por eso muchas leyes y recomendaciones</strong> piden más cuidado en estos usos "de alto riesgo" (lo ves en el módulo de reglas).</p>
      <p>Por ejemplo, el municipio de Marcela evaluaba un sistema para predecir qué alumnos iban a abandonar la escuela. Ella preguntó qué datos usaba y qué se haría con los chicos marcados: ¿ayudarlos o etiquetarlos?</p>` },
    { titulo: "Preguntas para detectar sesgos", html: `
      <p class="idea">No hace falta ser programador para hacer <strong>buenas preguntas</strong> sobre un sistema de IA. Las respuestas (o la falta de respuestas) dicen mucho.</p>
      <pre><code>Preguntas ante un sistema que decide sobre personas:
1. ¿Qué decide o recomienda, y sobre quiénes?
2. ¿Con qué datos aprendió? ¿Representan a la gente de acá?
3. ¿Se probó si se equivoca más con algún grupo?
4. ¿Una persona revisa las decisiones importantes?
5. ¿La gente afectada sabe que se usa IA?
6. ¿Se puede reclamar y pedir una revisión humana?</code></pre>
      <table>
        <tr><th>Señal de cuidado</th><th>Señal de alerta</th></tr>
        <tr><td>Se probó con distintos grupos y se publicaron los resultados</td><td>"Es una caja negra, confiá"</td></tr>
        <tr><td>Hay una persona que revisa</td><td>Decide solo, sin revisión</td></tr>
        <tr><td>Se avisa que se usa IA</td><td>Nadie sabe que se usa</td></tr>
        <tr><td>Hay un canal para reclamar</td><td>No hay a quién reclamar</td></tr>
      </table>
      <p>Una <strong>caja negra</strong> es un sistema del que no se puede saber cómo llega a sus resultados. No siempre es malo, pero en decisiones sobre personas hace falta más transparencia.</p>
      <p><strong>Cuando usás IA vos,</strong> también podés reducir sesgos: describí con precisión lo que necesitás y revisá si el resultado deja afuera a alguien.</p>
      <p>Por ejemplo, Marcela llevó las 6 preguntas a la reunión sobre el sistema de abandono escolar. La empresa no pudo responder la 3: decidieron hacer una prueba piloto con revisión de los preceptores antes de usarlo.</p>` },
  ],
  practica: [
    "Pedile a una IA de imágenes o de texto 5 veces algo sobre una profesión y anotá cuántas veces se repitió el mismo tipo de persona.",
    "Elegí un área de la tabla y escribí un ejemplo concreto de cómo un sesgo podría afectar a alguien de tu barrio. Anotá qué grupo sería el afectado.",
    "Aplicá las 6 preguntas a un sistema que conozcas (en tu trabajo, escuela o banco) y anotá cuántas pudiste responder.",
  ],
  recursos: [
    { t: "Disposición 2/2023: Recomendaciones para una Inteligencia Artificial Fiable (Argentina)", url: "https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-2-2023-384656" },
    { t: "OCDE: principios sobre inteligencia artificial (en inglés)", url: "https://oecd.ai/en/ai-principles" },
    { t: "Curso de este sitio: Crear imágenes con IA, con responsabilidad (deepfakes)", url: "https://pkeios.github.io/EiaLearning/ia-imagenes/" },
  ],
  quiz: [
    { q: "Si un sistema de selección aprendió de 10 años de contrataciones casi solo de hombres, ¿qué puede pasar?", opciones: ["Que sea más justo","Nada, es una máquina","Que perjudique a las mujeres porque aprendió ese patrón","Que prefiera a las mujeres"], correcta: 2, explicacion: "Aprende la desigualdad del pasado. \"Es una máquina\" tienta, pero no la hace neutral." },
    { q: "¿Qué es un sesgo algorítmico?", opciones: ["Resultados injustos o peores para algunos grupos","Un virus informático","Un error de ortografía","Una actualización"], correcta: 0, explicacion: "Afecta a grupos de personas. \"Un virus\" tienta, pero es otra cosa." },
    { q: "Si un reconocimiento de caras se entrenó casi solo con personas de piel clara, ¿qué riesgo hay?", opciones: ["Que funcione igual con todos","Que no reconozca a nadie","Ninguno","Que se equivoque más con personas de piel oscura"], correcta: 3, explicacion: "Los datos no representan a todos. \"Igual con todos\" tienta, pero los estudios muestran lo contrario." },
    { q: "Medís \"buen alumno\" solo por asistencia. ¿Qué sesgo puede aparecer?", opciones: ["Ninguno","Perjudicar a quien trabaja o cuida a alguien y falta más","Perjudicar a los que van siempre","Que aprendan más"], correcta: 1, explicacion: "Qué se elige medir importa. \"Ninguno\" tienta, pero la medida deja gente afuera." },
    { q: "¿Por qué un sesgo en un sistema de IA puede ser peor que el de una persona?", opciones: ["Porque la IA es mala a propósito","No puede ser peor","Porque decide en masa y puede afectar a miles sin que nadie se entere","Porque cuesta más"], correcta: 2, explicacion: "La escala lo agranda. \"Mala a propósito\" tienta, pero no tiene intenciones." },
    { q: "¿En qué uso un sesgo hace más daño?", opciones: ["Decidir quién recibe un crédito","Recomendar una canción","Elegir un fondo de pantalla","Ordenar tus fotos por color"], correcta: 0, explicacion: "Afecta derechos y oportunidades. La canción tienta, pero es de bajo riesgo." },
    { q: "Si un sistema predice que un alumno va a abandonar y por eso le dan menos atención, ¿qué puede pasar?", opciones: ["Que no abandone nunca","Nada","Que mejore solo","Que abandone justamente por eso: la predicción se cumple sola"], correcta: 3, explicacion: "Es la profecía que se cumple. \"Nada\" tienta, pero el trato cambia el resultado." },
    { q: "Si te dicen que un sistema \"es una caja negra, confiá\", ¿qué pensás?", opciones: ["Que es más moderno","Que es una señal de alerta si decide sobre personas","Que es más seguro","Que no hace falta preguntar"], correcta: 1, explicacion: "Sin explicación no se puede revisar. \"Más moderno\" tienta, pero no da garantías." },
    { q: "Querés saber si un sistema trata peor a algún grupo. ¿Qué preguntás?", opciones: ["¿De qué color es la pantalla?","¿Cuánto cuesta?","¿Se probó si se equivoca más con algún grupo?","¿Es en inglés?"], correcta: 2, explicacion: "Esa prueba muestra el sesgo. El costo tienta, pero no dice nada de justicia." },
    { q: "Si un sistema decide sobre personas y nadie revisa sus decisiones, ¿qué falta?", opciones: ["Supervisión humana en las decisiones importantes","Más velocidad","Más datos de cualquier tipo","Nada"], correcta: 0, explicacion: "Una persona revisa los casos importantes. Más velocidad tienta, pero no corrige errores." },
    { q: "Si la gente afectada no sabe que se usa IA para decidir sobre ella, ¿qué problema hay?", opciones: ["Ninguno","Que paga más","Que la IA se ofende","No puede reclamar ni pedir revisión"], correcta: 3, explicacion: "Saber es el primer paso para reclamar. \"Ninguno\" tienta si funciona bien." },
    { q: "Usás IA para hacer un afiche y salen solo personas de un tipo. ¿Qué hacés?", opciones: ["Lo usás igual","Describís con precisión la diversidad que necesitás y revisás el resultado","Dejás de usar IA para siempre","Pedís lo mismo 20 veces"], correcta: 1, explicacion: "Describir y revisar reduce el sesgo. Pedir lo mismo 20 veces tienta, pero repite el patrón." },
  ],
},
{
  id: "privacidad",
  icono: "🔒",
  titulo: "Tus datos y la IA",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer qué datos tuyos usan los sistemas de IA y de dónde salen",
    "Decidir qué información no compartir con un chat de IA",
    "Conocer tus derechos sobre tus datos personales en Argentina",
  ],
  lecciones: [
    { titulo: "De dónde salen los datos", html: `
      <p class="idea">La IA se alimenta de datos, y muchos son <strong>datos sobre las personas</strong>: lo que escribimos, publicamos, compramos, miramos y dónde estamos.</p>
      <table>
        <tr><th>Tipo de dato</th><th>Ejemplo</th></tr>
        <tr><td>Lo que publicás</td><td>Fotos, comentarios y videos en redes</td></tr>
        <tr><td>Lo que hacés</td><td>Qué mirás, cuánto tiempo, qué likes das</td></tr>
        <tr><td>Dónde estás</td><td>La ubicación del celular</td></tr>
        <tr><td>Lo que comprás</td><td>Compras con tarjeta o en tiendas online</td></tr>
        <tr><td>Lo que le escribís a un chat de IA</td><td>Preguntas, documentos que subís, fotos</td></tr>
      </table>
      <p>Los <strong>datos personales</strong> son los que identifican a una persona o permiten identificarla: nombre, cara, DNI, dirección, número de teléfono. Los <strong>datos sensibles</strong> son los que pueden perjudicar mucho si se difunden: salud, religión, ideas políticas, origen, vida sexual.</p>
      <p><strong>Datos sueltos dicen mucho juntos:</strong> tus horarios, tus compras y tu ubicación, combinados, permiten saber dónde vivís, dónde trabajás y qué te pasa.</p>
      <p><strong>Lo que escribís en un chat de IA</strong> puede guardarse y, según la herramienta y tu configuración, usarse para mejorar el modelo.</p>
      <p>Por ejemplo, una alumna de Marcela le contó todo sobre un problema de salud a un chat de IA para pedir consejos. Marcela le explicó que eso queda guardado en una empresa y la ayudó a hablar con el gabinete de la escuela.</p>` },
    { titulo: "Qué no compartir", video: {"id":"eTSLhFCLnu8","t":"Cuando uses herramientas de IA: ¡protegé tu privacidad! · DW Tecnología y mundo digital (4:24)"}, html: `
      <p class="idea">Antes de escribirle o subirle algo a una IA, preguntate: <strong>¿me molestaría que esto lo lea un desconocido?</strong> Si la respuesta es sí, no lo compartas o sacale los datos que identifican.</p>
      <table>
        <tr><th>No compartas</th><th>Por qué</th></tr>
        <tr><td>Contraseñas, códigos, claves del banco</td><td>Nadie las necesita, nunca</td></tr>
        <tr><td>DNI, CUIL, número de tarjeta</td><td>Robo de identidad</td></tr>
        <tr><td>Datos de salud tuyos o de otros</td><td>Son datos sensibles</td></tr>
        <tr><td>Datos de otras personas (alumnos, pacientes, clientes)</td><td>No son tuyos para compartir</td></tr>
        <tr><td>Documentos confidenciales del trabajo</td><td>Pueden violar reglas de tu trabajo</td></tr>
        <tr><td>Fotos de chicos</td><td>Dejan de estar bajo tu control</td></tr>
      </table>
      <pre><code>Anonimizar antes de pedir ayuda:
✗ "María Pérez, DNI 30.123.456, de 4.º B, tiene diabetes y..."
✓ "Una alumna de 4.º año con una condición de salud crónica..."
Sacá: nombres, números, direcciones, lugares exactos y fechas que no hacen falta.</code></pre>
      <p><strong>Anonimizar</strong> es sacar los datos que permiten saber de quién se trata, para que se pueda pedir ayuda sin exponer a nadie.</p>
      <p><strong>Configuración:</strong> muchas herramientas permiten que tus chats no se usen para entrenar el modelo o que se borren. Buscalo en la configuración de privacidad.</p>
      <p>Por ejemplo, Marcela quería ayuda para redactar un informe sobre un alumno. Escribió "un alumno de 2.º año con muchas inasistencias" sin nombre ni curso exacto, y obtuvo un buen borrador sin exponerlo.</p>` },
    { titulo: "Tus derechos sobre tus datos", html: `
      <p class="idea">En Argentina, la <strong>Ley 25.326 de Protección de Datos Personales</strong> te da derechos sobre tus datos, también cuando una empresa los usa con IA. El organismo de control es la <strong>AAIP</strong>.</p>
      <table>
        <tr><th>Derecho</th><th>Qué podés pedir</th></tr>
        <tr><td>Acceso</td><td>Saber qué datos tuyos tiene una empresa u organismo</td></tr>
        <tr><td>Rectificación y actualización</td><td>Que corrijan datos equivocados o viejos</td></tr>
        <tr><td>Supresión</td><td>Que borren datos que no corresponde que tengan</td></tr>
        <tr><td>Información</td><td>Saber para qué se usan tus datos y quién los tiene</td></tr>
      </table>
      <pre><code>Cómo ejercer tus derechos:
1. Escribí a la empresa por un canal formal (mail o formulario).
2. Decí qué derecho ejercés (por ejemplo, acceso) y adjuntá tu DNI.
3. Guardá la constancia del pedido con la fecha.
4. Si no responden, podés reclamar ante la AAIP.</code></pre>
      <p><strong>Consentimiento:</strong> en general, para usar tus datos personales hace falta que lo aceptes, sabiendo para qué. Por eso las apps piden aceptar términos: leé qué aceptás (lo ves en el curso de lectura).</p>
      <p><strong>Esta lección te orienta, pero no reemplaza el asesoramiento de un abogado</strong> ni lo que te indique la AAIP en tu caso concreto.</p>
      <p>Por ejemplo, Marcela recibía publicidad muy personal de una tienda donde nunca había comprado. Les escribió pidiendo acceso a sus datos para saber de dónde los habían sacado y que los borraran.</p>` },
  ],
  practica: [
    "Revisá la configuración de privacidad de una herramienta de IA que uses y anotá si podés evitar que tus chats se usen para entrenar.",
    "Tomá un pedido que le harías a una IA con datos de otra persona, anonimizalo y anotá qué datos sacaste.",
    "Escribí un pedido de acceso a tus datos para una empresa (sin mandarlo) y anotá los 3 elementos que incluiste.",
  ],
  recursos: [
    { t: "AAIP: protección de datos personales (Argentina)", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
    { t: "Curso de este sitio: Seguridad digital y estafas", url: "https://pkeios.github.io/EiaLearning/seguridad-digital/" },
    { t: "Elements of AI: curso gratis de introducción a la IA (en castellano)", url: "https://course.elementsofai.com/es" },
  ],
  quiz: [
    { q: "Si mirás muchos videos de recetas y te empiezan a aparecer anuncios de cocina, ¿de dónde salió el dato?", opciones: ["Del azar","De tu DNI","De lo que hacés en la plataforma: qué mirás y cuánto tiempo","De nada"], correcta: 2, explicacion: "Tu comportamiento es un dato. \"Del azar\" tienta, pero está calculado." },
    { q: "¿Qué es un dato sensible?", opciones: ["Uno que puede perjudicar mucho si se difunde, como la salud","Un dato que se rompe fácil","Tu color favorito","La hora"], correcta: 0, explicacion: "Salud, religión, política. \"Se rompe\" tienta por la palabra, pero no." },
    { q: "Tus horarios, compras y ubicación están en distintas apps. ¿Qué pasa si se juntan?", opciones: ["Nada, son datos sueltos","Se borran","Se vuelven anónimos","Dicen mucho de vos: dónde vivís, dónde trabajás, qué te pasa"], correcta: 3, explicacion: "Combinados revelan mucho. \"Son sueltos\" tienta, pero juntos identifican." },
    { q: "Le contás un problema de salud a un chat de IA. ¿Qué tenés que saber?", opciones: ["Que se borra al cerrar","Que puede quedar guardado en la empresa y usarse según tu configuración","Que es secreto profesional","Que lo lee un médico"], correcta: 1, explicacion: "No es una consulta médica privada. \"Se borra\" tienta, pero en general no." },
    { q: "Antes de escribirle algo a una IA, ¿qué te preguntás?", opciones: ["¿Está bien escrito?","¿Es largo?","¿Me molestaría que lo lea un desconocido?","¿Es en castellano?"], correcta: 2, explicacion: "Es la prueba de privacidad. \"Está bien escrito\" tienta, pero no protege." },
    { q: "Querés ayuda con el caso de un alumno. ¿Qué hacés?", opciones: ["Anonimizás: sin nombre, DNI ni datos que lo identifiquen","Ponés todos los datos para que sea preciso","Subís su legajo","Le sacás una foto"], correcta: 0, explicacion: "Así pedís ayuda sin exponerlo. \"Para que sea preciso\" tienta, pero no hace falta." },
    { q: "Una IA te pide el código que te llegó por SMS. ¿Qué hacés?", opciones: ["Lo das si es una IA conocida","Lo das a medias","Lo das si es urgente","No lo das nunca"], correcta: 3, explicacion: "Nadie necesita tus códigos. \"Si es conocida\" tienta, pero es una estafa típica." },
    { q: "Querés que tus chats no se usen para entrenar el modelo. ¿Dónde buscás?", opciones: ["En el prompt","En la configuración de privacidad de la herramienta","En el nombre del archivo","No se puede nunca"], correcta: 1, explicacion: "Si existe la opción, está ahí. El prompt tienta, pero no cambia la configuración." },
    { q: "¿Qué ley protege tus datos personales en Argentina?", opciones: ["La Ley 24.240","La Ley 11.723","La Ley 25.326","Ninguna"], correcta: 2, explicacion: "Es la de protección de datos. La 24.240 tienta, pero es de consumidores." },
    { q: "Querés saber qué datos tuyos tiene una empresa. ¿Qué derecho ejercés?", opciones: ["El de acceso","El de arrepentimiento","El de garantía","El de autor"], correcta: 0, explicacion: "Acceso es saber qué tienen. Arrepentimiento tienta, pero es de compras." },
    { q: "Una empresa tiene un dato tuyo equivocado. ¿Qué pedís?", opciones: ["El acceso solamente","Nada","Una indemnización automática","La rectificación"], correcta: 3, explicacion: "Rectificar es corregir. El acceso tienta, pero solo te muestra el dato." },
    { q: "Pediste acceso a tus datos y la empresa no responde. ¿Dónde reclamás?", opciones: ["En el INPI","Ante la AAIP","En Defensa del Consumidor solamente","En ningún lado"], correcta: 1, explicacion: "La AAIP controla los datos personales. INPI tienta, pero es de marcas." },
  ],
},
{
  id: "informacion",
  icono: "📰",
  titulo: "Información, algoritmos y deepfakes",
  nivel: "Intermedio",
  objetivos: [
    "Explicar cómo los algoritmos de recomendación eligen lo que ves",
    "Reconocer el riesgo de los contenidos falsos hechos con IA",
    "Usar hábitos simples para informarte mejor",
  ],
  lecciones: [
    { titulo: "Los algoritmos de recomendación", video: {"id":"RSJrBEhdZxw","t":"Qué son los algoritmos y cómo aprenden de nosotros · BBC News Mundo (7:37)"}, html: `
      <p class="idea">Las redes y plataformas usan <strong>algoritmos de recomendación</strong>: sistemas que eligen qué mostrarte para que te quedes más tiempo. No te muestran "todo", te muestran lo que calculan que vas a mirar.</p>
      <table>
        <tr><th>Qué mira el algoritmo</th><th>Qué hace con eso</th></tr>
        <tr><td>Qué videos terminás de ver</td><td>Te muestra más parecidos</td></tr>
        <tr><td>Qué te hace comentar o compartir</td><td>Lo prioriza, aunque sea por enojo</td></tr>
        <tr><td>Con quién interactuás</td><td>Te muestra más de esas personas</td></tr>
        <tr><td>Cuánto tiempo te quedás</td><td>Busca lo que te retiene más</td></tr>
      </table>
      <p>Un <strong>algoritmo</strong> es una serie de pasos para resolver algo. Los de recomendación usan IA para aprender de lo que hacés.</p>
      <p><strong>La burbuja:</strong> si siempre te muestra lo que ya te gusta o ya pensás, ves cada vez menos de lo distinto. A eso se le dice <strong>burbuja de filtro</strong>.</p>
      <p><strong>Lo que enoja circula más:</strong> los contenidos que generan emociones fuertes (bronca, miedo) se comparten más, y los algoritmos tienden a mostrarlos más.</p>
      <p><strong>Podés influir:</strong> marcar "no me interesa", seguir fuentes distintas, buscar activamente en lugar de solo deslizar.</p>
      <p>Por ejemplo, un alumno de Marcela solo veía videos de un tema y creía que "todo el mundo" pensaba igual. En clase compararon sus inicios de redes y vieron que cada uno tenía uno distinto.</p>` },
    { titulo: "Contenido falso hecho con IA", html: `
      <p class="idea">Hoy cualquiera puede hacer con IA <strong>imágenes, audios y videos falsos muy creíbles</strong>. Eso facilita la <strong>desinformación</strong> y las estafas.</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplo</th><th>Daño</th></tr>
        <tr><td>Deepfake de video o audio</td><td>Un candidato "diciendo" algo que nunca dijo</td><td>Engaña a votantes</td></tr>
        <tr><td>Clonación de voz</td><td>La voz de un familiar pidiendo plata con urgencia</td><td>Estafas</td></tr>
        <tr><td>Imágenes falsas de hechos</td><td>Una "foto" de una catástrofe que no pasó</td><td>Miedo, desinformación</td></tr>
        <tr><td>Textos en masa</td><td>Miles de comentarios falsos para que algo parezca popular</td><td>Manipular la opinión</td></tr>
        <tr><td>Imágenes íntimas falsas</td><td>Montajes de personas reales</td><td>Violencia digital, mucho daño</td></tr>
      </table>
      <p>La <strong>desinformación</strong> es información falsa que circula, muchas veces a propósito para engañar.</p>
      <p><strong>El otro efecto:</strong> como existen los falsos, alguien puede decir que un video real "es IA" para no hacerse cargo. Por eso importa verificar en las dos direcciones.</p>
      <p><strong>Contra las estafas de voz:</strong> acordá con tu familia una palabra clave para emergencias, y ante un pedido urgente de plata, cortá y llamá vos al número de siempre.</p>
      <p>Los deepfakes y cómo actuar si alguien es víctima los ves a fondo en el curso de imágenes con IA de este sitio.</p>
      <p>Por ejemplo, a la mamá de Marcela le llegó un audio con una voz parecida a la de su nieto pidiendo plata. Cortó, lo llamó a su número y él estaba en la escuela: era una estafa.</p>` },
    { titulo: "Hábitos para informarse mejor", html: `
      <p class="idea">No hace falta ser experto para no caer: unos <strong>hábitos simples</strong> te protegen de la mayoría de los engaños y de la burbuja.</p>
      <pre><code>Antes de creer o compartir (30 segundos):
1. ¿Quién lo publicó? ¿Es una fuente conocida?
2. ¿Lo cuenta algún medio serio más?
3. ¿Me genera una emoción muy fuerte? (señal de alerta)
4. ¿La imagen o el video tienen algo raro?
5. Si no puedo verificarlo: no lo comparto.</code></pre>
      <table>
        <tr><th>Hábito</th><th>Para qué</th></tr>
        <tr><td>Seguir fuentes con miradas distintas</td><td>Salir de la burbuja</td></tr>
        <tr><td>Buscar la noticia vos, en lugar de solo deslizar</td><td>Elegir qué leer, no que el algoritmo elija</td></tr>
        <tr><td>Esperar antes de compartir algo que indigna</td><td>No ser parte de la cadena</td></tr>
        <tr><td>Buscar la imagen con búsqueda inversa</td><td>Saber de dónde salió</td></tr>
        <tr><td>Hablar del tema con otras personas</td><td>Contrastar puntos de vista</td></tr>
      </table>
      <p><strong>La IA también puede ayudar:</strong> podés pedirle a un chat que te explique los argumentos de distintas posturas sobre un tema. Igual, verificá los datos que te dé.</p>
      <p><strong>Con los chicos:</strong> en lugar de prohibir, conviene mirar juntos cómo funcionan los algoritmos y practicar verificar.</p>
      <p>Por ejemplo, Marcela armó con sus alumnos un "control de 30 segundos" pegado en el aula. A la semana, un alumno detectó que una noticia que circulaba en el grupo del curso era de hace 3 años.</p>` },
  ],
  practica: [
    "Mirá los primeros 10 videos o publicaciones de tu inicio en una red y anotá cuántos son de un mismo tema.",
    "Acordá con tu familia una palabra clave para emergencias y anotá con cuántas personas la acordaste.",
    "Pasá 3 publicaciones que te lleguen por el control de 30 segundos y anotá cuántas pasaron.",
  ],
  recursos: [
    { t: "Curso de este sitio: Crear imágenes con IA, con responsabilidad (deepfakes)", url: "https://pkeios.github.io/EiaLearning/ia-imagenes/" },
    { t: "Curso de este sitio: Seguridad digital y estafas", url: "https://pkeios.github.io/EiaLearning/seguridad-digital/" },
    { t: "Elements of AI: curso gratis de introducción a la IA (en castellano)", url: "https://course.elementsofai.com/es" },
  ],
  quiz: [
    { q: "Si las redes te muestran lo que calculan que vas a mirar, ¿qué es eso?", opciones: ["Una lista al azar","Todo lo publicado en orden","Un algoritmo de recomendación","Una decisión de tus amigos"], correcta: 2, explicacion: "Elige para retenerte. \"Todo en orden\" tienta, pero no es así." },
    { q: "Siempre ves videos que confirman lo que ya pensás. ¿Cómo se llama?", opciones: ["Burbuja de filtro","Algoritmo neutral","Libertad de opinión","Spam"], correcta: 0, explicacion: "Ves cada vez menos de lo distinto. \"Neutral\" tienta, pero no lo es." },
    { q: "¿Qué tipo de contenido tiende a circular más?", opciones: ["El más aburrido","El más verdadero siempre","El más largo","El que genera emociones fuertes, como la bronca"], correcta: 3, explicacion: "Las emociones fuertes se comparten más. \"El más verdadero\" tienta, pero no es así." },
    { q: "Querés salir de tu burbuja. ¿Qué hacés?", opciones: ["Mirás más de lo mismo","Seguís fuentes con miradas distintas y buscás vos las noticias","Borrás todas las redes sin pensar","Compartís más"], correcta: 1, explicacion: "La variedad rompe la burbuja. Más de lo mismo tienta por cómodo." },
    { q: "Ves un video de un candidato diciendo algo escandaloso. ¿Qué tenés en cuenta?", opciones: ["Que si es video es real","Que lo dijo seguro","Que puede ser un deepfake: hay que verificar","Que no importa"], correcta: 2, explicacion: "Hoy se pueden falsificar videos. \"Si es video es real\" tienta, pero ya no." },
    { q: "Te llega un audio con la voz de un familiar pidiendo plata urgente. ¿Qué hacés?", opciones: ["Cortás y lo llamás a su número de siempre","Mandás la plata","Pedís otro audio","Le pasás tus datos del banco"], correcta: 0, explicacion: "La voz se puede clonar. Otro audio tienta, pero también puede ser falso." },
    { q: "Si alguien dice que un video real de él \"es IA\" para no hacerse cargo, ¿qué te enseña?", opciones: ["Que todo video es falso","Que todo video es real","Nada","Que hay que verificar en las dos direcciones"], correcta: 3, explicacion: "Los falsos también sirven de excusa. \"Todo es falso\" tienta, pero no ayuda." },
    { q: "¿Qué es la desinformación?", opciones: ["Una noticia aburrida","Información falsa que circula, muchas veces para engañar","Información en otro idioma","Una noticia vieja siempre"], correcta: 1, explicacion: "Es falsa y engaña. \"Vieja\" tienta, pero puede ser vieja y verdadera." },
    { q: "Una publicación te indigna mucho. ¿Qué hacés antes de compartirla?", opciones: ["La compartís para avisar","Comentás enseguida","Esperás y la verificás","La mandás a todos tus grupos"], correcta: 2, explicacion: "La emoción fuerte es señal de alerta. \"Para avisar\" tienta, pero podés difundir algo falso." },
    { q: "No podés verificar una noticia. ¿Qué hacés?", opciones: ["No la compartís","La compartís con un \"dicen que\"","La compartís igual","La reescribís"], correcta: 0, explicacion: "\"Dicen que\" igual la difunde. Si no se verifica, no se comparte." },
    { q: "Querés entender distintas posturas sobre un tema. ¿Cómo puede ayudar la IA?", opciones: ["Diciéndote cuál es la correcta","Eligiendo por vos","No puede ayudar","Explicando los argumentos de cada postura, verificando después los datos"], correcta: 3, explicacion: "Te muestra posturas; vos verificás y decidís. \"Cuál es la correcta\" tienta, pero no es su rol." },
    { q: "Querés enseñar a chicos sobre algoritmos. ¿Qué conviene?", opciones: ["Prohibir todo sin explicar","Mirar juntos cómo funcionan y practicar verificar","No hablar del tema","Dejar que aprendan solos"], correcta: 1, explicacion: "Entender protege más que prohibir. Prohibir tienta por rápido." },
  ],
},
{
  id: "trabajo",
  icono: "💼",
  titulo: "La IA y el trabajo",
  nivel: "Intermedio",
  objetivos: [
    "Distinguir entre tareas que se automatizan y trabajos que desaparecen",
    "Identificar qué habilidades valen más cuando la IA hace parte del trabajo",
    "Reconocer el trabajo humano que hay detrás de la IA",
  ],
  lecciones: [
    { titulo: "Tareas, no trabajos enteros", video: {"id":"DgRuZYcTWis","t":"¿Va a acabar la IA con tu trabajo? El futuro del trabajo explicado · Memorias de Tiburón (19:45)"}, html: `
      <p class="idea">La IA suele <strong>automatizar tareas</strong>, no trabajos enteros. Casi todos los trabajos tienen tareas que la IA puede hacer y otras que no. Lo que cambia es <strong>cómo se reparte el trabajo</strong>.</p>
      <table>
        <tr><th>Trabajo</th><th>Tareas que la IA puede hacer o ayudar</th><th>Tareas que siguen siendo humanas</th></tr>
        <tr><td>Administrativo</td><td>Ordenar mails, completar planillas, redactar borradores</td><td>Resolver un problema raro, tratar con una persona enojada</td></tr>
        <tr><td>Docente</td><td>Preparar ejercicios, corregir ortografía</td><td>Acompañar a un alumno, leer cómo está el grupo</td></tr>
        <tr><td>Atención al cliente</td><td>Responder preguntas frecuentes</td><td>Casos complicados, reclamos, decisiones</td></tr>
        <tr><td>Oficios (plomería, electricidad)</td><td>Buscar información, presupuestar</td><td>Casi todo el trabajo físico en cada casa</td></tr>
      </table>
      <p><strong>Automatizar</strong> es hacer que una máquina haga una tarea que antes hacía una persona.</p>
      <p><strong>Nadie sabe con exactitud qué va a pasar:</strong> las predicciones sobre cuántos empleos se pierden o se crean cambian mucho según quién las haga. Desconfiá de las cifras muy seguras y de los títulos alarmistas.</p>
      <p><strong>Algunos trabajos sí cambian mucho,</strong> sobre todo los que son casi solo tareas repetitivas frente a una computadora. Para esas personas, la capacitación es clave.</p>
      <p>Por ejemplo, la secretaría de la escuela de Marcela empezó a usar IA para redactar notas a las familias. La secretaria no perdió su trabajo: dejó de escribir notas desde cero y tiene más tiempo para atender a la gente.</p>` },
    { titulo: "Las habilidades que valen más", video: {"id":"kmuxIleHRcM","t":"¿Qué pasa cuando dejás que la IA piense por vos? · DW Tecnología y mundo digital (5:11)"}, html: `
      <p class="idea">Cuando la IA hace parte del trabajo, valen más las habilidades que la IA <strong>no tiene</strong> y las de <strong>usarla bien</strong>.</p>
      <table>
        <tr><th>Habilidad</th><th>Por qué vale</th></tr>
        <tr><td>Criterio y pensamiento crítico</td><td>Revisar si lo que da la IA está bien</td></tr>
        <tr><td>Trato con personas</td><td>Escuchar, explicar, acompañar, negociar</td></tr>
        <tr><td>Conocer bien tu tema</td><td>Sin saber del tema, no podés detectar los errores</td></tr>
        <tr><td>Usar la IA como herramienta</td><td>Pedir bien (prompts), verificar, saber cuándo no usarla</td></tr>
        <tr><td>Aprender cosas nuevas</td><td>Las herramientas cambian cada año</td></tr>
        <tr><td>Trabajo con las manos</td><td>Muchos oficios son difíciles de automatizar</td></tr>
      </table>
      <p><strong>Un riesgo:</strong> si dejás que la IA piense todo por vos, perdés práctica en lo que hacías bien. Usala para ir más rápido en lo que ya sabés, no para dejar de saberlo.</p>
      <p><strong>La IA no reemplaza saber:</strong> para revisar un texto de la IA sobre tu trabajo, tenés que saber de tu trabajo. Por eso estudiar sigue siendo necesario.</p>
      <p>Para usar la IA como herramienta, están los cursos <strong>Prompts desde cero</strong> y <strong>Estudiar con IA sin hacer trampa</strong> de este sitio.</p>
      <p>Por ejemplo, Marcela usa IA para armar borradores de informes, pero los revisa y los corrige con lo que sabe de cada alumno. Un informe sin su revisión hubiera tenido 2 datos inventados.</p>` },
    { titulo: "El trabajo humano detrás de la IA", html: `
      <p class="idea">Detrás de la IA hay mucho <strong>trabajo humano</strong>: personas que etiquetan datos, revisan contenidos y corrigen respuestas, muchas veces en otros países y con malas condiciones.</p>
      <table>
        <tr><th>Trabajo</th><th>Qué hacen</th></tr>
        <tr><td>Etiquetado de datos</td><td>Marcan miles de imágenes o textos ("esto es un gato", "esto es ofensivo") para que la IA aprenda</td></tr>
        <tr><td>Moderación de contenido</td><td>Revisan contenido violento o perturbador para que no llegue a los usuarios</td></tr>
        <tr><td>Evaluación de respuestas</td><td>Comparan respuestas de la IA y eligen las mejores</td></tr>
        <tr><td>Creación de contenido</td><td>Los textos, fotos y obras con los que se entrenan los modelos los hicieron personas</td></tr>
      </table>
      <p>El <strong>etiquetado de datos</strong> es marcar ejemplos para que un sistema aprenda qué es cada cosa. Es un trabajo repetitivo que suele estar mal pago.</p>
      <p><strong>Muchos artistas y escritores</strong> reclaman porque sus obras se usaron para entrenar modelos sin permiso ni pago. Es un debate abierto en todo el mundo (lo ves en el curso de imágenes con IA).</p>
      <p><strong>Pensar en esto no es dejar de usar IA:</strong> es usarla sabiendo que no es magia, y apoyar reglas que cuiden a quienes trabajan detrás.</p>
      <p>Por ejemplo, Marcela les mostró a sus alumnos que cada vez que un sitio les pide "marcá las imágenes con semáforos" para entrar, están etiquetando datos. Se sorprendieron de haber trabajado gratis para una IA.</p>` },
  ],
  practica: [
    "Hacé la lista de 8 tareas de tu trabajo o tus estudios y anotá cuáles podría hacer o ayudar la IA y cuáles no.",
    "Elegí 2 habilidades de la tabla que quieras fortalecer y anotá una acción concreta para cada una.",
    "Anotá 3 lugares donde hayas \"trabajado\" para una IA sin saberlo (por ejemplo, marcar imágenes para entrar a un sitio).",
  ],
  recursos: [
    { t: "Elements of AI: curso gratis de introducción a la IA (en castellano)", url: "https://course.elementsofai.com/es" },
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "Curso de este sitio: Estudiar con IA sin hacer trampa", url: "https://pkeios.github.io/EiaLearning/ia-estudiar/" },
  ],
  quiz: [
    { q: "Si la secretaria empieza a usar IA para redactar notas, ¿qué suele pasar?", opciones: ["Pierde el trabajo seguro","No cambia nada","Cambia cómo reparte su tiempo: menos redacción, más atención a la gente","Trabaja el doble"], correcta: 2, explicacion: "La IA automatiza tareas, no el trabajo entero. \"Pierde el trabajo seguro\" tienta por los titulares." },
    { q: "¿Qué automatiza la IA con más frecuencia?", opciones: ["Tareas dentro de un trabajo","Trabajos enteros siempre","Nada","Solo trabajos manuales"], correcta: 0, explicacion: "Casi todos los trabajos tienen tareas automatizables y otras que no. \"Trabajos enteros\" tienta, pero es menos común." },
    { q: "Si leés \"la IA va a eliminar el 50% de los empleos en 2030\", ¿qué pensás?", opciones: ["Que es un dato seguro","Que es exactamente así","Que hay que dejar de estudiar","Que las predicciones varían mucho: desconfío de cifras tan seguras"], correcta: 3, explicacion: "Nadie lo sabe con exactitud. \"Dato seguro\" tienta por el número preciso." },
    { q: "¿Qué trabajos suelen cambiar más con la IA?", opciones: ["Los oficios con las manos","Los que son casi solo tareas repetitivas frente a una computadora","Los que tratan con personas","Ninguno"], correcta: 1, explicacion: "Lo repetitivo en pantalla se automatiza más. Los oficios tientan, pero el trabajo físico es más difícil de automatizar." },
    { q: "Usás IA para un informe de tu trabajo. ¿Qué habilidad necesitás para revisarlo?", opciones: ["Escribir rápido","Saber programar","Conocer bien tu tema","Ninguna"], correcta: 2, explicacion: "Sin saber del tema no detectás los errores. Programar tienta, pero no hace falta." },
    { q: "¿Qué riesgo hay si dejás que la IA piense todo por vos?", opciones: ["Perdés práctica en lo que hacías bien","Ninguno","Que la IA se canse","Que te paguen más"], correcta: 0, explicacion: "Lo que no se practica se pierde. \"Ninguno\" tienta porque es cómodo." },
    { q: "¿Qué habilidad le cuesta más a la IA?", opciones: ["Ordenar datos","Resumir textos","Repetir tareas","Tratar con personas: escuchar, acompañar, negociar"], correcta: 3, explicacion: "Lo humano sigue siendo humano. Resumir tienta, pero la IA lo hace bien." },
    { q: "Si las herramientas de IA cambian cada año, ¿qué habilidad te sirve?", opciones: ["Memorizar una sola herramienta","Aprender cosas nuevas","No usar ninguna","Esperar a que se estabilicen"], correcta: 1, explicacion: "Lo que dura es saber aprender. Memorizar una herramienta tienta, pero queda vieja." },
    { q: "¿Qué es el etiquetado de datos?", opciones: ["Poner precio a productos","Escribir el código de la IA","Marcar ejemplos para que un sistema aprenda qué es cada cosa","Pegar etiquetas en cajas"], correcta: 2, explicacion: "Las personas marcan los ejemplos. \"Pegar etiquetas\" tienta por la palabra." },
    { q: "Si un sitio te pide \"marcá las imágenes con semáforos\" para entrar, ¿qué estás haciendo además?", opciones: ["Ayudando a etiquetar datos","Nada más","Pagando con tu tarjeta","Descargando un virus"], correcta: 0, explicacion: "Esos datos sirven para entrenar sistemas. \"Nada más\" tienta, pero no es así." },
    { q: "Si artistas reclaman porque sus obras se usaron para entrenar IA sin permiso, ¿qué es eso?", opciones: ["Un problema resuelto","Algo que no importa","Una moda","Un debate abierto sobre derechos y pago a quienes crean"], correcta: 3, explicacion: "Se discute en todo el mundo. \"Resuelto\" tienta, pero no lo está." },
    { q: "Si sabés que hay trabajo humano mal pago detrás de la IA, ¿qué conviene?", opciones: ["Ignorarlo","Usarla sabiendo que no es magia y apoyar reglas que cuiden a esos trabajadores","Dejar de usar toda tecnología","Culpar a los usuarios"], correcta: 1, explicacion: "Conocer ayuda a decidir mejor. Dejar toda tecnología tienta, pero no es la única respuesta." },
  ],
},
{
  id: "ambiente-poder",
  icono: "🌍",
  titulo: "Ambiente, poder y acceso",
  nivel: "Avanzado",
  objetivos: [
    "Explicar por qué la IA consume energía y agua",
    "Reconocer que unas pocas empresas concentran mucho poder sobre la IA",
    "Pensar quiénes acceden a la IA y quiénes quedan afuera",
  ],
  lecciones: [
    { titulo: "El costo ambiental", video: {"id":"Lo1Gt6jf2aY","t":"Inteligencia artificial: el costo climático oculto · DW Tecnología y mundo digital (12:53)"}, html: `
      <p class="idea">La IA corre en <strong>centros de datos</strong>: edificios llenos de computadoras que usan mucha <strong>electricidad</strong> y, muchas veces, <strong>agua</strong> para enfriarse. Entrenar y usar modelos grandes tiene un costo ambiental.</p>
      <table>
        <tr><th>Qué consume</th><th>Por qué</th></tr>
        <tr><td>Electricidad</td><td>Miles de computadoras funcionando todo el día</td></tr>
        <tr><td>Agua</td><td>Para enfriar los equipos, que calientan mucho</td></tr>
        <tr><td>Materiales</td><td>Los equipos usan metales y minerales que hay que extraer</td></tr>
        <tr><td>Más usos</td><td>Cada consulta suma; con millones de personas, suma mucho</td></tr>
      </table>
      <p>Un <strong>centro de datos</strong> es un edificio con miles de servidores (computadoras potentes) que guardan datos y corren programas para todo el mundo.</p>
      <p><strong>Las cifras exactas son difíciles de conocer:</strong> dependen del modelo, del centro de datos y de cómo se produce la electricidad, y las empresas no siempre las publican. Desconfiá de comparaciones muy precisas sin fuente.</p>
      <p><strong>Usar con criterio:</strong> no hace falta pedirle a una IA lo que podés resolver con una búsqueda simple, ni generar 50 imágenes cuando necesitás una. También es más cuidadoso con tu tiempo.</p>
      <p>Por ejemplo, Marcela les preguntó a sus alumnos cuántas imágenes generaban con IA "para ver qué salía". Algunos, más de 30 por día. Hablaron de usarla cuando hace falta, no por aburrimiento.</p>` },
    { titulo: "Quién controla la IA", html: `
      <p class="idea">Crear los modelos más grandes cuesta muchísimo dinero, datos y energía. Por eso unas <strong>pocas empresas</strong>, casi todas de unos pocos países, concentran mucho <strong>poder</strong> sobre la IA.</p>
      <table>
        <tr><th>Qué concentran</th><th>Qué puede significar</th></tr>
        <tr><td>Los modelos más potentes</td><td>Deciden qué puede y qué no puede hacer la IA que usa todo el mundo</td></tr>
        <tr><td>Los datos</td><td>Saben mucho de millones de personas</td></tr>
        <tr><td>Las reglas de uso</td><td>Pueden cambiar precios y condiciones cuando quieren</td></tr>
        <tr><td>El idioma y la cultura</td><td>Los modelos suelen funcionar mejor en inglés y conocer más de otros países</td></tr>
      </table>
      <p><strong>Modelos abiertos:</strong> existen modelos cuyo funcionamiento se publica para que otros los usen y estudien. Son una forma de repartir más el acceso, con sus propios riesgos.</p>
      <p><strong>Depender de una sola herramienta</strong> tiene riesgos: si cambia el precio o deja de existir, tu trabajo o tu escuela quedan colgados. Conviene saber hacer las cosas también sin ella.</p>
      <p><strong>Lo local importa:</strong> universidades y organismos de América Latina trabajan en IA pensada para nuestros idiomas, datos y problemas.</p>
      <p>Por ejemplo, una herramienta que usaba la escuela de Marcela dejó de ser gratis de un mes para otro. Como los docentes también sabían hacer las tareas sin ella, no se cortó el trabajo.</p>` },
    { titulo: "Quién accede y quién queda afuera", html: `
      <p class="idea">La IA puede ayudar a mucha gente, pero también puede <strong>agrandar las desigualdades</strong> si solo la aprovechan quienes tienen buena conexión, equipos y formación.</p>
      <table>
        <tr><th>Barrera</th><th>Ejemplo</th></tr>
        <tr><td>Conexión</td><td>Zonas rurales o barrios con internet malo o caro</td></tr>
        <tr><td>Equipos</td><td>Un celular viejo no corre algunas apps</td></tr>
        <tr><td>Formación</td><td>No saber usarla ni detectar sus errores</td></tr>
        <tr><td>Idioma</td><td>Funciona peor en lenguas indígenas o en variantes regionales</td></tr>
        <tr><td>Precio</td><td>Las mejores versiones son pagas</td></tr>
        <tr><td>Discapacidad</td><td>Herramientas que no son accesibles (aunque la IA también puede ayudar mucho, como lectores de pantalla y subtítulos)</td></tr>
      </table>
      <p>La <strong>brecha digital</strong> es la diferencia entre quienes pueden usar bien la tecnología y quienes no. Con la IA, esa brecha puede crecer o achicarse según cómo se use.</p>
      <p><strong>La IA también puede ayudar a cerrar brechas:</strong> traducir, leer en voz alta, explicar un trámite, subtitular un video. Lo que importa es que llegue a quienes más la necesitan.</p>
      <p><strong>En la escuela y en el barrio</strong> se puede hacer mucho: enseñar a usarla con criterio, compartir equipos, mostrar herramientas gratis.</p>
      <p>Por ejemplo, Marcela organizó un taller para familias de la escuela sobre cómo usar un chat de IA para entender trámites y notas escolares. Fueron 25 personas, la mayoría sin experiencia previa.</p>` },
  ],
  practica: [
    "Anotá cuántas veces usaste IA en una semana y cuántas de esas podrías haberlo resuelto con una búsqueda simple.",
    "Elegí una herramienta de IA que uses y anotá qué pasaría si mañana dejara de ser gratis.",
    "Pensá en una persona de tu entorno que tenga una barrera de la tabla y anotá una forma concreta de ayudarla.",
  ],
  recursos: [
    { t: "OCDE: principios sobre inteligencia artificial (en inglés)", url: "https://oecd.ai/en/ai-principles" },
    { t: "Elements of AI: curso gratis de introducción a la IA (en castellano)", url: "https://course.elementsofai.com/es" },
    { t: "Disposición 2/2023: Recomendaciones para una Inteligencia Artificial Fiable (Argentina)", url: "https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-2-2023-384656" },
  ],
  quiz: [
    { q: "¿Por qué la IA consume agua?", opciones: ["Porque la IA toma agua","Para limpiar las pantallas","Para enfriar los equipos de los centros de datos","No consume"], correcta: 2, explicacion: "Los servidores calientan y se enfrían con agua. \"No consume\" tienta, pero sí lo hace." },
    { q: "¿Qué es un centro de datos?", opciones: ["Un edificio con miles de servidores que guardan datos y corren programas","Una oficina de atención","Una biblioteca","Un celular grande"], correcta: 0, explicacion: "Ahí corre la IA. \"Una oficina\" tienta por la palabra centro." },
    { q: "Si leés una comparación muy exacta del consumo de una consulta a la IA, sin fuente, ¿qué pensás?", opciones: ["Que es un dato seguro","Que no consume nada","Que es la misma para todas las IA","Que hay que desconfiar: las cifras exactas son difíciles de conocer"], correcta: 3, explicacion: "Depende de muchas cosas y no siempre se publica. \"Dato seguro\" tienta por la precisión." },
    { q: "Si generás 50 imágenes para elegir una \"por las dudas\", ¿qué conviene?", opciones: ["Generar 100","Usar la IA con criterio: describir bien y generar menos","No importa","Generar de noche"], correcta: 1, explicacion: "Cada uso suma. \"No importa\" tienta porque no lo vemos." },
    { q: "¿Por qué pocas empresas concentran la IA más potente?", opciones: ["Porque es ilegal para otros","Por casualidad","Porque crear esos modelos cuesta muchísimo dinero, datos y energía","Porque nadie más quiere"], correcta: 2, explicacion: "Los costos son enormes. \"Ilegal para otros\" tienta, pero no es así." },
    { q: "Si los modelos funcionan mejor en inglés, ¿qué consecuencia tiene?", opciones: ["Que pueden funcionar peor en otros idiomas y conocer menos de otras culturas","Ninguna","Que solo sirven en Estados Unidos","Que traducen todo perfecto"], correcta: 0, explicacion: "El idioma de los datos importa. \"Ninguna\" tienta si usás castellano y te anda bien." },
    { q: "¿Qué es un modelo abierto?", opciones: ["Uno que está siempre encendido","Uno gratis siempre","Uno sin errores","Uno cuyo funcionamiento se publica para que otros lo usen y estudien"], correcta: 3, explicacion: "Se publica para usarlo y estudiarlo. \"Gratis siempre\" tienta, pero no es lo que define." },
    { q: "Tu escuela depende de una sola herramienta de IA y cambia el precio. ¿Qué te protege?", opciones: ["Pagar lo que pidan","Saber hacer las tareas también sin esa herramienta","Dejar de trabajar","Nada"], correcta: 1, explicacion: "Depender de una sola es riesgoso. Pagar lo que pidan tienta, pero no siempre se puede." },
    { q: "¿Qué es la brecha digital?", opciones: ["Un error de internet","Una pantalla rota","La diferencia entre quienes pueden usar bien la tecnología y quienes no","Un tipo de cable"], correcta: 2, explicacion: "Es una desigualdad. \"Error de internet\" tienta por lo técnico." },
    { q: "Una familia de tu escuela no tiene buena conexión. ¿Qué barrera tiene?", opciones: ["De conexión","De idioma","Ninguna","De precio solamente"], correcta: 0, explicacion: "Sin conexión no se usa la IA en línea. \"Ninguna\" tienta si a vos te anda." },
    { q: "¿Cómo puede la IA ayudar a cerrar brechas?", opciones: ["No puede","Solo con versiones pagas","Reemplazando a las escuelas","Traduciendo, leyendo en voz alta, explicando trámites o subtitulando"], correcta: 3, explicacion: "Puede ayudar a quien más lo necesita. \"No puede\" tienta, pero sí." },
    { q: "Querés que más gente de tu barrio use la IA con criterio. ¿Qué podés hacer?", opciones: ["Nada, que aprendan solos","Un taller para enseñar a usarla y a verificar lo que dice","Prohibirla","Usarla vos por ellos"], correcta: 1, explicacion: "Enseñar achica la brecha. \"Que aprendan solos\" tienta, pero agranda la diferencia." },
  ],
},
{
  id: "reglas",
  icono: "📜",
  titulo: "Reglas y principios para la IA",
  nivel: "Avanzado",
  objetivos: [
    "Explicar los principios de una IA confiable: transparencia, responsabilidad, supervisión humana",
    "Describir cómo la Unión Europea regula la IA según el nivel de riesgo",
    "Conocer las recomendaciones de Argentina para una IA fiable y qué leyes ya protegen",
  ],
  lecciones: [
    { titulo: "Principios de una IA confiable", html: `
      <p class="idea">Organismos de todo el mundo coinciden en unos <strong>principios</strong> para que la IA sea confiable: que se sepa cuándo se usa, que haya responsables, que una persona pueda revisar y que no discrimine.</p>
      <table>
        <tr><th>Principio</th><th>Qué quiere decir</th><th>Ejemplo</th></tr>
        <tr><td>Transparencia</td><td>Saber cuándo se usa IA y, en lo posible, cómo decide</td><td>Un aviso: "estás hablando con un asistente automático"</td></tr>
        <tr><td>Responsabilidad</td><td>Que haya personas u organizaciones que respondan por los resultados</td><td>Un área a la que reclamar</td></tr>
        <tr><td>Supervisión humana</td><td>Que una persona pueda revisar y corregir decisiones importantes</td><td>Un preceptor revisa la alerta antes de actuar</td></tr>
        <tr><td>Equidad</td><td>Que no discrimine</td><td>Probar el sistema con distintos grupos</td></tr>
        <tr><td>Privacidad</td><td>Cuidar los datos personales</td><td>Usar solo los datos necesarios</td></tr>
        <tr><td>Seguridad</td><td>Que funcione bien y no cause daños</td><td>Pruebas antes de usarlo con gente real</td></tr>
      </table>
      <p>Estos principios aparecen, con distintas palabras, en los de la OCDE, la UNESCO y las recomendaciones de Argentina.</p>
      <p><strong>Un principio no es una ley:</strong> los principios orientan; las leyes obligan. Muchos países están pasando de principios a leyes.</p>
      <p><strong>Sirven también para vos:</strong> cuando uses IA en tu trabajo o tu escuela, podés aplicarlos (avisar que usaste IA, revisar, cuidar datos).</p>
      <p>Por ejemplo, Marcela propuso que la escuela agregara un aviso en su chat para familias: "Este asistente es automático. Para casos de un alumno, escribinos a la secretaría". Fue su forma de aplicar transparencia.</p>` },
    { titulo: "La ley de la Unión Europea", video: {"id":"QcG6TFA6Ysg","t":"La Unión Europea regula la IA · DW Español (4:26)"}, html: `
      <p class="idea">La <strong>Unión Europea</strong> aprobó una ley de inteligencia artificial que clasifica los usos según su <strong>nivel de riesgo</strong>: a más riesgo, más obligaciones. Es una referencia para muchos países.</p>
      <table>
        <tr><th>Nivel de riesgo</th><th>Qué pasa</th><th>Ejemplos</th></tr>
        <tr><td>Inaceptable</td><td>Prohibido</td><td>Sistemas de "puntaje social" de personas por parte de gobiernos, manipulación que causa daño</td></tr>
        <tr><td>Alto</td><td>Permitido con muchas obligaciones (pruebas, registros, supervisión humana)</td><td>IA para seleccionar personal, dar créditos, en educación o en servicios esenciales</td></tr>
        <tr><td>Limitado</td><td>Obligación de transparencia</td><td>Chats que tienen que avisar que son IA; contenido falso que tiene que estar marcado</td></tr>
        <tr><td>Mínimo</td><td>Casi sin obligaciones especiales</td><td>Filtros de spam, videojuegos</td></tr>
      </table>
      <p><strong>Por qué importa acá:</strong> las empresas que venden a Europa tienen que cumplirla, y muchos países miran esta ley para hacer las suyas.</p>
      <p><strong>La lógica del riesgo</strong> es útil para pensar cualquier uso: no es lo mismo una IA que recomienda películas que una que decide quién recibe un tratamiento.</p>
      <p>Por ejemplo, Marcela usó la tabla para clasificar con sus alumnos los usos de IA de la escuela: el corrector de ortografía, mínimo; el chat para familias, limitado; el sistema de alertas de abandono, alto.</p>` },
    { titulo: "Argentina: recomendaciones y leyes que ya protegen", html: `
      <p class="idea">Argentina no tiene todavía una ley general de IA, pero tiene <strong>recomendaciones oficiales</strong> para el sector público y <strong>leyes que ya protegen</strong> en muchos casos.</p>
      <table>
        <tr><th>Norma</th><th>Qué hace</th></tr>
        <tr><td>Disposición 2/2023: Recomendaciones para una Inteligencia Artificial Fiable</td><td>Aprueba recomendaciones para proyectos de IA en el sector público</td></tr>
        <tr><td>Ley 25.326 de Protección de Datos Personales</td><td>Protege tus datos, también cuando se usan con IA</td></tr>
        <tr><td>Ley 24.240 de Defensa del Consumidor</td><td>Información clara y trato digno, también con robots de atención</td></tr>
        <tr><td>Ley 27.736 (Ley Olimpia)</td><td>Incorpora la violencia digital, como difundir imágenes íntimas falsas</td></tr>
        <tr><td>Ley 11.723 de Propiedad Intelectual</td><td>Derechos de autor sobre obras</td></tr>
      </table>
      <p><strong>Una disposición</strong> es una norma de un organismo del Estado, de menor rango que una ley.</p>
      <p><strong>Hay proyectos de ley</strong> en discusión. Las reglas pueden cambiar: para un caso concreto, conviene consultar la normativa vigente o a un profesional.</p>
      <pre><code>Si una IA te perjudicó (por ejemplo, te negaron algo sin explicación):
1. Pedí por escrito que te expliquen cómo se tomó la decisión.
2. Pedí que la revise una persona.
3. Si se usaron tus datos personales, ejercé tus derechos (AAIP).
4. Si sos consumidor, reclamá también por esa vía.</code></pre>
      <p><strong>Esta lección orienta, pero no reemplaza el asesoramiento de un abogado.</strong></p>
      <p>Por ejemplo, a un vecino de Marcela le rechazaron un crédito en una app sin ninguna explicación. Pidió por escrito que le explicaran los motivos y que una persona revisara su caso; lo reconsideraron.</p>` },
  ],
  practica: [
    "Elegí un uso de IA que conozcas y anotá qué principio de la tabla cumple y cuál no.",
    "Clasificá 5 usos de IA de tu vida o tu trabajo según los 4 niveles de riesgo de la Unión Europea y anotá cuántos son de riesgo alto.",
    "Escribí un pedido de explicación y revisión humana para una decisión automática (real o inventada) y anotá los 2 pedidos que incluiste.",
  ],
  recursos: [
    { t: "Ley de Inteligencia Artificial de la Unión Europea (texto y resúmenes)", url: "https://artificialintelligenceact.eu/es/" },
    { t: "Disposición 2/2023: Recomendaciones para una Inteligencia Artificial Fiable (Argentina)", url: "https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-2-2023-384656" },
    { t: "AAIP: protección de datos personales (Argentina)", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
  ],
  quiz: [
    { q: "Si un chat de atención no avisa que es un robot, ¿qué principio no cumple?", opciones: ["Seguridad","Equidad","Transparencia","Ninguno"], correcta: 2, explicacion: "Hay que saber cuándo se usa IA. Seguridad tienta, pero el problema es que no avisa." },
    { q: "Si un sistema decide y nadie puede revisar ni corregir, ¿qué principio falta?", opciones: ["Supervisión humana","Privacidad","Velocidad","Diseño"], correcta: 0, explicacion: "Una persona tiene que poder revisar lo importante. Velocidad tienta, pero no es un principio." },
    { q: "Querés reclamar por un error de IA y no hay a quién. ¿Qué principio falta?", opciones: ["Transparencia solamente","Eficiencia","Ninguno","Responsabilidad"], correcta: 3, explicacion: "Tiene que haber quien responda. Transparencia tienta, pero es saber, no responder." },
    { q: "¿Cuál es la diferencia entre un principio y una ley?", opciones: ["Son lo mismo","Los principios orientan; las leyes obligan","Los principios obligan más","Las leyes son opcionales"], correcta: 1, explicacion: "La ley tiene fuerza obligatoria. \"Son lo mismo\" tienta, pero no." },
    { q: "En la ley de la UE, ¿qué pasa con un sistema de \"puntaje social\" de personas por un gobierno?", opciones: ["Está permitido sin reglas","Es riesgo mínimo","Está prohibido: riesgo inaceptable","Solo necesita un aviso"], correcta: 2, explicacion: "Es de los usos prohibidos. \"Un aviso\" tienta, pero eso es para riesgo limitado." },
    { q: "Si una IA ayuda a seleccionar personal, ¿qué nivel de riesgo es en la ley de la UE?", opciones: ["Alto: permitido con muchas obligaciones","Mínimo","Prohibido","Sin regulación"], correcta: 0, explicacion: "Afecta oportunidades de las personas. Mínimo tienta, pero no lo es." },
    { q: "Si un chat tiene que avisar que es IA, ¿qué nivel de riesgo es?", opciones: ["Alto","Inaceptable","Ninguno","Limitado: obligación de transparencia"], correcta: 3, explicacion: "Alcanza con avisar. Alto tienta, pero no decide sobre la vida de nadie." },
    { q: "Si un filtro de spam, ¿qué nivel de riesgo es?", opciones: ["Alto","Mínimo","Inaceptable","Limitado"], correcta: 1, explicacion: "Casi sin obligaciones. Alto tienta por \"decide qué mails ves\", pero el impacto es bajo." },
    { q: "¿Qué aprueba la Disposición 2/2023 en Argentina?", opciones: ["Una ley que prohíbe la IA","Un impuesto a la IA","Recomendaciones para una IA fiable en el sector público","La ley de datos personales"], correcta: 2, explicacion: "Son recomendaciones para proyectos públicos. \"Prohíbe la IA\" tienta, pero no." },
    { q: "Una empresa usa tus datos personales en un sistema de IA sin avisarte. ¿Qué ley te protege?", opciones: ["La Ley 25.326 de Protección de Datos Personales","La Ley 11.723","Ninguna, porque es IA","La Ley de Tránsito"], correcta: 0, explicacion: "Tus datos están protegidos igual. \"Ninguna, porque es IA\" tienta, pero no hay excepción." },
    { q: "Si una app te rechaza un crédito sin explicación, ¿qué pedís primero?", opciones: ["Nada, la IA no se equivoca","Una indemnización automática","Que borren la app","Por escrito, una explicación y que una persona revise tu caso"], correcta: 3, explicacion: "Explicación y revisión humana. \"No se equivoca\" tienta, pero sí se equivoca." },
    { q: "Leíste que Argentina va a tener una ley de IA. ¿Qué hacés para un caso concreto?", opciones: ["Aplicás lo que leíste en un proyecto","Consultás la normativa vigente o a un profesional","Asumís que no hay reglas","Le preguntás solo a la IA"], correcta: 1, explicacion: "Los proyectos no son ley. Aplicar un proyecto tienta, pero puede no aprobarse." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: analizar un uso de IA",
  nivel: "Avanzado",
  objetivos: [
    "Analizar un uso real de IA con una ficha de beneficios, riesgos y cuidados",
    "Proponer mejoras concretas basadas en los principios",
    "Presentar el análisis y evaluarlo con una rúbrica",
  ],
  lecciones: [
    { titulo: "Elegí un uso y armá la ficha", html: `
      <p class="idea">El proyecto es analizar <strong>un uso real de IA</strong> cercano (en tu trabajo, tu escuela, tu municipio, un banco o una app que usás) con una <strong>ficha</strong> que junta todo el curso.</p>
      <pre><code>Ficha de análisis
Uso: ______________________________________________
Quién lo usa y para qué: __________________________
¿Decide o ayuda a decidir sobre personas?  sí / no
Nivel de riesgo (estilo UE): mínimo / limitado / alto / inaceptable

Beneficios (3): ___________________________________
Riesgos:
  Sesgos: ¿puede tratar peor a algún grupo? __________
  Privacidad: ¿qué datos usa? ¿son necesarios? _______
  Información: ¿puede generar o difundir falsedades? __
  Trabajo: ¿cambia el trabajo de alguien? ____________
  Ambiente y acceso: ¿quién queda afuera? ____________
Principios: ¿transparencia? ¿responsable? ¿revisión humana?</code></pre>
      <table>
        <tr><th>Ejemplos de usos para analizar</th></tr>
        <tr><td>El robot de chat de tu banco o tu empresa de internet</td></tr>
        <tr><td>Un sistema de turnos con IA en un hospital o un municipio</td></tr>
        <tr><td>La IA que usa tu escuela o tu trabajo para algo</td></tr>
        <tr><td>El algoritmo de recomendación de una red que usás mucho</td></tr>
        <tr><td>Una app que pide tu cara o tu voz</td></tr>
      </table>
      <p><strong>Si no tenés información de cómo funciona,</strong> eso ya es un hallazgo: anotá qué no se sabe (falta de transparencia).</p>
      <p>Por ejemplo, Marcela eligió el sistema de alertas de abandono escolar que evaluaba su municipio: ayuda a decidir sobre chicos, así que lo clasificó como riesgo alto.</p>` },
    { titulo: "Proponé mejoras", html: `
      <p class="idea">Un buen análisis no solo encuentra problemas: <strong>propone mejoras concretas</strong> para que el uso sea más justo, transparente y seguro.</p>
      <table>
        <tr><th>Si encontraste...</th><th>Una mejora posible</th></tr>
        <tr><td>Nadie sabe que se usa IA</td><td>Un aviso claro a las personas afectadas</td></tr>
        <tr><td>Decide sin revisión</td><td>Que una persona revise los casos importantes antes de actuar</td></tr>
        <tr><td>Riesgo de sesgo</td><td>Probarlo con distintos grupos y publicar los resultados</td></tr>
        <tr><td>Usa más datos de los necesarios</td><td>Quitar los datos que no hacen falta</td></tr>
        <tr><td>No hay dónde reclamar</td><td>Un canal para pedir explicación y revisión</td></tr>
        <tr><td>Deja afuera a gente sin conexión</td><td>Mantener una opción presencial o por teléfono</td></tr>
      </table>
      <pre><code>Una propuesta bien escrita:
Problema:  "El sistema marca alumnos en riesgo sin que nadie revise."
Propuesta: "Que el preceptor revise cada alerta y hable con la familia
            antes de cualquier medida."
Por qué:   "Supervisión humana: evita etiquetar a un chico por un error."</code></pre>
      <p><strong>Propuestas realistas:</strong> que se puedan hacer con lo que hay. "Prohibir la IA" casi nunca es la única opción; "usarla con estas condiciones" suele ser más útil.</p>
      <p>Por ejemplo, Marcela propuso 3 mejoras: revisión del preceptor, aviso a las familias y una prueba piloto de 3 meses comparando con lo que ya sabían los docentes. El municipio aceptó la prueba piloto.</p>` },
    { titulo: "Presentá y evaluá con la rúbrica", html: `
      <p class="idea">Presentá tu análisis en <strong>una página</strong> o en <strong>3 minutos</strong> de exposición. Después evaluá tu trabajo con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Descripción</td><td>Qué hace, quién lo usa y para qué, claro</td><td>Incompleta</td><td>Confusa</td></tr>
        <tr><td>Riesgo</td><td>Nivel justificado con la lógica de riesgos</td><td>Nivel sin justificar</td><td>Sin clasificar</td></tr>
        <tr><td>Análisis</td><td>Sesgos, privacidad, información, trabajo y acceso</td><td>Tres de los cinco</td><td>Menos de tres</td></tr>
        <tr><td>Principios</td><td>Revisa transparencia, responsabilidad y supervisión humana</td><td>Uno o dos</td><td>Ninguno</td></tr>
        <tr><td>Propuestas</td><td>Concretas, realistas y justificadas</td><td>Generales</td><td>Sin propuestas</td></tr>
        <tr><td>Equilibrio</td><td>Muestra beneficios y riesgos</td><td>Solo uno de los dos</td><td>Opinión sin análisis</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → análisis completo y equilibrado
7 a 9   → mejorá el criterio más bajo
0 a 6   → repasá los módulos de sesgos y de reglas</code></pre>
      <p><strong>Equilibrio:</strong> un buen análisis no es "la IA es mala" ni "la IA es genial". Muestra qué aporta, qué riesgos tiene y cómo cuidarse.</p>
      <p><strong>Compartilo:</strong> llevá tu análisis a quien decide (tu escuela, tu trabajo, tu municipio). Muchas mejoras empiezan con alguien que hace buenas preguntas.</p>
      <p>Por ejemplo, Marcela presentó su análisis en una reunión de docentes y sacó 11 de 12: le faltó analizar el costo de acceso para las familias sin internet. Lo sumó antes de mandarlo al municipio.</p>` },
  ],
  practica: [
    "Elegí un uso real de IA, completá la ficha de análisis y anotá el nivel de riesgo que le asignaste.",
    "Escribí 3 propuestas de mejora con problema, propuesta y por qué, y anotá qué principio aplica cada una.",
    "Presentá tu análisis a alguien en 3 minutos, puntualo con la rúbrica y anotá tu total de 12.",
  ],
  recursos: [
    { t: "Disposición 2/2023: Recomendaciones para una Inteligencia Artificial Fiable (Argentina)", url: "https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-2-2023-384656" },
    { t: "Ley de Inteligencia Artificial de la Unión Europea (texto y resúmenes)", url: "https://artificialintelligenceact.eu/es/" },
    { t: "OCDE: principios sobre inteligencia artificial (en inglés)", url: "https://oecd.ai/en/ai-principles" },
  ],
  quiz: [
    { q: "Vas a analizar un uso de IA. ¿Qué elegís?", opciones: ["Una película de ciencia ficción","Una IA que no existe","Un uso real y cercano: tu trabajo, tu escuela, tu municipio","Lo más lejano posible"], correcta: 2, explicacion: "Lo cercano se puede analizar y mejorar. La película tienta por divertida, pero no es real." },
    { q: "Si un sistema ayuda a decidir sobre chicos de una escuela, ¿qué nivel de riesgo le asignás?", opciones: ["Alto","Mínimo","Ninguno","Inaceptable siempre"], correcta: 0, explicacion: "Decide sobre personas en educación. Inaceptable tienta, pero está permitido con obligaciones." },
    { q: "No encontrás información de cómo funciona el sistema. ¿Qué anotás?", opciones: ["Nada","Que funciona perfecto","Que no se puede hacer el proyecto","Que falta transparencia: es un hallazgo"], correcta: 3, explicacion: "La falta de información es un problema en sí. \"No se puede\" tienta, pero ya encontraste algo." },
    { q: "En la ficha, ¿qué preguntás sobre privacidad?", opciones: ["¿De qué color es la app?","¿Qué datos usa y si son necesarios?","¿Cuánto cuesta?","¿Es rápida?"], correcta: 1, explicacion: "Usar solo los datos necesarios es clave. El costo tienta, pero es otro tema." },
    { q: "Si encontraste que el sistema decide sin revisión, ¿qué proponés?", opciones: ["Que decida más rápido","Que nadie se entere","Que una persona revise los casos importantes antes de actuar","Nada"], correcta: 2, explicacion: "Supervisión humana. \"Más rápido\" tienta, pero no corrige errores." },
    { q: "Si nadie sabe que se usa IA, ¿qué mejora proponés?", opciones: ["Un aviso claro a las personas afectadas","Seguir sin avisar","Usar más IA","Cambiar el nombre"], correcta: 0, explicacion: "Es transparencia. Seguir sin avisar tienta para no generar preguntas." },
    { q: "Si el sistema deja afuera a familias sin conexión, ¿qué proponés?", opciones: ["Que compren internet","Nada","Usar solo la app","Mantener una opción presencial o por teléfono"], correcta: 3, explicacion: "Cuida el acceso. \"Que compren internet\" tienta, pero no es realista para todos." },
    { q: "Tu propuesta es \"prohibir la IA\". ¿Qué le falta?", opciones: ["Nada, es la mejor","Ser realista: suele servir más \"usarla con estas condiciones\"","Más palabras","Más prohibiciones"], correcta: 1, explicacion: "Las propuestas realistas se pueden aplicar. \"La mejor\" tienta por tajante." },
    { q: "Tu análisis solo muestra riesgos y ningún beneficio. ¿Qué criterio baja?", opciones: ["Descripción","Propuestas","Equilibrio","Ninguno"], correcta: 2, explicacion: "Un buen análisis muestra las dos caras. Propuestas tienta, pero es otro criterio." },
    { q: "Si analizaste sesgos, privacidad y trabajo, pero no información ni acceso, ¿cuántos puntos en \"Análisis\"?", opciones: ["1","2","0","12"], correcta: 0, explicacion: "Tres de cinco es 1 punto. 2 tienta, pero son los cinco." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Abandonás","Empezás de cero","Cambiás de uso a analizar","Mejorás el criterio más bajo"], correcta: 3, explicacion: "De 7 a 9, falta pulir. Cambiar de uso tienta, pero perdés lo hecho." },
    { q: "Terminaste el análisis. ¿Qué hacés con él?", opciones: ["Lo guardás","Lo llevás a quien decide: tu escuela, tu trabajo o tu municipio","Lo borrás","Lo publicás sin revisar los datos de nadie"], correcta: 1, explicacion: "Muchas mejoras empiezan con buenas preguntas. Guardarlo tienta, pero no cambia nada." },
  ],
},
];
