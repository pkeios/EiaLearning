// Temario del curso "Carpintería básica". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js carpinteria y node tools/metodologia.js carpinteria
window.TEMARIO = [
{
  id: "seguridad",
  icono: "🦺",
  titulo: "Un taller seguro antes del primer corte",
  nivel: "Básico",
  objetivos: [
    "Elegir la protección justa para cada tarea: anteojos, protección auditiva y barbijo",
    "Preparar el lugar de trabajo: pieza bien sujeta, buena luz, orden y herramientas afiladas",
    "Reconocer qué trabajos no hacer solo y cuándo hace falta un profesional matriculado",
  ],
  lecciones: [
    { titulo: "La protección justa para cada tarea", html: `
      <p class="idea">La carpintería es segura si se respetan unas pocas reglas, y peligrosa si se saltean. Antes de tocar una herramienta, poné la protección que corresponde a lo que vas a hacer. No es exageración: un ojo o un dedo no se reponen.</p>
      <p>La guía de seguridad para carpintería de OSHA, el organismo de seguridad laboral de Estados Unidos, recomienda anteojos de seguridad, protección para los oídos y barbijo para el polvo, y advierte contra la ropa suelta y las alhajas, que se pueden enganchar en una herramienta que gira.</p>
      <table>
        <tr><th>Tarea</th><th>Protección</th></tr>
        <tr><td>Cualquier corte, perforación o golpe</td><td>Anteojos de seguridad (siempre)</td></tr>
        <tr><td>Herramientas eléctricas que hacen ruido (sierra, lijadora)</td><td>Protectores auditivos (tapones u orejeras)</td></tr>
        <tr><td>Lijar o cortar tableros como MDF</td><td>Barbijo para polvo, y trabajar ventilado</td></tr>
        <tr><td>Barnices, lacas, solventes</td><td>Lugar ventilado, guantes de nitrilo y barbijo para vapores si lo indica el envase</td></tr>
      </table>
      <p><strong>Lo que no se usa:</strong></p>
      <ul>
        <li><strong>Ropa suelta, mangas anchas, bufandas, pelo largo suelto:</strong> se enganchan en el taladro o la sierra.</li>
        <li><strong>Anillos, pulseras, relojes:</strong> mismo motivo.</li>
        <li><strong>Guantes con herramientas que giran</strong> (taladro, amoladora, sierra de banco): el guante se puede enganchar y arrastrar la mano. Los guantes sirven para mover tablas o aplicar productos, no para cortar con máquinas.</li>
        <li><strong>Ojotas o zapatillas de tela:</strong> usá calzado cerrado y firme.</li>
      </ul>
      <p>Por ejemplo, para cortar una tabla con una sierra caladora: anteojos, protectores auditivos, ropa ajustada, sin anillos, calzado cerrado y la pieza sujeta con prensas. Parece mucho la primera vez; a la tercera ya es costumbre.</p>` },
    { titulo: "El lugar de trabajo", html: `
      <p class="idea">La mayoría de los accidentes de quien empieza vienen de cosas simples: la pieza que se mueve, poca luz, apuro o una herramienta desafilada que obliga a hacer fuerza. Un buen lugar de trabajo previene casi todo.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td><strong>La pieza siempre sujeta</strong> con prensas o sargentos, nunca con la mano</td><td>Si la pieza se mueve, la herramienta se escapa hacia vos</td></tr>
        <tr><td><strong>Buena luz</strong></td><td>Ves la línea de corte y dónde están tus manos</td></tr>
        <tr><td><strong>Herramientas afiladas</strong></td><td>Una herramienta sin filo obliga a empujar fuerte, y cuando se escapa lo hace con fuerza</td></tr>
        <tr><td><strong>Mesa firme y a buena altura</strong></td><td>Una mesa que se mueve arruina el corte y te desequilibra</td></tr>
        <tr><td><strong>Orden y piso despejado</strong></td><td>Tropezarte con un cable mientras cortás es de los peores accidentes</td></tr>
        <tr><td><strong>Sin apuro y sin cansancio</strong></td><td>La mayoría de los cortes mal hechos son los últimos del día</td></tr>
      </table>
      <p><strong>Las manos, siempre detrás del filo.</strong> Con un formón o un cúter, la mano que sostiene la pieza va detrás de la dirección en que corta la herramienta, nunca adelante. Si la herramienta se escapa, va hacia la madera, no hacia vos.</p>
      <p><strong>Antes de cambiar una mecha o una hoja, desenchufá.</strong> No alcanza con apagar el botón: un toque sin querer la vuelve a encender.</p>
      <p><strong>Electricidad:</strong> usá enchufes y alargues en buen estado, con descarga a tierra, y no conectes muchas herramientas a un mismo alargue. Si necesitás un enchufe nuevo en el taller, eso es trabajo de la instalación eléctrica de la casa: lo hace un electricista matriculado, no es parte de este curso.</p>
      <p>Por ejemplo, un buen hábito antes de empezar: mirar el piso, la mesa, la luz y el cable de la herramienta. Diez segundos que evitan la mayoría de los problemas.</p>` },
    { titulo: "Qué no hacer solo y qué hacer si te lastimás", html: `
      <p class="idea">Hay herramientas y trabajos que no son para empezar solo, aunque se vean en videos. Saber cuáles son es parte de aprender un oficio.</p>
      <table>
        <tr><th>No para empezar solo</th><th>Por qué</th><th>Qué hacer</th></tr>
        <tr><td>Sierra de banco o circular de mesa</td><td>Según OSHA, el rebote (la sierra lanza la pieza hacia vos) es uno de sus riesgos principales</td><td>Aprender con alguien con experiencia o en un curso presencial</td></tr>
        <tr><td>Amoladora con disco de corte de madera</td><td>Muy peligrosa: no está pensada para madera</td><td>No usarla para madera</td></tr>
        <tr><td>Instalación eléctrica o de gas de la casa</td><td>En Argentina la hace un profesional matriculado</td><td>Llamar a un matriculado</td></tr>
        <tr><td>Trabajos en altura (techos, escaleras altas)</td><td>Riesgo de caída grave</td><td>Con alguien que ayude y equipo adecuado, o un profesional</td></tr>
      </table>
      <p>En este curso trabajás con herramientas de mano y eléctricas portátiles (taladro, atornillador, sierra caladora, lijadora), que son las más seguras para empezar.</p>
      <p><strong>Si te lastimás:</strong></p>
      <ul>
        <li><strong>Un corte chico:</strong> lavá con agua y jabón, presioná con una gasa limpia hasta que pare de sangrar y cubrí.</li>
        <li><strong>Una astilla:</strong> si es chica y superficial, sacala con una pinza limpia. Si es grande, profunda o cerca del ojo, no la saques vos: andá a una guardia.</li>
        <li><strong>Un corte profundo, que no para de sangrar, o algo en el ojo:</strong> andá a una guardia o llamá a emergencias. No es momento de terminar el corte.</li>
      </ul>
      <p>Esto no reemplaza un curso de primeros auxilios: tener uno hecho es muy recomendable si vas a trabajar en un taller. Y tené un botiquín a mano en el lugar donde trabajás.</p>
      <p>Por ejemplo, si un video muestra a alguien cortando sin protección o sosteniendo la pieza con la mano, no lo copies: muchos videos muestran malas prácticas.</p>` },
  ],
  practica: [
    "Armá tu equipo de protección mínimo (anteojos, protectores auditivos y barbijo) y anotá cuánto costó cada cosa o dónde la conseguiste.",
    "Revisá tu lugar de trabajo con la tabla de la segunda lección y anotá cuántas de las 6 reglas cumplís hoy. Mejorá una y anotá cuál.",
    "Armá un botiquín básico para el taller (gasas, cinta, desinfectante, pinza) y anotá dónde lo dejaste.",
  ],
  recursos: [
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
    { t: "Gobierno de Argentina: buscás trabajo (oficinas de empleo y formación)", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Vas a hacer un solo corte rápido con la sierra caladora. ¿Te ponés los anteojos de seguridad?", opciones: ["No, para un corte no hace falta","Solo si la madera es dura","Sí: los anteojos van siempre, aunque sea un solo corte","Solo si hay alguien mirando"], correcta: 2, explicacion: "Una astilla salta igual en el primer corte que en el décimo. Pensar que para uno solo no hace falta tienta por apuro, pero así pasan los accidentes." },
    { q: "Vas a usar el taladro. ¿Qué hacés con los guantes?", opciones: ["No los usás: con herramientas que giran, el guante se puede enganchar","Usás los más gruesos","Usás uno solo","Usás guantes de látex"], correcta: 0, explicacion: "El guante puede arrastrar la mano hacia la mecha. Los guantes gruesos tientan porque parecen proteger más, pero se enganchan más fácil." },
    { q: "Vas a lijar un tablero de MDF. ¿Qué protección no puede faltar?", opciones: ["Guantes de cuero","Casco","Nada, lijar es suave","Barbijo para polvo y lugar ventilado"], correcta: 3, explicacion: "El polvo fino del MDF se respira. Pensar que lijar es suave tienta porque no hay filo, pero el riesgo es para los pulmones." },
    { q: "Tu amiga tiene el pelo largo y una pulsera. ¿Qué le decís antes de usar el taladro?", opciones: ["Que no pasa nada si tiene cuidado","Que se ate el pelo y se saque la pulsera","Que se ponga guantes","Que trabaje más rápido"], correcta: 1, explicacion: "El pelo y las alhajas se enganchan en lo que gira. Tener cuidado tienta como solución, pero un enganche pasa en un segundo." },
    { q: "Tenés que cortar una tabla y no tenés prensas. ¿Qué hacés?", opciones: ["La sostenés fuerte con la mano","La sostenés con el pie","Conseguís una forma de sujetarla antes de cortar, nunca la sostenés con la mano","Cortás rápido para que no se mueva"], correcta: 2, explicacion: "Si la pieza se mueve, la herramienta se escapa hacia vos. Cortar rápido tienta para que no se mueva, pero el apuro empeora el riesgo." },
    { q: "¿Por qué una herramienta desafilada es más peligrosa?", opciones: ["Porque obliga a hacer fuerza, y cuando se escapa lo hace con fuerza","Porque corta más","No es más peligrosa","Porque pesa más"], correcta: 0, explicacion: "Con filo, la herramienta trabaja sola. Pensar que desafilada es más segura tienta porque \"corta menos\", pero el esfuerzo extra es lo peligroso." },
    { q: "Usás un formón. ¿Dónde va la mano que sostiene la pieza?", opciones: ["Adelante, para guiar","Debajo de la pieza","Donde quede cómoda","Detrás del filo, nunca adelante de la dirección del corte"], correcta: 3, explicacion: "Si el formón se escapa, sigue su dirección. Adelante tienta para guiar mejor, pero es justo donde va a parar el filo." },
    { q: "Querés cambiar la mecha del taladro. ¿Qué hacés antes?", opciones: ["Lo apagás con el botón y listo","Lo desenchufás","Nada, es rápido","Lo dejás andando despacio"], correcta: 1, explicacion: "Un toque sin querer al botón lo vuelve a encender. Apagarlo tienta porque parece suficiente, pero desenchufado no hay riesgo." },
    { q: "Necesitás un enchufe nuevo en el lugar donde vas a trabajar. ¿Qué hacés?", opciones: ["Lo instalás vos con un tutorial","Usás cinco alargues en cadena","Llamás a un electricista matriculado","Pelás un cable y lo conectás"], correcta: 2, explicacion: "La instalación eléctrica de la casa la hace un matriculado. El tutorial tienta por barato, pero un error puede causar un incendio o una descarga." },
    { q: "Viste un video donde alguien usa la sierra de banco sin protección. ¿Qué hacés?", opciones: ["No lo copiás: es una herramienta para aprender con alguien con experiencia","Lo intentás igual","Lo hacés más despacio","Lo hacés con guantes"], correcta: 0, explicacion: "Muchos videos muestran malas prácticas. Hacerlo más despacio tienta, pero el rebote de la sierra de banco pasa igual." },
    { q: "Te clavaste una astilla grande y profunda cerca del ojo. ¿Qué hacés?", opciones: ["La sacás con una pinza","La dejás y seguís trabajando","La empujás para que salga del otro lado","No la sacás vos: vas a una guardia"], correcta: 3, explicacion: "Las astillas grandes, profundas o cerca del ojo las saca un profesional. Sacarla vos tienta por rápido, pero podés empeorar la herida." },
    { q: "Es tarde, estás cansado y te falta el último corte. ¿Qué conviene?", opciones: ["Hacerlo rápido para terminar","Dejarlo para mañana","Hacerlo sin anteojos para ver mejor","Pedirle a alguien que sostenga la pieza con la mano"], correcta: 1, explicacion: "Muchos accidentes pasan en el último corte del día. Terminarlo rápido tienta por las ganas de cerrar, pero el cansancio te hace equivocar." },
  ],
},
{
  id: "madera",
  icono: "🪵",
  titulo: "Conocer la madera y los tableros",
  nivel: "Básico",
  objetivos: [
    "Distinguir madera maciza de tableros (MDF, aglomerado, multilaminado, OSB) y elegir según el uso",
    "Leer la veta de la madera y entender por qué la madera se mueve con la humedad",
    "Comprar madera: medidas nominales y reales, qué revisar en el corralón y cómo pedir cortes",
  ],
  lecciones: [
    { titulo: "Madera maciza y tableros", html: `
      <p class="idea">Hay dos grandes familias de materiales: la <strong>madera maciza</strong>, que sale directamente del tronco, y los <strong>tableros</strong>, que se fabrican con madera procesada y pegada. Cada uno sirve para cosas distintas.</p>
      <table>
        <tr><th>Material</th><th>Qué es</th><th>Bueno para</th><th>Cuidado con</th></tr>
        <tr><td>Pino (maciza)</td><td>Madera blanda, barata y fácil de trabajar</td><td>Repisas, bancos, primeros proyectos</td><td>Se marca fácil con golpes; tiene nudos</td></tr>
        <tr><td>Eucalipto, álamo (maciza)</td><td>Otras maderas comunes</td><td>Muebles rústicos, estructuras</td><td>El eucalipto se puede rajar al atornillar si no perforás antes</td></tr>
        <tr><td>Multilaminado o terciado</td><td>Láminas finas pegadas cruzadas</td><td>Fondos, estantes firmes</td><td>Los cantos se ven en capas</td></tr>
        <tr><td>MDF</td><td>Fibra de madera prensada, muy pareja</td><td>Muebles para pintar, cortes prolijos</td><td>Pesado; el agua lo hincha; mucho polvo al cortar</td></tr>
        <tr><td>Aglomerado (a veces con melamina)</td><td>Partículas de madera pegadas</td><td>Muebles de placard y cocina</td><td>Los tornillos se aflojan si se sacan y ponen varias veces</td></tr>
        <tr><td>OSB</td><td>Virutas grandes pegadas</td><td>Contrapisos, depósitos, construcción</td><td>Superficie rugosa</td></tr>
      </table>
      <p>Para empezar, el <strong>pino</strong> es lo más recomendado: barato, liviano, fácil de cortar y de atornillar. Si te equivocás, no perdiste mucho.</p>
      <p>Por ejemplo, para una repisa que va a llevar libros, una tabla de pino de 2 cm de espesor o un multilaminado de 18 mm funcionan bien. Un MDF fino se va a combar (curvar) con el peso con el tiempo.</p>` },
    { titulo: "La veta y por qué la madera se mueve", html: `
      <p class="idea">La madera tiene una dirección: la <strong>veta</strong> o fibra, que sigue el crecimiento del árbol. Se corta, se lija y se comporta distinto según trabajes a favor o en contra de la veta.</p>
      <table>
        <tr><th>Trabajar...</th><th>Qué pasa</th></tr>
        <tr><td>A lo largo de la veta (corte al hilo)</td><td>La madera se separa con facilidad: hay riesgo de rajar</td></tr>
        <tr><td>Atravesando la veta (corte transversal)</td><td>Corta fibras: el borde puede astillarse al salir la sierra</td></tr>
        <tr><td>Lijando a favor de la veta</td><td>Queda liso</td></tr>
        <tr><td>Lijando en contra o en círculos</td><td>Quedan rayas que se notan al barnizar</td></tr>
      </table>
      <p><strong>La madera se mueve.</strong> La madera maciza absorbe y pierde humedad del ambiente: se hincha cuando hay humedad y se achica cuando está seco. Se mueve mucho más a lo ancho de la tabla que a lo largo. Por eso:</p>
      <ul>
        <li>Una tabla ancha puede curvarse (combarse) si una cara está más húmeda que la otra.</li>
        <li>No conviene encerrar una tabla maciza ancha en un marco que no la deje moverse: se raja.</li>
        <li>Conviene dejar la madera unos días en el lugar donde la vas a trabajar antes de cortarla, para que se adapte a esa humedad.</li>
      </ul>
      <p>Los tableros (multilaminado, MDF, aglomerado) se mueven mucho menos, porque están hechos con capas o partículas en distintas direcciones. Es una de sus ventajas.</p>
      <p>Por ejemplo, si una tabla de pino que compraste se curva a los pocos días de tenerla en casa, no es un defecto de fabricación: se está adaptando a la humedad de tu casa. Por eso se compra con unos días de anticipación.</p>` },
    { titulo: "Comprar madera", html: `
      <p class="idea">En el corralón o la maderera, la madera maciza se vende muchas veces por medidas en pulgadas que no son las reales. Saber qué revisar y cómo pedir te ahorra plata y viajes.</p>
      <p><strong>Medida nominal y medida real.</strong> Una tabla que se vende como "1 x 6" (una pulgada por seis pulgadas) es la medida antes de cepillarla. Ya cepillada, es más chica. La medida real cambia según el aserradero, así que <strong>siempre medí vos la tabla</strong> antes de hacer tu plano.</p>
      <pre><code>1 pulgada = 2,54 cm
Tabla "1 x 6" nominal → 2,54 cm x 15,24 cm antes de cepillar
Ya cepillada → un poco menos de espesor y de ancho (medila)</code></pre>
      <p><strong>Qué revisar antes de llevarla:</strong></p>
      <table>
        <tr><th>Revisá</th><th>Cómo</th></tr>
        <tr><td>Que esté derecha</td><td>Mirala de punta, como si apuntaras con ella: se ven las curvas</td></tr>
        <tr><td>Que no esté combada o torcida</td><td>Apoyala en el piso: no tiene que bailar</td></tr>
        <tr><td>Nudos</td><td>Los nudos sueltos o negros se pueden caer; evitá que caigan donde vas a cortar o atornillar</td></tr>
        <tr><td>Rajaduras en las puntas</td><td>Son comunes: calculá cortar unos centímetros de cada punta</td></tr>
      </table>
      <p><strong>Pedir cortes.</strong> Muchos corralones cortan tableros con máquina, a medida, por poco dinero o gratis. Los cortes de máquina salen más derechos que los de un principiante: para tableros grandes (de 1,83 x 2,60 m, por ejemplo) conviene pedir los cortes con una <strong>lista de cortes</strong> (lo vas a armar en el módulo 2).</p>
      <p>Por ejemplo, una buena costumbre es llevar la cinta métrica y la lista de cortes al corralón, y comprar un poco más de lo justo (un 10% es una regla práctica) por si un corte sale mal o una parte tiene un nudo.</p>` },
  ],
  practica: [
    "Visitá un corralón o una maderera (o su página) y anotá el precio de una tabla de pino, una placa de MDF y una de multilaminado. Anotá también qué medidas tienen.",
    "Medí con cinta una tabla de pino que se venda como \"1 x 6\" y anotá su medida real de espesor y ancho. Compará con la nominal.",
    "Elegí una tabla en el corralón y revisala con la tabla de la última lección. Anotá cuántos de los 4 puntos cumplía.",
  ],
  recursos: [
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
  ],
  quiz: [
    { q: "Vas a hacer tu primer proyecto y querés un material barato y fácil de trabajar. ¿Cuál elegís?", opciones: ["MDF de 30 mm","Una madera dura y cara","Pino","OSB"], correcta: 2, explicacion: "El pino es barato, liviano y fácil de cortar. Una madera dura tienta porque dura más, pero es más difícil y cara para aprender." },
    { q: "Querés hacer un mueble que vas a pintar, con cortes muy prolijos. ¿Qué tablero elegís?", opciones: ["MDF","OSB","Aglomerado sin melamina","Pino con muchos nudos"], correcta: 0, explicacion: "El MDF es parejo y se pinta muy bien. El OSB tienta por resistente, pero su superficie rugosa no queda prolija pintada." },
    { q: "Tu repisa de MDF fino se curvó con el peso de los libros. ¿Qué podías haber elegido?", opciones: ["Un MDF todavía más fino","Cartón prensado","Ningún material aguanta libros","Una tabla de pino de 2 cm o un multilaminado de 18 mm"], correcta: 3, explicacion: "Los libros pesan mucho y el MDF fino se comba. Pensar que ningún material aguanta tienta, pero con más espesor y el material justo, aguanta." },
    { q: "Vas a cortar una tabla a lo largo, siguiendo la veta. ¿Qué tenés en cuenta?", opciones: ["Que se astilla al salir la sierra","Que la madera se separa fácil en esa dirección y se puede rajar","Que es imposible cortar así","Que no hay ninguna diferencia"], correcta: 1, explicacion: "A lo largo de la veta, la madera se abre. Astillarse al salir la sierra tienta, pero eso pasa sobre todo en el corte transversal." },
    { q: "Lijaste en círculos y al barnizar se ven rayas. ¿Qué pasó?", opciones: ["El barniz era malo","Faltó lijar más fuerte","Hay que lijar a favor de la veta: en círculos quedan rayas que el barniz resalta","La madera tenía un defecto"], correcta: 2, explicacion: "Las rayas en contra de la veta se notan al barnizar. Culpar al barniz tienta, pero el barniz resalta lo que dejó la lija." },
    { q: "Compraste una tabla ancha de pino y a los días se curvó. ¿Qué concluís?", opciones: ["Que se adaptó a la humedad de tu casa: conviene dejarla unos días antes de trabajarla","Que es un defecto de fabricación","Que la madera se rompió","Que hay que devolverla siempre"], correcta: 0, explicacion: "La madera maciza se mueve con la humedad. Pensar que es un defecto tienta, pero es un comportamiento normal que se prevé." },
    { q: "¿Por qué los tableros como el multilaminado se mueven menos que la madera maciza?", opciones: ["Porque son de plástico","Porque son más pesados","Porque no tienen madera","Porque sus capas o partículas van en distintas direcciones"], correcta: 3, explicacion: "Las capas cruzadas se frenan entre sí. Que no tienen madera tienta pensarlo por su aspecto, pero están hechos de madera procesada." },
    { q: "Compraste una tabla \"1 x 6\" y tu plano usa 2,54 cm de espesor. ¿Qué pasa?", opciones: ["Nada, la medida es exacta","El plano puede fallar: la medida real cepillada es menor y hay que medirla","La tabla va a ser más gruesa","Las pulgadas no se usan en Argentina"], correcta: 1, explicacion: "La nominal es antes de cepillar. Confiar en la medida exacta tienta, pero las uniones van a quedar mal si el espesor es otro." },
    { q: "¿Cómo revisás si una tabla está derecha en el corralón?", opciones: ["La golpeás","La olés","La mirás de punta, como si apuntaras con ella","Le preguntás al vendedor y listo"], correcta: 2, explicacion: "Mirada de punta, las curvas se ven enseguida. Preguntarle al vendedor tienta por rápido, pero revisarla vos te asegura." },
    { q: "La tabla tiene un nudo negro y suelto justo donde vas a atornillar. ¿Qué hacés?", opciones: ["Elegís otra tabla o planificás para que el nudo no caiga ahí","Atornillás igual en el nudo","Pintás el nudo","Lo arrancás y listo"], correcta: 0, explicacion: "Un nudo suelto se puede caer y el tornillo no agarra. Atornillar igual tienta por no cambiar el plan, pero la unión va a quedar floja." },
    { q: "Tenés que cortar varias piezas de una placa grande de MDF y no tenés experiencia. ¿Qué conviene?", opciones: ["Cortarla vos con un serrucho en el piso","Comprar piezas sueltas sin medir","No usar MDF nunca","Pedir los cortes en el corralón con una lista de cortes"], correcta: 3, explicacion: "Los cortes de máquina salen más derechos. Cortarla vos tienta para ahorrar, pero una placa grande es difícil de cortar derecho a mano." },
    { q: "Calculaste que necesitás 2 metros de tabla. ¿Cuánto comprás?", opciones: ["Exactamente 2 metros","Un poco más, como un 10%, por si un corte sale mal o hay un nudo","El doble","Menos, para ahorrar"], correcta: 1, explicacion: "Un margen chico cubre errores y defectos. Comprar exacto tienta para no gastar de más, pero un corte mal hecho te obliga a volver al corralón." },
  ],
},
{
  id: "medir",
  icono: "📐",
  titulo: "Medir, marcar y planificar",
  nivel: "Básico",
  objetivos: [
    "Medir y marcar con precisión usando cinta, escuadra, lápiz y gramil",
    "Tener en cuenta el ancho de corte de la sierra al marcar",
    "Armar un plano simple y una lista de cortes antes de empezar",
  ],
  lecciones: [
    { titulo: "Las herramientas para medir y marcar", html: `
      <p class="idea">En carpintería, el error más común no es cortar mal: es <strong>medir o marcar mal</strong>. Un milímetro de error en cada pieza se suma y el mueble queda torcido. El dicho del oficio es "medí dos veces, cortá una".</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th><th>Consejo</th></tr>
        <tr><td>Cinta métrica</td><td>Medir largos</td><td>El ganchito de la punta se mueve a propósito: compensa su propio espesor. No lo aprietes ni lo dobles</td></tr>
        <tr><td>Escuadra</td><td>Marcar líneas a 90 grados y comprobar ángulos</td><td>Apoyala bien contra el canto de la tabla</td></tr>
        <tr><td>Lápiz de carpintero o lápiz duro bien afilado</td><td>Marcar</td><td>Una línea gruesa es medio milímetro de error</td></tr>
        <tr><td>Gramil</td><td>Marcar una línea paralela al canto, a una distancia fija</td><td>Ideal para marcar varias piezas iguales</td></tr>
        <tr><td>Nivel</td><td>Comprobar que algo esté horizontal o vertical</td><td>Para repisas y para que el mueble no quede inclinado</td></tr>
      </table>
      <p><strong>Cómo marcar un corte a escuadra:</strong></p>
      <ol>
        <li>Medí con la cinta desde la punta de la tabla y hacé una marca chiquita en forma de V (el vértice marca la medida exacta).</li>
        <li>Apoyá la escuadra contra el canto, llevala hasta la marca y trazá la línea de lado a lado.</li>
        <li>Marcá con una cruz el lado que va a ser desperdicio (lo vas a usar en la próxima lección).</li>
      </ol>
      <p>Por ejemplo, para comprobar que tu escuadra está bien, trazá una línea, dala vuelta y trazá otra encima desde el mismo punto. Si las dos líneas coinciden, la escuadra está a 90 grados.</p>` },
    { titulo: "El ancho del corte", html: `
      <p class="idea">La sierra no corta en una línea sin espesor: se come una franja de madera, que se llama <strong>ancho de corte</strong> (en inglés, <em>kerf</em>). Según la hoja, son unos 2 o 3 milímetros. Si no lo tenés en cuenta, las piezas te quedan más cortas.</p>
      <pre><code>Tabla de 100 cm. Querés dos piezas de 50 cm.
Si cortás justo en la marca de 50 cm:
  una pieza queda de 50 cm y la otra de 50 - 0,3 = 49,7 cm
  (la sierra se comió unos 3 mm)</code></pre>
      <p><strong>La regla:</strong> la sierra va siempre del lado del desperdicio (el que marcaste con una cruz). Así, la pieza que querés conserva la medida exacta y el ancho de corte sale de lo que se tira.</p>
      <table>
        <tr><th>Al marcar varias piezas de una tabla</th><th>Qué hacés</th></tr>
        <tr><td>Medís todas de una vez desde una punta</td><td>Error: cada corte achica la siguiente pieza</td></tr>
        <tr><td>Cortás la primera pieza y medís la segunda desde el nuevo borde</td><td>Bien: cada pieza sale con su medida</td></tr>
      </table>
      <p><strong>Para piezas que tienen que ser iguales</strong> (las patas de un banquito, por ejemplo), cortá una, comprobala, y usala como plantilla para marcar las demás. Así todas quedan iguales entre sí, aunque tengan un milímetro de diferencia con el plano, que es lo que importa para que el mueble no cojee.</p>
      <p>Por ejemplo, si cuatro patas tienen 45 cm, 45 cm, 45,2 cm y 44,8 cm, el banquito va a bailar. Si las cuatro miden 44,9 cm, nadie lo nota y queda firme.</p>` },
    { titulo: "El plano y la lista de cortes", html: `
      <p class="idea">Antes de comprar o cortar, dibujá lo que vas a hacer, con medidas, y armá la <strong>lista de cortes</strong>: cada pieza que necesitás, con su medida y su material. Es el paso que más errores evita.</p>
      <p><strong>El plano</strong> puede ser un dibujo a mano en una hoja cuadriculada. No hace falta que sea lindo: hace falta que tenga las medidas y que se entienda cómo se une cada pieza.</p>
      <p>Por ejemplo, para una repisa simple de pared con dos laterales y dos estantes:</p>
      <pre><code>REPISA (alto 60 cm, ancho 50 cm, profundidad 18 cm)
Material: tabla de pino de 2 cm de espesor (medida real) x 18 cm de ancho

Pieza        Cantidad   Largo     Ancho    Notas
Lateral      2          60 cm     18 cm
Estante      2          46 cm     18 cm    50 cm de ancho total - 2 laterales de 2 cm
Total de tabla: 2 x 60 + 2 x 46 = 212 cm → comprar unos 235 cm (10% más)</code></pre>
      <p>Fijate el cálculo del estante: si la repisa mide 50 cm de ancho y los estantes van entre los dos laterales, cada estante mide 50 menos el espesor de los dos laterales (2 + 2 cm) = 46 cm. Es el error más común: olvidarse de restar el espesor de las piezas que van a los costados.</p>
      <table>
        <tr><th>Revisá antes de cortar</th></tr>
        <tr><td>¿Restaste el espesor de las piezas que van a los costados?</td></tr>
        <tr><td>¿Usaste el espesor real que mediste, no el nominal?</td></tr>
        <tr><td>¿Sumaste un margen de material?</td></tr>
        <tr><td>¿Está claro qué pieza va unida a cuál y cómo?</td></tr>
      </table>
      <p>También podés pedirle a una IA que revise tu lista de cortes ("revisá si estas medidas cierran para una repisa de 50 cm de ancho con laterales de 2 cm"), pero hacé vos la cuenta con la calculadora: la IA se equivoca en las cuentas más de lo que parece.</p>` },
  ],
  practica: [
    "Comprobá tu escuadra con el método de las dos líneas y anotá si coincidieron.",
    "Cortá (o marcá) una tabla de 100 cm en dos piezas, una vez cortando sobre la marca y otra del lado del desperdicio. Medí las piezas y anotá la diferencia.",
    "Dibujá el plano de la repisa de la última lección con tus medidas y armá la lista de cortes. Anotá el total de tabla que necesitás con el 10% de margen.",
  ],
  recursos: [
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
  ],
  quiz: [
    { q: "Tu mueble quedó torcido aunque cortaste con cuidado. ¿Qué revisás primero?", opciones: ["La marca de la sierra","El barniz","Las medidas y las marcas: el error más común es medir o marcar mal","La humedad del día"], correcta: 2, explicacion: "Un milímetro de error en cada pieza se suma. Culpar a la sierra tienta, pero casi siempre el problema empezó en la medición." },
    { q: "El ganchito de la punta de la cinta métrica se mueve. ¿Qué hacés?", opciones: ["Nada: se mueve a propósito para compensar su propio espesor","Lo apretás con una pinza para que no se mueva","Comprás otra cinta","Medís desde el número 10 siempre"], correcta: 0, explicacion: "El juego del gancho es parte del diseño. Fijarlo tienta porque parece flojo, pero así la cinta deja de medir bien." },
    { q: "Tu lápiz hace una línea muy gruesa. ¿Por qué importa?", opciones: ["Porque se ve feo","No importa","Porque gasta el lápiz","Porque una línea gruesa puede ser medio milímetro de error"], correcta: 3, explicacion: "En carpintería el medio milímetro se acumula. Pensar que no importa tienta, pero sumado en varias piezas se nota." },
    { q: "Querés comprobar si tu escuadra está a 90 grados. ¿Qué hacés?", opciones: ["La mirás de cerca","Trazás una línea, das vuelta la escuadra y trazás otra desde el mismo punto: tienen que coincidir","Le preguntás al vendedor","Medís el largo de la escuadra"], correcta: 1, explicacion: "Si la escuadra no está a 90 grados, las dos líneas se separan. Mirarla de cerca tienta, pero un grado de error no se ve a simple vista." },
    { q: "Cortaste justo sobre la marca de 50 cm y una pieza quedó de 49,7 cm. ¿Qué pasó?", opciones: ["La cinta está mal","La madera se achicó","La sierra se comió el ancho de corte: había que cortar del lado del desperdicio","La sierra está rota"], correcta: 2, explicacion: "La sierra se come unos milímetros. Culpar a la cinta tienta, pero el corte en sí tiene ancho." },
    { q: "Tenés que sacar tres piezas de una tabla. ¿Cómo marcás?", opciones: ["Cortás la primera y medís la siguiente desde el nuevo borde","Marcás las tres de una vez desde una punta","Cortás todo al ojo","Medís solo la primera"], correcta: 0, explicacion: "Medir de nuevo después de cada corte evita que el ancho de corte achique las piezas. Marcar todo junto tienta por rápido, pero cada corte se come algo." },
    { q: "Tenés que cortar las cuatro patas de un banquito. ¿Qué es lo más importante?", opciones: ["Que midan exactamente lo del plano aunque difieran entre ellas","Que sean lo más largas posible","Cortarlas en días distintos","Que las cuatro sean iguales entre sí: cortás una y la usás de plantilla"], correcta: 3, explicacion: "Si son iguales, el banquito no baila. Que midan exacto lo del plano tienta, pero un milímetro de diferencia entre ellas importa más." },
    { q: "Tu repisa mide 50 cm de ancho y los laterales son de 2 cm. Los estantes van entre los laterales. ¿Cuánto mide cada estante?", opciones: ["50 cm","46 cm","48 cm","52 cm"], correcta: 1, explicacion: "50 menos 2 + 2 da 46. 48 tienta porque restás un solo lateral, pero hay dos." },
    { q: "Tu plano usa 2,54 cm de espesor, pero la tabla real mide 2 cm. ¿Qué hacés?", opciones: ["Seguís con el plano, es casi lo mismo","Comprás tablas más gruesas","Rehacés el plano con el espesor real que mediste","Lijás la tabla hasta 2,54"], correcta: 2, explicacion: "Medio centímetro cambia todas las medidas que dependen del espesor. Seguir igual tienta porque parece poco, pero las uniones no cierran." },
    { q: "Necesitás 212 cm de tabla para tu proyecto. ¿Cuánto comprás?", opciones: ["Unos 235 cm, con un 10% de margen","212 cm justos","424 cm","200 cm"], correcta: 0, explicacion: "El margen cubre un corte fallido o un nudo. Comprar justo tienta para no gastar, pero cualquier error te deja sin material." },
    { q: "Le pediste a la IA que revise tu lista de cortes y te dio un total. ¿Qué hacés con ese número?", opciones: ["Lo usás tal cual","Le preguntás si está segura","Le pedís que lo redondee","Hacés vos la cuenta con la calculadora para comprobarlo"], correcta: 3, explicacion: "La IA se equivoca en las cuentas. Preguntarle si está segura tienta, pero suele decir que sí aunque esté mal." },
    { q: "Antes de cortar, ¿qué tiene que tener tu plano como mínimo?", opciones: ["Colores","Las medidas de cada pieza y cómo se une cada una","Un dibujo perfecto en 3D","Solo el tamaño total del mueble"], correcta: 1, explicacion: "Las medidas y las uniones son lo que evita errores. Un dibujo perfecto tienta, pero un croquis a mano con medidas alcanza." },
  ],
},
{
  id: "cortar",
  icono: "🪚",
  titulo: "Cortar derecho: serrucho y sierra caladora",
  nivel: "Básico",
  objetivos: [
    "Cortar a escuadra con serrucho, empezando bien y sin desviarte de la línea",
    "Usar una caja de ingletes para cortes rectos y a 45 grados",
    "Cortar con sierra caladora de forma segura, eligiendo la hoja según el material",
  ],
  lecciones: [
    { titulo: "El serrucho", html: `
      <p class="idea">El serrucho es la herramienta más simple para cortar madera y la mejor para aprender: es silencioso, barato y te enseña a seguir una línea. El secreto no es la fuerza: es empezar bien y dejar que los dientes trabajen.</p>
      <p><strong>Paso a paso para un corte transversal:</strong></p>
      <ol>
        <li>Sujetá la tabla con prensas a la mesa, con la línea de corte afuera del borde de la mesa.</li>
        <li>Apoyá el serrucho del lado del desperdicio de la línea (módulo 2), guiándolo con el pulgar de la otra mano apoyado contra la hoja, <strong>arriba de los dientes</strong>.</li>
        <li>Empezá con dos o tres pasadas cortas hacia atrás, para hacer una pequeña ranura.</li>
        <li>Cuando el serrucho ya va guiado por la ranura, sacá el pulgar y seguí con pasadas largas, sin apretar.</li>
        <li>Al final, sostené la parte que se va a caer (o pedí ayuda) para que no se arranque una astilla del borde.</li>
      </ol>
      <table>
        <tr><th>Problema</th><th>Causa probable</th><th>Qué hacés</th></tr>
        <tr><td>El corte se desvía de la línea</td><td>Torcés la muñeca o apretás de más</td><td>Pasadas largas y suaves, el hombro alineado con la línea</td></tr>
        <tr><td>El serrucho se traba</td><td>La ranura se cierra o hacés fuerza</td><td>Afloja la presión; si se cierra, metés una cuña en el corte</td></tr>
        <tr><td>Se astilla el borde de abajo</td><td>La pieza cae al final</td><td>Sostené la pieza o pegá cinta de papel sobre la línea</td></tr>
      </table>
      <p><strong>Serrucho de dientes finos o gruesos:</strong> los dientes grandes cortan rápido y rústico; los finos cortan más lento y prolijo. Para empezar, uno de dientes medianos para madera sirve para casi todo.</p>
      <p>Por ejemplo, una buena práctica es cortar 5 trozos de una tabla vieja y medir con la escuadra si cada corte quedó a 90 grados. Al quinto vas a notar la diferencia.</p>` },
    { titulo: "La caja de ingletes", html: `
      <p class="idea">Una <strong>caja de ingletes</strong> es una guía con ranuras a 90 y a 45 grados: apoyás la tabla adentro y el serrucho pasa por la ranura. Así el corte sale derecho aunque recién empieces.</p>
      <table>
        <tr><th>Ranura</th><th>Para qué</th><th>Ejemplo</th></tr>
        <tr><td>90 grados</td><td>Cortes rectos, a escuadra</td><td>Patas de un banquito, estantes</td></tr>
        <tr><td>45 grados</td><td>Ingletes: dos piezas que se unen formando una esquina de 90</td><td>Un marco para un cuadro o un espejo</td></tr>
      </table>
      <p><strong>El inglete:</strong> si cortás dos piezas a 45 grados y las juntás, forman una esquina de 90 grados sin que se vea la punta de la madera. Es como se hacen los marcos.</p>
      <pre><code>  pieza A (punta a 45°) ──┐
                           │ esquina de 90° (45 + 45)
  pieza B (punta a 45°) ──┘</code></pre>
      <p><strong>Cómo usarla bien:</strong></p>
      <ul>
        <li>Sujetá la caja a la mesa (con prensas o tornillos): si la caja se mueve, el corte sale mal.</li>
        <li>Apretá la tabla contra la pared del fondo de la caja mientras cortás.</li>
        <li>Para un marco, las piezas opuestas tienen que medir exactamente lo mismo: medilas de punta larga a punta larga.</li>
      </ul>
      <p>Una caja de ingletes de plástico es barata y alcanza para empezar. Con el uso, las ranuras se abren y pierde precisión: cuando pasa, se cambia.</p>
      <p>Por ejemplo, el primer marco suele quedar con una esquina abierta. Casi siempre es porque dos piezas opuestas no miden exactamente lo mismo, no por el ángulo.</p>` },
    { titulo: "La sierra caladora", html: `
      <p class="idea">La <strong>sierra caladora</strong> es una sierra eléctrica de mano con una hoja chica que sube y baja. Es la herramienta eléctrica de corte más segura para empezar, y la única que corta curvas fácilmente.</p>
      <p><strong>Antes de cortar:</strong></p>
      <ul>
        <li>Protección completa: anteojos, protectores auditivos y barbijo (módulo 0).</li>
        <li>La pieza sujeta con prensas, con la línea de corte <strong>afuera</strong> de la mesa: la hoja sobresale por debajo y no puede tocar la mesa ni las prensas.</li>
        <li>Fijate que debajo de la línea no haya nada: ni la mesa, ni un cable, ni tu mano.</li>
        <li>La hoja correcta para el material, bien ajustada, con la sierra desenchufada al cambiarla.</li>
      </ul>
      <table>
        <tr><th>Hoja</th><th>Para</th></tr>
        <tr><td>Dientes grandes</td><td>Cortes rápidos en madera, sin importar la prolijidad</td></tr>
        <tr><td>Dientes finos</td><td>Cortes prolijos, tableros, melamina</td></tr>
        <tr><td>Para curvas (hoja angosta)</td><td>Formas redondeadas</td></tr>
        <tr><td>Para metal</td><td>No es para madera: no la uses en este curso</td></tr>
      </table>
      <p><strong>Durante el corte:</strong> apoyá bien la base de la sierra sobre la madera, encendela antes de tocar la pieza, avanzá sin empujar fuerte y dejala detenerse antes de sacarla. Las dos manos en la sierra o una en la sierra y la otra lejos de la línea.</p>
      <p><strong>El astillado:</strong> la sierra caladora corta subiendo, así que la cara de arriba se astilla más. Trabajá con la cara buena hacia abajo o pegá cinta de papel sobre la línea.</p>
      <p>Por ejemplo, para cortar derecho con caladora, sujetá una regla de madera con prensas como guía y apoyá la base de la sierra contra ella durante todo el corte.</p>` },
  ],
  practica: [
    "Hacé 5 cortes transversales con serrucho en una tabla vieja y comprobá cada uno con la escuadra. Anotá cuántos quedaron a 90 grados.",
    "Cortá con la caja de ingletes cuatro piezas a 45 grados para un marco de 20 x 30 cm. Juntalas y anotá cuántas esquinas cerraron bien.",
    "Cortá una curva con la sierra caladora en un retazo, con toda la protección y la pieza sujeta. Anotá qué hoja usaste y si la cara de arriba se astilló.",
  ],
  recursos: [
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
  ],
  quiz: [
    { q: "Vas a empezar un corte con serrucho. ¿Dónde apoyás el pulgar para guiar?", opciones: ["Delante de los dientes, sobre la línea","Debajo de la tabla","Contra la hoja, arriba de los dientes","No hace falta guiar"], correcta: 2, explicacion: "Arriba de los dientes guía sin riesgo. Delante, sobre la línea, tienta para ver mejor, pero es donde el serrucho salta al empezar." },
    { q: "Tu corte con serrucho se desvía de la línea. ¿Qué cambiás?", opciones: ["Hacés pasadas largas y suaves, sin apretar, con el hombro alineado","Apretás más fuerte","Cortás más rápido","Cambiás de serrucho enseguida"], correcta: 0, explicacion: "La fuerza y la muñeca torcida desvían el corte. Apretar más tienta para avanzar, pero empeora la desviación." },
    { q: "Al terminar el corte, se arrancó una astilla del borde de abajo. ¿Qué podías hacer?", opciones: ["Cortar más rápido al final","Usar un serrucho más grande","Nada, siempre pasa","Sostener la parte que se cae o pegar cinta de papel sobre la línea"], correcta: 3, explicacion: "La pieza que cae arranca fibras. Cortar rápido al final tienta para terminar, pero hace que caiga antes." },
    { q: "Querés hacer un marco para un espejo. ¿A qué ángulo cortás las puntas?", opciones: ["A 90 grados","A 45 grados, para que dos piezas formen una esquina de 90","A 30 grados","A 60 grados"], correcta: 1, explicacion: "45 más 45 da 90. Cortar a 90 tienta por simple, pero queda a la vista la punta de la madera y no es un inglete." },
    { q: "Tu primer marco quedó con una esquina abierta. ¿Qué revisás primero?", opciones: ["El color de la madera","El serrucho","Que las piezas opuestas midan exactamente lo mismo","La pared donde lo vas a colgar"], correcta: 2, explicacion: "Casi siempre el problema son dos piezas opuestas distintas. Culpar al ángulo o al serrucho tienta, pero la medida suele ser la causa." },
    { q: "Vas a usar la caja de ingletes sobre la mesa. ¿Qué hacés con la caja?", opciones: ["La sujetás a la mesa con prensas o tornillos","La sostenés con la mano","Nada, se queda quieta sola","La ponés en el piso"], correcta: 0, explicacion: "Si la caja se mueve, el corte sale torcido. Sostenerla con la mano tienta, pero necesitás esa mano para la tabla." },
    { q: "Vas a cortar con la sierra caladora. ¿Dónde va la línea de corte respecto de la mesa?", opciones: ["Arriba de la mesa","Sobre las prensas","Da igual","Afuera del borde de la mesa, para que la hoja no toque nada abajo"], correcta: 3, explicacion: "La hoja sobresale por debajo de la madera. Arriba de la mesa tienta porque la tabla queda más firme, pero cortarías la mesa o la hoja chocaría." },
    { q: "Tenés que cortar una curva en una tabla. ¿Qué herramienta usás?", opciones: ["El serrucho","La sierra caladora con una hoja para curvas","La caja de ingletes","Una amoladora"], correcta: 1, explicacion: "La caladora es la que corta curvas. La amoladora tienta porque corta todo, pero no es para madera y es muy peligrosa." },
    { q: "Vas a cambiar la hoja de la sierra caladora. ¿Qué hacés antes?", opciones: ["La apagás con el botón","La dejás enchufada, pero con cuidado","La desenchufás","Le sacás la batería solo si es nueva"], correcta: 2, explicacion: "Desenchufada no puede arrancar sin querer. Apagarla tienta porque parece suficiente, pero un toque al gatillo la enciende." },
    { q: "Cortás melamina con caladora y la cara de arriba se astilla mucho. ¿Qué hacés?", opciones: ["Usás una hoja de dientes finos y cortás con la cara buena hacia abajo","Usás una hoja de dientes grandes","Cortás más rápido","Cortás con la hoja para metal"], correcta: 0, explicacion: "La caladora corta subiendo y astilla la cara de arriba. Los dientes grandes tientan por velocidad, pero astillan más." },
    { q: "Querés cortar derecho con la caladora. ¿Qué te ayuda?", opciones: ["Mirar fijo la línea y empujar fuerte","Cortar sin marcar","Cortar en el aire, sin apoyo","Una regla de madera sujeta con prensas como guía"], correcta: 3, explicacion: "La guía hace el trabajo de la precisión. Empujar fuerte tienta para mantener la línea, pero hace que la hoja se tuerza." },
    { q: "Terminaste un corte con la caladora. ¿Cuándo la sacás de la pieza?", opciones: ["Apenas soltás el gatillo","Cuando la hoja se detuvo del todo","Con la hoja andando, rápido","Cuando termines el siguiente corte"], correcta: 1, explicacion: "Una hoja en movimiento puede engancharse al salir. Sacarla enseguida tienta por apuro, pero son solo un par de segundos de espera." },
  ],
},
{
  id: "fijar",
  icono: "🔩",
  titulo: "Perforar, atornillar y fijar a la pared",
  nivel: "Básico",
  objetivos: [
    "Elegir mecha y tornillo, y hacer un agujero guía para que la madera no se raje",
    "Atornillar con taladro atornillador sin pasar ni dañar la cabeza del tornillo",
    "Fijar una repisa a la pared con tarugos, evitando caños y cables",
  ],
  lecciones: [
    { titulo: "Taladro, mechas y agujero guía", html: `
      <p class="idea">El <strong>taladro atornillador</strong> perfora y atornilla. Es probablemente la herramienta eléctrica más útil para empezar. Lo importante es elegir la mecha correcta y hacer un agujero guía antes de cada tornillo.</p>
      <table>
        <tr><th>Mecha</th><th>Para</th><th>Cómo se reconoce</th></tr>
        <tr><td>Para madera</td><td>Madera y tableros</td><td>Punta central fina que la guía</td></tr>
        <tr><td>Para mampostería (pared)</td><td>Ladrillo y revoque</td><td>Punta ancha de metal duro</td></tr>
        <tr><td>Para metal</td><td>Metal (y sirve en madera)</td><td>Punta cónica</td></tr>
        <tr><td>Avellanador</td><td>Hacer el hueco para que la cabeza del tornillo quede al ras</td><td>Forma de cono</td></tr>
      </table>
      <p><strong>El agujero guía</strong> (o pre-agujero) es un agujero más fino que el tornillo, hecho antes de atornillar. Evita que la madera se raje, sobre todo cerca de los bordes, en maderas duras como el eucalipto y en tableros como el MDF.</p>
      <ul>
        <li>El diámetro de la mecha: parecido al del "alma" del tornillo (el cilindro central, sin contar la rosca).</li>
        <li>Para comprobarlo, poné la mecha delante del tornillo a contraluz: tiene que verse la rosca de los dos lados, pero no el alma.</li>
      </ul>
      <p><strong>Para perforar bien:</strong> marcá el punto con un punzón o un clavo (así la mecha no patina), sostené el taladro derecho, empezá despacio y después aumentá la velocidad. Para que la mecha no salga astillando la cara de atrás, poné una madera de descarte debajo.</p>
      <p>Por ejemplo, para saber a qué profundidad frenar, pegá una vuelta de cinta de papel en la mecha a la medida que necesitás: cuando la cinta toca la madera, parás.</p>` },
    { titulo: "Atornillar sin romper nada", html: `
      <p class="idea">Atornillar parece fácil hasta que la punta se resbala, la cabeza del tornillo se "come" o el tornillo atraviesa la otra cara. Tres ajustes lo evitan: la punta correcta, el embrague y el largo del tornillo.</p>
      <table>
        <tr><th>Ajuste</th><th>Qué hace</th><th>Cómo usarlo</th></tr>
        <tr><td>Punta (Phillips, Pozidriv, Torx)</td><td>Tiene que coincidir con la cabeza del tornillo</td><td>Si la punta no calza justa, se resbala y daña la cabeza</td></tr>
        <tr><td>Embrague (el anillo con números)</td><td>Hace que el taladro deje de girar cuando el tornillo hace cierta fuerza</td><td>Empezá con un número bajo y subí hasta que el tornillo quede al ras</td></tr>
        <tr><td>Velocidad</td><td>Para atornillar, velocidad baja</td><td>La alta es para perforar</td></tr>
      </table>
      <p><strong>El largo del tornillo.</strong> Una regla práctica muy usada: que el tornillo mida unas 2 a 2,5 veces el espesor de la pieza que estás fijando, así entra bien en la segunda pieza sin atravesarla.</p>
      <pre><code>Pieza que fijás: 2 cm de espesor
Tornillo: unos 4 a 5 cm de largo
Comprobá que la segunda pieza tenga más espesor que lo que entra el tornillo
(si no, el tornillo asoma del otro lado)</code></pre>
      <p><strong>Tornillos para madera</strong> tienen rosca gruesa. Para aglomerado y MDF hay tornillos específicos, de rosca más ancha, que agarran mejor. En tableros, no atornilles muy cerca del borde: se abre.</p>
      <p><strong>Cola más tornillos:</strong> para uniones firmes, se pone cola vinílica en las superficies que se tocan y se atornilla. El tornillo aprieta mientras la cola seca, y la cola hace la unión mucho más fuerte (módulo 5).</p>
      <p>Por ejemplo, si la cabeza del tornillo empieza a dañarse, pará: cambiá la punta por una que calce mejor o hacé un agujero guía más grande. Seguir apretando la termina de arruinar.</p>` },
    { titulo: "Fijar algo a la pared", html: `
      <p class="idea">Colgar una repisa es de los primeros trabajos que pide cualquiera. Se hace con <strong>tarugos</strong> (tacos de plástico que se expanden dentro de la pared) y con dos cuidados que no se negocian: no perforar caños ni cables, y elegir tarugos para el peso y el tipo de pared.</p>
      <p><strong>Antes de perforar: caños y cables.</strong></p>
      <ul>
        <li>Los cables suelen ir en línea recta, vertical u horizontal, desde enchufes y llaves de luz. No perfores justo arriba, abajo ni al costado de un enchufe o una llave.</li>
        <li>Los caños de agua suelen ir hacia canillas, el calefón o el inodoro. Evitá esas zonas.</li>
        <li>Un <strong>detector de metales y cables</strong> es barato y muy útil. Si dudás, no perfores ahí.</li>
        <li>Si tocás un cable o un caño, cortá la luz o el agua general y llamá a un profesional matriculado.</li>
      </ul>
      <table>
        <tr><th>Pared</th><th>Mecha</th><th>Fijación</th></tr>
        <tr><td>Ladrillo con revoque</td><td>Para mampostería, con percutor</td><td>Tarugo común del diámetro de la mecha</td></tr>
        <tr><td>Durlock (placa de yeso)</td><td>Para madera o metal, sin percutor</td><td>Tarugo especial para placa de yeso, o fijar a un montante</td></tr>
        <tr><td>Hormigón</td><td>Para mampostería, con percutor</td><td>Tarugo común; cuesta más perforar</td></tr>
      </table>
      <p><strong>El tarugo y el tornillo van juntos:</strong> el tarugo de 8 mm se usa con mecha de 8 mm y el tornillo que indica su envase. Un tarugo que entra flojo no agarra.</p>
      <p><strong>Peso:</strong> el envase de los tarugos o soportes suele indicar cuánto aguanta cada uno. Para repisas con libros, usá soportes y tarugos con margen y por lo menos dos puntos de fijación.</p>
      <p>Por ejemplo, para que la repisa quede derecha, marcá los dos agujeros con el nivel: primero uno, después apoyás el nivel y marcás el otro a la misma altura.</p>` },
  ],
  practica: [
    "Atornillá 3 tornillos cerca del borde de un retazo de pino: uno sin agujero guía y dos con. Anotá cuáles rajaron la madera.",
    "Ajustá el embrague del taladro hasta que el tornillo quede al ras sin hundirse. Anotá en qué número quedó para ese tornillo y esa madera.",
    "Antes de colgar una repisa, revisá la pared con detector o marcando enchufes y llaves cercanas. Anotá dónde decidiste perforar y por qué ahí.",
  ],
  recursos: [
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
  ],
  quiz: [
    { q: "Vas a perforar una pared de ladrillo para un tarugo. ¿Qué mecha usás?", opciones: ["Para madera","Para metal","Para mampostería, con percutor","Un avellanador"], correcta: 2, explicacion: "La mecha de mampostería tiene punta de metal duro para ladrillo. La de madera tienta porque es la que tenés puesta, pero se desafila enseguida en la pared." },
    { q: "Vas a atornillar cerca del borde de una tabla de eucalipto. ¿Qué hacés antes?", opciones: ["Un agujero guía más fino que el tornillo","Nada, atornillás directo","Un agujero del mismo diámetro que el tornillo","Lo clavás primero con un martillo"], correcta: 0, explicacion: "El agujero guía evita que la madera se raje. Del mismo diámetro tienta para que entre fácil, pero entonces el tornillo no agarra." },
    { q: "¿Cómo comprobás que la mecha del agujero guía es del tamaño justo?", opciones: ["Que sea igual al tornillo entero","Que sea la más fina que tengas","Al azar","A contraluz delante del tornillo: se ve la rosca de los dos lados, pero no el alma"], correcta: 3, explicacion: "La mecha tiene que ser como el alma del tornillo. La más fina tienta por segura, pero el tornillo puede rajar igual o romperse." },
    { q: "La mecha patina y no empieza donde marcaste. ¿Qué hacés?", opciones: ["Aumentás la velocidad al máximo","Marcás el punto con un punzón o un clavo y empezás despacio","Empujás más fuerte","Perforás en otro lado"], correcta: 1, explicacion: "La pequeña marca guía la punta de la mecha. Más velocidad tienta para que agarre, pero patina todavía más." },
    { q: "Querés perforar justo 3 cm de profundidad. ¿Qué truco usás?", opciones: ["Contar los segundos","Perforar hasta atravesar","Una vuelta de cinta de papel en la mecha a 3 cm","Mirar de costado"], correcta: 2, explicacion: "La cinta te avisa cuándo frenar. Contar segundos tienta, pero la velocidad cambia con la madera." },
    { q: "La punta del atornillador se resbala y la cabeza del tornillo se está dañando. ¿Qué hacés?", opciones: ["Parás y cambiás la punta por una que calce justa","Apretás más fuerte","Subís la velocidad","Le das con el martillo"], correcta: 0, explicacion: "Una punta que no calza termina de arruinar la cabeza. Apretar más tienta para que entre, pero empeora el daño." },
    { q: "Los tornillos se te hunden demasiado en la madera. ¿Qué ajustás?", opciones: ["Subís el embrague al máximo","Usás tornillos más cortos siempre","Cambiás la madera","Bajás el número del embrague"], correcta: 3, explicacion: "El embrague corta la fuerza cuando el tornillo llega. Subirlo tienta, pero hace que se hunda más." },
    { q: "Vas a fijar una pieza de 2 cm de espesor a otra. ¿De qué largo elegís el tornillo, según la regla práctica?", opciones: ["De 1 cm","De unos 4 a 5 cm","De 10 cm","De 2 cm"], correcta: 1, explicacion: "Unas 2 a 2,5 veces el espesor de la pieza que fijás. 2 cm tienta porque es el espesor, pero apenas entraría en la segunda pieza." },
    { q: "Querés una unión muy firme entre dos piezas. ¿Qué hacés además de atornillar?", opciones: ["Más tornillos de los necesarios","Clavos encima de los tornillos","Ponés cola vinílica en las superficies que se tocan","Nada más"], correcta: 2, explicacion: "La cola hace la unión mucho más fuerte y el tornillo la aprieta mientras seca. Más tornillos tientan, pero pueden rajar la madera." },
    { q: "Vas a colgar una repisa al lado de un enchufe. ¿Dónde no perforás?", opciones: ["Justo arriba, abajo o al costado del enchufe: por ahí suelen ir los cables","A 1 metro del enchufe","Donde marcaste con el nivel","En ningún lugar de esa pared"], correcta: 0, explicacion: "Los cables suelen ir en línea recta desde enchufes y llaves. Pensar que no se puede perforar toda la pared tienta por prudencia, pero alcanza con evitar esas líneas." },
    { q: "Perforando, tocaste algo metálico y sale agua. ¿Qué hacés?", opciones: ["Tapás el agujero con masilla y listo","Seguís perforando","Esperás a ver si para sola","Cortás el agua general y llamás a un profesional"], correcta: 3, explicacion: "Un caño roto dentro de la pared se agrava. Tapar con masilla tienta para ocultarlo, pero el agua sigue saliendo adentro de la pared." },
    { q: "Tu pared es de Durlock (placa de yeso). ¿Qué fijación usás?", opciones: ["Un tarugo común de ladrillo","Un tarugo especial para placa de yeso, o fijar a un montante","Solo un clavo","Cola vinílica"], correcta: 1, explicacion: "El tarugo común no se expande bien en la placa y se sale. Usar el de ladrillo tienta porque es el que tenés, pero con peso se arranca." },
  ],
},
{
  id: "uniones",
  icono: "🧩",
  titulo: "Uniones: tornillos, tarugos de madera y cola",
  nivel: "Intermedio",
  objetivos: [
    "Elegir la unión según el mueble: a tope con tornillos, con tarugos de madera, a media madera o con escuadras",
    "Encolar y prensar bien, respetando los tiempos del envase",
    "Comprobar que un armado quedó a escuadra midiendo las diagonales",
  ],
  lecciones: [
    { titulo: "Los tipos de unión", html: `
      <p class="idea">Una <strong>unión</strong> es la forma de juntar dos piezas. La elección depende de cuánta fuerza tiene que aguantar, de si se va a ver y de qué herramientas tenés. Para empezar, cuatro uniones cubren casi todo.</p>
      <table>
        <tr><th>Unión</th><th>Cómo es</th><th>Ventaja</th><th>Desventaja</th></tr>
        <tr><td>A tope con tornillos (y cola)</td><td>Una pieza apoyada contra otra, atornillada</td><td>La más simple y rápida</td><td>Los tornillos se ven (se pueden tapar)</td></tr>
        <tr><td>Con tarugos de madera (espigas)</td><td>Varillas de madera encoladas en agujeros de las dos piezas</td><td>No se ve nada de metal; muy firme con cola</td><td>Los agujeros tienen que coincidir exacto</td></tr>
        <tr><td>A media madera</td><td>Se rebaja la mitad del espesor de cada pieza y se encastran</td><td>Muy firme, plana</td><td>Requiere cortes precisos</td></tr>
        <tr><td>Con escuadras metálicas</td><td>Una escuadra de metal atornillada en el ángulo</td><td>Fácil y fuerte</td><td>Se ve; aspecto rústico</td></tr>
      </table>
      <p><strong>Ojo con los nombres:</strong> en Argentina "tarugo" se usa para dos cosas distintas: el taco de plástico para la pared (módulo 4) y la varilla de madera para uniones, que también se llama espiga. En este módulo es la de madera.</p>
      <p><strong>Para los primeros proyectos:</strong> unión a tope con cola y tornillos. Es simple y firme. Si no querés que se vean los tornillos, se avellanan (módulo 4) y se tapan con masilla para madera o con tapitas de madera.</p>
      <p>Por ejemplo, un banquito simple puede armarse completo con uniones a tope con cola y tornillos, y escuadras metálicas abajo del asiento para que no se mueva.</p>` },
    { titulo: "Encolar y prensar", html: `
      <p class="idea">La <strong>cola vinílica</strong> (la cola blanca para madera) bien usada es más fuerte que la madera misma. Las claves: superficies limpias y bien apoyadas, la cantidad justa y apretar mientras seca.</p>
      <ol>
        <li><strong>Probá en seco:</strong> armá todo sin cola para comprobar que las piezas encajan. Si tenés que forzar algo, corregilo antes.</li>
        <li><strong>Cola en las dos superficies</strong>, una capa fina y pareja (no un charco).</li>
        <li><strong>Apretá con prensas o sargentos</strong> (prensas largas) hasta que salga un poquito de cola por los bordes. Si no sale nada, falta cola; si chorrea mucho, sobra.</li>
        <li><strong>Limpiá la cola que salió</strong> con un trapo húmedo antes de que seque: la cola seca no deja que el barniz agarre y queda una mancha.</li>
        <li><strong>Respetá los tiempos del envase.</strong> En general, la pieza se deja prensada alrededor de una hora y la unión no se exige hasta el día siguiente. Cada producto indica sus tiempos: seguí los de tu envase.</li>
      </ol>
      <table>
        <tr><th>Problema</th><th>Causa</th></tr>
        <tr><td>La unión se despega</td><td>Superficies sucias, con polvo o barniz, o se exigió antes de tiempo</td></tr>
        <tr><td>Manchas al barnizar</td><td>Cola seca que no se limpió</td></tr>
        <tr><td>Quedó torcido</td><td>Las prensas apretaron de un solo lado (lección siguiente)</td></tr>
      </table>
      <p>Para proteger la madera de las marcas de la prensa, poné un taco de madera entre la prensa y la pieza.</p>
      <p>Por ejemplo, la cola vinílica común es para interior. Para algo que va a estar al aire libre o con humedad, hay colas específicas para exterior: fijate en el envase.</p>` },
    { titulo: "Armar a escuadra: las diagonales", html: `
      <p class="idea">Un mueble puede tener todas las piezas bien cortadas y quedar torcido si se arma "en rombo". La forma más simple de comprobarlo es medir las <strong>diagonales</strong>: si son iguales, está a escuadra.</p>
      <pre><code>  A ───────── B
  │ ╲       ╱ │     Si la diagonal A-C mide igual que la B-D,
  │   ╲   ╱   │     el rectángulo está a escuadra (90 grados en las esquinas).
  │   ╱   ╲   │     Si una es más larga, está en rombo:
  │ ╱       ╲ │     empujá suave la esquina de la diagonal larga.
  D ───────── C</code></pre>
      <p><strong>Cómo se hace:</strong></p>
      <ol>
        <li>Armá con cola y prensas, sin apretar del todo.</li>
        <li>Medí las dos diagonales con la cinta, de esquina a esquina.</li>
        <li>Si una es más larga, empujá suave en la dirección de esa diagonal (o corré un poco una prensa) hasta que midan igual.</li>
        <li>Apretá del todo y volvé a medir.</li>
      </ol>
      <p>Esto funciona por una propiedad de los rectángulos: sus dos diagonales siempre miden lo mismo. En un rombo o un paralelogramo, no.</p>
      <table>
        <tr><th>Diferencia entre diagonales</th><th>Qué hacés</th></tr>
        <tr><td>0 a 1 mm</td><td>Está bien</td></tr>
        <tr><td>2 a 3 mm</td><td>Corregís antes de que seque la cola</td></tr>
        <tr><td>Mucho más</td><td>Revisá si alguna pieza está mal cortada</td></tr>
      </table>
      <p><strong>Fondos y estantes ayudan:</strong> un fondo de multilaminado clavado o atornillado a un mueble ya escuadrado lo mantiene así para siempre. Por eso los muebles de placard tienen fondo, aunque no se vea.</p>
      <p>Por ejemplo, medir las diagonales lleva un minuto y es lo que diferencia un mueble que cierra bien de uno con puertas que rozan.</p>` },
  ],
  practica: [
    "Uní dos retazos a tope con cola y tornillos. Al día siguiente intentá separarlos con la mano y anotá si la unión aguantó.",
    "Armá un marco rectangular con cuatro piezas y medí las diagonales antes de que seque la cola. Anotá la diferencia antes y después de corregir.",
    "Encolá dos piezas y dejá a propósito un poco de cola sin limpiar en un borde. Después de barnizar o pintar, anotá qué diferencia se ve entre la zona limpia y la que tenía cola.",
  ],
  recursos: [
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
  ],
  quiz: [
    { q: "Vas a hacer tu primer mueble simple. ¿Qué unión te conviene?", opciones: ["A media madera en todas las esquinas","Solo con cola, sin apretar","A tope con cola y tornillos","Solo con clavos chicos"], correcta: 2, explicacion: "Es la más simple y firme para empezar. La media madera tienta por profesional, pero exige cortes muy precisos." },
    { q: "No querés que se vean los tornillos de tu mueble. ¿Qué hacés?", opciones: ["Los avellanás y tapás con masilla para madera o tapitas de madera","Usás tornillos más cortos","Los pintás de otro color","No usás tornillos ni cola"], correcta: 0, explicacion: "Avellanar deja la cabeza bajo la superficie para taparla. Tornillos más cortos tientan, pero la unión pierde fuerza." },
    { q: "En el corralón te ofrecen \"tarugos\". ¿Qué tenés que aclarar?", opciones: ["Nada, son todos iguales","El color","Si son importados","Si querés los de plástico para la pared o las varillas de madera para uniones"], correcta: 3, explicacion: "En Argentina la palabra se usa para dos cosas distintas. Pensar que son iguales tienta por el nombre, pero no se reemplazan entre sí." },
    { q: "Antes de encolar, ¿qué hacés?", opciones: ["Ponés mucha cola por las dudas","Probás el armado en seco, sin cola","Lijás después de encolar","Nada, directamente encolás"], correcta: 1, explicacion: "En seco ves si algo no encaja antes de que la cola empiece a secar. Encolar directo tienta por rápido, pero corregir con cola húmeda es mucho más difícil." },
    { q: "Apretaste con las prensas y no salió nada de cola por los bordes. ¿Qué concluís?", opciones: ["Que está perfecto","Que sobró cola","Que probablemente faltó cola","Que las prensas están flojas siempre"], correcta: 2, explicacion: "Un poco de cola que sale indica la cantidad justa. Pensar que está perfecto tienta porque queda limpio, pero la unión puede quedar seca." },
    { q: "Salió cola por el borde de la unión. ¿Qué hacés?", opciones: ["La limpiás con un trapo húmedo antes de que seque","La dejás secar y la lijás","La dejás, no se nota","La tapás con barniz"], correcta: 0, explicacion: "La cola seca impide que el barniz agarre y deja mancha. Lijarla después tienta, pero suele quedar marca igual." },
    { q: "Encolaste a la tarde. ¿Cuándo podés sentarte en el banquito?", opciones: ["A los 10 minutos","Apenas sacás las prensas","Nunca, la cola no aguanta peso","Cuando lo indique el envase, en general al día siguiente"], correcta: 3, explicacion: "La cola sigue endureciendo después de sacar las prensas. Sentarte enseguida tienta para probarlo, pero la unión se puede abrir." },
    { q: "Tu banquito va a estar en un patio al aire libre. ¿Qué cola usás?", opciones: ["La cola vinílica común","Una cola específica para exterior","Cola de papel","No hace falta cola"], correcta: 1, explicacion: "La cola vinílica común es para interior y la humedad la afloja. Usar la común tienta porque la tenés, pero la unión no dura afuera." },
    { q: "Medís las diagonales de un marco y una mide 3 mm más que la otra. ¿Qué hacés?", opciones: ["Nada, 3 mm no importa","Cortás una pieza más corta","Empujás suave en la dirección de la diagonal larga antes de que seque","Esperás a que seque y ves"], correcta: 2, explicacion: "Con la cola húmeda se corrige fácil. Esperar a que seque tienta por comodidad, pero después queda torcido para siempre." },
    { q: "¿Por qué medir las diagonales sirve para saber si algo está a escuadra?", opciones: ["Porque en un rectángulo las dos diagonales miden lo mismo","Porque son las más largas","Porque así lo dice la cinta","No sirve, hay que usar escuadra"], correcta: 0, explicacion: "Es una propiedad del rectángulo: diagonales iguales. Pensar que hay que usar escuadra tienta, pero en un mueble grande las diagonales son más precisas." },
    { q: "Tu mueble quedó escuadrado, pero se tuerce con el tiempo. ¿Qué le agregás?", opciones: ["Más cola en las esquinas","Patas más largas","Barniz","Un fondo de multilaminado fijado al mueble ya escuadrado"], correcta: 3, explicacion: "El fondo mantiene la forma. Más cola tienta, pero no impide que el mueble se deforme en rombo." },
    { q: "La prensa te deja marcas en la madera. ¿Qué hacés?", opciones: ["Apretás menos de lo necesario","Ponés un taco de madera entre la prensa y la pieza","No usás prensa","Lijás las marcas después siempre"], correcta: 1, explicacion: "El taco reparte la presión y protege la superficie. Apretar menos tienta, pero la unión queda débil." },
  ],
},
{
  id: "terminaciones",
  icono: "🖌️",
  titulo: "Lijado y terminaciones",
  nivel: "Intermedio",
  objetivos: [
    "Lijar en orden de granos, a favor de la veta, y preparar la superficie para la terminación",
    "Elegir entre aceite, barniz, laca o pintura según el uso del mueble",
    "Aplicar terminaciones con ventilación y desechar los trapos con aceite sin riesgo de incendio",
  ],
  lecciones: [
    { titulo: "Lijar bien", html: `
      <p class="idea">La terminación muestra todo lo que dejó la lija: si quedó una raya, el barniz la resalta. Lijar bien es ir de un grano grueso a uno fino, siempre a favor de la veta, sin saltear pasos.</p>
      <p>El <strong>grano</strong> de una lija es el número que indica qué tan fina es: cuanto más alto, más fina.</p>
      <table>
        <tr><th>Grano</th><th>Para</th></tr>
        <tr><td>60 a 80</td><td>Sacar marcas, emparejar, quitar pintura vieja</td></tr>
        <tr><td>120</td><td>Paso intermedio: borra las rayas del grano grueso</td></tr>
        <tr><td>180 a 220</td><td>Terminación final antes de barnizar o pintar</td></tr>
        <tr><td>320 o más</td><td>Entre manos de barniz, muy suave</td></tr>
      </table>
      <p><strong>Las reglas:</strong></p>
      <ul>
        <li>No saltees granos: de 80 directo a 220 deja rayas profundas que la fina no borra.</li>
        <li>Siempre a favor de la veta (módulo 1).</li>
        <li>Usá un taco de lijar (un bloque de madera o goma con la lija alrededor): con la mano sola se hacen pozos.</li>
        <li>Sacá el polvo entre grano y grano con un trapo apenas húmedo o una brocha.</li>
        <li>Barbijo y lugar ventilado, sobre todo con MDF (módulo 0).</li>
      </ul>
      <p><strong>El truco del lápiz:</strong> antes de cada grano, hacé rayas suaves con lápiz sobre toda la superficie. Cuando ya no quedan rayas de lápiz, lijaste parejo y podés pasar al siguiente grano.</p>
      <p><strong>Cantos:</strong> pasá la lija suave por los cantos vivos (las aristas filosas) para redondearlos apenas. Así no se astillan con el uso y el barniz agarra mejor.</p>
      <p>Por ejemplo, para un primer mueble de pino, alcanza con 120 y después 180. El 80 solo si hay marcas o la madera viene muy áspera.</p>` },
    { titulo: "Elegir la terminación", html: `
      <p class="idea">La terminación protege la madera de la humedad, las manchas y el desgaste, y cambia cómo se ve. No hay una mejor: hay una adecuada para cada uso.</p>
      <table>
        <tr><th>Terminación</th><th>Cómo queda</th><th>Bueno para</th><th>Cuidado con</th></tr>
        <tr><td>Aceite (de lino, de tung, aceites para madera)</td><td>Natural, mate, se siente la madera</td><td>Tablas, mesas rústicas, objetos que se tocan</td><td>Protege menos del agua; los trapos con aceite pueden prenderse fuego solos (próxima lección)</td></tr>
        <tr><td>Barniz</td><td>Una capa transparente brillante o satinada</td><td>Muebles de uso diario, mesas</td><td>Necesita varias manos y lijado suave entre manos</td></tr>
        <tr><td>Laca</td><td>Capa dura, seca rápido</td><td>Muebles de interior</td><td>Muchos olores y vapores: ventilación</td></tr>
        <tr><td>Pintura (al agua o esmalte)</td><td>Color, tapa la veta</td><td>MDF, muebles para chicos, piezas que querés de color</td><td>En madera maciza, conviene un fondo o sellador antes</td></tr>
        <tr><td>Impregnante para exterior</td><td>Penetra en la madera, color suave</td><td>Muebles de jardín, decks</td><td>Hay que renovarlo cada tanto</td></tr>
      </table>
      <p><strong>Productos al agua o al solvente:</strong> los productos al agua tienen menos olor, se limpian con agua y secan rápido. Los al solvente suelen ser más resistentes, pero tienen más vapores. Para un primer proyecto en un departamento, los productos al agua son más cómodos y seguros.</p>
      <p><strong>Probá siempre en un retazo:</strong> el mismo barniz se ve distinto en pino que en eucalipto. Aplicalo en un pedazo sobrante de la misma madera, con el mismo lijado, antes de hacerlo en el mueble.</p>
      <p>Por ejemplo, para una tabla de picar que va a estar en contacto con comida, se usan aceites aptos para ese uso (lo indica el envase), no barniz ni pintura.</p>` },
    { titulo: "Aplicar con seguridad", html: `
      <p class="idea">Las terminaciones tienen dos riesgos que hay que conocer: los vapores, que se respiran, y los trapos con aceite, que se pueden prender fuego solos. Los dos se evitan con hábitos simples.</p>
      <p><strong>Ventilación.</strong> La guía de OSHA sobre trabajo con madera incluye los productos de terminación entre los riesgos para la respiración y la piel. Trabajá con ventanas abiertas o al aire libre, usá guantes de nitrilo y, si el envase lo indica, un barbijo para vapores (no alcanza el de polvo). Leé siempre la etiqueta: dice qué protección usar.</p>
      <p><strong>Los trapos con aceite.</strong> Los aceites que secan (como el de lino) liberan calor mientras se endurecen. Un trapo empapado con aceite, hecho un bollo en un tacho, puede acumular ese calor hasta prenderse fuego solo, horas después. Se llama <strong>combustión espontánea</strong> y causa incendios en talleres.</p>
      <table>
        <tr><th>Con los trapos con aceite</th><th>Bien</th><th>Mal</th></tr>
        <tr><td>Al terminar</td><td>Extenderlos abiertos, al aire libre, sobre algo que no se queme, hasta que se endurezcan</td><td>Hacerlos un bollo y tirarlos al tacho</td></tr>
        <tr><td>Si los vas a guardar</td><td>En un recipiente de metal con tapa, con agua</td><td>En una bolsa de plástico o de papel</td></tr>
      </table>
      <p><strong>Cómo aplicar barniz:</strong></p>
      <ol>
        <li>Superficie lijada y sin polvo.</li>
        <li>Primera mano fina con pincel o trapo, a favor de la veta.</li>
        <li>Dejá secar lo que diga el envase.</li>
        <li>Lijado muy suave (320) para sacar la aspereza y sacás el polvo.</li>
        <li>Segunda mano (y tercera si es una mesa de uso diario).</li>
      </ol>
      <p>Por ejemplo, la aspereza que aparece después de la primera mano es normal: el agua o el solvente levanta las fibras de la madera. El lijado suave entre manos la saca.</p>` },
  ],
  practica: [
    "Lijá un retazo de pino con 120 y 180 usando el truco del lápiz. Anotá cuántas pasadas necesitaste en cada grano hasta borrar las rayas.",
    "Probá dos terminaciones distintas en dos retazos de la misma madera. Anotá cómo quedó cada una y cuál elegirías para un banquito.",
    "Escribí un cartel para tu taller con la forma correcta de desechar los trapos con aceite y anotá dónde lo pegaste.",
  ],
  recursos: [
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
  ],
  quiz: [
    { q: "Lijaste con grano 80 y pasaste directo a 220. Al barnizar se ven rayas. ¿Qué pasó?", opciones: ["El barniz era malo","Faltó lijar con 60","Salteaste el 120: la lija fina no borra las rayas profundas de la gruesa","La madera tenía un defecto"], correcta: 2, explicacion: "Cada grano borra las rayas del anterior. Culpar al barniz tienta, pero el barniz solo muestra lo que dejó la lija." },
    { q: "Tenés que hacer el lijado final antes de barnizar. ¿Qué grano usás?", opciones: ["180 a 220","60","80","40"], correcta: 0, explicacion: "Los granos altos dejan la superficie lisa. 80 tienta porque saca más rápido, pero deja rayas visibles." },
    { q: "Lijás con la lija en la mano, sin taco, y la superficie queda con pozos. ¿Qué cambiás?", opciones: ["Apretás más fuerte","Usás una lija más gruesa","Lijás en círculos","Usás un taco de lijar"], correcta: 3, explicacion: "El taco reparte la presión pareja. Apretar más tienta, pero los dedos hacen pozos más profundos." },
    { q: "Si hacés rayas de lápiz antes de lijar, ¿para qué sirven?", opciones: ["Para decorar","Para saber cuándo lijaste parejo toda la superficie: cuando desaparecen","Para que la lija agarre mejor","Para marcar el corte"], correcta: 1, explicacion: "Las rayas que quedan muestran dónde falta lijar. Pensar que ayuda a la lija tienta, pero es solo una guía visual." },
    { q: "Vas a hacer una tabla de picar. ¿Qué terminación usás?", opciones: ["Barniz","Esmalte sintético","Un aceite apto para contacto con alimentos, según el envase","Laca"], correcta: 2, explicacion: "La tabla va a estar en contacto con comida. El barniz tienta porque protege, pero se raya con el cuchillo y no es para alimentos." },
    { q: "Vas a pintar un mueble de MDF en un departamento. ¿Qué tipo de producto es más cómodo?", opciones: ["Pintura al agua: menos olor y se limpia con agua","Esmalte al solvente sin ventilar","Laca en spray adentro","Nafta con pigmento"], correcta: 0, explicacion: "Los productos al agua tienen menos vapores. El esmalte al solvente tienta porque es más resistente, pero en un ambiente cerrado los vapores molestan y hacen mal." },
    { q: "Querés saber cómo va a quedar el barniz en tu mueble de eucalipto. ¿Qué hacés?", opciones: ["Mirás la foto del envase","Lo probás en pino","Lo aplicás directo en el mueble","Lo probás en un retazo de la misma madera, con el mismo lijado"], correcta: 3, explicacion: "El mismo producto se ve distinto en cada madera. La foto del envase tienta por rápida, pero está hecha sobre otra madera." },
    { q: "Terminaste de aceitar una mesa. ¿Qué hacés con los trapos?", opciones: ["Los hacés un bollo y al tacho","Los extendés abiertos al aire libre hasta que se endurezcan, o los guardás en metal con agua","Los guardás en una bolsa de plástico","Los dejás en el piso del taller"], correcta: 1, explicacion: "Un bollo de trapos con aceite puede prenderse fuego solo. El tacho tienta por cómodo, pero es justo como empiezan esos incendios." },
    { q: "¿Qué es la combustión espontánea de los trapos con aceite?", opciones: ["Que el aceite explota al abrirlo","Un mito sin base","Que el aceite libera calor al secarse y, acumulado en un bollo, el trapo se prende fuego solo","Que se prende si le acercás un fósforo"], correcta: 2, explicacion: "Pasa sin fuego cerca, horas después. Pensar que es un mito tienta porque suena raro, pero causa incendios reales en talleres." },
    { q: "Vas a barnizar con un producto al solvente. ¿Qué no puede faltar?", opciones: ["Ventilación, guantes de nitrilo y la protección que indique la etiqueta","Barbijo para polvo y listo","Nada si es un rato corto","Trabajar con la ventana cerrada para que no entre polvo"], correcta: 0, explicacion: "Los vapores se respiran. El barbijo para polvo tienta porque ya lo tenés, pero no filtra vapores." },
    { q: "Después de la primera mano de barniz, la superficie quedó áspera. ¿Qué hacés?", opciones: ["Le das 5 manos más para taparlo","Lijás con 80","Es un defecto: tirás el mueble","Lijás muy suave con 320, sacás el polvo y das la segunda mano"], correcta: 3, explicacion: "Es normal: se levantan las fibras. Lijar con 80 tienta para sacarlo rápido, pero te comés el barniz y rayás la madera." },
    { q: "Hiciste un banquito para el jardín. ¿Qué terminación elegís?", opciones: ["Barniz de interior","Un impregnante para exterior, que se renueva cada tanto","Laca de interior","Sin terminación"], correcta: 1, explicacion: "Afuera hay sol y lluvia. El barniz de interior tienta porque brilla lindo, pero se agrieta y se pela al sol." },
  ],
},
{
  id: "vender",
  icono: "💰",
  titulo: "Presupuestar, cobrar y formarte",
  nivel: "Intermedio",
  objetivos: [
    "Calcular el costo de un trabajo: materiales, desperdicio, insumos, desgaste de herramientas y horas",
    "Poner un precio y armar un presupuesto escrito para un cliente",
    "Saber dónde seguir formándote y certificar el oficio",
  ],
  lecciones: [
    { titulo: "Cuánto cuesta hacer algo", html: `
      <p class="idea">El error más común de quien empieza a vender lo que hace es cobrar solo la madera. Un trabajo cuesta mucho más: insumos, el desgaste de las herramientas y, sobre todo, tus horas.</p>
      <table>
        <tr><th>Costo</th><th>Qué incluye</th><th>Cómo calcularlo</th></tr>
        <tr><td>Materiales</td><td>Madera, tableros, herrajes, tornillos</td><td>Lista de cortes (módulo 2) + 10% de desperdicio</td></tr>
        <tr><td>Insumos</td><td>Cola, lijas, barniz, pintura, pinceles</td><td>La parte que usás de cada envase</td></tr>
        <tr><td>Herramientas</td><td>Hojas, mechas y el desgaste de las máquinas</td><td>Un porcentaje chico del trabajo, o lo que gastás por mes dividido los trabajos</td></tr>
        <tr><td>Tus horas</td><td>Medir, cortar, armar, lijar, terminar, comprar, entregar</td><td>Horas reales por lo que querés ganar por hora</td></tr>
        <tr><td>Otros</td><td>Viajes al corralón, envío, luz del taller</td><td>Estimación por trabajo</td></tr>
      </table>
      <p>Por ejemplo, con números redondos de ejemplo (los precios cambian, usá los tuyos):</p>
      <pre><code>Repisa de pino:
  Madera (con 10% de desperdicio)      $ 18.000
  Tornillos, cola, lija, barniz         $  7.000
  Desgaste de herramientas              $  2.000
  Horas: 6 h x $ 6.000                  $ 36.000
  Viaje al corralón                     $  3.000
  COSTO TOTAL                           $ 66.000</code></pre>
      <p>Fijate que las horas son más de la mitad del costo. Si cobrás $ 30.000 porque "la madera salió $ 18.000", estás trabajando casi gratis.</p>
      <p><strong>Anotá las horas reales.</strong> Los primeros trabajos llevan mucho más tiempo del que pensás. Anotá cuánto tardás en cada etapa: con el tiempo vas a ser más rápido y vas a poder presupuestar mejor.</p>` },
    { titulo: "El precio y el presupuesto", html: `
      <p class="idea">El precio no es solo el costo: es el costo más una ganancia, mirando lo que cobran otros por algo parecido. Y se le entrega al cliente un <strong>presupuesto escrito</strong>, que evita malentendidos.</p>
      <p><strong>Tres miradas para el precio:</strong></p>
      <ol>
        <li><strong>Tu costo</strong> (lección anterior): el piso, por debajo perdés plata.</li>
        <li><strong>Una ganancia</strong> encima del costo: para reinvertir en herramientas, cubrir errores y crecer.</li>
        <li><strong>El mercado:</strong> mirá cuánto se vende algo parecido en ferias, en tiendas o en internet. Si tu precio queda muy arriba, buscá cómo bajar costos o mostrá qué tiene de distinto tu trabajo.</li>
      </ol>
      <p>Por ejemplo, un presupuesto simple para un cliente:</p>
      <pre><code>PRESUPUESTO N.º 12 – Fecha: 10/03
Cliente: Laura M.
Trabajo: repisa de pino de 60 x 50 x 18 cm, dos estantes,
         terminación barniz al agua satinado.
Precio: $ 80.000. Seña: 50% al confirmar. Saldo: a la entrega.
Plazo de entrega: 10 días desde la seña.
Validez del presupuesto: 15 días (los precios de los materiales cambian).
No incluye: instalación en la pared.</code></pre>
      <table>
        <tr><th>Parte del presupuesto</th><th>Para qué</th></tr>
        <tr><td>Medidas y materiales</td><td>Que el cliente sepa exactamente qué recibe</td></tr>
        <tr><td>Seña</td><td>Cubre los materiales antes de empezar</td></tr>
        <tr><td>Validez</td><td>Te protege si suben los precios</td></tr>
        <tr><td>Qué no incluye</td><td>Evita discusiones después</td></tr>
      </table>
      <p>Si vas a vender seguido, informate sobre cómo inscribirte para facturar (por ejemplo, el monotributo). Consultá en la página oficial de ARCA (la ex AFIP) o con un contador: este curso no reemplaza ese asesoramiento.</p>` },
    { titulo: "Seguir formándote y certificar", html: `
      <p class="idea">Este curso te da las bases. Un oficio se termina de aprender en un taller, al lado de alguien con experiencia, y con un certificado que lo respalde. En Argentina hay opciones gratuitas.</p>
      <table>
        <tr><th>Dónde</th><th>Qué ofrece</th></tr>
        <tr><td>Centros de Formación Profesional (CFP)</td><td>Cursos presenciales de carpintería, muchas veces gratuitos, con certificado. Dependen de cada provincia o municipio</td></tr>
        <tr><td>Oficinas de empleo del municipio</td><td>Te orientan sobre cursos y programas de tu zona</td></tr>
        <tr><td>Portal Empleo</td><td>Cursos gratuitos con certificado del Gobierno nacional</td></tr>
        <tr><td>INET (Instituto Nacional de Educación Tecnológica)</td><td>Coordina la educación técnico profesional del país</td></tr>
        <tr><td>Universidades nacionales</td><td>Algunas dictan cursos de extensión de carpintería</td></tr>
      </table>
      <p>Las fechas y los cupos cambian cada año: buscá "centro de formación profesional carpintería" y el nombre de tu localidad, o preguntá en la oficina de empleo de tu municipio.</p>
      <p><strong>Armá tu portafolio desde el primer trabajo:</strong> sacale fotos a cada pieza (de frente, de costado, un detalle de la unión) con buena luz y fondo liso. Anotá las medidas, los materiales y el tiempo. Ese portafolio sirve para vender, para conseguir trabajo en una carpintería y para mostrar en un curso lo que ya sabés hacer.</p>
      <p><strong>Trabajar en una carpintería:</strong> muchos talleres toman ayudantes. Lo que más valoran al empezar: seguridad, prolijidad, puntualidad y ganas de aprender. Con un portafolio y un certificado, llegás con algo concreto para mostrar.</p>
      <p>Por ejemplo, la sierra de banco y otras máquinas grandes que este curso no enseña a usar solo, se aprenden justamente en un CFP o en un taller, con supervisión.</p>` },
  ],
  practica: [
    "Calculá el costo de la repisa de la lista de cortes del módulo 2 con precios reales de tu zona. Anotá el costo de cada línea y el total.",
    "Buscá 3 repisas parecidas a la venta (feria, tienda o internet) y anotá sus precios. Compará con tu costo y decidí un precio.",
    "Buscá el centro de formación profesional más cercano que tenga carpintería, o preguntá en la oficina de empleo. Anotá el nombre, la duración del curso y si es gratuito.",
  ],
  recursos: [
    { t: "Gobierno de Argentina: buscás trabajo (oficinas de empleo y formación)", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
    { t: "Portal Empleo: cursos gratuitos con certificado", url: "https://www.portalempleo.gob.ar/" },
    { t: "INET: Instituto Nacional de Educación Tecnológica", url: "https://www.argentina.gob.ar/educacion/inet" },
  ],
  quiz: [
    { q: "Tu repisa llevó $ 18.000 de madera y la cobraste $ 30.000. ¿Qué error puede haber?", opciones: ["Ninguno, ganaste $ 12.000","Cobraste demasiado","No contaste tus horas, los insumos ni el desgaste: podés estar trabajando casi gratis","Que la madera era cara"], correcta: 2, explicacion: "Las horas suelen ser más de la mitad del costo. Pensar que ganaste $ 12.000 tienta porque es la diferencia con la madera, pero faltan casi todos los costos." },
    { q: "En el ejemplo de la lección, ¿qué parte del costo de la repisa es la más grande?", opciones: ["Las horas de trabajo","La madera","El barniz","El viaje al corralón"], correcta: 0, explicacion: "Con 6 horas a $ 6.000 son $ 36.000 de $ 66.000. La madera tienta como respuesta porque es lo que se ve, pero es menos de un tercio." },
    { q: "Tus primeros trabajos tardan mucho más de lo que pensabas. ¿Qué hacés?", opciones: ["Cobrás menos para compensar","No contás esas horas","Trabajás de noche sin anotar","Anotás las horas reales de cada etapa para presupuestar mejor"], correcta: 3, explicacion: "Medir el tiempo real te deja presupuestar bien y ver cómo mejorás. No contarlas tienta porque estás aprendiendo, pero te acostumbra a cobrar de menos." },
    { q: "¿Qué es el piso del precio?", opciones: ["El precio del competidor más barato","Tu costo: por debajo perdés plata","Lo que el cliente quiere pagar","El precio de la madera"], correcta: 1, explicacion: "Debajo del costo cada venta te hace perder. El competidor más barato tienta como referencia, pero sus costos pueden ser distintos o puede estar perdiendo plata." },
    { q: "Tu precio queda muy por encima de repisas parecidas que se venden. ¿Qué hacés?", opciones: ["Bajás el precio por debajo de tu costo","Dejás de vender","Buscás bajar costos o mostrar qué tiene de distinto tu trabajo","Copiás el precio más alto"], correcta: 2, explicacion: "Hay que mirar costo y mercado juntos. Bajar por debajo del costo tienta para vender, pero cada venta te hace perder." },
    { q: "¿Para qué sirve pedir una seña?", opciones: ["Para cubrir los materiales antes de empezar","Para cobrar más","Porque es obligatorio por ley","Para no tener que entregar"], correcta: 0, explicacion: "La seña te evita poner tu plata en materiales de un trabajo que después cancelan. Pensar que es obligatoria por ley tienta, pero es un acuerdo con el cliente." },
    { q: "Tu presupuesto no dice hasta cuándo vale y a los dos meses suben los materiales. ¿Qué te faltó?", opciones: ["El nombre del cliente","El color de la madera","La firma del corralón","La validez del presupuesto"], correcta: 3, explicacion: "La validez te protege de los aumentos. El nombre del cliente tienta como dato que falta, pero no resuelve el aumento." },
    { q: "El cliente esperaba que instalaras la repisa y vos no. ¿Qué podías haber escrito en el presupuesto?", opciones: ["Nada, es obvio","Qué no incluye: \"no incluye instalación en la pared\"","Un precio más alto","La medida de la pared"], correcta: 1, explicacion: "Aclarar qué no incluye evita discusiones. Pensar que es obvio tienta, pero para el cliente puede no serlo." },
    { q: "Vas a vender tus muebles seguido. ¿Qué averiguás?", opciones: ["Nada, no hace falta","Solo lo que te diga un vecino","Cómo inscribirte para facturar, por ejemplo el monotributo, en ARCA o con un contador","Que la IA decida tu categoría"], correcta: 2, explicacion: "Vender de forma regular tiene obligaciones. Que la IA decida tienta por rápido, pero puede estar desactualizada: consultá la fuente oficial o un contador." },
    { q: "Querés aprender a usar la sierra de banco. ¿Dónde?", opciones: ["En un Centro de Formación Profesional o en un taller, con supervisión","Con un video, solo","Probando en casa sin protección","No se puede aprender"], correcta: 0, explicacion: "Las máquinas grandes se aprenden con alguien al lado. El video tienta por accesible, pero no te corrige cuando hacés algo peligroso." },
    { q: "Querés trabajar en una carpintería como ayudante. ¿Qué llevás?", opciones: ["Solo un CV sin ejemplos","Nada, te van a enseñar todo","Fotos de muebles de otros","Fotos de tus trabajos con medidas y materiales, y el certificado si tenés"], correcta: 3, explicacion: "Un portafolio muestra lo que sabés hacer. Llevar fotos de otros tienta para impresionar, pero se descubre en la primera tarea." },
    { q: "¿Cómo sacás buenas fotos de tus trabajos para el portafolio?", opciones: ["De noche con flash y el taller desordenado de fondo","Con buena luz, fondo liso, de frente, de costado y un detalle de la unión","Una sola foto de lejos","Con filtros que cambian el color de la madera"], correcta: 1, explicacion: "Fotos claras muestran la calidad. Los filtros tientan para que se vea más lindo, pero muestran un color que el cliente no va a recibir." },
  ],
},
{
  id: "proyecto",
  icono: "🏆",
  titulo: "Proyecto final: tu primer mueble",
  nivel: "Avanzado",
  objetivos: [
    "Planificar un mueble simple con plano, lista de cortes y presupuesto",
    "Construirlo aplicando seguridad, medición, corte, uniones y terminación",
    "Evaluarlo con una rúbrica medible y documentarlo para tu portafolio",
  ],
  lecciones: [
    { titulo: "Elegir y planificar el proyecto", html: `
      <p class="idea">El proyecto final es tu primer mueble completo. Elegí algo chico y útil: una repisa de pared, un banquito o una caja con tapa. Lo importante no es el tamaño: es hacer todo el proceso de punta a punta.</p>
      <table>
        <tr><th>Proyecto</th><th>Qué practicás</th><th>Dificultad</th></tr>
        <tr><td>Repisa de pared con dos estantes</td><td>Cortes rectos, uniones a tope, fijación a la pared</td><td>Baja</td></tr>
        <tr><td>Banquito de 4 patas</td><td>Patas iguales, uniones firmes, que no baile</td><td>Media</td></tr>
        <tr><td>Caja con tapa y bisagras</td><td>Escuadra, herrajes, precisión</td><td>Media</td></tr>
      </table>
      <p><strong>Antes de comprar nada:</strong></p>
      <ol>
        <li><strong>Plano</strong> con todas las medidas (módulo 2), usando el espesor real de la madera que vas a comprar.</li>
        <li><strong>Lista de cortes</strong>, con el total de material y el 10% de margen.</li>
        <li><strong>Lista de herramientas y protección</strong> que vas a usar en cada paso (módulo 0).</li>
        <li><strong>Orden de trabajo:</strong> cortar todo, probar en seco, encolar y atornillar, escuadrar, lijar, terminar.</li>
        <li><strong>Costo</strong> (módulo 7), aunque sea para vos: así practicás presupuestar.</li>
      </ol>
      <p>Por ejemplo, para el banquito, decidí primero la altura (unos 45 cm es una altura común para sentarse) y el tamaño del asiento, y recién después calculá el largo de las patas restando el espesor del asiento.</p>` },
    { titulo: "Construir paso a paso", html: `
      <p class="idea">Construir es seguir el plan con paciencia. La mayoría de los errores aparecen por apurarse: cortar sin medir dos veces, encolar sin probar en seco o barnizar sin lijar bien.</p>
      <table>
        <tr><th>Etapa</th><th>Control antes de pasar a la siguiente</th></tr>
        <tr><td>Medir y marcar</td><td>Cada medida revisada dos veces; desperdicio marcado con una cruz</td></tr>
        <tr><td>Cortar</td><td>Cada corte a escuadra; piezas iguales comparadas entre sí</td></tr>
        <tr><td>Probar en seco</td><td>Todo encaja sin forzar</td></tr>
        <tr><td>Encolar y atornillar</td><td>Agujeros guía hechos; cola limpia; diagonales iguales</td></tr>
        <tr><td>Lijar</td><td>Granos en orden, a favor de la veta, sin rayas de lápiz</td></tr>
        <tr><td>Terminar</td><td>Ventilación, probado en un retazo, trapos desechados bien</td></tr>
      </table>
      <p><strong>Si algo sale mal</strong> (y algo va a salir mal, es parte de aprender):</p>
      <ul>
        <li><strong>Una pieza quedó corta:</strong> cortá otra. Por eso compraste un 10% más.</li>
        <li><strong>El banquito baila:</strong> apoyalo en una superficie plana, marcá cuánto le sobra a la pata larga y recortá un poquito, de a poco.</li>
        <li><strong>Una unión quedó floja:</strong> si la cola no secó, desarmá y volvé a hacerla; si ya secó, reforzá con una escuadra metálica por dentro.</li>
      </ul>
      <p><strong>Seguridad hasta el final:</strong> el último corte del día, cuando estás cansado, es el más peligroso (módulo 0). Si estás cansado, seguí mañana.</p>
      <p>Por ejemplo, anotá en una hoja la hora en que empezás y terminás cada etapa: te va a servir para el presupuesto del próximo mueble.</p>` },
    { titulo: "Evaluar y mostrar tu mueble", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje. En carpintería, casi todos los criterios se pueden medir: con la escuadra, el nivel y la cinta.</p>
      <p>Puntuá cada criterio de 0 a 2:</p>
      <table>
        <tr><th>Criterio</th><th>Cómo lo medís</th><th>0</th><th>1</th><th>2</th></tr>
        <tr><td>Medidas</td><td>Cinta contra el plano</td><td>Más de 5 mm de diferencia</td><td>De 2 a 5 mm</td><td>Menos de 2 mm</td></tr>
        <tr><td>Escuadra</td><td>Diagonales o escuadra en las esquinas</td><td>Más de 4 mm de diferencia entre diagonales</td><td>De 2 a 4 mm</td><td>Menos de 2 mm</td></tr>
        <tr><td>Firmeza</td><td>Apoyalo en el piso y empujá suave</td><td>Baila o se mueve una unión</td><td>Baila apenas</td><td>Firme, sin movimiento</td></tr>
        <tr><td>Terminación</td><td>Mirá con luz de costado</td><td>Rayas, manchas de cola o gotas</td><td>Algún detalle</td><td>Pareja, sin marcas</td></tr>
        <tr><td>Seguridad y proceso</td><td>Tu lista de protección y tu hoja de tiempos</td><td>Sin protección o sin plano</td><td>Plano, pero sin registro</td><td>Plano, protección en cada paso y tiempos anotados</td></tr>
      </table>
      <p>El máximo es 10. El mueble está aprobado con <strong>8 o más</strong> y con un 2 en Seguridad y proceso: un mueble lindo hecho sin protección no es un buen resultado.</p>
      <p><strong>Para tu portafolio:</strong> fotos con buena luz (de frente, de costado, un detalle de la unión), el plano, la lista de cortes, el costo y las horas. Es lo que vas a mostrar para vender o para entrar a un taller (módulo 7).</p>
      <p>Por ejemplo, pedile a alguien que puntúe tu mueble con la misma rúbrica, midiendo él con la cinta y la escuadra. Si su puntaje es distinto del tuyo, revisen juntos en qué criterio no coinciden.</p>` },
  ],
  practica: [
    "Elegí tu proyecto y armá el plano, la lista de cortes, la lista de protección y el costo. Anotá el total de material y el costo estimado.",
    "Construí el mueble y anotá en una hoja la hora de inicio y fin de cada etapa. Anotá el total de horas.",
    "Puntuá tu mueble con la rúbrica, midiendo con cinta y escuadra. Anotá el puntaje de cada criterio y mejorá lo que puedas hasta llegar a 8.",
    "Sacale 3 fotos a tu mueble (de frente, de costado y un detalle) y armá una ficha de portafolio con medidas, materiales, horas y costo.",
  ],
  recursos: [
    { t: "OSHA: herramienta de seguridad en carpintería y trabajo con madera (en inglés)", url: "https://www.osha.gov/etools/woodworking" },
    { t: "Alison: curso gratis de fundamentos de la carpintería (en castellano)", url: "https://alison.com/es/curso/fundamentos-de-la-carpinteria" },
    { t: "Gobierno de Argentina: buscás trabajo (oficinas de empleo y formación)", url: "https://www.argentina.gob.ar/trabajo/buscastrabajo" },
  ],
  quiz: [
    { q: "Es tu primer mueble. ¿Qué proyecto conviene?", opciones: ["Un placard de 2 metros","Una mesa de comedor para 8","Algo chico y útil, como una repisa o un banquito","Una cocina completa"], correcta: 2, explicacion: "Lo importante es hacer todo el proceso de punta a punta. Un placard tienta por útil, pero tiene demasiadas piezas para un primer proyecto." },
    { q: "Querés un banquito de 45 cm de alto con un asiento de 2 cm de espesor. ¿Cuánto miden las patas si van debajo del asiento?", opciones: ["43 cm","45 cm","47 cm","41 cm"], correcta: 0, explicacion: "45 menos 2 del asiento da 43. 45 tienta porque es la altura que querés, pero el asiento suma su espesor arriba de las patas." },
    { q: "¿En qué orden hacés el trabajo?", opciones: ["Barnizar las piezas, cortar, armar","Encolar, cortar, lijar","Lijar, comprar, medir","Cortar todo, probar en seco, encolar y atornillar, escuadrar, lijar, terminar"], correcta: 3, explicacion: "Cada paso prepara el siguiente. Barnizar antes de armar tienta para que sea más fácil, pero la cola no agarra sobre barniz." },
    { q: "Una pieza te quedó 1 cm corta. ¿Qué hacés?", opciones: ["La usás igual y que quede torcido","Cortás otra con el material de margen que compraste","Le agregás un pedazo pegado","Abandonás el proyecto"], correcta: 1, explicacion: "Para eso está el 10% de margen. Usarla igual tienta para no gastar, pero el mueble queda torcido." },
    { q: "Tu banquito terminado baila. ¿Qué hacés?", opciones: ["Cortás las cuatro patas 2 cm","Le ponés un cartón debajo para siempre","Lo apoyás en una superficie plana, marcás lo que sobra en la pata larga y recortás de a poco","Lo pegás al piso"], correcta: 2, explicacion: "Se corrige la pata que sobra, de a poco. Cortar las cuatro tienta por simetría, pero repite la diferencia." },
    { q: "Una unión quedó floja y la cola ya secó. ¿Qué hacés?", opciones: ["La reforzás con una escuadra metálica por dentro","Le ponés cola por encima","La dejás así","Le das martillazos"], correcta: 0, explicacion: "La cola sobre una unión ya seca no agarra bien. Ponerle más cola tienta por simple, pero no llega a donde hace falta." },
    { q: "Querés saber si tu mueble está a escuadra para la rúbrica. ¿Cómo lo medís?", opciones: ["A ojo","Preguntándole a un amigo si se ve derecho","Con el barniz","Midiendo las diagonales o con la escuadra en las esquinas"], correcta: 3, explicacion: "La rúbrica se mide con herramientas. A ojo tienta por rápido, pero 3 mm de diferencia no se ven y sí se notan al usarlo." },
    { q: "Tu mueble quedó hermoso, pero lo hiciste sin anteojos ni plano. ¿Está aprobado según la rúbrica?", opciones: ["Sí, porque quedó lindo","No: hace falta un 2 en Seguridad y proceso","Sí, si suma 8","No, porque tiene que ser perfecto"], correcta: 1, explicacion: "Un buen resultado incluye cómo se hizo. Aprobarlo porque quedó lindo tienta, pero el hábito sin protección termina en un accidente." },
    { q: "Mirás tu mueble con la luz de costado y ves manchas brillantes cerca de las uniones. ¿Qué son?", opciones: ["Defectos de la madera","Reflejos normales","Cola que no se limpió antes de barnizar","Humedad"], correcta: 2, explicacion: "La cola seca no deja que el barniz agarre parejo. Pensar que son reflejos normales tienta, pero aparecen justo donde hubo cola." },
    { q: "¿Para qué anotás las horas de cada etapa?", opciones: ["Para presupuestar mejor el próximo mueble y para tu portafolio","Para nada","Para cobrarle al cliente el doble","Porque lo pide la ley"], correcta: 0, explicacion: "Las horas reales son la base de un buen presupuesto. Pensar que no sirven tienta porque es tu primer mueble, pero es justo cuando más aprendés cuánto tardás." },
    { q: "Otra persona puntuó tu mueble con 6 y vos con 9. ¿Qué hacés?", opciones: ["Te quedás con tu 9","Promediás","Descartás su opinión","Revisan juntos en qué criterio no coinciden, midiendo con la cinta y la escuadra"], correcta: 3, explicacion: "Medir juntos muestra quién tiene razón. Quedarte con tu puntaje tienta, pero puede haber algo que no viste." },
    { q: "¿Qué ponés en la ficha del portafolio de tu mueble?", opciones: ["Solo una foto","Fotos, plano, medidas, materiales, horas y costo","Solo el precio","Fotos de muebles parecidos de internet"], correcta: 1, explicacion: "La ficha completa muestra todo lo que sabés hacer. Una sola foto tienta por simple, pero no muestra el proceso." },
  ],
},
];
