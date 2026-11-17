// Temario del curso "Aprender a aprender". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js estudiar-mejor y node tools/metodologia.js estudiar-mejor
window.TEMARIO = [
{
  id: "mitos",
  icono: "🧠",
  titulo: "Cómo aprende la memoria",
  nivel: "Básico",
  objetivos: [
    "Distinguir las técnicas de estudio que funcionan de las que solo parecen funcionar",
    "Explicar por qué olvidamos y qué frena el olvido",
    "Reconocer el mito de los estilos de aprendizaje",
  ],
  lecciones: [
    { titulo: "Lo que parece funcionar y lo que funciona", html: `
      <p class="idea">Releer y subrayar <strong>se sienten</strong> útiles, pero sirven poco. Lo que más ayuda a recordar es <strong>sacar la información de la cabeza</strong>, con preguntas, y <strong>repartir</strong> el estudio en varios días.</p>
      <p>En 2013, un grupo de investigadores encabezado por <strong>John Dunlosky</strong> revisó cientos de estudios sobre 10 técnicas de estudio y las ordenó según cuánto ayudan:</p>
      <table>
        <tr><th>Utilidad</th><th>Técnicas</th></tr>
        <tr><td>Alta</td><td>Practicar con preguntas (autoevaluarse) · Repartir el estudio en el tiempo</td></tr>
        <tr><td>Media</td><td>Intercalar temas · Preguntarse por qué · Explicarse a uno mismo</td></tr>
        <tr><td>Baja</td><td>Releer · Subrayar · Resumir · Trucos de palabras clave · Imaginar el texto</td></tr>
      </table>
      <p><strong>¿Por qué releer engaña?</strong> Al releer, el texto te resulta conocido y eso se siente como saber. Pero reconocer algo no es lo mismo que poder recordarlo sin mirar, que es lo que pide un examen o la vida.</p>
      <p>Esta trampa tiene nombre: la <strong>ilusión de saber</strong>. Las técnicas que más sirven cuestan más, y por eso parecen peores mientras las hacés.</p>
      <p>En todo el curso acompañamos a <strong>Lucía</strong>, que tiene 34 años y volvió a terminar el secundario a la noche. Hoy estudia como en la escuela: relee los apuntes y subraya con fibra. Pasa horas y se olvida casi todo.</p>
      <p>Por ejemplo, Lucía releyó 3 veces el tema de la Revolución de Mayo y se sentía lista. Cuando se tapó los apuntes e intentó contarlo, recordó 2 cosas de 8.</p>` },
    { titulo: "Por qué olvidamos", video: {"id":"hrGbwutALpA","t":"La curva del olvido: tips para planificar el estudio · Academia Play (2:31)"}, html: `
      <p class="idea">Olvidar es normal: lo que no se usa se borra rápido. Cada vez que <strong>recordás</strong> algo, el olvido se frena y el recuerdo dura más.</p>
      <p>A fines del siglo XIX, el psicólogo <strong>Hermann Ebbinghaus</strong> midió cuánto olvidaba él mismo. Dibujó la <strong>curva del olvido</strong>: se pierde mucho en los primeros días y después se olvida más despacio.</p>
      <pre><code>Cuánto recordás de algo que estudiaste una sola vez:

100% ■
     ■■
     ■ ■■
     ■   ■■■
     ■      ■■■■■■
     ■             ■■■■■■■■■■
     └──────────────────────────
      día 0   1    2    ...    7

Con un repaso en el día 1 y otro en el día 3,
la curva cae cada vez más despacio.</code></pre>
      <p><strong>Dos memorias:</strong> la <strong>memoria de trabajo</strong> es lo que tenés en la cabeza en este momento: entra poco y se va rápido, como un número de teléfono que repetís para no olvidarlo. La <strong>memoria de largo plazo</strong> guarda lo aprendido por años. Estudiar es pasar cosas de una a la otra.</p>
      <p><strong>Dormir</strong> ayuda: mientras dormís, el cerebro ordena lo que aprendiste en el día. Estudiar toda la noche antes del examen te deja sin esa ayuda.</p>
      <p>Por ejemplo, Lucía estudió vocabulario de inglés un lunes. El martes recordaba la mitad. Cuando empezó a repasar el martes y el jueves, el viernes de la otra semana todavía recordaba casi todo.</p>` },
    { titulo: "El mito de los estilos de aprendizaje", video: {"id":"gcEiwX7JpNs","t":"El mayor mito sobre la educación · Veritasium en español (13:10)"}, html: `
      <p class="idea">Mucha gente cree que es "visual" o "auditiva" y que aprende mejor si le enseñan así. <strong>Las investigaciones no encontraron que eso mejore el aprendizaje.</strong></p>
      <p>Este mito se llama <strong>estilos de aprendizaje</strong>. Es cierto que cada uno tiene gustos: a algunos les gusta más escuchar y a otros leer. Pero cuando se probó enseñar a cada persona en "su estilo", no aprendieron más que los demás.</p>
      <table>
        <tr><th>Lo que dice el mito</th><th>Lo que muestra la evidencia</th></tr>
        <tr><td>"Soy visual: solo aprendo con imágenes"</td><td>Imágenes más palabras ayudan a casi todas las personas</td></tr>
        <tr><td>"Soy auditiva: tengo que escuchar"</td><td>Lo que decide es cómo pensás el tema, no por dónde entra</td></tr>
        <tr><td>"No es mi estilo, por eso no aprendo"</td><td>Lo que más ayuda es lo mismo para todos: preguntas y repasos</td></tr>
      </table>
      <p><strong>Lo que sí sirve para todos:</strong> combinar <strong>palabras con imágenes</strong>, como un esquema o un dibujo junto a una explicación. Eso se llama <strong>codificación dual</strong> y lo vas a ver en el módulo de entender.</p>
      <p><strong>Por qué importa:</strong> el mito puede hacer que alguien abandone una materia pensando "no es para mí" cuando el problema era el método.</p>
      <p>Por ejemplo, Lucía decía "soy visual, la historia no me entra". Empezó a hacer una línea de tiempo dibujada y a contársela en voz alta sin mirar: la línea ayudó, pero lo que más la hizo recordar fue contarla de memoria.</p>` },
  ],
  practica: [
    "Releé una página de un tema que estés estudiando. Tapala y escribí todo lo que recuerdes. Anotá cuántas ideas recordaste de las que tenía.",
    "Estudiá 10 palabras nuevas (de otro idioma o de una materia). Anotá cuántas recordás a la hora, al día siguiente y a los 3 días.",
    "Anotá qué técnicas de estudio usás hoy y marcá al lado si son de utilidad alta, media o baja según la tabla.",
  ],
  recursos: [
    { t: "Dunlosky: \"Fortalecer la caja de herramientas del estudiante\", qué técnicas funcionan (en inglés)", url: "https://www.aft.org/ae/fall2013/dunlosky" },
    { t: "The Learning Scientists: materiales gratis sobre las 6 estrategias para aprender (en inglés)", url: "https://www.learningscientists.org/downloadable-materials" },
  ],
  quiz: [
    { q: "Si releés un tema 3 veces y te sentís lista, ¿qué conviene hacer antes del examen?", opciones: ["Releerlo una cuarta vez","Subrayarlo con otro color","Taparte los apuntes y probar si podés contarlo sin mirar","Dormir menos para estudiar más"], correcta: 2, explicacion: "Recordar sin mirar muestra si lo sabés. Releer una vez más tienta porque se siente bien, pero es reconocer, no recordar." },
    { q: "Según la revisión de Dunlosky, ¿qué técnica tiene utilidad alta?", opciones: ["Practicar con preguntas","Subrayar","Releer","Resumir"], correcta: 0, explicacion: "Autoevaluarse es de las que más sirven. Subrayar tienta porque es lo más común, pero rinde poco." },
    { q: "Si subrayás con fibra todo el apunte, ¿qué pasa?", opciones: ["Aprendés el doble","Es la mejor técnica","Memorizás todo lo amarillo","Se siente útil, pero ayuda poco a recordar"], correcta: 3, explicacion: "Subrayar es de utilidad baja. \"Aprendés el doble\" tienta porque queda lindo, pero no hace recordar." },
    { q: "¿Qué es la ilusión de saber?", opciones: ["Saber de verdad","Sentir que sabés algo porque te resulta conocido, aunque no podés recordarlo solo","Olvidarse todo","Estudiar de noche"], correcta: 1, explicacion: "Lo conocido se confunde con lo aprendido. \"Saber de verdad\" tienta, pero la ilusión es justo lo contrario." },
    { q: "Si estudiaste algo una vez y no lo repasás, ¿cuándo olvidás más?", opciones: ["Al año","Nunca, si lo entendiste","En los primeros días","Justo antes del examen"], correcta: 2, explicacion: "La curva del olvido cae rápido al principio. \"Nunca, si lo entendiste\" tienta, pero entender no alcanza para recordar." },
    { q: "Querés frenar el olvido de lo que estudiaste el lunes. ¿Qué hacés?", opciones: ["Lo recordás de nuevo el martes y el jueves","No lo mirás hasta el examen","Lo copiás en limpio","Lo estudiás 8 horas seguidas el lunes"], correcta: 0, explicacion: "Cada vez que recordás, el olvido se frena. 8 horas seguidas tientan por intensas, pero se olvida igual." },
    { q: "Si repetís un número de teléfono para no olvidarlo, ¿qué memoria estás usando?", opciones: ["La memoria de largo plazo","Ninguna","La memoria del celular","La memoria de trabajo"], correcta: 3, explicacion: "La de trabajo guarda poco y por poco tiempo. La de largo plazo tienta, pero ahí se guarda lo aprendido por años." },
    { q: "Mañana tenés examen. ¿Conviene estudiar toda la noche?", opciones: ["Sí, es lo más efectivo","No: dormir ayuda al cerebro a guardar lo aprendido","Sí, con mucho café","Sí, si releés todo"], correcta: 1, explicacion: "Sin dormir perdés esa ayuda y llegás cansada. Toda la noche tienta por \"aprovechar\", pero rinde menos." },
    { q: "Una amiga dice \"soy auditiva, por eso no aprendo leyendo\". ¿Qué muestran las investigaciones?", opciones: ["Que tiene razón siempre","Que hay 10 estilos distintos","Enseñar en el \"estilo\" de cada uno no mejora el aprendizaje","Que hay que dejar de leer"], correcta: 2, explicacion: "Es un mito muy difundido. Darle la razón tienta por respeto, pero puede hacerla abandonar sin necesidad." },
    { q: "¿Qué ayuda a casi todas las personas a entender, según la evidencia?", opciones: ["Combinar palabras con imágenes, como un esquema con explicación","Solo imágenes para los \"visuales\"","Solo audios para los \"auditivos\"","Leer en silencio absoluto siempre"], correcta: 0, explicacion: "Palabras más imágenes es la codificación dual. Separar por estilos tienta, pero no mejora." },
    { q: "Si hacés una línea de tiempo y la contás sin mirar, ¿qué te ayuda más a recordar?", opciones: ["Los colores de la línea","Que sos \"visual\"","El tamaño de la hoja","Contarla de memoria"], correcta: 3, explicacion: "Recordar sin mirar es lo que más fija. Ser \"visual\" tienta como explicación, pero lo que funcionó fue recuperar." },
    { q: "Si las técnicas que más sirven cuestan más, ¿qué te dice que una sesión te cueste?", opciones: ["Que estás haciendo todo mal","Que probablemente estás aprendiendo","Que no es para vos","Que tenés que volver a releer"], correcta: 1, explicacion: "El esfuerzo es parte de aprender. \"No es para vos\" tienta cuando cuesta, pero es la señal contraria." },
  ],
},
{
  id: "recuperar",
  icono: "🔁",
  titulo: "Practicar sacando de la memoria",
  nivel: "Básico",
  objetivos: [
    "Hacer práctica de recuperación con preguntas, tarjetas y la hoja en blanco",
    "Armar tarjetas de estudio que hagan recordar, no reconocer",
    "Usar los errores para saber qué repasar",
  ],
  lecciones: [
    { titulo: "Qué es la práctica de recuperación", video: {"id":"YXI2a7MwuTo","t":"La práctica de recuperación produce más aprendizaje · Alex Duve (14:03)"}, html: `
      <p class="idea">La <strong>práctica de recuperación</strong> es intentar recordar algo <strong>sin mirar</strong>. Cada vez que lo sacás de la memoria, el recuerdo se hace más fuerte.</p>
      <p>Funciona aunque te equivoques: el esfuerzo de buscar la respuesta es lo que ayuda. Y si después controlás, aprendés también de los errores.</p>
      <table>
        <tr><th>Forma</th><th>Cómo se hace</th></tr>
        <tr><td>Hoja en blanco</td><td>Cerrá todo y escribí lo que recuerdes del tema. Después compará con el apunte.</td></tr>
        <tr><td>Preguntas propias</td><td>Al leer, escribí preguntas. Otro día, contestalas sin mirar.</td></tr>
        <tr><td>Tarjetas</td><td>Pregunta de un lado, respuesta del otro.</td></tr>
        <tr><td>Explicar en voz alta</td><td>Contale el tema a alguien, o a vos, sin leer.</td></tr>
        <tr><td>Ejercicios y exámenes viejos</td><td>Resolverlos como si fuera el examen.</td></tr>
      </table>
      <p><strong>Recordar le gana a reconocer:</strong> escribir la respuesta sirve más que elegirla entre opciones, porque te obliga a buscarla.</p>
      <p><strong>Siempre con control:</strong> después de recordar, mirá la respuesta correcta. Si no, podés fijar un error.</p>
      <p>Esto es lo mismo que hacen los cuestionarios de este sitio: por eso cada módulo tiene preguntas y repaso.</p>
      <p>Por ejemplo, Lucía cambió una hora de releer por 40 minutos de releer y 20 de hoja en blanco. En la prueba de historia pasó de recordar 2 ideas de 8 a recordar 6.</p>` },
    { titulo: "Tarjetas que funcionan", html: `
      <p class="idea">Una <strong>tarjeta de estudio</strong> tiene una pregunta de un lado y la respuesta del otro. Funciona si te obliga a <strong>pensar la respuesta antes de darla vuelta</strong>.</p>
      <table>
        <tr><th>Tarjeta floja</th><th>Tarjeta que funciona</th></tr>
        <tr><td>Frente: "Revolución de Mayo"<br>Dorso: un párrafo entero</td><td>Frente: "¿En qué año fue la Revolución de Mayo y qué se formó?"<br>Dorso: "1810. La Primera Junta."</td></tr>
        <tr><td>Muchas ideas en una</td><td>Una idea por tarjeta</td></tr>
        <tr><td>Copiada del libro</td><td>Escrita con tus palabras</td></tr>
      </table>
      <pre><code>Cómo usarlas:
1. Leé el frente y DECÍ o ESCRIBÍ la respuesta.
2. Recién ahí, dala vuelta.
3. Si acertaste → pila "sé".
   Si no → pila "repasar", y vuelve al final del mazo.
4. Seguí hasta que todas pasen a "sé".
5. Otro día, mezclá todas y empezá de nuevo.</code></pre>
      <p><strong>La trampa:</strong> mirar el dorso enseguida "porque total la sabía". Si no la dijiste antes, no sabés si la sabías.</p>
      <p>Hay apps gratis de tarjetas, como Anki, que te muestran cada tarjeta justo cuando estás por olvidarla. Pero alcanza con papel.</p>
      <p>Por ejemplo, Lucía hizo 30 tarjetas de inglés. El primer día pasó 12 a "sé"; al tercer día, 26.</p>` },
    { titulo: "Los errores te dicen qué repasar", html: `
      <p class="idea">Cuando te autoevaluás, los <strong>errores</strong> son la información más valiosa: te dicen exactamente qué te falta. Así no perdés tiempo repasando lo que ya sabés.</p>
      <pre><code>Después de una hoja en blanco o unas tarjetas:
1. Marcá lo que recordaste bien ✓ y lo que no ✗.
2. Mirá los ✗: ¿qué tienen en común?
3. Volvé al apunte SOLO para los ✗.
4. Mañana, probá de nuevo esos primero.</code></pre>
      <table>
        <tr><th>Tipo de error</th><th>Qué hacés</th></tr>
        <tr><td>No me acordaba nada</td><td>Repasar el tema y probar otra vez mañana</td></tr>
        <tr><td>Me acordaba a medias</td><td>Hacer una tarjeta con esa parte</td></tr>
        <tr><td>Lo confundí con otra cosa</td><td>Una tarjeta que compare las dos: "¿en qué se diferencia A de B?"</td></tr>
      </table>
      <p><strong>Equivocarse estudiando no es fracasar:</strong> es mucho mejor descubrir el error en tu casa que en el examen. Por eso conviene practicar con preguntas <strong>antes</strong> de sentirte lista.</p>
      <p>Por ejemplo, en sus tarjetas de historia Lucía se equivocaba siempre entre 1810 y 1816. Hizo una tarjeta que decía "¿Qué pasó en 1810 y qué en 1816?" y dejó de confundirlas.</p>` },
  ],
  practica: [
    "Elegí un tema, hacé una hoja en blanco de 10 minutos y anotá cuántas ideas recordaste antes y después de comparar con el apunte.",
    "Hacé 15 tarjetas de una idea cada una y anotá cuántas pasaron a \"sé\" el primer día y cuántas 2 días después.",
    "Después de practicar, anotá tus 3 errores más comunes y qué tarjeta hiciste para cada uno.",
  ],
  recursos: [
    { t: "Retrieval Practice: guías sobre la práctica de recuperación (en inglés)", url: "https://www.retrievalpractice.org/" },
    { t: "Dunlosky: \"Fortalecer la caja de herramientas del estudiante\", qué técnicas funcionan (en inglés)", url: "https://www.aft.org/ae/fall2013/dunlosky" },
  ],
  quiz: [
    { q: "Si querés practicar recuperación, ¿qué hacés?", opciones: ["Releés en voz alta","Copiás el apunte en limpio","Intentás recordar sin mirar y después controlás","Mirás un video del tema"], correcta: 2, explicacion: "Recuperar es sacar de la memoria. Copiar en limpio tienta porque se trabaja mucho, pero no hace recordar." },
    { q: "Si intentás recordar y te equivocás, ¿sirvió de algo?", opciones: ["Sí: el esfuerzo ayuda, y controlando aprendés del error","No, fue tiempo perdido","Solo si acertás","Solo si es el examen"], correcta: 0, explicacion: "Buscar la respuesta fortalece la memoria. \"Tiempo perdido\" tienta, pero equivocarse estudiando ayuda." },
    { q: "¿Qué ayuda más a recordar?", opciones: ["Elegirla entre opciones","Leerla","Subrayarla","Escribir la respuesta"], correcta: 3, explicacion: "Escribir obliga a buscarla. Elegir tienta por fácil, pero te permite solo reconocer." },
    { q: "Terminaste una hoja en blanco. ¿Qué hacés después?", opciones: ["La tirás sin mirar","Comparás con el apunte para controlar","La guardás como resumen sin revisar","Te vas a dormir"], correcta: 1, explicacion: "Sin controlar podés fijar errores. Guardarla tienta, pero puede tener cosas mal." },
    { q: "Tu tarjeta dice \"Revolución de Mayo\" y el dorso tiene un párrafo. ¿Qué mejorás?", opciones: ["Agregar más párrafos","Hacerla más colorida","Una pregunta concreta y una respuesta corta, una idea por tarjeta","Dejarla así"], correcta: 2, explicacion: "Una pregunta concreta obliga a recordar. Colores tientan, pero no cambian lo que pensás." },
    { q: "Usás tarjetas y das vuelta enseguida porque \"total la sabías\". ¿Qué pasa?", opciones: ["No sabés si de verdad la sabías: primero hay que decirla","Aprendés más rápido","Está perfecto","Ahorrás tiempo y recordás igual"], correcta: 0, explicacion: "Sin decirla antes, solo reconocés. Ahorrar tiempo tienta, pero se pierde el ejercicio." },
    { q: "Te equivocaste en una tarjeta. ¿Dónde la ponés?", opciones: ["En la pila \"sé\"","La tirás","La escondés","Al final del mazo, para volver a probarla"], correcta: 3, explicacion: "Vuelve hasta que la sepas. Tirarla tienta para no frustrarte, pero es la que más necesitás." },
    { q: "Tu tarjeta está copiada textual del libro. ¿Qué cambiás?", opciones: ["Le agregás la página del libro","La escribís con tus palabras","La pasás a máquina","Nada"], correcta: 1, explicacion: "Con tus palabras pensás el tema. Pasarla a máquina tienta por prolijo, pero sigue siendo copia." },
    { q: "Hiciste tarjetas y recordás todo menos 4. ¿Qué repasás del apunte?", opciones: ["Todo el apunte de nuevo","Nada","Solo esas 4","Lo que ya sabías, para asegurar"], correcta: 2, explicacion: "Los errores dicen qué te falta. Releer todo tienta por seguro, pero gastás tiempo en lo que ya sabés." },
    { q: "Confundís siempre dos fechas. ¿Qué tarjeta hacés?", opciones: ["Una que compare: \"¿qué pasó en 1810 y qué en 1816?\"","Una por cada fecha, separadas, sin compararlas","Ninguna","Una con la fecha en grande"], correcta: 0, explicacion: "Comparar ataca la confusión. Separadas tienta por ordenado, pero la confusión sigue." },
    { q: "¿Cuándo conviene empezar a practicar con preguntas?", opciones: ["Solo el día del examen","Nunca, solo releer","Cuando ya sepas todo perfecto","Antes de sentirte lista, para encontrar los errores a tiempo"], correcta: 3, explicacion: "Descubrir errores antes es la idea. Esperar a saberlo todo tienta, pero esa sensación puede ser la ilusión de saber." },
    { q: "Equivocarte en tu casa estudiando, ¿es fracasar?", opciones: ["Sí, demuestra que no podés","No: es mejor encontrar el error ahí que en el examen","Sí, hay que dejar","Sí, si es más de una vez"], correcta: 1, explicacion: "El error estudiando es información. \"No podés\" tienta cuando frustra, pero es parte de aprender." },
  ],
},
{
  id: "espaciar",
  icono: "📅",
  titulo: "Repartir e intercalar",
  nivel: "Intermedio",
  objetivos: [
    "Armar un calendario de repasos repartidos antes de un examen",
    "Explicar por qué estudiar todo el día anterior rinde menos",
    "Intercalar temas o tipos de ejercicio en una misma sesión",
  ],
  lecciones: [
    { titulo: "Estudiar repartido", html: `
      <p class="idea">Las mismas horas rinden más <strong>repartidas en varios días</strong> que todas juntas. Eso se llama <strong>estudio espaciado</strong> o repaso espaciado.</p>
      <table>
        <tr><th></th><th>Todo junto</th><th>Repartido</th></tr>
        <tr><td>Horas</td><td>6 horas el día antes</td><td>6 sesiones de 1 hora en 2 semanas</td></tr>
        <tr><td>El día del examen</td><td>Parece que sabés, pero cansada</td><td>Descansada y con repasos hechos</td></tr>
        <tr><td>Un mes después</td><td>Te acordás muy poco</td><td>Te acordás mucho más</td></tr>
      </table>
      <p><strong>¿Por qué funciona?</strong> Entre una sesión y otra empezás a olvidar. Cuando volvés y tenés que esforzarte para recordar, el recuerdo se hace más fuerte. Un poco de olvido es parte del truco.</p>
      <p><strong>Estudiar todo el día anterior</strong> (en Argentina se le dice "estudiar a último momento") puede alcanzar para aprobar, pero casi todo se olvida en días. Si la materia sigue o es la base de otra, lo vas a tener que estudiar de nuevo.</p>
      <p>Por ejemplo, Lucía tenía examen de matemática en 2 semanas. En vez de estudiar el fin de semana anterior, hizo 6 sesiones de 1 hora. Las mismas 6 horas, pero al mes todavía resolvía los ejercicios.</p>` },
    { titulo: "Tu calendario de repasos", video: {"id":"uF8sH3Ty1B0","t":"Estrategias de aprendizaje efectivas: la práctica intercalada · APTUS (2:15)"}, html: `
      <p class="idea">Planificá los repasos <strong>de antemano</strong>: cuántas sesiones, qué días y qué tema en cada una. Una regla simple: repasar al día siguiente, a los 3 días, a la semana y a las 2 semanas.</p>
      <pre><code>Calendario de Lucía (examen de historia el día 15):

Día 1   Tema A nuevo (leer + hoja en blanco)
Día 2   Repaso A  ·  Tema B nuevo
Día 4   Repaso A  ·  Repaso B  ·  Tema C nuevo
Día 5   Repaso B  ·  Repaso C
Día 8   Repaso A  ·  Repaso C
Día 11  Repaso B  ·  Repaso C  ·  examen viejo
Día 14  Repaso de todo con tarjetas mezcladas
Día 15  EXAMEN (y la noche anterior, dormir)</code></pre>
      <p><strong>Cada repaso es recuperación,</strong> no relectura: tarjetas, hoja en blanco o preguntas. Si un repaso te sale perfecto, el siguiente puede ir más lejos.</p>
      <p><strong>Dos sesiones cortas por semana</strong> por materia ya alcanzan para empezar: una para lo nuevo y otra para repasar lo anterior.</p>
      <p><strong>Esto ya lo hace este sitio:</strong> el repaso de cada curso te muestra preguntas a 1, 3, 7 y 14 días.</p>
      <p>Por ejemplo, Lucía anotó su calendario en la heladera. Cuando un día no pudo estudiar, pasó ese repaso al día siguiente, sin saltearlo.</p>` },
    { titulo: "Intercalar temas", html: `
      <p class="idea"><strong>Intercalar</strong> es mezclar temas o tipos de ejercicio en una misma sesión, en vez de hacer muchos iguales seguidos. Cuesta más, pero te enseña a <strong>elegir</strong> cómo resolver.</p>
      <table>
        <tr><th>En bloque</th><th>Intercalado</th></tr>
        <tr><td>10 ejercicios de porcentaje, después 10 de regla de tres</td><td>Porcentaje, regla de tres, fracción, porcentaje, regla de tres...</td></tr>
        <tr><td>Sabés qué método usar sin pensar: es el mismo de recién</td><td>Tenés que reconocer qué tipo de problema es</td></tr>
        <tr><td>Se siente fácil</td><td>Se siente más difícil, pero rinde más en el examen</td></tr>
      </table>
      <p><strong>¿Por qué?</strong> En el examen los ejercicios vienen mezclados. Si siempre practicaste en bloque, nunca entrenaste lo más difícil: darte cuenta de qué tipo de problema tenés adelante.</p>
      <p><strong>Cuándo no intercalar:</strong> cuando un tema es completamente nuevo, primero hacé algunos ejercicios seguidos para entenderlo. Después mezclá.</p>
      <p><strong>También vale entre materias:</strong> una sesión de 1 hora puede tener 30 minutos de inglés y 30 de historia.</p>
      <p>Por ejemplo, en la práctica en bloque Lucía resolvía 10 de 10. En el examen, con todo mezclado, se trababa. Cuando empezó a practicar intercalado, al principio resolvía 6 de 10, y en el examen 8.</p>` },
  ],
  practica: [
    "Armá un calendario de repasos para tu próximo examen o tema y anotá cuántas sesiones tiene y qué días.",
    "Cumplí 1 semana del calendario y anotá cuántos repasos hiciste de los que tenías planeados.",
    "Hacé una sesión de 10 ejercicios intercalados de 2 o 3 tipos y anotá cuántos resolviste bien.",
  ],
  recursos: [
    { t: "The Learning Scientists: materiales gratis sobre las 6 estrategias para aprender (en inglés)", url: "https://www.learningscientists.org/downloadable-materials" },
    { t: "Dunlosky: \"Fortalecer la caja de herramientas del estudiante\", qué técnicas funcionan (en inglés)", url: "https://www.aft.org/ae/fall2013/dunlosky" },
  ],
  quiz: [
    { q: "Tenés 6 horas para estudiar un tema. ¿Cómo las usás?", opciones: ["Las 6 seguidas el día antes","3 y 3 el mismo día","En varias sesiones repartidas en días distintos","Todas la noche anterior"], correcta: 2, explicacion: "Repartidas rinden más. El día antes tienta porque está \"fresco\", pero se olvida enseguida." },
    { q: "¿Por qué funciona estudiar repartido?", opciones: ["Porque volver a recordar después de olvidar un poco fortalece el recuerdo","Porque se estudia menos","Porque no se olvida nada","Porque es más cómodo"], correcta: 0, explicacion: "Un poco de olvido es parte del truco. \"No se olvida nada\" tienta, pero sí se olvida, y eso ayuda al repasar." },
    { q: "Si estudiás todo el día anterior y aprobás, ¿qué pasa al mes?", opciones: ["Te acordás todo","Te acordás más que estudiando repartido","Nada cambia","Te acordás muy poco"], correcta: 3, explicacion: "Lo que se estudia de golpe se olvida rápido. Aprobar tienta como prueba, pero no garantiza que quede." },
    { q: "¿Cuándo planificás los repasos?", opciones: ["Cuando te acordás","De antemano: cuántas sesiones, qué días y qué tema","La semana del examen","Nunca, se improvisa"], correcta: 1, explicacion: "El plan evita llegar sin repasar. Improvisar tienta por flexible, pero se postergan." },
    { q: "Si estudiaste algo el lunes, ¿cuándo conviene el primer repaso?", opciones: ["Al mes","El mismo lunes a la noche, releyendo","Al día siguiente","Nunca"], correcta: 2, explicacion: "La regla es repasar a 1, 3, 7 y 14 días. Al mes tienta, pero ya se olvidó mucho." },
    { q: "¿Cómo es cada repaso del calendario?", opciones: ["Recuperación: tarjetas, hoja en blanco o preguntas","Releer el apunte","Subrayar de nuevo","Mirar el índice"], correcta: 0, explicacion: "Repasar es recordar sin mirar. Releer tienta por fácil, pero no fortalece igual." },
    { q: "Un día no pudiste hacer el repaso. ¿Qué hacés?", opciones: ["Lo salteás y seguís","Abandonás el calendario","Hacés todos juntos el día del examen","Lo pasás al día siguiente sin saltearlo"], correcta: 3, explicacion: "Moverlo mantiene el plan. Saltearlo tienta, pero ese tema queda sin repaso." },
    { q: "¿Qué es intercalar?", opciones: ["Hacer 20 ejercicios iguales seguidos","Mezclar temas o tipos de ejercicio en una sesión","Estudiar con música","Saltear temas difíciles"], correcta: 1, explicacion: "Mezclar te obliga a elegir el método. En bloque tienta porque sale fácil, pero no entrena eso." },
    { q: "Practicás en bloque y resolvés 10 de 10, pero en el examen te trabás. ¿Por qué?", opciones: ["Porque el examen es injusto","Porque te faltó releer","En el examen vienen mezclados y no entrenaste reconocer qué tipo de problema es","Porque practicaste demasiado"], correcta: 2, explicacion: "En bloque sabés el método sin pensar. \"Faltó releer\" tienta, pero el problema es la práctica en bloque." },
    { q: "Si practicás intercalado, al principio resolvés menos. ¿Qué significa?", opciones: ["Que es más difícil, pero rinde más en el examen","Que es peor","Que hay que volver al bloque","Que no sabés nada"], correcta: 0, explicacion: "Más difícil mientras practicás, mejor después. Volver al bloque tienta porque sale más, pero rinde menos." },
    { q: "Tenés un tema completamente nuevo. ¿Empezás intercalando?", opciones: ["Sí, siempre desde el primer minuto","No, nunca se intercala","Sí, con 5 temas a la vez","No: primero algunos ejercicios seguidos para entenderlo, después mezclás"], correcta: 3, explicacion: "Primero entender, después mezclar. \"Siempre\" tienta si te gustó la técnica, pero confunde al principio." },
    { q: "Tenés 1 hora y dos materias. ¿Cómo la usás?", opciones: ["Solo una, la otra otro mes","30 minutos de cada una: también se intercala entre materias","Cambiás cada 2 minutos","Ninguna"], correcta: 1, explicacion: "Intercalar entre materias también ayuda. Cambiar cada 2 minutos tienta por \"intercalar mucho\", pero no te deja pensar." },
  ],
},
{
  id: "comprender",
  icono: "💡",
  titulo: "Entender de verdad",
  nivel: "Intermedio",
  objetivos: [
    "Hacerte preguntas de por qué y cómo para conectar lo nuevo con lo que sabés",
    "Buscar ejemplos concretos y combinar palabras con imágenes",
    "Explicar un tema con palabras simples para descubrir qué no entendiste",
  ],
  lecciones: [
    { titulo: "Preguntarse por qué", html: `
      <p class="idea">Cuando aprendés algo, preguntate <strong>por qué es así</strong> y <strong>cómo se conecta</strong> con lo que ya sabés. Esa técnica se llama <strong>elaboración</strong>.</p>
      <table>
        <tr><th>Lees...</th><th>Te preguntás...</th></tr>
        <tr><td>"En 1810 se formó la Primera Junta"</td><td>¿Por qué justo en 1810? ¿Qué pasaba en España?</td></tr>
        <tr><td>"Las plantas necesitan luz"</td><td>¿Para qué la usan? ¿Qué pasa en una planta a la sombra?</td></tr>
        <tr><td>"El 10 % de 250 es 25"</td><td>¿Por qué se divide por 10? ¿Cómo sería el 20 %?</td></tr>
      </table>
      <pre><code>Preguntas que sirven para cualquier tema:
- ¿Por qué pasa esto?
- ¿Cómo funciona, paso a paso?
- ¿En qué se parece y en qué se diferencia de...?
- ¿Qué pasaría si...?
- ¿Dónde lo vi en mi vida?</code></pre>
      <p><strong>Contestá con tus palabras</strong>, y después controlá en el apunte si tu respuesta está bien. Si no sabés contestar, encontraste lo que te falta entender.</p>
      <p>Esto conecta con el módulo anterior: las preguntas de por qué también sirven como tarjetas.</p>
      <p>Por ejemplo, Lucía se preguntó "¿por qué en 1810?" y descubrió que España estaba ocupada por Napoleón. Desde ese día no olvidó más la fecha, porque ahora tenía sentido.</p>` },
    { titulo: "Ejemplos e imágenes", html: `
      <p class="idea">Las ideas abstractas se fijan mejor con <strong>ejemplos concretos</strong>. Y se entienden mejor con <strong>palabras más una imagen</strong>: un esquema, una línea de tiempo, un dibujo.</p>
      <p><strong>Ejemplos:</strong> buscá al menos dos ejemplos distintos de cada idea, y pensá qué tienen en común. Si solo tenés uno, podés confundir el ejemplo con la idea.</p>
      <table>
        <tr><th>Idea</th><th>Ejemplo 1</th><th>Ejemplo 2</th></tr>
        <tr><td>Oferta y demanda</td><td>Si hay poco tomate en invierno, sube el precio</td><td>Si todos quieren entradas para un recital, se agotan y la reventa es cara</td></tr>
        <tr><td>Metáfora</td><td>"Tenés un corazón de oro"</td><td>"El tiempo es oro"</td></tr>
      </table>
      <p><strong>Codificación dual:</strong> cuando la misma idea entra con palabras y con una imagen, hay dos caminos para recordarla.</p>
      <pre><code>Esquema de la célula (palabras + dibujo):

  ┌──────────────── membrana: deja pasar o no ─┐
  │   citoplasma        ● núcleo: tiene el ADN │
  │   ○ mitocondria: da energía                │
  └────────────────────────────────────────────┘</code></pre>
      <p><strong>Ojo con los dibujos de adorno:</strong> la imagen tiene que explicar algo. Una flecha que muestra qué causa qué sirve; un corazoncito al lado del título, no.</p>
      <p>Por ejemplo, Lucía hacía apuntes de puro texto. Empezó a dibujar una línea de tiempo con 6 fechas y una frase en cada una, y la usó para contar el tema sin mirar.</p>` },
    { titulo: "Explicarlo simple", video: {"id":"inZe9kW5djI","t":"La técnica de Feynman · Sprouts Español (2:06)"}, html: `
      <p class="idea">Si no lo podés explicar simple, todavía no lo entendiste. La <strong>técnica de Feynman</strong> usa eso: explicar un tema como si se lo contaras a alguien que no sabe nada.</p>
      <p>Lleva el nombre de <strong>Richard Feynman</strong>, un físico famoso por explicar cosas difíciles con palabras simples.</p>
      <pre><code>Técnica de Feynman en 4 pasos:
1. Escribí el nombre del tema arriba de una hoja.
2. Explicalo con palabras simples, como para un chico de 12 años.
   Sin mirar el apunte.
3. Donde te trabes o uses palabras difíciles sin explicar,
   ahí está lo que no entendiste: volvé al apunte.
4. Simplificá: buscá un ejemplo o una comparación.</code></pre>
      <table>
        <tr><th>Explicación que esconde que no entendiste</th><th>Explicación simple</th></tr>
        <tr><td>"La fotosíntesis es el proceso anabólico de síntesis de glucosa"</td><td>"La planta usa la luz del sol para fabricar su propio alimento con agua y aire"</td></tr>
      </table>
      <p><strong>Es recuperación y elaboración a la vez:</strong> recordás sin mirar y conectás las ideas.</p>
      <p>Este sitio lo usa en la caja "Explicalo con tus palabras" al final de cada módulo.</p>
      <p>Por ejemplo, Lucía le explicó la fotosíntesis a su hija de 10 años. Cuando la hija preguntó "¿y de dónde saca el aire?", Lucía se dio cuenta de que no sabía esa parte y la buscó.</p>` },
  ],
  practica: [
    "Elegí 5 frases de un apunte y escribí al lado una pregunta de por qué o cómo para cada una. Anotá cuántas pudiste contestar sin mirar.",
    "Hacé un esquema con palabras y dibujo de un tema y anotá cuántas ideas tiene.",
    "Explicale un tema a alguien con la técnica de Feynman y anotá en qué parte te trabaste.",
  ],
  recursos: [
    { t: "The Learning Scientists: materiales gratis sobre las 6 estrategias para aprender (en inglés)", url: "https://www.learningscientists.org/downloadable-materials" },
    { t: "Coursera: curso gratis \"Aprendiendo a aprender\" (en castellano)", url: "https://www.coursera.org/learn/aprendiendo-a-aprender" },
  ],
  quiz: [
    { q: "Leés \"en 1810 se formó la Primera Junta\". ¿Qué pregunta de elaboración te hacés?", opciones: ["¿De qué color es la tapa del libro?","¿Cuántas páginas faltan?","¿Por qué justo en 1810?","¿Lo subrayo?"], correcta: 2, explicacion: "Preguntar por qué conecta la fecha con su causa. Subrayar tienta por costumbre, pero no hace pensar." },
    { q: "Te hacés una pregunta de por qué y no sabés contestarla. ¿Qué significa?", opciones: ["Que encontraste lo que te falta entender","Que el tema está mal explicado siempre","Que hay que saltearlo","Que ya terminaste"], correcta: 0, explicacion: "Es información valiosa. Saltearlo tienta, pero es justo lo que tenés que estudiar." },
    { q: "Contestaste tu pregunta de por qué. ¿Qué hacés después?", opciones: ["La das por buena sin mirar","La borrás","Pasás a otro tema sin controlar","Controlás en el apunte si está bien"], correcta: 3, explicacion: "Controlar evita fijar un error. Darla por buena tienta, pero puede estar mal." },
    { q: "¿Cuántos ejemplos conviene buscar de una idea?", opciones: ["Uno solo alcanza","Al menos dos distintos","Ninguno","Veinte iguales"], correcta: 1, explicacion: "Con dos ves qué tienen en común. Uno tienta por rápido, pero podés confundir el ejemplo con la idea." },
    { q: "¿Qué es la codificación dual?", opciones: ["Estudiar dos materias a la vez","Escribir dos veces lo mismo","Aprender la misma idea con palabras y con una imagen","Estudiar con dos colores"], correcta: 2, explicacion: "Dos caminos para recordar. \"Dos materias\" tienta por la palabra dual, pero eso es intercalar." },
    { q: "Si ponés un corazoncito dibujado al lado de cada título, ¿es codificación dual?", opciones: ["No: la imagen tiene que explicar algo","Sí, cualquier dibujo sirve","Sí, si es de color","Sí, si es grande"], correcta: 0, explicacion: "El adorno no explica. \"Cualquier dibujo\" tienta porque es una imagen, pero no agrega significado." },
    { q: "Si estudiás historia con apuntes de puro texto, ¿qué agregás?", opciones: ["Más texto","Stickers","Nada","Una línea de tiempo con fechas y una frase en cada una"], correcta: 3, explicacion: "La línea muestra el orden y suma imagen. Más texto tienta por completo, pero no ayuda a ver." },
    { q: "¿Qué dice la técnica de Feynman?", opciones: ["Hay que usar palabras difíciles","Si no lo podés explicar simple, todavía no lo entendiste","Hay que memorizar textual","Hay que releer 5 veces"], correcta: 1, explicacion: "Explicar simple muestra lo que entendés. Palabras difíciles tientan porque suenan a saber, pero pueden esconder que no entendiste." },
    { q: "Explicás un tema y usás una palabra difícil que no sabrías explicar. ¿Qué hacés?", opciones: ["La dejás, suena bien","La repetís más fuerte","Volvés al apunte: ahí hay algo que no entendiste","Cambiás de tema"], correcta: 2, explicacion: "Ahí está la parte floja. \"Suena bien\" tienta, pero esconde lo que falta." },
    { q: "Si explicás un tema sin mirar, ¿qué dos técnicas usás a la vez?", opciones: ["Recuperación y elaboración","Releer y subrayar","Copiar y pegar","Ninguna"], correcta: 0, explicacion: "Recordás sin mirar y conectás ideas. Releer tienta, pero ahí no estás mirando el apunte." },
    { q: "Tu hija pregunta algo de la fotosíntesis que no sabés contestar. ¿Qué te dice?", opciones: ["Que es demasiado chica para entender","Que hay que cambiar de tema","Que la fotosíntesis no importa","Qué parte te falta estudiar"], correcta: 3, explicacion: "Las preguntas de otros encuentran huecos. \"Es chica\" tienta, pero la pregunta mostró lo que no sabías." },
    { q: "¿Cuál es una explicación simple de la fotosíntesis?", opciones: ["Es el proceso anabólico de síntesis de glucosa","La planta usa la luz del sol para fabricar su alimento con agua y aire","Es cuando la planta duerme","Es el color verde"], correcta: 1, explicacion: "Se entiende sin saber biología. La primera tienta porque suena técnica, pero no explica nada a quien no sabe." },
  ],
},
{
  id: "organizar",
  icono: "⏱️",
  titulo: "Organizar el estudio",
  nivel: "Intermedio",
  objetivos: [
    "Ponerte metas de estudio concretas para cada sesión",
    "Estudiar por bloques con pausas, como la técnica Pomodoro",
    "Sacar las distracciones y cuidar el sueño",
  ],
  lecciones: [
    { titulo: "Metas chicas y concretas", html: `
      <p class="idea">"Estudiar historia" es demasiado vago. Una buena meta dice <strong>qué vas a hacer</strong> y <strong>cómo vas a saber que terminaste</strong>.</p>
      <table>
        <tr><th>Meta vaga</th><th>Meta concreta</th></tr>
        <tr><td>Estudiar historia</td><td>Hacer la hoja en blanco del capítulo 3 y controlar con el apunte</td></tr>
        <tr><td>Estudiar inglés</td><td>Pasar a "sé" 20 tarjetas de verbos</td></tr>
        <tr><td>Hacer matemática</td><td>Resolver 10 ejercicios intercalados de la guía 4</td></tr>
      </table>
      <p><strong>Empezá por lo que te cuesta,</strong> cuando tenés más energía. Lo fácil dejalo para el final de la sesión.</p>
      <p><strong>Si te cuesta arrancar:</strong> comprometete solo a 5 minutos. Muchas veces, una vez que empezaste, seguís. Postergar lo que tenés que hacer se llama <strong>procrastinar</strong>, y le pasa a todo el mundo.</p>
      <pre><code>Plan de una sesión (escrito antes de empezar):
Meta 1: hoja en blanco del capítulo 3 (25 min)
Meta 2: 20 tarjetas de inglés (25 min)
Al terminar: marcar ✓ y anotar qué quedó para mañana</code></pre>
      <p>Por ejemplo, Lucía se sentaba "a estudiar" y a la hora no sabía qué había hecho. Con 2 metas escritas antes de empezar, terminaba en 50 minutos y sabía exactamente qué le faltaba.</p>` },
    { titulo: "Bloques y pausas", video: {"id":"UnG3klEgNV8","t":"¿Qué es la técnica Pomodoro y cómo usarla? · Pronabec, Ministerio de Educación de Perú (2:31)"}, html: `
      <p class="idea">La atención se cansa. Estudiar en <strong>bloques cortos con pausas</strong> rinde más que horas seguidas. La técnica más conocida es la <strong>Pomodoro</strong>.</p>
      <p>La inventó <strong>Francesco Cirillo</strong> en los años ochenta, con un reloj de cocina con forma de tomate (pomodoro, en italiano).</p>
      <pre><code>Técnica Pomodoro:
1. Elegí una meta.
2. Poné un temporizador de 25 minutos.
3. Trabajá solo en eso hasta que suene.
4. Pausa de 5 minutos: parate, tomá agua, mirá lejos.
5. Cada 4 bloques, una pausa larga de 15 a 30 minutos.</code></pre>
      <table>
        <tr><th>En la pausa sí</th><th>En la pausa no</th></tr>
        <tr><td>Estirarte, caminar, tomar agua</td><td>Abrir redes sociales: 5 minutos se vuelven 30</td></tr>
        <tr><td>Mirar por la ventana</td><td>Empezar otra tarea que te atrape</td></tr>
      </table>
      <p><strong>Los 25 minutos no son mágicos:</strong> si te concentrás mejor con 40 y 10, usá eso. Lo importante es trabajar sin interrupciones y descansar de verdad.</p>
      <p><strong>Si te interrumpen:</strong> anotá lo que se te ocurrió en un papel y seguí. Lo resolvés en la pausa.</p>
      <p>Por ejemplo, Lucía estudia después de cenar con 3 pomodoros: 1 hora y 25 minutos en total. Rinde más que cuando se sentaba 3 horas con el celular al lado.</p>` },
    { titulo: "Distracciones y sueño", html: `
      <p class="idea">Cada vez que mirás el celular, la atención tarda en volver. Y lo que estudiás se guarda mientras <strong>dormís</strong>. Cuidar las dos cosas es parte de estudiar.</p>
      <table>
        <tr><th>Distracción</th><th>Qué hacer</th></tr>
        <tr><td>El celular</td><td>En otra habitación o dado vuelta y en silencio. Tenerlo a la vista tienta a mirarlo.</td></tr>
        <tr><td>Notificaciones de la compu</td><td>Cerrar las pestañas que no usás; modo "no molestar"</td></tr>
        <tr><td>La tele o la radio con palabras</td><td>Apagarlas: las palabras compiten con lo que leés</td></tr>
        <tr><td>Gente que habla</td><td>Avisar "estoy estudiando hasta las 21" o usar tapones</td></tr>
      </table>
      <p><strong>Hacer dos cosas a la vez</strong> no existe del todo: el cerebro salta de una a otra y en cada salto pierde un poco. Estudiar mirando mensajes hace que todo tarde más y quede menos.</p>
      <p><strong>El sueño:</strong> los adultos necesitan alrededor de 7 a 9 horas, y los adolescentes, más. Dormir después de estudiar ayuda a guardar lo aprendido. Un repaso corto antes de dormir y otro al despertar es una buena combinación.</p>
      <p><strong>El lugar:</strong> si podés, estudiá siempre en el mismo lugar, con buena luz, y que no sea la cama.</p>
      <p>Por ejemplo, Lucía dejó el celular cargando en la cocina mientras estudia. La primera semana le costó; a la segunda, terminaba sus metas 20 minutos antes.</p>` },
  ],
  practica: [
    "Antes de tu próxima sesión, escribí 2 metas concretas y anotá si las cumpliste.",
    "Hacé 3 pomodoros de 25 minutos con pausas de 5 y anotá cuántas veces tuviste ganas de mirar el celular.",
    "Durante 1 semana, anotá cuántas horas dormiste cada noche y cómo te fue estudiando al día siguiente.",
  ],
  recursos: [
    { t: "Coursera: curso gratis \"Aprendiendo a aprender\" (en castellano)", url: "https://www.coursera.org/learn/aprendiendo-a-aprender" },
    { t: "The Learning Scientists: materiales gratis sobre las 6 estrategias para aprender (en inglés)", url: "https://www.learningscientists.org/downloadable-materials" },
  ],
  quiz: [
    { q: "Te sentás a \"estudiar historia\" y a la hora no sabés qué hiciste. ¿Qué cambiás?", opciones: ["Estudiás 3 horas en vez de 1","Cambiás de materia","Escribís metas concretas antes de empezar","Comprás otro cuaderno"], correcta: 2, explicacion: "La meta concreta dice qué hacer y cuándo terminaste. Más horas tientan, pero sin meta se pierden igual." },
    { q: "¿Cuál es una meta concreta?", opciones: ["Pasar a \"sé\" 20 tarjetas de verbos","Estudiar inglés","Ponerme las pilas","Hacer lo que pueda"], correcta: 0, explicacion: "Dice qué y cómo saber que terminaste. \"Estudiar inglés\" tienta por simple, pero es vago." },
    { q: "Tenés una materia difícil y una fácil. ¿Con cuál empezás?", opciones: ["Con la fácil, para entrar en calor siempre","Con ninguna","Con la que menos importa","Con la difícil, cuando tenés más energía"], correcta: 3, explicacion: "Lo difícil pide la mejor energía. La fácil tienta para arrancar cómodo, pero después llegás cansada a lo difícil." },
    { q: "No tenés ganas de empezar. ¿Qué truco probás?", opciones: ["Esperar a tener ganas","Comprometerte solo a 5 minutos","Ordenar el escritorio una hora","Ver un video primero"], correcta: 1, explicacion: "Empezar suele destrabar. Esperar las ganas tienta, pero a veces no llegan." },
    { q: "¿Cómo es la técnica Pomodoro?", opciones: ["3 horas seguidas sin pausa","5 minutos de trabajo y 25 de pausa","25 minutos de trabajo, 5 de pausa, y una pausa larga cada 4 bloques","Estudiar comiendo tomate"], correcta: 2, explicacion: "Bloques cortos con pausas. Tres horas seguidas tientan por \"aprovechar\", pero la atención se cansa." },
    { q: "Si en la pausa de 5 minutos abrís las redes, ¿qué suele pasar?", opciones: ["Los 5 minutos se vuelven 30","Descansás mejor","Volvés con más ganas siempre","Nada"], correcta: 0, explicacion: "Las redes atrapan. \"Descansás mejor\" tienta, pero no despejan: mejor parate y tomá agua." },
    { q: "Te concentrás mejor 40 minutos que 25. ¿Qué hacés?", opciones: ["Te obligás a 25 aunque no te sirva","Dejás las pausas","Hacés 2 horas seguidas","Usás 40 y 10: lo importante es trabajar sin cortes y descansar de verdad"], correcta: 3, explicacion: "Los 25 no son mágicos. Obligarte tienta por seguir la regla, pero la idea es adaptarla." },
    { q: "Mientras estudiás se te ocurre algo que tenés que hacer. ¿Qué hacés?", opciones: ["Lo hacés ya","Lo anotás en un papel y seguís; lo resolvés en la pausa","Lo googleás enseguida","Dejás de estudiar"], correcta: 1, explicacion: "Anotar libera la cabeza. Hacerlo ya tienta para no olvidarlo, pero corta la concentración." },
    { q: "Si vas a estudiar una hora, ¿dónde conviene que esté el celular?", opciones: ["Al lado, con sonido","En la mano","En otra habitación, o dado vuelta y en silencio","Con la pantalla hacia arriba por si llega algo"], correcta: 2, explicacion: "A la vista tienta a mirarlo. Tenerlo cerca \"por las dudas\" tienta, pero cada mirada corta." },
    { q: "Si estudiás y contestás mensajes a la vez, ¿qué pasa?", opciones: ["Todo tarda más y queda menos","Hacés el doble","Es lo más eficiente","No cambia nada"], correcta: 0, explicacion: "El cerebro salta de una cosa a otra y pierde en cada salto. \"El doble\" tienta, pero es al revés." },
    { q: "¿Cuánto necesita dormir un adulto, aproximadamente?", opciones: ["3 horas alcanzan","12 horas siempre","Da igual si estudia","Alrededor de 7 a 9 horas"], correcta: 3, explicacion: "Dormir ayuda a guardar lo aprendido. Dormir poco tienta para estudiar más, pero rinde menos." },
    { q: "¿Dónde conviene estudiar?", opciones: ["En la cama, más cómodo","Siempre en el mismo lugar, con buena luz, y que no sea la cama","Con la tele prendida","En un lugar distinto cada vez, con ruido"], correcta: 1, explicacion: "Un lugar fijo ayuda a concentrarse. La cama tienta por cómoda, pero da sueño." },
  ],
},
{
  id: "examenes",
  icono: "📝",
  titulo: "Apuntes y exámenes",
  nivel: "Avanzado",
  objetivos: [
    "Tomar apuntes con el método Cornell para después estudiar con ellos",
    "Leer un texto de forma activa, con preguntas",
    "Prepararte para un examen, manejar los nervios y aprender de la corrección",
  ],
  lecciones: [
    { titulo: "Apuntes que sirven para estudiar", video: {"id":"SKqyyYt_dQc","t":"Te presentamos el método Cornell · TvIEMS (1:55)"}, html: `
      <p class="idea">Los mejores apuntes no copian todo: anotan las ideas con tus palabras y dejan lugar para <strong>preguntas</strong>, así después estudiás con ellos.</p>
      <p>El <strong>método Cornell</strong>, creado en la Universidad de Cornell, divide la hoja en 3 partes:</p>
      <pre><code>┌────────────┬─────────────────────────────────┐
│ PREGUNTAS  │ APUNTES                          │
│ y palabras │ Lo que dice la clase o el texto, │
│ clave      │ con tus palabras, en frases      │
│            │ cortas.                          │
│ ¿Por qué   │ 1810: Primera Junta.             │
│ en 1810?   │ España ocupada por Napoleón.     │
│ (1/3)      │ (2/3)                            │
├────────────┴─────────────────────────────────┤
│ RESUMEN: 2 o 3 líneas con lo más importante   │
└───────────────────────────────────────────────┘</code></pre>
      <pre><code>Cómo se usa:
1. En clase o leyendo: anotás en la parte derecha.
2. Ese mismo día: escribís preguntas en la izquierda
   y el resumen abajo.
3. Para estudiar: tapás la derecha y contestás
   las preguntas de la izquierda. ¡Es práctica de recuperación!</code></pre>
      <p><strong>No copies todo:</strong> si escribís palabra por palabra, no pensás. Anotá con tus palabras, aunque te pierdas algún detalle.</p>
      <p>Por ejemplo, Lucía copiaba todo lo que decía la profesora y no le quedaba nada. Con Cornell escribe la mitad, y la columna de preguntas le sirve de tarjetas.</p>` },
    { titulo: "Leer activamente", html: `
      <p class="idea">Leer bien no es pasar los ojos por el texto: es <strong>leer con preguntas</strong> y frenar a recordar cada tanto.</p>
      <pre><code>Lectura activa en 4 pasos:
1. ANTES: mirá títulos, subtítulos, negritas y gráficos.
   Preguntate: ¿de qué trata? ¿qué ya sé de esto?
2. DURANTE: leé de a un apartado.
   Al terminar cada uno, tapalo y decí la idea principal.
3. Anotá preguntas en el margen o en la columna Cornell.
4. DESPUÉS: hoja en blanco con lo que recuerdes.</code></pre>
      <table>
        <tr><th>Lectura pasiva</th><th>Lectura activa</th></tr>
        <tr><td>Leer todo de corrido</td><td>Frenar en cada apartado</td></tr>
        <tr><td>Subrayar casi todo</td><td>Escribir la idea principal con tus palabras</td></tr>
        <tr><td>"Ya lo leí"</td><td>"¿Puedo decir de qué trataba sin mirar?"</td></tr>
      </table>
      <p><strong>¿Y el subrayado?</strong> No está prohibido, pero sirve poco solo. Si subrayás, que sea poco y para después convertirlo en preguntas.</p>
      <p><strong>Palabras que no conocés:</strong> anotalas y buscalas. Si una palabra clave no se entiende, el resto del párrafo tampoco.</p>
      <p>Por ejemplo, Lucía leía 20 páginas de corrido y al final no sabía qué había leído. Con la lectura activa lee 10 páginas en el mismo tiempo, pero las puede contar.</p>` },
    { titulo: "El examen", html: `
      <p class="idea">Prepararse para un examen es <strong>practicar como en el examen</strong>: preguntas sin mirar, con tiempo. Los nervios bajan cuando sabés que ya lo hiciste muchas veces.</p>
      <pre><code>La semana del examen:
- Exámenes viejos o preguntas de práctica, con reloj.
- Tarjetas mezcladas de todos los temas.
- Hoja en blanco de cada tema.
- La noche anterior: repaso corto y DORMIR.

El día del examen:
1. Leé todas las consignas antes de empezar.
2. Empezá por lo que sabés: suma puntos y calma.
3. Mirá la hora: no te quedes trabada en una.
4. Si te queda tiempo, revisá.</code></pre>
      <p><strong>Para los nervios:</strong> un poco de nervios es normal y hasta ayuda a concentrarse. Si te paralizan, probá respirar lento: inspirar contando 4, sostener 4, soltar contando 6. Repetilo 3 veces.</p>
      <p>Si la ansiedad te bloquea seguido o te hace mal, hablalo con un docente, con el gabinete de tu escuela o con un profesional de salud.</p>
      <p><strong>Después del examen:</strong> cuando te lo devuelvan, mirá cada error. ¿No lo sabías, lo confundiste o leíste mal la consigna? Hacé una tarjeta con cada uno: el examen corregido es el mejor material de estudio.</p>
      <p>Por ejemplo, Lucía se bloqueaba en los exámenes. Practicó con 3 exámenes viejos y reloj, y el día del examen sintió que era "uno más".</p>` },
  ],
  practica: [
    "Tomá apuntes de una clase o un video de 10 minutos con el método Cornell y anotá cuántas preguntas escribiste en la columna izquierda.",
    "Leé un texto de 3 páginas con lectura activa y anotá cuántas ideas principales pudiste decir sin mirar.",
    "Hacé un examen viejo o 10 preguntas de práctica con reloj, corregilo y anotá cuántos errores fueron por no saber, por confundir o por leer mal.",
  ],
  recursos: [
    { t: "Retrieval Practice: guías sobre la práctica de recuperación (en inglés)", url: "https://www.retrievalpractice.org/" },
    { t: "Dunlosky: \"Fortalecer la caja de herramientas del estudiante\", qué técnicas funcionan (en inglés)", url: "https://www.aft.org/ae/fall2013/dunlosky" },
  ],
  quiz: [
    { q: "Si copiás palabra por palabra lo que dice la profesora, ¿qué pasa?", opciones: ["Aprendés todo","Es el mejor método","No pensás lo que escribís y te queda poco","Ahorrás tiempo de estudio"], correcta: 2, explicacion: "Copiar no hace pensar. \"Aprendés todo\" tienta porque está completo, pero no se procesa." },
    { q: "En el método Cornell, ¿qué va en la columna izquierda?", opciones: ["Preguntas y palabras clave","Todo el texto copiado","Dibujitos de adorno","La fecha y nada más"], correcta: 0, explicacion: "Las preguntas sirven para estudiar después. El texto copiado tienta, pero va resumido a la derecha." },
    { q: "Si estudiás con un apunte Cornell, ¿qué hacés?", opciones: ["Releés todo dos veces","Pasás todo en limpio","Subrayás el resumen","Tapás la derecha y contestás las preguntas de la izquierda"], correcta: 3, explicacion: "Es práctica de recuperación. Releer tienta por fácil, pero rinde menos." },
    { q: "¿Cuándo escribís las preguntas y el resumen de tu apunte Cornell?", opciones: ["La noche antes del examen","El mismo día de la clase","Nunca","Al mes"], correcta: 1, explicacion: "Ese día todavía te acordás. La noche antes tienta, pero ya olvidaste mucho." },
    { q: "Si vas a leer un capítulo, ¿qué hacés antes de empezar?", opciones: ["Leés todo de corrido","Subrayás la primera página entera","Mirás títulos, negritas y gráficos y te preguntás de qué trata","Nada"], correcta: 2, explicacion: "Saber de qué trata ayuda a ubicar cada parte. Leer de corrido tienta, pero se pierde el hilo." },
    { q: "Terminaste de leer un apartado. ¿Qué hacés?", opciones: ["Lo tapás y decís la idea principal","Seguís con el siguiente sin parar","Lo releés","Lo subrayás todo"], correcta: 0, explicacion: "Frenar a recordar fija la idea. Seguir sin parar tienta por avanzar, pero se olvida." },
    { q: "Si querés subrayar, ¿cómo conviene hacerlo?", opciones: ["Todo el texto","Con 5 colores","Sin leer","Poco, y después convertirlo en preguntas"], correcta: 3, explicacion: "El subrayado solo sirve poco. Todo el texto tienta por completo, pero no distingue lo importante." },
    { q: "Aparece una palabra clave que no conocés. ¿Qué hacés?", opciones: ["La salteás","La anotás y la buscás","Adivinás","Dejás de leer"], correcta: 1, explicacion: "Sin esa palabra, el párrafo no se entiende. Saltearla tienta por rápido, pero perdés el sentido." },
    { q: "La semana del examen, ¿cómo practicás?", opciones: ["Releyendo los apuntes","Pasando todo en limpio","Con exámenes viejos o preguntas, con reloj, como en el examen","Mirando videos sin pausa"], correcta: 2, explicacion: "Practicar como en el examen prepara. Releer tienta porque se siente seguro, pero es la ilusión de saber." },
    { q: "En el examen, ¿por dónde empezás?", opciones: ["Por lo que sabés, después de leer todas las consignas","Por la más difícil, sin leer las demás","Por la última","Por la que vale menos"], correcta: 0, explicacion: "Lo que sabés suma puntos y te calma. La difícil tienta para sacarla de encima, pero te puede trabar." },
    { q: "Los nervios te paralizan antes del examen. ¿Qué probás?", opciones: ["Tomar mucho café","Repasar todo a último momento","Irte","Respirar lento: inspirar 4, sostener 4, soltar 6"], correcta: 3, explicacion: "Respirar lento calma el cuerpo. El café tienta para despertarte, pero puede ponerte más nerviosa." },
    { q: "Te devuelven el examen corregido. ¿Qué hacés?", opciones: ["Lo guardás sin mirar","Mirás cada error y hacés una tarjeta con cada uno","Solo mirás la nota","Lo tirás"], correcta: 1, explicacion: "Los errores dicen qué te falta. Mirar solo la nota tienta, pero perdés el mejor material de estudio." },
  ],
},
{
  id: "proyecto",
  icono: "🎯",
  titulo: "Proyecto final: tu plan de estudio",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de 2 semanas para un tema real con las técnicas del curso",
    "Medir tu avance con una prueba al principio y otra al final",
    "Revisar el plan con una rúbrica y sostenerlo en el tiempo",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es estudiar <strong>un tema real durante 2 semanas</strong> con las técnicas del curso, y <strong>medir</strong> cuánto aprendiste.</p>
      <table>
        <tr><th>Parte</th><th>Qué lleva</th><th>Módulo</th></tr>
        <tr><td>Tema y examen</td><td>Un tema real: de la escuela, de un curso, un idioma</td><td>—</td></tr>
        <tr><td>Prueba inicial</td><td>10 preguntas del tema, sin estudiar: anotá el puntaje</td><td>Recuperar</td></tr>
        <tr><td>Calendario</td><td>Al menos 6 sesiones repartidas en 2 semanas</td><td>Repartir</td></tr>
        <tr><td>Técnicas</td><td>Hoja en blanco, tarjetas, preguntas de por qué, intercalado</td><td>Recuperar, Entender</td></tr>
        <tr><td>Sesiones</td><td>Metas escritas, bloques con pausas, celular lejos</td><td>Organizar</td></tr>
        <tr><td>Prueba final</td><td>Las mismas 10 preguntas, 2 semanas después</td><td>—</td></tr>
      </table>
      <pre><code>Plan de Lucía (inglés, verbos irregulares):
Prueba inicial: 3 de 10
Sesiones: días 1, 2, 4, 5, 8, 11 y 14, de 25 minutos
Técnicas: tarjetas, oraciones propias con cada verbo,
          mezclar verbos de distintos grupos
Prueba final (día 15): 9 de 10</code></pre>
      <p><strong>Por qué medir:</strong> la sensación de saber engaña. Una prueba al principio y otra al final te muestran con números si el método funciona.</p>
      <p>Por ejemplo, la compañera de Lucía estudió los mismos verbos releyendo una lista 7 veces. Se sentía igual de segura, pero en la prueba final sacó 5 de 10.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si un trabajo está completo. Usala para revisar tu plan, antes y después de las 2 semanas.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Medición</td><td>Prueba inicial y final con las mismas preguntas</td><td>Solo una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Repartido</td><td>6 sesiones o más en 2 semanas</td><td>3 a 5</td><td>Todo en 1 o 2 días</td></tr>
        <tr><td>Recuperación</td><td>Cada sesión tiene preguntas, tarjetas u hoja en blanco</td><td>Algunas</td><td>Solo releer o subrayar</td></tr>
        <tr><td>Comprensión</td><td>Preguntas de por qué, ejemplos o explicación simple</td><td>Una vez</td><td>Nunca</td></tr>
        <tr><td>Organización</td><td>Metas escritas y bloques con pausas</td><td>Una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Errores</td><td>Anotó sus errores y los repasó</td><td>Los anotó sin repasar</td><td>No los miró</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡plan excelente!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y armalo de nuevo
Regla: si "Recuperación" tiene 0, el plan no está listo:
releer solo no alcanza.</code></pre>
      <p>Por ejemplo, el primer plan de Lucía sacó 8: no tenía prueba inicial y no repasaba sus errores. Sumó las dos cosas y llegó a 12.</p>` },
    { titulo: "Sostenerlo en el tiempo", html: `
      <p class="idea">Un buen método sirve si lo <strong>seguís usando</strong>. Para eso, conviene que sea simple, que lo veas funcionar y que esté atado a tu rutina.</p>
      <table>
        <tr><th>Idea</th><th>Cómo se hace</th></tr>
        <tr><td>Atarlo a algo que ya hacés</td><td>"Después de cenar, 1 pomodoro de tarjetas"</td></tr>
        <tr><td>Ver el avance</td><td>Anotar los puntajes de las pruebas en un cuaderno o una planilla</td></tr>
        <tr><td>Empezar chico</td><td>Mejor 20 minutos todos los días que 3 horas una vez</td></tr>
        <tr><td>Si fallás un día</td><td>Retomar al día siguiente, sin "compensar" con 5 horas</td></tr>
      </table>
      <p><strong>La motivación viene después:</strong> no esperes tener ganas para empezar. Cuando ves que recordás más, las ganas aparecen.</p>
      <p><strong>Contale a otro:</strong> explicarle a alguien lo que aprendiste es recuperación, y además te compromete a seguir.</p>
      <p><strong>Seguí aprendiendo sobre aprender:</strong> el curso gratis "Aprendiendo a aprender" de Coursera está en castellano, y The Learning Scientists tiene materiales gratis (en inglés).</p>
      <p>Por ejemplo, Lucía hace 1 pomodoro de tarjetas después de cenar, de lunes a viernes. Anota sus puntajes en la última hoja del cuaderno: verlos subir es lo que la hace seguir.</p>` },
  ],
  practica: [
    "Elegí un tema real, hacé la prueba inicial de 10 preguntas y anotá el puntaje.",
    "Cumplí el plan de 2 semanas y anotá cuántas sesiones hiciste de las planeadas.",
    "Hacé la prueba final con las mismas 10 preguntas, revisá tu plan con la rúbrica y anotá los dos puntajes y el total de la rúbrica.",
  ],
  recursos: [
    { t: "Coursera: curso gratis \"Aprendiendo a aprender\" (en castellano)", url: "https://www.coursera.org/learn/aprendiendo-a-aprender" },
    { t: "The Learning Scientists: materiales gratis sobre las 6 estrategias para aprender (en inglés)", url: "https://www.learningscientists.org/downloadable-materials" },
    { t: "Retrieval Practice: guías sobre la práctica de recuperación (en inglés)", url: "https://www.retrievalpractice.org/" },
  ],
  quiz: [
    { q: "Si querés saber si tu método funciona, ¿qué hacés?", opciones: ["Confiás en la sensación de saber","Preguntás a una amiga si estudiaste bien","Una prueba al principio y la misma al final, y comparás","Contás las horas que estudiaste"], correcta: 2, explicacion: "Los puntajes no engañan. La sensación tienta porque es lo que sentís, pero puede ser la ilusión de saber." },
    { q: "Tu plan tiene 2 semanas. ¿Cuántas sesiones conviene, como mínimo?", opciones: ["6, repartidas","1 larga","2 seguidas al final","30 en el mismo día"], correcta: 0, explicacion: "Repartidas rinden más. Una larga tienta por menos días, pero se olvida rápido." },
    { q: "La compañera de Lucía releyó 7 veces y se sentía segura. ¿Qué mostró la prueba?", opciones: ["Que releer es lo mejor","Que sacó 10","Que no hace falta medir","Que sabía menos de lo que creía: 5 de 10"], correcta: 3, explicacion: "La prueba desarmó la ilusión de saber. \"Releer es lo mejor\" tienta por la seguridad que daba." },
    { q: "Si tu plan no tiene prueba inicial, ¿cuánto sacás en Medición?", opciones: ["2 puntos","1 punto, si tiene la final","0 siempre","No se puede saber"], correcta: 1, explicacion: "Una de las dos da 1 punto. 2 tienta si la final salió bien, pero falta con qué comparar." },
    { q: "Tu plan es solo releer y subrayar, pero el total de la rúbrica da 7. ¿Está listo?", opciones: ["Sí, 7 alcanza","Sí, si subrayás con colores","No: si Recuperación tiene 0, no está listo","Sí, si releés más veces"], correcta: 2, explicacion: "La regla de la rúbrica lo dice. El 7 tienta como aprobado, pero falta lo que más ayuda." },
    { q: "Anotaste tus errores, pero no los repasaste. ¿Cuánto sacás en Errores?", opciones: ["1 punto","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "Anotar sin repasar da 1. 2 tienta porque ya los anotaste, pero falta usarlos." },
    { q: "Querés que estudiar se vuelva costumbre. ¿Qué hacés?", opciones: ["Esperás tener ganas cada día","Estudiás solo cuando hay examen","Cambiás de horario todos los días","Lo atás a algo que ya hacés, como después de cenar"], correcta: 3, explicacion: "Atado a la rutina se sostiene. Esperar las ganas tienta, pero vienen después de empezar." },
    { q: "¿Qué es mejor para sostener el hábito?", opciones: ["3 horas una vez por semana","20 minutos todos los días","6 horas una vez por mes","Nada hasta el examen"], correcta: 1, explicacion: "Poco y seguido se sostiene y reparte el estudio. Tres horas juntas tientan por intensas, pero cansan." },
    { q: "Un día no estudiaste. ¿Qué hacés al día siguiente?", opciones: ["Estudiás 5 horas para recuperar","Abandonás el plan","Retomás normal, sin compensar con 5 horas","Esperás a la semana que viene"], correcta: 2, explicacion: "Retomar mantiene el hábito. Compensar tienta por culpa, pero cansa y hace abandonar." },
    { q: "¿Qué te ayuda a mantener las ganas?", opciones: ["Ver tu avance, por ejemplo anotando los puntajes","No mirar nunca los resultados","Compararte con otros todo el tiempo","Estudiar sin metas"], correcta: 0, explicacion: "Ver que recordás más motiva. Compararte tienta, pero lo que importa es tu propio avance." },
    { q: "Le explicás a alguien lo que aprendiste. ¿Qué ganás?", opciones: ["Nada","Perdés tiempo de estudio","Te olvidás más rápido","Practicás recuperación y te comprometés a seguir"], correcta: 3, explicacion: "Explicar es recordar sin mirar. \"Perdés tiempo\" tienta, pero es estudiar de otra forma." },
    { q: "Querés seguir aprendiendo sobre cómo aprender en castellano. ¿Qué recurso usás?", opciones: ["Un video que dice que existen 10 estilos de aprendizaje","El curso gratis \"Aprendiendo a aprender\" de Coursera","Una app que promete aprender durmiendo","Ninguno"], correcta: 1, explicacion: "Está basado en evidencia y en castellano. \"Aprender durmiendo\" tienta por fácil, pero no funciona así." },
  ],
},
];
