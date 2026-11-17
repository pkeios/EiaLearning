// Temario del curso "Tableros con Power BI y Data Studio". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js power-bi y node tools/metodologia.js power-bi
window.TEMARIO = [
{
  id: "tablero",
  icono: "📊",
  titulo: "Qué es un tablero",
  nivel: "Básico",
  objetivos: [
    "Distinguir un tablero de una planilla y de un informe",
    "Elegir 3 a 5 indicadores que respondan las preguntas de quien lo va a mirar",
    "Decidir entre Power BI y Data Studio según tu computadora y tu cuenta",
  ],
  lecciones: [
    { titulo: "Planilla, informe y tablero", html: `
      <p class="idea">Un <strong>tablero</strong> (en inglés, dashboard) muestra en una sola pantalla los números más importantes, con gráficos que se actualizan solos cuando cambian los datos.</p>
      <table>
        <tr><th></th><th>Planilla</th><th>Informe</th><th>Tablero</th></tr>
        <tr><td>Qué tiene</td><td>Todas las filas de datos</td><td>Texto y gráficos sobre un momento</td><td>Los números clave, en gráficos</td></tr>
        <tr><td>Se actualiza</td><td>A mano</td><td>Se vuelve a escribir</td><td>Solo, al cambiar los datos</td></tr>
        <tr><td>Se mira</td><td>Para buscar un dato</td><td>Una vez</td><td>Seguido, de un vistazo</td></tr>
      </table>
      <p>Es como el tablero de un auto: no te muestra el motor entero, sino la velocidad, la nafta y las luces de alerta. Lo justo para decidir.</p>
      <p>Las dos herramientas gratis más usadas para armarlos son <strong>Power BI</strong>, de Microsoft, y <strong>Data Studio</strong>, de Google. Data Studio se llamó <strong>Looker Studio</strong> hasta abril de 2026: si ves un tutorial con ese nombre, es la misma herramienta.</p>
      <p>En todo el curso armamos el tablero de un <strong>almacén de barrio con 3 sucursales</strong> (Centro, Norte y Sur). Usamos su planilla real de ventas: <strong>947 ventas</strong> de enero a junio de 2025, en el archivo ventas-limpias. Bajalo acá: 📥 <a href="../datos/practica/ventas-limpias.xlsx" download>ventas-limpias.xlsx</a> (Excel) o 📥 <a href="../datos/practica/ventas-limpias.csv" download>ventas-limpias.csv</a> (CSV).</p>
      <p>Por ejemplo, la dueña del almacén abre la planilla de 947 filas y no sabe por dónde empezar. En el tablero ve de un vistazo que vendió 6.270.350 pesos en 6 meses y que junio fue el mejor mes.</p>` },
    { titulo: "Indicadores: los números que importan", video: {"id":"dzh7faTkHCk","t":"KPI: qué es y ejemplos de indicadores clave · Cyberclick (6:24)"}, html: `
      <p class="idea">Un <strong>indicador</strong> (en inglés, KPI) es un número que responde una pregunta importante del negocio. Un buen tablero tiene pocos: entre 3 y 5.</p>
      <p>Antes de abrir cualquier programa, escribí las <strong>preguntas</strong> de quien va a mirar el tablero. Cada indicador responde una.</p>
      <table>
        <tr><th>Pregunta de la dueña</th><th>Indicador</th><th>Valor real (ene a jun)</th></tr>
        <tr><td>¿Cuánto vendimos?</td><td>Ventas totales</td><td>6.270.350 pesos</td></tr>
        <tr><td>¿Cuántas ventas hicimos?</td><td>Cantidad de ventas</td><td>947</td></tr>
        <tr><td>¿Cuánto gasta cada cliente por compra?</td><td>Ticket promedio</td><td>6.621 pesos</td></tr>
        <tr><td>¿Qué sucursal vende más?</td><td>Ventas por sucursal</td><td>Centro: 2.891.950</td></tr>
      </table>
      <p>El <strong>ticket promedio</strong> es el total vendido dividido por la cantidad de ventas: 6.270.350 / 947 = 6.621 pesos, aproximadamente.</p>
      <pre><code>Plantilla para cada indicador:
Pregunta:  ¿...?
Indicador: nombre corto
Cálculo:   suma / promedio / cantidad de qué columna
Lo mira:   quién, cada cuánto</code></pre>
      <p>Si un número no cambia ninguna decisión, sobra en el tablero.</p>
      <p>Por ejemplo, "cantidad de productos distintos" es un dato curioso, pero la dueña no decide nada con él: queda afuera. En cambio, el ticket promedio le dice si conviene armar promociones.</p>` },
    { titulo: "Power BI o Data Studio", html: `
      <p class="idea">Las dos herramientas hacen tableros gratis. Elegí según tu <strong>computadora</strong> y con quién lo vas a <strong>compartir</strong>.</p>
      <table>
        <tr><th></th><th>Power BI Desktop</th><th>Data Studio</th></tr>
        <tr><td>De quién es</td><td>Microsoft</td><td>Google</td></tr>
        <tr><td>Dónde funciona</td><td>Se instala, solo en Windows</td><td>En el navegador, en cualquier compu</td></tr>
        <tr><td>Cuenta que pide</td><td>Ninguna para usarlo en tu compu</td><td>Una cuenta de Google (Gmail)</td></tr>
        <tr><td>Compartir en línea</td><td>Pide una cuenta de trabajo o de estudio</td><td>Con un link, como un documento de Google</td></tr>
        <tr><td>Fuerte en</td><td>Cálculos y muchos datos; lo piden en empresas</td><td>Rapidez y compartir fácil</td></tr>
      </table>
      <p>Un <strong>archivo de Power BI</strong> termina en <strong>.pbix</strong>. Se puede mandar por mail o pendrive, pero quien lo recibe también necesita Power BI Desktop para abrirlo. Otra opción es exportarlo a PDF.</p>
      <p><strong>En este curso hacés el mismo tablero en las dos.</strong> Las ideas son iguales: datos, gráficos, cálculos y filtros. Lo que cambia es dónde está cada botón.</p>
      <p>Por ejemplo, si tenés una Mac o una compu de la escuela donde no podés instalar nada, empezá por Data Studio. Si buscás trabajo como analista, aprendé las dos: Power BI aparece mucho en los avisos.</p>` },
  ],
  practica: [
    "Escribí 4 preguntas que la dueña del almacén le haría a sus datos y, al lado, el indicador que responde cada una.",
    "Calculá a mano el ticket promedio con los números de la lección (total y cantidad de ventas) y anotá el resultado.",
    "Anotá qué sistema tiene tu compu y qué cuenta tenés, y decidí con qué herramienta vas a empezar.",
  ],
  recursos: [
    { t: "Microsoft Learn: introducción al análisis de datos", url: "https://learn.microsoft.com/es-es/training/paths/data-analytics-microsoft/" },
    { t: "Data Studio de Google (antes Looker Studio)", url: "https://datastudio.google.com/overview" },
  ],
  quiz: [
    { q: "Tenés que ver de un vistazo cómo van las ventas cada semana. ¿Qué armás?", opciones: ["Una planilla con todas las filas","Un informe escrito nuevo cada semana","Un tablero con los números clave","Una lista de productos"], correcta: 2, explicacion: "El tablero muestra lo clave y se actualiza solo. La planilla tienta porque tiene todo, pero no se lee de un vistazo." },
    { q: "Si un tablero es como el de un auto, ¿qué tiene que mostrar?", opciones: ["Lo justo para decidir, como la velocidad y las alertas","Todas las piezas del motor","Todos los datos sin excepción","Solo colores lindos"], correcta: 0, explicacion: "Muestra pocos números clave. Mostrar todo tienta por completo, pero no se entiende nada." },
    { q: "Encontraste un tutorial de \"Looker Studio\". ¿Te sirve para Data Studio?", opciones: ["No, es otro programa","Solo si pagás","Solo en Windows","Sí: es la misma herramienta con el nombre anterior"], correcta: 3, explicacion: "Google la volvió a llamar Data Studio en 2026. Pensar que es otro programa tienta por el nombre, pero es la misma." },
    { q: "Antes de abrir Power BI o Data Studio, ¿qué hacés?", opciones: ["Elegís los colores","Escribís las preguntas de quien va a mirar el tablero","Ponés todos los gráficos posibles","Pedís más datos"], correcta: 1, explicacion: "Cada indicador responde una pregunta. Los colores tientan porque se ven, pero van al final." },
    { q: "¿Cuántos indicadores conviene que tenga un tablero?", opciones: ["Todos los que se puedan","Uno solo, siempre","Pocos: entre 3 y 5","20 o más"], correcta: 2, explicacion: "Pocos se leen de un vistazo. Todos tienta para no olvidar nada, pero se pierde lo importante." },
    { q: "El almacén vendió 6.270.350 pesos en 947 ventas. ¿Cuál es el ticket promedio?", opciones: ["Unos 6.621 pesos","947 pesos","6.270.350 pesos","Unos 66 pesos"], correcta: 0, explicacion: "Total dividido por cantidad de ventas. 947 tienta porque está en la pregunta, pero es la cantidad, no el promedio." },
    { q: "Un número no cambia ninguna decisión de la dueña. ¿Qué hacés con él?", opciones: ["Lo ponés bien grande","Lo repetís en cada página","Lo ponés en rojo","Lo dejás afuera del tablero"], correcta: 3, explicacion: "Si no sirve para decidir, sobra. Ponerlo grande tienta si es curioso, pero distrae." },
    { q: "La dueña pregunta \"¿qué sucursal vende más?\". ¿Qué indicador la responde?", opciones: ["Cantidad total de ventas","Ventas por sucursal","Ticket promedio general","Fecha de la primera venta"], correcta: 1, explicacion: "Hay que separar las ventas por sucursal. La cantidad total tienta, pero junta las tres." },
    { q: "Tenés una Mac. ¿Con qué herramienta empezás?", opciones: ["Power BI Desktop","Ninguna funciona en Mac","Data Studio, que funciona en el navegador","Primero tenés que comprar Windows"], correcta: 2, explicacion: "Power BI Desktop es solo para Windows. Comprar Windows tienta, pero Data Studio anda en cualquier compu." },
    { q: "Querés que tu primo vea el tablero desde su celular con un link. ¿Qué herramienta es más simple?", opciones: ["Data Studio: se comparte con un link","Power BI Desktop: se comparte solo","Ninguna puede","Una foto del tablero en la planilla"], correcta: 0, explicacion: "Data Studio comparte como un documento de Google. Power BI tienta, pero publicar en línea pide cuenta de trabajo o de estudio." },
    { q: "Le mandás a una compañera tu archivo .pbix. ¿Qué necesita para abrirlo?", opciones: ["Solo el navegador","Data Studio","Nada, se abre con doble clic en cualquier compu","Power BI Desktop instalado"], correcta: 3, explicacion: "El .pbix es un archivo de Power BI. Data Studio tienta porque también hace tableros, pero no abre ese archivo." },
    { q: "Buscás trabajo como analista de datos. ¿Qué te conviene aprender?", opciones: ["Ninguna: alcanza con la planilla","Las dos herramientas: Power BI aparece mucho en avisos","Solo Data Studio porque es más fácil","Solo a dibujar gráficos a mano"], correcta: 1, explicacion: "Las ideas son las mismas y las dos suman. Solo la más fácil tienta, pero muchos avisos piden Power BI." },
  ],
},
{
  id: "datos",
  icono: "🧹",
  titulo: "Datos listos para un tablero",
  nivel: "Básico",
  objetivos: [
    "Reconocer una tabla ordenada: una fila por registro y una columna por dato",
    "Asignar el tipo correcto a cada columna: texto, número o fecha",
    "Revisar 5 errores comunes de los datos antes de armar el tablero",
  ],
  lecciones: [
    { titulo: "La tabla ordenada", html: `
      <p class="idea">Un tablero solo funciona si los datos están en una <strong>tabla ordenada</strong>: una fila por cada cosa que pasó, una columna por cada dato y una sola fila de encabezado arriba.</p>
      <p>El <strong>encabezado</strong> es la primera fila, con los nombres de las columnas. Cada fila de abajo es un <strong>registro</strong>: en nuestro caso, una venta.</p>
      <pre><code>id_venta  fecha       sucursal  categoria  producto     cantidad  total  medio_pago
V0001     2025-01-01  Centro    Almacén    Arroz 1 kg   4         6800   Efectivo
V0002     2025-01-01  Centro    Bebidas    Agua 2 L     6         5400   Efectivo
V0003     2025-01-01  Sur       Bebidas    Agua 2 L     1          900   Efectivo</code></pre>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Un mes en una columna "fecha"</td><td>Una columna por mes: enero, febrero, marzo...</td></tr>
        <tr><td>Celdas sin combinar</td><td>Títulos con celdas combinadas arriba de la tabla</td></tr>
        <tr><td>Sin filas de total</td><td>Una fila "TOTAL" al final (se sumaría dos veces)</td></tr>
        <tr><td>Una sola tabla por hoja</td><td>Varias tablitas en la misma hoja</td></tr>
      </table>
      <p>El archivo de práctica viene en dos formatos: <strong>CSV</strong>, que es texto con los valores separados por comas, y <strong>XLSX</strong>, que es un libro de Excel. Los dos sirven.</p>
      <p>Si todavía no lo bajaste: 📥 <a href="../datos/practica/ventas-limpias.xlsx" download>ventas-limpias.xlsx</a> o 📥 <a href="../datos/practica/ventas-limpias.csv" download>ventas-limpias.csv</a>.</p>
      <p>Por ejemplo, si la planilla tuviera una fila "TOTAL" al final, el tablero diría que el almacén vendió el doble: 12.540.700 pesos en vez de 6.270.350.</p>` },
    { titulo: "El tipo de cada columna", video: {"id":"C47X8Vr74lo","t":"Preparando datos en Power Query · El Tío Tech (7:50)"}, html: `
      <p class="idea">Cada columna tiene un <strong>tipo de dato</strong>: texto, número o fecha. Si el tipo está mal, los cálculos fallan: no se puede sumar un texto.</p>
      <table>
        <tr><th>Columna</th><th>Tipo</th><th>Qué se puede hacer</th></tr>
        <tr><td>sucursal, categoria, medio_pago</td><td>Texto</td><td>Agrupar y contar</td></tr>
        <tr><td>cantidad, precio_unitario, total</td><td>Número</td><td>Sumar, promediar</td></tr>
        <tr><td>fecha</td><td>Fecha</td><td>Agrupar por mes, ordenar en el tiempo</td></tr>
        <tr><td>id_venta</td><td>Texto (aunque tenga números)</td><td>Contar ventas</td></tr>
      </table>
      <p><strong>Cómo se ve un tipo mal puesto:</strong> en Power BI, una columna de números como texto aparece con el ícono "ABC" en vez de "1 2 3". En Data Studio, tiene el ícono de texto en vez del "123".</p>
      <p>Power BI tiene <strong>Power Query</strong>, la ventana para preparar datos antes de usarlos: ahí cambiás el tipo de cada columna. Se abre con <strong>Transformar datos</strong>. Data Studio te deja cambiar el tipo al conectar la fuente.</p>
      <p><strong>Las fechas:</strong> el archivo usa el formato año-mes-día (2025-01-01). Es el más seguro: los programas no lo confunden.</p>
      <p>Por ejemplo, si "total" quedara como texto, el tablero mostraría "Recuento" en vez de sumar, y la tarjeta diría 947 en lugar de 6.270.350.</p>` },
    { titulo: "Revisar antes de graficar", html: `
      <p class="idea">Antes de armar el tablero, revisá los datos <strong>5 minutos</strong>. Un error en los datos se convierte en un gráfico que miente.</p>
      <pre><code>Lista de revisión:
1. ¿Hay filas vacías o repetidas?
2. ¿Los nombres están escritos siempre igual?
   (Centro, centro y CENTRO cuentan como 3 sucursales)
3. ¿Los números son números y las fechas, fechas?
4. ¿Hay filas de total o subtotal metidas en el medio?
5. ¿Los totales dan lo que esperás?
   (comparalos con una suma hecha en la planilla)</code></pre>
      <table>
        <tr><th>Problema</th><th>Qué pasa en el tablero</th></tr>
        <tr><td>"Centro" y "centro "</td><td>Aparecen dos barras de Centro</td></tr>
        <tr><td>Una venta repetida</td><td>Las ventas salen más altas</td></tr>
        <tr><td>Celdas vacías en "sucursal"</td><td>Aparece una barra "(en blanco)" o "null"</td></tr>
      </table>
      <p>Si encontrás problemas, arreglalos en la <strong>fuente</strong>, que es el archivo original de los datos, o en Power Query. Así el arreglo queda para la próxima actualización.</p>
      <p>El archivo de práctica "ventas-limpias" ya está revisado. Si hiciste el curso "Python para automatizar tareas", ahí ves cómo se limpió "ventas-sucias".</p>
      <p>Por ejemplo, la suma de la columna total en la planilla da 6.270.350. Si el tablero muestra otro número, hay un error en los datos o en el cálculo, y no se publica hasta encontrarlo.</p>` },
  ],
  practica: [
    "Abrí ventas-limpias en una planilla y anotá cuántas columnas y cuántas filas de datos tiene (sin el encabezado).",
    "Anotá el tipo de dato de cada columna: texto, número o fecha.",
    "Sumá la columna total en la planilla y anotá el resultado: es el número que tu tablero tiene que mostrar.",
  ],
  recursos: [
    { t: "Microsoft: introducción a Power BI Desktop", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started" },
    { t: "Google: documentación de Data Studio", url: "https://docs.cloud.google.com/data-studio?hl=es" },
  ],
  quiz: [
    { q: "Tu planilla tiene una columna por mes: enero, febrero, marzo. ¿Qué conviene para un tablero?", opciones: ["Dejarla así","Agregar una columna por año","Una sola columna \"fecha\" y una fila por venta","Combinar las celdas de los meses"], correcta: 2, explicacion: "La tabla ordenada tiene una columna por dato. Dejarla así tienta porque se lee bien, pero el tablero no puede agrupar." },
    { q: "Si tu planilla tiene una fila \"TOTAL\" al final, ¿qué pasa en el tablero?", opciones: ["Las ventas salen el doble, porque se suma el total otra vez","Nada","Se ve más prolijo","Se borra sola"], correcta: 0, explicacion: "El tablero suma todas las filas. \"Nada\" tienta, pero el total se sumaría dos veces." },
    { q: "¿Qué es un registro en la tabla de ventas?", opciones: ["La primera fila","Una columna","El nombre del archivo","Cada fila: una venta"], correcta: 3, explicacion: "Cada fila es una venta. La primera fila tienta, pero ese es el encabezado." },
    { q: "¿Qué es un archivo CSV?", opciones: ["Una foto de la tabla","Texto con los valores separados por comas","Un archivo de Power BI","Un video"], correcta: 1, explicacion: "Es texto plano con comas. Archivo de Power BI tienta, pero ese termina en .pbix." },
    { q: "Si la columna \"total\" quedó como texto, ¿qué pasa?", opciones: ["Suma igual","Se ve en rojo","No se puede sumar: el tablero cuenta en vez de sumar","Se borra"], correcta: 2, explicacion: "No se suma un texto. \"Suma igual\" tienta porque se ven números, pero el programa los trata como palabras." },
    { q: "La columna id_venta tiene valores como V0001. ¿Qué tipo le ponés?", opciones: ["Texto","Número","Fecha","Moneda"], correcta: 0, explicacion: "Es un código: sirve para contar, no para sumar. Número tienta por los dígitos, pero tiene una letra." },
    { q: "Querés cambiar el tipo de una columna en Power BI. ¿Dónde lo hacés?", opciones: ["En la tarjeta del tablero","En el nombre del archivo","No se puede","En Power Query, con Transformar datos"], correcta: 3, explicacion: "Power Query prepara los datos. La tarjeta tienta porque ahí ves el error, pero el tipo se cambia en los datos." },
    { q: "En tu tablero aparecen dos barras: \"Centro\" y \"centro\". ¿Qué pasó?", opciones: ["Hay dos sucursales Centro","El nombre está escrito distinto en algunas filas","El gráfico está roto","Es normal"], correcta: 1, explicacion: "Mayúsculas y espacios hacen nombres distintos. Pensar en dos sucursales tienta, pero es un error de escritura." },
    { q: "Si encontrás celdas vacías en \"sucursal\", ¿dónde conviene arreglarlas?", opciones: ["Tapándolas con un dibujo en el tablero","Ignorándolas siempre","En la fuente o en Power Query, para que quede para la próxima vez","Borrando el gráfico"], correcta: 2, explicacion: "Arreglar en la fuente dura. Taparlas tienta por rápido, pero vuelven al actualizar." },
    { q: "La planilla suma 6.270.350 y tu tablero muestra 6.290.000. ¿Qué hacés?", opciones: ["Buscás el error antes de publicar","Publicás igual, la diferencia es chica","Redondeás para que coincida","Cambiás la planilla para que dé igual"], correcta: 0, explicacion: "Los totales tienen que coincidir. \"Es chica\" tienta, pero indica un error en los datos o el cálculo." },
    { q: "¿Por qué conviene el formato de fecha 2025-01-01?", opciones: ["Porque es más lindo","Porque ocupa menos","Porque es el único que existe","Porque los programas no lo confunden"], correcta: 3, explicacion: "Año-mes-día no se confunde entre países. \"Más lindo\" tienta, pero la razón es que es seguro." },
    { q: "Si hay una venta repetida dos veces, ¿qué muestra el tablero?", opciones: ["Ventas más bajas","Ventas más altas de lo real","Lo mismo","Un error rojo"], correcta: 1, explicacion: "Cada fila se suma. \"Lo mismo\" tienta, pero la repetida se cuenta dos veces." },
  ],
},
{
  id: "datastudio",
  icono: "🟦",
  titulo: "Tu primer tablero en Data Studio",
  nivel: "Básico",
  objetivos: [
    "Conectar un archivo de datos a un informe nuevo de Data Studio",
    "Agregar un cuadro de resultados, un gráfico de barras y uno de líneas",
    "Compartir el tablero con un link y elegir quién puede editarlo",
  ],
  lecciones: [
    { titulo: "Conectar los datos", video: {"id":"yl2c6tJ1__4","t":"Cómo empezar en Looker Studio desde cero · DataMaster School (1:42)"}, html: `
      <p class="idea">En Data Studio, los datos entran por una <strong>fuente de datos</strong>: la conexión entre el informe y tu archivo. La forma más simple es subir el archivo a <strong>Hojas de cálculo de Google</strong> y conectarla.</p>
      <pre><code>1. Entrá a Google Drive con tu cuenta de Google.
2. Subí ventas-limpias.xlsx y abrilo con Hojas de cálculo de Google.
3. Entrá a datastudio.google.com.
4. Tocá Crear → Informe.
5. En "Agregar datos", elegí Hojas de cálculo de Google.
6. Elegí el archivo y la hoja, y tocá Agregar.</code></pre>
      <p>Data Studio también tiene un conector para <strong>subir un archivo CSV</strong> directo. Conectar una hoja de Google tiene una ventaja: si agregás ventas en la hoja, el tablero se actualiza.</p>
      <p><strong>Revisá los tipos:</strong> al conectar, Data Studio muestra cada campo con su tipo. Un <strong>campo</strong> es cada columna de tus datos. Fijate que fecha sea fecha y total sea número.</p>
      <table>
        <tr><th>Tipo de campo</th><th>Color en Data Studio</th><th>Ejemplo</th></tr>
        <tr><td>Dimensión: algo para agrupar</td><td>Verde</td><td>sucursal, fecha, categoria</td></tr>
        <tr><td>Métrica: algo para calcular</td><td>Azul</td><td>total, cantidad</td></tr>
      </table>
      <p>Por ejemplo, al conectar la hoja, Data Studio pone "sucursal" en verde, porque agrupa, y "total" en azul, porque se suma.</p>` },
    { titulo: "Tres gráficos para empezar", html: `
      <p class="idea">Con tres elementos ya tenés un tablero útil: un <strong>cuadro de resultados</strong> con el número clave, un gráfico de <strong>barras</strong> para comparar y uno de <strong>líneas</strong> para ver el tiempo.</p>
      <table>
        <tr><th>Elemento</th><th>Dimensión</th><th>Métrica</th><th>Responde</th></tr>
        <tr><td>Cuadro de resultados</td><td>—</td><td>SUM de total</td><td>¿Cuánto vendimos? → 6.270.350</td></tr>
        <tr><td>Gráfico de barras</td><td>sucursal</td><td>SUM de total</td><td>¿Qué sucursal vende más?</td></tr>
        <tr><td>Gráfico de líneas</td><td>fecha (por mes)</td><td>SUM de total</td><td>¿Cómo vamos mes a mes?</td></tr>
      </table>
      <pre><code>Para agregar un gráfico:
1. Tocá Agregar un gráfico y elegí el tipo.
2. Dibujalo arrastrando en la hoja.
3. A la derecha, en Configuración,
   elegí la Dimensión y la Métrica.</code></pre>
      <p>Para ver la línea por mes, en la dimensión fecha elegí el tipo <strong>Año y mes</strong>. Si queda por día, la línea sale llena de picos.</p>
      <pre><code>Lo que tiene que mostrar el gráfico de líneas:
ene 932.250 · feb 781.600 · mar 1.149.550
abr 939.100 · may 1.174.950 · jun 1.292.900</code></pre>
      <p>Por ejemplo, con las barras la dueña ve que Centro vendió 2.891.950, casi lo mismo que Norte y Sur juntas (1.670.050 + 1.708.350).</p>` },
    { titulo: "Compartir", html: `
      <p class="idea">Un tablero de Data Studio se comparte como un documento de Google: con un <strong>link</strong> o con el mail de cada persona, y eligiendo si puede <strong>ver</strong> o <strong>editar</strong>.</p>
      <table>
        <tr><th>Permiso</th><th>Qué puede hacer</th><th>A quién</th></tr>
        <tr><td>Lector</td><td>Ver y usar los filtros</td><td>La dueña, los encargados</td></tr>
        <tr><td>Editor</td><td>Cambiar gráficos y datos</td><td>Solo quien mantiene el tablero</td></tr>
      </table>
      <pre><code>1. Arriba a la derecha, tocá Compartir.
2. Escribí el mail o tocá "Copiar link".
3. Elegí Lector o Editor.
4. Tocá Ver, arriba, para mirar el tablero
   como lo ve el que lo recibe.</code></pre>
      <p><strong>Cuidado con los datos:</strong> quien puede ver el tablero ve los datos que muestra. No compartas con "cualquier persona con el link" un tablero con datos de clientes o sueldos.</p>
      <p><strong>Si los datos son de otros:</strong> los lectores ven lo que permitís en el informe, pero para editar necesitan acceso a la hoja de origen. Si alguien no ve los gráficos, revisá los permisos de la fuente.</p>
      <p>Por ejemplo, el encargado de la sucursal Sur recibe el link como lector: ve sus ventas y las de las otras, pero no puede borrar nada por error.</p>` },
  ],
  practica: [
    "Conectá ventas-limpias a un informe nuevo de Data Studio y anotá qué campos quedaron como dimensión y cuáles como métrica.",
    "Agregá un cuadro de resultados con la suma de total y compará el número con el que anotaste en el módulo anterior.",
    "Agregá un gráfico de líneas por mes y anotá qué mes vendió más y cuánto.",
  ],
  recursos: [
    { t: "Data Studio de Google (antes Looker Studio)", url: "https://datastudio.google.com/overview" },
    { t: "Google: documentación de Data Studio", url: "https://docs.cloud.google.com/data-studio?hl=es" },
  ],
  quiz: [
    { q: "Querés que el tablero se actualice cuando agregás ventas. ¿Cómo conectás los datos?", opciones: ["Sacándole una foto a la planilla","Copiando los números a mano en cada gráfico","Conectando una hoja de cálculo de Google que vas completando","Mandando la planilla por mail"], correcta: 2, explicacion: "La hoja conectada actualiza el informe. Copiar a mano tienta por simple, pero hay que repetirlo siempre." },
    { q: "En Data Studio, ¿qué es una fuente de datos?", opciones: ["La conexión entre el informe y tu archivo","Un tipo de letra","Un gráfico de torta","La impresora"], correcta: 0, explicacion: "La fuente conecta los datos. \"Tipo de letra\" tienta por la palabra fuente, pero acá es otra cosa." },
    { q: "El campo \"sucursal\" aparece en verde. ¿Qué es?", opciones: ["Una métrica: se suma","Un error","Una fecha","Una dimensión: sirve para agrupar"], correcta: 3, explicacion: "Verde es dimensión. Métrica tienta, pero las métricas son azules y se calculan." },
    { q: "Querés mostrar en grande cuánto vendió el almacén en total. ¿Qué agregás?", opciones: ["Un gráfico de líneas por día","Un cuadro de resultados con la suma de total","Una tabla con las 947 filas","Un mapa"], correcta: 1, explicacion: "El cuadro de resultados muestra un número clave. La tabla tienta por completa, pero no se lee de un vistazo." },
    { q: "Querés comparar las ventas de las 3 sucursales. ¿Qué gráfico usás?", opciones: ["Líneas por día","Cuadro de resultados","Barras con dimensión sucursal y métrica total","Una tabla sin orden"], correcta: 2, explicacion: "Las barras comparan. El cuadro tienta, pero muestra un solo número." },
    { q: "Tu gráfico de líneas sale lleno de picos, día por día. ¿Qué cambiás?", opciones: ["El tipo de la fecha a Año y mes","El color de la línea","La métrica a Recuento","Nada, está bien"], correcta: 0, explicacion: "Agrupar por mes suaviza y responde \"mes a mes\". Cambiar el color tienta, pero no saca los picos." },
    { q: "Según los datos, ¿qué mes vendió más el almacén?", opciones: ["Enero: 932.250 pesos","Febrero: 781.600 pesos","Marzo: 1.149.550 pesos","Junio: 1.292.900 pesos"], correcta: 3, explicacion: "Junio es el mayor. Marzo tienta porque fue un salto grande, pero mayo y junio lo superan." },
    { q: "Centro vendió 2.891.950; Norte, 1.670.050, y Sur, 1.708.350. ¿Qué ves en las barras?", opciones: ["Que Sur es la que más vende","Que Centro vende casi lo mismo que Norte y Sur juntas","Que las tres venden igual","Que Norte vende el doble que Centro"], correcta: 1, explicacion: "Norte más Sur da 3.378.400, cerca de Centro. \"Venden igual\" tienta si mirás solo Norte y Sur." },
    { q: "La dueña tiene que ver el tablero, pero no cambiarlo. ¿Qué permiso le das?", opciones: ["Editor","Propietario","Lector","Ninguno"], correcta: 2, explicacion: "Lector ve y usa filtros sin cambiar nada. Editor tienta por confianza, pero puede borrar algo sin querer." },
    { q: "Tu tablero muestra datos de clientes. ¿Lo compartís con \"cualquier persona con el link\"?", opciones: ["No: lo compartís solo con los mails que lo necesitan","Sí, es más cómodo","Sí, si el link es largo","Sí, en redes sociales"], correcta: 0, explicacion: "Cualquiera con el link vería esos datos. Comodidad tienta, pero los datos de clientes se cuidan." },
    { q: "Querés ver el tablero como lo verá la dueña. ¿Qué tocás?", opciones: ["Editar","Agregar un gráfico","Borrar la fuente","Ver, arriba"], correcta: 3, explicacion: "Ver muestra el modo de lectura. Editar tienta porque es donde estás, pero no es lo que ve ella." },
    { q: "Un lector te dice que no ve los gráficos. ¿Qué revisás?", opciones: ["El color de los gráficos","Los permisos de la fuente de datos","El tamaño de la letra","Que tenga Windows"], correcta: 1, explicacion: "Sin acceso a los datos no se ven. Windows tienta, pero Data Studio anda en el navegador." },
  ],
},
{
  id: "powerbi",
  icono: "🟨",
  titulo: "Tu primer tablero en Power BI",
  nivel: "Intermedio",
  objetivos: [
    "Instalar Power BI Desktop y cargar un archivo CSV o Excel",
    "Ubicar las 3 vistas, el panel de datos y el panel de objetos visuales",
    "Armar el mismo tablero de 3 elementos que en Data Studio",
  ],
  lecciones: [
    { titulo: "Instalar y cargar los datos", video: {"id":"SdkCdn3SYgQ","t":"¿Qué es Power BI? · A2 Capacitación: Excel (2:16)"}, html: `
      <p class="idea"><strong>Power BI Desktop</strong> es gratis y se instala en Windows. Los datos entran con <strong>Obtener datos</strong>, y antes de cargarlos podés revisarlos en Power Query.</p>
      <pre><code>1. Instalá Power BI Desktop desde la Microsoft Store
   o desde la página oficial de Microsoft.
2. Abrilo y cerrá la ventana de bienvenida.
3. Inicio → Obtener datos → Texto o CSV
   (o Libro de Excel, si usás el .xlsx).
4. Elegí ventas-limpias.
5. Aparece una vista previa. Tocá Transformar datos
   para revisar los tipos en Power Query,
   o Cargar si ya están bien.
6. En Power Query: revisá los íconos de cada columna
   y tocá Cerrar y aplicar.</code></pre>
      <p><strong>Si al abrir te pide iniciar sesión</strong>, podés cerrar esa ventana: para trabajar en tu compu no hace falta cuenta.</p>
      <p><strong>Guardá enseguida:</strong> Archivo → Guardar como. El archivo queda con extensión <strong>.pbix</strong>, la de los archivos de Power BI. Guardá seguido mientras trabajás.</p>
      <p>Por ejemplo, al cargar el CSV, Power BI detecta solo que "total" es número entero y "fecha" es fecha. Igual conviene mirarlo en Power Query: a veces confunde.</p>` },
    { titulo: "Recorrer la pantalla", html: `
      <p class="idea">Power BI tiene <strong>3 vistas</strong> (los íconos de la izquierda) y, a la derecha, los paneles para armar gráficos. Ubicarlos es la mitad del trabajo.</p>
      <table>
        <tr><th>Vista</th><th>Para qué</th></tr>
        <tr><td>Informe</td><td>Armar el tablero: la hoja en blanco donde van los gráficos (se llama lienzo)</td></tr>
        <tr><td>Tabla</td><td>Ver las filas de datos cargadas</td></tr>
        <tr><td>Modelo</td><td>Ver cómo se relacionan varias tablas (para más adelante)</td></tr>
      </table>
      <table>
        <tr><th>Panel</th><th>Qué tiene</th></tr>
        <tr><td>Datos</td><td>Tus tablas y columnas: ventas → fecha, sucursal, total...</td></tr>
        <tr><td>Visualizaciones</td><td>Los tipos de gráfico (en Power BI se llaman objetos visuales) y los casilleros para llenarlos</td></tr>
        <tr><td>Filtros</td><td>Filtros para un gráfico, una página o todo el informe</td></tr>
      </table>
      <p><strong>Los casilleros del objeto visual:</strong> cada gráfico tiene lugares para arrastrar columnas. En un gráfico de barras, <strong>Eje Y</strong> lleva la categoría (sucursal) y <strong>Eje X</strong> el valor (total). Es lo mismo que dimensión y métrica en Data Studio.</p>
      <p>Por ejemplo, si no ves el panel Datos, tocá Vista → Paneles → Datos. Aparece a la derecha con la tabla ventas y sus columnas.</p>` },
    { titulo: "El mismo tablero en Power BI", html: `
      <p class="idea">Armá los mismos 3 elementos que en Data Studio: una <strong>tarjeta</strong> con el total, <strong>barras</strong> por sucursal y <strong>líneas</strong> por mes.</p>
      <table>
        <tr><th>Objeto visual</th><th>Qué arrastrás</th><th>A qué casillero</th></tr>
        <tr><td>Tarjeta</td><td>total</td><td>Campos</td></tr>
        <tr><td>Gráfico de barras agrupadas</td><td>sucursal / total</td><td>Eje Y / Eje X</td></tr>
        <tr><td>Gráfico de líneas</td><td>fecha / total</td><td>Eje X / Eje Y</td></tr>
      </table>
      <pre><code>Para cada uno:
1. Hacé clic en una parte vacía del lienzo.
2. En Visualizaciones, tocá el ícono del gráfico.
3. Arrastrá las columnas a los casilleros.
4. Agrandalo o movelo desde las esquinas.</code></pre>
      <p><strong>La fecha por mes:</strong> al poner fecha en el Eje X, Power BI la divide en Año, Trimestre, Mes y Día. Sacá Trimestre y Día con la cruz para que quede por mes.</p>
      <p><strong>Revisá la suma:</strong> en el casillero, la flechita al lado de "total" dice cómo lo calcula: tiene que decir Suma. Si dice Recuento, el tipo de la columna está mal.</p>
      <p>Por ejemplo, la tarjeta muestra 6,27 millones. Coincide con la suma de la planilla: el tablero está bien armado.</p>` },
  ],
  practica: [
    "Cargá ventas-limpias en Power BI Desktop y anotá qué tipo detectó para fecha, total y sucursal.",
    "Armá la tarjeta, las barras y las líneas, y anotá cuánto vendió cada sucursal según el gráfico.",
    "Guardá el archivo .pbix y anotá cuánto pesa en tu compu.",
  ],
  recursos: [
    { t: "Power BI Desktop: descarga gratis (Windows)", url: "https://www.microsoft.com/es-es/power-platform/products/power-bi/desktop" },
    { t: "Microsoft: introducción a Power BI Desktop", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started" },
    { t: "Microsoft Learn: aprendizaje gratis de Power BI", url: "https://learn.microsoft.com/es-es/training/powerplatform/power-bi" },
  ],
  quiz: [
    { q: "Tenés Windows y querés usar Power BI gratis. ¿Qué instalás?", opciones: ["Data Studio","Una app que te mandaron por mail","Power BI Desktop","Nada: se usa solo en el navegador"], correcta: 2, explicacion: "Desktop es el gratis para Windows. Data Studio tienta, pero es la herramienta de Google." },
    { q: "Querés cargar ventas-limpias.csv. ¿Qué opción elegís?", opciones: ["Obtener datos → Texto o CSV","Archivo → Imprimir","Insertar → Imagen","Vista → Modelo"], correcta: 0, explicacion: "Los datos entran por Obtener datos. Insertar imagen tienta, pero pegaría una foto." },
    { q: "Querés revisar los tipos de las columnas antes de cargarlas. ¿Qué tocás?", opciones: ["Cargar sin mirar","Publicar","Exportar a PDF","Transformar datos, que abre Power Query"], correcta: 3, explicacion: "Power Query muestra los tipos. Cargar tienta por rápido, pero a veces confunde un tipo." },
    { q: "Al abrir Power BI te pide iniciar sesión y no tenés cuenta de trabajo. ¿Qué hacés?", opciones: ["Desinstalás el programa","Cerrás esa ventana: para trabajar en tu compu no hace falta","Creás una cuenta con datos falsos","No podés seguir"], correcta: 1, explicacion: "Desktop funciona sin cuenta. Desinstalar tienta, pero no hace falta." },
    { q: "¿Qué extensión tiene un archivo de Power BI?", opciones: [".csv",".xlsx",".pbix",".docx"], correcta: 2, explicacion: ".pbix es de Power BI. .xlsx tienta porque es de Microsoft, pero es de Excel." },
    { q: "Querés ver las filas de datos que cargaste. ¿Qué vista usás?", opciones: ["La vista Tabla","La vista Informe","El panel Filtros","El menú Ayuda"], correcta: 0, explicacion: "Tabla muestra las filas. Informe tienta porque es la principal, pero ahí van los gráficos." },
    { q: "¿Cómo se llama la hoja en blanco donde van los gráficos?", opciones: ["La fuente","El modelo","La celda","El lienzo"], correcta: 3, explicacion: "El lienzo es la hoja del informe. El modelo tienta, pero muestra relaciones entre tablas." },
    { q: "No ves el panel Datos a la derecha. ¿Dónde lo activás?", opciones: ["Inicio → Obtener datos","Vista → Paneles → Datos","Archivo → Opciones de impresión","No se puede"], correcta: 1, explicacion: "Desde Vista se muestran los paneles. Obtener datos tienta por el nombre, pero carga datos nuevos." },
    { q: "En un gráfico de barras, ¿dónde va sucursal?", opciones: ["En el Eje X, como valor","En Filtros","En el Eje Y, como la dimensión de Data Studio","En la Tarjeta"], correcta: 2, explicacion: "Sucursal agrupa y va en el eje de categorías. Eje X tienta, pero ahí va el número a medir." },
    { q: "Pusiste fecha en el Eje X y salen Año, Trimestre, Mes y Día. Querés ver por mes. ¿Qué hacés?", opciones: ["Sacás Trimestre y Día con la cruz","Borrás la columna fecha","Cambiás a gráfico de torta","Dejás todo, es igual"], correcta: 0, explicacion: "Quedan Año y Mes. Dejarlo tienta, pero la línea queda por día, llena de picos." },
    { q: "Si la tarjeta muestra 947 en vez de 6,27 millones, ¿qué pasa?", opciones: ["El almacén vendió 947 pesos","Está bien","Faltan datos","Está contando (Recuento) en vez de sumar"], correcta: 3, explicacion: "947 es la cantidad de filas. \"Faltan datos\" tienta, pero el problema es el cálculo o el tipo." },
    { q: "La tarjeta muestra 6,27 millones y la planilla suma 6.270.350. ¿Qué te dice?", opciones: ["Que hay un error de redondeo grave","Que el tablero está bien armado","Que faltan ventas","Que hay ventas repetidas"], correcta: 1, explicacion: "Es el mismo número, abreviado. \"Error de redondeo\" tienta, pero 6,27 millones es 6.270.350 escrito corto." },
  ],
},
{
  id: "calculos",
  icono: "🧮",
  titulo: "Cálculos e indicadores",
  nivel: "Intermedio",
  objetivos: [
    "Elegir entre suma, promedio, recuento y recuento distinto según la pregunta",
    "Crear un indicador propio: un campo calculado en Data Studio y una medida en Power BI",
    "Mostrar cuánto representa cada parte del total, en porcentaje",
  ],
  lecciones: [
    { titulo: "Sumar, contar o promediar", html: `
      <p class="idea">Cada número del tablero sale de una <strong>agregación</strong>: una forma de resumir muchas filas en un número. Elegir la correcta depende de la pregunta.</p>
      <table>
        <tr><th>Agregación</th><th>Qué hace</th><th>Pregunta que responde</th><th>Valor real</th></tr>
        <tr><td>Suma de total</td><td>Suma la columna</td><td>¿Cuánto vendimos?</td><td>6.270.350</td></tr>
        <tr><td>Recuento de id_venta</td><td>Cuenta filas</td><td>¿Cuántas ventas hubo?</td><td>947</td></tr>
        <tr><td>Promedio de total</td><td>Suma dividida por la cantidad</td><td>¿Cuánto es una venta típica?</td><td>6.621</td></tr>
        <tr><td>Suma de cantidad</td><td>Suma unidades</td><td>¿Cuántas unidades salieron?</td><td>2.408</td></tr>
        <tr><td>Recuento distinto de producto</td><td>Cuenta valores diferentes</td><td>¿Cuántos productos distintos vendimos?</td><td>—</td></tr>
      </table>
      <p><strong>Cuidado con sumar lo que no se suma:</strong> sumar precio_unitario no significa nada. Los precios se promedian o se miran uno por uno.</p>
      <p>En Data Studio la agregación se cambia tocando el ícono a la izquierda de la métrica. En Power BI, con la flechita al lado del campo en el casillero.</p>
      <p>Por ejemplo, la dueña pregunta "¿cuántas veces se pagó con QR?". No es la suma de total, es el recuento de ventas con medio_pago QR: 294.</p>` },
    { titulo: "Tu propio indicador", video: {"id":"rKNZORA8IPU","t":"Qué son y cómo crear medidas en Power BI usando DAX · EXCELeINFO (8:00)"}, html: `
      <p class="idea">Cuando el número que necesitás no está en una columna, lo <strong>calculás</strong>. El ticket promedio es el ejemplo clásico: total dividido por cantidad de ventas.</p>
      <p><strong>En Data Studio</strong> se llama <strong>campo calculado</strong>. En el panel de datos, tocá Agregar un campo y escribí la fórmula:</p>
      <pre><code>Nombre:  Ticket promedio
Fórmula: SUM(total) / COUNT(id_venta)</code></pre>
      <p><strong>En Power BI</strong> se llama <strong>medida</strong>. Primero cambiale el nombre a la tabla para que sea corto: en el panel Datos, doble clic en el nombre de la tabla y escribí <strong>ventas</strong>. Después: Inicio → Nueva medida, y escribí:</p>
      <pre><code>Ticket promedio = DIVIDE(SUM(ventas[total]), COUNTROWS(ventas))</code></pre>
      <p>Las fórmulas de Power BI se escriben en un lenguaje llamado <strong>DAX</strong>. Las funciones van en inglés: SUM es sumar, COUNTROWS cuenta filas y DIVIDE divide sin error si el divisor es cero.</p>
      <table>
        <tr><th>Sucursal</th><th>Ventas</th><th>Cantidad</th><th>Ticket promedio</th></tr>
        <tr><td>Centro</td><td>2.891.950</td><td>436</td><td>6.633</td></tr>
        <tr><td>Norte</td><td>1.670.050</td><td>256</td><td>6.524</td></tr>
        <tr><td>Sur</td><td>1.708.350</td><td>255</td><td>6.699</td></tr>
      </table>
      <p>Por ejemplo, la medida se recalcula sola por sucursal: Centro vende más porque tiene más ventas, pero Sur tiene el ticket más alto, 6.699 pesos.</p>` },
    { titulo: "Partes del total", html: `
      <p class="idea">A veces importa más el <strong>porcentaje</strong> que el número: cuánto representa cada parte del total. Las dos herramientas lo calculan sin fórmulas.</p>
      <table>
        <tr><th>Medio de pago</th><th>Ventas</th><th>% del total</th></tr>
        <tr><td>QR</td><td>2.004.850</td><td>32 %</td></tr>
        <tr><td>Débito</td><td>1.678.300</td><td>27 %</td></tr>
        <tr><td>Efectivo</td><td>1.352.400</td><td>22 %</td></tr>
        <tr><td>Crédito</td><td>1.234.800</td><td>20 %</td></tr>
      </table>
      <p>Por los redondeos, los porcentajes pueden sumar 101 %: es normal.</p>
      <pre><code>Power BI: en el casillero, flechita del campo
→ Mostrar valor como → Porcentaje del total general

Data Studio: en la métrica, tocá el lápiz
→ Cálculo de comparación → Porcentaje del total</code></pre>
      <p><strong>Ojo con el filtro:</strong> el porcentaje se calcula sobre lo que se ve. Si filtrás solo la sucursal Sur, el 100 % es Sur.</p>
      <p>Esto conecta con el curso "Gráficos que cuentan algo": para mostrar partes de un total, las barras ordenadas suelen leerse mejor que una torta.</p>
      <p>Por ejemplo, la dueña pensaba que la mayoría pagaba en efectivo. El tablero muestra que el QR ya es el 32 % de las ventas, y el efectivo, el 22 %.</p>` },
  ],
  practica: [
    "Calculá en tu tablero la suma de total, el recuento de ventas y el promedio de total, y anotá los 3 números.",
    "Creá el ticket promedio como campo calculado (Data Studio) o como medida (Power BI) y anotá el de cada sucursal.",
    "Armá un gráfico de ventas por medio de pago en porcentaje del total y anotá qué porcentaje es QR.",
  ],
  recursos: [
    { t: "Microsoft Learn: aprendizaje gratis de Power BI", url: "https://learn.microsoft.com/es-es/training/powerplatform/power-bi" },
    { t: "Google: documentación de Data Studio", url: "https://docs.cloud.google.com/data-studio?hl=es" },
  ],
  quiz: [
    { q: "La dueña pregunta cuántas ventas hubo en el semestre. ¿Qué agregación usás?", opciones: ["Suma de total","Suma de precio_unitario","Recuento de id_venta","Promedio de cantidad"], correcta: 2, explicacion: "Contar filas da la cantidad de ventas. Suma de total tienta, pero responde cuánta plata entró." },
    { q: "Ves un gráfico con la suma de precio_unitario por sucursal. ¿Qué pasa?", opciones: ["No significa nada: los precios no se suman","Es el total vendido","Es el ticket promedio","Está perfecto"], correcta: 0, explicacion: "Sumar precios no responde ninguna pregunta. \"Total vendido\" tienta, pero ese es la suma de total." },
    { q: "Querés saber cuántas veces se pagó con QR. ¿Qué mirás?", opciones: ["La suma de total de todo","El promedio de cantidad","La fecha de la primera venta","El recuento de ventas con medio_pago QR"], correcta: 3, explicacion: "\"Cuántas veces\" es contar. La suma tienta, pero da pesos, no veces." },
    { q: "El número que necesitás no está en ninguna columna. ¿Qué hacés?", opciones: ["Lo inventás","Lo creás con un campo calculado o una medida","Lo escribís a mano en un cuadro de texto","Agregás una columna a mano en la planilla con el resultado"], correcta: 1, explicacion: "El cálculo se actualiza solo. El cuadro de texto tienta por rápido, pero queda fijo y se desactualiza." },
    { q: "En Data Studio querés el ticket promedio. ¿Qué fórmula escribís?", opciones: ["SUM(id_venta)","COUNT(total) / SUM(id_venta)","SUM(total) / COUNT(id_venta)","total + id_venta"], correcta: 2, explicacion: "Total dividido por cantidad de ventas. La división invertida tienta porque usa las mismas columnas, pero da un número sin sentido." },
    { q: "En Power BI la tabla se llama \"ventas-limpias\" y querés escribir medidas cómodas. ¿Qué hacés primero?", opciones: ["Le cambiás el nombre a \"ventas\" con doble clic","Borrás la tabla","Cargás el archivo de nuevo cada vez","Escribís la medida sin nombre de tabla"], correcta: 0, explicacion: "Un nombre corto hace más simples las fórmulas. Sin nombre de tabla tienta, pero DAX lo necesita." },
    { q: "¿Qué hace DIVIDE en una medida de Power BI?", opciones: ["Suma dos columnas","Cuenta filas","Borra datos","Divide, sin dar error si el divisor es cero"], correcta: 3, explicacion: "DIVIDE evita el error de dividir por cero. \"Cuenta filas\" tienta, pero eso es COUNTROWS." },
    { q: "Centro vende más que Sur. ¿Eso quiere decir que tiene el ticket más alto?", opciones: ["Sí, siempre","No: Sur tiene el ticket más alto (6.699 contra 6.633)","Sí, porque tiene más ventas","No se puede saber nunca"], correcta: 1, explicacion: "Centro vende más porque tiene más ventas. \"Sí, siempre\" tienta, pero el ticket es por venta." },
    { q: "Querés ver qué parte del total es cada medio de pago, sin fórmulas. ¿Qué usás en Power BI?", opciones: ["Una medida que sume todo dos veces","Un gráfico de líneas por día","Mostrar valor como → Porcentaje del total general","Un cuadro de texto"], correcta: 2, explicacion: "Power BI lo calcula solo. La medida tienta, pero no hace falta." },
    { q: "Tus porcentajes suman 101 %. ¿Qué pasa?", opciones: ["Es normal por los redondeos","Hay ventas inventadas","El tablero está roto","Falta un medio de pago"], correcta: 0, explicacion: "Cada porcentaje se redondea. \"Ventas inventadas\" tienta, pero la diferencia es solo de redondeo." },
    { q: "Filtrás solo la sucursal Sur. ¿Sobre qué se calcula el porcentaje del total?", opciones: ["Sobre las 3 sucursales siempre","Sobre el año entero","Sobre otra planilla","Sobre las ventas de Sur, lo que se ve"], correcta: 3, explicacion: "El porcentaje usa lo filtrado. \"Las 3 siempre\" tienta, pero el filtro cambia el 100 %." },
    { q: "La dueña creía que la mayoría pagaba en efectivo. ¿Qué muestran los datos?", opciones: ["El efectivo es el 60 %","El QR es el 32 % y el efectivo, el 22 %","Todos pagan con crédito","No hay datos de medios de pago"], correcta: 1, explicacion: "Los datos corrigen la intuición. El efectivo alto tienta porque era lo común antes, pero hoy gana el QR." },
  ],
},
{
  id: "filtros",
  icono: "🎛️",
  titulo: "Filtros e interacción",
  nivel: "Intermedio",
  objetivos: [
    "Agregar un filtro que el lector pueda usar: sucursal y período",
    "Usar el filtrado cruzado: tocar una barra filtra el resto del tablero",
    "Decidir qué filtros fijar y cuáles dejar al lector",
  ],
  lecciones: [
    { titulo: "Filtros para el lector", video: {"id":"XyORLIHzIX4","t":"Segmentación de datos · Microsoft Excel a Todo Nivel (7:41)"}, html: `
      <p class="idea">Un buen tablero deja que el lector haga sus propias preguntas: con un <strong>filtro</strong> elige una sucursal o un período, y todos los gráficos se actualizan.</p>
      <table>
        <tr><th></th><th>Power BI</th><th>Data Studio</th></tr>
        <tr><td>Cómo se llama</td><td>Segmentación de datos</td><td>Control</td></tr>
        <tr><td>Filtro por lista</td><td>Segmentación con el campo sucursal</td><td>Agregar un control → Lista desplegable → sucursal</td></tr>
        <tr><td>Filtro de fechas</td><td>Segmentación con el campo fecha (muestra un control deslizante)</td><td>Agregar un control → Control de período</td></tr>
      </table>
      <p>La <strong>segmentación de datos</strong> de Power BI y el <strong>control</strong> de Data Studio son lo mismo: una cajita en el tablero para elegir qué mirar.</p>
      <pre><code>Con el filtro de sucursal en "Sur":
Ventas:          1.708.350
Cantidad:        255
Ticket promedio: 6.699
Mes más alto:    enero, 333.950</code></pre>
      <p>Por ejemplo, el encargado de Sur elige su sucursal y descubre algo que el total escondía: en Sur, el mejor mes fue enero, no junio.</p>` },
    { titulo: "Filtrado cruzado", html: `
      <p class="idea">En las dos herramientas, <strong>tocar una barra</strong> puede filtrar el resto del tablero. Eso se llama <strong>filtrado cruzado</strong>.</p>
      <pre><code>Tocás la barra "Bebidas" en el gráfico de categorías
→ la tarjeta muestra solo las ventas de Bebidas: 884.550
→ las barras por sucursal muestran solo Bebidas
→ la línea por mes muestra solo Bebidas
Tocás de nuevo la barra (o un lugar vacío) → vuelve todo</code></pre>
      <table>
        <tr><th></th><th>Power BI</th><th>Data Studio</th></tr>
        <tr><td>Viene activado</td><td>Sí</td><td>Hay que activarlo: en el gráfico, Configuración → Interacciones del gráfico → Filtrado cruzado</td></tr>
        <tr><td>Para que un gráfico no se filtre</td><td>Formato → Editar interacciones → Ninguno</td><td>No activar el filtrado cruzado en ese gráfico</td></tr>
      </table>
      <p><strong>Avisale al lector:</strong> mucha gente no sabe que puede tocar las barras. Un texto chico como "Tocá una barra para filtrar" ayuda.</p>
      <p>Por ejemplo, la dueña toca "Frescos", la categoría que más vende (2.679.100), y ve en qué sucursal se venden más quesos y huevos.</p>` },
    { titulo: "Qué filtrar y qué no", html: `
      <p class="idea">No todo filtro ayuda. Fijá los que <strong>siempre</strong> aplican y dejá al lector solo los que <strong>cambian la pregunta</strong>.</p>
      <table>
        <tr><th>Tipo de filtro</th><th>Quién lo elige</th><th>Ejemplo</th></tr>
        <tr><td>Fijo, de página o informe</td><td>Vos, una vez</td><td>Sacar las ventas de prueba o de otra empresa</td></tr>
        <tr><td>Para el lector</td><td>El que mira</td><td>Sucursal, período, categoría</td></tr>
      </table>
      <p>En Power BI, los filtros fijos van en el panel <strong>Filtros</strong>: "en este objeto visual", "en esta página" o "en todas las páginas". En Data Studio, en la configuración del gráfico o de la página, en <strong>Filtro</strong>.</p>
      <pre><code>Reglas simples:
- 2 o 3 filtros para el lector, no 10.
- Arriba del tablero, donde se ven primero.
- Con un título que diga qué filtran.
- Que el lector pueda ver qué está filtrado.</code></pre>
      <p><strong>Un riesgo:</strong> un filtro fijo que el lector no ve puede engañar. Si sacaste algo, decilo en el tablero, por ejemplo con un texto: "Sin ventas mayoristas".</p>
      <p>Por ejemplo, el tablero del almacén tiene 2 filtros para el lector, sucursal y período, arriba a la izquierda. No tiene filtro de producto: con 15 productos, la lista confunde más de lo que ayuda.</p>` },
  ],
  practica: [
    "Agregá un filtro de sucursal, elegí Sur y anotá las ventas, la cantidad y el mes más alto que muestra el tablero.",
    "Probá el filtrado cruzado tocando una categoría y anotá cuánto vendió esa categoría en total.",
    "Anotá qué filtros dejaste para el lector, cuáles fijaste y por qué.",
  ],
  recursos: [
    { t: "Microsoft: introducción a Power BI Desktop", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/desktop-getting-started" },
    { t: "Google: documentación de Data Studio", url: "https://docs.cloud.google.com/data-studio?hl=es" },
  ],
  quiz: [
    { q: "El encargado de Sur quiere ver solo su sucursal. ¿Qué le ponés al tablero?", opciones: ["Un tablero distinto para cada sucursal","Una foto de la parte de Sur","Un filtro de sucursal para que lo elija","Nada: que busque en la planilla"], correcta: 2, explicacion: "Un filtro sirve para todos. Un tablero por sucursal tienta, pero hay que mantener tres." },
    { q: "En Power BI, ¿cómo se llama el filtro que el lector usa en el tablero?", opciones: ["Segmentación de datos","Medida","Power Query","Lienzo"], correcta: 0, explicacion: "La segmentación es la cajita para elegir. Power Query tienta, pero prepara los datos antes." },
    { q: "En Data Studio querés que el lector elija un rango de fechas. ¿Qué agregás?", opciones: ["Un campo calculado","Un cuadro de resultados","Una imagen","Un control de período"], correcta: 3, explicacion: "El control de período filtra fechas. El campo calculado tienta, pero calcula, no filtra." },
    { q: "Si ponés el filtro en Sur, ¿cuál fue su mejor mes?", opciones: ["Junio, como el total","Enero: 333.950","Marzo","Febrero"], correcta: 1, explicacion: "El filtro mostró algo que el total escondía. Junio tienta porque es el mejor del total, pero no en Sur." },
    { q: "Si tocás la barra \"Bebidas\" y la tarjeta cambia a 884.550, ¿qué pasó?", opciones: ["Se borraron datos","Es un error","Filtrado cruzado: el tablero muestra solo Bebidas","Cambió la fuente de datos"], correcta: 2, explicacion: "Tocar una barra filtra el resto. \"Se borraron datos\" tienta, pero al tocar de nuevo vuelve todo." },
    { q: "En Data Studio tocás una barra y no pasa nada. ¿Qué revisás?", opciones: ["Que esté activado el filtrado cruzado en ese gráfico","Que tengas Windows","El color de la barra","Que la planilla tenga una fila TOTAL"], correcta: 0, explicacion: "En Data Studio hay que activarlo. Windows tienta, pero Data Studio anda en el navegador." },
    { q: "En Power BI no querés que un gráfico se filtre al tocar otro. ¿Qué usás?", opciones: ["Borrar el gráfico","Nueva medida","Obtener datos","Editar interacciones → Ninguno"], correcta: 3, explicacion: "Editar interacciones decide qué filtra a qué. Borrar tienta por rápido, pero perdés el gráfico." },
    { q: "Muchos lectores no saben que pueden tocar las barras. ¿Qué hacés?", opciones: ["Nada","Agregás un texto chico: \"Tocá una barra para filtrar\"","Sacás el filtrado cruzado","Agregás 10 filtros más"], correcta: 1, explicacion: "Un aviso simple ayuda. Sacarlo tienta, pero perdés algo útil." },
    { q: "Hay ventas de prueba que nunca deberían aparecer. ¿Qué filtro usás?", opciones: ["Un filtro para el lector","Ninguno","Un filtro fijo de página o de informe","Un control de período"], correcta: 2, explicacion: "Lo que siempre aplica se fija. Dejarlo al lector tienta, pero alguien se olvida de usarlo." },
    { q: "Si armás tu tablero, ¿cuántos filtros conviene dejarle al lector?", opciones: ["2 o 3, los que cambian la pregunta","10 o más","Uno por cada columna","Ninguno, nunca"], correcta: 0, explicacion: "Pocos filtros se entienden. Muchos tientan para que haya de todo, pero confunden." },
    { q: "Si sacaste las ventas mayoristas con un filtro fijo, ¿qué agregás al tablero?", opciones: ["Nada, el lector no necesita saberlo","Un gráfico de torta","Otro filtro escondido","Un texto: \"Sin ventas mayoristas\""], correcta: 3, explicacion: "Un filtro invisible puede engañar. \"No necesita saberlo\" tienta, pero los números parecen ser de todo." },
    { q: "¿Dónde conviene poner los filtros para el lector?", opciones: ["Abajo de todo, escondidos","Arriba del tablero, con un título claro","En otra página","En el nombre del archivo"], correcta: 1, explicacion: "Arriba se ven primero. Abajo tienta para que no molesten, pero nadie los encuentra." },
  ],
},
{
  id: "diseno",
  icono: "🎨",
  titulo: "Diseño de un buen tablero",
  nivel: "Avanzado",
  objetivos: [
    "Ordenar el tablero para que lo importante se lea primero",
    "Escribir títulos que digan la conclusión, no solo el tema",
    "Usar pocos colores, con un significado, y revisar el tablero en el celular",
  ],
  lecciones: [
    { titulo: "El orden de lectura", video: {"id":"jH0tRqWu7BY","t":"Cómo crear un dashboard PRO en Power BI paso a paso · Mau Duarte (12:59)"}, html: `
      <p class="idea">La gente lee un tablero como una página: de <strong>arriba a la izquierda</strong> hacia abajo a la derecha. Lo más importante va primero.</p>
      <pre><code>┌──────────────────────────────────────────────────┐
│ Título del tablero        [Sucursal ▾] [Período] │
├────────────┬────────────┬────────────┬───────────┤
│ Ventas     │ Cantidad   │ Ticket     │ % QR      │  ← 1. los números clave
│ 6.270.350  │ 947        │ 6.621      │ 32 %      │
├────────────┴────────────┼────────────┴───────────┤
│ Ventas por mes (líneas) │ Ventas por sucursal    │  ← 2. cómo vamos y
│                         │ (barras)               │     dónde
├─────────────────────────┴────────────────────────┤
│ Ventas por categoría (barras ordenadas)          │  ← 3. el detalle
└──────────────────────────────────────────────────┘</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Entre 5 y 7 elementos por página</td><td>Más que eso, nadie lo lee</td></tr>
        <tr><td>Alineados en una grilla</td><td>Se ve ordenado y se lee más rápido</td></tr>
        <tr><td>Lo general arriba, el detalle abajo</td><td>Primero el resumen, después el porqué</td></tr>
        <tr><td>Si no entra, otra página</td><td>Mejor dos páginas claras que una amontonada</td></tr>
      </table>
      <p>Por ejemplo, la primera versión del tablero del almacén tenía 12 gráficos. Al dejar 7 y poner las 4 tarjetas arriba, la dueña encontró lo que buscaba en segundos.</p>` },
    { titulo: "Títulos que dicen algo", html: `
      <p class="idea">Un buen título dice la <strong>conclusión</strong>, no solo el tema. Así el lector entiende aunque no mire el gráfico con detalle.</p>
      <table>
        <tr><th>Título de tema</th><th>Título con conclusión</th></tr>
        <tr><td>Ventas por mes</td><td>Junio fue el mejor mes del semestre</td></tr>
        <tr><td>Ventas por sucursal</td><td>Centro vende casi lo mismo que Norte y Sur juntas</td></tr>
        <tr><td>Medios de pago</td><td>El QR ya es el medio de pago más usado</td></tr>
      </table>
      <p><strong>Cuidado con los filtros:</strong> si el lector cambia el filtro, la conclusión puede dejar de ser cierta. En Sur, el mejor mes fue enero. Para los gráficos que cambian con los filtros, usá un título neutro y poné la conclusión en un texto aparte, que diga para qué datos vale.</p>
      <p><strong>Además del título:</strong></p>
      <ul>
        <li>Etiquetas de datos: el número arriba de cada barra.</li>
        <li>Unidades claras: "pesos", "ventas", "%".</li>
        <li>La fuente y la fecha de actualización, en letra chica: "Datos: ventas de enero a junio de 2025".</li>
      </ul>
      <p>Esto es lo mismo que viste en el curso "Gráficos que cuentan algo", ahora en un tablero.</p>
      <p>Por ejemplo, en el tablero general, el gráfico de medios de pago se titula "El QR ya es el medio de pago más usado" y abajo dice en letra chica "Datos: enero a junio de 2025, las 3 sucursales".</p>` },
    { titulo: "Colores y celular", html: `
      <p class="idea">Usá <strong>pocos colores</strong> y que cada uno <strong>signifique algo</strong>. Y antes de compartir, mirá el tablero en un celular.</p>
      <table>
        <tr><th>Así sí</th><th>Así no</th></tr>
        <tr><td>Un color principal para todo</td><td>Un color distinto por barra, sin motivo</td></tr>
        <tr><td>Un color fuerte solo para destacar</td><td>Todo fuerte: nada se destaca</td></tr>
        <tr><td>Rojo y verde, más un símbolo (▲ ▼)</td><td>Solo rojo y verde: hay personas que no los distinguen</td></tr>
        <tr><td>Fondo blanco o muy claro</td><td>Fondos con imágenes o degradados</td></tr>
        <tr><td>La misma sucursal, el mismo color en todos los gráficos</td><td>Centro azul en un gráfico y naranja en otro</td></tr>
      </table>
      <p><strong>El celular:</strong> mucha gente abre el tablero desde el teléfono.</p>
      <pre><code>Power BI:    Vista → Diseño móvil
             (armás una versión para pantalla angosta)
Data Studio: no tiene versión para celular aparte:
             probá el link en tu teléfono y,
             si no se lee, agrandá la letra o poné
             menos gráficos por fila</code></pre>
      <p>Por ejemplo, en el tablero del almacén todas las barras son azules, salvo la del mes más alto, en naranja. En el celular, la dueña ve las 4 tarjetas de un vistazo.</p>` },
  ],
  practica: [
    "Dibujá en papel la grilla de tu tablero con los elementos en orden de importancia y anotá cuántos son.",
    "Reescribí 3 títulos de tus gráficos para que digan la conclusión y anotalos.",
    "Abrí tu tablero en un celular y anotá qué parte no se leía bien y qué cambiaste.",
  ],
  recursos: [
    { t: "Microsoft Learn: introducción al análisis de datos", url: "https://learn.microsoft.com/es-es/training/paths/data-analytics-microsoft/" },
    { t: "Data Studio de Google (antes Looker Studio)", url: "https://datastudio.google.com/overview" },
  ],
  quiz: [
    { q: "¿Dónde ponés los números más importantes del tablero?", opciones: ["Abajo a la derecha","En el medio, chiquitos","Arriba a la izquierda","En otra página"], correcta: 2, explicacion: "Se lee desde arriba a la izquierda. Abajo tienta para cerrar con lo importante, pero no se ve primero." },
    { q: "Tu tablero tiene 12 gráficos en una página. ¿Qué hacés?", opciones: ["Dejás entre 5 y 7, y si hace falta, otra página","Los achicás para que entren","Agregás más","Los ponés en desorden"], correcta: 0, explicacion: "Pocos elementos se leen. Achicarlos tienta, pero quedan ilegibles." },
    { q: "¿Cuál es mejor título para el gráfico de ventas por mes del tablero general?", opciones: ["Ventas por mes","Gráfico 1","Datos","Junio fue el mejor mes del semestre"], correcta: 3, explicacion: "El título con conclusión se entiende solo. \"Ventas por mes\" tienta por neutro, pero no dice qué mirar." },
    { q: "Tu gráfico dice \"Junio fue el mejor mes\" y el lector filtra Sur. ¿Qué pasa?", opciones: ["El título se corrige solo","El título queda falso: en Sur el mejor mes fue enero","No pasa nada","El gráfico se borra"], correcta: 1, explicacion: "El título es texto fijo. \"Se corrige solo\" tienta, pero no cambia con el filtro." },
    { q: "Querés que el lector sepa de cuándo son los datos. ¿Qué agregás?", opciones: ["Nada","Un título enorme con la fecha","En letra chica: \"Datos: enero a junio de 2025\"","La fecha en el nombre del archivo solamente"], correcta: 2, explicacion: "La fuente y la fecha dan confianza. El nombre del archivo tienta, pero el lector no lo ve." },
    { q: "Querés mostrar el número exacto de cada barra. ¿Qué activás?", opciones: ["Las etiquetas de datos","La leyenda","Un filtro","El diseño móvil"], correcta: 0, explicacion: "Las etiquetas muestran el número. La leyenda tienta, pero explica colores." },
    { q: "Cada barra del gráfico tiene un color distinto, sin motivo. ¿Qué cambiás?", opciones: ["Más colores todavía","Fondo con una foto","Letras de colores","Un solo color, y uno fuerte solo para destacar"], correcta: 3, explicacion: "Un color con significado guía la vista. Muchos colores tientan por alegres, pero confunden." },
    { q: "Usás rojo para lo que baja y verde para lo que sube. ¿Qué agregás?", opciones: ["Nada","Un símbolo, como ▲ y ▼, para quien no distingue esos colores","Más rojo","Un fondo verde"], correcta: 1, explicacion: "Hay personas que no distinguen rojo de verde. \"Nada\" tienta porque a vos se te ve bien." },
    { q: "Si Centro es azul en un gráfico y naranja en otro, ¿qué problema hay?", opciones: ["Ninguno","Se ve más alegre","Confunde: la misma sucursal tiene que tener el mismo color","Ahorra tinta"], correcta: 2, explicacion: "El color es un código. \"Más alegre\" tienta, pero el lector cree que es otra cosa." },
    { q: "La dueña abre el tablero en el celular. En Power BI, ¿qué preparás?", opciones: ["El diseño móvil, desde Vista","Nada, se adapta solo perfecto","Una foto del tablero","Otro archivo con otros datos"], correcta: 0, explicacion: "El diseño móvil arma una versión angosta. \"Se adapta solo\" tienta, pero sin prepararlo se ve chico." },
    { q: "En Data Studio, el tablero no se lee en el celular. ¿Qué probás?", opciones: ["Activar el diseño móvil de Power BI","Sacar todos los títulos","Cambiar el fondo a negro","Agrandar la letra o poner menos gráficos por fila"], correcta: 3, explicacion: "Data Studio no tiene versión aparte para celular. El diseño móvil tienta, pero es de Power BI." },
    { q: "Querés destacar el mejor mes en el gráfico de líneas. ¿Qué hacés?", opciones: ["Pintás todo de colores fuertes","Usás un color fuerte solo para ese punto","Lo escribís en mayúsculas en todos lados","Lo sacás del gráfico"], correcta: 1, explicacion: "El contraste guía la vista. Todo fuerte tienta, pero entonces nada se destaca." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el tablero del almacén",
  nivel: "Avanzado",
  objetivos: [
    "Armar un tablero completo de una página que responda las preguntas de la dueña",
    "Revisarlo con una rúbrica antes de compartirlo",
    "Compartirlo de la forma correcta según la herramienta y presentarlo en 2 minutos",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es el <strong>tablero del almacén</strong>, en Data Studio o en Power BI. Tiene que responder las preguntas de la dueña en menos de un minuto.</p>
      <table>
        <tr><th>Parte</th><th>Qué lleva</th><th>Módulo</th></tr>
        <tr><td>Preguntas</td><td>Las 4 preguntas de la dueña, escritas</td><td>Qué es un tablero</td></tr>
        <tr><td>Datos</td><td>ventas-limpias, con los tipos revisados</td><td>Datos listos</td></tr>
        <tr><td>Indicadores</td><td>4 tarjetas: ventas, cantidad, ticket promedio y % QR</td><td>Cálculos</td></tr>
        <tr><td>Gráficos</td><td>Líneas por mes, barras por sucursal y por categoría</td><td>Data Studio / Power BI</td></tr>
        <tr><td>Filtros</td><td>Sucursal y período, arriba</td><td>Filtros</td></tr>
        <tr><td>Diseño</td><td>Orden de lectura, títulos con conclusión, fuente y fecha</td><td>Diseño</td></tr>
      </table>
      <pre><code>Los números que tu tablero tiene que mostrar (sin filtros):
Ventas:           6.270.350
Cantidad:         947
Ticket promedio:  6.621
QR:               32 % de las ventas
Mejor mes:        junio, 1.292.900
Sucursal líder:   Centro, 2.891.950
Categoría líder:  Frescos, 2.679.100</code></pre>
      <p>Si algún número no coincide, revisá los tipos y las agregaciones antes de seguir.</p>
      <p>Por ejemplo, un alumno tenía el ticket promedio en 2.604: había dividido por la suma de cantidad (2.408 unidades) en vez de por la cantidad de ventas.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si un trabajo está listo. Revisá tu tablero con ella, o pedile a otra persona que lo haga.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Números correctos</td><td>Los 7 números coinciden</td><td>1 o 2 no coinciden</td><td>Más de 2 no coinciden</td></tr>
        <tr><td>Indicadores</td><td>4 tarjetas que responden preguntas</td><td>Faltan 1 o 2</td><td>No hay tarjetas</td></tr>
        <tr><td>Gráficos</td><td>Tipo justo para cada pregunta</td><td>Uno mal elegido</td><td>Varios mal elegidos</td></tr>
        <tr><td>Filtros</td><td>Sucursal y período, arriba, funcionando</td><td>Uno solo</td><td>Ninguno</td></tr>
        <tr><td>Diseño</td><td>Orden de lectura, títulos con conclusión, fuente y fecha</td><td>Falta una cosa</td><td>Amontonado o sin títulos</td></tr>
        <tr><td>Se entiende solo</td><td>Otra persona responde las 4 preguntas en 1 minuto</td><td>En más tiempo</td><td>No puede</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡listo para compartir!
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Números correctos" tiene 0, no está listo,
aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un tablero muy lindo con el total en 12.540.700 (por una fila de TOTAL en los datos) saca 0 en "Números correctos": no se comparte.</p>` },
    { titulo: "Compartir y presentar", html: `
      <p class="idea">Un tablero se comparte de distinta forma según la herramienta. Y se presenta en <strong>2 minutos</strong>: qué pregunta responde, qué muestra y qué conviene hacer.</p>
      <table>
        <tr><th>Herramienta</th><th>Cómo compartir</th><th>Ojo con</th></tr>
        <tr><td>Data Studio</td><td>Compartir → mail o link, como Lector</td><td>No usar "cualquier persona con el link" con datos privados</td></tr>
        <tr><td>Power BI Desktop</td><td>Archivo → Exportar → Exportar a PDF, o mandar el .pbix</td><td>El PDF no tiene filtros; el .pbix pide Power BI instalado</td></tr>
        <tr><td>Servicio Power BI (en línea)</td><td>Publicar → compartir en el sitio</td><td>Pide una cuenta de trabajo o de estudio</td></tr>
      </table>
      <pre><code>Presentación en 2 minutos:
1. La pregunta:   "¿Cómo le fue al almacén en el semestre?"
2. Lo que muestra: "Vendimos 6,27 millones; junio fue el mejor mes;
                   el QR ya es el 32 % de las ventas."
3. Una sorpresa:  "En Sur, el mejor mes fue enero."
4. Qué hacer:     "Asegurar que el QR ande bien en las 3 cajas."</code></pre>
      <p><strong>Para tu portfolio:</strong> si buscás trabajo, una captura del tablero con una explicación corta de qué preguntas responde muestra lo que sabés hacer. Usá datos de práctica, nunca datos reales de una empresa sin permiso.</p>
      <p>Por ejemplo, la dueña recibió el link de Data Studio como lectora, y el encargado de Sur, un PDF con el filtro en su sucursal.</p>` },
  ],
  practica: [
    "Armá el tablero completo y anotá los 7 números que muestra sin filtros.",
    "Revisalo con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Presentalo en 2 minutos a alguien y anotá cuántos segundos tardó en responder las 4 preguntas de la dueña.",
  ],
  recursos: [
    { t: "Microsoft: introducción al servicio Power BI (en línea)", url: "https://learn.microsoft.com/es-es/power-bi/fundamentals/service-get-started" },
    { t: "Data Studio de Google (antes Looker Studio)", url: "https://datastudio.google.com/overview" },
    { t: "Microsoft Learn: aprendizaje gratis de Power BI", url: "https://learn.microsoft.com/es-es/training/powerplatform/power-bi" },
  ],
  quiz: [
    { q: "Tu tablero muestra un ticket promedio de 2.604. ¿Qué error es probable?", opciones: ["Está bien","Faltan sucursales","Dividiste por la suma de unidades en vez de por la cantidad de ventas","Es el ticket de un solo mes"], correcta: 2, explicacion: "6.270.350 / 2.408 da 2.604. \"Está bien\" tienta, pero el ticket es por venta: 6.621." },
    { q: "¿Qué gráfico usás para \"¿cómo vamos mes a mes?\"?", opciones: ["Líneas por mes","Una tarjeta","Una torta por mes","Una tabla con las 947 filas"], correcta: 0, explicacion: "Las líneas muestran el tiempo. La torta tienta por colorida, pero no muestra tendencia." },
    { q: "Tu tablero da 12.540.700 de ventas. ¿Qué revisás primero?", opciones: ["El color de la tarjeta","El título","Nada, puede ser","Si hay una fila de TOTAL en los datos que se suma dos veces"], correcta: 3, explicacion: "Es justo el doble. \"Puede ser\" tienta, pero sabés que la suma real es 6.270.350." },
    { q: "Revisás con la rúbrica y \"Números correctos\" sacó 0, pero el total es 10. ¿Está listo?", opciones: ["Sí, 10 es buen puntaje","No: con números mal no se comparte","Sí, si es lindo","Sí, nadie lo va a notar"], correcta: 1, explicacion: "La regla de la rúbrica lo dice. El puntaje alto tienta, pero un tablero con números mal engaña." },
    { q: "¿Cómo sabés si tu tablero \"se entiende solo\"?", opciones: ["Si a vos te gusta","Si tiene muchos colores","Otra persona responde las 4 preguntas en un minuto, sin tu ayuda","Si tiene muchos gráficos"], correcta: 2, explicacion: "La prueba es con otra persona. \"A vos te gusta\" tienta, pero vos ya sabés dónde está todo." },
    { q: "Hiciste el tablero en Power BI Desktop y la dueña no tiene Power BI. ¿Qué le mandás?", opciones: ["Un PDF exportado","El archivo .pbix","La planilla original","Nada"], correcta: 0, explicacion: "El PDF se abre en cualquier lado. El .pbix tienta porque es el original, pero necesita Power BI." },
    { q: "Si mandás un PDF del tablero, ¿qué pierde el lector?", opciones: ["Los números","Los títulos","Los colores","Los filtros y el filtrado cruzado"], correcta: 3, explicacion: "El PDF es una foto fija. Los números tientan, pero esos sí quedan." },
    { q: "Querés publicar en el servicio Power BI y solo tenés un Gmail. ¿Qué pasa?", opciones: ["Se publica igual","No podés: pide una cuenta de trabajo o de estudio","Se publica en Data Studio","Te piden pagar con tarjeta y listo"], correcta: 1, explicacion: "El servicio en línea pide cuenta de trabajo o de estudio. \"Se publica igual\" tienta, pero no lo acepta." },
    { q: "En la presentación de 2 minutos, ¿con qué empezás?", opciones: ["Con cómo instalaste el programa","Con todos los detalles técnicos","Con la pregunta que responde el tablero","Con los colores que elegiste"], correcta: 2, explicacion: "La pregunta da contexto. Lo técnico tienta porque te costó, pero al público le importa la respuesta." },
    { q: "En la presentación, ¿qué agregás después de mostrar los números?", opciones: ["Qué conviene hacer, por ejemplo asegurar el QR en las cajas","Nada más","Una lista de todas las columnas","Los errores que tuviste"], correcta: 0, explicacion: "Un tablero sirve para decidir. \"Nada más\" tienta, pero sin acción queda incompleto." },
    { q: "Querés mostrar tu tablero en una entrevista de trabajo. ¿Qué datos usás?", opciones: ["Los de la empresa donde trabajaste, sin permiso","Los de tus vecinos","Datos personales de clientes reales","Datos de práctica, como los del almacén"], correcta: 3, explicacion: "Datos ajenos no se muestran sin permiso. Los reales tientan porque impresionan, pero no son tuyos." },
    { q: "La dueña quiere ver el tablero con los filtros funcionando. ¿Cómo lo compartís en Data Studio?", opciones: ["Como Editor","Con Compartir, a su mail, como Lector","Con un PDF","Con \"cualquier persona con el link\" en redes"], correcta: 1, explicacion: "Lector usa los filtros sin cambiar nada. El PDF tienta por simple, pero pierde los filtros." },
  ],
},
];
