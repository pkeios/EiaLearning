// Temario del curso "Estadística sin miedo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js estadistica y node tools/metodologia.js estadistica
window.TEMARIO = [
{
  id: "empezar",
  icono: "📊",
  titulo: "Qué es la estadística y los porcentajes",
  nivel: "Básico",
  objetivos: [
    "Distinguir población, muestra y tipos de datos",
    "Calcular porcentajes y variaciones porcentuales",
    "Distinguir un cambio en porcentaje de uno en puntos porcentuales",
  ],
  lecciones: [
    { titulo: "Para qué sirve la estadística", video: {"id":"0_ybaigJd1s","t":"Qué es la estadística, para principiantes · Daniel Carreón (3:12)"}, html: `
      <p class="idea">La <strong>estadística</strong> sirve para resumir muchos datos en pocos números y para sacar conclusiones con cuidado. La usás cada vez que leés "la inflación fue del 3%" o "el 60% prefiere...".</p>
      <table>
        <tr><th>Término</th><th>Qué es</th><th>Ejemplo</th></tr>
        <tr><td>Población</td><td>Todo el grupo que te interesa</td><td>Todas las personas que viven en Argentina</td></tr>
        <tr><td>Muestra</td><td>Una parte de la población que estudiás</td><td>1.000 personas encuestadas</td></tr>
        <tr><td>Variable</td><td>Lo que medís</td><td>Edad, sueldo, a quién vota</td></tr>
        <tr><td>Dato</td><td>Cada valor que anotás</td><td>34 años</td></tr>
      </table>
      <table>
        <tr><th>Tipo de dato</th><th>Ejemplos</th></tr>
        <tr><td>Cualitativo (categorías)</td><td>Provincia, color favorito, medio de transporte</td></tr>
        <tr><td>Cuantitativo (números)</td><td>Edad, sueldo, horas de sueño</td></tr>
      </table>
      <p><strong>Con categorías no se saca promedio:</strong> no existe "la provincia promedio". Se cuentan y se sacan porcentajes.</p>
      <p>Por ejemplo, el INDEC no le pregunta a cada persona del país cuánto gasta: le pregunta a una muestra y con eso estima lo que pasa en toda la población.</p>` },
    { titulo: "Porcentajes", html: `
      <p class="idea">Un <strong>porcentaje</strong> dice cuántos hay de cada 100. Sirve para comparar grupos de distinto tamaño.</p>
      <pre><code>Porcentaje = parte / total × 100

En una escuela de 250 alumnos, 60 vienen en bicicleta:
60 / 250 × 100 = 24%

En otra de 80 alumnos, 24 vienen en bicicleta:
24 / 80 × 100 = 30%
→ en la segunda, la proporción es mayor, aunque sean menos chicos.</code></pre>
      <table>
        <tr><th>Calcular</th><th>Cuenta</th></tr>
        <tr><td>El 15% de 4.000</td><td>4.000 × 0,15 = 600</td></tr>
        <tr><td>Un precio de 4.000 con 15% más</td><td>4.000 × 1,15 = 4.600</td></tr>
        <tr><td>Un precio de 4.000 con 15% menos</td><td>4.000 × 0,85 = 3.400</td></tr>
      </table>
      <p><strong>Siempre preguntá "¿porcentaje de qué?":</strong> el 50% de un número chico puede ser menos que el 10% de uno grande.</p>
      <p>Por ejemplo, "el 24% viene en bicicleta" y "60 chicos vienen en bicicleta" son el mismo dato dicho de dos formas: conviene mirar las dos.</p>` },
    { titulo: "Variaciones y puntos porcentuales", html: `
      <p class="idea">Una <strong>variación porcentual</strong> dice cuánto cambió algo respecto de lo que era. Hay dos trampas comunes: las subas y bajas no se compensan, y no es lo mismo "por ciento" que "puntos porcentuales".</p>
      <pre><code>Variación % = (nuevo - viejo) / viejo × 100

Un precio pasa de 1.000 a 1.200:
(1.200 - 1.000) / 1.000 × 100 = 20% de suba

Si después baja 20%:
1.200 × 0,80 = 960  → no vuelve a 1.000</code></pre>
      <table>
        <tr><th>El desempleo pasa de 7% a 8%</th><th>Se dice</th></tr>
        <tr><td>Diferencia entre los dos porcentajes</td><td>Subió 1 punto porcentual</td></tr>
        <tr><td>Cambio respecto del 7%</td><td>Subió un 14,3% (1 / 7 × 100)</td></tr>
      </table>
      <p><strong>Las dos frases son verdad,</strong> pero suenan muy distinto. Cuando leas una noticia, fijate cuál de las dos usa.</p>
      <p>Por ejemplo, "la pobreza subió 2 puntos" y "la pobreza subió un 5%" pueden describir el mismo cambio, si antes era del 40%.</p>` },
  ],
  practica: [
    "Elegí una noticia con estadísticas y anotá cuál es la población, la muestra (si la hay) y la variable.",
    "Calculá el porcentaje de algo en tu casa o tu trabajo (por ejemplo, cuántos de tus contactos tienen mascota) y anotá la cuenta.",
    "Buscá un precio que haya subido y calculá la variación porcentual. Anotá el precio viejo, el nuevo y el porcentaje.",
  ],
  recursos: [
    { t: "Khan Academy: estadística y probabilidad (en español)", url: "https://es.khanacademy.org/math/statistics-probability" },
    { t: "INDEC: glosario de términos", url: "https://www.indec.gob.ar/indec/web/Institucional-Indec-Glosario" },
  ],
  quiz: [
    { q: "Si encuestás a 1.000 personas para saber qué piensa todo el país, ¿qué son esas 1.000?", opciones: ["La población","La variable","La muestra","El promedio"], correcta: 2, explicacion: "La muestra es la parte que estudiás. Población tienta, pero es todo el país." },
    { q: "Si querés saber el sueldo de cada persona encuestada, ¿qué tipo de dato es?", opciones: ["Cuantitativo: son números","Cualitativo","Una categoría","No es un dato"], correcta: 0, explicacion: "El sueldo se mide en números. Cualitativo tienta, pero eso es para categorías como la provincia." },
    { q: "Si anotás la provincia de cada persona, ¿podés sacar \"la provincia promedio\"?", opciones: ["Sí, sumando las provincias","Sí, siempre","Sí, la del medio del mapa","No: con categorías se cuentan y se sacan porcentajes"], correcta: 3, explicacion: "Las categorías no se promedian. Sumarlas tienta, pero no tiene sentido." },
    { q: "Si en una escuela de 250 alumnos 60 vienen en bicicleta, ¿qué porcentaje es?", opciones: ["60%","24%","4%","41%"], correcta: 1, explicacion: "60 / 250 × 100 = 24. El 60% tienta porque es el número de chicos, no el porcentaje." },
    { q: "Si querés saber qué escuela tiene más proporción de ciclistas, ¿qué comparás?", opciones: ["La cantidad de chicos","El nombre de la escuela","Los porcentajes, porque las escuelas tienen distinto tamaño","Nada"], correcta: 2, explicacion: "El porcentaje compara grupos de distinto tamaño. La cantidad tienta, pero la escuela grande siempre tiene más." },
    { q: "Si un precio de $ 4.000 sube 15%, ¿cuánto queda?", opciones: ["$ 4.600","$ 4.015","$ 600","$ 3.400"], correcta: 0, explicacion: "4.000 × 1,15 = 4.600. $ 600 tienta porque es el aumento, no el precio nuevo." },
    { q: "Si un precio pasa de $ 1.000 a $ 1.200, ¿cuánto subió?", opciones: ["200%","12%","1,2%","20%"], correcta: 3, explicacion: "(1.200 - 1.000) / 1.000 × 100 = 20. El 200% tienta porque la diferencia es 200." },
    { q: "Si un precio sube 20% y después baja 20%, ¿vuelve a ser el mismo?", opciones: ["Sí, se compensan","No: de 1.000 pasa a 1.200 y después a 960","Sí, siempre","Queda más caro"], correcta: 1, explicacion: "La baja se calcula sobre un número más grande. \"Se compensan\" tienta, pero el resultado es 960." },
    { q: "Si el desempleo pasa de 7% a 8%, ¿cuántos puntos porcentuales subió?", opciones: ["14,3 puntos","8 puntos","1 punto porcentual","1%"], correcta: 2, explicacion: "Es la diferencia: 8 - 7 = 1. 14,3 tienta, pero ese es el cambio en porcentaje, no en puntos." },
    { q: "Si el desempleo pasa de 7% a 8%, ¿en qué porcentaje subió respecto de antes?", opciones: ["Un 14,3%","Un 1%","Un 8%","Un 15%"], correcta: 0, explicacion: "1 / 7 × 100 = 14,3. El 1% tienta, pero eso es la diferencia en puntos." },
    { q: "Si una noticia dice \"subió 2 puntos\" y otra \"subió un 5%\" sobre el mismo dato, ¿pueden ser verdad las dos?", opciones: ["No, una miente","No, siempre son iguales","Solo si son del mismo diario","Sí: puntos y porcentaje miden cosas distintas"], correcta: 3, explicacion: "Las dos formas son correctas. \"Una miente\" tienta, pero si antes era 40%, 2 puntos son un 5%." },
    { q: "Si leés \"el 50% de los encuestados\", ¿qué conviene preguntar?", opciones: ["Nada","¿El 50% de cuántos?","El color del gráfico","Quién ganó el partido"], correcta: 1, explicacion: "El total da contexto. \"Nada\" tienta, pero el 50% de 10 personas dice muy poco." },
  ],
},
{
  id: "centro",
  icono: "🎯",
  titulo: "Promedio, mediana y moda",
  nivel: "Básico",
  objetivos: [
    "Calcular el promedio, la mediana y la moda de un conjunto de datos",
    "Elegir la medida que mejor representa a un grupo",
    "Reconocer cuándo un valor extremo engaña al promedio",
  ],
  lecciones: [
    { titulo: "Las tres medidas", video: {"id":"V-3IPTXKZL8","t":"Media, mediana y moda · LearnFree en Español (4:00)"}, html: `
      <p class="idea">Hay tres formas de resumir un grupo de números con un valor "típico": el <strong>promedio</strong> (o media), la <strong>mediana</strong> y la <strong>moda</strong>.</p>
      <pre><code>Notas de 9 alumnos: 4, 6, 6, 7, 7, 7, 8, 9, 10

Promedio: sumar todo y dividir por la cantidad
  (4+6+6+7+7+7+8+9+10) / 9 = 64 / 9 = 7,11

Mediana: el valor del medio, con los datos ordenados
  4, 6, 6, 7, [7], 7, 8, 9, 10 → 7

Moda: el valor que más se repite
  el 7 aparece 3 veces → 7</code></pre>
      <table>
        <tr><th>Si la cantidad de datos es...</th><th>La mediana es</th></tr>
        <tr><td>Impar</td><td>El del medio</td></tr>
        <tr><td>Par</td><td>El promedio de los dos del medio</td></tr>
      </table>
      <p><strong>Antes de la mediana, ordená:</strong> el valor del medio de una lista desordenada no significa nada.</p>
      <p>Por ejemplo, en las notas del ejemplo las tres medidas dan parecido (7,11, 7 y 7): eso pasa cuando no hay valores muy extremos.</p>` },
    { titulo: "El promedio que engaña", html: `
      <p class="idea">El promedio se deja arrastrar por los valores extremos. Cuando hay uno muy alto o muy bajo, la <strong>mediana</strong> representa mejor al grupo.</p>
      <pre><code>Sueldos de una pyme (en miles de pesos):
600, 650, 700, 700, 750, 800, 850, 900, 4.000
                                          ↑ el gerente

Promedio: 9.950 / 9 = 1.105,6 → "el sueldo promedio es $ 1.105.556"
Mediana:  750                 → la mitad gana $ 750.000 o menos
Moda:     700

Sin el sueldo del gerente:
Promedio: 743,75   Mediana: 725</code></pre>
      <table>
        <tr><th>Situación</th><th>Conviene</th></tr>
        <tr><td>Hay valores extremos (sueldos, precios de casas)</td><td>Mediana</td></tr>
        <tr><td>Los datos son parejos, sin extremos</td><td>Promedio</td></tr>
        <tr><td>Datos en categorías o "lo más elegido"</td><td>Moda</td></tr>
      </table>
      <p>Por ejemplo, decir "en esta empresa se gana en promedio más de un millón" es verdad, pero 8 de 9 personas ganan menos de $ 1.000.000. La mediana cuenta mejor la historia.</p>` },
    { titulo: "Elegir y mostrar bien", html: `
      <p class="idea">Cuando leas o informes un número "típico", fijate cuál de las tres medidas es y si alcanza solo un número para contar la historia.</p>
      <table>
        <tr><th>Pregunta</th><th>Por qué</th></tr>
        <tr><td>¿Es promedio o mediana?</td><td>Con extremos, dan muy distinto</td></tr>
        <tr><td>¿Cuántos datos son?</td><td>El promedio de 3 casos dice poco</td></tr>
        <tr><td>¿Hay valores extremos?</td><td>Si los hay, mirá también la mediana</td></tr>
        <tr><td>¿Qué tan dispersos están?</td><td>Lo vas a ver en el módulo siguiente</td></tr>
      </table>
      <pre><code>En una planilla de cálculo:
=PROMEDIO(A2:A10)
=MEDIANA(A2:A10)
=MODA(A2:A10)</code></pre>
      <p>El curso "Excel y Google Sheets" de este sitio explica cómo usar estas fórmulas.</p>
      <p><strong>Si informás un dato,</strong> decí cuál medida usaste: "la mediana del sueldo es $ 750.000".</p>
      <p>Por ejemplo, el precio típico de las casas de un barrio se informa casi siempre con la mediana, porque unas pocas mansiones inflarían el promedio.</p>` },
  ],
  practica: [
    "Anotá 9 números reales (edades de tu familia, minutos de viaje de una semana) y calculá promedio, mediana y moda.",
    "Agregale a tu lista un valor muy extremo y volvé a calcular promedio y mediana. Anotá cuál cambió más.",
    "Buscá una noticia que use un promedio y anotá si te parece que la mediana contaría otra historia.",
  ],
  recursos: [
    { t: "Khan Academy: estadística y probabilidad (en español)", url: "https://es.khanacademy.org/math/statistics-probability" },
    { t: "INDEC: estadísticas oficiales de Argentina", url: "https://www.indec.gob.ar/" },
  ],
  quiz: [
    { q: "Si las notas son 4, 6, 6, 7, 7, 7, 8, 9, 10, ¿cuál es el promedio?", opciones: ["7","6","Unos 7,11","10"], correcta: 2, explicacion: "64 / 9 = 7,11. El 7 tienta porque es la mediana y la moda, pero el promedio da un poco más." },
    { q: "Si querés la mediana de una lista, ¿qué hacés primero?", opciones: ["Ordenás los datos de menor a mayor","Sumás todo","Elegís el más repetido","Tomás el primero"], correcta: 0, explicacion: "La mediana es el del medio en orden. Sumar todo tienta, pero eso es para el promedio." },
    { q: "Si tenés 9 datos ordenados, ¿cuál es la mediana?", opciones: ["El noveno","El primero","El promedio de todos","El quinto, el del medio"], correcta: 3, explicacion: "Con 9 datos, el quinto deja 4 de cada lado. El promedio tienta, pero es otra medida." },
    { q: "Si tenés una cantidad par de datos, ¿cómo sacás la mediana?", opciones: ["Elegís el más grande","Promediás los dos del medio","Usás el primero","No se puede"], correcta: 1, explicacion: "Con datos pares no hay uno solo en el medio. \"No se puede\" tienta, pero se promedian los dos centrales." },
    { q: "Si querés el valor que más se repite, ¿qué medida usás?", opciones: ["El promedio","La mediana","La moda","El rango"], correcta: 2, explicacion: "La moda es la más frecuente. La mediana tienta porque también es \"típica\", pero es la del medio." },
    { q: "Si en una pyme 8 personas ganan entre 600 y 900 mil y el gerente 4 millones, ¿qué representa mejor el sueldo típico?", opciones: ["La mediana","El promedio","El sueldo del gerente","El más bajo"], correcta: 0, explicacion: "El extremo arrastra al promedio. El promedio tienta porque es el más conocido, pero da más de un millón." },
    { q: "Si en esa pyme el promedio es 1.105.556, ¿cuántas personas ganan menos de eso?", opciones: ["Ninguna","La mitad","1 de 9","8 de 9"], correcta: 3, explicacion: "Solo el gerente gana más. \"La mitad\" tienta porque así funciona la mediana, no el promedio." },
    { q: "Si sacás el sueldo del gerente, ¿qué cambia más?", opciones: ["La mediana","El promedio: pasa de 1.105,6 a 743,75 miles","La moda","Nada"], correcta: 1, explicacion: "El promedio depende de todos los valores. La mediana tienta, pero solo pasa de 750 a 725." },
    { q: "Si querés saber cuál es el medio de transporte más elegido, ¿qué medida usás?", opciones: ["El promedio","La mediana","La moda","El desvío"], correcta: 2, explicacion: "Son categorías: se busca la más frecuente. El promedio tienta, pero no se puede promediar \"colectivo\" y \"tren\"." },
    { q: "Si un promedio se calculó con solo 3 casos, ¿qué tenés en cuenta?", opciones: ["Que dice poco: son muy pocos datos","Que es muy confiable","Que es igual a la mediana","Nada"], correcta: 0, explicacion: "Con pocos datos, un caso cambia todo. \"Muy confiable\" tienta porque es un número exacto." },
    { q: "Si querés calcular la mediana en una planilla, ¿qué fórmula usás?", opciones: ["=PROMEDIO(rango)","=SUMA(rango)","=MODA(rango)","=MEDIANA(rango)"], correcta: 3, explicacion: "Cada medida tiene su fórmula. PROMEDIO tienta por ser la más usada, pero calcula otra cosa." },
    { q: "Si informás un valor típico, ¿qué tenés que aclarar?", opciones: ["Nada","Cuál medida usaste: promedio, mediana o moda","Solo el número","El color del gráfico"], correcta: 1, explicacion: "Pueden dar muy distinto. \"Solo el número\" tienta por simple, pero confunde a quien lee." },
  ],
},
{
  id: "dispersion",
  icono: "↔️",
  titulo: "Qué tan distintos son los datos",
  nivel: "Intermedio",
  objetivos: [
    "Calcular el rango de un conjunto de datos",
    "Interpretar el desvío estándar sin hacer la cuenta a mano",
    "Usar percentiles y cuartiles para ubicar un valor",
  ],
  lecciones: [
    { titulo: "El mismo promedio, distinta historia", html: `
      <p class="idea">Dos grupos pueden tener el mismo promedio y ser muy distintos. La <strong>dispersión</strong> mide qué tan separados están los datos.</p>
      <pre><code>Temperaturas máximas de 5 días (en grados):
Ciudad A: 20, 21, 22, 23, 24
Ciudad B: 10, 15, 22, 29, 34

Las dos tienen promedio 22.

Rango = máximo - mínimo
Ciudad A: 24 - 20 = 4
Ciudad B: 34 - 10 = 24</code></pre>
      <table>
        <tr><th>Medida</th><th>Ventaja</th><th>Desventaja</th></tr>
        <tr><td>Rango</td><td>Fácil de calcular</td><td>Depende solo de los dos extremos</td></tr>
        <tr><td>Desvío estándar</td><td>Usa todos los datos</td><td>La cuenta es más larga (la hace la planilla)</td></tr>
      </table>
      <p><strong>Un promedio solo no alcanza:</strong> si vas a la ciudad B y solo sabías "22 grados de promedio", no llevás abrigo ni ropa de verano.</p>
      <p>Por ejemplo, dos colectivos que tardan en promedio 30 minutos no son iguales si uno tarda siempre entre 28 y 32 y el otro entre 10 y 50.</p>` },
    { titulo: "El desvío estándar", video: {"id":"0tPHJ5aE4eM","t":"Desviación estándar explicada sencillamente · numiqo (5:05)"}, html: `
      <p class="idea">El <strong>desvío estándar</strong> dice cuánto se alejan, en promedio, los datos de su media. Si es chico, los datos están juntos; si es grande, están desparramados.</p>
      <pre><code>Ciudad A: 20, 21, 22, 23, 24 → desvío estándar 1,41
Ciudad B: 10, 15, 22, 29, 34 → desvío estándar 8,79

En una planilla:
=DESVEST.P(A2:A6)   (para todos los datos que tenés)
=DESVEST.M(A2:A6)   (si son una muestra de algo más grande)</code></pre>
      <table>
        <tr><th>Desvío estándar</th><th>Lectura</th></tr>
        <tr><td>Chico respecto de la media</td><td>Los datos son parecidos entre sí: la media los representa bien</td></tr>
        <tr><td>Grande respecto de la media</td><td>Hay mucha variación: la media sola engaña</td></tr>
      </table>
      <p><strong>Regla práctica:</strong> en muchos datos que forman una "campana" (como la altura de las personas), cerca de 2 de cada 3 valores están a menos de un desvío de la media.</p>
      <p>Por ejemplo, si el tiempo de un colectivo tiene media 30 minutos y desvío 2, casi siempre tarda entre 28 y 32. Si el desvío es 15, conviene salir mucho antes.</p>` },
    { titulo: "Percentiles y cuartiles", html: `
      <p class="idea">Un <strong>percentil</strong> dice qué porcentaje de los datos queda por debajo de un valor. Sirve para ubicarte dentro de un grupo.</p>
      <table>
        <tr><th>Medida</th><th>Qué deja por debajo</th></tr>
        <tr><td>Percentil 25 (primer cuartil)</td><td>El 25% de los datos</td></tr>
        <tr><td>Percentil 50 (mediana)</td><td>El 50% de los datos</td></tr>
        <tr><td>Percentil 75 (tercer cuartil)</td><td>El 75% de los datos</td></tr>
        <tr><td>Percentil 90</td><td>El 90% de los datos</td></tr>
      </table>
      <pre><code>Ejemplo: tablas de crecimiento de los pediatras
"Tu hijo está en el percentil 70 de altura"
→ el 70% de los chicos de su edad mide menos que él.
No es una nota: el percentil 70 no es "mejor" que el 40.

En una planilla:
=PERCENTIL(A2:A100; 0,9)   → el valor del percentil 90</code></pre>
      <p><strong>Los cuartiles</strong> dividen los datos ordenados en 4 partes iguales. Entre el primero y el tercero está la mitad "del medio" del grupo.</p>
      <p>Por ejemplo, si tu sueldo está en el percentil 80 de tu rubro, el 80% de las personas de ese rubro gana menos que vos.</p>` },
  ],
  practica: [
    "Anotá los minutos que tardás en un viaje frecuente durante 5 días y calculá el rango. Anotá si el viaje es parejo o variable.",
    "Cargá esos 5 datos en una planilla y calculá el desvío estándar con DESVEST.P. Anotá el resultado y qué te dice.",
    "Buscá un ejemplo real de percentil (crecimiento, sueldos, notas) y anotá qué porcentaje queda por debajo.",
  ],
  recursos: [
    { t: "Khan Academy: estadística y probabilidad (en español)", url: "https://es.khanacademy.org/math/statistics-probability" },
    { t: "Our World in Data: datos y gráficos del mundo (en inglés)", url: "https://ourworldindata.org/" },
  ],
  quiz: [
    { q: "Si dos ciudades tienen el mismo promedio de temperatura, ¿son iguales?", opciones: ["Sí, siempre","Sí, si están en el mismo país","No necesariamente: pueden tener dispersión muy distinta","No se puede saber nunca"], correcta: 2, explicacion: "El promedio no dice cuánto varían. \"Sí, siempre\" tienta, pero una puede ir de 10 a 34 grados." },
    { q: "Si los datos son 10, 15, 22, 29, 34, ¿cuál es el rango?", opciones: ["24","22","34","10"], correcta: 0, explicacion: "34 - 10 = 24. El 22 tienta porque es el promedio, no el rango." },
    { q: "Si querés una medida de dispersión fácil de calcular, ¿cuál usás?", opciones: ["La moda","La mediana","El promedio","El rango: máximo menos mínimo"], correcta: 3, explicacion: "El rango es la más simple. La mediana tienta, pero mide el centro, no la dispersión." },
    { q: "Si el rango depende solo de los dos extremos, ¿qué problema tiene?", opciones: ["Ninguno","Un solo valor raro lo cambia mucho","Que es muy difícil","Que usa todos los datos"], correcta: 1, explicacion: "Depende de dos valores. \"Usa todos los datos\" tienta, pero eso es del desvío estándar." },
    { q: "Si dos colectivos tardan 30 minutos en promedio, uno entre 28 y 32 y otro entre 10 y 50, ¿cuál es más previsible?", opciones: ["El que tarda entre 10 y 50","Son iguales","El que tarda entre 28 y 32","No se puede saber"], correcta: 2, explicacion: "Menos dispersión es más previsible. \"Son iguales\" tienta por el promedio, pero varían muy distinto." },
    { q: "Si el desvío estándar de un grupo es chico, ¿qué significa?", opciones: ["Que los datos están juntos y la media los representa bien","Que hay muchos datos","Que el promedio es chico","Que hay un error"], correcta: 0, explicacion: "Desvío chico es poca variación. \"El promedio es chico\" tienta, pero son cosas distintas." },
    { q: "Si la ciudad A tiene desvío 1,41 y la B 8,79, ¿cuál tiene temperaturas más variables?", opciones: ["La A","Son iguales","Ninguna","La B"], correcta: 3, explicacion: "Mayor desvío, más variación. Iguales tienta porque tienen el mismo promedio." },
    { q: "Si querés el desvío estándar de todos tus datos en una planilla, ¿qué fórmula usás?", opciones: ["=PROMEDIO(rango)","=DESVEST.P(rango)","=MEDIANA(rango)","=SUMA(rango)"], correcta: 1, explicacion: "DESVEST calcula el desvío. PROMEDIO tienta por conocida, pero da el centro." },
    { q: "Si un colectivo tiene media 30 minutos y desvío 15, ¿qué te conviene?", opciones: ["Salir justo 30 minutos antes","No viajar","Salir con mucho margen: varía mucho","Nada"], correcta: 2, explicacion: "Con desvío grande, 30 minutos puede no alcanzar. Salir justo tienta por el promedio, pero llegás tarde seguido." },
    { q: "Si tu hijo está en el percentil 70 de altura, ¿qué significa?", opciones: ["Que el 70% de los chicos de su edad mide menos","Que mide 70 cm","Que sacó 7 de nota","Que es el 70% de alto"], correcta: 0, explicacion: "El percentil ubica dentro del grupo. 70 cm tienta por el número, pero no es una medida." },
    { q: "Si estás en el percentil 50 de algo, ¿dónde estás?", opciones: ["En el máximo","En el mínimo","Afuera del grupo","En la mediana: la mitad está por debajo"], correcta: 3, explicacion: "El percentil 50 es la mediana. El máximo tienta, pero ese es el percentil 100." },
    { q: "Si querés saber dónde está la mitad \"del medio\" de un grupo, ¿qué mirás?", opciones: ["El promedio solo","Entre el primer y el tercer cuartil","El máximo y el mínimo","La moda"], correcta: 1, explicacion: "Entre los cuartiles 1 y 3 queda el 50% central. El máximo y el mínimo tientan, pero eso es el rango completo." },
  ],
},
{
  id: "muestras",
  icono: "🗳️",
  titulo: "Muestras y encuestas",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer si una muestra representa a la población",
    "Detectar sesgos comunes en encuestas",
    "Interpretar el margen de error de una encuesta",
  ],
  lecciones: [
    { titulo: "Una muestra que representa", video: {"id":"CWDYwZ_c1lI","t":"Conceptos básicos de estadística: población y muestra · Matemáticas profe Alex (20:36)"}, html: `
      <p class="idea">Una muestra sirve si se parece a la población. No alcanza con que sea grande: tiene que estar <strong>bien elegida</strong>.</p>
      <table>
        <tr><th>Muestra que representa</th><th>Muestra que no representa</th></tr>
        <tr><td>Personas elegidas al azar de todo el país</td><td>Solo seguidores de una cuenta de redes</td></tr>
        <tr><td>Con proporciones de edad y región parecidas a la población</td><td>Solo gente de una ciudad</td></tr>
        <tr><td>Se contacta también a quien no contesta fácil</td><td>Solo los que quisieron responder</td></tr>
      </table>
      <p><strong>Al azar</strong> quiere decir que cualquier persona de la población tiene la misma chance de ser elegida. Así, los grupos quedan mezclados como en la realidad.</p>
      <p><strong>Más grande no siempre es mejor:</strong> 100.000 votos en una encuesta de redes valen menos que 1.000 personas bien elegidas.</p>
      <p>Por ejemplo, preguntar en la puerta de un gimnasio cuántas veces por semana hace ejercicio la gente da un resultado mucho más alto que el de toda la población.</p>` },
    { titulo: "Sesgos", html: `
      <p class="idea">Un <strong>sesgo</strong> es un error que empuja los resultados siempre para el mismo lado. No se arregla preguntando a más gente.</p>
      <table>
        <tr><th>Sesgo</th><th>Qué pasa</th><th>Ejemplo</th></tr>
        <tr><td>De selección</td><td>La muestra no se parece a la población</td><td>Encuesta solo por internet a personas mayores</td></tr>
        <tr><td>De autoselección</td><td>Responden solo los muy interesados</td><td>Encuesta abierta "¿te gusta este producto?"</td></tr>
        <tr><td>Por la pregunta</td><td>La forma de preguntar empuja la respuesta</td><td>"¿No le parece injusto que...?"</td></tr>
        <tr><td>De supervivencia</td><td>Solo se miran los casos que "sobrevivieron"</td><td>"Todos los que dejaron la facultad y emprendieron son millonarios"</td></tr>
      </table>
      <pre><code>Pregunta con sesgo:
"¿Está de acuerdo con que el gobierno siga malgastando su plata?"

Pregunta neutral:
"¿Cómo evalúa el uso del presupuesto público?
 Muy bien / Bien / Regular / Mal / Muy mal"</code></pre>
      <p>Por ejemplo, ver solo los emprendimientos exitosos en las noticias hace pensar que emprender es fácil: los que cerraron no salen en ninguna nota.</p>` },
    { titulo: "El margen de error", html: `
      <p class="idea">Una encuesta bien hecha nunca da el número exacto: da una estimación con un <strong>margen de error</strong>. El resultado real está, con mucha probabilidad, dentro de ese margen.</p>
      <pre><code>Margen de error aproximado (muestra al azar, 95% de confianza):
100 personas   → ± 10 puntos
400 personas   → ± 5 puntos
1.000 personas → ± 3,2 puntos
2.500 personas → ± 2 puntos

Encuesta de 1.000 personas: candidato A 42%, candidato B 39%
A: entre 38,8% y 45,2%
B: entre 35,8% y 42,2%
→ se superponen: es un "empate técnico"</code></pre>
      <table>
        <tr><th>Para interpretar una encuesta</th></tr>
        <tr><td>¿Cuántas personas y cómo se eligieron?</td></tr>
        <tr><td>¿Cuál es el margen de error?</td></tr>
        <tr><td>¿Cuándo se hizo? (las opiniones cambian)</td></tr>
        <tr><td>¿Quién la pagó y cómo era la pregunta?</td></tr>
      </table>
      <p><strong>Para achicar el margen a la mitad, hace falta 4 veces más gente:</strong> por eso pocas encuestas pasan de 2.000 o 3.000 personas.</p>
      <p>Por ejemplo, un titular "A le gana a B" con 42% contra 39% y 1.000 encuestados exagera: con el margen de error, no se puede decir quién va adelante.</p>` },
  ],
  practica: [
    "Buscá una encuesta publicada y anotá cuántas personas, cómo se eligieron, el margen de error y la fecha.",
    "Escribí una pregunta con sesgo y su versión neutral sobre un tema que te interese. Anotá las dos.",
    "Con los datos de una encuesta de 1.000 personas, calculá los rangos con ± 3,2 puntos y anotá si hay empate técnico.",
  ],
  recursos: [
    { t: "INDEC: estadísticas oficiales de Argentina", url: "https://www.indec.gob.ar/" },
    { t: "Khan Academy: estadística y probabilidad (en español)", url: "https://es.khanacademy.org/math/statistics-probability" },
  ],
  quiz: [
    { q: "Si una encuesta tiene 100.000 votos en redes, ¿representa a todo el país?", opciones: ["Sí, porque es enorme","Sí, siempre","No: los que votan en redes no se parecen a toda la población","Sí, si es en una red famosa"], correcta: 2, explicacion: "El tamaño no arregla una mala selección. \"Es enorme\" tienta, pero sigue siendo un grupo especial." },
    { q: "Si elegís personas al azar, ¿qué buscás?", opciones: ["Que todos tengan la misma chance de ser elegidos","Elegir a los conocidos","Elegir a los que contestan rápido","Elegir a los que piensan como vos"], correcta: 0, explicacion: "El azar mezcla los grupos como en la realidad. Los que contestan rápido tientan por cómodos, pero no representan." },
    { q: "Si preguntás en la puerta de un gimnasio cuánto ejercicio hace la gente, ¿qué pasa?", opciones: ["Sale igual","Sale más bajo","No cambia nada","El resultado sale más alto que en toda la población"], correcta: 3, explicacion: "La muestra está sesgada hacia quien hace ejercicio. \"Sale igual\" tienta, pero ahí todos entrenan." },
    { q: "Si en una encuesta abierta responden solo los muy interesados, ¿qué sesgo es?", opciones: ["De supervivencia","De autoselección","Ninguno","Por la pregunta"], correcta: 1, explicacion: "Ellos mismos se eligen. Supervivencia tienta, pero es otro sesgo." },
    { q: "Si una pregunta dice \"¿No le parece injusto que...?\", ¿qué problema tiene?", opciones: ["Ninguno","Es muy corta","Empuja la respuesta: es una pregunta con sesgo","Es muy neutral"], correcta: 2, explicacion: "La forma de preguntar induce. \"Ninguno\" tienta porque suena normal, pero ya sugiere la respuesta." },
    { q: "Si solo ves noticias de emprendedores exitosos, ¿qué sesgo te puede engañar?", opciones: ["De supervivencia: los que fracasaron no salen","De selección por internet","Ninguno","Por la pregunta"], correcta: 0, explicacion: "Solo ves los que \"sobrevivieron\". \"Ninguno\" tienta, pero la muestra está incompleta." },
    { q: "Si encuestás a más gente con el mismo sesgo, ¿se arregla el problema?", opciones: ["Sí, siempre","Sí, con 10.000 personas","Sí, si es en internet","No: el sesgo empuja siempre para el mismo lado"], correcta: 3, explicacion: "El sesgo no se corrige con tamaño. \"Con 10.000 personas\" tienta, pero el error sigue." },
    { q: "Si una encuesta de 1.000 personas al azar da 42%, ¿cuál es el rango aproximado?", opciones: ["Exactamente 42%","Entre 38,8% y 45,2%","Entre 41% y 43%","Entre 0% y 100%"], correcta: 1, explicacion: "42 ± 3,2. \"Exactamente 42%\" tienta por el número, pero toda encuesta tiene margen." },
    { q: "Si A tiene 42% y B 39%, con margen de ± 3,2, ¿quién va adelante?", opciones: ["A, seguro","B, seguro","No se puede decir: es un empate técnico","Ninguno, los dos pierden"], correcta: 2, explicacion: "Los rangos se superponen. \"A, seguro\" tienta porque 42 es más que 39, pero la diferencia está dentro del margen." },
    { q: "Si querés achicar el margen de error a la mitad, ¿cuánta gente más necesitás?", opciones: ["4 veces más","El doble","10 veces más","La mitad"], correcta: 0, explicacion: "El margen baja con la raíz del tamaño. \"El doble\" tienta por lógica, pero no alcanza." },
    { q: "Si una encuesta se hizo hace 6 meses, ¿qué tenés en cuenta?", opciones: ["Que sigue igual siempre","Que es más precisa","Nada","Que las opiniones pueden haber cambiado"], correcta: 3, explicacion: "Las opiniones cambian con el tiempo. \"Sigue igual\" tienta, pero puede estar vieja." },
    { q: "Si querés saber si una encuesta es confiable, ¿qué preguntás?", opciones: ["Solo el resultado","Cuántas personas, cómo se eligieron, el margen, la fecha y quién la pagó","El color del gráfico","Quién la publicó en redes"], correcta: 1, explicacion: "Esos datos muestran su calidad. El resultado solo tienta, pero no dice si se puede creer." },
  ],
},
{
  id: "probabilidad",
  icono: "🎲",
  titulo: "Probabilidad y riesgo",
  nivel: "Intermedio",
  objetivos: [
    "Calcular probabilidades simples con casos favorables y posibles",
    "Reconocer la falacia del jugador",
    "Distinguir riesgo relativo de riesgo absoluto",
  ],
  lecciones: [
    { titulo: "Probabilidad simple", video: {"id":"WeeEE8o1aqM","t":"Probabilidad súper fácil · Daniel Carreón (5:53)"}, html: `
      <p class="idea">La <strong>probabilidad</strong> dice qué tan posible es que algo pase, de 0 (imposible) a 1 (seguro), o de 0% a 100%.</p>
      <pre><code>Probabilidad = casos favorables / casos posibles

Sacar un 4 con un dado:   1 / 6 = 0,167 → 16,7%
Sacar par con un dado:    3 / 6 = 0,5   → 50%

Sumar 7 con dos dados:
casos favorables: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1) = 6
casos posibles: 6 × 6 = 36
6 / 36 = 16,7%</code></pre>
      <table>
        <tr><th>Probabilidad</th><th>Se dice</th></tr>
        <tr><td>0%</td><td>Imposible</td></tr>
        <tr><td>Cerca de 10%</td><td>Poco probable</td></tr>
        <tr><td>50%</td><td>Tan probable como no</td></tr>
        <tr><td>Cerca de 90%</td><td>Muy probable</td></tr>
        <tr><td>100%</td><td>Seguro</td></tr>
      </table>
      <p><strong>Poco probable no es imposible:</strong> algo con 10% de probabilidad pasa 1 de cada 10 veces.</p>
      <p>Por ejemplo, un pronóstico de 70% de lluvia no "se equivocó" si no llovió: de cada 10 días así, en unos 3 no llueve.</p>` },
    { titulo: "La falacia del jugador", html: `
      <p class="idea">Cada tirada de una moneda o un dado es <strong>independiente</strong>: no "se acuerda" de las anteriores. Creer que "ya le toca" es un error muy común, llamado falacia del jugador.</p>
      <pre><code>Una moneda salió cara 5 veces seguidas.
¿Cuál es la probabilidad de cara en la próxima?
→ 50%, igual que siempre.

Lo raro era la serie completa antes de empezar:
3 caras seguidas: 1/2 × 1/2 × 1/2 = 1/8 = 12,5%
Pero una vez que pasaron, la próxima sigue siendo 50%.</code></pre>
      <table>
        <tr><th>Pensamiento</th><th>Realidad</th></tr>
        <tr><td>"El 17 no sale hace mucho en la ruleta, ya le toca"</td><td>Tiene la misma chance que cualquier otro número</td></tr>
        <tr><td>"Perdí 10 veces, la próxima gano seguro"</td><td>Cada jugada es independiente</td></tr>
        <tr><td>"Este número ya salió, no va a salir de nuevo"</td><td>Puede volver a salir</td></tr>
      </table>
      <p class="aviso">Los juegos de azar están diseñados para que, a la larga, gane la casa. Si el juego te genera problemas, en Argentina hay líneas gratuitas de ayuda para la ludopatía en cada provincia.</p>
      <p>Por ejemplo, alguien que apuesta más "porque ya viene perdiendo" no tiene más chances: solo arriesga más plata con la misma probabilidad.</p>` },
    { titulo: "Riesgo relativo y absoluto", html: `
      <p class="idea">"Duplica el riesgo" puede asustar mucho o no significar casi nada. Depende de cuál era el riesgo de partida: eso es el <strong>riesgo absoluto</strong>.</p>
      <pre><code>Un hábito hace pasar un riesgo de 1 en 10.000 a 2 en 10.000.

Riesgo relativo:  2 / 1 = el doble → "aumenta un 100%"
Riesgo absoluto:  de 0,01% a 0,02% → sube 0,01 puntos porcentuales
                  (1 persona más cada 10.000)</code></pre>
      <table>
        <tr><th>Titular</th><th>Pregunta para hacerte</th></tr>
        <tr><td>"Duplica el riesgo"</td><td>¿El riesgo de qué número a qué número?</td></tr>
        <tr><td>"Reduce un 50% las muertes"</td><td>¿De cuántas a cuántas, en cuánta gente?</td></tr>
        <tr><td>"Aumenta un 300%"</td><td>¿Cuál era el número inicial?</td></tr>
      </table>
      <p><strong>Las dos formas son verdad,</strong> pero la relativa sola suele exagerar. Para decidir, buscá siempre el riesgo absoluto.</p>
      <p class="aviso">Este curso ayuda a leer datos, no reemplaza a un médico. Ante una decisión de salud, consultá a un profesional.</p>
      <p>Por ejemplo, "un alimento duplica el riesgo de una enfermedad rara" puede querer decir que pasa de afectar a 1 de cada 10.000 personas a 2 de cada 10.000.</p>` },
  ],
  practica: [
    "Calculá la probabilidad de sacar un número mayor que 4 con un dado. Anotá casos favorables, posibles y el porcentaje.",
    "Tirá una moneda 20 veces y anotá los resultados. Contá la serie más larga de caras o cecas seguidas.",
    "Buscá un titular con \"duplica\" o \"reduce un X%\" y anotá si dice el riesgo absoluto. Si no lo dice, anotá qué dato falta.",
  ],
  recursos: [
    { t: "Khan Academy: estadística y probabilidad (en español)", url: "https://es.khanacademy.org/math/statistics-probability" },
    { t: "Our World in Data: datos y gráficos del mundo (en inglés)", url: "https://ourworldindata.org/" },
  ],
  quiz: [
    { q: "Si tirás un dado, ¿qué probabilidad hay de sacar un 4?", opciones: ["4 de 6","50%","1 de 6, unos 16,7%","1 de 4"], correcta: 2, explicacion: "Hay un caso favorable entre 6 posibles. 1 de 4 tienta por el número, pero el dado tiene 6 caras." },
    { q: "Si tirás un dado, ¿qué probabilidad hay de sacar un número par?", opciones: ["50%: 3 de 6","1 de 6","2 de 6","100%"], correcta: 0, explicacion: "Los pares son 2, 4 y 6. 1 de 6 tienta si contás uno solo." },
    { q: "Si tirás dos dados, ¿cuántos casos posibles hay?", opciones: ["12","6","11","36"], correcta: 3, explicacion: "6 × 6 = 36. 12 tienta si sumás las caras de los dos dados." },
    { q: "Si el pronóstico dice 70% de lluvia y no llueve, ¿se equivocó?", opciones: ["Sí, siempre","No necesariamente: en unos 3 de cada 10 días así no llueve","Sí, debía llover seguro","No, porque 70% es seguro"], correcta: 1, explicacion: "Probable no es seguro. \"Se equivocó\" tienta, pero el 30% restante también pasa." },
    { q: "Si algo tiene 10% de probabilidad, ¿puede pasar?", opciones: ["No, es imposible","Solo si tenés suerte","Sí: pasa más o menos 1 de cada 10 veces","Nunca"], correcta: 2, explicacion: "Poco probable no es imposible. \"Imposible\" tienta, pero eso es 0%." },
    { q: "Si una moneda salió cara 5 veces seguidas, ¿qué probabilidad hay de cara en la próxima?", opciones: ["50%, igual que siempre","Menos, ya le toca ceca","Más, está en racha","0%"], correcta: 0, explicacion: "Cada tirada es independiente. \"Ya le toca ceca\" tienta, pero es la falacia del jugador." },
    { q: "Si antes de empezar querés saber la probabilidad de 3 caras seguidas, ¿cuál es?", opciones: ["50%","33%","3%","12,5% (1/8)"], correcta: 3, explicacion: "1/2 × 1/2 × 1/2 = 1/8. El 50% tienta, pero eso es para una sola tirada." },
    { q: "Si alguien dice \"el 17 no sale hace mucho, ya le toca\", ¿qué error comete?", opciones: ["Ninguno, tiene razón","La falacia del jugador: el 17 tiene la misma chance que siempre","Que el 17 nunca sale","Que debería apostar al 18"], correcta: 1, explicacion: "La ruleta no tiene memoria. \"Tiene razón\" tienta por intuición, pero no es así." },
    { q: "Si alguien apuesta más porque viene perdiendo, ¿mejoran sus chances?", opciones: ["Sí, ya le toca ganar","Sí, el doble","No: arriesga más plata con la misma probabilidad","Sí, si cambia de mesa"], correcta: 2, explicacion: "Perder antes no cambia la probabilidad. \"Ya le toca\" tienta, pero agranda la pérdida." },
    { q: "Si un riesgo pasa de 1 en 10.000 a 2 en 10.000, ¿cuánto subió en riesgo relativo?", opciones: ["El doble: un 100%","0,01%","10.000%","1%"], correcta: 0, explicacion: "2 / 1 = 2. 0,01 tienta, pero ese es el cambio absoluto, en puntos." },
    { q: "Si ese riesgo pasa de 0,01% a 0,02%, ¿cuánto subió en riesgo absoluto?", opciones: ["100%","El doble","50 puntos","0,01 puntos porcentuales: 1 persona más cada 10.000"], correcta: 3, explicacion: "Es la diferencia: 0,02 - 0,01. \"El doble\" tienta, pero ese es el riesgo relativo." },
    { q: "Si un titular dice \"duplica el riesgo\", ¿qué buscás?", opciones: ["Nada más","El riesgo absoluto: de qué número a qué número","Solo el porcentaje","Quién lo dijo en redes"], correcta: 1, explicacion: "El absoluto dice cuánto importa. \"Nada más\" tienta, pero \"el doble\" de muy poco sigue siendo poco." },
  ],
},
{
  id: "noticias",
  icono: "📰",
  titulo: "Leer estadísticas en las noticias",
  nivel: "Avanzado",
  objetivos: [
    "Distinguir correlación de causalidad",
    "Detectar gráficos engañosos",
    "Hacerle las preguntas correctas a un dato antes de creerlo",
  ],
  lecciones: [
    { titulo: "Correlación no es causalidad", video: {"id":"2wQAhyWwd4A","t":"Correlación no implica causalidad · Cochrane Iberoamérica (3:14)"}, html: `
      <p class="idea">Que dos cosas aumenten juntas (una <strong>correlación</strong>) no prueba que una cause la otra (<strong>causalidad</strong>). Puede haber una tercera cosa que mueve a las dos, o puede ser casualidad.</p>
      <table>
        <tr><th>Las dos suben juntas</th><th>Explicación real</th></tr>
        <tr><td>Venta de helados y casos de insolación</td><td>El calor causa las dos</td></tr>
        <tr><td>Cantidad de bomberos y daño en un incendio</td><td>Los incendios grandes llevan más bomberos</td></tr>
        <tr><td>Chicos con más libros en casa y mejores notas</td><td>Puede influir la educación de la familia, el tiempo, los ingresos</td></tr>
      </table>
      <pre><code>Antes de creer que A causa B, preguntate:
1. ¿Hay una tercera causa que mueve a las dos?
2. ¿Podría ser al revés (B causa A)?
3. ¿Puede ser casualidad (pocos datos)?
4. ¿Se hizo un experimento comparando grupos al azar?</code></pre>
      <p><strong>Los experimentos con grupos al azar</strong> (como los ensayos de medicamentos) son la mejor forma de probar una causa, porque reparten las otras diferencias entre los grupos.</p>
      <p>Por ejemplo, un titular "las personas que toman café viven más" no prueba que el café alargue la vida: puede que quienes toman café tengan otras costumbres o ingresos distintos.</p>` },
    { titulo: "Gráficos que engañan", video: {"id":"LXf4V6OLlyM","t":"Las matemáticas que revelan mentiras estadísticas · Universidad de Burgos (5:34)"}, html: `
      <p class="idea">Un gráfico puede mostrar datos verdaderos y, aun así, engañar. Los trucos más comunes están en los ejes y en lo que se deja afuera.</p>
      <table>
        <tr><th>Truco</th><th>Efecto</th><th>Qué mirar</th></tr>
        <tr><td>Eje vertical que no empieza en 0</td><td>Una diferencia chica parece enorme</td><td>El número donde empieza el eje</td></tr>
        <tr><td>Elegir solo algunos años</td><td>Una tendencia parece subir o bajar</td><td>El período completo</td></tr>
        <tr><td>Dibujos en 3D o de distinto tamaño</td><td>Las áreas exageran la diferencia</td><td>Los números, no los dibujos</td></tr>
        <tr><td>Sin unidades ni fuente</td><td>No se puede comprobar</td><td>De dónde salen los datos</td></tr>
      </table>
      <pre><code>Barras con el eje empezando en 40:
A: 42  ██
B: 46  ██████████
(parece el quíntuple)

Con el eje empezando en 0:
A: 42  ██████████████████████████████████████████
B: 46  ██████████████████████████████████████████████
(es un 9,5% más)</code></pre>
      <p>Por ejemplo, un gráfico de ventas que muestra solo los últimos 3 meses puede esconder que en el año cayeron: siempre preguntá por el período completo.</p>` },
    { titulo: "Preguntas para cualquier dato", html: `
      <p class="idea">Antes de compartir o creer una estadística, hacele unas pocas preguntas. Te protegen de los errores y de los engaños.</p>
      <table>
        <tr><th>Pregunta</th><th>Por qué</th></tr>
        <tr><td>¿De dónde sale el dato?</td><td>Una fuente oficial o un estudio serio vale más que una imagen sin firma</td></tr>
        <tr><td>¿Cuántos casos y cómo se eligieron?</td><td>Muestras chicas o sesgadas engañan</td></tr>
        <tr><td>¿Es promedio o mediana?</td><td>Con extremos, dan muy distinto</td></tr>
        <tr><td>¿Es riesgo relativo o absoluto?</td><td>"El doble" de muy poco sigue siendo poco</td></tr>
        <tr><td>¿Es correlación o causa?</td><td>Que vayan juntas no prueba la causa</td></tr>
        <tr><td>¿Con qué se compara?</td><td>"Bajó 5%", ¿respecto de qué y de cuándo?</td></tr>
      </table>
      <p><strong>Las fuentes oficiales,</strong> como el INDEC o datos.gob.ar, publican cómo calcularon cada dato. Leerlo es la mejor forma de entender qué mide.</p>
      <p><strong>Desconfiá de los datos que te dan justo la razón:</strong> son los que más ganas dan de compartir sin revisar.</p>
      <p>Por ejemplo, una imagen en redes con "el 80% de los argentinos piensa..." sin fuente ni tamaño de muestra no se puede comprobar: antes de compartirla, buscá de dónde sale.</p>` },
  ],
  practica: [
    "Buscá una noticia que diga que algo \"causa\" otra cosa y anotá las 4 preguntas de correlación con tu respuesta.",
    "Buscá un gráfico en una noticia y anotá dónde empieza el eje, el período que muestra y si tiene fuente.",
    "Elegí una estadística que circule en redes y respondé las 6 preguntas en una tabla. Anotá si la compartirías.",
  ],
  recursos: [
    { t: "INDEC: estadísticas oficiales de Argentina", url: "https://www.indec.gob.ar/" },
    { t: "datos.gob.ar: datos abiertos del Estado argentino", url: "https://datos.gob.ar/" },
    { t: "Our World in Data: datos y gráficos del mundo (en inglés)", url: "https://ourworldindata.org/" },
  ],
  quiz: [
    { q: "Si la venta de helados y las insolaciones suben juntas, ¿los helados causan insolación?", opciones: ["Sí, claramente","Sí, si se comen muchos","No: el calor causa las dos","No se puede saber nada"], correcta: 2, explicacion: "Hay una tercera causa. \"Sí, claramente\" tienta porque van juntas, pero es correlación." },
    { q: "Si dos cosas aumentan juntas, ¿qué es eso?", opciones: ["Una correlación","Una causa probada","Un experimento","Un sesgo siempre"], correcta: 0, explicacion: "Ir juntas es correlación. \"Causa probada\" tienta, pero hace falta más evidencia." },
    { q: "Si en los incendios grandes hay más bomberos y más daño, ¿los bomberos causan el daño?", opciones: ["Sí","Sí, si son muchos","No hay relación","No: los incendios grandes llevan más bomberos"], correcta: 3, explicacion: "La causa va al revés. \"Sí\" tienta por la correlación, pero el incendio causa las dos cosas." },
    { q: "Si querés probar que un medicamento funciona, ¿qué es lo más sólido?", opciones: ["Una encuesta de opiniones","Un experimento con grupos elegidos al azar","Un testimonio","Un gráfico en redes"], correcta: 1, explicacion: "El azar reparte las otras diferencias. El testimonio tienta por convincente, pero es un solo caso." },
    { q: "Si un titular dice \"quienes toman café viven más\", ¿qué concluís?", opciones: ["Que el café alarga la vida seguro","Que hay que tomar 10 cafés","Que puede ser correlación: hay otras diferencias entre los grupos","Que es falso seguro"], correcta: 2, explicacion: "No prueba la causa. \"Seguro\" tienta por el titular, pero faltan otras explicaciones." },
    { q: "Si el eje vertical de un gráfico empieza en 40 y no en 0, ¿qué pasa?", opciones: ["Una diferencia chica parece enorme","Nada","Se ve más chica","Se ve igual"], correcta: 0, explicacion: "Cortar el eje exagera. \"Nada\" tienta porque los números son reales, pero la imagen engaña." },
    { q: "Si A vale 42 y B vale 46, ¿cuánto más es B?", opciones: ["El quíntuple","Un 46% más","Un 4% más","Un 9,5% más"], correcta: 3, explicacion: "4 / 42 × 100 = 9,5. El 4% tienta porque la diferencia es 4, pero hay que dividir por 42." },
    { q: "Si un gráfico muestra solo los últimos 3 meses de ventas, ¿qué preguntás?", opciones: ["Nada","Qué pasó en el período completo","El color de las barras","Si es en 3D"], correcta: 1, explicacion: "El recorte puede esconder la tendencia. \"Nada\" tienta, pero el año puede contar otra historia." },
    { q: "Si un gráfico no tiene fuente ni unidades, ¿qué problema hay?", opciones: ["Ninguno","Que es feo","No se puede comprobar","Que es muy chico"], correcta: 2, explicacion: "Sin fuente no sabés de dónde sale. \"Ninguno\" tienta si parece serio, pero no se puede verificar." },
    { q: "Si ves \"el 80% de los argentinos piensa...\" en una imagen sin fuente, ¿qué hacés?", opciones: ["Buscás de dónde sale antes de compartirla","La compartís","La creés","Le agregás un número más alto"], correcta: 0, explicacion: "Sin fuente no se puede comprobar. Compartirla tienta si estás de acuerdo, pero puede ser inventada." },
    { q: "Si un dato te da justo la razón, ¿qué hacés?", opciones: ["Lo compartís enseguida","No lo mirás","Lo exagerás","Lo revisás con más cuidado antes de compartirlo"], correcta: 3, explicacion: "Los que nos dan la razón son los que menos revisamos. Compartirlo enseguida tienta, pero es el error más común." },
    { q: "Si querés entender qué mide un dato oficial, ¿qué leés?", opciones: ["Solo el titular","Cómo lo calcularon, que publican el INDEC y datos.gob.ar","Los comentarios","Nada"], correcta: 1, explicacion: "La metodología explica qué mide. El titular tienta por rápido, pero resume demasiado." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu propio análisis",
  nivel: "Avanzado",
  objetivos: [
    "Juntar un conjunto de datos propio y describirlo con las medidas del curso",
    "Escribir un informe honesto con sus límites",
    "Evaluar el informe con una rúbrica",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>análisis propio</strong>: juntás al menos 12 datos de algo que te interese, los describís con las medidas del curso y escribís un informe corto.</p>
      <pre><code>Ejemplo: minutos que tardó el colectivo, 12 días
25, 28, 30, 30, 31, 32, 33, 35, 36, 40, 45, 75

Cantidad:  12
Promedio:  440 / 12 = 36,67 minutos
Mediana:   (32 + 33) / 2 = 32,5 minutos
Moda:      30 minutos
Rango:     75 - 25 = 50 minutos
Desvío estándar: 12,65 minutos

Sin el día de 75 (hubo un corte de calle):
Promedio: 33,18   Mediana: 32</code></pre>
      <table>
        <tr><th>Parte del informe</th><th>Módulo</th></tr>
        <tr><td>Qué medí, cuántos datos y cómo los junté</td><td>Qué es la estadística</td></tr>
        <tr><td>Promedio, mediana y moda, y cuál representa mejor</td><td>Promedio, mediana y moda</td></tr>
        <tr><td>Rango y desvío, y qué dicen</td><td>Qué tan distintos son los datos</td></tr>
        <tr><td>Límites: muestra chica, sesgos posibles</td><td>Muestras y encuestas</td></tr>
        <tr><td>Una conclusión sin confundir correlación con causa</td><td>Leer estadísticas en las noticias</td></tr>
      </table>
      <p>Por ejemplo, el informe del colectivo diría: "Tarda típicamente 32,5 minutos (mediana). Un día tardó 75 por un corte de calle: por eso conviene salir con 45 minutos de margen".</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu informe.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Datos</td><td>12 o más, con cómo y cuándo se juntaron</td><td>Menos de 12 o sin explicar cómo</td><td>No hay datos propios</td></tr>
        <tr><td>Centro</td><td>Promedio, mediana y moda, eligiendo la mejor con motivo</td><td>Calculadas, sin elegir</td><td>Solo el promedio</td></tr>
        <tr><td>Dispersión</td><td>Rango y desvío con su interpretación</td><td>Solo uno</td><td>No hay</td></tr>
        <tr><td>Límites</td><td>Nombra el tamaño de la muestra y posibles sesgos</td><td>Solo uno</td><td>No los menciona</td></tr>
        <tr><td>Conclusión</td><td>Clara y sin afirmar causas que no probó</td><td>Clara, pero exagera</td><td>No hay o confunde correlación con causa</td></tr>
        <tr><td>Honestidad</td><td>Usa todos los datos y explica si saca alguno</td><td>—</td><td>Inventa, cambia o esconde datos para que den lo que quería</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Honestidad" tiene 0, el informe no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, borrar el día de 75 minutos sin decirlo para que el promedio "dé lindo" saca 0 en honestidad. Sacarlo y explicar por qué está bien.</p>` },
    { titulo: "Seguir aprendiendo", html: `
      <p class="idea">La estadística se aprende usándola con datos reales. Hay muchos datos abiertos y cursos gratis para seguir.</p>
      <table>
        <tr><th>Recurso</th><th>Qué tiene</th></tr>
        <tr><td>Khan Academy en español</td><td>Cursos gratis de estadística y probabilidad, con ejercicios</td></tr>
        <tr><td>INDEC</td><td>Estadísticas oficiales de Argentina: precios, empleo, población</td></tr>
        <tr><td>datos.gob.ar</td><td>Datos abiertos del Estado para descargar y analizar</td></tr>
        <tr><td>Our World in Data (en inglés)</td><td>Datos y gráficos de todo el mundo, con sus fuentes</td></tr>
      </table>
      <pre><code>Próximos pasos en este sitio:
- "Excel y Google Sheets": fórmulas y tablas para tus datos
- "Datos con IA": analizar datos sin programar
- "Análisis secuencial": para quien quiere ir más lejos</code></pre>
      <p><strong>Un hábito simple:</strong> cada vez que leas una estadística, hacé una de las preguntas del módulo de noticias. En un mes te vas a dar cuenta de cuántos datos engañan sin mentir.</p>
      <p>Por ejemplo, descargar de datos.gob.ar una planilla de tu provincia y calcularle la mediana y el rango es una práctica real de 20 minutos.</p>` },
  ],
  practica: [
    "Juntá al menos 12 datos de algo que te interese y anotá cómo y cuándo los juntaste.",
    "Calculá promedio, mediana, moda, rango y desvío en una planilla, escribí el informe y evaluá con la rúbrica. Anotá el total.",
    "Descargá un conjunto de datos de datos.gob.ar o del INDEC y anotá la mediana y el rango de una columna.",
  ],
  recursos: [
    { t: "Khan Academy: estadística y probabilidad (en español)", url: "https://es.khanacademy.org/math/statistics-probability" },
    { t: "datos.gob.ar: datos abiertos del Estado argentino", url: "https://datos.gob.ar/" },
    { t: "INDEC: estadísticas oficiales de Argentina", url: "https://www.indec.gob.ar/" },
  ],
  quiz: [
    { q: "Si los tiempos del colectivo suman 440 minutos en 12 días, ¿cuál es el promedio?", opciones: ["44 minutos","32,5 minutos","Unos 36,67 minutos","12 minutos"], correcta: 2, explicacion: "440 / 12 = 36,67. 32,5 tienta, pero esa es la mediana." },
    { q: "Si tenés 12 datos ordenados, ¿cómo sacás la mediana?", opciones: ["Promediás el sexto y el séptimo","Tomás el sexto","Tomás el doceavo","Sumás todos"], correcta: 0, explicacion: "Con 12 datos no hay uno solo en el medio. El sexto tienta, pero falta promediarlo con el séptimo." },
    { q: "Si los tiempos van de 25 a 75 minutos, ¿cuál es el rango?", opciones: ["75 minutos","100 minutos","25 minutos","50 minutos"], correcta: 3, explicacion: "75 - 25 = 50. 100 tienta si sumás en vez de restar." },
    { q: "Si un día tardó 75 minutos por un corte de calle, ¿qué medida representa mejor el viaje típico?", opciones: ["El promedio, 36,67","La mediana, 32,5 minutos","El máximo, 75","El rango, 50"], correcta: 1, explicacion: "El extremo arrastra al promedio. El promedio tienta por conocido, pero lo infla el día raro." },
    { q: "Si sacás un dato extremo del análisis, ¿qué tenés que hacer?", opciones: ["Sacarlo sin decir nada","Inventar otro","Decirlo y explicar por qué lo sacaste","Duplicar los otros"], correcta: 2, explicacion: "La honestidad pide explicarlo. Sacarlo sin decir tienta para que dé lindo, pero engaña." },
    { q: "Si tu informe solo tiene el promedio, ¿cuánto saca en \"Centro\"?", opciones: ["0 puntos","2 puntos","1 punto","No se evalúa"], correcta: 0, explicacion: "Solo el promedio es 0. Sacar 1 tienta porque calculaste algo, pero faltan las otras medidas." },
    { q: "Si calculaste rango, pero no desvío, ¿cuánto sacás en \"Dispersión\"?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto"], correcta: 3, explicacion: "Falta uno. Sacar 2 tienta porque hay dispersión, pero la rúbrica pide las dos." },
    { q: "Si tu informe suma 11, pero cambiaste un dato para que dé lo que querías, ¿está listo?", opciones: ["Sí, 11 es listo","No: \"Honestidad\" tiene 0 y eso no se compensa con el total","Sí, si el cambio es chico","Depende del dato"], correcta: 1, explicacion: "La regla lo dice. \"Si el cambio es chico\" tienta, pero cambiar datos es inventar." },
    { q: "Si tu conclusión dice \"el colectivo tarda más porque llueve\" sin haberlo probado, ¿qué error cometés?", opciones: ["Ninguno","Usar la mediana","Afirmar una causa que no probaste","Tener 12 datos"], correcta: 2, explicacion: "Eso es confundir correlación con causa. \"Ninguno\" tienta si suena lógico, pero no lo probaste." },
    { q: "Si tenés solo 12 datos, ¿qué ponés en \"Límites\"?", opciones: ["Que la muestra es chica y puede haber sesgos","Nada","Que es una muestra perfecta","Que representa a todo el país"], correcta: 0, explicacion: "Reconocer límites hace confiable el informe. \"Muestra perfecta\" tienta, pero 12 datos son pocos." },
    { q: "Si querés datos abiertos del Estado para practicar, ¿dónde los buscás?", opciones: ["En una imagen sin fuente","En un chat","En ningún lado","En datos.gob.ar"], correcta: 3, explicacion: "Es el portal oficial de datos abiertos. La imagen sin fuente tienta por rápida, pero no se puede comprobar." },
    { q: "Si querés seguir con fórmulas y tablas para tus datos, ¿qué curso del sitio hacés?", opciones: ["\"Pintura de interiores\"","\"Excel y Google Sheets\"","\"Portugués básico\"","Ninguno"], correcta: 1, explicacion: "Ese curso trabaja con planillas. Los otros tientan porque están en el sitio, pero son de otros temas." },
  ],
},
];
