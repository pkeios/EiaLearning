// Temario del curso "Datos con IA: preguntá, analizá, decidí". Mismo formato que public/contenido.js. Validar con: node tools/validar.js datos
// Las lecciones citan resultados de los datos de práctica (practica/), que genera tools/generar-datos-practica.py.
window.TEMARIO = [
{
  id: "ia-y-datos",
  icono: "🧭",
  titulo: "Qué puede hacer la IA con tus datos",
  nivel: "Básico",
  objetivos: [
    "Explicar con tus palabras qué hace un asistente de IA cuando le subís una planilla",
    "Decidir si una tarea con datos conviene hacerla con IA, sin IA o con IA y revisión",
    "Preparar una planilla para subirla sin exponer datos personales ni confidenciales",
  ],
  lecciones: [
    { titulo: "Qué es un asistente de IA y qué hace con una planilla", html: `
      <p class="idea">Un asistente de IA es como un pasante muy rápido que leyó muchísimo, pero que no conoce tu empresa. Si le das una planilla y le pedís bien, te arma tablas, cuentas y gráficos en segundos. Si le pedís mal, te contesta algo que suena bien aunque esté mal.</p>
      <p>Las herramientas que vas a usar en este curso son <strong>ChatGPT</strong>, <strong>Claude</strong> o <strong>Copilot en Excel</strong>. Todas funcionan parecido: les escribís lo que querés, en castellano común, y responden. Ese mensaje que les escribís se llama <strong>prompt</strong>.</p>
      <p>Por dentro, son un <strong>LLM</strong> (un modelo de lenguaje grande): un programa que aprendió leyendo enormes cantidades de texto y que escribe adivinando, palabra por palabra, qué es lo más probable que siga. Eso tiene una consecuencia importante para trabajar con datos:</p>
      <table>
        <tr><th>Si la IA...</th><th>Qué pasa</th><th>¿Es confiable?</th></tr>
        <tr><td>responde "de memoria", sin calcular</td><td>escribe un número que suena razonable</td><td>No: puede inventarlo</td></tr>
        <tr><td>calcula con código</td><td>escribe un pequeño programa (en un lenguaje llamado Python), lo ejecuta sobre tu planilla y te muestra el resultado</td><td>Mucho más, y además podés revisar el cálculo</td></tr>
      </table>
      <p>Cuando le subís un archivo y le pedís un análisis, las herramientas actuales suelen calcular con código. Según la ayuda de OpenAI, ChatGPT acepta planillas .xlsx y .csv, escribe y ejecuta código en Python, y puede armar tablas y gráficos con tus datos. Claude también puede leer tu planilla, calcular con Python y devolverte un Excel, y en Excel, Copilot puede hacer análisis avanzados con Python sin que vos sepas programar.</p>
      <p><strong>Truco que vas a usar todo el curso:</strong> pedile siempre que <em>calcule con código y te muestre cómo lo hizo</em>. Así no dependés de su memoria y podés revisar el cálculo.</p>
      <pre><code>Calculá el total vendido por sucursal usando código, no de memoria.
Mostrame la tabla con el resultado y explicame en una frase cómo lo calculaste.</code></pre>
      <p><strong>Los datos del curso.</strong> Vamos a practicar con las ventas de un almacén inventado, "La Esquina", que tiene tres sucursales. Hay dos versiones:</p>
      <ul>
        <li><strong>Ventas sucias</strong> (<a href="practica/ventas-sucias.xlsx" download>Excel</a> · <a href="practica/ventas-sucias.csv" download>CSV</a>): como llegan en la vida real, con errores. La usamos en el módulo de preparar datos.</li>
        <li><strong>Ventas limpias</strong> (<a href="practica/ventas-limpias.xlsx" download>Excel</a> · <a href="practica/ventas-limpias.csv" download>CSV</a>): ya corregidas. La usamos para analizar.</li>
      </ul>
      <p>Un <strong>CSV</strong> es una planilla guardada como texto simple, con los valores separados por comas: casi cualquier programa la abre. Si al abrirlo en Excel te aparece todo en una sola columna, usá la versión Excel o, en Excel, <em>Datos → Desde texto/CSV</em>.</p>
      <p><strong>Tu planilla real.</strong> Varias prácticas te piden probar con una planilla de verdad, además de La Esquina. No hace falta tener trabajo: sirve cualquiera de estas tres.</p>
      <table>
        <tr><th>Si...</th><th>Usá</th><th>Ejemplo de pregunta</th></tr>
        <tr><td>Trabajás con datos</td><td>Una planilla de tu trabajo (con permiso, como se ve en la lección 3)</td><td>¿Qué productos se venden menos?</td></tr>
        <tr><td>Hoy no trabajás</td><td>Tus gastos de los últimos 3 meses: los bajás del home banking o los anotás a mano</td><td>¿En qué se me va más la plata?</td></tr>
        <tr><td>Querés algo más grande</td><td>Datos públicos y gratuitos, como los de <a href="https://www.datos.gob.ar/" target="_blank" rel="noopener">datos.gob.ar</a> (el portal de datos abiertos de Argentina)</td><td>¿Cómo cambió un número de tu provincia en los últimos años?</td></tr>
      </table>` },
    { titulo: "La frontera irregular: dónde la IA ayuda y dónde falla", html: `
      <p class="idea">La IA no es buena o mala "en general": es excelente en algunas tareas y floja en otras que parecen igual de fáciles. Como un compañero que resuelve en un minuto una tabla dinámica, pero se confunde con una regla de tu negocio que nadie le explicó.</p>
      <p>En 2023, investigadores de Harvard, Wharton, MIT y otras universidades hicieron un experimento con 758 consultores de la empresa BCG. A algunos les dieron acceso a una IA (GPT-4) y a otros no. Los resultados:</p>
      <table>
        <tr><th>Tipo de tarea</th><th>Con IA, comparados con quienes no la usaron</th></tr>
        <tr><td>Tareas que la IA hace bien</td><td>Terminaron un 12% más de tareas, un 25% más rápido y con más de 40% más de calidad</td></tr>
        <tr><td>Una tarea elegida porque la IA la hace mal</td><td>Acertaron 19 puntos porcentuales menos</td></tr>
      </table>
      <p>Los autores lo llamaron la <strong>frontera irregular</strong> (en inglés, <em>jagged frontier</em>): el borde entre lo que la IA hace bien y lo que hace mal no es una línea recta y no se ve a simple vista. El problema de la segunda fila es que la IA no avisa: contesta con la misma seguridad cuando acierta que cuando se equivoca.</p>
      <p><strong>Para trabajar con datos, en general:</strong></p>
      <table>
        <tr><th>Suele hacer bien</th><th>Hay que revisar con cuidado</th></tr>
        <tr><td>Resumir y agrupar una tabla (totales por sucursal, por mes)</td><td>Números que da sin mostrar el cálculo</td></tr>
        <tr><td>Proponer qué mirar en una planilla nueva</td><td>Conclusiones sobre causas ("bajó porque...")</td></tr>
        <tr><td>Armar gráficos y redactar un primer borrador del informe</td><td>Reglas propias de tu empresa que no le explicaste</td></tr>
        <tr><td>Detectar errores típicos: vacíos, duplicados, formatos</td><td>Datos que no están en la planilla (lo que "sabe" del mundo)</td></tr>
      </table>
      <p><strong>La regla del curso:</strong> la IA hace el trabajo pesado y vos sos responsable del resultado. Por eso hay un módulo entero sobre cómo verificar.</p>
      <p>Una forma práctica de ubicarte: antes de usar IA en una tarea, preguntate <em>"¿cómo me daría cuenta si me contesta algo mal?"</em>. Si tenés una forma rápida de comprobarlo (un total que conocés, una suma en Excel), adelante. Si no tenés ninguna, usala solo para ideas, no para la respuesta final.</p>` },
    { titulo: "Cuidar los datos antes de subirlos", html: `
      <p class="idea">Subir una planilla a una IA es como mandarla por mail a alguien de afuera de la empresa. Antes de hacerlo, fijate qué tiene adentro y sacá lo que no debería salir.</p>
      <p><strong>Tres preguntas antes de subir un archivo:</strong></p>
      <ol>
        <li><strong>¿Tiene datos personales?</strong> Son los que permiten saber quién es una persona: nombre y apellido, DNI, mail, teléfono, dirección, número de cliente asociado a un nombre.</li>
        <li><strong>¿Tiene información confidencial?</strong> Precios negociados, sueldos, datos de clientes, resultados que todavía no se publicaron.</li>
        <li><strong>¿Qué dice tu empresa?</strong> Muchas empresas tienen reglas sobre qué herramientas de IA se pueden usar y con qué datos. Algunas tienen una cuenta corporativa con condiciones especiales. Si no sabés, preguntá antes.</li>
      </ol>
      <p><strong>Anonimizar</strong> es cambiar los datos que identifican a una persona por otros que no la identifican, sin perder lo que necesitás para el análisis:</p>
      <table>
        <tr><th>Antes</th><th>Después</th><th>¿Se pierde algo para el análisis?</th></tr>
        <tr><td>María González</td><td>Cliente 0142</td><td>No: sigue siendo la misma clienta en todas sus compras</td></tr>
        <tr><td>maria.g@mail.com</td><td>(columna borrada)</td><td>No, si no vas a analizar el mail</td></tr>
        <tr><td>Fecha de nacimiento</td><td>Grupo de edad: 30 a 39</td><td>Un poco de detalle, pero casi nunca hace falta el día exacto</td></tr>
      </table>
      <p><strong>Regla simple:</strong> subí solo las columnas que necesitás para la pregunta. Si querés saber qué sucursal vende más, no hacen falta los nombres de los clientes.</p>
      <p><strong>Revisá también la configuración de la herramienta.</strong> Algunas permiten elegir si tus conversaciones se usan para entrenar el modelo. Cambian seguido, así que mirá la configuración de tu cuenta y la política de tu empresa, no lo que diga un video viejo.</p>
      <p>Los datos de práctica de este curso son inventados, así que con ellos podés probar tranquilo.</p>` },
  ],
  practica: [
    "Subí la planilla \"ventas limpias\" a tu herramienta de IA y pedile, con código, cuántas filas y columnas tiene. Comparalo con la respuesta correcta: 947 filas y 10 columnas. Anotá si coincidió.",
    "Anotá 3 tareas con datos que hagas o te gustaría hacer (en un trabajo, en tu casa o en el trabajo que buscás). Para cada una escribí cómo te darías cuenta si la IA se equivoca. Probá con IA la que tenga la forma de control más clara y anotá cuánto tiempo te ahorró.",
    "Tomá tu planilla real y hacé una copia anonimizada: anotá qué columnas borraste, cuáles reemplazaste por códigos y por qué. Si es de una empresa, verificá con alguien de ahí que se puede subir.",
  ],
  recursos: [
    { t: "OpenAI: análisis de datos con ChatGPT (ayuda oficial)", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { t: "Claude: crear y editar archivos (análisis de planillas con Python)", url: "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude" },
    { t: "Microsoft: análisis avanzado con Copilot en Excel y Python", url: "https://support.microsoft.com/office/copilot-in-excel-with-python-364e4ae9-9343-4d56-952a-5f62b0f70db6" },
    { t: "El estudio de la frontera irregular (Dell'Acqua y otros, 2023, en inglés)", url: "https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf" },
    { t: "Libro: Cointeligencia, de Ethan Mollick (Conecta, 2024)", url: "https://www.casadellibro.com/libro-cointeligencia/9788418053214/16155367" },
  ],
  quiz: [
    { q: "Le pedís a la IA el total vendido en marzo y te da un número sin mostrar ningún cálculo. ¿Qué hacés?", opciones: ["Lo usás: si lo dice con seguridad, está bien","Le preguntás si está segura","Lo redondeás para que se vea más prolijo","Le pedís que lo calcule con código y te muestre la tabla y cómo lo hizo"], correcta: 3, explicacion: "Un número sin cálculo puede ser inventado: la IA escribe lo más probable, no necesariamente lo correcto. Preguntarle si está segura tienta, pero suele contestar que sí aunque esté mal; lo que sirve es que calcule con código y te muestre el resultado." },
    { q: "¿Por qué conviene que la IA calcule con código en vez de responder de memoria?", opciones: ["Porque el código es más lindo","Porque ejecuta la cuenta sobre tus datos reales y podés revisar cómo la hizo","Porque así no hace falta mirar el resultado","Porque el código nunca se equivoca"], correcta: 1, explicacion: "Con código, la cuenta se hace sobre tu planilla y queda a la vista. Que el código nunca se equivoca tienta, pero no es así: puede filtrar mal o elegir la columna equivocada, por eso igual se revisa." },
    { q: "Tu jefe te pide usar IA para todo. En el experimento con consultores de BCG, ¿qué pasó en la tarea que la IA hacía mal?", opciones: ["Les fue igual que sin IA","Les fue mejor, porque la IA siempre ayuda","Acertaron menos que quienes trabajaron sin IA","La IA avisó que no sabía"], correcta: 2, explicacion: "En la tarea fuera de la frontera, quienes usaron IA acertaron 19 puntos porcentuales menos. La IA no avisó: contestó con la misma seguridad. Por eso pensar que siempre ayuda es la trampa más peligrosa." },
    { q: "Tu compañero dice: \"si la IA resolvió bien una tarea difícil, una fácil la va a hacer bien seguro\". ¿Qué le respondés?", opciones: ["Que sí: si hace lo difícil, hace lo fácil","Que depende de la hora del día","Que cada IA sirve para un solo tipo de tarea","Que no: puede fallar en tareas que parecen igual de fáciles, y no siempre se nota cuál es cuál"], correcta: 3, explicacion: "Eso es la frontera irregular: el borde no sigue lo que a nosotros nos parece fácil o difícil. \"Si hace lo difícil, hace lo fácil\" tienta porque suena lógico, pero el estudio con consultores mostró que no funciona así." },
    { q: "Tenés que decidir si usás IA para un informe nuevo. ¿Qué te preguntás primero?", opciones: ["¿Cómo me daría cuenta si me contesta algo mal?","¿Cuál es la IA más nueva?","¿Cuánto tarda en responder?","¿Me va a dar la razón?"], correcta: 0, explicacion: "Si tenés una forma rápida de comprobar el resultado, podés usar la IA con tranquilidad. Elegir la IA más nueva tienta, pero ninguna versión elimina el riesgo de que se equivoque." },
    { q: "Querés saber qué sucursal vende más y tu planilla tiene nombre, mail y teléfono de cada cliente. ¿Qué hacés antes de subirla?", opciones: ["La subís completa, así la IA tiene más contexto","Borrás nombre, mail y teléfono: para esa pregunta no hacen falta","Cambiás la planilla a PDF","Le pedís a la IA que no lea esas columnas"], correcta: 1, explicacion: "Subí solo lo que necesita la pregunta. Pedirle que no lea esas columnas tienta, pero el archivo ya salió de tu computadora con los datos adentro." },
    { q: "Vas a subir una planilla y querés sacar los datos personales. ¿Cuál de estas columnas tenés que sacar o anonimizar?", opciones: ["El total vendido en marzo","La categoría del producto","El mail del cliente","El nombre de la sucursal"], correcta: 2, explicacion: "Un dato personal permite saber quién es una persona, y un mail lo hace. El nombre de una sucursal puede parecer sensible, pero no identifica a nadie." },
    { q: "Necesitás analizar las compras de cada cliente sin exponer quién es. ¿Qué hacés?", opciones: ["Borrás la columna de clientes","Dejás los nombres porque el análisis es interno","Juntás todos los clientes en una sola fila","Reemplazás cada nombre por un código, siempre el mismo para la misma persona"], correcta: 3, explicacion: "Con un código fijo por persona seguís sabiendo qué compras son de la misma clienta, sin saber quién es. Borrar la columna tienta por lo simple, pero ahí perdés justo lo que querías analizar." },
    { q: "En una empresa, ¿quién decide qué datos se pueden subir a una herramienta de IA?", opciones: ["La empresa, con sus reglas y las cuentas que habilita: si no sabés, preguntás antes","La herramienta de IA","Cada persona, según le parezca","Nadie: si es para trabajar, se puede todo"], correcta: 0, explicacion: "Muchas empresas tienen reglas y cuentas corporativas con condiciones especiales. Decidirlo uno mismo tienta porque es más rápido, pero el problema, si sale mal, es de la empresa y de sus clientes." },
    { q: "Si abrís el CSV de práctica en Excel y aparece todo en una sola columna, ¿qué pasó?", opciones: ["El archivo está roto","Excel no separó los valores por las comas: usá la versión Excel o Datos → Desde texto/CSV","Hay que pagar una versión de Excel","La IA ya no lo va a poder leer"], correcta: 1, explicacion: "Un CSV separa los valores con comas y, según la configuración regional, Excel a veces no los separa al abrirlo. Pensar que el archivo está roto tienta, pero los datos están bien: solo hay que importarlo." },
    { q: "La IA te da una conclusión sobre por qué bajaron las ventas. ¿Cómo la tratás?", opciones: ["Como un hecho, porque analizó los datos","Como una idea a comprobar: las causas son de lo que más hay que revisar","La descartás siempre","La copiás en el informe tal cual"], correcta: 1, explicacion: "Los datos muestran qué pasó, pero el porqué suele necesitar información que no está en la planilla. Descartarla siempre tienta como reacción, pero puede ser una buena pista para investigar." },
    { q: "Tu jefa te pide que le muestres el prompt que usaste para un análisis. ¿Qué le mostrás?", opciones: ["El gráfico final","La planilla que subiste","El informe terminado","El mensaje con instrucciones que le escribiste a la IA"], correcta: 3, explicacion: "El prompt es lo que vos le escribiste. La planilla tienta porque la subiste junto con el mensaje, pero dos personas con la misma planilla pueden pedir cosas muy distintas." },
  ],
},
{
  id: "preparar",
  icono: "🧹",
  titulo: "Preparar los datos antes de preguntar",
  nivel: "Básico",
  objetivos: [
    "Reconocer si una planilla está ordenada para analizar (una fila por caso, una columna por dato)",
    "Encontrar con ayuda de la IA los 6 problemas típicos de una planilla y decidir qué hacer con cada uno",
    "Escribir un diccionario de datos que explique cada columna",
  ],
  lecciones: [
    { titulo: "Una planilla ordenada: una fila por caso, una columna por dato", html: `
      <p class="idea">Una planilla ordenada es como un fichero bien armado: cada ficha es un caso y todas las fichas tienen los mismos casilleros. Si mezclás totales, títulos y notas en el medio, ni vos ni la IA pueden contar bien.</p>
      <p>Para que una planilla se pueda analizar, tiene que cumplir tres reglas. A esto se le dice <strong>tabla ordenada</strong>:</p>
      <ol>
        <li><strong>Cada fila es un caso:</strong> una venta, un cliente, un día. Nada de filas de subtotales en el medio.</li>
        <li><strong>Cada columna es un dato</strong> (también se le dice <em>variable</em>): fecha, sucursal, cantidad. Con un <strong>encabezado</strong> arriba que diga qué es.</li>
        <li><strong>Cada celda tiene un solo valor:</strong> no "3 unidades (2 devueltas)", sino una columna para cantidad y otra para devoluciones.</li>
      </ol>
      <p><strong>Así se ve la planilla de práctica</strong> (las primeras tres filas):</p>
      <table>
        <tr><th>id_venta</th><th>fecha</th><th>sucursal</th><th>categoria</th><th>producto</th><th>cantidad</th><th>precio_unitario</th><th>total</th><th>medio_pago</th><th>cliente</th></tr>
        <tr><td>V0001</td><td>2025-01-01</td><td>Centro</td><td>Almacén</td><td>Arroz 1 kg</td><td>4</td><td>1700</td><td>6800</td><td>Efectivo</td><td>Habitual</td></tr>
        <tr><td>V0002</td><td>2025-01-01</td><td>Centro</td><td>Bebidas</td><td>Agua 2 L</td><td>6</td><td>900</td><td>5400</td><td>Efectivo</td><td>Habitual</td></tr>
      </table>
      <p><strong>Errores de formato que más se ven en el trabajo</strong> (y que confunden a la IA):</p>
      <table>
        <tr><th>Problema</th><th>Por qué molesta</th><th>Cómo queda bien</th></tr>
        <tr><td>Celdas combinadas en el encabezado</td><td>La IA no sabe a qué columna pertenece cada valor</td><td>Un encabezado simple por columna</td></tr>
        <tr><td>Fila de "TOTAL" al final o en el medio</td><td>Se suma dos veces</td><td>Sin totales: los calculás después</td></tr>
        <tr><td>Un mes por columna (enero, febrero, marzo...)</td><td>Cada mes nuevo cambia la forma de la tabla</td><td>Una columna "mes" y otra "valor"</td></tr>
        <tr><td>Colores para marcar algo ("en rojo los atrasados")</td><td>La IA no lee colores de forma confiable</td><td>Una columna "estado" con la palabra</td></tr>
      </table>
      <p>Si tu planilla real tiene estos problemas, podés pedirle a la IA que la reorganice, y revisar el resultado antes de analizar:</p>
      <pre><code>Esta planilla tiene un mes por columna. Reorganizala para que quede
una fila por producto y mes, con columnas: producto, mes, unidades.
Decime cuántas filas tenía antes y cuántas tiene ahora.</code></pre>` },
    { titulo: "Los 6 problemas típicos y cómo encontrarlos con IA", html: `
      <p class="idea">Antes de cocinar, se lava la verdura. Antes de analizar, se limpian los datos: si sumás con errores adentro, el resultado sale mal aunque la cuenta esté perfecta.</p>
      <p><strong>Limpiar los datos</strong> es encontrar y corregir errores antes de analizar. Estos son los seis problemas que más aparecen:</p>
      <table>
        <tr><th>Problema</th><th>Ejemplo en las ventas sucias</th><th>Qué hacer, en general</th></tr>
        <tr><td><strong>Dato faltante</strong> (celda vacía)</td><td>5 ventas sin cantidad</td><td>Decidir: completar si sabés el valor, o sacar la fila y anotarlo</td></tr>
        <tr><td><strong>Duplicados</strong> (filas repetidas)</td><td>6 ventas que aparecen dos veces</td><td>Dejar una sola</td></tr>
        <tr><td>Mismo valor escrito distinto</td><td>"Sur", "sur", "SUR" y "Sur " (con un espacio al final)</td><td>Unificar en una sola forma</td></tr>
        <tr><td>Fechas en distintos formatos</td><td>"2025-03-14" y "14/03/2025"</td><td>Pasar todas al mismo formato</td></tr>
        <tr><td>Números guardados como texto</td><td>Precio "$1.250" en vez de 1250</td><td>Convertirlos a número</td></tr>
        <tr><td><strong>Valor atípico</strong> o imposible</td><td>Una venta de 400 unidades de un producto que se vende de a 1 a 6</td><td>Verificar: si es un error de tipeo, corregirlo; si es real, dejarlo y explicarlo</td></tr>
      </table>
      <p><strong>Por qué importa, con números.</strong> En las ventas sucias, la columna sucursal tiene 11 nombres distintos para 3 sucursales. Y si sumás el total tal cual está, da <strong>$6.969.550</strong>. Limpio da <strong>$6.270.350</strong>: casi un 11% de diferencia, por los duplicados y la venta de 400.</p>
      <p><strong>Primero el diagnóstico, después la limpieza.</strong> Pedile a la IA que te muestre los problemas antes de cambiar nada. Así decidís vos qué hacer con cada uno:</p>
      <pre><code>Revisá esta planilla y NO cambies nada todavía.
Hacé una lista de problemas: celdas vacías, filas duplicadas, valores
escritos de distintas formas, fechas con formatos distintos, números
guardados como texto y valores raros. Para cada problema decime en
qué columna está y cuántas filas afecta, con algunos ejemplos.</code></pre>
      <p>Después de limpiar, pedile siempre un <strong>registro de cambios</strong>: qué cambió y en cuántas filas. Si alguien te pregunta mañana por qué tus números no coinciden con los de otro, ese registro es tu respuesta.</p>
      <p><strong>Para comprobar tu limpieza:</strong> si tratás las ventas sucias como se explica arriba (sacar duplicados, sacar las 5 sin cantidad y corregir la de 400 a 4), te tienen que quedar <strong>947 filas</strong> y un total de <strong>$6.270.350</strong>, igual que en la planilla de ventas limpias.</p>` },
    { titulo: "El diccionario de datos: explicale tu planilla a la IA", html: `
      <p class="idea">Un diccionario de datos es el "manual de instrucciones" de tu planilla: dice qué significa cada columna. Sin él, la IA adivina, y adivinar con datos sale caro.</p>
      <p>La IA no sabe, por ejemplo, si "total" incluye impuestos, si "cliente: Nuevo" quiere decir primera compra del mes o de la historia, o qué hace tu empresa con las devoluciones. Un <strong>diccionario de datos</strong> es una tabla corta que lo explica:</p>
      <table>
        <tr><th>Columna</th><th>Qué es</th><th>Ejemplo</th><th>Aclaración</th></tr>
        <tr><td>id_venta</td><td>Código único de cada venta</td><td>V0001</td><td>No se repite</td></tr>
        <tr><td>fecha</td><td>Día de la venta</td><td>2025-03-14</td><td>Formato año-mes-día</td></tr>
        <tr><td>sucursal</td><td>Dónde se vendió</td><td>Centro</td><td>Una de tres: Centro, Norte, Sur</td></tr>
        <tr><td>cantidad</td><td>Unidades vendidas</td><td>2</td><td>Entre 1 y 6 es lo normal</td></tr>
        <tr><td>precio_unitario</td><td>Precio de una unidad, en pesos</td><td>1300</td><td>Sin impuestos aparte</td></tr>
        <tr><td>total</td><td>cantidad × precio_unitario</td><td>2600</td><td>En pesos</td></tr>
        <tr><td>cliente</td><td>Si ya había comprado antes</td><td>Habitual</td><td>Habitual o Nuevo</td></tr>
      </table>
      <p><strong>Cómo usarlo:</strong> pegalo al principio de la conversación, antes de pedir el análisis. Así la IA calcula con tus definiciones y no con las suyas.</p>
      <pre><code>Te paso una planilla de ventas y su diccionario de datos.
Usá estas definiciones para todo el análisis. Si una columna
no está en el diccionario, preguntame antes de usarla.
[diccionario]</code></pre>
      <p><strong>Truco:</strong> si no tenés el diccionario, pedile a la IA que lo arme a partir de la planilla y corregilo vos. Ella ve los valores; vos sabés qué significan. Ese "vos sabés qué significan" es justamente lo que hace que el análisis sea tuyo.</p>
      <p>El diccionario también sirve para tu equipo: el próximo que use la planilla entiende lo mismo que vos.</p>` },
  ],
  practica: [
    "Pedile a la IA un diagnóstico de la planilla \"ventas sucias\" sin cambiar nada. Compará su lista con los 6 problemas de la lección: anotá cuántos encontró y cuáles se le escaparon.",
    "Limpiá la planilla \"ventas sucias\" con ayuda de la IA y pedile un registro de cambios. Verificá el resultado: tienen que quedar 947 filas, 3 sucursales y un total de $6.270.350.",
    "Escribí el diccionario de datos de tu planilla real, con al menos 5 columnas y una aclaración en cada una. Pedile a la IA que te diga qué columna le resulta ambigua y corregila.",
  ],
  recursos: [
    { t: "Tidy Data, el artículo que definió la tabla ordenada (Wickham, 2014, en inglés)", url: "https://www.jstatsoft.org/article/view/v059i10" },
    { t: "OpenAI: tipos de archivo y límites para analizar datos", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
  ],
  quiz: [
    { q: "Tu planilla tiene una fila de \"TOTAL\" al final y le pedís a la IA el total vendido. ¿Qué riesgo hay?", opciones: ["Ninguno: la IA ignora los totales","Que lo ponga en negrita","Que sume el total junto con las ventas y el resultado salga el doble","Que tarde más"], correcta: 2, explicacion: "La fila de total se ve como una venta más y se suma dos veces. Pensar que la IA la ignora tienta, pero no tiene forma de saber que esa fila es distinta si no se lo decís." },
    { q: "Tenés una planilla con un mes por columna (enero, febrero, marzo). ¿Cómo queda ordenada?", opciones: ["Con una columna \"mes\" y otra \"valor\": una fila por cada producto y mes","Igual: así está bien","Con un mes por hoja","Pintando cada mes de un color"], correcta: 0, explicacion: "En una tabla ordenada, el mes es un dato, así que va en una columna. Un mes por hoja tienta porque parece prolijo, pero obliga a juntar las hojas para cualquier comparación." },
    { q: "En tu planilla marcaste en rojo los pedidos atrasados. ¿Qué conviene hacer antes de pedir el análisis?", opciones: ["Nada, la IA ve los colores","Agregar una columna \"estado\" con la palabra \"atrasado\"","Usar un rojo más fuerte","Mandar una captura de pantalla"], correcta: 1, explicacion: "La IA no lee colores de forma confiable y el color no es un dato que se pueda contar. La captura de pantalla tienta, pero con una imagen los valores exactos se pueden leer mal." },
    { q: "La columna sucursal tiene \"Sur\", \"sur\" y \"Sur \" (con un espacio). ¿Qué pasa si agrupás así?", opciones: ["Nada, la IA entiende que son lo mismo","Se borra la sucursal","Da error y no calcula","Aparecen como tres sucursales distintas y los totales se reparten mal"], correcta: 3, explicacion: "Para una cuenta, \"Sur\" y \"Sur \" son textos distintos. Pensar que la IA entiende que son lo mismo tienta, y a veces lo hace, pero no podés contar con eso: unificalos primero." },
    { q: "La IA encuentra una venta de 400 unidades de yerba en una planilla donde lo normal es de 1 a 6. ¿Qué hacés?", opciones: ["La borrás sin mirar","La dejás porque los datos son sagrados","Verificás si es un error de tipeo: si lo es, la corregís y lo anotás; si es real, la dejás y la explicás","Le pedís a la IA que la reemplace por el promedio"], correcta: 2, explicacion: "Un valor atípico puede ser un error o algo real e importante, como una venta grande. Borrarlo sin mirar tienta por rápido, pero podés perder justo el dato que importa." },
    { q: "¿Por qué conviene pedirle a la IA un diagnóstico de problemas antes de que limpie?", opciones: ["Para que vos decidas qué hacer con cada problema, en vez de que ella elija en silencio","Porque es más rápido","Porque la IA no sabe limpiar","No conviene: mejor que limpie directo"], correcta: 0, explicacion: "Cada problema se puede resolver de varias formas, y elegir es una decisión de negocio. Que limpie directo tienta por ahorrar un paso, pero después no sabés qué cambió." },
    { q: "Limpiaste la planilla con IA y tus totales no coinciden con los de un compañero. ¿Qué te ayuda más a explicar la diferencia?", opciones: ["Repetir el análisis hasta que coincidan","El registro de cambios: qué se cambió y en cuántas filas","Usar otra herramienta de IA","Promediar los dos resultados"], correcta: 1, explicacion: "El registro muestra exactamente qué decisiones tomaste, por ejemplo sacar 5 filas sin cantidad. Promediar tienta como salida rápida, pero esconde el problema en vez de explicarlo." },
    { q: "Si sumás las ventas sucias tal cual, da $6.969.550; limpias dan $6.270.350. ¿Qué concluís?", opciones: ["Que hay que usar siempre el número más alto","Que la IA calcula mal","Que la diferencia es un error de redondeo","Que los errores de la planilla, como duplicados y un valor imposible, inflaron el total casi un 11%"], correcta: 3, explicacion: "La cuenta estaba bien; los datos no. Pensar que la IA calcula mal tienta, pero el problema estaba en la planilla, por eso se limpia antes de analizar." },
    { q: "Si le pedís a la IA un análisis sin diccionario de datos y la columna \"total\" podría incluir o no impuestos, ¿qué pasa?", opciones: ["La IA elige una interpretación sin avisarte, y tu conclusión puede estar mal","La IA pregunta siempre","No importa para el análisis","La IA busca la respuesta en internet"], correcta: 0, explicacion: "Si algo es ambiguo, la IA suele asumir algo y seguir. Creer que siempre pregunta tienta, pero muchas veces no lo hace, salvo que se lo pidas." },
    { q: "Un compañero nuevo va a usar tu planilla y no sabe qué significa cada columna. ¿Qué le preparás?", opciones: ["Una lista de los errores que limpiaste","Un gráfico de cada columna","Un traductor al inglés","Un diccionario de datos: una tabla con qué es cada columna, un ejemplo y aclaraciones"], correcta: 3, explicacion: "El diccionario es el manual de la planilla. La lista de errores tienta porque también se arma antes de analizar, pero dice qué se corrigió, no qué significa cada columna." },
    { q: "No tenés diccionario de datos y te falta tiempo. ¿Qué hacés?", opciones: ["Analizás igual sin explicar nada","Le pedís a la IA que lo arme a partir de la planilla y vos corregís lo que significa cada columna","Le pedís que invente las definiciones","Esperás a tener tiempo para hacerlo a mano"], correcta: 1, explicacion: "La IA ve los valores y vos sabés qué significan: juntos lo arman rápido. Analizar sin explicar tienta por apuro, pero es lo que más errores silenciosos genera." },
    { q: "Después de limpiar las ventas sucias, ¿cómo comprobás que lo hiciste bien?", opciones: ["Si la IA dice que terminó, está bien","Mirando que la planilla se vea prolija","Contando las celdas vacías a ojo","Comparando con valores conocidos: 947 filas, 3 sucursales y un total de $6.270.350"], correcta: 3, explicacion: "Verificar es comparar con algo que ya sabés. Que la IA diga que terminó tienta como confirmación, pero terminar no es lo mismo que hacerlo bien." },
  ],
},
{
  id: "preguntar",
  icono: "💬",
  titulo: "Preguntá: cómo pedirle un análisis a la IA",
  nivel: "Básico",
  objetivos: [
    "Convertir una inquietud vaga (\"¿cómo venimos?\") en una pregunta que se pueda responder con los datos",
    "Escribir un pedido de análisis completo con la plantilla de 5 partes",
    "Repreguntar para ver supuestos, cálculos intermedios y otras explicaciones posibles",
  ],
  lecciones: [
    { titulo: "De la inquietud a la pregunta: empezá por la decisión", html: `
      <p class="idea">"¿Cómo venimos?" no es una pregunta que los datos puedan responder: es una inquietud. Una buena pregunta dice qué decisión querés tomar y qué número te ayudaría a tomarla.</p>
      <p>La mayoría de los análisis que no sirven fallan antes de abrir la planilla: la pregunta era vaga. Un camino simple de tres pasos:</p>
      <ol>
        <li><strong>¿Qué decisión tengo que tomar?</strong> Por ejemplo: "¿En qué sucursal pongo una persona más los fines de semana?".</li>
        <li><strong>¿Qué necesito saber para decidir?</strong> "Qué sucursal tiene más ventas los viernes, sábados y domingos".</li>
        <li><strong>¿Cómo lo mido con mis datos?</strong> "Cantidad de ventas por sucursal y día de la semana, de enero a junio".</li>
      </ol>
      <table>
        <tr><th>Vaga</th><th>Que se puede responder</th></tr>
        <tr><td>¿Cómo venimos?</td><td>¿Cuánto vendimos por mes de enero a junio, y en qué mes cambió la tendencia?</td></tr>
        <tr><td>¿Anda bien el QR?</td><td>¿Qué porcentaje de las ventas de cada mes se pagó con QR?</td></tr>
        <tr><td>¿Qué pasa con Norte?</td><td>¿Cómo evolucionaron las ventas de Norte mes a mes, comparadas con Centro y Sur?</td></tr>
      </table>
      <p>Fijate que la columna de la derecha dice qué medir (ventas, porcentaje), cómo cortarlo (por mes, por sucursal) y en qué período. Esos tres datos son los que la IA necesita para no adivinar.</p>
      <p><strong>Una señal de que la pregunta es buena:</strong> podés imaginar la tabla o el gráfico de la respuesta antes de verla. Si no te imaginás qué forma tendría, la pregunta todavía está vaga.</p>
      <p>Esto conecta con lo que viste sobre la frontera irregular: con una pregunta clara, la IA trabaja en terreno firme y vos sabés qué resultado esperar, así que también sabés reconocer cuándo algo no cierra.</p>` },
    { titulo: "Un pedido completo: la plantilla de 5 partes", html: `
      <p class="idea">Pedirle un análisis a la IA es como encargarle un trabajo a alguien que entró hoy a la empresa: le contás para qué es, qué datos tiene, qué querés, cómo hacerlo y cómo entregarlo.</p>
      <p><strong>La plantilla:</strong></p>
      <table>
        <tr><th>Parte</th><th>Qué dice</th><th>Ejemplo</th></tr>
        <tr><td>1. Contexto</td><td>Quién sos y para qué es</td><td>Soy encargada de un almacén con 3 sucursales. Es para la reunión del lunes.</td></tr>
        <tr><td>2. Datos</td><td>Qué tiene la planilla</td><td>Ventas de enero a junio de 2025, una fila por venta. Te paso el diccionario de datos.</td></tr>
        <tr><td>3. Pregunta</td><td>Qué querés saber</td><td>¿Qué porcentaje de las ventas de cada mes se pagó con QR?</td></tr>
        <tr><td>4. Cómo</td><td>Cómo calcular y qué revisar</td><td>Calculalo con código. Contá ventas, no pesos. Primero decime tu plan.</td></tr>
        <tr><td>5. Entrega</td><td>Cómo querés el resultado</td><td>Una tabla por mes y un gráfico de líneas. Al final, 2 frases con la conclusión.</td></tr>
      </table>
      <p>Todo junto:</p>
      <pre><code>Soy encargada de un almacén con 3 sucursales y preparo la reunión del lunes.
Te paso las ventas de enero a junio de 2025 (una fila por venta) y el
diccionario de datos.
Pregunta: ¿qué porcentaje de las ventas de cada mes se pagó con QR?
Calculalo con código y contá ventas, no pesos. Antes de calcular,
contame en 3 pasos cómo lo vas a hacer y esperá mi confirmación.
Entrega: una tabla por mes, un gráfico de líneas y 2 frases de conclusión.</code></pre>
      <p><strong>Por qué "primero decime tu plan":</strong> si la IA entendió mal (por ejemplo, va a sumar pesos en vez de contar ventas), lo ves antes de que calcule. Corregir un plan cuesta una línea; corregir un informe terminado cuesta una hora.</p>
      <p><strong>Para comprobar con los datos de práctica:</strong> el resultado correcto muestra que el QR pasó de un 12% de las ventas en enero a un 44% en junio, con el pico en mayo (48%). Si la IA te da otra cosa, revisá si contó ventas o sumó pesos.</p>` },
    { titulo: "Conversar: repreguntar, ver los supuestos y pedir alternativas", html: `
      <p class="idea">La primera respuesta de la IA es un borrador, no el final. Lo que más mejora un análisis es repreguntar, como harías con un compañero: "¿de dónde sale ese número?", "¿y si lo miramos de otra forma?".</p>
      <p><strong>Cinco repreguntas que conviene tener a mano:</strong></p>
      <ol>
        <li><strong>"¿Qué supuestos hiciste?"</strong> Un <em>supuesto</em> es algo que la IA dio por cierto sin que se lo dijeras: que "total" no incluye impuestos, que una fila vacía es cero.</li>
        <li><strong>"Mostrame la tabla intermedia."</strong> Antes del porcentaje final, la tabla con los números de los que sale. Ahí se ven los errores.</li>
        <li><strong>"¿Cuántas filas usaste?"</strong> Si dice 900 y la planilla tiene 947, algo se filtró en el camino.</li>
        <li><strong>"¿Qué otra explicación podría haber?"</strong> Sirve para no quedarte con la primera idea.</li>
        <li><strong>"¿Qué dato me falta para estar seguro?"</strong> Muestra hasta dónde llega lo que tenés.</li>
      </ol>
      <p><strong>Cuidado con preguntar pidiendo confirmación.</strong> Si escribís "confirmame que Norte crece por la campaña de marzo", la IA tiende a darte la razón y a buscar argumentos a favor. Preguntá abierto:</p>
      <table>
        <tr><th>Sesgada (busca confirmación)</th><th>Abierta</th></tr>
        <tr><td>Confirmame que Norte crece por la campaña</td><td>¿Cómo evolucionó Norte y qué puede explicar ese cambio?</td></tr>
        <tr><td>Demostrame que el QR es mejor</td><td>¿Cómo cambió el uso de cada medio de pago?</td></tr>
      </table>
      <p>A esa tendencia de buscar lo que confirma lo que ya pensábamos se le dice <strong>sesgo de confirmación</strong>. Lo tenemos las personas, y la IA lo amplifica porque está entrenada para ser útil y complaciente.</p>
      <p><strong>Cuándo arrancar de nuevo:</strong> si la conversación se hizo muy larga o mezclaste varios temas, abrí una nueva y pegá solo lo importante (el diccionario y la pregunta). Una conversación limpia da respuestas más prolijas.</p>` },
  ],
  practica: [
    "Escribí 3 inquietudes sobre tu planilla real (por ejemplo, \"¿gasto mucho en comida?\") y convertí cada una en una pregunta que diga qué medir, cómo cortarlo y en qué período. Para cada una, dibujá a mano la tabla o el gráfico que esperás ver.",
    "Con la planilla \"ventas limpias\", pedí con la plantilla de 5 partes el porcentaje de ventas pagadas con QR por mes. Verificá: enero 12% y junio 44%. Anotá si la IA mostró su plan antes de calcular.",
    "Hacé la misma pregunta de dos formas, una sesgada (\"confirmame que...\") y una abierta, en conversaciones separadas. Compará las dos respuestas y anotá qué cambió.",
  ],
  recursos: [
    { t: "OpenAI: análisis de datos con ChatGPT (ayuda oficial)", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { t: "Claude: crear y editar archivos (análisis de planillas con Python)", url: "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude" },
    { t: "Libro: Cointeligencia, de Ethan Mollick (Conecta, 2024)", url: "https://www.casadellibro.com/libro-cointeligencia/9788418053214/16155367" },
  ],
  quiz: [
    { q: "Tu jefa te pregunta \"¿cómo venimos?\". Antes de abrir la planilla, ¿qué hacés?", opciones: ["Le pedís a la IA que analice todo","Armás un gráfico de cada columna","Le preguntás qué decisión quiere tomar, para saber qué medir","Le mandás la planilla completa"], correcta: 2, explicacion: "Sin saber la decisión, cualquier número parece respuesta. Pedirle a la IA que analice todo tienta, pero devuelve una montaña de resultados que no contestan nada en particular." },
    { q: "Tenés que hacerle una pregunta a la IA sobre la planilla de ventas. ¿Cuál se puede responder con esos datos?", opciones: ["¿Anda bien el negocio?","¿Los clientes están contentos?","¿Qué porcentaje de las ventas de cada mes se pagó con QR, de enero a junio?","¿Qué va a pasar el año que viene?"], correcta: 2, explicacion: "Dice qué medir, cómo cortarlo y en qué período. Lo de los clientes contentos tienta porque parece importante, pero la planilla no tiene datos de satisfacción." },
    { q: "Escribiste la pregunta de tu análisis. ¿Qué señal te indica que ya está lo bastante clara?", opciones: ["Que podés imaginar la tabla o el gráfico de la respuesta antes de verla","Que es larga","Que tiene palabras técnicas","Que la IA la entiende"], correcta: 0, explicacion: "Si te imaginás la forma del resultado, sabés qué pedir y qué esperar. Que la IA la entienda tienta como señal, pero la IA casi siempre contesta algo, aunque la pregunta sea vaga." },
    { q: "Si le pedís un análisis y la IA te manda directo un informe largo con un error de base, ¿qué te habría ahorrado el problema?", opciones: ["Pedirle que sea más breve","Usar otra herramienta","Escribir en mayúsculas","Pedirle que primero te explique su plan y espere tu confirmación"], correcta: 3, explicacion: "Si ves el plan antes del cálculo, corregís el malentendido en una línea. Que sea más breve tienta, pero un informe corto con el mismo error sigue estando mal." },
    { q: "Estás escribiendo tu pedido de análisis y dudás si poner el contexto. ¿Para qué sirve?", opciones: ["Para que la IA sepa quién sos y para qué es, y adapte el análisis","Para que sea más amable","No sirve, es relleno","Para que la respuesta salga más larga"], correcta: 0, explicacion: "No es lo mismo un análisis para la reunión del lunes que para un informe anual. Pensar que es relleno tienta porque no es una instrucción directa, pero cambia qué se prioriza." },
    { q: "Querés el porcentaje de ventas con QR y la IA te da el porcentaje de pesos cobrados con QR. ¿Qué parte del pedido faltó aclarar?", opciones: ["El contexto","El cómo: contar ventas, no sumar pesos","La entrega","El saludo"], correcta: 1, explicacion: "Son dos preguntas distintas y pueden dar números distintos. Echarle la culpa al contexto tienta, pero lo que faltó fue decir cómo calcular." },
    { q: "Si la IA te da un porcentaje final, ¿qué repregunta te ayuda más a encontrar un error?", opciones: ["¿Estás segura?","¿Podés hacerlo más lindo?","Mostrame la tabla intermedia de la que sale ese porcentaje","¿Podés resumirlo?"], correcta: 2, explicacion: "En la tabla intermedia se ven los números que dan origen al resultado, y ahí aparecen los errores. Preguntar si está segura tienta, pero suele contestar que sí aunque esté mal." },
    { q: "La IA dice que usó 900 filas y tu planilla tiene 947. ¿Qué concluís?", opciones: ["Que se filtraron 47 filas en algún paso y hay que averiguar cuáles y por qué","Que es un redondeo","Que la IA es más precisa","Nada: 900 está cerca"], correcta: 0, explicacion: "Las filas que faltan pueden ser justo las que cambian la conclusión. Pensar que 900 está cerca tienta, pero son 47 ventas fuera del cálculo." },
    { q: "Si pensás que Norte crece por la campaña de marzo, ¿cómo le preguntás a la IA?", opciones: ["Confirmame que Norte crece por la campaña","Demostrame que la campaña funcionó","No le preguntás nada","¿Cómo evolucionó Norte y qué puede explicar ese cambio?"], correcta: 3, explicacion: "Una pregunta abierta deja lugar a otras explicaciones. Pedir que confirme tienta porque ya tenés la idea, pero la IA tiende a darte la razón: es el sesgo de confirmación amplificado." },
    { q: "En tu análisis, la IA trató las celdas vacías como cero sin que se lo pidieras. ¿Qué es eso?", opciones: ["Un error de cálculo","Un supuesto: algo que dio por cierto sin que nadie lo dijera","Una pregunta abierta","Un gráfico"], correcta: 1, explicacion: "Un supuesto no es un error en sí, pero si no lo ves puede cambiar el resultado. Llamarlo error de cálculo tienta, pero la cuenta puede estar perfecta y el supuesto ser falso." },
    { q: "La conversación con la IA ya tiene 40 mensajes y mezclaste tres temas. Las respuestas empiezan a confundir cosas. ¿Qué hacés?", opciones: ["Seguís en la misma conversación","Escribís más fuerte","Abrís una conversación nueva y pegás solo lo importante: el diccionario y la pregunta","Cambiás de computadora"], correcta: 2, explicacion: "Una conversación limpia evita que la IA mezcle temas viejos. Seguir en la misma tienta para no perder lo hecho, pero lo importante lo podés copiar en la nueva." },
    { q: "Tu compañero solo le pide a la IA datos que apoyan su idea y descarta el resto. ¿Cómo se llama eso?", opciones: ["Sesgo de confirmación: buscar lo que confirma lo que ya pensábamos","Limpieza de datos","Paradoja de Simpson","Frontera irregular"], correcta: 0, explicacion: "Lo tenemos las personas y la IA lo amplifica porque busca ser complaciente. La paradoja de Simpson tienta porque también lleva a conclusiones equivocadas, pero viene de juntar grupos distintos, no de cómo preguntamos." },
  ],
},
{
  id: "estadistica",
  icono: "📏",
  titulo: "Analizá sin engañarte: estadística para el trabajo",
  nivel: "Básico",
  objetivos: [
    "Elegir entre promedio y mediana según si hay valores muy grandes o muy chicos",
    "Distinguir porcentaje de puntos porcentuales y no dejarte engañar por bases chicas",
    "Explicar con un ejemplo por qué dos cosas que suben juntas no prueban que una cause la otra",
    "Decidir si una muestra alcanza para sacar una conclusión",
  ],
  lecciones: [
    { titulo: "Promedio, mediana y rango: cuál usar", html: `
      <p class="idea">Si en una reunión hay nueve personas que ganan un sueldo normal y entra el dueño de la empresa, el sueldo promedio de la sala se dispara, aunque nadie más gane distinto. La mediana, en cambio, casi no se mueve. Por eso hay que saber cuál mirar.</p>
      <ul>
        <li><strong>Promedio</strong> (o media): sumás todos los valores y dividís por cuántos son.</li>
        <li><strong>Mediana:</strong> ordenás los valores de menor a mayor y tomás el del medio. La mitad queda por debajo y la otra mitad por arriba.</li>
        <li><strong>Rango:</strong> la distancia entre el valor más chico y el más grande. Muestra qué tan desparejos son los datos.</li>
      </ul>
      <p><strong>Ejemplo con 5 ventas</strong> (en pesos):</p>
      <pre><code>1.300   2.100   2.600   3.400   29.400

Promedio: (1.300 + 2.100 + 2.600 + 3.400 + 29.400) / 5 = 7.760
Mediana:  el del medio, ordenados = 2.600
Rango:    29.400 - 1.300 = 28.100</code></pre>
      <p>Una sola venta grande lleva el promedio a $7.760, aunque cuatro de las cinco ventas son de menos de $3.500. La mediana, $2.600, describe mejor una venta típica.</p>
      <p><strong>En los datos de práctica pasa lo mismo:</strong> la venta promedio de La Esquina es de <strong>$6.621</strong>, pero la mediana es de <strong>$4.200</strong>. Hay pocas ventas grandes (varios quesos, por ejemplo) que tiran el promedio para arriba.</p>
      <table>
        <tr><th>Usá...</th><th>Cuando...</th><th>Ejemplo</th></tr>
        <tr><td>Promedio</td><td>Querés repartir un total o los valores son parejos</td><td>Cuánto se vendió por día en promedio para planificar la caja</td></tr>
        <tr><td>Mediana</td><td>Hay valores muy grandes o muy chicos que no son lo típico</td><td>Cuánto gasta un cliente típico, sueldos, precios de casas</td></tr>
      </table>
      <p><strong>Pedíselo a la IA así:</strong> "Calculá el promedio y la mediana de la venta, y decime si son muy distintos y por qué". Si son muy distintos, hay valores extremos que conviene mirar de cerca.</p>` },
    { titulo: "Porcentajes que engañan: puntos, bases chicas y tasas", html: `
      <p class="idea">"Creció un 266%" suena enorme, pero puede ser que una sucursal chiquita pasó de vender poco a vender un poco más. Los porcentajes dicen cuánto cambió algo comparado consigo mismo, no si es mucho o poco.</p>
      <p><strong>1. Porcentaje no es lo mismo que punto porcentual.</strong> En La Esquina, las ventas pagadas con QR pasaron del 12% en enero al 44% en junio:</p>
      <ul>
        <li>Subieron <strong>32 puntos porcentuales</strong>: la resta, 44 − 12.</li>
        <li>O, dicho de otra forma, se multiplicaron por casi 4: un aumento de alrededor del 267% (32 dividido 12).</li>
      </ul>
      <p>Las dos frases son ciertas, pero si decís "el QR subió un 32%" estás mezclando las dos y das un número equivocado. Cuando comparás dos porcentajes, hablá de <strong>puntos porcentuales</strong>.</p>
      <p><strong>2. Las bases chicas exageran.</strong> La <em>base</em> es el número del que partís. Norte vendió $142.300 en enero y $520.500 en junio:</p>
      <table>
        <tr><th>Sucursal</th><th>Enero</th><th>Junio</th><th>Cambio</th><th>Todo el semestre</th></tr>
        <tr><td>Norte</td><td>$142.300</td><td>$520.500</td><td>+266%</td><td>$1.670.050</td></tr>
        <tr><td>Centro</td><td>$456.000</td><td>$453.100</td><td>−1%</td><td>$2.891.950</td></tr>
      </table>
      <p>Norte creció muchísimo, y es una buena noticia. Pero partía de muy abajo: en el semestre completo, Centro facturó bastante más. Siempre mostrá el porcentaje <strong>junto con los números de origen</strong>: así se ve a la vez que Norte crece rápido y que Centro sigue siendo la más grande.</p>
      <p><strong>3. Comparar totales o comparar tasas.</strong> Una <em>tasa</em> es un valor dividido por algo que lo hace comparable: ventas por día, reclamos cada 100 ventas. Centro tiene más ventas que Sur porque tiene más clientes; eso no dice que venda mejor. El <strong>ticket promedio</strong> (lo que se gasta en promedio por venta) es casi igual en las tres: unos $6.600. Centro vende más porque vende más veces, no porque cada venta sea más grande.</p>
      <pre><code>Para comparar sucursales, calculá el total, la cantidad de ventas
y el ticket promedio de cada una. Decime qué explica más la diferencia:
cuántas ventas hay o cuánto se gasta en cada una.</code></pre>` },
    { titulo: "Que dos cosas suban juntas no prueba que una cause la otra", html: `
      <p class="idea">En verano se venden más helados y también hay más gente que se ahoga en el mar. Los helados no ahogan a nadie: las dos cosas suben por el calor. Cuando dos números se mueven juntos, puede haber una tercera cosa detrás.</p>
      <p><strong>Correlación</strong> es que dos cosas suban o bajen juntas. <strong>Causalidad</strong> es que una provoque la otra. La IA, y las personas, saltan muy rápido de una a otra.</p>
      <p><strong>Un ejemplo de La Esquina:</strong> de enero a junio, en Norte subieron a la vez las ventas y el pago con QR. ¿El QR hizo vender más? Puede ser, pero también puede ser que Norte esté en un barrio que crece, o que todo el mundo use más QR con el tiempo. Los datos muestran que van juntos; no muestran por qué.</p>
      <p><strong>La paradoja de Simpson: cuando juntar los grupos da vuelta la conclusión.</strong> El almacén mandó una oferta por mail y otra por WhatsApp y midió cuántos clientes compraron:</p>
      <table>
        <tr><th></th><th>Mail</th><th>WhatsApp</th></tr>
        <tr><td>Clientes habituales</td><td>81 de 87 (93%)</td><td>234 de 270 (87%)</td></tr>
        <tr><td>Clientes nuevos</td><td>192 de 263 (73%)</td><td>55 de 80 (69%)</td></tr>
        <tr><td><strong>Todos juntos</strong></td><td><strong>273 de 350 (78%)</strong></td><td><strong>289 de 350 (83%)</strong></td></tr>
      </table>
      <p>El mail gana en los habituales y gana en los nuevos, pero <em>todos juntos</em> gana WhatsApp. ¿Cómo puede ser? Porque WhatsApp se mandó sobre todo a habituales, que compran más igual. A ese efecto se le dice <strong>paradoja de Simpson</strong>, y aparece cada vez que los grupos que comparás tienen composiciones distintas.</p>
      <p><strong>Qué hacer en la práctica:</strong></p>
      <ul>
        <li>Antes de concluir "A causa B", preguntá: ¿qué otra cosa podría explicar las dos?</li>
        <li>Cuando compares dos opciones, mirá también por grupos (por sucursal, por tipo de cliente).</li>
        <li>Pedile a la IA: "¿Qué otras explicaciones hay, además de la causa directa?".</li>
      </ul>` },
    { titulo: "Pocos casos, mucho azar: cuándo una muestra alcanza", html: `
      <p class="idea">Si tirás una moneda 4 veces y sale cara 3, no pensás que la moneda está cargada. Con pocos casos, el azar hace mucho ruido. Con los datos del trabajo pasa lo mismo, aunque se nos olvide.</p>
      <p>Una <strong>muestra</strong> es la parte de los casos que estás mirando: 10 clientes encuestados de los 2.000 que tenés, o la última semana de ventas. Con una <strong>muestra chica</strong>, el resultado puede cambiar mucho solo por casualidad.</p>
      <table>
        <tr><th>Encuestaste a...</th><th>Contentos</th><th>¿Qué tan seguro estás de que "70% está contento"?</th></tr>
        <tr><td>10 clientes</td><td>7</td><td>Poco: con 2 clientes más o menos contentos, pasa a 50% o 90%</td></tr>
        <tr><td>100 clientes</td><td>70</td><td>Bastante: harían falta 20 cambios para moverlo 20 puntos</td></tr>
        <tr><td>1.000 clientes</td><td>700</td><td>Mucho</td></tr>
      </table>
      <p><strong>Tres situaciones típicas del trabajo:</strong></p>
      <ul>
        <li><strong>"Este mes bajamos."</strong> Un solo mes puede ser azar o algo puntual. En La Esquina, Sur vendió menos en abril, pero fue porque cerró del 7 al 20 por arreglos. Antes de hablar de tendencia, mirá varios meses y preguntá si pasó algo especial.</li>
        <li><strong>"Probamos 3 días y funcionó."</strong> Tres días es muy poco. Si podés, comparalo con los mismos días de la semana sin el cambio.</li>
        <li><strong>"Los que respondieron la encuesta están contentos."</strong> Si respondieron solo los más fieles, la muestra no representa a todos.</li>
      </ul>
      <p>No hace falta hacer cálculos difíciles. Basta con dos preguntas: <strong>¿cuántos casos son?</strong> y <strong>¿se parecen a todos los demás?</strong> Y podés pedirle a la IA:</p>
      <pre><code>¿Esta diferencia podría ser casualidad con esta cantidad de casos?
Explicámelo sin fórmulas y decime cuántos casos harían falta
para estar más seguro.</code></pre>
      <p>Esto vuelve en el módulo de verificar: con pocos datos, cualquier número de la IA, aunque esté bien calculado, puede estar contando una historia que no es.</p>` },
  ],
  practica: [
    "Con \"ventas limpias\", pedile a la IA el promedio y la mediana del total por venta. Verificá: $6.621 y $4.200. Pedile que te muestre las 5 ventas más grandes y anotá qué productos son.",
    "Calculá vos, con la planilla, cuántos puntos porcentuales subió el pago con QR entre enero (12%) y junio (44%), y cuánto subió en porcentaje. Escribí una frase correcta para un informe con cada número.",
    "Buscá un caso de \"dos cosas que suben juntas\" en tu planilla real o en una noticia. Escribí 2 explicaciones distintas a \"una causa la otra\" y anotá qué dato necesitarías para distinguirlas.",
    "Calculá a mano, con la tabla de la lección sobre la oferta por mail y WhatsApp, los porcentajes de cada grupo y del total. Verificá que el mail gana en cada grupo y WhatsApp en el total, y explicalo en dos frases.",
  ],
  recursos: [
    { t: "Libro: El arte de la estadística, de David Spiegelhalter (Capitán Swing)", url: "https://www.marcialpons.es/libros/el-arte-de-la-estadistica/9788412619850/" },
    { t: "Seeing Theory: probabilidad y estadística con gráficos (Brown University, en inglés)", url: "https://seeing-theory.brown.edu/" },
    { t: "Khan Academy: estadística y probabilidad", url: "https://www.khanacademy.org/math/statistics-probability" },
    { t: "Libro: Factfulness, de Hans Rosling (Deusto)", url: "https://www.marcialpons.es/libros/factfulness/9788423429967/" },
  ],
  quiz: [
    { q: "Querés contar cuánto gasta un cliente típico, y hay unas pocas compras enormes. ¿Qué número usás?", opciones: ["El promedio","La mediana","La venta más grande","La suma total"], correcta: 1, explicacion: "La mediana no se mueve por unos pocos valores enormes. El promedio tienta porque es el más conocido, pero las compras grandes lo tiran para arriba y deja de describir lo típico." },
    { q: "Tu planilla tiene ventas de 1.300, 2.100, 2.600, 3.400 y 29.400. ¿Cuál es la mediana?", opciones: ["7.760","29.400","2.600","28.100"], correcta: 2, explicacion: "Ordenadas, la del medio es 2.600. El 7.760 tienta porque es el promedio, otra medida distinta; y 28.100 es el rango." },
    { q: "Si el promedio por venta es $6.621 y la mediana $4.200, ¿qué te dice esa diferencia?", opciones: ["Que hay unas pocas ventas grandes que tiran el promedio para arriba","Que la IA calculó mal","Que la mayoría de las ventas son de más de $6.621","Nada, siempre son distintos"], correcta: 0, explicacion: "Cuando el promedio supera bastante a la mediana, hay valores grandes poco frecuentes. Pensar que la mayoría vende más de $6.621 tienta, pero la mediana dice que la mitad de las ventas es de menos de $4.200." },
    { q: "Querés saber cuánta plata entra en promedio por día para planificar la caja del mes. ¿Qué medida conviene?", opciones: ["La mediana por venta","El rango","La venta más chica","El promedio diario: sirve para repartir un total"], correcta: 3, explicacion: "Para repartir un total (cuánto entra por día en un mes) se usa el promedio. La mediana tienta porque es más robusta, pero no te permite reconstruir el total del mes." },
    { q: "Tenés que contar en un informe que el pago con QR pasó del 12% al 44% de las ventas. ¿Cuál frase es correcta?", opciones: ["Subió 32 puntos porcentuales","Subió un 32%","Subió un 44%","Bajó el efectivo un 32%"], correcta: 0, explicacion: "La resta de dos porcentajes da puntos porcentuales. \"Subió un 32%\" tienta porque usa el mismo número, pero en porcentaje el aumento fue de casi 267%." },
    { q: "Tu informe dice \"Norte creció un 266%\". ¿Qué le agregás para que no engañe?", opciones: ["Nada: el porcentaje lo dice todo","Un gráfico de torta","Los números de origen: de $142.300 a $520.500, y que Centro sigue vendiendo bastante más en el semestre","Que es la mejor sucursal"], correcta: 2, explicacion: "Un porcentaje grande sobre una base chica puede ser poco en pesos. Decir que es la mejor sucursal tienta, pero en el semestre completo Centro facturó $2.891.950 y Norte $1.670.050." },
    { q: "Centro vende mucho más que Sur. ¿Qué te ayuda a saber si vende \"mejor\" o solo \"más\"?", opciones: ["Comparar los totales otra vez","Una tasa, como el ticket promedio: gasto por venta","El nombre de la sucursal","La cantidad de productos distintos"], correcta: 1, explicacion: "Las tasas hacen comparables grupos de distinto tamaño. Comparar los totales otra vez tienta, pero el total ya mezcla cuántas ventas hay con cuánto se gasta en cada una." },
    { q: "En La Esquina, el ticket promedio es casi igual en las tres sucursales (unos $6.600). ¿Qué concluís sobre Centro?", opciones: ["Que cada cliente gasta más","Que tiene precios más altos","Que la IA se equivocó","Que vende más porque tiene más ventas, no porque cada venta sea más grande"], correcta: 3, explicacion: "Si el gasto por venta es parecido, la diferencia está en la cantidad de ventas. Pensar que cada cliente gasta más tienta porque Centro factura más, pero el ticket dice lo contrario." },
    { q: "Si en verano suben a la vez las ventas de helados y los ahogados, ¿qué lo explica?", opciones: ["Los helados causan ahogos","Los ahogos hacen vender helados","Una tercera cosa, el calor, hace subir a las dos","Es pura casualidad siempre"], correcta: 2, explicacion: "Cuando dos cosas suben juntas, puede haber una tercera detrás. Decir que es pura casualidad tienta para descartar el tema, pero acá hay una causa común clara." },
    { q: "Si la IA te dice \"las ventas de Norte subieron porque aumentó el pago con QR\", ¿qué le respondés?", opciones: ["Gracias, lo pongo en el informe","¿Qué otras explicaciones hay para que suban las dos cosas a la vez?","¿Podés repetirlo?","Le pedís un gráfico de torta"], correcta: 1, explicacion: "Que suban juntas es correlación; la causa necesita más evidencia. Ponerlo en el informe tienta porque suena lógico, pero podría ser el barrio que crece o un cambio general de hábitos." },
    { q: "Si la oferta por mail convierte más que la de WhatsApp en clientes habituales y también en nuevos, pero en el total gana WhatsApp, ¿qué pasó?", opciones: ["Hay un error en las cuentas","WhatsApp es mejor","WhatsApp se mandó sobre todo a habituales, que compran más igual: los grupos tienen composiciones distintas","Los nuevos mintieron"], correcta: 2, explicacion: "Es la paradoja de Simpson: juntar grupos distintos puede dar vuelta la conclusión. Pensar que hay un error tienta porque parece imposible, pero las cuentas están bien." },
    { q: "Tenés que comparar dos campañas. ¿Qué hábito te protege de la paradoja de Simpson?", opciones: ["Mirar solo el total","Elegir la que más te gusta","Usar siempre la mediana","Mirar también los resultados por grupos, como tipo de cliente o sucursal"], correcta: 3, explicacion: "Si los grupos cambian la conclusión, lo ves solo al separarlos. Mirar solo el total tienta por simple, pero es justo donde se esconde el efecto." },
    { q: "Encuestaste a 10 clientes y 7 están contentos. ¿Qué tan seguro podés estar de que el 70% de todos tus clientes está contento?", opciones: ["Poco: con dos respuestas distintas pasaría a 50% o 90%","Totalmente","Bastante, porque es la mayoría","Nada, las encuestas no sirven"], correcta: 0, explicacion: "Con pocos casos, el azar mueve mucho el resultado. Decir que las encuestas no sirven tienta como reacción, pero con más casos y una muestra pareja sí sirven." },
    { q: "Sur vendió menos en abril. Antes de decir \"Sur está en caída\", ¿qué revisás?", opciones: ["Nada, los números son claros","Si pasó algo especial ese mes y qué dicen los meses de antes y de después","El color del gráfico","Las ventas de Centro"], correcta: 1, explicacion: "Un mes solo no hace una tendencia, y en abril Sur estuvo cerrada dos semanas. Decir que los números son claros tienta, pero sin contexto el número engaña." },
    { q: "Tu encuesta de satisfacción la contestaron solo los clientes que se anotaron al club de beneficios. ¿Cuál es el problema?", opciones: ["Que son pocos","Que la IA no la puede leer","Que la muestra no se parece al resto: los del club suelen ser los más fieles","Ninguno"], correcta: 2, explicacion: "Una muestra tiene que parecerse a todos los clientes. Que sean pocos tienta como respuesta, pero aunque fueran miles, seguirían siendo los más contentos." },
    { q: "Si probaste un nuevo horario 3 días y vendiste más, ¿qué conviene antes de cambiarlo para siempre?", opciones: ["Cambiarlo ya, funcionó","Pedirle a la IA que lo confirme","Volver al horario viejo","Probarlo más tiempo y comparar con los mismos días de la semana sin el cambio"], correcta: 3, explicacion: "Tres días tienen mucho azar, y el día de la semana pesa mucho en las ventas. Pedirle a la IA que lo confirme tienta, pero con tan pocos datos ninguna cuenta lo hace seguro." },
  ],
},
{
  id: "analizar",
  icono: "🔎",
  titulo: "Analizá con IA paso a paso",
  nivel: "Intermedio",
  objetivos: [
    "Pedir y leer un resumen agrupado (como una tabla dinámica) y comprobar que los totales cuadran",
    "Analizar una evolución en el tiempo sin confundir un mes raro con una tendencia",
    "Comparar grupos para buscar explicaciones sin \"pescar\" diferencias por azar",
  ],
  lecciones: [
    { titulo: "Resumir y agrupar: la tabla dinámica, explicada", html: `
      <p class="idea">Una planilla de 947 ventas no se puede leer de una. Agrupar es como ordenar los tickets en pilas por sucursal y sumar cada pila: de mil filas pasás a tres números que sí se entienden.</p>
      <p><strong>Agrupar</strong> es juntar las filas que comparten algo (la misma sucursal, el mismo mes) y calcular un número para cada grupo: una suma, una cantidad, un promedio. En Excel se hace con una <strong>tabla dinámica</strong>; con IA, se lo pedís en palabras.</p>
      <pre><code>Agrupá las ventas por sucursal. Para cada una calculá: total en pesos,
cantidad de ventas, ticket promedio y qué porcentaje del total representa.
Ordená de mayor a menor y agregá una fila con el total general.</code></pre>
      <p><strong>El resultado correcto con "ventas limpias":</strong></p>
      <table>
        <tr><th>Sucursal</th><th>Total</th><th>Ventas</th><th>Ticket promedio</th><th>% del total</th></tr>
        <tr><td>Centro</td><td>$2.891.950</td><td>436</td><td>$6.633</td><td>46%</td></tr>
        <tr><td>Sur</td><td>$1.708.350</td><td>255</td><td>$6.699</td><td>27%</td></tr>
        <tr><td>Norte</td><td>$1.670.050</td><td>256</td><td>$6.524</td><td>27%</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>$6.270.350</strong></td><td><strong>947</strong></td><td><strong>$6.621</strong></td><td><strong>100%</strong></td></tr>
      </table>
      <p><strong>Dos controles que tardan 10 segundos:</strong></p>
      <ol>
        <li><strong>Que las partes sumen el total.</strong> 436 + 255 + 256 = 947 ventas; los porcentajes suman 100%. Si no suman, alguna fila quedó afuera o se contó dos veces.</li>
        <li><strong>Que el total coincida con uno que conocés.</strong> Si sabés que el semestre dio $6.270.350, la tabla tiene que dar lo mismo.</li>
      </ol>
      <p><strong>Leer la tabla, no solo mirarla:</strong> Centro vende casi la mitad, pero su ticket promedio es igual al de las otras: la diferencia está en la cantidad de ventas. Esa frase es el análisis; la tabla es la evidencia.</p>
      <p>Podés agrupar por dos cosas a la vez, por ejemplo sucursal y categoría. En las tres sucursales, la categoría que más factura es Frescos: queda una tabla de 3 por 4 que se lee rápido y sigue cuadrando con el total.</p>` },
    { titulo: "Mirar el tiempo: tendencias, meses raros y comparaciones justas", html: `
      <p class="idea">Una tendencia es el camino general, no un paso. Como el peso de una persona: un día sube medio kilo y no quiere decir nada; si sube todos los meses, sí.</p>
      <p><strong>Ventas por mes de La Esquina</strong> (las tres sucursales juntas):</p>
      <table>
        <tr><th>Mes</th><th>Total</th><th>Días del mes</th><th>Por día</th></tr>
        <tr><td>Enero</td><td>$932.250</td><td>31</td><td>$30.073</td></tr>
        <tr><td>Febrero</td><td>$781.600</td><td>28</td><td>$27.914</td></tr>
        <tr><td>Marzo</td><td>$1.149.550</td><td>31</td><td>$37.082</td></tr>
        <tr><td>Abril</td><td>$939.100</td><td>30</td><td>$31.303</td></tr>
        <tr><td>Mayo</td><td>$1.174.950</td><td>31</td><td>$37.902</td></tr>
        <tr><td>Junio</td><td>$1.292.900</td><td>30</td><td>$43.097</td></tr>
      </table>
      <p><strong>Tres cosas que esta tabla enseña:</strong></p>
      <ul>
        <li><strong>Comparar justo.</strong> Febrero tiene 28 días y los otros meses 30 o 31. Dividir por la cantidad de días (una <em>tasa</em>, como viste en estadística) hace que los meses se puedan comparar. Febrero sigue siendo el más bajo, pero la diferencia se achica.</li>
        <li><strong>Un mes raro no es una tendencia.</strong> Abril baja porque Sur estuvo cerrada del 7 al 20. Si no lo sabés, parece una caída. Por eso, ante un mes raro, preguntá qué pasó antes de concluir.</li>
        <li><strong>La tendencia general es de subida</strong>: de unos $30.000 por día en enero a $43.000 en junio.</li>
      </ul>
      <p><strong>Mirar cada sucursal por separado cambia la historia:</strong></p>
      <table>
        <tr><th></th><th>Enero</th><th>Junio</th></tr>
        <tr><td>Centro</td><td>$456.000</td><td>$453.100</td></tr>
        <tr><td>Norte</td><td>$142.300</td><td>$520.500</td></tr>
      </table>
      <p>El crecimiento lo explica Norte. Centro no crece: sube y baja según el mes, pero en junio vendió casi lo mismo que en enero. En junio, por primera vez, Norte vendió más que Centro. Eso no se ve en el total: aparece al separar.</p>
      <p><strong>Pedíselo a la IA con un gráfico de líneas</strong> (una línea por sucursal), que es el mejor para ver evoluciones. Y pedile que marque los meses raros y que no saque conclusiones de un solo mes.</p>` },
    { titulo: "Comparar grupos y buscar el porqué, sin pescar casualidades", html: `
      <p class="idea">Si buscás en suficientes lugares, algo raro vas a encontrar, aunque sea pura casualidad. Es como mirar las nubes: con suficiente tiempo, alguna tiene forma de caballo.</p>
      <p>Un <strong>segmento</strong> es un grupo de tus datos: una sucursal, una categoría, los clientes nuevos, los fines de semana. Comparar segmentos es la forma más común de buscar explicaciones.</p>
      <p><strong>Un buen camino para buscar el porqué de un cambio:</strong></p>
      <ol>
        <li><strong>Ubicá el cambio:</strong> ¿en qué sucursal, categoría o período está? (Viste que el crecimiento está en Norte.)</li>
        <li><strong>Dividilo:</strong> ¿Norte vende más porque hay más ventas o porque cada venta es más grande? (Sobre todo más ventas: pasó de 26 en enero a 62 en junio. En junio también subió el ticket, así que conviene mirar los dos.)</li>
        <li><strong>Buscá qué más cambió al mismo tiempo:</strong> ¿más clientes nuevos?, ¿otros productos?, ¿algo del barrio que no está en la planilla?</li>
        <li><strong>Escribí la explicación como hipótesis,</strong> no como hecho: "Puede deberse a...; para confirmarlo haría falta...".</li>
      </ol>
      <p><strong>El riesgo de pescar.</strong> Si le pedís a la IA "buscá algo interesante" y ella compara 20 cortes distintos (cada categoría en cada sucursal, cada día de la semana, cada medio de pago), es casi seguro que alguno va a dar distinto solo por azar. Si después contás solo ese, estás contando una casualidad como si fuera un hallazgo.</p>
      <table>
        <tr><th>Pescar</th><th>Buscar con una pregunta</th></tr>
        <tr><td>"Encontrá patrones interesantes en los datos"</td><td>"¿El crecimiento de Norte viene de más ventas o de ventas más grandes?"</td></tr>
        <tr><td>Contar el corte más llamativo de 20</td><td>Contar lo que respondía la pregunta, aunque sea aburrido</td></tr>
      </table>
      <p>Explorar está bien al principio, para tener ideas. Pero cuando algo te llame la atención, tratalo como una idea a confirmar: ¿se repite en otro período?, ¿es un grupo grande o de pocas ventas?</p>
      <pre><code>Encontraste que los martes de abril Sur vendió poco. ¿Cuántas ventas
son? ¿Pasa lo mismo otros meses? Si es un grupo chico, decímelo.</code></pre>` },
  ],
  practica: [
    "Pedile a la IA la tabla por sucursal de la lección (total, ventas, ticket promedio y porcentaje). Verificá que coincida con la de la lección y que las partes sumen 947 ventas y $6.270.350.",
    "Pedile un gráfico de líneas con las ventas por mes de cada sucursal. Verificá dos datos: Norte en junio ($520.500) supera a Centro ($453.100), y Sur baja en abril. Escribí una frase que explique cada cosa.",
    "Elegí un cambio en tu planilla real (un mes que subió o bajó mucho) y seguí los 4 pasos para buscar el porqué. Escribí la explicación final como hipótesis y qué dato haría falta para confirmarla.",
  ],
  recursos: [
    { t: "Microsoft: análisis avanzado con Copilot en Excel y Python", url: "https://support.microsoft.com/office/copilot-in-excel-with-python-364e4ae9-9343-4d56-952a-5f62b0f70db6" },
    { t: "OpenAI: análisis de datos con ChatGPT (ayuda oficial)", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { t: "Libro: El arte de la estadística, de David Spiegelhalter (Capitán Swing)", url: "https://www.marcialpons.es/libros/el-arte-de-la-estadistica/9788412619850/" },
  ],
  quiz: [
    { q: "La IA te da una tabla por sucursal: 436 + 255 + 240 ventas, y sabés que en total son 947. ¿Qué hacés?", opciones: ["La usás: los números se ven bien","Le preguntás por qué las partes no suman el total y qué filas faltan","Redondeás","Le pedís un gráfico"], correcta: 1, explicacion: "Las partes suman 931, así que faltan 16 ventas en algún lado. Pedir un gráfico tienta para avanzar, pero un gráfico de una tabla incompleta muestra el mismo error más lindo." },
    { q: "Tenés 947 filas de ventas y querés un número por sucursal. ¿Qué hacés?", opciones: ["Ordenás las columnas por color","Borrás los duplicados","Hacés un gráfico de cada fila","Agrupás por sucursal, como en una tabla dinámica, y calculás el total de cada una"], correcta: 3, explicacion: "Agrupar es pasar de mil filas a pocos números comparables. Borrar duplicados tienta porque también se hace en la planilla, pero es parte de limpiar, no de resumir." },
    { q: "Si Centro vende el 46% del total y su ticket promedio es igual al de las otras sucursales, ¿qué frase resume bien el análisis?", opciones: ["Centro vende casi la mitad porque tiene más ventas, no porque cada venta sea más grande","Centro tiene los precios más altos","Las sucursales son iguales","Centro es la que más crece"], correcta: 0, explicacion: "La frase une los dos datos de la tabla. Decir que es la que más crece tienta porque es la más grande, pero el crecimiento está en Norte; Centro no crece." },
    { q: "Febrero vendió $781.600 y enero $932.250. Antes de decir que febrero fue muy malo, ¿qué revisás?", opciones: ["El color del gráfico","Nada, la diferencia es clara","Las ventas de junio","Que febrero tiene menos días: comparás ventas por día"], correcta: 3, explicacion: "Con 28 días contra 31, febrero arranca en desventaja. Decir que la diferencia es clara tienta, pero por día la distancia se achica bastante." },
    { q: "Abril bajó respecto de marzo. ¿Qué es lo primero que hacés?", opciones: ["Preguntás qué pasó ese mes: en La Esquina, Sur estuvo cerrada del 7 al 20","Anunciás que empezó una caída","Le pedís a la IA que lo explique sola","Borrás abril del análisis"], correcta: 0, explicacion: "Un mes raro suele tener una causa puntual. Pedirle a la IA que lo explique sola tienta, pero el cierre de la sucursal no está en la planilla: lo sabés vos." },
    { q: "Las ventas totales crecen. ¿Por qué conviene mirar cada sucursal por separado?", opciones: ["Para hacer más gráficos","No conviene, el total alcanza","Porque el total puede esconder que una crece mucho y otra está quieta","Porque la IA lo exige"], correcta: 2, explicacion: "En La Esquina, el crecimiento lo explica Norte y Centro no crece: el total no lo muestra. Pensar que el total alcanza tienta por simple, pero ahí se pierde lo más útil para decidir." },
    { q: "Querés ver cómo evolucionaron las ventas de cada sucursal mes a mes. ¿Qué gráfico conviene?", opciones: ["Una torta por mes","Un gráfico de líneas, una línea por sucursal","Una tabla con 947 filas","Un mapa"], correcta: 1, explicacion: "Las líneas muestran el camino en el tiempo y permiten comparar sucursales. La torta tienta porque se usa mucho, pero muestra partes de un total en un momento, no una evolución." },
    { q: "Le pedís a la IA \"encontrá algo interesante\" y te muestra que los martes de abril Sur vendió muy poco. ¿Qué hacés?", opciones: ["Lo ponés como hallazgo principal","Cambiás el horario de los martes","Lo ignorás","Revisás cuántas ventas son y si se repite en otros meses: puede ser casualidad o el cierre de abril"], correcta: 3, explicacion: "Si se buscan muchos cortes, alguno sale raro por azar, y este cae justo en el mes del cierre. Ponerlo como hallazgo principal tienta porque llama la atención, pero todavía no está confirmado." },
    { q: "Querés comparar a los clientes nuevos con los habituales. ¿Cómo se le dice a cada uno de esos grupos?", opciones: ["Un segmento","Una variable","Una tasa","Una hipótesis"], correcta: 0, explicacion: "Un segmento es un grupo de tus datos, y compararlos es la forma más común de buscar explicaciones. Variable tienta porque \"cliente\" es una columna, pero la variable es la columna entera; cada grupo dentro de ella es un segmento." },
    { q: "Norte vende más. ¿Cómo averiguás si es porque hay más ventas o porque cada venta es más grande?", opciones: ["Mirás solo el total","Le preguntás a la IA si Norte es buena","Separás el total en cantidad de ventas y ticket promedio","Comparás con otro año que no tenés"], correcta: 2, explicacion: "Total = cantidad de ventas × ticket promedio, así que separarlo muestra de dónde viene el cambio. Mirar solo el total tienta, pero no distingue entre las dos causas." },
    { q: "Si encontraste una posible explicación para el crecimiento de Norte, ¿cómo la escribís en el informe?", opciones: ["Como hipótesis: \"puede deberse a...; para confirmarlo haría falta...\"","Como un hecho comprobado","No la escribís","Como la opinión de la IA"], correcta: 0, explicacion: "Una explicación sin confirmar se presenta como hipótesis. Escribirla como hecho tienta porque suena más firme, pero si después resulta otra cosa, el informe pierde credibilidad." },
    { q: "La IA compara 20 cortes de los datos y uno da muy distinto. ¿Por qué hay que tener cuidado?", opciones: ["Porque la IA siempre se equivoca","Porque con tantos cortes es casi seguro que alguno dé distinto solo por casualidad","Porque 20 es poco","No hay que tener cuidado"], correcta: 1, explicacion: "Es como mirar nubes: con suficientes, alguna tiene forma de caballo. Pensar que la IA siempre se equivoca tienta, pero el cálculo puede estar bien y el problema es cuántas veces se buscó." },
  ],
},
{
  id: "verificar",
  icono: "✅",
  titulo: "Verificá: que la IA no te invente números",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer las 4 formas más comunes en que la IA se equivoca con los datos",
    "Aplicar los 5 controles rápidos a cualquier resultado antes de usarlo",
    "Pedirle a la IA que revise el análisis que ella misma hizo y busque errores y datos que lo contradigan",
  ],
  lecciones: [
    { titulo: "Cómo se equivoca la IA con los números", html: `
      <p class="idea">La IA no miente a propósito: completa lo que le falta con lo que suena probable. Con datos, eso es peligroso, porque un número inventado se ve igual que uno calculado.</p>
      <p>Cuando la IA da una respuesta que suena bien, pero es falsa, se le dice <strong>alucinación</strong>. Con planillas, los errores más comunes son cuatro:</p>
      <table>
        <tr><th>Error</th><th>Cómo se ve</th><th>Ejemplo</th></tr>
        <tr><td>1. Responder sin calcular</td><td>Da un número sin mostrar tabla ni cálculo</td><td>"El total de marzo fue de aproximadamente $1.200.000"</td></tr>
        <tr><td>2. Leer mal una columna</td><td>Usa la columna equivocada o la interpreta distinto</td><td>Suma <em>precio_unitario</em> en vez de <em>total</em></td></tr>
        <tr><td>3. Filtrar en silencio</td><td>Deja filas afuera sin avisar</td><td>No cuenta las ventas con la sucursal mal escrita</td></tr>
        <tr><td>4. Inventar contexto</td><td>Explica causas que no están en los datos</td><td>"Las ventas subieron por la temporada turística"</td></tr>
      </table>
      <p><strong>Con los datos de práctica, por ejemplo:</strong> si la IA suma la columna equivocada, el total de marzo sale muy distinto a $1.149.550. Si deja afuera las sucursales mal escritas de la planilla sucia, la tabla por sucursal no suma el total. Los dos errores producen números prolijos y creíbles.</p>
      <p><strong>Por qué no basta con preguntarle "¿estás segura?":</strong> la IA está entrenada para ser útil y suele confirmar lo que dijo. Sirve mucho más pedirle evidencia: la tabla, el cálculo, la cantidad de filas.</p>
      <p>Recordá la frontera irregular del primer módulo: la IA no avisa cuando está fuera de su terreno. La responsabilidad de revisar es tuya, y la siguiente lección te da una forma rápida de hacerlo.</p>` },
    { titulo: "Los 5 controles rápidos antes de usar un resultado", html: `
      <p class="idea">No hace falta rehacer todo el análisis para confiar en él. Alcanza con unos pocos controles rápidos, como cuando un cajero cuenta los billetes al final del día: si el total cierra, lo demás probablemente esté bien.</p>
      <ol>
        <li><strong>Contar filas.</strong> "¿Cuántas filas usaste?" tiene que coincidir con tu planilla (947 en ventas limpias).</li>
        <li><strong>Que las partes sumen el total</strong> (el <em>control de suma</em>). La suma por sucursal, por mes o por categoría tiene que dar el total general ($6.270.350).</li>
        <li><strong>Recalcular una muestra a mano.</strong> Elegí un número del resultado y calculalo vos en Excel con un filtro o una suma. Por ejemplo, filtrá Norte y junio: tiene que dar $520.500.</li>
        <li><strong>Pedir el cálculo.</strong> "Mostrame el código o explicame paso a paso cómo lo calculaste." Si no puede mostrarlo, no lo uses.</li>
        <li><strong>Preguntar de otra forma.</strong> En una conversación nueva, hacé la misma pregunta con otras palabras. Si el resultado cambia, algo está mal.</li>
      </ol>
      <p><strong>Un caso:</strong> le pedís el total por categoría y te da:</p>
      <table>
        <tr><th>Categoría</th><th>Total que dio la IA</th></tr>
        <tr><td>Frescos</td><td>$2.679.100</td></tr>
        <tr><td>Almacén</td><td>$1.960.100</td></tr>
        <tr><td>Bebidas</td><td>$884.550</td></tr>
        <tr><td>Limpieza</td><td>$646.600</td></tr>
      </table>
      <p>Sumado da $6.170.350: le faltan $100.000 para llegar al total de $6.270.350. El control 2 te avisa que hay un error; el control 3 (filtrar Limpieza en Excel) te muestra dónde: el valor correcto es $746.600.</p>
      <p><strong>¿Cuántos controles hacer?</strong> Depende de qué se decide con el número:</p>
      <table>
        <tr><th>Para qué es</th><th>Controles</th></tr>
        <tr><td>Una idea para explorar</td><td>1 y 2</td></tr>
        <tr><td>Un informe interno</td><td>1, 2 y 3</td></tr>
        <tr><td>Una decisión con plata, personas o clientes</td><td>Los 5, y que otra persona lo revise</td></tr>
      </table>` },
    { titulo: "Que la IA revise el análisis que ella misma hizo", html: `
      <p class="idea">Así como pedirle a un compañero que te revise un informe encuentra errores que vos no ves, podés pedirle a la IA que revise el análisis que ella misma te hizo: que busque qué podría estar mal, no que te confirme que está bien.</p>
      <p><strong>Tres pedidos que funcionan mejor que "¿está bien?":</strong></p>
      <pre><code>1. Revisá el análisis anterior como si fueras un auditor que busca errores.
   Hacé una lista de lo que podría estar mal y cómo comprobarlo.

2. ¿Qué datos o qué casos contradicen la conclusión? Buscalos en la planilla.

3. Si esta conclusión fuera falsa, ¿qué esperaríamos ver en los datos?
   Fijate si eso aparece.</code></pre>
      <p>El tercero es el más potente: obliga a pensar qué evidencia rompería la idea. Por ejemplo, si la conclusión es "Norte crece por los clientes nuevos", esperaríamos que el porcentaje de clientes nuevos en Norte suba con los meses. Si no sube, la explicación no se sostiene.</p>
      <p><strong>Cuando la respuesta suena demasiado bien.</strong> Desconfiá un poco más cuando:</p>
      <ul>
        <li>Confirma exactamente lo que vos esperabas (acordate del sesgo de confirmación).</li>
        <li>Da una causa muy concreta que no está en la planilla.</li>
        <li>Los números son demasiado redondos o demasiado precisos para lo que preguntaste.</li>
        <li>Responde rapidísimo una pregunta difícil sin mostrar ningún cálculo.</li>
      </ul>
      <p><strong>Lo que no se delega.</strong> La IA puede revisar, pero no puede saber lo que pasó en tu negocio fuera de la planilla: que una sucursal cerró, que cambió un precio, que hubo un paro. Ese conocimiento es tuyo y es justamente lo que vuelve confiable el análisis.</p>` },
  ],
  practica: [
    "Pedile a la IA el total por categoría de \"ventas limpias\" y aplicá los controles 1, 2 y 3. Verificá: Frescos $2.679.100, Almacén $1.960.100, Bebidas $884.550 y Limpieza $746.600, que suman $6.270.350.",
    "Hacé la misma pregunta sobre tus datos en dos conversaciones nuevas, con palabras distintas. Anotá si los números coinciden y, si no, cuál de las dos estaba bien y cómo te diste cuenta.",
    "Tomá una conclusión de un análisis tuyo y pedile a la IA: \"Si fuera falsa, ¿qué esperaríamos ver?\". Comprobá en los datos si eso aparece y anotá si la conclusión se sostiene.",
  ],
  recursos: [
    { t: "Libro: Bullshit, contra la charlatanería, de Bergstrom y West (Capitán Swing)", url: "https://www.menorca.info/opinion/blogs/2022/10/13/1809279/cultivar-arte-del-escepticismo.html" },
    { t: "El estudio de la frontera irregular (Dell'Acqua y otros, 2023, en inglés)", url: "https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf" },
    { t: "OpenAI: análisis de datos con ChatGPT (ayuda oficial)", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
  ],
  quiz: [
    { q: "Si la IA te dice \"el total de marzo fue de aproximadamente $1.200.000\" sin mostrar nada más, ¿qué tipo de error sospechás?", opciones: ["Que filtró filas","Que respondió sin calcular: el \"aproximadamente\" y la falta de tabla lo delatan","Que leyó mal la fecha","Ninguno"], correcta: 1, explicacion: "Un número redondo, sin cálculo a la vista, suele ser una estimación de memoria. Pensar que filtró filas tienta, pero para eso primero tendría que haber calculado." },
    { q: "Si le preguntás \"¿estás segura?\" y la IA responde \"sí, el cálculo es correcto\", ¿qué te dice eso?", opciones: ["Que el cálculo está bien","Que ya no hace falta revisar","Muy poco: suele confirmar lo que dijo; sirve más pedirle la tabla y el cálculo","Que está mal"], correcta: 2, explicacion: "La IA tiende a sostener su respuesta. Creer que confirmó algo tienta, pero no te mostró ninguna evidencia nueva." },
    { q: "Si la IA suma la columna precio_unitario en vez de total, ¿cómo lo detectás más rápido?", opciones: ["Comparando el resultado con un total que ya conocés, o pidiéndole el cálculo","Mirando el color de la tabla","No se puede detectar","Preguntándole si está segura"], correcta: 0, explicacion: "Si el total no se parece al que conocés, algo se calculó con la columna equivocada. Preguntarle si está segura tienta, pero no te muestra qué columna usó." },
    { q: "Si en la planilla sucia la IA arma la tabla por sucursal y las partes no suman el total, ¿qué pudo haber pasado?", opciones: ["Que la IA no sabe sumar","Que el total está mal","Nada importante","Que dejó afuera en silencio las ventas con la sucursal mal escrita"], correcta: 3, explicacion: "Filtrar en silencio es uno de los errores más comunes. Pensar que no sabe sumar tienta, pero el problema suele estar en qué filas entraron en la suma." },
    { q: "La IA explica que las ventas subieron \"por la temporada turística\". La planilla no tiene datos de turismo. ¿Qué hacés?", opciones: ["Lo tratás como contexto inventado: lo comprobás con información de afuera o no lo usás","Lo ponés en el informe","Le pedís más detalles del turismo","Lo aceptás porque suena lógico"], correcta: 0, explicacion: "Si la causa no está en los datos, la IA la está suponiendo. Pedirle más detalles tienta, pero va a dar más contexto inventado con la misma seguridad." },
    { q: "Tus totales por categoría según la IA son $2.679.100, $1.960.100, $884.550 y $646.600. El total general es $6.270.350. ¿Qué te dice el control de suma?", opciones: ["Que está todo bien","Que suman $6.170.350: faltan $100.000 y hay un error en alguna categoría","Que la IA redondeó","Que el total general está mal"], correcta: 1, explicacion: "Las partes tienen que sumar el total. Pensar que el total general está mal tienta, pero es el número que ya verificaste; el error está en una categoría, que en este caso es Limpieza." },
    { q: "Querés comprobar un número del resultado sin rehacer todo. ¿Qué hacés?", opciones: ["Le preguntás a otra IA","Lo redondeás","Elegís uno y lo recalculás vos en Excel con un filtro, por ejemplo Norte en junio","Confiás en el resto"], correcta: 2, explicacion: "Recalcular una muestra a mano es rápido y confirma que el método es correcto. Preguntarle a otra IA tienta, pero puede cometer el mismo error." },
    { q: "Hacés la misma pregunta con otras palabras en una conversación nueva y el resultado cambia. ¿Qué concluís?", opciones: ["Que la segunda es la buena","Que la primera es la buena","Que hay que promediarlas","Que hay algo mal en al menos una de las dos respuestas y hay que averiguar cuál"], correcta: 3, explicacion: "Un cálculo bien hecho da lo mismo aunque cambies las palabras. Promediarlas tienta como salida rápida, pero si una está mal, el promedio también." },
    { q: "Vas a usar un número para decidir a quién contratar. ¿Cuántos controles hacés?", opciones: ["Ninguno, la IA es confiable","Solo contar filas","Solo pedirle el cálculo","Los 5, y que otra persona lo revise"], correcta: 3, explicacion: "Cuanto más importa la decisión, más controles. Contar filas tienta porque es lo más rápido, pero no detecta una columna mal leída." },
    { q: "La IA te hizo un análisis y querés que ella misma lo revise para encontrar errores. ¿Qué le pedís?", opciones: ["Revisá el análisis como un auditor que busca errores y decime cómo comprobarlos","¿Está bien lo que hiciste?","Hacelo más lindo","Resumilo"], correcta: 0, explicacion: "Pedirle que busque errores le cambia el objetivo. Preguntar si está bien tienta por simple, pero invita a que confirme lo que ya dijo." },
    { q: "La conclusión es \"Norte crece por los clientes nuevos\". ¿Qué esperarías ver en los datos si fuera cierta?", opciones: ["Que Centro baje","Que el ticket promedio suba mucho","Que el porcentaje de clientes nuevos en Norte suba con los meses","Que el QR baje"], correcta: 2, explicacion: "Pensar qué tendría que aparecer si la idea fuera cierta es la forma de ponerla a prueba. Que Centro baje tienta, pero no dice nada sobre los clientes de Norte." },
    { q: "La IA confirma exactamente lo que vos pensabas, rapidísimo y sin mostrar ningún cálculo. ¿Qué hacés?", opciones: ["Te ponés contento y lo usás","Desconfiás un poco más y pedís el cálculo: es justo cuando el sesgo de confirmación engaña","Le pedís que lo diga más largo","Lo descartás siempre"], correcta: 1, explicacion: "Cuando algo confirma lo que esperabas, revisamos menos. Descartarlo siempre tienta como reacción, pero puede estar bien: solo hay que pedir la evidencia." },
  ],
},
{
  id: "graficos",
  icono: "📊",
  titulo: "Mostrá: gráficos que se entienden",
  nivel: "Intermedio",
  objetivos: [
    "Elegir el tipo de gráfico según lo que querés mostrar: comparar, ver una evolución o mostrar partes",
    "Corregir un gráfico confuso: ejes, colores, ruido y título",
    "Pedirle a la IA un gráfico con instrucciones precisas y revisarlo antes de usarlo",
  ],
  lecciones: [
    { titulo: "Elegir el gráfico: qué querés mostrar", html: `
      <p class="idea">Un gráfico es una respuesta dibujada. Primero decidís qué querés que la otra persona vea en dos segundos; después elegís la forma que lo muestra mejor. Al revés casi nunca sale bien.</p>
      <table>
        <tr><th>Querés mostrar...</th><th>Usá</th><th>Ejemplo con La Esquina</th></tr>
        <tr><td>Comparar cantidades</td><td><strong>Gráfico de barras</strong></td><td>Total del semestre por sucursal</td></tr>
        <tr><td>Cómo cambia algo en el tiempo</td><td><strong>Gráfico de líneas</strong></td><td>Ventas por mes de cada sucursal</td></tr>
        <tr><td>Las partes de un total, con pocas partes (2 o 3)</td><td>Barra apilada al 100%, o torta</td><td>Ventas de clientes nuevos y habituales</td></tr>
        <tr><td>Pocos números exactos</td><td><strong>Una tabla</strong>, no un gráfico</td><td>Total, ventas y ticket de 3 sucursales</td></tr>
      </table>
      <p><strong>Por qué la torta suele ser mala idea:</strong> al ojo le cuesta comparar ángulos. Con cuatro categorías parecidas, nadie sabe cuál es más grande sin leer los números. En un gráfico de barras, se ve de una.</p>
      <pre><code>Torta con 4 partes             Barras ordenadas
(¿cuál es la más grande?)      Frescos   ████████████████  2,68 M
                               Almacén   ████████████      1,96 M
                               Bebidas   █████             0,88 M
                               Limpieza  ████              0,75 M</code></pre>
      <p><strong>Ordená las barras de mayor a menor</strong> (salvo que tengan un orden natural, como los meses). Así el lector ve el ranking sin esfuerzo.</p>
      <p><strong>Una idea por gráfico.</strong> Si querés mostrar que Norte creció y además que el QR sube, son dos gráficos. Un gráfico con todo junto no muestra nada.</p>
      <p>Este módulo se apoya en el libro <em>Storytelling con datos</em>, de Cole Nussbaumer Knaflic: es el clásico para aprender a mostrar datos en el trabajo, y tiene un tomo de ejercicios prácticos.</p>` },
    { titulo: "Limpiar el gráfico y pedírselo bien a la IA", html: `
      <p class="idea">Un buen gráfico se parece a una buena vidriera: muestra lo importante y saca lo que distrae. Cada línea, color o etiqueta que no ayuda a entender es ruido.</p>
      <p><strong>Cinco arreglos que casi siempre mejoran un gráfico:</strong></p>
      <ol>
        <li><strong>Título que dice la conclusión.</strong> No "Ventas por mes", sino "Norte superó a Centro en junio". El lector entiende antes de mirar.</li>
        <li><strong>En barras, el eje empieza en cero.</strong> El <em>eje</em> es la línea con los valores. Si empieza en otro número, una diferencia chica parece enorme. En gráficos de líneas no siempre es obligatorio, pero aclaralo.</li>
        <li><strong>Un color para destacar, gris para el resto.</strong> Si lo importante es Norte, Norte en un color fuerte y las otras en gris.</li>
        <li><strong>Etiquetas directas.</strong> El nombre al lado de cada línea, en vez de una leyenda aparte que obliga a ir y venir con la vista.</li>
        <li><strong>Sacar lo que sobra:</strong> fondos de colores, efectos 3D, líneas de cuadrícula fuertes, decimales que nadie necesita.</li>
      </ol>
      <p><strong>El engaño del eje que no empieza en cero</strong>, con las barras de Norte y Sur en el semestre:</p>
      <pre><code>Eje desde 1.650.000 (engaña)        Eje desde 0 (honesto)
Sur    ████████████  1,71 M         Sur    ████████████████  1,71 M
Norte  ████          1,67 M         Norte  ███████████████   1,67 M
"¡Sur vende el triple!"             Son casi iguales</code></pre>
      <p><strong>El pedido a la IA, con todo junto:</strong></p>
      <pre><code>Hacé un gráfico de líneas con las ventas por mes (enero a junio)
de cada sucursal. Norte en color fuerte; Centro y Sur en gris.
Nombre de cada sucursal al final de su línea, sin leyenda aparte.
Título: "Norte superó a Centro en junio". Sin fondo ni efectos.
Montos en miles de pesos, sin decimales.</code></pre>
      <p><strong>Revisalo antes de usarlo:</strong> ¿los números del gráfico coinciden con la tabla? (Norte junio $520.500, Centro junio $453.100.) ¿El título dice algo que el gráfico muestra de verdad? La IA a veces dibuja bien, pero titula una conclusión que los datos no sostienen.</p>` },
  ],
  practica: [
    "Pedile a la IA un gráfico de barras con el total por categoría, ordenado de mayor a menor. Verificá el orden: Frescos, Almacén, Bebidas, Limpieza. Escribí un título que diga la conclusión.",
    "Pedile el gráfico de líneas de la lección con el pedido completo. Revisá 3 cosas y anotá si se cumplieron: los valores de junio de Norte y Centro, el color destacado y el título.",
    "Tomá un gráfico real (de tu trabajo, de una noticia o de un informe público) y aplicale los 5 arreglos. Mostrá las dos versiones a alguien y anotá en cuántos segundos entendió cada una.",
  ],
  recursos: [
    { t: "Libro: Storytelling con datos, de Cole Nussbaumer Knaflic (Anaya)", url: "https://www.marcialpons.es/libros/storytelling-con-datos-guia-de-visualizacion-de-datos-para-profesionales-de-los-negocios/9788441553125/" },
    { t: "Libro de ejercicios: Storytelling con datos, ejemplos prácticos (Anaya)", url: "https://www.marcialpons.es/libros/storytelling-con-datos/9788441542969/" },
    { t: "Microsoft: análisis avanzado con Copilot en Excel y Python", url: "https://support.microsoft.com/office/copilot-in-excel-with-python-364e4ae9-9343-4d56-952a-5f62b0f70db6" },
  ],
  quiz: [
    { q: "Querés mostrar en la reunión qué sucursal vendió más en el semestre. ¿Qué gráfico usás?", opciones: ["Uno de líneas","Una torta con efecto 3D","Un mapa","Uno de barras, ordenado de mayor a menor"], correcta: 3, explicacion: "Las barras son las mejores para comparar cantidades. Las líneas tientan porque también se usan mucho, pero muestran evolución en el tiempo, no una comparación entre sucursales." },
    { q: "Querés mostrar cómo cambiaron las ventas de cada sucursal mes a mes. ¿Qué usás?", opciones: ["Una torta por mes","Barras ordenadas de mayor a menor","Un gráfico de líneas, una por sucursal","Una tabla de 947 filas"], correcta: 2, explicacion: "Las líneas muestran el camino en el tiempo. Las barras ordenadas tientan, pero desordenarían los meses, que tienen un orden natural." },
    { q: "Tenés 4 categorías con ventas parecidas y una compañera propone una torta. ¿Qué le decís?", opciones: ["Que sí, la torta es lo mejor para partes","Que mejor barras ordenadas: al ojo le cuesta comparar ángulos parecidos","Que mejor un gráfico de líneas","Que no hace falta ningún gráfico"], correcta: 1, explicacion: "Con partes parecidas, en una torta no se ve cuál es mayor. Que la torta es lo mejor para partes tienta, porque es para lo que se usa, pero solo funciona bien con 2 o 3 partes muy distintas." },
    { q: "Solo tenés 3 sucursales y 3 números de cada una (total, ventas, ticket). ¿Qué mostrás?", opciones: ["Tres gráficos de torta","Un gráfico 3D","Un gráfico de líneas","Una tabla: con pocos números exactos, se lee mejor"], correcta: 3, explicacion: "Con pocos números que importan exactos, la tabla gana. Tres tortas tientan para que se vea más visual, pero hacen más difícil leer los valores." },
    { q: "Tenés que titular tu gráfico de ventas por mes para la reunión. ¿Qué título comunica mejor?", opciones: ["Ventas por mes","Gráfico 1","Norte superó a Centro en junio","Datos de enero a junio de 2025 de las tres sucursales"], correcta: 2, explicacion: "El título que dice la conclusión hace que el lector entienda antes de mirar. El título largo y descriptivo tienta por completo, pero no dice qué hay que ver." },
    { q: "Si en un gráfico de barras el eje empieza en $1.650.000 y Sur parece vender el triple que Norte, ¿qué pasa?", opciones: ["El eje no empieza en cero y exagera una diferencia chica: en realidad venden casi lo mismo","Sur vende el triple","Es un error de la IA que no se puede arreglar","Está bien, así se ve mejor"], correcta: 0, explicacion: "En barras, el largo representa el valor, así que el eje tiene que empezar en cero. Que así se ve mejor tienta, porque la diferencia resalta, pero es una diferencia que no existe." },
    { q: "Querés que se note que lo importante es Norte. ¿Qué hacés con los colores?", opciones: ["Un color distinto y fuerte para cada sucursal","Norte en un color fuerte y las otras en gris","Todo en gris","Colores al azar"], correcta: 1, explicacion: "Un solo color fuerte dirige la mirada. Un color distinto para cada una tienta porque se ve más alegre, pero así todas compiten por la atención." },
    { q: "La IA te arma un gráfico con un título que dice \"El QR hizo crecer a Norte\". ¿Qué revisás?", opciones: ["Si el título dice algo que el gráfico muestra de verdad: que suban juntos no prueba la causa","El tamaño de la letra","Nada: si lo dice la IA, está bien","Que tenga leyenda"], correcta: 0, explicacion: "La IA puede titular una causa que los datos no prueban. Revisar el tamaño de letra tienta porque es lo visible, pero el problema está en lo que afirma el título." },
    { q: "Tu gráfico de líneas tiene una leyenda aparte con el nombre de cada línea. ¿Qué conviene en su lugar?", opciones: ["Más colores","Una tabla abajo","Etiquetas directas: el nombre al lado de cada línea","Nada, la leyenda es lo mejor"], correcta: 2, explicacion: "Con etiquetas directas no hay que ir y venir con la vista. Agregar más colores tienta para distinguir, pero no resuelve tener que buscar qué es cada uno." },
    { q: "Tu gráfico tiene fondo de colores, efecto 3D y líneas de cuadrícula fuertes. ¿Qué hacés?", opciones: ["Lo dejás, se ve profesional","Agregás más efectos","Lo pasás a torta","Sacás todo eso: es ruido que distrae del dato"], correcta: 3, explicacion: "Cada elemento que no ayuda a entender es ruido. Que se ve profesional tienta, pero el 3D incluso deforma los tamaños y hace más difícil comparar." },
  ],
},
{
  id: "decidir",
  icono: "🎯",
  titulo: "Decidí: de los datos a la recomendación",
  nivel: "Intermedio",
  objetivos: [
    "Escribir un resumen de una página que empiece por la conclusión y termine en una recomendación",
    "Explicar con palabras simples cuánta seguridad tenés y qué no sabés",
    "Usar IA en el trabajo de forma transparente: decir cómo la usaste y dejar el análisis revisable",
  ],
  lecciones: [
    { titulo: "La conclusión primero: el resumen de una página", html: `
      <p class="idea">Quien decide tiene poco tiempo. Contale primero qué encontraste y qué recomendás, después por qué. Es como un buen titular de diario: con leer el principio, ya sabés lo importante.</p>
      <p><strong>La estructura en tres partes</strong>, en este orden:</p>
      <ol>
        <li><strong>La respuesta:</strong> qué encontraste, en una o dos frases.</li>
        <li><strong>La evidencia:</strong> los dos o tres números o gráficos que lo muestran.</li>
        <li><strong>La recomendación:</strong> qué conviene hacer, y qué pasaría si no se hace.</li>
      </ol>
      <p><strong>Un ejemplo con La Esquina:</strong></p>
      <pre><code>RESPUESTA
Norte es la sucursal que más crece: en junio vendió más que Centro
por primera vez. Centro no crece: en junio vendió casi lo mismo que en enero.

EVIDENCIA
- Norte pasó de $142.300 en enero a $520.500 en junio.
- Centro vendió $456.000 en enero y $453.100 en junio.
- Norte pasó de 26 ventas en enero a 62 en junio: crece sobre todo
  porque compra más gente.

RECOMENDACIÓN
Reforzar Norte (más personal y más stock de Frescos,
la categoría que más vende) y revisar en 3 meses si sigue creciendo.</code></pre>
      <p><strong>Lo que no va al principio:</strong> cómo hiciste el análisis, cuántas tablas armaste, los detalles de la limpieza. Eso va en un anexo, por si alguien quiere revisarlo.</p>
      <p><strong>Pedíselo a la IA así,</strong> con tus números ya verificados:</p>
      <pre><code>Con estos resultados verificados, armá un resumen de una página para
la dueña: primero la respuesta en 2 frases, después 3 datos de evidencia
y al final una recomendación concreta. No agregues números nuevos.</code></pre>
      <p>El "no agregues números nuevos" es clave: en la redacción, la IA a veces suma datos que no calculaste. Si aparece un número que no estaba en tus resultados verificados, sacalo.</p>` },
    { titulo: "Contar la incertidumbre: qué sabés y qué no", html: `
      <p class="idea">Decir "no estoy seguro de esto" no te hace ver débil: te hace confiable. Quien decide necesita saber qué tan firme es el piso que pisa.</p>
      <p>La <strong>incertidumbre</strong> es lo que no sabés con seguridad. En todo análisis hay, y conviene decirla en palabras simples:</p>
      <table>
        <tr><th>Qué tan seguro estás</th><th>Cómo decirlo</th><th>Ejemplo</th></tr>
        <tr><td>Mucho</td><td>"Los datos muestran que..."</td><td>Los datos muestran que Norte creció todos los meses.</td></tr>
        <tr><td>Bastante</td><td>"Es probable que..."</td><td>Es probable que Norte siga creciendo los próximos meses.</td></tr>
        <tr><td>Poco</td><td>"Una posible explicación es..., hay que confirmarla"</td><td>Una posible explicación es que el barrio está creciendo; hay que confirmarla.</td></tr>
      </table>
      <p><strong>Las limitaciones que conviene mencionar siempre:</strong></p>
      <ul>
        <li><strong>El período:</strong> seis meses son poco para hablar de estacionalidad (lo que se repite cada año, como más ventas en diciembre).</li>
        <li><strong>Lo que pasó y no está en los datos:</strong> el cierre de Sur en abril.</li>
        <li><strong>Las decisiones de limpieza:</strong> se sacaron 5 ventas sin cantidad.</li>
        <li><strong>Lo que es causa y lo que es solo correlación:</strong> que Norte y el QR suban juntos no prueba que uno cause al otro.</li>
      </ul>
      <p><strong>Una recomendación con incertidumbre es más fácil de aceptar</strong> si propone cómo despejarla: "Reforzar Norte por 3 meses y medir: si las ventas siguen subiendo, sumar personal fijo; si no, volver atrás". Así la decisión se puede corregir.</p>
      <p>Pedile a la IA: "¿Qué limitaciones tiene este análisis y qué debería aclarar para no exagerar las conclusiones?". Es una de las repreguntas más útiles antes de mandar un informe.</p>` },
    { titulo: "Usar IA en el equipo con responsabilidad", html: `
      <p class="idea">La IA es una herramienta, como Excel: lo que importa es que el resultado sea correcto y que otro pueda revisarlo. Contar cómo la usaste no le quita valor a tu trabajo: lo hace verificable.</p>
      <p><strong>Cuatro hábitos para trabajar en equipo:</strong></p>
      <ol>
        <li><strong>Decir que usaste IA y para qué.</strong> "Usé IA para agrupar los datos y armar el borrador; los números los verifiqué con los controles de suma y una muestra en Excel."</li>
        <li><strong>Guardar los pedidos importantes.</strong> El prompt y el diccionario de datos permiten que otro repita el análisis el mes que viene y compare.</li>
        <li><strong>Que otra persona revise lo que tiene consecuencias.</strong> Las decisiones sobre plata, personas o clientes no se toman con un análisis que solo vio una persona y una IA.</li>
        <li><strong>Respetar las reglas de datos de la empresa</strong>, como viste en el primer módulo: qué herramientas y qué datos se pueden usar.</li>
      </ol>
      <p><strong>Una nota al pie, lista para copiar:</strong></p>
      <pre><code>Cómo se hizo este análisis: datos de ventas de enero a junio de 2025
(947 ventas después de limpiar). Se usó IA para limpiar, agrupar y
redactar el borrador. Los totales se verificaron contra el total general
y con una muestra recalculada en Excel. Limitaciones: 6 meses de datos;
Sur cerró del 7 al 20 de abril.</code></pre>
      <p><strong>Lo que la IA no reemplaza:</strong> conocer tu negocio, hablar con la gente que está en la sucursal y hacerte cargo de la recomendación. La IA te ahorra horas de cuentas; el criterio sigue siendo tuyo.</p>
      <p>Con esto cerrás el recorrido del nombre del curso: <strong>preguntá</strong> con claridad, <strong>analizá</strong> sin engañarte y <strong>decidí</strong> con evidencia. El proyecto final lo junta todo.</p>` },
  ],
  practica: [
    "Escribí con ayuda de la IA el resumen de una página de La Esquina con la estructura respuesta, evidencia y recomendación. Verificá que cada número del resumen esté en tus resultados verificados y tachá los que no.",
    "Agregale a ese resumen un párrafo de limitaciones con al menos 3 puntos y reescribí cada conclusión con la frase que corresponda a tu nivel de seguridad.",
    "Escribí la nota al pie de un análisis que hayas hecho con tu planilla real: datos usados, para qué usaste IA, cómo verificaste y limitaciones. Pedile a alguien que la lea y anotá si pudo entender cómo repetir el análisis.",
  ],
  recursos: [
    { t: "Libro: Storytelling con datos, de Cole Nussbaumer Knaflic (Anaya)", url: "https://www.marcialpons.es/libros/storytelling-con-datos-guia-de-visualizacion-de-datos-para-profesionales-de-los-negocios/9788441553125/" },
    { t: "Libro: Cointeligencia, de Ethan Mollick (Conecta, 2024)", url: "https://www.casadellibro.com/libro-cointeligencia/9788418053214/16155367" },
    { t: "Libro: Factfulness, de Hans Rosling (Deusto)", url: "https://www.marcialpons.es/libros/factfulness/9788423429967/" },
  ],
  quiz: [
    { q: "Tenés 2 minutos con la dueña del almacén. ¿Por dónde empezás?", opciones: ["Por cómo limpiaste los datos","Por todas las tablas que armaste","Por la conclusión y lo que recomendás","Por las herramientas que usaste"], correcta: 2, explicacion: "Quien decide necesita lo importante primero. Empezar por la limpieza tienta porque fue mucho trabajo, pero eso va en un anexo, por si alguien quiere revisarlo." },
    { q: "Tenés que escribir un resumen de una página. ¿En qué orden van las partes?", opciones: ["Evidencia, método, conclusión","Método, tablas, recomendación","Respuesta, evidencia, recomendación","Recomendación, anexo, respuesta"], correcta: 2, explicacion: "Primero qué encontraste, después cómo lo sabés y al final qué hacer. Empezar por la evidencia tienta porque parece lo lógico, pero obliga a leer todo para saber a dónde vas." },
    { q: "La IA redacta tu resumen y aparece un número que vos no calculaste. ¿Qué hacés?", opciones: ["Lo sacás o lo verificás antes de usarlo: en la redacción, la IA a veces suma datos","Lo dejás, seguro está bien","Lo redondeás","Le pedís que lo explique y lo dejás"], correcta: 0, explicacion: "Por eso conviene pedirle que no agregue números nuevos. Pedirle que lo explique tienta, pero puede explicar con seguridad un número inventado." },
    { q: "Tenés que cerrar tu informe con una recomendación. ¿Cuál es mejor?", opciones: ["Hay que hacer algo con Norte","Norte es muy importante","Analizar más los datos","Reforzar Norte con más personal y revisar en 3 meses si sigue creciendo"], correcta: 3, explicacion: "Una recomendación dice qué hacer y cómo saber si funcionó. \"Analizar más los datos\" tienta porque parece prudente, pero no le dice a nadie qué decidir." },
    { q: "Pensás que Norte crece porque el barrio está creciendo, pero no tenés datos del barrio. ¿Cómo lo escribís?", opciones: ["Norte crece porque el barrio está creciendo","Una posible explicación es que el barrio está creciendo; hay que confirmarla","No lo escribís","Los datos muestran que el barrio crece"], correcta: 1, explicacion: "Si no tenés datos, es una hipótesis y se dice así. \"Los datos muestran\" tienta porque suena firme, pero los datos no dicen nada del barrio." },
    { q: "¿Por qué conviene contar la incertidumbre en un informe?", opciones: ["Porque quien decide necesita saber qué tan firme es cada conclusión","Para que el informe sea más largo","No conviene: te hace ver inseguro","Porque lo pide la IA"], correcta: 0, explicacion: "Contar lo que no sabés hace que confíen en lo que sí sabés. Que te hace ver inseguro tienta, pero si una conclusión exagerada sale mal, se pierde la confianza en todo." },
    { q: "Tenés 6 meses de datos. ¿Qué limitación mencionás?", opciones: ["Ninguna, 6 meses es mucho","Que la IA es nueva","Que 6 meses son pocos para hablar de cosas que se repiten cada año, como diciembre","Que faltan colores en los gráficos"], correcta: 2, explicacion: "Para ver lo que se repite cada año hacen falta varios años. Decir que 6 meses es mucho tienta porque son miles de ventas, pero cubren solo una parte del año." },
    { q: "La recomendación tiene incertidumbre. ¿Cómo la hacés más fácil de aceptar?", opciones: ["Escondiendo la incertidumbre","Proponiendo una prueba con una forma de medir y de volver atrás","Repitiéndola más veces","Con un gráfico más grande"], correcta: 1, explicacion: "Una decisión que se puede corregir da menos miedo. Esconder la incertidumbre tienta para convencer rápido, pero si sale mal, la próxima recomendación no la va a creer nadie." },
    { q: "Usaste IA para el análisis. ¿Qué hacés al presentarlo?", opciones: ["No lo decís, para que valoren más tu trabajo","Decís que lo hizo la IA y no te hacés cargo","Decís para qué la usaste y cómo verificaste los números","Mostrás la conversación completa sin explicar nada"], correcta: 2, explicacion: "Contar cómo la usaste vuelve el análisis verificable. Esconderlo tienta para que se valore más, pero si aparece un error, la confianza se pierde el doble." },
    { q: "El mes que viene otro compañero tiene que repetir tu análisis. ¿Qué le sirve más?", opciones: ["El pedido a la IA y el diccionario de datos que usaste","Tu explicación de memoria","El gráfico final","Nada, que lo haga desde cero"], correcta: 0, explicacion: "Con el pedido y el diccionario, el análisis se puede repetir y comparar. El gráfico final tienta porque es lo que se ve, pero no dice cómo se llegó a él." },
    { q: "El análisis va a decidir si se despide personal de una sucursal. ¿Qué no puede faltar?", opciones: ["Un gráfico lindo","Que lo haga la IA más nueva","Que sea rápido","Que otra persona lo revise y que los números estén verificados con todos los controles"], correcta: 3, explicacion: "Las decisiones sobre personas necesitan más de un par de ojos. Usar la IA más nueva tienta, pero ninguna versión reemplaza la revisión humana en una decisión así." },
    { q: "Usás IA en todo tu análisis. ¿Qué parte del trabajo no le podés delegar?", opciones: ["Agrupar los datos","Hacerte cargo de la recomendación con lo que sabés del negocio","Armar el gráfico","Redactar el borrador"], correcta: 1, explicacion: "La IA ahorra horas de cuentas, pero no sabe lo que pasó fuera de la planilla ni responde por la decisión. Delegar la redacción tienta y está bien, siempre que vos revises y firmes." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: un análisis de punta a punta",
  nivel: "Proyecto final",
  objetivos: [
    "Hacer un análisis completo de La Esquina: preparar, preguntar, analizar, verificar, mostrar y recomendar",
    "Aplicar el mismo camino a una planilla real y evaluarlo con la rúbrica",
  ],
  lecciones: [
    { titulo: "Proyecto guiado: la pregunta de la dueña de La Esquina", html: `
      <p class="idea">El proyecto final junta todo el curso en un solo trabajo, como un ensayo general antes de hacerlo con tu planilla real. Vas a responder una pregunta real de negocio, con los datos de práctica, de principio a fin.</p>
      <p><strong>La consigna:</strong> la dueña de La Esquina pregunta: <em>"Tengo presupuesto para reforzar una sola sucursal el segundo semestre. ¿Cuál elijo y por qué?"</em>. Arrancás con la planilla <a href="practica/ventas-sucias.xlsx" download>ventas sucias</a>.</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th><th>Módulo</th><th>Control</th></tr>
        <tr><td>1. Preparar</td><td>Diagnóstico y limpieza, con registro de cambios. Diccionario de datos.</td><td>Preparar</td><td>947 ventas, 3 sucursales, $6.270.350</td></tr>
        <tr><td>2. Preguntar</td><td>Convertí la consigna en 2 o 3 preguntas medibles y escribí el pedido con la plantilla de 5 partes.</td><td>Preguntá</td><td>Podés imaginar la tabla de cada respuesta</td></tr>
        <tr><td>3. Analizar</td><td>Total, ventas y ticket por sucursal; evolución por mes de cada una.</td><td>Analizá</td><td>Las partes suman el total</td></tr>
        <tr><td>4. Verificar</td><td>Los 5 controles rápidos. Recalculá Norte en junio en Excel.</td><td>Verificá</td><td>Norte junio: $520.500</td></tr>
        <tr><td>5. Mostrar</td><td>Un gráfico de líneas y uno de barras, con títulos que dicen la conclusión.</td><td>Mostrá</td><td>Eje en cero en las barras</td></tr>
        <tr><td>6. Recomendar</td><td>Resumen de una página con limitaciones y nota al pie de cómo usaste IA.</td><td>Decidí</td><td>Ningún número sin verificar</td></tr>
      </table>
      <p><strong>Cosas que deberías encontrar</strong> (si no aparecen, revisá tu análisis):</p>
      <ul>
        <li>Centro vende casi la mitad del total, pero no crece.</li>
        <li>Norte crece todos los meses y en junio superó a Centro.</li>
        <li>Sur bajó en abril por el cierre, no por una caída.</li>
        <li>El ticket promedio es parecido en las tres: las diferencias vienen de cuántas ventas hay.</li>
      </ul>
      <p><strong>No hay una única respuesta correcta.</strong> Podés recomendar Norte porque crece, o Centro porque es la más grande y está estancada. Lo que se evalúa es que la recomendación esté bien argumentada, con números verificados y con sus limitaciones claras.</p>
      <p><strong>Rúbrica:</strong> una lista de criterios para evaluar el trabajo. Cada criterio vale un punto:</p>
      <ol>
        <li>La limpieza tiene registro de cambios y da los valores de control.</li>
        <li>Las preguntas son medibles y responden a la consigna.</li>
        <li>Todos los números del informe pasaron los controles.</li>
        <li>Los gráficos son del tipo correcto y tienen títulos con la conclusión.</li>
        <li>El resumen empieza por la respuesta y termina en una recomendación concreta.</li>
        <li>Las limitaciones y el uso de IA están explicados.</li>
      </ol>
      <p>Con 5 o 6 puntos, estás listo para hacerlo con una planilla real.</p>` },
    { titulo: "Ahora con una planilla real", html: `
      <p class="idea">Hasta acá practicaste con La Esquina, un almacén inventado. El paso que sigue es repetir lo mismo que hiciste en el proyecto guiado, pero con una planilla real y una decisión real. No hace falta tener trabajo: tus gastos o unos datos públicos sirven igual.</p>
      <p><strong>Qué quiere decir, con ejemplos:</strong></p>
      <table>
        <tr><th>Si...</th><th>Una planilla que podés conseguir</th><th>Una decisión que te ayuda a tomar</th></tr>
        <tr><td>Hoy no trabajás</td><td>Tus gastos de los últimos 3 meses</td><td>En qué recortar el mes que viene</td></tr>
        <tr><td>Estás buscando trabajo</td><td>Datos públicos del rubro que te interesa, de datos.gob.ar</td><td>Qué contarías en una entrevista sobre ese rubro</td></tr>
        <tr><td>Trabajás en un comercio</td><td>Las ventas de los últimos meses</td><td>Qué productos reponer primero</td></tr>
        <tr><td>Trabajás en atención al cliente</td><td>Los reclamos del último trimestre</td><td>Qué problema resolver primero</td></tr>
        <tr><td>Trabajás en recursos humanos</td><td>Las ausencias por mes y por área (sin nombres)</td><td>En qué área reforzar el equipo</td></tr>
        <tr><td>Trabajás en administración</td><td>Las facturas y cuándo se cobraron</td><td>A qué clientes llamar por pagos atrasados</td></tr>
      </table>
      <p>Lo que cambia son los datos; los pasos son los mismos seis del proyecto guiado. Esta lección es la lista para hacerlo sin riesgos.</p>
      <p><strong>Antes de empezar:</strong></p>
      <ol>
        <li><strong>Elegí una decisión real y chica,</strong> que se tome en las próximas semanas: un turno, un pedido de stock, a qué clientes llamar.</li>
        <li><strong>Si los datos son de una empresa, pedí permiso</strong> y revisá sus reglas sobre datos e IA, como viste en el primer módulo. Si son tuyos o públicos, no hace falta.</li>
        <li><strong>Anonimizá</strong> y dejá solo las columnas que hacen falta para la pregunta.</li>
      </ol>
      <p><strong>Durante el análisis,</strong> seguí los mismos pasos del proyecto guiado y andá anotando todo en un solo documento (un Word o un Google Docs alcanza), con estas 8 partes:</p>
      <pre><code>1. Pregunta y decisión que responde
2. Datos: de dónde salen, período, cantidad de filas
3. Diccionario de datos
4. Registro de limpieza
5. Pedidos a la IA que usaste (los importantes)
6. Resultados verificados y cómo los verificaste
7. Gráficos
8. Resumen de una página, con limitaciones y nota al pie</code></pre>
      <p><strong>Después:</strong></p>
      <ul>
        <li><strong>Pedí una revisión</strong> a alguien que conozca el tema, antes de presentarlo.</li>
        <li><strong>Medí el resultado de la decisión.</strong> Si recomendaste algo, fijate al mes si funcionó. Así aprendés qué tan buenos eran tus análisis.</li>
        <li><strong>Anotá cuánto tiempo te llevó</strong> con IA, comparado con hacerlo a mano. Te sirve para saber dónde conviene usarla y dónde no.</li>
        <li><strong>Si estás buscando trabajo,</strong> el documento de 8 partes es una muestra concreta de lo que sabés hacer: llevalo a las entrevistas o sumalo a tu CV.</li>
      </ul>
      <p><strong>Para seguir aprendiendo:</strong> los tres libros base del curso son <em>Cointeligencia</em> (trabajar con IA), <em>El arte de la estadística</em> (entender los datos) y <em>Storytelling con datos</em> (comunicar). Están en los recursos de cada módulo.</p>` },
  ],
  practica: [
    "Hacé el proyecto guiado completo con \"ventas sucias\" y evaluate con la rúbrica de 6 puntos. Anotá tu puntaje y qué criterio te costó más.",
    "Verificá los valores de control del proyecto: 947 ventas, total $6.270.350, Norte en junio $520.500 y Centro en junio $453.100. Anotá cuáles coincidieron a la primera.",
    "Repetí el proyecto con tu planilla real (podés elegir uno de los ejemplos de la lección) y anotá las 8 partes en un documento. Pedile a alguien que lo evalúe con la rúbrica y anotá su puntaje.",
    "Un mes después de tu recomendación, medí si funcionó y escribí 3 frases: qué recomendaste, qué pasó y qué harías distinto.",
  ],
  recursos: [
    { t: "Libro: Cointeligencia, de Ethan Mollick (Conecta, 2024)", url: "https://www.casadellibro.com/libro-cointeligencia/9788418053214/16155367" },
    { t: "Libro: El arte de la estadística, de David Spiegelhalter (Capitán Swing)", url: "https://www.marcialpons.es/libros/el-arte-de-la-estadistica/9788412619850/" },
    { t: "Libro: Storytelling con datos, de Cole Nussbaumer Knaflic (Anaya)", url: "https://www.marcialpons.es/libros/storytelling-con-datos-guia-de-visualizacion-de-datos-para-profesionales-de-los-negocios/9788441553125/" },
  ],
  quiz: [
    { q: "La dueña pregunta qué sucursal reforzar. ¿Cuál es tu primer paso?", opciones: ["Pedirle a la IA la respuesta directa","Armar los gráficos","Escribir la recomendación","Limpiar los datos y verificar los valores de control"], correcta: 3, explicacion: "Con datos sucios, todo lo demás sale mal. Pedir la respuesta directa tienta por rápido, pero con 11 nombres de sucursal la comparación ya estaría mal." },
    { q: "Si terminás de limpiar y te quedan 952 ventas, pero los valores de control dicen 947, ¿qué pasó?", opciones: ["Nada, es casi lo mismo","Faltó sacar algo: probablemente las 5 ventas sin cantidad","Los valores de control están mal","Hay que redondear"], correcta: 1, explicacion: "952 menos 5 da 947: faltó resolver las ventas sin cantidad. Pensar que los valores de control están mal tienta, pero son justamente la referencia para comprobarlo." },
    { q: "Tu compañero se preocupa porque no sabe cuál es la sucursal \"correcta\" en el proyecto guiado. ¿Qué le explicás que se evalúa?", opciones: ["Que elijas la sucursal correcta","Que uses la IA más nueva","Que la recomendación esté bien argumentada, con números verificados y limitaciones claras","Que el informe sea largo"], correcta: 2, explicacion: "Podés recomendar Norte o Centro si lo argumentás bien. Que elijas la correcta tienta, pero en decisiones reales casi nunca hay una sola respuesta." },
    { q: "Si recomendás Norte porque crece, ¿qué limitación es importante mencionar?", opciones: ["Que son solo 6 meses de datos y no sabemos si el crecimiento va a seguir","Que Norte empieza con N","Que la IA es nueva","Ninguna, el crecimiento es claro"], correcta: 0, explicacion: "Un crecimiento de 6 meses puede frenarse. Decir que es claro tienta porque los números suben todos los meses, pero no sabemos qué pasará después." },
    { q: "Vas a repetir el proyecto con una planilla real. ¿Qué decisión conviene elegir la primera vez?", opciones: ["La más grande e importante de la empresa","Una real y chica, que se tome en las próximas semanas","Una que ya se tomó","Ninguna, solo practicar"], correcta: 1, explicacion: "Una decisión chica y cercana permite aprender rápido y medir el resultado. La más grande tienta porque muestra más impacto, pero si sale mal, el costo también es grande." },
    { q: "Antes de subir los datos de tu trabajo a la IA, ¿qué no puede faltar?", opciones: ["Revisar las reglas de la empresa y anonimizar los datos","Comprar una suscripción más cara","Armar los gráficos","Pedirle a la IA permiso"], correcta: 0, explicacion: "Los datos del trabajo pueden tener información personal o confidencial. Pedirle permiso a la IA tienta como chiste, pero la que decide es tu empresa." },
    { q: "Presentaste tu recomendación. ¿Qué hacés un mes después?", opciones: ["Nada, ya terminó","Hacés otro análisis distinto","Medís si la decisión funcionó y anotás qué harías distinto","Le pedís a la IA que te felicite"], correcta: 2, explicacion: "Medir el resultado es la forma de saber si tus análisis eran buenos. Dar por terminado el trabajo tienta, pero te perdés lo que más enseña." },
    { q: "En tu proyecto, la IA te da una conclusión muy convincente que no podés verificar con ningún control. ¿Qué hacés?", opciones: ["La usás porque es convincente","La presentás como lo principal","La borrás de la conversación","No la usás como resultado: como mucho, la mencionás como hipótesis a confirmar"], correcta: 3, explicacion: "Lo que no podés verificar no puede sostener una decisión. Que es convincente tienta, pero es justo lo que hace peligrosas a las alucinaciones." },
  ],
},
];
