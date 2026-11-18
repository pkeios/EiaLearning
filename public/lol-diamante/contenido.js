// Temario del curso "League of Legends: de Hierro a Diamante". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js lol-diamante y node tools/metodologia.js lol-diamante
window.TEMARIO = [
{
  id: "rango",
  icono: "🏆",
  titulo: "El camino a Diamante",
  nivel: "Básico",
  objetivos: [
    "Explicar cómo funcionan los rangos, las divisiones y los Puntos de Liga",
    "Reconocer qué separa a un jugador de Diamante de uno de Plata",
    "Cambiar la meta de \"ganar esta partida\" a \"cometer menos errores\"",
  ],
  lecciones: [
    { titulo: "Rangos, divisiones y Puntos de Liga", video: {"id":"0KY0g9WKaYQ","t":"¿Cómo subir cada división? De Hierro a Challenger · PochiPoom (31:24)"}, html: `
      <p class="idea">La clasificatoria tiene 10 <strong>rangos</strong>. Del Hierro al Diamante, cada rango tiene 4 <strong>divisiones</strong>, de IV (la más baja) a I. Para subir, se juntan <strong>Puntos de Liga</strong> (PL o LP).</p>
      <pre><code>Hierro → Bronce → Plata → Oro → Platino → Esmeralda
→ DIAMANTE → Maestro → Gran Maestro → Retador

Cada rango hasta Diamante: IV → III → II → I
100 Puntos de Liga → subís de división</code></pre>
      <table>
        <tr><th>Palabra</th><th>Qué es</th></tr>
        <tr><td>Puntos de Liga (LP)</td><td>Lo que ganás o perdés en cada partida clasificatoria</td></tr>
        <tr><td>MMR</td><td>Un puntaje oculto que el juego usa para buscarte rivales parecidos</td></tr>
        <tr><td>Elo</td><td>Forma en que los jugadores dicen "nivel": "estoy en bajo elo"</td></tr>
      </table>
      <p><strong>Si ganás más LP de los que perdés,</strong> el juego cree que estás por encima de tu rango y te hace subir más rápido. Si perdés más de los que ganás, al revés.</p>
      <p><strong>Esmeralda</strong> es el rango que Riot agregó entre Platino y Diamante. Las guías viejas que no lo nombran están desactualizadas.</p>
      <p>En todo el curso acompañamos a <strong>Nico</strong>, que juega mid y está en Plata II. Juega mucho, pero hace meses que no sube. Su meta: llegar a Diamante.</p>
      <p>Por ejemplo, Nico gana 22 LP y pierde 18. Eso indica que su MMR está un poco arriba de Plata II: si mejora sus errores, va a subir más rápido.</p>` },
    { titulo: "Qué separa a un Diamante", html: `
      <p class="idea">Un jugador de Diamante no hace jugadas imposibles: <strong>comete menos errores</strong>, de forma más constante. Farmea mejor, muere menos y sabe qué hacer cuando no hay nada para hacer.</p>
      <table>
        <tr><th>Área</th><th>En bajo elo</th><th>En Diamante</th></tr>
        <tr><td>Farmeo</td><td>Pierde súbditos al pelear o al moverse</td><td>Farmea constante, aun peleando</td></tr>
        <tr><td>Muertes</td><td>Muere sin visión en zonas peligrosas</td><td>Muere menos y casi siempre por algo que valía la pena</td></tr>
        <tr><td>Mapa</td><td>Mira solo su línea</td><td>Mira el minimapa cada pocos segundos</td></tr>
        <tr><td>Objetivos</td><td>Pelea sin motivo</td><td>Pelea por dragones, Barón o torres</td></tr>
        <tr><td>Campeones</td><td>Juega muchos distintos</td><td>Domina pocos</td></tr>
        <tr><td>Mental</td><td>Juega enojado después de perder</td><td>Sabe cuándo cortar</td></tr>
      </table>
      <p><strong>La buena noticia:</strong> casi todo esto se puede practicar. Este curso tiene un módulo para cada área.</p>
      <p>Por ejemplo, Nico revisó 5 partidas perdidas y vio que en 4 había muerto antes del minuto 10 por no mirar el minimapa. Ese error, y no sus mecánicas, era lo que lo frenaba.</p>` },
    { titulo: "La meta correcta", html: `
      <p class="idea">No podés controlar si tu equipo juega bien, pero sí <strong>tus errores</strong>. La meta de cada partida no es "ganar", sino <strong>mejorar una cosa concreta</strong>.</p>
      <p>Una partida tiene 10 jugadores. Vos sos 1 de 10, pero sos <strong>el único que está en todas tus partidas</strong>. Si mejorás, a la larga tu rango sube aunque haya partidas imposibles.</p>
      <table>
        <tr><th>Meta floja</th><th>Meta que se puede medir</th></tr>
        <tr><td>"Ganar"</td><td>"Llegar a 70 súbditos al minuto 10"</td></tr>
        <tr><td>"No morir"</td><td>"No morir antes del minuto 10 sin visión del jungla rival"</td></tr>
        <tr><td>"Jugar mejor"</td><td>"Mirar el minimapa cada vez que muere un súbdito con último golpe"</td></tr>
      </table>
      <p><strong>Una meta por partida, no cinco:</strong> si querés mejorar todo a la vez, no mejorás nada.</p>
      <p><strong>Los cambios de cada temporada:</strong> Riot cambia el juego con cada parche. En 2026, por ejemplo, sacó a Atakhan y las Proezas, el Barón volvió a los 20 minutos y agregó las <strong>misiones de rol</strong>: cada rol gana una recompensa al completar la suya. Leé las notas del parche cuando sale uno nuevo.</p>
      <p>Por ejemplo, Nico se puso una sola meta durante una semana: 70 súbditos al minuto 10. Al principio lo lograba en 2 de 10 partidas; al final de la semana, en 7.</p>` },
  ],
  practica: [
    "Anotá tu rango y división, y cuántos LP ganás y perdés en promedio en tus últimas 5 partidas.",
    "Revisá 3 partidas perdidas y anotá en qué minuto fue tu primera muerte y por qué.",
    "Escribí 1 meta medible para tus próximas 10 partidas y anotá en cuántas la cumpliste.",
  ],
  recursos: [
    { t: "Soporte de Riot: niveles, divisiones y colas de clasificatoria", url: "https://support.riotgames.com/es-419/league-of-legends/gameplay/ranked-tiers-divisions-and-queues" },
    { t: "Riot: vista previa del juego para la temporada 2026", url: "https://www.leagueoflegends.com/es-mx/news/dev/dev-2026-season-one-gameplay-preview/" },
  ],
  quiz: [
    { q: "Si estás en Plata I y juntás 100 Puntos de Liga, ¿qué pasa?", opciones: ["Subís a Plata II","Bajás a Bronce","Subís a Oro IV","Subís a Diamante"], correcta: 2, explicacion: "De Plata I se sube a Oro IV. Plata II tienta, pero esa división está por debajo de Plata I." },
    { q: "¿Qué rango está justo antes de Diamante?", opciones: ["Esmeralda","Platino","Oro","Maestro"], correcta: 0, explicacion: "Riot agregó Esmeralda entre Platino y Diamante. Platino tienta porque así era antes." },
    { q: "Si ganás 25 LP y perdés 15 por partida, ¿qué te dice?", opciones: ["Que estás jugando mal","Nada","Que vas a bajar","Que tu MMR está arriba de tu rango: vas a subir más rápido"], correcta: 3, explicacion: "Ganar más de lo que perdés indica MMR alto. \"Nada\" tienta, pero es una señal clara." },
    { q: "¿Qué es el MMR?", opciones: ["Tu cantidad de campeones","Un puntaje oculto que usa el juego para buscarte rivales parecidos","Los LP que ves","Tu nivel de cuenta"], correcta: 1, explicacion: "Es oculto y define tus rivales. Los LP tientan porque son el número que ves, pero son otra cosa." },
    { q: "Si querés llegar a Diamante, ¿qué tenés que lograr sobre todo?", opciones: ["Hacer jugadas espectaculares","Jugar 20 campeones distintos","Cometer menos errores, de forma constante","Pelear todo el tiempo"], correcta: 2, explicacion: "La constancia sube el rango. Las jugadas espectaculares tientan, pero son raras." },
    { q: "Si revisás 5 partidas y en 4 moriste antes del minuto 10 sin visión, ¿qué te frena?", opciones: ["No mirar el minimapa ni respetar al jungla rival","Tus mecánicas","Tu equipo","La mala suerte"], correcta: 0, explicacion: "Es un error tuyo que se repite. El equipo tienta como explicación, pero estuvo en las 4." },
    { q: "Si querés que tu rango suba aunque haya partidas imposibles, ¿en qué te enfocás?", opciones: ["En los errores de tu equipo","En el jungla rival","En jugar más horas seguidas","En tus propios errores: sos el único que está en todas tus partidas"], correcta: 3, explicacion: "A la larga, lo tuyo pesa más. El equipo tienta, pero cambia en cada partida." },
    { q: "Si querés una meta que puedas medir en tu próxima partida, ¿cuál elegís?", opciones: ["\"Ganar\"","\"Llegar a 70 súbditos al minuto 10\"","\"Jugar mejor\"","\"No tiltearme\""], correcta: 1, explicacion: "Se puede comprobar con un número. \"Ganar\" tienta, pero no depende solo de vos." },
    { q: "Querés mejorar farmeo, visión, mapa y mental a la vez. ¿Qué conviene?", opciones: ["Las cuatro juntas desde hoy","Ninguna","Una meta por partida, de a una","Cambiar de rol"], correcta: 2, explicacion: "De a una se mejora de verdad. Todas juntas tienta por ambición, pero no se mejora nada." },
    { q: "En la temporada 2026, ¿qué pasó con Atakhan?", opciones: ["Riot lo sacó, junto con las Proezas","Aparece a los 5 minutos","Reemplazó al Barón","Sigue igual"], correcta: 0, explicacion: "Se quitó en 2026 y el Barón volvió a los 20. \"Sigue igual\" tienta si leíste guías de 2025." },
    { q: "¿Qué son las misiones de rol de 2026?", opciones: ["Misiones del pase de batalla","Una cola nueva","Un campeón nuevo","Cada rol gana una recompensa al completar su misión"], correcta: 3, explicacion: "Dan ventajas propias de cada rol. El pase tienta por la palabra \"misión\", pero es otra cosa." },
    { q: "Sale un parche nuevo. ¿Qué hacés?", opciones: ["Nada, el juego no cambia","Leés las notas del parche para ver qué cambió","Esperás a que te lo cuente alguien en partida","Dejás de jugar"], correcta: 1, explicacion: "Cada parche cambia números y objetivos. \"No cambia\" tienta, pero cambia seguido." },
  ],
},
{
  id: "pool",
  icono: "🎯",
  titulo: "Un rol y pocos campeones",
  nivel: "Básico",
  objetivos: [
    "Elegir un rol principal y uno secundario",
    "Armar un grupo de 2 o 3 campeones que domines",
    "Usar las runas y la compra recomendadas sin perder tiempo",
  ],
  lecciones: [
    { titulo: "Un rol principal", html: `
      <p class="idea">Para subir, jugá <strong>un rol principal</strong> casi siempre. Cada rol tiene su propio trabajo, y lo aprendés repitiéndolo.</p>
      <table>
        <tr><th>Rol</th><th>Su trabajo principal</th><th>Misión de rol 2026 (resumen)</th></tr>
        <tr><td>Top</td><td>Ganar su línea, que suele ser aislada</td><td>Teleport extra o mejorado y más experiencia</td></tr>
        <tr><td>Jungla</td><td>Farmear los campamentos, ayudar a las líneas y controlar objetivos</td><td>Más oro y experiencia de monstruos grandes</td></tr>
        <tr><td>Mid</td><td>Ganar su línea y moverse a ayudar</td><td>Botas mejoradas gratis y regreso más rápido</td></tr>
        <tr><td>ADC (tirador)</td><td>Farmear y hacer daño en las peleas</td><td>Oro extra y un séptimo espacio para las botas</td></tr>
        <tr><td>Support</td><td>Proteger, dar visión y ayudar al equipo</td><td>Espacio para centinelas de control y oro pasivo</td></tr>
      </table>
      <p><strong>Rol secundario:</strong> elegí también uno de respaldo, para cuando no te toca el principal. En 2026, si te toca un rol al azar (<strong>autofill</strong>) y tenés buena maestría con el campeón, Riot compensa: ganar da el doble de LP y perder no descuenta.</p>
      <p><strong>Rol de las misiones:</strong> para que la misión cuente, el cambio de rol se tiene que hacer en la selección de campeones.</p>
      <p>Por ejemplo, Nico jugaba los 5 roles según el día. Eligió mid de principal y support de secundario, y en un mes entendía mucho mejor las ventajas de su línea.</p>` },
    { titulo: "Pocos campeones", html: `
      <p class="idea">Un grupo de <strong>2 o 3 campeones</strong> te deja dominar sus combos, sus tiempos y sus enfrentamientos. Jugar 20 distintos es aprender todo de nuevo cada partida.</p>
      <table>
        <tr><th>Tu grupo</th><th>Para qué</th></tr>
        <tr><td>Campeón principal</td><td>El que más jugás: lo conocés de memoria</td></tr>
        <tr><td>Segundo campeón</td><td>Para cuando banean o eligen el principal</td></tr>
        <tr><td>Tercero (opcional)</td><td>Para un enfrentamiento que tu principal pierde</td></tr>
      </table>
      <p><strong>Elegí campeones simples</strong> mientras subís: los que tienen pocas habilidades difíciles te dejan pensar en el mapa en vez de en los botones.</p>
      <p><strong>Qué tenés que saber de tu campeón:</strong></p>
      <ul>
        <li>Su combo básico y cuánto daño hace a cada nivel.</li>
        <li>Cuándo es fuerte (por ejemplo, al llegar a nivel 6 o con su primer objeto).</li>
        <li>Contra quién la pasa mal y cómo jugar ese enfrentamiento.</li>
      </ul>
      <p>Un jugador que juega casi siempre un solo campeón se llama <strong>one-trick</strong>. Muchos llegan a Diamante así.</p>
      <p>Por ejemplo, Nico jugaba 14 campeones en mid. Se quedó con 2: uno principal y uno para cuando se lo banean. En 50 partidas, su tasa de victorias subió de 47 % a 54 %.</p>` },
    { titulo: "Runas y compra sin perder tiempo", html: `
      <p class="idea">Para las <strong>runas</strong> y los <strong>objetos</strong>, usá las recomendaciones del cliente o de un sitio de estadísticas. Tu tiempo rinde más practicando que inventando compras.</p>
      <p>Las <strong>runas</strong> son las mejoras que elegís antes de la partida. Los <strong>objetos</strong> son lo que comprás en la tienda durante la partida.</p>
      <table>
        <tr><th>Dónde mirar</th><th>Qué te da</th></tr>
        <tr><td>Recomendaciones del cliente</td><td>Runas y compras armadas por el juego</td></tr>
        <tr><td>Sitios de estadísticas (como OP.GG)</td><td>Lo que más gana en tu rango y en el parche actual</td></tr>
      </table>
      <p><strong>Cuándo cambiar:</strong> si el rival tiene mucho daño mágico, comprá resistencia mágica; si tiene mucho daño físico, armadura. Si el otro equipo se cura mucho, sumá un objeto de <strong>heridas graves</strong>, que reduce la curación.</p>
      <p><strong>Cada parche cambia lo que conviene:</strong> en 2026 Riot agregó objetos nuevos. Revisá las recomendaciones cuando cambia el parche.</p>
      <p>Por ejemplo, Nico perdía contra un rival que se curaba muchísimo. Agregó un objeto de heridas graves en su segunda compra y empezó a ganar esas peleas.</p>` },
  ],
  practica: [
    "Elegí tu rol principal y tu secundario, y anotá por qué.",
    "Elegí 2 o 3 campeones para tu rol y anotá cuándo es fuerte cada uno y contra quién la pasa mal.",
    "Jugá 10 partidas solo con tu campeón principal y anotá tu tasa de victorias.",
  ],
  recursos: [
    { t: "OP.GG: estadísticas de tus partidas y de cada campeón", url: "https://www.op.gg/" },
    { t: "Riot: vista previa del juego para la temporada 2026", url: "https://www.leagueoflegends.com/es-mx/news/dev/dev-2026-season-one-gameplay-preview/" },
  ],
  quiz: [
    { q: "Si jugás los 5 roles según el día, ¿qué te conviene para subir?", opciones: ["Seguir jugando los 5","Jugar solo el que te toca al azar","Elegir un rol principal y uno secundario","Cambiar de rol cada partida"], correcta: 2, explicacion: "Repetir un rol lo hace dominar. Los 5 tienta por variedad, pero aprendés todo a medias." },
    { q: "En 2026, ¿qué recibe el support al completar su misión de rol?", opciones: ["Un espacio para centinelas de control y oro pasivo","Un séptimo espacio para botas","Teleport extra","Botas mejoradas gratis"], correcta: 0, explicacion: "El support gana visión y oro. El séptimo espacio tienta, pero es del ADC." },
    { q: "En 2026 te toca un rol al azar (autofill). Si tenés buena maestría con el campeón y ganás, ¿qué pasa?", opciones: ["Ganás menos LP","No cuenta la partida","Perdés LP aunque ganes","Ganás el doble de LP (y perder no descuenta)"], correcta: 3, explicacion: "Riot compensa el autofill. \"No cuenta\" tienta, pero sí cuenta, y con premio." },
    { q: "Si querés que tu misión de rol cuente, ¿dónde cambiás de rol con un compañero?", opciones: ["Ya en la partida, sin avisar","En la selección de campeones, de forma oficial","Por el chat del juego","No se puede cambiar"], correcta: 1, explicacion: "El cambio tiene que ser oficial. En la partida tienta por rápido, pero la misión no cuenta." },
    { q: "Jugás 14 campeones en tu rol. ¿Qué te conviene?", opciones: ["Sumar más","Elegir al azar","Quedarte con 2 o 3 que domines","Jugar el más difícil"], correcta: 2, explicacion: "Pocos campeones se dominan. Sumar más tienta para tener respuesta a todo, pero no dominás ninguno." },
    { q: "Mientras subís, ¿qué campeones conviene elegir?", opciones: ["Simples, para pensar en el mapa en vez de en los botones","Los más difíciles para lucirte","Los que vio en un video de un profesional","Uno distinto cada vez"], correcta: 0, explicacion: "Lo simple libera atención para decidir. El difícil tienta porque luce, pero cuesta más." },
    { q: "¿Qué es un one-trick?", opciones: ["Un truco de un solo uso","Un objeto","Un rango","Un jugador que juega casi siempre un solo campeón"], correcta: 3, explicacion: "Domina un campeón de memoria. \"Truco\" tienta por la palabra, pero es un tipo de jugador." },
    { q: "Te banean tu campeón principal. ¿Qué hacés?", opciones: ["Elegís uno que nunca jugaste","Jugás tu segundo campeón","Te salís de la partida","Jugás otro rol"], correcta: 1, explicacion: "Para eso está el segundo. Uno nuevo tienta por probar, pero perdés la ventaja." },
    { q: "¿Qué son las runas?", opciones: ["Objetos de la tienda","Los puntos de liga","Las mejoras que elegís antes de la partida","Los súbditos"], correcta: 2, explicacion: "Se eligen antes de jugar. Los objetos tientan, pero se compran durante la partida." },
    { q: "No sabés qué comprar. ¿Qué hacés?", opciones: ["Usás las recomendaciones del cliente o de un sitio de estadísticas","Inventás una compra nueva cada partida","Comprás lo más caro","No comprás"], correcta: 0, explicacion: "Ahorra tiempo para practicar. Inventar tienta por creatividad, pero suele rendir menos." },
    { q: "El otro equipo se cura muchísimo. ¿Qué sumás a tu compra?", opciones: ["Más armadura siempre","Botas de velocidad","Nada","Un objeto de heridas graves"], correcta: 3, explicacion: "Heridas graves reduce la curación. Armadura tienta por defensa, pero no frena la cura." },
    { q: "Cambió el parche. ¿Qué revisás de tu campeón?", opciones: ["Nada, sirve lo mismo siempre","Las runas y objetos recomendados del parche nuevo","El aspecto del campeón","La música"], correcta: 1, explicacion: "Cada parche cambia lo que conviene. \"Sirve lo mismo\" tienta, pero en 2026 hubo objetos nuevos." },
  ],
},
{
  id: "farm",
  icono: "🌾",
  titulo: "Farmear: el oro que no ves",
  nivel: "Intermedio",
  objetivos: [
    "Dar el último golpe a los súbditos de forma constante, también bajo presión",
    "Medir tu farmeo en súbditos por minuto y ponerte una meta",
    "Practicar el farmeo en la herramienta de práctica",
  ],
  lecciones: [
    { titulo: "El último golpe", video: {"id":"gPXzY9W22y8","t":"Cómo farmear en League of Legends para subir de elo · Lopon (4:28)"}, html: `
      <p class="idea">El oro de los súbditos solo te lo llevás si das el <strong>último golpe</strong>: el ataque que los mata. Farmear bien es la forma más segura de tener más oro que tu rival.</p>
      <p>Los <strong>súbditos</strong> (minions) son los soldaditos que avanzan por cada línea en <strong>oleadas</strong>. Cada uno da oro, y el súbdito de asedio (el cañón) da más.</p>
      <table>
        <tr><th>Súbdito</th><th>Qué tiene</th></tr>
        <tr><td>Cuerpo a cuerpo</td><td>Pelea de cerca, tiene más vida</td></tr>
        <tr><td>Hechicero (a distancia)</td><td>Tiene menos vida: se muere más rápido</td></tr>
        <tr><td>Asedio (cañón)</td><td>El que más oro da: no lo pierdas nunca</td></tr>
      </table>
      <p><strong>Cómo mejorar el último golpe:</strong></p>
      <ul>
        <li>Mirá la barra de vida del súbdito, no a tu campeón.</li>
        <li>Conocé cuánto daño hace tu ataque básico: si el súbdito tiene menos vida que eso, pegale.</li>
        <li>Los de tu oleada lo atacan también: anticipá cuánto le van a sacar antes de que llegue tu ataque.</li>
      </ul>
      <p><strong>Bajo la torre</strong> los súbditos pierden vida de golpe: hay que "prepararlos" con un ataque antes del de la torre para llegar al último golpe.</p>
      <p>Por ejemplo, Nico perdía casi todos los cañones porque miraba a su rival. Empezó a priorizar el cañón en cada oleada y sumó unos 300 de oro extra antes del minuto 10.</p>` },
    { titulo: "Súbditos por minuto", html: `
      <p class="idea">Tu farmeo se mide en <strong>súbditos por minuto</strong> (CS/min). Es uno de los números que más diferencia hay entre un Plata y un Diamante.</p>
      <pre><code>CS/min = súbditos y monstruos que mataste ÷ minutos de partida

Ejemplo: 180 de farm en una partida de 30 minutos
180 ÷ 30 = 6 CS/min</code></pre>
      <table>
        <tr><th>CS/min en línea</th><th>Qué significa (aproximado)</th></tr>
        <tr><td>Menos de 5</td><td>Estás perdiendo mucho oro</td></tr>
        <tr><td>6</td><td>Una buena primera meta</td></tr>
        <tr><td>7 a 8</td><td>Lo que suelen tener los jugadores de línea en Diamante</td></tr>
        <tr><td>9 o más</td><td>Muy alto: nivel de jugadores profesionales</td></tr>
      </table>
      <p><strong>Dónde lo ves:</strong> durante la partida, el número de súbditos aparece arriba a la derecha. Al terminar, en las estadísticas. Los sitios de estadísticas calculan el promedio de tus partidas.</p>
      <p><strong>Ojo:</strong> los supports casi no farmean, y la jungla se mide distinto (los campamentos cuentan como farmeo).</p>
      <p><strong>No dejes de farmear a mitad de partida:</strong> después de la fase de línea, muchos jugadores dejan oleadas enteras sin tomar. Esas oleadas en las líneas laterales son oro gratis.</p>
      <p>Por ejemplo, Nico promediaba 5,2 CS/min. Con 3 semanas de práctica llegó a 7. Con el mismo nivel de juego, tenía un objeto entero más que antes en cada partida.</p>` },
    { titulo: "Practicar el farmeo", html: `
      <p class="idea">El farmeo se entrena como un deporte: <strong>con ejercicios cortos y medidos</strong>, fuera de la clasificatoria.</p>
      <pre><code>Ejercicio en la herramienta de práctica (10 minutos por día):
1. Entrá a la Herramienta de práctica con tu campeón.
2. Sin comprar objetos de daño, farmeá 10 minutos.
3. Al minuto 10, anotá cuántos súbditos tenés.
4. Meta: 80 de los aproximadamente 100 posibles.
5. Repetí todos los días y anotá el número.</code></pre>
      <table>
        <tr><th>Semana</th><th>Meta del ejercicio</th></tr>
        <tr><td>1</td><td>Farmear sin perder ningún cañón</td></tr>
        <tr><td>2</td><td>Farmear usando solo ataques básicos</td></tr>
        <tr><td>3</td><td>Farmear y a la vez moverte como si hubiera un rival</td></tr>
      </table>
      <p>La <strong>Herramienta de práctica</strong> es un modo sin rivales reales donde podés practicar con tu campeón, cambiar de nivel y reiniciar las oleadas.</p>
      <p><strong>En partida, farmeá aunque pierdas la línea:</strong> si el rival te presiona, tomá los súbditos que puedas desde lejos o bajo tu torre. Perder un intercambio duele menos que perder 15 súbditos.</p>
      <p>Por ejemplo, Nico hizo el ejercicio 10 minutos antes de jugar durante 3 semanas. Empezó con 58 súbditos al minuto 10 y terminó con 82.</p>` },
  ],
  practica: [
    "Calculá tu CS/min promedio de tus últimas 5 partidas y anotalo.",
    "Hacé el ejercicio de 10 minutos en la Herramienta de práctica 5 días y anotá cuántos súbditos tenías al minuto 10 cada día.",
    "En tus próximas 5 partidas, anotá cuántos cañones perdiste antes del minuto 15.",
  ],
  recursos: [
    { t: "OP.GG: estadísticas de tus partidas y de cada campeón", url: "https://www.op.gg/" },
    { t: "League of Legends: notas de cada parche (en español)", url: "https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/" },
  ],
  quiz: [
    { q: "Si el súbdito muere por el ataque de tu oleada, ¿te llevás el oro?", opciones: ["Sí, siempre","Sí, la mitad","No: el oro es para quien da el último golpe","Sí, si estás cerca"], correcta: 2, explicacion: "Solo el último golpe da oro. \"Si estás cerca\" tienta porque así funciona la experiencia, pero no el oro." },
    { q: "¿Qué súbdito da más oro?", opciones: ["El de asedio (cañón)","El cuerpo a cuerpo","El hechicero","Todos igual"], correcta: 0, explicacion: "El cañón da más: no lo pierdas. \"Todos igual\" tienta, pero no es así." },
    { q: "Si querés mejorar el último golpe, ¿qué mirás?", opciones: ["Tu campeón","El cielo","Al rival todo el tiempo","La barra de vida del súbdito"], correcta: 3, explicacion: "Ver la vida del súbdito te dice cuándo pegar. El rival tienta, pero perdés súbditos." },
    { q: "Si un súbdito está bajo tu torre, ¿qué pasa con su vida?", opciones: ["Nada","La torre le saca mucha de golpe: hay que prepararlo antes","Se cura","No se puede farmear bajo torre"], correcta: 1, explicacion: "Hay que acomodar los golpes con la torre. \"No se puede\" tienta, pero sí se puede." },
    { q: "Terminaste con 210 de farmeo en 30 minutos. ¿Cuál es tu CS/min?", opciones: ["210","30","7","6"], correcta: 2, explicacion: "210 ÷ 30 = 7. 6 tienta si redondeás mal, pero da 7 exacto." },
    { q: "Si querés llegar a Diamante en una línea, ¿qué CS/min suele hacer falta?", opciones: ["Alrededor de 7 a 8","2 o 3","15","No importa el farmeo"], correcta: 0, explicacion: "Es lo habitual en Diamante. \"No importa\" tienta, pero es oro que dejás pasar." },
    { q: "Si sos support, ¿tu CS/min se compara igual que el de un mid?", opciones: ["Sí, igual","Sí, tiene que ser más alto","Sí, si ganás","No: los supports casi no farmean"], correcta: 3, explicacion: "El support tiene otro trabajo. Compararlo igual tienta, pero no tiene sentido." },
    { q: "Si terminó la fase de línea y hay oleadas sin tomar en las laterales, ¿qué son?", opciones: ["Algo sin importancia","Oro gratis que conviene tomar con seguridad","Trampas siempre","Súbditos que no dan oro"], correcta: 1, explicacion: "Las oleadas siguen dando oro. \"Sin importancia\" tienta porque ya terminó la línea, pero no." },
    { q: "Si querés entrenar el farmeo sin rivales, ¿dónde lo hacés?", opciones: ["En la clasificatoria","En un video","En la Herramienta de práctica","En ARAM"], correcta: 2, explicacion: "Ahí se practica sin presión. La clasificatoria tienta por ser \"real\", pero arriesgás LP." },
    { q: "En el ejercicio de 10 minutos, ¿qué meta te ponés?", opciones: ["Unos 80 de los aproximadamente 100 súbditos posibles","10 súbditos","300 súbditos","Ninguna"], correcta: 0, explicacion: "80 es una meta exigente pero posible. 300 tienta por ambiciosa, pero no hay tantos." },
    { q: "El rival te presiona mucho en la línea. ¿Qué hacés con el farmeo?", opciones: ["Dejás de farmear","Te vas de la línea","Peleás aunque pierdas","Tomás los súbditos que puedas desde lejos o bajo tu torre"], correcta: 3, explicacion: "Perder un intercambio duele menos que perder 15 súbditos. Irte tienta, pero perdés todo." },
    { q: "Subiste de 5 a 7 CS/min. ¿Qué cambia en tus partidas?", opciones: ["Nada","Tenés más oro: suele ser un objeto más que antes","Solo ganás más experiencia","Bajás de rango"], correcta: 1, explicacion: "Más farmeo es más oro. \"Nada\" tienta porque no se ve en la pantalla, pero se nota en los objetos." },
  ],
},
{
  id: "oleadas",
  icono: "🌊",
  titulo: "Manejar las oleadas",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer hacia dónde va a empujar una oleada",
    "Usar empuje lento, empuje rápido y congelar según lo que buscás",
    "Empujar la oleada antes de volver a la base o de ir a un objetivo",
  ],
  lecciones: [
    { titulo: "Hacia dónde va la oleada", video: {"id":"lRKFo7VGujk","t":"Tácticas de la Grieta: control de waves · League of Legends Latinoamérica (16:11)"}, html: `
      <p class="idea">Una <strong>oleada</strong> empuja hacia el lado que tiene <strong>menos súbditos</strong>. Controlar eso te dice dónde se va a pelear y cuándo podés irte.</p>
      <pre><code>Tus súbditos: 6   |   Súbditos rivales: 3
→ tu oleada gana y empuja hacia la torre rival

Tus súbditos: 2   |   Súbditos rivales: 6
→ la oleada rival empuja hacia tu torre</code></pre>
      <table>
        <tr><th>Si la oleada está...</th><th>Qué pasa</th></tr>
        <tr><td>Cerca de tu torre</td><td>Estás más seguro: el jungla rival tiene que caminar más</td></tr>
        <tr><td>En el medio</td><td>Situación neutra</td></tr>
        <tr><td>Cerca de la torre rival</td><td>Podés presionar, pero estás expuesto a emboscadas</td></tr>
      </table>
      <p><strong>Cada oleada que choca contra una torre "se resetea":</strong> la torre mata a tus súbditos y la próxima oleada empieza pareja.</p>
      <p>Por ejemplo, Nico empujaba siempre hasta la torre rival sin pensar. Quedaba lejos de su torre y el jungla rival lo encontraba sin escape. Empezó a mirar hacia dónde iba la oleada antes de avanzar.</p>` },
    { titulo: "Empujar lento, empujar rápido y congelar", html: `
      <p class="idea">Hay tres maneras de manejar una oleada. Cada una sirve para algo distinto.</p>
      <table>
        <tr><th>Técnica</th><th>Cómo se hace</th><th>Para qué sirve</th></tr>
        <tr><td>Empuje rápido (fast push)</td><td>Matás los súbditos rivales lo más rápido posible</td><td>Volver a la base, ayudar a otra línea o ir a un objetivo sin perder oro</td></tr>
        <tr><td>Empuje lento (slow push)</td><td>Matás solo los súbditos rivales de a poco, con último golpe</td><td>Juntar una oleada enorme que llega a la torre rival</td></tr>
        <tr><td>Congelar (freeze)</td><td>Mantenés la oleada quieta cerca de tu torre, dando solo el último golpe</td><td>Que el rival tenga que acercarse para farmear, lejos de su torre</td></tr>
      </table>
      <p><strong>Cómo se congela:</strong> la oleada se queda quieta si del lado rival hay unos súbditos más que del tuyo. Dejás que tu torre no la toque y solo das el último golpe.</p>
      <p><strong>Cuándo no congelar:</strong> si el rival tiene jungla cerca o si tu equipo te necesita en otro lado. Congelar te deja atado a tu línea.</p>
      <p><strong>El empuje lento sirve para objetivos:</strong> si en 1 minuto hay dragón, juntá una oleada grande. Cuando choque con la torre rival, el rival tiene que elegir entre perder súbditos o ir al dragón.</p>
      <p>Por ejemplo, Nico ganó la línea y congeló cerca de su torre. Su rival, para farmear, tenía que acercarse mucho, y el jungla de Nico lo mató dos veces.</p>` },
    { titulo: "Empujar antes de irte", html: `
      <p class="idea">Antes de <strong>volver a la base</strong> o de <strong>ir a un objetivo</strong>, empujá tu oleada hasta la torre rival. Así no perdés súbditos mientras no estás.</p>
      <pre><code>La secuencia del buen regreso a base:
1. Empujá rápido tu oleada hasta la torre rival.
2. Volvé a la base mientras la torre la mata.
3. Comprá.
4. Volvé: llegás cuando la oleada se acomodó cerca del medio.

El regreso malo:
Volver con tu oleada empujando hacia tu torre
→ tu torre se come los súbditos y perdés su oro.</code></pre>
      <table>
        <tr><th>Momento para volver</th><th>Por qué</th></tr>
        <tr><td>Tenés oro para un componente importante</td><td>Te hacés más fuerte</td></tr>
        <tr><td>Tenés poca vida o poco maná</td><td>Seguir te pone en riesgo</td></tr>
        <tr><td>Recién empujaste la oleada</td><td>Perdés poco o nada</td></tr>
      </table>
      <p><strong>En 2026, el mid</strong> que completa su misión de rol tiene un regreso más rápido: aprovechalo con este mismo orden.</p>
      <p>Por ejemplo, Nico volvía a la base cuando tenía poca vida, sin mirar la oleada, y perdía 6 o 7 súbditos cada vez. Empezó a empujar antes de volver y dejó de perderlos.</p>` },
  ],
  practica: [
    "En 5 partidas, antes de cada regreso a la base, anotá si empujaste la oleada o no.",
    "En la Herramienta de práctica, juntá una oleada grande con empuje lento y anotá cuántos súbditos llegaron juntos a la torre.",
    "Mirá la repetición de una partida y anotá 2 momentos en que tu oleada empujaba hacia tu torre sin que lo quisieras.",
  ],
  recursos: [
    { t: "League of Legends: notas de cada parche (en español)", url: "https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/" },
    { t: "Riot: vista previa del juego para la temporada 2026", url: "https://www.leagueoflegends.com/es-mx/news/dev/dev-2026-season-one-gameplay-preview/" },
  ],
  quiz: [
    { q: "Tenés 6 súbditos y el rival tiene 3. ¿Hacia dónde va la oleada?", opciones: ["Hacia tu torre","Se queda en el medio siempre","Hacia la torre rival","No se mueve"], correcta: 2, explicacion: "Empuja hacia el lado con menos súbditos. \"Hacia tu torre\" tienta si confundís el sentido." },
    { q: "Si tu oleada está cerca de tu torre, ¿qué ventaja tenés?", opciones: ["Más seguridad: el jungla rival tiene que caminar más","Ninguna","Más oro por súbdito","Podés tirar la torre rival"], correcta: 0, explicacion: "Cerca de tu torre estás más cubierto. Más oro tienta, pero el oro es el mismo." },
    { q: "¿Qué pasa cuando una oleada choca contra una torre?", opciones: ["Se duplica","Desaparece la torre","Nada","Se \"resetea\": la torre la mata y la próxima empieza pareja"], correcta: 3, explicacion: "La torre limpia la oleada. \"Nada\" tienta, pero cambia la situación de la línea." },
    { q: "Querés volver a la base sin perder súbditos. ¿Qué técnica usás antes?", opciones: ["Congelar","Empuje rápido hasta la torre rival","Empuje lento","Nada"], correcta: 1, explicacion: "El empuje rápido manda la oleada lejos. Congelar tienta, pero te deja atado a la línea." },
    { q: "Si querés juntar una oleada enorme que llegue a la torre rival, ¿qué hacés?", opciones: ["Empuje rápido","Congelar","Empuje lento: matás de a poco solo con último golpe","Irte de la línea"], correcta: 2, explicacion: "El empuje lento acumula súbditos. El rápido tienta, pero no deja que se junten." },
    { q: "Si congelás la oleada cerca de tu torre, ¿qué tiene que hacer el rival?", opciones: ["Acercarse a tu lado para farmear, lejos de su torre","Nada, farmea igual","Volver a la base","Ir a la jungla"], correcta: 0, explicacion: "Lo obliga a exponerse. \"Farmea igual\" tienta, pero tiene que caminar a tu zona." },
    { q: "Si el jungla rival está cerca de tu línea, ¿conviene congelar?", opciones: ["Siempre, es lo más seguro","Sí, cerca de la torre rival","No importa","Con cuidado: congelar te deja atado a la línea y expuesto"], correcta: 3, explicacion: "Congelar tiene riesgos con jungla cerca. \"Siempre\" tienta, pero no es así." },
    { q: "En 1 minuto aparece el dragón. ¿Qué hacés con tu oleada?", opciones: ["La dejás empujar a tu torre","Empuje lento para que llegue grande a la torre rival cuando sea el dragón","La ignorás","Congelás lejos del dragón"], correcta: 1, explicacion: "Así el rival elige entre súbditos y dragón. Ignorarla tienta, pero perdés oro y presión." },
    { q: "Volvés a la base con tu oleada empujando hacia tu torre. ¿Qué pasa?", opciones: ["Nada","Ganás oro igual","Tu torre se come los súbditos y perdés su oro","La oleada te espera"], correcta: 2, explicacion: "La torre mata los súbditos que no farmeaste. \"Ganás igual\" tienta, pero no." },
    { q: "Tenés oro para un componente importante y recién empujaste. ¿Qué hacés?", opciones: ["Volvés a la base a comprar","Seguís en línea con el oro","Esperás a tener el triple","Vas a pelear al río"], correcta: 0, explicacion: "Es un buen momento para volver. Juntar más tienta, pero estás más débil mientras tanto." },
    { q: "En 2026, ¿qué gana el mid al completar su misión que ayuda a volver a la base?", opciones: ["Un séptimo espacio","Teleport extra","Más visión","Un regreso a la base más rápido"], correcta: 3, explicacion: "El mid tiene un regreso mejorado. El séptimo espacio tienta, pero es del ADC." },
    { q: "Mirás la repetición y ves que tu oleada empujaba hacia tu torre sin que quisieras. ¿Qué aprendés?", opciones: ["Que fue mala suerte","A mirar hacia dónde va la oleada antes de decidir","Que hay que empujar siempre","Nada"], correcta: 1, explicacion: "La oleada se puede leer y controlar. \"Mala suerte\" tienta, pero fue una decisión." },
  ],
},
{
  id: "linea",
  icono: "⚔️",
  titulo: "Pelear en línea",
  nivel: "Intermedio",
  objetivos: [
    "Hacer intercambios cuando el rival no puede responder",
    "Conocer los niveles fuertes: 2, 3 y 6",
    "Llevar la cuenta de los hechizos de invocador del rival",
  ],
  lecciones: [
    { titulo: "Intercambiar bien", video: {"id":"8Ba6pO350H4","t":"Tácticas de la Grieta: tradea como un profesional · League of Legends Latinoamérica (15:05)"}, html: `
      <p class="idea">Un <strong>intercambio</strong> (trade) es cuando los dos campeones se pegan y se separan. Un buen intercambio es el que te deja <strong>con más vida que el rival</strong>.</p>
      <table>
        <tr><th>Buen momento para pegar</th><th>Por qué</th></tr>
        <tr><td>El rival usó una habilidad importante</td><td>No puede responder igual por unos segundos</td></tr>
        <tr><td>El rival va a dar un último golpe</td><td>Se acerca y está distraído</td></tr>
        <tr><td>Tu oleada es más grande</td><td>Sus súbditos le pegan menos a vos que los tuyos a él</td></tr>
        <tr><td>Llegaste a un nivel fuerte y él no</td><td>Tenés una habilidad o más daño</td></tr>
      </table>
      <p><strong>El aggro de los súbditos:</strong> si le pegás al campeón rival cerca de sus súbditos, ellos te atacan a vos. Eso se llama <strong>aggro</strong>. Pegale y alejate de sus súbditos.</p>
      <p><strong>Los tiempos de recarga</strong> (cooldowns) importan: si su habilidad de escape tarda 15 segundos y la acaba de usar, tenés 15 segundos de ventaja.</p>
      <p>Por ejemplo, Nico peleaba cada vez que podía y perdía vida por el aggro. Empezó a pegar solo cuando el rival se acercaba a un súbdito y se iba enseguida: ganaba vida en cada intercambio.</p>` },
    { titulo: "Niveles fuertes", html: `
      <p class="idea">Algunos niveles cambian la pelea: el <strong>2</strong> y el <strong>3</strong> (nuevas habilidades) y el <strong>6</strong> (la definitiva). Quien llega primero tiene ventaja por unos segundos.</p>
      <table>
        <tr><th>Nivel</th><th>Qué cambia</th><th>Cómo llegar primero</th></tr>
        <tr><td>2</td><td>Segunda habilidad</td><td>En top y mid, con la primera oleada completa más los 3 cuerpo a cuerpo de la segunda (aproximadamente)</td></tr>
        <tr><td>3</td><td>Tercera habilidad</td><td>Farmear sin perder experiencia</td></tr>
        <tr><td>6</td><td>Habilidad definitiva (ultimate)</td><td>Farmear bien y no morir</td></tr>
      </table>
      <p><strong>La experiencia</strong> se gana estando cerca cuando muere un súbdito, aunque no des el último golpe. Si te alejás de la oleada, perdés experiencia y llegás tarde a los niveles.</p>
      <p><strong>Antes del 6,</strong> mirá si el rival tiene un campeón muy fuerte con su definitiva. Cuando llegue a 6, jugá más lejos o pedí ayuda.</p>
      <p><strong>Top en 2026:</strong> con su misión de rol, el top gana más experiencia y puede subir el nivel máximo. Por eso en esa línea llegar a los niveles fuertes pesa todavía más.</p>
      <p>Por ejemplo, Nico llegó a nivel 2 un poco antes que su rival y usó sus dos habilidades: le sacó media vida y lo obligó a volver a la base.</p>` },
    { titulo: "Los hechizos de invocador", html: `
      <p class="idea">Los <strong>hechizos de invocador</strong> son dos habilidades extra que elegís antes de la partida, como <strong>Destello</strong> (Flash) o <strong>Prender</strong> (Ignite). Saber si el rival los tiene cambia lo que podés hacer.</p>
      <table>
        <tr><th>Hechizo</th><th>Qué hace</th><th>Recarga aproximada</th></tr>
        <tr><td>Destello (Flash)</td><td>Teletransporte corto para escapar o atrapar</td><td>5 minutos</td></tr>
        <tr><td>Prender (Ignite)</td><td>Daño en el tiempo y reduce la curación</td><td>3 minutos</td></tr>
        <tr><td>Teleportación</td><td>Viaja a una estructura aliada</td><td>Varía con el nivel y el parche</td></tr>
      </table>
      <p><strong>Si el rival usó el Destello,</strong> durante varios minutos no puede escapar igual: es el mejor momento para que tu jungla venga a tu línea.</p>
      <pre><code>Cómo avisar en el chat:
"mid sin flash 12:30"
(el minuto en que lo usó; tu equipo calcula cuándo vuelve)</code></pre>
      <p><strong>Las recargas cambian con los parches y las runas:</strong> el número de la tabla es una referencia. Fijate el de tu parche.</p>
      <p>Por ejemplo, el rival de Nico usó el Destello para escapar en el minuto 7. Nico escribió "mid sin flash 7:00", su jungla vino en el minuto 9 y lo mataron.</p>` },
  ],
  practica: [
    "En 5 partidas, anotá cuántos intercambios ganaste (quedaste con más vida) y cuántos perdiste.",
    "En 5 partidas, anotá si llegaste a nivel 2 antes o después que tu rival.",
    "Cada vez que el rival use el Destello, escribí en el chat \"sin flash\" con el minuto, y anotá cuántas veces lo hiciste en 5 partidas.",
  ],
  recursos: [
    { t: "League of Legends: notas de cada parche (en español)", url: "https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/" },
    { t: "OP.GG: estadísticas de tus partidas y de cada campeón", url: "https://www.op.gg/" },
  ],
  quiz: [
    { q: "¿Qué es un buen intercambio?", opciones: ["Uno donde pegás mucho, aunque pierdas más vida","Cualquier pelea","Uno que te deja con más vida que el rival","Uno donde no pasa nada"], correcta: 2, explicacion: "Se mide por la vida que queda. Pegar mucho tienta, pero si perdés más, perdiste el intercambio." },
    { q: "El rival acaba de usar su habilidad de escape, que tarda 15 segundos. ¿Qué hacés?", opciones: ["Aprovechás esos segundos para pegarle","Esperás a que vuelva","Te vas a la base","Nada"], correcta: 0, explicacion: "No puede responder igual. Esperar tienta por prudencia, pero perdés la ventaja." },
    { q: "Si le pegás al rival cerca de sus súbditos y ellos te atacan, ¿cómo se llama eso?", opciones: ["Último golpe","Congelar","Destello","Aggro de los súbditos"], correcta: 3, explicacion: "Sus súbditos te atacan por pegarle a su campeón. \"Último golpe\" tienta, pero es otra cosa." },
    { q: "Si el rival se acerca a dar un último golpe, ¿qué ventaja tenés?", opciones: ["Ninguna","Está distraído y cerca: es buen momento para pegarle","Que pierde oro siempre","Que su torre no dispara"], correcta: 1, explicacion: "Tiene que acercarse y elegir. \"Ninguna\" tienta, pero es el momento clásico para intercambiar." },
    { q: "¿Qué tiene de especial el nivel 6?", opciones: ["Se gana un objeto gratis","No pasa nada","Se desbloquea la habilidad definitiva","Se recupera toda la vida"], correcta: 2, explicacion: "El 6 trae la definitiva. Un objeto gratis tienta, pero no pasa." },
    { q: "Si te alejás de la oleada cuando mueren súbditos, ¿qué perdés?", opciones: ["Experiencia: llegás tarde a los niveles","Nada","Solo oro","Puntos de Liga"], correcta: 0, explicacion: "La experiencia se gana estando cerca. \"Solo oro\" tienta, pero también perdés experiencia." },
    { q: "Tu rival tiene una definitiva muy fuerte y está por llegar a 6. ¿Qué hacés?", opciones: ["Peleás igual","Te acercás a su torre","No cambiás nada","Jugás más lejos o pedís ayuda"], correcta: 3, explicacion: "Su poder cambia en ese nivel. Pelear igual tienta, pero te puede matar de golpe." },
    { q: "Llegás a nivel 2 antes que tu rival. ¿Qué podés hacer?", opciones: ["Nada","Pegarle con tus dos habilidades mientras él tiene una","Irte a la base","Esperar al nivel 6"], correcta: 1, explicacion: "Por unos segundos tenés ventaja. Esperar tienta, pero se pierde en cuanto él sube." },
    { q: "¿Para qué sirve saber si el rival usó el Destello?", opciones: ["Para nada","Para saber su rango","Sin Destello no puede escapar igual: es el momento de atacarlo","Para comprar lo mismo"], correcta: 2, explicacion: "Es una ventaja de varios minutos. \"Para nada\" tienta, pero cambia lo que podés hacer." },
    { q: "Si el rival usó el Destello en el minuto 12:30, ¿qué escribís en el chat?", opciones: ["\"mid sin flash 12:30\"","\"sin flash\"","Nada","\"vengan\""], correcta: 0, explicacion: "Con el minuto, tu equipo calcula cuándo vuelve. \"Sin flash\" tienta por corto, pero falta el minuto." },
    { q: "¿Cuánto tarda aproximadamente en volver el Destello?", opciones: ["10 segundos","1 minuto","20 minutos","Unos 5 minutos"], correcta: 3, explicacion: "Unos 5 minutos, según el parche y las runas. 1 minuto tienta, pero es mucho más." },
    { q: "Ves un número de recarga en una guía vieja. ¿Qué hacés?", opciones: ["Lo usás igual para siempre","Lo comparás con el del parche actual","Lo ignorás","Asumís que nunca cambia"], correcta: 1, explicacion: "Los parches cambian números. \"Nunca cambia\" tienta, pero cambian seguido." },
  ],
},
{
  id: "mapa",
  icono: "👁️",
  titulo: "Visión y mapa",
  nivel: "Intermedio",
  objetivos: [
    "Mirar el minimapa cada pocos segundos y sacar conclusiones",
    "Poner wards y centinelas de control en lugares que protegen y dan información",
    "Adivinar dónde está el jungla rival con la información que tenés",
  ],
  lecciones: [
    { titulo: "Mirar el minimapa", video: {"id":"WV-q3kebp9w","t":"Tácticas de la Grieta: aprende a controlar las 3 zonas del mapa · League of Legends Latinoamérica (14:38)"}, html: `
      <p class="idea">El <strong>minimapa</strong> te muestra lo que pasa en todo el mapa. Mirarlo cada pocos segundos evita la mayoría de las muertes que "no viste venir".</p>
      <pre><code>Cuándo mirar el minimapa (un hábito):
- Cada vez que das un último golpe.
- Antes de avanzar más allá del medio de tu línea.
- Cuando un rival desaparece de su línea.</code></pre>
      <table>
        <tr><th>Si en el minimapa ves...</th><th>Pensás...</th></tr>
        <tr><td>Tu rival de línea desaparece</td><td>Puede venir a otra línea o estar en el río: avisá</td></tr>
        <tr><td>El jungla rival en la otra punta del mapa</td><td>Podés presionar tu línea con más seguridad</td></tr>
        <tr><td>Tres rivales juntos en una línea</td><td>No vayas solo a una línea lejana</td></tr>
      </table>
      <p><strong>Avisar a tu equipo:</strong> con un ping de "desaparecido" (signo de pregunta) sobre el rival que no está. Es lo mismo que una call en otros juegos: corto y a tiempo.</p>
      <p>Por ejemplo, Nico empezó a mirar el minimapa cada vez que daba un último golpe. En dos semanas sus muertes antes del minuto 10 bajaron a la mitad.</p>` },
    { titulo: "Wards y centinelas de control", video: {"id":"Xp00yQSzMJo","t":"Tácticas de la Grieta: sé un maestro de la visión · League of Legends Latinoamérica (12:13)"}, html: `
      <p class="idea">Los <strong>wards</strong> dan visión de una zona. Ponelos donde te avisen <strong>a tiempo</strong> de un ataque, y usá un <strong>centinela de control</strong> para negarle la visión al rival.</p>
      <table>
        <tr><th>Herramienta</th><th>Qué hace</th></tr>
        <tr><td>Ward amarillo (el abalorio)</td><td>Ward gratis que se recarga solo: visión de una zona por un rato</td></tr>
        <tr><td>Centinela de control (control ward)</td><td>Ward que se compra, revela y anula los wards rivales cerca</td></tr>
        <tr><td>Lente barredora (abalorio rojo)</td><td>Encuentra y deja destruir wards rivales</td></tr>
      </table>
      <p><strong>Dónde poner un ward en tu línea:</strong> en el camino por el que llegaría el jungla rival, en el río o en la entrada de la jungla de tu lado, según hacia dónde esté tu oleada.</p>
      <p><strong>Comprá un centinela de control casi siempre que vuelvas a la base.</strong> Cuesta poco y dura hasta que lo destruyen. En 2026, el support tiene un espacio propio para ellos con su misión de rol.</p>
      <p><strong>Visión para objetivos:</strong> un minuto antes del dragón o del Barón, el equipo pone wards alrededor y saca los rivales.</p>
      <p>Por ejemplo, Nico nunca compraba centinelas. Empezó a llevar uno siempre en el río del lado de su jungla y dejó de recibir emboscadas por ese lado.</p>` },
    { titulo: "Adivinar dónde está el jungla rival", html: `
      <p class="idea">Aunque no lo veas, podés <strong>deducir</strong> dónde está el jungla rival con la información del mapa. A eso se le dice <strong>trackear</strong> al jungla.</p>
      <table>
        <tr><th>Pista</th><th>Qué te dice</th></tr>
        <tr><td>Apareció en la línea de arriba</td><td>No está cerca de la de abajo: es seguro presionar ahí</td></tr>
        <tr><td>Un campamento rival desapareció</td><td>Pasó por ahí hace poco</td></tr>
        <tr><td>Con qué campamento empezó</td><td>Los primeros minutos suele recorrer su jungla de un lado al otro</td></tr>
        <tr><td>Su línea cercana empuja mucho</td><td>Puede estar preparando una emboscada ahí</td></tr>
      </table>
      <pre><code>Razonamiento de ejemplo:
Minuto 3: el jungla rival apareció en la línea de abajo.
→ Está lejos de mid y de top.
→ Por 30 a 40 segundos, mid puede presionar.</code></pre>
      <p><strong>Cuando no sabés dónde está,</strong> jugá como si estuviera cerca de vos.</p>
      <p>Por ejemplo, Nico vio al jungla rival en la línea de abajo en el minuto 4. Sabía que tenía unos 30 segundos y le ganó un intercambio a su rival sin riesgo.</p>` },
  ],
  practica: [
    "En 5 partidas, anotá cuántas veces moriste sin haber visto venir al que te mató.",
    "Comprá un centinela de control cada vez que vuelvas a la base durante 5 partidas y anotá tu puntaje de visión al final de cada una.",
    "En 3 partidas, anotá en qué minuto viste por primera vez al jungla rival y en qué línea.",
  ],
  recursos: [
    { t: "League of Legends: notas de cada parche (en español)", url: "https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/" },
    { t: "OP.GG: estadísticas de tus partidas y de cada campeón", url: "https://www.op.gg/" },
  ],
  quiz: [
    { q: "¿Cuándo conviene mirar el minimapa?", opciones: ["Solo al empezar la partida","Solo cuando morís","Cada pocos segundos, por ejemplo cada vez que das un último golpe","Nunca, distrae"], correcta: 2, explicacion: "El hábito evita muertes. \"Distrae\" tienta, pero son dos segundos que te salvan." },
    { q: "Tu rival de línea desaparece. ¿Qué hacés?", opciones: ["Avisás a tu equipo con un ping de \"desaparecido\"","Nada","Lo seguís por el río solo","Te vas a la base"], correcta: 0, explicacion: "Avisar puede salvar a un compañero. Seguirlo solo tienta, pero te puede emboscar." },
    { q: "Ves al jungla rival en la otra punta del mapa. ¿Qué podés hacer?", opciones: ["Quedarte bajo tu torre","Ir a buscarlo","Nada","Presionar tu línea con más seguridad por un rato"], correcta: 3, explicacion: "Lejos no te puede emboscar. Quedarte bajo torre tienta por costumbre, pero perdés una ventaja." },
    { q: "¿Qué hace un centinela de control?", opciones: ["Da oro","Revela y anula los wards rivales cerca","Te cura","Teletransporta"], correcta: 1, explicacion: "Niega visión al rival. \"Da oro\" tienta porque se compra, pero no da." },
    { q: "Si volvés a la base y te sobra un poco de oro, ¿qué conviene comprar casi siempre?", opciones: ["Nada","Una poción","Un centinela de control","Un objeto caro que no te alcanza"], correcta: 2, explicacion: "Es barato y da mucho. Nada tienta para juntar, pero la visión salva partidas." },
    { q: "Querés encontrar y destruir wards rivales. ¿Qué abalorio usás?", opciones: ["La lente barredora (el rojo)","El ward amarillo","El Destello","Prender"], correcta: 0, explicacion: "La lente encuentra wards. El amarillo tienta porque también es abalorio, pero pone visión." },
    { q: "Si en 1 minuto aparece el dragón, ¿qué hace el equipo con la visión?", opciones: ["Nada hasta que aparezca","Saca sus propios wards","Va solo uno a mirar","Pone wards alrededor y saca los rivales"], correcta: 3, explicacion: "La visión se prepara antes. Esperar tienta, pero llegás a ciegas." },
    { q: "¿Dónde conviene poner un ward en tu línea?", opciones: ["En tu base","En el camino por donde llegaría el jungla rival","Debajo de tu torre","En cualquier lugar"], correcta: 1, explicacion: "Te avisa a tiempo. Debajo de tu torre tienta por seguridad, pero avisa tarde." },
    { q: "¿Qué es \"trackear\" al jungla rival?", opciones: ["Seguirlo con la cámara","Comprarle un ward","Deducir dónde está con la información del mapa","Reportarlo"], correcta: 2, explicacion: "Se adivina con pistas. Seguirlo tienta, pero no lo ves." },
    { q: "El jungla rival apareció en la línea de abajo en el minuto 3. Sos mid. ¿Qué podés hacer?", opciones: ["Presionar unos 30 a 40 segundos con más seguridad","Esconderte bajo la torre","Ir a la línea de abajo","Nada"], correcta: 0, explicacion: "Está lejos por un rato. Esconderte tienta por prudencia, pero perdés la oportunidad." },
    { q: "Si un campamento de la jungla rival desapareció, ¿qué te dice?", opciones: ["Nada","Que se desconectó","Que está en tu base","Que el jungla pasó por ahí hace poco"], correcta: 3, explicacion: "Es una pista de su recorrido. \"Se desconectó\" tienta, pero no tiene que ver." },
    { q: "Si no sabés dónde está el jungla rival, ¿cómo jugás?", opciones: ["Como si estuviera lejos","Como si estuviera cerca de vos","Avanzando hasta su torre","Sin mirar el mapa"], correcta: 1, explicacion: "Así no te sorprende. \"Lejos\" tienta por comodidad, pero es un riesgo." },
  ],
},
{
  id: "objetivos",
  icono: "🐉",
  titulo: "Objetivos y macro",
  nivel: "Avanzado",
  objetivos: [
    "Conocer los objetivos del mapa y qué da cada uno, según el parche actual",
    "Decidir cuándo ir a un objetivo y cuándo cambiarlo por otro",
    "Saber qué hacer después de la fase de línea",
  ],
  lecciones: [
    { titulo: "Los objetivos del mapa", video: {"id":"nl_jV-uRkzE","t":"Tácticas de la Grieta: cómo ser eficiente en la jungla · LoL Esports Latinoamérica (11:41)"}, html: `
      <p class="idea">Las partidas se ganan tomando <strong>objetivos</strong>, no matando por matar. Cada objetivo da una ventaja al equipo que lo toma.</p>
      <table>
        <tr><th>Objetivo</th><th>Qué da (en líneas generales)</th></tr>
        <tr><td>Torres y sus placas</td><td>Oro y espacio en el mapa; en 2026 las placas quedan en todas las torres</td></tr>
        <tr><td>Dragones elementales</td><td>Mejoras para todo el equipo; con varios, el alma del dragón</td></tr>
        <tr><td>Larvas del Vacío</td><td>Daño extra contra estructuras</td></tr>
        <tr><td>Heraldo de la Grieta</td><td>Se usa para empujar y romper torres</td></tr>
        <tr><td>Barón Nashor</td><td>Mejora fuerte para cerrar la partida; en 2026 vuelve a los 20 minutos</td></tr>
        <tr><td>Dragón Ancestral</td><td>Aparece tarde: puede decidir la partida</td></tr>
      </table>
      <p><strong>En 2026 se sacó a Atakhan.</strong> También se sacaron las Proezas: ahora la primera sangre da 100 de oro y la primera torre, 300.</p>
      <p><strong>Los minutos exactos en que aparece cada objetivo cambian con los parches.</strong> En vez de memorizarlos de una guía vieja, buscalos en las notas del parche actual y miralos en el juego.</p>
      <p>Por ejemplo, Nico seguía buscando a Atakhan porque lo vio en una guía de 2025. Al leer las notas de 2026 se dio cuenta de que ya no existía y de que el Barón había vuelto a los 20 minutos.</p>` },
    { titulo: "Cuándo ir a un objetivo", html: `
      <p class="idea">Antes de ir a un objetivo, preguntate tres cosas: <strong>¿tenemos más gente?</strong>, <strong>¿tenemos visión?</strong> y <strong>¿las oleadas están empujadas?</strong></p>
      <table>
        <tr><th>Situación</th><th>Qué conviene</th></tr>
        <tr><td>El rival tiene 2 muertos</td><td>Ir al objetivo más cercano: tienen menos gente para defender</td></tr>
        <tr><td>Tus oleadas están empujadas a su torre</td><td>Ir: los rivales tienen que elegir entre súbditos y objetivo</td></tr>
        <tr><td>Hay más rivales vivos y sin visión tuya</td><td>No ir: te pueden encerrar</td></tr>
        <tr><td>El rival toma un objetivo lejos</td><td>Cambiarlo: tomá vos otra cosa del otro lado (una torre, otro objetivo)</td></tr>
      </table>
      <p><strong>Cambiar objetivos</strong> (en inglés, cross-map) es tomar algo de un lado del mapa mientras el rival toma otra cosa del otro. Muchas veces es mejor que pelear perdiendo.</p>
      <p><strong>Escuchá a tu jungla:</strong> suele saber cuándo aparece cada objetivo. Un ping a tiempo y "voy" o "no puedo" evitan peleas mal armadas.</p>
      <p>Por ejemplo, el equipo de Nico iba a pelear por el dragón con 2 compañeros muertos. Nico pidió cambiarlo por la torre de mid: perdieron el dragón, pero ganaron una torre y 2 placas sin morir.</p>` },
    { titulo: "Después de la fase de línea", html: `
      <p class="idea">Cuando terminan las líneas (a mitad de partida), el juego cambia: hay que <strong>agruparse para objetivos</strong> y <strong>farmear las líneas laterales</strong> con cuidado.</p>
      <pre><code>Reglas de mitad de partida:
1. No vayas solo a una línea lateral sin visión
   si no sabés dónde están 3 o más rivales.
2. Tomá las oleadas laterales antes de un objetivo.
3. Agrupate con tu equipo 1 minuto antes de un objetivo.
4. Después de ganar una pelea, tomá algo: torre, dragón o Barón.</code></pre>
      <table>
        <tr><th>Error común</th><th>Mejor</th></tr>
        <tr><td>Los 5 en mid sin hacer nada</td><td>Uno o dos toman las oleadas laterales</td></tr>
        <tr><td>Ganar una pelea y volver a la base</td><td>Aprovechar y tomar un objetivo</td></tr>
        <tr><td>Morir solo en una línea lateral a los 25 minutos</td><td>Mirar el mapa antes de ir</td></tr>
      </table>
      <p><strong>En 2026 las oleadas llegan más seguido</strong> a mitad y al final de la partida: hay más oro en las laterales, y también más motivos para ir a buscarlo con cuidado.</p>
      <p>Por ejemplo, el equipo de Nico ganó una pelea en el minuto 24 y todos volvieron a la base. Desde entonces, después de ganar una pelea, Nico escribe "Barón" o "torre" en el chat.</p>` },
  ],
  practica: [
    "Leé las notas del parche actual y anotá 3 cambios sobre objetivos que no conocías.",
    "En 5 partidas, anotá cuántas veces tu equipo tomó un objetivo después de ganar una pelea.",
    "Mirá la repetición de una partida perdida y anotá un objetivo al que fueron sin las tres condiciones (más gente, visión y oleadas empujadas).",
  ],
  recursos: [
    { t: "Riot: vista previa del juego para la temporada 2026", url: "https://www.leagueoflegends.com/es-mx/news/dev/dev-2026-season-one-gameplay-preview/" },
    { t: "League of Legends: notas de cada parche (en español)", url: "https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/" },
  ],
  quiz: [
    { q: "¿Cómo se ganan las partidas, sobre todo?", opciones: ["Matando por matar","Farmeando solo hasta el final","Tomando objetivos","Con la mejor skin"], correcta: 2, explicacion: "Los objetivos dan las ventajas que ganan. Matar tienta, pero sin objetivo no suma tanto." },
    { q: "Si leíste una guía de 2025 que habla de Atakhan, ¿qué tenés que saber en 2026?", opciones: ["Se sacó del juego","Aparece a los 10 minutos","Reemplazó al dragón","Es el nuevo Barón"], correcta: 0, explicacion: "Riot lo quitó. \"Aparece a los 10\" tienta si leíste guías de 2025." },
    { q: "En 2026, sin Proezas, ¿cuánto oro da la primera torre?", opciones: ["100","0","1.000","300"], correcta: 3, explicacion: "La primera torre da 300 y la primera sangre 100. 100 tienta, pero ese es el de la primera sangre." },
    { q: "Querés saber en qué minuto aparece cada objetivo. ¿Dónde lo buscás?", opciones: ["En una guía de 2023","En las notas del parche actual","En el chat de la partida","Lo adivinás"], correcta: 1, explicacion: "Los tiempos cambian con los parches. La guía vieja tienta, pero puede estar mal." },
    { q: "Si tu equipo quiere ir a un objetivo, ¿qué tres cosas te preguntás antes?", opciones: ["¿Tengo la skin, el ping y ganas?","¿Es de noche?","¿Tenemos más gente, visión y las oleadas empujadas?","Ninguna"], correcta: 2, explicacion: "Esas tres deciden si conviene. \"Ganas\" tienta, pero no gana objetivos." },
    { q: "Si el rival tiene 2 jugadores muertos, ¿qué conviene?", opciones: ["Ir al objetivo más cercano","Volver a la base todos","Farmear la jungla propia","Esperar a que revivan"], correcta: 0, explicacion: "Tienen menos gente para defender. Esperar tienta, pero se pierde la ventaja." },
    { q: "El rival va al dragón y vos no podés pelear. ¿Qué hacés?", opciones: ["Peleás igual en desventaja","No hacés nada","Te vas a la base","Tomás algo del otro lado del mapa, como una torre"], correcta: 3, explicacion: "Cambiar objetivos compensa. Pelear igual tienta por orgullo, pero se suele perder todo." },
    { q: "¿Qué es \"cambiar objetivos\" (cross-map)?", opciones: ["Robar el Barón siempre","Tomar algo de un lado mientras el rival toma algo del otro","Cambiar de rol","Cambiar de campeón"], correcta: 1, explicacion: "Es un intercambio en el mapa. Robar el Barón tienta, pero es otra cosa." },
    { q: "A los 25 minutos querés farmear una línea lateral y no ves a 3 rivales. ¿Qué hacés?", opciones: ["Vas igual","Vas sin ward","No vas solo: mirás el mapa o vas con alguien","Te quedás ahí hasta que aparezcan"], correcta: 2, explicacion: "Te pueden encerrar. Ir igual tienta por el oro, pero es una muerte que puede perder la partida." },
    { q: "Tu equipo ganó una pelea. ¿Qué conviene hacer?", opciones: ["Tomar algo: una torre, un dragón o el Barón","Volver todos a la base","Pelear en la jungla rival sin objetivo","Nada"], correcta: 0, explicacion: "Después de ganar, hay que convertirlo en ventaja. Volver tienta para comprar, pero se pierde la oportunidad." },
    { q: "Si el Barón aparece pronto, ¿cuándo conviene agruparse?", opciones: ["Cuando ya lo están tomando","Al empezar la partida","Nunca","Un minuto antes, con las oleadas empujadas"], correcta: 3, explicacion: "Llegar antes permite armar visión. Llegar cuando lo están tomando tienta, pero ya es tarde." },
    { q: "En 2026, ¿qué cambió con las oleadas a mitad de partida?", opciones: ["Desaparecieron","Llegan más seguido: hay más oro en las laterales","Llegan cada 2 minutos","No cambió nada"], correcta: 1, explicacion: "Llegan cada menos tiempo. \"No cambió\" tienta, pero sí cambió en 2026." },
  ],
},
{
  id: "mental",
  icono: "🧠",
  titulo: "Mental y revisión de partidas",
  nivel: "Avanzado",
  objetivos: [
    "Reconocer el tilt y cortar a tiempo con una regla simple",
    "Comunicarte con el equipo sin perder la cabeza",
    "Revisar tus partidas con la repetición para encontrar tus errores",
  ],
  lecciones: [
    { titulo: "El tilt y cuándo cortar", html: `
      <p class="idea">El <strong>tilt</strong> es jugar enojado o frustrado. Juega peor, decide peor y suele terminar en varias derrotas seguidas. La mejor defensa es una <strong>regla para cortar</strong>.</p>
      <table>
        <tr><th>Señal de tilt</th><th>Qué hacés</th></tr>
        <tr><td>Escribís con enojo en el chat</td><td>Silenciás el chat y respirás</td></tr>
        <tr><td>Querés "recuperar" los LP perdidos ya</td><td>Cortás: esa es la trampa</td></tr>
        <tr><td>Culpás a todos menos a vos</td><td>Pausa: no estás viendo tus errores</td></tr>
        <tr><td>Jugás más rápido y peor</td><td>Terminás la sesión</td></tr>
      </table>
      <pre><code>Regla de las 2:
Si perdés 2 clasificatorias seguidas, cortás.
Hacés otra cosa al menos 30 minutos
(o jugás un modo normal, sin LP).</code></pre>
      <p><strong>Tu cuerpo juega también:</strong> dormir bien, tomar agua, hacer pausas cada tanto y no jugar con hambre mejoran la concentración. Jugar hasta la madrugada para "subir" suele hacerte bajar.</p>
      <p><strong>Si el juego te está haciendo mal</strong> (te enoja mucho, te quita el sueño o te aleja de otras cosas), contalo a alguien de confianza o a un profesional.</p>
      <p>Por ejemplo, Nico perdía 5 o 6 partidas seguidas los domingos a la noche. Con la regla de las 2, dejó de perder LP en rachas y su rango dejó de subir y bajar tanto.</p>` },
    { titulo: "Hablar con el equipo", html: `
      <p class="idea">El chat y los pings sirven para <strong>coordinar</strong>, no para discutir. Un equipo que se pelea juega peor, aunque tenga razón.</p>
      <table>
        <tr><th>Sirve</th><th>No sirve</th></tr>
        <tr><td>"mid sin flash 12:30"</td><td>"qué malo nuestro mid"</td></tr>
        <tr><td>"dragón en 1 minuto, ward río"</td><td>Insultar a alguien que murió</td></tr>
        <tr><td>Ping de peligro antes de una emboscada</td><td>Spamear pings a un compañero</td></tr>
        <tr><td>"buena" después de una jugada</td><td>Discutir quién tuvo la culpa</td></tr>
      </table>
      <p><strong>Silenciar es una herramienta:</strong> si alguien escribe con enojo, silencialo (el chat o los pings) y seguí jugando. No perdés nada y ganás concentración.</p>
      <p><strong>Reportar:</strong> si alguien insulta o juega para perder a propósito, reportalo al terminar la partida desde el cliente. Para problemas con la cuenta, está el soporte de Riot.</p>
      <p><strong>Tus datos:</strong> no compartas tu cuenta ni tu contraseña con nadie, ni con quien promete "subirte de elo". Además de ser contra las reglas, te pueden robar la cuenta.</p>
      <p>Por ejemplo, un compañero insultaba a Nico desde el minuto 5. Nico lo silenció, se concentró en su línea y terminó ganando la partida.</p>` },
    { titulo: "Revisar tus partidas", html: `
      <p class="idea">Mirar tus propias partidas (las <strong>repeticiones</strong>) es la forma más rápida de encontrar tus errores. Se la llama revisión de VOD.</p>
      <p>El cliente guarda tus partidas: desde tu perfil, en el historial de partidas, podés descargar y ver la repetición.</p>
      <pre><code>Revisión de 15 minutos:
1. Elegí una partida PERDIDA (enseñan más).
2. Mirá solo tus primeras 2 muertes.
3. En cada una, pausá 5 segundos antes y preguntate:
   ¿Miré el minimapa? ¿Dónde estaba el jungla rival?
   ¿Mi oleada empujaba hacia dónde?
4. Anotá el error y una regla para no repetirlo.</code></pre>
      <table>
        <tr><th>Error encontrado</th><th>Regla</th></tr>
        <tr><td>Avancé sin saber dónde estaba el jungla</td><td>"Sin ver al jungla, no paso la mitad de la línea"</td></tr>
        <tr><td>Peleé sin Destello contra uno que lo tenía</td><td>"Antes de pelear, miro sus hechizos"</td></tr>
        <tr><td>Fui al dragón con 2 compañeros muertos</td><td>"Con menos gente, no peleo objetivos"</td></tr>
      </table>
      <p><strong>Mirá también a un jugador de Diamante de tu campeón:</strong> fijate qué hace distinto en los primeros 10 minutos.</p>
      <p>Por ejemplo, en sus revisiones Nico encontró que casi todas sus muertes eran por avanzar sin saber dónde estaba el jungla. Una sola regla le ahorró la mitad de esas muertes.</p>` },
  ],
  practica: [
    "Usá la regla de las 2 durante una semana y anotá cuántas veces cortaste y cuántos LP terminaste ganando o perdiendo en la semana.",
    "En 5 partidas, anotá cuántas veces silenciaste a alguien y cómo te fue en esas partidas.",
    "Revisá 2 partidas perdidas con la revisión de 15 minutos y anotá el error de tus primeras 2 muertes y la regla que te pusiste.",
  ],
  recursos: [
    { t: "Soporte de Riot: ayuda, reportes y herramientas de la cuenta", url: "https://support-leagueoflegends.riotgames.com/hc/es-419" },
    { t: "OP.GG: estadísticas de tus partidas y de cada campeón", url: "https://www.op.gg/" },
  ],
  quiz: [
    { q: "¿Qué es el tilt?", opciones: ["Una técnica de farmeo","Un objeto","Jugar enojado o frustrado, y por eso decidir peor","Un rango"], correcta: 2, explicacion: "El tilt empeora las decisiones. Técnica tienta por la palabra en inglés, pero no." },
    { q: "Perdiste 2 clasificatorias seguidas. ¿Qué hacés según la regla?", opciones: ["Cortás al menos 30 minutos o jugás un modo sin LP","Jugás otra para recuperar","Jugás 5 más seguidas","Cambiás de cuenta"], correcta: 0, explicacion: "Querer recuperar ya es la trampa. \"Una más\" tienta, pero suele ser otra derrota." },
    { q: "Querés \"recuperar\" ya los LP perdidos. ¿Qué es esa sensación?", opciones: ["La motivación perfecta","Una buena idea siempre","Nada importante","Una señal de tilt: conviene cortar"], correcta: 3, explicacion: "Es la trampa del tilt. \"Motivación\" tienta, pero lleva a rachas negativas." },
    { q: "Son las 3 de la mañana y querés seguir para subir. ¿Qué conviene?", opciones: ["Seguir hasta subir","Dormir: cansado jugás peor","Tomar mucho café y seguir","Jugar más rápido"], correcta: 1, explicacion: "El cansancio baja el rendimiento. Seguir tienta por la meta, pero suele hacerte bajar." },
    { q: "¿Cuál de estos mensajes sirve en el chat?", opciones: ["\"qué malo nuestro mid\"","\"reporten al jungla\"","\"dragón en 1 minuto, ward río\"","\"gg, perdimos\""], correcta: 2, explicacion: "Coordina al equipo. Los otros tientan por enojo, pero empeoran el juego." },
    { q: "Un compañero escribe con enojo todo el tiempo. ¿Qué hacés?", opciones: ["Lo silenciás y seguís jugando","Le contestás","Le spameás pings","Te vas de la partida"], correcta: 0, explicacion: "Silenciar te devuelve la concentración. Contestar tienta, pero alarga la pelea." },
    { q: "Alguien insulta o juega para perder a propósito. ¿Qué hacés?", opciones: ["Lo insultás también","Te vas de la partida","Le pasás tu cuenta","Lo reportás al terminar la partida desde el cliente"], correcta: 3, explicacion: "Reportar es la vía correcta. Insultar tienta, pero también te pueden sancionar a vos." },
    { q: "Alguien te ofrece \"subirte de elo\" si le pasás tu cuenta. ¿Qué hacés?", opciones: ["Se la pasás, es rápido","No se la pasás: es contra las reglas y te la pueden robar","Le pasás solo la contraseña","Le pagás y listo"], correcta: 1, explicacion: "Compartir la cuenta es un riesgo y va contra las reglas. \"Es rápido\" tienta, pero podés perder la cuenta." },
    { q: "Querés encontrar tus errores. ¿Qué partidas revisás primero?", opciones: ["Solo las ganadas","Ninguna","Las perdidas","Las de otros solamente"], correcta: 2, explicacion: "Las perdidas enseñan más. Las ganadas tientan porque se disfrutan, pero muestran menos errores." },
    { q: "En la revisión, ¿qué mirás de cada muerte?", opciones: ["Los segundos antes: minimapa, jungla rival y oleada","Solo la animación de la muerte","El aspecto del campeón","El chat"], correcta: 0, explicacion: "El error está antes de morir. La muerte tienta porque es lo que se ve, pero ya es tarde." },
    { q: "Encontrás que morís por avanzar sin saber dónde está el jungla. ¿Qué regla te ponés?", opciones: ["\"Juego más agresivo\"","\"Ignoro al jungla\"","\"Compro más daño\"","\"Sin ver al jungla, no paso la mitad de la línea\""], correcta: 3, explicacion: "Una regla concreta corrige el error. Más agresivo tienta, pero empeora ese error." },
    { q: "¿Qué te sirve de mirar a un jugador de Diamante de tu campeón?", opciones: ["Copiar su nombre","Ver qué hace distinto en los primeros 10 minutos","Solo ver sus jugadas lindas","Nada"], correcta: 1, explicacion: "El comienzo muestra hábitos. Las jugadas lindas tientan, pero se aprende más de lo cotidiano." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu plan de 30 días",
  nivel: "Avanzado",
  objetivos: [
    "Armar un plan de 30 días con una meta por semana",
    "Medir tu progreso con números, no con sensaciones",
    "Revisar el plan con una rúbrica y ajustarlo",
  ],
  lecciones: [
    { titulo: "El plan de 30 días", html: `
      <p class="idea">Subir es la suma de <strong>pequeñas mejoras medidas</strong>. El proyecto final es un plan de 30 días con una meta por semana.</p>
      <table>
        <tr><th>Semana</th><th>Foco</th><th>Número a medir</th></tr>
        <tr><td>1</td><td>Farmeo</td><td>Súbditos al minuto 10 (meta: 70 o más)</td></tr>
        <tr><td>2</td><td>Mapa y visión</td><td>Muertes antes del minuto 10 (meta: 1 o menos)</td></tr>
        <tr><td>3</td><td>Oleadas y objetivos</td><td>Regresos a la base con la oleada empujada (meta: casi todos)</td></tr>
        <tr><td>4</td><td>Mental y revisión</td><td>Partidas revisadas (meta: 2 por semana) y respeto de la regla de las 2</td></tr>
      </table>
      <pre><code>Tu planilla (una fila por partida):
Fecha | Campeón | Resultado | Súbditos al min 10 | Muertes antes del 10 | Nota
12/3  | Ahri    | Victoria  | 74                 | 0                    | Empujé antes de volver</code></pre>
      <p><strong>Seguí con tu rol y tus 2 o 3 campeones</strong> durante los 30 días: si cambiás todo, no sabés qué te hizo mejorar.</p>
      <p>Por ejemplo, Nico empezó el plan en Plata II con 5,2 CS/min y 2,5 muertes promedio antes del minuto 10. A los 30 días tenía 6,8 CS/min y 0,9 muertes, y estaba en Oro III.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para revisar tu plan a mitad de camino y al final.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Rol y campeones</td><td>Un rol y 2 o 3 campeones todo el mes</td><td>Algún cambio</td><td>Cambió todo el tiempo</td></tr>
        <tr><td>Farmeo</td><td>Subió el CS/min y lo anotó</td><td>Lo anotó, sin mejora</td><td>No lo midió</td></tr>
        <tr><td>Mapa</td><td>Bajaron las muertes antes del minuto 10</td><td>Igual</td><td>No lo midió</td></tr>
        <tr><td>Oleadas</td><td>Empuja antes de volver casi siempre</td><td>A veces</td><td>Nunca</td></tr>
        <tr><td>Mental</td><td>Respetó la regla de las 2</td><td>A veces</td><td>Nunca</td></tr>
        <tr><td>Revisión</td><td>Revisó 2 partidas por semana con una regla nueva</td><td>Revisó sin reglas</td><td>No revisó</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡plan cumplido! Armá el siguiente.
7 a 10  → seguí con lo que sacó 0 o 1
0 a 6   → simplificá: una sola meta por semana
Regla: si "Mental" tiene 0, el plan no funciona,
aunque el total sea alto: el tilt borra lo que mejoraste.</code></pre>
      <p>Por ejemplo, a mitad del mes Nico sacó 7: no respetaba la regla de las 2. Cuando empezó a cumplirla, sus rachas negativas desaparecieron y terminó con 11.</p>` },
    { titulo: "Seguir subiendo", html: `
      <p class="idea">Llegar a Diamante lleva tiempo: para la mayoría son <strong>meses</strong>, no días. Lo que te lleva es la constancia del plan, no una racha de suerte.</p>
      <table>
        <tr><th>Cuando...</th><th>Hacé esto</th></tr>
        <tr><td>Terminás el plan de 30 días</td><td>Armá otro con nuevas metas</td></tr>
        <tr><td>Te estancás varias semanas</td><td>Revisá partidas: hay un error que se repite</td></tr>
        <tr><td>Sale un parche grande</td><td>Leé las notas y revisá tus runas y objetos</td></tr>
        <tr><td>Bajás de división</td><td>No pasa nada: mirá tu tendencia en un mes, no en un día</td></tr>
      </table>
      <p><strong>La tendencia importa más que el día:</strong> en una semana podés bajar y en el mes subir. Anotá tu rango una vez por semana, no después de cada partida.</p>
      <p><strong>Jugá también por diversión:</strong> si el juego deja de divertirte, tomate un descanso. Subir de rango cansado y enojado no vale la pena.</p>
      <p>Para seguir aprendiendo, la serie oficial "Tácticas de la Grieta" de Riot Latinoamérica tiene videos de cada rol y de macro.</p>
      <p>Por ejemplo, Nico tardó 5 meses en pasar de Plata II a Esmeralda. Hubo semanas en que bajó, pero mes a mes siempre subió.</p>` },
  ],
  practica: [
    "Armá tu plan de 30 días con una meta medible por semana y anotalo en una planilla.",
    "Completá la planilla en cada partida durante 30 días y anotá tu CS/min y tus muertes antes del minuto 10 al principio y al final.",
    "Revisá tu plan con la rúbrica a mitad de mes y al final, y anotá los dos puntajes.",
  ],
  recursos: [
    { t: "Soporte de Riot: niveles, divisiones y colas de clasificatoria", url: "https://support.riotgames.com/es-419/league-of-legends/gameplay/ranked-tiers-divisions-and-queues" },
    { t: "League of Legends: notas de cada parche (en español)", url: "https://www.leagueoflegends.com/es-mx/news/tags/patch-notes/" },
    { t: "OP.GG: estadísticas de tus partidas y de cada campeón", url: "https://www.op.gg/" },
  ],
  quiz: [
    { q: "¿Cuántas metas conviene tener por semana en el plan?", opciones: ["Diez","Ninguna","Una","Todas a la vez"], correcta: 2, explicacion: "Una meta se mejora de verdad. Todas a la vez tienta, pero no se mejora ninguna." },
    { q: "Si querés saber si mejoraste, ¿qué mirás?", opciones: ["Números medidos, como CS/min o muertes antes del minuto 10","Cómo te sentiste","Si ganaste la última","Lo que dijo tu equipo"], correcta: 0, explicacion: "Los números no engañan. La sensación tienta, pero puede ser falsa." },
    { q: "¿Qué conviene anotar en tu planilla después de cada partida?", opciones: ["Solo si ganaste","Nada","Los insultos del chat","Campeón, resultado, súbditos al minuto 10, muertes antes del 10 y una nota"], correcta: 3, explicacion: "Así ves tu progreso real. Solo el resultado tienta, pero no dice qué mejorar." },
    { q: "Durante los 30 días, ¿cambiás de rol y de campeones?", opciones: ["Sí, cada semana","No: seguís con tu rol y tus 2 o 3 campeones","Sí, cada partida","Sí, al azar"], correcta: 1, explicacion: "Si cambiás todo, no sabés qué te hizo mejorar. Probar cosas nuevas tienta, pero ensucia la medición." },
    { q: "En la rúbrica, no medís tu farmeo. ¿Cuánto sacás en Farmeo?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 2, explicacion: "Sin medir no se puede saber. 1 tienta si creés que mejoraste, pero no lo sabés." },
    { q: "Tu plan suma 10, pero \"Mental\" tiene 0. ¿Funciona?", opciones: ["No: el tilt borra lo que mejoraste","Sí, 10 es mucho","Sí, si ganás seguido","No importa el mental"], correcta: 0, explicacion: "La regla de la rúbrica lo dice. El 10 tienta, pero las rachas de tilt te bajan igual." },
    { q: "Sacaste 6 en la rúbrica. ¿Qué hacés?", opciones: ["Agregás más metas","Abandonás","Cambiás de juego","Simplificás: una sola meta por semana"], correcta: 3, explicacion: "Con menos, se cumple. Más metas tientan para compensar, pero empeora." },
    { q: "¿Cuánto suele llevar llegar a Diamante?", opciones: ["Un fin de semana","Meses de constancia","Un día con suerte","Una racha de 3 victorias"], correcta: 1, explicacion: "Es un proceso largo. Un fin de semana tienta por las ganas, pero no es realista." },
    { q: "Te estancás varias semanas en la misma división. ¿Qué hacés?", opciones: ["Jugás más horas sin pensar","Cambiás todo de golpe","Revisás partidas: hay un error que se repite","Culpás al juego"], correcta: 2, explicacion: "El estancamiento suele ser un error repetido. Más horas tientan, pero repiten el error." },
    { q: "Si bajaste una división esta semana, ¿qué mirás?", opciones: ["Tu tendencia en el mes, no en un día","Solo el resultado de hoy","Nada","Si tu equipo era malo"], correcta: 0, explicacion: "En una semana se baja y en el mes se sube. Mirar el día tienta, pero engaña." },
    { q: "Si el juego dejó de divertirte y te enoja todo el tiempo, ¿qué conviene?", opciones: ["Jugar más para recuperar","Jugar de noche hasta tarde","No decirle nada a nadie","Tomarte un descanso"], correcta: 3, explicacion: "Subir enojado no vale la pena. Jugar más tienta, pero alimenta el enojo." },
    { q: "Sale un parche grande. ¿Qué hacés con tu plan?", opciones: ["Nada","Leés las notas y revisás tus runas y objetos","Cambiás de rol","Dejás el plan"], correcta: 1, explicacion: "Los parches cambian lo que conviene. \"Nada\" tienta, pero podés estar comprando algo que ya no sirve." },
  ],
},
];
