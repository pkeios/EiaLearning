// Temario del curso "Buscar trabajo con IA". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js buscar-trabajo y node tools/metodologia.js buscar-trabajo
window.TEMARIO = [
{
  id: "perfil",
  icono: "🧭",
  titulo: "Qué buscás y qué tenés para ofrecer",
  nivel: "Básico",
  objetivos: [
    "Hacer un inventario de tus habilidades, incluidas las que ganaste fuera de un trabajo formal",
    "Escribir un objetivo laboral de dos frases: qué querés hacer y qué podés aportar",
    "Usar la IA para descubrir habilidades sin que invente experiencia que no tenés",
  ],
  lecciones: [
    { titulo: "Tenés más experiencia de la que creés", html: `
      <p class="idea">Mucha gente piensa "no tengo experiencia" porque nunca tuvo un trabajo registrado. Pero cuidar a un familiar, vender en una feria, organizar el club del barrio o hacer changas también te dio habilidades que piden los trabajos.</p>
      <p>La guía oficial del Gobierno para buscar empleo arranca por ahí: antes del CV, definí tu perfil. Pensá en tus intereses, en lo que sabés hacer, en tu experiencia y en lo que te gusta y no te gusta hacer.</p>
      <table>
        <tr><th>Lo que hiciste</th><th>Habilidades que muestra</th></tr>
        <tr><td>Vendiste ropa en una feria los fines de semana</td><td>Atención al público, manejo de caja, armar precios</td></tr>
        <tr><td>Cuidaste a tu abuela durante un año</td><td>Responsabilidad, organización de horarios y remedios, paciencia</td></tr>
        <tr><td>Organizaste el torneo de fútbol del barrio</td><td>Organización, coordinar gente, resolver problemas</td></tr>
        <tr><td>Hiciste changas de pintura</td><td>Trabajo prolijo, presupuestar, cumplir plazos</td></tr>
        <tr><td>Fuiste delegado del curso en la escuela</td><td>Comunicación, representar a otros, negociar</td></tr>
      </table>
      <p>Estas se llaman <strong>habilidades transferibles</strong>: las aprendiste en un lugar y sirven en otro. A muchos empleadores, sobre todo para primeros trabajos, les importan tanto como la experiencia: que seas responsable, que sepas tratar con gente y que aprendas rápido.</p>
      <p><strong>Tu inventario.</strong> Hacé una lista con tres columnas: qué hiciste (trabajo, estudio, voluntariado, familia, changas), qué aprendiste a hacer y un ejemplo concreto. Por ejemplo:</p>
      <pre><code>Qué hice              Qué aprendí               Ejemplo concreto
Feria de ropa         Atender y cobrar          Atendía unas 30 personas por día
Torneo del barrio     Organizar                 Armé el fixture de 8 equipos</code></pre>
      <p>Los números (30 personas, 8 equipos) hacen que una habilidad se crea. Vas a usar esta lista en todo el curso: en el CV, en la carta y en la entrevista.</p>` },
    { titulo: "Qué buscás: tu objetivo laboral", html: `
      <p class="idea">Buscar "de lo que sea" parece abrir más puertas, pero en la práctica cierra muchas: un CV para todo no convence a nadie. Elegí uno o dos tipos de trabajo y apuntá ahí.</p>
      <p>Para elegir, cruzá tres cosas:</p>
      <table>
        <tr><th>Pregunta</th><th>Ejemplo</th></tr>
        <tr><td>¿Qué sé hacer o puedo aprender rápido?</td><td>Atender gente, manejar caja, usar Excel</td></tr>
        <tr><td>¿Qué me gusta, o al menos no me molesta?</td><td>Estar en movimiento, hablar con gente</td></tr>
        <tr><td>¿Qué se busca cerca de mí?</td><td>Hay muchos avisos de atención al público y repositor en mi zona</td></tr>
      </table>
      <p>Para la última pregunta, mirá los avisos de tu zona en los portales de empleo (lo vemos en el módulo 4): ¿qué puestos se repiten? ¿Qué piden?</p>
      <p><strong>El objetivo laboral.</strong> La guía oficial recomienda escribir un objetivo profesional que diga qué querés hacer y qué podés aportar. Dos frases alcanzan:</p>
      <pre><code>Busco mi primer empleo en atención al público en comercios o
supermercados. Puedo aportar experiencia en ventas y cobro en ferias,
buen trato con la gente y disponibilidad de lunes a sábado.</code></pre>
      <p>Por ejemplo, ese objetivo te sirve para el principio del CV, para tu perfil de LinkedIn y para contestar "contame de vos" en una entrevista.</p>
      <p><strong>Tipos de trabajo.</strong> La guía oficial también recuerda que hay distintas formas de trabajar: en relación de dependencia (con un empleador, recibo de sueldo y aportes), por temporada, por tu cuenta (como monotributista) o como voluntario. Pensá cuál te sirve hoy.</p>
      <p><strong>Si no sabés qué te gusta,</strong> está bien probar. Un trabajo de temporada o un voluntariado te ayudan a descubrirlo y suman experiencia para el CV.</p>` },
    { titulo: "La IA como ayudante, no como inventora", html: `
      <p class="idea">La IA es muy buena para ordenar lo que hiciste y ponerle nombre a tus habilidades. Pero si no se lo pedís, puede agregar cosas que nunca hiciste. En un CV, un dato inventado te puede costar el trabajo.</p>
      <p>Este curso usa ChatGPT, Claude o Gemini, en su versión gratis. Si nunca usaste una, el curso <a href="../prompts/">Prompts desde cero</a> de este sitio te enseña desde cero. Acá vas a usar lo más importante de ese curso: pedir claro, dar contexto y revisar todo.</p>
      <p><strong>Un pedido para descubrir tus habilidades:</strong></p>
      <pre><code>Te cuento lo que hice en los últimos años. Ayudame a encontrar
las habilidades que me sirven para buscar trabajo en atención al público.

- Vendí ropa en una feria los sábados durante 2 años.
- Cuidé a mi abuela: le organizaba los remedios y los turnos médicos.
- Organicé el torneo de fútbol del barrio con 8 equipos.

Reglas: usá solo lo que te conté. No agregues experiencia, cursos
ni datos que no te di. Si algo no está claro, preguntame.
Devolveme una tabla: qué hice, habilidad y cómo lo diría en un CV.</code></pre>
      <p>Las reglas del final son la clave: "usá solo lo que te conté" y "si algo no está claro, preguntame". Sin ellas, la IA puede escribir "experiencia en manejo de stock" aunque nunca lo hiciste.</p>
      <table>
        <tr><th>Sí pedile a la IA</th><th>Nunca le pidas</th></tr>
        <tr><td>Ordenar y nombrar lo que hiciste</td><td>Que invente experiencia o títulos</td></tr>
        <tr><td>Ideas de trabajos que encajen con tu perfil</td><td>Que te diga qué trabajo es "el mejor" sin conocerte</td></tr>
        <tr><td>Revisar si tu texto se entiende</td><td>Que decida por vos</td></tr>
      </table>
      <p><strong>Privacidad:</strong> para estas tareas la IA no necesita tu DNI, tu dirección ni tu teléfono. No los escribas en el chat.</p>
      <p>Por ejemplo, si la IA te devuelve una habilidad que no reconocés como tuya, borrala. Todo lo que pongas en el CV te lo pueden preguntar en la entrevista.</p>` },
  ],
  practica: [
    "Hacé tu inventario con al menos 5 cosas que hiciste (trabajo, estudio, familia, changas o voluntariado), con una habilidad y un ejemplo con número para cada una. Anotá cuántas habilidades encontraste.",
    "Mirá 10 avisos de tu zona en un portal de empleo y anotá qué 2 tipos de puesto se repiten más. Escribí tu objetivo laboral de dos frases para uno de ellos.",
    "Usá el pedido de la última lección con tu propia lista. Compará la tabla que te devuelve con lo que hiciste de verdad y anotá si agregó algo que no le contaste.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Gobierno de Argentina: buscás trabajo (programas, agencias y oficinas de empleo)", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Nunca tuviste un trabajo registrado, pero vendiste en una feria dos años. ¿Qué ponés en tu búsqueda?", opciones: ["Que no tenés ninguna experiencia","Que trabajaste en una empresa grande","Que tenés experiencia en atención al público y cobro, con ejemplos concretos","Nada, la feria no cuenta"], correcta: 2, explicacion: "Vender en una feria te dio habilidades reales que piden muchos trabajos. Decir que no tenés experiencia tienta por modestia, pero borra justo lo que te diferencia." },
    { q: "¿Qué es una habilidad transferible?", opciones: ["Algo que aprendiste en un lugar y te sirve en otro, como organizar o atender gente","Un título universitario","Una habilidad que se puede vender","Algo que solo sirve en el trabajo donde lo aprendiste"], correcta: 0, explicacion: "Organizar un torneo o cuidar a un familiar enseña cosas que sirven en un trabajo. Pensar que tiene que ser un título tienta, pero las habilidades se ganan también fuera del estudio formal." },
    { q: "En tu inventario escribiste \"sé atender al público\". ¿Cómo lo mejorás?", opciones: ["Con \"soy muy bueno atendiendo\"","Sacándolo porque es obvio","Con \"experto en atención al cliente\"","Con un ejemplo con número: \"atendía unas 30 personas por día en la feria\""], correcta: 3, explicacion: "Los números hacen creíble una habilidad. \"Experto\" tienta porque suena fuerte, pero sin un ejemplo no lo demuestra." },
    { q: "Tu amigo manda el mismo CV \"para cualquier puesto\" y no lo llaman. ¿Qué le sugerís?", opciones: ["Que mande más CV iguales","Que elija uno o dos tipos de trabajo y arme el CV apuntando a esos","Que agregue todos los trabajos posibles al objetivo","Que no ponga objetivo"], correcta: 1, explicacion: "Un CV para todo no convence a nadie en particular. Mandar más iguales tienta porque parece aumentar las chances, pero repite el mismo problema." },
    { q: "Querés saber qué trabajos se buscan cerca de tu casa. ¿Qué hacés?", opciones: ["Le preguntás a la IA qué se busca en tu barrio","Elegís el trabajo que paga más en la tele","Mirás los avisos de tu zona en portales de empleo y anotás qué puestos se repiten","Esperás a que alguien te ofrezca algo"], correcta: 2, explicacion: "Los avisos reales muestran qué se pide hoy en tu zona. Preguntarle a la IA tienta por rápido, pero no sabe qué avisos hay hoy en tu barrio y lo puede inventar." },
    { q: "¿Qué tiene que decir tu objetivo laboral, según la guía oficial del Gobierno?", opciones: ["Qué querés hacer y qué podés aportar","Cuánto querés ganar","Toda tu historia de vida","Que aceptás cualquier cosa"], correcta: 0, explicacion: "Dos frases: qué buscás y qué ofrecés. Decir que aceptás cualquier cosa tienta para no cerrar puertas, pero no le dice nada al que lee." },
    { q: "Le pediste a la IA que ordene tus habilidades y agregó \"experiencia en manejo de stock\", que nunca hiciste. ¿Qué hacés?", opciones: ["La dejás, suena bien","La dejás y aprendés después","Le pedís que agregue más cosas así","La borrás: todo lo que pongas en el CV te lo pueden preguntar"], correcta: 3, explicacion: "Un dato falso en el CV te puede costar el trabajo. Dejarlo porque suena bien tienta, pero en la entrevista te van a pedir un ejemplo y no lo vas a tener." },
    { q: "Querés que la IA te ayude con tus habilidades sin inventar. ¿Qué regla agregás al pedido?", opciones: ["\"Hacelo lo más impresionante posible\"","\"Usá solo lo que te conté. No agregues experiencia ni datos que no te di\"","\"Inventá lo que haga falta\"","Ninguna, la IA nunca inventa"], correcta: 1, explicacion: "Las reglas claras evitan que rellene. \"Lo más impresionante posible\" tienta, pero empuja a la IA justo a exagerar o inventar." },
    { q: "Vas a usar la IA para armar tu CV. ¿Qué datos no le escribís?", opciones: ["Lo que hiciste en la feria","El tipo de trabajo que buscás","Tu DNI, tu dirección exacta y tu teléfono","Tus habilidades"], correcta: 2, explicacion: "La IA no los necesita para ordenar tu experiencia. Pensar que hacen falta para que el CV quede completo tienta, pero esos datos los agregás vos al final, en tu documento." },
    { q: "No sabés qué trabajo te gusta. ¿Qué te puede ayudar?", opciones: ["Probar con un trabajo de temporada o un voluntariado","Esperar a estar seguro antes de buscar","Que la IA elija por vos","Buscar solo trabajos que pagan mucho"], correcta: 0, explicacion: "Probar te ayuda a descubrirlo y suma experiencia. Que la IA elija tienta, pero no te conoce ni sabe lo que te gusta." },
    { q: "Te ofrecen un trabajo con recibo de sueldo y aportes. ¿Qué tipo de trabajo es?", opciones: ["Por tu cuenta","Voluntariado","Changa","En relación de dependencia"], correcta: 3, explicacion: "Trabajar para un empleador con recibo y aportes es relación de dependencia. Por tu cuenta tienta como respuesta, pero ahí no hay empleador que te pague un sueldo." },
    { q: "Cuidaste a tu abuela durante un año, organizando remedios y turnos. ¿Cómo lo usás en la búsqueda?", opciones: ["No lo mencionás porque es algo familiar","Como experiencia en organización y responsabilidad, con ese ejemplo","Decís que trabajaste en una clínica","Lo ponés como \"enfermero\""], correcta: 1, explicacion: "Es una experiencia real que muestra habilidades. Decir que trabajaste en una clínica tienta para que suene más formal, pero es mentira y se descubre." },
  ],
},
{
  id: "cv",
  icono: "📄",
  titulo: "Tu CV: una o dos páginas que convencen",
  nivel: "Básico",
  objetivos: [
    "Armar un CV con las partes que recomienda la guía oficial, en una o dos páginas",
    "Escribir cada experiencia con verbos de acción y resultados con números",
    "Usar la IA para redactar y revisar el CV sin inventar nada",
  ],
  lecciones: [
    { titulo: "Las partes del CV", html: `
      <p class="idea">El <strong>CV</strong> (curriculum vitae, o currículum) es un documento corto que cuenta quién sos, qué hiciste y qué sabés hacer. Quien lo lee le dedica muy poco tiempo, así que tiene que ser claro y fácil de recorrer.</p>
      <p>La guía oficial del Gobierno recomienda estas partes, en este orden:</p>
      <ol>
        <li><strong>Datos personales:</strong> nombre, teléfono, mail y la zona donde vivís (el barrio o la localidad alcanza).</li>
        <li><strong>Objetivo</strong> (el que escribiste en el módulo 0), en dos frases.</li>
        <li><strong>Experiencia laboral:</strong> trabajos, y si es tu primer empleo, pasantías, voluntariados o changas.</li>
        <li><strong>Educación:</strong> lo último que estudiaste, aunque no lo hayas terminado ("secundario en curso").</li>
        <li><strong>Formación complementaria:</strong> cursos, talleres, capacitaciones (también cursos gratis como los de este sitio).</li>
        <li><strong>Idiomas e informática:</strong> con el nivel real ("inglés básico", "Excel: fórmulas y tablas dinámicas").</li>
        <li><strong>Habilidades</strong> y, si querés, intereses.</li>
      </ol>
      <table>
        <tr><th>Errores comunes que marca la guía</th><th>Mejor así</th></tr>
        <tr><td>Datos vagos ("trabajé en varios lugares")</td><td>Lugar, puesto, fechas y qué hacías</td></tr>
        <tr><td>Foto informal (de un cumpleaños, con anteojos de sol)</td><td>Si ponés foto, de frente, con fondo liso y ropa prolija</td></tr>
        <tr><td>Un mail como elmascapo99@...</td><td>Un mail con tu nombre y apellido</td></tr>
        <tr><td>Más de dos páginas</td><td>Una página si tenés poca experiencia; dos como máximo</td></tr>
      </table>
      <p><strong>Formato cronológico o funcional.</strong> La guía explica dos formas de ordenar la experiencia. La <strong>cronológica</strong> pone los trabajos del más nuevo al más viejo: conviene si lo último que hiciste tiene que ver con el puesto. La <strong>funcional</strong> agrupa por habilidades ("atención al público", "organización"): conviene si tenés poca experiencia formal o períodos sin trabajo.</p>
      <p>Por ejemplo, si vendiste en ferias y cuidaste a un familiar, un CV funcional te deja mostrar "Atención al público" y "Organización" como títulos, con tus ejemplos abajo.</p>` },
    { titulo: "Verbos de acción y resultados con números", html: `
      <p class="idea">La diferencia entre un CV que pasa de largo y uno que llama la atención está en cómo describís lo que hiciste: con un verbo de acción, qué hiciste y un resultado, mejor si tiene un número.</p>
      <p>La plantilla de CV de la oficina de carreras de Harvard recomienda escribir cada punto empezando con un verbo de acción. La fórmula es simple:</p>
      <pre><code>Verbo de acción + qué hiciste + resultado (con número si podés)</code></pre>
      <table>
        <tr><th>Así no</th><th>Así sí</th></tr>
        <tr><td>"Responsable de la caja"</td><td>"Cobré y cerré la caja todos los días sin diferencias durante 6 meses"</td></tr>
        <tr><td>"Ayudaba en el local"</td><td>"Atendí unos 40 clientes por día y repuse la mercadería de 3 góndolas"</td></tr>
        <tr><td>"Organizador de eventos"</td><td>"Organicé un torneo de 8 equipos y 120 jugadores en 4 fines de semana"</td></tr>
      </table>
      <p><strong>Verbos que sirven:</strong> atendí, organicé, vendí, cobré, coordiné, resolví, armé, mejoré, enseñé, reduje, aumenté, aprendí.</p>
      <p><strong>¿Y si no tengo números?</strong> Casi siempre hay alguno: cuántas personas, cuántos días, cuánto tiempo, cuántos productos. Si de verdad no hay, describí el resultado: "Armé un cronograma de remedios que evitó olvidos".</p>
      <p><strong>Siempre la verdad.</strong> Un número tiene que ser real o una estimación honesta ("unas 40 personas"). Si te preguntan en la entrevista, lo tenés que poder explicar.</p>
      <p>Por ejemplo, un CV de primer empleo bien escrito:</p>
      <pre><code>EXPERIENCIA
Vendedora · Feria del barrio (fines de semana) · 2023 a 2025
- Atendí unas 30 personas por día y cobré en efectivo y con QR.
- Armé los precios de 50 prendas con mi tía, según el costo y la competencia.
- Llevé la cuenta de ventas en una planilla y saqué el total de cada mes.</code></pre>` },
    { titulo: "Redactar y revisar con IA", html: `
      <p class="idea">La IA es muy útil para pasar tus puntos al formato del CV, corregir la ortografía y hacerte preguntas que te faltan. Lo que no puede es saber qué hiciste: eso se lo das vos, y vos revisás que no agregue nada.</p>
      <p><strong>Un pedido para redactar la experiencia:</strong></p>
      <pre><code>Sos un orientador laboral que ayuda a gente en su primer empleo.
Convertí estos datos en 3 puntos para la sección Experiencia de mi CV.
Cada punto: verbo de acción + qué hice + resultado con número.

DATOS:
"""
Vendí ropa en una feria los sábados y domingos, 2023 a 2025.
Atendía unas 30 personas por día. Cobraba en efectivo y con QR.
Llevaba las ventas en una planilla.
"""

Reglas: usá solo estos datos, sin agregar nada. Si te falta un dato
para un buen resultado, no lo inventes: preguntame.</code></pre>
      <p>Fijate que usa lo que aprendiste en el curso <a href="../prompts/">Prompts desde cero</a>: un rol, la tarea con el formato, el material separado con comillas triples y la regla de no inventar.</p>
      <p><strong>Pedirle una revisión crítica.</strong> La IA tiende a decir que todo está bien. Pedile que critique:</p>
      <pre><code>Sos un reclutador que lee 100 CV por día para puestos de atención
al público. Leé mi CV y decime las 3 cosas más débiles y cómo las
arreglarías. No me digas lo que está bien.</code></pre>
      <p><strong>La revisión final la hacés vos:</strong></p>
      <ol>
        <li>Leé cada línea y preguntate: ¿esto es verdad?, ¿lo puedo explicar en una entrevista?</li>
        <li>Fijate que las fechas, los nombres de los lugares y los números sean exactos.</li>
        <li>Sacá frases que no dicen nada, como "proactivo y orientado a resultados".</li>
        <li>Pedile a una persona que lo lea: si en 30 segundos no entiende qué buscás, simplificalo.</li>
      </ol>
      <p>Por ejemplo, si la IA te escribe "gestioné la cartera de clientes", preguntate si lo dirías así en una charla. Si no, cambialo por algo tuyo: "atendí a los clientes de siempre y anoté sus pedidos".</p>
      <p><strong>El formato del archivo:</strong> guardalo como PDF con un nombre claro, como "CV-Ana-Gomez.pdf". Así se ve igual en cualquier computadora.</p>` },
  ],
  practica: [
    "Armá tu CV con las 7 partes de la guía oficial en una o dos páginas. Anotá cuántas páginas quedó y qué formato elegiste (cronológico o funcional).",
    "Reescribí 3 experiencias con la fórmula verbo + qué hiciste + resultado. Contá cuántas tienen un número y mejorá las que no lo tengan.",
    "Pedile a la IA la revisión crítica del reclutador. Anotá las 3 debilidades que marcó, cuáles arreglaste y si agregó algo que no era verdad.",
    "Guardá el CV como PDF con tu nombre en el archivo y mandátelo a vos mismo por mail. Anotá si se ve bien en el celular.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Harvard Career Services: plantilla de CV con viñetas y verbos de acción (en inglés)", url: "https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/" },
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Tenés poca experiencia formal y querés que tu CV muestre tus habilidades. ¿Qué formato elegís?", opciones: ["Cronológico, aunque lo último no tenga que ver","Uno de 4 páginas con todo","Funcional, agrupando por habilidades","Sin experiencia, solo con los estudios"], correcta: 2, explicacion: "El funcional muestra habilidades aunque no tengas muchos trabajos. El cronológico tienta porque es el más común, pero conviene cuando lo último que hiciste tiene que ver con el puesto." },
    { q: "Tu mail es \"elmascapo99@...\". ¿Qué hacés para el CV?", opciones: ["Creás uno con tu nombre y apellido","Lo dejás, muestra tu personalidad","No ponés mail","Ponés el mail de tu hermano"], correcta: 0, explicacion: "La guía oficial marca los mails con seudónimo como un error común. Dejarlo tienta porque es el que usás, pero da una mala primera impresión." },
    { q: "Tu CV tiene 4 páginas. ¿Qué hacés?", opciones: ["Lo dejás, más es mejor","Achicás la letra para que entre en dos","Sacás la experiencia y dejás los cursos","Lo achicás a una o dos páginas, dejando lo que importa para el puesto"], correcta: 3, explicacion: "Quien lo lee le dedica poco tiempo. Achicar la letra tienta para no sacar nada, pero se vuelve difícil de leer." },
    { q: "Terminaste un curso gratis de Excel de este sitio. ¿Dónde lo ponés en el CV?", opciones: ["En educación, como si fuera un título","En formación complementaria, y lo que sabés hacer en informática","No lo ponés porque es gratis","En experiencia laboral"], correcta: 1, explicacion: "Los cursos y talleres van en formación complementaria. No ponerlo porque es gratis tienta, pero lo que importa es lo que aprendiste." },
    { q: "¿Cuál de estos puntos del CV está mejor escrito?", opciones: ["\"Responsable de la caja\"","\"Proactivo y orientado a resultados\"","\"Cobré y cerré la caja todos los días sin diferencias durante 6 meses\"","\"Ayudaba con la plata\""], correcta: 2, explicacion: "Tiene verbo, qué hiciste y un resultado con número. \"Proactivo y orientado a resultados\" tienta porque suena profesional, pero no dice nada concreto." },
    { q: "Querés poner que atendías gente, pero no tenés el número exacto. ¿Qué hacés?", opciones: ["Ponés una estimación honesta, como \"unas 30 personas por día\"","Inventás un número grande","No ponés nada sobre eso","Ponés \"miles de clientes\""], correcta: 0, explicacion: "Una estimación honesta suma y la podés explicar. \"Miles de clientes\" tienta porque impresiona, pero en la entrevista no la vas a poder sostener." },
    { q: "Querés que la IA pase tus datos al formato del CV. ¿Qué regla no puede faltar?", opciones: ["\"Hacelo impactante\"","\"Agregá lo que haga falta para que quede bien\"","\"Usá palabras difíciles\"","\"Usá solo estos datos. Si te falta algo, preguntame\""], correcta: 3, explicacion: "Sin esa regla la IA rellena con cosas que no hiciste. \"Que quede bien\" tienta, pero la empuja a inventar." },
    { q: "Le preguntás a la IA si tu CV está bien y te dice que está excelente. ¿Qué hacés?", opciones: ["Lo mandás así","Le pedís que haga de reclutador y te diga las 3 cosas más débiles","Le preguntás de nuevo hasta que diga algo distinto","Le pedís que lo haga más largo"], correcta: 1, explicacion: "La IA tiende a dar la razón; un pedido de crítica muestra lo que mejorar. Mandarlo así tienta porque te dijo que está bien, pero puede tener problemas que no te marcó." },
    { q: "La IA escribió \"gestioné la cartera de clientes\" y vos nunca dirías eso. ¿Qué hacés?", opciones: ["Lo dejás porque suena más profesional","Lo copiás en todos los puntos","Lo cambiás por algo tuyo y verdadero, como \"atendí a los clientes de siempre\"","Lo memorizás para la entrevista"], correcta: 2, explicacion: "El CV tiene que sonar a vos y poder explicarlo. Que suena profesional tienta, pero en la entrevista se nota si no sabés qué quiere decir." },
    { q: "Antes de mandar el CV, ¿qué preguntas te hacés sobre cada línea?", opciones: ["¿Es verdad? ¿Lo puedo explicar en una entrevista?","¿Suena impresionante?","¿Es largo?","¿Lo escribió la IA?"], correcta: 0, explicacion: "Todo lo que está en el CV te lo pueden preguntar. Que suene impresionante tienta, pero si no es verdad, juega en contra." },
    { q: "Vas a mandar tu CV por mail. ¿En qué formato lo guardás?", opciones: ["Como una foto del celular","En Word con el nombre \"Documento1\"","Pegado en el cuerpo del mail","En PDF, con un nombre claro como \"CV-Ana-Gomez.pdf\""], correcta: 3, explicacion: "El PDF se ve igual en cualquier computadora. Word tienta porque es donde lo escribiste, pero puede desarmarse en otra computadora y \"Documento1\" no dice de quién es." },
    { q: "Si pedís a una persona que lea tu CV y en 30 segundos no entiende qué buscás, ¿qué concluís?", opciones: ["Que la persona no sabe leer CV","Que hay que simplificarlo y dejar más claro el objetivo","Que hay que agregar más información","Que está perfecto"], correcta: 1, explicacion: "Quien lo recibe le dedica poco tiempo. Agregar más tienta para explicar mejor, pero lo vuelve más difícil de recorrer." },
  ],
},
{
  id: "adaptar",
  icono: "🎯",
  titulo: "Leer un aviso y adaptar tu CV",
  nivel: "Intermedio",
  objetivos: [
    "Leer un aviso y separar lo excluyente de lo deseable",
    "Adaptar el objetivo y el orden de tu CV a cada aviso, con sus palabras clave",
    "Usar la IA para comparar tu CV con un aviso sin exagerar lo que tenés",
  ],
  lecciones: [
    { titulo: "Cómo leer un aviso", html: `
      <p class="idea">Un aviso de trabajo dice qué buscan, pero mezcla lo que es obligatorio con lo que "estaría bueno". Si aprendés a separarlos, te postulás a más puestos donde tenés chances reales.</p>
      <p>Mirá este aviso:</p>
      <pre><code>CAJERO/A PARA SUPERMERCADO – Zona Sur
Requisitos excluyentes:
- Secundario completo
- Disponibilidad de lunes a sábado, turno tarde
Se valorará:
- Experiencia en caja o atención al público
- Manejo de medios de pago electrónicos
Ofrecemos: relación de dependencia, capacitación, obra social.</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué significa</th><th>Qué hacés</th></tr>
        <tr><td><strong>Excluyente</strong></td><td>Si no lo cumplís, no te toman</td><td>Postulate solo si lo cumplís</td></tr>
        <tr><td><strong>Se valorará / deseable</strong></td><td>Suma, pero no es obligatorio</td><td>Postulate igual si cumplís parte</td></tr>
        <tr><td><strong>Ofrecemos</strong></td><td>Lo que te dan</td><td>Fijate si te sirve (horario, zona, tipo de contrato)</td></tr>
      </table>
      <p><strong>No te autodescartes.</strong> Mucha gente no se postula si no cumple el 100% de lo "deseable". Si cumplís lo excluyente y parte de lo deseable, postulate.</p>
      <p><strong>Palabras clave.</strong> Subrayá las palabras que describen lo que buscan: "caja", "atención al público", "medios de pago electrónicos". Son las que tu CV tiene que mostrar, si son verdad para vos.</p>
      <p><strong>Señales de un aviso falso</strong> (lo viste en el curso de seguridad digital de este sitio): te piden plata para "materiales" o "capacitación", el sueldo es demasiado alto para lo que piden, no dicen el nombre de la empresa ni cómo contactarla, o te piden datos del banco antes de la entrevista. Un trabajo real no te cobra para trabajar.</p>
      <p>Por ejemplo, en el aviso del supermercado, si tenés el secundario completo y vendiste en una feria cobrando con QR, cumplís lo excluyente y lo deseable: es un aviso para vos.</p>` },
    { titulo: "Adaptar el CV a cada aviso", html: `
      <p class="idea">Adaptar no es inventar: es elegir qué mostrar primero y con qué palabras, según lo que pide cada aviso. Tu experiencia es la misma; cambia el orden y el foco.</p>
      <p>Tené un <strong>CV base</strong> con todo, y para cada aviso hacé una copia y cambiá tres cosas:</p>
      <ol>
        <li><strong>El objetivo:</strong> que nombre el puesto del aviso.</li>
        <li><strong>El orden:</strong> arriba, lo que más se parece a lo que piden.</li>
        <li><strong>Las palabras:</strong> usá las palabras clave del aviso para describir lo que sí hiciste.</li>
      </ol>
      <table>
        <tr><th>El aviso dice</th><th>Tu CV base dice</th><th>Tu CV adaptado dice</th></tr>
        <tr><td>"Manejo de medios de pago electrónicos"</td><td>"Cobraba en la feria"</td><td>"Cobré en efectivo y con QR (medios de pago electrónicos)"</td></tr>
        <tr><td>"Atención al público"</td><td>"Vendía ropa"</td><td>"Atención al público: unas 30 personas por día"</td></tr>
      </table>
      <p><strong>Los filtros automáticos.</strong> Muchas empresas, sobre todo las grandes, usan programas que leen los CV antes que una persona y los ordenan según las palabras del aviso. Se los llama sistemas de seguimiento de candidatos (en inglés, <em>ATS</em>). Para que tu CV pase:</p>
      <ul>
        <li>Usá las mismas palabras del aviso cuando sean verdad para vos.</li>
        <li>Títulos simples: "Experiencia", "Educación", "Habilidades".</li>
        <li>Evitá poner datos importantes dentro de imágenes o de tablas complicadas.</li>
        <li>Mandalo en PDF o en el formato que pida el aviso.</li>
      </ul>
      <p><strong>La línea que no se cruza:</strong> si el aviso pide "experiencia en manejo de stock" y nunca lo hiciste, no lo pongas. Podés poner algo parecido y verdadero: "Llevé la cuenta de la mercadería de la feria en una planilla".</p>
      <p>Por ejemplo, guardá cada versión con el nombre del puesto: "CV-Ana-Gomez-cajera.pdf". Así sabés qué mandaste a cada lado.</p>` },
    { titulo: "Comparar tu CV con el aviso usando IA", html: `
      <p class="idea">La IA puede comparar tu CV con un aviso en segundos: qué pedidos cumplís, qué palabras te faltan y qué conviene mover arriba. Vos decidís qué cambiar, y nunca agregás algo que no hiciste.</p>
      <pre><code>Te paso un aviso de trabajo y mi CV. Hacé una tabla con cada
requisito del aviso, si lo cumplo (sí, en parte, no) y en qué parte
de mi CV se ve. Después sugerí cambios de orden y de palabras
para este aviso.

Reglas: no agregues experiencia que no está en mi CV. Si no cumplo
un requisito, decilo; no lo disimules.

AVISO:
"""
(pegás el aviso)
"""

MI CV:
"""
(pegás tu CV, sin DNI, dirección ni teléfono)
"""</code></pre>
      <p>Fijate dos cosas del pedido: separa el aviso del CV con comillas triples (así la IA no los mezcla) y le pide que diga lo que no cumplís en vez de disimularlo.</p>
      <table>
        <tr><th>Requisito</th><th>¿Cumplo?</th><th>Dónde se ve</th></tr>
        <tr><td>Secundario completo</td><td>Sí</td><td>Educación</td></tr>
        <tr><td>Experiencia en caja</td><td>En parte</td><td>Feria: cobro en efectivo y QR</td></tr>
        <tr><td>Disponibilidad turno tarde</td><td>No se ve</td><td>Agregalo en el objetivo, si es verdad</td></tr>
      </table>
      <p><strong>Leé la tabla con cuidado.</strong> La IA puede marcar "sí" algo que cumplís solo en parte, o al revés. Revisá cada fila con tu CV.</p>
      <p><strong>Si no cumplís un excluyente,</strong> no te postules a ese aviso. Usá la tabla para ver qué te falta aprender: muchas veces es un curso corto, como Excel.</p>
      <p>Por ejemplo, si en 5 avisos parecidos te falta lo mismo ("manejo de Excel"), ese es tu próximo curso. Este sitio tiene uno gratis.</p>` },
  ],
  practica: [
    "Elegí un aviso real y anotá en una tabla qué es excluyente, qué es deseable y qué ofrecen. Marcá cuántos requisitos excluyentes cumplís.",
    "Hacé una versión de tu CV adaptada a ese aviso, cambiando el objetivo, el orden y las palabras. Anotá cuántas palabras clave del aviso aparecen ahora en tu CV (solo las que son verdad).",
    "Usá el pedido de comparación con la IA y revisá cada fila de la tabla. Anotá si alguna fila estaba mal y cómo la corregiste.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Gobierno de Argentina: ley simple sobre el Portal Empleo", url: "https://www.argentina.gob.ar/node/247992" },
    { t: "Harvard Career Services: plantilla de CV con viñetas (en inglés)", url: "https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/" },
  ],
  quiz: [
    { q: "Un aviso dice \"Excluyente: secundario completo\" y vos lo terminaste. \"Se valorará: experiencia en caja\" y no tenés. ¿Te postulás?", opciones: ["No, tenés que cumplir todo","Sí, y decís que tenés experiencia en caja","Sí: cumplís lo excluyente y lo deseable no es obligatorio","No, solo si conocés a alguien"], correcta: 2, explicacion: "Lo deseable suma, pero no descarta. No postularte tienta por miedo a no cumplir todo, pero así te quedás afuera de puestos donde tenías chances." },
    { q: "El aviso dice \"Excluyente: disponibilidad turno noche\" y vos no podés de noche. ¿Qué hacés?", opciones: ["No te postulás a ese aviso","Te postulás y decís que sí podés","Te postulás y después ves","Te postulás sin mencionarlo"], correcta: 0, explicacion: "Si no cumplís un excluyente, no te van a tomar o vas a dejar el trabajo enseguida. Decir que sí tienta para tener una chance, pero arranca la relación con una mentira." },
    { q: "Un aviso pide pagar $15.000 de \"capacitación\" antes de empezar. ¿Qué concluís?", opciones: ["Que es normal en los primeros trabajos","Que vale la pena si el sueldo es alto","Que es un curso con certificado","Que es muy probablemente una estafa: un trabajo real no te cobra para trabajar"], correcta: 3, explicacion: "Cobrar para trabajar es una señal clásica de aviso falso. Que valga la pena por el sueldo tienta, pero el sueldo alto es parte del anzuelo." },
    { q: "¿Qué cambiás de tu CV base para adaptarlo a un aviso?", opciones: ["Agregás la experiencia que piden aunque no la tengas","El objetivo, el orden y las palabras, sin inventar nada","Nada: el mismo CV sirve para todo","Solo la foto"], correcta: 1, explicacion: "Adaptar es elegir qué mostrar primero y con qué palabras. Agregar lo que piden tienta para encajar, pero eso ya no es adaptar: es mentir." },
    { q: "El aviso pide \"manejo de medios de pago electrónicos\" y vos cobrabas con QR en la feria. ¿Cómo lo escribís?", opciones: ["\"Cobraba\"","\"Experto en sistemas de pago\"","\"Cobré en efectivo y con QR (medios de pago electrónicos)\"","No lo ponés porque no fue en una empresa"], correcta: 2, explicacion: "Usás la palabra del aviso para describir algo que sí hiciste. \"Experto\" tienta porque suena más, pero exagera lo que hiciste." },
    { q: "Una empresa grande usa un programa que lee los CV antes que una persona. ¿Qué te ayuda a pasarlo?", opciones: ["Usar las palabras del aviso que son verdad para vos y títulos simples","Poner todo dentro de una imagen linda","Repetir 50 veces las palabras del aviso en letra blanca","Usar títulos creativos como \"Mi viaje laboral\""], correcta: 0, explicacion: "Esos programas buscan las palabras del aviso en texto común. La letra blanca tienta como truco, pero es engañoso y quien lo descubre te descarta." },
    { q: "El aviso pide \"manejo de stock\" y nunca lo hiciste, pero llevaste la cuenta de la mercadería de la feria. ¿Qué ponés?", opciones: ["\"Manejo de stock: 2 años\"","Nada","\"Jefe de depósito\"","\"Llevé la cuenta de la mercadería de la feria en una planilla\""], correcta: 3, explicacion: "Algo parecido y verdadero vale más que un dato inventado. Copiar la palabra del aviso tienta, pero si no es verdad, te lo van a preguntar." },
    { q: "Mandaste 10 CV adaptados distintos. ¿Cómo sabés cuál mandaste a cada lado?", opciones: ["Te acordás de memoria","Guardando cada versión con el nombre del puesto y anotándolo","Mandás siempre la última versión","No hace falta saberlo"], correcta: 1, explicacion: "Si te llaman, tenés que saber qué CV leyeron. Acordarte de memoria tienta, pero con varios avisos a la vez se mezclan." },
    { q: "Querés que la IA compare tu CV con un aviso. ¿Cómo pegás los dos textos?", opciones: ["Todo junto en un solo párrafo","Solo el aviso","Separados con títulos y comillas triples, para que no los mezcle","Solo una foto del aviso"], correcta: 2, explicacion: "Separar el material evita que la IA confunda tu CV con el aviso. Pegar todo junto tienta por rápido, pero puede tomar requisitos del aviso como si fueran tuyos." },
    { q: "La IA marcó \"Sí\" en \"experiencia en caja\", pero vos solo cobraste en una feria. ¿Qué hacés?", opciones: ["Lo corregís a \"En parte\": revisás cada fila con tu CV","Lo dejás en \"Sí\", lo dijo la IA","Borrás la fila","Le pedís que ponga \"Sí\" en todo"], correcta: 0, explicacion: "La IA se puede equivocar al comparar. Dejarlo porque lo dijo la IA tienta, pero vos sos quien sabe qué hiciste de verdad." },
    { q: "En 5 avisos parecidos te falta lo mismo: \"manejo de Excel\". ¿Qué concluís?", opciones: ["Que esos avisos no son para vos nunca","Que hay que poner Excel en el CV igual","Que los avisos están mal","Que es lo próximo que conviene aprender"], correcta: 3, explicacion: "Lo que se repite en los avisos es lo que más se busca. Ponerlo igual tienta para no quedar afuera, pero en la primera tarea se nota." },
    { q: "Vas a pegar tu CV en el chat de la IA. ¿Qué sacás antes?", opciones: ["Tu experiencia","Tu DNI, tu dirección y tu teléfono","Tu objetivo","Tus estudios"], correcta: 1, explicacion: "Para comparar con el aviso la IA no necesita tus datos de contacto. Pegarlo completo tienta por rápido, pero esos datos quedan guardados en un servidor ajeno." },
  ],
},
{
  id: "carta",
  icono: "✉️",
  titulo: "Carta de presentación y mensajes",
  nivel: "Intermedio",
  objetivos: [
    "Escribir una carta de presentación de tres párrafos adaptada a un aviso",
    "Mandar un mail o un mensaje de postulación claro, con asunto y adjunto correctos",
    "Usar la IA para el borrador y dejarle tu voz y tus datos verdaderos",
  ],
  lecciones: [
    { titulo: "La carta en tres párrafos", html: `
      <p class="idea">La carta de presentación es un texto corto que acompaña el CV y responde una pregunta: ¿por qué vos para este puesto? No repite el CV: elige dos o tres cosas y las conecta con el aviso.</p>
      <p>No todos los avisos la piden, pero cuando la piden (o cuando escribís a una empresa sin aviso), hace la diferencia. Alcanza con tres párrafos:</p>
      <table>
        <tr><th>Párrafo</th><th>Qué dice</th></tr>
        <tr><td>1. Para qué escribís</td><td>El puesto y dónde viste el aviso</td></tr>
        <tr><td>2. Por qué vos</td><td>Dos o tres cosas tuyas que coinciden con lo que piden, con un ejemplo</td></tr>
        <tr><td>3. Cierre</td><td>Tu disponibilidad y que te gustaría una entrevista</td></tr>
      </table>
      <pre><code>Hola, mi nombre es Ana Gómez y les escribo por el aviso de cajera
para la sucursal de Zona Sur que vi en el Portal Empleo.

Durante dos años vendí en una feria los fines de semana: atendía unas
30 personas por día y cobraba en efectivo y con QR. Además, llevaba
las ventas en una planilla y cerraba la caja sin diferencias.

Tengo disponibilidad de lunes a sábado por la tarde y me gustaría
contarles más en una entrevista. Adjunto mi CV. Muchas gracias.</code></pre>
      <p>Fijate que usa las palabras del aviso (caja, atención al público, medios de pago) y un ejemplo con número, como en el módulo 1. Y es corta: se lee en menos de un minuto.</p>
      <p><strong>Errores comunes:</strong> empezar con "A quien corresponda" cuando se puede saber a quién va, contar toda tu historia, usar frases que sirven para cualquier puesto ("soy responsable y proactivo") y mandar la misma carta a todos lados con el nombre de otra empresa.</p>
      <p>Por ejemplo, la guía de CV y cartas de la oficina de carreras de Harvard recomienda conectar tus habilidades con lo que pide el aviso, en vez de listarlas sueltas.</p>` },
    { titulo: "El mail o el mensaje de postulación", html: `
      <p class="idea">Muchas postulaciones se hacen por mail o por WhatsApp. El mensaje es tu primera impresión: tiene que ser corto, prolijo y tener todo lo necesario para que te respondan.</p>
      <p><strong>Un mail de postulación:</strong></p>
      <pre><code>Asunto: Postulación cajera Zona Sur – Ana Gómez

Hola, buenos días:
Les escribo por el aviso de cajera para la sucursal de Zona Sur.
Tengo experiencia en atención al público y cobro, y disponibilidad
de lunes a sábado por la tarde. Adjunto mi CV.
Quedo atenta. Muchas gracias.

Ana Gómez
11 5555-5555</code></pre>
      <table>
        <tr><th>Revisá antes de mandar</th><th>Por qué</th></tr>
        <tr><td>El asunto dice el puesto y tu nombre</td><td>Así lo encuentran entre muchos mails</td></tr>
        <tr><td>Adjuntaste el CV correcto, en PDF</td><td>Es el error más común: mandar el mail sin el adjunto</td></tr>
        <tr><td>El nombre de la empresa y del puesto están bien</td><td>Si copiaste de otro mail, puede quedar el de otra empresa</td></tr>
        <tr><td>Tus datos de contacto están al final</td><td>Para que te puedan llamar</td></tr>
      </table>
      <p><strong>Por WhatsApp</strong>, todavía más corto: saludo, para qué escribís, una frase sobre vos y el CV adjunto en PDF. Sin audios, salvo que te los pidan, y en horario de trabajo.</p>
      <p><strong>Escribir sin aviso.</strong> También podés escribirle a un comercio o una empresa que te interesa aunque no haya publicado un aviso. Es lo mismo, pero en el primer párrafo decís por qué te interesa ese lugar. A veces guardan el CV para cuando necesiten.</p>
      <p>Por ejemplo, si en tu barrio hay un supermercado que abre una sucursal nueva, un mensaje corto con tu CV antes de que publiquen el aviso te puede poner primero en la fila.</p>` },
    { titulo: "El borrador con IA y tu voz", html: `
      <p class="idea">La IA escribe muy bien un primer borrador de carta. El problema es que todas las cartas hechas con IA se parecen. Usala para el borrador y después dejale tu voz y tus ejemplos reales.</p>
      <pre><code>Escribí una carta de presentación de 3 párrafos cortos para este aviso.
Párrafo 1: el puesto y dónde lo vi (Portal Empleo).
Párrafo 2: conectá 2 cosas de mi experiencia con lo que pide el aviso,
con un ejemplo con número.
Párrafo 3: mi disponibilidad y que me gustaría una entrevista.
Tono: amable y simple, como escribe una persona joven, no formal de más.

Reglas: usá solo mi experiencia de abajo. No inventes nada.

AVISO:
"""
(pegás el aviso)
"""

MI EXPERIENCIA:
"""
(pegás tu inventario del módulo 0 o tu CV, sin datos personales)
"""</code></pre>
      <p><strong>Después, dejale tu voz.</strong> Leé el borrador en voz alta. Si hay frases que nunca dirías, cambialas:</p>
      <table>
        <tr><th>La IA suele escribir</th><th>Más natural</th></tr>
        <tr><td>"Me dirijo a ustedes con gran entusiasmo"</td><td>"Les escribo por el aviso de..."</td></tr>
        <tr><td>"Estoy convencida de que mi perfil se alinea perfectamente"</td><td>"Creo que puedo hacer bien este trabajo porque..."</td></tr>
        <tr><td>"Aportar valor a su prestigiosa organización"</td><td>"Me gustaría sumarme a su equipo"</td></tr>
      </table>
      <p>Un truco del curso de prompts: pasale a la IA 2 o 3 mensajes que escribiste vos, para que copie tu forma de escribir.</p>
      <p><strong>La última revisión es tuya:</strong> que todo sea verdad, que el nombre de la empresa y del puesto estén bien, y que puedas contar en la entrevista cada cosa que dice la carta.</p>
      <p>Por ejemplo, quien lee muchas cartas reconoce enseguida las que son todas iguales. Una frase tuya, concreta ("los sábados de diciembre atendíamos el doble de gente"), vale más que tres párrafos perfectos y genéricos.</p>` },
  ],
  practica: [
    "Escribí una carta de tres párrafos para un aviso real, con al menos un ejemplo con número. Contá cuántas palabras tiene y dejala en menos de 200.",
    "Armá el mail de postulación para ese aviso con asunto, cuerpo corto, adjunto y firma. Mandátelo a vos mismo primero y anotá si el adjunto llegó bien.",
    "Pedí a la IA un borrador de carta con el pedido de la lección y marcá las frases que nunca dirías. Anotá cuántas cambiaste.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Harvard Career Services: recursos para CV y cartas (en inglés)", url: "https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/" },
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Tenés que escribir una carta de presentación. ¿Qué pregunta tiene que responder?", opciones: ["¿Cuál es toda tu historia laboral?","¿Cuánto querés ganar?","¿Por qué vos para este puesto?","¿Qué te gusta hacer los fines de semana?"], correcta: 2, explicacion: "La carta conecta dos o tres cosas tuyas con el aviso. Contar toda tu historia tienta para no olvidarte nada, pero eso ya está en el CV." },
    { q: "¿Qué va en el segundo párrafo de la carta?", opciones: ["Dos o tres cosas tuyas que coinciden con el aviso, con un ejemplo","Tu dirección","Una lista de todos tus cursos","Una disculpa por no tener experiencia"], correcta: 0, explicacion: "Es el párrafo que convence. Disculparte tienta si tenés poca experiencia, pero pone el foco en lo que te falta en vez de en lo que tenés." },
    { q: "Tu carta dice \"soy responsable, proactivo y trabajo en equipo\". ¿Cómo la mejorás?", opciones: ["Agregando más adjetivos","Poniéndolo en negrita","Dejándolo, es lo que piden","Con un ejemplo concreto que lo muestre, como cerrar la caja sin diferencias"], correcta: 3, explicacion: "Las frases que sirven para cualquiera no diferencian a nadie. Agregar más adjetivos tienta, pero sin un ejemplo nadie se los cree." },
    { q: "Copiaste una carta que mandaste a otra empresa. ¿Qué revisás antes de mandarla?", opciones: ["Nada, es la misma","Que el nombre de la empresa y del puesto sean los correctos","Solo la ortografía","Que sea más larga"], correcta: 1, explicacion: "Mandar una carta con el nombre de otra empresa es de los errores que más descartan. Pensar que es la misma tienta por rápido, pero el que la lee se da cuenta enseguida." },
    { q: "¿Qué asunto le ponés a un mail de postulación?", opciones: ["\"Hola\"","\"CV\"","\"Postulación cajera Zona Sur – Ana Gómez\"","Ninguno"], correcta: 2, explicacion: "El puesto y tu nombre ayudan a encontrar el mail entre muchos. \"CV\" tienta por corto, pero no dice para qué puesto ni de quién es." },
    { q: "Mandaste el mail de postulación y te diste cuenta de que no adjuntaste el CV. ¿Qué podías haber hecho para evitarlo?", opciones: ["Mandártelo primero a vos mismo y revisar que el adjunto llegue","Mandarlo dos veces","Escribir \"adjunto\" en mayúsculas","No hay forma de evitarlo"], correcta: 0, explicacion: "Probar con vos mismo muestra si falta algo. Mandarlo dos veces tienta para asegurarte, pero si el primero no tenía adjunto, el segundo tampoco." },
    { q: "Te postulás por WhatsApp. ¿Qué mandás?", opciones: ["Un audio de 3 minutos contando tu vida","Solo el CV sin decir nada","Una foto del CV impreso","Un mensaje corto: saludo, para qué escribís, una frase sobre vos y el CV en PDF"], correcta: 3, explicacion: "Corto y con el CV en PDF es fácil de leer y responder. El audio tienta porque es más rápido de hacer, pero obliga al otro a escucharlo entero." },
    { q: "Un supermercado de tu barrio va a abrir una sucursal nueva y todavía no publicó avisos. ¿Qué podés hacer?", opciones: ["Esperar a que publiquen el aviso","Mandarles un mensaje corto con tu CV diciendo por qué te interesa","Ir y exigir un puesto","Nada, sin aviso no se puede"], correcta: 1, explicacion: "Escribir sin aviso te puede poner primero en la fila. Esperar tienta porque parece lo correcto, pero cuando sale el aviso se postula mucha más gente." },
    { q: "La IA te escribió \"me dirijo a ustedes con gran entusiasmo para aportar valor a su prestigiosa organización\". ¿Qué hacés?", opciones: ["Lo dejás, suena profesional","Lo agregás también al CV","Lo cambiás por algo más natural, como \"les escribo por el aviso de...\"","Le pedís que lo haga más largo"], correcta: 2, explicacion: "Esas frases se repiten en muchas cartas hechas con IA. Que suena profesional tienta, pero quien lee muchas cartas las reconoce enseguida." },
    { q: "Querés que el borrador de la IA suene a vos. ¿Qué le pasás?", opciones: ["2 o 3 mensajes que escribiste vos, para que copie tu forma de escribir","Tu foto","Tu DNI","Una carta de otra persona"], correcta: 0, explicacion: "Con ejemplos tuyos, la IA copia tu estilo. La carta de otra persona tienta como modelo, pero entonces sonaría a esa persona." },
    { q: "En el pedido de carta a la IA, ¿por qué separás el aviso y tu experiencia con comillas triples?", opciones: ["Para que la carta sea más larga","Porque la IA no lee sin comillas","Para que quede más lindo","Para que la IA no mezcle lo que pide el aviso con lo que hiciste vos"], correcta: 3, explicacion: "Separar el material evita que tome requisitos del aviso como si fueran tu experiencia. Pensar que no lee sin comillas tienta, pero lee igual: lo que cambia es que no se confunde." },
    { q: "La carta que te armó la IA dice que trabajaste en una cadena de supermercados, y fue en una feria. ¿Qué hacés?", opciones: ["Lo dejás, suena mejor","Lo corregís: todo lo que diga la carta lo tenés que poder contar en la entrevista","Lo dejás y después explicás","Borrás la carta y no mandás nada"], correcta: 1, explicacion: "Un dato falso en la carta se descubre en la entrevista. Dejarlo y explicar después tienta, pero arrancás la entrevista justificando una mentira." },
  ],
},
{
  id: "donde-buscar",
  icono: "🗺️",
  titulo: "Dónde buscar y cómo organizarte",
  nivel: "Intermedio",
  objetivos: [
    "Usar al menos tres canales de búsqueda: portales, oficinas de empleo y contactos",
    "Registrarte en el Portal Empleo y saber qué ofrecen las oficinas de empleo",
    "Llevar la búsqueda en una planilla con fechas y próximos pasos",
  ],
  lecciones: [
    { titulo: "Los canales: portales, oficinas y contactos", html: `
      <p class="idea">No hay un solo lugar para buscar trabajo. Los que consiguen trabajo más rápido suelen combinar varios canales: portales de empleo, oficinas de empleo, redes y, sobre todo, la gente que conocen.</p>
      <table>
        <tr><th>Canal</th><th>Qué es</th><th>Para qué sirve</th></tr>
        <tr><td><strong>Portal Empleo</strong></td><td>La plataforma gratuita del Gobierno para buscar trabajo</td><td>Avisos, cursos gratuitos con certificado y un perfil laboral</td></tr>
        <tr><td><strong>Oficinas de empleo</strong></td><td>Oficinas, muchas veces del municipio, que asesoran a quien busca trabajo</td><td>Orientación, talleres, cursos y avisos de tu zona</td></tr>
        <tr><td><strong>Portales privados</strong></td><td>Páginas de avisos de empresas y consultoras</td><td>Muchos avisos; filtrás por zona y puesto</td></tr>
        <tr><td><strong>LinkedIn</strong></td><td>Una red social para el trabajo</td><td>Avisos y contactos (módulo 5)</td></tr>
        <tr><td><strong>Tus contactos</strong></td><td>Familia, amigos, vecinos, ex compañeros</td><td>Muchos trabajos se consiguen por recomendación</td></tr>
      </table>
      <p>La guía oficial del Gobierno recomienda justamente eso: buscar en portales, en el Portal Empleo y en LinkedIn, y contarles a tus contactos que estás buscando.</p>
      <p><strong>Contar que buscás.</strong> Da un poco de vergüenza, pero funciona. Un mensaje corto a tus contactos:</p>
      <pre><code>¡Hola! Estoy buscando trabajo en atención al público o en caja,
en zona sur. Tengo experiencia en ventas y disponibilidad por la tarde.
Si te enterás de algo, ¿me avisás? Te paso mi CV por si lo querés
reenviar. ¡Gracias!</code></pre>
      <p>Fijate que dice qué buscás, dónde y qué ofrecés. "Si sabés de algo, avisame" a secas es más difícil de ayudar.</p>
      <p>Por ejemplo, un vecino que trabaja en un depósito puede saber que van a tomar gente antes de que salga el aviso. Si sabe que buscás y tiene tu CV, te puede recomendar.</p>` },
    { titulo: "El Portal Empleo y las oficinas de empleo", html: `
      <p class="idea">El Estado tiene servicios gratuitos para quien busca trabajo. Muchas personas no los usan porque no saben que existen.</p>
      <p><strong>El Portal Empleo</strong> es una plataforma digital gratuita del Gobierno nacional, creada por la Resolución 152/2021. Según la información oficial y las notas que lo explican:</p>
      <ul>
        <li>Te registrás con tu CUIL y completás tu perfil laboral.</li>
        <li>Podés ver avisos de empresas y postularte.</li>
        <li>Tiene cursos de capacitación gratuitos, con certificado que se descarga desde el portal.</li>
      </ul>
      <p><strong>Las oficinas de empleo</strong> y las agencias territoriales asesoran en persona: te ayudan con el CV, te cuentan qué programas hay y te muestran cómo usar el portal. La página "Buscás trabajo" del Gobierno tiene un mapa para encontrar la más cercana.</p>
      <table>
        <tr><th>Servicio</th><th>Te sirve si...</th></tr>
        <tr><td>Portal Empleo</td><td>Querés ver avisos y hacer cursos gratis con certificado</td></tr>
        <tr><td>Oficina de empleo de tu municipio</td><td>Querés que alguien te oriente en persona</td></tr>
        <tr><td>Programas de la Secretaría de Trabajo</td><td>Buscás capacitación o querés empezar algo por tu cuenta</td></tr>
      </table>
      <p>Los programas cambian según el momento: lo que está disponible hoy lo vas a encontrar en la página oficial "Buscás trabajo" o preguntando en la oficina de empleo.</p>
      <p>Por ejemplo, si te faltaba Excel en varios avisos (módulo 2), fijate si hay un curso en el Portal Empleo: además de aprender, sumás un certificado al CV. También podés hacer el curso de Excel de este sitio.</p>
      <p><strong>Cuidado con los intermediarios que cobran.</strong> Los servicios del Portal Empleo y de las oficinas de empleo son gratuitos. Si alguien te cobra para "anotarte" o para "conseguirte un puesto", desconfiá.</p>` },
    { titulo: "Organizar la búsqueda en una planilla", html: `
      <p class="idea">Buscar trabajo es un trabajo en sí mismo. Si mandás muchos CV sin anotar, te olvidás a quién escribiste, cuándo y qué CV mandaste. Una planilla simple lo resuelve.</p>
      <pre><code>Fecha   Empresa        Puesto    Canal          CV mandado     Estado        Próximo paso
05/03   Super del Sur  Cajera    Portal Empleo  CV-cajera.pdf  Postulada     Escribir el 12/03
06/03   Farmacia Luz   Vendedora Contacto (tía) CV-ventas.pdf  Entrevista    Ir el 10/03 a las 10
08/03   Depósito Norte Repositor LinkedIn       CV-base.pdf    Sin respuesta Escribir el 15/03</code></pre>
      <p>Con esa planilla (en Excel o Google Sheets) podés:</p>
      <ul>
        <li><strong>Saber qué CV mandaste</strong> a cada lugar, antes de una entrevista.</li>
        <li><strong>Hacer seguimiento:</strong> si en una semana no te respondieron, mandás un mensaje corto preguntando.</li>
        <li><strong>Medir:</strong> cuántas postulaciones hiciste, cuántas respuestas recibiste y por qué canal. Si un canal no te da respuestas, dedicale menos tiempo.</li>
      </ul>
      <table>
        <tr><th>Medida</th><th>Cómo se calcula</th><th>Ejemplo</th></tr>
        <tr><td>Postulaciones por semana</td><td>Contás las filas de la semana</td><td>10</td></tr>
        <tr><td>Tasa de respuesta</td><td>Respuestas divididas por postulaciones</td><td>2 de 10 = 20%</td></tr>
      </table>
      <p>Si sabés usar CONTAR.SI, podés contar automáticamente cuántas dicen "Entrevista" (el curso de Excel de este sitio lo enseña).</p>
      <p><strong>Una meta realista.</strong> Ponete una meta semanal que dependa de vos, no del resultado: por ejemplo, 10 postulaciones adaptadas, 3 mensajes a contactos y 1 curso. No controlás si te llaman, pero sí cuánto buscás.</p>
      <p>Por ejemplo, si después de 30 postulaciones nadie te llamó, no es que no sirvas: es una señal para revisar el CV (módulos 1 y 2) o el tipo de puesto (módulo 0).</p>` },
  ],
  practica: [
    "Mandá el mensaje de \"estoy buscando\" a al menos 5 contactos, con qué buscás, dónde y qué ofrecés. Anotá cuántos te respondieron en una semana.",
    "Registrate en el Portal Empleo o buscá la oficina de empleo más cercana en la página oficial \"Buscás trabajo\". Anotá qué servicio o curso te puede servir.",
    "Armá la planilla de búsqueda con las 7 columnas y cargá todas tus postulaciones. Después de una semana, calculá tu tasa de respuesta y anotala.",
  ],
  recursos: [
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
    { t: "Gobierno de Argentina: ley simple sobre el Portal Empleo", url: "https://www.argentina.gob.ar/node/247992" },
    { t: "Gobierno de Argentina: buscás trabajo (oficinas de empleo y programas)", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
  ],
  quiz: [
    { q: "Buscás trabajo solo en un portal privado y no te llaman. ¿Qué cambiás?", opciones: ["Mandás más CV en el mismo portal","Dejás de buscar un tiempo","Sumás otros canales: Portal Empleo, oficinas de empleo y tus contactos","Pagás para que te consigan trabajo"], correcta: 2, explicacion: "Combinar canales aumenta las chances. Mandar más en el mismo portal tienta porque es lo que ya hacés, pero repetís el mismo resultado." },
    { q: "Te da vergüenza contarles a tus conocidos que buscás trabajo. ¿Por qué conviene hacerlo igual?", opciones: ["Porque muchos trabajos se consiguen por recomendación","Porque te van a dar plata","Porque es obligatorio","No conviene, es mejor que nadie sepa"], correcta: 0, explicacion: "Un contacto puede saber de un puesto antes del aviso. Que nadie sepa tienta por vergüenza, pero te cierra una de las vías que mejor funcionan." },
    { q: "¿Cuál de estos mensajes a tus contactos ayuda más?", opciones: ["\"Si sabés de algo, avisame\"","\"Necesito trabajo urgente, lo que sea\"","Solo el CV sin texto","Uno que dice qué buscás, en qué zona y qué ofrecés, con el CV"], correcta: 3, explicacion: "Con datos concretos es fácil ayudarte. \"Lo que sea\" tienta para no perder nada, pero tus contactos no saben qué recomendarte." },
    { q: "Querés registrarte en el Portal Empleo. ¿Qué te piden?", opciones: ["Un pago de inscripción","Tu CUIL y completar tu perfil laboral","Una recomendación de un político","Un título universitario"], correcta: 1, explicacion: "Es un servicio gratuito del Gobierno. Un pago tienta pensarlo porque algunos servicios privados cobran, pero el Portal Empleo no cobra." },
    { q: "Querés que alguien te oriente en persona con tu CV y te cuente qué programas hay. ¿Dónde vas?", opciones: ["A cualquier empresa a preguntar","A un banco","A la oficina de empleo de tu municipio o una agencia territorial","A una agencia que te cobra"], correcta: 2, explicacion: "Las oficinas de empleo asesoran gratis. Una agencia que cobra tienta porque promete resultados, pero el servicio público es gratuito." },
    { q: "Alguien te ofrece \"anotarte en el Portal Empleo\" a cambio de un pago. ¿Qué pensás?", opciones: ["Que desconfiás: el Portal Empleo y las oficinas de empleo son gratuitos","Que es un servicio normal","Que conviene pagar para ir más rápido","Que así te dan prioridad"], correcta: 0, explicacion: "Los servicios públicos de empleo no se cobran. Ir más rápido tienta, pero estarías pagando por algo gratuito o cayendo en una estafa." },
    { q: "Te faltaba Excel en varios avisos. ¿Qué te puede ofrecer el Portal Empleo?", opciones: ["Un título universitario","Un trabajo asegurado","Plata para estudiar en cualquier lado","Cursos gratuitos con certificado"], correcta: 3, explicacion: "El portal tiene cursos de capacitación gratuitos con certificado. Un trabajo asegurado tienta como promesa, pero ningún servicio puede garantizarlo." },
    { q: "Te llaman para una entrevista y no te acordás qué CV mandaste a esa empresa. ¿Qué te habría ayudado?", opciones: ["Mandar siempre el mismo CV","Una planilla con la fecha, la empresa y el CV que mandaste a cada lugar","Memorizar todo","Preguntarle a la empresa"], correcta: 1, explicacion: "La planilla guarda qué mandaste a cada lado. Mandar siempre el mismo tienta para no tener que anotar, pero pierde la ventaja de adaptar el CV." },
    { q: "Mandaste 10 postulaciones y te respondieron 2. ¿Cuál es tu tasa de respuesta?", opciones: ["2%","10%","20%","50%"], correcta: 2, explicacion: "Respuestas divididas por postulaciones: 2 / 10 = 0,2, o sea 20%. 2% tienta porque ves el 2, pero sería si te hubieran respondido 2 de 100." },
    { q: "Hace una semana te postulaste y no te respondieron. ¿Qué hacés?", opciones: ["Mandás un mensaje corto preguntando si recibieron tu postulación","Mandás 5 mensajes en un día","Das por perdido el puesto sin hacer nada","Te presentás sin avisar a exigir una respuesta"], correcta: 0, explicacion: "Un seguimiento amable muestra interés. Mandar muchos mensajes tienta por ansiedad, pero da una mala impresión." },
    { q: "¿Cuál es una buena meta semanal de búsqueda?", opciones: ["Conseguir trabajo esta semana","Que me llamen 5 empresas","Mandar 200 CV iguales","10 postulaciones adaptadas, 3 mensajes a contactos y 1 curso"], correcta: 3, explicacion: "Una meta que depende de vos se puede cumplir. \"Conseguir trabajo esta semana\" tienta porque es lo que querés, pero no depende solo de vos y frustra." },
    { q: "Después de 30 postulaciones nadie te llamó. ¿Qué concluís?", opciones: ["Que no servís para trabajar","Que conviene revisar el CV y el tipo de puesto al que te postulás","Que hay que mandar 30 más iguales","Que no hay trabajo en ningún lado"], correcta: 1, explicacion: "Es una señal para ajustar, no un juicio sobre vos. Mandar 30 más iguales tienta por persistencia, pero si algo falla en el CV, va a fallar igual." },
  ],
},
{
  id: "linkedin",
  icono: "💼",
  titulo: "Tu perfil en LinkedIn",
  nivel: "Intermedio",
  objetivos: [
    "Armar un perfil de LinkedIn con foto, titular, extracto y experiencia",
    "Conectar con personas y empresas de forma útil, sin pedir trabajo de entrada",
    "Cuidar tu privacidad y reconocer ofertas falsas dentro de la red",
  ],
  lecciones: [
    { titulo: "Un perfil que se encuentra", html: `
      <p class="idea">LinkedIn es una red social para el trabajo. Las empresas y las consultoras la usan para buscar gente. Un perfil completo es como un CV que trabaja solo: te pueden encontrar aunque vos no te hayas postulado.</p>
      <p>La ayuda oficial de LinkedIn recomienda completar las partes principales del perfil. Estas son las que más importan:</p>
      <table>
        <tr><th>Parte</th><th>Qué poner</th><th>Ejemplo</th></tr>
        <tr><td><strong>Foto</strong></td><td>De frente, con buena luz, fondo simple y cara visible</td><td>Una foto tuya sola, no de un casamiento</td></tr>
        <tr><td><strong>Titular</strong></td><td>Lo que hacés o buscás, en una línea, con palabras clave</td><td>"Atención al público y caja | Ventas | Disponible zona sur"</td></tr>
        <tr><td><strong>Acerca de</strong> (extracto)</td><td>Tres o cuatro frases sobre vos: tu objetivo del módulo 0, más un ejemplo</td><td>"Vendí durante dos años en una feria..."</td></tr>
        <tr><td><strong>Experiencia</strong></td><td>Los mismos puntos del CV, con verbos y números</td><td>"Atendí unas 30 personas por día"</td></tr>
        <tr><td><strong>Aptitudes</strong></td><td>Las palabras clave de los avisos que son verdad para vos</td><td>Atención al cliente, Excel, cobro</td></tr>
        <tr><td><strong>Ubicación</strong></td><td>Tu ciudad o zona</td><td>Lomas de Zamora, Buenos Aires</td></tr>
      </table>
      <p><strong>El titular importa mucho.</strong> Es lo que aparece debajo de tu nombre en las búsquedas. Si dice solo "Buscando oportunidades", nadie sabe qué buscás. Con las palabras del puesto, aparecés cuando alguien busca eso.</p>
      <p><strong>"Disponible para trabajar".</strong> LinkedIn tiene una opción para avisar que estás buscando. Podés elegir que la vean solo las personas que buscan candidatos o todo el mundo.</p>
      <p>Por ejemplo, el extracto puede ser casi igual a tu objetivo laboral del módulo 0, con un ejemplo de tu experiencia. No hace falta escribir algo nuevo: reusá lo que ya armaste.</p>` },
    { titulo: "Contactos y cómo escribirles", html: `
      <p class="idea">En LinkedIn, tu red (tus contactos) es lo que más ayuda. No hace falta tener miles: alcanza con conectar con gente que conocés y con personas del rubro que te interesa.</p>
      <p><strong>Con quién conectar:</strong></p>
      <ul>
        <li>Gente que conocés: ex compañeros de escuela, del curso, de trabajos o changas.</li>
        <li>Personas que trabajan en empresas donde te gustaría trabajar.</li>
        <li>Quienes publican avisos del rubro (personas de recursos humanos y consultoras).</li>
      </ul>
      <p><strong>Siempre con una nota.</strong> Al pedir la conexión, agregá una frase que diga por qué:</p>
      <pre><code>Hola, Laura. Vi que trabajás en recursos humanos en Super del Sur.
Estoy buscando mi primer trabajo en caja y me interesa mucho la empresa.
¿Te puedo hacer una consulta sobre cómo suelen buscar gente? ¡Gracias!</code></pre>
      <table>
        <tr><th>Mejor no</th><th>Mejor sí</th></tr>
        <tr><td>"Necesito trabajo, ¿me conseguís algo?" en el primer mensaje</td><td>Una consulta concreta y corta</td></tr>
        <tr><td>Mandar el mismo mensaje a 100 personas</td><td>Pocas personas, con un mensaje pensado para cada una</td></tr>
        <tr><td>Insistir si no responden</td><td>Esperar o probar con otra persona</td></tr>
      </table>
      <p><strong>Pedir una recomendación.</strong> LinkedIn permite que otras personas escriban una recomendación en tu perfil. Si hiciste una changa o un voluntariado, pedile a la persona responsable que escriba dos líneas sobre cómo trabajaste. Vale mucho para un primer empleo.</p>
      <p><strong>Publicar.</strong> No es obligatorio, pero si terminás un curso (como este), podés compartir el certificado con una frase sobre qué aprendiste. Muestra que te estás formando.</p>
      <p>Por ejemplo, una consulta concreta a una persona de recursos humanos ("¿qué valoran en un primer empleo?") tiene muchas más chances de respuesta que un "¿me conseguís trabajo?".</p>` },
    { titulo: "Privacidad y ofertas falsas", html: `
      <p class="idea">LinkedIn es útil, pero es pública: cualquiera puede ver tu perfil. Y como en cualquier red, hay perfiles y ofertas falsas que buscan tus datos o tu plata.</p>
      <p><strong>Lo que no ponés en el perfil:</strong></p>
      <ul>
        <li>Tu DNI, tu dirección exacta o tu fecha de nacimiento completa.</li>
        <li>Tu teléfono a la vista de todos: ponelo en el CV que mandás, no en el perfil público.</li>
        <li>Datos de tu familia.</li>
      </ul>
      <p><strong>Señales de una oferta falsa en LinkedIn</strong> (las mismas del curso de seguridad digital de este sitio):</p>
      <table>
        <tr><th>Señal</th><th>Ejemplo</th></tr>
        <tr><td>Te ofrecen un puesto sin entrevista y con un sueldo muy alto</td><td>"Te elegimos para un trabajo remoto de 2 horas por día"</td></tr>
        <tr><td>Te piden pasar a WhatsApp o Telegram enseguida</td><td>"Para seguir, escribile a mi asistente a este número"</td></tr>
        <tr><td>Te piden plata o datos bancarios antes de empezar</td><td>"Pagá el kit de bienvenida" o "pasame tu CBU y tu clave para cargarte el sueldo"</td></tr>
        <tr><td>El perfil es nuevo, con pocos contactos y sin historia</td><td>Una "reclutadora" con 12 contactos y ninguna publicación</td></tr>
      </table>
      <p><strong>Cómo verificar una oferta:</strong> buscá la empresa por tu cuenta (su página web oficial, su página de LinkedIn verificada) y fijate si el aviso aparece ahí. Si una persona dice trabajar en la empresa, fijate si su perfil la nombra desde hace tiempo y si tiene contactos de esa empresa.</p>
      <p>Para cobrar un sueldo alcanza con tu CBU o tu alias. Nadie necesita tu clave del banco, un código ni que pagues nada.</p>
      <p>Por ejemplo, si una "reclutadora" te escribe por un trabajo que no buscaste y a los dos mensajes te pide pasar a Telegram, cortá ahí y reportá el perfil.</p>` },
  ],
  practica: [
    "Armá tu perfil de LinkedIn con foto, titular, acerca de, experiencia, aptitudes y ubicación. Anotá cuántas de las 6 partes completaste.",
    "Escribí tu titular con palabras clave de los avisos que te interesan. Compará cuántas palabras clave tenía tu titular antes y cuántas tiene ahora.",
    "Mandá 3 solicitudes de conexión con una nota personalizada a personas del rubro que te interesa. Anotá cuántas aceptaron en una semana.",
  ],
  recursos: [
    { t: "Ayuda de LinkedIn: crear un buen perfil", url: "https://www.linkedin.com/help/linkedin/answer/a554351?lang=es" },
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "BCRA: 10 recomendaciones para prevenir estafas virtuales", url: "https://www.bcra.gob.ar/noticias/el-banco-central-recuerda-10-recomendaciones-para-prevenir-estafas-virtuales/" },
  ],
  quiz: [
    { q: "Tu titular de LinkedIn dice \"Buscando nuevas oportunidades\". ¿Cómo lo mejorás?", opciones: ["Con más signos de exclamación","Dejándolo vacío","Con lo que hacés o buscás y palabras clave: \"Atención al público y caja | Ventas\"","Con una frase motivadora"], correcta: 2, explicacion: "El titular aparece en las búsquedas y con palabras del puesto te encuentran. Una frase motivadora tienta para llamar la atención, pero no dice qué hacés." },
    { q: "¿Qué foto conviene para LinkedIn?", opciones: ["De frente, con buena luz, fondo simple y cara visible","Una de un casamiento con otras personas","Un dibujo o un logo","Una con anteojos de sol en la playa"], correcta: 0, explicacion: "La foto es la primera impresión. La del casamiento tienta porque saliste lindo, pero no se sabe cuál de todos sos." },
    { q: "No sabés qué escribir en \"Acerca de\". ¿Qué reusás?", opciones: ["Una carta de presentación de otra persona","Tu historia desde el jardín de infantes","Una lista de 30 aptitudes","Tu objetivo laboral del módulo 0, con un ejemplo de tu experiencia"], correcta: 3, explicacion: "Ya tenés el objetivo armado y sirve igual. Una lista larga tienta para mostrar mucho, pero el extracto es para contar quién sos en pocas frases." },
    { q: "Querés conectar con una persona de recursos humanos que no conocés. ¿Qué hacés?", opciones: ["Le mandás la solicitud sin nota","Le mandás la solicitud con una nota corta que diga por qué y una consulta concreta","Le escribís \"¿me conseguís trabajo?\"","Le mandás tu CV sin decir nada"], correcta: 1, explicacion: "Una nota concreta tiene más chances de respuesta. Pedir trabajo de entrada tienta porque es lo que necesitás, pero pone a la otra persona en un compromiso." },
    { q: "Mandaste un mensaje a alguien y no te respondió. ¿Qué hacés?", opciones: ["Le escribís todos los días","Le dejás un comentario público quejándote","Esperás o probás con otra persona","Le escribís desde otra cuenta"], correcta: 2, explicacion: "Mucha gente no responde por falta de tiempo. Insistir todos los días tienta por ansiedad, pero da una mala impresión." },
    { q: "Hiciste un voluntariado y la coordinadora quedó contenta con tu trabajo. ¿Qué le podés pedir?", opciones: ["Que escriba una recomendación de dos líneas en tu LinkedIn","Que te consiga trabajo","Que te preste su perfil","Nada, el voluntariado no cuenta"], correcta: 0, explicacion: "Una recomendación vale mucho en un primer empleo. Pensar que el voluntariado no cuenta tienta, pero muestra cómo trabajás." },
    { q: "Terminaste un curso de este sitio. ¿Qué podés publicar en LinkedIn?", opciones: ["Nada, no se publica","Las respuestas del quiz","Que sos experto en el tema","El certificado con una frase sobre qué aprendiste"], correcta: 3, explicacion: "Mostrar que te formás suma. Decir que sos experto tienta para impresionar, pero un curso inicial no te hace experto y se nota." },
    { q: "¿Qué dato no ponés en tu perfil público de LinkedIn?", opciones: ["Tu ciudad","Tu DNI y tu dirección exacta","Tu experiencia","Tus aptitudes"], correcta: 1, explicacion: "El perfil lo ve cualquiera. Poner más datos tienta para que te contacten fácil, pero el DNI y la dirección te exponen a estafas." },
    { q: "Una \"reclutadora\" te ofrece un trabajo remoto muy bien pago sin entrevista y te pide pasar a Telegram. ¿Qué concluís?", opciones: ["Que tuviste suerte","Que es normal en los trabajos remotos","Que tiene varias señales de oferta falsa","Que hay que aceptar rápido antes de que se lo den a otro"], correcta: 2, explicacion: "Sin entrevista, sueldo alto y pasar a otra app son señales de estafa. Aceptar rápido tienta por miedo a perderlo, pero el apuro es parte del engaño." },
    { q: "Te piden tu CBU y tu clave del banco \"para cargarte el sueldo\". ¿Qué hacés?", opciones: ["No das la clave nunca: para cobrar alcanza con el CBU o el alias","Das las dos cosas, es para cobrar","Das solo la clave","Das la clave si la empresa es conocida"], correcta: 0, explicacion: "Nadie necesita tu clave para pagarte. Que la empresa sea conocida tienta como garantía, pero cualquiera puede decir que trabaja en una empresa conocida." },
    { q: "Querés verificar si una oferta de LinkedIn es real. ¿Qué hacés?", opciones: ["Le preguntás a la reclutadora si es real","Confiás si tiene logo","Hacés clic en el link que te mandó","Buscás la empresa por tu cuenta y te fijás si el aviso aparece en su página oficial"], correcta: 3, explicacion: "Verificar por tu cuenta evita el link del estafador. Preguntarle si es real tienta, pero un estafador siempre va a decir que sí." },
    { q: "El perfil de una \"reclutadora\" tiene 12 contactos, ninguna publicación y se creó hace una semana. ¿Qué pensás?", opciones: ["Que es nueva en LinkedIn y está todo bien","Que es una señal de perfil falso: conviene desconfiar","Que es una persona muy reservada","Que es de una empresa grande"], correcta: 1, explicacion: "Los perfiles falsos suelen ser nuevos y sin historia. Pensar que es nueva tienta, y puede pasar, pero junto con otras señales conviene verificar antes de dar datos." },
  ],
},
{
  id: "entrevista",
  icono: "🎤",
  titulo: "La entrevista: prepararte y practicar con IA",
  nivel: "Intermedio",
  objetivos: [
    "Preparar la entrevista: la empresa, el puesto, la logística y qué llevar",
    "Contar tus experiencias con el método STAR en menos de dos minutos",
    "Practicar una entrevista completa con la IA como entrevistador y mejorar con su devolución",
  ],
  lecciones: [
    { titulo: "Antes: averiguar, organizar y llegar", html: `
      <p class="idea">La mitad de una buena entrevista se juega antes: saber a qué empresa vas, qué hace el puesto y llegar a tiempo, tranquilo y con lo necesario.</p>
      <p>La guía oficial del Gobierno recomienda confirmar antes la empresa, el puesto y los datos de la entrevista, y llevar el CV actualizado. Una lista para el día anterior:</p>
      <table>
        <tr><th>Qué</th><th>Cómo</th></tr>
        <tr><td>La empresa</td><td>Mirá su página o sus redes: qué vende, dónde está, cuántas sucursales tiene</td></tr>
        <tr><td>El puesto</td><td>Releé el aviso y tu CV adaptado (fijate en tu planilla cuál mandaste)</td></tr>
        <tr><td>La logística</td><td>Dirección, horario, con quién preguntás, cómo llegás y cuánto tardás</td></tr>
        <tr><td>Qué llevar</td><td>CV impreso, DNI, algo para anotar</td></tr>
        <tr><td>Si es por videollamada</td><td>Probá antes la aplicación, la cámara y el micrófono; elegí un lugar con luz y sin ruido</td></tr>
      </table>
      <p><strong>El día de la entrevista,</strong> según la misma guía: sé puntual, presentate prolijo, escuchá con atención y contestá breve y en positivo.</p>
      <ul>
        <li><strong>Puntual</strong> es llegar 10 minutos antes, no 40 ni 1 tarde. Si se te complica, avisá antes de la hora.</li>
        <li><strong>Prolijo</strong> no es caro: ropa limpia y acorde al lugar. Para un supermercado no hace falta traje.</li>
        <li><strong>En positivo:</strong> si te preguntan por un trabajo anterior, no hables mal de nadie. Contá qué aprendiste.</li>
      </ul>
      <p><strong>Después de la entrevista,</strong> la guía oficial avisa que puede haber más pasos: pruebas psicotécnicas (ejercicios y preguntas para conocer cómo pensás y trabajás) o un examen médico preocupacional (un control de salud antes de empezar).</p>
      <p>Por ejemplo, si la entrevista es en un barrio que no conocés, el día anterior fijate cuánto tarda el colectivo y sumale media hora. Llegar corriendo y transpirado te pone nervioso antes de empezar.</p>` },
    { titulo: "Contar tus experiencias con el método STAR", html: `
      <p class="idea">Muchas preguntas de entrevista piden un ejemplo: "contame de una vez que resolviste un problema". El método <strong>STAR</strong> te ayuda a contarlo en orden y en poco tiempo.</p>
      <p>STAR son las iniciales en inglés de cuatro partes, que se usan en muchas guías de entrevistas de universidades:</p>
      <table>
        <tr><th>Parte</th><th>Qué contás</th><th>Cuánto</th></tr>
        <tr><td><strong>S</strong>ituación</td><td>Dónde y cuándo pasó</td><td>Una o dos frases</td></tr>
        <tr><td><strong>T</strong>area</td><td>Qué te tocaba hacer a vos</td><td>Una frase</td></tr>
        <tr><td><strong>A</strong>cción</td><td>Qué hiciste vos, paso a paso</td><td>La parte más larga</td></tr>
        <tr><td><strong>R</strong>esultado</td><td>Cómo terminó, mejor con un número</td><td>Una o dos frases</td></tr>
      </table>
      <p>Por ejemplo, a la pregunta "Contame de una vez que atendiste a un cliente enojado":</p>
      <pre><code>S: En la feria, un sábado de diciembre, una señora volvió enojada
   porque la remera que compró tenía un agujero.
T: Yo estaba sola en el puesto y tenía que resolverlo sin perder a la clienta.
A: La escuché sin interrumpirla, le pedí disculpas, le mostré otras remeras
   del mismo precio y le ofrecí cambiarla o devolverle la plata.
R: Eligió otra remera y volvió el sábado siguiente con una amiga.</code></pre>
      <p><strong>Lo importante está en la Acción:</strong> qué hiciste vos, no "nosotros". Y en el Resultado, que muestra que funcionó.</p>
      <p><strong>Prepará 5 historias</strong> antes de cualquier entrevista. Las preguntas suelen ser sobre:</p>
      <ol>
        <li>Un problema que resolviste.</li>
        <li>Un cliente o una persona difícil.</li>
        <li>Un error que cometiste y qué aprendiste.</li>
        <li>Algo que hiciste en equipo.</li>
        <li>Algo que aprendiste rápido.</li>
      </ol>
      <p>Las historias pueden venir de cualquier lado: la feria, la escuela, la familia, un voluntariado. Las guías del método recomiendan tener 2 o 3 ejemplos por cada habilidad importante.</p>` },
    { titulo: "Practicar con la IA como entrevistador", html: `
      <p class="idea">La IA puede hacer de entrevistador: te pregunta de a una, espera tu respuesta y al final te dice qué mejorar. Practicar en voz alta es lo que más baja los nervios.</p>
      <pre><code>Sos un entrevistador de recursos humanos de una cadena de supermercados.
Haceme una entrevista para el puesto de cajera, como en la vida real:
- Una pregunta por vez. Esperá mi respuesta antes de seguir.
- Incluí la pregunta "contame de vos" y 2 preguntas que pidan un ejemplo.
- Después de 6 preguntas, terminá y dame una devolución:
  2 cosas que hice bien, 2 para mejorar y una respuesta mía reescrita
  con el método STAR.
Sé exigente, como un entrevistador real.</code></pre>
      <p>Es el mismo pedido que viste en el curso de prompts: un rol, reglas claras (una pregunta por vez) y qué querés al final. Pedirle que sea exigente evita que te diga que todo estuvo perfecto.</p>
      <p><strong>Practicá en voz alta.</strong> Las aplicaciones de ChatGPT, Claude y Gemini en el celular tienen un modo de voz: podés hablar y escuchar las preguntas, como en una entrevista real. Si no, leé tu respuesta en voz alta antes de escribirla.</p>
      <table>
        <tr><th>Pregunta difícil</th><th>Una forma de responder</th></tr>
        <tr><td>"¿Por qué no tenés experiencia?"</td><td>"Es mi primer empleo formal, pero vendí dos años en una feria..." y un ejemplo</td></tr>
        <tr><td>"¿Cuál es tu mayor defecto?"</td><td>Uno real que estés mejorando, y qué hacés para mejorarlo</td></tr>
        <tr><td>"¿Por qué hace un año que no trabajás?"</td><td>La verdad, breve, y qué hiciste en ese tiempo (un curso, cuidar a un familiar)</td></tr>
        <tr><td>"¿Tenés alguna pregunta?"</td><td>Sí: "¿Cómo es un día normal en este puesto?" o "¿Qué valoran de quien hace bien este trabajo?"</td></tr>
      </table>
      <p><strong>Siempre preguntá algo al final.</strong> Muestra interés. Dejá las preguntas de sueldo y horarios para cuando te las mencionen o para una segunda instancia, salvo que el aviso no diga nada y sea importante para decidir.</p>
      <p>Por ejemplo, hacé la práctica con la IA tres veces en días distintos. La tercera vez vas a notar que respondés más corto, más ordenado y con menos nervios.</p>` },
  ],
  practica: [
    "Elegí una empresa a la que te postulaste y completá la tabla de la primera lección (empresa, puesto, logística, qué llevar). Anotá cuánto tiempo tardás en llegar.",
    "Escribí tus 5 historias con el método STAR, una por cada tipo de pregunta. Leé una en voz alta y tomá el tiempo: anotalo y dejala en menos de 2 minutos.",
    "Hacé la entrevista de práctica con la IA y anotá las 2 cosas para mejorar que te dijo. Repetila otro día y anotá si mejoraste en esas dos cosas.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Furman University: guía para preparar entrevistas con el método STAR (PDF, en inglés)", url: "https://www.furman.edu/career-services/wp-content/uploads/sites/81/2021/11/STAR_Method_Interview_Preparation_Guide.pdf" },
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Mañana tenés una entrevista en un barrio que no conocés. ¿Qué hacés hoy?", opciones: ["Nada, mañana lo ves","Salís justo a la hora para no esperar","Averiguás cómo llegar, cuánto tardás y le sumás un margen","Pedís que te la cambien a otro día"], correcta: 2, explicacion: "Llegar a tiempo y tranquilo empieza el día anterior. Verlo mañana tienta para no pensar en eso hoy, pero un colectivo que tarda puede hacerte llegar tarde." },
    { q: "¿Qué llevás a una entrevista presencial?", opciones: ["CV impreso, DNI y algo para anotar","Nada, ya mandaste el CV","Una carpeta con todos tus diplomas desde la primaria","Un regalo para el entrevistador"], correcta: 0, explicacion: "La guía oficial recomienda llevar el CV actualizado. Pensar que ya lo tienen tienta, pero muchas veces el entrevistador no lo tiene a mano." },
    { q: "Te preguntan por tu trabajo anterior, donde tu jefe era muy injusto. ¿Cómo respondés?", opciones: ["Contando todo lo que te hizo tu jefe","Diciendo que no querés hablar de eso","Inventando que era un trabajo perfecto","Sin hablar mal de nadie, contando qué aprendiste"], correcta: 3, explicacion: "La guía recomienda responder breve y en positivo. Contar todo tienta para que te entiendan, pero el entrevistador piensa cómo hablarías de su empresa." },
    { q: "Te dicen que después de la entrevista hay una prueba psicotécnica. ¿Qué es?", opciones: ["Un examen de sangre","Ejercicios y preguntas para conocer cómo pensás y trabajás","Una prueba de manejo","Una entrevista con un psicólogo para tratarte"], correcta: 1, explicacion: "Es parte del proceso de selección de muchas empresas. Confundirla con un examen médico tienta por el nombre, pero ese es el preocupacional." },
    { q: "Te preguntan \"contame de una vez que resolviste un problema\". ¿Qué método usás?", opciones: ["Contás toda tu vida en orden","Decís \"siempre resuelvo todo\"","STAR: situación, tarea, acción y resultado","Contestás con una sola palabra"], correcta: 2, explicacion: "STAR ordena la historia en poco tiempo. \"Siempre resuelvo todo\" tienta porque suena seguro, pero no es un ejemplo y no se puede comprobar." },
    { q: "En el método STAR, ¿qué parte tiene que ser la más larga?", opciones: ["La acción: qué hiciste vos","La situación","La tarea","Ninguna, todas iguales"], correcta: 0, explicacion: "La acción muestra cómo trabajás. Alargar la situación tienta para dar contexto, pero el entrevistador quiere saber qué hiciste." },
    { q: "Contaste una historia STAR que dice \"nosotros hicimos\" en cada frase. ¿Qué mejorás?", opciones: ["Nada, es más humilde","Decir que lo hiciste todo solo aunque no sea cierto","No contar historias de equipo","Decir qué hiciste vos, aunque haya sido en equipo"], correcta: 3, explicacion: "El entrevistador quiere conocer tu parte. Decir \"lo hice todo solo\" tienta para destacarte, pero si no es verdad se nota." },
    { q: "No tenés experiencia formal y te piden un ejemplo de atención al cliente. ¿De dónde sacás la historia?", opciones: ["Decís que no tenés ejemplos","De la feria, la escuela, la familia o un voluntariado","Inventás un trabajo","Contás una película"], correcta: 1, explicacion: "Las historias pueden venir de cualquier experiencia real. Decir que no tenés ejemplos tienta por honestidad, pero sí los tenés: solo hay que buscarlos." },
    { q: "Querés practicar una entrevista con la IA. ¿Qué regla no puede faltar en el pedido?", opciones: ["Que te dé todas las respuestas correctas","Que haga las 10 preguntas juntas","Que haga una pregunta por vez y espere tu respuesta","Que te diga que lo hiciste perfecto"], correcta: 2, explicacion: "Una pregunta por vez se parece a una entrevista real. Que te dé las respuestas tienta, pero así no practicás nada." },
    { q: "¿Por qué le pedís a la IA que sea exigente en la práctica?", opciones: ["Porque tiende a decir que todo está bien, y así te marca lo que mejorar","Para que te ponga nervioso","Porque si no, no contesta","Para que la entrevista dure más"], correcta: 0, explicacion: "Sin ese pedido, la IA suele elogiar. Pensar que es para ponerte nervioso tienta, pero el objetivo es una devolución útil." },
    { q: "Te preguntan \"¿por qué hace un año que no trabajás?\" y estuviste cuidando a tu mamá. ¿Qué respondés?", opciones: ["Que estuviste de vacaciones","Que no es asunto del entrevistador","Una historia larga con todos los detalles médicos","La verdad, breve, y qué hiciste o aprendiste en ese tiempo"], correcta: 3, explicacion: "Una respuesta verdadera y corta alcanza. Los detalles médicos tientan para justificarte, pero no hace falta y son tu privacidad." },
    { q: "Al final de la entrevista te preguntan \"¿tenés alguna pregunta?\". ¿Qué hacés?", opciones: ["Decís \"no, ninguna\"","Hacés una pregunta sobre el puesto, como \"¿cómo es un día normal acá?\"","Preguntás solo cuándo te pagan","Preguntás si ya estás contratado"], correcta: 1, explicacion: "Preguntar muestra interés. \"No, ninguna\" tienta para terminar rápido, pero da la impresión de que no te importa mucho el puesto." },
  ],
},
{
  id: "despues",
  icono: "📬",
  titulo: "Después de la entrevista: seguimiento, ofertas y derechos",
  nivel: "Intermedio",
  objetivos: [
    "Hacer un seguimiento amable y manejar un rechazo sin bajar los brazos",
    "Evaluar una oferta: sueldo, horario, tipo de contrato y si es trabajo registrado",
    "Conocer tus derechos básicos y dónde consultarlos en fuentes oficiales",
  ],
  lecciones: [
    { titulo: "El seguimiento y los rechazos", html: `
      <p class="idea">Después de una entrevista, un mensaje corto de agradecimiento te diferencia. Y si te dicen que no, cada rechazo trae información para la próxima.</p>
      <p><strong>El mismo día o al día siguiente,</strong> mandá un mensaje corto a quien te entrevistó:</p>
      <pre><code>Hola, Laura. Gracias por la entrevista de hoy para el puesto de cajera.
Me quedé con muchas ganas de sumarme al equipo. Quedo atenta a
cualquier novedad. ¡Buen fin de semana!
Ana Gómez</code></pre>
      <p><strong>Si pasa una semana sin noticias</strong> (o el plazo que te dijeron), un segundo mensaje amable está bien: "Hola, quería saber si hay novedades sobre el puesto de cajera". Anotalo en tu planilla de búsqueda (módulo 4).</p>
      <table>
        <tr><th>Si te dicen que no...</th><th>Qué hacés</th></tr>
        <tr><td>Por mensaje, sin explicación</td><td>Agradecé igual y pedí que te tengan en cuenta para otra búsqueda</td></tr>
        <tr><td>Te dan un motivo ("buscamos más experiencia")</td><td>Anotalo: si se repite, es lo que te conviene mejorar</td></tr>
        <tr><td>Nunca responden</td><td>Pasa mucho: después de dos seguimientos, seguí con otras búsquedas</td></tr>
      </table>
      <p><strong>Los rechazos son parte del proceso.</strong> Casi todo el mundo recibe muchos "no" antes de un "sí". No es un juicio sobre vos como persona: muchas veces eligen a alguien por motivos que no tienen que ver con vos (otra persona tenía justo esa experiencia, o un conocido de adentro).</p>
      <p>Lo que sí podés hacer es aprender: después de cada entrevista, anotá en tu planilla qué preguntaron, qué respondiste bien y qué te costó. Practicá esa pregunta con la IA (módulo 6).</p>
      <p>Por ejemplo, si en tres entrevistas te trabaste con "¿cuál es tu mayor defecto?", esa es la pregunta para practicar esta semana.</p>` },
    { titulo: "Evaluar una oferta", html: `
      <p class="idea">Cuando te ofrecen un trabajo, antes de decir que sí, fijate en qué condiciones es. No hace falta aceptar en el momento: está bien pedir un día para pensarlo.</p>
      <table>
        <tr><th>Preguntá</th><th>Por qué importa</th></tr>
        <tr><td>¿Cuál es el sueldo y si es en mano o bruto?</td><td>El bruto es antes de los descuentos (jubilación, obra social); en mano es lo que cobrás</td></tr>
        <tr><td>¿Qué horario y qué días?</td><td>Que puedas cumplirlo sin dejar otras cosas importantes</td></tr>
        <tr><td>¿Es trabajo registrado, con recibo de sueldo?</td><td>Define tus derechos (próxima lección)</td></tr>
        <tr><td>¿Hay período de prueba? ¿Cuánto dura?</td><td>Los primeros meses las condiciones para terminar la relación son distintas</td></tr>
        <tr><td>¿Cuándo empezás y qué necesitás llevar?</td><td>Para organizarte</td></tr>
      </table>
      <p><strong>El sueldo: averiguá antes.</strong> Para saber si una oferta es razonable, compará con avisos parecidos que dicen el sueldo, preguntá a conocidos del rubro y, si el puesto tiene un convenio colectivo (el acuerdo de sueldos del sindicato de esa actividad), fijate la escala. La IA no conoce los sueldos de hoy: los puede inventar o tener datos viejos.</p>
      <p><strong>Negociar es posible, con cuidado.</strong> En un primer empleo con sueldo de convenio, casi no se negocia. En otros, si tenés un dato concreto, podés preguntar: "Vi avisos parecidos con un sueldo un poco más alto, ¿hay margen?". Siempre con amabilidad y sabiendo qué vas a hacer si te dicen que no.</p>
      <pre><code>Gracias por la oferta, me pone muy contenta.
¿Me podrían confirmar por escrito el sueldo, el horario y la fecha de
inicio? Les respondo mañana a la mañana.</code></pre>
      <p>Por ejemplo, pedir las condiciones por escrito (un mail alcanza) evita malentendidos: si después algo cambia, tenés con qué mostrarlo.</p>` },
    { titulo: "Tus derechos básicos", html: `
      <p class="idea">Cuando trabajás en relación de dependencia, tenés derechos que la ley te garantiza. Conocerlos te ayuda a darte cuenta si algo no está bien. La guía oficial del Gobierno los menciona como parte de empezar un trabajo.</p>
      <p><strong>Trabajo registrado</strong> (también se dice "en blanco") quiere decir que tu empleador te dio de alta: hace los aportes y te da recibo de sueldo. La guía oficial nombra algunos derechos que vienen con eso:</p>
      <table>
        <tr><th>Derecho</th><th>Qué es</th></tr>
        <tr><td>Recibo de sueldo</td><td>El papel (o archivo) que detalla cuánto ganás y qué te descuentan</td></tr>
        <tr><td>Vacaciones pagas</td><td>Días de descanso por año en los que cobrás igual</td></tr>
        <tr><td>Aportes y obra social</td><td>Lo que va a tu futura jubilación y a tu cobertura de salud</td></tr>
        <tr><td>Aguinaldo</td><td>Un sueldo extra por año, que se paga en dos partes</td></tr>
        <tr><td>Cobertura por accidentes de trabajo</td><td>Atención si te lastimás trabajando</td></tr>
      </table>
      <p><strong>Cómo verificar que estás registrado:</strong> con tu CUIL podés consultar tu historia laboral en la página de ANSES (en Mi ANSES, con tu clave de la seguridad social). Ahí aparece si tu empleador te dio de alta y hace los aportes.</p>
      <p><strong>Si algo no está bien</strong> (no te registran, no te pagan lo acordado), podés consultar en la Secretaría de Trabajo o en la página "Buscás trabajo" del Gobierno, en la sección "Conocé tus derechos". También podés acercarte al sindicato de tu actividad.</p>
      <p><strong>Esto es una introducción.</strong> Las leyes laborales tienen detalles que cambian según la actividad y el convenio. Para una situación concreta (un despido, un sueldo mal pagado), consultá en los organismos oficiales o con un abogado laboralista: este curso te ayuda a saber qué preguntar, no reemplaza un asesoramiento legal.</p>
      <p>Por ejemplo, si después de tres meses trabajando no te dieron ningún recibo de sueldo, revisá tu historia laboral en ANSES y consultá: puede ser que no te hayan registrado.</p>` },
  ],
  practica: [
    "Escribí el mensaje de agradecimiento para tu próxima entrevista y guardalo como plantilla. Anotá en tu planilla la fecha en que lo mandarías.",
    "Buscá 3 avisos parecidos al puesto que te interesa que digan el sueldo. Anotá los tres montos y si dicen bruto o en mano.",
    "Armá una lista con las 5 preguntas para evaluar una oferta. Usala con una oferta real o de ejemplo y anotá qué respuesta te faltaría pedir por escrito.",
    "Entrá a Mi ANSES con tu clave de la seguridad social y buscá tu historia laboral (si alguna vez trabajaste registrado). Anotá si aparece el último empleo.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Gobierno de Argentina: buscás trabajo (con la sección Conocé tus derechos)", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
  ],
  quiz: [
    { q: "Terminaste una entrevista que te fue bien. ¿Qué hacés el mismo día o al siguiente?", opciones: ["Nada, esperás que te llamen","Llamás cada hora para saber si quedaste","Mandás un mensaje corto de agradecimiento","Mandás el CV de nuevo"], correcta: 2, explicacion: "Un agradecimiento corto te diferencia. Llamar cada hora tienta por ansiedad, pero muestra impaciencia." },
    { q: "Pasó una semana y no tenés noticias de una entrevista. ¿Qué hacés?", opciones: ["Mandás un mensaje amable preguntando si hay novedades","Das por hecho que quedaste","Te enojás por mensaje","Te presentás sin avisar"], correcta: 0, explicacion: "Un seguimiento amable está bien visto. Dar por hecho que quedaste tienta si te fue bien, pero puede que estén entrevistando a otras personas." },
    { q: "Te dicen que no quedaste porque \"buscaban más experiencia\". ¿Qué hacés?", opciones: ["Discutís que sí tenés experiencia","Dejás de buscar","Inventás experiencia en el próximo CV","Agradecés, lo anotás y te fijás si ese motivo se repite"], correcta: 3, explicacion: "Un motivo que se repite te dice qué mejorar. Inventar experiencia tienta para no volver a escuchar ese \"no\", pero se descubre en la entrevista." },
    { q: "Tu amigo recibió 15 rechazos y dice que no sirve para nada. ¿Qué le decís?", opciones: ["Que tiene razón","Que los rechazos son parte del proceso y muchas veces no tienen que ver con él","Que deje de buscar un tiempo largo","Que mande el mismo CV a 100 lugares más"], correcta: 1, explicacion: "Casi todos reciben muchos \"no\" antes de un \"sí\". Darle la razón tienta para no contradecirlo, pero lo desanima más." },
    { q: "Te ofrecen un trabajo y no sabés si las condiciones te sirven. ¿Qué hacés?", opciones: ["Decís que sí en el momento sin preguntar nada","Lo rechazás por las dudas","Agradecés y pedís un día para pensarlo, con las condiciones por escrito","Le preguntás a la IA si te conviene"], correcta: 2, explicacion: "Está bien pedir un día y las condiciones por escrito. Decir que sí en el momento tienta por miedo a perderlo, pero después podés descubrir algo que no te sirve." },
    { q: "Te dicen que el sueldo es de $800.000 brutos. ¿Qué significa?", opciones: ["Que es antes de los descuentos: en mano vas a cobrar menos","Que es lo que cobrás en mano","Que es el sueldo de un año","Que no tiene descuentos"], correcta: 0, explicacion: "El bruto incluye los aportes que se descuentan. Pensar que es en mano tienta porque es el número que te dicen, pero vas a cobrar menos." },
    { q: "Querés saber si un sueldo ofrecido es razonable. ¿Qué hacés?", opciones: ["Le preguntás a la IA cuánto se paga hoy","Aceptás cualquier monto","Pedís el doble para ver qué pasa","Comparás con avisos parecidos, preguntás a conocidos del rubro y te fijás en el convenio"], correcta: 3, explicacion: "Los avisos reales y el convenio muestran los sueldos de hoy. Preguntarle a la IA tienta por rápido, pero no conoce los sueldos actuales y los puede inventar." },
    { q: "Querés pedir un poco más de sueldo. ¿Cómo lo hacés?", opciones: ["Diciendo que si no te pagan más no vas","Con amabilidad y un dato concreto: \"vi avisos parecidos con un sueldo un poco más alto, ¿hay margen?\"","Sin ningún dato, pidiendo el doble","Por mensaje a las 2 de la mañana"], correcta: 1, explicacion: "Un dato concreto y un tono amable abren la charla. Amenazar con no ir tienta para presionar, pero si te dicen que no, perdés la oferta." },
    { q: "¿Qué es el trabajo registrado?", opciones: ["Cualquier trabajo con un contrato verbal","Un trabajo que anotás en tu planilla","Cuando el empleador te da de alta, hace los aportes y te da recibo de sueldo","Un trabajo de más de 8 horas"], correcta: 2, explicacion: "Registrado (\"en blanco\") quiere decir dado de alta con aportes. El contrato verbal tienta como respuesta, pero sin alta no tenés los derechos que vienen con el registro." },
    { q: "Hace tres meses que trabajás y nunca te dieron un recibo de sueldo. ¿Qué hacés?", opciones: ["Revisás tu historia laboral en ANSES y consultás en los organismos oficiales","Nada, es normal","Renunciás sin decir nada","Le pedís a la IA que te diga si es legal"], correcta: 0, explicacion: "El recibo es un derecho del trabajo registrado. Pensar que es normal tienta porque pasa mucho, pero puede querer decir que no te registraron." },
    { q: "¿Qué es el aguinaldo?", opciones: ["Un bono que se paga si la empresa quiere","Las vacaciones","Un descuento del sueldo","Un sueldo extra por año que se paga en dos partes"], correcta: 3, explicacion: "Es un derecho del trabajo registrado. Pensar que lo paga la empresa si quiere tienta porque se parece a un premio, pero es obligatorio." },
    { q: "Te despidieron y no sabés si te pagaron lo que corresponde. ¿Qué hacés?", opciones: ["Te guiás solo por lo que te dice el curso","Consultás en la Secretaría de Trabajo, en el sindicato o con un abogado laboralista","Le preguntás a la IA y hacés lo que diga","No hacés nada"], correcta: 1, explicacion: "Una situación concreta necesita a alguien que conozca tu caso. Guiarte por el curso tienta, pero el curso te ayuda a saber qué preguntar, no reemplaza un asesoramiento." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Proyecto final: tu kit de búsqueda",
  nivel: "Avanzado",
  objetivos: [
    "Armar un kit de búsqueda completo: CV base, CV adaptados, carta, perfil, historias STAR y planilla",
    "Evaluar tu kit con la rúbrica y mejorarlo hasta que esté listo",
    "Sostener la búsqueda con una rutina semanal y medir cómo te va",
  ],
  lecciones: [
    { titulo: "Las 6 piezas del kit", html: `
      <p class="idea">El proyecto final es tu <strong>kit de búsqueda</strong>: todo lo que necesitás para postularte en minutos a cualquier aviso que te interese. Junta todo el curso.</p>
      <table>
        <tr><th>#</th><th>Pieza</th><th>Módulo</th></tr>
        <tr><td>1</td><td>Inventario de habilidades y objetivo laboral</td><td>0</td></tr>
        <tr><td>2</td><td>CV base en PDF, de una o dos páginas</td><td>1</td></tr>
        <tr><td>3</td><td>Dos CV adaptados a dos avisos reales</td><td>2</td></tr>
        <tr><td>4</td><td>Una carta y un mail de postulación</td><td>3</td></tr>
        <tr><td>5</td><td>Perfil de LinkedIn completo</td><td>5</td></tr>
        <tr><td>6</td><td>Cinco historias STAR y la planilla de búsqueda</td><td>4 y 6</td></tr>
      </table>
      <p><strong>Guardalo ordenado</strong> en una carpeta (en la computadora o en Google Drive):</p>
      <pre><code>Busqueda-trabajo/
  01-inventario-y-objetivo.docx
  02-CV-Ana-Gomez.pdf
  03-CV-Ana-Gomez-cajera.pdf
  03-CV-Ana-Gomez-repositora.pdf
  04-carta-y-mail.docx
  05-historias-STAR.docx
  06-planilla-busqueda.xlsx</code></pre>
      <p>Con esto armado, postularte a un aviso nuevo es: copiar el CV más parecido, adaptarlo (10 minutos), adaptar la carta (5 minutos) y cargarlo en la planilla.</p>
      <p><strong>La IA te ayuda en cada pieza,</strong> con las tres reglas del curso: usá solo información verdadera, no le des datos personales que no hacen falta y revisá todo antes de mandarlo.</p>
      <p>Por ejemplo, si te llaman para una entrevista mañana, abrís la carpeta, mirás qué CV mandaste (planilla), repasás tus historias STAR y practicás 15 minutos con la IA. Estás listo.</p>` },
    { titulo: "La rúbrica del kit", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje. Te dice si tu kit está listo para salir a buscar, sin depender de "me parece que está bien".</p>
      <p>Puntuá cada criterio de 0 a 2:</p>
      <table>
        <tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Verdad</td><td>Hay algo exagerado o inventado</td><td>Algún dato dudoso</td><td>Todo es verdad y lo podés explicar</td></tr>
        <tr><td>CV claro</td><td>Más de 2 páginas o sin experiencia descrita</td><td>Faltan verbos de acción o números</td><td>1 o 2 páginas, con verbos y números</td></tr>
        <tr><td>Adaptado</td><td>Un solo CV para todo</td><td>Adaptado, pero sin palabras del aviso</td><td>Dos versiones con objetivo, orden y palabras del aviso</td></tr>
        <tr><td>Carta y mensaje</td><td>No hay</td><td>Hay, pero genéricos</td><td>Tres párrafos con un ejemplo, mail con asunto y adjunto</td></tr>
        <tr><td>Entrevista</td><td>Sin historias preparadas</td><td>Historias sin el orden STAR</td><td>Cinco historias STAR de menos de 2 minutos, practicadas</td></tr>
        <tr><td>Organización</td><td>Sin planilla</td><td>Planilla incompleta</td><td>Planilla con todas las postulaciones y próximos pasos</td></tr>
      </table>
      <p>El máximo es 12. El kit está listo con <strong>10 o más</strong> y con un <strong>2 en Verdad</strong>, sí o sí: un CV con algo inventado puede costarte el trabajo aunque todo lo demás esté perfecto.</p>
      <p><strong>Pedí una segunda opinión.</strong> Mostrale el kit a alguien de confianza (o en la oficina de empleo de tu municipio) y pedile que lo puntúe. Si su puntaje es muy distinto, charlen en qué criterio no coinciden.</p>
      <p>Por ejemplo, también podés pedirle a la IA que evalúe tu CV con la rúbrica. Pegale la tabla y el CV (sin datos personales) y pedile el puntaje de cada criterio con una razón. Después revisá vos si está de acuerdo.</p>` },
    { titulo: "La rutina semanal", html: `
      <p class="idea">Buscar trabajo lleva tiempo. Lo que más ayuda no es un día de mucho esfuerzo, sino una rutina que puedas sostener semana a semana, midiendo cómo te va.</p>
      <p><strong>Una rutina posible</strong> (ajustala a tu tiempo):</p>
      <table>
        <tr><th>Día</th><th>Qué hacés</th><th>Tiempo</th></tr>
        <tr><td>Lunes</td><td>Buscar avisos nuevos en 2 o 3 canales y anotarlos</td><td>1 hora</td></tr>
        <tr><td>Martes y miércoles</td><td>Adaptar CV y carta, y postularte</td><td>1 hora por día</td></tr>
        <tr><td>Jueves</td><td>Mensajes a contactos y seguimiento de postulaciones</td><td>30 minutos</td></tr>
        <tr><td>Viernes</td><td>Practicar una entrevista con la IA o avanzar un curso</td><td>1 hora</td></tr>
      </table>
      <p><strong>Medí cada semana</strong> con tu planilla:</p>
      <pre><code>Semana 1:  10 postulaciones · 1 respuesta · 0 entrevistas
Semana 2:  10 postulaciones · 2 respuestas · 1 entrevista
Semana 3:  12 postulaciones · 3 respuestas · 2 entrevistas
→ la tasa de respuesta subió de 10% a 25%: el CV adaptado funciona</code></pre>
      <p>Si después de tres o cuatro semanas los números no se mueven, cambiá algo: el CV, el tipo de puesto o los canales. Cambiá una cosa por vez, así sabés qué funcionó.</p>
      <p><strong>Cuidate.</strong> Buscar trabajo cansa y a veces angustia. Mantené horarios, salí a caminar, hablá con gente. Si la angustia te supera, pedí ayuda a alguien de confianza o a un profesional de la salud.</p>
      <p><strong>Seguí formándote.</strong> Mientras buscás, un curso suma al CV y te mantiene activo. En este sitio hay cursos gratis de Excel, de prompts para usar la IA y de análisis de datos, y el Portal Empleo tiene cursos con certificado.</p>
      <p>Por ejemplo, contar en una entrevista "mientras buscaba, hice un curso de Excel y armé un informe de ventas" muestra que aprovechás el tiempo.</p>` },
  ],
  practica: [
    "Armá la carpeta del kit con las 6 piezas. Anotá qué piezas tenías listas al empezar y cuáles hiciste para el proyecto.",
    "Puntuá tu kit con la rúbrica de 6 criterios. Anotá el puntaje de cada uno y mejorá hasta llegar a 10 o más, con 2 en Verdad.",
    "Pedile a alguien de confianza o a la oficina de empleo que puntúe tu kit con la rúbrica. Compará su puntaje con el tuyo y anotá en qué criterio no coincidieron.",
    "Seguí la rutina semanal durante 3 semanas y anotá cada semana postulaciones, respuestas y entrevistas. Calculá tu tasa de respuesta de cada semana.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: el camino hacia tu próximo empleo (guía oficial)", url: "https://www.argentina.gob.ar/node/11130" },
    { t: "Portal Empleo: cursos y recursos gratuitos del Gobierno", url: "https://www.portalempleo.gob.ar/" },
    { t: "Ayuda de LinkedIn: crear un buen perfil", url: "https://www.linkedin.com/help/linkedin/answer/a554351?lang=es" },
    { t: "Furman University: guía para preparar entrevistas con el método STAR (PDF, en inglés)", url: "https://www.furman.edu/career-services/wp-content/uploads/sites/81/2021/11/STAR_Method_Interview_Preparation_Guide.pdf" },
  ],
  quiz: [
    { q: "Te llaman para una entrevista mañana y tenés el kit armado. ¿Qué hacés primero?", opciones: ["Armás un CV nuevo","No preparás nada, ya tenés el kit","Mirás en la planilla qué CV mandaste y repasás tus historias STAR","Le pedís a la IA que vaya por vos"], correcta: 2, explicacion: "El kit te deja prepararte en minutos. No preparar nada tienta porque ya trabajaste mucho, pero repasar te da seguridad." },
    { q: "Te aparece un aviso nuevo que te interesa. Con el kit armado, ¿qué hacés?", opciones: ["Copiás el CV más parecido, lo adaptás, adaptás la carta y lo anotás en la planilla","Mandás el CV base sin cambios","Empezás un CV desde cero","Esperás a tener tiempo para hacerlo perfecto"], correcta: 0, explicacion: "Con el kit, adaptar lleva poco tiempo. Mandar el base sin cambios tienta por rápido, pero pierde la ventaja de adaptar." },
    { q: "Tu kit suma 11 puntos, pero tiene un 1 en Verdad porque exageraste un dato. ¿Está listo?", opciones: ["Sí, pasó los 10 puntos","Sí, un dato exagerado no importa","No, tiene que sacar 12","No: tiene que tener 2 en Verdad sí o sí"], correcta: 3, explicacion: "Un dato exagerado puede costarte el trabajo. Pasar los 10 tienta como aprobado, pero la verdad es el criterio que no se negocia." },
    { q: "Tenés un solo CV para todos los avisos. ¿Cuánto sacás en el criterio Adaptado?", opciones: ["2","0","1","Depende del CV"], correcta: 1, explicacion: "La rúbrica pide dos versiones adaptadas para el 2. Pensar que un buen CV alcanza tienta, pero sin adaptar no aprovechás las palabras de cada aviso." },
    { q: "Querés una segunda opinión sobre tu kit y no conocés a nadie de recursos humanos. ¿Dónde podés ir?", opciones: ["A ningún lado","A una agencia que cobra","A la oficina de empleo de tu municipio","A un banco"], correcta: 2, explicacion: "Las oficinas de empleo orientan gratis. Una agencia que cobra tienta porque promete experiencia, pero el servicio público es gratuito." },
    { q: "Le pedís a la IA que puntúe tu CV con la rúbrica. ¿Qué hacés con el puntaje que te da?", opciones: ["Lo revisás vos: te fijás si estás de acuerdo con cada razón","Lo aceptás sin mirar","Lo publicás en LinkedIn","Le pedís que te ponga 12"], correcta: 0, explicacion: "La IA también se equivoca al evaluar. Aceptarlo sin mirar tienta porque parece objetivo, pero vos conocés tu CV mejor que nadie." },
    { q: "¿Qué ayuda más en una búsqueda de trabajo?", opciones: ["Un día de 12 horas mandando CV","Buscar solo cuando tenés ganas","Mandar el mismo CV a todos lados","Una rutina que puedas sostener semana a semana"], correcta: 3, explicacion: "La constancia gana. Un día de 12 horas tienta para avanzar mucho, pero cansa y después cuesta volver a empezar." },
    { q: "En la semana 1 mandaste 10 postulaciones y tuviste 1 respuesta. En la semana 3, 12 y 3. ¿Qué concluís?", opciones: ["Que no cambió nada","Que la tasa de respuesta subió de 10% a 25%: algo de lo que cambiaste funciona","Que hay que mandar menos postulaciones","Que es pura suerte"], correcta: 1, explicacion: "1 de 10 es 10% y 3 de 12 es 25%. Pensar que es suerte tienta, pero medir te permite ver qué cambio dio resultado." },
    { q: "Hace 4 semanas que los números no se mueven. ¿Qué hacés?", opciones: ["Cambiás todo a la vez","Dejás de buscar","Cambiás una cosa por vez: el CV, el tipo de puesto o los canales","Seguís exactamente igual"], correcta: 2, explicacion: "Cambiar una cosa por vez muestra qué funcionó. Cambiar todo junto tienta para mejorar rápido, pero después no sabés qué hizo la diferencia." },
    { q: "La búsqueda te tiene muy angustiado. ¿Qué hacés?", opciones: ["Mantenés horarios, hablás con gente y, si te supera, pedís ayuda a alguien de confianza o a un profesional","Buscás más horas para terminar rápido","No se lo contás a nadie","Dejás de comer bien para ahorrar tiempo"], correcta: 0, explicacion: "Cuidarte también es parte de la búsqueda. Buscar más horas tienta para terminar antes, pero el cansancio empeora las entrevistas." },
    { q: "Mientras buscás trabajo, ¿qué te suma para el CV y la entrevista?", opciones: ["No hacer nada para tener tiempo libre","Inventar que estás trabajando","Poner cursos que no hiciste","Hacer un curso, como Excel, y contarlo con lo que aprendiste"], correcta: 3, explicacion: "Un curso muestra que aprovechás el tiempo. Inventar que estás trabajando tienta para no tener un hueco, pero se descubre con una sola pregunta." },
    { q: "¿Cuáles son las tres reglas del curso para usar la IA en la búsqueda?", opciones: ["Que escriba todo, que suene impresionante y mandarlo rápido","Solo información verdadera, no dar datos personales que no hacen falta y revisar todo","Usarla solo para el CV","No usarla nunca"], correcta: 1, explicacion: "Así la IA ayuda sin meterte en problemas. Que suene impresionante tienta, pero empuja a exagerar, y la exageración se nota en la entrevista." },
  ],
},
];
