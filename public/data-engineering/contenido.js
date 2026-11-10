// Contenido del curso "Data Engineering desde cero: de la planilla al pipeline" (mismo formato que public/contenido.js).
// Los códigos Python de las lecciones se corren de verdad en tools/test-de.js: si después de un código hay un bloque "Salida:",
// tiene que ser exactamente lo que imprime. Validar con: node tools/validar.js data-engineering && node tools/test-de.js
window.TEMARIO = [
  {
    id: "que-es",
    icono: "🧭",
    titulo: "Qué hace un data engineer",
    nivel: "Básico",
    objetivos: [
      "Explicar con un ejemplo qué hace un data engineer y en qué se diferencia de un analista de datos",
      "Ubicar cualquier tarea de datos en una de las 5 etapas del ciclo de vida",
      "Correr tu primer código en el laboratorio de la página y leer un mensaje de error",
    ],
    lecciones: [
      { titulo: "De la planilla al pipeline: qué hace un data engineer", html: `
        <p class="idea">El agua llega a tu canilla porque alguien construyó caños, filtros y tanques. Con los datos pasa lo mismo: alguien tiene que llevarlos de donde nacen hasta donde se usan, limpios y a tiempo. Ese alguien es el <strong>data engineer</strong> (ingeniero o ingeniera de datos).</p>
      <p>Un caso concreto. La Esquina es un almacén inventado con tres sucursales: Centro, Norte y Sur. Es el mismo del curso <em>Datos con IA</em>. Cada sucursal anota sus ventas en una planilla. Todos los lunes, la dueña quiere saber cuánto vendió cada una.</p>
      <table>
        <tr><th>Sin data engineering</th><th>Con data engineering</th></tr>
        <tr><td>Alguien junta las tres planillas a mano cada lunes</td><td>Un programa las junta solo, todos los días</td></tr>
        <tr><td>Cada vez hay errores distintos: "sur", "SUR", fechas al revés</td><td>El programa corrige los errores conocidos y avisa los nuevos</td></tr>
        <tr><td>Si la persona se enferma, no hay números</td><td>Los números están aunque no haya nadie</td></tr>
      </table>
      <p>A ese programa que mueve, limpia y guarda los datos solo, paso a paso, se le dice <strong>pipeline</strong> (en castellano, "tubería"). Armar pipelines confiables es el centro del trabajo.</p>
      <p><strong>Tres roles que se suelen confundir:</strong></p>
      <table>
        <tr><th>Rol</th><th>Pregunta que responde</th><th>En La Esquina</th></tr>
        <tr><td>Data engineer</td><td>¿Los datos llegan completos, limpios y a tiempo?</td><td>Arma el pipeline que junta las ventas de las 3 sucursales</td></tr>
        <tr><td>Analista de datos</td><td>¿Qué dicen los datos?</td><td>Descubre que Norte crece todos los meses</td></tr>
        <tr><td>Científico de datos</td><td>¿Qué va a pasar?</td><td>Predice cuánto va a vender Norte en diciembre</td></tr>
      </table>
      <p>El analista y el científico dependen del data engineer: si los datos llegan mal, todo lo que hagan después sale mal. Por eso es un trabajo muy pedido.</p>
      <p>En este curso vas a aprender las herramientas desde cero: <strong>Python</strong> (un lenguaje de programación) y <strong>SQL</strong> (el lenguaje para hablar con bases de datos). Al final vas a armar el pipeline de La Esquina completo.</p>
      ` },
      { titulo: "El ciclo de vida de los datos: las 5 etapas", html: `
        <p class="idea">Un dato tiene un recorrido, como un paquete de correo: alguien lo manda, se guarda en un depósito, viaja, se ordena y llega a quien lo pidió. Conocer ese recorrido te dice en qué parte del trabajo estás parado.</p>
      <p>El libro <em>Fundamentos de ingeniería de datos</em>, de Joe Reis y Matt Housley, organiza el trabajo en un <strong>ciclo de vida</strong> de cinco etapas:</p>
      <table>
        <tr><th>Etapa</th><th>Qué pasa</th><th>En La Esquina</th></tr>
        <tr><td>1. Generación</td><td>El dato nace en un sistema</td><td>La caja registra una venta</td></tr>
        <tr><td>2. Almacenamiento</td><td>Se guarda en algún lugar</td><td>Un archivo CSV o una base de datos</td></tr>
        <tr><td>3. Ingesta</td><td>Se trae de donde nació a donde lo vas a usar</td><td>Juntar las planillas de las 3 sucursales</td></tr>
        <tr><td>4. Transformación</td><td>Se limpia y se le da forma útil</td><td>Unificar "sur" y "SUR", corregir fechas</td></tr>
        <tr><td>5. Servir</td><td>Se entrega a quien lo necesita</td><td>Un tablero con el total por sucursal</td></tr>
      </table>
      <pre><code>Generación → Almacenamiento → Ingesta → Transformación → Servir
(la caja)    (el archivo)     (juntar)   (limpiar)        (el tablero)</code></pre>
      <p>Por debajo de las cinco etapas corren temas que tocan a todas. Los autores las llaman <strong>corrientes de fondo</strong>: seguridad (quién puede ver qué), gestión de datos (qué significa cada columna), automatización (que corra solo) e ingeniería de software (código prolijo y probado). Las vas a ver en los módulos de calidad, automatización y seguridad.</p>
      <p><strong>Para qué te sirve el mapa:</strong> cuando algo falla, primero preguntás en qué etapa. Si el total de Sur da raro, ¿el dato nació mal (la caja), se perdió al traerlo (ingesta) o lo arruinó la limpieza (transformación)? Saber la etapa achica la búsqueda.</p>
      <p>Mirá el mapa del curso en el inicio: los módulos siguen este mismo recorrido, desde leer archivos hasta servir los datos en un data warehouse.</p>
      ` },
      { titulo: "Tu primer código: el laboratorio y los mensajes de error", html: `
        <p class="idea">Programar se aprende como andar en bicicleta: probando y cayéndote un poco. En este curso cada código tiene un botón para correrlo acá mismo, sin instalar nada, así que podés equivocarte todas las veces que quieras.</p>
      <p>Abajo de cada código vas a ver el botón <strong>▶ Probar este código</strong>. Se abre un <strong>laboratorio</strong>: una caja donde podés cambiar el código y ejecutarlo. La primera vez tarda unos segundos, porque carga Python en tu navegador. Probá con este:</p>
      <pre><code>print("Hola, pipeline")
print(2 + 3)</code></pre>
      <pre><code>Salida:
Hola, pipeline
5</code></pre>
      <p><code>print()</code> muestra en pantalla lo que le pongas entre paréntesis. El texto va entre comillas; los números no. Debajo de cada código, el bloque <strong>Salida</strong> te muestra lo que tiene que aparecer: si a vos te da otra cosa, algo cambió.</p>
      <p><strong>Leer un error.</strong> Si escribís mal algo, Python te avisa con un mensaje. No es un reto: es una pista. Por ejemplo, si te olvidás de cerrar las comillas:</p>
      <pre><code>print("Hola)</code></pre>
      <pre><code>Error:
SyntaxError: unterminated string literal (detected at line 1)</code></pre>
      <p>Se lee así: <strong>qué tipo de error</strong> (<em>SyntaxError</em>: algo está mal escrito) y <strong>qué pasó</strong> (<em>unterminated string</em>: un texto sin cerrar). Los mensajes están en inglés, pero siempre tienen esa forma. Tres que vas a ver seguido:</p>
      <table>
        <tr><th>Error</th><th>Qué quiere decir</th><th>Qué revisar</th></tr>
        <tr><td>SyntaxError</td><td>Algo está mal escrito</td><td>Comillas, paréntesis o dos puntos que faltan</td></tr>
        <tr><td>NameError</td><td>Usaste un nombre que Python no conoce</td><td>Que esté bien escrito y definido antes</td></tr>
        <tr><td>TypeError</td><td>Mezclaste tipos que no se combinan</td><td>Que no sumes un texto con un número</td></tr>
      </table>
      <p><strong>¿Y en tu computadora?</strong> Para el curso alcanza con el laboratorio. Si querés instalar Python, bajalo gratis de python.org y usá el editor VS Code: es lo que propone el libro <em>Curso intensivo de Python</em>, de Eric Matthes, que es la base de los módulos de Python.</p>
      ` },
    ],
    practica: [
      "Corré el primer código en el laboratorio. Después cambialo para que muestre tu nombre y el resultado de 7 × 6 (en Python se escribe 7 * 6). Anotá la salida: tiene que decir 42.",
      "Borrá a propósito una comilla del código y corrélo. Anotá el tipo de error que aparece y en qué renglón dice que está.",
      "Elegí 3 tareas con datos que conozcas (de tu casa, de un trabajo o de una noticia) y ubicá cada una en una de las 5 etapas del ciclo de vida. Anotalas en una tabla de 3 filas.",
    ],
    recursos: [
      { t: "Libro: Fundamentos de ingeniería de datos, de Joe Reis y Matt Housley (Marcombo, 2023)", url: "https://www.librerianacional.com/fundamentos-de-ingenieria-de-datos-/p" },
      { t: "Python: tutorial oficial en español", url: "https://docs.python.org/es/3/tutorial/" },
      { t: "Data Engineering Zoomcamp: curso gratuito (en inglés) para cuando termines este", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp" },
    ],
    quiz: [
      { q: "Si cada lunes alguien junta a mano las planillas de 3 sucursales y a veces se equivoca. ¿Qué haría un data engineer?", opciones: ["Un pipeline que las junte y limpie solo, y avise si llega algo raro","Un gráfico más lindo con los totales","Una predicción de las ventas de diciembre","Pedirle a cada sucursal que mande todo por WhatsApp"], correcta: 0, explicacion: "El trabajo del data engineer es que los datos lleguen solos, limpios y a tiempo. El gráfico tienta porque es lo que se ve, pero es tarea del analista y sale mal si los datos llegan mal." },
      { q: "Tu compañera descubre que Norte crece todos los meses. ¿Qué rol cumplió?", opciones: ["Data engineer","Analista de datos: respondió qué dicen los datos","Científica de datos","Administradora de la base"], correcta: 1, explicacion: "Encontrar qué dicen los datos es análisis. Data engineer tienta porque trabajó con datos, pero ese rol se ocupa de que los datos lleguen bien, no de interpretarlos." },
      { q: "Si el pipeline falla, ¿quiénes se quedan sin poder trabajar?", opciones: ["Nadie, cada uno tiene su copia","Solo el data engineer","El analista y el científico de datos, porque dependen de esos datos","Solo la dueña"], correcta: 2, explicacion: "Los demás roles usan lo que entrega el pipeline. Que solo afecte al data engineer tienta porque es quien lo armó, pero el error se propaga a todo lo que viene después." },
      { q: "Tenés que explicarle a un amigo qué es un pipeline. ¿Qué le decís?", opciones: ["Un tipo de gráfico","Una planilla de Excel muy grande","Un lenguaje de programación","Un programa que mueve, limpia y guarda datos solo, paso a paso"], correcta: 3, explicacion: "Pipeline es la tubería por donde viajan los datos. Confundirlo con un lenguaje tienta porque se arma con Python o SQL, pero el lenguaje es la herramienta y el pipeline es lo que construís." },
      { q: "Si la caja de una sucursal registra una venta, ¿en qué etapa del ciclo de vida estás?", opciones: ["Generación: el dato nace","Ingesta","Servir","Transformación"], correcta: 0, explicacion: "El dato nace cuando la caja lo registra. Ingesta tienta porque el dato entra a un sistema, pero la ingesta es traerlo desde donde nació hasta donde lo vas a usar." },
      { q: "Si estás juntando las planillas de las 3 sucursales en un solo lugar. ¿Qué etapa es?", opciones: ["Generación","Ingesta: traer los datos a donde los vas a usar","Servir","Almacenamiento"], correcta: 1, explicacion: "Traer datos de varios lugares a uno es ingesta. Almacenamiento tienta porque al final quedan guardados, pero esa etapa es dónde se guardan, no el viaje." },
      { q: "Pasás \"sur\" y \"SUR\" a \"Sur\" y corregís fechas escritas al revés. ¿Qué etapa es?", opciones: ["Servir","Generación","Transformación: limpiar y dar forma","Ingesta"], correcta: 2, explicacion: "Limpiar y dar forma es transformación. Ingesta tienta porque muchas veces se hace al traer los datos, pero mover y corregir son pasos distintos, y conviene separarlos para encontrar errores." },
      { q: "Si el total de Sur da raro en el tablero, ¿qué te conviene preguntar primero?", opciones: ["Si hay que cambiar el color del gráfico","Quién armó el tablero","Si hay que borrar los datos y empezar de nuevo","En qué etapa se rompió: si nació mal, se perdió al traerlo o lo arruinó la limpieza"], correcta: 3, explicacion: "Ubicar la etapa achica la búsqueda. Borrar todo tienta porque parece limpio, pero perdés la pista del error y puede volver a pasar." },
      { q: "Si corrés un código y aparece SyntaxError, ¿qué revisás?", opciones: ["Comillas, paréntesis o dos puntos que falten","Si la computadora está enchufada","Si Python está mal instalado","Si los datos tienen errores"], correcta: 0, explicacion: "SyntaxError significa que algo está mal escrito en el código. Pensar que Python está mal instalado tienta, pero el mensaje dice exactamente que el problema es de escritura." },
      { q: "Te aparece NameError: name 'totl' is not defined. ¿Qué pasó?", opciones: ["Faltan datos en la planilla","Usaste un nombre que Python no conoce: probablemente escribiste mal total","El número es demasiado grande","Hay que reiniciar la página"], correcta: 1, explicacion: "NameError avisa que el nombre no existe; acá falta una letra. Reiniciar tienta, pero el error vuelve igual porque está en lo que escribiste." },
      { q: "Querés mostrar en pantalla el resultado de 2 + 3. ¿Qué escribís?", opciones: ["print 2 + 3","mostrar(2 + 3)","print(2 + 3)","\"2 + 3\""], correcta: 2, explicacion: "print() con paréntesis muestra el resultado: 5. Ponerlo entre comillas tienta, pero así Python lo trata como texto y mostraría 2 + 3 tal cual, sin hacer la cuenta." },
      { q: "Tu código da una salida distinta de la que muestra la lección. ¿Qué hacés?", opciones: ["Nada, seguro está bien","Cerrás el curso","Copiás la salida de la lección a mano","Comparás tu código con el original: el botón Volver al original lo restaura"], correcta: 3, explicacion: "La salida de la lección es la que da el código original, así que una diferencia te dice que algo cambió. Ignorarla tienta, pero es justo la pista que te enseña qué hace cada parte." },
    ],
  },
  {
    id: "python-1",
    icono: "🐍",
    titulo: "Python desde cero: datos, listas y decisiones",
    nivel: "Básico",
    objetivos: [
      "Guardar datos en variables y elegir el tipo correcto: número entero, decimal, texto o verdadero/falso",
      "Representar una venta con un diccionario y muchas ventas con una lista de diccionarios",
      "Recorrer una lista con for y decidir con if, por ejemplo para sumar el total de cada sucursal",
    ],
    lecciones: [
      { titulo: "Variables y tipos: ponerle nombre a un dato", html: `
        <p class="idea">Una variable es como una etiqueta que le pegás a una caja: adentro está el dato, y la etiqueta te deja usarlo después sin volver a escribirlo. Si cambiás lo de adentro, todo lo que usa la etiqueta se entera.</p>
      <p>Así se guarda una venta de La Esquina en variables. El signo <code>=</code> no es "igual" como en matemática: quiere decir "guardá esto con este nombre".</p>
      <pre><code>producto = "Yerba 1 kg"
cantidad = 2
precio = 4800
total = cantidad * precio
print(producto, total)
print(f"Se vendieron {cantidad} de {producto} por {total} pesos")</code></pre>
      <pre><code>Salida:
Yerba 1 kg 9600
Se vendieron 2 de Yerba 1 kg por 9600 pesos</code></pre>
      <p>La segunda línea de <code>print</code> usa un <strong>f-string</strong>: un texto con una <code>f</code> adelante, donde lo que va entre llaves se reemplaza por el valor de la variable. Es la forma más cómoda de armar mensajes.</p>
      <p><strong>Cada dato tiene un tipo.</strong> Python necesita saber si algo es un número o un texto, porque no se tratan igual:</p>
      <table>
        <tr><th>Tipo</th><th>Qué guarda</th><th>Ejemplo</th></tr>
        <tr><td><code>int</code></td><td>Números enteros</td><td><code>cantidad = 2</code></td></tr>
        <tr><td><code>float</code></td><td>Números con decimales (se usa punto)</td><td><code>peso = 1.5</code></td></tr>
        <tr><td><code>str</code></td><td>Texto, siempre entre comillas</td><td><code>producto = "Pan kg"</code></td></tr>
        <tr><td><code>bool</code></td><td>Verdadero o falso</td><td><code>es_nuevo = True</code></td></tr>
      </table>
      <pre><code>print(type(2), type(1.5), type("Pan kg"), type(True))</code></pre>
      <pre><code>Salida:
&lt;class 'int'&gt; &lt;class 'float'&gt; &lt;class 'str'&gt; &lt;class 'bool'&gt;</code></pre>
      <p><strong>El error de tipo más común en datos.</strong> Las planillas muchas veces traen números guardados como texto. Si mezclás un texto con un número, Python no adivina qué quisiste hacer:</p>
      <pre><code>print("Total: " + 9600)</code></pre>
      <pre><code>Error:
TypeError: can only concatenate str (not "int") to str</code></pre>
      <p>Se lee: <em>TypeError</em>, solo se puede pegar texto con texto. Hay dos arreglos: convertir el número a texto con <code>str(9600)</code>, o usar un f-string. Y al revés, un texto con un número adentro se convierte con <code>int("9600")</code>. Vas a hacer esto todo el tiempo al limpiar datos.</p>
      ` },
      { titulo: "Listas y diccionarios: una venta y muchas ventas", html: `
        <p class="idea">Una fila de una planilla tiene varios datos con nombre: fecha, sucursal, producto. Un <strong>diccionario</strong> guarda justo eso: pares de nombre y valor. Y muchas filas juntas son una <strong>lista</strong> de diccionarios, que es la forma más simple de una tabla en Python.</p>
      <p>Un diccionario se escribe entre llaves. Cada dato tiene una <strong>clave</strong> (el nombre de la columna) y un valor:</p>
      <pre><code>venta = {"sucursal": "Norte", "producto": "Pan kg", "cantidad": 3, "precio": 2900}
print(venta["producto"])
venta["total"] = venta["cantidad"] * venta["precio"]
print(venta)</code></pre>
      <pre><code>Salida:
Pan kg
{'sucursal': 'Norte', 'producto': 'Pan kg', 'cantidad': 3, 'precio': 2900, 'total': 8700}</code></pre>
      <p>Con <code>venta["producto"]</code> leés un valor, y con <code>venta["total"] = ...</code> agregás una columna nueva. Una <strong>lista</strong> se escribe entre corchetes y guarda varias cosas en orden:</p>
      <pre><code>ventas = [
    {"sucursal": "Norte", "producto": "Pan kg", "total": 8700},
    {"sucursal": "Centro", "producto": "Yerba 1 kg", "total": 9600},
    {"sucursal": "Norte", "producto": "Leche 1 L", "total": 2800},
]
print(len(ventas))
print(ventas[0]["sucursal"])
print(ventas[-1]["producto"])</code></pre>
      <pre><code>Salida:
3
Norte
Leche 1 L</code></pre>
      <p><code>len()</code> cuenta los elementos. Ojo: <strong>la primera posición es la 0</strong>, no la 1. <code>ventas[0]</code> es la primera venta y <code>ventas[-1]</code>, la última. Es el error más común al empezar.</p>
      <table>
        <tr><th>En una planilla</th><th>En Python</th></tr>
        <tr><td>Una fila</td><td>Un diccionario: <code>{"sucursal": "Norte", ...}</code></td></tr>
        <tr><td>El nombre de una columna</td><td>Una clave: <code>"sucursal"</code></td></tr>
        <tr><td>Toda la tabla</td><td>Una lista de diccionarios: <code>[{...}, {...}]</code></td></tr>
        <tr><td>Cuántas filas hay</td><td><code>len(ventas)</code></td></tr>
      </table>
      <p>Esta misma forma, filas como diccionarios, es la que te da Python al leer un archivo CSV, que vas a ver en el módulo de archivos.</p>
      ` },
      { titulo: "Repetir y decidir: for e if", html: `
        <p class="idea">Si tuvieras que sumar 947 ventas a mano, harías lo mismo una y otra vez: mirar la fila, sumar, pasar a la siguiente. Eso es un <strong>for</strong>. Y cuando mirás una fila y pensás "esta es rara", eso es un <strong>if</strong>.</p>
      <p><code>for</code> recorre una lista y hace lo mismo con cada elemento. Lo que se repite va <strong>corrido hacia la derecha</strong> (con 4 espacios): esa sangría le dice a Python qué está adentro del for.</p>
      <pre><code>ventas = [
    {"sucursal": "Norte", "total": 8700},
    {"sucursal": "Centro", "total": 9600},
    {"sucursal": "Norte", "total": 2800},
    {"sucursal": "Sur", "total": 39200},
]
totales = {}
for v in ventas:
    suc = v["sucursal"]
    totales[suc] = totales.get(suc, 0) + v["total"]
print(totales)</code></pre>
      <pre><code>Salida:
{'Norte': 11500, 'Centro': 9600, 'Sur': 39200}</code></pre>
      <p>Es el corazón de cualquier resumen por grupo: un diccionario donde la clave es la sucursal y el valor va acumulando. <code>totales.get(suc, 0)</code> quiere decir "dame lo que lleva esta sucursal, o 0 si todavía no tiene nada".</p>
      <p><code>if</code> hace algo solo si se cumple una condición. Con <code>elif</code> ("si no, si...") y <code>else</code> ("si no") cubrís los otros casos:</p>
      <pre><code>cantidades = [2, 4, 400, 1]
for c in cantidades:
    if c &gt; 10:
        print(c, "es rara: revisar")
    elif c == 1:
        print(c, "unidad")
    else:
        print(c, "unidades")</code></pre>
      <pre><code>Salida:
2 unidades
4 unidades
400 es rara: revisar
1 unidad</code></pre>
      <p>Fijate que para comparar se usa <code>==</code> (dos signos), porque <code>=</code> solo ya significa "guardar". Las comparaciones que más vas a usar:</p>
      <table>
        <tr><th>Escribís</th><th>Quiere decir</th></tr>
        <tr><td><code>a == b</code></td><td>a es igual a b</td></tr>
        <tr><td><code>a != b</code></td><td>a es distinto de b</td></tr>
        <tr><td><code>a &gt; b</code>, <code>a &lt;= b</code></td><td>mayor, menor o igual</td></tr>
        <tr><td><code>"Sur" in texto</code></td><td>el texto contiene "Sur"</td></tr>
      </table>
      <p>La venta de 400 unidades es exactamente el valor atípico que aparece en la planilla sucia de La Esquina. Con un for y un if ya podés encontrarla sola, sin mirar 958 filas.</p>
      ` },
    ],
    practica: [
      "Guardá en variables una venta de 3 Leche 1 L a 1400 pesos y mostrá con un f-string: \"Se vendieron 3 de Leche 1 L por 4200 pesos\". Verificá que el total dé 4200.",
      "Armá una lista con 5 ventas inventadas (sucursal y total) y usá el for de la lección para sumar por sucursal. Compará el resultado con la cuenta hecha a mano.",
      "Agregá al ejemplo de las cantidades un caso para el 0: que muestre \"0 no es una venta\". Probá con la lista [0, 2, 400] y anotá las 3 líneas que salen.",
    ],
    recursos: [
      { t: "Libro: Curso intensivo de Python, 3.ª edición, de Eric Matthes (Anaya)", url: "https://www.anayamultimedia.es/libro/titulos-especiales/curso-intensivo-de-python-tercera-edicion-eric-matthes-9788441549241/" },
      { t: "Python: tutorial oficial en español (Una introducción informal)", url: "https://docs.python.org/es/3/tutorial/introduction.html" },
      { t: "Python: estructuras de datos (listas y diccionarios)", url: "https://docs.python.org/es/3/tutorial/datastructures.html" },
    ],
    quiz: [
      { q: "Si querés guardar que se vendieron 2 unidades, ¿qué escribís?", opciones: ["cantidad = 2","cantidad == 2","2 = cantidad","\"cantidad\" = 2"], correcta: 0, explicacion: "El signo = guarda el valor con ese nombre. El == tienta porque parece más \"igual\", pero sirve para comparar, no para guardar." },
      { q: "Tu planilla trae el precio como texto, \"4800\". ¿Qué tipo de dato es?", opciones: ["int","str: está entre comillas, es texto","float","bool"], correcta: 1, explicacion: "Todo lo que está entre comillas es texto (str), aunque adentro haya números. Que sea int tienta porque ves dígitos, pero para Python es texto hasta que lo convertís con int()." },
      { q: "Si corrés print(\"Total: \" + 9600) y aparece TypeError, ¿qué hacés?", opciones: ["Borrás el print","Reinstalás Python","Lo escribís con un f-string, o convertís el número con str(9600)","Cambiás el + por un -"], correcta: 2, explicacion: "Python no pega texto con número sin que se lo digas. Reinstalar tienta cuando aparece un error, pero el mensaje dice exactamente que el problema son los tipos mezclados." },
      { q: "Querés mostrar \"Se vendieron 3 unidades\" usando la variable cantidad. ¿Cuál funciona?", opciones: ["print(\"Se vendieron {cantidad} unidades\")","print(Se vendieron cantidad unidades)","print(\"Se vendieron\" cantidad \"unidades\")","print(f\"Se vendieron {cantidad} unidades\")"], correcta: 3, explicacion: "Con la f adelante, lo que va entre llaves se reemplaza por el valor. Sin la f tienta porque se ve casi igual, pero mostraría {cantidad} tal cual." },
      { q: "Tenés venta = {\"sucursal\": \"Norte\", \"total\": 8700}. ¿Cómo leés el total?", opciones: ["venta[\"total\"]","venta.total()","venta[1]","total(venta)"], correcta: 0, explicacion: "En un diccionario se lee por la clave entre corchetes. venta[1] tienta porque en las listas se usa la posición, pero un diccionario no se recorre por número." },
      { q: "Si ventas es una lista de 3 ventas, ¿qué te da ventas[0]?", opciones: ["Un error, no existe la posición 0","La primera venta: las posiciones empiezan en 0","La última venta","La cantidad de ventas"], correcta: 1, explicacion: "En Python la primera posición es la 0. Que dé error tienta porque en la vida contamos desde 1, y es el error más común al empezar." },
      { q: "Querés agregar la columna total a un diccionario venta que ya tiene cantidad y precio. ¿Qué escribís?", opciones: ["venta + total","total = venta","venta[\"total\"] = venta[\"cantidad\"] * venta[\"precio\"]","venta.agregar(\"total\")"], correcta: 2, explicacion: "Asignar a una clave nueva la crea. venta.agregar tienta porque suena a castellano, pero los diccionarios no tienen esa función." },
      { q: "Tenés 947 ventas en una lista. ¿Cómo sabés cuántas son sin contarlas?", opciones: ["ventas[947]","count(ventas)","ventas.size","len(ventas)"], correcta: 3, explicacion: "len() cuenta los elementos de una lista. ventas[947] tienta, pero pide el elemento en esa posición, que además no existe porque la última es la 946." },
      { q: "Si escribís un for y lo de adentro no se repite, ¿qué revisás primero?", opciones: ["La sangría: lo que se repite va corrido 4 espacios a la derecha","Que la lista sea más corta","Que el for esté en mayúsculas","El nombre de la variable"], correcta: 0, explicacion: "La sangría le dice a Python qué está adentro del for. El nombre de la variable tienta porque es lo que cambiaste, pero cualquier nombre sirve mientras sea el mismo." },
      { q: "Querés sumar el total de cada sucursal recorriendo las ventas. ¿Qué estructura usás para ir acumulando?", opciones: ["Una variable por sucursal escrita a mano","Un diccionario: la clave es la sucursal y el valor va sumando","Una lista vacía","Un if por cada venta"], correcta: 1, explicacion: "El diccionario acumula sin saber de antemano cuántas sucursales hay. Una variable por sucursal tienta con 3, pero se rompe en cuanto aparece \"sur\" escrita distinto o una sucursal nueva." },
      { q: "Si querés marcar las ventas de más de 10 unidades como raras, ¿qué condición escribís?", opciones: ["if c = 10:","if c == 10:","if c > 10:","for c > 10:"], correcta: 2, explicacion: "El > compara mayor que. c == 10 tienta porque aparece el 10, pero solo marcaría las de exactamente 10, y la de 400 pasaría sin aviso." },
      { q: "¿Qué hace totales.get(suc, 0) cuando la sucursal todavía no está en el diccionario?", opciones: ["Da un error","Borra el diccionario","Agrega la sucursal con None","Devuelve 0, así podés empezar a sumar"], correcta: 3, explicacion: "get devuelve el valor por defecto si la clave no existe. Que dé error tienta porque totales[suc] sí falla con una clave nueva, y por eso se usa get." },
    ],
  },
  {
    id: "python-2",
    icono: "🧰",
    titulo: "Python: funciones, errores y fechas",
    nivel: "Básico",
    objetivos: [
      "Escribir una función que limpia un dato y probarla con assert",
      "Convertir textos a números sin que el programa se caiga, usando try y except",
      "Leer fechas escritas de dos formas distintas con el módulo datetime y detectar las ambiguas",
    ],
    lecciones: [
      { titulo: "Funciones: escribir una vez, usar mil veces", html: `
        <p class="idea">Una función es como una receta con nombre: la escribís una vez y después decís "hacé la receta de limpiar sucursal" cada vez que la necesitás. Si mañana descubrís un error, lo corregís en un solo lugar.</p>
      <p>En la planilla sucia de La Esquina, la misma sucursal aparece escrita de varias formas: "sur", "SUR", "Sur " con un espacio al final. Una función lo arregla:</p>
      <pre><code>def limpiar_sucursal(texto):
    return texto.strip().capitalize()

for t in ["sur", "SUR", "Sur ", "Centro", " norte"]:
    print(repr(t), "queda", repr(limpiar_sucursal(t)))</code></pre>
      <pre><code>Salida:
'sur' queda 'Sur'
'SUR' queda 'Sur'
'Sur ' queda 'Sur'
'Centro' queda 'Centro'
' norte' queda 'Norte'</code></pre>
      <p>Se lee así: <code>def</code> define una función llamada <code>limpiar_sucursal</code> que recibe un <strong>parámetro</strong> (<code>texto</code>) y con <code>return</code> devuelve el resultado. Adentro, <code>strip()</code> saca los espacios de los costados y <code>capitalize()</code> deja la primera letra en mayúscula y el resto en minúscula. <code>repr()</code> muestra el texto con comillas, así se ven los espacios.</p>
      <p><strong>Probá tus funciones.</strong> <code>assert</code> comprueba que algo sea cierto; si no lo es, el programa se frena con un error. Es la forma más simple de un <strong>test</strong>: un control automático de que el código hace lo que tiene que hacer.</p>
      <pre><code>def limpiar_sucursal(texto):
    return texto.strip().capitalize()

assert limpiar_sucursal(" norte ") == "Norte"
assert limpiar_sucursal("CENTRO") == "Centro"
print("Las pruebas pasaron")</code></pre>
      <pre><code>Salida:
Las pruebas pasaron</code></pre>
      <p>Si un día alguien cambia la función y la rompe, el assert lo avisa en el momento, antes de que un total salga mal en un informe. Los data engineers escriben tests todo el tiempo: lo vas a ver a fondo en el módulo de calidad.</p>
      <table>
        <tr><th>Sin función</th><th>Con función</th></tr>
        <tr><td>Copiás la misma limpieza en 5 lugares</td><td>La escribís una vez</td></tr>
        <tr><td>Un arreglo hay que hacerlo 5 veces</td><td>Se arregla en un solo lugar</td></tr>
        <tr><td>Difícil de probar</td><td>Se prueba sola con assert</td></tr>
      </table>
      ` },
      { titulo: "Cuando algo falla: try y except", html: `
        <p class="idea">Un pipeline procesa miles de filas. Si una sola trae basura y el programa se cae, no se carga ninguna. A veces conviene atajar el error, anotarlo y seguir; otras veces conviene frenar todo. Saber cuál es cuál es parte del oficio.</p>
      <p>En la planilla sucia, algunos precios vienen escritos como "$1.250". Si intentás convertirlo a número directamente, Python se queja:</p>
      <pre><code>print(int("$1.250"))</code></pre>
      <pre><code>Error:
ValueError: invalid literal for int() with base 10: '$1.250'</code></pre>
      <p><em>ValueError</em> quiere decir que el valor no sirve para esa operación. Con <code>try</code> y <code>except</code> le decís a Python: "probá esto, y si da este error, hacé esto otro":</p>
      <pre><code>def a_numero(texto):
    try:
        return int(texto.replace("$", "").replace(".", ""))
    except ValueError:
        return None

for t in ["1250", "$1.250", "mil"]:
    print(t, "queda", a_numero(t))</code></pre>
      <pre><code>Salida:
1250 queda 1250
$1.250 queda 1250
mil queda None</code></pre>
      <p>La función saca el signo $ y los puntos de miles, y convierte. Si igual no se puede ("mil"), devuelve <code>None</code>, que en Python quiere decir "no hay valor". Así el programa sigue, y después podés contar cuántos <code>None</code> hubo.</p>
      <p><strong>¿Atajar o frenar?</strong></p>
      <table>
        <tr><th>Situación</th><th>Qué conviene</th><th>Por qué</th></tr>
        <tr><td>Un formato conocido que sabés arreglar ("$1.250")</td><td>Atajarlo y arreglarlo</td><td>Sabés exactamente qué significa</td></tr>
        <tr><td>Unas pocas filas raras entre miles</td><td>Atajarlo, apartarlas y avisar</td><td>Las buenas se cargan; las malas se revisan</td></tr>
        <tr><td>El archivo entero tiene otra forma</td><td>Frenar todo</td><td>Seguir cargaría datos equivocados en silencio</td></tr>
      </table>
      <p>El error que nunca hay que cometer es <code>except:</code> solo, sin decir cuál error, y sin anotar nada: esconde todos los problemas, incluso los que no conocés. Atrapá siempre el error que esperás, como <code>ValueError</code>.</p>
      ` },
      { titulo: "Usar lo que ya existe: módulos y fechas", html: `
        <p class="idea">No hace falta inventar todo. Python trae una caja de herramientas enorme, la <strong>biblioteca estándar</strong>, organizada en <strong>módulos</strong>. Para usar uno, lo importás. Las fechas son el primer caso donde te conviene.</p>
      <p>En la planilla sucia hay fechas escritas de dos formas: "2025-03-14" (año-mes-día) y "14/03/2025" (día/mes/año). El módulo <code>datetime</code> las lee si le decís el formato:</p>
      <pre><code>from datetime import datetime

a = datetime.strptime("2025-03-14", "%Y-%m-%d").date()
b = datetime.strptime("14/03/2025", "%d/%m/%Y").date()
print(a, b, a == b)
print(a.month, a.strftime("%d/%m/%Y"))</code></pre>
      <pre><code>Salida:
2025-03-14 2025-03-14 True
3 14/03/2025</code></pre>
      <p><code>strptime</code> convierte un texto en fecha siguiendo un patrón: <code>%Y</code> es el año con 4 cifras, <code>%m</code> el mes y <code>%d</code> el día. Una vez que es fecha, podés pedirle el mes (<code>a.month</code>) o escribirla como quieras con <code>strftime</code>.</p>
      <p>Una función que prueba los dos formatos, combinando lo que viste:</p>
      <pre><code>from datetime import datetime

def leer_fecha(texto):
    for formato in ["%Y-%m-%d", "%d/%m/%Y"]:
        try:
            return datetime.strptime(texto, formato).date()
        except ValueError:
            pass
    return None

for t in ["2025-03-14", "14/03/2025", "05/03/2025", "ayer"]:
    print(t, "queda", leer_fecha(t))</code></pre>
      <pre><code>Salida:
2025-03-14 queda 2025-03-14
14/03/2025 queda 2025-03-14
05/03/2025 queda 2025-03-05
ayer queda None</code></pre>
      <p><strong>La trampa de las fechas.</strong> "05/03/2025" puede ser 5 de marzo (como se escribe en Argentina) o 3 de mayo (como en Estados Unidos). Nada en el texto lo dice. Por eso la función fija el orden día/mes/año: es una decisión, y conviene anotarla en el diccionario de datos. Los programas que "adivinan" el formato se equivocan justo en estas.</p>
      <p><strong>Módulos que no vienen con Python.</strong> Hay miles más, hechos por otras personas, que se instalan con <code>pip</code>. El más usado en datos es pandas, que vas a ver en su propio módulo. En tu computadora se instala así (en el laboratorio de la página ya está):</p>
      <pre><code>pip install pandas</code></pre>
      ` },
    ],
    practica: [
      "Escribí una función limpiar_producto que saque los espacios de los costados de un texto, y probala con 2 assert: uno con \" Pan kg\" y otro con \"Pan kg \". Anotá si pasaron.",
      "Probá a_numero con estos 4 textos: \"900\", \"$900\", \"$12.500\" y \"doce\". Anotá qué devuelve cada uno y explicá por qué el último da None.",
      "Pasale a leer_fecha las fechas \"31/01/2025\", \"2025-02-28\" y \"13/13/2025\". Anotá los resultados y explicá por qué la última da None.",
    ],
    recursos: [
      { t: "Python: definir funciones (tutorial oficial en español)", url: "https://docs.python.org/es/3/tutorial/controlflow.html#defining-functions" },
      { t: "Python: errores y excepciones (tutorial oficial en español)", url: "https://docs.python.org/es/3/tutorial/errors.html" },
      { t: "Python: el módulo datetime y los códigos de formato", url: "https://docs.python.org/es/3/library/datetime.html#strftime-and-strptime-format-codes" },
    ],
    quiz: [
      { q: "Tenés que limpiar la sucursal en 5 partes de tu programa. ¿Qué conviene?", opciones: ["Una función limpiar_sucursal y usarla en las 5 partes","Copiar el código 5 veces","Limpiarla a mano en la planilla","Usar 5 variables distintas"], correcta: 0, explicacion: "Con una función, un arreglo se hace en un solo lugar. Copiar 5 veces tienta porque es rápido hoy, pero cuando encuentres un error vas a tener que arreglarlo 5 veces y alguna se te va a escapar." },
      { q: "Si pasás \"Sur \" (con un espacio al final) por texto.strip().capitalize(), ¿qué queda?", opciones: ["\"sur\"","\"Sur\"","\"SUR\"","\"Sur \""], correcta: 1, explicacion: "strip saca el espacio y capitalize deja solo la primera letra en mayúscula. \"Sur \" tienta porque ya parecía bien escrita, pero el espacio la hace distinta a \"Sur\" al agrupar." },
      { q: "Escribiste assert limpiar_sucursal(\"CENTRO\") == \"Centro\" y el programa sigue sin decir nada. ¿Qué significa?", opciones: ["Que el assert no se ejecutó","Que hay un error escondido","Que la prueba pasó: assert solo habla cuando algo no se cumple","Que la función no devolvió nada"], correcta: 2, explicacion: "assert se queda callado si la condición es cierta y frena con un error si no. Pensar que no se ejecutó tienta porque no ves ningún mensaje, pero el silencio es la buena noticia." },
      { q: "Tu función calcula el total, pero al usarla, siempre te da None. ¿Qué revisás?", opciones: ["Que los números sean enteros","Que el nombre tenga mayúsculas","Que tenga muchos parámetros","Que tenga return: sin return, la función no devuelve nada"], correcta: 3, explicacion: "Sin return, una función devuelve None. Revisar los números tienta porque es lo que estás calculando, pero la cuenta puede estar bien hecha y quedarse adentro de la función." },
      { q: "Si int(\"$1.250\") da ValueError, ¿qué pasó?", opciones: ["El texto tiene caracteres que no son números: el $ y el punto","El número es demasiado grande","Falta importar un módulo","int no existe en Python"], correcta: 0, explicacion: "int solo entiende dígitos. Que sea demasiado grande tienta porque 1.250 parece un número normal, pero el problema es el $ y el punto de miles." },
      { q: "Tu pipeline procesa 958 filas y 6 traen el precio como \"$1.250\". ¿Qué hacés?", opciones: ["Frenás todo el pipeline","Atajás ese formato conocido y lo convertís: sabés exactamente qué significa","Borrás esas 6 filas sin avisar","Las cargás como texto"], correcta: 1, explicacion: "Es un formato conocido con un arreglo seguro. Frenar todo tienta por prudencia, pero dejarías sin datos a todos por un problema que sabés resolver." },
      { q: "Ves en un código except: sin ningún error al lado, y adentro solo pass. ¿Qué problema tiene?", opciones: ["Ninguno, es más corto","Que es más lento","Que esconde todos los errores, incluso los que no conocés, sin dejar rastro","Que Python no lo permite"], correcta: 2, explicacion: "Un except vacío se traga cualquier error, incluso uno de programación. Que sea más corto tienta, pero te deja sin saber qué se perdió." },
      { q: "Si el archivo que te mandaron tiene columnas distintas a las de siempre, ¿qué tiene que hacer tu programa?", opciones: ["Adivinar qué columna es cada una","Cargarlo igual y ver después","Saltear el archivo sin avisar","Frenar y avisar: seguir cargaría datos equivocados en silencio"], correcta: 3, explicacion: "Cuando no sabés qué significa el dato, frenar es lo seguro. Cargarlo igual tienta para no cortar el proceso, pero los números equivocados llegan al informe sin que nadie lo note." },
      { q: "Querés leer la fecha \"14/03/2025\" como fecha. ¿Qué patrón usás con strptime?", opciones: ["\"%d/%m/%Y\"","\"%Y-%m-%d\"","\"%m/%d/%Y\"","\"dd/mm/yyyy\""], correcta: 0, explicacion: "%d es el día, %m el mes y %Y el año con 4 cifras, en el mismo orden y con las barras. \"dd/mm/yyyy\" tienta porque así se escribe en Excel, pero Python usa los códigos con %." },
      { q: "Si en tu planilla aparece \"05/03/2025\", ¿qué problema tiene?", opciones: ["Ninguno","Es ambigua: puede ser 5 de marzo o 3 de mayo, y el texto no lo dice","Le falta la hora","Está en el futuro"], correcta: 1, explicacion: "Con día y mes menores a 13, las dos lecturas son posibles. Que no tenga problema tienta porque a vos te parece obvio, pero un programa de Estados Unidos la leería como 3 de mayo." },
      { q: "¿Cómo resolvés la ambigüedad de las fechas en tu pipeline?", opciones: ["Dejás que el programa adivine el formato","Cambiás las fechas a mano","Decidís un formato fijo (día/mes/año), lo programás y lo anotás en el diccionario de datos","Borrás las fechas ambiguas"], correcta: 2, explicacion: "Es una decisión, y tiene que quedar escrita. Dejar que adivine tienta porque es automático, pero justo en las ambiguas se equivoca, y no te enterás." },
      { q: "Necesitás trabajar con fechas. ¿Qué hacés antes de escribir tu propio código?", opciones: ["Programar todo desde cero","Pedir otra planilla","Usar texto, sin convertir","Importar el módulo datetime, que ya sabe leer y comparar fechas"], correcta: 3, explicacion: "La biblioteca estándar ya resuelve las fechas, con años bisiestos y todo. Programarlo desde cero tienta para entenderlo, pero es fácil equivocarse en casos como el 29 de febrero." },
    ],
  },
  {
    id: "archivos",
    icono: "📄",
    titulo: "Leer y escribir datos: CSV y JSON",
    nivel: "Básico",
    objetivos: [
      "Leer un CSV con el módulo csv, con la codificación correcta, y contar sus filas",
      "Explicar por qué no se separa un CSV a mano con split(\",\") y mostrar el caso que lo rompe",
      "Convertir datos JSON anidados en filas de una tabla",
      "Elegir el formato de archivo según para qué se van a usar los datos",
    ],
    lecciones: [
      { titulo: "Leer un CSV con Python", html: `
        <p class="idea">Un <strong>CSV</strong> es una planilla guardada como texto: una fila por renglón y los valores separados por comas. Parece tan simple que dan ganas de separarlo a mano, y ahí empiezan los problemas.</p>
      <p>Así se lee la planilla sucia de La Esquina. Es el archivo real: en el laboratorio ya está cargado.</p>
      <pre><code>import csv

with open("ventas-sucias.csv", encoding="utf-8-sig", newline="") as f:
    filas = list(csv.DictReader(f))

print(len(filas))
print(filas[0])</code></pre>
      <pre><code>Salida:
958
{'id_venta': 'V0001', 'fecha': '2025-01-01', 'sucursal': 'Centro', 'categoria': 'Almacén', 'producto': 'Arroz 1 kg', 'cantidad': '4', 'precio_unitario': '1700', 'total': '6800', 'medio_pago': 'Efectivo', 'cliente': 'Habitual'}</code></pre>
      <p>Línea por línea: <code>open</code> abre el archivo; <code>with</code> se encarga de cerrarlo al terminar; <code>csv.DictReader</code> lee cada renglón como un diccionario, usando la primera fila como nombres de columna. Fijate que <strong>todo llega como texto</strong>: <code>'4'</code> y <code>'1700'</code> tienen comillas. Convertirlos a número es trabajo tuyo, como viste en el módulo anterior.</p>
      <p><strong>Por qué no separar con split(",").</strong> Un producto se llama "Gaseosa 1,5 L": tiene una coma adentro. El CSV lo resuelve poniéndolo entre comillas, y el módulo <code>csv</code> lo entiende. Separar a mano, no:</p>
      <pre><code>import csv

linea = 'V0002,2025-01-01,Centro,Bebidas,"Gaseosa 1,5 L",1,2100,2100,QR,Nuevo'
print(len(linea.split(",")))
print(len(next(csv.reader([linea]))))</code></pre>
      <pre><code>Salida:
11
10</code></pre>
      <p>Con <code>split</code> salen 11 pedazos para 10 columnas: desde la gaseosa, todo queda corrido un lugar. Es un error silencioso: no hay mensaje, solo números equivocados.</p>
      <p><strong>La codificación.</strong> Un archivo de texto se guarda con una <strong>codificación</strong>, la regla que dice qué bytes son cada letra. Casi siempre es UTF-8. Excel a veces agrega al principio una marca invisible llamada BOM. Con <code>encoding="utf-8-sig"</code> Python la saca; con <code>"utf-8"</code> solo, la marca queda pegada al nombre de la primera columna:</p>
      <pre><code>import csv

with open("ventas-sucias.csv", encoding="utf-8", newline="") as f:
    primera = next(csv.reader(f))[0]
print(repr(primera), primera == "id_venta")</code></pre>
      <pre><code>Salida:
'&#92;ufeffid_venta' False</code></pre>
      <p>Ese <code>&#92;ufeff</code> es la marca. Por eso <code>fila["id_venta"]</code> daría error aunque la columna "se vea" bien. Si un nombre de columna no anda y está bien escrito, sospechá de la codificación.</p>
      ` },
      { titulo: "JSON: datos con forma de árbol", html: `
        <p class="idea">Un CSV es una tabla plana: filas y columnas. Pero muchos datos tienen otra forma: un pedido tiene un cliente y varios productos adentro. Para eso existe <strong>JSON</strong>, el formato que usan casi todas las aplicaciones y páginas web para mandarse datos.</p>
      <p>Supongamos que La Esquina empieza a vender por internet, y la tienda online entrega los pedidos así:</p>
      <pre><code>import json

texto = """
[
  {"pedido": "W001", "cliente": {"tipo": "Nuevo"},
   "items": [{"producto": "Pan kg", "cantidad": 2, "precio": 2900},
             {"producto": "Leche 1 L", "cantidad": 3, "precio": 1400}]},
  {"pedido": "W002", "cliente": {"tipo": "Habitual"},
   "items": [{"producto": "Yerba 1 kg", "cantidad": 1, "precio": 4800}]}
]
"""
pedidos = json.loads(texto)
print(len(pedidos), "pedidos")
print(pedidos[0]["cliente"]["tipo"])
print(pedidos[0]["items"][1]["producto"])</code></pre>
      <pre><code>Salida:
2 pedidos
Nuevo
Leche 1 L</code></pre>
      <p><code>json.loads</code> convierte el texto en listas y diccionarios de Python, los mismos que ya conocés. Para llegar a un dato, vas entrando por las claves y las posiciones, como en un árbol: pedido, cliente, tipo.</p>
      <p><strong>Aplanar: de árbol a tabla.</strong> Para analizar, casi siempre conviene una fila por producto vendido. Se recorre con dos for, uno adentro del otro:</p>
      <pre><code>import json

pedidos = json.loads("""[
  {"pedido": "W001", "cliente": {"tipo": "Nuevo"},
   "items": [{"producto": "Pan kg", "cantidad": 2, "precio": 2900},
             {"producto": "Leche 1 L", "cantidad": 3, "precio": 1400}]},
  {"pedido": "W002", "cliente": {"tipo": "Habitual"},
   "items": [{"producto": "Yerba 1 kg", "cantidad": 1, "precio": 4800}]}
]""")

filas = []
for p in pedidos:
    for item in p["items"]:
        filas.append({"pedido": p["pedido"], "cliente": p["cliente"]["tipo"],
                      "producto": item["producto"], "total": item["cantidad"] * item["precio"]})

for f in filas:
    print(f)</code></pre>
      <pre><code>Salida:
{'pedido': 'W001', 'cliente': 'Nuevo', 'producto': 'Pan kg', 'total': 5800}
{'pedido': 'W001', 'cliente': 'Nuevo', 'producto': 'Leche 1 L', 'total': 4200}
{'pedido': 'W002', 'cliente': 'Habitual', 'producto': 'Yerba 1 kg', 'total': 4800}</code></pre>
      <p>De 2 pedidos salen 3 filas, porque el primero tenía 2 productos. Fijate que el dato del cliente se <strong>repite</strong> en cada fila de su pedido: es el precio de aplanar. Ese tipo de decisión (qué se repite, qué se pierde) es diseño de datos, y lo vas a ver con más detalle en SQL.</p>
      <table>
        <tr><th></th><th>CSV</th><th>JSON</th></tr>
        <tr><td>Forma</td><td>Tabla plana</td><td>Árbol: cosas adentro de cosas</td></tr>
        <tr><td>Tipos</td><td>Todo es texto</td><td>Distingue números, texto, verdadero/falso y listas</td></tr>
        <tr><td>Dónde lo vas a ver</td><td>Exportaciones de planillas y sistemas</td><td>Respuestas de aplicaciones y páginas web (APIs)</td></tr>
      </table>
      ` },
      { titulo: "Escribir archivos y elegir el formato", html: `
        <p class="idea">Leer es la mitad del trabajo. La otra mitad es dejar el resultado guardado para quien venga después: otro programa, un analista o vos mismo mañana. Y el formato que elijas le facilita o le complica la vida.</p>
      <p>Para escribir un CSV, el módulo <code>csv</code> tiene <code>DictWriter</code>: le decís las columnas y le pasás diccionarios. Acá se guarda un resumen y se vuelve a leer para comprobarlo:</p>
      <pre><code>import csv

resumen = [
    {"sucursal": "Centro", "ventas": 436, "total": 2891950},
    {"sucursal": "Sur", "ventas": 255, "total": 1708350},
    {"sucursal": "Norte", "ventas": 256, "total": 1670050},
]
with open("resumen.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["sucursal", "ventas", "total"])
    w.writeheader()
    w.writerows(resumen)

with open("resumen.csv", encoding="utf-8") as f:
    print(f.read())</code></pre>
      <pre><code>Salida:
sucursal,ventas,total
Centro,436,2891950
Sur,255,1708350
Norte,256,1670050</code></pre>
      <p>Dos detalles que evitan problemas: <code>"w"</code> quiere decir escribir (y <strong>reemplaza</strong> el archivo si ya existía), y <code>newline=""</code> evita renglones vacíos de más en Windows. Para JSON es parecido, con <code>json.dump</code>:</p>
      <pre><code>import json

resumen = {"Centro": 2891950, "Sur": 1708350, "Norte": 1670050}
with open("resumen.json", "w", encoding="utf-8") as f:
    json.dump(resumen, f, ensure_ascii=False, indent=2)

with open("resumen.json", encoding="utf-8") as f:
    print(f.read())</code></pre>
      <pre><code>Salida:
{
  "Centro": 2891950,
  "Sur": 1708350,
  "Norte": 1670050
}</code></pre>
      <p><code>indent=2</code> lo deja legible para una persona, y <code>ensure_ascii=False</code> guarda las tildes como tildes.</p>
      <p><strong>¿Qué formato elegir?</strong></p>
      <table>
        <tr><th>Formato</th><th>Conviene para</th><th>Cuidado con</th></tr>
        <tr><td>CSV</td><td>Pasar una tabla a cualquier programa, incluido Excel</td><td>Todo es texto; comas y codificación</td></tr>
        <tr><td>JSON</td><td>Datos anidados y comunicación entre aplicaciones</td><td>Para tablas grandes ocupa mucho</td></tr>
        <tr><td>Excel (.xlsx)</td><td>Entregarle algo a una persona</td><td>Celdas combinadas y colores que un programa no entiende</td></tr>
        <tr><td>Parquet</td><td>Guardar tablas grandes para analizar</td><td>No se abre con un editor de texto</td></tr>
      </table>
      <p><strong>Parquet</strong> es el formato estándar de los data engineers para tablas grandes: guarda los tipos (un número sigue siendo número), comprime mucho y guarda por columnas, así que leer solo 2 de 10 columnas es rápido. Lo vas a volver a ver en el módulo de la nube.</p>
      ` },
    ],
    practica: [
      "Leé ventas-limpias.csv con csv.DictReader y mostrá cuántas filas tiene. Tiene que dar 947. Después mostrá la fila de la posición 100 y anotá su producto.",
      "Agregá un tercer pedido al JSON de la lección con 2 productos y aplanalo. Verificá que ahora salgan 5 filas.",
      "Guardá el resumen por sucursal en resumen.csv y abrilo de nuevo con DictReader. Comprobá con un assert que la suma de los 3 totales da 6270350.",
    ],
    recursos: [
      { t: "Python: el módulo csv (documentación oficial en español)", url: "https://docs.python.org/es/3/library/csv.html" },
      { t: "Python: el módulo json (documentación oficial en español)", url: "https://docs.python.org/es/3/library/json.html" },
      { t: "Python: leer y escribir archivos (tutorial oficial en español)", url: "https://docs.python.org/es/3/tutorial/inputoutput.html#reading-and-writing-files" },
    ],
    quiz: [
      { q: "Si leés un CSV con csv.DictReader, ¿de qué tipo llega la columna cantidad?", opciones: ["Texto: el CSV no guarda tipos, hay que convertirla con int()","Número entero","Número con decimales","Depende de Excel"], correcta: 0, explicacion: "En un CSV todo es texto. Que llegue como número tienta porque ves dígitos, pero si sumás sin convertir, Python pega los textos: \"4\" + \"2\" da \"42\"." },
      { q: "Tu compañero separa cada renglón del CSV con split(\",\") y le salen columnas corridas en algunas filas. ¿Qué pasó?", opciones: ["El archivo está roto","Algún valor tiene una coma adentro, como \"Gaseosa 1,5 L\", y split no respeta las comillas","Faltan columnas","Hay que usar split(\";\")"], correcta: 1, explicacion: "El CSV protege las comas internas con comillas, y solo el módulo csv las entiende. Cambiar a punto y coma tienta, pero el problema vuelve con cualquier texto que tenga ese carácter." },
      { q: "Si fila[\"id_venta\"] da KeyError aunque la columna se ve bien escrita, ¿qué sospechás?", opciones: ["Que la fila está vacía","Que Python no lee CSV","La codificación: una marca BOM pegada al nombre; abrí con encoding=\"utf-8-sig\"","Que hay que reiniciar"], correcta: 2, explicacion: "La marca BOM es invisible y queda pegada al primer nombre de columna. Pensar que la fila está vacía tienta, pero el error dice que la clave no existe, no que no haya datos." },
      { q: "Tu compañero pregunta para qué sirve el with en with open(...) as f. ¿Qué le decís?", opciones: ["Para que el archivo se lea más rápido","Para abrir dos archivos a la vez","Para convertir el texto a números","Para que el archivo se cierre solo al terminar, aunque haya un error"], correcta: 3, explicacion: "with garantiza que el archivo se cierre. Que sea más rápido tienta, pero la velocidad es la misma: lo que evita es dejar archivos abiertos o a medio escribir." },
      { q: "Si una aplicación te manda los pedidos con un cliente y una lista de productos adentro de cada uno. ¿Qué formato es más probable?", opciones: ["JSON: guarda cosas adentro de cosas","CSV","Excel","Parquet"], correcta: 0, explicacion: "JSON es el formato de las aplicaciones y permite datos anidados. CSV tienta porque es el más conocido, pero una tabla plana no puede tener una lista adentro de una celda sin trucos." },
      { q: "Tenés 2 pedidos, uno con 2 productos y otro con 1. Si aplanás a una fila por producto, ¿cuántas filas quedan?", opciones: ["2","3","1","6"], correcta: 1, explicacion: "Una fila por producto vendido: 2 + 1 = 3. Dos tienta porque son 2 pedidos, pero al aplanar contás los productos, no los pedidos." },
      { q: "Al aplanar los pedidos, el tipo de cliente aparece repetido en varias filas. ¿Es un error?", opciones: ["Sí, hay que borrar las repetidas","Sí, el JSON estaba mal","No: es el precio de aplanar, y conviene saberlo para no contar clientes de más","No importa nunca"], correcta: 2, explicacion: "Al pasar de árbol a tabla, los datos del padre se repiten en cada hijo. Borrar las repetidas tienta, pero perderías productos vendidos; lo que hay que cuidar es no contar clientes con esas filas." },
      { q: "Si corrés dos veces un programa que escribe resumen.csv con open(\"resumen.csv\", \"w\"). ¿Qué tiene el archivo?", opciones: ["Los dos resúmenes, uno abajo del otro","Nada, da error","El primero","Solo el último: \"w\" reemplaza el archivo"], correcta: 3, explicacion: "El modo \"w\" empieza el archivo de cero. Que se sumen los dos tienta, pero eso hace el modo \"a\" (agregar), que en un pipeline puede duplicar datos." },
      { q: "Tenés que pasarle una tabla a una persona que usa Excel y a un programa que no conocés. ¿Qué formato elegís?", opciones: ["CSV: lo abre casi cualquier programa","Parquet","JSON","Una captura de pantalla"], correcta: 0, explicacion: "CSV es el formato más universal para tablas. Parquet tienta porque es el estándar de los data engineers, pero una persona con Excel no lo puede abrir." },
      { q: "Si guardás tablas de millones de filas que después se analizan leyendo pocas columnas. ¿Qué formato conviene?", opciones: ["CSV","Parquet: comprime, guarda tipos y lee por columnas","Excel","JSON"], correcta: 1, explicacion: "Parquet está pensado para eso. CSV tienta por simple, pero ocupa mucho más, pierde los tipos y obliga a leer el archivo entero aunque necesites 2 columnas." },
      { q: "Si escribís un JSON y las tildes aparecen como \\u00e1. ¿Qué agregás a json.dump?", opciones: ["indent=2","encoding=\"latin-1\"","ensure_ascii=False","sort_keys=True"], correcta: 2, explicacion: "ensure_ascii=False guarda las letras tal cual. indent tienta porque también mejora la lectura, pero solo agrega sangría y no cambia cómo se escriben las tildes." },
      { q: "Si leés un CSV y sumás la columna total sin convertir, te da '68005400...'. ¿Qué pasó?", opciones: ["El archivo tiene errores","Los totales son muy grandes","Python sumó mal","Sumaste textos: se pegaron uno detrás del otro. Hay que convertir con int()"], correcta: 3, explicacion: "Con textos, el + pega en vez de sumar. Que el archivo tenga errores tienta, pero los datos están bien: falta convertirlos a número antes de operar." },
    ],
  },
  {
    id: "sql-1",
    icono: "🗃️",
    titulo: "SQL: preguntarle a una base de datos",
    nivel: "Básico",
    objetivos: [
      "Crear una tabla en SQLite desde Python, cargarle filas y consultarlas",
      "Pedir solo las filas y columnas que necesitás con SELECT, WHERE, ORDER BY y LIMIT",
      "Resumir por grupo con GROUP BY y las funciones COUNT, SUM y AVG, y filtrar grupos con HAVING",
    ],
    lecciones: [
      { titulo: "Qué es una base de datos y cómo se le habla", html: `
        <p class="idea">Una planilla sirve mientras es chica y la usa una persona. Cuando son millones de filas, varias personas y programas a la vez, se usa una <strong>base de datos</strong>: un programa que guarda tablas de forma ordenada y responde preguntas rápido. Y se le pregunta en un idioma propio: <strong>SQL</strong>.</p>
      <p>SQL (se dice "ese-cu-ele" o "sícuel") es el lenguaje más usado en datos: casi todas las bases lo entienden. En el curso vas a usar <strong>SQLite</strong>, una base de datos completa que viene adentro de Python, así que no hay que instalar nada:</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE ventas (id_venta TEXT, sucursal TEXT, producto TEXT, total INTEGER)")
con.execute("INSERT INTO ventas VALUES ('V0001', 'Centro', 'Arroz 1 kg', 6800)")
con.execute("INSERT INTO ventas VALUES ('V0002', 'Centro', 'Agua 2 L', 5400)")
con.execute("INSERT INTO ventas VALUES ('V0003', 'Norte', 'Pan kg', 8700)")

for fila in con.execute("SELECT * FROM ventas"):
    print(fila)</code></pre>
      <pre><code>Salida:
('V0001', 'Centro', 'Arroz 1 kg', 6800)
('V0002', 'Centro', 'Agua 2 L', 5400)
('V0003', 'Norte', 'Pan kg', 8700)</code></pre>
      <p>Paso a paso: <code>connect(":memory:")</code> crea una base en la memoria (para guardarla en un archivo, ponés un nombre como <code>"la-esquina.db"</code>). <code>CREATE TABLE</code> crea una tabla y dice qué columnas tiene y de qué <strong>tipo</strong>: <code>TEXT</code> para texto, <code>INTEGER</code> para enteros. <code>INSERT</code> agrega una fila. <code>SELECT * FROM ventas</code> pide todas las columnas (el asterisco) de la tabla ventas.</p>
      <table>
        <tr><th>Planilla</th><th>Base de datos</th></tr>
        <tr><td>Una hoja</td><td>Una tabla</td></tr>
        <tr><td>Cualquier cosa en cualquier celda</td><td>Cada columna tiene un tipo y no acepta cualquier cosa</td></tr>
        <tr><td>La usa una persona a la vez</td><td>La usan muchas personas y programas a la vez</td></tr>
        <tr><td>Se pone lenta con cientos de miles de filas</td><td>Responde rápido con millones</td></tr>
      </table>
      <p>Las palabras de SQL (SELECT, FROM, CREATE) se suelen escribir en mayúsculas para distinguirlas de los nombres de tus tablas y columnas. No es obligatorio, pero se lee mucho mejor. Este módulo sigue el libro <em>Aprender SQL</em>, de Alan Beaulieu, un clásico para empezar.</p>
      ` },
      { titulo: "SELECT, WHERE y ORDER BY: pedir solo lo que necesitás", html: `
        <p class="idea">Con una base de datos no traés la tabla entera para buscar a ojo: le pedís exactamente lo que querés, como en una buena biblioteca donde decís "los libros de cocina de este año, ordenados por título" y te los traen.</p>
      <p>Primero se carga la planilla limpia de La Esquina en una tabla. Este pedazo se repite en los códigos que siguen, para que cada uno funcione solo:</p>
      <pre><code>import csv, sqlite3

con = sqlite3.connect(":memory:")
con.execute("""CREATE TABLE ventas (id_venta TEXT, fecha TEXT, sucursal TEXT, categoria TEXT,
    producto TEXT, cantidad INTEGER, precio_unitario INTEGER, total INTEGER, medio_pago TEXT, cliente TEXT)""")
with open("ventas-limpias.csv", encoding="utf-8-sig", newline="") as f:
    filas = [tuple(r.values()) for r in csv.DictReader(f)]
con.executemany("INSERT INTO ventas VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", filas)

print(con.execute("SELECT COUNT(*) FROM ventas").fetchone())</code></pre>
      <pre><code>Salida:
(947,)</code></pre>
      <p><code>executemany</code> inserta todas las filas de una vez. Los signos <code>?</code> son lugares que se llenan con cada fila: es la forma segura de pasar datos a SQL, y vas a ver por qué en el próximo módulo. Ahora sí, una pregunta: las 3 ventas más grandes de Norte en junio.</p>
      <pre><code>import csv, sqlite3

con = sqlite3.connect(":memory:")
con.execute("""CREATE TABLE ventas (id_venta TEXT, fecha TEXT, sucursal TEXT, categoria TEXT,
    producto TEXT, cantidad INTEGER, precio_unitario INTEGER, total INTEGER, medio_pago TEXT, cliente TEXT)""")
with open("ventas-limpias.csv", encoding="utf-8-sig", newline="") as f:
    con.executemany("INSERT INTO ventas VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [tuple(r.values()) for r in csv.DictReader(f)])

consulta = """
    SELECT fecha, producto, cantidad, total
    FROM ventas
    WHERE sucursal = 'Norte' AND fecha LIKE '2025-06%'
    ORDER BY total DESC
    LIMIT 3
"""
for fila in con.execute(consulta):
    print(fila)</code></pre>
      <pre><code>Salida:
('2025-06-15', 'Queso cremoso kg', 4, 39200)
('2025-06-19', 'Queso cremoso kg', 4, 39200)
('2025-06-01', 'Queso cremoso kg', 3, 29400)</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td><code>SELECT fecha, producto, ...</code></td><td>Qué columnas querés (no todas)</td></tr>
        <tr><td><code>FROM ventas</code></td><td>De qué tabla</td></tr>
        <tr><td><code>WHERE ... AND ...</code></td><td>Qué filas: las que cumplen las dos condiciones</td></tr>
        <tr><td><code>LIKE '2025-06%'</code></td><td>Que empiece con 2025-06: el <code>%</code> quiere decir "cualquier cosa después"</td></tr>
        <tr><td><code>ORDER BY total DESC</code></td><td>Ordenar por total, de mayor a menor (DESC; ASC es de menor a mayor)</td></tr>
        <tr><td><code>LIMIT 3</code></td><td>Solo las primeras 3</td></tr>
      </table>
      <p>El orden de las partes es fijo: SELECT, FROM, WHERE, ORDER BY, LIMIT. Si lo cambiás, la base contesta con un error de sintaxis. Fijate que los textos van entre comillas simples (<code>'Norte'</code>) y que la fecha se puede filtrar con LIKE porque está guardada como texto año-mes-día: por eso ese formato es el mejor para guardar fechas.</p>
      ` },
      { titulo: "GROUP BY: el resumen por grupo, en una línea", html: `
        <p class="idea">En el módulo de Python sumaste por sucursal con un for y un diccionario. En SQL, eso mismo es una sola línea: GROUP BY. Es la consulta que más vas a escribir en tu vida.</p>
      <p><code>GROUP BY</code> junta las filas que tienen el mismo valor en una columna, y las <strong>funciones de agregación</strong> calculan un número por grupo: <code>COUNT(*)</code> cuenta filas, <code>SUM</code> suma, <code>AVG</code> promedia, <code>MIN</code> y <code>MAX</code> dan el más chico y el más grande.</p>
      <pre><code>import csv, sqlite3

con = sqlite3.connect(":memory:")
con.execute("""CREATE TABLE ventas (id_venta TEXT, fecha TEXT, sucursal TEXT, categoria TEXT,
    producto TEXT, cantidad INTEGER, precio_unitario INTEGER, total INTEGER, medio_pago TEXT, cliente TEXT)""")
with open("ventas-limpias.csv", encoding="utf-8-sig", newline="") as f:
    con.executemany("INSERT INTO ventas VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [tuple(r.values()) for r in csv.DictReader(f)])

consulta = """
    SELECT sucursal, COUNT(*) AS ventas, SUM(total) AS total, ROUND(AVG(total)) AS ticket
    FROM ventas
    GROUP BY sucursal
    ORDER BY total DESC
"""
for fila in con.execute(consulta):
    print(fila)
print(con.execute("SELECT SUM(total) FROM ventas").fetchone())</code></pre>
      <pre><code>Salida:
('Centro', 436, 2891950, 6633.0)
('Sur', 255, 1708350, 6699.0)
('Norte', 256, 1670050, 6524.0)
(6270350,)</code></pre>
      <p><code>AS</code> le pone nombre a una columna calculada, y así se puede usar en el ORDER BY. Son los mismos números del curso <em>Datos con IA</em>: Centro vende más porque tiene más ventas, no porque cada venta sea más grande (el ticket es parecido en las tres). Y las tres partes suman el total general: ese <strong>control de suma</strong> es tu primera prueba de que nada se perdió.</p>
      <p><strong>WHERE o HAVING.</strong> <code>WHERE</code> filtra filas <em>antes</em> de agrupar; <code>HAVING</code> filtra grupos <em>después</em>. Por ejemplo, los productos con más de 70 ventas en el semestre:</p>
      <pre><code>import csv, sqlite3

con = sqlite3.connect(":memory:")
con.execute("""CREATE TABLE ventas (id_venta TEXT, fecha TEXT, sucursal TEXT, categoria TEXT,
    producto TEXT, cantidad INTEGER, precio_unitario INTEGER, total INTEGER, medio_pago TEXT, cliente TEXT)""")
with open("ventas-limpias.csv", encoding="utf-8-sig", newline="") as f:
    con.executemany("INSERT INTO ventas VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [tuple(r.values()) for r in csv.DictReader(f)])

consulta = """
    SELECT producto, COUNT(*) AS ventas
    FROM ventas
    GROUP BY producto
    HAVING COUNT(*) &gt; 70
    ORDER BY ventas DESC
"""
for fila in con.execute(consulta):
    print(fila)</code></pre>
      <pre><code>Salida:
('Yerba 1 kg', 90)
('Arroz 1 kg', 79)
('Cerveza lata', 73)</code></pre>
      <p>La regla para recordarlo: si la condición habla de una fila ("que sea de Norte"), va en WHERE; si habla del grupo entero ("que tenga más de 70 ventas"), va en HAVING.</p>
      ` },
    ],
    practica: [
      "Usá el código de carga y pedí con SELECT las 5 ventas más chicas de Sur (ORDER BY total ASC LIMIT 5). Anotá el producto de la más chica.",
      "Escribí un GROUP BY por categoría con SUM(total). Verificá que Frescos dé 2679100 y que las 4 categorías sumen 6270350.",
      "Escribí una consulta con HAVING que muestre los medios de pago con más de 200 ventas. Anotá cuáles son y cuántas ventas tiene cada uno.",
    ],
    recursos: [
      { t: "Khan Academy: curso de SQL interactivo, gratis y en español", url: "https://es.khanacademy.org/computing/computer-programming/sql" },
      { t: "Python: el módulo sqlite3 (documentación oficial en español)", url: "https://docs.python.org/es/3/library/sqlite3.html" },
      { t: "SQLite: el lenguaje SQL que entiende (en inglés)", url: "https://www.sqlite.org/lang.html" },
    ],
    quiz: [
      { q: "Tu planilla de ventas ya tiene 2 millones de filas y la usan 5 personas y 2 programas a la vez. ¿Qué conviene?", opciones: ["Pasarla a una base de datos","Partirla en varias planillas","Usar una computadora más rápida","Mandarla por mail cada día"], correcta: 0, explicacion: "Una base de datos está hecha para mucho volumen y muchos usuarios a la vez. Partir la planilla tienta porque se abre más rápido, pero multiplica las copias y los errores al juntarlas." },
      { q: "Si escribís SELECT * FROM ventas, ¿qué te devuelve?", opciones: ["Solo la primera fila","Todas las columnas de todas las filas de la tabla ventas","La cantidad de filas","Las columnas con números"], correcta: 1, explicacion: "El asterisco significa todas las columnas, y sin WHERE vienen todas las filas. Que traiga solo la primera tienta porque a veces se ve así en pantalla, pero eso lo haría LIMIT 1." },
      { q: "Querés guardar el total de cada venta en una tabla. ¿Qué tipo de columna le ponés?", opciones: ["TEXT","No hace falta tipo","INTEGER: así se puede sumar y ordenar como número","DATE"], correcta: 2, explicacion: "Un total es un número entero. TEXT tienta porque en el CSV todo es texto, pero como texto \"9600\" quedaría antes que \"10000\" al ordenar." },
      { q: "Tu consulta tiene ORDER BY antes de WHERE y la base da error de sintaxis. ¿Qué pasó?", opciones: ["La tabla no existe","Faltan comillas","SQLite no sabe ordenar","El orden de las partes es fijo: SELECT, FROM, WHERE, ORDER BY, LIMIT"], correcta: 3, explicacion: "SQL exige ese orden. Pensar que faltan comillas tienta porque es un error común, pero acá el problema es dónde pusiste cada parte." },
      { q: "Querés las ventas de Norte de junio. ¿Qué condición escribís en el WHERE?", opciones: ["sucursal = 'Norte' AND fecha LIKE '2025-06%'","sucursal = 'Norte' OR fecha LIKE '2025-06%'","sucursal LIKE 'Norte' AND fecha = '2025-06'","sucursal = Norte AND fecha = junio"], correcta: 0, explicacion: "AND exige las dos condiciones y LIKE con % toma todo junio. OR tienta porque suena a sumar, pero traería todas las de Norte más todas las de junio de cualquier sucursal." },
      { q: "Si querés las ventas de mayor a menor, ¿qué escribís?", opciones: ["ORDER BY total ASC","ORDER BY total DESC","SORT total","GROUP BY total"], correcta: 1, explicacion: "DESC ordena de mayor a menor. ASC tienta porque es el que se usa por defecto, pero va de menor a mayor." },
      { q: "Tenés que mostrar solo las 10 ventas más grandes. ¿Qué agregás después del ORDER BY total DESC?", opciones: ["WHERE 10","TOP 10 al final","LIMIT 10","COUNT(10)"], correcta: 2, explicacion: "LIMIT corta el resultado. TOP 10 tienta porque existe en otras bases, como SQL Server, pero SQLite y la mayoría usan LIMIT." },
      { q: "¿Por qué conviene guardar las fechas como 2025-06-14 y no como 14/06/2025?", opciones: ["Porque ocupa menos","Porque es más lindo","Porque es el formato argentino","Porque así se ordenan bien y se filtran por mes con LIKE '2025-06%'"], correcta: 3, explicacion: "Año-mes-día ordena bien aunque sea texto. Que sea el formato argentino tienta, pero el argentino es el otro, y ordenado como texto pone el 14/06 antes que el 15/01." },
      { q: "Querés la cantidad de ventas y el total de cada sucursal. ¿Qué consulta usás?", opciones: ["SELECT sucursal, COUNT(*), SUM(total) FROM ventas GROUP BY sucursal","SELECT sucursal, total FROM ventas","SELECT COUNT(sucursal) FROM ventas","SELECT SUM(*) FROM ventas GROUP BY total"], correcta: 0, explicacion: "GROUP BY sucursal arma un grupo por sucursal y las funciones calculan cada número. SELECT sucursal, total tienta porque trae esos datos, pero fila por fila, sin resumir." },
      { q: "Después de un GROUP BY por sucursal, las tres sumas dan menos que el total general. ¿Qué concluís?", opciones: ["Que es normal","Que algunas filas quedaron afuera: el control de suma falló y hay que buscar cuáles","Que SUM redondea","Que hay que usar AVG"], correcta: 1, explicacion: "Las partes tienen que sumar el todo. Que sea normal tienta si la diferencia es chica, pero cualquier diferencia significa filas perdidas o con la sucursal mal escrita." },
      { q: "Si querés solo los productos con más de 70 ventas, ¿dónde va la condición COUNT(*) > 70?", opciones: ["En el WHERE","En el ORDER BY","En el HAVING: filtra grupos después de agrupar","En el SELECT"], correcta: 2, explicacion: "La condición habla del grupo, no de una fila, así que va en HAVING. WHERE tienta porque es donde van los filtros, pero filtra antes de agrupar y ahí todavía no existe el conteo." },
      { q: "Querés el total por sucursal pero solo de las ventas con QR. ¿Dónde filtrás el medio de pago?", opciones: ["En el HAVING","En el GROUP BY","En el LIMIT","En el WHERE: es una condición sobre cada fila, antes de agrupar"], correcta: 3, explicacion: "Que la venta sea con QR es una condición de cada fila. HAVING tienta porque la consulta tiene GROUP BY, pero HAVING es para condiciones sobre el grupo entero." },
    ],
  },
  {
    id: "sql-2",
    icono: "🔗",
    titulo: "SQL: unir tablas y diseñar la base",
    nivel: "Intermedio",
    objetivos: [
      "Unir dos tablas con JOIN y elegir entre INNER y LEFT según si podés perder filas",
      "Diseñar tablas con clave primaria y clave foránea para no repetir datos",
      "Modificar datos con UPDATE y DELETE sin romper nada, usando transacciones",
      "Pasar valores a una consulta con parámetros y explicar por qué un f-string es peligroso",
    ],
    lecciones: [
      { titulo: "JOIN: juntar dos tablas por una columna en común", html: `
        <p class="idea">En una base bien armada, cada cosa se guarda en su tabla: las ventas en una, los productos en otra. Para responder "¿cuánto vendió cada categoría?" hay que juntarlas, como cuando cruzás una lista de alumnos con la de notas por el número de documento. Eso es un <strong>JOIN</strong>.</p>
      <p>Una tabla de productos con su categoría, y una de ventas que solo dice el producto. Hay una venta de "Galletitas", un producto que nadie cargó en la tabla de productos:</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.executescript("""
    CREATE TABLE productos (producto TEXT, categoria TEXT);
    INSERT INTO productos VALUES ('Pan kg', 'Frescos'), ('Yerba 1 kg', 'Almacén'), ('Agua 2 L', 'Bebidas');
    CREATE TABLE ventas (id_venta TEXT, producto TEXT, total INTEGER);
    INSERT INTO ventas VALUES ('V1', 'Pan kg', 8700), ('V2', 'Yerba 1 kg', 9600),
                              ('V3', 'Pan kg', 2900), ('V4', 'Galletitas', 1500);
""")

print("INNER JOIN:")
for fila in con.execute("""SELECT v.id_venta, v.producto, p.categoria, v.total
                           FROM ventas v JOIN productos p ON v.producto = p.producto"""):
    print(fila)
print("LEFT JOIN:")
for fila in con.execute("""SELECT v.id_venta, v.producto, p.categoria, v.total
                           FROM ventas v LEFT JOIN productos p ON v.producto = p.producto"""):
    print(fila)</code></pre>
      <pre><code>Salida:
INNER JOIN:
('V1', 'Pan kg', 'Frescos', 8700)
('V2', 'Yerba 1 kg', 'Almacén', 9600)
('V3', 'Pan kg', 'Frescos', 2900)
LEFT JOIN:
('V1', 'Pan kg', 'Frescos', 8700)
('V2', 'Yerba 1 kg', 'Almacén', 9600)
('V3', 'Pan kg', 'Frescos', 2900)
('V4', 'Galletitas', None, 1500)</code></pre>
      <p><code>ON v.producto = p.producto</code> dice por qué columna se cruzan. Las letras <code>v</code> y <code>p</code> son apodos de cada tabla, para escribir menos. Y la diferencia clave:</p>
      <table>
        <tr><th>Tipo</th><th>Qué hace</th><th>Con la venta de Galletitas</th></tr>
        <tr><td><code>JOIN</code> (o INNER JOIN)</td><td>Deja solo las filas que encuentran pareja en las dos tablas</td><td>Desaparece, sin avisar</td></tr>
        <tr><td><code>LEFT JOIN</code></td><td>Deja todas las filas de la primera tabla, encuentren pareja o no</td><td>Aparece con categoría <code>None</code> (vacía)</td></tr>
      </table>
      <p><strong>La trampa del INNER JOIN.</strong> Con el JOIN común, la venta de $1.500 se perdió y nadie se enteró: el total por categoría daría menos que el total de ventas. Un data engineer usa LEFT JOIN cuando no puede perder filas, y después busca las que quedaron vacías: son un problema de datos para resolver (acá, un producto que falta cargar).</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.executescript("""
    CREATE TABLE productos (producto TEXT, categoria TEXT);
    INSERT INTO productos VALUES ('Pan kg', 'Frescos'), ('Yerba 1 kg', 'Almacén');
    CREATE TABLE ventas (id_venta TEXT, producto TEXT, total INTEGER);
    INSERT INTO ventas VALUES ('V1', 'Pan kg', 8700), ('V2', 'Yerba 1 kg', 9600), ('V4', 'Galletitas', 1500);
""")
sin_categoria = con.execute("""SELECT v.producto, COUNT(*) FROM ventas v
    LEFT JOIN productos p ON v.producto = p.producto
    WHERE p.producto IS NULL GROUP BY v.producto""").fetchall()
print("Productos sin cargar:", sin_categoria)</code></pre>
      <pre><code>Salida:
Productos sin cargar: [('Galletitas', 1)]</code></pre>
      <p><code>IS NULL</code> busca celdas vacías. En SQL, "vacío" se llama <strong>NULL</strong>, y se compara con <code>IS NULL</code>, nunca con <code>= NULL</code>.</p>
      ` },
      { titulo: "Claves y diseño: cada dato en un solo lugar", html: `
        <p class="idea">Si el nombre de la categoría está escrito en cada una de las 947 ventas, cambiarlo es cambiar 947 filas, y alguna se escapa. Una base bien diseñada guarda cada dato <strong>en un solo lugar</strong> y lo une con claves.</p>
      <p>Dos tipos de clave:</p>
      <table>
        <tr><th>Clave</th><th>Qué es</th><th>En La Esquina</th></tr>
        <tr><td><strong>Clave primaria</strong> (PRIMARY KEY)</td><td>La columna que identifica cada fila; no se puede repetir</td><td><code>id_venta</code> en ventas: no hay dos ventas V0001</td></tr>
        <tr><td><strong>Clave foránea</strong> (FOREIGN KEY)</td><td>Una columna que apunta a la clave primaria de otra tabla</td><td><code>producto</code> en ventas apunta a la tabla productos</td></tr>
      </table>
      <p>La clave primaria es tu primera defensa contra los duplicados. Si un pipeline intenta cargar dos veces la misma venta, la base se niega:</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE ventas (id_venta TEXT PRIMARY KEY, producto TEXT, total INTEGER)")
con.execute("INSERT INTO ventas VALUES ('V0001', 'Arroz 1 kg', 6800)")
con.execute("INSERT INTO ventas VALUES ('V0001', 'Arroz 1 kg', 6800)")</code></pre>
      <pre><code>Error:
sqlite3.IntegrityError: UNIQUE constraint failed: ventas.id_venta</code></pre>
      <p>Es un error, pero de los buenos: es la base cuidando los datos. En la planilla sucia hay 6 ventas duplicadas; con una clave primaria, no podrían haber entrado.</p>
      <p><strong>Normalizar</strong> es separar los datos en tablas para no repetirlos. El diseño de La Esquina, normalizado:</p>
      <pre><code>productos                        ventas
┌──────────────┬───────────┐     ┌──────────┬────────────┬────────────┬───────┐
│ producto (PK)│ categoria │◄────│ id_venta │ fecha      │ producto   │ total │
│              │           │     │   (PK)   │            │   (FK)     │       │
├──────────────┼───────────┤     ├──────────┼────────────┼────────────┼───────┤
│ Arroz 1 kg   │ Almacén   │     │ V0001    │ 2025-01-01 │ Arroz 1 kg │ 6800  │
│ Pan kg       │ Frescos   │     └──────────┴────────────┴────────────┴───────┘
└──────────────┴───────────┘</code></pre>
      <p>Si mañana "Frescos" pasa a llamarse "Frescos y lácteos", se cambia una fila en productos y todas las ventas lo ven. Para analizar, después se vuelve a juntar con un JOIN. En el módulo de data warehouse vas a ver que, para análisis, a veces conviene lo contrario: repetir a propósito para que las consultas sean más simples.</p>
      ` },
      { titulo: "Modificar con cuidado: UPDATE, DELETE, transacciones y parámetros", html: `
        <p class="idea">Leer datos nunca rompe nada. Modificarlos, sí: un DELETE mal escrito borra miles de filas en un segundo, y no hay "deshacer". Por eso se modifica con tres cuidados: WHERE siempre, transacciones y parámetros.</p>
      <p><strong>1. WHERE siempre.</strong> <code>UPDATE</code> cambia valores y <code>DELETE</code> borra filas, pero solo las que cumplen el WHERE. Sin WHERE, afecta a <em>todas</em>. Acá se corrige la venta de 400 unidades, que eran 4:</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.executescript("""
    CREATE TABLE ventas (id_venta TEXT PRIMARY KEY, cantidad INTEGER, precio INTEGER, total INTEGER);
    INSERT INTO ventas VALUES ('V0101', 2, 1300, 2600), ('V0102', 400, 4800, 1920000), ('V0103', 1, 900, 900);
""")
con.execute("UPDATE ventas SET cantidad = 4, total = 4 * precio WHERE id_venta = 'V0102'")
for fila in con.execute("SELECT * FROM ventas"):
    print(fila)</code></pre>
      <pre><code>Salida:
('V0101', 2, 1300, 2600)
('V0102', 4, 4800, 19200)
('V0103', 1, 900, 900)</code></pre>
      <p>Un truco profesional: antes de un UPDATE o DELETE, corré un <code>SELECT</code> con el mismo WHERE y mirá cuántas filas trae. Si esperabas 1 y trae 900, frená.</p>
      <p><strong>2. Transacciones: todo o nada.</strong> Una <strong>transacción</strong> agrupa varios cambios para que se hagan todos o ninguno. En Python, <code>with con:</code> confirma los cambios si todo sale bien (commit) y los deshace si hay un error (rollback):</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE ventas (id_venta TEXT PRIMARY KEY, total INTEGER)")
con.commit()
try:
    with con:
        con.execute("INSERT INTO ventas VALUES ('V1', 8700)")
        con.execute("INSERT INTO ventas VALUES ('V2', 9600)")
        con.execute("INSERT INTO ventas VALUES ('V1', 2900)")
except sqlite3.IntegrityError as e:
    print("Falló:", e)
print("Filas cargadas:", con.execute("SELECT COUNT(*) FROM ventas").fetchone()[0])</code></pre>
      <pre><code>Salida:
Falló: UNIQUE constraint failed: ventas.id_venta
Filas cargadas: 0</code></pre>
      <p>La tercera fila repetía V1, así que falló, y las dos anteriores <em>también</em> se deshicieron: quedaron 0 filas, no 2. En un pipeline eso es lo que querés: una carga a medias es peor que ninguna, porque nadie sabe qué entró y qué no.</p>
      <p><strong>3. Parámetros, nunca f-strings.</strong> Si armás una consulta pegando texto que viene de afuera, alguien puede meter SQL adentro. Se llama <strong>inyección SQL</strong> y es uno de los ataques más comunes:</p>
      <pre><code>import sqlite3

con = sqlite3.connect(":memory:")
con.executescript("""CREATE TABLE ventas (sucursal TEXT, total INTEGER);
    INSERT INTO ventas VALUES ('Norte', 8700), ('Centro', 9600), ('Sur', 2900);""")
pedido = "Norte' OR '1'='1"

peligroso = con.execute(f"SELECT * FROM ventas WHERE sucursal = '{pedido}'").fetchall()
seguro = con.execute("SELECT * FROM ventas WHERE sucursal = ?", (pedido,)).fetchall()
print("Con f-string:", len(peligroso), "filas")
print("Con parámetro:", len(seguro), "filas")</code></pre>
      <pre><code>Salida:
Con f-string: 3 filas
Con parámetro: 0 filas</code></pre>
      <p>Con el f-string, el texto raro se volvió parte de la consulta y trajo todas las filas. Con <code>?</code>, la base lo trata como un texto cualquiera, y no encuentra ninguna sucursal con ese nombre. Por eso en el módulo anterior cargaste los datos con signos de pregunta.</p>
      ` },
    ],
    practica: [
      "Agregá al ejemplo del JOIN una venta de \"Leche 1 L\" sin cargarla en productos. Corré el código de \"Productos sin cargar\" y verificá que ahora aparezcan 2 productos.",
      "En el ejemplo del UPDATE, escribí primero un SELECT con el mismo WHERE y anotá cuántas filas trae. Después probá el UPDATE sin WHERE en una copia y anotá qué le pasó a cada fila.",
      "En el ejemplo de la transacción, cambiá la tercera fila a V3 para que no falle. Anotá cuántas filas quedan cargadas: tienen que ser 3.",
    ],
    recursos: [
      { t: "SQLBolt: ejercicios de SQL en el navegador, incluidos los JOIN (en inglés)", url: "https://sqlbolt.com/" },
      { t: "Python: cómo usar parámetros en sqlite3 (documentación oficial en español)", url: "https://docs.python.org/es/3/library/sqlite3.html#sqlite3-placeholders" },
      { t: "OWASP: qué es la inyección SQL (en inglés)", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
    ],
    quiz: [
      { q: "Si querés el total por categoría y la categoría está en otra tabla, ¿qué usás?", opciones: ["Un JOIN entre ventas y productos por la columna producto","Copiar la categoría a mano en cada venta","Dos consultas y sumar a mano","Un GROUP BY sin JOIN"], correcta: 0, explicacion: "El JOIN cruza las tablas por la columna en común. Copiar la categoría a mano tienta porque es directo, pero repetís el dato en cada venta y cualquier cambio queda desparejo." },
      { q: "Hacés un JOIN común y el total por categoría da $1.500 menos que el total de ventas. ¿Qué pasó?", opciones: ["SUM redondeó","Una venta no encontró su producto en la otra tabla y el JOIN la descartó sin avisar","El JOIN suma dos veces","Falta un ORDER BY"], correcta: 1, explicacion: "El INNER JOIN deja solo las filas con pareja. Que SUM redondee tienta porque la diferencia es chica, pero SUM no redondea enteros: falta una fila." },
      { q: "No podés perder ninguna venta, aunque algunas no tengan producto cargado. ¿Qué JOIN usás?", opciones: ["INNER JOIN","Ninguno","LEFT JOIN, y después buscás las que quedaron con categoría vacía","Un JOIN por cada producto"], correcta: 2, explicacion: "LEFT JOIN conserva todas las filas de la primera tabla. INNER tienta porque es el que se escribe por defecto (JOIN solo), pero descarta en silencio las que no tienen pareja." },
      { q: "Si querés encontrar las filas con categoría vacía, ¿qué condición escribís?", opciones: ["WHERE categoria = NULL","WHERE categoria = ''","WHERE categoria = 0","WHERE categoria IS NULL"], correcta: 3, explicacion: "En SQL lo vacío es NULL y se compara con IS NULL. = NULL tienta porque es como comparás todo lo demás, pero nunca da verdadero, ni siquiera con un NULL." },
      { q: "Tu pipeline carga dos veces la venta V0001 en una tabla con id_venta PRIMARY KEY. ¿Qué pasa?", opciones: ["La base se niega con un error de restricción: la clave primaria no se repite","Quedan dos filas iguales","La segunda reemplaza a la primera","Se suman los totales"], correcta: 0, explicacion: "La clave primaria impide los duplicados. Que queden dos filas tienta porque es lo que pasaría en una planilla, y justo por eso la planilla sucia tiene 6 duplicadas." },
      { q: "Tenés la categoría escrita en cada una de las 947 ventas y hay que renombrar una. ¿Qué diseño lo evita?", opciones: ["Una planilla aparte","Normalizar: una tabla de productos con su categoría, y las ventas apuntan al producto","Escribir la categoría en mayúsculas","Usar un número en vez del nombre"], correcta: 1, explicacion: "Con la categoría en un solo lugar, el cambio es una fila. Usar números tienta porque ocupa menos, pero si el número se repite en cada venta el problema de fondo sigue." },
      { q: "En la tabla ventas, la columna producto apunta a la tabla productos. ¿Qué es?", opciones: ["Una clave primaria","Un índice","Una clave foránea","Un parámetro"], correcta: 2, explicacion: "Una columna que apunta a la clave de otra tabla es una clave foránea. Clave primaria tienta porque también es una clave, pero esa identifica las filas de su propia tabla." },
      { q: "Vas a borrar las ventas de prueba con DELETE. ¿Qué hacés primero?", opciones: ["Borrás directo, total se puede deshacer","Escribís DELETE FROM ventas sin WHERE","Hacés un UPDATE","Corrés un SELECT con el mismo WHERE y mirás cuántas filas trae"], correcta: 3, explicacion: "El SELECT te muestra qué vas a borrar antes de borrarlo. Pensar que se puede deshacer tienta, pero un DELETE confirmado no tiene vuelta atrás sin una copia." },
      { q: "Si escribís UPDATE ventas SET cantidad = 4 sin WHERE, ¿qué pasa?", opciones: ["Todas las ventas pasan a tener cantidad 4","Solo cambia la primera","Da error","No cambia nada"], correcta: 0, explicacion: "Sin WHERE, el UPDATE afecta a todas las filas. Que cambie solo la primera tienta porque es lo que querías, pero la base no adivina: hace lo que dice la consulta." },
      { q: "Tu carga inserta 3 filas dentro de with con: y la tercera falla. ¿Cuántas filas quedan?", opciones: ["2, las que salieron bien","0: la transacción deshace todo si algo falla","3","1"], correcta: 1, explicacion: "Una transacción es todo o nada. Que queden 2 tienta porque parece aprovechar el trabajo, pero una carga a medias es peor: nadie sabe qué entró y qué no." },
      { q: "Si un usuario escribe Norte' OR '1'='1 en un buscador que arma la consulta con un f-string, ¿qué pasa?", opciones: ["No encuentra nada","Da error y no pasa nada más","El texto se vuelve parte de la consulta y trae todas las filas: es una inyección SQL","Encuentra solo Norte"], correcta: 2, explicacion: "El texto rompe las comillas y agrega una condición que siempre es cierta. Que dé error tienta, pero la consulta queda bien escrita, solo que dice otra cosa." },
      { q: "Tenés que pasar a una consulta un valor que viene de afuera. ¿Cómo lo hacés?", opciones: ["Con un f-string","Sumando textos con +","Limpiando las comillas a mano","Con un parámetro: WHERE sucursal = ? y el valor aparte"], correcta: 3, explicacion: "Con parámetros, la base trata el valor como dato y nunca como SQL. Limpiar las comillas a mano tienta, pero siempre aparece un caso que se te escapa." },
    ],
  },
  {
    id: "pandas",
    icono: "🐼",
    titulo: "pandas: tablas en Python",
    nivel: "Intermedio",
    objetivos: [
      "Leer un CSV en un DataFrame y revisar su forma, sus columnas y sus tipos",
      "Filtrar filas, crear columnas y resumir por grupo con groupby",
      "Armar una tabla de doble entrada con pivot_table y unir tablas con merge",
      "Traducir una consulta de SQL a pandas y al revés",
    ],
    lecciones: [
      { titulo: "El DataFrame: una planilla adentro de Python", html: `
        <p class="idea">Con el módulo csv, cada fila es un diccionario y las cuentas las hacés vos con un for. <strong>pandas</strong> es una librería que trae la tabla entera como un solo objeto, el <strong>DataFrame</strong>, y te deja operar sobre columnas completas de una vez. Es la herramienta más usada en Python para datos.</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
print(v.shape)
print(v[["fecha", "sucursal", "producto", "total"]].head(3))
print(v.dtypes)</code></pre>
      <pre><code>Salida:
(947, 10)
        fecha sucursal    producto  total
0  2025-01-01   Centro  Arroz 1 kg   6800
1  2025-01-01   Centro    Agua 2 L   5400
2  2025-01-01      Sur    Agua 2 L    900
id_venta           object
fecha              object
sucursal           object
categoria          object
producto           object
cantidad            int64
precio_unitario     int64
total               int64
medio_pago         object
cliente            object
dtype: object</code></pre>
      <p><code>import pandas as pd</code> es la forma de siempre: todos le dicen <code>pd</code>. <code>read_csv</code> lee el archivo y, a diferencia del módulo csv, <strong>adivina los tipos</strong>: <code>total</code> ya es un número (<code>int64</code>). <code>shape</code> te dice filas y columnas; <code>head(3)</code>, las primeras 3 filas. Los textos aparecen como <code>object</code>.</p>
      <p><strong>Elegir columnas y filtrar filas.</strong> Con corchetes elegís columnas; con una condición adentro de los corchetes, filtrás filas:</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
norte = v[v["sucursal"] == "Norte"]
print(len(norte), norte["total"].sum())

grandes = v[(v["sucursal"] == "Norte") &amp; (v["total"] &gt; 30000)]
print(grandes[["fecha", "producto", "total"]])</code></pre>
      <pre><code>Salida:
256 1670050
          fecha          producto  total
528  2025-04-16  Queso cremoso kg  39200
741  2025-05-26  Queso cremoso kg  39200
858  2025-06-15  Queso cremoso kg  39200
878  2025-06-19  Queso cremoso kg  39200</code></pre>
      <p><code>v["sucursal"] == "Norte"</code> compara la columna entera de una vez y da una lista de verdadero/falso; <code>v[...]</code> se queda con las filas verdaderas. Para dos condiciones se usa <code>&amp;</code> ("y") o <code>|</code> ("o"), con cada condición entre paréntesis. Olvidarte los paréntesis es el error más común con pandas.</p>
      <table>
        <tr><th>Con csv y for</th><th>Con pandas</th></tr>
        <tr><td>Recorrés fila por fila</td><td>Operás sobre la columna entera</td></tr>
        <tr><td>Convertís cada número a mano</td><td>Los tipos se detectan solos (y hay que revisarlos)</td></tr>
        <tr><td>Bueno para entender qué pasa</td><td>Mucho más corto y rápido</td></tr>
      </table>
      <p>Ojo con "adivina los tipos": en la planilla sucia, una columna con un solo "$1.250" queda toda como texto. Revisar <code>dtypes</code> al leer es un hábito que te ahorra errores silenciosos.</p>
      ` },
      { titulo: "Transformar: columnas nuevas y resúmenes por grupo", html: `
        <p class="idea">Transformar es la "T" del trabajo del data engineer: tomar los datos como llegan y darles la forma que se necesita. En pandas, casi todo se arma con dos piezas: crear columnas y agrupar.</p>
      <p><strong>Columnas nuevas.</strong> Se asignan como en un diccionario, y la operación se hace en todas las filas a la vez:</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
v["mes"] = v["fecha"].str[:7]
v["es_grande"] = v["total"] &gt; 20000
print(v[["fecha", "mes", "total", "es_grande"]].head(3))
print(v.groupby("mes")["total"].sum())</code></pre>
      <pre><code>Salida:
        fecha      mes  total  es_grande
0  2025-01-01  2025-01   6800      False
1  2025-01-01  2025-01   5400      False
2  2025-01-01  2025-01    900      False
mes
2025-01     932250
2025-02     781600
2025-03    1149550
2025-04     939100
2025-05    1174950
2025-06    1292900
Name: total, dtype: int64</code></pre>
      <p><code>.str[:7]</code> toma los primeros 7 caracteres de cada fecha (año y mes). Y <code>groupby("mes")["total"].sum()</code> es el GROUP BY de SQL: agrupá por mes y sumá el total de cada grupo. Son los totales mensuales que ya conocés: el semestre crece, con febrero como el mes más flojo.</p>
      <p><strong>Varias cuentas a la vez</strong> con <code>agg</code>, poniéndole nombre a cada resultado:</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
resumen = v.groupby("sucursal").agg(
    ventas=("total", "count"),
    total=("total", "sum"),
    ticket=("total", "mean"),
).round().sort_values("total", ascending=False)
print(resumen)</code></pre>
      <pre><code>Salida:
          ventas    total  ticket
sucursal
Centro       436  2891950  6633.0
Sur          255  1708350  6699.0
Norte        256  1670050  6524.0</code></pre>
      <p>Es exactamente la consulta de GROUP BY del módulo de SQL, con el mismo resultado. Esa es la idea: <strong>SQL y pandas hacen lo mismo con distinta escritura</strong>, y un data engineer usa uno u otro según dónde estén los datos.</p>
      <table>
        <tr><th>SQL</th><th>pandas</th></tr>
        <tr><td><code>SELECT producto, total</code></td><td><code>v[["producto", "total"]]</code></td></tr>
        <tr><td><code>WHERE sucursal = 'Norte'</code></td><td><code>v[v["sucursal"] == "Norte"]</code></td></tr>
        <tr><td><code>GROUP BY mes ... SUM(total)</code></td><td><code>v.groupby("mes")["total"].sum()</code></td></tr>
        <tr><td><code>ORDER BY total DESC</code></td><td><code>.sort_values("total", ascending=False)</code></td></tr>
        <tr><td><code>LIMIT 3</code></td><td><code>.head(3)</code></td></tr>
      </table>
      ` },
      { titulo: "Reformar y unir: pivot_table y merge", html: `
        <p class="idea">A veces la tabla está bien, pero tiene la forma equivocada: querés los meses en las filas y las sucursales en las columnas, como una tabla dinámica de Excel. Y a veces la información que necesitás está en otra tabla. Para eso están <code>pivot_table</code> y <code>merge</code>.</p>
      <p><strong>pivot_table</strong> arma una tabla de doble entrada:</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
v["mes"] = v["fecha"].str[:7]
tabla = v.pivot_table(index="mes", columns="sucursal", values="total", aggfunc="sum")
print(tabla)
print(tabla.sum().sum())</code></pre>
      <pre><code>Salida:
sucursal  Centro   Norte     Sur
mes
2025-01   456000  142300  333950
2025-02   354600  182300  244700
2025-03   625150  258950  265450
2025-04   454000  259850  225250
2025-05   549100  306150  319700
2025-06   453100  520500  319300
6270350</code></pre>
      <p>Se lee de una: Norte crece todos los meses y en junio supera a Centro; Sur cae en abril, el mes en que cerró del 7 al 20. La última línea suma toda la tabla, y da el total de siempre: el control de suma también sirve para tablas reformadas.</p>
      <p><strong>merge</strong> es el JOIN de pandas. Supongamos que cada sucursal tiene una meta de ventas para el semestre, en una tabla aparte:</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
totales = v.groupby("sucursal", as_index=False)["total"].sum()
metas = pd.DataFrame({"sucursal": ["Centro", "Norte", "Sur"], "meta": [2800000, 1500000, 1800000]})

r = totales.merge(metas, on="sucursal", how="left")
r["cumplio"] = r["total"] &gt;= r["meta"]
print(r)</code></pre>
      <pre><code>Salida:
  sucursal    total     meta  cumplio
0   Centro  2891950  2800000     True
1    Norte  1670050  1500000     True
2      Sur  1708350  1800000    False</code></pre>
      <p><code>on="sucursal"</code> es la columna en común, y <code>how="left"</code> es el LEFT JOIN: conserva todas las filas de la primera tabla aunque no encuentren meta. Las mismas reglas del módulo de SQL valen acá: si usás <code>how="inner"</code> y una sucursal no tiene meta, desaparece sin avisar.</p>
      <p><strong>Un control antes de seguir:</strong> después de un merge, compará la cantidad de filas con la de antes. Si aumentó, la tabla de la derecha tenía claves repetidas y algunas filas se duplicaron; si bajó, se perdieron. Las dos cosas cambian los totales.</p>
      ` },
    ],
    practica: [
      "Filtrá con pandas las ventas de Sur pagadas con QR y mostrá cuántas son y cuánto suman. Escribí la misma consulta en SQL y verificá que den igual.",
      "Armá con pivot_table una tabla de categoría por sucursal. Verificá que la fila de Frescos sume 2679100.",
      "En el ejemplo de metas, cambiá how=\"left\" por how=\"inner\" y sacá a Sur de la tabla de metas. Anotá cuántas filas quedan y por qué.",
    ],
    recursos: [
      { t: "pandas: guía de 10 minutos para empezar (en inglés)", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
      { t: "pandas: comparación con SQL, consulta por consulta (en inglés)", url: "https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_sql.html" },
      { t: "Libro: Python para análisis de datos, de Wes McKinney, el creador de pandas (Anaya)", url: "https://latam.casadellibro.com/libro-python-para-analisis-de-datos-titulos-especiales/9788441546837/13475479" },
    ],
    quiz: [
      { q: "Si leés un CSV con pandas y querés saber cuántas filas y columnas tiene, ¿qué usás?", opciones: ["v.shape","len(v.columns)","v.head()","v.count"], correcta: 0, explicacion: "shape da filas y columnas juntas. head tienta porque te muestra la tabla, pero solo las primeras 5 filas, no cuántas hay." },
      { q: "Leíste la planilla sucia con pandas y la columna precio_unitario aparece como object. ¿Qué pasó?", opciones: ["Nada, es normal para números","Algún valor no es número (como \"$1.250\") y toda la columna quedó como texto","pandas está mal instalado","La columna está vacía"], correcta: 1, explicacion: "Con un solo valor que no es número, pandas trata la columna entera como texto. Que sea normal tienta, pero object es el tipo de los textos: sumarla no daría lo que esperás." },
      { q: "Querés las ventas de Norte de más de 30000 pesos. ¿Cuál funciona?", opciones: ["v[v[\"sucursal\"] == \"Norte\" and v[\"total\"] > 30000]","v[\"sucursal\" == \"Norte\" & \"total\" > 30000]","v[(v[\"sucursal\"] == \"Norte\") & (v[\"total\"] > 30000)]","v.where(Norte, 30000)"], correcta: 2, explicacion: "En pandas se usa & y cada condición va entre paréntesis. and tienta porque es el \"y\" de Python, pero no funciona con columnas enteras y da error." },
      { q: "Tu compañero suma por mes con un for que recorre 947 filas. ¿Qué le proponés?", opciones: ["Hacerlo en Excel","Agregar más prints","Recorrerlo dos veces para verificar","v.groupby(\"mes\")[\"total\"].sum(): lo mismo en una línea"], correcta: 3, explicacion: "groupby hace el resumen por grupo de una vez. Recorrerlo dos veces tienta para verificar, pero repetir el mismo método repite el mismo error; mejor compará con el total general." },
      { q: "Tenés la fecha como texto \"2025-03-14\" y querés una columna con el mes. ¿Qué escribís?", opciones: ["v[\"mes\"] = v[\"fecha\"].str[:7]","v[\"mes\"] = v[\"fecha\"][:7]","v[\"mes\"] = \"fecha\"[:7]","v.mes = 7"], correcta: 0, explicacion: ".str aplica la operación de texto a cada fila. Sin .str tienta porque se ve igual, pero toma las primeras 7 filas de la columna, no los primeros 7 caracteres de cada fecha." },
      { q: "Querés en una sola tabla la cantidad de ventas, el total y el ticket de cada sucursal. ¿Qué usás?", opciones: ["Tres groupby separados y copiar a mano","groupby(\"sucursal\").agg(...) con un nombre para cada cuenta","pivot_table sin parámetros","sort_values"], correcta: 1, explicacion: "agg calcula varias cosas por grupo de una vez. Tres groupby tientan porque cada uno es simple, pero juntarlos a mano es donde aparecen los errores." },
      { q: "Si tenés una consulta SQL con WHERE, GROUP BY y ORDER BY y la querés en pandas, ¿qué conviene?", opciones: ["No se puede","Reescribir todo con for","Filtro con corchetes, groupby y sort_values: cada parte tiene su equivalente","Exportar a Excel"], correcta: 2, explicacion: "SQL y pandas hacen lo mismo con distinta escritura. Reescribir con for tienta porque ya lo sabés hacer, pero es más largo y más fácil de equivocar." },
      { q: "Necesitás una tabla con los meses en las filas y las sucursales en las columnas. ¿Qué usás?", opciones: ["merge","head","groupby solo","pivot_table(index=\"mes\", columns=\"sucursal\", values=\"total\", aggfunc=\"sum\")"], correcta: 3, explicacion: "pivot_table arma la tabla de doble entrada, como una tabla dinámica. groupby tienta porque también agrupa, pero deja todo en una columna larga, sin repartir las sucursales en columnas." },
      { q: "Si reformás una tabla con pivot_table, ¿cómo comprobás que no se perdió nada?", opciones: ["Sumando toda la tabla y comparando con el total general","Mirándola","Contando las columnas","No hace falta, pivot_table no pierde datos"], correcta: 0, explicacion: "El control de suma vale para cualquier tabla. Confiar en que no pierde datos tienta, pero si había una sucursal mal escrita aparecería como columna aparte y el control lo mostraría." },
      { q: "Querés agregar a cada sucursal su meta, que está en otra tabla, sin perder ninguna sucursal. ¿Qué escribís?", opciones: ["totales.merge(metas, how=\"inner\")","totales.merge(metas, on=\"sucursal\", how=\"left\")","totales + metas","pd.concat([totales, metas])"], correcta: 1, explicacion: "merge con how=\"left\" es el LEFT JOIN y conserva todas las sucursales. concat tienta porque también junta tablas, pero las pone una abajo de la otra, sin cruzarlas por la sucursal." },
      { q: "Después de un merge, tu tabla pasó de 3 a 5 filas. ¿Qué sospechás?", opciones: ["Que está bien, merge agrega filas","Que pandas tiene un error","Que la tabla de la derecha tenía claves repetidas y se duplicaron filas","Que faltan datos"], correcta: 2, explicacion: "Si una clave aparece dos veces en la otra tabla, la fila se duplica. Que esté bien tienta porque parece más información, pero los totales quedan inflados." },
      { q: "Con pandas tu código es 5 veces más corto que con el módulo csv. ¿Por qué igual conviene haber aprendido el csv y el for?", opciones: ["No conviene, pandas lo reemplaza","Porque pandas no lee CSV","Porque es más rápido","Porque entendés qué pasa por dentro y podés revisar cuando pandas adivina mal los tipos"], correcta: 3, explicacion: "Saber qué hace pandas por dentro te deja detectar sus errores. Que pandas lo reemplace todo tienta, pero cuando adivina mal un tipo o un formato, el que lo arregla es quien entiende el paso a paso." },
    ],
  },
  {
    id: "calidad",
    icono: "✅",
    titulo: "Calidad de datos: que no entre basura",
    nivel: "Intermedio",
    objetivos: [
      "Diagnosticar una tabla con las 6 dimensiones de la calidad de datos antes de cambiar nada",
      "Limpiar la planilla sucia de La Esquina con pandas, paso a paso, y llegar a los valores de control",
      "Escribir una función de validación que frene el proceso si los datos no cumplen las reglas",
      "Apartar las filas malas en una cuarentena en vez de borrarlas",
    ],
    lecciones: [
      { titulo: "Las 6 dimensiones de la calidad: el diagnóstico", html: `
        <p class="idea">"Basura entra, basura sale": si los datos llegan mal, el mejor análisis del mundo da un resultado equivocado. Antes de limpiar, se diagnostica, como un médico que primero revisa y después receta.</p>
      <p>La calidad de los datos se suele medir en seis <strong>dimensiones</strong>. Cada una es una pregunta, y en la planilla sucia de La Esquina hay un ejemplo de casi todas:</p>
      <table>
        <tr><th>Dimensión</th><th>Pregunta</th><th>En la planilla sucia</th></tr>
        <tr><td>Completitud</td><td>¿Faltan datos?</td><td>Ventas sin cantidad</td></tr>
        <tr><td>Unicidad</td><td>¿Hay repetidos?</td><td>Filas duplicadas</td></tr>
        <tr><td>Validez</td><td>¿Cada valor tiene el formato y el rango correctos?</td><td>Precios como "$1.250"; una cantidad de 400</td></tr>
        <tr><td>Consistencia</td><td>¿Lo mismo se escribe siempre igual?</td><td>"Sur", "sur", "SUR "; fechas de dos formas</td></tr>
        <tr><td>Exactitud</td><td>¿El dato es cierto?</td><td>Solo se comprueba contra otra fuente, como la caja</td></tr>
        <tr><td>Actualidad</td><td>¿Llegó a tiempo?</td><td>Que el lunes estén las ventas del domingo</td></tr>
      </table>
      <p>Un diagnóstico con pandas, que <strong>no cambia nada</strong>: solo cuenta.</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-sucias.csv", dtype=str)
print("Filas:", len(v))
print("Duplicadas:", v.duplicated().sum())
print("Sin cantidad:", v["cantidad"].isna().sum())
print("Formas de escribir la sucursal:", v["sucursal"].nunique())
print("Fechas que no son año-mes-día:", (~v["fecha"].str.match(r"&#92;d{4}-&#92;d{2}-&#92;d{2}$")).sum())
print("Precios que no son solo números:", (~v["precio_unitario"].str.isdigit()).sum())
cant = pd.to_numeric(v["cantidad"], errors="coerce")
print("Cantidades de más de 10:", (cant &gt; 10).sum())</code></pre>
      <pre><code>Salida:
Filas: 958
Duplicadas: 6
Sin cantidad: 6
Formas de escribir la sucursal: 11
Fechas que no son año-mes-día: 10
Precios que no son solo números: 6
Cantidades de más de 10: 1</code></pre>
      <p><code>dtype=str</code> lee todo como texto, para que pandas no adivine ni cambie nada todavía. <code>duplicated()</code> marca las filas que ya aparecieron antes; <code>isna()</code>, las vacías; <code>nunique()</code> cuenta valores distintos. El <code>~</code> da vuelta verdadero y falso: "las que <em>no</em> cumplen".</p>
      <p>Un detalle: dice 6 ventas sin cantidad, pero son 5 ventas distintas, porque una de ellas también está duplicada. Los problemas se mezclan entre sí, y por eso en la limpieza importa el orden de los pasos: primero se sacan los duplicados y después se cuentan los vacíos.</p>
      <p>Son los mismos problemas que el curso <em>Datos con IA</em> le pedía encontrar a la IA. Acá los encontrás vos, con un código que se puede volver a correr mañana con la planilla nueva. Eso es un diagnóstico de data engineer: repetible.</p>
      ` },
      { titulo: "Limpiar con pandas, paso a paso", html: `
        <p class="idea">Limpiar no es "dejar la planilla linda": es aplicar decisiones concretas, una por problema, y poder explicar cada una. Por eso se hace paso a paso, mirando cuántas filas quedan después de cada uno.</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-sucias.csv", dtype=str)
print("Al empezar:", len(v))

v = v.drop_duplicates()
print("Sin duplicados:", len(v))

v = v.dropna(subset=["cantidad"])
print("Sin las ventas sin cantidad:", len(v))

v["sucursal"] = v["sucursal"].str.strip().str.capitalize()
print("Sucursales:", sorted(v["sucursal"].unique()))

iso = pd.to_datetime(v["fecha"], format="%Y-%m-%d", errors="coerce")
dmy = pd.to_datetime(v["fecha"], format="%d/%m/%Y", errors="coerce")
v["fecha"] = iso.fillna(dmy).dt.strftime("%Y-%m-%d")

v["precio_unitario"] = v["precio_unitario"].str.replace("$", "").str.replace(".", "").astype("int64")
v["cantidad"] = v["cantidad"].astype("int64").replace(400, 4)
v["total"] = v["cantidad"] * v["precio_unitario"]

print("Al terminar:", len(v), "ventas, total", v["total"].sum())</code></pre>
      <pre><code>Salida:
Al empezar: 958
Sin duplicados: 952
Sin las ventas sin cantidad: 947
Sucursales: ['Centro', 'Norte', 'Sur']
Al terminar: 947 ventas, total 6270350</code></pre>
      <p>Cada paso es una decisión que se puede defender:</p>
      <table>
        <tr><th>Paso</th><th>Decisión</th><th>Por qué</th></tr>
        <tr><td><code>drop_duplicates</code></td><td>Dejar una sola copia de cada fila repetida</td><td>Son la misma venta cargada dos veces</td></tr>
        <tr><td><code>dropna</code></td><td>Sacar las ventas sin cantidad</td><td>Sin cantidad no hay total: no se puede inventar</td></tr>
        <tr><td><code>strip().capitalize()</code></td><td>Unificar cómo se escribe la sucursal</td><td>"sur" y "Sur " son la misma</td></tr>
        <tr><td>Dos <code>to_datetime</code></td><td>Leer los dos formatos de fecha por separado y juntarlos</td><td>Nunca adivinar: se fija qué es día y qué es mes</td></tr>
        <tr><td>Precio a número</td><td>Sacar el $ y el punto de miles</td><td>"$1.250" es 1250</td></tr>
        <tr><td><code>replace(400, 4)</code></td><td>Corregir la cantidad imposible</td><td>Se confirmó con la sucursal que era un error de tipeo</td></tr>
        <tr><td>Recalcular total</td><td>total = cantidad × precio</td><td>El total de la fila corregida también estaba mal</td></tr>
      </table>
      <p>El resultado son las mismas 947 ventas y el mismo total de la planilla limpia: los <strong>valores de control</strong> del curso. Fijate en las fechas: con <code>errors="coerce"</code>, lo que no tiene el formato queda vacío en vez de dar error, y <code>fillna</code> completa esos vacíos con el otro formato. Así ninguna fecha se lee al revés.</p>
      <p>Otro detalle que parece menor: se escribe <code>astype("int64")</code> y no <code>astype(int)</code>. Con <code>int</code> a secas, el tamaño del número entero depende de la computadora (en el laboratorio del navegador sale más chico, <code>int32</code>). Ser explícito hace que el pipeline dé exactamente lo mismo en todos lados.</p>
      <p>Una advertencia: <code>replace(400, 4)</code> sirve porque hay una sola cantidad de 400 y se confirmó que era un error. Si mañana aparece otra venta de 400, este código la "corregiría" sin preguntar. En la próxima lección vas a ver cómo hacer que el pipeline avise en vez de arreglar a ciegas.</p>
      ` },
      { titulo: "Tests de datos: que el pipeline frene si algo está mal", html: `
        <p class="idea">Un test de código revisa que el programa haga lo que tiene que hacer. Un <strong>test de datos</strong> revisa que los datos cumplan las reglas. Los dos sirven para lo mismo: enterarte del problema en el momento, y no cuando alguien ve un número raro en un informe.</p>
      <p>Una función que junta todas las reglas y devuelve la lista de problemas. Si la lista está vacía, los datos pasan:</p>
      <pre><code>import pandas as pd

def validar(v):
    problemas = []
    if v["id_venta"].duplicated().any():
        problemas.append("hay ventas repetidas")
    if v["cantidad"].isna().any():
        problemas.append("hay ventas sin cantidad")
    if not set(v["sucursal"]) &lt;= {"Centro", "Norte", "Sur"}:
        problemas.append("hay sucursales desconocidas")
    cant = pd.to_numeric(v["cantidad"], errors="coerce")
    if ((cant &lt; 1) | (cant &gt; 10)).any():
        problemas.append("hay cantidades fuera de 1 a 10")
    return problemas

print("Limpias:", validar(pd.read_csv("ventas-limpias.csv")))
print("Sucias:", validar(pd.read_csv("ventas-sucias.csv")))</code></pre>
      <pre><code>Salida:
Limpias: []
Sucias: ['hay ventas repetidas', 'hay ventas sin cantidad', 'hay sucursales desconocidas', 'hay cantidades fuera de 1 a 10']</code></pre>
      <p>Con las limpias, la lista sale vacía; con las sucias, aparecen los cuatro problemas. <code>set(...) &lt;= {...}</code> pregunta si todas las sucursales están dentro de las permitidas. La regla "de 1 a 10 unidades" sale del diccionario de datos: las reglas no se inventan, se escriben con quien conoce el negocio.</p>
      <p><strong>Frenar o apartar.</strong> Con la lista de problemas hay dos caminos. Si el problema es grave (columnas que faltan, la mitad de las filas vacías), el pipeline <strong>frena</strong> con un error y no carga nada. Si son pocas filas raras, se apartan en una <strong>cuarentena</strong>: una tabla aparte para revisar, sin frenar el resto:</p>
      <pre><code>import pandas as pd

v = pd.read_csv("ventas-sucias.csv", dtype=str).drop_duplicates().dropna(subset=["cantidad"])
cant = v["cantidad"].astype("int64")
cuarentena = v[(cant &lt; 1) | (cant &gt; 10)]
buenas = v[(cant &gt;= 1) &amp; (cant &lt;= 10)]
print("Buenas:", len(buenas), "En cuarentena:", len(cuarentena))
print(cuarentena[["id_venta", "producto", "cantidad"]])</code></pre>
      <pre><code>Salida:
Buenas: 946 En cuarentena: 1
    id_venta    producto cantidad
869    V0864  Arroz 1 kg      400</code></pre>
      <p>La venta de 400 queda apartada, con su identificador, para que alguien pregunte en la sucursal. Es mejor que corregirla a ciegas y mucho mejor que borrarla: si era real (un pedido grande de un comercio), borrarla escondería justo el dato más interesante.</p>
      <table>
        <tr><th>Problema</th><th>Qué hace el pipeline</th></tr>
        <tr><td>Falta una columna o cambió el formato del archivo</td><td>Frena y avisa: no carga nada</td></tr>
        <tr><td>Unas pocas filas fuera de las reglas</td><td>Las aparta en cuarentena y carga el resto</td></tr>
        <tr><td>Un problema conocido con arreglo seguro ("$1.250")</td><td>Lo corrige y lo anota en el registro</td></tr>
      </table>
      ` },
    ],
    practica: [
      "Corré el diagnóstico con ventas-limpias.csv en vez de las sucias. Anotá los 6 números: todos los conteos de problemas tienen que dar 0 y las formas de escribir la sucursal, 3.",
      "Agregá a validar una regla: que ningún total sea negativo. Probala con una tabla de 2 filas inventadas, una con total -100, y verificá que aparezca el problema.",
      "Cambiá en la cuarentena el límite de 10 por 5 unidades. Anotá cuántas filas quedan en cuarentena y decidí si la regla nueva tiene sentido para el negocio.",
    ],
    recursos: [
      { t: "Libro: Fundamentos de ingeniería de datos, de Joe Reis y Matt Housley (Marcombo, 2023): gestión y calidad de datos", url: "https://www.librerianacional.com/fundamentos-de-ingenieria-de-datos-/p" },
      { t: "pandas: cómo trabajar con datos faltantes (en inglés)", url: "https://pandas.pydata.org/docs/user_guide/missing_data.html" },
      { t: "pandas: to_datetime y sus formatos (en inglés)", url: "https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html" },
    ],
    quiz: [
      { q: "Te llega una planilla nueva y te piden limpiarla. ¿Qué hacés primero?", opciones: ["Un diagnóstico que cuente los problemas sin cambiar nada","Borrar las filas raras","Corregir lo que se vea mal","Cargarla y ver si alguien se queja"], correcta: 0, explicacion: "Primero se mide, después se decide. Corregir lo que se vea mal tienta porque avanza rápido, pero sin diagnóstico no sabés cuántos problemas hay ni si tu arreglo los resolvió todos." },
      { q: "Si en tu tabla \"Sur\" aparece escrita de 4 formas distintas, ¿qué dimensión de la calidad falla?", opciones: ["Completitud","Consistencia: lo mismo no se escribe siempre igual","Actualidad","Unicidad"], correcta: 1, explicacion: "La consistencia pide que un mismo valor se escriba siempre igual. Unicidad tienta porque parece que hay \"de más\", pero habla de filas repetidas, no de valores escritos distinto." },
      { q: "Tus datos tienen el formato correcto, pero no sabés si la venta realmente ocurrió. ¿Qué dimensión es y cómo se comprueba?", opciones: ["Validez, con un regex","Completitud, contando vacíos","Exactitud: solo se comprueba contra otra fuente, como la caja","Unicidad, con duplicated"], correcta: 2, explicacion: "Un dato puede tener el formato perfecto y ser falso. Validez tienta porque es lo que se revisa con código, pero solo dice si el formato está bien, no si el dato es cierto." },
      { q: "Leés una planilla para diagnosticarla. ¿Por qué conviene dtype=str?", opciones: ["Porque es más rápido","Porque pandas no lee números","Porque ocupa menos memoria","Para que pandas lea todo como texto y no adivine ni cambie nada antes del diagnóstico"], correcta: 3, explicacion: "En el diagnóstico querés ver los datos tal como llegaron. Que sea más rápido tienta, pero el motivo es otro: si pandas adivina tipos, algunos problemas se esconden." },
      { q: "Si limpiás paso a paso, ¿qué conviene mostrar después de cada paso?", opciones: ["Cuántas filas quedan: así ves qué hizo cada decisión","Nada, solo el resultado final","Un gráfico","La primera fila"], correcta: 0, explicacion: "Contar filas en cada paso muestra el efecto de cada decisión. Mostrar solo el final tienta porque es lo que importa, pero si el número no da, no sabés en qué paso se fue." },
      { q: "Tenés fechas como \"2025-03-14\" y \"14/03/2025\" mezcladas. ¿Cómo las leés sin equivocarte?", opciones: ["Con format=\"mixed\" para que pandas adivine","Leyendo cada formato por separado con errors=\"coerce\" y juntando los resultados con fillna","Borrando las de un formato","Dejándolas como texto"], correcta: 1, explicacion: "Fijar cada formato evita leer el día como mes. Que pandas adivine tienta porque es una línea, pero con fechas como 05/03/2025 puede leerlas al revés sin avisar." },
      { q: "Tu limpieza termina con 947 ventas y un total de 6270350, como dicen los valores de control. ¿Qué te dice eso?", opciones: ["Que no hace falta revisar nada más nunca","Que los datos son exactos","Que tu limpieza reproduce la oficial: es la mejor señal de que no perdiste ni duplicaste filas","Que tuviste suerte"], correcta: 2, explicacion: "Coincidir con los valores de control es la prueba de que la limpieza es la acordada. Pensar que los datos son exactos tienta, pero el control no prueba que cada venta haya ocurrido, solo que no se perdió nada." },
      { q: "Tu código corrige con replace(400, 4). Mañana llega una venta real de 400 unidades. ¿Qué pasa?", opciones: ["Nada, el código la detecta","Da error","Queda en cuarentena","La \"corrige\" a 4 sin preguntar, y el dato real se pierde"], correcta: 3, explicacion: "Una corrección fija se aplica a ciegas. Que el código la detecte tienta, pero replace no distingue errores de datos reales: por eso conviene validar y apartar en vez de corregir siempre." },
      { q: "Si tu función validar devuelve una lista vacía, ¿qué significa?", opciones: ["Que los datos cumplen todas las reglas que escribiste","Que la función no se ejecutó","Que no hay datos","Que hay un error"], correcta: 0, explicacion: "La lista junta los problemas; vacía quiere decir ninguno. Que no se haya ejecutado tienta porque no muestra nada, pero si no se ejecutara no habría lista para imprimir." },
      { q: "¿De dónde sale la regla \"una venta tiene de 1 a 10 unidades\"?", opciones: ["La inventa el data engineer","Del diccionario de datos, acordado con quien conoce el negocio","De la IA","De pandas"], correcta: 1, explicacion: "Las reglas de validación vienen del negocio. Inventarla tienta porque parece razonable, pero si un comercio compra 20 unidades, una regla inventada frenaría ventas reales." },
      { q: "Llegan 958 filas y 1 tiene una cantidad imposible. ¿Qué hace el pipeline?", opciones: ["Frena todo y no carga nada","Borra la fila","Aparta esa fila en cuarentena con su identificador y carga el resto","La carga igual"], correcta: 2, explicacion: "Con pocas filas raras, se apartan para revisarlas y el resto sigue. Frenar todo tienta por prudencia, pero dejaría sin datos a todos por una sola fila." },
      { q: "Si el archivo de hoy llega sin la columna total, ¿qué tiene que hacer el pipeline?", opciones: ["Apartar todas las filas en cuarentena","Inventar el total","Cargar sin esa columna","Frenar y avisar: el archivo cambió de forma y no se puede confiar en nada"], correcta: 3, explicacion: "Un cambio de forma es un problema grave. La cuarentena tienta porque es lo que se hace con filas raras, pero acá el problema es todo el archivo, no algunas filas." },
    ],
  },
  {
    id: "pipelines",
    icono: "🚰",
    titulo: "Pipelines: extraer, transformar, cargar",
    nivel: "Intermedio",
    objetivos: [
      "Armar un pipeline ETL con tres funciones: extraer, transformar y cargar en una base de datos",
      "Hacer que correr el pipeline dos veces no duplique datos (idempotencia)",
      "Cargar solo lo nuevo con una marca de agua, en vez de todo cada vez",
      "Registrar con logs y controles qué pasó en cada paso, y frenar si algo no cierra",
    ],
    lecciones: [
      { titulo: "ETL: el pipeline en tres funciones", html: `
        <p class="idea">Todo lo que viste hasta acá (leer archivos, limpiar, cargar en una base) se arma en una sola cadena que corre de punta a punta. Se llama <strong>ETL</strong>, por sus siglas en inglés: <em>Extract</em> (extraer), <em>Transform</em> (transformar), <em>Load</em> (cargar). Es el pipeline más clásico.</p>
      <p>La clave de un buen pipeline es que cada etapa sea una función separada: así se prueba, se cambia y se arregla una sin tocar las otras.</p>
      <pre><code>import sqlite3
import pandas as pd

def extraer(ruta):
    return pd.read_csv(ruta, dtype=str)

def transformar(v):
    v = v.drop_duplicates().dropna(subset=["cantidad"]).copy()
    v["sucursal"] = v["sucursal"].str.strip().str.capitalize()
    iso = pd.to_datetime(v["fecha"], format="%Y-%m-%d", errors="coerce")
    dmy = pd.to_datetime(v["fecha"], format="%d/%m/%Y", errors="coerce")
    v["fecha"] = iso.fillna(dmy).dt.strftime("%Y-%m-%d")
    v["precio_unitario"] = v["precio_unitario"].str.replace("$", "").str.replace(".", "").astype("int64")
    v["cantidad"] = v["cantidad"].astype("int64").replace(400, 4)
    v["total"] = v["cantidad"] * v["precio_unitario"]
    return v

def cargar(v, con):
    v.to_sql("ventas", con, if_exists="replace", index=False)

con = sqlite3.connect("la-esquina.db")
cargar(transformar(extraer("ventas-sucias.csv")), con)
print(con.execute("SELECT sucursal, SUM(total) FROM ventas GROUP BY sucursal ORDER BY 2 DESC").fetchall())</code></pre>
      <pre><code>Salida:
[('Centro', 2891950), ('Sur', 1708350), ('Norte', 1670050)]</code></pre>
      <p>La última línea del pipeline se lee de adentro para afuera: extraer el CSV, transformarlo y cargarlo. <code>to_sql</code> es de pandas y crea la tabla en la base por vos. La base queda en un archivo, <code>la-esquina.db</code>, que cualquier programa o analista puede consultar con SQL. Los totales por sucursal son los de siempre: el pipeline reproduce la limpieza.</p>
      <pre><code>ventas-sucias.csv ──► extraer ──► transformar ──► cargar ──► la-esquina.db
     (fuente)          (leer)       (limpiar)      (guardar)     (destino)</code></pre>
      <p><strong>ETL o ELT.</strong> Hoy muchas empresas hacen <strong>ELT</strong>: primero cargan los datos crudos tal cual en un data warehouse y después los transforman ahí adentro, con SQL. Conviene cuando el warehouse es muy potente y querés guardar siempre el dato original.</p>
      <table>
        <tr><th></th><th>ETL</th><th>ELT</th></tr>
        <tr><td>Orden</td><td>Extraer, transformar, cargar</td><td>Extraer, cargar, transformar</td></tr>
        <tr><td>Dónde se transforma</td><td>En tu programa (Python)</td><td>Dentro del warehouse (SQL)</td></tr>
        <tr><td>El dato crudo</td><td>Puede no guardarse</td><td>Siempre queda guardado</td></tr>
      </table>
      <p>Las dos cosas se combinan. Lo importante es la idea de fondo, que vale para cualquier pipeline: etapas separadas, cada una con una sola responsabilidad.</p>
      ` },
      { titulo: "Idempotencia: correrlo dos veces no duplica nada", html: `
        <p class="idea">Un pipeline se va a correr muchas veces: todos los días, y a veces dos veces el mismo día porque falló a la mitad y alguien lo relanzó. Si cada vez que corre agrega las filas otra vez, los totales se duplican. Un pipeline <strong>idempotente</strong> da el mismo resultado lo corras una vez o diez.</p>
      <p>El error clásico: cargar agregando, sin mirar qué ya estaba.</p>
      <pre><code>import sqlite3
import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
con = sqlite3.connect(":memory:")
for corrida in [1, 2]:
    v.to_sql("ventas", con, if_exists="append", index=False)
    filas, total = con.execute("SELECT COUNT(*), SUM(total) FROM ventas").fetchone()
    print("Corrida", corrida, ":", filas, "filas, total", total)</code></pre>
      <pre><code>Salida:
Corrida 1 : 947 filas, total 6270350
Corrida 2 : 1894 filas, total 12540700</code></pre>
      <p>La segunda corrida duplicó todo, y ningún error avisó. La solución: una <strong>clave primaria</strong> y cargar con <code>INSERT OR REPLACE</code>, que si la venta ya existe la reemplaza en vez de agregarla otra vez:</p>
      <pre><code>import sqlite3
import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE ventas (id_venta TEXT PRIMARY KEY, fecha TEXT, sucursal TEXT, total INTEGER)")
filas = list(v[["id_venta", "fecha", "sucursal", "total"]].itertuples(index=False, name=None))
for corrida in [1, 2]:
    with con:
        con.executemany("INSERT OR REPLACE INTO ventas VALUES (?, ?, ?, ?)", filas)
    print("Corrida", corrida, ":", con.execute("SELECT COUNT(*), SUM(total) FROM ventas").fetchone())</code></pre>
      <pre><code>Salida:
Corrida 1 : (947, 6270350)
Corrida 2 : (947, 6270350)</code></pre>
      <p><strong>Cargar solo lo nuevo.</strong> Con 947 filas, recargar todo cada día no importa. Con 50 millones, sí. La técnica más común es la <strong>marca de agua</strong>: guardás hasta qué fecha cargaste, y la próxima vez traés solo lo posterior. Acá se simula: primero se carga hasta mayo, y después llega el archivo completo:</p>
      <pre><code>import sqlite3
import pandas as pd

todo = pd.read_csv("ventas-limpias.csv")
con = sqlite3.connect(":memory:")
todo[todo["fecha"] &lt; "2025-06-01"].to_sql("ventas", con, index=False)

marca = con.execute("SELECT MAX(fecha) FROM ventas").fetchone()[0]
nuevas = todo[todo["fecha"] &gt; marca]
nuevas.to_sql("ventas", con, if_exists="append", index=False)
print("Marca de agua:", marca)
print("Filas nuevas:", len(nuevas))
print("Total en la base:", con.execute("SELECT COUNT(*), SUM(total) FROM ventas").fetchone())</code></pre>
      <pre><code>Salida:
Marca de agua: 2025-05-31
Filas nuevas: 175
Total en la base: (947, 6270350)</code></pre>
      <p>Solo entraron las ventas de junio, y la base terminó igual que si se hubiera cargado todo. La trampa de la marca de agua: si una sucursal manda tarde una venta del 28 de mayo, queda antes de la marca y no entra nunca. Por eso muchos pipelines, además, vuelven a cargar los últimos días completos cada vez, con INSERT OR REPLACE para no duplicar.</p>
      ` },
      { titulo: "Logs y controles: saber qué pasó en cada paso", html: `
        <p class="idea">Un pipeline corre de madrugada y nadie lo mira. Si algo sale mal, la única forma de saber qué pasó es lo que el propio pipeline dejó anotado. Ese diario se llama <strong>log</strong>, y junto con los controles en cada paso es lo que separa un script de un pipeline confiable.</p>
      <p>Python trae el módulo <code>logging</code>, mejor que <code>print</code> porque cada mensaje tiene un nivel (información, advertencia, error) y se puede mandar a un archivo:</p>
      <pre><code>import logging, sys
import pandas as pd

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(levelname)s %(message)s")
log = logging.getLogger("pipeline")

v = pd.read_csv("ventas-sucias.csv", dtype=str)
log.info("extraer: %d filas", len(v))

antes = len(v)
v = v.drop_duplicates().dropna(subset=["cantidad"])
log.info("transformar: %d filas (se sacaron %d)", len(v), antes - len(v))

raras = (v["cantidad"].astype("int64") &gt; 10).sum()
if raras:
    log.warning("%d venta con cantidad fuera de rango", raras)

total = (v["cantidad"].astype("int64").replace(400, 4) * v["precio_unitario"].str.replace("$", "").str.replace(".", "").astype("int64")).sum()
if total != 6270350:
    log.error("el total %d no coincide con el control", total)
    raise SystemExit(1)
log.info("control de suma: total %d, coincide", total)</code></pre>
      <pre><code>Salida:
INFO extraer: 958 filas
INFO transformar: 947 filas (se sacaron 11)
WARNING 1 venta con cantidad fuera de rango
INFO control de suma: total 6270350, coincide</code></pre>
      <p>Cada línea dice qué paso corrió y con cuántas filas. Si un día el total no cierra, el log dice <code>ERROR</code> y el pipeline termina con <code>SystemExit(1)</code>: un código de salida distinto de 0, que es la forma estándar de avisarle al programa que lo lanzó (como el programador de tareas, en el módulo que sigue) que algo falló.</p>
      <table>
        <tr><th>Nivel</th><th>Cuándo usarlo</th><th>Ejemplo</th></tr>
        <tr><td><code>INFO</code></td><td>Todo bien, para saber qué pasó</td><td>"extraer: 958 filas"</td></tr>
        <tr><td><code>WARNING</code></td><td>Algo raro, pero se puede seguir</td><td>"1 venta en cuarentena"</td></tr>
        <tr><td><code>ERROR</code></td><td>No se puede seguir</td><td>"el total no coincide con el control"</td></tr>
      </table>
      <p><strong>Qué controlar en cada paso:</strong> cuántas filas entran y salen (y si la diferencia es la esperada), que las partes sumen el total, y que no falten columnas. Son los mismos controles que el curso <em>Datos con IA</em> le enseña a un analista, solo que acá los hace el pipeline solo, todos los días.</p>
      <p>Y si falla a la mitad: gracias a la transacción del módulo de SQL, la carga es todo o nada. Arreglás el problema, lo volvés a correr, y como es idempotente, no se duplica nada.</p>
      ` },
    ],
    practica: [
      "Corré el pipeline ETL dos veces seguidas. Después consultá COUNT(*) en la-esquina.db y verificá que dé 947, no 1894: if_exists=\"replace\" lo hace idempotente.",
      "En el ejemplo de la marca de agua, cargá primero solo hasta marzo. Anotá cuántas filas nuevas entran en la segunda carga y verificá que el total final sea 6270350.",
      "En el ejemplo de logs, cambiá el control a 6270000 para forzar el error. Anotá la línea de ERROR que aparece y qué pasa con el resto del programa.",
    ],
    recursos: [
      { t: "Libro: Fundamentos de ingeniería de datos, de Joe Reis y Matt Housley (Marcombo, 2023): ingesta y transformación", url: "https://www.librerianacional.com/fundamentos-de-ingenieria-de-datos-/p" },
      { t: "Python: el módulo logging, guía básica (en español)", url: "https://docs.python.org/es/3/howto/logging.html" },
      { t: "pandas: to_sql para cargar un DataFrame en una base (en inglés)", url: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_sql.html" },
    ],
    quiz: [
      { q: "Si armás tu pipeline como un solo bloque de 200 líneas, ¿qué problema vas a tener?", opciones: ["Que para probar o arreglar una parte tenés que tocar todo: conviene una función por etapa","Que corre más lento","Que Python no lo permite","Ninguno"], correcta: 0, explicacion: "Separar extraer, transformar y cargar deja probar cada etapa sola. Que corra más lento tienta, pero la velocidad es la misma: el costo está en arreglarlo." },
      { q: "Tu empresa carga los datos crudos en el warehouse y después los transforma con SQL ahí adentro. ¿Cómo se llama?", opciones: ["ETL","ELT: extraer, cargar y después transformar","Streaming","Backup"], correcta: 1, explicacion: "En ELT la transformación pasa después de cargar, dentro del warehouse. ETL tienta porque son las mismas letras, pero el orden es justo lo que las diferencia." },
      { q: "Querés que los analistas consulten los datos limpios con SQL. ¿Dónde los deja tu pipeline?", opciones: ["En un print","En una variable de Python","En una tabla de una base de datos, como la-esquina.db","En el log"], correcta: 2, explicacion: "La carga deja los datos en un destino que otros pueden consultar. Una variable tienta porque ahí ya están limpios, pero desaparece cuando termina el programa." },
      { q: "El pipeline falló a la mitad, alguien lo relanzó y ahora el total del mes es el doble. ¿Qué le faltaba?", opciones: ["Más memoria","Más logs","Correr de día","Ser idempotente: que correrlo dos veces dé lo mismo que una"], correcta: 3, explicacion: "Un pipeline idempotente no duplica al relanzarlo. Más logs tienta porque ayudan a ver el problema, pero no lo evitan: las filas se cargarían dos veces igual." },
      { q: "Cargás con to_sql(if_exists=\"append\") todos los días el archivo completo. ¿Qué pasa al segundo día?", opciones: ["Se duplican las ventas que ya estaban","Se reemplaza la tabla","Da error","Solo entran las nuevas"], correcta: 0, explicacion: "append agrega todo lo que le pasás, aunque ya estuviera. Que solo entren las nuevas tienta, pero append no compara: para eso hace falta una clave o una marca de agua." },
      { q: "Si tu tabla tiene id_venta como clave primaria y cargás con INSERT OR REPLACE dos veces, ¿cuántas filas quedan?", opciones: ["El doble","Las mismas: cada venta repetida reemplaza a la que ya estaba","Ninguna","Da error de clave repetida"], correcta: 1, explicacion: "OR REPLACE resuelve el choque reemplazando. El error tienta porque es lo que pasa con un INSERT común, y por eso se agrega OR REPLACE." },
      { q: "Tenés 50 millones de ventas y llegan unos miles por día. ¿Cómo cargás?", opciones: ["Todo cada día","Una vez por año","Con una marca de agua: traés solo lo posterior a la última fecha cargada","A mano"], correcta: 2, explicacion: "La marca de agua carga solo lo nuevo. Cargar todo cada día tienta por simple, pero con 50 millones de filas es lento y caro." },
      { q: "Una sucursal manda tarde una venta de una fecha anterior a tu marca de agua. ¿Qué pasa?", opciones: ["Entra igual","El pipeline da error","Se duplica","No entra nunca, porque es anterior a la marca: conviene recargar también los últimos días"], correcta: 3, explicacion: "La marca solo trae lo posterior. Que entre igual tienta, pero la consulta filtra por fecha y la venta tardía queda afuera para siempre." },
      { q: "Querés que tu pipeline deje registro de cuántas filas pasaron por cada paso. ¿Qué usás?", opciones: ["El módulo logging, con un mensaje por paso","Comentarios en el código","print al final","Un archivo Excel"], correcta: 0, explicacion: "logging deja un registro con niveles y se puede guardar en un archivo. Los comentarios tientan porque explican el código, pero no dicen qué pasó en cada corrida." },
      { q: "Si tu pipeline encuentra 1 venta con cantidad rara, pero puede seguir, ¿qué nivel de log usás?", opciones: ["INFO","WARNING: algo raro, pero se puede seguir","ERROR","Ninguno"], correcta: 1, explicacion: "WARNING es para lo que hay que mirar pero no frena. ERROR tienta porque es algo que está mal, pero ERROR se reserva para lo que impide seguir." },
      { q: "El control de suma no coincide. ¿Qué tiene que hacer el pipeline?", opciones: ["Seguir y cargar igual","Redondear","Registrar ERROR y terminar con un código de salida distinto de 0","Repetir hasta que coincida"], correcta: 2, explicacion: "Un código distinto de 0 le avisa al programador de tareas que falló. Seguir y cargar tienta para no dejar a nadie sin datos, pero cargarías números equivocados sin que nadie lo sepa." },
      { q: "Tu pipeline falló a la mitad de la carga. ¿Qué dos cosas te dejan relanzarlo tranquilo?", opciones: ["Más memoria y más velocidad","Un log y un mail","Borrar la base y empezar de cero","Que la carga sea una transacción (todo o nada) y que el pipeline sea idempotente"], correcta: 3, explicacion: "La transacción evita cargas a medias y la idempotencia evita duplicados al relanzar. Borrar la base tienta porque parece limpio, pero perdés también lo que estaba bien." },
    ],
  },
  {
    id: "warehouse",
    icono: "🏛️",
    titulo: "Data warehouse: datos listos para analizar",
    nivel: "Avanzado",
    objetivos: [
      "Distinguir la base de datos que usa un sistema (OLTP) de la que se usa para analizar (OLAP)",
      "Diseñar un esquema estrella con una tabla de hechos y tablas de dimensiones",
      "Organizar los datos en capas (crudo, limpio y listo para el negocio) y crear vistas con SQL",
    ],
    lecciones: [
      { titulo: "Dos tipos de base: la de la caja y la de analizar", html: `
        <p class="idea">La base de datos de la caja registradora y la base que usa la dueña para ver cómo le fue en el semestre tienen trabajos opuestos. Una anota ventas de a una, muy rápido; la otra lee millones de ventas para sacar un total. Por eso se arman distinto.</p>
      <table>
        <tr><th></th><th>OLTP: la base del sistema</th><th>OLAP: la base para analizar</th></tr>
        <tr><td>Para qué</td><td>Registrar operaciones (una venta, un pago)</td><td>Responder preguntas sobre muchas operaciones</td></tr>
        <tr><td>Consulta típica</td><td>"Guardá esta venta"</td><td>"Total por categoría y mes del semestre"</td></tr>
        <tr><td>Filas por consulta</td><td>Pocas</td><td>Miles o millones</td></tr>
        <tr><td>Diseño</td><td>Normalizado: cada dato en un solo lugar</td><td>Pensado para leer fácil y rápido</td></tr>
        <tr><td>En La Esquina</td><td>El sistema de la caja de cada sucursal</td><td>El data warehouse que junta las tres</td></tr>
      </table>
      <p>OLTP viene de <em>Online Transaction Processing</em> (procesar operaciones) y OLAP de <em>Online Analytical Processing</em> (procesar análisis). Lo importante es la idea: <strong>no se analiza sobre la base del sistema</strong>. Una consulta pesada de un analista puede trabar la caja justo cuando hay cola. Por eso el pipeline copia los datos a otro lugar.</p>
      <p><strong>Tres nombres que vas a escuchar:</strong></p>
      <table>
        <tr><th>Nombre</th><th>Qué es</th><th>Ejemplos</th></tr>
        <tr><td><strong>Data warehouse</strong> (almacén de datos)</td><td>Una base OLAP con tablas limpias y ordenadas para analizar</td><td>BigQuery, Snowflake, Redshift</td></tr>
        <tr><td><strong>Data lake</strong> (lago de datos)</td><td>Un depósito de archivos de cualquier tipo, tal cual llegaron, barato y enorme</td><td>Archivos en Amazon S3 o Google Cloud Storage</td></tr>
        <tr><td><strong>Lakehouse</strong></td><td>Un lago de datos con orden de warehouse encima: tablas sobre archivos</td><td>Databricks, Apache Iceberg</td></tr>
      </table>
      <pre><code>Cajas (OLTP)          pipeline          Data warehouse (OLAP)        Analistas
Centro ──┐                              ┌──────────────────┐
Norte  ──┼──► extraer ─► limpiar ─►     │ tablas limpias   │ ──► tableros
Sur    ──┘                              │ para analizar    │ ──► informes
                                        └──────────────────┘</code></pre>
      <p>En este curso tu warehouse es un archivo de SQLite: chico, pero funciona con las mismas ideas. Lo que cambia en una empresa grande es el tamaño y dónde vive, que vas a ver en el módulo de la nube.</p>
      ` },
      { titulo: "El esquema estrella: hechos y dimensiones", html: `
        <p class="idea">Para analizar, las preguntas casi siempre tienen la misma forma: "un número, cortado por algo". Total vendido por sucursal, por mes, por categoría. El <strong>esquema estrella</strong> ordena las tablas justo para eso: los números en el centro y los "por algo" alrededor.</p>
      <table>
        <tr><th>Tipo de tabla</th><th>Qué guarda</th><th>En La Esquina</th></tr>
        <tr><td><strong>Hechos</strong> (en el centro)</td><td>Lo que pasó, con sus números: una fila por venta</td><td><code>hechos_ventas</code>: fecha, sucursal, producto, cantidad, total</td></tr>
        <tr><td><strong>Dimensiones</strong> (alrededor)</td><td>Las formas de cortar los hechos, con sus detalles</td><td><code>dim_producto</code> (con la categoría), <code>dim_fecha</code> (con el mes y el día de la semana)</td></tr>
      </table>
      <pre><code>                dim_fecha
             (mes, día de la semana)
                      │
dim_producto ──── hechos_ventas ──── dim_sucursal
(categoría)    (cantidad, total)</code></pre>
      <p>Se arma en SQLite a partir de la planilla limpia. Las dimensiones se sacan de los valores distintos de cada columna:</p>
      <pre><code>import sqlite3
import pandas as pd

v = pd.read_csv("ventas-limpias.csv")
con = sqlite3.connect(":memory:")

v[["producto", "categoria"]].drop_duplicates().to_sql("dim_producto", con, index=False)
fechas = pd.DataFrame({"fecha": sorted(v["fecha"].unique())})
fechas["mes"] = fechas["fecha"].str[:7]
fechas["dia_semana"] = pd.to_datetime(fechas["fecha"]).dt.dayofweek
fechas.to_sql("dim_fecha", con, index=False)
v[["id_venta", "fecha", "sucursal", "producto", "cantidad", "total"]].to_sql("hechos_ventas", con, index=False)

for t in ["hechos_ventas", "dim_producto", "dim_fecha"]:
    print(t, con.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0])

consulta = """
    SELECT p.categoria, f.mes, SUM(h.total)
    FROM hechos_ventas h
    JOIN dim_producto p ON h.producto = p.producto
    JOIN dim_fecha f ON h.fecha = f.fecha
    WHERE p.categoria = 'Frescos'
    GROUP BY p.categoria, f.mes
"""
for fila in con.execute(consulta):
    print(fila)</code></pre>
      <pre><code>Salida:
hechos_ventas 947
dim_producto 15
dim_fecha 181
('Frescos', '2025-01', 349500)
('Frescos', '2025-02', 217900)
('Frescos', '2025-03', 507200)
('Frescos', '2025-04', 398200)
('Frescos', '2025-05', 643400)
('Frescos', '2025-06', 562900)</code></pre>
      <p>Los hechos tienen una fila por venta; la dimensión de productos, una por producto; la de fechas, un día por cada día con ventas. La consulta junta los hechos con las dos dimensiones y corta por categoría y mes. Fijate en <code>dia_semana</code>: un dato que no está en la planilla original (0 es lunes, 6 es domingo) y que ahora cualquier analista puede usar sin calcularlo.</p>
      <p>Sí, el f-string para el nombre de la tabla: está bien acá porque los nombres los escribiste vos en el código. La regla de los parámetros es para valores que vienen de afuera.</p>
      <p>A diferencia del diseño normalizado del módulo de SQL, acá se aceptan repeticiones si simplifican las consultas: la idea la popularizó Ralph Kimball, y su libro sobre modelado dimensional sigue siendo la referencia del tema.</p>
      ` },
      { titulo: "Capas: crudo, limpio y listo para el negocio", html: `
        <p class="idea">Si limpiás los datos y tirás los originales, el día que descubras un error en la limpieza no vas a poder rehacerla. Por eso los datos se guardan en <strong>capas</strong>: el original intacto, el limpio, y el listo para usar. Como en una cocina: la compra, lo picado y el plato servido.</p>
      <table>
        <tr><th>Capa</th><th>También se llama</th><th>Qué tiene</th><th>En La Esquina</th></tr>
        <tr><td>Cruda</td><td>bronze (bronce), raw</td><td>Los datos tal cual llegaron, sin tocar</td><td>Las 958 filas de la planilla sucia</td></tr>
        <tr><td>Limpia</td><td>silver (plata)</td><td>Limpios, con tipos correctos, sin duplicados</td><td>Las 947 ventas limpias</td></tr>
        <tr><td>Lista para el negocio</td><td>gold (oro)</td><td>Resúmenes y tablas pensadas para una pregunta</td><td>El total por sucursal y mes</td></tr>
      </table>
      <p>La capa de negocio muchas veces es una <strong>vista</strong>: una consulta guardada con nombre, que se usa como si fuera una tabla, pero se recalcula sola cada vez que la consultás. Así nunca queda desactualizada:</p>
      <pre><code>import sqlite3
import pandas as pd

con = sqlite3.connect(":memory:")
pd.read_csv("ventas-sucias.csv", dtype=str).to_sql("crudo_ventas", con, index=False)
pd.read_csv("ventas-limpias.csv").to_sql("limpio_ventas", con, index=False)
con.execute("""
    CREATE VIEW negocio_ventas_mes AS
    SELECT sucursal, substr(fecha, 1, 7) AS mes, COUNT(*) AS ventas, SUM(total) AS total
    FROM limpio_ventas
    GROUP BY sucursal, mes
""")

for t in ["crudo_ventas", "limpio_ventas", "negocio_ventas_mes"]:
    print(t, con.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0], "filas")
print(con.execute("SELECT * FROM negocio_ventas_mes WHERE mes = '2025-06'").fetchall())</code></pre>
      <pre><code>Salida:
crudo_ventas 958 filas
limpio_ventas 947 filas
negocio_ventas_mes 18 filas
[('Centro', '2025-06', 66, 453100), ('Norte', '2025-06', 62, 520500), ('Sur', '2025-06', 47, 319300)]</code></pre>
      <p>La capa de negocio tiene 18 filas (3 sucursales por 6 meses) y responde directo lo que la dueña pregunta. Si mañana se corrige algo en la capa limpia, la vista lo refleja sola.</p>
      <p><strong>Las ventajas de las capas:</strong> si la limpieza tenía un error, la rehacés desde la capa cruda; cada capa tiene su propio control (958, 947, 18 filas); y cada persona usa la capa que le sirve: un data engineer depura en la cruda, un analista consulta la de negocio.</p>
      <p>En las empresas, las transformaciones entre capas muchas veces se escriben en SQL con una herramienta llamada <strong>dbt</strong>, que ordena las vistas, las prueba y las documenta. La idea es la misma que acá: consultas con nombre, una encima de otra.</p>
      ` },
    ],
    practica: [
      "Agregá al esquema estrella una dimensión de sucursales con una columna \"barrio\" inventada. Hacé una consulta por barrio y verificá que la suma dé 6270350.",
      "Usá dim_fecha para calcular el total de las ventas de sábados y domingos (dia_semana 5 y 6). Anotá el resultado y qué porcentaje del total es.",
      "Creá una vista negocio_ventas_categoria con el total por categoría. Verificá que tenga 4 filas y que Frescos dé 2679100.",
    ],
    recursos: [
      { t: "Libro: Fundamentos de ingeniería de datos, de Joe Reis y Matt Housley (Marcombo, 2023): almacenamiento y servir datos", url: "https://www.librerianacional.com/fundamentos-de-ingenieria-de-datos-/p" },
      { t: "Kimball Group: técnicas de modelado dimensional (en inglés)", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/" },
      { t: "SQLite: CREATE VIEW (en inglés)", url: "https://www.sqlite.org/lang_createview.html" },
    ],
    quiz: [
      { q: "Un analista corre una consulta enorme sobre la base de la caja en horario de cola y la caja se traba. ¿Qué conviene?", opciones: ["Copiar los datos a un data warehouse y analizar ahí","Prohibir los análisis","Analizar de noche sobre la caja","Comprar otra caja"], correcta: 0, explicacion: "Separar la base del sistema (OLTP) de la de análisis (OLAP) evita que una moleste a la otra. Analizar de noche tienta porque esquiva el problema, pero no escala y sigue usando una base pensada para otra cosa." },
      { q: "Tenés que guardar miles de archivos de distintos tipos tal cual llegan, lo más barato posible. ¿Qué usás?", opciones: ["Un data warehouse","Un data lake: un depósito de archivos de cualquier tipo","La base de la caja","Una planilla"], correcta: 1, explicacion: "El lago de datos guarda archivos crudos baratos. El warehouse tienta porque es donde terminan los datos, pero espera tablas ordenadas y cuesta más por guardar." },
      { q: "Si en tu esquema estrella cada fila es una venta con cantidad y total, ¿qué tabla es?", opciones: ["Una dimensión","Una vista","La tabla de hechos: lo que pasó, con sus números","Una capa cruda"], correcta: 2, explicacion: "Los hechos son los eventos con números. Dimensión tienta porque también tiene filas, pero las dimensiones son las formas de cortar (producto, fecha), no los eventos." },
      { q: "Querés cortar las ventas por día de la semana, pero ese dato no está en la planilla. ¿Dónde lo agregás?", opciones: ["En cada venta a mano","En un informe aparte","En el CSV original","En la dimensión de fechas, una vez por día, para que cualquiera lo use"], correcta: 3, explicacion: "La dimensión de fechas guarda los detalles de cada día. Ponerlo en cada venta tienta porque queda a mano, pero lo repetís 947 veces en vez de 181." },
      { q: "Tu compañera pregunta por qué el esquema estrella repite cosas, si en el módulo de SQL normalizaron todo. ¿Qué le decís?", opciones: ["Porque para analizar conviene que las consultas sean simples, aunque haya repeticiones","Porque es un error","Porque SQLite no permite normalizar","Porque ocupa menos"], correcta: 0, explicacion: "Normalizar sirve para registrar sin contradicciones; el esquema estrella, para leer fácil. Que ocupe menos tienta, pero suele ocupar más: se acepta a cambio de consultas simples." },
      { q: "Si tu consulta junta los hechos con dos dimensiones, ¿cuántos JOIN escribís?", opciones: ["Ninguno","Dos, uno por dimensión","Uno solo","Tres"], correcta: 1, explicacion: "Cada dimensión se une a los hechos por su columna. Uno solo tienta porque parece una sola unión, pero cada tabla extra necesita su propio JOIN." },
      { q: "Limpiaste los datos y borraste los originales. Un mes después descubrís un error en la limpieza. ¿Qué te faltó?", opciones: ["Más tests","Un log","Guardar la capa cruda: los datos tal cual llegaron","Una vista"], correcta: 2, explicacion: "Con la capa cruda, la limpieza se rehace. Más tests tienta porque habrían detectado el error antes, pero aun así, sin los originales no podés corregirlo." },
      { q: "¿En qué capa deberían trabajar los analistas para hacer un tablero de ventas por mes?", opciones: ["En la cruda","En la limpia, recalculando todo","En la base de la caja","En la de negocio (gold): resúmenes pensados para esa pregunta"], correcta: 3, explicacion: "La capa de negocio ya responde la pregunta, con los controles hechos. La limpia tienta porque tiene todo el detalle, pero cada analista recalcularía el resumen a su manera y los números no coincidirían." },
      { q: "Si querés un resumen que nunca quede desactualizado cuando cambian los datos limpios, ¿qué creás?", opciones: ["Una vista: una consulta guardada que se recalcula al consultarla","Una tabla nueva copiada","Un CSV","Un log"], correcta: 0, explicacion: "La vista se recalcula cada vez. Una tabla copiada tienta porque es más rápida de leer, pero queda congelada en el momento en que la copiaste." },
      { q: "Tu capa cruda tiene 958 filas, la limpia 947 y la de negocio 18. ¿Es un problema?", opciones: ["Sí, se perdieron filas","No: cada capa tiene su forma y su control, y la diferencia está explicada","Sí, todas tienen que tener igual","No importa nunca"], correcta: 1, explicacion: "De cruda a limpia se sacan duplicados y vacíos; la de negocio resume. Que se perdieron filas tienta, pero cada diferencia tiene una explicación que podés comprobar." },
      { q: "En tu empresa escriben las transformaciones entre capas como consultas SQL que se prueban y documentan solas. ¿Qué herramienta es probable que usen?", opciones: ["Excel","Git","dbt","pandas"], correcta: 2, explicacion: "dbt ordena, prueba y documenta transformaciones escritas en SQL. pandas tienta porque también transforma, pero trabaja en Python, no sobre el warehouse con SQL." },
      { q: "Usaste un f-string para el nombre de la tabla en SELECT COUNT(*) FROM {t}. ¿Rompe la regla de los parámetros?", opciones: ["Sí, siempre hay que usar parámetros","Sí, es inyección SQL","No, porque es más rápido","No: los nombres los escribiste vos en el código; los parámetros son para valores que vienen de afuera"], correcta: 3, explicacion: "El riesgo es meter en la consulta un texto que no controlás. Pensar que siempre hay que usar parámetros tienta, pero los nombres de tabla no se pueden pasar como parámetro, y acá no vienen de afuera." },
    ],
  },
  {
    id: "orquestar",
    icono: "⏱️",
    titulo: "Automatizar y orquestar: que corra solo",
    nivel: "Avanzado",
    objetivos: [
      "Preparar un script para que lo corra un programador de tareas y escribir una línea de cron",
      "Ordenar tareas con dependencias como un grafo y agregar reintentos ante fallas pasajeras",
      "Trabajar como en un equipo: versionar con git, anotar las librerías y guardar las contraseñas fuera del código",
    ],
    lecciones: [
      { titulo: "Que corra solo: programar una tarea", html: `
        <p class="idea">Un pipeline que alguien tiene que acordarse de correr no es automático. El último paso es que la computadora lo corra sola, todos los días a la misma hora, como el despertador que no depende de que te acuerdes de ponerlo.</p>
      <p>Primero, el script tiene que estar listo para correr sin nadie: todo adentro de una función <code>main</code>, y un <strong>código de salida</strong> que diga si salió bien (0) o mal (cualquier otro número). Así el programa que lo lanza sabe qué pasó.</p>
      <pre><code>import sys

def main():
    ventas = 947
    if ventas == 0:
        print("ERROR: no llegaron ventas")
        return 1
    print("OK:", ventas, "ventas cargadas")
    return 0

if __name__ == "__main__":
    codigo = main()
    print("Código de salida:", codigo)
    sys.exit(codigo)</code></pre>
      <pre><code>Salida:
OK: 947 ventas cargadas
Código de salida: 0</code></pre>
      <p><code>if __name__ == "__main__":</code> quiere decir "esto corre solo si ejecutás este archivo directamente", no si otro programa lo importa para usar sus funciones. Es la forma estándar de escribir un script en Python.</p>
      <p><strong>Programarlo.</strong> En Linux y Mac se usa <strong>cron</strong>: una lista de tareas, cada una con su horario en 5 campos. En Windows, el <strong>Programador de tareas</strong> hace lo mismo con ventanas.</p>
      <pre><code>┌─ minuto (0-59)
│ ┌─ hora (0-23)
│ │ ┌─ día del mes (1-31)
│ │ │ ┌─ mes (1-12)
│ │ │ │ ┌─ día de la semana (0-6, 0 es domingo)
│ │ │ │ │
0 6 * * *    python3 /home/esquina/pipeline.py &gt;&gt; /home/esquina/pipeline.log 2&gt;&amp;1</code></pre>
      <table>
        <tr><th>Línea de cron</th><th>Cuándo corre</th></tr>
        <tr><td><code>0 6 * * *</code></td><td>Todos los días a las 6:00</td></tr>
        <tr><td><code>30 7 * * 1</code></td><td>Los lunes a las 7:30</td></tr>
        <tr><td><code>0 */4 * * *</code></td><td>Cada 4 horas, en punto</td></tr>
        <tr><td><code>0 2 1 * *</code></td><td>El día 1 de cada mes a las 2:00</td></tr>
      </table>
      <p>El asterisco quiere decir "todos". Y el final, <code>&gt;&gt; pipeline.log 2&gt;&amp;1</code>, guarda todo lo que el script imprime, incluidos los errores, en un archivo: el log que viste en el módulo de pipelines. Sin eso, si falla a las 6 de la mañana, no queda rastro.</p>
      <p>Una pregunta que siempre hay que hacerse: <strong>¿quién se entera si falla?</strong> cron no avisa a nadie. Por eso los equipos que crecen pasan a un orquestador, el tema de la próxima lección.</p>
      ` },
      { titulo: "Orquestar: tareas que dependen de otras", html: `
        <p class="idea">Un pipeline real no es una tarea: son varias, y algunas tienen que esperar a otras. No podés calcular el resumen antes de cargar las ventas, igual que no podés hornear la torta antes de batir. Ordenar eso, reintentar lo que falla y avisar es <strong>orquestar</strong>.</p>
      <p>Las tareas y sus dependencias forman un <strong>DAG</strong> (grafo dirigido sin ciclos): flechas que van de una tarea a la que la necesita, sin volver nunca atrás.</p>
      <pre><code>extraer_centro ──┐
extraer_norte  ──┼──► limpiar ──► validar ──► cargar ──┬──► resumen_mes
extraer_sur    ──┘                                     └──► tablero</code></pre>
      <p>Python trae <code>graphlib</code>, que calcula en qué orden correr las tareas a partir de las dependencias:</p>
      <pre><code>from graphlib import TopologicalSorter

depende_de = {
    "limpiar": ["extraer_centro", "extraer_norte", "extraer_sur"],
    "validar": ["limpiar"],
    "cargar": ["validar"],
    "resumen_mes": ["cargar"],
    "tablero": ["cargar"],
}
orden = TopologicalSorter(depende_de).static_order()
print(list(orden))</code></pre>
      <pre><code>Salida:
['extraer_centro', 'extraer_norte', 'extraer_sur', 'limpiar', 'validar', 'cargar', 'resumen_mes', 'tablero']</code></pre>
      <p>Las tres extracciones van primero, porque no dependen de nada (y podrían correr al mismo tiempo), y el resumen y el tablero, al final. <strong>Reintentos:</strong> muchas fallas son pasajeras (la red se cortó un segundo). En vez de rendirse, la tarea se vuelve a intentar unas veces, esperando un poco más cada vez:</p>
      <pre><code>import time

intentos_que_fallan = 2
def extraer():
    global intentos_que_fallan
    if intentos_que_fallan &gt; 0:
        intentos_que_fallan -= 1
        raise ConnectionError("se cortó la conexión")
    return "958 filas"

def con_reintentos(tarea, veces=3, espera=0.01):
    for intento in range(1, veces + 1):
        try:
            return tarea()
        except ConnectionError as e:
            print(f"Intento {intento} falló: {e}")
            if intento == veces:
                raise
            time.sleep(espera * 2 ** intento)

print("Resultado:", con_reintentos(extraer))</code></pre>
      <pre><code>Salida:
Intento 1 falló: se cortó la conexión
Intento 2 falló: se cortó la conexión
Resultado: 958 filas</code></pre>
      <p>Falla dos veces y a la tercera sale. La espera se duplica en cada intento (en la vida real son segundos o minutos, no centésimas). Ojo: solo se reintenta lo pasajero. Un archivo con columnas equivocadas va a fallar igual las 3 veces.</p>
      <p><strong>Los orquestadores</strong> hacen todo esto y más: muestran el DAG, guardan el historial, reintentan solos y avisan por mail o chat cuando algo falla. Los más usados son de código abierto y se programan en Python:</p>
      <table>
        <tr><th>Herramienta</th><th>En una línea</th></tr>
        <tr><td>Apache Airflow</td><td>El más conocido y usado; cada pipeline es un DAG escrito en Python</td></tr>
        <tr><td>Dagster</td><td>Se organiza alrededor de los datos que produce cada paso, con controles de calidad incluidos</td></tr>
        <tr><td>Prefect</td><td>Convierte funciones comunes de Python en tareas orquestadas, con poco código extra</td></tr>
      </table>
      ` },
      { titulo: "Trabajar en equipo: git, entornos y contraseñas", html: `
        <p class="idea">Un pipeline que solo funciona en tu computadora, del que no hay copia, y que tiene la contraseña de la base escrita adentro, es una bomba de tiempo. Tres hábitos lo arreglan, y son los mismos que usan todos los equipos de software.</p>
      <p><strong>1. Versionar con git.</strong> <strong>git</strong> guarda la historia de tu código: cada cambio con quién lo hizo, cuándo y por qué. Si algo se rompe, volvés a la versión anterior. Y subido a GitHub, es tu copia de seguridad y tu portafolio. Los comandos del día a día:</p>
      <pre><code>git init                         empezar a versionar una carpeta
git add pipeline.py              elegir qué cambios guardar
git commit -m "limpia fechas"    guardar esos cambios con un mensaje
git log                          ver la historia
git push                         subirlos a GitHub</code></pre>
      <p><strong>2. Anotar las librerías.</strong> Tu pipeline usa pandas. Si otra persona lo corre con una versión distinta, puede dar otro resultado. Por eso se anota en un archivo <code>requirements.txt</code>, y cada proyecto usa un <strong>entorno virtual</strong>: una instalación de Python aparte, con sus propias librerías, que no se mezcla con las de otros proyectos.</p>
      <pre><code>python -m venv .venv                 crear el entorno virtual
pip install -r requirements.txt      instalar lo anotado
pip freeze &gt; requirements.txt        anotar lo que tenés instalado</code></pre>
      <p><strong>3. Las contraseñas, fuera del código.</strong> Una contraseña escrita en el código termina en GitHub, y de ahí la puede ver cualquiera. Los programas automáticos que buscan contraseñas en GitHub las encuentran en minutos. Se guardan en <strong>variables de entorno</strong>, que se configuran en la computadora o en el orquestador, y el código solo las lee:</p>
      <pre><code>import os

clave = os.environ.get("CLAVE_BASE")
if clave is None:
    print("Falta configurar CLAVE_BASE: el pipeline no puede conectarse")
else:
    print("Clave cargada:", "*" * len(clave))</code></pre>
      <pre><code>Salida:
Falta configurar CLAVE_BASE: el pipeline no puede conectarse</code></pre>
      <p>Como acá no está configurada, el código avisa en vez de seguir. Fijate que, si la encuentra, nunca la imprime: muestra asteriscos. En tu computadora, se suelen anotar en un archivo <code>.env</code> que se agrega a <code>.gitignore</code>, la lista de archivos que git nunca sube.</p>
      <table>
        <tr><th>Mal</th><th>Bien</th></tr>
        <tr><td>El código solo está en tu computadora</td><td>Versionado con git y subido a GitHub</td></tr>
        <tr><td>"Funciona en mi máquina"</td><td>requirements.txt y entorno virtual</td></tr>
        <tr><td>clave = "Esquina2025" en el código</td><td>os.environ.get("CLAVE_BASE")</td></tr>
      </table>
      ` },
    ],
    practica: [
      "Escribí la línea de cron para correr pipeline.py de lunes a viernes a las 5:30 (día de la semana 1-5). Verificala en crontab.guru y anotá qué frase te devuelve.",
      "Agregá al DAG una tarea \"avisar\" que dependa de \"tablero\". Corré el código y verificá que aparezca al final de la lista.",
      "En el ejemplo de reintentos, poné intentos_que_fallan = 3. Anotá qué pasa en el tercer intento y por qué el programa termina con un error.",
    ],
    recursos: [
      { t: "crontab.guru: para entender y probar una línea de cron (en inglés)", url: "https://crontab.guru/" },
      { t: "Python: el módulo graphlib (documentación oficial en español)", url: "https://docs.python.org/es/3/library/graphlib.html" },
      { t: "Git: el libro oficial Pro Git, gratis y en español", url: "https://git-scm.com/book/es/v2" },
    ],
    quiz: [
      { q: "Tu script lo va a correr un programador de tareas a las 6 de la mañana. ¿Cómo sabe si salió bien?", opciones: ["Por el código de salida: 0 si salió bien, otro número si falló","Porque imprime OK","Porque lo mira alguien","No hay forma"], correcta: 0, explicacion: "El código de salida es la forma estándar de avisar. Imprimir OK tienta porque se ve, pero el programador de tareas no lee lo que imprime: mira el código." },
      { q: "Si querés que tu pipeline corra todos los días a las 6:00, ¿qué línea de cron escribís?", opciones: ["6 0 * * *","0 6 * * *","* 6 * * *","0 6 1 * *"], correcta: 1, explicacion: "El primer campo es el minuto y el segundo la hora: minuto 0, hora 6. * 6 * * * tienta porque tiene el 6, pero correría cada minuto entre las 6:00 y las 6:59." },
      { q: "Tu pipeline programado con cron falló a la madrugada y nadie lo supo hasta el mediodía. ¿Qué te faltó?", opciones: ["Más memoria","Correrlo de día","Un aviso cuando falla: cron no le avisa a nadie, un orquestador sí","Otro cron"], correcta: 2, explicacion: "cron corre la tarea, pero no avisa si falla. Correrlo de día tienta para estar mirando, pero el punto de automatizar es no tener que mirar." },
      { q: "Si querés calcular el resumen del mes, ¿qué tiene que haber pasado antes?", opciones: ["Nada","El tablero","Las extracciones solamente","Que las ventas estén cargadas: el resumen depende de la carga"], correcta: 3, explicacion: "Las dependencias marcan el orden. Que basten las extracciones tienta, pero sin limpiar, validar y cargar, el resumen se calcularía sobre datos crudos." },
      { q: "Tenés 5 tareas con dependencias entre ellas. ¿Qué te da TopologicalSorter?", opciones: ["Un orden en el que cada tarea corre después de las que necesita","El tiempo que tarda cada una","Cuáles fallaron","Un gráfico"], correcta: 0, explicacion: "Calcula un orden válido a partir de las dependencias. Que diga el tiempo tienta porque es lo que querés saber de un pipeline, pero eso lo mide un orquestador al correrlas." },
      { q: "La extracción falla porque se cortó la conexión un segundo. ¿Qué conviene?", opciones: ["Frenar todo y avisar","Reintentar unas veces, esperando un poco más cada vez","Cargar datos vacíos","Reintentar para siempre"], correcta: 1, explicacion: "Una falla pasajera se resuelve sola al rato. Reintentar para siempre tienta porque garantiza que siga, pero si el problema no es pasajero, el pipeline queda colgado sin avisar." },
      { q: "Si un archivo llega con columnas equivocadas, ¿sirve reintentar?", opciones: ["Sí, siempre","Sí, 10 veces","No: no es una falla pasajera, va a fallar igual. Hay que frenar y avisar","Sí, esperando más"], correcta: 2, explicacion: "Reintentar solo ayuda con lo pasajero. Esperar más tienta, pero el archivo no se va a arreglar solo." },
      { q: "Tu equipo quiere ver los pipelines como DAG, con historial, reintentos y avisos. ¿Qué usan?", opciones: ["Excel","cron solamente","Un print","Un orquestador como Airflow, Dagster o Prefect"], correcta: 3, explicacion: "Los orquestadores hacen todo eso. cron tienta porque ya programa tareas, pero no entiende dependencias, ni guarda historial, ni avisa." },
      { q: "Rompiste tu pipeline con un cambio y querés volver a como estaba ayer. ¿Qué te deja hacerlo?", opciones: ["git: guarda la historia de cada cambio","requirements.txt","Una variable de entorno","cron"], correcta: 0, explicacion: "git guarda cada versión y podés volver a cualquiera. requirements.txt tienta porque también es del proyecto, pero solo anota las librerías, no tu código." },
      { q: "Tu pipeline anda en tu computadora, pero en la de tu compañero da otro resultado. ¿Qué revisás primero?", opciones: ["Que tenga más memoria","Las versiones de las librerías: anotadas en requirements.txt y en un entorno virtual","Que use Mac","Que reinicie"], correcta: 1, explicacion: "Versiones distintas de pandas pueden dar resultados distintos. Reiniciar tienta porque a veces arregla cosas, pero no cambia qué versión tiene instalada." },
      { q: "Si encontrás clave = \"Esquina2025\" en el código del pipeline, ¿qué hacés?", opciones: ["Nada, es corta","La cambiás por otra más difícil, en el mismo lugar","La sacás del código, la leés con os.environ.get y cambiás la contraseña, porque ya pudo verse","La escribís en un comentario"], correcta: 2, explicacion: "La contraseña va en una variable de entorno, y como ya estuvo en el código, hay que cambiarla. Una más difícil en el mismo lugar tienta, pero el problema es dónde está, no qué tan difícil es." },
      { q: "Tenés un archivo .env con las contraseñas. ¿Qué hacés para que no termine en GitHub?", opciones: ["Le cambiás el nombre","Lo subís igual, es privado","Lo borrás después de cada push","Lo agregás a .gitignore, la lista de archivos que git no sube"], correcta: 3, explicacion: ".gitignore hace que git ignore ese archivo. Subirlo porque el repositorio es privado tienta, pero los repositorios privados se comparten, se copian y a veces se hacen públicos." },
    ],
  },
  {
    id: "nube",
    icono: "☁️",
    titulo: "Nube, escala y seguridad",
    nivel: "Avanzado",
    objetivos: [
      "Elegir entre almacenamiento de objetos y data warehouse en la nube, y estimar qué te van a cobrar",
      "Decidir si un caso necesita datos por lotes (batch) o en vivo (streaming)",
      "Proteger los datos: mínimo privilegio, contraseñas fuera del código y seudonimizar datos personales según la ley",
    ],
    lecciones: [
      { titulo: "La nube: dónde viven los datos de una empresa grande", html: `
        <p class="idea">Tu warehouse de La Esquina es un archivo en tu computadora. Una empresa con millones de ventas por día no puede depender de una computadora: alquila espacio y potencia en <strong>la nube</strong>, que son centros de datos enormes de empresas como Amazon, Google o Microsoft, y paga por lo que usa, como la luz.</p>
      <table>
        <tr><th>Qué necesitás</th><th>Servicio</th><th>Ejemplos</th></tr>
        <tr><td>Guardar archivos (el data lake)</td><td><strong>Almacenamiento de objetos</strong>: guarda archivos de cualquier tamaño, muy barato</td><td>Amazon S3, Google Cloud Storage, Azure Blob Storage</td></tr>
        <tr><td>Consultar tablas con SQL (el warehouse)</td><td><strong>Data warehouse en la nube</strong>: SQL sobre miles de millones de filas</td><td>BigQuery, Snowflake, Amazon Redshift</td></tr>
        <tr><td>Correr los pipelines</td><td>Orquestadores administrados</td><td>Airflow administrado por Google o Amazon</td></tr>
      </table>
      <p><strong>Lo que cambia: te cobran por uso.</strong> Muchos warehouses cobran según cuántos datos <em>lee</em> cada consulta. Ahí aparece una ventaja del formato Parquet, que viste en el módulo de archivos: guarda los datos por columnas, y si tu consulta usa 2 de 10 columnas, solo lee esas 2. Una cuenta con números redondos inventados:</p>
      <pre><code>filas = 50_000_000
columnas = 10
bytes_por_valor = 8
columnas_que_usa = 2

por_filas = filas * columnas * bytes_por_valor
por_columnas = filas * columnas_que_usa * bytes_por_valor
gb = 1_000_000_000
print("Guardado por filas lee:", por_filas / gb, "GB")
print("Guardado por columnas lee:", por_columnas / gb, "GB")
print("Ahorro:", 1 - por_columnas / por_filas)</code></pre>
      <pre><code>Salida:
Guardado por filas lee: 4.0 GB
Guardado por columnas lee: 0.8 GB
Ahorro: 0.8</code></pre>
      <p>Leer 4 GB en vez de 0,8 GB es pagar cinco veces más por la misma respuesta. Por eso los data engineers se fijan en cosas que parecen detalles: el formato de archivo, no usar <code>SELECT *</code> (que lee todas las columnas) y <strong>particionar</strong>, es decir, guardar los datos separados por fecha para que una consulta de junio no lea todo el año.</p>
      <p>Los guiones bajos en <code>50_000_000</code> son solo para leer mejor el número: Python los ignora.</p>
      <p>Los precios exactos cambian seguido y dependen de cada proveedor, así que se consultan en su página antes de decidir. Lo que no cambia es el principio: <strong>en la nube, leer menos es pagar menos</strong>.</p>
      ` },
      { titulo: "Por lotes o en vivo: batch y streaming", html: `
        <p class="idea">Hay dos formas de mover datos. <strong>Por lotes</strong> (batch): juntás todo y lo procesás cada tanto, como el colectivo que sale cada hora. <strong>En vivo</strong> (streaming): procesás cada dato apenas llega, como un taxi que sale cuando subís. El taxi es más rápido, pero bastante más caro y complicado.</p>
      <pre><code>ventas = [6800, 5400, 900, 2100, 9600]

# Por lotes: se junta todo y se calcula una vez
print("Batch, al final del día:", sum(ventas))

# En vivo: el total se actualiza con cada venta que llega
total = 0
for v in ventas:
    total += v
    print("Streaming, llega", v, "y el total va", total)</code></pre>
      <pre><code>Salida:
Batch, al final del día: 24800
Streaming, llega 6800 y el total va 6800
Streaming, llega 5400 y el total va 12200
Streaming, llega 900 y el total va 13100
Streaming, llega 2100 y el total va 15200
Streaming, llega 9600 y el total va 24800</code></pre>
      <p>Los dos llegan al mismo número. La diferencia es <strong>cuándo</strong> lo tenés: en batch, al final; en streaming, siempre al día. La pregunta para elegir no es técnica, es de negocio: <strong>¿qué se pierde si el dato llega una hora tarde?</strong></p>
      <table>
        <tr><th>Caso</th><th>¿Qué conviene?</th><th>Por qué</th></tr>
        <tr><td>El informe de ventas del lunes</td><td>Batch, una vez por día</td><td>Nadie lo mira antes de la mañana</td></tr>
        <tr><td>Avisar si una tarjeta se usa en dos países a la vez</td><td>Streaming</td><td>Una hora tarde, el fraude ya pasó</td></tr>
        <tr><td>El stock que se ve en la tienda online</td><td>Microlotes, cada pocos minutos</td><td>Un punto medio: casi al día, sin el costo del streaming</td></tr>
      </table>
      <p>Para streaming se usan herramientas como <strong>Apache Kafka</strong>, que recibe los eventos (cada venta, cada clic) y los reparte a los programas que los procesan. Es un mundo propio, y la recomendación de los libros es la misma: <strong>empezá por batch</strong> y pasá a streaming solo cuando el negocio realmente necesite el dato al instante. La mayoría de los pipelines del mundo son batch.</p>
      <p>Con lo que aprendiste ya podés armar <strong>microlotes</strong>: el mismo pipeline idempotente, con marca de agua, programado cada 15 minutos con cron. Cubre muchísimos casos que parecen pedir streaming.</p>
      ` },
      { titulo: "Seguridad y privacidad: cuidar los datos", html: `
        <p class="idea">Un data engineer tiene acceso a muchos datos, incluidos los de personas. Cuidarlos no es un trámite: es parte del trabajo, y en Argentina es también una obligación legal.</p>
      <p><strong>Tres reglas de seguridad:</strong></p>
      <table>
        <tr><th>Regla</th><th>Qué quiere decir</th><th>En La Esquina</th></tr>
        <tr><td>Mínimo privilegio</td><td>Cada persona y cada programa accede solo a lo que necesita</td><td>El tablero puede leer la capa de negocio, pero no la cruda ni borrar nada</td></tr>
        <tr><td>Contraseñas fuera del código</td><td>Variables de entorno o un gestor de secretos</td><td>Lo que viste en el módulo de automatizar</td></tr>
        <tr><td>Registro de accesos</td><td>Quedar anotado quién consultó qué y cuándo</td><td>Si se filtra un dato, se sabe por dónde salió</td></tr>
      </table>
      <p><strong>Datos personales y la ley.</strong> En Argentina, la <strong>Ley 25.326 de Protección de los Datos Personales</strong> regula cómo se guardan y usan los datos que identifican a una persona (nombre, DNI, mail, teléfono), y la Agencia de Acceso a la Información Pública la controla. Entre otras cosas, exige que los datos se usen para lo que se pidieron y que estén protegidos.</p>
      <p>Una técnica clave es <strong>seudonimizar</strong>: reemplazar el dato que identifica por un código, siempre el mismo para la misma persona, para poder analizar sin saber quién es. Se hace con una función de <strong>hash</strong>, que convierte cualquier texto en una serie de caracteres de la que no se puede volver al original, más un texto secreto (la "sal") para que nadie pueda probar DNI uno por uno:</p>
      <pre><code>import hashlib

SAL = "secreto-que-va-en-una-variable-de-entorno"

def seudonimo(dni):
    return hashlib.sha256((SAL + dni).encode()).hexdigest()[:10]

for dni in ["30111222", "30111222", "28999888"]:
    print(dni, "queda", seudonimo(dni))</code></pre>
      <pre><code>Salida:
30111222 queda 000e164e6f
30111222 queda 000e164e6f
28999888 queda 54e35e9283</code></pre>
      <p>El mismo DNI da siempre el mismo código, así que podés contar compras por cliente; pero con el código no se puede volver al DNI. Ojo: seudonimizar no es lo mismo que <strong>anonimizar</strong>. Si la sal se filtra, o si combinás el código con otros datos (barrio, edad, fecha de compra), a veces se puede volver a identificar a la persona. Por eso la regla más segura sigue siendo la del curso <em>Datos con IA</em>: <strong>no guardes el dato personal si no lo necesitás</strong>.</p>
      <p>Y cuánto tiempo guardarlos: los datos personales se conservan mientras hagan falta para lo que se pidieron, no para siempre. Definir ese plazo, y borrarlos después, también es parte del diseño del pipeline.</p>
      ` },
    ],
    practica: [
      "Cambiá en la cuenta de la nube columnas_que_usa a 5. Anotá cuántos GB lee cada forma y el nuevo ahorro, y explicá por qué SELECT * es caro.",
      "Para 3 casos (el sueldo del mes, el estado de un envío y una alarma de incendio), decidí si conviene batch, microlotes o streaming. Anotá la decisión y el porqué en una tabla.",
      "Cambiá la SAL del ejemplo y volvé a correrlo. Anotá si los códigos cambian y explicá por qué la sal tiene que estar guardada fuera del código.",
    ],
    recursos: [
      { t: "Ley 25.326 de Protección de los Datos Personales (Argentina)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790" },
      { t: "Agencia de Acceso a la Información Pública: protección de datos personales", url: "https://www.argentina.gob.ar/aaip/datospersonales" },
      { t: "Libro: Fundamentos de ingeniería de datos, de Joe Reis y Matt Housley (Marcombo, 2023): seguridad y privacidad", url: "https://www.librerianacional.com/fundamentos-de-ingenieria-de-datos-/p" },
    ],
    quiz: [
      { q: "Tu empresa necesita guardar millones de archivos de logs de forma barata. ¿Qué servicio de la nube usás?", opciones: ["Almacenamiento de objetos, como Amazon S3 o Google Cloud Storage","Un data warehouse","Una base de datos de la caja","Un orquestador"], correcta: 0, explicacion: "El almacenamiento de objetos guarda archivos de cualquier tamaño muy barato. El warehouse tienta porque ahí se analiza, pero está pensado para tablas y cobra más." },
      { q: "Si tu warehouse cobra por datos leídos y tu consulta usa 2 de 10 columnas, ¿qué conviene?", opciones: ["SELECT * para no olvidarte nada","Pedir solo esas 2 columnas, con los datos guardados por columnas (como Parquet)","Hacer la consulta de noche","Copiar la tabla"], correcta: 1, explicacion: "Leer menos columnas es pagar menos. SELECT * tienta por cómodo, pero lee las 10 columnas y te cobran por todas." },
      { q: "Tus consultas casi siempre piden un mes, pero cada una lee todo el año. ¿Qué cambiás?", opciones: ["Comprás más espacio","Borrás los meses viejos","Particionás los datos por fecha, para que una consulta de junio lea solo junio","Hacés menos consultas"], correcta: 2, explicacion: "Particionar separa los datos para que cada consulta lea solo su parte. Borrar los meses viejos tienta porque reduce lo que se lee, pero perdés la historia." },
      { q: "La dueña de La Esquina mira el informe de ventas una vez por semana. ¿Qué conviene?", opciones: ["Streaming con Kafka","Un pipeline cada minuto","Mandarlo a mano","Batch: un pipeline por lotes, una vez por día alcanza y sobra"], correcta: 3, explicacion: "Si nadie mira el dato antes, no tiene sentido tenerlo al instante. Streaming tienta porque suena moderno, pero es más caro y complejo sin ningún beneficio para ella." },
      { q: "Un banco quiere frenar una compra con tarjeta robada antes de que se apruebe. ¿Qué necesita?", opciones: ["Streaming: el dato procesado apenas llega","Batch diario","Un informe semanal","Microlotes cada hora"], correcta: 0, explicacion: "Una hora tarde, el fraude ya pasó. Microlotes cada hora tienta como punto medio, pero para frenar la compra hay que decidir en segundos." },
      { q: "La tienda online quiere mostrar el stock casi al día, sin pagar un sistema de streaming. ¿Qué proponés?", opciones: ["Batch una vez por semana","Microlotes: el pipeline idempotente con marca de agua cada pocos minutos","No mostrar el stock","Kafka"], correcta: 1, explicacion: "Los microlotes dan datos casi al día con las herramientas de batch. Kafka tienta porque es la herramienta de streaming, pero es mucho más de lo que hace falta acá." },
      { q: "El tablero de ventas usa un usuario de la base que puede leer, escribir y borrar todo. ¿Qué regla rompe?", opciones: ["Ninguna","La de las contraseñas","La de mínimo privilegio: el tablero solo necesita leer la capa de negocio","La de registro de accesos"], correcta: 2, explicacion: "Si roban ese usuario, pueden borrar todo. Que no rompa ninguna tienta porque el tablero funciona, pero funcionar no es lo mismo que estar protegido." },
      { q: "Querés analizar compras por cliente sin que se vea el DNI. ¿Qué hacés?", opciones: ["Borrás la columna de clientes","Dejás el DNI y confiás en el equipo","Mostrás solo los últimos 3 números","Reemplazás el DNI por un seudónimo hecho con un hash y una sal secreta"], correcta: 3, explicacion: "El seudónimo es siempre el mismo para la misma persona, así que podés contar, pero no deja ver el DNI. Mostrar los últimos números tienta, pero con otros datos se puede adivinar el resto." },
      { q: "Si alguien consigue la sal que usaste para los seudónimos, ¿qué puede hacer?", opciones: ["Probar DNI uno por uno y descubrir a quién corresponde cada código","Nada, el hash no se puede romper","Borrar los datos","Solo ver la sal"], correcta: 0, explicacion: "Con la sal, alguien puede calcular el código de cada DNI posible y compararlo. Que el hash no se pueda romper tienta porque es cierto para el hash solo, pero la sal es justamente lo que lo protege." },
      { q: "Tu compañero dice que, con los seudónimos, los datos ya son anónimos. ¿Qué le respondés?", opciones: ["Que tiene razón","Que no: seudonimizar no es anonimizar; combinando datos a veces se puede volver a identificar a la persona","Que hay que usar MD5","Que no importa"], correcta: 1, explicacion: "Con barrio, edad y fecha de compra, a veces se reconoce a alguien aunque no esté el DNI. Que tenga razón tienta porque el DNI ya no se ve, pero la identidad puede salir por otros datos." },
      { q: "Si tu pipeline guarda datos personales en Argentina, ¿qué ley tenés que respetar?", opciones: ["Ninguna","La ley de defensa del consumidor","La Ley 25.326 de Protección de los Datos Personales","La ley de contratos"], correcta: 2, explicacion: "La Ley 25.326 regula los datos personales y la controla la Agencia de Acceso a la Información Pública. Defensa del consumidor tienta porque protege a los clientes, pero trata otras cosas." },
      { q: "Tu pipeline guarda los datos personales de los clientes para siempre, \"por si acaso\". ¿Qué problema tiene?", opciones: ["Ninguno, cuanto más datos mejor","Que ocupa espacio","Que es lento","Que los datos personales se guardan mientras hagan falta para lo que se pidieron: hay que definir un plazo y borrarlos"], correcta: 3, explicacion: "Guardar de más es un riesgo y va contra lo que pide la ley. Que ocupe espacio tienta como problema, pero el problema principal es tener datos de personas que ya no necesitás." },
    ],
  },
  {
    id: "ia-de",
    icono: "🤖",
    titulo: "Usar IA como data engineer",
    nivel: "Avanzado",
    objetivos: [
      "Pedirle código o SQL a la IA con el contexto que necesita: tablas, columnas, ejemplos y motor de base",
      "Verificar el código de la IA con datos chicos, tests y valores de control antes de usarlo",
      "Reconocer los riesgos propios del código generado: borrados, contraseñas, datos personales y paquetes inventados",
    ],
    lecciones: [
      { titulo: "Pedirle código a la IA: el contexto lo es todo", html: `
        <p class="idea">La IA escribe código rápido, pero no conoce tus tablas. Si le pedís "haceme el total por sucursal", inventa nombres de columnas que no existen. Es como pedirle a un plomero que arregle un caño sin decirle dónde está.</p>
      <p>Lo que la IA necesita saber para escribir código que funcione la primera vez:</p>
      <table>
        <tr><th>Qué darle</th><th>Por qué</th><th>Ejemplo</th></tr>
        <tr><td>Las tablas y columnas exactas, con sus tipos</td><td>Si no, inventa nombres</td><td>ventas(id_venta TEXT, fecha TEXT, sucursal TEXT, total INTEGER...)</td></tr>
        <tr><td>3 filas de ejemplo</td><td>Ve los formatos reales: fechas, mayúsculas, decimales</td><td>V0001, 2025-01-01, Centro, 6800</td></tr>
        <tr><td>Dónde corre</td><td>Cada base tiene su dialecto de SQL</td><td>SQLite, desde Python con sqlite3</td></tr>
        <tr><td>El resultado esperado</td><td>Para que sepa cuándo terminó</td><td>Una fila por sucursal, ordenada de mayor a menor</td></tr>
        <tr><td>Un valor de control</td><td>Para que puedas comprobarlo</td><td>Las sucursales tienen que sumar 6270350</td></tr>
      </table>
      <p>Todo junto, un pedido que funciona:</p>
      <pre><code>Trabajo con SQLite desde Python (módulo sqlite3).
Tengo esta tabla:
  ventas(id_venta TEXT PRIMARY KEY, fecha TEXT 'AAAA-MM-DD', sucursal TEXT,
         producto TEXT, cantidad INTEGER, total INTEGER)
Ejemplos de filas:
  ('V0001', '2025-01-01', 'Centro', 'Arroz 1 kg', 4, 6800)
  ('V0002', '2025-01-01', 'Centro', 'Agua 2 L', 6, 5400)
Quiero una consulta con el total y la cantidad de ventas por sucursal y por mes,
ordenada por mes. Usá solo estas columnas. Explicame cada parte en una línea.
Control: la suma de todos los totales tiene que dar 6270350.</code></pre>
      <p>Dos frases hacen mucho: <strong>"usá solo estas columnas"</strong> evita que invente, y <strong>"explicame cada parte"</strong> te obliga a leerla y la obliga a ser clara. Si no entendés lo que te devuelve, no lo uses: preguntale de nuevo hasta entenderlo. Es tu código, aunque lo haya escrito otro.</p>
      <p><strong>Para qué conviene usarla:</strong> escribir el primer borrador de una consulta o una función, traducir de SQL a pandas, explicar un error que no entendés y proponer tests. <strong>Para qué no:</strong> decidir las reglas del negocio (si 400 unidades es un error lo sabe la sucursal, no la IA) ni conectarse sola a tus bases de datos.</p>
      ` },
      { titulo: "Verificar el código que te da la IA", html: `
        <p class="idea">El código de la IA se ve prolijo y seguro aunque esté mal. La regla es la misma que para los números del curso <em>Datos con IA</em>: no se usa nada que no pasó un control. Y para el código, el control es correrlo con datos que conocés.</p>
      <p>Supongamos que le pedís a la IA el total por sucursal de la planilla sucia y te devuelve este código. Corre sin errores y parece bien. Antes de usarlo, un test con lo que ya sabés: tiene que haber 3 sucursales.</p>
      <pre><code>import pandas as pd

# Código que propuso la IA
def total_por_sucursal(ruta):
    v = pd.read_csv(ruta)
    return v.groupby("sucursal")["total"].sum()

resultado = total_por_sucursal("ventas-sucias.csv")
assert len(resultado) == 3, f"la IA devolvió {len(resultado)} sucursales, no 3"</code></pre>
      <pre><code>Error:
AssertionError: la IA devolvió 11 sucursales, no 3</code></pre>
      <p>El test lo atrapó: el código no unificó cómo se escribe la sucursal, y "sur" o "SUR " quedaron como sucursales aparte. Tampoco sacó duplicados. Ningún mensaje de error lo hubiera avisado: <strong>el código "funcionaba"</strong>. La versión corregida, con los controles que conocés:</p>
      <pre><code>import pandas as pd

def total_por_sucursal(ruta):
    v = pd.read_csv(ruta).drop_duplicates().dropna(subset=["cantidad"])
    v["sucursal"] = v["sucursal"].str.strip().str.capitalize()
    precio = v["precio_unitario"].astype(str).str.replace("$", "").str.replace(".", "").astype("int64")
    v["total"] = v["cantidad"].astype("int64").replace(400, 4) * precio
    return v.groupby("sucursal")["total"].sum()

resultado = total_por_sucursal("ventas-sucias.csv")
assert len(resultado) == 3, "tienen que ser 3 sucursales"
assert resultado.sum() == 6270350, "no coincide con el control"
print(resultado)
print("Los controles pasaron")</code></pre>
      <pre><code>Salida:
sucursal
Centro    2891950
Norte     1670050
Sur       1708350
Name: total, dtype: int64
Los controles pasaron</code></pre>
      <p><strong>Cinco controles para cualquier código generado:</strong></p>
      <ol>
        <li><strong>Leelo entero</strong> antes de correrlo. Si hay algo que no entendés, preguntá qué hace.</li>
        <li><strong>Correlo primero con datos chicos</strong> que puedas calcular a mano, como las 4 ventas de los primeros módulos.</li>
        <li><strong>Compará con valores de control</strong>: cantidad de filas, cantidad de grupos, total general.</li>
        <li><strong>Buscá las columnas</strong>: que todas las que usa existan en tu tabla con ese nombre exacto.</li>
        <li><strong>Escribí el test</strong> con assert y dejalo en el código, para que siga controlando cuando alguien lo cambie.</li>
      </ol>
      <p>Un dato a favor: pedirle a la IA que escriba los tests de su propio código funciona bien. Pero los valores de control los ponés vos, porque salen de lo que sabés de los datos.</p>
      ` },
      { titulo: "Riesgos: borrados, contraseñas y paquetes inventados", html: `
        <p class="idea">Con el código pasa algo que no pasa con un texto: se ejecuta. Un párrafo equivocado se corrige; un DELETE equivocado borra datos de verdad. Por eso el código de la IA tiene riesgos propios, y conviene conocerlos antes de que pasen.</p>
      <table>
        <tr><th>Riesgo</th><th>Cómo se ve</th><th>Qué hacés</th></tr>
        <tr><td>Borra o cambia de más</td><td>Un DELETE o UPDATE sin WHERE, o un <code>if_exists="replace"</code> sobre una tabla que no era</td><td>Corré primero el SELECT con el mismo WHERE y probá en una copia, nunca en la base real</td></tr>
        <tr><td>Pegar contraseñas en el chat</td><td>Le pasás el código con la clave de la base adentro para que lo arregle</td><td>Sacá la clave antes de pegar; si ya la pegaste, cambiala</td></tr>
        <tr><td>Pegar datos personales</td><td>Le pasás filas reales de clientes como ejemplo</td><td>Usá filas inventadas con el mismo formato, o seudónimos</td></tr>
        <tr><td>Paquetes que no existen</td><td>Te dice <code>pip install</code> de una librería con un nombre que suena bien, pero no existe</td><td>Buscala en pypi.org y fijate que sea conocida, antes de instalarla</td></tr>
        <tr><td>Columnas o funciones inventadas</td><td>Usa <code>df.limpiar_todo()</code> o una columna "monto" que tu tabla no tiene</td><td>Los controles de la lección anterior lo atrapan</td></tr>
      </table>
      <p><strong>El riesgo de los paquetes inventados merece una explicación.</strong> A veces la IA recomienda instalar una librería que no existe. Algunas personas con malas intenciones registran justamente esos nombres con código dañino adentro, esperando que alguien siga la recomendación sin revisar. Por ejemplo, si te propone <code>pip install pandas-cleaner-pro</code>, antes de instalarlo buscalo en pypi.org (el registro oficial de librerías de Python): mirá cuánta gente lo usa, desde cuándo existe y quién lo mantiene. Ante la duda, resolvelo con pandas, que ya conocés.</p>
      <p><strong>La regla general:</strong> la IA es un ayudante muy rápido que no conoce tu negocio ni tus datos y que nunca asume las consecuencias. Escribe el borrador; vos lo leés, lo probás y lo firmás. Es lo mismo que el curso <em>Datos con IA</em> enseña para los números, aplicado al código.</p>
      <p>Y una ventaja para tu aprendizaje: cuando no entiendas un código de este curso, pedile a la IA que te lo explique línea por línea. Es uno de sus mejores usos, y no tiene riesgo, porque no ejecuta nada.</p>
      ` },
    ],
    practica: [
      "Pedile a una IA la consulta del ejemplo de la primera lección, con el pedido completo. Correla en el laboratorio con la tabla del módulo de SQL y verificá que los totales sumen 6270350. Anotá si salió bien a la primera.",
      "Pedile a una IA que escriba 3 tests con assert para la función limpiar_sucursal del módulo de funciones. Correlos y anotá cuántos pasaron.",
      "Buscá en pypi.org la librería pandas y fijate desde cuándo existe y cuántas versiones tiene. Después buscá un nombre inventado, como pandas-cleaner-pro, y anotá qué encontrás.",
    ],
    recursos: [
      { t: "PyPI: el registro oficial de librerías de Python, para verificar un paquete antes de instalarlo", url: "https://pypi.org/" },
      { t: "Anthropic: buenas prácticas para escribir pedidos a Claude (en inglés)", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" },
      { t: "OWASP: riesgos de seguridad de las aplicaciones con IA (en inglés)", url: "https://genai.owasp.org/llm-top-10/" },
    ],
    quiz: [
      { q: "Si le pedís a la IA \"haceme el total por sucursal\" sin más datos, ¿qué es lo más probable?", opciones: ["Que invente nombres de columnas que tu tabla no tiene","Que lo haga perfecto","Que se niegue","Que te pida la contraseña"], correcta: 0, explicacion: "Sin las columnas exactas, la IA adivina nombres típicos. Que lo haga perfecto tienta porque el código se ve prolijo, pero puede usar una columna \"monto\" que no existe." },
      { q: "Vas a pedirle a la IA una consulta SQL. ¿Qué le das para que no invente?", opciones: ["Solo la pregunta","Las tablas y columnas exactas, 3 filas de ejemplo, la base que usás y un valor de control","Toda la base de datos","Tu contraseña"], correcta: 1, explicacion: "Con el contexto justo, la IA escribe para tu caso. Toda la base tienta para que tenga todo, pero expone datos que no necesita, incluidos los personales." },
      { q: "La IA te devuelve una consulta que no entendés del todo, pero da un resultado razonable. ¿Qué hacés?", opciones: ["La usás, el resultado es razonable","La borrás","Le pedís que te explique cada parte hasta entenderla, y recién ahí la usás","Le pedís otra distinta"], correcta: 2, explicacion: "No se usa código que no entendés. Usarla porque el resultado es razonable tienta, pero razonable no es correcto, y si falla mañana no vas a saber arreglarla." },
      { q: "Si usás IA en tu trabajo con datos, ¿qué parte no le podés dejar?", opciones: ["Escribir el borrador de una consulta","Traducir SQL a pandas","Explicar un error","Decidir las reglas del negocio, como si 400 unidades es un error"], correcta: 3, explicacion: "Las reglas salen de quien conoce el negocio. Explicar un error tienta como algo delicado, pero es uno de los mejores usos de la IA: no decide nada por vos." },
      { q: "El código de la IA corre sin errores y devuelve 11 sucursales cuando sabés que son 3. ¿Qué pasó?", opciones: ["No unificó cómo se escribe la sucursal: \"sur\" y \"SUR \" quedaron aparte","Hay 11 sucursales","Python falló","Faltan datos"], correcta: 0, explicacion: "Un código puede correr bien y dar un resultado equivocado. Que haya 11 sucursales tienta porque lo dice el resultado, pero contradice lo que sabés del negocio." },
      { q: "Si querés comprobar el código de la IA antes de usarlo con todos los datos, ¿con qué lo probás primero?", opciones: ["Con la base real","Con datos chicos que puedas calcular a mano","Con datos al azar","No hace falta probarlo"], correcta: 1, explicacion: "Con datos chicos sabés qué tiene que dar. La base real tienta porque es lo que importa, pero si el código borra o cambia de más, el daño es real." },
      { q: "Escribiste assert resultado.sum() == 6270350 en el código de la IA. ¿Para qué lo dejás ahí?", opciones: ["Para que se vea más profesional","Para que corra más rápido","Para que siga controlando cada vez que alguien cambie el código","Para borrarlo después"], correcta: 2, explicacion: "El test queda vigilando. Borrarlo después tienta cuando ya pasó, pero los errores aparecen cuando alguien toca el código meses más tarde." },
      { q: "¿Quién conviene que escriba los valores de control de los tests?", opciones: ["La IA","Nadie","El que corre el código","Vos, porque salen de lo que sabés de los datos"], correcta: 3, explicacion: "Los valores de control vienen de tu conocimiento de los datos. Que los escriba la IA tienta porque escribe rápido los tests, pero podría poner el valor que da su propio código, aunque esté mal." },
      { q: "La IA te propone un UPDATE sobre la tabla de ventas. ¿Qué hacés antes de correrlo?", opciones: ["Corrés el SELECT con el mismo WHERE y lo probás en una copia de la tabla","Lo corrés directo","Le preguntás si está segura","Lo corrés de noche"], correcta: 0, explicacion: "El SELECT muestra qué va a cambiar, y la copia te protege si sale mal. Preguntarle si está segura tienta, pero la IA suele confirmar lo que dijo." },
      { q: "Querés que la IA te ayude con un código que tiene la clave de la base adentro. ¿Qué hacés?", opciones: ["Lo pegás tal cual","Sacás la clave antes de pegarlo; si ya la pegaste, la cambiás","Le pedís que no la mire","Pegás solo la clave"], correcta: 1, explicacion: "Lo que pegás en un chat sale de tu computadora. Pedirle que no la mire tienta, pero la clave ya quedó en la conversación." },
      { q: "La IA te dice que instales pandas-cleaner-pro para limpiar los datos. ¿Qué hacés?", opciones: ["Lo instalás, la IA sabe","Lo instalás y probás","Lo buscás en pypi.org: si no existe o casi nadie lo usa, no lo instalás","Le pedís otro nombre"], correcta: 2, explicacion: "Hay gente que registra los nombres que la IA inventa con código dañino. Instalarlo y probar tienta, pero al instalarlo ya puede ejecutar código en tu computadora." },
      { q: "Tu compañera usa la IA para entender línea por línea un código del curso que no le salía. ¿Es un buen uso?", opciones: ["No, es hacer trampa","No, la IA inventa","Solo si paga","Sí: es uno de sus mejores usos, y no tiene riesgo porque no ejecuta nada"], correcta: 3, explicacion: "Que te explique código te ayuda a aprender. Que sea hacer trampa tienta como idea, pero entender el código es justo lo que buscás; la trampa sería copiarlo sin entender." },
    ],
  },
  {
    id: "proyecto",
    icono: "🏁",
    titulo: "Proyecto final: el pipeline de La Esquina",
    nivel: "Proyecto final",
    objetivos: [
      "Construir un pipeline completo: de la planilla sucia a un data warehouse con esquema estrella, tests y log",
      "Comprobar el resultado con los valores de control del curso",
      "Publicar el proyecto en GitHub con un README que se entienda, para mostrarlo en tu portafolio",
    ],
    lecciones: [
      { titulo: "Proyecto guiado: de la planilla sucia al warehouse", html: `
        <p class="idea">Este es el momento de juntar todo: leer, limpiar, validar, cargar, modelar y controlar, en un solo programa que corre de punta a punta. Es el mismo trabajo que hace un data engineer, en chico.</p>
      <p><strong>La consigna.</strong> La dueña de La Esquina quiere dejar de juntar planillas a mano. Tu pipeline tiene que tomar <code>ventas-sucias.csv</code> y dejar un warehouse en <code>la-esquina.db</code> con un esquema estrella y una vista con el total por sucursal y mes. Si algo no cierra, tiene que frenar y avisar.</p>
      <pre><code>import logging, sqlite3, sys
import pandas as pd

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(levelname)s %(message)s")
log = logging.getLogger("la-esquina")
SUCURSALES = {"Centro", "Norte", "Sur"}
CORRECCIONES = {"V0864": 4}  # confirmado con la sucursal: era un error de tipeo

def extraer(ruta):
    v = pd.read_csv(ruta, dtype=str)
    log.info("extraer: %d filas", len(v))
    return v

def transformar(v):
    v = v.drop_duplicates().dropna(subset=["cantidad"]).copy()
    v["sucursal"] = v["sucursal"].str.strip().str.capitalize()
    iso = pd.to_datetime(v["fecha"], format="%Y-%m-%d", errors="coerce")
    dmy = pd.to_datetime(v["fecha"], format="%d/%m/%Y", errors="coerce")
    v["fecha"] = iso.fillna(dmy).dt.strftime("%Y-%m-%d")
    v["precio_unitario"] = v["precio_unitario"].str.replace("$", "").str.replace(".", "").astype("int64")
    v["cantidad"] = v["cantidad"].astype("int64")
    for id_venta, cantidad in CORRECCIONES.items():
        v.loc[v["id_venta"] == id_venta, "cantidad"] = cantidad
        log.warning("corrección confirmada: %s pasa a cantidad %d", id_venta, cantidad)
    v["total"] = v["cantidad"] * v["precio_unitario"]
    log.info("transformar: %d filas", len(v))
    return v

def validar(v):
    problemas = []
    if v["id_venta"].duplicated().any(): problemas.append("ventas repetidas")
    if not set(v["sucursal"]) &lt;= SUCURSALES: problemas.append("sucursales desconocidas")
    if v["fecha"].isna().any(): problemas.append("fechas que no se pudieron leer")
    if ((v["cantidad"] &lt; 1) | (v["cantidad"] &gt; 10)).any(): problemas.append("cantidades fuera de 1 a 10 sin corrección confirmada")
    if problemas:
        log.error("validar: %s", ", ".join(problemas))
        raise SystemExit(1)
    log.info("validar: sin problemas")

def cargar(v, con):
    with con:
        v[["producto", "categoria"]].drop_duplicates().to_sql("dim_producto", con, if_exists="replace", index=False)
        v[["id_venta", "fecha", "sucursal", "producto", "cantidad", "total"]].to_sql("hechos_ventas", con, if_exists="replace", index=False)
        con.execute("DROP VIEW IF EXISTS negocio_ventas_mes")
        con.execute("""CREATE VIEW negocio_ventas_mes AS
            SELECT sucursal, substr(fecha, 1, 7) AS mes, COUNT(*) AS ventas, SUM(total) AS total
            FROM hechos_ventas GROUP BY sucursal, mes""")
    log.info("cargar: %d ventas en el warehouse", len(v))

def controlar(con):
    filas, total = con.execute("SELECT COUNT(*), SUM(total) FROM hechos_ventas").fetchone()
    norte_junio = con.execute("SELECT total FROM negocio_ventas_mes WHERE sucursal = 'Norte' AND mes = '2025-06'").fetchone()[0]
    esperado = (947, 6270350, 520500)
    if (filas, total, norte_junio) != esperado:
        log.error("control: dio %s y se esperaba %s", (filas, total, norte_junio), esperado)
        raise SystemExit(1)
    log.info("control: %d ventas, total %d, Norte en junio %d", filas, total, norte_junio)

con = sqlite3.connect("la-esquina.db")
v = transformar(extraer("ventas-sucias.csv"))
validar(v)
cargar(v, con)
controlar(con)</code></pre>
      <pre><code>Salida:
INFO extraer: 958 filas
WARNING corrección confirmada: V0864 pasa a cantidad 4
INFO transformar: 947 filas
INFO validar: sin problemas
INFO cargar: 947 ventas en el warehouse
INFO control: 947 ventas, total 6270350, Norte en junio 520500</code></pre>
      <p>Son unas 60 líneas, y cada parte la viste en un módulo. Fijate en dos decisiones nuevas. La cantidad de 400 ya no se corrige con un <code>replace</code> a ciegas: hay una lista de <strong>correcciones confirmadas</strong>, por número de venta, y si aparece cualquier otra cantidad fuera de 1 a 10, la validación frena el pipeline para que alguien pregunte. Y la carga es idempotente: <code>if_exists="replace"</code> y <code>DROP VIEW IF EXISTS</code> hacen que correrlo dos veces deje lo mismo.</p>
      <table>
        <tr><th>Paso</th><th>Módulo donde lo viste</th><th>Control</th></tr>
        <tr><td>extraer</td><td>Archivos, pandas</td><td>958 filas</td></tr>
        <tr><td>transformar</td><td>Calidad de datos</td><td>947 filas, 1 corrección confirmada</td></tr>
        <tr><td>validar</td><td>Calidad de datos</td><td>Sin problemas</td></tr>
        <tr><td>cargar</td><td>Pipelines, warehouse</td><td>Esquema estrella y vista</td></tr>
        <tr><td>controlar</td><td>Pipelines</td><td>947 ventas, 6270350 y Norte en junio 520500</td></tr>
      </table>
      <p><strong>Rúbrica para evaluarte</strong> (un punto cada una): el pipeline corre de punta a punta sin tocar nada; cada etapa es una función; los valores de control coinciden; correrlo dos veces deja lo mismo; si cambiás un dato a mano para romperlo, el pipeline frena con un ERROR claro; y alguien que no lo escribió entiende qué hace leyendo el log. Con 5 o 6 puntos, estás listo para mostrarlo.</p>
      ` },
      { titulo: "Tu portafolio: mostrar lo que sabés hacer", html: `
        <p class="idea">Para conseguir un primer trabajo en datos, un proyecto que alguien puede abrir y correr vale más que una lista de cursos. Este pipeline puede ser el primero de tu portafolio, y no hace falta tener experiencia laboral para mostrarlo.</p>
      <p><strong>1. Subilo a GitHub</strong>, con lo que viste en el módulo de automatizar. Una estructura simple y prolija:</p>
      <pre><code>la-esquina-pipeline/
├── README.md            qué hace, cómo correrlo y qué decisiones tomaste
├── requirements.txt     pandas
├── pipeline.py          el código del proyecto guiado
├── test_pipeline.py     los tests con assert
└── datos/
    └── ventas-sucias.csv</code></pre>
      <p><strong>2. Escribí un README que se entienda.</strong> Es lo primero que se lee, y muchas veces lo único. Cinco partes alcanzan:</p>
      <table>
        <tr><th>Parte</th><th>Qué contar</th></tr>
        <tr><td>Qué problema resuelve</td><td>"Junta y limpia las ventas de 3 sucursales y las deja listas para analizar"</td></tr>
        <tr><td>Cómo correrlo</td><td>Los 2 o 3 comandos, copiables</td></tr>
        <tr><td>Qué hace cada paso</td><td>El diagrama del pipeline, como el del módulo de pipelines</td></tr>
        <tr><td>Decisiones que tomaste</td><td>Por qué las fechas se leen día/mes/año, qué se hace con la venta de 400, por qué es idempotente</td></tr>
        <tr><td>Cómo sé que funciona</td><td>Los tests y los valores de control</td></tr>
      </table>
      <p>La parte de <strong>decisiones</strong> es la que más diferencia tu proyecto: muestra que entendés por qué, no solo cómo.</p>
      <p><strong>3. Preparate para contarlo.</strong> En una entrevista te van a preguntar por tu proyecto. Practicá contarlo en 2 minutos con esta forma: <em>el problema</em> (planillas sucias juntadas a mano), <em>lo que hiciste</em> (el pipeline, paso por paso), <em>una dificultad</em> (las fechas ambiguas, y cómo la resolviste) y <em>cómo comprobaste que funciona</em> (los controles). La dificultad es lo que más recuerdan quienes entrevistan.</p>
      <p><strong>4. Para seguir aprendiendo:</strong></p>
      <ul>
        <li><strong>Hacé un segundo proyecto con datos públicos</strong>, por ejemplo de datos.gob.ar: el mismo pipeline con otro problema muestra que sabés aplicarlo, no solo copiarlo.</li>
        <li><strong>El Data Engineering Zoomcamp</strong>, gratuito y en inglés, sigue donde este curso termina: Docker, la nube, orquestadores y streaming de verdad.</li>
        <li><strong>Los libros base</strong>: <em>Fundamentos de ingeniería de datos</em> (Reis y Housley) para el panorama completo, <em>Curso intensivo de Python</em> (Matthes) para afianzar Python y <em>Aprender SQL</em> (Beaulieu) para SQL a fondo.</li>
        <li><strong>Practicá SQL todos los días</strong> un rato: es lo que más se pide en las entrevistas de datos.</li>
      </ul>
      ` },
    ],
    practica: [
      "Corré el proyecto guiado y verificá que la última línea del log diga 947 ventas, total 6270350 y Norte en junio 520500. Corrélo otra vez y comprobá que dé lo mismo.",
      "Rompé el pipeline a propósito: agregá a SUCURSALES solo \"Centro\" y \"Norte\". Anotá la línea de ERROR que aparece y en qué paso frenó.",
      "Subí el proyecto a GitHub con el README de 5 partes. Pedile a alguien que no programa que lea solo el README y anotá si pudo explicar qué hace el pipeline.",
      "Evaluate con la rúbrica de 6 puntos y anotá tu puntaje y qué criterio te costó más.",
    ],
    recursos: [
      { t: "Data Engineering Zoomcamp: el curso gratuito para seguir (en inglés)", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp" },
      { t: "GitHub: cómo escribir un buen README (en español)", url: "https://docs.github.com/es/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" },
      { t: "Datos Argentina: datos públicos para tu segundo proyecto", url: "https://www.datos.gob.ar/" },
    ],
    quiz: [
      { q: "Tu pipeline tiene que tomar la planilla sucia y dejar un warehouse. ¿Cuál es el orden de los pasos?", opciones: ["Extraer, transformar, validar, cargar y controlar","Cargar, validar, extraer","Controlar, extraer, cargar","Transformar, extraer, cargar"], correcta: 0, explicacion: "Primero se trae, se limpia y se valida; recién después se carga y se controla el resultado. Cargar antes de validar tienta para tener algo cuanto antes, pero llenarías el warehouse con datos sin revisar." },
      { q: "En el proyecto, ¿por qué la venta de 400 se corrige con una lista de correcciones por número de venta y no con replace(400, 4)?", opciones: ["Porque es más corto","Porque así se corrige solo la venta confirmada, y cualquier otra cantidad rara frena el pipeline en vez de corregirse a ciegas","Porque replace no funciona","Porque 400 es legal"], correcta: 1, explicacion: "La lista corrige solo lo confirmado y la validación atrapa lo nuevo. Que replace no funcione tienta, pero funciona: el problema es que cambiaría cualquier 400 futuro, aunque fuera un pedido real." },
      { q: "Si corrés el proyecto dos veces seguidas, ¿qué tiene que pasar con la cantidad de ventas en el warehouse?", opciones: ["Se duplica","Queda en cero","Sigue siendo 947: la carga es idempotente","Se reemplaza por la mitad"], correcta: 2, explicacion: "if_exists=\"replace\" y DROP VIEW IF EXISTS dejan lo mismo cada vez. Que se duplique tienta porque es lo que pasa con append, y por eso el proyecto no usa append." },
      { q: "Cambiás a mano un dato para romper el pipeline y sigue cargando como si nada. ¿Qué te falta?", opciones: ["Más memoria","Más prints","Correrlo de nuevo","Una validación o un control que atrape ese caso y frene con ERROR"], correcta: 3, explicacion: "Si el pipeline no frena ante datos rotos, no te protege. Más prints tienta porque ves más, pero ver no es frenar: alguien tendría que estar mirando." },
      { q: "Si el control final da 946 ventas en vez de 947, ¿qué hace el pipeline del proyecto?", opciones: ["Registra ERROR y termina con código de salida 1","Carga igual","Redondea","Borra todo"], correcta: 0, explicacion: "Un control que no coincide frena el proceso. Cargar igual tienta porque es una sola venta, pero no sabés cuál falta ni por qué, y el número del informe estaría mal." },
      { q: "¿Qué parte del README diferencia más a tu proyecto de otros parecidos?", opciones: ["El título","Las decisiones que tomaste y por qué","La cantidad de líneas","Los emojis"], correcta: 1, explicacion: "Las decisiones muestran que entendés el porqué. El título tienta porque es lo primero que se ve, pero no dice nada de cómo pensás." },
      { q: "Querés mostrar en una entrevista que sabés hacer pipelines, pero nunca trabajaste de esto. ¿Qué llevás?", opciones: ["La lista de cursos que hiciste","Nada, sin experiencia no se puede","Un proyecto en GitHub que se pueda abrir y correr, con un README claro","Una captura de pantalla"], correcta: 2, explicacion: "Un proyecto que funciona muestra lo que sabés hacer. La lista de cursos tienta porque es fácil de juntar, pero dice qué viste, no qué sabés hacer." },
      { q: "Te piden que cuentes tu proyecto en 2 minutos. ¿Qué parte conviene no saltear?", opciones: ["El nombre de cada función","Cuántas horas te llevó","Los colores del README","Una dificultad y cómo la resolviste, como las fechas ambiguas"], correcta: 3, explicacion: "La dificultad muestra cómo pensás ante un problema real. Nombrar cada función tienta para mostrar detalle, pero en 2 minutos aburre y no deja ver tu criterio." },
      { q: "Ya terminaste el proyecto de La Esquina. ¿Qué segundo proyecto muestra mejor que sabés aplicarlo?", opciones: ["El mismo tipo de pipeline con otros datos, por ejemplo públicos de datos.gob.ar","El mismo proyecto con otro nombre","Copiar uno de internet","Ninguno, con uno alcanza"], correcta: 0, explicacion: "Otro problema con el mismo método muestra que entendiste. El mismo proyecto con otro nombre tienta por rápido, pero quien lo mire se va a dar cuenta." },
      { q: "Querés seguir aprendiendo Docker, la nube y orquestadores después de este curso. ¿Qué te recomiendan los recursos?", opciones: ["Empezar de nuevo este curso","El Data Engineering Zoomcamp, gratuito, que sigue donde este curso termina","Un curso de diseño gráfico","Esperar a tener trabajo"], correcta: 1, explicacion: "El Zoomcamp cubre justo lo que sigue. Esperar a tener trabajo tienta, pero el portafolio y lo que aprendés antes son lo que te ayuda a conseguirlo." },
      { q: "Tu pipeline del proyecto mezcla toda la lógica en una sola función de 60 líneas. ¿Qué criterio de la rúbrica no cumple?", opciones: ["Los valores de control","La idempotencia","Que cada etapa sea una función","El log"], correcta: 2, explicacion: "La rúbrica pide una función por etapa. Los valores de control tientan porque pueden coincidir igual, pero coincidir no dice nada de si el código se puede probar y arreglar por partes." },
      { q: "Alguien que no programa lee tu README y no entiende qué hace el pipeline. ¿Qué hacés?", opciones: ["Nada, el README es para programadores","Agregás más código al README","Lo traducís al inglés","Reescribís la primera parte con el problema que resuelve, en palabras simples"], correcta: 3, explicacion: "Quien decide si te entrevista muchas veces no programa. Que sea solo para programadores tienta, pero el problema que resuelve se tiene que entender sin saber Python." },
    ],
  },
];

// Mapa del curso (diagrama de flujo en el inicio). Cada módulo va en una sola etapa, en el orden del temario:
// lo controla tools/test-mapas.js.
window.MAPA = {
  "titulo": "El camino de un dato, y del curso",
  "intro": "Los módulos siguen el ciclo de vida de los datos: de donde nacen hasta que se usan. Tocá un módulo para ir directo.",
  "etapas": [
    {
      "nombre": "El oficio",
      "texto": "Qué hace un data engineer y el recorrido de un dato en 5 etapas.",
      "modulos": [
        "que-es"
      ]
    },
    {
      "nombre": "Programar desde cero",
      "texto": "Python: datos, decisiones, funciones y cómo leer los errores.",
      "modulos": [
        "python-1",
        "python-2"
      ]
    },
    {
      "nombre": "Leer y guardar datos",
      "texto": "Archivos CSV y JSON, y bases de datos con SQL.",
      "modulos": [
        "archivos",
        "sql-1",
        "sql-2"
      ]
    },
    {
      "nombre": "Transformar",
      "texto": "Dar forma a los datos con pandas y probar que estén bien.",
      "modulos": [
        "pandas",
        "calidad"
      ]
    },
    {
      "nombre": "Armar el pipeline",
      "texto": "Extraer, transformar y cargar, encadenado y sin duplicar nada.",
      "modulos": [
        "pipelines"
      ],
      "vuelta": "Si un control de calidad falla, el pipeline frena y avisa: corregís y lo volvés a correr."
    },
    {
      "nombre": "Servir los datos",
      "texto": "Un data warehouse con el modelo listo para que otros analicen.",
      "modulos": [
        "warehouse"
      ]
    },
    {
      "nombre": "Que corra solo y seguro",
      "texto": "Automatizar, crecer en la nube, cuidar los datos y usar la IA como ayudante que se verifica.",
      "modulos": [
        "orquestar",
        "nube",
        "ia-de"
      ]
    },
    {
      "nombre": "Proyecto final",
      "texto": "El pipeline de La Esquina de punta a punta, para mostrar en tu portafolio.",
      "modulos": [
        "proyecto"
      ]
    }
  ]
};
