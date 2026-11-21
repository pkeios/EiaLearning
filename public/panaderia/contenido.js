// Temario del curso "Panadería casera para vender". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js panaderia y node tools/metodologia.js panaderia
window.TEMARIO = [
{
  id: "seguridad",
  icono: "🧼",
  titulo: "Higiene, seguridad y lo que pide la ley",
  nivel: "Básico",
  objetivos: [
    "Aplicar las cinco claves de la OMS para que lo que vendés no enferme a nadie",
    "Trabajar con el horno, los cuchillos y la amasadora sin lastimarte",
    "Saber qué carnet y qué habilitación necesitás para vender alimentos",
  ],
  lecciones: [
    { titulo: "Las cinco claves de la inocuidad", video: {"id":"_rwnwhSW5pw","t":"OMS: las cinco claves para la inocuidad de los alimentos (versión corta) · World Health Organization (WHO) (1:13)"}, html: `
      <p class="idea">Cuando vendés comida, la responsabilidad es tuya: un pan contaminado puede enfermar a una familia. La <strong>inocuidad</strong> es que el alimento no haga daño, y la OMS la resume en <strong>cinco claves</strong>.</p>
      <p>En todo el curso acompañamos a <strong>Norma</strong>, que vive en Florencio Varela. Siempre hizo pan para su familia y ahora quiere venderles pan, prepizzas y facturas a los vecinos los fines de semana, para sumar un ingreso.</p>
      <table>
        <tr><th>Clave de la OMS</th><th>En tu panadería</th></tr>
        <tr><td>1. Mantener la limpieza</td><td>Lavado de manos con jabón antes de amasar y después de tocar plata, el celular o la basura; mesada y utensilios limpios</td></tr>
        <tr><td>2. Separar crudos y cocidos</td><td>El huevo crudo y la carne lejos del pan ya horneado; tablas y trapos distintos</td></tr>
        <tr><td>3. Cocinar completamente</td><td>El pan bien cocido por dentro; los rellenos con carne o huevo, bien hechos</td></tr>
        <tr><td>4. Mantener a temperaturas seguras</td><td>Cremas, rellenos con huevo y fiambres en la heladera; no al sol</td></tr>
        <tr><td>5. Usar agua y materias primas seguras</td><td>Agua potable, harina sin bichos ni humedad, huevos sin rajaduras, nada vencido</td></tr>
      </table>
      <p>Las <strong>ETA</strong> (enfermedades transmitidas por alimentos) son las que aparecen por comer algo contaminado: dolor de panza, vómitos, diarrea, y a veces cosas más graves en chicos y personas mayores.</p>
      <pre><code>Antes de amasar:
[ ] Pelo atado y cubierto (cofia o pañuelo)
[ ] Sin anillos, pulseras ni reloj
[ ] Uñas cortas y limpias, sin esmalte
[ ] Manos lavadas 20 segundos con jabón
[ ] Delantal limpio
[ ] Si estás con diarrea, vómitos o fiebre: ese día no se produce</code></pre>
      <p>Por ejemplo, Norma amasaba con el anillo de casamiento y atendía el celular con las manos en la masa. Ahora deja el anillo en una cajita, pone el celular lejos y se lava las manos cada vez que lo toca.</p>` },
    { titulo: "Seguridad en la cocina", html: `
      <p class="idea">En una panadería casera los riesgos más comunes son <strong>quemaduras, cortes y golpes</strong>. Con un par de hábitos se evitan casi todos.</p>
      <table>
        <tr><th>Herramienta</th><th>Protección</th><th>Cómo usarla</th><th>Qué no hacer</th></tr>
        <tr><td>Horno</td><td>Guantes o manoplas de cocina secas</td><td>Abrí la puerta y esperá un segundo a que salga el vapor; sacá las bandejas con las dos manos</td><td>No uses un trapo mojado: el calor pasa y quema</td></tr>
        <tr><td>Vapor para el pan</td><td>Guantes y la cara lejos</td><td>Echá el agua en la asadera ya caliente desde lejos, con una jarra de mango largo</td><td>No te asomes a la puerta abierta cuando echás el agua</td></tr>
        <tr><td>Cuchillo y cortante</td><td>Mano que sostiene con los dedos doblados</td><td>Cortá sobre una tabla firme que no se mueva (un trapo húmedo abajo la frena)</td><td>No cortes hacia tu mano ni en el aire</td></tr>
        <tr><td>Amasadora o batidora</td><td>Pelo atado, sin mangas sueltas</td><td>Apagala y desenchufala antes de meter la mano o raspar el bol</td><td>Nunca metas la mano ni una cuchara con la máquina andando</td></tr>
        <tr><td>Bolsas de harina</td><td>Espalda derecha</td><td>Levantá doblando las rodillas; mejor de a 5 kg que la bolsa de 25</td><td>No levantes con la espalda doblada</td></tr>
      </table>
      <p><strong>Si te quemás:</strong> agua fresca de la canilla (no helada) sobre la quemadura unos 10 a 20 minutos. Nada de manteca, pasta dental ni hielo. Si es grande, en la cara o hace ampollas, andá a la guardia.</p>
      <p><strong>Chicos lejos del horno:</strong> mientras horneás, la cocina es zona de trabajo.</p>
      <p><strong>El gas:</strong> si sentís olor a gas, no prendas nada, abrí las ventanas, cerrá la llave y llamá a un gasista matriculado. Las instalaciones de gas las hace solo un gasista matriculado.</p>
      <p>Por ejemplo, Norma se quemó el antebrazo con la bandeja porque usó un repasador húmedo. Se compró dos manoplas de cocina y ya no le volvió a pasar.</p>` },
    { titulo: "Carnet, habilitación y alergias", html: `
      <p class="idea">Para vender alimentos en Argentina, el <strong>Código Alimentario Argentino</strong> pide el <strong>carnet de manipulador de alimentos</strong>. Además, según tu municipio, puede hacer falta una <strong>habilitación</strong>.</p>
      <table>
        <tr><th>Requisito</th><th>Qué es</th><th>Dónde se consulta</th></tr>
        <tr><td>Carnet de manipulador de alimentos</td><td>Documento obligatorio para trabajar con alimentos; se obtiene con un curso y un examen, vale en todo el país y dura 3 años</td><td>ANMAT o el área de bromatología de tu municipio o provincia</td></tr>
        <tr><td>Habilitación o registro del lugar</td><td>Permiso para producir y vender desde tu casa o un local; las reglas cambian según el municipio</td><td>Bromatología de tu municipio</td></tr>
        <tr><td>Inscripción impositiva</td><td>Por ejemplo, el monotributo, para poder facturar</td><td>ARCA (ex AFIP) y un contador</td></tr>
      </table>
      <p><strong>Bromatología</strong> es el área del municipio que controla que los alimentos sean seguros. Es tu mejor fuente para saber qué te piden en tu localidad.</p>
      <p><strong>Alergias e intolerancias:</strong> hay personas a las que el huevo, la leche, el sésamo o las nueces les pueden hacer mucho daño. Avisá siempre qué ingredientes tiene cada producto.</p>
      <p><strong>Sin TACC:</strong> la celiaquía es una enfermedad en la que el gluten (que está en el trigo, la avena, la cebada y el centeno, el TACC) daña el intestino. En una cocina donde se usa harina de trigo, la harina queda en el aire y en las superficies. <strong>No vendas nada como "sin TACC"</strong> si no tenés un lugar y un registro aprobados para eso: aunque la receta no tenga trigo, puede estar contaminada.</p>
      <p><strong>Esta lección te orienta, pero los requisitos cambian:</strong> confirmalos en bromatología de tu municipio antes de empezar a vender.</p>
      <p>Por ejemplo, Norma fue a bromatología de su municipio, le explicaron qué pedían para producir en casa y se anotó en el curso del carnet de manipulador. Lo aprobó en dos semanas.</p>` },
  ],
  practica: [
    "Hacé la lista de \"antes de amasar\" la próxima vez que cocines y anotá cuántos puntos cumpliste de los 6.",
    "Recorré tu cocina y anotá 3 riesgos (por ejemplo, un repasador húmedo cerca del horno) y cómo los vas a resolver.",
    "Averiguá en bromatología de tu municipio qué te piden para vender alimentos hechos en casa y anotá los requisitos.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "Ministerio de Salud: celiaquía", url: "https://www.argentina.gob.ar/salud/celiaquia" },
  ],
  quiz: [
    { q: "Atendés el celular mientras amasás. ¿Qué hacés antes de volver a la masa?", opciones: ["Te limpiás en el delantal","Nada, el celular está limpio","Te lavás las manos con jabón","Te pasás harina por las manos"], correcta: 2, explicacion: "El celular junta suciedad. Limpiarte en el delantal tienta por rápido, pero no saca los microbios." },
    { q: "Si tenés huevo crudo para pintar y pan ya horneado en la mesada, ¿qué clave aplicás?", opciones: ["Separar crudos y cocidos","Cocinar completamente","Usar agua segura","Ninguna"], correcta: 0, explicacion: "El huevo crudo puede contaminar el pan listo. Cocinar tienta porque el huevo se cocina, pero el pan ya está hecho." },
    { q: "Hacés facturas con crema pastelera. ¿Dónde la guardás?", opciones: ["Arriba de la mesada, tapada","Al sol para que no se enfríe","En el horno apagado","En la heladera"], correcta: 3, explicacion: "Lo que tiene huevo y leche se cuida del calor. Tapada en la mesada tienta, pero a temperatura ambiente crecen microbios." },
    { q: "El sábado amanecés con diarrea y fiebre. ¿Qué hacés con la producción?", opciones: ["Producís con guantes","Ese día no producís","Producís rápido","Producís y no le decís a nadie"], correcta: 1, explicacion: "Podés contagiar por los alimentos. Los guantes tientan como solución, pero no alcanzan." },
    { q: "Vas a sacar la bandeja del horno. ¿Qué usás?", opciones: ["Un repasador húmedo","Las manos rápido","Guantes o manoplas de cocina secos","Una bolsa de plástico"], correcta: 2, explicacion: "Lo húmedo conduce el calor y quema. El repasador tienta porque está a mano, pero tiene que estar seco y mejor una manopla." },
    { q: "Tenés que raspar el bol de la amasadora. ¿Qué hacés primero?", opciones: ["La apagás y la desenchufás","Raspás con cuidado mientras gira","Usás una cuchara larga","Bajás la velocidad"], correcta: 0, explicacion: "Con la máquina andando te puede atrapar la mano. Bajar la velocidad tienta, pero sigue siendo peligroso." },
    { q: "Te quemaste la mano con la bandeja. ¿Qué hacés?", opciones: ["Manteca","Pasta dental","Hielo directo","Agua fresca de la canilla 10 a 20 minutos"], correcta: 3, explicacion: "El agua fresca enfría sin dañar. La manteca tienta por remedio casero, pero empeora la quemadura." },
    { q: "Sentís olor a gas en la cocina. ¿Qué hacés?", opciones: ["Prendés el horno para ver si anda","No prendés nada, ventilás, cerrás la llave y llamás a un gasista matriculado","Lo arreglás vos con cinta","Seguís amasando"], correcta: 1, explicacion: "Una chispa puede causar una explosión. Arreglarlo vos tienta, pero el gas lo toca solo un gasista matriculado." },
    { q: "Querés empezar a vender pan a tus vecinos. ¿Qué documento personal te pide el Código Alimentario?", opciones: ["El registro de conducir","Ninguno","El carnet de manipulador de alimentos","Un título de panadero"], correcta: 2, explicacion: "El carnet es obligatorio para trabajar con alimentos. \"Ninguno\" tienta porque es casero, pero igual se pide." },
    { q: "Tenés dudas sobre qué habilitación necesitás para producir en tu casa. ¿Dónde preguntás?", opciones: ["En bromatología de tu municipio","En un grupo de Facebook","En la panadería de la esquina","En ningún lado"], correcta: 0, explicacion: "Las reglas cambian según el municipio. El grupo tienta por rápido, pero puede tener información de otro lugar." },
    { q: "Una clienta te pide un pan sin TACC y tu cocina usa harina de trigo. ¿Qué hacés?", opciones: ["Lo hacés con otra harina y lo vendés como sin TACC","Le decís que un poquito no hace mal","Lo vendés más barato","No lo vendés como sin TACC: puede estar contaminado"], correcta: 3, explicacion: "La harina de trigo queda en el aire y las superficies. Usar otra harina tienta, pero sin un lugar aprobado igual puede contaminarse." },
    { q: "Tus prepizzas llevan sésamo. ¿Qué hacés al venderlas?", opciones: ["No decís nada, se ve","Avisás que tienen sésamo","Lo sacás de la lista para que no asuste","Avisás solo si preguntan"], correcta: 1, explicacion: "Para una persona alérgica puede ser grave. \"Se ve\" tienta, pero no todos lo notan." },
  ],
},
{
  id: "ingredientes",
  icono: "🌾",
  titulo: "Los ingredientes y la balanza",
  nivel: "Básico",
  objetivos: [
    "Elegir la harina según lo que vas a hacer",
    "Saber qué hace cada ingrediente en la masa",
    "Pesar con balanza y convertir levadura fresca en seca",
  ],
  lecciones: [
    { titulo: "La harina", html: `
      <p class="idea">La harina de trigo es la base de casi todo. Lo que la hace especial es el <strong>gluten</strong>: una red elástica que se forma al mojarla y amasarla y que atrapa el gas de la fermentación.</p>
      <table>
        <tr><th>Harina</th><th>Cómo es</th><th>Para qué</th></tr>
        <tr><td>000 (tres ceros)</td><td>Más proteína, forma más gluten</td><td>Pan francés, pan de campo, prepizzas</td></tr>
        <tr><td>0000 (cuatro ceros)</td><td>Más fina y blanca, menos fuerza</td><td>Facturas, masas dulces, tortas</td></tr>
        <tr><td>Integral</td><td>Con el salvado (la cáscara del grano)</td><td>Panes integrales; absorbe más agua</td></tr>
        <tr><td>Leudante</td><td>Trae polvo de hornear</td><td>Bizcochuelos; no para pan con levadura</td></tr>
      </table>
      <p><strong>Más ceros no es "mejor":</strong> el número indica qué tan refinada es. Para pan, la 000 da una miga con más cuerpo; la 0000 es ideal para lo dulce.</p>
      <p><strong>Cómo guardarla:</strong> en un lugar seco y fresco, en un recipiente cerrado, lejos del piso y de la humedad. Si tiene olor raro, grumos húmedos o bichitos, se tira.</p>
      <p><strong>Comprar por bolsa grande</strong> abarata, pero solo si la usás antes de que se humedezca o se llene de bichos. Empezá con lo que puedas usar en un mes.</p>
      <p>Por ejemplo, Norma hacía todo con 0000 y sus panes salían bajos y blandos. Cambió a 000 para el pan francés y la diferencia se notó en el primer horneado.</p>` },
    { titulo: "Qué hace cada ingrediente", video: {"id":"IEgeSNHyW6I","t":"Cómo se hace el pan de campo casero · Cocineros Argentinos (12:33)"}, html: `
      <p class="idea">Un pan básico tiene solo <strong>harina, agua, sal y levadura</strong>. Cada uno tiene una función, y entenderla te ayuda a corregir cuando algo sale mal.</p>
      <table>
        <tr><th>Ingrediente</th><th>Función</th><th>Si falta o sobra</th></tr>
        <tr><td>Harina</td><td>La estructura</td><td>—</td></tr>
        <tr><td>Agua</td><td>Forma el gluten y activa la levadura</td><td>Poca: masa dura y pan seco. Mucha: masa pegajosa, difícil de formar</td></tr>
        <tr><td>Sal</td><td>Da sabor y fortalece el gluten</td><td>Sin sal: pan insulso. De más: frena la levadura</td></tr>
        <tr><td>Levadura</td><td>Fermenta: produce el gas que hace crecer la masa</td><td>Poca: tarda mucho. Mucha: sabor fuerte y masa que se pasa</td></tr>
        <tr><td>Grasa (manteca o grasa vacuna)</td><td>Miga más tierna, se conserva más</td><td>Opcional en el pan; clave en facturas</td></tr>
        <tr><td>Azúcar</td><td>Sabor y color dorado</td><td>Mucha en masas dulces hace más lenta la fermentación</td></tr>
      </table>
      <p>La <strong>levadura</strong> es un ser vivo microscópico (un hongo) que se alimenta de los azúcares de la harina y larga gas. Ese gas queda atrapado en el gluten y la masa crece.</p>
      <p><strong>La sal no va en contacto directo con la levadura:</strong> si las juntás puras, la sal la daña. Mezclá la sal con la harina y la levadura con el agua, o agregalas por separado.</p>
      <p><strong>El agua tibia, no caliente:</strong> la levadura muere a más de 50 °C. Si al meter el dedo el agua te resulta agradable, está bien.</p>
      <p>Por ejemplo, un día el pan de Norma no creció. Repasó la tabla: había disuelto la levadura en agua que "echaba humo". La vez siguiente usó agua tibia y salió perfecto.</p>` },
    { titulo: "Pesar, no medir con tazas", html: `
      <p class="idea">Para vender siempre el mismo pan, <strong>pesá los ingredientes con una balanza de cocina</strong>. Una taza de harina puede pesar 120 g o 160 g según cómo la llenes.</p>
      <pre><code>Por qué pesar:
"2 tazas de harina"  → un día 240 g, otro día 320 g → panes distintos
"300 g de harina"    → siempre 300 g             → panes iguales

Una balanza digital de cocina:
- Mide de a 1 g (ideal para sal y levadura)
- Tiene botón "tara": pone en 0 con el bol arriba</code></pre>
      <table>
        <tr><th>Levadura</th><th>Cómo es</th><th>Equivalencia aproximada</th></tr>
        <tr><td>Fresca (de pan)</td><td>Un bloque húmedo; dura unas semanas en la heladera</td><td>30 g</td></tr>
        <tr><td>Seca instantánea</td><td>En polvo, en sobres; dura meses cerrada</td><td>10 g (la tercera parte)</td></tr>
      </table>
      <p><strong>La regla práctica:</strong> la levadura seca es unas tres veces más concentrada que la fresca. Si la receta pide 30 g de fresca, usá unos 10 g de seca.</p>
      <p><strong>La "tara"</strong> es poner la balanza en cero con el recipiente arriba, para pesar solo lo que agregás.</p>
      <p><strong>Anotá todo:</strong> una libreta con cada receta en gramos, la fecha y cómo salió. Así repetís lo que funciona y corregís lo que no.</p>
      <p>Por ejemplo, las clientas de Norma le decían que un sábado el pan salía más compacto que otro. Se compró una balanza digital, pasó su receta a gramos y desde ahí todos los panes salen iguales.</p>` },
  ],
  practica: [
    "Mirá las bolsas de harina de tu casa y anotá de qué tipo es cada una y para qué la usarías.",
    "Llená una taza de harina 3 veces, pesala cada vez y anotá los 3 pesos.",
    "Si tu receta pide 45 g de levadura fresca, calculá cuánta seca usarías y anotá el resultado.",
  ],
  recursos: [
    { t: "ANMAT: Código Alimentario Argentino (el capítulo IX trata harinas y panes)", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "King Arthur Baking: el porcentaje del panadero (en inglés)", url: "https://www.kingarthurbaking.com/pro/reference/bakers-percentage" },
    { t: "INTI: Instituto Nacional de Tecnología Industrial (asistencia a productores)", url: "https://www.argentina.gob.ar/inti" },
  ],
  quiz: [
    { q: "Vas a hacer pan francés. ¿Qué harina elegís?", opciones: ["0000","Leudante","000","De maíz"], correcta: 2, explicacion: "La 000 forma más gluten y da cuerpo al pan. La 0000 tienta por \"más ceros\", pero es para lo dulce." },
    { q: "Si vas a hacer facturas, ¿qué harina conviene?", opciones: ["0000","000","Integral","Leudante siempre"], correcta: 0, explicacion: "La 0000 es más fina, ideal para masas dulces. La 000 tienta para todo, pero da masas más duras." },
    { q: "Tu harina tiene grumos húmedos y olor raro. ¿Qué hacés?", opciones: ["La tamizás y la usás","La secás al sol","La mezclás con harina nueva","La tirás"], correcta: 3, explicacion: "Puede tener hongos. Tamizarla tienta por no desperdiciar, pero no la vuelve segura." },
    { q: "Si te quedaste sin agua en la receta y la masa quedó dura, ¿qué pasa con el pan?", opciones: ["Sale más esponjoso","Sale seco y compacto","Sale igual","Crece el doble"], correcta: 1, explicacion: "Sin agua suficiente no se forma bien el gluten. \"Más esponjoso\" tienta, pero es al revés." },
    { q: "Tu pan salió insulso. ¿Qué faltó?", opciones: ["Levadura","Agua","Sal","Azúcar"], correcta: 2, explicacion: "La sal da sabor. Azúcar tienta por el sabor, pero el pan insulso es falta de sal." },
    { q: "Querés disolver la levadura. ¿Con qué agua?", opciones: ["Tibia, agradable al dedo","Hirviendo","Helada","Con la sal disuelta"], correcta: 0, explicacion: "A más de 50 °C la levadura muere. Hirviendo tienta para \"activarla rápido\", pero la mata." },
    { q: "Si ponés la sal directo sobre la levadura fresca, ¿qué pasa?", opciones: ["La activa más rápido","No pasa nada","El pan queda más salado","La sal daña la levadura"], correcta: 3, explicacion: "Conviene separarlas. \"La activa\" tienta, pero la frena." },
    { q: "¿Qué hace la levadura en la masa?", opciones: ["Le da color","Fermenta y produce el gas que la hace crecer","La hace salada","La endurece"], correcta: 1, explicacion: "Larga gas que queda atrapado en el gluten. El color tienta, pero eso lo da el horneado y el azúcar." },
    { q: "Si medís la harina con tazas, ¿qué problema tenés?", opciones: ["Ninguno","Que la harina se apelmaza","Cada taza pesa distinto y el pan no sale igual","Que tarda más"], correcta: 2, explicacion: "Una taza puede pesar 120 o 160 g. \"Ninguno\" tienta porque así lo hacían las abuelas, pero para vender hace falta repetir." },
    { q: "La receta pide 30 g de levadura fresca y tenés seca. ¿Cuánto usás?", opciones: ["Unos 10 g","30 g","90 g","3 g"], correcta: 0, explicacion: "La seca es unas tres veces más concentrada. 30 g tienta por copiar el número, pero sería demasiada." },
    { q: "Ponés el bol en la balanza y querés pesar solo la harina. ¿Qué apretás?", opciones: ["Apagar","Nada, restás de memoria","El botón de gramos a onzas","Tara, para ponerla en cero"], correcta: 3, explicacion: "La tara descuenta el bol. Restar de memoria tienta, pero es fácil equivocarse." },
    { q: "Querés que el pan del sábado salga igual al del domingo. ¿Qué hacés?", opciones: ["Calculás a ojo con más cuidado","Pesás todo y anotás la receta en gramos","Usás tazas más grandes","Comprás otra harina cada vez"], correcta: 1, explicacion: "Pesar y anotar asegura repetir. \"A ojo con cuidado\" tienta, pero varía igual." },
  ],
},
{
  id: "porcentaje",
  icono: "🧮",
  titulo: "El porcentaje del panadero",
  nivel: "Intermedio",
  objetivos: [
    "Leer y escribir una receta en porcentajes del panadero",
    "Calcular la hidratación de una masa",
    "Agrandar o achicar una receta para producir la cantidad que vas a vender",
  ],
  lecciones: [
    { titulo: "Todo en relación con la harina", html: `
      <p class="idea">Los panaderos escriben las recetas en <strong>porcentajes de la harina</strong>: la harina siempre es el 100% y cada ingrediente es un porcentaje de ella. Así una receta sirve para 1 kg o para 10 kg.</p>
      <table>
        <tr><th>Ingrediente</th><th>Porcentaje</th><th>Para 1.000 g de harina</th></tr>
        <tr><td>Harina 000</td><td>100%</td><td>1.000 g</td></tr>
        <tr><td>Agua</td><td>60%</td><td>600 g</td></tr>
        <tr><td>Sal</td><td>2%</td><td>20 g</td></tr>
        <tr><td>Levadura fresca</td><td>2%</td><td>20 g</td></tr>
        <tr><td>Grasa</td><td>3%</td><td>30 g</td></tr>
        <tr><td><strong>Total de masa</strong></td><td><strong>167%</strong></td><td><strong>1.670 g</strong></td></tr>
      </table>
      <pre><code>Cómo se calcula cada ingrediente:
gramos = harina × porcentaje ÷ 100

Sal con 1.000 g de harina:  1.000 × 2 ÷ 100 = 20 g
Agua con 1.000 g de harina: 1.000 × 60 ÷ 100 = 600 g</code></pre>
      <p><strong>Ojo:</strong> los porcentajes suman más de 100% porque se calculan sobre la harina, no sobre el total. Es distinto a los porcentajes de una torta de gráfico.</p>
      <p><strong>Para el agua, gramos y mililitros son lo mismo:</strong> 600 g de agua son 600 ml. Para la leche es casi igual; para el aceite, no.</p>
      <p>Por ejemplo, la receta de pan de la abuela de Norma decía "un kilo de harina, un vaso grande de agua, un puñado de sal". Norma la pesó, la pasó a porcentajes y descubrió que su abuela usaba 62% de agua y 2% de sal.</p>` },
    { titulo: "La hidratación", html: `
      <p class="idea">La <strong>hidratación</strong> es el porcentaje de agua sobre la harina. Es el número que más cambia cómo se siente la masa y cómo sale el pan.</p>
      <table>
        <tr><th>Hidratación</th><th>Cómo es la masa</th><th>Pan típico</th></tr>
        <tr><td>50% a 55%</td><td>Firme, fácil de formar</td><td>Pan de campo denso, grisines, bizcochitos</td></tr>
        <tr><td>58% a 65%</td><td>Suave, se maneja bien</td><td>Pan francés, prepizzas</td></tr>
        <tr><td>70% o más</td><td>Pegajosa, para manos con práctica</td><td>Panes de miga abierta (ciabatta, masa madre)</td></tr>
      </table>
      <pre><code>Hidratación = agua ÷ harina × 100

Ejemplo: 650 g de agua con 1.000 g de harina
650 ÷ 1.000 × 100 = 65%</code></pre>
      <p><strong>Cada harina absorbe distinto:</strong> la integral y algunas 000 piden más agua. Si cambiás de marca, guardá un poquito del agua y agregala de a poco hasta que la masa tenga el punto que buscás.</p>
      <p><strong>Si la masa está pegajosa,</strong> la tentación es agregar mucha harina. Mejor amasá un rato más: el gluten se forma y la masa deja de pegarse. Agregar harina baja la hidratación y cambia el pan.</p>
      <p>Por ejemplo, Norma quería prepizzas más esponjosas. Subió la hidratación de 58% a 63% (630 g de agua por kilo de harina) y le quedaron más aireadas.</p>` },
    { titulo: "Agrandar o achicar una receta", html: `
      <p class="idea">Para producir lo que vas a vender, calculá <strong>cuánta masa necesitás</strong> y de ahí <strong>cuánta harina</strong>. Con los porcentajes, el resto sale solo.</p>
      <pre><code>Pedido: 24 bollos de pan de 100 g de masa cada uno
Masa necesaria: 24 × 100 = 2.400 g

La receta da 167% de masa (sobre la harina), entonces:
Harina = 2.400 ÷ 167 × 100 ≈ 1.437 g  → redondeá a 1.450 g

Con 1.450 g de harina:
Agua  60% → 870 g
Sal    2% →  29 g
Levad. 2% →  29 g
Grasa  3% → 43,5 g (44 g)
Total     → 2.421,5 g: alcanza para 24 bollos y sobra un poquito</code></pre>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>1</td><td>Cantidad de piezas × peso de cada una = masa total</td></tr>
        <tr><td>2</td><td>Masa total ÷ porcentaje total × 100 = harina</td></tr>
        <tr><td>3</td><td>Redondeá la harina un poco para arriba (se pierde masa en el bol y la mesa)</td></tr>
        <tr><td>4</td><td>Cada ingrediente = harina × su porcentaje ÷ 100</td></tr>
      </table>
      <p><strong>El pan pierde peso al hornearse:</strong> el agua se evapora. Un bollo de 100 g de masa sale del horno pesando unos 85 a 90 g. Si vendés por peso, contá con eso.</p>
      <p><strong>Una planilla te ahorra las cuentas:</strong> en Excel o Google Sheets podés poner los porcentajes en una columna y la harina en una celda; los gramos se calculan solos.</p>
      <p>Por ejemplo, el primer sábado Norma tuvo pedidos de 36 bollos. Hizo la cuenta con la tabla, amasó 2.200 g de harina (3.674 g de masa) y le alcanzó para los 36 bollos con 74 g de sobra.</p>` },
  ],
  practica: [
    "Pasá una receta de pan que tengas a porcentajes del panadero y anotá la hidratación.",
    "Calculá los gramos de cada ingrediente para 1.500 g de harina con la receta de la lección y anotá el total de masa.",
    "Calculá cuánta harina necesitás para 30 prepizzas de 250 g de masa cada una (con 167% de masa total) y anotá el resultado.",
  ],
  recursos: [
    { t: "King Arthur Baking: el porcentaje del panadero (en inglés)", url: "https://www.kingarthurbaking.com/pro/reference/bakers-percentage" },
    { t: "ANMAT: Código Alimentario Argentino (el capítulo IX trata harinas y panes)", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "INTI: Instituto Nacional de Tecnología Industrial (asistencia a productores)", url: "https://www.argentina.gob.ar/inti" },
  ],
  quiz: [
    { q: "En el porcentaje del panadero, ¿qué ingrediente es siempre el 100%?", opciones: ["El agua","La masa total","La harina","La levadura"], correcta: 2, explicacion: "Todo se calcula sobre la harina. La masa total tienta por ser \"el todo\", pero no es la base." },
    { q: "Tenés 1.000 g de harina y la receta dice sal 2%. ¿Cuánta sal ponés?", opciones: ["20 g","2 g","200 g","12 g"], correcta: 0, explicacion: "1.000 × 2 ÷ 100 = 20. 2 g tienta por copiar el número, pero es un porcentaje." },
    { q: "Los porcentajes de tu receta suman 167%. ¿Está mal?", opciones: ["Sí, tienen que sumar 100%","Sí, sobra sal","Sí, falta agua","No: se calculan sobre la harina, no sobre el total"], correcta: 3, explicacion: "Por eso pasan de 100. \"Tienen que sumar 100\" tienta por costumbre, pero eso es otro tipo de porcentaje." },
    { q: "La receta pide 600 g de agua y tenés una jarra medidora en ml. ¿Cuánto ponés?", opciones: ["60 ml","600 ml","6.000 ml","No se puede medir"], correcta: 1, explicacion: "En el agua, 1 g es 1 ml. 60 tienta por error de cuenta." },
    { q: "Usás 650 g de agua con 1.000 g de harina. ¿Qué hidratación tiene?", opciones: ["6,5%","650%","65%","35%"], correcta: 2, explicacion: "650 ÷ 1.000 × 100 = 65. 35% tienta si restás, pero se divide." },
    { q: "Querés hacer pan francés. ¿Qué hidratación es típica?", opciones: ["Entre 58% y 65%","Entre 30% y 40%","Más de 90%","100%"], correcta: 0, explicacion: "Es una masa suave y manejable. Más de 90% tienta para miga abierta, pero sería imposible de formar." },
    { q: "Cambiaste de marca de harina. ¿Qué hacés con el agua?", opciones: ["Ponés toda de golpe igual que siempre","Ponés el doble","No ponés agua","Guardás un poco y la agregás de a poco hasta el punto"], correcta: 3, explicacion: "Cada harina absorbe distinto. Ponerla toda tienta por costumbre, pero puede quedar muy pegajosa." },
    { q: "Tu masa está pegajosa mientras amasás. ¿Qué conviene probar primero?", opciones: ["Agregar mucha harina","Amasar un rato más","Tirarla","Ponerla en la heladera"], correcta: 1, explicacion: "Al amasar se forma el gluten y deja de pegarse. Agregar harina tienta, pero cambia la receta." },
    { q: "Si te piden 24 bollos de 100 g de masa, ¿cuánta masa necesitás?", opciones: ["240 g","124 g","2.400 g","24.000 g"], correcta: 2, explicacion: "24 × 100 = 2.400. 240 tienta por un cero de menos." },
    { q: "Calculaste 1.437 g de harina. ¿Qué hacés?", opciones: ["Redondeás un poco para arriba, por lo que se pierde en el bol","Redondeás para abajo a 1.400","Usás exactamente 1.437","Usás 1.000 y listo"], correcta: 0, explicacion: "Siempre se pierde algo de masa. Para abajo tienta por ahorrar, pero te faltaría para el último bollo." },
    { q: "Vendés por peso y tus bollos tienen 100 g de masa cruda. ¿Cuánto pesan horneados?", opciones: ["Más de 100 g","Exactamente 100 g","Unos 50 g","Unos 85 a 90 g"], correcta: 3, explicacion: "El agua se evapora en el horno. \"Exactamente 100\" tienta, pero el pan pierde peso." },
    { q: "Hacés las cuentas de la receta cada sábado a mano. ¿Qué te ahorra tiempo?", opciones: ["Hacerlas más rápido","Una planilla con los porcentajes y la harina en una celda","Calcular a ojo","No hacerlas"], correcta: 1, explicacion: "La planilla calcula sola. \"A ojo\" tienta, pero vuelve el problema de los panes distintos." },
  ],
},
{
  id: "masa",
  icono: "👐",
  titulo: "Amasar, fermentar y formar",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer cuándo una masa está bien amasada con la prueba de la membrana",
    "Saber cuándo terminó la fermentación con la prueba del dedo",
    "Formar bollos y piezas parejas y tensas",
  ],
  lecciones: [
    { titulo: "El amasado y el punto de la masa", html: `
      <p class="idea">Amasar <strong>desarrolla el gluten</strong>: la masa pasa de pegajosa y rota a lisa y elástica. Sabés que está lista con la <strong>prueba de la membrana</strong>.</p>
      <pre><code>Orden de trabajo:
1. Mezclá la harina con la sal en un bol.
2. Disolvé la levadura en parte del agua tibia.
3. Agregá el agua con levadura y el resto del agua de a poco.
4. Uní hasta que no quede harina seca.
5. Pasá a la mesada y amasá: empujá con la base de la mano,
   doblá la masa sobre sí misma, girala un cuarto y repetí.
6. Agregá la grasa a mitad del amasado.
7. Amasá unos 10 a 15 minutos a mano.</code></pre>
      <table>
        <tr><th>Prueba de la membrana</th><th>Qué significa</th></tr>
        <tr><td>Estirás un pedacito y se rompe enseguida</td><td>Falta amasar</td></tr>
        <tr><td>Se estira fino, casi transparente, sin romperse</td><td>Está lista: el gluten se formó</td></tr>
      </table>
      <p><strong>La prueba:</strong> cortá un trozo del tamaño de una nuez y estiralo suave con los dedos hacia los costados, como una telita. Si deja pasar la luz sin romperse, listo.</p>
      <p><strong>Amasar a mano cansa:</strong> apoyá el peso del cuerpo, no solo los brazos, y trabajá a la altura de la cadera. Si vas a hacer mucha cantidad, una amasadora ayuda (con las precauciones del primer módulo).</p>
      <p><strong>No le pongas harina a cada rato:</strong> como viste en la hidratación, eso cambia la receta. Si se pega, raspá la mesada con una espátula y seguí.</p>
      <p>Por ejemplo, Norma amasaba 5 minutos y su pan salía apelmazado. Empezó a hacer la prueba de la membrana y descubrió que necesitaba 12 minutos para su masa.</p>` },
    { titulo: "La fermentación", video: {"id":"94f4pbxvypk","t":"Punto de fermentación óptimo para hornear un pan · Enharinado (1:03)"}, html: `
      <p class="idea">La <strong>fermentación</strong> es el tiempo en que la levadura trabaja y la masa crece. La regla general: hasta que <strong>casi duplique su volumen</strong>. El tiempo depende mucho de la temperatura.</p>
      <table>
        <tr><th>Temperatura de la cocina</th><th>Primera fermentación (aproximada)</th></tr>
        <tr><td>Fresca, 18 a 20 °C</td><td>1 h 30 a 2 h</td></tr>
        <tr><td>Templada, 24 a 26 °C</td><td>Alrededor de 1 h</td></tr>
        <tr><td>Calurosa, 30 °C o más</td><td>40 minutos o menos: vigilala</td></tr>
        <tr><td>En la heladera, 4 a 6 °C</td><td>De 8 a 24 h (fermentación lenta, más sabor)</td></tr>
      </table>
      <pre><code>Prueba del dedo (antes de hornear):
Hundí un dedo enharinado 1 cm en la masa.
- Vuelve enseguida            → falta fermentar
- Vuelve despacio y queda
  una marquita                → lista para el horno
- No vuelve, la masa se baja   → se pasó (sale chata y con sabor ácido)</code></pre>
      <p><strong>Tapá la masa</strong> con un repasador limpio o un film para que no se seque la superficie.</p>
      <p><strong>Hay dos fermentaciones:</strong> la primera, con toda la masa junta (en bloque), y la segunda, después de formar las piezas, antes de hornear. La segunda suele ser más corta.</p>
      <p><strong>En verano, menos levadura o agua más fresca;</strong> en invierno, un lugar templado (cerca del horno apagado, pero tibio, nunca adentro de un horno encendido).</p>
      <p>Por ejemplo, en enero las masas de Norma se pasaban y salían chatas. Bajó la levadura de 2% a 1,5% y usó agua de la canilla sin entibiar: volvió a tener el tiempo justo.</p>` },
    { titulo: "Dividir y formar", html: `
      <p class="idea">Para que las piezas salgan iguales, <strong>dividí pesando</strong> y <strong>formá con tensión</strong>: una superficie tirante hace que el pan crezca para arriba y no se desparrame.</p>
      <pre><code>Dividir:
1. Volcá la masa fermentada sobre la mesada, sin harina de más.
2. Cortá con una espátula o un cortante (no la estires ni la rompas).
3. Pesá cada pieza: todas con el mismo peso (por ejemplo, 100 g).

Bollear (hacer un bollo tenso):
1. Doblá los bordes hacia el centro, como un paquete.
2. Dalo vuelta con el cierre para abajo.
3. Con la mano en forma de cueva, hacelo girar sobre la mesada
   empujándolo hacia vos: la superficie se pone tirante.</code></pre>
      <table>
        <tr><th>Si la pieza...</th><th>Probablemente...</th></tr>
        <tr><td>Se desparrama en la bandeja</td><td>Le faltó tensión al formar</td></tr>
        <tr><td>Se rompe la superficie al formar</td><td>Le diste demasiada tensión: soltá un poco</td></tr>
        <tr><td>Tiene burbujas grandes debajo</td><td>No apoyaste bien el cierre abajo</td></tr>
      </table>
      <p><strong>Dejá descansar:</strong> si la masa se resiste y vuelve a encogerse, tapala 10 minutos. El gluten se relaja y después se forma fácil.</p>
      <p><strong>Separá las piezas en la bandeja</strong> (unos 3 o 4 dedos) porque van a crecer en la segunda fermentación y en el horno.</p>
      <p>Por ejemplo, las clientas de Norma se quejaban de que unos bollos eran grandes y otros chiquitos. Empezó a pesar cada pieza a 100 g y las quejas terminaron.</p>` },
  ],
  practica: [
    "Amasá un pan y hacé la prueba de la membrana cada 3 minutos; anotá en qué minuto pasó la prueba.",
    "Anotá la temperatura de tu cocina y cuánto tardó la masa en casi duplicar su volumen.",
    "Dividí una masa en piezas de 100 g, pesá cada una y anotá la diferencia entre la más pesada y la más liviana.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "King Arthur Baking: el porcentaje del panadero (en inglés)", url: "https://www.kingarthurbaking.com/pro/reference/bakers-percentage" },
    { t: "INTI: Instituto Nacional de Tecnología Industrial (asistencia a productores)", url: "https://www.argentina.gob.ar/inti" },
  ],
  quiz: [
    { q: "Si estirás un pedacito de masa y se rompe enseguida, ¿qué te dice?", opciones: ["Que está lista","Que se pasó de agua","Que falta amasar","Que hay que hornearla ya"], correcta: 2, explicacion: "El gluten todavía no se formó. \"Está lista\" tienta si ya amasaste un rato, pero la membrana dice que no." },
    { q: "Si la masa se estira fina y casi transparente sin romperse, ¿qué significa?", opciones: ["Que está bien amasada","Que le falta sal","Que hay que agregar harina","Que se pasó de fermentación"], correcta: 0, explicacion: "Es la prueba de la membrana superada. Agregar harina tienta, pero arruinaría el punto." },
    { q: "Amasar te cansa mucho los brazos. ¿Qué cambiás?", opciones: ["Amasás menos tiempo","Agregás más agua","Amasás sentado","Apoyás el peso del cuerpo y trabajás a la altura de la cadera"], correcta: 3, explicacion: "Usar el cuerpo cansa menos. Amasar menos tienta, pero el pan sale apelmazado." },
    { q: "Tu cocina está a 25 °C. ¿Cuánto tarda más o menos la primera fermentación?", opciones: ["10 minutos","Alrededor de 1 hora","5 horas","24 horas"], correcta: 1, explicacion: "A temperatura templada, cerca de una hora. 24 h tienta, pero eso es en la heladera." },
    { q: "Hacés la prueba del dedo y la masa vuelve enseguida. ¿Qué hacés?", opciones: ["La horneás ya","La amasás de nuevo","Esperás: falta fermentar","Le agregás levadura"], correcta: 2, explicacion: "Si vuelve rápido, todavía tiene fuerza para crecer. Hornearla tienta por apuro, pero sale densa." },
    { q: "Si hundís el dedo y la masa no vuelve y se baja, ¿qué pasó?", opciones: ["Se pasó de fermentación","Le falta fermentar","Está perfecta","Le falta amasar"], correcta: 0, explicacion: "Se quedó sin fuerza. \"Le falta fermentar\" tienta porque está baja, pero en realidad se pasó." },
    { q: "Querés más sabor y que la masa no te apure. ¿Qué probás?", opciones: ["Ponerla en el horno encendido","Duplicar la levadura","Dejarla al sol","Fermentarla lento en la heladera"], correcta: 3, explicacion: "El frío alarga la fermentación y da sabor. Duplicar la levadura tienta, pero acelera y da sabor fuerte." },
    { q: "En enero tus masas se pasan y salen chatas. ¿Qué cambiás?", opciones: ["Más levadura","Usás menos levadura o agua más fresca","Agua más caliente","Más azúcar"], correcta: 1, explicacion: "Con calor fermenta más rápido. Agua caliente tienta por costumbre, pero acelera todavía más." },
    { q: "Querés bollos iguales. ¿Cómo dividís la masa?", opciones: ["A ojo","Estirando la masa y cortando cuadrados al azar","Pesando cada pieza","Contando los cortes"], correcta: 2, explicacion: "Pesar garantiza el mismo tamaño. A ojo tienta por rápido, pero salen distintos." },
    { q: "Tus bollos se desparraman en la bandeja. ¿Qué faltó?", opciones: ["Tensión al formarlos","Más harina en la mesada","Más horno","Más sal"], correcta: 0, explicacion: "Sin tensión la masa no se sostiene. Más harina tienta, pero no da forma." },
    { q: "La masa se encoge cada vez que la querés estirar. ¿Qué hacés?", opciones: ["La estirás con más fuerza","Le agregás agua","La tirás","La tapás y la dejás descansar 10 minutos"], correcta: 3, explicacion: "El gluten necesita relajarse. Más fuerza tienta, pero la rompe." },
    { q: "Si ponés los bollos en la bandeja, ¿cómo los acomodás?", opciones: ["Bien pegados para que entren más","Separados unos 3 o 4 dedos, porque van a crecer","Uno arriba del otro","Sin importar la distancia"], correcta: 1, explicacion: "Crecen en la segunda fermentación y en el horno. Pegarlos tienta para aprovechar la bandeja, pero se unen." },
  ],
},
{
  id: "horno",
  icono: "🔥",
  titulo: "El horneado",
  nivel: "Intermedio",
  objetivos: [
    "Precalentar y usar el horno de casa con la temperatura justa para cada producto",
    "Saber si un pan está bien cocido por dentro",
    "Diagnosticar los problemas más comunes del pan con una tabla",
  ],
  lecciones: [
    { titulo: "El horno de casa", html: `
      <p class="idea">El pan necesita un horno <strong>bien caliente desde el principio</strong>. Precalentá siempre, y conocé tu horno: cada uno calienta distinto.</p>
      <table>
        <tr><th>Producto</th><th>Temperatura aproximada</th><th>Tiempo aproximado</th></tr>
        <tr><td>Bollos y pan francés chico</td><td>210 a 220 °C</td><td>15 a 20 min</td></tr>
        <tr><td>Pan de campo grande (1 kg de masa)</td><td>200 °C</td><td>35 a 45 min</td></tr>
        <tr><td>Prepizzas (precocción)</td><td>Lo más alto que dé tu horno</td><td>8 a 10 min</td></tr>
        <tr><td>Facturas y medialunas</td><td>180 a 200 °C</td><td>12 a 18 min</td></tr>
      </table>
      <pre><code>Precalentar:
- Prendé el horno 20 a 30 minutos antes de hornear.
- Si tu horno no tiene números, un termómetro de horno
  (se cuelga en la rejilla) te dice la temperatura real.
- Bandeja en el medio del horno: abajo se quema la base,
  arriba se dora de más la superficie.</code></pre>
      <p><strong>El vapor</strong> en los primeros minutos ayuda a que el pan crezca y haga una corteza crocante y brillante. Una forma casera: una asadera vacía en el piso del horno, que se calienta con el horno; al meter el pan, echás medio vaso de agua en ella. Hacelo con guantes y la cara lejos, como viste en el módulo de seguridad.</p>
      <p><strong>No abras la puerta</strong> en los primeros 10 minutos: se va el calor y el vapor.</p>
      <p><strong>Girá la bandeja a mitad de cocción</strong> si tu horno dora más de un lado (casi todos los hornos de casa lo hacen).</p>
      <p>Por ejemplo, el horno de Norma decía 220 °C, pero el termómetro marcaba 190 °C. Desde entonces pone la perilla un poco más alta y el pan dora bien.</p>` },
    { titulo: "Saber si está cocido", html: `
      <p class="idea">Un pan dorado por fuera puede estar crudo por dentro. Comprobalo con <strong>el golpe, el peso o un termómetro</strong>.</p>
      <table>
        <tr><th>Prueba</th><th>Cómo se hace</th><th>Está listo si...</th></tr>
        <tr><td>El golpe</td><td>Dalo vuelta con un guante y golpeá la base con el dedo</td><td>Suena hueco, como una puerta de madera</td></tr>
        <tr><td>El color</td><td>Mirá la base y los costados, no solo arriba</td><td>Dorados parejos, no pálidos</td></tr>
        <tr><td>El termómetro de pinche</td><td>Clavalo en el centro de la pieza</td><td>Marca más de 90 °C</td></tr>
        <tr><td>El peso</td><td>Pesá una pieza de 100 g de masa al salir</td><td>Pesa unos 85 a 90 g (perdió agua)</td></tr>
      </table>
      <p><strong>El enfriado es parte de la cocción:</strong> dejá el pan sobre una rejilla al menos 30 minutos (una hora para los grandes) antes de cortarlo o embolsarlo. Adentro el vapor sigue terminando la miga.</p>
      <p><strong>Nunca lo embolses caliente:</strong> el vapor se condensa en la bolsa, la corteza se ablanda y aparecen hongos más rápido. Para la venta, esperá a que esté a temperatura ambiente.</p>
      <p><strong>Una rejilla</strong> deja pasar el aire por abajo. Si lo apoyás sobre la mesada, la base se humedece.</p>
      <p>Por ejemplo, Norma embolsaba el pan tibio para tenerlo listo antes de que llegaran los vecinos. Las clientas le dijeron que al día siguiente estaba gomoso. Ahora hornea una hora antes y lo deja enfriar en rejillas.</p>` },
    { titulo: "Qué salió mal y cómo arreglarlo", html: `
      <p class="idea">Cuando un pan sale mal, casi siempre la causa está en <strong>uno de los pasos</strong> que ya viste. Esta tabla te ayuda a encontrarla.</p>
      <table>
        <tr><th>Problema</th><th>Causa más probable</th><th>Qué cambiás</th></tr>
        <tr><td>Pan chato que se desparramó</td><td>Se pasó de fermentación o le faltó tensión</td><td>Prueba del dedo antes; bollear más tenso</td></tr>
        <tr><td>Pan bajo, miga apretada</td><td>Le faltó fermentar o amasar</td><td>Esperar más; prueba de la membrana</td></tr>
        <tr><td>Corteza pálida</td><td>Horno frío o poco tiempo</td><td>Precalentar más; termómetro de horno</td></tr>
        <tr><td>Base quemada</td><td>Bandeja muy abajo</td><td>Subir la bandeja; doble bandeja</td></tr>
        <tr><td>Crudo en el centro</td><td>Horno muy fuerte (dora antes de cocinar) o pieza grande</td><td>Bajar 10 a 20 °C y hornear más tiempo</td></tr>
        <tr><td>Sabor ácido o a alcohol</td><td>Fermentación muy larga o mucha levadura</td><td>Menos levadura o menos tiempo</td></tr>
        <tr><td>Grieta irregular al costado</td><td>Le faltó un corte arriba o la última fermentación</td><td>Hacer un corte con un cuchillo bien filoso antes de hornear</td></tr>
      </table>
      <p><strong>El corte</strong> en la superficie del pan (como el del pan francés) le da un lugar por donde abrirse al crecer en el horno. Se hace rápido, con un cuchillo muy filoso o una hoja de afeitar en un mango, a unos 45 grados.</p>
      <p><strong>Cambiá una sola cosa por vez</strong> y anotalo en tu libreta: así sabés qué lo arregló.</p>
      <p>Por ejemplo, el pan de campo de Norma estaba quemado afuera y crudo en el medio. Bajó el horno de 230 °C a 200 °C y lo dejó 10 minutos más: salió parejo.</p>` },
  ],
  practica: [
    "Si tenés un termómetro de horno, medí la temperatura real con la perilla en 200 °C y anotá la diferencia.",
    "Horneá bollos de 100 g de masa, pesá 3 al salir y anotá cuánto peso perdieron en promedio.",
    "La próxima vez que algo salga mal, buscalo en la tabla, cambiá una sola cosa y anotá si se arregló.",
  ],
  recursos: [
    { t: "King Arthur Baking: el porcentaje del panadero (en inglés)", url: "https://www.kingarthurbaking.com/pro/reference/bakers-percentage" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "INTI: Instituto Nacional de Tecnología Industrial (asistencia a productores)", url: "https://www.argentina.gob.ar/inti" },
  ],
  quiz: [
    { q: "Si vas a hornear bollos, ¿cuándo prendés el horno?", opciones: ["Cuando metés los bollos","5 minutos antes","20 a 30 minutos antes, para precalentar","A mitad de la fermentación y lo apagás"], correcta: 2, explicacion: "El pan necesita calor fuerte desde el principio. Prenderlo al meter el pan tienta por ahorrar gas, pero sale pálido y bajo." },
    { q: "Tu horno no tiene números en la perilla. ¿Qué te ayuda?", opciones: ["Un termómetro de horno","Calcular por el ruido","Poner la mano adentro","Hornear siempre al máximo"], correcta: 0, explicacion: "El termómetro dice la temperatura real. La mano tienta, pero te quemás y no es precisa." },
    { q: "¿En qué parte del horno ponés la bandeja?", opciones: ["Abajo de todo","Arriba de todo","En el piso del horno","En el medio"], correcta: 3, explicacion: "En el medio el calor es más parejo. Abajo tienta para que se cocine más rápido, pero se quema la base." },
    { q: "Querés corteza crocante y brillante en el pan francés. ¿Qué agregás?", opciones: ["Más sal","Vapor en los primeros minutos, con cuidado","Abrir la puerta cada 2 minutos","Aceite arriba"], correcta: 1, explicacion: "El vapor ayuda al crecimiento y a la corteza. Abrir la puerta tienta para controlar, pero se escapa el calor." },
    { q: "Golpeás la base de un pan y suena macizo, no hueco. ¿Qué hacés?", opciones: ["Lo sacás igual","Lo cortás para ver","Lo dejás unos minutos más","Le subís al máximo"], correcta: 2, explicacion: "Todavía le falta cocción. Cortarlo tienta para mirar, pero se arruina la pieza." },
    { q: "Si clavás un termómetro en el centro de un pan, ¿qué temperatura indica que está cocido?", opciones: ["Más de 90 °C","50 °C","70 °C","200 °C"], correcta: 0, explicacion: "Por dentro tiene que pasar los 90 °C. 200 °C tienta porque es la del horno, pero el interior no llega a eso." },
    { q: "Si los vecinos llegan en un rato y el pan está tibio, ¿lo embolsás?", opciones: ["Sí, así llega calentito","Sí, con la bolsa abierta","Sí, si es de plástico grueso","No: lo dejás enfriar, porque embolsado tibio se pone gomoso y crían hongos"], correcta: 3, explicacion: "El vapor se condensa en la bolsa. \"Llega calentito\" tienta, pero al día siguiente está gomoso." },
    { q: "Si sacás el pan del horno, ¿dónde lo apoyás?", opciones: ["Sobre la mesada","Sobre una rejilla","En una bolsa cerrada","Dentro de una olla tapada"], correcta: 1, explicacion: "La rejilla deja pasar el aire por abajo. La mesada tienta por cómoda, pero la base se humedece." },
    { q: "Tu pan de campo está quemado afuera y crudo adentro. ¿Qué cambiás?", opciones: ["Subís el horno","Lo horneás menos tiempo","Bajás 10 a 20 °C y horneás más tiempo","Le ponés más levadura"], correcta: 2, explicacion: "Con mucho calor se dora antes de cocinarse adentro. Subir el horno tienta para \"terminarlo\", pero empeora." },
    { q: "Tu pan sale chato y desparramado. ¿Cuál es la causa más probable?", opciones: ["Se pasó de fermentación o le faltó tensión","Le faltó sal","El horno estaba muy fuerte","Tenía mucha harina"], correcta: 0, explicacion: "Es lo que muestra la tabla. La sal tienta, pero no es la causa típica." },
    { q: "El pan tiene sabor a alcohol. ¿Qué cambiás?", opciones: ["Más levadura","Más horno","Más agua","Menos levadura o menos tiempo de fermentación"], correcta: 3, explicacion: "Fermentó de más. Más levadura tienta, pero agrava el problema." },
    { q: "El pan se abre en una grieta fea al costado. ¿Qué hacés la próxima?", opciones: ["Hornear más frío","Un corte con un cuchillo bien filoso arriba antes de hornear","Más harina","Pincharlo con un tenedor"], correcta: 1, explicacion: "El corte le da un lugar por donde abrirse. El tenedor tienta, pero no guía la apertura." },
  ],
},
{
  id: "productos",
  icono: "🥖",
  titulo: "Los productos que más se venden",
  nivel: "Intermedio",
  objetivos: [
    "Hacer pan francés y pan de campo con la receta base del curso",
    "Preparar prepizzas parejas para vender",
    "Conocer cómo se hacen las facturas y las medialunas de grasa",
  ],
  lecciones: [
    { titulo: "Pan francés y sus formas", video: {"id":"ST7Jc7Kwq3Y","t":"Por qué el pan francés cambia según la forma (miñón, felipe, flautita) · Marcos Di Cesare (10:48)"}, html: `
      <p class="idea">El <strong>pan francés</strong> es el pan de todos los días en Argentina: harina, agua, sal y levadura. Con la misma masa se hacen distintas formas, y cada una tiene más o menos corteza.</p>
      <table>
        <tr><th>Forma</th><th>Cómo es</th><th>Peso de masa aproximado</th></tr>
        <tr><td>Miñón</td><td>Bollo alargado con un corte</td><td>80 a 100 g</td></tr>
        <tr><td>Flautita</td><td>Fina y larga: mucha corteza</td><td>80 a 100 g</td></tr>
        <tr><td>Felipe</td><td>Dos puntas, con una raya marcada al medio</td><td>80 a 100 g</td></tr>
        <tr><td>Flauta</td><td>Larga, más grande</td><td>200 a 250 g</td></tr>
      </table>
      <pre><code>Receta base (del módulo de porcentajes), para 1.000 g de harina 000:
Agua 600 g · Sal 20 g · Levadura fresca 20 g · Grasa 30 g (opcional)

1. Amasar hasta la prueba de la membrana.
2. Primera fermentación: hasta casi duplicar.
3. Dividir en piezas de 100 g y bollear.
4. Descanso tapado 10 minutos.
5. Formar (alargar enrollando sobre la mesada).
6. Segunda fermentación: hasta la prueba del dedo.
7. Corte y horno a 210-220 °C con vapor, 15 a 20 minutos.</code></pre>
      <p><strong>Más corteza, menos días:</strong> las formas finas son más crocantes, pero se ponen duras antes. El pan francés se vende para el mismo día.</p>
      <p><strong>Lo que sobra:</strong> el pan del día anterior se puede vender como pan rallado (seco al horno y procesado) o como tostadas, con su propio rótulo.</p>
      <p>Por ejemplo, Norma empezó ofreciendo solo miñones. Las vecinas le pidieron flautitas para los sándwiches del colegio, y con la misma masa sumó un producto nuevo.</p>` },
    { titulo: "Prepizzas", video: {"id":"8PLj7tJlrGo","t":"Masa de pizza: receta y secretos para un resultado perfecto · Cocineros Argentinos, Canal Siete (11:35)"}, html: `
      <p class="idea">Las <strong>prepizzas</strong> se venden mucho porque le ahorran trabajo al cliente: llegan precocidas con salsa y solo hay que ponerles queso y terminarlas en el horno.</p>
      <pre><code>Prepizza (receta base con algunos cambios):
Harina 000 1.000 g · Agua 630 g (63%) · Sal 20 g
Levadura fresca 25 g · Aceite 50 g (en lugar de grasa)

1. Amasar y fermentar hasta casi duplicar.
2. Dividir en bollos de 250 a 300 g (para pizzeras de 28 a 30 cm).
3. Pizzeras aceitadas: estirar con la punta de los dedos.
4. Segunda fermentación de 20 a 30 minutos.
5. Salsa de tomate en una capa fina.
6. Precocinar al máximo del horno 8 a 10 minutos:
   la masa tiene que estar cocida pero pálida.
7. Enfriar en rejilla antes de embolsar.</code></pre>
      <table>
        <tr><th>Para vender</th><th>Por qué</th></tr>
        <tr><td>Todas del mismo peso</td><td>El cliente compara: si una es más finita, se queja</td></tr>
        <tr><td>Salsa con la cantidad justa</td><td>Mucha salsa humedece la masa en la bolsa</td></tr>
        <tr><td>Bien frías antes de embolsar</td><td>Si no, se humedecen y crían hongos</td></tr>
        <tr><td>Rótulo con fecha</td><td>Duran poco fuera de la heladera</td></tr>
      </table>
      <p><strong>Conservación:</strong> las prepizzas con salsa duran poco a temperatura ambiente. Indicá que se guardan en la heladera y se consumen pronto, o que se pueden freezar.</p>
      <p>Por ejemplo, Norma vende las prepizzas de a 2 en una bolsa. Al principio las embolsaba tibias y se pegaban entre sí; ahora las deja enfriar una hora y las separa con papel manteca.</p>` },
    { titulo: "Facturas y medialunas de grasa", video: {"id":"ywDTXPJumlc","t":"Cómo se hacen las medialunas de grasa · Cocineros Argentinos (20:01)"}, html: `
      <p class="idea">Las facturas son <strong>masas más ricas</strong> (con azúcar, grasa o manteca, a veces huevo y leche) y muchas son <strong>hojaldradas</strong>: la grasa se pone en capas para que se separen en láminas al hornear.</p>
      <table>
        <tr><th>Producto</th><th>Masa</th><th>Clave</th></tr>
        <tr><td>Medialunas de grasa</td><td>Masa con grasa vacuna y poco azúcar, con capas de grasa</td><td>Grasa fría y firme al laminar</td></tr>
        <tr><td>Medialunas de manteca</td><td>Masa dulce con manteca en capas</td><td>La manteca no se tiene que derretir al estirar</td></tr>
        <tr><td>Bolas de fraile, sacramentos, vigilantes</td><td>Masa dulce (con o sin capas)</td><td>Rellenos con crema o dulce de leche: cuidado con la temperatura</td></tr>
        <tr><td>Bizcochitos de grasa</td><td>Masa firme con grasa, poco agua</td><td>Duran más días: buenos para vender</td></tr>
      </table>
      <p><strong>Laminar</strong> es estirar la masa con la grasa adentro, doblarla y volver a estirarla varias veces, para formar muchas capas finas.</p>
      <p><strong>El frío es tu aliado:</strong> si la grasa o la manteca se ablanda, se mezcla con la masa y se pierden las capas. Entre cada estirado, la masa va a la heladera unos 20 minutos.</p>
      <p><strong>Rellenos con crema pastelera:</strong> como viste en el primer módulo, van a la heladera y se venden en el día. El dulce de leche y el membrillo aguantan mejor fuera de la heladera.</p>
      <p><strong>Empezá por lo más simple:</strong> los bizcochitos de grasa y las medialunas de grasa son más fáciles que las de manteca y se conservan más. Las facturas más difíciles pueden venir después, con práctica.</p>
      <p>Por ejemplo, Norma sumó bizcochitos de grasa: duran 5 días en un frasco cerrado, así que los hace el viernes y vende lo que queda también el domingo.</p>` },
  ],
  practica: [
    "Hacé pan francés con la receta base en dos formas distintas y anotá cuál quedó más crocante.",
    "Hacé 4 prepizzas del mismo peso y anotá cuánto pesó cada bollo y cuánto tardaron en el horno.",
    "Hacé una tanda de bizcochitos de grasa, guardalos en un frasco y anotá cuántos días se mantienen crocantes.",
  ],
  recursos: [
    { t: "King Arthur Baking: guía de masa madre (en inglés)", url: "https://www.kingarthurbaking.com/learn/guides/sourdough" },
    { t: "ANMAT: Código Alimentario Argentino (el capítulo IX trata harinas y panes)", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "INTI: Instituto Nacional de Tecnología Industrial (asistencia a productores)", url: "https://www.argentina.gob.ar/inti" },
  ],
  quiz: [
    { q: "Si una vecina quiere pan con mucha corteza para sándwiches, ¿qué forma le ofrecés?", opciones: ["Pan de campo grande","Bollo redondo gordo","Flautita","Pan lactal"], correcta: 2, explicacion: "Las formas finas tienen más corteza. El pan de campo tienta por rico, pero tiene más miga." },
    { q: "Hacés pan francés para vender. ¿Para cuándo es?", opciones: ["Para el mismo día","Para toda la semana","Para el mes","Para freezar siempre"], correcta: 0, explicacion: "Las formas finas se ponen duras rápido. \"Toda la semana\" tienta para producir de una vez, pero el cliente se lleva pan duro." },
    { q: "Si te sobró pan francés del sábado, ¿qué podés hacer?", opciones: ["Venderlo como recién hecho el domingo","Mezclarlo con el pan nuevo","Mojarlo para que parezca fresco","Pan rallado o tostadas, con su rótulo"], correcta: 3, explicacion: "Se aprovecha sin engañar. Venderlo como recién hecho tienta, pero el cliente lo nota y pierde confianza." },
    { q: "Para prepizzas de 28 a 30 cm, ¿cuánta masa por bollo?", opciones: ["50 g","250 a 300 g","100 g","1 kg"], correcta: 1, explicacion: "Es el rango de la receta. 100 g tienta por el pan, pero la prepizza sale finísima." },
    { q: "Si precocinás las prepizzas, ¿cómo tienen que salir?", opciones: ["Bien doradas","Crudas en el centro","Cocidas, pero pálidas, para que el cliente las termine","Con el queso ya derretido"], correcta: 2, explicacion: "Se terminan en la casa del cliente. Bien doradas tienta por lindas, pero se secan al terminarlas." },
    { q: "Tus prepizzas se pegan entre sí en la bolsa. ¿Qué cambiás?", opciones: ["Las dejás enfriar bien y las separás con papel manteca","Les ponés más salsa","Las embolsás más calientes","Las apretás en la bolsa"], correcta: 0, explicacion: "Tibias se humedecen y se pegan. Más salsa tienta para que no se seque, pero las humedece más." },
    { q: "Si le ponés mucha salsa a la prepizza, ¿qué pasa en la bolsa?", opciones: ["Dura más","Queda más crocante","Nada","La masa se humedece"], correcta: 3, explicacion: "El exceso de salsa moja la masa. \"Dura más\" tienta, pero al revés: se echa a perder antes." },
    { q: "¿Qué es laminar una masa?", opciones: ["Cortarla en láminas","Estirarla con grasa adentro, doblarla y repetir para hacer capas","Hornearla en una lámina de metal","Amasarla con más fuerza"], correcta: 1, explicacion: "Así se forman las capas de las medialunas. Cortarla en láminas tienta por la palabra, pero no es eso." },
    { q: "Mientras laminás, la manteca se ablanda. ¿Qué hacés?", opciones: ["Seguís estirando más rápido","Agregás harina","Llevás la masa a la heladera unos 20 minutos","Subís la temperatura de la cocina"], correcta: 2, explicacion: "Fría, la manteca mantiene las capas. Seguir rápido tienta, pero se mezcla con la masa." },
    { q: "Si vendés bolas de fraile con crema pastelera, ¿cómo las manejás?", opciones: ["En la heladera y para vender en el día","Al sol en la vidriera","Toda la semana fuera de la heladera","Igual que los bizcochitos"], correcta: 0, explicacion: "La crema con huevo y leche se cuida del calor. Como los bizcochitos tienta, pero esos no llevan relleno." },
    { q: "Si recién empezás con las facturas, ¿por dónde conviene arrancar?", opciones: ["Por medialunas de manteca","Por las más difíciles","Por todas juntas","Por bizcochitos o medialunas de grasa"], correcta: 3, explicacion: "Son más fáciles y se conservan más. Las de manteca tientan por populares, pero son las más difíciles." },
    { q: "Querés algo que se pueda vender varios días. ¿Qué elegís?", opciones: ["Pan francés","Bizcochitos de grasa en un frasco cerrado","Prepizzas con salsa sin heladera","Facturas con crema"], correcta: 1, explicacion: "Duran varios días crocantes. El pan francés tienta por ser lo que más hacés, pero dura un día." },
  ],
},
{
  id: "vender",
  icono: "💰",
  titulo: "Costos, precio y venta",
  nivel: "Avanzado",
  objetivos: [
    "Calcular el costo de un kilo de pan con todos sus gastos",
    "Poner un precio que cubra costos y tu trabajo",
    "Organizar pedidos, rótulos y entregas para vender sin perder plata ni clientes",
  ],
  lecciones: [
    { titulo: "Cuánto te cuesta un kilo de pan", html: `
      <p class="idea">Para saber si ganás plata, primero calculá el <strong>costo</strong>: todo lo que gastás para hacer una tanda, no solo la harina.</p>
      <table>
        <tr><th>Gasto (precios de ejemplo, usá los tuyos)</th><th>Para una tanda de 1 kg de harina</th></tr>
        <tr><td>Harina 000, 1 kg</td><td>$1.200</td></tr>
        <tr><td>Sal, 20 g</td><td>$10</td></tr>
        <tr><td>Levadura fresca, 20 g</td><td>$150</td></tr>
        <tr><td>Grasa, 30 g</td><td>$90</td></tr>
        <tr><td>Gas o luz del horno (aproximado)</td><td>$600</td></tr>
        <tr><td>Bolsas y etiquetas</td><td>$200</td></tr>
        <tr><td><strong>Total de la tanda</strong></td><td><strong>$2.250</strong></td></tr>
      </table>
      <pre><code>Con 1 kg de harina salen 1.670 g de masa.
Al hornear se pierde agua: quedan unos 1.500 g de pan (1,5 kg).

Costo por kilo de pan = $2.250 ÷ 1,5 = $1.500</code></pre>
      <p>Los <strong>costos directos</strong> son los ingredientes y los envases: cambian según cuánto producís. El <strong>gas o la luz</strong> se calcula aproximado; si no sabés cuánto gasta tu horno, mirá la diferencia en la factura en un mes que horneaste mucho.</p>
      <p><strong>Actualizá los precios seguido:</strong> la harina y el gas cambian de precio. Una planilla con los costos te deja actualizarlos en un minuto.</p>
      <p><strong>Lo que tiraste también cuenta:</strong> si de cada tanda se pierde un 10% (pan que no se vendió), el costo real del pan vendido es más alto.</p>
      <p>Para profundizar en costos fijos, variables y punto de equilibrio está el curso de <strong>Costos y precios</strong> de este sitio.</p>
      <p>Por ejemplo, Norma creía que el kilo de pan le costaba $1.200 porque solo contaba la harina. Con la tabla completa le dio $1.500, y entendió por qué no le quedaba nada.</p>` },
    { titulo: "Poner el precio", html: `
      <p class="idea">El precio tiene que cubrir el <strong>costo</strong>, pagar <strong>tu trabajo</strong> y estar cerca de lo que cobran en tu zona. Si no cubre las dos primeras cosas, estás regalando tu tiempo.</p>
      <pre><code>Tu trabajo también vale:
Una tanda de 1 kg de harina te lleva unas 3 horas en total
(amasado, fermentación vigilada, formado, horno, limpieza).

Precio por kilo = costo + tu ganancia
Si querés ganar el doble del costo:
$1.500 (costo) + $1.500 (ganancia) = $3.000 por kilo

¿Cuánto ganás por hora?
1,5 kg × $1.500 de ganancia = $2.250 por tanda
$2.250 ÷ 3 horas = $750 por hora</code></pre>
      <table>
        <tr><th>Compará con...</th><th>Para qué</th></tr>
        <tr><td>Panaderías del barrio</td><td>Saber qué precio espera la gente</td></tr>
        <tr><td>Otros emprendimientos caseros</td><td>Ver qué ofrecen distinto</td></tr>
        <tr><td>Tu ganancia por hora</td><td>Saber si vale la pena tu tiempo</td></tr>
      </table>
      <p><strong>Si el precio que necesitás es más alto que el del barrio:</strong> buscá producir más por tanda (el horno lleno gasta casi lo mismo que medio vacío), vendé productos con más margen (prepizzas, bizcochitos) o diferenciate (pan de campo, integral, entrega a domicilio).</p>
      <p><strong>El margen</strong> es lo que te queda de cada venta después de pagar el costo. Productos como las prepizzas suelen tener más margen que el pan francés.</p>
      <p>Por ejemplo, Norma calculó que con el pan francés ganaba muy poco por hora. Sumó prepizzas y bizcochitos, que tienen más margen, y con el mismo horno lleno subió su ganancia del fin de semana.</p>` },
    { titulo: "Pedidos, rótulos y entregas", html: `
      <p class="idea">Vender por encargo te ahorra tirar pan: <strong>producís lo que ya vendiste</strong>. Con una lista de pedidos, un rótulo claro y horarios de entrega, todo es más fácil.</p>
      <pre><code>Mensaje para tomar pedidos (WhatsApp, jueves):
"¡Hola! Este sábado horneo:
- Pan francés (miñón o flautita) · $3.000 el kilo
- Prepizzas x 2 · $____
- Bizcochitos de grasa x 250 g · $____
Pedidos hasta el viernes a las 20 h.
Retiro sábado de 10 a 12 h o envío en el barrio."</code></pre>
      <table>
        <tr><th>En el rótulo o la etiqueta</th><th>Por qué</th></tr>
        <tr><td>Nombre del producto</td><td>Qué es</td></tr>
        <tr><td>Ingredientes, avisando los alérgenos (huevo, leche, sésamo...)</td><td>Para personas con alergias</td></tr>
        <tr><td>Fecha de elaboración y "consumir antes de"</td><td>Para que se consuma seguro</td></tr>
        <tr><td>Cómo conservar (heladera, freezer)</td><td>Sobre todo prepizzas y rellenos</td></tr>
        <tr><td>Tu nombre y contacto</td><td>Para que te vuelvan a encargar</td></tr>
      </table>
      <p><strong>El rótulo de productos envasados tiene reglas</strong> en el Código Alimentario Argentino. Preguntá en bromatología de tu municipio qué te corresponde según cómo vendés.</p>
      <p><strong>Plata y alimentos no se mezclan:</strong> cobrá con transferencia o QR, o usá una pinza o un guante para el pan y no toques la plata con la misma mano.</p>
      <p>Para vender por redes y WhatsApp con fotos, está el curso <strong>Vender por internet</strong> de este sitio.</p>
      <p>Por ejemplo, Norma tiraba un 15% del pan cada sábado. Empezó a tomar pedidos hasta el viernes a la noche y a hornear solo eso más 5 bollos extra: dejó de tirar.</p>` },
  ],
  practica: [
    "Armá la tabla de costos de tu receta con los precios de tu zona y anotá el costo por kilo de pan.",
    "Calculá tu ganancia por hora con el precio que pensás cobrar y anotá si te parece justa.",
    "Escribí tu mensaje de pedidos y una etiqueta para un producto con los 5 datos de la tabla.",
    "Preguntá el precio del kilo de pan en 2 panaderías de tu barrio y anotá cómo se compara con el tuyo.",
  ],
  recursos: [
    { t: "Curso de este sitio: Costos y precios para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Curso de este sitio: Vender por internet", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
    { t: "ANMAT: Código Alimentario Argentino (el capítulo IX trata harinas y panes)", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
  ],
  quiz: [
    { q: "Si calculás el costo del pan contando solo la harina, ¿qué problema hay?", opciones: ["Ninguno, la harina es lo principal","Que la harina está cara","Faltan la levadura, la grasa, el gas, las bolsas y lo que se tira","Que no contaste la sal solamente"], correcta: 2, explicacion: "Todos los gastos suman. \"La harina es lo principal\" tienta, pero el resto puede ser casi la mitad." },
    { q: "Una tanda te cuesta $2.250 y da 1,5 kg de pan. ¿Cuánto cuesta el kilo?", opciones: ["$1.500","$2.250","$3.375","$750"], correcta: 0, explicacion: "$2.250 ÷ 1,5 = $1.500. $3.375 tienta si multiplicás en lugar de dividir." },
    { q: "Con 1 kg de harina hacés 1.670 g de masa. ¿Cuánto pan tenés después del horno?", opciones: ["1.670 g","Más de 1.670 g","1.000 g","Menos: unos 1.500 g, porque se evapora agua"], correcta: 3, explicacion: "El pan pierde agua al hornearse. 1.670 tienta, pero ese es el peso de la masa cruda." },
    { q: "La harina subió de precio. ¿Qué hacés con tu costo?", opciones: ["Seguís con el costo viejo","Lo actualizás en tu planilla","Usás menos harina sin decir","Esperás un año"], correcta: 1, explicacion: "Los precios cambian seguido. Usar menos harina tienta, pero cambia el producto y engaña." },
    { q: "De cada tanda tirás el 10% porque no se vende. ¿Qué pasa con tu costo real?", opciones: ["Es más bajo","No cambia","Es más alto: lo que tirás también lo pagaste","Se compensa solo"], correcta: 2, explicacion: "Pagaste ingredientes que no vendiste. \"No cambia\" tienta, pero ese pan también costó." },
    { q: "Tu kilo de pan cuesta $1.500 y querés ganar lo mismo que el costo. ¿Qué precio ponés?", opciones: ["$3.000","$1.500","$2.250","$1.501"], correcta: 0, explicacion: "Costo más ganancia: 1.500 + 1.500. $1.500 tienta, pero no ganarías nada." },
    { q: "Ganás $2.250 por tanda y tardás 3 horas. ¿Cuánto ganás por hora?", opciones: ["$2.250","$6.750","$225","$750"], correcta: 3, explicacion: "$2.250 ÷ 3 = $750. $6.750 tienta si multiplicás, pero se divide." },
    { q: "Si el precio que necesitás es más alto que el de la panadería del barrio, ¿qué podés hacer?", opciones: ["Bajar el precio y perder plata","Llenar el horno, sumar productos con más margen o diferenciarte","Usar ingredientes vencidos","Dejar de pagar tu trabajo"], correcta: 1, explicacion: "Hay formas de mejorar sin perder. Bajar el precio tienta para competir, pero trabajás gratis." },
    { q: "¿Qué es el margen?", opciones: ["El total que cobrás","El costo de la harina","Lo que te queda de cada venta después de pagar el costo","El borde de la bandeja"], correcta: 2, explicacion: "Es la ganancia por producto. El total cobrado tienta, pero incluye el costo." },
    { q: "Cada sábado tirás pan que no se vende. ¿Qué cambiás?", opciones: ["Tomás pedidos antes y horneás eso más unos pocos extra","Horneás el doble","Bajás el precio a la tarde siempre","Lo guardás para vender el miércoles como fresco"], correcta: 0, explicacion: "Por encargo producís lo que ya vendiste. Venderlo después como fresco tienta, pero engaña." },
    { q: "Tus prepizzas llevan queso en la salsa. ¿Qué tiene que decir la etiqueta?", opciones: ["Solo el precio","Solo tu nombre","Nada, se ve que es prepizza","Que contienen leche, cómo conservarlas y hasta cuándo consumirlas"], correcta: 3, explicacion: "La leche es un alérgeno y se conservan poco. \"Se ve\" tienta, pero los ingredientes no se ven." },
    { q: "Si cobrás en efectivo y después agarrás el pan, ¿qué conviene?", opciones: ["Limpiarte las manos en el delantal","Usar una pinza o un guante para el pan, o cobrar por transferencia o QR","Nada, la plata está limpia","Soplar las manos"], correcta: 1, explicacion: "La plata pasa por muchas manos. \"Está limpia\" tienta, pero no lo está." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu primer fin de semana de ventas",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de producción con pedidos, cantidades y horarios",
    "Producir, vender y registrar los resultados de un fin de semana",
    "Evaluar tu emprendimiento con una rúbrica y decidir qué mejorar",
  ],
  lecciones: [
    { titulo: "El plan de producción", html: `
      <p class="idea">Un fin de semana de ventas empieza el <strong>jueves</strong>: tomás pedidos, calculás cuánto producir, comprás y organizás los horarios hacia atrás desde la hora de entrega.</p>
      <pre><code>Plan de Norma (entrega sábado 10 h):
Pedidos: 30 bollos de pan francés (100 g), 10 prepizzas (280 g)

Masa de pan:   30 × 100 = 3.000 g  + 5 bollos extra = 3.500 g
Harina:        3.500 ÷ 167 × 100 ≈ 2.096 g → 2.100 g
Masa prepizza: 10 × 280 = 2.800 g
Harina:        2.800 ÷ 172,5 × 100 ≈ 1.623 g → 1.650 g
(la receta de prepizza suma 172,5%: 100 + 63 + 2 + 2,5 + 5)

Horario hacia atrás:
10:00  Entrega
09:00  Sale la última bandeja; todo enfriando en rejillas
07:30  Empieza a hornear (horno precalentado desde las 07:00)
06:30  Formado y segunda fermentación
05:15  Amasado y primera fermentación</code></pre>
      <table>
        <tr><th>Día</th><th>Tarea</th></tr>
        <tr><td>Jueves</td><td>Mensaje de pedidos</td></tr>
        <tr><td>Viernes</td><td>Cierre de pedidos, compras, limpieza, salsa de las prepizzas a la heladera</td></tr>
        <tr><td>Sábado</td><td>Producción, embolsado y rótulos, entrega y cobro</td></tr>
      </table>
      <p><strong>El horno manda:</strong> contá cuántas bandejas entran por vez y cuánto tarda cada una. Si no te alcanza el tiempo, adelantá la hora o fermentá en la heladera desde la noche anterior.</p>
      <p>Por ejemplo, el primer sábado Norma no calculó las bandejas y entregó a las 11:30. Ahora arma el horario hacia atrás y entrega a horario.</p>` },
    { titulo: "Producir y registrar", html: `
      <p class="idea">El día de producción, seguí tu plan y <strong>anotá todo</strong>: lo que hiciste, lo que vendiste, lo que sobró y lo que salió mal. Esos números son la base para mejorar.</p>
      <table>
        <tr><th>Registro del fin de semana</th><th>Ejemplo de Norma</th></tr>
        <tr><td>Producido</td><td>35 bollos y 10 prepizzas</td></tr>
        <tr><td>Vendido</td><td>33 bollos y 10 prepizzas</td></tr>
        <tr><td>Sobró o se tiró</td><td>2 bollos (para pan rallado)</td></tr>
        <tr><td>Costo total</td><td>Según tu tabla de costos</td></tr>
        <tr><td>Cobrado</td><td>Sumá cada venta</td></tr>
        <tr><td>Horas trabajadas</td><td>De la compra a la última entrega</td></tr>
        <tr><td>Problemas</td><td>Una bandeja se doró de más: girarla a mitad de cocción</td></tr>
        <tr><td>Comentarios de clientes</td><td>"Más flautitas"; "las prepizzas, riquísimas"</td></tr>
      </table>
      <pre><code>Control de higiene del día:
[ ] Lista de "antes de amasar" completa
[ ] Rellenos y salsa en la heladera hasta el último momento
[ ] Todo frío antes de embolsar
[ ] Rótulos con ingredientes, alérgenos y fecha
[ ] Plata y pan separados</code></pre>
      <p><strong>Preguntá a tus clientes:</strong> un mensaje corto el domingo ("¿Qué te pareció? ¿Qué te gustaría la próxima?") te da ideas y hace que vuelvan.</p>
      <p><strong>Ganancia del fin de semana</strong> = lo cobrado − el costo total. Dividila por las horas trabajadas y compará con el módulo de precios.</p>
      <p>Por ejemplo, Norma descubrió en el registro que vendía todas las prepizzas y siempre le sobraba pan. El sábado siguiente hizo 5 prepizzas más y 5 bollos menos.</p>` },
    { titulo: "Evaluá con la rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala después de tu primer fin de semana.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Higiene y seguridad</td><td>Control del día completo y carnet en trámite o aprobado</td><td>Falta un punto del control</td><td>Faltan varios</td></tr>
        <tr><td>Plan</td><td>Cantidades calculadas con porcentajes y horario hacia atrás</td><td>Cantidades a ojo</td><td>Sin plan</td></tr>
        <tr><td>Calidad</td><td>Piezas parejas en peso, bien cocidas</td><td>Algunas desparejas</td><td>Problemas que el cliente notó</td></tr>
        <tr><td>Costos y precio</td><td>Costo completo y ganancia por hora calculada</td><td>Costo solo de ingredientes</td><td>Sin calcular</td></tr>
        <tr><td>Venta</td><td>Pedidos anticipados, rótulos completos, entrega a horario</td><td>Falta una de las tres</td><td>Faltan dos o más</td></tr>
        <tr><td>Registro</td><td>Producido, vendido, sobrante, problemas y comentarios</td><td>Registro incompleto</td><td>Sin registro</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → listo para seguir creciendo
7 a 9   → mejorá el criterio más bajo el próximo fin de semana
0 a 6   → repasá los módulos de seguridad, porcentajes y costos</code></pre>
      <p><strong>Crecer de a poco:</strong> antes de comprar una amasadora o un horno más grande, asegurate de que tu ganancia por hora sea buena y de tener los papeles en regla.</p>
      <p>Por ejemplo, Norma sacó 9 de 12 el primer fin de semana: perdió puntos en costos (contaba solo ingredientes) y en el plan (entregó tarde). Al mes ya sacaba 12 y tenía clientes fijos.</p>` },
  ],
  practica: [
    "Armá el plan de producción de un fin de semana real o de prueba con cantidades calculadas y horario hacia atrás. Anotá a qué hora tenés que empezar.",
    "Producí y completá el registro del fin de semana con los 8 datos de la tabla.",
    "Calculá la ganancia del fin de semana y la ganancia por hora, y anotá ambas.",
    "Puntuá tu fin de semana con la rúbrica y anotá tu total de 12 y qué vas a mejorar.",
  ],
  recursos: [
    { t: "Curso de este sitio: Costos y precios para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Curso de este sitio: Vender por internet", url: "https://pkeios.github.io/EiaLearning/vender-online/" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
  ],
  quiz: [
    { q: "Entregás el sábado a las 10. ¿Cómo armás el horario?", opciones: ["Empezás cuando te levantes","Hacia adelante y ves a qué hora termina","Hacia atrás desde la hora de entrega","Sin horario"], correcta: 2, explicacion: "Así sabés a qué hora empezar. Hacia adelante tienta, pero podés terminar tarde." },
    { q: "Tenés 30 pedidos de bollos de 100 g y querés 5 extra. ¿Cuánta masa necesitás?", opciones: ["3.500 g","3.000 g","3.050 g","350 g"], correcta: 0, explicacion: "35 × 100 = 3.500. 3.000 tienta, pero no contaste los extras." },
    { q: "La receta de prepizza suma 172,5%. ¿Por qué no 167% como el pan?", opciones: ["Porque está mal calculada","Porque tiene menos harina","Porque el porcentaje depende del horno","Porque lleva más agua, más levadura y aceite"], correcta: 3, explicacion: "Cada receta suma distinto. \"Mal calculada\" tienta, pero 100 + 63 + 2 + 2,5 + 5 da 172,5." },
    { q: "No te alcanzan las bandejas del horno para llegar a horario. ¿Qué hacés?", opciones: ["Horneás todo junto amontonado","Empezás antes o fermentás en la heladera desde la noche anterior","Subís el horno al máximo para ir más rápido","Entregás tarde sin avisar"], correcta: 1, explicacion: "Más tiempo o fermentación lenta resuelven. Subir el horno tienta, pero se quema afuera y queda crudo adentro." },
    { q: "¿Cuándo preparás la salsa de las prepizzas?", opciones: ["El jueves y la dejás afuera","El sábado al mediodía","El viernes, y la guardás en la heladera","Nunca, la compra el cliente"], correcta: 2, explicacion: "Adelanta trabajo y se conserva en frío. Dejarla afuera tienta, pero se echa a perder." },
    { q: "En tu registro anotás lo producido y lo vendido. ¿Para qué?", opciones: ["Para ajustar cuánto hacer la próxima vez","Para nada","Para mostrarlo en redes","Para cobrar más"], correcta: 0, explicacion: "Los números muestran qué se vende y qué sobra. \"Para nada\" tienta por trabajo extra, pero es la base para mejorar." },
    { q: "Siempre se venden todas las prepizzas y sobra pan. ¿Qué cambiás?", opciones: ["Más bollos","Lo mismo","Dejás las prepizzas","Más prepizzas y menos bollos"], correcta: 3, explicacion: "El registro te lo dice. Hacer más bollos tienta por costumbre, pero sobrarían más." },
    { q: "El domingo querés saber qué les pareció a tus clientes. ¿Qué hacés?", opciones: ["Esperás a que te digan","Les mandás un mensaje corto preguntando","Leés la mente","No preguntás"], correcta: 1, explicacion: "Preguntar da ideas y fideliza. Esperar tienta, pero la mayoría no avisa." },
    { q: "Cobraste $60.000 y el costo total fue $30.000. ¿Cuánto ganaste?", opciones: ["$60.000","$90.000","$30.000","$2"], correcta: 2, explicacion: "Ganancia = cobrado − costo. $60.000 tienta, pero eso es lo cobrado." },
    { q: "Si calculaste las cantidades a ojo, ¿cuántos puntos sacás en \"Plan\"?", opciones: ["1","2","0","12"], correcta: 0, explicacion: "A ojo es 1 punto. 2 tienta porque igual hiciste un plan, pero faltan los porcentajes." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Abandonás","Comprás un horno grande","Subís los precios al doble","Mejorás el criterio más bajo el próximo fin de semana"], correcta: 3, explicacion: "De 7 a 9, falta pulir. El horno grande tienta, pero primero hay que mejorar lo básico." },
    { q: "Te va bien y querés comprar una amasadora grande. ¿Qué revisás antes?", opciones: ["Solo el color","Que tu ganancia por hora sea buena y tener los papeles en regla","Nada, si vendés es que conviene","Que sea la más barata"], correcta: 1, explicacion: "Crecer de a poco evita deudas. \"Si vendés conviene\" tienta, pero podés vender mucho y ganar poco." },
  ],
},
];
