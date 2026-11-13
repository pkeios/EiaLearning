// Temario del curso "Finanzas personales con números". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js finanzas-personales y node tools/metodologia.js finanzas-personales
window.TEMARIO = [
{
  id: "presupuesto",
  icono: "📒",
  titulo: "Tu presupuesto: saber adónde va la plata",
  nivel: "Básico",
  objetivos: [
    "Registrar un mes de ingresos y gastos, separando gastos fijos y variables",
    "Armar un presupuesto mensual con categorías y compararlo con lo que gastaste de verdad",
    "Usar una regla práctica de reparto como punto de partida y ajustarla a tu realidad",
  ],
  lecciones: [
    { titulo: "Primero, anotar", html: `
      <p class="idea">No se puede ordenar lo que no se ve. El primer paso de las finanzas personales es anotar durante un mes todo lo que entra y todo lo que sale, aunque sea un café. Casi todos se sorprenden con lo que descubren.</p>
      <p>Los programas de educación financiera del Banco Central (BCRA) empiezan justamente por ahí: el presupuesto personal y los tipos de gastos.</p>
      <table>
        <tr><th>Tipo</th><th>Qué es</th><th>Ejemplos</th></tr>
        <tr><td><strong>Ingresos</strong></td><td>Todo lo que entra</td><td>Sueldo, changas, una beca, una asignación, ventas</td></tr>
        <tr><td><strong>Gastos fijos</strong></td><td>Se repiten todos los meses con un monto parecido</td><td>Alquiler, expensas, servicios, cuota del celular, transporte</td></tr>
        <tr><td><strong>Gastos variables</strong></td><td>Cambian de mes a mes</td><td>Comida, salidas, ropa, regalos</td></tr>
        <tr><td><strong>Gastos hormiga</strong></td><td>Gastos chicos y frecuentes que no se notan</td><td>Café, golosinas, envíos, suscripciones que no usás</td></tr>
      </table>
      <p><strong>Cómo anotar sin abandonar a la semana:</strong></p>
      <ul>
        <li>Una planilla simple (el curso de Excel de este sitio te enseña), una nota en el celular o un cuaderno: lo que te resulte más fácil.</li>
        <li>Anotá en el momento, o a la noche mirando los pagos del día en la app del banco o la billetera virtual.</li>
        <li>Para el efectivo, guardá los tickets o anotá apenas pagás.</li>
      </ul>
      <pre><code>Fecha   Concepto           Categoría     Monto
02/03   Alquiler           Vivienda      $ 280.000
02/03   Café               Hormiga       $   2.500
03/03   Supermercado       Comida        $  45.000
04/03   Carga SUBE         Transporte    $  10.000</code></pre>
      <p>Por ejemplo, mucha gente descubre al final del mes que los gastos hormiga suman más que un servicio. No se trata de dejar de tomar café, sino de decidir sabiendo cuánto cuesta.</p>
      <p><strong>Importante:</strong> este curso te ayuda a entender y a hacer cuentas. No es un asesoramiento financiero: para decisiones grandes (una inversión importante, un crédito hipotecario, una deuda que no podés pagar) consultá con un profesional o con los organismos oficiales.</p>` },
    { titulo: "El presupuesto mensual", html: `
      <p class="idea">El <strong>presupuesto</strong> es un plan: cuánto pensás gastar en cada categoría el mes que viene. Al final del mes lo comparás con lo que gastaste de verdad. La diferencia te dice dónde ajustar.</p>
      <pre><code>Categoría       Previsto      Gastado       Diferencia
Vivienda        $ 280.000     $ 280.000     $       0
Comida          $ 180.000     $ 205.000     -$ 25.000   ← me pasé
Transporte      $  40.000     $  36.000     $   4.000
Servicios       $  60.000     $  58.000     $   2.000
Salidas         $  50.000     $  70.000     -$ 20.000   ← me pasé
Ahorro          $  90.000     $  51.000     -$ 39.000   ← no llegué
Total           $ 700.000     $ 700.000</code></pre>
      <p>Cómo se lee: el total es el mismo, porque se gastó todo lo que entró. Lo que se gastó de más en comida y salidas salió del ahorro. Ese es el patrón más común: el ahorro es "lo que sobra", y casi nunca sobra.</p>
      <p><strong>Tres reglas para que funcione:</strong></p>
      <ol>
        <li><strong>El ahorro es una categoría más</strong>, no lo que sobra. Lo vas a ver en el módulo 2.</li>
        <li><strong>Usá números reales</strong> de tu registro del mes anterior, no deseos.</li>
        <li><strong>Revisalo cada mes,</strong> sobre todo con inflación (módulo 1): los montos quedan viejos rápido.</li>
      </ol>
      <p>Por ejemplo, si todos los meses te pasás en comida, no es un fracaso: es información. Quizás el presupuesto de comida era irreal y hay que subirlo, bajando otra categoría.</p>` },
    { titulo: "Una regla práctica para repartir", html: `
      <p class="idea">Una regla práctica muy difundida para empezar es la <strong>50/30/20</strong>: 50% para necesidades, 30% para gustos y 20% para ahorro o pagar deudas. No es una ley: es un punto de partida para pensar el reparto.</p>
      <table>
        <tr><th>Parte</th><th>Qué incluye</th><th>Con $ 700.000 de ingreso</th></tr>
        <tr><td>Necesidades (50%)</td><td>Vivienda, comida básica, servicios, transporte, salud</td><td>$ 350.000</td></tr>
        <tr><td>Gustos (30%)</td><td>Salidas, ropa que no es necesaria, suscripciones</td><td>$ 210.000</td></tr>
        <tr><td>Ahorro o deudas (20%)</td><td>Fondo de emergencia, metas, pagar deudas</td><td>$ 140.000</td></tr>
      </table>
      <p><strong>En la realidad, muchas veces no cierra:</strong> si el alquiler solo ya se lleva el 40% del ingreso, las necesidades pasan del 50%. Está bien ajustar: 70/20/10 o lo que permita tu situación. Lo importante es que el ahorro tenga un lugar, aunque sea chico.</p>
      <p><strong>Si los ingresos varían</strong> (changas, ventas, trabajo por temporada), presupuestá con el ingreso de un mes flojo, no con el de un mes bueno. Lo que entra de más en los meses buenos va al ahorro.</p>
      <pre><code>Ingresos de los últimos 6 meses:
$ 500.000 · $ 800.000 · $ 450.000 · $ 900.000 · $ 600.000 · $ 520.000
Presupuestá con un mes flojo: alrededor de $ 450.000 a $ 500.000
Lo que entre por encima en un mes bueno → ahorro</code></pre>
      <p>Por ejemplo, con ingresos variables, el fondo de emergencia del módulo 2 es todavía más importante: es lo que te deja pasar un mes flojo sin endeudarte.</p>` },
  ],
  practica: [
    "Anotá durante 7 días todos tus gastos, con fecha, concepto, categoría y monto. Sumá cuánto gastaste en gastos hormiga y anotalo.",
    "Armá tu presupuesto del mes que viene con al menos 5 categorías, incluyendo el ahorro. Al final del mes, completá la columna Gastado y anotá en qué 2 categorías te pasaste.",
    "Calculá qué porcentaje de tus ingresos va a necesidades, a gustos y a ahorro. Anotá tus porcentajes y compará con la regla 50/30/20.",
  ],
  recursos: [
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
    { t: "Gobierno de Argentina: manual de inclusión financiera (PDF)", url: "https://argentina.gob.ar/sites/default/files/manual_tti_inclusion_financiera.pdf" },
  ],
  quiz: [
    { q: "Querés ordenar tus finanzas y no sabés por dónde empezar. ¿Qué hacés primero?", opciones: ["Abrís una cuenta de inversión","Sacás un préstamo para ordenar","Anotás durante un mes todo lo que entra y lo que sale","Cortás todos los gastos de golpe"], correcta: 2, explicacion: "No se puede ordenar lo que no se ve. Cortar todo de golpe tienta por decidido, pero sin saber adónde va la plata recortás lo que no hacía falta y lo abandonás." },
    { q: "¿Cuál de estos es un gasto fijo?", opciones: ["El alquiler","Una salida al cine","Un regalo de cumpleaños","Una golosina"], correcta: 0, explicacion: "Se repite todos los meses con un monto parecido. El regalo tienta porque hay cumpleaños todos los meses, pero el monto y la frecuencia varían." },
    { q: "Al final del mes ves que los cafés y las golosinas suman más que la luz. ¿Qué son?", opciones: ["Gastos fijos","Ingresos","Ahorro","Gastos hormiga"], correcta: 3, explicacion: "Son chicos y frecuentes, y no se notan. Pensar que son fijos tienta porque se repiten, pero no tienen un monto fijo ni son obligatorios." },
    { q: "Tu presupuesto dice \"ahorro: lo que sobre\". ¿Qué pasa casi siempre?", opciones: ["Sobra mucho","No sobra nada: el ahorro tiene que ser una categoría planificada","Se ahorra más que planificando","Da igual"], correcta: 1, explicacion: "Los gastos crecen hasta ocupar lo que hay. Pensar que va a sobrar tienta por optimismo, pero el ejemplo de la lección muestra que el ahorro es lo primero que se come." },
    { q: "Todos los meses te pasás en comida. ¿Qué concluís?", opciones: ["Que fracasaste","Que hay que dejar de comer","Que el presupuesto de comida era irreal: lo ajustás con tus números reales","Que hay que dejar de anotar"], correcta: 2, explicacion: "Pasarte siempre es información, no un fracaso. Dejar de anotar tienta para no sentirte mal, pero perdés justo lo que te muestra dónde ajustar." },
    { q: "Tu ingreso es de $ 700.000. ¿Cuánto va al ahorro según la regla 50/30/20?", opciones: ["$ 140.000","$ 350.000","$ 210.000","$ 70.000"], correcta: 0, explicacion: "El 20% de 700.000 es 140.000. $ 210.000 tienta porque es otra cifra de la tabla, pero es el 30% de los gustos." },
    { q: "Tu alquiler ya se lleva el 40% del ingreso y la regla 50/30/20 no te cierra. ¿Qué hacés?", opciones: ["Dejás de pagar el alquiler","Abandonás el presupuesto","Sacás un préstamo para llegar al 50%","Ajustás los porcentajes a tu realidad, manteniendo un lugar para el ahorro aunque sea chico"], correcta: 3, explicacion: "La regla es un punto de partida, no una ley. Abandonar el presupuesto tienta porque no cierra, pero un presupuesto ajustado sirve igual." },
    { q: "Hacés changas y tus ingresos varían mucho. ¿Con qué ingreso presupuestás?", opciones: ["Con el mejor mes","Con el de un mes flojo, y lo que entra de más va al ahorro","Con el promedio de los meses buenos","Sin presupuesto"], correcta: 1, explicacion: "Presupuestar con un mes bueno te deja corto en los flojos. El promedio tienta por razonable, pero en los meses de abajo del promedio no te alcanza." },
    { q: "¿Para qué comparás lo previsto con lo gastado al final del mes?", opciones: ["Para sentirte culpable","No sirve para nada","Para ver dónde te pasaste y ajustar el próximo presupuesto","Para cambiar lo que anotaste"], correcta: 2, explicacion: "La diferencia muestra dónde ajustar. Cambiar lo anotado tienta para que cierre, pero así perdés la información real." },
    { q: "En tu presupuesto gastaste todo lo que entró, pero te pasaste en salidas. ¿De dónde salió esa plata?", opciones: ["De otra categoría, casi siempre del ahorro","De ningún lado","Del sueldo del mes que viene, sin consecuencias","De un error de cuenta"], correcta: 0, explicacion: "Si el total es el mismo, lo que se gasta de más en algo sale de otra cosa. Pensar que no sale de ningún lado tienta, pero la plata es una sola." },
    { q: "Hay inflación y tu presupuesto es de hace seis meses. ¿Qué hacés?", opciones: ["Lo dejás igual","Lo tirás","Lo dividís por dos","Lo revisás con los precios de ahora"], correcta: 3, explicacion: "Con inflación los montos quedan viejos rápido. Dejarlo igual tienta porque ya está armado, pero vas a pasarte en todas las categorías." },
    { q: "¿Este curso reemplaza a un asesor financiero para una inversión grande?", opciones: ["Sí, alcanza con el curso","No: ayuda a entender y a hacer cuentas, y para decisiones grandes conviene consultar a un profesional","Sí, si usás la IA","No hace falta nadie"], correcta: 1, explicacion: "Entender las cuentas te ayuda a preguntar mejor. Usar la IA tienta como reemplazo, pero puede tener datos viejos y no conoce tu situación." },
  ],
},
{
  id: "inflacion",
  icono: "📈",
  titulo: "Inflación: cuando la plata vale menos",
  nivel: "Básico",
  objetivos: [
    "Explicar qué es la inflación y cómo la mide el INDEC con el índice de precios al consumidor",
    "Calcular la pérdida de poder de compra y la tasa real de una inversión o un aumento",
    "Comparar precios y salarios de meses distintos sin engañarte por los números",
  ],
  lecciones: [
    { titulo: "Qué es la inflación", html: `
      <p class="idea">La <strong>inflación</strong> es la suba general de los precios. Cuando hay inflación, con la misma plata comprás menos cosas: tu plata pierde <strong>poder de compra</strong>.</p>
      <p>En Argentina, la mide el INDEC (el Instituto Nacional de Estadística y Censos) con el <strong>índice de precios al consumidor</strong> (IPC): sigue los precios de una canasta de bienes y servicios que compran los hogares (comida, ropa, transporte, alquiler, salud, educación) y publica cuánto subieron cada mes.</p>
      <table>
        <tr><th>Concepto</th><th>Qué significa</th></tr>
        <tr><td>Inflación mensual</td><td>Cuánto subieron los precios en un mes</td></tr>
        <tr><td>Inflación interanual</td><td>Cuánto subieron en los últimos 12 meses</td></tr>
        <tr><td>Inflación acumulada</td><td>Cuánto subieron desde enero hasta ese mes</td></tr>
      </table>
      <p><strong>La inflación se acumula, no se suma.</strong> Si los precios suben 3% un mes y 3% el siguiente, en dos meses no subieron 6%, sino un poco más, porque el segundo aumento se aplica sobre precios que ya habían subido:</p>
      <pre><code>Precio inicial:        $ 1.000
Después de un mes:     $ 1.000 × 1,03 = $ 1.030
Después de dos meses:  $ 1.030 × 1,03 = $ 1.060,90
Subió 6,09%, no 6%</code></pre>
      <p>Con pocos meses la diferencia es chica, pero con muchos meses o con inflaciones altas se vuelve grande. Es la misma idea del interés compuesto que vas a ver en el módulo 3.</p>
      <p>Por ejemplo, el IPC es un promedio: tu inflación personal puede ser distinta si gastás mucho en algo que subió más que el promedio (por ejemplo, alquiler o medicamentos).</p>` },
    { titulo: "Poder de compra y tasa real", html: `
      <p class="idea">Si tu sueldo sube 30%, pero los precios suben 40%, en realidad perdiste. Para saber si ganaste o perdiste, hay que calcular la <strong>tasa real</strong>: cuánto creció algo descontando la inflación.</p>
      <p><strong>Poder de compra.</strong> Con inflación del 30% en un año, $ 100.000 de hoy compran lo que $ 76.923 compraban hace un año:</p>
      <pre><code>100.000 / 1,30 = 76.923</code></pre>
      <p><strong>La tasa real</strong> se calcula así (no es una resta):</p>
      <pre><code>tasa real = (1 + aumento) / (1 + inflación) - 1

Sueldo +40%, inflación 30%:  1,40 / 1,30 - 1 = 7,69%   → ganaste poder de compra
Sueldo +30%, inflación 40%:  1,30 / 1,40 - 1 = -7,14%  → perdiste poder de compra
Plazo fijo 3% mensual, inflación 2,5% mensual: 1,03 / 1,025 - 1 = 0,49% por mes</code></pre>
      <p>Con números chicos, la resta da casi lo mismo (3% − 2,5% = 0,5%). Con números grandes, la resta engaña: 40% − 30% = 10%, pero la tasa real es 7,69%.</p>
      <table>
        <tr><th>Si la tasa real es...</th><th>Quiere decir</th></tr>
        <tr><td>Positiva</td><td>Ganaste poder de compra</td></tr>
        <tr><td>Cero</td><td>Quedaste igual</td></tr>
        <tr><td>Negativa</td><td>Perdiste poder de compra, aunque el número haya subido</td></tr>
      </table>
      <p>Por ejemplo, un ahorro guardado en efectivo "debajo del colchón" tiene una tasa real negativa igual a la inflación: con 30% de inflación anual, pierde casi una cuarta parte de su poder de compra en un año.</p>` },
    { titulo: "Comparar precios en el tiempo", html: `
      <p class="idea">Con inflación, comparar números de meses distintos engaña. "Este año gané más que el año pasado" puede ser falso si los precios subieron más que tu ingreso. Para comparar, hay que llevar todo a pesos de un mismo momento.</p>
      <p><strong>Llevar un monto a pesos de hoy:</strong> multiplicás por el aumento de los precios desde entonces. Por ejemplo, si gastabas $ 500.000 en el súper hace un año y la inflación del año fue 30%, hoy necesitarías $ 650.000 para comprar lo mismo.</p>
      <pre><code>500.000 × 1,30 = 650.000
Si hoy gastás $ 600.000 en el súper → en realidad comprás menos que antes</code></pre>
      <table>
        <tr><th>Situación</th><th>Comparación engañosa</th><th>Comparación correcta</th></tr>
        <tr><td>Sueldo</td><td>"Gano el doble que hace dos años"</td><td>¿Subió más que la inflación de esos dos años?</td></tr>
        <tr><td>Precio de algo</td><td>"Está más caro que el año pasado"</td><td>¿Subió más o menos que el promedio?</td></tr>
        <tr><td>Ahorro</td><td>"Tengo más pesos que antes"</td><td>¿Esos pesos compran más que antes?</td></tr>
      </table>
      <p><strong>Dónde mirar los datos:</strong> el INDEC publica el IPC todos los meses en su página. Usá los datos oficiales, no los que circulan en redes: es fácil encontrar números viejos o inventados.</p>
      <p>Por ejemplo, para negociar un aumento, llevá el dato del IPC de los últimos 12 meses y calculá la tasa real de tu sueldo: un argumento con números oficiales vale más que "todo está más caro".</p>` },
  ],
  practica: [
    "Buscá en la página del INDEC la inflación de los últimos 12 meses y anotala. Calculá cuánto poder de compra perdió un monto de $ 100.000 en ese período.",
    "Calculá la tasa real de tu ingreso (o de un ingreso de ejemplo) del último año con la fórmula de la lección. Anotá si ganaste o perdiste poder de compra.",
    "Buscá el precio actual de 3 productos que comprás seguido y, si tenés un ticket viejo, el precio de hace un tiempo. Calculá cuánto subió cada uno y comparalo con la inflación del período.",
  ],
  recursos: [
    { t: "INDEC: índice de precios al consumidor", url: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-5-31" },
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
  ],
  quiz: [
    { q: "Tu tía dice que \"hay inflación porque sube la yerba\". ¿Qué le explicás?", opciones: ["Que tiene razón","Que la inflación es que sube el dólar","Que la inflación es la suba general de los precios, no la de un solo producto","Que la inflación es que bajan los sueldos"], correcta: 2, explicacion: "Un producto puede subir por su cuenta. Que la inflación es el dólar tienta porque se mencionan juntos, pero es la suba del conjunto de precios." },
    { q: "¿Qué organismo mide la inflación oficial en Argentina?", opciones: ["El INDEC, con el índice de precios al consumidor","El BCRA","Cada supermercado","ARCA"], correcta: 0, explicacion: "El INDEC publica el IPC todos los meses. El BCRA tienta porque se ocupa de la moneda, pero la medición la hace el INDEC." },
    { q: "Los precios suben 3% un mes y 3% el siguiente. ¿Cuánto subieron en los dos meses?", opciones: ["Exactamente 6%","3%","9%","Un poco más de 6%: 6,09%"], correcta: 3, explicacion: "La inflación se acumula: el segundo aumento se aplica sobre precios que ya subieron. 6% tienta porque es la suma, pero la suma subestima." },
    { q: "Tu sueldo subió 30% y la inflación del año fue 40%. ¿Qué pasó con tu poder de compra?", opciones: ["Subió 30%","Bajó: la tasa real es de -7,14%","Se mantuvo","Bajó 10% exacto"], correcta: 1, explicacion: "1,30 / 1,40 - 1 da -7,14%. -10% tienta porque es la resta, pero la tasa real se calcula dividiendo." },
    { q: "Tu sueldo subió 40% y la inflación fue 30%. ¿Cuál es la tasa real?", opciones: ["10%","70%","7,69%","1,4%"], correcta: 2, explicacion: "1,40 / 1,30 - 1 da 7,69%. 10% tienta porque es la resta, que con números grandes engaña." },
    { q: "Con inflación anual del 30%, ¿cuánto compran hoy $ 100.000 en pesos de hace un año?", opciones: ["Lo que compraban $ 76.923","Lo que compraban $ 70.000","Lo mismo","Lo que compraban $ 130.000"], correcta: 0, explicacion: "100.000 / 1,30 = 76.923. $ 70.000 tienta porque es restar el 30%, pero el poder de compra se calcula dividiendo." },
    { q: "Guardás tus ahorros en efectivo en casa durante un año con 30% de inflación. ¿Qué tasa real tienen?", opciones: ["Cero, porque no los tocaste","Positiva","Depende del billete","Negativa: pierden poder de compra"], correcta: 3, explicacion: "Los billetes son los mismos, pero compran menos. Pensar que es cero tienta porque la cantidad de pesos no cambia, pero el poder de compra sí." },
    { q: "Si un amigo dice \"gano el doble que hace dos años\", ¿qué le preguntás?", opciones: ["Cuánto gasta en café","Si su sueldo subió más que la inflación de esos dos años","En qué trabaja","Nada, ganar el doble es siempre bueno"], correcta: 1, explicacion: "Con inflación, el doble de pesos puede comprar menos. Que ganar el doble es siempre bueno tienta, pero depende de cuánto subieron los precios." },
    { q: "Gastabas $ 500.000 en el súper hace un año y la inflación fue 30%. Hoy gastás $ 600.000. ¿Qué concluís?", opciones: ["Que comprás más, porque gastás más","Que comprás lo mismo","Que comprás menos que antes: necesitarías $ 650.000 para comprar lo mismo","Que el súper te cobra mal"], correcta: 2, explicacion: "500.000 × 1,30 = 650.000. Pensar que comprás más tienta porque el número subió, pero subió menos que los precios." },
    { q: "Si gastás mucho en medicamentos, que subieron más que el promedio, ¿tu inflación personal es igual al IPC?", opciones: ["No: puede ser mayor, porque el IPC es un promedio de una canasta","Sí, siempre es igual","Es siempre menor","La inflación personal no existe"], correcta: 0, explicacion: "El IPC promedia muchos gastos. Pensar que siempre es igual tienta porque es el dato oficial, pero tu canasta puede ser distinta." },
    { q: "Querés el dato de inflación de los últimos 12 meses. ¿Dónde lo buscás?", opciones: ["En un video de redes","En un grupo de WhatsApp","Le preguntás a la IA","En la página del INDEC"], correcta: 3, explicacion: "El INDEC publica el dato oficial. La IA tienta por rápida, pero puede tener datos viejos o inventarlos." },
    { q: "Tenés que pedir un aumento. ¿Qué argumento es más fuerte?", opciones: ["\"Todo está más caro\"","El dato del IPC de los últimos 12 meses y la tasa real de tu sueldo","\"Mi vecino gana más\"","\"Lo necesito\""], correcta: 1, explicacion: "Los números oficiales son difíciles de discutir. \"Todo está más caro\" tienta porque es lo que sentís, pero no dice cuánto." },
  ],
},
{
  id: "ahorro",
  icono: "🐷",
  titulo: "Ahorrar: el fondo de emergencia y las metas",
  nivel: "Básico",
  objetivos: [
    "Calcular el tamaño de tu fondo de emergencia y un plan para juntarlo",
    "Ahorrar primero (pagarte a vos mismo) y automatizarlo",
    "Elegir dónde guardar el ahorro según para qué y para cuándo lo necesitás",
  ],
  lecciones: [
    { titulo: "El fondo de emergencia", html: `
      <p class="idea">El <strong>fondo de emergencia</strong> es plata guardada solo para imprevistos: se rompe la heladera, perdés un trabajo, te enfermás. Es lo que te deja pasar un mal momento sin endeudarte con tarjeta o con préstamos caros.</p>
      <p>Una recomendación muy difundida en educación financiera es juntar entre <strong>3 y 6 meses de gastos fijos</strong>. Es un objetivo, no un punto de partida: se junta de a poco.</p>
      <pre><code>Gastos fijos por mes: $ 350.000
Fondo de 3 meses: 3 × 350.000 = $ 1.050.000
Fondo de 6 meses: 6 × 350.000 = $ 2.100.000</code></pre>
      <table>
        <tr><th>Tu situación</th><th>Fondo sugerido</th></tr>
        <tr><td>Ingresos estables, sin personas a cargo</td><td>Más cerca de 3 meses</td></tr>
        <tr><td>Ingresos variables (changas, ventas, temporada)</td><td>Más cerca de 6 meses</td></tr>
        <tr><td>Personas a cargo o un solo ingreso en la casa</td><td>Más cerca de 6 meses</td></tr>
      </table>
      <p><strong>Si te parece imposible,</strong> empezá por una meta chica: el equivalente a un mes de gastos, o incluso un monto para la emergencia más probable (una reparación). Cada peso del fondo es un peso que no vas a pedir prestado a tasas altas.</p>
      <p><strong>Qué no es una emergencia:</strong> unas vacaciones, un celular nuevo que querés, una oferta. Para eso son las metas de la lección 3. Si usás el fondo, la prioridad es volver a llenarlo.</p>
      <p>Por ejemplo, si juntás $ 50.000 por mes, un fondo de un mes de gastos fijos ($ 350.000) te lleva 7 meses. Parece mucho, pero en un año ya tenés casi dos meses de colchón.</p>` },
    { titulo: "Ahorrar primero", html: `
      <p class="idea">El truco más efectivo para ahorrar es invertir el orden: en vez de ahorrar lo que sobra a fin de mes, separás el ahorro apenas cobrás. A esto se le dice <strong>pagarte a vos mismo primero</strong>.</p>
      <table>
        <tr><th>Así no</th><th>Así sí</th></tr>
        <tr><td>Cobro → gasto → ahorro lo que sobra (casi nunca sobra)</td><td>Cobro → separo el ahorro → gasto lo que queda</td></tr>
      </table>
      <p><strong>Automatizalo:</strong> si tu banco o billetera virtual lo permite, programá una transferencia automática a otra cuenta o a un "objetivo de ahorro" el mismo día que cobrás. Lo que no ves, no lo gastás.</p>
      <p><strong>Cuánto:</strong> un porcentaje fijo del ingreso, aunque sea chico (5% o 10%), funciona mejor que un monto que te parece "lo que se pueda". Cuando tu ingreso sube, subí el porcentaje antes de subir los gastos.</p>
      <pre><code>Ingreso: $ 700.000
Ahorro del 10%, separado el día de cobro: $ 70.000
En 12 meses: 12 × 70.000 = $ 840.000 (sin contar intereses)</code></pre>
      <p><strong>Pequeños cambios que suman:</strong> revisar las suscripciones que no usás, comparar precios antes de comprar algo caro, llevar vianda algunos días. No hace falta hacer todo: elegí uno y medí cuánto ahorrás en un mes.</p>
      <p>Por ejemplo, si tu ingreso es variable, ahorrá un porcentaje de cada cobro, no un monto fijo por mes: así ahorrás más en los meses buenos y no te ahogás en los flojos.</p>` },
    { titulo: "Metas y dónde guardar", html: `
      <p class="idea">Además del fondo de emergencia, conviene ahorrar para <strong>metas</strong> concretas: algo que querés comprar o hacer. Una meta clara (qué, cuánto y para cuándo) es mucho más fácil de cumplir que "ahorrar para algo".</p>
      <pre><code>Meta: una notebook para estudiar
Precio: $ 900.000 · Para dentro de 10 meses
Ahorro necesario: 900.000 / 10 = $ 90.000 por mes
(con inflación, el precio va a subir: revisá la meta cada mes)</code></pre>
      <p><strong>Dónde guardar depende de para qué y para cuándo:</strong></p>
      <table>
        <tr><th>Para qué</th><th>Necesitás</th><th>Opciones típicas</th></tr>
        <tr><td>Fondo de emergencia</td><td>Disponible enseguida y sin riesgo de perder</td><td>Cuenta que pague intereses, plazo fijo corto, fondos de liquidez inmediata (módulo 6)</td></tr>
        <tr><td>Meta de pocos meses</td><td>Seguridad, con algo de rendimiento</td><td>Plazo fijo, cuenta remunerada</td></tr>
        <tr><td>Meta de años</td><td>Que le gane a la inflación en el largo plazo</td><td>Inversiones del módulo 6, con más riesgo</td></tr>
      </table>
      <p>La regla de fondo: <strong>cuanto antes necesitás la plata, menos riesgo podés correr.</strong> La plata de la emergencia no se pone en algo que puede bajar justo cuando la necesitás.</p>
      <p><strong>Guardá en entidades reguladas:</strong> bancos y billeteras virtuales que operan bajo las normas del BCRA, o inversiones con agentes registrados en la CNV. Si alguien te ofrece guardar tu plata con un rendimiento altísimo y garantizado, es estafa (el curso de seguridad digital de este sitio tiene un módulo sobre eso).</p>
      <p>Por ejemplo, si tu meta de la notebook está a 10 meses, un plazo fijo que se renueva cada mes te deja la plata disponible a tiempo y con algún rendimiento.</p>` },
  ],
  practica: [
    "Sumá tus gastos fijos de un mes y calculá tu fondo de emergencia de 3 y de 6 meses. Anotá los dos montos y una meta chica para empezar.",
    "Programá (o planificá) una transferencia automática de ahorro el día que cobrás, con un porcentaje fijo. Anotá el porcentaje y cuánto suma en 12 meses.",
    "Elegí una meta concreta con precio y plazo. Calculá cuánto tenés que ahorrar por mes y anotá dónde vas a guardar esa plata y por qué.",
  ],
  recursos: [
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
    { t: "BCRA: recomendaciones para evitar estafas virtuales", url: "https://www.bcra.gob.ar/noticias/recomendaciones-del-bcra-para-evitar-estafas-virtuales/" },
  ],
  quiz: [
    { q: "Se te rompe la heladera y no tenés ahorros. ¿Qué te hubiera evitado endeudarte con la tarjeta?", opciones: ["Una inversión en acciones","Un presupuesto más largo","Un fondo de emergencia","Una tarjeta con más límite"], correcta: 2, explicacion: "El fondo de emergencia es justo para imprevistos. Más límite en la tarjeta tienta como solución, pero es deuda, y cara." },
    { q: "Tus gastos fijos son $ 350.000 por mes. ¿Cuánto es un fondo de emergencia de 3 meses?", opciones: ["$ 1.050.000","$ 350.000","$ 2.100.000","$ 700.000"], correcta: 0, explicacion: "3 × 350.000 = 1.050.000. $ 2.100.000 tienta porque está en la lección, pero es el de 6 meses." },
    { q: "Tus ingresos son variables. ¿Qué tamaño de fondo de emergencia te conviene?", opciones: ["Más cerca de 1 mes","No necesitás fondo","Exactamente 2 semanas","Más cerca de 6 meses de gastos fijos"], correcta: 3, explicacion: "Con ingresos que varían, los meses flojos son más probables. Menos fondo tienta porque cuesta juntarlo, pero quedás más expuesto." },
    { q: "Hay una oferta de un celular que querés. ¿Usás el fondo de emergencia?", opciones: ["Sí, es una buena oportunidad","No: no es una emergencia; para eso se ahorra con una meta aparte","Sí, después lo devolvés","Sí, si el descuento es grande"], correcta: 1, explicacion: "El fondo es para imprevistos. Usarlo porque después lo devolvés tienta, pero si llega la emergencia antes, no lo tenés." },
    { q: "Siempre ahorrás \"lo que sobra a fin de mes\" y nunca sobra. ¿Qué cambiás?", opciones: ["Gastás más rápido","Esperás a ganar más","Separás el ahorro apenas cobrás, antes de gastar","Dejás de anotar los gastos"], correcta: 2, explicacion: "Pagarte primero invierte el orden. Esperar a ganar más tienta, pero los gastos suelen crecer con el ingreso." },
    { q: "¿Por qué conviene automatizar el ahorro el día de cobro?", opciones: ["Porque lo que no ves en tu cuenta de gastos, no lo gastás","Porque el banco te regala plata","Porque es obligatorio","Porque así no hay inflación"], correcta: 0, explicacion: "La transferencia automática te saca la tentación. Pensar que evita la inflación tienta, pero solo separa la plata: no la protege por sí sola." },
    { q: "Ahorrás el 10% de $ 700.000 cada mes. ¿Cuánto juntás en un año, sin contar intereses?", opciones: ["$ 70.000","$ 700.000","$ 8.400.000","$ 840.000"], correcta: 3, explicacion: "12 × 70.000 = 840.000. $ 700.000 tienta porque es el ingreso de un mes, pero el ahorro es el 10% durante 12 meses." },
    { q: "Tenés ingresos variables y querés ahorrar. ¿Qué conviene?", opciones: ["Un monto fijo alto todos los meses","Un porcentaje de cada cobro, no un monto fijo por mes","Ahorrar solo en diciembre","No ahorrar hasta tener ingresos fijos"], correcta: 1, explicacion: "El porcentaje se adapta solo a lo que entra. Un monto fijo alto tienta por disciplina, pero en un mes flojo te deja sin plata para lo básico." },
    { q: "Querés una notebook de $ 900.000 en 10 meses. ¿Cuánto tenés que ahorrar por mes?", opciones: ["$ 9.000","$ 900.000","$ 90.000, y revisarlo cada mes por la inflación","$ 45.000"], correcta: 2, explicacion: "900.000 / 10 = 90.000. Olvidarse de la inflación tienta porque la cuenta da justo, pero el precio va a subir." },
    { q: "¿Dónde guardás el fondo de emergencia?", opciones: ["Donde esté disponible enseguida y sin riesgo de perder, como una cuenta que pague intereses o un plazo fijo corto","En acciones, para que crezca más","En una inversión a 5 años","Prestado a un conocido"], correcta: 0, explicacion: "La emergencia no avisa. Acciones tientan porque pueden rendir más, pero pueden estar abajo justo cuando necesitás la plata." },
    { q: "Te ofrecen guardar tu plata con un rendimiento altísimo y garantizado. ¿Qué concluís?", opciones: ["Que es una gran oportunidad","Que conviene poner un poco para probar","Que es seguro si te muestran ganancias de otros","Que es muy probablemente una estafa"], correcta: 3, explicacion: "Nadie puede garantizar rendimientos altísimos. Probar con poco tienta, pero muchas estafas pagan al principio para que pongas más." },
    { q: "Según la regla de fondo de la lección, ¿qué relación hay entre el plazo y el riesgo?", opciones: ["Cuanto antes la necesitás, más riesgo conviene","Cuanto antes necesitás la plata, menos riesgo podés correr","No tienen relación","Siempre conviene el mayor riesgo"], correcta: 1, explicacion: "La plata de corto plazo no puede esperar a que se recupere una caída. Más riesgo tienta por el rendimiento, pero el tiempo para recuperarse es lo que falta." },
  ],
},
{
  id: "interes",
  icono: "🧮",
  titulo: "Interés simple, compuesto y las tasas",
  nivel: "Intermedio",
  objetivos: [
    "Calcular interés simple y compuesto, y explicar por qué el compuesto crece cada vez más rápido",
    "Pasar de una tasa nominal anual (TNA) a una tasa efectiva anual (TEA)",
    "Estimar en cuánto tiempo se duplica una plata con la regla del 72",
  ],
  lecciones: [
    { titulo: "Interés simple y compuesto", html: `
      <p class="idea">El <strong>interés</strong> es lo que se paga por usar plata ajena: lo cobrás cuando prestás o ahorrás, y lo pagás cuando pedís prestado. Hay dos formas de calcularlo, y la diferencia se vuelve enorme con el tiempo.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo funciona</th></tr>
        <tr><td><strong>Simple</strong></td><td>El interés se calcula siempre sobre el monto inicial</td></tr>
        <tr><td><strong>Compuesto</strong></td><td>El interés se suma al monto y el siguiente interés se calcula sobre todo: interés sobre interés</td></tr>
      </table>
      <p>Con $ 100.000 al 3% por mes:</p>
      <pre><code>Meses   Interés simple   Interés compuesto
12      $ 136.000        $ 142.576
24      $ 172.000        $ 203.279
60      $ 280.000        $ 589.160

simple:     100.000 × (1 + 0,03 × meses)
compuesto:  100.000 × 1,03 ^ meses</code></pre>
      <p>Al principio la diferencia es chica. Con los años, el compuesto se dispara: a 60 meses es más del doble que el simple. Ese efecto juega a tu favor cuando ahorrás y en tu contra cuando debés (módulo 4).</p>
      <p>El capítulo de finanzas del libro abierto <em>Matemáticas universitarias para la vida cotidiana</em> (LibreTexts) explica estas fórmulas con más ejemplos, en castellano.</p>
      <p>Por ejemplo, la inflación del módulo 1 también se acumula de forma compuesta: es la misma cuenta, pero con precios en vez de ahorros.</p>` },
    { titulo: "TNA, TEA y la tasa por período", html: `
      <p class="idea">Los bancos publican sus tasas de distintas formas, y con nombres que parecen iguales. Las dos más comunes son la <strong>TNA</strong> (tasa nominal anual) y la <strong>TEA</strong> (tasa efectiva anual). La que dice cuánto ganás o pagás de verdad en un año es la TEA.</p>
      <table>
        <tr><th>Tasa</th><th>Qué es</th></tr>
        <tr><td>TNA</td><td>Una tasa "de referencia" anual que se divide por la cantidad de períodos del año</td></tr>
        <tr><td>Tasa por período</td><td>La TNA dividida por los períodos: por ejemplo, TNA / 12 para un mes</td></tr>
        <tr><td>TEA</td><td>Lo que realmente crece la plata en un año si reinvertís los intereses de cada período</td></tr>
      </table>
      <pre><code>TEA = (1 + TNA / períodos) ^ períodos - 1

Plazo fijo mensual con TNA 30%:
  tasa del mes = 30% / 12 = 2,5%
  TEA = (1 + 0,025) ^ 12 - 1 = 34,49%

Con TNA 36%:  TEA = (1 + 0,03) ^ 12 - 1 = 42,58%</code></pre>
      <p>La TEA es mayor que la TNA porque incluye el interés compuesto de reinvertir cada mes. Para comparar dos opciones, compará siempre la misma tasa: TEA con TEA, o tasa mensual con tasa mensual.</p>
      <p><strong>Para créditos se usa otra:</strong> el CFT (costo financiero total), que suma la tasa, los seguros, las comisiones y los impuestos. Es la que importa para saber cuánto te cuesta un préstamo (módulo 4).</p>
      <p>Por ejemplo, una billetera virtual que paga "TNA 30%" por la plata guardada te da, si dejás los intereses adentro todo el año, un 34,49% efectivo. Para saber si le ganás a la inflación, compará esa TEA con la inflación anual (módulo 1).</p>` },
    { titulo: "La regla del 72", html: `
      <p class="idea">Una regla práctica para hacer cuentas mentales: si una plata crece a una tasa de r por ciento por período, se duplica en aproximadamente <strong>72 / r</strong> períodos. Sirve para tener una idea rápida sin calculadora.</p>
      <pre><code>Al 6% anual:  72 / 6 = 12 años para duplicarse (la cuenta exacta da 11,9)
Al 3% mensual: 72 / 3 = 24 meses
Al 2% mensual: 72 / 2 = 36 meses</code></pre>
      <p>Es una aproximación: funciona bien con tasas de entre 2% y 15% por período. Para tasas muy altas, hacé la cuenta exacta con la fórmula del interés compuesto.</p>
      <table>
        <tr><th>Uso</th><th>Ejemplo</th></tr>
        <tr><td>Ahorro</td><td>¿En cuánto se duplica lo que guardé?</td></tr>
        <tr><td>Deuda</td><td>¿En cuánto se duplica lo que debo si no pago?</td></tr>
        <tr><td>Inflación</td><td>¿En cuánto se duplican los precios? Con 3% mensual, en unos 24 meses</td></tr>
      </table>
      <p><strong>La regla también da miedo, y está bien:</strong> una deuda de tarjeta que crece al 6% por mes se duplica en unos 12 meses si no se paga. Es la razón por la que el módulo 4 insiste en no pagar solo el mínimo.</p>
      <p>Por ejemplo, si una inversión promete "duplicar tu plata en 2 meses", la regla del 72 te dice que necesitaría un 36% por mes: muchísimo más de lo que paga cualquier inversión seria. Es una señal clara de estafa.</p>` },
  ],
  practica: [
    "Calculá con una calculadora o una planilla cuánto valen $ 50.000 al 2% mensual en 12 y en 36 meses, con interés simple y compuesto. Anotá los cuatro resultados.",
    "Buscá la TNA que paga un plazo fijo o una cuenta remunerada de tu banco o billetera. Calculá su TEA y comparala con la inflación anual del INDEC. Anotá si le gana.",
    "Usá la regla del 72 para estimar en cuánto se duplica una deuda al 5% mensual. Después comprobalo con la fórmula del compuesto y anotá la diferencia.",
  ],
  recursos: [
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
  ],
  quiz: [
    { q: "Ahorrás $ 100.000 al 3% mensual y reinvertís los intereses. ¿Cuánto tenés a los 12 meses?", opciones: ["$ 136.000","$ 103.000","$ 142.576","$ 400.000"], correcta: 2, explicacion: "Con interés compuesto, 100.000 × 1,03^12 = 142.576. $ 136.000 tienta porque es el resultado simple, pero ahí no se reinvierten los intereses." },
    { q: "¿Qué tiene de especial el interés compuesto?", opciones: ["Que se calcula sobre el monto más los intereses ya ganados: interés sobre interés","Que siempre es más bajo que el simple","Que solo existe en los bancos","Que no cambia con el tiempo"], correcta: 0, explicacion: "El interés de cada período se suma y genera más interés. Pensar que es más bajo tienta por el nombre complicado, pero con el tiempo es mucho mayor." },
    { q: "A los 60 meses, el compuesto da más del doble que el simple. ¿Qué concluís?", opciones: ["Que el simple es mejor","Que hay un error de cuenta","Que son iguales en el largo plazo","Que el tiempo hace que el compuesto se dispare"], correcta: 3, explicacion: "La diferencia crece con cada período. Sospechar un error tienta porque la diferencia es enorme, pero es justo el efecto del compuesto." },
    { q: "Un plazo fijo mensual tiene TNA 30%. ¿Cuál es su TEA si reinvertís cada mes?", opciones: ["30%","34,49%","2,5%","360%"], correcta: 1, explicacion: "(1 + 0,30/12)^12 − 1 da 34,49%. 30% tienta porque es el número publicado, pero no incluye reinvertir los intereses." },
    { q: "Tenés que comparar dos cuentas: una dice TNA y la otra TEA. ¿Qué hacés?", opciones: ["Comparás los números como están","Elegís la del número más alto","Pasás las dos a la misma tasa (por ejemplo TEA) antes de comparar","Elegís la del número más bajo"], correcta: 2, explicacion: "TNA y TEA no se comparan directamente. Elegir el número más alto tienta, pero una TEA de 33% puede ser mejor que una TNA de 31%." },
    { q: "Querés saber cuánto te cuesta de verdad un préstamo. ¿Qué tasa mirás?", opciones: ["El CFT, costo financiero total","La TNA","La tasa de inflación","La tasa del plazo fijo"], correcta: 0, explicacion: "El CFT suma tasa, seguros, comisiones e impuestos. La TNA tienta porque es la que se publicita, pero no incluye todos los costos." },
    { q: "Una cuenta paga TEA 34,49% y la inflación del año fue 40%. ¿Qué pasó con tu ahorro?", opciones: ["Ganó 34,49% de poder de compra","Quedó igual","Ganó más que la inflación","Perdió poder de compra, porque la TEA quedó debajo de la inflación"], correcta: 3, explicacion: "La tasa real es negativa. Pensar que ganaste tienta porque tenés más pesos, pero esos pesos compran menos." },
    { q: "Según la regla del 72, ¿en cuánto se duplica una plata al 6% anual?", opciones: ["En 6 años","En unos 12 años","En 72 años","En 1 año"], correcta: 1, explicacion: "72 / 6 = 12. 6 años tienta porque es el número de la tasa, pero hay que dividir." },
    { q: "Si una deuda de tarjeta crece al 6% mensual y no pagás, ¿en cuánto se duplica, según la regla del 72?", opciones: ["En 6 años","En 72 meses","En unos 12 meses","Nunca"], correcta: 2, explicacion: "72 / 6 = 12 meses. 6 años tienta si confundís meses con años, pero la tasa es mensual." },
    { q: "Una inversión promete \"duplicar tu plata en 2 meses\". ¿Qué te dice la regla del 72?", opciones: ["Que necesitaría un 36% mensual: una señal clara de estafa","Que es una inversión normal","Que conviene probar","Que la regla no sirve"], correcta: 0, explicacion: "72 / 2 = 36% por mes, muchísimo más de lo que paga una inversión seria. Probar con poco tienta, pero es el anzuelo típico." },
    { q: "¿Para qué tasas funciona bien la regla del 72?", opciones: ["Para cualquier tasa, exacta","Solo para tasas de 72%","Solo para tasas negativas","Para tasas de entre 2% y 15% por período, aproximadamente"], correcta: 3, explicacion: "Es una aproximación. Pensar que es exacta tienta por lo simple, pero con tasas muy altas se aleja de la cuenta real." },
    { q: "Con inflación de 3% mensual, ¿en cuánto tiempo se duplican los precios, según la regla del 72?", opciones: ["En 3 meses","En unos 24 meses","En 72 meses","En 12 meses"], correcta: 1, explicacion: "72 / 3 = 24 meses. 12 meses tienta porque sumando 3% doce veces da 36%, lejos de duplicar, pero la regla mide cuándo se duplica." },
  ],
},
{
  id: "credito",
  icono: "💳",
  titulo: "Tarjetas, cuotas y préstamos",
  nivel: "Intermedio",
  objetivos: [
    "Calcular cuánto cuesta pagar solo el mínimo de la tarjeta y armar un plan para salir",
    "Comparar contado con descuento y cuotas sin interés teniendo en cuenta la inflación",
    "Leer un préstamo: CFT, cuota, plazo y total a devolver, con las preguntas que sugiere el BCRA",
  ],
  lecciones: [
    { titulo: "La tarjeta y el pago mínimo", html: `
      <p class="idea">La tarjeta de crédito es útil si pagás el total del resumen todos los meses. Se vuelve una trampa cuando pagás solo el <strong>pago mínimo</strong>: el resto queda como deuda con intereses muy altos, y esos intereses generan más intereses.</p>
      <p>Mirá un ejemplo calculado mes a mes, con una deuda de $ 300.000 y un interés de ejemplo de 7% mensual (las tasas reales cambian: mirá las de tu tarjeta en el resumen):</p>
      <pre><code>Pagando solo el mínimo (10% del saldo, con un piso de $ 5.000):
  tardás 77 meses (más de 6 años) y pagás en total $ 922.322

Pagando $ 30.000 fijos por mes:
  tardás 18 meses y pagás en total $ 534.009</code></pre>
      <p>Pagar solo el mínimo cuesta casi $ 400.000 más y lleva más de cuatro veces más tiempo. El mínimo está calculado para que la deuda baje muy despacio.</p>
      <table>
        <tr><th>En el resumen, mirá</th><th>Para qué</th></tr>
        <tr><td>Saldo total a pagar</td><td>Lo que tenés que pagar para no generar intereses</td></tr>
        <tr><td>Pago mínimo</td><td>Lo mínimo para no estar en mora; el resto genera intereses</td></tr>
        <tr><td>Tasas de interés (TNA, TEA y CFT)</td><td>Cuánto te cobran por lo que no pagás</td></tr>
        <tr><td>Fecha de vencimiento</td><td>Pagar tarde suma intereses punitorios (por atraso)</td></tr>
      </table>
      <p><strong>Las reglas de oro:</strong> pagá el total si podés; si no podés, pagá lo más que puedas por encima del mínimo; y no sigas usando la tarjeta mientras tenés deuda en ella.</p>
      <p>Por ejemplo, el adelanto de efectivo con tarjeta suele tener intereses desde el primer día y comisiones: es de las formas más caras de conseguir plata.</p>` },
    { titulo: "Contado o cuotas", html: `
      <p class="idea">"Doce cuotas sin interés" suena siempre conveniente, y con inflación muchas veces lo es: pagás más adelante con pesos que valen menos. Pero si te ofrecen un buen descuento por pagar de contado, hay que hacer la cuenta.</p>
      <p>La forma de comparar es calcular el <strong>valor presente</strong> de las cuotas: cuánto valen hoy esos pagos futuros, descontando la inflación (o la tasa que ganarías ahorrando esa plata).</p>
      <pre><code>Un producto: $ 120.000 en 6 cuotas sin interés de $ 20.000,
o al contado con descuento.
Con inflación de 3% mensual, las 6 cuotas valen hoy:
  20.000/1,03 + 20.000/1,03² + ... + 20.000/1,03⁶ = $ 108.344

Si el contado es de $ 100.000 → conviene el contado
Si el contado es de $ 115.000 → convienen las cuotas</code></pre>
      <table>
        <tr><th>Conviene...</th><th>Cuando</th></tr>
        <tr><td>Cuotas sin interés</td><td>No hay descuento por contado (o es chico) y la inflación es alta</td></tr>
        <tr><td>Contado</td><td>El descuento es mayor que lo que te ahorra la inflación en las cuotas</td></tr>
        <tr><td>Ninguna de las dos</td><td>Si la cuota no entra en tu presupuesto o es algo que no necesitás</td></tr>
      </table>
      <p><strong>Cuidado con acumular cuotas:</strong> cada compra en cuotas parece chica, pero se suman. Anotá en tu presupuesto cuánto vas a pagar de cuotas cada mes de los próximos meses: es un gasto fijo más.</p>
      <p>Por ejemplo, "cuotas sin interés" no siempre es sin costo: fijate que el precio en cuotas sea el mismo que el de contado y que el CFT del plan sea 0%.</p>` },
    { titulo: "Préstamos: leer antes de firmar", html: `
      <p class="idea">Un préstamo personal puede ayudar o hundirte. El BCRA publicó una guía con datos para revisar antes de pedir un crédito, y el más importante es el <strong>CFT</strong>, el costo financiero total: suma intereses, seguros, comisiones y otros cargos.</p>
      <p>Según la guía del BCRA, que publicaron varios medios, antes de firmar revisá:</p>
      <ul>
        <li>La tasa de interés, y si es fija o variable.</li>
        <li>El CFT.</li>
        <li>La cantidad de cuotas y el valor de cada una.</li>
        <li>El monto total que vas a devolver.</li>
        <li>Las comisiones y qué pasa si te atrasás.</li>
      </ul>
      <p><strong>El plazo engaña:</strong> un plazo más largo baja la cuota, pero sube mucho el total. Con un préstamo de $ 500.000 al 5% mensual de ejemplo (sistema francés, la forma más común: cuotas iguales):</p>
      <pre><code>Plazo      Cuota       Total a devolver   Intereses
12 meses   $ 56.413    $ 676.952          $ 176.952
24 meses   $ 36.235    $ 869.651          $ 369.651</code></pre>
      <p>Duplicar el plazo baja la cuota un 36%, pero duplica los intereses. La pregunta no es solo "¿me entra la cuota?", sino "¿cuánto devuelvo en total y vale la pena?".</p>
      <table>
        <tr><th>Señal de alerta</th><th>Por qué</th></tr>
        <tr><td>Préstamos "sin requisitos" de apps o personas desconocidas</td><td>Suelen tener tasas altísimas o ser estafas</td></tr>
        <tr><td>Te piden un pago adelantado para darte el préstamo</td><td>Es estafa: un préstamo real no te cobra antes</td></tr>
        <tr><td>No te dicen el CFT ni el total a devolver</td><td>No firmes sin esos datos por escrito</td></tr>
      </table>
      <p>Por ejemplo, pedir un préstamo para pagar otro préstamo (o la tarjeta) puede tener sentido solo si el nuevo tiene un CFT bastante menor y no volvés a usar la tarjeta. Si no, es agrandar el problema.</p>` },
  ],
  practica: [
    "Mirá un resumen de tarjeta (tuyo o de ejemplo) y anotá: saldo total, pago mínimo, TNA, TEA, CFT y fecha de vencimiento.",
    "Elegí algo que quieras comprar con opción de cuotas y de contado. Calculá el valor presente de las cuotas con la inflación mensual actual y anotá qué opción conviene.",
    "Pedí (o buscá en la página de un banco) la simulación de un préstamo personal a 12 y a 24 meses. Anotá cuota, total a devolver y CFT de cada plazo.",
  ],
  recursos: [
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
    { t: "BCRA: Central de Deudores (consultá tu situación crediticia)", url: "https://www.bcra.gob.ar/situacion-crediticia/" },
  ],
  quiz: [
    { q: "Tenés una deuda de tarjeta de $ 300.000 y pagás solo el mínimo. ¿Qué pasa, según el ejemplo de la lección?", opciones: ["La pagás en 10 meses","Pagás exactamente $ 300.000","Tardás más de 6 años y pagás más de $ 900.000 en total","La deuda desaparece sola"], correcta: 2, explicacion: "El mínimo está pensado para que la deuda baje muy despacio. Pensar que pagás $ 300.000 tienta porque es lo que gastaste, pero los intereses sobre intereses suman mucho más." },
    { q: "No podés pagar el total del resumen. ¿Qué hacés?", opciones: ["Pagás lo más que puedas por encima del mínimo y dejás de usar la tarjeta","Pagás solo el mínimo","No pagás nada este mes","Sacás un adelanto de efectivo para pagar"], correcta: 0, explicacion: "Cada peso por encima del mínimo baja la deuda que genera intereses. El adelanto de efectivo tienta para cubrir, pero es de lo más caro que hay." },
    { q: "En el resumen de la tarjeta, ¿qué tenés que pagar para no generar intereses?", opciones: ["El pago mínimo","La mitad del saldo","Los intereses del mes anterior","El saldo total"], correcta: 3, explicacion: "Solo el total evita los intereses de financiación. El mínimo tienta porque te deja al día, pero el resto genera intereses." },
    { q: "Necesitás plata en efectivo urgente. ¿Por qué el adelanto con la tarjeta es mala idea?", opciones: ["Porque no se puede","Porque suele tener intereses desde el primer día y comisiones","Porque es ilegal","No es mala idea, es gratis"], correcta: 1, explicacion: "Es de las formas más caras de conseguir plata. Pensar que es gratis tienta porque se saca fácil, pero el costo aparece en el resumen." },
    { q: "Un producto cuesta $ 120.000 en 6 cuotas sin interés o $ 100.000 de contado, con inflación de 3% mensual. ¿Qué conviene?", opciones: ["Las cuotas, siempre","Da igual","El contado: las cuotas valen hoy $ 108.344, más que $ 100.000","Ninguna"], correcta: 2, explicacion: "El descuento de contado es mayor que lo que ahorra la inflación. Las cuotas siempre tientan por \"sin interés\", pero acá el contado es más barato." },
    { q: "Con el mismo producto, el contado es de $ 115.000. ¿Qué conviene?", opciones: ["Las cuotas: valen hoy $ 108.344, menos que $ 115.000","El contado","Da igual","Esperar a que baje"], correcta: 0, explicacion: "Ahora el descuento es menor que lo que ahorra la inflación. El contado tienta por \"pagar menos\", pero en valor de hoy las cuotas son más baratas." },
    { q: "Tenés cinco compras en cuotas \"chiquitas\". ¿Qué hacés con tu presupuesto?", opciones: ["Nada, son chiquitas","Las ignorás hasta que terminen","Sacás otra tarjeta","Sumás cuánto pagás de cuotas cada mes y lo tratás como un gasto fijo"], correcta: 3, explicacion: "Las cuotas se suman y comprometen meses futuros. Ignorarlas tienta porque cada una es chica, pero juntas pueden ser un gasto grande." },
    { q: "Vas a pedir un préstamo. Según la guía del BCRA, ¿cuál es el dato más importante?", opciones: ["La TNA","El CFT, que suma intereses, seguros, comisiones y otros cargos","El color de la tarjeta","Lo rápido que lo dan"], correcta: 1, explicacion: "El CFT dice cuánto cuesta de verdad. La TNA tienta porque se publicita, pero deja afuera cargos." },
    { q: "Te ofrecen el mismo préstamo a 12 o a 24 meses. ¿Qué pasa con el de 24?", opciones: ["Es más barato en total","Es igual","La cuota es más baja, pero devolvés mucho más en total","La cuota es más alta"], correcta: 2, explicacion: "Con más plazo, pagás intereses más tiempo. Que es más barato tienta porque la cuota baja, pero en el ejemplo los intereses se duplican." },
    { q: "Una app de préstamos te pide un pago \"para liberar tu crédito\". ¿Qué concluís?", opciones: ["Que es una estafa: un préstamo real no te cobra antes de darte la plata","Que es un trámite normal","Que conviene pagar si el monto es chico","Que es un seguro"], correcta: 0, explicacion: "Pedir un pago adelantado es la señal clásica. Pagar si es chico tienta para no perder el préstamo, pero no lo vas a recibir." },
    { q: "Querés pedir un préstamo para pagar la tarjeta. ¿Cuándo puede tener sentido?", opciones: ["Siempre","Nunca","Si te lo dan rápido","Si el préstamo tiene un CFT bastante menor y dejás de usar la tarjeta"], correcta: 3, explicacion: "Cambiar una deuda cara por una más barata ayuda solo si no volvés a endeudarte. Que te lo den rápido tienta, pero no dice nada del costo." },
    { q: "Te ofrecen un préstamo y no te dicen el CFT ni el total a devolver. ¿Qué hacés?", opciones: ["Firmás, total la cuota te entra","No firmás hasta tener esos datos por escrito","Le preguntás a un amigo y firmás","Firmás y después preguntás"], correcta: 1, explicacion: "Sin el CFT y el total no sabés cuánto te cuesta. Que la cuota entre tienta como único criterio, pero el total puede ser enorme." },
  ],
},
{
  id: "deudas",
  icono: "⛓️",
  titulo: "Salir de las deudas",
  nivel: "Intermedio",
  objetivos: [
    "Hacer la lista completa de tus deudas con saldo, tasa y cuota",
    "Elegir un orden para pagarlas: avalancha (tasa más alta) o bola de nieve (saldo más chico)",
    "Consultar tu situación en la Central de Deudores del BCRA y saber cuándo pedir ayuda",
  ],
  lecciones: [
    { titulo: "La lista de deudas", html: `
      <p class="idea">Para salir de las deudas, primero hay que verlas todas juntas. Mucha gente evita mirar, y eso deja que los intereses sigan creciendo. Una lista clara es el primer paso, y suele dar alivio: ya sabés contra qué estás.</p>
      <pre><code>Deuda            Saldo        Tasa mensual (ejemplo)   Cuota mínima
Tarjeta A        $ 300.000    7%                       $ 30.000
Préstamo app     $ 120.000    10%                      $ 25.000
Tarjeta B        $  80.000    6%                       $  8.000
Préstamo banco   $ 400.000    4%                       $ 40.000
Total            $ 900.000                             $ 103.000</code></pre>
      <p><strong>Qué anotar de cada deuda:</strong> a quién le debés, cuánto debés hoy (saldo), la tasa (mirá el CFT en el resumen o el contrato), la cuota o el pago mínimo, y si estás atrasado.</p>
      <table>
        <tr><th>Primero, frenar</th><th>Por qué</th></tr>
        <tr><td>Dejar de usar las tarjetas con deuda</td><td>Si seguís usándolas, la deuda no baja</td></tr>
        <tr><td>No sacar préstamos nuevos para gastos del día a día</td><td>Es tapar un agujero con otro</td></tr>
        <tr><td>Pagar todos los mínimos</td><td>El atraso suma intereses punitorios y te marca en la Central de Deudores</td></tr>
      </table>
      <p><strong>¿Cuánto podés poner por mes?</strong> Con tu presupuesto (módulo 0), calculá cuánto podés destinar a las deudas, por encima de los mínimos. Ese "extra", aunque sea chico, es lo que hace bajar las deudas de verdad.</p>
      <p>Por ejemplo, en la lista de arriba, los mínimos suman $ 103.000. Si podés poner $ 130.000 por mes, tenés $ 27.000 de extra para acelerar una deuda. La próxima lección es sobre cuál.</p>` },
    { titulo: "Avalancha o bola de nieve", html: `
      <p class="idea">Pagás el mínimo de todas las deudas y ponés todo el extra en una sola. Hay dos formas de elegir cuál, y las dos funcionan: una ahorra más plata y la otra da más motivación.</p>
      <table>
        <tr><th>Método</th><th>A cuál le ponés el extra</th><th>Ventaja</th></tr>
        <tr><td><strong>Avalancha</strong></td><td>A la de tasa más alta</td><td>Pagás menos intereses en total</td></tr>
        <tr><td><strong>Bola de nieve</strong></td><td>A la de saldo más chico</td><td>Cancelás una deuda rápido y eso motiva a seguir</td></tr>
      </table>
      <p>Con la lista de la lección anterior:</p>
      <pre><code>Avalancha:     primero el préstamo app (10%), después tarjeta A (7%),
               tarjeta B (6%) y préstamo banco (4%)
Bola de nieve: primero tarjeta B ($ 80.000), después préstamo app,
               tarjeta A y préstamo banco</code></pre>
      <p><strong>Cuando terminás de pagar una deuda,</strong> la cuota que pagabas por ella se suma al extra y va a la siguiente. Así el extra crece como una bola de nieve, en los dos métodos.</p>
      <p><strong>¿Cuál elegir?</strong> La avalancha es la mejor matemáticamente. Pero si te cuesta sostener el plan, la bola de nieve te da una victoria rápida. Lo peor es no elegir ninguno.</p>
      <p><strong>Renegociar:</strong> si no podés pagar ni los mínimos, hablá con la entidad antes de atrasarte. Muchas ofrecen refinanciaciones (más plazo o una cuota menor). Pedí el CFT y el total de la refinanciación por escrito, y compará con lo que pagabas.</p>
      <p>Por ejemplo, una persona con muchas deudas chicas suele sostener mejor la bola de nieve; con pocas deudas y una muy cara, la avalancha ahorra bastante.</p>` },
    { titulo: "La Central de Deudores y cuándo pedir ayuda", html: `
      <p class="idea">El BCRA tiene una <strong>Central de Deudores</strong>: una base pública con la situación de las personas con los bancos y otras entidades. Cualquiera puede consultar la suya gratis en la página del BCRA con su CUIT o CUIL.</p>
      <p>La Central clasifica a cada deudor en situaciones según el atraso: la situación 1 es "normal" (sin atrasos) y los números más altos indican atrasos cada vez mayores. Estar en una situación alta hace muy difícil conseguir crédito.</p>
      <table>
        <tr><th>Para qué te sirve consultarla</th></tr>
        <tr><td>Saber cómo te ven las entidades antes de pedir un crédito</td></tr>
        <tr><td>Detectar una deuda a tu nombre que no reconocés (puede ser un robo de identidad)</td></tr>
        <tr><td>Comprobar que una deuda que pagaste ya figura como regularizada</td></tr>
      </table>
      <p><strong>Si aparece una deuda que no es tuya:</strong> reclamá ante la entidad que la informó y, si no se resuelve, ante el BCRA. Si creés que usaron tu identidad, hacé la denuncia (el curso de seguridad digital de este sitio explica dónde).</p>
      <p><strong>Cuándo pedir ayuda profesional:</strong></p>
      <ul>
        <li>Si las cuotas de tus deudas superan lo que podés pagar aunque recortes todo.</li>
        <li>Si te amenazan o te acosan para cobrarte (eso no está permitido).</li>
        <li>Si te llegó una demanda judicial.</li>
      </ul>
      <p>En esos casos, consultá con Defensa del Consumidor, con un abogado o con los servicios jurídicos gratuitos de tu zona (muchas universidades y colegios de abogados tienen). Este curso te ayuda a entender, no reemplaza ese asesoramiento.</p>
      <p>Por ejemplo, consultar la Central de Deudores una vez por año es un buen hábito: lleva un minuto y te avisa de problemas antes de que crezcan.</p>` },
  ],
  practica: [
    "Hacé tu lista de deudas (o una de ejemplo) con saldo, tasa, cuota mínima y atraso. Anotá el total de saldos y el total de mínimos.",
    "Calculá cuánto extra podés poner por mes a las deudas según tu presupuesto. Ordená la lista con el método avalancha y con bola de nieve, y anotá cuál elegís y por qué.",
    "Consultá tu situación en la Central de Deudores del BCRA con tu CUIL. Anotá en qué situación figurás y si aparece alguna deuda que no reconocés.",
  ],
  recursos: [
    { t: "BCRA: Central de Deudores (consultá tu situación crediticia)", url: "https://www.bcra.gob.ar/situacion-crediticia/" },
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Gobierno de Argentina: Defensa del Consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
  ],
  quiz: [
    { q: "Tenés varias deudas y te angustia mirarlas. ¿Qué hacés primero?", opciones: ["Seguís sin mirarlas","Sacás otro préstamo para cubrir todo","Hacés una lista con todas: saldo, tasa, cuota y atraso","Pagás la que te llame más seguido"], correcta: 2, explicacion: "Ver todo junto es el primer paso y suele dar alivio. No mirar tienta para evitar la angustia, pero los intereses siguen creciendo." },
    { q: "Querés salir de las deudas de la tarjeta. ¿Qué tenés que frenar primero?", opciones: ["Seguir usando esa tarjeta","Pagar los mínimos","Anotar los gastos","Ahorrar para emergencias, siempre"], correcta: 0, explicacion: "Si seguís comprando, la deuda no baja. Dejar de pagar los mínimos tienta para tener más plata, pero te atrasa y suma intereses punitorios." },
    { q: "Tus mínimos suman $ 103.000 y podés poner $ 130.000 por mes. ¿Cuánto extra tenés para acelerar una deuda?", opciones: ["$ 130.000","$ 103.000","$ 233.000","$ 27.000"], correcta: 3, explicacion: "130.000 − 103.000 = 27.000. $ 130.000 tienta porque es lo que podés poner, pero los mínimos van igual a todas." },
    { q: "Querés pagar la menor cantidad de intereses posible. ¿Qué método usás?", opciones: ["Bola de nieve","Avalancha: el extra a la deuda de tasa más alta","Pagar todas por igual","Pagar la más nueva"], correcta: 1, explicacion: "La avalancha ataca primero lo que más intereses genera. La bola de nieve tienta por la victoria rápida, pero suele costar algo más." },
    { q: "Te cuesta sostener los planes y querés una victoria rápida. ¿Qué método puede ayudarte?", opciones: ["Avalancha","Ninguno","Bola de nieve: el extra a la deuda de saldo más chico","Pagar solo los mínimos"], correcta: 2, explicacion: "Cancelar una deuda pronto motiva a seguir. La avalancha tienta porque es la mejor en números, pero si la abandonás, no sirve." },
    { q: "Terminaste de pagar una deuda. ¿Qué hacés con la cuota que pagabas por ella?", opciones: ["La sumás al extra para la siguiente deuda","La gastás en salidas","La dejás de pagar y listo","Abrís otra tarjeta"], correcta: 0, explicacion: "Así el extra crece y las deudas siguientes bajan más rápido. Gastarla tienta como premio, pero frena el plan." },
    { q: "No podés pagar ni los mínimos. ¿Qué hacés antes de atrasarte?", opciones: ["Dejás de pagar sin avisar","Cambiás de número de teléfono","Sacás un préstamo en una app","Hablás con la entidad para pedir una refinanciación, con el CFT por escrito"], correcta: 3, explicacion: "Muchas entidades refinancian antes del atraso. Una app de préstamos tienta por rápida, pero suele tener tasas altísimas." },
    { q: "¿Qué es la Central de Deudores del BCRA?", opciones: ["Una oficina que perdona deudas","Una base pública con la situación de las personas con las entidades financieras","Un banco","Una empresa de cobranzas"], correcta: 1, explicacion: "Es un registro que cualquiera puede consultar gratis. Pensar que perdona deudas tienta por el nombre, pero solo informa." },
    { q: "En la Central de Deudores te aparece una deuda que no reconocés. ¿Qué hacés?", opciones: ["La pagás para que desaparezca","La ignorás","Reclamás ante la entidad y, si no se resuelve, ante el BCRA; si usaron tu identidad, denunciás","Esperás a que se borre sola"], correcta: 2, explicacion: "Puede ser un error o un robo de identidad. Pagarla tienta para sacártela de encima, pero estarías pagando algo que no es tuyo." },
    { q: "¿Qué significa estar en situación 1 en la Central de Deudores?", opciones: ["Situación normal, sin atrasos","La peor situación","Que tenés una sola deuda","Que debés más de un millón"], correcta: 0, explicacion: "Los números más altos indican más atraso. Pensar que 1 es la peor tienta por \"primer lugar\", pero es la mejor." },
    { q: "Una empresa de cobranzas te llama todos los días y te amenaza. ¿Qué hacés?", opciones: ["Pagás lo que piden para que paren","Cambiás de casa","Les das los datos de tu familia","Pedís ayuda: eso no está permitido; consultás en Defensa del Consumidor o con un abogado"], correcta: 3, explicacion: "Las amenazas y el acoso para cobrar no están permitidos. Pagar para que paren tienta, pero puede no ser lo que corresponde y no frena el acoso." },
    { q: "¿Cada cuánto conviene consultar la Central de Deudores?", opciones: ["Nunca","Al menos una vez por año, o antes de pedir un crédito","Todos los días","Solo si te lo pide un banco"], correcta: 1, explicacion: "Una consulta anual detecta problemas temprano. Esperar a que lo pida un banco tienta, pero ahí ya es tarde para corregir algo raro." },
  ],
},
{
  id: "invertir",
  icono: "🌱",
  titulo: "Invertir: riesgo, plazo y diversificación",
  nivel: "Intermedio",
  objetivos: [
    "Explicar la relación entre riesgo, rentabilidad y plazo con ejemplos",
    "Distinguir los instrumentos básicos (plazo fijo, fondos comunes, bonos y acciones) por su riesgo y su liquidez",
    "Verificar que quien te ofrece una inversión esté registrado y reconocer las promesas de estafa",
  ],
  lecciones: [
    { titulo: "Riesgo, rentabilidad y plazo", html: `
      <p class="idea">Invertir es poner plata en algo esperando que crezca. Siempre hay tres cosas en juego: la <strong>rentabilidad</strong> (cuánto podés ganar), el <strong>riesgo</strong> (cuánto podés perder o cuánto puede variar) y el <strong>plazo</strong> (cuánto tiempo la dejás). No existe una inversión con mucha rentabilidad, sin riesgo y disponible enseguida.</p>
      <table>
        <tr><th>Concepto</th><th>Qué es</th></tr>
        <tr><td>Rentabilidad</td><td>Lo que ganás, en porcentaje. Se compara con la inflación (tasa real, módulo 1)</td></tr>
        <tr><td>Riesgo</td><td>La posibilidad de que el valor baje o de que no te paguen</td></tr>
        <tr><td>Liquidez</td><td>Qué tan rápido podés recuperar la plata sin perder</td></tr>
        <tr><td>Plazo</td><td>Cuánto tiempo pensás dejar la inversión</td></tr>
      </table>
      <p><strong>La regla general:</strong> a más rentabilidad esperada, más riesgo. Si algo promete mucha ganancia sin riesgo, desconfiá (lección 3).</p>
      <p><strong>El plazo cambia todo:</strong> una inversión que sube y baja mucho es peligrosa para plata que vas a necesitar el mes que viene, pero puede ser razonable para plata que vas a dejar muchos años, porque hay tiempo para recuperarse de las caídas. Es la misma regla del módulo 2: cuanto antes necesitás la plata, menos riesgo podés correr.</p>
      <p><strong>Antes de invertir:</strong> tené tu fondo de emergencia (módulo 2) y no tengas deudas caras (módulo 5). Pagar una tarjeta al 7% mensual es una "inversión" con mejor rendimiento seguro que casi cualquier otra cosa.</p>
      <p>Por ejemplo, si tenés deuda de tarjeta y te sobran $ 100.000, usarlos para cancelar la deuda te ahorra un interés que ninguna inversión segura te va a pagar.</p>
      <p><strong>Importante:</strong> este módulo te ayuda a entender. No es una recomendación de inversión: para decisiones importantes, consultá con un asesor registrado.</p>` },
    { titulo: "Los instrumentos básicos", html: `
      <p class="idea">Hay muchísimos productos de inversión, pero casi todos son variantes de unos pocos tipos. Conocerlos te deja entender lo que te ofrecen y hacer las preguntas correctas.</p>
      <table>
        <tr><th>Instrumento</th><th>Qué es</th><th>Riesgo</th><th>Liquidez</th></tr>
        <tr><td>Plazo fijo</td><td>Le prestás plata al banco por un plazo y te paga una tasa fija</td><td>Bajo</td><td>Al terminar el plazo</td></tr>
        <tr><td>Fondo común de inversión de liquidez inmediata (money market)</td><td>Un fondo que junta plata de muchas personas y la pone en instrumentos de muy corto plazo</td><td>Bajo</td><td>Muy alta: en el día o al siguiente</td></tr>
        <tr><td>Bonos</td><td>Le prestás plata a un gobierno o una empresa a cambio de pagos futuros</td><td>Medio a alto, según quién emite</td><td>Se pueden vender, pero el precio varía</td></tr>
        <tr><td>Acciones</td><td>Comprás una parte de una empresa</td><td>Alto: el precio sube y baja mucho</td><td>Se pueden vender, pero puede ser a pérdida</td></tr>
        <tr><td>Fondos comunes de otros tipos</td><td>Juntan plata de muchos y la invierten en bonos, acciones o una mezcla</td><td>Según en qué inviertan</td><td>Según el fondo</td></tr>
      </table>
      <p><strong>Diversificar</strong> es no poner toda la plata en una sola cosa. Si una inversión sale mal, las otras amortiguan. Los fondos comunes diversifican por vos, porque reparten la plata en muchos instrumentos.</p>
      <pre><code>Toda la plata en una sola acción: si esa empresa cae 50%, perdés 50%
La plata repartida en 10 inversiones distintas: si una cae 50%, perdés 5%</code></pre>
      <p><strong>Leé los costos:</strong> los fondos cobran una comisión anual, y comprar o vender bonos y acciones tiene comisiones. Una rentabilidad de 10% con 3% de comisiones es en realidad un 7%.</p>
      <p>Por ejemplo, el rendimiento pasado de un fondo no garantiza el futuro: que haya ganado mucho el año pasado no dice cuánto va a ganar este año.</p>` },
    { titulo: "Con quién invertir y cómo no caer en estafas", html: `
      <p class="idea">Tan importante como en qué invertís es con quién. En Argentina, quienes ofrecen inversiones en el mercado de capitales tienen que estar registrados en la <strong>CNV</strong> (Comisión Nacional de Valores), el organismo que los controla.</p>
      <p><strong>Antes de invertir con alguien:</strong></p>
      <ul>
        <li>Buscá en la página de la CNV si la empresa o el agente está registrado.</li>
        <li>Pedí por escrito en qué se invierte tu plata, los costos y cómo la retirás.</li>
        <li>Desconfiá si no te dejan retirar cuando querés o si te piden pagar para retirar.</li>
      </ul>
      <table>
        <tr><th>Promesa típica de estafa</th><th>Por qué es falsa</th></tr>
        <tr><td>"Ganancia garantizada del 20% mensual"</td><td>Nadie puede garantizar ganancias altas: más rentabilidad es más riesgo</td></tr>
        <tr><td>"Traé amigos y ganás más"</td><td>Es un esquema piramidal: paga a los primeros con la plata de los que entran después</td></tr>
        <tr><td>"Lo recomienda un famoso o el Banco Central"</td><td>Usan imágenes y videos falsos de personas conocidas</td></tr>
        <tr><td>"Tenés que decidir hoy"</td><td>El apuro es para que no pienses ni consultes</td></tr>
      </table>
      <p>Según el informe de la fiscalía especializada en ciberdelitos (UFECI) de 2024, crecieron las estafas con plataformas de inversión falsas. El curso de seguridad digital de este sitio tiene un módulo entero sobre estas estafas.</p>
      <p><strong>Una regla simple:</strong> si no podés explicar con tus palabras en qué se invierte tu plata y de dónde sale la ganancia, no inviertas todavía.</p>
      <p>Por ejemplo, una inversión que te deja ver "ganancias" en una pantalla, pero te pide un pago para retirarlas es una estafa siempre, aunque los números se vean reales.</p>` },
  ],
  practica: [
    "Para 3 instrumentos de la tabla (plazo fijo, fondo de liquidez inmediata y acciones), anotá su riesgo y su liquidez, y para qué tipo de ahorro de tu vida usarías cada uno.",
    "Buscá en la página de la CNV si una empresa de inversiones que conozcas (o que veas en publicidad) está registrada. Anotá el resultado.",
    "Buscá una publicidad de inversión en redes y marcá cuántas de las 4 promesas típicas de estafa tiene. Anotá el resultado.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: guía de protección al inversor (PDF)", url: "https://argentina.gob.ar/sites/default/files/2024.09.06_actualizacion_guia_de_proteccion_al_inversor_-_vf_09.09.24.cleaned.pdf" },
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "BCRA: recomendaciones para evitar estafas virtuales", url: "https://www.bcra.gob.ar/noticias/recomendaciones-del-bcra-para-evitar-estafas-virtuales/" },
  ],
  quiz: [
    { q: "Si te ofrecen una inversión con mucha ganancia, sin riesgo y con la plata disponible cuando quieras, ¿qué concluís?", opciones: ["Que es una gran oportunidad","Que conviene poner todo","Que desconfiás: no existe esa combinación","Que es normal en los bancos"], correcta: 2, explicacion: "Más rentabilidad viene con más riesgo. Poner todo tienta por la promesa, pero es la descripción típica de una estafa." },
    { q: "Si vas a necesitar la plata el mes que viene, ¿qué tipo de inversión conviene?", opciones: ["Una de bajo riesgo y alta liquidez, como un fondo de liquidez inmediata o un plazo fijo corto","Acciones","Bonos de largo plazo","Una inversión que sube y baja mucho"], correcta: 0, explicacion: "Con poco tiempo no hay margen para recuperarse de una caída. Las acciones tientan por lo que pueden rendir, pero pueden estar abajo justo cuando la necesitás." },
    { q: "Tenés deuda de tarjeta al 7% mensual y te sobran $ 100.000. ¿Qué conviene?", opciones: ["Invertirlos en acciones","Hacer un plazo fijo","Guardarlos en efectivo","Cancelar deuda: ahorrás un interés que ninguna inversión segura te paga"], correcta: 3, explicacion: "Pagar una deuda cara es la mejor \"inversión\" segura. El plazo fijo tienta por seguro, pero paga mucho menos de lo que cuesta la deuda." },
    { q: "¿Qué es la liquidez de una inversión?", opciones: ["Cuánto ganás","Qué tan rápido podés recuperar la plata sin perder","Cuánto riesgo tiene","En qué moneda está"], correcta: 1, explicacion: "Es la disponibilidad de la plata. Confundirla con la ganancia tienta, pero son cosas distintas: algo puede rendir mucho y ser poco líquido." },
    { q: "Comprás una acción. ¿Qué estás comprando?", opciones: ["Un préstamo al banco","Un plazo fijo","Una parte de una empresa","Una deuda del gobierno"], correcta: 2, explicacion: "La acción es una parte de la empresa, y su precio sube y baja. El préstamo tienta como respuesta, pero eso es un bono o un plazo fijo." },
    { q: "Tenés toda tu plata en una sola acción y la empresa cae 50%. ¿Qué te hubiera protegido?", opciones: ["Diversificar: repartir la plata en varias inversiones","Comprar más de esa acción","Esperar sin hacer nada","Sacar un préstamo"], correcta: 0, explicacion: "Si una cae, las otras amortiguan. Comprar más tienta para \"promediar\", pero aumenta el riesgo en la misma empresa." },
    { q: "Si tu fondo rindió 10% y cobra 3% de comisiones, ¿cuánto ganaste en realidad?", opciones: ["10%","13%","3%","Cerca de 7%"], correcta: 3, explicacion: "Las comisiones se restan del rendimiento. 10% tienta porque es el número publicado, pero no es lo que te queda." },
    { q: "Un fondo ganó mucho el año pasado. ¿Qué te dice sobre este año?", opciones: ["Que va a ganar lo mismo","Nada seguro: el rendimiento pasado no garantiza el futuro","Que va a ganar más","Que es el mejor fondo"], correcta: 1, explicacion: "El pasado no asegura el futuro. Que va a ganar lo mismo tienta, pero los mercados cambian." },
    { q: "Te ofrecen invertir con una empresa que no conocés. ¿Qué verificás primero?", opciones: ["Si tiene una página linda","Si tiene muchos seguidores","Si está registrada en la CNV","Si un famoso la recomienda"], correcta: 2, explicacion: "El registro en la CNV es el control oficial. Los seguidores tientan como prueba, pero se compran o se inventan." },
    { q: "Te dicen que si traés amigos ganás más. ¿Qué es eso?", opciones: ["Un esquema piramidal: paga a los primeros con la plata de los que entran después","Un programa de referidos normal","Una inversión diversificada","Un plazo fijo especial"], correcta: 0, explicacion: "Cuando deja de entrar gente, se cae. El programa de referidos tienta como explicación, pero acá la ganancia depende de sumar personas, no de una inversión real." },
    { q: "Ves \"ganancias\" en la pantalla de una plataforma, pero para retirarlas te piden un pago. ¿Qué concluís?", opciones: ["Que es un impuesto normal","Que conviene pagar para no perder lo ganado","Que la plataforma tiene un error","Que es una estafa siempre"], correcta: 3, explicacion: "Pedir un pago para retirar es la señal clásica. Pagar para no perder lo ganado tienta, pero esas ganancias son números que pone el estafador." },
    { q: "No sabés explicar de dónde sale la ganancia de una inversión que te ofrecen. ¿Qué hacés?", opciones: ["Invertís un poco para entenderla","No invertís todavía","Invertís porque otros ganan","Le preguntás al que te la ofrece y confiás"], correcta: 1, explicacion: "Si no entendés de dónde sale la ganancia, no podés evaluar el riesgo. Invertir un poco tienta para probar, pero es justo como empiezan muchas estafas." },
  ],
},
{
  id: "decisiones",
  icono: "🛒",
  titulo: "Decisiones de todos los días: comprar, consumir y protegerte",
  nivel: "Intermedio",
  objetivos: [
    "Comparar precios por unidad y decidir compras grandes con una regla de espera",
    "Conocer tus derechos como consumidor y cómo reclamar",
    "Decidir qué riesgos conviene cubrir con un seguro y cuáles con el fondo de emergencia",
  ],
  lecciones: [
    { titulo: "Comprar mejor", html: `
      <p class="idea">Muchos ahorros no vienen de grandes decisiones, sino de comprar mejor lo de todos los días. Dos herramientas simples: comparar el <strong>precio por unidad</strong> y darte un tiempo antes de las compras grandes.</p>
      <p><strong>Precio por unidad.</strong> El envase más grande no siempre es el más barato por kilo o por litro. Dividí el precio por la cantidad:</p>
      <pre><code>Yerba de 500 g a $ 2.600  → 2.600 / 0,5 = $ 5.200 por kilo
Yerba de 1 kg a $ 4.800   → $ 4.800 por kilo     ← más barata por kilo
Yerba de 2 kg a $ 10.200  → 10.200 / 2 = $ 5.100 por kilo</code></pre>
      <p>En este ejemplo, el paquete de 1 kg es el más barato por kilo, no el de 2 kg. En muchos supermercados el precio por unidad figura en la góndola, en letra chica.</p>
      <p><strong>La regla de espera.</strong> Para compras que no son necesarias, esperá un tiempo antes de comprar: por ejemplo, un día por cada cierta cantidad de plata, o una semana para todo lo caro. Muchas ganas de comprar se van solas.</p>
      <table>
        <tr><th>Antes de una compra grande, preguntate</th></tr>
        <tr><td>¿Lo necesito o lo quiero? (está bien querer, pero sabiéndolo)</td></tr>
        <tr><td>¿Entra en mi presupuesto sin tocar el ahorro?</td></tr>
        <tr><td>¿Comparé en al menos tres lugares?</td></tr>
        <tr><td>¿Me conviene contado o cuotas? (módulo 4)</td></tr>
      </table>
      <p>Por ejemplo, las ofertas "solo por hoy" usan el apuro para que no compares: es la misma palanca que usan las estafas. Si es una buena compra hoy, probablemente haya otra parecida otro día.</p>` },
    { titulo: "Tus derechos como consumidor", html: `
      <p class="idea">Cuando comprás algo, tenés derechos. Conocerlos te ayuda a reclamar cuando algo sale mal. En Argentina los protege la Ley de Defensa del Consumidor (Ley 24.240) y hay un organismo nacional para reclamar.</p>
      <table>
        <tr><th>Derecho</th><th>En la práctica</th></tr>
        <tr><td>Información clara</td><td>El precio y las condiciones tienen que estar claros antes de comprar</td></tr>
        <tr><td>Garantía</td><td>Los productos nuevos tienen garantía: si fallan, te los tienen que reparar o cambiar</td></tr>
        <tr><td>Arrepentimiento en compras a distancia</td><td>En compras por internet o por teléfono, podés arrepentirte en un plazo que fija la ley</td></tr>
        <tr><td>Trato digno</td><td>No te pueden maltratar ni hacerte esperar sin razón</td></tr>
      </table>
      <p>Los plazos exactos y las condiciones están en la ley y en la página oficial de Defensa del Consumidor: consultalos ahí, porque pueden cambiar.</p>
      <p><strong>Cómo reclamar:</strong></p>
      <ol>
        <li>Primero, a la empresa, por sus canales oficiales. Guardá el número de reclamo.</li>
        <li>Si no te responden o no se resuelve, en Defensa del Consumidor (nacional o de tu provincia o municipio).</li>
        <li>Guardá todo: tickets, facturas, capturas de la oferta, mails y chats.</li>
      </ol>
      <p>Por ejemplo, si te cobran en la tarjeta algo que no compraste, reclamá enseguida en el banco o la tarjeta: hay plazos para desconocer un consumo.</p>` },
    { titulo: "Seguros y riesgos grandes", html: `
      <p class="idea">Un <strong>seguro</strong> es pagar un monto chico seguro (la prima) para que, si pasa algo grande, otro se haga cargo del costo. Conviene para riesgos que serían muy caros para vos, no para los chicos que puede cubrir tu fondo de emergencia.</p>
      <table>
        <tr><th>Riesgo</th><th>¿Seguro o fondo de emergencia?</th></tr>
        <tr><td>Se rompe el celular (costo medio)</td><td>Muchas veces conviene el fondo: el seguro suele costar mucho en relación a lo que cubre</td></tr>
        <tr><td>Un accidente con el auto que daña a otros</td><td>Seguro: el costo puede ser enorme (y el de responsabilidad civil es obligatorio para circular)</td></tr>
        <tr><td>Un incendio en la casa</td><td>Seguro: el costo sería imposible de cubrir con ahorros</td></tr>
        <tr><td>Un gasto médico importante</td><td>Obra social o prepaga, según tu situación</td></tr>
      </table>
      <p><strong>Antes de contratar un seguro, leé:</strong> qué cubre y qué no (las exclusiones), cuánto es la franquicia (la parte que pagás vos) y cuánto cuesta por mes. Compará al menos tres opciones.</p>
      <p><strong>Ojo con los seguros que vienen "de regalo":</strong> muchos préstamos y tarjetas incluyen seguros que suben el CFT (módulo 4). Fijate si son obligatorios y si podés elegir otro.</p>
      <p>Por ejemplo, un seguro para un electrodoméstico de $ 300.000 que cuesta $ 60.000 por año probablemente no conviene: en pocos años pagaste el electrodoméstico entero.</p>` },
  ],
  practica: [
    "En el súper, compará el precio por kilo o por litro de un producto en 3 tamaños distintos. Anotá cuál es el más barato por unidad.",
    "Aplicá la regla de espera a la próxima compra que no sea necesaria. Anotá qué querías comprar, cuánto esperaste y si al final lo compraste.",
    "Buscá en la página de Defensa del Consumidor cómo hacer un reclamo y cuál es el plazo para arrepentirte de una compra por internet. Anotá los dos datos.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: Defensa del Consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
  ],
  quiz: [
    { q: "La yerba de 2 kg cuesta $ 10.200 y la de 1 kg $ 4.800. ¿Cuál es más barata por kilo?", opciones: ["La de 2 kg, siempre","Son iguales","La de 1 kg: $ 4.800 por kilo contra $ 5.100","No se puede saber"], correcta: 2, explicacion: "Hay que dividir el precio por la cantidad. El envase grande tienta porque suele ser más barato, pero acá no lo es." },
    { q: "Ves una oferta \"solo por hoy\" de algo que no necesitás. ¿Qué hacés?", opciones: ["Aplicás la regla de espera y comparás antes de comprar","Comprás ya para no perderla","Comprás dos","Le pedís prestado a alguien para aprovechar"], correcta: 0, explicacion: "El apuro es para que no compares. Comprar ya tienta por miedo a perderla, pero suele haber ofertas parecidas otro día." },
    { q: "Si vas a hacer una compra grande, ¿qué te preguntás antes?", opciones: ["Si está de moda","Si lo tiene un amigo","Si hay cuotas, y listo","Si lo necesito, si entra en el presupuesto, si comparé en tres lugares y si conviene contado o cuotas"], correcta: 3, explicacion: "Cuatro preguntas evitan compras de las que te arrepentís. Que haya cuotas tienta como único criterio, pero no dice si te conviene." },
    { q: "Compraste algo por internet y te arrepentiste. ¿Qué derecho tenés?", opciones: ["Ninguno, compraste","El de arrepentirte dentro del plazo que fija la ley para compras a distancia","Solo si el producto está roto","Solo si pagaste en efectivo"], correcta: 1, explicacion: "Las compras a distancia tienen derecho de arrepentimiento. Pensar que no hay ninguno tienta porque ya pagaste, pero la ley lo prevé." },
    { q: "Si un producto nuevo que compraste falla a las dos semanas, ¿qué podés pedir?", opciones: ["Nada, se rompió","Que te paguen el doble","Que lo reparen o lo cambien por la garantía","Solo una disculpa"], correcta: 2, explicacion: "Los productos nuevos tienen garantía. Que no se puede hacer nada tienta por resignación, pero tenés derecho a reclamar." },
    { q: "Reclamaste a una empresa y no te responden. ¿Qué hacés?", opciones: ["Reclamás en Defensa del Consumidor con todas las pruebas","Te olvidás","Publicás datos personales del vendedor","Dejás de pagar todo lo que le debés a otros"], correcta: 0, explicacion: "Defensa del Consumidor es el siguiente paso. Publicar datos del vendedor tienta por bronca, pero no resuelve y te puede traer problemas." },
    { q: "¿Qué guardás por si tenés que reclamar una compra?", opciones: ["Nada, no hace falta","Solo la caja","Solo el recuerdo de lo que te dijeron","Ticket o factura, capturas de la oferta, mails y chats"], correcta: 3, explicacion: "Las pruebas hacen que el reclamo avance. El recuerdo tienta como suficiente, pero no se puede mostrar." },
    { q: "Te cobraron en la tarjeta algo que no compraste. ¿Qué hacés?", opciones: ["Esperás al próximo resumen","Reclamás enseguida en el banco o la tarjeta, porque hay plazos para desconocer un consumo","Pagás y te olvidás","Dejás de pagar la tarjeta"], correcta: 1, explicacion: "Hay plazos para desconocer consumos. Esperar tienta para ver si se corrige solo, pero podés perder el plazo." },
    { q: "¿Cuándo conviene un seguro?", opciones: ["Para cualquier cosa que tengas","Nunca","Para riesgos que serían muy caros para vos, como un incendio o dañar a otros con el auto","Solo para el celular"], correcta: 2, explicacion: "El seguro tiene sentido cuando el costo sería imposible de cubrir. Asegurar todo tienta por tranquilidad, pero muchas primas cuestan más de lo que cubren." },
    { q: "Si te ofrecen un seguro de $ 60.000 por año para una heladera de $ 300.000, ¿qué concluís?", opciones: ["Que probablemente no conviene: en pocos años pagaste la heladera entera","Que conviene siempre","Que es obligatorio","Que es un regalo"], correcta: 0, explicacion: "En 5 años pagaste $ 300.000 de seguro. La tranquilidad tienta, pero para un costo medio suele convenir el fondo de emergencia." },
    { q: "Antes de contratar un seguro, ¿qué leés?", opciones: ["Solo el nombre de la aseguradora","Solo el precio","Nada, son todos iguales","Qué cubre y qué no, la franquicia y el costo mensual"], correcta: 3, explicacion: "Las exclusiones y la franquicia cambian mucho lo que recibís. El precio tienta como único dato, pero uno barato puede no cubrir lo que necesitás." },
    { q: "Tu préstamo incluye un seguro \"de regalo\". ¿Qué revisás?", opciones: ["Nada, es gratis","Si sube el CFT, si es obligatorio y si podés elegir otro","Solo si es de una marca conocida","Lo aceptás para quedar bien"], correcta: 1, explicacion: "Muchos seguros incluidos encarecen el crédito. Que es gratis tienta por el \"regalo\", pero suele estar en el costo total." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Proyecto final: tu plan financiero de 3 meses",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan financiero con presupuesto, fondo de emergencia, metas y plan de deudas",
    "Seguir el plan durante 3 meses y medir los resultados con números",
    "Evaluarlo con una rúbrica y ajustarlo para el siguiente período",
  ],
  lecciones: [
    { titulo: "Las partes del plan", html: `
      <p class="idea">El proyecto final es tu <strong>plan financiero</strong> de 3 meses: un documento corto (o una planilla) que junta todo el curso y que vas a usar de verdad. No hace falta tener un sueldo: sirve con cualquier ingreso, o con números de ejemplo si preferís no usar los tuyos.</p>
      <table>
        <tr><th>Parte</th><th>Qué tiene</th><th>Módulo</th></tr>
        <tr><td>1. Diagnóstico</td><td>Un mes de gastos registrados, con categorías y gastos hormiga</td><td>0</td></tr>
        <tr><td>2. Presupuesto</td><td>El plan de cada mes, con el ahorro como categoría</td><td>0</td></tr>
        <tr><td>3. Inflación</td><td>El IPC de los últimos 12 meses y la tasa real de tu ingreso</td><td>1</td></tr>
        <tr><td>4. Fondo de emergencia</td><td>El monto objetivo y cuánto vas a juntar por mes</td><td>2</td></tr>
        <tr><td>5. Una meta</td><td>Qué, cuánto, para cuándo y dónde vas a guardar la plata</td><td>2 y 3</td></tr>
        <tr><td>6. Deudas</td><td>La lista y el método elegido, o "sin deudas"</td><td>4 y 5</td></tr>
        <tr><td>7. Seguimiento</td><td>Una tabla para comparar lo previsto con lo real cada mes</td><td>0</td></tr>
      </table>
      <pre><code>Seguimiento mensual
Mes      Ingreso    Gastado    Ahorrado   Deuda total   Fondo de emergencia
Marzo    700.000    640.000    60.000     900.000       60.000
Abril    ...</code></pre>
      <p>Por ejemplo, la planilla del curso de Excel de este sitio sirve directo: el presupuesto del proyecto final de ese curso es la parte 2 de este plan.</p>` },
    { titulo: "Seguir el plan tres meses", html: `
      <p class="idea">Un plan sirve si se sigue. Tres meses alcanzan para ver resultados y para descubrir qué partes del plan eran irreales. Lo importante es revisarlo cada mes, no hacerlo perfecto de entrada.</p>
      <p><strong>La rutina mensual (30 minutos):</strong></p>
      <ol>
        <li>Completá la columna "gastado" del presupuesto con tu registro.</li>
        <li>Mirá dónde te pasaste y por qué.</li>
        <li>Actualizá el seguimiento: ahorrado, deuda total, fondo de emergencia.</li>
        <li>Ajustá el presupuesto del mes siguiente (y los montos por la inflación).</li>
        <li>Consultá una vez la Central de Deudores si estás pagando deudas (módulo 5).</li>
      </ol>
      <table>
        <tr><th>Si pasa esto</th><th>Hacés esto</th></tr>
        <tr><td>Te pasaste en una categoría todos los meses</td><td>Subís esa categoría y bajás otra: el presupuesto era irreal</td></tr>
        <tr><td>Usaste el fondo de emergencia</td><td>La prioridad del mes siguiente es volver a llenarlo</td></tr>
        <tr><td>Entró plata extra (aguinaldo, un trabajo extra)</td><td>Una parte al ahorro o a las deudas antes de gastarla</td></tr>
        <tr><td>Abandonaste un mes</td><td>Retomás el siguiente: un mes perdido no arruina el plan</td></tr>
      </table>
      <p><strong>Medí con números,</strong> no con sensaciones: "este mes ahorré $ 60.000 y la deuda bajó $ 45.000" es mucho más útil que "creo que voy mejor".</p>
      <p>Por ejemplo, al final de los 3 meses, compará tres números con el inicio: deuda total, fondo de emergencia y gastos hormiga. Si al menos uno mejoró, el plan está funcionando.</p>` },
    { titulo: "La rúbrica y el siguiente paso", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje. Te ayuda a saber si tu plan está completo y si funcionó, sin depender de cómo te sentís ese día.</p>
      <p>Puntuá cada criterio de 0 a 2:</p>
      <table>
        <tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Registro</td><td>No registraste</td><td>Algunas semanas</td><td>Los 3 meses, con categorías</td></tr>
        <tr><td>Presupuesto</td><td>No hay</td><td>Hay, sin ahorro como categoría</td><td>Con ahorro, ajustado cada mes</td></tr>
        <tr><td>Cuentas</td><td>Sin cálculos</td><td>Con errores</td><td>Inflación, tasa real y fondo calculados bien</td></tr>
        <tr><td>Deudas y metas</td><td>Sin plan</td><td>Plan sin seguimiento</td><td>Plan con método elegido y seguimiento mensual</td></tr>
        <tr><td>Resultados</td><td>No se midieron</td><td>Medidos, sin mejoras</td><td>Al menos un número clave mejoró (deuda, fondo o gastos hormiga)</td></tr>
      </table>
      <p>El máximo es 10. El plan está completo con <strong>8 o más</strong> y sin ningún 0.</p>
      <p><strong>El siguiente paso:</strong> después de 3 meses, armá el plan de los 3 siguientes con lo que aprendiste. Con el tiempo, el plan pasa a ser un hábito de 30 minutos por mes.</p>
      <p><strong>Para seguir aprendiendo:</strong> los programas de educación financiera del BCRA, el capítulo de finanzas del libro abierto de LibreTexts y la guía de protección al inversor del Gobierno. Y recordá: para decisiones grandes, consultá con un profesional.</p>
      <p>Por ejemplo, armar este plan también sirve para buscar trabajo: saber hacer un presupuesto y usar una planilla para seguirlo es una habilidad que piden en administración y en muchos emprendimientos.</p>` },
  ],
  practica: [
    "Armá tu plan con las 7 partes (con tus números o de ejemplo). Anotá el monto de tu fondo de emergencia objetivo y tu meta.",
    "Seguí el plan durante 3 meses con la rutina mensual. Anotá cada mes ingreso, gastado, ahorrado, deuda total y fondo de emergencia.",
    "Al final de los 3 meses, puntuá tu plan con la rúbrica. Anotá el puntaje de cada criterio y qué número clave mejoró.",
  ],
  recursos: [
    { t: "BCRA: programas de educación financiera", url: "https://www.bcra.gob.ar/programas-de-educacion-financiera/" },
    { t: "Libro gratis: Matemáticas universitarias para la vida cotidiana, capítulo Finanzas (LibreTexts, en castellano)", url: "https://espanol.libretexts.org/Bookshelves/Matematicas/Matematicas_Aplicadas/Matematicas_universitarias_para_la_vida_cotidiana_(Inigo_et_al.)/05%3A_Finanzas" },
    { t: "Gobierno de Argentina: guía de protección al inversor (PDF)", url: "https://argentina.gob.ar/sites/default/files/2024.09.06_actualizacion_guia_de_proteccion_al_inversor_-_vf_09.09.24.cleaned.pdf" },
  ],
  quiz: [
    { q: "No tenés un sueldo fijo y querés hacer el proyecto final. ¿Qué hacés?", opciones: ["No podés hacerlo","Esperás a tener sueldo","Lo armás con tus ingresos variables o con números de ejemplo","Lo hacés sin números"], correcta: 2, explicacion: "El plan sirve con cualquier ingreso. Esperar a tener sueldo tienta, pero ordenar las finanzas ayuda justo cuando los ingresos son inciertos." },
    { q: "¿Qué tiene la parte de diagnóstico del plan?", opciones: ["Un mes de gastos registrados, con categorías y gastos hormiga","El presupuesto del año que viene","La lista de inversiones","Un deseo de ahorrar"], correcta: 0, explicacion: "El diagnóstico es lo que pasó de verdad. El presupuesto tienta como respuesta, pero es el plan, no el diagnóstico." },
    { q: "¿Cada cuánto revisás el plan?", opciones: ["Una vez por año","Nunca, una vez armado se sigue solo","Todos los días durante horas","Una vez por mes, con la rutina de 30 minutos"], correcta: 3, explicacion: "Mensual alcanza para ajustar a tiempo. Una vez por año tienta por cómodo, pero con inflación el presupuesto queda viejo en semanas." },
    { q: "Te pasaste en comida los tres meses. ¿Qué hacés?", opciones: ["Seguís igual","Subís esa categoría y bajás otra: el presupuesto era irreal","Dejás de anotar la comida","Abandonás el plan"], correcta: 1, explicacion: "Pasarte siempre es información para ajustar. Dejar de anotar tienta para que no se vea, pero perdés el control." },
    { q: "Tuviste que usar el fondo de emergencia. ¿Cuál es la prioridad del mes siguiente?", opciones: ["Invertir en acciones","Ir de vacaciones","Volver a llenarlo","Olvidarte del fondo"], correcta: 2, explicacion: "El fondo tiene que estar listo para la próxima emergencia. Invertir tienta para recuperar lo perdido, pero te deja sin colchón." },
    { q: "Cobraste el aguinaldo. ¿Qué hacés primero?", opciones: ["Una parte va al ahorro o a las deudas antes de gastarla","Gastarlo todo, es un extra","Prestárselo a alguien","Guardarlo en efectivo en casa"], correcta: 0, explicacion: "La plata extra es una oportunidad de avanzar el plan. Gastarlo todo tienta porque \"no estaba contado\", pero es justo la plata que más ayuda." },
    { q: "Abandonaste el plan un mes. ¿Qué hacés?", opciones: ["Lo abandonás para siempre","Empezás un plan totalmente distinto","Te castigás sin gastar nada","Lo retomás el mes siguiente: un mes perdido no arruina el plan"], correcta: 3, explicacion: "Retomar es lo que importa. Abandonar para siempre tienta por frustración, pero un mes no borra lo que avanzaste." },
    { q: "¿Cómo medís si el plan funciona?", opciones: ["Con cómo te sentís","Con números: ahorro, deuda total, fondo de emergencia y gastos hormiga","Con lo que opina un amigo","Con la cantidad de compras"], correcta: 1, explicacion: "Los números muestran el avance real. Cómo te sentís tienta como medida, pero cambia según el día." },
    { q: "Tu presupuesto no tiene el ahorro como categoría. ¿Cuánto sacás en ese criterio de la rúbrica?", opciones: ["2","0","1","10"], correcta: 2, explicacion: "Hay presupuesto, pero sin ahorro: eso es un 1. Un 2 tienta porque hiciste el presupuesto, pero la rúbrica pide el ahorro incluido." },
    { q: "Tu plan suma 8, pero tenés un 0 en Registro. ¿Está completo?", opciones: ["No: tiene que tener 8 o más y ningún 0","Sí, llegó a 8","Sí, el registro no importa","No, tiene que tener 10"], correcta: 0, explicacion: "Sin registro, el resto se basa en suposiciones. Llegar a 8 tienta como aprobado, pero el registro es la base de todo el plan." },
    { q: "Terminaron los 3 meses. ¿Qué hacés?", opciones: ["Dejás de hacer planes","Repetís el mismo plan sin cambios","Lo tirás","Armás el plan de los 3 siguientes con lo que aprendiste"], correcta: 3, explicacion: "Con cada período el plan mejora. Repetirlo igual tienta porque ya está armado, pero no aprovecha lo que aprendiste." },
    { q: "¿Para qué te puede servir este plan además de ordenar tus finanzas?", opciones: ["Para nada más","Para mostrar que sabés presupuestar y usar una planilla, algo que piden muchos trabajos","Para pedir más préstamos","Para publicarlo con tus datos en redes"], correcta: 1, explicacion: "Presupuestar y hacer seguimiento son habilidades buscadas. Publicarlo con tus datos tienta para mostrarlo, pero expone información personal." },
  ],
},
];
