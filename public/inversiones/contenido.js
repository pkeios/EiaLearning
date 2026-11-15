// Temario del curso "Invertir desde cero en Argentina". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js inversiones y node tools/metodologia.js inversiones
window.TEMARIO = [
{
  id: "empezar",
  icono: "🌱",
  titulo: "Antes de invertir",
  nivel: "Básico",
  objetivos: [
    "Decidir si ya estás en condiciones de invertir (deudas y fondo de emergencia)",
    "Calcular si una inversión le gana a la inflación",
    "Calcular cuánto crece una inversión con interés compuesto",
  ],
  lecciones: [
    { titulo: "Primero, la base", video: {"id":"KXvQEjFLP5k","t":"Aprendé a invertir desde cero · Lara López Calvo, Juntala (30:02)"}, html: `
      <p class="idea">Invertir es poner tu plata en algo que puede hacerla crecer, aceptando algún riesgo. Antes de empezar, conviene tener ordenada la base, porque si no, cualquier imprevisto te obliga a sacar la plata en el peor momento.</p>
      <table>
        <tr><th>Paso</th><th>Por qué va antes</th></tr>
        <tr><td>1. Gastar menos de lo que entra</td><td>Si no te sobra nada, no hay qué invertir</td></tr>
        <tr><td>2. Pagar las deudas caras (tarjeta en cuotas con interés, préstamos)</td><td>Suelen costar más de lo que cualquier inversión segura te da</td></tr>
        <tr><td>3. Armar un fondo de emergencia</td><td>De 3 a 6 meses de gastos, en algo que puedas sacar en el día</td></tr>
        <tr><td>4. Recién ahí, invertir</td><td>Con plata que no vas a necesitar pronto</td></tr>
      </table>
      <p><strong>Fondo de emergencia:</strong> plata guardada para imprevistos (quedarte sin trabajo, un arreglo urgente). No es para ganar mucho: es para estar tranquilo.</p>
      <p>El curso "Finanzas personales con números" de este sitio explica cómo armar un presupuesto y salir de deudas.</p>
      <p class="aviso">Este curso es educativo. No es una recomendación de inversión ni reemplaza a un asesor registrado. Las tasas, normas e impuestos cambian: verificá en las fuentes oficiales.</p>
      <p>Por ejemplo, si debés $ 300.000 en la tarjeta a un interés del 8% por mes, pagarla te "gana" $ 24.000 por mes seguros, más de lo que te daría casi cualquier inversión.</p>` },
    { titulo: "Inflación y tasa real", html: `
      <p class="idea">La <strong>inflación</strong> es la suba general de los precios. Si tu plata crece menos que la inflación, en realidad perdiste poder de compra, aunque tengas más pesos.</p>
      <table>
        <tr><th>Concepto</th><th>Qué es</th></tr>
        <tr><td>Rendimiento nominal</td><td>Cuánto creció tu plata en pesos</td></tr>
        <tr><td>Inflación</td><td>Cuánto subieron los precios en el mismo período</td></tr>
        <tr><td>Rendimiento real</td><td>Cuánto creció lo que podés comprar</td></tr>
      </table>
      <pre><code>Rendimiento real = (1 + nominal) / (1 + inflación) - 1

Ganaste 30% en el año y la inflación fue 25%:
(1,30 / 1,25) - 1 = 0,04  →  4% real

Ganaste 20% y la inflación fue 25%:
(1,20 / 1,25) - 1 = -0,04  →  perdiste 4% real</code></pre>
      <p><strong>Atajo:</strong> restar (30% - 25% = 5%) da una idea aproximada, pero con inflación alta el error crece. Usá la fórmula.</p>
      <p><strong>Dónde ver la inflación:</strong> el INDEC publica el índice de precios (IPC) todos los meses.</p>
      <p>Por ejemplo, dejar $ 100.000 en el cajón un año con 25% de inflación es perder, en la práctica, una quinta parte de lo que podías comprar.</p>` },
    { titulo: "Interés compuesto y tiempo", video: {"id":"5WGAHkcos7Y","t":"Qué es el interés compuesto · Aprendiz Financiero (2:09)"}, html: `
      <p class="idea">El <strong>interés compuesto</strong> es ganar intereses sobre los intereses que ya ganaste. Con el tiempo, la diferencia con el interés simple se vuelve grande.</p>
      <pre><code>$ 100.000 al 3% por mes, durante 12 meses

Interés simple (retirás el interés cada mes):
100.000 + 12 × 3.000 = 136.000

Interés compuesto (reinvertís el interés):
100.000 × 1,03^12 = 142.576</code></pre>
      <table>
        <tr><th>Qué ayuda al interés compuesto</th><th>Qué lo frena</th></tr>
        <tr><td>Empezar antes</td><td>Sacar la plata seguido</td></tr>
        <tr><td>Reinvertir lo que ganás</td><td>Comisiones altas</td></tr>
        <tr><td>Sumar plata todos los meses</td><td>Rendimientos por debajo de la inflación</td></tr>
      </table>
      <p><strong>Invertir de a poco:</strong> poner una suma fija todos los meses (por ejemplo, $ 50.000) evita tener que adivinar el mejor momento y forma el hábito.</p>
      <p><strong>Cuidado:</strong> el interés compuesto también funciona al revés con las deudas. Por eso conviene pagarlas primero.</p>
      <p>Por ejemplo, la diferencia de $ 6.576 en un año parece chica, pero si seguís reinvirtiendo, al tercer año ya es mucho más grande que el interés simple.</p>` },
  ],
  practica: [
    "Anotá en una tabla tus deudas, sus intereses y cuántos meses de gastos tenés guardados. Decidí si ya estás en el paso 4.",
    "Buscá en el INDEC la inflación de los últimos 12 meses y calculá con la fórmula el rendimiento real de una inversión que rindió 30%.",
    "Calculá en una planilla cuánto tendrías con $ 50.000 por mes durante 24 meses al 2% mensual compuesto. Anotá el total y cuánto pusiste vos.",
  ],
  recursos: [
    { t: "CNV: educación financiera", url: "https://www.argentina.gob.ar/cnv/educacion-financiera" },
    { t: "Banco Central de la República Argentina (BCRA)", url: "https://www.bcra.gob.ar/" },
  ],
  quiz: [
    { q: "Si tenés $ 300.000 de deuda en la tarjeta con interés y $ 300.000 ahorrados, ¿qué conviene primero?", opciones: ["Invertir todo en acciones","Dejar la deuda y comprar dólares","Pagar la deuda, porque su interés suele ser mayor que lo que te da una inversión segura","Pagar solo el mínimo"], correcta: 2, explicacion: "La deuda cara cuesta más de lo que rinde casi cualquier inversión. Pagar el mínimo tienta por cómodo, pero los intereses siguen creciendo." },
    { q: "Si querés armar tu fondo de emergencia, ¿cuánto conviene juntar?", opciones: ["De 3 a 6 meses de tus gastos","Un día de gastos","Diez años de sueldo","Nada, para eso está la tarjeta"], correcta: 0, explicacion: "De 3 a 6 meses cubre la mayoría de los imprevistos. La tarjeta tienta como reemplazo, pero te endeudás justo cuando estás mal." },
    { q: "Si guardás tu fondo de emergencia, ¿dónde conviene tenerlo?", opciones: ["En una inversión a 5 años","En acciones que suben y bajan mucho","Prestado a un amigo","En algo que puedas sacar en el día"], correcta: 3, explicacion: "El fondo tiene que estar disponible ya. Las acciones tientan por lo que pueden ganar, pero pueden estar abajo justo cuando las necesitás." },
    { q: "Si tu plata rindió 20% en el año y la inflación fue 25%, ¿qué pasó?", opciones: ["Ganaste 20%","Perdiste poder de compra: el rendimiento real fue de -4%","Ganaste 45%","Quedaste igual"], correcta: 1, explicacion: "Hay que comparar con la inflación. \"Ganaste 20%\" tienta porque tenés más pesos, pero comprás menos que antes." },
    { q: "Si una inversión rindió 30% y la inflación fue 25%, ¿cuál es el rendimiento real con la fórmula?", opciones: ["5% exacto","55%","Cerca del 4%","30%"], correcta: 2, explicacion: "(1,30 / 1,25) - 1 = 0,04. El 5% tienta porque es la resta, pero la resta es solo una aproximación." },
    { q: "Si querés saber la inflación de los últimos meses en Argentina, ¿dónde la buscás?", opciones: ["En el índice de precios (IPC) que publica el INDEC","En un comentario en redes","En el precio de un solo producto","En el resumen de la tarjeta"], correcta: 0, explicacion: "El IPC del INDEC es la fuente oficial. Un solo producto tienta por fácil, pero no representa todos los precios." },
    { q: "Si dejás $ 100.000 en el cajón un año con 25% de inflación, ¿qué pasa?", opciones: ["No pasa nada","Ganás 25%","Se convierten en dólares","Seguís teniendo $ 100.000, pero comprás bastante menos"], correcta: 3, explicacion: "La inflación reduce lo que podés comprar. \"No pasa nada\" tienta porque el billete sigue ahí, pero vale menos." },
    { q: "Si invertís $ 100.000 al 3% mensual y reinvertís los intereses 12 meses, ¿cuánto tenés?", opciones: ["$ 136.000","Unos $ 142.576","$ 103.000","$ 136.000.000"], correcta: 1, explicacion: "100.000 × 1,03^12 = 142.576. $ 136.000 tienta porque es el interés simple, pero acá los intereses también generan intereses." },
    { q: "Si querés aprovechar el interés compuesto, ¿qué hacés?", opciones: ["Sacás los intereses todos los meses","Esperás a tener mucha plata para empezar","Empezás antes y reinvertís lo que ganás","Elegís la comisión más alta"], correcta: 2, explicacion: "El tiempo y la reinversión lo hacen crecer. Esperar a tener mucha plata tienta, pero perdés el tiempo, que es lo más valioso." },
    { q: "Si no sabés cuándo es el mejor momento para invertir, ¿qué conviene?", opciones: ["Invertir una suma fija todos los meses","Esperar a que alguien te avise","Invertir todo de una vez en el día que más subió","No invertir nunca"], correcta: 0, explicacion: "Invertir de a poco evita tener que adivinar. Esperar un aviso tienta, pero nadie sabe con seguridad el mejor momento." },
    { q: "Si tenés una deuda que crece con interés compuesto, ¿qué concluís?", opciones: ["Que no importa","Que conviene pedir otra deuda","Que el interés compuesto solo existe en inversiones","Que conviene pagarla primero, porque crece igual que una inversión, pero en contra tuya"], correcta: 3, explicacion: "El interés compuesto también agranda las deudas. \"Solo existe en inversiones\" tienta, pero funciona igual en las deudas." },
    { q: "Si un curso o un video te dice exactamente en qué invertir, ¿qué tenés en cuenta?", opciones: ["Que es una garantía de ganar","Que la educación no es una recomendación: la decisión y el riesgo son tuyos","Que hay que hacerle caso sin preguntar","Que el riesgo lo asume quien lo dice"], correcta: 1, explicacion: "La educación te da herramientas para decidir. Tomarlo como garantía tienta, pero nadie puede asegurar lo que va a pasar." },
  ],
},
{
  id: "riesgo",
  icono: "⚖️",
  titulo: "Riesgo, plazo y diversificación",
  nivel: "Básico",
  objetivos: [
    "Comparar inversiones según rendimiento, riesgo, plazo y liquidez",
    "Definir tu perfil de inversor según tu objetivo y tu plazo",
    "Repartir la plata para que una mala inversión no arruine todo",
  ],
  lecciones: [
    { titulo: "Las cuatro preguntas", html: `
      <p class="idea">Toda inversión se puede comparar con cuatro preguntas. No existe una que sea la mejor en las cuatro a la vez: siempre hay que resignar algo.</p>
      <table>
        <tr><th>Pregunta</th><th>Concepto</th></tr>
        <tr><td>¿Cuánto puedo ganar?</td><td>Rendimiento</td></tr>
        <tr><td>¿Cuánto puedo perder y qué tan seguido sube y baja?</td><td>Riesgo</td></tr>
        <tr><td>¿Por cuánto tiempo dejo la plata?</td><td>Plazo</td></tr>
        <tr><td>¿Qué tan rápido la puedo recuperar si la necesito?</td><td>Liquidez</td></tr>
      </table>
      <p><strong>La regla de oro:</strong> a más rendimiento posible, más riesgo. Si alguien te ofrece mucho rendimiento sin riesgo, desconfiá (lo vas a ver en el módulo "Empezar seguro").</p>
      <p><strong>Volatilidad:</strong> cuánto sube y baja el precio de una inversión. Una acción puede bajar 20% en un mes y recuperarse al año siguiente, o no.</p>
      <p>Por ejemplo, un plazo fijo tiene riesgo bajo y rendimiento conocido, pero poca liquidez (la plata queda hasta el vencimiento); una acción puede rendir mucho más, pero también perder.</p>` },
    { titulo: "Tu perfil de inversor", html: `
      <p class="idea">Tu <strong>perfil de inversor</strong> resume cuánto riesgo podés y querés aceptar. Depende de tu objetivo, de tu plazo y de cómo reaccionás cuando una inversión baja.</p>
      <table>
        <tr><th>Perfil</th><th>Prioriza</th><th>Ejemplo de objetivo</th></tr>
        <tr><td>Conservador</td><td>No perder</td><td>Comprar una heladera en 6 meses</td></tr>
        <tr><td>Moderado</td><td>Crecer con algo de riesgo</td><td>Un viaje en 2 o 3 años</td></tr>
        <tr><td>Agresivo</td><td>Crecer más, aceptando bajas grandes</td><td>Algo para dentro de 10 años o más</td></tr>
      </table>
      <p><strong>El plazo manda:</strong> la plata que necesitás pronto no va a inversiones que suben y bajan mucho, porque puede estar abajo justo cuando la necesitás.</p>
      <p><strong>El test del sueño:</strong> si una baja del 20% no te dejaría dormir, tu perfil es más conservador de lo que creés.</p>
      <p><strong>En Argentina,</strong> los agentes de bolsa te hacen completar un test de perfil al abrir la cuenta. Respondelo con sinceridad.</p>
      <p>Por ejemplo, la misma persona puede ser conservadora con la plata del alquiler y agresiva con lo que ahorra para dentro de 15 años.</p>` },
    { titulo: "No poner todo en el mismo lugar", video: {"id":"3UHf7TEUmp4","t":"Qué es la diversificación · Economipedia (1:05)"}, html: `
      <p class="idea"><strong>Diversificar</strong> es repartir la plata en distintas inversiones, para que si una sale mal, no arrastre a todo el resto.</p>
      <pre><code>Con $ 1.000.000:

Todo en una sola inversión que cae 50%
→ perdés 500.000 (50% del total)

Repartido en 5 partes de 200.000, una cae 50%
→ perdés 100.000 (10% del total)</code></pre>
      <table>
        <tr><th>Formas de diversificar</th><th>Ejemplo</th></tr>
        <tr><td>Tipo de inversión</td><td>Parte en plazo fijo, parte en bonos, parte en acciones</td></tr>
        <tr><td>Moneda</td><td>Parte en pesos, parte en dólares</td></tr>
        <tr><td>Empresa y sector</td><td>No todo en una empresa ni en un solo rubro</td></tr>
        <tr><td>País</td><td>Parte en Argentina, parte en el exterior</td></tr>
        <tr><td>Tiempo</td><td>Invertir de a poco, todos los meses</td></tr>
      </table>
      <p><strong>Diversificar no elimina el riesgo:</strong> lo reduce. Si cae todo el mercado, también bajan las inversiones repartidas.</p>
      <p>Por ejemplo, tener 5 acciones de empresas del mismo rubro no es diversificar mucho: si al rubro le va mal, bajan todas juntas.</p>` },
  ],
  practica: [
    "Armá una tabla con 3 inversiones que conozcas y calificá de 1 a 5 su rendimiento, riesgo, plazo y liquidez. Anotá cuál resigna qué.",
    "Escribí 2 objetivos tuyos con monto y fecha, y anotá qué perfil le corresponde a cada uno.",
    "Calculá cuánto perderías con $ 500.000 si una inversión cae 40%: todo junto y repartido en 4 partes iguales. Compará los dos números.",
  ],
  recursos: [
    { t: "CNV: educación financiera", url: "https://www.argentina.gob.ar/cnv/educacion-financiera" },
    { t: "CNV: qué es el mercado de capitales", url: "https://www.argentina.gob.ar/cnv/que-es-el-mercado-de-capitales" },
  ],
  quiz: [
    { q: "Si te ofrecen una inversión con mucho rendimiento y \"sin ningún riesgo\", ¿qué concluís?", opciones: ["Que es la mejor oportunidad","Que hay que invertir todo ya","Que desconfiás: a más rendimiento posible, más riesgo","Que el riesgo no existe"], correcta: 2, explicacion: "Rendimiento alto y riesgo cero no van juntos. La oportunidad tienta, pero es la señal típica de una estafa." },
    { q: "Si querés saber qué tan rápido podés recuperar tu plata, ¿qué mirás?", opciones: ["La liquidez","El rendimiento","La volatilidad","El nombre de la inversión"], correcta: 0, explicacion: "Liquidez es la rapidez para recuperarla. El rendimiento tienta porque es lo primero que se mira, pero no dice cuándo la sacás." },
    { q: "Si el precio de una inversión sube y baja mucho de un mes a otro, ¿qué tiene?", opciones: ["Alta liquidez","Riesgo cero","Rendimiento garantizado","Alta volatilidad"], correcta: 3, explicacion: "Volatilidad es cuánto se mueve el precio. Liquidez tienta porque se mueve \"rápido\", pero es otra cosa." },
    { q: "Si comparás un plazo fijo con una acción, ¿qué es lo correcto?", opciones: ["La acción es siempre mejor","El plazo fijo tiene menos riesgo y la acción puede rendir más, pero también perder","El plazo fijo es siempre mejor","Son iguales"], correcta: 1, explicacion: "Cada una resigna algo. \"Siempre mejor\" tienta por simple, pero depende de tu objetivo y tu plazo." },
    { q: "Si necesitás la plata en 6 meses para comprar una heladera, ¿qué perfil le corresponde?", opciones: ["Agresivo","Moderado tirando a agresivo","Conservador","Ninguno"], correcta: 2, explicacion: "Con plazo corto, lo importante es no perder. Agresivo tienta para ganar más, pero puede estar abajo justo en el mes de la compra." },
    { q: "Si ahorrás para dentro de 15 años, ¿qué podés aceptar?", opciones: ["Más bajas en el camino, porque tenés tiempo para que se recupere","Nada de riesgo nunca","Que te pidan la plata mañana","Que no rinda nada"], correcta: 0, explicacion: "El plazo largo permite más riesgo. \"Nada de riesgo\" tienta por seguro, pero con 15 años podés perder contra la inflación." },
    { q: "Si una baja del 20% no te dejaría dormir, ¿qué te dice el test del sueño?", opciones: ["Que sos agresivo","Que tenés que invertir más","Que no importa","Que tu perfil es más conservador de lo que creías"], correcta: 3, explicacion: "Cómo reaccionás también define el perfil. \"Que tenés que invertir más\" tienta para recuperarte, pero aumenta el problema." },
    { q: "Si al abrir una cuenta en un agente de bolsa te piden un test de perfil, ¿qué hacés?", opciones: ["Ponés que sos agresivo para que te dejen todo","Lo respondés con sinceridad","Lo dejás en blanco","Lo responde otra persona por vos"], correcta: 1, explicacion: "El test sirve para protegerte. Exagerar tienta para tener más opciones, pero te expone a riesgos que no querés." },
    { q: "Si tenés $ 1.000.000 repartido en 5 partes iguales y una cae 50%, ¿cuánto perdés del total?", opciones: ["50%: $ 500.000","5%: $ 50.000","10%: $ 100.000","Nada"], correcta: 2, explicacion: "Cae la mitad de 200.000. El 50% tienta porque es lo que cayó esa parte, pero es una parte de cinco." },
    { q: "Si tenés 5 acciones, todas de empresas del mismo rubro, ¿estás bien diversificado?", opciones: ["No mucho: si al rubro le va mal, bajan todas juntas","Sí, porque son 5","Sí, totalmente","Sí, si son empresas grandes"], correcta: 0, explicacion: "Diversificar también es por sector. \"Son 5\" tienta por la cantidad, pero se mueven juntas." },
    { q: "Si cae todo el mercado, ¿qué pasa con una cartera diversificada?", opciones: ["No baja nunca","Sube","Se cierra sola","También puede bajar: diversificar reduce el riesgo, pero no lo elimina"], correcta: 3, explicacion: "Diversificar reduce el riesgo, no lo hace cero. \"No baja nunca\" tienta, pero las caídas generales afectan a casi todo." },
    { q: "Si querés diversificar en el tiempo, ¿qué hacés?", opciones: ["Invertís todo el mismo día","Invertís de a poco, todos los meses","Cambiás de inversión todos los días","Esperás a jubilarte"], correcta: 1, explicacion: "Invertir de a poco reparte el momento de compra. Todo el mismo día tienta por simple, pero depende de la suerte de ese día." },
  ],
},
{
  id: "plazo-fijo",
  icono: "🏦",
  titulo: "Plazo fijo y fondos comunes",
  nivel: "Intermedio",
  objetivos: [
    "Calcular cuánto paga un plazo fijo y elegir entre tradicional y UVA",
    "Explicar cómo funciona un fondo común de inversión y sus cuotapartes",
    "Elegir el tipo de fondo según tu plazo",
  ],
  lecciones: [
    { titulo: "Plazo fijo tradicional y UVA", html: `
      <p class="idea">Un <strong>plazo fijo</strong> es prestarle plata al banco por un tiempo fijo a cambio de un interés. Es de las inversiones más simples y se hace desde el home banking.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo paga</th><th>Plazo mínimo</th></tr>
        <tr><td>Tradicional</td><td>Una tasa fija que sabés de antemano</td><td>30 días</td></tr>
        <tr><td>UVA</td><td>Ajusta por inflación (UVA) más una tasa chica</td><td>Más largo (suele ser 90 días o más)</td></tr>
      </table>
      <pre><code>La tasa se informa como TNA (tasa nominal anual).
Interés = monto × TNA × días / 365

$ 500.000 al 36,5% TNA por 30 días:
500.000 × 0,365 × 30 / 365 = 15.000</code></pre>
      <p><strong>UVA:</strong> la Unidad de Valor Adquisitivo es una unidad que sube con la inflación. Un plazo fijo UVA te protege si la inflación es más alta que la tasa del tradicional.</p>
      <p><strong>Garantía:</strong> los depósitos en bancos tienen una garantía hasta un monto que fija el BCRA. Revisá el monto actual en el sitio del BCRA.</p>
      <p><strong>Liquidez:</strong> en el tradicional, la plata queda hasta el vencimiento. Algunos UVA permiten cancelar antes, con una tasa menor.</p>
      <p>Por ejemplo, si esperás que la inflación suba, el UVA suele convenir; si esperás que baje, el tradicional puede rendir más.</p>` },
    { titulo: "Qué es un fondo común de inversión", video: {"id":"HqWHm-Xl_IU","t":"Qué es un fondo común de inversión · A24 (6:44)"}, html: `
      <p class="idea">Un <strong>fondo común de inversión</strong> (FCI) junta la plata de muchas personas y la invierte un equipo profesional. Vos comprás partes del fondo, llamadas <strong>cuotapartes</strong>.</p>
      <pre><code>Comprás 1.000 cuotapartes a $ 1.200 = $ 1.200.000
Un mes después, cada cuotaparte vale $ 1.260
1.000 × 1.260 = $ 1.260.000 → ganaste $ 60.000 (5%)</code></pre>
      <table>
        <tr><th>Quién</th><th>Qué hace</th></tr>
        <tr><td>Sociedad gerente</td><td>Decide en qué invierte el fondo</td></tr>
        <tr><td>Sociedad depositaria (un banco)</td><td>Guarda los activos, separados de la gerente</td></tr>
        <tr><td>CNV</td><td>Controla que cumplan las reglas</td></tr>
      </table>
      <p><strong>Ventajas:</strong> se empieza con poca plata, ya viene diversificado y lo maneja alguien que se dedica a eso.</p>
      <p><strong>Costos:</strong> los fondos cobran honorarios, ya descontados del valor de la cuotaparte. Compará fondos parecidos.</p>
      <p><strong>Rendimientos pasados:</strong> no garantizan los futuros. En la CAFCI podés comparar fondos.</p>
      <p>Por ejemplo, con $ 10.000 no podrías comprar 20 bonos distintos, pero sí cuotapartes de un fondo que tiene esos 20 bonos.</p>` },
    { titulo: "Tipos de fondos", html: `
      <p class="idea">Cada fondo invierte en cosas distintas, con distinto riesgo y plazo. Elegilo según cuándo vas a necesitar la plata.</p>
      <table>
        <tr><th>Tipo de fondo</th><th>Invierte en</th><th>Riesgo</th><th>Plazo sugerido</th></tr>
        <tr><td>Money market (mercado de dinero)</td><td>Depósitos y colocaciones muy cortas</td><td>Bajo</td><td>Días o semanas</td></tr>
        <tr><td>Renta fija</td><td>Bonos y otras deudas</td><td>Bajo a medio</td><td>Meses o años</td></tr>
        <tr><td>Renta mixta</td><td>Bonos y acciones</td><td>Medio</td><td>1 a 3 años</td></tr>
        <tr><td>Renta variable</td><td>Acciones</td><td>Alto</td><td>3 años o más</td></tr>
      </table>
      <p><strong>Rescate:</strong> es sacar tu plata del fondo. Los money market suelen pagarla en el día; otros tardan 1 a 3 días hábiles.</p>
      <p><strong>Billeteras virtuales:</strong> muchas ofrecen "rendimiento" sobre el saldo. En general es un fondo money market: el rendimiento es variable y no tiene la garantía de los depósitos.</p>
      <p><strong>Leé el reglamento:</strong> todos los fondos tienen un reglamento público con en qué invierten, sus costos y plazos de rescate.</p>
      <p>Por ejemplo, la plata del fondo de emergencia encaja en un money market; lo que ahorrás para dentro de 5 años, en renta mixta o variable.</p>` },
  ],
  practica: [
    "Calculá el interés de un plazo fijo de $ 300.000 a 30 días con la TNA que ofrezca hoy tu banco. Anotá el resultado.",
    "Buscá en la CAFCI 2 fondos money market y compará su rendimiento del último mes. Anotalos en una tabla.",
    "Para 3 objetivos tuyos con fecha, anotá qué tipo de fondo elegirías y por qué.",
  ],
  recursos: [
    { t: "Banco Central de la República Argentina (BCRA)", url: "https://www.bcra.gob.ar/" },
    { t: "CAFCI: Cámara Argentina de Fondos Comunes de Inversión", url: "https://www.cafci.org.ar/" },
    { t: "CNV: preguntas frecuentes del público inversor", url: "https://www.argentina.gob.ar/cnv/proteccion-al-publico-inversor/preguntas-frecuentes-cnv" },
  ],
  quiz: [
    { q: "Si hacés un plazo fijo de $ 500.000 al 36,5% TNA por 30 días, ¿cuánto ganás?", opciones: ["$ 182.500","$ 36.500","$ 15.000","$ 1.500"], correcta: 2, explicacion: "500.000 × 0,365 × 30 / 365 = 15.000. $ 182.500 tienta porque es la tasa anual completa, pero son solo 30 días." },
    { q: "Si esperás que la inflación suba mucho, ¿qué plazo fijo suele convenir?", opciones: ["El UVA, porque ajusta por inflación","El tradicional siempre","Ninguno","Uno de un día"], correcta: 0, explicacion: "El UVA sigue a la inflación. El tradicional tienta por conocer la tasa, pero si la inflación sube, puede quedar abajo." },
    { q: "Si ves \"TNA\" en la oferta de un plazo fijo, ¿qué significa?", opciones: ["Lo que ganás en 30 días","La inflación del mes","La comisión del banco","Tasa nominal anual: lo que pagaría en un año, que se prorratea por los días"], correcta: 3, explicacion: "La TNA es anual. Pensar que es lo de 30 días tienta, pero hay que multiplicar por días / 365." },
    { q: "Si tenés tu plata en un plazo fijo en un banco, ¿qué protección tiene?", opciones: ["Ninguna","Una garantía de depósitos hasta un monto que fija el BCRA","Garantía ilimitada","La garantía de la CAFCI"], correcta: 1, explicacion: "Hay una garantía con tope. \"Ilimitada\" tienta por tranquilidad, pero tiene un monto máximo." },
    { q: "Si necesitás sacar la plata de un plazo fijo tradicional antes del vencimiento, ¿qué pasa?", opciones: ["La sacás cuando quieras sin costo","El banco te paga el doble","En general no se puede: la plata queda hasta el vencimiento","Se convierte en UVA"], correcta: 2, explicacion: "El tradicional tiene poca liquidez. \"Cuando quieras\" tienta, pero eso es una cuenta, no un plazo fijo." },
    { q: "Si comprás 1.000 cuotapartes a $ 1.200 y suben a $ 1.260, ¿cuánto ganaste?", opciones: ["$ 60.000, un 5%","$ 60","$ 1.260.000","$ 6.000"], correcta: 0, explicacion: "1.000 × 60 = 60.000. $ 60 tienta porque es la suba de una cuotaparte, pero tenés mil." },
    { q: "Si invertís en un FCI, ¿quién decide en qué se invierte la plata?", opciones: ["Vos, cada día","La CNV","El banco donde tenés la cuenta sueldo","La sociedad gerente"], correcta: 3, explicacion: "La gerente decide; la depositaria guarda y la CNV controla. La CNV tienta porque aparece, pero solo supervisa." },
    { q: "Si un fondo rindió mucho el año pasado, ¿qué concluís?", opciones: ["Que va a rendir igual","Que eso no garantiza lo que va a rendir","Que es el mejor siempre","Que no tiene riesgo"], correcta: 1, explicacion: "Los rendimientos pasados no garantizan los futuros. \"Va a rendir igual\" tienta, pero las condiciones cambian." },
    { q: "Si querés invertir el fondo de emergencia en un FCI, ¿qué tipo conviene?", opciones: ["Renta variable","Renta mixta a 3 años","Money market","El que más rindió"], correcta: 2, explicacion: "El money market tiene bajo riesgo y rescate rápido. El que más rindió tienta, pero suele ser el de más riesgo." },
    { q: "Si ahorrás para dentro de 5 años y aceptás altibajos, ¿qué fondo podés considerar?", opciones: ["Renta mixta o variable","Solo money market","Ninguno","Uno que no dice en qué invierte"], correcta: 0, explicacion: "Con plazo largo se puede aceptar más riesgo. Solo money market tienta por seguro, pero puede quedar abajo de la inflación." },
    { q: "Si una billetera virtual te da \"rendimiento\" sobre el saldo, ¿qué es en general?", opciones: ["Un plazo fijo garantizado","Un regalo de la billetera","Una cuenta en dólares","Un fondo money market, con rendimiento variable y sin la garantía de los depósitos"], correcta: 3, explicacion: "Suele ser un FCI. Pensar que es un plazo fijo tienta por lo parecido, pero no tiene la misma garantía." },
    { q: "Si querés saber en qué invierte un fondo y cuánto cobra, ¿qué leés?", opciones: ["Una publicidad","Su reglamento","Los comentarios de redes","Nada, son todos iguales"], correcta: 1, explicacion: "El reglamento es público y tiene esos datos. La publicidad tienta por clara, pero muestra solo lo bueno." },
  ],
},
{
  id: "bonos",
  icono: "📜",
  titulo: "Bonos y obligaciones negociables",
  nivel: "Intermedio",
  objetivos: [
    "Explicar qué es un bono y cómo paga cupones y capital",
    "Calcular cuánto cobrás de un bono según su valor nominal y su cupón",
    "Reconocer los riesgos de los bonos antes de comprarlos",
  ],
  lecciones: [
    { titulo: "Qué es un bono", video: {"id":"leEzt9zhk1M","t":"Qué es un bono y cómo funciona · Economipedia (3:41)"}, html: `
      <p class="idea">Un <strong>bono</strong> es un préstamo que le hacés a un gobierno o a una empresa. A cambio, te devuelve la plata en fechas acordadas, con intereses.</p>
      <table>
        <tr><th>Quién lo emite</th><th>Cómo se llama</th></tr>
        <tr><td>El Estado nacional</td><td>Bono soberano (o letra, si es de corto plazo)</td></tr>
        <tr><td>Una provincia</td><td>Bono provincial</td></tr>
        <tr><td>Una empresa</td><td>Obligación negociable (ON)</td></tr>
      </table>
      <p><strong>Renta fija:</strong> a los bonos se los llama así porque sus pagos están definidos de antemano. Pero "fija" no quiere decir "segura": el que emite puede no pagar.</p>
      <p><strong>Se compran y venden en la bolsa:</strong> a través de un agente (lo vas a ver en el módulo "Empezar seguro"), en pesos o en dólares, según el bono.</p>
      <p>Por ejemplo, una ON de una empresa que necesita plata para una planta nueva le pide prestado al público, en lugar de a un banco, y paga intereses a quienes compran la ON.</p>` },
    { titulo: "Cupón, capital y vencimiento", html: `
      <p class="idea">Cada bono tiene sus condiciones escritas en el <strong>prospecto</strong>: cuánto paga, cuándo y hasta qué fecha.</p>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>Valor nominal (VN)</td><td>El monto sobre el que se calculan los pagos (suele ser 100)</td></tr>
        <tr><td>Cupón</td><td>El pago de intereses, en un porcentaje del valor nominal</td></tr>
        <tr><td>Amortización</td><td>La devolución del capital, toda al final o en cuotas</td></tr>
        <tr><td>Vencimiento</td><td>La fecha del último pago</td></tr>
        <tr><td>Precio</td><td>Lo que cuesta hoy en la bolsa; puede ser más o menos que el VN</td></tr>
      </table>
      <pre><code>Bono con VN 100, cupón 6% anual, vence en 3 años,
devuelve el capital al final. Comprás VN 1.000 a precio 90.

Pagás:        1.000 × 0,90 = 900
Cupón anual:  1.000 × 0,06 = 60 por año, 3 años = 180
Al vencer:    te devuelven 1.000
Total cobrado: 180 + 1.000 = 1.180 por haber puesto 900</code></pre>
      <p><strong>Comprar debajo de 100</strong> suma ganancia al vencimiento; comprar arriba de 100 la reduce.</p>
      <p>Por ejemplo, si el mismo bono cotiza a 110, pagás 1.100 por VN 1.000 y al vencer te devuelven 1.000: perdés 100 de capital, que se compensa en parte con los cupones.</p>` },
    { titulo: "Los riesgos de los bonos", html: `
      <p class="idea">Los bonos tienen menos volatilidad que las acciones, pero no son libres de riesgo. Estos son los principales.</p>
      <table>
        <tr><th>Riesgo</th><th>Qué puede pasar</th></tr>
        <tr><td>Que no paguen (default)</td><td>El emisor no paga o cambia las condiciones. Argentina tuvo varios defaults de su deuda.</td></tr>
        <tr><td>De tasa</td><td>Si suben las tasas, baja el precio de los bonos que ya existen</td></tr>
        <tr><td>De liquidez</td><td>Algunos bonos tienen pocos compradores y cuesta venderlos</td></tr>
        <tr><td>De moneda</td><td>Un bono en pesos pierde si la inflación o el dólar suben más de lo que paga</td></tr>
      </table>
      <p><strong>Calificación:</strong> las calificadoras de riesgo ponen una nota a los bonos (como AAA o BB). Una nota más baja indica más riesgo de que no paguen, y por eso suelen ofrecer más interés.</p>
      <p><strong>Si lo mantenés hasta el vencimiento</strong> y el emisor paga, cobrás lo acordado, aunque el precio haya subido y bajado en el camino.</p>
      <p>Por ejemplo, un bono que promete 20% anual en dólares, cuando otros similares pagan 8%, te está diciendo que el mercado ve mucho riesgo de que no pague.</p>` },
  ],
  practica: [
    "Calculá cuánto cobrás en total con VN 2.000 de un bono con cupón 5% anual que vence en 4 años, comprado a precio 95. Anotá lo que pagaste y lo que cobrás.",
    "Buscá en el sitio de BYMA o de la CNV qué es una obligación negociable y anotá 3 datos que tiene que tener su prospecto.",
    "Armá una tabla con los 4 riesgos de los bonos y anotá un ejemplo de cada uno con tus palabras.",
  ],
  recursos: [
    { t: "BYMA: Bolsas y Mercados Argentinos", url: "https://www.byma.com.ar/" },
    { t: "CNV: qué es el mercado de capitales", url: "https://www.argentina.gob.ar/cnv/que-es-el-mercado-de-capitales" },
    { t: "CNV: preguntas frecuentes del público inversor", url: "https://www.argentina.gob.ar/cnv/proteccion-al-publico-inversor/preguntas-frecuentes-cnv" },
  ],
  quiz: [
    { q: "Si comprás un bono, ¿qué estás haciendo?", opciones: ["Comprás parte de una empresa","Hacés un depósito garantizado","Le prestás plata a un gobierno o a una empresa a cambio de intereses","Comprás dólares"], correcta: 2, explicacion: "Un bono es un préstamo. Comprar parte de una empresa tienta, pero eso es una acción." },
    { q: "Si una empresa pide prestado al público con un título, ¿cómo se llama en Argentina?", opciones: ["Obligación negociable (ON)","Plazo fijo","Cuotaparte","CEDEAR"], correcta: 0, explicacion: "Las ON son los bonos de empresas. Cuotaparte tienta porque también se compra, pero es de un fondo." },
    { q: "Si un bono es de \"renta fija\", ¿qué significa?", opciones: ["Que es 100% seguro","Que su precio no cambia nunca","Que paga lo mismo que un plazo fijo","Que sus pagos están definidos de antemano, aunque el emisor puede no pagar"], correcta: 3, explicacion: "\"Fija\" habla de los pagos, no de la seguridad. \"100% seguro\" tienta por el nombre, pero hay riesgo de default." },
    { q: "Si un bono tiene VN 1.000 y cupón del 6% anual, ¿cuánto cobrás de intereses por año?", opciones: ["6","60","600","1.060"], correcta: 1, explicacion: "1.000 × 0,06 = 60. 1.060 tienta porque suma el capital, pero ese se devuelve al vencimiento." },
    { q: "Si querés saber cuándo y cuánto paga un bono, ¿dónde lo buscás?", opciones: ["En una publicidad","En el precio de hoy","En su prospecto","En las redes del emisor"], correcta: 2, explicacion: "El prospecto tiene las condiciones. El precio tienta por estar a mano, pero no dice cuándo paga." },
    { q: "Si comprás VN 1.000 a precio 90 y lo mantenés hasta el vencimiento, ¿cuánto capital te devuelven?", opciones: ["1.000","900","90","1.090"], correcta: 0, explicacion: "Al vencer te devuelven el valor nominal. 900 tienta porque es lo que pagaste, pero ahí está parte de la ganancia." },
    { q: "Si un bono cotiza a 110, ¿qué pasa con el capital al vencimiento?", opciones: ["Ganás 10","Te devuelven 110","No cambia nada","Pagaste más de lo que te devuelven: perdés esa diferencia de capital"], correcta: 3, explicacion: "Te devuelven 100 por cada 110 que pagaste. \"Ganás 10\" tienta por el número, pero es al revés." },
    { q: "Si un emisor no paga lo que prometió en su bono, ¿cómo se llama?", opciones: ["Cupón","Default","Amortización","Rescate"], correcta: 1, explicacion: "Default es no pagar. Amortización tienta porque es un pago, pero es la devolución del capital." },
    { q: "Si suben las tasas de interés, ¿qué suele pasar con el precio de los bonos que ya existen?", opciones: ["Sube","No cambia","Baja","Se duplica"], correcta: 2, explicacion: "Los nuevos pagan más, así que los viejos valen menos. \"Sube\" tienta porque \"suben las tasas\", pero el precio va al revés." },
    { q: "Si un bono tiene calificación baja, ¿qué suele ofrecer?", opciones: ["Más interés, porque tiene más riesgo de no pagar","Menos interés","Garantía del Estado","Riesgo cero"], correcta: 0, explicacion: "Más riesgo se compensa con más interés. Menos interés tienta porque \"es peor\", pero es al revés." },
    { q: "Si un bono promete 20% anual en dólares y otros similares pagan 8%, ¿qué concluís?", opciones: ["Que es una oportunidad sin riesgo","Que es un error","Que es el mejor bono","Que el mercado ve mucho riesgo de que no pague"], correcta: 3, explicacion: "Un rendimiento mucho más alto es señal de riesgo. \"Oportunidad\" tienta, pero el mercado lo descuenta por algo." },
    { q: "Si tenés un bono en pesos que paga 20% y la inflación fue 30%, ¿qué pasó?", opciones: ["Ganaste 20%","Perdiste poder de compra: es el riesgo de moneda","Ganaste 50%","Es riesgo de tasa"], correcta: 1, explicacion: "Hay que compararlo con la inflación, como en \"Antes de invertir\". \"Ganaste 20%\" tienta por los pesos, pero comprás menos." },
  ],
},
{
  id: "acciones",
  icono: "📈",
  titulo: "Acciones y CEDEAR",
  nivel: "Intermedio",
  objetivos: [
    "Explicar cómo se gana y cómo se pierde con una acción",
    "Calcular cuánto vale un CEDEAR a partir de su ratio",
    "Decidir qué parte de tu plata puede ir a acciones según tu plazo",
  ],
  lecciones: [
    { titulo: "Qué es una acción", html: `
      <p class="idea">Una <strong>acción</strong> es una parte de una empresa. Si comprás acciones, sos socio: te va bien si a la empresa le va bien, y mal si le va mal.</p>
      <table>
        <tr><th>Cómo se gana</th><th>Cómo se pierde</th></tr>
        <tr><td>Sube el precio y vendés más caro de lo que compraste</td><td>Baja el precio y vendés más barato</td></tr>
        <tr><td>Dividendos: la empresa reparte parte de sus ganancias</td><td>La empresa quiebra y la acción vale casi nada</td></tr>
      </table>
      <pre><code>Comprás 50 acciones a $ 2.000 = $ 100.000
Un año después: precio $ 2.300 y cobraste $ 40 de dividendo por acción

Ganancia por precio:   50 × 300 = 15.000
Dividendos:            50 × 40  =  2.000
Total: 17.000 → 17% en pesos (comparalo con la inflación)</code></pre>
      <p><strong>Renta variable:</strong> a las acciones se las llama así porque no sabés de antemano cuánto vas a ganar o perder.</p>
      <p><strong>Índice:</strong> un número que resume cómo les va a un grupo de acciones. En Argentina, el más conocido es el S&amp;P Merval.</p>
      <p>Por ejemplo, una acción puede bajar 30% en un año malo y subir 50% al siguiente: por eso conviene solo para plata que no vas a necesitar en varios años.</p>` },
    { titulo: "CEDEAR: empresas del exterior en pesos", html: `
      <p class="idea">Un <strong>CEDEAR</strong> (Certificado de Depósito Argentino) representa acciones de empresas o fondos del exterior, pero se compra en la bolsa argentina, en pesos o en dólares.</p>
      <table>
        <tr><th>Concepto</th><th>Qué es</th></tr>
        <tr><td>Ratio</td><td>Cuántos CEDEAR equivalen a una acción del exterior (por ejemplo, 10 a 1)</td></tr>
        <tr><td>Precio en pesos</td><td>Sigue al precio de la acción en dólares por el tipo de cambio de la bolsa</td></tr>
        <tr><td>Dividendos</td><td>Si la empresa los paga, te llegan en proporción</td></tr>
      </table>
      <pre><code>Una acción del exterior vale US$ 200. Ratio 10 a 1.
Cada CEDEAR equivale a US$ 200 / 10 = US$ 20.
Con un dólar de bolsa a $ 1.500:  20 × 1.500 = $ 30.000 por CEDEAR</code></pre>
      <p><strong>Dos cosas mueven el precio:</strong> la acción en el exterior y el tipo de cambio. Si el dólar sube y la acción queda igual, el CEDEAR sube en pesos.</p>
      <p><strong>Para qué sirven:</strong> para diversificar por país y por moneda, con montos chicos.</p>
      <p>Por ejemplo, si la acción del exterior baja 10% y el dólar de bolsa sube 10%, el CEDEAR en pesos queda más o menos igual.</p>` },
    { titulo: "Acciones con cabeza", html: `
      <p class="idea">Las acciones pueden ser buenas a largo plazo, pero tienen reglas para no salir lastimado.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Solo plata que no necesitás en 3 a 5 años o más</td><td>Para tener tiempo de recuperarte de una caída</td></tr>
        <tr><td>Muchas empresas, no una</td><td>Si a una le va mal, no te arrastra; un fondo o un CEDEAR de índice ya viene repartido</td></tr>
        <tr><td>No compres por un dato de redes</td><td>Cuando el dato llega a vos, el precio muchas veces ya subió</td></tr>
        <tr><td>No vendas por pánico</td><td>Vender en la caída convierte una baja temporal en una pérdida real</td></tr>
        <tr><td>Una parte, no todo</td><td>Según tu perfil, de 0% a una parte de tu cartera</td></tr>
      </table>
      <p><strong>Especular no es invertir:</strong> comprar y vender todos los días buscando ganar rápido se parece más a apostar, y las comisiones se comen las ganancias.</p>
      <p>Por ejemplo, alguien que compró justo antes de una caída del 30% y vendió asustado perdió el 30%; quien esperó con un plan de largo plazo tuvo la chance de recuperarse.</p>` },
  ],
  practica: [
    "Calculá la ganancia total de 30 acciones compradas a $ 1.500 que hoy valen $ 1.650 y pagaron $ 25 de dividendo cada una. Anotá el porcentaje.",
    "Calculá cuánto vale en pesos un CEDEAR de ratio 5 a 1 si la acción vale US$ 150 y el dólar de bolsa $ 1.400. Anotá el resultado.",
    "Anotá qué porcentaje de tus ahorros pondrías en acciones según tu perfil y tu plazo, y por qué.",
  ],
  recursos: [
    { t: "BYMA: Bolsas y Mercados Argentinos", url: "https://www.byma.com.ar/" },
    { t: "CNV: qué es el mercado de capitales", url: "https://www.argentina.gob.ar/cnv/que-es-el-mercado-de-capitales" },
    { t: "CNV: educación financiera", url: "https://www.argentina.gob.ar/cnv/educacion-financiera" },
  ],
  quiz: [
    { q: "Si comprás acciones de una empresa, ¿qué sos?", opciones: ["Prestamista de la empresa","Cliente de la empresa","Socio de una parte de la empresa","Empleado de la empresa"], correcta: 2, explicacion: "La acción es una parte de la empresa. Prestamista tienta, pero eso es comprar un bono o una ON." },
    { q: "Si una empresa reparte parte de sus ganancias entre sus accionistas, ¿cómo se llama?", opciones: ["Dividendo","Cupón","Cuotaparte","Comisión"], correcta: 0, explicacion: "El dividendo es la ganancia repartida. Cupón tienta porque también es un pago, pero es de los bonos." },
    { q: "Si comprás 50 acciones a $ 2.000, suben a $ 2.300 y cobrás $ 40 de dividendo por acción, ¿cuánto ganás?", opciones: ["$ 15.000","$ 300","$ 2.040","$ 17.000"], correcta: 3, explicacion: "15.000 por precio + 2.000 de dividendos. $ 15.000 tienta porque es solo el precio, pero falta el dividendo." },
    { q: "Si a las acciones se las llama \"renta variable\", ¿qué significa?", opciones: ["Que siempre ganan","Que no sabés de antemano cuánto vas a ganar o perder","Que pagan un cupón fijo","Que no tienen riesgo"], correcta: 1, explicacion: "Variable porque no está definido. \"Siempre ganan\" tienta por las historias de éxito, pero también pierden." },
    { q: "Si querés saber cómo les va en general a las acciones argentinas, ¿qué mirás?", opciones: ["El precio de una sola acción","La tasa del plazo fijo","Un índice, como el S&P Merval","El valor de una cuotaparte"], correcta: 2, explicacion: "El índice resume un grupo de acciones. Una sola acción tienta por fácil, pero puede ir distinto al resto." },
    { q: "Si querés invertir en una empresa del exterior desde la bolsa argentina, ¿qué podés comprar?", opciones: ["Un CEDEAR","Una ON","Un plazo fijo UVA","Una letra del Tesoro"], correcta: 0, explicacion: "El CEDEAR representa acciones del exterior. La ON tienta porque es de empresas, pero es deuda de empresas locales." },
    { q: "Si una acción del exterior vale US$ 200, el ratio es 10 a 1 y el dólar de bolsa $ 1.500, ¿cuánto vale el CEDEAR?", opciones: ["$ 300.000","$ 3.000","$ 200","$ 30.000"], correcta: 3, explicacion: "200 / 10 = 20 dólares × 1.500 = 30.000. $ 300.000 tienta porque es la acción entera, pero el ratio la divide en 10." },
    { q: "Si la acción del exterior queda igual y el dólar de bolsa sube, ¿qué pasa con el CEDEAR en pesos?", opciones: ["Baja","Sube","Queda igual","Deja de cotizar"], correcta: 1, explicacion: "El tipo de cambio también mueve el precio. \"Queda igual\" tienta porque la acción no cambió, pero sí el dólar." },
    { q: "Si vas a necesitar la plata en 1 año, ¿conviene ponerla en acciones?", opciones: ["Sí, rinden más","Sí, si es una sola empresa","No: las acciones son para plata que no necesitás en 3 a 5 años o más","Sí, siempre"], correcta: 2, explicacion: "Con plazo corto no hay tiempo de recuperarte de una caída. \"Rinden más\" tienta, pero también pueden perder justo ese año." },
    { q: "Si ves en redes que \"esta acción va a explotar\", ¿qué hacés?", opciones: ["No comprás por eso: cuando el dato llega a vos, el precio muchas veces ya subió","Comprás todo lo que puedas","Pedís un préstamo para comprar","Lo compartís y comprás"], correcta: 0, explicacion: "Los datos de redes llegan tarde y a veces son para que otros vendan caro. Comprar ya tienta, pero es apostar." },
    { q: "Si tus acciones bajaron 30% y tenés un plan a 10 años, ¿qué hacés?", opciones: ["Vendés todo ya","Pedís un préstamo para comprar más sin pensar","Cerrás la cuenta","No vendés por pánico: revisás el plan y tu perfil"], correcta: 3, explicacion: "Vender en la caída convierte la baja en una pérdida real. Vender ya tienta por miedo, pero es el peor momento." },
    { q: "Si comprás y vendés acciones todos los días buscando ganar rápido, ¿qué estás haciendo?", opciones: ["Invertir a largo plazo","Especular: se parece más a apostar y las comisiones se comen las ganancias","Diversificar","Ahorrar sin riesgo"], correcta: 1, explicacion: "Eso es especulación. Diversificar tienta porque comprás muchas cosas, pero no es lo mismo." },
  ],
},
{
  id: "operar",
  icono: "🛡️",
  titulo: "Empezar seguro: agentes, costos y estafas",
  nivel: "Avanzado",
  objetivos: [
    "Verificar que un agente esté registrado en la CNV antes de abrir una cuenta",
    "Calcular cuánto te cuestan las comisiones de una operación",
    "Detectar las señales de una estafa financiera",
  ],
  lecciones: [
    { titulo: "Agentes y cuenta comitente", html: `
      <p class="idea">Para comprar bonos, acciones o CEDEAR necesitás una <strong>cuenta comitente</strong> en un agente de bolsa registrado. Los fondos comunes se pueden comprar también en bancos.</p>
      <table>
        <tr><th>Quién</th><th>Qué hace</th></tr>
        <tr><td>ALyC (Agente de Liquidación y Compensación)</td><td>Abre tu cuenta y ejecuta tus compras y ventas</td></tr>
        <tr><td>Mercado (como BYMA)</td><td>Donde se encuentran compradores y vendedores</td></tr>
        <tr><td>Caja de Valores</td><td>Guarda a tu nombre los títulos que compraste</td></tr>
        <tr><td>CNV (Comisión Nacional de Valores)</td><td>Registra a los agentes y controla el mercado</td></tr>
      </table>
      <pre><code>Antes de abrir una cuenta:
1. Buscá el agente en los registros públicos de la CNV.
2. Verificá que el nombre y el número coincidan exactamente.
3. Transferí solo a una cuenta a nombre del agente, nunca de una persona.</code></pre>
      <p><strong>Para abrirla te piden:</strong> DNI, CUIL o CUIT, una cuenta bancaria a tu nombre y el test de perfil.</p>
      <p>Por ejemplo, un "asesor" que te pide transferirle a su cuenta personal para "invertir por vos" no es un agente registrado, aunque tenga una página linda.</p>` },
    { titulo: "Costos e impuestos", html: `
      <p class="idea">Cada operación tiene costos, y algunas inversiones pagan impuestos. Si no los sumás, podés creer que ganaste cuando en realidad no.</p>
      <table>
        <tr><th>Costo</th><th>Qué es</th></tr>
        <tr><td>Comisión del agente</td><td>Un porcentaje de cada compra y venta</td></tr>
        <tr><td>Derechos de mercado</td><td>Lo que cobra el mercado por operar</td></tr>
        <tr><td>Honorarios de un fondo</td><td>Ya descontados del valor de la cuotaparte</td></tr>
        <tr><td>Mantenimiento o custodia</td><td>Algunos agentes cobran un monto fijo por mes</td></tr>
      </table>
      <pre><code>Comprás $ 200.000 en acciones con 0,5% de comisión: pagás 1.000
Vendés a $ 206.000 con 0,5% de comisión:           pagás 1.030
Ganancia bruta 6.000 - comisiones 2.030 = 3.970 neta</code></pre>
      <p><strong>Operar mucho multiplica las comisiones:</strong> por eso especular todos los días suele terminar en pérdida.</p>
      <p><strong>Impuestos:</strong> según el monto de tu patrimonio y el tipo de inversión, pueden corresponder impuestos como Bienes Personales o Ganancias. Las reglas cambian: consultá a un contador o el sitio de ARCA (ex-AFIP).</p>
      <p>Por ejemplo, una ganancia de 3% en una operación puede quedar casi en cero si pagaste 1% al comprar, 1% al vender y otro costo fijo de custodia.</p>` },
    { titulo: "Cómo reconocer una estafa", video: {"id":"S_Qe81iaOV0","t":"Esquemas Ponzi o estafa piramidal · CNMV, el organismo que controla el mercado en España (2:15)"}, html: `
      <p class="idea">Muchas estafas se presentan como inversiones. Un <strong>esquema Ponzi</strong> paga a los primeros con la plata de los que entran después, hasta que deja de entrar gente y se derrumba.</p>
      <table>
        <tr><th>Señal de alarma</th><th>Ejemplo</th></tr>
        <tr><td>Rendimiento alto "garantizado"</td><td>"5% por semana, seguro"</td></tr>
        <tr><td>Apuro</td><td>"Quedan 2 lugares, decidí hoy"</td></tr>
        <tr><td>Ganás por traer gente</td><td>"Sumá a 3 amigos y cobrás más"</td></tr>
        <tr><td>No está registrado en la CNV</td><td>No aparece en los registros públicos</td></tr>
        <tr><td>Transferir a una persona</td><td>CBU o alias de un particular, cripto a una billetera desconocida</td></tr>
        <tr><td>No te explican en qué invierte</td><td>"Es un sistema secreto", "un robot que nunca pierde"</td></tr>
      </table>
      <p><strong>Ante la duda:</strong> no transfieras, buscá el nombre en la CNV y consultá en sus canales de atención al público.</p>
      <p><strong>Si ya caíste:</strong> guardá todos los mensajes y comprobantes, hacé la denuncia policial o en la fiscalía e informá a la CNV.</p>
      <p>Por ejemplo, un grupo que te paga puntualmente los primeros meses no prueba que sea seguro: así funcionan los esquemas Ponzi para que pongas más y traigas a otros.</p>` },
  ],
  practica: [
    "Elegí un agente de bolsa que conozcas por nombre y buscalo en los registros públicos de la CNV. Anotá si aparece y con qué número.",
    "Calculá la ganancia neta de comprar $ 150.000 y vender a $ 156.000 con 0,6% de comisión en cada operación. Anotá el resultado.",
    "Buscá una publicidad de \"inversión\" en redes y anotá cuántas de las 6 señales de alarma tiene.",
  ],
  recursos: [
    { t: "CNV: registros públicos (para ver si un agente está registrado)", url: "https://www.argentina.gob.ar/cnv/registros-publicos" },
    { t: "CNV: preguntas frecuentes del público inversor", url: "https://www.argentina.gob.ar/cnv/proteccion-al-publico-inversor/preguntas-frecuentes-cnv" },
    { t: "BYMA: Bolsas y Mercados Argentinos", url: "https://www.byma.com.ar/" },
  ],
  quiz: [
    { q: "Si querés comprar acciones o bonos en la bolsa, ¿qué necesitás?", opciones: ["Solo una cuenta en una red social","Una tarjeta de crédito","Una cuenta comitente en un agente registrado en la CNV","Transferirle a un asesor particular"], correcta: 2, explicacion: "Se opera a través de un agente registrado. El asesor particular tienta por cercano, pero tu plata no queda a tu nombre." },
    { q: "Si querés saber si un agente está habilitado, ¿qué hacés?", opciones: ["Lo buscás en los registros públicos de la CNV","Mirás si tiene muchos seguidores","Le preguntás a él","Te fijás si la página es linda"], correcta: 0, explicacion: "El registro de la CNV es la fuente oficial. Los seguidores tientan como prueba, pero se pueden comprar." },
    { q: "Si compraste acciones a través de un agente, ¿quién las guarda a tu nombre?", opciones: ["El agente en su casa","Vos en papel","La CAFCI","La Caja de Valores"], correcta: 3, explicacion: "La Caja de Valores custodia los títulos a tu nombre. El agente tienta porque es con quien operás, pero no los guarda él." },
    { q: "Si un \"asesor\" te pide transferirle a su cuenta personal para invertir por vos, ¿qué concluís?", opciones: ["Que es lo normal","Que no es una operación por un agente registrado: es muy riesgoso o una estafa","Que es más rápido y está bien","Que así se evitan comisiones"], correcta: 1, explicacion: "Las transferencias van a una cuenta a nombre del agente. Evitar comisiones tienta, pero perdés toda protección." },
    { q: "Si comprás $ 200.000 con 0,5% de comisión y vendés a $ 206.000 con 0,5%, ¿cuánto ganás neto?", opciones: ["$ 6.000","$ 5.000","$ 3.970","$ 4.970"], correcta: 2, explicacion: "6.000 - 1.000 - 1.030 = 3.970. $ 6.000 tienta porque es la diferencia de precio, pero faltan las comisiones." },
    { q: "Si operás muchas veces por semana, ¿qué pasa con los costos?", opciones: ["Se multiplican las comisiones y se comen las ganancias","Bajan","No hay costos","Te devuelven las comisiones"], correcta: 0, explicacion: "Cada operación paga comisión. \"Bajan\" tienta por las promociones, pero se suman en cada compra y venta." },
    { q: "Si invertís en un fondo común, ¿cómo pagás sus honorarios?", opciones: ["No tiene honorarios","Con una factura mensual aparte","Los paga la CNV","Ya están descontados del valor de la cuotaparte"], correcta: 3, explicacion: "Están dentro del valor de la cuotaparte. \"No tiene\" tienta porque no los ves, pero existen." },
    { q: "Si no sabés si tus inversiones pagan impuestos, ¿qué hacés?", opciones: ["Suponés que nunca pagan","Consultás a un contador o el sitio de ARCA, porque las reglas cambian","Le preguntás a un grupo de redes","No declarás nada"], correcta: 1, explicacion: "Las reglas dependen del caso y cambian. Suponer que nunca pagan tienta, pero podés tener problemas después." },
    { q: "Si te ofrecen \"5% por semana, garantizado\", ¿qué señal es?", opciones: ["Una buena oportunidad","Un plazo fijo especial","Una señal de estafa: rendimiento alto garantizado","Algo normal en la bolsa"], correcta: 2, explicacion: "Nadie puede garantizar eso. \"Oportunidad\" tienta por el número, pero es la señal más típica de un esquema Ponzi." },
    { q: "Si una inversión te paga más por sumar amigos, ¿qué puede ser?", opciones: ["Un esquema piramidal: vive de que entre gente nueva","Un fondo común","Un bono","Un premio por fidelidad"], correcta: 0, explicacion: "Ganar por traer gente es típico de las pirámides. El premio por fidelidad tienta como explicación, pero es la señal de alarma." },
    { q: "Si una inversión te pagó puntualmente 3 meses, ¿eso prueba que es segura?", opciones: ["Sí, ya está probado","Sí, si es en dólares","Sí, si te lo recomendó un amigo","No: los esquemas Ponzi pagan al principio para que pongas más y traigas a otros"], correcta: 3, explicacion: "Pagar al principio es parte de la estafa. \"Ya está probado\" tienta por los pagos recibidos, pero se paga con la plata de otros." },
    { q: "Si ya transferiste plata a algo que resultó ser una estafa, ¿qué hacés?", opciones: ["Ponés más plata para recuperar","Guardás mensajes y comprobantes, hacés la denuncia e informás a la CNV","Borrás todo por vergüenza","No hacés nada"], correcta: 1, explicacion: "Las pruebas y la denuncia son tu chance de recuperar algo. Poner más tienta para recuperar, pero solo agranda la pérdida." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu plan de inversión",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de inversión con objetivos, perfil y reparto de la plata",
    "Evaluarlo con una rúbrica y corregir lo que falte",
    "Definir cómo vas a revisar el plan cada cierto tiempo",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>plan de inversión</strong>: un documento de una página que dice para qué invertís, cuánto, en qué y cómo lo vas a revisar. Podés hacerlo con números reales o imaginarios.</p>
      <table>
        <tr><th>Parte del plan</th><th>Módulo</th></tr>
        <tr><td>Deudas resueltas y fondo de emergencia</td><td>Antes de invertir</td></tr>
        <tr><td>2 o 3 objetivos con monto, fecha y perfil</td><td>Riesgo, plazo y diversificación</td></tr>
        <tr><td>Reparto de la plata en porcentajes, con el porqué</td><td>Plazo fijo y fondos, Bonos, Acciones</td></tr>
        <tr><td>Agente verificado en la CNV y costos calculados</td><td>Empezar seguro</td></tr>
        <tr><td>Cuánto vas a sumar por mes y cada cuánto revisás</td><td>Antes de invertir</td></tr>
      </table>
      <pre><code>Ejemplo de reparto (perfil moderado, objetivo a 3 años):
40% fondo money market o plazo fijo  → liquidez y bajo riesgo
35% bonos o fondo de renta fija      → cupones
25% CEDEAR de índice o fondo de acciones → crecimiento
Suma: 100%</code></pre>
      <p>Por ejemplo, alguien con perfil conservador y un objetivo a 6 meses podría tener 100% en plazo fijo y money market, y está bien: el plan tiene que encajar con el objetivo.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu plan.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Base</td><td>Sin deudas caras y con fondo de emergencia</td><td>Fondo incompleto</td><td>Invierte con deudas caras</td></tr>
        <tr><td>Objetivos</td><td>Con monto, fecha y perfil</td><td>Falta uno de los tres</td><td>Vagos</td></tr>
        <tr><td>Coherencia</td><td>El riesgo de cada inversión encaja con el plazo</td><td>Algún desajuste chico</td><td>Plata de corto plazo en acciones</td></tr>
        <tr><td>Diversificación</td><td>Repartido por tipo, moneda o país</td><td>Poco repartido</td><td>Todo en una sola inversión</td></tr>
        <tr><td>Costos y rendimiento real</td><td>Comisiones e inflación calculadas</td><td>Una de las dos</td><td>Ninguna</td></tr>
        <tr><td>Seguridad</td><td>Agente verificado en la CNV y sin señales de estafa</td><td>—</td><td>Agente no verificado o alguna señal de estafa</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Seguridad" tiene 0, el plan no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un plan muy bien repartido que usa un "asesor" no registrado saca 0 en seguridad y no está listo.</p>` },
    { titulo: "Revisar y seguir aprendiendo", html: `
      <p class="idea">Un plan de inversión no se arma una vez y se olvida. Se revisa cada cierto tiempo, sin mirarlo todos los días.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué revisar</th></tr>
        <tr><td>Cada 3 o 6 meses</td><td>Si el reparto sigue cerca de los porcentajes del plan</td></tr>
        <tr><td>Cuando cambia tu vida</td><td>Un trabajo nuevo, un hijo, una mudanza: cambian los objetivos y el perfil</td></tr>
        <tr><td>Cuando se acerca una fecha</td><td>Pasar a inversiones de menos riesgo lo que vas a necesitar pronto</td></tr>
      </table>
      <p><strong>Rebalancear:</strong> volver a los porcentajes del plan. Si las acciones subieron y pasaron de 25% a 35%, vendés una parte y la pasás a lo que quedó abajo.</p>
      <p><strong>Seguir aprendiendo:</strong> la CNV tiene material y videos de educación financiera; la CAFCI permite comparar fondos; BYMA explica los instrumentos que se negocian.</p>
      <p><strong>Un registro simple:</strong> una planilla con fecha, qué compraste, a qué precio, comisiones y valor actual te muestra cómo vas de verdad.</p>
      <p>Por ejemplo, alguien que revisa cada 6 meses y rebalancea evita que una sola inversión que subió mucho termine siendo casi todo su riesgo.</p>` },
  ],
  practica: [
    "Armá tu plan de inversión con las 5 partes del encargo y un reparto que sume 100%. Anotá la fecha.",
    "Evaluá tu plan con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Armá la planilla de registro con fecha, qué, precio, comisión y valor actual, y cargá al menos 2 filas (reales o imaginarias).",
  ],
  recursos: [
    { t: "CNV: educación financiera", url: "https://www.argentina.gob.ar/cnv/educacion-financiera" },
    { t: "CAFCI: Cámara Argentina de Fondos Comunes de Inversión", url: "https://www.cafci.org.ar/" },
    { t: "BYMA: Bolsas y Mercados Argentinos", url: "https://www.byma.com.ar/" },
  ],
  quiz: [
    { q: "Si armás tu plan de inversión, ¿qué tiene que incluir?", opciones: ["Solo en qué acción comprar","Solo cuánto querés ganar","Base resuelta, objetivos, reparto, agente verificado, costos y cada cuánto revisás","Solo el nombre del agente"], correcta: 2, explicacion: "El plan junta todo el curso. \"En qué acción comprar\" tienta por concreto, pero sin objetivo ni perfil no es un plan." },
    { q: "Si tu reparto suma 110%, ¿qué pasa?", opciones: ["Está mal: el reparto tiene que sumar 100%","Está bien, sobra","Es más diversificado","No importa"], correcta: 0, explicacion: "Los porcentajes son de tu plata total. \"Sobra\" tienta, pero no podés invertir más de lo que tenés sin endeudarte." },
    { q: "Si tu objetivo es a 6 meses y tu perfil es conservador, ¿qué reparto encaja?", opciones: ["50% acciones","Todo en CEDEAR","Bonos de alto riesgo","Plazo fijo y money market, aunque sea 100%"], correcta: 3, explicacion: "Lo conservador encaja con plazos cortos. Acciones tienta para que \"rinda más\", pero el plazo no alcanza." },
    { q: "Si invertís con una deuda cara en la tarjeta, ¿cuánto saca tu plan en \"Base\"?", opciones: ["2 puntos","0 puntos","1 punto","No se evalúa"], correcta: 1, explicacion: "La rúbrica pide resolver las deudas caras primero. 1 punto tienta si tenés algo ahorrado, pero la deuda cuesta más." },
    { q: "Si pusiste en acciones la plata que necesitás en 3 meses, ¿qué criterio falla?", opciones: ["Diversificación","Seguridad","Coherencia: el riesgo no encaja con el plazo","Ninguno"], correcta: 2, explicacion: "Es plata de corto plazo en algo volátil. Diversificación tienta, pero el problema es el plazo." },
    { q: "Si tu plan saca 11 puntos, pero tu agente no figura en la CNV, ¿está listo?", opciones: ["No: \"Seguridad\" tiene 0 y eso no se compensa con el total","Sí, 11 es listo","Sí, si el reparto es bueno","Depende del rendimiento"], correcta: 0, explicacion: "La regla lo dice. \"11 es listo\" tienta por el número, pero podés perder toda la plata con un agente no registrado." },
    { q: "Si tu plan muestra el rendimiento, pero no la inflación ni las comisiones, ¿cuánto saca en ese criterio?", opciones: ["2 puntos","1 punto","3 puntos","0 puntos"], correcta: 3, explicacion: "Faltan las dos. 1 punto tienta porque hay rendimiento, pero sin costos ni inflación no sabés si ganaste." },
    { q: "Si las acciones subieron y pasaron de 25% a 35% de tu cartera, ¿qué hacés al rebalancear?", opciones: ["Comprás más acciones","Vendés una parte y la pasás a lo que quedó abajo, para volver al 25%","Vendés todo","No hacés nada nunca"], correcta: 1, explicacion: "Rebalancear es volver a los porcentajes. Comprar más tienta porque \"están subiendo\", pero aumentás el riesgo." },
    { q: "Si querés revisar tu plan, ¿cada cuánto conviene?", opciones: ["Cada hora","Nunca","Cada 3 o 6 meses, o cuando cambia tu vida","Solo si alguien en redes avisa"], correcta: 2, explicacion: "Revisar con calma evita decisiones por impulso. Cada hora tienta por control, pero lleva a vender por pánico." },
    { q: "Si se acerca la fecha de un objetivo, ¿qué hacés con esa plata?", opciones: ["La pasás a inversiones de menos riesgo","La pasás a acciones","La dejás igual sin mirar","La gastás antes"], correcta: 0, explicacion: "Cerca de la fecha, lo importante es no perder. Pasarla a acciones tienta para un último empujón, pero puede caer justo antes." },
    { q: "Si querés saber cómo te va de verdad con tus inversiones, ¿qué hacés?", opciones: ["Te acordás de memoria","Mirás solo la que más subió","Preguntás en un grupo","Llevás un registro con fecha, precio, comisión y valor actual"], correcta: 3, explicacion: "El registro muestra el resultado real. Mirar la que más subió tienta, pero te hace olvidar las que bajaron." },
    { q: "Si querés seguir aprendiendo con fuentes oficiales, ¿dónde vas?", opciones: ["A quien promete más rendimiento","A la educación financiera de la CNV, la CAFCI y BYMA","A un grupo anónimo","A una publicidad"], correcta: 1, explicacion: "Son las fuentes de los organismos y del mercado. Quien promete más tienta, pero esa es la señal de alarma del módulo anterior." },
  ],
},
];
