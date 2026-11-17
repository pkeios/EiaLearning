// Temario del curso "IA para docentes". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ia-docentes y node tools/metodologia.js ia-docentes
window.TEMARIO = [
{
  id: "entender",
  icono: "🤖",
  titulo: "Qué es la IA generativa (y qué no)",
  nivel: "Básico",
  objetivos: [
    "Explicar con palabras simples cómo produce texto una IA generativa",
    "Reconocer sus errores típicos: inventar datos, sesgos e información desactualizada",
    "Decidir para qué tareas docentes conviene usarla y para cuáles no",
  ],
  lecciones: [
    { titulo: "Cómo funciona", video: {"id":"rwFnTJ3Mp9g","t":"IA generativa: qué es, cómo funciona y ejemplos · Instituto Data Science Argentina (3:44)"}, html: `
      <p class="idea">Una <strong>IA generativa</strong> produce texto, imágenes o audio nuevos. Las de texto, como ChatGPT, Gemini, Claude o Copilot, escriben <strong>prediciendo la palabra que suele seguir</strong>, según lo que vieron en millones de textos.</p>
      <p>A estos programas se los llama <strong>chatbots</strong> o asistentes: les escribís en un chat y te contestan. Por dentro hay un <strong>modelo de lenguaje</strong>, un programa entrenado con muchísimo texto.</p>
      <table>
        <tr><th>Lo que hace bien</th><th>Lo que no hace</th></tr>
        <tr><td>Redactar borradores en segundos</td><td>Saber si lo que dice es verdad</td></tr>
        <tr><td>Reformular a distintos niveles</td><td>Conocer a tus estudiantes ni tu escuela</td></tr>
        <tr><td>Dar ideas y ejemplos</td><td>Pensar por vos ni hacerse responsable</td></tr>
        <tr><td>Ordenar y resumir un texto que le das</td><td>Reemplazar el vínculo pedagógico</td></tr>
      </table>
      <p><strong>Lo importante para un docente:</strong> la IA escribe de forma convincente aunque se equivoque. Por eso lo que produce es un <strong>borrador</strong> que vos revisás, nunca un material terminado.</p>
      <p>En todo el curso acompañamos a <strong>Laura</strong>, profesora de Ciencias Naturales de 2.º año en una secundaria de Rosario. Tiene 4 cursos, poco tiempo para planificar y estudiantes que ya usan IA para la tarea.</p>
      <p>Por ejemplo, Laura le pidió a un chatbot "10 preguntas sobre la célula para 2.º año". En 20 segundos tuvo una lista útil, pero una de las preguntas tenía un dato mal. Lo detectó porque conoce el tema.</p>` },
    { titulo: "Errores típicos", video: {"id":"AJaKAJilf7Q","t":"¿Qué es una alucinación de IA? · Computer Hoy (3:04)"}, html: `
      <p class="idea">La IA comete tres tipos de errores que un docente tiene que conocer: <strong>inventar</strong>, repetir <strong>sesgos</strong> y estar <strong>desactualizada</strong>.</p>
      <table>
        <tr><th>Error</th><th>Qué es</th><th>Ejemplo en el aula</th></tr>
        <tr><td>Alucinación</td><td>Inventa datos, citas o libros con total seguridad</td><td>Una bibliografía con un libro que no existe</td></tr>
        <tr><td>Sesgo</td><td>Repite prejuicios de los textos con que aprendió</td><td>Siempre pone varones como científicos en los ejemplos</td></tr>
        <tr><td>Desactualización</td><td>No sabe lo que pasó después de su entrenamiento</td><td>Un dato de población o una ley vieja</td></tr>
        <tr><td>Fuera de contexto</td><td>Responde para otro país o sistema educativo</td><td>Habla de "grados" de EE. UU. o de leyes de España</td></tr>
      </table>
      <pre><code>Regla de oro antes de usar algo en clase:
1. ¿Los datos son correctos? (contrastá con una fuente confiable)
2. ¿Es adecuado para la edad y el nivel?
3. ¿Respeta a todos tus estudiantes? (sesgos, estereotipos)
4. ¿Está pensado para Argentina y para tu jurisdicción?</code></pre>
      <p><strong>Las citas y la bibliografía</strong> son lo más riesgoso: buscá cada libro o artículo antes de recomendarlo.</p>
      <p>Por ejemplo, Laura pidió "3 libros sobre ecología para adolescentes". Uno no existía y otro tenía mal el autor. Ahora busca cada título en un catálogo de biblioteca antes de pasarlo.</p>` },
    { titulo: "Cuándo sí y cuándo no", html: `
      <p class="idea">La IA ahorra tiempo en tareas de <strong>redactar y transformar</strong>. Las decisiones pedagógicas, la evaluación y el vínculo con tus estudiantes siguen siendo tuyos.</p>
      <table>
        <tr><th>Conviene usarla para</th><th>Mejor no usarla para</th></tr>
        <tr><td>Borradores de consignas, ejemplos y ejercicios</td><td>Poner notas sin tu revisión</td></tr>
        <tr><td>Adaptar un texto a otro nivel de lectura</td><td>Decidir adecuaciones de un estudiante con un diagnóstico</td></tr>
        <tr><td>Ideas de actividades para un tema</td><td>Escribir informes sobre estudiantes con sus datos</td></tr>
        <tr><td>Primer borrador de una rúbrica</td><td>Responder a familias en situaciones delicadas</td></tr>
        <tr><td>Preguntas de repaso</td><td>Reemplazar la explicación que tus estudiantes necesitan de vos</td></tr>
      </table>
      <p><strong>Una forma de pensarlo:</strong> la IA es como un ayudante muy rápido que acaba de llegar a la escuela. Puede preparar borradores, pero no conoce a tus estudiantes, a veces se equivoca y vos firmás lo que sale.</p>
      <p>La UNESCO propone que la IA sirva para <strong>ampliar las capacidades humanas</strong> y no para reemplazarlas. Su marco de competencias para docentes empieza por una mirada centrada en las personas.</p>
      <p>Por ejemplo, Laura usa la IA para armar 3 versiones de un ejercicio con distinta dificultad. Pero decide ella qué versión le da a cada estudiante, porque los conoce.</p>` },
  ],
  practica: [
    "Pedile a un chatbot 5 preguntas sobre un tema que enseñás y anotá cuántas tuvieron algún error o algo que tuviste que cambiar.",
    "Pedile 3 libros o artículos sobre ese tema, buscalos en un catálogo o en internet y anotá cuántos existen de verdad con ese título y ese autor.",
    "Hacé una lista de 5 tareas de tu trabajo y marcá al lado cuáles delegarías como borrador y cuáles no, con el motivo.",
  ],
  recursos: [
    { t: "Noticias ONU: la UNESCO pide regular la IA generativa en las escuelas (2023)", url: "https://news.un.org/es/story/2023/09/1523892" },
    { t: "Ludomag: resumen del marco de competencias en IA para docentes de la UNESCO", url: "https://ludomag.com/es/2024/12/04/la-unesco-publica-el-marco-de-competencias-en-inteligencia-artificial-para-docentes" },
    { t: "Educ.ar: recursos educativos del Ministerio de Educación de Argentina", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Un colega dice que la IA \"busca la respuesta en una base de datos de verdades\". ¿Qué le explicás?", opciones: ["Que tiene razón","Que copia de Wikipedia siempre","Que escribe prediciendo palabras probables, y puede equivocarse","Que consulta a un experto humano"], correcta: 2, explicacion: "Predice texto plausible, no verifica. \"Copia de Wikipedia\" tienta, pero no funciona así." },
    { q: "Si la IA te da un material en segundos, ¿cómo lo tratás?", opciones: ["Como un borrador que revisás antes de usar","Como un material terminado","Como una fuente oficial","Como algo que no hace falta leer"], correcta: 0, explicacion: "Puede tener errores aunque suene seguro. \"Terminado\" tienta por la prolijidad, pero vos firmás lo que sale." },
    { q: "Tu chatbot recomienda un libro que no encontrás en ningún catálogo. ¿Qué pasó?", opciones: ["El libro es muy nuevo y seguro existe","Tu buscador está roto","Es un libro secreto","Probablemente es una alucinación: lo inventó"], correcta: 3, explicacion: "Las IA inventan títulos y autores. \"Es muy nuevo\" tienta, pero si no aparece en ningún lado, no lo recomiendes." },
    { q: "En los ejemplos que te arma la IA, los científicos siempre son varones. ¿Qué es eso?", opciones: ["Un dato histórico correcto","Un sesgo que repite de los textos con que aprendió","Una casualidad sin importancia","Un error de tu computadora"], correcta: 1, explicacion: "Repite prejuicios de sus datos. \"Casualidad\" tienta, pero en el aula transmite un estereotipo." },
    { q: "La IA te da una cifra de población de 2019 como si fuera actual. ¿Qué error es?", opciones: ["Una alucinación siempre","Un sesgo de género","Desactualización: no sabe lo que pasó después de su entrenamiento","No es un error"], correcta: 2, explicacion: "Puede tener datos viejos. \"No es un error\" tienta si el número parece razonable." },
    { q: "La IA te explica el sistema educativo con los \"grados\" de Estados Unidos. ¿Qué hacés?", opciones: ["Le aclarás que es para Argentina y tu jurisdicción, y revisás","Lo usás igual","Le pedís que sea más largo","Lo traducís al inglés"], correcta: 0, explicacion: "Si no le das contexto, responde para otro país. Usarlo igual tienta por apuro, pero confunde." },
    { q: "Vas a pasar una bibliografía armada con IA. ¿Qué controlás?", opciones: ["Solo que tenga 10 títulos","Que los títulos suenen bien","Nada, la IA no se equivoca con libros","Que cada libro exista, con ese título y ese autor"], correcta: 3, explicacion: "Las citas son lo más riesgoso. \"Suenan bien\" tienta, pero los inventados también suenan bien." },
    { q: "Si querés usar la IA para algo que ahorra tiempo de verdad, ¿qué elegís?", opciones: ["Poner las notas sin revisar","Adaptar un texto a otro nivel de lectura","Decidir adecuaciones por diagnóstico","Responder un conflicto con una familia"], correcta: 1, explicacion: "Transformar textos es su fuerte. Las notas tientan por el tiempo que llevan, pero son decisión tuya." },
    { q: "Tenés que escribir un informe sobre un estudiante con sus datos. ¿Usás un chatbot público?", opciones: ["Sí, es más rápido","Sí, si borrás el apellido, pero dejás el resto","No: no se cargan datos personales de estudiantes","Sí, si es de noche"], correcta: 2, explicacion: "Los datos de estudiantes se protegen. Borrar solo el apellido tienta, pero con el resto se lo puede identificar." },
    { q: "Usás la IA para 3 versiones de un ejercicio. ¿Quién decide qué versión recibe cada estudiante?", opciones: ["Vos, porque los conocés","La IA","Los estudiantes por sorteo","Nadie"], correcta: 0, explicacion: "La decisión pedagógica es tuya. Que la IA decida tienta por cómodo, pero no conoce a nadie." },
    { q: "¿Qué propone la UNESCO sobre la IA en educación?", opciones: ["Que reemplace a los docentes","Que se prohíba para siempre","Que la usen solo los chicos","Que amplíe las capacidades humanas y no las reemplace"], correcta: 3, explicacion: "La mirada está centrada en las personas. \"Reemplazar docentes\" tienta como titular, pero es lo contrario." },
    { q: "Si la IA escribe de forma muy convincente, ¿qué te dice sobre si es verdad?", opciones: ["Que es verdad","Nada: puede sonar segura y estar equivocada","Que la revisó un experto","Que viene de una fuente oficial"], correcta: 1, explicacion: "El tono no garantiza nada. Que sea convincente tienta, pero las alucinaciones también lo son." },
  ],
},
{
  id: "cuidados",
  icono: "🔒",
  titulo: "Privacidad, edades y reglas",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué datos de estudiantes nunca se cargan en una IA",
    "Anonimizar un texto antes de pedir ayuda",
    "Revisar la edad mínima y las reglas de tu escuela antes de usar IA con estudiantes",
  ],
  lecciones: [
    { titulo: "Los datos de tus estudiantes", html: `
      <p class="idea">Lo que escribís en un chatbot puede guardarse y usarse para entrenar el sistema. Por eso, <strong>los datos personales de tus estudiantes no se cargan</strong>.</p>
      <table>
        <tr><th>Nunca cargues</th><th>Por qué</th></tr>
        <tr><td>Nombres y apellidos, DNI, dirección, teléfono</td><td>Identifican a la persona</td></tr>
        <tr><td>Notas y legajos</td><td>Son información privada</td></tr>
        <tr><td>Diagnósticos, salud, situación familiar</td><td>Son datos sensibles: los más protegidos</td></tr>
        <tr><td>Fotos o audios de estudiantes</td><td>Muestran su cara o su voz</td></tr>
        <tr><td>Trabajos con el nombre puesto</td><td>Un trabajo también identifica</td></tr>
      </table>
      <p>En Argentina, la <strong>Ley 25.326 de Protección de Datos Personales</strong> protege esta información. Los datos de salud son <strong>datos sensibles</strong> y tienen todavía más protección.</p>
      <p><strong>Revisá la configuración:</strong> muchos chatbots tienen una opción para que tus conversaciones no se usen para entrenar. Buscala en Ajustes o Privacidad. Igual, no cargues datos personales.</p>
      <p><strong>Cuentas institucionales:</strong> si tu escuela o tu ministerio te da una herramienta de IA con acuerdo de privacidad, usá esa para el trabajo.</p>
      <p>Por ejemplo, Laura quería ayuda para escribirle a la familia de un estudiante. En vez de pegar el caso con nombres, escribió: "un estudiante de 13 años que no entrega tareas hace 3 semanas".</p>` },
    { titulo: "Anonimizar", html: `
      <p class="idea"><strong>Anonimizar</strong> es sacar de un texto todo lo que permita saber de quién se habla. Hay que sacar más que el nombre.</p>
      <pre><code>Antes (NO):
"Tomás Gómez, de 2.º B, DNI 48.xxx.xxx, tiene TDAH
 y no entrega desde que se separaron los padres."

Después (sí):
"Un estudiante de 13 años que hace 3 semanas
 no entrega las tareas. ¿Cómo le propongo un plan
 para ponerse al día?"</code></pre>
      <table>
        <tr><th>Sacá</th><th>Reemplazá por</th></tr>
        <tr><td>Nombre</td><td>"un estudiante", "una estudiante"</td></tr>
        <tr><td>Curso y escuela</td><td>La edad o el año, si hace falta</td></tr>
        <tr><td>Diagnóstico</td><td>La necesidad concreta: "le cuesta sostener la atención en textos largos"</td></tr>
        <tr><td>Situación familiar</td><td>Nada: no hace falta para la consulta</td></tr>
      </table>
      <p><strong>Pregunta de control:</strong> si alguien de tu escuela leyera tu consulta, ¿podría saber de quién hablás? Si la respuesta es sí, seguí sacando datos.</p>
      <p><strong>Los trabajos de estudiantes:</strong> si querés ayuda para corregir, borrá el nombre y cualquier dato personal que aparezca en el texto, y avisales a tus estudiantes cómo usás la IA.</p>
      <p>Por ejemplo, Laura quería ideas para un estudiante con dificultades de lectura. No puso el diagnóstico: pidió "actividades para alguien a quien le cuesta leer textos largos". Las ideas le sirvieron igual.</p>` },
    { titulo: "Edades y reglas de la escuela", video: {"id":"CnFhPvK97mQ","t":"La UNESCO publica una guía sobre el uso de la IA en la educación · France 24 Español (1:38)"}, html: `
      <p class="idea">Antes de usar IA <strong>con</strong> estudiantes, revisá tres cosas: la <strong>edad mínima</strong> de la herramienta, las <strong>reglas de tu escuela y tu jurisdicción</strong> y el <strong>consentimiento</strong> de las familias cuando corresponde.</p>
      <table>
        <tr><th>Qué revisar</th><th>Dónde</th></tr>
        <tr><td>Edad mínima de la herramienta</td><td>Sus términos de uso: muchas piden 13 años o más, y algunas, permiso de un adulto hasta los 18</td></tr>
        <tr><td>Recomendación internacional</td><td>La guía de la UNESCO de 2023 propone que el uso en el aula empiece a los 13 años</td></tr>
        <tr><td>Normas de tu escuela</td><td>Dirección, acuerdos de convivencia, resoluciones de tu ministerio</td></tr>
        <tr><td>Consentimiento</td><td>Si la actividad pide crear cuentas, preguntá a la escuela cómo se informa a las familias</td></tr>
      </table>
      <p><strong>Con estudiantes más chicos,</strong> la IA puede usarla el docente frente a la clase, proyectada, sin que cada uno tenga cuenta.</p>
      <p><strong>Las reglas cambian:</strong> las políticas de las empresas y de los ministerios se actualizan seguido. Revisá antes de cada ciclo lectivo.</p>
      <p>Este curso ayuda a pensar y a preparar preguntas, pero no reemplaza lo que decidan tu escuela y tu jurisdicción.</p>
      <p>Por ejemplo, Laura quería que sus estudiantes de 13 años usaran un chatbot. Primero consultó con la dirección; acordaron usarlo proyectado en clase, sin cuentas personales.</p>` },
  ],
  practica: [
    "Buscá en la configuración de tu chatbot la opción para que no usen tus conversaciones para entrenar y anotá en qué menú está.",
    "Anonimizá una consulta real sobre un estudiante y anotá cuántos datos sacaste.",
    "Buscá los términos de uso de una herramienta de IA y anotá la edad mínima que pide.",
  ],
  recursos: [
    { t: "Noticias ONU: la UNESCO pide regular la IA generativa en las escuelas (2023)", url: "https://news.un.org/es/story/2023/09/1523892" },
    { t: "INTEF (Ministerio de Educación de España): orientaciones para integrar la IA en la formación docente (PDF)", url: "https://intef.es/wp-content/uploads/2025/06/Orientaciones-para-la-integracion-de-la-IA-en-la-formacion-docente_Actualizacion_2026.pdf" },
  ],
  quiz: [
    { q: "Querés ayuda para escribir un informe y tenés el legajo de un estudiante. ¿Qué cargás en un chatbot público?", opciones: ["El legajo completo","Solo el nombre y la nota","Nada del legajo: describís la situación sin datos personales","Una foto del legajo"], correcta: 2, explicacion: "Los legajos son información privada. Cargar solo un poco tienta, pero igual identifica." },
    { q: "Si una estudiante tiene un diagnóstico de salud, ¿qué tipo de dato es?", opciones: ["Un dato sensible, con más protección","Un dato público","Un dato sin importancia","Un dato que se puede compartir si ayuda"], correcta: 0, explicacion: "La salud es dato sensible. \"Si ayuda\" tienta, pero la consulta funciona sin ese dato." },
    { q: "¿Qué ley protege los datos personales en Argentina?", opciones: ["La ley de tránsito","No hay ninguna","Solo leyes de otros países","La Ley 25.326 de Protección de Datos Personales"], correcta: 3, explicacion: "Es la Ley 25.326. \"No hay ninguna\" tienta, pero sí existe y aplica en la escuela." },
    { q: "Tu escuela te da una herramienta de IA con acuerdo de privacidad. ¿Cuál usás para el trabajo?", opciones: ["La personal, porque ya la conocés","La institucional","Cualquiera, da igual","Ninguna, nunca"], correcta: 1, explicacion: "La institucional tiene un acuerdo que protege los datos. La personal tienta por costumbre." },
    { q: "Borraste el nombre de un estudiante, pero dejaste curso, diagnóstico y situación familiar. ¿Está anonimizado?", opciones: ["Sí, sin nombre ya está","Sí, si es de otro año","No: con esos datos se lo puede identificar","Sí, si lo escribís en minúscula"], correcta: 2, explicacion: "Anonimizar es sacar todo lo que identifica. Sacar solo el nombre tienta porque es lo más visible." },
    { q: "Querés ideas para alguien con dificultades de lectura. ¿Qué escribís en vez del diagnóstico?", opciones: ["La necesidad concreta: \"le cuesta leer textos largos\"","El diagnóstico completo","El nombre del médico","Nada, sin contexto"], correcta: 0, explicacion: "La necesidad concreta alcanza. Sin contexto tienta para no dar datos, pero la respuesta sale genérica." },
    { q: "Si alguien de tu escuela leyera tu consulta y pudiera saber de quién hablás, ¿qué hacés?", opciones: ["La mandás igual","Le cambiás la letra","Le ponés \"confidencial\" arriba","Seguís sacando datos hasta que no se pueda saber"], correcta: 3, explicacion: "Esa es la pregunta de control. Poner \"confidencial\" tienta, pero no protege nada." },
    { q: "Vas a pedir ayuda a una IA para corregir trabajos. ¿Qué hacés con los trabajos?", opciones: ["Los cargás con nombre","Borrás nombres y datos personales, y les contás a tus estudiantes cómo usás la IA","Los cargás sin avisar","Los fotografiás con la cara del estudiante"], correcta: 1, explicacion: "Sin datos y con transparencia. Cargarlos sin avisar tienta por rápido, pero rompe la confianza." },
    { q: "Querés que tus estudiantes de 11 años usen un chatbot que pide 13 años. ¿Qué hacés?", opciones: ["Les pedís que mientan la edad","Les creás cuentas con tus datos","Lo usás vos proyectado, sin cuentas para ellos, y lo consultás con la escuela","Lo usan solos desde la casa"], correcta: 2, explicacion: "Se respeta la edad mínima. Mentir la edad tienta para que puedan usarlo, pero los deja sin protección." },
    { q: "¿Qué edad propone la guía de la UNESCO de 2023 para empezar a usar IA generativa en el aula?", opciones: ["13 años","6 años","18 años, sin excepción","Ninguna en particular"], correcta: 0, explicacion: "La UNESCO propone 13 años. 18 tienta por precaución, pero no es lo que propone." },
    { q: "La actividad pide que cada estudiante cree una cuenta. ¿Qué consultás antes?", opciones: ["Nada","Solo a los estudiantes","A la empresa del chatbot","Con la escuela, cómo se informa y se pide consentimiento a las familias"], correcta: 3, explicacion: "Las familias tienen que saberlo. Preguntar solo a los estudiantes tienta porque son los que la usan." },
    { q: "Las reglas de uso de IA de tu ministerio son del año pasado. ¿Qué hacés?", opciones: ["Las ignorás","Revisás si se actualizaron antes del ciclo lectivo","Asumís que no cambiaron","Hacés tus propias reglas sin consultar"], correcta: 1, explicacion: "Las políticas cambian seguido. Asumir que siguen igual tienta, pero pueden haber cambiado." },
  ],
},
{
  id: "pedir",
  icono: "💬",
  titulo: "Pedir bien: prompts para docentes",
  nivel: "Intermedio",
  objetivos: [
    "Escribir un pedido completo con rol, contexto, tarea, formato y límites",
    "Mejorar una respuesta conversando, en vez de empezar de cero",
    "Guardar tus mejores pedidos como plantillas",
  ],
  lecciones: [
    { titulo: "Las 5 partes de un buen pedido", html: `
      <p class="idea">Un <strong>prompt</strong> es el pedido que le escribís a la IA. Cuanto más contexto le das, menos tenés que corregir después.</p>
      <table>
        <tr><th>Parte</th><th>Qué decís</th><th>Ejemplo</th></tr>
        <tr><td>Rol</td><td>Desde dónde querés que responda</td><td>"Actuá como profesora de Ciencias Naturales con experiencia"</td></tr>
        <tr><td>Contexto</td><td>Quiénes son tus estudiantes y dónde</td><td>"2.º año de secundaria, Argentina, 13 y 14 años, nivel de lectura variado"</td></tr>
        <tr><td>Tarea</td><td>Qué tiene que hacer</td><td>"Escribí 8 preguntas de repaso sobre la célula"</td></tr>
        <tr><td>Formato</td><td>Cómo querés la respuesta</td><td>"En una tabla con pregunta, respuesta esperada y dificultad"</td></tr>
        <tr><td>Límites</td><td>Qué evitar</td><td>"Sin términos que no vimos: no uses 'organela'"</td></tr>
      </table>
      <pre><code>Pedido flojo:
"Preguntas sobre la célula"

Pedido completo:
"Actuá como profesora de Ciencias Naturales.
Mis estudiantes son de 2.º año de una secundaria argentina,
tienen 13 y 14 años. Escribí 8 preguntas de repaso sobre
la célula: 3 fáciles, 3 medias y 2 difíciles.
Ponelas en una tabla con la pregunta, la respuesta esperada
y la dificultad. No uses palabras que no vimos, como 'organela'."</code></pre>
      <p>Si querés profundizar, este sitio tiene el curso "Prompts desde cero".</p>
      <p>Por ejemplo, con el pedido flojo, Laura recibió preguntas de nivel universitario. Con el completo, le sirvieron 7 de 8 tal como venían.</p>` },
    { titulo: "Mejorar conversando", video: {"id":"Ks778qsRd3M","t":"El prompt para planificar clases con IA · El Profe Tecno (5:07)"}, html: `
      <p class="idea">La primera respuesta casi nunca es la final. En vez de empezar de cero, <strong>pedile cambios concretos</strong> en la misma conversación.</p>
      <table>
        <tr><th>Si la respuesta...</th><th>Pedile...</th></tr>
        <tr><td>Es muy difícil</td><td>"Bajá el nivel: que lo entienda alguien de 12 años"</td></tr>
        <tr><td>Es muy larga</td><td>"Resumilo en 5 puntos"</td></tr>
        <tr><td>Es genérica</td><td>"Usá ejemplos de Argentina, de la vida de un adolescente"</td></tr>
        <tr><td>Tiene un error</td><td>"El dato X está mal: es Y. Corregí todo lo que dependa de eso"</td></tr>
        <tr><td>No sabés si está bien</td><td>"¿Qué partes de tu respuesta podrían estar equivocadas?"</td></tr>
      </table>
      <p><strong>Dale ejemplos de lo que te gusta:</strong> si tenés una consigna tuya que funcionó, pegala y pedí "otras 3 con este mismo estilo". Así copia tu forma, no la de un manual genérico.</p>
      <p><strong>Pedile que pregunte:</strong> "Antes de responder, haceme las preguntas que necesites para que quede adecuado a mi curso." Muchas veces aparecen datos que no habías pensado.</p>
      <p>Por ejemplo, Laura pidió una actividad sobre ecosistemas y le salió con ejemplos de la selva amazónica. Le pidió "ejemplos de la zona del Paraná" y le quedó mucho más cercana a sus estudiantes.</p>` },
    { titulo: "Tus plantillas", html: `
      <p class="idea">Cuando un pedido te sale bien, <strong>guardalo como plantilla</strong>: un texto con huecos que completás cada vez. Así no empezás de cero.</p>
      <pre><code>PLANTILLA: preguntas de repaso
Actuá como docente de [materia].
Mis estudiantes son de [año], en Argentina, tienen [edad] años.
Escribí [cantidad] preguntas de repaso sobre [tema]:
[cuántas] fáciles, [cuántas] medias y [cuántas] difíciles.
Formato: tabla con pregunta, respuesta esperada y dificultad.
No uses: [palabras que no vimos].
Antes de terminar, marcá qué datos conviene verificar.</code></pre>
      <table>
        <tr><th>Plantillas útiles para tener</th></tr>
        <tr><td>Preguntas de repaso por niveles</td></tr>
        <tr><td>Adaptar un texto a lectura fácil</td></tr>
        <tr><td>Primer borrador de rúbrica</td></tr>
        <tr><td>Ideas de actividades para empezar un tema</td></tr>
        <tr><td>Mensaje a familias (sin datos de estudiantes)</td></tr>
      </table>
      <p><strong>Guardalas en un documento</strong> o en las notas del celular, y compartilas con tu equipo docente: lo que le sirve a una profe le puede servir a otra.</p>
      <p><strong>Ninguna plantilla reemplaza la revisión:</strong> aunque el pedido sea perfecto, la respuesta se lee antes de usarla.</p>
      <p>Por ejemplo, Laura tiene 6 plantillas en un documento compartido con 3 colegas de su escuela. Preparar un repaso le lleva 10 minutos en vez de una hora.</p>` },
  ],
  practica: [
    "Escribí un pedido flojo y uno completo con las 5 partes para el mismo material, y anotá cuántas respuestas de cada uno usarías tal como vienen.",
    "Mejorá una respuesta con 3 pedidos de cambio en la misma conversación y anotá cuáles fueron.",
    "Armá 3 plantillas con huecos para tus tareas más repetidas y anotá cuánto tiempo te ahorró la primera vez que la usaste.",
  ],
  recursos: [
    { t: "Curso de este sitio: \"Prompts desde cero\"", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "INTEF (Ministerio de Educación de España): orientaciones para integrar la IA en la formación docente (PDF)", url: "https://intef.es/wp-content/uploads/2025/06/Orientaciones-para-la-integracion-de-la-IA-en-la-formacion-docente_Actualizacion_2026.pdf" },
  ],
  quiz: [
    { q: "Si le escribís solo \"preguntas sobre la célula\", ¿qué suele pasar?", opciones: ["Respuestas perfectas para tu curso","Nada","Respuestas genéricas o de otro nivel, que hay que corregir mucho","Te pide tu DNI"], correcta: 2, explicacion: "Sin contexto, adivina. \"Perfectas\" tienta porque la IA es rápida, pero no conoce a tu curso." },
    { q: "En tu pedido decís \"2.º año de secundaria, Argentina, 13 y 14 años\". ¿Qué parte es?", opciones: ["El contexto","El rol","El formato","Los límites"], correcta: 0, explicacion: "Describe a tus estudiantes. El rol tienta, pero es desde dónde responde la IA." },
    { q: "Querés las preguntas en una tabla con la respuesta esperada. ¿Qué parte del pedido es?", opciones: ["La tarea","El rol","El contexto","El formato"], correcta: 3, explicacion: "El formato dice cómo presentar. La tarea tienta, pero es qué hacer." },
    { q: "No querés que use palabras que todavía no viste en clase. ¿Dónde lo decís?", opciones: ["En el rol","En los límites: \"no uses...\"","No se puede pedir","En el título"], correcta: 1, explicacion: "Los límites dicen qué evitar. \"No se puede\" tienta, pero se pide y lo respeta bastante." },
    { q: "La respuesta está bien, pero es muy difícil para tu curso. ¿Qué hacés?", opciones: ["Empezás de cero en otro chat","La usás igual","Le pedís en la misma conversación que baje el nivel","Abandonás"], correcta: 2, explicacion: "Pedir el cambio aprovecha lo hecho. Empezar de cero tienta, pero perdés el contexto." },
    { q: "La respuesta tiene un dato mal. ¿Cómo lo corregís?", opciones: ["\"El dato X está mal: es Y. Corregí todo lo que dependa de eso\"","La borrás entera","Lo dejás, nadie se va a dar cuenta","Le decís que está todo mal sin explicar"], correcta: 0, explicacion: "Decir el error concreto ayuda a corregir lo que depende de él. \"Está todo mal\" tienta, pero no le dice qué cambiar." },
    { q: "Tus ejemplos salen de la selva amazónica y querés algo más cercano. ¿Qué pedís?", opciones: ["Ejemplos más largos","Más emojis","Nada, da igual","Ejemplos de tu región, como la zona del Paraná"], correcta: 3, explicacion: "Lo cercano conecta con tus estudiantes. \"Da igual\" tienta, pero lo lejano interesa menos." },
    { q: "Tenés una consigna tuya que funcionó muy bien. ¿Cómo la usás con la IA?", opciones: ["La guardás sin mostrarla","La pegás y le pedís otras con el mismo estilo","Le pedís que la critique siempre","La borrás"], correcta: 1, explicacion: "Con un ejemplo copia tu estilo. Guardarla tienta, pero así responde con un estilo genérico." },
    { q: "¿Para qué sirve pedirle \"antes de responder, haceme las preguntas que necesites\"?", opciones: ["Para que tarde más","Para que no responda nunca","Para que aparezcan datos de tu curso que no habías dicho","Para que invente"], correcta: 2, explicacion: "Te ayuda a dar mejor contexto. \"Para que tarde\" tienta como sospecha, pero suma información." },
    { q: "Un pedido te salió muy bien. ¿Qué hacés con él?", opciones: ["Lo guardás como plantilla con huecos para completar","Lo olvidás","Lo repetís de memoria cada vez","Lo publicás con datos de tus estudiantes"], correcta: 0, explicacion: "La plantilla ahorra tiempo. De memoria tienta, pero siempre te falta alguna parte." },
    { q: "Usás una plantilla perfecta. ¿Hace falta leer la respuesta?", opciones: ["No, la plantilla es perfecta","Solo la primera vez","Solo si es larga","Sí: ninguna plantilla reemplaza la revisión"], correcta: 3, explicacion: "La IA puede equivocarse igual. \"Es perfecta\" tienta, pero el pedido no controla los errores." },
    { q: "Tus plantillas te ahorran mucho tiempo. ¿Qué hacés con tu equipo docente?", opciones: ["Las escondés","Las compartís: lo que le sirve a una profe le puede servir a otra","Las vendés","Les decís que no usen IA"], correcta: 1, explicacion: "Compartir multiplica el ahorro. Esconderlas tienta, pero el equipo trabaja más." },
  ],
},
{
  id: "planificar",
  icono: "🗓️",
  titulo: "Planificar y crear materiales",
  nivel: "Intermedio",
  objetivos: [
    "Usar la IA para el borrador de una secuencia didáctica, alineada con tus objetivos y el diseño curricular",
    "Generar consignas, ejercicios graduados y ejemplos, y revisarlos",
    "Armar el primer borrador de una rúbrica y ajustarlo",
  ],
  lecciones: [
    { titulo: "Borrador de una secuencia", html: `
      <p class="idea">La IA puede proponer una <strong>secuencia didáctica</strong> (el orden de clases de un tema) en minutos. Vos la ajustás a tus <strong>objetivos</strong>, al <strong>diseño curricular</strong> y a tu curso.</p>
      <p>El <strong>diseño curricular</strong> es el documento oficial de tu jurisdicción que dice qué se enseña en cada año. La IA no lo conoce bien: dale vos los contenidos.</p>
      <pre><code>Pedido para una secuencia:
"Soy profesora de Ciencias Naturales de 2.º año (Argentina).
Contenidos del diseño curricular: [pegá los contenidos].
Objetivo: que mis estudiantes expliquen cómo fluye la energía
en un ecosistema de su región.
Tengo 4 clases de 80 minutos.
Proponé una secuencia: objetivo, actividad de inicio,
desarrollo, cierre y cómo me doy cuenta de que aprendieron,
para cada clase."</code></pre>
      <table>
        <tr><th>Después, revisá</th><th>Pregunta</th></tr>
        <tr><td>Objetivos</td><td>¿Cada clase apunta a lo que quiero que aprendan?</td></tr>
        <tr><td>Tiempos</td><td>¿Entra en 80 minutos con mis grupos reales?</td></tr>
        <tr><td>Recursos</td><td>¿Tengo lo que propone: laboratorio, proyector, internet?</td></tr>
        <tr><td>Datos</td><td>¿Los contenidos y ejemplos son correctos?</td></tr>
      </table>
      <p>Por ejemplo, la secuencia que le propuso la IA a Laura tenía una salida al campo en la clase 2. Su escuela no tiene presupuesto para salidas, así que la cambió por observar el patio con una guía.</p>` },
    { titulo: "Consignas, ejercicios y ejemplos", html: `
      <p class="idea">Para materiales, pedí <strong>variedad</strong>: varios niveles de dificultad, ejemplos cercanos y consignas claras. Después elegís y corregís.</p>
      <table>
        <tr><th>Material</th><th>Qué pedir</th></tr>
        <tr><td>Ejercicios graduados</td><td>"3 fáciles, 3 medios y 2 de desafío, con las respuestas"</td></tr>
        <tr><td>Consignas</td><td>"Una consigna con un verbo claro (explicá, compará, justificá) y el producto esperado"</td></tr>
        <tr><td>Ejemplos</td><td>"5 ejemplos de la vida diaria de un adolescente argentino"</td></tr>
        <tr><td>Preguntas de comprensión</td><td>"Sobre este texto [pegalo], 4 preguntas: 2 literales y 2 que pidan relacionar"</td></tr>
        <tr><td>Errores frecuentes</td><td>"¿Qué errores suelen cometer los estudiantes con este tema?"</td></tr>
      </table>
      <p><strong>Pegá tu propio texto:</strong> si le das el texto de la clase, las preguntas salen sobre eso y no sobre lo que la IA "cree" que dice el tema. Así baja mucho el riesgo de errores.</p>
      <p><strong>Resolvé los ejercicios vos:</strong> antes de dar un ejercicio, hacelo. La IA a veces se equivoca en las cuentas o en las respuestas.</p>
      <p>Por ejemplo, Laura pegó un texto de 2 páginas sobre la fotosíntesis y pidió 6 preguntas. Las 6 eran sobre el texto. Cuando no pegó el texto, 2 preguntas eran sobre temas que no había dado.</p>` },
    { titulo: "Rúbricas", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una tabla de criterios y niveles que dice qué se espera de un trabajo. La IA arma un buen primer borrador si le das el <strong>trabajo</strong>, los <strong>criterios</strong> y los <strong>niveles</strong>.</p>
      <pre><code>Pedido para una rúbrica:
"Armá una rúbrica para un afiche sobre una cadena alimentaria
de la zona del Paraná, para 2.º año.
Criterios: datos correctos, relaciones entre seres vivos,
claridad del afiche, fuentes citadas.
Niveles: logrado, en proceso, inicial.
Escribí cada celda con algo que se pueda observar,
en lenguaje que entienda un estudiante de 13 años."</code></pre>
      <table>
        <tr><th>Celda floja</th><th>Celda que se puede observar</th></tr>
        <tr><td>"Muy buen trabajo"</td><td>"Nombra al menos 4 seres vivos y une cada uno con una flecha a lo que come"</td></tr>
        <tr><td>"Poco claro"</td><td>"Faltan flechas o no se entiende quién come a quién"</td></tr>
      </table>
      <p><strong>Ajustala vos:</strong> los criterios tienen que coincidir con lo que enseñaste. Si algo de la rúbrica no lo diste, sacalo.</p>
      <p><strong>Compartila antes:</strong> dales la rúbrica a tus estudiantes con la consigna. Así saben qué se espera.</p>
      <p>Por ejemplo, la rúbrica de la IA pedía "uso de vocabulario técnico avanzado". Laura lo cambió por "usa al menos 3 palabras de las que vimos en clase", que es lo que había enseñado.</p>` },
  ],
  practica: [
    "Pedí el borrador de una secuencia de 3 o 4 clases para un tema tuyo y anotá cuántas cosas cambiaste al revisarla.",
    "Pegá un texto de tu clase y pedí 6 preguntas. Resolvelas y anotá cuántas tenían algún problema.",
    "Armá una rúbrica con IA y anotá cuántas celdas reescribiste para que se puedan observar.",
  ],
  recursos: [
    { t: "INTEF (Ministerio de Educación de España): orientaciones para integrar la IA en la formación docente (PDF)", url: "https://intef.es/wp-content/uploads/2025/06/Orientaciones-para-la-integracion-de-la-IA-en-la-formacion-docente_Actualizacion_2026.pdf" },
    { t: "Educ.ar: recursos educativos del Ministerio de Educación de Argentina", url: "https://www.educ.ar/recursos" },
    { t: "Curso de este sitio: \"Prompts desde cero\"", url: "https://pkeios.github.io/EiaLearning/prompts/" },
  ],
  quiz: [
    { q: "Pedís una secuencia didáctica a la IA. ¿Qué le das sí o sí?", opciones: ["Nada, que invente","La lista de tus estudiantes con nombre","Los contenidos del diseño curricular y tu objetivo","Tu contraseña del campus"], correcta: 2, explicacion: "La IA no conoce bien tu diseño curricular. Que invente tienta por rápido, pero se aleja de lo que tenés que enseñar." },
    { q: "La secuencia propone una salida al campo y tu escuela no puede hacerla. ¿Qué hacés?", opciones: ["La cambiás por algo posible, como observar el patio con una guía","La dejás igual","Suspendés el tema","Pedís otra secuencia sin decir por qué"], correcta: 0, explicacion: "Vos conocés tus recursos. Dejarla igual tienta, pero no se puede hacer." },
    { q: "Si querés ejercicios para todo tu curso, ¿qué pedís?", opciones: ["Todos del mismo nivel","Solo de desafío","Sin respuestas, para no tentarte","Ejercicios graduados: fáciles, medios y de desafío, con respuestas"], correcta: 3, explicacion: "Los niveles atienden a todos. Todos iguales tienta por simple, pero deja afuera a muchos." },
    { q: "Querés preguntas que sean sobre lo que diste en clase. ¿Qué hacés?", opciones: ["Le decís solo el tema","Pegás el texto de tu clase en el pedido","Le pedís que adivine","Le das el título del libro"], correcta: 1, explicacion: "Con tu texto, las preguntas salen de ahí. Solo el tema tienta por corto, pero aparecen cosas que no diste." },
    { q: "Antes de dar ejercicios armados por IA, ¿qué hacés?", opciones: ["Los das sin mirar","Los imprimís en color","Los resolvés vos","Le preguntás a la IA si están bien y listo"], correcta: 2, explicacion: "La IA puede errar en cuentas o respuestas. Preguntarle a ella tienta, pero puede confirmar su propio error." },
    { q: "¿Qué es un buen verbo para una consigna clara?", opciones: ["Explicá, compará o justificá","Trabajá sobre el tema","Hacé algo con esto","Pensá"], correcta: 0, explicacion: "El verbo dice qué hacer. \"Trabajá sobre el tema\" tienta por amplio, pero nadie sabe qué entregar." },
    { q: "Querés anticiparte a las dificultades de un tema. ¿Qué le pedís a la IA?", opciones: ["Que corrija los exámenes","Que te diga quién va a desaprobar","Nada","Los errores frecuentes de los estudiantes con ese tema"], correcta: 3, explicacion: "Conocer errores típicos ayuda a planificar. Predecir quién desaprueba tienta, pero no es algo que pueda saber." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una nota numérica","Una tabla de criterios y niveles que dice qué se espera de un trabajo","Un tipo de examen oral","Una lista de estudiantes"], correcta: 1, explicacion: "Describe qué se espera en cada nivel. \"Nota numérica\" tienta porque se usa para evaluar, pero es otra cosa." },
    { q: "Una celda de tu rúbrica dice \"Muy buen trabajo\". ¿Qué mejorás?", opciones: ["Que diga \"excelente\"","Que tenga más adjetivos","Que diga algo que se pueda observar en el trabajo","Nada"], correcta: 2, explicacion: "Lo observable es justo para todos. \"Excelente\" tienta, pero sigue sin decir qué se ve." },
    { q: "La rúbrica pide algo que no enseñaste. ¿Qué hacés?", opciones: ["Lo sacás o lo cambiás por lo que sí enseñaste","Lo dejás, así es más exigente","Lo explicás el día de la entrega","Bajás la nota a todos"], correcta: 0, explicacion: "Se evalúa lo enseñado. \"Más exigente\" tienta, pero es injusto." },
    { q: "¿Cuándo les das la rúbrica a tus estudiantes?", opciones: ["Después de corregir","Nunca","Solo a los que preguntan","Con la consigna, antes de que hagan el trabajo"], correcta: 3, explicacion: "Saber qué se espera los ayuda. Después de corregir tienta para explicar la nota, pero llega tarde." },
    { q: "Si querés que la rúbrica la entienda un estudiante de 13 años, ¿qué agregás al pedido?", opciones: ["\"Con vocabulario técnico\"","\"En lenguaje que entienda un estudiante de 13 años\"","\"Lo más largo posible\"","Nada"], correcta: 1, explicacion: "Así está escrita para quien la usa. Vocabulario técnico tienta por serio, pero no se entiende." },
  ],
},
{
  id: "adaptar",
  icono: "🧩",
  titulo: "Adaptar para que aprendan todos",
  nivel: "Intermedio",
  objetivos: [
    "Adaptar un texto a lectura fácil sin perder el contenido",
    "Ofrecer varias formas de acceder al tema y de mostrar lo aprendido",
    "Comunicarte con las familias en un lenguaje claro",
  ],
  lecciones: [
    { titulo: "Lectura fácil y niveles", html: `
      <p class="idea">La IA es muy buena para <strong>reescribir un texto a otro nivel</strong>. Así todo el curso trabaja el mismo tema, cada uno con un texto que puede leer.</p>
      <p>La <strong>lectura fácil</strong> es una forma de escribir con frases cortas, una idea por frase y palabras de uso común.</p>
      <pre><code>Pedido:
"Reescribí este texto en lectura fácil para un estudiante
de 13 años al que le cuesta leer textos largos.
Frases cortas, una idea por frase, palabras comunes.
Mantené todos los conceptos: no saques información.
Si usás una palabra técnica, explicala en la misma frase.
[pegá el texto]"</code></pre>
      <table>
        <tr><th>Original</th><th>Lectura fácil</th></tr>
        <tr><td>"Los productores, mediante la fotosíntesis, transforman la energía lumínica en energía química."</td><td>"Las plantas son productoras. Usan la luz del sol para fabricar su alimento. Así guardan energía."</td></tr>
      </table>
      <p><strong>Revisá que no se pierda contenido:</strong> a veces, al simplificar, la IA borra justo el concepto importante. Compará las dos versiones.</p>
      <p><strong>Tres versiones del mismo texto</strong> (inicial, intermedia y avanzada) permiten que cada estudiante empiece donde está y suba de nivel.</p>
      <p>Por ejemplo, Laura armó 3 versiones del texto sobre ecosistemas. Revisando, vio que la versión fácil había borrado a los descomponedores, y los agregó.</p>` },
    { titulo: "Varias formas de aprender y de mostrar", html: `
      <p class="idea">El <strong>Diseño Universal para el Aprendizaje</strong> (DUA) propone planificar desde el principio <strong>varias formas</strong> de acceder al tema y de mostrar lo aprendido, para que nadie quede afuera.</p>
      <table>
        <tr><th>Principio del DUA</th><th>Qué significa</th><th>Cómo ayuda la IA</th></tr>
        <tr><td>Varias formas de presentar</td><td>Texto, esquema, ejemplo, audio</td><td>Pasar un texto a esquema o a pasos</td></tr>
        <tr><td>Varias formas de mostrar lo aprendido</td><td>Escrito, oral, afiche, maqueta</td><td>Proponer opciones de producto final</td></tr>
        <tr><td>Varias formas de interesar</td><td>Temas cercanos, elección, desafío</td><td>Ejemplos de la vida de tus estudiantes</td></tr>
      </table>
      <p><strong>Lo que la IA no decide:</strong> las adecuaciones para un estudiante en particular se acuerdan con el equipo de la escuela, la familia y, si corresponde, los profesionales que lo acompañan. La IA da ideas generales; no conoce a nadie.</p>
      <p><strong>Accesibilidad:</strong> también podés pedirle la descripción de una imagen para un estudiante con baja visión, o una versión del texto para leer en voz alta. Siempre revisá lo que produce.</p>
      <p>Por ejemplo, para mostrar lo aprendido sobre ecosistemas, Laura ofreció 3 opciones: un afiche, una explicación grabada de 2 minutos o un texto. La IA le ayudó a escribir la misma rúbrica para las tres.</p>` },
    { titulo: "Escribir a las familias", html: `
      <p class="idea">La IA ayuda a escribir mensajes a las familias <strong>claros, cortos y cordiales</strong>. Lo que no se delega son las situaciones delicadas: ahí escribe y decide el equipo de la escuela.</p>
      <pre><code>Pedido para un aviso general:
"Escribí un mensaje para las familias de 2.º año.
Tema: el viernes vamos al laboratorio, traer delantal.
Tono cordial, menos de 60 palabras, sin palabras técnicas.
Escribí también una versión en portugués."</code></pre>
      <table>
        <tr><th>Sí con IA (borrador)</th><th>No con IA</th></tr>
        <tr><td>Avisos generales: salidas, materiales, fechas</td><td>Conflictos, sanciones, situaciones de salud</td></tr>
        <tr><td>Traducir un aviso general a otro idioma</td><td>Mensajes con datos de un estudiante</td></tr>
        <tr><td>Hacer más claro un texto tuyo</td><td>Situaciones que requieren intervención de la escuela</td></tr>
      </table>
      <p><strong>Las traducciones:</strong> si una familia habla otro idioma, la IA ayuda, pero puede cometer errores. Si es posible, pedile a alguien que hable ese idioma que lo revise.</p>
      <p><strong>Leelo como si fueras la familia:</strong> ¿se entiende sin saber nada de la escuela? ¿Suena cordial?</p>
      <p>Por ejemplo, una familia de su curso habla portugués. Laura le manda los avisos generales en los dos idiomas, y una mamá de la escuela que habla portugués le revisó el primero.</p>` },
  ],
  practica: [
    "Pasá un texto tuyo a lectura fácil con IA, compará las dos versiones y anotá si se perdió algún concepto.",
    "Para un tema, armá 3 opciones de producto final con ayuda de la IA y anotá cuáles ofrecerías.",
    "Escribí con IA un aviso general a las familias de menos de 60 palabras y anotá cuántas cosas corregiste.",
  ],
  recursos: [
    { t: "INTEF (Ministerio de Educación de España): orientaciones para integrar la IA en la formación docente (PDF)", url: "https://intef.es/wp-content/uploads/2025/06/Orientaciones-para-la-integracion-de-la-IA-en-la-formacion-docente_Actualizacion_2026.pdf" },
    { t: "Educ.ar: recursos educativos del Ministerio de Educación de Argentina", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Querés que todo el curso trabaje el mismo texto, pero a algunos les cuesta leer. ¿Qué hacés?", opciones: ["Les das otro tema más fácil","Les sacás el texto","Pedís una versión en lectura fácil que mantenga los conceptos","Les das el mismo sin cambios"], correcta: 2, explicacion: "Mismo tema, distinto nivel. Otro tema tienta por simple, pero los deja afuera de lo que aprende el curso." },
    { q: "¿Qué tiene la lectura fácil?", opciones: ["Frases cortas, una idea por frase y palabras comunes","Menos contenido","Letra más chica","Muchas palabras técnicas"], correcta: 0, explicacion: "Simplifica la forma, no el contenido. \"Menos contenido\" tienta, pero no es la idea." },
    { q: "La versión fácil de tu texto borró a los descomponedores. ¿Qué hacés?", opciones: ["Lo dejás así, es más corto","Usás solo la versión difícil","Le pedís que lo haga más corto","Los agregás: al simplificar no se puede perder el concepto"], correcta: 3, explicacion: "Hay que comparar las versiones. Dejarlo tienta por más corto, pero falta un concepto." },
    { q: "¿Qué propone el Diseño Universal para el Aprendizaje (DUA)?", opciones: ["Un solo método para todos","Planificar desde el principio varias formas de acceder y de mostrar lo aprendido","Adaptar solo cuando alguien falla","Que cada estudiante elija si aprende o no"], correcta: 1, explicacion: "Se planifica para la variedad desde el inicio. Adaptar cuando alguien falla tienta, pero llega tarde." },
    { q: "Querés que tus estudiantes muestren lo aprendido de varias formas. ¿Qué ofrecés?", opciones: ["Solo una prueba escrita","Que cada uno haga lo que quiera sin criterios","Opciones como afiche, explicación grabada o texto","Nada"], correcta: 2, explicacion: "Opciones con la misma rúbrica. \"Lo que quiera\" tienta por libre, pero sin criterios no se evalúa." },
    { q: "Si un estudiante necesita adecuaciones, ¿quién las decide?", opciones: ["El equipo de la escuela con la familia y los profesionales que lo acompañan","La IA","Solo vos, en el momento","Nadie"], correcta: 0, explicacion: "Las adecuaciones son una decisión acordada. La IA tienta porque da ideas rápido, pero no conoce al estudiante." },
    { q: "Tenés un estudiante con baja visión y una imagen clave. ¿Cómo te ayuda la IA?", opciones: ["Borrando la imagen","Haciéndola más chica","No puede ayudar","Con una descripción de la imagen, que vos revisás"], correcta: 3, explicacion: "La descripción da acceso. Borrarla tienta por simple, pero pierde el contenido." },
    { q: "¿Para qué mensaje a las familias conviene usar IA como borrador?", opciones: ["Una sanción a un estudiante","Un aviso general: traer delantal el viernes","Una situación de salud","Un conflicto entre familias"], correcta: 1, explicacion: "Los avisos generales no tienen datos sensibles. La sanción tienta por difícil de escribir, pero es delicada." },
    { q: "Una familia habla portugués. ¿Cómo usás la traducción de la IA?", opciones: ["Para todo, sin revisar","Nunca, que se arreglen","Con avisos generales, y si podés, que alguien que hable portugués lo revise","Solo con datos del estudiante"], correcta: 2, explicacion: "La traducción puede tener errores. \"Sin revisar\" tienta por rápido, pero puede confundir." },
    { q: "Antes de enviar un mensaje a las familias, ¿qué te preguntás?", opciones: ["¿Se entiende sin saber nada de la escuela y suena cordial?","¿Es largo?","¿Tiene palabras difíciles?","¿Lo escribió la IA?"], correcta: 0, explicacion: "Leelo como la familia. \"¿Es largo?\" tienta, pero lo importante es que se entienda." },
    { q: "Querés que tu aviso sea corto. ¿Qué agregás al pedido?", opciones: ["\"Lo más completo posible\"","\"Con todos los detalles técnicos\"","Nada","\"Menos de 60 palabras\""], correcta: 3, explicacion: "Un límite concreto lo deja corto. \"Lo más completo\" tienta por responsable, pero queda largo." },
    { q: "Si pedís 3 versiones de un texto (inicial, intermedia y avanzada), ¿para qué sirven?", opciones: ["Para poner 3 notas","Para que cada estudiante empiece donde está y pueda subir de nivel","Para que nadie lea la avanzada","Para gastar más papel"], correcta: 1, explicacion: "Permiten avanzar desde donde está cada uno. Las notas tientan, pero las versiones son para aprender." },
  ],
},
{
  id: "evaluar",
  icono: "📝",
  titulo: "Evaluar en tiempos de IA",
  nivel: "Avanzado",
  objetivos: [
    "Usar la IA para borradores de devolución, manteniendo vos la decisión de la nota",
    "Explicar por qué los detectores de IA no son confiables",
    "Rediseñar una evaluación para que muestre el proceso de aprendizaje",
  ],
  lecciones: [
    { titulo: "Devoluciones con ayuda", html: `
      <p class="idea">La IA puede ayudarte a escribir <strong>devoluciones</strong> (comentarios sobre un trabajo) más rápido, a partir de tu rúbrica. La <strong>nota la decidís vos</strong>.</p>
      <pre><code>Pedido (con el trabajo SIN nombre ni datos):
"Esta es mi rúbrica: [pegala].
Este es el trabajo de un estudiante de 2.º año: [pegalo, anonimizado].
Escribí una devolución de 4 líneas, en segunda persona:
1 cosa que está muy bien, 1 cosa para mejorar
y 1 pregunta para que siga pensando.
No pongas nota."</code></pre>
      <table>
        <tr><th>La IA ayuda con</th><th>Decidís vos</th></tr>
        <tr><td>El borrador del comentario</td><td>La nota</td></tr>
        <tr><td>Marcar qué criterios aparecen</td><td>Si de verdad están logrados</td></tr>
        <tr><td>Un tono cordial</td><td>Lo que sabés de ese estudiante y su proceso</td></tr>
      </table>
      <p><strong>Leé siempre el trabajo vos:</strong> la IA puede pasar por alto algo importante o elogiar algo que está mal.</p>
      <p><strong>Contales a tus estudiantes</strong> que usás IA para ayudarte con las devoluciones y que la nota es tuya. La transparencia cuida la confianza.</p>
      <p>Por ejemplo, Laura tenía 120 afiches para corregir. Leyó cada uno, decidió la nota y usó la IA para el borrador de los comentarios. Tardó la mitad, y cada estudiante recibió una pregunta para seguir pensando.</p>` },
    { titulo: "Los detectores no son confiables", video: {"id":"DM5gtA5ypfA","t":"¿Funciona realmente un detector de IA? · CNN en Español (4:37)"}, html: `
      <p class="idea">Los programas que dicen detectar si un texto lo escribió una IA <strong>se equivocan mucho</strong>. Una nota o una sanción no puede basarse en ellos.</p>
      <table>
        <tr><th>Problema</th><th>Qué pasa</th></tr>
        <tr><td>Falsos positivos</td><td>Marcan como "hecho con IA" textos escritos por personas</td></tr>
        <tr><td>Falsos negativos</td><td>Un texto de IA con unos cambios pasa como humano</td></tr>
        <tr><td>Sesgo</td><td>Un estudio de Stanford (2023) encontró que marcaban más seguido a quienes escriben en un idioma que no es el suyo</td></tr>
        <tr><td>Sin pruebas</td><td>Dan un porcentaje, no una prueba</td></tr>
      </table>
      <p>En 2023, la empresa que hace ChatGPT dio de baja su propio detector de textos por su baja precisión.</p>
      <p><strong>Si sospechás,</strong> conversá con el estudiante sobre su trabajo: pedile que te explique cómo lo hizo, qué quiso decir en una parte o cómo llegó a una conclusión. Quien hizo el trabajo suele poder explicarlo.</p>
      <p><strong>Mejor que detectar es diseñar:</strong> el próximo tema es cómo armar evaluaciones donde copiar de una IA no sirva.</p>
      <p>Por ejemplo, un detector marcó como "92 % IA" el trabajo de un estudiante de Laura que lo había escrito en clase delante de ella. Desde ese día no los usa para decidir nada.</p>` },
    { titulo: "Evaluar el proceso", html: `
      <p class="idea">Si la IA puede escribir la respuesta final, conviene evaluar también el <strong>proceso</strong>: cómo llegó el estudiante, qué decidió y qué puede explicar.</p>
      <table>
        <tr><th>Evaluación fácil de copiar</th><th>Evaluación que muestra el proceso</th></tr>
        <tr><td>"Escribí un informe sobre la fotosíntesis" para la casa</td><td>Borradores en clase, con devolución entre uno y otro</td></tr>
        <tr><td>Respuesta única de definición</td><td>Explicar con un caso de su barrio o de su vida</td></tr>
        <tr><td>Solo el producto final</td><td>Producto más una defensa oral corta de 3 minutos</td></tr>
        <tr><td>Preguntas que se responden con una búsqueda</td><td>Datos que juntaron ellos: una observación, una encuesta, un experimento</td></tr>
      </table>
      <p><strong>Declarar el uso de IA:</strong> si permitís usarla, pedí que digan para qué la usaron y qué cambiaron. Usarla bien también se puede evaluar.</p>
      <p><strong>No se trata de vigilar,</strong> sino de que la evaluación muestre aprendizaje real. Una tarea que se resuelve copiando tampoco enseñaba mucho antes de la IA.</p>
      <p>Por ejemplo, Laura cambió el informe sobre ecosistemas por una observación del patio en grupo, con un borrador en clase y una explicación oral de 3 minutos. Nadie pudo resolverlo copiando, y aprendieron más.</p>` },
  ],
  practica: [
    "Usá la IA para el borrador de 5 devoluciones con tu rúbrica (trabajos sin nombre) y anotá cuántas cambiaste antes de entregarlas.",
    "Probá un detector de IA con un texto que escribiste vos y anotá qué porcentaje de \"IA\" te dio.",
    "Tomá una evaluación tuya fácil de copiar y rediseñala para que muestre el proceso. Anotá qué 2 cambios hiciste.",
  ],
  recursos: [
    { t: "INTEF (Ministerio de Educación de España): orientaciones para integrar la IA en la formación docente (PDF)", url: "https://intef.es/wp-content/uploads/2025/06/Orientaciones-para-la-integracion-de-la-IA-en-la-formacion-docente_Actualizacion_2026.pdf" },
    { t: "Ludomag: resumen del marco de competencias en IA para docentes de la UNESCO", url: "https://ludomag.com/es/2024/12/04/la-unesco-publica-el-marco-de-competencias-en-inteligencia-artificial-para-docentes" },
  ],
  quiz: [
    { q: "Usás IA para las devoluciones de un trabajo. ¿Quién decide la nota?", opciones: ["La IA","El estudiante","Vos","Un detector"], correcta: 2, explicacion: "La evaluación es responsabilidad docente. Que la decida la IA tienta por rápido, pero no conoce el proceso del estudiante." },
    { q: "Si vas a pegar un trabajo para que la IA te ayude con la devolución, ¿cómo lo pegás?", opciones: ["Sin nombre ni datos personales","Con nombre y curso","Con una foto del estudiante","Con su legajo"], correcta: 0, explicacion: "Anonimizado, como viste en el módulo de privacidad. Con nombre tienta por orden, pero expone datos." },
    { q: "Si la IA escribió una devolución linda, ¿hace falta leer el trabajo?", opciones: ["No, la IA ya lo leyó","Solo si el estudiante se queja","Solo el primero","Sí: puede pasar por alto algo o elogiar algo que está mal"], correcta: 3, explicacion: "Leerlo es tu parte. \"La IA ya lo leyó\" tienta, pero puede equivocarse." },
    { q: "Si usás IA para las devoluciones, ¿se lo contás a tus estudiantes?", opciones: ["No, que no se enteren","Sí, y les aclarás que la nota es tuya","Solo si preguntan","Solo a las familias"], correcta: 1, explicacion: "La transparencia cuida la confianza. Ocultarlo tienta, pero si se enteran, se rompe la confianza." },
    { q: "Un detector dice que un trabajo es \"92 % IA\". ¿Qué hacés?", opciones: ["Le ponés un 1","Lo sancionás","No lo usás como prueba: conversás con el estudiante sobre su trabajo","Llamás a la familia por plagio"], correcta: 2, explicacion: "Los detectores se equivocan mucho. Sancionar tienta por el número alto, pero puede ser falso." },
    { q: "¿Qué encontró un estudio de Stanford de 2023 sobre los detectores?", opciones: ["Que marcaban más seguido a quienes escriben en un idioma que no es el suyo","Que nunca se equivocan","Que detectan todo","Que solo fallan con poesía"], correcta: 0, explicacion: "Tienen sesgo. \"Nunca se equivocan\" tienta por el porcentaje exacto, pero no es así." },
    { q: "Si sospechás que un trabajo lo hizo una IA, ¿qué es lo más justo?", opciones: ["Acusarlo delante del curso","Pasarlo por 3 detectores","Ignorarlo siempre","Pedirle al estudiante que te explique cómo lo hizo y qué quiso decir"], correcta: 3, explicacion: "Quien lo hizo suele poder explicarlo. Más detectores tientan, pero suman errores, no pruebas." },
    { q: "¿Qué es un falso positivo de un detector?", opciones: ["Detectar bien un texto de IA","Marcar como \"hecho con IA\" un texto escrito por una persona","Un texto de IA que pasa como humano","Un error de ortografía"], correcta: 1, explicacion: "Acusa a quien no usó IA. El texto de IA que pasa tienta como respuesta, pero ese es el falso negativo." },
    { q: "Tu evaluación es \"escribí un informe sobre la fotosíntesis\" para la casa. ¿Qué cambio muestra el proceso?", opciones: ["Pedir el informe más largo","Ponerle fecha más temprana","Borradores en clase con devolución entre uno y otro","Prohibir internet en la casa"], correcta: 2, explicacion: "Ver los borradores muestra cómo avanzó. Más largo tienta, pero la IA también escribe largo." },
    { q: "Querés saber si un estudiante entiende lo que entregó. ¿Qué sumás?", opciones: ["Una defensa oral corta de 3 minutos","Una segunda copia del trabajo","Un detector","Más páginas"], correcta: 0, explicacion: "Explicarlo muestra comprensión. El detector tienta, pero no muestra nada del aprendizaje." },
    { q: "Permitís usar IA en un trabajo. ¿Qué pedís?", opciones: ["Nada","Que la usen para todo sin decir","Que entreguen la conversación entera siempre","Que declaren para qué la usaron y qué cambiaron"], correcta: 3, explicacion: "Declarar el uso enseña a usarla bien. \"Nada\" tienta, pero no aprenden a usarla con criterio." },
    { q: "Una tarea se resuelve copiando una respuesta de IA. ¿Qué te dice?", opciones: ["Que la IA es el problema y nada más","Que probablemente tampoco mostraba mucho aprendizaje antes","Que hay que prohibir las computadoras","Que está perfecta"], correcta: 1, explicacion: "Es una oportunidad para mejorar la tarea. Culpar solo a la IA tienta, pero la tarea ya era fácil de copiar." },
  ],
},
{
  id: "aula",
  icono: "🎓",
  titulo: "La IA con tus estudiantes",
  nivel: "Avanzado",
  objetivos: [
    "Acordar con tu curso cuándo se puede usar IA y cómo se declara",
    "Diseñar actividades donde los estudiantes verifiquen y critiquen respuestas de IA",
    "Enseñar cómo funciona la IA y sus límites, cuidando que nadie quede afuera",
  ],
  lecciones: [
    { titulo: "Un acuerdo de uso", html: `
      <p class="idea">Antes de prohibir o permitir, <strong>acordá con tu curso</strong> cuándo se puede usar IA y cómo se declara. Un sistema claro es el <strong>semáforo</strong>.</p>
      <table>
        <tr><th>Color</th><th>Qué significa</th><th>Ejemplo</th></tr>
        <tr><td>🔴 Rojo</td><td>Sin IA</td><td>Una evaluación en clase, una reflexión personal</td></tr>
        <tr><td>🟡 Amarillo</td><td>Con IA para algo concreto, declarándolo</td><td>Pedir ideas o revisar la ortografía, contando cómo se usó</td></tr>
        <tr><td>🟢 Verde</td><td>Con IA libre, declarándolo</td><td>Explorar un tema para preparar preguntas</td></tr>
      </table>
      <pre><code>Cómo declarar el uso (al final del trabajo):
"Usé IA para: [para qué]
Lo que cambié o verifiqué: [qué]
Lo que hice yo solo: [qué]"</code></pre>
      <p><strong>Armalo con ellos:</strong> si los estudiantes participan del acuerdo, lo entienden y lo respetan más. Explicá por qué cada actividad tiene su color.</p>
      <p><strong>Coordiná con tu escuela:</strong> si la institución tiene una política, el acuerdo de tu curso va dentro de ella.</p>
      <p>Por ejemplo, Laura pegó el semáforo en el aula. Cada consigna dice su color arriba. Desde entonces, sus estudiantes declaran el uso sin que ella lo pida.</p>` },
    { titulo: "Verificar y criticar", video: {"id":"Pka3NixwYmA","t":"La IA en la educación: ¿mejora o perjudica el aprendizaje? · DW Tecnología (5:27)"}, html: `
      <p class="idea">Una de las mejores actividades con IA es pedirles a tus estudiantes que <strong>encuentren sus errores</strong>. Así aprenden el tema y aprenden a no creerle todo.</p>
      <table>
        <tr><th>Actividad</th><th>Cómo es</th></tr>
        <tr><td>Detectives de errores</td><td>Les das una respuesta de IA con errores y la comparan con el libro</td></tr>
        <tr><td>IA contra fuente</td><td>Le hacen una pregunta a la IA y verifican la respuesta en 2 fuentes confiables</td></tr>
        <tr><td>Mejorar la respuesta</td><td>Le piden algo a la IA y después la corrigen y completan ellos</td></tr>
        <tr><td>Preguntas socráticas</td><td>Le piden a la IA que les haga preguntas sobre el tema en vez de darles las respuestas</td></tr>
      </table>
      <pre><code>Pedido para un tutor que pregunta (para estudiantes de 13 años o más):
"Sos un tutor de Ciencias para 2.º año.
No me des las respuestas. Haceme preguntas de a una
para que yo llegue a entender cómo fluye la energía
en un ecosistema. Si me equivoco, dame una pista."</code></pre>
      <p><strong>El objetivo es pensar más, no menos:</strong> si la actividad se resuelve sin pensar, no sirve aunque use IA.</p>
      <p>Por ejemplo, Laura les dio una respuesta de IA sobre la cadena alimentaria con 3 errores escondidos. Los grupos encontraron los 3, y uno encontró un cuarto que Laura no había visto.</p>` },
    { titulo: "Enseñar cómo funciona, sin dejar a nadie afuera", html: `
      <p class="idea">Usar IA en clase es una oportunidad para enseñar <strong>cómo funciona</strong>, cuáles son sus límites y cómo cuidar los datos. Y para que la diferencia de acceso no se vuelva desigualdad.</p>
      <table>
        <tr><th>Qué enseñar</th><th>Idea para la clase</th></tr>
        <tr><td>Predice palabras, no sabe</td><td>Completar entre todos "Había una vez..." y ver cómo cada uno elige la palabra más probable</td></tr>
        <tr><td>Puede inventar</td><td>Buscar juntos un dato que dio la IA en una fuente confiable</td></tr>
        <tr><td>Tiene sesgos</td><td>Pedirle "un científico" y ver qué imagen o qué nombres propone</td></tr>
        <tr><td>Los datos personales se cuidan</td><td>Practicar cómo preguntar sin dar nombre, escuela ni dirección</td></tr>
      </table>
      <p><strong>No todos tienen acceso igual:</strong> algunos estudiantes no tienen celular propio, internet o una cuenta. Si una tarea necesita IA, que se haga en la escuela o con una alternativa sin IA.</p>
      <p><strong>Con los más chicos,</strong> la IA la usa el docente proyectada, y en este sitio está el curso "IA para chicos", con misiones para entender cómo funciona sin crear cuentas.</p>
      <p>Por ejemplo, 4 estudiantes de Laura no tienen celular. Las actividades con IA las hace en clase, en grupos, con la computadora de la escuela.</p>` },
  ],
  practica: [
    "Armá un semáforo de uso de IA para tu curso con un ejemplo de actividad en cada color y anotá qué color tiene tu próxima consigna.",
    "Prepará una actividad de \"detectives de errores\" con una respuesta de IA y anotá cuántos errores escondiste y cuántos encontraron.",
    "Averiguá cuántos estudiantes de un curso tienen acceso a internet en su casa y anotá qué alternativa vas a ofrecer.",
  ],
  recursos: [
    { t: "Noticias ONU: la UNESCO pide regular la IA generativa en las escuelas (2023)", url: "https://news.un.org/es/story/2023/09/1523892" },
    { t: "Ludomag: resumen del marco de competencias en IA para docentes de la UNESCO", url: "https://ludomag.com/es/2024/12/04/la-unesco-publica-el-marco-de-competencias-en-inteligencia-artificial-para-docentes" },
    { t: "Educ.ar: recursos educativos del Ministerio de Educación de Argentina", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Querés poner reglas claras de uso de IA en tu curso. ¿Qué armás?", opciones: ["Una prohibición total sin explicar","Nada, que cada uno haga lo que quiera","Un acuerdo tipo semáforo, armado con los estudiantes","Una lista de detectores"], correcta: 2, explicacion: "Un acuerdo claro y compartido se respeta más. La prohibición sin explicar tienta por simple, pero no enseña a usarla." },
    { q: "Una consigna es una reflexión personal sobre qué aprendiste. ¿Qué color del semáforo le ponés?", opciones: ["Rojo: sin IA","Verde: IA libre","Amarillo siempre","Ninguno"], correcta: 0, explicacion: "La reflexión personal es tuya. Verde tienta por moderno, pero la IA no sabe qué aprendiste vos." },
    { q: "En amarillo, un estudiante usó IA para revisar la ortografía. ¿Qué tiene que hacer?", opciones: ["Nada","Ocultarlo","Entregar en rojo","Declararlo al final del trabajo"], correcta: 3, explicacion: "Amarillo es con IA y declarando. \"Nada\" tienta porque es poco, pero el acuerdo pide declararlo." },
    { q: "Tu escuela tiene una política sobre IA. ¿Cómo encaja tu acuerdo de curso?", opciones: ["Por encima de la política","Dentro de la política de la escuela","Lo ignorás","La contradice"], correcta: 1, explicacion: "El acuerdo de aula va dentro de lo institucional. Ignorarla tienta si no te convence, pero genera problemas." },
    { q: "¿Qué aprenden tus estudiantes buscando errores en una respuesta de IA?", opciones: ["A copiar mejor","Que la IA nunca sirve","El tema y a no creerle todo a la IA","A usar detectores"], correcta: 2, explicacion: "Verificar es pensar. \"Nunca sirve\" tienta como conclusión, pero la idea es usarla con criterio." },
    { q: "Querés que la IA ayude a tus estudiantes sin darles las respuestas. ¿Qué le piden?", opciones: ["Que les haga preguntas de a una y dé pistas","Que resuelva todo","Que escriba el trabajo","Que les diga la nota"], correcta: 0, explicacion: "Un tutor que pregunta hace pensar. Que resuelva todo tienta por rápido, pero no aprenden." },
    { q: "Si una actividad con IA se resuelve sin pensar, ¿sirve?", opciones: ["Sí, porque usa IA","Sí, si es rápida","Sí, si es divertida","No: el objetivo es pensar más, no menos"], correcta: 3, explicacion: "La tecnología no hace buena la actividad. \"Usa IA\" tienta por moderno, pero sin pensar no se aprende." },
    { q: "Querés mostrar que la IA predice palabras. ¿Qué actividad hacés?", opciones: ["Leer un manual técnico","Completar \"Había una vez...\" eligiendo la palabra más probable","Prohibir la palabra IA","Ver una película"], correcta: 1, explicacion: "Lo viven con su propia experiencia. El manual tienta por completo, pero es abstracto." },
    { q: "Le piden a la IA \"un científico\" y siempre propone varones. ¿Qué enseña eso?", opciones: ["Que solo hay científicos varones","Que está rota","Que tiene sesgos de los textos con que aprendió","Nada"], correcta: 2, explicacion: "Es un sesgo, no la realidad. \"Solo hay varones\" tienta si se cree todo lo que dice." },
    { q: "Algunos estudiantes no tienen internet en su casa. ¿Cómo planteás una tarea con IA?", opciones: ["En la escuela, o con una alternativa sin IA","Igual para la casa, el que no puede que no la haga","Les bajás la nota","Solo para los que tienen"], correcta: 0, explicacion: "La diferencia de acceso no puede ser desigualdad. \"El que no puede, no la hace\" tienta, pero los deja afuera." },
    { q: "Tus estudiantes tienen 10 años. ¿Cómo usan la IA en clase?", opciones: ["Cada uno con su cuenta","Con la cuenta de un adulto sin avisar","Desde la casa, solos","La usás vos proyectada, sin cuentas para ellos"], correcta: 3, explicacion: "Se respeta la edad mínima. Cuentas propias tientan por autonomía, pero no corresponde a esa edad." },
    { q: "Si querés que entiendan cómo cuidar sus datos con IA, ¿qué practican?", opciones: ["Dar todos sus datos para mejores respuestas","Preguntar sin dar nombre, escuela ni dirección","Usar la cuenta de otro","Nada"], correcta: 1, explicacion: "Es lo mismo que hacés vos al anonimizar. Dar datos tienta por \"mejores respuestas\", pero los expone." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: una clase con IA",
  nivel: "Avanzado",
  objetivos: [
    "Planificar una clase real que use IA con un propósito pedagógico claro",
    "Revisarla con una rúbrica de calidad, ética y privacidad",
    "Reflexionar después de darla y compartir lo aprendido con tu equipo",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es <strong>planificar y dar una clase</strong> donde la IA tenga un propósito claro: que tus estudiantes aprendan más, no que hagan menos.</p>
      <table>
        <tr><th>Parte</th><th>Qué lleva</th><th>Módulo</th></tr>
        <tr><td>Objetivo</td><td>Qué van a aprender, escrito como algo que se puede observar</td><td>Planificar</td></tr>
        <tr><td>Materiales</td><td>Preparados con IA y revisados por vos</td><td>Pedir, Planificar</td></tr>
        <tr><td>Variedad</td><td>Al menos 2 niveles o 2 formas de mostrar lo aprendido</td><td>Adaptar</td></tr>
        <tr><td>Actividad</td><td>Los estudiantes verifican o critican algo de la IA</td><td>Aula</td></tr>
        <tr><td>Semáforo</td><td>El color de cada consigna y cómo se declara el uso</td><td>Aula</td></tr>
        <tr><td>Evaluación</td><td>Que muestre el proceso, con rúbrica</td><td>Evaluar</td></tr>
        <tr><td>Cuidados</td><td>Sin datos de estudiantes, edad mínima, alternativa sin acceso</td><td>Privacidad</td></tr>
      </table>
      <pre><code>Ejemplo (Laura, 2.º año, energía en los ecosistemas):
Objetivo: explicar con flechas cómo pasa la energía
          en un ecosistema del Paraná.
Material: texto en 3 niveles (revisado).
Actividad: detectives de errores sobre una respuesta de IA.
Semáforo: amarillo, declarando.
Evaluación: afiche en grupo + explicación oral de 3 minutos.</code></pre>
      <p>Por ejemplo, la clase de Laura llevó 45 minutos de preparación en vez de 2 horas, y la parte de detectives fue la que más recordaron sus estudiantes.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una tabla de criterios y niveles para saber si un trabajo está listo. Revisá tu clase con esta antes de darla.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Propósito</td><td>La IA ayuda a aprender algo concreto</td><td>Ayuda, pero sin objetivo claro</td><td>Se usa "porque sí"</td></tr>
        <tr><td>Revisión</td><td>Todo lo producido con IA fue revisado y corregido</td><td>Revisado a medias</td><td>Sin revisar</td></tr>
        <tr><td>Pensamiento</td><td>Los estudiantes verifican, critican o mejoran</td><td>Solo leen lo que dio la IA</td><td>Copian</td></tr>
        <tr><td>Inclusión</td><td>Niveles o formatos distintos y alternativa sin acceso</td><td>Uno de los dos</td><td>Ninguno</td></tr>
        <tr><td>Evaluación</td><td>Muestra el proceso, con rúbrica</td><td>Solo producto final</td><td>Sin criterios</td></tr>
        <tr><td>Privacidad y edad</td><td>Sin datos de estudiantes y respetando la edad mínima</td><td>—</td><td>Carga datos o no respeta la edad</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡lista para dar!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a planificar
Regla: si "Privacidad y edad" tiene 0, la clase no se da,
aunque el total sea alto.</code></pre>
      <p>Por ejemplo, la primera versión de Laura sacó 9: no había alternativa para los estudiantes sin celular. Pasó la actividad a grupos con la computadora de la escuela y llegó a 11.</p>` },
    { titulo: "Después de la clase", html: `
      <p class="idea">Después de dar la clase, <strong>reflexioná</strong>: qué funcionó, qué no y qué cambiarías. Y compartilo con tu equipo: así aprende toda la escuela.</p>
      <pre><code>Preguntas para después:
1. ¿Aprendieron lo que me propuse? ¿Cómo lo sé?
2. ¿La IA ayudó a pensar más o a pensar menos?
3. ¿Qué error de la IA apareció y cómo lo resolvimos?
4. ¿Alguien quedó afuera? ¿Por qué?
5. ¿Cuánto tiempo me ahorró preparar y cuánto me llevó revisar?</code></pre>
      <table>
        <tr><th>Seguir aprendiendo</th><th>Dónde</th></tr>
        <tr><td>Recursos para el aula</td><td>Educ.ar, del Ministerio de Educación</td></tr>
        <tr><td>Marco de competencias docentes</td><td>UNESCO: tiene 5 dimensiones y 3 niveles (adquirir, profundizar y crear)</td></tr>
        <tr><td>Orientaciones para formación docente</td><td>INTEF, del Ministerio de Educación de España</td></tr>
        <tr><td>Escribir mejores pedidos</td><td>El curso "Prompts desde cero" de este sitio</td></tr>
      </table>
      <p><strong>El marco de la UNESCO</strong> ordena lo que un docente puede aprender sobre IA en tres niveles: <strong>adquirir</strong> lo básico, <strong>profundizar</strong> integrándola en tus clases y <strong>crear</strong> propuestas nuevas. Con este curso, estás pasando del primero al segundo.</p>
      <p>Por ejemplo, Laura compartió su clase y sus plantillas en una reunión de departamento. Dos colegas la adaptaron para Geografía y Lengua.</p>` },
  ],
  practica: [
    "Planificá una clase con IA con las 7 partes del encargo y anotá qué color del semáforo tiene cada consigna.",
    "Revisala con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Después de darla, respondé las 5 preguntas de reflexión y anotá cuánto tiempo te ahorró preparar y cuánto te llevó revisar.",
  ],
  recursos: [
    { t: "Ludomag: resumen del marco de competencias en IA para docentes de la UNESCO", url: "https://ludomag.com/es/2024/12/04/la-unesco-publica-el-marco-de-competencias-en-inteligencia-artificial-para-docentes" },
    { t: "Educ.ar: recursos educativos del Ministerio de Educación de Argentina", url: "https://www.educ.ar/recursos" },
    { t: "INTEF (Ministerio de Educación de España): orientaciones para integrar la IA en la formación docente (PDF)", url: "https://intef.es/wp-content/uploads/2025/06/Orientaciones-para-la-integracion-de-la-IA-en-la-formacion-docente_Actualizacion_2026.pdf" },
  ],
  quiz: [
    { q: "¿Cuál es el propósito de usar IA en tu clase final?", opciones: ["Usar la tecnología más nueva","Que la clase dure menos","Que tus estudiantes aprendan más, no que hagan menos","Que la IA dé la clase"], correcta: 2, explicacion: "La IA es un medio, no el fin. \"La más nueva\" tienta, pero sin propósito no ayuda." },
    { q: "Si escribís el objetivo de tu clase, ¿cómo conviene escribirlo?", opciones: ["Como algo que se puede observar: \"explicar con flechas cómo pasa la energía\"","\"Que entiendan el tema\"","\"Que les guste la clase\"","\"Usar IA\""], correcta: 0, explicacion: "Lo observable se puede evaluar. \"Que entiendan\" tienta por amplio, pero no sabés cómo comprobarlo." },
    { q: "Tus materiales los preparó la IA. ¿Qué falta antes de usarlos?", opciones: ["Nada","Imprimirlos en color","Pasarlos por un detector","Revisarlos y corregirlos vos"], correcta: 3, explicacion: "Todo lo de IA es borrador. El detector tienta, pero no revisa si el contenido es correcto." },
    { q: "En tu clase, los estudiantes solo leen lo que dio la IA. ¿Cuánto sacás en Pensamiento?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 1, explicacion: "Leer es menos que verificar o criticar. 2 tienta porque usan la IA, pero no la cuestionan." },
    { q: "Tu clase sacó 11, pero cargaste nombres de estudiantes en un chatbot. ¿Se da?", opciones: ["Sí, 11 es muy buen puntaje","Sí, si nadie se entera","No: si Privacidad y edad tiene 0, no se da","Sí, si borrás la conversación después"], correcta: 2, explicacion: "La regla de la rúbrica lo dice. El puntaje alto tienta, pero los datos ya se cargaron." },
    { q: "Tu clase no tiene alternativa para quienes no tienen celular. ¿Cómo la mejorás?", opciones: ["Pasando la actividad a grupos con la computadora de la escuela","Diciéndoles que se consigan uno","Bajándoles la nota","Dejándola igual"], correcta: 0, explicacion: "Así nadie queda afuera. \"Que se consigan uno\" tienta por simple, pero no depende de ellos." },
    { q: "Tu evaluación es solo el producto final. ¿Cuánto sacás en Evaluación?", opciones: ["2 puntos","0 puntos","4 puntos","1 punto"], correcta: 3, explicacion: "Para 2 tiene que mostrar el proceso. 2 tienta si el producto es bueno, pero falta el proceso." },
    { q: "Después de dar la clase, ¿qué te preguntás primero?", opciones: ["¿Usé suficiente IA?","¿Aprendieron lo que me propuse y cómo lo sé?","¿Fue moderna?","¿Les gustó la tecnología?"], correcta: 1, explicacion: "El aprendizaje es lo que importa. \"¿Usé suficiente IA?\" tienta, pero no es el objetivo." },
    { q: "Preparar con IA te llevó 20 minutos y revisar 40. ¿Qué te dice?", opciones: ["Que la IA no sirve","Que no hace falta revisar","Que hay que contar también el tiempo de revisión al decidir si conviene","Nada"], correcta: 2, explicacion: "El ahorro real incluye revisar. \"No hace falta revisar\" tienta para ahorrar más, pero es riesgoso." },
    { q: "Tu clase funcionó muy bien. ¿Qué hacés?", opciones: ["La compartís con tu equipo docente","La guardás para vos","La vendés","La borrás"], correcta: 0, explicacion: "Compartir hace aprender a toda la escuela. Guardarla tienta, pero tus colegas pierden una buena idea." },
    { q: "En el marco de la UNESCO, ¿cuáles son los 3 niveles para docentes?", opciones: ["Básico, medio y experto en programación","Usar, prohibir y vigilar","Leer, copiar y pegar","Adquirir, profundizar y crear"], correcta: 3, explicacion: "Son adquirir, profundizar y crear. \"Programación\" tienta, pero el marco no exige programar." },
    { q: "Querés seguir aprendiendo a escribir pedidos a la IA. ¿Qué recurso usás?", opciones: ["Un detector de IA","El curso \"Prompts desde cero\" de este sitio","Una app que promete escribir las clases sola","Ninguno"], correcta: 1, explicacion: "Ese curso profundiza lo del módulo 3. La app \"que escribe sola\" tienta, pero no reemplaza tu criterio." },
  ],
},
];
