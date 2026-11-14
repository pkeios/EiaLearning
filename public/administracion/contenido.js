// Temario del curso "Administración básica de una oficina". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js administracion y node tools/metodologia.js administracion
window.TEMARIO = [
{
  id: "empezar",
  icono: "🗂️",
  titulo: "Empezar: qué hace un administrativo",
  nivel: "Básico",
  objetivos: [
    "Reconocer las tareas de administración de una oficina o un comercio chico",
    "Cuidar la información confidencial de clientes, proveedores y compañeros",
    "Armar una rutina diaria y semanal con prioridades",
  ],
  lecciones: [
    { titulo: "Las tareas de la administración", html: `
      <p class="idea">La <strong>administración</strong> es el trabajo que mantiene ordenado un lugar: papeles, agenda, plata que entra y sale, compras y stock. Está en cualquier oficina, comercio, consultorio o club, y muchas veces lo hace una sola persona.</p>
      <table>
        <tr><th>Área</th><th>Tareas típicas</th><th>Módulo</th></tr>
        <tr><td>Documentos</td><td>Archivar, buscar, escanear, nombrar archivos</td><td>Archivo en papel y digital</td></tr>
        <tr><td>Agenda</td><td>Turnos, reuniones, actas, recordatorios</td><td>Agenda y reuniones</td></tr>
        <tr><td>Comprobantes</td><td>Facturas, recibos, remitos</td><td>Comprobantes</td></tr>
        <tr><td>Plata</td><td>Cobros, pagos, caja chica, banco</td><td>Cobros, pagos y caja</td></tr>
        <tr><td>Compras y stock</td><td>Pedir presupuestos, controlar lo que hay</td><td>Stock y proveedores</td></tr>
      </table>
      <p>Un <strong>puesto administrativo</strong> suele pedir orden, buena letra (o buen tipeo), manejo de planillas y mail, y cuidado con los números. Los cursos de Excel, Word y Mails de este sitio complementan este.</p>
      <p>Por ejemplo, en una veterinaria de barrio la misma persona da turnos, cobra, guarda las facturas del alimento que compran y avisa cuando faltan vacunas.</p>` },
    { titulo: "La información confidencial", html: `
      <p class="idea">En la administración pasa información que no es tuya: datos de clientes, sueldos, deudas, contraseñas del banco. Ser de confianza es tan importante como ser ordenado.</p>
      <table>
        <tr><th>Información</th><th>Ejemplo</th><th>Cuidado</th></tr>
        <tr><td>Datos de clientes</td><td>Teléfono, dirección, DNI</td><td>Usarlos solo para el trabajo, no compartirlos</td></tr>
        <tr><td>Sueldos</td><td>Recibos de sueldo de compañeros</td><td>No comentarlos con nadie</td></tr>
        <tr><td>Claves</td><td>Banco, ARCA, mail de la empresa</td><td>No anotarlas a la vista ni mandarlas por mensaje</td></tr>
        <tr><td>Papeles</td><td>Facturas, contratos</td><td>Guardarlos bajo llave o en carpetas con permiso</td></tr>
      </table>
      <p><strong>Reglas simples:</strong></p>
      <ul>
        <li>Bloqueá la computadora cuando te levantás (en Windows, tecla Windows + L).</li>
        <li>No dejes papeles con datos en el escritorio al irte.</li>
        <li>Si tenés que tirar un papel con datos, rompelo o pasalo por una trituradora.</li>
        <li>Si alguien te pide un dato por teléfono, confirmá quién es antes de darlo.</li>
      </ul>
      <p>Por ejemplo, un llamado de "soy del banco, necesito la clave para un control" es un intento de estafa: ningún banco pide claves por teléfono.</p>` },
    { titulo: "Una rutina con prioridades", video: {"id":"F-AUpouVOak","t":"Cómo administrar el tiempo · LearnFree en Español (2:25)"}, html: `
      <p class="idea">La administración tiene muchas tareas chicas que se repiten. Una <strong>rutina</strong> (qué hacés cada día, cada semana y cada mes) evita que algo se olvide, y las prioridades te dicen qué va primero.</p>
      <pre><code>Cada día:     revisar mail y mensajes · agenda del día · caja
Cada semana:  pagar a proveedores · revisar stock · archivar
Cada mes:     controlar el banco · vencimientos de impuestos
              (con el contador) · resumen para el dueño</code></pre>
      <p><strong>Urgente e importante:</strong> no todo lo urgente es importante.</p>
      <table>
        <tr><th></th><th>Urgente</th><th>No urgente</th></tr>
        <tr><td><strong>Importante</strong></td><td>Hacelo ya (un pago que vence hoy)</td><td>Planificalo (ordenar el archivo)</td></tr>
        <tr><td><strong>No importante</strong></td><td>Hacelo rápido o delegalo (una consulta simple)</td><td>Dejalo (mirar publicidades del mail)</td></tr>
      </table>
      <p><strong>Una lista de tareas</strong> en papel o en el celular, con lo que tenés que hacer hoy, te saca de la cabeza el "no me tengo que olvidar de…".</p>
      <p>Por ejemplo, si arrancás el día contestando mails de publicidad, a las 11 todavía no pagaste la factura que vencía hoy.</p>` },
  ],
  practica: [
    "Elegí un lugar que conozcas (un comercio, un club, un consultorio) y anotá en una tabla qué tareas de cada área de la lección se hacen ahí y quién las hace.",
    "Revisá tu escritorio o tu computadora y anotá 3 cosas que hoy no cumplen las reglas de confidencialidad. Corregilas y anotá qué cambiaste.",
    "Armá una rutina diaria, semanal y mensual para el lugar que elegiste, y ubicá 6 tareas en el cuadro de urgente e importante.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Buscás trabajo", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Google Drive: cómo usarlo", url: "https://support.google.com/drive/answer/2424384?hl=es" },
  ],
  quiz: [
    { q: "Si trabajás en la administración de una veterinaria, ¿qué tareas pueden ser tuyas?", opciones: ["Solo atender el teléfono","Solo operar a los animales","Dar turnos, cobrar, guardar facturas y avisar cuando falta stock","Ninguna, eso lo hace el contador"], correcta: 2, explicacion: "En lugares chicos, una persona hace varias tareas. \"Solo el teléfono\" tienta por simple, pero la administración abarca papeles, plata y stock." },
    { q: "Querés postularte a un puesto administrativo. ¿Qué suelen pedir?", opciones: ["Orden, manejo de planillas y mail, y cuidado con los números","Saber programar","Tener auto","Ser contador recibido"], correcta: 0, explicacion: "Orden y planillas son la base. Ser contador tienta como requisito, pero la mayoría de los puestos administrativos no lo piden." },
    { q: "Te levantás del escritorio para ir a buscar algo. ¿Qué hacés con la computadora?", opciones: ["La dejás abierta, vuelvo enseguida","La apagás","Le tapás la pantalla con un papel","La bloqueás (Windows + L)"], correcta: 3, explicacion: "Bloquearla protege los datos en segundos. \"Vuelvo enseguida\" tienta, pero alcanza un minuto para que alguien vea o toque algo." },
    { q: "Un compañero te pregunta cuánto cobra otro compañero. ¿Qué hacés?", opciones: ["Se lo decís si es de confianza","No se lo decís: los sueldos son confidenciales","Le mostrás el recibo","Le das una idea aproximada"], correcta: 1, explicacion: "Los sueldos no se comentan. \"Si es de confianza\" tienta, pero la información no es tuya para compartir." },
    { q: "Tenés la clave del banco anotada en un papel pegado al monitor. ¿Qué cambiás?", opciones: ["Nada, así no me la olvido","La pegás abajo del teclado","La sacás de la vista y la guardás en un lugar seguro","Se la mandás a tu jefe por mensaje"], correcta: 2, explicacion: "Una clave a la vista la puede usar cualquiera. Abajo del teclado tienta como escondite, pero es el primer lugar donde se busca." },
    { q: "Tenés que tirar facturas viejas con datos de clientes. ¿Qué hacés?", opciones: ["Las rompés o las pasás por una trituradora","Las tirás enteras a la basura","Las usás como borrador","Las dejás en la vereda para reciclar"], correcta: 0, explicacion: "Rotas, nadie lee los datos. Usarlas de borrador tienta por ahorro, pero los datos quedan a la vista de cualquiera." },
    { q: "Llaman diciendo \"Soy del banco, necesito la clave para un control\". ¿Qué es?", opciones: ["Un control normal","Una urgencia que hay que atender","Algo que decide el dueño","Un intento de estafa: ningún banco pide claves por teléfono"], correcta: 3, explicacion: "El banco nunca pide claves. Que suena urgente tienta, pero la urgencia es justamente la trampa." },
    { q: "Querés que no se te olviden las tareas que se repiten. ¿Qué armás?", opciones: ["Nada, me acuerdo","Una rutina diaria, semanal y mensual","Un recordatorio para cada minuto","Una lista de deseos"], correcta: 1, explicacion: "La rutina hace que lo repetido salga solo. \"Me acuerdo\" tienta, pero con muchas tareas chicas algo se escapa." },
    { q: "Hoy vence un pago importante. ¿En qué cuadrante va?", opciones: ["No urgente: planificalo","No importante: dejalo","Urgente e importante: hacelo ya","Delegalo sin controlar"], correcta: 2, explicacion: "Vence hoy y tiene consecuencias. Planificarlo tienta para hacerlo con calma, pero mañana ya venció." },
    { q: "Ordenar el archivo viejo es importante pero no urgente. ¿Qué hacés?", opciones: ["Lo planificás: le reservás un momento en la semana","Lo hacés ahora, dejando lo urgente","No lo hacés nunca","Lo hacés cuando no haya nada"], correcta: 0, explicacion: "Lo importante no urgente se agenda. \"Cuando no haya nada\" tienta, pero ese momento nunca llega." },
    { q: "Si empezás el día contestando mails de publicidad, ¿qué riesgo hay?", opciones: ["Ninguno","Que el mail se llene","Que te feliciten","Que se te pase lo importante, como un pago que vence hoy"], correcta: 3, explicacion: "Lo no importante te come el tiempo. Pensar que no hay riesgo tienta porque son tareas cortas, pero se suman." },
    { q: "¿Para qué sirve una lista de tareas del día?", opciones: ["Para mostrarle al jefe que trabajás","Para sacarte de la cabeza el \"no me tengo que olvidar\" y ver qué falta","Para nada si tenés buena memoria","Para anotar lo que ya hiciste ayer"], correcta: 1, explicacion: "La lista libera la cabeza y ordena. \"Tengo buena memoria\" tienta, pero en un día con interrupciones algo se olvida." },
  ],
},
{
  id: "archivo",
  icono: "📁",
  titulo: "Archivo en papel y digital",
  nivel: "Básico",
  objetivos: [
    "Organizar carpetas en papel y en la computadora con un mismo criterio",
    "Nombrar archivos para que se encuentren y se ordenen solos",
    "Hacer copias de seguridad y decidir qué guardar y qué descartar",
  ],
  lecciones: [
    { titulo: "Un criterio para las carpetas", html: `
      <p class="idea">Un archivo sirve si cualquiera encuentra lo que busca en menos de un minuto. Para eso hace falta un <strong>criterio</strong>: una regla simple de cómo se ordena, igual en el papel y en la computadora.</p>
      <table>
        <tr><th>Criterio</th><th>Sirve para</th><th>Ejemplo</th></tr>
        <tr><td>Por tema</td><td>Documentos variados</td><td>Proveedores / Clientes / Banco / Personal</td></tr>
        <tr><td>Por fecha</td><td>Lo que se acumula mes a mes</td><td>Facturas / 2026 / 03-marzo</td></tr>
        <tr><td>Alfabético</td><td>Personas o empresas</td><td>Clientes / G / Gómez, Marta</td></tr>
      </table>
      <p><strong>Lo más común es combinar:</strong> primero por tema y adentro por fecha.</p>
      <pre><code>Administración/
├── Proveedores/
│   ├── 2026/
│   │   ├── 01-enero/
│   │   └── 02-febrero/
├── Banco/
│   └── 2026/
└── Personal/      (acceso restringido)</code></pre>
      <p><strong>Pocas carpetas y con nombres claros:</strong> "Varios", "Cosas" o "Nueva carpeta (3)" son lugares donde los papeles se pierden.</p>
      <p>Por ejemplo, si la carpeta física de "Proveedores 2026" tiene las mismas divisiones que la carpeta de la computadora, encontrás la factura en papel o la escaneada con el mismo razonamiento.</p>` },
    { titulo: "Nombres de archivo que se ordenan solos", video: {"id":"MKtqfCfZNEE","t":"Cómo organizar tus archivos y carpetas en Google Drive · LearnFree (3:49)"}, html: `
      <p class="idea">Un buen nombre de archivo dice qué es sin abrirlo. Si empieza con la fecha al revés (año, mes, día), la computadora los ordena solos de más viejo a más nuevo.</p>
      <table>
        <tr><th>Nombre flojo</th><th>Nombre claro</th></tr>
        <tr><td>escanear0012.pdf</td><td>2026-03-05_Factura_Papelera-Sur_0001-4512.pdf</td></tr>
        <tr><td>presupuesto final FINAL.docx</td><td>2026-03-10_Presupuesto_Pintura_v2.docx</td></tr>
        <tr><td>foto.jpg</td><td>2026-03-12_Remito_Distribuidora-Norte.jpg</td></tr>
      </table>
      <p><strong>La fórmula:</strong></p>
      <pre><code>AAAA-MM-DD_Tipo_Quién_Detalle.pdf
2026-03-05_Factura_Papelera-Sur_0001-4512.pdf</code></pre>
      <p><strong>¿Por qué el año primero?</strong> Porque así "2026-01-15" queda antes que "2026-03-02" al ordenar por nombre. Si escribís "15-01-2026", el 15 de enero queda después del 02 de marzo.</p>
      <p><strong>Versiones:</strong> en vez de "final", "final2", "ahora sí final", usá v1, v2, v3.</p>
      <p>Por ejemplo, con esta fórmula, buscar "Papelera-Sur" en la computadora trae todas las facturas de ese proveedor, ordenadas por fecha.</p>` },
    { titulo: "Copias de seguridad y qué guardar", html: `
      <p class="idea">Una <strong>copia de seguridad</strong> (o backup) es una copia de tus archivos en otro lugar, por si se rompe la computadora, te la roban o un virus borra todo.</p>
      <table>
        <tr><th>Dónde</th><th>Ventaja</th><th>Cuidado</th></tr>
        <tr><td>En la nube (Google Drive, OneDrive)</td><td>Se copia sola y se ve desde cualquier lado</td><td>Una buena contraseña y verificación en dos pasos</td></tr>
        <tr><td>Disco externo o pendrive</td><td>No depende de internet</td><td>Guardarlo en otro lugar y actualizarlo seguido</td></tr>
      </table>
      <p><strong>La regla práctica 3-2-1:</strong> 3 copias de lo importante, en 2 lugares distintos, y 1 fuera de la oficina (por ejemplo, en la nube).</p>
      <p><strong>Escanear papeles:</strong> con el celular alcanza (Google Drive y otras apps tienen la opción de escanear). Guardá el PDF con el nombre de la fórmula.</p>
      <p><strong>¿Cuánto tiempo guardar?</strong> Facturas, recibos de sueldo y papeles de impuestos se guardan varios años: el plazo exacto lo indica el contador. Lo demás (folletos, borradores, publicidades) se puede descartar.</p>
      <p>Por ejemplo, si la computadora de la oficina se rompe un lunes y todo estaba en Drive, el martes seguís trabajando desde otra.</p>` },
  ],
  practica: [
    "Diseñá la estructura de carpetas (tema y fecha) para el lugar que elegiste en el módulo 1. Anotá el árbol de carpetas.",
    "Renombrá 10 archivos de tu computadora o tu celular con la fórmula AAAA-MM-DD_Tipo_Quién_Detalle. Ordenalos por nombre y comprobá que quedan por fecha.",
    "Hacé una copia de seguridad de una carpeta importante en la nube o en un pendrive. Anotá dónde quedó, cuántos archivos tiene y la fecha.",
    "Escaneá 3 papeles con el celular y guardalos en PDF con un buen nombre. Anotá cuánto tardaste con cada uno.",
  ],
  recursos: [
    { t: "Google Drive: organizar tus archivos", url: "https://support.google.com/drive/answer/2375091?hl=es" },
    { t: "Google Drive: cómo usarlo", url: "https://support.google.com/drive/answer/2424384?hl=es" },
  ],
  quiz: [
    { q: "Tu archivo tiene carpetas \"Varios\", \"Cosas\" y \"Nueva carpeta (3)\". ¿Qué pasa?", opciones: ["Está bien, hay lugar para todo","Es más flexible","Los papeles se pierden: hacen falta pocas carpetas con nombres claros","Es lo normal"], correcta: 2, explicacion: "Las carpetas vagas no dicen qué hay adentro. \"Hay lugar para todo\" tienta, pero nadie sabe dónde buscar." },
    { q: "Tenés que archivar facturas de proveedores de todo el año. ¿Qué criterio usás?", opciones: ["Por tema y adentro por fecha: Proveedores / 2026 / mes","Todo junto en una carpeta","Por color del papel","Por tamaño del archivo"], correcta: 0, explicacion: "Tema y fecha combinados encuentran rápido. Todo junto tienta por fácil al guardar, pero buscar después es imposible." },
    { q: "Querés que la carpeta física y la digital se entiendan igual. ¿Qué hacés?", opciones: ["Cada una con su propio orden","Solo ordenás la digital","Tirás los papeles","Usás el mismo criterio y las mismas divisiones en las dos"], correcta: 3, explicacion: "El mismo criterio te deja buscar con el mismo razonamiento. Ordenar solo la digital tienta, pero los papeles siguen apareciendo." },
    { q: "Tu archivo se llama \"escanear0012.pdf\". ¿Cómo lo nombrás?", opciones: ["factura.pdf","2026-03-05_Factura_Papelera-Sur_0001-4512.pdf","FACTURA IMPORTANTE.pdf","escanear0012 bien.pdf"], correcta: 1, explicacion: "El nombre con fecha, tipo y quién dice qué es. \"factura.pdf\" tienta por corto, pero hay cientos iguales." },
    { q: "¿Por qué conviene escribir la fecha como 2026-03-05 y no 05-03-2026?", opciones: ["Porque lo pide la ley","Porque es más corto","Porque así los archivos se ordenan solos por fecha","Da lo mismo"], correcta: 2, explicacion: "Con el año primero, ordenar por nombre es ordenar por fecha. \"Da lo mismo\" tienta, pero con el día primero se mezclan los meses." },
    { q: "Tenés \"presupuesto final\", \"final2\" y \"ahora sí final\". ¿Qué cambiás?", opciones: ["Usás versiones: v1, v2, v3","Agregás \"final3\"","Borrás todos menos uno sin mirar","Los dejás así"], correcta: 0, explicacion: "Las versiones numeradas dicen cuál es la última. \"final3\" tienta, pero el problema sigue: nadie sabe cuál vale." },
    { q: "¿Qué es una copia de seguridad?", opciones: ["Un antivirus","Una contraseña","Un archivo comprimido","Una copia de tus archivos en otro lugar, por si se pierde el original"], correcta: 3, explicacion: "Es una copia en otro lugar. Confundirla con un antivirus tienta porque ambos protegen, pero el antivirus no recupera lo borrado." },
    { q: "Tenés la única copia de las facturas en la computadora de la oficina. ¿Qué riesgo hay?", opciones: ["Ninguno, las computadoras no fallan","Si se rompe o la roban, se pierde todo","Que ocupa lugar","Que tarda en abrir"], correcta: 1, explicacion: "Una sola copia es un riesgo. Pensar que no fallan tienta, pero se rompen, se roban y se infectan." },
    { q: "¿Qué dice la regla 3-2-1?", opciones: ["3 contraseñas, 2 usuarios y 1 computadora","Guardar 3 años, 2 meses y 1 día","3 copias, en 2 lugares distintos, y 1 fuera de la oficina","Hacer copias 3 veces por día"], correcta: 2, explicacion: "3 copias, 2 lugares, 1 afuera. Las otras opciones tientan por los números, pero no tienen que ver con copias." },
    { q: "Usás Google Drive para las copias. ¿Qué cuidás?", opciones: ["Una buena contraseña y la verificación en dos pasos","Nada, Google lo cuida todo","Compartir la carpeta con todos","Usar la misma clave que en todos lados"], correcta: 0, explicacion: "La nube protege si la cuenta está protegida. \"Google lo cuida todo\" tienta, pero si te roban la clave entran igual." },
    { q: "Tenés que guardar facturas y papeles de impuestos. ¿Por cuánto tiempo?", opciones: ["Una semana","Hasta que se llene el cajón","No hace falta guardarlas","Varios años; el plazo exacto lo indica el contador"], correcta: 3, explicacion: "Los papeles de impuestos se guardan años. Hasta que se llene el cajón tienta, pero tirarlos antes puede traer problemas." },
    { q: "Si la computadora se rompe y todo estaba en Drive, ¿qué pasa?", opciones: ["Perdés todo","Seguís trabajando desde otra computadora","Tenés que esperar que la arreglen","Tenés que volver a escanear todo"], correcta: 1, explicacion: "La nube se ve desde cualquier lado. Esperar el arreglo tienta como reflejo, pero los archivos ya están en otro lugar." },
  ],
},
{
  id: "agenda",
  icono: "📅",
  titulo: "Agenda, turnos y reuniones",
  nivel: "Intermedio",
  objetivos: [
    "Manejar una agenda compartida con turnos y recordatorios",
    "Organizar una reunión: invitación, orden del día y lugar o enlace",
    "Escribir un acta con lo que se decidió, quién lo hace y para cuándo",
  ],
  lecciones: [
    { titulo: "Una agenda que no falla", html: `
      <p class="idea">Una agenda sirve si todos miran la misma y se anota todo ahí. Un <strong>calendario compartido</strong> (como Google Calendar) deja que varias personas vean y carguen turnos sin pisarse.</p>
      <table>
        <tr><th>Al cargar un turno o evento, anotá</th><th>Ejemplo</th></tr>
        <tr><td>Qué es</td><td>Turno: vacuna de Toby</td></tr>
        <tr><td>Quién</td><td>Marta Gómez, 11 5555-0001</td></tr>
        <tr><td>Cuándo y cuánto dura</td><td>Martes 12, 10:00 a 10:30</td></tr>
        <tr><td>Dónde</td><td>Consultorio 1</td></tr>
        <tr><td>Recordatorio</td><td>Mensaje al cliente el día anterior</td></tr>
      </table>
      <p><strong>Colores por tipo:</strong> por ejemplo, verde para turnos, azul para reuniones y rojo para vencimientos. Así ves la semana de un vistazo.</p>
      <p><strong>Recordatorios:</strong> el calendario puede avisarte antes de cada evento. Para los clientes, un mensaje el día anterior ("Te recordamos tu turno mañana a las 10") reduce mucho los faltazos.</p>
      <p><strong>Una sola agenda:</strong> si una persona anota en un cuaderno y otra en el calendario, tarde o temprano se dan dos turnos a la misma hora.</p>
      <p>Por ejemplo, con 20 turnos por día, mandar el recordatorio la tarde anterior lleva 10 minutos y evita encontrarte con huecos vacíos.</p>` },
    { titulo: "Organizar una reunión", video: {"id":"Wau66g-8kSk","t":"Crea una reunión en Google Meet y usa Google Calendar · LearnFree en Español (3:50)"}, html: `
      <p class="idea">Una reunión rinde si todos saben de antemano para qué es. El <strong>orden del día</strong> es la lista de temas a tratar, y va en la invitación.</p>
      <pre><code>Asunto: Reunión de equipo – martes 12, 9:00 a 9:45
Lugar: sala de atrás (o enlace de Meet)
Orden del día:
1. Horarios de diciembre (10 min)
2. Proveedor nuevo de alimento (15 min)
3. Varios (5 min)
Traer: propuestas de horario.</code></pre>
      <p><strong>Antes de convocar,</strong> preguntate si hace falta una reunión o alcanza con un mail.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacer</th></tr>
        <tr><td>Antes</td><td>Invitación con día, hora, duración, lugar o enlace y orden del día</td></tr>
        <tr><td>Durante</td><td>Empezar a horario, seguir el orden del día, anotar lo que se decide</td></tr>
        <tr><td>Después</td><td>Mandar el acta y anotar las tareas en la agenda</td></tr>
      </table>
      <p><strong>Reuniones por videollamada:</strong> con Google Calendar podés crear la reunión y agregar el enlace de Meet en el mismo evento. Todos los invitados lo reciben por mail.</p>
      <p>Por ejemplo, poner al lado de cada tema cuántos minutos tiene ayuda a que la reunión termine a horario.</p>` },
    { titulo: "El acta", video: {"id":"-rHB56dlU28","t":"Cómo redactar un acta de reunión en 4 pasos · La Profe Mónica (2:43)"}, html: `
      <p class="idea">El <strong>acta</strong> es el registro de una reunión: quiénes estuvieron, qué se habló, qué se decidió y quién hace qué para cuándo. Sin acta, a la semana cada uno recuerda algo distinto.</p>
      <pre><code>Acta – Reunión de equipo – martes 12/3, 9:00
Presentes: Ana, Carlos, Lucía. Ausente: Diego.

1. Horarios de diciembre
   Se decide: cerrar el 24 y el 31 a las 13.
2. Proveedor nuevo de alimento
   Se pedirán 3 presupuestos antes de decidir.

Tareas:
- Lucía: avisar los horarios a los clientes – hasta el 20/3
- Carlos: pedir 3 presupuestos – hasta el 15/3
Próxima reunión: martes 19/3, 9:00</code></pre>
      <p><strong>La parte más importante son las tareas:</strong> cada una con un responsable y una fecha. "Ver lo del proveedor" no es una tarea; "Carlos pide 3 presupuestos hasta el 15/3" sí.</p>
      <p><strong>Mandala el mismo día,</strong> mientras todos se acuerdan, y pedí que avisen si algo no quedó bien escrito.</p>
      <p>Por ejemplo, si a la semana alguien dice "Yo no quedé en hacer eso", el acta enviada muestra qué se acordó.</p>` },
  ],
  practica: [
    "Creá un evento en Google Calendar (o en tu agenda) con los 5 datos de la tabla y un recordatorio. Anotá cuánto antes te avisó.",
    "Escribí la invitación de una reunión con día, hora, duración, lugar o enlace y un orden del día con minutos por tema. Anotá cuántos minutos suma el orden del día.",
    "Hacé el acta de una reunión real (familiar, del club, de la escuela) o inventada, con presentes, decisiones y al menos 2 tareas con responsable y fecha.",
  ],
  recursos: [
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
    { t: "Google Drive: cómo usarlo", url: "https://support.google.com/drive/answer/2424384?hl=es" },
  ],
  quiz: [
    { q: "En tu oficina, una persona anota turnos en un cuaderno y otra en el calendario. ¿Qué riesgo hay?", opciones: ["Ninguno, hay dos registros","Que se gasten los cuadernos","Dar dos turnos a la misma hora","Que el calendario se llene"], correcta: 2, explicacion: "Una sola agenda evita superposiciones. Dos registros tientan como respaldo, pero no se ven entre sí." },
    { q: "Vas a cargar un turno. ¿Qué datos anotás?", opciones: ["Qué es, quién con su contacto, cuándo y cuánto dura, dónde y recordatorio","Solo el nombre","Solo la hora","El nombre y el color"], correcta: 0, explicacion: "Con todos los datos, cualquiera puede atender el turno. Solo el nombre tienta por rápido, pero si hay que avisar algo no tenés el teléfono." },
    { q: "Querés ver de un vistazo qué es cada cosa en la semana. ¿Qué usás?", opciones: ["Todo del mismo color","Mayúsculas en todo","Un cuaderno aparte","Colores por tipo: turnos, reuniones, vencimientos"], correcta: 3, explicacion: "Los colores ordenan a simple vista. Todo igual tienta por prolijo, pero no distingue lo urgente." },
    { q: "Tenés muchos faltazos a los turnos. ¿Qué probás?", opciones: ["Dar más turnos por si faltan","Un recordatorio al cliente el día anterior","Cobrar multa sin avisar","Nada, es normal"], correcta: 1, explicacion: "El recordatorio reduce los faltazos. Dar turnos de más tienta, pero si vienen todos no das abasto." },
    { q: "Vas a convocar una reunión. ¿Qué te preguntás primero?", opciones: ["Qué color de evento usar","Cuánta gente invitar para que parezca importante","Si hace falta una reunión o alcanza con un mail","Qué comida llevar"], correcta: 2, explicacion: "Muchas reuniones podrían ser un mail. El color tienta porque es lo que configurás primero, pero no dice si vale la pena juntarse." },
    { q: "¿Qué es el orden del día?", opciones: ["La lista de temas a tratar en la reunión","La hora de la reunión","El lugar","El acta"], correcta: 0, explicacion: "Es la lista de temas. El acta tienta porque también tiene temas, pero se escribe después, con lo que se decidió." },
    { q: "Tu invitación dice solo \"Reunión mañana\". ¿Qué le falta?", opciones: ["Más signos de exclamación","Nada","El acta de la reunión anterior","Hora, duración, lugar o enlace y orden del día"], correcta: 3, explicacion: "Sin datos, la gente llega sin preparar o no llega. \"Nada\" tienta por breve, pero genera preguntas y demoras." },
    { q: "Querés que la reunión termine a horario. ¿Qué agregás al orden del día?", opciones: ["Más temas","Cuántos minutos tiene cada tema","Un tema \"Varios\" de una hora","Nada"], correcta: 1, explicacion: "Los minutos ayudan a cortar a tiempo. Más temas tientan para aprovechar, pero la reunión se alarga." },
    { q: "Si la reunión es por videollamada, ¿cómo mandás el enlace?", opciones: ["Por mensaje 5 minutos antes","Le pedís a cada uno que lo busque","En el mismo evento del calendario, con el enlace de Meet","Lo dictás por teléfono"], correcta: 2, explicacion: "En el evento, cada invitado lo tiene a mano. Mandarlo 5 minutos antes tienta, pero alguien no lo ve a tiempo." },
    { q: "¿Qué es lo más importante del acta?", opciones: ["Las tareas, cada una con responsable y fecha","La lista de presentes","La hora de inicio","Lo que dijo cada uno, palabra por palabra"], correcta: 0, explicacion: "Las tareas hacen que lo decidido pase. Palabra por palabra tienta por completo, pero nadie lo lee." },
    { q: "En tu acta escribiste \"Ver lo del proveedor\". ¿Cómo lo mejorás?", opciones: ["\"Ver lo del proveedor urgente\"","\"Proveedor: pendiente\"","Lo dejás así","\"Carlos pide 3 presupuestos hasta el 15/3\""], correcta: 3, explicacion: "Una tarea tiene quién, qué y cuándo. \"Urgente\" tienta para darle peso, pero sigue sin responsable." },
    { q: "A la semana alguien dice \"Yo no quedé en hacer eso\". ¿Qué te ayuda?", opciones: ["Tu memoria","El acta que mandaste el mismo día","Discutir hasta que alguien ceda","Nada"], correcta: 1, explicacion: "El acta enviada muestra qué se acordó. Discutir tienta, pero sin registro es tu palabra contra la de otro." },
  ],
},
{
  id: "comprobantes",
  icono: "🧾",
  titulo: "Comprobantes: facturas, recibos y remitos",
  nivel: "Intermedio",
  objetivos: [
    "Distinguir factura, ticket, recibo, remito y nota de crédito",
    "Revisar los datos de una factura antes de pagarla o archivarla",
    "Entender qué es la factura electrónica y el papel del contador",
  ],
  lecciones: [
    { titulo: "Los tipos de comprobantes", html: `
      <p class="idea">Un <strong>comprobante</strong> es un papel (o un archivo) que prueba que pasó algo: una venta, un pago o una entrega. Cada uno tiene su función.</p>
      <table>
        <tr><th>Comprobante</th><th>Qué prueba</th><th>Ejemplo</th></tr>
        <tr><td>Factura</td><td>Una venta: qué se vendió, a quién y por cuánto</td><td>La papelera te factura 10 resmas</td></tr>
        <tr><td>Ticket</td><td>Una venta a un consumidor final, en el momento</td><td>El ticket del supermercado</td></tr>
        <tr><td>Recibo</td><td>Un pago: que alguien recibió plata</td><td>Recibo de alquiler, recibo de sueldo</td></tr>
        <tr><td>Remito</td><td>Una entrega de mercadería, sin precio</td><td>El repartidor deja 20 bolsas de alimento y firmás el remito</td></tr>
        <tr><td>Nota de crédito</td><td>Que se anula o descuenta parte de una factura</td><td>Devolviste 2 resmas falladas</td></tr>
      </table>
      <p><strong>Remito antes que factura:</strong> cuando llega mercadería, controlá que lo que dice el remito sea lo que llegó <em>antes</em> de firmar. Si faltan 2 bolsas, anotalo en el remito.</p>
      <p><strong>Factura y recibo no son lo mismo:</strong> la factura dice cuánto tenés que pagar; el recibo prueba que pagaste.</p>
      <p>Por ejemplo, si firmás un remito por 20 bolsas y llegaron 18, después es muy difícil reclamar las 2 que faltan.</p>` },
    { titulo: "Revisar una factura", html: `
      <p class="idea">Antes de pagar o archivar una factura, revisala. Un error en el CUIT, en el monto o en lo que se cobró se arregla fácil antes de pagar y es un lío después.</p>
      <table>
        <tr><th>Revisá</th><th>Por qué</th></tr>
        <tr><td>Tus datos (nombre y CUIT)</td><td>Si están mal, la factura no te sirve para tus papeles</td></tr>
        <tr><td>Los datos del proveedor</td><td>Que sea quien te vendió</td></tr>
        <tr><td>Fecha y número</td><td>Para archivarla y no pagarla dos veces</td></tr>
        <tr><td>Qué se cobra y cuánto</td><td>Que coincida con el pedido, el presupuesto y el remito</td></tr>
        <tr><td>Total y vencimiento</td><td>Para pagar a tiempo</td></tr>
      </table>
      <p>El <strong>CUIT</strong> (Clave Única de Identificación Tributaria) es el número con el que ARCA identifica a cada persona o empresa que trabaja o vende. Tiene 11 números, con el formato 20-XXXXXXXX-X.</p>
      <p><strong>Controlá contra el remito y el presupuesto:</strong></p>
      <pre><code>Presupuesto: 10 resmas × $ 8.000 = $ 80.000
Remito:      llegaron 10 resmas  ✔
Factura:     12 resmas × $ 8.000 = $ 96.000  ✘ → reclamar antes de pagar</code></pre>
      <p>Por ejemplo, anotá en la planilla de pagos el número de cada factura pagada: si llega una segunda copia por mail, ves enseguida que ya la pagaste.</p>` },
    { titulo: "Factura electrónica y el contador", video: {"id":"hNM1vSjGbro","t":"Factura electrónica: cómo hacer un comprobante paso a paso · ARCA (2:00)"}, html: `
      <p class="idea">En Argentina, las facturas se hacen en forma <strong>electrónica</strong>: se generan en la página de ARCA (o en un programa conectado) y se mandan en PDF. ARCA es el organismo que cobra los impuestos nacionales (antes se llamaba AFIP).</p>
      <table>
        <tr><th>Quién vende</th><th>Qué tipo de factura suele emitir</th></tr>
        <tr><td>Monotributista</td><td>Factura C</td></tr>
        <tr><td>Responsable inscripto</td><td>Factura A o B, según quién compra</td></tr>
      </table>
      <p>El <strong>monotributo</strong> es un régimen simple para trabajadores independientes y negocios chicos: se paga una cuota mensual que incluye impuestos, jubilación y obra social. Un <strong>responsable inscripto</strong> es quien está en el régimen general, con IVA.</p>
      <p><strong>Qué hace el administrativo y qué el contador:</strong></p>
      <table>
        <tr><th>Administrativo</th><th>Contador</th></tr>
        <tr><td>Revisar, ordenar y archivar comprobantes</td><td>Decidir el tipo de factura y el régimen</td></tr>
        <tr><td>Emitir facturas siguiendo lo que indicó el contador</td><td>Liquidar impuestos y presentar declaraciones</td></tr>
        <tr><td>Avisar los vencimientos que te pasó el contador</td><td>Asesorar sobre plazos y obligaciones</td></tr>
      </table>
      <p>Este módulo te ayuda a entender y ordenar; las decisiones de impuestos las toma un contador matriculado.</p>
      <p>Por ejemplo, mandarle al contador cada mes una carpeta con todas las facturas de compra y de venta, bien nombradas, le ahorra horas y evita multas por papeles perdidos.</p>` },
  ],
  practica: [
    "Buscá en tu casa un ticket, una factura, un recibo y (si tenés) un remito. Anotá en una tabla qué prueba cada uno y qué datos tiene.",
    "Revisá una factura real con la lista de 5 puntos de la lección. Anotá qué datos encontraste y si alguno estaba mal o faltaba.",
    "Armá una planilla de facturas de proveedores con fecha, número, proveedor, total, vencimiento y \"pagada sí/no\". Cargá 5 facturas reales o inventadas.",
  ],
  recursos: [
    { t: "ARCA: facturación", url: "https://www.arca.gob.ar/facturacion/" },
    { t: "ARCA: factura electrónica", url: "https://www.arca.gob.ar/fe/" },
    { t: "ARCA: monotributo", url: "https://www.arca.gob.ar/monotributo/" },
  ],
  quiz: [
    { q: "Si querés probar que pagaste el alquiler, ¿qué comprobante necesitás?", opciones: ["Un remito","Una nota de crédito","Un recibo","Un presupuesto"], correcta: 2, explicacion: "El recibo prueba un pago. La factura tienta porque también tiene montos, pero dice cuánto hay que pagar, no que pagaste." },
    { q: "Si llega el repartidor con mercadería y un papel sin precios para firmar, ¿qué es ese papel?", opciones: ["Un remito","Una factura","Un recibo","Un ticket"], correcta: 0, explicacion: "El remito acompaña una entrega, sin precio. La factura tienta porque viene del mismo proveedor, pero lleva los precios." },
    { q: "El remito dice 20 bolsas y llegaron 18. ¿Qué hacés antes de firmar?", opciones: ["Firmás igual, después reclamás","Lo rechazás todo","No decís nada","Anotás en el remito que llegaron 18"], correcta: 3, explicacion: "Anotar la diferencia te deja reclamar. Firmar igual tienta para no demorar al repartidor, pero después es muy difícil probarlo." },
    { q: "Devolviste 2 resmas fallas. ¿Qué comprobante te tiene que dar el proveedor?", opciones: ["Otra factura","Una nota de crédito","Un remito","Nada"], correcta: 1, explicacion: "La nota de crédito descuenta parte de la factura. Otra factura tienta, pero sumaría en vez de restar." },
    { q: "Te llega una factura con tu CUIT mal escrito. ¿Qué hacés?", opciones: ["La pagás igual","La corregís vos a mano","Pedís que la corrijan antes de pagarla","La tirás"], correcta: 2, explicacion: "Con datos mal, la factura no te sirve. Corregirla a mano tienta por rápido, pero no tiene validez." },
    { q: "¿Qué es el CUIT?", opciones: ["El número de 11 dígitos con el que ARCA identifica a quien trabaja o vende","El número de la factura","El DNI","Una clave del banco"], correcta: 0, explicacion: "El CUIT identifica ante ARCA. Confundirlo con el DNI tienta porque lo contiene, pero tiene 11 números." },
    { q: "El presupuesto decía 10 resmas, llegaron 10 y la factura cobra 12. ¿Qué hacés?", opciones: ["Pagás 12, total es poco","Pagás 10 sin avisar","Archivás la factura","Reclamás antes de pagar"], correcta: 3, explicacion: "Comparar con el remito muestra el error. Pagar 10 sin avisar tienta, pero la factura queda con deuda y genera lío." },
    { q: "Te llega por mail una segunda copia de una factura. ¿Cómo evitás pagarla dos veces?", opciones: ["Pagando todo lo que llega","Anotando en la planilla el número de cada factura pagada","Confiando en la memoria","Borrando los mails"], correcta: 1, explicacion: "El número anotado muestra que ya está paga. La memoria tienta, pero con muchas facturas se confunde." },
    { q: "¿Qué es ARCA?", opciones: ["Un banco","Un programa de facturación privado","El organismo que cobra los impuestos nacionales (antes AFIP)","Un sindicato"], correcta: 2, explicacion: "ARCA reemplazó a la AFIP. Pensar que es un programa tienta porque ahí se factura, pero es un organismo del Estado." },
    { q: "Si la dueña del comercio es monotributista, ¿qué factura suele emitir?", opciones: ["Factura C","Factura A siempre","Ninguna","Solo tickets a mano"], correcta: 0, explicacion: "Los monotributistas emiten factura C. La A tienta por ser \"la primera\", pero es del régimen general." },
    { q: "Tenés dudas sobre qué tipo de factura hacer. ¿Quién decide?", opciones: ["Vos, eligiendo la que parece","El cliente","El repartidor","El contador"], correcta: 3, explicacion: "El tipo de factura depende del régimen, y eso lo define el contador. Elegir la que parece tienta, pero un error puede traer multas." },
    { q: "Querés ayudar al contador cada mes. ¿Qué le mandás?", opciones: ["Una bolsa con papeles mezclados","Una carpeta con todas las facturas de compra y venta, bien nombradas","Solo las facturas grandes","Nada, que las pida"], correcta: 1, explicacion: "Ordenado, el contador trabaja rápido y sin errores. Solo las grandes tienta por práctico, pero las chicas también cuentan." },
  ],
},
{
  id: "plata",
  icono: "💵",
  titulo: "Cobros, pagos y caja",
  nivel: "Intermedio",
  objetivos: [
    "Llevar una planilla de cobros y pagos con vencimientos",
    "Manejar una caja chica y rendirla con comprobantes",
    "Controlar la planilla contra el extracto del banco y encontrar diferencias",
  ],
  lecciones: [
    { titulo: "Cobros y pagos con vencimiento", html: `
      <p class="idea">La plata que entra y sale tiene fechas. Una planilla con lo que hay que cobrar, lo que hay que pagar y cuándo vence cada cosa evita recargos y olvidos.</p>
      <pre><code>Fecha    | Tipo  | Quién              | Comprobante  | Monto     | Vence  | Estado
05/03    | Pagar | Papelera Sur       | Fact. 4512   | $ 80.000  | 15/03  | Pagado 14/03
08/03    | Cobrar| Marta Gómez        | Fact. 0231   | $ 45.000  | 20/03  | Pendiente
10/03    | Pagar | Luz (local)        | Fact. 99812  | $ 62.300  | 18/03  | Pendiente</code></pre>
      <p>La <strong>cuenta corriente</strong> de un cliente es lo que te debe a lo largo del tiempo: compras que suman y pagos que restan. Lo mismo con cada proveedor, al revés.</p>
      <pre><code>Cuenta corriente: Marta Gómez
08/03  Factura 0231     + $ 45.000   Saldo $ 45.000
15/03  Pago (transfer.) − $ 20.000   Saldo $ 25.000</code></pre>
      <p><strong>Ordená por vencimiento:</strong> así ves arriba lo que vence primero. Y anotá los vencimientos en el calendario con un recordatorio unos días antes.</p>
      <p><strong>Cada pago, con su comprobante:</strong> recibo o constancia de transferencia, guardado con el nombre de la fórmula del módulo de archivo.</p>
      <p>Por ejemplo, ordenar la planilla por la columna "Vence" un lunes a la mañana te muestra en un minuto todo lo que hay que pagar esa semana.</p>` },
    { titulo: "La caja chica", html: `
      <p class="idea">La <strong>caja chica</strong> es un poco de efectivo para gastos menores (un flete, artículos de limpieza, el café). Funciona con un fondo fijo: lo que se gasta se repone presentando los comprobantes.</p>
      <pre><code>Fondo fijo de caja chica: $ 50.000

Fecha  | Concepto              | Comprobante  | Monto
03/03  | Artículos de limpieza | Ticket 1201  | $  8.500
06/03  | Flete                 | Recibo 45    | $ 12.300
09/03  | Café y azúcar         | Ticket 3390  | $  4.200
                                Total gastado  $ 25.000
Tiene que haber en la caja: 50.000 − 25.000 = $ 25.000</code></pre>
      <p><strong>Rendir la caja</strong> es mostrar la planilla y los comprobantes para que te repongan lo gastado ($ 25.000) y el fondo vuelva a $ 50.000.</p>
      <p><strong>Si al contar hay menos plata de la que debería:</strong> no lo tapes. Revisá si falta anotar algún gasto o algún ticket, y si no aparece, avisá. Una diferencia avisada a tiempo es un error; escondida, es un problema serio.</p>
      <p><strong>Reglas:</strong> cada gasto con comprobante, la caja en un lugar con llave, y una sola persona responsable.</p>
      <p>Por ejemplo, si contás $ 24.000 y deberían ser $ 25.000, faltan $ 1.000: quizás un ticket que quedó en un bolsillo.</p>` },
    { titulo: "Controlar con el banco", html: `
      <p class="idea">Una vez por mes (o por semana), compará tu planilla con el <strong>extracto bancario</strong>, el resumen de todos los movimientos de la cuenta. Eso se llama <strong>conciliar</strong>.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>1</td><td>Bajás el extracto del mes desde el home banking</td></tr>
        <tr><td>2</td><td>Tildás cada movimiento que está en los dos lados</td></tr>
        <tr><td>3</td><td>Mirás lo que quedó sin tildar: está en un lado y no en el otro</td></tr>
        <tr><td>4</td><td>Explicás cada diferencia y corregís la planilla</td></tr>
      </table>
      <pre><code>Saldo según tu planilla:  $ 312.400
Saldo según el extracto:  $ 311.200
Diferencia:               $   1.200
Movimiento sin tildar en el extracto:
"Comisión mantenimiento de cuenta  − $ 1.200"  → faltaba anotarla</code></pre>
      <p><strong>Diferencias comunes:</strong> comisiones e impuestos del banco que no anotaste, transferencias de clientes que todavía no registraste, o un pago anotado dos veces.</p>
      <p><strong>Cuidado con las claves:</strong> el home banking de la empresa se usa solo desde la computadora de la oficina, nunca desde una red de wifi pública.</p>
      <p>Por ejemplo, si un cliente dice que te transfirió y no está en tu planilla, el extracto te dice enseguida si la plata llegó.</p>` },
  ],
  practica: [
    "Armá una planilla de cobros y pagos con las columnas de la lección y cargá 6 movimientos. Ordenala por vencimiento y anotá cuál vence primero.",
    "Simulá una caja chica de $ 50.000 con 5 gastos y sus comprobantes (pueden ser tickets tuyos). Calculá cuánto tiene que quedar y anotá la cuenta.",
    "Tomá un resumen de tu cuenta bancaria o billetera virtual de un mes y compará 10 movimientos con lo que recordás o anotaste. Anotá cuántas diferencias encontraste y por qué.",
  ],
  recursos: [
    { t: "ARCA: facturación", url: "https://www.arca.gob.ar/facturacion/" },
    { t: "Google Drive: cómo usarlo", url: "https://support.google.com/drive/answer/2424384?hl=es" },
    { t: "Google Calendar: crear un evento", url: "https://support.google.com/calendar/answer/72143?hl=es" },
  ],
  quiz: [
    { q: "Tenés 10 facturas para pagar este mes. ¿Cómo ves cuál pagar primero?", opciones: ["Por el monto más grande","Por orden alfabético","Ordenás la planilla por vencimiento","Al azar"], correcta: 2, explicacion: "El vencimiento dice qué es urgente. El monto más grande tienta como prioridad, pero una chica que vence hoy genera recargo." },
    { q: "¿Qué es la cuenta corriente de un cliente?", opciones: ["Lo que te debe a lo largo del tiempo: compras que suman y pagos que restan","Su cuenta del banco","Su CUIT","Una tarjeta de crédito"], correcta: 0, explicacion: "Es el registro de lo que debe. La cuenta del banco tienta por el nombre, pero acá es una cuenta con vos." },
    { q: "Si Marta debía $ 45.000 y pagó $ 20.000, ¿cuánto debe ahora?", opciones: ["$ 65.000","$ 20.000","$ 45.000","$ 25.000"], correcta: 3, explicacion: "45.000 − 20.000 = 25.000. $ 65.000 tienta porque es la suma, pero los pagos restan." },
    { q: "Si pagaste una factura por transferencia, ¿qué guardás?", opciones: ["Nada, el banco lo tiene","La constancia de transferencia, con buen nombre de archivo","Solo la factura","Una foto de la pantalla sin nombre"], correcta: 1, explicacion: "La constancia prueba el pago. \"El banco lo tiene\" tienta, pero si hay un reclamo la necesitás vos." },
    { q: "¿Qué es la caja chica?", opciones: ["La caja registradora","La plata de los sueldos","Un fondo de efectivo para gastos menores, que se repone con comprobantes","Una cuenta del banco"], correcta: 2, explicacion: "Es un fondo fijo para gastos chicos. La caja registradora tienta por el nombre, pero ahí entra plata de ventas." },
    { q: "Tu caja chica tiene un fondo de $ 50.000 y gastaste $ 25.000. ¿Cuánto tiene que haber?", opciones: ["$ 25.000","$ 50.000","$ 75.000","$ 0"], correcta: 0, explicacion: "50.000 − 25.000 = 25.000. $ 50.000 tienta porque es el fondo, pero ya se gastó la mitad." },
    { q: "Al rendir la caja chica, ¿qué presentás?", opciones: ["Solo el total","La plata que sobró y nada más","Una explicación oral","La planilla de gastos con todos los comprobantes"], correcta: 3, explicacion: "Los comprobantes respaldan cada gasto. Solo el total tienta por rápido, pero nadie puede controlarlo." },
    { q: "Contás la caja y faltan $ 1.000. ¿Qué hacés?", opciones: ["Ponés $ 1.000 tuyos sin decir nada","Buscás si falta anotar un gasto o un ticket y, si no aparece, avisás","Lo tapás con un ticket inventado","Lo ignorás"], correcta: 1, explicacion: "Una diferencia avisada es un error; escondida, un problema serio. Poner de tu bolsillo tienta para que cierre, pero no se sabe qué pasó." },
    { q: "¿Qué es conciliar el banco?", opciones: ["Pedir un préstamo","Cerrar la cuenta","Comparar tu planilla con el extracto y explicar las diferencias","Cambiar la clave"], correcta: 2, explicacion: "Conciliar es comparar y explicar. Pedir un préstamo tienta porque se hace en el banco, pero no tiene que ver." },
    { q: "Tu planilla dice $ 312.400 y el extracto $ 311.200. ¿Cuál es la diferencia?", opciones: ["$ 1.200","$ 12.000","$ 120","$ 623.600"], correcta: 0, explicacion: "312.400 − 311.200 = 1.200. $ 12.000 tienta por los mismos dígitos, pero hay que restar bien." },
    { q: "En el extracto aparece \"Comisión mantenimiento − $ 1.200\" que no tenías anotada. ¿Qué hacés?", opciones: ["La ignorás","Reclamás al banco siempre","Borrás el extracto","La agregás a la planilla: era la diferencia"], correcta: 3, explicacion: "Las comisiones del banco son una diferencia común. Reclamar siempre tienta, pero muchas son cobros normales de la cuenta." },
    { q: "Querés entrar al home banking de la empresa desde el wifi de un bar. ¿Qué pensás?", opciones: ["Que está bien si es rápido","Que no: el home banking de la empresa se usa solo desde la red de la oficina","Que está bien con el celular","Que da igual"], correcta: 1, explicacion: "Una red pública puede ser espiada. \"Si es rápido\" tienta, pero alcanza un momento para que roben la clave." },
  ],
},
{
  id: "stock",
  icono: "📦",
  titulo: "Stock, compras y proveedores",
  nivel: "Intermedio",
  objetivos: [
    "Llevar el stock con entradas, salidas y un stock mínimo",
    "Pedir y comparar 3 presupuestos con el costo total",
    "Hacer una orden de compra y controlar la entrega",
  ],
  lecciones: [
    { titulo: "Llevar el stock", html: `
      <p class="idea">El <strong>stock</strong> (o inventario) es lo que tenés guardado para usar o vender. Llevarlo es anotar lo que entra y lo que sale, para saber siempre cuánto hay sin tener que contar todo.</p>
      <pre><code>Producto: Resmas A4
Fecha  | Movimiento        | Entra | Sale | Queda
01/03  | Saldo inicial     |       |      |  12
05/03  | Compra (remito 88)|  10   |      |  22
08/03  | Uso oficina       |       |  4   |  18
12/03  | Uso oficina       |       |  5   |  13</code></pre>
      <p><strong>El stock mínimo</strong> es la cantidad a la que, cuando llegás, tenés que pedir. Se calcula con cuánto usás y cuánto tarda el proveedor en traer:</p>
      <pre><code>Usás 3 cajas por semana · el proveedor tarda 2 semanas
3 × 2 = 6 cajas para cubrir la espera
+ 2 cajas de seguridad, por si algo se demora
Stock mínimo = 8 cajas → cuando quedan 8, pedís</code></pre>
      <p><strong>Contá de verdad cada tanto:</strong> una vez por mes, contá lo que hay y compará con la planilla. Las diferencias muestran errores de carga, roturas o pérdidas.</p>
      <p>Por ejemplo, si la planilla dice 13 resmas y contás 11, faltan 2: quizás alguien sacó sin anotar.</p>` },
    { titulo: "Pedir y comparar presupuestos", html: `
      <p class="idea">Para compras importantes, pedí al menos 3 <strong>presupuestos</strong> (lo que costaría, por escrito) y compará el <strong>costo total</strong>, no solo el precio.</p>
      <table>
        <tr><th></th><th>Proveedor A</th><th>Proveedor B</th><th>Proveedor C</th></tr>
        <tr><td>Precio</td><td>$ 120.000</td><td>$ 110.000</td><td>$ 118.000</td></tr>
        <tr><td>Envío</td><td>Incluido</td><td>$ 15.000</td><td>Incluido</td></tr>
        <tr><td><strong>Costo total</strong></td><td><strong>$ 120.000</strong></td><td><strong>$ 125.000</strong></td><td><strong>$ 118.000</strong></td></tr>
        <tr><td>Entrega</td><td>3 días</td><td>5 días</td><td>15 días</td></tr>
        <tr><td>Garantía</td><td>6 meses</td><td>6 meses</td><td>Sin garantía</td></tr>
      </table>
      <p>B parecía el más barato y es el más caro. C es el más barato, pero tarda 15 días y no tiene garantía. Si lo necesitás pronto, A es la mejor opción.</p>
      <p><strong>Pedilos iguales:</strong> mandá a los 3 el mismo pedido (cantidad, calidad, fecha), así los podés comparar de verdad.</p>
      <p><strong>Pedí por escrito:</strong> por mail, con fecha y validez ("precio válido por 10 días").</p>
      <p>Por ejemplo, una planilla con la tabla de la lección te deja mostrarle la decisión al dueño en un minuto, con los números a la vista.</p>` },
    { titulo: "Orden de compra y entrega", html: `
      <p class="idea">Una vez elegido el proveedor, la <strong>orden de compra</strong> es el pedido formal por escrito: qué, cuánto, a qué precio y para cuándo. Después, el remito y la factura tienen que coincidir con ella.</p>
      <pre><code>ORDEN DE COMPRA N.º 0045 – 15/03/2026
Proveedor: Proveedor A
Producto            Cant.  Precio unit.   Total
Sillas de oficina    4     $ 30.000       $ 120.000
Entrega: hasta el 18/03 en Mitre 450 · Envío incluido
Forma de pago: transferencia a 30 días
Autorizó: Ana López (encargada)</code></pre>
      <p><strong>El circuito completo:</strong></p>
      <pre><code>Presupuestos → Orden de compra → Remito (llegó) → Factura → Pago
                    ↑                ↑             ↑
             Todo tiene que coincidir: cantidades y precios</code></pre>
      <p><strong>Quién autoriza:</strong> en muchos lugares, las compras de cierto monto necesitan la firma del dueño o la encargada. Preguntá cuál es la regla antes de pedir.</p>
      <p><strong>Registrá a tus proveedores:</strong> nombre, CUIT, contacto, qué venden, plazos de entrega y cómo cumplieron. Con el tiempo sabés en quién confiar.</p>
      <p>Por ejemplo, si llegan 3 sillas en vez de 4, la orden de compra muestra lo que se pidió y el remito firmado con la nota muestra lo que llegó.</p>` },
  ],
  practica: [
    "Elegí un producto que se use seguido en tu casa o en un trabajo (papel higiénico, yerba, resmas) y llevá su stock una semana con entradas y salidas. Anotá cuánto quedó.",
    "Calculá el stock mínimo de ese producto: cuánto usás por semana, cuánto tarda en conseguirse y una cantidad de seguridad. Anotá la cuenta.",
    "Pedí o buscá 3 presupuestos de algo que necesites y armá la tabla de comparación con el costo total. Anotá cuál elegís y por qué.",
  ],
  recursos: [
    { t: "Argentina.gob.ar: Defensa del consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "Google Drive: cómo usarlo", url: "https://support.google.com/drive/answer/2424384?hl=es" },
  ],
  quiz: [
    { q: "¿Qué es el stock?", opciones: ["La plata del banco","La lista de proveedores","Lo que tenés guardado para usar o vender","El precio de venta"], correcta: 2, explicacion: "Stock es la mercadería guardada. La lista de proveedores tienta porque está relacionada, pero no es lo que hay en el depósito." },
    { q: "Si tenías 12 resmas, entraron 10 y salieron 9, ¿cuántas quedan?", opciones: ["13","31","22","3"], correcta: 0, explicacion: "12 + 10 − 9 = 13. 22 tienta porque es lo que había después de la compra, pero faltan restar las salidas." },
    { q: "Usás 3 cajas por semana y el proveedor tarda 2 semanas. Con 2 de seguridad, ¿cuál es el stock mínimo?", opciones: ["6 cajas","5 cajas","3 cajas","8 cajas"], correcta: 3, explicacion: "3 × 2 + 2 = 8. 6 tienta porque cubre la espera, pero sin margen cualquier demora te deja sin nada." },
    { q: "La planilla dice 13 resmas y contás 11. ¿Qué concluís?", opciones: ["Que la planilla está bien","Que hay una diferencia: un error de carga, una salida sin anotar o una pérdida","Que contaste mal seguro","Que no importa"], correcta: 1, explicacion: "Contar de verdad muestra lo que la planilla no. Pensar que contaste mal tienta, pero conviene recontar y averiguar." },
    { q: "Querés comprar 4 sillas para la oficina. ¿Cuántos presupuestos pedís?", opciones: ["Uno, el primero que aparece","Ninguno, comprás donde siempre","Al menos 3","20"], correcta: 2, explicacion: "Tres alcanzan para comparar. El primero tienta por rápido, pero no sabés si es buen precio." },
    { q: "Si B cobra $ 110.000 más $ 15.000 de envío y A cobra $ 120.000 con envío, ¿cuál es más barato?", opciones: ["A: $ 120.000 contra $ 125.000","B, porque el precio es menor","Son iguales","No se puede saber"], correcta: 0, explicacion: "Hay que comparar el costo total. B tienta por el precio, pero con el envío sale más caro." },
    { q: "C es el más barato, pero tarda 15 días y no tiene garantía. Necesitás las sillas esta semana. ¿Qué elegís?", opciones: ["C, porque es el más barato","Ninguno","Esperás un mes más","A, que llega en 3 días y tiene garantía"], correcta: 3, explicacion: "El costo total no es lo único: importan la entrega y la garantía. C tienta por el precio, pero no llega a tiempo." },
    { q: "¿Por qué conviene mandar el mismo pedido a los 3 proveedores?", opciones: ["Para que compitan bajando la calidad","Para poder compararlos de verdad","Para ahorrar mails","No hace falta"], correcta: 1, explicacion: "Con el mismo pedido, la comparación es justa. \"No hace falta\" tienta, pero si uno cotiza otra calidad no sirve comparar." },
    { q: "¿Qué es una orden de compra?", opciones: ["La factura del proveedor","El remito","El pedido formal por escrito: qué, cuánto, a qué precio y para cuándo","Un presupuesto"], correcta: 2, explicacion: "La orden la hacés vos al proveedor. El presupuesto tienta porque tiene los mismos datos, pero lo hace el proveedor antes." },
    { q: "En el circuito de compra, ¿qué tiene que coincidir?", opciones: ["Orden de compra, remito y factura: cantidades y precios","Solo la factura y el pago","Solo el presupuesto","Nada"], correcta: 0, explicacion: "Los tres documentos se controlan entre sí. Solo factura y pago tienta, pero así no ves si llegó todo." },
    { q: "Querés hacer una compra grande y no sabés si podés autorizarla. ¿Qué hacés?", opciones: ["La hacés igual","Esperás que nadie se dé cuenta","La partís en varias compras chicas","Preguntás cuál es la regla y quién tiene que firmar"], correcta: 3, explicacion: "Las compras grandes suelen necesitar autorización. Partirla tienta para no pedir permiso, pero es saltear la regla." },
    { q: "Llegaron 3 sillas de 4 pedidas. ¿Qué te sirve para reclamar?", opciones: ["Tu memoria","La orden de compra y el remito firmado con la nota de lo que llegó","Un mensaje de voz","La factura sola"], correcta: 1, explicacion: "La orden muestra lo pedido y el remito, lo recibido. La factura sola tienta, pero puede decir 4 aunque llegaron 3." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el manual de la oficina",
  nivel: "Avanzado",
  objetivos: [
    "Armar un manual simple de administración para un lugar real o imaginario",
    "Probarlo con casos y evaluarlo con una rúbrica",
    "Presentar un resumen mensual con los números clave",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>manual de la oficina</strong>: un documento corto que explica cómo se hacen las tareas administrativas de un lugar, para que cualquiera pueda seguirlas si vos no estás.</p>
      <table>
        <tr><th>Parte del manual</th><th>Usa el módulo</th></tr>
        <tr><td>Rutina diaria, semanal y mensual</td><td>Qué hace un administrativo</td></tr>
        <tr><td>Reglas de confidencialidad</td><td>Qué hace un administrativo</td></tr>
        <tr><td>Árbol de carpetas y fórmula de nombres</td><td>Archivo en papel y digital</td></tr>
        <tr><td>Cómo se dan turnos y se arma un acta</td><td>Agenda, turnos y reuniones</td></tr>
        <tr><td>Cómo se controla un comprobante</td><td>Comprobantes</td></tr>
        <tr><td>Planilla de cobros y pagos, caja chica y conciliación</td><td>Cobros, pagos y caja</td></tr>
        <tr><td>Planilla de stock, stock mínimo y circuito de compra</td><td>Stock, compras y proveedores</td></tr>
      </table>
      <p><strong>Elegí un lugar:</strong> una veterinaria, una ferretería, un consultorio, un club de barrio o un emprendimiento.</p>
      <p><strong>Corto y práctico:</strong> listas numeradas y planillas modelo, no párrafos largos. Si una persona nueva lo lee en 20 minutos, tiene que poder arrancar.</p>
      <p>Por ejemplo, la parte de caja chica puede ser 5 pasos numerados y una planilla modelo con el fondo de $ 50.000.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si un trabajo está listo. Pedile a alguien que lea tu manual y resuelva 3 casos con él; después evaluá con esta.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Completo</td><td>Tiene las 7 partes</td><td>Faltan 1 o 2</td><td>Faltan 3 o más</td></tr>
        <tr><td>Claro</td><td>Pasos numerados, sin palabras sin explicar</td><td>Algún paso confuso</td><td>Párrafos largos</td></tr>
        <tr><td>Planillas</td><td>Modelos listos para usar</td><td>Algunas</td><td>Ninguna</td></tr>
        <tr><td>Confidencialidad</td><td>Reglas concretas</td><td>Reglas generales</td><td>No aparece</td></tr>
        <tr><td>Casos</td><td>La otra persona resolvió los 3 casos solo con el manual</td><td>Resolvió 1 o 2</td><td>Ninguno</td></tr>
      </table>
      <p><strong>Tres casos para probar:</strong></p>
      <ol>
        <li>Llega un remito con mercadería de menos.</li>
        <li>La caja chica tiene $ 1.000 menos de lo que debería.</li>
        <li>Hay que pedir 3 presupuestos para comprar una impresora.</li>
      </ol>
      <pre><code>Máximo: 10
9 o 10 → listo
6 a 8  → mejorá los criterios con 0 o 1
0 a 5  → completá las partes que faltan</code></pre>
      <p>Por ejemplo, si la persona no supo qué hacer con el remito, falta un paso claro en "Cómo se controla un comprobante".</p>` },
    { titulo: "El resumen del mes", html: `
      <p class="idea">El dueño o la encargada no necesita ver todas las planillas: necesita un <strong>resumen</strong> de una página con los números clave y lo que hay que decidir.</p>
      <pre><code>Resumen de marzo – Veterinaria del barrio
Cobrado en el mes:            $ 1.240.000
Pagado en el mes:             $   980.000
Pendiente de cobro:           $   145.000 (3 clientes; el más viejo, 40 días)
Pendiente de pago:            $   210.000 (vence todo antes del 10/4)
Caja chica rendida:           $    25.000 (sin diferencias)
Banco conciliado:             Sí (diferencia de $ 1.200 = comisión)
Stock bajo el mínimo:         Alimento cachorro (pedido hecho, llega el 3/4)

Para decidir:
- ¿Cambiamos de proveedor de alimento? (3 presupuestos adjuntos)</code></pre>
      <p><strong>Lo que tiene que tener:</strong> números redondos y claros, lo pendiente con fechas, problemas encontrados y qué hay que decidir.</p>
      <p><strong>Con gráficos si sirve:</strong> los cursos de Excel y de Presentaciones de este sitio enseñan a mostrar números en un gráfico simple.</p>
      <p>Por ejemplo, la línea "el más viejo, 40 días" le avisa al dueño que hay un cliente que tarda en pagar, sin que tenga que leer la cuenta corriente.</p>` },
  ],
  practica: [
    "Escribí el manual de la oficina para el lugar que elegiste, con las 7 partes. Anotá cuántas páginas tiene.",
    "Pedile a alguien que lo lea y resuelva los 3 casos de la lección. Evaluá con la rúbrica y anotá el puntaje de cada criterio y el total sobre 10.",
    "Corregí los criterios con 0 o 1 y volvé a medir. Anotá el puntaje antes y después.",
    "Armá un resumen del mes con los números de las prácticas de los módulos anteriores (o inventados). Anotá cuántas líneas tiene y qué hay para decidir.",
  ],
  recursos: [
    { t: "Google Drive: cómo usarlo", url: "https://support.google.com/drive/answer/2424384?hl=es" },
    { t: "ARCA: facturación", url: "https://www.arca.gob.ar/facturacion/" },
    { t: "ARCA: monotributo", url: "https://www.arca.gob.ar/monotributo/" },
  ],
  quiz: [
    { q: "¿Para qué sirve el manual de la oficina?", opciones: ["Para cumplir con un trámite","Para que el jefe vea que trabajás","Para que cualquiera pueda seguir las tareas si vos no estás","Para guardarlo y no usarlo"], correcta: 2, explicacion: "El manual permite que otro haga el trabajo. Mostrar que trabajás tienta como motivo, pero el objetivo es que sea útil." },
    { q: "Tu manual tiene párrafos largos para cada tarea. ¿Qué cambiás?", opciones: ["Lo pasás a pasos numerados y planillas modelo","Le agregás más párrafos","Lo achicás de letra","Nada, está completo"], correcta: 0, explicacion: "Los pasos se siguen fácil. Completo tienta como virtud, pero si no se puede seguir, no sirve." },
    { q: "Si una persona nueva lee tu manual, ¿cuánto debería tardar en poder arrancar?", opciones: ["Una semana","Un mes","No hace falta que lo lea","Unos 20 minutos"], correcta: 3, explicacion: "Corto y práctico se lee en una sentada. Una semana tienta como señal de que está completo, pero nadie lo lee entero." },
    { q: "¿Qué es una rúbrica?", opciones: ["Una firma","Una lista de criterios con puntaje para saber si un trabajo está listo","Un tipo de factura","Una planilla de caja"], correcta: 1, explicacion: "La rúbrica muestra qué mejorar. Confundirla con una firma tienta por el nombre, pero sirve para evaluar." },
    { q: "Tu manual no tiene reglas de confidencialidad. ¿Cuánto saca ese criterio?", opciones: ["2","1","0","No se evalúa"], correcta: 2, explicacion: "Si no aparece, es 0. Pensar que no se evalúa tienta, pero cuidar la información es parte del trabajo." },
    { q: "La persona que probó tu manual no supo qué hacer con un remito incompleto. ¿Qué concluís?", opciones: ["Que falta un paso claro en cómo se controla un comprobante","Que la persona no prestó atención","Que el caso era muy difícil","Que el manual está bien"], correcta: 0, explicacion: "Si no lo pudo resolver, el manual no lo explica. Culpar a la persona tienta, pero el próximo empleado va a tener la misma duda." },
    { q: "Sacaste 7 sobre 10. ¿Qué hacés?", opciones: ["Lo das por listo","Lo empezás de cero","Lo dejás sin probar","Mejorás los criterios con 0 o 1 y volvés a medir"], correcta: 3, explicacion: "Entre 6 y 8 se mejora lo que falló. Empezar de cero tienta, pero desperdicia lo que ya funciona." },
    { q: "Querés informar al dueño cómo fue el mes. ¿Qué le das?", opciones: ["Todas las planillas del mes","Un resumen de una página con números clave y lo que hay que decidir","Un audio largo","Nada, que pregunte"], correcta: 1, explicacion: "El resumen va al grano. Todas las planillas tientan por completas, pero el dueño no tiene tiempo de leerlas." },
    { q: "En el resumen pusiste \"Pendiente de cobro: $ 145.000\". ¿Qué agregás para que sea útil?", opciones: ["Los centavos exactos","El nombre del banco","Cuántos clientes son y cuánto tiempo lleva el más viejo","Nada más"], correcta: 2, explicacion: "El detalle útil avisa de un problema. Los centavos tientan por precisos, pero no ayudan a decidir." },
    { q: "Si en el mes cobraste $ 1.240.000 y pagaste $ 980.000, ¿cuánto quedó de diferencia?", opciones: ["$ 260.000","$ 2.220.000","$ 360.000","$ 160.000"], correcta: 0, explicacion: "1.240.000 − 980.000 = 260.000. La suma tienta por ser los dos números juntos, pero hay que restar." },
    { q: "Hay que decidir si cambiar de proveedor. ¿Cómo lo ponés en el resumen?", opciones: ["No lo mencionás","Ya lo cambiás vos sin avisar","Lo escondés en una planilla","Como un punto \"Para decidir\", con los 3 presupuestos adjuntos"], correcta: 3, explicacion: "Las decisiones se presentan con datos. Cambiarlo vos tienta por eficiente, pero quizás no te corresponde autorizarlo." },
    { q: "Un alimento quedó por debajo del stock mínimo. ¿Qué ponés en el resumen?", opciones: ["Nada, ya lo vas a pedir","Que está bajo el mínimo, que el pedido está hecho y cuándo llega","Solo \"falta alimento\"","El stock de todos los productos"], correcta: 1, explicacion: "Así el dueño sabe que está resuelto. \"Falta alimento\" tienta por corto, pero lo deja preocupado sin saber si hiciste algo." },
  ],
},
];
