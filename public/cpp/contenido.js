// Temario del curso "C++ para principiantes". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js cpp y node tools/metodologia.js cpp
window.TEMARIO = [
{
  id: "empezar",
  icono: "🚀",
  titulo: "Tu primer programa en C++",
  nivel: "Básico",
  objetivos: [
    "Explicar qué hace un compilador y por qué C++ lo necesita",
    "Escribir, compilar y correr un programa que muestre texto en pantalla",
    "Leer un error de compilación y encontrar la línea que lo causa",
  ],
  lecciones: [
    { titulo: "Qué es programar y qué es C++", video: {"id":"qzFKEt1JGwc","t":"Hola mundo en C++ para principiantes · Algebraticos (8:56)"}, html: `
      <p class="idea">Programar es escribir instrucciones para que la computadora las siga al pie de la letra. <strong>C++</strong> es un lenguaje de programación: una forma de escribir esas instrucciones que después se traduce a lo que entiende la máquina.</p>
      <p>En todo el curso acompañamos a <strong>Lucía</strong>, que atiende el kiosco de su familia en Córdoba y quiere aprender a programar. Empieza de cero: nunca escribió una línea de código.</p>
      <table>
        <tr><th>Palabra</th><th>Qué es</th></tr>
        <tr><td>Código fuente</td><td>El texto que escribís vos, en un archivo que termina en .cpp</td></tr>
        <tr><td>Compilador</td><td>El programa que traduce tu código a instrucciones de la máquina</td></tr>
        <tr><td>Ejecutable</td><td>El resultado de compilar: el programa que se puede correr</td></tr>
        <tr><td>Correr o ejecutar</td><td>Hacer que el programa funcione</td></tr>
      </table>
      <pre><code>Vos escribís         El compilador traduce      La compu ejecuta
  hola.cpp    ───►        (g++)           ───►    hola.exe
(código fuente)                                   (ejecutable)
</code></pre>
      <p><strong>¿Por qué C++?</strong> Es rápido y está en todos lados: videojuegos, programas de edición, robots, autos y competencias de programación. Aprenderlo te deja una base que sirve para cualquier otro lenguaje.</p>
      <p><strong>No hace falta instalar nada para empezar:</strong> en <strong>OnlineGDB</strong> (un sitio gratis) pegás el código, apretás "Run" y ves el resultado. Más adelante podés instalar un compilador en tu compu, como g++ con Visual Studio Code.</p>
      <p>Por ejemplo, Lucía abrió OnlineGDB en el celular, eligió "C++" arriba a la derecha y corrió el programa que trae de ejemplo. En un minuto ya había corrido su primer programa, sin instalar nada.</p>` },
    { titulo: "Las partes de un programa", html: `
      <p class="idea">Todo programa de C++ tiene el mismo esqueleto: las <strong>bibliotecas</strong> que usa arriba y la función <strong>main</strong>, que es donde empieza a correr.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    // Esto es un comentario: el compilador lo ignora
    std::cout &lt;&lt; "Hola, soy Lucía\\n";
    std::cout &lt;&lt; "Este es mi primer programa\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Hola, soy Lucía
Este es mi primer programa
</code></pre>
      <table>
        <tr><th>Parte</th><th>Para qué está</th></tr>
        <tr><td>#include &lt;iostream&gt;</td><td>Trae la biblioteca para mostrar y leer texto (input/output stream)</td></tr>
        <tr><td>int main() { ... }</td><td>La función principal: el programa empieza en su primera línea</td></tr>
        <tr><td>std::cout &lt;&lt; "..."</td><td>Muestra texto en la pantalla (cout = salida por consola)</td></tr>
        <tr><td>\\n</td><td>Salto de línea: lo que sigue va en el renglón de abajo</td></tr>
        <tr><td>;</td><td>Termina cada instrucción, como el punto de una oración</td></tr>
        <tr><td>// comentario</td><td>Una nota para las personas; el compilador no la lee</td></tr>
        <tr><td>return 0;</td><td>Avisa que el programa terminó bien</td></tr>
      </table>
      <p>Una <strong>biblioteca</strong> es código que ya escribió otra persona y que podés usar. <strong>std::</strong> quiere decir que cout viene de la biblioteca estándar, la que trae todo compilador.</p>
      <p><strong>Las llaves { }</strong> marcan dónde empieza y dónde termina un bloque de código. Lo de adentro va con sangría (unos espacios al principio) para que se lea mejor.</p>
      <p><strong>El bloque "Salida:"</strong> que ves después de cada programa del curso es exactamente lo que aparece en la pantalla al correrlo. Todos se probaron con un compilador de verdad.</p>
      <p>Por ejemplo, Lucía cambió el texto entre comillas por "Kiosco La Esquina" y sumó otra línea con el horario. Al correrlo, aparecieron sus dos renglones.</p>` },
    { titulo: "Cuando el compilador se queja", html: `
      <p class="idea">Si el código tiene un error de escritura, el compilador <strong>no lo traduce</strong> y te dice en qué línea está el problema. Leer ese mensaje es una habilidad que se aprende.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hola\\n"
    std::cout &lt;&lt; "Chau\\n";
    return 0;
}
</code></pre>
      <pre><code>Error:
error: expected ';' before 'std'
</code></pre>
      <p>Falta el <strong>;</strong> al final de la línea 4. El compilador lo nota recién al leer la línea 5 (donde aparece "std" sin que la anterior haya terminado), por eso a veces el error se marca una línea después.</p>
      <table>
        <tr><th>Mensaje (en inglés)</th><th>Qué suele ser</th></tr>
        <tr><td>expected ';'</td><td>Falta un punto y coma</td></tr>
        <tr><td>was not declared in this scope</td><td>Usás un nombre mal escrito o que no existe</td></tr>
        <tr><td>expected '}'</td><td>Falta cerrar una llave</td></tr>
        <tr><td>missing terminating " character</td><td>Abriste comillas y no las cerraste</td></tr>
      </table>
      <pre><code>Cómo leer un error:
1. Buscá el número de línea (por ejemplo, main.cpp:5).
2. Mirá esa línea y la de arriba.
3. Arreglá solo el primer error y volvé a compilar:
   muchas veces los demás desaparecen solos.
</code></pre>
      <p><strong>Un error de compilación no es un fracaso:</strong> hasta las personas que programan hace años los ven todos los días. Es el compilador ayudándote.</p>
      <p>Por ejemplo, a Lucía le salieron 3 errores juntos. Arregló el primero (una comilla sin cerrar), compiló de nuevo y los otros dos desaparecieron: eran consecuencia del primero.</p>` },
  ],
  practica: [
    "Corré en OnlineGDB el programa de \"Hola, soy Lucía\" con tu nombre y anotá cuántos renglones mostró.",
    "Escribí un programa que muestre 3 renglones: tu nombre, tu barrio y tu comida favorita. Compará la salida con lo que esperabas.",
    "Borrá a propósito un punto y coma, compilá y anotá el mensaje de error y la línea que marca.",
  ],
  recursos: [
    { t: "OnlineGDB: compilador de C++ en el navegador, sin instalar nada", url: "https://www.onlinegdb.com/online_c++_compiler" },
    { t: "LearnCpp.com: tutorial gratis de C++ paso a paso (en inglés)", url: "https://www.learncpp.com/" },
    { t: "Visual Studio Code: cómo instalar y usar C++ (en inglés)", url: "https://code.visualstudio.com/docs/languages/cpp" },
  ],
  quiz: [
    { q: "Si escribís un programa en C++, ¿qué hace el compilador?", opciones: ["Corrige solo tus errores de lógica","Lo sube a internet","Traduce tu código a un programa que la computadora puede correr","Lo traduce al inglés"], correcta: 2, explicacion: "Compilar es traducir el código fuente a un ejecutable. \"Corrige tus errores\" tienta, pero el compilador solo avisa; arreglar es tarea tuya." },
    { q: "Tenés que probar C++ hoy y no podés instalar nada. ¿Qué usás?", opciones: ["Un compilador en el navegador, como OnlineGDB","Un procesador de textos","Una calculadora","Nada: sin instalar no se puede"], correcta: 0, explicacion: "OnlineGDB compila y corre en el navegador. \"Sin instalar no se puede\" tienta, pero hay compiladores online gratis." },
    { q: "Si tu archivo se llama hola.cpp, ¿qué es?", opciones: ["El ejecutable","El compilador","Una biblioteca","El código fuente"], correcta: 3, explicacion: ".cpp es el texto que escribís. El ejecutable tienta, pero ese aparece después de compilar." },
    { q: "Tu programa no muestra nada con cout y el compilador dice que cout no existe. ¿Qué falta arriba de todo?", opciones: ["return 0;","#include <iostream>","Un comentario","int main()"], correcta: 1, explicacion: "cout vive en la biblioteca iostream. int main tienta porque también es obligatorio, pero el error habla de cout." },
    { q: "Si querés que el programa siga en el renglón de abajo, ¿qué escribís al final del texto?", opciones: [";","//","\\n","{ }"], correcta: 2, explicacion: "\\n es el salto de línea. El punto y coma tienta, pero termina la instrucción, no el renglón." },
    { q: "Escribiste \"// revisar el precio\" dentro de main. ¿Qué hace el compilador con eso?", opciones: ["Lo ignora: es un comentario","Lo muestra en pantalla","Da error","Revisa el precio"], correcta: 0, explicacion: "Lo que va después de // es para las personas. Mostrarlo tienta, pero para eso está cout." },
    { q: "Si tu programa tiene dos cout, ¿dónde empieza a correr?", opciones: ["En el #include","En el último cout","En cualquier lugar","En la primera línea de main"], correcta: 3, explicacion: "main es la puerta de entrada. El #include tienta porque está arriba, pero solo trae la biblioteca." },
    { q: "Si el compilador dice \"expected ';'\" en la línea 5, ¿dónde buscás?", opciones: ["Solo en la línea 1","En la línea 5 y en la de arriba","En la última línea","En otro archivo"], correcta: 1, explicacion: "El punto y coma que falta suele estar al final de la línea anterior. Solo la línea 5 tienta, pero a veces el error está justo antes." },
    { q: "Te aparecen 4 errores al compilar. ¿Qué hacés primero?", opciones: ["Borrás todo el programa","Arreglás el último","Arreglás el primero y volvés a compilar","Los ignorás y corrés igual"], correcta: 2, explicacion: "Muchos errores son consecuencia del primero. Arreglar el último tienta, pero puede desaparecer solo." },
    { q: "Si el mensaje dice \"was not declared in this scope\", ¿qué suele pasar?", opciones: ["Usás un nombre mal escrito o que no existe","Falta una comilla","La compu está rota","El programa es muy largo"], correcta: 0, explicacion: "El compilador no conoce ese nombre. La comilla tienta, pero ese error dice \"missing terminating\"." },
    { q: "Tu programa compila con errores y vos querés correrlo igual. ¿Qué pasa?", opciones: ["Corre la parte buena","Corre más lento","Corre y muestra el error en pantalla","No se puede: si no compila, no hay ejecutable"], correcta: 3, explicacion: "Sin compilar no hay programa. \"Corre la parte buena\" tienta, pero C++ traduce todo o nada." },
    { q: "Si ves \"Salida:\" después de un programa del curso, ¿qué es?", opciones: ["Otro programa para copiar","Exactamente lo que aparece en pantalla al correrlo","Un error a propósito","Una nota del autor"], correcta: 1, explicacion: "Es el resultado real, probado con un compilador. El error a propósito tienta, pero esos dicen \"Error:\"." },
  ],
},
{
  id: "variables",
  icono: "📦",
  titulo: "Variables, cuentas y teclado",
  nivel: "Básico",
  objetivos: [
    "Elegir el tipo justo (int, double, char, bool, string) para cada dato",
    "Hacer cuentas sin caer en la trampa de la división entera",
    "Leer datos del teclado con cin y getline",
  ],
  lecciones: [
    { titulo: "Variables y tipos", video: {"id":"vqLFK_CYDb4","t":"Tutorial de C++: tipos de datos · Programar Facil (2:51)"}, html: `
      <p class="idea">Una <strong>variable</strong> es una cajita con nombre donde el programa guarda un dato. En C++ cada cajita tiene un <strong>tipo</strong>: dice qué clase de dato entra.</p>
      <table>
        <tr><th>Tipo</th><th>Guarda</th><th>Ejemplo</th></tr>
        <tr><td>int</td><td>Números enteros</td><td>int stock = 24;</td></tr>
        <tr><td>double</td><td>Números con coma (se escribe con punto)</td><td>double precio = 1250.50;</td></tr>
        <tr><td>char</td><td>Una sola letra o símbolo, entre comillas simples</td><td>char talle = 'M';</td></tr>
        <tr><td>bool</td><td>Verdadero o falso: true o false</td><td>bool abierto = true;</td></tr>
        <tr><td>std::string</td><td>Texto, entre comillas dobles (necesita #include &lt;string&gt;)</td><td>std::string nombre = "Lucía";</td></tr>
      </table>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    std::string producto = "Alfajor";
    int stock = 24;
    double precio = 850.5;
    stock = stock - 3;   // se vendieron 3
    std::cout &lt;&lt; producto &lt;&lt; ": quedan " &lt;&lt; stock &lt;&lt; " a $" &lt;&lt; precio &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Alfajor: quedan 21 a $850.5
</code></pre>
      <p><strong>Declarar</strong> es crear la variable diciendo su tipo y su nombre. El signo <strong>=</strong> no es "igual" como en matemática: quiere decir "guardá esto en la cajita". Por eso stock = stock - 3 tiene sentido: calcula 24 - 3 y guarda 21.</p>
      <p><strong>Nombres:</strong> sin espacios ni tildes, y que digan qué guardan (precio, no x). C++ distingue mayúsculas: Precio y precio son dos variables distintas.</p>
      <p>Por ejemplo, Lucía guardaba el precio en un int y le desaparecían los 50 centavos. Lo cambió a double y el precio quedó bien.</p>` },
    { titulo: "Cuentas y la trampa de la división", html: `
      <p class="idea">C++ hace cuentas con + - * /, pero <strong>si dividís dos enteros, el resultado es entero</strong>: se pierde lo que va después de la coma.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int alfajores = 7;
    int chicos = 2;
    std::cout &lt;&lt; "A cada uno: " &lt;&lt; alfajores / chicos &lt;&lt; "\\n";
    std::cout &lt;&lt; "Sobran: " &lt;&lt; alfajores % chicos &lt;&lt; "\\n";
    std::cout &lt;&lt; "Con coma: " &lt;&lt; 7.0 / 2 &lt;&lt; "\\n";
    double promedio = (8 + 7 + 10) / 3.0;
    std::cout &lt;&lt; "Promedio: " &lt;&lt; promedio &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
A cada uno: 3
Sobran: 1
Con coma: 3.5
Promedio: 8.33333
</code></pre>
      <table>
        <tr><th>Operador</th><th>Qué hace</th><th>Ejemplo</th><th>Da</th></tr>
        <tr><td>+  -  *</td><td>Suma, resta, multiplicación</td><td>3 * 4</td><td>12</td></tr>
        <tr><td>/ entre enteros</td><td>División sin decimales</td><td>7 / 2</td><td>3</td></tr>
        <tr><td>/ con un double</td><td>División con decimales</td><td>7.0 / 2</td><td>3.5</td></tr>
        <tr><td>%</td><td>Resto de la división entera (módulo)</td><td>7 % 2</td><td>1</td></tr>
      </table>
      <p><strong>El arreglo:</strong> si al menos uno de los dos números es double (7.0 o 3.0), la división da con coma. Por eso el promedio divide por 3.0 y no por 3.</p>
      <p><strong>El orden importa como en matemática:</strong> primero * / %, después + y -. Usá paréntesis para que no haya dudas: (8 + 7 + 10) / 3.0.</p>
      <p><strong>El resto (%) sirve mucho:</strong> si numero % 2 da 0, el número es par.</p>
      <p>Por ejemplo, Lucía calculó el promedio de ventas de 3 días dividiendo por 3 y le dio 8 en lugar de 8.33. Cambió a 3.0 y apareció el decimal.</p>` },
    { titulo: "Leer del teclado", html: `
      <p class="idea">Con <strong>std::cin</strong> el programa espera que escribas algo y lo guarda en una variable. Así el mismo programa sirve para datos distintos.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    std::string nombre;
    int cantidad;
    double precio;
    std::cout &lt;&lt; "Producto: ";
    std::cin &gt;&gt; nombre;
    std::cout &lt;&lt; "Cantidad: ";
    std::cin &gt;&gt; cantidad;
    std::cout &lt;&lt; "Precio: ";
    std::cin &gt;&gt; precio;
    std::cout &lt;&lt; "\\nTotal de " &lt;&lt; nombre &lt;&lt; ": $" &lt;&lt; cantidad * precio &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Entrada:
Chicles
3
150
</code></pre>
      <pre><code>Salida:
Producto: Cantidad: Precio:
Total de Chicles: $450
</code></pre>
      <p><strong>Cómo leer el ejemplo:</strong> "Entrada:" es lo que escribiste vos con el teclado. En la pantalla real lo ves al lado de cada pregunta; en "Salida:" mostramos solo lo que escribe el programa.</p>
      <table>
        <tr><th>Para leer...</th><th>Usás</th><th>Ojo</th></tr>
        <tr><td>Un número o una palabra</td><td>std::cin &gt;&gt; variable;</td><td>Corta en el primer espacio</td></tr>
        <tr><td>Una frase con espacios</td><td>std::getline(std::cin, texto);</td><td>Lee hasta el Enter</td></tr>
      </table>
      <p><strong>&gt;&gt;</strong> va hacia la variable (los datos entran), y <strong>&lt;&lt;</strong> va hacia cout (los datos salen). Una forma de acordarse: las flechas apuntan hacia donde va el dato.</p>
      <p><strong>Si escribís "Coca Cola" con cin &gt;&gt;,</strong> solo se guarda "Coca". Para frases, usá getline.</p>
      <p>Por ejemplo, Lucía probó su programa con 3 productos distintos sin cambiar el código: solo escribió otros datos cada vez.</p>` },
  ],
  practica: [
    "Escribí un programa con 5 variables, una de cada tipo de la tabla, que las muestre todas. Anotá qué mostró el bool (true se muestra como 1).",
    "Calculá 17 / 5, 17 % 5 y 17.0 / 5 en un programa y anotá los 3 resultados.",
    "Hacé un programa que pida 3 notas y muestre el promedio con decimales. Probalo con 8, 7 y 10 y compará con 8.33333.",
  ],
  recursos: [
    { t: "LearnCpp: tipos de datos fundamentales (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-fundamental-data-types/" },
    { t: "LearnCpp: cout, cin y endl (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/" },
    { t: "OnlineGDB: compilador de C++ en el navegador, sin instalar nada", url: "https://www.onlinegdb.com/online_c++_compiler" },
  ],
  quiz: [
    { q: "Tenés que guardar el precio $1250,50. ¿Qué tipo usás?", opciones: ["int","char","double","bool"], correcta: 2, explicacion: "double guarda decimales. int tienta porque es un número, pero perdés los centavos." },
    { q: "Si querés guardar si el kiosco está abierto o cerrado, ¿qué tipo conviene?", opciones: ["bool","double","std::string","char"], correcta: 0, explicacion: "Solo hay dos opciones: true o false. string tienta porque podrías escribir \"abierto\", pero bool es justo para eso." },
    { q: "Si tu programa hace stock = stock - 3 y stock valía 24, ¿cuánto vale después?", opciones: ["24","-3","Da error porque no es igual","21"], correcta: 3, explicacion: "= guarda el resultado de la cuenta. \"Da error\" tienta si lo leés como igualdad matemática, pero en C++ es guardar." },
    { q: "Si escribís Precio en un lado y precio en otro, ¿qué pasa?", opciones: ["Es la misma variable","Son dos variables distintas","C++ las une","Se borra una"], correcta: 1, explicacion: "C++ distingue mayúsculas. \"Es la misma\" tienta, pero el compilador las trata como distintas." },
    { q: "Tu programa calcula 7 / 2 con dos int. ¿Qué muestra?", opciones: ["3.5","4","3","1"], correcta: 2, explicacion: "Entre enteros, la división corta los decimales. 3.5 tienta, pero solo sale si uno es double." },
    { q: "Si querés saber cuántos alfajores sobran al repartir 7 entre 2, ¿qué operador usás?", opciones: ["%","/","*","-"], correcta: 0, explicacion: "% da el resto: 7 % 2 = 1. / tienta, pero da cuántos le tocan a cada uno." },
    { q: "Tu promedio de 8, 7 y 10 da 8 en lugar de 8.33. ¿Qué cambiás?", opciones: ["Sumás de nuevo","Usás %","Le sumás 0.33 a mano","Dividís por 3.0 en lugar de 3"], correcta: 3, explicacion: "Con un double en la cuenta, la división da decimales. Sumar 0.33 a mano tienta, pero sirve solo para ese caso." },
    { q: "Si numero % 2 da 0, ¿qué sabés del número?", opciones: ["Que es impar","Que es par","Que es cero","Que es negativo"], correcta: 1, explicacion: "Resto 0 al dividir por 2 es par. \"Es cero\" tienta por el 0, pero 10 % 2 también da 0." },
    { q: "Tenés que leer la cantidad que escribe el usuario. ¿Qué usás?", opciones: ["std::cout << cantidad;","cantidad = teclado;","std::cin >> cantidad;","std::cin << cantidad;"], correcta: 2, explicacion: "cin con >> lee. cout tienta porque se parece, pero muestra en pantalla." },
    { q: "Si el usuario escribe \"Coca Cola\" y lo leés con cin >>, ¿qué se guarda?", opciones: ["Coca","Coca Cola","Cola","Nada"], correcta: 0, explicacion: "cin >> corta en el espacio. \"Coca Cola\" tienta, pero para eso hace falta getline." },
    { q: "Querés leer el nombre completo de una persona, con espacios. ¿Qué usás?", opciones: ["std::cin >> nombre;","std::cout << nombre;","char nombre;","std::getline(std::cin, nombre);"], correcta: 3, explicacion: "getline lee hasta el Enter. cin >> tienta por simple, pero corta en el primer espacio." },
    { q: "Si ves un bloque \"Entrada:\" antes de la salida, ¿qué es?", opciones: ["Lo que muestra el programa","Lo que el usuario escribió con el teclado","Un error","El código fuente"], correcta: 1, explicacion: "Son los datos que tipeaste. \"Lo que muestra\" tienta, pero eso es \"Salida:\"." },
  ],
},
{
  id: "decisiones",
  icono: "🔀",
  titulo: "Tomar decisiones con if",
  nivel: "Básico",
  objetivos: [
    "Escribir condiciones con los operadores de comparación",
    "Elegir entre if, else if y else según cuántos caminos hay",
    "Combinar condiciones con && y || sin confundir = con ==",
  ],
  lecciones: [
    { titulo: "if y else", video: {"id":"RaWfeVgkWbE","t":"Qué son los condicionales en programación (animado) · Retro (3:21)"}, html: `
      <p class="idea">Con <strong>if</strong> el programa decide: si una condición es verdadera, hace algo; si no (<strong>else</strong>), hace otra cosa.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int stock = 3;
    if (stock &lt; 5) {
        std::cout &lt;&lt; "Pedir más mercadería\\n";
    } else {
        std::cout &lt;&lt; "Stock suficiente\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
Pedir más mercadería
</code></pre>
      <table>
        <tr><th>Comparación</th><th>Quiere decir</th><th>Ejemplo verdadero</th></tr>
        <tr><td>==</td><td>Igual a</td><td>5 == 5</td></tr>
        <tr><td>!=</td><td>Distinto de</td><td>5 != 3</td></tr>
        <tr><td>&lt;  &gt;</td><td>Menor, mayor</td><td>3 &lt; 5</td></tr>
        <tr><td>&lt;=  &gt;=</td><td>Menor o igual, mayor o igual</td><td>5 &gt;= 5</td></tr>
      </table>
      <p>Una <strong>condición</strong> es una pregunta que se responde con verdadero o falso. Va entre paréntesis después del if. El bloque entre llaves se ejecuta solo si es verdadera.</p>
      <p><strong>El else es opcional:</strong> si no hace falta hacer nada cuando la condición es falsa, se deja solo el if.</p>
      <p><strong>Probá los dos caminos:</strong> si cambiás stock a 10, tiene que mostrar "Stock suficiente". Un programa con if se prueba con al menos un dato para cada camino.</p>
      <p>Por ejemplo, Lucía armó un aviso: si quedan menos de 5 paquetes de galletitas, el programa le dice que pida más. Lo probó con 3 y con 10.</p>` },
    { titulo: "Más de dos caminos: else if", html: `
      <p class="idea">Cuando hay más de dos casos, encadenás <strong>else if</strong>. El programa revisa las condiciones en orden y entra en <strong>la primera</strong> que sea verdadera.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int nota = 7;
    if (nota &gt;= 9) {
        std::cout &lt;&lt; "Excelente\\n";
    } else if (nota &gt;= 6) {
        std::cout &lt;&lt; "Aprobado\\n";
    } else if (nota &gt;= 4) {
        std::cout &lt;&lt; "Recupera\\n";
    } else {
        std::cout &lt;&lt; "Desaprobado\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
Aprobado
</code></pre>
      <pre><code>nota = 7
  ¿7 &gt;= 9?  no
  ¿7 &gt;= 6?  sí  → "Aprobado" y sale de la cadena
  (las otras ya no se revisan)
</code></pre>
      <p><strong>El orden importa:</strong> si pusieras primero nota &gt;= 4, un 10 entraría ahí y diría "Recupera". Ordená de la condición más exigente a la menos exigente.</p>
      <p><strong>El else final</strong> atrapa todo lo que no entró antes. Es una red de seguridad.</p>
      <p>Por ejemplo, Lucía hizo un programa de descuentos: más de $10.000, 10%; más de $5.000, 5%; si no, nada. Primero lo escribió al revés y todos los clientes recibían 5%. Lo dio vuelta y funcionó.</p>` },
    { titulo: "Juntar condiciones y la trampa del =", html: `
      <p class="idea">Con <strong>&amp;&amp;</strong> (y) pedís que se cumplan dos condiciones; con <strong>||</strong> (o) alcanza con una; con <strong>!</strong> (no) das vuelta una condición.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int hora = 21;
    bool esFeriado = false;
    if (hora &gt;= 8 &amp;&amp; hora &lt; 22 &amp;&amp; !esFeriado) {
        std::cout &lt;&lt; "Kiosco abierto\\n";
    } else {
        std::cout &lt;&lt; "Kiosco cerrado\\n";
    }
    int edad = 15;
    if (edad &lt; 12 || edad &gt;= 65) {
        std::cout &lt;&lt; "Entrada con descuento\\n";
    } else {
        std::cout &lt;&lt; "Entrada general\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
Kiosco abierto
Entrada general
</code></pre>
      <table>
        <tr><th>Operador</th><th>Verdadero cuando...</th></tr>
        <tr><td>a &amp;&amp; b</td><td>a y b son verdaderas, las dos</td></tr>
        <tr><td>a || b</td><td>al menos una es verdadera</td></tr>
        <tr><td>!a</td><td>a es falsa</td></tr>
      </table>
      <p><strong>La trampa más común:</strong> escribir = en lugar de ==. if (stock = 0) no pregunta si stock es 0: <em>guarda</em> 0 en stock. Para comparar, siempre ==. Con las advertencias del compilador activadas (como -Wall en g++), te avisa.</p>
      <p><strong>Un rango se escribe con &amp;&amp;:</strong> "entre 8 y 22" es hora &gt;= 8 &amp;&amp; hora &lt; 22. No se puede escribir 8 &lt;= hora &lt; 22 como en matemática: compila, pero hace otra cosa.</p>
      <p>Por ejemplo, Lucía escribió if (stock = 0) y el programa le borraba el stock. El compilador le había mostrado una advertencia; al cambiar a == se arregló.</p>` },
  ],
  practica: [
    "Escribí un programa que diga si un número es par o impar (usá %). Probalo con 4 y con 7 y anotá las dos salidas.",
    "Armá un programa de notas con 4 caminos (else if) y probalo con 10, 7, 5 y 2. Anotá qué mostró cada uno.",
    "Hacé un programa que diga si una hora está dentro del horario del kiosco (de 8 a 22). Probalo con 7, 8, 21 y 22 y anotá cuáles dieron abierto.",
  ],
  recursos: [
    { t: "LearnCpp: if y bloques (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/if-statements-and-blocks/" },
    { t: "Microsoft Learn: la instrucción if-else en C++", url: "https://learn.microsoft.com/es-es/cpp/cpp/if-else-statement-cpp" },
    { t: "OnlineGDB: compilador de C++ en el navegador, sin instalar nada", url: "https://www.onlinegdb.com/online_c++_compiler" },
  ],
  quiz: [
    { q: "Si stock vale 3 y escribís if (stock < 5), ¿se ejecuta el bloque del if?", opciones: ["No, porque 3 es menor","Solo si hay else","Sí, porque 3 es menor que 5","Da error"], correcta: 2, explicacion: "La condición es verdadera, entonces entra. \"Solo si hay else\" tienta, pero el else es opcional." },
    { q: "Tenés que preguntar si stock es igual a cero. ¿Qué escribís?", opciones: ["if (stock == 0)","if (stock = 0)","if (stock 0)","if stock == 0"], correcta: 0, explicacion: "Comparar es ==. = tienta porque en matemática es \"igual\", pero en C++ guarda el valor." },
    { q: "Querés saber si dos productos tienen distinto precio. ¿Qué operador usás?", opciones: ["==","=","<","!="], correcta: 3, explicacion: "!= es distinto. == tienta, pero pregunta lo contrario." },
    { q: "Si escribiste un if con else, ¿con cuántos datos lo probás como mínimo?", opciones: ["Con uno alcanza","Con dos: uno para cada camino","Con cien","No hace falta probarlo"], correcta: 1, explicacion: "Cada camino necesita su prueba. \"Uno alcanza\" tienta, pero el otro camino puede tener un error." },
    { q: "Con la nota 7 y la cadena >= 9, >= 6, >= 4, ¿qué muestra?", opciones: ["Excelente","Recupera","Aprobado","Aprobado y Recupera"], correcta: 2, explicacion: "Entra en la primera verdadera (>= 6) y sale. \"Aprobado y Recupera\" tienta porque 7 >= 4 también es cierto, pero la cadena ya terminó." },
    { q: "Si en una cadena de else if ponés primero nota >= 4, ¿qué pasa con un 10?", opciones: ["Entra en ese caso y muestra el mensaje equivocado","Funciona igual","Da error de compilación","Entra en todos"], correcta: 0, explicacion: "La primera verdadera gana. \"Funciona igual\" tienta, pero el orden cambia el resultado." },
    { q: "Tu cadena de else if no cubre un caso raro. ¿Qué agregás al final?", opciones: ["Otro #include","Un return en cada if","Nada, no pasa nada","Un else que atrape lo que no entró antes"], correcta: 3, explicacion: "El else final es la red de seguridad. \"No pasa nada\" tienta, pero ese caso no mostraría nada." },
    { q: "Si el kiosco abre cuando es de día Y no es feriado, ¿qué operador usás?", opciones: ["||","&&","!","=="], correcta: 1, explicacion: "&& pide las dos. || tienta, pero alcanzaría con una sola." },
    { q: "Si el descuento es para menores de 12 O mayores de 65, ¿qué operador usás?", opciones: ["&&","!=","||","%"], correcta: 2, explicacion: "Con una alcanza. && tienta, pero nadie es menor de 12 y mayor de 65 a la vez." },
    { q: "Si esFeriado vale false, ¿cuánto vale !esFeriado?", opciones: ["true","false","0","Da error"], correcta: 0, explicacion: "! da vuelta el valor. false tienta si lo leés de corrido, pero ! lo invierte." },
    { q: "Tenés que escribir \"la hora está entre 8 y 22\". ¿Cómo lo hacés?", opciones: ["8 <= hora < 22","hora >= 8 || hora < 22","hora == 8 && 22","hora >= 8 && hora < 22"], correcta: 3, explicacion: "Un rango son dos comparaciones con &&. La forma matemática tienta, pero en C++ compila y hace otra cosa." },
    { q: "Escribiste if (stock = 0) y el stock se borra. ¿Qué pasó?", opciones: ["El compilador está fallado","Usaste = (guardar) en lugar de == (comparar)","Falta un else","Falta #include"], correcta: 1, explicacion: "= guardó 0 en stock. \"El compilador está fallado\" tienta, pero hizo exactamente lo que escribiste." },
  ],
},
{
  id: "bucles",
  icono: "🔁",
  titulo: "Repetir con while y for",
  nivel: "Intermedio",
  objetivos: [
    "Elegir entre while y for según sepas o no cuántas vueltas hay",
    "Usar un contador y un acumulador para sumar dentro de un bucle",
    "Reconocer y cortar un bucle infinito",
  ],
  lecciones: [
    { titulo: "while: repetir mientras se cumpla algo", video: {"id":"0h_srypSheg","t":"Bucles while: qué son y cómo funcionan · Retro (4:28)"}, html: `
      <p class="idea">Un <strong>bucle</strong> repite un bloque de código. <strong>while</strong> lo repite <strong>mientras</strong> la condición sea verdadera; cuando deja de serlo, sigue con lo de abajo.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int caramelos = 5;
    while (caramelos &gt; 0) {
        std::cout &lt;&lt; "Vendo uno. Quedan " &lt;&lt; caramelos - 1 &lt;&lt; "\\n";
        caramelos = caramelos - 1;
    }
    std::cout &lt;&lt; "Se terminaron\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Vendo uno. Quedan 4
Vendo uno. Quedan 3
Vendo uno. Quedan 2
Vendo uno. Quedan 1
Vendo uno. Quedan 0
Se terminaron
</code></pre>
      <pre><code>Cómo piensa el while:
  ¿caramelos &gt; 0?  sí → hace el bloque → vuelve a preguntar
  ¿caramelos &gt; 0?  sí → hace el bloque → vuelve a preguntar
  ...
  ¿caramelos &gt; 0?  no → sale del bucle y sigue abajo
</code></pre>
      <p><strong>Algo adentro tiene que cambiar la condición.</strong> Si te olvidás de restar caramelos, la condición es verdadera para siempre: es un <strong>bucle infinito</strong> y el programa no termina. Se corta con Ctrl+C (o el botón "Stop" en OnlineGDB).</p>
      <p><strong>Atajos:</strong> caramelos = caramelos - 1 se puede escribir caramelos-- y x = x + 1 como x++. También x += 5 suma 5.</p>
      <p><strong>while es ideal cuando no sabés cuántas vueltas hay:</strong> por ejemplo, pedir un número hasta que el usuario escriba uno válido.</p>
      <p>Por ejemplo, Lucía hizo un programa que pide la clave hasta que sea correcta. No sabe cuántas veces se va a equivocar la persona, así que usó while.</p>` },
    { titulo: "for: repetir una cantidad conocida", video: {"id":"7bO5wlqeeEI","t":"Bucles for: qué son y cómo funcionan · Retro (3:03)"}, html: `
      <p class="idea"><strong>for</strong> junta en una línea las tres partes de un bucle con contador: <strong>dónde empieza, hasta cuándo sigue y cuánto avanza</strong>. Es ideal cuando sabés cuántas vueltas hay.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    for (int i = 1; i &lt;= 5; i++) {
        std::cout &lt;&lt; "3 x " &lt;&lt; i &lt;&lt; " = " &lt;&lt; 3 * i &lt;&lt; "\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
</code></pre>
      <table>
        <tr><th>Parte</th><th>En el ejemplo</th><th>Qué hace</th></tr>
        <tr><td>Inicio</td><td>int i = 1</td><td>Crea el contador, una sola vez</td></tr>
        <tr><td>Condición</td><td>i &lt;= 5</td><td>Se pregunta antes de cada vuelta</td></tr>
        <tr><td>Avance</td><td>i++</td><td>Se hace al final de cada vuelta</td></tr>
      </table>
      <p>Un <strong>contador</strong> es una variable que va contando las vueltas. Por costumbre se llama i.</p>
      <p><strong>Contar vueltas:</strong> for (int i = 0; i &lt; 5; i++) también da 5 vueltas (0, 1, 2, 3, 4). Empezar en 0 es lo más común en C++, y lo vas a ver con los vectores.</p>
      <p><strong>while o for:</strong> si sabés cuántas veces (5 productos, 10 días), for. Si depende de algo que pasa adentro (hasta que el usuario escriba 0), while.</p>
      <p>Por ejemplo, Lucía imprimió la lista de precios de 1 a 10 unidades de un producto con un for: 3 líneas de código en lugar de 10 cout.</p>` },
    { titulo: "Acumular: sumar dentro del bucle", html: `
      <p class="idea">Un <strong>acumulador</strong> es una variable que empieza en 0 y en cada vuelta le sumás algo. Al final tiene el total.</p>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int cantidad;
    std::cin &gt;&gt; cantidad;
    double total = 0;
    for (int i = 1; i &lt;= cantidad; i++) {
        double venta;
        std::cin &gt;&gt; venta;
        total += venta;
    }
    std::cout &lt;&lt; "Ventas del día: $" &lt;&lt; total &lt;&lt; "\\n";
    std::cout &lt;&lt; "Promedio por venta: $" &lt;&lt; total / cantidad &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Entrada:
4
1500
800
2200
500
</code></pre>
      <pre><code>Salida:
Ventas del día: $5000
Promedio por venta: $1250
</code></pre>
      <pre><code>Vuelta   venta   total
inicio     -        0
   1     1500    1500
   2      800    2300
   3     2200    4500
   4      500    5000
</code></pre>
      <p><strong>La tabla de seguimiento</strong> (como la de arriba) es la mejor herramienta para entender un bucle: anotás cuánto vale cada variable en cada vuelta, con papel y lápiz.</p>
      <p><strong>El acumulador va afuera del bucle:</strong> si escribís double total = 0 adentro, se vuelve a 0 en cada vuelta y al final solo tenés la última venta.</p>
      <p><strong>break</strong> corta el bucle antes de tiempo: por ejemplo, si encontrás lo que buscabas.</p>
      <p>Por ejemplo, Lucía cargó las ventas de la mañana y el programa le dio el total. Antes lo sumaba con la calculadora y a veces se salteaba una.</p>` },
  ],
  practica: [
    "Escribí un for que muestre la tabla del 7 del 1 al 10 y anotá el último renglón que muestra.",
    "Hacé la tabla de seguimiento a mano del programa de ventas con 3 ventas (1000, 2500 y 500) y compará tu total con el que da el programa.",
    "Escribí un while que pida números y los sume hasta que el usuario escriba 0. Probalo con 5, 10, 3 y 0, y anotá el total.",
  ],
  recursos: [
    { t: "LearnCpp: bucles y while (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-loops-and-while-statements/" },
    { t: "LearnCpp: la instrucción for (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/for-statements/" },
    { t: "Microsoft Learn: la instrucción for en C++", url: "https://learn.microsoft.com/es-es/cpp/cpp/for-statement-cpp" },
  ],
  quiz: [
    { q: "Si caramelos vale 5 y el while resta 1 por vuelta mientras caramelos > 0, ¿cuántas vueltas da?", opciones: ["4","6","5","Infinitas"], correcta: 2, explicacion: "De 5 a 1 son 5 vueltas; con 0 la condición es falsa. 6 tienta si contás el 0, pero ahí ya no entra." },
    { q: "Tu programa no termina nunca y repite lo mismo. ¿Qué pasó?", opciones: ["Un bucle infinito: nada adentro cambia la condición","La compu es lenta","Falta #include","El for está bien"], correcta: 0, explicacion: "Si la condición nunca se vuelve falsa, no sale. \"La compu es lenta\" tienta, pero esperar no lo arregla." },
    { q: "Tenés que pedir una clave hasta que la escriban bien. ¿Qué bucle usás?", opciones: ["for de 1 a 3","Ninguno, un if alcanza","for de 1 a 100","while, porque no sabés cuántos intentos hay"], correcta: 3, explicacion: "No sabés cuántas vueltas: while. El for tienta, pero fija la cantidad de antemano." },
    { q: "Si escribís x += 5 y x valía 10, ¿cuánto vale x?", opciones: ["5","15","10","105"], correcta: 1, explicacion: "+= suma y guarda. 5 tienta si lo leés como \"x es 5\", pero suma a lo que había." },
    { q: "En for (int i = 1; i <= 5; i++), ¿cuándo se hace i++?", opciones: ["Antes de empezar","Una sola vez","Al final de cada vuelta","Nunca"], correcta: 2, explicacion: "El avance va después del bloque. \"Antes de empezar\" tienta, pero eso es el inicio (int i = 1)." },
    { q: "Si escribís for (int i = 0; i < 5; i++), ¿qué valores toma i?", opciones: ["0, 1, 2, 3 y 4","1, 2, 3, 4 y 5","0 a 5","Solo 5"], correcta: 0, explicacion: "Empieza en 0 y para antes de 5. \"1 a 5\" tienta, pero arranca en 0." },
    { q: "Tenés que mostrar los precios de 1 a 10 unidades. ¿Qué bucle conviene?", opciones: ["while infinito","Ninguno","Un if","for, porque sabés que son 10"], correcta: 3, explicacion: "Cantidad conocida: for. while tienta, pero for junta todo en una línea." },
    { q: "Querés sumar todas las ventas en un bucle. ¿Dónde creás total = 0?", opciones: ["Adentro del bucle","Afuera del bucle, antes de empezar","Después del bucle","No hace falta crearlo"], correcta: 1, explicacion: "Adentro se vuelve a 0 en cada vuelta. Adentro tienta por estar cerca de la suma, pero perdés lo acumulado." },
    { q: "Si sumás 1500, 800 y 2200 con un acumulador que empieza en 0, ¿cuánto vale al final?", opciones: ["2200","1500","4500","0"], correcta: 2, explicacion: "0 + 1500 + 800 + 2200 = 4500. 2200 tienta, pero ese es el último sumado, no el total." },
    { q: "Tu bucle no hace lo que esperás. ¿Qué herramienta te ayuda a entenderlo?", opciones: ["Una tabla de seguimiento con el valor de cada variable por vuelta","Borrarlo y empezar de nuevo","Correrlo 100 veces","Agregar más llaves"], correcta: 0, explicacion: "Ver cada vuelta muestra dónde se desvía. Correrlo muchas veces tienta, pero da el mismo resultado." },
    { q: "Buscás un producto en una lista y ya lo encontraste. ¿Qué usás para salir del bucle?", opciones: ["return 0 siempre","else","%","break"], correcta: 3, explicacion: "break corta el bucle y sigue abajo. return tienta, pero termina toda la función." },
    { q: "Si escribís caramelos--, ¿qué hace?", opciones: ["Lo pone en 0","Le resta 1 a caramelos","Le suma 1","Lo borra"], correcta: 1, explicacion: "-- resta 1. Sumar tienta por confusión con ++, que es el contrario." },
  ],
},
{
  id: "funciones",
  icono: "🧩",
  titulo: "Funciones: código que se reusa",
  nivel: "Intermedio",
  objetivos: [
    "Escribir una función con parámetros y un valor de retorno",
    "Decidir cuándo una función devuelve algo y cuándo es void",
    "Usar un parámetro por referencia (&) para modificar una variable",
  ],
  lecciones: [
    { titulo: "Crear y llamar una función", video: {"id":"Lm5Q6cEsvtc","t":"Tutorial de C++: funciones · Programar Facil (9:27)"}, html: `
      <p class="idea">Una <strong>función</strong> es un bloque de código con nombre que hace una tarea. La escribís una vez y la <strong>llamás</strong> todas las veces que necesites.</p>
      <pre><code>#include &lt;iostream&gt;

double conIva(double precio) {
    return precio * 1.21;
}

int main() {
    std::cout &lt;&lt; conIva(1000) &lt;&lt; "\\n";
    std::cout &lt;&lt; conIva(250) &lt;&lt; "\\n";
    double total = conIva(1000) + conIva(250);
    std::cout &lt;&lt; "Total: " &lt;&lt; total &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
1210
302.5
Total: 1512.5
</code></pre>
      <pre><code>double   conIva   (double precio)   { return precio * 1.21; }
  │        │            │                     │
qué tipo  nombre   lo que recibe        lo que devuelve
devuelve           (parámetro)
</code></pre>
      <p>Un <strong>parámetro</strong> es un dato que la función recibe para trabajar. El valor que le pasás al llamarla (1000, 250) se llama <strong>argumento</strong>. <strong>return</strong> devuelve el resultado a quien la llamó.</p>
      <p><strong>Va arriba de main:</strong> el compilador lee de arriba hacia abajo, y tiene que conocer la función antes de que la uses.</p>
      <p><strong>¿Por qué usar funciones?</strong> Si el IVA cambia, lo corregís en un solo lugar. Y main se lee como una lista de pasos claros.</p>
      <p>Por ejemplo, Lucía calculaba el IVA en 6 lugares distintos de su programa y en uno se equivocó (puso 1.12). Con una sola función conIva, ese error ya no puede pasar.</p>` },
    { titulo: "Devolver algo o solo hacer algo", html: `
      <p class="idea">Algunas funciones <strong>calculan y devuelven</strong> un valor (tienen un tipo, como double o bool). Otras solo <strong>hacen algo</strong>, como mostrar en pantalla, y no devuelven nada: son <strong>void</strong>.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

bool esPar(int n) {
    return n % 2 == 0;
}

void mostrarLinea(std::string texto) {
    std::cout &lt;&lt; "--- " &lt;&lt; texto &lt;&lt; " ---\\n";
}

int main() {
    mostrarLinea("Números del 1 al 4");
    for (int i = 1; i &lt;= 4; i++) {
        if (esPar(i)) {
            std::cout &lt;&lt; i &lt;&lt; " es par\\n";
        } else {
            std::cout &lt;&lt; i &lt;&lt; " es impar\\n";
        }
    }
    mostrarLinea("Fin");
    return 0;
}
</code></pre>
      <pre><code>Salida:
--- Números del 1 al 4 ---
1 es impar
2 es par
3 es impar
4 es par
--- Fin ---
</code></pre>
      <table>
        <tr><th>Tipo de función</th><th>Lleva return</th><th>Se usa así</th></tr>
        <tr><td>Devuelve un valor (int, double, bool, std::string)</td><td>Sí, con un valor</td><td>Dentro de una cuenta, un if o un cout</td></tr>
        <tr><td>void</td><td>No hace falta</td><td>Sola, como una instrucción</td></tr>
      </table>
      <p><strong>Una función, una tarea:</strong> si su nombre necesita "y" (calcularYMostrar), conviene partirla en dos.</p>
      <p><strong>Las variables de una función son suyas:</strong> lo que declarás adentro no existe afuera. Eso se llama <strong>alcance</strong> (scope en inglés), y es por eso que el error "not declared in this scope" del primer módulo dice scope.</p>
      <p>Por ejemplo, Lucía armó una función void para imprimir el encabezado del ticket y otra double para el total. Su main quedó de 6 líneas.</p>` },
    { titulo: "Copia o referencia", html: `
      <p class="idea">Normalmente una función recibe una <strong>copia</strong> del dato: si la cambia, el original queda igual. Con <strong>&amp;</strong> recibe una <strong>referencia</strong>, otro nombre para la misma variable, y puede cambiar el original.</p>
      <pre><code>#include &lt;iostream&gt;

void venderCopia(int stock) {
    stock = stock - 1;
    std::cout &lt;&lt; "Adentro de la copia: " &lt;&lt; stock &lt;&lt; "\\n";
}

void venderReferencia(int&amp; stock) {
    stock = stock - 1;
}

int main() {
    int galletitas = 10;
    venderCopia(galletitas);
    std::cout &lt;&lt; "Después de la copia: " &lt;&lt; galletitas &lt;&lt; "\\n";
    venderReferencia(galletitas);
    std::cout &lt;&lt; "Después de la referencia: " &lt;&lt; galletitas &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Adentro de la copia: 9
Después de la copia: 10
Después de la referencia: 9
</code></pre>
      <table>
        <tr><th>Parámetro</th><th>Recibe</th><th>¿Cambia el original?</th></tr>
        <tr><td>int stock</td><td>Una copia del valor</td><td>No</td></tr>
        <tr><td>int&amp; stock</td><td>Una referencia a la variable</td><td>Sí</td></tr>
      </table>
      <p><strong>Cuándo usar &amp;:</strong> cuando la función tiene que modificar la variable de quien la llama. Si solo tiene que calcular algo, mejor devolver el resultado con return: es más fácil de seguir.</p>
      <p><strong>Con textos y listas grandes</strong> se suele usar const std::string&amp; texto: referencia (no copia, más rápido) pero const, que impide cambiarla.</p>
      <p>Por ejemplo, Lucía escribió una función para descontar stock y el número nunca bajaba. Le faltaba el &amp;: la función restaba en una copia.</p>` },
  ],
  practica: [
    "Escribí una función double conDescuento(double precio, double porcentaje) y probala con 1000 y 10. Anotá el resultado (tiene que dar 900).",
    "Escribí una función bool esMayor(int edad) y usala en un if con 3 edades distintas. Anotá qué mostró cada una.",
    "Corré el ejemplo de copia y referencia, sacale el & a la segunda función y anotá qué cambia en la salida.",
  ],
  recursos: [
    { t: "LearnCpp: introducción a las funciones (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/" },
    { t: "Microsoft Learn: funciones en C++", url: "https://learn.microsoft.com/es-es/cpp/cpp/functions-cpp" },
    { t: "OnlineGDB: compilador de C++ en el navegador, sin instalar nada", url: "https://www.onlinegdb.com/online_c++_compiler" },
  ],
  quiz: [
    { q: "Calculás el IVA en 6 lugares del programa. ¿Qué conviene?", opciones: ["Copiar y pegar la cuenta","Hacer 6 programas","Escribir una función y llamarla en los 6 lugares","Calcularlo a mano"], correcta: 2, explicacion: "Una función evita repetir y equivocarse. Copiar y pegar tienta por rápido, pero si cambia el IVA tenés que corregir 6 lugares." },
    { q: "Si llamás conIva(1000) y la función devuelve precio * 1.21, ¿qué valor obtenés?", opciones: ["1210","1000","1.21","121"], correcta: 0, explicacion: "1000 × 1.21 = 1210. 1000 tienta, pero ese es el argumento antes de la cuenta." },
    { q: "Tu función está debajo de main y el compilador dice que no la conoce. ¿Qué hacés?", opciones: ["Le cambiás el nombre","Borrás main","Agregás otro return","La movés arriba de main"], correcta: 3, explicacion: "El compilador lee de arriba abajo. Cambiar el nombre tienta, pero el problema es el orden." },
    { q: "En conIva(250), ¿qué es el 250?", opciones: ["El nombre de la función","El argumento que le pasás al llamarla","Lo que devuelve","El tipo"], correcta: 1, explicacion: "Es el valor que entra. \"Lo que devuelve\" tienta, pero eso es 302.5." },
    { q: "Tenés una función que solo muestra el encabezado del ticket. ¿Qué tipo le ponés?", opciones: ["double","bool","void","int siempre"], correcta: 2, explicacion: "No devuelve nada: void. double tienta por costumbre, pero no hay ningún valor que devolver." },
    { q: "Si esPar(4) devuelve n % 2 == 0, ¿qué devuelve?", opciones: ["true","false","0","4"], correcta: 0, explicacion: "4 % 2 es 0, y 0 == 0 es verdadero. 0 tienta porque es el resto, pero la función devuelve la comparación." },
    { q: "Tu función se llama calcularYMostrarYGuardar. ¿Qué te dice eso?", opciones: ["Que está perfecta","Que le falta un return","Que tiene que ser void","Que conviene partirla en funciones más chicas"], correcta: 3, explicacion: "Una función, una tarea. \"Está perfecta\" tienta porque funciona, pero cuesta entenderla y arreglarla." },
    { q: "Declaraste una variable dentro de una función y la querés usar en main. ¿Qué pasa?", opciones: ["Funciona igual","Da error: esa variable solo existe dentro de la función","Vale 0","Se copia sola"], correcta: 1, explicacion: "Su alcance es la función. \"Funciona igual\" tienta, pero el compilador dice \"not declared in this scope\"." },
    { q: "Tu función resta stock pero el número del main nunca baja. ¿Qué falta?", opciones: ["Un return 0","Otro #include","El & en el parámetro, para recibir una referencia","Un else"], correcta: 2, explicacion: "Sin & la función cambia una copia. return 0 tienta, pero no conecta la copia con el original." },
    { q: "Si una función recibe int x y hace x = 99, ¿qué pasa con la variable original?", opciones: ["Queda igual: la función cambió una copia","Pasa a valer 99","Se borra","Da error"], correcta: 0, explicacion: "Sin & hay copia. \"Pasa a 99\" tienta, pero eso solo pasa con int& x." },
    { q: "Una función solo calcula un total. ¿Qué es más claro?", opciones: ["Usar & para todo","Mostrarlo con cout adentro siempre","Guardarlo en un comentario","Devolverlo con return"], correcta: 3, explicacion: "return deja ver qué sale de la función. & tienta porque también funciona, pero es más difícil de seguir." },
    { q: "Tenés que pasar un texto largo a una función que solo lo lee. ¿Qué parámetro conviene?", opciones: ["std::string& texto, para cambiarlo","const std::string& texto","char texto","int texto"], correcta: 1, explicacion: "Referencia sin copia y const para no cambiarlo. Sin const tienta, pero permite modificarlo sin querer." },
  ],
},
{
  id: "vectores",
  icono: "📋",
  titulo: "Listas con vector",
  nivel: "Intermedio",
  objetivos: [
    "Crear un vector, agregarle elementos y saber cuántos tiene",
    "Recorrer un vector con for para sumar, buscar o encontrar el mayor",
    "Evitar salir de los límites usando índices de 0 a size() - 1",
  ],
  lecciones: [
    { titulo: "Qué es un vector", html: `
      <p class="idea">Un <strong>vector</strong> es una lista de datos del mismo tipo, uno detrás del otro, con un solo nombre. Cada elemento tiene un <strong>índice</strong>: su posición, que empieza en 0.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
    std::vector&lt;int&gt; ventas = {1500, 800, 2200};
    ventas.push_back(500);
    std::cout &lt;&lt; "Hay " &lt;&lt; ventas.size() &lt;&lt; " ventas\\n";
    std::cout &lt;&lt; "La primera: " &lt;&lt; ventas[0] &lt;&lt; "\\n";
    std::cout &lt;&lt; "La última: " &lt;&lt; ventas[3] &lt;&lt; "\\n";
    ventas[1] = 900;
    std::cout &lt;&lt; "La segunda corregida: " &lt;&lt; ventas[1] &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Hay 4 ventas
La primera: 1500
La última: 500
La segunda corregida: 900
</code></pre>
      <pre><code>ventas:   [ 1500 |  900 | 2200 |  500 ]
índice:      0      1      2      3
size() = 4   →   el último índice es 3
</code></pre>
      <table>
        <tr><th>Escribís</th><th>Hace</th></tr>
        <tr><td>std::vector&lt;int&gt; v = {1, 2, 3};</td><td>Crea un vector de enteros con 3 elementos (necesita #include &lt;vector&gt;)</td></tr>
        <tr><td>v.push_back(4);</td><td>Agrega un elemento al final</td></tr>
        <tr><td>v.size()</td><td>Cuántos elementos tiene</td></tr>
        <tr><td>v[0]</td><td>El primer elemento</td></tr>
      </table>
      <p>Entre &lt; &gt; va el tipo de lo que guarda: std::vector&lt;double&gt; para precios, std::vector&lt;std::string&gt; para nombres.</p>
      <p><strong>El índice empieza en 0:</strong> el primer elemento es v[0] y el último es v[size() - 1]. Es la causa número uno de errores con listas.</p>
      <p>Por ejemplo, Lucía guardaba las ventas en 30 variables (venta1, venta2...). Con un vector, una sola variable guarda todas, y crece sola con push_back.</p>` },
    { titulo: "Recorrer un vector", html: `
      <p class="idea">Para hacer algo con cada elemento, recorrés el vector con un bucle. El <strong>for de rango</strong> es el más simple: "para cada elemento de la lista".</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
    std::vector&lt;double&gt; precios = {850, 1200, 450, 3000, 700};
    double suma = 0;
    double mayor = precios[0];
    for (double p : precios) {
        suma += p;
        if (p &gt; mayor) {
            mayor = p;
        }
    }
    std::cout &lt;&lt; "Suma: " &lt;&lt; suma &lt;&lt; "\\n";
    std::cout &lt;&lt; "Promedio: " &lt;&lt; suma / precios.size() &lt;&lt; "\\n";
    std::cout &lt;&lt; "El más caro: " &lt;&lt; mayor &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Suma: 6200
Promedio: 1240
El más caro: 3000
</code></pre>
      <table>
        <tr><th>Forma</th><th>Cuándo</th></tr>
        <tr><td>for (double p : precios)</td><td>Cuando solo necesitás cada valor</td></tr>
        <tr><td>for (std::size_t i = 0; i &lt; precios.size(); i++)</td><td>Cuando necesitás la posición i</td></tr>
        <tr><td>for (double&amp; p : precios)</td><td>Cuando querés cambiar cada elemento (con &amp;, como en funciones)</td></tr>
      </table>
      <p><strong>std::size_t</strong> es un tipo de entero sin signo (nunca negativo) que se usa para tamaños y posiciones. Usarlo en el for con índice evita una advertencia del compilador al comparar con size().</p>
      <p><strong>El truco del mayor:</strong> empezás suponiendo que el mayor es el primero y lo reemplazás cada vez que encontrás uno más grande. Con el menor, igual pero con &lt;.</p>
      <p>Por ejemplo, Lucía quería saber cuál fue su mejor día de la semana. Cargó las 7 ventas en un vector y en 6 líneas tuvo la suma, el promedio y el mayor.</p>` },
    { titulo: "Cuidado con los límites", html: `
      <p class="idea">Si pedís un índice que no existe (como v[10] en un vector de 4), C++ <strong>no te avisa</strong>: lee memoria que no es tuya y el resultado es impredecible. Usá <strong>.at()</strong> mientras aprendés.</p>
      <pre><code>std::vector&lt;int&gt; v = {10, 20, 30, 40};
v[4]      // ✗ no existe: comportamiento indefinido (puede dar basura o colgarse)
v.at(4)   // ✗ no existe, pero corta el programa con un error claro: out_of_range
v.at(3)   // ✓ el último: 40
</code></pre>
      <p><strong>Comportamiento indefinido</strong> quiere decir que C++ no garantiza qué pasa: a veces parece funcionar, a veces muestra un número raro y a veces el programa se cierra. Es de los errores más difíciles de encontrar.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
    std::vector&lt;int&gt; v = {10, 20, 30, 40};
    for (std::size_t i = 0; i &lt; v.size(); i++) {
        std::cout &lt;&lt; "v.at(" &lt;&lt; i &lt;&lt; ") = " &lt;&lt; v.at(i) &lt;&lt; "\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
v.at(0) = 10
v.at(1) = 20
v.at(2) = 30
v.at(3) = 40
</code></pre>
      <table>
        <tr><th>Error típico</th><th>Arreglo</th></tr>
        <tr><td>for (... i &lt;= v.size() ...)</td><td>Usar &lt;, no &lt;=: el último índice es size() - 1</td></tr>
        <tr><td>Pedir v[0] en un vector vacío</td><td>Antes, preguntar if (!v.empty())</td></tr>
        <tr><td>Empezar a contar en 1</td><td>Los índices empiezan en 0</td></tr>
      </table>
      <p>Por ejemplo, el programa de Lucía mostraba un número gigante al final de la lista. Tenía &lt;= en el for; al cambiarlo por &lt;, el número raro desapareció.</p>` },
  ],
  practica: [
    "Creá un vector con 5 notas, agregale una sexta con push_back y mostrá cuántas hay con size(). Anotá el número.",
    "Recorré un vector de 7 ventas y mostrá la suma, el promedio y la menor. Comprobá la suma con la calculadora.",
    "Cambiá en tu programa v[i] por v.at(i) y poné <= en el for a propósito. Anotá qué mensaje de error aparece.",
  ],
  recursos: [
    { t: "LearnCpp: introducción a std::vector (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-stdvector-and-list-constructors/" },
    { t: "Microsoft Learn: la clase vector", url: "https://learn.microsoft.com/es-es/cpp/standard-library/vector-class" },
    { t: "cppreference: std::vector, referencia completa (en inglés)", url: "https://en.cppreference.com/w/cpp/container/vector" },
  ],
  quiz: [
    { q: "Tenés las ventas de 30 días. ¿Qué conviene usar?", opciones: ["30 variables: venta1, venta2...","Un solo int con la suma","Un std::vector con las 30 ventas","Un comentario"], correcta: 2, explicacion: "Un vector guarda la lista con un nombre. 30 variables tienta porque funciona, pero no se pueden recorrer con un bucle." },
    { q: "Si ventas = {1500, 800, 2200}, ¿qué es ventas[0]?", opciones: ["1500","800","2200","Da error"], correcta: 0, explicacion: "El índice empieza en 0. 800 tienta si contás desde 1." },
    { q: "Tenés un vector con 4 elementos. ¿Cuál es el último índice?", opciones: ["4","0","5","3"], correcta: 3, explicacion: "Es size() - 1. 4 tienta porque es la cantidad, pero el conteo arranca en 0." },
    { q: "Querés agregar una venta al final del vector. ¿Qué escribís?", opciones: ["ventas[size] = 500;","ventas.push_back(500);","ventas + 500;","ventas.size(500);"], correcta: 1, explicacion: "push_back agrega al final. Asignar en [size] tienta, pero ese lugar no existe todavía." },
    { q: "Si querés un vector de nombres, ¿cómo lo declarás?", opciones: ["std::vector<int> nombres;","std::string<vector> nombres;","std::vector<std::string> nombres;","vector nombres;"], correcta: 2, explicacion: "Entre < > va el tipo de lo que guarda. int tienta por costumbre, pero los nombres son texto." },
    { q: "Tenés que sumar todos los precios y no necesitás la posición. ¿Qué for usás?", opciones: ["for (double p : precios)","for (int i = 1; i <= 5; i++)","while (true)","for (double& p : precios) siempre"], correcta: 0, explicacion: "El for de rango es el más simple. El de índice tienta, pero acá no hace falta la posición." },
    { q: "Si buscás el mayor, ¿con qué valor empieza la variable mayor?", opciones: ["Con 0 siempre","Con 1000000","Con el tamaño del vector","Con el primer elemento del vector"], correcta: 3, explicacion: "Empezar con el primero funciona con cualquier lista. 0 tienta, pero falla si todos los números son negativos." },
    { q: "Querés aumentar un 10% cada precio del vector. ¿Qué for usás?", opciones: ["for (double p : precios)","for (double& p : precios)","for (int p : precios)","Ninguno"], correcta: 1, explicacion: "Con & cambiás los elementos de verdad. Sin & tienta por ser igual, pero cambia copias." },
    { q: "Tu for usa i <= v.size() y aparece un número raro al final. ¿Qué pasa?", opciones: ["El vector está vacío","Falta push_back","Lee un índice que no existe: hay que usar <","Es normal"], correcta: 2, explicacion: "Con <= se pasa uno. \"Es normal\" tienta porque no siempre falla, pero es comportamiento indefinido." },
    { q: "Si pedís v.at(10) en un vector de 4 elementos, ¿qué pasa?", opciones: ["El programa se corta con un error out_of_range","Devuelve 0","Devuelve el último","Agrega elementos"], correcta: 0, explicacion: "at() controla los límites. \"Devuelve 0\" tienta, pero C++ no inventa valores con at." },
    { q: "Si pedís v[10] en un vector de 4 elementos, ¿qué pasa?", opciones: ["Error claro siempre","Devuelve 0 siempre","Agrega 6 elementos","Comportamiento indefinido: puede dar basura o colgarse"], correcta: 3, explicacion: "[] no controla nada. \"Error claro\" tienta, pero eso es solo con at()." },
    { q: "Antes de leer v[0], ¿qué conviene preguntar si el vector puede estar vacío?", opciones: ["if (v[0] == 0)","if (!v.empty())","if (v.size() == 100)","Nada"], correcta: 1, explicacion: "Si está vacío, v[0] no existe. Preguntar v[0] == 0 tienta, pero ya lee lo que no existe." },
  ],
},
{
  id: "structs",
  icono: "🗃️",
  titulo: "Textos y structs",
  nivel: "Intermedio",
  objetivos: [
    "Usar las operaciones básicas de std::string: largo, unir, comparar y una letra",
    "Agrupar datos relacionados en un struct",
    "Guardar una lista de structs en un vector y recorrerla",
  ],
  lecciones: [
    { titulo: "Trabajar con textos", html: `
      <p class="idea"><strong>std::string</strong> guarda texto y trae herramientas: saber cuánto mide, unir textos, comparar y mirar una letra.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    std::string nombre = "Lucia";
    std::string negocio = "Kiosco " + nombre;
    std::cout &lt;&lt; negocio &lt;&lt; "\\n";
    std::cout &lt;&lt; "Letras: " &lt;&lt; negocio.size() &lt;&lt; "\\n";
    std::cout &lt;&lt; "Primera letra: " &lt;&lt; negocio[0] &lt;&lt; "\\n";
    std::cout &lt;&lt; "Primeras 6: " &lt;&lt; negocio.substr(0, 6) &lt;&lt; "\\n";
    if (nombre == "Lucia") {
        std::cout &lt;&lt; "Hola, Lucia\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
Kiosco Lucia
Letras: 12
Primera letra: K
Primeras 6: Kiosco
Hola, Lucia
</code></pre>
      <table>
        <tr><th>Escribís</th><th>Hace</th></tr>
        <tr><td>a + b</td><td>Une dos textos (concatenar)</td></tr>
        <tr><td>t.size()</td><td>Cuántos caracteres tiene</td></tr>
        <tr><td>t[0]</td><td>El primer carácter (un char); los índices empiezan en 0, como en los vectores</td></tr>
        <tr><td>t.substr(desde, cuántos)</td><td>Un pedazo del texto</td></tr>
        <tr><td>a == b</td><td>Compara si son iguales, letra por letra</td></tr>
      </table>
      <p><strong>Ojo con las tildes:</strong> en C++ una letra con tilde, como la í, ocupa más de un lugar en el texto. Por eso este ejemplo usa "Lucia" sin tilde: así size() cuenta lo que esperás.</p>
      <p><strong>Mayúsculas:</strong> "lucia" == "Lucia" es falso. Las comparaciones distinguen mayúsculas de minúsculas.</p>
      <p>Un string se parece mucho a un vector de letras: tiene size(), índices desde 0 y se puede recorrer con for (char c : texto).</p>
      <p>Por ejemplo, Lucía quería que el ticket mostrara solo las primeras 10 letras de cada producto para que entrara en el papel. Usó substr(0, 10).</p>` },
    { titulo: "struct: juntar datos que van juntos", video: {"id":"ObUUe9ujYoY","t":"Structs en C++ explicado · Bro Code (5:01)"}, html: `
      <p class="idea">Un <strong>struct</strong> crea un tipo nuevo que agrupa varios datos con nombre. Un producto tiene nombre, precio y stock: con un struct, esos tres viajan juntos.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

struct Producto {
    std::string nombre;
    double precio;
    int stock;
};

int main() {
    Producto p = {"Alfajor", 850, 24};
    p.stock = p.stock - 4;
    std::cout &lt;&lt; p.nombre &lt;&lt; " $" &lt;&lt; p.precio &lt;&lt; " (quedan " &lt;&lt; p.stock &lt;&lt; ")\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Alfajor $850 (quedan 20)
</code></pre>
      <pre><code>Producto p
┌──────────────────────┐
│ nombre: "Alfajor"    │
│ precio: 850          │
│ stock:  20           │
└──────────────────────┘
p.nombre  p.precio  p.stock   ← con el punto entrás a cada dato
</code></pre>
      <p>Cada dato de adentro se llama <strong>miembro</strong> (o campo). Se accede con un <strong>punto</strong>: p.precio.</p>
      <p><strong>Ojo con el punto y coma</strong> después de la llave que cierra el struct: es obligatorio, y olvidarlo da un error confuso.</p>
      <p><strong>Por convención,</strong> el nombre del struct empieza con mayúscula (Producto) y las variables con minúscula (p, alfajor).</p>
      <p>Por ejemplo, Lucía tenía tres vectores separados (nombres, precios, stocks) y al borrar un producto se le desordenaban. Con un struct, cada producto es una sola cosa.</p>` },
    { titulo: "Una lista de structs", html: `
      <p class="idea">Un <strong>vector de structs</strong> es como una planilla: cada elemento es una fila (un producto) y cada miembro una columna.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;

struct Producto {
    std::string nombre;
    double precio;
    int stock;
};

int main() {
    std::vector&lt;Producto&gt; kiosco = {
        {"Alfajor", 850, 20},
        {"Chicle", 150, 3},
        {"Agua", 1200, 12},
    };
    kiosco.push_back({"Galletitas", 1500, 2});
    double valorTotal = 0;
    for (const Producto&amp; p : kiosco) {
        valorTotal += p.precio * p.stock;
        if (p.stock &lt; 5) {
            std::cout &lt;&lt; "Reponer: " &lt;&lt; p.nombre &lt;&lt; "\\n";
        }
    }
    std::cout &lt;&lt; "Mercadería en el kiosco: $" &lt;&lt; valorTotal &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Reponer: Chicle
Reponer: Galletitas
Mercadería en el kiosco: $34850
</code></pre>
      <table>
        <tr><th>nombre</th><th>precio</th><th>stock</th><th>precio × stock</th></tr>
        <tr><td>Alfajor</td><td>850</td><td>20</td><td>17000</td></tr>
        <tr><td>Chicle</td><td>150</td><td>3</td><td>450</td></tr>
        <tr><td>Agua</td><td>1200</td><td>12</td><td>14400</td></tr>
        <tr><td>Galletitas</td><td>1500</td><td>2</td><td>3000</td></tr>
      </table>
      <p><strong>const Producto&amp; p</strong> en el for: referencia (no copia cada producto) y const (solo lo leemos). Es lo mismo que viste en funciones con const std::string&amp;.</p>
      <p><strong>Las funciones también reciben structs:</strong> void mostrar(const Producto&amp; p) imprime uno, y la podés llamar dentro del for.</p>
      <p>Por ejemplo, Lucía cargó sus 40 productos y el programa le armó la lista de qué reponer en un segundo. Antes recorría las góndolas con una libreta.</p>` },
  ],
  practica: [
    "Escribí un programa que pida tu nombre y muestre cuántas letras tiene y cuál es la primera. Probalo con un nombre sin tildes y anotá el resultado.",
    "Creá un struct Alumno con nombre y nota, cargá 3 alumnos en un vector y mostrá el promedio. Comprobalo con la calculadora.",
    "Agregá al ejemplo del kiosco un producto con stock 1 y anotá si aparece en \"Reponer\" y cuánto cambia el total.",
  ],
  recursos: [
    { t: "cppreference: std::string, referencia completa (en inglés)", url: "https://en.cppreference.com/w/cpp/string/basic_string" },
    { t: "LearnCpp: structs y sus miembros (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-structs-members-and-member-selection/" },
    { t: "Microsoft Learn: struct en C++", url: "https://learn.microsoft.com/es-es/cpp/cpp/struct-cpp" },
  ],
  quiz: [
    { q: "Si escribís std::string a = \"Kiosco \" + nombre; con nombre = \"Lucia\", ¿qué guarda a?", opciones: ["KioscoLucia","Lucia Kiosco","Kiosco Lucia","Da error"], correcta: 2, explicacion: "+ une en orden, y el espacio venía en \"Kiosco \". KioscoLucia tienta, pero el espacio está dentro de las comillas." },
    { q: "Querés saber cuántas letras tiene un texto. ¿Qué usás?", opciones: ["texto.size()","texto[0]","texto.substr()","texto + 1"], correcta: 0, explicacion: "size() da el largo. texto[0] tienta, pero es solo la primera letra." },
    { q: "Si texto = \"Kiosco\", ¿qué es texto[0]?", opciones: ["o","Kiosco","6","K"], correcta: 3, explicacion: "Índice 0, primera letra. 6 tienta, pero ese es el largo." },
    { q: "Tenés que mostrar solo las primeras 10 letras de un nombre. ¿Qué usás?", opciones: ["nombre.size(10)","nombre.substr(0, 10)","nombre[10]","nombre - 10"], correcta: 1, explicacion: "substr(desde, cuántos) corta un pedazo. nombre[10] tienta, pero es una sola letra." },
    { q: "Si comparás \"lucia\" == \"Lucia\", ¿qué da?", opciones: ["true","Da error","false","Depende del compilador"], correcta: 2, explicacion: "Las mayúsculas cuentan. true tienta porque para una persona es el mismo nombre." },
    { q: "Un producto tiene nombre, precio y stock. ¿Qué conviene usar?", opciones: ["Un struct Producto con esos tres miembros","Tres variables sueltas por producto","Un solo string con todo","Un bool"], correcta: 0, explicacion: "El struct mantiene juntos los datos. Variables sueltas tienta, pero con muchos productos se desordena." },
    { q: "Tenés Producto p. ¿Cómo leés su precio?", opciones: ["p[precio]","precio.p","p->precio siempre","p.precio"], correcta: 3, explicacion: "Con el punto. p[precio] tienta por los vectores, pero en un struct se usa el nombre del miembro." },
    { q: "El compilador da un error raro justo después de tu struct. ¿Qué revisás primero?", opciones: ["El #include <iostream>","El punto y coma después de la llave que cierra el struct","El return 0","El nombre del archivo"], correcta: 1, explicacion: "Ese ; es obligatorio y fácil de olvidar. El include tienta, pero el error está pegado al struct." },
    { q: "Tenés std::vector<Producto> kiosco y querés recorrerlo solo para leer. ¿Qué for usás?", opciones: ["for (Producto p : kiosco) siempre","for (int p : kiosco)","for (const Producto& p : kiosco)","for (std::string p : kiosco)"], correcta: 2, explicacion: "Referencia const: sin copiar y sin cambiar. Sin & tienta porque también funciona, pero copia cada producto." },
    { q: "Si un producto cuesta 1200 y hay 12, ¿cuánto suma al valor de la mercadería?", opciones: ["14400","1212","1200","100"], correcta: 0, explicacion: "precio × stock = 1200 × 12 = 14400. 1212 tienta si sumás en lugar de multiplicar." },
    { q: "Querés agregar un producto nuevo al vector del kiosco. ¿Qué escribís?", opciones: ["kiosco + \"Galletitas\";","kiosco.size({\"Galletitas\"});","Producto.push_back(kiosco);","kiosco.push_back({\"Galletitas\", 1500, 2});"], correcta: 3, explicacion: "push_back con los tres datos entre llaves. Sumar con + tienta por los strings, pero en un vector no funciona." },
    { q: "Querés una función que muestre un producto sin copiarlo ni cambiarlo. ¿Qué parámetro usás?", opciones: ["Producto& p, para poder cambiarlo","const Producto& p","int p","Producto p[10]"], correcta: 1, explicacion: "Referencia const, igual que con strings. Sin const tienta, pero permite cambiarlo sin querer." },
  ],
},
{
  id: "errores",
  icono: "🐞",
  titulo: "Encontrar y arreglar errores",
  nivel: "Avanzado",
  objetivos: [
    "Distinguir errores de compilación, de ejecución y de lógica",
    "Encontrar un error de lógica con una tabla de seguimiento o con cout",
    "Probar un programa con casos normales, de borde y raros",
  ],
  lecciones: [
    { titulo: "Tres tipos de errores", html: `
      <p class="idea">No todos los errores son iguales. Saber de qué tipo es te dice <strong>dónde buscar</strong>.</p>
      <table>
        <tr><th>Tipo</th><th>Cuándo aparece</th><th>Ejemplo</th><th>Quién te avisa</th></tr>
        <tr><td>De compilación</td><td>Al compilar</td><td>Falta un ;</td><td>El compilador, con número de línea</td></tr>
        <tr><td>De ejecución</td><td>Mientras corre</td><td>v.at(10) en un vector de 4, dividir enteros por 0</td><td>El programa se corta</td></tr>
        <tr><td>De lógica</td><td>Corre, pero el resultado está mal</td><td>Dividir por 3 en lugar de 3.0</td><td>Nadie: lo tenés que notar vos</td></tr>
      </table>
      <pre><code>#include &lt;iostream&gt;

int main() {
    int a = 8;
    int b = 7;
    int c = 10;
    double promedio = a + b + c / 3.0;
    std::cout &lt;&lt; "Promedio: " &lt;&lt; promedio &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
Promedio: 18.3333
</code></pre>
      <p>Este programa <strong>compila y corre</strong>, pero el promedio de 8, 7 y 10 no puede ser 18. Es un error de lógica: faltan paréntesis. Como la división va antes que la suma, calcula 8 + 7 + (10 / 3.0). Lo correcto es (a + b + c) / 3.0.</p>
      <p><strong>Los errores de lógica son los más peligrosos</strong> porque no hacen ruido. La única defensa es saber qué resultado esperás antes de correr el programa.</p>
      <p><strong>Advertencias (warnings):</strong> el compilador a veces avisa algo sospechoso sin frenar, como un if (x = 0). Activalas siempre (con g++, la opción -Wall) y tomalas en serio.</p>
      <p>Por ejemplo, el programa de Lucía decía que había vendido $18.000 de promedio por día, cuando nunca pasó de $10.000. No había ningún error en pantalla: era un paréntesis faltante.</p>` },
    { titulo: "Seguir el programa paso a paso", html: `
      <p class="idea">Para encontrar un error de lógica, <strong>mirá qué valor tiene cada variable</strong> en cada paso: con una tabla en papel o agregando cout de control.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

int main() {
    std::vector&lt;int&gt; ventas = {300, 1200, 800};
    int mayor = 0;
    for (int v : ventas) {
        std::cout &lt;&lt; "[control] v = " &lt;&lt; v &lt;&lt; ", mayor = " &lt;&lt; mayor &lt;&lt; "\\n";
        if (v &gt; mayor) {
            mayor = v;
        }
    }
    std::cout &lt;&lt; "Mayor venta: " &lt;&lt; mayor &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Salida:
[control] v = 300, mayor = 0
[control] v = 1200, mayor = 300
[control] v = 800, mayor = 1200
Mayor venta: 1200
</code></pre>
      <p>Un <strong>cout de control</strong> es una línea que agregás solo para ver qué está pasando adentro. Cuando encontrás el error, la borrás.</p>
      <pre><code>Pasos para cazar un error de lógica:
1. Elegí un caso chico y calculá a mano el resultado esperado.
2. Corré el programa con ese caso.
3. Si no coincide, agregá cout de control en el medio.
4. Buscá el primer paso donde el valor ya está mal.
5. El error está entre ese paso y el anterior.
</code></pre>
      <p>Un <strong>depurador</strong> (debugger en inglés) es una herramienta que hace lo mismo sin cout: frena el programa en una línea y te muestra las variables. OnlineGDB y Visual Studio Code tienen uno con el botón "Debug".</p>
      <p>Por ejemplo, el programa de Lucía buscaba la venta menor y siempre daba 0. Con un cout de control vio que menor empezaba en 0 y ninguna venta era más chica. Lo cambió para que empezara con la primera venta.</p>` },
    { titulo: "Probar con casos de borde", html: `
      <p class="idea">Un programa que anda con un ejemplo puede fallar con otro. Probalo con <strong>casos normales, casos de borde y casos raros</strong>.</p>
      <table>
        <tr><th>Tipo de caso</th><th>Qué es</th><th>Ejemplo para "nota aprobada si es 6 o más"</th></tr>
        <tr><td>Normal</td><td>Lo que pasa casi siempre</td><td>8 → aprobada, 3 → desaprobada</td></tr>
        <tr><td>De borde</td><td>Justo en el límite</td><td>6 → aprobada, 5 → desaprobada</td></tr>
        <tr><td>Raro</td><td>Lo que no debería pasar, pero pasa</td><td>-1 o 11 → nota inválida</td></tr>
      </table>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;

std::string evaluar(int nota) {
    if (nota &lt; 0 || nota &gt; 10) {
        return "inválida";
    }
    if (nota &gt;= 6) {
        return "aprobada";
    }
    return "desaprobada";
}

int main() {
    std::vector&lt;int&gt; casos = {8, 3, 6, 5, -1, 11};
    for (int n : casos) {
        std::cout &lt;&lt; n &lt;&lt; " -&gt; " &lt;&lt; evaluar(n) &lt;&lt; "\\n";
    }
    return 0;
}
</code></pre>
      <pre><code>Salida:
8 -&gt; aprobada
3 -&gt; desaprobada
6 -&gt; aprobada
5 -&gt; desaprobada
-1 -&gt; inválida
11 -&gt; inválida
</code></pre>
      <p><strong>Los bordes son donde más se equivoca la gente:</strong> &gt; en lugar de &gt;=, &lt;= en lugar de &lt;. Si probás justo el límite (6 y 5), lo descubrís.</p>
      <p><strong>Escribí los casos antes de programar:</strong> qué entra y qué tiene que salir. Así no te engañás mirando el resultado y pensando "parece bien".</p>
      <p><strong>Vectores vacíos y divisiones:</strong> ¿qué pasa si la lista no tiene nada? ¿Y si hay que dividir por la cantidad y es 0? Son casos raros clásicos.</p>
      <p>Por ejemplo, el programa de descuentos de Lucía daba 10% "a partir de $10.000", pero con exactamente $10.000 no lo daba. Probando el borde vio que tenía &gt; en lugar de &gt;=.</p>` },
  ],
  practica: [
    "Corré el programa del promedio con el error, arreglalo con paréntesis y anotá el resultado correcto (tiene que dar 8.33333).",
    "Agregá cout de control a un bucle tuyo, anotá los valores de 3 vueltas y después borralos.",
    "Escribí 6 casos (2 normales, 2 de borde y 2 raros) para un programa que diga si una persona puede votar (16 años o más) y anotá qué tiene que salir en cada uno antes de correrlo.",
  ],
  recursos: [
    { t: "LearnCpp: errores de sintaxis y de lógica (en inglés)", url: "https://www.learncpp.com/cpp-tutorial/syntax-and-semantic-errors/" },
    { t: "OnlineGDB: compilador de C++ en el navegador, sin instalar nada", url: "https://www.onlinegdb.com/online_c++_compiler" },
    { t: "Visual Studio Code: cómo instalar y usar C++ (en inglés)", url: "https://code.visualstudio.com/docs/languages/cpp" },
  ],
  quiz: [
    { q: "Tu programa compila y corre, pero el total da mal. ¿Qué tipo de error es?", opciones: ["De compilación","De ejecución","De lógica","No es un error"], correcta: 2, explicacion: "Corre, pero calcula mal: lógica. De compilación tienta, pero entonces no habría corrido." },
    { q: "El compilador dice que falta un ; en la línea 8. ¿Qué tipo de error es?", opciones: ["De compilación","De lógica","De ejecución","Un warning"], correcta: 0, explicacion: "Lo detecta el compilador antes de correr. Warning tienta, pero un warning no frena la compilación y este sí." },
    { q: "Tu programa se corta con out_of_range mientras corre. ¿Qué tipo de error es?", opciones: ["De compilación","De lógica sin aviso","De ortografía","De ejecución"], correcta: 3, explicacion: "Pasa durante la ejecución, por un índice que no existe. De compilación tienta, pero compiló bien." },
    { q: "Si escribís a + b + c / 3.0 para el promedio, ¿qué calcula?", opciones: ["(a + b + c) / 3.0","a + b + (c / 3.0)","a / 3.0 + b + c","Da error de compilación"], correcta: 1, explicacion: "La división va antes que la suma. El promedio correcto tienta porque es lo que querías, pero faltan los paréntesis." },
    { q: "Querés defenderte de los errores de lógica. ¿Qué hacés antes de correr?", opciones: ["Nada, confiar en el compilador","Correrlo más veces","Calcular a mano qué resultado esperás","Cambiar de compilador"], correcta: 2, explicacion: "Sin un resultado esperado no notás el error. Confiar en el compilador tienta, pero él no sabe qué querías." },
    { q: "El compilador muestra un warning, pero el programa corre. ¿Qué hacés?", opciones: ["Lo leés y lo arreglás: suele avisar un error real","Lo ignorás porque corre","Desactivás las advertencias","Borrás el programa"], correcta: 0, explicacion: "Un warning como if (x = 0) es un error esperando pasar. Ignorarlo tienta porque corre, pero el resultado puede estar mal." },
    { q: "Tu bucle da un resultado raro. ¿Qué agregás para ver qué pasa adentro?", opciones: ["Más llaves","Un return 0 en el medio","Comentarios","Un cout de control con el valor de las variables"], correcta: 3, explicacion: "El cout de control muestra los valores en cada vuelta. Los comentarios tientan, pero no muestran nada al correr." },
    { q: "Si el programa que busca la menor venta siempre da 0, ¿qué revisás primero?", opciones: ["El #include","Con qué valor empieza la variable menor","El nombre del vector","Si compila"], correcta: 1, explicacion: "Si empieza en 0, ninguna venta es menor. El include tienta, pero si compila no es eso." },
    { q: "Ya encontraste el error con tus cout de control. ¿Qué hacés con ellos?", opciones: ["Los dejás para siempre","Los duplicás","Los borrás","Los convertís en el resultado"], correcta: 2, explicacion: "Eran solo para investigar. Dejarlos tienta por si acaso, pero ensucian la salida." },
    { q: "Tu programa aprueba con 6 o más. ¿Qué casos de borde probás?", opciones: ["6 y 5","8 y 3","100 y -100","Solo 10"], correcta: 0, explicacion: "El borde es justo el límite. 8 y 3 tientan, pero son casos normales." },
    { q: "Con exactamente $10.000 no se aplica el descuento \"a partir de $10.000\". ¿Qué está mal?", opciones: ["Usaste == en lugar de =","Falta un else","Hay que usar %","Usaste > en lugar de >="], correcta: 3, explicacion: "El borde quedó afuera. Falta un else tienta, pero el problema es la comparación." },
    { q: "Tu programa divide por la cantidad de ventas. ¿Qué caso raro probás?", opciones: ["Que haya 3 ventas","Que no haya ninguna venta (cantidad 0)","Que las ventas sean pares","Ninguno"], correcta: 1, explicacion: "Dividir por 0 es un caso raro clásico. 3 ventas tienta, pero es un caso normal." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: el sistema del kiosco",
  nivel: "Avanzado",
  objetivos: [
    "Planificar un programa completo antes de escribirlo",
    "Construir un programa con menú, structs, vectores y funciones",
    "Evaluar tu programa con casos de prueba y una rúbrica",
  ],
  lecciones: [
    { titulo: "Planificar antes de programar", html: `
      <p class="idea">Un programa completo se piensa <strong>antes</strong> de escribirlo: qué tiene que hacer, qué datos guarda y en qué funciones se divide.</p>
      <pre><code>El sistema del kiosco
---------------------
Qué hace (el menú):
  1. Ver productos
  2. Vender (descuenta stock)
  3. Ver qué reponer (stock menor a 5)
  0. Salir

Datos:
  struct Producto { nombre, precio, stock }
  std::vector&lt;Producto&gt; kiosco

Funciones:
  mostrar(kiosco)         → void
  vender(kiosco, i, cant) → bool (false si no hay stock)
  reponer(kiosco)         → void
</code></pre>
      <table>
        <tr><th>Pregunta del plan</th><th>Módulo del curso que la resuelve</th></tr>
        <tr><td>¿Cómo repito el menú hasta que elija 0?</td><td>Bucles: while</td></tr>
        <tr><td>¿Cómo elijo qué hacer según la opción?</td><td>Decisiones: if y else if</td></tr>
        <tr><td>¿Cómo guardo cada producto?</td><td>Textos y structs</td></tr>
        <tr><td>¿Cómo guardo todos?</td><td>Vectores</td></tr>
        <tr><td>¿Cómo divido el trabajo?</td><td>Funciones (y &amp; para cambiar el stock)</td></tr>
      </table>
      <p><strong>Avanzá de a poco:</strong> primero el struct y mostrar; compilá y probá. Después el menú; compilá y probá. Después vender. Cada paso chico que anda es una base segura.</p>
      <p><strong>Si querés otro tema,</strong> el mismo esqueleto sirve para una biblioteca (libros prestados), un club (socios y cuotas) o las notas de un curso.</p>
      <p>Por ejemplo, Lucía escribió el plan en un cuaderno en 15 minutos. Cuando se sentó a programar, ya sabía qué funciones iba a necesitar y en qué orden hacerlas.</p>` },
    { titulo: "El programa completo", html: `
      <p class="idea">Este es un sistema de kiosco funcionando. Leelo función por función: cada parte es algo que ya aprendiste.</p>
      <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;

struct Producto {
    std::string nombre;
    double precio;
    int stock;
};

void mostrar(const std::vector&lt;Producto&gt;&amp; kiosco) {
    for (std::size_t i = 0; i &lt; kiosco.size(); i++) {
        std::cout &lt;&lt; i &lt;&lt; ". " &lt;&lt; kiosco[i].nombre &lt;&lt; " $" &lt;&lt; kiosco[i].precio
                  &lt;&lt; " (stock " &lt;&lt; kiosco[i].stock &lt;&lt; ")\\n";
    }
}

bool vender(std::vector&lt;Producto&gt;&amp; kiosco, std::size_t i, int cantidad) {
    if (i &gt;= kiosco.size() || cantidad &lt;= 0 || kiosco[i].stock &lt; cantidad) {
        return false;
    }
    kiosco[i].stock -= cantidad;
    return true;
}

void reponer(const std::vector&lt;Producto&gt;&amp; kiosco) {
    for (const Producto&amp; p : kiosco) {
        if (p.stock &lt; 5) {
            std::cout &lt;&lt; "Reponer: " &lt;&lt; p.nombre &lt;&lt; "\\n";
        }
    }
}

int main() {
    std::vector&lt;Producto&gt; kiosco = {{"Alfajor", 850, 20}, {"Chicle", 150, 6}, {"Agua", 1200, 12}};
    double caja = 0;
    int opcion = -1;
    while (opcion != 0) {
        std::cout &lt;&lt; "\\n1 Ver  2 Vender  3 Reponer  0 Salir: ";
        std::cin &gt;&gt; opcion;
        if (opcion == 1) {
            mostrar(kiosco);
        } else if (opcion == 2) {
            std::size_t i;
            int cantidad;
            std::cin &gt;&gt; i &gt;&gt; cantidad;
            if (vender(kiosco, i, cantidad)) {
                caja += kiosco[i].precio * cantidad;
                std::cout &lt;&lt; "Vendido. Caja: $" &lt;&lt; caja &lt;&lt; "\\n";
            } else {
                std::cout &lt;&lt; "No se pudo vender\\n";
            }
        } else if (opcion == 3) {
            reponer(kiosco);
        }
    }
    std::cout &lt;&lt; "Cierre de caja: $" &lt;&lt; caja &lt;&lt; "\\n";
    return 0;
}
</code></pre>
      <pre><code>Entrada:
2
1 3
2
1 9
3
2
0 2
0
</code></pre>
      <pre><code>Salida:
1 Ver  2 Vender  3 Reponer  0 Salir: Vendido. Caja: $450

1 Ver  2 Vender  3 Reponer  0 Salir: No se pudo vender

1 Ver  2 Vender  3 Reponer  0 Salir: Reponer: Chicle

1 Ver  2 Vender  3 Reponer  0 Salir: Vendido. Caja: $2150

1 Ver  2 Vender  3 Reponer  0 Salir: Cierre de caja: $2150
</code></pre>
      <p><strong>Cómo leer la prueba:</strong> vende 3 chicles (quedan 3), intenta vender 9 y no puede, muestra qué reponer (el chicle) y vende 2 alfajores. La caja termina en 3 × 150 + 2 × 850 = 2150.</p>
      <p><strong>vender devuelve bool:</strong> así main sabe si la venta salió bien y solo suma a la caja cuando corresponde. Controla tres cosas: que el producto exista, que la cantidad sea positiva y que alcance el stock.</p>
      <p>Por ejemplo, Lucía empezó copiando este programa en OnlineGDB, lo corrió con la misma entrada y comparó con la salida. Después le agregó sus propios productos.</p>` },
    { titulo: "Probar y evaluar con la rúbrica", html: `
      <p class="idea">Tu proyecto es <strong>extender el sistema</strong> con una función nueva y demostrar que anda con casos de prueba. Después lo evaluás con la rúbrica.</p>
      <pre><code>Ideas para extenderlo (elegí al menos una):
  4. Agregar un producto nuevo (pedir nombre, precio y stock)
  5. Mostrar el producto más caro
  6. Cambiar el precio de un producto (aumento de un %)
  7. Mostrar cuánta plata hay en mercadería (precio × stock)
</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Compila</td><td>Sin errores ni warnings con -Wall</td><td>Con warnings</td><td>No compila</td></tr>
        <tr><td>Funciona</td><td>Hace lo del menú con la entrada de prueba</td><td>Falla en un caso</td><td>Falla en varios</td></tr>
        <tr><td>Datos</td><td>Usa struct y vector</td><td>Usa vectores sueltos</td><td>Variables sueltas</td></tr>
        <tr><td>Funciones</td><td>Una tarea por función, con nombres claros</td><td>Todo en main con alguna función</td><td>Todo en main</td></tr>
        <tr><td>Pruebas</td><td>Casos normales, de borde y raros escritos con su resultado esperado</td><td>Solo casos normales</td><td>Sin pruebas</td></tr>
        <tr><td>Extensión</td><td>Agrega una opción nueva que anda</td><td>La agrega con errores</td><td>No agrega nada</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → muy bien: ya programás en C++
7 a 9   → bien: mejorá el criterio más bajo
0 a 6   → repasá Funciones y Vectores y volvé a intentarlo
</code></pre>
      <p><strong>Casos para la opción vender:</strong> vender 1 (normal), vender exactamente todo el stock (borde), vender más de lo que hay, un índice que no existe y una cantidad negativa (raros).</p>
      <p><strong>¿Y después?</strong> Los temas que siguen en C++ son las clases (structs con funciones adentro), los archivos (guardar el stock para la próxima vez) y los mapas (buscar por nombre).</p>
      <p>Por ejemplo, Lucía agregó la opción 5 (el más caro) y escribió 5 casos de prueba. Sacó 11 de 12: tenía un warning por comparar int con size(), que arregló usando std::size_t.</p>` },
  ],
  practica: [
    "Escribí el plan de tu sistema (menú, struct, funciones) en un papel antes de programar y anotá cuántas funciones tiene.",
    "Copiá el programa del kiosco en OnlineGDB, corrélo con la entrada de la lección y compará tu salida con la del curso: anotá si coincide.",
    "Agregá al menos una opción nueva, escribí 5 casos de prueba con su resultado esperado y anotá cuántos pasaron.",
    "Puntuá tu proyecto con la rúbrica y anotá tu total de 12 y el criterio más bajo.",
  ],
  recursos: [
    { t: "OnlineGDB: compilador de C++ en el navegador, sin instalar nada", url: "https://www.onlinegdb.com/online_c++_compiler" },
    { t: "LearnCpp.com: tutorial gratis de C++ paso a paso (en inglés)", url: "https://www.learncpp.com/" },
    { t: "Microsoft Learn: referencia del lenguaje C++ (en castellano)", url: "https://learn.microsoft.com/es-es/cpp/cpp/cpp-language-reference" },
  ],
  quiz: [
    { q: "Vas a escribir un programa grande. ¿Qué hacés primero?", opciones: ["Escribir todo el código de una","Elegir los colores","Un plan: qué hace, qué datos guarda y qué funciones tiene","Compilar un archivo vacío 10 veces"], correcta: 2, explicacion: "El plan ordena el trabajo. Escribir todo de una tienta por rápido, pero los errores se mezclan." },
    { q: "Tu menú tiene que repetirse hasta que elijan 0. ¿Qué usás?", opciones: ["while (opcion != 0)","for (int i = 0; i < 3; i++)","Un if solo","Un struct"], correcta: 0, explicacion: "No sabés cuántas veces va a elegir: while. El for tienta, pero fija 3 vueltas." },
    { q: "Si avanzás de a poco, ¿cuándo compilás y probás?", opciones: ["Solo al final","Nunca","Una vez por semana","Después de cada paso chico"], correcta: 3, explicacion: "Así sabés que lo anterior anda. Al final tienta por ahorrar tiempo, pero los errores se acumulan." },
    { q: "Si la función vender tiene que cambiar el stock del vector, ¿cómo recibe el vector?", opciones: ["Por copia","Por referencia: std::vector<Producto>& kiosco","Como const","Como int"], correcta: 1, explicacion: "Con & cambia el original. const tienta porque se usa en mostrar, pero impide cambiar el stock." },
    { q: "La función mostrar solo lee el vector. ¿Cómo lo recibe?", opciones: ["std::vector<Producto>& kiosco sin const","Por copia siempre","const std::vector<Producto>& kiosco","Como bool"], correcta: 2, explicacion: "Referencia const: no copia y no cambia. Sin const tienta, pero deja cambiarlo sin querer." },
    { q: "¿Por qué vender devuelve bool?", opciones: ["Para que main sepa si la venta salió bien","Porque todas las funciones devuelven bool","Para mostrar el precio","No sirve para nada"], correcta: 0, explicacion: "true o false le dice a main si suma a la caja. \"Todas devuelven bool\" tienta, pero cada una devuelve lo que necesita." },
    { q: "Si en la prueba se venden 3 chicles a $150 y 2 alfajores a $850, ¿cuánto hay en caja?", opciones: ["$1000","$450","$5","$2150"], correcta: 3, explicacion: "3 × 150 + 2 × 850 = 450 + 1700 = 2150. 450 tienta, pero es solo la primera venta." },
    { q: "Intentás vender 9 chicles y hay 3. ¿Qué tiene que pasar?", opciones: ["Se venden y el stock queda en -6","No se vende y avisa \"No se pudo vender\"","Se venden 3","El programa se corta"], correcta: 1, explicacion: "vender controla que alcance el stock. Stock negativo tienta si no hubiera control, pero sería un error de lógica." },
    { q: "Tu proyecto compila pero con warnings. ¿Cuántos puntos saca en \"Compila\"?", opciones: ["2","0","1","12"], correcta: 2, explicacion: "2 es sin errores ni warnings. 2 tienta porque compila, pero los warnings bajan un punto." },
    { q: "Tenés todo el programa en main con una sola función chica. ¿Qué mejorás?", opciones: ["Dividir en funciones con una tarea cada una","Agregar más código a main","Borrar la función","Nada"], correcta: 0, explicacion: "Una tarea por función suma puntos y claridad. Agregar a main tienta por cómodo, pero lo hace más difícil de leer." },
    { q: "Querés probar vender en el borde. ¿Qué caso elegís?", opciones: ["Vender 1","No vender nada","Ver productos","Vender exactamente todo el stock"], correcta: 3, explicacion: "El borde es el límite: todo el stock. Vender 1 tienta, pero es un caso normal." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Empezás el curso de cero","Mejorás el criterio más bajo","Lo dejás así","Borrás el proyecto"], correcta: 1, explicacion: "7 a 9 es bien: falta pulir algo. Empezar de cero tienta, pero no hace falta." },
  ],
},
];
