// Temario del curso "Costura a mano y a máquina". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js costura y node tools/metodologia.js costura
window.TEMARIO = [
{
  id: "herramientas",
  icono: "🧰",
  titulo: "Herramientas, telas y seguridad",
  nivel: "Básico",
  objetivos: [
    "Armar un costurero básico sin gastar de más",
    "Reconocer el derecho, el revés, el orillo y el hilo de una tela",
    "Trabajar seguro con alfileres, tijeras, plancha y máquina",
  ],
  lecciones: [
    { titulo: "El costurero básico", html: `
      <p class="idea">Para empezar alcanza con pocas herramientas buenas. La más importante es una <strong>tijera solo para tela</strong>: si cortás papel con ella, pierde el filo.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué sirve</th></tr>
        <tr><td>Tijera de tela</td><td>Cortar tela, y nada más</td></tr>
        <tr><td>Cinta métrica</td><td>Medir el cuerpo y la tela</td></tr>
        <tr><td>Alfileres y alfiletero</td><td>Sostener las telas antes de coser</td></tr>
        <tr><td>Agujas de mano</td><td>Coser a mano</td></tr>
        <tr><td>Descosedor</td><td>Deshacer puntadas sin romper la tela</td></tr>
        <tr><td>Tiza o jaboncillo de sastre</td><td>Marcar la tela; se borra después</td></tr>
        <tr><td>Hilo de poliéster</td><td>Sirve para casi todas las telas</td></tr>
        <tr><td>Dedal</td><td>Empujar la aguja sin pincharte el dedo</td></tr>
      </table>
      <p><strong>Agujas de mano:</strong> en las de mano, <strong>número más alto, aguja más fina</strong>. Un sobre surtido sirve para empezar.</p>
      <p><strong>Un truco que ahorra:</strong> un jabón de tocador viejo y seco marca bien la tela y se va con el lavado.</p>
      <p>En todo el curso acompañamos a <strong>Marta</strong>, que tiene una máquina de coser familiar heredada y quiere coser cosas para su casa y, más adelante, vender bolsas de tela en la feria del barrio.</p>
      <p>Por ejemplo, Marta ató una cinta roja en el mango de su tijera de tela. Así nadie en la casa la usa para cortar papel o cartón.</p>` },
    { titulo: "Conocer la tela", html: `
      <p class="idea">Antes de cortar, mirá la tela: tiene un <strong>derecho</strong> y un <strong>revés</strong>, unos bordes terminados llamados <strong>orillo</strong> y una dirección, el <strong>hilo</strong>.</p>
      <table>
        <tr><th>Palabra</th><th>Qué es</th><th>Por qué importa</th></tr>
        <tr><td>Derecho</td><td>La cara linda, la que se ve</td><td>Casi siempre se cose derecho con derecho</td></tr>
        <tr><td>Revés</td><td>La cara de adentro</td><td>Ahí quedan las costuras</td></tr>
        <tr><td>Orillo</td><td>Los dos bordes que vienen terminados de fábrica</td><td>No se usa en la prenda: suele encoger distinto</td></tr>
        <tr><td>Hilo</td><td>La dirección paralela al orillo</td><td>Las piezas se cortan al hilo para que no se deformen</td></tr>
        <tr><td>Bies</td><td>La diagonal, a 45 grados del orillo</td><td>Estira: sirve para ribetes, pero se deforma</td></tr>
      </table>
      <p><strong>Dos grandes familias de telas:</strong></p>
      <ul>
        <li><strong>Tejido plano:</strong> hilos cruzados, casi no estira. Por ejemplo, jean, gabardina, lienzo, poplin.</li>
        <li><strong>Tejido de punto:</strong> hilos enlazados, como un tejido de lana, y estira. Por ejemplo, la tela de remera o el morley.</li>
      </ul>
      <p>Para empezar, elegí <strong>tejido plano de algodón</strong>, como un lienzo o una tela de sábana: no se resbala ni estira.</p>
      <p><strong>Lavá la tela antes de cortar.</strong> El algodón puede achicarse al lavarlo, y es mejor que se achique antes que después de coser.</p>
      <p>Por ejemplo, Marta compró 1 metro de lienzo, lo lavó y lo planchó. Al medirlo de nuevo vio que se había achicado casi 3 cm.</p>` },
    { titulo: "Coser seguro", html: `
      <p class="idea">Coser es tranquilo, pero hay agujas, tijeras, una plancha caliente y un motor. Unas pocas reglas evitan casi todos los accidentes.</p>
      <table>
        <tr><th>Herramienta</th><th>Así sí</th><th>Nunca</th></tr>
        <tr><td>Alfileres</td><td>Guardados en el alfiletero</td><td>En la boca, ni sueltos sobre la mesa o el piso</td></tr>
        <tr><td>Tijeras</td><td>Pasarlas cerradas, con la punta hacia abajo</td><td>Dejarlas abiertas al alcance de chicos</td></tr>
        <tr><td>Plancha</td><td>Parada sobre su base y desenchufada al terminar</td><td>Apoyada boca abajo o con el cable colgando</td></tr>
        <tr><td>Máquina</td><td>Dedos lejos de la aguja; apagada para enhebrar o cambiar la aguja</td><td>Coser sobre los alfileres</td></tr>
      </table>
      <p><strong>Para la máquina:</strong></p>
      <ul>
        <li><strong>Desenchufala</strong> antes de cambiar la aguja, limpiar o abrir la tapa de abajo.</li>
        <li>Revisá que el cable no esté pelado. Evitá las zapatillas con muchos enchufes.</li>
        <li>Sacá cada alfiler <strong>antes</strong> de que llegue al pie de la máquina: si la aguja pega en un alfiler, puede quebrarse y saltar una punta.</li>
        <li>Guiá la tela con las manos a los costados, nunca delante de la aguja.</li>
      </ul>
      <p><strong>Tu cuerpo también cuenta:</strong> buena luz, la mesa a la altura de los codos y una pausa cada 45 minutos para estirar la espalda y descansar la vista. Si hay una aguja suelta en el piso, andá con calzado.</p>
      <p>Por ejemplo, a Marta se le cayeron 3 alfileres. En vez de buscarlos a ciegas, pasó un imán por el piso y los juntó en 10 segundos.</p>` },
  ],
  practica: [
    "Hacé la lista de tu costurero: anotá qué herramientas ya tenés y cuáles te faltan.",
    "Con un pedazo de tela, marcá con tiza el derecho, el revés, el orillo y la dirección del hilo, y anotá cómo los reconociste.",
    "Lavá y planchá un pedazo de tela de algodón de 50 cm, medilo antes y después y anotá cuántos centímetros se achicó.",
  ],
  recursos: [
    { t: "Ohio State University (Extensión): normas de seguridad para coser (PDF, en inglés)", url: "https://wayne.osu.edu/sites/wayne/files/imce/Safety%20rules.pdf" },
    { t: "Texas A&M (Extensión): guía de seguridad para costura (PDF, en inglés)", url: "https://d34-h.tamu.edu/files/2021/01/DudsDazzle_Resource_Safety_Guide.pdf" },
  ],
  quiz: [
    { q: "Tu familia usa tu tijera de tela para cortar cartón. ¿Qué pasa?", opciones: ["Nada, una tijera es una tijera","Corta mejor","Pierde el filo y después corta mal la tela","Se afila sola"], correcta: 2, explicacion: "El papel y el cartón desafilan. \"Una tijera es una tijera\" tienta, pero la de tela tiene que ser solo para tela." },
    { q: "Necesitás deshacer una costura sin romper la tela. ¿Qué usás?", opciones: ["El descosedor","La tijera grande, tirando","Los dientes","Un cuchillo de cocina"], correcta: 0, explicacion: "El descosedor corta solo el hilo. La tijera tienta porque está a mano, pero puede cortar la tela." },
    { q: "Querés una aguja de mano fina para una tela delicada. ¿Qué número buscás?", opciones: ["Uno bajo, siempre","Da igual el número","La más gruesa del sobre","Uno alto: en las de mano, más número es más fina"], correcta: 3, explicacion: "En agujas de mano, número alto es fina. El número bajo tienta si pensás en \"chico es fino\", pero es al revés." },
    { q: "Querés marcar la tela con algo que después se borre. ¿Qué usás?", opciones: ["Una birome","Tiza o un jabón seco","Un marcador indeleble","Pintura"], correcta: 1, explicacion: "La tiza y el jabón se van. La birome tienta porque marca fino, pero puede quedar para siempre." },
    { q: "Vas a coser dos piezas. ¿Cómo las ponés casi siempre?", opciones: ["Revés con revés","Una arriba de otra al azar","Derecho con derecho, y la costura queda del revés","Derecho con revés"], correcta: 2, explicacion: "Así la costura queda adentro. Revés con revés tienta, pero la costura quedaría a la vista." },
    { q: "Vas a cortar una pieza. ¿Hacia dónde la ubicás?", opciones: ["Al hilo: paralela al orillo","En diagonal, siempre","Sobre el orillo","En cualquier dirección"], correcta: 0, explicacion: "Al hilo no se deforma. El bies tienta porque estira lindo, pero la pieza se deforma." },
    { q: "Es tu primer proyecto. ¿Qué tela elegís?", opciones: ["Una tela de remera que estira","Una seda resbalosa","Un tul","Un tejido plano de algodón, como un lienzo"], correcta: 3, explicacion: "El algodón plano no se resbala ni estira. La tela de remera tienta por cómoda, pero estira al coser." },
    { q: "Compraste una tela de algodón. ¿Qué hacés antes de cortar?", opciones: ["La cortás enseguida","La lavás y la planchás, porque puede achicarse","La guardás un año","La mojás después de coser"], correcta: 1, explicacion: "Mejor que se achique antes. Cortar enseguida tienta, pero la prenda puede quedar chica después." },
    { q: "Estás sujetando telas y necesitás las dos manos. ¿Dónde ponés los alfileres?", opciones: ["En la boca","Sueltos sobre la mesa","En el alfiletero","En la ropa que tenés puesta"], correcta: 2, explicacion: "En la boca te los podés tragar. Tenerlos en la boca tienta por práctico, pero es peligroso." },
    { q: "Vas a cambiar la aguja de la máquina. ¿Qué hacés primero?", opciones: ["Desenchufás la máquina","La dejás encendida para ver mejor","Apretás el pedal suave","Nada, es rápido"], correcta: 0, explicacion: "Sin corriente no puede arrancar. \"Es rápido\" tienta, pero un pisotón al pedal te pincha el dedo." },
    { q: "Cosés a máquina y viene un alfiler. ¿Qué hacés?", opciones: ["Cosés encima, total pasa","Aumentás la velocidad","Lo empujás con el dedo bajo la aguja","Lo sacás antes de que llegue al pie"], correcta: 3, explicacion: "Si la aguja pega en el alfiler, puede quebrarse. Coser encima tienta porque a veces pasa, pero es riesgoso." },
    { q: "Terminaste de planchar. ¿Cómo dejás la plancha?", opciones: ["Boca abajo sobre la tela","Parada sobre su base y desenchufada","Enchufada por si la usás después","Con el cable colgando de la mesa"], correcta: 1, explicacion: "Así no quema ni se cae. Dejarla enchufada tienta para no esperar, pero es un riesgo de quemadura e incendio." },
  ],
},
{
  id: "mano",
  icono: "🪡",
  titulo: "Puntadas a mano",
  nivel: "Básico",
  objetivos: [
    "Enhebrar, hacer el nudo y rematar una costura a mano",
    "Hacer 4 puntadas básicas: hilván, pespunte, punto escondido y sobrehilado",
    "Elegir qué puntada usar según lo que tenés que coser",
  ],
  lecciones: [
    { titulo: "Enhebrar, anudar y rematar", video: {"id":"sZXoHbZOE3k","t":"Cómo coser a mano: las puntadas básicas · Laura Páez (12:30)"}, html: `
      <p class="idea">Toda costura a mano empieza igual: un hilo del largo justo, un nudo para que no se salga y un <strong>remate</strong> al final para que no se desarme.</p>
      <pre><code>1. Cortá un hilo del largo de tu brazo
   (unos 50 a 60 cm; más largo se enreda).
2. Cortá la punta en diagonal: entra más fácil.
3. Pasala por el ojo de la aguja.
4. Nudo: enrollá la punta 2 o 3 veces en el índice
   y hacela rodar con el pulgar hasta formar un nudito.
5. Empezá desde el revés, así el nudo queda escondido.</code></pre>
      <p><strong>Hilo simple o doble:</strong> con hilo simple (un solo extremo con nudo) la costura es más fina. Con hilo doble (los dos extremos anudados juntos) es más fuerte, por ejemplo para un botón.</p>
      <p><strong>Rematar</strong> es asegurar el final para que no se descosa:</p>
      <pre><code>Al terminar, del revés:
1. Hacé 2 o 3 puntadas chiquitas en el mismo lugar.
2. En la última, pasá la aguja por adentro del lazo
   antes de tirar: queda un nudo.
3. Cortá el hilo dejando medio centímetro.</code></pre>
      <p>Por ejemplo, Marta usaba hilos de 1 metro "para no enhebrar tantas veces", y se le enredaban a cada rato. Con 50 cm tarda menos, aunque enhebre más seguido.</p>` },
    { titulo: "Cuatro puntadas que alcanzan", html: `
      <p class="idea">Con <strong>4 puntadas</strong> resolvés casi todo a mano. Cada una tiene su trabajo.</p>
      <table>
        <tr><th>Puntada</th><th>Cómo es</th><th>Para qué</th></tr>
        <tr><td>Hilván</td><td>Puntadas largas, entra y sale en línea recta</td><td>Sostener de forma provisoria; después se saca</td></tr>
        <tr><td>Pespunte (punto atrás)</td><td>Cada puntada vuelve atrás hasta tocar la anterior</td><td>Una costura firme, parecida a la de máquina</td></tr>
        <tr><td>Punto escondido</td><td>Toma apenas 1 o 2 hilos de la tela de afuera</td><td>Ruedos y cierres que no se tienen que ver</td></tr>
        <tr><td>Sobrehilado</td><td>El hilo envuelve el borde en diagonal</td><td>Que el borde cortado no se deshilache</td></tr>
      </table>
      <pre><code>Hilván:        —  —  —  —  —      (puntadas de 1 cm)
Pespunte:      ————————————      (sin espacios)
Sobrehilado:   /////////////     (sobre el borde)</code></pre>
      <p><strong>Pespunte paso a paso:</strong> sacá la aguja, volvé medio centímetro hacia atrás, entrá, y sacala medio centímetro adelante de donde salió la anterior. Así cada puntada toca a la otra.</p>
      <p><strong>La regla del tamaño:</strong> puntadas parejas importan más que puntadas chicas. Mejor todas de 3 mm que unas de 1 y otras de 5.</p>
      <p>Por ejemplo, a Marta se le descosió el costado de una funda. Lo cerró con pespunte, que es firme, y sobrehiló el borde para que no se siguiera deshilachando.</p>` },
    { titulo: "El punto escondido", video: {"id":"KWrStGcPNXk","t":"La puntada escondida o invisible · Kat Rodriguez (3:09)"}, html: `
      <p class="idea">El <strong>punto escondido</strong> une dos telas sin que se vea el hilo del lado de afuera. Es el que se usa en los <strong>ruedos</strong>, el doblez del borde de abajo de un pantalón o una pollera.</p>
      <pre><code>1. Doblá el ruedo y sujetalo con alfileres.
2. Enhebrá un hilo del mismo color de la tela.
3. Empezá adentro del doblez, así el nudo queda escondido.
4. Tomá con la aguja solo 1 o 2 hilos de la tela de afuera.
5. Avanzá 1 cm por adentro del doblez.
6. Repetí: 1 o 2 hilos afuera, 1 cm adentro.
7. No tires fuerte: si el hilo aprieta, se marca un frunce.</code></pre>
      <table>
        <tr><th>Problema</th><th>Causa</th><th>Solución</th></tr>
        <tr><td>Se ven puntitos del lado de afuera</td><td>Tomás muchos hilos de la tela</td><td>Tomá solo 1 o 2</td></tr>
        <tr><td>La tela queda fruncida</td><td>Tirás demasiado del hilo</td><td>Dejá el hilo flojito</td></tr>
        <tr><td>El ruedo queda torcido</td><td>No lo sujetaste antes</td><td>Marcalo con tiza y alfileres</td></tr>
      </table>
      <p><strong>El color del hilo:</strong> si no conseguís el mismo, elegí uno apenas más oscuro que la tela: se nota menos que uno más claro.</p>
      <p>Lo vas a usar mucho en arreglos de ropa, por ejemplo para acortar un pantalón o una pollera.</p>
      <p>Por ejemplo, Marta hizo el ruedo de un pantalón con punto escondido, tomando 1 hilo de afuera cada 1 cm. Del lado de afuera no se ve ninguna puntada.</p>` },
  ],
  practica: [
    "Hacé 5 nudos de dedo seguidos y anotá cuántos te salieron bien al primer intento.",
    "En un retazo, cosé 10 cm de cada una de las 4 puntadas y medí con regla el largo de 5 puntadas de pespunte: anotá si son parejas.",
    "Hacé un ruedo de 20 cm con punto escondido en un retazo doblado y anotá cuántas puntadas se ven del lado de afuera.",
  ],
  recursos: [
    { t: "Cursa: curso gratis de costura para principiantes", url: "https://cursa.app/es/curso-gratis/costura-para-principiantes-bead" },
    { t: "Ohio State University (Extensión): normas de seguridad para coser (PDF, en inglés)", url: "https://wayne.osu.edu/sites/wayne/files/imce/Safety%20rules.pdf" },
  ],
  quiz: [
    { q: "Tu hilo de 1 metro se enreda todo el tiempo. ¿Qué cambiás?", opciones: ["Lo hacés de 2 metros","Le ponés pegamento","Lo cortás del largo del brazo, unos 50 a 60 cm","Cosés más rápido"], correcta: 2, explicacion: "Un hilo largo se enreda. Hacerlo más largo tienta para enhebrar menos, pero se enreda más." },
    { q: "El hilo no entra en el ojo de la aguja. ¿Qué probás?", opciones: ["Cortar la punta en diagonal","Mojar la aguja entera","Usar un hilo más grueso","Hacerle un nudo a la punta"], correcta: 0, explicacion: "La punta en diagonal entra mejor. El nudo tienta, pero lo hace más grueso." },
    { q: "Vas a coser un botón que tiene que aguantar. ¿Qué hilo usás?", opciones: ["Hilo simple muy fino","Hilo de hilván","Sin nudo","Hilo doble, más fuerte"], correcta: 3, explicacion: "El doble aguanta más. El simple tienta por fino, pero se corta antes." },
    { q: "Terminás de coser y cortás el hilo sin más. ¿Qué pasa?", opciones: ["Nada, queda perfecta","La costura se puede desarmar: faltó rematar","Se refuerza sola","Se ve más prolija"], correcta: 1, explicacion: "El remate asegura el final. \"Queda perfecta\" tienta, pero con el uso se suelta." },
    { q: "Querés sostener dos telas un rato antes de coserlas a máquina. ¿Qué puntada hacés?", opciones: ["Pespunte","Punto escondido","Hilván","Sobrehilado"], correcta: 2, explicacion: "El hilván es provisorio y se saca. El pespunte tienta por firme, pero después cuesta sacarlo." },
    { q: "Se descosió el costado de una funda y querés una costura firme a mano. ¿Cuál usás?", opciones: ["Pespunte","Hilván","Punto escondido","Ninguna, solo pegamento"], correcta: 0, explicacion: "El pespunte es firme como la máquina. El hilván tienta por fácil, pero es provisorio." },
    { q: "El borde cortado de la tela se deshilacha. ¿Qué puntada lo frena?", opciones: ["Hilván","Punto escondido","Un nudo grande","Sobrehilado"], correcta: 3, explicacion: "El sobrehilado envuelve el borde. El escondido tienta por prolijo, pero no cubre el borde." },
    { q: "Tus puntadas de pespunte miden unas 1 mm y otras 5 mm. ¿Qué mejorás primero?", opciones: ["Que sean todas de 1 mm, aunque sean disparejas","Que sean parejas, aunque no sean tan chicas","Nada, está bien así","Que sean más largas"], correcta: 1, explicacion: "Parejas se ven mejor. Muy chicas tientan por prolijas, pero si son disparejas se nota igual." },
    { q: "Vas a hacer el ruedo de un pantalón sin que se vea la costura. ¿Qué puntada usás?", opciones: ["Pespunte","Hilván","Punto escondido","Sobrehilado"], correcta: 2, explicacion: "El escondido no se ve de afuera. El pespunte tienta por firme, pero se ve." },
    { q: "En tu ruedo se ven puntitos del lado de afuera. ¿Qué cambiás?", opciones: ["Tomás solo 1 o 2 hilos de la tela de afuera","Tomás más tela","Usás hilo de otro color","Tirás más fuerte"], correcta: 0, explicacion: "Menos hilos tomados, menos se ve. Tirar más fuerte tienta para esconderlo, pero frunce." },
    { q: "Tu ruedo quedó fruncido. ¿Qué pasó?", opciones: ["Usaste hilo del mismo color","Tomaste 1 hilo","Lo hiciste a mano","Tiraste demasiado del hilo"], correcta: 3, explicacion: "El hilo tirante frunce. Pensar que fue el color tienta, pero el color no frunce." },
    { q: "No conseguís hilo del mismo color que la tela. ¿Cuál elegís?", opciones: ["Uno mucho más claro","Uno apenas más oscuro","Blanco siempre","Uno fluor"], correcta: 1, explicacion: "El más oscuro se nota menos. El blanco tienta porque combina con todo, pero resalta en telas oscuras." },
  ],
},
{
  id: "maquina",
  icono: "⚙️",
  titulo: "Conocer la máquina",
  nivel: "Básico",
  objetivos: [
    "Nombrar las partes principales de una máquina de coser familiar",
    "Enhebrar el hilo de arriba y llenar y colocar la canilla",
    "Regular el largo de puntada y la tensión, y elegir la aguja según la tela",
  ],
  lecciones: [
    { titulo: "Las partes de la máquina", html: `
      <p class="idea">Todas las máquinas familiares tienen las mismas partes principales. Conocerlas te sirve para seguir cualquier manual y cualquier video.</p>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>Portacarretel</td><td>Sostiene el carretel de hilo de arriba</td></tr>
        <tr><td>Tirahilo</td><td>La palanquita que sube y baja: tira del hilo en cada puntada</td></tr>
        <tr><td>Discos de tensión</td><td>Aprietan el hilo de arriba con más o menos fuerza</td></tr>
        <tr><td>Aguja</td><td>Lleva el hilo de arriba a través de la tela</td></tr>
        <tr><td>Prensatelas (pie)</td><td>Apoya la tela contra la placa mientras cosés</td></tr>
        <tr><td>Dientes de arrastre</td><td>Debajo del pie: mueven la tela hacia atrás</td></tr>
        <tr><td>Canilla</td><td>El carretel chiquito de abajo, con el hilo de abajo</td></tr>
        <tr><td>Volante</td><td>La rueda del costado: mueve la aguja a mano</td></tr>
        <tr><td>Pedal</td><td>Más apretado, más rápido</td></tr>
      </table>
      <p><strong>Cómo se forma la puntada:</strong> la aguja baja con el hilo de arriba, un gancho de abajo lo enlaza con el hilo de la canilla y se forma un nudito dentro de la tela. Por eso hacen falta los dos hilos bien puestos.</p>
      <p><strong>El volante siempre hacia vos:</strong> giralo hacia adelante, nunca hacia atrás, porque se puede enredar el hilo de abajo.</p>
      <p><strong>Buscá el manual:</strong> si no lo tenés, muchas marcas lo publican gratis en internet con el modelo de la máquina.</p>
      <p>Por ejemplo, la máquina heredada de Marta no tenía manual. Buscó la marca y el modelo, que estaban en una chapita atrás, y lo encontró en la página del fabricante.</p>` },
    { titulo: "Enhebrar y poner la canilla", video: {"id":"lBMUAfiKjQg","t":"Cómo enhebrar la máquina de coser y cómo hacer la canilla · Divina Costura (8:17)"}, html: `
      <p class="idea">Muchos problemas de la máquina son de <strong>enhebrado</strong>. Enhebrá siempre con el <strong>prensatelas levantado</strong> y en el orden que marcan los números o flechas de tu máquina.</p>
      <pre><code>Hilo de arriba (el orden general; seguí las marcas de tu máquina):
1. Prensatelas ARRIBA (así se abren los discos de tensión).
2. Aguja en su punto más alto (girá el volante hacia vos).
3. Carretel → primera guía → baja por los discos de tensión
   → sube y pasa por el tirahilo → baja por las guías
   → ojo de la aguja (casi siempre de adelante hacia atrás).

Canilla:
4. Llenala con la devanadora, la pieza de arriba que la hace girar.
   Que no quede ni floja ni rebalsada.
5. Ponela en su lugar respetando el sentido que marca la máquina.

Subir el hilo de abajo:
6. Sostené la punta del hilo de arriba y dale una vuelta
   al volante hacia vos: sale un lazo del hilo de abajo.
7. Tirá de ese lazo y dejá los dos hilos hacia atrás.</code></pre>
      <p><strong>Desenchufá la máquina</strong> mientras cambiás la aguja o abrís la tapa de la canilla.</p>
      <p><strong>¿Por qué el prensatelas levantado?</strong> Si está bajo, los discos de tensión están cerrados y el hilo no entra entre ellos: después la costura sale con rulos abajo.</p>
      <p>Por ejemplo, a Marta la costura le salía llena de rulos del lado de abajo. Volvió a enhebrar el hilo de arriba con el prensatelas levantado y quedó perfecta.</p>` },
    { titulo: "Puntada, tensión y aguja", html: `
      <p class="idea">Tres ajustes deciden cómo sale la costura: el <strong>largo de puntada</strong>, la <strong>tensión</strong> y la <strong>aguja</strong>.</p>
      <table>
        <tr><th>Largo de puntada</th><th>Para qué</th></tr>
        <tr><td>2 a 2,5 mm</td><td>Costuras comunes</td></tr>
        <tr><td>3 a 3,5 mm</td><td>Pespuntes que se ven, telas gruesas</td></tr>
        <tr><td>4 a 5 mm</td><td>Hilván a máquina, fruncir</td></tr>
      </table>
      <p><strong>Tensión:</strong> en muchas máquinas el número de partida es alrededor de 4 (mirá tu manual). Cosé una prueba en un retazo doble y mirá los dos lados:</p>
      <table>
        <tr><th>Qué ves</th><th>Qué pasa</th><th>Qué hacés</th></tr>
        <tr><td>Puntadas iguales de los dos lados</td><td>Tensión justa</td><td>Nada</td></tr>
        <tr><td>Rulos del lado de abajo</td><td>El hilo de arriba está flojo o mal enhebrado</td><td>Enhebrá de nuevo; después subí la tensión</td></tr>
        <tr><td>Se ve el hilo de abajo arriba y la tela se frunce</td><td>Tensión de arriba muy alta</td><td>Bajala de a medio número</td></tr>
      </table>
      <p><strong>Agujas de máquina:</strong> al revés que las de mano, <strong>número más alto, aguja más gruesa</strong>.</p>
      <pre><code>70/10  → telas finas
80/12  → algodón común
90/14  → jean liviano, lona
100/16 → jean grueso
Punta bola (ballpoint) → tejidos de punto, como la remera</code></pre>
      <p>Cambiá la aguja al empezar cada proyecto grande: una aguja gastada saltea puntadas.</p>
      <p>Por ejemplo, Marta quería coser un jean con la aguja 70 que venía puesta y se le quebró. Con una 100 cosió sin problemas.</p>` },
  ],
  practica: [
    "Ubicá en tu máquina las 9 partes de la tabla y anotá dónde está cada una.",
    "Enhebrá la máquina y llená una canilla 3 veces seguidas, y anotá cuántos minutos tardaste la última vez.",
    "Cosé 3 líneas de prueba en un retazo doble con largos de 2, 3 y 4 mm, y anotá en qué número de tensión las puntadas quedaron iguales de los dos lados.",
  ],
  recursos: [
    { t: "Universidad de Kentucky (Extensión): mantenimiento y problemas de la máquina de coser (PDF, en inglés)", url: "https://fcs.mgcafe.uky.edu/sites/fcs.mgcafe.uky.edu/files/ct-mmb-205.pdf" },
    { t: "Texas A&M (Extensión): guía de seguridad para costura (PDF, en inglés)", url: "https://d34-h.tamu.edu/files/2021/01/DudsDazzle_Resource_Safety_Guide.pdf" },
  ],
  quiz: [
    { q: "Querés bajar la aguja despacio, sin usar el pedal. ¿Qué movés?", opciones: ["El volante hacia atrás","El prensatelas","El volante, hacia vos","El tirahilo con la mano"], correcta: 2, explicacion: "El volante hacia vos mueve la aguja. Hacia atrás tienta, pero puede enredar el hilo de abajo." },
    { q: "¿Qué parte mueve la tela hacia atrás mientras cosés?", opciones: ["Los dientes de arrastre","La aguja","El pedal","La canilla"], correcta: 0, explicacion: "Los dientes arrastran la tela. La aguja tienta porque se mueve, pero sube y baja." },
    { q: "No tenés el manual de tu máquina. ¿Qué hacés?", opciones: ["Cosés sin saber nada","Desarmás la máquina","La tirás","Buscás la marca y el modelo y lo bajás de la página del fabricante"], correcta: 3, explicacion: "Muchas marcas lo publican gratis. Coser sin saber tienta, pero perdés tiempo en problemas." },
    { q: "Vas a enhebrar el hilo de arriba. ¿Cómo tiene que estar el prensatelas?", opciones: ["Bajo, para que no se mueva","Levantado, para que se abran los discos de tensión","Sacado","Da igual"], correcta: 1, explicacion: "Con el pie arriba el hilo entra en los discos. \"Bajo\" tienta porque parece más firme, pero el hilo queda sin tensión." },
    { q: "La costura sale con rulos del lado de abajo. ¿Qué revisás primero?", opciones: ["Cambiar la canilla por otra","Coser más rápido","El enhebrado de arriba, con el prensatelas levantado","Usar tela más gruesa"], correcta: 2, explicacion: "Los rulos abajo suelen ser falta de tensión arriba. Cambiar la canilla tienta porque los rulos están abajo, pero la causa está arriba." },
    { q: "Vas a abrir la tapa de la canilla para limpiar. ¿Qué hacés antes?", opciones: ["Desenchufás la máquina","Apretás el pedal para ver mejor","La dejás encendida","Nada"], correcta: 0, explicacion: "Sin corriente no arranca. Dejarla encendida tienta por comodidad, pero un pedal pisado lastima." },
    { q: "Hilo de arriba listo y canilla puesta. ¿Cómo subís el hilo de abajo?", opciones: ["Tirás de la canilla con fuerza","Cosés sin subirlo","Lo pasás por el ojo de la aguja","Sostenés el de arriba y das una vuelta al volante hacia vos"], correcta: 3, explicacion: "La vuelta del volante saca un lazo del hilo de abajo. Tirar de la canilla tienta, pero la desacomoda." },
    { q: "Vas a coser una costura común en algodón. ¿Qué largo de puntada usás?", opciones: ["5 mm","Entre 2 y 2,5 mm","0,5 mm","El más largo que tenga"], correcta: 1, explicacion: "2 a 2,5 mm es lo común. 5 mm tienta por rápido, pero es largo de hilván." },
    { q: "En la prueba, la tela se frunce y el hilo de abajo se ve arriba. ¿Qué hacés?", opciones: ["La subís al máximo","Cambiás de tela","Bajás la tensión de arriba de a medio número","Cosés más fuerte"], correcta: 2, explicacion: "Tensión alta frunce. Subirla tienta si pensás que \"falta fuerza\", pero empeora." },
    { q: "Vas a coser un jean grueso. ¿Qué aguja de máquina ponés?", opciones: ["Una 100/16","Una 70/10","Una aguja de mano","La que venga puesta"], correcta: 0, explicacion: "En máquina, número alto es gruesa. La 70 tienta si pensás como en las de mano, pero se quiebra." },
    { q: "Vas a coser tela de remera, que estira. ¿Qué aguja usás?", opciones: ["La más fina que tengas","Una 100/16 de punta común","Ninguna, a mano siempre","Punta bola (ballpoint)"], correcta: 3, explicacion: "La punta bola no rompe el tejido de punto. La más fina tienta por delicada, pero corta los hilos." },
    { q: "Tu máquina empezó a saltear puntadas en la mitad del proyecto. ¿Qué probás primero?", opciones: ["Comprar otra máquina","Cambiar la aguja por una nueva","Aceite de cocina","Coser más rápido"], correcta: 1, explicacion: "Una aguja gastada saltea puntadas. Otra máquina tienta por frustración, pero casi siempre es la aguja." },
  ],
},
{
  id: "costuras",
  icono: "📏",
  titulo: "Costuras rectas y terminaciones",
  nivel: "Intermedio",
  objetivos: [
    "Coser recto respetando el margen de costura y rematar al empezar y terminar",
    "Planchar las costuras y terminar los bordes para que no se deshilachen",
    "Coser esquinas y curvas que queden prolijas del derecho",
  ],
  lecciones: [
    { titulo: "Coser recto", video: {"id":"m6Bda8bTNxk","t":"Operaciones básicas en máquina plana: costuras rectas · SENA (2:53)"}, html: `
      <p class="idea">Para coser recto no mirás la aguja: mirás el <strong>borde de la tela</strong> contra una <strong>guía</strong> de la placa. La distancia entre la costura y el borde es el <strong>margen de costura</strong>.</p>
      <p>La placa de la máquina tiene rayitas con números: son las distancias desde la aguja, en milímetros o pulgadas. Si no tiene, pegá una cinta de papel a la distancia que quieras.</p>
      <table>
        <tr><th>Margen de costura</th><th>Cuándo</th></tr>
        <tr><td>1 cm</td><td>Bolsas, almohadones, proyectos simples (lo usamos en este curso)</td></tr>
        <tr><td>1,5 cm</td><td>El más común en moldes de ropa comprados</td></tr>
      </table>
      <pre><code>Una costura completa:
1. Alfileres cada 10 cm, con la cabeza hacia afuera.
2. Tela bajo el pie; borde contra la guía de 1 cm.
3. Bajá el prensatelas.
4. 3 o 4 puntadas, 3 o 4 hacia atrás, y seguí (rematar).
5. Cosé parejo, sacando cada alfiler antes del pie.
6. Al final, otra vez 3 o 4 puntadas hacia atrás.
7. Levantá el pie y cortá los hilos.</code></pre>
      <p><strong>Rematar</strong> a máquina es dar unas puntadas hacia atrás con la palanca de retroceso: así la costura no se suelta en las puntas.</p>
      <p><strong>Practicá en papel:</strong> sin hilo, cosé sobre líneas dibujadas en una hoja. Los agujeritos te muestran si vas recto.</p>
      <p>Por ejemplo, Marta pegó una cinta de papel a 1 cm de la aguja. Sus costuras pasaron de ondular 3 o 4 mm a quedar rectas.</p>` },
    { titulo: "Planchar y terminar bordes", html: `
      <p class="idea">Una costura queda prolija por dos cosas: el <strong>planchado</strong> y la <strong>terminación</strong> del borde cortado. Sin ellas, la prenda parece casera y se deshilacha.</p>
      <p><strong>Planchar cada costura antes de cruzarla con otra.</strong> Primero planchá la costura cerrada, como quedó, y después abrí los márgenes con la punta de la plancha.</p>
      <table>
        <tr><th>Terminación</th><th>Cómo</th><th>Cuándo</th></tr>
        <tr><td>Zigzag</td><td>Puntada zigzag sobre el borde de cada margen</td><td>Casi siempre: la más fácil</td></tr>
        <tr><td>Tijera zigzag</td><td>Cortar el borde con una tijera de dientes</td><td>Telas que se deshilachan poco</td></tr>
        <tr><td>Costura francesa</td><td>Coser revés con revés, recortar, dar vuelta y coser derecho con derecho</td><td>Telas finas: el borde queda encerrado</td></tr>
        <tr><td>Overlock</td><td>Máquina especial que cose, corta y envuelve el borde</td><td>Ropa de trabajo y de punto</td></tr>
      </table>
      <p><strong>Ajuste de la plancha:</strong> usá la temperatura de la tela (algodón, alta; sintéticos, baja). Probá primero en un retazo: una tela sintética se derrite.</p>
      <p>Por ejemplo, Marta hizo una funda sin terminar los bordes. Después de 3 lavados, los márgenes estaban deshilachados. En la segunda pasó zigzag por cada margen y quedó intacta.</p>` },
    { titulo: "Esquinas y curvas", html: `
      <p class="idea">En una <strong>esquina</strong> se gira con la aguja clavada. En una <strong>curva</strong> se va despacio. Y en las dos, se recorta el margen para que queden prolijas al dar vuelta la tela.</p>
      <pre><code>Esquina:
1. Cosé hasta 1 cm del borde que viene (el margen).
2. Dejá la aguja CLAVADA en la tela.
3. Levantá el prensatelas y girá la tela 90 grados.
4. Bajá el prensatelas y seguí.
5. Antes de dar vuelta: cortá la punta del margen
   en diagonal, sin cortar la costura.</code></pre>
      <p><strong>Las curvas:</strong> cosé despacio, girando la tela de a poco, sin estirarla.</p>
      <table>
        <tr><th>Curva</th><th>Recorte</th><th>Por qué</th></tr>
        <tr><td>Hacia adentro, como un escote</td><td>Piquetes: cortecitos rectos hasta 2 mm de la costura</td><td>El margen se abre y la curva no tira</td></tr>
        <tr><td>Hacia afuera, como una punta redonda</td><td>Muescas: triangulitos</td><td>Sacan tela que sobraría y haría bulto</td></tr>
      </table>
      <p><strong>Nunca cortes la costura</strong> al hacer piquetes: dejá siempre 2 mm. Si la cortás, se abre un agujero del derecho.</p>
      <p><strong>Para sacar bien las esquinas</strong> después de dar vuelta, empujalas desde adentro con un palito de brochette sin punta o un lápiz. No uses tijeras: rompen la tela.</p>
      <p>Por ejemplo, la primera funda de almohadón de Marta tenía esquinas redondeadas y abultadas. En la segunda cortó el margen de cada esquina en diagonal y quedaron en punta.</p>` },
  ],
  practica: [
    "Practicá en papel: dibujá 3 líneas rectas, una curva y un cuadrado, cosé sin hilo encima y anotá cuántos milímetros te desviaste como máximo.",
    "Uní dos retazos con margen de 1 cm, rematando al principio y al final, planchá la costura abierta y terminá cada margen con zigzag. Medí y anotá el margen en 3 puntos.",
    "Cosé un cuadrado de 15 cm con esquinas giradas con la aguja clavada, recortá las esquinas en diagonal, dalo vuelta y anotá cuántas esquinas quedaron en punta.",
  ],
  recursos: [
    { t: "Cursa: curso gratis de costura para principiantes", url: "https://cursa.app/es/curso-gratis/costura-para-principiantes-bead" },
    { t: "Universidad de Kentucky (Extensión): mantenimiento y problemas de la máquina de coser (PDF, en inglés)", url: "https://fcs.mgcafe.uky.edu/sites/fcs.mgcafe.uky.edu/files/ct-mmb-205.pdf" },
  ],
  quiz: [
    { q: "Querés coser recto. ¿Adónde mirás?", opciones: ["A la aguja","Al pedal","Al borde de la tela contra la guía de la placa","Al carretel"], correcta: 2, explicacion: "La guía marca el margen. Mirar la aguja tienta porque es lo que se mueve, pero así se tuerce." },
    { q: "Tu placa no tiene marcas de distancia. ¿Qué hacés?", opciones: ["Pegás una cinta de papel a la distancia del margen","Cosés a ojo","Comprás otra máquina","Marcás la placa con un clavo"], correcta: 0, explicacion: "La cinta funciona como guía. Coser a ojo tienta, pero sale ondulado." },
    { q: "Si en este curso hacés una bolsa, ¿qué margen de costura usás?", opciones: ["5 cm","1 mm","Ninguno","1 cm"], correcta: 3, explicacion: "En proyectos simples usamos 1 cm. 1 mm tienta para no perder tela, pero la costura se sale." },
    { q: "Al empezar y al terminar una costura a máquina, ¿qué hacés?", opciones: ["Nada","Rematás: 3 o 4 puntadas hacia atrás","Un nudo grande con los dedos","Cortás el hilo pegado a la tela"], correcta: 1, explicacion: "El remate evita que se suelte. \"Nada\" tienta, pero las puntas se descosen." },
    { q: "Querés practicar coser recto sin gastar tela ni hilo. ¿Qué hacés?", opciones: ["Cosés en el aire","Mirás videos solamente","Cosés sin hilo sobre líneas dibujadas en papel","Usás la tela más cara"], correcta: 2, explicacion: "Los agujeritos en el papel muestran si vas recto. Solo mirar videos tienta, pero la mano aprende practicando." },
    { q: "Cosiste una costura. ¿Cuándo la planchás?", opciones: ["Antes de cruzarla con otra costura","Al final de todo","Nunca","Solo si se ve torcida"], correcta: 0, explicacion: "Planchar a medida que cosés deja todo prolijo. Al final tienta por ahorrar tiempo, pero ya no se puede abrir." },
    { q: "Querés que los márgenes no se deshilachen y no tenés overlock. ¿Qué hacés?", opciones: ["Los dejás así","Los pegás con plasticola","Los quemás con un fósforo","Pasás zigzag por el borde de cada margen"], correcta: 3, explicacion: "El zigzag es lo más fácil. Quemarlos tienta, pero es peligroso y en algodón no funciona." },
    { q: "Vas a coser una tela muy fina y querés el borde encerrado. ¿Qué terminación usás?", opciones: ["Tijera zigzag","Costura francesa","Ninguna","Hilván"], correcta: 1, explicacion: "La francesa encierra el borde. La tijera zigzag tienta por rápida, pero el borde queda a la vista." },
    { q: "Vas a planchar una tela sintética por primera vez. ¿Qué hacés?", opciones: ["Plancha al máximo directo","Plancha con vapor fuerte sin probar","Probás con la plancha baja en un retazo","No planchás nunca"], correcta: 2, explicacion: "Los sintéticos se derriten. Al máximo tienta porque plancha rápido, pero puede arruinar la tela." },
    { q: "Llegás a una esquina cosiendo. ¿Cómo girás?", opciones: ["Con la aguja clavada, levantás el pie y girás","Sacás la aguja y empezás de nuevo","Girás sin levantar el pie","Cosés en diagonal"], correcta: 0, explicacion: "La aguja clavada mantiene la esquina exacta. Sin levantar el pie tienta por rápido, pero tuerce la tela." },
    { q: "Cosiste un escote, que es una curva hacia adentro. ¿Qué le hacés al margen?", opciones: ["Nada","Cortes hasta la costura","Lo cosés de nuevo encima","Piquetes rectos hasta 2 mm de la costura"], correcta: 3, explicacion: "Los piquetes dejan que la curva se abra. Cortar hasta la costura tienta para que abra más, pero se agujerea." },
    { q: "Querés sacar bien la esquina después de dar vuelta la funda. ¿Qué usás?", opciones: ["La punta de la tijera","Un palito de brochette sin punta, desde adentro","Un cuchillo","Nada, queda redonda y listo"], correcta: 1, explicacion: "El palito empuja sin romper. La tijera tienta por tener punta, pero agujerea la tela." },
  ],
},
{
  id: "moldes",
  icono: "📐",
  titulo: "Medidas, moldes y corte",
  nivel: "Intermedio",
  objetivos: [
    "Tomar las medidas principales del cuerpo con la cinta métrica",
    "Leer un molde: talle, línea de hilo, doblez, piquetes y márgenes",
    "Ubicar las piezas en la tela, cortarlas y pasar las marcas",
  ],
  lecciones: [
    { titulo: "Tomar medidas", video: {"id":"37QzsZLW_RE","t":"Cómo tomar medidas para trazar patrones · Coser fácil y más Menudo Numerito (8:53)"}, html: `
      <p class="idea">Las medidas se toman con la <strong>cinta métrica floja, sin apretar</strong>, paralela al piso y sobre ropa fina. Si te las toma otra persona, salen mucho mejor.</p>
      <table>
        <tr><th>Medida</th><th>Dónde se toma</th></tr>
        <tr><td>Busto o pecho</td><td>Por la parte más ancha, pasando por debajo de los brazos</td></tr>
        <tr><td>Cintura</td><td>Por la parte más angosta del torso</td></tr>
        <tr><td>Cadera</td><td>Por la parte más ancha, unos 20 cm debajo de la cintura</td></tr>
        <tr><td>Largo de pantalón</td><td>Por el costado, de la cintura al piso, descalzo</td></tr>
        <tr><td>Largo de manga</td><td>Del hombro a la muñeca, con el brazo apenas doblado</td></tr>
      </table>
      <p><strong>Truco para la cintura:</strong> atá un hilo o un elástico finito y movete un poco: se acomoda solo en la parte más angosta.</p>
      <pre><code>Medidas de Marta (anotadas con fecha):
Busto:   96 cm
Cintura: 78 cm
Cadera: 102 cm
Fecha:   marzo</code></pre>
      <p><strong>Anotá la fecha:</strong> el cuerpo cambia. Si volvés a coser en unos meses, medite de nuevo.</p>
      <p><strong>Las medidas no son el talle:</strong> cada molde tiene su tabla de talles. Elegí el talle por tus medidas, no por el que usás en las tiendas: los números no coinciden entre marcas.</p>
      <p>Por ejemplo, Marta compra talle M en las tiendas, pero con sus medidas, en la tabla del molde le corresponde el talle 44.</p>` },
    { titulo: "Leer un molde", html: `
      <p class="idea">Un <strong>molde</strong> (o patrón) es el dibujo de cada pieza en papel, para copiarla en la tela. Trae marcas que dicen cómo ubicarla y cortarla.</p>
      <table>
        <tr><th>Marca</th><th>Qué significa</th></tr>
        <tr><td>Flecha larga ↕</td><td>Línea de hilo: va paralela al orillo</td></tr>
        <tr><td>"Al doblez" o una flecha con puntas hacia el borde</td><td>Ese borde va sobre el doblez de la tela: la pieza sale entera y simétrica</td></tr>
        <tr><td>"Cortar 2"</td><td>Cuántas piezas iguales cortar</td></tr>
        <tr><td>Piquetes (triangulitos o rayitas en el borde)</td><td>Puntos que tienen que coincidir al unir piezas</td></tr>
        <tr><td>Varias líneas de contorno</td><td>Un contorno por talle</td></tr>
      </table>
      <p><strong>¿Trae el margen o no?</strong> Leelo en las instrucciones. Algunos moldes ya incluyen el margen de costura; otros no, y hay que sumarlo al cortar. Es el error más común.</p>
      <p><strong>Calcá antes de cortar:</strong> pasá tu talle a papel madera o papel manteca y cortá esa copia. Así el molde original sirve para otros talles.</p>
      <p>Por ejemplo, el molde de delantal que bajó Marta decía "margen no incluido". Sumó 1 cm alrededor de cada pieza al marcar la tela, y el delantal le quedó del tamaño justo.</p>` },
    { titulo: "Ubicar, cortar y marcar", html: `
      <p class="idea">Antes de cortar, <strong>ubicá todas las piezas</strong> en la tela para ver si entran. Recién después cortá, con la tela apoyada en la mesa.</p>
      <pre><code>1. Tela lavada, planchada y doblada al medio a lo largo,
   derecho con derecho, orillo con orillo.
2. Ubicá todas las piezas con la línea de hilo paralela
   al orillo (medí con la cinta en los dos extremos).
3. Las piezas "al doblez", contra el doblez.
4. Sujetá con alfileres o con pesos (latas, piedras planas).
5. Marcá el contorno con tiza (y el margen si no está incluido).
6. Cortá con la tijera apoyada en la mesa,
   con cortes largos, sin levantar la tela.
7. Pasá los piquetes con un cortecito de 3 mm en el margen.</code></pre>
      <p><strong>Medí dos veces, cortá una.</strong> Un error de corte no se arregla: hay que volver a comprar tela.</p>
      <p><strong>Telas con dibujo:</strong> si el estampado tiene un sentido (flores para arriba, animales), todas las piezas van en la misma dirección.</p>
      <p><strong>¿Cuánta tela comprar?</strong> Ubicá las piezas sobre el piso en un rectángulo del ancho de la tela, que en general es 1,50 m, y medí el largo que ocupan. Sumá 10 cm por si se achica al lavar.</p>
      <p>Por ejemplo, Marta ubicó las piezas del delantal en un rectángulo de 1,50 m de ancho: ocuparon 80 cm de largo. Compró 90 cm.</p>` },
  ],
  practica: [
    "Tomá tus medidas de busto, cintura y cadera con ayuda de alguien y anotá cada una con la fecha.",
    "Buscá un molde gratis o en una revista, calcá tu talle en papel y anotá qué marcas trae y si incluye el margen.",
    "Ubicá las piezas de un molde en el piso, en un rectángulo de 1,50 m de ancho, y anotá cuántos centímetros de tela necesitarías.",
  ],
  recursos: [
    { t: "Cursa: curso gratis de costura para principiantes", url: "https://cursa.app/es/curso-gratis/costura-para-principiantes-bead" },
    { t: "Ohio State University (Extensión): normas de seguridad para coser (PDF, en inglés)", url: "https://wayne.osu.edu/sites/wayne/files/imce/Safety%20rules.pdf" },
  ],
  quiz: [
    { q: "Te tomás la medida de cintura. ¿Cómo va la cinta?", opciones: ["Bien apretada","En diagonal","Floja, sin apretar, paralela al piso","Sobre un buzo grueso"], correcta: 2, explicacion: "Apretada da una medida más chica de la real. Apretar tienta para \"que entre\", pero después la prenda aprieta." },
    { q: "Si querés medir la cadera, ¿por dónde pasás la cinta?", opciones: ["Por la parte más ancha, unos 20 cm debajo de la cintura","Por la cintura","Por las rodillas","Por donde quede más cómodo"], correcta: 0, explicacion: "La cadera es la parte más ancha. La cintura tienta porque está cerca, pero es la más angosta." },
    { q: "No encontrás tu cintura. ¿Qué truco usás?", opciones: ["Medís la cadera dos veces","Adivinás","Usás la medida de una amiga","Atás un hilo y te movés: se acomoda en la parte más angosta"], correcta: 3, explicacion: "El hilo encuentra la cintura solo. Adivinar tienta por rápido, pero el molde queda mal." },
    { q: "Vas a usar un molde. ¿Cómo elegís el talle?", opciones: ["Por el talle que usás en las tiendas","Por tus medidas, en la tabla del molde","El más grande, por las dudas","El del medio siempre"], correcta: 1, explicacion: "Los talles no coinciden entre marcas. El de tiendas tienta porque lo conocés, pero el número es otro." },
    { q: "Si en el molde ves una flecha larga, ¿qué te dice?", opciones: ["Hacia dónde se cose","Dónde va el bolsillo","Es la línea de hilo: va paralela al orillo","Hacia dónde se plancha"], correcta: 2, explicacion: "La flecha ubica la pieza al hilo. \"Hacia dónde se cose\" tienta, pero no indica eso." },
    { q: "Si la pieza dice \"al doblez\", ¿cómo la ubicás?", opciones: ["Con ese borde sobre el doblez de la tela","Sobre el orillo","En diagonal","Cortando ese borde con margen"], correcta: 0, explicacion: "Así sale entera y simétrica. Sobre el orillo tienta porque es un borde, pero quedaría en dos partes." },
    { q: "Si el molde dice \"margen no incluido\", ¿qué hacés?", opciones: ["Cortás justo por la línea","Restás un centímetro","Lo ignorás","Sumás el margen alrededor al marcar la tela"], correcta: 3, explicacion: "Sin sumarlo, la prenda queda chica. Cortar justo tienta por exacto, pero falta lugar para coser." },
    { q: "Querés que el molde original te sirva para otros talles. ¿Qué hacés?", opciones: ["Cortás el original por tu talle","Calcás tu talle en papel y cortás la copia","Lo doblás","Lo pegás en la tela"], correcta: 1, explicacion: "La copia guarda el original entero. Cortar el original tienta por rápido, pero perdés los otros talles." },
    { q: "Si querés ubicar una pieza al hilo, ¿cómo lo verificás?", opciones: ["A ojo","Con la regla del piso","Midiendo de la flecha al orillo en los dos extremos: tiene que dar igual","Mirando el estampado"], correcta: 2, explicacion: "Si da igual en los dos extremos, está paralela. A ojo tienta, pero se tuerce unos grados." },
    { q: "Vas a cortar la tela. ¿Cómo usás la tijera?", opciones: ["Apoyada en la mesa, con cortes largos, sin levantar la tela","Levantando la tela en el aire","Con cortecitos chiquitos","Con la tijera de papel"], correcta: 0, explicacion: "Apoyada no se mueve la tela. Levantarla tienta para ver mejor, pero el corte se desvía." },
    { q: "Tu tela tiene flores que van hacia arriba. ¿Cómo ubicás las piezas?", opciones: ["Como entren mejor","La mitad al revés para ahorrar","Da igual","Todas en la misma dirección"], correcta: 3, explicacion: "Si no, en una parte las flores quedan cabeza abajo. \"Como entren mejor\" tienta por ahorrar tela, pero se nota." },
    { q: "Las piezas ocupan 80 cm de largo en un ancho de 1,50 m. ¿Cuánta tela comprás?", opciones: ["80 cm justos","Unos 90 cm, sumando 10 cm por si se achica","3 metros","40 cm"], correcta: 1, explicacion: "Los 10 cm extra cubren lo que se achica al lavar. Justo tienta por ahorrar, pero puede faltar." },
  ],
},
{
  id: "proyectos",
  icono: "👜",
  titulo: "Primeros proyectos",
  nivel: "Intermedio",
  objetivos: [
    "Coser una bolsa de tela con asas, de punta a punta",
    "Coser una funda de almohadón con abertura de sobre, sin cierre",
    "Calcular cuánta tela lleva cada proyecto antes de comprar",
  ],
  lecciones: [
    { titulo: "La bolsa de tela", video: {"id":"ppfMF5bH0Hk","t":"Cómo hacer una tote bag: tutorial fácil y rápido · Andrea Aguilar (4:19)"}, html: `
      <p class="idea">La <strong>bolsa de tela</strong> es el mejor primer proyecto: son rectángulos y costuras rectas, y se usa todos los días. Margen de costura: 1 cm.</p>
      <table>
        <tr><th>Pieza</th><th>Medida de corte</th><th>Cantidad</th></tr>
        <tr><td>Cuerpo</td><td>40 × 45 cm</td><td>2</td></tr>
        <tr><td>Asa</td><td>8 × 60 cm</td><td>2</td></tr>
      </table>
      <pre><code>1. Asas: doblá los bordes largos hacia el centro, planchá,
   doblá por la mitad y planchá. Queda una tira de 2 cm.
   Cosé a 2 mm del borde por los dos lados.
2. Cuerpo: derecho con derecho, cosé los costados y el fondo
   a 1 cm, rematando. Terminá los márgenes con zigzag.
3. Boca: doblá 1 cm hacia el revés, planchá,
   doblá 2 cm más, planchá (dobladillo doble de 3 cm).
4. Meté las puntas de cada asa debajo del dobladillo,
   a 9 cm de cada costura del costado.
5. Cosé el dobladillo por todo el contorno.
6. Subí las asas y hacé otra costura arriba,
   pasando sobre ellas: así aguantan peso.
7. Dala vuelta y planchá.</code></pre>
      <p><strong>Tamaño final:</strong> 38 cm de ancho (40 menos 1 cm de cada costado) y 41 cm de alto (45 menos 1 cm del fondo y 3 cm del dobladillo).</p>
      <p>Un <strong>dobladillo</strong> es un borde doblado dos veces y cosido, para que el corte quede escondido.</p>
      <p>Por ejemplo, la primera bolsa de Marta le llevó 2 horas. La tercera, 50 minutos.</p>` },
    { titulo: "La funda de almohadón", html: `
      <p class="idea">La funda con <strong>abertura de sobre</strong> no lleva cierre: la parte de atrás son dos piezas que se superponen. Para un almohadón de 40 × 40 cm.</p>
      <table>
        <tr><th>Pieza</th><th>Medida de corte</th><th>Cantidad</th></tr>
        <tr><td>Frente</td><td>42 × 42 cm</td><td>1</td></tr>
        <tr><td>Espalda</td><td>42 × 28 cm</td><td>2</td></tr>
      </table>
      <pre><code>¿De dónde salen las medidas?
Frente: 40 cm + 1 cm de margen de cada lado = 42 cm.
Espalda: cada pieza de 28 cm pierde 2 cm en su dobladillo
(1 + 1) y queda de 26 cm. Dos de 26 = 52 cm,
superpuestas 10 cm → cubren los 42 cm del frente.</code></pre>
      <pre><code>1. En un borde largo de cada pieza de espalda,
   dobladillo doble de 1 + 1 cm. Cosé.
2. Frente con el derecho hacia arriba.
3. Encima, las dos espaldas con el derecho hacia abajo,
   los dobladillos hacia el centro, superpuestas.
4. Alfileres y cosé todo el contorno a 1 cm.
5. Esquinas: girá con la aguja clavada y recortá en diagonal.
6. Zigzag en los márgenes, dala vuelta por la abertura,
   sacá las esquinas con un palito y planchá.</code></pre>
      <p><strong>Un almohadón queda mejor apretado:</strong> por eso la funda terminada mide lo mismo que el relleno, 40 cm, y no más.</p>
      <p>Por ejemplo, Marta hizo 4 fundas iguales para el sillón: las 12 piezas entraron en 1,40 m de una tela de 1,50 m de ancho, en 3 columnas de 42 cm. Compró 1,50 m, con los 10 cm por si se achicaba.</p>` },
    { titulo: "Calcular la tela", html: `
      <p class="idea">Antes de comprar, <strong>dibujá las piezas</strong> en un rectángulo del ancho de la tela. Así sabés cuántos centímetros pedir y no te sobra ni te falta.</p>
      <pre><code>Bolsa en tela de 150 cm de ancho:
┌──────────────────── 150 cm ─────────────────────┐
│ ┌─────────┐ ┌─────────┐ ┌──┐┌──┐               │
│ │ Cuerpo  │ │ Cuerpo  │ │A ││A │               │ 60 cm
│ │ 40 × 45 │ │ 40 × 45 │ │s ││s │   (sobra)     │
│ └─────────┘ └─────────┘ │a ││a │               │
│                         └──┘└──┘               │
└────────────────────────────────────────────────┘
Ancho usado: 40 + 40 + 8 + 8 = 96 cm (entra en 150)
Largo: el más largo de todos, las asas de 60 cm
Comprar: 60 cm + 10 cm por si se achica = 70 cm</code></pre>
      <table>
        <tr><th>Proyecto</th><th>Tela de 1,50 m de ancho</th></tr>
        <tr><td>1 bolsa</td><td>70 cm</td></tr>
        <tr><td>4 fundas de 40 × 40</td><td>1,50 m</td></tr>
      </table>
      <p><strong>Si vas a hacer varias iguales,</strong> dibujá todas juntas: muchas veces entran 2 bolsas en casi el mismo largo que 1.</p>
      <p><strong>Los retazos que sobran</strong> sirven para practicar puntadas, probar la tensión o hacer bolsitas chicas.</p>
      <p>Por ejemplo, Marta quería hacer 2 bolsas. Al dibujarlas vio que los 4 cuerpos no entraban en 150 cm de ancho (necesitan 160 cm) y compró 1,20 m en vez de 70 cm.</p>` },
  ],
  practica: [
    "Cosé una bolsa de tela con las medidas de la lección y anotá cuánto tardaste y cuánto mide terminada.",
    "Cosé una funda de almohadón de sobre y anotá cuántos centímetros se superponen las dos espaldas.",
    "Dibujá en papel cuadriculado cómo ubicarías 2 bolsas en una tela de 150 cm de ancho y anotá cuánta tela comprarías.",
  ],
  recursos: [
    { t: "Cursa: curso gratis de costura para principiantes", url: "https://cursa.app/es/curso-gratis/costura-para-principiantes-bead" },
    { t: "Universidad de Kentucky (Extensión): mantenimiento y problemas de la máquina de coser (PDF, en inglés)", url: "https://fcs.mgcafe.uky.edu/sites/fcs.mgcafe.uky.edu/files/ct-mmb-205.pdf" },
  ],
  quiz: [
    { q: "Querés un primer proyecto fácil y útil. ¿Cuál elegís?", opciones: ["Un saco con forro","Un vestido de fiesta","Una bolsa de tela: rectángulos y costuras rectas","Un jean con bolsillos"], correcta: 2, explicacion: "La bolsa practica lo básico. El vestido tienta porque luce, pero lleva curvas, ajuste y cierres." },
    { q: "Cortás el cuerpo de la bolsa de 40 cm de ancho y cosés los costados a 1 cm. ¿Cuánto mide de ancho terminada?", opciones: ["38 cm","40 cm","42 cm","39 cm"], correcta: 0, explicacion: "Se pierde 1 cm de cada lado. 39 tienta si restás un solo costado, pero son dos." },
    { q: "Si querés que las asas aguanten peso, ¿qué hacés?", opciones: ["Las pegás","Las cosés con una sola puntada","Las atás con un nudo","Las coses en el dobladillo y otra vez más arriba, pasando sobre ellas"], correcta: 3, explicacion: "La doble costura reparte la fuerza. Una sola puntada tienta por rápido, pero se arranca." },
    { q: "¿Qué es un dobladillo?", opciones: ["Una costura en diagonal","Un borde doblado dos veces y cosido, con el corte escondido","Un tipo de aguja","Un piquete"], correcta: 1, explicacion: "El doble doblez esconde el corte. Piquete tienta porque también es del borde, pero es un corte." },
    { q: "Querés una funda de almohadón sin cierre. ¿Cómo la hacés?", opciones: ["Cosida por los 4 lados sin abertura","Con un solo rectángulo enorme","Con la espalda en dos piezas que se superponen (sobre)","Con velcro pegado"], correcta: 2, explicacion: "El sobre deja meter el almohadón. Cerrada por los 4 lados tienta por fácil, pero no entra el relleno." },
    { q: "Si hacés la funda de un almohadón de 40 × 40 con margen de 1 cm, ¿de qué medida cortás el frente?", opciones: ["42 × 42 cm","40 × 40 cm","50 × 50 cm","41 × 41 cm"], correcta: 0, explicacion: "Se suma 1 cm por cada lado. 41 tienta si sumás un solo lado." },
    { q: "Si armás la funda de sobre, ¿cómo ponés las espaldas sobre el frente?", opciones: ["Con el derecho hacia arriba","Al lado del frente","Sin dobladillo","Con el derecho hacia abajo y los dobladillos hacia el centro"], correcta: 3, explicacion: "Derecho con derecho, y al dar vuelta queda bien. Hacia arriba tienta, pero al dar vuelta quedaría el revés afuera." },
    { q: "Si la funda queda más grande que el relleno, ¿qué pasa?", opciones: ["Queda mejor","El almohadón queda flojo y arrugado","No pasa nada","Se achica sola"], correcta: 1, explicacion: "Un almohadón luce apretado. \"Queda mejor\" tienta porque entra fácil, pero se ve desinflado." },
    { q: "Antes de comprar tela, ¿qué hacés?", opciones: ["Comprás 3 metros por las dudas","Comprás justo 1 metro siempre","Dibujás las piezas en un rectángulo del ancho de la tela","Preguntás al vendedor sin saber las piezas"], correcta: 2, explicacion: "El dibujo te dice el largo exacto. Tres metros tientan por seguridad, pero sobra mucha." },
    { q: "Las piezas de la bolsa ocupan 96 cm de ancho y 60 cm de largo. ¿Entran en una tela de 150 cm?", opciones: ["Sí: 96 cm es menos que 150","No, nunca","Solo si es de 200 cm","Depende del color"], correcta: 0, explicacion: "96 entra en 150. \"Nunca\" tienta si sumás también el largo, pero el largo va en otra dirección." },
    { q: "Querés 2 bolsas y los 4 cuerpos suman 160 cm de ancho. ¿Qué pasa con una tela de 150 cm?", opciones: ["Entran igual","Se cortan más angostos","Se cortan al bies","No entran en una fila: necesitás más largo de tela"], correcta: 3, explicacion: "160 es más que 150. Cortarlos más angostos tienta para que entren, pero la bolsa sale distinta." },
    { q: "Te sobraron retazos chicos. ¿Qué hacés con ellos?", opciones: ["Los tirás","Los usás para practicar y probar la tensión","Los usás como trapo de la máquina con aceite","Los quemás"], correcta: 1, explicacion: "Sirven para practicar sin gastar. Tirarlos tienta para ordenar, pero son útiles." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: coser para usar o vender",
  nivel: "Avanzado",
  objetivos: [
    "Coser un proyecto completo y revisarlo con una rúbrica",
    "Calcular el costo de una pieza y ponerle un precio",
    "Cuidar la máquina para que dure muchos años",
  ],
  lecciones: [
    { titulo: "El encargo y la rúbrica", html: `
      <p class="idea">El proyecto final es coser <strong>un juego de 2 piezas</strong>: 2 bolsas iguales, o una bolsa y una funda de la misma tela. Así practicás repetir con la misma calidad.</p>
      <p>Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si un trabajo está listo.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Medidas</td><td>Las 2 piezas miden lo planeado (± 5 mm)</td><td>Una se pasa</td><td>Las dos se pasan</td></tr>
        <tr><td>Costuras</td><td>Rectas y con margen parejo</td><td>Alguna onda</td><td>Torcidas o abiertas</td></tr>
        <tr><td>Remates</td><td>Todas rematadas</td><td>Falta alguna</td><td>Ninguna</td></tr>
        <tr><td>Terminaciones</td><td>Márgenes con zigzag o francesa</td><td>Algunos sin terminar</td><td>Ninguno</td></tr>
        <tr><td>Planchado</td><td>Planchado en cada paso</td><td>Solo al final</td><td>Sin planchar</td></tr>
        <tr><td>Esquinas y asas</td><td>Esquinas en punta y asas firmes</td><td>Una de las dos</td><td>Ninguna</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡listo para usar o vender!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a coser
Regla: si "Costuras" tiene 0, no se vende,
aunque el total sea alto.</code></pre>
      <p>Por ejemplo, el primer par de bolsas de Marta sacó 9: las asas de una se movían. Reforzó la costura de arriba y llegó a 11.</p>` },
    { titulo: "Cuánto cobrar", html: `
      <p class="idea">Para ponerle precio, sumá <strong>los materiales</strong>, <strong>tu tiempo</strong> y una <strong>ganancia</strong>. Si cobrás solo la tela, estás trabajando gratis.</p>
      <pre><code>Bolsa de tela (precios de ejemplo, inventados:
averiguá los de tu zona)

Materiales:
  Tela: 0,7 m × $8.000 el metro   = $5.600
  Hilo y aguja (parte)            =   $500
Tu tiempo:
  50 minutos ≈ 0,8 h × $6.000     = $4.800
Costo total                       = $10.900
Ganancia del 30 %                 =  $3.270
Precio                            ≈ $14.200</code></pre>
      <p><strong>El tiempo se mide de verdad:</strong> cronometrá cuánto tardás en la tercera o cuarta pieza, no en la primera, que siempre tarda más.</p>
      <p><strong>Comprá mejor si hacés varias:</strong> la tela por rollo o por varios metros suele ser más barata, y en un mismo largo entran más piezas.</p>
      <p><strong>Mirá el mercado:</strong> fijate cuánto cuestan bolsas parecidas en la feria o en internet. Si tu precio queda muy arriba, revisá si podés tardar menos o comprar la tela más barata, no bajes tu hora.</p>
      <p>Si lo hacés seguido, en este sitio están los cursos "Costos y precios: cuánto cobrar" y "Monotributo, facturación e impuestos para independientes".</p>
      <p>Por ejemplo, Marta cobraba sus bolsas al precio de la tela. Al sumar su tiempo, vio que perdía plata en cada venta y subió el precio.</p>` },
    { titulo: "Cuidar la máquina", html: `
      <p class="idea">La mayoría de los problemas de una máquina vienen de la <strong>pelusa</strong> y de la falta de cuidado. Unos minutos de limpieza la hacen durar décadas.</p>
      <table>
        <tr><th>Cada cuánto</th><th>Qué hacer</th></tr>
        <tr><td>Siempre</td><td>Taparla con una funda al guardarla (una funda de almohada sirve)</td></tr>
        <tr><td>Después de cada proyecto, o cada 6 a 8 horas de uso</td><td>Desenchufada, sacar la placa y limpiar la pelusa de la canilla y los dientes con un pincelito</td></tr>
        <tr><td>Cada proyecto grande</td><td>Aguja nueva</td></tr>
        <tr><td>Según el manual</td><td>Una gota de aceite para máquinas de coser donde indica</td></tr>
        <tr><td>Cada 2 años</td><td>Service con un técnico</td></tr>
      </table>
      <p><strong>Lo que no se hace:</strong></p>
      <ul>
        <li>Soplar adentro: la humedad del aliento oxida y la pelusa se mete más.</li>
        <li>Usar aceite de cocina o de auto: solo el de máquinas de coser.</li>
        <li>Forzar el volante si se trabó: desenchufá, sacá la placa y buscá el hilo enredado.</li>
      </ul>
      <p><strong>Hilo barato, problema caro:</strong> el hilo de mala calidad suelta más pelusa y se corta más seguido.</p>
      <p>Por ejemplo, la máquina heredada de Marta hacía ruido y se trababa. Al sacar la placa encontró una bola de pelusa del tamaño de una moneda. Después de limpiarla, cosió como nueva.</p>` },
  ],
  practica: [
    "Cosé el juego de 2 piezas y revisalo con la rúbrica. Anotá el puntaje de cada criterio y el total.",
    "Calculá el precio de una de tus piezas con la plantilla de la lección, con precios reales de tu zona, y anotá el resultado.",
    "Limpiá la zona de la canilla con la máquina desenchufada y anotá cuánta pelusa encontraste y cuándo vas a repetir la limpieza.",
  ],
  recursos: [
    { t: "Universidad de Kentucky (Extensión): mantenimiento y problemas de la máquina de coser (PDF, en inglés)", url: "https://fcs.mgcafe.uky.edu/sites/fcs.mgcafe.uky.edu/files/ct-mmb-205.pdf" },
    { t: "Texas A&M (Extensión): guía de seguridad para costura (PDF, en inglés)", url: "https://d34-h.tamu.edu/files/2021/01/DudsDazzle_Resource_Safety_Guide.pdf" },
    { t: "Ohio State University (Extensión): normas de seguridad para coser (PDF, en inglés)", url: "https://wayne.osu.edu/sites/wayne/files/imce/Safety%20rules.pdf" },
  ],
  quiz: [
    { q: "¿Por qué el proyecto final son 2 piezas iguales?", opciones: ["Para gastar más tela","Porque una sola no se puede vender","Para practicar repetir con la misma calidad","Para tardar más"], correcta: 2, explicacion: "Vender es repetir bien. \"Gastar más tela\" tienta como explicación, pero el objetivo es la constancia." },
    { q: "Si una bolsa mide 39 cm y la otra 41, y planeaste 40, ¿cuánto sacás en Medidas?", opciones: ["0: las dos se pasan de 5 mm","2: están cerca","1: una está bien","2: el promedio da 40"], correcta: 0, explicacion: "Cada una se pasa 1 cm. El promedio tienta, pero se mide cada pieza." },
    { q: "Revisás con la rúbrica y \"Costuras\" tiene 0, pero el total da 10. ¿Lo vendés?", opciones: ["Sí, 10 es buen puntaje","Sí, más barato","Sí, si no se nota de lejos","No: con costuras torcidas o abiertas no se vende"], correcta: 3, explicacion: "La regla de la rúbrica lo dice. Venderla más barata tienta, pero se abre con el uso y te reclaman." },
    { q: "Cobrás tus bolsas al precio de la tela. ¿Qué pasa?", opciones: ["Ganás mucho","Trabajás gratis: no cobrás tu tiempo","Está perfecto","Ganás el doble"], correcta: 1, explicacion: "Tu tiempo tiene valor. \"Está perfecto\" tienta porque vende fácil, pero no ganás nada." },
    { q: "Querés medir cuánto tardás en una bolsa para el precio. ¿Cuál cronometrás?", opciones: ["La primera","Una de un video","La tercera o cuarta, cuando ya tenés práctica","Ninguna, adivinás"], correcta: 2, explicacion: "La primera siempre tarda más. Cronometrar la primera tienta, pero el precio queda alto de más." },
    { q: "Si tu costo total es $10.000 y querés ganar 30 %, ¿cuál es el precio?", opciones: ["$13.000","$10.300","$30.000","$10.000"], correcta: 0, explicacion: "El 30 % de 10.000 es 3.000. $10.300 tienta si sumás 300, pero eso es el 3 %." },
    { q: "Tu precio queda muy arriba del de la feria. ¿Qué revisás primero?", opciones: ["Bajar el valor de tu hora a cero","Dejar de terminar los márgenes","Nada, que paguen","Si podés tardar menos o comprar la tela más barata"], correcta: 3, explicacion: "Mejorar el proceso cuida tu ganancia. Dejar de terminar tienta por rápido, pero baja la calidad." },
    { q: "Si vas a hacer 10 bolsas, ¿cómo comprás la tela?", opciones: ["De a 70 cm cada vez","Varios metros juntos, dibujando todas las piezas","Un color distinto por bolsa siempre","Sin medir"], correcta: 1, explicacion: "Por cantidad suele salir más barata y entran más piezas. De a 70 cm tienta por prudente, pero gastás más." },
    { q: "Vas a limpiar la zona de la canilla. ¿Qué hacés primero?", opciones: ["La dejás andando para que salga la pelusa","Soplás adentro","Desenchufás la máquina","Le echás agua"], correcta: 2, explicacion: "Sin corriente es seguro. Soplar tienta por rápido, pero la humedad oxida y mete la pelusa más adentro." },
    { q: "¿Qué aceite le ponés a la máquina?", opciones: ["Aceite para máquinas de coser, donde indica el manual","Aceite de cocina","Aceite de auto","Manteca"], correcta: 0, explicacion: "Solo el de máquinas. El de cocina tienta porque está a mano, pero se pone pegajoso y la traba." },
    { q: "¿Cada cuánto conviene llevar la máquina al técnico?", opciones: ["Nunca","Cada semana","Solo cuando se rompe del todo","Cada 2 años, para un service"], correcta: 3, explicacion: "Un service cada 2 años la mantiene. \"Solo cuando se rompe\" tienta por ahorrar, pero sale más caro." },
    { q: "Tu máquina se trabó en medio de una costura. ¿Qué hacés?", opciones: ["Forzás el volante","Desenchufás, sacás la placa y buscás el hilo enredado","Apretás el pedal a fondo","Le pegás"], correcta: 1, explicacion: "Suele ser hilo enredado abajo. Forzar tienta para destrabarla rápido, pero rompe piezas." },
  ],
},
];
