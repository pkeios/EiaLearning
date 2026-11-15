// Temario del curso "Gestión de proyectos desde cero". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js gestion-proyectos y node tools/metodologia.js gestion-proyectos
window.TEMARIO = [
{
  id: "empezar",
  icono: "🚀",
  titulo: "Qué es un proyecto",
  nivel: "Básico",
  objetivos: [
    "Distinguir un proyecto del trabajo de todos los días",
    "Explicar el equilibrio entre alcance, tiempo y costo",
    "Escribir el acta de inicio de un proyecto en una página",
  ],
  lecciones: [
    { titulo: "Proyecto u operación", video: {"id":"yqOLdGif4R0","t":"Gestión de proyectos explicado · Marco Calle (7:13)"}, html: `
      <p class="idea">Un <strong>proyecto</strong> es un trabajo temporal, con un inicio y un fin, para lograr un resultado único. El trabajo que se repite todos los días se llama <strong>operación</strong>.</p>
      <table>
        <tr><th>Proyecto</th><th>Operación</th></tr>
        <tr><td>Mudar la oficina</td><td>Atender a los clientes cada día</td></tr>
        <tr><td>Lanzar una tienda en línea</td><td>Despachar los pedidos de la tienda</td></tr>
        <tr><td>Organizar la fiesta de fin de año</td><td>Pagar los sueldos todos los meses</td></tr>
        <tr><td>Tiene fecha de fin y un resultado</td><td>Sigue mientras exista el negocio</td></tr>
      </table>
      <p><strong>Gestionar un proyecto</strong> es planificar, organizar y seguir el trabajo para llegar al resultado a tiempo, con el presupuesto acordado y con la calidad esperada.</p>
      <p><strong>No hace falta un título:</strong> cualquiera que organiza algo con varias tareas, personas y una fecha ya está gestionando un proyecto, aunque no lo llame así.</p>
      <p>En todo el curso seguimos el mismo proyecto de ejemplo: la <strong>mudanza de la oficina</strong> de una pyme de 15 personas, para que veas cómo cada herramienta se conecta con la siguiente.</p>
      <p>Por ejemplo, mudar la oficina es un proyecto: tiene una fecha (el día que vence el contrato del local viejo) y un resultado (todos trabajando en el local nuevo).</p>` },
    { titulo: "Alcance, tiempo y costo", html: `
      <p class="idea">Todo proyecto equilibra tres cosas: el <strong>alcance</strong> (qué se entrega), el <strong>tiempo</strong> (para cuándo) y el <strong>costo</strong> (con cuánta plata y esfuerzo). Si cambia una, cambian las otras.</p>
      <pre><code>          ALCANCE
          /     \\
         /       \\
     TIEMPO ——— COSTO
  (en el medio: la calidad)</code></pre>
      <table>
        <tr><th>Si te piden...</th><th>Tenés que...</th></tr>
        <tr><td>Más alcance (también pintar la oficina nueva)</td><td>Sumar tiempo, plata o las dos cosas</td></tr>
        <tr><td>Menos tiempo (mudarse una semana antes)</td><td>Sumar plata (más gente) o sacar alcance</td></tr>
        <tr><td>Menos costo</td><td>Sacar alcance o tomar más tiempo</td></tr>
      </table>
      <p><strong>Si nada se ajusta, sufre la calidad:</strong> se termina a tiempo y sin gastar de más, pero mal hecho.</p>
      <p><strong>Preguntá qué es lo fijo:</strong> en muchos proyectos hay una cosa que no se puede mover (una fecha, un presupuesto). Saberlo te dice dónde podés negociar.</p>
      <p>Por ejemplo, en la mudanza la fecha es fija porque vence el contrato del local viejo: si el dueño pide además pintar, hay que sumar plata (contratar pintores) o dejar la pintura para después.</p>` },
    { titulo: "El acta de inicio", html: `
      <p class="idea">El <strong>acta de inicio</strong> es un documento de una página que dice para qué es el proyecto, qué incluye, para cuándo, con cuánto y quién decide. Se acuerda antes de empezar, con quien pide el proyecto.</p>
      <pre><code>ACTA DE INICIO · Mudanza de la oficina

Objetivo:     Los 15 empleados trabajando en el local nuevo
              el lunes 3 de marzo, sin perder días de atención.
Incluye:      Embalaje, transporte, armado de puestos,
              internet y teléfonos.
No incluye:   Pintura y muebles nuevos.
Fecha final:  viernes 28 de febrero
Presupuesto:  $ 2.000.000
Responsable:  Sofía (coordinación)
Decide:       el dueño, Martín
Éxito si:     el 3 de marzo todos los puestos funcionan.</code></pre>
      <table>
        <tr><th>Por qué sirve</th></tr>
        <tr><td>Todos entienden lo mismo antes de empezar</td></tr>
        <tr><td>Da un criterio claro de éxito</td></tr>
        <tr><td>Evita discusiones después ("yo pensé que incluía...")</td></tr>
      </table>
      <p><strong>"No incluye" es tan importante como "incluye":</strong> deja claro qué no vas a hacer.</p>
      <p>Por ejemplo, sin la línea "No incluye: pintura", alguien puede asumir que la pintura estaba en el presupuesto y reclamarlo la última semana.</p>` },
  ],
  practica: [
    "Anotá 3 proyectos y 3 operaciones de un trabajo que conozcas, con la fecha de fin de cada proyecto.",
    "Para un proyecto tuyo, anotá cuál de alcance, tiempo y costo es fijo y qué harías si te piden más alcance.",
    "Escribí el acta de inicio de un proyecto real o imaginario con las 9 líneas del ejemplo. Anotá cuántos minutos te llevó.",
  ],
  recursos: [
    { t: "Atlassian: guía de gestión de proyectos (en inglés)", url: "https://www.atlassian.com/agile/project-management" },
    { t: "Gobierno del Reino Unido: manual de entrega ágil (en inglés)", url: "https://www.gov.uk/service-manual/agile-delivery" },
  ],
  quiz: [
    { q: "Si tu tarea es atender clientes todos los días, ¿es un proyecto?", opciones: ["Sí, porque es trabajo","Sí, si hay muchos clientes","No: es una operación, porque se repite y no tiene fin","Depende del día"], correcta: 2, explicacion: "Un proyecto tiene inicio, fin y resultado único. \"Es trabajo\" tienta, pero no todo trabajo es un proyecto." },
    { q: "Si vas a organizar la mudanza de la oficina, ¿qué tipo de trabajo es?", opciones: ["Un proyecto: temporal, con fecha y un resultado único","Una operación","Una tarea de un día","Nada en especial"], correcta: 0, explicacion: "Tiene fecha y resultado. \"Tarea de un día\" tienta, pero tiene muchas tareas y personas." },
    { q: "Si nunca estudiaste gestión de proyectos, ¿podés gestionar uno?", opciones: ["No, hace falta un título","Solo en empresas grandes","Solo con un programa especial","Sí: cualquiera que organiza tareas, personas y una fecha ya lo hace"], correcta: 3, explicacion: "No hace falta un título para empezar. \"Hace falta un título\" tienta, pero las herramientas se aprenden." },
    { q: "Si te piden más alcance sin cambiar fecha ni presupuesto, ¿qué suele pasar?", opciones: ["Nada","Sufre la calidad","Sale mejor","Baja el costo"], correcta: 1, explicacion: "Si nada se ajusta, cae la calidad. \"Nada\" tienta por optimismo, pero el trabajo extra sale de algún lado." },
    { q: "Si la fecha de la mudanza es fija y piden también pintar, ¿qué opciones tenés?", opciones: ["Mover la fecha","Hacer todo igual sin cambiar nada","Sumar plata (pintores) o dejar la pintura para después","No decir nada y ver"], correcta: 2, explicacion: "Con fecha fija, se ajusta costo o alcance. Mover la fecha tienta, pero el contrato del local vence." },
    { q: "Si te piden terminar una semana antes, ¿qué podés hacer?", opciones: ["Sumar gente (más costo) o sacar alcance","Trabajar igual y esperar","Nada","Sumar alcance"], correcta: 0, explicacion: "Menos tiempo pide más recursos o menos alcance. Sumar alcance tienta para conformar, pero empeora todo." },
    { q: "Si querés saber dónde podés negociar en un proyecto, ¿qué preguntás primero?", opciones: ["Quién es el más simpático","Cuál es el color de la marca","Nada","Qué es lo fijo: la fecha, el presupuesto o el alcance"], correcta: 3, explicacion: "Lo fijo te dice qué no se mueve. \"Nada\" tienta para arrancar rápido, pero después no sabés qué ajustar." },
    { q: "Si querés que todos entiendan lo mismo antes de empezar, ¿qué escribís?", opciones: ["Un mensaje suelto en el grupo","El acta de inicio","Nada, se habla en el camino","El informe final"], correcta: 1, explicacion: "El acta deja el acuerdo por escrito. El mensaje tienta por rápido, pero se pierde y no tiene todos los datos." },
    { q: "Si estás escribiendo el acta de inicio, ¿qué datos lleva?", opciones: ["Solo la fecha","Solo el presupuesto","Objetivo, qué incluye y qué no, fecha, presupuesto, responsable, quién decide y criterio de éxito","La lista de todas las tareas"], correcta: 2, explicacion: "El acta es un resumen completo. La lista de tareas tienta, pero eso va después, en la planificación." },
    { q: "Si en el acta no ponés \"No incluye: pintura\", ¿qué puede pasar?", opciones: ["Que alguien asuma que estaba incluida y lo reclame al final","Nada","Que se pinte gratis","Que el proyecto termine antes"], correcta: 0, explicacion: "\"No incluye\" evita malentendidos. \"Nada\" tienta porque nadie la pidió, pero alguien puede suponerla." },
    { q: "Si querés saber si el proyecto salió bien, ¿qué parte del acta mirás?", opciones: ["El nombre del proyecto","El presupuesto solo","La fecha de hoy","El criterio de éxito"], correcta: 3, explicacion: "El criterio de éxito dice cuándo está logrado. El presupuesto tienta, pero gastar bien no alcanza si no se cumple el objetivo." },
    { q: "Si el dueño quiere cambiar algo del acta a mitad del proyecto, ¿qué hacés?", opciones: ["Lo hacés sin decir nada","Revisás con él el impacto en tiempo y costo y actualizás el acta","Te negás siempre","Lo anotás en un papel suelto"], correcta: 1, explicacion: "Los cambios se acuerdan con su impacto. Hacerlo sin decir nada tienta para evitar discusiones, pero después no cierran los números." },
  ],
},
{
  id: "alcance",
  icono: "🧩",
  titulo: "Alcance y entregables",
  nivel: "Básico",
  objetivos: [
    "Dividir un proyecto en entregables y tareas con una EDT",
    "Escribir criterios de aceptación verificables para cada entregable",
    "Identificar a los interesados y qué necesita cada uno",
  ],
  lecciones: [
    { titulo: "Partir el proyecto en pedazos", html: `
      <p class="idea">Un proyecto grande asusta. La <strong>EDT</strong> (estructura de desglose del trabajo) lo divide en partes más chicas, hasta llegar a tareas que alguien puede hacer en pocos días.</p>
      <pre><code>Mudanza de la oficina
├── 1. Local nuevo listo
│   ├── 1.1 Instalar internet
│   ├── 1.2 Instalar teléfonos
│   └── 1.3 Armar 15 puestos
├── 2. Embalaje
│   ├── 2.1 Comprar cajas
│   └── 2.2 Embalar por sector
├── 3. Traslado
│   ├── 3.1 Contratar flete
│   └── 3.2 Día de mudanza
└── 4. Cierre
    ├── 4.1 Probar todos los puestos
    └── 4.2 Entregar el local viejo</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Partir por resultados (qué se entrega), no por personas</td><td>Así no te olvidás de nada</td></tr>
        <tr><td>Bajar hasta tareas de 1 a 5 días</td><td>Son fáciles de estimar y seguir</td></tr>
        <tr><td>Todo lo que no está en la EDT no está en el proyecto</td><td>Es la misma idea del "no incluye" del acta</td></tr>
      </table>
      <p>Por ejemplo, "Hacer la mudanza" es imposible de estimar; "Comprar 60 cajas" se estima en un rato.</p>` },
    { titulo: "Entregables y criterios de aceptación", html: `
      <p class="idea">Un <strong>entregable</strong> es un resultado concreto que se puede mostrar. Cada uno necesita un <strong>criterio de aceptación</strong>: cómo se comprueba que está bien hecho.</p>
      <table>
        <tr><th>Entregable</th><th>Criterio de aceptación</th></tr>
        <tr><td>Internet instalado</td><td>Velocidad de al menos 100 Mbps en los 15 puestos, medida con un test</td></tr>
        <tr><td>Puestos armados</td><td>15 puestos con escritorio, silla, monitor y enchufe probados</td></tr>
        <tr><td>Embalaje</td><td>Todas las cajas con etiqueta de sector y número</td></tr>
        <tr><td>Local viejo entregado</td><td>Vacío, limpio y con acta firmada por el dueño del local</td></tr>
      </table>
      <p><strong>Un buen criterio se puede verificar:</strong> "que funcione bien" no sirve; "15 puestos probados" sí.</p>
      <p><strong>Acordalo antes:</strong> si el criterio se discute al final, cada uno tiene una idea distinta de "terminado".</p>
      <p>Por ejemplo, el proveedor dice "internet instalado" con el router enchufado; el criterio "100 Mbps en los 15 puestos" evita que des por terminado algo que no funciona en la mitad de la oficina.</p>` },
    { titulo: "Los interesados", html: `
      <p class="idea">Los <strong>interesados</strong> son las personas o grupos a los que el proyecto afecta o que pueden afectarlo. Si te olvidás de uno, puede frenar el proyecto al final.</p>
      <table>
        <tr><th>Interesado</th><th>Qué necesita</th><th>Cómo lo mantenés al tanto</th></tr>
        <tr><td>El dueño (decide)</td><td>Saber si llega a fecha y presupuesto</td><td>Informe semanal</td></tr>
        <tr><td>Los 15 empleados</td><td>Saber qué embalar, cuándo y dónde van a sentarse</td><td>Reunión y mensaje con fechas</td></tr>
        <tr><td>Los clientes</td><td>Que la atención no se corte</td><td>Aviso por mail una semana antes</td></tr>
        <tr><td>El dueño del local viejo</td><td>Recibir el local en fecha y en condiciones</td><td>Coordinación de la entrega</td></tr>
        <tr><td>El proveedor de internet</td><td>Fecha y datos de la instalación</td><td>Llamado y confirmación por escrito</td></tr>
      </table>
      <pre><code>Mapa simple de interesados:
                 Mucho interés
                      │
  Mantener informado  │  Gestionar de cerca
  (empleados)         │  (el dueño)
  ────────────────────┼──────────────────── Mucho poder
  Monitorear          │  Mantener satisfecho
  (vecinos)           │  (dueño del local)
                      │</code></pre>
      <p>Por ejemplo, si nadie avisa a los clientes, el día de la mudanza llaman, nadie atiende y se enojan, aunque el resto del proyecto salga perfecto.</p>` },
  ],
  practica: [
    "Armá la EDT de un proyecto tuyo con al menos 4 entregables y 2 tareas por entregable. Anotá cuántas tareas quedaron.",
    "Escribí un criterio de aceptación verificable para 3 entregables. Anotá cómo se mide cada uno.",
    "Hacé la tabla de interesados de tu proyecto con al menos 5 filas y ubicá cada uno en el mapa de interés y poder.",
  ],
  recursos: [
    { t: "Atlassian: cómo definir el alcance de un proyecto (en inglés)", url: "https://www.atlassian.com/work-management/project-management/project-scope" },
    { t: "Atlassian: guía de gestión de proyectos (en inglés)", url: "https://www.atlassian.com/agile/project-management" },
  ],
  quiz: [
    { q: "Si tu proyecto parece demasiado grande para empezar, ¿qué armás?", opciones: ["Una lista de compras","Una reunión sin tema","Una EDT que lo divida en entregables y tareas chicas","Nada, se arranca y se ve"], correcta: 2, explicacion: "La EDT parte el trabajo en pedazos manejables. \"Se arranca y se ve\" tienta, pero te olvidás de partes." },
    { q: "Si armás la EDT, ¿cómo conviene partir el proyecto?", opciones: ["Por resultados (qué se entrega)","Por personas","Por orden alfabético","Por lo que más te gusta"], correcta: 0, explicacion: "Partir por resultados evita olvidos. Por personas tienta porque sabés quién hace qué, pero quedan huecos." },
    { q: "Si una tarea de la EDT dice \"Hacer la mudanza\", ¿qué problema tiene?", opciones: ["Ninguno","Es muy chica","Tiene muchas palabras","Es demasiado grande para estimarla y seguirla"], correcta: 3, explicacion: "Hay que bajar a tareas de 1 a 5 días. \"Ninguno\" tienta porque se entiende, pero no se puede estimar." },
    { q: "Si algo no está en la EDT, ¿qué significa?", opciones: ["Que se hace igual","Que no está en el proyecto","Que lo hace otro","Que es opcional y lo decidís después"], correcta: 1, explicacion: "La EDT define el trabajo, como el \"no incluye\" del acta. \"Se hace igual\" tienta, pero no tiene tiempo ni plata asignados." },
    { q: "Si querés saber si un entregable está bien hecho, ¿qué necesitás?", opciones: ["La opinión del que lo hizo","Que se vea lindo","Un criterio de aceptación verificable","Esperar a que alguien se queje"], correcta: 2, explicacion: "El criterio dice cómo comprobarlo. La opinión del que lo hizo tienta, pero cada uno tiene su idea de terminado." },
    { q: "Si el criterio dice \"que internet funcione bien\", ¿qué problema tiene?", opciones: ["No se puede verificar: falta una medida concreta","Ninguno","Es muy exigente","Es muy largo"], correcta: 0, explicacion: "\"Bien\" depende de cada uno. \"Ninguno\" tienta porque se entiende, pero no se puede comprobar." },
    { q: "Si el proveedor dice que internet está instalado, pero solo funciona en la mitad de los puestos, ¿qué te protege?", opciones: ["Nada","Su palabra","Pagarle y ver","El criterio \"100 Mbps en los 15 puestos\" acordado antes"], correcta: 3, explicacion: "Con el criterio claro, no está terminado. Su palabra tienta, pero no prueba que funcione en todos." },
    { q: "Si querés evitar discusiones sobre qué es \"terminado\", ¿cuándo acordás los criterios?", opciones: ["Al final","Antes de empezar el trabajo","Nunca","Cuando alguien se queja"], correcta: 1, explicacion: "Acordarlos antes evita sorpresas. Al final tienta porque ya ves el resultado, pero ahí cada uno defiende su idea." },
    { q: "Si un grupo se ve afectado por el proyecto, ¿cómo se llama?", opciones: ["Entregable","Tarea","Interesado","Criterio"], correcta: 2, explicacion: "Los afectados son interesados. Entregable tienta porque es otra palabra del módulo, pero es un resultado." },
    { q: "Si en la mudanza nadie avisa a los clientes, ¿qué puede pasar?", opciones: ["Que llamen, nadie atienda y se enojen, aunque el resto salga bien","Nada","Que se muden con la oficina","Que llamen más"], correcta: 0, explicacion: "Olvidar un interesado arruina el resultado. \"Nada\" tienta porque los clientes no participan, pero los afecta." },
    { q: "Si un interesado tiene mucho poder y mucho interés, como el dueño, ¿qué hacés?", opciones: ["Lo monitoreás de lejos","No le contás nada","Lo dejás para el final","Lo gestionás de cerca, con informes frecuentes"], correcta: 3, explicacion: "Alto poder y alto interés se gestiona de cerca. Monitorear tienta por menos trabajo, pero puede frenarte." },
    { q: "Si los empleados tienen mucho interés, pero poco poder en el proyecto, ¿qué hacés?", opciones: ["Los ignorás","Los mantenés informados","Les pedís permiso para todo","Les das el presupuesto"], correcta: 1, explicacion: "Interés alto y poder bajo: mantener informado. Ignorarlos tienta porque no deciden, pero sin su ayuda el embalaje no sale." },
  ],
},
{
  id: "planificar",
  icono: "📆",
  titulo: "Tiempos, dependencias y Gantt",
  nivel: "Intermedio",
  objetivos: [
    "Estimar la duración de una tarea con tres valores",
    "Encontrar el camino crítico de un proyecto y su holgura",
    "Armar un diagrama de Gantt con hitos",
  ],
  lecciones: [
    { titulo: "Estimar con tres valores", html: `
      <p class="idea">Nadie sabe exactamente cuánto va a tardar una tarea. Estimar con <strong>tres valores</strong> (optimista, más probable y pesimista) da un número más realista que adivinar uno solo.</p>
      <pre><code>Estimación = (optimista + 4 × más probable + pesimista) / 6

Instalar internet:
Optimista 2 días · Más probable 4 días · Pesimista 12 días
(2 + 4 × 4 + 12) / 6 = (2 + 16 + 12) / 6 = 30 / 6 = 5 días</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Pedí la estimación a quien hace la tarea</td><td>Sabe mejor cuánto tarda</td></tr>
        <tr><td>Usá tareas parecidas del pasado</td><td>Los datos reales ganan a la intuición</td></tr>
        <tr><td>Anotá los supuestos</td><td>"5 días si el proveedor confirma el lunes"</td></tr>
      </table>
      <p><strong>Por qué el pesimista pesa:</strong> las tareas casi nunca terminan mucho antes, pero a veces terminan mucho después. La fórmula lo tiene en cuenta.</p>
      <p>Por ejemplo, si estimás internet en 4 días porque "suele tardar eso", la fórmula te avisa que conviene planificar 5, por si el proveedor se atrasa.</p>` },
    { titulo: "Dependencias y camino crítico", html: `
      <p class="idea">Algunas tareas no pueden empezar hasta que termina otra: eso es una <strong>dependencia</strong>. La cadena más larga de tareas dependientes es el <strong>camino crítico</strong>: define cuánto dura el proyecto.</p>
      <pre><code>A. Firmar el local nuevo       3 días
B. Instalar internet           5 días  (después de A)
C. Armar puestos               4 días  (después de A)
D. Probar todo                 2 días  (después de B y C)

Camino A → B → D = 3 + 5 + 2 = 10 días   ← camino crítico
Camino A → C → D = 3 + 4 + 2 =  9 días
Holgura de C = 10 - 9 = 1 día</code></pre>
      <table>
        <tr><th>Concepto</th><th>Qué significa</th></tr>
        <tr><td>Camino crítico</td><td>Si una de sus tareas se atrasa un día, todo el proyecto se atrasa un día</td></tr>
        <tr><td>Holgura</td><td>Cuánto puede atrasarse una tarea sin atrasar el proyecto</td></tr>
      </table>
      <p><strong>Cuidá el camino crítico:</strong> ahí van tu atención y tus mejores recursos.</p>
      <p>Por ejemplo, si el armado de puestos (C) se atrasa 1 día, no pasa nada; si internet (B) se atrasa 1 día, la mudanza entera se atrasa 1 día.</p>` },
    { titulo: "El diagrama de Gantt", video: {"id":"7dXAFrxBOCY","t":"Qué es el diagrama de Gantt · iLERNA (2:12)"}, html: `
      <p class="idea">El <strong>diagrama de Gantt</strong> muestra las tareas como barras en un calendario: dónde empieza cada una, cuánto dura y cuáles se superponen. Se puede hacer en una planilla.</p>
      <pre><code>Tarea              Día: 1 2 3 4 5 6 7 8 9 10
A. Firmar local         ███
B. Internet                   █████
C. Armar puestos              ████
D. Probar todo                         ██
◆ Hito: oficina lista                     ◆</code></pre>
      <table>
        <tr><th>Elemento</th><th>Qué es</th></tr>
        <tr><td>Barra</td><td>Una tarea, con su inicio y su duración</td></tr>
        <tr><td>Hito (◆)</td><td>Un momento clave sin duración: "contrato firmado", "oficina lista"</td></tr>
        <tr><td>Superposición</td><td>Tareas que se hacen al mismo tiempo (B y C)</td></tr>
      </table>
      <p><strong>Contá días hábiles:</strong> si el proyecto tiene feriados o fines de semana en el medio, marcá esos días como no laborables.</p>
      <p><strong>Actualizalo:</strong> un Gantt que no se actualiza deja de servir en una semana.</p>
      <p>Por ejemplo, ver B y C en paralelo en el Gantt muestra que hacen falta personas distintas para cada una, porque se hacen los mismos días.</p>` },
  ],
  practica: [
    "Estimá 3 tareas de tu proyecto con optimista, más probable y pesimista, y calculá la fórmula. Anotá los resultados.",
    "Escribí 5 tareas con sus dependencias y duraciones, y calculá el camino crítico y la holgura de las tareas que no están en él.",
    "Armá un Gantt en una planilla con al menos 6 tareas y 2 hitos. Anotá la fecha de fin del proyecto.",
  ],
  recursos: [
    { t: "Atlassian: guía de gestión de proyectos (en inglés)", url: "https://www.atlassian.com/agile/project-management" },
    { t: "Gobierno del Reino Unido: manual de entrega ágil (en inglés)", url: "https://www.gov.uk/service-manual/agile-delivery" },
  ],
  quiz: [
    { q: "Si una tarea tiene optimista 2, más probable 4 y pesimista 12 días, ¿cuánto estimás?", opciones: ["4 días","6 días","5 días","18 días"], correcta: 2, explicacion: "(2 + 16 + 12) / 6 = 5. El 6 tienta porque es el promedio simple de los tres, pero la fórmula pesa más el más probable." },
    { q: "Si querés una estimación realista de una tarea, ¿a quién se la pedís?", opciones: ["A quien va a hacer la tarea","Al que tiene más apuro","A nadie, la inventás","Al cliente"], correcta: 0, explicacion: "Quien la hace sabe cuánto tarda. El que tiene más apuro tienta porque decide, pero va a estimar de menos." },
    { q: "Si tu estimación depende de que el proveedor confirme el lunes, ¿qué hacés?", opciones: ["No decís nada","Lo dejás en tu cabeza","Duplicás la estimación sin explicar","Anotás ese supuesto junto a la estimación"], correcta: 3, explicacion: "Anotar supuestos explica después los desvíos. No decir nada tienta, pero si falla, nadie entiende el atraso." },
    { q: "Si una tarea no puede empezar hasta que termine otra, ¿qué hay entre ellas?", opciones: ["Una holgura","Una dependencia","Un hito","Un entregable"], correcta: 1, explicacion: "Eso es una dependencia. Holgura tienta porque también es de tiempos, pero es el margen de atraso." },
    { q: "Si el camino A-B-D suma 10 días y el A-C-D suma 9, ¿cuál es el camino crítico?", opciones: ["A-C-D, el de 9","Los dos","A-B-D, el de 10 días","Ninguno"], correcta: 2, explicacion: "El crítico es el más largo. El de 9 tienta porque es más corto, pero el proyecto no termina antes de 10." },
    { q: "Si la tarea C está en un camino de 9 días y el crítico es de 10, ¿cuánta holgura tiene?", opciones: ["1 día","9 días","10 días","Ninguna"], correcta: 0, explicacion: "10 - 9 = 1. 9 días tienta porque es la duración de su camino, pero la holgura es la diferencia." },
    { q: "Si una tarea del camino crítico se atrasa 2 días, ¿qué pasa con el proyecto?", opciones: ["No pasa nada","Se atrasa 1 día","Se adelanta","Se atrasa 2 días"], correcta: 3, explicacion: "En el camino crítico, cada día de atraso se traslada al final. \"No pasa nada\" tienta, pero eso solo vale si hay holgura." },
    { q: "Si la tarea con 1 día de holgura se atrasa 1 día, ¿qué pasa?", opciones: ["El proyecto se atrasa 1 día","El proyecto no se atrasa, pero esa tarea pasa a ser crítica","El proyecto se atrasa 2 días","Se cancela"], correcta: 1, explicacion: "Usó toda su holgura. Que se atrase el proyecto tienta, pero el margen lo absorbe." },
    { q: "Si querés ver las tareas como barras en un calendario, ¿qué armás?", opciones: ["Una EDT","Un acta de inicio","Un diagrama de Gantt","Un mapa de interesados"], correcta: 2, explicacion: "El Gantt muestra tiempos en un calendario. La EDT tienta porque también organiza tareas, pero no muestra fechas." },
    { q: "Si querés marcar \"oficina lista\" en el Gantt, ¿qué usás?", opciones: ["Un hito, un momento clave sin duración","Una barra larga","Una tarea de 10 días","Nada"], correcta: 0, explicacion: "Los hitos marcan momentos clave. Una barra tienta, pero \"oficina lista\" no dura días: es un momento." },
    { q: "Si en el Gantt dos tareas se superponen los mismos días, ¿qué tenés en cuenta?", opciones: ["Que está mal hecho","Que se hacen una después de otra","Nada","Que hacen falta personas o recursos para las dos a la vez"], correcta: 3, explicacion: "La superposición pide recursos en paralelo. \"Está mal hecho\" tienta, pero es normal y hay que planificarlo." },
    { q: "Si armaste el Gantt hace dos semanas y nunca lo tocaste, ¿qué pasa?", opciones: ["Sigue sirviendo igual","Deja de servir: hay que actualizarlo con lo real","Mejora solo","No importa"], correcta: 1, explicacion: "Un plan sin actualizar ya no refleja la realidad. \"Sigue sirviendo\" tienta porque costó armarlo, pero mostraría fechas falsas." },
  ],
},
{
  id: "equipo-riesgos",
  icono: "🛡️",
  titulo: "Roles, presupuesto y riesgos",
  nivel: "Intermedio",
  objetivos: [
    "Repartir responsabilidades con una matriz RACI",
    "Armar un presupuesto con una reserva para imprevistos",
    "Evaluar riesgos con probabilidad e impacto y elegir una respuesta",
  ],
  lecciones: [
    { titulo: "La matriz RACI", video: {"id":"vwHHWzm1nj4","t":"Matriz RACI en 3 minutos · Instructor Creativo (2:41)"}, html: `
      <p class="idea">La <strong>matriz RACI</strong> dice, para cada tarea, quién la hace, quién responde por el resultado, a quién se consulta y a quién se informa. Evita tareas sin dueño y tareas con demasiados dueños.</p>
      <table>
        <tr><th>Letra</th><th>Quiere decir</th><th>Regla</th></tr>
        <tr><td>R (Responsable)</td><td>Hace la tarea</td><td>Al menos uno</td></tr>
        <tr><td>A (Aprobador)</td><td>Responde por el resultado y aprueba</td><td>Uno solo</td></tr>
        <tr><td>C (Consultado)</td><td>Da su opinión antes</td><td>Los que hagan falta</td></tr>
        <tr><td>I (Informado)</td><td>Se entera después</td><td>Los que hagan falta</td></tr>
      </table>
      <pre><code>Tarea               Sofía   Martín   Pedro (sistemas)   Empleados
Contratar flete       R        A           —                I
Instalar internet     A        I           R                I
Embalar por sector    A        —           —                R
Elegir puestos        R        A           C                C</code></pre>
      <p><strong>Es más detallada que una tabla de roles simple:</strong> separa a quien hace la tarea de quien responde por ella. El curso "Liderar un equipo por primera vez" de este sitio usa una tabla más simple, para el día a día.</p>
      <p>Por ejemplo, si "Elegir puestos" tiene dos A (Sofía y Martín), cuando no se ponen de acuerdo nadie sabe quién tiene la última palabra.</p>` },
    { titulo: "Presupuesto y reserva", html: `
      <p class="idea">El presupuesto suma lo que cuesta cada tarea de la EDT. Como siempre hay imprevistos, se agrega una <strong>reserva</strong>: un porcentaje que no se asigna a ninguna tarea.</p>
      <pre><code>Presupuesto de la mudanza:
Flete                       600.000
Cajas y embalaje            150.000
Instalación de internet     250.000
Armado de puestos           700.000
Limpieza del local viejo    300.000
Subtotal                  2.000.000
Reserva 10%                 200.000
Total                     2.200.000</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Pedí 2 o 3 presupuestos de proveedores</td><td>Para tener un precio real</td></tr>
        <tr><td>Anotá si los precios incluyen IVA y hasta cuándo valen</td><td>Con inflación, un presupuesto viejo no sirve</td></tr>
        <tr><td>Usar la reserva se avisa</td><td>No es plata libre: es para riesgos que pasaron</td></tr>
      </table>
      <p><strong>La reserva depende del riesgo:</strong> 10% es habitual en proyectos conocidos; en proyectos nuevos o con mucha incertidumbre, puede ser más.</p>
      <p>Por ejemplo, si el acta dice $ 2.000.000 y no hay reserva, el primer imprevisto (un flete que sube) obliga a pedir más plata o recortar algo.</p>` },
    { titulo: "Gestionar los riesgos", video: {"id":"zTPycGDUTSg","t":"Conceptos sobre la gestión de riesgo · Jhonny Ramírez Fuentes (6:12)"}, html: `
      <p class="idea">Un <strong>riesgo</strong> es algo que puede pasar y afectaría al proyecto. Gestionarlo es pensarlo antes, darle un puntaje y decidir qué hacer, en lugar de sorprenderte.</p>
      <pre><code>Puntaje = probabilidad (1 a 5) × impacto (1 a 5)

Riesgo                           Prob.  Impacto  Puntaje
El proveedor de internet atrasa    4       4       16  ← alto
Llueve el día de la mudanza        3       2        6
Se rompe un monitor en el flete    2       2        4
El flete cancela a último momento  2       5       10</code></pre>
      <table>
        <tr><th>Respuesta</th><th>Ejemplo</th></tr>
        <tr><td>Evitar (sacar la causa)</td><td>Cambiar a un proveedor que instala en 48 horas</td></tr>
        <tr><td>Mitigar (bajar probabilidad o impacto)</td><td>Pedir la instalación 2 semanas antes y tener un módem móvil de respaldo</td></tr>
        <tr><td>Transferir (que otro lo asuma)</td><td>Contratar un seguro para el traslado de equipos</td></tr>
        <tr><td>Aceptar (no hacer nada y tener plan B)</td><td>Si llueve, usar cajas plásticas</td></tr>
      </table>
      <p><strong>Empezá por los de puntaje más alto</strong> y anotá un responsable para cada uno.</p>
      <p>Por ejemplo, el riesgo de internet (16) está en el camino crítico del módulo anterior: si pasa, atrasa toda la mudanza. Por eso es el primero que se atiende.</p>` },
  ],
  practica: [
    "Armá la matriz RACI de tu proyecto con al menos 5 tareas y 3 personas. Verificá que cada tarea tenga un solo A y anotá si alguna no lo tenía.",
    "Armá el presupuesto de tu proyecto por tareas, con subtotal, reserva y total. Anotá qué porcentaje de reserva elegiste y por qué.",
    "Escribí 5 riesgos de tu proyecto con probabilidad, impacto y puntaje, y anotá la respuesta para los 2 de mayor puntaje.",
  ],
  recursos: [
    { t: "Atlassian: guía de gestión de proyectos (en inglés)", url: "https://www.atlassian.com/agile/project-management" },
    { t: "Gobierno del Reino Unido: manual de entrega ágil (en inglés)", url: "https://www.gov.uk/service-manual/agile-delivery" },
  ],
  quiz: [
    { q: "Si en la matriz RACI una persona hace la tarea, ¿qué letra lleva?", opciones: ["A","C","R, de responsable","I"], correcta: 2, explicacion: "La R hace la tarea. La A tienta porque también \"responde\", pero la A aprueba y responde por el resultado." },
    { q: "Si una tarea tiene dos A, ¿qué problema hay?", opciones: ["Cuando no se ponen de acuerdo, nadie sabe quién tiene la última palabra","Ninguno","Que se hace el doble de rápido","Que sobra gente"], correcta: 0, explicacion: "Debe haber un solo A. \"Ninguno\" tienta porque hay más control, pero se traban las decisiones." },
    { q: "Si alguien tiene que dar su opinión antes de decidir, ¿qué letra lleva?", opciones: ["I","R","A","C, de consultado"], correcta: 3, explicacion: "C opina antes. I tienta porque también se entera, pero I se entera después." },
    { q: "Si los empleados solo tienen que enterarse de que el flete está contratado, ¿qué letra llevan?", opciones: ["C","I, de informado","R","A"], correcta: 1, explicacion: "Se enteran después: I. La C tienta porque los afecta, pero no opinan sobre qué flete elegir." },
    { q: "Si el subtotal es $ 2.000.000 y agregás 10% de reserva, ¿cuál es el total?", opciones: ["$ 2.000.000","$ 2.010.000","$ 2.200.000","$ 3.000.000"], correcta: 2, explicacion: "2.000.000 + 200.000 = 2.200.000. $ 2.010.000 tienta si calculás 10% mal." },
    { q: "Si no ponés reserva y el flete sube, ¿qué pasa?", opciones: ["Tenés que pedir más plata o recortar algo del proyecto","Nada","El flete se paga solo","Se baja otro costo automáticamente"], correcta: 0, explicacion: "Sin reserva, el imprevisto no tiene de dónde salir. \"Nada\" tienta por optimismo, pero alguien lo tiene que pagar." },
    { q: "Si pedís presupuestos a proveedores, ¿qué anotás además del precio?", opciones: ["Solo el precio","El color del logo","Nada más","Si incluye IVA y hasta cuándo vale"], correcta: 3, explicacion: "Con inflación, la vigencia importa. \"Solo el precio\" tienta por simple, pero puede no valer cuando lo pagues." },
    { q: "Si usás plata de la reserva, ¿qué hacés?", opciones: ["La usás para lo que quieras","Lo avisás, porque es para riesgos que pasaron","No decís nada","La gastás al principio"], correcta: 1, explicacion: "La reserva no es plata libre. Usarla sin decir nada tienta, pero después no se entienden los números." },
    { q: "Si un riesgo tiene probabilidad 4 e impacto 4, ¿cuál es su puntaje?", opciones: ["8","4","16","44"], correcta: 2, explicacion: "4 × 4 = 16. El 8 tienta si sumás en vez de multiplicar." },
    { q: "Si tenés varios riesgos, ¿por cuál empezás?", opciones: ["Por el de puntaje más alto","Por el más fácil","Por el último que se te ocurrió","Por ninguno"], correcta: 0, explicacion: "El puntaje ordena la atención. El más fácil tienta porque se resuelve rápido, pero puede ser el que menos importa." },
    { q: "Si pedís la instalación 2 semanas antes y tenés un módem móvil de respaldo, ¿qué respuesta es?", opciones: ["Evitar","Transferir","Aceptar","Mitigar: bajás la probabilidad y el impacto"], correcta: 3, explicacion: "Mitigar baja el riesgo sin eliminarlo. Evitar tienta, pero el riesgo sigue existiendo." },
    { q: "Si contratás un seguro para el traslado de equipos, ¿qué respuesta al riesgo es?", opciones: ["Evitar","Transferir: otro asume la pérdida","Mitigar","Aceptar"], correcta: 1, explicacion: "El seguro transfiere el impacto económico. Mitigar tienta, pero el seguro no baja la probabilidad de que se rompa." },
  ],
},
{
  id: "agil",
  icono: "🔄",
  titulo: "Métodos ágiles: Kanban y Scrum",
  nivel: "Intermedio",
  objetivos: [
    "Armar un tablero Kanban con límite de trabajo en curso",
    "Explicar los roles y eventos de Scrum",
    "Elegir entre un plan tradicional y un método ágil según el proyecto",
  ],
  lecciones: [
    { titulo: "Kanban", video: {"id":"w-st9fGVM3c","t":"Metodología Kanban · Emprendimiento PUJ (3:28)"}, html: `
      <p class="idea"><strong>Kanban</strong> organiza el trabajo en un tablero con columnas y pone un <strong>límite al trabajo en curso</strong>: no se empieza algo nuevo hasta terminar lo que está en marcha.</p>
      <pre><code>POR HACER        EN CURSO (máx. 3)     EN REVISIÓN     HECHO
Comprar cajas    Contratar flete       Presupuesto     Firmar local
Etiquetas        Internet              de puestos
Avisar clientes  Plano de puestos</code></pre>
      <table>
        <tr><th>Regla de Kanban</th><th>Por qué</th></tr>
        <tr><td>Hacer visible todo el trabajo</td><td>Lo que no está en el tablero no se ve ni se prioriza</td></tr>
        <tr><td>Limitar el trabajo en curso</td><td>Empezar muchas cosas a la vez hace que ninguna termine</td></tr>
        <tr><td>Medir cuánto tarda una tarea en cruzar el tablero</td><td>Para mejorar el flujo</td></tr>
      </table>
      <p><strong>Si la columna "En curso" está llena,</strong> la persona que quiere empezar algo nuevo ayuda a terminar lo que está ahí.</p>
      <p>Por ejemplo, con 8 tareas "en curso" a la vez, todas avanzan un poco y ninguna se termina; con un límite de 3, se terminan antes y se ven los cuellos de botella.</p>` },
    { titulo: "Scrum", video: {"id":"HhC75IonpOU","t":"Scrum en 6 minutos · Cristian Henao (6:22)"}, html: `
      <p class="idea"><strong>Scrum</strong> organiza el trabajo en ciclos cortos de duración fija, llamados <strong>sprints</strong> (de un mes o menos, muchas veces 2 semanas). En cada sprint se entrega algo que funciona y se ajusta el plan.</p>
      <table>
        <tr><th>Roles</th><th>Qué hace</th></tr>
        <tr><td>Product Owner (dueño del producto)</td><td>Decide qué es lo más valioso y ordena la lista de trabajo</td></tr>
        <tr><td>Scrum Master</td><td>Ayuda al equipo a aplicar Scrum y saca obstáculos</td></tr>
        <tr><td>Developers (el equipo que hace el trabajo)</td><td>Hacen el trabajo del sprint</td></tr>
      </table>
      <table>
        <tr><th>Evento</th><th>Para qué</th></tr>
        <tr><td>Sprint Planning (planificación)</td><td>Elegir qué se hace en el sprint</td></tr>
        <tr><td>Daily Scrum (reunión diaria de 15 minutos)</td><td>Revisar el avance y ajustar el día</td></tr>
        <tr><td>Sprint Review (revisión)</td><td>Mostrar lo hecho a los interesados</td></tr>
        <tr><td>Sprint Retrospective (retrospectiva)</td><td>Ver qué mejorar en la forma de trabajar</td></tr>
      </table>
      <p><strong>El Product Backlog</strong> es la lista ordenada de todo lo que se quiere hacer. Cambia a medida que se aprende.</p>
      <p>Por ejemplo, un equipo que arma una tienda en línea puede, en el primer sprint de 2 semanas, publicar solo el catálogo, mostrarlo y decidir con los comentarios qué hace en el siguiente.</p>` },
    { titulo: "Tradicional o ágil", html: `
      <p class="idea">No hay un método mejor para todo. Un plan <strong>tradicional</strong> (todo planificado al inicio, como la EDT y el Gantt) conviene cuando el resultado está claro; uno <strong>ágil</strong>, cuando hay que descubrir el resultado en el camino.</p>
      <table>
        <tr><th>Conviene tradicional</th><th>Conviene ágil</th></tr>
        <tr><td>El resultado está claro desde el principio</td><td>El resultado se va descubriendo</td></tr>
        <tr><td>Cambiar a mitad de camino es caro (una obra, una mudanza)</td><td>Cambiar es barato (software, contenidos, campañas)</td></tr>
        <tr><td>Hay una fecha fija y tareas conocidas</td><td>Hay que probar con usuarios y aprender</td></tr>
      </table>
      <p><strong>Se pueden mezclar:</strong> muchos equipos planifican las fechas grandes con un Gantt y organizan el día a día con un tablero Kanban.</p>
      <p><strong>Ágil no es "sin plan":</strong> hay plan, pero se revisa seguido y se ajusta con lo que se aprende.</p>
      <p>Por ejemplo, la mudanza conviene planificarla de forma tradicional (la fecha es fija y no se puede probar dos veces), pero el equipo puede usar un tablero Kanban para las tareas de cada semana.</p>` },
  ],
  practica: [
    "Armá un tablero Kanban de tu proyecto con 4 columnas y un límite para \"En curso\". Anotá cuántas tareas había en curso antes de poner el límite.",
    "Planificá un sprint de 2 semanas para un proyecto que se pueda entregar en partes: anotá qué se entrega al final y qué queda para el siguiente.",
    "Para 3 proyectos que conozcas, anotá si conviene tradicional, ágil o mezcla, y por qué.",
  ],
  recursos: [
    { t: "Atlassian: qué es Kanban (en inglés)", url: "https://www.atlassian.com/agile/kanban" },
    { t: "La Guía de Scrum oficial (en inglés; tiene traducción al español)", url: "https://scrumguides.org/scrum-guide.html" },
    { t: "Gobierno del Reino Unido: manual de entrega ágil (en inglés)", url: "https://www.gov.uk/service-manual/agile-delivery" },
  ],
  quiz: [
    { q: "Si en tu tablero hay 8 tareas \"en curso\" a la vez y ninguna termina, ¿qué aplicás de Kanban?", opciones: ["Más columnas","Empezar más tareas","Un límite al trabajo en curso","Borrar el tablero"], correcta: 2, explicacion: "Limitar lo que está en curso hace que se termine. Más columnas tienta por orden, pero no cambia el problema." },
    { q: "Si la columna \"En curso\" está llena y querés empezar algo nuevo, ¿qué hacés?", opciones: ["Ayudás a terminar lo que ya está en curso","Lo empezás igual","Subís el límite cada vez","Lo hacés sin anotarlo"], correcta: 0, explicacion: "El límite obliga a terminar. Empezar igual tienta por avanzar, pero vuelve el problema de las 8 tareas." },
    { q: "Si una tarea no está en el tablero Kanban, ¿qué pasa?", opciones: ["Se hace igual","Es la más importante","Se termina sola","No se ve ni se prioriza"], correcta: 3, explicacion: "Kanban pide hacer visible todo el trabajo. \"Se hace igual\" tienta, pero nadie sabe que existe." },
    { q: "Si trabajás con Scrum, ¿cuánto dura un sprint?", opciones: ["Un año","Un mes o menos, con duración fija","Lo que haga falta, sin fecha","Un día"], correcta: 1, explicacion: "Los sprints son cortos y fijos. \"Lo que haga falta\" tienta por flexible, pero pierde el ritmo de entregas." },
    { q: "Si en Scrum alguien decide qué es lo más valioso para hacer, ¿qué rol tiene?", opciones: ["Scrum Master","Developer","Product Owner","Cliente"], correcta: 2, explicacion: "El Product Owner ordena el trabajo por valor. El Scrum Master tienta, pero ayuda al equipo con el método." },
    { q: "Si en Scrum alguien ayuda al equipo a aplicar el método y saca obstáculos, ¿qué rol tiene?", opciones: ["Scrum Master","Product Owner","Jefe que manda","Developer"], correcta: 0, explicacion: "El Scrum Master facilita. \"Jefe que manda\" tienta, pero Scrum no le da ese papel." },
    { q: "Si querés revisar el avance del día en Scrum, ¿qué evento usás?", opciones: ["La Sprint Review","La retrospectiva","Una reunión de 2 horas","El Daily Scrum, de 15 minutos"], correcta: 3, explicacion: "La reunión diaria es corta. La Review tienta porque también revisa, pero es al final del sprint, con interesados." },
    { q: "Si al final del sprint querés ver qué mejorar en la forma de trabajar, ¿qué evento hacés?", opciones: ["La Sprint Planning","La Sprint Retrospective","El Daily Scrum","Ninguno"], correcta: 1, explicacion: "La retrospectiva mira cómo trabajó el equipo. La Planning tienta, pero sirve para elegir el trabajo del sprint que viene." },
    { q: "Si querés la lista ordenada de todo lo que se quiere hacer, ¿cómo se llama en Scrum?", opciones: ["Gantt","EDT","Product Backlog","Acta de inicio"], correcta: 2, explicacion: "El Product Backlog es esa lista y cambia con lo aprendido. La EDT tienta porque también lista trabajo, pero es del plan tradicional." },
    { q: "Si vas a hacer una mudanza con fecha fija, ¿qué método conviene más?", opciones: ["Tradicional, y se puede sumar un tablero Kanban para el día a día","Scrum puro con sprints de prueba","Ninguno","Improvisar"], correcta: 0, explicacion: "El resultado es claro y no se puede probar dos veces. Scrum puro tienta por moderno, pero no se puede \"mudar en partes\" para probar." },
    { q: "Si vas a armar una tienda en línea y no sabés qué van a querer los clientes, ¿qué conviene?", opciones: ["Planificar todo un año sin mostrar nada","No hacer nada","Solo un Gantt","Un método ágil, con entregas cortas para aprender"], correcta: 3, explicacion: "Ágil sirve cuando hay que descubrir. Planificar un año tienta por ordenado, pero podés construir algo que nadie quiere." },
    { q: "Si alguien dice \"somos ágiles, así que no planificamos\", ¿qué le respondés?", opciones: ["Que tiene razón","Que ágil sí tiene plan, pero se revisa y ajusta seguido","Que ágil es no tener fechas","Que es lo mismo que improvisar"], correcta: 1, explicacion: "Ágil planifica en ciclos cortos. \"Tiene razón\" tienta por lo que se escucha, pero es un error común." },
  ],
},
{
  id: "seguimiento",
  icono: "📈",
  titulo: "Seguimiento, cambios y cierre",
  nivel: "Avanzado",
  objetivos: [
    "Comparar avance real contra planificado en tiempo y costo",
    "Escribir un informe de estado de una página",
    "Gestionar un cambio y cerrar el proyecto con lecciones aprendidas",
  ],
  lecciones: [
    { titulo: "Medir el avance", html: `
      <p class="idea">Seguir un proyecto es comparar lo <strong>planificado</strong> con lo <strong>real</strong>, en tiempo y en costo. Con dos cuentas simples sabés si vas atrasado o gastando de más.</p>
      <pre><code>Semana 4 de 8 · presupuesto 2.000.000

Planificado a hoy:  50% del trabajo
Real a hoy:         40% del trabajo   → 10 puntos de atraso

Valor del trabajo hecho = 40% × 2.000.000 = 800.000
Gastado hasta hoy                         = 1.000.000
Desvío de costo = 800.000 - 1.000.000 = -200.000 (gastaste de más)</code></pre>
      <table>
        <tr><th>Color</th><th>Significa</th><th>Qué hacer</th></tr>
        <tr><td>Verde</td><td>En tiempo y costo</td><td>Seguir</td></tr>
        <tr><td>Amarillo</td><td>Desvío chico, recuperable</td><td>Acciones para volver al plan</td></tr>
        <tr><td>Rojo</td><td>Desvío grande o un riesgo que pasó</td><td>Avisar enseguida a quien decide y replanificar</td></tr>
      </table>
      <p><strong>El avance se mide con entregables terminados,</strong> no con "más o menos la mitad". Usá los criterios de aceptación del módulo "Alcance y entregables".</p>
      <p>Por ejemplo, gastar el 50% del presupuesto con el 40% del trabajo hecho es una alarma temprana: si sigue así, el proyecto termina pidiendo más plata.</p>` },
    { titulo: "El informe de estado", html: `
      <p class="idea">Un <strong>informe de estado</strong> semanal cuenta en una página cómo va el proyecto. Lo lee quien decide, que tiene poco tiempo: lo importante va arriba.</p>
      <pre><code>INFORME DE ESTADO · Mudanza · semana 4 de 8
Estado general: AMARILLO

Avance:  40% (plan: 50%)   Costo: 1.000.000 gastado (plan: 1.000.000)
Hecho esta semana:  local firmado, flete contratado
Próxima semana:     instalación de internet, compra de cajas
Problemas:          el proveedor de internet pasó la instalación
                    del día 10 al 14 (camino crítico)
Qué necesito:       aprobar usar 100.000 de la reserva para un
                    técnico particular que instala el día 11</code></pre>
      <table>
        <tr><th>Buen informe</th><th>Mal informe</th></tr>
        <tr><td>Dice el estado con un color</td><td>"Vamos bien" sin datos</td></tr>
        <tr><td>Muestra números contra el plan</td><td>Solo cuenta lo que se hizo</td></tr>
        <tr><td>Avisa los problemas pronto</td><td>Esconde el atraso hasta que es tarde</td></tr>
        <tr><td>Dice qué decisión necesita</td><td>Deja al lector adivinando</td></tr>
      </table>
      <p>Por ejemplo, avisar en la semana 4 que internet se atrasa da tiempo de buscar otra solución; avisarlo en la semana 8 ya no.</p>` },
    { titulo: "Cambios y cierre", html: `
      <p class="idea">Los cambios a mitad del proyecto son normales, pero se aprueban sabiendo su impacto. Y un proyecto no termina cuando se hace la última tarea, sino cuando se <strong>cierra</strong>.</p>
      <pre><code>SOLICITUD DE CAMBIO
Qué se pide:     pintar la oficina nueva
Quién lo pide:   Martín (dueño)
Impacto tiempo:  +3 días si lo hace el mismo equipo
                 0 días si se contratan pintores
Impacto costo:   +450.000 con pintores
Decisión:        aprobado con pintores · firma: Martín</code></pre>
      <table>
        <tr><th>Para cerrar el proyecto</th><th>Por qué</th></tr>
        <tr><td>Verificar los criterios de aceptación</td><td>Comprobar que todo está terminado</td></tr>
        <tr><td>Entrega formal a quien lo pidió</td><td>Que conste que lo recibió</td></tr>
        <tr><td>Pagar y cerrar con proveedores</td><td>No dejar cuentas abiertas</td></tr>
        <tr><td>Reunión de lecciones aprendidas</td><td>Qué salió bien, qué no, qué haríamos distinto</td></tr>
        <tr><td>Guardar los documentos</td><td>Para el próximo proyecto parecido</td></tr>
      </table>
      <p><strong>Lecciones aprendidas</strong> sirven si son concretas: "pedir internet con 3 semanas de anticipación" sirve; "comunicarnos mejor" no.</p>
      <p>Por ejemplo, la próxima mudanza de la empresa va a salir mejor si alguien encuentra la lista de lecciones de esta, con plazos reales de cada proveedor.</p>` },
  ],
  practica: [
    "Con los datos de tu proyecto (o inventados), calculá el atraso en puntos y el desvío de costo. Anotá el color que le corresponde.",
    "Escribí un informe de estado de una página con las 6 partes del ejemplo. Anotá cuántos minutos te llevó.",
    "Escribí una solicitud de cambio con su impacto en tiempo y costo, y 3 lecciones aprendidas concretas de un proyecto que hayas vivido.",
  ],
  recursos: [
    { t: "Atlassian: guía de gestión de proyectos (en inglés)", url: "https://www.atlassian.com/agile/project-management" },
    { t: "Gobierno del Reino Unido: manual de entrega ágil (en inglés)", url: "https://www.gov.uk/service-manual/agile-delivery" },
  ],
  quiz: [
    { q: "Si en la semana 4 de 8 el plan decía 50% y vas por 40%, ¿cómo estás?", opciones: ["Adelantado 10 puntos","Justo en el plan","Atrasado 10 puntos","Atrasado 40 puntos"], correcta: 2, explicacion: "50 - 40 = 10 de atraso. \"Atrasado 40\" tienta por el número, pero 40 es lo que llevás hecho." },
    { q: "Si hiciste el 40% de un proyecto de $ 2.000.000, ¿cuánto vale el trabajo hecho?", opciones: ["$ 800.000","$ 2.000.000","$ 1.000.000","$ 400.000"], correcta: 0, explicacion: "40% × 2.000.000 = 800.000. $ 1.000.000 tienta porque es lo gastado, pero no es lo que vale el trabajo hecho." },
    { q: "Si el trabajo hecho vale $ 800.000 y gastaste $ 1.000.000, ¿qué pasa?", opciones: ["Ahorraste $ 200.000","Estás justo","Gastaste $ 1.800.000 de más","Gastaste $ 200.000 de más"], correcta: 3, explicacion: "800.000 - 1.000.000 = -200.000. \"Ahorraste\" tienta si restás al revés." },
    { q: "Si un riesgo grande ya pasó y el proyecto se atrasa mucho, ¿qué color le ponés?", opciones: ["Verde para no preocupar","Rojo, y avisás enseguida a quien decide","Amarillo para ganar tiempo","Ninguno"], correcta: 1, explicacion: "Rojo es para desvíos grandes. Verde tienta para no dar malas noticias, pero después la sorpresa es peor." },
    { q: "Si querés medir cuánto avanzó el proyecto, ¿qué usás?", opciones: ["Tu sensación","Las horas trabajadas","Los entregables terminados según sus criterios de aceptación","\"Más o menos la mitad\""], correcta: 2, explicacion: "Lo terminado y verificado es avance real. Las horas tientan, pero trabajar mucho no es lo mismo que terminar." },
    { q: "Si el dueño tiene poco tiempo, ¿qué va arriba de todo en el informe de estado?", opciones: ["El estado general con un color","La historia del proyecto","Los agradecimientos","La lista de todas las tareas"], correcta: 0, explicacion: "Lo importante va primero. La lista de tareas tienta por completa, pero el lector no llega a lo importante." },
    { q: "Si tu informe dice \"vamos bien\" sin números, ¿qué le falta?", opciones: ["Nada","Más adjetivos","Fotos","Datos de avance y costo contra el plan"], correcta: 3, explicacion: "Sin números, nadie puede comprobarlo. \"Nada\" tienta si de verdad van bien, pero el lector no lo sabe." },
    { q: "Si sabés en la semana 4 que internet se atrasa, ¿cuándo lo avisás?", opciones: ["En la semana 8","En el informe de esa misma semana, con una propuesta","Nunca","Cuando alguien pregunte"], correcta: 1, explicacion: "Avisar pronto da tiempo de reaccionar. Esperar tienta por si se arregla solo, pero después no hay margen." },
    { q: "Si necesitás que el dueño apruebe algo, ¿dónde lo ponés en el informe?", opciones: ["En ningún lado","Escondido al final de un párrafo","En \"Qué necesito\", con la decisión concreta","En otro mail sin contexto"], correcta: 2, explicacion: "Pedir la decisión clara la acelera. Esconderlo tienta para no molestar, pero la decisión no llega." },
    { q: "Si el dueño pide pintar la oficina a mitad de proyecto, ¿qué hacés?", opciones: ["Una solicitud de cambio con impacto en tiempo y costo, y que él decida","Lo hacés sin decir nada","Te negás siempre","Lo dejás para después sin avisar"], correcta: 0, explicacion: "El cambio se aprueba sabiendo su impacto. Hacerlo sin decir nada tienta para conformarlo, pero rompe el plan." },
    { q: "Si terminaste la última tarea, ¿ya cerraste el proyecto?", opciones: ["Sí, terminó","Sí, si nadie se quejó","Sí, si se gastó todo","No: falta verificar, entregar, cerrar con proveedores, sacar lecciones y guardar documentos"], correcta: 3, explicacion: "El cierre tiene sus pasos. \"Sí, terminó\" tienta, pero quedan cuentas y aprendizajes sin cerrar." },
    { q: "Si una lección aprendida dice \"comunicarnos mejor\", ¿qué problema tiene?", opciones: ["Ninguno","Es vaga: no dice qué hacer distinto la próxima vez","Es muy concreta","Es demasiado larga"], correcta: 1, explicacion: "Una lección útil es concreta, como \"pedir internet con 3 semanas\". \"Ninguno\" tienta porque suena bien, pero nadie sabe qué cambiar." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el plan de tu proyecto",
  nivel: "Avanzado",
  objetivos: [
    "Armar el plan completo de un proyecto real o imaginario",
    "Evaluarlo con una rúbrica y corregir lo que falte",
    "Definir cómo lo vas a seguir cada semana",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es el <strong>plan completo de un proyecto</strong> tuyo: real (algo que tengas que organizar) o imaginario (un evento, una mudanza, un lanzamiento). Junta todas las herramientas del curso.</p>
      <table>
        <tr><th>Parte del plan</th><th>Módulo</th></tr>
        <tr><td>Acta de inicio</td><td>Qué es un proyecto</td></tr>
        <tr><td>EDT, criterios de aceptación e interesados</td><td>Alcance y entregables</td></tr>
        <tr><td>Estimaciones, camino crítico y Gantt con hitos</td><td>Tiempos, dependencias y Gantt</td></tr>
        <tr><td>RACI, presupuesto con reserva y 5 riesgos</td><td>Roles, presupuesto y riesgos</td></tr>
        <tr><td>Método elegido (tradicional, ágil o mezcla) y por qué</td><td>Métodos ágiles</td></tr>
        <tr><td>Modelo de informe de estado y lista de cierre</td><td>Seguimiento, cambios y cierre</td></tr>
      </table>
      <p><strong>Formato:</strong> una planilla con una hoja por parte, o un documento de 3 a 5 páginas.</p>
      <p>Por ejemplo, el plan de una fiesta de fin de año para 80 personas tendría el salón y el catering en el camino crítico, la lluvia como riesgo y un tablero Kanban para las tareas de cada semana.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu plan.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Acta y alcance</td><td>Acta completa con "no incluye" y EDT con criterios verificables</td><td>Falta uno</td><td>No hay</td></tr>
        <tr><td>Interesados</td><td>Todos, con cómo se los mantiene al tanto</td><td>Faltan algunos</td><td>No hay</td></tr>
        <tr><td>Roles</td><td>RACI con un solo A por tarea</td><td>Alguna tarea con 0 o 2 A</td><td>No hay</td></tr>
        <tr><td>Presupuesto y riesgos</td><td>Con reserva y 5 riesgos puntuados con respuesta</td><td>Falta uno</td><td>No hay</td></tr>
        <tr><td>Seguimiento</td><td>Modelo de informe y lista de cierre</td><td>Solo uno</td><td>No hay</td></tr>
        <tr><td>Viabilidad</td><td>La fecha final es igual o posterior al camino crítico</td><td>—</td><td>La fecha prometida es anterior a lo que dura el camino crítico</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Viabilidad" tiene 0, el plan no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un plan prolijo que promete terminar en 8 días cuando el camino crítico dura 10 saca 0 en viabilidad: es un plan que ya nace atrasado.</p>` },
    { titulo: "Tu rutina semanal", html: `
      <p class="idea">Un plan solo sirve si se sigue. Con una rutina semanal corta, el proyecto no se te escapa de las manos.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué hacer</th><th>Tiempo</th></tr>
        <tr><td>Lunes</td><td>Revisar el tablero y el camino crítico: qué vence esta semana</td><td>15 minutos</td></tr>
        <tr><td>Durante la semana</td><td>Actualizar el tablero cuando algo cambia de columna</td><td>2 minutos cada vez</td></tr>
        <tr><td>Viernes</td><td>Medir avance y costo, y enviar el informe de estado</td><td>30 minutos</td></tr>
        <tr><td>Cada 2 semanas</td><td>Revisar los riesgos: ¿aparecieron nuevos? ¿cambió algún puntaje?</td><td>15 minutos</td></tr>
        <tr><td>Al terminar</td><td>Cierre y lecciones aprendidas</td><td>1 hora</td></tr>
      </table>
      <p><strong>Seguir aprendiendo:</strong> la Guía de Scrum oficial es corta y tiene traducción al español; Atlassian tiene guías de Kanban y de gestión de proyectos; el manual ágil del gobierno británico muestra cómo lo aplican equipos públicos.</p>
      <p><strong>Si querés certificarte</strong> más adelante, hay certificaciones reconocidas de gestión de proyectos y de Scrum. No hacen falta para empezar: primero gestioná proyectos reales.</p>
      <p>Por ejemplo, una hora por semana de rutina en un proyecto de 2 meses son 8 horas que evitan días de atraso y discusiones.</p>` },
  ],
  practica: [
    "Armá el plan completo de tu proyecto con las 6 partes del encargo. Anotá la fecha en que lo terminaste.",
    "Evaluá tu plan con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Seguí tu proyecto (real o simulado) durante 2 semanas con la rutina y anotá el estado de cada viernes.",
  ],
  recursos: [
    { t: "La Guía de Scrum oficial (en inglés; tiene traducción al español)", url: "https://scrumguides.org/scrum-guide.html" },
    { t: "Atlassian: qué es Kanban (en inglés)", url: "https://www.atlassian.com/agile/kanban" },
    { t: "Atlassian: guía de gestión de proyectos (en inglés)", url: "https://www.atlassian.com/agile/project-management" },
  ],
  quiz: [
    { q: "Si armás el plan de tu proyecto, ¿qué tiene que incluir?", opciones: ["Solo el Gantt","Solo el presupuesto","Acta, alcance, tiempos, roles, presupuesto, riesgos, método y seguimiento","Solo la lista de tareas"], correcta: 2, explicacion: "El plan junta todo el curso. El Gantt tienta por ser lo más visual, pero no dice quién decide ni qué riesgos hay." },
    { q: "Si tu acta no tiene \"no incluye\", ¿cuánto saca en \"Acta y alcance\"?", opciones: ["1 punto: falta uno de los dos elementos","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "El acta está incompleta. Sacar 2 tienta porque la EDT está, pero la rúbrica pide las dos cosas completas." },
    { q: "Si en tu RACI una tarea no tiene ningún A, ¿cuánto saca en \"Roles\"?", opciones: ["2 puntos","0 puntos","No se evalúa","1 punto"], correcta: 3, explicacion: "Alguna tarea sin A es 1 punto. Sacar 0 tienta, pero ese es cuando no hay RACI." },
    { q: "Si tu presupuesto no tiene reserva, pero los riesgos están completos, ¿cuánto saca?", opciones: ["2 puntos","1 punto: falta uno","0 puntos","4 puntos"], correcta: 1, explicacion: "Falta la reserva. Sacar 2 tienta porque los riesgos están, pero la rúbrica pide los dos." },
    { q: "Si prometés terminar en 8 días y el camino crítico dura 10, ¿está listo el plan?", opciones: ["Sí, si el resto está bien","Sí, se recupera en el camino","No: \"Viabilidad\" tiene 0 y eso no se compensa con el total","Depende del dueño"], correcta: 2, explicacion: "El plan ya nace atrasado. \"Se recupera en el camino\" tienta por optimismo, pero el camino crítico no se acorta solo." },
    { q: "Si tu plan saca 9, ¿qué hacés?", opciones: ["Mejorás los criterios que sacaron 0 o 1","Lo das por terminado","Empezás de cero","Cambiás la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Darlo por terminado tienta, pero le falta poco." },
    { q: "Si organizás una fiesta para 80 personas, ¿qué tareas suelen estar en el camino crítico?", opciones: ["Elegir la música de fondo","Comprar servilletas","Mandar un saludo","Las que tardan más y de las que dependen otras, como reservar el salón y el catering"], correcta: 3, explicacion: "El camino crítico es la cadena más larga. La música tienta porque importa, pero se resuelve rápido y no frena nada." },
    { q: "Si es lunes, ¿qué hacés según tu rutina?", opciones: ["Esperás al viernes","Revisás el tablero y lo que vence esta semana en el camino crítico","Hacés el cierre","Nada"], correcta: 1, explicacion: "El lunes se mira lo que viene. Esperar al viernes tienta, pero ahí ya pasó la semana." },
    { q: "Si es viernes, ¿qué hacés según tu rutina?", opciones: ["Armás la EDT de nuevo","Firmás el acta","Medís avance y costo y enviás el informe de estado","No hacés nada"], correcta: 2, explicacion: "El viernes se mide y se informa. Armar la EDT tienta por ordenar, pero ya la tenés." },
    { q: "Si pasaron 2 semanas, ¿qué revisás además del avance?", opciones: ["Los riesgos: si hay nuevos o cambió algún puntaje","El logo del proyecto","Nada más","El acta, para cambiar el objetivo"], correcta: 0, explicacion: "Los riesgos cambian con el tiempo. Cambiar el objetivo tienta si las cosas se complican, pero eso es una solicitud de cambio." },
    { q: "Si querés aprender Scrum de la fuente oficial, ¿qué leés?", opciones: ["Un comentario en redes","Una publicidad de un curso","Nada","La Guía de Scrum, que es corta y tiene traducción al español"], correcta: 3, explicacion: "La guía oficial es la referencia. Un comentario tienta por rápido, pero puede estar mal." },
    { q: "Si querés certificarte en gestión de proyectos, ¿cuándo conviene?", opciones: ["Antes de organizar cualquier cosa","Después de gestionar proyectos reales: no hace falta para empezar","Nunca sirve","Solo si sos ingeniero"], correcta: 1, explicacion: "La práctica va primero. \"Antes de cualquier cosa\" tienta por seguridad, pero frena empezar." },
  ],
},
];
