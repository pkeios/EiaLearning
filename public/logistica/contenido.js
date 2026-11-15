// Temario del curso "Logística y depósito". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js logistica y node tools/metodologia.js logistica
window.TEMARIO = [
{
  id: "empezar",
  icono: "📦",
  titulo: "Empezar: qué es la logística",
  nivel: "Básico",
  objetivos: [
    "Explicar el recorrido de un producto desde el proveedor hasta el cliente",
    "Reconocer los puestos de trabajo de un depósito y qué hace cada uno",
    "Identificar los riesgos principales y la ropa de seguridad de un depósito",
  ],
  lecciones: [
    { titulo: "El recorrido de un producto", html: `
      <p class="idea">La <strong>logística</strong> es todo lo que hace falta para que un producto llegue al lugar correcto, en la cantidad correcta, en buen estado y a tiempo. El <strong>depósito</strong> (o almacén) es donde se guarda mientras tanto.</p>
      <pre><code>Proveedor → Recepción → Almacenamiento → Preparación del pedido → Envío → Cliente
              (llega)     (se guarda)        (se junta y embala)    (sale)</code></pre>
      <table>
        <tr><th>Etapa</th><th>Qué se hace</th><th>Módulo</th></tr>
        <tr><td>Recepción</td><td>Controlar lo que llega</td><td>Recibir mercadería</td></tr>
        <tr><td>Almacenamiento</td><td>Guardar ordenado y que se encuentre</td><td>Guardar y ubicar</td></tr>
        <tr><td>Preparación</td><td>Juntar los productos de cada pedido y embalarlos</td><td>Preparar pedidos</td></tr>
        <tr><td>Envío</td><td>Despachar y hacer seguimiento</td><td>Envíos y devoluciones</td></tr>
      </table>
      <p><strong>Un error en una etapa se paga en las siguientes:</strong> si en la recepción no contás bien, después el sistema dice que hay stock que no existe y vendés lo que no tenés.</p>
      <p>Por ejemplo, una zapatilla comprada por internet pasa por todas estas etapas antes de llegar a tu casa, y en cada una hay personas trabajando.</p>` },
    { titulo: "Los puestos del depósito", html: `
      <p class="idea">Un depósito tiene varios puestos, y muchos son buenos primeros empleos: se aprenden en el trabajo y no siempre piden experiencia.</p>
      <table>
        <tr><th>Puesto</th><th>Qué hace</th></tr>
        <tr><td>Operario de depósito</td><td>Recibe, acomoda y mueve mercadería</td></tr>
        <tr><td>Preparador de pedidos (picker)</td><td>Junta los productos de cada pedido</td></tr>
        <tr><td>Embalador</td><td>Arma las cajas y las etiqueta</td></tr>
        <tr><td>Repositor</td><td>Repone mercadería en góndolas o estanterías</td></tr>
        <tr><td>Maquinista o autoelevadorista</td><td>Maneja el autoelevador (con capacitación y habilitación)</td></tr>
        <tr><td>Administrativo de depósito</td><td>Carga ingresos y egresos en el sistema, remitos e inventario</td></tr>
        <tr><td>Chofer o repartidor</td><td>Lleva los pedidos (con la licencia que corresponda)</td></tr>
      </table>
      <p><strong>Lo que valoran en casi todos:</strong> orden, atención al detalle, cumplir horarios, trabajar en equipo y respetar las normas de seguridad.</p>
      <p>Por ejemplo, un preparador de pedidos que se equivoca poco vale mucho: cada error es un cliente que recibe algo que no pidió y un envío de vuelta que cuesta plata.</p>` },
    { titulo: "Seguridad desde el primer día", html: `
      <p class="idea">En un depósito hay cargas pesadas, máquinas y estanterías altas. La mayoría de los accidentes se evitan con orden, la ropa adecuada y respetando las reglas.</p>
      <table>
        <tr><th>Riesgo</th><th>Cómo se previene</th></tr>
        <tr><td>Lesiones de espalda al levantar cajas</td><td>Técnica correcta y pedir ayuda con lo pesado (módulo de seguridad)</td></tr>
        <tr><td>Golpes y atropellos con autoelevadores</td><td>Caminar por las sendas peatonales; solo maneja quien está habilitado</td></tr>
        <tr><td>Caída de objetos desde estanterías</td><td>Lo pesado abajo; no trepar a las estanterías</td></tr>
        <tr><td>Tropiezos y caídas</td><td>Pasillos despejados, nada tirado en el piso</td></tr>
        <tr><td>Cortes al abrir cajas</td><td>Cúter con cuchilla retráctil, cortando hacia afuera del cuerpo</td></tr>
      </table>
      <p>Los <strong>elementos de protección personal</strong> (EPP) más comunes en un depósito son el calzado de seguridad (con puntera reforzada), guantes y, en algunos lugares, chaleco reflectivo y casco. La empresa tiene que darlos.</p>
      <p><strong>Si te lastimás trabajando,</strong> avisá enseguida a tu encargado: los accidentes de trabajo los cubre la ART (aseguradora de riesgos del trabajo) de la empresa.</p>
      <p>Esta lección es una introducción; la capacitación de seguridad de cada lugar de trabajo es obligatoria y no la reemplaza.</p>
      <p>Por ejemplo, cruzar por el medio de un pasillo donde circula un autoelevador, en vez de por la senda marcada, es una de las causas más comunes de accidentes graves.</p>` },
  ],
  practica: [
    "Elegí un producto que compraste (por internet o en un comercio) y anotá las etapas por las que pasó, desde el proveedor hasta vos.",
    "Buscá 3 avisos de trabajo de depósito o logística y anotá qué puesto es cada uno y qué requisitos piden.",
    "Hacé una tabla con 5 riesgos de un depósito y cómo se previene cada uno. Si podés, mirá un depósito o un comercio grande y anotá qué medidas de seguridad ves.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo (SRT)", url: "https://www.argentina.gob.ar/srt" },
    { t: "SRT: prevención de riesgos en el trabajo", url: "https://www.argentina.gob.ar/srt/prevencion" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "¿Qué es la logística?", opciones: ["Solo manejar camiones","Vender productos","Lo necesario para que un producto llegue al lugar correcto, en la cantidad correcta, en buen estado y a tiempo","Fabricar productos"], correcta: 2, explicacion: "Abarca guardar, preparar y enviar. Manejar camiones tienta porque se ve, pero es solo una parte." },
    { q: "¿En qué orden pasa un producto por el depósito?", opciones: ["Recepción, almacenamiento, preparación del pedido y envío","Envío, recepción, almacenamiento","Preparación, recepción, envío","Almacenamiento, envío, recepción"], correcta: 0, explicacion: "Primero llega, se guarda, se prepara y sale. Empezar por el envío tienta porque es lo que ve el cliente, pero es el final." },
    { q: "Si en la recepción contaron mal y el sistema dice que hay 10 cajas cuando hay 8, ¿qué puede pasar?", opciones: ["Nada, se arregla solo","Que sobren 2 cajas","Que el proveedor mande más","Que vendan lo que no tienen y un cliente se quede sin su pedido"], correcta: 3, explicacion: "Un error se paga en las etapas siguientes. \"Se arregla solo\" tienta, pero nadie lo corrige hasta que falta." },
    { q: "Si entrás a trabajar como preparador de pedidos (picker), ¿qué vas a hacer?", opciones: ["Maneja el camión","Junta los productos de cada pedido","Atiende el teléfono","Fabrica las cajas"], correcta: 1, explicacion: "El picker junta lo que pidió cada cliente. Manejar el camión tienta, pero eso hace el chofer." },
    { q: "Querés manejar un autoelevador en el depósito. ¿Qué necesitás?", opciones: ["Solo ganas","El permiso de un compañero","Capacitación y habilitación para manejarlo","Saber manejar auto"], correcta: 2, explicacion: "El autoelevador exige habilitación. Saber manejar auto tienta, pero es una máquina distinta y peligrosa." },
    { q: "¿Qué valoran en casi todos los puestos de depósito?", opciones: ["Orden, atención al detalle, cumplir horarios, trabajo en equipo y seguridad","Solo la fuerza","Solo saber computación","Tener auto propio"], correcta: 0, explicacion: "Lo actitudinal pesa mucho. La fuerza tienta como requisito, pero sin orden y cuidado no alcanza." },
    { q: "Si un preparador se equivoca seguido, ¿qué cuesta cada error?", opciones: ["Nada","Solo un reto","Una caja de más","Un cliente que recibe algo que no pidió y un envío de vuelta que cuesta plata"], correcta: 3, explicacion: "Cada error tiene costo real. \"Solo un reto\" tienta, pero el cliente y la empresa pierden." },
    { q: "Si hay un autoelevador trabajando en el pasillo, ¿por dónde caminás?", opciones: ["Por el medio, es más corto","Por la senda peatonal marcada","Detrás del autoelevador","Corriendo para pasar rápido"], correcta: 1, explicacion: "La senda te separa de la máquina. El medio tienta por corto, pero es una causa común de accidentes graves." },
    { q: "Si tenés que guardar cajas pesadas en una estantería, ¿dónde van?", opciones: ["Arriba de todo","En el medio siempre","Abajo","Donde haya lugar"], correcta: 2, explicacion: "Lo pesado abajo evita caídas y lesiones. Donde haya lugar tienta por rápido, pero arriba se caen." },
    { q: "Si vas a abrir una caja con cúter, ¿cómo cortás?", opciones: ["Con cuchilla retráctil, cortando hacia afuera del cuerpo","Hacia vos, para hacer fuerza","Con un cuchillo de cocina","Con los dientes"], correcta: 0, explicacion: "Cortar hacia afuera evita cortes. Hacia vos tienta para tener más fuerza, pero si se resbala te cortás." },
    { q: "¿Qué son los EPP en un depósito?", opciones: ["Un tipo de estantería","Un formulario de pedido","Un programa de computadora","Elementos de protección personal, como calzado de seguridad y guantes"], correcta: 3, explicacion: "Son los elementos que te protegen. Un formulario tienta por la sigla, pero no tiene que ver." },
    { q: "Te lastimás la mano trabajando. ¿Qué hacés?", opciones: ["No decís nada para no molestar","Avisás enseguida a tu encargado: lo cubre la ART de la empresa","Te vas a tu casa sin avisar","Esperás a ver si se pasa"], correcta: 1, explicacion: "Avisar activa la cobertura. Callarte tienta para no molestar, pero si después empeora puede no quedar registrado." },
  ],
},
{
  id: "recepcion",
  icono: "🚚",
  titulo: "Recibir mercadería",
  nivel: "Básico",
  objetivos: [
    "Controlar lo que llega contra el remito y la orden de compra",
    "Revisar estado, cantidades y vencimientos antes de firmar",
    "Registrar el ingreso y dejar asentada cualquier diferencia",
  ],
  lecciones: [
    { titulo: "Los papeles de la recepción", video: {"id":"_3OobXetjs8","t":"Proceso de recepción · Currículum Mineduc (4:01)"}, html: `
      <p class="idea">Cuando llega mercadería, hay que comparar tres cosas: lo que se pidió (orden de compra), lo que dice que trae (remito) y lo que de verdad llegó. Si las tres coinciden, se recibe.</p>
      <table>
        <tr><th>Papel</th><th>Qué dice</th><th>Quién lo hace</th></tr>
        <tr><td>Orden de compra</td><td>Qué pedimos, cuánto y a qué precio</td><td>Nosotros (compras)</td></tr>
        <tr><td>Remito</td><td>Qué entrega el proveedor, sin precios</td><td>El proveedor</td></tr>
        <tr><td>Factura</td><td>Cuánto hay que pagar</td><td>El proveedor (llega con la mercadería o después)</td></tr>
      </table>
      <pre><code>Orden de compra:  20 cajas de yerba 1 kg
Remito:           20 cajas de yerba 1 kg
Llegó (contado):  18 cajas + 1 caja rota
→ Se reciben 18 sanas. Se anota en el remito: "faltan 1, 1 rota".</code></pre>
      <p><strong>Nunca firmes un remito sin controlar:</strong> tu firma dice que llegó todo bien. Si después falta algo, es muy difícil reclamar.</p>
      <p>Por ejemplo, firmar "conforme" un remito de 20 cajas cuando llegaron 18 hace que la empresa pague 20.</p>` },
    { titulo: "Qué controlar", html: `
      <p class="idea">El control de recepción tiene tres partes: <strong>cantidad</strong>, <strong>estado</strong> y, si corresponde, <strong>vencimiento y lote</strong>.</p>
      <table>
        <tr><th>Control</th><th>Cómo</th><th>Ejemplo de problema</th></tr>
        <tr><td>Cantidad</td><td>Contar bultos y, si se puede, unidades</td><td>Faltan 2 cajas</td></tr>
        <tr><td>Estado</td><td>Mirar cajas golpeadas, mojadas, abiertas</td><td>Una caja aplastada</td></tr>
        <tr><td>Producto correcto</td><td>Código, talle, color, modelo</td><td>Llegó talle 40 en vez de 42</td></tr>
        <tr><td>Vencimiento</td><td>Fecha de vencimiento en alimentos, medicamentos, químicos</td><td>Vence en 10 días</td></tr>
        <tr><td>Temperatura</td><td>En frescos y congelados, que lleguen fríos</td><td>Llegan los helados blandos</td></tr>
      </table>
      <p>El <strong>lote</strong> es un número que identifica un grupo de productos fabricados juntos. Sirve, por ejemplo, para retirar del mercado solo un lote con fallas.</p>
      <p><strong>Si hay un problema:</strong> se anota en el remito antes de firmar, se saca una foto y se avisa al encargado o a compras. A veces se rechaza la mercadería en el momento.</p>
      <p>Por ejemplo, recibir yogures que vencen en 3 días puede ser un problema si la empresa tarda una semana en venderlos: hay que avisar antes de aceptarlos.</p>` },
    { titulo: "Registrar el ingreso", html: `
      <p class="idea">Recibir no termina en la firma. Hay que <strong>registrar el ingreso</strong>: cargar en el sistema o en la planilla lo que entró, para que el stock sea real.</p>
      <pre><code>Ingreso N.º 0153 – 12/03/2026
Proveedor: Distribuidora Norte · Remito 0001-4512
Código    Producto           Cant.  Lote     Vence
YER-1K    Yerba 1 kg         18     L2503    09/2027
Observaciones: faltó 1 caja, 1 caja rota (foto adjunta)
Recibió: Juan Gómez</code></pre>
      <table>
        <tr><th>Paso</th><th>Por qué</th></tr>
        <tr><td>Cargar lo recibido, no lo del remito</td><td>El stock tiene que reflejar lo que hay de verdad</td></tr>
        <tr><td>Anotar diferencias y adjuntar fotos</td><td>Para que compras pueda reclamar</td></tr>
        <tr><td>Guardar el remito con el ingreso</td><td>Es la prueba de lo que llegó</td></tr>
        <tr><td>Ubicar la mercadería enseguida</td><td>Si queda en la zona de recepción, se pierde o estorba</td></tr>
      </table>
      <p>Por ejemplo, si cargás 20 cajas porque lo decía el remito, el sistema va a mostrar 2 cajas que nadie va a encontrar nunca.</p>` },
  ],
  practica: [
    "Con una compra del supermercado y su ticket, hacé un control de recepción: cantidad, estado y vencimientos. Anotá si encontraste alguna diferencia.",
    "Armá una planilla de ingresos con las columnas del ejemplo (código, producto, cantidad, lote, vence, observaciones). Cargá 3 ingresos inventados, uno con una diferencia.",
    "Escribí cómo anotarías en un remito que faltan 2 cajas y 1 llegó rota. Anotá la frase exacta.",
  ],
  recursos: [
    { t: "SRT: publicaciones y guías de prevención", url: "https://www.argentina.gob.ar/srt/prevencion/publicaciones" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Si llega mercadería, ¿qué tres cosas comparás?", opciones: ["El precio, el color y la marca","Solo el remito","La orden de compra, el remito y lo que de verdad llegó","La factura y nada más"], correcta: 2, explicacion: "Las tres tienen que coincidir. Solo el remito tienta por práctico, pero dice lo que el proveedor dice que trae." },
    { q: "¿Quién hace la orden de compra?", opciones: ["Nosotros, desde compras","El proveedor","El chofer","El cliente final"], correcta: 0, explicacion: "La orden la hace quien compra. El proveedor tienta porque está en el medio, pero él hace el remito y la factura." },
    { q: "El remito dice 20 cajas y contaste 18. ¿Qué hacés antes de firmar?", opciones: ["Firmás conforme, total son 2","Firmás y después llamás","No firmás ni avisás","Anotás la diferencia en el remito y avisás"], correcta: 3, explicacion: "Tu firma dice que llegó todo. Firmar y llamar después tienta, pero ya diste por bueno el remito." },
    { q: "¿Qué controlás en la recepción además de la cantidad?", opciones: ["Solo el color del camión","El estado, que sea el producto correcto y, si corresponde, el vencimiento","Nada más","El precio de venta"], correcta: 1, explicacion: "Cantidad, estado y vencimiento. \"Nada más\" tienta por rápido, pero una caja rota contada como buena es un problema." },
    { q: "Si llegó talle 40 en vez de 42, ¿qué control lo detecta?", opciones: ["Cantidad","Temperatura","Producto correcto: código, talle, color o modelo","Ninguno"], correcta: 2, explicacion: "Revisar el producto exacto detecta el error. Cantidad tienta porque llegaron las cajas, pero el contenido es otro." },
    { q: "¿Qué es el lote de un producto?", opciones: ["Un número que identifica un grupo fabricado junto","El precio","El nombre del proveedor","El peso de la caja"], correcta: 0, explicacion: "El lote permite rastrear una partida. El precio tienta como dato de la etiqueta, pero no es eso." },
    { q: "Recibís yogures que vencen en 3 días y se venden en una semana. ¿Qué hacés?", opciones: ["Los recibís igual","Los escondés","Les cambiás la fecha","Avisás antes de aceptarlos"], correcta: 3, explicacion: "Un vencimiento corto puede ser pérdida. Recibirlos tienta para no demorar, pero después se tiran." },
    { q: "Si llegan los helados blandos, ¿qué falló?", opciones: ["La cantidad","La temperatura: tenían que llegar congelados","El remito","Nada, es normal"], correcta: 1, explicacion: "Frescos y congelados tienen que llegar fríos. \"Es normal\" tienta, pero se rompió la cadena de frío." },
    { q: "Encontraste una caja aplastada. ¿Qué hacés además de anotarlo?", opciones: ["La escondés al fondo","La recibís como buena","Le sacás una foto y avisás al encargado o a compras","La tirás sin decir nada"], correcta: 2, explicacion: "La foto respalda el reclamo. Recibirla como buena tienta por rápido, pero la pérdida queda para la empresa." },
    { q: "Si ya firmaste el remito, ¿terminaste?", opciones: ["No: falta registrar el ingreso en el sistema o la planilla","Sí, ya está","Sí, si el chofer se fue","Sí, lo carga otro"], correcta: 0, explicacion: "Sin registro, el stock no es real. \"Ya está\" tienta, pero el sistema no sabe lo que entró." },
    { q: "Al registrar el ingreso, ¿qué cantidad cargás?", opciones: ["Lo que dice el remito","Lo que dice la orden de compra","Un número redondo","Lo que recibiste de verdad, no lo del remito"], correcta: 3, explicacion: "El stock tiene que reflejar lo que hay. Lo del remito tienta por cómodo, pero si faltaba algo, el sistema miente." },
    { q: "Recibiste y registraste. ¿Qué hacés con la mercadería?", opciones: ["La dejás en la zona de recepción","La ubicás enseguida en su lugar","La dejás para mañana","La apilás en el pasillo"], correcta: 1, explicacion: "En recepción se pierde o estorba. Dejarla para mañana tienta, pero llega otro camión y se mezcla." },
  ],
},
{
  id: "almacenar",
  icono: "🗄️",
  titulo: "Guardar y ubicar",
  nivel: "Intermedio",
  objetivos: [
    "Usar códigos de ubicación para encontrar cualquier producto rápido",
    "Aplicar FIFO y FEFO para que no se venza ni se pierda mercadería",
    "Ordenar el depósito según lo que más sale y con criterio de seguridad",
  ],
  lecciones: [
    { titulo: "Códigos de ubicación", html: `
      <p class="idea">En un depósito ordenado, cada lugar tiene un <strong>código de ubicación</strong>. Así, cualquiera encuentra un producto sin depender de la memoria de quien lo guardó.</p>
      <pre><code>Código de ubicación:  A - 03 - 2
                      │    │    └ nivel (altura, de abajo hacia arriba)
                      │    └ estantería o módulo
                      └ pasillo

A-03-2 = pasillo A, estantería 3, segundo nivel</code></pre>
      <table>
        <tr><th>Producto</th><th>Código del producto</th><th>Ubicación</th></tr>
        <tr><td>Yerba 1 kg</td><td>YER-1K</td><td>A-03-2</td></tr>
        <tr><td>Azúcar 1 kg</td><td>AZU-1K</td><td>A-03-3</td></tr>
        <tr><td>Aceite 1,5 L</td><td>ACE-15</td><td>B-01-1</td></tr>
      </table>
      <p>El <strong>código del producto</strong> (o SKU) identifica qué es; el <strong>código de ubicación</strong> dice dónde está. Los dos van en la planilla o el sistema.</p>
      <p><strong>Etiquetas visibles:</strong> cada estantería y cada nivel con su código, a la vista y a la altura de los ojos.</p>
      <p>Por ejemplo, si un compañero nuevo tiene que buscar aceite y la planilla dice B-01-1, lo encuentra en un minuto; si dice "por allá atrás", puede tardar media hora.</p>` },
    { titulo: "FIFO y FEFO", video: {"id":"pBSQJwNPE94","t":"Método FIFO y LIFO: qué son y cómo aplicarlos en su almacén · Toyota Material Handling España (6:43)"}, html: `
      <p class="idea"><strong>FIFO</strong> (en castellano, PEPS: "primero en entrar, primero en salir") significa despachar primero lo que llegó antes. <strong>FEFO</strong> ("primero en vencer, primero en salir") despacha primero lo que vence antes. Los dos evitan que la mercadería se quede vieja o se venza.</p>
      <table>
        <tr><th>Método</th><th>Qué sale primero</th><th>Para qué productos</th></tr>
        <tr><td>FIFO / PEPS</td><td>Lo que entró antes</td><td>Productos que no vencen, pero envejecen (ropa, ferretería)</td></tr>
        <tr><td>FEFO</td><td>Lo que vence antes</td><td>Alimentos, medicamentos, cosméticos, químicos</td></tr>
      </table>
      <p><strong>Cómo se aplica en la estantería:</strong> lo nuevo se carga atrás (o abajo) y lo viejo queda adelante, para que se tome primero.</p>
      <pre><code>Frente de la estantería (de donde se saca)
[vence 03/2026] [vence 05/2026] [vence 09/2026]  ← lo nuevo va al fondo</code></pre>
      <p><strong>FEFO puede ganarle a FIFO:</strong> si llega un lote nuevo que vence antes que el que ya tenías, sale primero el nuevo.</p>
      <p>Por ejemplo, si el repositor pone las leches nuevas adelante, las viejas quedan atrás y vencen en la góndola: es plata que se tira.</p>` },
    { titulo: "Orden según lo que más sale", html: `
      <p class="idea">No todos los productos se mueven igual. Ubicar cerca de la zona de preparación lo que más sale ahorra muchísimos pasos. A esto se lo llama <strong>clasificación ABC</strong>.</p>
      <table>
        <tr><th>Clase</th><th>Qué es</th><th>Dónde va</th></tr>
        <tr><td>A</td><td>Los pocos productos que más salen</td><td>Cerca de la zona de preparación, a la altura de la cintura</td></tr>
        <tr><td>B</td><td>Los de movimiento medio</td><td>A media distancia</td></tr>
        <tr><td>C</td><td>Los muchos productos que salen poco</td><td>Más lejos o más arriba</td></tr>
      </table>
      <p><strong>Pero la seguridad manda:</strong> lo pesado siempre abajo, aunque salga poco; lo frágil, protegido; los químicos, separados de los alimentos.</p>
      <p><strong>Las 5S:</strong> un método japonés de orden con cinco pasos: separar lo que no sirve, ordenar (un lugar para cada cosa), limpiar, estandarizar (que todos lo hagan igual) y sostener (que dure).</p>
      <p>Por ejemplo, si la yerba es el producto que más sale y está al fondo del depósito, el preparador camina kilómetros por semana solo para buscarla.</p>` },
  ],
  practica: [
    "Diseñá los códigos de ubicación para una alacena o un placard de tu casa (estante y nivel) y etiquetá 3 lugares. Anotá qué guardaste en cada uno.",
    "Ordená los productos con vencimiento de tu heladera o alacena con FEFO: lo que vence antes, adelante. Anotá cuántos productos estaban mal ubicados.",
    "Con una lista de 10 productos de un comercio que conozcas, clasificalos en A, B y C según cuánto se venden. Anotá dónde ubicarías los de clase A.",
  ],
  recursos: [
    { t: "SRT: prevención de riesgos en el trabajo", url: "https://www.argentina.gob.ar/srt/prevencion" },
    { t: "INSST (España): seguridad y salud en el trabajo", url: "https://www.insst.es/" },
  ],
  quiz: [
    { q: "Si la planilla dice que la yerba está en A-03-2, ¿dónde la buscás?", opciones: ["Producto A, 3 unidades, 2 cajas","Caja 3 del pasillo 2","Pasillo A, estantería 3, segundo nivel","Precio A, lote 03, talle 2"], correcta: 2, explicacion: "Pasillo, estantería y nivel. Producto y unidades tienta porque hay letras y números, pero ese es el código de ubicación." },
    { q: "Si un compañero nuevo tiene que encontrar el aceite, ¿qué le sirve más?", opciones: ["Que la planilla diga su ubicación, como B-01-1","Que le digan \"por allá atrás\"","Que pregunte a cada uno","Que busque hasta encontrarlo"], correcta: 0, explicacion: "El código lo lleva directo. \"Por allá atrás\" tienta por rápido de decir, pero puede tardar media hora." },
    { q: "¿Qué diferencia hay entre el código del producto y el de ubicación?", opciones: ["Son lo mismo","El de ubicación dice el precio","El del producto dice el pasillo","El del producto dice qué es; el de ubicación, dónde está"], correcta: 3, explicacion: "Uno identifica, el otro ubica. Que son lo mismo tienta porque ambos son códigos, pero cumplen funciones distintas." },
    { q: "Si tu encargado te pide trabajar con FIFO, ¿qué significa?", opciones: ["Primero en vencer, primero en salir","Primero en entrar, primero en salir","Último en entrar, primero en salir","Lo más caro sale primero"], correcta: 1, explicacion: "FIFO es por orden de llegada. \"Primero en vencer\" tienta, pero eso es FEFO." },
    { q: "Guardás medicamentos en el depósito. ¿Qué método usás?", opciones: ["FIFO siempre","Lo que esté más a mano","FEFO: sale primero lo que vence antes","Lo más caro primero"], correcta: 2, explicacion: "Con vencimiento, manda la fecha. FIFO tienta porque se parece, pero un lote nuevo puede vencer antes." },
    { q: "Si llega mercadería nueva a una estantería, ¿dónde la ponés?", opciones: ["Atrás, para que lo viejo quede adelante y salga primero","Adelante, porque se ve mejor","Arriba de todo","En el piso del pasillo"], correcta: 0, explicacion: "Lo viejo adelante se toma primero. Adelante tienta por prolijo, pero lo viejo queda atrás y se vence." },
    { q: "Llega un lote nuevo que vence antes que el que ya tenías. Con FEFO, ¿cuál sale primero?", opciones: ["El viejo, porque llegó antes","Los dos mezclados","El que esté más cerca","El nuevo, porque vence antes"], correcta: 3, explicacion: "FEFO manda la fecha de vencimiento. El viejo tienta por FIFO, pero el nuevo se vencería primero." },
    { q: "Si el repositor pone las leches nuevas adelante, ¿qué pasa?", opciones: ["Nada","Las viejas quedan atrás y vencen en la góndola","Se venden más rápido las viejas","Mejora la presentación"], correcta: 1, explicacion: "Es plata que se tira. Mejora la presentación tienta, pero las viejas se pierden." },
    { q: "¿Qué es la clasificación ABC?", opciones: ["Ordenarlos por orden alfabético","Ordenarlos por precio","Ordenar los productos según cuánto salen: A los que más, C los que menos","Ordenarlos por color"], correcta: 2, explicacion: "ABC es por movimiento. Alfabético tienta por las letras, pero no tiene que ver." },
    { q: "Si la yerba es lo que más sale, ¿dónde la ubicás?", opciones: ["Cerca de la zona de preparación, a la altura de la cintura","Al fondo del depósito","En el estante más alto","Donde haya lugar"], correcta: 0, explicacion: "Lo de clase A cerca ahorra pasos. Donde haya lugar tienta por rápido, pero se camina mucho más." },
    { q: "Si un producto pesado sale poco, ¿lo ponés arriba porque es clase C?", opciones: ["Sí, es clase C","Sí, si hay lugar","Da igual","No: lo pesado siempre va abajo, la seguridad manda"], correcta: 3, explicacion: "La seguridad está antes que el ABC. Ponerlo arriba tienta por la regla de clase C, pero puede caer y lastimar." },
    { q: "¿Cuáles son las 5S?", opciones: ["Sacar, subir, sumar, sellar y salir","Separar, ordenar, limpiar, estandarizar y sostener","Cinco tipos de estanterías","Cinco turnos de trabajo"], correcta: 1, explicacion: "Es un método de orden. \"Cinco tipos de estanterías\" tienta por ser del depósito, pero no es eso." },
  ],
},
{
  id: "pedidos",
  icono: "🧺",
  titulo: "Preparar pedidos",
  nivel: "Intermedio",
  objetivos: [
    "Preparar un pedido con una lista de picking siguiendo un recorrido ordenado",
    "Verificar el pedido antes de cerrarlo para evitar errores",
    "Embalar y etiquetar para que llegue sano y al lugar correcto",
  ],
  lecciones: [
    { titulo: "El picking", video: {"id":"TYJt7x6pI58","t":"¿Qué es el picking? · Brain Logistic (2:15)"}, html: `
      <p class="idea">El <strong>picking</strong> es juntar los productos de un pedido sacándolos de sus ubicaciones. Se hace con una <strong>lista de picking</strong>, que conviene que esté ordenada por ubicación para no ir y volver.</p>
      <pre><code>Lista de picking – Pedido 2031
Ubicación  Código   Producto        Cant.  ✓
A-03-2     YER-1K   Yerba 1 kg      4      ☐
A-03-3     AZU-1K   Azúcar 1 kg     2      ☐
B-01-1     ACE-15   Aceite 1,5 L    3      ☐</code></pre>
      <table>
        <tr><th>Buena práctica</th><th>Por qué</th></tr>
        <tr><td>Seguir el orden de la lista (por ubicación)</td><td>Un solo recorrido, sin volver</td></tr>
        <tr><td>Tildar cada línea al tomarla</td><td>No saltear ni repetir</td></tr>
        <tr><td>Leer el código, no solo el nombre</td><td>"Yerba 1 kg" y "Yerba 500 g" se confunden</td></tr>
        <tr><td>Avisar si falta algo</td><td>Para decidir si se manda incompleto o se espera</td></tr>
      </table>
      <p>Por ejemplo, una lista ordenada por pasillo hace que recorras A, después B, después C; una lista desordenada te hace cruzar el depósito tres veces.</p>` },
    { titulo: "Verificar antes de cerrar", html: `
      <p class="idea">El error más caro es el que sale del depósito. Por eso, antes de cerrar la caja, se <strong>verifica</strong> el pedido: idealmente, otra persona o un escáner compara lo que hay con lo que se pidió.</p>
      <table>
        <tr><th>Error común</th><th>Cómo se evita</th></tr>
        <tr><td>Cantidad equivocada</td><td>Contar de nuevo al cerrar</td></tr>
        <tr><td>Producto parecido (otro tamaño o color)</td><td>Leer el código, no solo la foto o el nombre</td></tr>
        <tr><td>Producto vencido o dañado</td><td>Mirar el estado y la fecha al tomarlo</td></tr>
        <tr><td>Pedido de otro cliente</td><td>Un pedido por vez; caja con el número de pedido desde el principio</td></tr>
      </table>
      <p><strong>Con escáner:</strong> muchos depósitos usan lectores de código de barras. Si el código no coincide, el sistema avisa. Igual conviene mirar.</p>
      <p><strong>Un indicador para medir:</strong> el porcentaje de pedidos sin error.</p>
      <pre><code>Pedidos preparados en el mes: 500
Pedidos con algún error:       30
Pedidos sin error: 470 ÷ 500 × 100 = 94 %</code></pre>
      <p>Por ejemplo, revisar 30 segundos cada pedido antes de cerrarlo es mucho más barato que mandar un segundo envío para corregir un error.</p>` },
    { titulo: "Embalar y etiquetar", html: `
      <p class="idea">El <strong>embalaje</strong> protege el producto en el viaje, y la <strong>etiqueta</strong> hace que llegue a donde tiene que llegar. Los dos se hacen pensando en que la caja va a ser apilada, movida y golpeada.</p>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>Caja del tamaño justo</td><td>Ni muy grande (se mueve todo) ni muy chica (se aplasta)</td></tr>
        <tr><td>Relleno</td><td>Papel o plástico de burbujas en los huecos; lo frágil envuelto</td></tr>
        <tr><td>Lo pesado abajo</td><td>Dentro de la caja también</td></tr>
        <tr><td>Cierre</td><td>Cinta en forma de H (en el centro y en los bordes)</td></tr>
        <tr><td>Etiqueta</td><td>Datos del destinatario completos, en la cara de arriba, sin tapar con cinta</td></tr>
        <tr><td>Advertencias</td><td>"Frágil" o "Este lado arriba" cuando corresponde</td></tr>
      </table>
      <p><strong>La prueba de la sacudida:</strong> cerrá la caja y movela suavemente. Si algo se mueve adentro, falta relleno.</p>
      <p><strong>Datos de la etiqueta:</strong> nombre, dirección completa con código postal, localidad, provincia y un teléfono. Un dato mal escrito es un envío que vuelve.</p>
      <p>Por ejemplo, una taza en una caja grande sin relleno casi seguro llega rota; la misma taza envuelta en papel en una caja justa, llega sana.</p>` },
  ],
  practica: [
    "Armá una lista de picking de 5 productos de tu casa con códigos de ubicación inventados, ordenada por recorrido. Anotá cuántos pasos ahorrás frente a una lista desordenada.",
    "Prepará un \"pedido\" de 5 productos con la lista y pedile a otra persona que lo verifique. Anotá si encontró algún error.",
    "Embalá un objeto frágil con relleno, cinta en H y etiqueta completa. Hacé la prueba de la sacudida y anotá si algo se movió.",
  ],
  recursos: [
    { t: "SRT: publicaciones y guías de prevención", url: "https://www.argentina.gob.ar/srt/prevencion/publicaciones" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "¿Qué es el picking?", opciones: ["Embalar las cajas","Recibir mercadería","Juntar los productos de un pedido sacándolos de sus ubicaciones","Limpiar el depósito"], correcta: 2, explicacion: "Picking es juntar. Embalar tienta porque viene después, pero eso es el packing." },
    { q: "Tu lista de picking está desordenada y cruzás el depósito tres veces. ¿Qué conviene?", opciones: ["Ordenarla por ubicación para hacer un solo recorrido","Caminar más rápido","Hacer los pedidos de a uno sin lista","Pedir otra persona"], correcta: 0, explicacion: "El orden por ubicación ahorra pasos. Caminar más rápido tienta, pero el problema es el recorrido." },
    { q: "¿Para qué tildás cada línea de la lista de picking?", opciones: ["Para que quede prolija","Porque lo pide el jefe","No sirve","Para no saltear ni repetir productos"], correcta: 3, explicacion: "Tildar es tu control. Que quede prolija tienta, pero la función es no equivocarte." },
    { q: "Si en la estantería hay yerba de 1 kg y de 500 g juntas, ¿qué leés?", opciones: ["Solo el color del paquete","El código del producto, no solo el nombre","La marca","Nada, agarrás la primera"], correcta: 1, explicacion: "El código evita confundir tamaños. El color tienta por rápido, pero suelen ser iguales." },
    { q: "Falta un producto de la lista. ¿Qué hacés?", opciones: ["Lo reemplazás por otro parecido sin avisar","Cerrás el pedido igual","Avisás para que decidan si se manda incompleto o se espera","Lo sacás de otro pedido"], correcta: 2, explicacion: "Avisar deja decidir. Reemplazarlo tienta para completar, pero el cliente recibe algo que no pidió." },
    { q: "¿Por qué conviene verificar el pedido antes de cerrarlo?", opciones: ["Porque el error más caro es el que sale del depósito","Porque sobra tiempo","Para cansar al compañero","No conviene, es lento"], correcta: 0, explicacion: "Corregir antes es mucho más barato. \"Es lento\" tienta, pero un segundo envío cuesta más." },
    { q: "Si preparás pedidos de varios clientes, ¿cómo evitás mezclarlos?", opciones: ["Haciendo varios a la vez en la misma mesa","Confiando en la memoria","Sin número hasta el final","Un pedido por vez y la caja con el número de pedido desde el principio"], correcta: 3, explicacion: "Uno por vez y con número evita mezclas. Varios a la vez tienta por rápido, pero se cruzan productos." },
    { q: "Prepararon 500 pedidos y 30 tuvieron error. ¿Qué porcentaje salió sin error?", opciones: ["6 %","94 %","30 %","97 %"], correcta: 1, explicacion: "470 ÷ 500 × 100 = 94. El 6 % tienta, pero ese es el porcentaje con error." },
    { q: "Vas a embalar una taza. ¿Qué caja usás?", opciones: ["La más grande que haya","Una más chica, aunque apriete","Una del tamaño justo, con relleno en los huecos","Sin caja, en una bolsa"], correcta: 2, explicacion: "Tamaño justo y relleno protegen. La más grande tienta por segura, pero la taza se mueve y se rompe." },
    { q: "¿Cómo cerrás la caja con cinta?", opciones: ["En forma de H: en el centro y en los bordes","Una tira en el medio","Sin cinta","Con cinta en toda la caja"], correcta: 0, explicacion: "La H refuerza los bordes. Una tira tienta por rápida, pero los bordes se abren." },
    { q: "Si cerrás la caja, la movés y algo se mueve adentro, ¿qué falta?", opciones: ["Más cinta","Una etiqueta","Nada","Relleno"], correcta: 3, explicacion: "Si se mueve, falta relleno. Más cinta tienta, pero no impide que se golpee adentro." },
    { q: "¿Qué datos tiene que tener la etiqueta?", opciones: ["Solo el nombre","Nombre, dirección completa con código postal, localidad, provincia y teléfono","Solo la ciudad","El precio del producto"], correcta: 1, explicacion: "Con datos completos, llega. Solo el nombre tienta por corto, pero el envío vuelve." },
  ],
},
{
  id: "envios",
  icono: "🛻",
  titulo: "Envíos y devoluciones",
  nivel: "Intermedio",
  objetivos: [
    "Elegir la forma de envío según distancia, costo y urgencia",
    "Despachar con remito, seguimiento y aviso al cliente",
    "Manejar devoluciones y cambios sin perder el control del stock",
  ],
  lecciones: [
    { titulo: "Formas de envío", html: `
      <p class="idea">No hay una sola forma de hacer llegar un pedido. Se elige según la distancia, el tamaño, el costo y la urgencia del cliente.</p>
      <table>
        <tr><th>Forma</th><th>Cuándo conviene</th><th>Cuidado</th></tr>
        <tr><td>Retiro en el local o depósito</td><td>Clientes cercanos; el envío más barato</td><td>Horario claro y pedido listo con nombre</td></tr>
        <tr><td>Reparto propio</td><td>Muchos envíos en la misma zona</td><td>Armar recorridos que no se crucen</td></tr>
        <tr><td>Mensajería o moto</td><td>Urgente y cerca, en la ciudad</td><td>Cuesta más por envío</td></tr>
        <tr><td>Correo o empresa de paquetería</td><td>Lejos, a otras ciudades o provincias</td><td>Tiempos de varios días; seguimiento</td></tr>
        <tr><td>Transporte de cargas</td><td>Bultos grandes o mucho volumen</td><td>Coordinar carga y descarga</td></tr>
      </table>
      <p><strong>Armar el recorrido del reparto:</strong> agrupá las entregas por zona y ordenalas para no volver sobre el mismo camino. Las aplicaciones de mapas ayudan a ver el orden.</p>
      <p><strong>Prometé lo que podés cumplir:</strong> "Llega entre 3 y 5 días hábiles" es mejor que "llega mañana" si no estás seguro.</p>
      <p>Por ejemplo, 8 entregas en el mismo barrio ordenadas por calle se hacen en una mañana; desordenadas, pueden llevar el día entero.</p>` },
    { titulo: "Despachar y hacer seguimiento", html: `
      <p class="idea">Despachar es más que darle la caja al transporte: cada envío sale con su remito, su número de seguimiento y un aviso al cliente.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>Remito</td><td>Acompaña la mercadería; quien recibe lo firma</td></tr>
        <tr><td>Registro de salida</td><td>Descontás del stock lo que salió</td></tr>
        <tr><td>Número de seguimiento</td><td>El código con el que se rastrea el envío</td></tr>
        <tr><td>Aviso al cliente</td><td>Le mandás el número y el plazo estimado</td></tr>
        <tr><td>Control de entrega</td><td>Verificás que llegó y guardás el remito firmado</td></tr>
      </table>
      <pre><code>Hola, Marta: tu pedido 2031 ya salió.
Seguimiento: CA123456789AR (correo).
Llega entre 3 y 5 días hábiles. Cualquier cosa, respondé este mensaje.</code></pre>
      <p><strong>Si hay un problema</strong> (demora, envío perdido o dañado), avisá al cliente antes de que pregunte y reclamá a la empresa de transporte con el número de seguimiento.</p>
      <p>Por ejemplo, un mensaje automático o manual con el número de seguimiento evita la mitad de las consultas de "¿dónde está mi pedido?".</p>` },
    { titulo: "Devoluciones y cambios", html: `
      <p class="idea">La <strong>logística inversa</strong> es el camino de vuelta: devoluciones, cambios y productos fallados. Tiene que estar tan ordenada como la ida, para no perder plata ni stock.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>Recibir</td><td>Controlar qué volvió y en qué estado, con foto</td></tr>
        <tr><td>Clasificar</td><td>Bueno para volver a vender, fallado para el proveedor, o descarte</td></tr>
        <tr><td>Registrar</td><td>Sumar al stock solo lo que se puede vender</td></tr>
        <tr><td>Resolver</td><td>Cambio, devolución del dinero o reparación, según el caso</td></tr>
      </table>
      <p><strong>Derechos del cliente:</strong> en las compras a distancia (por internet o teléfono), la Ley de Defensa del Consumidor da 10 días corridos para arrepentirse y devolver. Los productos nuevos tienen garantía legal de 6 meses. Quien atiende devoluciones tiene que conocerlo.</p>
      <p><strong>Ojo con el stock:</strong> un producto devuelto roto que se carga como bueno hace que el sistema muestre algo que no se puede vender.</p>
      <p>Esta lección resume derechos del consumidor para entenderlos; ante dudas, consultá Defensa del Consumidor.</p>
      <p>Por ejemplo, una campera devuelta sin uso vuelve al stock; una con una costura rota va aparte para reclamar al proveedor.</p>` },
  ],
  practica: [
    "Para 3 envíos imaginarios (un cliente del barrio, uno de otra ciudad y uno urgente), elegí la forma de envío y anotá por qué.",
    "Escribí el mensaje de aviso al cliente con número de seguimiento y plazo para un pedido. Anotá qué datos incluiste.",
    "Armá una planilla de devoluciones con fecha, producto, motivo, estado y destino (volver a vender, proveedor o descarte). Cargá 3 casos inventados.",
  ],
  recursos: [
    { t: "Correo Argentino: envíos y seguimiento", url: "https://www.correoargentino.com.ar/" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Tenés un cliente a 10 cuadras que no tiene apuro. ¿Qué forma de envío conviene?", opciones: ["Transporte de cargas","Correo a otra provincia","Retiro en el local o reparto propio","Mensajería urgente siempre"], correcta: 2, explicacion: "Cerca y sin apuro, lo más barato. La mensajería tienta por rápida, pero cuesta más sin necesidad." },
    { q: "Tenés que mandar un paquete chico a otra provincia. ¿Qué usás?", opciones: ["Correo o empresa de paquetería","Una moto de mensajería","Retiro en el local","Reparto propio a pie"], correcta: 0, explicacion: "Para distancias largas, correo o paquetería. La moto tienta por rápida, pero sirve en la ciudad." },
    { q: "Tenés 8 entregas en el mismo barrio. ¿Cómo las organizás?", opciones: ["En el orden en que llegaron los pedidos","Al azar","Una por día","Agrupadas por zona y ordenadas para no volver sobre el mismo camino"], correcta: 3, explicacion: "El recorrido ordenado ahorra horas. El orden de llegada tienta por simple, pero cruza el barrio varias veces." },
    { q: "Si no estás seguro de cuándo llega un envío, ¿qué le decís al cliente?", opciones: ["\"Llega mañana seguro\"","Un rango que puedas cumplir: \"entre 3 y 5 días hábiles\"","\"No sé\"","\"Pronto\""], correcta: 1, explicacion: "Prometer lo que podés cumplir da confianza. \"Mañana seguro\" tienta para dejarlo contento, pero si no llega, se enoja." },
    { q: "¿Qué acompaña a la mercadería cuando sale?", opciones: ["La factura del proveedor","La orden de compra","El remito, que firma quien recibe","Nada"], correcta: 2, explicacion: "El remito prueba la entrega. La orden de compra tienta, pero es un papel interno de compras." },
    { q: "Sale un pedido del depósito. ¿Qué hacés con el stock?", opciones: ["Descontás lo que salió","Nada, ya está vendido","Lo sumás","Lo hace el cliente"], correcta: 0, explicacion: "Registrar la salida mantiene el stock real. \"Ya está vendido\" tienta, pero si no se descuenta, el sistema miente." },
    { q: "¿Para qué sirve el número de seguimiento?", opciones: ["Para cobrar","Para identificar al chofer","No sirve","Para rastrear dónde está el envío"], correcta: 3, explicacion: "Sirve para rastrear y reclamar. Identificar al chofer tienta, pero el número sigue al paquete." },
    { q: "Un envío se demora. ¿Qué hacés?", opciones: ["Esperás que el cliente reclame","Avisás al cliente antes de que pregunte y reclamás con el número de seguimiento","No hacés nada","Le decís que ya llegó"], correcta: 1, explicacion: "Avisar antes cuida la relación. Esperar tienta, pero el cliente se entera solo y se enoja más." },
    { q: "¿Qué es la logística inversa?", opciones: ["Enviar al revés","Logística de otro país","El camino de vuelta: devoluciones, cambios y productos fallados","Cargar el camión al revés"], correcta: 2, explicacion: "Es el recorrido de vuelta. \"Enviar al revés\" tienta por el nombre, pero se refiere a devoluciones." },
    { q: "Te devuelven una campera con una costura rota. ¿Qué hacés?", opciones: ["La separás para reclamar al proveedor, sin sumarla al stock vendible","La sumás al stock como buena","La tirás sin registrar","La volvés a vender"], correcta: 0, explicacion: "Clasificar evita stock falso. Sumarla como buena tienta por rápido, pero nadie la va a poder vender." },
    { q: "Si un cliente compró por internet hace 6 días y quiere devolver, ¿puede?", opciones: ["No, la compra es final","Solo si está roto","Solo con 48 horas","Sí: tiene 10 días corridos para arrepentirse en compras a distancia"], correcta: 3, explicacion: "La ley da 10 días en compras a distancia. \"La compra es final\" tienta como regla del comercio, pero la ley está por encima." },
    { q: "¿Cuánto dura la garantía legal de un producto nuevo?", opciones: ["1 mes","6 meses","10 días","No tiene"], correcta: 1, explicacion: "Los nuevos tienen 6 meses de garantía legal. 10 días tienta, pero eso es el plazo de arrepentimiento." },
  ],
},
{
  id: "seguridad",
  icono: "🦺",
  titulo: "Seguridad e inventario",
  nivel: "Intermedio",
  objetivos: [
    "Levantar y mover cargas sin lastimarte",
    "Trabajar seguro entre estanterías y máquinas",
    "Hacer conteos de inventario y explicar las diferencias",
  ],
  lecciones: [
    { titulo: "Mover cargas sin lastimarte", video: {"id":"TWglucdnMEM","t":"Cómo manipular cargas correctamente · Superintendencia de Riesgos del Trabajo (2:57)"}, html: `
      <p class="idea">Las lesiones de espalda son de lo más común en un depósito. Casi siempre se evitan con la técnica correcta y usando ayuda cuando la carga es pesada o incómoda.</p>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>Antes</td><td>Mirá la carga: ¿cuánto pesa?, ¿tiene de dónde agarrarla?, ¿el camino está libre?</td></tr>
        <tr><td>Pies</td><td>Separados, a los costados de la carga</td></tr>
        <tr><td>Agacharte</td><td>Doblando las rodillas, con la espalda derecha</td></tr>
        <tr><td>Agarrar</td><td>Firme, con las dos manos, la carga pegada al cuerpo</td></tr>
        <tr><td>Levantar</td><td>Con la fuerza de las piernas, sin tirones</td></tr>
        <tr><td>Girar</td><td>Moviendo los pies, nunca torciendo la cintura con la carga</td></tr>
      </table>
      <p><strong>Si es pesada o incómoda, pedí ayuda o usá equipo:</strong> carro, zorra, transpaleta manual. No hay premio por cargar solo.</p>
      <p>La <strong>transpaleta</strong> es un carro con dos horquillas para mover pallets a mano. El <strong>pallet</strong> es la tarima de madera o plástico sobre la que se apila la mercadería.</p>
      <p><strong>Si sentís dolor,</strong> pará y avisá. Un dolor que no se va hay que consultarlo con un médico; si fue trabajando, interviene la ART.</p>
      <p>Por ejemplo, girar la cintura con una caja pesada en las manos es una de las formas más comunes de lastimarse la espalda: girá con los pies.</p>` },
    { titulo: "Estanterías, máquinas y orden", html: `
      <p class="idea">Además de las cargas, los riesgos de un depósito están en las estanterías, las máquinas y el desorden. Las reglas son simples, pero hay que cumplirlas siempre.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Nunca trepar a las estanterías</td><td>Usá una escalera con plataforma</td></tr>
        <tr><td>Respetar la carga máxima de cada estantería</td><td>Se pueden doblar y caer</td></tr>
        <tr><td>Avisar si una estantería está golpeada o torcida</td><td>Puede ceder con carga</td></tr>
        <tr><td>Caminar por las sendas peatonales</td><td>Los autoelevadores tienen puntos ciegos</td></tr>
        <tr><td>Solo maneja máquinas quien está capacitado y habilitado</td><td>Un mal uso puede matar</td></tr>
        <tr><td>Pasillos y salidas de emergencia despejados</td><td>Para circular y para evacuar</td></tr>
        <tr><td>Saber dónde están los matafuegos y la salida</td><td>Ante un incendio, se pierde tiempo buscando</td></tr>
      </table>
      <p><strong>Cuando ves un riesgo, avisá:</strong> una caja en el pasillo, una estantería torcida, un derrame en el piso. No hace falta ser el encargado para cuidar a todos.</p>
      <p>Esta lección no reemplaza la capacitación de seguridad obligatoria de cada lugar de trabajo.</p>
      <p>Por ejemplo, subirte al segundo estante para alcanzar una caja "rápido" puede terminar con la estantería encima de vos.</p>` },
    { titulo: "Inventario y conteo cíclico", video: {"id":"kMVkUkYgysE","t":"El conteo cíclico (pizarra animada) · Brain Logistic (1:35)"}, html: `
      <p class="idea">El <strong>inventario</strong> es contar lo que hay de verdad y compararlo con lo que dice el sistema. En vez de contar todo una vez por año, muchos depósitos hacen un <strong>conteo cíclico</strong>: cuentan una parte cada semana.</p>
      <table>
        <tr><th>Inventario total</th><th>Conteo cíclico</th></tr>
        <tr><td>Se cuenta todo, una o dos veces por año</td><td>Se cuenta una parte cada semana</td></tr>
        <tr><td>Suele frenar el trabajo uno o dos días</td><td>No frena el trabajo</td></tr>
        <tr><td>Los errores aparecen tarde</td><td>Los errores aparecen pronto</td></tr>
      </table>
      <p><strong>Contá sin mirar lo que dice el sistema</strong> (conteo "a ciegas"): si sabés el número esperado, tendés a encontrar ese número.</p>
      <p><strong>Las diferencias tienen causa:</strong> un ingreso mal cargado, un pedido que salió sin registrar, un producto roto que no se dio de baja, o un robo. Cada diferencia se investiga.</p>
      <pre><code>Precisión de inventario:
Códigos contados: 200
Códigos donde el conteo coincide con el sistema: 190
190 ÷ 200 × 100 = 95 %</code></pre>
      <p>Por ejemplo, si en el conteo faltan 2 cajas de yerba y en el registro hay un pedido que salió ese día sin descontarse, ya encontraste la causa.</p>` },
  ],
  practica: [
    "Practicá la técnica de levantar una caja liviana con los 6 pasos frente a un espejo o con alguien que te mire. Anotá qué paso te costó.",
    "Recorré un depósito, un comercio grande o tu propia casa y anotá 5 riesgos de la tabla que veas (algo en el pasillo, estantes sobrecargados, salida bloqueada).",
    "Hacé un conteo a ciegas de 10 productos de tu alacena, compará con una lista hecha antes y calculá la precisión. Anotá la cuenta y la causa de cada diferencia.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo (SRT)", url: "https://www.argentina.gob.ar/srt" },
    { t: "SRT: prevención de riesgos en el trabajo", url: "https://www.argentina.gob.ar/srt/prevencion" },
    { t: "SRT: publicaciones y guías de prevención", url: "https://www.argentina.gob.ar/srt/prevencion/publicaciones" },
  ],
  quiz: [
    { q: "Si vas a levantar una caja del piso, ¿cómo te agachás?", opciones: ["Doblando la espalda con las piernas rectas","De costado","Doblando las rodillas, con la espalda derecha","Con un tirón rápido"], correcta: 2, explicacion: "Las piernas hacen la fuerza. Doblar la espalda tienta por rápido, pero carga la columna." },
    { q: "¿Cómo llevás la carga mientras caminás?", opciones: ["Pegada al cuerpo, con las dos manos","Con los brazos estirados","Con una sola mano","Sobre la cabeza"], correcta: 0, explicacion: "Pegada al cuerpo pesa menos para la espalda. Brazos estirados tienta para ver mejor, pero multiplica el esfuerzo." },
    { q: "Tenés que girar con una caja pesada en las manos. ¿Qué hacés?", opciones: ["Torcés la cintura","Girás rápido","Tirás la caja","Girás moviendo los pies"], correcta: 3, explicacion: "Torcer la cintura con carga es de lo que más lastima. Girar rápido tienta para terminar, pero aumenta el riesgo." },
    { q: "La caja es muy pesada o incómoda. ¿Qué hacés?", opciones: ["La levantás solo para no molestar","Pedís ayuda o usás un carro, una zorra o una transpaleta","La arrastrás con la espalda doblada","La dejás donde está sin avisar"], correcta: 1, explicacion: "No hay premio por cargar solo. No molestar tienta, pero una lesión de espalda puede durar meses." },
    { q: "¿Qué es una transpaleta?", opciones: ["Una estantería","Un tipo de caja","Un carro con dos horquillas para mover pallets a mano","Un autoelevador grande"], correcta: 2, explicacion: "Mueve pallets a mano. El autoelevador tienta porque también tiene horquillas, pero es motorizado y requiere habilitación." },
    { q: "Necesitás alcanzar una caja del estante alto. ¿Qué hacés?", opciones: ["Usás una escalera con plataforma","Trepás por la estantería","Te parás sobre una caja","Tirás de la caja desde abajo"], correcta: 0, explicacion: "La escalera es segura. Trepar tienta por rápido, pero la estantería puede caer encima de vos." },
    { q: "Ves una estantería golpeada y torcida. ¿Qué hacés?", opciones: ["Le ponés más carga para enderezarla","No decís nada","La seguís usando igual","Avisás enseguida"], correcta: 3, explicacion: "Puede ceder con carga. No decir nada tienta para no complicarte, pero el riesgo es para todos." },
    { q: "¿Por qué hay que caminar por las sendas peatonales?", opciones: ["Porque es más corto","Porque los autoelevadores tienen puntos ciegos","Porque lo pide el cliente","No hace falta"], correcta: 1, explicacion: "El conductor puede no verte. \"No hace falta\" tienta si ves la máquina, pero ella puede no verte a vos." },
    { q: "Hay cajas tapando la salida de emergencia. ¿Qué hacés?", opciones: ["Las dejás, es solo un rato","Ponés más","Las sacás o avisás: la salida tiene que estar despejada","Nada"], correcta: 2, explicacion: "En una emergencia, cada segundo cuenta. \"Es solo un rato\" tienta, pero las emergencias no avisan." },
    { q: "¿Qué es el conteo cíclico?", opciones: ["Contar una parte del depósito cada semana, en vez de todo una vez por año","Contar todo cada día","Contar solo lo que sale","Contar en círculos"], correcta: 0, explicacion: "Es contar de a partes, seguido. Contar todo cada día tienta por exacto, pero frena el trabajo." },
    { q: "¿Por qué conviene contar \"a ciegas\", sin mirar lo que dice el sistema?", opciones: ["Porque es más rápido","Porque el sistema no anda","No conviene","Porque si sabés el número esperado, tendés a encontrar ese número"], correcta: 3, explicacion: "Saber el número sesga el conteo. \"Es más rápido\" tienta, pero la ventaja es que el conteo sea honesto." },
    { q: "Si contaste 200 códigos y en 190 coincide con el sistema, ¿cuál es la precisión de inventario?", opciones: ["10 %","95 %","190 %","90 %"], correcta: 1, explicacion: "190 ÷ 200 × 100 = 95. El 10 % tienta porque son 10 diferencias, pero eso no es la precisión." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el depósito de un negocio chico",
  nivel: "Avanzado",
  objetivos: [
    "Diseñar el orden y los procedimientos de un depósito chico",
    "Armar las planillas de ingreso, ubicaciones, picking y devoluciones",
    "Evaluarlo con una rúbrica y medir con indicadores",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es organizar el <strong>depósito de un negocio chico</strong>, real o imaginario: un almacén, una ferretería, un emprendimiento que vende por internet. Vas a usar todo el curso.</p>
      <table>
        <tr><th>Parte</th><th>Módulo</th></tr>
        <tr><td>Plano simple del depósito con zonas (recepción, almacenamiento, preparación, despacho) y pasillos</td><td>Qué es la logística, Guardar y ubicar</td></tr>
        <tr><td>Procedimiento de recepción en 5 pasos y planilla de ingresos</td><td>Recibir mercadería</td></tr>
        <tr><td>Códigos de ubicación, FIFO o FEFO, y productos A cerca</td><td>Guardar y ubicar</td></tr>
        <tr><td>Lista de picking ordenada y control antes de cerrar</td><td>Preparar pedidos</td></tr>
        <tr><td>Formas de envío y planilla de devoluciones</td><td>Envíos y devoluciones</td></tr>
        <tr><td>Reglas de seguridad y plan de conteo cíclico</td><td>Seguridad e inventario</td></tr>
      </table>
      <pre><code>Plano simple (vista de arriba):
[Recepción]  [Pasillo A: estanterías A-01 a A-05]  [Preparación]
             [Pasillo B: estanterías B-01 a B-05]  [Despacho]
Salida de emergencia →                              Senda peatonal ═══</code></pre>
      <p>Por ejemplo, para un emprendimiento de ropa que vende por Instagram, el depósito puede ser una habitación: igual se aplican zonas, códigos y planillas.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Pedile a otra persona que use tu manual para recibir, guardar y preparar un pedido de prueba, y evaluá con esta.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Plano y zonas</td><td>Zonas claras, pasillos y salida libres</td><td>Zonas sin separar</td><td>Sin plano</td></tr>
        <tr><td>Recepción</td><td>Control contra remito y orden de compra, y planilla</td><td>Control sin planilla</td><td>Sin control</td></tr>
        <tr><td>Ubicaciones</td><td>Códigos claros y FIFO o FEFO aplicado</td><td>Códigos sin método de rotación</td><td>Sin códigos</td></tr>
        <tr><td>Pedidos</td><td>Lista ordenada por ubicación y control antes de cerrar</td><td>Lista sin control</td><td>Sin lista</td></tr>
        <tr><td>Envíos y devoluciones</td><td>Formas de envío definidas y planilla de devoluciones</td><td>Solo una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Seguridad</td><td>Reglas escritas: cargas, estanterías, sendas y salidas</td><td>Algunas reglas</td><td>Ninguna</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios
Si "Seguridad" sacó 0, no aprueba aunque el total sea alto.</code></pre>
      <p>Por ejemplo, si la otra persona no encontró un producto con tu código de ubicación, revisá que las etiquetas estén puestas y que la planilla coincida.</p>` },
    { titulo: "Indicadores para mejorar", html: `
      <p class="idea">Un depósito mejora cuando se mide. Tres <strong>indicadores</strong> simples alcanzan para empezar: qué tan bien coincide el stock, cuántos pedidos salen sin error y cuánto tardan.</p>
      <table>
        <tr><th>Indicador</th><th>Cómo se calcula</th><th>Ejemplo</th></tr>
        <tr><td>Precisión de inventario</td><td>Códigos que coinciden ÷ códigos contados × 100</td><td>190 ÷ 200 = 95 %</td></tr>
        <tr><td>Pedidos sin error</td><td>Pedidos sin error ÷ pedidos totales × 100</td><td>470 ÷ 500 = 94 %</td></tr>
        <tr><td>Pedidos despachados a tiempo</td><td>Pedidos a tiempo ÷ pedidos totales × 100</td><td>480 ÷ 500 = 96 %</td></tr>
      </table>
      <p><strong>Una mejora por vez:</strong> si la precisión es baja, revisá primero la recepción (¿se carga lo que llegó de verdad?). Si hay muchos errores en pedidos, revisá el picking (¿se lee el código?).</p>
      <p><strong>En una entrevista para depósito,</strong> contar que conocés estos indicadores y que sabés cómo mejorarlos te distingue.</p>
      <p>Por ejemplo, pasar de 88 % a 96 % de pedidos sin error después de empezar a verificar cada pedido antes de cerrarlo muestra en números que el control funciona.</p>` },
  ],
  practica: [
    "Dibujá el plano de un depósito chico (real o imaginario) con zonas, pasillos, senda y salida de emergencia. Anotá para qué negocio es.",
    "Armá el manual con las 6 partes de la tabla del encargo y las planillas. Pedile a alguien que lo use con un pedido de prueba y anotá el puntaje de la rúbrica sobre 12.",
    "Calculá los 3 indicadores con datos de tu práctica o inventados realistas. Anotá cuál es el más bajo y qué mejora probarías primero.",
  ],
  recursos: [
    { t: "SRT: prevención de riesgos en el trabajo", url: "https://www.argentina.gob.ar/srt/prevencion" },
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Tu negocio es un emprendimiento de ropa y el depósito es una habitación. ¿Aplican las zonas y códigos?", opciones: ["No, solo en depósitos grandes","No, alcanza con la memoria","Sí: zonas, códigos y planillas sirven también en un depósito chico","Solo si tenés empleados"], correcta: 2, explicacion: "El orden sirve a cualquier escala. \"Solo en grandes\" tienta, pero en una habitación también se pierden cosas." },
    { q: "¿Qué zonas tiene que tener el plano?", opciones: ["Recepción, almacenamiento, preparación y despacho","Solo almacenamiento","Cocina y baño","Oficina y estacionamiento"], correcta: 0, explicacion: "Las cuatro zonas siguen el recorrido del producto. Solo almacenamiento tienta, pero se mezclan las tareas." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una lista de picking","Un remito","Un tipo de estantería","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica evalúa. La lista de picking tienta porque también es una lista, pero sirve para preparar pedidos." },
    { q: "Tu manual tiene códigos de ubicación, pero no dice si usás FIFO o FEFO. ¿Cuánto saca \"Ubicaciones\"?", opciones: ["2","1","0","No se evalúa"], correcta: 1, explicacion: "Códigos sin método de rotación es 1. 2 tienta porque tenés códigos, pero sin rotación la mercadería se vence." },
    { q: "Tu manual no tiene ninguna regla de seguridad, pero todo lo demás está perfecto. ¿Aprueba?", opciones: ["Sí, 10 sobre 12 alcanza","Sí, la seguridad es opcional","No: si \"Seguridad\" saca 0, no aprueba aunque el total sea alto","Depende del negocio"], correcta: 2, explicacion: "La seguridad no se compensa. El total alto tienta como aprobado, pero un depósito sin reglas de seguridad pone en riesgo a las personas." },
    { q: "La persona que probó tu manual no encontró un producto con el código. ¿Qué revisás?", opciones: ["Que las etiquetas estén puestas y la planilla coincida","Que la persona sepa leer","Nada, fue mala suerte","Cambiar todos los códigos"], correcta: 0, explicacion: "El problema suele estar en las etiquetas o la planilla. Culpar a la persona tienta, pero el próximo empleado va a tener el mismo problema." },
    { q: "Sacaste 8 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Empezás de cero","Cambiás de negocio","Mejorás lo que sacó 0 o 1 y volvés a probar"], correcta: 3, explicacion: "Entre 7 y 10 se mejora lo que falló. Empezar de cero tienta, pero perdés lo que funciona." },
    { q: "¿Cómo se calcula el porcentaje de pedidos despachados a tiempo?", opciones: ["Pedidos totales ÷ pedidos a tiempo","Pedidos a tiempo ÷ pedidos totales × 100","Pedidos tarde × 100","Pedidos a tiempo + pedidos tarde"], correcta: 1, explicacion: "Lo que salió bien sobre el total. Al revés tienta, pero da más de 100 %." },
    { q: "Si despacharon 480 pedidos a tiempo de 500, ¿qué porcentaje es?", opciones: ["4 %","480 %","96 %","98 %"], correcta: 2, explicacion: "480 ÷ 500 × 100 = 96. El 4 % tienta, pero son los que salieron tarde." },
    { q: "La precisión de inventario es baja. ¿Qué revisás primero?", opciones: ["La recepción: si se carga lo que llegó de verdad","El color de las cajas","Las formas de envío","El uniforme"], correcta: 0, explicacion: "Muchas diferencias nacen en la recepción. Las formas de envío tientan, pero no explican diferencias de stock." },
    { q: "Hay muchos errores en los pedidos. ¿Qué revisás?", opciones: ["La recepción","El plano","La salida de emergencia","El picking: si se lee el código y si se verifica antes de cerrar"], correcta: 3, explicacion: "Los errores de pedidos nacen al prepararlos. La recepción tienta, pero afecta el stock más que los pedidos." },
    { q: "Pasaste de 88 % a 96 % de pedidos sin error al verificar antes de cerrar. ¿Qué concluís?", opciones: ["Que fue casualidad","Que el control funciona, y lo podés mostrar con números","Que hay que dejar de verificar","Nada"], correcta: 1, explicacion: "Medir antes y después muestra el efecto. Casualidad tienta, pero un cambio tan grande suele tener causa." },
  ],
},
];
