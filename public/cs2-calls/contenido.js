// Temario del curso "Counter-Strike 2: mapas y calls de Premier". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js cs2-calls y node tools/metodologia.js cs2-calls
window.TEMARIO = [
{
  id: "comunicacion",
  icono: "📣",
  titulo: "Comunicar como un equipo",
  nivel: "Básico",
  objetivos: [
    "Explicar qué es un callout y por qué se dicen en inglés aunque juegues en castellano",
    "Dar una call completa en menos de 3 segundos: cuántos, dónde, con qué y cuánta vida",
    "Usar el vocabulario del equipo (entry, anchor, lurk, rotar, retake) y entender cómo funciona Premier",
  ],
  lecciones: [
    { titulo: "Qué es un callout", video: {"id":"BKY1hOBJRDc","t":"Comunicación en CS2 · TodoCS2 (11:02)"}, html: `
      <p class="idea">Un <strong>callout</strong> (o "call") es el nombre corto de un lugar del mapa. Sirve para que tu equipo sepa <strong>dónde</strong> está algo en menos de un segundo.</p>
      <p>Hay dos tipos de nombres:</p>
      <table>
        <tr><th>Tipo</th><th>Qué es</th><th>Ejemplo</th></tr>
        <tr><td>Oficial</td><td>Lo define el juego: aparece debajo del radar con el lugar donde está cada compañero</td><td>"Palace Interior" en Mirage</td></tr>
        <tr><td>De la comunidad</td><td>Lo inventaron los jugadores y todos lo usan, aunque el juego no lo muestre</td><td>"Tetris" o "Sandwich" en Mirage</td></tr>
      </table>
      <p><strong>¿Por qué en inglés?</strong> Porque así se aprendieron en todo el mundo: un jugador de Argentina, de España o de Brasil entiende "Banana" o "Connector" igual. En partidas en castellano se mezclan: algunos se dicen traducidos, como <strong>Palacio</strong>, <strong>Ventana</strong>, <strong>Rampa</strong> o <strong>Escaleras</strong>, y la mayoría queda en inglés. En este curso cada call viene con su significado en español para que la entiendas, pero en partida conviene decir la que usa tu equipo.</p>
      <p><strong>El pool de Premier hoy</strong> tiene 7 mapas: Ancient, Anubis, Cache, Dust II, Inferno, Mirage y Nuke. Cache entró en julio de 2026, en la Temporada 5, y reemplazó a Overpass. Valve cambia el pool cada tanto: revisá las notas de cada temporada.</p>
      <p>Por ejemplo, si decís "uno en el edificio grande de arriba de A" en Mirage, tu compañero pierde 3 segundos pensando. Si decís "uno Palace", ya sabe adónde apuntar.</p>` },
    { titulo: "Una call completa", html: `
      <p class="idea">Una buena call responde 4 cosas en este orden: <strong>cuántos</strong>, <strong>dónde</strong>, <strong>con qué</strong> y <strong>cuánta vida</strong>. Y se dice en menos de 3 segundos.</p>
      <pre><code>Cuántos   → "Dos"
Dónde     → "Banana"
Con qué   → "uno con AWP"
Vida      → "el de adelante lo dejé a 40"

Call: "Dos Banana, uno AWP, el de adelante a 40."</code></pre>
      <table>
        <tr><th>Call floja</th><th>Call clara</th></tr>
        <tr><td>"¡Ahí, ahí, ahí está!"</td><td>"Uno Short"</td></tr>
        <tr><td>"Vienen todos"</td><td>"Cuatro Apartments, tiraron smoke a Window"</td></tr>
        <tr><td>"Le pegué"</td><td>"Le pegué 90, está Pit"</td></tr>
      </table>
      <p><strong>Reglas que separan a un buen equipo:</strong></p>
      <ul>
        <li>Si moriste, decí la info una sola vez y en corto. Nada de explicar por qué moriste.</li>
        <li>Cuando un compañero está solo contra varios (un <strong>clutch</strong>), silencio total salvo que te pida algo.</li>
        <li>Hablá sin gritar: el grito tapa los pasos que escucha tu equipo.</li>
        <li>Una call vieja confunde: decí "lo vi hace 10 segundos en Mid" en vez de "está Mid".</li>
      </ul>
      <p>Por ejemplo, un jugador muere en Mirage y dice "dos Palace, uno lit". Su compañero en A ya sabe que tiene que mirar Palace y que uno de los dos está casi sin vida.</p>` },
    { titulo: "El vocabulario del equipo", html: `
      <p class="idea">Además de los lugares, hay palabras para los <strong>roles</strong> y las <strong>situaciones</strong> de la ronda. Se usan en inglés y en castellano mezclados.</p>
      <table>
        <tr><th>Palabra</th><th>Qué significa</th></tr>
        <tr><td>Entry</td><td>El primero que entra a un sitio para abrir el paso</td></tr>
        <tr><td>Anchor (ancla)</td><td>El CT que se queda defendiendo un sitio aunque lo ataquen</td></tr>
        <tr><td>Lurk (lurker)</td><td>El T que se queda solo del otro lado del mapa para sorprender</td></tr>
        <tr><td>Rotar</td><td>Cambiar de sitio para ayudar donde está el ataque</td></tr>
        <tr><td>Retake</td><td>Recuperar un sitio después de que plantaron la bomba</td></tr>
        <tr><td>Post-plant</td><td>Las posiciones de los T después de plantar</td></tr>
        <tr><td>Eco / force / full buy</td><td>No comprar / comprar lo que alcance / comprar todo</td></tr>
        <tr><td>Lit / one shot</td><td>Enemigo con muy poca vida: cae con un tiro</td></tr>
        <tr><td>Default</td><td>El lugar habitual para plantar en un sitio</td></tr>
      </table>
      <p><strong>Cómo funciona Premier:</strong> es el modo competitivo con puntaje, el <strong>CS Rating</strong>. Antes de cada partida, los equipos eligen y vetan mapas del pool. Las partidas son a 24 rondas (gana el primero que llega a 13) y hace falta tener la cuenta con <strong>Prime</strong>.</p>
      <p><strong>Edad:</strong> Counter-Strike 2 está calificado para mayores de 18 años en muchos países (PEGI 18).</p>
      <p>Por ejemplo, el IGL (el que dirige al equipo) dice "eco, juntos B, Juan lurk en Mid". En una frase, todos saben qué comprar, adónde ir y quién se queda solo.</p>` },
  ],
  practica: [
    "Jugá una partida y anotá 3 calls que diste. Al lado, reescribilas con el orden cuántos, dónde, con qué y vida.",
    "Grabá tu voz en una partida y contá cuántas calls duraron más de 3 segundos.",
    "Anotá los 7 mapas del pool actual y cuál fue el último que entró y cuándo.",
  ],
  recursos: [
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "Dot Esports: notas de la Temporada 5 de Premier (Cache entra, Overpass sale)", url: "https://dotesports.com/counter-strike/news/cs2-season-5-update-patch-notes" },
  ],
  quiz: [
    { q: "Si en partida decís \"uno en el edificio grande de arriba de A\" en Mirage, ¿qué pasa?", opciones: ["Es la call perfecta","Es más clara porque es en castellano","Tu equipo pierde tiempo: con \"uno Palace\" lo entiende al instante","Nadie la necesita"], correcta: 2, explicacion: "El callout es corto y todos lo conocen. \"Más clara en castellano\" tienta, pero la descripción larga se entiende tarde." },
    { q: "¿Dónde ves el nombre oficial del lugar donde está un compañero?", opciones: ["Debajo del radar, en la pantalla","En el chat de Steam","En la tienda","No existe"], correcta: 0, explicacion: "El juego muestra el lugar oficial con el radar. \"No existe\" tienta si solo conocés los de la comunidad." },
    { q: "Si un callout como \"Tetris\" no aparece en el radar, ¿qué tipo es?", opciones: ["Oficial","Un error del juego","Un nombre que no se usa","De la comunidad: lo inventaron los jugadores"], correcta: 3, explicacion: "Los de la comunidad no los muestra el juego, pero todos los usan. \"No se usa\" tienta, pero es muy común." },
    { q: "Tu equipo habla en castellano. ¿Cómo decís \"Banana\"?", opciones: ["\"Plátano\"","\"Banana\": la mayoría de los callouts quedan en inglés","\"La fruta\"","\"El pasillo curvo amarillo\""], correcta: 1, explicacion: "Así lo entienden todos. Traducirlo tienta, pero nadie lo dice así y confunde." },
    { q: "¿Qué mapas forman el pool de Premier desde julio de 2026?", opciones: ["Los mismos, pero con Overpass en vez de Cache","Los mismos, pero con Train en vez de Cache","Ancient, Anubis, Cache, Dust II, Inferno, Mirage y Nuke","Solo Dust II y Mirage"], correcta: 2, explicacion: "Cache reemplazó a Overpass en la Temporada 5. Overpass tienta porque estaba hasta julio de 2026." },
    { q: "Ves dos enemigos en Banana, uno con AWP, y al de adelante lo dejaste con 40. ¿Qué call das?", opciones: ["\"Dos Banana, uno AWP, el de adelante a 40\"","\"¡Banana, Banana, Banana!\"","\"Vienen\"","\"Le pegué a uno\""], correcta: 0, explicacion: "Cuántos, dónde, con qué y vida. Repetir el lugar tienta por la urgencia, pero no da la información." },
    { q: "Si moriste y tu compañero sigue vivo, ¿qué decís?", opciones: ["Por qué moriste, con detalle","Nada nunca","Le gritás qué hacer todo el tiempo","La info una vez y en corto, sin explicar por qué moriste"], correcta: 3, explicacion: "La info sirve; la explicación lo distrae. Explicar tienta por frustración, pero tapa los sonidos." },
    { q: "Tu compañero está solo contra 3 (un clutch). ¿Qué hacés?", opciones: ["Le decís dónde tiene que ir todo el tiempo","Silencio, salvo que te pida algo","Hablás de la ronda anterior","Le gritás que se apure"], correcta: 1, explicacion: "Necesita escuchar pasos y concentrarse. Ayudar hablando tienta, pero lo desconcentra." },
    { q: "Si viste a un enemigo en Mid hace 10 segundos, ¿cómo lo decís?", opciones: ["\"Está Mid\"","\"Mid, Mid, Mid\"","\"Lo vi hace 10 segundos en Mid\"","No decís nada"], correcta: 2, explicacion: "Una call vieja dicha como nueva confunde. \"Está Mid\" tienta por corto, pero quizás ya se movió." },
    { q: "Si un CT se queda defendiendo B aunque entren 3, ¿qué rol cumple?", opciones: ["Anchor (ancla)","Entry","Lurk","Eco"], correcta: 0, explicacion: "El anchor sostiene el sitio. Entry tienta, pero ese es el primero que entra atacando." },
    { q: "Si un T se queda solo del otro lado del mapa para sorprender, ¿cómo se llama?", opciones: ["Anchor","Retake","Default","Lurk"], correcta: 3, explicacion: "El lurker juega solo y espera. Anchor tienta, pero es un rol CT." },
    { q: "¿Cuántas rondas tiene una partida de Premier y cuántas hay que ganar?", opciones: ["30 rondas, gana el que llega a 16","Hasta 24 rondas: gana el primero que llega a 13","10 rondas, gana el que llega a 6","No tiene límite"], correcta: 1, explicacion: "CS2 juega 24 rondas (MR12). 30 y 16 tientan porque así era en CS:GO." },
  ],
},
{
  id: "mirage",
  icono: "🏜️",
  titulo: "Mirage",
  nivel: "Básico",
  objetivos: [
    "Nombrar los callouts de A: Palace, Ramp, Stairs, Jungle, Tetris, Firebox, Ticket Booth y más",
    "Nombrar los callouts de B: Apartments, Short (Cat), Market, Van, Bench y Kitchen",
    "Nombrar Mid y sus conexiones: Top Mid, Window, Connector, Underpass y Ladder Room",
  ],
  lecciones: [
    { titulo: "A: Palacio, Rampa y el sitio", video: {"id":"4I9E1rhuAD4","t":"Callouts de Mirage en español · Fer NS (4:31)"}, html: `
      <p class="idea">A de Mirage es una plaza con dos entradas de los T: <strong>Palace</strong> (arriba) y <strong>Ramp</strong> (la rampa). Los CT la defienden desde <strong>Jungle</strong>, <strong>Stairs</strong> y <strong>CT</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/mirage/" target="_blank" rel="noopener">Abrí el mapa de Mirage con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Palace</strong><br><small>Palacio</small></td><td>Edificio elevado sobre A; los T salen por sus columnas (Pillars)</td></tr><tr><td><strong>Palace Alley</strong><br><small>Callejón de Palacio</small></td><td>Callejón que sube desde T spawn hacia Palace</td></tr><tr><td><strong>A Ramp / T Ramp</strong><br><small>Rampa</small></td><td>Pasillo con arcos que baja desde T spawn hasta A</td></tr><tr><td><strong>Shadows</strong><br><small>Sombras</small></td><td>Rincón oscuro al pie de Ramp</td></tr><tr><td><strong>Tetris</strong><br><small>Tetris (igual)</small></td><td>Cajas escalonadas en el borde del sitio, cerca de Ramp</td></tr><tr><td><strong>A Default</strong><br><small>Default de A</small></td><td>Lugar común para plantar, junto a las cajas de adelante</td></tr><tr><td><strong>Sandwich</strong><br><small>Sandwich (igual)</small></td><td>Hueco entre las cajas del default y Firebox</td></tr><tr><td><strong>Firebox</strong><br><small>Firebox (igual)</small></td><td>Caja sola entre Sandwich y Stairs</td></tr><tr><td><strong>Triple Box</strong><br><small>Triple caja</small></td><td>Tres cajas apiladas al fondo de A</td></tr><tr><td><strong>Stairs</strong><br><small>Escaleras</small></td><td>Escalera al fondo de A; cubre Ramp y Palace</td></tr><tr><td><strong>Scaffolding</strong><br><small>Andamio</small></td><td>Estructura de andamios del lado de Ramp y Palace</td></tr><tr><td><strong>Jungle</strong><br><small>Jungla</small></td><td>Cuarto entre Connector y A; controla la salida de Connector</td></tr><tr><td><strong>Ticket Booth</strong><br><small>Boletería</small></td><td>Cabina en A cerca de CT, para emboscar</td></tr><tr><td><strong>Ninja</strong><br><small>Ninja (igual)</small></td><td>Rincón escondido cerca de Ticket Booth</td></tr><tr><td><strong>CT</strong><br><small>CT</small></td><td>Pasaje desde CT spawn hasta A, pasando por Ticket Booth</td></tr></table>
      <p>Por ejemplo, entrás por Ramp y un CT te mata desde la escalera del fondo. Tu call es "uno Stairs", no "uno al fondo arriba".</p>` },
    { titulo: "B: Apartamentos, Short y Mercado", html: `
      <p class="idea">A B de Mirage los T llegan por <strong>Apartments</strong> (los apartamentos) o por <strong>Short</strong> desde Mid. Los CT rotan por <strong>Market</strong> (el mercado) y <strong>Kitchen</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/mirage/" target="_blank" rel="noopener">Abrí el mapa de Mirage con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>B Apartments (Apps)</strong><br><small>Apartamentos</small></td><td>Pasillo largo de departamentos desde T spawn hasta B</td></tr><tr><td><strong>Apps Ramp</strong><br><small>Rampa de Apartamentos</small></td><td>Rampa adentro de los apartamentos que sube desde T spawn</td></tr><tr><td><strong>B Site</strong><br><small>Sitio B</small></td><td>Sitio cerrado de B</td></tr><tr><td><strong>Van</strong><br><small>Camioneta</small></td><td>Camioneta en B mirando a la salida de Apartments</td></tr><tr><td><strong>Bench</strong><br><small>Banco</small></td><td>Banco contra la pared del fondo de B</td></tr><tr><td><strong>Truck</strong><br><small>Camión</small></td><td>Camión en la esquina del fondo de B; buena cobertura para el anchor</td></tr><tr><td><strong>B Plat</strong><br><small>Plataforma de B</small></td><td>Plataforma elevada de B, cerca de Short</td></tr><tr><td><strong>Market (Shop)</strong><br><small>Mercado</small></td><td>Negocio al lado de B, con puertas y ventanas</td></tr><tr><td><strong>Market Window</strong><br><small>Ventana del Mercado</small></td><td>Ventana que mira a B y a la salida de Apartments</td></tr><tr><td><strong>Market Door</strong><br><small>Puerta del Mercado</small></td><td>Puerta del Mercado hacia B</td></tr><tr><td><strong>Kitchen</strong><br><small>Cocina</small></td><td>Cuarto detrás de Window que lleva al Mercado</td></tr><tr><td><strong>Short (Cat / B Short)</strong><br><small>Corto / Pasarela</small></td><td>Pasarela desde Mid hacia B: el camino corto</td></tr><tr><td><strong>Short Corner</strong><br><small>Esquina de Short</small></td><td>Esquina cerrada arriba de Short, antes de B Plat</td></tr><tr><td><strong>Back Alley / Side Alley</strong><br><small>Callejón de atrás / lateral</small></td><td>Pasajes de los T detrás y al costado de Apartments</td></tr></table>
      <p><strong>Ojo con "Cat":</strong> en Mirage, "Cat" es Short de B. En Dust II, "Cat" (Catwalk) es Short de A. Mismo nombre, otro mapa.</p>
      <p>Por ejemplo, ves a uno asomado por la ventana del negocio que da a B. La call es "uno Market Window", y tu equipo sabe que un CT está rotando por el Mercado.</p>` },
    { titulo: "Mid, Ventana y rotaciones", html: `
      <p class="idea">Mid conecta todo. El duelo más famoso es entre <strong>Top Mid</strong> (los T) y <strong>Window</strong> (la ventana de los CT, con AWP).</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/mirage/" target="_blank" rel="noopener">Abrí el mapa de Mirage con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Top Mid (Top of Mid)</strong><br><small>Arriba de Mid</small></td><td>Entrada de los T al pasillo de Mid</td></tr><tr><td><strong>Boxes</strong><br><small>Cajas</small></td><td>Cajas en Top Mid, para el duelo con Window o para boostear</td></tr><tr><td><strong>Mid</strong><br><small>Medio</small></td><td>Pasillo central entre Top Mid y Window</td></tr><tr><td><strong>Window (Sniper's Nest)</strong><br><small>Ventana / nido del francotirador</small></td><td>Cuarto elevado de los CT que mira Mid; lugar clave para la AWP</td></tr><tr><td><strong>Connector</strong><br><small>Conector</small></td><td>Pasillo que une Mid con Jungle y A</td></tr><tr><td><strong>Chair</strong><br><small>Silla</small></td><td>Rincón en la punta de Connector que da a Mid</td></tr><tr><td><strong>Underpass</strong><br><small>Pasaje bajo</small></td><td>Túnel debajo de Mid, desde el lado de Apartments</td></tr><tr><td><strong>Ladder Room</strong><br><small>Cuarto de la escalera</small></td><td>Cuarto con escalera que une Mid con el lado de B</td></tr><tr><td><strong>Vent</strong><br><small>Ventilación</small></td><td>Paso entre Ladder Room y Short</td></tr><tr><td><strong>T Spawn / CT Spawn</strong><br><small>Spawn T / Spawn CT</small></td><td>Donde aparecen los T y los CT</td></tr></table>
      <pre><code>Rotaciones típicas de los CT:
A → B: Jungle → Connector → Short, o CT Spawn → Market → B
B → A: Market → Kitchen → Window → Connector → Jungle</code></pre>
      <p><strong>Tomar Mid</strong> les da a los T el control de Connector y Short: pueden dividir el ataque entre los dos sitios (un <strong>split</strong>).</p>
      <p>Por ejemplo, el AWP de los CT está en Window y no deja cruzar Mid. Los T tiran una smoke a Window y recién ahí cruzan a Connector.</p>` },
  ],
  practica: [
    "Abrí Mirage en una partida privada, recorré A diciendo en voz alta cada callout de la tabla y anotá cuántos recordaste sin mirar.",
    "Repetí el recorrido en B y en Mid, y anotá los 3 callouts que más te costaron.",
    "Mirá el radar interactivo de Mirage en csdb.gg y anotá 3 callouts de la comunidad que no conocías.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Mirage con todos los callouts", url: "https://csdb.gg/maps/mirage/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "Si entrás por Ramp en Mirage y te matan desde la escalera del fondo de A, ¿qué cantás?", opciones: ["\"Uno Palace\"","\"Uno Jungle\"","\"Uno Stairs\"","\"Uno al fondo arriba\""], correcta: 2, explicacion: "Stairs es la escalera del fondo de A. Palace tienta porque también está arriba, pero es el edificio de los T." },
    { q: "Ves a un CT en el cuarto que controla la salida de Connector hacia A. ¿Dónde está?", opciones: ["Jungle","Window","Market","Ticket Booth"], correcta: 0, explicacion: "Jungle está entre Connector y A. Window tienta porque también es de los CT, pero mira a Mid." },
    { q: "Si un T sale por las columnas del edificio elevado sobre A, ¿qué call das?", opciones: ["\"Uno Ramp\"","\"Uno Firebox\"","\"Uno Stairs\"","\"Uno Palace\""], correcta: 3, explicacion: "Palace es el edificio de arriba; sus salidas son las Pillars. Ramp tienta, pero es la otra entrada, la rampa." },
    { q: "Si plantaste en el lugar habitual de A, junto a las cajas de adelante, ¿cómo se llama?", opciones: ["Triple Box","A Default","Ninja","Shadows"], correcta: 1, explicacion: "El default es el lugar común para plantar. Triple Box tienta, pero está al fondo." },
    { q: "Si un CT se esconde en la cabina de A cerca de CT, ¿qué cantás?", opciones: ["\"Uno Truck\"","\"Uno Van\"","\"Uno Ticket Booth\"","\"Uno Kitchen\""], correcta: 2, explicacion: "Ticket Booth es la boletería de A. Truck tienta, pero está en B." },
    { q: "Si escuchás pasos en el pasillo largo de departamentos que va de T spawn a B, ¿dónde están?", opciones: ["B Apartments (Apps)","Underpass","Connector","Palace Alley"], correcta: 0, explicacion: "Los Apartments llevan a B. Underpass tienta porque también es un pasillo, pero va por debajo de Mid." },
    { q: "Ves a uno asomado por la ventana del negocio que da a B. ¿Qué call das?", opciones: ["\"Uno Window\"","\"Uno Bench\"","\"Uno Ladder Room\"","\"Uno Market Window\""], correcta: 3, explicacion: "Market Window es la ventana del Mercado. \"Window\" a secas tienta, pero es la ventana de Mid." },
    { q: "En Mirage, ¿qué es \"Cat\"?", opciones: ["Short de A, como en Dust II","Short de B: la pasarela desde Mid hacia B","Un lugar de T spawn","La ventana de Mid"], correcta: 1, explicacion: "En Mirage, Cat es Short de B. Short de A tienta porque así es en Dust II." },
    { q: "Si un CT con AWP te cubre Mid desde el cuarto elevado de su lado, ¿dónde está?", opciones: ["Top Mid","Chair","Window","Bench"], correcta: 2, explicacion: "Window es el nido del francotirador. Top Mid tienta, pero es la entrada de los T." },
    { q: "Querés cruzar del lado de Apartments hacia Mid por abajo. ¿Por dónde vas?", opciones: ["Underpass","Connector","Palace","Short"], correcta: 0, explicacion: "Underpass es el túnel bajo Mid. Connector tienta, pero une Mid con Jungle." },
    { q: "Si un CT rota de B a A por adentro, ¿por dónde suele pasar?", opciones: ["Por Apartments","Por Palace","Por T spawn","Market, Kitchen, Window, Connector y Jungle"], correcta: 3, explicacion: "Es el camino interno de los CT. Apartments tienta, pero es del lado de los T." },
    { q: "Si los T toman Mid, ¿qué ganan?", opciones: ["Nada","Control de Connector y Short para dividir el ataque","La bomba plantada","Ver todo el mapa"], correcta: 1, explicacion: "Mid abre los dos sitios. \"Nada\" tienta si solo pensás en matar, pero es posición." },
  ],
},
{
  id: "inferno",
  icono: "🔥",
  titulo: "Inferno",
  nivel: "Intermedio",
  objetivos: [
    "Nombrar los callouts de B: Banana, Car, Sandbags, Logs, New Box, Fountain, Coffins, Construction y más",
    "Nombrar los callouts de A: Apartments, Balcony, Short, Long, Pit, Library y Arch",
    "Nombrar Mid y las rutas de los CT: Second Mid, Top Mid, Speedway y CT Spawn",
  ],
  lecciones: [
    { titulo: "B: Banana y el sitio", video: {"id":"dqcx7dHS1Xg","t":"Inferno: callouts y posiciones básicos · Pitu Herranz (8:48)"}, html: `
      <p class="idea"><strong>Banana</strong> es el pasillo curvo que lleva a B, y es la pelea más disputada del mapa. Quien controla Banana controla B.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/inferno/" target="_blank" rel="noopener">Abrí el mapa de Inferno con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Banana</strong><br><small>Banana (igual)</small></td><td>Pasillo curvo desde el lado T hasta B</td></tr><tr><td><strong>Logs</strong><br><small>Troncos</small></td><td>Pila de troncos abajo de Banana, del lado T</td></tr><tr><td><strong>Sandbags</strong><br><small>Bolsas de arena</small></td><td>Bolsas de arena en la mitad de Banana</td></tr><tr><td><strong>Car</strong><br><small>Auto</small></td><td>Auto quemado arriba de Banana</td></tr><tr><td><strong>B Site</strong><br><small>Sitio B</small></td><td>Patio al final de Banana</td></tr><tr><td><strong>New Box</strong><br><small>Caja nueva</small></td><td>Caja al frente de B: plante y cobertura</td></tr><tr><td><strong>Fountain</strong><br><small>Fuente</small></td><td>Fuente en el medio de B</td></tr><tr><td><strong>Dark</strong><br><small>Oscuro</small></td><td>Esquina oscura del fondo a la izquierda de B</td></tr><tr><td><strong>Coffins</strong><br><small>Ataúdes</small></td><td>Ataúdes de piedra al fondo de B, hacia CT</td></tr><tr><td><strong>1st / 2nd</strong><br><small>Primero / segundo</small></td><td>Huecos entre las cajas de B al entrar por Banana</td></tr><tr><td><strong>Quad</strong><br><small>Cuádruple</small></td><td>Pila de cajas al fondo de B</td></tr><tr><td><strong>Ruins</strong><br><small>Ruinas</small></td><td>Piedras en ruinas del lado CT de B</td></tr><tr><td><strong>Construction</strong><br><small>Construcción</small></td><td>Edificio sin terminar al lado de B: punto para el retake</td></tr><tr><td><strong>Garden / Tree</strong><br><small>Jardín / Árbol</small></td><td>Pasto entre Construction y B / rincón del árbol</td></tr><tr><td><strong>Grill</strong><br><small>Parrilla</small></td><td>Zona con rejas justo afuera de B hacia CT</td></tr></table>
      <p>Por ejemplo, desde B ves a un T asomado detrás del auto quemado de arriba de Banana. La call es "uno Car", y tu compañero sabe exactamente a qué distancia está.</p>` },
    { titulo: "A: Apartamentos, Long y Pit", html: `
      <p class="idea">A de Inferno tiene tres entradas de los T: <strong>Apartments</strong> (y su <strong>Balcony</strong>), <strong>Short</strong> y <strong>Long</strong>. Los CT la defienden desde <strong>Pit</strong>, <strong>Library</strong> y <strong>Arch</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/inferno/" target="_blank" rel="noopener">Abrí el mapa de Inferno con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Apartments (T Apartments)</strong><br><small>Apartamentos</small></td><td>Edificio que los T suben hacia Balcony</td></tr><tr><td><strong>Living Room / Bridge</strong><br><small>Living / Puente</small></td><td>Cuarto de arriba en Apartments / pasaje interior entre cuartos</td></tr><tr><td><strong>Balcony</strong><br><small>Balcón</small></td><td>Balcón de los apartamentos que mira A</td></tr><tr><td><strong>A Short</strong><br><small>Corto de A</small></td><td>Camino desde Top Mid, pasando Truck, hasta A</td></tr><tr><td><strong>Truck</strong><br><small>Camión</small></td><td>Camión en Short, sirve para subir a Balcony</td></tr><tr><td><strong>Patio</strong><br><small>Patio</small></td><td>Parte techada de Short que mira a Top Mid</td></tr><tr><td><strong>A Long</strong><br><small>Largo de A</small></td><td>Pasillo desde Mid, pasando Arch y Library, hasta A</td></tr><tr><td><strong>Long Corner</strong><br><small>Esquina de Long</small></td><td>Esquina en Long frente a Library</td></tr><tr><td><strong>Pit</strong><br><small>Pozo</small></td><td>Zona hundida en el borde de A: ancla clásica de los CT</td></tr><tr><td><strong>Dosia</strong><br><small>Dosia (igual)</small></td><td>El rincón más profundo de Pit</td></tr><tr><td><strong>Graveyard / Cemetery</strong><br><small>Cementerio</small></td><td>Zona cercada detrás de A, hacia Library</td></tr><tr><td><strong>Library</strong><br><small>Biblioteca</small></td><td>Cuarto que mira Long: fuego cruzado de los CT</td></tr><tr><td><strong>Kitchen</strong><br><small>Cocina</small></td><td>Cuarto al lado de Library, en la rotación CT a A</td></tr><tr><td><strong>Arch</strong><br><small>Arco</small></td><td>Arco entre Long y Speedway o CT spawn</td></tr><tr><td><strong>Close Left</strong><br><small>Cerca a la izquierda</small></td><td>Caja a la izquierda al entrar a A desde Short o Truck</td></tr></table>
      <p>Por ejemplo, entrás a A y te disparan desde la zona hundida del borde del sitio. Es "uno Pit". Si está en lo más profundo, "uno Dosia".</p>` },
    { titulo: "Mid y las rutas de los CT", html: `
      <p class="idea">El Mid de Inferno tiene dos carriles para los T: <strong>Mid</strong> y <strong>Second Mid</strong>. Los CT rotan por <strong>Arch</strong>, <strong>Speedway</strong> y <strong>CT Spawn</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/inferno/" target="_blank" rel="noopener">Abrí el mapa de Inferno con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Spawn / T Ramp</strong><br><small>Spawn T / Rampa T</small></td><td>Spawn de los T abajo del mapa / rampa que sube a Mid</td></tr><tr><td><strong>Lower Mid / Bottom Mid</strong><br><small>Mid bajo</small></td><td>Parte de abajo de Mid, del lado T</td></tr><tr><td><strong>Mid</strong><br><small>Medio</small></td><td>Zona abierta entre T Ramp y Top Mid</td></tr><tr><td><strong>Top Mid</strong><br><small>Arriba de Mid</small></td><td>Punta de Mid del lado CT, hacia Arch</td></tr><tr><td><strong>Second Mid</strong><br><small>Segundo Mid</small></td><td>Carril paralelo entre T Apartments y Mid</td></tr><tr><td><strong>Underpass</strong><br><small>Pasaje bajo</small></td><td>Túnel que une Mid con Second Mid</td></tr><tr><td><strong>Ledge</strong><br><small>Cornisa</small></td><td>Saliente detrás de T Ramp para mirar Top Mid</td></tr><tr><td><strong>Bench</strong><br><small>Banco</small></td><td>Banco al costado de Mid: referencia para el lurk</td></tr><tr><td><strong>CT Apartments / Boiler</strong><br><small>Apartamentos CT / Caldera</small></td><td>Cuartos CT sobre Second Mid / cuarto que los une con Top Mid</td></tr><tr><td><strong>Speedway</strong><br><small>Speedway (igual)</small></td><td>Paso desde Arch hacia B y Construction</td></tr><tr><td><strong>Well</strong><br><small>Pozo de agua</small></td><td>Zona del pozo cerca de CT spawn, camino a B</td></tr><tr><td><strong>CT Spawn</strong><br><small>Spawn CT</small></td><td>Entre los dos sitios: centro de las rotaciones</td></tr></table>
      <p><strong>Dos "Apartments":</strong> los de los T (los que llevan a Balcony) y los CT Apartments (sobre Second Mid). En la call, aclará cuál.</p>
      <p><strong>Para rotar,</strong> CT Spawn está en el medio: un CT llega rápido a los dos sitios, pero tiene que cruzar zonas abiertas.</p>
      <p>Por ejemplo, un T aparece en el carril paralelo que sale de los apartamentos de los T. La call es "uno Second Mid".</p>` },
  ],
  practica: [
    "Abrí Inferno en una partida privada, caminá Banana de punta a punta diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Hacé lo mismo en A, entrando por Apartments, por Short y por Long, y anotá los 3 que más te costaron.",
    "Mirá el radar interactivo de Inferno en csdb.gg y anotá qué diferencia hay entre Apartments y CT Apartments.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Inferno con todos los callouts", url: "https://csdb.gg/maps/inferno/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "Desde B de Inferno ves a un T detrás del auto quemado de arriba de Banana. ¿Qué cantás?", opciones: ["\"Uno Logs\"","\"Uno Sandbags\"","\"Uno Car\"","\"Uno Fountain\""], correcta: 2, explicacion: "Car está arriba de Banana. Logs tienta, pero está abajo, del lado T." },
    { q: "Ves a uno escondido en la pila de troncos de abajo de Banana. ¿Dónde está?", opciones: ["Logs","Car","Quad","Coffins"], correcta: 0, explicacion: "Los troncos están abajo de Banana. Car tienta, pero está arriba." },
    { q: "Si querés hacer un retake de B desde el edificio sin terminar de al lado, ¿desde dónde salís?", opciones: ["Apartments","Library","Second Mid","Construction"], correcta: 3, explicacion: "Construction es el punto de retake de B. Library tienta, pero está en A." },
    { q: "Si hay un CT en la esquina oscura del fondo a la izquierda de B, ¿qué call das?", opciones: ["\"Uno New Box\"","\"Uno Dark\"","\"Uno Car\"","\"Uno Pit\""], correcta: 1, explicacion: "Dark es esa esquina. Pit tienta porque es un escondite clásico, pero está en A." },
    { q: "Si te disparan desde la zona hundida del borde de A, el ancla clásica de los CT, ¿dónde está?", opciones: ["Balcony","Arch","Pit","Patio"], correcta: 2, explicacion: "Pit es el pozo de A. Balcony tienta porque mira A, pero es de los T y está arriba." },
    { q: "Ves a un CT en lo más profundo de Pit. ¿Cómo lo precisás?", opciones: ["\"Uno Dosia\"","\"Uno Graveyard\"","\"Uno Long Corner\"","\"Uno Bench\""], correcta: 0, explicacion: "Dosia es el rincón más profundo de Pit. Graveyard tienta porque está detrás de A, pero es otra zona." },
    { q: "Si los T suben por los apartamentos y salen al balcón que mira A, ¿qué call das?", opciones: ["\"Library\"","\"Speedway\"","\"Coffins\"","\"Balcony\""], correcta: 3, explicacion: "Balcony es el balcón de los apartamentos. Library tienta, pero es de los CT y mira Long." },
    { q: "Si te cubren A Long desde el cuarto de los CT que mira ese pasillo, ¿dónde están?", opciones: ["Kitchen","Library","Truck","Logs"], correcta: 1, explicacion: "Library mira Long. Kitchen tienta porque está al lado, pero es el paso de la rotación." },
    { q: "Ves a un T que entra a A por Short y sube por el camión. ¿Qué cantás?", opciones: ["\"Uno Car\"","\"Uno Van\"","\"Uno Truck, Short\"","\"Uno Pit\""], correcta: 2, explicacion: "En Inferno, el camión de Short es Truck. Car tienta, pero es el auto de Banana." },
    { q: "Si un T aparece en el carril paralelo a Mid que sale de los apartamentos de los T, ¿dónde está?", opciones: ["Second Mid","Top Mid","Speedway","Arch"], correcta: 0, explicacion: "Second Mid es ese carril. Top Mid tienta, pero es la punta de Mid del lado CT." },
    { q: "Si un CT rota desde Arch hacia B y Construction, ¿por dónde va?", opciones: ["Banana","Apartments","Underpass","Speedway"], correcta: 3, explicacion: "Speedway lleva de Arch a B. Banana tienta porque llega a B, pero es del lado T." },
    { q: "Tu compañero dice \"uno Apartments\" y no sabés cuáles. ¿Qué le preguntás?", opciones: ["Nada, son los mismos","Si son los de los T (hacia Balcony) o los CT Apartments (sobre Second Mid)","Si es en Mirage","Si es Banana"], correcta: 1, explicacion: "Inferno tiene dos. \"Son los mismos\" tienta por el nombre, pero están en lugares distintos." },
  ],
},
{
  id: "dust2",
  icono: "🌵",
  titulo: "Dust II",
  nivel: "Intermedio",
  objetivos: [
    "Nombrar los callouts de A: Long Doors, A Long, Pit, Car, Goose, Short (Catwalk) y Ramp",
    "Nombrar los callouts de B: Upper y Lower Tunnels, Car, Closet, Back Plat, Window y B Doors",
    "Nombrar Mid y las zonas CT: Suicide, Xbox, Mid Doors, CT Mid y CT Spawn",
  ],
  lecciones: [
    { titulo: "A: Long, Short y el sitio", video: {"id":"sYwJLWuvowY","t":"Callouts de Dust 2 en español · Fer NS (3:05)"}, html: `
      <p class="idea">A de Dust II se ataca por <strong>Long</strong> (lejos, con las <strong>Long Doors</strong>) o por <strong>Short</strong> (la pasarela, también llamada <strong>Catwalk</strong> o "Cat").</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/dust2/" target="_blank" rel="noopener">Abrí el mapa de Dust II con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Outside Long</strong><br><small>Afuera de Long</small></td><td>Zona abierta entre T spawn y las puertas de Long</td></tr><tr><td><strong>Long Doors</strong><br><small>Puertas de Long</small></td><td>Puertas azules dobles: donde empiezan las peleas de Long</td></tr><tr><td><strong>Blue</strong><br><small>Azul</small></td><td>Contenedor azul frente a Long Doors</td></tr><tr><td><strong>Long Corner</strong><br><small>Esquina de Long</small></td><td>Esquina adentro de Long Doors</td></tr><tr><td><strong>A Long</strong><br><small>Largo de A</small></td><td>Pasillo largo hasta A: duelos de AWP</td></tr><tr><td><strong>Pit</strong><br><small>Pozo</small></td><td>Zona hundida al final de Long: fuerte para CT y para post-plant</td></tr><tr><td><strong>Side Pit / Pit Plat</strong><br><small>Costado del pozo / plataforma</small></td><td>Zonas al lado de Pit</td></tr><tr><td><strong>A Car</strong><br><small>Auto de A</small></td><td>Auto en Long cerca del sitio</td></tr><tr><td><strong>A Cross</strong><br><small>Cruce de A</small></td><td>Zona abierta entre Long y A que todos cruzan</td></tr><tr><td><strong>A Ramp</strong><br><small>Rampa de A</small></td><td>Rampa que sube desde A Cross al sitio</td></tr><tr><td><strong>A Site / A Default</strong><br><small>Sitio A / Default</small></td><td>Plataforma de A / lugar común para plantar</td></tr><tr><td><strong>Goose</strong><br><small>Goose (igual)</small></td><td>Rincón cerrado detrás de la plataforma de A</td></tr><tr><td><strong>Barrels</strong><br><small>Barriles</small></td><td>Barriles detrás de A, junto a Goose</td></tr><tr><td><strong>Elevator</strong><br><small>Ascensor</small></td><td>Esquina de la plataforma más cerca de CT spawn</td></tr><tr><td><strong>A Short (Catwalk)</strong><br><small>Corto / Pasarela</small></td><td>Pasarela elevada desde Mid hacia A</td></tr><tr><td><strong>Short Stairs</strong><br><small>Escaleras de Short</small></td><td>Escalera arriba de Short que sube al nivel de A</td></tr><tr><td><strong>A Ninja</strong><br><small>Ninja de A</small></td><td>Escondite detrás de cajas cerca de Short</td></tr></table>
      <p>Por ejemplo, un CT te espera en la zona hundida al final de Long. La call es "uno Pit". Si está en la plataforma de al lado, "uno Pit Plat".</p>` },
    { titulo: "B: Túneles y el sitio", html: `
      <p class="idea">A B de Dust II los T llegan por los <strong>Tunnels</strong> (túneles): <strong>Upper</strong> (arriba) es la entrada directa, y <strong>Lower</strong> (abajo) conecta con Mid.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/dust2/" target="_blank" rel="noopener">Abrí el mapa de Dust II con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Ramp</strong><br><small>Rampa T</small></td><td>Rampa desde T spawn hacia los túneles</td></tr><tr><td><strong>Outside Tunnels</strong><br><small>Afuera de túneles</small></td><td>Plaza entre T Ramp y la entrada a Upper Tunnels</td></tr><tr><td><strong>Upper Tunnels</strong><br><small>Túneles de arriba</small></td><td>Túnel principal hacia B: todo rush a B pasa por acá</td></tr><tr><td><strong>Lower Tunnels</strong><br><small>Túneles de abajo</small></td><td>Túnel que une Outside Tunnels con Mid</td></tr><tr><td><strong>Tunnel Stairs</strong><br><small>Escaleras de túneles</small></td><td>Escalera que une Upper y Lower</td></tr><tr><td><strong>B Site / B Default</strong><br><small>Sitio B / Default</small></td><td>Sitio cerrado de B / lugar común para plantar</td></tr><tr><td><strong>B Car</strong><br><small>Auto de B</small></td><td>Auto a la derecha de la salida del túnel</td></tr><tr><td><strong>Close</strong><br><small>Cerca</small></td><td>Esquina justo al salir del túnel</td></tr><tr><td><strong>B Closet</strong><br><small>Placard de B</small></td><td>Hueco junto al auto que esconde a un CT</td></tr><tr><td><strong>B Plat / Back Plat</strong><br><small>Plataforma / plataforma del fondo</small></td><td>Plataforma elevada de B / su punta más profunda</td></tr><tr><td><strong>Big Box</strong><br><small>Caja grande</small></td><td>Caja grande en B para retake y post-plant</td></tr><tr><td><strong>Double Stack</strong><br><small>Doble pila</small></td><td>Dos cajas apiladas en el medio del sitio</td></tr><tr><td><strong>Fence</strong><br><small>Reja</small></td><td>Pared con reja al fondo de B</td></tr><tr><td><strong>B Window</strong><br><small>Ventana de B</small></td><td>Agujero en la pared que mira B desde CT Mid</td></tr><tr><td><strong>B Doors</strong><br><small>Puertas de B</small></td><td>Puertas dobles entre CT Mid y B: ruta de rotación CT</td></tr><tr><td><strong>Scaffolding</strong><br><small>Andamio</small></td><td>Materiales de obra afuera de B cerca de Window</td></tr></table>
      <p>Por ejemplo, un CT espera en la esquina justo al salir del túnel. Es "uno Close". Si está escondido junto al auto, "uno Closet".</p>` },
    { titulo: "Mid, Puertas y CT", html: `
      <p class="idea">El Mid de Dust II es un pasillo largo con las <strong>Mid Doors</strong> en el medio: es la primera pelea de AWP de cada ronda.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/dust2/" target="_blank" rel="noopener">Abrí el mapa de Dust II con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Spawn</strong><br><small>Spawn T</small></td><td>Spawn con salidas a Long, Mid y T Ramp</td></tr><tr><td><strong>Suicide</strong><br><small>Suicidio</small></td><td>Bajada expuesta desde T spawn a Mid: el famoso peek a suerte</td></tr><tr><td><strong>Top Mid (Top of Mid)</strong><br><small>Arriba de Mid</small></td><td>Punta de Mid del lado T, debajo de Suicide</td></tr><tr><td><strong>Mid</strong><br><small>Medio</small></td><td>Pasillo central que une T spawn con los dos sitios</td></tr><tr><td><strong>Xbox</strong><br><small>Xbox (igual)</small></td><td>Caja en Mid junto a Catwalk; sirve para subir a Short</td></tr><tr><td><strong>Palm</strong><br><small>Palmera</small></td><td>Mástil arriba de Mid junto a Catwalk: punto de referencia</td></tr><tr><td><strong>Mid Doors</strong><br><small>Puertas de Mid</small></td><td>Puertas dobles a mitad de Mid: duelo de AWP del inicio</td></tr><tr><td><strong>Close Mid Doors</strong><br><small>Cerca de Puertas de Mid</small></td><td>Esquina del lado CT de Mid Doors</td></tr><tr><td><strong>CT Mid</strong><br><small>Mid CT</small></td><td>Zona entre Mid Doors y B Doors, hacia CT spawn</td></tr><tr><td><strong>CT Spawn</strong><br><small>Spawn CT</small></td><td>Spawn de los CT detrás de A</td></tr><tr><td><strong>Short Boost</strong><br><small>Boost de Short</small></td><td>Contenedores afuera de CT spawn para subir</td></tr></table>
      <pre><code>Rotaciones típicas de los CT:
A → B: CT Spawn → CT Mid → B Doors (o B Window)
B → A: B Doors → CT Mid → CT Spawn → A</code></pre>
      <p><strong>Ojo con "Cat":</strong> en Dust II es Short de A. En Mirage, Cat es Short de B.</p>
      <p>Por ejemplo, al empezar la ronda un CT con AWP mira por el hueco de las puertas del medio. Los T cruzan con una smoke en "Mid Doors" para no regalarle el tiro.</p>` },
  ],
  practica: [
    "Abrí Dust II en una partida privada, recorré Long y Short hasta A diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Recorré los túneles hasta B y anotá la diferencia entre Upper y Lower Tunnels con tus palabras.",
    "Mirá el radar interactivo de Dust II en csdb.gg y anotá dónde están Goose, Closet y Xbox.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Dust2 con todos los callouts", url: "https://csdb.gg/maps/dust2/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "Si un CT te espera en la zona hundida al final de Long en Dust II, ¿qué cantás?", opciones: ["\"Uno Goose\"","\"Uno Blue\"","\"Uno Pit\"","\"Uno Closet\""], correcta: 2, explicacion: "Pit es el pozo al final de Long. Goose tienta, pero está detrás de la plataforma de A." },
    { q: "Si las peleas de Long empiezan en unas puertas azules dobles, ¿cómo se llaman esas puertas?", opciones: ["Long Doors","Mid Doors","B Doors","Blue"], correcta: 0, explicacion: "Long Doors son las de Long. Blue tienta por el color, pero es el contenedor de enfrente." },
    { q: "Si un CT se esconde en el rincón cerrado detrás de la plataforma de A, ¿dónde está?", opciones: ["Pit","Elevator","Xbox","Goose"], correcta: 3, explicacion: "Goose es ese rincón. Elevator tienta porque está en la plataforma, pero es la esquina hacia CT." },
    { q: "En Dust II, ¿qué es \"Cat\" (Catwalk)?", opciones: ["Short de B, como en Mirage","Short de A: la pasarela elevada desde Mid hacia A","Los túneles","El auto de B"], correcta: 1, explicacion: "En Dust II, Cat va a A. Short de B tienta porque así es en Mirage." },
    { q: "Si atacás B por el túnel principal, ¿por cuál pasás?", opciones: ["Lower Tunnels","Long Doors","Upper Tunnels","Mid Doors"], correcta: 2, explicacion: "Upper es la entrada directa a B. Lower tienta, pero une con Mid." },
    { q: "Si un CT espera en la esquina justo al salir del túnel en B, ¿qué call das?", opciones: ["\"Uno Close\"","\"Uno Back Plat\"","\"Uno Fence\"","\"Uno Pit\""], correcta: 0, explicacion: "Close es la esquina de la salida. Back Plat tienta, pero está al fondo." },
    { q: "Si un CT está escondido en el hueco junto al auto de B, ¿cómo lo precisás?", opciones: ["\"Uno Goose\"","\"Uno Suicide\"","\"Uno Long Corner\"","\"Uno Closet\""], correcta: 3, explicacion: "Closet es el hueco del auto de B. Goose tienta porque también es un escondite, pero está en A." },
    { q: "Si te disparan desde el agujero en la pared que mira B desde CT Mid, ¿dónde está?", opciones: ["Market Window","B Window","Window de Mirage","Mid Doors"], correcta: 1, explicacion: "B Window es el agujero de Dust II. Market Window tienta, pero es de Mirage." },
    { q: "Si un T baja expuesto desde T spawn a Mid al empezar la ronda, ¿cómo se llama ese lugar?", opciones: ["Palm","Xbox","Suicide","CT Mid"], correcta: 2, explicacion: "Suicide es esa bajada peligrosa. Xbox tienta porque está en Mid, pero es una caja." },
    { q: "Si un T sube a Short usando la caja de Mid junto a Catwalk, ¿qué caja es?", opciones: ["Xbox","Big Box","Double Stack","Blue"], correcta: 0, explicacion: "Xbox es la caja de Mid. Big Box tienta, pero está en B." },
    { q: "Si un CT rota de A a B por adentro, ¿por dónde pasa?", opciones: ["Long Doors","Upper Tunnels","Suicide","CT Mid y B Doors"], correcta: 3, explicacion: "Es la rotación de los CT. Upper Tunnels tienta porque llega a B, pero es del lado T." },
    { q: "Si al empezar la ronda hay un AWP mirando por el hueco de las puertas del medio, ¿dónde tirás la smoke?", opciones: ["En Long Doors","En Mid Doors","En B Doors","En Pit"], correcta: 1, explicacion: "Así cruzan sin darle el tiro. Long Doors tienta porque también son puertas, pero son de A." },
  ],
},
{
  id: "nuke",
  icono: "☢️",
  titulo: "Nuke",
  nivel: "Avanzado",
  objetivos: [
    "Explicar por qué Nuke es un mapa de dos pisos: A arriba y B abajo",
    "Nombrar los callouts de A: Hut, Heaven, Hell, Rafters, Squeaky, Mustang y Main",
    "Nombrar los callouts de B y del exterior: Ramp, Secret, Vents, Decon, Outside, Garage y Silo",
  ],
  lecciones: [
    { titulo: "Un mapa de dos pisos", video: {"id":"_R00VoaWzvw","t":"Callouts de Nuke en español · Fer NS (3:06)"}, html: `
      <p class="idea">Nuke es distinto: <strong>A está arriba y B está abajo</strong>, casi una encima de la otra. Por eso un CT puede rotar entre sitios por adentro en segundos, y por eso escuchar es clave.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/nuke/" target="_blank" rel="noopener">Abrí el mapa de Nuke con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Spawn</strong><br><small>Spawn T</small></td><td>Spawn en la esquina del patio, con salida a Lobby o Outside</td></tr><tr><td><strong>Lobby</strong><br><small>Lobby / hall</small></td><td>Primer cuarto interior desde T spawn</td></tr><tr><td><strong>Radio / Vending</strong><br><small>Radio / máquinas expendedoras</small></td><td>Cuarto con máquinas entre Lobby y Trophy</td></tr><tr><td><strong>Trophy</strong><br><small>Trofeos</small></td><td>Cuarto de la vitrina entre Radio y Control</td></tr><tr><td><strong>Control</strong><br><small>Control</small></td><td>Sala que une Trophy con la parte de arriba de Ramp</td></tr><tr><td><strong>Roof / T Roof</strong><br><small>Techo / techo T</small></td><td>Techo arriba de Lobby: vista de los T sobre el patio</td></tr><tr><td><strong>Silo</strong><br><small>Silo</small></td><td>Silo alto del lado T con vista de Outside</td></tr><tr><td><strong>Outside</strong><br><small>Afuera</small></td><td>Patio enorme al costado del edificio</td></tr><tr><td><strong>T Red / CT Red</strong><br><small>Rojo T / Rojo CT</small></td><td>Contenedores rojos del patio, de cada lado</td></tr><tr><td><strong>Garage</strong><br><small>Garaje</small></td><td>Depósito del lado CT que controla el patio y Secret</td></tr><tr><td><strong>Secret</strong><br><small>Secreto</small></td><td>Escalera desde Outside que baja a los túneles detrás de B</td></tr><tr><td><strong>Vents</strong><br><small>Ventilación</small></td><td>Ductos que unen A, Secret y B</td></tr></table>
      <pre><code>Corte del edificio (de costado):
  ┌──────── A (arriba): Hut, Heaven, Rafters ────────┐
  │            Vents (unen los pisos)                │
  └──────── B (abajo): Ramp, Decon, Window ──────────┘
  Outside: el patio afuera del edificio</code></pre>
      <p>Por ejemplo, escuchás pasos que suenan "arriba" mientras defendés B. Probablemente son T en A: en Nuke, mirá si el sonido viene del techo o del piso antes de rotar.</p>` },
    { titulo: "A (arriba): Hut, Heaven y Squeaky", html: `
      <p class="idea">A es la sala grande del reactor. Los T entran por <strong>Hut</strong> (la casilla de metal), <strong>Squeaky</strong> (la puerta que hace ruido) o <strong>Main</strong>. Los CT la dominan desde <strong>Heaven</strong>, arriba.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/nuke/" target="_blank" rel="noopener">Abrí el mapa de Nuke con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>A Site</strong><br><small>Sitio A</small></td><td>Sitio de arriba, dentro de la sala del reactor</td></tr><tr><td><strong>Hut</strong><br><small>Casilla</small></td><td>Casilla de metal que une Lobby con A</td></tr><tr><td><strong>Hut Roof</strong><br><small>Techo de la casilla</small></td><td>Techo de Hut, arriba de su entrada</td></tr><tr><td><strong>Squeaky</strong><br><small>La puerta que chilla</small></td><td>Cuarto con la puerta ruidosa que da a A</td></tr><tr><td><strong>Main</strong><br><small>Principal</small></td><td>Puerta ancha que une A con Outside</td></tr><tr><td><strong>Sandbags</strong><br><small>Bolsas de arena</small></td><td>Bolsas entre Lobby y Hut: cobertura para entrar a A</td></tr><tr><td><strong>Tetris</strong><br><small>Tetris (igual)</small></td><td>Cajas escalonadas frente a Hut</td></tr><tr><td><strong>Heaven</strong><br><small>Cielo</small></td><td>Pasarela elevada de los CT que mira A</td></tr><tr><td><strong>Hell</strong><br><small>Infierno</small></td><td>Zona debajo de Heaven, hacia Vents</td></tr><tr><td><strong>Catwalk</strong><br><small>Pasarela</small></td><td>Pasarela elevada de los CT sobre A, junto a Heaven</td></tr><tr><td><strong>Rafters</strong><br><small>Vigas</small></td><td>Pasarela elevada contra la pared del fondo de A</td></tr><tr><td><strong>Mustang</strong><br><small>Mustang (igual)</small></td><td>Rincón elevado junto a Rafters, ángulo raro sobre A</td></tr><tr><td><strong>Crane</strong><br><small>Grúa</small></td><td>Grúa sobre A, entre Hut y Rafters</td></tr><tr><td><strong>CT Spawn</strong><br><small>Spawn CT</small></td><td>Al lado de la entrada a Heaven</td></tr></table>
      <p><strong>Heaven y Hell:</strong> Heaven es arriba; Hell es la zona debajo. Confundirlos en una call puede hacer que tu equipo apunte a la altura equivocada.</p>
      <p>Por ejemplo, un CT con AWP te mata desde la pasarela alta que mira A. Tu call es "uno Heaven", y tu equipo tira una smoke o una flash ahí antes de entrar.</p>` },
    { titulo: "B (abajo): Ramp, Secret y Decon", html: `
      <p class="idea">B está en el sótano. Los T llegan por <strong>Ramp</strong> (la rampa larga), por <strong>Secret</strong> (desde afuera) o cayendo por <strong>Vents</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/nuke/" target="_blank" rel="noopener">Abrí el mapa de Nuke con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Ramp</strong><br><small>Rampa</small></td><td>Cuarto largo que baja hacia B: la ruta interior principal</td></tr><tr><td><strong>Bottom Ramp</strong><br><small>Abajo de Rampa</small></td><td>Final de Ramp, donde se abre a B</td></tr><tr><td><strong>Headshot</strong><br><small>Headshot (igual)</small></td><td>Caja al fondo de Ramp con ángulo a la cabeza</td></tr><tr><td><strong>Stack / Boost</strong><br><small>Pila / boost</small></td><td>Cajas en Ramp para cubrirse o subirse</td></tr><tr><td><strong>Turn Pike</strong><br><small>Turn Pike (igual)</small></td><td>Cuartito entre Ramp y Hell: atajo de rotación</td></tr><tr><td><strong>B Site</strong><br><small>Sitio B</small></td><td>Sitio de abajo, en el sótano del reactor</td></tr><tr><td><strong>Big Box</strong><br><small>Caja grande</small></td><td>Caja grande sobre la entrada de Ramp</td></tr><tr><td><strong>Dark</strong><br><small>Oscuro</small></td><td>Rincón oscuro junto a la escalera de B</td></tr><tr><td><strong>Doors</strong><br><small>Puertas</small></td><td>Puertas dobles desde Tunnels o Window a B</td></tr><tr><td><strong>Window</strong><br><small>Ventana</small></td><td>Cuarto con ventana que se rompe y mira B</td></tr><tr><td><strong>Observation</strong><br><small>Observación</small></td><td>Cuarto con vidrio que mira B desde atrás</td></tr><tr><td><strong>Decon</strong><br><small>Descontaminación</small></td><td>Cuarto que une los ductos de atrás con B</td></tr><tr><td><strong>Tunnels / Back Vents</strong><br><small>Túneles / ductos de atrás</small></td><td>Pasillos detrás de B que unen Secret, Window y Decon</td></tr></table>
      <p><strong>Escuchar es medio mapa:</strong> los pasos en Vents y en las escaleras se oyen desde el otro piso. Un buen CT de Nuke canta "suenan Vents" antes de ver a nadie.</p>
      <p>Por ejemplo, oís que alguien baja por la escalera que viene de afuera hacia los túneles de B. La call es "suena Secret", y el CT de B se prepara para un ataque por atrás.</p>` },
  ],
  practica: [
    "Abrí Nuke en una partida privada, caminá de A a B por adentro (por Vents o Hell) y anotá cuántos segundos tardás.",
    "Recorré A y B diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "En el radar interactivo de Nuke de csdb.gg, anotá qué une Vents y qué une Secret.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Nuke con todos los callouts", url: "https://csdb.gg/maps/nuke/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "¿Qué tiene de especial Nuke frente a los otros mapas?", opciones: ["Tiene un solo sitio","Los sitios están en extremos opuestos del mapa","A está arriba y B abajo, casi una encima de la otra","No tiene Mid"], correcta: 2, explicacion: "Son dos pisos y la rotación es rápida. \"Extremos opuestos\" tienta porque así es en otros mapas." },
    { q: "Si estás en B y oís pasos que vienen del techo, ¿qué pensás primero?", opciones: ["Que pueden ser T en A, arriba","Que están en B seguro","Que es un error del juego","Que es Outside"], correcta: 0, explicacion: "En Nuke el sonido cruza los pisos. \"Están en B\" tienta, pero vienen de arriba." },
    { q: "Si un T entra a A por la casilla de metal que viene de Lobby, ¿qué cantás?", opciones: ["\"Main\"","\"Secret\"","\"Ramp\"","\"Hut\""], correcta: 3, explicacion: "Hut es la casilla. Main tienta, pero es la puerta ancha desde Outside." },
    { q: "Si escuchás la puerta que chilla y da a A, ¿por dónde entran?", opciones: ["Hut","Squeaky","Decon","Garage"], correcta: 1, explicacion: "Squeaky es la puerta ruidosa. Hut tienta porque es otra entrada a A." },
    { q: "Si un CT con AWP te mata desde la pasarela alta que mira A, ¿dónde está?", opciones: ["Hell","Ramp","Heaven","Silo"], correcta: 2, explicacion: "Heaven es la de arriba. Hell tienta, pero es la zona de abajo de Heaven." },
    { q: "Si confundís Heaven con Hell en una call, ¿qué pasa?", opciones: ["Tu equipo apunta a la altura equivocada","Nada, son lo mismo","Se rompe la radio","El enemigo se rinde"], correcta: 0, explicacion: "Uno es arriba y el otro abajo. \"Son lo mismo\" tienta por estar juntos, pero no." },
    { q: "Ves a un CT en el rincón elevado junto a Rafters, con un ángulo raro sobre A. ¿Qué call das?", opciones: ["\"Uno Tetris\"","\"Uno Dark\"","\"Uno Big Box\"","\"Uno Mustang\""], correcta: 3, explicacion: "Mustang es ese rincón. Tetris tienta porque también está en A, pero son las cajas frente a Hut." },
    { q: "Si los T bajan hacia B por el cuarto largo en pendiente, ¿cómo se llama?", opciones: ["Secret","Ramp","Vents","Lobby"], correcta: 1, explicacion: "Ramp es la ruta interior a B. Secret tienta, pero viene desde afuera." },
    { q: "Si oís a alguien bajar por la escalera que va de Outside a los túneles de B, ¿qué cantás?", opciones: ["\"Suena Squeaky\"","\"Suena Hut\"","\"Suena Secret\"","\"Suena Trophy\""], correcta: 2, explicacion: "Secret baja desde afuera hacia B. Squeaky tienta por el ruido, pero está en A." },
    { q: "Si un CT cubre B desde el cuarto con la ventana que se rompe, ¿dónde está?", opciones: ["Window","Observation","Heaven","Garage"], correcta: 0, explicacion: "Window es el cuarto de la ventana rompible. Observation tienta porque también tiene vidrio, pero mira desde atrás." },
    { q: "¿Qué une A, Secret y B por adentro?", opciones: ["Outside","Lobby","Silo","Vents"], correcta: 3, explicacion: "Vents son los ductos entre pisos. Outside tienta, pero es el patio de afuera." },
    { q: "Si un T mira el patio desde el silo alto del lado T, ¿qué call das?", opciones: ["\"Uno Garage\"","\"Uno Silo\"","\"Uno CT Red\"","\"Uno Decon\""], correcta: 1, explicacion: "Silo es la torre del lado T. Garage tienta porque controla el patio, pero es del lado CT." },
  ],
},
{
  id: "ancient",
  icono: "🗿",
  titulo: "Ancient",
  nivel: "Avanzado",
  objetivos: [
    "Nombrar los callouts de A: Main, Donut, Plat, Triple Box, Temple y Short",
    "Nombrar los callouts de B: Ramp, Cave (Dark y Lamp Room), House, Pillar y Back Halls",
    "Nombrar Mid y el lado T: Elbow, Snipers Nest, Tunnels, Water, Ruins y Split",
  ],
  lecciones: [
    { titulo: "A: Main, Donut y el sitio", video: {"id":"Vx4XyrmGcJg","t":"Callouts de Ancient en español · Fer NS (5:43)"}, html: `
      <p class="idea">A de Ancient se ataca por <strong>A Main</strong> (el pasillo con arcos) o por <strong>Short</strong> desde Mid. Al lado del sitio está <strong>Donut</strong>, un cuarto redondo que hay que limpiar en cada ataque.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/ancient/" target="_blank" rel="noopener">Abrí el mapa de Ancient con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>A Halls</strong><br><small>Pasillos de A</small></td><td>Pasillo entre Stairs y A Main: los T se juntan ahí</td></tr><tr><td><strong>A Main (Main Hall)</strong><br><small>Principal de A</small></td><td>Pasillo con arcos desde A Halls hasta A</td></tr><tr><td><strong>Long</strong><br><small>Largo</small></td><td>Último tramo de Main antes de A</td></tr><tr><td><strong>A Site</strong><br><small>Sitio A</small></td><td>Sitio al que se llega por Main y por Short</td></tr><tr><td><strong>Big Box</strong><br><small>Caja grande</small></td><td>Caja grande al lado de A: cobertura y plante</td></tr><tr><td><strong>Triple Box</strong><br><small>Triple caja</small></td><td>Tres cajas apiladas al fondo de A</td></tr><tr><td><strong>Plat</strong><br><small>Plataforma</small></td><td>Plataforma elevada al lado de A</td></tr><tr><td><strong>Single</strong><br><small>Simple</small></td><td>Caja angosta junto a Plat</td></tr><tr><td><strong>Donut</strong><br><small>Dona</small></td><td>Cuarto redondo al lado de A que lleva hacia CT</td></tr><tr><td><strong>Boost</strong><br><small>Boost (igual)</small></td><td>Lugar elevado a la derecha de Long</td></tr><tr><td><strong>Short</strong><br><small>Corto</small></td><td>La otra entrada a A, desde Mid por Tunnels</td></tr><tr><td><strong>Temple</strong><br><small>Templo</small></td><td>Pasaje de CT spawn a A, con vista larga a Main</td></tr><tr><td><strong>CT Lane</strong><br><small>Carril CT</small></td><td>Carril de CT spawn a A para rotar</td></tr></table>
      <p>Por ejemplo, entrás a A por Main y te matan desde el cuarto redondo del costado. Es "uno Donut": la próxima ronda alguien entra mirando ahí primero.</p>` },
    { titulo: "B: Ramp, Cave y el sitio", html: `
      <p class="idea">A B de Ancient los T llegan por <strong>Ramp</strong> (la pendiente ancha) o por el camino oscuro de <strong>Lamp Room</strong>, <strong>Dark</strong> y <strong>House</strong>. El centro del sitio es un <strong>Pillar</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/ancient/" target="_blank" rel="noopener">Abrí el mapa de Ancient con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Side Lower (T Lower)</strong><br><small>Lado T bajo</small></td><td>Zona baja del lado T donde se arman los ataques a B</td></tr><tr><td><strong>Ramp</strong><br><small>Rampa</small></td><td>Pendiente ancha desde T Lower hasta B: la entrada principal</td></tr><tr><td><strong>B Site</strong><br><small>Sitio B</small></td><td>Sitio armado alrededor del Pillar</td></tr><tr><td><strong>Pillar</strong><br><small>Pilar</small></td><td>Pilar de piedra en B: cobertura central</td></tr><tr><td><strong>Heaven</strong><br><small>Cielo</small></td><td>Paso elevado que une T Lower, Lamp Room y Mid</td></tr><tr><td><strong>Lamp Room</strong><br><small>Cuarto de la lámpara</small></td><td>Cuarto iluminado con faroles entre Heaven y Dark</td></tr><tr><td><strong>Dark</strong><br><small>Oscuro</small></td><td>Pasaje oscuro entre Lamp Room y House</td></tr><tr><td><strong>House</strong><br><small>Casa</small></td><td>Estructura que une Lamp Room y Dark con B: segunda entrada</td></tr><tr><td><strong>Side Entrance</strong><br><small>Entrada lateral</small></td><td>Entrada lateral a B desde House y Dark</td></tr><tr><td><strong>Xbox</strong><br><small>Xbox (igual)</small></td><td>Dos cajas junto a Heaven para cubrirse o subirse</td></tr><tr><td><strong>Square</strong><br><small>Cuadrado</small></td><td>Estructura grande entre Back Halls y B</td></tr><tr><td><strong>Back Halls</strong><br><small>Pasillos de atrás</small></td><td>Pasillo que une Alley con Square, detrás de B</td></tr><tr><td><strong>Alley</strong><br><small>Callejón</small></td><td>Carril CT desde spawn hacia Back Halls y B</td></tr></table>
      <p><strong>"Cave"</strong> es un nombre que muchos jugadores usan para la zona oscura de Lamp Room y Dark. Preguntá a tu equipo cuál usan.</p>
      <p>Por ejemplo, defendés B y escuchás pasos en el pasaje oscuro que viene de la casa. La call es "suenan Dark", y tu compañero mira la entrada lateral.</p>` },
    { titulo: "Mid y el lado T", html: `
      <p class="idea">El Mid de Ancient se controla desde <strong>Snipers Nest</strong> (los CT, con puertas dobles) y se cruza por <strong>Elbow</strong> (el codo) y <strong>Tunnels</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/ancient/" target="_blank" rel="noopener">Abrí el mapa de Ancient con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Spawn</strong><br><small>Spawn T</small></td><td>Spawn de los T, al sur del mapa</td></tr><tr><td><strong>Outside</strong><br><small>Afuera</small></td><td>Terreno abierto entre T spawn y los pasillos hacia A</td></tr><tr><td><strong>Split</strong><br><small>Bifurcación</small></td><td>Cruce que une T spawn con Elbow y Stairs</td></tr><tr><td><strong>Stairs</strong><br><small>Escaleras</small></td><td>Escalones de Split a A Halls</td></tr><tr><td><strong>Elbow</strong><br><small>Codo</small></td><td>Pasillo doblado que une Split con Mid</td></tr><tr><td><strong>Mid</strong><br><small>Medio</small></td><td>Zona abierta central entre Elbow, Doors y Snipers Nest</td></tr><tr><td><strong>Top Mid (Top of Mid)</strong><br><small>Arriba de Mid</small></td><td>Parte alta de Mid, junto a la escalera hacia Snipers Nest</td></tr><tr><td><strong>Snipers Nest</strong><br><small>Nido del francotirador</small></td><td>Puertas dobles con vista dominante de Mid para los CT</td></tr><tr><td><strong>Tunnels</strong><br><small>Túneles</small></td><td>Pasaje de Mid a Short</td></tr><tr><td><strong>Pit</strong><br><small>Pozo</small></td><td>Hueco frente a Tunnels, para cubrirse o hacer lurk</td></tr><tr><td><strong>Tunnel</strong><br><small>Túnel</small></td><td>Pasaje desde T spawn hasta Water</td></tr><tr><td><strong>Water</strong><br><small>Agua</small></td><td>Tramo de arroyo entre Tunnel y Ruins</td></tr><tr><td><strong>Ruins</strong><br><small>Ruinas</small></td><td>Estructuras rotas entre Water y Doors, cerca de Ramp</td></tr><tr><td><strong>Doors</strong><br><small>Puertas</small></td><td>Puertas dobles de Ruins a T Lower</td></tr><tr><td><strong>CT Spawn</strong><br><small>Spawn CT</small></td><td>Spawn de los CT, al norte del mapa</td></tr></table>
      <p><strong>Dos "Tunnel":</strong> "Tunnels" (plural) lleva de Mid a Short; "Tunnel" (singular) lleva de T spawn a Water. Aclará cuál.</p>
      <p>Por ejemplo, un CT espía Mid desde las puertas dobles de arriba. La call es "uno Snipers Nest", y los T usan una smoke ahí antes de cruzar por Elbow.</p>` },
  ],
  practica: [
    "Abrí Ancient en una partida privada, recorré A por Main y por Short diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Recorré B por Ramp y por Lamp Room, Dark y House, y anotá cuántos segundos tarda cada camino.",
    "En el radar interactivo de Ancient de csdb.gg, anotá la diferencia entre Tunnels y Tunnel.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Ancient con todos los callouts", url: "https://csdb.gg/maps/ancient/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "Si entrás a A de Ancient por Main y te matan desde el cuarto redondo del costado, ¿qué cantás?", opciones: ["\"Uno Temple\"","\"Uno Pillar\"","\"Uno Donut\"","\"Uno House\""], correcta: 2, explicacion: "Donut es el cuarto redondo de A. Temple tienta porque está del lado CT, pero es el pasaje desde spawn." },
    { q: "¿Por dónde atacan los T a A en Ancient?", opciones: ["Por A Main o por Short","Por Ramp","Por Lamp Room","Por Water"], correcta: 0, explicacion: "Main y Short llevan a A. Ramp tienta, pero es la entrada de B." },
    { q: "Si un CT te mira desde las tres cajas apiladas al fondo de A, ¿dónde está?", opciones: ["Single","Big Box","Xbox","Triple Box"], correcta: 3, explicacion: "Triple Box son las tres cajas del fondo. Big Box tienta, pero es una sola caja grande." },
    { q: "Si un CT rota de spawn a A con vista larga a Main, ¿por dónde pasa?", opciones: ["Ramp","Temple","Elbow","Doors"], correcta: 1, explicacion: "Temple es el pasaje de CT a A. Elbow tienta, pero es del lado T, hacia Mid." },
    { q: "Si los T entran a B por la pendiente ancha desde T Lower, ¿qué call das?", opciones: ["\"Main\"","\"Short\"","\"Ramp\"","\"Tunnels\""], correcta: 2, explicacion: "Ramp es la entrada principal de B. Main tienta, pero es de A." },
    { q: "Si defendés B y suenan pasos en el pasaje oscuro que viene de la casa, ¿qué cantás?", opciones: ["\"Suenan Dark\"","\"Suenan Donut\"","\"Suenan Temple\"","\"Suenan Snipers\""], correcta: 0, explicacion: "Dark está entre Lamp Room y House. Donut tienta, pero está en A." },
    { q: "¿Qué es el Pillar de Ancient?", opciones: ["La caja grande de A","El nido de los CT","Una puerta de Mid","El pilar de piedra en el centro de B"], correcta: 3, explicacion: "Pillar es la cobertura central de B. La caja de A tienta, pero esa es Big Box." },
    { q: "Si un CT espía Mid desde las puertas dobles de arriba, ¿dónde está?", opciones: ["Doors","Snipers Nest","Ruins","Square"], correcta: 1, explicacion: "Snipers Nest son las puertas de los CT sobre Mid. Doors tienta, pero son las de Ruins a T Lower." },
    { q: "Si los T cruzan de Split a Mid por el pasillo doblado, ¿cómo se llama?", opciones: ["Temple","Alley","Elbow","Back Halls"], correcta: 2, explicacion: "Elbow es el codo. Alley tienta, pero es un carril CT." },
    { q: "Tu compañero dice \"uno Tunnel\" en singular. ¿Qué zona es?", opciones: ["El pasaje de T spawn a Water","El pasaje de Mid a Short","La rampa de B","Donut"], correcta: 0, explicacion: "Tunnel (singular) va a Water; Tunnels (plural) va de Mid a Short. Confundirlos tienta por el nombre." },
    { q: "Ves a un T en el tramo de arroyo entre Tunnel y Ruins. ¿Qué call das?", opciones: ["\"Uno Pit\"","\"Uno Heaven\"","\"Uno Plat\"","\"Uno Water\""], correcta: 3, explicacion: "Water es el arroyo. Pit tienta porque es un hueco, pero está frente a Tunnels." },
    { q: "Si muchos jugadores dicen \"Cave\" en Ancient, ¿a qué zona se refieren?", opciones: ["A Donut","A la zona oscura de Lamp Room y Dark, hacia B","A T spawn","A Temple"], correcta: 1, explicacion: "Cave es un apodo de esa zona. Donut tienta porque es un cuarto cerrado, pero está en A." },
  ],
},
{
  id: "anubis",
  icono: "🐍",
  titulo: "Anubis",
  nivel: "Avanzado",
  objetivos: [
    "Nombrar los callouts de A: Main, Fountain, Connector, Walkway, Heaven y Tunnel",
    "Nombrar los callouts de B: B Long, Gate, Snipers Nest, Bricks, Pillar, Corner y Ninja",
    "Nombrar Mid: Bridge, Water, Canal, Double Doors, Boat y Palace",
  ],
  lecciones: [
    { titulo: "A: Main, Fuente y Connector", video: {"id":"9wCUJBHRfMc","t":"Callouts de Anubis en español · Fer NS (4:03)"}, html: `
      <p class="idea">A de Anubis se ataca por <strong>A Main</strong>, pasando la <strong>Fountain</strong> (la fuente), o por el <strong>Connector</strong> que viene de Mid. Los CT tienen <strong>Heaven</strong> arriba.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/anubis/" target="_blank" rel="noopener">Abrí el mapa de Anubis con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>A Main (Main)</strong><br><small>Principal de A</small></td><td>Entrada principal de los T desde el lado del canal</td></tr><tr><td><strong>Fountain</strong><br><small>Fuente</small></td><td>Plataforma frente a A Main: cobertura y post-plant</td></tr><tr><td><strong>A Site</strong><br><small>Sitio A</small></td><td>Plaza del sitio alrededor de su pilar central</td></tr><tr><td><strong>Headshot</strong><br><small>Headshot (igual)</small></td><td>Cajas en A con ángulo a la cabeza contra Main</td></tr><tr><td><strong>Plateau</strong><br><small>Meseta</small></td><td>Zona elevada de A con acceso hacia Heaven</td></tr><tr><td><strong>Heaven</strong><br><small>Cielo</small></td><td>Plataforma elevada de los CT que mira A</td></tr><tr><td><strong>Back Site</strong><br><small>Fondo del sitio</small></td><td>Parte de atrás de A, cerca de la puerta con reja</td></tr><tr><td><strong>A Connector</strong><br><small>Conector de A</small></td><td>Pasarela angosta que une Middle con A</td></tr><tr><td><strong>Walkway</strong><br><small>Pasarela</small></td><td>Pasarela elevada en la punta del Connector: otra entrada a A</td></tr><tr><td><strong>Tunnel / Tunnel Stairs</strong><br><small>Túnel / escaleras del túnel</small></td><td>Pasillo interior de CT spawn hasta Heaven</td></tr><tr><td><strong>Boat / Wood / Arches</strong><br><small>Bote / Madera / Arcos</small></td><td>Zonas del canal hacia A: el bote, el piso de madera, los arcos</td></tr><tr><td><strong>Drop / Upper</strong><br><small>Bajada / Arriba</small></td><td>Zona alta de los T y la bajada al canal</td></tr></table>
      <p>Por ejemplo, un T se cubre en la plataforma frente a la entrada de A. La call es "uno Fountain", y los CT de Heaven saben a dónde tirar la granada.</p>` },
    { titulo: "B: Long, Gate y Sniper", html: `
      <p class="idea">A B de Anubis los T llegan por <strong>B Long</strong> y entran por el arco de <strong>Gate</strong>. Los CT tienen el ángulo más fuerte en <strong>Snipers Nest</strong>, una ventana elevada.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/anubis/" target="_blank" rel="noopener">Abrí el mapa de Anubis con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Ruins</strong><br><small>Ruinas</small></td><td>Zona de templo roto entre T spawn y B Long</td></tr><tr><td><strong>Heaven (Ruins)</strong><br><small>Cielo de Ruinas</small></td><td>Lugar elevado en Ruins que mira B Long</td></tr><tr><td><strong>B Long / Outside Long</strong><br><small>Largo de B / afuera de Long</small></td><td>Camino desde Ruins hasta B, que termina en Gate</td></tr><tr><td><strong>Ivy</strong><br><small>Hiedra</small></td><td>Hueco con plantas afuera de Gate, cobertura de los T</td></tr><tr><td><strong>Gate</strong><br><small>Portón</small></td><td>Arco de B Long hacia el sitio</td></tr><tr><td><strong>B Site / Default</strong><br><small>Sitio B / Default</small></td><td>Plaza con pilares / lugar común para plantar</td></tr><tr><td><strong>Pillar</strong><br><small>Pilar</small></td><td>Pilar cerca a la derecha al entrar desde Long</td></tr><tr><td><strong>Corner</strong><br><small>Esquina</small></td><td>Triángulo cerca a la izquierda al entrar: ángulo clásico del anchor</td></tr><tr><td><strong>Back Site (Back of B)</strong><br><small>Fondo de B</small></td><td>Parte de atrás de B, detrás de los pilares grandes</td></tr><tr><td><strong>Ninja</strong><br><small>Ninja (igual)</small></td><td>Rincón escondido al lado del fondo de B</td></tr><tr><td><strong>Bricks</strong><br><small>Ladrillos</small></td><td>Pila de ladrillos al norte de B, frente a Gate</td></tr><tr><td><strong>Snipers Nest (Sniper)</strong><br><small>Nido del francotirador</small></td><td>Ventana elevada sobre la entrada de B: el ángulo CT más fuerte</td></tr><tr><td><strong>Street / Cave / Beach</strong><br><small>Calle / Cueva / Playa</small></td><td>Rutas de los CT desde spawn hacia B y para flanquear</td></tr></table>
      <p>Por ejemplo, entrás por Gate y te matan desde la ventana alta. Es "uno Sniper": la próxima ronda tiran una smoke ahí antes de cruzar.</p>` },
    { titulo: "Mid: Bridge, Canal y Palace", html: `
      <p class="idea">El Mid de Anubis tiene un <strong>Bridge</strong> (puente) arriba y el <strong>Water</strong> (agua del canal) abajo. En el centro están las <strong>Double Doors</strong> hacia el lado CT.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/anubis/" target="_blank" rel="noopener">Abrí el mapa de Anubis con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Spawn</strong><br><small>Spawn T</small></td><td>Spawn al sur, que se abre hacia A Main, Top Mid y Ruins</td></tr><tr><td><strong>Alley</strong><br><small>Callejón</small></td><td>Carril desde T spawn hacia Mid y el lado de B</td></tr><tr><td><strong>Top Mid</strong><br><small>Arriba de Mid</small></td><td>Entrada de los T a Mid, hacia Bridge y Double Doors</td></tr><tr><td><strong>Bridge</strong><br><small>Puente</small></td><td>Pasarela elevada que cruza Mid hacia Double Doors</td></tr><tr><td><strong>Water</strong><br><small>Agua</small></td><td>Canal debajo del puente: la ruta baja de Mid</td></tr><tr><td><strong>Canal</strong><br><small>Canal</small></td><td>Vía de agua más ancha que alimenta Water, Boat y los cruces a B</td></tr><tr><td><strong>Stairs</strong><br><small>Escaleras</small></td><td>Escalones de Alley hasta el nivel del agua</td></tr><tr><td><strong>Double Doors (Mid Doors)</strong><br><small>Puertas dobles</small></td><td>Puertas en el centro del mapa, entre Bridge y Middle</td></tr><tr><td><strong>Middle</strong><br><small>Centro</small></td><td>Zona central del lado CT detrás de Double Doors</td></tr><tr><td><strong>Palace</strong><br><small>Palacio</small></td><td>Salón cubierto que une Middle, el lado T y B</td></tr><tr><td><strong>E Box</strong><br><small>E Box (igual)</small></td><td>Hueco interior de Middle hacia B: atajo de rotación</td></tr><tr><td><strong>CT Spawn</strong><br><small>Spawn CT</small></td><td>Al norte, con salida a A por Tunnel y a B por Street o Cave</td></tr></table>
      <p><strong>Ojo con Palace y Heaven:</strong> Anubis tiene un Palace distinto al de Mirage, y dos Heaven (el de A y el de Ruins). Aclarar "Heaven A" o "Heaven Ruins" evita confusiones.</p>
      <p>Por ejemplo, un T cruza por abajo del puente, en el agua. La call es "uno Water", no "uno Bridge": uno está arriba y el otro abajo.</p>` },
  ],
  practica: [
    "Abrí Anubis en una partida privada, recorré A por Main y por Connector diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Recorré B Long hasta Gate y anotá desde dónde te podría ver un CT en Sniper.",
    "En el radar interactivo de Anubis de csdb.gg, anotá dónde están los dos Heaven del mapa.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Anubis con todos los callouts", url: "https://csdb.gg/maps/anubis/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "Si un T se cubre en la plataforma frente a la entrada de A de Anubis, ¿qué cantás?", opciones: ["\"Uno Gate\"","\"Uno Bricks\"","\"Uno Fountain\"","\"Uno Ivy\""], correcta: 2, explicacion: "Fountain es la plataforma frente a Main. Gate tienta porque es una entrada, pero es la de B." },
    { q: "Si los T entran a A desde Mid por la pasarela angosta, ¿por dónde vienen?", opciones: ["A Connector (y Walkway)","B Long","Street","Ruins"], correcta: 0, explicacion: "El Connector une Middle con A. B Long tienta, pero va a B." },
    { q: "Si un CT domina A desde la plataforma elevada, ¿cómo se llama?", opciones: ["Snipers Nest","Palace","Bridge","Heaven (de A)"], correcta: 3, explicacion: "Heaven mira A. Snipers Nest tienta porque también es elevado, pero mira B." },
    { q: "¿Por dónde llega un CT desde spawn hasta Heaven de A?", opciones: ["Por Gate","Por Tunnel y Tunnel Stairs","Por Water","Por Ruins"], correcta: 1, explicacion: "Es el pasillo interior de los CT. Water tienta, pero es del medio." },
    { q: "Si los T entran a B por el arco al final de B Long, ¿cómo se llama?", opciones: ["Fountain","Double Doors","Gate","Walkway"], correcta: 2, explicacion: "Gate es el arco de B. Double Doors tienta porque son puertas, pero están en el medio." },
    { q: "Si te matan desde la ventana alta sobre la entrada de B, ¿dónde estaba?", opciones: ["Snipers Nest (Sniper)","Heaven de A","Bricks","Corner"], correcta: 0, explicacion: "Sniper es el ángulo CT más fuerte de B. Bricks tienta porque está en B, pero es una pila baja." },
    { q: "Si un CT te espera en el triángulo cerca a la izquierda al entrar a B, ¿qué call das?", opciones: ["\"Uno Pillar\"","\"Uno Ninja\"","\"Uno Back Site\"","\"Uno Corner\""], correcta: 3, explicacion: "Corner es el triángulo de la izquierda. Pillar tienta, pero está a la derecha." },
    { q: "Ves a un T en el hueco con plantas afuera de Gate. ¿Dónde está?", opciones: ["Ninja","Ivy","Boat","Beach"], correcta: 1, explicacion: "Ivy es la hiedra afuera de Gate. Ninja tienta porque es un escondite, pero está adentro de B." },
    { q: "Si un T cruza por abajo del puente de Mid, en el agua, ¿qué cantás?", opciones: ["\"Uno Bridge\"","\"Uno Top Mid\"","\"Uno Water\"","\"Uno Palace\""], correcta: 2, explicacion: "Water es abajo; Bridge, arriba. \"Bridge\" tienta porque está en el mismo lugar visto desde arriba." },
    { q: "¿Qué hay en el centro del mapa entre Bridge y Middle?", opciones: ["Double Doors (las puertas dobles)","Gate","Fountain","Tunnel"], correcta: 0, explicacion: "Double Doors separan Mid del lado CT. Gate tienta, pero es de B." },
    { q: "Tu compañero dice \"uno Heaven\" en Anubis. ¿Qué le preguntás?", opciones: ["Nada, hay uno solo","\"¿En Mirage?\"","\"¿Es en Water?\"","\"¿Heaven de A o de Ruins?\""], correcta: 3, explicacion: "Anubis tiene dos Heaven. \"Hay uno solo\" tienta si recién aprendés el mapa." },
    { q: "Si un CT rota por un hueco interior de Middle hacia B, ¿por dónde pasa?", opciones: ["A Main","E Box","Ruins","Drop"], correcta: 1, explicacion: "E Box es el atajo de rotación. Ruins tienta porque llega a B, pero es del lado T." },
  ],
},
{
  id: "cache",
  icono: "📦",
  titulo: "Cache",
  nivel: "Avanzado",
  objetivos: [
    "Nombrar los callouts de A: A Main, Squeaky, Quad, Forklift, Highway, Truck y Electrical Box",
    "Nombrar los callouts de B: B Main, Checkers, Heaven, Hell, Rafters, Sun Room y Tree Room",
    "Nombrar Mid y las rotaciones: Vents, White Box, Connector, Garage y CT Halls",
  ],
  lecciones: [
    { titulo: "A: Main, Squeaky y Highway", video: {"id":"TDA4FpJiOVA","t":"Aprendé todos los callouts de Cache en 4 minutos · ZOlky CS2 (4:13)"}, html: `
      <p class="idea">Cache volvió al pool de Premier en julio de 2026, rehecho para CS2. A se ataca por <strong>A Main</strong> o por <strong>Squeaky</strong> (la puerta azul), y los CT llegan rápido por <strong>Highway</strong> desde Mid.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/cache/" target="_blank" rel="noopener">Abrí el mapa de Cache con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>A Long</strong><br><small>Largo de A</small></td><td>Carril desde T spawn y Garage hacia Squeaky y A Main</td></tr><tr><td><strong>A Halls</strong><br><small>Pasillos de A</small></td><td>Pasillos de los T que llevan a Squeaky y A Main</td></tr><tr><td><strong>A Main</strong><br><small>Principal de A</small></td><td>Entrada ancha a A desde el lado T</td></tr><tr><td><strong>Lockers</strong><br><small>Casilleros</small></td><td>Parte de A Main con casilleros, visible desde el sitio</td></tr><tr><td><strong>Squeaky</strong><br><small>La puerta que chilla</small></td><td>Cuarto con la puerta azul: la segunda entrada a A</td></tr><tr><td><strong>Shroud (Boost Boxes) / A Boost</strong><br><small>Shroud / boost de A</small></td><td>Cajas de esquina entre Squeaky y A Main, para subirse</td></tr><tr><td><strong>A Site / A Default</strong><br><small>Sitio A / Default</small></td><td>Sitio A / lugar común para plantar</td></tr><tr><td><strong>Quad</strong><br><small>Cuádruple</small></td><td>Pila de cuatro cajas al fondo de A: la cobertura principal</td></tr><tr><td><strong>Corner (NBK)</strong><br><small>Esquina</small></td><td>Hueco entre la puerta de Squeaky y Quad</td></tr><tr><td><strong>Forklift</strong><br><small>Autoelevador</small></td><td>Autoelevador en A: cobertura del frente del sitio</td></tr><tr><td><strong>Balcony</strong><br><small>Balcón</small></td><td>Plataforma elevada arriba de Forklift</td></tr><tr><td><strong>Cubby</strong><br><small>Cubby (igual)</small></td><td>Hueco al lado de A Main, para el cuerpo a cuerpo</td></tr><tr><td><strong>Highway</strong><br><small>Autopista</small></td><td>Subida angosta que une Mid con A: rotación y ángulo de AWP</td></tr><tr><td><strong>Electrical Box (Elektro)</strong><br><small>Caja eléctrica</small></td><td>Zona entre Truck, Highway y A, por donde llegan los CT</td></tr><tr><td><strong>Truck (CT)</strong><br><small>Camión CT</small></td><td>Camión del lado CT entre Elektro y CT Halls</td></tr></table>
      <p><strong>Cuidado:</strong> Cache tiene dos camiones. "T Truck" está del lado T; "Truck" a secas, del lado CT. Y "Squeaky" es una puerta ruidosa también en Nuke: aclarar el mapa no hace falta en partida, pero sí cuando estudiás.</p>
      <p>Por ejemplo, un CT espera en la pila de cuatro cajas del fondo de A. La call es "uno Quad", y el entry sabe adónde tirar la flash.</p>` },
    { titulo: "B: Main, Checkers y Heaven", html: `
      <p class="idea">A B de Cache los T llegan por <strong>B Main</strong> o por <strong>Checkers</strong> (el cuarto con piso a cuadros, que viene de Vents). Los CT tienen el ángulo más fuerte en <strong>Heaven</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/cache/" target="_blank" rel="noopener">Abrí el mapa de Cache con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>Outside B</strong><br><small>Afuera de B</small></td><td>Terreno de los T entre spawn y B Halls</td></tr><tr><td><strong>B Halls</strong><br><small>Pasillos de B</small></td><td>Pasillo interior desde T spawn hasta B Main</td></tr><tr><td><strong>Sun Room</strong><br><small>Cuarto del sol</small></td><td>Cuarto con el mural del sol, al costado de B Halls</td></tr><tr><td><strong>Toxic</strong><br><small>Tóxico</small></td><td>Rincón del barril amarillo al fondo de Sun Room</td></tr><tr><td><strong>B Main</strong><br><small>Principal de B</small></td><td>Zona entre B Halls, Checkers y el sitio</td></tr><tr><td><strong>B Main Boxes</strong><br><small>Cajas de B Main</small></td><td>Cajas cerca de Checkers donde se esconden los CT</td></tr><tr><td><strong>Checkers</strong><br><small>Cuadros</small></td><td>Cuarto de piso a cuadros que une Vents con B Main</td></tr><tr><td><strong>B Site / B Default</strong><br><small>Sitio B / Default</small></td><td>Sitio elevado / lugar común para plantar</td></tr><tr><td><strong>B Ramp</strong><br><small>Rampa de B</small></td><td>Rampa que sube a la plataforma de plante</td></tr><tr><td><strong>Pit</strong><br><small>Pozo</small></td><td>Hueco al lado de la rampa de B</td></tr><tr><td><strong>New Boxes</strong><br><small>Cajas nuevas</small></td><td>Cajas grises altas del lado de B Halls</td></tr><tr><td><strong>Heaven</strong><br><small>Cielo</small></td><td>Plataforma de madera sobre B: el ángulo CT más fuerte</td></tr><tr><td><strong>Rafters</strong><br><small>Vigas</small></td><td>Pasarela de metal elevada a la que lleva Heaven</td></tr><tr><td><strong>Hell</strong><br><small>Infierno</small></td><td>Zona baja debajo de Heaven: ruta de retake</td></tr><tr><td><strong>Tree Room / Tree</strong><br><small>Cuarto del árbol / Árbol</small></td><td>Cuarto con el árbol grande detrás de Hell: repliegue CT</td></tr><tr><td><strong>Headshot</strong><br><small>Headshot (igual)</small></td><td>Lugar del lado de Hell con ángulo a la cabeza</td></tr></table>
      <p>Por ejemplo, defendés B y te avisan "perdimos Checkers". Ya sabés que los T pueden entrar desde Vents por el costado, no solo por B Main.</p>` },
    { titulo: "Mid y rotaciones", html: `
      <p class="idea">Mid es el centro de Cache: desde ahí los T pueden ir a A por <strong>Highway</strong> o a B por <strong>Vents</strong>. Los CT lo vigilan desde <strong>White Box</strong> y rotan por <strong>Connector</strong>.</p>
      <p>🗺️ <strong><a href="https://csdb.gg/maps/cache/" target="_blank" rel="noopener">Abrí el mapa de Cache con las calls marcadas</a></strong> (se abre aparte, en inglés: cada nombre aparece en su lugar del radar). Tenelo al lado mientras leés la tabla.</p><table><tr><th>Call (en español)</th><th>Dónde está</th></tr><tr><td><strong>T Spawn</strong><br><small>Spawn T</small></td><td>Spawn de los T en el borde oeste</td></tr><tr><td><strong>T Yard</strong><br><small>Patio T</small></td><td>Patio a la salida de T spawn, donde se separan los caminos a A y B</td></tr><tr><td><strong>T Truck</strong><br><small>Camión T</small></td><td>Camión entre T spawn y A Long: referencia del inicio</td></tr><tr><td><strong>Garage</strong><br><small>Garaje</small></td><td>Edificio grande entre T spawn y Mid</td></tr><tr><td><strong>Red (T Red)</strong><br><small>Rojo</small></td><td>Contenedor rojo adentro de Garage</td></tr><tr><td><strong>Mid</strong><br><small>Medio</small></td><td>Carril central que une Garage, Connector y Highway</td></tr><tr><td><strong>White Box</strong><br><small>Caja blanca</small></td><td>Caja blanca del lado de Highway: lugar clásico del AWP CT</td></tr><tr><td><strong>Sandbags</strong><br><small>Bolsas de arena</small></td><td>Bolsas entre Connector y Mid Roof: cobertura CT</td></tr><tr><td><strong>Mid Roof / Boost</strong><br><small>Techo de Mid / boost</small></td><td>Techo entre Vents y Sandbags / techo al que se sube con ayuda</td></tr><tr><td><strong>Vents</strong><br><small>Ventilación</small></td><td>Ductos que unen Mid con Checkers: ruta para dividir hacia B</td></tr><tr><td><strong>Connector (CT Connector)</strong><br><small>Conector</small></td><td>Cuarto que une Mid con CT Halls y spawn: centro de rotación</td></tr><tr><td><strong>CT Halls</strong><br><small>Pasillos CT</small></td><td>Conector entre Truck y Hell: los CT pasan de un sitio al otro</td></tr><tr><td><strong>CT Spawn / Bus Stop</strong><br><small>Spawn CT / Parada de colectivo</small></td><td>Spawn de los CT al este / la parada afuera</td></tr></table>
      <pre><code>Rotaciones de los T desde Mid:
Mid → Highway → A
Mid → Vents → Checkers → B
Rotación de los CT:
A ↔ B por CT Halls (o por Connector)</code></pre>
      <p>Por ejemplo, el AWP de los CT mira Mid desde la caja blanca del lado de Highway. La call es "AWP White Box", y los T tiran una smoke antes de cruzar.</p>` },
  ],
  practica: [
    "Abrí Cache en una partida privada, recorré A y B diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Cronometrá cuánto tarda un CT en ir de A a B por CT Halls y anotá los segundos.",
    "En el radar interactivo de Cache de csdb.gg, anotá qué une Vents y qué une Highway.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Cache con todos los callouts", url: "https://csdb.gg/maps/cache/" },
    { t: "Dot Esports: notas de la Temporada 5 de Premier (Cache entra, Overpass sale)", url: "https://dotesports.com/counter-strike/news/cs2-season-5-update-patch-notes" },
  ],
  quiz: [
    { q: "Si un CT espera en la pila de cuatro cajas del fondo de A en Cache, ¿qué cantás?", opciones: ["\"Uno Forklift\"","\"Uno White Box\"","\"Uno Quad\"","\"Uno Truck\""], correcta: 2, explicacion: "Quad es la pila de cuatro cajas. Forklift tienta porque también está en A, pero es el autoelevador del frente." },
    { q: "Si escuchás la puerta azul que es la segunda entrada a A, ¿por dónde vienen?", opciones: ["Squeaky","Checkers","Highway","Sun Room"], correcta: 0, explicacion: "Squeaky es la puerta azul de A. Highway tienta porque llega a A, pero es la ruta de los CT desde Mid." },
    { q: "Si los CT llegan a A por la subida angosta desde Mid, ¿cómo se llama?", opciones: ["A Main","Vents","B Halls","Highway"], correcta: 3, explicacion: "Highway une Mid con A. A Main tienta, pero es la entrada de los T." },
    { q: "Si un CT se cubre en el autoelevador del frente de A, ¿qué call das?", opciones: ["\"Uno Quad\"","\"Uno Forklift\"","\"Uno Bus Stop\"","\"Uno Toxic\""], correcta: 1, explicacion: "Forklift es el autoelevador. Quad tienta, pero está al fondo." },
    { q: "Si Cache tiene dos camiones, ¿cuál es \"T Truck\"?", opciones: ["El del lado CT, junto a Elektro","El de B","El del lado T, entre T spawn y A Long","No existe"], correcta: 2, explicacion: "T Truck es del lado T; Truck a secas es del CT. Confundirlos tienta por el nombre parecido." },
    { q: "Si te avisan \"perdimos Checkers\", ¿qué significa para el CT de B?", opciones: ["Que los T pueden entrar por el costado, desde Vents","Que A está tomado","Que ganaron la ronda","Nada importante"], correcta: 0, explicacion: "Checkers une Vents con B Main. \"Nada importante\" tienta si solo mirás B Main, pero te flanquean." },
    { q: "Si un CT te mata desde la plataforma de madera sobre B, ¿dónde estaba?", opciones: ["Hell","Pit","Sun Room","Heaven"], correcta: 3, explicacion: "Heaven es la plataforma alta. Hell tienta, pero es la zona de abajo." },
    { q: "Si los T tiran granadas desde el cuarto con el mural del sol, al costado de B Halls, ¿dónde están?", opciones: ["Tree Room","Sun Room","Connector","Garage"], correcta: 1, explicacion: "Sun Room es el del mural. Tree Room tienta porque también es un cuarto, pero está del lado CT." },
    { q: "Desde Mid, ¿por dónde llegan los T a B sin pasar por B Main?", opciones: ["Por Highway","Por Squeaky","Por Vents y después Checkers","Por Bus Stop"], correcta: 2, explicacion: "Vents lleva a Checkers. Highway tienta porque sale de Mid, pero va a A." },
    { q: "Si el AWP CT mira Mid desde la caja blanca del lado de Highway, ¿qué cantás?", opciones: ["\"AWP White Box\"","\"AWP Red\"","\"AWP Garage\"","\"AWP Lockers\""], correcta: 0, explicacion: "White Box es el lugar clásico del AWP CT. Red tienta, pero es el contenedor de Garage, del lado T." },
    { q: "Si un CT rota de A a B por adentro, ¿por dónde pasa?", opciones: ["B Halls","A Long","T Yard","CT Halls (o Connector)"], correcta: 3, explicacion: "CT Halls une los dos sitios para los CT. B Halls tienta, pero es el pasillo de los T." },
    { q: "¿Qué mapa salió del pool de Premier cuando entró Cache en julio de 2026?", opciones: ["Mirage","Overpass","Dust II","Nuke"], correcta: 1, explicacion: "Cache reemplazó a Overpass. Dust II tienta porque es otro clásico, pero sigue en el pool." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: aprender las calls de memoria",
  nivel: "Avanzado",
  objetivos: [
    "Aprender los callouts de un mapa de memoria con una rutina de práctica",
    "Medir cuántos callouts sabés con una prueba en voz alta",
    "Usar las calls en partida y revisar las demos para mejorar la comunicación",
  ],
  lecciones: [
    { titulo: "Una rutina para aprenderlas", html: `
      <p class="idea">Las calls se aprenden <strong>recorriendo el mapa y diciéndolas en voz alta</strong>, de a poco y repasando en días distintos. Leer una tabla no alcanza.</p>
      <pre><code>Rutina de 15 minutos por mapa:
1. Abrí el mapa solo: con la práctica con bots, o en la consola
   (activala en Opciones) escribiendo, por ejemplo, map de_inferno.
2. Recorré una zona (por ejemplo, A) caminando despacio.
3. En cada lugar, decí el callout en voz alta ANTES de mirar la tabla.
4. Si no te sale, mirá la tabla y repetilo 2 veces.
5. Al día siguiente, repetí empezando por los que fallaste.</code></pre>
      <table>
        <tr><th>Día</th><th>Qué hacés</th></tr>
        <tr><td>1</td><td>Mapa nuevo: zona A</td></tr>
        <tr><td>2</td><td>Repaso de A + zona B</td></tr>
        <tr><td>4</td><td>Repaso de A y B + Mid</td></tr>
        <tr><td>7</td><td>Prueba de todo el mapa</td></tr>
      </table>
      <p><strong>Por qué funciona:</strong> decirlo sin mirar te obliga a recordarlo, y repasar en días distintos hace que no se olvide. Es lo mismo que enseña el curso "Aprender a aprender" de este sitio.</p>
      <p><strong>Empezá por tus mapas:</strong> si en Premier vetás siempre los mismos, aprendé primero los 3 o 4 que más jugás.</p>
      <p>Por ejemplo, un jugador aprendió Inferno en una semana con 15 minutos por día. Al séptimo día dijo 40 callouts de 45 recorriendo el mapa sin mirar.</p>` },
    { titulo: "La prueba y la rúbrica", html: `
      <p class="idea">Para saber si aprendiste un mapa, hacé una <strong>prueba en voz alta</strong>: alguien te señala lugares en el radar de csdb.gg y vos decís el callout.</p>
      <p>Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Callouts de A</td><td>Todos los de la tabla</td><td>La mitad o más</td><td>Menos de la mitad</td></tr>
        <tr><td>Callouts de B</td><td>Todos los de la tabla</td><td>La mitad o más</td><td>Menos de la mitad</td></tr>
        <tr><td>Mid y spawns</td><td>Todos</td><td>La mitad o más</td><td>Menos de la mitad</td></tr>
        <tr><td>Rotaciones</td><td>Sabe por dónde rota un CT entre sitios</td><td>Solo una</td><td>Ninguna</td></tr>
        <tr><td>Calls completas</td><td>Cuántos, dónde, con qué y vida, en menos de 3 segundos</td><td>Le falta una parte</td><td>Calls largas o confusas</td></tr>
        <tr><td>Nombres que se confunden</td><td>Distingue Heaven/Hell, Cat de Mirage y de Dust II, los dos Apartments de Inferno</td><td>Algunos</td><td>Ninguno</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → ¡mapa aprendido!
7 a 10  → repasá lo que sacó 0 o 1
0 a 6   → volvé a la rutina de 15 minutos</code></pre>
      <p>Por ejemplo, en la prueba de Nuke un jugador sacó 9: decía "Heaven" cuando estaba en Hell. Practicó esa zona dos días más y llegó a 12.</p>` },
    { titulo: "En partida y en la demo", html: `
      <p class="idea">El último paso es usar las calls <strong>en partida</strong> y revisar después la <strong>demo</strong>, la grabación de la partida, para ver qué dijiste y qué faltó.</p>
      <p>CS2 guarda tus partidas: en <strong>Ver → Tus partidas</strong> podés bajar la demo y verla desde los ojos de cualquier jugador.</p>
      <pre><code>Revisión de una ronda (5 minutos):
1. Elegí una ronda que perdiste.
2. Mirala desde tus ojos y anotá cada call que diste.
3. ¿Llegaron a tiempo? ¿Tenían cuántos, dónde, con qué y vida?
4. ¿Qué call faltó y habría cambiado la ronda?</code></pre>
      <table>
        <tr><th>Error común</th><th>Mejor</th></tr>
        <tr><td>"Está ahí, ahí"</td><td>El callout exacto</td></tr>
        <tr><td>Callarse al morir</td><td>Una frase con la info</td></tr>
        <tr><td>Hablar durante el clutch</td><td>Silencio</td></tr>
        <tr><td>Call con el nombre de otro mapa</td><td>Repasar los nombres que se confunden</td></tr>
      </table>
      <p><strong>Cuidá tu cabeza y tu cuerpo:</strong> pausas cada tanto, buena postura y dormir bien también suben tu nivel. Si perdés varias seguidas, cortá: jugar enojado empeora las calls.</p>
      <p>Por ejemplo, revisando una demo un jugador vio que dijo "uno ahí" tres veces en una ronda perdida. Desde entonces se obliga a decir siempre un callout, aunque sea el oficial que ve debajo del radar.</p>` },
  ],
  practica: [
    "Elegí uno de tus mapas, hacé la rutina de 15 minutos durante 4 días (1, 2, 4 y 7) y anotá cuántos callouts recordaste cada día.",
    "Hacé la prueba en voz alta con alguien usando el radar de csdb.gg y anotá el puntaje de cada criterio de la rúbrica y el total.",
    "Revisá una ronda perdida en la demo y anotá cuántas calls diste y cuál faltó.",
  ],
  recursos: [
    { t: "csdb.gg: los radares de todos los mapas, en un solo lugar", url: "https://csdb.gg/maps/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
  ],
  quiz: [
    { q: "Si querés aprender las calls de un mapa, ¿qué es lo que más funciona?", opciones: ["Leer la tabla una vez","Mirar un video una vez","Recorrerlo y decirlas en voz alta sin mirar, repasando en días distintos","Esperar a aprenderlas jugando sin prestar atención"], correcta: 2, explicacion: "Recordar sin mirar y repasar fija la memoria. Leer la tabla tienta por rápido, pero se olvida." },
    { q: "Si no te sale un callout en la rutina, ¿qué hacés?", opciones: ["Mirás la tabla, lo repetís 2 veces y al día siguiente empezás por ese","Lo salteás para siempre","Te inventás otro nombre","Dejás la rutina"], correcta: 0, explicacion: "Los que fallás son los que más repasás. Saltearlo tienta, pero queda el hueco." },
    { q: "¿Qué días repasás en la rutina?", opciones: ["Todos el mismo día","Solo el día 30","Ninguno","Días 1, 2, 4 y 7"], correcta: 3, explicacion: "Repasos repartidos frenan el olvido. Todo el mismo día tienta, pero se olvida rápido." },
    { q: "Si en Premier siempre jugás los mismos 4 mapas, ¿por dónde empezás?", opciones: ["Por los que vetás siempre","Por esos 4","Por todos a la vez","Por uno que no está en el pool"], correcta: 1, explicacion: "Los que más jugás te sirven antes. Todos a la vez tienta, pero te dispersa." },
    { q: "¿Cómo es la prueba para saber si aprendiste un mapa?", opciones: ["Leés la tabla en voz alta","Mirás un video","Alguien te señala lugares en el radar y vos decís el callout","Jugás una partida sin hablar"], correcta: 2, explicacion: "Decirlo sin mirar es la prueba real. Leer la tabla tienta, pero es reconocer." },
    { q: "Si en la prueba decís \"Heaven\" cuando estás en Hell, ¿qué criterio pierde puntos?", opciones: ["Nombres que se confunden","Rotaciones","Calls completas","Ninguno"], correcta: 0, explicacion: "Heaven y Hell son de los que se confunden. Rotaciones tienta, pero es otro criterio." },
    { q: "Sacaste 8 en la rúbrica. ¿Qué hacés?", opciones: ["Empezás todo de cero","Das el mapa por aprendido","Cambiás de mapa","Repasás lo que sacó 0 o 1"], correcta: 3, explicacion: "De 7 a 10 se repasa lo flojo. Darlo por aprendido tienta, pero faltan zonas." },
    { q: "¿Qué es una demo en CS2?", opciones: ["Una versión de prueba del juego","La grabación de la partida, que se ve desde los ojos de cualquier jugador","Un mapa nuevo","Un modo de práctica"], correcta: 1, explicacion: "La demo es la grabación. \"Versión de prueba\" tienta por la palabra, pero acá es otra cosa." },
    { q: "Si revisás una ronda perdida en la demo, ¿qué buscás?", opciones: ["Solo tu puntería","Los skins de los demás","Qué calls diste, si llegaron a tiempo y cuál faltó","Nada, ya pasó"], correcta: 2, explicacion: "La comunicación también se revisa. Solo la puntería tienta, pero las calls cambian rondas." },
    { q: "En la demo ves que dijiste \"uno ahí\" tres veces. ¿Qué cambiás?", opciones: ["Decir siempre un callout, aunque sea el oficial del radar","Hablar más fuerte","Dejar de hablar","Decir \"ahí, ahí, ahí\""], correcta: 0, explicacion: "El nombre del lugar es lo útil. Dejar de hablar tienta, pero el equipo pierde información." },
    { q: "Si perdiste 4 partidas seguidas y estás enojado, ¿qué conviene?", opciones: ["Seguir hasta ganar una","Gritarle al equipo","Jugar más rápido","Cortar y descansar: jugar enojado empeora las calls"], correcta: 3, explicacion: "El enojo empeora todo. \"Hasta ganar una\" tienta, pero suele terminar en más derrotas." },
    { q: "Si no sabés el nombre de la comunidad de un lugar, ¿qué decís?", opciones: ["\"Ahí\"","El nombre oficial que ves debajo del radar","Nada","Un nombre inventado"], correcta: 1, explicacion: "El oficial lo entiende todo el equipo. \"Ahí\" tienta por rápido, pero no dice nada." },
  ],
},
];
