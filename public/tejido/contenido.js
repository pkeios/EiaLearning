// Temario del curso "Tejido con agujas y crochet". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js tejido y node tools/metodologia.js tejido
window.TEMARIO = [
{
  id: "materiales",
  icono: "🧶",
  titulo: "Lanas, agujas y ganchillos",
  nivel: "Básico",
  objetivos: [
    "Leer la etiqueta de una lana: grosor, metros, aguja recomendada y lote",
    "Elegir agujas y ganchillo del número justo para esa lana",
    "Armar un costurero de tejido barato y tejer cómodo, sin dolores",
  ],
  lecciones: [
    { titulo: "La lana y su etiqueta", html: `
      <p class="idea">La <strong>etiqueta</strong> del ovillo trae casi todo lo que necesitás saber: de qué está hecha la lana, cuánto pesa, cuántos metros tiene, qué aguja usar y cómo lavarla.</p>
      <p>En todo el curso acompañamos a <strong>Elena</strong>, jubilada en Córdoba, que quiere tejer bufandas y gorros para sus nietos y, más adelante, venderlos en la feria del barrio.</p>
      <table>
        <tr><th>Dato de la etiqueta</th><th>Para qué te sirve</th></tr>
        <tr><td>Composición (lana, acrílico, algodón)</td><td>Saber si abriga, si pica y cómo se lava</td></tr>
        <tr><td>Peso y metros (por ejemplo, 100 g · 200 m)</td><td>Calcular cuántos ovillos comprar</td></tr>
        <tr><td>Aguja o ganchillo recomendado (por ejemplo, 4 a 5 mm)</td><td>Elegir el número justo</td></tr>
        <tr><td>Lote de tintura (un número)</td><td>Comprar todos los ovillos del mismo lote, para que no cambie el color</td></tr>
        <tr><td>Símbolos de lavado</td><td>No arruinar la prenda en el lavarropas</td></tr>
      </table>
      <table>
        <tr><th>Fibra</th><th>Cómo es</th><th>Para empezar</th></tr>
        <tr><td>Acrílico</td><td>Barato, se lava fácil, no encoge</td><td>Muy buena para aprender</td></tr>
        <tr><td>Lana de oveja</td><td>Abriga mucho; algunas pican y pueden encoger con agua caliente</td><td>Para prendas de invierno</td></tr>
        <tr><td>Algodón</td><td>Fresco, no estira</td><td>Para repasadores y cosas de verano</td></tr>
      </table>
      <p><strong>Para aprender, elegí una lana lisa, de color claro y de grosor medio:</strong> en las lanas oscuras o peludas no se ven los puntos y cuesta encontrar los errores.</p>
      <p>Por ejemplo, Elena compró 3 ovillos de lana roja para una bufanda y al terminar uno se notaba más oscuro. Eran de lotes distintos. Desde entonces mira el número de lote antes de pagar.</p>` },
    { titulo: "Agujas y ganchillos", html: `
      <p class="idea">Las <strong>agujas de tejer</strong> (para tejer a dos agujas) y el <strong>ganchillo</strong> (para crochet) se numeran por su grosor en <strong>milímetros</strong>: una aguja número 4 mide 4 mm. Cuanto más gruesa la lana, más gruesa la aguja.</p>
      <table>
        <tr><th>Grosor de la lana</th><th>Aguja o ganchillo aproximado</th><th>Para qué</th></tr>
        <tr><td>Fina (para bebé)</td><td>2,5 a 3,5 mm</td><td>Ropa de bebé, prendas livianas</td></tr>
        <tr><td>Mediana</td><td>4 a 5,5 mm</td><td>Bufandas, gorros: la mejor para aprender</td></tr>
        <tr><td>Gruesa</td><td>6 a 9 mm</td><td>Cuellos y mantas que se tejen rápido</td></tr>
      </table>
      <p>La tabla es una guía: lo que manda es lo que dice <strong>la etiqueta de tu lana</strong>.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th></tr>
        <tr><td>Agujas rectas (un par)</td><td>Tejer a dos agujas, de ida y vuelta</td></tr>
        <tr><td>Agujas circulares</td><td>Dos agujas unidas por un cable: tejer en redondo (gorros) o piezas anchas</td></tr>
        <tr><td>Ganchillo</td><td>Tejer crochet</td></tr>
        <tr><td>Aguja lanera</td><td>Una aguja de punta roma y ojo grande, para coser y esconder las hebras</td></tr>
        <tr><td>Marcadores de puntos</td><td>Aritos que marcan un lugar del tejido (un clip sirve)</td></tr>
        <tr><td>Tijera y cinta métrica</td><td>Cortar y medir</td></tr>
      </table>
      <p><strong>Para empezar alcanza con</strong> un par de agujas de 4,5 o 5 mm, un ganchillo de 5 mm, una aguja lanera y 2 ovillos de acrílico mediano.</p>
      <p>Por ejemplo, Elena quería tejer con agujas de 3 mm una lana gruesa y el tejido le quedaba duro como cartón. Con agujas de 6 mm, como decía la etiqueta, quedó blando.</p>` },
    { titulo: "Tejer cómodo y seguro", html: `
      <p class="idea">Tejer es tranquilo, pero muchas horas con las manos en la misma posición cansan. <strong>Postura, pausas y buena luz</strong> evitan dolores de manos, cuello y espalda.</p>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Sentado con la espalda apoyada y los pies en el piso</td><td>Encorvado sobre el tejido</td></tr>
        <tr><td>Pausa de 5 minutos cada 30 a 45, moviendo manos y muñecas</td><td>Tres horas seguidas</td></tr>
        <tr><td>Luz que llegue de costado al tejido</td><td>Tejer en penumbra</td></tr>
        <tr><td>Tensión de la lana suave, sin apretar los dedos</td><td>Agarrar las agujas con fuerza</td></tr>
        <tr><td>Agujas y tijera guardadas, lejos de chicos y mascotas</td><td>Agujas sueltas en el sillón</td></tr>
      </table>
      <pre><code>Ejercicio para las manos (antes y después de tejer):
1. Abrí y cerrá las manos 10 veces, despacio.
2. Girá las muñecas 10 veces para cada lado.
3. Estirá los dedos hacia atrás con la otra mano, 10 segundos.</code></pre>
      <p><strong>Si aparece dolor, hormigueo o adormecimiento</strong> en las manos que no se va con el descanso, dejá de tejer unos días y consultá a un médico.</p>
      <p><strong>Ovillo ordenado:</strong> poné el ovillo en una bolsa o un bowl a tu lado, así no rueda ni se enreda, y los gatos no lo persiguen.</p>
      <p>Por ejemplo, Elena tejía 3 horas seguidas y terminaba con la muñeca dolorida. Empezó a parar cada 40 minutos con el ejercicio de manos y el dolor desapareció.</p>` },
  ],
  practica: [
    "Leé la etiqueta de 2 ovillos y anotá composición, peso, metros, aguja recomendada y número de lote.",
    "Armá tu costurero de tejido y anotá qué tenías y qué compraste, con el número de aguja y de ganchillo.",
    "Tejé (o practicá con las agujas) 30 minutos con la postura y la pausa de la lección, y anotá si terminaste con alguna molestia.",
  ],
  recursos: [
    { t: "Craft Yarn Council: grosores de lana estándar (en inglés)", url: "https://www.craftyarncouncil.com/standards/yarn-weight-system" },
    { t: "Craft Yarn Council: tabla de agujas y ganchillos en milímetros (en inglés)", url: "https://www.craftyarncouncil.com/standards/hooks-and-needles" },
  ],
  quiz: [
    { q: "Si vas a comprar 3 ovillos para una bufanda, ¿qué número revisás que sea igual en todos?", opciones: ["El precio","El código de barras","El lote de tintura","El peso solamente"], correcta: 2, explicacion: "Lotes distintos pueden tener otro tono. El peso tienta porque está en la etiqueta, pero el color depende del lote." },
    { q: "Querés saber cuántos ovillos necesitás. ¿Qué dato de la etiqueta usás?", opciones: ["Los metros (o el peso) de cada ovillo","El color","El nombre de la marca","El símbolo de lavado"], correcta: 0, explicacion: "Con los metros calculás cuántos te hacen falta. El color tienta, pero no dice cuánto alcanza." },
    { q: "Si estás aprendiendo, ¿qué lana conviene?", opciones: ["Negra y peluda","Muy fina, de bebé","Cualquiera, da igual","Lisa, clara y de grosor medio"], correcta: 3, explicacion: "En una lana lisa y clara se ven los puntos. La peluda tienta por linda, pero esconde los errores." },
    { q: "Querés una lana que se lave fácil y no encoja para tus primeras prácticas. ¿Cuál elegís?", opciones: ["Lana de oveja que encoge con agua caliente","Acrílico","Seda","Cualquiera sin mirar la etiqueta"], correcta: 1, explicacion: "El acrílico es barato y fácil de lavar. La lana de oveja tienta porque abriga, pero puede encoger." },
    { q: "¿Qué quiere decir que una aguja es número 5?", opciones: ["Que es la quinta de un juego","Que mide 5 cm de largo","Que mide 5 mm de grosor","Que sirve para 5 ovillos"], correcta: 2, explicacion: "El número es el grosor en milímetros. El largo tienta, pero no es lo que indica." },
    { q: "Tejés una lana gruesa con agujas muy finas y el tejido queda duro. ¿Qué cambiás?", opciones: ["Usás agujas del grosor que dice la etiqueta","Apretás más fuerte","Usás agujas todavía más finas","Cambiás de color"], correcta: 0, explicacion: "La aguja justa da un tejido blando. Apretar más tienta, pero lo endurece más." },
    { q: "Querés tejer un gorro en redondo, sin costuras. ¿Qué agujas usás?", opciones: ["Un solo ganchillo fino","Una aguja lanera","Dos agujas rectas cortas siempre","Agujas circulares"], correcta: 3, explicacion: "Las circulares permiten tejer en redondo. La aguja lanera tienta por el nombre, pero es para coser." },
    { q: "Si terminaste y quedan hebras sueltas, ¿con qué las escondés dentro del tejido?", opciones: ["Con la tijera","Con una aguja lanera","Con pegamento","Con un alfiler"], correcta: 1, explicacion: "La lanera tiene ojo grande y punta roma. Cortarlas al ras tienta, pero el tejido se puede desarmar." },
    { q: "No tenés marcadores de puntos. ¿Qué podés usar?", opciones: ["Nada, no se puede tejer sin","Un alfiler abierto","Un clip o un aro de hilo de otro color","Un nudo en la lana"], correcta: 2, explicacion: "Cualquier aro que no se enganche sirve. El alfiler tienta, pero pincha y engancha la lana." },
    { q: "Tejés 3 horas seguidas y te duele la muñeca. ¿Qué cambiás?", opciones: ["Pausas cada 30 a 45 minutos moviendo manos y muñecas","Tejer más rápido","Apretar más las agujas","Tejer acostado"], correcta: 0, explicacion: "Las pausas cuidan las manos. Tejer más rápido tienta para terminar antes, pero cansa más." },
    { q: "El hormigueo en las manos no se te va con el descanso. ¿Qué hacés?", opciones: ["Seguís igual","Tejés más para acostumbrarte","Te ponés una venda apretada","Dejás de tejer unos días y consultás a un médico"], correcta: 3, explicacion: "Un síntoma que no se va lo tiene que ver un médico. \"Acostumbrarte\" tienta, pero puede empeorar." },
    { q: "Tejés en el living y tenés un gato. ¿Dónde ponés el ovillo?", opciones: ["Suelto en el piso","En una bolsa o un bowl al lado tuyo","Colgando del sillón","Arriba de la mesa sin nada"], correcta: 1, explicacion: "Así no rueda ni lo persigue el gato. Suelto en el piso tienta por cómodo, pero se enreda todo." },
  ],
},
{
  id: "dos-agujas",
  icono: "🪡",
  titulo: "Dos agujas: montar y punto derecho",
  nivel: "Básico",
  objetivos: [
    "Montar los puntos en la aguja con el nudo inicial",
    "Tejer el punto derecho y hacer una muestra en punto Santa Clara",
    "Contar los puntos al final de cada vuelta para no perder ni sumar",
  ],
  lecciones: [
    { titulo: "Montar los puntos", video: {"id":"GXw4i0xpFpk","t":"Cómo montar puntos en dos agujas · Karin Herrera, Nonnina (4:13)"}, html: `
      <p class="idea">Todo tejido a dos agujas empieza <strong>montando puntos</strong>: armás en una aguja la primera fila de lazos, que después vas a tejer. El primer punto es un <strong>nudo corredizo</strong>.</p>
      <pre><code>El nudo corredizo (el primer punto):
1. Dejá una punta de lana de unos 15 cm.
2. Hacé un rulo con la lana.
3. Pasá un lazo de la lana del ovillo por adentro del rulo.
4. Meté la aguja en ese lazo y tirá suave de las dos puntas.
   Queda un nudo que se corre: ese es tu primer punto.</code></pre>
      <p>Después se montan los demás. Una forma simple para empezar es el <strong>montaje tejido</strong>: con la otra aguja "tejés" un punto nuevo a partir del anterior y lo pasás a la aguja izquierda, una y otra vez. El video muestra otra forma muy usada, con el pulgar.</p>
      <table>
        <tr><th>Error</th><th>Qué pasa</th><th>Cómo se evita</th></tr>
        <tr><td>Montar muy apretado</td><td>Cuesta meter la aguja en la primera vuelta</td><td>Montá sobre dos agujas juntas, o con una aguja un número más gruesa</td></tr>
        <tr><td>Punta de lana muy corta</td><td>No alcanza para coser o rematar después</td><td>Dejá unos 15 cm</td></tr>
        <tr><td>No contar</td><td>La pieza queda más ancha o más angosta</td><td>Contá dos veces los puntos montados</td></tr>
      </table>
      <p><strong>Para practicar, montá 20 puntos:</strong> alcanza para aprender sin que se haga largo.</p>
      <p>Por ejemplo, la primera vez Elena montó tan apretado que no podía meter la aguja en la primera vuelta. Volvió a montar con las dos agujas juntas y después sacó una: los puntos quedaron flojos y parejos.</p>` },
    { titulo: "El punto derecho", video: {"id":"SBw2NKT_eb4","t":"Punto derecho y punto revés, aprender a tejer a dos agujas · Lanátika (6:34)"}, html: `
      <p class="idea">El <strong>punto derecho</strong> es el primero que se aprende. Se hace con cuatro movimientos que se repiten: <strong>entrar, enrollar, sacar y soltar</strong>.</p>
      <pre><code>Con los puntos en la aguja izquierda y la lana atrás del tejido:
1. Entrar:   meté la aguja derecha en el primer punto,
             de adelante hacia atrás, por abajo de la aguja izquierda.
2. Enrollar: pasá la lana alrededor de la aguja derecha,
             de atrás hacia adelante (en sentido contrario al reloj).
3. Sacar:    traé ese lazo de lana hacia adelante, por el punto.
4. Soltar:   dejá caer el punto viejo de la aguja izquierda.
→ El punto nuevo quedó en la aguja derecha.</code></pre>
      <p>Al terminar una <strong>vuelta</strong> (todos los puntos pasaron a la aguja derecha), cambiás las agujas de mano y empezás otra vuelta.</p>
      <p><strong>Punto Santa Clara:</strong> si tejés todas las vueltas en punto derecho, sale un tejido con "surcos" de los dos lados, que no se enrolla. Es ideal para la primera bufanda.</p>
      <p><strong>Ritmo antes que velocidad:</strong> al principio decí los cuatro pasos en voz baja ("entro, enrollo, saco, suelto"). En unas horas sale solo.</p>
      <p>Por ejemplo, Elena tejió su primera muestra de 20 puntos en Santa Clara. Las primeras 5 vueltas tardó 10 minutos cada una; a la vuelta 20 ya tardaba 3.</p>` },
    { titulo: "Contar y encontrar errores", html: `
      <p class="idea">El error más común al empezar es <strong>sumar o perder puntos sin darte cuenta</strong>. La solución es simple: <strong>contar al final de cada vuelta</strong>.</p>
      <table>
        <tr><th>Si contás...</th><th>Qué pasó, casi siempre</th><th>Qué hacés</th></tr>
        <tr><td>Más puntos que al montar</td><td>Al empezar la vuelta tiraste la lana hacia arriba y el primer punto se hizo doble</td><td>En la vuelta siguiente tejé 2 puntos juntos donde está el de más</td></tr>
        <tr><td>Menos puntos</td><td>Se te cayó un punto (lo ves en el módulo de arreglar)</td><td>Buscalo y levantalo antes de seguir</td></tr>
        <tr><td>Un agujero</td><td>La lana quedó adelante y se hizo un lazo de más</td><td>Si es reciente, destejé hasta ahí</td></tr>
      </table>
      <pre><code>Anotador de vueltas (una línea por vuelta):
Vuelta | Puntos | ¿OK?
1      | 20     | ✔
2      | 20     | ✔
3      | 21     | ✘ → un punto de más al empezar</code></pre>
      <p><strong>Destejer no es fracasar:</strong> deshacer unas vueltas para arreglar un error es parte de tejer. Lo hacen todas las tejedoras con experiencia.</p>
      <p><strong>La lana va atrás:</strong> en el punto derecho, la lana tiene que estar siempre del lado de atrás del tejido. Si pasa adelante sin querer, se arma un agujero.</p>
      <p>Por ejemplo, la muestra de Elena se iba ensanchando como un trapecio. Contando vio que sumaba un punto cada 2 vueltas al empezar. Cuidó la lana del primer punto y la muestra quedó derecha.</p>` },
  ],
  practica: [
    "Montá 20 puntos con el nudo corredizo y anotá cuántas veces tuviste que empezar de nuevo hasta que quedaron flojos y parejos.",
    "Tejé una muestra de 20 puntos y 20 vueltas en Santa Clara y anotá cuántos minutos tardaste en la vuelta 1 y en la vuelta 20.",
    "Llevá el anotador de vueltas en tu muestra y anotá en qué vueltas tuviste un punto de más o de menos.",
  ],
  recursos: [
    { t: "Craft Yarn Council: abreviaturas de dos agujas (en inglés)", url: "https://www.craftyarncouncil.com/standards/knitting-abbreviations" },
    { t: "Craft Yarn Council: tabla de agujas y ganchillos en milímetros (en inglés)", url: "https://www.craftyarncouncil.com/standards/hooks-and-needles" },
  ],
  quiz: [
    { q: "Vas a empezar un tejido a dos agujas. ¿Qué hacés primero?", opciones: ["Tejés el punto revés","Cerrás los puntos","Montás los puntos, empezando con un nudo corredizo","Cortás la lana"], correcta: 2, explicacion: "El montaje arma la primera fila. Cerrar tienta, pero eso es al final." },
    { q: "¿Cuánta lana dejás suelta al hacer el nudo inicial?", opciones: ["Unos 15 cm","1 cm","Nada","2 metros"], correcta: 0, explicacion: "Sirve para coser o rematar. 1 cm tienta por prolijo, pero no alcanza." },
    { q: "Montaste y no podés meter la aguja en la primera vuelta. ¿Qué cambiás?", opciones: ["Apretás más","Usás una aguja más fina","Seguís forzando","Montás más flojo, por ejemplo sobre dos agujas juntas"], correcta: 3, explicacion: "El montaje apretado traba la primera vuelta. Una aguja más fina tienta, pero lo empeora." },
    { q: "¿Cuáles son los cuatro pasos del punto derecho?", opciones: ["Montar, cerrar, cortar y coser","Entrar, enrollar, sacar y soltar","Contar, medir, lavar y planchar","Entrar, soltar, entrar, soltar"], correcta: 1, explicacion: "Esos cuatro movimientos se repiten en cada punto. Montar y cerrar tientan, pero son otras partes del tejido." },
    { q: "En el punto derecho, ¿dónde va la lana?", opciones: ["Adelante del tejido","Arriba de las agujas","Atrás del tejido","Da igual"], correcta: 2, explicacion: "Si pasa adelante, se arma un agujero. \"Da igual\" tienta, pero no es así." },
    { q: "Si tejés todas las vueltas en punto derecho, ¿qué punto te sale?", opciones: ["Santa Clara, que no se enrolla","Jersey","Elástico","Crochet"], correcta: 0, explicacion: "Todo derecho da Santa Clara. Jersey tienta, pero alterna derecho y revés." },
    { q: "Para tu primera bufanda, ¿por qué conviene el Santa Clara?", opciones: ["Porque es el más difícil","Porque se teje con ganchillo","Porque no hace falta contar","Porque usa un solo punto y no se enrolla en los bordes"], correcta: 3, explicacion: "Es simple y queda plano. \"No hace falta contar\" tienta, pero siempre conviene contar." },
    { q: "Al terminar una vuelta, ¿qué hacés?", opciones: ["Cerrás los puntos","Cambiás las agujas de mano y empezás la vuelta siguiente","Cortás la lana","Montás otra vez"], correcta: 1, explicacion: "Se teje de ida y vuelta. Cerrar tienta, pero el tejido recién empieza." },
    { q: "Si montaste 20 puntos y al final de la vuelta contás 21, ¿qué pasó, casi siempre?", opciones: ["La lana se estiró","Es normal sumar uno por vuelta","Al empezar la vuelta el primer punto se hizo doble","Se te cayó un punto"], correcta: 2, explicacion: "El primer punto doble es el error típico. \"Es normal\" tienta, pero la pieza se ensancha." },
    { q: "Contás menos puntos que al montar. ¿Qué hacés?", opciones: ["Buscás el punto caído y lo levantás antes de seguir","Seguís igual","Montás uno nuevo al final","Cortás la lana"], correcta: 0, explicacion: "Un punto caído sigue bajando si no lo levantás. Seguir tienta por apuro, pero se agranda el problema." },
    { q: "Tu muestra se va ensanchando como un trapecio. ¿Qué te ayuda a encontrar el error?", opciones: ["Tejer más rápido","Cambiar de color","No contar más","Contar los puntos al final de cada vuelta y anotarlo"], correcta: 3, explicacion: "El anotador muestra en qué vuelta empezó. Tejer más rápido tienta, pero repite el error." },
    { q: "Encontrás un error 3 vueltas atrás. ¿Destejer es un fracaso?", opciones: ["Sí, hay que empezar todo de nuevo","No: destejer para arreglar es parte de tejer","Sí, mejor dejarlo así siempre","Sí, hay que tirar la lana"], correcta: 1, explicacion: "Todas las tejedoras destejen. Empezar de nuevo tienta, pero alcanza con volver unas vueltas." },
  ],
},
{
  id: "reves",
  icono: "🧣",
  titulo: "Punto revés, jersey y elástico",
  nivel: "Intermedio",
  objetivos: [
    "Tejer el punto revés",
    "Combinar derecho y revés para hacer punto jersey y elástico",
    "Reconocer en el tejido qué punto es cada uno",
  ],
  lecciones: [
    { titulo: "El punto revés", video: {"id":"Wu6H7wZZuAU","t":"Punto revés en dos agujas · Príncipe del Crochet (5:36)"}, html: `
      <p class="idea">El <strong>punto revés</strong> es el compañero del derecho: los mismos cuatro pasos, pero con la <strong>lana adelante</strong> y entrando al punto <strong>de atrás hacia adelante</strong>.</p>
      <pre><code>Con la lana ADELANTE del tejido:
1. Entrar:   meté la aguja derecha en el primer punto,
             de atrás hacia adelante, por arriba de la aguja izquierda.
2. Enrollar: pasá la lana alrededor de la aguja derecha,
             de arriba hacia abajo (en sentido contrario al reloj).
3. Sacar:    sacá el lazo hacia atrás, por el punto.
4. Soltar:   dejá caer el punto viejo.</code></pre>
      <table>
        <tr><th></th><th>Punto derecho</th><th>Punto revés</th></tr>
        <tr><td>Lana</td><td>Atrás</td><td>Adelante</td></tr>
        <tr><td>Entrás</td><td>De adelante hacia atrás</td><td>De atrás hacia adelante</td></tr>
        <tr><td>Cómo se ve del lado que mirás</td><td>Una V</td><td>Un granito, como una rayita horizontal</td></tr>
      </table>
      <p><strong>Un derecho de un lado es un revés del otro:</strong> si das vuelta el tejido, el punto que de un lado era una V, del otro lado es un granito.</p>
      <p><strong>Practicalo solo primero:</strong> una muestra de 15 vueltas toda en revés sale igual que el Santa Clara, pero te acostumbra al movimiento.</p>
      <p>Por ejemplo, a Elena el punto revés le salía torcido porque dejaba la lana atrás. Con la lana adelante, como dice la tabla, le salieron los granitos parejos.</p>` },
    { titulo: "Jersey y elástico", html: `
      <p class="idea">Combinando derecho y revés salen los puntos más usados. El <strong>jersey</strong> es liso de un lado, y el <strong>elástico</strong> es el de los puños y los bordes de los gorros, porque estira.</p>
      <table>
        <tr><th>Punto</th><th>Cómo se teje (de ida y vuelta)</th><th>Cómo queda</th></tr>
        <tr><td>Santa Clara</td><td>Todas las vueltas al derecho</td><td>Surcos de los dos lados, no se enrolla</td></tr>
        <tr><td>Jersey</td><td>Una vuelta al derecho, una al revés</td><td>Liso con V de un lado; los bordes se enrollan</td></tr>
        <tr><td>Elástico 1 x 1</td><td>1 derecho, 1 revés, en toda la vuelta</td><td>Columnas que estiran</td></tr>
        <tr><td>Elástico 2 x 2</td><td>2 derechos, 2 reveses</td><td>Columnas más anchas que estiran</td></tr>
      </table>
      <pre><code>Elástico 1 x 1 sobre 20 puntos (número par):
Todas las vueltas: *1 derecho, 1 revés*, repetir hasta el final.
Regla de oro: tejé cada punto como se ve.
  Si ves una V → tejelo al derecho.
  Si ves un granito → tejelo al revés.</code></pre>
      <p><strong>En el elástico, la lana cambia de lado</strong> entre cada derecho y cada revés: atrás para el derecho y adelante para el revés, pasando entre las dos agujas, no por arriba.</p>
      <p><strong>El jersey se enrolla:</strong> por eso las prendas de jersey suelen empezar con unas vueltas de elástico o de Santa Clara en el borde.</p>
      <p>Por ejemplo, el cuello que tejió Elena en jersey se enrollaba solo. Lo destejió y empezó con 6 vueltas de elástico 2 x 2: el borde quedó plano y apretadito.</p>` },
    { titulo: "Leer tu tejido", html: `
      <p class="idea">"<strong>Leer el tejido</strong>" es mirar los puntos y saber qué son. Te deja seguir un punto sin el papel y encontrar errores solo.</p>
      <table>
        <tr><th>Si ves...</th><th>Es...</th></tr>
        <tr><td>Filas de V encimadas, como trenzas finitas</td><td>Jersey del lado derecho</td></tr>
        <tr><td>Granitos en filas, del lado de atrás</td><td>Jersey del lado revés</td></tr>
        <tr><td>Surcos de granitos, iguales de los dos lados</td><td>Santa Clara</td></tr>
        <tr><td>Columnas de V separadas por columnas hundidas</td><td>Elástico</td></tr>
      </table>
      <pre><code>Contar vueltas en jersey:
Cada V es una vuelta. Contá las V de una columna, de abajo hacia arriba.
Contar vueltas en Santa Clara:
Cada "surco" (fila de granitos) son 2 vueltas.</code></pre>
      <p><strong>Un error en el elástico se ve enseguida:</strong> una V en medio de una columna de granitos. Si lo ves en la vuelta en la que estás, destejé hasta ese punto y tejelo como corresponde.</p>
      <p><strong>Usá un marcador</strong> para no confundir el lado derecho del revés: ponelo en el lado derecho del tejido.</p>
      <p>Por ejemplo, Elena aprendió a contar las V del jersey y dejó de usar el anotador para saber cuántas vueltas llevaba: miraba una columna y contaba.</p>` },
  ],
  practica: [
    "Tejé una muestra de 15 vueltas en punto revés y anotá cuántas veces dejaste la lana atrás por error.",
    "Tejé una muestra de 20 puntos con 10 vueltas de elástico 1 x 1 y 10 de jersey, y anotá cuál de las dos partes se enrolla.",
    "Contá las vueltas de tu muestra de jersey mirando las V de una columna y anotá si coincide con tu anotador.",
  ],
  recursos: [
    { t: "Craft Yarn Council: abreviaturas de dos agujas (en inglés)", url: "https://www.craftyarncouncil.com/standards/knitting-abbreviations" },
    { t: "Craft Yarn Council: grosores de lana estándar (en inglés)", url: "https://www.craftyarncouncil.com/standards/yarn-weight-system" },
  ],
  quiz: [
    { q: "Si vas a tejer un punto revés, ¿dónde ponés la lana?", opciones: ["Atrás del tejido","Arriba de las agujas","Adelante del tejido","En el piso"], correcta: 2, explicacion: "El revés se teje con la lana adelante. Atrás tienta porque así es el derecho." },
    { q: "En el punto revés, ¿cómo entrás en el punto?", opciones: ["De atrás hacia adelante","De adelante hacia atrás","Por el costado","No se entra"], correcta: 0, explicacion: "Es al revés que el derecho. De adelante hacia atrás tienta por costumbre, pero eso es el derecho." },
    { q: "Mirás un punto y ves una V. ¿Qué es del lado que mirás?", opciones: ["Un punto revés","Un punto caído","Un nudo","Un punto derecho"], correcta: 3, explicacion: "La V es el derecho. El revés se ve como granito." },
    { q: "Das vuelta tu tejido. Un punto que era una V, ¿cómo se ve del otro lado?", opciones: ["Como otra V","Como un granito","No se ve","Como un agujero"], correcta: 1, explicacion: "Un derecho de un lado es un revés del otro. Otra V tienta, pero no es así." },
    { q: "Querés un tejido liso, con V de un lado. ¿Qué punto tejés?", opciones: ["Santa Clara","Todo revés","Jersey: una vuelta derecho, una vuelta revés","Elástico 1 x 1"], correcta: 2, explicacion: "Alternando vueltas sale el jersey. Santa Clara tienta, pero tiene surcos." },
    { q: "Tu cuello en jersey se enrolla en los bordes. ¿Qué podés hacer?", opciones: ["Empezar y terminar con unas vueltas de elástico o de Santa Clara","Planchar fuerte con vapor siempre","Tejerlo más apretado","Nada, no tiene arreglo"], correcta: 0, explicacion: "Los bordes de elástico o Santa Clara no se enrollan. Apretar tienta, pero no lo evita." },
    { q: "Querés un puño que estire. ¿Qué punto usás?", opciones: ["Jersey","Santa Clara","Cadeneta","Elástico"], correcta: 3, explicacion: "El elástico estira. Jersey tienta por liso, pero no estira igual." },
    { q: "¿Cómo se teje el elástico 1 x 1?", opciones: ["1 vuelta derecho, 1 vuelta revés","1 derecho, 1 revés, a lo largo de toda la vuelta","Todo derecho","2 derechos, 1 revés"], correcta: 1, explicacion: "Se alterna dentro de la vuelta. Alternar vueltas tienta, pero eso es el jersey." },
    { q: "En el elástico, ¿cómo sabés si un punto va al derecho o al revés?", opciones: ["Al azar","Siempre al derecho","Lo tejés como se ve: V al derecho, granito al revés","Mirando el ovillo"], correcta: 2, explicacion: "La regla de oro: tejé lo que ves. Siempre al derecho tienta por simple, pero desarma las columnas." },
    { q: "En el elástico, ¿cómo pasa la lana de atrás hacia adelante?", opciones: ["Entre las dos agujas","Por arriba de la aguja","Por abajo del tejido","No hace falta pasarla"], correcta: 0, explicacion: "Por arriba de la aguja agrega un punto. Pasarla por arriba tienta por cómodo, pero hace agujeros." },
    { q: "En Santa Clara, cada surco de granitos, ¿cuántas vueltas son?", opciones: ["1 vuelta","4 vueltas","10 vueltas","2 vueltas"], correcta: 3, explicacion: "Cada surco son dos vueltas. Una tienta, pero contarías la mitad." },
    { q: "Ves una V en medio de una columna de granitos de tu elástico. ¿Qué es?", opciones: ["Un adorno","Un error: ese punto se tejió al derecho en vez de al revés","Es normal en el elástico","Un punto caído"], correcta: 1, explicacion: "Rompe la columna. \"Es normal\" tienta, pero en el elástico las columnas son parejas." },
  ],
},
{
  id: "terminar",
  icono: "✂️",
  titulo: "Terminar y arreglar errores",
  nivel: "Intermedio",
  objetivos: [
    "Cerrar los puntos sin que el borde quede apretado",
    "Levantar un punto caído con el ganchillo",
    "Unir un ovillo nuevo y esconder las hebras",
  ],
  lecciones: [
    { titulo: "Cerrar los puntos", video: {"id":"a2w5rC_rC6U","t":"Cerrar puntos · We Are Knitters (2:52)"}, html: `
      <p class="idea">Para terminar, se <strong>cierran los puntos</strong>: se van pasando uno por encima del otro para que el tejido no se desarme cuando lo sacás de la aguja.</p>
      <pre><code>1. Tejé 2 puntos (al derecho, o como se vean).
2. Con la aguja izquierda, levantá el primero
   y pasalo por encima del segundo y fuera de la aguja.
3. Queda 1 punto. Tejé otro: vuelve a haber 2.
4. Repetí: pasar el primero por encima del segundo.
5. Cuando quede 1 solo punto, cortá la lana dejando unos 15 cm
   y pasala por adentro de ese último punto. Tirá: queda cerrado.</code></pre>
      <table>
        <tr><th>Problema</th><th>Solución</th></tr>
        <tr><td>El borde cerrado queda apretado y frunce</td><td>Cerrá con una aguja un número más gruesa en la mano derecha</td></tr>
        <tr><td>El borde queda flojo y ondulado</td><td>Tejé un poco más ajustado al cerrar</td></tr>
        <tr><td>Se escapa el último punto</td><td>Pasá la lana por adentro antes de soltarlo</td></tr>
      </table>
      <p><strong>En el elástico,</strong> cerrá tejiendo cada punto como se ve (derecho o revés): el borde estira igual que el resto.</p>
      <p>Por ejemplo, el borde de la primera bufanda de Elena quedó más angosto que el resto. Volvió a cerrar con una aguja un número más gruesa y quedó parejo.</p>` },
    { titulo: "El punto caído", html: `
      <p class="idea">Un <strong>punto caído</strong> es uno que se salió de la aguja y empieza a "correrse" hacia abajo, dejando una escalerita. Con un <strong>ganchillo</strong> se vuelve a subir.</p>
      <pre><code>Levantar un punto caído en jersey (del lado derecho):
1. Frená la escalera: pasá un marcador o un clip por el punto
   que se cayó, así no baja más.
2. Mirá la escalera: cada "travesaño" de lana es una vuelta.
3. Meté el ganchillo en el punto, de adelante hacia atrás.
4. Enganchá el travesaño de más abajo y pasalo por el punto.
5. Repetí, de abajo hacia arriba, hasta el último travesaño.
6. Poné el punto en la aguja izquierda, sin torcerlo.</code></pre>
      <table>
        <tr><th>Señal</th><th>Qué es</th></tr>
        <tr><td>Una columna con una escalerita de hilos horizontales</td><td>Un punto caído que bajó varias vueltas</td></tr>
        <tr><td>Contás un punto menos al final de la vuelta</td><td>Puede haber un punto caído</td></tr>
        <tr><td>Un punto en la aguja que se ve torcido, como una X</td><td>Lo pusiste al revés: girarlo antes de tejerlo</td></tr>
      </table>
      <p><strong>Del lado revés</strong> es más difícil: dá vuelta el tejido y levantalo del lado derecho, donde se ven las V.</p>
      <p><strong>No te asustes:</strong> un punto caído no se arregla tejiendo encima ni haciendo un nudo. Se arregla subiéndolo, y queda invisible.</p>
      <p>Por ejemplo, a Elena se le cayó un punto que bajó 6 vueltas. Lo frenó con un clip, lo subió con el ganchillo travesaño por travesaño y no se notaba dónde había estado.</p>` },
    { titulo: "Unir lana y esconder hebras", video: {"id":"W0HT8fDbxKI","t":"Cómo cambiar de ovillo y rematar sin nudos · Lanas y más (6:32)"}, html: `
      <p class="idea">Cuando se termina un ovillo, se <strong>une el nuevo</strong> mejor al principio de una vuelta. Al final, todas las puntas sueltas se <strong>esconden</strong> dentro del tejido con la aguja lanera.</p>
      <table>
        <tr><th>Cuándo unir</th><th>Cómo</th></tr>
        <tr><td>Al empezar una vuelta (lo mejor)</td><td>Dejá 15 cm de la lana vieja, empezá a tejer con la nueva dejando también 15 cm, y después escondés las dos puntas en el borde</td></tr>
        <tr><td>En medio de una vuelta (si no queda otra)</td><td>Tejé 3 o 4 puntos con las dos lanas juntas y seguí con la nueva</td></tr>
      </table>
      <p><strong>Calculá si alcanza para una vuelta:</strong> una vuelta usa unas 3 veces el ancho del tejido en lana. Si te queda menos, uní el ovillo nuevo al principio de la vuelta.</p>
      <pre><code>Esconder una hebra:
1. Enhebrá la punta en la aguja lanera.
2. Del lado revés, pasala por dentro de los puntos,
   unos 5 cm en una dirección.
3. Volvé unos 2 cm en la dirección contraria (así no se sale).
4. Cortá lo que sobra cerca del tejido, sin cortar puntos.</code></pre>
      <p><strong>Evitá los nudos grandes</strong> en medio del tejido: se notan, molestan y con el uso pueden salirse.</p>
      <p>Por ejemplo, Elena hacía nudos cada vez que cambiaba de ovillo y la bufanda tenía bultitos. Empezó a unir al principio de la vuelta y a esconder las hebras: los bultos desaparecieron.</p>` },
  ],
  practica: [
    "Cerrá los puntos de tu muestra y medí con cinta el ancho del borde cerrado y del resto: anotá la diferencia en centímetros.",
    "Soltá a propósito un punto en una muestra de jersey, dejalo bajar 4 vueltas, levantalo con ganchillo y anotá cuántos minutos tardaste.",
    "Uní un ovillo nuevo al principio de una vuelta y escondé las 2 hebras; anotá cuántos centímetros escondiste de cada una.",
  ],
  recursos: [
    { t: "Craft Yarn Council: tabla de agujas y ganchillos en milímetros (en inglés)", url: "https://www.craftyarncouncil.com/standards/hooks-and-needles" },
    { t: "Craft Yarn Council: abreviaturas de dos agujas (en inglés)", url: "https://www.craftyarncouncil.com/standards/knitting-abbreviations" },
    { t: "Curso de este sitio: Costura a mano y a máquina", url: "https://pkeios.github.io/EiaLearning/costura/" },
  ],
  quiz: [
    { q: "Al cerrar, tenés 2 puntos en la aguja derecha. ¿Qué hacés?", opciones: ["Tejés 2 más sin pasar nada","Cortás la lana","Pasás el primero por encima del segundo y fuera de la aguja","Los pasás a la aguja izquierda"], correcta: 2, explicacion: "Así se va cerrando de a uno. Cortar tienta, pero quedarían abiertos." },
    { q: "Te queda un solo punto al cerrar. ¿Qué hacés?", opciones: ["Cortás dejando 15 cm y pasás la lana por adentro de ese punto","Lo soltás de la aguja","Hacés un nudo cualquiera lejos","Lo dejás en la aguja"], correcta: 0, explicacion: "Pasar la lana por el último punto lo traba. Soltarlo tienta, pero se desarma." },
    { q: "El borde cerrado queda más angosto y frunce. ¿Qué cambiás?", opciones: ["Tejés más apretado","Usás una aguja más fina","Lo planchás","Cerrás con una aguja un número más gruesa"], correcta: 3, explicacion: "Una aguja más gruesa afloja el borde. Más apretado tienta, pero lo empeora." },
    { q: "Si vas a cerrar un elástico, ¿cómo tejés los puntos al cerrar?", opciones: ["Todos al derecho","Como se ven: derecho o revés","Todos al revés","Sin tejer, solo pasándolos"], correcta: 1, explicacion: "Así el borde estira como el resto. Todos al derecho tienta por fácil, pero el borde queda rígido." },
    { q: "Ves una escalerita de hilos horizontales en una columna. ¿Qué es?", opciones: ["Un adorno","Un punto de más","Un punto caído que bajó varias vueltas","Un error de color"], correcta: 2, explicacion: "Cada travesaño es una vuelta que el punto bajó. Adorno tienta, pero se sigue deshaciendo." },
    { q: "Se te cae un punto. ¿Qué hacés primero?", opciones: ["Lo frenás con un marcador o un clip para que no baje más","Seguís tejiendo","Hacés un nudo","Tirás del tejido"], correcta: 0, explicacion: "Frenarlo evita que siga bajando. El nudo tienta como solución rápida, pero queda un bulto y no lo arregla." },
    { q: "¿Con qué subís un punto caído?", opciones: ["Con la tijera","Con pegamento","Tejiendo encima","Con un ganchillo, travesaño por travesaño"], correcta: 3, explicacion: "El ganchillo engancha cada vuelta perdida. Tejer encima tienta, pero deja el agujero." },
    { q: "Un punto en la aguja se ve torcido, como una X. ¿Qué hacés?", opciones: ["Lo tejés igual","Lo girás antes de tejerlo","Lo soltás","Lo cortás"], correcta: 1, explicacion: "Está puesto al revés en la aguja. Tejerlo igual tienta, pero queda un punto torcido." },
    { q: "¿Cuándo conviene unir un ovillo nuevo?", opciones: ["En el medio de una vuelta, siempre","Con un nudo grande en cualquier lado","Al empezar una vuelta","Nunca, hay que comprar ovillos más largos"], correcta: 2, explicacion: "En el borde se esconden mejor las puntas. En el medio tienta por no desperdiciar, pero se nota más." },
    { q: "Tu tejido tiene 30 cm de ancho. ¿Cuánta lana usa más o menos una vuelta?", opciones: ["Unos 90 cm, 3 veces el ancho","30 cm","10 cm","3 metros"], correcta: 0, explicacion: "Una vuelta usa unas 3 veces el ancho. 30 cm tienta, pero los puntos usan más lana que el ancho." },
    { q: "Al esconder una hebra, ¿por qué volvés unos 2 cm en la dirección contraria?", opciones: ["Para que se vea","Para gastar lana","No hace falta volver","Para que no se salga"], correcta: 3, explicacion: "El cambio de dirección la traba. \"No hace falta\" tienta por rápido, pero con el uso se sale." },
    { q: "Tu bufanda tiene bultitos en los cambios de ovillo. ¿Qué pasó?", opciones: ["La lana es mala","Se hicieron nudos grandes en vez de unir y esconder las hebras","Se tejió muy rápido","Faltó planchar"], correcta: 1, explicacion: "Los nudos se notan como bultos. La lana tienta como culpable, pero fue la forma de unir." },
  ],
},
{
  id: "crochet",
  icono: "🪝",
  titulo: "Crochet: cadeneta y punto bajo",
  nivel: "Básico",
  objetivos: [
    "Agarrar el ganchillo y la lana con una tensión pareja",
    "Tejer una cadeneta y el punto bajo sobre ella",
    "Girar al final de la fila sin perder ni sumar puntos",
  ],
  lecciones: [
    { titulo: "La cadeneta", video: {"id":"oVTkK0l2ocw","t":"Punto cadena o cadeneta de inicio: cómo empezar en crochet · Silvana Tim (2:43)"}, html: `
      <p class="idea">En el crochet se teje con <strong>un solo gancho</strong> y siempre hay <strong>un solo lazo activo</strong> en él. Todo empieza con la <strong>cadeneta</strong>: una fila de lazos encadenados.</p>
      <pre><code>1. Hacé un nudo corredizo y ponelo en el ganchillo.
2. Lazada: pasá la lana por encima del ganchillo, de atrás hacia adelante.
3. Con el gancho, sacá esa lana por adentro del lazo que tenías.
→ Hiciste 1 cadena. Repetí los pasos 2 y 3.</code></pre>
      <table>
        <tr><th>Mano</th><th>Qué hace</th></tr>
        <tr><td>La que tiene el ganchillo</td><td>Lo sostiene como un lápiz o como un cuchillo: elegí la que te resulte cómoda</td></tr>
        <tr><td>La otra</td><td>Sostiene el tejido y lleva la lana entre los dedos, para que salga con tensión pareja</td></tr>
      </table>
      <p>Una <strong>lazada</strong> (también llamada "hebra") es pasar la lana por encima del ganchillo: es el movimiento base de todos los puntos de crochet.</p>
      <p><strong>Tensión pareja:</strong> las cadenas tienen que tener todas el mismo tamaño. Si unas son grandes y otras chiquitas, la lana sale de la mano a tirones: dejala correr suave entre los dedos.</p>
      <p><strong>Contar la cadeneta:</strong> cada "V" de la cadeneta es una cadena. El lazo que queda en el ganchillo y el nudo inicial no se cuentan.</p>
      <p>Por ejemplo, las primeras cadenetas de Elena eran tan apretadas que después no podía meter el ganchillo. Probó con un ganchillo un número más grueso solo para la cadeneta y se solucionó.</p>` },
    { titulo: "El punto bajo", video: {"id":"KHxUbnyuavg","t":"Crochet para principiantes: punto bajo · Tejiendo con Liliana Milka (16:52)"}, html: `
      <p class="idea">El <strong>punto bajo</strong> es el más corto y apretado del crochet. Con él se hacen tejidos firmes, como bolsitos, posavasos y muñecos.</p>
      <pre><code>Primera fila sobre la cadeneta:
1. Saltá la primera cadena desde el ganchillo.
2. Meté el ganchillo en la segunda cadena.
3. Lazada y sacá un lazo: tenés 2 lazos en el ganchillo.
4. Lazada y pasala por los 2 lazos: queda 1.
→ Hiciste 1 punto bajo. Repetí en cada cadena hasta el final.</code></pre>
      <table>
        <tr><th>Si montaste</th><th>Tenés en la primera fila</th></tr>
        <tr><td>21 cadenas</td><td>20 puntos bajos (la primera cadena se saltea)</td></tr>
        <tr><td>11 cadenas</td><td>10 puntos bajos</td></tr>
      </table>
      <p><strong>En las filas siguientes</strong> el ganchillo entra por debajo de las <strong>dos hebras</strong> de arriba de cada punto (la "V" que se ve arriba del punto bajo de la fila anterior).</p>
      <p><strong>Lado de entrada:</strong> si metés el ganchillo solo por una hebra, el tejido queda con rayitas. Es un efecto que se usa a propósito, pero al aprender entrá por las dos.</p>
      <p>Por ejemplo, Elena hizo una muestra de 10 puntos bajos y 10 filas: un cuadradito firme que usó como posavasos.</p>` },
    { titulo: "Girar y contar", html: `
      <p class="idea">Al terminar una fila, se hace la <strong>cadena de subida</strong> (para llegar a la altura del punto) y se <strong>gira</strong> el tejido. Donde más se pierden o se suman puntos es al principio y al final de la fila.</p>
      <table>
        <tr><th>Punto</th><th>Cadenas de subida</th><th>¿Cuenta como punto?</th></tr>
        <tr><td>Punto bajo</td><td>1</td><td>No</td></tr>
        <tr><td>Medio punto alto</td><td>2</td><td>Según el patrón; muchas veces no</td></tr>
        <tr><td>Punto alto</td><td>3</td><td>Muchas veces sí: reemplaza al primer punto</td></tr>
      </table>
      <pre><code>Fila de punto bajo, paso a paso:
1. Al final de la fila: 1 cadena de subida.
2. Girá el tejido como una página.
3. Tejé el primer punto bajo en el primer punto (el de la base de la cadena).
4. Seguí hasta el último punto, que está un poco escondido: no lo saltees.
5. Contá: tienen que ser los mismos puntos que la fila anterior.</code></pre>
      <p><strong>El borde se va inclinando</strong> si perdés el último punto de cada fila (el tejido se angosta) o si tejés en la cadena de subida cuando no cuenta (se ensancha). Contar cada fila lo evita.</p>
      <p><strong>Un marcador en el primer punto</strong> de cada fila te ayuda a encontrar el último cuando volvés.</p>
      <p>Por ejemplo, el posavasos de Elena empezó con 10 puntos y en la fila 8 tenía 7: perdía el último punto. Con un marcador en el primer punto de cada fila, no volvió a pasarle.</p>` },
  ],
  practica: [
    "Tejé una cadeneta de 30 cadenas y anotá si todas quedaron del mismo tamaño o cuántas quedaron distintas.",
    "Tejé una muestra de 10 puntos bajos y 10 filas y anotá cuántos puntos contaste al final de cada fila.",
    "Usá un marcador en el primer punto de cada fila durante 10 filas y anotá si la muestra quedó derecha.",
  ],
  recursos: [
    { t: "Craft Yarn Council: abreviaturas de crochet (en inglés)", url: "https://www.craftyarncouncil.com/standards/crochet-abbreviations" },
    { t: "Craft Yarn Council: tabla de agujas y ganchillos en milímetros (en inglés)", url: "https://www.craftyarncouncil.com/standards/hooks-and-needles" },
  ],
  quiz: [
    { q: "Tejés crochet. ¿Cuántos lazos activos tenés en el ganchillo después de cada punto terminado?", opciones: ["Todos los de la fila","Ninguno","Uno solo","Diez"], correcta: 2, explicacion: "En crochet queda un lazo al terminar cada punto. \"Todos los de la fila\" tienta porque así es a dos agujas." },
    { q: "¿Qué es una lazada?", opciones: ["Pasar la lana por encima del ganchillo","Un nudo final","Un punto caído","Cortar la lana"], correcta: 0, explicacion: "Es el movimiento base de todos los puntos. Nudo tienta por la palabra lazo, pero no es eso." },
    { q: "Tus cadenas salen de tamaños distintos. ¿Qué cambiás?", opciones: ["Tirás más fuerte de la lana","Cambiás de color","Tejés más rápido","Dejás correr la lana suave entre los dedos, con tensión pareja"], correcta: 3, explicacion: "La tensión pareja da cadenas iguales. Tirar más tienta, pero las aprieta de a ratos." },
    { q: "Si contás una cadeneta, ¿se cuenta el lazo que queda en el ganchillo?", opciones: ["Sí, siempre","No: se cuentan las V de la cadeneta","Sí, y también el nudo","Solo los martes"], correcta: 1, explicacion: "El lazo activo no es una cadena. Contarlo tienta, pero tendrías una de más." },
    { q: "Tu cadeneta queda tan apretada que no entra el ganchillo. ¿Qué probás?", opciones: ["Apretar más","Usar un ganchillo más fino","Hacer la cadeneta con un ganchillo un número más grueso","Saltear cadenas"], correcta: 2, explicacion: "Un ganchillo más grueso afloja la cadeneta. Más fino tienta, pero la aprieta más." },
    { q: "Si vas a tejer la primera fila de punto bajo sobre la cadeneta, ¿dónde entrás primero?", opciones: ["En la segunda cadena desde el ganchillo","En la primera cadena","En el nudo inicial","En la última cadena del otro extremo"], correcta: 0, explicacion: "La primera se saltea para la altura. La primera tienta por ser la más cercana, pero ensancha el tejido." },
    { q: "En el punto bajo, después de sacar el lazo, ¿cuántos lazos tenés en el ganchillo?", opciones: ["1","3","4","2"], correcta: 3, explicacion: "Sacás uno y tenías uno: 2. Tres tienta, pero eso pasa en los puntos con lazada previa." },
    { q: "Montaste 21 cadenas. ¿Cuántos puntos bajos tenés en la primera fila?", opciones: ["21","20","22","19"], correcta: 1, explicacion: "La primera cadena se saltea. 21 tienta porque son las cadenas, pero una no lleva punto." },
    { q: "En las filas siguientes, ¿por dónde entra el ganchillo?", opciones: ["Solo por una hebra siempre","Por el medio del tejido","Por debajo de las dos hebras de arriba de cada punto","Por la cadeneta inicial"], correcta: 2, explicacion: "Por las dos queda un tejido parejo. Una sola tienta, pero hace rayitas." },
    { q: "Terminás una fila de punto bajo. ¿Cuántas cadenas de subida hacés?", opciones: ["1","3","2","Ninguna"], correcta: 0, explicacion: "El punto bajo es bajito: 1. Tres tienta, pero eso es para el punto alto." },
    { q: "Tu tejido se angosta fila a fila. ¿Qué pasa, casi siempre?", opciones: ["Tejés demasiado flojo","La lana es mala","Usás un ganchillo grueso","Perdés el último punto de cada fila"], correcta: 3, explicacion: "El último punto queda escondido y se saltea. La lana tienta como culpable, pero es la cuenta." },
    { q: "¿Qué te ayuda a no perder el último punto de la fila?", opciones: ["Tejer más rápido","Un marcador en el primer punto de cada fila","Cerrar los ojos","Saltear el primero"], correcta: 1, explicacion: "El marcador te muestra dónde termina la fila al volver. Tejer rápido tienta, pero lo pasás de largo." },
  ],
},
{
  id: "crochet-alto",
  icono: "🌸",
  titulo: "Crochet: puntos altos y en redondo",
  nivel: "Intermedio",
  objetivos: [
    "Tejer el medio punto alto y el punto alto",
    "Empezar en redondo con el anillo mágico",
    "Aumentar puntos para tejer un círculo plano",
  ],
  lecciones: [
    { titulo: "Medio punto alto y punto alto", video: {"id":"54yl26ykQ6U","t":"Punto alto, curso de ganchillo · Blue Bubalú (3:48)"}, html: `
      <p class="idea">Los puntos más altos empiezan con una <strong>lazada antes de entrar</strong>. Son más rápidos de tejer y dan un tejido más suelto, ideal para bufandas y mantas.</p>
      <pre><code>Medio punto alto (mpa):
1. Lazada.
2. Entrá en el punto, lazada y sacá un lazo: 3 lazos en el ganchillo.
3. Lazada y pasala por los 3: queda 1.

Punto alto (pa):
1. Lazada.
2. Entrá en el punto, lazada y sacá un lazo: 3 lazos.
3. Lazada y pasala por 2: quedan 2.
4. Lazada y pasala por los 2 últimos: queda 1.</code></pre>
      <table>
        <tr><th>Punto</th><th>Altura</th><th>Cadenas de subida</th><th>Tejido</th></tr>
        <tr><td>Punto bajo (pb)</td><td>Bajo</td><td>1</td><td>Firme y apretado</td></tr>
        <tr><td>Medio punto alto (mpa)</td><td>Mediano</td><td>2</td><td>Intermedio</td></tr>
        <tr><td>Punto alto (pa)</td><td>Alto</td><td>3</td><td>Suelto y rápido</td></tr>
      </table>
      <p><strong>El punto alto sobre la cadeneta</strong> se empieza en la cuarta cadena desde el ganchillo: las 3 primeras hacen de subida.</p>
      <p><strong>La diferencia está en cuántos lazos cerrás juntos:</strong> en el medio punto alto, los 3 de una vez; en el punto alto, de a 2 y de a 2.</p>
      <p>Por ejemplo, Elena tejió una bufanda en punto bajo y tardó un mes. La siguiente la hizo en punto alto con la misma lana y la terminó en una semana, más liviana.</p>` },
    { titulo: "El anillo mágico", video: {"id":"QqKZLDk-4OY","t":"Aprende el anillo mágico desde cero · Príncipe del Crochet (3:48)"}, html: `
      <p class="idea">Para tejer <strong>en redondo</strong> (un gorro, un posavasos redondo, un muñeco) se empieza con el <strong>anillo mágico</strong>: un rulo de lana que se cierra tirando de la punta, sin dejar agujero en el centro.</p>
      <pre><code>1. Hacé un rulo con la lana, con la punta abajo.
2. Meté el ganchillo en el rulo, lazada y sacá un lazo.
3. Hacé 1 cadena para trabar (no cuenta como punto).
4. Tejé 6 puntos bajos adentro del rulo, sobre las dos lanas.
5. Tirá de la punta: el rulo se cierra.
6. Uní con un punto deslizado al primer punto bajo.
→ Primera vuelta: 6 puntos.</code></pre>
      <p>Un <strong>punto deslizado</strong> (pd) es el más bajo de todos: entrás en el punto, lazada y la pasás directo por todo lo que hay en el ganchillo. Sirve para unir y para moverse sin agregar altura.</p>
      <table>
        <tr><th>Alternativa</th><th>Cuándo</th></tr>
        <tr><td>Anillo mágico</td><td>Cuando no querés agujero en el centro (muñecos, gorros)</td></tr>
        <tr><td>4 o 5 cadenas unidas en anillo</td><td>Más fácil al principio; queda un agujerito en el centro</td></tr>
      </table>
      <p><strong>Asegurá la punta:</strong> al final, escondé bien la punta del anillo con la aguja lanera; si se suelta, el centro se abre.</p>
      <p>Por ejemplo, el primer anillo mágico de Elena se abrió al lavarlo. Ahora, al terminar, pasa la punta en dos direcciones con la aguja lanera y no se abre más.</p>` },
    { titulo: "Un círculo plano: los aumentos", html: `
      <p class="idea">Para que un círculo quede <strong>plano</strong>, en cada vuelta hay que <strong>aumentar</strong> puntos: tejer 2 puntos en el mismo lugar. La cantidad sigue una cuenta fija.</p>
      <pre><code>Círculo en punto bajo (empezando con 6 en el anillo):
Vuelta 1: 6 pb en el anillo                         → 6
Vuelta 2: 2 pb en cada punto                         → 12
Vuelta 3: *1 pb, 2 pb en el siguiente* × 6          → 18
Vuelta 4: *1 pb en cada uno de 2, 2 pb en el sig.* × 6 → 24
Vuelta 5: *1 pb en cada uno de 3, 2 pb en el sig.* × 6 → 30
Regla: cada vuelta suma 6 puntos.</code></pre>
      <table>
        <tr><th>Si el círculo...</th><th>Pasa porque...</th><th>Arreglo</th></tr>
        <tr><td>Se ondula como un volado</td><td>Aumentaste de más</td><td>Volvé a la cuenta de 6 por vuelta</td></tr>
        <tr><td>Se cierra como un bol</td><td>Aumentaste de menos</td><td>Revisá que hiciste los 6 aumentos</td></tr>
        <tr><td>Queda plano</td><td>La cuenta está bien</td><td>¡Seguí!</td></tr>
      </table>
      <p><strong>El bol también sirve:</strong> si a propósito dejás de aumentar, el círculo se levanta. Así empiezan los gorros y los muñecos.</p>
      <p><strong>Marcá el principio de cada vuelta</strong> con un marcador: en redondo es fácil perder dónde empezaste.</p>
      <p>Por ejemplo, el posavasos redondo de Elena se ondulaba. Contó: en la vuelta 4 había hecho 8 aumentos en vez de 6. Destejió esa vuelta y quedó plano.</p>` },
  ],
  practica: [
    "Tejé una muestra con 5 filas de medio punto alto y 5 de punto alto, y medí con cinta cuánto mide de alto cada parte.",
    "Hacé 3 anillos mágicos con 6 puntos bajos y anotá cuántos quedaron sin agujero en el centro.",
    "Tejé un círculo de 6 vueltas con la regla de aumentos y anotá los puntos que contaste en cada vuelta.",
  ],
  recursos: [
    { t: "Craft Yarn Council: abreviaturas de crochet (en inglés)", url: "https://www.craftyarncouncil.com/standards/crochet-abbreviations" },
    { t: "Craft Yarn Council: símbolos de los gráficos de crochet (en inglés)", url: "https://www.craftyarncouncil.com/standards/crochet-chart-symbols" },
  ],
  quiz: [
    { q: "Vas a tejer un medio punto alto. ¿Qué hacés antes de entrar en el punto?", opciones: ["Una cadena","Un nudo","Una lazada","Nada"], correcta: 2, explicacion: "Los puntos altos empiezan con lazada. \"Nada\" tienta porque así es el punto bajo." },
    { q: "En el medio punto alto, con 3 lazos en el ganchillo, ¿qué hacés?", opciones: ["Lazada y la pasás por los 3 juntos","Lazada y pasás por 2","Sacás el ganchillo","Otra lazada sin pasar"], correcta: 0, explicacion: "En el mpa se cierran los 3 de una. De a 2 tienta, pero eso es el punto alto." },
    { q: "En el punto alto, ¿cómo cerrás los lazos?", opciones: ["Los 3 juntos","De a 1","No se cierran","De a 2 y de a 2"], correcta: 3, explicacion: "El punto alto cierra en dos pasos. Los 3 juntos tienta, pero da medio punto alto." },
    { q: "Terminás una fila de punto alto. ¿Cuántas cadenas de subida hacés?", opciones: ["1","3","2","5"], correcta: 1, explicacion: "El punto alto es alto: 3. Una tienta, pero esa es para el punto bajo." },
    { q: "Querés una bufanda liviana que se teja rápido. ¿Qué punto elegís?", opciones: ["Punto bajo","Punto deslizado","Punto alto","Cadeneta sola"], correcta: 2, explicacion: "El punto alto es suelto y rápido. El bajo tienta por firme, pero tarda más y pesa más." },
    { q: "Si empezás punto alto sobre una cadeneta, ¿en qué cadena entrás primero?", opciones: ["En la cuarta desde el ganchillo","En la segunda","En la primera","En la décima"], correcta: 0, explicacion: "Las 3 primeras hacen de subida. La segunda tienta porque así es en el punto bajo." },
    { q: "Querés empezar un gorro sin agujero en el centro. ¿Cómo empezás?", opciones: ["Con una cadeneta larga","Con dos agujas rectas","Con un nudo grande","Con un anillo mágico"], correcta: 3, explicacion: "El anillo se cierra tirando de la punta. La cadeneta larga tienta, pero es para tejidos rectos." },
    { q: "En el anillo mágico, ¿cuántos puntos bajos tejés en la primera vuelta del ejemplo?", opciones: ["1","6","12","20"], correcta: 1, explicacion: "Se empieza con 6. Doce tienta, pero esa es la segunda vuelta." },
    { q: "¿Para qué sirve un punto deslizado?", opciones: ["Para aumentar","Para cortar la lana","Para unir y moverse sin agregar altura","Para hacer un agujero"], correcta: 2, explicacion: "Es el punto más bajo: une y desplaza. Aumentar tienta, pero eso es tejer 2 en el mismo lugar." },
    { q: "Tu anillo mágico se abrió al lavarlo. ¿Qué faltó?", opciones: ["Esconder bien la punta con la aguja lanera, en dos direcciones","Más cadenas","Planchar","Un ganchillo más fino"], correcta: 0, explicacion: "Una punta mal escondida se suelta. Planchar tienta, pero no la traba." },
    { q: "En un círculo plano de punto bajo, ¿cuántos puntos suma cada vuelta?", opciones: ["1","12","Ninguno","6"], correcta: 3, explicacion: "La regla es sumar 6 por vuelta. Doce tienta, pero solo en la vuelta 2 se pasa de 6 a 12." },
    { q: "Tu círculo se ondula como un volado. ¿Qué pasó?", opciones: ["Aumentaste de menos","Aumentaste de más","Usaste lana mala","Hiciste el anillo mágico"], correcta: 1, explicacion: "Demasiados puntos hacen ondas. De menos tienta, pero eso lo cierra como un bol." },
  ],
},
{
  id: "patrones",
  icono: "📐",
  titulo: "La muestra y los patrones",
  nivel: "Avanzado",
  objetivos: [
    "Tejer una muestra de 10 × 10 cm y calcular cuántos puntos necesitás",
    "Leer un patrón escrito con sus abreviaturas y repeticiones",
    "Calcular cuánta lana comprar para una prenda",
  ],
  lecciones: [
    { titulo: "La muestra", html: `
      <p class="idea">Cada persona teje más flojo o más apretado. La <strong>muestra</strong> es un cuadrado de prueba que te dice <strong>cuántos puntos y vueltas entran en 10 cm</strong> con tu mano, tu lana y tu aguja. Con eso calculás todo lo demás.</p>
      <pre><code>1. Tejé un cuadrado de unos 15 × 15 cm con la lana, la aguja
   y el punto de la prenda.
2. Medí en el centro (los bordes se deforman) 10 cm a lo ancho.
3. Contá cuántos puntos entran: por ejemplo, 18.
4. Medí 10 cm a lo alto y contá las vueltas: por ejemplo, 24.

Muestra: 18 puntos y 24 vueltas = 10 × 10 cm</code></pre>
      <pre><code>¿Cuántos puntos montar para una bufanda de 20 cm de ancho?
18 puntos → 10 cm
 x puntos → 20 cm
x = 18 × 20 ÷ 10 = 36 puntos</code></pre>
      <table>
        <tr><th>Si tu muestra tiene...</th><th>Respecto del patrón</th><th>Cambiá a...</th></tr>
        <tr><td>Más puntos en 10 cm</td><td>Tejés más apretado</td><td>Una aguja más gruesa</td></tr>
        <tr><td>Menos puntos en 10 cm</td><td>Tejés más flojo</td><td>Una aguja más fina</td></tr>
      </table>
      <p>La cuenta es una <strong>regla de tres</strong>: la podés repasar en el curso de Matemática para la vida diaria de este sitio.</p>
      <p>Por ejemplo, el patrón de un gorro pedía 20 puntos en 10 cm y la muestra de Elena tenía 23. Tejía apretado: pasó a una aguja medio número más gruesa y la nueva muestra dio 20.</p>` },
    { titulo: "Leer un patrón", video: {"id":"7-n0sK5YUZo","t":"Cómo leer un patrón de crochet · Ahuyama Crochet (10:49)"}, html: `
      <p class="idea">Un <strong>patrón</strong> es la receta de una prenda: materiales, muestra, medidas y las vueltas paso a paso, escritas con <strong>abreviaturas</strong>.</p>
      <table>
        <tr><th>Abreviatura</th><th>Quiere decir</th></tr>
        <tr><td>p o pts</td><td>Punto o puntos</td></tr>
        <tr><td>d / r</td><td>Derecho / revés (dos agujas)</td></tr>
        <tr><td>cad</td><td>Cadena (crochet)</td></tr>
        <tr><td>pb / mpa / pa</td><td>Punto bajo / medio punto alto / punto alto</td></tr>
        <tr><td>pd</td><td>Punto deslizado</td></tr>
        <tr><td>aum / dism</td><td>Aumento / disminución</td></tr>
        <tr><td>* ... * o ( ... )</td><td>Lo que está entre los signos se repite</td></tr>
      </table>
      <pre><code>Ejemplo de vuelta escrita:
V3: 1 cad, *1 pb, aum* × 6, pd al 1er p. (18)

Se lee: vuelta 3; 1 cadena de subida;
"1 punto bajo, 1 aumento" repetido 6 veces;
punto deslizado al primer punto. Al final hay 18 puntos.</code></pre>
      <p><strong>El número entre paréntesis al final</strong> es la cantidad de puntos que tenés que tener. Es tu control: contá y compará.</p>
      <p><strong>Las abreviaturas cambian según el país y el idioma:</strong> la mayoría de los patrones trae una lista al principio. En patrones en inglés, "sc" es punto bajo y "dc" punto alto (en el sistema de Estados Unidos).</p>
      <p><strong>Leé todo antes de empezar:</strong> así ves si el patrón usa algo que todavía no sabés y lo practicás primero.</p>
      <p>Por ejemplo, Elena no entendía "*2 pa, aum* × 6". Lo escribió en palabras: "dos puntos altos, un aumento, y eso seis veces". Con eso lo tejió sin problemas.</p>` },
    { titulo: "Cuánta lana comprar", html: `
      <p class="idea">Muchos patrones dicen cuántos ovillos hacen falta. Si no lo dicen, o cambiás de lana, lo calculás <strong>pesando tu muestra</strong> o con los <strong>metros por ovillo</strong>.</p>
      <pre><code>Con el peso de la muestra (balanza de cocina):
Muestra de 10 × 10 cm pesa 5 g.
Bufanda de 20 × 150 cm = 3.000 cm² = 30 muestras de 100 cm².
30 × 5 g = 150 g
Ovillos de 100 g → 2 ovillos (siempre se redondea para arriba).

Con los metros, si el patrón dice "400 m":
Tu lana tiene 160 m por ovillo.
400 ÷ 160 = 2,5 → 3 ovillos.</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Comprá todos los ovillos juntos, del mismo lote</td><td>Después puede no haber del mismo color</td></tr>
        <tr><td>Sumá un ovillo de más en prendas grandes</td><td>Es peor quedarse corto; el que sobra sirve para otra cosa</td></tr>
        <tr><td>Si cambiás de lana, compará los metros, no el peso</td><td>Dos ovillos de 100 g pueden tener metros muy distintos</td></tr>
      </table>
      <p><strong>La balanza de cocina</strong> alcanza para pesar la muestra y lo que te queda de un ovillo.</p>
      <p>Por ejemplo, Elena calculó 150 g para una bufanda y compró 2 ovillos de 100 g del mismo lote. Le sobraron 50 g, que usó para un gorrito de muñeca.</p>` },
  ],
  practica: [
    "Tejé una muestra de 15 × 15 cm, contá puntos y vueltas en 10 cm, y anotá cuántos puntos montarías para algo de 25 cm de ancho.",
    "Buscá un patrón sencillo, escribí en palabras 3 de sus vueltas y anotá cuántos puntos tiene que tener cada una.",
    "Pesá tu muestra y calculá cuántos ovillos necesitás para una bufanda de 20 × 150 cm: anotá la cuenta.",
  ],
  recursos: [
    { t: "Craft Yarn Council: abreviaturas de crochet (en inglés)", url: "https://www.craftyarncouncil.com/standards/crochet-abbreviations" },
    { t: "Craft Yarn Council: símbolos de los gráficos de crochet (en inglés)", url: "https://www.craftyarncouncil.com/standards/crochet-chart-symbols" },
    { t: "Curso de este sitio: Matemática para la vida diaria (regla de tres)", url: "https://pkeios.github.io/EiaLearning/matematica-vida/" },
  ],
  quiz: [
    { q: "¿Para qué sirve la muestra?", opciones: ["Para regalar","Para gastar la lana que sobra","Para saber cuántos puntos y vueltas entran en 10 cm con tu mano, tu lana y tu aguja","No sirve, se puede saltear"], correcta: 2, explicacion: "Cada mano teje distinto. Saltearla tienta por apuro, pero la prenda puede salir de otro tamaño." },
    { q: "¿Dónde medís los 10 cm de la muestra?", opciones: ["En el centro, porque los bordes se deforman","En el borde","En una esquina","En la cadeneta"], correcta: 0, explicacion: "El centro es lo más parejo. El borde tienta porque es más fácil de medir, pero engaña." },
    { q: "Tu muestra tiene 18 puntos en 10 cm. ¿Cuántos montás para 20 cm?", opciones: ["20","18","38","36"], correcta: 3, explicacion: "18 × 20 ÷ 10 = 36. Veinte tienta porque son los centímetros, pero no son puntos." },
    { q: "Tu muestra tiene más puntos en 10 cm que el patrón. ¿Qué cambiás?", opciones: ["Una aguja más fina","Una aguja más gruesa","Más vueltas","Nada"], correcta: 1, explicacion: "Más puntos quiere decir que tejés apretado. Más fina tienta, pero lo aprieta más." },
    { q: "En un patrón ves \"pb\". ¿Qué quiere decir?", opciones: ["Punto alto","Primera vuelta","Punto bajo","Puntos borrados"], correcta: 2, explicacion: "pb es punto bajo. Punto alto tienta, pero es pa." },
    { q: "Un patrón dice \"*1 pb, aum* × 6\". ¿Qué hacés?", opciones: ["Repetís \"1 punto bajo y 1 aumento\" 6 veces","Hacés 6 puntos bajos","Hacés 1 aumento solo","Saltás esa parte"], correcta: 0, explicacion: "Lo de entre asteriscos se repite. 6 puntos bajos tienta, pero falta el aumento en cada repetición." },
    { q: "Si al final de una vuelta del patrón dice \"(18)\", ¿qué es?", opciones: ["El número de vuelta","Los minutos que tarda","El número de aguja","La cantidad de puntos que tenés que tener"], correcta: 3, explicacion: "Es tu control: contá y compará. El número de vuelta tienta, pero va al principio." },
    { q: "Encontrás un patrón en inglés que dice \"sc\". ¿Qué punto es?", opciones: ["Punto alto","Punto bajo (en el sistema de Estados Unidos)","Cadena","Santa Clara"], correcta: 1, explicacion: "En inglés de EE. UU., sc es punto bajo y dc punto alto. Santa Clara tienta por las iniciales, pero no." },
    { q: "Antes de empezar un patrón, ¿qué conviene hacer?", opciones: ["Empezar directo por la vuelta 1","Leer solo los materiales","Leerlo entero para ver si usa algo que no sabés","Saltear las abreviaturas"], correcta: 2, explicacion: "Así practicás antes lo que falte. Empezar directo tienta, pero te podés trabar en el medio." },
    { q: "Tu muestra de 10 × 10 cm pesa 5 g. ¿Cuánto pesa una bufanda de 20 × 150 cm?", opciones: ["Unos 150 g","5 g","30 g","1.500 g"], correcta: 0, explicacion: "Son 30 muestras de 5 g. 30 g tienta si te olvidás de multiplicar por el peso." },
    { q: "El patrón pide 400 m y tu lana tiene 160 m por ovillo. ¿Cuántos ovillos comprás?", opciones: ["2","2,5","4","3"], correcta: 3, explicacion: "400 ÷ 160 = 2,5, y se redondea para arriba. Dos tienta, pero te quedás corta." },
    { q: "Si cambiás la lana del patrón por otra, ¿qué comparás para calcular los ovillos?", opciones: ["Solo el peso","Los metros por ovillo","El color","El precio"], correcta: 1, explicacion: "Dos ovillos del mismo peso pueden tener metros muy distintos. El peso tienta porque es lo más visible." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu primera prenda",
  nivel: "Avanzado",
  objetivos: [
    "Tejer una bufanda o un cuello completo, con la técnica que elijas",
    "Terminarla prolija: bordes, hebras escondidas y medidas",
    "Calcular su costo y evaluarla con la rúbrica",
  ],
  lecciones: [
    { titulo: "El plan de la prenda", html: `
      <p class="idea">El proyecto final es <strong>una prenda completa</strong>: una bufanda o un cuello, a dos agujas o al crochet. Antes de empezar, escribí el plan.</p>
      <pre><code>Plan de la bufanda de Elena
Técnica:   dos agujas, elástico 2 x 2 en los bordes y jersey en el medio
Lana:      acrílico mediano, 2 ovillos de 100 g, mismo lote
Aguja:     5 mm
Muestra:   18 p y 24 v en 10 cm
Medidas:   20 × 150 cm
Puntos:    18 × 20 ÷ 10 = 36 puntos (múltiplo de 4, para el elástico)
Vueltas:   24 × 150 ÷ 10 = 360 vueltas</code></pre>
      <table>
        <tr><th>Opción</th><th>Técnica</th><th>Dificultad</th></tr>
        <tr><td>Bufanda en Santa Clara</td><td>Dos agujas, un solo punto</td><td>La más fácil</td></tr>
        <tr><td>Cuello en elástico, tejido en redondo</td><td>Agujas circulares</td><td>Media</td></tr>
        <tr><td>Bufanda en punto alto</td><td>Crochet</td><td>Fácil y rápida</td></tr>
      </table>
      <p><strong>Un múltiplo</strong> es un número que entra justo en otro: para elástico 2 x 2 conviene un número de puntos que se divida por 4 (como 36), así las columnas quedan parejas en los dos bordes.</p>
      <p><strong>Medí cada tanto:</strong> cada 20 cm, apoyá la prenda en la mesa sin estirarla y medí. Si se está ensanchando o angostando, contá los puntos.</p>
      <p>Por ejemplo, Elena eligió la bufanda en elástico y jersey. Pero el jersey se enrollaba hacia adentro; la cambió por Santa Clara en el medio y quedó plana.</p>` },
    { titulo: "Terminar prolijo", html: `
      <p class="idea">Lo que diferencia una prenda casera de una prolija es el <strong>final</strong>: bordes parejos, hebras escondidas y, si hace falta, un <strong>bloqueo</strong> para que tome su forma.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>Cerrar</td><td>Puntos cerrados sin apretar el borde</td></tr>
        <tr><td>Esconder hebras</td><td>Todas las puntas, con la aguja lanera, 5 cm y vuelta</td></tr>
        <tr><td>Bloquear</td><td>Mojar o humedecer la prenda, estirarla a la medida sobre una toalla y dejarla secar</td></tr>
        <tr><td>Revisar</td><td>Medidas, puntos caídos, agujeros</td></tr>
      </table>
      <p>El <strong>bloqueo</strong> empareja los puntos y deja la prenda con la medida justa. Seguí lo que dice la etiqueta: algunas lanas se bloquean con agua y otras con vapor de la plancha, sin apoyar la plancha (el acrílico se puede arruinar con calor directo).</p>
      <pre><code>Bloqueo con agua (lana o algodón):
1. Dejá la prenda en agua tibia unos minutos.
2. Escurrila apretándola dentro de una toalla, sin retorcer.
3. Estirala a la medida sobre una toalla seca, en una mesa.
4. Dejala secar a la sombra, sin colgarla (se estira).</code></pre>
      <p><strong>Lavado:</strong> anotá los cuidados de la etiqueta y, si la regalás o la vendés, pasáselos a quien la recibe.</p>
      <p>Por ejemplo, la bufanda de Elena tenía un borde ondulado. La bloqueó con agua sobre una toalla y quedó derecha y con los puntos parejos.</p>` },
    { titulo: "El costo y la rúbrica", html: `
      <p class="idea">Si pensás vender, calculá el <strong>costo</strong>: materiales más tu tiempo. Y antes de dar la prenda por terminada, revisala con la <strong>rúbrica</strong>.</p>
      <pre><code>Costo de la bufanda (números de ejemplo):
Lana: 2 ovillos × $6.000          = $12.000
Horas: 15 horas × $3.000 la hora  = $45.000
Costo total                       = $57.000</code></pre>
      <p>El tejido a mano lleva muchas horas: si cobrás solo la lana, regalás tu trabajo. Para calcular bien un precio de venta está el curso <strong>Costos y precios</strong> de este sitio. Los precios del ejemplo son inventados; averiguá los de tu zona.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Plan y muestra</td><td>Plan escrito con muestra y cuentas</td><td>Plan sin muestra</td><td>Sin plan</td></tr>
        <tr><td>Medidas</td><td>Dentro de 2 cm de lo planeado</td><td>Hasta 5 cm de diferencia</td><td>Más de 5 cm</td></tr>
        <tr><td>Puntos parejos</td><td>Bordes derechos, sin agujeros</td><td>Algún error leve</td><td>Bordes torcidos o agujeros</td></tr>
        <tr><td>Terminación</td><td>Cerrado, hebras escondidas y bloqueada</td><td>Falta una cosa</td><td>Faltan dos o más</td></tr>
        <tr><td>Costo</td><td>Calculado con lana y horas</td><td>Solo la lana</td><td>Sin calcular</td></tr>
      </table>
      <pre><code>Máximo: 10 puntos
9 o 10 → lista para usar, regalar o vender
6 a 8  → arreglá lo que dio 0 o 1 en la próxima
0 a 5  → tejé otra muestra y repasá el módulo que más te costó</code></pre>
      <p>Por ejemplo, Elena sacó 8: perdió puntos en Costo porque solo contó la lana. Cuando sumó sus horas, vio que su precio de feria no le dejaba nada y lo ajustó.</p>` },
  ],
  practica: [
    "Escribí el plan de tu prenda con técnica, lana, aguja, muestra, medidas y la cuenta de puntos; anotá los números.",
    "Tejé y terminá tu prenda (cerrada, con las hebras escondidas y bloqueada) y anotá cuántas horas te llevó.",
    "Calculá el costo con lana y horas, evaluá la prenda con la rúbrica y anotá tu puntaje sobre 10.",
  ],
  recursos: [
    { t: "Curso de este sitio: Costos y precios, cuánto cobrar", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Craft Yarn Council: grosores de lana estándar (en inglés)", url: "https://www.craftyarncouncil.com/standards/yarn-weight-system" },
    { t: "Curso de este sitio: Matemática para la vida diaria (regla de tres)", url: "https://pkeios.github.io/EiaLearning/matematica-vida/" },
  ],
  quiz: [
    { q: "Vas a tejer tu primera prenda. ¿Qué hacés antes de montar?", opciones: ["Montás 100 puntos al azar","Comprás un ovillo y ves","Escribís el plan con la muestra y las cuentas","Nada"], correcta: 2, explicacion: "El plan evita sorpresas de tamaño y lana. Montar al azar tienta por ganas, pero puede salir de cualquier medida." },
    { q: "Tu muestra tiene 18 puntos en 10 cm. ¿Cuántos montás para 20 cm?", opciones: ["36","18","20","40"], correcta: 0, explicacion: "18 × 20 ÷ 10 = 36. 40 tienta por redondo, pero queda más ancha." },
    { q: "Si vas a tejer elástico 2 x 2, ¿qué cantidad de puntos conviene?", opciones: ["Un número impar","Cualquiera","Un múltiplo de 3","Un múltiplo de 4, como 36"], correcta: 3, explicacion: "Así las columnas quedan parejas en los dos bordes. \"Cualquiera\" tienta, pero el borde queda distinto de cada lado." },
    { q: "¿Cuál es la prenda más fácil para empezar?", opciones: ["Un pulóver con mangas","Una bufanda en Santa Clara","Un gorro con trenzas","Unas medias"], correcta: 1, explicacion: "Un solo punto y forma recta. El pulóver tienta por lindo, pero tiene muchas partes." },
    { q: "Tu bufanda se está ensanchando a mitad de camino. ¿Qué hacés?", opciones: ["Seguís igual","Cambiás de lana","Contás los puntos y buscás dónde sumaste","Tejés más apretado el resto"], correcta: 2, explicacion: "Contar encuentra el error. Tejer más apretado tienta para compensar, pero queda despareja." },
    { q: "¿Qué es el bloqueo?", opciones: ["Mojar o humedecer la prenda y dejarla secar estirada a la medida","Atar la prenda","Cerrar los puntos","Guardar la lana"], correcta: 0, explicacion: "Empareja los puntos y fija la forma. Cerrar tienta, pero es otro paso." },
    { q: "Tu prenda es de acrílico y querés bloquearla con vapor. ¿Qué cuidás?", opciones: ["Apoyarla fuerte","Usar la plancha al máximo apoyada","Nada","No apoyar la plancha: el calor directo lo puede arruinar"], correcta: 3, explicacion: "El acrílico se arruina con calor directo. Apoyar la plancha tienta para alisar, pero lo derrite." },
    { q: "Después de mojar la prenda para bloquear, ¿cómo la escurrís?", opciones: ["Retorciéndola fuerte","Apretándola dentro de una toalla, sin retorcer","En el lavarropas en centrifugado","Colgándola mojada"], correcta: 1, explicacion: "Retorcer deforma los puntos. Colgarla tienta para que seque rápido, pero se estira." },
    { q: "Si vas a regalar la prenda, ¿qué le pasás a quien la recibe?", opciones: ["Nada","El precio","Los cuidados de lavado de la etiqueta","La muestra"], correcta: 2, explicacion: "Así no la arruina en el lavarropas. \"Nada\" tienta, pero puede encogerla." },
    { q: "Gastaste $12.000 en lana y tejiste 15 horas a $3.000. ¿Cuál es el costo?", opciones: ["$57.000","$12.000","$45.000","$15.000"], correcta: 0, explicacion: "Lana más horas: 12.000 + 45.000. $12.000 tienta si cobrás solo la lana, pero regalás tu trabajo." },
    { q: "Tu prenda mide 4 cm menos de lo planeado. ¿Cuánto sacás en Medidas?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto"], correcta: 3, explicacion: "Hasta 5 cm de diferencia es 1 punto. Dos tienta porque está cerca, pero son más de 2 cm." },
    { q: "Sacaste 7 de 10. ¿Qué hacés?", opciones: ["Dejás de tejer","En la próxima prenda arreglás lo que dio 0 o 1","La destejés entera","Cambiás la rúbrica"], correcta: 1, explicacion: "Entre 6 y 8 se mejora en la próxima. Destejer todo tienta, pero la prenda sirve igual." },
  ],
},
];
