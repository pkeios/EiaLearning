// Temario del curso "Análisis secuencial para observabilidad de datos y ML". Mismo formato que public/contenido.js.
// Los códigos Python de las lecciones se corren de verdad en tools/test-de.js analisis-secuencial: si después de un código hay
// un bloque "Salida:", tiene que ser exactamente lo que imprime. Validar con: node tools/validar.js analisis-secuencial
window.TEMARIO = [
{
  id: "fundamentos",
  icono: "⏱️",
  titulo: "El problema secuencial: detectar rápido sin falsas alarmas",
  nivel: "Avanzado",
  objetivos: [
    "Plantear el monitoreo de una métrica como una prueba de hipótesis que se repite en cada dato nuevo",
    "Calcular el ARL0 (largo de corrida hasta una falsa alarma) y el ARL1 (demora en detectar un cambio) de una regla",
    "Estimar cuántas falsas alarmas por día genera un conjunto de métricas vigiladas con la misma regla",
  ],
  lecciones: [
    { titulo: "Vigilar es decidir una y otra vez", html: `
      <p class="idea">El <strong>análisis secuencial</strong> estudia cómo decidir mientras los datos van llegando, en vez de esperar a tener una muestra fija. En observabilidad, cada dato nuevo (las ventas de esta hora, la latencia de este minuto, el error del modelo de hoy) es una nueva oportunidad de decir "algo cambió".</p>
      <p>Cada vez que mirás una métrica, hacés en el fondo una prueba de hipótesis:</p>
      <table>
        <tr><th>Hipótesis</th><th>En palabras</th></tr>
        <tr><td>H0: el proceso está "en control"</td><td>Los datos vienen de la misma distribución de siempre</td></tr>
        <tr><td>H1: hubo un cambio en algún momento τ</td><td>Desde τ la media (o la varianza, o la tasa) es otra</td></tr>
      </table>
      <p>La diferencia con una prueba clásica es que el momento del cambio τ es desconocido y la prueba se repite sin fin. Eso trae dos errores que siempre se negocian entre sí:</p>
      <ul>
        <li><strong>Falsa alarma:</strong> avisar cuando no pasó nada. Cuesta tiempo de guardia y, peor, hace que la gente deje de mirar las alertas.</li>
        <li><strong>Demora de detección:</strong> tardar en avisar cuando sí pasó algo. Cuesta datos malos en producción, plata o un modelo degradado durante días.</li>
      </ul>
      <p>Por ejemplo, la regla más simple es alarmar si un valor estandarizado supera 3 en valor absoluto. Simulemos 150 datos donde la media sube 1 desvío desde el dato 100:</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(7)
x = rng.normal(0, 1, 150)
x[100:] += 1.0          # cambio de media de 1 desvío desde el dato 100

alarmas = np.flatnonzero(np.abs(x) &gt; 3)
print("alarmas en los datos:", alarmas.tolist())
print("primera alarma después del cambio:", alarmas[alarmas &gt;= 100][:1].tolist())</code></pre>
      <pre><code>Salida:
alarmas en los datos: [103]
primera alarma después del cambio: [103]</code></pre>
      <p>Con la misma regla y otra semilla los números cambian: la demora es una variable aleatoria. Por eso los detectores no se comparan con un ejemplo, sino con promedios sobre muchas corridas, como verás en la próxima lección.</p>
    ` },
    { titulo: "ARL0 y ARL1: el idioma para comparar detectores", html: `
      <p class="idea">El <strong>ARL</strong> (en inglés, <em>average run length</em>) es la cantidad promedio de datos que pasan hasta la primera alarma. Se mide en dos situaciones: sin cambio (ARL0, que querés grande) y con un cambio de tamaño dado (ARL1, que querés chico).</p>
      <p>Para la regla "alarmar si |z| &gt; 3" con datos independientes y normales, la probabilidad de alarma en cada dato es constante, así que la corrida hasta la alarma sigue una distribución geométrica y el ARL es 1 dividido esa probabilidad:</p>
      <pre><code>from math import erf, sqrt

def Phi(z):                       # función de distribución normal estándar
    return 0.5 * (1 + erf(z / sqrt(2)))

def arl_shewhart(L, delta):
    p = (1 - Phi(L - delta)) + Phi(-L - delta)   # P(|z| &gt; L) si la media corrió delta desvíos
    return 1 / p

for delta in [0, 0.5, 1, 2, 3]:
    print(f"cambio de {delta} desvíos: ARL = {arl_shewhart(3, delta):.1f}")</code></pre>
      <pre><code>Salida:
cambio de 0 desvíos: ARL = 370.4
cambio de 0.5 desvíos: ARL = 155.2
cambio de 1 desvíos: ARL = 43.9
cambio de 2 desvíos: ARL = 6.3
cambio de 3 desvíos: ARL = 2.0</code></pre>
      <p>Cómo se lee: sin cambio, la regla da una falsa alarma cada 370 datos en promedio. Con un cambio de 1 desvío tarda en promedio 44 datos en avisar; con uno de 3 desvíos, 2 datos. La regla de 3 desvíos es buena para cambios grandes y muy lenta para cambios chicos: esa es la motivación de CUSUM y EWMA (módulos 2 y 3), que acumulan evidencia.</p>
      <table>
        <tr><th>Medida</th><th>Qué querés</th><th>Qué la mueve</th></tr>
        <tr><td>ARL0</td><td>Grande: pocas falsas alarmas</td><td>Umbrales más altos la suben</td></tr>
        <tr><td>ARL1 (para el cambio que te importa)</td><td>Chico: detectar rápido</td><td>Umbrales más altos también la suben</td></tr>
      </table>
      <p>No existe un detector que mejore las dos a la vez sin cambiar de método: con el mismo método, subir el umbral compra menos falsas alarmas a cambio de más demora. Comparar métodos es comparar sus ARL1 <em>a igual ARL0</em>.</p>
      <p>Por ejemplo, la demora que importa en producción es la condicional: cuántos datos pasan desde el cambio hasta la alarma. Con datos por hora, un ARL1 de 44 son casi dos días.</p>
    ` },
    { titulo: "Muchas métricas: las falsas alarmas se suman", html: `
      <p class="idea">Un ARL0 de 370 suena tranquilo para una métrica. Pero un equipo vigila decenas o cientos de series a la vez, y las falsas alarmas se suman. El presupuesto de falsas alarmas se diseña para el conjunto, no para cada serie.</p>
      <p>Si cada serie se evalúa una vez por hora con la regla de 3 desvíos, ¿cuántas falsas alarmas por día esperás?</p>
      <pre><code>from math import erf, sqrt

p = 2 * (1 - 0.5 * (1 + erf(3 / sqrt(2))))   # P(falsa alarma) por evaluación
for series in [1, 20, 200]:
    evaluaciones_por_dia = series * 24
    print(f"{series:&gt;3} series: {evaluaciones_por_dia * p:.2f} falsas alarmas por día")</code></pre>
      <pre><code>Salida:
  1 series: 0.06 falsas alarmas por día
 20 series: 1.30 falsas alarmas por día
200 series: 12.96 falsas alarmas por día</code></pre>
      <p>Con 200 series, una regla que parecía conservadora genera cerca de 13 falsas alarmas por día. Nadie las mira por mucho tiempo.</p>
      <table>
        <tr><th>Palanca</th><th>Qué hace</th><th>Módulo</th></tr>
        <tr><td>Detectores que acumulan evidencia</td><td>Mejor ARL1 a igual ARL0</td><td>2, 3 y 4</td></tr>
        <tr><td>Modelar estacionalidad y autocorrelación</td><td>Evita alarmas por patrones conocidos</td><td>6</td></tr>
        <tr><td>Controlar la tasa de falsos descubrimientos</td><td>Ajusta umbrales para muchas series</td><td>9</td></tr>
        <tr><td>Agrupar y priorizar alertas</td><td>Menos ruido para la persona de guardia</td><td>9</td></tr>
      </table>
      <p><strong>Un supuesto que casi nunca se cumple:</strong> todo lo calculado acá supone datos independientes y normales. Las métricas reales tienen estacionalidad (más tráfico a la tarde), autocorrelación (una hora se parece a la anterior) y colas pesadas. Con autocorrelación positiva, los ARL0 reales son mucho más chicos que los teóricos. El módulo 6 trata eso; mientras tanto, desconfiá de un ARL calculado con fórmulas para una serie real.</p>
      <p>Por ejemplo, una práctica sana es medir el ARL0 empírico: correr el detector sobre semanas históricas sin incidentes conocidos y contar cuántas alarmas da. Ese número es el que importa, no el de la fórmula.</p>
    ` },
  ],
  practica: [
    "Corré el primer código con 5 semillas distintas y anotá la demora (datos entre el 100 y la primera alarma) de cada una. Calculá el promedio y compará con el ARL1 de 44 para un cambio de 1 desvío.",
    "Usá arl_shewhart para encontrar el umbral L que da ARL0 de 1000 (probá valores entre 3 y 3,5). Anotá el L y el ARL1 que queda para un cambio de 1 desvío.",
    "Contá cuántas series vigila tu equipo y con qué frecuencia. Calculá con la fórmula de la última lección cuántas falsas alarmas por día esperarías con la regla de 3 desvíos y anotalo.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: introducción a los gráficos de control (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc32.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
    { t: "Google: monitoreo de pipelines de ML en producción (en inglés)", url: "https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring" },
  ],
  quiz: [
    { q: "Tu equipo pide \"menos falsas alarmas y detectar más rápido\" sin cambiar el detector. ¿Qué le explicás?", opciones: ["Que alcanza con bajar el umbral","Que alcanza con subir el umbral","Que con el mismo método subir el umbral reduce falsas alarmas a costa de más demora: hay que cambiar de método para mejorar las dos","Que con más datos por hora se arregla solo"], correcta: 2, explicacion: "Con un mismo método, ARL0 y ARL1 se mueven juntos con el umbral. Subirlo tienta porque baja el ruido, pero aumenta la demora; métodos como CUSUM mejoran el ARL1 a igual ARL0." },
    { q: "¿Qué mide el ARL0?", opciones: ["La cantidad promedio de datos hasta una falsa alarma cuando no hubo ningún cambio","La demora en detectar un cambio real","La cantidad de cambios por día","El tamaño mínimo de cambio que se detecta"], correcta: 0, explicacion: "ARL0 es el largo de corrida en control: lo querés grande. Confundirlo con la demora tienta, pero esa es el ARL1, medido con un cambio presente." },
    { q: "La regla |z| > 3 tiene ARL0 de 370. ¿Qué ARL1 tiene para un cambio de 1 desvío, según el cálculo de la lección?", opciones: ["Unos 2 datos","Unos 370 datos","Detecta enseguida, en 1 dato","Unos 44 datos"], correcta: 3, explicacion: "Para un cambio de 1 desvío la probabilidad de superar 3 por dato es baja, y el ARL1 es 43,9. Pensar que detecta enseguida tienta porque el cambio es real, pero la regla de Shewhart es lenta para cambios chicos." },
    { q: "Si la regla de 3 desvíos detecta un cambio de 3 desvíos en unos 2 datos y uno de 1 desvío en unos 44, ¿qué concluís?", opciones: ["Que es igual de buena para cualquier cambio","Que es buena para cambios grandes y lenta para cambios chicos","Que los cambios chicos no importan","Que conviene bajar el umbral a 1"], correcta: 1, explicacion: "La regla mira un solo dato por vez y no acumula evidencia. Bajar el umbral a 1 tienta para detectar más, pero dispara el ARL0 a alarmas casi continuas." },
    { q: "Si vigilás 200 series con la regla de 3 desvíos, evaluadas cada hora, ¿cuántas falsas alarmas por día esperás, aproximadamente?", opciones: ["Menos de 1","Unas 370","Unas 13","Ninguna, porque el ARL0 es alto"], correcta: 2, explicacion: "200 × 24 evaluaciones por la probabilidad 0,0027 dan unas 13. Pensar que no habrá ninguna tienta porque 370 parece alto, pero las falsas alarmas se suman entre series." },
    { q: "¿Por qué en un problema de monitoreo la prueba de hipótesis no es como una prueba clásica?", opciones: ["Porque el momento del cambio es desconocido y la prueba se repite con cada dato nuevo","Porque no hay hipótesis nula","Porque se usa una muestra fija","Porque siempre hay un cambio"], correcta: 0, explicacion: "El análisis secuencial decide mientras llegan los datos y el cambio puede pasar en cualquier momento. Una muestra fija tienta por costumbre, pero es justo lo que el monitoreo no tiene." },
    { q: "Calculaste un ARL0 de 370 con la fórmula, pero tu serie tiene autocorrelación positiva. ¿Qué esperás en la práctica?", opciones: ["Exactamente 370","Menos falsas alarmas","Que la autocorrelación no afecte nada","Más falsas alarmas de las que dice la fórmula"], correcta: 3, explicacion: "Las fórmulas suponen datos independientes. Que dé exactamente 370 tienta por la precisión del cálculo, pero con autocorrelación el ARL0 real cae mucho." },
    { q: "Querés saber el ARL0 real de un detector sobre tus métricas. ¿Qué hacés?", opciones: ["Lo calculás con la fórmula de la normal","Lo corrés sobre semanas históricas sin incidentes y contás las alarmas","Lo preguntás al equipo de guardia","Lo suponés igual a 370"], correcta: 1, explicacion: "El ARL0 empírico refleja la estacionalidad y la autocorrelación reales. La fórmula tienta por limpia, pero supone condiciones que tus datos no cumplen." },
    { q: "Tenés que comparar dos detectores. ¿Qué comparación es justa?", opciones: ["Cuál alarma más seguido","Sus ARL0 sin mirar el ARL1","Sus ARL1 para el cambio que te importa, con los dos calibrados al mismo ARL0","Cuál tiene la fórmula más simple"], correcta: 2, explicacion: "Si no igualás el ARL0, un detector parece más rápido solo porque es más ruidoso. Comparar cuál alarma más tienta, pero premia al que da más falsas alarmas." },
    { q: "Si con datos por hora tu detector tiene ARL1 de 44 para el cambio que te preocupa, ¿cómo lo comunicás?", opciones: ["Que en promedio tarda casi dos días en avisar ese cambio","Que avisa en 44 minutos","Que avisa al instante","Que da 44 falsas alarmas"], correcta: 0, explicacion: "44 datos horarios son unas 44 horas. Pensar en minutos tienta si confundís la unidad, pero el ARL se mide en datos, no en tiempo." },
    { q: "En la regla |z| > 3 con datos independientes, ¿qué distribución tiene la cantidad de datos hasta la alarma?", opciones: ["Normal","Uniforme","Poisson con media 3","Geométrica, porque la probabilidad de alarma es la misma en cada dato"], correcta: 3, explicacion: "Con probabilidad constante p por dato, la corrida es geométrica y su media es 1/p. La normal tienta porque los datos son normales, pero lo que se cuenta es otra cosa." },
    { q: "¿Cuál de estas palancas reduce las falsas alarmas por patrones que ya conocés, como más tráfico a la tarde?", opciones: ["Bajar el umbral","Modelar la estacionalidad y vigilar los residuos","Agregar más series","Evaluar con más frecuencia"], correcta: 1, explicacion: "Si el detector sabe que la tarde tiene más tráfico, no alarma por eso. Evaluar más seguido tienta para reaccionar antes, pero multiplica las falsas alarmas." },
  ],
},
{
  id: "shewhart",
  icono: "📏",
  titulo: "Shewhart para datos individuales y reglas de corridas",
  nivel: "Avanzado",
  objetivos: [
    "Calcular límites de control para datos individuales con el rango móvil, sin que un cambio infle el desvío",
    "Implementar las reglas de Western Electric y explicar qué ganan y qué cuestan en ARL0",
    "Separar la fase I (estimar la línea base) de la fase II (vigilar) y saber por qué importa",
  ],
  lecciones: [
    { titulo: "Límites con el rango móvil", html: `
      <p class="idea">En observabilidad casi siempre tenés un dato por período (una métrica por hora o por día), no subgrupos. El gráfico de Shewhart para <strong>datos individuales</strong> estima el desvío con el <strong>rango móvil</strong>, la diferencia absoluta entre datos consecutivos, porque es robusto a cambios de nivel.</p>
      <p>La fórmula, del NIST/SEMATECH e-Handbook: el desvío se estima como el promedio de los rangos móviles dividido 1,128 (la constante d2 para pares de datos), y los límites son la media más y menos 3 de esos desvíos.</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(11)
x = rng.normal(50, 2, 60)
x[30:] += 4                       # a mitad de la serie, el nivel sube 2 desvíos

mr = np.abs(np.diff(x))
sigma_mr = mr.mean() / 1.128
sigma_std = x.std(ddof=1)
print(f"desvío real: 2.00 | por rango móvil: {sigma_mr:.2f} | desvío común: {sigma_std:.2f}")</code></pre>
      <pre><code>Salida:
desvío real: 2.00 | por rango móvil: 1.85 | desvío común: 2.83</code></pre>
      <p>Cómo se lee: el desvío común mezcla la variación aleatoria con el salto de nivel y da un valor inflado. Con límites anchos, el propio cambio que querés detectar queda adentro. El rango móvil solo mira datos vecinos, así que un salto lo afecta en un único par.</p>
      <table>
        <tr><th>Estimador del desvío</th><th>Sensible a un cambio de nivel</th><th>Uso</th></tr>
        <tr><td>Desvío común de toda la serie</td><td>Mucho</td><td>Solo si sabés que la serie es estable</td></tr>
        <tr><td>Rango móvil / 1,128</td><td>Poco</td><td>Gráfico de individuos (el estándar)</td></tr>
        <tr><td>Mediana de rangos móviles / 0,954</td><td>Muy poco, y robusto a valores extremos</td><td>Series con picos raros</td></tr>
      </table>
      <p>Por ejemplo, si tus métricas tienen picos aislados (un reproceso que duplica un lote), la versión con la mediana evita que un solo pico ensanche los límites. Las constantes 1,128 y 0,954 vienen de la distribución normal; con datos muy asimétricos conviene transformar antes (por ejemplo, logaritmo de una latencia).</p>
    ` },
    { titulo: "Las reglas de corridas de Western Electric", html: `
      <p class="idea">Un punto fuera de 3 desvíos detecta cambios grandes. Para cambios chicos y sostenidos, las <strong>reglas de corridas</strong> de Western Electric miran patrones: varios puntos seguidos del mismo lado, o varios cerca de los límites.</p>
      <table>
        <tr><th>Regla</th><th>Alarma si...</th></tr>
        <tr><td>1</td><td>1 punto fuera de ±3σ</td></tr>
        <tr><td>2</td><td>2 de 3 puntos seguidos más allá de 2σ, del mismo lado</td></tr>
        <tr><td>3</td><td>4 de 5 puntos seguidos más allá de 1σ, del mismo lado</td></tr>
        <tr><td>4</td><td>8 puntos seguidos del mismo lado de la media</td></tr>
      </table>
      <pre><code>import numpy as np

def reglas(z):
    """Devuelve la primera alarma de cada regla de Western Electric sobre datos estandarizados."""
    primera = {}
    for t in range(len(z)):
        v = z[max(0, t - 7): t + 1]
        for lado in (1, -1):
            s = lado * v
            checks = {
                1: s[-1] &gt; 3,
                2: len(s) &gt;= 3 and (s[-3:] &gt; 2).sum() &gt;= 2,
                3: len(s) &gt;= 5 and (s[-5:] &gt; 1).sum() &gt;= 4,
                4: len(s) &gt;= 8 and (s[-8:] &gt; 0).all(),
            }
            for r, ok in checks.items():
                if ok and r not in primera:
                    primera[r] = t
    return dict(sorted(primera.items()))

rng = np.random.default_rng(3)
z = rng.normal(0, 1, 80)
z[40:] += 1.0                    # cambio chico: 1 desvío desde el dato 40
print("primera alarma por regla:", reglas(z))</code></pre>
      <pre><code>Salida:
primera alarma por regla: {1: 9, 3: 48, 4: 51}</code></pre>
      <p>Cómo se lee: la regla 1 dio una falsa alarma en el dato 9, antes del cambio, y no volvió a avisar después. Las reglas 3 y 4, que miran corridas, detectaron el cambio en los datos 48 y 51, entre 8 y 11 datos después. La regla 2 no se activó. Así se ven las dos caras: las corridas detectan cambios chicos que la regla 1 no ve, y cualquier regla puede alarmar por azar.</p>
      <p><strong>El costo:</strong> según el trabajo clásico de Champ y Woodall (1987), usar las cuatro reglas juntas baja el ARL0 de unos 370 a unos 92. Ganás sensibilidad para cambios chicos, pagando unas cuatro veces más falsas alarmas. Por eso, para cambios chicos y sostenidos, CUSUM y EWMA suelen ser mejores: consiguen esa sensibilidad sin perder tanto ARL0.</p>
      <p>Por ejemplo, la regla 4 (8 seguidos del mismo lado) es útil para leer un gráfico a mano, pero en un sistema automático con cientos de series conviene un detector con ARL0 calibrado.</p>
    ` },
    { titulo: "Fase I y fase II", html: `
      <p class="idea">Antes de vigilar hay que saber qué es "normal". La <strong>fase I</strong> estima la línea base (media y desvío) con datos históricos limpios; la <strong>fase II</strong> vigila los datos nuevos con esos parámetros fijos. Mezclarlas es una de las fuentes más comunes de detectores que no detectan.</p>
      <table>
        <tr><th></th><th>Fase I</th><th>Fase II</th></tr>
        <tr><td>Objetivo</td><td>Estimar la línea base y limpiar el historial</td><td>Detectar cambios en datos nuevos</td></tr>
        <tr><td>Datos</td><td>Historial, sin incidentes conocidos</td><td>Lo que llega</td></tr>
        <tr><td>Parámetros</td><td>Se estiman (y se reestiman al sacar puntos raros)</td><td>Quedan fijos hasta una recalibración decidida</td></tr>
      </table>
      <p><strong>El error típico:</strong> recalcular la media y el desvío con una ventana móvil que incluye los datos más recientes. Si el proceso cambió, la línea base "persigue" al cambio y el detector nunca alarma.</p>
      <p><strong>Cuántos datos hacen falta.</strong> Con pocos datos de fase I, los límites estimados tienen error, y eso cambia el ARL0 real de una corrida a otra. Simulemos cuánto varía el desvío estimado según la cantidad de datos de fase I:</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(5)
for n in [20, 50, 200]:
    sigmas = []
    for _ in range(2000):
        x = rng.normal(0, 1, n)
        sigmas.append(np.abs(np.diff(x)).mean() / 1.128)
    s = np.array(sigmas)
    print(f"n={n:&gt;3}: el desvío estimado va de {np.percentile(s, 5):.2f} a {np.percentile(s, 95):.2f} (90% de las veces)")</code></pre>
      <pre><code>Salida:
n= 20: el desvío estimado va de 0.68 a 1.36 (90% de las veces)
n= 50: el desvío estimado va de 0.80 a 1.21 (90% de las veces)
n=200: el desvío estimado va de 0.89 a 1.10 (90% de las veces)</code></pre>
      <p>Con 20 datos, el desvío estimado puede quedar bastante lejos del real, y con él el umbral de 3 desvíos. Un desvío subestimado da muchas más falsas alarmas; uno sobreestimado, un detector ciego. Con 200 datos el rango se achica mucho.</p>
      <p>Por ejemplo, si tu métrica es diaria, 20 datos son casi tres semanas y 200 son más de seis meses. Para métricas diarias nuevas conviene empezar con umbrales más conservadores y recalibrar cuando haya más historia.</p>
    ` },
  ],
  practica: [
    "Repetí el primer código con un salto de 1 desvío (x[30:] += 2) y anotá cuánto se infla el desvío común comparado con el del rango móvil.",
    "Corré la función reglas sobre 80 datos sin cambio (sacá la línea del cambio) con 10 semillas distintas. Anotá cuántas corridas tienen alguna alarma antes del dato 80 y qué regla aparece más.",
    "Elegí una métrica real y estimá su desvío con el rango móvil usando 20 días y usando 200 días. Anotá los dos valores y cuántas alarmas da la regla 1 en el último mes con cada uno.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: gráficos de control (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc32.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
  ],
  quiz: [
    { q: "Tu serie tuvo un salto de nivel y calculaste los límites con el desvío común de toda la serie. ¿Qué pasa?", opciones: ["Los límites quedan más angostos","No cambia nada","El desvío queda inflado por el salto y los límites son tan anchos que el cambio queda adentro","Detecta el salto más rápido"], correcta: 2, explicacion: "El desvío común mezcla ruido y cambio de nivel. Pensar que no cambia nada tienta porque la fórmula es la de siempre, pero justo el cambio infla el desvío." },
    { q: "¿Por qué el rango móvil es mejor para estimar el desvío en un gráfico de individuos?", opciones: ["Porque solo compara datos vecinos, y un salto de nivel afecta un único par","Porque usa más datos","Porque no necesita la normal","Porque da siempre un valor más chico"], correcta: 0, explicacion: "Un salto contamina una sola diferencia consecutiva. Que da siempre un valor más chico tienta, pero no es la razón: es robusto, no sesgado hacia abajo." },
    { q: "Tu métrica tiene picos aislados por reprocesos que ensanchan los límites. ¿Qué estimador del desvío usás?", opciones: ["El desvío común","El máximo de los rangos móviles","El promedio de los datos","La mediana de los rangos móviles dividida 0,954"], correcta: 3, explicacion: "La mediana ignora unos pocos rangos enormes. El desvío común tienta por familiar, pero es el más sensible a los picos." },
    { q: "Querés detectar cambios chicos y sostenidos leyendo un gráfico a mano. ¿Qué regla te ayuda?", opciones: ["Solo la de un punto fuera de 3σ","La de 8 puntos seguidos del mismo lado de la media","Ninguna, a mano no se puede","Mirar solo el último punto"], correcta: 1, explicacion: "Las reglas de corridas detectan desplazamientos chicos. Usar solo la de 3σ tienta por simple, pero es lenta para cambios de 1 desvío." },
    { q: "Si activás las cuatro reglas de Western Electric juntas, ¿qué le pasa al ARL0?", opciones: ["Sube a unos 1.500","No cambia","Baja de unos 370 a unos 92: unas cuatro veces más falsas alarmas","Baja a 1"], correcta: 2, explicacion: "Cada regla agrega su probabilidad de falsa alarma (Champ y Woodall, 1987). Que no cambia tienta porque cada regla parece rara, pero se suman." },
    { q: "Tenés 300 series en un sistema automático y querés sensibilidad a cambios chicos. ¿Qué conviene más que las cuatro reglas de Western Electric?", opciones: ["Un detector como CUSUM o EWMA calibrado a un ARL0","Agregar una quinta regla","Bajar el umbral de la regla 1 a 2σ","Mirar los gráficos a mano"], correcta: 0, explicacion: "CUSUM y EWMA ganan sensibilidad sin perder tanto ARL0. Bajar el umbral tienta por simple, pero dispara las falsas alarmas en 300 series." },
    { q: "¿Qué se hace en la fase I?", opciones: ["Vigilar los datos nuevos","Mandar alertas","Recalcular los límites con cada dato nuevo","Estimar la línea base con historial limpio y sacar los puntos raros"], correcta: 3, explicacion: "La fase I fija qué es normal. Recalcular con cada dato tienta para estar al día, pero es justo lo que rompe la fase II." },
    { q: "Tu detector recalcula media y desvío con los últimos 7 días, incluyendo hoy, y nunca alarmó en un cambio real. ¿Qué pasó?", opciones: ["El cambio era muy grande","La línea base persiguió al cambio y lo absorbió","Faltaban reglas de corridas","El umbral era muy bajo"], correcta: 1, explicacion: "Si la línea base incluye los datos del cambio, se mueve con él. Pensar que faltaban reglas tienta, pero cualquier regla compara contra una base que ya se movió." },
    { q: "Tenés solo 20 días de historia para una métrica diaria nueva. ¿Qué hacés con los umbrales?", opciones: ["Usás 3σ como si el desvío fuera exacto","Esperás 6 meses sin vigilar","Empezás con umbrales más conservadores y recalibrás cuando haya más historia","Bajás el umbral para no perderte nada"], correcta: 2, explicacion: "Con 20 datos el desvío estimado tiene mucho error. Usarlo como exacto tienta, pero un desvío subestimado llena todo de falsas alarmas." },
    { q: "Si el desvío estimado en fase I quedó más chico que el real, ¿qué esperás en fase II?", opciones: ["Más falsas alarmas que las calculadas","Menos falsas alarmas","Ningún efecto","Que no detecte cambios grandes"], correcta: 0, explicacion: "Límites más angostos que los reales se cruzan seguido por puro ruido. Que no tenga efecto tienta, pero el ARL0 depende mucho del desvío." },
    { q: "Tus latencias son muy asimétricas, con una cola larga. ¿Qué hacés antes de aplicar las constantes 1,128 o 0,954?", opciones: ["Nada, las constantes sirven igual","Sacás los valores altos","Multiplicás por 1,128","Transformás los datos, por ejemplo con logaritmo"], correcta: 3, explicacion: "Las constantes vienen de la normal. Sacar los valores altos tienta para que se vea normal, pero esconde justo lo que podría ser un problema." },
    { q: "En la simulación de reglas, una corrida dio alarma de la regla 3 antes del cambio. ¿Qué concluís?", opciones: ["Que el cambio empezó antes","Que es una falsa alarma: cada regla agrega su propia probabilidad de alarmar sin cambio","Que el código tiene un error","Que la regla 3 nunca falla"], correcta: 1, explicacion: "Las reglas de corridas también disparan por azar. Pensar que el cambio empezó antes tienta, pero en la simulación sabés exactamente cuándo empieza." },
  ],
},
{
  id: "cusum",
  icono: "➕",
  titulo: "CUSUM: acumular evidencia",
  nivel: "Avanzado",
  objetivos: [
    "Implementar el CUSUM tabular de dos lados con sus parámetros k y h",
    "Elegir k y h para un cambio objetivo y un ARL0 deseado, y estimar su ARL con la aproximación de Siegmund",
    "Estimar cuándo empezó el cambio con el CUSUM y usar el arranque rápido (FIR) después de una alarma",
  ],
  lecciones: [
    { titulo: "El CUSUM tabular", html: `
      <p class="idea">El <strong>CUSUM</strong> (suma acumulada) suma, dato a dato, cuánto se aleja cada valor de la media objetivo, descontando una tolerancia k. Si la suma pasa un umbral h, alarma. Como acumula, un cambio chico, pero sostenido termina sumando lo suficiente.</p>
      <p>Las fórmulas del NIST/SEMATECH e-Handbook, con datos estandarizados (media 0, desvío 1 en control):</p>
      <pre><code>S_alto(t) = max(0, S_alto(t-1) + x(t) - k)     detecta subidas
S_bajo(t) = max(0, S_bajo(t-1) - x(t) - k)     detecta bajadas
alarma si S_alto(t) &gt; h  o  S_bajo(t) &gt; h,   con S_alto(0) = S_bajo(0) = 0</code></pre>
      <p>El max(0, ...) es la clave: cuando los datos están en control, la suma vuelve a cero y "olvida" el pasado. Cuando hay un cambio, crece de forma sostenida.</p>
      <pre><code>import numpy as np

def cusum(x, k=0.5, h=5.0):
    alto = bajo = 0.0
    for t, v in enumerate(x):
        alto = max(0.0, alto + v - k)
        bajo = max(0.0, bajo - v - k)
        if alto &gt; h or bajo &gt; h:
            return t
    return None

rng = np.random.default_rng(21)
demoras_cusum, demoras_shewhart = [], []
for _ in range(300):
    x = rng.normal(0, 1, 400)
    x[100:] += 1.0                         # cambio de 1 desvío desde el dato 100
    t = cusum(x[100:])
    demoras_cusum.append(t if t is not None else 300)
    s = np.flatnonzero(np.abs(x[100:]) &gt; 3)
    demoras_shewhart.append(s[0] if len(s) else 300)
print(f"demora promedio CUSUM (k=0.5, h=5): {np.mean(demoras_cusum):.1f} datos")
print(f"demora promedio Shewhart (|z| &gt; 3):  {np.mean(demoras_shewhart):.1f} datos")</code></pre>
      <pre><code>Salida:
demora promedio CUSUM (k=0.5, h=5): 9.4 datos
demora promedio Shewhart (|z| &gt; 3):  41.7 datos</code></pre>
      <p>Ante un cambio de 1 desvío, el CUSUM detecta en unos 10 datos lo que la regla de 3 desvíos tarda unos 40 en ver. Y no es a costa de más ruido: como vas a ver en la próxima lección, con k = 0,5 y h = 5 su ARL0 es incluso mayor que el de Shewhart.</p>
      <p>Por ejemplo, este código mide la demora desde el cambio. Las corridas que alarmaron en los primeros datos de x[100:] cuentan como detecciones rápidas; con datos reales, una alarma justo después del cambio también puede ser una falsa alarma que coincidió.</p>
    ` },
    { titulo: "Elegir k y h", html: `
      <p class="idea">k decide <strong>qué tamaño de cambio</strong> buscás detectar mejor, y h decide <strong>cuántas falsas alarmas</strong> tolerás. La regla práctica del NIST: k igual a la mitad del cambio que querés detectar (en desvíos) y h alrededor de 4 o 5.</p>
      <p>Para elegir con números se usa la <strong>aproximación de Siegmund</strong> al ARL de un CUSUM de un lado, con Δ = δ − k (δ es el cambio real) y b = h + 1,166:</p>
      <pre><code>ARL ≈ (exp(-2Δb) + 2Δb - 1) / (2Δ²)     si Δ ≠ 0
ARL ≈ b²                                si Δ = 0
dos lados:  1/ARL = 1/ARL_alto + 1/ARL_bajo</code></pre>
      <pre><code>from math import exp

def arl_un_lado(delta, k, h):
    D, b = delta - k, h + 1.166
    return b * b if abs(D) &lt; 1e-12 else (exp(-2 * D * b) + 2 * D * b - 1) / (2 * D * D)

def arl_dos_lados(delta, k, h):
    return 1 / (1 / arl_un_lado(delta, k, h) + 1 / arl_un_lado(-delta, k, h))

print("  h   ARL0   ARL1(δ=0.5)  ARL1(δ=1)  ARL1(δ=2)")
for h in [4, 5]:
    fila = [arl_dos_lados(d, 0.5, h) for d in [0, 0.5, 1, 2]]
    print(f"  {h}  {fila[0]:6.0f}  {fila[1]:10.1f}  {fila[2]:9.1f}  {fila[3]:9.1f}")</code></pre>
      <pre><code>Salida:
  h   ARL0   ARL1(δ=0.5)  ARL1(δ=1)  ARL1(δ=2)
  4     169        26.6        8.3        3.2
  5     469        38.0       10.3        3.9</code></pre>
      <p>Con k = 0,5 y h = 5, el ARL0 es de unos 470 y el ARL1 para un cambio de 1 desvío es de unos 10. Compará con Shewhart: ARL0 de 370 y ARL1 de 44. El CUSUM es mejor en las dos medidas para cambios chicos y medianos.</p>
      <table>
        <tr><th>Querés...</th><th>Ajustás</th></tr>
        <tr><td>Detectar mejor cambios más chicos</td><td>k más chico (por ejemplo 0,25 para cambios de 0,5 desvíos)</td></tr>
        <tr><td>Menos falsas alarmas</td><td>h más alto</td></tr>
        <tr><td>Detectar rápido cambios grandes</td><td>Combinar el CUSUM con un límite de Shewhart (por ejemplo, 4σ)</td></tr>
      </table>
      <p>Por ejemplo, la aproximación es buena para datos normales e independientes. Para calibrar en serio, validá con simulación sobre tus residuos o con el ARL0 empírico sobre historia limpia, como en el módulo 0.</p>
    ` },
    { titulo: "Cuándo empezó el cambio y qué hacer después de la alarma", html: `
      <p class="idea">El CUSUM no solo avisa: también estima cuándo empezó el cambio. El último momento en que la suma valía cero antes de la alarma es una estimación del inicio, y eso ayuda mucho a investigar la causa.</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(8)
x = rng.normal(0, 1, 200)
x[120:] += 0.8                       # el cambio real empieza en el dato 120

k, h, alto, ultimo_cero = 0.5, 5.0, 0.0, 0
for t, v in enumerate(x):
    alto = max(0.0, alto + v - k)
    if alto == 0:
        ultimo_cero = t
    if alto &gt; h:
        print(f"alarma en el dato {t}; el cambio habría empezado después del dato {ultimo_cero}")
        break</code></pre>
      <pre><code>Salida:
alarma en el dato 128; el cambio habría empezado después del dato 116</code></pre>
      <p>La estimación no es exacta (el ruido hace que la suma toque cero cerca del cambio), pero suele quedar cerca. En un incidente, saber que el problema empezó alrededor de cierta hora te dice qué despliegues o cambios de datos revisar.</p>
      <p><strong>Después de una alarma:</strong></p>
      <ul>
        <li><strong>Reiniciar a cero</strong> después de investigar y corregir es lo habitual.</li>
        <li><strong>Arranque rápido</strong> (en inglés, <em>fast initial response</em> o FIR): reiniciar la suma en h/2 en vez de 0. Si el problema no se corrigió del todo, la nueva alarma llega mucho antes; si se corrigió, la suma baja sola a cero y casi no cambia el ARL0.</li>
        <li><strong>Si el cambio es permanente y aceptado</strong> (por ejemplo, un producto nuevo duplica el tráfico), no se reinicia: se vuelve a la fase I y se estima una línea base nueva.</li>
      </ul>
      <table>
        <tr><th>Situación</th><th>Qué hacés con el CUSUM</th></tr>
        <tr><td>Se corrigió la causa</td><td>Reiniciás en 0, o en h/2 con FIR</td></tr>
        <tr><td>No sabés si se corrigió</td><td>Reiniciás en h/2 (FIR)</td></tr>
        <tr><td>El nivel nuevo es el normal de ahora</td><td>Nueva fase I y nueva línea base</td></tr>
      </table>
      <p>Por ejemplo, el CUSUM también se escribe sobre la media de lotes (promedio por hora de muchos eventos): en ese caso estandarizás con el desvío de la media del lote, no con el de un evento suelto.</p>
    ` },
  ],
  practica: [
    "Cambiá en el primer código el tamaño del cambio a 0,5 y a 2 desvíos. Anotá la demora promedio del CUSUM y de Shewhart en cada caso y en cuál de los dos el CUSUM gana por más.",
    "Usá arl_dos_lados para encontrar el h que da ARL0 de 1000 con k = 0,5. Anotá ese h y el ARL1 para un cambio de 1 desvío.",
    "Corré el último código con 10 semillas distintas y anotá cuántas veces el inicio estimado quedó a menos de 10 datos del real (120).",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: gráficos de control CUSUM (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc323.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
  ],
  quiz: [
    { q: "En el CUSUM tabular, ¿para qué sirve el max(0, ...)?", opciones: ["Para que la suma nunca baje","Para redondear los datos","Para que la suma vuelva a cero y olvide el pasado mientras los datos están en control","Para detectar solo bajadas"], correcta: 2, explicacion: "Sin el max(0, ...) la suma arrastraría ruido viejo. Pensar que es para que nunca baje tienta por el nombre \"acumulada\", pero justamente la deja bajar hasta cero." },
    { q: "Querés detectar un cambio de 1 desvío lo antes posible con pocas falsas alarmas. ¿Qué detector preferís?", opciones: ["CUSUM con k = 0,5 y h alrededor de 5","Shewhart con |z| > 3","Shewhart con |z| > 2","Mirar el promedio del mes"], correcta: 0, explicacion: "El CUSUM detecta ese cambio en unos 10 datos con ARL0 cercano a 470. Bajar Shewhart a 2σ tienta para ganar velocidad, pero dispara las falsas alarmas." },
    { q: "Querés detectar mejor cambios de 0,5 desvíos. ¿Cómo elegís k?", opciones: ["k = 1","k = 0,5 siempre","k = 5","k = 0,25, la mitad del cambio que buscás"], correcta: 3, explicacion: "La regla práctica es k igual a la mitad del cambio objetivo. k = 0,5 siempre tienta porque es el valor de los ejemplos, pero está pensado para cambios de 1 desvío." },
    { q: "Tu CUSUM da demasiadas falsas alarmas. ¿Qué parámetro subís?", opciones: ["k, para que acumule más","h, el umbral de decisión","Ninguno, se arregla solo","La cantidad de datos por hora"], correcta: 1, explicacion: "h fija cuántas falsas alarmas tolerás. Subir k tienta, pero cambia qué tamaño de cambio buscás, no solo el ruido." },
    { q: "Con la aproximación de Siegmund, ¿qué ARL0 tiene un CUSUM de dos lados con k = 0,5 y h = 5?", opciones: ["Unos 10","Unos 44","Unos 470","Infinito"], correcta: 2, explicacion: "Para Δ = 0, cada lado da b² con b = 6,166, y combinados dan unos 470. 10 tienta porque es otro número de la tabla, pero es el ARL1 para un cambio de 1 desvío." },
    { q: "Comparado con Shewhart (ARL0 370, ARL1 44 para 1 desvío), ¿cómo queda el CUSUM con k = 0,5 y h = 5?", opciones: ["Mejor en las dos: más ARL0 y mucho menos ARL1","Peor en las dos","Más rápido, pero con más falsas alarmas","Igual"], correcta: 0, explicacion: "Acumular evidencia mejora la demora sin pagar en ruido para cambios chicos y medianos. Pensar que es más rápido, pero más ruidoso tienta por el patrón habitual, pero acá el método es mejor, no solo más agresivo." },
    { q: "El CUSUM alarmó y querés saber cuándo empezó el problema. ¿Qué mirás?", opciones: ["El dato de la alarma","El primer dato de la serie","El dato con el valor más alto","El último dato en que la suma valía cero antes de la alarma"], correcta: 3, explicacion: "El último cero estima el inicio del cambio. El dato de la alarma tienta porque es cuando te enteraste, pero el cambio empezó antes." },
    { q: "Si corregiste una causa, pero no estás seguro de que se haya resuelto del todo, ¿cómo reiniciás el CUSUM?", opciones: ["En h","En h/2, con el arranque rápido (FIR)","En 0 siempre","No lo reiniciás"], correcta: 1, explicacion: "Con FIR, si el problema sigue, la alarma llega antes. Reiniciar en h tienta para reaccionar más rápido, pero alarmaría con el primer dato apenas alto." },
    { q: "Lanzaron un producto nuevo y el tráfico se duplicó para siempre. El CUSUM alarma. ¿Qué hacés?", opciones: ["Reiniciás en 0 todos los días","Subís h hasta que no alarme","Volvés a la fase I y estimás una línea base nueva","Apagás el detector"], correcta: 2, explicacion: "Un cambio aceptado redefine qué es normal. Subir h tienta para que no moleste, pero deja al detector ciego para cambios reales futuros." },
    { q: "Si aplicás el CUSUM sobre el promedio por hora de miles de eventos, ¿con qué desvío estandarizás?", opciones: ["Con el desvío de la media por hora, no con el de un evento suelto","Con el desvío de un evento suelto","Con 1, siempre","No hace falta estandarizar"], correcta: 0, explicacion: "La media de muchos eventos varía mucho menos que un evento. Usar el desvío de un evento tienta porque es el que conocés, pero achica todo y el detector no ve nada." },
    { q: "La aproximación de Siegmund te dio un ARL0 de 470. Tus residuos son autocorrelacionados. ¿Qué hacés?", opciones: ["Confiás en 470","Duplicás h por las dudas","Cambiás a Shewhart","Validás el ARL0 con simulación o con historia limpia"], correcta: 3, explicacion: "La aproximación supone independencia. Duplicar h tienta como margen de seguridad, pero sin medir no sabés si te quedaste corto o largo." },
    { q: "Querés que el CUSUM también detecte enseguida un cambio enorme. ¿Qué le agregás?", opciones: ["Bajás h a 1","Un límite de Shewhart, por ejemplo un punto fuera de 4σ","Subís k a 3","Nada, el CUSUM ya es el más rápido para todo"], correcta: 1, explicacion: "El combinado detecta rápido cambios grandes sin perder lo del CUSUM. Pensar que el CUSUM es el más rápido para todo tienta, pero para saltos grandes Shewhart avisa en uno o dos datos." },
  ],
},
{
  id: "ewma",
  icono: "〰️",
  titulo: "EWMA: un promedio que pesa más lo reciente",
  nivel: "Avanzado",
  objetivos: [
    "Implementar el gráfico EWMA con sus límites que varían en el tiempo",
    "Elegir λ según el tamaño de cambio que buscás y calibrar L por simulación para un ARL0 objetivo",
    "Comparar EWMA y CUSUM a igual ARL0 y decidir cuál usar en cada caso",
  ],
  lecciones: [
    { titulo: "El estadístico EWMA", html: `
      <p class="idea">El <strong>EWMA</strong> (promedio móvil ponderado exponencialmente) mezcla el dato nuevo con el promedio anterior: z(t) = λ·x(t) + (1 − λ)·z(t−1). Con λ chico recuerda mucho y detecta cambios chicos; con λ = 1 se vuelve Shewhart.</p>
      <p>Según el NIST/SEMATECH e-Handbook, los valores típicos de λ van de 0,2 a 0,3, y los límites son la media más y menos L veces el desvío del EWMA, que crece hasta estabilizarse:</p>
      <pre><code>z(0) = media de la línea base
z(t) = λ·x(t) + (1 - λ)·z(t-1)
desvío de z(t) = σ · raíz( λ/(2-λ) · (1 - (1-λ)^(2t)) )
alarma si |z(t) - media| &gt; L · desvío de z(t)</code></pre>
      <p>El factor (1 − (1−λ)^(2t)) hace que los límites empiecen angostos y se abran hasta su valor final: así el EWMA puede detectar un problema desde el primer dato.</p>
      <pre><code>import numpy as np

def ewma_alarma(x, lam=0.2, L=2.95, mu=0.0, sigma=1.0):
    z = mu
    for t, v in enumerate(x, start=1):
        z = lam * v + (1 - lam) * z
        sd = sigma * np.sqrt(lam / (2 - lam) * (1 - (1 - lam) ** (2 * t)))
        if abs(z - mu) &gt; L * sd:
            return t - 1
    return None

rng = np.random.default_rng(31)
x = rng.normal(0, 1, 200)
x[100:] += 0.75                    # cambio chico desde el dato 100
print("EWMA (λ=0.2) alarma en el dato:", ewma_alarma(x))
print("Shewhart alarma en los datos:", np.flatnonzero(np.abs(x) &gt; 3).tolist())</code></pre>
      <pre><code>Salida:
EWMA (λ=0.2) alarma en el dato: 116
Shewhart alarma en los datos: [127]</code></pre>
      <p>Cómo se lee: el EWMA alarma en el dato 116, 16 datos después del cambio. La regla de 3 desvíos recién avisa en el 127: un desplazamiento de 0,75 desvíos casi nunca lleva un dato suelto más allá de 3.</p>
      <p>Por ejemplo, el EWMA también sirve como valor suavizado para un tablero: la misma cuenta que detecta es una línea que se ve más tranquila que los datos crudos.</p>
    ` },
    { titulo: "Calibrar λ y L por simulación", html: `
      <p class="idea">Los valores de L que dan un ARL0 dado están tabulados (Lucas y Saccucci, 1990), pero esas tablas suponen límites fijos en su valor final. Con los límites que varían en el tiempo de la lección anterior, el EWMA alarma más al principio y el ARL0 baja. La forma más general de calibrar es simular: correr miles de series sin cambio y medir el ARL0 de cada combinación de λ y L.</p>
      <p>Simular muchas series a la vez con numpy es rápido: en vez de un bucle por serie, se avanza en el tiempo con todas juntas.</p>
      <pre><code>import numpy as np

def arl_ewma(lam, L, delta, corridas=1000, tmax=3000, semilla=1):
    rng = np.random.default_rng(semilla)
    z = np.zeros(corridas)
    alarma = np.full(corridas, tmax)
    vivas = np.ones(corridas, bool)
    for t in range(1, tmax + 1):
        z = lam * rng.normal(delta, 1, corridas) + (1 - lam) * z
        sd = np.sqrt(lam / (2 - lam) * (1 - (1 - lam) ** (2 * t)))
        nuevas = vivas &amp; (np.abs(z) &gt; L * sd)
        alarma[nuevas] = t
        vivas &amp;= ~nuevas
        if not vivas.any():
            break
    return alarma.mean()

for lam, L in [(0.1, 2.81), (0.2, 2.95), (0.4, 3.04)]:
    print(f"λ={lam}: ARL0 ≈ {arl_ewma(lam, L, 0):5.0f} | ARL1(δ=0.5) ≈ {arl_ewma(lam, L, 0.5):5.1f} | ARL1(δ=2) ≈ {arl_ewma(lam, L, 2):4.1f}")</code></pre>
      <pre><code>Salida:
λ=0.1: ARL0 ≈   469 | ARL1(δ=0.5) ≈  29.2 | ARL1(δ=2) ≈  2.6
λ=0.2: ARL0 ≈   466 | ARL1(δ=0.5) ≈  42.4 | ARL1(δ=2) ≈  2.9
λ=0.4: ARL0 ≈   464 | ARL1(δ=0.5) ≈  72.6 | ARL1(δ=2) ≈  3.2</code></pre>
      <p>Los valores de L de este código ya están calibrados por simulación para que las tres combinaciones tengan el mismo ARL0, cerca de 470 (con L = 2,86 y λ = 0,2, el valor de tabla para 500, la simulación da unos 370). Cómo se lee: a igual ARL0, λ = 0,1 detecta un cambio de 0,5 desvíos en unos 29 datos y λ = 0,4 tarda unos 73. Para un cambio de 2 desvíos, los tres avisan en 3 datos o menos.</p>
      <table>
        <tr><th>Cambio que te importa</th><th>λ</th></tr>
        <tr><td>Chico y lento (0,5 desvíos)</td><td>0,05 a 0,1</td></tr>
        <tr><td>Mediano (1 desvío)</td><td>0,2</td></tr>
        <tr><td>Grande (2 desvíos o más)</td><td>Cualquiera detecta en 2 o 3 datos; sumá un límite de Shewhart para avisar en el primero</td></tr>
      </table>
      <p>Por ejemplo, la simulación también sirve para tus datos reales: reemplazá rng.normal por remuestreo de tus residuos históricos y vas a obtener un ARL0 que refleja tu distribución, con colas pesadas incluidas.</p>
    ` },
    { titulo: "EWMA o CUSUM", html: `
      <p class="idea">A igual ARL0, EWMA y CUSUM bien calibrados tienen demoras muy parecidas. La elección suele depender de otras cosas: qué es más fácil de explicar, de mantener y de combinar con lo que ya tenés.</p>
      <pre><code>import numpy as np

def demora_media(detector, delta, corridas=1000, semilla=4):
    rng = np.random.default_rng(semilla)
    total = 0
    for _ in range(corridas):
        t = 0
        estado = detector(None)
        while True:
            estado, alarma = detector(estado, rng.normal(delta, 1))
            t += 1
            if alarma or t &gt;= 2000:
                break
        total += t
    return total / corridas

def cusum(estado, x=None, k=0.5, h=5.0):
    if estado is None:
        return (0.0, 0.0)
    a, b = estado
    a, b = max(0.0, a + x - k), max(0.0, b - x - k)
    return (a, b), (a &gt; h or b &gt; h)

def ewma(estado, x=None, lam=0.2, L=2.95):
    if estado is None:
        return (0.0, 0)
    z, t = estado
    z, t = lam * x + (1 - lam) * z, t + 1
    sd = np.sqrt(lam / (2 - lam) * (1 - (1 - lam) ** (2 * t)))
    return (z, t), abs(z) &gt; L * sd

for delta in [0.5, 1.0, 2.0]:
    print(f"δ={delta}: CUSUM {demora_media(cusum, delta):5.1f} | EWMA {demora_media(ewma, delta):5.1f}")</code></pre>
      <pre><code>Salida:
δ=0.5: CUSUM  37.8 | EWMA  40.3
δ=1.0: CUSUM  10.1 | EWMA   9.0
δ=2.0: CUSUM   4.0 | EWMA   2.8</code></pre>
      <p>Los dos detectores están calibrados con ARL0 de unos 470, y sus demoras quedan muy cerca para los tres tamaños de cambio. La diferencia práctica está en otro lado:</p>
      <table>
        <tr><th></th><th>CUSUM</th><th>EWMA</th></tr>
        <tr><td>Estima cuándo empezó el cambio</td><td>Sí (último cero)</td><td>No de forma directa</td></tr>
        <tr><td>Se explica con un gráfico</td><td>Una suma que crece</td><td>Una línea suavizada con bandas: muy intuitiva</td></tr>
        <tr><td>Base teórica para cambios de tamaño conocido</td><td>Óptimo (Moustakides, 1986)</td><td>Cercano al óptimo</td></tr>
        <tr><td>Robustez a datos no normales</td><td>Media</td><td>Buena con λ chico (promedia mucho)</td></tr>
      </table>
      <p>Por ejemplo, un esquema común en producción: EWMA con λ = 0,2 para el tablero y la vigilancia general, más un CUSUM dedicado en las 2 o 3 métricas donde un cambio chico es caro y conviene saber cuándo empezó.</p>
    ` },
  ],
  practica: [
    "Corré el primer código con el cambio en 0,25 y en 1,5 desvíos. Anotá en qué dato alarma el EWMA en cada caso y si Shewhart vio algo.",
    "Con arl_ewma, buscá el L que da ARL0 cercano a 370 con λ = 0,2 (probá entre 2,8 y 2,95). Anotá el L y el ARL1 para un cambio de 1 desvío.",
    "Agregá a la comparación del último código un cambio de 0,25 desvíos y anotá cuál de los dos detectores tarda menos.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: gráficos de control EWMA (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc324.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
  ],
  quiz: [
    { q: "Con λ = 1, ¿en qué se convierte el EWMA?", opciones: ["En un CUSUM","En el promedio de toda la serie","En el gráfico de Shewhart: solo cuenta el dato actual","En una línea constante"], correcta: 2, explicacion: "Con λ = 1, z(t) = x(t). Pensar que se vuelve el promedio de toda la serie tienta, pero eso sería con λ muy chico, no con 1." },
    { q: "Querés detectar desplazamientos chicos y lentos, de 0,5 desvíos. ¿Qué λ elegís?", opciones: ["Uno chico, entre 0,05 y 0,1","Uno grande, como 0,8","λ = 1","Da igual"], correcta: 0, explicacion: "Un λ chico promedia muchos datos y acumula evidencia de un cambio chico. Uno grande tienta para reaccionar rápido, pero sirve para cambios grandes." },
    { q: "¿Por qué los límites del EWMA empiezan angostos y se abren?", opciones: ["Por un error de redondeo","Para dar más falsas alarmas al principio","Porque el proceso cambia al principio","Porque al principio el EWMA promedia pocos datos y su desvío es menor; así puede detectar desde el primer dato"], correcta: 3, explicacion: "El factor (1 − (1−λ)^(2t)) refleja cuánta historia hay. Pensar que es para dar falsas alarmas tienta, pero es el desvío exacto en cada momento." },
    { q: "Tus métricas tienen colas pesadas. ¿Cómo calibrás L de forma confiable?", opciones: ["Usando la tabla de Lucas y Saccucci tal cual","Simulando con remuestreo de tus residuos históricos","Con L = 3 siempre","Sin calibrar"], correcta: 1, explicacion: "La tabla supone normalidad. Usarla tal cual tienta por cómoda, pero con colas pesadas el ARL0 real puede ser mucho menor." },
    { q: "Si las tres combinaciones de λ y L de la simulación tienen ARL0 de unos 470, ¿cuál detecta más rápido un cambio de 0,5 desvíos?", opciones: ["La de λ = 0,4","Las tres igual","La de λ = 0,1, en unos 29 datos","Ninguna lo detecta"], correcta: 2, explicacion: "A igual ARL0, el λ chico acumula más historia y gana en cambios chicos. La de 0,4 tienta porque reacciona más al dato nuevo, pero tarda unos 73 datos." },
    { q: "¿Por qué conviene simular muchas series a la vez con numpy?", opciones: ["Porque avanzar en el tiempo con todas juntas es mucho más rápido que un bucle por serie","Porque da resultados distintos","Porque numpy no tiene bucles","Porque cambia el ARL"], correcta: 0, explicacion: "Vectorizar hace la misma cuenta mucho más rápido. Pensar que cambia el resultado tienta, pero el ARL es el mismo: solo cambia el tiempo de cálculo." },
    { q: "A igual ARL0, ¿cómo se comparan EWMA y CUSUM bien calibrados?", opciones: ["El EWMA es siempre mucho más rápido","El CUSUM es siempre mucho más rápido","No se pueden comparar","Tienen demoras muy parecidas"], correcta: 3, explicacion: "Calibrados al mismo ARL0, los dos rinden parecido. Pensar que uno gana siempre tienta, pero la elección suele depender de otras cosas." },
    { q: "Tenés que saber cuándo empezó un cambio para investigar la causa. ¿Qué detector te ayuda más?", opciones: ["EWMA","CUSUM, con el último momento en que la suma valía cero","Shewhart","Ninguno puede"], correcta: 1, explicacion: "El CUSUM estima el inicio de forma directa. El EWMA tienta porque se ve suave, pero no da una estimación directa del inicio." },
    { q: "Querés una línea para el tablero que además sirva para alarmar. ¿Qué usás?", opciones: ["CUSUM","Los datos crudos","EWMA, que es una línea suavizada con bandas","El máximo diario"], correcta: 2, explicacion: "El EWMA se lee como una línea suavizada. El CUSUM tienta porque detecta igual de bien, pero una suma que crece es menos intuitiva en un tablero." },
    { q: "Según Moustakides (1986), ¿qué propiedad tiene el CUSUM?", opciones: ["Es óptimo para detectar un cambio de tamaño conocido","Es óptimo para cualquier cambio","Nunca da falsas alarmas","No necesita calibración"], correcta: 0, explicacion: "La optimalidad vale para el cambio para el que se diseñó (el k elegido). Pensar que es óptimo para cualquier cambio tienta, pero si el cambio real es muy distinto, rinde menos." },
    { q: "En el primer ejemplo, Shewhart no vio un cambio de 0,75 desvíos y el EWMA sí. ¿Qué concluís?", opciones: ["Que Shewhart está mal programado","Que el cambio no existía","Que el EWMA da falsas alarmas","Que el EWMA acumula información de varios datos y detecta cambios chicos"], correcta: 3, explicacion: "Mirar un solo dato no alcanza para un desplazamiento chico. Pensar que el EWMA dio una falsa alarma tienta, pero en la simulación sabés que el cambio está." },
    { q: "Tenés 2 métricas donde un cambio chico es muy caro y 100 donde no tanto. ¿Qué esquema usás?", opciones: ["CUSUM en las 102 con k chico","EWMA para la vigilancia general y un CUSUM dedicado en las 2 críticas","Solo Shewhart en todas","Ninguno: revisás a mano"], correcta: 1, explicacion: "Usás el esfuerzo donde importa. Poner CUSUM con k chico en las 102 tienta para no perderte nada, pero multiplica alertas en métricas donde no compensan." },
  ],
},
{
  id: "sprt",
  icono: "⚖️",
  titulo: "SPRT y razón de verosimilitud: la base de todo",
  nivel: "Avanzado",
  objetivos: [
    "Implementar el SPRT de Wald con sus umbrales A y B a partir de α y β",
    "Mostrar que el CUSUM es un SPRT que se reinicia, escrito con la razón de verosimilitud",
    "Detectar cambios de tamaño desconocido con el GLR (razón de verosimilitud generalizada)",
  ],
  lecciones: [
    { titulo: "El SPRT de Wald", html: `
      <p class="idea">El <strong>SPRT</strong> (prueba secuencial de razón de probabilidades, de Abraham Wald, 1945) decide entre dos hipótesis mirando un dato por vez. Suma la evidencia a favor de una u otra y frena apenas tiene suficiente, en vez de esperar una muestra fija.</p>
      <p>La evidencia de cada dato es el logaritmo de la <strong>razón de verosimilitud</strong>: cuánto más probable es ese dato bajo H1 que bajo H0. Para datos normales con desvío 1, H0: media 0 contra H1: media δ, queda una fórmula simple:</p>
      <pre><code>evidencia del dato x:   ℓ(x) = δ·x - δ²/2
suma acumulada:         Λ(n) = ℓ(x1) + ... + ℓ(xn)
aceptar H1 si Λ(n) ≥ A = log((1-β)/α)
aceptar H0 si Λ(n) ≤ B = log(β/(1-α))
si no, seguir mirando</code></pre>
      <p>Wald mostró que, con esos umbrales, el error de tipo I queda cerca de α y el de tipo II cerca de β. Y que el SPRT necesita, en promedio, menos datos que cualquier prueba de tamaño fijo con los mismos errores.</p>
      <pre><code>import numpy as np
from math import log, ceil

alfa, beta, delta = 0.05, 0.10, 1.0
A, B = log((1 - beta) / alfa), log(beta / (1 - alfa))

def sprt(rng, media_real):
    suma, n = 0.0, 0
    while B &lt; suma &lt; A:
        x = rng.normal(media_real, 1)
        suma += delta * x - delta ** 2 / 2
        n += 1
    return n, suma &gt;= A

rng = np.random.default_rng(9)
for media in [0.0, 1.0]:
    res = [sprt(rng, media) for _ in range(5000)]
    n_medio = np.mean([r[0] for r in res])
    elige_h1 = np.mean([r[1] for r in res])
    print(f"media real {media}: datos promedio {n_medio:.1f}, eligió H1 {elige_h1:.3f} de las veces")

n_fijo = ceil(((1.645 + 1.2816) / delta) ** 2)   # prueba de tamaño fijo, una cola
print("prueba de tamaño fijo con los mismos errores:", n_fijo, "datos")</code></pre>
      <pre><code>Salida:
media real 0.0: datos promedio 5.6, eligió H1 0.029 de las veces
media real 1.0: datos promedio 6.4, eligió H1 0.943 de las veces
prueba de tamaño fijo con los mismos errores: 9 datos</code></pre>
      <p>Cómo se lee: el SPRT decide con unos 6 datos en promedio, cuando la prueba fija necesita 9 para los mismos errores. Y los errores reales quedan incluso mejor que los pedidos: eligió H1 sin cambio un 2,9% de las veces (contra α = 5%) y con cambio un 94,3% (contra 1 − β = 90%). Los umbrales de Wald son aproximados y del lado conservador.</p>
      <p>Por ejemplo, esta es la idea detrás de los experimentos secuenciales del módulo 8: frenar un test A/B apenas hay evidencia suficiente, sin inflar los falsos positivos.</p>
    ` },
    { titulo: "El CUSUM es un SPRT que vuelve a empezar", html: `
      <p class="idea">El CUSUM de Page (1954) es un SPRT de "no hay cambio" contra "hay un cambio de tamaño δ" que, cada vez que la evidencia se inclina a favor de "no hay cambio", vuelve a empezar desde cero. Por eso el max(0, ...).</p>
      <p>Escrito con la razón de verosimilitud, el CUSUM es:</p>
      <pre><code>S(t) = max(0, S(t-1) + ℓ(x(t)))     con ℓ(x) = δ·x - δ²/2
alarma si S(t) &gt; umbral</code></pre>
      <p>Si dividís todo por δ, queda S/δ = max(0, S/δ + x − δ/2): es el CUSUM tabular del módulo 2 con k = δ/2 y h = umbral/δ. De ahí sale la regla "k igual a la mitad del cambio".</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(13)
x = rng.normal(0, 1, 300)
x[150:] += 1.0
delta, k, h = 1.0, 0.5, 5.0

s_llr = s_tab = 0.0
alarma_llr = alarma_tab = None
for t, v in enumerate(x):
    s_llr = max(0.0, s_llr + delta * v - delta ** 2 / 2)
    s_tab = max(0.0, s_tab + v - k)
    if alarma_llr is None and s_llr &gt; h * delta:
        alarma_llr = t
    if alarma_tab is None and s_tab &gt; h:
        alarma_tab = t
print("alarma con la razón de verosimilitud:", alarma_llr)
print("alarma con el CUSUM tabular:         ", alarma_tab)</code></pre>
      <pre><code>Salida:
alarma con la razón de verosimilitud: 156
alarma con el CUSUM tabular:          156</code></pre>
      <p>Las dos formas alarman en el mismo dato porque son la misma cuenta. La ventaja de escribirlo con la razón de verosimilitud es que sirve para <strong>cualquier distribución</strong>: cambiás ℓ(x) por el logaritmo de la razón de verosimilitud de tus datos (Poisson para conteos, Bernoulli para tasas) y tenés un CUSUM para eso. Es lo que hace el módulo 5.</p>
      <table>
        <tr><th>Datos</th><th>Evidencia ℓ(x) de cada dato</th></tr>
        <tr><td>Normal, cambio de media de 0 a δ</td><td>δ·x − δ²/2</td></tr>
        <tr><td>Poisson, tasa de λ0 a λ1</td><td>x·log(λ1/λ0) − (λ1 − λ0)</td></tr>
        <tr><td>Bernoulli, probabilidad de p0 a p1</td><td>x·log(p1/p0) + (1 − x)·log((1 − p1)/(1 − p0))</td></tr>
      </table>
      <p>Por ejemplo, Moustakides (1986) demostró que este CUSUM es óptimo para detectar un cambio de tamaño conocido: ningún otro detector tiene menos demora en el peor caso a igual tasa de falsas alarmas.</p>
    ` },
    { titulo: "Cambios de tamaño desconocido: el GLR", html: `
      <p class="idea">El CUSUM supone que sabés el tamaño del cambio (δ). Si no lo sabés, la <strong>razón de verosimilitud generalizada</strong> (GLR) prueba todos los momentos posibles de inicio y usa el tamaño de cambio que mejor explica los datos.</p>
      <p>Para datos normales con desvío 1, la evidencia de un cambio que empezó en τ, con el tamaño estimado por la media de los datos desde τ, es:</p>
      <pre><code>G(t) = máximo sobre τ de  (suma de x desde τ hasta t)² / (2·(t - τ + 1))
alarma si G(t) &gt; umbral</code></pre>
      <p>En la práctica se busca τ solo en una ventana de los últimos datos, para que el costo no crezca sin fin.</p>
      <pre><code>import numpy as np

def glr_alarma(x, umbral=8.0, ventana=100):
    for t in range(len(x)):
        inicio = max(0, t - ventana + 1)
        sumas = np.cumsum(x[inicio:t + 1][::-1])          # sumas desde τ = t, t-1, ...
        largos = np.arange(1, len(sumas) + 1)
        if (sumas ** 2 / (2 * largos)).max() &gt; umbral:
            return t
    return None

def cusum_alarma(x, k, h):
    a = b = 0.0
    for t, v in enumerate(x):
        a, b = max(0.0, a + v - k), max(0.0, b - v - k)
        if a &gt; h or b &gt; h:
            return t
    return None

rng = np.random.default_rng(17)
for delta in [0.5, 1.0, 3.0]:
    d_glr, d_cus = [], []
    for _ in range(200):
        x = rng.normal(0, 1, 400)
        x[100:] += delta
        d_glr.append((glr_alarma(x) or 400) - 100)
        d_cus.append((cusum_alarma(x, 0.5, 5.0) or 400) - 100)
    print(f"cambio {delta}: demora GLR {np.median(d_glr):5.1f} | CUSUM k=0.5 {np.median(d_cus):5.1f} (medianas)")</code></pre>
      <pre><code>Salida:
cambio 0.5: demora GLR  45.0 | CUSUM k=0.5  19.5 (medianas)
cambio 1.0: demora GLR  13.0 | CUSUM k=0.5   6.0 (medianas)
cambio 3.0: demora GLR   1.0 | CUSUM k=0.5   1.0 (medianas)</code></pre>
      <p>Cómo se lee: con estos umbrales, el CUSUM avisó antes que el GLR para cambios de 0,5 y 1 desvío, y los dos empataron con un cambio de 3. Pero ojo: el umbral 8 del GLR y el h = 5 del CUSUM no están calibrados al mismo ARL0, así que esta comparación no dice cuál es mejor. Es justo el error del módulo 0: comparar demoras sin igualar las falsas alarmas. La ventaja del GLR es otra: no tenés que adivinar el tamaño del cambio y además te lo estima.</p>
      <table>
        <tr><th></th><th>CUSUM</th><th>GLR</th></tr>
        <tr><td>Necesita conocer el tamaño del cambio</td><td>Sí (elige k)</td><td>No</td></tr>
        <tr><td>Costo por dato</td><td>Constante, mínimo</td><td>Crece con la ventana</td></tr>
        <tr><td>Estima el tamaño del cambio</td><td>No</td><td>Sí, la media desde τ</td></tr>
      </table>
      <p>Por ejemplo, una alternativa barata al GLR es correr dos o tres CUSUM en paralelo, cada uno con un k distinto (0,25, 0,5 y 1,5), y alarmar si cualquiera alarma, ajustando los umbrales para el ARL0 combinado.</p>
    ` },
  ],
  practica: [
    "Cambiá en el primer código α a 0,01 y β a 0,05. Anotá los datos promedio del SPRT y los de la prueba de tamaño fijo, y cuánto ahorra el SPRT en porcentaje.",
    "Modificá el segundo código para que δ sea 0,5 (y k = 0,25). Anotá si las dos formas siguen alarmando en el mismo dato.",
    "Calibrá el umbral del GLR por simulación para que su ARL0 sea parecido al del CUSUM con k = 0,5 y h = 5 (unos 470). Anotá el umbral y repetí la comparación de demoras.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: CUSUM y su relación con la razón de verosimilitud (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc323.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
  ],
  quiz: [
    { q: "Tenés que decidir entre dos hipótesis con la menor cantidad de datos posible y errores α y β fijos. ¿Qué usás?", opciones: ["Una prueba de tamaño fijo","La regla de 3 desvíos","El SPRT de Wald","Un promedio mensual"], correcta: 2, explicacion: "El SPRT necesita en promedio menos datos que cualquier prueba fija con los mismos errores. La prueba fija tienta por conocida, pero obliga a juntar todos los datos aunque la evidencia ya sea clara." },
    { q: "Si α = 0,05 y β = 0,10, ¿cuánto vale el umbral superior A del SPRT?", opciones: ["log(0,90 / 0,05), cerca de 2,89","log(0,05 / 0,90)","0,05","1,645"], correcta: 0, explicacion: "A = log((1 − β)/α). 1,645 tienta porque es el valor crítico de una prueba normal de una cola, pero el SPRT usa umbrales sobre la log-razón de verosimilitud." },
    { q: "Para datos normales con desvío 1, H0 media 0 y H1 media δ, ¿cuál es la evidencia de un dato x?", opciones: ["x − δ","x²","δ/x","δ·x − δ²/2"], correcta: 3, explicacion: "Es el logaritmo de la razón de verosimilitud normal. x − δ tienta porque se parece al CUSUM tabular, pero ahí además se descuenta k = δ/2 y se divide por δ." },
    { q: "En la simulación, el SPRT decidió con unos 6 datos y la prueba fija necesitaba 9. ¿Qué concluís?", opciones: ["Que el SPRT tiene más falsos positivos","Que el SPRT ahorra cerca de un tercio de los datos para los mismos errores","Que la prueba fija es mejor","Que da lo mismo"], correcta: 1, explicacion: "El SPRT frena apenas hay evidencia. Pensar que tiene más falsos positivos tienta porque decide antes, pero la simulación muestra el error de tipo I por debajo de 0,05." },
    { q: "¿Por qué el CUSUM tiene un max(0, ...)?", opciones: ["Para evitar números negativos en el gráfico","Por una convención estética","Porque es un SPRT que, cuando la evidencia favorece \"no hay cambio\", vuelve a empezar desde cero","Para detectar solo bajadas"], correcta: 2, explicacion: "El reinicio es lo que lo convierte en un detector de cambios en cualquier momento. Pensar que es estético tienta porque el gráfico queda prolijo, pero es la lógica del método." },
    { q: "Si dividís el CUSUM con razón de verosimilitud por δ, ¿qué k obtenés en el CUSUM tabular?", opciones: ["k = δ/2","k = δ","k = 2δ","k = 0"], correcta: 0, explicacion: "S/δ = max(0, S/δ + x − δ/2): de ahí sale la regla de la mitad del cambio. k = δ tienta, pero haría al detector insensible al propio cambio que buscás." },
    { q: "Querés un CUSUM para la cantidad de errores por hora, que siguen una Poisson. ¿Qué cambiás?", opciones: ["Nada: usás el de la normal","Usás k = 0,5 siempre","Pasás los conteos a porcentaje","La evidencia ℓ(x) por x·log(λ1/λ0) − (λ1 − λ0)"], correcta: 3, explicacion: "Con la razón de verosimilitud, el CUSUM se adapta a cualquier distribución. Usar el de la normal tienta por simple, pero con conteos bajos la aproximación normal es mala." },
    { q: "Según Moustakides (1986), ¿en qué sentido el CUSUM es óptimo?", opciones: ["Detecta todo cambio en un dato","Tiene la menor demora en el peor caso, a igual tasa de falsas alarmas, para un cambio de tamaño conocido","Nunca tiene falsas alarmas","Es óptimo para cualquier tamaño de cambio"], correcta: 1, explicacion: "La optimalidad es para el cambio de diseño. Para cualquier tamaño tienta generalizarlo, pero si el cambio real es muy distinto, rinde peor." },
    { q: "No sabés de qué tamaño puede ser el cambio. ¿Qué detector se adapta solo?", opciones: ["El CUSUM con k = 0,5","Shewhart","El GLR, que estima el tamaño con la media desde cada posible inicio","El SPRT con δ fijo"], correcta: 2, explicacion: "El GLR maximiza sobre el inicio y el tamaño. El CUSUM tienta porque es óptimo, pero solo para el tamaño que elegiste." },
    { q: "Tu GLR mira toda la historia en cada dato y se volvió lento. ¿Qué hacés?", opciones: ["Limitás la búsqueda del inicio a una ventana de los últimos datos","Lo reemplazás por Shewhart","Lo corrés una vez por semana","Subís el umbral"], correcta: 0, explicacion: "La ventana mantiene el costo acotado. Subir el umbral tienta porque hay menos alarmas, pero no cambia el costo de calcular." },
    { q: "En la comparación de la lección, el CUSUM avisó antes que el GLR. ¿Qué concluís?", opciones: ["Que el GLR no sirve","Que el CUSUM es mejor para cualquier cambio","Que el código está roto","Nada sobre cuál es mejor: los umbrales no estaban calibrados al mismo ARL0"], correcta: 3, explicacion: "Sin igualar las falsas alarmas, una demora menor puede ser solo un detector más nervioso. Concluir que el GLR no sirve tienta por el resultado, pero su ventaja es no necesitar el tamaño del cambio." },
    { q: "Querés algo más barato que el GLR para cambios de tamaño desconocido. ¿Qué podés hacer?", opciones: ["Un solo CUSUM con k muy grande","Correr dos o tres CUSUM con distintos k y alarmar si cualquiera alarma, ajustando los umbrales","Promediar los datos de la semana","No vigilar cambios chicos"], correcta: 1, explicacion: "Varios CUSUM cubren distintos tamaños con costo mínimo. Un k grande tienta para reaccionar rápido, pero pierde los cambios chicos." },
  ],
},
{
  id: "conteos",
  icono: "🔢",
  titulo: "Conteos y tasas: CUSUM de Poisson y de Bernoulli",
  nivel: "Avanzado",
  objetivos: [
    "Vigilar conteos por período (errores por hora) con un CUSUM de Poisson",
    "Vigilar una tasa con exposición variable (errores sobre pedidos) sin confundir volumen con calidad",
    "Detectar sobredispersión y ajustar el detector cuando los conteos varían más de lo que dice Poisson",
  ],
  lecciones: [
    { titulo: "CUSUM de Poisson para conteos", html: `
      <p class="idea">Muchas métricas son conteos: errores por hora, alertas por día, filas rechazadas por lote. Con conteos bajos, la aproximación normal es mala. El CUSUM de Poisson usa la evidencia exacta de la razón de verosimilitud que viste en el módulo 4.</p>
      <pre><code>evidencia de un conteo x:  ℓ(x) = x·log(λ1/λ0) - (λ1 - λ0)
S(t) = max(0, S(t-1) + ℓ(x(t)))       alarma si S(t) &gt; h</code></pre>
      <p>λ0 es la tasa normal (por ejemplo, 4 errores por hora) y λ1 la tasa que querés detectar (por ejemplo, 6). Como siempre, h se calibra por simulación para un ARL0.</p>
      <pre><code>import numpy as np
from math import log

lam0, lam1 = 4.0, 6.0
a, b = log(lam1 / lam0), lam1 - lam0

def arl0_poisson(h, corridas=1000, tmax=20000, semilla=2):
    rng = np.random.default_rng(semilla)
    s = np.zeros(corridas)
    alarma = np.full(corridas, tmax)
    vivas = np.ones(corridas, bool)
    for t in range(1, tmax + 1):
        s = np.maximum(0, s + a * rng.poisson(lam0, corridas) - b)
        nuevas = vivas &amp; (s &gt; h)
        alarma[nuevas] = t
        vivas &amp;= ~nuevas
        s[~vivas] = 0
        if not vivas.any():
            break
    return alarma.mean()

for h in [3.0, 4.0, 5.0]:
    print(f"h={h}: ARL0 ≈ {arl0_poisson(h):.0f} horas")</code></pre>
      <pre><code>Salida:
h=3.0: ARL0 ≈ 143 horas
h=4.0: ARL0 ≈ 390 horas
h=5.0: ARL0 ≈ 1007 horas</code></pre>
      <p>Cómo se lee: cada punto de h multiplica varias veces el ARL0. Elegís h según cuántas falsas alarmas por mes tolerás en esa métrica.</p>
      <p>Por ejemplo, con datos por hora, un ARL0 de 1.000 horas son unos 42 días: una falsa alarma cada mes y medio en esa métrica, en promedio.</p>
    ` },
    { titulo: "Tasas con exposición variable", html: `
      <p class="idea">"Más errores" no siempre es "peor calidad": si de noche hay pocos pedidos y de día muchos, los errores suben de día aunque la tasa de error sea la misma. Hay que vigilar la <strong>tasa</strong> (errores sobre pedidos), usando la cantidad de pedidos como exposición.</p>
      <p>Con n pedidos en la hora y una probabilidad de error p, los errores siguen una binomial. La evidencia de la hora para pasar de p0 a p1 es:</p>
      <pre><code>ℓ = x·log(p1/p0) + (n - x)·log((1 - p1)/(1 - p0))</code></pre>
      <p>Así, una hora con muchos pedidos aporta más evidencia que una con pocos, que es exactamente lo que querés.</p>
      <pre><code>import numpy as np
from math import log

rng = np.random.default_rng(23)
horas = np.arange(24 * 7)
pedidos = (200 + 180 * np.sin(2 * np.pi * (horas % 24 - 6) / 24)).clip(20).astype(int)
p_real = np.where(horas &lt; 120, 0.02, 0.03)          # la tasa de error sube de 2% a 3% en la hora 120
errores = rng.binomial(pedidos, p_real)

p0, p1, h = 0.02, 0.03, 5.0
sa, sb = log(p1 / p0), log((1 - p1) / (1 - p0))
s, alarma = 0.0, None
for t in horas:
    s = max(0.0, s + errores[t] * sa + (pedidos[t] - errores[t]) * sb)
    if s &gt; h:
        alarma = int(t)
        break
print("errores por hora (mín, máx):", int(errores.min()), int(errores.max()))
print("alarma del CUSUM de tasa en la hora:", alarma)</code></pre>
      <pre><code>Salida:
errores por hora (mín, máx): 0 14
alarma del CUSUM de tasa en la hora: 127</code></pre>
      <p>Cómo se lee: los errores por hora varían mucho solo por el volumen (de pocos a muchos según la hora del día). Un umbral fijo sobre la cantidad de errores alarmaría todas las tardes. El CUSUM de tasa detecta el cambio real de 2% a 3% poco después de la hora 120.</p>
      <table>
        <tr><th>Vigilar...</th><th>Problema</th></tr>
        <tr><td>Cantidad de errores</td><td>Se confunde con el volumen: alarma en horas pico</td></tr>
        <tr><td>Porcentaje de errores con la regla de 3 desvíos</td><td>Las horas con pocos pedidos tienen un porcentaje muy ruidoso</td></tr>
        <tr><td>Tasa con el CUSUM binomial</td><td>Pesa cada hora según su volumen</td></tr>
      </table>
      <p>Por ejemplo, lo mismo sirve para la tasa de conversión de un sitio (compras sobre visitas), la tasa de rechazo de un validador de datos o la proporción de predicciones de una clase.</p>
    ` },
    { titulo: "Sobredispersión: cuando Poisson queda corta", html: `
      <p class="idea">Poisson supone que la varianza es igual a la media. Los conteos reales suelen variar más (<strong>sobredispersión</strong>): los errores vienen en ráfagas, hay días raros. Si la ignorás, el detector da muchas más falsas alarmas de las calculadas.</p>
      <p>El chequeo más simple es el <strong>índice de dispersión</strong>: varianza dividida media. En una Poisson da cerca de 1.</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(29)
poisson = rng.poisson(4.0, 2000)
# Mezcla: la tasa de cada hora varía (gamma), como pasa con errores que vienen en ráfagas
tasas = rng.gamma(shape=2.0, scale=2.0, size=2000)      # media 4
rafagas = rng.poisson(tasas)

for nombre, x in [("Poisson", poisson), ("con ráfagas", rafagas)]:
    print(f"{nombre:12s} media {x.mean():.2f}  varianza {x.var():.2f}  dispersión {x.var() / x.mean():.2f}")</code></pre>
      <pre><code>Salida:
Poisson      media 3.98  varianza 3.74  dispersión 0.94
con ráfagas  media 3.96  varianza 11.34  dispersión 2.86</code></pre>
      <p>Cómo se lee: la serie con ráfagas tiene la misma media que la Poisson pero una varianza mucho mayor. Un CUSUM de Poisson calibrado para la primera va a alarmar seguido con la segunda.</p>
      <p><strong>Qué hacer si hay sobredispersión:</strong></p>
      <ul>
        <li>Usar una distribución que la permita, como la binomial negativa, en la razón de verosimilitud.</li>
        <li>Calibrar h por simulación con remuestreo de los conteos históricos reales.</li>
        <li>Buscar la causa: muchas veces la sobredispersión viene de mezclar grupos (clientes, regiones, versiones) que conviene vigilar por separado.</li>
      </ul>
      <p>Por ejemplo, si los errores se concentran en un cliente que manda lotes enormes de golpe, vigilar a ese cliente aparte y al resto juntos suele dejar series mucho más cercanas a Poisson.</p>
    ` },
  ],
  practica: [
    "Con arl0_poisson, buscá el h que da un ARL0 cercano a 720 horas (un mes). Anotá h y estimá por simulación el ARL1 cuando la tasa sube a 6.",
    "En el segundo código, poné un umbral fijo de 10 errores por hora y contá cuántas horas lo superan antes de la hora 120 (sin cambio real). Anotalo y compará con el CUSUM de tasa.",
    "Calculá el índice de dispersión de una métrica de conteo real (varianza sobre media por hora, en un período tranquilo). Anotá el valor y decidí si conviene Poisson.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: gráficos de control para atributos y conteos (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc32.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
  ],
  quiz: [
    { q: "Tu métrica es la cantidad de errores por hora, con una media de 4. ¿Qué detector conviene?", opciones: ["La regla de 3 desvíos con la normal","Un promedio diario","Un CUSUM de Poisson con la evidencia x·log(λ1/λ0) − (λ1 − λ0)","Ninguno: los conteos no se vigilan"], correcta: 2, explicacion: "Con conteos bajos la normal es mala aproximación. La regla de 3 desvíos tienta por familiar, pero con media 4 el desvío es 2 y la cola real es muy distinta." },
    { q: "Si subís h de 4 a 5 en un CUSUM de Poisson, ¿qué esperás del ARL0?", opciones: ["Que se multiplique varias veces","Que suba 1 hora","Que baje","Que no cambie"], correcta: 0, explicacion: "El ARL0 crece casi exponencialmente con h. Pensar que sube un poco tienta porque h subió una unidad, pero el efecto es multiplicativo." },
    { q: "Con datos por hora, el ARL0 de tu detector es 1.000. ¿Cada cuánto esperás una falsa alarma en esa métrica?", opciones: ["Cada 1.000 días","Cada hora","Nunca","Cada unos 42 días, en promedio"], correcta: 3, explicacion: "1.000 horas son unos 42 días. Pensar en 1.000 días tienta si confundís la unidad del ARL, que se mide en datos." },
    { q: "Tu alerta de \"más de 10 errores por hora\" salta todas las tardes, cuando hay más pedidos. ¿Qué cambiás?", opciones: ["Subís el umbral a 20","Vigilás la tasa de error con el volumen como exposición","Apagás la alerta de tarde","Vigilás solo de noche"], correcta: 1, explicacion: "Más errores por más volumen no es peor calidad. Subir el umbral tienta, pero de noche, con poco volumen, no vería un problema real." },
    { q: "En el CUSUM binomial, ¿por qué una hora con muchos pedidos aporta más evidencia?", opciones: ["Porque es más importante para el negocio","Porque el código la multiplica por 2","Porque tiene más observaciones: su tasa está mejor medida","No aporta más"], correcta: 2, explicacion: "La evidencia crece con n. Pensar que es por importancia de negocio tienta, pero es estadística: más datos, más información." },
    { q: "Vigilás el porcentaje de errores por hora con la regla de 3 desvíos y alarma en horas de madrugada. ¿Qué concluís?", opciones: ["Que el porcentaje es muy ruidoso con pocos pedidos y conviene un detector que pese por volumen","Que de madrugada se trabaja peor","Que hay que sacar las horas de madrugada","Que el umbral está bien"], correcta: 0, explicacion: "Con pocos pedidos, un solo error cambia mucho el porcentaje. Sacar esas horas tienta, pero perdés vigilancia justo cuando hay menos gente mirando." },
    { q: "¿Qué tienen en común la tasa de conversión, la tasa de rechazo de un validador y la proporción de una clase predicha?", opciones: ["Son conteos de Poisson","Son normales siempre","No se pueden vigilar","Son proporciones con exposición variable: sirve el CUSUM binomial"], correcta: 3, explicacion: "Son éxitos sobre intentos. Tratarlas como Poisson tienta porque se cuentan, pero importa la cantidad de intentos." },
    { q: "¿Qué es la sobredispersión en conteos?", opciones: ["Que hay muchos ceros","Que la varianza es mayor que la media, más de lo que permite una Poisson","Que la media es alta","Que los datos son normales"], correcta: 1, explicacion: "Poisson exige varianza igual a media. Muchos ceros tienta como definición porque a veces acompaña, pero lo que define es la varianza de más." },
    { q: "El índice de dispersión de tu métrica da 2,5. ¿Qué hacés?", opciones: ["Usás Poisson igual","Dividís los conteos por 2,5","No usás Poisson tal cual: calibrás por remuestreo o usás una binomial negativa","Ignorás el número"], correcta: 2, explicacion: "Con dispersión 2,5, Poisson subestima mucho la variación. Usarla igual tienta por simple, pero da muchas más falsas alarmas." },
    { q: "Tenés sobredispersión porque un cliente manda lotes enormes de golpe. ¿Qué te sugiere eso?", opciones: ["Vigilar a ese cliente por separado y al resto juntos","Sacar a ese cliente de los datos para siempre","Subir el umbral para todos","Usar la normal"], correcta: 0, explicacion: "Separar grupos distintos suele devolver series más estables. Sacar al cliente tienta, pero perdés la vigilancia de un cliente importante." },
    { q: "En la simulación de ráfagas, la media era 4 en las dos series. ¿Qué cambió?", opciones: ["La media","Nada","El mínimo","La varianza: la serie con ráfagas varía mucho más"], correcta: 3, explicacion: "La mezcla gamma-Poisson conserva la media y aumenta la varianza. Pensar que no cambió nada tienta porque las medias coinciden, pero el detector mira también la variación." },
    { q: "Querés calibrar h para una métrica de conteos real con ráfagas. ¿Cuál es la forma más confiable?", opciones: ["Usar la fórmula de Poisson","Simular remuestreando los conteos históricos reales de un período tranquilo","Elegir h = 5 por costumbre","Probar en producción y ver"], correcta: 1, explicacion: "El remuestreo conserva la distribución real. Probar en producción tienta por rápido, pero te enterás del problema por las falsas alarmas." },
  ],
},
{
  id: "estacionalidad",
  icono: "📆",
  titulo: "Series reales: autocorrelación, estacionalidad y residuos",
  nivel: "Avanzado",
  objetivos: [
    "Medir cuánto infla las falsas alarmas la autocorrelación y corregirlo vigilando residuos",
    "Construir una línea base estacional (misma hora de semanas anteriores) y vigilar el residuo con una escala robusta",
    "Implementar el test de Page-Hinkley para cambios de media en un flujo de residuos",
  ],
  lecciones: [
    { titulo: "La autocorrelación rompe los ARL", html: `
      <p class="idea">Todo lo que viste supone datos independientes. Las métricas reales tienen <strong>autocorrelación</strong>: una hora se parece a la anterior. Con autocorrelación positiva, los detectores dan muchas más falsas alarmas que las calculadas, aunque no haya ningún cambio.</p>
      <p>Simulemos un proceso AR(1), donde cada dato es φ veces el anterior más ruido, y apliquemos el gráfico de individuos con límites por rango móvil:</p>
      <pre><code>import numpy as np

def ar1(phi, n, rng):
    e = rng.normal(0, 1, n)
    x = np.zeros(n)
    for t in range(1, n):
        x[t] = phi * x[t - 1] + e[t]
    return x

rng = np.random.default_rng(37)
for phi in [0.0, 0.5, 0.8]:
    x = ar1(phi, 20000, rng)
    sigma = np.abs(np.diff(x)).mean() / 1.128
    alarmas = (np.abs(x - x.mean()) &gt; 3 * sigma).sum()
    r1 = np.corrcoef(x[:-1], x[1:])[0, 1]
    print(f"φ={phi}: autocorrelación {r1:.2f}, falsas alarmas cada {20000 / max(alarmas, 1):.0f} datos")</code></pre>
      <pre><code>Salida:
φ=0.0: autocorrelación 0.00, falsas alarmas cada 417 datos
φ=0.5: autocorrelación 0.49, falsas alarmas cada 30 datos
φ=0.8: autocorrelación 0.80, falsas alarmas cada 6 datos</code></pre>
      <p>Cómo se lee: sin autocorrelación, una falsa alarma cada unos 370 datos, como dice la teoría. Con φ = 0,8 caen a una cada muy pocos datos. El motivo: el rango móvil mide la variación entre datos vecinos, que con autocorrelación es mucho menor que la variación total, y los límites quedan angostos.</p>
      <table>
        <tr><th>Solución</th><th>Idea</th></tr>
        <tr><td>Vigilar residuos</td><td>Modelar la parte predecible (tendencia, estacionalidad, autocorrelación) y vigilar lo que sobra</td></tr>
        <tr><td>Agregar en períodos más largos</td><td>Promedios por día en vez de por minuto suelen tener menos autocorrelación</td></tr>
        <tr><td>Calibrar con historia</td><td>Medir el ARL0 empírico y ajustar los umbrales</td></tr>
      </table>
      <p>Por ejemplo, antes de poner un detector, mirá la autocorrelación de lag 1 de la serie. Si pasa de 0,3, no confíes en ningún ARL calculado con fórmulas.</p>
    ` },
    { titulo: "Línea base estacional y escala robusta", html: `
      <p class="idea">Una métrica horaria tiene un patrón diario (más de tarde) y semanal (menos el domingo). Comparar contra un promedio general alarma por el patrón. La solución es comparar cada hora contra lo esperado para esa hora: la <strong>línea base estacional</strong>.</p>
      <p>Una línea base simple y robusta: la mediana de la misma hora y el mismo día de la semana en las últimas 3 semanas. Y en vez del desvío, una escala robusta: la <strong>MAD</strong> (mediana de las desviaciones absolutas) multiplicada por 1,4826, que coincide con el desvío en datos normales y no se deja arrastrar por picos.</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(41)
h = np.arange(24 * 7 * 6)                              # 6 semanas de datos horarios
diario = 100 + 40 * np.sin(2 * np.pi * (h % 24 - 8) / 24)
semanal = np.where((h // 24) % 7 == 6, -30, 0)         # el domingo cae
y = diario + semanal + rng.normal(0, 5, len(h))
y[24 * 7 * 5 + 50: 24 * 7 * 5 + 56] += 25              # incidente de 6 horas en la última semana

semana = 24 * 7
ultima = np.arange(5 * semana, 6 * semana)
base = np.median(np.stack([y[ultima - k * semana] for k in (1, 2, 3)]), axis=0)
resid = y[ultima] - base

hist = (y[4 * semana:5 * semana] - np.median(np.stack([y[np.arange(4 * semana, 5 * semana) - k * semana] for k in (1, 2, 3)]), axis=0))
escala = 1.4826 * np.median(np.abs(hist - np.median(hist)))
z = resid / escala

z_crudo = (y[ultima] - y[:5 * semana].mean()) / y[:5 * semana].std()
print("alarmas con la serie cruda (|z|&gt;3):", int((np.abs(z_crudo) &gt; 3).sum()))
print("alarmas con el residuo estacional (|z|&gt;3):", int((np.abs(z) &gt; 3).sum()))
print("horas del incidente detectadas:", [int(t) for t in np.flatnonzero(np.abs(z) &gt; 3)])</code></pre>
      <pre><code>Salida:
alarmas con la serie cruda (|z|&gt;3): 0
alarmas con el residuo estacional (|z|&gt;3): 6
horas del incidente detectadas: [50, 51, 52, 53, 54, 55]</code></pre>
      <p>Cómo se lee: con la serie cruda no hay ninguna alarma, porque la variación del patrón diario es mucho mayor que el incidente y lo esconde. Con el residuo estacional, las alarmas son exactamente las 6 horas del incidente (de la 50 a la 55 de la última semana), y ninguna más.</p>
      <p>Por ejemplo, la mediana de 3 semanas tolera que una de ellas haya tenido un incidente: con el promedio, ese incidente contaminaría la línea base de la semana siguiente.</p>
    ` },
    { titulo: "Page-Hinkley sobre los residuos", html: `
      <p class="idea">Una vez que tenés residuos razonablemente estables, cualquier detector de los módulos anteriores sirve. Uno muy usado en flujos de datos es el test de <strong>Page-Hinkley</strong>: acumula cuánto se alejan los datos de su media histórica y alarma cuando la suma se separa demasiado de su mínimo.</p>
      <pre><code>m(t) = suma de (x(i) - media hasta i - δ)   desde i = 1 hasta t
M(t) = mínimo de m hasta t
alarma si m(t) - M(t) &gt; λ</code></pre>
      <p>δ es una tolerancia (como el k del CUSUM) y λ el umbral. A diferencia del CUSUM, usa la media que va calculando sobre los propios datos, así que no necesita una media objetivo fija.</p>
      <pre><code>import numpy as np

def page_hinkley(x, delta=0.5, lam=8.0):
    media, m, M = 0.0, 0.0, 0.0
    for t, v in enumerate(x, start=1):
        media += (v - media) / t
        m += v - media - delta
        M = min(M, m)
        if m - M &gt; lam:
            return t - 1
    return None

rng = np.random.default_rng(43)
x = rng.normal(0, 1, 600)
x[400:] += 1.0
print("Page-Hinkley alarma en el dato:", page_hinkley(x))
print("sin cambio, alarma en:", page_hinkley(rng.normal(0, 1, 600)))</code></pre>
      <pre><code>Salida:
Page-Hinkley alarma en el dato: 413
sin cambio, alarma en: None</code></pre>
      <p>Cómo se lee: detecta el cambio que empieza en el dato 400 trece datos después y, en una serie sin cambio, no alarma (devuelve None). Estos valores de δ y λ salieron de calibrar por simulación: con δ = 0,1 y λ = 10, la mitad de las series sin cambio daban una falsa alarma. La media que se actualiza sola es una ventaja (no hay fase I) y una desventaja: si el cambio llega muy temprano, la media ya lo incluye.</p>
      <table>
        <tr><th>Detector</th><th>Necesita media objetivo</th><th>Bueno para</th></tr>
        <tr><td>CUSUM / EWMA</td><td>Sí (fase I)</td><td>Métricas con línea base estable y conocida</td></tr>
        <tr><td>Page-Hinkley</td><td>No, la estima sobre la marcha</td><td>Flujos nuevos o largos, como la tasa de error de un modelo</td></tr>
      </table>
      <p>Por ejemplo, Page-Hinkley es uno de los detectores clásicos de la literatura de drift en flujos de datos, junto con DDM y ADWIN, que vas a ver en el próximo módulo.</p>
    ` },
  ],
  practica: [
    "Corré el primer código con φ = 0,3 y anotá cada cuántos datos aparece una falsa alarma. Después agregá los datos de a 10 (promedio de bloques) con φ = 0,8 y anotá si mejora.",
    "En el segundo código, cambiá la línea base de la mediana al promedio de las 3 semanas y poné un incidente también en la semana 4. Anotá cuántas alarmas da cada versión en la última semana.",
    "Ajustá λ de Page-Hinkley para que, en 50 series sin cambio de 600 datos, haya como mucho 2 alarmas. Anotá el λ y la demora promedio para el cambio de 1 desvío.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: series de tiempo y autocorrelación (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section1/pmc16.htm" },
    { t: "Google: monitoreo de pipelines de ML en producción (en inglés)", url: "https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring" },
  ],
  quiz: [
    { q: "Tu métrica por minuto tiene autocorrelación de lag 1 de 0,8 y el gráfico de individuos alarma todo el tiempo. ¿Qué pasa?", opciones: ["Hay un incidente permanente","El umbral de 3 desvíos es muy alto","El rango móvil subestima la variación total y los límites quedan angostos","La métrica está rota"], correcta: 2, explicacion: "Con datos vecinos parecidos, las diferencias consecutivas son chicas. Pensar en un incidente permanente tienta por la cantidad de alarmas, pero es el método el que falla." },
    { q: "Antes de poner un detector, ¿qué mirás para saber si podés confiar en los ARL de las fórmulas?", opciones: ["La autocorrelación de lag 1: si pasa de 0,3, no confiás","La media de la serie","La cantidad de datos","El color del tablero"], correcta: 0, explicacion: "Las fórmulas suponen independencia. La cantidad de datos tienta porque importa en fase I, pero no dice nada de la autocorrelación." },
    { q: "Tu métrica por minuto es muy autocorrelacionada. ¿Qué cambio simple puede ayudar?", opciones: ["Vigilar cada segundo","Bajar el umbral","Sacar los datos altos","Vigilar promedios por períodos más largos o residuos de un modelo"], correcta: 3, explicacion: "Agregar o modelar la parte predecible reduce la autocorrelación del dato vigilado. Vigilar cada segundo tienta para reaccionar antes, pero aumenta la autocorrelación." },
    { q: "Tu métrica horaria tiene un patrón diario y alarma todas las tardes. ¿Qué hacés?", opciones: ["Subís el umbral de las tardes a mano","Comparás cada hora con una línea base de la misma hora en semanas anteriores","Apagás las alertas de tarde","Usás el promedio general"], correcta: 1, explicacion: "La línea base estacional sabe que la tarde es más alta. Subir el umbral a mano tienta, pero no se adapta si el patrón cambia." },
    { q: "¿Por qué usar la mediana de 3 semanas y no el promedio como línea base?", opciones: ["Porque es más rápida de calcular","Porque da números redondos","Porque si una semana tuvo un incidente, la mediana no se contamina","No hay diferencia"], correcta: 2, explicacion: "La mediana ignora un valor extremo entre tres. Pensar que no hay diferencia tienta porque en semanas tranquilas coinciden, pero difieren justo cuando hubo un problema." },
    { q: "Querés una escala para estandarizar residuos que no se deje arrastrar por picos. ¿Qué usás?", opciones: ["La MAD multiplicada por 1,4826","El desvío común","El rango total","La media"], correcta: 0, explicacion: "La MAD es robusta y, con ese factor, coincide con el desvío en datos normales. El desvío común tienta por familiar, pero un pico lo infla." },
    { q: "En el ejemplo de la lección, ¿por qué la serie cruda no sirve para detectar el incidente?", opciones: ["Porque el incidente no existía","Porque faltaban datos","Porque el umbral era 3","Porque el patrón diario y el del domingo dominan la variación y esconden el incidente"], correcta: 3, explicacion: "La variación por el patrón es mucho mayor que el incidente. Culpar al umbral tienta, pero ningún umbral sobre la serie cruda separa el patrón del problema." },
    { q: "Tenés un flujo nuevo, sin historia para estimar una media objetivo. ¿Qué detector te sirve?", opciones: ["CUSUM con media objetivo inventada","Page-Hinkley, que estima la media sobre la marcha","EWMA con media 0","Ninguno: hay que esperar un año"], correcta: 1, explicacion: "Page-Hinkley no necesita fase I. Inventar una media objetivo tienta para usar el CUSUM, pero si está mal, el detector alarma o no ve nada." },
    { q: "En Page-Hinkley, ¿qué papel cumple δ?", opciones: ["Es el umbral de alarma","Es la media","Es una tolerancia, como el k del CUSUM","Es la cantidad de datos"], correcta: 2, explicacion: "δ descuenta pequeñas desviaciones; λ es el umbral. Confundirlos tienta porque los dos son parámetros, pero cumplen roles distintos." },
    { q: "¿Cuál es una desventaja de que Page-Hinkley estime la media sobre la marcha?", opciones: ["Si el cambio llega muy temprano, la media ya lo incluye y le cuesta detectarlo","Que necesita fase I","Que no funciona con números negativos","Que es muy lento de calcular"], correcta: 0, explicacion: "La media va absorbiendo lo que llega. Pensar que necesita fase I tienta por los otros detectores, pero justamente no la necesita." },
    { q: "Tus residuos ya son estables y sin estacionalidad. ¿Qué detectores podés usar sobre ellos?", opciones: ["Solo Shewhart","Ninguno","Solo el GLR","Cualquiera de los anteriores: CUSUM, EWMA o Page-Hinkley"], correcta: 3, explicacion: "Con residuos estables vale todo lo visto. Pensar que solo sirve uno tienta, pero la elección depende del tipo de cambio y de si tenés línea base." },
    { q: "Medís el ARL0 de tu detector sobre la serie cruda y sobre los residuos estacionales. ¿Qué esperás?", opciones: ["El mismo ARL0","Un ARL0 mucho mayor sobre los residuos","Un ARL0 menor sobre los residuos","Que no se pueda medir"], correcta: 1, explicacion: "Al sacar el patrón, desaparecen las alarmas por estacionalidad. Esperar el mismo tienta porque el detector es igual, pero cambian los datos que mira." },
  ],
},
{
  id: "drift",
  icono: "🤖",
  titulo: "Drift en modelos de ML: PSI, KS y detectores secuenciales",
  nivel: "Avanzado",
  objetivos: [
    "Calcular el PSI y el estadístico KS entre una distribución de referencia y la actual, e interpretarlos con tamaño de efecto",
    "Implementar DDM sobre el flujo de errores de un modelo, con niveles de aviso y de drift",
    "Diseñar qué vigilar en un modelo en producción cuando las etiquetas llegan con demora",
  ],
  lecciones: [
    { titulo: "PSI y KS: comparar distribuciones", html: `
      <p class="idea">Un modelo aprende con una distribución de datos y en producción recibe otra que cambia con el tiempo: eso es el <strong>drift</strong>. Las dos medidas más usadas para compararlas son el PSI (índice de estabilidad de la población) y el estadístico KS (Kolmogorov-Smirnov).</p>
      <table>
        <tr><th>Tipo de drift</th><th>Qué cambia</th><th>Se ve sin etiquetas</th></tr>
        <tr><td>De datos (covariables)</td><td>La distribución de las variables de entrada</td><td>Sí</td></tr>
        <tr><td>De predicciones</td><td>La distribución de lo que predice el modelo</td><td>Sí</td></tr>
        <tr><td>De concepto</td><td>La relación entre entradas y resultado</td><td>No: necesita etiquetas</td></tr>
      </table>
      <pre><code>import numpy as np

def psi(ref, act, bins=10):
    cortes = np.quantile(ref, np.linspace(0, 1, bins + 1))
    cortes[0], cortes[-1] = -np.inf, np.inf
    r = np.histogram(ref, cortes)[0] / len(ref)
    a = np.histogram(act, cortes)[0] / len(act)
    r, a = np.clip(r, 1e-6, None), np.clip(a, 1e-6, None)
    return float(np.sum((a - r) * np.log(a / r)))

def ks(ref, act):
    todos = np.sort(np.concatenate([ref, act]))
    fr = np.searchsorted(np.sort(ref), todos, side="right") / len(ref)
    fa = np.searchsorted(np.sort(act), todos, side="right") / len(act)
    return float(np.max(np.abs(fr - fa)))

rng = np.random.default_rng(47)
ref = rng.normal(0, 1, 5000)
for nombre, act in [("sin cambio", rng.normal(0, 1, 5000)),
                    ("media +0.1", rng.normal(0.1, 1, 5000)),
                    ("media +0.5", rng.normal(0.5, 1, 5000)),
                    ("desvío x1.5", rng.normal(0, 1.5, 5000))]:
    print(f"{nombre:12s} PSI {psi(ref, act):.3f}   KS {ks(ref, act):.3f}")</code></pre>
      <pre><code>Salida:
sin cambio   PSI 0.005   KS 0.013
media +0.1   PSI 0.015   KS 0.051
media +0.5   PSI 0.260   KS 0.209
desvío x1.5  PSI 0.187   KS 0.105</code></pre>
      <p>Una regla práctica muy usada en la industria (sobre todo en riesgo de crédito) para el PSI: menos de 0,1 es estable, entre 0,1 y 0,25 es un cambio moderado y más de 0,25 es un cambio importante. No es una ley: es un punto de partida para calibrar con tu historia.</p>
      <p><strong>Cuidado con los valores p.</strong> Con 5.000 datos por lado, una prueba KS da "significativo" para diferencias minúsculas que no afectan al modelo. En monitoreo conviene mirar el tamaño del efecto (el propio estadístico KS o el PSI) y decidir qué magnitud importa, no si es "estadísticamente distinto".</p>
      <p>Por ejemplo, el cambio de desvío (x1,5) mueve poco la media, pero el PSI y el KS lo ven: por eso no alcanza con vigilar el promedio de cada variable.</p>
    ` },
    { titulo: "DDM: vigilar el error del modelo dato a dato", html: `
      <p class="idea">Cuando tenés etiquetas, lo más directo es vigilar el error del modelo. <strong>DDM</strong> (Drift Detection Method, Gama y otros, 2004) sigue la tasa de error acumulada y su desvío, guarda el mejor momento visto y avisa cuando el error se aleja de ese mínimo.</p>
      <pre><code>p(i) = tasa de error hasta el dato i,   s(i) = raíz(p(i)·(1 - p(i)) / i)
guardar p_min y s_min en el momento en que p + s fue mínimo
aviso  si p(i) + s(i) ≥ p_min + 2·s_min
drift  si p(i) + s(i) ≥ p_min + 3·s_min</code></pre>
      <pre><code>import numpy as np

def ddm(errores, minimo=30):
    p_min, s_min, aviso = np.inf, np.inf, None
    fallos = 0
    for i, e in enumerate(errores, start=1):
        fallos += e
        p = fallos / i
        s = np.sqrt(p * (1 - p) / i)
        if i &lt; minimo:
            continue
        if p + s &lt; p_min + s_min:
            p_min, s_min = p, s
        if p + s &gt;= p_min + 2 * s_min:
            aviso = i - 1 if aviso is None else aviso   # entra en zona de aviso
        else:
            aviso = None                                 # volvió a la normalidad: se borra el aviso
        if p + s &gt;= p_min + 3 * s_min:
            return aviso, i - 1
    return aviso, None

rng = np.random.default_rng(53)
errores = np.concatenate([rng.random(2000) &lt; 0.10, rng.random(2000) &lt; 0.18]).astype(int)
aviso, drift = ddm(errores)
print("error antes 10%, después 18%; el cambio está en el dato 2000")
print("aviso en el dato:", aviso, "| drift en el dato:", drift)</code></pre>
      <pre><code>Salida:
error antes 10%, después 18%; el cambio está en el dato 2000
aviso en el dato: 2201 | drift en el dato: 2462</code></pre>
      <p>Cómo se lee: DDM primero entra en zona de aviso (un buen momento para empezar a juntar datos nuevos para reentrenar) y después declara drift. En este ejemplo, el aviso llega en el dato 2201 y el drift en el 2462, 462 datos después del cambio. Si el error vuelve a bajar antes del drift, el aviso se borra: al principio, con pocos datos, la tasa fluctúa y puede tocar la zona de aviso por azar. Como usa la tasa acumulada desde el principio, cuanto más largo es el período estable, más tarda en reaccionar: por eso en la práctica se reinicia después de cada drift detectado.</p>
      <p><strong>ADWIN</strong> (Bifet y Gavaldà, 2007) resuelve ese problema de otra forma: mantiene una ventana de datos recientes de tamaño variable y la corta cuando dos partes de la ventana tienen medias distintas, con un umbral que controla la tasa de falsas alarmas. Así la ventana se achica sola después de un cambio y vuelve a crecer cuando todo está estable.</p>
      <table>
        <tr><th>Detector</th><th>Qué vigila</th><th>Punto fuerte</th></tr>
        <tr><td>DDM</td><td>Tasa de error acumulada</td><td>Simple, con aviso y drift</td></tr>
        <tr><td>ADWIN</td><td>Media de una ventana adaptativa</td><td>Se adapta solo al ritmo del cambio</td></tr>
        <tr><td>Page-Hinkley (módulo 6)</td><td>Desvío acumulado respecto de la media</td><td>Sin fase I</td></tr>
        <tr><td>CUSUM de Bernoulli (módulo 5)</td><td>Errores contra una tasa objetivo</td><td>Óptimo si conocés la tasa normal</td></tr>
      </table>
      <p>Por ejemplo, si conocés bien la tasa de error normal del modelo (de la validación), un CUSUM de Bernoulli con p0 = esa tasa suele detectar antes que DDM.</p>
    ` },
    { titulo: "Qué vigilar cuando las etiquetas llegan tarde", html: `
      <p class="idea">En muchos modelos la etiqueta llega días o meses después (si el cliente pagó el crédito, si la compra fue fraude). Mientras tanto, el drift de concepto queda invisible, y vigilás lo que sí tenés: las entradas, las predicciones y señales indirectas.</p>
      <p>La guía de Google sobre monitoreo de sistemas de ML en producción recomienda, entre otras cosas, validar los datos contra un esquema, comparar el entrenamiento con lo que llega en producción, vigilar por segmentos y controlar la edad del modelo (cuánto pasó desde el último reentrenamiento).</p>
      <table>
        <tr><th>Capa</th><th>Qué vigilar</th><th>Con qué</th></tr>
        <tr><td>Datos de entrada</td><td>Faltantes, rangos, esquema, distribución de cada variable</td><td>Reglas de validación y PSI por variable</td></tr>
        <tr><td>Predicciones</td><td>Distribución de los puntajes y de las clases predichas</td><td>PSI diario y CUSUM o EWMA sobre la proporción de cada clase</td></tr>
        <tr><td>Rendimiento (con demora)</td><td>Error cuando llegan las etiquetas</td><td>DDM, ADWIN o CUSUM de Bernoulli</td></tr>
        <tr><td>Segmentos</td><td>Lo mismo, por región, canal o tipo de cliente</td><td>El promedio puede esconder un segmento roto</td></tr>
        <tr><td>Operación</td><td>Edad del modelo, latencia, volumen de pedidos</td><td>Umbrales simples</td></tr>
      </table>
      <p>Un PSI diario es una serie más: podés aplicarle los detectores del curso. Por ejemplo, con un drift gradual de las predicciones:</p>
      <pre><code>import numpy as np

rng = np.random.default_rng(59)
ref = rng.beta(2, 5, 20000)                      # puntajes del modelo en validación
cortes = np.quantile(ref, np.linspace(0, 1, 11))
cortes[0], cortes[-1] = -np.inf, np.inf
r = np.histogram(ref, cortes)[0] / len(ref)

psis = []
for dia in range(40):
    corrimiento = 0.0 if dia &lt; 20 else 0.004 * (dia - 20)    # drift gradual desde el día 20
    act = np.clip(rng.beta(2, 5, 3000) + corrimiento, 0, 1)
    a = np.clip(np.histogram(act, cortes)[0] / len(act), 1e-6, None)
    psis.append(float(np.sum((a - r) * np.log(a / r))))

base = np.array(psis[:20])
lim = np.median(base) + 3 * 1.4826 * np.median(np.abs(base - np.median(base)))
z, lam = np.median(base), 0.3
for dia, v in enumerate(psis):
    z = lam * v + (1 - lam) * z
    if dia &gt;= 20 and z &gt; lim:
        print(f"EWMA del PSI pasa el límite en el día {dia} (PSI del día {v:.3f}, límite {lim:.3f})")
        break
print("PSI de los últimos 5 días:", [round(p, 3) for p in psis[-5:]])</code></pre>
      <pre><code>Salida:
EWMA del PSI pasa el límite en el día 24 (PSI del día 0.020, límite 0.007)
PSI de los últimos 5 días: [0.261, 0.273, 0.337, 0.415, 0.409]</code></pre>
      <p>Cómo se lee: el EWMA pasa el límite en el día 24, cuatro días después de que empieza el drift, cuando el PSI de ese día era apenas 0,020. Una regla "PSI &gt; 0,1" habría esperado bastante más: al final, el PSI diario ronda 0,4.</p>
      <p>Por ejemplo, el PSI de días estables no es cero: con muestras finitas siempre hay algo de diferencia. Por eso el límite sale de la historia (mediana más 3 MAD), no de la regla general.</p>
    ` },
  ],
  practica: [
    "Agregá al primer código un caso con 500 datos por lado sin cambio y otro con 50.000. Anotá el PSI y el KS de cada uno y explicá por qué cambian sin que haya drift.",
    "Corré DDM con un cambio de error de 10% a 13% y anotá en qué dato avisa y declara drift. Implementá un CUSUM de Bernoulli con p0 = 0,10 y p1 = 0,13 y compará cuándo alarma.",
    "En el último código, cambiá el corrimiento diario a 0,002 y anotá en qué día alarma el EWMA del PSI y en qué día el PSI de un día supera 0,1 por primera vez.",
  ],
  recursos: [
    { t: "Google: monitoreo de pipelines de ML en producción (en inglés)", url: "https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring" },
    { t: "Evidently: documentación de una herramienta abierta para vigilar datos y modelos (en inglés)", url: "https://docs.evidentlyai.com/" },
  ],
  quiz: [
    { q: "Tu modelo de crédito recibe hoy clientes más jóvenes que en el entrenamiento, pero la relación entre edad y pago no cambió. ¿Qué tipo de drift es?", opciones: ["Drift de concepto","Ninguno","Drift de datos (covariables)","Drift de etiquetas"], correcta: 2, explicacion: "Cambió la distribución de una entrada, no la relación con el resultado. Concepto tienta porque el modelo puede rendir distinto, pero ese drift es cuando cambia la relación misma." },
    { q: "¿Qué tipo de drift no podés ver sin etiquetas?", opciones: ["El de concepto: el cambio en la relación entre entradas y resultado","El de datos","El de predicciones","Ninguno"], correcta: 0, explicacion: "Para ver si la relación cambió necesitás saber el resultado real. El de predicciones tienta porque parece más profundo, pero se ve sin etiquetas." },
    { q: "Un PSI de 0,3 en una variable importante. Según la regla práctica de la industria, ¿qué es?", opciones: ["Estable","Un cambio moderado","Un error de cálculo","Un cambio importante, que conviene investigar"], correcta: 3, explicacion: "Más de 0,25 es un cambio importante en la regla práctica. Pensar que es moderado tienta si confundís los cortes, que son 0,1 y 0,25." },
    { q: "Con 50.000 datos por lado, la prueba KS da un valor p de 0,001 por una diferencia que no afecta al modelo. ¿Qué hacés?", opciones: ["Reentrenás el modelo enseguida","Mirás el tamaño del efecto y decidís qué magnitud importa","Bajás la muestra para que no dé significativo","Ignorás todas las variables"], correcta: 1, explicacion: "Con muestras grandes cualquier diferencia es significativa. Reentrenar enseguida tienta por el valor p, pero un cambio irrelevante no justifica el costo." },
    { q: "En la simulación, el cambio de desvío (x1,5) casi no movió la media. ¿Qué concluís?", opciones: ["Que ese cambio no importa","Que el PSI está mal","Que no alcanza con vigilar el promedio de cada variable: PSI y KS ven cambios de forma","Que hay que vigilar solo el desvío"], correcta: 2, explicacion: "Las distribuciones pueden cambiar sin mover la media. Vigilar solo el desvío tienta como conclusión, pero los cambios pueden ser de cualquier forma." },
    { q: "Tenés las etiquetas del día siguiente y querés detectar cuándo empeora el error del modelo, con un aviso previo. ¿Qué usás?", opciones: ["DDM, con sus niveles de aviso y de drift","PSI de las entradas","La regla de 3 desvíos sobre el puntaje","Nada hasta fin de mes"], correcta: 0, explicacion: "DDM vigila el error y da un aviso antes del drift. El PSI tienta porque detecta cambios, pero mira las entradas, no si el modelo se equivoca más." },
    { q: "Tu DDM tardó mucho en reaccionar después de 6 meses estables. ¿Por qué?", opciones: ["Porque el umbral es 3","Porque no hubo drift","Porque necesita más etiquetas","Porque usa la tasa acumulada desde el principio, que se mueve lento con mucha historia"], correcta: 3, explicacion: "Con mucha historia, la tasa acumulada casi no cambia. Culpar al umbral tienta, pero el problema es la memoria larga; se resuelve reiniciando o con ADWIN." },
    { q: "¿Qué hace ADWIN que no hace DDM?", opciones: ["Usa etiquetas del futuro","Usa una ventana reciente de tamaño variable que se achica sola después de un cambio","Vigila las entradas","No tiene falsas alarmas"], correcta: 1, explicacion: "La ventana adaptativa evita la memoria larga. Pensar que no tiene falsas alarmas tienta, pero su umbral las controla, no las elimina." },
    { q: "Si conocés bien la tasa de error normal del modelo por la validación, ¿qué detector suele avisar antes?", opciones: ["DDM","Un PSI mensual","Un CUSUM de Bernoulli con p0 igual a esa tasa","Mirar el error una vez por semana"], correcta: 2, explicacion: "Con la tasa objetivo conocida, el CUSUM es óptimo. DDM tienta porque es el clásico de drift, pero no aprovecha que ya sabés cuál es lo normal." },
    { q: "Tu modelo de fraude recibe las etiquetas a los 60 días. ¿Qué vigilás mientras tanto?", opciones: ["Las entradas, la distribución de las predicciones y los segmentos","Nada, hay que esperar las etiquetas","Solo la latencia","El error de hace 60 días como si fuera de hoy"], correcta: 0, explicacion: "Las predicciones y las entradas se ven en el momento. Esperar las etiquetas tienta porque son la verdad, pero 60 días de un modelo roto sin vigilar es mucho." },
    { q: "Tu modelo rinde bien en promedio, pero en una región empeoró mucho. ¿Qué te hubiera avisado?", opciones: ["Vigilar solo el promedio global","Un PSI de todas las variables juntas","Bajar el umbral global","Vigilar por segmentos, como recomienda la guía de Google"], correcta: 3, explicacion: "El promedio puede esconder un segmento roto. Bajar el umbral global tienta, pero llena de alarmas sin señalar dónde está el problema." },
    { q: "Si el PSI diario está lejos de 0,1 cuando empieza un drift gradual, ¿cómo lo detectás antes?", opciones: ["Esperando a que pase 0,1","Vigilando el PSI diario con un EWMA y un límite calibrado en días estables","Bajando la regla a 0,01 fija","Calculando el PSI una vez por mes"], correcta: 1, explicacion: "Un EWMA acumula la tendencia y el límite sale de tu historia. Bajar la regla a 0,01 tienta, pero el PSI de días estables ya fluctúa por ruido de muestreo y alarmaría siempre." },
  ],
},
{
  id: "experimentos",
  icono: "🧪",
  titulo: "Experimentos secuenciales: mirar sin hacer trampa",
  nivel: "Avanzado",
  objetivos: [
    "Medir por simulación cuánto infla los falsos positivos mirar un test A/B muchas veces con el umbral de siempre",
    "Calibrar umbrales para un número fijo de miradas (constantes o que se relajan con el tiempo)",
    "Implementar el mSPRT, una prueba que se puede mirar en cualquier momento sin perder el control del error",
  ],
  lecciones: [
    { titulo: "El problema de mirar antes de tiempo", html: `
      <p class="idea">En un test A/B, mirar los resultados todos los días y frenar apenas "da significativo" con el umbral de siempre (z &gt; 1,96, o p &lt; 0,05) infla mucho los falsos positivos. Es el mismo problema del módulo 0: cada mirada es una nueva oportunidad de alarmar por azar.</p>
      <p>Simulemos un <strong>test A/A</strong>: las dos versiones son iguales, así que cualquier "ganador" es un falso positivo.</p>
      <pre><code>import numpy as np

def falso_positivo(miradas, por_mirada, umbral, rng, corridas=2000):
    fp = 0
    for _ in range(corridas):
        a = rng.normal(0, 1, miradas * por_mirada)
        b = rng.normal(0, 1, miradas * por_mirada)
        for k in range(1, miradas + 1):
            n = k * por_mirada
            z = (b[:n].mean() - a[:n].mean()) / np.sqrt(2 / n)
            if abs(z) &gt; umbral:
                fp += 1
                break
    return fp / corridas

rng = np.random.default_rng(61)
for miradas in [1, 5, 20]:
    print(f"{miradas:&gt;2} miradas con |z| &gt; 1.96: falsos positivos {falso_positivo(miradas, 100, 1.96, rng):.3f}")</code></pre>
      <pre><code>Salida:
 1 miradas con |z| &gt; 1.96: falsos positivos 0.060
 5 miradas con |z| &gt; 1.96: falsos positivos 0.138
20 miradas con |z| &gt; 1.96: falsos positivos 0.245</code></pre>
      <p>Cómo se lee: con una sola mirada al final, los falsos positivos quedan cerca del 5% que promete el umbral (la diferencia es ruido de la simulación). Con 20 miradas, llegan a una proporción varias veces mayor. Y en la práctica es peor: si frenás cuando "da bien" y seguís cuando "da mal", estás eligiendo el momento a favor del resultado.</p>
      <table>
        <tr><th>Lo que hace el equipo</th><th>Qué pasa con el error</th></tr>
        <tr><td>Fija el tamaño de muestra y mira una vez al final</td><td>Queda en el 5%</td></tr>
        <tr><td>Mira todos los días con 1,96</td><td>Se multiplica</td></tr>
        <tr><td>Mira todos los días con un método secuencial</td><td>Queda en el 5%, y se puede frenar antes</td></tr>
      </table>
      <p>Por ejemplo, es habitual que una plataforma de experimentos muestre un valor p que se actualiza en vivo. Si ese valor p no es secuencial, mirarlo y frenar cuando baja de 0,05 es exactamente el problema de esta lección.</p>
    ` },
    { titulo: "Umbrales para un número fijo de miradas", html: `
      <p class="idea">Si sabés de antemano cuántas veces vas a mirar, podés usar un umbral más exigente en cada mirada para que el error total quede en 5%. Hay dos familias clásicas: umbral constante (estilo Pocock) y umbral que empieza muy exigente y se relaja (estilo O'Brien-Fleming).</p>
      <p>Los valores exactos están tabulados, pero se pueden calibrar por simulación. Para 5 miradas:</p>
      <pre><code>import numpy as np

def tasa_error(umbrales, por_mirada=100, corridas=6000, semilla=67):
    rng = np.random.default_rng(semilla)
    k = len(umbrales)
    fp = 0
    for _ in range(corridas):
        d = rng.normal(0, 1, k * por_mirada) - rng.normal(0, 1, k * por_mirada)
        for j in range(1, k + 1):
            n = j * por_mirada
            if abs(d[:n].mean() / np.sqrt(2 / n)) &gt; umbrales[j - 1]:
                fp += 1
                break
    return fp / corridas

K = 5
for c in [2.3, 2.41, 2.5]:
    print(f"constante {c}: error total {tasa_error([c] * K):.3f}")
for c in [1.95, 2.04, 2.1]:
    obf = [c * np.sqrt(K / j) for j in range(1, K + 1)]
    print(f"O'Brien-Fleming con c={c}: umbrales {[round(float(u), 2) for u in obf]} -&gt; error total {tasa_error(obf):.3f}")</code></pre>
      <pre><code>Salida:
constante 2.3: error total 0.063
constante 2.41: error total 0.049
constante 2.5: error total 0.036
O'Brien-Fleming con c=1.95: umbrales [4.36, 3.08, 2.52, 2.18, 1.95] -&gt; error total 0.061
O'Brien-Fleming con c=2.04: umbrales [4.56, 3.23, 2.63, 2.28, 2.04] -&gt; error total 0.048
O'Brien-Fleming con c=2.1: umbrales [4.7, 3.32, 2.71, 2.35, 2.1] -&gt; error total 0.040</code></pre>
      <p>Cómo se lee: con un umbral constante cercano a 2,41 en las 5 miradas, el error total queda cerca del 5%. Con el estilo O'Brien-Fleming, la primera mirada exige un z cercano a 4,6 (casi imposible por azar) y la última se parece a 1,96: es casi como una prueba al final, pero permite frenar temprano si el efecto es enorme.</p>
      <table>
        <tr><th>Estilo</th><th>Primeras miradas</th><th>Última mirada</th><th>Cuándo conviene</th></tr>
        <tr><td>Constante (Pocock)</td><td>Igual de exigentes</td><td>Más exigente que 1,96</td><td>Querés frenar temprano seguido</td></tr>
        <tr><td>Que se relaja (O'Brien-Fleming)</td><td>Muy exigentes</td><td>Casi 1,96</td><td>Querés casi la misma potencia que una prueba fija</td></tr>
      </table>
      <p>Por ejemplo, la limitación de los dos es que tenés que decidir de antemano cuántas veces vas a mirar y cuándo. Si querés mirar en cualquier momento, necesitás la herramienta de la próxima lección.</p>
    ` },
    { titulo: "mSPRT: valores p que se pueden mirar siempre", html: `
      <p class="idea">El <strong>mSPRT</strong> (SPRT de mezcla) es un SPRT para cuando no sabés el tamaño del efecto: promedia la razón de verosimilitud sobre muchos tamaños posibles. Johari y otros (2017) lo usaron para dar valores p "siempre válidos" en tests A/B: los podés mirar cuando quieras y el error total sigue controlado.</p>
      <p>Para la diferencia de medias entre B y A, con varianza conocida V de cada diferencia por par de usuarios y una mezcla normal de efectos con varianza τ²:</p>
      <pre><code>Λ(n) = raíz(V / (V + n·τ²)) · exp( n²·τ²·d̄² / (2·V·(V + n·τ²)) )
d̄ = diferencia de medias con n pares
rechazar H0 (no hay efecto) en cuanto Λ(n) ≥ 1/α</code></pre>
      <pre><code>import numpy as np

def msprt_rechaza(d, V=2.0, tau2=0.01, alfa=0.05):
    n = np.arange(1, len(d) + 1)
    dbar = np.cumsum(d) / n
    log_lam = 0.5 * np.log(V / (V + n * tau2)) + (n ** 2 * tau2 * dbar ** 2) / (2 * V * (V + n * tau2))
    cruces = np.flatnonzero(log_lam &gt;= np.log(1 / alfa))
    return int(cruces[0]) + 1 if len(cruces) else None

rng = np.random.default_rng(71)
fp = sum(msprt_rechaza(rng.normal(0, 1, 5000) - rng.normal(0, 1, 5000)) is not None for _ in range(2000))
print(f"A/A mirando después de cada par, 5000 pares: falsos positivos {fp / 2000:.3f}")

tiempos = [msprt_rechaza(rng.normal(0.1, 1, 5000) - rng.normal(0, 1, 5000)) for _ in range(500)]
detectados = [t for t in tiempos if t is not None]
print(f"efecto real de 0.1: detectado {len(detectados) / 500:.2f} de las veces, con una mediana de {int(np.median(detectados))} pares")</code></pre>
      <pre><code>Salida:
A/A mirando después de cada par, 5000 pares: falsos positivos 0.027
efecto real de 0.1: detectado 0.98 de las veces, con una mediana de 1510 pares</code></pre>
      <p>Cómo se lee: aunque se mira después de <em>cada</em> par de usuarios (5.000 miradas), los falsos positivos quedan por debajo del 5%. Y cuando hay un efecto real, lo detecta y frena antes del final en la mayoría de los casos. El precio: con la misma cantidad final de datos, una prueba fija bien hecha tiene algo más de potencia.</p>
      <table>
        <tr><th>Método</th><th>Mirar cuando quieras</th><th>Potencia al final</th></tr>
        <tr><td>Prueba fija</td><td>No</td><td>La máxima</td></tr>
        <tr><td>Miradas planificadas (Pocock, O'Brien-Fleming)</td><td>Solo en las fechas planificadas</td><td>Casi la máxima</td></tr>
        <tr><td>mSPRT</td><td>Sí, siempre</td><td>Un poco menor</td></tr>
      </table>
      <p>Por ejemplo, τ² es una elección: representa qué tamaños de efecto esperás. Un τ² chico favorece detectar efectos chicos con muchos datos; uno grande, efectos grandes rápido. Es la misma idea que elegir k en el CUSUM.</p>
    ` },
  ],
  practica: [
    "Corré el primer código con 50 miradas y anotá la tasa de falsos positivos. Calculá cuántas veces más que el 5% prometido es.",
    "Calibrá por simulación el umbral constante para 10 miradas que deja el error total cerca de 0,05. Anotá el valor.",
    "Probá el mSPRT con τ² = 0,001 y τ² = 0,1 para el efecto de 0,1. Anotá en cada caso la proporción de detecciones y la mediana de pares, y explicá cuál elegirías.",
  ],
  recursos: [
    { t: "NIST/SEMATECH e-Handbook: CUSUM y razón de verosimilitud (en inglés)", url: "https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc323.htm" },
    { t: "Libro: Introduction to Statistical Quality Control, de Douglas Montgomery (Wiley, en inglés)", url: "https://www.wiley.com/en-us/Introduction+to+Statistical+Quality+Control%2C+8th+Edition-p-9781119399308" },
  ],
  quiz: [
    { q: "Tu equipo mira un test A/B todos los días y lo frena apenas p < 0,05. ¿Qué pasa con los falsos positivos?", opciones: ["Quedan en 5%","Bajan, porque se mira más","Se multiplican: cada mirada es una nueva oportunidad de un falso positivo","Desaparecen con muestras grandes"], correcta: 2, explicacion: "Mirar muchas veces con el umbral de una sola mirada infla el error. Que bajan porque se mira más tienta, pero mirar más es justo lo que agrega oportunidades de error." },
    { q: "¿Qué es un test A/A y para qué sirve?", opciones: ["Comparar dos versiones idénticas: cualquier \"ganador\" es un falso positivo, y así se mide el error real","Un test con dos ganadores","Un test que siempre da significativo","Un test sin grupo de control"], correcta: 0, explicacion: "Con versiones iguales sabés que no hay efecto. Pensar que es un test con dos ganadores tienta por el nombre, pero sirve para medir falsos positivos." },
    { q: "Si sabés que vas a mirar exactamente 5 veces, ¿qué umbral constante deja el error total cerca de 5%?", opciones: ["1,96","1,645","5","Uno cercano a 2,41"], correcta: 3, explicacion: "Calibrado por simulación, un umbral constante de unos 2,41 reparte el 5% entre las 5 miradas. 1,96 tienta porque es el de siempre, pero es para una sola mirada." },
    { q: "Querés poder frenar temprano solo si el efecto es enorme, sin perder casi potencia al final. ¿Qué estilo usás?", opciones: ["Pocock: igual de exigente siempre","O'Brien-Fleming: muy exigente al principio y cerca de 1,96 al final","1,96 en todas las miradas","No mirar nunca"], correcta: 1, explicacion: "O'Brien-Fleming casi no gasta error en las primeras miradas. Pocock tienta por simple, pero exige más en la última mirada y pierde algo de potencia." },
    { q: "¿Cuál es la limitación de Pocock y O'Brien-Fleming?", opciones: ["Que no controlan el error","Que solo sirven para datos binarios","Hay que decidir de antemano cuántas veces y cuándo vas a mirar","Que no permiten frenar antes"], correcta: 2, explicacion: "Funcionan con un plan de miradas fijo. Pensar que no controlan el error tienta, pero lo controlan, siempre que respetes el plan." },
    { q: "Tu plataforma muestra un valor p que se actualiza en vivo y no es secuencial. ¿Qué hacés?", opciones: ["No frenás cuando baja de 0,05: usás un método secuencial o una prueba fija","Frenás apenas baja de 0,05","Lo mirás cada hora para no perderte nada","Esperás a que baje de 0,01 y frenás"], correcta: 0, explicacion: "Un valor p no secuencial mirado en vivo infla el error. Esperar 0,01 tienta como margen, pero sin calibrar no sabés cuánto error tenés." },
    { q: "¿Qué ofrece el mSPRT?", opciones: ["Más potencia que cualquier prueba fija","Ningún falso positivo","Un resultado sin datos","Valores p que se pueden mirar en cualquier momento sin perder el control del error"], correcta: 3, explicacion: "Es \"siempre válido\": el error total queda controlado aunque mires siempre. Más potencia tienta como promesa, pero con los mismos datos finales una prueba fija tiene algo más." },
    { q: "En la simulación, el mSPRT miró después de cada uno de 5.000 pares en un A/A. ¿Qué pasó con los falsos positivos?", opciones: ["Llegaron al 50%","Quedaron por debajo del 5%","Fueron exactamente 0","No se pudieron medir"], correcta: 1, explicacion: "Es la propiedad del mSPRT. Que lleguen al 50% tienta por lo que pasa con 1,96, pero acá el umbral 1/α está pensado para mirar siempre." },
    { q: "Si en el mSPRT usás un τ² grande, ¿qué esperás?", opciones: ["Detectar mejor los efectos chicos","Más falsos positivos","Detectar más rápido efectos grandes y peor los chicos","Que no cambie nada"], correcta: 2, explicacion: "τ² representa los tamaños de efecto esperados, como k en el CUSUM. Más falsos positivos tienta, pero el control del error vale para cualquier τ²." },
    { q: "Con la misma cantidad final de datos, ¿qué método tiene más potencia?", opciones: ["La prueba fija bien hecha","El mSPRT","Mirar con 1,96 todos los días","Pocock"], correcta: 0, explicacion: "La flexibilidad de mirar siempre tiene un precio en potencia. Mirar con 1,96 tienta porque \"detecta más\", pero eso es a costa de falsos positivos." },
    { q: "Tu equipo frena los tests cuando \"da bien\" y los deja seguir cuando \"da mal\". ¿Qué problema hay?", opciones: ["Ninguno, es eficiente","Que tarda mucho","Que pierde potencia","Elige el momento a favor del resultado, lo que infla todavía más los falsos positivos"], correcta: 3, explicacion: "Frenar según el resultado es una forma de mirar de más. Pensar que es eficiente tienta porque ahorra tiempo, pero sesga las decisiones." },
    { q: "Querés unir lo de este módulo con el monitoreo de métricas. ¿Qué tienen en común?", opciones: ["Nada","En los dos, cada mirada es una prueba y hay que controlar el error total con métodos secuenciales","Que los dos usan solo 1,96","Que los dos necesitan etiquetas"], correcta: 1, explicacion: "Experimentos y monitoreo son el mismo problema secuencial. Pensar que no tienen nada en común tienta porque se usan en equipos distintos, pero la estadística es la misma." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Producción y proyecto final: muchas series, ClickHouse y alertas",
  nivel: "Avanzado",
  objetivos: [
    "Controlar la tasa de falsos descubrimientos al vigilar cientos de series con Benjamini-Hochberg",
    "Separar el trabajo entre ClickHouse (agregar) y Python (detectar), guardando el estado del detector",
    "Diseñar, calibrar y evaluar con una rúbrica un sistema de detección para métricas reales",
  ],
  lecciones: [
    { titulo: "Muchas series: controlar los falsos descubrimientos", html: `
      <p class="idea">Con 200 series, una regla que da 1% de falsas alarmas por serie genera unas 2 alarmas falsas cada vez que corre. Corregir por <strong>Bonferroni</strong> (dividir α por la cantidad de series) es seguro pero muy exigente. <strong>Benjamini-Hochberg</strong> controla otra cosa, más útil en monitoreo: la proporción de alarmas que son falsas (FDR).</p>
      <pre><code>Benjamini-Hochberg con m series y nivel q:
1. ordenar los valores p de menor a mayor: p(1) ≤ ... ≤ p(m)
2. buscar el mayor i con p(i) ≤ (i/m)·q
3. alarmar en las series de p(1) a p(i)</code></pre>
      <pre><code>import numpy as np
from math import erf, sqrt

def p_dos_colas(z):
    return 2 * (1 - 0.5 * (1 + erf(abs(z) / sqrt(2))))

rng = np.random.default_rng(73)
m, q = 200, 0.05
z = rng.normal(0, 1, m)
reales = rng.choice(m, 8, replace=False)
z[reales] += 4.0                                       # 8 series con un cambio real
p = np.array([p_dos_colas(v) for v in z])

sin_corregir = np.flatnonzero(p &lt; 0.05)
bonferroni = np.flatnonzero(p &lt; 0.05 / m)
orden = np.argsort(p)
ok = np.flatnonzero(p[orden] &lt;= (np.arange(1, m + 1) / m) * q)
bh = orden[: ok.max() + 1] if len(ok) else np.array([], int)

for nombre, alarmas in [("sin corregir", sin_corregir), ("Bonferroni", bonferroni), ("Benjamini-Hochberg", bh)]:
    verdaderas = len(set(alarmas) &amp; set(reales))
    print(f"{nombre:19s} alarmas {len(alarmas):3d} | reales encontradas {verdaderas}/8 | falsas {len(alarmas) - verdaderas}")</code></pre>
      <pre><code>Salida:
sin corregir        alarmas  15 | reales encontradas 6/8 | falsas 9
Bonferroni          alarmas   3 | reales encontradas 3/8 | falsas 0
Benjamini-Hochberg  alarmas   4 | reales encontradas 4/8 | falsas 0</code></pre>
      <p>Cómo se lee: sin corregir, encuentra 6 de las 8 series con cambio real, pero mezcladas con 9 falsas: más de la mitad de la lista es ruido. Bonferroni no da ninguna falsa, pero encuentra solo 3. Benjamini-Hochberg encuentra 4, también sin falsas: un poco más que Bonferroni sin pagar en ruido. Cuantas más series con cambio real haya, más crece esa ventaja.</p>
      <table>
        <tr><th>Método</th><th>Controla</th><th>Cuándo</th></tr>
        <tr><td>Bonferroni</td><td>La probabilidad de al menos una falsa alarma</td><td>Pocas series, cada alarma es carísima</td></tr>
        <tr><td>Benjamini-Hochberg</td><td>La proporción de alarmas falsas</td><td>Muchas series, querés una lista para revisar</td></tr>
      </table>
      <p>Por ejemplo, para usarlo con CUSUM o EWMA necesitás un valor p por serie: se puede obtener por simulación (qué proporción de corridas sin cambio llegan a un estadístico tan alto) o usar el estadístico z de los residuos del día, como en este ejemplo.</p>
    ` },
    { titulo: "ClickHouse agrega, Python detecta", html: `
      <p class="idea">Una división de trabajo que escala bien: ClickHouse resume millones de eventos en métricas por hora (es lo que mejor hace), y un proceso en Python corre los detectores sobre esas series cortas, guardando el estado del detector entre corridas.</p>
      <p><strong>Importante:</strong> el SQL y el código de esta lección no se corren en este sitio, porque necesitan un servidor de ClickHouse. Están escritos con funciones de la documentación oficial de ClickHouse (enlazada en los recursos), pero revisalos y probalos en tu entorno antes de usarlos.</p>
      <p><strong>1. Agregar por hora en ClickHouse:</strong></p>
      <pre><code>SELECT
    toStartOfHour(ts)                AS hora,
    count()                          AS pedidos,
    countIf(estado = 'error')        AS errores,
    quantile(0.95)(latencia_ms)      AS latencia_p95
FROM eventos
WHERE ts &gt;= now() - INTERVAL 6 WEEK
GROUP BY hora
ORDER BY hora</code></pre>
      <p><strong>2. Precalcular con una vista materializada</strong>, para no recorrer los eventos crudos cada vez. Para conteos, una tabla SummingMergeTree suma sola las filas de la misma hora (al consultarla, igual conviene agrupar con sum, porque la fusión es eventual):</p>
      <pre><code>CREATE TABLE metricas_hora (hora DateTime, pedidos UInt64, errores UInt64)
ENGINE = SummingMergeTree ORDER BY hora;

CREATE MATERIALIZED VIEW mv_metricas_hora TO metricas_hora AS
SELECT toStartOfHour(ts) AS hora, count() AS pedidos, countIf(estado = 'error') AS errores
FROM eventos GROUP BY hora;</code></pre>
      <p><strong>3. Detectar en Python y guardar el estado.</strong> El CUSUM necesita recordar su suma entre corridas: se guarda por serie (por ejemplo, en una tabla ReplacingMergeTree que conserva la última versión por clave).</p>
      <pre><code>import clickhouse_connect

cliente = clickhouse_connect.get_client(host="...", username="...", password="...")
df = cliente.query_df("SELECT hora, sum(pedidos) AS pedidos, sum(errores) AS errores "
                      "FROM metricas_hora WHERE hora &gt;= now() - INTERVAL 1 DAY "
                      "GROUP BY hora ORDER BY hora")
# leer el estado guardado del detector, actualizarlo hora por hora con el CUSUM
# de tasa del módulo 5, alarmar si pasa h y guardar el estado nuevo</code></pre>
      <table>
        <tr><th>Parte</th><th>Dónde</th><th>Por qué</th></tr>
        <tr><td>Agregar eventos por hora y segmento</td><td>ClickHouse</td><td>Rápido sobre millones de filas</td></tr>
        <tr><td>Línea base estacional y residuos</td><td>ClickHouse o Python</td><td>Con funciones de ventana o con pandas</td></tr>
        <tr><td>CUSUM, EWMA, DDM, FDR</td><td>Python</td><td>Lógica secuencial con estado, fácil de probar</td></tr>
        <tr><td>Estado del detector</td><td>Una tabla</td><td>Para no recalcular desde cero en cada corrida</td></tr>
      </table>
      <p>Por ejemplo, Grafana tiene un conector oficial para ClickHouse: las mismas consultas agregadas sirven para el tablero, y el detector agrega la capa de alarmas encima.</p>
    ` },
    { titulo: "El proyecto final", html: `
      <p class="idea">El proyecto es armar un sistema de detección para 3 a 5 métricas reales (o, si no podés usar datos de tu trabajo, para series simuladas con estacionalidad), calibrado, evaluado y documentado.</p>
      <p><strong>Las partes:</strong></p>
      <ol>
        <li><strong>Elegir las métricas</strong> y, para cada una, qué cambio importa detectar (tamaño y dirección) y cuánto cuesta una falsa alarma.</li>
        <li><strong>Fase I:</strong> línea base con historia limpia; medir autocorrelación y estacionalidad (módulos 1 y 6).</li>
        <li><strong>Elegir el detector</strong> para cada métrica (CUSUM, EWMA, de conteos o de tasa, DDM) y justificarlo (módulos 2 a 5 y 7).</li>
        <li><strong>Calibrar</strong> por simulación o con remuestreo de residuos, a un ARL0 decidido según el presupuesto de falsas alarmas (módulos 0 y 3).</li>
        <li><strong>Evaluar</strong> con incidentes conocidos del pasado o con cambios inyectados: demora de detección y falsas alarmas reales.</li>
        <li><strong>Muchas series:</strong> si son decenas, definir cómo se controla el FDR (lección 1).</li>
        <li><strong>Documentar</strong> qué hacer ante cada alarma: a quién avisar, qué revisar y cuándo reiniciar o recalibrar.</li>
      </ol>
      <p><strong>Rúbrica</strong> (de 0 a 2 por criterio):</p>
      <table>
        <tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Línea base</td><td>Media y desvío de toda la serie</td><td>Fase I sin revisar autocorrelación</td><td>Fase I limpia, con estacionalidad y autocorrelación tratadas</td></tr>
        <tr><td>Elección del detector</td><td>Sin justificar</td><td>Justificado sin el tamaño de cambio</td><td>Justificado por tipo de dato y cambio objetivo</td></tr>
        <tr><td>Calibración</td><td>Umbrales por costumbre</td><td>ARL0 por fórmula</td><td>ARL0 por simulación o remuestreo, con su presupuesto</td></tr>
        <tr><td>Evaluación</td><td>Ninguna</td><td>Con datos simulados</td><td>Con incidentes reales o inyectados en datos reales</td></tr>
        <tr><td>Operación</td><td>Sin plan</td><td>Plan sin reinicio ni recalibración</td><td>Qué hacer, reinicio (FIR) y cuándo volver a fase I</td></tr>
      </table>
      <p>El proyecto está listo con <strong>8 o más</strong> sobre 10 y sin ningún 0.</p>
      <pre><code>import numpy as np

# Plantilla para evaluar un detector con cambios inyectados en una serie
def evaluar(detector, serie, inicio, tamano, repeticiones=200, semilla=79):
    rng = np.random.default_rng(semilla)
    demoras, falsas = [], 0
    for _ in range(repeticiones):
        x = serie + rng.normal(0, 1, len(serie))
        x[inicio:] += tamano
        t = detector(x)
        if t is None:
            demoras.append(len(serie) - inicio)
        elif t &lt; inicio:
            falsas += 1
        else:
            demoras.append(t - inicio)
    return np.median(demoras), falsas / repeticiones

def cusum(x, k=0.5, h=5.0):
    a = b = 0.0
    for t, v in enumerate(x):
        a, b = max(0.0, a + v - k), max(0.0, b - v - k)
        if a &gt; h or b &gt; h:
            return t
    return None

base = np.zeros(300)
demora, tasa_falsas = evaluar(cusum, base, 200, 1.0)
print(f"CUSUM: demora mediana {demora:.0f} datos | corridas con falsa alarma antes del cambio {tasa_falsas:.2f}")</code></pre>
      <pre><code>Salida:
CUSUM: demora mediana 7 datos | corridas con falsa alarma antes del cambio 0.34</code></pre>
      <p>Que un 34% de las corridas tenga una falsa alarma en los 200 datos previos al cambio es coherente con un ARL0 de unos 470: la probabilidad de aguantar 200 datos sin alarma ronda el 65%. Si eso es mucho para tu caso, subí h y volvé a medir.</p>
      <p>Por ejemplo, esta plantilla sirve para cualquier detector de los que armaste: reemplazá la serie base por tus residuos reales y el detector por el tuyo, y obtenés las dos métricas que pide la rúbrica.</p>
    ` },
  ],
  practica: [
    "Corré el primer código con 1.000 series y 20 cambios reales. Anotá alarmas, reales encontradas y falsas de cada método.",
    "Escribí la consulta de agregación por hora para una tabla de eventos de tu trabajo (o de ejemplo) y probala en tu servidor de ClickHouse. Anotá cuánto tarda y cuántas filas devuelve.",
    "Usá la plantilla evaluar con un EWMA calibrado y compará demora y falsas alarmas con el CUSUM. Anotá los dos resultados.",
    "Armá el proyecto completo y puntualo con la rúbrica. Anotá el puntaje de cada criterio y mejorá hasta llegar a 8 o más, sin ningún 0.",
  ],
  recursos: [
    { t: "ClickHouse: funciones de ventana (en inglés)", url: "https://clickhouse.com/docs/sql-reference/window-functions" },
    { t: "ClickHouse: vistas materializadas (en inglés)", url: "https://clickhouse.com/docs/materialized-view" },
    { t: "ClickHouse: función quantile (en inglés)", url: "https://clickhouse.com/docs/sql-reference/aggregate-functions/reference/quantile" },
    { t: "Grafana: conector de datos para ClickHouse (en inglés)", url: "https://grafana.com/grafana/plugins/grafana-clickhouse-datasource/" },
  ],
  quiz: [
    { q: "Vigilás 200 series y querés una lista de alarmas donde pocas sean falsas, sin perder muchas reales. ¿Qué usás?", opciones: ["Ninguna corrección","Bonferroni","Benjamini-Hochberg, que controla la proporción de alarmas falsas","Subir el umbral a 10 desvíos"], correcta: 2, explicacion: "BH equilibra encontrar las reales con pocas falsas. Bonferroni tienta por seguro, pero con muchas series se vuelve tan exigente que pierde cambios reales." },
    { q: "Tenés 3 series y cada falsa alarma despierta a alguien de madrugada. ¿Qué corrección conviene?", opciones: ["Bonferroni, que controla la probabilidad de al menos una falsa alarma","Ninguna","Benjamini-Hochberg","Bajar el umbral"], correcta: 0, explicacion: "Con pocas series y alarmas carísimas, controlar cualquier falsa alarma tiene sentido. BH tienta porque es más moderno, pero acepta una proporción de falsas." },
    { q: "En Benjamini-Hochberg con m series y nivel q, ¿contra qué se compara el valor p ordenado en el lugar i?", opciones: ["Contra q/m siempre","Contra q siempre","Contra i·q","Contra (i/m)·q"], correcta: 3, explicacion: "El umbral crece con la posición i. q/m siempre tienta porque es Bonferroni, pero BH es menos exigente para los siguientes valores p." },
    { q: "Querés aplicar Benjamini-Hochberg a series vigiladas con CUSUM. ¿Qué te falta?", opciones: ["Nada, el CUSUM ya da valores p","Un valor p por serie, por ejemplo por simulación del estadístico sin cambio","Etiquetas de cada serie","Un tablero en Grafana"], correcta: 1, explicacion: "BH trabaja con valores p. Pensar que el CUSUM ya los da tienta, pero da un estadístico; el valor p sale de su distribución sin cambio." },
    { q: "Tenés millones de eventos por hora. ¿Dónde agregás las métricas por hora?", opciones: ["En Python, bajando todos los eventos","En una planilla","En ClickHouse, que resume millones de filas muy rápido","En el navegador"], correcta: 2, explicacion: "ClickHouse está hecho para agregar mucho volumen. Bajar todo a Python tienta para tener todo en un lugar, pero mueve millones de filas sin necesidad." },
    { q: "¿Por qué conviene una vista materializada para las métricas por hora?", opciones: ["Para no recorrer los eventos crudos en cada consulta","Porque hace los detectores","Porque reemplaza a Python","Porque guarda el estado del CUSUM"], correcta: 0, explicacion: "La vista precalcula los agregados al insertar. Que haga los detectores tienta, pero solo agrega: la lógica secuencial sigue en Python." },
    { q: "Consultás una tabla SummingMergeTree y ves dos filas para la misma hora. ¿Qué hacés?", opciones: ["Borrás una fila","Concluís que hay datos duplicados","Cambiás de motor de tabla","Agrupás con sum en la consulta, porque la fusión de filas es eventual"], correcta: 3, explicacion: "SummingMergeTree suma cuando fusiona partes, en algún momento. Concluir que hay duplicados tienta, pero es el funcionamiento normal del motor." },
    { q: "Tu CUSUM corre una vez por hora en un proceso nuevo cada vez. ¿Qué necesita para no empezar de cero?", opciones: ["Recalcular desde el inicio de la historia cada hora","Guardar su estado (las sumas) por serie entre corridas","Nada, el CUSUM no tiene estado","Un umbral más bajo"], correcta: 1, explicacion: "El CUSUM depende de su suma anterior. Recalcular toda la historia tienta por simple, pero es lento y cambia el resultado si cambia la ventana." },
    { q: "El SQL de la lección no se pudo probar en el sitio. ¿Qué hacés antes de usarlo?", opciones: ["Lo usás tal cual en producción","Lo descartás","Lo revisás con la documentación oficial y lo probás en tu servidor","Le pedís a la IA que confirme que anda"], correcta: 2, explicacion: "Todo código sin probar se prueba en tu entorno. Pedirle a la IA que confirme tienta por rápido, pero puede decir que anda sin haberlo corrido." },
    { q: "En tu proyecto, los umbrales son \"3 desvíos porque siempre se usó\". ¿Cuánto sacás en Calibración?", opciones: ["0","2","1","Depende del detector"], correcta: 0, explicacion: "Umbrales por costumbre son el 0 de la rúbrica. Pensar que 3 desvíos es un estándar aceptado tienta, pero no dice nada sobre tu ARL0 real." },
    { q: "Querés evaluar tu detector con datos reales. ¿Qué hacés?", opciones: ["Esperás un incidente real","Lo evaluás solo con datos normales simulados","Contás cuántas veces alarmó el mes pasado","Inyectás cambios conocidos en tus residuos reales y medís demora y falsas alarmas"], correcta: 3, explicacion: "Los cambios inyectados en datos reales dan las dos medidas de la rúbrica. Contar las alarmas del mes pasado tienta, pero no sabés cuáles eran reales." },
    { q: "Tu proyecto tiene 9 puntos, pero 0 en Operación. ¿Está listo?", opciones: ["Sí, tiene 9","No: tiene que tener 8 o más y ningún 0","Sí, la operación es secundaria","No, tiene que tener 10"], correcta: 1, explicacion: "Sin plan de operación, una alarma no sirve de nada. 9 puntos tienta como aprobado, pero el criterio que falta es el que decide si el sistema se usa." },
  ],
},
];
