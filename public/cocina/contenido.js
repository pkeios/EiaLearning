// Temario del curso "Cocina básica: comer bien gastando poco". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js cocina y node tools/metodologia.js cocina
window.TEMARIO = [
{
  id: "seguridad",
  icono: "🧼",
  titulo: "Cocinar seguro: higiene y cuidados",
  nivel: "Básico",
  objetivos: [
    "Aplicar las cinco claves de la OMS para que la comida no te enferme",
    "Respetar las temperaturas y los tiempos seguros de la comida",
    "Cuidarte del cuchillo, el fuego, el aceite caliente y el gas",
  ],
  lecciones: [
    { titulo: "Las cinco claves para que la comida no te enferme", video: {"id":"ULZSfFVpLtQ","t":"Las cinco claves para la inocuidad de los alimentos · OMS (3:39)"}, html: `<p>En todo el curso acompañamos a <strong>Julián</strong>, que tiene 23 años y se mudó solo a Córdoba para estudiar. Nunca había cocinado: comía delivery y se le iba la plata. Su meta es comer bien con lo que tiene.</p>
      <p class="idea">La comida mal manejada puede enfermarte. La Organización Mundial de la Salud (OMS) resume cómo evitarlo en <strong>cinco claves</strong> que sirven en cualquier cocina.</p>
      <table>
        <tr><th>Clave</th><th>Qué hacés</th></tr>
        <tr><td>1. Mantener la limpieza</td><td>Lavarte las manos antes de cocinar, durante y después de ir al baño; limpiar mesada, tabla y utensilios</td></tr>
        <tr><td>2. Separar crudos y cocidos</td><td>Otra tabla (o lavar bien la misma) para la carne cruda; no apoyar lo cocido donde estuvo lo crudo</td></tr>
        <tr><td>3. Cocinar completamente</td><td>Carnes, pollo, huevos y pescado bien cocidos; sopas y guisos que hiervan</td></tr>
        <tr><td>4. Mantener temperaturas seguras</td><td>Lo cocido, a la heladera rápido; lo caliente, bien caliente</td></tr>
        <tr><td>5. Agua y materias primas seguras</td><td>Agua potable, verduras lavadas, productos sin vencer y con envase sano</td></tr>
      </table>
      <p><strong>Inocuidad</strong> quiere decir que un alimento no hace daño a quien lo come.</p>
      <p>Las <strong>ETA</strong> (enfermedades transmitidas por alimentos) son las que te agarrás por comer algo contaminado con microbios o sus toxinas. Dan vómitos, dolor de panza, diarrea y fiebre, y son más graves en chicos, personas mayores y embarazadas.</p>
      <p><strong>Contaminación cruzada</strong> es cuando los microbios pasan de un alimento crudo a uno listo para comer, por ejemplo con el mismo cuchillo.</p>
      <p>Por ejemplo, Julián cortaba el pollo crudo y después, en la misma tabla sin lavar, el tomate de la ensalada. Así pasan los microbios del pollo al tomate, que no se cocina. Ahora usa una tabla para cada cosa.</p>` },
    { titulo: "Temperaturas y tiempos seguros", html: `
      <p class="idea">Los microbios se multiplican rápido entre <strong>5 °C y 60 °C</strong>. Por eso la comida tiene que estar <strong>fría en la heladera o bien caliente</strong>, y pasar el menor tiempo posible en el medio.</p>
      <pre><code>  más de 60 °C   comida caliente lista para servir
  ───────────── ← zona de peligro: los microbios crecen rápido
  5 °C a 60 °C   (no dejar la comida acá mucho tiempo)
  ─────────────
  menos de 5 °C  heladera</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Lo cocido no queda más de 2 horas afuera (1 hora en días de calor)</td><td>Pasado ese tiempo pueden haber crecido muchos microbios</td></tr>
        <tr><td>Sopas y guisos tienen que hervir</td><td>Llegar a 70 °C o más mata a la mayoría</td></tr>
        <tr><td>Descongelar en la heladera, nunca en la mesada</td><td>Afuera, la parte de afuera se calienta mientras el centro sigue helado</td></tr>
        <tr><td>No volver a congelar algo descongelado sin cocinarlo antes</td><td>Cada descongelada da tiempo a los microbios</td></tr>
        <tr><td>Arroz y fideos cocidos: a la heladera enseguida</td><td>El arroz cocido dejado afuera es un caso común de ETA</td></tr>
      </table>
      <p>Una <strong>zona de peligro</strong> es el rango de temperatura donde los microbios crecen más rápido.</p>
      <p><strong>Truco para enfriar rápido:</strong> repartí la olla grande en recipientes chicos y bajos. Así se enfría antes y entra a la heladera más rápido.</p>
      <p><strong>Ante la duda, no lo comas:</strong> si algo huele raro, tiene moho o el envase está hinchado, va a la basura. No alcanza con sacar la parte fea.</p>
      <p>Por ejemplo, Julián dejó una olla de arroz en la cocina toda la noche "porque estaba caliente". A la mañana la tiró: habían pasado unas 10 horas en la zona de peligro.</p>` },
    { titulo: "Cuidarte en la cocina: cuchillo, fuego, aceite y gas", html: `
      <p class="idea">En la cocina hay riesgos además de la comida: <strong>cortes, quemaduras, incendios y gas</strong>. Unos pocos hábitos evitan casi todos los accidentes.</p>
      <table>
        <tr><th>Riesgo</th><th>Qué hacer</th><th>Qué no hacer</th></tr>
        <tr><td>Cuchillo</td><td>Tabla firme (con un repasador húmedo abajo), cuchillo afilado, dedos doblados</td><td>Cortar en la mano, agarrar un cuchillo que se cae</td></tr>
        <tr><td>Ollas y sartenes</td><td>Mangos hacia adentro, agarraderas secas</td><td>Dejar mangos hacia afuera donde hay chicos</td></tr>
        <tr><td>Aceite caliente</td><td>Secar los alimentos antes, bajar el fuego si humea, tener una tapa a mano</td><td>Tirar agua al aceite encendido (explota)</td></tr>
        <tr><td>Fuego con aceite</td><td>Apagar la hornalla y tapar la sartén</td><td>Moverla con el fuego encendido</td></tr>
        <tr><td>Gas</td><td>Ventilar, llama azul, rejillas libres</td><td>Usar el horno para calefaccionar, tapar rejillas</td></tr>
      </table>
      <p><strong>Si huele a gas:</strong> no prendas fuego ni luces, no uses el celular adentro, abrí puertas y ventanas, cerrá la llave de paso y llamá a la distribuidora desde afuera.</p>
      <p><strong>Monóxido de carbono:</strong> es un gas que no tiene olor ni color y sale de artefactos que funcionan mal. Si la llama es amarilla o anaranjada, el artefacto tiene que revisarlo un gasista matriculado. Conectar o arreglar el gas lo hace solo un profesional matriculado.</p>
      <p><strong>Quemaduras leves:</strong> agua fría (no helada) de la canilla unos 20 minutos, sin hielo, manteca ni pasta de dientes. Si es grande o hace ampolla en la cara o las manos, al médico. Esto no reemplaza un curso de primeros auxilios.</p>
      <p>Por ejemplo, a Julián se le prendió fuego el aceite de una sartén. Se acordó de la regla: apagó la hornalla y tapó la sartén con una tapa. En 10 segundos se apagó.</p>` },
  ],
  practica: [
    "Revisá tu cocina con las cinco claves y anotá 3 cosas que vas a cambiar.",
    "La próxima vez que cocines, anotá cuántos minutos pasó la comida cocida afuera antes de ir a la heladera.",
    "Mirá la llama de tu cocina y anotá de qué color es; si no es azul, anotá a quién vas a llamar para revisarla.",
    "Armá un cartel con los 2 pasos para cuando se prende fuego el aceite y pegalo cerca de la cocina.",
  ],
  recursos: [
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "Ministerio de Salud: enfermedades transmitidas por alimentos", url: "https://www.argentina.gob.ar/enfermedades-transmitidas-por-alimentos" },
    { t: "ENARGAS: seguridad con el gas en el hogar", url: "https://www.enargas.gob.ar/secciones/seguridad-en-el-hogar/seguridad-en-el-hogar.php" },
  ],
  quiz: [
    { q: "Cortaste pollo crudo en la tabla. ¿Qué hacés antes de cortar el tomate para la ensalada?", opciones: ["Le paso un papel","Nada, el tomate se lava después","Lavo bien la tabla y el cuchillo, o uso otra tabla","Lo corto del otro lado de la tabla"], correcta: 2, explicacion: "Así evitás la contaminación cruzada. Pasar un papel tienta porque parece limpio, pero no saca los microbios." },
    { q: "¿Qué significa inocuidad?", opciones: ["Que un alimento no hace daño a quien lo come","Que es sabroso","Que es barato","Que es orgánico"], correcta: 0, explicacion: "Es la seguridad del alimento. \"Orgánico\" tienta, pero es otra cosa." },
    { q: "Comiste algo y tenés vómitos, diarrea y fiebre. ¿Qué puede ser?", opciones: ["Siempre una alergia","Nada que ver con la comida","Falta de sal","Una enfermedad transmitida por alimentos (ETA)"], correcta: 3, explicacion: "Esos son síntomas de una ETA. Alergia tienta, pero suele dar otros síntomas." },
    { q: "Si hiciste un guiso, ¿qué tiene que pasar para que sea seguro?", opciones: ["Que esté tibio","Que hierva bien","Que tenga mucha sal","Que se cocine 2 minutos"], correcta: 1, explicacion: "Llegar a 70 °C o más mata a la mayoría de los microbios. Tibio tienta, pero es zona de peligro." },
    { q: "¿Entre qué temperaturas crecen más rápido los microbios?", opciones: ["Debajo de 0 °C","Arriba de 100 °C","Entre 5 °C y 60 °C","Solo a 37 °C"], correcta: 2, explicacion: "Esa es la zona de peligro. 37 °C tienta porque es la temperatura del cuerpo, pero el rango es mucho más amplio." },
    { q: "Si cocinaste arroz al mediodía en un día de calor, ¿cuánto puede quedar afuera como máximo?", opciones: ["Una hora","Toda la tarde","Hasta la cena","Un día"], correcta: 0, explicacion: "Con calor, como máximo 1 hora. \"Hasta la cena\" tienta, pero el arroz cocido es un caso común de ETA." },
    { q: "Tenés carne congelada para mañana. ¿Cómo la descongelás?", opciones: ["La dejo en la mesada toda la noche","La pongo al sol","En agua caliente toda la noche","La paso del freezer a la heladera hoy"], correcta: 3, explicacion: "En la heladera se descongela sin entrar en la zona de peligro. La mesada tienta por cómoda, pero afuera se calienta." },
    { q: "Tenés una olla grande de sopa caliente. ¿Cómo la enfriás rápido?", opciones: ["La dejo tapada en la olla toda la noche","La reparto en recipientes chicos y bajos","Le pongo hielo arriba","La dejo en el horno apagado"], correcta: 1, explicacion: "En recipientes chicos se enfría antes. Dejarla tapada tienta, pero tarda horas en enfriarse." },
    { q: "Se prende fuego el aceite de la sartén. ¿Qué hacés?", opciones: ["Le tiro agua","La llevo a la pileta","Apago la hornalla y tapo la sartén","Soplo fuerte"], correcta: 2, explicacion: "Tapar ahoga el fuego. Tirar agua tienta, pero hace explotar el aceite." },
    { q: "Entrás a tu casa y huele a gas. ¿Qué hacés?", opciones: ["No prendo nada, ventilo, cierro la llave y llamo a la distribuidora desde afuera","Prendo la luz para ver mejor","Busco la pérdida con un fósforo","Prendo la cocina para ver si anda"], correcta: 0, explicacion: "Cualquier chispa puede encender el gas. Prender la luz tienta, pero también puede hacer chispa." },
    { q: "La llama de tu cocina es amarilla. ¿Qué hacés?", opciones: ["La arreglo yo con un destornillador","No pasa nada","La tapo con papel","Llamo a un gasista matriculado para que la revise"], correcta: 3, explicacion: "Puede estar largando monóxido de carbono. Arreglarla vos tienta para ahorrar, pero el gas lo toca solo un matriculado." },
    { q: "Te quemaste un dedo con agua hirviendo, una quemadura chica. ¿Qué hacés primero?", opciones: ["Le pongo manteca","Pongo el dedo bajo agua fría de la canilla unos 20 minutos","Le pongo hielo directo","Le pongo pasta de dientes"], correcta: 1, explicacion: "El agua fría baja el calor de la piel. La manteca tienta porque es un consejo viejo, pero empeora la quemadura." },
  ],
},
{
  id: "herramientas",
  icono: "🔪",
  titulo: "Herramientas y cortes básicos",
  nivel: "Básico",
  objetivos: [
    "Armar un equipo mínimo de cocina sin gastar de más",
    "Usar el cuchillo de forma segura con la mano en garra",
    "Hacer los cortes básicos: rodajas, bastones, cubos y picado",
  ],
  lecciones: [
    { titulo: "Lo mínimo para empezar", html: `
      <p class="idea">Para cocinar bien no hace falta una cocina llena de aparatos. Con <strong>unas 10 cosas</strong> hacés casi todas las comidas de este curso.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th><th>Consejo</th></tr>
        <tr><td>Cuchillo grande (de chef)</td><td>Cortar casi todo</td><td>Mejor uno bueno que muchos malos</td></tr>
        <tr><td>Cuchillo chico (de pelar)</td><td>Pelar, cortar cosas chicas</td><td>Sirve uno común</td></tr>
        <tr><td>Tabla</td><td>Cortar sin dañar la mesada</td><td>Ideal 2: una para crudos y otra para lo demás</td></tr>
        <tr><td>Olla mediana con tapa</td><td>Fideos, arroz, guisos, sopas</td><td>Con fondo grueso, se pega menos</td></tr>
        <tr><td>Sartén</td><td>Saltear, dorar, huevos</td><td>Una antiadherente de 24 a 28 cm</td></tr>
        <tr><td>Fuente para horno</td><td>Verduras asadas, carnes, tartas</td><td>De vidrio o de metal</td></tr>
        <tr><td>Cuchara de madera y espumadera</td><td>Revolver, sacar cosas del agua</td><td>La madera no raya la sartén</td></tr>
        <tr><td>Colador</td><td>Escurrir fideos y legumbres</td><td>Uno de metal dura años</td></tr>
        <tr><td>Recipientes con tapa</td><td>Guardar sobras y porciones</td><td>Sirven los de helado lavados</td></tr>
        <tr><td>Taza y cuchara medidoras</td><td>Medir arroz, agua, harina</td><td>Una taza común también sirve</td></tr>
      </table>
      <p><strong>Antiadherente</strong> quiere decir que tiene una capa para que la comida no se pegue. Se cuida usando cuchara de madera o silicona, no de metal.</p>
      <p><strong>Comprá de a poco:</strong> empezá con lo básico y sumá cuando una receta lo pida de verdad. En ferias americanas y casas de usados hay ollas buenas a buen precio.</p>
      <p>Por ejemplo, Julián armó su equipo con 1 olla, 1 sartén, 1 cuchillo grande, 2 tablas y un colador que le regaló su abuela. Con eso cocinó todo el primer mes.</p>` },
    { titulo: "Usar el cuchillo sin cortarte", video: {"id":"FD9ihhhpdfI","t":"Cómo usar el cuchillo sin cortarse los dedos · Cocineros de Verdad (1:31)"}, html: `
      <p class="idea">El cuchillo es la herramienta más importante. Se usa seguro con <strong>la tabla firme</strong>, <strong>la mano en garra</strong> y <strong>el cuchillo afilado</strong>.</p>
      <pre><code>La mano que sostiene el alimento, "en garra":
   - las yemas de los dedos dobladas hacia adentro
   - los nudillos adelante, apoyados contra la hoja
   - el pulgar atrás, escondido
El cuchillo sube y baja rozando los nudillos,
nunca llega a las yemas.</code></pre>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>1. Tabla firme</td><td>Un repasador húmedo o papel mojado abajo para que no resbale</td></tr>
        <tr><td>2. Base plana</td><td>Cortá primero un costado del alimento para que no ruede (por ejemplo, la papa)</td></tr>
        <tr><td>3. Agarre</td><td>Tomá el mango cerca de la hoja, firme pero sin apretar de más</td></tr>
        <tr><td>4. Mano en garra</td><td>Los nudillos guían el cuchillo</td></tr>
        <tr><td>5. Despacio</td><td>La velocidad viene con la práctica</td></tr>
      </table>
      <p><strong>Un cuchillo afilado es más seguro</strong> que uno sin filo: el que no corta resbala y hay que hacer más fuerza. La <strong>chaira</strong> es una barra de metal que endereza el filo; para afilar de verdad, una piedra o un afilador.</p>
      <p><strong>Reglas fijas:</strong> si se cae, dejalo caer y corré los pies; no lo dejes en la pileta con agua (alguien mete la mano); lavalo y guardalo enseguida.</p>
      <p>Por ejemplo, Julián cortaba la cebolla con los dedos estirados y se hizo un corte chico. Empezó a usar la garra y, despacio, en una semana ya cortaba sin mirar con miedo.</p>` },
    { titulo: "Los cortes básicos", html: `
      <p class="idea">Con <strong>cuatro cortes</strong> resolvés casi todas las recetas. Cortar parejo importa: los pedazos del mismo tamaño se cocinan al mismo tiempo.</p>
      <table>
        <tr><th>Corte</th><th>Cómo es</th><th>Para qué</th></tr>
        <tr><td>Rodajas</td><td>Ruedas del mismo grosor</td><td>Zanahoria para guiso, papa al horno</td></tr>
        <tr><td>Bastones</td><td>Tiras como papas fritas</td><td>Papas, zanahoria para saltear</td></tr>
        <tr><td>Cubos</td><td>Dados, de 1 a 2 cm</td><td>Guisos, sopas, ensaladas</td></tr>
        <tr><td>Picado fino</td><td>Pedacitos muy chicos</td><td>Cebolla, ajo y perejil para dar sabor</td></tr>
      </table>
      <pre><code>De bastón a cubo:
papa → base plana → rebanadas de 1 cm → bastones de 1 cm → cubos de 1 cm

Cebolla picada:
1. Cortala al medio de arriba a abajo y pelala.
2. Apoyala plana. Cortes verticales sin llegar a la raíz.
3. Cortes de costado. La raíz la mantiene unida.
4. Cortá de frente: salen cubitos.</code></pre>
      <p><strong>Juliana</strong> es otro nombre que vas a ver en recetas: tiras finitas, como fósforos largos. <strong>Brunoise</strong> es un picado en cubitos muy chicos.</p>
      <p><strong>Cuanto más chico, más rápido se cocina:</strong> cubos de 1 cm de papa tardan unos 10 minutos en hervir; una papa entera, más de 20.</p>
      <p>Por ejemplo, Julián cortó la zanahoria de un guiso en pedazos de todos los tamaños: los chicos se deshicieron y los grandes quedaron duros. La vez siguiente cortó rodajas de 1 cm y quedaron todas a punto.</p>` },
  ],
  practica: [
    "Hacé la lista de las herramientas de la tabla que ya tenés y anotá cuáles te faltan y cuánto cuestan.",
    "Practicá la mano en garra con 2 zanahorias y anotá cuántas rodajas parejas te salieron.",
    "Picá 1 cebolla con el método de la lección y medí cuántos minutos tardaste; repetí la semana siguiente y compará.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "Curso de este sitio: Panadería casera", url: "https://pkeios.github.io/EiaLearning/panaderia/" },
  ],
  quiz: [
    { q: "Vas a armar tu primera cocina con poca plata. ¿Qué comprás primero?", opciones: ["Una licuadora y una freidora de aire","Un juego de 12 cuchillos baratos","Un cuchillo bueno, una tabla, una olla y una sartén","Nada, se cocina sin herramientas"], correcta: 2, explicacion: "Con lo básico hacés casi todo. El juego de 12 cuchillos tienta por la cantidad, pero mejor uno bueno." },
    { q: "¿Por qué conviene tener 2 tablas?", opciones: ["Para usar una con crudos y otra con lo que no se cocina","Para cortar más rápido","Porque se rompen","Para decorar"], correcta: 0, explicacion: "Evita la contaminación cruzada. \"Más rápido\" tienta, pero no es la razón." },
    { q: "Tenés una sartén antiadherente. ¿Con qué revolvés?", opciones: ["Con un tenedor de metal","Con un cuchillo","Con cualquier cosa","Con una cuchara de madera o de silicona"], correcta: 3, explicacion: "El metal raya la capa antiadherente. El tenedor tienta porque está a mano." },
    { q: "Tu tabla resbala sobre la mesada. ¿Qué hacés?", opciones: ["La sostengo con el codo","Pongo un repasador húmedo abajo","Corto más rápido","Corto en la mano"], correcta: 1, explicacion: "El repasador húmedo la frena. Cortar en la mano tienta, pero es peligroso." },
    { q: "Vas a cortar una papa que rueda. ¿Qué hacés primero?", opciones: ["La sostengo fuerte con los dedos estirados","La corto rodando","Le corto un costado para que tenga base plana","La corto entera en el aire"], correcta: 2, explicacion: "Con base plana no rueda. Sostenerla fuerte tienta, pero los dedos estirados se cortan." },
    { q: "¿Cómo va la mano que sostiene el alimento?", opciones: ["En garra: yemas dobladas, nudillos contra la hoja","Con los dedos estirados","Lejos, sin tocar el alimento","Con el pulgar adelante"], correcta: 0, explicacion: "Los nudillos guían el cuchillo y las yemas quedan protegidas. Estirarlos tienta porque se siente natural." },
    { q: "¿Por qué un cuchillo afilado es más seguro?", opciones: ["No es más seguro","Porque pesa más","Porque es más lindo","Porque no resbala y no hay que hacer tanta fuerza"], correcta: 3, explicacion: "El que no corta resbala. \"No es más seguro\" tienta porque el filo asusta." },
    { q: "Se te cae el cuchillo. ¿Qué hacés?", opciones: ["Lo atajo en el aire","Lo dejo caer y corro los pies","Lo pateo","Lo agarro de la hoja"], correcta: 1, explicacion: "Atajarlo es como se corta la gente. Atajarlo tienta por reflejo." },
    { q: "Si vas a hacer un guiso con papa y zanahoria, ¿cómo las cortás?", opciones: ["De cualquier tamaño","Bien grandes y desparejos","En pedazos parejos, del mismo tamaño","Una entera y la otra picada"], correcta: 2, explicacion: "Lo parejo se cocina al mismo tiempo. Cortar de cualquier tamaño tienta por rápido, pero algunos quedan duros." },
    { q: "Querés que la papa hierva más rápido. ¿Qué hacés?", opciones: ["La corto en cubos chicos","La hiervo entera","Le pongo más sal","Le pongo menos agua"], correcta: 0, explicacion: "Más chico, más rápido. Menos agua tienta, pero no la cocina más rápido." },
    { q: "Si una receta dice \"zanahoria en juliana\", ¿qué cortás?", opciones: ["Rodajas gruesas","Cubos grandes","Zanahoria rallada","Tiras finitas, como fósforos largos"], correcta: 3, explicacion: "Juliana son tiras finas. Rallada tienta porque también queda fina, pero no es lo mismo." },
    { q: "Si terminaste de cortar, ¿dónde dejás el cuchillo?", opciones: ["En la pileta con agua y espuma","Lo lavo y lo guardo enseguida","En el borde de la mesada","Debajo de un repasador"], correcta: 1, explicacion: "En la pileta alguien mete la mano sin verlo. Dejarlo en remojo tienta para lavarlo después." },
  ],
},
{
  id: "planificar",
  icono: "🛒",
  titulo: "Planificar y comprar bien",
  nivel: "Básico",
  objetivos: [
    "Armar un plato equilibrado según las Guías Alimentarias para la Población Argentina",
    "Planificar el menú de la semana y la lista de compras",
    "Comparar precios por kilo y elegir productos de estación",
  ],
  lecciones: [
    { titulo: "El plato equilibrado", html: `
      <p class="idea">Las <strong>Guías Alimentarias para la Población Argentina</strong> del Ministerio de Salud dicen qué comer para estar bien. Una forma fácil de seguirlas es el <strong>plato equilibrado</strong>: la mitad, verduras; un cuarto, cereales, legumbres o papa; y un cuarto, carne, huevo o legumbres.</p>
      <pre><code>        Plato equilibrado
   ┌──────────────┬────────────┐
   │              │  cereales, │
   │   verduras   │  legumbres │
   │   (la mitad) │  o papa    │
   │              ├────────────┤
   │              │ carne,     │
   │              │ huevo o    │
   │              │ legumbres  │
   └──────────────┴────────────┘
   + agua para tomar + una fruta</code></pre>
      <table>
        <tr><th>Mensaje de las guías (resumido)</th><th>En la práctica</th></tr>
        <tr><td>Comer 5 porciones de frutas y verduras por día</td><td>Una fruta en el desayuno, verdura en almuerzo y cena</td></tr>
        <tr><td>Tomar 8 vasos de agua segura por día</td><td>Agua en lugar de gaseosas y jugos</td></tr>
        <tr><td>Bajar la sal</td><td>Probar antes de salar; usar hierbas y especias</td></tr>
        <tr><td>Limitar ultraprocesados, azúcar y frituras</td><td>Cocinar más en casa</td></tr>
        <tr><td>Sumar legumbres, cereales integrales, semillas</td><td>Lentejas, arroz, avena</td></tr>
      </table>
      <p>Un <strong>ultraprocesado</strong> es un producto industrial con muchos ingredientes que no usarías en tu cocina, como galletitas, snacks o gaseosas.</p>
      <p><strong>Comer bien no es caro:</strong> las legumbres, el huevo, el arroz, la avena y las verduras de estación están entre lo más barato y lo que más alimenta.</p>
      <p><strong>Esta lección orienta, pero no reemplaza a un médico o nutricionista,</strong> sobre todo si tenés una enfermedad, celiaquía o una dieta especial.</p>
      <p>Por ejemplo, Julián comía fideos con manteca casi todos los días. Empezó a sumarles media sartén de verduras salteadas y un huevo, y le duraba más la saciedad.</p>` },
    { titulo: "El menú de la semana", video: {"id":"B7jtBf_7HSU","t":"Así se arma un menú semanal para comer mejor y ahorrar · Paulina Cocina (8:13)"}, html: `
      <p class="idea">Planificar <strong>qué vas a comer en la semana</strong> ahorra plata y tiempo: comprás solo lo que vas a usar y no improvisás con delivery.</p>
      <pre><code>Menú de Julián (almuerzo y cena, 5 días)
          Almuerzo                   Cena
Lunes     Guiso de lentejas          Lentejas (sobra) + ensalada
Martes    Arroz con verduras y huevo Tortilla de papa
Miércoles Fideos con tuco            Sopa de verduras
Jueves    Pollo al horno con papas   Sándwich de pollo (sobra)
Viernes   Tarta de verdura           Tarta (sobra) + ensalada</code></pre>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>1. Mirar lo que tenés</td><td>Revisá heladera y alacena antes de planificar</td></tr>
        <tr><td>2. Elegir pocas recetas</td><td>4 o 5 recetas que conozcas</td></tr>
        <tr><td>3. Cocinar de más</td><td>Una preparación da para 2 comidas</td></tr>
        <tr><td>4. Repetir ingredientes</td><td>El zapallo del guiso va también a la sopa</td></tr>
        <tr><td>5. Hacer la lista</td><td>Con cantidades, ordenada por sector del súper o verdulería</td></tr>
      </table>
      <p>La <strong>alacena</strong> es el lugar donde guardás lo que no va en la heladera: arroz, fideos, legumbres, latas, aceite.</p>
      <p><strong>Un día de "lo que haya":</strong> dejá un día libre para usar lo que sobró. Así no se tira nada.</p>
      <p>Por ejemplo, Julián armó su primer menú un domingo en 20 minutos. Esa semana gastó menos que la anterior y no pidió delivery ni una vez.</p>` },
    { titulo: "Comprar bien: precio por kilo y estación", html: `
      <p class="idea">El precio que importa no es el del paquete sino el <strong>precio por kilo</strong> (o por litro). Y las verduras y frutas <strong>de estación</strong> son más baratas y más ricas.</p>
      <pre><code>Precio por kilo = precio ÷ peso en kilos

Ejemplo (precios inventados para la cuenta):
Arroz A: paquete de 500 g a $1.200 → 1.200 ÷ 0,5 = $2.400 el kilo
Arroz B: paquete de 1 kg a $2.000  → 2.000 ÷ 1   = $2.000 el kilo
El B es más barato aunque el paquete cueste más.</code></pre>
      <table>
        <tr><th>Consejo</th><th>Por qué</th></tr>
        <tr><td>Mirá el precio por kilo en la góndola</td><td>Los súper lo tienen que mostrar en la etiqueta</td></tr>
        <tr><td>Comprá de estación</td><td>Hay más cantidad y bajan los precios</td></tr>
        <tr><td>Compará en Precios Claros</td><td>Muestra precios de supermercados cerca tuyo</td></tr>
        <tr><td>Primeras marcas no siempre son mejores</td><td>En arroz, fideos y legumbres secas, las segundas marcas suelen servir igual</td></tr>
        <tr><td>Ferias y verdulerías de barrio</td><td>Muchas veces tienen mejor precio en verduras</td></tr>
        <tr><td>No compres con hambre</td><td>Comprás de más y cosas que no estaban en la lista</td></tr>
      </table>
      <p><strong>De estación</strong> quiere decir que es la época del año en que esa verdura o fruta se cosecha. Por ejemplo, en invierno abundan los cítricos, el zapallo y la acelga; en verano, el tomate y el zapallito.</p>
      <p>Para tus derechos al comprar (precios, ofertas, devoluciones), está el curso <strong>Comprar mejor</strong> de este sitio.</p>
      <p>Por ejemplo, Julián compraba tomates en invierno y le salían caros y sin gusto. En invierno cambió la ensalada de tomate por zanahoria rallada y repollo, y gastó menos.</p>` },
  ],
  practica: [
    "Anotá todo lo que comiste ayer y marcá cuánto de tu plato fueron verduras.",
    "Armá el menú de 5 días (almuerzo y cena) con la plantilla de la lección y la lista de compras con cantidades.",
    "Calculá el precio por kilo de 3 productos que comprás siempre en 2 tamaños distintos y anotá cuál conviene.",
  ],
  recursos: [
    { t: "Ministerio de Salud: gráfica de las Guías Alimentarias para la Población Argentina", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable/grafico" },
    { t: "Ministerio de Salud: alimentación saludable", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable" },
    { t: "Precios Claros: comparar precios de supermercados", url: "https://www.preciosclaros.gob.ar/" },
    { t: "Curso de este sitio: Comprar mejor, derechos del consumidor", url: "https://pkeios.github.io/EiaLearning/consumo/" },
  ],
  quiz: [
    { q: "En el plato equilibrado, ¿cuánto tienen que ser verduras?", opciones: ["Un poquito al costado","Todo el plato","La mitad","Nada"], correcta: 2, explicacion: "El plato equilibrado lleva medio plato de verduras. \"Un poquito\" tienta porque así se come muchas veces." },
    { q: "Si comés fideos con manteca todos los días, ¿qué cambio te acerca al plato equilibrado?", opciones: ["Sumarles verduras y un huevo","Comer el doble de fideos","Sacar los fideos y no comer","Cambiar la manteca por queso rallado"], correcta: 0, explicacion: "Sumás verduras y proteína. Cambiar la manteca por queso tienta, pero sigue sin verduras." },
    { q: "Si querés seguir las guías, ¿cuántas porciones de frutas y verduras comés por día?", opciones: ["1","10","Ninguna","5"], correcta: 3, explicacion: "Son 5 porciones. 1 tienta porque parece suficiente." },
    { q: "¿Qué es un ultraprocesado?", opciones: ["Cualquier comida cocida","Un producto industrial con muchos ingredientes que no usarías en tu cocina","Una verdura cortada","Un alimento congelado"], correcta: 1, explicacion: "Galletitas, snacks, gaseosas. \"Congelado\" tienta, pero una verdura congelada no es ultraprocesada." },
    { q: "Tenés poca plata. ¿Qué alimentos te alimentan más por menos?", opciones: ["Snacks y gaseosas","Solo carne","Legumbres, huevo, arroz, avena y verduras de estación","Comida de delivery"], correcta: 2, explicacion: "Son baratos y nutritivos. Solo carne tienta porque llena, pero es lo más caro." },
    { q: "Tenés celiaquía y querés armar tu plan de comidas. ¿Qué hacés?", opciones: ["Uso esta lección de guía y consulto a un médico o nutricionista","Sigo el plato igual sin cambiar nada","Le pregunto solo a un amigo","Dejo de comer cereales sin consultar"], correcta: 0, explicacion: "Una dieta especial necesita un profesional. Seguir igual tienta, pero la celiaquía exige cambios." },
    { q: "Vas a planificar la semana. ¿Qué hacés primero?", opciones: ["Voy al súper sin lista","Pido delivery","Compro todo nuevo","Miro lo que ya tengo en la heladera y la alacena"], correcta: 3, explicacion: "Así usás lo que hay y no comprás de más. Ir sin lista tienta por rápido." },
    { q: "Hacés un guiso de lentejas el lunes al mediodía. ¿Cómo aprovechás?", opciones: ["Hago justo una porción","Cocino de más y lo como también a la noche","Tiro lo que sobra","Hago otro guiso a la noche"], correcta: 1, explicacion: "Una preparación, 2 comidas. Hacer justo una porción tienta, pero cocinás el doble de veces." },
    { q: "En la lista de compras, ¿qué tiene que haber?", opciones: ["Solo los nombres de los súper","Nada, se compra lo que se ve","Lo que necesitás con las cantidades","Solo las ofertas"], correcta: 2, explicacion: "Con cantidades comprás justo. Solo ofertas tienta, pero terminás comprando lo que no necesitás." },
    { q: "Un paquete de 500 g cuesta $1.200 y otro de 1 kg cuesta $2.000. ¿Cuál conviene?", opciones: ["El de 1 kg: $2.000 el kilo contra $2.400","El de 500 g, porque es más barato","Son iguales","No se puede saber"], correcta: 0, explicacion: "Dividís precio por peso. El de 500 g tienta porque el paquete cuesta menos." },
    { q: "Es invierno y querés ensalada barata. ¿Qué elegís?", opciones: ["Tomate, que siempre es barato","Frutillas","Nada","Zanahoria y repollo, que son de estación"], correcta: 3, explicacion: "De estación es más barato y rico. El tomate tienta por costumbre, pero en invierno sale caro." },
    { q: "Si vas al súper con hambre, ¿qué suele pasar?", opciones: ["Comprás menos","Comprás de más y cosas que no estaban en la lista","Gastás exactamente lo planeado","No pasa nada"], correcta: 1, explicacion: "El hambre empuja a comprar de más. \"No pasa nada\" tienta, pero se nota en el ticket." },
  ],
},
{
  id: "tecnicas",
  icono: "🍳",
  titulo: "Técnicas básicas: hervir, saltear y hornear",
  nivel: "Básico",
  objetivos: [
    "Hervir fideos y arroz con la cantidad justa de agua y tiempo",
    "Saltear y dorar en sartén sin que se queme ni quede crudo",
    "Usar el horno para verduras, carnes y comidas en tanda",
  ],
  lecciones: [
    { titulo: "Hervir: fideos y arroz", video: {"id":"COshygku2SQ","t":"Cómo hacer arroz blanco perfecto, fácil y sin arrocera · TULIO Recomienda (8:11)"}, html: `
      <p class="idea">Hervir es cocinar en agua a 100 °C. Para <strong>fideos</strong>, mucha agua; para <strong>arroz</strong>, la cantidad justa para que la absorba toda.</p>
      <table>
        <tr><th></th><th>Fideos secos</th><th>Arroz blanco</th></tr>
        <tr><td>Cantidad por persona</td><td>100 g</td><td>Media taza cruda (unos 80 g)</td></tr>
        <tr><td>Agua</td><td>1 litro cada 100 g, con sal</td><td>2 tazas de agua por cada taza de arroz</td></tr>
        <tr><td>Cuándo se agrega</td><td>Con el agua hirviendo fuerte</td><td>Con el agua hirviendo, y se baja el fuego</td></tr>
        <tr><td>Tapa</td><td>Sin tapa</td><td>Con tapa, sin destapar</td></tr>
        <tr><td>Tiempo</td><td>El que dice el paquete (8 a 12 minutos)</td><td>Unos 15 a 18 minutos, hasta que no quede agua</td></tr>
        <tr><td>Al final</td><td>Escurrir en el colador</td><td>Dejar reposar 5 minutos tapado</td></tr>
      </table>
      <pre><code>Arroz para 2 (paso a paso)
1. Medí 1 taza de arroz y 2 tazas de agua.
2. Hervir el agua con una pizca de sal.
3. Agregar el arroz, revolver una vez, bajar al mínimo y tapar.
4. 15 a 18 minutos sin destapar.
5. Apagar y dejar 5 minutos tapado. Separar con un tenedor.</code></pre>
      <p><strong>Al dente</strong> quiere decir cocido pero firme al morder. Probá un fideo un minuto antes del tiempo del paquete.</p>
      <p><strong>Cuidado al escurrir:</strong> el vapor quema. Volcá el agua lejos de la cara, con agarraderas y el colador en la pileta.</p>
      <p>Por ejemplo, el primer arroz de Julián quedó pegado porque destapaba para mirar y revolvía. Con la regla "tapa y no tocar" le salió suelto al segundo intento.</p>` },
    { titulo: "Saltear y dorar en sartén", html: `
      <p class="idea">Saltear es cocinar rápido en sartén caliente con <strong>poco aceite</strong>, moviendo los alimentos. Dorar es dejar que se forme una <strong>costra dorada</strong> que da mucho sabor.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Sartén bien caliente antes de poner la comida</td><td>Si está fría, la comida larga agua y se hierve en vez de dorarse</td></tr>
        <tr><td>Poco aceite: 1 o 2 cucharadas</td><td>Alcanza para que no se pegue</td></tr>
        <tr><td>No llenar la sartén</td><td>Con mucha comida se enfría y suelta agua</td></tr>
        <tr><td>Alimentos secos</td><td>El agua hace saltar el aceite y no dora</td></tr>
        <tr><td>Primero lo que tarda más</td><td>Cebolla y zanahoria antes que zapallito</td></tr>
        <tr><td>Sal al final en verduras</td><td>La sal saca el agua de las verduras</td></tr>
      </table>
      <pre><code>Verduras salteadas con huevo (para 1)
1. Cortá media cebolla, media zanahoria y un zapallito en tiras.
2. Sartén a fuego medio-alto con 1 cucharada de aceite.
3. Cebolla y zanahoria 4 minutos, moviendo.
4. Zapallito 3 minutos más.
5. Hacé un hueco, poné 1 huevo y revolvé hasta que cuaje.
6. Sal y pimienta. Comelo con arroz.</code></pre>
      <p><strong>Rehogar</strong> es cocinar despacio a fuego bajo hasta que la verdura esté blanda y transparente, sin dorar; se usa con la cebolla para empezar guisos y salsas.</p>
      <p><strong>Si humea mucho,</strong> el aceite está demasiado caliente: bajá el fuego. Nunca dejes la sartén sola.</p>
      <p>Por ejemplo, Julián puso todas las verduras juntas en una sartén chica: quedaron hervidas y aguadas. La vez siguiente las hizo en 2 tandas y se doraron.</p>` },
    { titulo: "El horno: asar y cocinar en tanda", html: `
      <p class="idea">El horno cocina con <strong>aire caliente</strong> que rodea la comida. Es ideal para cocinar mucho de una vez mientras hacés otra cosa.</p>
      <table>
        <tr><th>Temperatura</th><th>Qué es</th><th>Para qué</th></tr>
        <tr><td>Unos 160 °C</td><td>Horno bajo</td><td>Cocciones largas, budines</td></tr>
        <tr><td>Unos 180 °C</td><td>Horno medio</td><td>Tartas, pollo, carnes</td></tr>
        <tr><td>Unos 200 a 220 °C</td><td>Horno fuerte</td><td>Verduras asadas, papas doradas</td></tr>
      </table>
      <pre><code>Bandeja de verduras al horno (para 3 o 4 comidas)
1. Precalentá el horno a 200 °C (10 a 15 minutos).
2. Cortá en cubos parejos papa, batata, zanahoria, zapallo y cebolla.
3. En la fuente, con 2 cucharadas de aceite, sal y especias. Mezclá.
4. Una sola capa, sin amontonar.
5. 35 a 45 minutos, dando vuelta a la mitad, hasta que estén doradas y blandas.</code></pre>
      <p><strong>Precalentar</strong> es prender el horno antes de meter la comida, para que ya esté a la temperatura que pide la receta.</p>
      <p><strong>Pollo:</strong> está listo cuando el jugo sale transparente, sin rosado, y la carne cerca del hueso no está roja. Si tenés termómetro de cocina, adentro tiene que llegar a 75 °C.</p>
      <p><strong>Seguridad:</strong> agarraderas secas (las mojadas pasan el calor), abrí la puerta y esperá un segundo que salga el vapor. Si el horno es a gas, prendelo con la puerta abierta y fijate que la llama quede encendida.</p>
      <p>Por ejemplo, el domingo Julián hace una bandeja grande de verduras y 4 presas de pollo a la vez. Le alcanza para 4 comidas y prende el horno una sola vez.</p>` },
  ],
  practica: [
    "Hacé arroz para 2 con la receta paso a paso y anotá cuántos minutos tardó y si quedó suelto.",
    "Cociná 100 g de fideos y probalos 1 minuto antes del tiempo del paquete; anotá cuántos minutos te gustaron más.",
    "Hacé las verduras salteadas con huevo en 2 tandas y compará con una tanda sola: anotá cuál se doró mejor.",
    "Hacé una bandeja de verduras al horno y anotá para cuántas comidas te alcanzó.",
  ],
  recursos: [
    { t: "Ministerio de Salud: alimentación saludable", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "Ministerio de Salud: gráfica de las Guías Alimentarias para la Población Argentina", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable/grafico" },
  ],
  quiz: [
    { q: "Vas a hacer fideos para 3. ¿Cuánta agua usás?", opciones: ["Medio litro","Lo justo para taparlos","Unos 3 litros","10 litros"], correcta: 2, explicacion: "Un litro cada 100 g. \"Lo justo para taparlos\" tienta, pero se pegan." },
    { q: "Si vas a hacer 1 taza de arroz, ¿cuánta agua?", opciones: ["2 tazas","Media taza","5 tazas","Un litro"], correcta: 0, explicacion: "Dos de agua por una de arroz. Un litro tienta por los fideos, pero el arroz quedaría pasado." },
    { q: "Tu arroz queda pegado. ¿Qué cambiás?", opciones: ["Lo revuelvo todo el tiempo","Le pongo más fuego","Lo destapo cada 2 minutos","Lo tapo y no lo destapo ni revuelvo mientras se cocina"], correcta: 3, explicacion: "Revolver suelta almidón y lo pega. Revolver tienta para que no se pegue, pero hace lo contrario." },
    { q: "¿Qué quiere decir que los fideos estén al dente?", opciones: ["Crudos","Cocidos pero firmes al morder","Muy blandos","Fríos"], correcta: 1, explicacion: "Firmes, no crudos. \"Crudos\" tienta, pero al dente ya están cocidos." },
    { q: "Vas a escurrir los fideos. ¿Cómo lo hacés seguro?", opciones: ["Sobre la mesada","Inclinándote para ver","Con agarraderas, el colador en la pileta y la cara lejos del vapor","Con un repasador mojado"], correcta: 2, explicacion: "El vapor quema. Inclinarte para ver tienta, pero te quema la cara." },
    { q: "Si pusiste las verduras en la sartén fría y quedaron aguadas, ¿qué pasó?", opciones: ["La sartén tenía que estar caliente antes","Les faltó sal","Les faltó agua","Eran malas verduras"], correcta: 0, explicacion: "En sartén fría largan agua y se hierven. La sal tienta, pero saca más agua." },
    { q: "Querés saltear mucha verdura y tenés una sartén chica. ¿Qué hacés?", opciones: ["Pongo todo junto","Le agrego agua","La tapo","La hago en 2 tandas"], correcta: 3, explicacion: "Llena, se enfría y no dora. Todo junto tienta por rápido." },
    { q: "Si vas a saltear cebolla y zapallito, ¿qué va primero?", opciones: ["El zapallito","La cebolla, que tarda más","Los dos juntos siempre","Da igual"], correcta: 1, explicacion: "Primero lo que tarda más. \"Da igual\" tienta, pero el zapallito se pasa." },
    { q: "El aceite de la sartén humea mucho. ¿Qué hacés?", opciones: ["Le agrego agua","Lo dejo así","Bajo el fuego","Me voy a hacer otra cosa"], correcta: 2, explicacion: "Humea porque está demasiado caliente. El agua tienta para enfriarlo, pero hace saltar el aceite." },
    { q: "Si vas a hacer verduras asadas, ¿a qué temperatura?", opciones: ["A unos 200 °C, horno fuerte","A 100 °C","Al mínimo","Sin precalentar"], correcta: 0, explicacion: "Con horno fuerte se doran. Al mínimo tienta para que no se quemen, pero quedan blandas sin dorar." },
    { q: "Si ponés las verduras amontonadas en la fuente, ¿qué pasa?", opciones: ["Se doran más","Se cocinan más rápido","Nada","Se cocinan al vapor y no se doran"], correcta: 3, explicacion: "Tienen que ir en una capa. \"Más rápido\" tienta, pero tardan más y quedan blandas." },
    { q: "¿Cómo sabés que el pollo al horno está listo?", opciones: ["Está dorado por fuera","El jugo sale transparente y cerca del hueso no está rojo","Pasó 10 minutos","Huele rico"], correcta: 1, explicacion: "Por fuera puede estar dorado y crudo adentro. Dorado tienta porque se ve listo." },
  ],
},
{
  id: "legumbres-huevos",
  icono: "🫘",
  titulo: "Legumbres y huevos: proteínas baratas",
  nivel: "Intermedio",
  objetivos: [
    "Remojar y cocinar lentejas, garbanzos y porotos con los tiempos correctos",
    "Preparar un guiso de lentejas que rinda para varias comidas",
    "Cocinar huevos duros, revueltos y en tortilla, y guardarlos seguros",
  ],
  lecciones: [
    { titulo: "Remojar y cocinar legumbres", html: `
      <p class="idea">Las <strong>legumbres</strong> (lentejas, garbanzos, porotos, arvejas secas) son baratas, rinden mucho y alimentan. La mayoría se <strong>remoja</strong> antes de cocinarla para que se ablande.</p>
      <table>
        <tr><th>Legumbre</th><th>Remojo</th><th>Cocción después de hervir</th></tr>
        <tr><td>Lentejas</td><td>No hace falta (opcional 1 a 2 horas)</td><td>20 a 30 minutos</td></tr>
        <tr><td>Garbanzos</td><td>8 a 12 horas</td><td>1 hora y media a 2 horas</td></tr>
        <tr><td>Porotos</td><td>8 a 12 horas</td><td>1 hora a 1 hora y media</td></tr>
        <tr><td>Arvejas secas</td><td>8 horas</td><td>40 a 60 minutos</td></tr>
      </table>
      <pre><code>Garbanzos (rinde para 4 o 5 comidas)
1. Noche anterior: 500 g de garbanzos en un bol con el triple de agua.
2. Al otro día: tirá el agua del remojo y enjuagalos.
3. Olla con agua limpia que los cubra bien. Hervir.
4. Fuego bajo, tapado a medias, hasta que se aplasten con un tenedor.
5. Sal al final. Escurrí y guardá en la heladera o el freezer.</code></pre>
      <p>Una <strong>legumbre</strong> es una semilla que crece en vaina, como la arveja o el poroto. Secas duran meses en la alacena.</p>
      <p><strong>Rinden mucho:</strong> las legumbres secas casi duplican su peso al cocinarse. 500 g secos dan más o menos 1 kilo cocido.</p>
      <p><strong>Legumbre más cereal:</strong> combinar legumbres con arroz, fideos o pan (lentejas con arroz, porotos con polenta) da una proteína más completa, parecida a la de la carne.</p>
      <p><strong>Seguridad:</strong> los porotos tienen que cocinarse bien hasta estar blandos; crudos o a medio cocinar caen mal. Elegí granos enteros, sin bichitos ni piedritas.</p>
      <p>Por ejemplo, Julián compró garbanzos en lata porque no sabía cocinarlos. Después probó con secos: por el mismo dinero le rindieron para 4 comidas en vez de 1.</p>` },
    { titulo: "El guiso de lentejas", video: {"id":"qRHymy7Ue4E","t":"Cómo hacer guiso de lentejas · Paulina Cocina (13:07)"}, html: `
      <p class="idea">Un <strong>guiso</strong> es una comida que se cocina despacio en una olla con líquido. Junta varias técnicas: <strong>rehogar</strong>, sumar ingredientes y dejar que hierva hasta que todo esté tierno.</p>
      <pre><code>Guiso de lentejas (para 4 porciones)
Ingredientes: 300 g de lentejas, 1 cebolla, 1 morrón, 1 zanahoria,
1 papa, 1 trozo de zapallo, 1 lata de tomate o 2 tomates,
2 cucharadas de aceite, sal, pimentón, comino, laurel.
Opcional: chorizo colorado o panceta (le dan sabor, pero suben el costo).

1. Rehogá la cebolla y el morrón picados en el aceite, 5 minutos.
2. Sumá la zanahoria y la papa en cubos, 2 minutos.
3. Agregá pimentón y comino (un minuto, sin que se quemen).
4. Sumá el tomate, las lentejas lavadas y agua que cubra 3 dedos.
5. Hervir y bajar el fuego. 30 minutos, revolviendo cada tanto.
6. Si se seca, agregá agua caliente. Sal al final.</code></pre>
      <table>
        <tr><th>Paso</th><th>Qué técnica es</th><th>Lo viste en</th></tr>
        <tr><td>Rehogar la cebolla</td><td>Cocinar despacio sin dorar</td><td>Técnicas básicas</td></tr>
        <tr><td>Cortar en cubos parejos</td><td>Corte básico</td><td>Herramientas y cortes</td></tr>
        <tr><td>Hervir y que hierva bien</td><td>Seguridad: llegar a 70 °C o más</td><td>Cocinar seguro</td></tr>
        <tr><td>Hacer de más y guardar</td><td>Planificar</td><td>Planificar y comprar</td></tr>
      </table>
      <p>Las <strong>especias</strong> (pimentón, comino, orégano) son partes secas de plantas que dan sabor y color. Con ellas podés usar menos sal.</p>
      <p>Por ejemplo, Julián hizo el guiso un domingo, comió 2 porciones y congeló 2 en recipientes de helado. El miércoles solo tuvo que calentar.</p>` },
    { titulo: "Huevos: duros, revueltos y tortilla", video: {"id":"0lTy1_Eg-74","t":"Huevo duro, huevo pasado por agua: guía del huevo cocido · Paulina Cocina (6:53)"}, html: `
      <p class="idea">El <strong>huevo</strong> es una de las proteínas más baratas y rápidas. Con 3 formas de prepararlo resolvés desayunos, almuerzos y cenas.</p>
      <table>
        <tr><th>Preparación</th><th>Cómo</th><th>Tiempo</th></tr>
        <tr><td>Pasado por agua</td><td>Al agua hirviendo, yema líquida</td><td>3 a 4 minutos</td></tr>
        <tr><td>Duro</td><td>Al agua hirviendo, después a agua fría</td><td>10 minutos</td></tr>
        <tr><td>Revuelto</td><td>Batido en sartén a fuego bajo, moviendo</td><td>2 a 3 minutos</td></tr>
        <tr><td>Tortilla</td><td>Batido con papa, cebolla o verduras, cuajado de los dos lados</td><td>10 a 15 minutos</td></tr>
      </table>
      <pre><code>Tortilla de papa (para 2)
1. 2 papas en cubos chicos y 1 cebolla en tiras.
2. Cociná en sartén con aceite a fuego medio, tapado, 15 minutos, hasta que estén blandas.
3. Batí 4 huevos con sal. Mezclá con las papas.
4. Sartén con un poco de aceite, fuego bajo, 5 minutos.
5. Dala vuelta con un plato grande y 4 minutos más.</code></pre>
      <p><strong>Cuajar</strong> es que el huevo pase de líquido a firme con el calor.</p>
      <p><strong>Seguridad con el huevo:</strong> guardalos en la heladera, en el centro (no en la puerta, donde cambia la temperatura). Frescos duran hasta 30 días desde la compra y los duros hasta 7 días. Descartá los que tienen la cáscara rota o muy sucia. Lavalos justo antes de usar, no antes de guardar. Para chicos, personas mayores y embarazadas, mejor yema y clara bien cocidas.</p>
      <p><strong>Para dar vuelta la tortilla:</strong> usá agarraderas y un plato más grande que la sartén. Hacelo sobre la pileta por si gotea aceite.</p>
      <p>Por ejemplo, Julián hierve 6 huevos el domingo y los deja en la heladera. Durante la semana los suma a ensaladas, fideos y sándwiches en 1 minuto.</p>` },
  ],
  practica: [
    "Remojá 250 g de garbanzos o porotos, cocinalos y pesalos cocidos: anotá cuánto pesaron y cuántas comidas te rindieron.",
    "Hacé el guiso de lentejas y anotá cuántas porciones salieron y cuántas guardaste.",
    "Hacé huevos duros con 10 minutos de cocción y anotá si la yema quedó firme.",
  ],
  recursos: [
    { t: "Ministerio de Salud: alimentación saludable", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable" },
    { t: "Ministerio de Salud: gráfica de las Guías Alimentarias para la Población Argentina", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable/grafico" },
    { t: "ANMAT: cómo guardar los alimentos en la heladera", url: "https://www.argentina.gob.ar/anmat/comunidad/informacion-de-interes-para-tu-salud/como-guardar-los-alimentos-en-la-heladera" },
  ],
  quiz: [
    { q: "Querés cocinar garbanzos secos mañana. ¿Qué hacés hoy?", opciones: ["Nada, se cocinan directo en 10 minutos","Los lavo con detergente","Los pongo en remojo esta noche","Los pongo en el freezer"], correcta: 2, explicacion: "Los garbanzos necesitan 8 a 12 horas de remojo. Cocinarlos directo tienta, pero tardan muchísimo y quedan duros." },
    { q: "¿Qué legumbre no necesita remojo?", opciones: ["Las lentejas","Los garbanzos","Los porotos","Ninguna, todas lo necesitan"], correcta: 0, explicacion: "Las lentejas se cocinan en 20 a 30 minutos. \"Todas lo necesitan\" tienta, pero las lentejas no." },
    { q: "Terminó el remojo de los porotos. ¿Qué hacés con esa agua?", opciones: ["Los cocino en la misma agua","Me la tomo","La guardo para la sopa","La tiro, los enjuago y los cocino en agua limpia"], correcta: 3, explicacion: "Se cocinan en agua limpia. Usar la misma tienta para no gastar agua." },
    { q: "Tenés 500 g de lentejas secas. ¿Más o menos cuánto rinden cocidas?", opciones: ["250 g","Cerca de 1 kilo","500 g","5 kilos"], correcta: 1, explicacion: "Casi duplican su peso. 500 g tienta porque parece que no cambia." },
    { q: "Querés una proteína más completa sin carne. ¿Qué combinás?", opciones: ["Lentejas con gaseosa","Arroz con fideos","Lentejas con arroz","Solo lentejas sin nada"], correcta: 2, explicacion: "Legumbre más cereal. Arroz con fideos tienta, pero son dos cereales." },
    { q: "Tus porotos quedaron duros, pero te da fiaca seguir. ¿Qué hacés?", opciones: ["Los sigo cocinando hasta que estén blandos","Los como así","Les pongo sal y listo","Los meto al freezer"], correcta: 0, explicacion: "A medio cocinar caen mal. Comerlos así tienta por el hambre." },
    { q: "Vas a empezar un guiso. ¿Qué hacés primero con la cebolla?", opciones: ["La pongo cruda al final","La hiervo aparte","La frito hasta que se ponga negra","La rehogo despacio en aceite"], correcta: 3, explicacion: "Rehogar da la base de sabor. Frita hasta negra tienta por el color, pero se quema y amarga." },
    { q: "Tu guiso se está secando. ¿Qué hacés?", opciones: ["Subo el fuego","Le agrego agua caliente","Lo dejo así","Le agrego aceite"], correcta: 1, explicacion: "Con agua caliente sigue cocinando parejo. Subir el fuego tienta, pero se pega." },
    { q: "Querés menos sal en el guiso sin perder sabor. ¿Qué usás?", opciones: ["Más sal","Caldo en cubos","Especias como pimentón y comino","Nada"], correcta: 2, explicacion: "Las especias dan sabor. El caldo en cubos tienta, pero tiene mucha sal." },
    { q: "Querés huevos duros con la yema firme. ¿Cuánto los hervís?", opciones: ["10 minutos","3 minutos","1 minuto","40 minutos"], correcta: 0, explicacion: "Diez minutos y después agua fría. 3 minutos tienta, pero es pasado por agua." },
    { q: "¿Dónde guardás los huevos en la heladera?", opciones: ["En la puerta","En la mesada","En el freezer con cáscara","En el centro, no en la puerta"], correcta: 3, explicacion: "En la puerta cambia la temperatura cada vez que abrís. La puerta tienta porque tiene hueveras." },
    { q: "Si hiciste huevos duros el domingo, ¿hasta cuándo los podés comer?", opciones: ["Un mes","Hasta unos 7 días, en la heladera","Solo el domingo","Para siempre"], correcta: 1, explicacion: "Los duros duran hasta 7 días. Un mes tienta porque eso duran los frescos." },
  ],
},
{
  id: "verduras-salsas",
  icono: "🥕",
  titulo: "Verduras, sopas y salsas",
  nivel: "Intermedio",
  objetivos: [
    "Lavar y preparar verduras de estación de varias formas",
    "Hacer una sopa de verduras que aproveche lo que hay",
    "Preparar un tuco casero y variarlo",
  ],
  lecciones: [
    { titulo: "Verduras de estación, de muchas formas", html: `
      <p class="idea">Las verduras son la mitad del plato. Para que no aburran, cambiá <strong>la forma de cocinarlas</strong>: la misma verdura cruda, hervida, salteada o al horno parece otra.</p>
      <table>
        <tr><th>Estación</th><th>Verduras que suelen abundar</th></tr>
        <tr><td>Otoño e invierno</td><td>Zapallo, acelga, espinaca, repollo, coliflor, brócoli, zanahoria, papa, batata</td></tr>
        <tr><td>Primavera y verano</td><td>Tomate, zapallito, berenjena, morrón, pepino, lechuga, choclo</td></tr>
        <tr><td>Casi todo el año</td><td>Cebolla, zanahoria, papa, ajo</td></tr>
      </table>
      <table>
        <tr><th>Forma</th><th>Ejemplo</th></tr>
        <tr><td>Cruda</td><td>Zanahoria rallada con repollo y limón</td></tr>
        <tr><td>Hervida</td><td>Acelga hervida para tarta o con huevo</td></tr>
        <tr><td>Salteada</td><td>Zapallito y cebolla con arroz</td></tr>
        <tr><td>Al horno</td><td>Zapallo, batata y papa en cubos</td></tr>
        <tr><td>En sopa o guiso</td><td>Todo lo que sobró de la semana</td></tr>
        <tr><td>Rellena</td><td>Zapallitos o morrones rellenos de arroz y queso</td></tr>
      </table>
      <p><strong>Lavado seguro:</strong> lavá las verduras con agua potable abundante, hoja por hoja en las de hoja (lechuga, acelga). Si se comen crudas, este paso es clave porque no hay cocción que mate los microbios.</p>
      <p><strong>Agua potable</strong> es agua segura para tomar: de red o tratada. Si no estás seguro del agua de tu casa, consultá al municipio o a la empresa de agua.</p>
      <p><strong>Aprovechar todo:</strong> las hojas de la remolacha se cocinan como acelga; el tallo del brócoli, pelado, se corta en cubos y se saltea.</p>
      <p>Por ejemplo, a Julián no le gustaba el zapallo hervido. Lo probó al horno con pimentón y le encantó: ahora es su verdura de invierno más barata.</p>` },
    { titulo: "La sopa de verduras", html: `
      <p class="idea">La <strong>sopa</strong> es la receta más económica: usa las verduras que tenés, rinde para varios días y se congela bien.</p>
      <pre><code>Sopa de verduras (para 5 o 6 platos)
1. Rehogá 1 cebolla y 1 puerro (o la parte verde de una cebolla de verdeo).
2. Sumá en cubos chicos lo que haya: zanahoria, papa, zapallo, apio, zapallito.
3. Cubrí con agua (unos 2 litros). Hervir.
4. Fuego bajo 25 a 30 minutos, hasta que todo esté blando.
5. Al final, si querés: un puñado de fideos chicos, arroz o lentejas.
6. Sal, pimienta y perejil picado.
Variante: licuada o pisada con el pisapapas, queda una crema.</code></pre>
      <table>
        <tr><th>Para que rinda y alimente</th><th>Cómo</th></tr>
        <tr><td>Que llene</td><td>Sumar legumbres, fideos o arroz</td></tr>
        <tr><td>Proteína</td><td>Un huevo batido al final, o legumbres</td></tr>
        <tr><td>Sabor sin mucha sal</td><td>Laurel, perejil, ajo, un chorrito de aceite crudo al servir</td></tr>
        <tr><td>Guardarla</td><td>Enfriar en recipientes chicos y heladera; o freezer en porciones</td></tr>
      </table>
      <p>Un <strong>caldo</strong> es el líquido con sabor que queda al hervir verduras, huesos o carne. Hacerlo en casa es más barato y tiene menos sal que los cubitos.</p>
      <p><strong>Licuar caliente:</strong> dejá que se enfríe un poco y llená la licuadora hasta la mitad, con la tapa apretada con un repasador. El vapor puede hacer saltar la tapa y quemarte.</p>
      <p>Por ejemplo, el jueves Julián tenía media zanahoria, un pedazo de zapallo, 2 papas y una cebolla medio seca. Hizo sopa y le salieron 5 platos para la semana.</p>` },
    { titulo: "El tuco y sus variantes", video: {"id":"GZkDaCp-ty8","t":"Mi receta de tuco (salsa de tomate casera) · Paulina Cocina (14:23)"}, html: `
      <p class="idea">El <strong>tuco</strong> (salsa de tomate) es la base de muchas comidas: fideos, polenta, arroz, pizza, albóndigas. Hacerlo en casa sale más barato y tiene menos sal y azúcar que el de frasco.</p>
      <pre><code>Tuco básico (para 4 platos de fideos)
1. Rehogá 1 cebolla y 1 morrón picados en 2 cucharadas de aceite, 8 minutos.
2. Sumá 1 diente de ajo picado, 1 minuto (sin que se queme).
3. Agregá 2 latas o 1 caja de tomate triturado (unos 800 g).
4. Orégano, laurel, sal y una pizca de azúcar si está muy ácido.
5. Fuego bajo 20 a 30 minutos, revolviendo. Si salpica, tapalo a medias.</code></pre>
      <table>
        <tr><th>Variante</th><th>Qué le sumás</th><th>Con qué va</th></tr>
        <tr><td>Con verduras</td><td>Zanahoria rallada, zapallito en cubitos</td><td>Fideos, polenta</td></tr>
        <tr><td>Con lentejas</td><td>Lentejas cocidas</td><td>Fideos, "boloñesa" sin carne</td></tr>
        <tr><td>Con carne</td><td>Carne picada dorada antes del tomate</td><td>Fideos, polenta, ravioles</td></tr>
        <tr><td>Para pizza</td><td>Más espeso, con orégano</td><td>Pizza casera</td></tr>
      </table>
      <p><strong>Ácido</strong> es el gusto agrio del tomate. Una pizca de azúcar o una zanahoria rallada lo suavizan.</p>
      <p><strong>Cuidado con la salpicadura:</strong> el tuco hierve haciendo burbujas que saltan y queman. Fuego bajo y tapa a medias.</p>
      <p><strong>Para la semana:</strong> hacé el doble y guardá la mitad en el freezer en porciones. Aguanta unos meses.</p>
      <p>Para la pizza casera con masa propia, está el curso <strong>Panadería casera</strong> de este sitio.</p>
      <p>Por ejemplo, Julián hace 2 litros de tuco con lentejas una vez por mes y lo congela en 6 frascos. Cada frasco es una cena de fideos.</p>` },
  ],
  practica: [
    "Anotá 5 verduras de estación de tu verdulería y su precio por kilo.",
    "Cociná la misma verdura de 2 formas distintas (por ejemplo, hervida y al horno) y anotá cuál te gustó más.",
    "Hacé la sopa con lo que tengas en la heladera y anotá cuántos platos salieron.",
    "Hacé el tuco básico y congelá al menos 2 porciones con la fecha anotada.",
  ],
  recursos: [
    { t: "Ministerio de Salud: gráfica de las Guías Alimentarias para la Población Argentina", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable/grafico" },
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "Precios Claros: comparar precios de supermercados", url: "https://www.preciosclaros.gob.ar/" },
  ],
  quiz: [
    { q: "Estás en invierno y querés verdura barata para el horno. ¿Qué elegís?", opciones: ["Berenjena y tomate","Choclo","Zapallo y batata","Pepino"], correcta: 2, explicacion: "Son de invierno. La berenjena tienta porque es rica al horno, pero es de verano." },
    { q: "Te aburre siempre la misma verdura. ¿Qué hacés?", opciones: ["La cocino de otra forma: al horno, salteada, en sopa","La dejo de comer","Le pongo más sal","Compro snacks"], correcta: 0, explicacion: "Cambiar la forma la hace otra. Más sal tienta, pero no la cambia." },
    { q: "Si vas a hacer una ensalada de lechuga, ¿cómo la lavás?", opciones: ["La planta entera bajo la canilla un segundo","No hace falta","Con detergente","Hoja por hoja con agua potable abundante"], correcta: 3, explicacion: "Cruda no hay cocción que mate microbios. Lavarla entera tienta por rápido, pero la tierra queda entre las hojas." },
    { q: "¿Qué es el agua potable?", opciones: ["Cualquier agua","Agua segura para tomar","Agua con gas","Agua de lluvia siempre"], correcta: 1, explicacion: "Es la de red o tratada. Agua de lluvia tienta porque parece limpia, pero no siempre es segura." },
    { q: "Compraste brócoli. ¿Qué hacés con el tallo?", opciones: ["Lo tiro","Lo como crudo sin lavar","Lo pelo, lo corto en cubos y lo salteo","Lo uso de decoración"], correcta: 2, explicacion: "El tallo se come. Tirarlo tienta por costumbre." },
    { q: "Te quedaron verduras sueltas el jueves. ¿Qué hacés?", opciones: ["Una sopa con todo","Las tiro","Las guardo hasta que se pudran","Compro verduras nuevas para sopa"], correcta: 0, explicacion: "La sopa usa lo que hay. Comprar nuevas tienta para que quede \"bien\", pero gastás de más." },
    { q: "Tu sopa no llena. ¿Qué le sumás?", opciones: ["Más agua","Más sal","Nada","Legumbres, fideos o arroz"], correcta: 3, explicacion: "Así rinde y llena. Más agua tienta para que haya más, pero queda aguada." },
    { q: "Vas a licuar la sopa caliente. ¿Cómo lo hacés seguro?", opciones: ["La lleno hasta arriba hirviendo","La dejo enfriar un poco y lleno la licuadora hasta la mitad con la tapa apretada","Licuo sin tapa","Meto la mano para revolver"], correcta: 1, explicacion: "El vapor puede hacer saltar la tapa. Llenarla hasta arriba tienta para hacerlo de una vez." },
    { q: "¿Por qué conviene hacer caldo en casa?", opciones: ["Porque tarda menos","Porque los cubitos son ilegales","Es más barato y tiene menos sal que los cubitos","No conviene"], correcta: 2, explicacion: "Menos sal y aprovechás. \"Tarda menos\" tienta, pero tarda más que un cubito." },
    { q: "Tu tuco quedó muy ácido. ¿Qué hacés?", opciones: ["Le pongo una pizca de azúcar o zanahoria rallada","Le pongo más tomate","Le pongo vinagre","Lo tiro"], correcta: 0, explicacion: "Suavizan lo agrio. Más tomate tienta, pero sigue igual de ácido." },
    { q: "El tuco salpica mientras hierve. ¿Qué hacés?", opciones: ["Subo el fuego","Lo dejo y me voy","Me acerco a mirar","Bajo el fuego y lo tapo a medias"], correcta: 3, explicacion: "Las burbujas saltan y queman. Subir el fuego tienta para terminar antes." },
    { q: "Querés tuco para todo el mes. ¿Qué hacés?", opciones: ["Lo dejo en la heladera un mes","Hago el doble y congelo porciones con fecha","Lo dejo en la mesada","Hago una porción por día"], correcta: 1, explicacion: "En el freezer dura meses. En la heladera un mes tienta, pero se echa a perder." },
  ],
},
{
  id: "conservar",
  icono: "🧊",
  titulo: "Guardar, congelar y aprovechar",
  nivel: "Intermedio",
  objetivos: [
    "Ordenar la heladera según las recomendaciones de ANMAT",
    "Congelar en porciones, rotular y descongelar de forma segura",
    "Transformar sobras en comidas nuevas sin riesgos",
  ],
  lecciones: [
    { titulo: "Ordenar la heladera", html: `
      <p class="idea">Cada alimento tiene su <strong>lugar en la heladera</strong>. Ordenarla bien evita la contaminación cruzada y hace que todo dure más.</p>
      <pre><code>  ┌──────────────────────────────┐ ┌──────────┐
  │ Arriba: cocidos y sobras      │ │ Puerta:  │
  │ (tapados, en envases bajos)   │ │ bebidas, │
  ├──────────────────────────────┤ │ salsas,  │
  │ Medio: lácteos, quesos,       │ │ aderezos │
  │ fiambres; huevos al centro    │ │ (no los  │
  ├──────────────────────────────┤ │ huevos)  │
  │ Abajo: carnes crudas tapadas  │ │          │
  ├──────────────────────────────┤ │          │
  │ Cajones: frutas y verduras    │ │          │
  └──────────────────────────────┘ └──────────┘</code></pre>
      <table>
        <tr><th>Carne cruda en heladera (ANMAT)</th><th>Cuánto dura</th></tr>
        <tr><td>Carne picada o pollo</td><td>1 a 2 días</td></tr>
        <tr><td>Carne vacuna o de cerdo</td><td>3 a 5 días</td></tr>
        <tr><td>Pescado</td><td>1 a 3 días</td></tr>
      </table>
      <p><strong>Por qué la carne va abajo:</strong> si gotea, no cae sobre lo que ya está listo para comer.</p>
      <p><strong>Sobras cocidas:</strong> tapadas, en el estante de arriba, y comelas en 2 o 3 días. Si no las vas a comer, congelalas el mismo día.</p>
      <p><strong>Lo primero que entra, lo primero que sale:</strong> poné adelante lo más viejo y atrás lo nuevo, así no se te vence nada.</p>
      <p><strong>No la llenes de más</strong> y no metas ollas hirviendo: el aire frío tiene que circular. Dejá entibiar unos minutos y guardá en recipientes chicos.</p>
      <p>Por ejemplo, Julián guardaba el pollo crudo arriba "porque había lugar" y un día goteó sobre el queso. Lo pasó abajo, en un recipiente tapado.</p>` },
    { titulo: "Congelar y descongelar", html: `
      <p class="idea">El <strong>freezer</strong> frena a los microbios y te permite cocinar un día para muchos. La clave: <strong>porciones, fecha y descongelar bien</strong>.</p>
      <table>
        <tr><th>En el freezer (ANMAT)</th><th>Cuánto dura</th></tr>
        <tr><td>Pollo</td><td>9 a 12 meses</td></tr>
        <tr><td>Carne vacuna, de cerdo o cordero</td><td>6 a 12 meses</td></tr>
        <tr><td>Pescado</td><td>6 a 8 meses</td></tr>
        <tr><td>Frutas y verduras</td><td>8 a 12 meses</td></tr>
      </table>
      <pre><code>Para congelar bien
1. Enfriá primero (recipientes chicos, poco tiempo afuera).
2. Porciones de una comida: así sacás solo lo que usás.
3. Recipiente o bolsa bien cerrada, sacando el aire.
4. Rotulá: qué es y la fecha. Ej.: "Guiso lentejas · 14/6".
5. Lo de adelante se usa primero.

Para descongelar
- En la heladera, de un día para el otro.
- O en el microondas, y cocinar enseguida.
- Nunca en la mesada.
- Lo descongelado no se vuelve a congelar crudo.</code></pre>
      <p><strong>Rotular</strong> es poner una etiqueta con lo que es y la fecha. Sirve un pedazo de cinta de papel y un marcador.</p>
      <p><strong>El freezer frena, no mata:</strong> si algo entró en mal estado, sale en mal estado. Congelá comida fresca o recién cocinada.</p>
      <p>Los tiempos de la tabla son para que el alimento conserve la calidad. Las comidas caseras ya cocidas (guisos, salsas) conviene usarlas en 2 o 3 meses.</p>
      <p>Por ejemplo, Julián encontró en el fondo del freezer un recipiente sin nombre ni fecha. No sabía qué era ni de cuándo y lo tiró. Desde entonces rotula todo.</p>` },
    { titulo: "Sobras que se transforman", html: `
      <p class="idea">Una sobra no es un problema: es <strong>la base de otra comida</strong>. Con un poco de idea, lo del lunes se convierte en algo nuevo el martes.</p>
      <table>
        <tr><th>Sobra</th><th>Se convierte en</th></tr>
        <tr><td>Arroz</td><td>Arroz salteado con verduras y huevo, o tortilla de arroz</td></tr>
        <tr><td>Fideos</td><td>Fideos salteados, o al horno con tuco y queso</td></tr>
        <tr><td>Pollo al horno</td><td>Sándwich, ensalada, relleno de tarta o empanadas</td></tr>
        <tr><td>Verduras al horno</td><td>Tarta, tortilla, sopa crema</td></tr>
        <tr><td>Pan duro</td><td>Pan rallado, budín de pan, croutones (cubitos tostados para la sopa)</td></tr>
        <tr><td>Puré</td><td>Croquetas, pastel de papa</td></tr>
        <tr><td>Fruta muy madura</td><td>Licuado, compota, budín</td></tr>
      </table>
      <p><strong>Recalentar seguro:</strong> calentá la sobra hasta que humee bien en todas partes y revolvé a la mitad si usás microondas. Recalentá <strong>una sola vez</strong>: sacá solo la porción que vas a comer.</p>
      <p><strong>Cuándo no aprovechar:</strong> si estuvo más de 2 horas afuera, si tiene olor o color raro, o si pasaron más de 3 días en la heladera. Ante la duda, a la basura.</p>
      <p><strong>Desperdicio de alimentos</strong> es la comida que se tira aunque se podría haber comido. Planificar, guardar bien y transformar sobras lo baja mucho, y es plata que no se tira.</p>
      <p>Para usar fruta madura en budines y tortas, está el curso <strong>Pastelería básica</strong> de este sitio.</p>
      <p>Por ejemplo, a Julián le sobró arroz y media bandeja de verduras al horno. Las salteó juntas con 2 huevos y tuvo una cena nueva en 10 minutos.</p>` },
  ],
  practica: [
    "Ordená tu heladera con el dibujo de la lección y anotá 3 cosas que cambiaste de lugar.",
    "Congelá 3 porciones de una comida con su rótulo (qué es y fecha) y anotá cuándo usaste cada una.",
    "Transformá una sobra en otra comida con la tabla y anotá qué hiciste.",
    "Durante 1 semana, anotá todo lo que tirás y por qué; al final contá cuántas cosas fueron.",
  ],
  recursos: [
    { t: "ANMAT: cómo guardar los alimentos en la heladera", url: "https://www.argentina.gob.ar/anmat/comunidad/informacion-de-interes-para-tu-salud/como-guardar-los-alimentos-en-la-heladera" },
    { t: "Ministerio de Salud: enfermedades transmitidas por alimentos", url: "https://www.argentina.gob.ar/enfermedades-transmitidas-por-alimentos" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "Curso de este sitio: Pastelería básica", url: "https://pkeios.github.io/EiaLearning/pasteleria/" },
  ],
  quiz: [
    { q: "Tenés carne cruda y un tupper de fideos cocidos. ¿Dónde va cada uno?", opciones: ["La carne arriba y los fideos abajo","Los dos en la puerta","La carne abajo tapada y los fideos arriba","Da igual"], correcta: 2, explicacion: "Si la carne gotea, no cae sobre lo listo para comer. \"Da igual\" tienta si hay lugar en cualquier estante." },
    { q: "Compraste carne picada el lunes para la heladera. ¿Hasta cuándo la usás?", opciones: ["Hasta el martes o el miércoles: 1 a 2 días","Hasta el domingo","Hasta fin de mes","Cuando se te ocurra"], correcta: 0, explicacion: "La picada dura poco. Hasta el domingo tienta, pero eso es mucho para la picada." },
    { q: "Te sobró guiso que no vas a comer en estos días. ¿Qué hacés?", opciones: ["Lo dejo en la heladera 10 días","Lo dejo en la mesada","Lo congelo en una semana","Lo congelo el mismo día"], correcta: 3, explicacion: "Congelado el mismo día, está fresco. Congelarlo en una semana tienta, pero ya puede estar mal." },
    { q: "Vas a guardar la olla de sopa hirviendo. ¿Qué hacés?", opciones: ["La meto hirviendo en la heladera","La dejo entibiar unos minutos y la paso a recipientes chicos","La dejo afuera toda la noche","La pongo al sol"], correcta: 1, explicacion: "Hirviendo calienta todo lo demás. Afuera toda la noche tienta, pero pasa horas en la zona de peligro." },
    { q: "En la heladera, ¿dónde ponés lo más viejo?", opciones: ["Atrás","En el freezer","Adelante, para usarlo primero","Arriba de todo, escondido"], correcta: 2, explicacion: "Lo primero que entra, lo primero que sale. Atrás tienta porque ahí hay lugar, pero se te olvida." },
    { q: "Si vas a congelar guiso, ¿cómo lo guardás?", opciones: ["En porciones de una comida, cerradas y con fecha","En una olla grande sin nombre","En bolsas abiertas","Sin enfriar"], correcta: 0, explicacion: "Sacás solo lo que vas a usar. La olla grande tienta por cómoda, pero tenés que descongelar todo." },
    { q: "Encontrás un recipiente en el freezer sin nombre ni fecha. ¿Qué aprendés?", opciones: ["Que el freezer conserva todo para siempre","Que hay que comerlo igual","Nada","Que hay que rotular todo con qué es y la fecha"], correcta: 3, explicacion: "Sin rótulo no sabés qué es ni cuándo lo hiciste. \"Para siempre\" tienta, pero la calidad se pierde." },
    { q: "Si metiste comida medio pasada en el freezer, ¿qué pasa al descongelarla?", opciones: ["Sale como nueva","Sigue en mal estado: el freezer frena, no mata","Se arregla sola","Queda mejor"], correcta: 1, explicacion: "Congelar no arregla lo que ya estaba mal. \"Sale como nueva\" tienta porque el frío parece limpiar." },
    { q: "Descongelaste pollo crudo y no lo usaste. ¿Qué hacés?", opciones: ["Lo vuelvo a congelar crudo","Lo dejo en la mesada para después","Lo cocino y, si quiero, congelo lo cocido","Lo tiro sin pensar"], correcta: 2, explicacion: "Crudo no se vuelve a congelar. Recongelarlo tienta para no desperdiciar." },
    { q: "Si te sobró arroz de ayer, guardado en la heladera, ¿qué podés hacer?", opciones: ["Arroz salteado con verduras y huevo","Tirarlo","Comerlo frío del día anterior que quedó afuera","Guardarlo una semana más"], correcta: 0, explicacion: "La sobra es base de otra comida. Tirarlo tienta por costumbre." },
    { q: "Si vas a recalentar una sobra en el microondas, ¿cómo?", opciones: ["Todo el recipiente cada vez","Apenas tibia","Tres veces el mismo plato","Solo la porción que como, hasta que humee bien, revolviendo a la mitad"], correcta: 3, explicacion: "Se recalienta una vez y bien caliente. Tibia tienta por rápido, pero es la zona de peligro." },
    { q: "Una sobra estuvo 4 horas en la mesada. ¿Qué hacés?", opciones: ["La caliento fuerte y la como","La tiro","La guardo en la heladera","La huelo y si está bien, la como"], correcta: 1, explicacion: "Más de 2 horas afuera es riesgo. Calentarla fuerte tienta, pero algunas toxinas no se van con el calor." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu semana de comidas",
  nivel: "Avanzado",
  objetivos: [
    "Planificar una semana de comidas con el plato equilibrado y su lista de compras",
    "Calcular el costo de la semana y de cada porción",
    "Cocinar en tanda, guardar seguro y evaluar el resultado con una rúbrica",
  ],
  lecciones: [
    { titulo: "Planificá tu semana", html: `
      <p class="idea">El proyecto final es <strong>comer una semana entera cocinando vos</strong>, con un menú equilibrado, una lista de compras y un costo calculado. Junta todo el curso.</p>
      <pre><code>Plantilla del proyecto
Personas: ___   Comidas por día que cocinás: ___

Menú (5 a 7 días):
Día        Almuerzo                Cena
______     ______________________  ______________________
...
¿Cada comida tiene verduras (medio plato)?  sí / no
¿Hay legumbres al menos 2 veces?            sí / no
¿Qué preparaciones dan para 2 comidas?      ______________

Lista de compras (con cantidades):
Verdulería: ____________________________
Almacén:    ____________________________
Carnicería o granja: ___________________</code></pre>
      <table>
        <tr><th>Para que sea posible</th><th>Cómo</th></tr>
        <tr><td>Recetas que ya hiciste</td><td>Las del curso: guiso, tortilla, sopa, tuco, verduras al horno, arroz</td></tr>
        <tr><td>Ingredientes que se repiten</td><td>La cebolla y el zapallo van en varias recetas</td></tr>
        <tr><td>Un día de "lo que haya"</td><td>Para usar las sobras</td></tr>
        <tr><td>Algo rápido</td><td>Huevos duros, arroz salteado, por si un día no tenés tiempo</td></tr>
      </table>
      <p><strong>Si tenés una dieta especial</strong> (celiaquía, diabetes, una indicación médica), adaptá el menú con tu médico o nutricionista.</p>
      <p>Por ejemplo, Julián planificó 5 días de almuerzo y cena con 5 recetas: guiso de lentejas, tortilla, tuco, sopa y verduras al horno con pollo.</p>` },
    { titulo: "Calculá el costo", html: `
      <p class="idea">Saber <strong>cuánto cuesta cada porción</strong> te deja comparar con el delivery y decidir mejor. La cuenta es simple: lo que gastaste dividido las porciones que salieron.</p>
      <pre><code>Costo por porción = costo de los ingredientes ÷ porciones

Ejemplo con precios inventados para la cuenta:
Guiso de lentejas (4 porciones)
  Lentejas 300 g ........ $1.200
  Verduras .............. $2.000
  Tomate en lata ........ $1.000
  Aceite y especias ..... $  400
  Total ................. $4.600
  Por porción: 4.600 ÷ 4 = $1.150

Comparalo con lo que cuesta un plato de delivery en tu barrio.</code></pre>
      <table>
        <tr><th>Paso</th><th>Cómo</th></tr>
        <tr><td>1. Guardá los tickets</td><td>O anotá cada precio en el celular</td></tr>
        <tr><td>2. Ingredientes que no usás enteros</td><td>Contá solo la parte usada (300 g de un paquete de 1 kg: el 30% del precio)</td></tr>
        <tr><td>3. Dividí por porciones</td><td>Contá las porciones reales, no las de la receta</td></tr>
        <tr><td>4. Sumá la semana</td><td>Total de la semana y promedio por comida</td></tr>
      </table>
      <p>Un <strong>promedio</strong> es el total dividido la cantidad: si la semana costó $30.000 y fueron 10 comidas, cada comida costó en promedio $3.000.</p>
      <p><strong>Los precios cambian mucho:</strong> hacé la cuenta con los tuyos. Para comparar súper, usá Precios Claros.</p>
      <p>Por ejemplo, Julián sumó sus tickets de la semana y le dio un promedio por comida mucho menor que el plato de delivery que pedía antes. Con la diferencia pagó parte del abono del colectivo.</p>` },
    { titulo: "Cociná en tanda y evaluá con la rúbrica", html: `
      <p class="idea">Cocinar <strong>en tanda</strong> es dedicar 2 o 3 horas un día a preparar varias cosas a la vez para toda la semana. Después evaluás tu semana con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <pre><code>Tanda de domingo (unas 3 horas)
0:00  Prender el horno a 200 °C. Poner legumbres a hervir (remojadas).
0:15  Bandeja de verduras y pollo al horno.
0:20  Guiso o tuco en la hornalla.
0:45  Arroz. Huevos duros.
1:00  Dar vuelta las verduras. Revolver el guiso.
1:30  Sacar el horno. Apagar el guiso.
1:45  Enfriar en recipientes chicos. Lavar mientras tanto.
2:30  Rotular y guardar: heladera lo de 2 o 3 días, freezer el resto.</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Plato equilibrado</td><td>Verduras en casi todas las comidas</td><td>En la mitad</td><td>Casi nunca</td></tr>
        <tr><td>Planificación</td><td>Menú y lista con cantidades</td><td>Solo menú</td><td>Sin plan</td></tr>
        <tr><td>Costo</td><td>Costo por porción y de la semana</td><td>Solo el total</td><td>Sin cuenta</td></tr>
        <tr><td>Seguridad</td><td>Cinco claves, enfriado rápido y rótulos</td><td>Algunas</td><td>Ninguna</td></tr>
        <tr><td>Aprovechamiento</td><td>Nada tirado o casi nada</td><td>Algo tirado</td><td>Mucho tirado</td></tr>
        <tr><td>Técnicas</td><td>3 técnicas distintas (hervir, saltear, horno)</td><td>2</td><td>1</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → semana lograda: repetila con recetas nuevas
7 a 9   → mejorá el criterio más bajo la semana que viene
0 a 6   → repasá los módulos de planificar y de seguridad</code></pre>
      <p><strong>Cuidado en la tanda:</strong> con muchas hornallas y el horno prendidos, no dejes la cocina sola, ventilá y mantené los mangos hacia adentro.</p>
      <p>Por ejemplo, Julián sacó 10 de 12 en su primera semana: tiró media lechuga y solo anotó el total. La segunda semana anotó el costo por porción y compró la lechuga para usarla en 2 días.</p>` },
  ],
  practica: [
    "Completá la plantilla con el menú de 5 días y la lista de compras, y anotá cuántas recetas distintas usaste.",
    "Calculá el costo por porción de 2 recetas de tu menú y el promedio por comida de la semana.",
    "Hacé una tanda de cocina, rotulá todo y anotá cuántas porciones guardaste en la heladera y cuántas en el freezer.",
    "Al terminar la semana, puntuala con la rúbrica y anotá tu total de 12.",
  ],
  recursos: [
    { t: "Ministerio de Salud: gráfica de las Guías Alimentarias para la Población Argentina", url: "https://www.argentina.gob.ar/salud/alimentacion-saludable/grafico" },
    { t: "Precios Claros: comparar precios de supermercados", url: "https://www.preciosclaros.gob.ar/" },
    { t: "ANMAT: cómo guardar los alimentos en la heladera", url: "https://www.argentina.gob.ar/anmat/comunidad/informacion-de-interes-para-tu-salud/como-guardar-los-alimentos-en-la-heladera" },
  ],
  quiz: [
    { q: "Vas a planificar tu semana. ¿Qué recetas elegís?", opciones: ["7 recetas nuevas y difíciles","Solo delivery","Recetas que ya hiciste en el curso","Una sola receta para toda la semana"], correcta: 2, explicacion: "Con recetas conocidas es posible. 7 nuevas tientan por variedad, pero es fácil abandonar." },
    { q: "Tu menú tiene verduras solo en 2 de 10 comidas. ¿Qué te falta?", opciones: ["Medio plato de verduras en más comidas","Más fideos","Nada","Más postres"], correcta: 0, explicacion: "El plato equilibrado lleva medio plato de verduras. \"Nada\" tienta si el menú ya está armado." },
    { q: "Querés usar las sobras de la semana. ¿Qué agregás al plan?", opciones: ["Un día de delivery","Comprar más","Nada","Un día de \"lo que haya\""], correcta: 3, explicacion: "Ese día usa lo que sobró. El delivery tienta por descanso, pero tirás lo que sobra." },
    { q: "Tenés celiaquía y armás tu semana. ¿Qué hacés?", opciones: ["Uso el menú igual","Adapto el menú con mi médico o nutricionista","No como nada","Le saco solo el pan"], correcta: 1, explicacion: "Una dieta especial necesita un profesional. Sacar solo el pan tienta, pero hay gluten en otras cosas." },
    { q: "Gastaste $4.600 en un guiso que dio 4 porciones. ¿Cuánto cuesta cada una?", opciones: ["$4.600","$18.400","$1.150","$460"], correcta: 2, explicacion: "Dividís 4.600 por 4. $4.600 tienta porque es el número que tenés a mano." },
    { q: "Usaste 300 g de un paquete de lentejas de 1 kg. ¿Qué parte del precio contás?", opciones: ["El 30%","El 100%","Nada","El 3%"], correcta: 0, explicacion: "300 de 1.000 es el 30%. El 100% tienta porque pagaste el paquete entero, pero el resto sirve para otra comida." },
    { q: "Si la receta dice 6 porciones y te salieron 4, ¿con cuántas dividís?", opciones: ["Con 6, las de la receta","Con 10","No se divide","Con 4, las reales"], correcta: 3, explicacion: "Contá lo que salió de verdad. Las de la receta tientan porque están escritas." },
    { q: "La semana costó $30.000 y fueron 10 comidas. ¿Cuál es el promedio por comida?", opciones: ["$300","$3.000","$30.000","$10"], correcta: 1, explicacion: "Total dividido cantidad. $300 tienta si te equivocás en un cero." },
    { q: "En la tanda, ¿qué hacés con las preparaciones calientes al terminar?", opciones: ["Las dejo en las ollas hasta la noche","Las meto hirviendo en la heladera llena","Las enfrío en recipientes chicos, las rotulo y las guardo","Las guardo sin rótulo"], correcta: 2, explicacion: "Enfriar rápido y rotular. Dejarlas en las ollas tienta por cansancio, pero pasan horas en la zona de peligro." },
    { q: "Tenés horno y 3 hornallas prendidas en la tanda. ¿Qué cuidás?", opciones: ["No dejar la cocina sola, ventilar y mangos hacia adentro","Irte a dormir la siesta","Cerrar todas las ventanas","Dejar mangos hacia afuera para agarrarlos rápido"], correcta: 0, explicacion: "Mucho fuego, más atención. Los mangos afuera tientan por cómodos, pero se enganchan." },
    { q: "Si en la rúbrica sacaste 1 en \"Costo\" porque solo anotaste el total, ¿qué te faltó?", opciones: ["Más tickets","Gastar menos","Nada","El costo por porción"], correcta: 3, explicacion: "Para 2 puntos hace falta costo por porción y de la semana. Gastar menos tienta, pero el criterio es la cuenta." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Abandono","Mejoro el criterio más bajo la semana que viene","Vuelvo al delivery","Cambio todas las recetas"], correcta: 1, explicacion: "De 7 a 9, falta pulir uno. Cambiar todo tienta, pero perdés lo que ya te sale bien." },
  ],
},
];
