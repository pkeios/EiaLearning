// Temario del curso "Matemática para la vida diaria". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js matematica-vida y node tools/metodologia.js matematica-vida
window.TEMARIO = [
{
  id: "numeros",
  icono: "🔢",
  titulo: "Leer, redondear y estimar números",
  nivel: "Básico",
  objetivos: [
    "Leer y escribir números grandes y con decimales como se usan en Argentina",
    "Comparar números con decimales sin confundirte",
    "Redondear y estimar una cuenta antes de hacerla, para darte cuenta si algo está mal",
  ],
  lecciones: [
    { titulo: "Números grandes", html: `
      <p class="idea">En Argentina, el <strong>punto separa los miles</strong> y la <strong>coma separa los decimales</strong>. Leer bien un número grande es mirar de a grupos de tres cifras, de derecha a izquierda.</p>
      <p>En todo el curso acompañamos a <strong>Carlos</strong>, que hace las compras de su casa, hace changas de pintura los fines de semana y quiere dejar de depender de la calculadora para todo (y de que le cobren de más).</p>
      <table>
        <tr><th>Número</th><th>Se lee</th><th>Cuántos ceros</th></tr>
        <tr><td>1.000</td><td>mil</td><td>3</td></tr>
        <tr><td>10.000</td><td>diez mil</td><td>4</td></tr>
        <tr><td>100.000</td><td>cien mil</td><td>5</td></tr>
        <tr><td>1.000.000</td><td>un millón</td><td>6</td></tr>
      </table>
      <pre><code>$ 1 . 2 5 0 . 0 0 0
  │   └─┬─┘   └─┬─┘
  │     │       └── 000 → unidades
  │     └────────── 250 → miles
  └──────────────── 1   → millones
Se lee: un millón doscientos cincuenta mil pesos.</code></pre>
      <p><strong>Cada lugar vale 10 veces más que el de su derecha.</strong> Por eso un cero de más no es un detalle: 25.000 es diez veces 2.500.</p>
      <p><strong>Ojo con la calculadora y las apps:</strong> algunas usan la forma de Estados Unidos, al revés: coma para los miles y punto para los decimales (1,250.50). Si un número te parece raro, fijate cuál usa.</p>
      <p>Por ejemplo, a Carlos le pasaron un presupuesto de "$125.000" para un trabajo que él calculaba en doce mil y pico. Contó los grupos: 125 miles. Era diez veces más de lo que pensaba, y lo preguntó antes de aceptar.</p>` },
    { titulo: "Los decimales", html: `
      <p class="idea">Lo que va después de la coma son <strong>partes de uno</strong>. Un decimal no es "un número más largo": 0,8 es más grande que 0,75, aunque tenga menos cifras.</p>
      <table>
        <tr><th>Decimal</th><th>Quiere decir</th><th>En la vida diaria</th></tr>
        <tr><td>0,5</td><td>medio</td><td>medio kilo = 0,5 kg = 500 g</td></tr>
        <tr><td>0,25</td><td>un cuarto</td><td>un cuarto de kilo = 0,25 kg = 250 g</td></tr>
        <tr><td>0,75</td><td>tres cuartos</td><td>tres cuartos de litro = 0,75 L = 750 ml</td></tr>
        <tr><td>0,1</td><td>un décimo</td><td>10 centavos de un peso</td></tr>
      </table>
      <pre><code>Comparar decimales: igualá la cantidad de cifras con ceros.
0,8   → 0,80
0,75  → 0,75
80 es más que 75 → 0,8 es más grande.</code></pre>
      <p><strong>En la balanza:</strong> 1,250 kg es un kilo y 250 gramos (un kilo y cuarto), no "un kilo y doscientos cincuenta" de algo raro. Los gramos son las tres cifras después de la coma.</p>
      <p><strong>El cero de adelante:</strong> 0,5 y ,5 son lo mismo, pero escribí siempre el cero: así nadie lee "5".</p>
      <p>Por ejemplo, en la verdulería la balanza marcó 0,8 kg de tomate y Carlos había pedido tres cuartos (0,75). Le dieron 50 gramos más, no menos: 0,80 es más que 0,75.</p>` },
    { titulo: "Redondear y estimar", video: {"id":"QdUFC-b1zMM","t":"Redondear números naturales · Susi Profe (12:40)"}, html: `
      <p class="idea"><strong>Estimar</strong> es hacer la cuenta con números redondos para saber más o menos cuánto da. Sirve para darte cuenta, antes de pagar, si una cuenta está muy mal.</p>
      <p><strong>Redondear</strong> es cambiar un número por uno parecido y fácil. La regla: mirás la cifra que sigue a la que querés dejar; si es 5 o más, subís; si es menos de 5, bajás.</p>
      <pre><code>Redondear a los miles:
1.890 → la cifra de los cientos es 8 (5 o más) → 2.000
3.120 → la cifra de los cientos es 1 (menos de 5) → 3.000
2.480 → la cifra de los cientos es 4 → 2.000
         (o a los quinientos: 2.500, más cerca)</code></pre>
      <table>
        <tr><th>Producto</th><th>Precio real</th><th>Redondeado</th></tr>
        <tr><td>Leche</td><td>1.890</td><td>2.000</td></tr>
        <tr><td>Yerba</td><td>3.120</td><td>3.000</td></tr>
        <tr><td>Pan</td><td>2.480</td><td>2.500</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>7.490</strong></td><td><strong>7.500</strong></td></tr>
      </table>
      <p>La estimación no tiene que dar exacto: tiene que dar <strong>cerca</strong>. Si la caja te cobra 14.900 y vos estimaste 7.500, algo pasó (un producto pasado dos veces, un cero de más) y conviene revisar el ticket.</p>
      <p>Por ejemplo, Carlos estimó su compra en unos 25.000. El ticket decía 52.000. Revisó y una lata de pintura estaba cargada 10 veces: 10 latas en vez de 1.</p>` },
  ],
  practica: [
    "Escribí con números y en letras 5 precios grandes que veas esta semana (un auto, un alquiler, un electrodoméstico) y anotá cuántos ceros tiene cada uno.",
    "Ordená de menor a mayor: 0,7 · 0,65 · 0,8 · 0,08 · 0,75, y anotá cómo los comparaste.",
    "En tu próxima compra, estimá el total redondeando cada precio antes de pagar, y anotá la diferencia con el ticket real.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de matemáticas básicas", url: "https://edu.gcfglobal.org/es/matematicas-basicas/" },
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si ves escrito $1.250.000, ¿cómo se lee?", opciones: ["Ciento veinticinco mil pesos","Doce millones quinientos mil","Un millón doscientos cincuenta mil pesos","Mil doscientos cincuenta pesos"], correcta: 2, explicacion: "Los grupos de tres cifras son 1, 250 y 000: millones, miles y unidades. Ciento veinticinco mil tienta si te comés un grupo." },
    { q: "Te pasan un presupuesto de 125.000 y vos calculabas 12.500. ¿Cuánto más es?", opciones: ["Diez veces más","Dos veces más","Lo mismo","100 veces más"], correcta: 0, explicacion: "Un cero de más multiplica por 10. Lo mismo tienta porque las cifras se parecen, pero el lugar cambia todo." },
    { q: "Tu app muestra 1,250.50. ¿Qué forma está usando?", opciones: ["La argentina","Es un error","Son dos números distintos","La de Estados Unidos: coma para miles y punto para decimales"], correcta: 3, explicacion: "Algunas apps usan la forma de EE. UU. Pensar que es un error tienta, pero es otra convención." },
    { q: "Si pediste tres cuartos de tomate y la balanza marca 0,8 kg, ¿te dieron más o menos?", opciones: ["Menos: 0,8 tiene menos cifras","Más: 0,80 es más que 0,75","Lo mismo","No se puede comparar"], correcta: 1, explicacion: "Igualando cifras, 0,80 contra 0,75. Pensar que menos cifras es menos tienta, pero no funciona con decimales." },
    { q: "La balanza marca 1,250 kg. ¿Cuánto es?", opciones: ["Un kilo y 25 gramos","1.250 kilos","Un kilo y 250 gramos","Doce kilos y medio"], correcta: 2, explicacion: "Las tres cifras después de la coma son gramos. Veinticinco gramos tienta si leés solo las dos primeras." },
    { q: "Querés medio kilo de pan. ¿Cuántos gramos son?", opciones: ["500 g","50 g","5 g","250 g"], correcta: 0, explicacion: "Medio kilo es 0,5 kg, o sea 500 g. 250 g tienta, pero eso es un cuarto." },
    { q: "Si redondeás 1.890 a los miles, ¿qué te queda?", opciones: ["1.000","1.800","1.900","2.000"], correcta: 3, explicacion: "La cifra de los cientos es 8, y con 5 o más se sube. 1.000 tienta porque empieza con 1, pero está más cerca de 2.000." },
    { q: "Si redondeás 3.120 a los miles, ¿qué te queda?", opciones: ["4.000","3.000","3.100","3.200"], correcta: 1, explicacion: "La cifra de los cientos es 1, menos de 5: se baja. 3.100 tienta, pero eso es redondear a los cientos." },
    { q: "Estimaste tu compra en 7.500 y la caja te cobra 14.900. ¿Qué hacés?", opciones: ["Pagás, la estimación nunca es exacta","Pagás la mitad","Revisás el ticket antes de pagar: algo puede estar cargado de más","Te vas sin pagar"], correcta: 2, explicacion: "La estimación no es exacta, pero el doble es demasiado. \"Nunca es exacta\" tienta, pero una diferencia así no es redondeo." },
    { q: "Tenés que sumar 2.050 + 2.980 + 990 de cabeza. ¿Cuánto estimás?", opciones: ["Unos 6.000","Unos 60.000","Unos 600","Unos 4.000"], correcta: 0, explicacion: "Redondeado: 2.000 + 3.000 + 1.000 = 6.000. 60.000 tienta si te sobra un cero." },
    { q: "Querés escribir \"cinco décimos\". ¿Cómo lo escribís para que nadie lo lea mal?", opciones: [",5","5","0.5 sin aclarar","0,5"], correcta: 3, explicacion: "Con el cero adelante no hay confusión. \",5\" tienta por corto, pero la coma se pierde y se lee 5." },
    { q: "Si una estimación te da 25.000 y el ticket dice 24.300, ¿qué concluís?", opciones: ["Que te cobraron de menos y tenés que avisar","Que la cuenta está bien: la estimación da cerca, no exacto","Que estimaste mal","Que el ticket está mal"], correcta: 1, explicacion: "Estimar da un número cercano. Pensar que estimaste mal tienta, pero 700 de diferencia es lo normal al redondear." },
  ],
},
{
  id: "cuentas",
  icono: "🧮",
  titulo: "Cuentas de cabeza y con la calculadora",
  nivel: "Básico",
  objetivos: [
    "Calcular el vuelto completando hasta el monto que pagaste",
    "Multiplicar y dividir de cabeza descomponiendo los números",
    "Usar la calculadora del celular y controlar el resultado con una estimación",
  ],
  lecciones: [
    { titulo: "Sumar, restar y el vuelto", html: `
      <p class="idea">Para el vuelto no hace falta restar "como en la escuela". Es más fácil <strong>completar</strong>: desde lo que cuesta, vas sumando hasta llegar a lo que pagaste.</p>
      <pre><code>Pagás 10.000 por algo de 6.350:
6.350 → 6.400   (+   50)
6.400 → 7.000   (+  600)
7.000 → 10.000  (+ 3.000)
Vuelto: 50 + 600 + 3.000 = 3.650</code></pre>
      <p>Es lo mismo que hacen muchos cajeros cuando cuentan el vuelto en la mano: "seis mil cuatrocientos, siete mil, diez mil".</p>
      <p><strong>Para sumar de cabeza</strong>, separá en partes redondas:</p>
      <pre><code>2.750 + 1.380
= 2.750 + 1.000 + 300 + 80
= 3.750 + 300 + 80
= 4.050 + 80
= 4.130</code></pre>
      <table>
        <tr><th>Truco</th><th>Ejemplo</th></tr>
        <tr><td>Sumar uno redondo y corregir</td><td>4.500 + 1.990 = 4.500 + 2.000 − 10 = 6.490</td></tr>
        <tr><td>Restar redondo y corregir</td><td>8.000 − 2.980 = 8.000 − 3.000 + 20 = 5.020</td></tr>
        <tr><td>Juntar los que suman redondo</td><td>250 + 380 + 750 = (250 + 750) + 380 = 1.380</td></tr>
      </table>
      <p>Por ejemplo, Carlos pagó con 20.000 una compra de 13.700. Completó: 13.700 → 14.000 (300) → 20.000 (6.000). Esperaba 6.300 de vuelto, y cuando le dieron 5.300 lo notó en el momento.</p>` },
    { titulo: "Multiplicar y dividir de cabeza", html: `
      <p class="idea">Multiplicar de cabeza es <strong>partir el número</strong> en pedazos fáciles. Dividir, en la vida diaria, casi siempre es <strong>repartir en partes iguales</strong>.</p>
      <table>
        <tr><th>Para hacer...</th><th>Hacé...</th><th>Ejemplo</th></tr>
        <tr><td>× 10, × 100, × 1.000</td><td>Agregá 1, 2 o 3 ceros</td><td>350 × 100 = 35.000</td></tr>
        <tr><td>× 5</td><td>× 10 y después la mitad</td><td>1.800 × 5 = 18.000 ÷ 2 = 9.000</td></tr>
        <tr><td>× 9</td><td>× 10 y restale una vez el número</td><td>700 × 9 = 7.000 − 700 = 6.300</td></tr>
        <tr><td>× 12</td><td>× 10 más × 2</td><td>450 × 12 = 4.500 + 900 = 5.400</td></tr>
        <tr><td>÷ 2, ÷ 4</td><td>La mitad; la mitad de la mitad</td><td>18.000 ÷ 4 = 9.000 ÷ 2 = 4.500</td></tr>
      </table>
      <pre><code>Repartir: 4 amigos pagan un asado de 38.000.
38.000 ÷ 2 = 19.000
19.000 ÷ 2 =  9.500
Cada uno pone 9.500.
Control: 9.500 × 4 = 38.000 ✔</code></pre>
      <p><strong>El control al revés:</strong> después de dividir, multiplicá el resultado por la cantidad de partes. Si da el total, está bien.</p>
      <p><strong>Cuando no da justo:</strong> 10.000 entre 3 da 3.333,33... Redondeá y que alguien ponga la diferencia: dos ponen 3.300 y uno 3.400.</p>
      <p>Por ejemplo, Carlos compró 12 latas de pintura chicas a 2.400 cada una. De cabeza: 2.400 × 10 = 24.000, más 2.400 × 2 = 4.800. Total: 28.800.</p>` },
    { titulo: "La calculadora y el control", html: `
      <p class="idea">La calculadora del celular no se equivoca, pero <strong>vos podés apretar mal</strong>. Por eso el método es: estimá primero, calculá después y compará.</p>
      <pre><code>1. Estimá:   12 latas × 2.400 ≈ 12 × 2.500 = 30.000
2. Calculá:  12 × 2.400 = 28.800
3. Compará:  28.800 está cerca de 30.000 ✔
   Si la calculadora daba 288.000 → te sobró un cero.</code></pre>
      <table>
        <tr><th>Error común</th><th>Cómo se nota</th></tr>
        <tr><td>Un cero de más o de menos</td><td>El resultado es 10 veces más grande o más chico que tu estimación</td></tr>
        <tr><td>Punto en vez de coma</td><td>En muchas calculadoras el punto es el decimal: 1.500 se lee "uno coma cinco"</td></tr>
        <tr><td>Cuentas mezcladas en una sola línea</td><td>2 + 3 × 4 da 14, no 20: primero multiplica</td></tr>
        <tr><td>La tecla %</td><td>Cada calculadora la usa distinto: mejor hacé el porcentaje a mano (módulo de porcentajes)</td></tr>
      </table>
      <p><strong>En la calculadora, no escribas el punto de los miles.</strong> Escribí 1500, no 1.500: muchas calculadoras toman el punto como coma decimal y leen 1,5.</p>
      <p><strong>Cuentas largas, de a partes:</strong> en vez de escribir todo en una línea, apretá "=" después de cada paso y anotá el resultado. Así ves dónde te equivocaste.</p>
      <p>Por ejemplo, Carlos calculó el total de 3 trabajos y la calculadora le dio 115.630. Había estimado unos 160.000. Revisó: había escrito 45.000 como "45.000" con punto, y la calculadora lo tomó como 45. Lo volvió a hacer sin puntos: 160.585.</p>` },
  ],
  practica: [
    "Calculá el vuelto completando en 5 compras reales o inventadas, y anotá cada paso.",
    "Resolvé de cabeza 450 × 12, 1.800 × 5 y 38.000 ÷ 4, y después controlalas con la calculadora: anotá cuántas te dieron bien.",
    "Hacé 3 cuentas con la calculadora estimando antes, y anotá la estimación, el resultado y si estaban cerca.",
  ],
  recursos: [
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
    { t: "GCFAprendeLibre: curso gratis de matemáticas básicas", url: "https://edu.gcfglobal.org/es/matematicas-basicas/" },
  ],
  quiz: [
    { q: "Si pagás 10.000 por algo de 6.350, ¿cuánto vuelto te tienen que dar?", opciones: ["4.650","3.750","3.650","4.350"], correcta: 2, explicacion: "Completando: 50 + 600 + 3.000 = 3.650. 4.650 tienta si te equivocás en un paso de los miles." },
    { q: "Pagás con 20.000 una compra de 13.700. ¿Cuánto vuelto esperás?", opciones: ["6.300","7.300","6.700","5.300"], correcta: 0, explicacion: "13.700 → 14.000 son 300, y de 14.000 a 20.000 son 6.000. 7.300 tienta si sumás mal los miles." },
    { q: "Tenés que sumar 4.500 + 1.990 de cabeza. ¿Qué truco usás?", opciones: ["Sumás 1.000 y le restás 10","Sumás 2.000 y le sumás 10","No hay truco, solo calculadora","Sumás 2.000 y le restás 10"], correcta: 3, explicacion: "1.990 es 2.000 menos 10. Sumarle 10 tienta, pero ya pusiste 10 de más." },
    { q: "Si querés calcular 350 × 100, ¿cuánto da?", opciones: ["3.500","35.000","350.000","35.100"], correcta: 1, explicacion: "Por 100 se agregan dos ceros. 3.500 tienta, pero eso es por 10." },
    { q: "Si querés calcular 1.800 × 5 de cabeza, ¿qué hacés?", opciones: ["Sumás 5 a 1.800","Multiplicás por 10 y le sacás un cuarto","Multiplicás por 10 y sacás la mitad: 9.000","Lo dividís por 5"], correcta: 2, explicacion: "Por 5 es la mitad de por 10. Dividir por 5 tienta porque aparece el 5, pero es la cuenta opuesta." },
    { q: "Si querés calcular 700 × 9 de cabeza, ¿cuánto da?", opciones: ["6.300","7.900","6.900","7.000"], correcta: 0, explicacion: "700 × 10 = 7.000, menos 700 = 6.300. 7.000 tienta si te olvidás de restar." },
    { q: "Cuatro amigos pagan un asado de 38.000 en partes iguales. ¿Cuánto pone cada uno?", opciones: ["9.000","19.000","10.500","9.500"], correcta: 3, explicacion: "Mitad y mitad: 19.000 y 9.500. 19.000 tienta si dividís una sola vez." },
    { q: "Dividiste un gasto y querés saber si está bien. ¿Qué control hacés?", opciones: ["Lo dividís de nuevo","Multiplicás el resultado por la cantidad de partes y ves si da el total","Le sumás uno","No se puede controlar"], correcta: 1, explicacion: "Multiplicar deshace la división. Dividir de nuevo tienta, pero da otro número que no dice nada." },
    { q: "Tu estimación es 30.000 y la calculadora dice 288.000. ¿Qué pasó, probablemente?", opciones: ["La calculadora se rompió","La estimación siempre falla","Se te coló un cero de más","Está bien, es el resultado exacto"], correcta: 2, explicacion: "Diez veces más que lo estimado es un cero de más. \"Está bien\" tienta porque lo dice la calculadora, pero vos apretaste las teclas." },
    { q: "Querés cargar 1.500 en la calculadora del celular. ¿Cómo lo escribís?", opciones: ["1500, sin el punto de los miles","1.500, con punto","1,500","15.00"], correcta: 0, explicacion: "Muchas calculadoras toman el punto como coma decimal. Escribir 1.500 tienta porque así lo escribís a mano, pero puede leer 1,5." },
    { q: "Escribís 2 + 3 × 4 en una calculadora y da 14. ¿Por qué no 20?", opciones: ["Porque la calculadora está mal","Porque se hace de derecha a izquierda","Porque se suma primero","Porque primero se hace la multiplicación"], correcta: 3, explicacion: "Las multiplicaciones van antes que las sumas. \"Está mal\" tienta, pero sigue la regla de las cuentas." },
    { q: "Si tenés que hacer una cuenta larga con muchos pasos, ¿cómo la hacés en la calculadora?", opciones: ["Todo en una sola línea, más rápido","De a partes, apretando \"=\" en cada paso y anotando","A ojo","Dos veces seguidas igual"], correcta: 1, explicacion: "De a partes ves dónde te equivocás. Una sola línea tienta por rápido, pero si hay un error no sabés dónde está." },
  ],
},
{
  id: "fracciones",
  icono: "🍕",
  titulo: "Fracciones de todos los días",
  nivel: "Básico",
  objetivos: [
    "Leer una fracción y saber qué parte de un entero representa",
    "Pasar de fracción a decimal y a porcentaje con las equivalencias más usadas",
    "Calcular una fracción de una cantidad y adaptar una receta",
  ],
  lecciones: [
    { titulo: "Qué es una fracción", html: `
      <p class="idea">Una <strong>fracción</strong> dice en cuántas partes iguales se corta algo y cuántas de esas partes tomás. 3/4 es: cortar en 4 y tomar 3.</p>
      <pre><code>     3   ← numerador: cuántas partes tomás
    ───
     4   ← denominador: en cuántas partes iguales se cortó

Una pizza de 8 porciones:
1/8 = 1 porción · 2/8 = 1/4 · 4/8 = 1/2 · 8/8 = la pizza entera</code></pre>
      <table>
        <tr><th>Fracción</th><th>Se dice</th><th>Ejemplo</th></tr>
        <tr><td>1/2</td><td>un medio, la mitad</td><td>medio kilo de pan</td></tr>
        <tr><td>1/3</td><td>un tercio</td><td>un tercio del sueldo para el alquiler</td></tr>
        <tr><td>1/4</td><td>un cuarto</td><td>un cuarto de kilo de queso</td></tr>
        <tr><td>3/4</td><td>tres cuartos</td><td>tres cuartos de litro de leche</td></tr>
      </table>
      <p><strong>Las partes tienen que ser iguales.</strong> Si cortás una torta en 4 pedazos de distinto tamaño, no son "cuartos".</p>
      <p><strong>Denominador más grande, partes más chicas:</strong> 1/8 de pizza es menos que 1/4, porque la cortaste en más pedazos. Es el error más común: pensar que 1/8 es más porque 8 es más que 4.</p>
      <p>Por ejemplo, el hijo de Carlos quería "un octavo" de pizza porque "es más que un cuarto". Carlos cortó la pizza en 8 y le mostró: dos octavos son un cuarto.</p>` },
    { titulo: "Fracción, decimal y porcentaje", video: {"id":"ZqnHbXCCSIc","t":"Cuál fracción es mayor: comparando fracciones · Daniel Carreón (3:58)"}, html: `
      <p class="idea">La misma cantidad se puede escribir de tres formas: <strong>fracción, decimal y porcentaje</strong>. Saber las equivalencias más usadas te ahorra cuentas.</p>
      <table>
        <tr><th>Fracción</th><th>Decimal</th><th>Porcentaje</th></tr>
        <tr><td>1/2</td><td>0,5</td><td>50 %</td></tr>
        <tr><td>1/4</td><td>0,25</td><td>25 %</td></tr>
        <tr><td>3/4</td><td>0,75</td><td>75 %</td></tr>
        <tr><td>1/5</td><td>0,2</td><td>20 %</td></tr>
        <tr><td>1/10</td><td>0,1</td><td>10 %</td></tr>
        <tr><td>1/3</td><td>0,33 (más o menos)</td><td>33 % (más o menos)</td></tr>
      </table>
      <pre><code>De fracción a decimal: dividí arriba por abajo.
3/4 = 3 ÷ 4 = 0,75
De decimal a porcentaje: multiplicá por 100.
0,75 × 100 = 75 %</code></pre>
      <p><strong>Fracciones equivalentes:</strong> 1/2, 2/4 y 4/8 son la misma cantidad. Si multiplicás (o dividís) arriba y abajo por el mismo número, la fracción no cambia.</p>
      <p><strong>Para comparar dos fracciones</strong>, pasalas a decimal: ¿qué es más, 2/3 o 3/5? 2 ÷ 3 = 0,67 y 3 ÷ 5 = 0,6. Es más 2/3.</p>
      <p>Por ejemplo, en una oferta decía "1/4 de descuento" y en otra "20 % off". Carlos pasó 1/4 a 25 %: la primera era mejor.</p>` },
    { titulo: "Fracción de una cantidad y recetas", html: `
      <p class="idea">Para sacar una fracción de algo: <strong>dividí por el de abajo y multiplicá por el de arriba</strong>. 3/4 de 2.000 g = 2.000 ÷ 4 × 3 = 1.500 g.</p>
      <pre><code>3/4 de 2 kg de harina:
2.000 g ÷ 4 = 500 g   (un cuarto)
500 g × 3   = 1.500 g (tres cuartos)

2/3 de 60.000 pesos:
60.000 ÷ 3 = 20.000
20.000 × 2 = 40.000</code></pre>
      <p><strong>Adaptar una receta:</strong> buscá el número por el que tenés que multiplicar. Si la receta es para 4 y cocinás para 6, el número es 6 ÷ 4 = 1,5.</p>
      <table>
        <tr><th>Ingrediente (para 4)</th><th>× 1,5</th><th>Para 6</th></tr>
        <tr><td>500 g de carne</td><td>500 × 1,5</td><td>750 g</td></tr>
        <tr><td>2 huevos</td><td>2 × 1,5</td><td>3 huevos</td></tr>
        <tr><td>1/2 taza de arroz</td><td>0,5 × 1,5</td><td>0,75 = 3/4 taza</td></tr>
        <tr><td>1 cebolla</td><td>1 × 1,5</td><td>1 cebolla y media</td></tr>
      </table>
      <p>Para la mitad de la receta, el número es 0,5; para el doble, 2. Los tiempos de cocción no se multiplican igual: un horno con el doble de comida no tarda el doble. Mirá cómo está la comida.</p>
      <p>Por ejemplo, Carlos tenía una receta de guiso para 4 con 1/2 kilo de carne y cocinaba para 6. Multiplicó por 1,5: compró 750 gramos.</p>` },
  ],
  practica: [
    "Cortá algo en partes iguales (una pizza, una hoja) y anotá qué fracción es cada parte y cuántas partes forman 1/2 y 1/4.",
    "Pasá a decimal y a porcentaje estas fracciones: 1/2, 1/4, 3/4, 1/5 y 2/5, y anotá los resultados en una tabla.",
    "Adaptá una receta real de tu casa a otra cantidad de personas y anotá el número por el que multiplicaste cada ingrediente.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de fraccionarios (fracciones)", url: "https://edu.gcfglobal.org/es/fraccionarios/" },
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "En la fracción 3/4, ¿qué dice el 4?", opciones: ["Cuántas partes tomás","Cuánto cuesta","En cuántas partes iguales se cortó el entero","Cuántos enteros hay"], correcta: 2, explicacion: "El de abajo es el denominador: las partes iguales. \"Cuántas partes tomás\" tienta, pero ese es el 3." },
    { q: "Tu hijo quiere 1/8 de pizza porque \"es más que 1/4\". ¿Tiene razón?", opciones: ["No: 1/8 es menos, porque son partes más chicas","Sí, porque 8 es más que 4","Son iguales","Depende de la pizza"], correcta: 0, explicacion: "Más partes, más chicas. \"8 es más que 4\" tienta, pero acá es al revés." },
    { q: "Si cortás una pizza en 8 porciones y tomás 4, ¿qué fracción comiste?", opciones: ["1/4","4","1/8","1/2"], correcta: 3, explicacion: "4/8 es lo mismo que 1/2. 1/4 tienta por el 4, pero son 4 de 8." },
    { q: "Si cortás una torta en 4 pedazos de distinto tamaño, ¿cada uno es un cuarto?", opciones: ["Sí, son 4 pedazos","No: para ser cuartos tienen que ser iguales","Solo el más grande","Sí, si la torta es redonda"], correcta: 1, explicacion: "Una fracción habla de partes iguales. \"Son 4 pedazos\" tienta, pero no son iguales." },
    { q: "Si querés pasar 3/4 a decimal, ¿cuánto da?", opciones: ["0,34","3,4","0,75","0,43"], correcta: 2, explicacion: "3 ÷ 4 = 0,75. 0,34 tienta si juntás los números, pero hay que dividir." },
    { q: "Si una oferta es \"1/4 de descuento\" y otra \"20 % off\", ¿cuál es mejor?", opciones: ["1/4, que es 25 %","20 %, porque 20 es más que 4","Son iguales","No se puede comparar"], correcta: 0, explicacion: "1/4 es 25 %. \"20 es más que 4\" tienta, pero hay que comparar en la misma forma." },
    { q: "Tenés que comparar 2/3 y 3/5. ¿Cuál es más?", opciones: ["3/5, porque los números son más grandes","Son iguales","No se puede saber","2/3, porque da 0,67 contra 0,6"], correcta: 3, explicacion: "Pasándolas a decimal se ve. Que 3 y 5 sean más grandes tienta, pero importa la división." },
    { q: "¿Cuál de estas fracciones es igual a 1/2?", opciones: ["1/4","4/8","2/3","3/8"], correcta: 1, explicacion: "Multiplicando arriba y abajo por 4, 1/2 da 4/8. 3/8 tienta porque está cerca, pero es menos." },
    { q: "Tenés que sacar 3/4 de 2 kg de harina. ¿Cuánto es?", opciones: ["750 g","1.750 g","1.500 g","500 g"], correcta: 2, explicacion: "2.000 ÷ 4 = 500, por 3 = 1.500. 500 g tienta, pero ese es un cuarto solo." },
    { q: "Tenés que sacar 2/3 de 60.000. ¿Cuánto es?", opciones: ["40.000","20.000","30.000","90.000"], correcta: 0, explicacion: "60.000 ÷ 3 = 20.000, por 2 = 40.000. 20.000 tienta, pero es un tercio." },
    { q: "Tu receta es para 4 y cocinás para 6. ¿Por cuánto multiplicás los ingredientes?", opciones: ["2","6","0,67","1,5"], correcta: 3, explicacion: "6 ÷ 4 = 1,5. Por 2 tienta por redondo, pero cocinarías para 8." },
    { q: "Si la receta para 4 lleva 1/2 kilo de carne y cocinás para 6, ¿cuánta comprás?", opciones: ["1 kg","750 g","600 g","500 g"], correcta: 1, explicacion: "500 × 1,5 = 750. Un kilo tienta por redondo, pero alcanzaría para 8." },
  ],
},
{
  id: "porcentajes",
  icono: "💯",
  titulo: "Porcentajes sin miedo",
  nivel: "Intermedio",
  objetivos: [
    "Calcular de cabeza el 10, 5, 25 y 50 % de un precio",
    "Calcular el precio final con un descuento o un recargo",
    "Sacar el IVA de un precio y entender por qué dos aumentos no se suman",
  ],
  lecciones: [
    { titulo: "Qué es un porcentaje", video: {"id":"RE3XoDORMys","t":"Cómo calcular un porcentaje, para principiantes · Daniel Carreón (4:20)"}, html: `
      <p class="idea">Un <strong>porcentaje</strong> dice cuánto de cada 100. El 15 % es 15 de cada 100. Para calcularlo de cabeza, casi todo sale del <strong>10 %</strong>: correr la coma un lugar.</p>
      <table>
        <tr><th>Porcentaje</th><th>Cómo se saca</th><th>De 8.000</th></tr>
        <tr><td>10 %</td><td>Dividir por 10 (sacar un cero)</td><td>800</td></tr>
        <tr><td>5 %</td><td>La mitad del 10 %</td><td>400</td></tr>
        <tr><td>20 %</td><td>El doble del 10 %</td><td>1.600</td></tr>
        <tr><td>25 %</td><td>Dividir por 4</td><td>2.000</td></tr>
        <tr><td>50 %</td><td>La mitad</td><td>4.000</td></tr>
        <tr><td>1 %</td><td>Dividir por 100</td><td>80</td></tr>
      </table>
      <pre><code>Armar cualquier porcentaje con piezas:
15 % de 8.000 = 10 % + 5 %   = 800 + 400   = 1.200
30 % de 8.000 = 3 × 10 %     = 3 × 800     = 2.400
35 % de 8.000 = 30 % + 5 %   = 2.400 + 400 = 2.800</code></pre>
      <p><strong>Con la calculadora:</strong> multiplicá por el porcentaje y dividí por 100. 15 % de 8.000 = 8.000 × 15 ÷ 100 = 1.200. No uses la tecla % si no sabés cómo funciona en tu calculadora: cada una la usa distinto.</p>
      <p>Por ejemplo, Carlos quería dejar el 10 % de propina en una cuenta de 23.500. Sacó un cero y corrió la coma: 2.350. Redondeó a 2.400.</p>` },
    { titulo: "Descuentos y recargos", video: {"id":"y98aiAErP68","t":"Calcular porcentajes al instante y sin calculadora · Matemóvil (7:04)"}, html: `
      <p class="idea">Un <strong>descuento</strong> te saca un porcentaje del precio; un <strong>recargo</strong> te lo suma. El atajo: multiplicá por lo que <strong>queda</strong> o por lo que <strong>queda con el extra</strong>.</p>
      <pre><code>Descuento del 20 % sobre 8.000:
Forma larga:  20 % = 1.600  →  8.000 − 1.600 = 6.400
Atajo:        queda el 80 %  →  8.000 × 0,80 = 6.400

Recargo del 10 % sobre 8.000 (por ejemplo, pagar en cuotas):
Forma larga:  10 % = 800    →  8.000 + 800 = 8.800
Atajo:        110 %         →  8.000 × 1,10 = 8.800</code></pre>
      <table>
        <tr><th>Oferta</th><th>Descuento real si llevás dos iguales</th></tr>
        <tr><td>2 × 1 (llevás 2, pagás 1)</td><td>50 %</td></tr>
        <tr><td>3 × 2 (llevás 3, pagás 2)</td><td>33 % (un tercio)</td></tr>
        <tr><td>Segunda unidad al 50 %</td><td>25 % sobre las dos</td></tr>
        <tr><td>Segunda unidad al 70 %</td><td>35 % sobre las dos</td></tr>
      </table>
      <pre><code>¿Por qué "segunda al 50 %" es 25 %?
Dos productos de 1.000: pagás 1.000 + 500 = 1.500 en vez de 2.000.
Te ahorrás 500 de 2.000 = 25 %.</code></pre>
      <p><strong>Ojo con "hasta 50 % off":</strong> quiere decir que algún producto tiene 50 %, no todos. Fijate el descuento del que querés comprar.</p>
      <p>Por ejemplo, Carlos dudaba entre un 2 × 1 en yerba y "segunda al 50 %" en café. Solo necesitaba uno de cada uno: ninguna oferta le servía si no iba a usar la segunda unidad.</p>` },
    { titulo: "El IVA y los aumentos seguidos", html: `
      <p class="idea">Dos porcentajes seguidos <strong>no se suman</strong>: el segundo se calcula sobre el precio ya cambiado. Y para sacar el IVA no se resta el 21 %: se <strong>divide por 1,21</strong>.</p>
      <pre><code>Dos aumentos del 10 %:
1.000 × 1,10 = 1.100
1.100 × 1,10 = 1.210  → subió 21 %, no 20 %

Sube 50 % y después baja 50 %:
1.000 × 1,50 = 1.500
1.500 × 0,50 =   750  → no vuelve a 1.000</code></pre>
      <p>El <strong>IVA</strong> es el impuesto que en Argentina se suma a la mayoría de los precios; el más común es del 21 %. Un precio "con IVA" ya lo tiene adentro.</p>
      <pre><code>Precio con IVA: 12.100
Sin IVA = 12.100 ÷ 1,21 = 10.000
IVA     = 12.100 − 10.000 = 2.100

El error común: 12.100 − 21 % = 12.100 × 0,79 = 9.559 ✘</code></pre>
      <table>
        <tr><th>Para saber...</th><th>Cuenta</th></tr>
        <tr><td>Cuánto subió algo, en %</td><td>(nuevo − viejo) ÷ viejo × 100</td></tr>
        <tr><td>Ejemplo: de 2.000 a 2.500</td><td>500 ÷ 2.000 × 100 = 25 %</td></tr>
      </table>
      <p>El ticket de compra en Argentina tiene que mostrar el IVA contenido en el precio: mirá ese renglón y compará con tu cuenta.</p>
      <p>Por ejemplo, a Carlos le pasaron un presupuesto de pintura de 121.000 "con IVA". Para comparar con otro sin IVA, dividió por 1,21: 100.000.</p>` },
  ],
  practica: [
    "Calculá de cabeza el 10, 5, 15 y 25 % de 3 precios reales y anotá los resultados; después controlalos con la calculadora.",
    "Buscá 3 ofertas del súper (2 × 1, 3 × 2, segunda al 50 % o 70 %) y anotá el descuento real de cada una.",
    "Tomá 2 tickets de compra y anotá el IVA que figura; controlalo dividiendo el total por 1,21.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de porcentajes", url: "https://edu.gcfglobal.org/es/porcentajes/" },
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
    { t: "Defensa del Consumidor (Argentina): derechos al comprar", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Si querés el 10 % de 6.500 de cabeza, ¿cuánto da?", opciones: ["65","6.500","650","1.300"], correcta: 2, explicacion: "El 10 % es sacar un cero o correr la coma: 650. 1.300 tienta, pero ese es el 20 %." },
    { q: "Si querés el 15 % de 8.000, ¿cómo lo armás?", opciones: ["10 % más 5 %: 800 + 400 = 1.200","8.000 − 15 = 7.985","15 × 8 = 120","8.000 ÷ 15"], correcta: 0, explicacion: "Se arma con piezas del 10 %. Restar 15 tienta, pero un porcentaje no es un número suelto." },
    { q: "Si querés el 25 % de 12.000, ¿qué cuenta hacés?", opciones: ["Dividir por 25","Restar 25","Multiplicar por 25","Dividir por 4: 3.000"], correcta: 3, explicacion: "El 25 % es un cuarto. Dividir por 25 tienta, pero da otra cosa." },
    { q: "Querés dejar el 10 % de propina en una cuenta de 23.500. ¿Cuánto es?", opciones: ["235","2.350","23.500","4.700"], correcta: 1, explicacion: "Sacar un lugar a la derecha: 2.350. 235 tienta si corrés la coma dos lugares, pero eso es el 1 %." },
    { q: "Si un producto de 8.000 tiene 20 % de descuento, ¿cuánto pagás?", opciones: ["7.980","1.600","6.400","9.600"], correcta: 2, explicacion: "Queda el 80 %: 8.000 × 0,80. 1.600 tienta, pero ese es el descuento, no lo que pagás." },
    { q: "Si pagar en cuotas tiene un recargo del 10 % sobre 8.000, ¿cuánto pagás en total?", opciones: ["8.800","8.010","7.200","800"], correcta: 0, explicacion: "8.000 × 1,10 = 8.800. 7.200 tienta si restás en vez de sumar." },
    { q: "Llevás dos productos iguales con \"segunda unidad al 50 %\". ¿Qué descuento tenés sobre el total?", opciones: ["50 %","100 %","10 %","25 %"], correcta: 3, explicacion: "Pagás 1,5 en vez de 2: te ahorrás un cuarto. El 50 % tienta por el cartel, pero es solo sobre la segunda." },
    { q: "Ves un cartel \"hasta 50 % off\". ¿Qué quiere decir?", opciones: ["Que todo tiene 50 %","Que algún producto tiene 50 %, no todos","Que todo tiene más de 50 %","Que no hay descuento"], correcta: 1, explicacion: "\"Hasta\" marca el máximo. Que todo tiene 50 % tienta, pero hay que mirar cada producto." },
    { q: "Si un precio sube 10 % y después otro 10 %, ¿cuánto subió en total?", opciones: ["20 %","10 %","21 %","11 %"], correcta: 2, explicacion: "El segundo aumento es sobre el precio ya aumentado. 20 % tienta porque sumás, pero no se suman." },
    { q: "Algo de 1.000 sube 50 % y después baja 50 %. ¿Cuánto queda?", opciones: ["750","1.000","500","1.500"], correcta: 0, explicacion: "1.500 × 0,50 = 750. 1.000 tienta porque \"sube y baja lo mismo\", pero el 50 % es de otro número." },
    { q: "Si un presupuesto dice 121.000 con IVA del 21 %, ¿cuánto es sin IVA?", opciones: ["95.590","99.790","121.000","100.000"], correcta: 3, explicacion: "Se divide por 1,21. 95.590 tienta si le restás el 21 %, pero ese es el error común." },
    { q: "El alquiler pasó de 200.000 a 250.000. ¿Cuánto subió en porcentaje?", opciones: ["50 %","25 %","20 %","250 %"], correcta: 1, explicacion: "50.000 ÷ 200.000 × 100 = 25 %. 20 % tienta si dividís por el precio nuevo." },
  ],
},
{
  id: "proporciones",
  icono: "⚖️",
  titulo: "Precio por kilo y regla de tres",
  nivel: "Intermedio",
  objetivos: [
    "Comparar ofertas con el precio por kilo o por litro",
    "Resolver problemas con la regla de tres directa e inversa",
    "Repartir un gasto en partes proporcionales",
  ],
  lecciones: [
    { titulo: "El precio por unidad", html: `
      <p class="idea">Para saber qué conviene, no mires el precio del paquete: mirá el <strong>precio por kilo, por litro o por unidad</strong>. Se calcula dividiendo el precio por la cantidad.</p>
      <pre><code>Yerba de 1 kg:   6.000 ÷ 1    = 6.000 por kilo
Yerba de 500 g:  3.200 ÷ 0,5  = 6.400 por kilo
→ conviene la de 1 kg, aunque sale más plata en el momento.</code></pre>
      <table>
        <tr><th>Producto</th><th>Cuenta</th><th>Precio por unidad</th></tr>
        <tr><td>Detergente 750 ml a 2.400</td><td>2.400 ÷ 0,75</td><td>3.200 por litro</td></tr>
        <tr><td>Detergente 1,5 L a 4.500</td><td>4.500 ÷ 1,5</td><td>3.000 por litro</td></tr>
        <tr><td>Pack de 6 a 5.400</td><td>5.400 ÷ 6</td><td>900 cada uno</td></tr>
      </table>
      <p><strong>Pasar gramos a kilos:</strong> dividí por 1.000. 500 g = 0,5 kg; 250 g = 0,25 kg. Lo mismo con mililitros y litros.</p>
      <p><strong>Mirá la etiqueta de la góndola:</strong> muchas muestran en letra chica el precio por kilo o por litro. Si está, ya te hicieron la cuenta.</p>
      <p><strong>Lo más barato por kilo no siempre conviene:</strong> si el paquete grande se vence antes de que lo uses, terminás tirando plata.</p>
      <p>Los precios de los ejemplos son inventados para practicar. Por ejemplo, Carlos comparó dos paquetes de fideos: 500 g a 1.300 y 1 kg a 2.700. Por kilo, 2.600 contra 2.700: le convenía llevar dos paquetes chicos.</p>` },
    { titulo: "La regla de tres", video: {"id":"Xphb-tzJj24","t":"Regla de 3 simple, para principiantes · Daniel Carreón (3:22)"}, html: `
      <p class="idea">La <strong>regla de tres</strong> sirve cuando sabés cuánto vale algo para una cantidad y querés saberlo para otra. Primero decidí si es <strong>directa</strong> (más de uno, más del otro) o <strong>inversa</strong> (más de uno, menos del otro).</p>
      <pre><code>Directa: 3 kg de papa cuestan 4.500. ¿Cuánto cuestan 5 kg?
3 kg → 4.500
5 kg →   x
x = 4.500 × 5 ÷ 3 = 7.500
(más kilos → más plata)

Inversa: 4 pintores tardan 6 días. ¿Cuánto tardan 3 pintores?
4 pintores → 6 días
3 pintores → x
x = 4 × 6 ÷ 3 = 8 días
(menos pintores → más días)</code></pre>
      <table>
        <tr><th>Tipo</th><th>Cómo se reconoce</th><th>Cuenta</th></tr>
        <tr><td>Directa</td><td>Si uno sube, el otro sube</td><td>Multiplicás en cruz y dividís</td></tr>
        <tr><td>Inversa</td><td>Si uno sube, el otro baja</td><td>Multiplicás los dos de la misma fila y dividís</td></tr>
      </table>
      <p><strong>Controlá con sentido común:</strong> si 3 kg cuestan 4.500, 5 kg tienen que costar más. Si te da menos, usaste la regla equivocada.</p>
      <p><strong>El atajo de "por uno":</strong> si 3 kg cuestan 4.500, 1 kg cuesta 1.500; 5 kg, 7.500. Es la misma regla de tres, en dos pasos.</p>
      <p>Por ejemplo, Carlos pintó una pieza de 30 m² con 6 litros de pintura. Para otra de 45 m² hizo la regla de tres: 6 × 45 ÷ 30 = 9 litros.</p>` },
    { titulo: "Repartir en partes", html: `
      <p class="idea">Repartir <strong>en partes proporcionales</strong> es repartir según algo: personas, días, horas. Primero contás cuántas partes hay en total, después cuánto vale cada parte.</p>
      <pre><code>La luz de una casa compartida: 60.000.
En un departamento viven 2 personas y en el otro 4.
Partes: 2 + 4 = 6
Cada parte: 60.000 ÷ 6 = 10.000
Departamento de 2: 2 × 10.000 = 20.000
Departamento de 4: 4 × 10.000 = 40.000
Control: 20.000 + 40.000 = 60.000 ✔</code></pre>
      <table>
        <tr><th>Situación</th><th>Se reparte según</th></tr>
        <tr><td>Alquiler de una quinta un fin de semana</td><td>Los días que se queda cada uno</td></tr>
        <tr><td>El pago de una changa entre dos</td><td>Las horas que trabajó cada uno</td></tr>
        <tr><td>Una compra grande para varias familias</td><td>Los integrantes de cada familia</td></tr>
      </table>
      <p><strong>Ponerse de acuerdo antes:</strong> la matemática reparte bien, pero el criterio (personas, días u horas) lo eligen ustedes. Anotalo antes de gastar y se evitan discusiones.</p>
      <p>Por ejemplo, Carlos y un ayudante cobraron 150.000 por una pintura. Carlos trabajó 12 horas y el ayudante 8: 20 partes, cada una de 7.500. Carlos se llevó 90.000 y el ayudante 60.000.</p>` },
  ],
  practica: [
    "En el súper, calculá el precio por kilo o por litro de 2 tamaños de 3 productos y anotá cuál conviene en cada caso.",
    "Resolvé 3 reglas de tres de tu vida (una receta, una compra, un trabajo) y anotá si eran directas o inversas.",
    "Repartí un gasto compartido real en partes proporcionales y anotá cuánto le toca a cada uno y el control de la suma.",
  ],
  recursos: [
    { t: "Khan Academy en español: razones, tasas y proporciones", url: "https://es.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates" },
    { t: "GCFAprendeLibre: curso gratis de matemáticas básicas", url: "https://edu.gcfglobal.org/es/matematicas-basicas/" },
    { t: "Defensa del Consumidor (Argentina): derechos al comprar", url: "https://www.argentina.gob.ar/defensadelconsumidor" },
  ],
  quiz: [
    { q: "La yerba de 1 kg sale 6.000 y la de 500 g, 3.200. ¿Cuál conviene por kilo?", opciones: ["La de 500 g, porque es más barata","Las dos igual","La de 1 kg: 6.000 contra 6.400 por kilo","No se puede saber"], correcta: 2, explicacion: "Por kilo, la grande es más barata. La chica tienta porque sale menos plata en el momento." },
    { q: "Un detergente de 750 ml sale 2.400. ¿Cuánto sale el litro?", opciones: ["3.200","1.800","2.400","3.000"], correcta: 0, explicacion: "2.400 ÷ 0,75 = 3.200. 1.800 tienta si multiplicás por 0,75 en vez de dividir." },
    { q: "Si querés pasar 250 g a kilos, ¿cuánto es?", opciones: ["2,5 kg","25 kg","0,025 kg","0,25 kg"], correcta: 3, explicacion: "Se divide por 1.000. 2,5 tienta si corrés la coma un solo lugar." },
    { q: "Si el paquete grande es más barato por kilo, pero se te vence antes de usarlo, ¿qué conviene?", opciones: ["El grande, siempre","El chico: si tirás parte, el grande sale más caro","Ninguno","Dos grandes"], correcta: 1, explicacion: "Lo que se tira también cuesta. \"Siempre el grande\" tienta por el precio por kilo, pero no si se vence." },
    { q: "Si 3 kg de papa cuestan 4.500, ¿cuánto cuestan 5 kg?", opciones: ["2.700","6.500","7.500","22.500"], correcta: 2, explicacion: "Directa: 4.500 × 5 ÷ 3. 2.700 tienta si la hacés inversa, pero más kilos cuestan más." },
    { q: "Si 4 pintores tardan 6 días, ¿cuánto tardan 3 pintores?", opciones: ["8 días","4,5 días","6 días","12 días"], correcta: 0, explicacion: "Inversa: 4 × 6 ÷ 3. 4,5 tienta si la hacés directa, pero con menos gente se tarda más." },
    { q: "Si una cantidad sube y la otra baja, ¿qué regla de tres es?", opciones: ["Directa","No es regla de tres","Es un porcentaje","Inversa"], correcta: 3, explicacion: "Uno sube y el otro baja es inversa. Directa tienta porque es la más común." },
    { q: "Hacés una regla de tres y te da que 5 kg cuestan menos que 3 kg. ¿Qué pasó?", opciones: ["Está bien, es una oferta","Usaste la regla equivocada: más kilos tienen que costar más","La calculadora se rompió","Nada"], correcta: 1, explicacion: "El sentido común controla la cuenta. \"Es una oferta\" tienta, pero la regla de tres no sabe de ofertas." },
    { q: "Si pintaste 30 m² con 6 litros, ¿cuántos litros necesitás para 45 m²?", opciones: ["4 litros","7,5 litros","9 litros","15 litros"], correcta: 2, explicacion: "6 × 45 ÷ 30 = 9. 4 tienta si dividís al revés." },
    { q: "La luz cuesta 60.000 y la comparten departamentos de 2 y 4 personas, según las personas. ¿Cuánto paga el de 4?", opciones: ["40.000","30.000","20.000","15.000"], correcta: 0, explicacion: "6 partes de 10.000: el de 4 paga 4 partes. 30.000 tienta si dividís en dos iguales." },
    { q: "Cobraron 150.000 entre dos; uno trabajó 12 horas y el otro 8. ¿Cuánto le toca al de 12 horas?", opciones: ["75.000","100.000","120.000","90.000"], correcta: 3, explicacion: "20 partes de 7.500; 12 × 7.500. 75.000 tienta si repartís a la mitad." },
    { q: "Si van a alquilar una quinta entre varios y no se quedan los mismos días, ¿qué hacen antes de pagar?", opciones: ["Pagan todos igual sin hablar","Acuerdan el criterio (por días) y lo anotan","Paga el que llegó primero","Lo deciden después de pelear"], correcta: 1, explicacion: "El criterio se elige antes. Todos igual tienta por simple, pero no es justo si unos se quedan más." },
  ],
},
{
  id: "medidas",
  icono: "📏",
  titulo: "Medidas: metros, metros cuadrados y litros",
  nivel: "Intermedio",
  objetivos: [
    "Pasar entre milímetros, centímetros, metros y kilómetros",
    "Calcular superficies en metros cuadrados para pintar o poner piso",
    "Calcular volúmenes en litros, por ejemplo de un tanque",
  ],
  lecciones: [
    { titulo: "Metros y centímetros", html: `
      <p class="idea">Las medidas de largo van de 10 en 10, igual que los números: <strong>1 metro = 100 centímetros = 1.000 milímetros</strong>. Pasar de una a otra es correr la coma.</p>
      <table>
        <tr><th>Medida</th><th>Equivale a</th><th>Para qué se usa</th></tr>
        <tr><td>1 milímetro (mm)</td><td>0,1 cm</td><td>Tornillos, espesores</td></tr>
        <tr><td>1 centímetro (cm)</td><td>10 mm</td><td>Muebles, ropa</td></tr>
        <tr><td>1 metro (m)</td><td>100 cm</td><td>Paredes, habitaciones</td></tr>
        <tr><td>1 kilómetro (km)</td><td>1.000 m</td><td>Distancias de viaje</td></tr>
      </table>
      <pre><code>De metros a centímetros: × 100  → 2,35 m = 235 cm
De centímetros a metros: ÷ 100  → 180 cm = 1,8 m
De milímetros a centímetros: ÷ 10 → 45 mm = 4,5 cm</code></pre>
      <p><strong>Medir bien:</strong> en las cintas métricas de metal, el ganchito de la punta es el cero (se mueve un poco a propósito, para medir bien apoyando o enganchando). En las cintas de costura, fijate dónde está el 0. Medí dos veces antes de cortar o comprar.</p>
      <p><strong>Pulgadas:</strong> algunas cosas se venden en pulgadas (televisores, caños, llaves). 1 pulgada = 2,54 cm. Un televisor de 50 pulgadas mide 127 cm en diagonal, de una esquina a la otra.</p>
      <p>Por ejemplo, Carlos tenía que comprar un zócalo para una pared de 3,45 m y en el corralón lo vendían en tiras de 2 m. Necesitaba 2 tiras: 4 m, y le sobraban 55 cm.</p>` },
    { titulo: "Metros cuadrados: pintar y poner piso", video: {"id":"BcqRINSpM08","t":"Cómo sacar el metro cuadrado de una habitación · Galeano Constructora (2:36)"}, html: `
      <p class="idea">La <strong>superficie</strong> se mide en <strong>metros cuadrados (m²)</strong>: largo por ancho. Es lo que necesitás saber para comprar pintura, piso o cerámicos.</p>
      <pre><code>Una pared de 4 m de largo y 2,6 m de alto:
4 × 2,6 = 10,4 m²
Le restás una ventana de 1,2 × 1 = 1,2 m²
Pared a pintar: 10,4 − 1,2 = 9,2 m²</code></pre>
      <table>
        <tr><th>Para</th><th>Cuenta</th><th>Ejemplo</th></tr>
        <tr><td>Pintura</td><td>m² × manos ÷ rendimiento de la lata</td><td>36 m² × 2 manos ÷ 10 m² por litro = 7,2 litros</td></tr>
        <tr><td>Piso o cerámico</td><td>m² del piso + 10 % por cortes y roturas</td><td>12 m² + 1,2 = 13,2 m²</td></tr>
        <tr><td>Cajas de cerámico</td><td>m² necesarios ÷ m² por caja, redondeando para arriba</td><td>13,2 ÷ 2 = 6,6 → 7 cajas</td></tr>
      </table>
      <p>El <strong>rendimiento</strong> de una pintura dice cuántos metros cuadrados cubre un litro por mano. Está en la lata; el 10 m² por litro de la tabla es un ejemplo.</p>
      <p><strong>Siempre redondeá para arriba</strong> cuando comprás: no se vende media caja, y quedarte corto te hace volver al corralón.</p>
      <p><strong>Metros cuadrados no son metros:</strong> una habitación de 3 × 4 m tiene 12 m² de piso, pero 14 m de borde (3 + 4 + 3 + 4) para el zócalo.</p>
      <p>Por ejemplo, Carlos pintó las cuatro paredes de una pieza de 3 × 4 m con 2,6 m de alto: 14 m de borde × 2,6 = 36,4 m². Con 2 manos y una pintura de 10 m² por litro, compró 8 litros.</p>` },
    { titulo: "Litros, metros cúbicos y kilos", html: `
      <p class="idea">El <strong>volumen</strong> es cuánto entra en algo: largo × ancho × alto. Se mide en <strong>metros cúbicos (m³)</strong> o en <strong>litros</strong>: 1 m³ = 1.000 litros.</p>
      <pre><code>Un tanque de 1,5 m × 1 m × 1 m:
1,5 × 1 × 1 = 1,5 m³ = 1.500 litros

Una pileta de lona de 3 m × 2 m llenada hasta 0,6 m:
3 × 2 × 0,6 = 3,6 m³ = 3.600 litros</code></pre>
      <table>
        <tr><th>Medida</th><th>Equivale a</th></tr>
        <tr><td>1 litro</td><td>1.000 mililitros (ml)</td></tr>
        <tr><td>1 m³</td><td>1.000 litros</td></tr>
        <tr><td>1 kilo</td><td>1.000 gramos</td></tr>
        <tr><td>1 litro de agua</td><td>Pesa más o menos 1 kilo</td></tr>
      </table>
      <p><strong>Por qué importa el peso del agua:</strong> un tanque de 1.000 litros lleno pesa más o menos una tonelada. Por eso un tanque en el techo o sobre una estructura tiene que estar calculado e instalado por alguien que sabe: no es un arreglo para hacer sin un profesional.</p>
      <p><strong>Las facturas de agua y gas</strong> suelen medir el consumo en metros cúbicos. 15 m³ de agua en un mes son 15.000 litros: unos 500 por día.</p>
      <p>Por ejemplo, Carlos quería saber cuánta agua necesitaba para llenar la pileta de lona de sus hijos: 3 × 2 × 0,6 = 3,6 m³. Eran 3.600 litros, unos 3.600 kilos de agua sobre el patio.</p>` },
  ],
  practica: [
    "Medí 3 cosas de tu casa en centímetros y pasalas a metros y a milímetros; anotá los resultados.",
    "Calculá los m² de las paredes de una habitación (restando puertas y ventanas) y anotá cuántos litros de pintura harían falta con el rendimiento de una lata real.",
    "Calculá en litros cuánto entra en un recipiente grande de tu casa (un balde, un tacho o un tanque) midiendo largo, ancho y alto, y anotá el resultado.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de matemáticas básicas", url: "https://edu.gcfglobal.org/es/matematicas-basicas/" },
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
  ],
  quiz: [
    { q: "Si querés pasar 2,35 m a centímetros, ¿cuánto da?", opciones: ["23,5 cm","2.350 cm","235 cm","0,235 cm"], correcta: 2, explicacion: "Por 100: 235. 2.350 tienta si multiplicás por 1.000, pero eso son milímetros." },
    { q: "Si querés pasar 180 cm a metros, ¿cuánto da?", opciones: ["1,8 m","18 m","0,18 m","180 m"], correcta: 0, explicacion: "Se divide por 100. 18 m tienta si corrés la coma un solo lugar." },
    { q: "Si un televisor es de 50 pulgadas, ¿cuánto mide en diagonal?", opciones: ["50 cm","254 cm","20 cm","127 cm"], correcta: 3, explicacion: "50 × 2,54 = 127. 50 cm tienta si creés que pulgada es centímetro." },
    { q: "Tenés que cubrir 3,45 m con tiras de 2 m. ¿Cuántas tiras comprás?", opciones: ["1","2","3","1,7"], correcta: 1, explicacion: "Con una no alcanza y no se venden partes: 2. 1,7 tienta como cuenta, pero no se compra así." },
    { q: "Si una pared mide 4 m de largo y 2,6 m de alto, ¿cuántos m² tiene?", opciones: ["6,6 m²","13,2 m²","10,4 m²","104 m²"], correcta: 2, explicacion: "Largo por ancho: 4 × 2,6. 6,6 tienta si sumás en vez de multiplicar." },
    { q: "La pared tiene una ventana. ¿Qué hacés con su superficie al calcular la pintura?", opciones: ["La restás","La sumás","La multiplicás","La ignorás siempre"], correcta: 0, explicacion: "La ventana no se pinta. Ignorarla tienta por simple, pero comprás de más." },
    { q: "Tenés que pintar 36 m² con 2 manos y la pintura rinde 10 m² por litro. ¿Cuántos litros necesitás?", opciones: ["3,6 litros","72 litros","18 litros","7,2 litros"], correcta: 3, explicacion: "36 × 2 ÷ 10 = 7,2. 3,6 tienta si te olvidás de la segunda mano." },
    { q: "Si vas a poner 12 m² de cerámico, ¿cuántos m² comprás?", opciones: ["12 m² justos","Unos 13,2 m²: 10 % más por cortes y roturas","24 m²","10 m²"], correcta: 1, explicacion: "Siempre se rompe o se corta algo. Justo tienta por ahorrar, pero te quedás corto." },
    { q: "Si necesitás 13,2 m² y cada caja trae 2 m², ¿cuántas cajas comprás?", opciones: ["6","6,6","7","13"], correcta: 2, explicacion: "6,6 se redondea para arriba. 6 tienta, pero te faltaría un pedazo." },
    { q: "Una habitación de 3 × 4 m, ¿cuántos metros de zócalo lleva (sin restar la puerta)?", opciones: ["14 m","12 m","7 m","24 m"], correcta: 0, explicacion: "El borde es 3 + 4 + 3 + 4. 12 tienta porque son los m² del piso, pero eso es superficie." },
    { q: "Si un tanque mide 1,5 × 1 × 1 m, ¿cuántos litros entran?", opciones: ["150 litros","15 litros","3,5 litros","1.500 litros"], correcta: 3, explicacion: "1,5 m³ × 1.000. 3,5 tienta si sumás las medidas." },
    { q: "Te dicen que pongas un tanque de 1.000 litros sobre una estructura en el techo. ¿Qué tenés en cuenta?", opciones: ["Que pesa poco porque es agua","Que lleno pesa más o menos una tonelada: lo tiene que calcular e instalar un profesional","Nada, cualquier estructura aguanta","Que se puede poner vacío y listo"], correcta: 1, explicacion: "Un litro de agua pesa un kilo. \"Pesa poco\" tienta, pero son unos 1.000 kilos." },
  ],
},
{
  id: "tiempo",
  icono: "⏰",
  titulo: "Horas, minutos y velocidad",
  nivel: "Intermedio",
  objetivos: [
    "Sumar y restar horas y minutos sin equivocarte",
    "Pasar minutos a horas con decimales para cobrar o pagar por hora",
    "Calcular tiempo de viaje y consumo de combustible",
  ],
  lecciones: [
    { titulo: "Sumar y restar horas", html: `
      <p class="idea">Las horas no van de 10 en 10 sino de <strong>60 en 60</strong>: 60 minutos son 1 hora. Por eso, al sumar, cada vez que los minutos pasan de 60 los convertís en una hora más.</p>
      <pre><code>Sumar: 2 h 45 min + 1 h 30 min
Horas:   2 + 1   = 3 h
Minutos: 45 + 30 = 75 min = 1 h 15 min
Total:   3 h + 1 h 15 min = 4 h 15 min

Restar: de 8:20 a 17:05, ¿cuánto pasó?
De 8:20 a 9:00  = 40 min
De 9:00 a 17:00 = 8 h
De 17:00 a 17:05 = 5 min
Total: 8 h 45 min</code></pre>
      <table>
        <tr><th>Error común</th><th>Por qué está mal</th></tr>
        <tr><td>2:45 + 1:30 = 3:75</td><td>75 minutos es más de una hora: son 4:15</td></tr>
        <tr><td>De 8:20 a 17:05 = 9:15 (restando 17,05 − 8,20 como números)</td><td>Las horas no son decimales: son 8 h 45 min</td></tr>
      </table>
      <p><strong>El método de completar</strong> (como con el vuelto) funciona muy bien con horas: llegás hasta la hora en punto, sumás las horas enteras y después los minutos que quedan.</p>
      <p><strong>Horario de 24 horas:</strong> las 17:05 son las 5:05 de la tarde. Para pasar de 24 a 12 horas después del mediodía, restás 12.</p>
      <p>Por ejemplo, Carlos trabajó el sábado de 8:20 a 17:05 con una hora para almorzar. Completando: 8 h 45 min, menos 1 h, son 7 h 45 min de trabajo.</p>` },
    { titulo: "Minutos a horas para cobrar", video: {"id":"sK_Ztt2EpHE","t":"Convirtiendo minutos en números decimales de hora · Khan Academy Español (4:56)"}, html: `
      <p class="idea">Para cobrar o pagar por hora, hay que pasar los minutos a <strong>horas con decimales</strong>: se dividen por 60. Media hora no es 0,30: es <strong>0,5</strong>.</p>
      <table>
        <tr><th>Minutos</th><th>En horas</th></tr>
        <tr><td>15 min</td><td>0,25 h</td></tr>
        <tr><td>20 min</td><td>0,33 h (más o menos)</td></tr>
        <tr><td>30 min</td><td>0,5 h</td></tr>
        <tr><td>45 min</td><td>0,75 h</td></tr>
      </table>
      <pre><code>Trabajaste 7 h 45 min y la hora vale $5.000:
45 ÷ 60 = 0,75  →  7,75 h
7,75 × 5.000 = $38.750

El error: tomar "7,45 h"
7,45 × 5.000 = $37.250  → cobrás $1.500 de menos</code></pre>
      <p><strong>Al revés, de decimales a minutos:</strong> multiplicás la parte decimal por 60. 2,4 h = 2 h y 0,4 × 60 = 24 min.</p>
      <p><strong>Para las aplicaciones de transporte o los fletes</strong> que cobran por minuto, la cuenta es directa: minutos por el precio de cada minuto.</p>
      <p>El precio de la hora es un número de ejemplo: el tuyo depende de tu trabajo. Por ejemplo, Carlos cobraba sus changas "a ojo". Empezó a anotar las horas y a pasarlas bien a decimales: en un mes notó que cobraba de menos casi 2 horas por semana.</p>` },
    { titulo: "Velocidad, viaje y combustible", html: `
      <p class="idea">Velocidad, distancia y tiempo van juntos: <strong>tiempo = distancia ÷ velocidad</strong>. Con eso calculás cuánto tardás en un viaje y cuánto combustible usás.</p>
      <pre><code>Viaje de 150 km a 100 km/h promedio:
150 ÷ 100 = 1,5 h = 1 h 30 min

Viaje de 300 km con un auto que hace 12 km por litro:
300 ÷ 12 = 25 litros
Si el litro sale $1.500 (precio de ejemplo): 25 × 1.500 = $37.500</code></pre>
      <table>
        <tr><th>Para saber</th><th>Cuenta</th></tr>
        <tr><td>Tiempo</td><td>distancia ÷ velocidad</td></tr>
        <tr><td>Distancia</td><td>velocidad × tiempo</td></tr>
        <tr><td>Velocidad promedio</td><td>distancia ÷ tiempo</td></tr>
        <tr><td>Litros de combustible</td><td>distancia ÷ kilómetros por litro</td></tr>
      </table>
      <p><strong>Velocidad promedio no es la máxima:</strong> en un viaje hay paradas, peajes y tránsito. Si la ruta deja ir a 110, tu promedio real suele ser bastante menos. Calculá con un promedio prudente y respetá siempre las velocidades máximas.</p>
      <p><strong>Compartir el viaje:</strong> el combustible se puede repartir en partes iguales entre los que viajan, como viste en el módulo de proporciones.</p>
      <p>Por ejemplo, Carlos tenía que llegar a una obra a 90 km a las 9:00. A 60 km/h promedio en ruta con tránsito: 90 ÷ 60 = 1,5 h. Salió a las 7:15 para tener 15 minutos de margen.</p>` },
  ],
  practica: [
    "Anotá tus horarios de entrada y salida de 3 días (trabajo, estudio o tareas) y calculá el total de horas y minutos de cada día.",
    "Pasá a horas con decimales 5 tiempos de tu semana (por ejemplo 2 h 15 min) y anotá cuánto cobrarías con un precio por hora que elijas.",
    "Calculá el tiempo y el combustible de un viaje real que hagas seguido, con los km por litro de un vehículo que conozcas, y anotá los resultados.",
  ],
  recursos: [
    { t: "Khan Academy en español: razones, tasas y proporciones", url: "https://es.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates" },
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
    { t: "Educ.ar (Ministerio de Educación): recursos educativos gratis", url: "https://www.educ.ar/recursos" },
  ],
  quiz: [
    { q: "Si sumás 2 h 45 min y 1 h 30 min, ¿cuánto da?", opciones: ["3 h 75 min","3 h 15 min","4 h 15 min","4 h 75 min"], correcta: 2, explicacion: "75 minutos son 1 h 15 min. 3 h 75 min tienta porque sumás directo, pero los minutos no pasan de 59." },
    { q: "Si trabajás de 8:20 a 17:05, ¿cuánto tiempo pasó?", opciones: ["8 h 45 min","9 h 15 min","8 h 85 min","9 h 45 min"], correcta: 0, explicacion: "Completando: 40 min + 8 h + 5 min. 9 h 15 min tienta si restás como si fueran decimales." },
    { q: "Si son las 17:05 en horario de 24 horas, ¿qué hora es de la tarde?", opciones: ["Las 7:05","Las 15:05","Las 3:05","Las 5:05"], correcta: 3, explicacion: "Se restan 12: 17 − 12 = 5. Las 7 tienta si restás 10." },
    { q: "Si trabajaste 8 h 45 min con 1 hora de almuerzo, ¿cuánto trabajaste?", opciones: ["8 h 45 min","7 h 45 min","7 h 85 min","9 h 45 min"], correcta: 1, explicacion: "Se resta la hora de almuerzo. 8 h 45 min tienta si te olvidás del almuerzo." },
    { q: "Si querés pasar 30 minutos a horas, ¿cuánto es?", opciones: ["0,30 h","3 h","0,5 h","0,03 h"], correcta: 2, explicacion: "30 ÷ 60 = 0,5. 0,30 tienta porque se escribe parecido, pero es otra cantidad." },
    { q: "Si querés pasar 45 minutos a horas, ¿cuánto es?", opciones: ["0,75 h","0,45 h","4,5 h","0,6 h"], correcta: 0, explicacion: "45 ÷ 60 = 0,75. 0,45 tienta, pero es el error de copiar los minutos." },
    { q: "Trabajaste 7 h 45 min a $5.000 la hora. ¿Cuánto cobrás?", opciones: ["$37.250","$35.000","$40.000","$38.750"], correcta: 3, explicacion: "7,75 × 5.000. $37.250 tienta si usás 7,45, que es el error común." },
    { q: "Si una app dice 2,4 h, ¿cuántas horas y minutos son?", opciones: ["2 h 40 min","2 h 24 min","2 h 4 min","24 h"], correcta: 1, explicacion: "0,4 × 60 = 24 minutos. 2 h 40 min tienta si leés el 4 como 40 minutos." },
    { q: "Si vas a hacer 150 km a 100 km/h de promedio, ¿cuánto tardás?", opciones: ["1 h 50 min","15 h","1 h 30 min","50 min"], correcta: 2, explicacion: "150 ÷ 100 = 1,5 h. 1 h 50 min tienta si leés 1,5 como 1 h 50." },
    { q: "Tu auto hace 12 km por litro y vas a hacer 300 km. ¿Cuántos litros usás?", opciones: ["25 litros","36 litros","3.600 litros","12 litros"], correcta: 0, explicacion: "300 ÷ 12 = 25. 3.600 tienta si multiplicás en vez de dividir." },
    { q: "Si la ruta permite 110 km/h, ¿qué promedio usás para calcular el viaje?", opciones: ["110 exactos","Más de 110","El de la última vez que fuiste rápido","Uno más bajo y prudente, por paradas y tránsito"], correcta: 3, explicacion: "La máxima no es tu promedio. 110 tienta porque es el cartel, pero llegás tarde." },
    { q: "Tenés que estar a las 9:00 en un lugar a 90 km y tu promedio es 60 km/h. ¿A qué hora salís con 15 minutos de margen?", opciones: ["A las 7:30","A las 7:15","A las 8:00","A las 7:45"], correcta: 1, explicacion: "El viaje es 1 h 30 min, más 15 de margen: 1 h 45 min antes. 7:30 tienta si te olvidás del margen." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: la matemática de tu mes",
  nivel: "Avanzado",
  objetivos: [
    "Resolver tres situaciones reales de tu vida con el método de estimar, calcular y controlar",
    "Escribir cada respuesta con su unidad y una frase que la explique",
    "Evaluar tu trabajo con una rúbrica",
  ],
  lecciones: [
    { titulo: "El método de cuatro pasos", html: `
      <p class="idea">Todo el curso se resume en un método: <strong>estimar, calcular, controlar y responder con la unidad</strong>. Si lo hacés siempre, es muy difícil equivocarte por mucho.</p>
      <pre><code>1. Estimar:    redondeá y calculá más o menos cuánto da.
2. Calcular:   la cuenta exacta (de cabeza o con calculadora, de a partes).
3. Controlar:  ¿da cerca de la estimación? ¿tiene sentido?
4. Responder:  el número con su unidad y una frase.
               "Necesito 8 litros de pintura", no "8".</code></pre>
      <table>
        <tr><th>Paso</th><th>Qué te salva</th></tr>
        <tr><td>Estimar</td><td>Del cero de más en la calculadora</td></tr>
        <tr><td>Controlar</td><td>De la regla de tres al revés o del porcentaje mal sacado</td></tr>
        <tr><td>Responder con la unidad</td><td>De confundir metros con metros cuadrados, o litros con kilos</td></tr>
      </table>
      <p><strong>Escribí las cuentas:</strong> en un papel o en las notas del celular. Escritas, cualquiera (incluso vos, una semana después) puede revisar dónde estuvo el error.</p>
      <p>Por ejemplo, Carlos tenía que calcular el piso de un comedor de 4 × 3,5 m. Estimó 4 × 4 = 16 m²; calculó 14 m²; controló que estaba cerca; y respondió: "Necesito 15,4 m² de cerámico con el 10 % extra: 8 cajas de 2 m²".</p>` },
    { titulo: "El encargo: tres problemas de tu mes", html: `
      <p class="idea">El proyecto final son <strong>tres problemas reales tuyos</strong>, uno de cada tipo, resueltos con el método de cuatro pasos.</p>
      <table>
        <tr><th>Problema</th><th>Qué usa del curso</th><th>Ejemplo</th></tr>
        <tr><td>1. Una compra</td><td>Precio por unidad, porcentajes, estimar</td><td>Elegir entre dos tamaños o dos ofertas en el súper</td></tr>
        <tr><td>2. Un trabajo de la casa</td><td>Medidas, metros cuadrados, regla de tres</td><td>Pintura, piso, tela o la tierra para una maceta grande</td></tr>
        <tr><td>3. Tu tiempo o tu plata</td><td>Horas y minutos, porcentajes, repartir</td><td>Cobrar horas, repartir un gasto, un aumento del alquiler</td></tr>
      </table>
      <pre><code>Para cada problema, una ficha:
Problema:   (en una oración)
Datos:      (los números, con sus unidades)
Estimación: ...
Cuenta:     ...
Control:    ¿cerca de la estimación? ¿tiene sentido?
Respuesta:  número + unidad + una frase</code></pre>
      <p><strong>Usá datos reales:</strong> precios del súper de tu barrio, medidas de tu casa, tus horarios. El curso sirve si lo usás con tus números, no con los del ejemplo.</p>
      <p>Para seguir con la plata (presupuesto, inflación y cuotas) está el curso <strong>Finanzas personales con números</strong> de este sitio.</p>
      <p>Por ejemplo, el problema 3 de Carlos fue el aumento del alquiler: de 200.000 a 250.000. Estimó "un cuarto más", calculó 25 % y lo comparó con lo que habían subido sus changas en el mismo tiempo.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para corregir tus tres fichas.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Estimación</td><td>Hecha antes de calcular y razonable</td><td>Hecha después de calcular</td><td>Sin estimación</td></tr>
        <tr><td>Cuenta</td><td>Correcta y escrita paso a paso</td><td>Correcta, sin pasos</td><td>Con error</td></tr>
        <tr><td>Control</td><td>Comparó con la estimación y con el sentido común</td><td>Solo uno de los dos</td><td>Sin control</td></tr>
        <tr><td>Respuesta</td><td>Número, unidad y frase</td><td>Número y unidad</td><td>Solo el número</td></tr>
        <tr><td>Datos reales</td><td>Todos de tu vida</td><td>Algunos inventados</td><td>Todos inventados</td></tr>
      </table>
      <pre><code>Cada ficha: hasta 10 puntos. Las tres: hasta 30.
25 o más → usás la matemática en tu vida con método.
18 a 24  → repetí las fichas con 0 o 1 en algún criterio.
Menos de 18 → volvé al módulo del tema que más te costó.</code></pre>
      <p><strong>El criterio más importante es el control:</strong> una cuenta con un error que controlaste y corregiste vale más que una que salió bien de casualidad.</p>
      <p>Por ejemplo, Carlos sacó 26. Perdió puntos porque en una ficha hizo la estimación después de la cuenta: la repitió estimando primero y notó que así se daba cuenta antes de los errores.</p>` },
  ],
  practica: [
    "Resolvé un problema de compra real con la ficha de cuatro pasos y anotá la estimación y el resultado.",
    "Resolvé un problema de un trabajo de tu casa con medidas reales y anotá cuántos materiales comprarías.",
    "Resolvé un problema de tiempo o plata, corregí las tres fichas con la rúbrica y anotá tu puntaje sobre 30.",
  ],
  recursos: [
    { t: "GCFAprendeLibre: curso gratis de matemáticas básicas", url: "https://edu.gcfglobal.org/es/matematicas-basicas/" },
    { t: "Curso de este sitio: Finanzas personales con números (presupuesto, inflación, cuotas)", url: "https://pkeios.github.io/EiaLearning/finanzas-personales/" },
    { t: "Khan Academy en español: aritmética, con ejercicios y videos", url: "https://es.khanacademy.org/math/arithmetic" },
  ],
  quiz: [
    { q: "¿Cuál es el primer paso del método?", opciones: ["Calcular exacto con la calculadora","Responder","Estimar: redondear y calcular más o menos","Controlar"], correcta: 2, explicacion: "Estimar primero te da con qué comparar. La calculadora tienta, pero sin estimación no notás un error." },
    { q: "Si calculaste y te dio 8, ¿cómo respondés?", opciones: ["\"Necesito 8 litros de pintura\": número, unidad y frase","\"8\"","\"Ocho y listo\"","\"Más o menos 8 algo\""], correcta: 0, explicacion: "Sin unidad no se sabe si son litros, m² o latas. \"8\" tienta por corto, pero es incompleto." },
    { q: "Tu cuenta da 10 veces más que la estimación. ¿Qué hacés?", opciones: ["Confiás en la cuenta","Confiás en la estimación y listo","Promediás las dos","Revisás: probablemente un cero de más"], correcta: 3, explicacion: "Una diferencia tan grande es un error. Confiar en la cuenta tienta porque es \"exacta\", pero la apretaste vos." },
    { q: "Si respondiste \"12 metros\" para el cerámico del piso, ¿qué falló?", opciones: ["Nada","La unidad: el piso se mide en metros cuadrados","La cantidad de cajas","El precio"], correcta: 1, explicacion: "Superficie es m². \"Nada\" tienta porque el número puede estar bien, pero la unidad confunde." },
    { q: "¿Por qué conviene escribir las cuentas?", opciones: ["Para que tarde más","No conviene","Para poder revisar dónde estuvo el error","Para usar más papel"], correcta: 2, explicacion: "Escritas se revisan. \"No conviene\" tienta por rapidez, pero un error escondido sale caro." },
    { q: "En el proyecto, ¿qué datos usás?", opciones: ["Datos reales de tu vida: precios, medidas y horarios","Los del ejemplo del curso","Inventados","Los de un libro"], correcta: 0, explicacion: "El curso sirve con tus números. Los del ejemplo tientan por cómodos, pero no practicás nada nuevo." },
    { q: "Si un comedor mide 4 × 3,5 m, ¿cuántos m² de piso tiene?", opciones: ["15 m²","7,5 m²","16 m²","14 m²"], correcta: 3, explicacion: "4 × 3,5 = 14. 16 tienta porque fue la estimación redondeando a 4 × 4." },
    { q: "Si necesitás 14 m² de cerámico más un 10 % extra, ¿cuántos m² comprás?", opciones: ["14 m²","15,4 m²","24 m²","14,1 m²"], correcta: 1, explicacion: "14 + 1,4 = 15,4. 14,1 tienta si sumás 10 centésimos en vez del 10 %." },
    { q: "En la rúbrica, hiciste la estimación después de la cuenta. ¿Cuánto sacás en Estimación?", opciones: ["2 puntos","0 puntos","1 punto","3 puntos"], correcta: 2, explicacion: "Hecha después vale 1. 2 tienta porque la hiciste, pero ya no te protege del error." },
    { q: "Si respondiste con el número y la unidad, pero sin frase, ¿cuánto sacás en Respuesta?", opciones: ["1 punto","2 puntos","0 puntos","Medio punto"], correcta: 0, explicacion: "Falta la frase para los 2. 0 tienta, pero tiene número y unidad." },
    { q: "Sumaste 22 de 30. ¿Qué hacés?", opciones: ["Abandonás","Cambiás la rúbrica","Lo das por terminado","Repetís las fichas con 0 o 1 en algún criterio"], correcta: 3, explicacion: "Entre 18 y 24 se repite lo flojo. Cambiar la rúbrica tienta para aprobar, pero no mejora nada." },
    { q: "¿Cuál es el criterio más importante de la rúbrica?", opciones: ["Que la cuenta salga a la primera","El control: comparar con la estimación y el sentido común","La letra prolija","Usar calculadora"], correcta: 1, explicacion: "Controlar atrapa los errores. Salir a la primera tienta, pero puede ser casualidad." },
  ],
},
];
