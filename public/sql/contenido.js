// Temario del curso "SQL para hacer preguntas a los datos". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js sql y node tools/metodologia.js sql
window.TEMARIO = [
{
  id: "empezar",
  icono: "🗄️",
  titulo: "Bases de datos y tu primera consulta",
  nivel: "Básico",
  objetivos: [
    "Explicar qué es una base de datos, una tabla, una fila y una columna",
    "Escribir una consulta SELECT para ver toda una tabla o algunas columnas",
    "Usar el laboratorio SQL del curso y leer un error de \"no existe\"",
  ],
  lecciones: [
    { titulo: "Tablas, filas y columnas", video: {"id":"6S8A-1jBD5Y","t":"¿Qué es una base de datos? Características generales · Develoteca - Oscar Uh (3:19)"}, html: `
      <p class="idea">Una <strong>base de datos</strong> guarda información ordenada en <strong>tablas</strong>, como planillas. <strong>SQL</strong> es el lenguaje para hacerle preguntas a esas tablas.</p>
      <p>En todo el curso acompañamos a <strong>Sole</strong>, que lleva las cuentas del almacén de su familia en Paraná. Tiene los productos, los clientes y las ventas en una base de datos y quiere hacerle preguntas: qué se vende más, qué hay que reponer, quién compra más.</p>
      <table>
        <tr><th>Palabra</th><th>Qué es</th><th>En el almacén</th></tr>
        <tr><td>Tabla</td><td>Un grupo de datos del mismo tipo</td><td>productos, clientes, ventas</td></tr>
        <tr><td>Fila (registro)</td><td>Un elemento de la tabla</td><td>La yerba, un cliente, una venta</td></tr>
        <tr><td>Columna (campo)</td><td>Un dato de cada fila</td><td>nombre, precio, stock</td></tr>
        <tr><td>id</td><td>Un número único que identifica cada fila</td><td>El producto 1 es la yerba</td></tr>
      </table>
      <p>La base del curso tiene 3 tablas. Así se ven los clientes:</p>
      <pre class="sql"><code>SELECT * FROM clientes;</code></pre>
      <pre><code>Salida:
id | nombre     | barrio
---+------------+--------------
1  | Ana López  | Centro
2  | Bruno Díaz | San Agustín
3  | Carla Ruiz | Centro
4  | Diego Sosa | Bajada Grande
5  | Elena Paz  | NULL
(5 filas)</code></pre>
      <p><strong>NULL</strong> quiere decir que ese dato no está cargado: de Elena no se sabe el barrio. No es lo mismo que cero ni que un texto vacío.</p>
      <p><strong>¿Por qué no una planilla?</strong> Con pocos datos, una planilla alcanza (lo ves en el curso de Excel). Cuando son miles de filas, varias tablas relacionadas y muchas personas usándolas a la vez, una base de datos es más rápida, más ordenada y más segura.</p>
      <p>Por ejemplo, Sole tenía todo en una planilla con una hoja por mes y tardaba en sumar. Con la base de datos, cada pregunta es una consulta de una línea.</p>` },
    { titulo: "SELECT: pedir datos", video: {"id":"WimSXuCam5g","t":"Consultas SQL: SELECT (lectura) · TodoCode (8:41)"}, html: `
      <p class="idea">Una <strong>consulta</strong> es una pregunta en SQL. La más básica es <strong>SELECT</strong>: "mostrame estas columnas de esta tabla".</p>
      <pre><code>SELECT  columnas  FROM  tabla;
   │                     │
qué querés ver     de dónde
* (asterisco) = todas las columnas
; (punto y coma) = fin de la consulta</code></pre>
      <pre class="sql"><code>SELECT nombre, precio FROM productos;</code></pre>
      <pre><code>Salida:
nombre               | precio
---------------------+-------
Yerba 1 kg           | 3900
Azúcar 1 kg          | 1400
Leche 1 L            | 1300
Queso cremoso 1 kg   | 9800
Galletitas de agua   | 1100
Gaseosa 2,25 L       | 3200
Agua mineral 2 L     | 1500
Pan lactal           | 2900
Dulce de leche 400 g | 2600
Fideos 500 g         | 1200
(10 filas)</code></pre>
      <table>
        <tr><th>Escribís</th><th>Obtenés</th></tr>
        <tr><td>SELECT * FROM productos;</td><td>Todas las columnas de todos los productos</td></tr>
        <tr><td>SELECT nombre, precio FROM productos;</td><td>Solo esas dos columnas, en ese orden</td></tr>
        <tr><td>SELECT * FROM ventas LIMIT 3;</td><td>Solo las primeras 3 filas (para espiar una tabla grande)</td></tr>
      </table>
      <p><strong>Mayúsculas:</strong> por costumbre, las palabras de SQL (SELECT, FROM) se escriben en mayúsculas y los nombres de tablas y columnas en minúsculas. A SQLite le da igual, pero se lee mejor.</p>
      <p><strong>Pedí solo lo que necesitás:</strong> en tablas grandes, SELECT * trae muchísimo. Nombrar las columnas es más rápido y más claro.</p>
      <p>Por ejemplo, Sole quería imprimir la lista de precios para el mostrador. Con SELECT nombre, precio la tuvo en un segundo, sin el stock ni los id.</p>` },
    { titulo: "El laboratorio y los primeros errores", html: `
      <p class="idea">Debajo de cada consulta del curso está el botón <strong>"Probar esta consulta"</strong>: abre un <strong>laboratorio</strong> donde podés cambiarla y correrla sobre la base del almacén. Cada vez arranca de cero, así que no rompés nada.</p>
      <pre class="sql"><code>SELECT * FROM ventas LIMIT 3;</code></pre>
      <pre><code>Salida:
id | fecha      | cliente_id | producto_id | cantidad
---+------------+------------+-------------+---------
1  | 2026-03-02 | 1          | 1           | 2
2  | 2026-03-02 | 2          | 3           | 4
3  | 2026-03-03 | 1          | 4           | 1
(3 filas)</code></pre>
      <p>Fijate: la tabla ventas no guarda el nombre del cliente ni del producto, sino sus <strong>id</strong>. La venta 1 es del cliente 1 (Ana) y del producto 1 (la yerba). En el módulo de unir tablas vas a ver cómo juntarlas.</p>
      <pre class="sql"><code>SELECT nombre, precios FROM productos;</code></pre>
      <pre><code>Error:
no such column: precios</code></pre>
      <table>
        <tr><th>Mensaje</th><th>Qué significa</th><th>Qué revisás</th></tr>
        <tr><td>no such column: precios</td><td>No existe esa columna</td><td>Cómo se escribe: era precio, sin s</td></tr>
        <tr><td>no such table: producto</td><td>No existe esa tabla</td><td>El nombre exacto: productos</td></tr>
        <tr><td>near "FORM": syntax error</td><td>Algo mal escrito cerca de esa palabra</td><td>FORM en lugar de FROM, comas, comillas</td></tr>
      </table>
      <p><strong>Los errores son normales:</strong> el mensaje dice qué no encontró. Leelo y compará con los nombres reales de la tabla.</p>
      <p>Por ejemplo, Sole escribió "precios" y le apareció el error. Corrió SELECT * FROM productos LIMIT 1 para ver los nombres exactos de las columnas y lo corrigió.</p>` },
  ],
  practica: [
    "Corré SELECT * FROM clientes en el laboratorio y anotá cuántas filas y cuántas columnas tiene.",
    "Escribí una consulta que muestre solo el nombre y el stock de los productos y anotá el stock de la yerba.",
    "Escribí a propósito un nombre de tabla mal y anotá el mensaje de error.",
  ],
  recursos: [
    { t: "SQLBolt: lecciones interactivas de SQL (en inglés)", url: "https://sqlbolt.com/" },
    { t: "W3Schools: tutorial de SQL con ejercicios (en inglés)", url: "https://www.w3schools.com/sql/" },
    { t: "Curso de este sitio: Excel y Google Sheets", url: "https://pkeios.github.io/EiaLearning/excel/" },
  ],
  quiz: [
    { q: "Tu base tiene una tabla de productos. ¿Qué es cada fila?", opciones: ["Un dato de todos los productos","La tabla entera","Un producto","Una columna"], correcta: 2, explicacion: "Cada fila es un elemento. \"Un dato de todos\" tienta, pero eso es una columna." },
    { q: "En la tabla de productos, ¿qué es \"precio\"?", opciones: ["Una columna","Una fila","Una tabla","Una base de datos"], correcta: 0, explicacion: "Es un dato que tiene cada producto. Fila tienta, pero una fila es un producto entero." },
    { q: "Si un cliente tiene NULL en barrio, ¿qué significa?", opciones: ["Que vive en el barrio NULL","Que el barrio es cero","Que está mal escrito","Que el dato no está cargado"], correcta: 3, explicacion: "NULL es \"sin dato\". Cero tienta, pero es otra cosa." },
    { q: "Querés ver todas las columnas de la tabla clientes. ¿Qué escribís?", opciones: ["SELECT clientes;","SELECT * FROM clientes;","FROM clientes SELECT *;","SHOW clientes;"], correcta: 1, explicacion: "El asterisco es \"todas las columnas\". El orden es SELECT y después FROM." },
    { q: "Querés solo el nombre y el precio de los productos. ¿Qué escribís?", opciones: ["SELECT * FROM productos;","SELECT nombre precio FROM productos;","SELECT nombre, precio FROM productos;","SELECT FROM productos nombre, precio;"], correcta: 2, explicacion: "Las columnas van separadas por coma. Sin coma tienta, pero lo toma como otra cosa." },
    { q: "Querés espiar una tabla enorme sin traer todo. ¿Qué agregás?", opciones: ["LIMIT 3","STOP 3","TOP","Nada, trae todo igual"], correcta: 0, explicacion: "LIMIT corta la cantidad de filas. \"Nada\" tienta, pero podés traer millones." },
    { q: "Si escribís select en minúsculas, ¿funciona en SQLite?", opciones: ["No, da error","Solo los lunes","Solo con LIMIT","Sí: las mayúsculas son costumbre para que se lea mejor"], correcta: 3, explicacion: "SQL no distingue mayúsculas en sus palabras. \"Da error\" tienta, pero no." },
    { q: "Si la venta 1 tiene cliente_id = 1, ¿qué te dice?", opciones: ["Que compró 1 producto","Que la venta es del cliente con id 1","Que es la primera venta del día","Que no tiene cliente"], correcta: 1, explicacion: "El id apunta a la fila del cliente. La cantidad tienta, pero está en otra columna." },
    { q: "Te aparece \"no such column: precios\". ¿Qué hacés?", opciones: ["Borrás la tabla","Agregás más columnas","Revisás cómo se escribe la columna: es precio","Reiniciás la compu"], correcta: 2, explicacion: "No encontró esa columna. Reiniciar tienta, pero el error es de escritura." },
    { q: "Si te aparece \"no such table: producto\", ¿qué pasó?", opciones: ["El nombre de la tabla está mal: es productos","La tabla está vacía","No hay internet","El precio está mal"], correcta: 0, explicacion: "No existe una tabla con ese nombre. \"Está vacía\" tienta, pero entonces mostraría 0 filas." },
    { q: "Si en el laboratorio cambiaste una consulta y algo salió mal, ¿qué pasa con la base?", opciones: ["Se rompe para siempre","Se borra el curso","Hay que reinstalar","Nada: cada vez arranca de cero"], correcta: 3, explicacion: "El laboratorio vuelve a crear la base. \"Se rompe\" tienta, pero no pasa." },
    { q: "Si no sabés los nombres exactos de las columnas de una tabla, ¿qué corrés?", opciones: ["DELETE FROM tabla;","SELECT * FROM tabla LIMIT 1;","Nada, adivinás","SELECT nombres;"], correcta: 1, explicacion: "Ves una fila con todas las columnas. Adivinar tienta, pero lleva a errores." },
  ],
},
{
  id: "filtrar",
  icono: "🔎",
  titulo: "Filtrar con WHERE",
  nivel: "Básico",
  objetivos: [
    "Filtrar filas con comparaciones: =, >, <, <>",
    "Combinar condiciones con AND y OR, y usar IN y BETWEEN",
    "Buscar texto con LIKE y datos vacíos con IS NULL",
  ],
  lecciones: [
    { titulo: "WHERE: solo las filas que cumplen", html: `
      <p class="idea"><strong>WHERE</strong> filtra: deja solo las filas que cumplen una condición. Se escribe después de FROM.</p>
      <pre class="sql"><code>SELECT nombre, precio FROM productos WHERE precio &gt; 3000;</code></pre>
      <pre><code>Salida:
nombre             | precio
-------------------+-------
Yerba 1 kg         | 3900
Queso cremoso 1 kg | 9800
Gaseosa 2,25 L     | 3200
(3 filas)</code></pre>
      <table>
        <tr><th>Comparación</th><th>Quiere decir</th><th>Ejemplo</th></tr>
        <tr><td>=</td><td>Igual</td><td>categoria = 'Bebidas'</td></tr>
        <tr><td>&lt;&gt;</td><td>Distinto</td><td>categoria &lt;&gt; 'Bebidas'</td></tr>
        <tr><td>&gt; &lt;</td><td>Mayor, menor</td><td>stock &lt; 10</td></tr>
        <tr><td>&gt;= &lt;=</td><td>Mayor o igual, menor o igual</td><td>precio &gt;= 1500</td></tr>
      </table>
      <p><strong>Los textos van entre comillas simples:</strong> 'Bebidas'. Los números, sin comillas: 3000.</p>
      <p><strong>El texto tiene que coincidir exacto:</strong> 'bebidas' (en minúscula) no es lo mismo que 'Bebidas' en una comparación con =.</p>
      <p>Por ejemplo, Sole quería saber qué productos pasan los $3.000 para revisar sus precios. Con un WHERE tuvo la lista de 3 productos.</p>` },
    { titulo: "AND, OR, IN y BETWEEN", html: `
      <p class="idea">Podés combinar condiciones: <strong>AND</strong> pide que se cumplan todas; <strong>OR</strong>, que se cumpla al menos una. <strong>IN</strong> y <strong>BETWEEN</strong> son atajos.</p>
      <pre class="sql"><code>SELECT nombre, stock FROM productos WHERE categoria = 'Lácteos' AND stock &lt; 10;</code></pre>
      <pre><code>Salida:
nombre               | stock
---------------------+------
Queso cremoso 1 kg   | 5
Dulce de leche 400 g | 8
(2 filas)</code></pre>
      <pre class="sql"><code>SELECT nombre, categoria FROM productos WHERE categoria IN ('Bebidas', 'Panadería');</code></pre>
      <pre><code>Salida:
nombre           | categoria
-----------------+----------
Gaseosa 2,25 L   | Bebidas
Agua mineral 2 L | Bebidas
Pan lactal       | Panadería
(3 filas)</code></pre>
      <pre class="sql"><code>SELECT nombre, precio FROM productos WHERE precio BETWEEN 1200 AND 1500 ORDER BY precio;</code></pre>
      <pre><code>Salida:
nombre           | precio
-----------------+-------
Fideos 500 g     | 1200
Leche 1 L        | 1300
Azúcar 1 kg      | 1400
Agua mineral 2 L | 1500
(4 filas)</code></pre>
      <table>
        <tr><th>Escribís</th><th>Es lo mismo que</th></tr>
        <tr><td>categoria IN ('Bebidas', 'Panadería')</td><td>categoria = 'Bebidas' OR categoria = 'Panadería'</td></tr>
        <tr><td>precio BETWEEN 1200 AND 1500</td><td>precio &gt;= 1200 AND precio &lt;= 1500 (incluye los dos extremos)</td></tr>
      </table>
      <p><strong>Ojo al mezclar AND y OR:</strong> usá paréntesis para que quede claro qué va con qué, como en matemática.</p>
      <p>Por ejemplo, Sole quería los lácteos con poco stock para hacer el pedido al distribuidor de lácteos. Con AND juntó las dos condiciones.</p>` },
    { titulo: "LIKE para buscar texto y IS NULL", html: `
      <p class="idea">Con <strong>LIKE</strong> buscás un pedazo de texto usando <strong>%</strong> como comodín. Con <strong>IS NULL</strong> encontrás datos vacíos.</p>
      <pre class="sql"><code>SELECT nombre FROM productos WHERE nombre LIKE '%1 kg%';</code></pre>
      <pre><code>Salida:
nombre
------------------
Yerba 1 kg
Azúcar 1 kg
Queso cremoso 1 kg
(3 filas)</code></pre>
      <table>
        <tr><th>Patrón</th><th>Encuentra</th></tr>
        <tr><td>'Yerba%'</td><td>Lo que empieza con Yerba</td></tr>
        <tr><td>'%kg'</td><td>Lo que termina en kg</td></tr>
        <tr><td>'%leche%'</td><td>Lo que tiene "leche" en cualquier parte</td></tr>
      </table>
      <p>Un <strong>comodín</strong> es un símbolo que reemplaza cualquier cantidad de letras. En SQLite, LIKE no distingue mayúsculas de minúsculas en letras sin tilde.</p>
      <pre class="sql"><code>SELECT nombre FROM clientes WHERE barrio IS NULL;</code></pre>
      <pre><code>Salida:
nombre
---------
Elena Paz
(1 fila)</code></pre>
      <p><strong>Para NULL no sirve =:</strong> barrio = NULL no encuentra nada. Siempre IS NULL (o IS NOT NULL para los que sí tienen dato).</p>
      <p>Por ejemplo, Sole quería llamar a los clientes sin barrio cargado para completar sus datos. Con IS NULL encontró a Elena.</p>` },
  ],
  practica: [
    "Escribí una consulta con los productos de la categoría Almacén y anotá cuántos son.",
    "Combiná dos condiciones con AND (por ejemplo, Bebidas con stock mayor a 10) y anotá el resultado.",
    "Buscá con LIKE los productos que tienen \"leche\" en el nombre y anotá cuántos encontraste.",
  ],
  recursos: [
    { t: "W3Schools: tutorial de SQL con ejercicios (en inglés)", url: "https://www.w3schools.com/sql/" },
    { t: "SQLite: documentación de SELECT (en inglés)", url: "https://www.sqlite.org/lang_select.html" },
    { t: "SQLBolt: lecciones interactivas de SQL (en inglés)", url: "https://sqlbolt.com/" },
  ],
  quiz: [
    { q: "Querés los productos de más de $3000. ¿Qué escribís?", opciones: ["SELECT nombre FROM productos IF precio > 3000;","SELECT nombre WHERE precio > 3000;","SELECT nombre FROM productos WHERE precio > 3000;","SELECT nombre FROM productos ORDER precio > 3000;"], correcta: 2, explicacion: "WHERE filtra y va después de FROM. IF tienta por otros lenguajes, pero en SQL es WHERE." },
    { q: "Querés los productos de la categoría Bebidas. ¿Cómo escribís el texto?", opciones: ["categoria = 'Bebidas'","categoria = Bebidas","categoria = \"Bebidas\" sin cerrar","categoria == Bebidas"], correcta: 0, explicacion: "Los textos van entre comillas simples. Sin comillas tienta, pero lo toma como nombre de columna." },
    { q: "Escribís categoria = 'bebidas' (en minúscula). ¿Qué pasa?", opciones: ["Funciona igual","Da error","Trae todo","No encuentra nada: el texto tiene que coincidir exacto"], correcta: 3, explicacion: "Con = cuenta cada letra. \"Funciona igual\" tienta, pero no." },
    { q: "Querés los productos que NO son Bebidas. ¿Qué comparación usás?", opciones: ["categoria = 'Bebidas'","categoria <> 'Bebidas'","categoria > 'Bebidas'","NOT 'Bebidas'"], correcta: 1, explicacion: "<> es distinto. = tienta, pero es lo contrario." },
    { q: "Querés lácteos con stock menor a 10. ¿Qué une las dos condiciones?", opciones: ["OR","IN","AND","LIKE"], correcta: 2, explicacion: "Se tienen que cumplir las dos. OR tienta, pero alcanzaría con una." },
    { q: "Querés productos de Bebidas o de Panadería. ¿Qué atajo usás?", opciones: ["categoria IN ('Bebidas', 'Panadería')","categoria = 'Bebidas', 'Panadería'","categoria BETWEEN 'Bebidas' AND 'Panadería'","categoria LIKE 'Bebidas Panadería'"], correcta: 0, explicacion: "IN es una lista de valores. BETWEEN tienta, pero es para rangos." },
    { q: "Si escribís precio BETWEEN 1200 AND 1500, ¿entra un producto de $1500?", opciones: ["No, solo hasta 1499","Depende del día","No, BETWEEN excluye todo","Sí: BETWEEN incluye los dos extremos"], correcta: 3, explicacion: "Incluye 1200 y 1500. \"Hasta 1499\" tienta, pero los extremos cuentan." },
    { q: "Si mezclás AND y OR en una condición larga, ¿qué conviene?", opciones: ["Nada, se entiende solo","Usar paréntesis para que quede claro qué va con qué","Usar solo OR","Escribirlo todo en mayúsculas"], correcta: 1, explicacion: "Como en matemática, los paréntesis aclaran. \"Se entiende solo\" tienta, pero puede dar otro resultado." },
    { q: "Querés los productos cuyo nombre empieza con Yerba. ¿Qué patrón usás?", opciones: ["LIKE '%Yerba'","= 'Yerba'","LIKE 'Yerba%'","LIKE 'Yerba'"], correcta: 2, explicacion: "% al final: lo que empieza con Yerba. \"%Yerba\" tienta, pero sería lo que termina con Yerba." },
    { q: "Querés todo lo que tenga 'leche' en cualquier parte del nombre. ¿Qué patrón?", opciones: ["LIKE '%leche%'","LIKE 'leche'","= '%leche%'","LIKE 'leche%'"], correcta: 0, explicacion: "% a los dos lados. \"= %leche%\" tienta, pero = no usa comodines." },
    { q: "Querés los clientes sin barrio cargado. ¿Qué escribís?", opciones: ["WHERE barrio = NULL","WHERE barrio = ''","WHERE barrio = 0","WHERE barrio IS NULL"], correcta: 3, explicacion: "Para NULL es IS NULL. \"= NULL\" tienta, pero no encuentra nada." },
    { q: "Querés los clientes que sí tienen barrio. ¿Qué escribís?", opciones: ["WHERE barrio <> NULL","WHERE barrio IS NOT NULL","WHERE barrio","WHERE NOT barrio"], correcta: 1, explicacion: "Es IS NOT NULL. \"<> NULL\" tienta, pero no funciona con NULL." },
  ],
},
{
  id: "ordenar",
  icono: "↕️",
  titulo: "Ordenar, limitar y calcular",
  nivel: "Intermedio",
  objetivos: [
    "Ordenar resultados con ORDER BY, de menor a mayor o al revés",
    "Quedarte con los primeros resultados con LIMIT y quitar repetidos con DISTINCT",
    "Calcular columnas nuevas y nombrarlas con AS",
  ],
  lecciones: [
    { titulo: "ORDER BY y LIMIT", video: {"id":"1Kt5HDyL8SY","t":"Tutorial SQL básico: cláusula ORDER BY y LIMIT · Eze Talamona (8:26)"}, html: `
      <p class="idea"><strong>ORDER BY</strong> ordena los resultados por una columna; <strong>DESC</strong> los da vuelta (de mayor a menor). <strong>LIMIT</strong> se queda con los primeros.</p>
      <pre class="sql"><code>SELECT nombre, precio FROM productos ORDER BY precio DESC LIMIT 3;</code></pre>
      <pre><code>Salida:
nombre             | precio
-------------------+-------
Queso cremoso 1 kg | 9800
Yerba 1 kg         | 3900
Gaseosa 2,25 L     | 3200
(3 filas)</code></pre>
      <pre><code>El orden de las partes de una consulta:
SELECT   columnas
FROM     tabla
WHERE    condición
ORDER BY columna DESC
LIMIT    cantidad;</code></pre>
      <table>
        <tr><th>Escribís</th><th>Orden</th></tr>
        <tr><td>ORDER BY precio</td><td>De menor a mayor (ASC, es lo que hace si no decís nada)</td></tr>
        <tr><td>ORDER BY precio DESC</td><td>De mayor a menor</td></tr>
        <tr><td>ORDER BY nombre</td><td>Alfabético</td></tr>
        <tr><td>ORDER BY categoria, precio</td><td>Primero por categoría y, dentro de cada una, por precio</td></tr>
      </table>
      <p><strong>"Los 3 más caros"</strong> se resuelve siempre igual: ORDER BY ... DESC y LIMIT 3. Sin ORDER BY, LIMIT trae los primeros que encuentre, sin ningún criterio.</p>
      <p>Por ejemplo, Sole quería poner un cartel con los 3 productos más caros para controlar sus precios contra otros almacenes. Con ORDER BY y LIMIT los tuvo al instante.</p>` },
    { titulo: "DISTINCT y columnas calculadas", html: `
      <p class="idea"><strong>DISTINCT</strong> saca los repetidos. Y podés <strong>calcular</strong> columnas nuevas con + - * / y ponerles nombre con <strong>AS</strong>.</p>
      <pre class="sql"><code>SELECT DISTINCT categoria FROM productos ORDER BY categoria;</code></pre>
      <pre><code>Salida:
categoria
---------
Almacén
Bebidas
Lácteos
Panadería
(4 filas)</code></pre>
      <pre class="sql"><code>SELECT nombre, precio * stock AS valor_en_stock FROM productos ORDER BY valor_en_stock DESC LIMIT 5;</code></pre>
      <pre><code>Salida:
nombre             | valor_en_stock
-------------------+---------------
Yerba 1 kg         | 97500
Galletitas de agua | 66000
Fideos 500 g       | 60000
Gaseosa 2,25 L     | 57600
Azúcar 1 kg        | 56000
(5 filas)</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>precio * stock</td><td>Multiplica en cada fila: cuánta plata hay en mercadería de ese producto</td></tr>
        <tr><td>AS valor_en_stock</td><td>Le pone un nombre a la columna nueva (un <strong>alias</strong>)</td></tr>
        <tr><td>ORDER BY valor_en_stock</td><td>Se puede ordenar por el alias</td></tr>
      </table>
      <p>Un <strong>alias</strong> es un nombre que le das a una columna (o a una tabla) dentro de la consulta. No cambia la base: solo el resultado.</p>
      <p><strong>Nombres de alias sin espacios</strong> (valor_en_stock): si llevan espacios, hay que ponerlos entre comillas, y es más fácil equivocarse.</p>
      <p>Por ejemplo, Sole quería saber en qué productos tiene más plata inmovilizada. La yerba encabezaba la lista con $97.500, aunque no es el producto más caro.</p>` },
    { titulo: "Combinar todo", html: `
      <p class="idea">Las partes se combinan en una sola consulta: <strong>filtrar, calcular, ordenar y limitar</strong>. Escribila de a una parte y probá en cada paso.</p>
      <pre class="sql"><code>SELECT nombre, stock FROM productos WHERE stock &lt; 10 ORDER BY stock;</code></pre>
      <pre><code>Salida:
nombre               | stock
---------------------+------
Agua mineral 2 L     | 0
Queso cremoso 1 kg   | 5
Dulce de leche 400 g | 8
(3 filas)</code></pre>
      <pre class="sql"><code>SELECT nombre, precio FROM productos WHERE categoria = 'Almacén' OR precio &gt; 5000 ORDER BY nombre;</code></pre>
      <pre><code>Salida:
nombre             | precio
-------------------+-------
Azúcar 1 kg        | 1400
Fideos 500 g       | 1200
Galletitas de agua | 1100
Queso cremoso 1 kg | 9800
Yerba 1 kg         | 3900
(5 filas)</code></pre>
      <pre><code>Armar una consulta de a pasos:
1. SELECT * FROM productos;                     ¿qué hay?
2. ... WHERE stock &lt; 10                          ¿cuáles me interesan?
3. SELECT nombre, stock ... WHERE stock &lt; 10     ¿qué columnas necesito?
4. ... ORDER BY stock                            ¿en qué orden?</code></pre>
      <p><strong>De a un paso:</strong> si escribís todo de golpe y da error, no sabés qué parte falla. Agregando de a una, el error aparece justo en lo último que pusiste.</p>
      <p><strong>Comentarios:</strong> en SQL, lo que va después de dos guiones (--) es un comentario y no se ejecuta. Sirve para anotar qué hace una consulta.</p>
      <p>Por ejemplo, Sole armó la lista de reposición: productos con menos de 10 unidades, ordenados del que menos tiene al que más. El agua, con 0, quedó arriba de todo.</p>` },
  ],
  practica: [
    "Escribí una consulta con los 3 productos más baratos y anotá cuáles son.",
    "Calculá el valor en stock (precio por stock) de los productos de Lácteos y anotá el más alto.",
    "Armá de a pasos una consulta con WHERE, ORDER BY y LIMIT, y anotá cuántos pasos usaste.",
  ],
  recursos: [
    { t: "SQLite: documentación de SELECT (en inglés)", url: "https://www.sqlite.org/lang_select.html" },
    { t: "W3Schools: tutorial de SQL con ejercicios (en inglés)", url: "https://www.w3schools.com/sql/" },
    { t: "SQLBolt: lecciones interactivas de SQL (en inglés)", url: "https://sqlbolt.com/" },
  ],
  quiz: [
    { q: "Querés los productos del más caro al más barato. ¿Qué escribís?", opciones: ["ORDER BY precio","SORT precio DOWN","ORDER BY precio DESC","ORDER precio MAX"], correcta: 2, explicacion: "DESC es de mayor a menor. Sin DESC tienta, pero ordena de menor a mayor." },
    { q: "Si escribís ORDER BY precio sin nada más, ¿cómo ordena?", opciones: ["De menor a mayor","De mayor a menor","Al azar","Alfabético"], correcta: 0, explicacion: "ASC es lo que hace por defecto. De mayor a menor tienta, pero eso es DESC." },
    { q: "Querés los 3 productos más caros. ¿Qué combinás?", opciones: ["Solo LIMIT 3","Solo ORDER BY precio","WHERE precio = MAX","ORDER BY precio DESC y LIMIT 3"], correcta: 3, explicacion: "Primero ordenás y después cortás. Solo LIMIT tienta, pero trae 3 cualquiera." },
    { q: "Usás LIMIT sin ORDER BY. ¿Qué filas trae?", opciones: ["Las más importantes","Las primeras que encuentre, sin un criterio","Las más caras","Las más nuevas"], correcta: 1, explicacion: "Sin orden, no hay criterio. \"Las más importantes\" tienta, pero SQL no lo sabe." },
    { q: "¿En qué orden van las partes de una consulta?", opciones: ["FROM, SELECT, LIMIT, WHERE","SELECT, ORDER BY, FROM, WHERE","SELECT, FROM, WHERE, ORDER BY, LIMIT","WHERE, SELECT, FROM"], correcta: 2, explicacion: "El orden es fijo. Mezclarlo tienta al escribir rápido, pero da error." },
    { q: "Querés ver las categorías sin repetir. ¿Qué usás?", opciones: ["SELECT DISTINCT categoria","SELECT UNIQUE categoria siempre","SELECT categoria LIMIT 1","SELECT ONE categoria"], correcta: 0, explicacion: "DISTINCT saca repetidos. LIMIT 1 tienta, pero trae una sola." },
    { q: "Querés saber cuánta plata hay en stock de cada producto. ¿Qué calculás?", opciones: ["precio + stock","precio / stock","stock - precio","precio * stock"], correcta: 3, explicacion: "Precio por unidades. La suma tienta, pero no tiene sentido sumar pesos y unidades." },
    { q: "Querés que la columna calculada se llame valor_en_stock. ¿Qué escribís?", opciones: ["precio * stock = valor_en_stock","precio * stock AS valor_en_stock","valor_en_stock(precio * stock)","NAME valor_en_stock"], correcta: 1, explicacion: "AS pone el alias. \"=\" tienta, pero en SELECT no sirve para nombrar." },
    { q: "Ponerle un alias a una columna, ¿cambia la base de datos?", opciones: ["Sí, renombra la columna para siempre","Sí, borra la columna original","No: solo cambia cómo se ve el resultado","Sí, crea una tabla"], correcta: 2, explicacion: "El alias vive solo en esa consulta. \"Renombra para siempre\" tienta, pero no." },
    { q: "Si escribiste una consulta larga de golpe y da error, ¿qué conviene?", opciones: ["Armarla de a pasos y probar en cada uno","Borrar todo y rendirse","Agregar más condiciones","Pasarla a mayúsculas"], correcta: 0, explicacion: "De a pasos ves qué parte falla. Agregar más tienta, pero suma errores." },
    { q: "Si escribís -- productos para reponer al principio de una consulta, ¿qué es?", opciones: ["Un error","Un filtro","Una resta","Un comentario que no se ejecuta"], correcta: 3, explicacion: "Dos guiones marcan un comentario. \"Una resta\" tienta por los guiones, pero no." },
    { q: "Querés los productos con menos de 10 de stock, del que menos tiene al que más. ¿Qué escribís?", opciones: ["WHERE stock < 10 ORDER BY stock DESC","WHERE stock < 10 ORDER BY stock","ORDER BY stock WHERE stock < 10","WHERE stock > 10 ORDER BY stock"], correcta: 1, explicacion: "Primero WHERE y después ORDER BY, ascendente. DESC tienta, pero pone primero el que más tiene." },
  ],
},
{
  id: "resumir",
  icono: "🧮",
  titulo: "Resumir: contar, sumar y agrupar",
  nivel: "Intermedio",
  objetivos: [
    "Usar COUNT, SUM, AVG, MIN y MAX para resumir una tabla",
    "Agrupar con GROUP BY para obtener un resumen por categoría",
    "Filtrar grupos con HAVING y distinguirlo de WHERE",
  ],
  lecciones: [
    { titulo: "Funciones de resumen", html: `
      <p class="idea">Las <strong>funciones de resumen</strong> convierten muchas filas en un solo número: cuántas hay, cuánto suman, el promedio, el mínimo y el máximo.</p>
      <pre class="sql"><code>SELECT COUNT(*) AS productos, SUM(stock) AS unidades, AVG(precio) AS precio_promedio, MIN(precio) AS mas_barato, MAX(precio) AS mas_caro FROM productos;</code></pre>
      <pre><code>Salida:
productos | unidades | precio_promedio | mas_barato | mas_caro
----------+----------+-----------------+------------+---------
10        | 248      | 2890            | 1100       | 9800
(1 fila)</code></pre>
      <table>
        <tr><th>Función</th><th>Qué calcula</th></tr>
        <tr><td>COUNT(*)</td><td>Cuántas filas hay</td></tr>
        <tr><td>COUNT(columna)</td><td>Cuántas filas tienen ese dato cargado (no cuenta los NULL)</td></tr>
        <tr><td>SUM(columna)</td><td>La suma</td></tr>
        <tr><td>AVG(columna)</td><td>El promedio</td></tr>
        <tr><td>MIN / MAX</td><td>El menor y el mayor</td></tr>
      </table>
      <pre class="sql"><code>SELECT COUNT(*) AS clientes_con_barrio, COUNT(barrio) AS barrios_cargados FROM clientes;</code></pre>
      <pre><code>Salida:
clientes_con_barrio | barrios_cargados
--------------------+-----------------
5                   | 4
(1 fila)</code></pre>
      <p><strong>Ojo con el nombre del alias:</strong> en la consulta de arriba, "clientes_con_barrio" está mal elegido: COUNT(*) cuenta todos los clientes (5), con o sin barrio. Un buen alias dice lo que de verdad calcula; "clientes" hubiera sido mejor.</p>
      <p>Por ejemplo, Sole quería saber cuántas unidades tiene en total en el almacén: SUM(stock) le dio 248.</p>` },
    { titulo: "GROUP BY: un resumen por grupo", video: {"id":"TZ3G8nZYwfc","t":"Sentencias GROUP BY y HAVING en SQL · Rocío Chávez Ciencia de Datos (5:41)"}, html: `
      <p class="idea"><strong>GROUP BY</strong> arma grupos (por ejemplo, por categoría) y calcula el resumen <strong>de cada grupo</strong>. Es como una tabla dinámica de Excel.</p>
      <pre class="sql"><code>SELECT categoria, COUNT(*) AS productos, SUM(stock) AS unidades FROM productos GROUP BY categoria ORDER BY productos DESC, categoria;</code></pre>
      <pre><code>Salida:
categoria | productos | unidades
----------+-----------+---------
Almacén   | 4         | 175
Lácteos   | 3         | 43
Bebidas   | 2         | 18
Panadería | 1         | 12
(4 filas)</code></pre>
      <pre><code>Cómo lo piensa SQL:
1. Junta las filas por categoría (4 grupos).
2. En cada grupo cuenta productos y suma el stock.
3. Devuelve una fila por grupo.</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Lo que va en SELECT sin función de resumen tiene que ir en GROUP BY</td><td>Si no, SQL no sabe qué valor mostrar de cada grupo</td></tr>
        <tr><td>Podés ordenar por el resumen (ORDER BY productos DESC)</td><td>Para ver primero los grupos más grandes</td></tr>
      </table>
      <p><strong>Una tabla dinámica</strong> en una planilla hace exactamente esto: agrupar y resumir. Si la usaste, ya conocés la idea.</p>
      <p>Por ejemplo, Sole quería saber qué categoría ocupa más lugar en el depósito: Almacén, con 175 unidades en 4 productos.</p>` },
    { titulo: "HAVING: filtrar grupos", html: `
      <p class="idea"><strong>WHERE</strong> filtra filas <strong>antes</strong> de agrupar; <strong>HAVING</strong> filtra grupos <strong>después</strong> de calcular el resumen.</p>
      <pre class="sql"><code>SELECT categoria, AVG(precio) AS promedio FROM productos GROUP BY categoria HAVING AVG(precio) &gt; 2000 ORDER BY promedio DESC;</code></pre>
      <pre><code>Salida:
categoria | promedio
----------+---------
Lácteos   | 4566.67
Panadería | 2900
Bebidas   | 2350
(3 filas)</code></pre>
      <table>
        <tr><th></th><th>WHERE</th><th>HAVING</th></tr>
        <tr><td>Filtra</td><td>Filas</td><td>Grupos</td></tr>
        <tr><td>Cuándo</td><td>Antes de agrupar</td><td>Después de agrupar</td></tr>
        <tr><td>Puede usar funciones de resumen</td><td>No</td><td>Sí</td></tr>
        <tr><td>Ejemplo</td><td>WHERE stock &gt; 0</td><td>HAVING AVG(precio) &gt; 2000</td></tr>
      </table>
      <p><strong>Almacén no aparece</strong> porque su promedio (1900) no pasa de 2000. Los decimales del laboratorio se muestran con hasta 2 cifras.</p>
      <p><strong>Se pueden usar los dos juntos:</strong> WHERE para sacar filas que no te interesan y HAVING para quedarte con los grupos que cumplen.</p>
      <p>Por ejemplo, Sole quería saber qué categorías tienen precio promedio alto para revisar márgenes. Con HAVING vio que Lácteos encabezaba con más de $4.500 de promedio.</p>` },
  ],
  practica: [
    "Calculá el precio promedio y el stock total de los productos de Lácteos con WHERE y funciones de resumen. Anotá los dos números.",
    "Agrupá los productos por categoría y anotá cuál tiene el precio promedio más bajo.",
    "Escribí una consulta con GROUP BY y HAVING que muestre solo las categorías con más de 1 producto, y anotá cuántas son.",
  ],
  recursos: [
    { t: "SQLite: funciones de resumen (COUNT, SUM, AVG...) (en inglés)", url: "https://www.sqlite.org/lang_aggfunc.html" },
    { t: "W3Schools: tutorial de SQL con ejercicios (en inglés)", url: "https://www.w3schools.com/sql/" },
    { t: "Curso de este sitio: Excel y Google Sheets", url: "https://pkeios.github.io/EiaLearning/excel/" },
  ],
  quiz: [
    { q: "Querés saber cuántos productos hay en la tabla. ¿Qué usás?", opciones: ["SUM(*)","MAX(id) siempre","COUNT(*)","TOTAL"], correcta: 2, explicacion: "COUNT cuenta filas. MAX(id) tienta, pero si se borró alguno, no coincide." },
    { q: "Querés el total de unidades en stock. ¿Qué usás?", opciones: ["SUM(stock)","COUNT(stock)","AVG(stock)","MAX(stock)"], correcta: 0, explicacion: "SUM suma. COUNT tienta, pero cuenta filas, no unidades." },
    { q: "Querés el producto más barato. ¿Qué función te da su precio?", opciones: ["MAX(precio)","AVG(precio)","COUNT(precio)","MIN(precio)"], correcta: 3, explicacion: "MIN da el menor. AVG tienta, pero es el promedio." },
    { q: "Si hay 5 clientes y uno no tiene barrio, ¿qué da COUNT(barrio)?", opciones: ["5","4: no cuenta los NULL","0","1"], correcta: 1, explicacion: "COUNT(columna) ignora los NULL. 5 tienta, pero eso es COUNT(*)." },
    { q: "Si escribís COUNT(*) AS clientes_con_barrio, ¿qué problema tiene?", opciones: ["Ninguno","Que es muy largo","El alias no dice lo que calcula: cuenta todos los clientes","Que da error"], correcta: 2, explicacion: "Un buen alias describe el cálculo. \"Ninguno\" tienta porque el número es correcto." },
    { q: "Querés cuántos productos hay en cada categoría. ¿Qué usás?", opciones: ["GROUP BY categoria con COUNT(*)","ORDER BY categoria","DISTINCT categoria","WHERE categoria"], correcta: 0, explicacion: "GROUP BY arma un grupo por categoría. DISTINCT tienta, pero solo lista sin contar." },
    { q: "Ponés categoria en el SELECT y usás COUNT(*). ¿Qué tiene que tener la consulta?", opciones: ["LIMIT 1","ORDER BY COUNT","Nada más","GROUP BY categoria"], correcta: 3, explicacion: "Lo que no está resumido va en GROUP BY. \"Nada más\" tienta, pero el resultado no tiene sentido." },
    { q: "Si GROUP BY en SQL se parece a algo de las planillas, ¿a qué?", opciones: ["A un gráfico de torta","A una tabla dinámica","A una fórmula BUSCARV","A un filtro de color"], correcta: 1, explicacion: "Agrupa y resume. BUSCARV tienta, pero se parece más a un JOIN." },
    { q: "Querés solo las categorías con precio promedio mayor a 2000. ¿Qué usás?", opciones: ["WHERE AVG(precio) > 2000","LIMIT 2000","HAVING AVG(precio) > 2000","ORDER BY 2000"], correcta: 2, explicacion: "HAVING filtra grupos ya resumidos. WHERE tienta, pero no acepta funciones de resumen." },
    { q: "¿Cuándo filtra WHERE?", opciones: ["Antes de agrupar, fila por fila","Después de agrupar","Nunca con GROUP BY","Solo en tablas chicas"], correcta: 0, explicacion: "WHERE va antes. \"Después\" tienta, pero eso es HAVING." },
    { q: "Querés el promedio por categoría, pero sin contar productos con stock 0. ¿Qué usás?", opciones: ["HAVING stock > 0","LIMIT 0","ORDER BY stock","WHERE stock > 0 antes del GROUP BY"], correcta: 3, explicacion: "Sacar filas es tarea de WHERE. HAVING tienta, pero filtra grupos." },
    { q: "El laboratorio muestra 4566.67 como promedio. ¿Por qué tiene 2 decimales?", opciones: ["Porque está mal","Porque el laboratorio muestra hasta 2 cifras decimales","Porque los precios tienen centavos","Porque es un error de SQL"], correcta: 1, explicacion: "Es la forma de mostrar del laboratorio. \"Está mal\" tienta, pero es un promedio con decimales." },
  ],
},
{
  id: "unir",
  icono: "🔗",
  titulo: "Unir tablas con JOIN",
  nivel: "Intermedio",
  objetivos: [
    "Explicar por qué los datos se guardan en varias tablas relacionadas por id",
    "Unir dos o tres tablas con JOIN para responder una pregunta",
    "Usar LEFT JOIN para encontrar lo que no tiene pareja, como clientes sin compras",
  ],
  lecciones: [
    { titulo: "Por qué hay varias tablas", html: `
      <p class="idea">En una base bien armada, cada cosa se guarda <strong>una sola vez</strong>: los productos en su tabla, los clientes en la suya. La tabla de ventas solo guarda los <strong>id</strong> que los conectan.</p>
      <pre><code>ventas                          productos
id | cliente_id | producto_id   id | nombre
1  | 1          | 1    ──────►  1  | Yerba 1 kg
2  | 2          | 3    ──────►  3  | Leche 1 L
          │
          ▼
clientes
id | nombre
1  | Ana López
2  | Bruno Díaz</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th><th>Ejemplo</th></tr>
        <tr><td>Clave primaria</td><td>La columna que identifica cada fila sin repetirse</td><td>productos.id</td></tr>
        <tr><td>Clave foránea</td><td>Una columna que apunta a la clave primaria de otra tabla</td><td>ventas.producto_id apunta a productos.id</td></tr>
        <tr><td>Relación</td><td>El vínculo entre las dos tablas</td><td>Cada venta es de un producto</td></tr>
      </table>
      <p><strong>¿Por qué no escribir el nombre en cada venta?</strong> Si la yerba cambia de nombre o de precio, lo cambiás en un solo lugar. Con el nombre repetido en 500 ventas, tendrías que cambiar 500 filas y alguna se te escaparía.</p>
      <p><strong>Para leer una venta completa</strong> hay que juntar las tablas: eso hace JOIN, en la próxima lección.</p>
      <p>Por ejemplo, Sole antes anotaba "Yerba Playadito 1 kg", "yerba 1kg" y "Yerba 1 kilo" en distintas ventas, y nunca le daban las cuentas. Con un id por producto, la yerba es siempre el producto 1.</p>` },
    { titulo: "JOIN: juntar dos o más tablas", video: {"id":"qCfMFF1SjjQ","t":"Qué son los JOINS en SQL y cómo combinás tablas · Rafa Gonzalez Gouveia (8:17)"}, html: `
      <p class="idea"><strong>JOIN</strong> junta filas de dos tablas cuando una columna coincide con otra: "traeme cada venta con el nombre de su producto".</p>
      <pre class="sql"><code>SELECT v.fecha, p.nombre, v.cantidad FROM ventas v JOIN productos p ON p.id = v.producto_id WHERE v.fecha = '2026-03-03';</code></pre>
      <pre><code>Salida:
fecha      | nombre             | cantidad
-----------+--------------------+---------
2026-03-03 | Queso cremoso 1 kg | 1
2026-03-03 | Gaseosa 2,25 L     | 2
(2 filas)</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>FROM ventas v</td><td>Empieza por ventas y le pone el alias corto "v"</td></tr>
        <tr><td>JOIN productos p</td><td>Suma la tabla productos con el alias "p"</td></tr>
        <tr><td>ON p.id = v.producto_id</td><td>Las une donde el id del producto coincide</td></tr>
        <tr><td>v.fecha, p.nombre</td><td>Con el alias decís de qué tabla es cada columna</td></tr>
      </table>
      <pre class="sql"><code>SELECT v.fecha, p.nombre AS producto, v.cantidad * p.precio AS total FROM ventas v JOIN clientes c ON c.id = v.cliente_id JOIN productos p ON p.id = v.producto_id WHERE c.nombre = 'Ana López' ORDER BY v.fecha;</code></pre>
      <pre><code>Salida:
fecha      | producto           | total
-----------+--------------------+------
2026-03-02 | Yerba 1 kg         | 7800
2026-03-03 | Queso cremoso 1 kg | 9800
2026-03-05 | Leche 1 L          | 2600
2026-03-07 | Gaseosa 2,25 L     | 3200
(4 filas)</code></pre>
      <p><strong>Se pueden encadenar varios JOIN:</strong> la segunda consulta junta tres tablas para ver qué compró Ana y cuánto gastó en cada compra.</p>
      <p><strong>El ON es la clave:</strong> si te olvidás el ON o unís columnas equivocadas, el resultado mezcla todo con todo.</p>
      <p>Por ejemplo, Ana le preguntó a Sole cuánto había gastado en marzo. Con dos JOIN, Sole le mostró sus 4 compras con el total de cada una.</p>` },
    { titulo: "LEFT JOIN: lo que no tiene pareja", video: {"id":"nw6tK0E5iyo","t":"Consultas SQL: LEFT y RIGHT JOIN · TodoCode (8:03)"}, html: `
      <p class="idea">El JOIN común solo muestra las filas que tienen pareja en las dos tablas. <strong>LEFT JOIN</strong> muestra <strong>todas las filas de la primera tabla</strong>, aunque no tengan pareja.</p>
      <pre class="sql"><code>SELECT c.nombre, COUNT(v.id) AS compras FROM clientes c LEFT JOIN ventas v ON v.cliente_id = c.id GROUP BY c.id ORDER BY compras DESC, c.nombre;</code></pre>
      <pre><code>Salida:
nombre     | compras
-----------+--------
Ana López  | 4
Bruno Díaz | 3
Carla Ruiz | 3
Diego Sosa | 2
Elena Paz  | 0
(5 filas)</code></pre>
      <pre class="sql"><code>SELECT p.nombre FROM productos p LEFT JOIN ventas v ON v.producto_id = p.id WHERE v.id IS NULL;</code></pre>
      <pre><code>Salida:
nombre
------------------
Azúcar 1 kg
Galletitas de agua
Agua mineral 2 L
(3 filas)</code></pre>
      <table>
        <tr><th>JOIN</th><th>Muestra</th><th>Sirve para</th></tr>
        <tr><td>JOIN (o INNER JOIN)</td><td>Solo las filas con pareja en las dos tablas</td><td>Ventas con su producto</td></tr>
        <tr><td>LEFT JOIN</td><td>Todas las de la izquierda, con o sin pareja (sin pareja: NULL)</td><td>Clientes sin compras, productos sin ventas</td></tr>
      </table>
      <p><strong>El truco de "lo que falta":</strong> LEFT JOIN y después WHERE la otra tabla IS NULL. Así encontrás los productos que nunca se vendieron.</p>
      <p>Por ejemplo, Sole descubrió con LEFT JOIN que Elena nunca compró y que el azúcar, las galletitas y el agua no se vendieron en toda la semana. Decidió ponerlos en oferta.</p>` },
  ],
  practica: [
    "Uní ventas con productos y mostrá las ventas del 2026-03-05 con el nombre del producto. Anotá cuántas son.",
    "Uní las tres tablas y mostrá qué compró Bruno Díaz y el total de cada compra. Anotá el total más grande.",
    "Con LEFT JOIN, encontrá los productos que nunca se vendieron y anotá cuántos son.",
  ],
  recursos: [
    { t: "SQLite: documentación de SELECT (en inglés)", url: "https://www.sqlite.org/lang_select.html" },
    { t: "W3Schools: tutorial de SQL con ejercicios (en inglés)", url: "https://www.w3schools.com/sql/" },
    { t: "SQLBolt: lecciones interactivas de SQL (en inglés)", url: "https://sqlbolt.com/" },
  ],
  quiz: [
    { q: "La tabla de ventas guarda producto_id en lugar del nombre. ¿Por qué?", opciones: ["Para ocupar más lugar","Porque SQL no acepta textos","Para guardar cada producto una sola vez y cambiarlo en un solo lugar","Para que sea más difícil"], correcta: 2, explicacion: "Así no se repiten datos. \"SQL no acepta textos\" tienta, pero sí los acepta." },
    { q: "ventas.producto_id apunta a productos.id. ¿Qué es producto_id?", opciones: ["Una clave foránea","Una clave primaria de ventas","Un alias","Una función de resumen"], correcta: 0, explicacion: "Apunta a otra tabla. Clave primaria tienta, pero esa es ventas.id." },
    { q: "Si escribiste el nombre del producto en cada venta y cambió el nombre, ¿qué pasa?", opciones: ["Se cambia solo","No pasa nada","Se borra la venta","Tenés que cambiarlo en todas las ventas y alguna se puede escapar"], correcta: 3, explicacion: "Por eso se usan id. \"Se cambia solo\" tienta, pero no." },
    { q: "Querés cada venta con el nombre del producto. ¿Qué usás?", opciones: ["WHERE ventas = productos","JOIN productos ON productos.id = ventas.producto_id","GROUP BY producto_id","ORDER BY nombre"], correcta: 1, explicacion: "JOIN junta las tablas por la columna que coincide. WHERE tienta, pero no junta tablas así." },
    { q: "Si escribís FROM ventas v, ¿qué es la v?", opciones: ["Una columna","Un error","Un alias corto para la tabla ventas","Un filtro"], correcta: 2, explicacion: "Te deja escribir v.fecha. \"Un error\" tienta si no lo viste antes." },
    { q: "Si hiciste un JOIN sin ON, ¿qué pasa?", opciones: ["Mezcla todo con todo y el resultado no tiene sentido","Funciona igual","Une solo lo que coincide","Borra la tabla"], correcta: 0, explicacion: "El ON dice cómo unir. \"Funciona igual\" tienta, pero da combinaciones sin sentido." },
    { q: "Querés qué compró un cliente y el nombre de cada producto. ¿Cuántas tablas unís?", opciones: ["Una: ventas","Dos: clientes y productos","Ninguna","Tres: ventas, clientes y productos"], correcta: 3, explicacion: "Ventas conecta a las otras dos. Clientes y productos solas tientan, pero no tienen la relación." },
    { q: "Querés ver todos los clientes, aunque no hayan comprado. ¿Qué JOIN usás?", opciones: ["JOIN común","LEFT JOIN desde clientes","Ninguno","RIGHT JOIN desde clientes"], correcta: 1, explicacion: "LEFT JOIN mantiene todas las filas de la izquierda. El JOIN común tienta, pero deja afuera a quien no compró." },
    { q: "Con LEFT JOIN, un cliente sin compras, ¿qué tiene en las columnas de ventas?", opciones: ["0 siempre","Las ventas de otro","NULL","Un error"], correcta: 2, explicacion: "Sin pareja, NULL. 0 tienta, pero COUNT lo transforma en 0 recién al contar." },
    { q: "Querés los productos que nunca se vendieron. ¿Qué combinás?", opciones: ["LEFT JOIN con ventas y WHERE ventas.id IS NULL","JOIN común con ventas","WHERE stock = 0","ORDER BY ventas"], correcta: 0, explicacion: "Lo que no tiene pareja queda en NULL. stock = 0 tienta, pero es otra cosa." },
    { q: "Si contás compras por cliente con LEFT JOIN, ¿qué contás para que dé 0 a quien no compró?", opciones: ["COUNT(*)","SUM(v.id)","MAX(v.id)","COUNT(v.id)"], correcta: 3, explicacion: "COUNT(columna) no cuenta NULL. COUNT(*) tienta, pero contaría 1 para quien no compró." },
    { q: "¿Qué muestra un JOIN común (INNER JOIN)?", opciones: ["Todas las filas de las dos tablas","Solo las filas con pareja en las dos tablas","Solo las de la izquierda","Solo las que no coinciden"], correcta: 1, explicacion: "Une donde coincide. \"Todas\" tienta, pero eso no lo hace." },
  ],
},
{
  id: "cambiar",
  icono: "✏️",
  titulo: "Cambiar datos con cuidado",
  nivel: "Avanzado",
  objetivos: [
    "Agregar filas con INSERT",
    "Modificar y borrar con UPDATE y DELETE sin olvidar el WHERE",
    "Crear una tabla nueva con CREATE TABLE",
  ],
  lecciones: [
    { titulo: "INSERT: agregar filas", video: {"id":"KkEzKNaQVvA","t":"SQL: insert, update, delete · Universitat Politècnica de València - UPV (5:27)"}, html: `
      <p class="idea"><strong>INSERT INTO</strong> agrega una fila nueva. Decís en qué tabla, qué columnas y qué valores.</p>
      <pre class="sql"><code>INSERT INTO productos (nombre, categoria, precio, stock) VALUES ('Mate de calabaza', 'Bazar', 8500, 6);
SELECT nombre, precio FROM productos WHERE categoria = 'Bazar';</code></pre>
      <pre><code>Salida:
✔ 1 fila cambiada

nombre           | precio
-----------------+-------
Mate de calabaza | 8500
(1 fila)</code></pre>
      <pre><code>INSERT INTO tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...);
- Los valores van en el mismo orden que las columnas.
- Los textos entre comillas simples; los números sin comillas.
- El id no hace falta: la base lo pone sola (es la clave primaria).</code></pre>
      <p><strong>Varias consultas juntas:</strong> en el laboratorio podés escribir varias separadas por punto y coma; se corren en orden. Acá primero se agrega el mate y después se consulta.</p>
      <p><strong>En el laboratorio no se rompe nada:</strong> cada vez la base vuelve a empezar, así que el mate desaparece en la próxima ejecución. En una base real, el cambio queda guardado.</p>
      <p>Por ejemplo, Sole empezó a vender mates y agregó el producto nuevo con un INSERT. Ya aparece en sus consultas de stock y de ventas.</p>` },
    { titulo: "UPDATE y DELETE: siempre con WHERE", html: `
      <p class="idea"><strong>UPDATE</strong> cambia datos y <strong>DELETE</strong> borra filas. Las dos <strong>necesitan WHERE</strong>: sin WHERE, cambian o borran <strong>toda la tabla</strong>.</p>
      <pre class="sql"><code>UPDATE productos SET precio = precio * 1.1 WHERE categoria = 'Bebidas';
SELECT nombre, precio FROM productos WHERE categoria = 'Bebidas';</code></pre>
      <pre><code>Salida:
✔ 2 filas cambiadas

nombre           | precio
-----------------+-------
Gaseosa 2,25 L   | 3520
Agua mineral 2 L | 1650
(2 filas)</code></pre>
      <pre class="sql"><code>DELETE FROM productos WHERE stock = 0;
SELECT COUNT(*) AS quedan FROM productos;</code></pre>
      <pre><code>Salida:
✔ 1 fila cambiada

quedan
------
9
(1 fila)</code></pre>
      <table>
        <tr><th>Escribís</th><th>Pasa</th></tr>
        <tr><td>UPDATE productos SET precio = 0</td><td>⚠️ Todos los productos quedan en $0</td></tr>
        <tr><td>DELETE FROM productos</td><td>⚠️ Se borran todos los productos</td></tr>
        <tr><td>UPDATE ... WHERE id = 7</td><td>Solo cambia el producto 7</td></tr>
      </table>
      <pre><code>Antes de un UPDATE o DELETE en una base real:
1. Escribí primero un SELECT con el mismo WHERE.
2. Mirá qué filas trae: ¿son las que querés cambiar?
3. Recién ahí, cambiá SELECT por UPDATE o DELETE.
4. Tené una copia de seguridad de la base.</code></pre>
      <p>Por ejemplo, Sole aumentó un 10% las bebidas. Primero corrió SELECT ... WHERE categoria = 'Bebidas', vio que eran 2 productos y recién después hizo el UPDATE.</p>` },
    { titulo: "CREATE TABLE: una tabla nueva", html: `
      <p class="idea"><strong>CREATE TABLE</strong> crea una tabla: le das nombre y decís qué columnas tiene y de qué tipo es cada una.</p>
      <pre class="sql"><code>CREATE TABLE proveedores (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, telefono TEXT);
INSERT INTO proveedores (nombre, telefono) VALUES ('Distribuidora Litoral', '343 555-0101');
SELECT * FROM proveedores;</code></pre>
      <pre><code>Salida:
✔ Listo

✔ 1 fila cambiada

id | nombre                | telefono
---+-----------------------+-------------
1  | Distribuidora Litoral | 343 555-0101
(1 fila)</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué significa</th></tr>
        <tr><td>INTEGER</td><td>Número entero</td></tr>
        <tr><td>TEXT</td><td>Texto</td></tr>
        <tr><td>REAL</td><td>Número con decimales</td></tr>
        <tr><td>PRIMARY KEY</td><td>La clave primaria: identifica cada fila y no se repite</td></tr>
        <tr><td>NOT NULL</td><td>Ese dato es obligatorio</td></tr>
      </table>
      <p><strong>¿Por qué el teléfono es TEXT y no un número?</strong> Porque no se hacen cuentas con él y puede tener espacios, guiones o un 0 adelante. Un número solo se guarda como número si vas a calcular con él.</p>
      <p><strong>Pensá la tabla antes de crearla:</strong> qué datos necesitás, cuál es obligatorio y cómo se relaciona con las otras (por ejemplo, una columna proveedor_id en productos).</p>
      <p>Por ejemplo, Sole quiso guardar los teléfonos de sus proveedores en la base y no en un papel. Creó la tabla proveedores y cargó al primero.</p>` },
  ],
  practica: [
    "Agregá un producto nuevo con INSERT y comprobalo con un SELECT. Anotá el id que le puso la base.",
    "Antes de un UPDATE, escribí el SELECT con el mismo WHERE y anotá cuántas filas va a cambiar. Después corré el UPDATE.",
    "Creá una tabla con 3 columnas (una obligatoria), cargale 2 filas y anotá qué tipo elegiste para cada columna.",
  ],
  recursos: [
    { t: "SQLite: documentación de INSERT (en inglés)", url: "https://www.sqlite.org/lang_insert.html" },
    { t: "DB Browser for SQLite: programa gratis para abrir bases SQLite en tu compu", url: "https://sqlitebrowser.org/" },
    { t: "W3Schools: tutorial de SQL con ejercicios (en inglés)", url: "https://www.w3schools.com/sql/" },
  ],
  quiz: [
    { q: "Querés agregar un producto nuevo. ¿Qué usás?", opciones: ["UPDATE productos ...","ADD productos ...","INSERT INTO productos (...) VALUES (...);","SELECT INTO productos ..."], correcta: 2, explicacion: "INSERT agrega filas. UPDATE tienta, pero cambia las que ya existen." },
    { q: "En un INSERT, ¿en qué orden van los valores?", opciones: ["En el mismo orden que las columnas que nombraste","Alfabético","Al azar","Del más grande al más chico"], correcta: 0, explicacion: "Cada valor va en su columna. Alfabético tienta por ordenado, pero no." },
    { q: "Si la tabla tiene id INTEGER PRIMARY KEY, ¿tenés que escribir el id en el INSERT?", opciones: ["Sí, siempre","Sí, en texto","Sí, repetido","No: la base lo pone sola"], correcta: 3, explicacion: "La clave primaria se asigna sola. \"Siempre\" tienta por completo." },
    { q: "Querés aumentar un 10% las bebidas. ¿Qué escribís?", opciones: ["UPDATE productos SET precio = precio * 1.1;","UPDATE productos SET precio = precio * 1.1 WHERE categoria = 'Bebidas';","SELECT precio * 1.1 FROM productos WHERE categoria = 'Bebidas';","INSERT precio * 1.1 WHERE categoria = 'Bebidas';"], correcta: 1, explicacion: "UPDATE con WHERE. Sin WHERE tienta por corto, pero aumenta todo." },
    { q: "Si escribís UPDATE productos SET precio = 0; sin WHERE, ¿qué pasa?", opciones: ["Solo el primero","Nada","Todos los productos quedan en $0","Da error"], correcta: 2, explicacion: "Sin WHERE cambia toda la tabla. \"Solo el primero\" tienta, pero no es así." },
    { q: "Si escribís DELETE FROM productos; sin WHERE, ¿qué pasa?", opciones: ["Se borran todos los productos","Se borra el último","Pide confirmación siempre","Nada"], correcta: 0, explicacion: "Sin WHERE borra todo. \"Pide confirmación\" tienta, pero SQL no pregunta." },
    { q: "Antes de un DELETE en una base real, ¿qué hacés?", opciones: ["Nada, confiás","Un DELETE de prueba","Apagás la compu","Un SELECT con el mismo WHERE para ver qué filas se van a borrar"], correcta: 3, explicacion: "El SELECT te muestra el alcance. \"Un DELETE de prueba\" tienta, pero ya borra." },
    { q: "Querés poder volver atrás si un UPDATE sale mal. ¿Qué conviene tener?", opciones: ["Más memoria","Una copia de seguridad de la base","Un alias","Un ORDER BY"], correcta: 1, explicacion: "La copia te salva. Un alias tienta, pero no guarda datos." },
    { q: "Querés guardar los teléfonos de los proveedores. ¿Qué tipo usás?", opciones: ["INTEGER","REAL","TEXT","BOOLEAN"], correcta: 2, explicacion: "No se calcula con él y lleva espacios o guiones. INTEGER tienta, pero perdés el 0 y los guiones." },
    { q: "Si el nombre del proveedor es obligatorio, ¿qué le agregás a la columna?", opciones: ["NOT NULL","PRIMARY KEY","NULL","UNIQUE siempre"], correcta: 0, explicacion: "NOT NULL obliga a cargarlo. PRIMARY KEY tienta, pero es para identificar filas." },
    { q: "Querés crear una tabla de proveedores. ¿Qué usás?", opciones: ["INSERT TABLE proveedores","NEW proveedores","SELECT * FROM proveedores","CREATE TABLE proveedores (...);"], correcta: 3, explicacion: "CREATE TABLE crea. SELECT tienta, pero falla si la tabla no existe." },
    { q: "En el laboratorio agregaste un producto y en la próxima ejecución no está. ¿Por qué?", opciones: ["Porque el INSERT falló","Porque el laboratorio vuelve a crear la base de cero cada vez","Porque lo borró otra persona","Porque SQL no guarda"], correcta: 1, explicacion: "Es para que no rompas nada. \"SQL no guarda\" tienta, pero en una base real queda guardado." },
  ],
},
{
  id: "preguntas",
  icono: "❓",
  titulo: "De la pregunta a la consulta",
  nivel: "Avanzado",
  objetivos: [
    "Traducir una pregunta del negocio a una consulta SQL paso a paso",
    "Usar una subconsulta para comparar con un valor calculado",
    "Revisar que el resultado tenga sentido antes de usarlo",
  ],
  lecciones: [
    { titulo: "Traducir una pregunta", html: `
      <p class="idea">Las consultas empiezan con una <strong>pregunta en castellano</strong>. Para traducirla, respondé: <strong>¿qué tabla?, ¿qué filas?, ¿qué columnas o cálculo?, ¿agrupado?, ¿en qué orden?</strong></p>
      <pre><code>Pregunta: "¿Cuánto vendí cada día de la semana?"
¿Qué tablas?        ventas (fechas y cantidades) + productos (precios)
¿Qué filas?         todas
¿Qué cálculo?       cantidad × precio, sumado
¿Agrupado por?      fecha
¿En qué orden?      por fecha</code></pre>
      <pre class="sql"><code>SELECT v.fecha, SUM(v.cantidad * p.precio) AS total_dia FROM ventas v JOIN productos p ON p.id = v.producto_id GROUP BY v.fecha ORDER BY v.fecha;</code></pre>
      <pre><code>Salida:
fecha      | total_dia
-----------+----------
2026-03-02 | 13000
2026-03-03 | 16200
2026-03-04 | 11700
2026-03-05 | 8400
2026-03-06 | 9900
2026-03-07 | 13000
(6 filas)</code></pre>
      <table>
        <tr><th>Palabra en la pregunta</th><th>Suele ser</th></tr>
        <tr><td>"cuántos"</td><td>COUNT</td></tr>
        <tr><td>"cuánto en total"</td><td>SUM</td></tr>
        <tr><td>"por cada", "de cada"</td><td>GROUP BY</td></tr>
        <tr><td>"los que", "solo"</td><td>WHERE (o HAVING si es sobre un resumen)</td></tr>
        <tr><td>"los 3 más", "el mayor"</td><td>ORDER BY ... DESC LIMIT</td></tr>
        <tr><td>"que nunca", "sin"</td><td>LEFT JOIN ... IS NULL</td></tr>
      </table>
      <p>Por ejemplo, Sole quería saber qué día vendió más. La consulta le mostró que el martes 3 fue el mejor día, con $16.200.</p>` },
    { titulo: "Subconsultas", html: `
      <p class="idea">Una <strong>subconsulta</strong> es una consulta adentro de otra, entre paréntesis. Sirve para comparar con un valor que primero hay que calcular, como el promedio.</p>
      <pre class="sql"><code>SELECT nombre, precio FROM productos WHERE precio &gt; (SELECT AVG(precio) FROM productos) ORDER BY precio DESC;</code></pre>
      <pre><code>Salida:
nombre             | precio
-------------------+-------
Queso cremoso 1 kg | 9800
Yerba 1 kg         | 3900
Gaseosa 2,25 L     | 3200
Pan lactal         | 2900
(4 filas)</code></pre>
      <pre><code>Cómo se lee:
1. Primero corre lo de adentro: SELECT AVG(precio) FROM productos → 2890
2. Después la de afuera:        WHERE precio > 2890</code></pre>
      <p><strong>¿Por qué no escribir 2890 directamente?</strong> Porque si cambian los precios, el promedio cambia. Con la subconsulta, la pregunta "¿cuáles están arriba del promedio?" siempre da bien.</p>
      <pre class="sql"><code>SELECT p.nombre, SUM(v.cantidad * p.precio) AS facturado FROM ventas v JOIN productos p ON p.id = v.producto_id GROUP BY p.id ORDER BY facturado DESC LIMIT 3;</code></pre>
      <pre><code>Salida:
nombre             | facturado
-------------------+----------
Queso cremoso 1 kg | 19600
Yerba 1 kg         | 15600
Gaseosa 2,25 L     | 9600
(3 filas)</code></pre>
      <p><strong>Muchas preguntas se pueden resolver de dos formas:</strong> con una subconsulta o con JOIN y GROUP BY. Elegí la que se entienda mejor al leerla.</p>
      <p>Por ejemplo, Sole quería saber qué productos están más caros que el promedio para compararlos con el mayorista. La subconsulta le dio 4, y cuando cambió los precios siguió funcionando.</p>` },
    { titulo: "Revisar que tenga sentido", html: `
      <p class="idea">Que una consulta <strong>no dé error</strong> no quiere decir que <strong>esté bien</strong>. Antes de usar un resultado, comprobá que tenga sentido.</p>
      <pre class="sql"><code>SELECT * FROM producto;</code></pre>
      <pre><code>Error:
no such table: producto</code></pre>
      <table>
        <tr><th>Control</th><th>Cómo</th></tr>
        <tr><td>¿La cantidad de filas tiene sentido?</td><td>Si esperabas 5 clientes y salen 60, un JOIN está mal</td></tr>
        <tr><td>¿Un caso conocido da bien?</td><td>Calculá a mano un caso chico (las compras de Ana) y comparalo</td></tr>
        <tr><td>¿Los totales coinciden?</td><td>La suma por día tiene que dar lo mismo que la suma total</td></tr>
        <tr><td>¿Faltan filas?</td><td>Un JOIN común deja afuera lo que no tiene pareja: ¿querías un LEFT JOIN?</td></tr>
        <tr><td>¿Hay NULL?</td><td>Los NULL no se cuentan ni se suman: ¿afecta tu respuesta?</td></tr>
      </table>
      <p><strong>Un error silencioso</strong> es una consulta que corre sin problemas pero responde otra cosa. Son los más peligrosos, porque nadie te avisa.</p>
      <p><strong>Comprobá con números:</strong> en la consulta de ventas por día, los 6 totales suman $72.200. Si calculás el total de todas las ventas por otro camino, tiene que dar lo mismo.</p>
      <p><strong>La IA puede ayudarte a escribir SQL,</strong> pero revisá siempre lo que te propone con estos controles: también comete errores silenciosos.</p>
      <p>Por ejemplo, Sole calculó el promedio de compras por cliente y le dio 3. Revisó y había usado JOIN común: Elena, con 0 compras, había quedado afuera. Con LEFT JOIN el promedio dio 2,4.</p>` },
  ],
  practica: [
    "Elegí una pregunta sobre el almacén, contestá las 5 preguntas de traducción y escribí la consulta. Anotá el resultado.",
    "Escribí una subconsulta que muestre los productos con stock menor al promedio y anotá cuántos son.",
    "Comprobá un resultado tuyo calculando a mano un caso chico y anotá si coincidió.",
  ],
  recursos: [
    { t: "SQLite: documentación de SELECT (en inglés)", url: "https://www.sqlite.org/lang_select.html" },
    { t: "SQLBolt: lecciones interactivas de SQL (en inglés)", url: "https://sqlbolt.com/" },
    { t: "Curso de este sitio: Datos con IA", url: "https://pkeios.github.io/EiaLearning/datos/" },
  ],
  quiz: [
    { q: "La pregunta dice \"¿cuánto vendí en total cada día?\". ¿Qué partes de SQL te sugiere?", opciones: ["COUNT y LIMIT","Solo WHERE","SUM y GROUP BY fecha","DELETE"], correcta: 2, explicacion: "\"En total\" es SUM y \"cada día\" es GROUP BY. COUNT tienta, pero cuenta ventas, no plata." },
    { q: "La pregunta dice \"¿cuáles son los 3 productos más vendidos?\". ¿Qué usás al final?", opciones: ["ORDER BY ... DESC LIMIT 3","WHERE LIMIT 3","GROUP BY 3","DISTINCT 3"], correcta: 0, explicacion: "Ordenar de mayor a menor y cortar. GROUP BY 3 tienta, pero no limita." },
    { q: "La pregunta dice \"clientes que nunca compraron\". ¿Qué técnica usás?", opciones: ["JOIN común","COUNT(*) = 0 en WHERE","DISTINCT","LEFT JOIN con ventas y WHERE ventas.id IS NULL"], correcta: 3, explicacion: "Lo que no tiene pareja queda en NULL. El JOIN común tienta, pero los deja afuera." },
    { q: "Querés los productos con precio mayor al promedio. ¿Qué usás?", opciones: ["WHERE precio > AVG(precio)","Una subconsulta: WHERE precio > (SELECT AVG(precio) FROM productos)","HAVING precio > 2890 siempre","ORDER BY AVG"], correcta: 1, explicacion: "La subconsulta calcula el promedio primero. \"WHERE precio > AVG\" tienta, pero WHERE no acepta funciones de resumen." },
    { q: "En una subconsulta, ¿qué se calcula primero?", opciones: ["Lo de afuera","Las dos a la vez","Lo de adentro de los paréntesis","Depende del día"], correcta: 2, explicacion: "Primero el valor, después la comparación. \"Lo de afuera\" tienta por leerse primero." },
    { q: "¿Por qué conviene la subconsulta en lugar de escribir 2890 a mano?", opciones: ["Porque si cambian los precios, el promedio se recalcula solo","Porque es más corta","Porque 2890 da error","No conviene"], correcta: 0, explicacion: "El número fijo queda viejo. \"Más corta\" tienta, pero en realidad es más larga." },
    { q: "Si una consulta corre sin error, ¿ya sabés que está bien?", opciones: ["Sí, si no hay error está bien","Sí, si tiene muchas filas","Sí, si tarda poco","No: puede responder otra cosa sin avisar"], correcta: 3, explicacion: "Es un error silencioso. \"Sin error está bien\" tienta, pero no alcanza." },
    { q: "Esperabas 5 clientes y tu consulta devuelve 60 filas. ¿Qué revisás?", opciones: ["Nada, hay más clientes","El JOIN: probablemente falta o está mal el ON","El ORDER BY","El nombre del alias"], correcta: 1, explicacion: "Un JOIN mal hecho multiplica filas. \"Hay más clientes\" tienta, pero sabés que son 5." },
    { q: "¿Cómo comprobás que un total por grupo está bien?", opciones: ["Mirándolo rápido","Corriendo la misma consulta dos veces","Sumando los grupos y comparando con el total general calculado por otro camino","Preguntando a la IA si está bien"], correcta: 2, explicacion: "Dos caminos que coinciden dan confianza. Correrla dos veces tienta, pero da lo mismo aunque esté mal." },
    { q: "Tu promedio de compras por cliente no cuenta a quien no compró. ¿Qué pasó?", opciones: ["Usaste JOIN común en lugar de LEFT JOIN","Usaste LEFT JOIN","Faltó un ORDER BY","Es correcto así"], correcta: 0, explicacion: "El JOIN común deja afuera a quien no tiene ventas. \"Es correcto\" tienta si no pensás en esos casos." },
    { q: "Te aparece \"no such table: producto\". ¿Qué hacés?", opciones: ["Creás una tabla producto vacía","Borrás productos","Cambiás de programa","Corregís el nombre: la tabla es productos"], correcta: 3, explicacion: "Es un error de escritura. Crear una tabla vacía tienta, pero no tendría datos." },
    { q: "Una IA te escribe una consulta SQL. ¿Qué hacés?", opciones: ["La usás sin mirar","La revisás con los mismos controles: filas, un caso conocido, totales","La descartás siempre","La corrés directo en la base real con UPDATE"], correcta: 1, explicacion: "La IA también comete errores silenciosos. Usarla sin mirar tienta por rápido." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el informe del almacén",
  nivel: "Avanzado",
  objetivos: [
    "Responder 6 preguntas de negocio con consultas SQL",
    "Comprobar cada resultado antes de usarlo",
    "Presentar los hallazgos en un informe corto y evaluarlo con una rúbrica",
  ],
  lecciones: [
    { titulo: "Las preguntas del informe", html: `
      <p class="idea">El proyecto es armar el <strong>informe semanal del almacén</strong>: 6 preguntas que Sole necesita responder, cada una con su consulta, su resultado y una frase de conclusión.</p>
      <table>
        <tr><th>#</th><th>Pregunta</th><th>Pista</th></tr>
        <tr><td>1</td><td>¿Cuánto se vendió en total en la semana?</td><td>SUM con JOIN</td></tr>
        <tr><td>2</td><td>¿Qué día se vendió más?</td><td>GROUP BY fecha, ORDER BY, LIMIT 1</td></tr>
        <tr><td>3</td><td>¿Cuáles son los 3 productos que más facturaron?</td><td>GROUP BY producto</td></tr>
        <tr><td>4</td><td>¿Qué productos no se vendieron?</td><td>LEFT JOIN ... IS NULL</td></tr>
        <tr><td>5</td><td>¿Quién es el mejor cliente?</td><td>GROUP BY cliente con SUM</td></tr>
        <tr><td>6</td><td>¿Qué hay que reponer?</td><td>WHERE stock &lt; 10</td></tr>
      </table>
      <pre><code>Para cada pregunta, anotá:
- La traducción (tablas, filas, cálculo, grupo, orden).
- La consulta.
- El resultado.
- Un control (un caso calculado a mano o un total que coincida).
- Una conclusión de una oración para Sole.</code></pre>
      <p><strong>Si querés practicar con datos reales,</strong> en datos.gob.ar hay datos abiertos del Estado argentino que se pueden cargar en una base SQLite con un programa gratis como DB Browser for SQLite.</p>
      <p>Por ejemplo, para la pregunta 1, Sole sumó los totales por día de la lección de traducción: $72.200 en la semana.</p>` },
    { titulo: "Resolver y comprobar", html: `
      <p class="idea">Resolvé cada pregunta <strong>de a pasos</strong>, probando en el laboratorio, y <strong>comprobá</strong> cada resultado antes de escribir la conclusión.</p>
      <pre class="sql"><code>-- Pregunta 6: ¿qué hay que reponer?
SELECT nombre, stock FROM productos WHERE stock &lt; 10 ORDER BY stock;</code></pre>
      <pre><code>Salida:
nombre               | stock
---------------------+------
Agua mineral 2 L     | 0
Queso cremoso 1 kg   | 5
Dulce de leche 400 g | 8
(3 filas)</code></pre>
      <table>
        <tr><th>Pregunta</th><th>Control posible</th></tr>
        <tr><td>Total de la semana</td><td>Tiene que coincidir con la suma de los totales por día</td></tr>
        <tr><td>Mejor cliente</td><td>Calculá a mano las compras de ese cliente</td></tr>
        <tr><td>Productos sin ventas</td><td>Buscá uno en la tabla ventas: no tiene que aparecer</td></tr>
        <tr><td>Reponer</td><td>Mirá el stock de cada uno en SELECT * FROM productos</td></tr>
      </table>
      <p><strong>Una conclusión útil dice qué hacer:</strong> no solo "el agua tiene 0", sino "hay que pedir agua mineral: está agotada y es de las bebidas más baratas".</p>
      <p><strong>Si una pregunta no se puede responder</strong> con los datos que hay (por ejemplo, la ganancia, porque no hay costos cargados), decilo: es parte del informe.</p>
      <p>Por ejemplo, para el mejor cliente, Sole obtuvo a Ana López con $23.400 en la semana. Lo comprobó sumando a mano sus 4 compras: 7.800 + 9.800 + 2.600 + 3.200 = 23.400.</p>` },
    { titulo: "El informe y la rúbrica", html: `
      <p class="idea">Presentá el informe en una página: <strong>la pregunta, la respuesta y qué hacer</strong>. Después evaluá tu trabajo con la <strong>rúbrica</strong>, una lista de criterios con puntaje.</p>
      <pre><code>Informe semanal del almacén (2 al 7 de marzo)
1. Ventas de la semana: $72.200.
2. Mejor día: martes 3, con $16.200.
3. Más facturaron: queso cremoso, yerba y gaseosa.
4. Sin ventas: azúcar, galletitas de agua y agua mineral → ponerlos en oferta.
5. Mejor cliente: Ana López ($23.400) → agradecerle con un descuento.
6. Reponer: agua mineral (0), queso (5) y dulce de leche (8).</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Consultas</td><td>Las 6 corren y responden la pregunta</td><td>4 o 5</td><td>Menos de 4</td></tr>
        <tr><td>Traducción</td><td>Cada pregunta traducida en pasos</td><td>Algunas</td><td>Ninguna</td></tr>
        <tr><td>Comprobación</td><td>Un control por pregunta</td><td>Algunos controles</td><td>Sin controles</td></tr>
        <tr><td>JOIN correcto</td><td>JOIN o LEFT JOIN según corresponde</td><td>Un error de JOIN</td><td>Varios</td></tr>
        <tr><td>Claridad de la consulta</td><td>Alias claros, ordenada, con comentarios</td><td>Se entiende con esfuerzo</td><td>Difícil de leer</td></tr>
        <tr><td>Conclusiones</td><td>Cada una dice qué hacer</td><td>Solo describen el número</td><td>Sin conclusiones</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → ya hacés preguntas a los datos con SQL
7 a 9   → mejorá el criterio más bajo
0 a 6   → repasá JOIN y GROUP BY</code></pre>
      <p>Por ejemplo, Sole sacó 11 de 12: en una conclusión solo había puesto el número. La reescribió diciendo qué hacer y le pasó el informe a su familia.</p>` },
  ],
  practica: [
    "Resolvé las 6 preguntas del informe en el laboratorio y anotá el resultado de cada una.",
    "Hacé un control para cada pregunta y anotá cuántos coincidieron.",
    "Escribí el informe de una página con las 6 conclusiones y anotá tu total de 12 en la rúbrica.",
  ],
  recursos: [
    { t: "datos.gob.ar: datos abiertos del Estado argentino para practicar", url: "https://www.datos.gob.ar/" },
    { t: "DB Browser for SQLite: programa gratis para abrir bases SQLite en tu compu", url: "https://sqlitebrowser.org/" },
    { t: "Curso de este sitio: Datos con IA", url: "https://pkeios.github.io/EiaLearning/datos/" },
  ],
  quiz: [
    { q: "La pregunta es \"¿cuánto se vendió en la semana?\". ¿Qué necesitás unir?", opciones: ["Solo clientes","Solo productos","Ventas con productos, para tener cantidad y precio","Clientes con productos"], correcta: 2, explicacion: "La cantidad está en ventas y el precio en productos. Solo productos tienta, pero no tiene las ventas." },
    { q: "¿Qué día se vendió más? ¿Cómo terminás la consulta?", opciones: ["ORDER BY total_dia DESC LIMIT 1","ORDER BY fecha LIMIT 1","LIMIT 1 sin ORDER BY","GROUP BY total_dia"], correcta: 0, explicacion: "Ordenar por el total de mayor a menor y quedarte con 1. Por fecha tienta, pero da el primer día, no el mejor." },
    { q: "Querés el mejor cliente por plata gastada. ¿Qué agrupás y qué sumás?", opciones: ["Agrupás por producto y contás","Agrupás por fecha y sumás stock","No agrupás","Agrupás por cliente y sumás cantidad por precio"], correcta: 3, explicacion: "Un total por cliente. Contar compras tienta, pero no es plata gastada." },
    { q: "Querés comprobar el total de la semana. ¿Qué control hacés?", opciones: ["Correr la consulta dos veces","Que coincida con la suma de los totales por día","Preguntarle a un amigo","Ninguno"], correcta: 1, explicacion: "Dos caminos que coinciden. Correrla dos veces tienta, pero repite el mismo error." },
    { q: "Ana compró 7.800, 9.800, 2.600 y 3.200. ¿Cuánto gastó?", opciones: ["$20.200","$9.800","$23.400","$13.000"], correcta: 2, explicacion: "7.800 + 9.800 + 2.600 + 3.200 = 23.400. 9.800 tienta porque es la compra más grande." },
    { q: "Tu conclusión dice solo \"el agua tiene 0\". ¿Qué le falta?", opciones: ["Decir qué hacer: pedir agua mineral","Más decimales","El id del producto","Nada"], correcta: 0, explicacion: "Una conclusión útil orienta la acción. \"Nada\" tienta porque el dato es correcto." },
    { q: "Te piden la ganancia y la base no tiene costos. ¿Qué hacés?", opciones: ["Inventás los costos","Usás el precio como ganancia","La omitís sin decir nada","Decís que no se puede responder con estos datos"], correcta: 3, explicacion: "Reconocer el límite es parte del informe. Usar el precio tienta, pero no es ganancia." },
    { q: "Querés practicar con datos reales de Argentina. ¿Dónde los conseguís?", opciones: ["Inventándolos","En datos.gob.ar, el portal de datos abiertos","En las redes sociales","No existen"], correcta: 1, explicacion: "El Estado publica datos abiertos. \"No existen\" tienta si no lo conocías." },
    { q: "Querés abrir una base SQLite en tu compu. ¿Qué programa gratis podés usar?", opciones: ["Un procesador de texto","Un editor de fotos","DB Browser for SQLite","Ninguno"], correcta: 2, explicacion: "Es un programa para abrir y consultar bases SQLite. El procesador de texto tienta, pero no entiende la base." },
    { q: "Tus 6 consultas corren pero no hiciste controles. ¿Cuántos puntos sacás en \"Comprobación\"?", opciones: ["0","2","1","12"], correcta: 0, explicacion: "\"Sin controles\" es 0. 1 tienta, pero es para algunos controles." },
    { q: "Usaste JOIN común donde iba LEFT JOIN. ¿Qué criterio baja?", opciones: ["Conclusiones","Claridad de la consulta","Ninguno","JOIN correcto"], correcta: 3, explicacion: "Elegir el JOIN correcto es un criterio. Claridad tienta, pero el problema es el resultado." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Empezás el curso de cero","Mejorás el criterio más bajo","Borrás la base","Dejás SQL"], correcta: 1, explicacion: "De 7 a 9, falta pulir. Empezar de cero tienta, pero no hace falta." },
  ],
},
];
