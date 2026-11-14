// Temario del curso "Presentaciones que se entienden". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js presentaciones y node tools/metodologia.js presentaciones
window.TEMARIO = [
{
  id: "empezar",
  icono: "🖥️",
  titulo: "Empezar: herramientas y diapositivas",
  nivel: "Básico",
  objetivos: [
    "Crear una presentación gratis en PowerPoint para la web, Google Slides o Canva",
    "Agregar, ordenar y duplicar diapositivas usando los diseños que trae el programa",
    "Elegir un tema simple y mantenerlo en toda la presentación",
  ],
  lecciones: [
    { titulo: "Las herramientas", html: `
      <p class="idea">Una presentación es una serie de <strong>diapositivas</strong> (pantallas) que acompañan lo que decís. Las tres herramientas más usadas son gratis y funcionan parecido.</p>
      <table>
        <tr><th>Herramienta</th><th>Cuenta</th><th>Punto fuerte</th></tr>
        <tr><td>PowerPoint para la web</td><td>Cuenta de Microsoft</td><td>Es el estándar en muchas oficinas</td></tr>
        <tr><td>Google Slides (Presentaciones de Google)</td><td>Cuenta de Google</td><td>Muy fácil para trabajar con otros</td></tr>
        <tr><td>Canva</td><td>Cuenta gratuita de Canva</td><td>Muchas plantillas con diseño</td></tr>
      </table>
      <p>Lo que aprendas en este curso sirve en las tres: el problema casi nunca es la herramienta, sino qué ponés en cada diapositiva.</p>
      <p><strong>Una advertencia antes de empezar:</strong> la presentación acompaña a la persona que habla, no la reemplaza. Si todo lo que vas a decir está escrito en las diapositivas, el público lee en vez de escucharte. Por eso este curso insiste en diapositivas con poco texto.</p>
      <p>Por ejemplo, una presentación para una entrevista de trabajo, para una reunión de la cooperadora o para un trabajo práctico tienen el mismo objetivo: que el público entienda y recuerde una idea.</p>` },
    { titulo: "Diapositivas y diseños", html: `
      <p class="idea">Cada diapositiva nueva se crea con un <strong>diseño</strong> (o disposición): un modelo con cajas para título, texto o imagen. Usar los diseños hace que todo quede alineado y parejo.</p>
      <table>
        <tr><th>Diseño</th><th>Para</th></tr>
        <tr><td>Título</td><td>La portada</td></tr>
        <tr><td>Título y cuerpo</td><td>Una idea con pocas líneas</td></tr>
        <tr><td>Solo título</td><td>Una frase fuerte, o un título con una imagen grande</td></tr>
        <tr><td>Título de sección</td><td>Separar las partes de la presentación</td></tr>
        <tr><td>En blanco</td><td>Una imagen o un gráfico a pantalla completa</td></tr>
      </table>
      <p><strong>Lo básico:</strong></p>
      <ul>
        <li><strong>Agregar:</strong> botón "Nueva diapositiva" (o +), eligiendo el diseño.</li>
        <li><strong>Ordenar:</strong> arrastrá las miniaturas del panel de la izquierda.</li>
        <li><strong>Duplicar:</strong> clic derecho en la miniatura → Duplicar. Útil para hacer varias diapositivas con el mismo formato.</li>
        <li><strong>Ocultar:</strong> clic derecho → Ocultar u Omitir diapositiva, para no mostrarla sin borrarla.</li>
      </ul>
      <p>Por ejemplo, si cada diapositiva la armás con cajas de texto sueltas, los títulos quedan en lugares distintos y la presentación "salta" al pasar de una a otra. Con los diseños, todos los títulos quedan en el mismo lugar.</p>` },
    { titulo: "Un tema simple y parejo", html: `
      <p class="idea">El <strong>tema</strong> es el conjunto de colores, letras y fondo de toda la presentación. Elegí uno simple al principio y mantenelo: una presentación con cada diapositiva de otro estilo parece armada por varias personas.</p>
      <table>
        <tr><th>Elegí</th><th>Evitá</th></tr>
        <tr><td>Fondo liso, claro u oscuro</td><td>Fondos con fotos o dibujos detrás del texto</td></tr>
        <tr><td>Una o dos letras legibles</td><td>Letras de fantasía o manuscritas en el texto</td></tr>
        <tr><td>Dos o tres colores en total</td><td>Un color distinto en cada diapositiva</td></tr>
        <tr><td>Mucho contraste entre letra y fondo</td><td>Letra gris clara sobre fondo blanco, o amarilla sobre blanco</td></tr>
      </table>
      <p><strong>Dónde se cambia:</strong> en Google Slides, en el panel de Temas; en PowerPoint, en la pestaña Diseño. Si cambiás el tema después, se aplica a todas las diapositivas que usaron los diseños.</p>
      <p><strong>El contraste importa más de lo que parece:</strong> en un proyector o una pantalla con sol, un contraste que se ve bien en tu computadora puede volverse ilegible. Letra oscura sobre fondo claro (o al revés) es lo más seguro.</p>
      <p>Por ejemplo, si vas a presentar en una sala con mucha luz, un fondo blanco con letra negra se ve mejor que un fondo oscuro con letra de color.</p>` },
  ],
  practica: [
    "Creá una presentación en la herramienta que prefieras con 5 diapositivas usando al menos 3 diseños distintos. Anotá qué diseños usaste.",
    "Duplicá una diapositiva, cambiale el contenido y reordená las diapositivas arrastrando. Anotá cuántas diapositivas quedaron.",
    "Elegí un tema simple con fondo liso y mucho contraste. Proyectalo o miralo en el celular con el brillo bajo y anotá si se lee bien.",
  ],
  recursos: [
    { t: "Google: cómo usar Presentaciones de Google", url: "https://support.google.com/docs/answer/2763168?hl=es" },
    { t: "Microsoft: ayuda y formación de PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint" },
    { t: "Google: añadir, eliminar u organizar diapositivas", url: "https://support.google.com/docs/answer/1694830?hl=es" },
  ],
  quiz: [
    { q: "Querés hacer una presentación sin pagar. ¿Qué podés usar?", opciones: ["Solo PowerPoint pago","Un programa trucho","PowerPoint para la web, Google Slides o Canva, con cuenta gratuita","No se puede gratis"], correcta: 2, explicacion: "Las tres tienen versión gratuita. El programa trucho tienta, pero puede traer virus y es ilegal." },
    { q: "Tu compañero escribió todo lo que va a decir en las diapositivas. ¿Qué pasa?", opciones: ["El público lee en vez de escucharlo","El público entiende más","Queda más profesional","No pasa nada"], correcta: 0, explicacion: "La presentación acompaña, no reemplaza al que habla. Que queda más completo tienta, pero el público se pierde leyendo." },
    { q: "Armaste cada diapositiva con cajas de texto sueltas y los títulos saltan de lugar. ¿Qué te faltó?", opciones: ["Más colores","Más animaciones","Letras más grandes","Usar los diseños de diapositiva"], correcta: 3, explicacion: "Los diseños ponen los títulos siempre en el mismo lugar. Más colores tientan para que se vea mejor, pero no lo ordenan." },
    { q: "Querés hacer 5 diapositivas con el mismo formato. ¿Qué hacés?", opciones: ["Armás cada una de cero","Armás una y la duplicás","Copiás la presentación entera","Hacés una sola diapositiva larga"], correcta: 1, explicacion: "Duplicar mantiene el formato idéntico. Armar cada una de cero tienta, pero es más lento y quedan distintas." },
    { q: "Tenés una diapositiva que quizás no muestres. ¿Qué hacés?", opciones: ["La borrás","La dejás y la pasás rápido","La ocultás u omitís, sin borrarla","La pintás de negro"], correcta: 2, explicacion: "Ocultarla la saca de la presentación sin perderla. Pasarla rápido tienta, pero el público la ve igual." },
    { q: "Tenés que elegir el fondo de tu presentación. ¿Cuál conviene?", opciones: ["Liso, claro u oscuro","Una foto detrás del texto","Un dibujo con muchos colores","Un fondo distinto en cada diapositiva"], correcta: 0, explicacion: "El fondo liso no compite con el texto. La foto tienta porque se ve linda, pero hace difícil leer." },
    { q: "Usaste letra amarilla sobre fondo blanco. ¿Qué problema hay?", opciones: ["Ninguno, es alegre","Que el amarillo es feo","Que ocupa mucho espacio","Falta contraste: se lee muy mal, sobre todo en un proyector"], correcta: 3, explicacion: "Sin contraste, la letra se pierde. Que es alegre tienta, pero el público no puede leer." },
    { q: "Cada diapositiva tiene otro color y otra letra. ¿Qué parece?", opciones: ["Más creativa","Que la armaron varias personas sin ponerse de acuerdo","Más profesional","Más fácil de seguir"], correcta: 1, explicacion: "Un tema parejo da unidad. Más creativa tienta como lectura, pero distrae del contenido." },
    { q: "Vas a presentar en una sala con mucha luz. ¿Qué combinación es más segura?", opciones: ["Fondo negro con letra azul","Fondo gris con letra gris clara","Fondo blanco con letra negra","Fondo con foto y letra blanca"], correcta: 2, explicacion: "Mucho contraste se ve con luz. Fondo negro con letra azul tienta por elegante, pero con luz se lava." },
    { q: "Cambiaste el tema al final y algunas diapositivas no cambiaron. ¿Por qué?", opciones: ["Porque no usaban los diseños del tema: tenían formato a mano","Porque el programa falló","Porque eran muchas","Porque el tema no se cambia nunca"], correcta: 0, explicacion: "El tema se aplica a lo que usa los diseños. Pensar que el programa falló tienta, pero el formato a mano no sigue al tema." },
    { q: "¿Cuál es el objetivo de cualquier presentación, sea para una entrevista o un trabajo práctico?", opciones: ["Mostrar muchas diapositivas","Usar todas las animaciones","Que quede lo más larga posible","Que el público entienda y recuerde una idea"], correcta: 3, explicacion: "Todo lo demás está al servicio de la idea. Muchas diapositivas tientan para parecer trabajado, pero diluyen el mensaje." },
    { q: "Tenés que elegir la herramienta para tu primera presentación. ¿Qué importa más?", opciones: ["Que sea la más cara","Qué ponés en cada diapositiva: cualquiera de las tres sirve","Que tenga más efectos","Que sea la más nueva"], correcta: 1, explicacion: "El problema casi nunca es la herramienta. La más nueva tienta, pero una buena idea se cuenta bien en cualquiera." },
  ],
},
{
  id: "mensaje",
  icono: "🎯",
  titulo: "Planificar el mensaje antes de abrir el programa",
  nivel: "Básico",
  objetivos: [
    "Definir el público, el objetivo y la idea principal en una oración antes de armar diapositivas",
    "Ordenar la presentación con una estructura de principio, desarrollo y cierre",
    "Armar el guion en papel con una idea por diapositiva",
  ],
  lecciones: [
    { titulo: "Público, objetivo y una idea", html: `
      <p class="idea">El error más común es abrir el programa y empezar a hacer diapositivas. Antes, respondé tres preguntas: ¿a quién le hablás?, ¿qué querés que hagan o piensen al terminar?, y ¿cuál es tu idea principal en una sola oración?</p>
      <table>
        <tr><th>Pregunta</th><th>Ejemplo</th></tr>
        <tr><td>¿Quién es el público?</td><td>Vecinos de la cuadra, sin conocimientos técnicos</td></tr>
        <tr><td>¿Qué querés que hagan al final?</td><td>Que voten poner luces en la esquina</td></tr>
        <tr><td>¿Cuál es tu idea en una oración?</td><td>"La esquina oscura tuvo 4 robos en 6 meses y con luces podemos evitarlo por $ 15.000 por casa"</td></tr>
      </table>
      <p>Si no podés decir tu idea en una oración, todavía no está clara, y la presentación tampoco lo va a estar.</p>
      <p><strong>El público cambia todo:</strong> la misma información se presenta distinto a tu jefa, a un cliente o a un grupo de chicos. Pensá qué saben, qué les importa y qué preguntas van a tener.</p>
      <p>Por ejemplo, en una entrevista de trabajo donde te piden presentar un proyecto, el público quiere saber qué hiciste vos y qué resultado tuvo, no todos los detalles técnicos.</p>` },
    { titulo: "Principio, desarrollo y cierre", html: `
      <p class="idea">Una presentación clara tiene tres partes: un principio que engancha y dice de qué se trata, un desarrollo con pocas ideas ordenadas, y un cierre que repite la idea principal y dice qué sigue.</p>
      <table>
        <tr><th>Parte</th><th>Qué hace</th><th>Ejemplo (luces en la esquina)</th></tr>
        <tr><td>Principio</td><td>Engancha y presenta el tema</td><td>"¿Cuántos de ustedes evitan pasar por la esquina de noche?"</td></tr>
        <tr><td>Desarrollo</td><td>Dos a cuatro ideas, cada una con su prueba</td><td>El problema (robos), la solución (luces), el costo (por casa)</td></tr>
        <tr><td>Cierre</td><td>Repite la idea y pide algo concreto</td><td>"Con $ 15.000 por casa recuperamos la esquina. Votemos hoy."</td></tr>
      </table>
      <p><strong>Pocas ideas:</strong> el público recuerda pocas cosas. Es mejor contar bien 3 ideas que mencionar 10. Lo que no entra, va a un documento aparte o se responde en las preguntas.</p>
      <p><strong>Para presentar resultados</strong> (un informe, un análisis), empezá por la conclusión y después mostrá cómo llegaste. La gente ocupada quiere saber primero qué encontraste.</p>
      <p>Por ejemplo, "Recomiendo reforzar la sucursal Norte, que creció todos los meses" como primera diapositiva de un informe es mejor que empezar por la metodología.</p>` },
    { titulo: "El guion: una idea por diapositiva", html: `
      <p class="idea">Antes de abrir el programa, armá el guion en papel o en un documento: una línea por diapositiva, con la idea que tiene que transmitir. Recién después pasás a diseñar.</p>
      <pre><code>1. Portada: "Recuperemos la esquina"
2. La pregunta: ¿quién evita pasar de noche?
3. El problema: 4 robos en 6 meses (mapa de la cuadra)
4. Por qué pasa: la esquina no tiene luz
5. La solución: 3 luces con sensor
6. El costo: $ 15.000 por casa
7. Cierre: votemos hoy</code></pre>
      <p><strong>Una idea por diapositiva:</strong> si una diapositiva tiene dos ideas, partila en dos. Más diapositivas con poco contenido se siguen mejor que pocas diapositivas llenas.</p>
      <table>
        <tr><th>Regla práctica</th><th>Por qué</th></tr>
        <tr><td>Un minuto por diapositiva, más o menos</td><td>Para calcular cuántas entran en tu tiempo</td></tr>
        <tr><td>El título de cada diapositiva dice la idea</td><td>"4 robos en 6 meses" en vez de "Datos"</td></tr>
        <tr><td>Leer solo los títulos cuenta la historia</td><td>Es la prueba de que el orden funciona</td></tr>
      </table>
      <p>Por ejemplo, si leés en voz alta solo los títulos de tu guion y se entiende la historia completa, la estructura está bien. Si no, falta o sobra algo.</p>
      <p>La IA te puede ayudar a armar el guion (el curso de prompts de este sitio explica cómo pedírselo), pero la idea principal y los datos son tuyos: revisá todo.</p>` },
  ],
  practica: [
    "Elegí un tema para presentar y respondé las 3 preguntas: público, qué querés que hagan y tu idea en una oración. Anotá la oración y contá cuántas palabras tiene.",
    "Armá el guion en papel con una línea por diapositiva y principio, desarrollo y cierre. Anotá cuántas diapositivas te quedaron y cuánto duraría a un minuto cada una.",
    "Leé en voz alta solo los títulos de tu guion a otra persona. Anotá si entendió la historia sin más explicación.",
  ],
  recursos: [
    { t: "Google: cómo usar Presentaciones de Google", url: "https://support.google.com/docs/answer/2763168?hl=es" },
    { t: "Microsoft: ayuda y formación de PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint" },
  ],
  quiz: [
    { q: "Tenés que hacer una presentación. ¿Qué hacés primero?", opciones: ["Abrís el programa y elegís un tema","Buscás imágenes lindas","Respondés quién es el público, qué querés que hagan y tu idea en una oración","Hacés la portada"], correcta: 2, explicacion: "Sin tener claro el mensaje, las diapositivas salen desordenadas. Elegir un tema tienta porque es lo visible, pero va después." },
    { q: "No podés decir tu idea principal en una oración. ¿Qué concluís?", opciones: ["Que todavía no está clara y conviene pensarla antes de armar diapositivas","Que necesitás más diapositivas","Que el tema es muy complejo para presentar","Que no importa"], correcta: 0, explicacion: "Una idea clara se puede decir corta. Más diapositivas tientan para \"explicar todo\", pero sin idea clara solo suman confusión." },
    { q: "Presentás un proyecto en una entrevista de trabajo. ¿Qué quiere saber el público?", opciones: ["Todos los detalles técnicos","Tu historia de vida","Cuántas diapositivas hiciste","Qué hiciste vos y qué resultado tuvo"], correcta: 3, explicacion: "El entrevistador quiere ver tu aporte. Todos los detalles tientan para mostrar que sabés, pero se pierde lo importante." },
    { q: "¿Qué tiene que hacer el cierre de una presentación?", opciones: ["Mostrar un \"Gracias\" y nada más","Repetir la idea principal y decir qué sigue o qué pedís","Agregar ideas nuevas","Pedir disculpas por el tiempo"], correcta: 1, explicacion: "El cierre es lo que el público se lleva. Un \"Gracias\" solo tienta porque es la costumbre, pero desperdicia el momento más recordado." },
    { q: "Tenés 10 ideas para una presentación de 10 minutos. ¿Qué hacés?", opciones: ["Metés las 10 rápido","Hacés 30 diapositivas","Elegís 2 a 4 y las contás bien; el resto va aparte o a las preguntas","Hablás más rápido"], correcta: 2, explicacion: "El público recuerda pocas cosas. Meter las 10 ideas tienta para no dejar nada afuera, pero no se recuerda ninguna." },
    { q: "Presentás los resultados de un análisis a tu jefa. ¿Por dónde empezás?", opciones: ["Por la conclusión, y después mostrás cómo llegaste","Por la metodología","Por los datos crudos","Por tu currículum"], correcta: 0, explicacion: "La gente ocupada quiere saber primero qué encontraste. La metodología tienta porque es el orden en que trabajaste, pero no el que necesita quien escucha." },
    { q: "¿Cuándo armás el guion?", opciones: ["Después de diseñar todas las diapositivas","Mientras presentás","No hace falta guion","Antes de abrir el programa, en papel o en un documento"], correcta: 3, explicacion: "El guion ordena las ideas antes de diseñar. Diseñar primero tienta porque es más entretenido, pero después cuesta reordenar." },
    { q: "Una diapositiva tiene dos ideas distintas. ¿Qué hacés?", opciones: ["Achicás la letra para que entre todo","La partís en dos diapositivas","Sacás una idea sin pensar","La dejás así"], correcta: 1, explicacion: "Una idea por diapositiva se sigue mejor. Achicar la letra tienta para que entre, pero nadie la puede leer." },
    { q: "Tenés 12 minutos para presentar. ¿Cuántas diapositivas calculás, con la regla práctica?", opciones: ["Unas 50","Unas 3","Unas 12","Una sola"], correcta: 2, explicacion: "Alrededor de un minuto por diapositiva. 50 tientan para mostrar mucho, pero no da el tiempo para explicarlas." },
    { q: "El título de tu diapositiva dice \"Datos\". ¿Cómo lo mejorás?", opciones: ["Con la idea: \"4 robos en 6 meses\"","\"Datos importantes\"","\"Información\"","\"Diapositiva 3\""], correcta: 0, explicacion: "Un título con la idea se entiende sin leer el resto. \"Datos importantes\" tienta, pero sigue sin decir qué muestran." },
    { q: "¿Cómo comprobás que el orden de tu presentación funciona?", opciones: ["Contás las diapositivas","Mirás si tiene colores","Preguntás si es larga","Leés solo los títulos en voz alta: tienen que contar la historia"], correcta: 3, explicacion: "Si los títulos solos cuentan la historia, el orden está bien. Contar las diapositivas tienta, pero no dice si se entiende." },
    { q: "Le pediste a la IA un guion para tu presentación. ¿Qué revisás vos?", opciones: ["Nada, la IA lo hace bien","Que la idea principal y los datos sean tuyos y correctos","Solo la ortografía","Que tenga muchas diapositivas"], correcta: 1, explicacion: "La IA puede inventar datos o perder tu idea. Confiar sin revisar tienta por rápido, pero el que presenta y responde las preguntas sos vos." },
  ],
},
{
  id: "diseno",
  icono: "🎨",
  titulo: "Diapositivas que se leen de un vistazo",
  nivel: "Intermedio",
  objetivos: [
    "Escribir diapositivas con poco texto: título con la idea y pocas palabras clave",
    "Usar tamaños de letra que se lean desde el fondo de la sala",
    "Elegir imágenes que expliquen, alineadas y sin distraer",
  ],
  lecciones: [
    { titulo: "Menos texto", html: `
      <p class="idea">Una diapositiva tiene que entenderse en pocos segundos. Si tiene un párrafo, el público lo lee en vez de escucharte. Poné en la diapositiva lo que se ve, y decí vos lo que se explica.</p>
      <table>
        <tr><th>Diapositiva llena</th><th>Diapositiva clara</th></tr>
        <tr><td>"En los últimos seis meses, en la esquina de Mitre y Belgrano, se registraron un total de cuatro robos a vecinos, principalmente durante la noche, debido a la falta de iluminación."</td><td>Título: "4 robos en 6 meses"<br>Debajo: un mapa de la esquina con 4 marcas</td></tr>
      </table>
      <p><strong>Una guía práctica:</strong></p>
      <ul>
        <li>El título dice la idea, como una oración corta.</li>
        <li>Si hay viñetas, que sean pocas (3 o 4) y de pocas palabras cada una.</li>
        <li>Nada de párrafos: si necesitás que lean algo largo, va en un documento aparte.</li>
        <li>Una imagen, un número grande o un gráfico muchas veces dicen más que el texto.</li>
      </ul>
      <p><strong>Las notas del orador</strong> son el lugar para lo que vas a decir (módulo 4): debajo de cada diapositiva hay un espacio que solo ves vos al presentar.</p>
      <p>Por ejemplo, un número solo, enorme, en el medio de la diapositiva ("$ 15.000 por casa") se recuerda mucho más que el mismo dato dentro de una lista de cinco viñetas.</p>` },
    { titulo: "Tamaño, alineación y espacio", html: `
      <p class="idea">Lo que se ve bien en tu computadora puede ser ilegible desde el fondo de una sala. Letra grande, cosas alineadas y espacio libre hacen que la diapositiva se vea ordenada y se lea de lejos.</p>
      <table>
        <tr><th>Elemento</th><th>Tamaño orientativo</th></tr>
        <tr><td>Título</td><td>32 a 44 puntos</td></tr>
        <tr><td>Texto o viñetas</td><td>Al menos 24 puntos</td></tr>
        <tr><td>Fuentes y notas al pie</td><td>Al menos 14 puntos</td></tr>
      </table>
      <p>Si el texto no entra con letra de 24, no achiques la letra: sacá texto o partí la diapositiva en dos.</p>
      <p><strong>Alineación:</strong> las cajas y las imágenes alineadas entre sí dan orden. Los programas muestran guías (líneas de color) cuando arrastrás algo y queda alineado con otra cosa: aprovechalas.</p>
      <p><strong>Espacio libre:</strong> no llenes cada rincón. El espacio vacío alrededor de una idea hace que se destaque.</p>
      <p><strong>Animaciones y transiciones:</strong> úsalas poco o nada. Una animación para mostrar las viñetas de a una puede servir; letras que giran y vuelan distraen y hacen la presentación más lenta.</p>
      <p>Por ejemplo, una prueba simple: mirá tu diapositiva desde 3 metros de la pantalla de tu computadora. Si no la leés cómoda, el público del fondo tampoco.</p>` },
    { titulo: "Imágenes que explican", html: `
      <p class="idea">Una buena imagen explica algo: muestra el lugar, el producto, el problema. Una imagen puesta "para que no quede vacío" distrae. Antes de agregar una, preguntate qué aporta a la idea de esa diapositiva.</p>
      <table>
        <tr><th>Imagen que aporta</th><th>Imagen que distrae</th></tr>
        <tr><td>Foto de la esquina oscura de noche</td><td>Foto genérica de "personas felices" de un banco de imágenes</td></tr>
        <tr><td>El producto que vendés, bien iluminado</td><td>Íconos decorativos en cada esquina</td></tr>
        <tr><td>Un mapa con los lugares marcados</td><td>Un GIF animado de chiste</td></tr>
      </table>
      <p><strong>Cómo usarlas bien:</strong></p>
      <ul>
        <li>Grandes: una imagen chiquita en un rincón no se ve. Mejor a media pantalla o completa.</li>
        <li>Sin deformar: achicá desde las esquinas.</li>
        <li>Con buena resolución: una imagen pixelada se ve peor en un proyector.</li>
        <li>Con permiso: fotos propias, de bancos de imágenes libres o con la fuente citada.</li>
        <li>Con texto alternativo (módulo 5), para que la presentación sea accesible.</li>
      </ul>
      <p><strong>Texto sobre una imagen:</strong> si ponés texto encima de una foto, agregale una franja de color detrás del texto o elegí una zona lisa de la foto. Sin eso, el texto se pierde.</p>
      <p>Por ejemplo, si presentás tu emprendimiento de tortas, una foto grande y bien sacada de la torta vale más que tres diapositivas con la lista de ingredientes.</p>` },
  ],
  practica: [
    "Tomá una diapositiva con un párrafo (tuya o inventada) y reescribila con un título que diga la idea y 3 viñetas cortas o una imagen. Contá las palabras antes y después.",
    "Revisá el tamaño de letra de todas tus diapositivas y subí a 24 puntos o más lo que esté más chico. Anotá cuántas diapositivas tuviste que partir.",
    "Revisá las imágenes de tu presentación y sacá las que no aportan a la idea. Anotá cuántas sacaste y cuántas quedaron.",
  ],
  recursos: [
    { t: "Microsoft: ayuda y formación de PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint" },
    { t: "Google: cómo usar Presentaciones de Google", url: "https://support.google.com/docs/answer/2763168?hl=es" },
  ],
  quiz: [
    { q: "Tu diapositiva tiene un párrafo de 5 líneas. ¿Qué hacés?", opciones: ["Achicás la letra","Agregás otro párrafo","Dejás un título con la idea y pocas palabras o una imagen; el resto lo decís vos","Lo leés en voz alta tal cual"], correcta: 2, explicacion: "El público lee o escucha, no las dos cosas. Leerlo en voz alta tienta para que nadie se pierda, pero aburre y duplica." },
    { q: "¿Cuántas viñetas conviene por diapositiva?", opciones: ["Pocas: 3 o 4 de pocas palabras","10 o más","Una sola palabra siempre","Todas las que entren"], correcta: 0, explicacion: "Pocas viñetas se leen de un vistazo. Todas las que entren tienta para aprovechar el espacio, pero satura." },
    { q: "Querés que el público recuerde un dato clave. ¿Cómo lo mostrás?", opciones: ["Dentro de una lista de cinco viñetas","En letra chica al pie","En un párrafo","Un número grande solo en el medio de la diapositiva"], correcta: 3, explicacion: "Un número solo y grande se recuerda. Dentro de la lista tienta por ordenado, pero se pierde entre los otros datos." },
    { q: "¿Dónde ponés lo que vas a decir en cada diapositiva?", opciones: ["En la diapositiva, en letra chica","En las notas del orador","En un papel aparte sin orden","No lo preparás"], correcta: 1, explicacion: "Las notas las ves vos y el público no. Ponerlo en la diapositiva tienta para tenerlo a mano, pero el público lo lee." },
    { q: "Tu texto no entra con letra de 24. ¿Qué hacés?", opciones: ["Bajás la letra a 12","Achicás los márgenes a cero","Sacás texto o partís la diapositiva en dos","Lo dejás que se corte"], correcta: 2, explicacion: "La letra chica no se lee de lejos. Bajarla a 12 tienta porque resuelve el espacio, pero el público del fondo no ve nada." },
    { q: "¿Cómo comprobás si tu diapositiva se lee desde el fondo de la sala?", opciones: ["La mirás desde unos 3 metros de la pantalla","La mirás de cerca","Le preguntás a la IA","Contás las palabras"], correcta: 0, explicacion: "La distancia simula al público. Mirarla de cerca tienta porque así la armaste, pero ahí todo se lee." },
    { q: "¿Para qué sirven las guías de color que aparecen al arrastrar algo?", opciones: ["Para decorar","Para borrar","Para animar","Para alinear las cosas entre sí"], correcta: 3, explicacion: "Las guías muestran cuándo algo queda alineado. Pensar que decoran tienta, pero no se ven al presentar." },
    { q: "Querés que cada letra del título entre girando. ¿Qué pensás?", opciones: ["Que queda profesional","Que distrae: las animaciones conviene usarlas poco o nada","Que el público presta más atención","Que es obligatorio"], correcta: 1, explicacion: "Las animaciones llamativas distraen del contenido. Que llama la atención tienta, pero la atención va a la animación, no a la idea." },
    { q: "Tenés una foto genérica de \"personas felices\" en una diapositiva sobre robos. ¿Qué hacés?", opciones: ["La dejás para que no quede vacía","Agregás más fotos parecidas","La cambiás por una que explique, como una foto de la esquina o un mapa","La ponés de fondo"], correcta: 2, explicacion: "La imagen tiene que aportar a la idea. Dejarla para que no quede vacía tienta, pero distrae del tema." },
    { q: "Tu imagen se ve pixelada en el proyector. ¿Qué pasó?", opciones: ["Tiene poca resolución: hay que usar una de mejor calidad","El proyector está roto","Hay que achicarla a un rincón","Es normal"], correcta: 0, explicacion: "Una imagen chica agrandada se pixela. Culpar al proyector tienta, pero en la pantalla grande se nota la calidad." },
    { q: "Pusiste texto blanco sobre una foto con zonas claras y no se lee. ¿Qué hacés?", opciones: ["Achicás el texto","Cambiás a letra amarilla","Lo dejás así","Agregás una franja de color detrás del texto o lo ponés en una zona lisa"], correcta: 3, explicacion: "La franja da contraste. La letra amarilla tienta para que resalte, pero sobre zonas claras se pierde igual." },
    { q: "Presentás tu emprendimiento de tortas. ¿Qué diapositiva vale más?", opciones: ["Tres diapositivas con la lista de ingredientes","Una foto grande y bien sacada de una torta","Un párrafo sobre la historia de la repostería","Íconos de tortas en cada esquina"], correcta: 1, explicacion: "Una buena foto muestra el producto. Los ingredientes tientan para mostrar calidad, pero no generan ganas como una foto." },
  ],
},
{
  id: "datos",
  icono: "📊",
  titulo: "Mostrar números y gráficos",
  nivel: "Intermedio",
  objetivos: [
    "Elegir el gráfico justo para comparar, mostrar una evolución o partes de un total",
    "Poner en el título del gráfico la conclusión y resaltar solo lo importante",
    "Simplificar tablas y números para que se entiendan en segundos",
  ],
  lecciones: [
    { titulo: "Un gráfico, una idea", html: `
      <p class="idea">En una presentación, cada gráfico tiene que demostrar una sola idea, y el título dice cuál. El público no va a estudiar el gráfico como en un informe: tiene unos segundos.</p>
      <table>
        <tr><th>Querés mostrar</th><th>Gráfico</th></tr>
        <tr><td>Comparar cantidades</td><td>Barras o columnas</td></tr>
        <tr><td>Cómo cambia algo en el tiempo</td><td>Líneas</td></tr>
        <tr><td>Partes de un total, si son 2 o 3</td><td>Torta (con cuidado) o una barra dividida</td></tr>
        <tr><td>Un solo número importante</td><td>Ningún gráfico: el número grande</td></tr>
      </table>
      <p><strong>El título dice la conclusión:</strong></p>
      <pre><code>Título que describe:   Ventas por sucursal, enero a junio
Título que concluye:   Norte creció todos los meses y en junio superó a Centro</code></pre>
      <p>Con el título que concluye, el público sabe qué mirar en el gráfico antes de mirarlo.</p>
      <p><strong>De dónde sacar el gráfico:</strong> hacelo en una planilla (Excel o Google Sheets) y pegalo en la presentación. En Google Slides podés insertar un gráfico vinculado a una hoja de Google Sheets y actualizarlo si cambian los datos. Los cursos de Excel y de Datos con IA de este sitio enseñan a hacerlos.</p>
      <p>Por ejemplo, si un gráfico necesita que expliques durante dos minutos qué es cada eje, es demasiado complejo para una diapositiva: simplificalo o partilo en dos.</p>` },
    { titulo: "Resaltar lo importante", html: `
      <p class="idea">En un gráfico, todo lo que no ayuda a ver la idea es ruido: cuadrículas, leyendas largas, muchos colores. Sacá el ruido y resaltá con color solo lo que importa.</p>
      <table>
        <tr><th>Sacá o simplificá</th><th>Por qué</th></tr>
        <tr><td>Cuadrícula de fondo</td><td>Compite con los datos</td></tr>
        <tr><td>Efectos 3D y sombras</td><td>Distorsionan las proporciones</td></tr>
        <tr><td>Muchos colores</td><td>No se sabe qué mirar</td></tr>
        <tr><td>Leyenda separada</td><td>Mejor poner el nombre al lado de cada línea o barra</td></tr>
      </table>
      <p><strong>El truco del color:</strong> todo en gris, y solo lo importante en un color fuerte. Si la idea es "Norte creció", la línea de Norte va en color y las otras sucursales en gris.</p>
      <pre><code>Centro  ─────────────── (gris)
Sur     ─────────────── (gris)
Norte   ───────────────▲ (color fuerte)   ← acá mira el público</code></pre>
      <p><strong>Los ejes honestos:</strong> en un gráfico de barras, el eje vertical empieza en 0. Si empieza en otro número, una diferencia chica parece enorme y es engañoso.</p>
      <p>Por ejemplo, podés mostrar el mismo gráfico dos veces seguidas: primero todo en gris, y en la diapositiva siguiente con la línea de Norte resaltada. El público ve el cambio y entiende el punto.</p>` },
    { titulo: "Números y tablas en pantalla", html: `
      <p class="idea">Una tabla con muchas filas y columnas no se lee en una diapositiva. En pantalla, menos números y más redondeados: el detalle completo va en un documento o un anexo.</p>
      <table>
        <tr><th>En un informe</th><th>En una diapositiva</th></tr>
        <tr><td>$ 1.670.050</td><td>$ 1,7 millones</td></tr>
        <tr><td>Tabla de 12 filas por 6 columnas</td><td>Las 3 filas que importan, o un gráfico</td></tr>
        <tr><td>27,384%</td><td>27%</td></tr>
      </table>
      <p><strong>Dar escala a los números:</strong> un número suelto dice poco. Comparalo con algo conocido:</p>
      <pre><code>"Perdemos 2.000 litros de agua por mes"
→ "Perdemos 2.000 litros por mes: 10 bañaderas llenas"</code></pre>
      <p><strong>Fuente:</strong> poné de dónde sale cada dato, en letra chica al pie (al menos 14 puntos). Da confianza y te protege si alguien pregunta.</p>
      <p><strong>Si tenés que mostrar una tabla:</strong> pocas filas, los números alineados a la derecha, y resaltá la fila o el número importante.</p>
      <p>Por ejemplo, si te preguntan por un número que no está en la diapositiva, tené el detalle en una diapositiva oculta al final o en el documento completo: lo mostrás solo si hace falta.</p>` },
  ],
  practica: [
    "Elegí un dato o una planilla y hacé un gráfico para una diapositiva con un título que diga la conclusión. Anotá el título.",
    "Simplificá ese gráfico: sacá cuadrícula y 3D, todo en gris y lo importante en color. Mostrá las dos versiones a alguien y anotá cuál entendió más rápido.",
    "Tomá una tabla grande y dejá en la diapositiva solo lo importante, con números redondeados. Anotá cuántas filas y columnas tenía antes y después.",
  ],
  recursos: [
    { t: "Google: cómo usar Presentaciones de Google", url: "https://support.google.com/docs/answer/2763168?hl=es" },
    { t: "Microsoft: ayuda y formación de PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint" },
  ],
  quiz: [
    { q: "Querés mostrar cómo cambiaron las ventas en seis meses. ¿Qué gráfico usás?", opciones: ["Torta","Una tabla de 12 columnas","Líneas","Un número solo"], correcta: 2, explicacion: "Las líneas muestran la evolución. La torta tienta por conocida, pero sirve para partes de un total." },
    { q: "Tenés un solo dato importante: \"$ 15.000 por casa\". ¿Qué gráfico usás?", opciones: ["Ninguno: el número grande en la diapositiva","Una torta","Barras con una sola barra","Un gráfico de líneas"], correcta: 0, explicacion: "Un solo número no necesita gráfico. Una barra sola tienta para que haya algo visual, pero no agrega nada." },
    { q: "Tu gráfico se titula \"Ventas por sucursal\". ¿Cómo lo mejorás?", opciones: ["\"Gráfico de ventas\"","\"Datos 2025\"","Sin título","Con la conclusión: \"Norte creció todos los meses y en junio superó a Centro\""], correcta: 3, explicacion: "El título con la conclusión dice qué mirar. \"Gráfico de ventas\" tienta porque describe, pero el público tiene que adivinar la idea." },
    { q: "Necesitás dos minutos para explicar los ejes de tu gráfico. ¿Qué concluís?", opciones: ["Que el público tiene que esforzarse","Que es demasiado complejo para una diapositiva: hay que simplificarlo","Que está perfecto","Que hay que hablar más rápido"], correcta: 1, explicacion: "En una presentación el público tiene segundos. Pensar que tienen que esforzarse tienta, pero se pierden y no vuelven." },
    { q: "Tu gráfico tiene cuadrícula, 3D y diez colores. ¿Qué hacés?", opciones: ["Agregás más colores","Lo dejás, se ve completo","Sacás lo que no ayuda y resaltás con color solo lo importante","Le ponés animación"], correcta: 2, explicacion: "Todo lo que no ayuda es ruido. Dejarlo porque se ve completo tienta, pero el público no sabe qué mirar." },
    { q: "Tu idea es \"Norte creció\". ¿Cómo coloreás las líneas?", opciones: ["Norte en un color fuerte y las demás en gris","Cada sucursal con un color fuerte distinto","Todas del mismo color fuerte","Todas en gris"], correcta: 0, explicacion: "El contraste dirige la mirada a Norte. Un color fuerte para cada una tienta para diferenciarlas, pero compiten entre sí." },
    { q: "¿Por qué conviene evitar los gráficos 3D?", opciones: ["Porque son difíciles de hacer","Porque no existen en Slides","Porque son aburridos","Porque distorsionan las proporciones"], correcta: 3, explicacion: "El 3D hace que partes iguales se vean distintas. Que son difíciles de hacer tienta como razón, pero el problema es que engañan." },
    { q: "En tu gráfico de barras, el eje vertical empieza en 400.000 y una diferencia chica parece enorme. ¿Qué hacés?", opciones: ["Lo dejás, es más dramático","Hacés que empiece en 0","Sacás el eje","Cambiás a 3D"], correcta: 1, explicacion: "En barras, el eje en 0 evita exagerar. Lo dramático tienta, pero engaña al público." },
    { q: "Tu diapositiva dice \"$ 1.670.050\". ¿Cómo lo mostrás en pantalla?", opciones: ["$ 1.670.050,00","Un millón seiscientos setenta mil cincuenta pesos","$ 1,7 millones","No lo mostrás"], correcta: 2, explicacion: "Redondeado se lee de un vistazo. Con todos los decimales tienta por exacto, pero en pantalla nadie lo procesa." },
    { q: "Querés que el público entienda \"2.000 litros por mes\". ¿Qué agregás?", opciones: ["Una comparación conocida: \"10 bañaderas llenas\"","Más decimales","El dato en otra unidad rara","Nada"], correcta: 0, explicacion: "La comparación da escala. Más decimales tientan por precisión, pero no ayudan a imaginar la cantidad." },
    { q: "¿Por qué poner la fuente de cada dato al pie?", opciones: ["Para llenar espacio","Porque lo pide el programa","No hace falta","Da confianza y te protege si alguien pregunta"], correcta: 3, explicacion: "La fuente respalda el dato. Pensar que no hace falta tienta porque nadie la lee, pero cuando preguntan, salva." },
    { q: "Te preguntan por un número que no está en la diapositiva. ¿Cómo te preparás?", opciones: ["Metiendo todos los números en todas las diapositivas","Con el detalle en una diapositiva oculta al final o en el documento completo","Inventando el número","Diciendo que no sabés nunca"], correcta: 1, explicacion: "El detalle aparte está disponible sin saturar. Meter todo en las diapositivas tienta para estar cubierto, pero satura a todos." },
  ],
},
{
  id: "presentar",
  icono: "🎤",
  titulo: "Presentar en vivo",
  nivel: "Intermedio",
  objetivos: [
    "Escribir notas del orador con palabras clave y usarlas en la vista del presentador",
    "Ensayar en voz alta, medir el tiempo y ajustar la presentación a lo pedido",
    "Manejar los nervios y responder preguntas, incluso las que no sabés",
  ],
  lecciones: [
    { titulo: "Notas del orador y vista del presentador", html: `
      <p class="idea">Las <strong>notas del orador</strong> son un espacio debajo de cada diapositiva para escribir lo que vas a decir. Al presentar, la <strong>vista del presentador</strong> te las muestra en tu pantalla mientras el público ve solo la diapositiva.</p>
      <table>
        <tr><th>Ves vos (vista del presentador)</th><th>Ve el público</th></tr>
        <tr><td>La diapositiva actual y la siguiente</td><td>Solo la diapositiva actual</td></tr>
        <tr><td>Tus notas</td><td>Nada de las notas</td></tr>
        <tr><td>Un reloj con el tiempo que pasó</td><td>Nada del reloj</td></tr>
      </table>
      <p><strong>Cómo escribir buenas notas:</strong> palabras clave y datos, no un texto para leer. Si leés, perdés el contacto con el público y sonás como un robot.</p>
      <pre><code>Diapositiva 3 – "4 robos en 6 meses"
· Contar el caso de la vecina del 420
· Dato: 3 de 4 robos fueron después de las 21
· Pasar a: ¿por qué pasa?</code></pre>
      <p><strong>Dónde está:</strong> en Google Slides, en el botón Presentar → Vista del presentador; en PowerPoint, en la pestaña Presentación con diapositivas → Vista Moderador. Para pasar de diapositiva sirven las flechas del teclado o la barra espaciadora.</p>
      <p>Por ejemplo, si te olvidás qué venía después, la vista del presentador te muestra la diapositiva siguiente: echás una mirada y seguís sin que el público lo note.</p>` },
    { titulo: "Ensayar y medir el tiempo", html: `
      <p class="idea">Una presentación sale bien cuando la ensayaste <strong>en voz alta</strong> al menos dos o tres veces. Leerla en silencio no cuenta: al hablar aparecen las partes que no fluyen y te das cuenta de cuánto dura de verdad.</p>
      <table>
        <tr><th>Ensayo</th><th>Para qué</th></tr>
        <tr><td>1.º, solo, en voz alta</td><td>Encontrar lo que no se entiende y cortar</td></tr>
        <tr><td>2.º, con reloj</td><td>Medir el tiempo y ajustar</td></tr>
        <tr><td>3.º, con alguien que escuche (o grabándote con el celular)</td><td>Ver muletillas, velocidad y si se entiende</td></tr>
      </table>
      <p><strong>El tiempo es un límite, no una sugerencia.</strong> Si te dieron 10 minutos, apuntá a terminar en 8 o 9: en vivo siempre se tarda un poco más que en el ensayo, y queda lugar para preguntas.</p>
      <pre><code>Ensayo 1: 14 min  → sobran 4 min
Corto: la diapositiva de historia y 2 ejemplos
Ensayo 2: 10 min  → justo, sin margen
Corto: una viñeta por diapositiva
Ensayo 3: 8 min 30 s  → listo</code></pre>
      <p><strong>Muletillas:</strong> son palabras que se repiten sin aportar, como "eh", "o sea", "digamos", "¿no?". Una pausa en silencio queda mejor que una muletilla.</p>
      <p>Por ejemplo, grabarte con el celular y escucharte una vez es la forma más rápida de notar que dijiste "o sea" doce veces.</p>` },
    { titulo: "Nervios, voz y preguntas", html: `
      <p class="idea">Los nervios son normales y casi siempre se notan menos de lo que sentís. Lo que más ayuda es la preparación: conocer bien el principio y tener un plan para las preguntas.</p>
      <ul>
        <li><strong>Sabete de memoria el principio:</strong> los primeros 30 segundos son los de más nervios. Si los tenés firmes, el resto arranca solo.</li>
        <li><strong>Respirá antes de empezar:</strong> una respiración lenta y profunda baja la velocidad.</li>
        <li><strong>Hablá más lento de lo que te parece:</strong> con nervios todos aceleramos.</li>
        <li><strong>Mirá al público, no a la pantalla:</strong> repartí la mirada entre distintas personas.</li>
        <li><strong>Llegá antes:</strong> probá el proyector, el sonido y la conexión.</li>
      </ul>
      <p><strong>Las preguntas:</strong></p>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>Una pregunta que sabés</td><td>Respondé corto y volvé a tu idea</td></tr>
        <tr><td>Una pregunta que no sabés</td><td>"No lo sé, lo averiguo y te lo mando." Nunca inventes.</td></tr>
        <tr><td>Una pregunta larga o confusa</td><td>Repetila con tus palabras para confirmar que entendiste</td></tr>
        <tr><td>Alguien que discute</td><td>Agradecé el punto y ofrecé seguir la charla después</td></tr>
      </table>
      <p>Por ejemplo, anotá antes las 3 preguntas más probables y prepará la respuesta. Muchas veces te preguntan justo eso.</p>` },
  ],
  practica: [
    "Escribí notas del orador con 2 o 3 palabras clave en cada diapositiva y presentá usando la vista del presentador. Anotá si pudiste seguir sin leer.",
    "Ensayá en voz alta con reloj tres veces. Anotá el tiempo de cada ensayo y qué cortaste entre uno y otro.",
    "Grabate con el celular presentando y escuchate. Anotá cuántas muletillas dijiste, volvé a grabar y compará los dos números.",
    "Anotá las 3 preguntas más probables de tu público y escribí una respuesta de dos líneas para cada una.",
  ],
  recursos: [
    { t: "Google: mostrar diapositivas (con notas del orador)", url: "https://support.google.com/docs/answer/1696787?hl=es" },
    { t: "Google: combinaciones de teclas de Presentaciones", url: "https://support.google.com/docs/answer/1696717?hl=es" },
    { t: "Microsoft: ayuda y formación de PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint" },
  ],
  quiz: [
    { q: "Querés tener a mano lo que vas a decir sin que el público lo vea. ¿Dónde lo ponés?", opciones: ["En la diapositiva, en letra chica","En un cartel detrás del público","En las notas del orador, y presentás con la vista del presentador","En un mensaje de celular"], correcta: 2, explicacion: "Las notas solo las ves vos en la vista del presentador. La letra chica en la diapositiva tienta por práctica, pero el público la ve e intenta leerla." },
    { q: "Tu compañera escribió en las notas todo el texto palabra por palabra y lo lee. ¿Qué pasa?", opciones: ["Pierde el contacto con el público y suena como un robot","Queda más profesional","El público presta más atención","No pasa nada"], correcta: 0, explicacion: "Las notas sirven con palabras clave, no para leer. Que queda más seguro tienta, pero leer aleja al público." },
    { q: "Te olvidaste qué venía después. ¿Qué te ayuda sin que el público lo note?", opciones: ["Volver a la portada","Pedir disculpas y salir","Preguntarle al público","La vista del presentador, que muestra la diapositiva siguiente"], correcta: 3, explicacion: "La vista del presentador te muestra lo que sigue. Pedir disculpas tienta por honesto, pero corta el ritmo sin necesidad." },
    { q: "Tenés que ensayar tu presentación. ¿Cuál de estos ensayos cuenta de verdad?", opciones: ["Leerla en silencio","Decirla en voz alta, con reloj","Mirar las diapositivas","Pensarla en la cama"], correcta: 1, explicacion: "En voz alta aparece lo que no fluye y el tiempo real. Leer en silencio tienta porque es rápido, pero no mide nada." },
    { q: "Te dieron 10 minutos. ¿Para cuánto preparás la presentación?", opciones: ["Para 12, por si acaso","Para 10 exactos","Para 8 o 9 minutos","Para 20, y hablás rápido"], correcta: 2, explicacion: "En vivo se tarda más que en el ensayo, y quedan preguntas. Preparar 10 minutos exactos tienta, pero no deja margen." },
    { q: "Tu primer ensayo duró 14 minutos y tenés 10. ¿Qué hacés?", opciones: ["Cortás contenido: lo que menos aporta a tu idea","Hablás más rápido","Pedís más tiempo el día de la presentación","Dejás todo y ves qué pasa"], correcta: 0, explicacion: "Cortar mantiene el ritmo. Hablar más rápido tienta porque no hay que decidir qué sacar, pero el público no te sigue." },
    { q: "Al grabarte notás que decís \"o sea\" muchas veces. ¿Qué lo reemplaza mejor?", opciones: ["Otra muletilla, como \"digamos\"","Hablar sin parar","Un chiste","Una pausa en silencio"], correcta: 3, explicacion: "La pausa ordena y no distrae. Cambiar de muletilla tienta, pero es el mismo problema con otra palabra." },
    { q: "Los primeros segundos son los de más nervios. ¿Qué te ayuda?", opciones: ["Improvisar el principio","Saberte de memoria el principio","Empezar pidiendo disculpas por los nervios","Leer la primera diapositiva"], correcta: 1, explicacion: "Con el principio firme, el resto arranca solo. Disculparse tienta por sincero, pero hace que el público busque los errores." },
    { q: "Si estás con nervios, ¿qué pasa casi siempre con tu velocidad al hablar?", opciones: ["Hablamos más lento","No cambia","Aceleramos: conviene hablar más lento de lo que parece","Nos quedamos mudos siempre"], correcta: 2, explicacion: "Los nervios aceleran. Pensar que no cambia tienta, pero al grabarte vas a notar que vas más rápido." },
    { q: "Te hacen una pregunta que no sabés responder. ¿Qué hacés?", opciones: ["Decís que no lo sabés y que lo averiguás y se lo mandás","Inventás algo que suene bien","Cambiás de tema sin decir nada","Decís que la pregunta no importa"], correcta: 0, explicacion: "Reconocer y comprometerte da confianza. Inventar tienta para no quedar mal, pero si se descubre perdés toda la credibilidad." },
    { q: "Te hacen una pregunta larga y confusa. ¿Qué hacés primero?", opciones: ["Respondés lo que te parece","Le pedís que no pregunte más","Pasás a la siguiente diapositiva","La repetís con tus palabras para confirmar que entendiste"], correcta: 3, explicacion: "Repetirla evita responder otra cosa. Responder lo que te parece tienta por rápido, pero puede no ser lo que preguntaron." },
    { q: "Vas a presentar en una sala que no conocés. ¿Qué hacés antes?", opciones: ["Llegás justo para no ponerte nervioso","Llegás antes y probás el proyector, el sonido y la conexión","Confiás en que va a andar","Mandás la presentación por mail y no probás"], correcta: 1, explicacion: "Probar antes evita sorpresas. Confiar en que va a andar tienta, pero un cable que no anda te come los primeros minutos." },
  ],
},
{
  id: "compartir",
  icono: "📤",
  titulo: "Compartir y presentaciones accesibles",
  nivel: "Intermedio",
  objetivos: [
    "Elegir entre mandar un PDF, un enlace o un archivo editable según quién lo recibe",
    "Presentar en una videollamada compartiendo solo la ventana de la presentación",
    "Revisar una presentación con texto alternativo, contraste y orden de lectura",
  ],
  lecciones: [
    { titulo: "PDF, enlace o archivo", html: `
      <p class="idea">Antes de mandar una presentación, pensá qué tiene que poder hacer la otra persona: solo verla, comentarla o editarla. Eso decide el formato.</p>
      <table>
        <tr><th>Formato</th><th>Cuándo</th><th>Cuidado</th></tr>
        <tr><td>PDF</td><td>Para que la vean igual en cualquier dispositivo, sin cambiarla</td><td>Las animaciones y videos no funcionan</td></tr>
        <tr><td>Enlace de Google Slides o de OneDrive</td><td>Para trabajar con otros o mostrar la última versión</td><td>Revisá el permiso: lector, comentador o editor</td></tr>
        <tr><td>Archivo .pptx</td><td>Para que alguien la edite en PowerPoint</td><td>Si no tiene tus letras, se pueden ver distintas</td></tr>
      </table>
      <p><strong>Cómo bajar un PDF:</strong> en Google Slides, Archivo → Descargar → Documento PDF. En PowerPoint, Archivo → Exportar o Guardar como → PDF.</p>
      <p><strong>Los permisos de un enlace:</strong> "Lector" solo ve; "Comentador" puede dejar notas; "Editor" puede cambiar todo. Si mandás un enlace con permiso de editor a mucha gente, cualquiera puede borrar diapositivas sin querer.</p>
      <p><strong>Una presentación que se lee sola:</strong> si la van a leer sin vos (por ejemplo, la mandás antes de una reunión), puede necesitar un poco más de texto que la que se proyecta. Una opción es mandar el PDF con las notas del orador.</p>
      <p>Por ejemplo, para mandarle tu presentación a una empresa después de una entrevista, el PDF es lo más seguro: se ve igual en su computadora y no se puede cambiar.</p>` },
    { titulo: "Presentar en una videollamada", html: `
      <p class="idea">En una videollamada, el público te ve chiquito y la diapositiva grande. Compartí solo la ventana de la presentación, no la pantalla entera, y probá antes cómo se ve del otro lado.</p>
      <table>
        <tr><th>Compartir</th><th>Qué ven</th></tr>
        <tr><td>Pantalla completa</td><td>Todo: notificaciones, otras pestañas, mensajes</td></tr>
        <tr><td>Una ventana o una pestaña</td><td>Solo la presentación</td></tr>
      </table>
      <p><strong>Antes de la llamada:</strong></p>
      <ul>
        <li>Cerrá las pestañas y los programas que no uses, y silenciá las notificaciones.</li>
        <li>Si tenés una sola pantalla, la vista del presentador puede tapar la diapositiva: tené las notas impresas o en otro dispositivo.</li>
        <li>Probá con alguien (o abriendo la llamada desde el celular) que la letra se lea en una pantalla chica.</li>
        <li>Mirá a la cámara cuando hables, no a tu propia imagen.</li>
      </ul>
      <p><strong>Cada tanto, preguntá:</strong> en una llamada no ves las caras de duda. "¿Se entiende hasta acá?" o "¿Ven bien la pantalla?" mantienen al público conectado.</p>
      <p>Por ejemplo, si compartís la pantalla completa y te llega un mensaje privado, todos lo leen. Compartir solo la pestaña de la presentación lo evita.</p>` },
    { titulo: "Que la puedan usar todas las personas", html: `
      <p class="idea">Una presentación <strong>accesible</strong> la pueden usar también personas con baja visión, ceguera o daltonismo. La mayoría de los cambios son simples y además la mejoran para todos.</p>
      <table>
        <tr><th>Qué revisar</th><th>Cómo</th></tr>
        <tr><td>Texto alternativo</td><td>Una descripción corta de cada imagen o gráfico, que leen los lectores de pantalla</td></tr>
        <tr><td>Contraste</td><td>Letra oscura sobre fondo claro (o al revés); se puede medir con un comprobador de contraste</td></tr>
        <tr><td>No depender solo del color</td><td>Además del color, usá etiquetas o formas ("Norte ▲")</td></tr>
        <tr><td>Títulos únicos</td><td>Cada diapositiva con su título, distinto de los demás</td></tr>
        <tr><td>Orden de lectura</td><td>Que el lector de pantalla lea título primero y después el resto</td></tr>
      </table>
      <p>Un <strong>lector de pantalla</strong> es un programa que lee en voz alta lo que hay en la pantalla. Lo usan, por ejemplo, las personas ciegas.</p>
      <pre><code>Texto alternativo flojo:   "gráfico"
Texto alternativo útil:    "Líneas de ventas por sucursal. Norte crece
                            todos los meses y en junio supera a Centro."</code></pre>
      <p><strong>La herramienta que ayuda:</strong> PowerPoint trae un Comprobador de accesibilidad (Revisar → Comprobar accesibilidad) que marca imágenes sin texto alternativo y otros problemas. En Google Slides, el texto alternativo se agrega con clic derecho en la imagen → Texto alternativo.</p>
      <p>Por ejemplo, alrededor de 1 de cada 12 varones tiene algún tipo de daltonismo: si tu gráfico distingue a Norte solo por ser verde contra rojo, alguien en la sala no lo va a ver.</p>` },
  ],
  practica: [
    "Descargá tu presentación como PDF y abrila en el celular. Anotá si algo se ve distinto (animaciones, letras, videos).",
    "Compartí un enlace con permiso de \"Comentador\" a otra persona y pedile que deje un comentario. Anotá qué permiso usaste y si pudo comentar sin editar.",
    "Agregá texto alternativo a todas las imágenes y gráficos de tu presentación. Anotá cuántos tenían texto alternativo antes y después.",
    "Medí el contraste de tu letra y tu fondo con el comprobador de contraste de WebAIM. Anotá el resultado (por ejemplo 7:1) y si dice que pasa.",
  ],
  recursos: [
    { t: "Microsoft: presentaciones de PowerPoint accesibles", url: "https://support.microsoft.com/es-es/office/hacer-que-las-presentaciones-de-powerpoint-sean-accesibles-para-personas-con-discapacidades-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25" },
    { t: "Google: crear, ver o descargar archivos", url: "https://support.google.com/docs/answer/49114?hl=es" },
    { t: "WebAIM: comprobador de contraste (en inglés)", url: "https://webaim.org/resources/contrastchecker/" },
    { t: "W3C: consejos de diseño accesible (en inglés)", url: "https://www.w3.org/WAI/tips/designing/" },
  ],
  quiz: [
    { q: "Querés mandarle tu presentación a una empresa después de una entrevista. ¿Qué formato usás?", opciones: ["Un enlace con permiso de editor","Fotos de la pantalla","PDF","El archivo editable sin revisar"], correcta: 2, explicacion: "El PDF se ve igual en cualquier computadora y no se cambia. El enlace de editor tienta por fácil, pero cualquiera puede modificarla." },
    { q: "Tu presentación tiene animaciones y la mandaste en PDF. ¿Qué pasa?", opciones: ["Las animaciones no funcionan en el PDF","Se ven igual","El PDF no se abre","Se convierten en video"], correcta: 0, explicacion: "El PDF es una foto de cada diapositiva. Pensar que se ven igual tienta, pero si el mensaje depende de una animación, se pierde." },
    { q: "Querés que tus compañeros dejen notas sin poder cambiar las diapositivas. ¿Qué permiso das?", opciones: ["Editor","Lector","Ninguno","Comentador"], correcta: 3, explicacion: "Comentador deja notas sin editar. Editor tienta para que no haya trabas, pero pueden borrar algo sin querer." },
    { q: "Mandaste un enlace con permiso de editor a 30 personas. ¿Qué riesgo hay?", opciones: ["Ninguno","Que cualquiera borre o cambie diapositivas sin querer","Que el enlace se venza","Que no la puedan ver"], correcta: 1, explicacion: "Con muchos editores, un error de uno lo ven todos. Pensar que no hay riesgo tienta, pero basta un clic equivocado." },
    { q: "Tu presentación la van a leer sin vos antes de una reunión. ¿Qué tenés en cuenta?", opciones: ["Que tiene que ser igual a la proyectada","Que no importa el texto","Que puede necesitar más texto, o mandarla con las notas del orador","Que hay que sacarle los títulos"], correcta: 2, explicacion: "Sin vos, nadie explica. Mandarla igual que la proyectada tienta, pero puede no entenderse sola." },
    { q: "Vas a presentar en una videollamada. ¿Qué compartís?", opciones: ["Solo la ventana o la pestaña de la presentación","La pantalla completa","La cámara apuntando a la pantalla","Nada, la describís"], correcta: 0, explicacion: "Compartir solo la ventana evita que vean notificaciones y mensajes. La pantalla completa tienta por simple, pero muestra todo." },
    { q: "Tenés una sola pantalla y la vista del presentador tapa la diapositiva en la llamada. ¿Qué hacés?", opciones: ["Leés las notas desde la diapositiva","Presentás sin notas y sin preparar","Compartís la vista del presentador","Tenés las notas impresas o en otro dispositivo"], correcta: 3, explicacion: "Las notas en papel o en el celular resuelven. Compartir la vista del presentador tienta, pero el público ve tus notas." },
    { q: "En una videollamada no ves las caras del público. ¿Qué hacés?", opciones: ["Hablás sin parar","Preguntás cada tanto si se entiende y si ven bien","Apagás tu cámara","Subís el volumen"], correcta: 1, explicacion: "Preguntar reemplaza las caras que no ves. Hablar sin parar tienta para no perder tiempo, pero no sabés si te siguen." },
    { q: "Tu gráfico tiene como texto alternativo \"gráfico\". ¿Cómo lo mejorás?", opciones: ["\"Imagen de un gráfico\"","Dejándolo vacío","Diciendo qué muestra: \"Norte crece todos los meses y en junio supera a Centro\"","\"Gráfico importante\""], correcta: 2, explicacion: "El texto alternativo útil dice la idea. \"Imagen de un gráfico\" tienta porque describe, pero no da la información." },
    { q: "Tu gráfico distingue a Norte solo por ser verde y a Sur por ser rojo. ¿Qué problema hay?", opciones: ["Una persona con daltonismo puede no distinguirlos: falta una etiqueta o una forma","Ninguno","Que el verde es feo","Que hay pocos colores"], correcta: 0, explicacion: "No depender solo del color ayuda a todos. Pensar que no hay problema tienta, pero cerca de 1 de cada 12 varones tiene daltonismo." },
    { q: "Querés saber si tu presentación de PowerPoint tiene imágenes sin texto alternativo. ¿Qué usás?", opciones: ["El corrector ortográfico","Mirar cada imagen y adivinar","El modo presentación","El Comprobador de accesibilidad (Revisar → Comprobar accesibilidad)"], correcta: 3, explicacion: "El comprobador marca lo que falta. El corrector ortográfico tienta porque también revisa, pero solo mira las palabras." },
    { q: "Tres diapositivas tienen el mismo título \"Resultados\". ¿Qué cambiás?", opciones: ["Nada","Les das a cada una un título distinto que diga su idea","Les sacás el título","Las juntás en una con letra chica"], correcta: 1, explicacion: "Los títulos únicos ayudan a orientarse, también a quien usa un lector de pantalla. Sacar el título tienta para que no se repita, pero se pierde la idea." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu presentación",
  nivel: "Avanzado",
  objetivos: [
    "Armar una presentación completa de 5 a 8 minutos, desde el guion hasta el ensayo",
    "Evaluarla con una rúbrica y corregir lo que falla",
    "Presentarla a alguien, recibir devolución y hacer una segunda versión",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es una presentación real de 5 a 8 minutos sobre un tema que te sirva. Vas a usar todo el curso, en el mismo orden en que lo aprendiste.</p>
      <p><strong>Elegí uno de estos temas</strong> (o uno parecido):</p>
      <ul>
        <li>Presentarte en una entrevista: quién sos, qué sabés hacer y un logro.</li>
        <li>Proponer algo en tu barrio, escuela o club (como las luces de la esquina).</li>
        <li>Mostrar tu emprendimiento: qué vendés, a quién y por qué elegirte.</li>
        <li>Explicar un tema que sepas mucho a alguien que no sabe nada.</li>
      </ul>
      <table>
        <tr><th>Paso</th><th>Módulo</th><th>Entregable</th></tr>
        <tr><td>1. Público, objetivo y una oración</td><td>Planificar el mensaje</td><td>Las 3 respuestas</td></tr>
        <tr><td>2. Guion en papel</td><td>Planificar el mensaje</td><td>Una línea por diapositiva</td></tr>
        <tr><td>3. Diapositivas</td><td>Empezar y Diapositivas que se leen</td><td>5 a 9 diapositivas</td></tr>
        <tr><td>4. Al menos un número o gráfico</td><td>Mostrar números</td><td>Con título que concluye</td></tr>
        <tr><td>5. Notas y ensayo con reloj</td><td>Presentar en vivo</td><td>Tiempos de 3 ensayos</td></tr>
        <tr><td>6. PDF accesible</td><td>Compartir</td><td>PDF con texto alternativo</td></tr>
      </table>
      <p>Por ejemplo, para "Mostrar mi emprendimiento de tortas" en 6 minutos, el guion podría tener 7 diapositivas: portada, el problema del cliente, la solución, fotos, precios, cómo pedir y cierre.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si el trabajo está listo. Evaluá tu presentación con esta, antes y después de corregir.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Idea en una oración</td><td>Clara y se repite en el cierre</td><td>Existe, pero el cierre no la repite</td><td>No se puede decir</td></tr>
        <tr><td>Títulos que cuentan la historia</td><td>Leyendo solo títulos se entiende</td><td>La mitad de los títulos dicen la idea</td><td>Títulos tipo "Datos"</td></tr>
        <tr><td>Poco texto</td><td>Ningún párrafo; 4 viñetas como máximo</td><td>Alguna diapositiva cargada</td><td>Párrafos para leer</td></tr>
        <tr><td>Legibilidad</td><td>Texto de 24 puntos o más y buen contraste</td><td>Algún texto chico</td><td>No se lee a 3 metros</td></tr>
        <tr><td>Números o gráfico</td><td>Título que concluye, sin ruido</td><td>Gráfico correcto sin conclusión</td><td>Tabla gigante o gráfico 3D</td></tr>
        <tr><td>Tiempo</td><td>Dentro del tiempo con margen</td><td>Justo en el límite</td><td>Se pasa</td></tr>
        <tr><td>Accesibilidad</td><td>Todas las imágenes con texto alternativo</td><td>Algunas</td><td>Ninguna</td></tr>
      </table>
      <pre><code>Puntaje máximo: 14
12 a 14 → lista para presentar
8 a 11  → corregí los criterios con 0 o 1
0 a 7   → volvé al guion antes de tocar el diseño</code></pre>
      <p>Por ejemplo, si sacaste 0 en "Idea en una oración", no arregles los colores primero: sin idea clara, lo demás no alcanza.</p>` },
    { titulo: "Devolución y segunda versión", html: `
      <p class="idea">Toda presentación mejora con una devolución. Presentala a una persona, pedile que te diga qué entendió y qué cambiaría, y hacé una segunda versión.</p>
      <p><strong>Tres preguntas para la persona que te escucha:</strong></p>
      <ol>
        <li>¿Cuál fue la idea principal, en una oración? (Si no coincide con la tuya, el mensaje no llegó.)</li>
        <li>¿En qué parte te perdiste o te aburriste?</li>
        <li>¿Qué es lo primero que cambiarías?</li>
      </ol>
      <table>
        <tr><th>Versión 1</th><th>Devolución</th><th>Versión 2</th></tr>
        <tr><td>9 min 30 s</td><td>"Me perdí en la diapositiva de precios"</td><td>Precios en un número grande: 7 min 40 s</td></tr>
        <tr><td>Rúbrica 9/14</td><td>"No entendí cómo pedir"</td><td>Cierre con "pedí por mensaje al…": 13/14</td></tr>
      </table>
      <p><strong>Escuchá sin defenderte:</strong> la devolución no es un ataque. Anotá lo que te dicen, agradecé y después decidí qué cambiar.</p>
      <p><strong>Guardá las dos versiones:</strong> así podés comparar y ver cuánto mejoraste. Con el historial de versiones de Google Slides, o guardando una copia con otro nombre, no perdés la primera.</p>
      <p>Por ejemplo, si la persona dice que la idea fue "que las tortas son ricas" y la tuya era "que podés pedirlas por mensaje para cumpleaños", el cierre tiene que decirlo más claro.</p>` },
  ],
  practica: [
    "Elegí el tema, respondé las 3 preguntas del mensaje y armá el guion en papel. Anotá tu idea en una oración y cuántas diapositivas planeaste.",
    "Armá las diapositivas y evaluá la presentación con la rúbrica. Anotá el puntaje de cada criterio y el total sobre 14.",
    "Ensayá con reloj y presentásela a una persona. Anotá su respuesta a las 3 preguntas de la devolución y tu tiempo.",
    "Hacé la segunda versión, volvé a medir con la rúbrica y el reloj, y descargala como PDF con texto alternativo. Anotá el puntaje y el tiempo antes y después.",
  ],
  recursos: [
    { t: "Google: cómo usar Presentaciones de Google", url: "https://support.google.com/docs/answer/2763168?hl=es" },
    { t: "Microsoft: ayuda y formación de PowerPoint", url: "https://support.microsoft.com/es-es/powerpoint" },
    { t: "Google: mostrar diapositivas (con notas del orador)", url: "https://support.google.com/docs/answer/1696787?hl=es" },
    { t: "Microsoft: presentaciones de PowerPoint accesibles", url: "https://support.microsoft.com/es-es/office/hacer-que-las-presentaciones-de-powerpoint-sean-accesibles-para-personas-con-discapacidades-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25" },
  ],
  quiz: [
    { q: "Empezás tu proyecto final. ¿Cuál es el primer paso?", opciones: ["Elegir el tema de colores","Buscar fotos","Definir el público, el objetivo y la idea en una oración","Hacer la portada"], correcta: 2, explicacion: "El mensaje va antes que el diseño. Elegir colores tienta porque es lo visible, pero sin idea clara la presentación se desordena." },
    { q: "Tu proyecto tiene que durar entre 5 y 8 minutos. Con la regla práctica, ¿cuántas diapositivas planeás?", opciones: ["Entre 5 y 9, más o menos","30","1","50, si pasás rápido"], correcta: 0, explicacion: "Alrededor de un minuto por diapositiva. 30 tientan para mostrar mucho, pero no dan los tiempos." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una firma al pie","Un tipo de gráfico","Un tema de diapositivas","Una lista de criterios con puntaje para saber si el trabajo está listo"], correcta: 3, explicacion: "La rúbrica te dice qué mejorar. Confundirla con una firma tienta por el nombre, pero es una herramienta de evaluación." },
    { q: "Sacaste 0 en \"Idea en una oración\" y 2 en todo lo demás. ¿Qué arreglás primero?", opciones: ["Los colores","La idea: volvés al mensaje antes de tocar el diseño","Las animaciones","Nada, el total es alto"], correcta: 1, explicacion: "Sin idea clara, lo demás no alcanza. Que el total es alto tienta, pero el público se va sin saber qué decías." },
    { q: "Tu puntaje en la rúbrica es 9 sobre 14. ¿Qué hacés?", opciones: ["Presentás así","Empezás de cero todo","Corregís los criterios con 0 o 1 y volvés a medir","Cambiás de tema"], correcta: 2, explicacion: "Entre 8 y 11, se corrige lo que falló. Empezar de cero tienta para hacerlo perfecto, pero desperdicia lo que ya funciona." },
    { q: "Leyendo solo los títulos de tu presentación no se entiende la historia. ¿Qué criterio falla?", opciones: ["Títulos que cuentan la historia","Legibilidad","Tiempo","Accesibilidad"], correcta: 0, explicacion: "Los títulos tienen que decir la idea. Legibilidad tienta porque también es del texto, pero mira el tamaño, no el contenido." },
    { q: "Le preguntás a quien te escuchó cuál fue la idea principal y dice otra cosa. ¿Qué concluís?", opciones: ["Que la persona no prestó atención","Que está bien igual","Que hay que agregar diapositivas","Que el mensaje no llegó: hay que aclararlo, sobre todo en el cierre"], correcta: 3, explicacion: "Si no coincide, el mensaje no llegó. Culpar a la persona tienta, pero el público real va a entender lo mismo." },
    { q: "Te dan una devolución que no te gusta. ¿Qué hacés?", opciones: ["Discutís cada punto","La anotás, agradecés y después decidís qué cambiar","La ignorás","Rehacés todo enseguida"], correcta: 1, explicacion: "Escuchar sin defenderte te da la información. Discutir tienta para explicar tu intención, pero la persona deja de decirte cosas." },
    { q: "Tu versión 1 duró 9 min 30 s y tenías 8 como máximo. ¿Qué hacés para la versión 2?", opciones: ["Hablás más rápido","Pedís más tiempo","Cortás o simplificás la parte que menos se entiende y volvés a medir","Lo dejás así"], correcta: 2, explicacion: "Cortar lo que menos aporta y medir de nuevo. Hablar más rápido tienta, pero el público se pierde." },
    { q: "¿Por qué guardar la primera versión antes de hacer la segunda?", opciones: ["Para comparar y ver cuánto mejoraste, sin perder nada","Porque lo pide el programa","Para tener dos para elegir al azar","No hace falta"], correcta: 0, explicacion: "Las dos versiones muestran tu progreso. Pensar que no hace falta tienta, pero si un cambio sale mal no podés volver." },
    { q: "Vas a entregar el proyecto en PDF. ¿Qué revisás antes?", opciones: ["Que tenga animaciones","Que pese mucho","Que tenga muchas fuentes de letra","Que todas las imágenes tengan texto alternativo y el contraste sea bueno"], correcta: 3, explicacion: "La accesibilidad es parte de la rúbrica. Las animaciones tientan para lucirse, pero en el PDF ni funcionan." },
    { q: "Tu presentación tiene una tabla de 10 filas y un gráfico 3D. ¿Cuántos puntos te da ese criterio de la rúbrica?", opciones: ["2: tiene números","0: tabla gigante o gráfico 3D","1: tiene un gráfico","No se evalúa"], correcta: 1, explicacion: "La rúbrica pide título que concluye y sin ruido. Pensar que tener números alcanza tienta, pero así no se entienden." },
  ],
},
];
