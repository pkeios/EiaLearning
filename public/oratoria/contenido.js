// Temario del curso "Hablar en público sin miedo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js oratoria y node tools/metodologia.js oratoria
window.TEMARIO = [
{
  id: "empezar",
  icono: "🎤",
  titulo: "Empezar: todos podemos hablar en público",
  nivel: "Básico",
  objetivos: [
    "Reconocer que el miedo a hablar en público es común y se puede trabajar",
    "Identificar las situaciones en las que vas a necesitar hablar frente a otros",
    "Elegir una meta concreta para practicar durante el curso",
  ],
  lecciones: [
    { titulo: "El miedo es normal", html: `
      <p class="idea">Hablar en público da miedo a muchísima gente, incluso a quienes lo hacen todos los días. No es un defecto: es el cuerpo preparándose para algo importante. La buena noticia es que se entrena, como cualquier habilidad.</p>
      <table>
        <tr><th>Lo que pensás</th><th>Lo que suele pasar</th></tr>
        <tr><td>"Todos se van a dar cuenta de que estoy nervioso"</td><td>Los nervios se notan mucho menos de lo que sentís</td></tr>
        <tr><td>"Me voy a quedar en blanco"</td><td>Pasa poco, y con preparación se sale rápido</td></tr>
        <tr><td>"El público está esperando que me equivoque"</td><td>La mayoría quiere que te vaya bien</td></tr>
        <tr><td>"Los buenos oradores nacen así"</td><td>Casi todos aprendieron practicando</td></tr>
      </table>
      <p>La <strong>oratoria</strong> es el arte de hablar frente a otros de forma clara y que llegue. No se trata de hablar lindo, sino de que te entiendan y te recuerden.</p>
      <p><strong>Cómo se gana confianza:</strong> preparando bien, practicando en voz alta y hablando muchas veces en situaciones chicas. El miedo baja con la repetición.</p>
      <p>Por ejemplo, la primera vez que hablás en una reunión de padres te tiembla la voz; la quinta, ya sabés que vas a sobrevivir y te concentrás en lo que decís.</p>` },
    { titulo: "Cuándo vas a hablar en público", html: `
      <p class="idea">Hablar en público no es solo dar una charla en un escenario. Pasa en muchas situaciones de todos los días, y cada una tiene su estilo.</p>
      <table>
        <tr><th>Situación</th><th>Duración típica</th><th>Lo que importa</th></tr>
        <tr><td>Presentarte en una entrevista o un curso</td><td>1 minuto</td><td>Claro y concreto</td></tr>
        <tr><td>Un brindis en un cumpleaños o un casamiento</td><td>1 a 3 minutos</td><td>Una historia y una emoción</td></tr>
        <tr><td>Opinar en una reunión o asamblea</td><td>1 a 2 minutos</td><td>Una idea y una propuesta</td></tr>
        <tr><td>Explicar algo a un grupo (capacitación, clase)</td><td>10 a 30 minutos</td><td>Orden y ejemplos</td></tr>
        <tr><td>Un acto escolar o un evento</td><td>3 a 5 minutos</td><td>Respetar el tiempo y el tono</td></tr>
      </table>
      <p><strong>Lo que tienen en común:</strong> un mensaje claro, una voz que se escuche, un cuerpo que acompañe y el respeto por el tiempo de los demás.</p>
      <p><strong>Con o sin diapositivas:</strong> este curso se centra en vos hablando. Si además usás diapositivas, el curso "Presentaciones que se entienden" de este sitio te enseña a armarlas.</p>
      <p>Por ejemplo, la asamblea del consorcio, la reunión con la maestra o el brindis de fin de año son prácticas reales de oratoria.</p>` },
    { titulo: "Tu meta para el curso", html: `
      <p class="idea">Vas a aprender más rápido si tenés una situación concreta para preparar. Elegí una ahora y usala de ejemplo en todos los módulos.</p>
      <pre><code>Mi situación:  Presentarme en la entrevista de trabajo
Duración:      1 minuto
Público:       2 personas de la empresa
Meta:          Decir quién soy, qué sé hacer y por qué me interesa,
               sin leer y mirando a los ojos</code></pre>
      <p><strong>Grabate desde el principio:</strong> con el celular, sin editar. Vas a ver cosas que no notás mientras hablás (muletillas, velocidad, manos), y al final del curso vas a poder comparar.</p>
      <table>
        <tr><th>Al mirar tu video, anotá</th><th>Ejemplo</th></tr>
        <tr><td>Cuánto duró</td><td>1 min 40 s (me pasé)</td></tr>
        <tr><td>Muletillas que dijiste</td><td>"eh" 9 veces, "o sea" 4</td></tr>
        <tr><td>A dónde mirabas</td><td>Al piso la mitad del tiempo</td></tr>
        <tr><td>Una cosa que salió bien</td><td>Se entendió qué sé hacer</td></tr>
      </table>
      <p><strong>Mirarte da vergüenza al principio:</strong> es normal. Mirá el video como si fuera de otra persona a la que querés ayudar.</p>
      <p>Por ejemplo, grabar la misma presentación de 1 minuto al principio y al final del curso te muestra el avance de una forma que ninguna nota puede.</p>` },
  ],
  practica: [
    "Anotá 3 situaciones de los próximos meses en las que vas a tener que hablar frente a otros, con su duración y público.",
    "Elegí una como meta del curso y anotá su situación, duración, público y meta con el modelo de la lección.",
    "Grabate con el celular haciendo esa intervención sin preparar mucho. Miralo y anotá duración, muletillas, a dónde mirabas y una cosa que salió bien.",
  ],
  recursos: [
    { t: "Toastmasters: consejos para hablar en público (en inglés)", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
    { t: "TED: charlas para ver antes de hablar en público (en inglés)", url: "https://www.ted.com/playlists/226/before_public_speaking" },
  ],
  quiz: [
    { q: "Si te tiembla la voz antes de hablar en una reunión, ¿qué significa?", opciones: ["Que no servís para hablar en público","Que tenés que evitar hablar","Que tu cuerpo se prepara para algo importante: es normal y se entrena","Que vas a quedar mal seguro"], correcta: 2, explicacion: "Los nervios son comunes y bajan con práctica. Pensar que no servís tienta, pero casi todos los oradores empezaron así." },
    { q: "Si estás nervioso al hablar, ¿cuánto se nota?", opciones: ["Mucho menos de lo que sentís","Todo, el público lo ve clarito","Nada, nunca se nota","Depende del color de la ropa"], correcta: 0, explicacion: "Por dentro se siente mucho más de lo que se ve. \"Todo se nota\" tienta porque lo sentís fuerte, pero el público ve mucho menos." },
    { q: "¿Qué espera la mayoría del público cuando hablás?", opciones: ["Que te equivoques","Que termines rápido sin importar qué digas","Nada","Que te vaya bien"], correcta: 3, explicacion: "El público suele estar de tu lado. Que espera tu error tienta como miedo, pero casi nadie va a escuchar con esa intención." },
    { q: "¿Qué es la oratoria?", opciones: ["Hablar con palabras difíciles","Hablar frente a otros de forma clara y que llegue","Leer un texto en voz alta","Hablar rápido y mucho"], correcta: 1, explicacion: "Lo importante es que te entiendan y te recuerden. Palabras difíciles tientan porque suenan cultas, pero alejan al público." },
    { q: "¿Los buenos oradores nacen así?", opciones: ["Sí, es un don","Sí, si son extrovertidos","No: casi todos aprendieron practicando","Solo los que estudiaron teatro"], correcta: 2, explicacion: "La oratoria se entrena. El don tienta como explicación, pero sirve de excusa para no practicar." },
    { q: "Si querés ganar confianza para hablar en público, ¿qué ayuda más?", opciones: ["Preparar, practicar en voz alta y hablar muchas veces en situaciones chicas","Esperar a no tener miedo","Evitar hablar hasta estar listo","Leer sobre oratoria sin practicar"], correcta: 0, explicacion: "El miedo baja con la repetición. Esperar a no tener miedo tienta, pero ese momento no llega sin práctica." },
    { q: "Tenés que hacer un brindis en un cumpleaños. ¿Cuánto debería durar?", opciones: ["15 minutos","30 segundos sin preparar nada","Lo que haga falta","Entre 1 y 3 minutos"], correcta: 3, explicacion: "Un brindis es corto. \"Lo que haga falta\" tienta, pero la gente quiere brindar y seguir la fiesta." },
    { q: "Si vas a opinar en la asamblea del consorcio, ¿qué importa más?", opciones: ["Hablar de todos los problemas del edificio","Una idea y una propuesta, en 1 o 2 minutos","Hablar más fuerte que el resto","Leer el reglamento completo"], correcta: 1, explicacion: "Una idea clara se escucha. Todos los problemas tientan para aprovechar el turno, pero se pierde lo importante." },
    { q: "Vas a usar diapositivas en tu charla. ¿Qué curso de este sitio te ayuda con eso?", opciones: ["Este curso, que trata solo diapositivas","Ninguno","\"Presentaciones que se entienden\"","\"Mails y mensajes de trabajo\""], correcta: 2, explicacion: "Este curso se centra en vos hablando. Pensar que trata diapositivas tienta, pero eso está en el curso de presentaciones." },
    { q: "¿Por qué conviene elegir una situación concreta para practicar en el curso?", opciones: ["Porque aprendés más rápido aplicando cada módulo a algo real","Para tener una excusa","Porque lo pide la app","No conviene"], correcta: 0, explicacion: "Lo concreto se practica y se mide. \"No conviene\" tienta para ir rápido, pero sin práctica real no cambia nada." },
    { q: "¿Para qué sirve grabarte desde el principio?", opciones: ["Para subirlo a redes","Para que otros te critiquen","No sirve, da vergüenza","Para ver lo que no notás mientras hablás y poder comparar al final"], correcta: 3, explicacion: "El video muestra muletillas, mirada y velocidad. La vergüenza tienta para no hacerlo, pero es la herramienta más útil." },
    { q: "Mirás tu video y te da vergüenza. ¿Qué hacés?", opciones: ["Lo borrás sin mirarlo","Lo mirás como si fuera de otra persona a la que querés ayudar","Dejás el curso","Te enfocás solo en lo malo"], correcta: 1, explicacion: "Mirarlo con distancia te deja aprender. Enfocarte solo en lo malo tienta, pero anotá también lo que salió bien." },
  ],
},
{
  id: "mensaje",
  icono: "🧭",
  titulo: "Qué decir: mensaje y estructura",
  nivel: "Básico",
  objetivos: [
    "Resumir lo que querés decir en una sola oración",
    "Ordenar una intervención con apertura, tres puntos y cierre",
    "Preparar sin escribir todo palabra por palabra",
  ],
  lecciones: [
    { titulo: "Tu mensaje en una oración", html: `
      <p class="idea">Antes de pensar cómo decirlo, decidí <strong>qué</strong> querés que la gente se lleve. Si no lo podés decir en una oración, todavía no está claro.</p>
      <table>
        <tr><th>Situación</th><th>Mensaje en una oración</th></tr>
        <tr><td>Presentarte en una entrevista</td><td>"Soy una persona ordenada que aprende rápido y quiere crecer en atención al cliente."</td></tr>
        <tr><td>Brindis por tu hermana</td><td>"Mi hermana siempre estuvo cuando la necesitamos."</td></tr>
        <tr><td>Asamblea del consorcio</td><td>"Arreglemos el portón antes de que haya un robo."</td></tr>
      </table>
      <p><strong>Pensá en tu público:</strong> ¿quiénes son?, ¿qué saben?, ¿qué les importa? El mismo tema se dice distinto a vecinos, a una jefa o a chicos de primaria.</p>
      <p><strong>Una idea, no diez:</strong> el público recuerda poco. Todo lo que digas tiene que ayudar a que se lleve esa oración.</p>
      <p>Por ejemplo, si en el brindis contás 6 anécdotas distintas, nadie recuerda ninguna. Si contás una que muestra que tu hermana "siempre estuvo", todos se la llevan.</p>` },
    { titulo: "Apertura, tres puntos y cierre", html: `
      <p class="idea">Una estructura simple que sirve casi siempre: abrir con algo que enganche, desarrollar <strong>tres puntos</strong> y cerrar repitiendo el mensaje. El número tres se recuerda fácil.</p>
      <table>
        <tr><th>Parte</th><th>Opciones</th><th>Ejemplo (portón)</th></tr>
        <tr><td>Apertura</td><td>Una pregunta, un dato, una historia corta</td><td>"¿Cuántos de ustedes encontraron el portón abierto esta semana?"</td></tr>
        <tr><td>Punto 1</td><td rowspan="3">Cada uno con un ejemplo o un dato</td><td>El problema: el portón no cierra desde hace un mes</td></tr>
        <tr><td>Punto 2</td><td>El riesgo: en la cuadra hubo 2 robos</td></tr>
        <tr><td>Punto 3</td><td>La solución: el cerrajero cobra $ 60.000, son $ 3.000 por departamento</td></tr>
        <tr><td>Cierre</td><td>Repetir el mensaje y pedir algo</td><td>"Arreglemos el portón esta semana. ¿Votamos?"</td></tr>
      </table>
      <p><strong>Las aperturas que no conviene usar:</strong> "Bueno, eh, no sé por dónde empezar", "Perdón, estoy nervioso", "Voy a ser breve" (y no serlo).</p>
      <p><strong>El cierre es lo que más se recuerda:</strong> no termines con "Y bueno, eso". Terminá con tu mensaje, dicho con firmeza.</p>
      <p>Por ejemplo, una presentación personal de 1 minuto puede ser: quién soy (apertura), qué sé hacer, un logro, qué busco, y cierre con "Por eso me interesa este puesto".</p>` },
    { titulo: "Preparar sin leer", html: `
      <p class="idea">Si escribís todo palabra por palabra y lo memorizás, cualquier olvido te desarma. Si lo leés, perdés al público. Lo mejor: un <strong>guion de palabras clave</strong> que te recuerde el orden.</p>
      <pre><code>Portón – 2 minutos
APERTURA: ¿Encontraron el portón abierto?
1. No cierra hace un mes
2. 2 robos en la cuadra
3. $ 60.000 → $ 3.000 por depto
CIERRE: Arreglemos esta semana. ¿Votamos?</code></pre>
      <p><strong>Lo que sí conviene saber de memoria:</strong> la primera oración y la última. El principio te da arranque y el final te da salida.</p>
      <p><strong>Ensayá en voz alta, no en la cabeza:</strong> al decirlo aparecen las partes que no fluyen. Hacelo 3 veces, con reloj.</p>
      <table>
        <tr><th>Ensayo</th><th>Para qué</th></tr>
        <tr><td>1.º</td><td>Encontrar lo que sobra o no se entiende</td></tr>
        <tr><td>2.º</td><td>Medir el tiempo y ajustar</td></tr>
        <tr><td>3.º</td><td>Grabarte o decírselo a alguien</td></tr>
      </table>
      <p>Por ejemplo, una tarjeta chica con 6 palabras clave en la mano te da seguridad sin que tengas que leer.</p>` },
  ],
  practica: [
    "Escribí el mensaje de tu situación del curso en una sola oración. Contá las palabras: si son más de 25, achicala.",
    "Armá la estructura con apertura, 3 puntos y cierre. Anotá qué tipo de apertura elegiste (pregunta, dato o historia).",
    "Pasala a un guion de palabras clave en una tarjeta y ensayá 3 veces en voz alta con reloj. Anotá el tiempo de cada ensayo.",
  ],
  recursos: [
    { t: "TED: Chris Anderson, el secreto de las grandes charlas (subtítulos en español)", url: "https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking?language=es" },
    { t: "Toastmasters: consejos para hablar en público (en inglés)", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
  ],
  quiz: [
    { q: "Vas a hablar en una asamblea y no podés resumir lo que querés decir. ¿Qué concluís?", opciones: ["Que hay que hablar más tiempo","Que el tema es muy complejo para hablarlo","Que todavía no está claro: hay que pensarlo antes de hablar","Que no importa"], correcta: 2, explicacion: "Si no entra en una oración, no está claro. Hablar más tiempo tienta para explicar todo, pero el público se pierde." },
    { q: "En tu brindis querés contar 6 anécdotas. ¿Qué pasa?", opciones: ["Que nadie recuerda ninguna: mejor una que muestre tu mensaje","Que queda más completo","Que todos se emocionan más","Nada"], correcta: 0, explicacion: "Una historia que sostiene el mensaje se recuerda. Más anécdotas tientan por completas, pero se diluyen." },
    { q: "¿Por qué conviene pensar en el público antes de hablar?", opciones: ["Para saber cuántas sillas hay","Para elegir la ropa","No conviene","Porque el mismo tema se dice distinto según quién escucha"], correcta: 3, explicacion: "Lo que saben y les importa cambia cómo lo decís. La ropa tienta como detalle, pero el mensaje es lo central." },
    { q: "¿Por qué la estructura usa tres puntos?", opciones: ["Porque lo pide la ley","Porque el número tres se recuerda fácil","Porque es más largo","Porque dos es poco y cuatro es mala suerte"], correcta: 1, explicacion: "Tres puntos se recuerdan. Más largo tienta como razón, pero el objetivo es que se recuerde." },
    { q: "¿Cuál de estas aperturas engancha?", opciones: ["\"Bueno, eh, no sé por dónde empezar\"","\"Perdón, estoy nervioso\"","\"¿Cuántos de ustedes encontraron el portón abierto esta semana?\"","\"Voy a ser breve\""], correcta: 2, explicacion: "Una pregunta involucra al público. \"Perdón, estoy nervioso\" tienta por sincero, pero hace que busquen los nervios." },
    { q: "Terminaste de hablar con \"Y bueno, eso\". ¿Qué cambiás?", opciones: ["Cerrás repitiendo tu mensaje con firmeza y pidiendo algo","Agregás \"gracias\" y te vas","Lo dejás así","Seguís hablando hasta que te corten"], correcta: 0, explicacion: "El cierre es lo que más se recuerda. \"Gracias\" solo tienta por educado, pero desperdicia el momento." },
    { q: "Te piden presentarte en 1 minuto en una entrevista. ¿Qué estructura usás?", opciones: ["Tu historia de vida desde la infancia","Solo tu nombre","Lo que te salga","Quién soy, qué sé hacer, un logro, qué busco y cierre"], correcta: 3, explicacion: "Una estructura corta y clara. La historia de vida tienta para que te conozcan, pero no entra en un minuto." },
    { q: "Escribiste tu discurso palabra por palabra y lo memorizaste. ¿Qué riesgo hay?", opciones: ["Ninguno, es lo más seguro","Que un olvido te desarme por completo","Que queda muy corto","Que el público lo note y aplauda"], correcta: 1, explicacion: "Lo memorizado de punta a punta es frágil. Lo más seguro tienta, pero si perdés una palabra perdés todo." },
    { q: "¿Qué conviene llevar escrito al hablar?", opciones: ["El texto completo para leer","Nada nunca","Un guion de palabras clave que te recuerde el orden","Las diapositivas impresas"], correcta: 2, explicacion: "Las palabras clave guían sin que leas. El texto completo tienta por seguro, pero te hace leer y perder al público." },
    { q: "¿Qué partes conviene saber de memoria?", opciones: ["La primera oración y la última","Todo el discurso","Nada","Solo los datos"], correcta: 0, explicacion: "El principio da arranque y el final, salida. Todo el discurso tienta, pero es frágil y suena recitado." },
    { q: "Ensayaste tu discurso leyéndolo en silencio 5 veces. ¿Qué te falta?", opciones: ["Leerlo 5 veces más","Nada, ya está","Aprenderlo de memoria","Ensayarlo en voz alta, con reloj"], correcta: 3, explicacion: "En voz alta aparece lo que no fluye. Leerlo más tienta, pero en silencio no medís el tiempo real." },
    { q: "En el segundo ensayo te pasaste del tiempo. ¿Qué hacés?", opciones: ["Hablás más rápido","Cortás lo que menos aporta a tu mensaje y volvés a medir","Pedís más tiempo","Lo dejás así"], correcta: 1, explicacion: "Cortar mantiene el ritmo. Hablar más rápido tienta porque no hay que sacar nada, pero no se entiende." },
  ],
},
{
  id: "voz",
  icono: "🗣️",
  titulo: "La voz: volumen, velocidad y pausas",
  nivel: "Intermedio",
  objetivos: [
    "Ajustar el volumen y la velocidad para que te entiendan",
    "Usar pausas en vez de muletillas",
    "Variar la entonación para que no suene monótono",
  ],
  lecciones: [
    { titulo: "Volumen y velocidad", video: {"id":"U2lWFRFwZLE","t":"Técnicas para hablar fluido y claro · Teresa Baró (9:02)"}, html: `
      <p class="idea">Si no te escuchan o hablás muy rápido, no importa lo bueno que sea tu mensaje. El <strong>volumen</strong> tiene que llegar al fondo de la sala, y la <strong>velocidad</strong> tiene que dejar que el público te siga.</p>
      <table>
        <tr><th>Problema</th><th>Cómo darte cuenta</th><th>Qué hacer</th></tr>
        <tr><td>Volumen bajo</td><td>Te piden que repitas; la gente de atrás se inclina</td><td>Hablá para la última fila, no para la primera</td></tr>
        <tr><td>Velocidad alta</td><td>Te quedás sin aire; terminás antes de tiempo</td><td>Hacé una pausa al final de cada idea</td></tr>
        <tr><td>Final de frase que se apaga</td><td>Las últimas palabras no se entienden</td><td>Sostené la voz hasta la última palabra</td></tr>
      </table>
      <p><strong>Una referencia:</strong> alrededor de 120 a 150 palabras por minuto se entiende bien. Con nervios casi todos aceleramos, así que hablá un poco más lento de lo que te parece natural.</p>
      <pre><code>Medí tu velocidad:
1. Leé en voz alta un texto durante 1 minuto con reloj.
2. Contá las palabras que leíste.
3. Si pasaste de 170, bajá; si estás debajo de 100, subí.</code></pre>
      <p><strong>Proyectar no es gritar:</strong> la fuerza sale del aire de la panza, no de la garganta. Si te duele la garganta al hablar fuerte, estás forzando.</p>
      <p>Por ejemplo, en un patio de escuela sin micrófono, hablar para la última fila hace que la primera también te escuche cómoda.</p>` },
    { titulo: "Pausas en vez de muletillas", html: `
      <p class="idea">Las <strong>muletillas</strong> ("eh", "o sea", "digamos", "¿no?", "tipo") llenan el silencio porque el silencio nos da miedo. Pero para el público, una pausa suena segura, y una muletilla suena a duda.</p>
      <table>
        <tr><th>Con muletillas</th><th>Con pausas</th></tr>
        <tr><td>"Eh, bueno, o sea, el portón, digamos, no cierra, ¿no?"</td><td>"El portón no cierra. (pausa) Hace un mes."</td></tr>
      </table>
      <p><strong>Para qué sirve una pausa:</strong></p>
      <ul>
        <li>Antes de algo importante: genera atención.</li>
        <li>Después de algo importante: deja que se entienda.</li>
        <li>Cuando perdés el hilo: te da tiempo para pensar sin que se note.</li>
        <li>Para respirar.</li>
      </ul>
      <p><strong>Cómo sacar muletillas:</strong> primero, contalas en tu video. Después, practicá cerrando la boca en el momento en que sentís que viene una: ese silencio es tu pausa.</p>
      <p>Una pausa de 2 segundos te parece eterna a vos, pero al público le parece normal.</p>
      <p>Por ejemplo, decir "El arreglo cuesta… (pausa) 3.000 pesos por departamento" hace que el número se recuerde mucho más.</p>` },
    { titulo: "Entonación y dicción", html: `
      <p class="idea">La <strong>entonación</strong> es la música de la voz: subir, bajar, enfatizar. Una voz que no cambia es <strong>monótona</strong> y aburre aunque el tema sea bueno. La <strong>dicción</strong> es pronunciar claro cada palabra.</p>
      <table>
        <tr><th>Recurso</th><th>Ejemplo</th></tr>
        <tr><td>Énfasis en la palabra clave</td><td>"No es caro: son <strong>tres mil</strong> pesos por departamento."</td></tr>
        <tr><td>Bajar el volumen para algo emotivo</td><td>En un brindis: "…y ese día, ella estuvo."</td></tr>
        <tr><td>Subir el ritmo para entusiasmar</td><td>"¡Y lo logramos!"</td></tr>
        <tr><td>Bajar al final de una afirmación</td><td>Suena seguro, no como pregunta</td></tr>
      </table>
      <p><strong>Ejercicio de dicción:</strong> leé un párrafo en voz alta exagerando la apertura de la boca, como si te leyeran los labios. Después leelo normal: vas a pronunciar más claro.</p>
      <p><strong>Cuidá la voz:</strong> tomá agua, no grites, y si vas a hablar mucho, hacé pausas. Si tenés ronquera que dura más de dos semanas, consultá a un médico o a un fonoaudiólogo.</p>
      <p>Por ejemplo, decir la misma frase "Arreglemos el portón" primero plana y después con énfasis en "arreglemos" cambia por completo cómo suena: de comentario a propuesta.</p>` },
  ],
  practica: [
    "Leé en voz alta un texto 1 minuto con reloj, contá las palabras y anotá tu velocidad. Repetilo tratando de quedar entre 120 y 150.",
    "Mirá tu video del módulo 1 y contá tus muletillas. Grabate de nuevo reemplazándolas por pausas y anotá cuántas quedaron.",
    "Decí tu mensaje del curso tres veces: plano, con énfasis en la palabra clave y bajando al final. Grabá las tres y anotá cuál suena más segura.",
  ],
  recursos: [
    { t: "Toastmasters: consejos para hablar en público (en inglés)", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
    { t: "Toastmasters: biblioteca de recursos (en inglés)", url: "https://www.toastmasters.org/resources/resource-library" },
  ],
  quiz: [
    { q: "Si te piden que repitas lo que dijiste y la gente de atrás se inclina, ¿qué pasa?", opciones: ["El público no presta atención","Hablás muy lento","Tu volumen es bajo: hablá para la última fila","Está todo bien"], correcta: 2, explicacion: "Son señales de volumen bajo. Culpar al público tienta, pero si no te escuchan no pueden prestar atención." },
    { q: "Te quedás sin aire y terminás antes de tiempo. ¿Qué te pasa?", opciones: ["Hablás muy rápido: hacé una pausa al final de cada idea","Tu discurso es muy corto","Te falta volumen","Es normal y no hay que cambiar nada"], correcta: 0, explicacion: "Quedarte sin aire es señal de velocidad alta. Que el discurso es corto tienta, pero el problema es el ritmo." },
    { q: "¿Qué velocidad se entiende bien, como referencia?", opciones: ["300 palabras por minuto","50 palabras por minuto","La más rápida posible","Alrededor de 120 a 150 palabras por minuto"], correcta: 3, explicacion: "120 a 150 es una referencia cómoda. La más rápida tienta para decir más, pero el público no te sigue." },
    { q: "Si leíste 180 palabras en un minuto, ¿qué hacés?", opciones: ["La subís","Bajás la velocidad","La dejás así","Leés menos palabras"], correcta: 1, explicacion: "180 pasa de 170: hay que bajar. Dejarla tienta porque se siente natural, pero con nervios va a ser aún más." },
    { q: "Si al hablar fuerte te duele la garganta, ¿qué pasa?", opciones: ["Es normal, hay que aguantar","Tenés que gritar más","Estás forzando la garganta: la fuerza tiene que salir del aire de la panza","Tenés que hablar más bajo siempre"], correcta: 2, explicacion: "Proyectar no es gritar. Aguantar tienta, pero forzar la garganta la lastima." },
    { q: "¿Por qué decimos muletillas como \"eh\" y \"o sea\"?", opciones: ["Para llenar el silencio, porque nos da miedo","Porque son elegantes","Porque el público las pide","Porque ayudan a que se entienda"], correcta: 0, explicacion: "Las muletillas tapan el silencio. Que ayudan a entender tienta, pero suenan a duda." },
    { q: "Si perdés el hilo en medio de una frase, ¿qué hacés?", opciones: ["Decís \"eh, eh, eh\" hasta acordarte","Pedís disculpas y te vas","Empezás todo de nuevo","Una pausa para pensar, sin muletillas"], correcta: 3, explicacion: "La pausa te da tiempo sin que se note. \"Eh, eh\" tienta para no quedarte callado, pero se nota mucho más." },
    { q: "Una pausa de 2 segundos te parece eterna. ¿Cómo le parece al público?", opciones: ["Eterna también","Normal","Que te olvidaste todo","Que estás enojado"], correcta: 1, explicacion: "Lo que a vos te parece largo, al público le parece normal. Que es eterna tienta porque lo vivís así, pero es tu percepción." },
    { q: "Querés que el público recuerde un número. ¿Qué hacés?", opciones: ["Decirlo rápido","Decirlo varias veces seguidas sin pausa","Una pausa antes de decirlo","No decirlo"], correcta: 2, explicacion: "La pausa antes genera atención. Decirlo varias veces tienta para que quede, pero sin pausa se pierde igual." },
    { q: "Tu voz suena igual de principio a fin. ¿Cómo se llama eso?", opciones: ["Monótona","Profesional","Segura","Clara"], correcta: 0, explicacion: "Una voz sin cambios es monótona y aburre. Profesional tienta como lectura, pero el público se desconecta." },
    { q: "¿Cómo conviene terminar una afirmación para que suene segura?", opciones: ["Subiendo, como una pregunta","Bajando el volumen hasta que no se escuche","Riéndote","Bajando la entonación al final"], correcta: 3, explicacion: "Bajar al final suena firme. Subir tienta por amable, pero suena a que dudás." },
    { q: "Tenés ronquera hace tres semanas. ¿Qué hacés?", opciones: ["Hablás más fuerte para compensar","Consultás a un médico o a un fonoaudiólogo","Tomás algo caliente y seguís","Lo ignorás"], correcta: 1, explicacion: "Una ronquera de más de dos semanas hay que consultarla. Hablar más fuerte tienta para compensar, pero puede empeorarla." },
  ],
},
{
  id: "cuerpo",
  icono: "🧍",
  titulo: "El cuerpo: postura, mirada y manos",
  nivel: "Intermedio",
  objetivos: [
    "Pararte con una postura firme y abierta",
    "Repartir la mirada entre el público",
    "Usar las manos y el movimiento para acompañar lo que decís",
  ],
  lecciones: [
    { titulo: "Postura firme", video: {"id":"AExIhr6hkok","t":"Aprende a tener un lenguaje corporal seguro · La Píldora Mágica (5:26)"}, html: `
      <p class="idea">Antes de que digas una palabra, tu cuerpo ya está hablando. Una <strong>postura</strong> firme y abierta transmite seguridad, aunque por dentro estés nervioso.</p>
      <table>
        <tr><th>Postura que transmite inseguridad</th><th>Postura que transmite seguridad</th></tr>
        <tr><td>Peso en una sola pierna, balanceándote</td><td>Pies a la altura de los hombros, peso repartido</td></tr>
        <tr><td>Brazos cruzados o manos en los bolsillos</td><td>Brazos sueltos o manos a la altura de la cintura</td></tr>
        <tr><td>Hombros caídos, mirada al piso</td><td>Espalda derecha, hombros relajados, mentón paralelo al piso</td></tr>
        <tr><td>Agarrado a la mesa o al atril</td><td>Apoyo suave, sin aferrarte</td></tr>
      </table>
      <p><strong>Sentado (en una reunión o una entrevista):</strong> espalda apoyada, sin hundirte en la silla, manos visibles sobre la mesa.</p>
      <p><strong>El cuerpo también te influye a vos:</strong> pararte derecho y respirar hondo antes de empezar ayuda a sentirte un poco más tranquilo.</p>
      <p>Por ejemplo, alguien que se balancea de un pie al otro mientras habla hace que el público mire el balanceo y no escuche lo que dice.</p>` },
    { titulo: "La mirada", html: `
      <p class="idea">Mirar al público es la forma más directa de conectar. Si mirás al piso, al techo o a tus papeles, la gente siente que no le hablás a ella.</p>
      <table>
        <tr><th>Situación</th><th>Cómo mirar</th></tr>
        <tr><td>Grupo chico (2 a 10)</td><td>Mirá a cada persona unos segundos, como en una charla</td></tr>
        <tr><td>Grupo grande</td><td>Dividí la sala en zonas (izquierda, centro, derecha) y recorrelas</td></tr>
        <tr><td>Entrevista</td><td>Mirá a quien te pregunta, y al responder incluí a los demás</td></tr>
        <tr><td>Videollamada</td><td>Mirá a la cámara, no a tu imagen</td></tr>
      </table>
      <p><strong>Una idea, una persona:</strong> decí una frase completa mirando a alguien, después pasá a otra persona para la frase siguiente. Así la mirada no salta como un ventilador.</p>
      <p><strong>Si mirar a los ojos te cuesta mucho,</strong> empezá mirando la frente o el entrecejo: desde lejos se ve igual.</p>
      <p><strong>Buscá caras amigas:</strong> en todo público hay alguien que asiente o sonríe. Volvé a esas caras cuando te pongas nervioso, pero no te quedes solo en ellas.</p>
      <p>Por ejemplo, si hablás mirando solo a tu jefa en una reunión de seis personas, las otras cinco sienten que no les estás hablando a ellas.</p>` },
    { titulo: "Manos y movimiento", html: `
      <p class="idea">Las manos acompañan lo que decís: muestran tamaños, cuentan puntos, señalan. El problema no es moverlas, sino moverlas sin sentido o esconderlas.</p>
      <table>
        <tr><th>Gestos que suman</th><th>Gestos que distraen</th></tr>
        <tr><td>Contar con los dedos: "Tres cosas: una, dos, tres"</td><td>Jugar con la birome, el anillo o el pelo</td></tr>
        <tr><td>Mostrar tamaño: "un portón así de grande"</td><td>Tocarte la cara o el cuello todo el tiempo</td></tr>
        <tr><td>Palmas abiertas al proponer algo</td><td>Señalar con el dedo al público</td></tr>
        <tr><td>Manos quietas a la altura de la cintura entre gestos</td><td>Manos escondidas detrás o en los bolsillos</td></tr>
      </table>
      <p><strong>Moverse con intención:</strong> si caminás, que sea para cambiar de idea (dar dos pasos al pasar al punto 2) y después quedate quieto. Caminar sin parar, como un león enjaulado, pone nervioso al público.</p>
      <p><strong>Sacá lo que distrae:</strong> antes de empezar, dejá la birome, el celular y las llaves. Si tenés una tarjeta con el guion, sostenela con una mano.</p>
      <p><strong>La sonrisa:</strong> al empezar y en los momentos amables, sonreír relaja al público y a vos. No hace falta sonreír todo el tiempo.</p>
      <p>Por ejemplo, contar con los dedos "uno, dos, tres" al presentar tus tres puntos ayuda al público a seguir en qué parte estás.</p>` },
  ],
  practica: [
    "Grabate de cuerpo entero diciendo tu mensaje del curso. Anotá qué hacés con los pies, los brazos y las manos según las tablas de la lección.",
    "Practicá frente a 3 objetos ubicados en distintos lugares (izquierda, centro, derecha) diciendo una frase completa a cada uno. Anotá si la mirada saltaba o se quedaba.",
    "Elegí 3 gestos que sumen (contar, mostrar tamaño, palmas abiertas) y usalos en un nuevo video. Anotá cuántos gestos que distraen quedaron.",
  ],
  recursos: [
    { t: "Toastmasters: consejos para hablar en público (en inglés)", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
    { t: "TED: Chris Anderson, el secreto de las grandes charlas (subtítulos en español)", url: "https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking?language=es" },
  ],
  quiz: [
    { q: "Si te balanceás de un pie al otro mientras hablás, ¿qué pasa?", opciones: ["Parecés más relajado","Nada, nadie lo nota","El público mira el balanceo y no escucha lo que decís","Mejora tu voz"], correcta: 2, explicacion: "El movimiento sin sentido distrae. Que parecés relajado tienta, pero transmite nervios." },
    { q: "¿Qué postura transmite seguridad de pie?", opciones: ["Pies a la altura de los hombros, peso repartido y espalda derecha","Brazos cruzados","Manos en los bolsillos","Apoyado en una pierna"], correcta: 0, explicacion: "Una postura firme y abierta da seguridad. Brazos cruzados tientan por cómodos, pero parecen una barrera." },
    { q: "Si estás en una entrevista sentado, ¿qué postura conviene?", opciones: ["Hundido en la silla para parecer relajado","Con los brazos cruzados","Con las manos debajo de la mesa","Espalda apoyada, sin hundirte, manos visibles sobre la mesa"], correcta: 3, explicacion: "Sentado también se transmite seguridad. Hundirte tienta para parecer tranquilo, pero parece desinterés." },
    { q: "¿Por qué conviene pararte derecho y respirar hondo antes de empezar?", opciones: ["Porque lo pide el público","Porque además de transmitir seguridad, te ayuda a sentirte más tranquilo","Para parecer más alto","No sirve para nada"], correcta: 1, explicacion: "El cuerpo también te influye a vos. Que no sirve tienta, pero respirar y pararte bien baja un poco los nervios." },
    { q: "Si hablás a un grupo grande, ¿cómo repartís la mirada?", opciones: ["Mirás solo a la primera fila","Mirás al techo para no ponerte nervioso","Dividís la sala en zonas y las recorrés","Mirás tus papeles"], correcta: 2, explicacion: "Recorrer zonas incluye a todos. La primera fila tienta porque está cerca, pero el resto se siente afuera." },
    { q: "Si estás en una videollamada, ¿a dónde mirás al hablar?", opciones: ["A la cámara","A tu propia imagen","A otra pestaña","Al teclado"], correcta: 0, explicacion: "Mirar a la cámara es mirar a los ojos del otro. Tu imagen tienta porque está ahí, pero el público te ve mirando para abajo." },
    { q: "¿Qué es \"una idea, una persona\"?", opciones: ["Hablarle a una sola persona todo el tiempo","Decir una sola idea","Elegir a una persona para que hable","Decir una frase completa mirando a alguien y después pasar a otra persona"], correcta: 3, explicacion: "Así la mirada no salta como un ventilador. Hablarle a una sola persona tienta por cómodo, pero deja afuera al resto." },
    { q: "Si mirar a los ojos te cuesta mucho, ¿qué probás?", opciones: ["Cerrar los ojos","Mirar la frente o el entrecejo: desde lejos se ve igual","Mirar al piso","Usar anteojos de sol"], correcta: 1, explicacion: "La frente funciona igual a la distancia. Mirar al piso tienta para calmarte, pero perdés la conexión." },
    { q: "En una reunión de seis personas hablás mirando solo a tu jefa. ¿Qué pasa?", opciones: ["Queda bien con la jefa","Nada","Las otras cinco sienten que no les estás hablando","Es lo correcto"], correcta: 2, explicacion: "Hay que incluir a todos. Quedar bien con la jefa tienta, pero el resto se desconecta." },
    { q: "Mientras hablás jugás con la birome. ¿Qué hacés?", opciones: ["La dejás antes de empezar","La agarrás más fuerte","La seguís usando, te calma","La escondés en el bolsillo y seguís tocándola"], correcta: 0, explicacion: "Sacar lo que distrae ayuda a todos. Que te calma tienta, pero el público mira la birome." },
    { q: "Querés caminar mientras hablás. ¿Cuándo conviene?", opciones: ["Todo el tiempo, sin parar","Nunca, hay que quedarse inmóvil","Solo para ir a tomar agua","Para cambiar de idea, y después quedarte quieto"], correcta: 3, explicacion: "Moverse con intención ayuda a marcar partes. Caminar sin parar tienta para descargar nervios, pero pone nervioso al público." },
    { q: "Vas a presentar tres puntos. ¿Qué gesto ayuda al público a seguirte?", opciones: ["Señalar al público","Contar con los dedos: uno, dos, tres","Tocarte el cuello","Esconder las manos"], correcta: 1, explicacion: "Contar con los dedos marca en qué parte estás. Señalar tienta para enfatizar, pero se siente como acusación." },
  ],
},
{
  id: "historias",
  icono: "📖",
  titulo: "Contar historias que se recuerdan",
  nivel: "Intermedio",
  objetivos: [
    "Armar una historia corta con situación, conflicto y resolución",
    "Usar detalles concretos y diálogo para que el público \"vea\" la escena",
    "Conectar cada historia con tu mensaje",
  ],
  lecciones: [
    { titulo: "Por qué funcionan las historias", video: {"id":"zQmddLUsR3Y","t":"Oratoria: los secretos del storytelling · Daniel Colombo (7:34)"}, html: `
      <p class="idea">La gente olvida los datos sueltos, pero recuerda las historias. Contar historias para transmitir un mensaje se llama <strong>storytelling</strong>, y es una de las herramientas más poderosas de la oratoria.</p>
      <table>
        <tr><th>Con datos sueltos</th><th>Con una historia</th></tr>
        <tr><td>"El portón no cierra y hubo robos en la cuadra."</td><td>"El martes, doña Elsa volvía del mercado y encontró el portón abierto. Dos chicos estaban adentro, mirando las bicis. Se fueron corriendo cuando la vieron."</td></tr>
      </table>
      <p><strong>Por qué funcionan:</strong></p>
      <ul>
        <li>El público se imagina la escena, y lo que se imagina se recuerda.</li>
        <li>Generan emoción, y la emoción hace que importe.</li>
        <li>Muestran en vez de decir: no hace falta explicar que hay peligro, se ve.</li>
      </ul>
      <p><strong>Una historia, no un cuento largo:</strong> en oratoria, una buena historia dura entre 30 segundos y 2 minutos.</p>
      <p>Por ejemplo, en una entrevista, "Soy responsable" se olvida; "Una vez el encargado se enfermó y abrí el local solo, a las 7, sin que nadie me lo pidiera" se recuerda.</p>` },
    { titulo: "Situación, conflicto y resolución", html: `
      <p class="idea">Casi todas las buenas historias tienen tres partes: una <strong>situación</strong> (dónde, cuándo, quién), un <strong>conflicto</strong> (algo que sale mal o un desafío) y una <strong>resolución</strong> (cómo terminó y qué se aprendió).</p>
      <table>
        <tr><th>Parte</th><th>Pregunta</th><th>Ejemplo</th></tr>
        <tr><td>Situación</td><td>¿Dónde, cuándo, quién?</td><td>"Trabajaba en una verdulería, un sábado a la mañana."</td></tr>
        <tr><td>Conflicto</td><td>¿Qué salió mal?</td><td>"Se cortó la luz y no andaba la balanza ni el posnet. Había 15 personas en la fila."</td></tr>
        <tr><td>Resolución</td><td>¿Qué hiciste y cómo terminó?</td><td>"Saqué la balanza a pilas del depósito, cobré en efectivo y anoté los pedidos de quienes pagaban con tarjeta para mandárselos después."</td></tr>
        <tr><td>Mensaje</td><td>¿Qué muestra?</td><td>"Sé resolver problemas con lo que tengo a mano."</td></tr>
      </table>
      <p><strong>El conflicto es el motor:</strong> sin algo que salga mal, no hay historia. "Fui a trabajar y todo anduvo bien" no engancha a nadie.</p>
      <p><strong>Terminá conectando con tu mensaje:</strong> la historia no está para entretener, sino para que el mensaje se entienda y se recuerde.</p>
      <p>Por ejemplo, en una entrevista, esta misma estructura sirve para responder "Contame una vez que resolviste un problema".</p>` },
    { titulo: "Detalles que hacen ver", html: `
      <p class="idea">Los <strong>detalles concretos</strong> hacen que el público "vea" la historia. No hace falta describir todo: dos o tres detalles bien elegidos alcanzan.</p>
      <table>
        <tr><th>Vago</th><th>Con detalles</th></tr>
        <tr><td>"Una señora mayor"</td><td>"Doña Elsa, la del tercero, con su changuito"</td></tr>
        <tr><td>"Hacía frío"</td><td>"Era julio, a las 7 de la mañana, y se nos veía el aliento"</td></tr>
        <tr><td>"Me dijo que estaba bien"</td><td>"Me miró y me dijo: 'Ya está, pibe, quedate tranquilo'"</td></tr>
      </table>
      <p><strong>El diálogo da vida:</strong> en vez de "me dijo que…", repetí la frase como la dijo, cambiando un poco la voz.</p>
      <p><strong>Usá historias tuyas:</strong> las que viviste se cuentan con más naturalidad y nadie las puede discutir. Si contás algo de otra persona, cuidá su privacidad: cambiá el nombre si hace falta.</p>
      <p><strong>Practicala en voz alta:</strong> una historia mejora cada vez que la contás. Contásela a alguien antes del día.</p>
      <p>Por ejemplo, "era julio y se nos veía el aliento" hace sentir el frío mucho más que "hacía mucho frío".</p>` },
  ],
  practica: [
    "Escribí una historia tuya de menos de 2 minutos con situación, conflicto, resolución y el mensaje que muestra. Anotá cuánto dura al contarla.",
    "Reescribí la historia agregando 3 detalles concretos y una frase de diálogo. Anotá los detalles que agregaste.",
    "Contásela a una persona y preguntale al día siguiente qué recuerda. Anotá qué partes recordó.",
  ],
  recursos: [
    { t: "TED: Chris Anderson, el secreto de las grandes charlas (subtítulos en español)", url: "https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking?language=es" },
    { t: "TED: charlas para ver antes de hablar en público (en inglés)", url: "https://www.ted.com/playlists/226/before_public_speaking" },
  ],
  quiz: [
    { q: "¿Qué es el storytelling?", opciones: ["Leer cuentos infantiles","Inventar mentiras","Contar historias para transmitir un mensaje","Mostrar muchos datos"], correcta: 2, explicacion: "Es usar historias al servicio de un mensaje. Inventar tienta como lectura de \"historia\", pero las mejores son reales." },
    { q: "¿Por qué el público recuerda más una historia que datos sueltos?", opciones: ["Porque se imagina la escena y genera emoción","Porque es más larga","Porque tiene más palabras","No las recuerda más"], correcta: 0, explicacion: "Lo que se imagina y emociona se recuerda. Más larga tienta, pero no es la duración lo que la hace memorable." },
    { q: "En una entrevista querés mostrar que sos responsable. ¿Qué decís?", opciones: ["\"Soy muy responsable\"","\"Todos dicen que soy responsable\"","\"Soy responsable, de verdad\"","Una historia corta: \"Una vez abrí el local solo a las 7 porque el encargado se enfermó\""], correcta: 3, explicacion: "Mostrar con una historia convence más. \"Soy muy responsable\" tienta por directo, pero cualquiera lo dice." },
    { q: "¿Cuánto suele durar una buena historia en oratoria?", opciones: ["10 minutos","Entre 30 segundos y 2 minutos","5 segundos","Lo que haga falta"], correcta: 1, explicacion: "Corta, para que no se pierda el mensaje. \"Lo que haga falta\" tienta, pero las historias largas cansan." },
    { q: "¿Cuáles son las tres partes de una buena historia?", opciones: ["Saludo, cuerpo y despedida","Introducción, datos y conclusión","Situación, conflicto y resolución","Principio, chiste y aplauso"], correcta: 2, explicacion: "Situación, conflicto y resolución. Introducción y datos tientan porque suena ordenado, pero sin conflicto no hay historia." },
    { q: "Tu historia es \"Fui a trabajar y todo anduvo bien\". ¿Qué le falta?", opciones: ["Un conflicto: algo que salga mal o un desafío","Más detalles del viaje","Un final feliz","Nada"], correcta: 0, explicacion: "El conflicto es el motor. Más detalles tientan para alargarla, pero sin conflicto no engancha." },
    { q: "Terminaste de contar tu historia. ¿Qué falta?", opciones: ["Contar otra historia","Pedir un aplauso","Nada, ya está","Conectarla con tu mensaje"], correcta: 3, explicacion: "La historia sirve al mensaje. \"Ya está\" tienta porque la historia terminó, pero el público tiene que saber para qué la contaste." },
    { q: "Te preguntan en una entrevista \"Contame una vez que resolviste un problema\". ¿Qué estructura usás?", opciones: ["Una lista de tus cualidades","Situación, conflicto, resolución y qué muestra","Lo que harías en teoría","Un chiste para relajar"], correcta: 1, explicacion: "La estructura de la historia responde justo eso. Lo que harías en teoría tienta, pero piden un caso real." },
    { q: "Tu historia dice \"una señora mayor\". ¿Cómo la mejorás?", opciones: ["\"Una señora muy mayor\"","\"Una persona\"","\"Doña Elsa, la del tercero, con su changuito\"","La dejás así"], correcta: 2, explicacion: "Los detalles concretos hacen ver la escena. \"Muy mayor\" tienta para dar énfasis, pero sigue siendo vago." },
    { q: "Si en tu historia decís \"me dijo que estaba bien\", ¿qué da más vida?", opciones: ["Repetir la frase como la dijo: \"Ya está, pibe, quedate tranquilo\"","Resumirlo más","Saltearlo","Leerlo de un papel"], correcta: 0, explicacion: "El diálogo hace sentir la escena. Resumir tienta por corto, pero pierde fuerza." },
    { q: "Querés contar algo que le pasó a una amiga. ¿Qué cuidás?", opciones: ["Nada, la historia es buena","Agregarle detalles inventados","Contarla con su apellido completo","Su privacidad: cambiás el nombre si hace falta"], correcta: 3, explicacion: "La historia de otro es de otro. \"Nada, es buena\" tienta, pero podés exponerla sin querer." },
    { q: "¿Cómo mejora una historia?", opciones: ["Escribiéndola más larga","Contándola en voz alta varias veces antes del día","Leyéndola en silencio","No hace falta mejorarla"], correcta: 1, explicacion: "Cada vez que la contás mejora. Escribirla más larga tienta, pero la oratoria es hablada." },
  ],
},
{
  id: "nervios",
  icono: "🌬️",
  titulo: "Nervios, preguntas e improvisación",
  nivel: "Avanzado",
  objetivos: [
    "Manejar los nervios antes y durante con respiración y preparación",
    "Responder preguntas, incluso las que no sabés",
    "Improvisar una respuesta ordenada con la estructura PREP",
  ],
  lecciones: [
    { titulo: "Manejar los nervios", video: {"id":"UqyOvP21sN8","t":"Trucos para superar el miedo escénico · Teresa Baró (6:50)"}, html: `
      <p class="idea">El <strong>miedo escénico</strong> no desaparece del todo, ni siquiera en los oradores con experiencia. Lo que cambia es cómo lo manejás: antes, preparándote; durante, con respiración y foco en el mensaje.</p>
      <table>
        <tr><th>Momento</th><th>Qué hacer</th></tr>
        <tr><td>Días antes</td><td>Preparar y ensayar en voz alta; saber de memoria el principio y el final</td></tr>
        <tr><td>Una hora antes</td><td>Llegar temprano, conocer el lugar, probar el micrófono</td></tr>
        <tr><td>Minutos antes</td><td>Respiración lenta: inhalar en 4 tiempos, exhalar en 6, varias veces</td></tr>
        <tr><td>Al empezar</td><td>Mirar una cara amiga, decir la primera frase que te sabés</td></tr>
        <tr><td>Durante</td><td>Pensar en el mensaje y en el público, no en vos</td></tr>
      </table>
      <p><strong>Cambiá cómo lo nombrás:</strong> el corazón acelerado del miedo es el mismo de la emoción. Decirte "estoy activado, mi cuerpo se prepara" ayuda más que "estoy aterrado".</p>
      <p><strong>Si te quedás en blanco:</strong> hacé una pausa, mirá tu tarjeta, o repetí la última idea que dijiste ("Como les decía, el portón…"). El hilo vuelve.</p>
      <p><strong>Si el miedo es tan fuerte que evitás estudiar, trabajar o salir</strong> por no hablar frente a otros, puede ser ansiedad social: consultá con un profesional de salud mental. Este curso no lo reemplaza.</p>
      <p>Por ejemplo, llegar 20 minutos antes y probar el micrófono saca de la cabeza una preocupación entera.</p>` },
    { titulo: "Responder preguntas", video: {"id":"Wrs4E3ck95g","t":"Vence el miedo a hablar en público · Alfonso Rivera · TEDxLeon (9:48)"}, html: `
      <p class="idea">Las preguntas del público asustan porque no se pueden ensayar del todo. Pero con un método simple, cualquier pregunta se responde con calma, incluso las que no sabés.</p>
      <pre><code>1. Escuchá la pregunta completa, sin interrumpir.
2. Agradecé o repetila: "Buena pregunta: ¿cuánto sale el arreglo?"
3. Respondé corto: una idea, un dato o un ejemplo.
4. Volvé a tu mensaje si viene al caso.</code></pre>
      <table>
        <tr><th>Situación</th><th>Qué hacer</th></tr>
        <tr><td>No sabés la respuesta</td><td>"No lo sé; lo averiguo y te lo paso." Nunca inventes.</td></tr>
        <tr><td>La pregunta no se entendió</td><td>"¿Me lo preguntás de otra forma?"</td></tr>
        <tr><td>Alguien discute o se enoja</td><td>Reconocé el punto y ofrecé seguir la charla después</td></tr>
        <tr><td>Nadie pregunta</td><td>Tené una pregunta preparada: "Algo que me suelen preguntar es…"</td></tr>
      </table>
      <p><strong>Prepará las 3 preguntas más probables:</strong> casi siempre te preguntan alguna de ellas.</p>
      <p><strong>Repetir la pregunta sirve tres veces:</strong> todos la escuchan, confirmás que entendiste y ganás unos segundos para pensar.</p>
      <p>Por ejemplo, si en la asamblea te preguntan "¿Y quién va a controlar al cerrajero?", tener preparado "Me ofrezco a estar ese día" te da una respuesta segura.</p>` },
    { titulo: "Improvisar con orden", html: `
      <p class="idea">A veces te piden hablar sin aviso: "¿Y vos qué opinás?", "Decí unas palabras". Para esos momentos sirve una estructura de cuatro pasos que se arma en segundos: <strong>PREP</strong>.</p>
      <table>
        <tr><th>Letra</th><th>Qué es</th><th>Ejemplo</th></tr>
        <tr><td>P</td><td>Punto: tu opinión en una oración</td><td>"Creo que conviene arreglar el portón ya."</td></tr>
        <tr><td>R</td><td>Razón: por qué</td><td>"Porque está abierto todo el día y hubo robos en la cuadra."</td></tr>
        <tr><td>E</td><td>Ejemplo: un caso concreto</td><td>"El martes doña Elsa encontró a dos chicos adentro."</td></tr>
        <tr><td>P</td><td>Punto otra vez: repetís tu opinión</td><td>"Por eso propongo arreglarlo esta semana."</td></tr>
      </table>
      <p>Con PREP, en 30 segundos a 1 minuto decís algo claro y ordenado, aunque no lo hayas preparado.</p>
      <p><strong>Ganá unos segundos:</strong> "Buena pregunta, déjenme pensarlo un segundo" es perfectamente aceptable, y suena más seguro que empezar con "eh, eh".</p>
      <p><strong>Practicá con temas al azar:</strong> pedile a alguien que te diga un tema ("el transporte", "las vacaciones") y respondé con PREP en un minuto. Cuantas más veces lo hagas, más natural sale.</p>
      <p>Por ejemplo, en una reunión de trabajo, si te preguntan "¿Qué opinás del horario nuevo?", PREP te ayuda a no dar vueltas.</p>` },
  ],
  practica: [
    "Antes de tu próxima intervención, hacé la respiración de 4 y 6 tiempos durante 1 minuto. Anotá del 1 al 10 tus nervios antes y después.",
    "Escribí las 3 preguntas más probables sobre tu tema del curso y una respuesta corta para cada una. Anotá también qué dirías si no supieras una respuesta.",
    "Pedile a alguien 5 temas al azar y respondé cada uno con PREP en menos de 1 minuto. Anotá cuántos te salieron completos (los 4 pasos).",
  ],
  recursos: [
    { t: "MedlinePlus: ansiedad", url: "https://medlineplus.gov/spanish/anxiety.html" },
    { t: "Argentina.gob.ar: Salud mental", url: "https://www.argentina.gob.ar/salud/mental-y-adicciones" },
    { t: "Toastmasters: consejos para hablar en público (en inglés)", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
  ],
  quiz: [
    { q: "Los oradores con mucha experiencia, ¿dejan de tener nervios?", opciones: ["Sí, desaparecen por completo","Sí, si son extrovertidos","No del todo: lo que cambia es cómo los manejan","No, y por eso no se puede mejorar"], correcta: 2, explicacion: "El miedo escénico no desaparece, se maneja. Que desaparece tienta como promesa, pero genera frustración cuando no pasa." },
    { q: "Faltan minutos para hablar y estás muy nervioso. ¿Qué hacés?", opciones: ["Respiración lenta: inhalar en 4 tiempos y exhalar en 6, varias veces","Tomar mucho café","Repasar todo el discurso a las apuradas","Pensar en todo lo que puede salir mal"], correcta: 0, explicacion: "Exhalar lento calma el cuerpo. Repasar todo a las apuradas tienta, pero aumenta los nervios." },
    { q: "Mientras hablás, ¿en qué conviene pensar?", opciones: ["En cómo te ves","En los nervios","En lo que pueden estar pensando de vos","En el mensaje y en el público, no en vos"], correcta: 3, explicacion: "El foco en el mensaje baja los nervios. Pensar en cómo te ves tienta, pero te pone más nervioso." },
    { q: "Tu corazón late rápido antes de hablar. ¿Cómo conviene nombrarlo?", opciones: ["\"Estoy aterrado\"","\"Estoy activado, mi cuerpo se prepara\"","\"No puedo hacerlo\"","\"Me va a salir mal\""], correcta: 1, explicacion: "El cuerpo del miedo y el de la emoción son parecidos. \"Estoy aterrado\" tienta por sincero, pero refuerza el miedo." },
    { q: "Te quedás en blanco en medio de tu charla. ¿Qué hacés?", opciones: ["Pedís perdón y te vas","Empezás de cero","Una pausa, mirás tu tarjeta o repetís la última idea que dijiste","Decís \"eh\" hasta acordarte"], correcta: 2, explicacion: "Repetir la última idea devuelve el hilo. Empezar de cero tienta, pero el público ya escuchó esa parte." },
    { q: "Si el miedo es tan fuerte que evitás estudiar o trabajar, ¿qué hacés?", opciones: ["Consultás con un profesional de salud mental","Lo aguantás","Hacés más cursos de oratoria y nada más","Evitás hablar para siempre"], correcta: 0, explicacion: "Puede ser ansiedad social, y se trata. Más cursos tientan, pero un profesional puede ayudar de otra forma." },
    { q: "Te hacen una pregunta. ¿Qué hacés antes de responder?", opciones: ["Interrumpís porque ya sabés qué te van a preguntar","Respondés lo que tenías preparado aunque no sea lo que preguntaron","Mirás el reloj","Escuchás completa y la repetís o agradecés"], correcta: 3, explicacion: "Repetirla confirma que entendiste y te da segundos. Interrumpir tienta por rápido, pero podés responder otra cosa." },
    { q: "Si te preguntan algo que no sabés, ¿qué decís?", opciones: ["Inventás algo que suene bien","\"No lo sé; lo averiguo y te lo paso.\"","Cambiás de tema sin decir nada","\"Esa pregunta no es importante\""], correcta: 1, explicacion: "Reconocerlo da credibilidad. Inventar tienta para no quedar mal, pero si se descubre perdés todo lo demás." },
    { q: "Si terminaste y nadie pregunta, ¿qué podés hacer?", opciones: ["Quedarte en silencio esperando","Irte enojado","Tener una pregunta preparada: \"Algo que me suelen preguntar es…\"","Preguntarle a alguien en particular para incomodarlo"], correcta: 2, explicacion: "Una pregunta preparada rompe el hielo. Esperar en silencio tienta, pero se vuelve incómodo para todos." },
    { q: "¿Qué significa PREP?", opciones: ["Punto, Razón, Ejemplo y Punto otra vez","Preparar, Repasar, Ensayar, Presentar","Pregunta, Respuesta, Excusa, Pausa","Público, Ritmo, Energía, Postura"], correcta: 0, explicacion: "PREP ordena una respuesta improvisada. \"Preparar, repasar…\" tienta porque suena lógico, pero es para cuando no hubo preparación." },
    { q: "En una reunión te preguntan de golpe qué opinás del horario nuevo. ¿Qué hacés?", opciones: ["Hablás de todo lo que se te ocurra","Decís \"no sé\" y nada más","Pedís que te pregunten otro día","Respondés con PREP: tu opinión, por qué, un ejemplo y tu opinión otra vez"], correcta: 3, explicacion: "PREP te ordena en segundos. Hablar de todo tienta para no quedar callado, pero das vueltas." },
    { q: "Te piden unas palabras sin aviso y necesitás pensar. ¿Qué podés decir?", opciones: ["\"Eh, eh, eh…\"","\"Buena pregunta, déjenme pensarlo un segundo\"","Nada, te quedás mirando","\"No me avisaron\""], correcta: 1, explicacion: "Pedir un segundo suena seguro. \"No me avisaron\" tienta por sincero, pero suena a queja." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu discurso de 3 minutos",
  nivel: "Avanzado",
  objetivos: [
    "Preparar un discurso de 3 minutos con mensaje, estructura y una historia",
    "Grabarlo, evaluarlo con una rúbrica y mejorarlo",
    "Darlo frente a personas reales",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un discurso de <strong>3 minutos</strong> (unas 400 palabras) sobre tu situación del curso o una de estas, preparado con todo lo que viste.</p>
      <ul>
        <li>Presentarte en una entrevista, con una historia que muestre algo tuyo.</li>
        <li>Un brindis para alguien que querés.</li>
        <li>Una propuesta para tu barrio, escuela, club o trabajo.</li>
        <li>Explicar algo que sabés hacer muy bien.</li>
      </ul>
      <table>
        <tr><th>Paso</th><th>Módulo</th></tr>
        <tr><td>Mensaje en una oración y público</td><td>Qué decir</td></tr>
        <tr><td>Apertura, tres puntos y cierre</td><td>Qué decir</td></tr>
        <tr><td>Una historia con situación, conflicto y resolución</td><td>Contar historias</td></tr>
        <tr><td>Guion de palabras clave y 3 ensayos</td><td>Qué decir</td></tr>
        <tr><td>Voz: velocidad, pausas, énfasis</td><td>La voz</td></tr>
        <tr><td>Cuerpo: postura, mirada, gestos</td><td>El cuerpo</td></tr>
        <tr><td>3 preguntas probables con respuesta</td><td>Nervios y preguntas</td></tr>
      </table>
      <p>Por ejemplo, un brindis de 3 minutos puede ser: apertura con un recuerdo, tres cosas que admirás de la persona (una con historia), y cierre con "Brindemos por…".</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Grabate dando el discurso y evaluate con esta; después pedile a otra persona que te evalúe también.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Mensaje</td><td>Se entiende en una oración y se repite al cierre</td><td>Se entiende, pero el cierre no lo repite</td><td>No se sabe qué quiso decir</td></tr>
        <tr><td>Estructura</td><td>Apertura que engancha, 3 puntos y cierre firme</td><td>Falta una parte</td><td>Sin orden</td></tr>
        <tr><td>Historia</td><td>Con conflicto, detalles y conectada al mensaje</td><td>Historia sin conflicto o sin conexión</td><td>Sin historia</td></tr>
        <tr><td>Voz</td><td>Volumen claro, pausas, menos de 5 muletillas</td><td>Algo rápida o con 5 a 10 muletillas</td><td>No se escucha o más de 10 muletillas</td></tr>
        <tr><td>Cuerpo</td><td>Postura firme, mirada repartida, gestos que suman</td><td>Algún gesto que distrae</td><td>Mirada al piso o balanceo constante</td></tr>
        <tr><td>Tiempo</td><td>Entre 2 min 30 s y 3 min 15 s</td><td>Hasta 30 segundos de diferencia</td><td>Más de 30 segundos de diferencia</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo para darlo
7 a 10  → mejorá lo que sacó 0 o 1 y volvé a grabar
0 a 6   → volvé a los módulos de esos criterios</code></pre>
      <p>Por ejemplo, si sacaste 0 en voz por 14 muletillas, dedicá una semana solo a reemplazarlas por pausas antes de volver a grabar todo.</p>` },
    { titulo: "Darlo de verdad y seguir", html: `
      <p class="idea">El último paso es darlo frente a personas reales. Puede ser un grupo chico: tu familia, compañeros, un grupo de estudio. Lo importante es la experiencia de hablar mirando caras.</p>
      <pre><code>Comparación (completá con tus datos):
                    Video 1 (módulo 1)   Video final
Duración            1 min 40 s           3 min 05 s (meta: 3 min)
Muletillas          13                   4
Mirada al público   la mitad del tiempo  casi todo el tiempo
Rúbrica             —                    11/12
Nervios (1 a 10)    8                    5</code></pre>
      <p><strong>Pedí una devolución concreta:</strong> "¿Qué te acordás de lo que dije?" y "¿Qué mejorarías?". Si recuerdan tu mensaje, el discurso funcionó.</p>
      <p><strong>Seguí practicando:</strong> la oratoria se mantiene con uso. Algunas ideas:</p>
      <ul>
        <li>Ofrecete para hablar en reuniones, actos o asambleas.</li>
        <li>Buscá un club de oratoria: Toastmasters tiene clubes en varias ciudades de Argentina, y algunos municipios y centros culturales ofrecen talleres.</li>
        <li>Grabate una vez por mes con un tema nuevo.</li>
      </ul>
      <p>Por ejemplo, ver que bajaste de 13 a 4 muletillas y de 8 a 5 en nervios es la prueba de que se puede aprender, y la mejor motivación para seguir.</p>` },
  ],
  practica: [
    "Prepará tu discurso de 3 minutos con los pasos de la tabla del encargo. Anotá tu mensaje en una oración y la historia que elegiste.",
    "Grabate dándolo y evaluate con la rúbrica. Anotá el puntaje de cada criterio y el total sobre 12.",
    "Mejorá lo que sacó 0 o 1, volvé a grabar y anotá el puntaje antes y después.",
    "Dalo frente a al menos 2 personas y completá la tabla de comparación con tu video del módulo 1. Anotá qué recordaron de tu mensaje.",
  ],
  recursos: [
    { t: "Toastmasters: consejos para hablar en público (en inglés)", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
    { t: "TED: Chris Anderson, el secreto de las grandes charlas (subtítulos en español)", url: "https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking?language=es" },
    { t: "TED: charlas para ver antes de hablar en público (en inglés)", url: "https://www.ted.com/playlists/226/before_public_speaking" },
  ],
  quiz: [
    { q: "Tu discurso tiene que durar 3 minutos. ¿Cuántas palabras, más o menos?", opciones: ["Unas 1.500","Unas 50","Unas 400","No importa"], correcta: 2, explicacion: "A 120 a 150 palabras por minuto, 3 minutos son unas 400. 1.500 tienta para decir mucho, pero serían más de 10 minutos." },
    { q: "Vas a hacer un brindis de 3 minutos. ¿Qué estructura usás?", opciones: ["Apertura con un recuerdo, tres cosas que admirás (una con historia) y cierre con el brindis","Una lista de todo lo que hizo la persona en su vida","Chistes sueltos","Leer un poema largo"], correcta: 0, explicacion: "La estructura con historia emociona y ordena. La lista tienta por completa, pero aburre." },
    { q: "¿Qué es una rúbrica?", opciones: ["Un tipo de discurso","Una técnica de respiración","Un guion de palabras clave","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica muestra qué mejorar. Confundirla con el guion tienta porque es una lista, pero el guion es para hablar y la rúbrica para evaluar." },
    { q: "En tu video dijiste 14 muletillas. ¿Cuánto sacás en \"Voz\"?", opciones: ["2","0: más de 10 muletillas","1","No se evalúa"], correcta: 1, explicacion: "Más de 10 muletillas es 0. Pensar que no se evalúa tienta, pero es parte de la voz." },
    { q: "Tu historia no tiene conflicto. ¿Cuánto saca \"Historia\"?", opciones: ["2","0","1: historia sin conflicto","No se evalúa"], correcta: 2, explicacion: "Tiene historia, pero sin conflicto. 0 tienta, pero hay historia; le falta el motor." },
    { q: "Tu discurso duró 4 minutos y la meta era 3. ¿Cuánto saca \"Tiempo\"?", opciones: ["0: más de 30 segundos de diferencia","2","1","No se evalúa"], correcta: 0, explicacion: "Un minuto de más es mucha diferencia. 1 tienta porque \"casi\", pero el criterio dice hasta 30 segundos." },
    { q: "Sacaste 8 sobre 12. ¿Qué hacés?", opciones: ["Lo das así","Empezás un discurso nuevo","Dejás de practicar","Mejorás lo que sacó 0 o 1 y volvés a grabar"], correcta: 3, explicacion: "Entre 7 y 10 se mejora lo que falló. Empezar otro tienta, pero perdés lo que ya funciona." },
    { q: "Sacaste 0 en voz por muletillas. ¿Qué conviene?", opciones: ["Grabar todo de nuevo enseguida","Dedicar unos días solo a reemplazarlas por pausas antes de grabar todo de nuevo","Hablar más rápido para que no se noten","Ignorarlo"], correcta: 1, explicacion: "Practicar un criterio a la vez rinde más. Grabar todo enseguida tienta, pero vas a repetir las mismas muletillas." },
    { q: "¿Por qué conviene dar el discurso frente a personas reales?", opciones: ["Porque el video no sirve","Para que te aplaudan","Porque hablar mirando caras es la experiencia que querés entrenar","No hace falta"], correcta: 2, explicacion: "El video sirve, pero el público real es la meta. Que te aplaudan tienta como motivo, pero lo que importa es la experiencia." },
    { q: "Querés saber si tu discurso funcionó. ¿Qué preguntás?", opciones: ["\"¿Qué te acordás de lo que dije?\"","\"¿Te gustó?\"","\"¿Estuve bien?\"","No preguntás"], correcta: 0, explicacion: "Si recuerdan tu mensaje, funcionó. \"¿Te gustó?\" tienta, pero casi todos dicen que sí por amabilidad." },
    { q: "Comparás tus videos: bajaste de 13 a 4 muletillas. ¿Qué concluís?", opciones: ["Que fue suerte","Que el primer video estaba mal grabado","Nada","Que la oratoria se aprende con práctica"], correcta: 3, explicacion: "La comparación muestra el avance real. Que fue suerte tienta, pero es el resultado de practicar." },
    { q: "Terminaste el curso. ¿Cómo seguís practicando?", opciones: ["No hace falta, ya aprendiste","Hablando en reuniones o actos, en un club de oratoria o grabándote una vez por mes","Leyendo libros sin hablar","Esperando a que te inviten a dar una charla"], correcta: 1, explicacion: "La oratoria se mantiene con uso. \"Ya aprendiste\" tienta, pero sin práctica se pierde." },
  ],
},
];
