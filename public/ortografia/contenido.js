// Temario del curso "Ortografía y redacción sin vueltas". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ortografia y node tools/metodologia.js ortografia
window.TEMARIO = [
{
  id: "tildes",
  icono: "✍️",
  titulo: "Las tildes: la regla general",
  nivel: "Básico",
  objetivos: [
    "Encontrar la sílaba que suena más fuerte en cualquier palabra",
    "Clasificar palabras en agudas, graves y esdrújulas",
    "Decidir si una palabra lleva tilde aplicando la regla general",
  ],
  lecciones: [
    { titulo: "La sílaba que suena más fuerte", html: `
      <p class="idea">Toda palabra de dos o más sílabas tiene una que suena más fuerte: la <strong>sílaba tónica</strong>. Encontrarla es el primer paso para saber si lleva tilde.</p>
      <p>En todo el curso acompañamos a <strong>Graciela</strong>, de Santa Fe. Terminó la secundaria de adulta, escribe mensajes a la escuela de su nieto, cartas para el centro de jubilados y su currículum, y siempre le queda la duda: "¿esto lleva tilde?".</p>
      <p>La <strong>tilde</strong> es la rayita que se pone sobre una vocal (á, é, í, ó, ú). No todas las sílabas tónicas la llevan: depende de las reglas que vas a ver.</p>
      <table>
        <tr><th>Palabra</th><th>Sílabas</th><th>La que suena más fuerte</th></tr>
        <tr><td>mesa</td><td>me - sa</td><td><strong>me</strong></td></tr>
        <tr><td>canción</td><td>can - ción</td><td><strong>ción</strong></td></tr>
        <tr><td>teléfono</td><td>te - lé - fo - no</td><td><strong>lé</strong></td></tr>
        <tr><td>trabajar</td><td>tra - ba - jar</td><td><strong>jar</strong></td></tr>
      </table>
      <pre><code>Truco para encontrarla: decí la palabra como si llamaras a alguien
de lejos, estirando una sílaba.
  "¡ME-saaa!" suena raro      "¡MEEE-sa!" suena bien → la tónica es "me"
  "¡can-CIÓOON!" suena bien   → la tónica es "ción"</code></pre>
      <p><strong>Contá desde el final:</strong> para las reglas importa si la tónica es la última sílaba, la anteúltima o la que está antes. Por eso siempre se cuenta de atrás para adelante.</p>
      <p><strong>Las dudas son normales:</strong> muchas personas escriben bien sin saber las reglas, y muchas que las saben dudan igual. Con práctica, se vuelve automático.</p>
      <p>Por ejemplo, Graciela no sabía si "examen" llevaba tilde. Separó ex - a - men, encontró que la tónica era "a" (la anteúltima) y con la regla de la próxima lección resolvió que no lleva.</p>` },
    { titulo: "Agudas, graves y esdrújulas", video: {"id":"f3Pv0vVGKDk","t":"El mejor método para aprender a poner tildes · LA PROFE MÓNICA (12:55)"}, html: `
      <p class="idea">Según dónde está la sílaba tónica, las palabras son <strong>agudas, graves o esdrújulas</strong>. Cada grupo tiene su regla para la tilde.</p>
      <table>
        <tr><th>Tipo</th><th>La tónica es...</th><th>Lleva tilde si...</th><th>Con tilde</th><th>Sin tilde</th></tr>
        <tr><td>Aguda</td><td>la última</td><td>termina en <strong>n, s o vocal</strong></td><td>canción, compás, café, mamá</td><td>reloj, papel, trabajar</td></tr>
        <tr><td>Grave (o llana)</td><td>la anteúltima</td><td><strong>no</strong> termina en n, s o vocal</td><td>árbol, lápiz, fácil, azúcar</td><td>mesa, examen, lunes</td></tr>
        <tr><td>Esdrújula</td><td>la antepenúltima</td><td><strong>siempre</strong></td><td>música, teléfono, rápido, último</td><td>—</td></tr>
      </table>
      <pre><code>Para decidir:
1. Encontrá la sílaba tónica.
2. Contá desde el final: ¿última, anteúltima o antes?
3. Mirá la última letra.
4. Aplicá la regla de la tabla.

Ejemplo: "lapiz"
  la - piz → tónica "la" (anteúltima) → grave
  termina en z (no es n, s ni vocal) → lleva tilde → lápiz</code></pre>
      <p><strong>Las graves son el espejo de las agudas:</strong> las agudas llevan tilde si terminan en n, s o vocal; las graves, si <strong>no</strong> terminan así.</p>
      <p><strong>Las sobreesdrújulas</strong> (la tónica está todavía antes) también llevan tilde siempre: dígaselo, cuéntamelo.</p>
      <p>Por ejemplo, Graciela escribía "arbol" y "cancion". Con la tabla vio que árbol es grave terminada en l (lleva tilde) y canción es aguda terminada en n (también lleva).</p>` },
    { titulo: "El voseo y las mayúsculas", html: `
      <p class="idea">En Argentina hablamos de <strong>vos</strong>, y muchas formas del verbo con vos son <strong>agudas terminadas en s o vocal</strong>: por eso llevan tilde. Y las mayúsculas también llevan tilde.</p>
      <table>
        <tr><th>Con vos (aguda, lleva tilde)</th><th>Con tú (otra forma)</th></tr>
        <tr><td>vos tenés</td><td>tú tienes</td></tr>
        <tr><td>vos querés</td><td>tú quieres</td></tr>
        <tr><td>vos sabés</td><td>tú sabes</td></tr>
        <tr><td>vení, comé, decí (pedidos)</td><td>ven, come, di</td></tr>
        <tr><td>vos podés</td><td>tú puedes</td></tr>
      </table>
      <p><strong>Pero "vos sos" no lleva tilde:</strong> "sos" tiene una sola sílaba, y las palabras de una sílaba en general no llevan tilde (lo ves en el próximo módulo).</p>
      <pre><code>Las mayúsculas llevan tilde si les corresponde:
  Ángel, Álvarez, Óscar, ÚLTIMO AVISO, ÁFRICA
Es un error muy común no ponerla en mayúsculas
(se creía que no hacía falta, pero sí hace falta).</code></pre>
      <p><strong>Ojo con el corrector:</strong> muchos correctores están configurados en español de España y marcan "tenés" o "vení" como error. Son correctas: el voseo es parte de la norma del español de Argentina.</p>
      <p><strong>Los nombres propios también:</strong> Martín, Sofía, Ramírez, Córdoba, Tucumán llevan tilde por las mismas reglas.</p>
      <p>Por ejemplo, Graciela escribía "¿Venis el sabado?" a su hija. Ahora escribe "¿Venís el sábado?": venís es aguda terminada en s y sábado es esdrújula.</p>` },
  ],
  practica: [
    "Escribí 10 palabras que uses seguido, separalas en sílabas, marcá la tónica y anotá cuántas son agudas, graves y esdrújulas.",
    "Buscá en un mensaje que hayas mandado 5 palabras que deberían llevar tilde y anotá con qué regla las corregiste.",
    "Escribí 5 verbos con vos (tenés, querés...) y su forma con tú, y anotá cuáles llevan tilde y por qué.",
  ],
  recursos: [
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Academia Argentina de Letras", url: "https://www.aal.edu.ar/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si separás \"mesa\" en me - sa, ¿cuál es la sílaba tónica?", opciones: ["sa","Las dos","me","Ninguna"], correcta: 2, explicacion: "Suena más fuerte \"me\". \"sa\" tienta porque es la última, pero no es la que se estira." },
    { q: "Querés saber si una palabra lleva tilde. ¿Qué hacés primero?", opciones: ["Encontrar la sílaba tónica","Mirar la primera letra","Contar las vocales","Ponerle tilde por las dudas"], correcta: 0, explicacion: "Todo empieza por la tónica. Ponerla por las dudas tienta, pero muchas veces es error." },
    { q: "Si \"canción\" tiene la tónica en la última sílaba y termina en n, ¿lleva tilde?", opciones: ["No: las agudas nunca llevan","Solo en mayúscula","Depende de la persona","Sí: es aguda terminada en n"], correcta: 3, explicacion: "Aguda en n, s o vocal lleva tilde. \"Las agudas nunca llevan\" tienta, pero depende de la última letra." },
    { q: "Escribís \"reloj\". Es aguda y termina en j. ¿Lleva tilde?", opciones: ["Sí, en la o","No","Sí, en la e","Solo en plural"], correcta: 1, explicacion: "Aguda que no termina en n, s ni vocal: sin tilde. La o tienta porque es la tónica, pero la regla dice que no." },
    { q: "Si escribís \"arbol\" (grave terminada en l), ¿cómo se escribe bien?", opciones: ["arból","arbol","árbol","árból"], correcta: 2, explicacion: "Grave que no termina en n, s o vocal: lleva tilde en la tónica. \"arbol\" tienta porque es como suena, pero le falta." },
    { q: "Si \"examen\" es grave y termina en n, ¿lleva tilde?", opciones: ["No","Sí, en la a","Sí, en la e","Solo en mayúscula"], correcta: 0, explicacion: "Las graves terminadas en n, s o vocal no llevan. \"Sí, en la a\" tienta porque ahí está la tónica, pero no corresponde." },
    { q: "Tenés que escribir \"telefono\". ¿Qué tipo de palabra es y qué hacés?", opciones: ["Grave: sin tilde","Aguda: telefonó","No lleva nunca","Esdrújula: lleva tilde siempre, teléfono"], correcta: 3, explicacion: "La tónica es \"le\", antepenúltima: esdrújula. Grave tienta si contás mal las sílabas." },
    { q: "Escribís \"lapiz\". ¿Por qué lleva tilde?", opciones: ["Porque es aguda","Porque es grave y termina en z, que no es n, s ni vocal","Porque es esdrújula","No lleva"], correcta: 1, explicacion: "La tónica es \"la\", anteúltima. \"No lleva\" tienta porque es corta, pero la regla de las graves dice que sí." },
    { q: "Le escribís a tu hija con vos: \"¿Venis el sabado?\". ¿Cómo queda bien?", opciones: ["¿Venis el sabado?","¿Vénis el sabádo?","¿Venís el sábado?","¿Venís el sabado?"], correcta: 2, explicacion: "Venís es aguda en s y sábado es esdrújula. La última opción tienta porque arregla una, pero falta la otra." },
    { q: "Si el corrector te marca \"tenés\" como error, ¿qué pasa?", opciones: ["Está configurado en otro español: \"tenés\" es correcto","Está mal, va \"tenes\"","Está mal, va \"tienes\" siempre","Hay que sacarle la tilde"], correcta: 0, explicacion: "El voseo es correcto en Argentina. \"tienes\" tienta porque el corrector lo propone, pero es otra forma." },
    { q: "Si escribís \"vos sos\", ¿lleva tilde \"sos\"?", opciones: ["Sí, como tenés","Sí, en mayúscula","Depende del tono","No: tiene una sola sílaba"], correcta: 3, explicacion: "Las palabras de una sílaba en general no llevan. \"Como tenés\" tienta, pero tenés tiene dos sílabas." },
    { q: "Si escribís un cartel en mayúsculas: \"ULTIMO AVISO\", ¿lleva tilde?", opciones: ["No, en mayúsculas no van","Sí: ÚLTIMO AVISO","Solo si es a mano","Solo en la A"], correcta: 1, explicacion: "Las mayúsculas llevan tilde. \"En mayúsculas no van\" tienta porque se creía así, pero es un error." },
  ],
},
{
  id: "tildes-especiales",
  icono: "🎯",
  titulo: "Tildes especiales",
  nivel: "Intermedio",
  objetivos: [
    "Distinguir pares como tu/tú, el/él, si/sí, mas/más con la tilde diacrítica",
    "Poner tilde en qué, cómo, dónde y cuándo cuando preguntan o exclaman",
    "Acentuar los hiatos como día, país y baúl",
  ],
  lecciones: [
    { titulo: "La tilde que distingue", video: {"id":"O1fqBbcB0gA","t":"Estas palabras jamás llevan tilde: la tilde diacrítica · LA PROFE MÓNICA (3:52)"}, html: `
      <p class="idea">Las palabras de una sílaba en general <strong>no llevan tilde</strong> (fue, dio, vio, ti, sos). Pero algunas la llevan para <strong>distinguirse de otra igual</strong> que significa otra cosa: es la <strong>tilde diacrítica</strong>.</p>
      <table>
        <tr><th>Sin tilde</th><th>Ejemplo</th><th>Con tilde</th><th>Ejemplo</th></tr>
        <tr><td>tu (de vos, tuyo)</td><td>Traé tu DNI.</td><td>tú (persona)</td><td>¿Tú vienes? (con tú)</td></tr>
        <tr><td>el (artículo)</td><td>El colectivo llegó.</td><td>él (persona)</td><td>Él llegó tarde.</td></tr>
        <tr><td>mi (mío)</td><td>Mi casa.</td><td>mí (persona)</td><td>Es para mí.</td></tr>
        <tr><td>si (condición)</td><td>Si llueve, no voy.</td><td>sí (afirmación)</td><td>Sí, voy.</td></tr>
        <tr><td>se (pronombre)</td><td>Se fue.</td><td>sé (saber)</td><td>No sé.</td></tr>
        <tr><td>de (preposición)</td><td>La casa de Ana.</td><td>dé (dar)</td><td>Que me dé el vuelto.</td></tr>
        <tr><td>te (pronombre)</td><td>Te llamo.</td><td>té (bebida)</td><td>Un té con limón.</td></tr>
        <tr><td>mas (pero, poco usado)</td><td>Quiso, mas no pudo.</td><td>más (cantidad)</td><td>Quiero más.</td></tr>
      </table>
      <p><strong>Truco:</strong> si podés cambiar "más" por "menos", lleva tilde. Si podés cambiar "sí" por "no", también.</p>
      <p><strong>Solo y este:</strong> la regla general es escribirlos sin tilde ("solo quiero un café", "este libro"). Desde 2023 la Real Academia acepta la tilde en "solo" si quien escribe ve un doble sentido, pero sin tilde nunca está mal.</p>
      <p><strong>Aun y aún:</strong> "aún" (con tilde) significa todavía: "aún no llegó". "Aun" (sin tilde) significa incluso: "aun así, fue".</p>
      <p>Por ejemplo, Graciela escribió "Si, mañana voy" y su nieto le dijo que faltaba algo. Como podía cambiarlo por "No, mañana no voy", era una afirmación: "Sí, mañana voy".</p>` },
    { titulo: "Qué, cómo, dónde, cuándo", html: `
      <p class="idea"><strong>Qué, cuál, quién, cómo, cuánto, cuándo y dónde</strong> llevan tilde cuando <strong>preguntan o exclaman</strong>, aunque la pregunta esté dentro de otra oración y no tenga signos.</p>
      <table>
        <tr><th>Con tilde (pregunta o exclamación)</th><th>Sin tilde (no pregunta)</th></tr>
        <tr><td>¿Qué querés?</td><td>Creo que viene. (une dos partes)</td></tr>
        <tr><td>No sé qué hacer. (pregunta escondida)</td><td>Lo que dijiste.</td></tr>
        <tr><td>¿Dónde vivís? / Decime dónde vivís.</td><td>La casa donde vivo.</td></tr>
        <tr><td>¿Cuándo llegás? / No sé cuándo llega.</td><td>Cuando llegues, avisá.</td></tr>
        <tr><td>¿Cómo estás? / ¡Cómo llueve!</td><td>Hacelo como quieras.</td></tr>
        <tr><td>¿Quién llamó? / No sé quién fue.</td><td>El vecino, quien nos ayudó, vino.</td></tr>
      </table>
      <pre><code>Prueba: ¿podés convertirlo en una pregunta directa?
"No sé dónde vive"   → "¿Dónde vive?"  ✓ → lleva tilde
"La casa donde vivo" → no pregunta nada  → sin tilde</code></pre>
      <p><strong>Los signos de pregunta van dos:</strong> en castellano se abre (¿) y se cierra (?). Lo mismo con la exclamación (¡ !). En los mensajes muchos no ponen el de apertura, pero en un texto cuidado tiene que estar.</p>
      <p><strong>Porque, por qué y compañía</strong> tienen su propia regla: la vas a ver en el módulo de palabras que se confunden.</p>
      <p>Por ejemplo, Graciela le escribió a la escuela "No sé cuando es la reunión". Como se podía preguntar "¿Cuándo es la reunión?", lo corrigió a "No sé cuándo es la reunión".</p>` },
    { titulo: "Día, país, baúl: los hiatos", video: {"id":"uLfiTVvdrW4","t":"El diptongo y el hiato: todo lo que necesitás saber con ejemplos · LA PROFE MÓNICA (7:35)"}, html: `
      <p class="idea">Cuando una <strong>i</strong> o una <strong>u</strong> que suenan fuerte están al lado de a, e u o, <strong>llevan tilde siempre</strong>, aunque la regla general diga otra cosa. Esas vocales se separan en sílabas distintas: es un <strong>hiato</strong>.</p>
      <table>
        <tr><th>Palabra</th><th>Sílabas</th><th>Por qué la tilde</th></tr>
        <tr><td>día</td><td>dí - a</td><td>La i suena fuerte junto a la a</td></tr>
        <tr><td>país</td><td>pa - ís</td><td>La i suena fuerte junto a la a</td></tr>
        <tr><td>baúl</td><td>ba - úl</td><td>La u suena fuerte junto a la a</td></tr>
        <tr><td>frío, río, tío</td><td>frí - o</td><td>La i suena fuerte junto a la o</td></tr>
        <tr><td>había, tenía, podría</td><td>ha - bí - a</td><td>Todos los verbos terminados en -ía</td></tr>
        <tr><td>reír, oído, maíz</td><td>re - ír</td><td>La i suena fuerte</td></tr>
      </table>
      <pre><code>Fijate qué raro: "día" es grave y termina en vocal.
Por la regla general NO llevaría tilde... pero la lleva,
porque la regla del hiato gana.

Comparalo con "diario": dia - rio → la i no suena fuerte,
se junta con la a (diptongo) → sin tilde.</code></pre>
      <p>Un <strong>diptongo</strong> es lo contrario: dos vocales que se pronuncian juntas en la misma sílaba (bien, cuidado, ciudad). Ahí se aplica la regla general.</p>
      <p><strong>Muy común en los verbos:</strong> tenía, quería, sabía, decía, podría, iría. Todos llevan tilde en la í.</p>
      <p>Por ejemplo, Graciela escribía "tenia" y "dia" en sus cartas. Al leerlos separando sílabas (te - ní - a, dí - a) escuchó que la i sonaba fuerte y les agregó la tilde.</p>` },
  ],
  practica: [
    "Escribí 5 oraciones con pares de la tabla (tu/tú, si/sí, mas/más...) y anotá el truco que usaste para decidir cada una.",
    "Escribí 3 oraciones con \"dónde\", \"cuándo\" o \"qué\" que pregunten y 3 que no, y anotá la prueba que hiciste.",
    "Buscá 5 verbos terminados en -ía en un texto tuyo o un diario y anotá cuántos tenían la tilde.",
  ],
  recursos: [
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "FundéuRAE: recomendaciones de escritura", url: "https://www.fundeu.es/recomendaciones/" },
    { t: "Academia Argentina de Letras", url: "https://www.aal.edu.ar/" },
  ],
  quiz: [
    { q: "Si escribís \"Es para mi\", ¿qué corresponde?", opciones: ["Es para mi, sin tilde","Es para mío","Es para mí, con tilde: se refiere a una persona","Es para mís"], correcta: 2, explicacion: "Mí con tilde es la persona. Sin tilde tienta porque es corta, pero \"mi\" es de mío (\"mi casa\")." },
    { q: "Si escribís \"Si, mañana voy\", ¿qué falta?", opciones: ["La tilde: \"Sí\", porque afirma","Nada, está bien","Una coma más","Mayúscula en mañana"], correcta: 0, explicacion: "Se puede cambiar por \"No\": es afirmación. \"Nada\" tienta, pero \"si\" sin tilde es condición." },
    { q: "Querés más café. ¿Cómo lo escribís?", opciones: ["Quiero mas cafe","Quiero más cafe","Quiero mas café","Quiero más café"], correcta: 3, explicacion: "\"Más\" se puede cambiar por \"menos\" y café es aguda en vocal. La tercera tienta, pero café también lleva." },
    { q: "Si escribís \"fue\" o \"dio\", ¿llevan tilde?", opciones: ["Sí, en la e y en la o","No: tienen una sola sílaba","Solo fue","Solo dio"], correcta: 1, explicacion: "Las palabras de una sílaba en general no llevan. \"Sí\" tienta porque suenan fuertes, pero no corresponde." },
    { q: "Si escribís \"Solo quiero un café\", ¿lleva tilde \"solo\"?", opciones: ["Sí, siempre","Sí, si es una persona sola","No hace falta: sin tilde nunca está mal","Solo en mayúscula"], correcta: 2, explicacion: "La regla general es sin tilde. \"Siempre\" tienta porque antes se enseñaba así." },
    { q: "Si escribís \"Aun no llegó el colectivo\", ¿qué corresponde?", opciones: ["Aún, con tilde: significa todavía","Aun, sin tilde","Aúnn","Ahún"], correcta: 0, explicacion: "Aún = todavía. Aun sin tilde tienta, pero significa \"incluso\"." },
    { q: "Si escribís \"No sé cuando es la reunión\", ¿qué corregís?", opciones: ["Nada","Sé sin tilde","Agregar signos de pregunta","Cuándo con tilde: hay una pregunta escondida"], correcta: 3, explicacion: "Se puede preguntar \"¿Cuándo es?\". Agregar signos tienta, pero no es una pregunta directa." },
    { q: "Si escribís \"La casa donde vivo\", ¿lleva tilde \"donde\"?", opciones: ["Sí, siempre","No: no pregunta nada","Sí, porque es un lugar","Solo con signos"], correcta: 1, explicacion: "No se puede convertir en pregunta. \"Siempre\" tienta, pero solo cuando pregunta o exclama." },
    { q: "Querés escribir una pregunta en un texto cuidado. ¿Cómo la empezás?", opciones: ["Sin signo, solo al final","Con dos ?? al final","Con el signo de apertura ¿","Con un guion"], correcta: 2, explicacion: "En castellano se abre y se cierra. Solo al final tienta por costumbre de los mensajes." },
    { q: "Si escribís \"dia\", ¿qué falta?", opciones: ["La tilde: día, por el hiato","Nada, es grave en vocal","Una h","Una tilde en la a"], correcta: 0, explicacion: "La regla del hiato gana. \"Grave en vocal\" tienta porque es la regla general, pero acá no aplica." },
    { q: "Si escribís \"tenia\" en una carta, ¿cómo va?", opciones: ["tenia, sin tilde","ténia","teniá","tenía: la i suena fuerte junto a la a"], correcta: 3, explicacion: "Los verbos en -ía llevan tilde. Sin tilde tienta porque es grave en vocal, pero es hiato." },
    { q: "Si escribís \"diario\", ¿lleva tilde?", opciones: ["Sí, en la i como día","No: la i se junta con la a en un diptongo","Sí, en la a","Sí, en la o"], correcta: 1, explicacion: "En dia-rio la i no suena fuerte. \"Como día\" tienta, pero en día sí suena fuerte." },
  ],
},
{
  id: "letras",
  icono: "🔤",
  titulo: "B o V, C, S o Z, G o J, H y LL o Y",
  nivel: "Intermedio",
  objetivos: [
    "Aplicar las reglas más útiles para elegir entre b y v",
    "Elegir entre c, s y z, sabiendo que en Argentina suenan igual",
    "Resolver dudas de g/j, h y ll/y con reglas y con el diccionario",
  ],
  lecciones: [
    { titulo: "B o V", video: {"id":"csnW1s9olaI","t":"Reglas para el uso de la b · LA PROFE MÓNICA (5:09)"}, html: `
      <p class="idea">En castellano la b y la v <strong>suenan igual</strong>, así que el oído no ayuda. Unas pocas reglas resuelven la mayoría de los casos; para el resto, el diccionario.</p>
      <table>
        <tr><th>Con B</th><th>Ejemplos</th></tr>
        <tr><td>Después de m</td><td>cambio, hombre, tambor</td></tr>
        <tr><td>Verbos en -aba, -abas, -ábamos (pasado)</td><td>cantaba, trabajabas, estábamos, iba</td></tr>
        <tr><td>Verbos terminados en -bir</td><td>escribir, recibir, subir (menos hervir, servir y vivir)</td></tr>
        <tr><td>Palabras que empiezan con bu-, bus-, bur-</td><td>bueno, buscar, burla</td></tr>
        <tr><td>Antes de otra consonante</td><td>blanco, brazo, obtener</td></tr>
      </table>
      <table>
        <tr><th>Con V</th><th>Ejemplos</th></tr>
        <tr><td>Después de n</td><td>enviar, invierno, convenio</td></tr>
        <tr><td>Adjetivos en -ivo, -iva</td><td>activo, positiva, nativo</td></tr>
        <tr><td>Formas de ir</td><td>voy, vas, vamos, vaya</td></tr>
        <tr><td>Pasado de estar, andar y tener</td><td>estuve, anduvo, tuvimos</td></tr>
      </table>
      <p><strong>"Iba" va con b:</strong> aunque sea del verbo ir (que usa v en "voy"), el pasado sigue la regla de -aba: iba, ibas, íbamos.</p>
      <p><strong>Las familias de palabras ayudan:</strong> si "beber" va con b, también "bebida" y "bebedero". Si "vivir" va con v, también "vivienda".</p>
      <p>Por ejemplo, Graciela dudaba entre "estubo" y "estuvo". Con la regla del pasado de estar, andar y tener, escribió "estuvo" y no volvió a dudar.</p>` },
    { titulo: "C, S o Z", html: `
      <p class="idea">En Argentina <strong>la c (ante e, i), la s y la z suenan igual</strong> (se llama <strong>seseo</strong>). Por eso hay que aprender a escribirlas con reglas y familias de palabras.</p>
      <table>
        <tr><th>Regla</th><th>Ejemplos</th></tr>
        <tr><td>-ción si en la familia hay -to, -tor o -do</td><td>atento → atención; inventor → invención; educado → educación</td></tr>
        <tr><td>-sión si en la familia hay -so, -sor o -sivo</td><td>confeso → confesión; televisor → televisión; expresivo → expresión</td></tr>
        <tr><td>-cc- si en la familia hay -ct-</td><td>acto → acción; director → dirección</td></tr>
        <tr><td>Plural de palabras terminadas en z: cambia a ces</td><td>luz → luces; lápiz → lápices; vez → veces</td></tr>
        <tr><td>Verbos en -cer y -cir</td><td>hacer, conocer, decir (menos toser, coser y asir)</td></tr>
        <tr><td>-ísimo con s</td><td>buenísimo, carísimo</td></tr>
      </table>
      <p><strong>Palabras que suenan igual y significan otra cosa:</strong> casa (vivienda) y caza (cazar); coser (con aguja) y cocer (cocinar); ves (de ver) y vez (una vez); abrasar (quemar) y abrazar (con los brazos).</p>
      <p><strong>La z casi nunca va antes de e o i:</strong> se escribe "luces", no "luzes"; "cero", no "zero". Hay excepciones, como "zigzag".</p>
      <p>Por ejemplo, Graciela escribía "a vez en cuando". Se acordó del par ves/vez: "vez" es de veces (una vez, dos veces), y lo corrigió a "de vez en cuando".</p>` },
    { titulo: "G o J, la H y LL o Y", html: `
      <p class="idea">Estas letras también traen dudas porque <strong>suenan igual</strong> en algunos casos (ge/je, gi/ji, ll/y) o <strong>no suenan</strong> (la h). Estas son las reglas más útiles.</p>
      <table>
        <tr><th>Letra</th><th>Regla útil</th><th>Ejemplos</th></tr>
        <tr><td>G</td><td>Verbos en -ger y -gir (menos tejer y crujir)</td><td>proteger, elegir, recoger</td></tr>
        <tr><td>J</td><td>Esos verbos cambian a j ante a y o</td><td>protejo, elija, recojan</td></tr>
        <tr><td>J</td><td>Palabras terminadas en -aje y -jero</td><td>viaje, garaje, extranjero</td></tr>
        <tr><td>J</td><td>Pasados de decir y traer</td><td>dije, dijeron, traje, trajimos</td></tr>
        <tr><td>H</td><td>Palabras que empiezan con hie- y hue-</td><td>hielo, hierro, huevo, hueso</td></tr>
        <tr><td>H</td><td>Formas de haber y hacer</td><td>hay, había, hubo, hecho, hizo</td></tr>
        <tr><td>LL</td><td>Palabras terminadas en -illo, -illa</td><td>cuchillo, silla, ventanilla</td></tr>
        <tr><td>Y</td><td>Verbos sin ll ni y que la toman al conjugar</td><td>oír → oyó; caer → cayeron; leer → leyendo</td></tr>
        <tr><td>Y</td><td>Al final de palabra después de vocal</td><td>hoy, ley, muy, rey</td></tr>
      </table>
      <p><strong>La h no suena:</strong> por eso la única forma es conocer la palabra o buscarla. Ojo con los pares: "echo" (de echar: echo sal) y "hecho" (de hacer: está hecho).</p>
      <p><strong>Cuando no hay regla, el diccionario:</strong> el de la Real Academia Española está gratis en internet y en una app. Si una palabra te hace dudar siempre, anotala en una lista y repasala.</p>
      <p>Por ejemplo, Graciela escribía "dijieron". Con la regla de los pasados de decir con j (dije, dijo, dijeron), vio que no lleva i después de la j: "dijeron".</p>` },
  ],
  practica: [
    "Escribí 10 palabras que te hagan dudar entre b y v, aplicá las reglas y anotá cuántas resolviste sin diccionario.",
    "Escribí 5 pares de palabras con -ción o -sión y su familia (atento → atención) y anotá cuál te costó más.",
    "Armá tu lista de 10 palabras difíciles (las que siempre dudás) con la forma correcta y repasala 3 días seguidos. Anotá cuántas recordás el tercer día.",
  ],
  recursos: [
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Centro Virtual Cervantes: recursos sobre la lengua española", url: "https://cvc.cervantes.es/" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si dudás entre \"canbio\" y \"cambio\", ¿qué regla aplicás?", opciones: ["Después de n va b","Va con v por sonido","Después de m va b: cambio","Es indistinto"], correcta: 2, explicacion: "Antes de b va m, no n. \"Indistinto\" tienta porque suenan igual, pero hay una regla." },
    { q: "Si escribís un verbo en pasado: \"trabajava\" o \"trabajaba\", ¿cuál es?", opciones: ["trabajaba: los pasados en -aba van con b","trabajava","travajaba","trabajáva"], correcta: 0, explicacion: "La terminación -aba va con b. La v tienta porque suenan igual." },
    { q: "Si escribís \"estubo\" o \"estuvo\", ¿cuál es correcta?", opciones: ["estubo","hestuvo","estúbo","estuvo: el pasado de estar va con v"], correcta: 3, explicacion: "Estar, andar y tener en pasado van con v. \"estubo\" tienta porque -bo parece común." },
    { q: "Si \"escribir\" termina en -bir, ¿cómo se escribe? ¿Y \"vivir\"?", opciones: ["Los dos con b","escribir con b; vivir es una excepción con v","Los dos con v","escrivir con v"], correcta: 1, explicacion: "Los verbos en -bir van con b, menos hervir, servir y vivir. \"Los dos con b\" tienta si olvidás la excepción." },
    { q: "Si dudás entre \"enbiar\" y \"enviar\", ¿qué regla aplicás?", opciones: ["Después de n va b","Va con b por sonido","Después de n va v: enviar","Es indistinto"], correcta: 2, explicacion: "Después de n se escribe v. \"Indistinto\" tienta, pero no lo es." },
    { q: "Si \"atento\" es de la familia, ¿cómo se escribe \"atención\" o \"atensión\"?", opciones: ["atención: familia con -to, va -ción","atensión","atencción","atenzión"], correcta: 0, explicacion: "Con -to en la familia, -ción. La s tienta porque suena igual en Argentina." },
    { q: "Si escribís el plural de \"lápiz\", ¿cómo queda?", opciones: ["lápizes","lapizes","lápis","lápices"], correcta: 3, explicacion: "La z cambia a c antes de e. \"lápizes\" tienta por agregar -es, pero se cambia la letra." },
    { q: "Si escribís \"a vez en cuando\" o \"de vez en cuando\", ¿qué va?", opciones: ["de ves en cuando","de vez en cuando, con z: vez de veces","a ves en cuando","de bes en cuando"], correcta: 1, explicacion: "\"Vez\" (una vez) va con z; \"ves\" es de ver. La s tienta porque suenan igual." },
    { q: "Si escribís el verbo \"elegir\" en presente con yo, ¿cómo va?", opciones: ["eligo","elijo con g","elijo: ante o cambia a j","eligio"], correcta: 2, explicacion: "Ante a y o va j. \"eligo\" tienta para mantener la g, pero no suena igual." },
    { q: "Si escribís \"dijieron\" o \"dijeron\", ¿cuál es?", opciones: ["dijeron","dijieron","digeron","dijeiron"], correcta: 0, explicacion: "Los pasados de decir van con j y sin i después: dijeron. \"dijieron\" tienta por cómo se dice a veces." },
    { q: "Si escribís \"La comida está echa\", ¿qué corregís?", opciones: ["Nada","echa con h al final","ehcha","hecha, con h: viene de hacer"], correcta: 3, explicacion: "Hecho/hecha es de hacer. \"echa\" tienta porque suena igual, pero es de echar." },
    { q: "Si escribís \"cuchiyo\" o \"cuchillo\", ¿cuál va?", opciones: ["cuchiyo","cuchillo: -illo va con ll","cuchio","cuchilyo"], correcta: 1, explicacion: "Las terminaciones -illo, -illa van con ll. La y tienta porque en Argentina suenan igual." },
  ],
},
{
  id: "confusiones",
  icono: "🔀",
  titulo: "Palabras que se confunden",
  nivel: "Intermedio",
  objetivos: [
    "Elegir entre porque, por qué, porqué y por que",
    "Distinguir haber de a ver, hay de ahí y ay, y haya, halla y allá",
    "Usar bien sino y si no, y a y ha",
  ],
  lecciones: [
    { titulo: "Porque, por qué, porqué", video: {"id":"uRTpEPCmpmk","t":"Aprendé a diferenciar los 5 porqués · LA PROFE MÓNICA (7:29)"}, html: `
      <p class="idea">Hay cuatro formas y cada una tiene su uso. Las dos que más se usan son <strong>por qué</strong> (para preguntar) y <strong>porque</strong> (para responder o explicar la causa).</p>
      <table>
        <tr><th>Forma</th><th>Para qué</th><th>Ejemplo</th></tr>
        <tr><td><strong>¿Por qué?</strong> (separado, con tilde)</td><td>Preguntar la causa, también en preguntas escondidas</td><td>¿Por qué llegaste tarde? / No sé por qué llegó tarde.</td></tr>
        <tr><td><strong>porque</strong> (junto, sin tilde)</td><td>Responder o explicar la causa</td><td>Llegué tarde porque no pasaba el colectivo.</td></tr>
        <tr><td><strong>el porqué</strong> (junto, con tilde)</td><td>Es un sustantivo: "la razón", va con el o un</td><td>No entiendo el porqué de su enojo.</td></tr>
        <tr><td><strong>por que</strong> (separado, sin tilde)</td><td>"Por" + "que", casi siempre se puede agregar "el", "la" o "cual"</td><td>Esa es la razón por (la) que renunció.</td></tr>
      </table>
      <pre><code>Pruebas rápidas:
¿Pregunta (aunque sea escondida)?       → por qué
¿Podés cambiarlo por "ya que"?          → porque
¿Podés cambiarlo por "la razón"?        → porqué
¿Podés meter "el", "la" o "cual" en el medio? → por que</code></pre>
      <p><strong>En la vida diaria</strong>, casi todo se resuelve con las dos primeras: preguntar (por qué) y responder (porque).</p>
      <p>Por ejemplo, Graciela escribió a la escuela "Quería saber porque suspendieron la clase". Como era una pregunta escondida ("¿Por qué suspendieron?"), lo corrigió: "Quería saber por qué suspendieron la clase".</p>` },
    { titulo: "Haber, a ver; hay, ahí, ay", video: {"id":"Nqdxg8SVrFE","t":"¿Cuál es la diferencia entre a ver y haber? · LA PROFE MÓNICA (2:01)"}, html: `
      <p class="idea">Muchas confusiones vienen de palabras que <strong>suenan igual y se escriben distinto</strong>. Un truco para cada par las resuelve.</p>
      <table>
        <tr><th>Palabra</th><th>Qué es</th><th>Ejemplo</th><th>Truco</th></tr>
        <tr><td>haber</td><td>Verbo</td><td>Va a haber una reunión. Debe haber un error.</td><td>Podés cambiarlo por "existir" o va después de "va a", "debe", "puede"</td></tr>
        <tr><td>a ver</td><td>"a" + "ver" (mirar)</td><td>A ver si llueve. Vamos a ver.</td><td>Podés cambiarlo por "veamos" o "mirar"</td></tr>
        <tr><td>hay</td><td>Verbo haber</td><td>Hay pan.</td><td>Podés cambiarlo por "había"</td></tr>
        <tr><td>ahí</td><td>Lugar</td><td>Dejalo ahí.</td><td>Podés cambiarlo por "allí"</td></tr>
        <tr><td>ay</td><td>Exclamación de dolor o sorpresa</td><td>¡Ay, me quemé!</td><td>Es un grito</td></tr>
        <tr><td>haya</td><td>Verbo haber</td><td>Ojalá haya lugar.</td><td>Podés cambiarlo por "hubiera"</td></tr>
        <tr><td>halla</td><td>Verbo hallar (encontrar)</td><td>Si halla las llaves, avisa.</td><td>Podés cambiarlo por "encuentra"</td></tr>
        <tr><td>allá</td><td>Lugar lejano</td><td>Vivo allá.</td><td>Podés cambiarlo por "allí"</td></tr>
      </table>
      <p><strong>Un error común en los mensajes:</strong> "haber si venís" está mal; es "a ver si venís" (se puede decir "veamos si venís").</p>
      <p><strong>Otro clásico:</strong> "Hay te aviso" está mal. Si querés decir "en un rato" o "en ese momento", es "Ahí te aviso" (con la tilde en la í).</p>
      <p>Por ejemplo, Graciela escribía "Haber cuando nos vemos". Probó cambiarlo por "veamos cuándo nos vemos": funcionó, así que era "A ver cuándo nos vemos".</p>` },
    { titulo: "Sino y si no; a y ha", html: `
      <p class="idea">Dos pares más que aparecen todo el tiempo en textos formales y mensajes. La diferencia cambia el sentido de la oración.</p>
      <table>
        <tr><th>Forma</th><th>Para qué</th><th>Ejemplo</th></tr>
        <tr><td><strong>sino</strong> (junto)</td><td>Opone una idea a otra después de una negación ("no esto, sino aquello")</td><td>No es martes, sino miércoles.</td></tr>
        <tr><td><strong>si no</strong> (separado)</td><td>Condición: "si" + "no"</td><td>Si no venís, avisá.</td></tr>
        <tr><td><strong>a</strong></td><td>Preposición: hacia, para</td><td>Voy a la escuela. Empiezo a estudiar.</td></tr>
        <tr><td><strong>ha</strong></td><td>Verbo haber, va antes de un verbo terminado en -ado o -ido</td><td>Ha llegado. Ha comido.</td></tr>
      </table>
      <pre><code>Pruebas:
sino / si no → ¿podés meter una palabra entre "si" y "no"?
   "Si (vos) no venís, avisá" ✓ → separado: si no
   "No es martes, sino miércoles" (no se puede) → junto: sino

a / ha → ¿podés cambiarlo por "había"?
   "Ha llegado" → "Había llegado" ✓ → ha
   "Voy a la escuela" → "Voy había la escuela" ✗ → a</code></pre>
      <p><strong>Tuvo y tubo; vaya, valla y baya:</strong> "tuvo" es de tener (tuvo suerte) y "tubo" es un caño. "Vaya" es de ir, "valla" es una cerca y "baya" es un fruto chiquito.</p>
      <p><strong>Cuando dudes entre dos palabras parecidas</strong>, escribilas en una nota con un ejemplo de cada una. Con 10 pares bien aprendidos, la mayoría de los errores desaparecen.</p>
      <p>Por ejemplo, Graciela escribió "No quiero té, si no café". Como no podía meter otra palabra entre "si" y "no", lo cambió: "No quiero té, sino café".</p>` },
  ],
  practica: [
    "Escribí 4 oraciones, una con cada forma de porque, por qué, porqué y por que, y anotá la prueba que usaste.",
    "Revisá tus últimos 20 mensajes y anotá cuántas veces usaste haber, a ver, hay, ahí y si estaban bien.",
    "Armá tu lista de 10 pares que se confunden (como tuvo/tubo) con un ejemplo de cada uno y anotá cuáles te pasaban antes.",
  ],
  recursos: [
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "FundéuRAE: recomendaciones de escritura", url: "https://www.fundeu.es/recomendaciones/" },
    { t: "Centro Virtual Cervantes: recursos sobre la lengua española", url: "https://cvc.cervantes.es/" },
  ],
  quiz: [
    { q: "Le preguntás a alguien la causa: \"¿___ llegaste tarde?\". ¿Qué va?", opciones: ["Porque","Porqué","Por qué","Por que"], correcta: 2, explicacion: "Para preguntar, separado y con tilde. \"Porque\" tienta por costumbre, pero es para responder." },
    { q: "Si respondés: \"Llegué tarde ___ no pasaba el colectivo\", ¿qué va?", opciones: ["porque","por qué","porqué","por que"], correcta: 0, explicacion: "Se puede cambiar por \"ya que\": porque. \"por qué\" tienta porque suena igual." },
    { q: "Si escribís \"Quería saber porque suspendieron la clase\", ¿qué corregís?", opciones: ["Nada","porqué","Agregar signos de pregunta","por qué: es una pregunta escondida"], correcta: 3, explicacion: "Se puede preguntar \"¿Por qué suspendieron?\". Los signos tientan, pero no es una pregunta directa." },
    { q: "Si escribís \"No entiendo el ___ de su enojo\", ¿qué va?", opciones: ["por qué","porqué","porque","por que"], correcta: 1, explicacion: "Va con \"el\" y se puede cambiar por \"la razón\": porqué. \"por qué\" tienta por la tilde." },
    { q: "Escribís \"Haber si venís el sábado\". ¿Qué corregís?", opciones: ["Nada","Aber","A ver: se puede cambiar por \"veamos\"","Haver"], correcta: 2, explicacion: "\"Veamos si venís\" funciona: a ver. \"Haber\" tienta porque suena igual, pero es un verbo." },
    { q: "Si escribís \"Va a ___ una reunión\", ¿qué va?", opciones: ["haber","a ver","aver","haver"], correcta: 0, explicacion: "Después de \"va a\" y cambiable por \"existir\": haber. \"a ver\" tienta, pero no se puede cambiar por \"veamos\"." },
    { q: "Si escribís \"___ pan en la panera\", ¿qué va?", opciones: ["Ahí","Ay","Hai","Hay"], correcta: 3, explicacion: "Se puede cambiar por \"había\": hay. \"Ahí\" tienta porque suena parecido, pero es un lugar." },
    { q: "Si escribís \"Dejá las llaves ___\", ¿qué va?", opciones: ["hay","ahí","ay","ahi sin tilde"], correcta: 1, explicacion: "Es un lugar, cambiable por \"allí\". \"hay\" tienta por el sonido." },
    { q: "Si escribís \"Ojalá ___ lugar en el micro\", ¿qué va?", opciones: ["halla","allá","haya","aya"], correcta: 2, explicacion: "Se puede cambiar por \"hubiera\": haya. \"halla\" tienta, pero es de encontrar." },
    { q: "Escribís \"No quiero té, si no café\". ¿Qué corregís?", opciones: ["sino, junto: opone dos ideas","Nada","si nó","cino"], correcta: 0, explicacion: "No se puede meter otra palabra entre \"si\" y \"no\": sino. \"Nada\" tienta porque se lee igual." },
    { q: "Si escribís \"___ no llegás a las 8, empezamos sin vos\", ¿qué va?", opciones: ["Sino","Si nó","Cino","Si no, separado: es una condición"], correcta: 3, explicacion: "Se puede decir \"si (vos) no llegás\": separado. \"Sino\" tienta por ser una palabra común." },
    { q: "Si escribís \"El colectivo a llegado\", ¿qué corregís?", opciones: ["Nada","ha llegado: se puede cambiar por \"había llegado\"","ah llegado","a yegado"], correcta: 1, explicacion: "Antes de un verbo en -ado va \"ha\". \"Nada\" tienta porque suena igual." },
  ],
},
{
  id: "puntuacion",
  icono: "❗",
  titulo: "Comas, puntos y otros signos",
  nivel: "Intermedio",
  objetivos: [
    "Poner coma en los casos más comunes y no ponerla entre el sujeto y el verbo",
    "Usar punto, dos puntos y signos de pregunta y exclamación",
    "Escribir con mayúscula lo que corresponde, y con minúscula los días y los meses",
  ],
  lecciones: [
    { titulo: "La coma", video: {"id":"5fHDJBarFlc","t":"Aprendé a usar la coma con mi fórmula · LA PROFE MÓNICA (12:41)"}, html: `
      <p class="idea">La coma marca una <strong>pausa corta</strong> y ordena las partes de la oración. Unos pocos usos cubren casi todo lo que vas a escribir.</p>
      <table>
        <tr><th>Va coma...</th><th>Ejemplo</th></tr>
        <tr><td>Después del nombre de a quien le hablás (vocativo)</td><td>Hola, Juan. / Juan, vení.</td></tr>
        <tr><td>Entre los elementos de una lista (menos antes de la última "y")</td><td>Compré pan, leche, queso y huevos.</td></tr>
        <tr><td>Antes de pero, aunque, sino</td><td>Fui, pero no estaba.</td></tr>
        <tr><td>Alrededor de una aclaración en el medio</td><td>Graciela, mi vecina, vino ayer.</td></tr>
        <tr><td>Después de conectores como sin embargo, por eso, además</td><td>Llovió. Sin embargo, salimos.</td></tr>
        <tr><td>Después de una parte que va antes de lo principal</td><td>Si llueve, no vamos. / Cuando llegues, avisá.</td></tr>
      </table>
      <pre><code>El error más común: coma entre el sujeto y el verbo.
✗ Los vecinos del edificio, se quejaron.
✓ Los vecinos del edificio se quejaron.

Aunque el sujeto sea largo y hagas una pausa al hablar,
entre el sujeto (quién) y el verbo (qué hace) no va coma.</code></pre>
      <p>El <strong>sujeto</strong> es quién hace la acción ("los vecinos del edificio") y el <strong>verbo</strong> es la acción ("se quejaron").</p>
      <p><strong>La coma cambia el sentido:</strong> "Vamos a comer, chicos" (les hablás a los chicos) no es lo mismo que "Vamos a comer chicos".</p>
      <p>Por ejemplo, Graciela empezaba sus mensajes con "Hola Laura como estás". Ahora escribe "Hola, Laura, ¿cómo estás?": coma después del saludo, coma después del nombre y los signos de pregunta.</p>` },
    { titulo: "Punto, dos puntos y signos", html: `
      <p class="idea">El <strong>punto</strong> cierra una idea; los <strong>dos puntos</strong> anuncian lo que viene; los <strong>signos de pregunta y exclamación</strong> se abren y se cierran.</p>
      <table>
        <tr><th>Signo</th><th>Para qué</th><th>Ejemplo</th></tr>
        <tr><td>Punto y seguido</td><td>Termina una oración y sigue el mismo tema</td><td>Llegué a las 8. La reunión ya había empezado.</td></tr>
        <tr><td>Punto y aparte</td><td>Termina un párrafo; el siguiente cambia de tema</td><td>(se sigue en el renglón de abajo)</td></tr>
        <tr><td>Dos puntos</td><td>Antes de una lista, una explicación o después del saludo de una carta</td><td>Traé tres cosas: DNI, foto y recibo. / Estimada Laura:</td></tr>
        <tr><td>¿ ?</td><td>Preguntas: se abren y se cierran</td><td>¿Venís mañana?</td></tr>
        <tr><td>¡ !</td><td>Exclamaciones: se abren y se cierran</td><td>¡Qué alegría!</td></tr>
        <tr><td>Comillas " "</td><td>Citar palabras de otro</td><td>Me dijo: "Llego tarde".</td></tr>
      </table>
      <pre><code>Oración demasiado larga, sin puntos:
"Fui al banco y había mucha gente y tuve que esperar y
cuando me tocó el sistema no andaba y me dijeron que vuelva."

Con puntos:
"Fui al banco. Había mucha gente y tuve que esperar.
Cuando me tocó, el sistema no andaba. Me dijeron que vuelva."</code></pre>
      <p><strong>Después de dos puntos,</strong> en general se sigue con minúscula ("tres cosas: DNI..."). En una carta, después de "Estimada Laura:" se empieza en el renglón de abajo con mayúscula.</p>
      <p><strong>Un solo signo alcanza:</strong> "¿¿¿Venís???" o "¡¡¡Gracias!!!" en un texto cuidado se escribe con uno de cada lado.</p>
      <p>Por ejemplo, la carta de Graciela al centro de jubilados era un solo bloque sin puntos. La partió en oraciones cortas con punto y seguido, y en 3 párrafos con punto y aparte: la presidenta le dijo que se entendía todo.</p>` },
    { titulo: "Mayúsculas y minúsculas", html: `
      <p class="idea">La <strong>mayúscula</strong> va al empezar un texto, después de punto y en los nombres propios. Los <strong>días, los meses y los idiomas</strong> van en minúscula.</p>
      <table>
        <tr><th>Mayúscula</th><th>Minúscula</th></tr>
        <tr><td>Al empezar un texto y después de un punto</td><td>Después de coma, punto y coma y (casi siempre) dos puntos</td></tr>
        <tr><td>Nombres de personas: Graciela Pérez</td><td>Días de la semana: lunes, sábado</td></tr>
        <tr><td>Lugares: Santa Fe, Río Paraná, Argentina</td><td>Meses: marzo, diciembre</td></tr>
        <tr><td>Instituciones: Escuela N.º 12, Hospital Italiano</td><td>Idiomas y gentilicios: castellano, argentino, santafesino</td></tr>
        <tr><td>Después de ¿ o ¡ si empieza la oración</td><td>Cargos en general: el presidente, la directora</td></tr>
      </table>
      <pre><code>✗ El Lunes 5 de Marzo hay reunión con la Directora.
✓ El lunes 5 de marzo hay reunión con la directora.

✗ Vivo en santa fe y hablo Castellano.
✓ Vivo en Santa Fe y hablo castellano.</code></pre>
      <p><strong>Escribir todo en mayúsculas</strong> se lee como si gritaras, y además cuesta más leerlo. Usalo solo para algo puntual, como un título corto o un "IMPORTANTE".</p>
      <p><strong>Las mayúsculas también llevan tilde,</strong> como viste en el primer módulo: Álvarez, ÚLTIMO.</p>
      <p>Por ejemplo, Graciela escribía "el Martes" y "en Abril" porque le parecía más respetuoso. Ahora sabe que los días y los meses van en minúscula, salvo al empezar una oración.</p>` },
  ],
  practica: [
    "Tomá 3 mensajes tuyos y corregí las comas con la tabla. Anotá cuántas comas agregaste y cuántas sacaste.",
    "Partí un párrafo largo tuyo (o de un diario) en oraciones con punto y seguido y anotá cuántas oraciones quedaron.",
    "Escribí 5 oraciones con días, meses, lugares y nombres, y anotá cuántas mayúsculas usaste y por qué.",
  ],
  recursos: [
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "FundéuRAE: recomendaciones de escritura", url: "https://www.fundeu.es/recomendaciones/" },
    { t: "Academia Argentina de Letras", url: "https://www.aal.edu.ar/" },
  ],
  quiz: [
    { q: "Si empezás un mensaje saludando a Laura, ¿cómo va?", opciones: ["Hola Laura.","Hola, Laura,.","Hola, Laura.","Hola; Laura."], correcta: 2, explicacion: "El nombre de a quien le hablás va entre comas. Sin coma tienta por costumbre de los mensajes." },
    { q: "Si escribís una lista: \"pan leche queso y huevos\", ¿dónde van las comas?", opciones: ["pan, leche, queso y huevos","pan, leche, queso, y huevos","pan leche, queso y, huevos","Sin comas"], correcta: 0, explicacion: "Entre los elementos, menos antes de la última \"y\". La coma antes de \"y\" tienta, pero en una lista simple no va." },
    { q: "Si escribís \"Los vecinos del edificio, se quejaron\", ¿qué corregís?", opciones: ["Nada","Agregás otra coma","Ponés punto","Sacás la coma: no va entre sujeto y verbo"], correcta: 3, explicacion: "Entre quién y qué hace no va coma. \"Nada\" tienta porque al hablar hacés pausa." },
    { q: "Si escribís \"Fui pero no estaba\", ¿qué falta?", opciones: ["Una coma después de \"pero\"","Una coma antes de \"pero\"","Un punto","Nada"], correcta: 1, explicacion: "Antes de pero va coma. Después de pero tienta, pero no corresponde." },
    { q: "Si escribís \"Graciela mi vecina vino ayer\", ¿cómo queda?", opciones: ["Graciela mi vecina, vino ayer.","Graciela, mi vecina vino ayer.","Graciela, mi vecina, vino ayer.","Sin comas"], correcta: 2, explicacion: "La aclaración va entre dos comas. Una sola tienta, pero deja la aclaración a medias." },
    { q: "Si escribís \"Si llueve no vamos\", ¿dónde va la coma?", opciones: ["Si llueve, no vamos.","Si, llueve no vamos.","Si llueve no, vamos.","No va coma nunca"], correcta: 0, explicacion: "La condición va antes y se separa con coma. \"Si, llueve\" tienta, pero corta mal la idea." },
    { q: "Querés anunciar una lista: \"Traé tres cosas DNI, foto y recibo\". ¿Qué falta?", opciones: ["Un punto","Una coma","Comillas","Dos puntos después de \"cosas\""], correcta: 3, explicacion: "Los dos puntos anuncian la lista. La coma tienta, pero no anuncia lo que viene." },
    { q: "Si empezás una carta formal a la directora, ¿cómo escribís el saludo?", opciones: ["Estimada directora,","Estimada directora:","Estimada Directora.","Estimada directora;"], correcta: 1, explicacion: "Después del saludo de una carta van dos puntos. La coma tienta porque se usa en inglés." },
    { q: "Escribís \"¿¿¿Venís???\" en una nota para la escuela. ¿Cómo queda?", opciones: ["¿¿¿Venís???","Venís?","¿Venís?","¿Venís"], correcta: 2, explicacion: "Un signo de cada lado. \"Venís?\" tienta por los mensajes, pero falta el de apertura." },
    { q: "Si escribís \"El Lunes 5 de Marzo\", ¿qué corregís?", opciones: ["lunes y marzo van en minúscula","Nada","Solo marzo","Todo en mayúscula"], correcta: 0, explicacion: "Días y meses van en minúscula. \"Más respetuoso\" tienta como razón, pero es un error." },
    { q: "Si escribís \"Vivo en santa fe\", ¿qué corregís?", opciones: ["Nada","Santa fe","SANTA FE","Santa Fe con mayúscula: es un lugar"], correcta: 3, explicacion: "Los nombres de lugares van con mayúscula. \"Santa fe\" tienta, pero las dos palabras son el nombre." },
    { q: "Querés destacar algo en un mensaje largo. ¿Escribís todo en mayúsculas?", opciones: ["Sí, todo el mensaje","No: solo algo puntual, como \"IMPORTANTE\"","Sí, para que lo lean","Sí, sin tildes"], correcta: 1, explicacion: "Todo en mayúsculas parece un grito. \"Para que lo lean\" tienta, pero cuesta más leerlo." },
  ],
},
{
  id: "redaccion",
  icono: "🧩",
  titulo: "Redactar claro",
  nivel: "Intermedio",
  objetivos: [
    "Escribir oraciones cortas, con una idea cada una, en orden sujeto, verbo y complemento",
    "Unir ideas con conectores y ordenar un texto en párrafos",
    "Revisar un texto para sacar repeticiones y palabras de más",
  ],
  lecciones: [
    { titulo: "Oraciones cortas y en orden", html: `
      <p class="idea">Un texto se entiende cuando tiene <strong>oraciones cortas, con una idea cada una</strong>, en el orden natural: <strong>quién, qué hace y lo demás</strong>.</p>
      <table>
        <tr><th>Difícil</th><th>Claro</th></tr>
        <tr><td>"Debido a que, en virtud de la situación que se ha presentado en el día de ayer con el corte de agua, la reunión prevista se posterga."</td><td>"Ayer se cortó el agua. Por eso, la reunión se pasa para otro día."</td></tr>
        <tr><td>"Se informa que la entrega de los certificados será efectuada por la secretaría."</td><td>"La secretaría entrega los certificados."</td></tr>
      </table>
      <pre><code>Orden natural:
  Quién         + qué hace   + lo demás (a quién, cuándo, dónde)
  La secretaría   entrega      los certificados el lunes.

Reglas prácticas:
- Una idea por oración.
- Menos de 25 palabras por oración (contalas si dudás).
- Palabras simples: "por eso" mejor que "en virtud de ello".
- Quién hace la acción, adelante.</code></pre>
      <p><strong>Escribir difícil no es escribir mejor:</strong> muchas veces se escribe complicado para parecer formal. Lo formal es ser respetuoso y claro, no usar palabras raras.</p>
      <p><strong>Leé en voz alta:</strong> si te quedás sin aire antes de terminar una oración, es demasiado larga.</p>
      <p>Para profundizar, está el curso <strong>Escribir claro</strong> de este sitio.</p>
      <p>Por ejemplo, Graciela escribía cartas al centro de jubilados con oraciones de 60 palabras porque le parecía más serio. Las partió en oraciones de menos de 25 palabras y la comisión le respondió por primera vez a todo lo que pedía.</p>` },
    { titulo: "Conectores y párrafos", html: `
      <p class="idea">Los <strong>conectores</strong> son palabras que unen ideas y dicen <strong>cómo se relacionan</strong>. Los <strong>párrafos</strong> agrupan las oraciones de un mismo tema.</p>
      <table>
        <tr><th>Para...</th><th>Conectores</th><th>Ejemplo</th></tr>
        <tr><td>Sumar</td><td>además, también</td><td>Pido la luz del pasillo. Además, falta un matafuego.</td></tr>
        <tr><td>Oponer</td><td>pero, sin embargo, en cambio</td><td>El salón es grande. Sin embargo, hace frío.</td></tr>
        <tr><td>Causa</td><td>porque, ya que</td><td>No vine porque estaba enferma.</td></tr>
        <tr><td>Consecuencia</td><td>por eso, entonces, así que</td><td>Llovió. Por eso, se suspendió.</td></tr>
        <tr><td>Ordenar</td><td>primero, después, por último</td><td>Primero, llenás el formulario. Después, lo firmás.</td></tr>
        <tr><td>Cerrar</td><td>en resumen, por lo tanto</td><td>En resumen, necesitamos tres cosas.</td></tr>
      </table>
      <pre><code>Un párrafo = un tema.
Párrafo 1: para qué escribo ("Les escribo para pedir...")
Párrafo 2: los detalles (qué pasó, qué necesito)
Párrafo 3: qué espero y el saludo ("Quedo a la espera...")</code></pre>
      <p><strong>No abuses del "y":</strong> "fui y había y esperé y..." es la señal de que faltan puntos y conectores más precisos.</p>
      <p><strong>Una línea en blanco</strong> entre párrafos hace que un mail o un mensaje largo se lea mucho mejor en el celular.</p>
      <p>Por ejemplo, Graciela unía todo con "y" y "que". Empezó a usar "por eso", "sin embargo" y "además", y su nieto le dijo que sus mensajes parecían de otra persona.</p>` },
    { titulo: "Revisar: sacar lo que sobra", html: `
      <p class="idea">El primer borrador nunca es el último. <strong>Revisar</strong> es releer buscando repeticiones, palabras de más y errores. Es la parte que más mejora un texto.</p>
      <table>
        <tr><th>Busco...</th><th>Antes</th><th>Después</th></tr>
        <tr><td>Repeticiones</td><td>La reunión es el lunes. En la reunión vamos a hablar de la reunión anual.</td><td>La reunión es el lunes. Vamos a hablar del encuentro anual.</td></tr>
        <tr><td>Palabras de más</td><td>Subir para arriba, salir afuera, en el día de hoy</td><td>Subir, salir, hoy</td></tr>
        <tr><td>"Que" repetidos</td><td>Te digo que me dijeron que la que vino dijo que...</td><td>Me contaron lo que dijo la señora que vino.</td></tr>
        <tr><td>Ortografía</td><td>Tildes, b/v, haber/a ver</td><td>Lo de los módulos anteriores</td></tr>
      </table>
      <pre><code>Revisión en 4 pasadas (para un texto importante):
1. ¿Se entiende? Leelo como si fueras quien lo recibe.
2. ¿Sobra algo? Tachá repeticiones y palabras de más.
3. ¿Puntuación? Comas, puntos, signos de pregunta.
4. ¿Ortografía? Tildes y palabras dudosas, una por una.
Si podés, dejalo descansar un rato entre la escritura y la revisión.</code></pre>
      <p><strong>Leer en voz alta</strong> ayuda a encontrar oraciones que no suenan bien. <strong>Leer en papel</strong> o con la letra más grande también: los errores saltan más.</p>
      <p><strong>Un sinónimo</strong> es una palabra que significa lo mismo que otra (reunión, encuentro). Sirven para no repetir, pero sin exagerar.</p>
      <p>Por ejemplo, Graciela escribió su carta, la dejó una hora y la revisó en 4 pasadas. Encontró 3 tildes que faltaban, una coma entre sujeto y verbo y la palabra "reunión" 5 veces.</p>` },
  ],
  practica: [
    "Tomá un texto tuyo, contá las palabras de cada oración y partí las que pasen de 25. Anotá cuántas partiste.",
    "Reescribí un párrafo tuyo usando al menos 3 conectores de la tabla y anotá cuáles usaste.",
    "Revisá un texto tuyo con las 4 pasadas y anotá cuántos cambios hiciste en cada una.",
  ],
  recursos: [
    { t: "Curso de este sitio: Escribir claro", url: "https://pkeios.github.io/EiaLearning/escritura-clara/" },
    { t: "FundéuRAE: recomendaciones de escritura", url: "https://www.fundeu.es/recomendaciones/" },
    { t: "Curso de este sitio: Leer mejor y entender lo que leés", url: "https://pkeios.github.io/EiaLearning/lectura/" },
  ],
  quiz: [
    { q: "Si escribís una oración de 60 palabras para que suene seria, ¿qué conviene?", opciones: ["Dejarla, es más formal","Agregarle más palabras","Partirla en oraciones de menos de 25 palabras","Sacarle los puntos"], correcta: 2, explicacion: "Cortas se entienden mejor. \"Más formal\" tienta, pero formal es claro, no largo." },
    { q: "Si escribís \"Se informa que la entrega será efectuada por la secretaría\", ¿cómo queda más claro?", opciones: ["\"La secretaría entrega...\"","\"Se informa que se efectúa la entrega...\"","\"Por la secretaría será...\"","Igual"], correcta: 0, explicacion: "Quién hace la acción, adelante. Las otras tientan por formales, pero esconden quién lo hace." },
    { q: "Querés escribir \"en virtud de ello\". ¿Qué palabra más simple usás?", opciones: ["en consecuencia de lo antedicho","a raíz de lo cual","no hay otra","por eso"], correcta: 3, explicacion: "Lo simple es más claro. Las largas tientan por serias, pero cuestan más." },
    { q: "Leés tu oración en voz alta y te quedás sin aire. ¿Qué te dice?", opciones: ["Que está perfecta","Que es demasiado larga","Que te falta práctica de lectura","Que le faltan comas solamente"], correcta: 1, explicacion: "Es la señal de una oración larga. Las comas tientan como solución, pero falta partirla." },
    { q: "Querés oponer dos ideas: \"El salón es grande. ___, hace frío\". ¿Qué conector va?", opciones: ["Además","Por eso","Sin embargo","Primero"], correcta: 2, explicacion: "Opone una idea a otra. \"Además\" tienta, pero suma, no opone." },
    { q: "Querés decir la consecuencia: \"Llovió. ___, se suspendió\". ¿Qué va?", opciones: ["Por eso","Sin embargo","Además","Aunque"], correcta: 0, explicacion: "Por eso marca consecuencia. \"Sin embargo\" tienta, pero opone." },
    { q: "Tu mensaje dice \"fui y había gente y esperé y no andaba y volví\". ¿Qué falta?", opciones: ["Más \"y\"","Mayúsculas","Emojis","Puntos y conectores más precisos"], correcta: 3, explicacion: "Tantos \"y\" son señal de que faltan puntos. Más \"y\" tienta, pero empeora." },
    { q: "Si escribís un mail largo, ¿cómo ordenás los párrafos?", opciones: ["Todo en un solo párrafo","Para qué escribo, los detalles y qué espero con el saludo","Un párrafo por oración siempre","El saludo en el medio"], correcta: 1, explicacion: "Un párrafo por tema. Uno solo tienta por corto, pero cuesta leerlo." },
    { q: "Escribiste \"reunión\" 5 veces en un párrafo. ¿Qué hacés?", opciones: ["Nada","La escribís con mayúscula","Cambiás algunas por un sinónimo o reescribís para no repetir","La borrás todas"], correcta: 2, explicacion: "Las repeticiones cansan. Borrarlas todas tienta, pero se pierde el sentido." },
    { q: "Si escribís \"subir para arriba\", ¿qué corregís?", opciones: ["Solo \"subir\": \"para arriba\" sobra","Nada","\"subir arriba para\"","\"subir hacia arriba de\""], correcta: 0, explicacion: "Subir ya es hacia arriba. \"Nada\" tienta porque se dice así, pero sobra." },
    { q: "Si terminaste una carta importante, ¿cuándo la revisás mejor?", opciones: ["Nunca, el primer borrador alcanza","Mientras la escribís","Al otro año","Después de dejarla descansar un rato"], correcta: 3, explicacion: "Con distancia ves los errores. \"Primer borrador alcanza\" tienta, pero casi siempre tiene errores." },
    { q: "Querés encontrar más errores al revisar. ¿Qué te ayuda?", opciones: ["Leer más rápido","Leer en voz alta o en papel","Leer solo el principio","No releer"], correcta: 1, explicacion: "Cambiar la forma de leer hace saltar los errores. Más rápido tienta, pero se pasan más." },
  ],
},
{
  id: "herramientas",
  icono: "🧰",
  titulo: "Correctores, diccionarios y mensajes",
  nivel: "Avanzado",
  objetivos: [
    "Usar el corrector del celular y de la computadora sabiendo cuándo se equivoca",
    "Resolver una duda con el diccionario o con FundéuRAE",
    "Adaptar la escritura a cada mensaje: chat, mail, nota formal",
  ],
  lecciones: [
    { titulo: "Los correctores: ayudan, pero no piensan", html: `
      <p class="idea">El corrector del celular, de Word o de Google Docs y herramientas como <strong>LanguageTool</strong> marcan muchos errores. Pero <strong>no entienden lo que querés decir</strong>: no todo lo que marcan está mal, ni todo lo que no marcan está bien.</p>
      <table>
        <tr><th>El corrector...</th><th>Ejemplo</th></tr>
        <tr><td>Encuentra bien</td><td>Letras cambiadas: "teléfnoo"; tildes en palabras que siempre las llevan: "musica"</td></tr>
        <tr><td>No ve</td><td>Palabras que existen pero no van: "hay" por "ahí", "echo" por "hecho", "si" por "sí"</td></tr>
        <tr><td>Marca de más</td><td>Voseo ("tenés", "vení"), nombres propios, palabras argentinas</td></tr>
        <tr><td>Cambia solo (autocorrector)</td><td>"Mañana te llevo la vianda" → "Mañana te llevo la viuda"</td></tr>
      </table>
      <pre><code>Cómo configurarlo:
- Celular: Configuración → Idioma y teclado → idioma "Español (Argentina)"
  si está; así acepta el voseo.
- Word o Google Docs: Revisar → Idioma → Español (Argentina).
- Si una palabra correcta aparece marcada siempre (tu apellido,
  tu barrio), agregala al diccionario del corrector.</code></pre>
      <p><strong>El corrector es una segunda mirada, no la primera:</strong> si confiás solo en él, se te pasan justo los errores de este curso (haber/a ver, porque/por qué, tildes diacríticas).</p>
      <p><strong>LanguageTool</strong> es un corrector gratis en línea que revisa ortografía y también algo de gramática y puntuación. Igual, decidí vos cada cambio.</p>
      <p>Por ejemplo, el corrector de Graciela no marcó "Hay te aviso" porque "hay" existe. Ella lo encontró con la prueba del módulo de confusiones y lo cambió por "Ahí te aviso".</p>` },
    { titulo: "Diccionarios y consultas", html: `
      <p class="idea">Cuando tenés una duda que el corrector no resuelve, <strong>consultá una fuente confiable</strong>: el diccionario de la Real Academia Española o las respuestas de <strong>FundéuRAE</strong>.</p>
      <table>
        <tr><th>Fuente</th><th>Para qué</th><th>Cómo</th></tr>
        <tr><td>Diccionario de la lengua española (RAE)</td><td>Ver si una palabra existe, cómo se escribe y qué significa</td><td>Buscalo en internet o en su app gratis; escribí la palabra</td></tr>
        <tr><td>FundéuRAE</td><td>Dudas de uso: "¿se dice...?", "¿lleva tilde...?"</td><td>Buscá tu duda en su sitio: casi siempre alguien ya la preguntó</td></tr>
        <tr><td>Academia Argentina de Letras</td><td>Palabras y usos propios de Argentina</td><td>Su sitio tiene información sobre el español de Argentina</td></tr>
      </table>
      <pre><code>Cómo buscar una duda en internet:
✗ "como se escribe"                 (muy general)
✓ "porque o por qué fundeu"          (la duda + la fuente)
✓ "haber o a ver"                    (las dos opciones)

Desconfiá de foros y respuestas sin fuente:
fijate que la respuesta venga de la RAE, FundéuRAE o una academia.</code></pre>
      <p><strong>El diccionario también tiene el voseo:</strong> en muchas conjugaciones muestra las formas con vos que se usan en Argentina.</p>
      <p><strong>La IA puede ayudar</strong> a explicar una regla, pero también se equivoca. Si te responde algo importante, confirmalo en una de estas fuentes.</p>
      <p>Por ejemplo, Graciela no sabía si "guion" llevaba tilde. Buscó "guion tilde fundeu" y encontró que se escribe sin tilde, porque se considera una palabra de una sílaba.</p>` },
    { titulo: "Cada mensaje, su forma", html: `
      <p class="idea">No se escribe igual un chat con tu hija que un mail a la escuela o una nota para un trámite. Adaptá el <strong>tono y el cuidado</strong> a quién lo recibe.</p>
      <table>
        <tr><th>Mensaje</th><th>Tono</th><th>Cuidado de la ortografía</th></tr>
        <tr><td>Chat con familia y amigos</td><td>Informal</td><td>Lo que quieras; igual, mejor que se entienda</td></tr>
        <tr><td>Mensaje a la escuela, al médico, a un comercio</td><td>Amable y claro</td><td>Alto: tildes, signos y saludo</td></tr>
        <tr><td>Mail o nota formal (trabajo, trámite, reclamo)</td><td>Formal y respetuoso</td><td>Máximo: revisión en 4 pasadas</td></tr>
        <tr><td>Currículum o carta de presentación</td><td>Formal</td><td>Máximo: un error puede dejarte afuera</td></tr>
      </table>
      <pre><code>Nota formal (modelo):
Santa Fe, 10 de marzo de 2026

Sra. directora de la Escuela N.º 12:

Me dirijo a usted para solicitar una entrevista por la
situación de mi nieto, Tomás Pérez, de 4.º grado.

Quedo a disposición en el teléfono 342 555-1234
(número de ejemplo). Desde ya, muchas gracias.

Graciela Pérez</code></pre>
      <p><strong>Lugar y fecha</strong> arriba, <strong>saludo con dos puntos</strong>, el pedido claro en el primer párrafo, <strong>datos de contacto</strong> y la firma. Fijate: "marzo" va en minúscula.</p>
      <p><strong>Los mensajes formales no llevan abreviaturas</strong> de chat ("xq", "tmb", "q") ni emojis.</p>
      <p>Para mails del trabajo, está el curso <strong>Mails profesionales</strong> de este sitio.</p>
      <p>Por ejemplo, Graciela mandaba a la escuela mensajes como los del chat familiar. Con el modelo de nota, pidió una entrevista y la directora le respondió al día siguiente.</p>` },
  ],
  practica: [
    "Configurá el idioma del corrector de tu celular o de Word en español de Argentina (si existe) y anotá si dejó de marcar \"tenés\".",
    "Buscá 3 dudas tuyas en FundéuRAE o en el diccionario de la RAE y anotá la respuesta de cada una.",
    "Escribí una nota formal con el modelo de la lección (para la escuela, el consorcio o un trámite) y anotá cuántos de sus 5 elementos tiene.",
  ],
  recursos: [
    { t: "LanguageTool: corrector de ortografía y gramática gratis en línea", url: "https://languagetool.org/es" },
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Curso de este sitio: Mails profesionales", url: "https://pkeios.github.io/EiaLearning/mail-profesional/" },
  ],
  quiz: [
    { q: "El corrector no marcó nada en tu mensaje. ¿Está todo bien?", opciones: ["Sí, seguro","Sí, si es de Word","No necesariamente: no ve palabras que existen, pero no van","Sí, si el celular es nuevo"], correcta: 2, explicacion: "No detecta \"hay\" por \"ahí\" o \"si\" por \"sí\". \"Seguro\" tienta por confianza en la máquina." },
    { q: "El corrector te marca \"vení\" como error. ¿Qué hacés?", opciones: ["Lo dejás: el voseo es correcto en Argentina","Lo cambiás por \"ven\"","Le sacás la tilde","Lo cambiás por \"venga\""], correcta: 0, explicacion: "Está configurado en otro español. Cambiarlo tienta porque lo marca, pero \"vení\" es correcto." },
    { q: "Si el autocorrector cambió \"vianda\" por \"viuda\", ¿cómo lo evitás?", opciones: ["Desinstalando el teclado","Escribiendo más rápido","No usando nunca el celular","Releyendo antes de enviar"], correcta: 3, explicacion: "Releer atrapa esos cambios. Escribir más rápido tienta, pero hay más errores." },
    { q: "Tu apellido aparece marcado como error cada vez. ¿Qué hacés?", opciones: ["Lo escribís distinto","Lo agregás al diccionario del corrector","Desactivás el corrector","Lo ignorás siempre"], correcta: 1, explicacion: "Así deja de marcarlo. Desactivar el corrector tienta, pero perdés su ayuda." },
    { q: "Querés saber cómo se escribe una palabra y qué significa. ¿Dónde buscás?", opciones: ["En un foro sin fuente","En el primer comentario que aparezca","En el diccionario de la RAE","En el autocorrector"], correcta: 2, explicacion: "El diccionario es la fuente. El foro tienta por rápido, pero puede estar mal." },
    { q: "Tenés una duda de uso: \"¿porque o por qué?\". ¿Cómo la buscás?", opciones: ["\"porque o por qué fundeu\"","\"como se escribe\"","\"duda\"","\"ortografía\""], correcta: 0, explicacion: "La duda más la fuente da la respuesta justa. \"como se escribe\" tienta, pero es muy general." },
    { q: "Una IA te explicó una regla de ortografía para un currículum. ¿Qué hacés?", opciones: ["La aplicás sin dudar","La ignorás siempre","Le preguntás a otra IA","La confirmás en la RAE o en FundéuRAE"], correcta: 3, explicacion: "La IA también se equivoca. Otra IA tienta como chequeo, pero no es una fuente confiable." },
    { q: "Le escribís a tu hija por chat. ¿Qué tono usás?", opciones: ["El de una nota formal","Informal","Con lugar y fecha","Con \"Me dirijo a usted\""], correcta: 1, explicacion: "Cada mensaje su forma. La nota formal tienta por correcta, pero suena rara con la familia." },
    { q: "Vas a mandar tu currículum. ¿Cuánto cuidás la ortografía?", opciones: ["Como en un chat","No importa si el contenido es bueno","Al máximo: un error puede dejarte afuera","Solo el nombre"], correcta: 2, explicacion: "Es lo primero que ven. \"Si el contenido es bueno\" tienta, pero un error da mala impresión." },
    { q: "Si escribís una nota formal a la escuela, ¿cómo va el saludo?", opciones: ["Sra. directora de la Escuela N.º 12:","Hola directora!!","Sra. Directora de la escuela,","Buenas"], correcta: 0, explicacion: "Saludo formal con dos puntos. La coma tienta por costumbre, pero en cartas van dos puntos." },
    { q: "En tu nota formal escribiste \"10 de Marzo\". ¿Qué corregís?", opciones: ["Nada","10 De Marzo","MARZO","marzo en minúscula"], correcta: 3, explicacion: "Los meses van en minúscula. \"Nada\" tienta porque se ve más formal." },
    { q: "Si en un mail a un comercio escribiste \"xq tmb necesito factura\", ¿qué corregís?", opciones: ["Nada, se entiende","Escribís completo: \"porque también necesito factura\"","Agregás emojis","Lo pasás a mayúsculas"], correcta: 1, explicacion: "En mensajes formales no van abreviaturas de chat. \"Se entiende\" tienta, pero da mala imagen." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: corregir y mejorar un texto tuyo",
  nivel: "Avanzado",
  objetivos: [
    "Diagnosticar tus errores más frecuentes en un texto real",
    "Corregir y reescribir ese texto aplicando todo el curso",
    "Evaluar el resultado con una rúbrica y armar un plan de práctica",
  ],
  lecciones: [
    { titulo: "Tu diagnóstico", html: `
      <p class="idea">Cada persona tiene <strong>sus errores de siempre</strong>. El proyecto empieza buscándolos en textos tuyos: así sabés qué practicar.</p>
      <pre><code>Juntá 3 textos tuyos (mensajes, mails, una carta, un trabajo).
Marcá cada error con una letra según su tipo:

T = tilde               L = letra (b/v, c/s/z, g/j, h, ll/y)
C = confusión (haber/a ver, porque/por qué, sino/si no...)
P = puntuación (comas, puntos, signos)
M = mayúsculas
R = redacción (oración muy larga, repetición, palabra de más)</code></pre>
      <table>
        <tr><th>Tipo</th><th>Cantidad de errores</th><th>Módulo para repasar</th></tr>
        <tr><td>T</td><td>___</td><td>Las tildes y Tildes especiales</td></tr>
        <tr><td>L</td><td>___</td><td>B o V, C, S o Z...</td></tr>
        <tr><td>C</td><td>___</td><td>Palabras que se confunden</td></tr>
        <tr><td>P y M</td><td>___</td><td>Comas, puntos y otros signos</td></tr>
        <tr><td>R</td><td>___</td><td>Redactar claro</td></tr>
      </table>
      <p><strong>Los 3 errores que más se repiten</strong> son tu prioridad. No hace falta saber todas las reglas: con corregir tus 3 errores típicos, tus textos mejoran muchísimo.</p>
      <p><strong>Sin culpa:</strong> todos tenemos errores de siempre. El diagnóstico no es para sentirse mal, sino para saber dónde poner el esfuerzo.</p>
      <p>Por ejemplo, Graciela marcó 3 mensajes y una carta. Le salieron 14 errores de tilde (casi todos en verbos con -ía y en el voseo), 6 de puntuación y 4 de haber/a ver. Ya sabía qué practicar.</p>` },
    { titulo: "Corregir y reescribir", html: `
      <p class="idea">Elegí <strong>un texto importante</strong> (una carta, un mail, tu currículum) y llevalo a su mejor versión con todo lo que aprendiste.</p>
      <pre><code>Proceso:
1. Copiá el texto original (guardalo para comparar).
2. Primera pasada: ¿se entiende? Reordená y partí oraciones largas.
3. Segunda pasada: sacá repeticiones y palabras de más.
4. Tercera pasada: puntuación y mayúsculas.
5. Cuarta pasada: ortografía, con especial atención
   a tus 3 errores típicos del diagnóstico.
6. Pasalo por un corrector (LanguageTool o Word) y decidí
   vos cada cambio que proponga.
7. Leelo en voz alta una última vez.</code></pre>
      <table>
        <tr><th>Antes (fragmento de Graciela)</th><th>Después</th></tr>
        <tr><td>"Me dirijo a ustedes haber si se puede arreglar la luz del salon por que el Martes no se veia nada y los socios se quejaron y tambien falta un matafuego"</td><td>"Les escribo para pedir que se arregle la luz del salón. El martes no se veía nada y los socios se quejaron. Además, falta un matafuego."</td></tr>
      </table>
      <p><strong>Contá los cambios:</strong> en el ejemplo de Graciela hay tildes (salón, veía, también), confusiones ("haber si" pasó a "para pedir", y "por que" debía ser "porque", aunque en la versión nueva se cambió por un punto), mayúscula (martes) y redacción (una oración de 31 palabras partida en tres).</p>
      <p><strong>Pedí otra mirada:</strong> si alguien de confianza escribe bien, mostrale la versión final. Una segunda persona ve lo que vos ya no ves.</p>
      <p>Por ejemplo, Graciela reescribió su currículum con este proceso. Encontró 9 errores que antes no veía y lo mandó a tres lugares con más confianza.</p>` },
    { titulo: "Evaluá con la rúbrica y seguí practicando", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para comparar tu texto original con el corregido.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Tildes</td><td>Sin errores</td><td>1 o 2 errores</td><td>3 o más</td></tr>
        <tr><td>Letras y confusiones</td><td>Sin errores</td><td>1 o 2 errores</td><td>3 o más</td></tr>
        <tr><td>Puntuación y mayúsculas</td><td>Sin errores</td><td>1 o 2 errores</td><td>3 o más</td></tr>
        <tr><td>Oraciones</td><td>Todas de menos de 25 palabras, una idea cada una</td><td>Alguna muy larga</td><td>Varias muy largas</td></tr>
        <tr><td>Orden</td><td>Párrafos por tema y conectores</td><td>Párrafos sin conectores</td><td>Un solo bloque</td></tr>
        <tr><td>Adecuación</td><td>Tono justo para quien lo recibe</td><td>Algún detalle fuera de tono</td><td>Tono equivocado</td></tr>
      </table>
      <pre><code>Total: ___ de 12 (original)    ___ de 12 (corregido)

Plan de práctica (15 minutos, 3 veces por semana):
- Lunes:    repasar la regla de tu error típico n.º 1 y escribir 5 oraciones
- Miércoles: lo mismo con el error n.º 2
- Viernes:  revisar con las 4 pasadas un mensaje real que tengas que mandar</code></pre>
      <p><strong>Leer también ayuda a escribir:</strong> cuanto más leés textos bien escritos, más se te graban las palabras. El curso <strong>Leer mejor y entender lo que leés</strong> de este sitio te ayuda con el hábito.</p>
      <p>Por ejemplo, la carta original de Graciela sacó 4 de 12 y la corregida, 11. Con su plan de práctica, al mes sus mensajes a la escuela ya salían sin errores de tilde.</p>` },
  ],
  practica: [
    "Hacé el diagnóstico con 3 textos tuyos y anotá cuántos errores de cada tipo encontraste y cuáles son tus 3 errores típicos.",
    "Corregí un texto importante con las 7 etapas del proceso y anotá cuántos cambios hiciste.",
    "Puntuá el original y el corregido con la rúbrica y anotá los dos totales de 12.",
    "Seguí tu plan de práctica 2 semanas y anotá cuántos errores de tu tipo n.º 1 aparecen en tus mensajes al final.",
  ],
  recursos: [
    { t: "LanguageTool: corrector de ortografía y gramática gratis en línea", url: "https://languagetool.org/es" },
    { t: "FundéuRAE: respuestas a dudas del español", url: "https://www.fundeu.es/consultas/" },
    { t: "Curso de este sitio: Escribir claro", url: "https://pkeios.github.io/EiaLearning/escritura-clara/" },
  ],
  quiz: [
    { q: "Vas a empezar el proyecto. ¿Qué hacés primero?", opciones: ["Estudiar todas las reglas de nuevo","Escribir un texto nuevo sin mirar los viejos","Un diagnóstico de tus errores en textos tuyos","Pasar todo por el corrector"], correcta: 2, explicacion: "Saber tus errores dice qué practicar. Estudiar todo tienta por completo, pero es mucho y sin foco." },
    { q: "En tu diagnóstico, \"haber si venís\" lo marcás como...", opciones: ["C, confusión","T, tilde","M, mayúscula","R, redacción"], correcta: 0, explicacion: "Haber/a ver es una confusión de palabras. T tienta, pero no falta ninguna tilde." },
    { q: "Tu diagnóstico dice 14 errores de tilde, 6 de puntuación y 4 de confusiones. ¿Qué priorizás?", opciones: ["Las confusiones, que son pocas","Todo igual","Nada, son pocos errores","Las tildes, que es lo que más se repite"], correcta: 3, explicacion: "Empezá por lo más frecuente. \"Todo igual\" tienta, pero el esfuerzo rinde más donde hay más errores." },
    { q: "Si te salieron muchos errores en el diagnóstico, ¿cómo lo tomás?", opciones: ["Como prueba de que no sabés escribir","Como información para saber qué practicar","Como motivo para dejar","Como culpa del corrector"], correcta: 1, explicacion: "Todos tenemos errores de siempre. \"No sabés escribir\" tienta, pero es un punto de partida." },
    { q: "Vas a reescribir el texto. ¿Qué hacés con el original?", opciones: ["Lo borrás","Lo corregís encima sin copia","Lo guardás para comparar","Lo mandás igual"], correcta: 2, explicacion: "Guardarlo te deja ver cuánto mejoró. Borrarlo tienta para empezar limpio, pero perdés la comparación." },
    { q: "En la primera pasada de corrección, ¿qué buscás?", opciones: ["Si se entiende: reordenar y partir oraciones largas","Solo las tildes","Solo las comas","El color de la letra"], correcta: 0, explicacion: "Primero el sentido, después los detalles. Las tildes tientan por ser lo más visible, pero van al final." },
    { q: "El corrector te propone 10 cambios. ¿Qué hacés?", opciones: ["Los aceptás todos","Los rechazás todos","Aceptás solo los primeros 5","Decidís vos cada uno"], correcta: 3, explicacion: "El corrector se equivoca a veces. Aceptarlos todos tienta por rápido, pero te puede cambiar el voseo." },
    { q: "En \"por que el Martes no se veia nada\", ¿cuántos errores hay?", opciones: ["Uno","Tres: por que, Martes y veia","Ninguno","Dos"], correcta: 1, explicacion: "Por que (causa: porque), martes en minúscula y veía con tilde. \"Uno\" tienta si solo ves la tilde." },
    { q: "Tu texto corregido tiene 1 error de tilde. ¿Cuántos puntos sacás en \"Tildes\"?", opciones: ["2","0","1","12"], correcta: 2, explicacion: "1 o 2 errores es 1 punto. 2 tienta porque es uno solo, pero 2 es sin errores." },
    { q: "Tu texto tiene una oración de 31 palabras. ¿Qué criterio baja?", opciones: ["Oraciones","Tildes","Adecuación","Ninguno"], correcta: 0, explicacion: "El criterio pide menos de 25 palabras. Adecuación tienta, pero trata el tono." },
    { q: "Querés seguir mejorando después del curso. ¿Qué plan conviene?", opciones: ["3 horas un día y nada más","Repasar todas las reglas cada día","Esperar a tener que escribir algo importante","15 minutos, 3 veces por semana, sobre tus errores típicos"], correcta: 3, explicacion: "Poco y seguido funciona. \"3 horas un día\" tienta por mucho, pero no se sostiene." },
    { q: "¿Qué otra cosa ayuda a escribir mejor, según la lección?", opciones: ["Escribir solo en mayúsculas","Leer textos bien escritos","Usar más abreviaturas","No escribir nunca"], correcta: 1, explicacion: "Leer graba las palabras. Las abreviaturas tientan por rápidas, pero no ayudan." },
  ],
},
];
