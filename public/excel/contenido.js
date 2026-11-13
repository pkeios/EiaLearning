// Temario del curso "Excel y Google Sheets desde cero". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js excel y node tools/metodologia.js excel
window.TEMARIO = [
{
  id: "empezar",
  icono: "🟩",
  titulo: "Qué es una planilla y cómo abrirla gratis",
  nivel: "Básico",
  objetivos: [
    "Ubicar una celda por su columna y su fila (por ejemplo, C5) y seleccionar un rango como A1:C10",
    "Abrir Excel para la web o Google Sheets gratis y cargar datos en una hoja nueva",
    "Abrir el archivo de práctica del curso y guardar, renombrar y compartir una planilla",
  ],
  lecciones: [
    { titulo: "Filas, columnas y celdas", html: `
      <p class="idea">Una planilla es una tabla gigante en la pantalla. Sirve para anotar datos y, sobre todo, para que la computadora haga las cuentas por vos: si cambiás un número, el total se actualiza solo.</p>
      <p>Las dos planillas más usadas son <strong>Excel</strong> (de Microsoft) y <strong>Google Sheets</strong> (de Google; en castellano se llama "Hojas de cálculo de Google"). Funcionan casi igual: lo que aprendas en una te sirve en la otra. En el curso, cuando algo cambia entre las dos, te lo marcamos.</p>
      <p>La planilla está hecha de:</p>
      <table>
        <tr><th>Parte</th><th>Qué es</th><th>Cómo se nombra</th></tr>
        <tr><td><strong>Columna</strong></td><td>Cada hilera vertical de casillas, de arriba abajo</td><td>Con letras: A, B, C... Z, AA, AB...</td></tr>
        <tr><td><strong>Fila</strong></td><td>Cada hilera horizontal de casillas, de izquierda a derecha</td><td>Con números: 1, 2, 3...</td></tr>
        <tr><td><strong>Celda</strong></td><td>Cada casilla, donde se cruzan una columna y una fila</td><td>Letra de la columna + número de la fila: A1, C5, H948</td></tr>
        <tr><td><strong>Rango</strong></td><td>Un grupo de celdas en rectángulo</td><td>Primera celda, dos puntos y última: A1:C10</td></tr>
      </table>
      <p>Por ejemplo, la celda <strong>C5</strong> está en la columna C y en la fila 5. Es como buscar un asiento en el cine: fila y número.</p>
      <pre><code>      A          B         C
1   Producto   Precio    Cantidad
2   Yerba      4800      2
3   Arroz      1700      4
              ↑
        esta es la celda B3 (vale 1700)</code></pre>
      <p>El rango <strong>A1:C3</strong> son las 9 celdas de ese dibujo. Los rangos se usan muchísimo: "sumá de H2 a H948" se escribe H2:H948.</p>
      <p>Arriba de la planilla hay un cuadrito que dice en qué celda estás parado (se llama <strong>cuadro de nombres</strong>) y, al lado, la <strong>barra de fórmulas</strong>, que muestra lo que tiene adentro la celda elegida. Mirarla te va a salvar muchas veces: lo que se ve en la celda no siempre es lo que tiene adentro, como vas a ver en el módulo 1.</p>` },
    { titulo: "Abrirla gratis y cargar tus primeros datos", html: `
      <p class="idea">No hace falta comprar nada. Excel tiene una versión gratis en el navegador y Google Sheets es gratis. Solo necesitás una cuenta.</p>
      <table>
        <tr><th>Herramienta</th><th>Qué cuenta necesitás</th><th>Dónde se abre</th></tr>
        <tr><td>Excel para la web</td><td>Cuenta de Microsoft (gratis, con cualquier mail)</td><td>office.com, y elegís Excel</td></tr>
        <tr><td>Google Sheets</td><td>Cuenta de Google (la de Gmail)</td><td>sheets.google.com</td></tr>
      </table>
      <p>Las dos también tienen aplicación para el celular, pero para aprender conviene una computadora: se ve más y se escribe más rápido. Si no tenés computadora, en muchas bibliotecas populares y centros comunitarios hay para usar.</p>
      <p><strong>Cargar datos.</strong> Hacé clic en una celda, escribí y apretá:</p>
      <ul>
        <li><strong>Enter</strong> para guardar y bajar a la celda de abajo.</li>
        <li><strong>Tab</strong> para guardar y pasar a la de la derecha.</li>
        <li><strong>Esc</strong> para cancelar lo que estabas escribiendo.</li>
      </ul>
      <p>Para corregir una celda, hacé doble clic sobre ella (o apretá F2) y cambiá lo que haga falta. Si te equivocaste, <strong>Ctrl + Z</strong> deshace el último cambio. Lo podés apretar varias veces.</p>
      <p>Por ejemplo, armá tu primera lista de compras:</p>
      <pre><code>      A           B
1   Producto    Precio
2   Leche       1400
3   Pan         2900
4   Huevos      3400</code></pre>
      <p>Para <strong>seleccionar un rango</strong>, hacé clic en la primera celda y arrastrá hasta la última, o hacé clic en la primera y, con Shift apretado, en la última. Para elegir una columna entera, clic en su letra; para una fila entera, en su número.</p>
      <p>Si un texto no entra en la columna, poné el mouse en la línea entre dos letras de columna (por ejemplo, entre A y B) y hacé doble clic: la columna se ajusta sola al contenido más largo.</p>` },
    { titulo: "Archivos, hojas y el archivo de práctica", html: `
      <p class="idea">Un archivo de planilla se llama <strong>libro</strong> y puede tener varias <strong>hojas</strong>, como las pestañas de un cuaderno. En el curso vas a practicar con las ventas de un almacén inventado, La Esquina.</p>
      <p><strong>Hojas.</strong> Abajo de todo están las pestañas: Hoja1, Hoja2... Con el botón + agregás una, con doble clic sobre el nombre la renombrás, y con clic derecho la borrás o la copiás. Sirven para separar cosas dentro de un mismo archivo: por ejemplo, una hoja con los datos y otra con los resúmenes.</p>
      <p><strong>Guardar.</strong> En Excel para la web y en Google Sheets, la planilla se guarda sola en la nube cada vez que cambiás algo. Arriba aparece algo como "Guardado". Lo que sí conviene es ponerle un buen nombre: hacé clic en el título de arriba (por ejemplo, "Libro1" u "Hoja de cálculo sin título") y escribí uno que diga qué es, como "Compras octubre".</p>
      <p><strong>El archivo de práctica.</strong> Descargá <a href="../datos/practica/ventas-limpias.xlsx" download>ventas-limpias.xlsx</a>. Tiene 947 ventas de La Esquina, de enero a junio de 2025, con 10 columnas: número de venta, fecha, sucursal, categoría, producto, cantidad, precio por unidad, total, medio de pago y tipo de cliente.</p>
      <table>
        <tr><th>Para abrirlo en...</th><th>Hacé esto</th></tr>
        <tr><td>Excel para la web</td><td>Subilo a tu OneDrive (en office.com, "Cargar") y abrilo con un clic</td></tr>
        <tr><td>Google Sheets</td><td>En sheets.google.com, "Abrir un archivo" → "Subir", o en Drive: Nuevo → Subir archivo, y después "Abrir con Hojas de cálculo de Google"</td></tr>
        <tr><td>Excel de escritorio</td><td>Doble clic sobre el archivo descargado</td></tr>
      </table>
      <p>Por ejemplo, para comprobar que se abrió bien, fijate que la última venta esté en la fila 948: la fila 1 tiene los títulos y las 947 ventas van de la 2 a la 948. Apretá <strong>Ctrl + Flecha abajo</strong> para saltar al final de la columna.</p>
      <p><strong>Compartir.</strong> Con el botón "Compartir" le mandás el archivo a otra persona. Podés elegir si puede solo ver, comentar o también editar. Antes de compartir una planilla con datos de personas (nombres, teléfonos, DNI), preguntate si la otra persona de verdad los necesita.</p>
      <p><strong>Descargar.</strong> Desde el menú Archivo podés bajar una copia en formato Excel (.xlsx), PDF o CSV. Un <strong>CSV</strong> es una planilla guardada como texto simple, con los valores separados: la abre casi cualquier programa, pero no guarda colores ni fórmulas.</p>` },
  ],
  practica: [
    "Abrí Excel para la web o Google Sheets y armá la lista de compras de la segunda lección con 5 productos. Anotá en qué celda quedó el precio del tercer producto.",
    "Abrí el archivo de práctica ventas-limpias.xlsx y comprobá con Ctrl + Flecha abajo que la última venta está en la fila 948. Anotá qué número de venta tiene (columna A).",
    "Agregá una hoja nueva al archivo de práctica, llamala \"Resumen\" y escribí en A1 \"Resumen de ventas\". Anotá cuántas hojas tiene ahora el libro.",
  ],
  recursos: [
    { t: "Microsoft: ayuda y formación de Excel", url: "https://support.microsoft.com/es-es/excel" },
    { t: "Libro gratis: Excel inicial, en LibreTexts (en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Vocacional/Vocacional/Aplicaciones_informaticas_y_tecnologia_de_la_informacion/Aplicaciones_informaticas/Libro%3A_Excel_inicial_(Brown_et_al.)" },
    { t: "Curso Excel Skills for Business: Essentials, de Macquarie University (Coursera, en inglés)", url: "https://www.coursera.org/learn/excel-essentials" },
  ],
  quiz: [
    { q: "Te dicen \"mirá la celda D7\". ¿Dónde la buscás?", opciones: ["En la fila D, columna 7","En la hoja 7","En la columna D, fila 7","En la séptima celda de arriba a la izquierda, contando de a una"], correcta: 2, explicacion: "Las columnas tienen letras y las filas números, y la celda se nombra con la letra primero. Lo de fila D tienta porque mezclás cuál es cuál, pero las filas siempre son números." },
    { q: "¿Cuántas celdas tiene el rango A1:C3?", opciones: ["9","3","6","2"], correcta: 0, explicacion: "Son 3 columnas (A, B, C) por 3 filas (1, 2, 3): 9 celdas. Contestar 3 tienta porque ves el 3 en el nombre, pero el rango es un rectángulo." },
    { q: "Tenés que sumar desde la celda H2 hasta la H948. ¿Cómo escribís ese rango?", opciones: ["H2-H948","H2;H948","H2 a H948","H2:H948"], correcta: 3, explicacion: "Un rango va con dos puntos entre la primera y la última celda. El punto y coma tienta porque se usa en las funciones, pero ahí separa cosas distintas, no marca un rango." },
    { q: "Querés usar planillas, pero no querés pagar. ¿Qué hacés?", opciones: ["Bajás un Excel trucho de internet","Usás Excel para la web con una cuenta de Microsoft o Google Sheets con una cuenta de Google","Esperás a tener plata para comprarlo","No se puede: siempre hay que pagar"], correcta: 1, explicacion: "Las dos versiones en el navegador son gratis. Un programa trucho tienta porque parece completo, pero puede traer virus y es ilegal." },
    { q: "Escribiste un precio en una celda y querés pasar a la celda de la derecha. ¿Qué tecla apretás?", opciones: ["Enter","Esc","Tab","Ctrl + Z"], correcta: 2, explicacion: "Tab guarda y va a la derecha; Enter guarda y baja. Enter tienta porque es la tecla de siempre, pero te lleva a la celda de abajo." },
    { q: "Borraste sin querer una columna entera. ¿Qué hacés primero?", opciones: ["Apretás Ctrl + Z para deshacer","Cerrás el archivo sin guardar","Volvés a escribir todo a mano","Apretás Esc"], correcta: 0, explicacion: "Ctrl + Z deshace el último cambio, y lo podés repetir. Cerrar sin guardar tienta como en los programas viejos, pero en la web se guarda solo y perderías otras cosas." },
    { q: "Un nombre de producto no entra en la columna y se corta. ¿Qué hacés?", opciones: ["Borrás la mitad del nombre","Lo escribís en dos celdas","Achicás la letra de toda la planilla","Doble clic en la línea entre las letras de las columnas para que se ajuste sola"], correcta: 3, explicacion: "La columna se ajusta al contenido más largo con un doble clic. Escribirlo en dos celdas tienta, pero después ya no podés buscar ni ordenar bien ese dato." },
    { q: "Tu planilla tiene una hoja con las ventas y querés hacer los resúmenes aparte, en el mismo archivo. ¿Qué usás?", opciones: ["Un archivo nuevo para cada resumen","Una hoja nueva, con el botón + de abajo","Las filas de abajo de todo de la misma hoja","Otra pestaña del navegador"], correcta: 1, explicacion: "Las hojas separan cosas dentro de un mismo libro. Poner los resúmenes abajo de los datos tienta por cómodo, pero se mezclan con las ventas y después cuesta ordenar o filtrar." },
    { q: "Usás Google Sheets y te preocupa perder los cambios si se corta la luz. ¿Qué pasa?", opciones: ["Perdés todo si no apretaste Guardar","Se guarda solo si lo descargás","Se guarda solo en la nube cada vez que cambiás algo","Se guarda una vez por día"], correcta: 2, explicacion: "Excel para la web y Google Sheets guardan solos en la nube. Pensar que hay que apretar Guardar tienta por costumbre de los programas instalados, pero acá no hace falta." },
    { q: "Abriste el archivo de práctica y la última venta está en la fila 948. ¿Cuántas ventas hay?", opciones: ["947, porque la fila 1 tiene los títulos","948","949","10"], correcta: 0, explicacion: "La primera fila tiene los nombres de las columnas, así que las ventas van de la 2 a la 948. Contestar 948 tienta, pero estarías contando la fila de los títulos como una venta." },
    { q: "Tenés que mandarle tu planilla a alguien que solo la tiene que mirar. ¿Qué permiso le das al compartir?", opciones: ["Que pueda editar","Ninguno: le mandás tu contraseña","Que sea el dueño del archivo","Que solo pueda ver"], correcta: 3, explicacion: "Dar solo el permiso necesario evita cambios por error. Editar tienta porque es la opción \"completa\", pero si no tiene que cambiar nada, puede borrar algo sin querer." },
    { q: "Querés pasar una planilla a un programa que solo lee texto simple. ¿En qué formato la descargás?", opciones: ["PDF","CSV","Una captura de pantalla","Excel con colores"], correcta: 1, explicacion: "El CSV es texto simple con los valores separados y lo abre casi cualquier programa. El PDF tienta porque se ve igual, pero no se puede trabajar con sus datos como planilla." },
  ],
},
{
  id: "datos",
  icono: "🔢",
  titulo: "Tipos de datos, formato y tablas ordenadas",
  nivel: "Básico",
  objetivos: [
    "Distinguir números, textos y fechas, y darte cuenta cuando un número quedó guardado como texto",
    "Darle formato de moneda, miles, porcentaje y decimales sin cambiar el valor de la celda",
    "Armar una tabla ordenada: una fila por caso, un encabezado por columna y sin celdas combinadas",
  ],
  lecciones: [
    { titulo: "Números, textos y fechas", html: `
      <p class="idea">La planilla trata distinto un número, un texto y una fecha. Con los números hace cuentas; con los textos, no. Si un número queda guardado como texto, las cuentas fallan sin avisar.</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplo</th><th>Cómo se ve</th></tr>
        <tr><td>Número</td><td>4800</td><td>Pegado a la derecha de la celda</td></tr>
        <tr><td>Texto</td><td>Yerba 1 kg</td><td>Pegado a la izquierda</td></tr>
        <tr><td>Fecha</td><td>15/03/2025</td><td>A la derecha (por dentro es un número)</td></tr>
      </table>
      <p>Esa pista de la alineación es muy útil: si escribís un precio y queda pegado a la <strong>izquierda</strong>, la planilla lo tomó como texto. Pasa, por ejemplo, si escribiste "$ 4.800,00" con espacios raros, o si copiaste el número de una página web.</p>
      <p><strong>El separador de decimales.</strong> En Argentina se usa la coma para los decimales (2,5) y el punto para los miles (1.500). La planilla usa lo que diga la configuración regional del archivo. Si la tenés en Argentina o en otro país de habla hispana, escribí 2,5. Si escribís 2.5 y queda a la izquierda, lo tomó como texto.</p>
      <p>En Google Sheets la configuración está en Archivo → Configuración → Configuración regional. En Excel para la web, depende de la configuración de idioma y región de tu cuenta.</p>
      <p><strong>Fechas.</strong> Escribí las fechas siempre igual, por ejemplo 15/03/2025. Por dentro, la planilla las guarda como el número de días desde una fecha inicial: por eso puede restar dos fechas y decirte cuántos días pasaron.</p>
      <pre><code>      A            B            C
1   Entrada      Salida       Días
2   01/03/2025   15/03/2025   =B2-A2   → 14</code></pre>
      <p>Por ejemplo, en el archivo de práctica la columna "fecha" quedó guardada como texto (2025-01-01). Para este curso no es un problema: la vas a usar para agrupar por mes en el módulo 6.</p>` },
    { titulo: "Formato: cómo se ve no es lo que vale", html: `
      <p class="idea">El <strong>formato</strong> cambia cómo se ve un número, no lo que vale. Una celda puede mostrar $ 6.621 y tener adentro 6621,2777. La barra de fórmulas te muestra el valor real.</p>
      <table>
        <tr><th>Formato</th><th>El valor</th><th>Cómo se ve</th></tr>
        <tr><td>General</td><td>1670050</td><td>1670050</td></tr>
        <tr><td>Número con separador de miles</td><td>1670050</td><td>1.670.050</td></tr>
        <tr><td>Moneda</td><td>1670050</td><td>$ 1.670.050,00</td></tr>
        <tr><td>Porcentaje</td><td>0,27</td><td>27%</td></tr>
        <tr><td>Sin decimales</td><td>6621,2777</td><td>6.621</td></tr>
      </table>
      <p>Los botones de formato están en Excel en la pestaña Inicio (grupo Número) y en Google Sheets en la barra de arriba (el símbolo $, el %, y los botones para sumar o quitar decimales). También podés usar clic derecho → Formato de celdas.</p>
      <p><strong>El porcentaje es la trampa más común.</strong> 27% vale 0,27. Si escribís 27 y después le ponés formato de porcentaje, se ve 2700%. Para cargar un porcentaje, escribí 27% directamente (con el símbolo) o 0,27 y después el formato.</p>
      <p><strong>Por qué importa que el valor sea el real.</strong> Si una celda muestra 6.621, pero vale 6621,2777 y la usás en una cuenta, la cuenta usa 6621,2777. Casi siempre está bien. Cuando necesitás que el valor sea redondo de verdad, se usa la función REDONDEAR, que ves en el módulo 3.</p>
      <p>Por ejemplo, si una celda con un precio se ve como ###### no está rota: la columna es demasiado angosta para mostrar el número con su formato. Ensanchala y aparece.</p>
      <p><strong>Formato que ayuda a leer:</strong> negrita para la fila de títulos, un color de fondo suave para los encabezados y los números alineados a la derecha. No hace falta más: muchos colores distraen.</p>` },
    { titulo: "La tabla ordenada: la base de todo", html: `
      <p class="idea">Las funciones, los filtros y las tablas dinámicas de este curso funcionan bien si los datos están en una <strong>tabla ordenada</strong>: una fila por caso, una columna por dato y una sola fila de títulos arriba.</p>
      <p>Las reglas son cinco:</p>
      <ol>
        <li><strong>Una fila de encabezados</strong> arriba, con un nombre corto y distinto para cada columna.</li>
        <li><strong>Una fila por caso:</strong> cada venta, cada gasto o cada alumno en su propia fila.</li>
        <li><strong>Un solo dato por celda:</strong> "Yerba" en una celda y "2" en otra, no "Yerba x2".</li>
        <li><strong>Sin filas ni columnas vacías</strong> en el medio de los datos.</li>
        <li><strong>Sin celdas combinadas</strong> (las que se unen para hacer un título grande).</li>
      </ol>
      <table>
        <tr><th>Así no</th><th>Así sí</th></tr>
        <tr><td>"Yerba x2 $9600" en una sola celda</td><td>Producto: Yerba · Cantidad: 2 · Total: 9600</td></tr>
        <tr><td>Una fila vacía entre enero y febrero</td><td>Una columna "mes" y las filas una abajo de la otra</td></tr>
        <tr><td>Totales escritos en el medio de los datos</td><td>Los totales en otra hoja o a un costado</td></tr>
      </table>
      <p>El archivo de práctica ya es una tabla ordenada: por ejemplo, la fila 2 es la venta V0001, de 4 paquetes de arroz de $1.700, total $6.800, en Centro.</p>
      <p><strong>Inmovilizar la fila de títulos.</strong> Con 947 filas, cuando bajás dejás de ver los títulos. Para que la fila 1 quede siempre visible: en Excel, Vista → Inmovilizar → Inmovilizar fila superior. En Google Sheets, Ver → Inmovilizar → 1 fila.</p>
      <p>Esto lo vas a agradecer en cada módulo: si la tabla está ordenada, todo lo que sigue sale fácil. Si no, todo lo que sigue sale mal.</p>` },
  ],
  practica: [
    "Escribí en una hoja nueva 3 precios: uno bien, uno con \"$\" y espacios copiado de una página web y uno con punto decimal. Anotá cuáles quedaron a la derecha (números) y cuáles a la izquierda (texto).",
    "Escribí 0,27 en una celda y 27 en otra, y poneles formato de porcentaje a las dos. Anotá qué muestra cada una y cuál es la forma correcta de cargar 27%.",
    "En el archivo de práctica, inmovilizá la fila 1 y bajá hasta la fila 500. Anotá qué sucursal y qué total tiene esa fila, leyendo los títulos que quedaron arriba.",
  ],
  recursos: [
    { t: "Microsoft: ayuda y formación de Excel", url: "https://support.microsoft.com/es-es/excel" },
    { t: "Libro gratis: Excel inicial, capítulo Habilidades fundamentales (LibreTexts)", url: "https://espanol.libretexts.org/Bookshelves/Vocacional/Vocacional/Aplicaciones_informaticas_y_tecnologia_de_la_informacion/Aplicaciones_informaticas/Libro%3A_Excel_inicial_(Brown_et_al.)" },
    { t: "Google: ordenar y filtrar tus datos (incluye inmovilizar)", url: "https://support.google.com/docs/answer/3540681?hl=es" },
  ],
  quiz: [
    { q: "Escribiste un precio y quedó pegado a la izquierda de la celda. ¿Qué concluís?", opciones: ["Que está todo bien, es una cuestión de estética","Que es un número negativo","Que la planilla lo tomó como texto y no va a hacer cuentas con él","Que la celda está protegida"], correcta: 2, explicacion: "Los números se alinean a la derecha y los textos a la izquierda. Pensar que es estética tienta, pero un número como texto hace fallar las sumas sin avisar." },
    { q: "Tu planilla está en configuración de Argentina. ¿Cómo escribís dos y medio?", opciones: ["2,5","2.5","2 1/2","dos coma cinco"], correcta: 0, explicacion: "En Argentina la coma separa los decimales. Escribir 2.5 tienta porque se ve en muchas calculadoras, pero con esta configuración la planilla lo puede tomar como texto." },
    { q: "Tenés la fecha de entrada en A2 y la de salida en B2. ¿Cómo sabés cuántos días pasaron?", opciones: ["Contando en un almanaque","Con =A2+B2","No se puede con fechas","Con la fórmula =B2-A2"], correcta: 3, explicacion: "Por dentro, las fechas son números de días, así que se pueden restar. Sumarlas tienta por error de orden, pero sumar dos fechas no da nada útil." },
    { q: "Una celda muestra $ 6.621, pero en la barra de fórmulas dice 6621,2777. ¿Qué valor usa en una cuenta?", opciones: ["6.621","6621,2777","6621","Depende del día"], correcta: 1, explicacion: "El formato cambia cómo se ve, no lo que vale. Pensar que usa 6.621 tienta porque es lo que ves en la celda, pero la cuenta usa el valor completo." },
    { q: "Escribiste 27 y le pusiste formato de porcentaje, y se ve 2700%. ¿Qué pasó?", opciones: ["La planilla se rompió","Es un error de redondeo","El porcentaje multiplica por 100: había que escribir 27% o 0,27","Hay que escribir 2700"], correcta: 2, explicacion: "27% vale 0,27, así que 27 con formato de porcentaje es 2700%. Pensar que se rompió tienta porque el resultado es raro, pero hizo exactamente lo que se le pidió." },
    { q: "Una celda con un precio muestra ######. ¿Qué hacés?", opciones: ["Ensanchás la columna: el número no entra con su formato","Borrás la celda y la volvés a escribir","Cambiás de programa","Le ponés formato de texto"], correcta: 0, explicacion: "Los numerales aparecen cuando el número no entra en el ancho de la columna. Borrarla tienta porque parece rota, pero el valor está bien." },
    { q: "Un compañero anota \"Yerba x2 $9600\" en una sola celda. ¿Qué le sugerís?", opciones: ["Que lo escriba en mayúsculas","Que le ponga negrita","Que lo deje así, se entiende igual","Separar producto, cantidad y total en tres columnas"], correcta: 3, explicacion: "Un dato por celda permite sumar, filtrar y ordenar. Dejarlo así tienta porque una persona lo entiende, pero la planilla no puede sumar ese 9600." },
    { q: "Tu tabla de gastos tiene una fila vacía entre enero y febrero para que se vea más prolija. ¿Qué problema puede traer?", opciones: ["Ninguno","Que los filtros, el orden y las tablas dinámicas tomen solo una parte de los datos","Que gasta más memoria","Que se borra sola"], correcta: 1, explicacion: "Una fila vacía corta la tabla en dos para muchas herramientas. Que no trae ningún problema tienta porque se ve ordenado, pero al filtrar podés perder la mitad de los datos." },
    { q: "Querés poner un título grande arriba de tu tabla y pensás combinar celdas. ¿Qué conviene?", opciones: ["Combinar todas las celdas de la fila 1","Combinar celdas en cada fila","Evitar las celdas combinadas dentro de la tabla y dejar la fila 1 para los encabezados","Combinar la columna de totales"], correcta: 2, explicacion: "Las celdas combinadas complican ordenar, filtrar y copiar. Combinar la fila 1 tienta para que se vea lindo, pero esa fila tiene que tener un encabezado por columna." },
    { q: "Bajás hasta la fila 600 y ya no sabés qué es cada columna. ¿Qué hacés?", opciones: ["Inmovilizás la fila superior para que los títulos queden siempre visibles","Copiás los títulos cada 50 filas","Subís cada vez a mirar","Le cambiás el color a cada columna"], correcta: 0, explicacion: "Inmovilizar deja la fila 1 fija mientras bajás. Copiar los títulos tienta, pero esas filas extra se mezclan con los datos y rompen las sumas." },
    { q: "¿Cuál de estas es una regla de la tabla ordenada?", opciones: ["Una fila vacía cada 10 filas","Los totales en el medio de los datos","Varios datos por celda para ahorrar espacio","Una fila por caso y una sola fila de encabezados arriba"], correcta: 3, explicacion: "Cada caso en su fila y un encabezado por columna. Poner los totales en el medio tienta para verlos rápido, pero se suman dos veces cuando hacés un total general." },
    { q: "Si en tu planilla de gastos usás muchos colores distintos en cada fila, ¿qué pasa?", opciones: ["Las cuentas dan mejor","Se vuelve más difícil de leer: alcanza con resaltar los títulos","La planilla ocupa menos","Es obligatorio para que funcione"], correcta: 1, explicacion: "El formato es para ayudar a leer, y muchos colores distraen. Pensar que mejora las cuentas tienta, pero el color no cambia ningún valor." },
  ],
},
{
  id: "formulas",
  icono: "➗",
  titulo: "Fórmulas: que la planilla haga las cuentas",
  nivel: "Básico",
  objetivos: [
    "Escribir fórmulas con =, + - * / y paréntesis, y predecir su resultado",
    "Copiar una fórmula a toda una columna y explicar por qué cambian sus referencias",
    "Fijar una celda con $ (referencia absoluta) cuando todas las filas tienen que usar el mismo valor",
  ],
  lecciones: [
    { titulo: "El signo igual y las operaciones", html: `
      <p class="idea">Una <strong>fórmula</strong> es una cuenta que escribís en una celda, y siempre empieza con el signo =. En vez de poner el resultado, ponés la cuenta, y la planilla la calcula sola. Si cambia un dato, el resultado cambia también.</p>
      <table>
        <tr><th>Operación</th><th>Signo</th><th>Ejemplo</th><th>Resultado</th></tr>
        <tr><td>Sumar</td><td>+</td><td>=1700+900</td><td>2600</td></tr>
        <tr><td>Restar</td><td>-</td><td>=50000-48500</td><td>1500</td></tr>
        <tr><td>Multiplicar</td><td>*</td><td>=4*1700</td><td>6800</td></tr>
        <tr><td>Dividir</td><td>/</td><td>=6800/4</td><td>1700</td></tr>
        <tr><td>Potencia</td><td>^</td><td>=2^3</td><td>8</td></tr>
      </table>
      <p><strong>Lo importante: usar las celdas, no los números.</strong> En vez de escribir =4*1700, escribí =F2*G2, que quiere decir "lo que haya en F2 por lo que haya en G2". Así, si alguien corrige la cantidad, el total se actualiza solo.</p>
      <p>Por ejemplo, en el archivo de práctica, la fila 2 tiene cantidad 4 (F2) y precio 1700 (G2). En una celda vacía de esa fila, escribí:</p>
      <pre><code>=F2*G2    → 6800   (igual que el total de la columna H)</code></pre>
      <p>Para elegir una celda dentro de una fórmula no hace falta escribirla: después del =, hacé clic en la celda y aparece sola.</p>
      <p><strong>El orden de las operaciones.</strong> Como en la escuela: primero potencias, después multiplicaciones y divisiones, y al final sumas y restas. Los paréntesis cambian el orden.</p>
      <pre><code>=2+3*4     → 14   (primero 3*4)
=(2+3)*4   → 20   (primero lo del paréntesis)</code></pre>
      <p>Un caso real: tenés $50.000 y gastás $28.000 de alquiler y $14.000 de súper. ¿Cuánto te queda? =50000-(28000+14000) da 8.000. Sin paréntesis, =50000-28000+14000 da 36.000, porque suma los 14.000 en vez de restarlos.</p>` },
    { titulo: "Copiar fórmulas: las referencias se mueven", html: `
      <p class="idea">Escribís la fórmula una vez y la copiás a mil filas. Al copiarla, la planilla ajusta las celdas: la fórmula de la fila 3 usa los datos de la fila 3. Eso se llama <strong>referencia relativa</strong>.</p>
      <p>Para copiar una fórmula hacia abajo, seleccioná la celda y fijate el cuadradito en la esquina de abajo a la derecha (el <strong>controlador de relleno</strong>). Arrastralo hacia abajo, o hacé doble clic sobre él para que llegue solo hasta el final de los datos.</p>
      <pre><code>      F          G         K
1   cantidad   precio    control
2   4          1700      =F2*G2    → 6800
3   6          900       =F3*G3    → 5400
4   1          900       =F4*G4    → 900</code></pre>
      <p>Escribiste solo la de la fila 2. Al copiarla, en la fila 3 se transformó en =F3*G3 y en la 4, en =F4*G4. La planilla entiende la fórmula como "la cantidad de esta fila por el precio de esta fila".</p>
      <p>Lo mismo pasa hacia el costado: si copiás =F2*G2 una celda a la derecha, queda =G2*H2. Por eso, antes de copiar, pensá hacia dónde la copiás.</p>
      <p>Por ejemplo, para comprobar que los totales del archivo de práctica están bien, en K2 escribí =F2*G2-H2. Si da 0, el total de esa fila es correcto. Copiala hasta la fila 948: si toda la columna da 0, los 947 totales están bien.</p>
      <table>
        <tr><th>Si ves...</th><th>Quiere decir</th></tr>
        <tr><td>0 en toda la columna</td><td>Todos los totales coinciden con cantidad × precio</td></tr>
        <tr><td>Un número distinto de 0</td><td>Esa fila tiene el total mal: revisala</td></tr>
      </table>
      <p>Esta forma de controlar (hacer la cuenta de otra manera y restar) es muy útil en el trabajo: así te das cuenta de un error antes de mandarle la planilla a otra persona.</p>` },
    { titulo: "Referencias absolutas: fijar una celda con $", html: `
      <p class="idea">A veces todas las filas tienen que usar el mismo valor, como un porcentaje de aumento. Para que esa celda no se mueva al copiar, se le pone el signo $: eso es una <strong>referencia absoluta</strong>.</p>
      <p>Por ejemplo, La Esquina quiere ver cómo quedarían los precios con un aumento del 10%. Ponés el 10% en una sola celda, la M1, y en cada fila calculás el precio nuevo:</p>
      <pre><code>      G          ...   L                 M
1   precio            precio nuevo      10%
2   1700              =G2*(1+$M$1)  → 1870
3   900               =G3*(1+$M$1)  → 990</code></pre>
      <p>Si escribís =G2*(1+M1) sin los $, al copiar hacia abajo la fórmula de la fila 3 usaría M2, que está vacía, y te daría el mismo precio sin aumento. Con $M$1, todas las filas usan M1.</p>
      <table>
        <tr><th>Cómo se escribe</th><th>Qué pasa al copiar</th></tr>
        <tr><td>M1</td><td>Se mueve la columna y la fila</td></tr>
        <tr><td>$M$1</td><td>Queda fija siempre</td></tr>
        <tr><td>$M1</td><td>Queda fija la columna; la fila se mueve</td></tr>
        <tr><td>M$1</td><td>Queda fija la fila; la columna se mueve</td></tr>
      </table>
      <p><strong>El atajo:</strong> mientras escribís la fórmula, con el cursor sobre la referencia, apretá <strong>F4</strong> (en Windows; en algunas notebooks, Fn + F4). Cada vez que lo apretás, cambia entre M1, $M$1, M$1 y $M1.</p>
      <p><strong>La ventaja de tener el 10% en una celda:</strong> si mañana el aumento es del 15%, cambiás solo M1 y se recalculan los 947 precios. Si hubieras escrito =G2*1,1 en cada fila, tendrías que cambiar todas las fórmulas.</p>
      <p>Es la misma idea que en todo el curso: los números que pueden cambiar van en su celda, y las fórmulas los usan.</p>` },
  ],
  practica: [
    "En el archivo de práctica, escribí en K2 la fórmula =F2*G2-H2 y copiala hasta la fila 948 con doble clic en el controlador de relleno. Anotá si toda la columna da 0.",
    "Calculá =50000-(28000+14000) y =50000-28000+14000. Anotá los dos resultados y explicá en una frase por qué son distintos.",
    "Poné 10% en M1 y calculá el precio nuevo de las primeras 5 filas con =G2*(1+$M$1). Después cambiá M1 a 15% y anotá el precio nuevo del arroz de la fila 2.",
  ],
  recursos: [
    { t: "Microsoft: información general sobre fórmulas en Excel", url: "https://support.microsoft.com/es-es/excel/get-started/overview-of-formulas-in-excel" },
    { t: "Google: añadir fórmulas y funciones", url: "https://support.google.com/docs/answer/46977?hl=es" },
    { t: "Libro gratis: Excel inicial, capítulo Cálculo matemático (LibreTexts)", url: "https://espanol.libretexts.org/Bookshelves/Vocacional/Vocacional/Aplicaciones_informaticas_y_tecnologia_de_la_informacion/Aplicaciones_informaticas/Libro%3A_Excel_inicial_(Brown_et_al.)" },
  ],
  quiz: [
    { q: "Escribiste F2*G2 en una celda y aparece el texto \"F2*G2\" en vez del resultado. ¿Qué cambiás?", opciones: ["Los paréntesis","Apretar F4","El signo = al principio","Ponerlo en mayúsculas"], correcta: 2, explicacion: "Toda fórmula empieza con =. Pensar que faltan paréntesis tienta porque las cuentas largas los usan, pero sin el igual la planilla lo toma como texto." },
    { q: "Tenés la cantidad en F2 y el precio en G2. ¿Qué fórmula conviene para el total?", opciones: ["=F2*G2","=4*1700","=F2+G2","6800"], correcta: 0, explicacion: "Usar las celdas hace que el total se actualice si cambia un dato. =4*1700 tienta porque da lo mismo hoy, pero si corrigen la cantidad, el total queda mal." },
    { q: "¿Cuánto da =2+3*4?", opciones: ["20","9","24","14"], correcta: 3, explicacion: "Primero se multiplica (3*4 = 12) y después se suma 2. Contestar 20 tienta si hacés las cuentas de izquierda a derecha, pero eso sería =(2+3)*4." },
    { q: "Tenés $50.000 y querés restar el alquiler ($28.000) y el súper ($14.000) juntos. ¿Qué fórmula usás?", opciones: ["=50000-28000+14000","=50000-(28000+14000)","=(50000-28000)+14000","=50000+28000-14000"], correcta: 1, explicacion: "Con paréntesis, primero suma los gastos y después los resta: da 8.000. Sin paréntesis tienta porque parece lo mismo, pero da 36.000 porque suma el súper." },
    { q: "Si escribiste =F2*G2 en la fila 2 y la copiaste a la fila 3, ¿qué fórmula quedó en la fila 3?", opciones: ["=F2*G2","=F3*G2","=F3*G3","=G3*H3"], correcta: 2, explicacion: "Con referencias relativas, la fórmula se ajusta a su fila. Pensar que queda igual tienta, pero entonces todas las filas mostrarían el total de la fila 2." },
    { q: "Querés copiar una fórmula hasta la última fila de tus 947 ventas sin arrastrar tanto. ¿Qué hacés?", opciones: ["Doble clic en el controlador de relleno, el cuadradito de la esquina de la celda","La escribís 947 veces","Copiás y pegás de a 10 filas","No se puede, hay que arrastrar"], correcta: 0, explicacion: "El doble clic la copia sola hasta el final de los datos. Arrastrar tienta porque es lo que ves hacer, pero con cientos de filas es lento y te podés pasar." },
    { q: "Hiciste =F2*G2-H2 en toda una columna y una fila da 300. ¿Qué concluís?", opciones: ["Que la fórmula está mal escrita","Que es un redondeo sin importancia","Que esa fila es la más importante","Que el total de esa fila no coincide con cantidad por precio: hay que revisarla"], correcta: 3, explicacion: "Si el control da distinto de 0, el total de esa fila no cierra. Pensar que es redondeo tienta, pero con precios enteros la cuenta tiene que dar exacta." },
    { q: "Copiaste =G2*(1+M1) hacia abajo y desde la fila 3 los precios nuevos salen sin aumento. ¿Qué concluís?", opciones: ["El aumento es muy chico","M1 se movió a M2, M3...: había que fijarla con $M$1","La columna G está mal","Hay que copiarla hacia arriba"], correcta: 1, explicacion: "Sin $, la referencia se mueve al copiar y apunta a celdas vacías. Pensar que la columna G está mal tienta porque es la que ves, pero el problema es M1." },
    { q: "Mientras escribís una fórmula, ¿qué tecla cambia M1 por $M$1?", opciones: ["F2","Ctrl + Z","F4","Enter"], correcta: 2, explicacion: "F4 va cambiando entre M1, $M$1, M$1 y $M1. F2 tienta porque también se usa con fórmulas, pero sirve para editar la celda." },
    { q: "¿Qué significa $M$1 en una fórmula?", opciones: ["Que la celda M1 queda fija aunque copies la fórmula","Que M1 es un precio en pesos","Que M1 tiene formato de moneda","Que M1 vale el doble"], correcta: 0, explicacion: "El $ fija la columna y la fila. Que es un precio en pesos tienta por el símbolo, pero en una fórmula el $ no tiene nada que ver con la plata." },
    { q: "El aumento cambia todos los meses. ¿Cómo armás tu planilla de precios?", opciones: ["Con =G2*1,1 escrito en cada fila","Calculando cada precio a mano","Con un precio nuevo inventado","Con el porcentaje en una celda y las fórmulas apuntando a ella con $"], correcta: 3, explicacion: "Así, cambiás una sola celda y se recalcula todo. Escribir 1,1 en cada fila tienta porque funciona hoy, pero el mes que viene tenés que cambiar cientos de fórmulas." },
    { q: "Si copiás =F2*G2 una celda a la derecha, ¿qué fórmula queda?", opciones: ["=F2*G2","=G2*H2","=F3*G3","=F2*G3"], correcta: 1, explicacion: "Hacia el costado se mueven las columnas. Pensar que queda igual tienta, pero las referencias relativas siempre se mueven en la dirección en que copiás." },
  ],
},
{
  id: "funciones",
  icono: "🧮",
  titulo: "Funciones básicas: SUMA, PROMEDIO y compañía",
  nivel: "Básico",
  objetivos: [
    "Escribir una función con su nombre, paréntesis y argumentos separados por punto y coma",
    "Usar SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA y REDONDEAR sobre un rango",
    "Leer los errores más comunes (#¡DIV/0!, #¿NOMBRE?, #¡VALOR!, #¡REF!) y saber qué revisar en cada uno",
  ],
  lecciones: [
    { titulo: "Qué es una función: SUMA", html: `
      <p class="idea">Una <strong>función</strong> es una fórmula que ya viene hecha y tiene nombre. En vez de escribir =H2+H3+H4+... 947 veces, escribís =SUMA(H2:H948) y listo.</p>
      <p>Todas las funciones se escriben igual:</p>
      <pre><code>=NOMBRE(argumento1; argumento2; ...)

=SUMA(H2:H948)          → 6270350   (el total vendido de La Esquina)
=SUMA(F2:F948)          → 2408      (las unidades vendidas)</code></pre>
      <p>Lo que va entre paréntesis se llama <strong>argumentos</strong>: los datos con los que trabaja la función. Casi siempre es un rango.</p>
      <p><strong>Punto y coma o coma.</strong> En las planillas configuradas en castellano (Argentina y la mayoría de los países de habla hispana), los argumentos se separan con punto y coma (;), porque la coma ya se usa para los decimales. Si tu planilla está configurada en inglés, se separan con coma (,). Si una fórmula del curso te da error, probá cambiando el separador.</p>
      <p><strong>Los nombres cambian con el idioma.</strong> Si tu Excel o tu Google Sheets está en inglés, las funciones también:</p>
      <table>
        <tr><th>En castellano</th><th>En inglés</th></tr>
        <tr><td>SUMA</td><td>SUM</td></tr>
        <tr><td>PROMEDIO</td><td>AVERAGE</td></tr>
        <tr><td>CONTAR / CONTARA</td><td>COUNT / COUNTA</td></tr>
        <tr><td>SI</td><td>IF</td></tr>
        <tr><td>BUSCARV</td><td>VLOOKUP</td></tr>
      </table>
      <p><strong>Autosuma.</strong> Hay un botón que la escribe por vos: en Excel es el símbolo Σ (pestaña Inicio) y en Google Sheets está en el botón Σ de la barra de arriba. Te propone un rango; fijate que sea el correcto antes de apretar Enter.</p>
      <p>Por ejemplo, la primera comprobación de cualquier planilla de ventas es el total. Si =SUMA(H2:H948) no te da 6.270.350, revisá que el rango empiece en H2 y termine en H948.</p>` },
    { titulo: "PROMEDIO, MAX, MIN, CONTAR y REDONDEAR", html: `
      <p class="idea">Con cinco funciones más ya podés describir cualquier columna de números: cuánto se vende en promedio, la venta más grande, la más chica y cuántas hay.</p>
      <table>
        <tr><th>Función</th><th>Qué hace</th><th>En La Esquina (columna H)</th></tr>
        <tr><td>=PROMEDIO(H2:H948)</td><td>Suma y divide por la cantidad</td><td>6621,277...</td></tr>
        <tr><td>=MAX(H2:H948)</td><td>El valor más grande</td><td>58800</td></tr>
        <tr><td>=MIN(H2:H948)</td><td>El valor más chico</td><td>450</td></tr>
        <tr><td>=CONTAR(H2:H948)</td><td>Cuántas celdas tienen números</td><td>947</td></tr>
        <tr><td>=CONTARA(A2:A948)</td><td>Cuántas celdas no están vacías (números o textos)</td><td>947</td></tr>
      </table>
      <p><strong>CONTAR o CONTARA.</strong> CONTAR solo cuenta números; CONTARA cuenta cualquier cosa que no esté vacía. Por ejemplo, =CONTAR(C2:C948) sobre la columna de sucursales da 0, porque son textos. Para contar filas con textos, usá CONTARA.</p>
      <p><strong>REDONDEAR.</strong> El promedio da 6621,277... Para que valga 6621 de verdad (no solo que se vea así), usá:</p>
      <pre><code>=REDONDEAR(PROMEDIO(H2:H948); 0)    → 6621
=REDONDEAR(PROMEDIO(H2:H948); 2)    → 6621,28</code></pre>
      <p>El segundo argumento es la cantidad de decimales. Fijate que se puede poner una función adentro de otra: primero se calcula el PROMEDIO y después se redondea.</p>
      <p><strong>Ojo con el promedio.</strong> El promedio de La Esquina es $6.621, pero la venta más común es mucho más chica: unas pocas ventas grandes, como las de queso de $58.800, lo tiran para arriba. El promedio no es "la venta típica". Para saber más sobre esto, el curso Datos con IA tiene un módulo entero de estadística.</p>
      <p>Una buena costumbre: cuando abrís una planilla nueva, calculá estas seis cosas (total, promedio, máximo, mínimo, cantidad y cantidad no vacía). En un minuto sabés si los datos tienen sentido: por ejemplo, un máximo de 5.880.000 en un almacén te avisa que hay un error de carga.</p>` },
    { titulo: "Los errores y cómo leerlos", html: `
      <p class="idea">Cuando una fórmula no puede calcular, muestra un error que empieza con #. No hay que asustarse: cada error dice qué tipo de problema hay, y saber leerlo te ahorra mucho tiempo.</p>
      <table>
        <tr><th>Error en Excel</th><th>Qué quiere decir</th><th>Qué revisás</th></tr>
        <tr><td>#¡DIV/0!</td><td>Dividiste por cero o por una celda vacía</td><td>La celda del divisor</td></tr>
        <tr><td>#¿NOMBRE?</td><td>No reconoce el nombre de la función</td><td>Que esté bien escrito (SUMA, no SUMAR) y en el idioma de tu planilla</td></tr>
        <tr><td>#¡VALOR!</td><td>Hay un texto donde iba un número</td><td>Números guardados como texto (módulo 1)</td></tr>
        <tr><td>#¡REF!</td><td>La fórmula usaba una celda que borraste</td><td>Deshacé con Ctrl + Z o rehacé la fórmula</td></tr>
        <tr><td>#N/D</td><td>No encontró lo que buscaba</td><td>Lo vas a ver con BUSCARV, en el módulo 6</td></tr>
        <tr><td>#####</td><td>No es un error: la columna es angosta</td><td>Ensanchá la columna</td></tr>
      </table>
      <p>En Google Sheets los errores pueden aparecer con su nombre en inglés: #DIV/0!, #NAME?, #VALUE!, #REF! y #N/A. Si apoyás el mouse sobre la celda, aparece un cartel con la explicación.</p>
      <p>Por ejemplo, querés el precio promedio por unidad de una fila y escribís =H2/F2. Si en una fila la cantidad está vacía, esa fila muestra #¡DIV/0!. No es que la fórmula esté mal: falta un dato.</p>
      <pre><code>=SUMA(H2:H948)     → 6270350
=SUMAR(H2:H948)    → #¿NOMBRE?     (la función se llama SUMA)
=H2/F2             → 1700
=H2/Z2             → #¡DIV/0!      (Z2 está vacía)</code></pre>
      <p><strong>El error más peligroso es el que no se ve.</strong> Un error con # al menos te avisa. Un rango que termina en H900 en vez de H948 da un número que parece bien y está mal. Por eso conviene comprobar con un valor que sepas, como el total o la cantidad de filas.</p>` },
  ],
  practica: [
    "En el archivo de práctica, calculá en la hoja \"Resumen\" el total, el promedio redondeado a 0 decimales, el máximo, el mínimo y la cantidad de ventas. Compará con los valores de control: 6.270.350, 6.621, 58.800, 450 y 947.",
    "Calculá =CONTAR(C2:C948) y =CONTARA(C2:C948). Anotá los dos resultados y explicá en una frase por qué son distintos.",
    "Provocá a propósito tres errores: escribí =SUMAR(H2:H948), dividí por una celda vacía y borrá una columna que use una fórmula. Anotá qué error apareció en cada caso.",
  ],
  recursos: [
    { t: "Microsoft: funciones de Excel por categoría", url: "https://support.microsoft.com/es-es/office/funciones-de-excel-por-categoría-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb" },
    { t: "Google: lista de funciones de Hojas de cálculo de Google", url: "https://support.google.com/docs/table/25273?hl=es" },
    { t: "Libro gratis: Excel inicial, capítulo Fórmulas y funciones (LibreTexts)", url: "https://espanol.libretexts.org/Bookshelves/Vocacional/Vocacional/Aplicaciones_informaticas_y_tecnologia_de_la_informacion/Aplicaciones_informaticas/Libro%3A_Excel_inicial_(Brown_et_al.)" },
  ],
  quiz: [
    { q: "Tenés que sumar las 947 ventas de la columna H. ¿Qué escribís?", opciones: ["=H2+H948","=SUMA(H2;H948)","=SUMA(H2:H948)","=SUMA H2:H948"], correcta: 2, explicacion: "El rango va con dos puntos dentro de los paréntesis. =SUMA(H2;H948) tienta porque el punto y coma separa argumentos, pero así sumaría solo esas dos celdas." },
    { q: "Copiaste una fórmula del curso y te da error, y tu planilla está configurada en inglés. ¿Qué probás?", opciones: ["Cambiar el punto y coma por coma y usar el nombre en inglés, como SUM","Reiniciar la computadora","Escribir la fórmula en mayúsculas","Borrar los datos y cargarlos de nuevo"], correcta: 0, explicacion: "Con configuración en inglés cambian el separador y los nombres. Escribir en mayúsculas tienta, pero la planilla ya las pasa a mayúsculas sola: no es el problema." },
    { q: "=CONTAR(C2:C948) sobre la columna de sucursales da 0. ¿Qué pasó?", opciones: ["La columna está vacía","La fórmula está mal escrita","No hay ventas en las sucursales","CONTAR solo cuenta números, y las sucursales son textos: hay que usar CONTARA"], correcta: 3, explicacion: "CONTAR ignora los textos. Pensar que la columna está vacía tienta por el 0, pero la columna tiene 947 nombres de sucursal." },
    { q: "Querés que el promedio valga 6621 de verdad, no solo que se vea así. ¿Qué usás?", opciones: ["El botón de quitar decimales","=REDONDEAR(PROMEDIO(H2:H948); 0)","Escribir 6621 a mano","=PROMEDIO(H2:H948; 0)"], correcta: 1, explicacion: "REDONDEAR cambia el valor; el botón de decimales cambia solo cómo se ve. Escribirlo a mano tienta, pero si cambian los datos, ese número queda viejo." },
    { q: "En La Esquina el promedio de venta es $6.621. Tu compañero dice que \"la venta típica es de $6.621\". ¿Qué le respondés?", opciones: ["Que tiene razón, el promedio siempre es la venta típica","Que la venta típica es el máximo","Que no necesariamente: unas pocas ventas grandes suben el promedio","Que hay que sumar el mínimo y el máximo y dividir por 2"], correcta: 2, explicacion: "El promedio se mueve mucho con los valores extremos, como las ventas de queso de $58.800. Pensar que siempre es lo típico tienta por cómo se usa en la tele, pero no es así." },
    { q: "Abrís una planilla nueva de ventas de un almacén y =MAX da 5.880.000. ¿Qué concluís?", opciones: ["Que probablemente hay un error de carga y hay que revisar esa fila","Que fue un día muy bueno","Que la función MAX está fallando","Nada, el máximo no importa"], correcta: 0, explicacion: "Mirar el máximo y el mínimo es un control rápido de que los datos tienen sentido. Pensar que fue un día bueno tienta, pero en un almacén una venta así es casi seguro un error." },
    { q: "Escribiste =SUMAR(H2:H948) y aparece #¿NOMBRE?. ¿Qué revisás?", opciones: ["El rango","Que no haya ceros","La configuración de la impresora","El nombre de la función: es SUMA, no SUMAR"], correcta: 3, explicacion: "#¿NOMBRE? quiere decir que no reconoce la función. Revisar el rango tienta, pero un rango mal escrito daría otro error o un número equivocado." },
    { q: "Una celda con =H2/F2 muestra #¡DIV/0!. ¿Qué pasa?", opciones: ["H2 es muy grande","F2 está vacía o tiene un 0, y no se puede dividir por cero","La fórmula está escrita al revés","La planilla no sabe dividir"], correcta: 1, explicacion: "El divisor es la celda de abajo de la barra, F2. Pensar que está escrita al revés tienta, pero el problema es que falta el dato de la cantidad." },
    { q: "Borraste una columna y varias fórmulas muestran #¡REF!. ¿Qué hacés primero?", opciones: ["Borrás también las fórmulas","Cambiás el formato de las celdas","Ctrl + Z para deshacer el borrado","Apretás F4"], correcta: 2, explicacion: "#¡REF! aparece cuando la fórmula usaba una celda que ya no existe. Borrar las fórmulas tienta para que no se vea el error, pero perdés las cuentas." },
    { q: "Tu total da 5.950.000 y no aparece ningún error, pero sabés que el total real es 6.270.350. ¿Qué revisás?", opciones: ["Que el rango de la SUMA llegue hasta la última fila de datos","Nada: si no hay error, está bien","El formato de moneda","Que la columna sea más ancha"], correcta: 0, explicacion: "Un rango cortado no da error: da un número que parece bien. Confiar porque no hay # tienta, pero es el error más peligroso justamente porque no se ve." },
    { q: "Usás Google Sheets y ves #N/A en una celda. ¿Qué es?", opciones: ["Que la celda no es aplicable y hay que borrarla","Un número muy grande","Que falta internet","El mismo error que en Excel se llama #N/D: no encontró lo que buscaba"], correcta: 3, explicacion: "En Google Sheets los errores pueden aparecer con su nombre en inglés. Pensar que hay que borrar la celda tienta, pero el error te dice que algo no se encontró." },
    { q: "Querés saber en un minuto si una planilla nueva tiene sentido. ¿Qué calculás?", opciones: ["Solo el total","Total, promedio, máximo, mínimo y cantidad de filas","Nada: la mirás por arriba","El color de cada fila"], correcta: 1, explicacion: "Esos cinco números muestran rápido si hay algo raro. Mirarla por arriba tienta, pero con cientos de filas un error no se ve a simple vista." },
  ],
},
{
  id: "condiciones",
  icono: "🔀",
  titulo: "Decisiones: SI, CONTAR.SI y SUMAR.SI",
  nivel: "Intermedio",
  objetivos: [
    "Escribir un SI con una comparación y dos resultados posibles",
    "Contar y sumar solo las filas que cumplen una condición con CONTAR.SI y SUMAR.SI",
    "Combinar dos condiciones con CONTAR.SI.CONJUNTO y SUMAR.SI.CONJUNTO",
  ],
  lecciones: [
    { titulo: "SI: que la planilla decida", html: `
      <p class="idea">La función SI hace una pregunta y, según la respuesta, pone una cosa u otra. Es como decir: "si la venta es de $10.000 o más, escribí Grande; si no, Chica".</p>
      <pre><code>=SI(prueba; valor si es verdadero; valor si es falso)

=SI(H2>=10000; "Grande"; "Chica")</code></pre>
      <p>En la fila 2 del archivo de práctica, el total es 6800, así que da "Chica". En la fila 9 (la venta V0008, de queso), el total es 39200 y da "Grande".</p>
      <p>Para hacer la pregunta se usan <strong>comparaciones</strong>:</p>
      <table>
        <tr><th>Signo</th><th>Quiere decir</th><th>Ejemplo</th></tr>
        <tr><td>=</td><td>igual a</td><td>C2="Norte"</td></tr>
        <tr><td>&lt;&gt;</td><td>distinto de</td><td>C2&lt;&gt;"Norte"</td></tr>
        <tr><td>&gt;</td><td>mayor que</td><td>F2&gt;5</td></tr>
        <tr><td>&lt;</td><td>menor que</td><td>H2&lt;1000</td></tr>
        <tr><td>&gt;=</td><td>mayor o igual</td><td>H2&gt;=10000</td></tr>
        <tr><td>&lt;=</td><td>menor o igual</td><td>F2&lt;=2</td></tr>
      </table>
      <p><strong>Los textos van entre comillas.</strong> "Grande" y "Norte" llevan comillas; los números y las celdas, no. Si te olvidás las comillas en un texto, aparece #¿NOMBRE?.</p>
      <p>El resultado del SI puede ser un texto, un número o una cuenta. Por ejemplo, un descuento del 5% para las ventas grandes:</p>
      <pre><code>=SI(H2>=10000; H2*0,95; H2)</code></pre>
      <p>Por ejemplo, en una planilla de gastos personales, =SI(B10>A10; "Me pasé"; "Vengo bien") compara lo gastado (B10) con lo que tenías previsto (A10). Lo vas a usar en el proyecto final.</p>
      <p>Igual que cualquier fórmula, el SI se copia hacia abajo y cada fila decide con sus propios datos.</p>` },
    { titulo: "CONTAR.SI y SUMAR.SI", html: `
      <p class="idea">CONTAR.SI cuenta cuántas filas cumplen una condición. SUMAR.SI suma solo los valores de esas filas. Con estas dos ya podés responder la mayoría de las preguntas de una planilla de ventas.</p>
      <pre><code>=CONTAR.SI(rango donde mirar; condición)
=SUMAR.SI(rango donde mirar; condición; rango a sumar)</code></pre>
      <p>Con el archivo de práctica (C es sucursal, H es total, I es medio de pago):</p>
      <table>
        <tr><th>Pregunta</th><th>Fórmula</th><th>Resultado</th></tr>
        <tr><td>¿Cuántas ventas hizo Norte?</td><td>=CONTAR.SI(C2:C948; "Norte")</td><td>256</td></tr>
        <tr><td>¿Cuánto vendió Norte?</td><td>=SUMAR.SI(C2:C948; "Norte"; H2:H948)</td><td>1670050</td></tr>
        <tr><td>¿Cuántas ventas fueron de $10.000 o más?</td><td>=CONTAR.SI(H2:H948; "&gt;=10000")</td><td>156</td></tr>
        <tr><td>¿Cuánto se cobró con QR?</td><td>=SUMAR.SI(I2:I948; "QR"; H2:H948)</td><td>2004850</td></tr>
      </table>
      <p><strong>La condición va entre comillas</strong>, también cuando tiene un número con un signo: "&gt;=10000". Y no distingue mayúsculas: "norte" y "Norte" cuentan igual.</p>
      <p><strong>Usar una celda como condición.</strong> En vez de escribir "Norte" en la fórmula, podés escribir Norte en una celda (por ejemplo, L2) y usar =SUMAR.SI(C2:C948; L2; H2:H948). Después hacés una tablita con las tres sucursales y copiás la fórmula:</p>
      <pre><code>      L          M
1   Sucursal   Total
2   Centro     =SUMAR.SI($C$2:$C$948; L2; $H$2:$H$948)   → 2891950
3   Norte      ...                                       → 1670050
4   Sur        ...                                       → 1708350</code></pre>
      <p>Fijate los $ del módulo 2: los rangos quedan fijos y solo se mueve la celda de la sucursal. Por ejemplo, si sumás los tres resultados tiene que darte el total general, 6.270.350: es un control que nunca falla.</p>` },
    { titulo: "Dos condiciones a la vez", html: `
      <p class="idea">A veces la pregunta tiene dos condiciones: "¿cuánto vendió Centro en Frescos?". Para eso están CONTAR.SI.CONJUNTO y SUMAR.SI.CONJUNTO, que aceptan varias condiciones y cuentan o suman solo las filas que cumplen todas.</p>
      <pre><code>=SUMAR.SI.CONJUNTO(rango a sumar; rango1; condición1; rango2; condición2)

=SUMAR.SI.CONJUNTO(H2:H948; C2:C948; "Centro"; D2:D948; "Frescos")   → 1241500
=CONTAR.SI.CONJUNTO(C2:C948; "Norte"; H2:H948; "&gt;=10000")            → 47</code></pre>
      <p><strong>Ojo con el orden:</strong> en SUMAR.SI, el rango a sumar va al final; en SUMAR.SI.CONJUNTO, va al principio. Es el error más común con estas funciones.</p>
      <table>
        <tr><th>Función</th><th>Dónde va lo que se suma</th></tr>
        <tr><td>SUMAR.SI</td><td>Al final</td></tr>
        <tr><td>SUMAR.SI.CONJUNTO</td><td>Al principio</td></tr>
      </table>
      <p><strong>Y y O dentro de un SI.</strong> Para que un SI pregunte dos cosas, se usan las funciones Y (tienen que cumplirse las dos) y O (alcanza con una):</p>
      <pre><code>=SI(Y(C2="Centro"; H2>=10000); "Grande en Centro"; "")
=SI(O(I2="QR"; I2="Débito"); "Digital"; "Otro")</code></pre>
      <p>Las comillas vacías ("") dejan la celda en blanco cuando no se cumple.</p>
      <p>Por ejemplo, la dueña de La Esquina pregunta cuántas ventas grandes tuvo cada sucursal. Con CONTAR.SI.CONJUNTO y la tablita de sucursales de la lección anterior, la respuesta es: Centro 66, Norte 47 y Sur 43. Sumadas dan 156, las mismas que contaste con CONTAR.SI: otro control que cierra.</p>
      <p>Estas funciones existen con el mismo nombre en Google Sheets en castellano. En inglés se llaman COUNTIFS, SUMIFS, AND y OR.</p>` },
  ],
  practica: [
    "Agregá en el archivo de práctica una columna con =SI(H2>=10000; \"Grande\"; \"Chica\") y copiala hasta el final. Contá con CONTAR.SI cuántas dicen \"Grande\" y compará con el valor de control: 156.",
    "Armá la tablita de las tres sucursales con SUMAR.SI y $ en los rangos. Anotá el total de cada una y comprobá que las tres suman 6.270.350.",
    "Calculá con SUMAR.SI.CONJUNTO cuánto vendió Centro en Frescos y compará con el valor de control: 1.241.500. Después calculá cuánto vendió Sur en Bebidas y anotalo.",
  ],
  recursos: [
    { t: "Microsoft: función SI", url: "https://support.microsoft.com/es-es/excel/functions/if-function" },
    { t: "Microsoft: función CONTAR.SI", url: "https://support.microsoft.com/es-es/excel/get-started/use-the-countif-function-in-microsoft-excel" },
    { t: "Microsoft: función SUMAR.SI", url: "https://support.microsoft.com/es-es/excel/functions/sumif-function" },
    { t: "Google: CONTAR.SI y SUMAR.SI en Hojas de cálculo", url: "https://support.google.com/docs/answer/3093480?hl=es" },
  ],
  quiz: [
    { q: "Querés que una columna diga \"Grande\" si el total es de $10.000 o más, y \"Chica\" si no. ¿Qué escribís?", opciones: ["=SI(H2>10000; Grande; Chica)","=SI(\"Grande\"; H2>=10000; \"Chica\")","=SI(H2>=10000; \"Grande\"; \"Chica\")","=CONTAR.SI(H2; \"Grande\")"], correcta: 2, explicacion: "Primero va la prueba, después el valor si se cumple y al final el valor si no. Sin comillas tienta por ser más corto, pero los textos sin comillas dan #¿NOMBRE?." },
    { q: "Tu SI con la prueba H2>10000 dice \"Chica\" en una venta de exactamente $10.000. ¿Qué cambiás?", opciones: ["El signo: >= incluye el 10.000","Nada, está bien","Las comillas","El orden de los resultados"], correcta: 0, explicacion: "> es \"mayor que\" y deja afuera el 10.000; >= es \"mayor o igual\". Dejarlo así tienta porque funciona casi siempre, pero el caso justo del borde queda mal." },
    { q: "En tu planilla de gastos querés que diga \"Me pasé\" si lo gastado (B10) es mayor que lo previsto (A10). ¿Qué fórmula usás?", opciones: ["=SI(A10>B10; \"Me pasé\"; \"Vengo bien\")","=B10-A10","=SI(B10; A10; \"Me pasé\")","=SI(B10>A10; \"Me pasé\"; \"Vengo bien\")"], correcta: 3, explicacion: "La prueba tiene que preguntar si lo gastado supera lo previsto. Invertir las celdas tienta porque se ve parecido, pero diría \"Me pasé\" justo cuando gastaste menos." },
    { q: "Tenés que saber cuántas ventas hizo la sucursal Norte. ¿Qué usás?", opciones: ["=SUMAR.SI(C2:C948; \"Norte\"; H2:H948)","=CONTAR.SI(C2:C948; \"Norte\")","=CONTAR(C2:C948)","=SI(C2=\"Norte\"; 1; 0)"], correcta: 1, explicacion: "CONTAR.SI cuenta las filas que cumplen la condición: da 256. SUMAR.SI tienta porque se parece, pero suma la plata vendida, no la cantidad de ventas." },
    { q: "Querés el total vendido por Norte. ¿Qué fórmula da 1.670.050?", opciones: ["=SUMAR.SI(H2:H948; \"Norte\"; C2:C948)","=CONTAR.SI(C2:C948; \"Norte\")","=SUMAR.SI(C2:C948; \"Norte\"; H2:H948)","=SUMA(C2:C948)"], correcta: 2, explicacion: "Primero el rango donde se busca la condición, después la condición y al final lo que se suma. Invertir los rangos tienta, pero buscaría \"Norte\" entre los números del total." },
    { q: "Escribiste =CONTAR.SI(H2:H948; >=10000) sin comillas y da error. ¿Qué falta?", opciones: ["Las comillas en la condición: \">=10000\"","Un signo =","Paréntesis extra","Cambiar a SUMAR.SI"], correcta: 0, explicacion: "En CONTAR.SI y SUMAR.SI la condición va entre comillas, aunque sea un número con signo. Agregar paréntesis tienta, pero no arregla la condición." },
    { q: "Hiciste una tablita con las tres sucursales y SUMAR.SI. ¿Cómo comprobás que está bien?", opciones: ["Mirás que los números sean grandes","Le cambiás el formato","No hace falta comprobar","Sumás los tres resultados y tiene que dar el total general, 6.270.350"], correcta: 3, explicacion: "Las partes tienen que sumar el todo: es un control que nunca falla. No comprobar tienta porque la fórmula parece bien, pero un rango mal fijado da números creíbles y equivocados." },
    { q: "Copiaste =SUMAR.SI(C2:C948; L2; H2:H948) hacia abajo y los resultados de Norte y Sur dan menos de lo esperado. ¿Qué pasó?", opciones: ["Norte y Sur vendieron menos ese día","Los rangos se movieron al copiar: había que fijarlos con $","La condición tiene que ir entre comillas","SUMAR.SI solo funciona en una fila"], correcta: 1, explicacion: "Sin $, los rangos bajan una fila cada vez y dejan afuera datos. Que vendieron menos tienta como explicación, pero el problema es la fórmula." },
    { q: "Tenés que saber cuánto vendió Centro solo en la categoría Frescos. ¿Qué usás?", opciones: ["=SUMAR.SI(C2:C948; \"Centro\"; H2:H948)","=SUMAR.SI.CONJUNTO(C2:C948; \"Centro\"; D2:D948; \"Frescos\"; H2:H948)","=SUMAR.SI.CONJUNTO(H2:H948; C2:C948; \"Centro\"; D2:D948; \"Frescos\")","=CONTAR.SI.CONJUNTO(C2:C948; \"Centro\"; D2:D948; \"Frescos\")"], correcta: 2, explicacion: "Con dos condiciones va SUMAR.SI.CONJUNTO, y lo que se suma va primero. Ponerlo al final tienta porque así es en SUMAR.SI, pero en esta función el orden cambia." },
    { q: "Querés que un SI diga \"Digital\" si el pago fue con QR o con débito. ¿Qué función usás adentro?", opciones: ["O, porque alcanza con que se cumpla una de las dos","Y, porque son dos condiciones","CONTAR.SI","SUMA"], correcta: 0, explicacion: "O se cumple si alguna condición es verdadera; Y exige las dos. Y tienta porque hay dos condiciones, pero un pago no puede ser QR y débito a la vez: nunca se cumpliría." },
    { q: "Si querés que una celda quede en blanco cuando no se cumple la condición, ¿qué ponés como valor si es falso?", opciones: ["0","La palabra \"vacío\"","Nada, y cerrás el paréntesis antes","Comillas vacías: \"\""], correcta: 3, explicacion: "Las comillas vacías dejan la celda en blanco. Poner 0 tienta, pero llena la columna de ceros que después se suman y se cuentan." },
    { q: "Contaste las ventas grandes por sucursal: Centro 66, Norte 47 y Sur 43. ¿Con qué las comparás para controlar?", opciones: ["Con el total vendido en pesos","Con el total de ventas grandes de CONTAR.SI: tienen que sumar 156","Con la cantidad de sucursales","No hace falta comparar"], correcta: 1, explicacion: "Las partes tienen que sumar el total que ya calculaste de otra forma. Comparar con el total en pesos tienta, pero estás contando ventas, no sumando plata." },
  ],
},
{
  id: "ordenar",
  icono: "🔽",
  titulo: "Ordenar, filtrar y resaltar",
  nivel: "Intermedio",
  objetivos: [
    "Ordenar una tabla por una o dos columnas sin desarmar las filas",
    "Filtrar una tabla para ver solo las filas que te interesan y volver a ver todas",
    "Resaltar automáticamente los valores importantes con formato condicional",
  ],
  lecciones: [
    { titulo: "Ordenar sin desarmar la tabla", html: `
      <p class="idea">Ordenar es poner las filas de menor a mayor (o al revés) según una columna. La regla de oro: se ordena la tabla entera, nunca una sola columna. Si no, cada dato queda en la fila de otra venta.</p>
      <p><strong>Cómo ordenar la tabla entera:</strong></p>
      <table>
        <tr><th>En Excel</th><th>En Google Sheets</th></tr>
        <tr><td>Hacé clic en una celda de la columna. Pestaña Datos → Ordenar de mayor a menor (o de menor a mayor). Excel toma sola toda la tabla.</td><td>Seleccioná toda la tabla. Datos → Ordenar intervalo → marcá "Los datos tienen una fila de encabezado" y elegí la columna.</td></tr>
      </table>
      <p><strong>El desastre de ordenar una sola columna.</strong> Si seleccionás solo la columna H y la ordenás, los totales cambian de lugar pero el resto de la fila no. La venta de arroz queda con el total de una venta de queso. Excel te avisa con un cartel ("¿Desea ampliar la selección?"): elegí siempre ampliarla. Si ya pasó, Ctrl + Z inmediatamente.</p>
      <pre><code>Antes:   V0001   Arroz 1 kg   6800
Mal:     V0001   Arroz 1 kg   58800   ← ¡el total es de otra venta!
Bien:    V0085   Queso cremoso kg   58800</code></pre>
      <p>Por ejemplo, si ordenás La Esquina por total de mayor a menor, arriba quedan 8 ventas de $58.800: todas de 6 kilos de queso cremoso. Esa sola mirada ya te dice algo del negocio: las ventas más grandes son de queso.</p>
      <p><strong>Ordenar por dos columnas.</strong> Por ejemplo, primero por sucursal y, dentro de cada sucursal, por total. En Excel: Datos → Ordenar (el botón grande) → agregar nivel. En Google Sheets: Ordenar intervalo → "Añadir otra columna de ordenación".</p>
      <p><strong>Un truco para volver al orden original:</strong> como cada venta tiene su número (V0001, V0002...), siempre podés volver a ordenar por la columna A. Si tus datos no tienen una columna así, conviene agregar una con números del 1 en adelante antes de ordenar.</p>` },
    { titulo: "Filtros: ver solo lo que te interesa", html: `
      <p class="idea">Un <strong>filtro</strong> esconde las filas que no te interesan, sin borrarlas. Por ejemplo, ver solo las ventas de Norte, o solo las pagadas con QR. Cuando sacás el filtro, vuelven todas.</p>
      <table>
        <tr><th>En Excel</th><th>En Google Sheets</th></tr>
        <tr><td>Clic en la tabla → Datos → Filtro</td><td>Clic en la tabla → Datos → Crear un filtro</td></tr>
      </table>
      <p>Aparece una flechita en cada encabezado. Al tocarla, elegís qué valores mostrar. Por ejemplo, en "sucursal" destildás todo menos Norte: quedan visibles 256 ventas. Los números de fila se ven salteados (2, 5, 14...) y de otro color: eso te avisa que hay filas escondidas.</p>
      <p>Con la flechita de una columna de números podés filtrar por condición: "Filtros de número → Mayor o igual que" en Excel, o "Filtrar por condición" en Google Sheets. Por ejemplo, total mayor o igual que 10.000.</p>
      <p><strong>Varios filtros a la vez.</strong> Si filtrás sucursal = Norte y medio de pago = QR, ves solo las filas que cumplen las dos cosas. Es como un CONTAR.SI.CONJUNTO, pero mirando las filas.</p>
      <p><strong>Cuidado con las sumas y los filtros.</strong> En Excel, si seleccionás los totales visibles, la barra de abajo de la pantalla te muestra la suma solo de lo que se ve. Pero una fórmula =SUMA(H2:H948) suma todo, se vea o no. Para no confundirte, confirmá con SUMAR.SI: el total de Norte tiene que dar 1.670.050.</p>
      <ul>
        <li><strong>Sacar un filtro de una columna:</strong> flechita → "Borrar filtro" o tildá todo de nuevo.</li>
        <li><strong>Sacar todos los filtros:</strong> volvé a apretar Datos → Filtro (en Google Sheets, Datos → Quitar filtro).</li>
      </ul>
      <p>Por ejemplo, antes de mandarle una planilla a otra persona, fijate que no haya quedado un filtro puesto: si no, puede pensar que faltan datos.</p>` },
    { titulo: "Formato condicional: que se resalte solo", html: `
      <p class="idea">El <strong>formato condicional</strong> le cambia el color a una celda según su valor. Por ejemplo, que todas las ventas de $10.000 o más se pinten de verde. Si el valor cambia, el color cambia solo.</p>
      <table>
        <tr><th>En Excel</th><th>En Google Sheets</th></tr>
        <tr><td>Seleccioná la columna → Inicio → Formato condicional → Resaltar reglas de celdas → Mayor que (o "Es mayor o igual que", según la versión)</td><td>Seleccioná la columna → Formato → Formato condicional → "Dar formato a celdas si..." → "Mayor o igual que"</td></tr>
      </table>
      <p>Por ejemplo, con la regla "mayor o igual que 10000" sobre los totales, se pintan 156 celdas: las mismas ventas grandes que contaste con CONTAR.SI en el módulo 4.</p>
      <p><strong>Otras reglas útiles:</strong></p>
      <ul>
        <li><strong>Escalas de color:</strong> los valores bajos de un color y los altos de otro, con tonos intermedios. Sirve para ver de un vistazo los meses buenos y malos.</li>
        <li><strong>Barras de datos</strong> (en Excel): una barrita adentro de cada celda, más larga cuanto más grande es el número.</li>
        <li><strong>Texto que contiene:</strong> por ejemplo, pintar todas las celdas que dicen "Nuevo".</li>
        <li><strong>Duplicados</strong> (en Excel): resaltar valores repetidos, muy útil para encontrar filas cargadas dos veces.</li>
      </ul>
      <pre><code>Gastos del mes      Previsto   Gastado
Alquiler            28000      28000
Súper               14000      16500   ← en rojo: me pasé
Transporte           6000       5200</code></pre>
      <p>En una planilla de gastos, una regla que pinte de rojo lo gastado cuando supera lo previsto te avisa sin tener que mirar número por número. La vas a armar en el proyecto final.</p>
      <p><strong>Con moderación:</strong> si todo está pintado, nada se destaca. Usá una o dos reglas por planilla, para lo que de verdad importa.</p>` },
  ],
  practica: [
    "Ordená la tabla de práctica por total de mayor a menor (la tabla entera). Anotá cuántas ventas de $58.800 quedan arriba y de qué producto son. Después volvé al orden original ordenando por la columna A.",
    "Poné un filtro y dejá visible solo la sucursal Norte. Anotá cuántas filas quedan visibles y compará con el valor de control: 256. Sacá el filtro al terminar.",
    "Aplicá formato condicional a los totales para resaltar los de 10.000 o más. Con CONTAR.SI comprobá cuántas celdas deberían estar pintadas (156) y anotá si coincide con lo que ves al filtrar por color.",
  ],
  recursos: [
    { t: "Google: ordenar y filtrar tus datos", url: "https://support.google.com/docs/answer/3540681?hl=es" },
    { t: "Google: reglas de formato condicional en Hojas de cálculo", url: "https://support.google.com/docs/answer/78413?hl=es" },
    { t: "Microsoft: ayuda y formación de Excel (ordenar, filtrar y formato condicional)", url: "https://support.microsoft.com/es-es/excel" },
  ],
  quiz: [
    { q: "Seleccionaste solo la columna de totales, la ordenaste y ahora el arroz tiene un total de $58.800. ¿Qué hacés?", opciones: ["Nada, el orden está bien","Corregís el total del arroz a mano","Ctrl + Z enseguida: ordenaste una sola columna y se mezclaron las filas","Ordenás otra columna para compensar"], correcta: 2, explicacion: "Ordenar una sola columna desarma las filas. Corregir a mano tienta, pero no es solo una fila: todos los totales quedaron en la fila equivocada." },
    { q: "Excel te pregunta \"¿Desea ampliar la selección?\" al ordenar. ¿Qué elegís?", opciones: ["Ampliar la selección, para que se ordene la tabla entera","Continuar con la selección actual","Cancelar siempre","Da igual"], correcta: 0, explicacion: "Ampliar ordena las filas completas. Continuar con la selección tienta porque es lo que elegiste, pero es justo lo que desarma la tabla." },
    { q: "Ordenaste La Esquina por total de mayor a menor. ¿Qué ves arriba?", opciones: ["Las ventas de enero","Las ventas de la sucursal Centro solamente","Las ventas más chicas","8 ventas de $58.800, todas de queso cremoso"], correcta: 3, explicacion: "De mayor a menor deja arriba las ventas más grandes. Las de enero tientan porque es el orden en que estaban, pero al ordenar por total, la fecha ya no manda." },
    { q: "Tus datos no tienen un número de fila propio y vas a ordenarlos de varias formas. ¿Qué conviene hacer antes?", opciones: ["Nada, siempre se puede volver","Agregar una columna con números del 1 en adelante para poder volver al orden original","Hacer una captura de pantalla","Ordenar de a una columna"], correcta: 1, explicacion: "Con un número por fila, siempre podés reordenar como estaba. Confiar en volver tienta, pero después de varios cambios Ctrl + Z ya no alcanza." },
    { q: "Querés ver solo las ventas pagadas con QR sin borrar las demás. ¿Qué usás?", opciones: ["Borrás las otras filas","Ordenás por medio de pago y escondés a mano","Un filtro en la columna de medio de pago","Copiás las de QR a otro archivo"], correcta: 2, explicacion: "El filtro esconde sin borrar, y se saca cuando querés. Copiarlas a otro archivo tienta, pero después tenés dos versiones que no se actualizan juntas." },
    { q: "Ves que los números de fila saltan (2, 5, 14...) y están de otro color. ¿Qué concluís?", opciones: ["Que hay un filtro puesto y hay filas escondidas","Que se borraron filas","Que el archivo está dañado","Que hay celdas combinadas"], correcta: 0, explicacion: "Los números salteados avisan que hay filas ocultas por un filtro. Pensar que se borraron tienta, pero siguen ahí: se ven al sacar el filtro." },
    { q: "Filtraste solo Norte y la fórmula =SUMA(H2:H948) sigue dando 6.270.350. ¿Por qué?", opciones: ["Porque el filtro no funcionó","Porque Norte vendió todo","Porque hay que apretar F4","Porque SUMA suma todo el rango, se vea o no"], correcta: 3, explicacion: "Las fórmulas comunes no hacen caso a los filtros. Pensar que el filtro falló tienta, pero está bien: para el total de Norte usá SUMAR.SI." },
    { q: "Vas a mandar una planilla y te olvidaste un filtro puesto. ¿Qué puede pasar?", opciones: ["Nada","Que la otra persona piense que faltan datos","Que se borren las filas escondidas","Que el archivo no abra"], correcta: 1, explicacion: "Las filas escondidas pueden pasar desapercibidas. Que no pasa nada tienta porque los datos siguen ahí, pero quien la abre puede sacar conclusiones con la mitad." },
    { q: "Querés que se pinten de verde todos los totales de $10.000 o más, y que se actualice solo. ¿Qué usás?", opciones: ["Pintar a mano cada celda","Un filtro","Formato condicional con la regla \"mayor o igual que 10000\"","Ordenar de mayor a menor"], correcta: 2, explicacion: "El formato condicional pinta según el valor y se actualiza solo. Pintar a mano tienta para pocas celdas, pero si cambia un número, el color queda mal." },
    { q: "Aplicaste formato condicional a los totales de $10.000 o más. ¿Cuántas celdas deberían quedar pintadas?", opciones: ["156, las mismas que cuenta CONTAR.SI con esa condición","947","256","Depende del color elegido"], correcta: 0, explicacion: "La regla y el CONTAR.SI usan la misma condición, así que tienen que coincidir. 256 tienta porque es un número que ya viste, pero esas son las ventas de Norte." },
    { q: "En tu planilla de gastos querés que te avise cuando gastaste más de lo previsto. ¿Qué regla armás?", opciones: ["Pintar todo de rojo","Un filtro por gastos grandes","Ordenar por gasto","Formato condicional que pinte de rojo lo gastado cuando supera lo previsto"], correcta: 3, explicacion: "Una regla que compara las dos columnas te avisa sola. Pintar todo de rojo tienta para \"estar atento\", pero si todo está pintado, nada se destaca." },
    { q: "Tu compañero puso 8 reglas de colores distintas en su planilla. ¿Qué le aconsejás?", opciones: ["Agregar más reglas","Usar una o dos reglas para lo que de verdad importa","Que está perfecto","Que use solo negrita"], correcta: 1, explicacion: "Con demasiados colores, nada se destaca. Más reglas tienta para marcar todo, pero el formato condicional sirve justamente para que algo se vea distinto." },
  ],
},
{
  id: "buscar",
  icono: "🔎",
  titulo: "Buscar datos: BUSCARV, BUSCARX y funciones de texto",
  nivel: "Intermedio",
  objetivos: [
    "Traer un dato de otra tabla con BUSCARV y coincidencia exacta",
    "Usar BUSCARX en Excel (XLOOKUP en Google Sheets) y elegir entre las dos",
    "Resolver #N/D, espacios de más y textos partidos con SI.ERROR, ESPACIOS e IZQUIERDA",
  ],
  lecciones: [
    { titulo: "BUSCARV: traer un dato de otra tabla", html: `
      <p class="idea">BUSCARV busca un valor en la primera columna de una tabla y te trae lo que hay en otra columna de esa misma fila. Es como buscar un nombre en la guía y leer el teléfono que está al lado.</p>
      <pre><code>=BUSCARV(qué busco; dónde busco; número de columna a traer; FALSO)</code></pre>
      <p>Por ejemplo, querés saber el total de la venta V0085 sin recorrer 947 filas:</p>
      <pre><code>=BUSCARV("V0085"; A2:J948; 8; FALSO)    → 58800</code></pre>
      <p>Busca "V0085" en la primera columna del rango (la A), y de esa fila trae la columna número 8 contando desde la A: A es 1, B es 2... H es 8, el total.</p>
      <table>
        <tr><th>Argumento</th><th>En el ejemplo</th><th>Qué es</th></tr>
        <tr><td>Qué busco</td><td>"V0085"</td><td>Un valor o una celda que lo tenga</td></tr>
        <tr><td>Dónde busco</td><td>A2:J948</td><td>La tabla; lo buscado tiene que estar en su primera columna</td></tr>
        <tr><td>Columna</td><td>8</td><td>Qué columna de la tabla traer, contando desde 1</td></tr>
        <tr><td>Tipo de búsqueda</td><td>FALSO</td><td>Coincidencia exacta</td></tr>
      </table>
      <p><strong>Poné siempre FALSO al final.</strong> Si lo omitís, BUSCARV hace una búsqueda aproximada que, con datos desordenados, te puede traer un valor de otra fila sin avisar.</p>
      <p><strong>El uso más común: una tabla de precios.</strong> Armá en otra hoja una tablita de productos y precios, y en tu planilla de ventas traé el precio de cada producto:</p>
      <pre><code>Hoja "Precios"          Hoja de ventas
    A          B         E (producto)       G (precio)
1   Producto   Precio
2   Yerba 1 kg 4800      Yerba 1 kg         =BUSCARV(E2; Precios!$A$2:$B$16; 2; FALSO)
3   Arroz 1 kg 1700                          → 4800</code></pre>
      <p>Precios!A2:B16 quiere decir "el rango A2:B16 de la hoja Precios". Y van los $ del módulo 2 para que la tabla no se mueva al copiar.</p>
      <p>Así, si sube la yerba, cambiás un solo precio en la tabla y se actualizan todas las ventas que lo usan. En algunas versiones de Excel, la página de ayuda de Microsoft aparece con el nombre "CONSULTAV", pero la función se sigue escribiendo BUSCARV.</p>` },
    { titulo: "BUSCARX (XLOOKUP): la versión nueva", html: `
      <p class="idea">BUSCARX es la versión nueva de BUSCARV: le decís en qué columna buscar y de qué columna traer, sin contar columnas. En Google Sheets se llama XLOOKUP.</p>
      <pre><code>Excel:          =BUSCARX("V0085"; A2:A948; H2:H948)    → 58800
Google Sheets:  =XLOOKUP("V0085"; A2:A948; H2:H948)    → 58800</code></pre>
      <p>Los tres argumentos son: qué busco, la columna donde lo busco y la columna de donde traigo el resultado.</p>
      <table>
        <tr><th></th><th>BUSCARV</th><th>BUSCARX / XLOOKUP</th></tr>
        <tr><td>Hay que contar columnas</td><td>Sí</td><td>No</td></tr>
        <tr><td>Puede traer algo de una columna a la izquierda</td><td>No</td><td>Sí</td></tr>
        <tr><td>Si agregás una columna en el medio</td><td>El número de columna queda mal</td><td>Sigue funcionando</td></tr>
        <tr><td>Busca exacto sin aclarar nada</td><td>No (hay que poner FALSO)</td><td>Sí</td></tr>
        <tr><td>Dónde funciona</td><td>En todas las versiones</td><td>Excel 2021 o más nuevo, Microsoft 365, Excel para la web y Google Sheets</td></tr>
      </table>
      <p><strong>¿Cuál usar?</strong> Si tu Excel la tiene, BUSCARX es más simple y más difícil de romper. Pero aprendé las dos: en muchos trabajos hay planillas viejas llenas de BUSCARV, y en las entrevistas suelen preguntarla.</p>
      <p><strong>Traer algo de la izquierda.</strong> Por ejemplo, querés saber qué número de venta tuvo un total de 450. El total está en H y el número en A, a la izquierda. BUSCARV no puede, BUSCARX sí:</p>
      <pre><code>=BUSCARX(450; H2:H948; A2:A948)    → V0013   (la primera venta de $450)</code></pre>
      <p>Fijate que trae la <strong>primera</strong> que encuentra. Si hay varias filas con el mismo valor, las dos funciones traen solo la primera. Para contarlas todas, usá CONTAR.SI.</p>` },
    { titulo: "#N/D, espacios de más y funciones de texto", html: `
      <p class="idea">Si BUSCARV o BUSCARX no encuentran lo que buscan, muestran #N/D (en Google Sheets, #N/A). Muchas veces el dato está, pero escrito un poquito distinto: con un espacio de más o con otra forma.</p>
      <p><strong>Las causas más comunes de #N/D:</strong></p>
      <ul>
        <li><strong>Un espacio de más</strong>: "Yerba 1 kg " (con un espacio al final) no es igual a "Yerba 1 kg".</li>
        <li><strong>Escrito distinto</strong>: "Yerba 1kg" sin espacio, o "Yerba 1 Kg".</li>
        <li><strong>Número guardado como texto</strong> en una de las dos tablas (módulo 1).</li>
        <li><strong>De verdad no está</strong>: el producto no figura en la tabla de precios.</li>
      </ul>
      <p><strong>ESPACIOS</strong> saca los espacios del principio y del final, y deja uno solo entre palabras:</p>
      <pre><code>=ESPACIOS("  Yerba   1 kg ")    → "Yerba 1 kg"</code></pre>
      <p><strong>SI.ERROR</strong> muestra otra cosa en lugar del error. Sirve para que la planilla quede prolija, pero usalo con cuidado:</p>
      <pre><code>=SI.ERROR(BUSCARV(E2; Precios!$A$2:$B$16; 2; FALSO); "No está en la lista")</code></pre>
      <p>Es mejor mostrar "No está en la lista" que un 0: un 0 se suma como si fuera un precio y nadie se da cuenta del problema.</p>
      <p><strong>IZQUIERDA</strong> toma los primeros caracteres de un texto. Por ejemplo, en el archivo de práctica la fecha está como texto ("2025-06-13"). Para tener el mes, tomás los primeros 7 caracteres:</p>
      <pre><code>=IZQUIERDA(B2; 7)    → "2025-01"</code></pre>
      <table>
        <tr><th>Función</th><th>Qué hace</th><th>Ejemplo</th></tr>
        <tr><td>IZQUIERDA</td><td>Los primeros caracteres</td><td>=IZQUIERDA("2025-06-13"; 7) → 2025-06</td></tr>
        <tr><td>DERECHA</td><td>Los últimos caracteres</td><td>=DERECHA("V0085"; 4) → 0085</td></tr>
        <tr><td>ESPACIOS</td><td>Saca espacios de más</td><td>"  Pan " → "Pan"</td></tr>
        <tr><td>MAYUSC</td><td>Pasa todo a mayúsculas</td><td>"norte" → "NORTE"</td></tr>
      </table>
      <p>Por ejemplo, con la columna "mes" que armás con IZQUIERDA vas a poder resumir las ventas por mes en el próximo módulo.</p>` },
  ],
  practica: [
    "Con BUSCARV, buscá el total de la venta V0085 en el archivo de práctica. Compará con el valor de control: 58.800. Después buscá el producto de la venta V0500 (columna 5) y anotalo.",
    "Armá una hoja \"Precios\" con 5 productos y sus precios, y traé el precio con BUSCARV en otra hoja. Escribí a propósito un producto con un espacio al final y anotá qué error aparece y cómo lo arreglaste.",
    "Agregá una columna \"mes\" con =IZQUIERDA(B2; 7) y copiala hasta el final. Contá con CONTAR.SI cuántas ventas hubo en \"2025-06\" y anotalo.",
  ],
  recursos: [
    { t: "Microsoft: función BUSCARV", url: "https://support.microsoft.com/es-es/excel/functions/vlookup-function" },
    { t: "Microsoft: función BUSCARX", url: "https://support.microsoft.com/es-es/office/función-buscarx-b7fd680e-6d10-43e6-84f9-88eae8bf5929" },
    { t: "Google: BUSCARV en Hojas de cálculo", url: "https://support.google.com/docs/answer/3093318?hl=es" },
    { t: "Google: función XLOOKUP", url: "https://support.google.com/docs/answer/12405947?hl=es" },
  ],
  quiz: [
    { q: "Querés el total de la venta V0085 y el total está en la columna H, la octava de la tabla A:J. ¿Qué escribís?", opciones: ["=BUSCARV(\"V0085\"; A2:J948; H; FALSO)","=BUSCARV(A2:J948; \"V0085\"; 8)","=BUSCARV(\"V0085\"; A2:J948; 8; FALSO)","=BUSCARV(\"V0085\"; H2:H948; 8; FALSO)"], correcta: 2, explicacion: "Se busca en la primera columna de la tabla y se indica el número de columna a traer. Poner la letra H tienta, pero BUSCARV pide un número contando desde la primera columna del rango." },
    { q: "Te olvidaste el FALSO al final de un BUSCARV y trae un precio de otro producto. ¿Qué pasó?", opciones: ["Sin FALSO hace una búsqueda aproximada, que con datos desordenados trae cualquier fila","La tabla de precios está mal","BUSCARV no sirve para precios","Hay que poner VERDADERO"], correcta: 0, explicacion: "FALSO pide coincidencia exacta. VERDADERO tienta porque suena a \"que esté bien\", pero es la búsqueda aproximada, la que causó el problema." },
    { q: "Tenés los precios en una hoja aparte llamada Precios, en A2:B16. ¿Cómo la nombrás dentro de una fórmula en otra hoja?", opciones: ["Precios:A2:B16","$Precios$A2:B16","A2:B16 de Precios","Precios!$A$2:$B$16"], correcta: 3, explicacion: "El nombre de la hoja va seguido de un signo de exclamación. Los $ fijan el rango para copiar. Usar dos puntos tienta porque se usa en rangos, pero ahí separa celdas, no la hoja." },
    { q: "Subió el precio de la yerba y tu planilla de ventas trae los precios con BUSCARV desde una tabla. ¿Qué cambiás?", opciones: ["El precio en cada venta de yerba","Solo el precio de la yerba en la tabla de precios","Todas las fórmulas BUSCARV","Nada, se actualiza solo desde internet"], correcta: 1, explicacion: "BUSCARV lee la tabla, así que cambiás un solo dato y se actualiza todo. Cambiar cada venta tienta, pero es justo el trabajo que la tabla de precios te ahorra." },
    { q: "Usás Google Sheets y querés la función nueva que no obliga a contar columnas. ¿Cómo se llama?", opciones: ["BUSCARX","BUSCARV2","XLOOKUP","BUSCARH"], correcta: 2, explicacion: "En Excel en castellano es BUSCARX y en Google Sheets es XLOOKUP. BUSCARX tienta porque es el nombre que aprendiste para Excel, pero en Sheets se escribe XLOOKUP." },
    { q: "Agregaste una columna en el medio de tu tabla y un BUSCARV empezó a traer otro dato. ¿Por qué?", opciones: ["Porque el número de columna quedó corrido; con BUSCARX no pasa","Porque BUSCARV se desactiva","Porque falta el FALSO","Porque la columna nueva está vacía"], correcta: 0, explicacion: "BUSCARV usa un número fijo de columna, que no se ajusta. Pensar que falta el FALSO tienta, pero ese argumento no tiene nada que ver con columnas agregadas." },
    { q: "Querés saber qué número de venta (columna A) tuvo un total de 450 (columna H). ¿Qué función podés usar?", opciones: ["BUSCARV, con el número de columna -7","SUMAR.SI","No se puede","BUSCARX, porque puede traer un dato de una columna a la izquierda"], correcta: 3, explicacion: "BUSCARV solo trae columnas a la derecha de la que busca. Un número negativo tienta como truco, pero BUSCARV no lo acepta." },
    { q: "Hay 8 ventas con total de 58.800 y hacés un BUSCARX por ese total. ¿Qué te trae?", opciones: ["Las 8","Solo la primera que encuentra","Un error porque hay varias","La última"], correcta: 1, explicacion: "BUSCARV y BUSCARX traen la primera coincidencia. Esperar las 8 tienta, pero para saber cuántas hay se usa CONTAR.SI." },
    { q: "Tu BUSCARV muestra #N/D para \"Yerba 1 kg\", que está en la tabla de precios. ¿Qué revisás primero?", opciones: ["Que la planilla esté en inglés","El formato de moneda","Que no haya un espacio de más o una forma distinta de escribirlo","Que la yerba siga existiendo"], correcta: 2, explicacion: "#N/D quiere decir que no encontró una coincidencia exacta, y un espacio invisible alcanza. El formato tienta, pero no cambia si el texto coincide o no." },
    { q: "Querés que, en vez de #N/D, la celda diga \"No está en la lista\". ¿Qué usás?", opciones: ["=SI.ERROR(BUSCARV(...); \"No está en la lista\")","=SI.ERROR(BUSCARV(...); 0)","Borrás el error a mano","Formato condicional en blanco"], correcta: 0, explicacion: "SI.ERROR reemplaza el error por lo que elijas. Poner 0 tienta porque queda limpio, pero ese 0 se suma como un precio y esconde el problema." },
    { q: "La fecha está como texto \"2025-06-13\" y querés solo el mes \"2025-06\". ¿Qué fórmula usás?", opciones: ["=DERECHA(B2; 7)","=IZQUIERDA(B2; 2)","=MES(B2)","=IZQUIERDA(B2; 7)"], correcta: 3, explicacion: "IZQUIERDA toma los primeros 7 caracteres: año, guion y mes. DERECHA tienta por parecida, pero tomaría el final: \"-06-13\" y un carácter más." },
    { q: "Los nombres de productos de una planilla copiada de un mail tienen espacios de más al principio y al final. ¿Qué usás para limpiarlos?", opciones: ["MAYUSC","ESPACIOS","IZQUIERDA","SI.ERROR"], correcta: 1, explicacion: "ESPACIOS saca los espacios sobrantes. SI.ERROR tienta porque esconde el #N/D que causan, pero no arregla el dato." },
  ],
},
{
  id: "resumir",
  icono: "📊",
  titulo: "Resumir y mostrar: tablas dinámicas y gráficos",
  nivel: "Intermedio",
  objetivos: [
    "Armar una tabla dinámica que resuma las ventas por sucursal, por mes o por categoría",
    "Cruzar dos variables en una tabla dinámica (por ejemplo, mes y sucursal) y leerla",
    "Elegir el gráfico adecuado y ponerle un título que diga la conclusión",
  ],
  lecciones: [
    { titulo: "Tu primera tabla dinámica", html: `
      <p class="idea">Una <strong>tabla dinámica</strong> resume miles de filas en una tabla chica, sin escribir ninguna fórmula. Elegís qué agrupar (por ejemplo, la sucursal) y qué calcular (por ejemplo, la suma del total), y la arma sola.</p>
      <table>
        <tr><th>En Excel</th><th>En Google Sheets</th></tr>
        <tr><td>Clic en la tabla → Insertar → Tabla dinámica → Nueva hoja de cálculo → Aceptar</td><td>Clic en la tabla → Insertar → Tabla dinámica → Hoja nueva → Crear</td></tr>
      </table>
      <p>Aparece un panel con los nombres de tus columnas. Las zonas importantes son:</p>
      <ul>
        <li><strong>Filas:</strong> lo que querés agrupar. Por ejemplo, sucursal.</li>
        <li><strong>Valores:</strong> lo que querés calcular. Por ejemplo, total (como suma).</li>
        <li><strong>Columnas:</strong> una segunda forma de agrupar, de costado (la próxima lección).</li>
        <li><strong>Filtros:</strong> para quedarte con una parte de los datos.</li>
      </ul>
      <p>Por ejemplo, con sucursal en Filas y total en Valores, queda:</p>
      <pre><code>Sucursal       Suma de total
Centro         2891950
Norte          1670050
Sur            1708350
Total general  6270350</code></pre>
      <p>Son los mismos números que sacaste con SUMAR.SI en el módulo 4, pero en un clic. Y el total general tiene que dar 6.270.350, como siempre.</p>
      <p><strong>Cambiar el cálculo.</strong> En Valores, podés cambiar "Suma" por "Recuento" (cuántas ventas), "Promedio", "Máx." o "Mín.". Por ejemplo, con Recuento, Centro tiene 436 ventas.</p>
      <p><strong>Se actualiza, pero no sola del todo.</strong> Si cambiás los datos originales, en Excel tenés que apretar "Actualizar" (pestaña de Tabla dinámica o clic derecho → Actualizar). En Google Sheets se actualiza sola. Y nunca escribas a mano adentro de una tabla dinámica: se borra cuando se actualiza.</p>` },
    { titulo: "Cruzar dos cosas: mes y sucursal", html: `
      <p class="idea">El poder de una tabla dinámica aparece cuando cruzás dos cosas: los meses en las filas y las sucursales en las columnas. De un vistazo ves cómo le fue a cada sucursal cada mes.</p>
      <p>Para eso necesitás la columna "mes" que armaste con IZQUIERDA en el módulo 6. Si la agregaste después de crear la tabla dinámica, en Excel actualizala y, si no aparece, cambiá el origen de datos para que incluya la columna nueva.</p>
      <p>Poné mes en Filas, sucursal en Columnas y total en Valores:</p>
      <pre><code>Mes       Centro    Norte     Sur       Total
2025-01   456000    142300    333950    932250
2025-02   354600    182300    244700    781600
2025-03   625150    258950    265450    1149550
2025-04   454000    259850    225250    939100
2025-05   549100    306150    319700    1174950
2025-06   453100    520500    319300    1292900
Total     2891950   1670050   1708350   6270350</code></pre>
      <p><strong>Cómo leerla.</strong> Recorré una columna de arriba abajo para ver cómo evoluciona una sucursal, y una fila de izquierda a derecha para comparar las sucursales en un mes.</p>
      <table>
        <tr><th>Lo que se ve</th><th>Qué podría significar</th></tr>
        <tr><td>Norte pasó de 142.300 en enero a 520.500 en junio</td><td>Norte crece mes a mes</td></tr>
        <tr><td>En junio, Norte (520.500) superó a Centro (453.100)</td><td>Por primera vez Centro no es la que más vende</td></tr>
        <tr><td>Centro tuvo su pico en marzo</td><td>Algo pasó en marzo: ¿una promoción?</td></tr>
      </table>
      <p>Por ejemplo, con esta sola tabla ya tenés una pregunta para la dueña: ¿qué cambió en Norte? Una tabla dinámica no te dice por qué pasan las cosas; te muestra dónde mirar.</p>
      <p><strong>Otros cruces útiles:</strong> categoría y medio de pago, producto y sucursal, tipo de cliente y mes. Probá arrastrando campos: no se rompe nada, porque la tabla dinámica no toca los datos originales.</p>` },
    { titulo: "Gráficos que se entienden", html: `
      <p class="idea">Un gráfico sirve para que alguien entienda una idea en segundos. Para eso hay que elegir el tipo correcto y ponerle un título que diga la conclusión, no solo el tema.</p>
      <table>
        <tr><th>Querés mostrar</th><th>Gráfico</th><th>Ejemplo</th></tr>
        <tr><td>Comparar categorías</td><td>Columnas o barras</td><td>Ventas por sucursal</td></tr>
        <tr><td>Cómo cambia en el tiempo</td><td>Líneas</td><td>Ventas por mes</td></tr>
        <tr><td>Partes de un total (pocas partes)</td><td>Torta, con cuidado</td><td>Medios de pago, si son 3 o 4</td></tr>
      </table>
      <p><strong>Cómo se hace.</strong> Seleccioná la tabla chica que querés graficar (por ejemplo, la tabla dinámica de sucursales, sin la fila del total) → Insertar → Gráfico. En Google Sheets aparece un editor a la derecha donde elegís el tipo. En Excel, elegís el tipo en la pestaña Insertar.</p>
      <p><strong>No incluyas la fila del total.</strong> Si la seleccionás, aparece una barra gigante que aplasta a las demás y no se puede comparar nada.</p>
      <p><strong>El título dice la conclusión:</strong></p>
      <pre><code>Título que solo dice el tema:   Ventas por mes y sucursal
Título con la conclusión:       Norte creció todos los meses y en junio superó a Centro</code></pre>
      <p>Por ejemplo, con un gráfico de líneas de los 6 meses y las 3 sucursales, la línea de Norte sube y en junio cruza a la de Centro. Con el título de la conclusión, nadie tiene que adivinar qué mirar.</p>
      <p><strong>Tres reglas para que no engañe:</strong></p>
      <ol>
        <li>En columnas y barras, el eje vertical empieza en 0. Si empieza en otro número, una diferencia chica parece enorme.</li>
        <li>Pocos colores: uno por serie, y resaltá solo lo importante.</li>
        <li>Nombres claros en los ejes, con la unidad: "Pesos", "Cantidad de ventas".</li>
      </ol>
      <p>Si querés profundizar en gráficos y en cómo contar una conclusión con datos, el curso Datos con IA de este sitio tiene un módulo entero sobre eso.</p>` },
  ],
  practica: [
    "Armá una tabla dinámica con sucursal en Filas y la suma del total en Valores. Compará con los valores de control: Centro 2.891.950, Norte 1.670.050, Sur 1.708.350 y total 6.270.350.",
    "Armá la tabla dinámica de mes por sucursal usando la columna \"mes\". Anotá cuánto vendió Norte en junio (control: 520.500) y en qué mes vendió más Centro.",
    "Hacé un gráfico de líneas con las ventas por mes de cada sucursal y ponele un título con una conclusión. Mostráselo a alguien y anotá si entendió la conclusión sin que se la expliques.",
    "Cambiá en la tabla dinámica la suma por el recuento y anotá cuántas ventas tuvo cada sucursal. Comprobá que suman 947.",
  ],
  recursos: [
    { t: "Microsoft: crear una tabla dinámica para analizar datos", url: "https://support.microsoft.com/es-es/office/crear-una-tabla-dinámica-para-analizar-datos-de-una-hoja-de-cálculo-a9a84538-bfe9-40a9-a8e9-f99134456576" },
    { t: "Google: crear y usar tablas dinámicas", url: "https://support.google.com/docs/answer/1272900?hl=es" },
    { t: "Microsoft: crear un gráfico de principio a fin", url: "https://support.microsoft.com/es-es/excel/get-started/create-a-chart-from-start-to-finish" },
    { t: "Google: añadir y editar un gráfico", url: "https://support.google.com/docs/answer/63824?hl=es" },
  ],
  quiz: [
    { q: "Tenés que saber cuánto vendió cada sucursal y no querés escribir fórmulas. ¿Qué usás?", opciones: ["Un filtro por sucursal","Un gráfico de torta directo sobre las 947 filas","Una tabla dinámica con sucursal en Filas y total en Valores","Ordenar por sucursal y sumar a mano"], correcta: 2, explicacion: "La tabla dinámica agrupa y suma sola. El filtro tienta porque separa por sucursal, pero tendrías que filtrar y sumar tres veces." },
    { q: "En una tabla dinámica, ¿dónde ponés lo que querés calcular, como la suma del total?", opciones: ["En Valores","En Filas","En Filtros","En Columnas"], correcta: 0, explicacion: "Valores es lo que se calcula; Filas y Columnas son cómo se agrupa. Filas tienta porque es la primera zona, pero ahí van las categorías, no los números." },
    { q: "Tu tabla dinámica de sucursales da un total general de 6.100.000, pero el total real es 6.270.350. ¿Qué revisás?", opciones: ["El color de la tabla","Que la suma esté en Filas","Nada, es un redondeo","Que el rango de origen incluya todas las filas de datos"], correcta: 3, explicacion: "Si el origen deja afuera filas, el total no cierra. Pensar que es un redondeo tienta, pero con números enteros no hay redondeo que explique esa diferencia." },
    { q: "Querés saber cuántas ventas hizo cada sucursal, no cuánta plata. ¿Qué cambiás en la tabla dinámica?", opciones: ["Sacás el total de Valores","En Valores, cambiás Suma por Recuento","Ponés la sucursal en Valores","Agregás un filtro"], correcta: 1, explicacion: "Recuento cuenta filas: Centro tiene 436. Poner la sucursal en Valores tienta, pero según la planilla puede contar o dar resultados raros; lo claro es cambiar el cálculo." },
    { q: "Cambiaste un dato en la tabla original y la tabla dinámica de Excel no se modificó. ¿Qué hacés?", opciones: ["La borrás y la armás de nuevo","Corregís el número a mano adentro de la tabla dinámica","Apretás Actualizar en la tabla dinámica","Nada, Excel no puede"], correcta: 2, explicacion: "En Excel hay que actualizarla; Google Sheets lo hace solo. Corregir a mano tienta, pero se pierde en la próxima actualización." },
    { q: "Querés ver cómo le fue a cada sucursal en cada mes. ¿Cómo armás la tabla dinámica?", opciones: ["Mes en Filas, sucursal en Columnas y total en Valores","Mes y sucursal los dos en Valores","Todo en Filtros","Solo el total en Filas"], correcta: 0, explicacion: "Filas y Columnas cruzan las dos variables; Valores tiene la cuenta. Poner todo en Valores tienta, pero ahí solo van números a calcular." },
    { q: "En la tabla de mes por sucursal, Norte pasó de 142.300 en enero a 520.500 en junio. ¿Qué concluís?", opciones: ["Que Norte tiene los mejores empleados","Que en julio va a vender 600.000 seguro","Que los datos están mal","Que Norte creció y conviene averiguar qué cambió"], correcta: 3, explicacion: "La tabla muestra dónde mirar, no el porqué. Que en julio va a vender más tienta porque sube todos los meses, pero 6 meses no alcanzan para asegurarlo." },
    { q: "Querés mostrar cómo cambiaron las ventas mes a mes. ¿Qué gráfico usás?", opciones: ["Torta","Líneas","Columnas apiladas de un solo color","Una tabla de 947 filas"], correcta: 1, explicacion: "Las líneas muestran la evolución en el tiempo. La torta tienta porque es conocida, pero sirve para partes de un total, no para cambios en el tiempo." },
    { q: "Hiciste un gráfico de columnas por sucursal y hay una columna gigante que aplasta a las otras. ¿Qué pasó?", opciones: ["Centro vende mucho más","Elegiste mal los colores","Seleccionaste también la fila del total general","El eje empieza en 0"], correcta: 2, explicacion: "El total general es mucho más grande que cada sucursal y aplasta todo. Que Centro vende mucho más tienta, pero ninguna sucursal vende 6.270.350 sola." },
    { q: "¿Cuál de estos títulos es mejor para un gráfico de ventas por mes?", opciones: ["\"Norte creció todos los meses y en junio superó a Centro\"","\"Ventas por mes\"","\"Gráfico 1\"","\"Datos de La Esquina\""], correcta: 0, explicacion: "Un título con la conclusión dice qué mirar. \"Ventas por mes\" tienta porque describe el gráfico, pero obliga a cada persona a buscar sola la idea." },
    { q: "Tu gráfico de columnas tiene el eje vertical empezando en 400.000 y una diferencia chica parece enorme. ¿Qué hacés?", opciones: ["Lo dejás así, se ve más interesante","Cambiás a torta","Le sacás los números al eje","Hacés que el eje empiece en 0"], correcta: 3, explicacion: "En columnas y barras, el eje en 0 evita exagerar diferencias. Dejarlo así tienta porque se ve más dramático, pero engaña a quien lo lee." },
    { q: "Escribiste a mano un número adentro de una tabla dinámica y desapareció. ¿Por qué?", opciones: ["Porque la planilla tiene un virus","Porque la tabla dinámica se recalcula desde los datos originales y borra lo que escribas","Porque falta guardar","Porque el número era muy grande"], correcta: 1, explicacion: "La tabla dinámica se arma sola con los datos de origen. Pensar que faltó guardar tienta, pero cada actualización la vuelve a armar desde cero." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Proyecto final: tu presupuesto y un informe con datos",
  nivel: "Avanzado",
  objetivos: [
    "Armar una planilla de presupuesto mensual con fórmulas, SI y formato condicional",
    "Entregar un informe de La Esquina que pase todos los valores de control",
    "Evaluar tu trabajo con la rúbrica y presentarlo en un CV o una entrevista",
  ],
  lecciones: [
    { titulo: "Proyecto A: tu presupuesto mensual", html: `
      <p class="idea">El primer proyecto es una planilla que vas a usar de verdad: tu presupuesto del mes. Junta casi todo el curso: tabla ordenada, fórmulas, SUMA, SI, $ y formato condicional.</p>
      <p>No hace falta tener un sueldo. Podés usar lo que entra en tu casa, una beca, changas o, si preferís no usar tus números, un ejemplo inventado. Lo que importa es que funcione.</p>
      <p><strong>La estructura:</strong></p>
      <pre><code>      A                B           C          D             E
1   Categoría        Previsto    Gastado    Diferencia    Estado
2   Alquiler         28000       28000      =B2-C2        =SI(C2>B2; "Me pasé"; "Bien")
3   Súper            14000       16500      =B3-C3        ...
4   Transporte       6000        5200       ...
5   Servicios        9000        8700
6   Otros            5000        3100
7   Total            =SUMA(B2:B6) =SUMA(C2:C6) =B7-C7

9   Ingresos del mes   65000
10  Me queda           =B9-C7
11  % gastado          =C7/B9        (con formato de porcentaje)</code></pre>
      <p><strong>Lo que tiene que tener para estar completo:</strong></p>
      <ol>
        <li>Al menos 5 categorías de gasto, en una tabla ordenada.</li>
        <li>Totales con SUMA, no escritos a mano.</li>
        <li>Una columna Estado con SI.</li>
        <li>Formato condicional que pinte de rojo lo gastado cuando supera lo previsto.</li>
        <li>El ingreso en una sola celda, y las cuentas que lo usan apuntando a esa celda.</li>
        <li>Una fila de control: la suma de las diferencias tiene que dar igual que el total previsto menos el total gastado.</li>
      </ol>
      <p>Por ejemplo, con los números del dibujo: previsto 62.000, gastado 61.500, te quedan 3.500 de los 65.000, y gastaste el 95% (61.500 / 65.000 = 0,946...). El súper pasa a rojo porque gastaste 16.500 de 14.000 previstos.</p>
      <p><strong>Para seguir usándola:</strong> duplicá la hoja cada mes (clic derecho en la pestaña → Duplicar) y cambiale el nombre al mes. Así podés comparar meses.</p>` },
    { titulo: "Proyecto B: el informe de La Esquina", html: `
      <p class="idea">El segundo proyecto es un trabajo como los que piden en una oficina: la dueña de La Esquina quiere un informe de las ventas de enero a junio. Lo armás con el archivo de práctica y lo controlás con números que ya conocés.</p>
      <p><strong>Lo que tiene que tener:</strong></p>
      <ol>
        <li>Una hoja "Resumen" con total, cantidad de ventas, promedio redondeado, máximo y mínimo (módulo 3).</li>
        <li>Una tabla por sucursal con SUMAR.SI y CONTAR.SI, con $ en los rangos (módulos 2 y 4).</li>
        <li>Una columna "mes" con IZQUIERDA y una tabla dinámica de mes por sucursal (módulos 6 y 7).</li>
        <li>Un gráfico de líneas con un título que diga la conclusión (módulo 7).</li>
        <li>Tres frases para la dueña: qué pasó, qué recomendás y qué no sabés.</li>
      </ol>
      <p><strong>Los valores de control.</strong> Tu informe tiene que dar exactamente estos números. Si alguno no coincide, hay un error en un rango o en una fórmula:</p>
      <table>
        <tr><th>Qué</th><th>Valor de control</th></tr>
        <tr><td>Cantidad de ventas</td><td>947</td></tr>
        <tr><td>Total vendido</td><td>6.270.350</td></tr>
        <tr><td>Promedio por venta (redondeado)</td><td>6.621</td></tr>
        <tr><td>Total de Norte / ventas de Norte</td><td>1.670.050 / 256</td></tr>
        <tr><td>Ventas de $10.000 o más</td><td>156</td></tr>
        <tr><td>Norte en junio</td><td>520.500</td></tr>
        <tr><td>Centro en Frescos</td><td>1.241.500</td></tr>
      </table>
      <p>Por ejemplo, las tres frases podrían ser: "Centro es la sucursal que más vendió en el semestre, pero Norte creció todos los meses y en junio la superó. Recomiendo averiguar qué cambió en Norte y si se puede repetir en Sur. Con 6 meses de datos no sabemos si el crecimiento va a seguir."</p>
      <p>Fijate que la última frase dice lo que no sabés. Eso no es una debilidad del informe: es lo que hace que la dueña pueda confiar en el resto.</p>` },
    { titulo: "La rúbrica y cómo mostrarlo", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje. Sirve para que vos (o quien te evalúe) sepa si el trabajo está listo, sin depender de "me parece que está bien".</p>
      <p>Puntuá cada proyecto de 0 a 2 en cada criterio:</p>
      <table>
        <tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Datos ordenados</td><td>Celdas combinadas o filas vacías en el medio</td><td>Algún detalle</td><td>Tabla ordenada completa</td></tr>
        <tr><td>Fórmulas</td><td>Números escritos a mano</td><td>Algunas cuentas a mano</td><td>Todo con fórmulas y $ donde hace falta</td></tr>
        <tr><td>Valores de control</td><td>Fallan dos o más</td><td>Falla uno</td><td>Coinciden todos</td></tr>
        <tr><td>Lectura</td><td>Cuesta entender qué es cada cosa</td><td>Faltan títulos o formatos</td><td>Títulos claros, formatos correctos, una o dos reglas de color</td></tr>
        <tr><td>Conclusión</td><td>No hay</td><td>Hay, pero el gráfico no tiene título con conclusión</td><td>Tres frases y un gráfico con título que la dice</td></tr>
      </table>
      <p>El máximo es 10. El proyecto está listo con <strong>8 o más</strong> y sin ningún 0. Si no llega, mejorá el criterio más bajo y volvé a puntuar.</p>
      <p><strong>Pedí una segunda opinión.</strong> Mostrale el informe a alguien y pedile que lo puntúe con la rúbrica. Si su puntaje es muy distinto del tuyo, charlen en qué criterio no coinciden.</p>
      <p><strong>Para buscar trabajo.</strong> "Manejo de Excel" no dice mucho en un CV. Escribí lo que sabés hacer:</p>
      <pre><code>Excel y Google Sheets: fórmulas, SI, SUMAR.SI, BUSCARV y BUSCARX,
tablas dinámicas y gráficos. Proyecto: informe de ventas de 947 registros
con tabla dinámica por mes y sucursal y valores de control verificados.</code></pre>
      <p>Por ejemplo, en una entrevista te pueden pedir que hagas algo en una planilla en el momento. Practicá el proyecto B de nuevo, desde cero, tomando el tiempo: si lo podés hacer en menos de una hora, llegás preparado.</p>
      <p><strong>Para seguir aprendiendo:</strong> el libro gratis <em>Excel inicial</em> de LibreTexts, la ayuda oficial de Microsoft y de Google, y el curso de Macquarie en Coursera (en inglés). El curso Datos con IA de este sitio sigue donde termina este: analizar datos con ayuda de la IA.</p>` },
  ],
  practica: [
    "Armá tu planilla de presupuesto con las 6 partes de la lista. Anotá cuánto te queda y qué porcentaje de los ingresos gastaste.",
    "Armá el informe de La Esquina y anotá en una tabla cada valor de control con tu resultado al lado. Anotá cuántos coincidieron a la primera.",
    "Puntuá los dos proyectos con la rúbrica. Si alguno tiene menos de 8 o un 0, mejoralo y anotá el puntaje nuevo.",
    "Hacé de nuevo el proyecto B desde cero en otra hoja y tomá el tiempo. Anotá cuánto tardaste.",
  ],
  recursos: [
    { t: "Libro gratis: Excel inicial, en LibreTexts (en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Vocacional/Vocacional/Aplicaciones_informaticas_y_tecnologia_de_la_informacion/Aplicaciones_informaticas/Libro%3A_Excel_inicial_(Brown_et_al.)" },
    { t: "Microsoft: ayuda y formación de Excel", url: "https://support.microsoft.com/es-es/excel" },
    { t: "Curso Excel Skills for Business: Essentials, de Macquarie University (Coursera, en inglés)", url: "https://www.coursera.org/learn/excel-essentials" },
  ],
  quiz: [
    { q: "No tenés un sueldo fijo y querés hacer el proyecto del presupuesto. ¿Qué hacés?", opciones: ["No podés hacer el proyecto","Esperás a tener trabajo","Usás lo que entra en tu casa, una beca, changas o un ejemplo inventado","Lo hacés sin números"], correcta: 2, explicacion: "Lo que importa es que la planilla funcione. Esperar a tener trabajo tienta, pero el presupuesto sirve igual con cualquier ingreso, y saber hacerlo te ayuda a conseguirlo." },
    { q: "En tu presupuesto escribiste el total gastado a mano: 61500. ¿Qué criterio de la rúbrica pierde puntos?", opciones: ["Fórmulas: los totales tienen que salir de una SUMA","Datos ordenados","Lectura","Ninguno, el número está bien"], correcta: 0, explicacion: "Un total escrito a mano no se actualiza. Que el número está bien tienta porque hoy coincide, pero si cambiás un gasto, el total queda viejo." },
    { q: "Tu presupuesto tiene el ingreso escrito dentro de tres fórmulas distintas. ¿Qué mejorás?", opciones: ["Nada, funciona igual","Escribirlo en más fórmulas","Borrarlo","Poner el ingreso en una sola celda y que las fórmulas apunten a ella"], correcta: 3, explicacion: "Con el ingreso en una celda, si cambia, cambiás un solo lugar. Dejarlo así tienta porque funciona, pero el mes que viene te vas a olvidar de cambiar alguna." },
    { q: "Gastaste 61.500 y tus ingresos son 65.000. ¿Qué fórmula da el porcentaje gastado?", opciones: ["=B9/C7","=C7/B9, con formato de porcentaje","=C7-B9","=C7*B9/100"], correcta: 1, explicacion: "Gastado dividido ingresos: 61.500 / 65.000 = 95%. Invertir la división tienta por error de orden, pero da 106%, que no tiene sentido como porcentaje gastado." },
    { q: "En el informe de La Esquina, tu total da 6.270.350, pero Norte te da 1.600.000. ¿Qué concluís?", opciones: ["Que el control está mal","Que Norte vendió menos este año","Que hay un error en la fórmula de Norte, porque el control es 1.670.050","Que la diferencia es chica y no importa"], correcta: 2, explicacion: "Los valores de control son la referencia: si no coincide, el error es tuyo. Pensar que es chica tienta, pero 70.000 pesos de diferencia en un informe es mucho." },
    { q: "¿Para qué sirve la tercera frase del informe, \"con 6 meses de datos no sabemos si el crecimiento va a seguir\"?", opciones: ["Para decir lo que no sabés, así la dueña puede confiar en el resto","Para que el informe sea más largo","Para echarle la culpa a los datos","No sirve, hay que sacarla"], correcta: 0, explicacion: "Decir los límites hace creíble al informe. Sacarla tienta para que suene más seguro, pero si la recomendación falla, la dueña se va a sentir engañada." },
    { q: "Tu informe tiene un gráfico titulado \"Ventas por mes\". ¿Qué criterio de la rúbrica no llega a 2?", opciones: ["Fórmulas","Datos ordenados","Valores de control","Conclusión: el título tiene que decir la conclusión"], correcta: 3, explicacion: "Un título que solo dice el tema no cumple el 2 de Conclusión. Pensar que es de Lectura tienta porque es un título, pero en la rúbrica la idea del gráfico es parte de la conclusión." },
    { q: "Tu proyecto sacó 8 puntos, pero tiene un 0 en valores de control. ¿Está listo?", opciones: ["Sí, llegó a 8","No: tiene que tener 8 o más y ningún 0","Sí, los controles no importan","No, tiene que sacar 10"], correcta: 1, explicacion: "Un 0 en controles quiere decir que hay números equivocados. Llegar a 8 tienta como aprobado, pero un informe con números mal no se puede entregar." },
    { q: "Otra persona le puso 5 a tu informe y vos le pusiste 9. ¿Qué hacés?", opciones: ["Te quedás con tu 9","Te quedás con el 5 sin preguntar","Charlan en qué criterio no coinciden: ahí suele haber algo para mejorar","Promediás y listo"], correcta: 2, explicacion: "La diferencia muestra dónde mirar. Promediar tienta por justo, pero perdés la información de por qué opinan distinto." },
    { q: "Querés poner Excel en tu CV. ¿Qué frase muestra más?", opciones: ["Una que diga qué sabés hacer y un proyecto concreto, como el informe de 947 ventas","\"Manejo de Excel\"","\"Excel avanzado\" sin más","\"Uso computadoras\""], correcta: 0, explicacion: "Lo concreto se puede comprobar en una entrevista. \"Excel avanzado\" tienta porque suena más, pero si te piden una tabla dinámica y no sabés, juega en contra." },
    { q: "En una entrevista te pueden pedir hacer algo en una planilla en el momento. ¿Cómo te preparás?", opciones: ["Leés las lecciones de nuevo","Memorizás los valores de control","Llevás el archivo hecho y lo mostrás","Repetís el proyecto B desde cero tomando el tiempo"], correcta: 3, explicacion: "Hacerlo de nuevo, con tiempo, es lo más parecido a la prueba real. Releer tienta porque es cómodo, pero da la sensación de saber sin practicar." },
    { q: "Querés usar el presupuesto todos los meses y comparar. ¿Qué hacés?", opciones: ["Borrás los números y escribís los nuevos encima","Duplicás la hoja cada mes y le ponés el nombre del mes","Hacés un archivo nuevo desde cero cada mes","Escribís todos los meses en la misma columna"], correcta: 1, explicacion: "Duplicar la hoja conserva las fórmulas y guarda cada mes. Escribir encima tienta por rápido, pero perdés los meses anteriores y no podés comparar." },
  ],
},
];
