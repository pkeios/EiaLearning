// Temario del curso "Arreglos de ropa". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js arreglos-ropa y node tools/metodologia.js arreglos-ropa
window.TEMARIO = [
{
  id: "diagnostico",
  icono: "🔍",
  titulo: "Antes de arreglar: mirar, descoser y probar",
  nivel: "Básico",
  objetivos: [
    "Decidir si un arreglo vale la pena según la prenda, el daño y el tiempo",
    "Descoser con el descosedor sin romper la tela",
    "Marcar un arreglo con alfileres y tiza sobre la persona, y probar antes de cortar",
  ],
  lecciones: [
    { titulo: "¿Vale la pena arreglarla?", html: `
      <p class="idea">Antes de enhebrar, mirá tres cosas: <strong>qué se rompió</strong>, <strong>de qué tela es</strong> y <strong>cuánto tiempo te lleva</strong>. Así sabés si conviene arreglar, cómo hacerlo y cuánto cobrar.</p>
      <p>En todo el curso acompañamos a <strong>Rosa</strong>, que arregla la ropa de su familia con una máquina familiar y quiere empezar a cobrar arreglos a los vecinos del barrio.</p>
      <p>Este curso supone que ya sabés las puntadas a mano básicas (hilván, pespunte, punto escondido y sobrehilado) y usar una máquina de coser familiar. Si no, empezá por el curso de <strong>Costura a mano y a máquina</strong> de este mismo sitio.</p>
      <table>
        <tr><th>Arreglo</th><th>Dificultad</th><th>Tiempo aproximado</th></tr>
        <tr><td>Coser un botón</td><td>Fácil</td><td>5 a 10 minutos</td></tr>
        <tr><td>Cerrar una costura descosida</td><td>Fácil</td><td>10 a 20 minutos</td></tr>
        <tr><td>Ruedo de pantalón</td><td>Media</td><td>30 a 60 minutos</td></tr>
        <tr><td>Poner un parche</td><td>Media</td><td>20 a 40 minutos</td></tr>
        <tr><td>Cambiar un cierre</td><td>Difícil</td><td>1 a 2 horas</td></tr>
        <tr><td>Achicar la cintura de un pantalón</td><td>Difícil</td><td>1 a 2 horas</td></tr>
      </table>
      <p>Los tiempos son para alguien que ya practicó. La primera vez tardás el doble, y está bien.</p>
      <p><strong>Leé la etiqueta</strong> de adentro de la prenda: dice la tela (algodón, poliéster, elastano) y cómo se plancha. El <strong>elastano</strong> (también llamado lycra o spandex) es la fibra que hace que una tela estire; si la tela lo tiene, vas a necesitar las técnicas del módulo de elastizados.</p>
      <p><strong>Cuándo no conviene:</strong> si la tela está gastada en toda la zona (se ve finita o transparente), un parche se rompe al lado. Si arreglarla cuesta más que una prenda nueva parecida, decilo antes de empezar.</p>
      <p>Por ejemplo, a Rosa le trajeron un pantalón de vestir con el ruedo descosido y una remera con la tela finita en los codos. El ruedo lo arregló en 20 minutos. La remera la devolvió: la tela se iba a romper al lado de cualquier parche.</p>` },
    { titulo: "Descoser sin romper", video: {"id":"RbN8Y_uqoXo","t":"Cómo usar correctamente el descosedor · 123 Dream it (1:52)"}, html: `
      <p class="idea">Casi todo arreglo empieza desarmando algo. El <strong>descosedor</strong>, una herramienta chica con una punta y una cuchilla curva, corta el hilo sin tocar la tela si lo usás bien.</p>
      <pre><code>Descoser una costura de máquina:
1. Dá vuelta la prenda: trabajá del revés.
2. Cortá 1 puntada cada 3 o 4 con la punta del descosedor.
3. Del otro lado, tirá del hilo de abajo: sale entero.
4. Sacá los pedacitos de hilo con los dedos o una cinta de embalar.</code></pre>
      <p>La forma rápida, pasar la cuchilla curva a lo largo entre las dos telas, sirve en costuras largas y derechas. Pero si se te resbala, corta la tela. Empezá siempre por el método de cortar puntadas de a una.</p>
      <table>
        <tr><th>Así sí</th><th>Nunca</th></tr>
        <tr><td>Empujar el descosedor hacia afuera, lejos del cuerpo</td><td>Tirar hacia vos o hacia la otra mano</td></tr>
        <tr><td>Descoser solo lo necesario, más 2 cm de cada lado</td><td>Abrir toda la costura "por las dudas"</td></tr>
        <tr><td>Sacarle una foto antes de desarmar</td><td>Confiar en que te vas a acordar cómo estaba</td></tr>
        <tr><td>Guardarlo con la tapita puesta</td><td>Dejarlo suelto en el costurero</td></tr>
      </table>
      <p><strong>La foto vale oro:</strong> en un cierre o una cintura, la foto de antes te muestra en qué orden estaban las telas y por dónde pasaba la costura.</p>
      <p><strong>Los agujeritos:</strong> al sacar la costura quedan los agujeros de la aguja. En telas firmes, como el jean, se van con un poco de vapor de la plancha. En telas finas, como el raso, pueden quedar marcados: por eso la costura nueva va, si se puede, sobre la vieja.</p>
      <p>Por ejemplo, Rosa descosió 10 cm del costado de una camisa para achicarla. Cortó una puntada cada 4 y tiró del hilo de abajo: en 3 minutos estaba abierta y sin un solo tajo en la tela.</p>` },
    { titulo: "Marcar sobre la persona y probar", html: `
      <p class="idea">Los arreglos de largo y de ancho se marcan con la prenda <strong>puesta</strong>. El cuerpo no es una mesa: una pierna puede ser más larga o una cadera más alta.</p>
      <pre><code>La prueba, en orden:
1. La persona se pone la prenda y el calzado que va a usar con ella.
2. Se para derecha, sin mirar para abajo (agacharse cambia el largo).
3. Marcás con alfileres: el largo, o lo que sobra en el costado.
4. Se la saca con cuidado (los alfileres pinchan).
5. Pasás la marca a tiza del revés y medís de los dos lados.
6. Hilvanás y se la prueba de nuevo.
7. Recién ahí cosés a máquina y cortás.</code></pre>
      <p>El <strong>hilván</strong> es la puntada larga y provisoria que se saca después: te deja probar el arreglo sin cortar nada. <strong>Si cortás antes de probar, no hay vuelta atrás.</strong></p>
      <table>
        <tr><th>Marca</th><th>Con qué</th></tr>
        <tr><td>Largo de un ruedo</td><td>Alfileres horizontales, cada 10 cm</td></tr>
        <tr><td>Lo que sobra en un costado</td><td>Alfileres verticales, pellizcando la tela sobrante</td></tr>
        <tr><td>Pasar la marca a la tela</td><td>Tiza de sastre o un jabón seco</td></tr>
      </table>
      <p><strong>Medir los dos lados:</strong> si el largo marcado da 2 cm más corto en una pierna, preguntá antes de igualarlo. A veces el cuerpo es así y está bien que la prenda lo acompañe.</p>
      <p><strong>Si no podés probar sobre la persona</strong>, pedí una prenda parecida que le quede bien y copiá sus medidas: largo desde la entrepierna, ancho de cintura con la prenda cerrada.</p>
      <p>Por ejemplo, la vecina de Rosa se probó el pantalón en zapatillas, pero lo iba a usar con tacos. Rosa le pidió que volviera con los tacos: el largo cambió 3 cm.</p>` },
  ],
  practica: [
    "Elegí 3 prendas de tu casa que necesiten un arreglo, anotá qué tiene cada una y cuánto tiempo calculás que te llevaría, según la tabla.",
    "Descosé 10 cm de una costura en un retazo cosido a máquina, cortando 1 puntada cada 4, y anotá cuántos minutos tardaste y si se cortó la tela.",
    "Marcá con alfileres el largo de un pantalón puesto, medí el largo de las dos piernas desde la entrepierna y anotá la diferencia en centímetros.",
  ],
  recursos: [
    { t: "Ministerio de Educación de España: título de FP Básica en Arreglo y reparación de artículos textiles (PDF)", url: "https://educacionfpydeportes.gob.es/en/dam/jcr:9b079a8d-f26a-45ca-9ce3-1ff9093d2f8c/12-fpb-arreglo-reparacion-articulos-textiles-anexo-xii-55-se131129.pdf" },
    { t: "Curso de este sitio: Costura a mano y a máquina (puntadas, máquina y costuras rectas)", url: "https://pkeios.github.io/EiaLearning/costura/" },
    { t: "RE:Source (StopWaste): guía para arreglar ropa en casa, con videos (en inglés)", url: "https://resource.stopwaste.org/fact-sheet/textiles-diy-clothing-repair" },
  ],
  quiz: [
    { q: "Te traen una remera con la tela finita y transparente en los codos. ¿Qué hacés?", opciones: ["Le ponés un parche chico y listo","Cosés una costura recta encima","Avisás que un parche se va a romper al lado, porque la tela está gastada en toda la zona","Le pasás pegamento"], correcta: 2, explicacion: "Si la zona está gastada, el arreglo cede al lado. El parche chico tienta por rápido, pero la tela de alrededor se rompe enseguida." },
    { q: "Si la etiqueta dice que la tela tiene elastano, ¿qué sabés de ella?", opciones: ["Que estira, y vas a necesitar técnicas para elastizados","Que no se puede planchar","Que es 100% algodón","Que no se puede arreglar"], correcta: 0, explicacion: "El elastano es la fibra que estira. Pensar que no se puede arreglar tienta, pero solo cambia la técnica." },
    { q: "Tenés que cambiar un cierre y es la primera vez. ¿Cuánto tiempo calculás?", opciones: ["5 minutos","Lo mismo que un botón","Exactamente 1 hora","Más de 1 a 2 horas, porque la primera vez tardás más"], correcta: 3, explicacion: "Un cierre es de los arreglos largos, y la primera vez se tarda el doble. \"Exactamente 1 hora\" tienta por redondo, pero se queda corto." },
    { q: "Si vas a descoser una costura de máquina, ¿cómo empezás?", opciones: ["Pasando la cuchilla curva a toda velocidad","Del revés, cortando 1 puntada cada 3 o 4 y tirando del hilo de abajo","Tirando de las dos telas hasta que se abra","Con la tijera grande"], correcta: 1, explicacion: "Cortar de a una puntada no toca la tela. La cuchilla rápida tienta, pero si se resbala te corta la prenda." },
    { q: "Tenés que descoser 10 cm de un costado. ¿Cuánto abrís?", opciones: ["Toda la costura del costado","Solo 2 cm","Lo necesario más unos 2 cm de cada lado","Nada: cosés encima"], correcta: 2, explicacion: "Unos centímetros de más dan lugar para trabajar. Abrir todo tienta \"por las dudas\", pero después tenés más para cerrar." },
    { q: "Vas a desarmar la cintura de un pantalón. ¿Qué hacés antes?", opciones: ["Le sacás una foto para ver después cómo estaba","Nada, te vas a acordar","La lavás","Cortás la pretina"], correcta: 0, explicacion: "La foto muestra el orden de las telas y por dónde iba la costura. Confiar en la memoria tienta, pero a la hora de armar ya no te acordás." },
    { q: "Si usás el descosedor tirando hacia tu otra mano, ¿qué riesgo hay?", opciones: ["Ninguno, es una herramienta chica","Que se rompa el hilo","Que se desafile","Si se resbala, te pinchás o cortás la mano"], correcta: 3, explicacion: "Siempre se empuja hacia afuera. \"Es una herramienta chica\" tienta, pero tiene punta y filo." },
    { q: "Si vas a marcar el largo de un pantalón, ¿qué tiene que tener puesto la persona?", opciones: ["Solo el pantalón, descalza","El pantalón y el calzado que va a usar con él","Cualquier calzado","Nada, medís sobre la mesa"], correcta: 1, explicacion: "El calzado cambia el largo. Descalza tienta porque es más cómodo, pero con tacos queda corto." },
    { q: "Si la persona mira para abajo mientras marcás el ruedo, ¿qué le pedís?", opciones: ["Que siga mirando, así participa","Que se siente","Que se pare derecha mirando al frente, porque agacharse cambia el largo","Que levante una pierna"], correcta: 2, explicacion: "Al agacharse sube la prenda. Dejarla mirar tienta para que opine, pero la marca sale mal." },
    { q: "Ya marcaste con alfileres. ¿Qué hacés antes de cortar?", opciones: ["Hilvanás y lo probás de nuevo","Cortás directo, ya está marcado","Lo lavás","Cosés a máquina y cortás sin probar"], correcta: 0, explicacion: "El hilván se saca si algo no está bien. Cortar directo tienta para ganar tiempo, pero si te equivocaste no hay vuelta atrás." },
    { q: "Medís y una pierna marcada da 2 cm más corta que la otra. ¿Qué hacés?", opciones: ["Las igualás sin decir nada","Cortás las dos al largo más corto","Volvés a marcar hasta que den iguales","Preguntás antes de igualarlas: el cuerpo puede ser así"], correcta: 3, explicacion: "Muchas personas tienen una pierna más larga. Igualarlas tienta por prolijo, pero el pantalón puede quedar mal puesto." },
    { q: "Si no podés probar la prenda sobre la persona, ¿qué pedís?", opciones: ["Nada, calculás a ojo","Una prenda parecida que le quede bien, para copiar sus medidas","Su talle de remera","Una foto de la persona"], correcta: 1, explicacion: "Una prenda que le queda bien ya tiene las medidas justas. El talle tienta por simple, pero cambia de marca a marca." },
  ],
},
{
  id: "botones",
  icono: "🔘",
  titulo: "Botones, broches y ojales",
  nivel: "Básico",
  objetivos: [
    "Coser un botón de 2 o 4 agujeros con tallo para que no quede apretado",
    "Ubicar y coser broches a presión y corchetes del lado correcto",
    "Reforzar un ojal deshilachado y cambiar un botón de jean",
  ],
  lecciones: [
    { titulo: "El botón con tallo", video: {"id":"EErvXGGAOt0","t":"Cómo coser un botón de 4 agujeros a mano · Macrostura (2:41)"}, html: `
      <p class="idea">Un botón no se cose pegado a la tela: necesita un <strong>tallo</strong>, un piecito de hilo que lo separa un poco. Ahí se acomoda la tela del ojal cuando abotonás.</p>
      <pre><code>1. Marcá el lugar: abotoná la prenda, pasá un alfiler
   por el centro del ojal y marcá con tiza donde pinchó.
2. Hilo doble, con nudo, de unos 50 cm.
3. Entrá del revés y salí por la marca.
4. Poné un escarbadientes sobre el botón, entre los agujeros.
5. Pasá 6 a 8 veces por los agujeros, por encima del escarbadientes.
6. Sacá el escarbadientes. Sacá la aguja entre el botón y la tela.
7. Enrollá el hilo 3 o 4 vueltas alrededor de las puntadas:
   ese es el tallo.
8. Pasá al revés y rematá con 3 puntadas chiquitas.</code></pre>
      <p>Si el botón tiene 4 agujeros, podés coserlo en dos líneas paralelas (=) o en cruz (x). Mirá los otros botones de la prenda y copiá cómo están.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo se reconoce</th><th>Qué cambia</th></tr>
        <tr><td>De 2 o 4 agujeros</td><td>Plano, con agujeros que lo atraviesan</td><td>Necesita tallo de hilo</td></tr>
        <tr><td>Con pie</td><td>Tiene un aro atrás y no se ven agujeros adelante</td><td>Ya trae su tallo: se cose por el aro</td></tr>
        <tr><td>De abrigo</td><td>Grande y pesado</td><td>Lleva un botón chico de refuerzo del revés</td></tr>
      </table>
      <p>El <strong>botón de refuerzo</strong> es uno chico y plano que se cose del revés al mismo tiempo, pasando por los dos: reparte la fuerza y evita que el botón grande arranque la tela.</p>
      <p>Por ejemplo, Rosa cosió un botón de camisa sin tallo y la camisa abotonada hacía una arruga. Lo volvió a coser con un escarbadientes de por medio y la tela quedó lisa.</p>` },
    { titulo: "Broches y corchetes", html: `
      <p class="idea">Los <strong>broches a presión</strong> y los <strong>corchetes</strong> cierran sin ojal. Cada uno tiene dos piezas, y cada pieza va en un lado distinto de la prenda.</p>
      <table>
        <tr><th>Cierre</th><th>Pieza</th><th>Dónde va</th></tr>
        <tr><td>Broche a presión</td><td>Macho (la que tiene la bolita)</td><td>En la tela que queda <strong>arriba</strong>, del lado de adentro</td></tr>
        <tr><td>Broche a presión</td><td>Hembra (la del hueco)</td><td>En la tela que queda <strong>abajo</strong>, del lado de afuera</td></tr>
        <tr><td>Corchete</td><td>Gancho</td><td>En la tela de arriba, del lado de adentro, un poco escondido del borde</td></tr>
        <tr><td>Corchete</td><td>Presilla (el ojito)</td><td>En la tela de abajo, justo enfrente del gancho</td></tr>
      </table>
      <p>La idea es simple: <strong>la pieza que sobresale va arriba y mirando hacia adentro</strong>, así no se ve desde afuera.</p>
      <pre><code>Coser un broche a presión:
1. Cosé primero el macho: 4 o 5 puntadas en cada agujerito,
   pasando de un agujero al otro por debajo.
2. Cerrá la prenda y frotá tiza sobre la bolita:
   la marca te dice dónde va la hembra.
3. Cosé la hembra en esa marca, igual que el macho.
4. Rematá del revés en cada pieza.</code></pre>
      <p>En la tela de arriba, las puntadas toman <strong>solo la capa de adentro</strong>, para que no se vean del lado de afuera.</p>
      <p><strong>El broche de jean</strong>, el botón de metal de la cintura, no se cose: va clavado con un clavito. Para cambiarlo se compra un repuesto y se coloca con un martillo, sobre una superficie firme, sosteniendo el clavito con una pinza para no golpearte los dedos. Hay repuestos de <strong>tornillo</strong>, que se colocan sin martillo.</p>
      <p>Por ejemplo, Rosa puso un broche en el escote de un vestido. Primero cosió el macho y frotó tiza: la hembra cayó justo en su lugar, sin medir.</p>` },
    { titulo: "El ojal deshilachado", html: `
      <p class="idea">El <strong>ojal</strong> es la abertura por donde pasa el botón. Con el uso se deshilacha o se agranda. Se arregla rodeándolo con un <strong>punto de ojal</strong>, una puntada apretada que forma un borde con nudito.</p>
      <pre><code>Punto de ojal (a mano), alrededor del borde:
1. Hilo simple, del color de la prenda, con nudo.
2. Entrá del revés, a 2 mm del borde del ojal.
3. Antes de tirar, pasá el hilo por debajo de la punta de la aguja.
4. Tirá suave hacia el borde: se forma un nudito sobre el borde.
5. La puntada siguiente, pegada a la anterior.
6. Seguí alrededor de todo el ojal y rematá del revés.</code></pre>
      <table>
        <tr><th>Problema</th><th>Arreglo</th></tr>
        <tr><td>Ojal con hilos sueltos</td><td>Cortá los hilos sueltos y hacé punto de ojal alrededor</td></tr>
        <tr><td>Ojal agrandado, el botón se sale solo</td><td>Cerrá 2 o 3 mm de una punta con puntadas de lado a lado</td></tr>
        <tr><td>Ojal roto en la tela</td><td>Pegá del revés un retazo con entretela y rehacé el ojal encima</td></tr>
      </table>
      <p>La <strong>entretela</strong> es una tela fina que se pega con la plancha y le da cuerpo a la tela de encima. Seguí la temperatura y el tiempo que dice su envase.</p>
      <p>Muchas máquinas familiares hacen ojales solas, con un pie especial. Si la tuya tiene, probá primero en un retazo de la misma tela con la misma cantidad de capas.</p>
      <p>Por ejemplo, la campera del hijo de Rosa tenía el ojal de arriba tan agrandado que el botón se salía solo. Rosa cerró 3 mm de un extremo con puntadas de lado a lado y quedó firme.</p>` },
  ],
  practica: [
    "Cosé 2 botones en un retazo: uno sin tallo y otro con escarbadientes. Abotonalos en otro retazo y anotá en cuál la tela queda más lisa.",
    "Cosé un broche a presión usando el truco de la tiza y anotá cuántos milímetros quedó corrido de la marca.",
    "Hacé punto de ojal alrededor de un corte de 2 cm en un retazo y contá cuántas puntadas usaste.",
  ],
  recursos: [
    { t: "iFixit: cómo cambiar el botón de un jean (en inglés)", url: "https://www.ifixit.com/Guide/Replacing+a+Jeans+Button/19441" },
    { t: "Universidad de Tennessee (4-H): actividad \"Arreglá tu ropa\" (PDF, en inglés)", url: "https://4h.tennessee.edu/wp-content/uploads/sites/47/2022/08/Activity-10.pdf" },
    { t: "Michigan State University (Extensión): \"How to Fix, Mend, Replace\", guía clásica de arreglos (PDF de 1978, en inglés)", url: "https://archive.lib.msu.edu/DMC/extension_publications/e1274/e1274.pdf" },
  ],
  quiz: [
    { q: "Si cosés un botón pegado a la tela y la camisa abotonada hace una arruga, ¿qué faltó?", opciones: ["Más puntadas","Un botón más grande","El tallo de hilo, que deja lugar para la tela del ojal","Hilo más grueso"], correcta: 2, explicacion: "El tallo separa el botón de la tela. Más puntadas tienta, pero lo dejan igual de pegado." },
    { q: "Tenés que ubicar un botón nuevo. ¿Cómo marcás el lugar?", opciones: ["Abotonás la prenda y pasás un alfiler por el centro del ojal","Medís a ojo desde el borde","Lo ponés donde quedó el hilo viejo, sin mirar","Lo cosés y después ves"], correcta: 0, explicacion: "El alfiler por el ojal marca el punto exacto. A ojo tienta por rápido, pero la prenda queda torcida." },
    { q: "Usás un escarbadientes al coser un botón. ¿Para qué sirve?", opciones: ["Para enhebrar","Para que el botón brille","Para marcar la tela","Para dejar el hilo flojo y armar el tallo"], correcta: 3, explicacion: "El escarbadientes deja espacio para el tallo. Enhebrar tienta porque es un palito fino, pero no se usa para eso." },
    { q: "Tu botón tiene un aro atrás y no tiene agujeros adelante. ¿Cómo lo cosés?", opciones: ["Con escarbadientes y tallo de hilo","Por el aro: ya trae su tallo","Lo pegás","Le hacés agujeros"], correcta: 1, explicacion: "El botón con pie ya tiene tallo. Agregarle tallo de hilo tienta por costumbre, pero queda flojo." },
    { q: "Si vas a coser un botón grande en un tapado pesado, ¿qué agregás del revés?", opciones: ["Nada","Un parche de jean","Un botón chico de refuerzo","Un nudo grande"], correcta: 2, explicacion: "El refuerzo reparte la fuerza. Un nudo grande tienta, pero no evita que arranque la tela." },
    { q: "Si cosés un broche a presión, ¿dónde va la pieza con bolita (macho)?", opciones: ["En la tela de arriba, del lado de adentro","En la tela de abajo, del lado de afuera","Del lado de afuera, para que se vea","Da igual"], correcta: 0, explicacion: "La pieza que sobresale va arriba mirando hacia adentro. \"Da igual\" tienta, pero el broche no cierra o queda a la vista." },
    { q: "Ya cosiste el macho del broche. ¿Cómo encontrás dónde va la hembra?", opciones: ["La ponés a ojo","Medís con regla desde el cuello","La cosés al lado del macho","Cerrás la prenda y frotás tiza sobre la bolita"], correcta: 3, explicacion: "La tiza marca el punto justo. A ojo tienta, pero queda corrido y tira." },
    { q: "Si cosés el macho del broche atravesando las dos capas de la tela de arriba, ¿qué pasa?", opciones: ["Queda más lindo","Se ven las puntadas del lado de afuera","No cierra","Se cae el broche"], correcta: 1, explicacion: "Las puntadas toman solo la capa de adentro. Tomar todo tienta por firme, pero se ve del lado de afuera." },
    { q: "Se salió el botón de metal de tu jean. ¿Cómo lo reemplazás?", opciones: ["Lo cosés con hilo","Lo pegás con cola","Con un repuesto que se clava con martillo, o uno de tornillo","Le ponés un broche de plástico"], correcta: 2, explicacion: "El botón de jean va clavado. Coserlo tienta porque es lo conocido, pero no tiene agujeros y no aguanta." },
    { q: "Si vas a clavar el botón de un jean con martillo, ¿cómo sostenés el clavito?", opciones: ["Con una pinza, sobre una superficie firme","Con los dedos","Sobre la cama","Sin sostenerlo"], correcta: 0, explicacion: "La pinza aleja los dedos del martillo. Con los dedos tienta por más control, pero te podés golpear." },
    { q: "Tu ojal está tan agrandado que el botón se sale solo. ¿Qué hacés?", opciones: ["Cambiás el botón por uno chico","Le hacés otro ojal al lado","Lo pegás","Cerrás 2 o 3 mm de una punta con puntadas de lado a lado"], correcta: 3, explicacion: "Achicar el ojal lo resuelve. Un botón más chico tienta, pero no combina con los demás." },
    { q: "Si el ojal se rompió en la tela, ¿qué le ponés del revés antes de rehacerlo?", opciones: ["Nada","Un retazo con entretela pegada, que le da cuerpo","Cinta de embalar","Pegamento"], correcta: 1, explicacion: "La entretela refuerza. Pegamento tienta por rápido, pero se endurece y no se lava." },
  ],
},
{
  id: "ruedos",
  icono: "👖",
  titulo: "Ruedos de pantalón, pollera y jean",
  nivel: "Intermedio",
  objetivos: [
    "Acortar un pantalón de vestir con un ruedo de punto escondido",
    "Calcular cuánta tela cortar dejando el margen del ruedo",
    "Acortar un jean manteniendo el ruedo original",
  ],
  lecciones: [
    { titulo: "Medir y calcular el ruedo", html: `
      <p class="idea">El <strong>ruedo</strong> es el doblez del borde de abajo de un pantalón o una pollera. Para acortar, marcás el largo nuevo y dejás debajo una tira de tela para doblar: el <strong>margen del ruedo</strong>.</p>
      <table>
        <tr><th>Prenda</th><th>Margen del ruedo</th></tr>
        <tr><td>Pantalón de vestir</td><td>3 a 4 cm</td></tr>
        <tr><td>Jean (doble doblez)</td><td>2 cm: dos dobleces de 1 cm</td></tr>
        <tr><td>Pollera recta</td><td>3 a 5 cm</td></tr>
        <tr><td>Pollera acampanada</td><td>1 a 2 cm (más ancha abajo: un ruedo alto se frunce)</td></tr>
      </table>
      <pre><code>La cuenta (pantalón de vestir):
Largo marcado con alfileres: 6 cm más arriba del ruedo viejo.
Margen nuevo:                4 cm
Lo que cortás:               6 - 4 = 2 cm desde el doblez viejo,
                             después de descoser y planchar.</code></pre>
      <p>Medí siempre <strong>desde el doblez marcado hacia abajo</strong> y marcá con tiza la línea de corte en varios puntos. Uní los puntos con regla.</p>
      <p><strong>El largo de un pantalón:</strong> lo común es que, con el calzado puesto, atrás llegue más o menos a la mitad del talón del zapato, y adelante apoye apenas sobre el empeine. Es una guía: lo decide la persona.</p>
      <p><strong>Las dos piernas por separado:</strong> pasá la marca de cada pierna con su propia medida. Si las dos dan iguales, mejor; si no, ya viste en el módulo anterior que hay que preguntar.</p>
      <p>Por ejemplo, Rosa marcó un pantalón de vestir 6 cm más corto. Descosió el ruedo viejo, planchó la tela lisa, marcó con tiza el largo nuevo y dejó 4 cm de margen debajo: cortó 2 cm.</p>` },
    { titulo: "El ruedo de punto escondido", html: `
      <p class="idea">En pantalones de vestir y polleras, el ruedo se cose a mano con <strong>punto escondido</strong>, la puntada que toma 1 o 2 hilos de la tela de afuera y no se ve.</p>
      <pre><code>1. Sobrehilá el borde cortado (a mano, o zigzag a máquina)
   para que no se deshilache.
2. Doblá por la marca de tiza hacia adentro.
3. Planchá el doblez con vapor: queda marcado y quieto.
4. Sujetá con alfileres verticales cada 10 cm.
5. Punto escondido: 1 o 2 hilos de afuera, 1 cm por adentro del doblez.
6. No tires el hilo: si aprieta, se ve una línea de frunces.
7. Rematá adentro del doblez y planchá de nuevo.</code></pre>
      <p>El <strong>zigzag</strong> es la puntada de máquina que va de un lado al otro en forma de V: envuelve el borde y frena el deshilachado, como el sobrehilado a mano.</p>
      <table>
        <tr><th>Si pasa esto</th><th>Hacé esto</th></tr>
        <tr><td>Se ven puntitos afuera</td><td>Tomá menos hilos de la tela de afuera</td></tr>
        <tr><td>El ruedo hace ondas</td><td>Soltá el hilo; planchá con vapor</td></tr>
        <tr><td>Una costura vertical no coincide</td><td>Alineá primero las costuras de los costados con un alfiler</td></tr>
      </table>
      <p><strong>Planchar es parte del arreglo.</strong> Un ruedo bien cosido y sin planchar se ve casero. Usá la temperatura de la etiqueta y, en telas oscuras o brillantes, poné un trapo de algodón entre la plancha y la prenda para que no queden brillos.</p>
      <p>Por ejemplo, Rosa empezó su ruedo alineando las costuras de adentro y de afuera de la pierna con un alfiler. Así el doblez quedó derecho en toda la vuelta.</p>` },
    { titulo: "El jean con su ruedo original", video: {"id":"IcemdND04zM","t":"Cómo acortar un jean dejando el ruedo original · Cosiendo en Downtown (8:03)"}, html: `
      <p class="idea">Un jean tiene un ruedo gastado y teñido de fábrica que se nota si lo cortás. Para mantenerlo, se hace un <strong>pliegue</strong> arriba del ruedo y se cose pegado a él.</p>
      <pre><code>La cuenta clave: el pliegue toma la MITAD de lo que acortás,
porque la tela queda doble.

Hay que acortar 6 cm  →  el pliegue es de 3 cm.

1. Doblá el ruedo original hacia arriba, sobre el derecho de la tela,
   de modo que entre el doblez nuevo de abajo y el borde de arriba
   del ruedo original queden 3 cm.
2. Sujetá con alfileres toda la vuelta. Probá el largo.
3. Cosé a máquina pegado al borde del ruedo original
   (el pie de cierre ayuda a coser bien pegado).
4. Cortá el sobrante dejando 1 cm y sobrehilá con zigzag.
5. Bajá el ruedo y planchá la costura hacia arriba, por adentro.</code></pre>
      <p>El <strong>pie de cierre</strong> es un prensatelas angosto de la máquina que deja coser pegado a un borde grueso, como los dientes de un cierre o un ruedo.</p>
      <table>
        <tr><th>Para jean</th><th>Qué usar</th></tr>
        <tr><td>Aguja de máquina</td><td>Para jean, número 90 a 100</td></tr>
        <tr><td>Puntada</td><td>Larga, de 3 a 3,5 mm</td></tr>
        <tr><td>Partes gruesas (costuras de los costados)</td><td>Despacio, girando el volante a mano</td></tr>
      </table>
      <p>En las agujas de <strong>máquina</strong>, al revés que en las de mano, <strong>número más alto es más gruesa</strong>. Si la aguja se dobla al cruzar una costura gruesa, puede quebrarse: no la fuerces y usá anteojos si tenés.</p>
      <p>Por ejemplo, el hijo de Rosa necesitaba acortar 8 cm su jean. Rosa hizo un pliegue de 4 cm, cosió pegado al ruedo con el pie de cierre y el jean quedó con su ruedo gastado de fábrica.</p>` },
  ],
  practica: [
    "Calculá el corte de 3 pantalones: si acortás 5, 7 y 10 cm con un margen de 4 cm, anotá cuánto cortás de cada uno.",
    "Hacé un ruedo de punto escondido de 30 cm en un retazo y anotá cuántas puntadas se ven del lado de afuera.",
    "En un jean viejo, acortá una pierna 6 cm con el ruedo original: medí el largo antes y después y anotá la diferencia real.",
  ],
  recursos: [
    { t: "Michigan State University (Extensión): \"How to Fix, Mend, Replace\", guía clásica de arreglos (PDF de 1978, en inglés)", url: "https://archive.lib.msu.edu/DMC/extension_publications/e1274/e1274.pdf" },
    { t: "RE:Source (StopWaste): guía para arreglar ropa en casa, con videos (en inglés)", url: "https://resource.stopwaste.org/fact-sheet/textiles-diy-clothing-repair" },
    { t: "Curso de este sitio: Costura a mano y a máquina (puntadas, máquina y costuras rectas)", url: "https://pkeios.github.io/EiaLearning/costura/" },
  ],
  quiz: [
    { q: "Marcaste un pantalón de vestir 6 cm más corto y querés 4 cm de margen. ¿Cuánto cortás desde el doblez viejo?", opciones: ["6 cm","10 cm","2 cm","4 cm"], correcta: 2, explicacion: "Acortás 6 y conservás 4 de margen: cortás 2. Cortar 6 tienta porque es lo que acortás, pero te quedás sin tela para doblar." },
    { q: "Si vas a hacer el ruedo de una pollera muy acampanada, ¿qué margen dejás?", opciones: ["1 a 2 cm, porque un ruedo alto se frunce","5 cm o más","Lo mismo que un pantalón de vestir","Nada"], correcta: 0, explicacion: "Abajo la pollera es más ancha que el doblez. Un margen grande tienta por prolijo, pero se arruga." },
    { q: "Si el pantalón de vestir es para usar con zapatos, ¿hasta dónde llega atrás, como guía?", opciones: ["Hasta el piso, arrastrando","Al tobillo, sin tocar el zapato","Siempre 10 cm arriba del piso","Más o menos a la mitad del talón del zapato"], correcta: 3, explicacion: "Es la guía común, y lo decide la persona. Arrastrando tienta \"por las dudas\", pero se gasta y se ensucia." },
    { q: "Tu tela se deshilacha en el borde cortado del ruedo. ¿Qué hacés antes de doblar?", opciones: ["Nada, queda adentro","Sobrehilás a mano o con zigzag a máquina","Le ponés pegamento","Lo cortás con tijera de picos y listo"], correcta: 1, explicacion: "Sobrehilar frena el deshilachado. \"Queda adentro\" tienta, pero con los lavados se desarma." },
    { q: "Hacés un ruedo con punto escondido y se ve una línea de frunces. ¿Qué pasó?", opciones: ["Usaste hilo del color de la tela","Planchaste antes","Tiraste demasiado del hilo","Tomaste 1 hilo de afuera"], correcta: 2, explicacion: "El hilo apretado frunce. Pensar en el planchado tienta, pero planchar ayuda, no frunce." },
    { q: "Si vas a planchar el ruedo de un pantalón negro de tela brillante, ¿qué ponés entre la plancha y la tela?", opciones: ["Un trapo de algodón, para que no queden brillos","Nada","Papel de diario","Una bolsa de plástico"], correcta: 0, explicacion: "El trapo protege la tela. El plástico tienta porque es fino, pero se derrite." },
    { q: "Al empezar un ruedo, ¿qué alineás primero con un alfiler?", opciones: ["El bolsillo","La etiqueta","Nada, empezás en cualquier lado","Las costuras de los costados de la pierna"], correcta: 3, explicacion: "Si las costuras coinciden, el ruedo queda derecho. Empezar en cualquier lado tienta, pero se tuerce la vuelta." },
    { q: "Tenés que acortar 6 cm un jean manteniendo el ruedo original. ¿De cuánto es el pliegue?", opciones: ["6 cm","3 cm, la mitad, porque la tela queda doble","12 cm","2 cm"], correcta: 1, explicacion: "El pliegue toma el doble de tela. Hacerlo de 6 tienta porque es lo que acortás, pero quedaría 12 cm más corto." },
    { q: "Querés coser bien pegado al borde grueso del ruedo original. ¿Qué pie de máquina usás?", opciones: ["El pie de ojales","Ninguno","El pie de cierre","El pie de botones"], correcta: 2, explicacion: "El pie de cierre es angosto y deja coser pegado. El de ojales tienta porque también es especial, pero hace otra cosa." },
    { q: "Vas a coser jean a máquina. ¿Qué aguja elegís?", opciones: ["Una para jean, número 90 a 100","La más fina que tengas, número 60","Una aguja de mano","Cualquiera"], correcta: 0, explicacion: "En máquina, número alto es más gruesa y aguanta el jean. La 60 tienta si pensás como en las de mano, pero se dobla." },
    { q: "Si la aguja empieza a doblarse al cruzar la costura gruesa del costado, ¿qué hacés?", opciones: ["Apretás el pedal a fondo para pasar rápido","Empujás la tela con fuerza","Seguís igual","Vas despacio girando el volante a mano, sin forzar"], correcta: 3, explicacion: "Forzarla la quiebra y puede saltar una punta. Ir rápido tienta para \"pasar de una\", pero es lo más peligroso." },
    { q: "Acortaste un jean con su ruedo original. ¿Qué hacés con el sobrante del pliegue?", opciones: ["Lo dejás entero adentro","Lo cortás dejando 1 cm y sobrehilás con zigzag","Lo cortás al ras de la costura","Lo pegás"], correcta: 1, explicacion: "Un centímetro sobrehilado no abulta ni se desarma. Cortar al ras tienta por prolijo, pero la costura se puede soltar." },
  ],
},
{
  id: "roturas",
  icono: "🩹",
  titulo: "Descosidos, agujeros y parches",
  nivel: "Intermedio",
  objetivos: [
    "Distinguir una costura descosida de una rotura en la tela y elegir el arreglo",
    "Zurcir un agujero chico tejiendo hilos en forma de grilla",
    "Poner un parche, por fuera o por el revés, que no se despegue",
  ],
  lecciones: [
    { titulo: "Descosido o roto: no es lo mismo", html: `
      <p class="idea">Si se abrió una <strong>costura</strong>, la tela está sana y solo hay que volver a coser. Si se rompió la <strong>tela</strong>, hay que reponer o reforzar tela. Mirá bien antes de elegir.</p>
      <table>
        <tr><th>Qué ves</th><th>Qué es</th><th>Arreglo</th></tr>
        <tr><td>Un hueco justo en la línea de costura, con hilos cortados</td><td>Descosido</td><td>Volver a coser sobre la costura vieja</td></tr>
        <tr><td>Un agujero chico en la tela, menos de 1 cm</td><td>Rotura chica</td><td>Zurcido</td></tr>
        <tr><td>Un tajo o agujero grande, o tela gastada en una zona</td><td>Rotura grande</td><td>Parche</td></tr>
      </table>
      <pre><code>Cerrar un descosido a máquina:
1. Del revés, juntá las dos telas como estaban.
2. Empezá a coser 1 cm ANTES del hueco, encima de la costura sana.
3. Seguí por la línea vieja, cruzando el hueco.
4. Terminá 1 cm DESPUÉS, otra vez encima de la costura sana.
5. Rematá con unas puntadas hacia atrás.</code></pre>
      <p>Esos centímetros de más, encima de la costura sana, son los que evitan que el descosido siga abriéndose por las puntas.</p>
      <p><strong>Si no tenés máquina</strong>, hacelo a mano con <strong>pespunte</strong>, la puntada que vuelve hacia atrás hasta tocar la anterior: es firme como la de máquina.</p>
      <p><strong>Si el descosido es en una costura que se ve de afuera</strong> (por ejemplo, una costura doble de jean), usá hilo del mismo color y la misma largura de puntada que la original.</p>
      <p>Por ejemplo, el pantalón de gimnasia de la hija de Rosa se abrió 5 cm en la entrepierna. La tela estaba sana: Rosa cosió 7 cm sobre la costura vieja, 1 cm de más en cada punta, y quedó cerrado en 5 minutos.</p>` },
    { titulo: "El zurcido", video: {"id":"4uwJNortSuI","t":"Zurcir un agujero · Elisa Lage Romero (4:50)"}, html: `
      <p class="idea">El <strong>zurcido</strong> rellena un agujero chico tejiendo hilos: primero en una dirección y después cruzados, como la trama de una canasta.</p>
      <pre><code>Zurcir un agujero chico:
1. Recortá los hilos sueltos del borde, sin agrandar el agujero.
2. Hilo simple del color de la prenda. Sin nudo grande:
   empezá con 2 puntadas chiquitas en la tela sana.
3. Hacé puntadas paralelas que crucen el agujero,
   empezando 0,5 cm antes y terminando 0,5 cm después.
       | | | | | |
4. Girá la tela y tejé en la otra dirección:
   pasá la aguja una vez por arriba y otra por abajo
   de cada hilo de la primera tanda.
       |-|-|-|-|-|
5. Rematá con 2 puntadas chiquitas en la tela sana.</code></pre>
      <table>
        <tr><th>Truco</th><th>Para qué</th></tr>
        <tr><td>Poner un vaso o una pelotita debajo del agujero</td><td>La tela queda tensa y lisa, sin fruncir</td></tr>
        <tr><td>Hilos bien juntos, sin espacio entre ellos</td><td>El zurcido se ve parejo y aguanta</td></tr>
        <tr><td>No tirar fuerte</td><td>Evita que la tela de alrededor se arrugue</td></tr>
      </table>
      <p>Para medias y pulóveres de lana se usa lana del mismo grosor y una aguja de punta roma (redondeada), que separa los hilos del tejido sin cortarlos.</p>
      <p>El zurcido se nota un poco: es un arreglo para agujeros chicos. Para algo grande, usá un parche.</p>
      <p>Por ejemplo, Rosa zurció un agujero de medio centímetro en el codo de un pulóver. Lo apoyó sobre una naranja para que quedara tenso y lo tejió con lana del mismo color: casi no se ve.</p>` },
    { titulo: "Los parches", video: {"id":"P8TjY0RB6TQ","t":"Cómo arreglar un agujero de desgaste en un jean · Fabiana Marquesini (15:27)"}, html: `
      <p class="idea">El <strong>parche</strong> cubre o refuerza un agujero grande con otra tela. Puede ir <strong>por fuera</strong>, a la vista, o <strong>por el revés</strong>, escondido, con costura encima del agujero.</p>
      <table>
        <tr><th>Tipo</th><th>Cuándo conviene</th></tr>
        <tr><td>Termoadhesivo (se pega con la plancha)</td><td>Rápido y fácil; mejor si además lo cosés en el borde</td></tr>
        <tr><td>Cosido por fuera</td><td>Ropa de trabajo, ropa de chicos, o cuando te gusta que se vea</td></tr>
        <tr><td>Cosido por el revés</td><td>Jean gastado en la entrepierna o la rodilla, para que se note poco</td></tr>
      </table>
      <pre><code>Reglas que sirven para todos:
- El parche es 2 cm más grande que el agujero, de cada lado.
- Esquinas redondeadas: las esquinas en punta se levantan.
- Una tela parecida en grosor: un parche grueso en tela fina tira.
- Lavá la tela del parche antes, para que no encoja después.</code></pre>
      <p><strong>Termoadhesivo:</strong> seguí el tiempo y la temperatura del envase, con la prenda apoyada sobre una superficie firme y sin vapor si el envase no lo pide. La plancha tiene que estar quieta y apretando, no moviéndose. Igual, el pegamento se suelta con los lavados: unas puntadas en el borde lo hacen durar.</p>
      <p><strong>Por el revés, en un jean:</strong> poné el parche del lado de adentro, sujetalo con alfileres y cosé desde afuera con puntada recta, ida y vuelta, muy juntas, sobre toda la zona gastada. Las puntadas fijan los hilos sueltos al parche.</p>
      <p>Por ejemplo, el jean de Rosa se gastó en la entrepierna, en una zona de 4 por 3 cm. Cortó un parche de jean de 8 por 7 cm, con esquinas redondeadas, lo puso por el revés y cosió líneas de ida y vuelta encima. Del lado de afuera solo se ven las puntadas azules.</p>` },
  ],
  practica: [
    "Revisá 5 prendas de tu casa, anotá cuáles tienen descosidos y cuáles roturas, y qué arreglo le corresponde a cada una.",
    "Zurcí un agujero de medio centímetro en un retazo o una media vieja y anotá cuántos hilos usaste en cada dirección.",
    "Calculá y cortá un parche para un agujero de 3 por 2 cm, con 2 cm de más de cada lado: anotá la medida final del parche.",
  ],
  recursos: [
    { t: "RE:Source (StopWaste): guía para arreglar ropa en casa, con videos (en inglés)", url: "https://resource.stopwaste.org/fact-sheet/textiles-diy-clothing-repair" },
    { t: "Universidad de Tennessee (4-H): actividad \"Arreglá tu ropa\" (PDF, en inglés)", url: "https://4h.tennessee.edu/wp-content/uploads/sites/47/2022/08/Activity-10.pdf" },
    { t: "Michigan State University (Extensión): \"How to Fix, Mend, Replace\", guía clásica de arreglos (PDF de 1978, en inglés)", url: "https://archive.lib.msu.edu/DMC/extension_publications/e1274/e1274.pdf" },
  ],
  quiz: [
    { q: "Ves un hueco justo en la línea de costura, con hilos cortados y la tela sana. ¿Qué es y cómo se arregla?", opciones: ["Una rotura: lleva parche","Un agujero: lleva zurcido","Un descosido: se vuelve a coser sobre la costura vieja","No tiene arreglo"], correcta: 2, explicacion: "Si la tela está sana, solo falta coser. El parche tienta por seguro, pero es más trabajo y se nota." },
    { q: "Si cerrás un descosido de 5 cm a máquina, ¿dónde empezás?", opciones: ["Un centímetro antes del hueco, encima de la costura sana","Justo en el borde del hueco","En la mitad del hueco","10 cm antes"], correcta: 0, explicacion: "El centímetro de más evita que siga abriéndose. Empezar justo en el borde tienta por exacto, pero la punta queda floja." },
    { q: "No tenés máquina y tenés que cerrar un descosido firme. ¿Qué puntada usás?", opciones: ["Hilván","Punto escondido","Zigzag","Pespunte"], correcta: 3, explicacion: "El pespunte es firme como la máquina. El hilván tienta por fácil, pero es provisorio." },
    { q: "Si se descosió una costura doble y visible de un jean, ¿qué cuidás?", opciones: ["Usar cualquier hilo, total es jean","Usar hilo del mismo color y el mismo largo de puntada","Coserla a mano con hilván","Taparla con un parche"], correcta: 1, explicacion: "Así se ve igual que la original. \"Total es jean\" tienta, pero la costura nueva se nota." },
    { q: "Tenés un agujero de medio centímetro en la tela de un pulóver. ¿Qué arreglo elegís?", opciones: ["Un parche grande","Coser una costura recta encima","Un zurcido","Cortar la manga"], correcta: 2, explicacion: "Para agujeros chicos, el zurcido. El parche tienta por resistente, pero es demasiado para medio centímetro." },
    { q: "Si zurcís sin nada debajo y la tela se frunce, ¿qué podés poner debajo del agujero?", opciones: ["Un vaso o una pelotita, para que quede tensa y lisa","Un libro abierto","Nada, el frunce se va al lavar","Tu mano abierta"], correcta: 0, explicacion: "Algo redondo y firme tensa la tela. La mano tienta por práctico, pero te pinchás." },
    { q: "Si zurcís en dos direcciones, ¿cómo pasás el hilo en la segunda?", opciones: ["Siempre por arriba","Siempre por abajo","En diagonal","Una vez por arriba y otra por abajo de cada hilo de la primera"], correcta: 3, explicacion: "Así se teje como una canasta. Siempre por arriba tienta por rápido, pero los hilos no se traban." },
    { q: "Vas a zurcir una media de lana. ¿Qué aguja usás?", opciones: ["La más filosa que tengas","Una de punta roma, que separa los hilos sin cortarlos","Un alfiler","Una aguja de máquina"], correcta: 1, explicacion: "La punta roma no rompe el tejido. La filosa tienta porque entra fácil, pero corta los hilos de la lana." },
    { q: "Si el agujero mide 4 por 3 cm, ¿de qué tamaño cortás el parche?", opciones: ["4 por 3 cm, igual al agujero","5 por 4 cm","8 por 7 cm: 2 cm más de cada lado","20 por 20 cm"], correcta: 2, explicacion: "Dos centímetros por lado lo sostienen sobre tela sana. Del mismo tamaño tienta por exacto, pero no tiene de dónde agarrarse." },
    { q: "Cortaste un parche cuadrado y las puntas se levantan. ¿Qué cambiás?", opciones: ["Redondeás las esquinas","Le ponés más pegamento","Lo hacés más chico","Lo planchás más tiempo"], correcta: 0, explicacion: "Las esquinas en punta se levantan. Más pegamento tienta, pero se endurece y se suelta igual." },
    { q: "Pegaste un parche termoadhesivo. ¿Qué hacés para que dure con los lavados?", opciones: ["Nada, ya está pegado","Lo lavás con agua hirviendo","Le pasás plancha cada semana","Le das unas puntadas en el borde"], correcta: 3, explicacion: "El pegamento se suelta con los lavados. \"Ya está pegado\" tienta, pero en pocas lavadas se despega." },
    { q: "Tu jean está gastado en la entrepierna y no querés que se note el parche. ¿Cómo lo ponés?", opciones: ["Por fuera, a la vista","Por el revés, y cosés encima de la zona gastada con puntadas de ida y vuelta","Solo con plancha, sin coser","Con alfileres de gancho"], correcta: 1, explicacion: "Por el revés casi no se ve. Solo con plancha tienta por rápido, pero la entrepierna roza y se despega." },
  ],
},
{
  id: "cierres",
  icono: "🤐",
  titulo: "Cierres: arreglar y cambiar",
  nivel: "Avanzado",
  objetivos: [
    "Reconocer los 4 tipos de cierre y elegir el repuesto correcto",
    "Resolver un cierre trabado, uno que se abre solo y uno que se salió",
    "Cambiar un cierre de pantalón o de pollera con el pie de cierre",
  ],
  lecciones: [
    { titulo: "Los tipos de cierre", html: `
      <p class="idea">Un <strong>cierre</strong> tiene dos cintas con dientes y un <strong>deslizador</strong>, la pieza que sube y baja y los engancha. Hay 4 tipos, y el repuesto tiene que ser del mismo tipo.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo es</th><th>Dónde se usa</th></tr>
        <tr><td>De metal</td><td>Dientes de metal, uno por uno</td><td>Jeans, pantalones de trabajo, carteras</td></tr>
        <tr><td>De espiral (nylon)</td><td>Un espiral de plástico continuo</td><td>Polleras, buzos, mochilas</td></tr>
        <tr><td>Invisible</td><td>Los dientes quedan escondidos atrás de la cinta</td><td>Vestidos y polleras de vestir</td></tr>
        <tr><td>Separable</td><td>Se abre del todo abajo, con una cajita y un pin</td><td>Camperas y buzos abiertos</td></tr>
      </table>
      <p>Los primeros tres son <strong>cerrados abajo</strong>: tienen un <strong>tope</strong>, una pieza de metal o plástico que frena el deslizador. Arriba tienen otros dos topes chiquitos.</p>
      <pre><code>Cómo medir un cierre para comprar el repuesto:
Largo = desde el tope de abajo hasta los topes de arriba,
        solo la parte con dientes (no la cinta que sobra).

Anotá también: tipo, color y si es separable.</code></pre>
      <p>Si no conseguís el largo justo, un cierre <strong>cerrado</strong> de espiral se puede comprar más largo y acortar: hacés un tope nuevo con 8 o 10 puntadas a mano, apretadas, sobre los dientes, y cortás 2 cm más abajo. Un cierre <strong>separable</strong> se acorta por arriba, sacando los dientes que sobran, y es más trabajo.</p>
      <p>Por ejemplo, Rosa tenía que cambiar el cierre de una pollera. Midió 18 cm de dientes, vio que era invisible y llevó un pedazo de la tela a la mercería para elegir el color.</p>` },
    { titulo: "Trabado, abierto o salido", video: {"id":"Dn2teOnpeWY","t":"Cómo arreglar una cremallera que se abre · Viendo y Aprendiendo (2:10)"}, html: `
      <p class="idea">Muchos cierres "rotos" no están rotos: se arreglan en minutos sin descoser nada. Primero mirá <strong>qué</strong> falla.</p>
      <table>
        <tr><th>Problema</th><th>Causa común</th><th>Arreglo</th></tr>
        <tr><td>Trabado, no sube ni baja</td><td>Tela agarrada en el deslizador, o dientes secos</td><td>Sacá la tela con cuidado; pasá grafito de lápiz o jabón seco por los dientes</td></tr>
        <tr><td>Se abre detrás del deslizador</td><td>Deslizador gastado, con las placas separadas</td><td>Apretá suave con una pinza los dos costados del deslizador, de a poco</td></tr>
        <tr><td>El deslizador se salió de un lado</td><td>Se pasó del tope de arriba</td><td>Volvé a meter la cinta en el deslizador y hacé un tope nuevo con puntadas</td></tr>
        <tr><td>Faltan dientes en el medio</td><td>Dientes rotos</td><td>Hay que cambiar el cierre</td></tr>
        <tr><td>Se perdió el tirador</td><td>Se rompió la manijita</td><td>Un aro de llavero o un clip mientras conseguís un repuesto</td></tr>
      </table>
      <p><strong>Con la pinza, de a poco:</strong> apretá un costado, probá el cierre, y recién después el otro. Si apretás de más, el deslizador ya no pasa por los dientes, y si lo rompés hay que cambiarlo.</p>
      <pre><code>El tope nuevo con puntadas (cierre que se salió):
1. Meté los dientes de los dos lados en el deslizador y bajalo.
2. Arriba, donde estaba el tope viejo, hacé 8 a 10 puntadas
   apretadas por encima de los dientes de cada cinta.
3. Rematá del revés. El deslizador ya no se puede escapar.</code></pre>
      <p>Por ejemplo, el cierre de la mochila de la hija de Rosa se abría solo detrás del deslizador. Rosa apretó apenas los dos costados con una pinza, de a uno, y probó entre cada apretón: con dos apretones quedó.</p>` },
    { titulo: "Cambiar un cierre", video: {"id":"vyA3nOecpuE","t":"Cambiar la cremallera a un pantalón de vestir · Cysmec (6:12)"}, html: `
      <p class="idea">Cambiar un cierre es <strong>desarmar copiando</strong>: sacás el viejo mirando bien cómo estaba, y ponés el nuevo en el mismo lugar, con las mismas costuras.</p>
      <pre><code>1. Sacale fotos de afuera y de adentro.
2. Descosé solo lo necesario: las costuras que sostienen el cierre,
   y si hace falta unos centímetros de la pretina (la cintura).
3. Sacá el cierre viejo y los pedacitos de hilo.
4. Hilvaná el cierre nuevo en el mismo lugar, cerrado.
5. Probá abrir y cerrar con el hilván puesto.
6. Cosé a máquina con el pie de cierre, sobre las marcas de
   las costuras viejas.
7. Cerrá la pretina, sacá el hilván y planchá.</code></pre>
      <p>El <strong>pie de cierre</strong> es un prensatelas angosto que va a un costado de la aguja: deja coser pegado a los dientes. Se cambia de lado según de qué lado del cierre estés cosiendo.</p>
      <table>
        <tr><th>Cuidado</th><th>Por qué</th></tr>
        <tr><td>Bajá el deslizador cuando llegues a él</td><td>No se puede coser al lado: el pie choca. Pará con la aguja clavada, levantá el pie y movelo</td></tr>
        <tr><td>Girá el volante a mano en los topes de metal</td><td>Si la aguja pega en el metal, se quiebra</td></tr>
        <tr><td>Usá anteojos si tenés</td><td>Una punta de aguja quebrada puede saltar</td></tr>
      </table>
      <p>En un jean, el cierre va con una solapa y costuras dobles a la vista: es de los arreglos más difíciles. Practicá antes en una pollera o un almohadón con cierre.</p>
      <p>Por ejemplo, Rosa cambió el cierre de un pantalón de vestir. Hilvanó el nuevo, lo probó tres veces abriendo y cerrando, y recién después cosió a máquina: quedó derecho a la primera.</p>` },
  ],
  practica: [
    "Buscá 4 prendas o mochilas con cierre en tu casa y anotá de qué tipo es cada una y cuánto miden sus dientes.",
    "Si tenés un cierre trabado o que se abre, probá el arreglo de la tabla y anotá cuántos minutos te llevó y si funcionó.",
    "Cosé un cierre de espiral entre dos retazos con el pie de cierre, y anotá cuántas veces tuviste que mover el deslizador.",
  ],
  recursos: [
    { t: "Rush Order Tees: cómo arreglar un cierre trabado, salido o que se abre (en inglés)", url: "https://www.rushordertees.com/blog/how-to-fix-zipper/" },
    { t: "Michigan State University (Extensión): \"How to Fix, Mend, Replace\", guía clásica de arreglos (PDF de 1978, en inglés)", url: "https://archive.lib.msu.edu/DMC/extension_publications/e1274/e1274.pdf" },
    { t: "Ministerio de Educación de España: título de FP Básica en Arreglo y reparación de artículos textiles (PDF)", url: "https://educacionfpydeportes.gob.es/en/dam/jcr:9b079a8d-f26a-45ca-9ce3-1ff9093d2f8c/12-fpb-arreglo-reparacion-articulos-textiles-anexo-xii-55-se131129.pdf" },
  ],
  quiz: [
    { q: "Si vas a cambiar el cierre de una campera que se abre del todo abajo, ¿qué tipo comprás?", opciones: ["Uno invisible","Uno de espiral cerrado","Uno separable","Cualquiera del mismo color"], correcta: 2, explicacion: "Las camperas abiertas llevan separable. \"Cualquiera del mismo color\" tienta, pero uno cerrado no se abre abajo." },
    { q: "Tu cierre tiene los dientes escondidos atrás de la cinta. ¿Qué tipo es?", opciones: ["Invisible","De metal","Separable","De espiral común"], correcta: 0, explicacion: "En el invisible los dientes no se ven. El espiral tienta porque también es de plástico, pero se ven los dientes." },
    { q: "Medís un cierre para comprar el repuesto. ¿Qué medís?", opciones: ["Toda la cinta, con lo que sobra","Solo el deslizador","El largo de la prenda","Desde el tope de abajo hasta los de arriba, solo los dientes"], correcta: 3, explicacion: "El largo útil es el de los dientes. Toda la cinta tienta por completo, pero da más largo del real." },
    { q: "Si no conseguís el largo justo de un cierre cerrado de espiral, ¿qué podés hacer?", opciones: ["Comprar uno más corto y estirarlo","Comprar uno más largo y hacer un tope nuevo con puntadas","Usar uno separable","Cortarlo sin tope"], correcta: 1, explicacion: "Un tope cosido frena el deslizador. Cortarlo sin tope tienta por rápido, pero el deslizador se escapa." },
    { q: "Tu cierre está trabado y no ves tela agarrada. ¿Qué probás primero?", opciones: ["Tirar fuerte del tirador","Cortar el deslizador","Pasar grafito de lápiz o jabón seco por los dientes","Cambiar el cierre"], correcta: 2, explicacion: "El grafito y el jabón lubrican. Tirar fuerte tienta, pero rompe el tirador o los dientes." },
    { q: "El cierre se abre solo detrás del deslizador. ¿Qué hacés?", opciones: ["Apretás suave con una pinza los costados del deslizador, de a uno","Le ponés pegamento a los dientes","Apretás con toda la fuerza de una vez","Lo cambiás enseguida"], correcta: 0, explicacion: "Las placas separadas se ajustan de a poco. Apretar fuerte de una tienta para terminar rápido, pero si te pasás no corre más." },
    { q: "Al apretar el deslizador con la pinza, ¿cómo sabés cuándo parar?", opciones: ["Apretás hasta que no se mueva","Cuando suena","Apretás 10 veces seguidas","Probás el cierre después de cada apretón"], correcta: 3, explicacion: "Probar entre apretones evita pasarte. Hasta que no se mueva tienta por seguro, pero ahí ya está trabado." },
    { q: "Si al cierre de una mochila le faltan 3 dientes en el medio, ¿qué arreglo corresponde?", opciones: ["Apretar el deslizador","Cambiar el cierre","Pasar jabón","Hacer un tope nuevo"], correcta: 1, explicacion: "Sin dientes no hay cómo enganchar. Apretar el deslizador tienta porque funciona en otros casos, pero acá no hay qué enganchar." },
    { q: "El deslizador se salió por arriba. Ya lo volviste a meter. ¿Qué hacés para que no se vuelva a salir?", opciones: ["Nada, ya está","Un nudo en la cinta","Un tope nuevo con 8 a 10 puntadas apretadas sobre los dientes","Le ponés cinta de embalar"], correcta: 2, explicacion: "El tope cosido lo frena. \"Ya está\" tienta, pero sin tope se vuelve a salir." },
    { q: "Vas a cambiar un cierre. ¿Qué hacés antes de descoser?", opciones: ["Le sacás fotos de afuera y de adentro","Lo cortás con tijera","Lo lavás","Nada"], correcta: 0, explicacion: "Las fotos te dicen cómo armarlo. Cortarlo tienta por rápido, pero podés cortar la prenda." },
    { q: "Hilvanaste el cierre nuevo. ¿Qué hacés antes de coser a máquina?", opciones: ["Sacás el hilván","Lo planchás fuerte","Lo cosés sin probar","Lo probás abriendo y cerrando"], correcta: 3, explicacion: "Probar con hilván te deja corregir. Coser sin probar tienta para ahorrar tiempo, pero descoser cuesta más." },
    { q: "Cosés con el pie de cierre y llegás al deslizador. ¿Qué hacés?", opciones: ["Cosés por encima del deslizador","Parás con la aguja clavada, levantás el pie y movés el deslizador","Seguís rápido para pasarlo","Cortás el hilo y empezás de nuevo"], correcta: 1, explicacion: "Así seguís derecho sin chocar. Coser por encima tienta, pero la aguja pega en el metal y se quiebra." },
  ],
},
{
  id: "ajustar",
  icono: "📏",
  titulo: "Achicar y agrandar",
  nivel: "Avanzado",
  objetivos: [
    "Calcular cuánto entrar cada costura para achicar un contorno",
    "Achicar una prenda por los costados probando antes de cortar",
    "Saber cuánto se puede agrandar según el margen de costura",
  ],
  lecciones: [
    { titulo: "La cuenta de las costuras", html: `
      <p class="idea">Cada costura que corrés hacia adentro saca <strong>el doble</strong> de lo que la corrés, porque toma tela de las dos piezas. Con eso calculás cualquier achique o agrandado.</p>
      <p>El <strong>margen de costura</strong> es la tela que queda entre la costura y el borde cortado, del lado de adentro. Es lo que te deja agrandar.</p>
      <pre><code>Corrés una costura 1 cm hacia adentro
  → cada pieza pierde 1 cm
  → el contorno se achica 2 cm.

Pollera que sobra 4 cm de cintura, con 2 costuras de costado:
  4 cm ÷ 2 costuras = 2 cm por costura
  2 cm ÷ 2 (cada costura saca el doble) = 1 cm
  → cosé cada costado 1 cm más adentro.</code></pre>
      <table>
        <tr><th>Sobra de contorno</th><th>Costuras</th><th>Cuánto entra cada una</th></tr>
        <tr><td>4 cm</td><td>2 (costados)</td><td>1 cm</td></tr>
        <tr><td>6 cm</td><td>2</td><td>1,5 cm</td></tr>
        <tr><td>4 cm</td><td>4 (costados y centros)</td><td>0,5 cm</td></tr>
      </table>
      <p><strong>Repartir es mejor:</strong> si sacás mucho de un solo lugar, la prenda se deforma. Más de 2 cm por costura ya cambia cómo cae la prenda, y conviene repartir entre más costuras.</p>
      <p><strong>Para agrandar</strong> es la misma cuenta al revés, pero con un límite: solo podés usar el margen que hay. Dejá siempre al menos 0,5 a 1 cm de margen para que la costura no se abra. Muchos pantalones de vestir traen en la costura del centro de atrás un margen grande pensado para esto; los jeans casi nunca.</p>
      <p>Por ejemplo, el pantalón del marido de Rosa le apretaba 2 cm de cintura. Tenía 2,5 cm de margen en el centro de atrás: Rosa soltó la costura 1 cm y quedaron 1,5 cm de margen, suficiente.</p>` },
    { titulo: "Achicar por los costados", html: `
      <p class="idea">Achicar por los costados se hace con la prenda <strong>del revés</strong> y puesta: así marcás con alfileres la costura nueva justo donde va.</p>
      <pre><code>1. La persona se pone la prenda DEL REVÉS.
2. Pellizcá lo que sobra en cada costado y sujetá con alfileres
   verticales, sobre la costura vieja.
3. Revisá que los dos costados saquen lo mismo
   (salvo que el cuerpo pida otra cosa).
4. Marcá con tiza la línea de los alfileres.
5. La costura nueva se une SUAVE con la vieja arriba y abajo:
   nada de esquinas.
6. Hilvaná, dá vuelta la prenda y probala del derecho.
7. Cosé a máquina, probá otra vez, y recién ahí cortá el sobrante
   dejando 1 a 1,5 cm de margen. Sobrehilá el borde.</code></pre>
      <p>Esa unión suave se llama <strong>desvanecer</strong>: la costura nueva se va acercando de a poco a la vieja hasta juntarse. Si hacés un escalón, se ve una arruga en ese punto.</p>
      <pre><code>  costura vieja   costura nueva
       |              |
       |             /
       |            /     ← desvanecer: de a poco
       |           |
       |           |</code></pre>
      <table>
        <tr><th>Si achicás...</th><th>Ojo con</th></tr>
        <tr><td>Una camisa por los costados</td><td>Que la sisa (donde se cose la manga) no quede chica</td></tr>
        <tr><td>Una pollera</td><td>Que la cadera no quede marcada de más al sentarse</td></tr>
        <tr><td>Una prenda con bolsillos en el costado</td><td>Los bolsillos: a veces conviene achicar por otra costura</td></tr>
      </table>
      <p>Por ejemplo, Rosa achicó una camisa 2 cm de cada costado. Desvaneció 10 cm hacia la sisa y 10 cm hacia abajo, y la camisa siguió moviéndose cómoda en los brazos.</p>` },
    { titulo: "La cintura del pantalón", video: {"id":"8MjFuMbgZWM","t":"Cómo reducir la cintura de un pantalón · Stephanie Ortiz (8:42)"}, html: `
      <p class="idea">La cintura de un pantalón se ajusta, casi siempre, en la <strong>costura del centro de atrás</strong>: ahí no hay bolsillos ni cierre, y la costura se puede desvanecer hacia abajo.</p>
      <p>La <strong>pretina</strong> es la tira de tela de la cintura, donde están el botón y las presillas del cinturón. Para ajustar el centro de atrás, se abre la pretina en esa zona.</p>
      <pre><code>Achicar 3 cm de cintura (pantalón de vestir):
1. Fotos. Descosé la presilla del medio de atrás, si tiene.
2. Descosé la pretina unos 8 cm a cada lado del centro de atrás.
3. 3 cm de contorno en 1 costura → la costura entra 1,5 cm.
4. Marcá la costura nueva: 1,5 cm adentro arriba,
   y desvanecé hasta la costura vieja unos 12 a 15 cm más abajo.
5. Hilvaná y probá.
6. Cosé, achicá la pretina en su propia costura del centro,
   y volvé a coserla a la cintura.
7. Volvé a poner la presilla y planchá.</code></pre>
      <table>
        <tr><th>Hasta cuánto</th><th>Por qué</th></tr>
        <tr><td>Hasta unos 4 cm de contorno por el centro de atrás</td><td>Más, y los bolsillos de atrás quedan demasiado juntos</td></tr>
        <tr><td>Más de 4 cm</td><td>Repartí: centro de atrás y costados</td></tr>
      </table>
      <p><strong>En jeans</strong> la pretina va doblada y cosida con costura doble a la vista, y la costura de atrás es doble. Se puede, pero es de los arreglos más difíciles: dejalo para cuando tengas práctica en pantalones de vestir.</p>
      <p>Por ejemplo, a una vecina le sobraban 3 cm de cintura en un pantalón de vestir. Rosa entró 1,5 cm la costura del centro de atrás, desvaneciendo 14 cm hacia abajo, y achicó la pretina lo mismo.</p>` },
  ],
  practica: [
    "Calculá cuánto entra cada costura en 3 casos: sobran 2 cm con 2 costuras, 6 cm con 2 costuras y 6 cm con 4 costuras. Anotá los resultados.",
    "Medí con regla el margen de costura del centro de atrás de 2 pantalones de tu casa y anotá cuánto se podría agrandar cada uno dejando 1 cm.",
    "En un retazo doblado, cosé una costura nueva desvanecida 10 cm hacia una línea vieja y medí si queda algún escalón: anotá los milímetros.",
  ],
  recursos: [
    { t: "Ministerio de Educación de España: título de FP Básica en Arreglo y reparación de artículos textiles (PDF)", url: "https://educacionfpydeportes.gob.es/en/dam/jcr:9b079a8d-f26a-45ca-9ce3-1ff9093d2f8c/12-fpb-arreglo-reparacion-articulos-textiles-anexo-xii-55-se131129.pdf" },
    { t: "Michigan State University (Extensión): \"How to Fix, Mend, Replace\", guía clásica de arreglos (PDF de 1978, en inglés)", url: "https://archive.lib.msu.edu/DMC/extension_publications/e1274/e1274.pdf" },
    { t: "Universidad de Tennessee (4-H): actividad \"Arreglá tu ropa\" (PDF, en inglés)", url: "https://4h.tennessee.edu/wp-content/uploads/sites/47/2022/08/Activity-10.pdf" },
  ],
  quiz: [
    { q: "Si corrés una costura 1 cm hacia adentro, ¿cuánto se achica el contorno?", opciones: ["1 cm","0,5 cm","2 cm, porque toma tela de las dos piezas","4 cm"], correcta: 2, explicacion: "Cada costura saca el doble. Un centímetro tienta porque es lo que corrés, pero son dos piezas." },
    { q: "Si a una pollera le sobran 4 cm de cintura y tiene 2 costuras de costado, ¿cuánto entra cada una?", opciones: ["1 cm","2 cm","4 cm","0,5 cm"], correcta: 0, explicacion: "4 ÷ 2 costuras = 2, y cada costura saca el doble: 1 cm. Dos tienta porque es lo que saca cada costura, pero se corre la mitad." },
    { q: "Tenés que sacar 6 cm de contorno. ¿Qué es mejor?", opciones: ["Sacarlo todo de una costura","Sacarlo solo del centro de adelante","Cortar 6 cm de tela","Repartirlo entre varias costuras"], correcta: 3, explicacion: "Repartido, la prenda no se deforma. Una sola costura tienta por menos trabajo, pero la prenda cae torcida." },
    { q: "Si un pantalón tiene 2,5 cm de margen y necesitás agrandar 2 cm de cintura en una costura, ¿alcanza?", opciones: ["No, hace falta 4 cm de margen","Sí: soltás 1 cm y quedan 1,5 cm de margen","Sí, y queda sin margen","No se puede agrandar nunca"], correcta: 1, explicacion: "Agrandar 2 cm en 1 costura es soltar 1 cm. Pensar que hacen falta 4 tienta, pero la costura agranda el doble." },
    { q: "Al agrandar, ¿cuánto margen dejás como mínimo?", opciones: ["Nada, usás todo","5 cm","Entre 0,5 y 1 cm, para que la costura no se abra","No importa"], correcta: 2, explicacion: "Sin margen, la costura se abre. Usar todo tienta para ganar más lugar, pero se rompe al primer uso." },
    { q: "Querés agrandar un jean. ¿Qué esperás encontrar?", opciones: ["Poco margen: los jeans casi nunca traen margen grande","Un margen grande en el centro de atrás","Tela de sobra en la pretina","Elástico escondido"], correcta: 0, explicacion: "El margen grande es típico de pantalones de vestir. Esperarlo en un jean tienta, pero casi nunca está." },
    { q: "Si vas a achicar una camisa por los costados, ¿cómo se la prueba la persona para marcar?", opciones: ["Del derecho, y marcás por afuera","No se la prueba","Acostada","Del revés, para marcar con alfileres justo donde va la costura"], correcta: 3, explicacion: "Del revés marcás directo sobre la costura. Del derecho tienta porque se ve cómo queda, pero los alfileres quedan del lado equivocado." },
    { q: "Tu costura nueva hace un escalón al juntarse con la vieja y se ve una arruga. ¿Qué faltó?", opciones: ["Más alfileres","Desvanecer: acercarla de a poco hasta juntarse","Planchar más fuerte","Hilo más grueso"], correcta: 1, explicacion: "La unión suave evita la arruga. Planchar tienta, pero el escalón sigue en la costura." },
    { q: "Si ya cosiste a máquina el achique, ¿cuándo cortás el sobrante?", opciones: ["Antes de coser","Al ras de la costura","Después de probarlo otra vez, dejando 1 a 1,5 cm","Nunca, lo dejás todo"], correcta: 2, explicacion: "Probar antes de cortar te deja deshacer. Cortar antes tienta por prolijo, pero no hay vuelta atrás." },
    { q: "Si achicás mucho una camisa por los costados sin mirar arriba, ¿qué puede pasar?", opciones: ["Que la sisa quede chica y apriete los brazos","Que se alargue","Nada","Que se agrande el cuello"], correcta: 0, explicacion: "Los costados llegan a la sisa. \"Nada\" tienta, pero al mover los brazos tira." },
    { q: "Le sobran 3 cm de cintura a un pantalón de vestir. ¿Por dónde lo achicás primero?", opciones: ["Por los bolsillos de adelante","Por el cierre","Por la entrepierna","Por la costura del centro de atrás, abriendo la pretina"], correcta: 3, explicacion: "Atrás no hay bolsillos ni cierre. El cierre tienta porque está en la cintura, pero desarmarlo es mucho más trabajo." },
    { q: "Tenés que sacar 6 cm de cintura de un pantalón. ¿Qué hacés?", opciones: ["Sacás los 6 del centro de atrás","Repartís entre el centro de atrás y los costados","Ponés un cinturón","Cortás la pretina"], correcta: 1, explicacion: "Más de unos 4 cm atrás junta los bolsillos. Todo del centro tienta por fácil, pero los bolsillos quedan pegados." },
  ],
},
{
  id: "elastizados",
  icono: "🧶",
  titulo: "Telas que estiran y elásticos",
  nivel: "Avanzado",
  objetivos: [
    "Elegir aguja y puntada para coser tela de punto sin que la costura se corte al estirar",
    "Hacer el ruedo de una remera con zigzag o aguja doble",
    "Cambiar el elástico gastado de una cintura",
  ],
  lecciones: [
    { titulo: "Coser tela de punto", html: `
      <p class="idea">La <strong>tela de punto</strong> (la de remeras, calzas y buzos) estira. Si la cosés con puntada recta, al estirarla <strong>la costura se corta</strong>. Necesita una puntada que estire con ella.</p>
      <table>
        <tr><th>Qué</th><th>Para tela de punto</th><th>Por qué</th></tr>
        <tr><td>Aguja de máquina</td><td>Punta bola o para elastizados (stretch)</td><td>Tiene la punta redondeada: separa los hilos en vez de cortarlos</td></tr>
        <tr><td>Puntada</td><td>Zigzag angosto o puntada elástica</td><td>El zigzag se abre cuando la tela estira</td></tr>
        <tr><td>Hilo</td><td>De poliéster</td><td>Es más elástico que el de algodón</td></tr>
        <tr><td>Al coser</td><td>Dejá que la máquina lleve la tela, sin estirarla</td><td>Si la estirás, la costura queda ondulada</td></tr>
      </table>
      <pre><code>Zigzag para costuras de tela de punto (guía para empezar):
  ancho: 1 a 1,5 mm (angosto)
  largo: 2 a 2,5 mm
Probalo SIEMPRE en un retazo de la misma tela.</code></pre>
      <p>La <strong>puntada elástica</strong> es una puntada de la máquina que da tres pasos (dos adelante, uno atrás) y estira sin cortarse. No todas las máquinas familiares la tienen: el zigzag angosto sirve igual.</p>
      <p><strong>La prueba del estirón:</strong> cosé 10 cm en un retazo y estiralo fuerte. Si escuchás que crujen hilos, la puntada es poco elástica: probá un zigzag un poco más ancho.</p>
      <p><strong>Si la aguja saltea puntadas</strong> (quedan huecos sin coser), casi siempre es la aguja: cambiala por una punta bola nueva.</p>
      <p>Por ejemplo, Rosa cerró el costado descosido de una calza con puntada recta y se volvió a abrir el primer día. Lo rehízo con zigzag angosto y aguja punta bola, lo probó estirando y aguantó.</p>` },
    { titulo: "El ruedo de una remera", html: `
      <p class="idea">El ruedo de una remera no se cose como el de un pantalón: tiene que estirar. Se hace con <strong>zigzag</strong> o con <strong>aguja doble</strong>, que hace dos líneas paralelas como las de fábrica.</p>
      <pre><code>Acortar una remera:
1. Marcá el largo nuevo con la remera puesta.
2. Dejá 2 cm de margen y cortá derecho, con la remera bien apoyada
   en la mesa, sin estirarla.
3. Doblá 2 cm hacia adentro y planchá con vapor, apoyando la plancha,
   sin arrastrarla (arrastrar estira el borde).
4. Sujetá con alfileres o con clips de papel.
5. Cosé del derecho, a 1,5 cm del doblez, con zigzag angosto
   o con aguja doble.
6. Cortá con cuidado la tela que sobra del revés, cerca de la costura.</code></pre>
      <p>La <strong>aguja doble</strong> son dos agujas unidas que se ponen en la máquina como una sola, con dos hilos arriba. Del derecho hace dos costuras paralelas; del revés, el hilo de abajo hace un zigzag que deja estirar. Solo anda en máquinas que tienen zigzag: revisá el manual de la tuya.</p>
      <table>
        <tr><th>Si pasa esto</th><th>Probá esto</th></tr>
        <tr><td>El ruedo queda ondulado</td><td>No estires la tela al coser; planchá con vapor</td></tr>
        <tr><td>Se forma un caminito levantado entre las dos agujas</td><td>Aflojá un poco la tensión del hilo de arriba</td></tr>
        <tr><td>La tela se mete en el agujero de la placa</td><td>Empezá la costura sobre un papel de seda y arrancalo después</td></tr>
      </table>
      <p>El <strong>papel de seda</strong> o un papel de molde fino debajo de la tela le da cuerpo mientras cosés, y se arranca sin problema al terminar.</p>
      <p>Por ejemplo, Rosa acortó 6 cm una remera de su hija: cortó 4 cm (6 menos 2 de margen), dobló 2 cm y cosió con aguja doble. El ruedo estira y se ve como de fábrica.</p>` },
    { titulo: "Cambiar el elástico de la cintura", video: {"id":"swHN-HQydVc","t":"Cambiar la goma elástica de la cintura a un pantalón de deporte · Cysmec (4:10)"}, html: `
      <p class="idea">El elástico de una cintura se gasta y la prenda se cae. Si va suelto dentro de un túnel de tela, la <strong>jareta</strong>, se cambia sin desarmar casi nada.</p>
      <pre><code>1. Del lado de adentro, buscá una costura de la jareta
   (por ejemplo, la del centro de atrás) y descosé 2 a 3 cm.
2. Cortá el elástico viejo y sacalo tirando.
3. Medí el nuevo: rodeá la cintura de la persona con el elástico
   apenas estirado, que quede cómodo. Marcá y sumá 2 cm.
4. Prendé un alfiler de gancho en una punta y pasalo por la jareta.
   Prendé la otra punta afuera con otro alfiler, para que no se escape.
5. Probá la prenda antes de coser: ajustá el largo si hace falta.
6. Superponé las puntas 2 cm y cosé con zigzag, en un cuadrado
   o en una X, ida y vuelta.
7. Cerrá la abertura de la jareta con puntada recta o a mano.</code></pre>
      <table>
        <tr><th>Elástico</th><th>Para qué</th></tr>
        <tr><td>Más ancho que la jareta</td><td>No entra: medí la jareta antes de comprar</td></tr>
        <tr><td>1 a 2 mm más angosto que la jareta</td><td>Entra y no se da vuelta</td></tr>
        <tr><td>Mucho más angosto</td><td>Se enrosca adentro con el uso</td></tr>
      </table>
      <p>Si el elástico está <strong>cosido</strong> a la tela (se ven costuras que lo atraviesan), cambiarlo lleva más trabajo: hay que descoser toda la cintura y coserlo estirándolo. Empezá por las prendas con jareta.</p>
      <p>Por ejemplo, el pantalón de gimnasia del hijo de Rosa se caía. Ella abrió 3 cm de la jareta, midió el elástico nuevo en la cintura del chico (64 cm más 2 de superposición) y en 15 minutos estaba listo.</p>` },
  ],
  practica: [
    "Cosé 10 cm de tela de remera con puntada recta y otros 10 cm con zigzag angosto, estiralos fuerte y anotá cuál se cortó.",
    "Acortá una remera vieja 5 cm: anotá cuánto cortaste, qué puntada usaste y si el ruedo quedó ondulado.",
    "Medí el ancho de la jareta de un pantalón con elástico y el ancho del elástico, y anotá la diferencia en milímetros.",
  ],
  recursos: [
    { t: "RE:Source (StopWaste): guía para arreglar ropa en casa, con videos (en inglés)", url: "https://resource.stopwaste.org/fact-sheet/textiles-diy-clothing-repair" },
    { t: "Universidad de Tennessee (4-H): actividad \"Arreglá tu ropa\" (PDF, en inglés)", url: "https://4h.tennessee.edu/wp-content/uploads/sites/47/2022/08/Activity-10.pdf" },
    { t: "Curso de este sitio: Costura a mano y a máquina (incluye cuánto cobrar y cuidar la máquina)", url: "https://pkeios.github.io/EiaLearning/costura/" },
  ],
  quiz: [
    { q: "Cerrás el costado de una calza con puntada recta y se vuelve a abrir al ponértela. ¿Por qué?", opciones: ["El hilo era de otro color","La aguja era nueva","La puntada recta no estira y se corta cuando la tela estira","Le faltó planchado"], correcta: 2, explicacion: "La tela de punto necesita una puntada que estire. Pensar en el planchado tienta, pero no cambia la elasticidad." },
    { q: "Vas a coser tela de remera a máquina. ¿Qué aguja ponés?", opciones: ["Punta bola o para elastizados","Una para jean, número 100","La más filosa","Una aguja de mano"], correcta: 0, explicacion: "La punta bola separa los hilos sin cortarlos. La de jean tienta por resistente, pero hace agujeros en el punto." },
    { q: "Tu máquina no tiene puntada elástica. ¿Qué usás en tela de punto?", opciones: ["Puntada recta larga","Puntada recta corta","No se puede coser","Zigzag angosto"], correcta: 3, explicacion: "El zigzag se abre al estirar. La recta larga tienta porque parece más floja, pero igual se corta." },
    { q: "Mientras cosés tela de punto, ¿qué hacés con la tela?", opciones: ["La estirás para que quede firme","Dejás que la máquina la lleve, sin estirarla","La empujás hacia la aguja","La sostenés tirante atrás"], correcta: 1, explicacion: "Estirada, la costura queda ondulada. Estirarla tienta para que quede firme, pero arruina la costura." },
    { q: "Hacés la prueba del estirón y crujen los hilos. ¿Qué cambiás?", opciones: ["Usás puntada recta","Estirás menos en la prueba","Probás un zigzag un poco más ancho","Nada, está bien"], correcta: 2, explicacion: "Si cruje, la puntada no estira lo suficiente. Estirar menos en la prueba tienta, pero al usarla se va a cortar." },
    { q: "Si la máquina saltea puntadas en una remera, ¿qué probás primero?", opciones: ["Cambiar la aguja por una punta bola nueva","Cambiar el color del hilo","Coser más rápido","Apretar más la tela"], correcta: 0, explicacion: "Casi siempre es la aguja. Coser más rápido tienta para \"pasar\", pero saltea más." },
    { q: "Querés acortar una remera 6 cm con 2 cm de margen. ¿Cuánto cortás?", opciones: ["6 cm","8 cm","2 cm","4 cm"], correcta: 3, explicacion: "6 menos 2 de margen da 4. Cortar 6 tienta porque es lo que acortás, pero te quedás sin margen." },
    { q: "Vas a planchar el doblez del ruedo de una remera. ¿Cómo movés la plancha?", opciones: ["La arrastrás de punta a punta","La apoyás y la levantás, sin arrastrarla","Planchás sin vapor y fuerte","No se plancha"], correcta: 1, explicacion: "Arrastrar estira el borde. Arrastrar tienta porque es como se plancha siempre, pero en tela de punto la deforma." },
    { q: "Usás aguja doble y se forma un caminito levantado entre las dos costuras. ¿Qué ajustás?", opciones: ["Apretás la tensión de arriba","Cambiás a puntada recta","Aflojás un poco la tensión del hilo de arriba","Cosés más rápido"], correcta: 2, explicacion: "La tensión alta junta las dos líneas. Apretarla tienta para \"fijar\", pero lo empeora." },
    { q: "La tela de remera se mete en el agujero de la placa al empezar. ¿Qué probás?", opciones: ["Empezar sobre un papel de seda y arrancarlo después","Coser más rápido","Usar una aguja de jean","Mojar la tela"], correcta: 0, explicacion: "El papel le da cuerpo a la tela. Más rápido tienta para que pase, pero se traba más." },
    { q: "Para medir el elástico nuevo de una cintura, ¿qué hacés?", opciones: ["Lo cortás igual al contorno de la cintura sin estirar","Medís el pantalón estirado al máximo","Lo cortás a ojo","Rodeás la cintura con el elástico apenas estirado, marcás y sumás 2 cm"], correcta: 3, explicacion: "Apenas estirado sostiene la prenda, y los 2 cm son para superponer. Igual al contorno tienta por exacto, pero queda flojo." },
    { q: "Ya pasaste el elástico por la jareta. ¿Qué hacés antes de coser las puntas?", opciones: ["Lo cosés directo","La persona se prueba la prenda para ajustar el largo","Lo cortás 10 cm más","Cerrás primero la abertura"], correcta: 1, explicacion: "Probar te deja corregir. Coser directo tienta para terminar, pero si quedó flojo hay que descoser." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu servicio de arreglos",
  nivel: "Avanzado",
  objetivos: [
    "Recibir una prenda con una ficha que diga qué se hace, cuánto cuesta y para cuándo",
    "Calcular el precio de un arreglo con el tiempo y los materiales",
    "Hacer 5 arreglos distintos y evaluarlos con la rúbrica",
  ],
  lecciones: [
    { titulo: "La ficha del arreglo", html: `
      <p class="idea">Cuando arreglás para otros, cada prenda entra con una <strong>ficha</strong>: qué tiene, qué se hace, cuánto cuesta y cuándo se entrega. Evita confusiones y reclamos.</p>
      <pre><code>FICHA DE ARREGLO  N.º 012
Cliente:   Ana López        Tel.: 11 ____-____
Prenda:    Pantalón de vestir gris
Arreglo:   Ruedo, acortar 4 cm (marcado con alfileres, con zapatos)
Precio:    $____     Seña: $____
Recibido:  lunes 10    Entrega: jueves 13
Observaciones: la tela tiene un brillo en la rodilla (ya venía así).</code></pre>
      <table>
        <tr><th>Parte de la ficha</th><th>Para qué sirve</th></tr>
        <tr><td>Número</td><td>Para encontrar la prenda; se pega una copia con un alfiler de gancho en la prenda</td></tr>
        <tr><td>Arreglo y medida</td><td>Para que no haya dudas de qué se pidió</td></tr>
        <tr><td>Observaciones</td><td>Para anotar manchas o daños que ya traía la prenda</td></tr>
        <tr><td>Seña</td><td>Una parte del precio por adelantado, que asegura que la persona vuelve a buscarla</td></tr>
      </table>
      <p>Las observaciones protegen a las dos partes: si la prenda ya traía una mancha, queda escrito antes de que la toques. Mostrásela a la persona al recibir la prenda.</p>
      <p><strong>Datos personales:</strong> el teléfono y el nombre de tus clientes son para avisarles que la prenda está lista. No los compartas ni los uses para otra cosa sin permiso.</p>
      <p>Por ejemplo, una vecina le reclamó a Rosa una manchita en una pollera. Rosa buscó la ficha: en observaciones decía "mancha chica en el bolsillo, ya venía". La vecina se acordó y no hubo problema.</p>` },
    { titulo: "Cuánto cobrar un arreglo", html: `
      <p class="idea">El precio de un arreglo sale de <strong>cuánto tiempo te lleva</strong>, multiplicado por lo que vale tu hora, más los <strong>materiales</strong>. Así no regalás tu trabajo.</p>
      <pre><code>Precio = (minutos ÷ 60) × valor de tu hora + materiales

Ejemplo con números inventados para practicar:
Tu hora vale $10.000. Cambiar un cierre te lleva 90 minutos.
El cierre cuesta $2.500.
  (90 ÷ 60) × 10.000 = 1,5 × 10.000 = $15.000
  15.000 + 2.500     = $17.500</code></pre>
      <p>Los precios cambian todo el tiempo. Para saber cuánto vale tu hora, <strong>preguntá en 2 o 3 talleres de arreglos de tu barrio</strong> cuánto cobran un ruedo y un cierre, y compará con lo que te llevan a vos.</p>
      <table>
        <tr><th>Error común</th><th>Qué pasa</th></tr>
        <tr><td>Cobrar solo los materiales</td><td>Trabajás gratis</td></tr>
        <tr><td>Contar el tiempo de la primera vez</td><td>Cobrás caro hasta que practicás; usá el tiempo de alguien con práctica</td></tr>
        <tr><td>Olvidar la prueba y el planchado</td><td>Esos minutos también son trabajo</td></tr>
      </table>
      <p><strong>Medí tus tiempos:</strong> anotá cuánto tardás en cada arreglo. Después de 5 ruedos sabés tu tiempo real, y tu precio deja de ser un número al azar.</p>
      <p>Por ejemplo, Rosa cobraba los ruedos "a ojo". Cronometró 5: el promedio le dio 40 minutos. Con eso calculó su precio y vio que estaba cobrando la mitad de lo que le llevaba.</p>` },
    { titulo: "El proyecto y la rúbrica", html: `
      <p class="idea">El proyecto final: <strong>5 arreglos distintos</strong> en prendas reales, de tu casa o de conocidos, cada uno con su ficha, su tiempo y una foto de antes y otra de después.</p>
      <pre><code>Los 5 arreglos (uno de cada grupo):
1. Un botón, broche u ojal          (módulo de botones)
2. Un ruedo                          (módulo de ruedos)
3. Un descosido, zurcido o parche    (módulo de roturas)
4. Un cierre arreglado o cambiado    (módulo de cierres)
5. Un achique, agrandado o elástico  (módulos de ajustar o elastizados)</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Funciona</td><td>Se usa sin problema una semana</td><td>Funciona, pero hubo que retocar</td><td>Se soltó o no sirve</td></tr>
        <tr><td>Se ve prolijo</td><td>Casi no se nota el arreglo</td><td>Se nota un poco</td><td>Se ve desprolijo</td></tr>
        <tr><td>Medida justa</td><td>Quedó en la medida marcada (± 0,5 cm)</td><td>Hasta 1 cm de diferencia</td><td>Más de 1 cm</td></tr>
        <tr><td>Ficha completa</td><td>Todos los datos y observaciones</td><td>Falta algún dato</td><td>Sin ficha</td></tr>
        <tr><td>Tiempo anotado</td><td>Anotado y con precio calculado</td><td>Solo el tiempo</td><td>Nada</td></tr>
      </table>
      <p>Cada arreglo suma hasta 10 puntos; el proyecto, hasta 50. Con <strong>40 o más</strong> estás lista o listo para ofrecer arreglos. Si un criterio te dio 0, repetí ese arreglo en otra prenda.</p>
      <p><strong>La semana de uso</strong> es la verdadera prueba: un ruedo que se ve lindo en la percha y se descose al primer lavado no está terminado.</p>
      <p>Por ejemplo, Rosa sumó 42 puntos. Su cierre sacó 1 en prolijidad porque una costura quedó torcida: lo repitió en otra pollera y esta vez sacó 2.</p>` },
  ],
  practica: [
    "Armá tu modelo de ficha de arreglo con los 8 datos del ejemplo y completala para tu primer arreglo del proyecto.",
    "Preguntá en 2 o 3 talleres de tu barrio cuánto cobran un ruedo y un cierre, y anotá los precios.",
    "Hacé los 5 arreglos del proyecto, anotá el tiempo de cada uno y calculá tu puntaje con la rúbrica sobre 50.",
    "Calculá el precio de tus 5 arreglos con la fórmula y anotá cuál te conviene más ofrecer por el tiempo que lleva.",
  ],
  recursos: [
    { t: "Curso de este sitio: Costura a mano y a máquina (incluye cuánto cobrar y cuidar la máquina)", url: "https://pkeios.github.io/EiaLearning/costura/" },
    { t: "Ministerio de Educación de España: título de FP Básica en Arreglo y reparación de artículos textiles (PDF)", url: "https://educacionfpydeportes.gob.es/en/dam/jcr:9b079a8d-f26a-45ca-9ce3-1ff9093d2f8c/12-fpb-arreglo-reparacion-articulos-textiles-anexo-xii-55-se131129.pdf" },
    { t: "RE:Source (StopWaste): guía para arreglar ropa en casa, con videos (en inglés)", url: "https://resource.stopwaste.org/fact-sheet/textiles-diy-clothing-repair" },
  ],
  quiz: [
    { q: "Recibís un pantalón para arreglar. ¿Qué anotás en la ficha?", opciones: ["Solo el nombre","Solo el precio","Cliente, prenda, arreglo con la medida, precio, seña y fecha de entrega","Nada, te acordás"], correcta: 2, explicacion: "La ficha completa evita confusiones. \"Te acordás\" tienta con pocas prendas, pero con diez ya se mezclan." },
    { q: "La prenda que te traen ya tiene una mancha. ¿Qué hacés?", opciones: ["La anotás en observaciones y se la mostrás a la persona","No decís nada","La lavás sin preguntar","Te negás a arreglarla"], correcta: 0, explicacion: "Así queda claro que ya venía. No decir nada tienta para no incomodar, pero después te la pueden reclamar." },
    { q: "Si una persona deja una prenda y nunca vuelve, ¿qué te ayuda a evitarlo?", opciones: ["Cobrar el doble al entregar","No anotar el teléfono","Arreglarla más rápido","Pedir una seña al recibirla"], correcta: 3, explicacion: "La seña asegura que vuelva. Cobrar el doble tienta, pero si no vuelve no cobrás nada." },
    { q: "Tenés los teléfonos de tus clientes en las fichas. ¿Para qué los usás?", opciones: ["Para pasarlos a otros comercios","Para avisarles que la prenda está lista, y no los compartís sin permiso","Para sumarlos a cualquier grupo","Para publicarlos"], correcta: 1, explicacion: "Son datos personales. Sumarlos a un grupo tienta para hacer publicidad, pero sin permiso no corresponde." },
    { q: "Si tu hora vale $10.000, un arreglo te lleva 30 minutos y no usa materiales, ¿cuánto cobrás?", opciones: ["$10.000","$300.000","$5.000","$3.000"], correcta: 2, explicacion: "30 ÷ 60 = 0,5 hora, y 0,5 × 10.000 = 5.000. $300.000 tienta si multiplicás minutos por la hora, pero hay que pasar los minutos a horas." },
    { q: "Si cambiar un cierre te lleva 90 minutos, tu hora vale $10.000 y el cierre cuesta $2.500, ¿cuánto cobrás?", opciones: ["$17.500","$15.000","$12.500","$2.500"], correcta: 0, explicacion: "1,5 horas × 10.000 = 15.000, más 2.500 del cierre. $15.000 tienta, pero te olvidaste del material." },
    { q: "Solo cobrás el cierre que compraste. ¿Qué pasa?", opciones: ["Ganás más clientes y está bien","Nada, es lo justo","Cobrás de más","Trabajás gratis: no cobrás tu tiempo"], correcta: 3, explicacion: "Tu tiempo también vale. \"Ganás clientes\" tienta, pero no podés vivir de eso." },
    { q: "Tu primer ruedo te llevó 2 horas. ¿Usás ese tiempo para el precio?", opciones: ["Sí, siempre el de la primera vez","No: usás el tiempo de alguien con práctica, o tu tiempo después de practicar","Sí, y le sumás una hora","No cobrás nada"], correcta: 1, explicacion: "La primera vez se tarda más. Cobrar 2 horas tienta, pero el precio queda muy caro." },
    { q: "Querés saber cuánto vale tu hora. ¿Qué hacés?", opciones: ["Copiás un precio de otra provincia","Elegís un número al azar","Preguntás en 2 o 3 talleres de tu barrio cuánto cobran un ruedo y un cierre","Cobrás lo mismo que hace 5 años"], correcta: 2, explicacion: "Los talleres de tu zona te dan el precio real. Otra provincia tienta porque está en internet, pero los precios cambian según el lugar." },
    { q: "Tu ruedo se ve perfecto en la percha. ¿Cuándo lo das por terminado en el proyecto?", opciones: ["Después de una semana de uso sin problemas","En el momento","Cuando te lo pagan","Cuando lo planchás"], correcta: 0, explicacion: "El uso es la prueba de verdad. Darlo por terminado en el momento tienta, pero puede descoserse en el primer lavado." },
    { q: "Si en tu proyecto sumás 36 sobre 50, ¿qué hacés?", opciones: ["Ya podés ofrecer arreglos","Abandonás","Cambiás la rúbrica","Repetís los arreglos con criterios en 0 o 1 hasta llegar a 40 o más"], correcta: 3, explicacion: "Con 40 o más estás lista o listo. Cambiar la rúbrica tienta para aprobar, pero no mejora el arreglo." },
    { q: "Tu ruedo quedó 1,5 cm más corto que lo marcado. ¿Cuánto sacás en \"medida justa\"?", opciones: ["2 puntos","0 puntos: es más de 1 cm","1 punto","No se evalúa"], correcta: 1, explicacion: "Más de 1 cm de diferencia es 0. Un punto tienta porque \"es poco\", pero 1,5 cm se nota en un pantalón." },
  ],
},
];
