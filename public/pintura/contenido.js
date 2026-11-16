// Temario del curso "Pintura de interiores". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js pintura y node tools/metodologia.js pintura
window.TEMARIO = [
{
  id: "empezar",
  icono: "🎨",
  titulo: "Pinturas, herramientas y seguridad",
  nivel: "Básico",
  objetivos: [
    "Elegir el tipo de pintura según la superficie y el ambiente",
    "Armar la lista de herramientas para pintar un ambiente",
    "Pintar sin riesgos: ventilación, solventes, escalera y pintura vieja",
  ],
  lecciones: [
    { titulo: "Qué pintura para qué", video: {"id":"Y58R4FIwDJo","t":"Diferencia entre látex y esmalte sintético · Zapata Construye (1:15)"}, html: `
      <p class="idea">No hay una pintura para todo. Se elige según <strong>qué se pinta</strong> (pared, techo, madera, metal) y <strong>dónde</strong> (un dormitorio, un baño, el exterior).</p>
      <table>
        <tr><th>Pintura</th><th>Para</th><th>Se diluye y se limpia con</th></tr>
        <tr><td>Látex para interiores</td><td>Paredes de dormitorios, living, pasillos</td><td>Agua</td></tr>
        <tr><td>Látex para cielorrasos (antihongos)</td><td>Techos, y paredes de baño y cocina</td><td>Agua</td></tr>
        <tr><td>Esmalte sintético</td><td>Madera y metal: puertas, marcos, rejas</td><td>Aguarrás (solvente)</td></tr>
        <tr><td>Esmalte al agua</td><td>Madera y metal, con menos olor</td><td>Agua</td></tr>
      </table>
      <table>
        <tr><th>Terminación</th><th>Cómo se ve</th><th>Cuándo</th></tr>
        <tr><td>Mate</td><td>Sin brillo, disimula imperfecciones</td><td>Paredes y techos</td></tr>
        <tr><td>Satinado</td><td>Brillo suave, más fácil de limpiar</td><td>Pasillos, cocina, cuartos de chicos</td></tr>
        <tr><td>Brillante</td><td>Mucho brillo, muestra cada imperfección</td><td>Puertas, marcos, rejas</td></tr>
      </table>
      <p><strong>Leé el envase:</strong> dice para qué superficie es, cuánto rinde, cuánto tarda en secar y con qué se limpia.</p>
      <p>En todo el curso pintamos el mismo ambiente de ejemplo: un <strong>dormitorio de 4 × 3 metros</strong>, con 2,6 metros de alto, una puerta y una ventana.</p>
      <p>Por ejemplo, para el dormitorio, las paredes van con látex para interiores mate y el techo con látex para cielorrasos.</p>` },
    { titulo: "Las herramientas", html: `
      <p class="idea">Con buenas herramientas se pinta más rápido y queda mejor. Un rodillo malo deja pelusas y marcas que ninguna mano de pintura arregla.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th></tr>
        <tr><td>Rodillo de lana de pelo corto o mediano (22 cm)</td><td>Paredes y techos</td></tr>
        <tr><td>Bandeja para rodillo</td><td>Cargar el rodillo de forma pareja</td></tr>
        <tr><td>Extensión para el rodillo</td><td>Llegar al techo y a lo alto sin escalera</td></tr>
        <tr><td>Pinceles de 1 y 2 pulgadas</td><td>Recortar bordes y rincones</td></tr>
        <tr><td>Cinta de papel</td><td>Proteger zócalos, marcos y enchufes</td></tr>
        <tr><td>Nylon y cartón</td><td>Cubrir piso y muebles</td></tr>
        <tr><td>Espátula, enduido y lija</td><td>Reparar la pared antes de pintar</td></tr>
        <tr><td>Balde, trapo y agua</td><td>Limpiar sobre la marcha</td></tr>
      </table>
      <p><strong>Rodillo nuevo:</strong> antes de usarlo, pasale cinta de papel o lavalo para sacar las pelusas sueltas.</p>
      <p>El curso "Arreglos de la casa" de este sitio explica cómo tapar agujeros con enduido antes de pintar.</p>
      <p>Por ejemplo, la extensión del rodillo permite pintar el techo del dormitorio desde el piso, más rápido y sin subir y bajar de la escalera.</p>` },
    { titulo: "Pintar sin riesgos", html: `
      <p class="idea">Pintar parece inofensivo, pero tiene riesgos: vapores, caídas, salpicaduras en los ojos y, en casas antiguas, polvo de pintura vieja con plomo.</p>
      <table>
        <tr><th>Riesgo</th><th>Cómo cuidarte</th></tr>
        <tr><td>Vapores de pinturas y solventes</td><td>Ventanas abiertas mientras pintás y mientras seca; descansos al aire libre</td></tr>
        <tr><td>Solventes inflamables (aguarrás, esmalte sintético)</td><td>Nada de fuego, cigarrillos ni estufas cerca; trapos con solvente al aire libre hasta que sequen</td></tr>
        <tr><td>Salpicaduras al pintar techos</td><td>Anteojos de seguridad y gorra</td></tr>
        <tr><td>Caídas</td><td>Escalera firme y abierta del todo; nunca una silla</td></tr>
        <tr><td>Polvo al lijar</td><td>Barbijo y ventilación</td></tr>
      </table>
      <p class="aviso">Las pinturas de hace varias décadas pueden tener plomo, que es tóxico. Si tu casa es antigua y la pintura vieja se descascara, no la lijes ni la raspes en seco, y menos con chicos o embarazadas en la casa: consultá antes cómo trabajarla de forma segura (ver recursos).</p>
      <p><strong>Chicos y mascotas,</strong> fuera del ambiente mientras se pinta y hasta que se ventile.</p>
      <p>Por ejemplo, pintar con esmalte sintético una puerta en un baño cerrado y sin ventilación puede dar dolor de cabeza y mareos: abrí todo y salí a tomar aire cada tanto.</p>` },
  ],
  practica: [
    "Leé el envase de una pintura (en tu casa o en una ferretería) y anotá para qué superficie es, cuánto rinde, cuánto tarda en secar y con qué se limpia.",
    "Hacé la lista de herramientas para pintar un ambiente de tu casa y anotá cuáles tenés y cuáles te faltan.",
    "Elegí el ambiente que vas a pintar y anotá cómo lo vas a ventilar, dónde van a estar los chicos o las mascotas y si la pintura vieja se descascara.",
  ],
  recursos: [
    { t: "EPA: plomo en pinturas viejas (en español)", url: "https://espanol.epa.gov/plomo" },
    { t: "EPA: compuestos orgánicos volátiles y aire interior (en inglés)", url: "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si vas a pintar las paredes de un dormitorio, ¿qué pintura usás?", opciones: ["Esmalte sintético brillante","Pintura para rejas","Látex para interiores","Antióxido"], correcta: 2, explicacion: "El látex interior es para paredes. El esmalte sintético tienta por resistente, pero es para madera y metal y tiene mucho olor." },
    { q: "Si vas a pintar el techo de un baño, ¿qué pintura conviene?", opciones: ["Látex para cielorrasos con antihongos","Látex común sin antihongos","Esmalte para rejas","Cualquiera"], correcta: 0, explicacion: "El baño tiene humedad y hongos. El látex común tienta por más barato, pero se mancha con hongos." },
    { q: "Si vas a pintar una reja de hierro, ¿qué tipo de pintura usás?", opciones: ["Látex para interiores","Látex para cielorrasos","Solo agua","Esmalte sintético o esmalte al agua, sobre un fondo antióxido"], correcta: 3, explicacion: "El metal pide esmalte y antióxido. El látex tienta porque ya lo tenés, pero no protege el hierro." },
    { q: "Si querés una pared que disimule imperfecciones, ¿qué terminación elegís?", opciones: ["Brillante","Mate","Satinado de alto brillo","Barniz"], correcta: 1, explicacion: "El mate no refleja la luz. El brillante tienta por lindo, pero muestra cada imperfección." },
    { q: "Si pintaste con esmalte sintético, ¿con qué limpiás el pincel?", opciones: ["Con agua","Con nafta","Con aguarrás","No se limpia"], correcta: 2, explicacion: "El sintético se limpia con su solvente. El agua tienta por simple, pero no lo saca." },
    { q: "Si querés saber cuánto rinde y cuánto tarda en secar una pintura, ¿dónde lo buscás?", opciones: ["En el envase","En el color","En el precio","Se adivina"], correcta: 0, explicacion: "El envase trae los datos del fabricante. El precio tienta como guía, pero no dice rendimiento ni secado." },
    { q: "Si estrenás un rodillo de lana, ¿qué hacés antes de usarlo?", opciones: ["Nada","Lo mojás en aguarrás","Lo cortás","Le pasás cinta de papel o lo lavás para sacar las pelusas"], correcta: 3, explicacion: "Las pelusas quedan pegadas en la pared. \"Nada\" tienta por apuro, pero después hay que lijar." },
    { q: "Si querés pintar el techo sin subir y bajar de la escalera todo el tiempo, ¿qué usás?", opciones: ["Una silla","Una extensión para el rodillo","Un pincel chico","Un banquito sobre la mesa"], correcta: 1, explicacion: "La extensión permite pintar desde el piso. La silla tienta por estar a mano, pero no es segura." },
    { q: "Si estás pintando con esmalte sintético, ¿qué no puede haber cerca?", opciones: ["Ventanas abiertas","Un balde con agua","Fuego, cigarrillos ni estufas","Cinta de papel"], correcta: 2, explicacion: "Los solventes son inflamables. Las ventanas abiertas tientan como problema por el frío, pero son necesarias." },
    { q: "Si vas a pintar un techo, ¿qué protección usás?", opciones: ["Anteojos de seguridad y gorra","Ninguna","Solo guantes","Ojotas"], correcta: 0, explicacion: "Al pintar techos caen salpicaduras. Guantes tientan, pero no protegen los ojos." },
    { q: "Si tu casa es antigua y la pintura vieja se descascara, ¿qué no hacés?", opciones: ["No la mirás","No la fotografiás","No abrís las ventanas","No la lijás ni la raspás en seco sin consultar: puede tener plomo"], correcta: 3, explicacion: "El polvo de pintura con plomo es tóxico. Lijarla en seco tienta por rápido, pero lo esparce por la casa." },
    { q: "Si terminaste de pintar el dormitorio, ¿cuándo pueden volver a entrar los chicos?", opciones: ["Enseguida","Cuando se haya ventilado bien","Mientras pintás","Nunca más"], correcta: 1, explicacion: "Los vapores tienen que salir antes. \"Enseguida\" tienta si la pintura parece seca, pero el olor sigue." },
  ],
},
{
  id: "calcular",
  icono: "📏",
  titulo: "Calcular la pintura y elegir el color",
  nivel: "Básico",
  objetivos: [
    "Calcular los metros cuadrados de un ambiente descontando puertas y ventanas",
    "Calcular cuántos litros de pintura comprar según el rendimiento y las manos",
    "Probar el color antes de pintar todo",
  ],
  lecciones: [
    { titulo: "Medir las paredes", html: `
      <p class="idea">Para saber cuánta pintura comprar, primero calculás la <strong>superficie</strong> en metros cuadrados (m²): el largo por el alto de cada pared, menos puertas y ventanas.</p>
      <pre><code>Dormitorio de 4 × 3 m, con 2,6 m de alto

Perímetro (la vuelta completa):
4 + 3 + 4 + 3 = 14 m

Paredes: 14 × 2,6 = 36,4 m²

Descontar:
Puerta  0,8 × 2,0 = 1,6 m²
Ventana 1,2 × 1,2 = 1,44 m²
36,4 - 1,6 - 1,44 = 33,36 m²  → unos 33,4 m²

Techo: 4 × 3 = 12 m²</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Medí con cinta métrica, no a ojo</td><td>Un error de medio metro cambia los litros</td></tr>
        <tr><td>Anotá cada medida en un papel</td><td>Para no tener que volver a medir</td></tr>
        <tr><td>Calculá el techo aparte</td><td>Suele ir con otra pintura</td></tr>
      </table>
      <p>Por ejemplo, olvidarse de descontar la puerta y la ventana suma unos 3 m² de más: no es grave, pero es pintura que sobra.</p>` },
    { titulo: "Cuántos litros comprar", video: {"id":"BKW6BVFAtMo","t":"Cómo calcular cuánta pintura necesitás · Sodimac Constructor (3:30)"}, html: `
      <p class="idea">El <strong>rendimiento</strong> es cuántos metros cuadrados cubre un litro en una mano. Está en el envase; para látex de interior suele estar entre 8 y 12 m² por litro por mano.</p>
      <pre><code>Litros = m² × cantidad de manos / rendimiento

Paredes del dormitorio, 2 manos, rendimiento 10 m²/litro:
33,4 × 2 / 10 = 6,68 litros → unos 7 litros
→ por ejemplo, 2 latas de 4 litros (sobra 1 litro para retoques)

Techo, 2 manos, rendimiento 10 m²/litro:
12 × 2 / 10 = 2,4 litros → 1 lata de 4 litros</code></pre>
      <table>
        <tr><th>Necesitás más manos o más pintura si...</th></tr>
        <tr><td>Cambiás de un color oscuro a uno claro</td></tr>
        <tr><td>La pared es nueva, rugosa o absorbe mucho (conviene un fijador antes)</td></tr>
        <tr><td>La pintura es económica y cubre poco</td></tr>
      </table>
      <p><strong>Comprá todo del mismo lote:</strong> el mismo color de dos tandas distintas puede quedar con un tono un poco diferente.</p>
      <p><strong>Para el presupuesto:</strong> sumá pintura, fijador, enduido, lija, cinta y herramientas que te falten.</p>
      <p>Por ejemplo, si la pared es roja y la vas a pintar de blanco, 2 manos pueden no alcanzar: calculá 3 o pasá antes una mano de un fondo blanco.</p>` },
    { titulo: "Elegir el color", html: `
      <p class="idea">El mismo color se ve distinto en el catálogo, en la lata y en tu pared. Antes de pintar todo, <strong>probalo</strong>.</p>
      <table>
        <tr><th>Qué tener en cuenta</th><th>Por qué</th></tr>
        <tr><td>La luz del ambiente</td><td>Con luz natural y con luz de lámpara el color cambia</td></tr>
        <tr><td>El tamaño del ambiente</td><td>Los colores claros hacen que se vea más grande</td></tr>
        <tr><td>Los muebles y el piso</td><td>El color tiene que combinar con lo que ya hay</td></tr>
        <tr><td>El uso</td><td>En lugares que se tocan mucho, un color medio disimula la suciedad</td></tr>
      </table>
      <pre><code>Prueba de color:
1. Pintá un cuadrado de 50 × 50 cm en dos paredes distintas
   (una con luz de la ventana y otra sin).
2. Dale 2 manos, como vas a pintar.
3. Miralo de día y de noche durante 1 o 2 días.
4. Recién ahí comprá toda la pintura.</code></pre>
      <p><strong>Un color fuerte en una sola pared</strong> le da personalidad al ambiente sin cargarlo.</p>
      <p>Por ejemplo, un gris que en el catálogo parecía suave puede verse casi azul en un dormitorio que da al sur, con poca luz: la prueba evita la sorpresa.</p>` },
  ],
  practica: [
    "Medí un ambiente de tu casa y calculá los m² de paredes descontando puertas y ventanas. Anotá cada medida y el total.",
    "Con el rendimiento del envase de una pintura, calculá cuántos litros necesitás para 2 manos y qué latas comprarías. Anotalo.",
    "Pintá (o simulá con papeles de color) 2 cuadrados de prueba en paredes con distinta luz y anotá cómo se ven de día y de noche.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si un ambiente mide 4 × 3 m, ¿cuál es su perímetro?", opciones: ["12 m","7 m","14 m","24 m"], correcta: 2, explicacion: "4 + 3 + 4 + 3 = 14. 12 tienta porque es 4 × 3, pero eso es la superficie del piso." },
    { q: "Si el perímetro es 14 m y el alto 2,6 m, ¿cuántos m² de pared hay, sin descontar nada?", opciones: ["36,4 m²","16,6 m²","31,2 m²","364 m²"], correcta: 0, explicacion: "14 × 2,6 = 36,4. 16,6 tienta si sumás en vez de multiplicar." },
    { q: "Si una puerta mide 0,8 × 2 m, ¿cuánto descontás?", opciones: ["2,8 m²","0,16 m²","16 m²","1,6 m²"], correcta: 3, explicacion: "0,8 × 2 = 1,6. 2,8 tienta si sumás las medidas." },
    { q: "Si el techo mide 4 × 3 m, ¿cuántos m² tiene?", opciones: ["14 m²","12 m²","7 m²","36,4 m²"], correcta: 1, explicacion: "Es el largo por el ancho. 14 tienta porque es el perímetro." },
    { q: "Si querés saber cuántos m² cubre un litro en una mano, ¿qué dato buscás?", opciones: ["El precio","El color","El rendimiento, en el envase","El peso de la lata"], correcta: 2, explicacion: "El rendimiento dice eso. El peso tienta, pero no dice cuánto cubre." },
    { q: "Si tenés 33,4 m², 2 manos y un rendimiento de 10 m²/litro, ¿cuántos litros necesitás?", opciones: ["Unos 6,7 litros","3,3 litros","66,8 litros","334 litros"], correcta: 0, explicacion: "33,4 × 2 / 10 = 6,68. 3,3 tienta si te olvidás de las 2 manos." },
    { q: "Si necesitás 6,7 litros, ¿qué latas conviene comprar?", opciones: ["1 lata de 4 litros","1 lata de 1 litro","10 latas de 4 litros","2 latas de 4 litros, y sobra para retoques"], correcta: 3, explicacion: "8 litros cubren los 6,7. Una de 4 tienta por más barato, pero no alcanza." },
    { q: "Si pasás de una pared roja a blanca, ¿qué tenés en cuenta?", opciones: ["Que con 1 mano alcanza","Que pueden hacer falta 3 manos o un fondo blanco antes","Que el rojo desaparece solo","Nada"], correcta: 1, explicacion: "Los oscuros cuestan tapar. \"1 mano alcanza\" tienta, pero se transparenta el rojo." },
    { q: "Si comprás pintura del mismo color en dos tandas distintas, ¿qué puede pasar?", opciones: ["Nada","Que sea más barata","Que el tono sea un poco diferente: conviene comprar todo del mismo lote","Que rinda más"], correcta: 2, explicacion: "Los lotes pueden variar. \"Nada\" tienta porque el nombre del color es el mismo, pero se nota en la pared." },
    { q: "Si querés estar seguro del color antes de pintar todo, ¿qué hacés?", opciones: ["Pintás un cuadrado de prueba en 2 paredes y lo mirás de día y de noche","Lo elegís del catálogo y listo","Le preguntás a un amigo por teléfono","Pintás todo y después ves"], correcta: 0, explicacion: "El color cambia con la luz. El catálogo tienta por cómodo, pero se ve distinto en tu pared." },
    { q: "Si querés que un ambiente chico se vea más grande, ¿qué color conviene?", opciones: ["Un color muy oscuro en todas las paredes","Negro","Rojo intenso","Un color claro"], correcta: 3, explicacion: "Los claros agrandan visualmente. Los oscuros tientan por elegantes, pero achican." },
    { q: "Si armás el presupuesto, ¿qué sumás además de la pintura?", opciones: ["Nada más","Fijador, enduido, lija, cinta y las herramientas que te faltan","Solo el rodillo","Solo la cinta"], correcta: 1, explicacion: "La preparación también cuesta. \"Nada más\" tienta, pero te quedás corto a mitad del trabajo." },
  ],
},
{
  id: "preparar",
  icono: "🧽",
  titulo: "Preparar el ambiente y la pared",
  nivel: "Intermedio",
  objetivos: [
    "Proteger el piso, los muebles, los zócalos y los enchufes",
    "Reparar, lijar y limpiar la pared antes de pintar",
    "Saber cuándo usar fijador sellador",
  ],
  lecciones: [
    { titulo: "Proteger todo", html: `
      <p class="idea">Una buena preparación lleva más tiempo que pintar, pero es lo que hace que el trabajo quede prolijo. Empezá por proteger lo que no se pinta.</p>
      <pre><code>1. Sacá del ambiente todo lo que se pueda mover.
2. Lo que queda, al centro y tapado con nylon.
3. Cubrí el piso con nylon y, encima, cartón (el nylon solo resbala).
4. Cinta de papel en zócalos, marcos de puertas y ventanas.
5. Cortá la luz de ese circuito en el tablero y sacá las tapas
   de enchufes y llaves (guardá los tornillos en una bolsita).
   Si no podés sacarlas, cubrilas con cinta.
6. Ventana abierta y la puerta del resto de la casa cerrada.</code></pre>
      <table>
        <tr><th>Error</th><th>Consecuencia</th></tr>
        <tr><td>No proteger el piso</td><td>Gotas difíciles de sacar, sobre todo en madera o alfombra</td></tr>
        <tr><td>Pintar sobre las tapas de los enchufes</td><td>Quedan manchadas y se nota el trabajo desprolijo</td></tr>
        <tr><td>Dejar la cinta días</td><td>Se pega y al sacarla arranca pintura</td></tr>
      </table>
      <p><strong>Las tapas se sacan con la luz cortada:</strong> los cables quedan a la vista. No toques nada adentro.</p>
      <p>Por ejemplo, 30 minutos de cinta en zócalos y marcos ahorran horas de retoques con pincel después.</p>` },
    { titulo: "Reparar y lijar", video: {"id":"HcE8A37_JN0","t":"Cómo preparar paredes para repintar · Alba (1:55)"}, html: `
      <p class="idea">La pintura no tapa los defectos: los resalta. Antes de pintar, la pared tiene que estar <strong>sana, lisa, limpia y seca</strong>.</p>
      <table>
        <tr><th>Problema</th><th>Qué hacer</th></tr>
        <tr><td>Agujeros y fisuras finas</td><td>Enduido, secar y lijar</td></tr>
        <tr><td>Pintura que se descascara</td><td>Rasquetear lo flojo, lijar los bordes y masillar (si la casa es antigua, ver el aviso de plomo)</td></tr>
        <tr><td>Manchas de humedad</td><td>Primero arreglar la causa; después, secar y tratar</td></tr>
        <tr><td>Hongos</td><td>Limpiar con producto antihongos, con guantes y ventilando</td></tr>
        <tr><td>Grasa (cocina)</td><td>Lavar con agua y detergente, enjuagar y dejar secar</td></tr>
        <tr><td>Pared con brillo</td><td>Lijar suave para que la pintura nueva se agarre</td></tr>
      </table>
      <pre><code>Lijado:
- Lija fina (grano 180 a 220) para alisar enduido y pintura vieja.
- Movimientos suaves; no hace falta llegar al revoque.
- Barbijo, anteojos y ventana abierta.
- Al final, sacá el polvo con un trapo apenas húmedo o un cepillo.</code></pre>
      <p>Por ejemplo, pintar sobre una mancha de hongos sin limpiarla hace que en pocas semanas vuelva a aparecer a través de la pintura nueva.</p>` },
    { titulo: "El fijador sellador", html: `
      <p class="idea">El <strong>fijador sellador</strong> es un producto que se pasa antes de pintar. Pega el polvo suelto de la pared y hace que la pintura no se absorba de más, así rinde y queda pareja.</p>
      <table>
        <tr><th>Usá fijador si la pared...</th><th>Por qué</th></tr>
        <tr><td>Es nueva (revoque o yeso)</td><td>Absorbe mucha pintura</td></tr>
        <tr><td>Deja polvo en la mano al pasarla (está "entizada")</td><td>La pintura nueva no se pega bien</td></tr>
        <tr><td>Tiene muchos parches de enduido</td><td>Para que no se noten manchas de distinto brillo</td></tr>
        <tr><td>Es de placa de yeso (durlock) nueva</td><td>La placa y la masilla absorben distinto</td></tr>
      </table>
      <pre><code>Prueba de la mano:
Pasá la palma por la pared. Si queda blanca de polvo → fijador.

Cómo se usa:
- Se diluye según el envase (muchos van con agua).
- Se pasa con rodillo o pincel, una mano.
- Se deja secar el tiempo que diga el envase antes de pintar.</code></pre>
      <p><strong>Si la pared está sana y ya pintada con látex,</strong> en general no hace falta: alcanza con limpiar y lijar suave.</p>
      <p>Por ejemplo, en la pared del dormitorio con 6 parches de enduido, una mano de fijador evita que los parches se vean como manchas mates después de pintar.</p>` },
  ],
  practica: [
    "Prepará un ambiente (o una pared): anotá cuántos metros de cinta usaste y cuántas tapas de enchufes y llaves sacaste.",
    "Recorré la pared y anotá en una tabla cada problema que encontraste (agujeros, hongos, grasa) y qué vas a hacer con cada uno.",
    "Hacé la prueba de la mano en 2 paredes y anotá si necesitan fijador.",
  ],
  recursos: [
    { t: "EPA: plomo en pinturas viejas (en español)", url: "https://espanol.epa.gov/plomo" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si vas a pintar un dormitorio, ¿qué hacés con los muebles?", opciones: ["Los dejás contra la pared","Pintás alrededor","Sacás lo que se puede y lo que queda va al centro, tapado con nylon","Los tapás con diario mojado"], correcta: 2, explicacion: "Al centro y tapado deja libre la pared. Pintar alrededor tienta por ahorrar trabajo, pero queda desprolijo." },
    { q: "Si cubrís el piso, ¿por qué ponés cartón sobre el nylon?", opciones: ["Porque el nylon solo resbala","Porque es más lindo","Para que la pintura se seque","No hace falta"], correcta: 0, explicacion: "El nylon solo es peligroso al pisarlo. \"No hace falta\" tienta por ahorrar, pero podés resbalar." },
    { q: "Si vas a sacar las tapas de los enchufes, ¿qué hacés antes?", opciones: ["Nada","Las mojás","Desenchufás la heladera","Cortás la luz de ese circuito en el tablero"], correcta: 3, explicacion: "Sin tapa, los cables quedan a la vista. \"Nada\" tienta porque es solo una tapa, pero hay riesgo eléctrico." },
    { q: "Si dejás la cinta de papel varios días, ¿qué puede pasar?", opciones: ["Nada","Que se pegue y al sacarla arranque pintura","Que proteja mejor","Que se despegue sola"], correcta: 1, explicacion: "La cinta se saca cuando terminás. \"Protege mejor\" tienta, pero se adhiere demasiado." },
    { q: "Si la pared tiene agujeros, ¿qué hacés antes de pintar?", opciones: ["Pintás encima y se tapan","Ponés más pintura","Los tapás con enduido, dejás secar y lijás","Los dejás"], correcta: 2, explicacion: "La pintura no tapa: resalta. Más pintura tienta, pero el agujero sigue a la vista." },
    { q: "Si hay hongos en la pared, ¿qué hacés antes de pintar?", opciones: ["Los limpiás con antihongos, con guantes y ventilando","Pintás encima","Los tapás con enduido","Nada"], correcta: 0, explicacion: "Si no se limpian, vuelven a aparecer. Pintar encima tienta por rápido, pero en semanas se ven de nuevo." },
    { q: "Si la pared de la cocina tiene grasa, ¿qué hacés?", opciones: ["Pintás directo","La lijás con lija gruesa","Le pasás aceite","La lavás con agua y detergente, enjuagás y dejás secar"], correcta: 3, explicacion: "La pintura no se agarra sobre la grasa. Pintar directo tienta, pero se descascara." },
    { q: "Si querés alisar el enduido y la pintura vieja, ¿qué lija usás?", opciones: ["Lija gruesa de grano 40","Lija fina, de grano 180 a 220","Lija de metal","Ninguna"], correcta: 1, explicacion: "La fina alisa sin marcar. La gruesa tienta por rápida, pero deja rayas." },
    { q: "Si terminaste de lijar, ¿qué hacés antes de pintar?", opciones: ["Pintás encima del polvo","Mojás toda la pared con un balde","Sacás el polvo con un trapo apenas húmedo o un cepillo","Nada"], correcta: 2, explicacion: "El polvo impide que la pintura se pegue. Mojar con un balde tienta para limpiar bien, pero la pared tiene que estar seca." },
    { q: "Si pasás la mano por la pared y queda blanca de polvo, ¿qué necesitás?", opciones: ["Fijador sellador","Más pintura","Agua","Nada"], correcta: 0, explicacion: "La pared entizada pide fijador. Más pintura tienta, pero no se va a pegar bien." },
    { q: "Si la pared es de revoque nuevo, ¿por qué conviene fijador?", opciones: ["Porque es más linda","Porque es obligatorio por ley","No conviene","Porque absorbe mucha pintura"], correcta: 3, explicacion: "El fijador evita que absorba de más. \"No conviene\" tienta por ahorrar, pero gastás más pintura." },
    { q: "Si la pared está sana y ya pintada con látex, ¿hace falta fijador?", opciones: ["Sí, siempre","En general no: alcanza con limpiar y lijar suave","Sí, 3 manos","Sí, mezclado con la pintura"], correcta: 1, explicacion: "Solo hace falta en los casos de la tabla. \"Siempre\" tienta por seguro, pero es gasto de más." },
  ],
},
{
  id: "pintar",
  icono: "🖌️",
  titulo: "Pintar techos y paredes",
  nivel: "Intermedio",
  objetivos: [
    "Pintar en el orden correcto: techo, paredes y aberturas",
    "Recortar bordes con pincel y pasar el rodillo sin dejar marcas",
    "Respetar los tiempos de secado entre manos",
  ],
  lecciones: [
    { titulo: "El orden", video: {"id":"Mzx4R-ix_Wo","t":"5 pasos para pintar una pared · PintemosPRO (5:41)"}, html: `
      <p class="idea">Se pinta <strong>de arriba hacia abajo</strong>: primero el techo, después las paredes y al final las puertas, ventanas y zócalos. Así, lo que gotea cae sobre lo que todavía no pintaste.</p>
      <table>
        <tr><th>Orden</th><th>Por qué</th></tr>
        <tr><td>1. Techo</td><td>Es lo que más salpica</td></tr>
        <tr><td>2. Paredes</td><td>Las gotas del techo ya no importan</td></tr>
        <tr><td>3. Puertas, marcos y ventanas</td><td>Van con otra pintura y pincel; se recortan contra la pared ya pintada</td></tr>
        <tr><td>4. Zócalos</td><td>Lo último, porque reciben gotas de todo lo anterior</td></tr>
      </table>
      <pre><code>En cada pared:
1. Recortá con pincel los bordes (rincones, contra el techo,
   alrededor de marcos y zócalos): una franja de 5 a 8 cm.
2. Enseguida, rodillo en el resto de la pared,
   mientras el recorte sigue húmedo.
3. Una pared entera por vez, sin cortar a la mitad.</code></pre>
      <p><strong>Recortar y pasar rodillo en la misma pared, uno después del otro,</strong> evita que se note la franja del pincel.</p>
      <p>Por ejemplo, en el dormitorio de ejemplo, el techo va primero con su pintura de cielorrasos; mientras seca, se tapan los últimos agujeros de las paredes.</p>` },
    { titulo: "Rodillo sin marcas", video: {"id":"Q3cao-Lpkfc","t":"Cómo pintar con rodillo sin dejar marcas · Pintando con Javi (10:25)"}, html: `
      <p class="idea">Las marcas de rodillo aparecen cuando se pinta con poca pintura, se aprieta de más o se pasa sobre pintura que ya empezó a secar. La clave es trabajar siempre "con el borde húmedo".</p>
      <pre><code>1. Cargá el rodillo en la bandeja y escurrilo en la parte rayada:
   cargado, pero sin chorrear.
2. Pintá un tramo de 1 m de ancho más o menos,
   con movimientos en forma de W o M.
3. Sin volver a cargar, repartí la pintura en ese tramo.
4. Terminá con pasadas verticales suaves, de arriba hacia abajo,
   todas en el mismo sentido.
5. Pasá al tramo de al lado montando un poco sobre el anterior,
   mientras todavía está húmedo.</code></pre>
      <table>
        <tr><th>Problema</th><th>Causa</th></tr>
        <tr><td>Marcas o franjas</td><td>Poca pintura o pasar sobre pintura que empezó a secar</td></tr>
        <tr><td>Chorreaduras</td><td>Rodillo demasiado cargado</td></tr>
        <tr><td>Textura de "piel de naranja" muy marcada</td><td>Rodillo de pelo demasiado largo o mucha presión</td></tr>
        <tr><td>Se ve la pared vieja</td><td>Pintura demasiado diluida o falta una mano</td></tr>
      </table>
      <p><strong>Diluí solo lo que diga el envase:</strong> diluir de más hace que la pintura rinda menos de verdad, aunque parezca que alcanza más.</p>
      <p>Por ejemplo, si te llaman por teléfono a mitad de una pared, terminala antes de atender: si la dejás a medias, se va a notar el corte.</p>` },
    { titulo: "Recortes, manos y secado", video: {"id":"eMXoUto3AoI","t":"Cómo lograr un recorte con cinta perfecto · Oikos (2:03)"}, html: `
      <p class="idea">La segunda mano es la que da el color parejo. Pero solo funciona si la primera está seca, y los recortes prolijos son los que hacen que el trabajo parezca profesional.</p>
      <table>
        <tr><th>Recorte</th><th>Cómo</th></tr>
        <tr><td>Contra el techo</td><td>Pincel de 2 pulgadas, poco cargado, de a tramos cortos, mano firme</td></tr>
        <tr><td>Con cinta</td><td>Cinta bien apretada; pintá desde la cinta hacia la pared</td></tr>
        <tr><td>Sacar la cinta</td><td>Con la última mano todavía fresca, tirando despacio hacia afuera</td></tr>
      </table>
      <pre><code>Tiempos (mirá siempre el envase; dependen del frío y la humedad):
Seco al tacto:            alrededor de 1 hora
Entre una mano y otra:    entre 3 y 4 horas para muchos látex
Sin olor y usable:        ventilando, al día siguiente

Si la segunda mano se pasa antes de tiempo:
la primera se levanta y quedan marcas.</code></pre>
      <p><strong>Con frío o humedad, todo tarda más.</strong> Evitá pintar con menos de 10 °C o con la pared húmeda, salvo que el envase diga otra cosa.</p>
      <p>Por ejemplo, si pintás la primera mano a las 10, la segunda puede ir después del almuerzo, a las 14, y a la tarde ya sacás la cinta.</p>` },
  ],
  practica: [
    "Pintá (o planificá) un ambiente en orden: anotá qué pintaste primero, segundo, tercero y cuarto.",
    "Pintá un tramo de pared con el método W y pasadas verticales, y anotá si quedaron marcas y por qué.",
    "Anotá la hora de la primera mano, la de la segunda y la de sacar la cinta, y comparalas con los tiempos del envase.",
  ],
  recursos: [
    { t: "EPA: compuestos orgánicos volátiles y aire interior (en inglés)", url: "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si vas a pintar un ambiente entero, ¿qué pintás primero?", opciones: ["Los zócalos","Las puertas","El techo","Las paredes"], correcta: 2, explicacion: "Se pinta de arriba hacia abajo. Las paredes tientan por ser lo principal, pero el techo salpica sobre ellas." },
    { q: "Si ya pintaste techo y paredes, ¿qué va al final?", opciones: ["Puertas, marcos, ventanas y, por último, los zócalos","El techo otra vez","Nada","El piso"], correcta: 0, explicacion: "Los zócalos reciben gotas de todo. Pintarlos antes tienta para sacarlos de encima, pero se manchan." },
    { q: "Si vas a pintar una pared, ¿qué hacés antes de pasar el rodillo?", opciones: ["Nada","La pintás toda con pincel","Le pasás agua","Recortás con pincel los bordes"], correcta: 3, explicacion: "El rodillo no llega a los rincones. Pintar todo con pincel tienta por prolijo, pero deja marcas y tarda." },
    { q: "Si recortás todas las paredes un día y pasás el rodillo al día siguiente, ¿qué puede pasar?", opciones: ["Que quede mejor","Que se note la franja del pincel","Nada","Que rinda más"], correcta: 1, explicacion: "El recorte y el rodillo tienen que mezclarse húmedos. Recortar todo junto tienta por organizado, pero se nota la diferencia." },
    { q: "Si cargás el rodillo, ¿cómo tiene que quedar?", opciones: ["Chorreando","Casi seco","Cargado, pero escurrido para que no chorree","Mojado en agua"], correcta: 2, explicacion: "Escurrido en la bandeja. Chorreando tienta para avanzar más, pero gotea y chorrea." },
    { q: "Si querés repartir bien la pintura, ¿qué movimiento hacés?", opciones: ["En forma de W o M, y terminás con pasadas verticales suaves","Solo de izquierda a derecha","Círculos","Golpecitos"], correcta: 0, explicacion: "La W reparte y las verticales emparejan. Los círculos tientan, pero dejan marcas." },
    { q: "Si aparecen marcas o franjas del rodillo, ¿qué suele pasar?", opciones: ["Demasiada ventilación","El color equivocado","La cinta","Poca pintura o pasar sobre pintura que ya empezó a secar"], correcta: 3, explicacion: "Trabajar con el borde húmedo evita marcas. La ventilación tienta como culpable, pero es necesaria." },
    { q: "Si la pintura chorrea, ¿qué hiciste?", opciones: ["Pusiste poca pintura","Cargaste demasiado el rodillo","Usaste cinta","Pintaste de día"], correcta: 1, explicacion: "El exceso chorrea. Poca pintura tienta como causa, pero eso deja marcas, no chorreaduras." },
    { q: "Si diluís la pintura más de lo que dice el envase, ¿qué pasa?", opciones: ["Rinde más de verdad","Seca más rápido y mejor","Cubre menos y necesitás más manos","No cambia nada"], correcta: 2, explicacion: "Diluida de más tapa menos. \"Rinde más\" tienta porque hay más líquido, pero hacen falta más manos." },
    { q: "Si te llaman a mitad de una pared, ¿qué hacés?", opciones: ["Terminás la pared antes de atender","Atendés y seguís en una hora","Dejás el rodillo en la pared","Pintás otra pared"], correcta: 0, explicacion: "Cortar a la mitad deja una marca. Atender ya tienta, pero la pintura empieza a secar." },
    { q: "Si el envase dice 4 horas entre manos y pasaste la segunda a la hora, ¿qué puede pasar?", opciones: ["Que quede mejor","Que seque más rápido","Nada","Que la primera se levante y queden marcas"], correcta: 3, explicacion: "Hay que respetar el secado. \"Seque más rápido\" tienta, pero arruina la primera mano." },
    { q: "Si usaste cinta de papel, ¿cuándo la sacás?", opciones: ["Una semana después","Con la última mano todavía fresca, tirando despacio","Antes de la primera mano","Nunca"], correcta: 1, explicacion: "Fresca se despega limpia. Una semana después tienta para no arruinar, pero arranca pintura." },
  ],
},
{
  id: "aberturas",
  icono: "🚪",
  titulo: "Puertas, marcos y rejas",
  nivel: "Avanzado",
  objetivos: [
    "Preparar madera y metal para pintar con esmalte",
    "Usar fondo antióxido en hierro y fondo para madera nueva",
    "Pintar una puerta con pincel o rodillo chico sin chorreaduras",
  ],
  lecciones: [
    { titulo: "Madera y metal", html: `
      <p class="idea">Las puertas, marcos, ventanas y rejas se pintan con <strong>esmalte</strong> (sintético o al agua), que es más duro y resiste el roce. Necesitan una preparación distinta a la de una pared.</p>
      <table>
        <tr><th>Superficie</th><th>Preparación</th><th>Fondo</th></tr>
        <tr><td>Madera ya pintada</td><td>Lijar suave para quitar el brillo, limpiar el polvo</td><td>No hace falta si la pintura vieja está sana</td></tr>
        <tr><td>Madera nueva</td><td>Lijar en el sentido de la veta</td><td>Fondo para madera (sella y ayuda a que agarre)</td></tr>
        <tr><td>Hierro con óxido</td><td>Cepillo de alambre o lija hasta sacar el óxido suelto</td><td>Fondo antióxido</td></tr>
        <tr><td>Hierro nuevo</td><td>Limpiar la grasa con un trapo y solvente</td><td>Fondo antióxido</td></tr>
      </table>
      <p><strong>El antióxido no es opcional en el hierro:</strong> sin él, el óxido vuelve a aparecer debajo de la pintura en pocos meses.</p>
      <p><strong>Pintura vieja que se descascara en puertas antiguas:</strong> repasá el aviso sobre plomo del primer módulo antes de lijarla.</p>
      <p>Por ejemplo, una reja de balcón con puntos de óxido se cepilla, se le pasa antióxido y recién después esmalte: así dura años.</p>` },
    { titulo: "Pintar una puerta", html: `
      <p class="idea">Una puerta se pinta por partes y en un orden fijo, para que no queden marcas de pincel ni chorreaduras en los bordes.</p>
      <pre><code>Puerta placa (lisa):
1. Sacá o cubrí con cinta las manijas y bisagras.
2. Calzá la puerta abierta para que no se mueva.
3. Rodillo chico de espuma o pincel, poca pintura.
4. Pintá de arriba hacia abajo, en tramos.
5. Terminá con pasadas largas en el mismo sentido.
6. Cantos al final, con pincel casi seco.

Puerta con tableros (relieves):
1. Primero los tableros (los paneles hundidos).
2. Después los travesaños horizontales.
3. Después los largueros verticales.
4. Siempre siguiendo la veta de la madera.</code></pre>
      <table>
        <tr><th>Para que no chorree</th></tr>
        <tr><td>Manos finas: mejor 2 finas que 1 gruesa</td></tr>
        <tr><td>Revisar los bordes y los cantos a los 5 o 10 minutos y emparejar las gotas</td></tr>
        <tr><td>Respetar el secado entre manos (el esmalte suele tardar más que el látex)</td></tr>
      </table>
      <p>Por ejemplo, una puerta pintada con una mano gruesa de esmalte casi siempre tiene gotas en el canto de abajo; con dos manos finas no pasa.</p>` },
    { titulo: "Esmalte con cuidado", html: `
      <p class="idea">El esmalte sintético tiene solventes: huele fuerte, es inflamable y tarda en secar. Usarlo bien es cuestión de ventilación, orden y limpieza.</p>
      <table>
        <tr><th>Hacé</th><th>No hagas</th></tr>
        <tr><td>Ventanas abiertas mientras pintás y mientras seca</td><td>Pintar en un baño cerrado</td></tr>
        <tr><td>Limpiar pinceles con aguarrás, al aire libre</td><td>Tirar el aguarrás usado por la pileta</td></tr>
        <tr><td>Extender los trapos con solvente al aire libre hasta que sequen</td><td>Dejar trapos con solvente amontonados (pueden prenderse fuego solos)</td></tr>
        <tr><td>Guardar el aguarrás en su envase, cerrado y lejos de chicos</td><td>Pasarlo a una botella de bebida</td></tr>
      </table>
      <p><strong>Esmalte al agua:</strong> tiene menos olor, se limpia con agua y seca más rápido. Es una buena opción para interiores, sobre todo en cuartos de chicos.</p>
      <p><strong>Si alguien traga solvente o pintura,</strong> no le hagas vomitar: llamá a emergencias o a un centro de toxicología con el envase en la mano.</p>
      <p>Por ejemplo, guardar aguarrás en una botella de gaseosa es una causa conocida de intoxicaciones en chicos: siempre en su envase original.</p>` },
  ],
  practica: [
    "Elegí una puerta, marco o reja de tu casa y anotá de qué material es, si tiene óxido y qué fondo y pintura usarías.",
    "Pintá (o planificá) una puerta siguiendo el orden de la lección y anotá cuántas manos diste y si quedaron gotas.",
    "Revisá dónde guardás solventes y pinturas en tu casa y anotá si están en su envase, cerrados y fuera del alcance de chicos.",
  ],
  recursos: [
    { t: "EPA: compuestos orgánicos volátiles y aire interior (en inglés)", url: "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" },
    { t: "EPA: plomo en pinturas viejas (en español)", url: "https://espanol.epa.gov/plomo" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si vas a pintar una puerta de madera, ¿qué pintura usás?", opciones: ["Látex para interiores","Látex para cielorrasos","Esmalte sintético o al agua","Fijador"], correcta: 2, explicacion: "El esmalte resiste el roce. El látex tienta porque sobró de las paredes, pero se marca enseguida." },
    { q: "Si una reja de hierro tiene óxido, ¿qué hacés antes de pintar?", opciones: ["Sacás el óxido suelto con cepillo de alambre y pasás antióxido","Pintás encima directo","La mojás","Le pasás látex"], correcta: 0, explicacion: "Sin sacar el óxido y sin antióxido, vuelve. Pintar encima tienta por rápido, pero en meses se ve de nuevo." },
    { q: "Si la madera es nueva, ¿qué le pasás antes del esmalte?", opciones: ["Antióxido","Nada","Fijador para paredes","Fondo para madera"], correcta: 3, explicacion: "El fondo sella la madera. El antióxido tienta porque es un fondo, pero es para hierro." },
    { q: "Si la madera ya está pintada y sana, ¿qué hacés antes de repintar?", opciones: ["Nada","La lijás suave para quitar el brillo y limpiás el polvo","La lijás hasta la madera","Le pasás agua y pintás mojado"], correcta: 1, explicacion: "Quitar el brillo ayuda a que agarre. Lijar hasta la madera tienta para dejarla \"como nueva\", pero es trabajo de más." },
    { q: "Si una puerta antigua tiene pintura vieja que se descascara, ¿qué recordás antes de lijar?", opciones: ["Nada","Que hay que lijar en seco rápido","El aviso sobre plomo en pinturas viejas","Que hay que quemarla"], correcta: 2, explicacion: "La pintura vieja puede tener plomo. Lijar en seco tienta por rápido, pero esparce polvo tóxico." },
    { q: "Si vas a pintar una puerta con tableros, ¿qué pintás primero?", opciones: ["Los tableros (los paneles hundidos)","Los cantos","Los largueros","Las bisagras"], correcta: 0, explicacion: "Se empieza por los tableros. Los largueros tientan por ser lo más grande, pero van al final." },
    { q: "Si querés evitar chorreaduras en una puerta, ¿cómo pintás?", opciones: ["Con 1 mano bien gruesa","Con el pincel chorreando","Sin escurrir","Con 2 manos finas en lugar de 1 gruesa"], correcta: 3, explicacion: "Las manos finas no chorrean. La gruesa tienta para terminar rápido, pero gotea en los cantos." },
    { q: "Si pintaste una puerta, ¿cuándo revisás los cantos?", opciones: ["Al día siguiente","A los 5 o 10 minutos, para emparejar las gotas","Nunca","Antes de pintar"], correcta: 1, explicacion: "Fresca se empareja fácil. Al día siguiente tienta, pero la gota ya está seca." },
    { q: "Si usaste aguarrás para limpiar pinceles, ¿dónde lo tirás?", opciones: ["Por la pileta","Al inodoro","No por la pileta: se deja decantar y se lleva a un punto de residuos","Al jardín"], correcta: 2, explicacion: "Contamina el agua. La pileta tienta por cómoda, pero va a las cañerías." },
    { q: "Si tenés trapos con solvente, ¿qué hacés con ellos?", opciones: ["Los extendés al aire libre hasta que sequen","Los amontonás en un rincón","Los guardás en una bolsa cerrada","Los dejás al lado de la estufa"], correcta: 0, explicacion: "Amontonados pueden prenderse fuego solos. La bolsa cerrada tienta por prolija, pero acumula calor." },
    { q: "Si vas a pintar el cuarto de un chico, ¿qué esmalte conviene?", opciones: ["Esmalte sintético en un cuarto cerrado","Cualquiera sin ventilar","Ninguno, se deja sin pintar","Esmalte al agua, con menos olor"], correcta: 3, explicacion: "El esmalte al agua tiene menos vapores. El sintético tienta por más duro, pero huele fuerte." },
    { q: "Si un chico tragó aguarrás, ¿qué hacés?", opciones: ["Lo hacés vomitar","No lo hacés vomitar y llamás a emergencias o a toxicología con el envase","Le das leche y esperás","Nada"], correcta: 1, explicacion: "Vomitar puede empeorar el daño. Hacerlo vomitar tienta por instinto, pero no se hace con solventes." },
  ],
},
{
  id: "terminacion",
  icono: "✨",
  titulo: "Errores, retoques y limpieza",
  nivel: "Avanzado",
  objetivos: [
    "Reconocer los errores comunes y corregirlos",
    "Hacer retoques que no se noten",
    "Limpiar las herramientas y manejar los restos de pintura",
  ],
  lecciones: [
    { titulo: "Errores comunes y cómo arreglarlos", html: `
      <p class="idea">Casi todos los errores de pintura tienen arreglo. La clave es reconocer la causa para no repetirlo en la próxima mano.</p>
      <table>
        <tr><th>Se ve</th><th>Causa</th><th>Arreglo</th></tr>
        <tr><td>Franjas o marcas de rodillo</td><td>Poca pintura o borde seco</td><td>Otra mano, pared entera, con el borde húmedo</td></tr>
        <tr><td>Chorreaduras</td><td>Demasiada pintura</td><td>Esperar que seque, lijar suave y retocar</td></tr>
        <tr><td>Se ve la pintura vieja</td><td>Pocas manos o pintura muy diluida</td><td>Una mano más, sin diluir de más</td></tr>
        <tr><td>Manchas mates y brillantes</td><td>Parches sin fijador o retoques</td><td>Fijador en los parches y una mano general</td></tr>
        <tr><td>Pelos o pelusas pegados</td><td>Rodillo o pincel nuevos sin limpiar, o polvo</td><td>Sacarlos frescos; si secó, lijar y retocar</td></tr>
        <tr><td>Ampollas o globitos</td><td>Pared húmeda o con grasa</td><td>Rasquetear, arreglar la causa, secar y repintar</td></tr>
        <tr><td>Hongos que vuelven</td><td>No se trató la humedad</td><td>Arreglar la causa, limpiar con antihongos y usar pintura antihongos</td></tr>
      </table>
      <p><strong>Mirá con luz rasante:</strong> una linterna apoyada contra la pared, de costado, muestra marcas y desniveles que de frente no se ven.</p>
      <p>Por ejemplo, si en la segunda mano del dormitorio aparecen franjas, casi seguro es porque el rodillo estaba poco cargado o se pintó en un día de mucho calor que secó el borde rápido.</p>` },
    { titulo: "Retoques que no se notan", html: `
      <p class="idea">Un retoque chico con pincel suele notarse más que la mancha que querías tapar. Hay formas de hacerlo para que se integre.</p>
      <table>
        <tr><th>Para que no se note</th><th>Por qué</th></tr>
        <tr><td>Usá la misma pintura del mismo lote</td><td>Otra lata, aunque sea del mismo color, puede variar</td></tr>
        <tr><td>Retocá con la misma herramienta (rodillo, no pincel)</td><td>La textura del rodillo y la del pincel son distintas</td></tr>
        <tr><td>Poca pintura, en un área un poco más grande que la mancha</td><td>Los bordes se disimulan</td></tr>
        <tr><td>Si sigue notándose, pintá la pared entera de rincón a rincón</td><td>Los rincones esconden el corte</td></tr>
      </table>
      <pre><code>Guardar pintura para retoques:
- En su lata, bien cerrada (golpecitos suaves en la tapa).
- Anotá en la tapa: ambiente, color, lote y fecha.
- Guardala en un lugar fresco, sin heladas.
- Un frasco chico con tapa sirve para retoques rápidos.</code></pre>
      <p>Por ejemplo, el litro que sobró de las 2 latas del dormitorio, guardado y rotulado, sirve para tapar el golpe de una silla dentro de un año.</p>` },
    { titulo: "Limpiar y manejar los restos", html: `
      <p class="idea">Unas herramientas bien limpias duran años. Y los restos de pintura no se tiran por la pileta: contaminan el agua y tapan las cañerías.</p>
      <table>
        <tr><th>Herramienta</th><th>Látex</th><th>Esmalte sintético</th></tr>
        <tr><td>Rodillo</td><td>Escurrir en la bandeja, lavar con agua hasta que salga clara, secar colgado</td><td>Usar uno aparte; limpiar con aguarrás al aire libre</td></tr>
        <tr><td>Pincel</td><td>Agua y jabón, secar con las cerdas hacia abajo</td><td>Aguarrás, después agua con jabón</td></tr>
        <tr><td>Bandeja</td><td>Agua; si no se va, una bolsa de nylon adentro la próxima vez</td><td>Aguarrás</td></tr>
      </table>
      <pre><code>Restos de pintura:
- Lo que sobra en la bandeja se vuelve a la lata.
- Latas con poquito: dejarlas abiertas al aire libre
  (lejos de chicos y mascotas) hasta que se seque.
- Pintura seca y latas vacías: a la basura
  o al punto de reciclaje de tu municipio.
- Solventes: consultá en tu municipio dónde llevarlos.

Pausa de un día para otro:
envolvé el rodillo o el pincel con látex en una bolsa de nylon,
bien cerrada, y no hace falta lavarlo.</code></pre>
      <p>Por ejemplo, lavar el rodillo con látex en la canilla del patio hasta que el agua salga clara lleva 5 minutos; dejarlo secar con pintura lo arruina para siempre.</p>` },
  ],
  practica: [
    "Revisá una pared pintada con una linterna de costado y anotá qué errores de la tabla encontrás.",
    "Guardá un resto de pintura rotulado con ambiente, color, lote y fecha, y anotá dónde lo guardaste.",
    "Averiguá en tu municipio dónde se llevan restos de solventes o pinturas y anotá la dirección o el día de recolección.",
  ],
  recursos: [
    { t: "EPA: compuestos orgánicos volátiles y aire interior (en inglés)", url: "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" },
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
  ],
  quiz: [
    { q: "Si en la pared quedaron franjas del rodillo, ¿cómo lo arreglás?", opciones: ["Retoques con pincel en cada franja","Lavar la pared","Otra mano en la pared entera, con el borde húmedo","Lijar todo hasta el revoque"], correcta: 2, explicacion: "La pared entera queda pareja. Retoques con pincel tientan por rápidos, pero se notan más." },
    { q: "Si quedó una chorreadura seca, ¿qué hacés?", opciones: ["La lijás suave y retocás","La dejás","Le pasás más pintura encima","La raspás con un cuchillo hasta el revoque"], correcta: 0, explicacion: "Lijar la empareja. Más pintura tienta para taparla, pero se nota el bulto." },
    { q: "Si después de pintar se ven manchas mates sobre los parches de enduido, ¿qué faltó?", opciones: ["Más agua en la pintura","Otra lija gruesa","Pintura brillante","Fijador en los parches"], correcta: 3, explicacion: "Los parches absorben distinto. Pintura brillante tienta para igualar, pero empeora el contraste." },
    { q: "Si aparecen ampollas en la pintura nueva, ¿qué causa es probable?", opciones: ["Demasiado fijador","La pared estaba húmeda o con grasa","Mucha ventilación","El color"], correcta: 1, explicacion: "La humedad o la grasa despegan la pintura. La ventilación tienta como culpable, pero ayuda a secar." },
    { q: "Si los hongos vuelven después de pintar, ¿qué no se hizo?", opciones: ["Pintar con color oscuro","Usar más cinta","Arreglar la causa de la humedad","Lijar más"], correcta: 2, explicacion: "Sin arreglar la causa, vuelven. Un color oscuro tienta para disimular, pero no los frena." },
    { q: "Si querés ver marcas que de frente no se notan, ¿qué usás?", opciones: ["Una linterna apoyada de costado contra la pared","La luz del techo","Anteojos de sol","Nada"], correcta: 0, explicacion: "La luz rasante marca los desniveles. La luz del techo tienta por estar a mano, pero los esconde." },
    { q: "Si vas a retocar una mancha en una pared pintada con rodillo, ¿con qué lo hacés?", opciones: ["Con pincel y otra lata parecida","Con un trapo","Con aerosol","Con rodillo y la misma pintura del mismo lote"], correcta: 3, explicacion: "Misma herramienta y misma pintura se integran. El pincel tienta por chico, pero deja otra textura." },
    { q: "Si el retoque se sigue notando, ¿qué hacés?", opciones: ["Le ponés más capas al retoque","Pintás la pared entera de rincón a rincón","Ponés un cuadro encima","Lo dejás"], correcta: 1, explicacion: "El rincón esconde el corte. Más capas tientan, pero el parche se nota más." },
    { q: "Si te sobró pintura, ¿qué anotás en la tapa?", opciones: ["Nada","Solo \"pintura\"","Ambiente, color, lote y fecha","El precio"], correcta: 2, explicacion: "Así sabés para qué sirve cuando la necesites. \"Pintura\" tienta por corto, pero no te dice dónde va." },
    { q: "Si terminaste de pintar con látex, ¿cómo limpiás el rodillo?", opciones: ["Lo escurrís y lo lavás con agua hasta que salga clara","Con aguarrás","No lo lavás","Lo dejás en agua una semana"], correcta: 0, explicacion: "El látex sale con agua. El aguarrás tienta por fuerte, pero es para el sintético." },
    { q: "Si te sobró un poquito de pintura en una lata, ¿qué hacés?", opciones: ["La tirás por la pileta","La tirás al inodoro","La volcás en la tierra","La dejás secar al aire libre, lejos de chicos y mascotas, y después la tirás"], correcta: 3, explicacion: "Seca no contamina el agua. La pileta tienta por rápida, pero tapa y contamina." },
    { q: "Si vas a seguir pintando con látex al día siguiente, ¿qué hacés con el rodillo?", opciones: ["Lo dejás al aire en la bandeja","Lo envolvés bien cerrado en una bolsa de nylon","Lo lavás con aguarrás","Lo tirás"], correcta: 1, explicacion: "Envuelto no se seca. Dejarlo al aire tienta por cómodo, pero al día siguiente está duro." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: pintar un ambiente",
  nivel: "Avanzado",
  objetivos: [
    "Planificar y pintar un ambiente (o una pared) de principio a fin",
    "Evaluar el trabajo con una rúbrica y corregir lo que falte",
    "Armar un presupuesto si querés ofrecer el trabajo a otros",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es <strong>pintar un ambiente</strong> de tu casa, o al menos una pared, siguiendo todos los pasos del curso, con fotos de antes, durante y después.</p>
      <table>
        <tr><th>Parte</th><th>Módulo</th></tr>
        <tr><td>Pintura elegida y plan de seguridad</td><td>Pinturas, herramientas y seguridad</td></tr>
        <tr><td>Medidas, m², litros y color probado</td><td>Calcular la pintura y elegir el color</td></tr>
        <tr><td>Protección, reparaciones y fijador si hace falta</td><td>Preparar el ambiente y la pared</td></tr>
        <tr><td>Pintura en orden, con recortes y 2 manos</td><td>Pintar techos y paredes</td></tr>
        <tr><td>Aberturas, si las pintás</td><td>Puertas, marcos y rejas</td></tr>
        <tr><td>Revisión con luz rasante, retoques y limpieza</td><td>Errores, retoques y limpieza</td></tr>
      </table>
      <pre><code>Planilla del proyecto (ejemplo del dormitorio):
Paredes: 33,4 m² · 2 manos · 10 m²/L → 6,7 L → 2 latas de 4 L
Techo:   12 m² · 2 manos · 10 m²/L → 2,4 L → 1 lata de 4 L
Día 1:   proteger, reparar, fijador
Día 2:   techo y primera mano de paredes
Día 3:   segunda mano, cinta, limpieza y retoques</code></pre>
      <p>Por ejemplo, planificar 3 días evita apurarse con los tiempos de secado, que es el error más común de quien pinta por primera vez.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu trabajo.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Cálculo</td><td>m² y litros calculados, sobró poco</td><td>Calculado, pero faltó o sobró mucho</td><td>Comprado a ojo</td></tr>
        <tr><td>Preparación</td><td>Protegido, reparado, limpio y con fijador si hacía falta</td><td>Faltó una parte</td><td>Pintó sobre agujeros, polvo o grasa</td></tr>
        <tr><td>Cobertura</td><td>Color parejo, sin ver la pintura vieja</td><td>Se ve en algún lugar</td><td>Se ve en muchos lugares</td></tr>
        <tr><td>Terminación</td><td>Recortes rectos, sin marcas ni chorreaduras</td><td>Algunos detalles</td><td>Marcas y gotas a la vista</td></tr>
        <tr><td>Limpieza</td><td>Piso y muebles limpios, herramientas lavadas, restos bien manejados</td><td>Algo de desorden</td><td>Manchas o restos por la pileta</td></tr>
        <tr><td>Seguridad</td><td>Ventilación, escalera segura, protección y solventes bien guardados</td><td>—</td><td>Sin ventilar, silla en vez de escalera o solventes sin cuidado</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Seguridad" tiene 0, el trabajo no está bien hecho,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, una pared impecable pintada estando parado en una silla saca 0 en seguridad: el resultado es bueno, pero el riesgo no vale la pena.</p>` },
    { titulo: "Si querés ofrecer el trabajo", html: `
      <p class="idea">Pintar es un oficio con demanda. Si querés ofrecer el trabajo, armá presupuestos claros: por escrito, con lo que incluye y lo que no.</p>
      <pre><code>Presupuesto de ejemplo (números inventados):
Dormitorio 4 × 3 m: paredes (33,4 m²) y techo (12 m²), 2 manos

Materiales (los compra el cliente o se cobran aparte):
  3 latas de 4 L de látex, fijador, enduido, lija, cinta

Mano de obra: 3 días                   $ ......
Incluye:      protección, reparación de agujeros chicos,
              2 manos de paredes y techo, limpieza
No incluye:   aberturas, humedad (se consulta aparte), muebles pesados
Validez:      15 días
Forma de pago: 50% al empezar y 50% al terminar</code></pre>
      <table>
        <tr><th>Para cobrar bien</th><th>Por qué</th></tr>
        <tr><td>Medí siempre antes de presupuestar</td><td>A ojo, te equivocás y perdés plata</td></tr>
        <tr><td>Aclarás qué no incluye</td><td>Evita discusiones al final</td></tr>
        <tr><td>Fotos de trabajos anteriores</td><td>Generan confianza</td></tr>
        <tr><td>Facturá</td><td>El curso "Monotributo, facturación e impuestos para independientes" explica cómo</td></tr>
      </table>
      <p><strong>Trabajos en altura</strong> (fachadas, andamios, balcones altos) piden equipos y capacitación especiales: no los tomes sin ellos.</p>
      <p>Por ejemplo, aclarar "no incluye tratar la humedad" evita que el cliente te pida, gratis, arreglar una mancha que vuelve por un caño roto.</p>` },
  ],
  practica: [
    "Pintá un ambiente o una pared con todos los pasos y armá la planilla con m², litros, días y tareas. Anotá cuántos litros sobraron.",
    "Evaluá tu trabajo con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Armá un presupuesto para pintar un ambiente de otra persona con \"incluye\", \"no incluye\", validez y forma de pago. Anotá los m² y los días que calculaste.",
  ],
  recursos: [
    { t: "Superintendencia de Riesgos del Trabajo: prevención y elementos de protección", url: "https://www.argentina.gob.ar/srt" },
    { t: "EPA: compuestos orgánicos volátiles y aire interior (en inglés)", url: "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" },
  ],
  quiz: [
    { q: "Si vas a hacer el proyecto final, ¿qué tiene que incluir?", opciones: ["Solo la foto del final","Solo la lista de compras","Pintura elegida, cálculo, preparación, pintado en orden, revisión, limpieza y fotos","Solo el color elegido"], correcta: 2, explicacion: "El proyecto junta todo el curso. La foto del final tienta, pero no muestra cómo se hizo." },
    { q: "Si compraste la pintura a ojo, sin calcular, ¿cuánto sacás en \"Cálculo\"?", opciones: ["0 puntos","2 puntos","1 punto","No se evalúa"], correcta: 0, explicacion: "A ojo es 0. Sacar 1 tienta si te alcanzó, pero fue suerte." },
    { q: "Si pintaste sobre agujeros sin tapar, ¿cuánto sacás en \"Preparación\"?", opciones: ["2 puntos","1 punto","3 puntos","0 puntos"], correcta: 3, explicacion: "Pintar sobre defectos es 0. Sacar 1 tienta si lo demás estaba bien, pero la rúbrica lo marca así." },
    { q: "Si el color quedó parejo, pero se ve la pintura vieja en un rincón, ¿cuánto sacás en \"Cobertura\"?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 1, explicacion: "Se ve en un lugar: 1 punto. Sacar 2 tienta porque es un solo rincón, pero se nota." },
    { q: "Si la pared quedó impecable, pero pintaste parado en una silla, ¿está bien hecho?", opciones: ["Sí, quedó impecable","Sí, si no te caíste","No: \"Seguridad\" tiene 0 y eso no se compensa con el total","Depende de la silla"], correcta: 2, explicacion: "La regla de la rúbrica lo dice. \"Si no te caíste\" tienta, pero el riesgo estuvo igual." },
    { q: "Si el trabajo saca 9, ¿qué hacés?", opciones: ["Mejorás lo que sacó 0 o 1","Lo das por terminado","Volvés a pintar todo","Cambiás la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Volver a pintar todo tienta, pero no hace falta." },
    { q: "Si planificás pintar un dormitorio, ¿por qué conviene dividirlo en 3 días?", opciones: ["Para cobrar más","Porque la pintura se vence","No conviene","Para respetar los tiempos de secado sin apurarte"], correcta: 3, explicacion: "Apurarse con el secado es el error más común. \"No conviene\" tienta por terminar en un día, pero queda peor." },
    { q: "Si vas a presupuestar un trabajo, ¿qué hacés antes?", opciones: ["Lo calculás a ojo","Medís el ambiente","Copiás el precio de otro","Cobrás lo mismo siempre"], correcta: 1, explicacion: "Medir evita perder plata. A ojo tienta por rápido, pero te equivocás." },
    { q: "Si el ambiente tiene una mancha de humedad por un caño, ¿qué ponés en el presupuesto?", opciones: ["Nada","Que la arreglás gratis","\"No incluye: tratar la humedad (se consulta aparte)\"","Que la tapás con pintura"], correcta: 2, explicacion: "Aclararlo evita discusiones. Taparla tienta para conformar, pero vuelve y el cliente reclama." },
    { q: "Si querés generar confianza con un cliente nuevo, ¿qué le mostrás?", opciones: ["Fotos de trabajos anteriores","Nada","Solo el precio","Una promesa de que sos el mejor"], correcta: 0, explicacion: "Las fotos muestran tu trabajo. Prometer tienta, pero no prueba nada." },
    { q: "Si te ofrecen pintar una fachada de 3 pisos con andamio, ¿qué tenés en cuenta?", opciones: ["Que es igual que un dormitorio","Que con una escalera alcanza","Que no hace falta protección","Que los trabajos en altura piden equipos y capacitación especiales"], correcta: 3, explicacion: "La altura tiene riesgos serios. \"Con una escalera alcanza\" tienta por ahorrar, pero no es seguro." },
    { q: "Si cobrás por pintar, ¿qué curso del sitio te ayuda a facturar?", opciones: ["\"Inglés para el trabajo\"","\"Monotributo, facturación e impuestos para independientes\"","\"Git y GitHub desde cero\"","Ninguno"], correcta: 1, explicacion: "Ese curso explica cómo facturar. Inglés tienta porque es del trabajo, pero no trata impuestos." },
  ],
},
];
