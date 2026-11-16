// Temario del curso "Pensar como programador". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js chicos-programar y node tools/metodologia.js chicos-programar
window.TEMARIO = [
{
  id: "empezar",
  icono: "🤖",
  titulo: "Qué es programar",
  nivel: "Básico",
  objetivos: [
    "Explicar con tus palabras qué es programar",
    "Dar instrucciones exactas a alguien que las sigue al pie de la letra",
    "Encontrar programas en cosas de todos los días",
  ],
  lecciones: [
    { titulo: "Darle instrucciones a una máquina", video: {"id":"ti315UlVtS4","t":"Qué es el pensamiento computacional · Educ.ar (2:25)"}, html: `
      <p class="idea">Programar es darle instrucciones a una computadora para que haga algo. La computadora no adivina: hace exactamente lo que le decís.</p>
      <table>
        <tr><th>Persona</th><th>Computadora</th></tr>
        <tr><td>Entiende "más o menos"</td><td>Necesita instrucciones exactas</td></tr>
        <tr><td>Se da cuenta si algo está mal</td><td>Hace lo que dice el programa, aunque esté mal</td></tr>
        <tr><td>Se cansa</td><td>Repite mil veces sin cansarse</td></tr>
      </table>
      <p>Un <strong>programa</strong> es una lista de instrucciones. Las personas que escriben programas se llaman programadoras.</p>
      <p>Pensar como programador sirve aunque no uses una compu: te ayuda a ordenar ideas y resolver problemas.</p>
      <p>Por ejemplo, si le decís a una compu "dibujá algo lindo", no sabe qué hacer. Si le decís "dibujá un círculo rojo", sí.</p>` },
    { titulo: "El robot humano", html: `
      <p class="idea">Un juego para entender la programación: una persona hace de robot y sigue las instrucciones al pie de la letra. Otra persona es la programadora.</p>
      <pre><code>Misión: que el robot vaya de la puerta a la silla.

Instrucciones permitidas:
- avanzar 1 paso
- girar a la derecha
- girar a la izquierda
- sentarse

Programa de ejemplo:
avanzar 1 paso
avanzar 1 paso
girar a la derecha
avanzar 1 paso
sentarse</code></pre>
      <table>
        <tr><th>Regla del robot</th></tr>
        <tr><td>Solo hace lo que dice la instrucción</td></tr>
        <tr><td>Si una instrucción no está en la lista, no la entiende</td></tr>
        <tr><td>Si chocás con algo, el programa tiene un error: lo arreglan juntos</td></tr>
      </table>
      <p>Hacelo con un adulto o un amigo, en un lugar sin cosas que puedan caerse.</p>
      <p>Por ejemplo, si le decís "andá a la silla", el robot no se mueve. Solo entiende "avanzar 1 paso", "girar" y "sentarse".</p>` },
    { titulo: "Programas por todos lados", html: `
      <p class="idea">Hay programas en muchas cosas que usás todos los días. Todos siguen instrucciones que alguien escribió.</p>
      <table>
        <tr><th>Cosa</th><th>Qué hace su programa</th></tr>
        <tr><td>Un semáforo</td><td>Cambia de color cada cierto tiempo</td></tr>
        <tr><td>Un microondas</td><td>Calienta los segundos que marcaste y después suena</td></tr>
        <tr><td>Un videojuego</td><td>Si saltás sobre un enemigo, suma puntos</td></tr>
        <tr><td>Una calculadora</td><td>Hace la cuenta con los números que pusiste</td></tr>
      </table>
      <p>Detrás de cada uno hay personas que pensaron los pasos, los probaron y arreglaron errores.</p>
      <p>Vos también podés escribir programas. En este curso vas a aprender las ideas que usan todos los programadores.</p>
      <p>Por ejemplo, el programa del semáforo podría ser: verde 30 segundos, amarillo 3 segundos, rojo 30 segundos, y volver a empezar.</p>` },
  ],
  practica: [
    "Jugá al robot humano con un adulto o un amigo. Anotá cuántas instrucciones tuvo tu programa para llegar a la silla.",
    "Anotá 3 cosas de tu casa que tengan un programa y qué hace cada una.",
    "Escribí el programa de un semáforo con los segundos de cada color. Anotá cuántos segundos dura una vuelta completa.",
  ],
  recursos: [
    { t: "CS Unplugged: actividades de computación sin computadora (para ver con un adulto)", url: "https://csunplugged.org/es/" },
    { t: "Program.AR: programación en las escuelas de Argentina (para ver con un adulto)", url: "https://program.ar/" },
  ],
  quiz: [
    { q: "Si le das instrucciones a una computadora, ¿qué hace?", opciones: ["Lo que ella quiere","Adivina lo que pensás","Exactamente lo que le decís","Nada nunca"], correcta: 2, explicacion: "La compu no adivina. \"Adivina lo que pensás\" tienta, pero necesita instrucciones exactas." },
    { q: "Si le decís a una compu \"dibujá algo lindo\", ¿qué pasa?", opciones: ["No sabe qué hacer: falta una instrucción exacta","Dibuja algo hermoso","Dibuja tu cara","Se enoja"], correcta: 0, explicacion: "\"Lindo\" no es exacto. \"Dibuja algo hermoso\" tienta, pero no sabe qué es lindo para vos." },
    { q: "Si querés saber qué es un programa, ¿qué es?", opciones: ["Un dibujo","Un juguete","Una pantalla","Una lista de instrucciones"], correcta: 3, explicacion: "Un programa son instrucciones. \"Una pantalla\" tienta porque ahí lo ves, pero no es lo mismo." },
    { q: "Si un programa tiene un error, ¿la compu se da cuenta sola?", opciones: ["Sí, siempre","No: hace lo que dice el programa, aunque esté mal","Sí, y lo arregla","Sí, y te avisa con un dibujo"], correcta: 1, explicacion: "La compu sigue las instrucciones. \"Lo arregla\" tienta, pero eso lo hace la persona." },
    { q: "Si jugás al robot humano y decís \"andá a la silla\", ¿qué hace el robot?", opciones: ["Va a la silla","Corre","Nada: esa instrucción no está en su lista","Se sienta en el piso"], correcta: 2, explicacion: "El robot solo entiende sus instrucciones. \"Va a la silla\" tienta porque una persona sí entiende." },
    { q: "Si el robot choca con algo, ¿qué significa?", opciones: ["Que el programa tiene un error y hay que arreglarlo","Que el robot es malo","Que hay que gritarle","Que el juego terminó"], correcta: 0, explicacion: "Los errores se arreglan. \"El robot es malo\" tienta, pero hizo lo que decía el programa." },
    { q: "Si querés jugar al robot humano, ¿dónde conviene?", opciones: ["En una escalera","Cerca de la cocina prendida","En la calle","En un lugar sin cosas que puedan caerse, con un adulto o amigo"], correcta: 3, explicacion: "Primero la seguridad. La escalera tienta por desafío, pero es peligrosa." },
    { q: "Si un semáforo cambia de color cada cierto tiempo, ¿qué tiene?", opciones: ["Magia","Un programa","Una persona adentro","Nada"], correcta: 1, explicacion: "Sigue instrucciones. \"Una persona adentro\" tienta, pero lo hace un programa." },
    { q: "Si en un videojuego saltás sobre un enemigo y suman puntos, ¿quién decidió eso?", opciones: ["El enemigo","La consola sola","Las personas que programaron el juego","Nadie"], correcta: 2, explicacion: "Alguien escribió esa regla. \"La consola sola\" tienta, pero sigue el programa." },
    { q: "Si el semáforo está 30 segundos en verde, 3 en amarillo y 30 en rojo, ¿cuánto dura una vuelta?", opciones: ["63 segundos","33 segundos","30 segundos","90 segundos"], correcta: 0, explicacion: "30 + 3 + 30 = 63. 90 tienta si contás 3 veces 30." },
    { q: "Si no vas a usar una compu, ¿sirve pensar como programador?", opciones: ["No, nunca","Solo para jugar","Solo para adultos","Sí: ayuda a ordenar ideas y resolver problemas"], correcta: 3, explicacion: "Pensar en pasos sirve siempre. \"No, nunca\" tienta, pero lo usás para muchas cosas." },
    { q: "Si querés ser programador, ¿podés empezar ahora?", opciones: ["No, hay que ser adulto","Sí: con las ideas de este curso ya empezás","No, hay que ser un genio","Solo si tenés una compu cara"], correcta: 1, explicacion: "Cualquiera puede empezar. \"Hay que ser un genio\" tienta, pero se aprende practicando." },
  ],
},
{
  id: "secuencias",
  icono: "🧩",
  titulo: "Algoritmos y pasos en orden",
  nivel: "Básico",
  objetivos: [
    "Escribir un algoritmo con pasos en el orden correcto",
    "Partir un problema grande en problemas chicos",
    "Comparar dos algoritmos y elegir el más corto",
  ],
  lecciones: [
    { titulo: "Qué es un algoritmo", video: {"id":"U3CGMyjzlvM","t":"Qué es un algoritmo · Magic Markers (4:48)"}, html: `
      <p class="idea">Un <strong>algoritmo</strong> es una lista de pasos en orden para resolver algo. Una receta de cocina es un algoritmo.</p>
      <pre><code>Algoritmo para lavarte los dientes:
1. Mojar el cepillo.
2. Poner pasta.
3. Cepillar arriba.
4. Cepillar abajo.
5. Escupir.
6. Enjuagar la boca y el cepillo.</code></pre>
      <table>
        <tr><th>Un buen algoritmo</th></tr>
        <tr><td>Tiene un principio y un final</td></tr>
        <tr><td>Cada paso es claro</td></tr>
        <tr><td>Los pasos están en el orden correcto</td></tr>
      </table>
      <p>El orden importa. Si cambiás dos pasos, el resultado puede salir mal.</p>
      <p>Por ejemplo, si ponés "enjuagar" antes de "poner pasta", te lavás los dientes sin pasta.</p>` },
    { titulo: "Partir un problema grande", html: `
      <p class="idea">Los problemas grandes asustan. Los programadores los parten en problemas chicos y resuelven uno por vez. Esto se llama <strong>descomponer</strong>.</p>
      <pre><code>Problema grande: organizar un cumpleaños

Partes chicas:
1. Elegir el día.
2. Hacer la lista de invitados.
3. Mandar las invitaciones.
4. Preparar la comida.
5. Pensar los juegos.</code></pre>
      <table>
        <tr><th>Problema grande</th><th>Primera parte chica</th></tr>
        <tr><td>Ordenar tu cuarto</td><td>Juntar la ropa</td></tr>
        <tr><td>Hacer una maqueta</td><td>Hacer la lista de materiales</td></tr>
        <tr><td>Hacer un juego</td><td>Hacer que el personaje se mueva</td></tr>
      </table>
      <p>Cada parte chica se puede partir otra vez, hasta que sea fácil.</p>
      <p>Por ejemplo, "hacer la tarea de matemática" se puede partir en "leer el ejercicio", "anotar los datos", "hacer la cuenta" y "revisar".</p>` },
    { titulo: "Algoritmos más cortos", html: `
      <p class="idea">Hay muchos algoritmos que resuelven lo mismo. Los programadores buscan el que tenga menos pasos, sin dejar de funcionar.</p>
      <pre><code>Llegar de la casilla A a la casilla D en una fila:
A  B  C  D

Algoritmo 1:              Algoritmo 2:
avanzar                   avanzar
avanzar                   avanzar
retroceder                avanzar
avanzar
avanzar
(5 pasos)                 (3 pasos)</code></pre>
      <table>
        <tr><th>Preguntas para mejorar un algoritmo</th></tr>
        <tr><td>¿Hay pasos que no hacen falta?</td></tr>
        <tr><td>¿Hay pasos que se cancelan (avanzar y retroceder)?</td></tr>
        <tr><td>¿Sigue funcionando si saco un paso?</td></tr>
      </table>
      <p>Más corto no es mejor si deja de funcionar. Primero que funcione, después que sea corto.</p>
      <p>Por ejemplo, el algoritmo 1 tiene un "retroceder" y un "avanzar" que se cancelan. Si los sacás, queda igual que el algoritmo 2.</p>` },
  ],
  practica: [
    "Escribí el algoritmo de algo que hacés todos los días (por ejemplo, preparar la mochila). Anotá cuántos pasos tiene.",
    "Partí un problema grande en al menos 4 partes chicas. Anotalas en orden.",
    "Escribí un algoritmo largo para ir de A a D y después uno más corto. Anotá cuántos pasos ahorraste.",
  ],
  recursos: [
    { t: "Code.org: cursos de programación para chicos (para usar con un adulto)", url: "https://code.org/" },
    { t: "CS Unplugged: actividades de computación sin computadora (para ver con un adulto)", url: "https://csunplugged.org/es/" },
  ],
  quiz: [
    { q: "Si escribís los pasos de una receta, ¿qué estás escribiendo?", opciones: ["Un dibujo","Un juego","Un algoritmo","Un cuento"], correcta: 2, explicacion: "Una receta es una lista de pasos en orden. \"Un cuento\" tienta porque tiene principio y final, pero no es un algoritmo." },
    { q: "Si cambiás de lugar dos pasos de un algoritmo, ¿qué puede pasar?", opciones: ["Que el resultado salga mal","Nada nunca","Que salga más rápido siempre","Que se arregle solo"], correcta: 0, explicacion: "El orden importa. \"Nada nunca\" tienta, pero a veces cambia todo." },
    { q: "Si ponés \"enjuagar\" antes de \"poner pasta\", ¿qué pasa?", opciones: ["Queda perfecto","Te lavás dos veces","No pasa nada","Te lavás los dientes sin pasta"], correcta: 3, explicacion: "El paso quedó en el lugar equivocado. \"Queda perfecto\" tienta, pero falta la pasta." },
    { q: "Si un algoritmo es bueno, ¿qué tiene?", opciones: ["Muchos pasos sin orden","Principio, final, pasos claros y en orden","Pasos que no se entienden","Ningún final"], correcta: 1, explicacion: "Así se puede seguir. \"Muchos pasos\" tienta, pero sin orden no funciona." },
    { q: "Si un problema te parece muy grande, ¿qué hacés?", opciones: ["Lo dejás","Lo hacés todo de golpe","Lo partís en problemas chicos","Le pedís a otro que lo haga siempre"], correcta: 2, explicacion: "Partirlo lo hace fácil. \"Lo dejás\" tienta, pero de a partes se puede." },
    { q: "Si partís un problema en partes chicas, ¿cómo se llama?", opciones: ["Descomponer","Romper","Olvidar","Copiar"], correcta: 0, explicacion: "Así lo llaman los programadores. \"Romper\" tienta, pero no rompés nada." },
    { q: "Si querés hacer un juego, ¿cuál puede ser la primera parte chica?", opciones: ["Terminar todo el juego","Ganar un premio","Venderlo","Hacer que el personaje se mueva"], correcta: 3, explicacion: "Se empieza por algo simple. \"Terminar todo\" tienta, pero es el problema grande." },
    { q: "Si una parte chica todavía es difícil, ¿qué hacés?", opciones: ["La salteás","La partís otra vez","Te rendís","La hacés sin pensar"], correcta: 1, explicacion: "Se puede partir hasta que sea fácil. Saltearla tienta, pero queda sin hacer." },
    { q: "Si dos algoritmos hacen lo mismo, ¿cuál buscan los programadores?", opciones: ["El más largo","Cualquiera","El que tiene menos pasos y sigue funcionando","El que no funciona"], correcta: 2, explicacion: "Más corto y que funcione. \"El más largo\" tienta por completo, pero tiene pasos de más." },
    { q: "Si un algoritmo tiene \"avanzar\" y después \"retroceder\", ¿qué pasa con esos pasos?", opciones: ["Se cancelan: se pueden sacar","Son necesarios","Hacen avanzar el doble","Hacen que funcione mejor"], correcta: 0, explicacion: "Avanzar y retroceder te deja igual. \"Avanzar el doble\" tienta, pero volvés al mismo lugar." },
    { q: "Si un algoritmo tiene 5 pasos y otro hace lo mismo en 3, ¿cuántos pasos ahorrás?", opciones: ["8","3","5","2"], correcta: 3, explicacion: "5 - 3 = 2. El 8 tienta si sumás." },
    { q: "Si acortás un algoritmo y deja de funcionar, ¿es mejor?", opciones: ["Sí, porque es más corto","No: primero que funcione, después que sea corto","Sí, siempre","Da igual"], correcta: 1, explicacion: "Funcionar es lo primero. \"Es más corto\" tienta, pero no sirve si falla." },
  ],
},
{
  id: "bucles",
  icono: "🔁",
  titulo: "Repetir: los bucles",
  nivel: "Intermedio",
  objetivos: [
    "Encontrar pasos que se repiten en un algoritmo",
    "Usar \"repetir N veces\" para escribir menos",
    "Dibujar figuras con bucles",
  ],
  lecciones: [
    { titulo: "Pasos que se repiten", video: {"id":"fwOgu-FVP3w","t":"Qué es un bucle: programación para chicos · Smile and Learn (5:28)"}, html: `
      <p class="idea">A veces un algoritmo repite los mismos pasos muchas veces. En lugar de escribirlos una y otra vez, se usa un <strong>bucle</strong>: una instrucción que repite.</p>
      <pre><code>Sin bucle:              Con bucle:
saltar                  repetir 5 veces:
saltar                      saltar
saltar
saltar
saltar</code></pre>
      <table>
        <tr><th>Sin bucle</th><th>Con bucle</th></tr>
        <tr><td>5 líneas</td><td>2 líneas</td></tr>
        <tr><td>Para 100 saltos, 100 líneas</td><td>Para 100 saltos, sigue siendo 2 líneas</td></tr>
      </table>
      <p>Lo que va adentro del bucle se repite. Por eso se escribe un poco más a la derecha.</p>
      <p>Por ejemplo, "lavar 10 platos" es un bucle: repetir 10 veces lavar un plato.</p>` },
    { titulo: "Dibujar con bucles", html: `
      <p class="idea">Con un bucle se pueden dibujar figuras. Un lápiz que avanza y gira, repitiendo, dibuja un polígono.</p>
      <pre><code>Cuadrado (4 lados iguales):
repetir 4 veces:
    avanzar 10 pasos
    girar 90 grados

Triángulo (3 lados iguales):
repetir 3 veces:
    avanzar 10 pasos
    girar 120 grados</code></pre>
      <table>
        <tr><th>Figura</th><th>Veces que repite</th><th>Cuánto gira</th></tr>
        <tr><td>Triángulo</td><td>3</td><td>120 grados</td></tr>
        <tr><td>Cuadrado</td><td>4</td><td>90 grados</td></tr>
        <tr><td>Hexágono</td><td>6</td><td>60 grados</td></tr>
      </table>
      <p>Truco: si multiplicás las veces por los grados, siempre da 360. Es una vuelta completa.</p>
      <p>Por ejemplo, 4 veces 90 grados es 360. Por eso el lápiz vuelve al lugar donde empezó.</p>` },
    { titulo: "Bucles en la vida diaria", html: `
      <p class="idea">Hay bucles en muchas cosas de todos los días. Algunos se repiten una cantidad fija de veces. Otros se repiten hasta que pasa algo.</p>
      <table>
        <tr><th>Tipo de bucle</th><th>Ejemplo</th></tr>
        <tr><td>Repetir un número de veces</td><td>Hacer 10 abdominales</td></tr>
        <tr><td>Repetir hasta que pase algo</td><td>Revolver la sopa hasta que se enfríe</td></tr>
        <tr><td>Repetir para siempre</td><td>Las agujas del reloj, que siempre giran</td></tr>
      </table>
      <pre><code>repetir hasta que la regadera esté vacía:
    regar una planta
    pasar a la siguiente</code></pre>
      <p>Cuidado con un bucle que nunca termina sin querer. En un programa, la compu se puede trabar.</p>
      <p>Por ejemplo, "revolver hasta que la sopa esté fría" termina. "Revolver hasta que la sopa sea de chocolate" no termina nunca.</p>` },
  ],
  practica: [
    "Escribí un algoritmo con pasos repetidos y después reescribilo con un bucle. Anotá cuántas líneas ahorraste.",
    "Dibujá en papel un cuadrado y un triángulo siguiendo los bucles. Anotá cuántos grados gira cada uno y si da 360 al multiplicar.",
    "Anotá 3 bucles de tu vida diaria: uno de un número de veces, uno \"hasta que\" y uno para siempre.",
  ],
  recursos: [
    { t: "Scratch: programar con bloques, gratis (para usar con un adulto)", url: "https://scratch.mit.edu/" },
    { t: "Code.org: cursos de programación para chicos (para usar con un adulto)", url: "https://code.org/" },
  ],
  quiz: [
    { q: "Si un algoritmo repite \"saltar\" 5 veces, ¿qué podés usar?", opciones: ["Escribirlo 50 veces","Borrar todo","Un bucle: repetir 5 veces saltar","Un dibujo"], correcta: 2, explicacion: "El bucle repite por vos. Escribirlo muchas veces tienta, pero es más largo." },
    { q: "Si querés 100 saltos, ¿cuántas líneas tiene el programa con bucle?", opciones: ["Sigue siendo 2 líneas","100 líneas","200 líneas","50 líneas"], correcta: 0, explicacion: "Solo cambia el número del bucle. 100 tienta, pero eso es sin bucle." },
    { q: "Si una instrucción está adentro del bucle, ¿qué pasa con ella?", opciones: ["Se borra","Se hace una sola vez","Se ignora","Se repite"], correcta: 3, explicacion: "Lo de adentro se repite. \"Una sola vez\" tienta, pero eso es lo de afuera." },
    { q: "Si querés dibujar un cuadrado, ¿cuántas veces repetís?", opciones: ["3 veces","4 veces","6 veces","90 veces"], correcta: 1, explicacion: "El cuadrado tiene 4 lados. 90 tienta porque son los grados, no las veces." },
    { q: "Si dibujás un cuadrado, ¿cuántos grados gira en cada esquina?", opciones: ["120 grados","60 grados","90 grados","360 grados"], correcta: 2, explicacion: "4 × 90 = 360. 120 tienta, pero ese es el triángulo." },
    { q: "Si dibujás un triángulo de lados iguales, ¿cuánto gira en cada esquina?", opciones: ["120 grados","90 grados","60 grados","3 grados"], correcta: 0, explicacion: "3 × 120 = 360. 90 tienta, pero ese es el cuadrado." },
    { q: "Si querés un hexágono (6 lados), ¿cuánto gira cada vez?", opciones: ["90 grados","6 grados","120 grados","60 grados"], correcta: 3, explicacion: "6 × 60 = 360. 6 grados tienta por el número de lados." },
    { q: "Si multiplicás las veces por los grados en estas figuras, ¿cuánto da?", opciones: ["100","360: una vuelta completa","90","Cada vez distinto"], correcta: 1, explicacion: "Siempre da 360. \"Cada vez distinto\" tienta, pero el lápiz siempre da una vuelta." },
    { q: "Si hacés 10 abdominales, ¿qué tipo de bucle es?", opciones: ["Repetir para siempre","Repetir hasta que llueva","Repetir un número de veces","No es un bucle"], correcta: 2, explicacion: "Son 10 veces fijas. \"Para siempre\" tienta, pero termina en 10." },
    { q: "Si revolvés la sopa hasta que se enfríe, ¿qué tipo de bucle es?", opciones: ["Repetir hasta que pase algo","Repetir 3 veces","Repetir para siempre","No es un bucle"], correcta: 0, explicacion: "Termina cuando se enfría. \"3 veces\" tienta, pero no sabés cuántas vueltas son." },
    { q: "Si un bucle nunca termina sin querer, ¿qué puede pasar en un programa?", opciones: ["Que funcione mejor","Nada","Que termine más rápido","Que la compu se trabe"], correcta: 3, explicacion: "Un bucle sin fin traba. \"Funciona mejor\" tienta, pero nunca sale del bucle." },
    { q: "Si escribís \"revolver hasta que la sopa sea de chocolate\", ¿qué pasa?", opciones: ["Termina en 1 minuto","No termina nunca: la sopa no se vuelve de chocolate","La sopa cambia de sabor","Funciona bien"], correcta: 1, explicacion: "Esa condición nunca se cumple. \"Termina en 1 minuto\" tienta, pero no hay forma de cumplirla." },
  ],
},
{
  id: "condiciones",
  icono: "🔀",
  titulo: "Decidir: si... entonces...",
  nivel: "Intermedio",
  objetivos: [
    "Escribir una condición con \"si... entonces...\"",
    "Agregar \"si no\" para el otro caso",
    "Combinar condiciones con bucles",
  ],
  lecciones: [
    { titulo: "Si... entonces...", video: {"id":"RaWfeVgkWbE","t":"Qué son los condicionales en programación · Retro (3:21)"}, html: `
      <p class="idea">Los programas toman decisiones. Una <strong>condición</strong> pregunta algo y, según la respuesta, hace una cosa u otra.</p>
      <pre><code>si llueve entonces:
    llevar paraguas</code></pre>
      <table>
        <tr><th>Condición</th><th>Entonces</th></tr>
        <tr><td>Si tengo hambre</td><td>Como algo</td></tr>
        <tr><td>Si el semáforo está en rojo</td><td>Espero</td></tr>
        <tr><td>Si toco un enemigo en el juego</td><td>Pierdo una vida</td></tr>
      </table>
      <p>La condición solo puede ser verdadera o falsa. Si es verdadera, se hace lo de adentro. Si es falsa, no.</p>
      <p>Por ejemplo, "si llueve" es verdadero un día de lluvia: llevás paraguas. Un día de sol es falso: no lo llevás.</p>` },
    { titulo: "Si no...", html: `
      <p class="idea">A veces querés hacer algo cuando la condición es verdadera, y otra cosa cuando es falsa. Para eso está el <strong>si no</strong>.</p>
      <pre><code>si llueve entonces:
    llevar paraguas
si no:
    llevar gorra</code></pre>
      <pre><code>Juego de adivinar un número (el número secreto es 7):
si el número es 7 entonces:
    decir "¡Ganaste!"
si no:
    decir "Probá otra vez"</code></pre>
      <table>
        <tr><th>Si respondés...</th><th>El programa dice</th></tr>
        <tr><td>7</td><td>"¡Ganaste!"</td></tr>
        <tr><td>3</td><td>"Probá otra vez"</td></tr>
        <tr><td>10</td><td>"Probá otra vez"</td></tr>
      </table>
      <p>Con "si no", siempre pasa una de las dos cosas. Nunca las dos juntas.</p>
      <p>Por ejemplo, si llueve llevás paraguas y si no, gorra. Nunca vas a llevar las dos cosas por este programa.</p>` },
    { titulo: "Bucles y condiciones juntos", html: `
      <p class="idea">Los programas de verdad mezclan bucles y condiciones. Así un personaje puede repetir algo y decidir en cada vuelta.</p>
      <pre><code>Robot que junta monedas en un camino de 10 casillas:
repetir 10 veces:
    si hay una moneda entonces:
        juntar la moneda
        sumar 1 punto
    avanzar 1 casilla</code></pre>
      <table>
        <tr><th>Casilla</th><th>¿Hay moneda?</th><th>Puntos</th></tr>
        <tr><td>1</td><td>Sí</td><td>1</td></tr>
        <tr><td>2</td><td>No</td><td>1</td></tr>
        <tr><td>3</td><td>Sí</td><td>2</td></tr>
        <tr><td>4</td><td>Sí</td><td>3</td></tr>
      </table>
      <p>El bucle hace que revise todas las casillas. La condición decide en cada una.</p>
      <p>Por ejemplo, si en las 10 casillas hay 6 monedas, el robot termina con 6 puntos.</p>` },
  ],
  practica: [
    "Escribí 3 condiciones de tu vida con \"si... entonces...\". Anotá qué pasa cuando es verdadera y cuando es falsa.",
    "Escribí el juego de adivinar un número con \"si no\". Probalo con un adulto y anotá cuántos intentos tardó en ganar.",
    "Dibujá un camino de 10 casillas, poné monedas en algunas y seguí el programa del robot. Anotá cuántos puntos sumó.",
  ],
  recursos: [
    { t: "Scratch: programar con bloques, gratis (para usar con un adulto)", url: "https://scratch.mit.edu/" },
    { t: "Program.AR: programación en las escuelas de Argentina (para ver con un adulto)", url: "https://program.ar/" },
  ],
  quiz: [
    { q: "Si un programa tiene que decidir algo, ¿qué usa?", opciones: ["Un bucle siempre","Un dibujo","Una condición: si... entonces...","Nada"], correcta: 2, explicacion: "Las condiciones deciden. El bucle tienta, pero ese repite." },
    { q: "Si escribís \"si llueve entonces llevar paraguas\" y hay sol, ¿qué pasa?", opciones: ["No se lleva paraguas: la condición es falsa","Se lleva paraguas igual","Llueve","El programa se rompe"], correcta: 0, explicacion: "Falso, entonces no se hace. \"Se lleva igual\" tienta, pero solo pasa si llueve." },
    { q: "Si querés saber qué puede ser una condición, ¿qué valores tiene?", opciones: ["Roja o azul","Grande o chica","Cualquier número","Verdadera o falsa"], correcta: 3, explicacion: "Una condición es verdadera o falsa. \"Cualquier número\" tienta, pero la respuesta es sí o no." },
    { q: "Si en un juego tocás un enemigo, ¿qué condición se cumple?", opciones: ["Si como algo entonces gano","Si toco un enemigo entonces pierdo una vida","Si llueve entonces salto","Ninguna"], correcta: 1, explicacion: "Esa es la regla del juego. Las otras tientan, pero no tienen que ver." },
    { q: "Si querés hacer algo cuando la condición es falsa, ¿qué agregás?", opciones: ["Otro bucle","Nada","\"Si no\"","\"Repetir\""], correcta: 2, explicacion: "\"Si no\" cubre el otro caso. \"Repetir\" tienta, pero eso es un bucle." },
    { q: "Si el número secreto es 7 y respondés 7, ¿qué dice el programa?", opciones: ["\"¡Ganaste!\"","\"Probá otra vez\"","Nada","Las dos cosas"], correcta: 0, explicacion: "La condición es verdadera. \"Probá otra vez\" tienta, pero ese es el \"si no\"." },
    { q: "Si el número secreto es 7 y respondés 3, ¿qué dice?", opciones: ["\"¡Ganaste!\"","Las dos cosas","Nada","\"Probá otra vez\""], correcta: 3, explicacion: "La condición es falsa, entonces va al \"si no\". \"¡Ganaste!\" tienta, pero 3 no es 7." },
    { q: "Si usás \"si... entonces... si no...\", ¿cuántas cosas pasan?", opciones: ["Las dos juntas","Siempre una de las dos","Ninguna","Tres"], correcta: 1, explicacion: "Pasa una u otra. \"Las dos juntas\" tienta, pero nunca pasa con \"si no\"." },
    { q: "Si querés revisar 10 casillas y decidir en cada una, ¿qué combinás?", opciones: ["Solo un dibujo","Dos dibujos","Un bucle y una condición","Nada"], correcta: 2, explicacion: "El bucle recorre y la condición decide. Solo un bucle tienta, pero no decide." },
    { q: "Si en el camino hay monedas en las casillas 1, 3 y 4, ¿cuántos puntos tiene el robot al llegar a la casilla 4?", opciones: ["3 puntos","4 puntos","1 punto","10 puntos"], correcta: 0, explicacion: "Suma uno por cada moneda: 3. El 4 tienta porque es la casilla, no las monedas." },
    { q: "Si en 10 casillas hay 6 monedas, ¿con cuántos puntos termina el robot?", opciones: ["10 puntos","4 puntos","16 puntos","6 puntos"], correcta: 3, explicacion: "Un punto por moneda. 10 tienta porque son las casillas, pero solo 6 tienen moneda." },
    { q: "Si en el programa del robot sacás la condición, ¿qué pasa?", opciones: ["Funciona igual","Suma puntos en todas las casillas, haya moneda o no","No suma nunca","Se detiene"], correcta: 1, explicacion: "Sin condición no decide. \"Funciona igual\" tienta, pero suma de más." },
  ],
},
{
  id: "variables",
  icono: "📦",
  titulo: "Guardar datos y responder a eventos",
  nivel: "Intermedio",
  objetivos: [
    "Usar una variable para guardar un dato que cambia",
    "Cambiar el valor de una variable paso a paso",
    "Hacer que algo pase cuando ocurre un evento",
  ],
  lecciones: [
    { titulo: "Variables: cajas con nombre", html: `
      <p class="idea">Una <strong>variable</strong> es como una caja con nombre donde el programa guarda un dato. El dato de adentro puede cambiar.</p>
      <pre><code>puntos = 0          (la caja "puntos" empieza en 0)
puntos = puntos + 1 (ahora tiene 1)
puntos = puntos + 1 (ahora tiene 2)
puntos = puntos + 5 (ahora tiene 7)</code></pre>
      <table>
        <tr><th>Variable</th><th>Qué guarda</th></tr>
        <tr><td>puntos</td><td>Los puntos del juego</td></tr>
        <tr><td>vidas</td><td>Cuántas vidas quedan</td></tr>
        <tr><td>nombre</td><td>El nombre del jugador</td></tr>
        <tr><td>tiempo</td><td>Los segundos que pasaron</td></tr>
      </table>
      <p>"puntos = puntos + 1" quiere decir: tomá lo que hay en la caja, sumale 1 y guardalo de nuevo.</p>
      <p>Por ejemplo, el marcador de un partido es una variable: empieza en 0 y cambia cada vez que hay un gol.</p>` },
    { titulo: "Seguir una variable paso a paso", html: `
      <p class="idea">Para entender un programa, podés seguir las variables paso a paso, anotando cuánto valen después de cada línea.</p>
      <pre><code>vidas = 3
puntos = 0
repetir 4 veces:
    puntos = puntos + 10
vidas = vidas - 1</code></pre>
      <table>
        <tr><th>Paso</th><th>vidas</th><th>puntos</th></tr>
        <tr><td>Al empezar</td><td>3</td><td>0</td></tr>
        <tr><td>Vuelta 1 del bucle</td><td>3</td><td>10</td></tr>
        <tr><td>Vuelta 2</td><td>3</td><td>20</td></tr>
        <tr><td>Vuelta 3</td><td>3</td><td>30</td></tr>
        <tr><td>Vuelta 4</td><td>3</td><td>40</td></tr>
        <tr><td>Después del bucle</td><td>2</td><td>40</td></tr>
      </table>
      <p>Esta tabla se llama "prueba de escritorio". Los programadores la usan para encontrar errores.</p>
      <p>Por ejemplo, esperabas 50 puntos y la tabla da 40. Entonces el bucle se repite una vez menos de lo que querías.</p>` },
    { titulo: "Eventos: cuando pasa algo", html: `
      <p class="idea">Un <strong>evento</strong> es algo que pasa y hace arrancar una parte del programa. Por ejemplo, tocar una tecla o hacer clic.</p>
      <pre><code>cuando se toca la bandera verde:
    puntos = 0
    decir "¡Empieza el juego!"

cuando se toca la flecha derecha:
    avanzar 10 pasos

cuando el personaje toca una estrella:
    puntos = puntos + 1</code></pre>
      <table>
        <tr><th>Evento</th><th>Ejemplo en la vida</th></tr>
        <tr><td>Cuando suena el timbre</td><td>Abrir la puerta</td></tr>
        <tr><td>Cuando suena el despertador</td><td>Levantarse</td></tr>
        <tr><td>Cuando el semáforo se pone en verde</td><td>Cruzar con cuidado</td></tr>
      </table>
      <p>En Scratch, muchos programas empiezan con "al presionar la bandera verde". Es un evento.</p>
      <p>Por ejemplo, en un juego, la flecha derecha mueve al personaje solo cuando la tocás: sin el evento, no se mueve.</p>` },
  ],
  practica: [
    "Inventá 3 variables para un juego y anotá con qué valor empieza cada una.",
    "Hacé la prueba de escritorio del programa de vidas y puntos. Anotá cuánto vale cada variable al final.",
    "Anotá 3 eventos de tu día y qué hacés cuando pasa cada uno.",
  ],
  recursos: [
    { t: "Scratch: programar con bloques, gratis (para usar con un adulto)", url: "https://scratch.mit.edu/" },
    { t: "Code.org: cursos de programación para chicos (para usar con un adulto)", url: "https://code.org/" },
  ],
  quiz: [
    { q: "Si querés guardar los puntos de un juego, ¿qué usás?", opciones: ["Un bucle","Un dibujo","Una variable","Un evento"], correcta: 2, explicacion: "La variable guarda el dato. El bucle tienta, pero ese repite." },
    { q: "Si puntos vale 0 y hacés \"puntos = puntos + 1\" dos veces, ¿cuánto vale?", opciones: ["2","1","0","11"], correcta: 0, explicacion: "Suma 1 y después otro 1: 2. El 11 tienta si pensás que se pegan los números." },
    { q: "Si puntos vale 2 y hacés \"puntos = puntos + 5\", ¿cuánto vale?", opciones: ["5","2","25","7"], correcta: 3, explicacion: "2 + 5 = 7. El 5 tienta, pero se suma a lo que ya había." },
    { q: "Si una variable se llama \"vidas\", ¿qué guarda?", opciones: ["El nombre del jugador","Cuántas vidas quedan","El color del fondo","Nada"], correcta: 1, explicacion: "El nombre dice qué guarda. \"El nombre del jugador\" tienta, pero esa sería otra variable." },
    { q: "Si el marcador de un partido cambia con cada gol, ¿qué es?", opciones: ["Un bucle","Un algoritmo de cocina","Una variable","Un evento solo"], correcta: 2, explicacion: "Guarda un dato que cambia. El evento tienta porque el gol \"pasa\", pero el marcador es la variable." },
    { q: "Si el bucle suma 10 puntos 4 veces empezando en 0, ¿cuántos puntos hay al final?", opciones: ["40","14","10","4"], correcta: 0, explicacion: "4 × 10 = 40. El 14 tienta si sumás 10 + 4." },
    { q: "Si vidas empieza en 3 y después hacés \"vidas = vidas - 1\", ¿cuánto vale?", opciones: ["3","4","1","2"], correcta: 3, explicacion: "3 - 1 = 2. El 4 tienta si sumás en vez de restar." },
    { q: "Si querés seguir las variables línea por línea, ¿qué hacés?", opciones: ["Adivinar el final","Una prueba de escritorio: una tabla con el valor después de cada paso","Borrar el programa","Nada"], correcta: 1, explicacion: "La tabla muestra cada cambio. Adivinar tienta por rápido, pero se escapan errores." },
    { q: "Si esperabas 50 puntos y la prueba de escritorio da 40, ¿qué pasó?", opciones: ["La compu se equivocó","Está perfecto","El bucle se repite una vez menos de lo que querías","Faltan vidas"], correcta: 2, explicacion: "5 × 10 sería 50. \"La compu se equivocó\" tienta, pero hizo lo que decía el programa." },
    { q: "Si algo pasa y hace arrancar una parte del programa, ¿cómo se llama?", opciones: ["Un evento","Una variable","Un bucle","Un error"], correcta: 0, explicacion: "Eso es un evento. La variable tienta, pero esa guarda datos." },
    { q: "Si en Scratch tocás la bandera verde, ¿qué pasa?", opciones: ["Se borra todo","Se apaga la compu","Nada nunca","Arrancan los bloques que dicen \"al presionar la bandera verde\""], correcta: 3, explicacion: "Es un evento muy usado. \"Se borra todo\" tienta por el miedo, pero no pasa." },
    { q: "Si un personaje solo se mueve cuando tocás la flecha, ¿por qué?", opciones: ["Porque está roto","Porque el movimiento está dentro de un evento","Porque no tiene variables","Por magia"], correcta: 1, explicacion: "El evento espera que toques la flecha. \"Está roto\" tienta, pero funciona como lo programaron." },
  ],
},
{
  id: "errores",
  icono: "🐞",
  titulo: "Encontrar y arreglar errores",
  nivel: "Avanzado",
  objetivos: [
    "Reconocer que los errores son parte de programar",
    "Encontrar un error probando paso a paso",
    "Arreglar un error cambiando una cosa por vez",
  ],
  lecciones: [
    { titulo: "Todos se equivocan", html: `
      <p class="idea">Un error en un programa se llama <strong>bug</strong> (bicho, en inglés). Todos los programadores, incluso los expertos, cometen errores todos los días.</p>
      <table>
        <tr><th>Tipo de error</th><th>Ejemplo</th></tr>
        <tr><td>Paso en el orden equivocado</td><td>El personaje salta antes de correr</td></tr>
        <tr><td>Número equivocado</td><td>Repetir 3 veces cuando eran 4</td></tr>
        <tr><td>Falta un paso</td><td>Sumar puntos sin empezar en 0</td></tr>
        <tr><td>Condición al revés</td><td>Perder una vida al agarrar una moneda</td></tr>
      </table>
      <p>Arreglar errores se llama <strong>depurar</strong>. Es una parte normal del trabajo, no un fracaso.</p>
      <p>Cada error te enseña algo. Los buenos programadores no son los que no se equivocan: son los que saben encontrar y arreglar.</p>
      <p>Por ejemplo, si tu cuadrado sale con 3 lados, el bug es un número: repetiste 3 veces en lugar de 4.</p>` },
    { titulo: "Buscar el error paso a paso", html: `
      <p class="idea">Para encontrar un error, seguí el programa paso a paso y fijate en qué momento pasa algo distinto de lo que esperabas.</p>
      <pre><code>Programa con un bug (quería dibujar un cuadrado):
repetir 4 veces:
    avanzar 10 pasos
    girar 60 grados

Prueba paso a paso:
Vuelta 1: avanza, gira 60 → la esquina queda rara
→ ¡Ahí está! Para un cuadrado hay que girar 90.</code></pre>
      <table>
        <tr><th>Preguntas para encontrar el bug</th></tr>
        <tr><td>¿Qué esperaba que pasara?</td></tr>
        <tr><td>¿Qué pasó en realidad?</td></tr>
        <tr><td>¿En qué paso empezó a salir distinto?</td></tr>
      </table>
      <p>Explicarle el programa a otra persona, línea por línea, también ayuda. Muchas veces encontrás el error mientras lo explicás.</p>
      <p>Por ejemplo, contarle a tu hermano "acá el lápiz gira 60" puede hacerte dar cuenta de que tenía que girar 90.</p>` },
    { titulo: "Arreglar de a una cosa", video: {"id":"VZe9tjqa9xw","t":"Programación para chicos: conceptos básicos · Smile and Learn (4:24)"}, html: `
      <p class="idea">Cuando creés que encontraste el error, cambiá <strong>una sola cosa</strong> y probá de nuevo. Si cambiás muchas cosas juntas, no sabés cuál lo arregló.</p>
      <pre><code>1. Cambiá una sola cosa (por ejemplo, 60 por 90).
2. Probá el programa otra vez.
3. ¿Se arregló?
   Sí → ¡Listo! Anotá qué era.
   No → Volvé el cambio atrás y probá otra cosa.</code></pre>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Cambiar una cosa por vez</td><td>Cambiar todo junto</td></tr>
        <tr><td>Probar después de cada cambio</td><td>Cambiar mucho sin probar</td></tr>
        <tr><td>Pedir ayuda si te trabás mucho</td><td>Enojarte y abandonar</td></tr>
        <tr><td>Tomar un descanso</td><td>Seguir horas frustrado</td></tr>
      </table>
      <p>Si te trabás, pedí ayuda a un adulto, a un compañero o a tu docente. Programar en equipo es muy común.</p>
      <p>Por ejemplo, cambiás las vueltas y el giro al mismo tiempo, y se arregla. Ahora no sabés cuál de los dos era el problema.</p>` },
  ],
  practica: [
    "Buscá el bug en este programa: \"repetir 3 veces: avanzar 10, girar 90\". Quería un cuadrado. Anotá qué cambiarías.",
    "Escribí un programa con un error a propósito y dáselo a alguien para que lo encuentre. Anotá cuánto tardó.",
    "Arreglá un error cambiando una cosa por vez y anotá cuántos intentos necesitaste.",
  ],
  recursos: [
    { t: "Code.org: cursos de programación para chicos (para usar con un adulto)", url: "https://code.org/" },
    { t: "CS Unplugged: actividades de computación sin computadora (para ver con un adulto)", url: "https://csunplugged.org/es/" },
  ],
  quiz: [
    { q: "Si un programa tiene un error, ¿cómo se llama?", opciones: ["Bucle","Variable","Bug","Evento"], correcta: 2, explicacion: "Bug es el nombre del error. Bucle tienta porque suena parecido, pero es repetir." },
    { q: "Si los programadores expertos cometen errores, ¿qué significa?", opciones: ["Que equivocarse es parte normal de programar","Que no son expertos","Que la compu es mala","Que hay que dejar de programar"], correcta: 0, explicacion: "Todos se equivocan. \"No son expertos\" tienta, pero los expertos también depuran." },
    { q: "Si arreglás errores en un programa, ¿qué estás haciendo?", opciones: ["Borrar todo","Copiar","Repetir","Depurar"], correcta: 3, explicacion: "Depurar es arreglar errores. \"Borrar todo\" tienta cuando te frustrás, pero perdés lo que funcionaba." },
    { q: "Si tu cuadrado sale con 3 lados, ¿cuál puede ser el bug?", opciones: ["La compu está rota","Repetiste 3 veces en lugar de 4","El lápiz es corto","Falta color"], correcta: 1, explicacion: "Es un número equivocado. \"La compu está rota\" tienta, pero hace lo que dice el programa." },
    { q: "Si el personaje pierde una vida al agarrar una moneda, ¿qué tipo de error es?", opciones: ["Un bucle de más","Un paso que falta siempre","Una condición al revés","No es un error"], correcta: 2, explicacion: "La condición está al revés. \"No es un error\" tienta si es gracioso, pero no es lo que querías." },
    { q: "Si querés encontrar un error, ¿qué te preguntás primero?", opciones: ["¿Qué esperaba que pasara y qué pasó en realidad?","¿De qué color es?","¿Cuánto mide?","Nada"], correcta: 0, explicacion: "Comparar lo esperado con lo real muestra el error. El color tienta, pero no ayuda." },
    { q: "Si el lápiz gira 60 grados y querías un cuadrado, ¿qué cambiás?", opciones: ["El giro a 120 grados","Las vueltas a 10","Nada","El giro a 90 grados"], correcta: 3, explicacion: "El cuadrado gira 90. 120 tienta, pero ese es el triángulo." },
    { q: "Si le explicás el programa a otra persona línea por línea, ¿qué puede pasar?", opciones: ["Que se arregle solo","Que encuentres el error mientras lo explicás","Que se borre","Nada"], correcta: 1, explicacion: "Explicar ayuda a ver el error. \"Se arregla solo\" tienta, pero lo encontrás vos." },
    { q: "Si creés que encontraste el error, ¿cuántas cosas cambiás?", opciones: ["Todas juntas","Ninguna","Una sola, y probás","Diez"], correcta: 2, explicacion: "Una por vez muestra qué funcionó. Todas juntas tienta por rápido, pero no sabés cuál era." },
    { q: "Si cambiaste algo y no se arregló, ¿qué hacés?", opciones: ["Volvés el cambio atrás y probás otra cosa","Dejás el cambio y sumás otros","Te rendís","Borrás todo el programa"], correcta: 0, explicacion: "Volver atrás mantiene el programa ordenado. Sumar cambios tienta, pero se mezclan los errores." },
    { q: "Si te trabás mucho con un error, ¿qué hacés?", opciones: ["Te enojás y abandonás","Seguís horas frustrado","Rompés la compu","Pedís ayuda o tomás un descanso"], correcta: 3, explicacion: "Pedir ayuda es normal. Seguir horas frustrado tienta por no rendirte, pero un descanso ayuda más." },
    { q: "Si arreglaste un error, ¿qué conviene hacer?", opciones: ["Olvidarlo","Anotar qué era, para no repetirlo","Borrar el programa","Nada"], correcta: 1, explicacion: "Anotar te enseña. Olvidarlo tienta porque ya funciona, pero podés repetirlo." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu primer juego",
  nivel: "Avanzado",
  objetivos: [
    "Diseñar un juego simple con secuencias, bucles, condiciones, variables y eventos",
    "Hacerlo en papel o en Scratch con un adulto",
    "Revisarlo con una rúbrica",
  ],
  lecciones: [
    { titulo: "El encargo", video: {"id":"L6_Q5VBZAu4","t":"Tu primer proyecto en Scratch · El Rincón de Primaria (9:07)"}, html: `
      <p class="idea">El proyecto final es <strong>tu primer juego</strong>. Podés hacerlo en papel o en Scratch, con un adulto. Tiene que usar todo lo que aprendiste.</p>
      <table>
        <tr><th>Parte del juego</th><th>Módulo</th></tr>
        <tr><td>Pasos en orden</td><td>Algoritmos y pasos en orden</td></tr>
        <tr><td>Algo que se repite</td><td>Repetir: los bucles</td></tr>
        <tr><td>Una decisión (si... entonces...)</td><td>Decidir</td></tr>
        <tr><td>Puntos o vidas</td><td>Guardar datos y eventos</td></tr>
        <tr><td>Un evento para empezar o moverse</td><td>Guardar datos y eventos</td></tr>
        <tr><td>Un error encontrado y arreglado</td><td>Encontrar y arreglar errores</td></tr>
      </table>
      <pre><code>Ejemplo: "Atrapá la estrella"
cuando se toca la bandera verde:
    puntos = 0
    repetir 10 veces:
        mostrar una estrella en un lugar al azar
        esperar 2 segundos
        si el gato tocó la estrella entonces:
            puntos = puntos + 1
    decir "Terminaste con " y los puntos

cuando se toca la flecha derecha: avanzar 10 pasos
cuando se toca la flecha izquierda: retroceder 10 pasos</code></pre>
      <p>Por ejemplo, si el gato atrapa 7 estrellas de 10, el juego termina diciendo "Terminaste con 7".</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista para revisar si algo está completo. Revisá tu juego con un adulto o tu docente.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Secuencia</td><td>Los pasos están en orden y se entienden</td><td>Algún paso confuso</td><td>No hay pasos claros</td></tr>
        <tr><td>Bucle</td><td>Usa un bucle que termina</td><td>Usa un bucle que nunca termina sin querer</td><td>No hay bucle</td></tr>
        <tr><td>Condición</td><td>Usa "si... entonces..." bien</td><td>Está al revés</td><td>No hay</td></tr>
        <tr><td>Variables y eventos</td><td>Tiene puntos o vidas y un evento</td><td>Solo uno de los dos</td><td>Ninguno</td></tr>
        <tr><td>Errores</td><td>Encontró y arregló un error, y lo anotó</td><td>Lo arregló sin anotar</td><td>No probó el juego</td></tr>
        <tr><td>Cuidado al compartir</td><td>Si lo comparte, sin su nombre completo, foto, escuela ni dirección, y con permiso de un adulto</td><td>—</td><td>Lo compartió con datos personales o sin permiso</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡listo para jugar!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Cuidado al compartir" tiene 0, el proyecto no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un juego genial publicado con tu nombre completo y el de tu escuela saca 0 en "Cuidado al compartir".</p>` },
    { titulo: "Seguir programando", html: `
      <p class="idea">Programar se aprende programando. Estas son formas de seguir, siempre con un adulto.</p>
      <table>
        <tr><th>Dónde</th><th>Qué tiene</th></tr>
        <tr><td>Scratch</td><td>Programar con bloques, hacer juegos y animaciones</td></tr>
        <tr><td>Code.org</td><td>Cursos cortos con desafíos por niveles</td></tr>
        <tr><td>Program.AR</td><td>Actividades de programación que se usan en escuelas de Argentina</td></tr>
        <tr><td>CS Unplugged</td><td>Juegos de computación sin computadora</td></tr>
      </table>
      <pre><code>Ideas para tu próximo proyecto:
- Un cuento animado en el que el personaje habla
- Un juego de preguntas de un tema de la escuela
- Un dibujo con bucles: una flor con 8 pétalos
  (repetir 8 veces, girar 45 grados)</code></pre>
      <p>Si te gustó, contale a tu docente: muchas escuelas tienen talleres de programación o robótica.</p>
      <p>Por ejemplo, un juego de preguntas de Ciencias Naturales hecho en Scratch te sirve para estudiar y para mostrar en clase.</p>` },
  ],
  practica: [
    "Diseñá tu juego en papel con las 6 partes del encargo. Anotá qué hace cada parte.",
    "Hacé tu juego en Scratch con un adulto (o jugalo en papel) y anotá un error que encontraste y cómo lo arreglaste.",
    "Revisá tu juego con la rúbrica junto a un adulto y anotá el puntaje de cada criterio y el total.",
  ],
  recursos: [
    { t: "Scratch: ideas y tutoriales (para usar con un adulto)", url: "https://scratch.mit.edu/ideas" },
    { t: "Scratch: programar con bloques, gratis (para usar con un adulto)", url: "https://scratch.mit.edu/" },
    { t: "Program.AR: programación en las escuelas de Argentina (para ver con un adulto)", url: "https://program.ar/" },
  ],
  quiz: [
    { q: "Si armás tu primer juego, ¿qué tiene que tener?", opciones: ["Solo un dibujo lindo","Solo música","Secuencia, bucle, condición, variables, un evento y un error arreglado","Solo el título"], correcta: 2, explicacion: "El juego junta todo el curso. Un dibujo lindo tienta, pero sin programa no es un juego." },
    { q: "Si en \"Atrapá la estrella\" el gato atrapa 7 de 10 estrellas, ¿qué dice el juego al final?", opciones: ["\"Terminaste con 7\"","\"Terminaste con 10\"","\"Terminaste con 3\"","Nada"], correcta: 0, explicacion: "Suma un punto por estrella atrapada. El 10 tienta porque son las vueltas del bucle." },
    { q: "Si querés que el juego empiece con 0 puntos, ¿qué hacés?", opciones: ["Nada","Ponés puntos = 10","Borrás la variable","Ponés \"puntos = 0\" cuando se toca la bandera verde"], correcta: 3, explicacion: "Así empieza siempre en 0. \"Nada\" tienta, pero puede arrancar con los puntos del juego anterior." },
    { q: "Si querés que el gato se mueva con las flechas, ¿qué usás?", opciones: ["Una variable sola","Eventos: cuando se toca la flecha","Un bucle sin fin siempre","Nada"], correcta: 1, explicacion: "Las teclas son eventos. Un bucle sin fin tienta, pero no responde a las flechas." },
    { q: "Si tu juego tiene un bucle que nunca termina sin querer, ¿cuánto saca en \"Bucle\"?", opciones: ["2 puntos","0 puntos","1 punto","3 puntos"], correcta: 2, explicacion: "Hay bucle, pero con error. 0 tienta, pero ese es cuando no hay bucle." },
    { q: "Si tu condición está al revés, ¿cuánto saca en \"Condición\"?", opciones: ["1 punto","2 puntos","0 puntos","No se evalúa"], correcta: 0, explicacion: "Hay condición, pero al revés. Sacar 2 tienta porque la usaste, pero no funciona bien." },
    { q: "Si publicás tu juego con tu nombre completo y tu escuela, ¿está listo?", opciones: ["Sí, si el juego es bueno","Sí, si tiene muchos puntos","Sí, siempre","No: \"Cuidado al compartir\" tiene 0 y eso no se compensa"], correcta: 3, explicacion: "Tus datos no se publican. \"Si el juego es bueno\" tienta, pero la regla lo dice." },
    { q: "Si querés compartir tu juego, ¿qué necesitás antes?", opciones: ["Nada","Permiso de un adulto y no poner datos personales","Poner tu dirección","Poner una foto con tu uniforme"], correcta: 1, explicacion: "El permiso y no dar datos te cuidan. Poner tu foto tienta para mostrarte, pero dice dónde estás." },
    { q: "Si tu juego saca 9, ¿qué hacés?", opciones: ["Lo borrás","Lo dejás así para siempre","Mejorás lo que sacó 0 o 1","Cambiás la rúbrica"], correcta: 2, explicacion: "Se mejora lo que falta. Borrarlo tienta si te frustra, pero está casi listo." },
    { q: "Si querés dibujar una flor de 8 pétalos con un bucle, ¿cuántos grados gira cada vez?", opciones: ["45 grados","8 grados","90 grados","360 grados"], correcta: 0, explicacion: "8 × 45 = 360. 90 tienta, pero ese es para 4." },
    { q: "Si querés seguir programando con bloques, ¿qué podés usar con un adulto?", opciones: ["Un sitio que te pide tu dirección","Un chat con desconocidos","Nada","Scratch"], correcta: 3, explicacion: "Scratch es gratis y para aprender. El chat con desconocidos tienta, pero no es seguro." },
    { q: "Si te gustó programar, ¿a quién le podés contar?", opciones: ["A nadie","A tu docente: muchas escuelas tienen talleres","A un desconocido en internet","Solo a tu mascota"], correcta: 1, explicacion: "Tu docente te puede ayudar a seguir. El desconocido tienta, pero no es un adulto de confianza." },
  ],
},
];
