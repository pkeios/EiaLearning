// Temario del curso "Python para automatizar tareas". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js python-automatizar y node tools/metodologia.js python-automatizar
window.TEMARIO = [
{
  id: "empezar",
  icono: "🐍",
  titulo: "Tu primer programa",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué tareas conviene automatizar",
    "Escribir y correr tu primer programa en Python",
    "Guardar datos en variables y hacer cuentas",
  ],
  lecciones: [
    { titulo: "Qué es automatizar", html: `
      <p class="idea"><strong>Automatizar</strong> es hacer que la computadora haga por vos una tarea repetitiva. <strong>Python</strong> es un lenguaje de programación pensado para que se lea casi como texto, muy usado para eso.</p>
      <table>
        <tr><th>Tarea a mano</th><th>Con Python</th></tr>
        <tr><td>Sumar una columna de una planilla de 900 filas</td><td>Una línea, en un segundo</td></tr>
        <tr><td>Renombrar 200 fotos una por una</td><td>Un programa corto que las renombra todas</td></tr>
        <tr><td>Armar el mismo informe todos los lunes</td><td>Un programa que lo arma con los datos nuevos</td></tr>
        <tr><td>Separar archivos por tipo en carpetas</td><td>Un programa que los ordena</td></tr>
      </table>
      <p><strong>Conviene automatizar</strong> lo que se repite seguido, siempre igual y lleva tiempo. Lo que se hace una vez, muchas veces es más rápido a mano.</p>
      <p><strong>Para probar los códigos de este curso</strong> no hace falta instalar nada: cada código tiene un botón para correrlo en el navegador. Para usar Python en tu compu, se baja gratis de python.org.</p>
      <p>Por ejemplo, si todos los lunes copiás números de una planilla a un informe durante una hora, un programa de 20 líneas te devuelve esa hora cada semana.</p>` },
    { titulo: "Print: mostrar cosas", video: {"id":"_6N18g3ewnw","t":"Aprende Python en 10 minutos · Programador X (13:59)"}, html: `
      <p class="idea">Un programa es una lista de instrucciones que Python hace de arriba hacia abajo. La instrucción más simple es <strong>print</strong>, que muestra algo en la pantalla.</p>
      <pre><code>print("Hola, Python")
print(2 + 3)
print("Cajas:", 12 * 4)</code></pre>
      <pre><code>Salida:
Hola, Python
5
Cajas: 48</code></pre>
      <table>
        <tr><th>Escribís</th><th>Qué es</th></tr>
        <tr><td>"Hola, Python"</td><td>Un <strong>texto</strong>: va entre comillas</td></tr>
        <tr><td>2 + 3</td><td>Una cuenta: Python la resuelve</td></tr>
        <tr><td># comentario</td><td>Una nota para personas: Python la ignora</td></tr>
      </table>
      <p><strong>Las cuentas:</strong> + suma, - resta, * multiplica y / divide.</p>
      <p><strong>Si te olvidás una comilla o un paréntesis,</strong> Python muestra un error. Leelo: casi siempre dice en qué línea está el problema.</p>
      <p>Por ejemplo, print("Cajas:", 12 * 4) muestra el texto y el resultado de la cuenta, separados por un espacio.</p>` },
    { titulo: "Variables", html: `
      <p class="idea">Una <strong>variable</strong> es un nombre que guarda un dato para usarlo después. Se crea con el signo igual.</p>
      <pre><code>precio = 1700
cantidad = 4
total = precio * cantidad
print("Total:", total)

# Las variables se pueden cambiar
cantidad = cantidad + 1
print("Con una más:", precio * cantidad)</code></pre>
      <pre><code>Salida:
Total: 6800
Con una más: 8500</code></pre>
      <table>
        <tr><th>Regla para los nombres</th><th>Ejemplo</th></tr>
        <tr><td>En minúsculas, sin espacios ni tildes</td><td>precio_unitario</td></tr>
        <tr><td>Que digan qué guardan</td><td>total_ventas, no x</td></tr>
        <tr><td>No pueden empezar con un número</td><td>venta1 sí, 1venta no</td></tr>
      </table>
      <p><strong>El signo igual no es "igual" de matemática:</strong> quiere decir "guardá esto acá". Por eso cantidad = cantidad + 1 tiene sentido: suma 1 a lo que había.</p>
      <p>Por ejemplo, si el precio cambia, lo cambiás en una sola línea y todas las cuentas que lo usan se actualizan.</p>` },
  ],
  practica: [
    "Anotá 3 tareas repetitivas de tu trabajo o tu casa y cuánto tiempo te llevan por semana.",
    "Corré el código de print en el laboratorio y cambialo para que muestre tu nombre y una cuenta. Anotá lo que mostró.",
    "Escribí un programa con variables para calcular el total de una compra de 3 productos. Anotá el resultado.",
  ],
  recursos: [
    { t: "El tutorial oficial de Python, en español", url: "https://docs.python.org/es/3/tutorial/index.html" },
    { t: "Python.org: descargar Python", url: "https://www.python.org/downloads/" },
    { t: "Automate the Boring Stuff with Python, libro gratis (en inglés)", url: "https://automatetheboringstuff.com/" },
  ],
  quiz: [
    { q: "Si todos los lunes copiás los mismos datos a un informe durante una hora, ¿conviene automatizar?", opciones: ["No, nunca conviene","Solo si son 5 minutos","Sí: es repetitivo, siempre igual y lleva tiempo","Solo si sos programador"], correcta: 2, explicacion: "Lo repetitivo es lo que más conviene. \"Solo si sos programador\" tienta, pero se aprende." },
    { q: "Si una tarea se hace una sola vez y lleva 2 minutos, ¿conviene automatizarla?", opciones: ["Probablemente no: es más rápido a mano","Sí, siempre","Sí, con un programa de 200 líneas","Sí, para practicar siempre"], correcta: 0, explicacion: "Automatizar tiene sentido si se repite. \"Sí, siempre\" tienta, pero escribir el programa lleva más." },
    { q: "Si querés probar los códigos de este curso, ¿hace falta instalar algo?", opciones: ["Sí, un programa pago","Sí, una compu nueva","Sí, siempre","No: cada código se puede correr en el navegador"], correcta: 3, explicacion: "El laboratorio corre Python en la página. \"Un programa pago\" tienta, pero Python es gratis." },
    { q: "Si escribís print(\"Hola\"), ¿qué hace Python?", opciones: ["Imprime en papel","Muestra Hola en la pantalla","Borra todo","No hace nada"], correcta: 1, explicacion: "print muestra en pantalla. \"Imprime en papel\" tienta por el nombre, pero no usa la impresora." },
    { q: "Si escribís print(12 * 4), ¿qué muestra?", opciones: ["12 * 4","124","48","16"], correcta: 2, explicacion: "Python resuelve la cuenta. \"12 * 4\" tienta, pero sin comillas no es texto." },
    { q: "Si escribís print(\"12 * 4\") con comillas, ¿qué muestra?", opciones: ["12 * 4, como texto","48","Un error","16"], correcta: 0, explicacion: "Con comillas es texto y se muestra tal cual. El 48 tienta, pero las comillas hacen que no sea cuenta." },
    { q: "Si una línea empieza con #, ¿qué hace Python?", opciones: ["La muestra","La borra del archivo","Da error","La ignora: es un comentario para personas"], correcta: 3, explicacion: "Los comentarios explican el código. \"La muestra\" tienta, pero Python no la ejecuta." },
    { q: "Si te olvidás una comilla y aparece un error, ¿qué hacés?", opciones: ["Cerrás todo","Lo leés: suele decir en qué línea está el problema","Reinstalás Python","Lo ignorás"], correcta: 1, explicacion: "El error ayuda a encontrar el problema. Reinstalar tienta, pero el problema es la comilla." },
    { q: "Si escribís precio = 1700, ¿qué hace el signo igual?", opciones: ["Compara si son iguales","Muestra 1700","Guarda 1700 en la variable precio","Suma 1700"], correcta: 2, explicacion: "El igual guarda. \"Compara\" tienta por la matemática, pero en Python significa \"guardá esto acá\"." },
    { q: "Si cantidad vale 4 y hacés cantidad = cantidad + 1, ¿cuánto vale?", opciones: ["5","4","1","Da error"], correcta: 0, explicacion: "Suma 1 a lo que había. \"Da error\" tienta por la matemática, pero es una instrucción válida." },
    { q: "Si querés un buen nombre de variable para el total de ventas, ¿cuál elegís?", opciones: ["x","Total Ventas","1total","total_ventas"], correcta: 3, explicacion: "Minúsculas, sin espacios y que diga qué guarda. \"x\" tienta por corto, pero no dice nada." },
    { q: "Si el precio cambia y lo usás en muchas cuentas, ¿qué conviene?", opciones: ["Escribir el número en cada cuenta","Guardarlo en una variable y cambiarlo en una sola línea","Borrar el programa","Nada"], correcta: 1, explicacion: "Con una variable se cambia en un lugar. Escribirlo en cada cuenta tienta por simple, pero te podés olvidar alguno." },
  ],
},
{
  id: "datos",
  icono: "🧾",
  titulo: "Textos, listas y diccionarios",
  nivel: "Básico",
  objetivos: [
    "Armar textos con datos usando f-strings",
    "Guardar varios datos en una lista",
    "Guardar datos con nombre en un diccionario",
  ],
  lecciones: [
    { titulo: "Textos", html: `
      <p class="idea">Los <strong>textos</strong> (strings) son muy comunes en automatización: nombres de archivos, mensajes, columnas. Python trae muchas herramientas para trabajarlos.</p>
      <pre><code>cliente = "  ana gómez  "
limpio = cliente.strip().title()
print(limpio)

producto = "Arroz 1 kg"
cantidad = 4
print(f"{cantidad} unidades de {producto}")

archivo = "foto 01.JPG"
print(archivo.lower().replace(" ", "_"))</code></pre>
      <pre><code>Salida:
Ana Gómez
4 unidades de Arroz 1 kg
foto_01.jpg</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th></tr>
        <tr><td>.strip()</td><td>Saca los espacios de los costados</td></tr>
        <tr><td>.title()</td><td>Pone mayúscula al principio de cada palabra</td></tr>
        <tr><td>.lower() y .upper()</td><td>Todo en minúscula o en mayúscula</td></tr>
        <tr><td>.replace(a, b)</td><td>Cambia a por b</td></tr>
        <tr><td>f"...{variable}..."</td><td>Un <strong>f-string</strong>: mete el valor de la variable en el texto</td></tr>
      </table>
      <p>Por ejemplo, con .strip().title() se arreglan de una vez nombres cargados con espacios de más y todo en minúscula.</p>` },
    { titulo: "Listas", video: {"id":"v25-m1LOUiU","t":"Listas, tuplas, conjuntos y diccionarios en 8 minutos · BitBoss (8:20)"}, html: `
      <p class="idea">Una <strong>lista</strong> guarda varios datos en orden, entre corchetes. Es la forma de trabajar con muchos archivos, productos o filas.</p>
      <pre><code>productos = ["Arroz", "Agua", "Fideos"]
productos.append("Yerba")
print(productos)
print(len(productos), "productos")
print("El primero es", productos[0])

precios = [1700, 900, 1200, 4500]
print("Suma:", sum(precios))
print("El más caro:", max(precios))</code></pre>
      <pre><code>Salida:
['Arroz', 'Agua', 'Fideos', 'Yerba']
4 productos
El primero es Arroz
Suma: 8300
El más caro: 4500</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th></tr>
        <tr><td>.append(x)</td><td>Agrega x al final</td></tr>
        <tr><td>len(lista)</td><td>Cuenta los elementos</td></tr>
        <tr><td>lista[0]</td><td>El primero (se cuenta desde 0)</td></tr>
        <tr><td>sum, max, min</td><td>Suma, el mayor y el menor</td></tr>
      </table>
      <p><strong>Se cuenta desde 0:</strong> en Python el primer elemento es el 0, el segundo el 1, y así.</p>
      <p>Por ejemplo, una lista de nombres de archivos te permite después renombrarlos todos con un bucle.</p>` },
    { titulo: "Diccionarios", html: `
      <p class="idea">Un <strong>diccionario</strong> guarda datos con nombre: cada dato tiene una <strong>clave</strong> y un valor. Es como una fila de una planilla con sus columnas.</p>
      <pre><code>venta = {"producto": "Arroz 1 kg", "cantidad": 4, "precio": 1700}
print(venta["producto"])
venta["total"] = venta["cantidad"] * venta["precio"]
print(venta)

stock = {"Arroz": 10, "Agua": 25}
stock["Arroz"] = stock["Arroz"] - 4
print(stock)</code></pre>
      <pre><code>Salida:
Arroz 1 kg
{'producto': 'Arroz 1 kg', 'cantidad': 4, 'precio': 1700, 'total': 6800}
{'Arroz': 6, 'Agua': 25}</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th></tr>
        <tr><td>dic["clave"]</td><td>Busca el valor de esa clave</td></tr>
        <tr><td>dic["clave"] = valor</td><td>Agrega o cambia un valor</td></tr>
        <tr><td>dic.get("clave", 0)</td><td>Busca y, si no existe, devuelve 0 (sin error)</td></tr>
      </table>
      <p><strong>Lista o diccionario:</strong> lista cuando importa el orden ("los productos"); diccionario cuando importa el nombre ("el precio del arroz").</p>
      <p>Por ejemplo, para sumar ventas por categoría se usa un diccionario: la categoría es la clave y el total es el valor (lo vas a ver en el módulo de informes).</p>` },
  ],
  practica: [
    "Escribí un programa que limpie 3 nombres mal cargados con .strip().title(). Anotá cómo quedaron.",
    "Armá una lista con 5 precios y mostrá la suma, el más caro y el más barato. Anotá los tres números.",
    "Armá un diccionario de stock con 3 productos, restá una venta y mostralo. Anotá el stock final.",
  ],
  recursos: [
    { t: "El tutorial oficial de Python, en español", url: "https://docs.python.org/es/3/tutorial/index.html" },
    { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" },
  ],
  quiz: [
    { q: "Si un nombre está cargado como \"  ana gómez  \", ¿qué usás para dejarlo \"Ana Gómez\"?", opciones: [".upper()",".append()",".strip().title()","len()"], correcta: 2, explicacion: ".strip saca espacios y .title pone mayúsculas. .upper tienta, pero pone todo en mayúscula." },
    { q: "Si querés meter el valor de una variable dentro de un texto, ¿qué usás?", opciones: ["Un f-string: f\"...{variable}...\"","Un comentario","Una lista","Comillas sin f"], correcta: 0, explicacion: "La f hace que se reemplace la variable. Sin la f tienta, pero se muestran las llaves tal cual." },
    { q: "Si querés cambiar los espacios de un nombre de archivo por guiones bajos, ¿qué usás?", opciones: [".strip()",".title()","len()",".replace(\" \", \"_\")"], correcta: 3, explicacion: "replace cambia una cosa por otra. .strip tienta, pero solo saca los espacios de los costados." },
    { q: "Si querés guardar varios productos en orden, ¿qué usás?", opciones: ["Una sola variable de texto","Una lista, entre corchetes","Un comentario","Un print"], correcta: 1, explicacion: "La lista guarda varios en orden. Un texto tienta, pero queda todo junto sin separar." },
    { q: "Si querés agregar un producto al final de la lista, ¿qué usás?", opciones: [".replace()",".strip()",".append()","sum()"], correcta: 2, explicacion: "append agrega al final. replace tienta, pero cambia texto." },
    { q: "Si querés saber cuántos elementos tiene una lista, ¿qué usás?", opciones: ["len(lista)","sum(lista)","max(lista)","lista[0]"], correcta: 0, explicacion: "len cuenta. sum tienta, pero suma los valores." },
    { q: "Si querés el primer elemento de una lista, ¿qué escribís?", opciones: ["lista[1]","lista[primero]","lista.first","lista[0]"], correcta: 3, explicacion: "En Python se cuenta desde 0. lista[1] tienta, pero es el segundo." },
    { q: "Si querés el precio más caro de una lista, ¿qué usás?", opciones: ["min(precios)","max(precios)","len(precios)","precios[0]"], correcta: 1, explicacion: "max da el mayor. precios[0] tienta, pero es solo el primero." },
    { q: "Si querés guardar datos con nombre, como \"producto\" y \"precio\", ¿qué usás?", opciones: ["Una lista","Un número","Un diccionario","Un comentario"], correcta: 2, explicacion: "El diccionario guarda clave y valor. La lista tienta, pero no tiene nombres." },
    { q: "Si venta = {\"cantidad\": 4, \"precio\": 1700}, ¿cómo calculás el total?", opciones: ["venta[\"cantidad\"] * venta[\"precio\"]","venta * 2","venta[0] * venta[1]","sum(venta)"], correcta: 0, explicacion: "Se busca por clave. venta[0] tienta por las listas, pero el diccionario usa nombres." },
    { q: "Si buscás una clave que puede no existir y no querés un error, ¿qué usás?", opciones: ["dic[\"clave\"]","dic[0]","len(dic)","dic.get(\"clave\", 0)"], correcta: 3, explicacion: "get devuelve 0 si no existe. dic[\"clave\"] tienta, pero da error si falta." },
    { q: "Si querés \"el precio del arroz\", ¿lista o diccionario?", opciones: ["Lista: importa el orden","Diccionario: importa el nombre","Un número suelto","Ninguno"], correcta: 1, explicacion: "Buscás por nombre. La lista tienta, pero tendrías que recordar en qué lugar estaba." },
  ],
},
{
  id: "logica",
  icono: "🔁",
  titulo: "Decisiones, bucles y funciones",
  nivel: "Intermedio",
  objetivos: [
    "Tomar decisiones con if, elif y else",
    "Repetir una tarea para cada elemento con for",
    "Agrupar pasos en una función reutilizable",
  ],
  lecciones: [
    { titulo: "If: decidir", video: {"id":"w53HiWSZnzU","t":"Control de flujo en Python: if, else, for y más · BitBoss (10:28)"}, html: `
      <p class="idea">Con <strong>if</strong> el programa decide qué hacer según una condición. Lo que va adentro se escribe con sangría (4 espacios), y así Python sabe qué depende del if.</p>
      <pre><code>stock = 3
if stock == 0:
    print("Sin stock")
elif stock &lt; 5:
    print("Pedir más: quedan", stock)
else:
    print("Stock suficiente")</code></pre>
      <pre><code>Salida:
Pedir más: quedan 3</code></pre>
      <table>
        <tr><th>Comparación</th><th>Quiere decir</th></tr>
        <tr><td>==</td><td>Es igual a (dos signos igual)</td></tr>
        <tr><td>!=</td><td>Es distinto de</td></tr>
        <tr><td>&lt; y &gt;</td><td>Menor y mayor</td></tr>
        <tr><td>&lt;= y &gt;=</td><td>Menor o igual, mayor o igual</td></tr>
      </table>
      <p><strong>elif</strong> es "si no, si...": prueba otra condición. <strong>else</strong> es "en cualquier otro caso".</p>
      <p>Por ejemplo, un programa que revisa el stock de 50 productos puede avisar solo los que tienen menos de 5, sin que tengas que mirarlos uno por uno.</p>` },
    { titulo: "For: repetir para cada uno", html: `
      <p class="idea">Con <strong>for</strong> se repite una tarea para cada elemento de una lista. Es el corazón de la automatización: lo que harías 200 veces a mano, el for lo hace solo.</p>
      <pre><code>archivos = ["Factura Enero.PDF", "Factura Febrero.PDF", "Factura Marzo.PDF"]
for nombre in archivos:
    nuevo = nombre.lower().replace(" ", "_")
    print(nombre, "->", nuevo)

total = 0
for precio in [1700, 900, 1200]:
    total = total + precio
print("Total:", total)</code></pre>
      <pre><code>Salida:
Factura Enero.PDF -&gt; factura_enero.pdf
Factura Febrero.PDF -&gt; factura_febrero.pdf
Factura Marzo.PDF -&gt; factura_marzo.pdf
Total: 3800</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué es</th></tr>
        <tr><td>for nombre in archivos:</td><td>Para cada elemento de la lista, llamalo nombre</td></tr>
        <tr><td>Las líneas con sangría</td><td>Se repiten para cada elemento</td></tr>
        <tr><td>Lo que va sin sangría después</td><td>Se hace una sola vez, al terminar</td></tr>
      </table>
      <p><strong>range(5)</strong> genera los números 0, 1, 2, 3 y 4: sirve para repetir algo una cantidad de veces.</p>
      <p>Por ejemplo, el mismo for que muestra 3 nombres nuevos funciona igual con 300 archivos: solo cambia la lista.</p>` },
    { titulo: "Funciones y errores", video: {"id":"9k91jETchkI","t":"Aprendé funciones en Python: def, return y argumentos · BitBoss (16:13)"}, html: `
      <p class="idea">Una <strong>función</strong> agrupa pasos con un nombre, para usarlos muchas veces. Se crea con def y puede devolver un resultado con return.</p>
      <pre><code>def precio_con_iva(precio):
    return round(precio * 1.21)

print(precio_con_iva(1000))
print(precio_con_iva(2500))

def limpiar_nombre(texto):
    return texto.strip().title()

for n in ["  ana  ", "LUIS pérez"]:
    print(limpiar_nombre(n))</code></pre>
      <pre><code>Salida:
1210
3025
Ana
Luis Pérez</code></pre>
      <p><strong>Los errores son parte de programar.</strong> Cuando algo falla, Python muestra el tipo de error en la última línea. Leerlo es el primer paso para arreglarlo.</p>
      <pre><code>cantidad = int("12a")
print(cantidad)</code></pre>
      <pre><code>Error:
ValueError: invalid literal for int() with base 10: '12a'</code></pre>
      <table>
        <tr><th>Error común</th><th>Qué suele ser</th></tr>
        <tr><td>NameError</td><td>Una variable escrita de otra forma o que no existe</td></tr>
        <tr><td>SyntaxError</td><td>Falta una comilla, un paréntesis o los dos puntos</td></tr>
        <tr><td>IndentationError</td><td>La sangría está mal</td></tr>
        <tr><td>ValueError</td><td>Un dato que no se puede convertir, como "12a" a número</td></tr>
      </table>
      <p>Por ejemplo, el ValueError de arriba avisa que "12a" no es un número: en una planilla, eso suele ser un dato mal cargado.</p>` },
  ],
  practica: [
    "Escribí un programa con if, elif y else que diga si una temperatura es fría (menos de 15), templada o calurosa (más de 28). Probalo con 3 valores y anotá los resultados.",
    "Usá un for para pasar a minúscula y sin espacios 4 nombres de archivo. Anotá cómo quedaron.",
    "Escribí una función que calcule un descuento del 10% y probala con 3 precios. Anotá los resultados.",
  ],
  recursos: [
    { t: "El tutorial oficial de Python, en español", url: "https://docs.python.org/es/3/tutorial/index.html" },
    { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" },
  ],
  quiz: [
    { q: "Si querés que el programa haga algo solo cuando el stock es 0, ¿qué usás?", opciones: ["if stock = 0:","for stock in 0:","if stock == 0:","print(stock == 0) solamente"], correcta: 2, explicacion: "Para comparar se usan dos signos igual. Uno solo tienta, pero eso es guardar y da error." },
    { q: "Si stock vale 3, ¿qué muestra el programa de la lección?", opciones: ["\"Pedir más: quedan 3\"","\"Sin stock\"","\"Stock suficiente\"","Nada"], correcta: 0, explicacion: "3 no es 0, pero es menor que 5: entra al elif. \"Stock suficiente\" tienta, pero ese es el else." },
    { q: "Si querés decir \"en cualquier otro caso\", ¿qué usás?", opciones: ["elif","for","def","else"], correcta: 3, explicacion: "else cubre todo lo demás. elif tienta, pero ese prueba otra condición." },
    { q: "Si las líneas dentro de un if no tienen sangría, ¿qué pasa?", opciones: ["Funciona igual","Python da un error de sangría o no sabe qué depende del if","Se ejecuta dos veces","Se borra"], correcta: 1, explicacion: "La sangría marca qué está adentro. \"Funciona igual\" tienta, pero en Python es obligatoria." },
    { q: "Si querés hacer lo mismo con cada archivo de una lista, ¿qué usás?", opciones: ["if","print solo","for","def solo"], correcta: 2, explicacion: "for repite para cada elemento. if tienta, pero decide, no repite." },
    { q: "Si sumás 1700, 900 y 1200 con el for de la lección, ¿qué total da?", opciones: ["3800","1700","17009001200","3"], correcta: 0, explicacion: "1700 + 900 + 1200 = 3800. El número pegado tienta si pensás en textos, pero son números." },
    { q: "Si una línea va sin sangría después del for, ¿cuántas veces se hace?", opciones: ["Una vez por elemento","Nunca","Dos veces","Una sola vez, al terminar el for"], correcta: 3, explicacion: "Sin sangría, está afuera del bucle. \"Una vez por elemento\" tienta, pero eso es lo de adentro." },
    { q: "Si querés repetir algo 5 veces, ¿qué podés usar?", opciones: ["if 5:","for i in range(5):","print(5)","def 5():"], correcta: 1, explicacion: "range(5) da 5 números. if 5 tienta, pero no repite." },
    { q: "Si usás varias veces el mismo cálculo, ¿qué conviene?", opciones: ["Copiarlo en cada lugar","Escribirlo en un comentario","Guardarlo en una función con def","Nada"], correcta: 2, explicacion: "La función se escribe una vez y se usa muchas. Copiarlo tienta, pero si cambia, hay que cambiarlo en todos lados." },
    { q: "Si precio_con_iva(1000) usa 21% de IVA, ¿qué devuelve?", opciones: ["1210","1021","210","1000"], correcta: 0, explicacion: "1000 × 1,21 = 1210. El 210 tienta, pero ese es solo el IVA." },
    { q: "Si aparece \"ValueError: invalid literal for int()\", ¿qué suele pasar?", opciones: ["Falta instalar Python","La compu está rota","Falta un comentario","Un dato que no se puede convertir a número, como \"12a\""], correcta: 3, explicacion: "El error dice qué dato falló. \"La compu está rota\" tienta por el susto, pero es un dato mal cargado." },
    { q: "Si aparece NameError, ¿qué revisás primero?", opciones: ["El volumen","Que la variable esté bien escrita y exista","La conexión a internet","El color de la letra"], correcta: 1, explicacion: "NameError es un nombre que Python no conoce. Internet tienta, pero no tiene que ver." },
  ],
},
{
  id: "archivos",
  icono: "📄",
  titulo: "Leer y escribir archivos",
  nivel: "Intermedio",
  objetivos: [
    "Escribir y leer archivos de texto",
    "Leer una planilla CSV fila por fila",
    "Filtrar filas que cumplen una condición",
  ],
  lecciones: [
    { titulo: "Archivos de texto", html: `
      <p class="idea">Python puede crear, leer y modificar archivos. Se abren con <strong>with open</strong>, que cierra el archivo solo al terminar.</p>
      <pre><code>with open("notas.txt", "w", encoding="utf-8") as f:
    f.write("Comprar cajas\\n")
    f.write("Llamar al proveedor\\n")

with open("notas.txt", "a", encoding="utf-8") as f:
    f.write("Pagar la luz\\n")

with open("notas.txt", encoding="utf-8") as f:
    for numero, linea in enumerate(f, start=1):
        print(numero, linea.strip())</code></pre>
      <pre><code>Salida:
1 Comprar cajas
2 Llamar al proveedor
3 Pagar la luz</code></pre>
      <table>
        <tr><th>Modo</th><th>Qué hace</th></tr>
        <tr><td>"w" (write)</td><td>Escribe desde cero: si el archivo existía, lo reemplaza</td></tr>
        <tr><td>"a" (append)</td><td>Agrega al final, sin borrar lo que había</td></tr>
        <tr><td>Sin modo (o "r")</td><td>Lee</td></tr>
      </table>
      <p class="aviso">Cuidado con "w": borra el contenido anterior del archivo. Mientras aprendés, trabajá con copias, nunca con tus únicos originales.</p>
      <p><strong>\\n</strong> es el salto de línea. <strong>encoding="utf-8"</strong> hace que las tildes y la ñ se lean bien.</p>
      <p>Por ejemplo, un programa que agrega con "a" una línea con la fecha cada vez que corre arma un registro sin perder lo anterior.</p>` },
    { titulo: "Leer una planilla CSV", video: {"id":"wmNsecoZ_Go","t":"Lectura de archivos CSV · ProCode TV (7:42)"}, html: `
      <p class="idea">Un <strong>CSV</strong> es una planilla guardada como texto, con las columnas separadas por comas. Casi cualquier planilla se puede exportar como CSV, y Python la lee con el módulo csv.</p>
      <pre><code>import csv
with open("ventas-limpias.csv", encoding="utf-8-sig") as f:
    filas = list(csv.DictReader(f))
print(len(filas), "ventas")
print(filas[0]["producto"], filas[0]["total"])</code></pre>
      <pre><code>Salida:
947 ventas
Arroz 1 kg 6800</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>import csv</td><td>Trae las herramientas para planillas</td></tr>
        <tr><td>csv.DictReader</td><td>Lee cada fila como un diccionario: la clave es el nombre de la columna</td></tr>
        <tr><td>encoding="utf-8-sig"</td><td>Lee bien las planillas exportadas con una marca invisible al principio</td></tr>
      </table>
      <p><strong>Todo lo que viene del CSV es texto:</strong> para hacer cuentas, convertí con int() o float().</p>
      <p>Por ejemplo, la planilla de práctica del curso tiene ventas de un comercio con 3 sucursales: fecha, producto, cantidad, total y medio de pago.</p>` },
    { titulo: "Filtrar filas", html: `
      <p class="idea">Filtrar es quedarte solo con las filas que cumplen una condición. Se combina un for con un if.</p>
      <pre><code>import csv
cantidad_qr = 0
total_qr = 0
with open("ventas-limpias.csv", encoding="utf-8-sig") as f:
    for fila in csv.DictReader(f):
        if fila["medio_pago"] == "QR":
            cantidad_qr = cantidad_qr + 1
            total_qr = total_qr + int(fila["total"])
print("Ventas con QR:", cantidad_qr)
print("Total con QR:", total_qr)</code></pre>
      <pre><code>Salida:
Ventas con QR: 294
Total con QR: 2004850</code></pre>
      <table>
        <tr><th>Para filtrar por...</th><th>Condición</th></tr>
        <tr><td>Un valor exacto</td><td>fila["sucursal"] == "Norte"</td></tr>
        <tr><td>Un número</td><td>int(fila["total"]) &gt;= 10000</td></tr>
        <tr><td>Un mes</td><td>fila["fecha"].startswith("2025-03")</td></tr>
        <tr><td>Dos condiciones</td><td>... and ...</td></tr>
      </table>
      <p>Por ejemplo, cambiando solo la condición del if, el mismo programa cuenta las ventas en efectivo, las de una sucursal o las de un mes.</p>` },
  ],
  practica: [
    "Escribí un programa que cree un archivo con 3 tareas y después agregue una cuarta con \"a\". Anotá cómo quedó el archivo.",
    "Leé la planilla de práctica y mostrá cuántas ventas hay y el producto de la segunda fila. Anotá los resultados.",
    "Filtrá las ventas de la sucursal Norte y mostrá cuántas son y el total. Anotá los dos números.",
  ],
  recursos: [
    { t: "Documentación de Python: el módulo csv", url: "https://docs.python.org/es/3/library/csv.html" },
    { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" },
  ],
  quiz: [
    { q: "Si abrís un archivo con with open(...), ¿qué ventaja tiene?", opciones: ["Lo borra al terminar","Lo imprime en papel","Lo cierra solo al terminar","Lo hace más grande"], correcta: 2, explicacion: "with cierra el archivo solo. \"Lo borra\" tienta por el susto, pero no." },
    { q: "Si abrís un archivo existente con \"w\", ¿qué pasa con lo que tenía?", opciones: ["Se reemplaza: se pierde lo anterior","Se agrega al final","Se duplica","No pasa nada"], correcta: 0, explicacion: "\"w\" escribe desde cero. \"Se agrega al final\" tienta, pero eso es \"a\"." },
    { q: "Si querés agregar una línea sin borrar lo que había, ¿qué modo usás?", opciones: ["\"w\"","\"r\"","\"x\"","\"a\""], correcta: 3, explicacion: "\"a\" agrega al final. \"w\" tienta, pero borra." },
    { q: "Si estás aprendiendo a modificar archivos, ¿con qué trabajás?", opciones: ["Con los originales directamente","Con copias, nunca con tus únicos originales","Con archivos de otras personas","Da igual"], correcta: 1, explicacion: "Un error puede borrar datos. Los originales tientan por rápidos, pero si algo sale mal, no hay vuelta atrás." },
    { q: "Si las tildes y la ñ salen raras al leer un archivo, ¿qué agregás?", opciones: ["\"w\"","print()","encoding=\"utf-8\"","Nada"], correcta: 2, explicacion: "El encoding dice cómo leer los caracteres. \"w\" tienta, pero borra el archivo." },
    { q: "Si querés escribir un salto de línea, ¿qué ponés?", opciones: ["\\n","/n","enter","salto"], correcta: 0, explicacion: "\\n es el salto de línea. /n tienta por parecido, pero es otra barra." },
    { q: "Si una planilla está guardada como texto con columnas separadas por comas, ¿qué es?", opciones: ["Un PDF","Una foto","Un programa","Un CSV"], correcta: 3, explicacion: "CSV es planilla como texto. PDF tienta porque es un documento, pero no se lee igual." },
    { q: "Si leés un CSV con csv.DictReader, ¿cómo llega cada fila?", opciones: ["Como un número","Como un diccionario: la clave es el nombre de la columna","Como una foto","Como un comentario"], correcta: 1, explicacion: "Cada fila es un diccionario. \"Un número\" tienta, pero tiene muchas columnas." },
    { q: "Si querés sumar la columna total de un CSV, ¿qué hacés antes?", opciones: ["Nada, ya son números","Lo pasás a mayúscula","Convertís cada valor a número con int()","Lo borrás"], correcta: 2, explicacion: "Del CSV todo llega como texto. \"Ya son números\" tienta, pero se pegarían como texto." },
    { q: "Si querés contar solo las ventas con QR, ¿qué combinás?", opciones: ["Un for con un if","Solo un print","Solo una función vacía","Un comentario"], correcta: 0, explicacion: "El for recorre y el if filtra. Solo print tienta, pero no recorre las filas." },
    { q: "Si querés las ventas de marzo de 2025, ¿qué condición usás?", opciones: ["fila[\"fecha\"] == \"marzo\"","fila[\"mes\"] == 3","fila == \"2025-03\"","fila[\"fecha\"].startswith(\"2025-03\")"], correcta: 3, explicacion: "La fecha empieza con año y mes. \"marzo\" tienta, pero la columna tiene números." },
    { q: "Si querés ventas de Norte de más de 10000, ¿cómo unís las dos condiciones?", opciones: ["Con or","Con and","Con una coma","Con un print"], correcta: 1, explicacion: "and pide que se cumplan las dos. or tienta, pero alcanza con una." },
  ],
},
{
  id: "carpetas",
  icono: "🗂️",
  titulo: "Ordenar carpetas y renombrar archivos",
  nivel: "Intermedio",
  objetivos: [
    "Crear carpetas y listar archivos con pathlib",
    "Renombrar muchos archivos de una vez, probando antes",
    "Mover archivos a subcarpetas según su tipo",
  ],
  lecciones: [
    { titulo: "Carpetas y archivos con pathlib", html: `
      <p class="idea">El módulo <strong>pathlib</strong> trabaja con carpetas y archivos como objetos: un <strong>Path</strong> es una ruta, y se pueden unir con la barra /.</p>
      <pre><code>from pathlib import Path
carpeta = Path("prueba")
carpeta.mkdir(exist_ok=True)
for nombre in ["Foto 1.JPG", "Foto 2.JPG", "informe.pdf", "lista.txt"]:
    (carpeta / nombre).write_text("demo", encoding="utf-8")

for archivo in sorted(carpeta.iterdir()):
    print(archivo.name, archivo.suffix)</code></pre>
      <pre><code>Salida:
Foto 1.JPG .JPG
Foto 2.JPG .JPG
informe.pdf .pdf
lista.txt .txt</code></pre>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th></tr>
        <tr><td>Path("prueba")</td><td>Una ruta a la carpeta prueba</td></tr>
        <tr><td>.mkdir(exist_ok=True)</td><td>Crea la carpeta, sin error si ya existe</td></tr>
        <tr><td>carpeta / nombre</td><td>Une la carpeta con el nombre del archivo</td></tr>
        <tr><td>.iterdir()</td><td>Recorre lo que hay adentro</td></tr>
        <tr><td>.name y .suffix</td><td>El nombre y la extensión (.pdf, .JPG)</td></tr>
      </table>
      <p><strong>Ruta</strong> es la dirección de un archivo dentro de las carpetas. Si el programa está en la misma carpeta que los archivos, alcanza con el nombre.</p>
      <p>Por ejemplo, con sorted(carpeta.iterdir()) ves los archivos siempre en el mismo orden, alfabético.</p>` },
    { titulo: "Renombrar en lote", video: {"id":"Th4cgpqNG-w","t":"Renombrá archivos y carpetas con pathlib · Código Espinoza (9:17)"}, html: `
      <p class="idea">Renombrar archivos uno por uno es de las tareas más aburridas. Con un for y <strong>.rename</strong> se renombran todos juntos. Lo importante es <strong>probar antes</strong>.</p>
      <pre><code>from pathlib import Path
carpeta = Path("fotos")
carpeta.mkdir(exist_ok=True)
for nombre in ["IMG 001.JPG", "IMG 002.JPG", "IMG 003.JPG"]:
    (carpeta / nombre).write_text("demo", encoding="utf-8")

probar = False   # con True solo muestra lo que haría, sin cambiar nada
for numero, archivo in enumerate(sorted(carpeta.glob("*.JPG")), start=1):
    nuevo = carpeta / f"vacaciones_{numero:02d}.jpg"
    print(archivo.name, "->", nuevo.name)
    if not probar:
        archivo.rename(nuevo)

print(sorted(a.name for a in carpeta.iterdir()))</code></pre>
      <pre><code>Salida:
IMG 001.JPG -&gt; vacaciones_01.jpg
IMG 002.JPG -&gt; vacaciones_02.jpg
IMG 003.JPG -&gt; vacaciones_03.jpg
['vacaciones_01.jpg', 'vacaciones_02.jpg', 'vacaciones_03.jpg']</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>.glob("*.JPG")</td><td>Busca los archivos que terminan en .JPG</td></tr>
        <tr><td>enumerate(..., start=1)</td><td>Numera desde 1</td></tr>
        <tr><td>{numero:02d}</td><td>Escribe el número con 2 cifras: 01, 02, 03</td></tr>
        <tr><td>probar = True</td><td>Modo de prueba: muestra los cambios sin hacerlos</td></tr>
      </table>
      <p class="aviso">Antes de renombrar o mover archivos de verdad, corré el programa con probar = True, revisá lo que muestra y trabajá sobre una copia de la carpeta.</p>
      <p>Por ejemplo, con 200 fotos, el modo de prueba te deja ver los 200 nombres nuevos antes de tocar un solo archivo.</p>` },
    { titulo: "Ordenar por tipo", html: `
      <p class="idea">La carpeta de descargas suele ser un lío. Un programa puede mover cada archivo a una subcarpeta según su extensión.</p>
      <pre><code>from pathlib import Path
carpeta = Path("descargas")
carpeta.mkdir(exist_ok=True)
for nombre in ["a.pdf", "b.jpg", "c.pdf", "d.xlsx", "e.jpg"]:
    (carpeta / nombre).write_text("demo", encoding="utf-8")

tipos = {".pdf": "Documentos", ".jpg": "Fotos", ".xlsx": "Planillas"}
for archivo in sorted(carpeta.iterdir()):
    if archivo.is_file() and archivo.suffix in tipos:
        destino = carpeta / tipos[archivo.suffix]
        destino.mkdir(exist_ok=True)
        archivo.rename(destino / archivo.name)

for sub in sorted(carpeta.iterdir()):
    print(sub.name, sorted(a.name for a in sub.iterdir()))</code></pre>
      <pre><code>Salida:
Documentos ['a.pdf', 'c.pdf']
Fotos ['b.jpg', 'e.jpg']
Planillas ['d.xlsx']</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>tipos</td><td>Un diccionario: extensión → nombre de la carpeta</td></tr>
        <tr><td>.is_file()</td><td>Se fija que sea un archivo y no una carpeta</td></tr>
        <tr><td>archivo.suffix in tipos</td><td>Solo mueve las extensiones que conoce</td></tr>
      </table>
      <p><strong>Lo que no está en el diccionario no se toca:</strong> así, un archivo raro queda donde estaba en lugar de perderse.</p>
      <p>Por ejemplo, sumando ".docx": "Documentos" al diccionario, el mismo programa también ordena los archivos de Word.</p>` },
  ],
  practica: [
    "Corré el código de pathlib en el laboratorio y agregá 2 archivos más a la lista. Anotá qué muestra.",
    "Corré el programa de renombrar con probar = True y después con False. Anotá la diferencia entre las dos salidas.",
    "Agregá la extensión .docx al diccionario de tipos y un archivo .docx a la lista. Anotá en qué carpeta terminó.",
  ],
  recursos: [
    { t: "Documentación de Python: pathlib, para trabajar con carpetas y archivos", url: "https://docs.python.org/es/3/library/pathlib.html" },
    { t: "Automate the Boring Stuff with Python, libro gratis (en inglés)", url: "https://automatetheboringstuff.com/" },
  ],
  quiz: [
    { q: "Si querés trabajar con carpetas y archivos en Python, ¿qué módulo usás?", opciones: ["csv","math","pathlib","print"], correcta: 2, explicacion: "pathlib trabaja con rutas. csv tienta porque también usa archivos, pero es para planillas." },
    { q: "Si querés crear una carpeta sin error cuando ya existe, ¿qué escribís?", opciones: [".mkdir(exist_ok=True)",".mkdir()",".rename()",".iterdir()"], correcta: 0, explicacion: "exist_ok evita el error. .mkdir() solo tienta, pero falla si ya existe." },
    { q: "Si tenés carpeta = Path(\"prueba\") y querés el archivo lista.txt adentro, ¿qué escribís?", opciones: ["carpeta + lista","lista.txt / carpeta","carpeta.lista","carpeta / \"lista.txt\""], correcta: 3, explicacion: "La barra une rutas. \"carpeta + lista\" tienta, pero no es la forma de pathlib." },
    { q: "Si querés la extensión de un archivo, ¿qué usás?", opciones: [".name",".suffix",".mkdir",".glob"], correcta: 1, explicacion: ".suffix da la extensión. .name tienta, pero da el nombre completo." },
    { q: "Si querés ver los archivos siempre en el mismo orden, ¿qué usás?", opciones: ["carpeta.iterdir() solo","print(carpeta)","sorted(carpeta.iterdir())","carpeta.mkdir()"], correcta: 2, explicacion: "sorted ordena alfabéticamente. Sin sorted tienta, pero el orden puede variar." },
    { q: "Si querés solo los archivos que terminan en .JPG, ¿qué usás?", opciones: ["carpeta.glob(\"*.JPG\")","carpeta.rename(\"*.JPG\")","carpeta.mkdir(\"*.JPG\")","len(\"*.JPG\")"], correcta: 0, explicacion: "glob busca por patrón. rename tienta, pero cambia nombres." },
    { q: "Si querés numerar 01, 02, 03 en un nombre, ¿qué formato usás?", opciones: ["{numero}","{numero:2}","numero + \"0\"","{numero:02d}"], correcta: 3, explicacion: ":02d rellena con ceros a 2 cifras. {numero} tienta, pero da 1, 2, 3." },
    { q: "Si vas a renombrar 200 fotos de verdad, ¿qué hacés antes?", opciones: ["Lo corrés directo en los originales","Corrés con probar = True, revisás y trabajás sobre una copia","Nada","Borrás las fotos"], correcta: 1, explicacion: "Probar evita desastres. Directo tienta por rápido, pero un error renombra todo mal." },
    { q: "Si el programa tiene probar = True, ¿qué hace?", opciones: ["Renombra todo","Borra todo","Muestra los cambios sin hacerlos","No muestra nada"], correcta: 2, explicacion: "Es el modo de prueba. \"Renombra todo\" tienta, pero eso pasa con False." },
    { q: "Si querés mover archivos según su extensión, ¿qué estructura conviene?", opciones: ["Un diccionario de extensión a carpeta","Una sola variable","Un comentario","Un print por archivo"], correcta: 0, explicacion: "El diccionario dice adónde va cada tipo. Una variable tienta, pero no alcanza para varios tipos." },
    { q: "Si un archivo tiene una extensión que no está en el diccionario, ¿qué hace el programa?", opciones: ["Lo borra","Lo mueve a cualquier lado","Da error siempre","Lo deja donde estaba"], correcta: 3, explicacion: "Solo mueve lo que conoce. \"Lo borra\" tienta por el susto, pero no lo toca." },
    { q: "Si querés que el programa también ordene archivos de Word, ¿qué cambiás?", opciones: ["Reescribís todo el programa","Sumás \".docx\": \"Documentos\" al diccionario","Borrás los PDF","Nada, no se puede"], correcta: 1, explicacion: "Solo se agrega una entrada. Reescribir todo tienta, pero no hace falta." },
  ],
},
{
  id: "informes",
  icono: "📊",
  titulo: "Informes automáticos",
  nivel: "Avanzado",
  objetivos: [
    "Sumar una planilla por categorías con un diccionario",
    "Guardar el resultado en un nuevo CSV",
    "Armar un informe de texto con fecha y números con separador de miles",
  ],
  lecciones: [
    { titulo: "Sumar por categoría", html: `
      <p class="idea">Una de las automatizaciones más útiles es <strong>resumir</strong> una planilla: sumar las ventas por categoría, por sucursal o por mes. Se hace con un diccionario y .get.</p>
      <pre><code>import csv
totales = {}
with open("ventas-limpias.csv", encoding="utf-8-sig") as f:
    for fila in csv.DictReader(f):
        cat = fila["categoria"]
        totales[cat] = totales.get(cat, 0) + int(fila["total"])

for cat in sorted(totales):
    print(f"{cat}: $ {totales[cat]:,}".replace(",", "."))</code></pre>
      <pre><code>Salida:
Almacén: $ 1.960.100
Bebidas: $ 884.550
Frescos: $ 2.679.100
Limpieza: $ 746.600</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>totales.get(cat, 0)</td><td>Lo que ya se sumó de esa categoría, o 0 si es la primera vez</td></tr>
        <tr><td>{numero:,}</td><td>Escribe el número con separador de miles (con coma)</td></tr>
        <tr><td>.replace(",", ".")</td><td>Cambia la coma por punto, como se escribe en Argentina</td></tr>
      </table>
      <p><strong>Es lo mismo que una tabla dinámica</strong> de una planilla de cálculo, pero se repite sola cada vez que cambian los datos.</p>
      <p>Por ejemplo, cambiando "categoria" por "sucursal" en una sola línea, el mismo programa suma por sucursal.</p>` },
    { titulo: "Guardar un CSV nuevo", html: `
      <p class="idea">El resultado de un resumen se puede guardar como un CSV nuevo, que después se abre en cualquier planilla. Se escribe con <strong>csv.writer</strong>.</p>
      <pre><code>import csv
por_sucursal = {}
with open("ventas-limpias.csv", encoding="utf-8-sig") as f:
    for fila in csv.DictReader(f):
        s = fila["sucursal"]
        por_sucursal[s] = por_sucursal.get(s, 0) + int(fila["total"])

with open("resumen.csv", "w", newline="", encoding="utf-8") as f:
    escritor = csv.writer(f)
    escritor.writerow(["sucursal", "total"])
    for s in sorted(por_sucursal):
        escritor.writerow([s, por_sucursal[s]])

with open("resumen.csv", encoding="utf-8") as f:
    print(f.read())</code></pre>
      <pre><code>Salida:
sucursal,total
Centro,2891950
Norte,1670050
Sur,1708350</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>newline=""</td><td>Evita líneas en blanco de más en algunas computadoras</td></tr>
        <tr><td>writerow([...])</td><td>Escribe una fila, con una lista de valores</td></tr>
        <tr><td>La primera fila</td><td>Los nombres de las columnas (el encabezado)</td></tr>
      </table>
      <p><strong>Escribí el resumen en un archivo nuevo,</strong> nunca encima de la planilla original.</p>
      <p>Por ejemplo, el resumen.csv se puede mandar por mail o abrir en una planilla para hacer un gráfico, sin tocar los datos originales.</p>` },
    { titulo: "Un informe de texto", html: `
      <p class="idea">Con f-strings se arma un informe de texto que se puede guardar o mandar. Si lo corrés cada semana con datos nuevos, el informe se escribe solo.</p>
      <pre><code>import csv
from datetime import date

ventas = 0
total = 0
por_medio = {}
with open("ventas-limpias.csv", encoding="utf-8-sig") as f:
    for fila in csv.DictReader(f):
        ventas = ventas + 1
        total = total + int(fila["total"])
        medio = fila["medio_pago"]
        por_medio[medio] = por_medio.get(medio, 0) + 1

fecha = date(2025, 7, 1)   # en tu compu podés usar date.today()
medio_top = max(por_medio, key=por_medio.get)
lineas = [
    f"Informe de ventas al {fecha.strftime('%d/%m/%Y')}",
    f"Ventas: {ventas}",
    f"Total: $ {total:,}".replace(",", "."),
    f"Ticket promedio: $ {round(total / ventas):,}".replace(",", "."),
    f"Medio de pago más usado: {medio_top}",
]
informe = "\\n".join(lineas)
with open("informe.txt", "w", encoding="utf-8") as f:
    f.write(informe)
print(informe)</code></pre>
      <pre><code>Salida:
Informe de ventas al 01/07/2025
Ventas: 947
Total: $ 6.270.350
Ticket promedio: $ 6.621
Medio de pago más usado: QR</code></pre>
      <table>
        <tr><th>Parte</th><th>Qué hace</th></tr>
        <tr><td>date(2025, 7, 1)</td><td>Una fecha fija; date.today() da la de hoy</td></tr>
        <tr><td>strftime('%d/%m/%Y')</td><td>Escribe la fecha como día/mes/año</td></tr>
        <tr><td>max(dic, key=dic.get)</td><td>La clave con el valor más alto</td></tr>
        <tr><td>"\\n".join(lista)</td><td>Une las líneas con saltos de línea</td></tr>
      </table>
      <p>Por ejemplo, este mismo programa, corrido cada lunes con la planilla de la semana, arma el informe que antes llevaba una hora.</p>` },
  ],
  practica: [
    "Cambiá el programa de totales para sumar por sucursal y anotá el total de cada una.",
    "Generá un resumen.csv por medio de pago y abrilo en una planilla. Anotá cuántas filas tiene.",
    "Agregá al informe de texto una línea con la sucursal que más vendió. Anotá cuál es.",
  ],
  recursos: [
    { t: "Documentación de Python: el módulo csv", url: "https://docs.python.org/es/3/library/csv.html" },
    { t: "Documentación de Python: fechas con datetime", url: "https://docs.python.org/es/3/library/datetime.html" },
    { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" },
  ],
  quiz: [
    { q: "Si querés sumar ventas por categoría, ¿qué estructura usás?", opciones: ["Una sola variable","Una lista de textos","Un diccionario: categoría como clave y total como valor","Un comentario"], correcta: 2, explicacion: "Cada categoría necesita su suma. Una variable tienta, pero suma todo junto." },
    { q: "Si la categoría aparece por primera vez, ¿qué devuelve totales.get(cat, 0)?", opciones: ["0","Un error","Nada","El total de todas"], correcta: 0, explicacion: "get devuelve el valor por defecto. \"Un error\" tienta, pero eso pasa con totales[cat]." },
    { q: "Si querés escribir 1960100 como 1.960.100, ¿qué hacés?", opciones: ["print(numero) solo","round(numero)","numero / 1000","f\"{numero:,}\" y después .replace(\",\", \".\")"], correcta: 3, explicacion: "El formato pone comas y replace las cambia por puntos. round tienta, pero no agrega separadores." },
    { q: "Si querés sumar por sucursal en vez de por categoría, ¿qué cambiás?", opciones: ["Todo el programa","La columna: \"categoria\" por \"sucursal\"","El archivo de Python","Nada, no se puede"], correcta: 1, explicacion: "Solo cambia la columna. Todo el programa tienta, pero la lógica es la misma." },
    { q: "Si querés que el resumen se pueda abrir en una planilla, ¿cómo lo guardás?", opciones: ["Solo con print","Encima del original","Como un CSV nuevo con csv.writer","Como imagen"], correcta: 2, explicacion: "El CSV se abre en cualquier planilla. Encima del original tienta, pero perdés los datos." },
    { q: "Si al escribir un CSV aparecen líneas en blanco de más, ¿qué agregás?", opciones: ["newline=\"\" al abrir el archivo","Más print","encoding=\"ascii\"","Nada"], correcta: 0, explicacion: "newline=\"\" evita las líneas de más. encoding tienta, pero es para las tildes." },
    { q: "Si escribís la primera fila del CSV con los nombres de las columnas, ¿cómo se llama?", opciones: ["El pie","El total","El comentario","El encabezado"], correcta: 3, explicacion: "Es el encabezado. El total tienta, pero ese es un dato." },
    { q: "Si vas a guardar el resumen, ¿dónde lo escribís?", opciones: ["Encima de la original","En un archivo nuevo, nunca encima de la planilla original","En el mismo archivo de Python","En ningún lado"], correcta: 1, explicacion: "Así no perdés los datos. Encima tienta por ordenado, pero borra los originales." },
    { q: "Si querés la fecha de hoy en tu compu, ¿qué usás?", opciones: ["date(2025, 7, 1)","print(\"hoy\")","date.today()","today"], correcta: 2, explicacion: "today da la fecha actual. La fecha fija tienta porque está en el ejemplo, pero no cambia." },
    { q: "Si querés escribir una fecha como 01/07/2025, ¿qué usás?", opciones: ["strftime('%d/%m/%Y')","str(fecha) solo","fecha.upper()","round(fecha)"], correcta: 0, explicacion: "strftime da el formato. str tienta, pero da 2025-07-01." },
    { q: "Si querés el medio de pago más usado de un diccionario de conteos, ¿qué usás?", opciones: ["max(por_medio)","len(por_medio)","sum(por_medio)","max(por_medio, key=por_medio.get)"], correcta: 3, explicacion: "key=por_medio.get compara los valores. max(por_medio) tienta, pero compara los nombres alfabéticamente." },
    { q: "Si querés unir una lista de líneas en un solo texto, ¿qué usás?", opciones: ["sum(lineas)","\"\\n\".join(lineas)","len(lineas)","lineas.append()"], correcta: 1, explicacion: "join une con saltos de línea. sum tienta, pero no suma textos." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu automatización",
  nivel: "Avanzado",
  objetivos: [
    "Elegir una tarea real y automatizarla con Python",
    "Probarla con cuidado y evaluarla con una rúbrica",
    "Saber cómo hacer que corra sola",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es <strong>automatizar una tarea real</strong> tuya: ordenar una carpeta, renombrar archivos, resumir una planilla o armar un informe.</p>
      <table>
        <tr><th>Paso</th><th>Módulo</th></tr>
        <tr><td>Elegí una tarea repetitiva y medí cuánto tardás a mano</td><td>Tu primer programa</td></tr>
        <tr><td>Partila en pasos: qué lee, qué decide, qué repite, qué escribe</td><td>Decisiones, bucles y funciones</td></tr>
        <tr><td>Escribí el programa de a partes, probando cada una</td><td>Todos</td></tr>
        <tr><td>Usá modo de prueba y una copia de los archivos</td><td>Ordenar carpetas</td></tr>
        <tr><td>Guardá el resultado en un archivo nuevo</td><td>Informes automáticos</td></tr>
      </table>
      <pre><code>Plan de ejemplo: informe semanal
1. Leer ventas.csv (lo exporto los lunes).
2. Sumar por sucursal y por medio de pago.
3. Escribir resumen.csv e informe.txt.
4. A mano tardaba 60 minutos; con el programa, 1.</code></pre>
      <p><strong>Empezá chico:</strong> que funcione la parte más simple (leer el archivo) antes de sumar lo demás.</p>
      <p>Por ejemplo, si tu tarea es ordenar la carpeta de descargas, primero hacé que liste los archivos; después, que muestre adónde iría cada uno; recién al final, que los mueva.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu automatización.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Tarea</td><td>Real, repetitiva y con el tiempo a mano medido</td><td>Real, sin medir</td><td>No hay tarea clara</td></tr>
        <tr><td>Funciona</td><td>Corre sin errores y hace lo que tiene que hacer</td><td>Funciona con errores chicos</td><td>No corre</td></tr>
        <tr><td>Claridad</td><td>Nombres de variables claros y comentarios en lo difícil</td><td>Se entiende a medias</td><td>No se entiende</td></tr>
        <tr><td>Datos de entrada</td><td>Maneja datos raros sin romperse (vacíos, mal cargados)</td><td>Se rompe con algún dato raro</td><td>Se rompe seguido</td></tr>
        <tr><td>Ahorro</td><td>Tiempo antes y después anotados</td><td>Solo una de las dos</td><td>No se sabe</td></tr>
        <tr><td>Cuidar los datos</td><td>Probó en copia, con modo de prueba, y escribe en archivos nuevos</td><td>—</td><td>Modificó o borró originales sin copia</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Cuidar los datos" tiene 0, la automatización no está lista,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un programa que funciona perfecto, pero que renombró las fotos originales sin copia y sin modo de prueba, saca 0 en "Cuidar los datos".</p>` },
    { titulo: "Que corra solo y seguir aprendiendo", html: `
      <p class="idea">Una automatización rinde más cuando corre sola. Y con lo que aprendiste, ya podés seguir con herramientas más potentes.</p>
      <table>
        <tr><th>Para que corra solo</th><th>Cómo</th></tr>
        <tr><td>En Windows</td><td>El Programador de tareas puede correr un programa de Python todos los días a una hora</td></tr>
        <tr><td>En Mac o Linux</td><td>cron hace lo mismo</td></tr>
        <tr><td>Con un doble clic</td><td>Guardá el programa como archivo .py en tu compu y abrilo con Python</td></tr>
      </table>
      <table>
        <tr><th>Para seguir</th><th>Qué tiene</th></tr>
        <tr><td>El tutorial oficial de Python, en español</td><td>Todo el lenguaje, paso a paso</td></tr>
        <tr><td>Automate the Boring Stuff (en inglés, gratis)</td><td>Automatizar mails, planillas, PDF y páginas web</td></tr>
        <tr><td>El curso "Data Engineering" de este sitio</td><td>Python con datos más en serio</td></tr>
        <tr><td>El curso "Git y GitHub desde cero" de este sitio</td><td>Guardar versiones de tus programas</td></tr>
      </table>
      <p class="aviso">No automatices tareas con datos de otras personas o de tu trabajo sin permiso, y nunca pongas contraseñas escritas dentro de un programa.</p>
      <p>Por ejemplo, programar el informe semanal para que corra los lunes a las 8 hace que esté listo cuando llegás, sin que te acuerdes de correrlo.</p>` },
  ],
  practica: [
    "Elegí tu tarea, medí cuánto tardás a mano y escribí el plan en pasos. Anotá el tiempo.",
    "Escribí el programa de a partes, probándolo en una copia con modo de prueba. Anotá cuántas versiones hiciste hasta que funcionó.",
    "Evaluá tu automatización con la rúbrica y anotá el puntaje de cada criterio, el total y el tiempo que ahorra.",
  ],
  recursos: [
    { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" },
    { t: "Automate the Boring Stuff with Python, libro gratis (en inglés)", url: "https://automatetheboringstuff.com/" },
    { t: "Documentación de Python: pathlib, para trabajar con carpetas y archivos", url: "https://docs.python.org/es/3/library/pathlib.html" },
  ],
  quiz: [
    { q: "Si elegís una tarea para el proyecto, ¿cuál conviene?", opciones: ["Una que hacés una vez en la vida","Una inventada sin datos","Una real y repetitiva, midiendo cuánto tardás a mano","La más difícil posible"], correcta: 2, explicacion: "Lo repetitivo es lo que rinde. La más difícil tienta como desafío, pero conviene empezar por algo alcanzable." },
    { q: "Si empezás tu programa, ¿qué parte hacés primero?", opciones: ["La más simple, como leer el archivo, y la probás","Todo junto de una vez","El final primero","Nada, primero lo imaginás todo"], correcta: 0, explicacion: "Empezar chico y probar evita perderse. Todo junto tienta por rápido, pero no sabés qué falla." },
    { q: "Si vas a mover archivos, ¿en qué orden avanzás?", opciones: ["Mover primero y ver después","Borrar y empezar de nuevo","Mover sin listar","Listar, después mostrar adónde iría cada uno, y al final mover"], correcta: 3, explicacion: "Así ves todo antes de tocar nada. Mover primero tienta por rápido, pero si algo está mal, ya pasó." },
    { q: "Si el programa funciona, pero renombró las fotos originales sin copia ni prueba, ¿está listo?", opciones: ["Sí, funciona","No: \"Cuidar los datos\" tiene 0 y eso no se compensa","Sí, si las fotos se ven bien","Depende de cuántas fotos"], correcta: 1, explicacion: "La regla de la rúbrica lo dice. \"Funciona\" tienta, pero arriesgaste datos que no vuelven." },
    { q: "Si tu programa se rompe con una fila vacía de la planilla, ¿cuánto saca en \"Datos de entrada\"?", opciones: ["2 puntos","0 puntos","1 punto","3 puntos"], correcta: 2, explicacion: "Se rompe con un dato raro: 1. Sacar 0 tienta, pero ese es cuando se rompe seguido." },
    { q: "Si no anotaste cuánto tardabas antes ni después, ¿cuánto sacás en \"Ahorro\"?", opciones: ["0 puntos","2 puntos","1 punto","No se evalúa"], correcta: 0, explicacion: "No se sabe el ahorro. Sacar 1 tienta si \"seguro ahorra\", pero sin medir no se sabe." },
    { q: "Si tu automatización saca 8, ¿qué hacés?", opciones: ["La borrás","La dejás así","Cambiás la rúbrica","Mejorás lo que sacó 0 o 1"], correcta: 3, explicacion: "De 7 a 10 se mejora lo flojo. Borrarla tienta si te frustra, pero está cerca." },
    { q: "Si querés que tu programa corra solo todos los días en Windows, ¿qué usás?", opciones: ["La papelera","El Programador de tareas","El bloc de notas","Nada, no se puede"], correcta: 1, explicacion: "El Programador de tareas lo corre a una hora. \"No se puede\" tienta, pero sí se puede." },
    { q: "Si usás Mac o Linux, ¿qué herramienta hace lo mismo?", opciones: ["print","csv","cron","pathlib"], correcta: 2, explicacion: "cron programa tareas. pathlib tienta porque es de archivos, pero no programa horarios." },
    { q: "Si tu programa necesita una contraseña, ¿la escribís dentro del código?", opciones: ["No: nunca se escriben contraseñas dentro de un programa","Sí, es más cómodo","Sí, en un comentario","Sí, si el programa es tuyo"], correcta: 0, explicacion: "El código se comparte o se copia. \"Es más cómodo\" tienta, pero alguien la puede ver." },
    { q: "Si querés automatizar algo con datos de tu trabajo, ¿qué hacés antes?", opciones: ["Lo hacés sin avisar","Copiás los datos a tu casa sin preguntar","Los publicás","Pedís permiso"], correcta: 3, explicacion: "Los datos no son tuyos. Hacerlo sin avisar tienta por ayudar, pero puede traer problemas." },
    { q: "Si querés seguir con Python y datos más en serio, ¿qué curso del sitio sigue?", opciones: ["\"Pintura de interiores\"","\"Data Engineering\"","\"Portugués básico\"","Ninguno"], correcta: 1, explicacion: "Data Engineering sigue con Python y datos. Los otros tientan porque están en el sitio, pero son de otros temas." },
  ],
},
];
