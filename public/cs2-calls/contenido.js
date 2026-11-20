// Temario del curso "Counter-Strike 2: mapas, calls y humos de Premier". Mismo formato que public/contenido.js.
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
  id: "humos",
  icono: "💨",
  titulo: "Granadas: humos, flashes y molotovs, y cómo practicarlas",
  nivel: "Básico",
  objetivos: [
    "Explicar qué hace cada granada (humo, flash y molotov) y por qué se tiran juntas",
    "Reconocer los 4 tipos de tiro y hacer un jump throw",
    "Armar tu servidor de práctica y usar las líneas setpos para aprender un humo",
  ],
  lecciones: [
    { titulo: "Para qué sirve un humo", html: `
      <p class="idea">Un <strong>humo</strong> (smoke) es una granada que larga una nube que no deja ver a través. Sirve para <strong>tapar la vista</strong> de un rival: si no te ve, no te puede disparar.</p>
      <table>
        <tr><th>Dato</th><th>Qué saber</th></tr>
        <tr><td>Precio</td><td>$300</td></tr>
        <tr><td>Cuánto dura</td><td>Unos 20 segundos: alcanza para cruzar o entrar, no para quedarte</td></tr>
        <tr><td>Granada HE</td><td>Abre un hueco en el humo por un momento</td></tr>
        <tr><td>Balas</td><td>Hacen agujeritos por donde se ve un poco</td></tr>
        <tr><td>Molotov</td><td>El humo apaga el fuego que cae adentro</td></tr>
      </table>
      <p><strong>Las otras dos granadas</strong> que vas a ver en cada mapa:</p>
      <table>
        <tr><th>Granada</th><th>Qué hace</th><th>Cuándo se usa</th></tr>
        <tr><td>⚡ Flash ($200)</td><td>Ciega unos segundos a quien la está mirando</td><td>Justo antes de asomarte o entrar a un sitio</td></tr>
        <tr><td>🔥 Molotov (T) o incendiaria (CT)</td><td>Prende fuego el piso unos segundos</td><td>Para sacar a alguien de un escondite o cortar un paso</td></tr>
      </table>
      <p><strong>Si te tiran una flash, dale la espalda:</strong> si no la mirás, te ciega mucho menos.</p>
      <p>Cada mapa tiene humos que todo el mundo usa, porque tapan siempre los mismos lugares desde donde defienden los CT. Aprenderlos es como aprenderse las calls: el equipo los nombra igual ("tiro CT", "tiro Window").</p>
      <pre><code>Una ejecución (entrar a un sitio con utilidad):
1. Cada uno sabe qué humo tira.
2. Se tiran juntos, al mismo tiempo.
3. Se espera a que caigan (un par de segundos).
4. Se entra al sitio por los lugares que quedaron tapados.</code></pre>
      <p><strong>Un humo solo tapa un rincón; tres juntos cortan un sitio.</strong> Por eso en cada mapa vas a ver los humos agrupados: los de A, los de B y los de Mid.</p>
      <p><strong>Del lado CT</strong> los humos se usan al revés: para demorar a los T que avanzan y ganar tiempo hasta que lleguen tus compañeros.</p>
      <p>Por ejemplo, en Mirage los T que entran a A sin humos reciben disparos desde tres lugares a la vez. Con tres humos bien tirados, quedan con un solo rincón para limpiar.</p>` },
    { titulo: "Cómo se tira: los tipos de tiro", html: `
      <p class="idea">Un humo cae siempre en el mismo lugar si repetís tres cosas: <strong>dónde estás parado</strong>, <strong>adónde apuntás</strong> y <strong>cómo lo tirás</strong>. A esa combinación se la llama <strong>lineup</strong>.</p>
      <table>
        <tr><th>Tiro</th><th>Cómo</th><th>Para qué</th></tr>
        <tr><td>Clic izquierdo</td><td>Soltás el clic izquierdo</td><td>Tiro largo y fuerte</td></tr>
        <tr><td>Clic derecho</td><td>Soltás el clic derecho</td><td>Tiro corto y suave</td></tr>
        <tr><td>Los dos clics</td><td>Soltás los dos juntos</td><td>Tiro de distancia media</td></tr>
        <tr><td>Jump throw</td><td>Saltás y soltás el clic en el mismo momento</td><td>Más alto y más lejos: muchos humos lo necesitan</td></tr>
      </table>
      <p>Además, el tiro cambia si estás <strong>quieto</strong>, <strong>caminando</strong> o <strong>corriendo</strong>. En las tablas de cada mapa dice cuál es.</p>
      <pre><code>Para que el humo caiga siempre igual:
1. Parate en el punto exacto (una esquina, el borde de un escalón).
2. Poné la mira en el punto exacto (el borde de una antena, una grieta).
3. Hacé el tiro que pide, sin moverte antes de tiempo.</code></pre>
      <p><strong>El jump throw</strong> es el que más cuesta. Practicalo saltando y soltando el clic a la vez, con dos teclas. Hay "binds" que lo hacen con una sola tecla, pero Valve puede no permitirlos en servidores oficiales: no te arriesgues.</p>
      <p><strong>La referencia visual</strong> es lo que tenés que memorizar: "parado en la esquina del cartel, apunto a la punta de la antena". Los videos de cada humo te la muestran.</p>
      <p>Por ejemplo, el humo de Stairs en Mirage se tira quieto, con clic izquierdo, parado en el borde del escalón de A Ramp y apuntando al centro de un hueco en el andamio.</p>` },
    { titulo: "Tu servidor de práctica", html: `
      <p class="idea">Los humos se aprenden repitiendo en un <strong>servidor de práctica</strong>: una partida tuya, sin rivales, donde podés tirar granadas sin límite y ver dónde caen.</p>
      <pre><code>1. Activá la consola: Configuración → Juego →
   Habilitar consola de desarrollador (~): Sí
2. Jugar → Práctica → elegí el mapa → empezá.
3. Abrí la consola con la tecla ~ (a la izquierda del 1).
4. Pegá estos comandos, uno por línea:</code></pre>
      <pre><code>sv_cheats 1
mp_warmup_end
mp_freezetime 0
mp_roundtime_defuse 60
mp_buy_anywhere 1
mp_maxmoney 65535
mp_startmoney 65535
sv_infinite_ammo 1
ammo_grenade_limit_total 5
sv_grenade_trajectory_prac_pipreview 1
bind n sv_rethrow_last_grenade</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué hace</th></tr>
        <tr><td>sv_cheats 1</td><td>Activa los comandos de práctica (solo en tu servidor)</td></tr>
        <tr><td>sv_infinite_ammo 1</td><td>Granadas sin fin</td></tr>
        <tr><td>sv_grenade_trajectory_prac_pipreview 1</td><td>Muestra en un recuadro dónde va a caer la granada</td></tr>
        <tr><td>bind n sv_rethrow_last_grenade</td><td>Con la tecla N se repite el último tiro, para ver cómo cae</td></tr>
      </table>
      <p><strong>Las líneas setpos:</strong> en cada mapa del curso, debajo del video de cada humo, hay una línea por humo, que empieza con <em>setpos</em> y sigue con <em>setang</em>. Pegala en la consola: te deja parado y apuntando exacto. Tirás como dice la tabla y mirás dónde cae. Después intentá encontrar ese mismo lugar caminando, sin el comando: ese es el aprendizaje de verdad.</p>
      <p>Todo esto funciona <strong>solo en tu servidor</strong>. En Premier o en una partida oficial no hay trucos.</p>
      <p>Por ejemplo, para aprender el humo de Window en Mirage: pegás su línea setpos, tirás 5 veces con la tecla N para repetir, y después lo buscás vos solo desde T spawn hasta que te sale 3 veces seguidas.</p>` },
  ],
  practica: [
    "Activá la consola, armá tu servidor de práctica en Mirage con los comandos de la lección y anotá cuánto tardaste en tenerlo listo.",
    "Hacé 10 jump throws seguidos en tu servidor y anotá cuántos salieron como salto y tiro a la vez.",
    "Elegí un humo de cualquier mapa del curso, pegá su línea setpos, tiralo 5 veces y después encontrá el lugar sin el comando: anotá cuántos intentos te llevó.",
  ],
  recursos: [
    { t: "CSNADES.gg: humos de todos los mapas con video, en un mapa interactivo (en inglés)", url: "https://csnades.gg/" },
    { t: "csdb.gg: cómo practicar humos en CS2, configuración del servidor (en español)", url: "https://csdb.gg/es/guides/how-to-practice-smokes-cs2/" },
  ],
  quiz: [
    { q: "Si un CT te mata siempre desde el mismo rincón al entrar a un sitio, ¿qué hace un humo bien tirado?", opciones: ["Le saca vida","Lo deja ciego como una flash","Le tapa la vista y no te puede disparar mientras cruzás","Lo empuja"], correcta: 2, explicacion: "El humo tapa la vista, no hace daño. Que ciega como una flash tienta, pero la flash es otra granada." },
    { q: "Tirás un humo y te quedás parado adentro esperando. ¿Qué problema tenés?", opciones: ["Dura unos 20 segundos: sirve para cruzar o entrar, no para quedarte","Ninguno, dura toda la ronda","Te saca vida","Hace ruido"], correcta: 0, explicacion: "El humo se va enseguida. \"Dura toda la ronda\" tienta si nunca lo cronometraste." },
    { q: "Si los CT tiran una granada HE a tu humo, ¿qué pasa?", opciones: ["No pasa nada","El humo dura el doble","Se apaga para siempre","Se abre un hueco en el humo por un momento"], correcta: 3, explicacion: "En CS2 la HE abre el humo un rato. \"No pasa nada\" tienta por costumbre de juegos viejos, pero ya no es así." },
    { q: "Si van a entrar a un sitio con tres humos, ¿cómo los tiran?", opciones: ["De a uno, cada 10 segundos","Juntos, al mismo tiempo, y entran cuando caen","Uno solo y el resto guarda","Después de entrar"], correcta: 1, explicacion: "Juntos cortan el sitio entero. De a uno tienta para no gastar, pero el primero se va antes de que caiga el último." },
    { q: "Sos CT y los T avanzan hacia tu sitio. ¿Para qué te sirve un humo?", opciones: ["No sirve para los CT","Para hacerles daño","Para demorarlos hasta que lleguen tus compañeros","Para cegar a tu equipo"], correcta: 2, explicacion: "Del lado CT el humo gana tiempo. \"No sirve para los CT\" tienta, pero se usa mucho." },
    { q: "¿Qué tres cosas tenés que repetir para que un humo caiga siempre en el mismo lugar?", opciones: ["Dónde estás parado, adónde apuntás y cómo lo tirás","La hora, el mapa y el arma","Solo adónde apuntás","La velocidad del mouse y el volumen"], correcta: 0, explicacion: "Eso es un lineup. Solo apuntar tienta, pero si te parás en otro lugar cae en otro lado." },
    { q: "Si un humo necesita un tiro de distancia media, ¿cómo lo soltás?", opciones: ["Solo clic derecho","Solo clic izquierdo","Saltando siempre","Con los dos clics a la vez"], correcta: 3, explicacion: "Los dos clics dan tiro medio. Clic derecho tienta, pero es el tiro corto." },
    { q: "La tabla dice \"salto y soltás\". ¿Qué hacés?", opciones: ["Soltás y después saltás","Saltás y soltás el clic en el mismo momento","Saltás dos veces","Te agachás y tirás"], correcta: 1, explicacion: "El jump throw es al mismo tiempo. Soltar después tienta, pero el humo sale con otra altura." },
    { q: "Te ofrecen un \"bind\" que hace el jump throw con una sola tecla. ¿Qué tenés en cuenta?", opciones: ["Que es obligatorio","Que no hay ningún riesgo","Que Valve puede no permitirlo en servidores oficiales: mejor con dos teclas","Que solo sirve en Premier"], correcta: 2, explicacion: "Las acciones automáticas pueden ir contra las reglas. \"No hay riesgo\" tienta, pero no vale la pena arriesgar la cuenta." },
    { q: "Querés practicar humos sin rivales. ¿Dónde lo hacés?", opciones: ["En un servidor de práctica: Jugar → Práctica, con la consola activada","En una partida de Premier","En una partida competitiva con amigos desconocidos","Mirando videos nada más"], correcta: 0, explicacion: "En tu servidor podés tirar sin límite. Premier tienta para \"practicar en serio\", pero no hay comandos y molestás a tu equipo." },
    { q: "Si en tu servidor de práctica querés repetir el último humo con una tecla, ¿qué comando usás?", opciones: ["sv_infinite_ammo 1","mp_freezetime 0","sv_cheats 0","bind n sv_rethrow_last_grenade"], correcta: 3, explicacion: "Ese bind repite el último tiro con la N. sv_infinite_ammo tienta porque es de granadas, pero solo da granadas sin fin." },
    { q: "Pegaste la línea setpos de un humo y te salió bien. ¿Qué hacés después?", opciones: ["Nada, ya lo sabés","Buscás el mismo lugar caminando, sin el comando, hasta que te sale solo","Usás setpos en Premier","Pasás a otro mapa"], correcta: 1, explicacion: "En partida no hay setpos: tenés que encontrar la referencia vos. \"Ya lo sabés\" tienta, pero todavía no lo hiciste sin ayuda." },
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
    "Usar las granadas del lado T de Mirage: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Mirage para demorar y retomar",
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
    { titulo: "Granadas del lado T en Mirage", video: {"id":"o4jfU01yVUk","t":"Todos los humos de Mirage en CS2 · bubu (3:42)"}, html: `
      <p class="idea">Mirage tiene 85 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>60</td></tr>
        <tr><td>⚡ Flashes</td><td>12</td></tr>
        <tr><td>🔥 Molotovs</td><td>11</td></tr>
        <tr><td>💥 Granadas HE</td><td>2</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#mirage/t">🗂️ Ver las 85 granadas del lado T de Mirage</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>⚡ <strong>A Ramp</strong> · desde A Ramp</summary>
        <p>Explota apenas pasa la esquina de Ramp y ciega a quien te espera en A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-flashbang-xMEDBlgTNj/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-flashbang-xMEDBlgTNj/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/flashbangs/a-ramp-from-a-ramp" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 836.155396 -1036.029785 -194.101837;setang -39.119064 -148.335022 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>B Site</strong> · desde Back Alley</summary>
        <p>Ciega a los CT del sitio B justo cuando entrás desde Apartments. <em>Corriendo, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-flashbang-KBVOguqRaI/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-flashbang-KBVOguqRaI/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/flashbangs/b-site-from-back-alley" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -161.027649 575.501038 -7.400757;setang -16.745499 -179.421509 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Market Window</strong> · desde Back Alley</summary>
        <p>Tapa la ventana del Mercado, desde donde los CT ven el sitio B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-I60PpERA4N/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-I60PpERA4N/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/market-window-from-back-alley" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -160.031250 887.968750 -71.647980;setang -50.280293 -146.488480 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Stairs</strong> · desde A Ramp</summary>
        <p>Tapa la escalera del fondo de A, desde donde un CT mira Ramp. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-FmNaL1KYD4/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-FmNaL1KYD4/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/stairs-from-a-ramp" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1148.765991 -1183.968262 -143.171799;setang -41.636101 -165.239334 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde T Spawn</summary>
        <p>Tapa la entrada de Mid de los T para salir de spawn sin que te vean. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-wsMc7skGQh/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-wsMc7skGQh/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/top-mid-from-t-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1422.970337 70.968750 -55.699707;setang -33.431511 -160.986145 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Van</strong> · desde B Apts</summary>
        <p>Quema Van, el escondite de los CT en B, antes de entrar. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-molotov-vDmQZouxb7/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-molotov-vDmQZouxb7/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/molotovs/van-from-b-apts" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1042.112915 641.823303 -15.939156;setang -6.914647 172.807480 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Window</strong> · desde Top Mid Boxes</summary>
        <p>Saca al AWP de Window para poder cruzar Mid. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-molotov-Ss3bxBr2bu/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-molotov-Ss3bxBr2bu/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/molotovs/window-from-top-mid-boxes" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 502.968750 -629.504150 -96.517273;setang -13.770969 179.751511 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Short</strong> · desde Back Alley</summary>
        <p>Tapa Short (Cat) para que un CT de ahí no vea el sitio B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-GUXzZRmfWN/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-GUXzZRmfWN/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/b-short-from-back-alley" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -160.031250 887.970276 -71.648178;setang -45.790627 -134.498291 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Site</strong> · desde Back Alley</summary>
        <p>Ciega a los CT del sitio B justo cuando entrás desde Apartments. <em>Agachado y quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-QwQM6wt3Yr/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-QwQM6wt3Yr/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/b-site-from-back-alley" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -623.676880 615.972534 -16.016640;setang -44.826885 -171.111969 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Jungle</strong> · desde A Ramp</summary>
        <p>Tapa Jungle y la salida de Connector hacia A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-IDOx7cwRPw/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-IDOx7cwRPw/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/jungle-from-a-ramp" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 907.886047 -1036.031250 -194.619080;setang -56.234268 -161.656998 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Market Door</strong> · desde Back Alley</summary>
        <p>Tapa la puerta del Mercado, por donde vuelven los CT a B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-UJiXtqvbkb/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-UJiXtqvbkb/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/market-door-from-back-alley" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -161.031006 450.875763 -10.753876;setang -11.539766 -161.965912 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Mid Window</strong> · desde T Roof</summary>
        <p>Ciega al AWP de Window para poder cruzar Mid. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-JCgKV8frFW/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-JCgKV8frFW/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/mid-window-from-t-roof" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1127.970581 -1208.217041 -44.968750;setang -21.300035 166.887238 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Ticket Booth</strong> · desde A Ramp</summary>
        <p>Tapa la vista desde CT y la cabina hacia el sitio A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-6UrrcOsJSD/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-6UrrcOsJSD/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/ticket-booth-from-a-ramp" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 872.438599 -1036.029541 -194.964050;setang -13.902396 -142.189148 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Window</strong> · desde Top Mid Boxes</summary>
        <p>Saca al AWP de Window para poder cruzar Mid. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-flashbang-MvaMZHo60D/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-flashbang-MvaMZHo60D/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/flashbangs/window-from-top-mid-boxes" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 502.968750 -627.420288 -96.517395;setang -14.178807 -178.095016 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💥 <strong>Window</strong> · desde Top Mid Boxes</summary>
        <p>Saca al AWP de Window para poder cruzar Mid. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-he-bCbx9FqC6S/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-he-bCbx9FqC6S/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/hegrenades/window-from-top-mid-boxes" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 502.968750 -626.643311 -96.524139;setang -14.137868 -178.113480 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para ejecutar A, tres compañeros tiran CT, Stairs y Jungle desde A Ramp a la vez; cuando caen, entran por Ramp y Palace sin que nadie los vea desde atrás.</p>` },
    { titulo: "Granadas del lado CT en Mirage", html: `
      <p class="idea">Mirage tiene 33 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>9</td></tr>
        <tr><td>⚡ Flashes</td><td>7</td></tr>
        <tr><td>🔥 Molotovs</td><td>9</td></tr>
        <tr><td>💥 Granadas HE</td><td>8</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#mirage/ct">🗂️ Ver las 33 granadas del lado CT de Mirage</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>🔥 <strong>A Ramp</strong> · desde Triple Box</summary>
        <p>Frena a los T que suben por Ramp hacia A. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-molotov-wEIQIthxov/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-molotov-wEIQIthxov/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/molotovs/a-ramp-from-triple-box" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -897.986023 -2331.135498 -104.993301;setang -16.469255 43.683067 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>B Apts</strong> · desde B Site</summary>
        <p>Frena a los T que salen de Apartments hacia B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-molotov-m50JGuV379/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-molotov-m50JGuV379/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/molotovs/b-apts-from-b-site" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -2037.233643 439.579254 -95.968750;setang -11.591716 28.368635 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Mid Window</strong> · desde Jungle</summary>
        <p>Ciega a los T de Mid para que tu AWP se asome por Window. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-flashbang-fIl9Flydas/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-flashbang-fIl9Flydas/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/flashbangs/mid-window-from-jungle" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1247.968750 -924.031250 -103.968750;setang -35.794769 58.191368 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Palace</strong> · desde CT Spawn</summary>
        <p>demora a los T que salen de Palace hacia A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-RiIimkK4X7/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-RiIimkK4X7/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/palace-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -2031.972656 -1764.757935 -226.729340;setang -28.193851 -10.925070 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Apts</strong> · desde Trash</summary>
        <p>Tapa B Apts. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-Sskz7Ye3wy/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-Sskz7Ye3wy/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/b-apts-from-trash" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
      </details>
      <details class="granada"><summary>💨 <strong>Back Apts</strong> · desde B Site</summary>
        <p>Tapa Back Apts. <em>Corriendo, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-gZA9I2y25z/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-gZA9I2y25z/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/back-apts-from-b-site" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -2268.780029 587.176758 -93.046051;setang -10.288829 -0.824492 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Catwalk</strong> · desde B Short</summary>
        <p>Tapa Catwalk. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-smoke-EcLXg7YIUo/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-smoke-EcLXg7YIUo/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/smokes/catwalk-from-b-short" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1066.051514 296.522217 -100.439392;setang -7.488355 -56.923733 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Top Mid</strong> · desde Triple</summary>
        <p>Ciega a quien está en Top Mid; entrá o asomate justo cuando explota. <em>Corriendo, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-flashbang-PJ2w6dA0vs/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-flashbang-PJ2w6dA0vs/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/flashbangs/top-mid-from-triple" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -877.531738 -2367.062744 -105.148315;setang -13.401329 60.326988 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Top Mid Boxes</strong> · desde Window</summary>
        <p>Quema Top Mid Boxes: saca a quien está ahí o corta el paso. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/mirage-molotov-CW6iMDLwWM/lq.mp4" poster="https://assets.csnades.gg/nades/mirage-molotov-CW6iMDLwWM/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/mirage/molotovs/top-mid-boxes-from-window-blind" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1247.968750 -924.031250 -103.964081;setang -17.391127 0.426708 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Mirage en una partida privada, recorré A diciendo en voz alta cada callout de la tabla y anotá cuántos recordaste sin mirar.",
    "Repetí el recorrido en B y en Mid, y anotá los 3 callouts que más te costaron.",
    "Mirá el radar interactivo de Mirage en csdb.gg y anotá 3 callouts de la comunidad que no conocías.",
    "Practicá en tu servidor los humos, flashes y molotovs de Mirage con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Mirage con todos los callouts", url: "https://csdb.gg/maps/mirage/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "CSNADES.gg: todas las granadas de Mirage en un mapa interactivo (en inglés)", url: "https://csnades.gg/mirage/smokes" },
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
    { q: "Si vas a ejecutar A en Mirage desde A Ramp, ¿qué tres humos tiran?", opciones: ["Window, Top Mid y Short","Market Window, Market Door y Short","CT, Stairs y Jungle","Palace, Ramp y Tetris"], correcta: 2, explicacion: "Esos tres cortan las tres llegadas de los CT a A. Market Window tienta porque es famoso, pero es de B." },
    { q: "Si el AWP de los CT no te deja cruzar Mid en Mirage, ¿qué humo tirás?", opciones: ["Window","Stairs","Market Door","Palace"], correcta: 0, explicacion: "Window es el nido del AWP que mira Mid. Stairs tienta, pero tapa A." },
    { q: "Si vas a entrar a B en Mirage desde Apartments, ¿qué dos humos tapan a los CT del Mercado?", opciones: ["CT y Jungle","Top Mid y Window","Stairs y Palace","Market Window y Market Door"], correcta: 3, explicacion: "Los dos son del Mercado, al lado de B. CT y Jungle tientan, pero son de A." },
    { q: "Tenés la línea setpos de Stairs. ¿Qué hacés con ella?", opciones: ["La escribís en el chat de una partida de Premier","La pegás en la consola del servidor de práctica y tirás como dice la lección","La pegás en la consola de una partida oficial","No sirve para nada"], correcta: 1, explicacion: "setpos solo funciona en tu servidor de práctica con trucos activados. En Premier tienta probarlo, pero no funciona y no corresponde." },
    { q: "Si vas a entrar a B en Mirage y un CT suele esconderse en Van, ¿qué granada tirás antes?", opciones: ["Una flash a Ramp","Un humo a Stairs","Una molotov a Van","Una molotov a Window"], correcta: 2, explicacion: "La molotov lo saca del escondite. La flash tienta, pero no lo saca: solo lo ciega un momento." },
    { q: "Si sos CT en Mirage y los T suben por Ramp hacia A, ¿qué granada los demora?", opciones: ["Una molotov a Ramp","Una flash a B","Un humo a Market Window","Una molotov a Van"], correcta: 0, explicacion: "El fuego en Ramp les corta el paso. Market Window tienta, pero está en B." },
    { q: "Tirás la flash de Ramp en Mirage. ¿Cuándo salís?", opciones: ["Antes de tirarla","Cinco segundos después","Nunca, solo la tirás","Justo cuando explota"], correcta: 3, explicacion: "Al explotar el rival está ciego. Esperar tienta para ir seguro, pero en segundos recupera la vista." },
    { q: "Si el AWP de Window no te deja cruzar Mid en Mirage y no tenés humo, ¿qué granada lo saca de ahí?", opciones: ["Una molotov a Van","Una molotov a Window","Una flash a B","Una molotov a Apartments"], correcta: 1, explicacion: "La molotov lo obliga a moverse. Van tienta, pero está en B." },
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
    "Usar las granadas del lado T de Inferno: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Inferno para demorar y retomar",
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
    { titulo: "Granadas del lado T en Inferno", video: {"id":"uKeuOnAl-S4","t":"Inferno: toda la utilidad que tenés que saber · Lecho (9:46)"}, html: `
      <p class="idea">Inferno tiene 54 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>36</td></tr>
        <tr><td>⚡ Flashes</td><td>5</td></tr>
        <tr><td>🔥 Molotovs</td><td>11</td></tr>
        <tr><td>💥 Granadas HE</td><td>2</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#inferno/t">🗂️ Ver las 54 granadas del lado T de Inferno</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>⚡ <strong>Balcony</strong> · desde Apts</summary>
        <p>Ciega a los CT de Balcony y A cuando salís de Apartments. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-flashbang-pEiJokiX7m/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-flashbang-pEiJokiX7m/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/flashbangs/balcony-from-apts" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1579.335571 -377.968750 320.031250;setang -24.480705 -30.092890 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Boiler</strong> · desde Alt Mid</summary>
        <p>Tapa Boiler, el cuarto por donde los CT rotan entre Mid y A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-M8clAgezGq/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-M8clAgezGq/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/boiler-from-alt-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 729.031494 243.912567 155.573914;setang -19.713053 41.695580 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>New Box</strong> · desde Car</summary>
        <p>Quema New Box, la caja donde se esconde un CT en B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-molotov-0WL2z5ksjl/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-molotov-0WL2z5ksjl/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/molotovs/new-box-from-car" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 479.274414 2017.968750 200.031311;setang -10.588449 123.033058 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Pit</strong> · desde Alt Mid</summary>
        <p>Tapa Pit, el pozo al borde de A donde suele esperar un CT. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-mTMBhbR0iR/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-mTMBhbR0iR/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/pit-from-alt-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 187.968750 -197.968750 131.306793;setang -22.096590 3.939515 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Top Mid</strong> · desde Underpass</summary>
        <p>Ciega a los CT de Top Mid para avanzar por Mid. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-flashbang-DbbgaLj8Fy/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-flashbang-DbbgaLj8Fy/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/flashbangs/top-mid-from-underpass" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 292.988708 648.044922 75.770920;setang -18.219749 -8.623450 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Arch</strong> · desde Alt Mid</summary>
        <p>Tapa Arch, el arco por donde llegan los CT a A desde CT spawn. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-ByTtdpC7XM/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-ByTtdpC7XM/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/arch-from-alt-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 807.031250 -290.968750 153.034042;setang -55.324913 56.475582 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Coffins</strong> · desde Banana</summary>
        <p>Tapa Coffins (los ataúdes), el escondite del fondo de B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-vTGxzPpPDo/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-vTGxzPpPDo/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/coffins-from-banana-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 369.498260 1664.064087 196.596329;setang -1.258356 82.267311 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Coffins</strong> · desde Half Wall</summary>
        <p>Quema Coffins (los ataúdes), el escondite del fondo de B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-molotov-SjUDRqOtwN/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-molotov-SjUDRqOtwN/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/molotovs/coffins-from-half-wall-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 457.270874 1833.310913 200.031250;setang 0.787578 84.974136 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT</strong> · desde Banana</summary>
        <p>Tapa la llegada de los CT al sitio B cuando entrás por Banana. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-9LzHE8aRot/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-9LzHE8aRot/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/ct-from-banana-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 371.229248 1661.555420 198.031311;setang -32.234665 64.704498 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Library</strong> · desde Alt Mid</summary>
        <p>Tapa Library, el cuarto de los CT que mira Long y A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-G1sPcgBbK0/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-G1sPcgBbK0/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/library-from-alt-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 807.031250 -290.968750 153.031250;setang -48.684139 40.793961 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde T Spawn</summary>
        <p>Tapa la entrada de Mid de los T para salir de spawn sin que te vean. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-Yh2HU8M4Vy/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-Yh2HU8M4Vy/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/top-mid-from-t-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -610.028625 579.423340 38.562355;setang -43.230850 -1.628497 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Arches</strong> · desde Mid</summary>
        <p>Tapa Arches. <em>Corriendo, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-5qWZ8MUYZh/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-5qWZ8MUYZh/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/arches-from-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 844.308533 711.968750 160.031250;setang -7.477009 -44.133900 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para ejecutar B, desde Banana tiran CT y Coffins; con esos dos humos solo queda un rincón por limpiar al entrar al sitio.</p>` },
    { titulo: "Granadas del lado CT en Inferno", html: `
      <p class="idea">Inferno tiene 31 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>16</td></tr>
        <tr><td>⚡ Flashes</td><td>4</td></tr>
        <tr><td>🔥 Molotovs</td><td>5</td></tr>
        <tr><td>💥 Granadas HE</td><td>6</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#inferno/ct">🗂️ Ver las 31 granadas del lado CT de Inferno</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>💨 <strong>B Entrance</strong> · desde CT</summary>
        <p>tapa la salida de Banana para frenar un ataque a B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-xW7r3rJT5R/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-xW7r3rJT5R/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/b-entrance-from-ct" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1441.968628 2983.968750 192.032013;setang -16.613552 -148.700287 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Banana</strong> · desde Top Banana</summary>
        <p>Frena el avance de los T por Banana. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-molotov-MlqSqIhKzZ/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-molotov-MlqSqIhKzZ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/molotovs/banana-from-top-banana" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 772.065491 2129.185547 200.031311;setang -5.238741 -144.064240 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Top Banana</strong> · desde CT</summary>
        <p>Ciega a los T de Banana para que un CT se asome y los frene. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-flashbang-WKlPfFPtJo/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-flashbang-WKlPfFPtJo/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/flashbangs/top-banana-from-ct" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1148.031250 2798.269043 189.269714;setang -29.862030 -146.876907 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde CT Spawn</summary>
        <p>tapa Mid para que los T no avancen viéndote. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-AWr3PkVWhL/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-AWr3PkVWhL/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/top-mid-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 2552.343018 2193.372559 200.897049;setang -25.738585 -125.363625 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>B Entrance</strong> · desde CT</summary>
        <p>tapa la salida de Banana para frenar un ataque a B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-flashbang-4Ix0wGm24R/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-flashbang-4Ix0wGm24R/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/flashbangs/b-entrance-from-ct" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1313.968750 2645.031250 198.235046;setang -27.273563 -172.709259 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Front Graveyard</strong> · desde Arch</summary>
        <p>Tapa Front Graveyard. <em>Quieto, salto y soltás los dos clics.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-cNz4v6tVZQ/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-cNz4v6tVZQ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/front-graveyard-from-arch" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1964.952759 1235.968994 236.908630;setang -3.774652 -54.132935 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Half Wall</strong> · desde CT Spawn</summary>
        <p>Tapa Half Wall. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-82tBqZEL7f/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-82tBqZEL7f/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/half-wall-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 2537.322998 2468.384521 188.236343;setang -25.922775 -165.315002 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Moto</strong> · desde Pit</summary>
        <p>Tapa Moto. <em>Quieto, salto y soltás los dos clics.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-smoke-0vUqr9Rn5a/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-smoke-0vUqr9Rn5a/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/smokes/moto-from-pit" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 2628.968750 -305.993652 171.985352;setang -9.553870 99.839310 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>New Box</strong> · desde CT</summary>
        <p>Quema New Box: saca a quien está ahí o corta el paso. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-molotov-CNovcLQrNr/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-molotov-CNovcLQrNr/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/molotovs/new-box-from-ct" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1313.968750 2645.041260 198.234177;setang -17.534555 -179.065979 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Short</strong> · desde Pit</summary>
        <p>Ciega a quien está en Short; entrá o asomate justo cuando explota. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/inferno-flashbang-mFpDfFG9me/lq.mp4" poster="https://assets.csnades.gg/nades/inferno-flashbang-mFpDfFG9me/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/inferno/flashbangs/short-from-pit" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 2445.031250 -226.031250 162.775665;setang -10.608932 158.623093 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Inferno en una partida privada, caminá Banana de punta a punta diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Hacé lo mismo en A, entrando por Apartments, por Short y por Long, y anotá los 3 que más te costaron.",
    "Mirá el radar interactivo de Inferno en csdb.gg y anotá qué diferencia hay entre Apartments y CT Apartments.",
    "Practicá en tu servidor los humos, flashes y molotovs de Inferno con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Inferno con todos los callouts", url: "https://csdb.gg/maps/inferno/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "CSNADES.gg: todas las granadas de Inferno en un mapa interactivo (en inglés)", url: "https://csnades.gg/inferno/smokes" },
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
    { q: "Si vas a ejecutar B en Inferno desde Banana, ¿qué dos humos tiran primero?", opciones: ["Arch y Library","Pit y Boiler","CT y Coffins","Top Mid y Arch"], correcta: 2, explicacion: "CT y Coffins cortan las llegadas y el escondite de B. Arch tienta, pero es de A." },
    { q: "Si querés cortar la rotación de los CT que llegan a A desde CT spawn en Inferno, ¿qué humo tirás?", opciones: ["Arch","Coffins","CT (B)","Banana"], correcta: 0, explicacion: "Arch es el arco por donde llegan desde CT spawn. Coffins tienta, pero está en B." },
    { q: "Si en Inferno un CT suele esperar en el pozo al borde de A, ¿qué humo lo tapa?", opciones: ["Library","Boiler","Coffins","Pit"], correcta: 3, explicacion: "Pit es el pozo de A. Library tienta porque también es de A, pero es el cuarto que mira Long." },
    { q: "Si sos CT en Inferno y los T vienen por Banana, ¿qué humo los frena?", opciones: ["Top Mid","El de la entrada de B desde Banana","Pit","Arch"], correcta: 1, explicacion: "Tapa la salida de Banana y los demora. Top Mid tienta porque también es de los CT, pero tapa Mid." },
    { q: "Si vas a entrar a B en Inferno y un CT se esconde en New Box, ¿qué tirás antes?", opciones: ["Una flash a Top Mid","Una molotov a Banana","Una molotov a New Box","Un humo a Library"], correcta: 2, explicacion: "La molotov lo saca de la caja. Banana tienta, pero es por donde venís vos." },
    { q: "Si sos CT en Inferno y los T empujan Banana, ¿qué granada los demora?", opciones: ["Una molotov a Banana","Una molotov a Coffins","Una flash a Balcony","Un humo a Pit"], correcta: 0, explicacion: "El fuego en Banana les corta el paso. Coffins tienta, pero está detrás tuyo, en B." },
    { q: "Vas a salir de Apartments hacia A en Inferno. ¿Qué flash te ayuda?", opciones: ["La flash a Banana","Una molotov a New Box","Ninguna","La flash a Balcony"], correcta: 3, explicacion: "Ciega a los CT de Balcony y A. La de Banana tienta, pero es de los CT y está en B." },
    { q: "Si en Inferno ya tiraste humo a CT y Coffins sigue ocupado, ¿qué granada tirás?", opciones: ["Otra flash","Una molotov a Coffins","Una molotov a Banana","Un humo a Top Mid"], correcta: 1, explicacion: "La molotov saca al CT de los ataúdes. Otra flash tienta, pero no lo saca de ahí." },
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
    "Usar las granadas del lado T de Dust II: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Dust II para demorar y retomar",
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
    { titulo: "Granadas del lado T en Dust II", video: {"id":"SC6N2RcDQh4","t":"Granadas de Dust 2 que tenés que saber · juanch1 (16:26)"}, html: `
      <p class="idea">Dust II tiene 64 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>40</td></tr>
        <tr><td>⚡ Flashes</td><td>12</td></tr>
        <tr><td>🔥 Molotovs</td><td>8</td></tr>
        <tr><td>💥 Granadas HE</td><td>4</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#dust2/t">🗂️ Ver las 64 granadas del lado T de Dust II</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>💨 <strong>A Cross</strong> · desde Long Doors</summary>
        <p>Tapa el cruce de Long hacia A para pasar sin que te vean desde el sitio. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-dBt2lcA3vc/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-dBt2lcA3vc/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/a-cross-from-long-doors" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 860.031250 790.030640 65.400719;setang -25.430794 43.542336 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>A Long</strong> · desde Outside Long</summary>
        <p>Ciega al CT que mira Long cuando salís por Long Doors. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-flashbang-fxo3zoHNk1/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-flashbang-fxo3zoHNk1/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/flashbangs/a-long-from-outside-long" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 363.968750 -383.960327 66.726570;setang -7.039104 49.579628 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>B Site</strong> · desde Upper Tunnels</summary>
        <p>Ciega a los CT del sitio B al salir de Túneles. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-flashbang-la4c2Ujuhf/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-flashbang-la4c2Ujuhf/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/flashbangs/b-site-from-upper-tunnels-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1755.888306 1064.031250 96.814697;setang -19.773165 117.607086 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Window</strong> · desde Outside B Tunnels</summary>
        <p>Tapa la ventana de B, desde donde un CT mira la salida de Túneles. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-MtLiZmb0gQ/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-MtLiZmb0gQ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/b-window-from-outside-b-tunnels" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1332.026001 491.966980 72.031250;setang -49.104042 89.166710 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Car</strong> · desde Long Doors</summary>
        <p>Quema Car, el escondite de los CT al final de Long. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-molotov-5DagGMIZVm/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-molotov-5DagGMIZVm/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/molotovs/car-from-long-doors" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 847.597229 790.031250 111.035896;setang 5.790187 54.692131 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT Spawn</strong> · desde XBox</summary>
        <p>Tapa la vista desde CT hacia A cuando entrás por Short. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-XMJVOfP5Ca/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-XMJVOfP5Ca/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/ct-spawn-from-xbox" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -275.031250 1345.415039 -58.539078;setang -37.483829 131.785400 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Doors</strong> · desde Upper Tunnels</summary>
        <p>Tapa las puertas de B, por donde rotan los CT. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-7KwvY4vQcC/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-7KwvY4vQcC/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/b-doors-from-upper-tunnels-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1833.242920 1224.881836 96.114487;setang -66.117722 64.137291 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Back Plat</strong> · desde Upper Tunnels</summary>
        <p>Quema Back Plat, el escondite del fondo de B. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-molotov-kPIvLos51d/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-molotov-kPIvLos51d/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/molotovs/back-plat-from-upper-tunnels" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1936.968750 1042.031250 97.756500;setang -15.877525 94.012520 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💥 <strong>Back Plat</strong> · desde Upper Tunnels</summary>
        <p>Quema Back Plat, el escondite del fondo de B. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-he-t27wNMjp7J/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-he-t27wNMjp7J/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/hegrenades/back-plat-from-upper-tunnels" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1936.912354 1042.031250 97.757339;setang -14.833755 93.931503 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Long Corner</strong> · desde Outside A Long</summary>
        <p>Tapa la esquina de Long donde espera un CT. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-pOy1yKGuae/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-pOy1yKGuae/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/long-corner-from-outside-a-long" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 649.568481 -186.747192 61.964893;setang -37.637314 69.328232 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Mid Doors</strong> · desde T Spawn</summary>
        <p>Tapa las puertas de Mid, desde donde los CT miran todo Mid. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-bye3X5vLuZ/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-bye3X5vLuZ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/mid-doors-from-t-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -452.659668 -660.031799 174.561096;setang -10.086742 88.501434 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>XBox</strong> · desde T Spawn</summary>
        <p>Tapa Mid a la altura de Xbox para cruzar a Short o a B sin que te vea el AWP. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-pXWCQLmYhk/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-pXWCQLmYhk/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/xbox-from-t-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -507.981140 -662.065613 184.600830;setang -4.644310 84.623192 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para entrar a B desde Túneles, un compañero tira B Doors y otro B Window; los CT que rotan y el que mira desde la ventana quedan ciegos.</p>` },
    { titulo: "Granadas del lado CT en Dust II", html: `
      <p class="idea">Dust II tiene 26 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>9</td></tr>
        <tr><td>⚡ Flashes</td><td>7</td></tr>
        <tr><td>🔥 Molotovs</td><td>8</td></tr>
        <tr><td>💥 Granadas HE</td><td>2</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#dust2/ct">🗂️ Ver las 26 granadas del lado CT de Dust II</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>💨 <strong>Long Doors</strong> · desde Car</summary>
        <p>tapa las puertas de Long para frenar el avance por Long. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-rvINJHyhOX/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-rvINJHyhOX/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/long-doors-from-car" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1783.865845 2080.022705 67.510422;setang -7.305259 -132.512497 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Long Doors</strong> · desde CT Cross</summary>
        <p>Ciega a los T que pasan Long Doors para que un CT los frene. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-flashbang-QdybwmCUCl/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-flashbang-QdybwmCUCl/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/flashbangs/long-doors-from-ct-cross" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1249.811523 2038.031250 65.386116;setang -42.117085 -81.232803 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Under B Window</strong> · desde Scaffolding</summary>
        <p>Frena a los T que salen de Túneles hacia B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-molotov-LqvfCjoIgj/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-molotov-LqvfCjoIgj/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/molotovs/under-b-window-from-scaffolding" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1273.968750 2575.968750 128.820557;setang 0.807917 10.789516 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>A Long</strong> · desde CT Cross</summary>
        <p>Ciega a quien está en A Long; entrá o asomate justo cuando explota. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-flashbang-zGlAo2SYvZ/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-flashbang-zGlAo2SYvZ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/flashbangs/a-long-from-ct-cross" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1062.572021 2038.028687 65.760681;setang -42.486073 -177.904205 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💥 <strong>B Main</strong> · desde B Site</summary>
        <p>Le saca vida a quien está en B Main. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-he-H8IQJi6tVb/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-he-H8IQJi6tVb/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/hegrenades/b-main-from-b-site" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1662.777588 2737.276855 74.789261;setang -12.276122 -108.706360 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>B Site</strong> · desde CT Mid</summary>
        <p>Ciega a quien está en B Site; entrá o asomate justo cuando explota. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-flashbang-hvcI73urxV/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-flashbang-hvcI73urxV/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/flashbangs/b-site-from-ct-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -569.968811 2079.815674 -55.366653;setang -35.947418 170.926895 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Tunnels</strong> · desde CT Mid</summary>
        <p>Tapa B Tunnels. <em>Caminando, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-6dZH5zTBd9/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-6dZH5zTBd9/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/b-tunnels-from-ct-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -337.031372 2423.968750 -27.873589;setang -4.921763 -162.729691 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Bottom Mid</strong> · desde CT Mid</summary>
        <p>Tapa Bottom Mid. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-MrTSxptCeA/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-MrTSxptCeA/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/bottom-mid-from-ct-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -337.029907 2423.972168 -27.882072;setang -21.134802 -101.763184 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Bottom Mid</strong> · desde CT Mid</summary>
        <p>Ciega a quien está en Bottom Mid; entrá o asomate justo cuando explota. <em>Caminando, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-flashbang-BonRi7C4NT/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-flashbang-BonRi7C4NT/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/flashbangs/bottom-mid-from-ct-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -690.735168 2270.332764 -54.013802;setang -23.926960 -60.870724 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT Mid</strong> · desde CT Spawn</summary>
        <p>Tapa CT Mid. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/dust2-smoke-2dOJ9MUZUf/lq.mp4" poster="https://assets.csnades.gg/nades/dust2-smoke-2dOJ9MUZUf/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/dust2/smokes/ct-mid-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 289.397552 2377.309570 -56.760902;setang -5.441806 -141.804764 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Dust II en una partida privada, recorré Long y Short hasta A diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Recorré los túneles hasta B y anotá la diferencia entre Upper y Lower Tunnels con tus palabras.",
    "Mirá el radar interactivo de Dust II en csdb.gg y anotá dónde están Goose, Closet y Xbox.",
    "Practicá en tu servidor los humos, flashes y molotovs de Dust II con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Dust2 con todos los callouts", url: "https://csdb.gg/maps/dust2/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "CSNADES.gg: todas las granadas de Dust II en un mapa interactivo (en inglés)", url: "https://csnades.gg/dust2/smokes" },
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
    { q: "Si en Dust II querés cruzar Mid hacia Short sin que te vea el AWP, ¿qué humo tirás?", opciones: ["B Window","Long Corner","Xbox","B Doors"], correcta: 2, explicacion: "El humo en Xbox tapa Mid justo donde cruzás. B Window tienta, pero está en B." },
    { q: "Si vas a entrar a B en Dust II desde Túneles, ¿qué dos humos tiran?", opciones: ["B Doors y B Window","A Cross y CT Spawn","Xbox y Mid Doors","Long Corner y Long Doors"], correcta: 0, explicacion: "Tapan la rotación y la ventana de B. A Cross tienta, pero es de A." },
    { q: "Si vas a cruzar de Long hacia A en Dust II y te ven desde el sitio, ¿qué humo tirás?", opciones: ["B Doors","Mid Doors","Xbox","A Cross"], correcta: 3, explicacion: "A Cross tapa el cruce de Long a A. Mid Doors tienta, pero tapa Mid." },
    { q: "Si sos CT en Dust II y los T empujan Long, ¿qué humo los demora?", opciones: ["B Window","Long Doors","Xbox","Top Mid"], correcta: 1, explicacion: "Tapa las puertas de Long y frena el avance. Xbox tienta porque los CT la usan, pero es de Mid." },
    { q: "Si vas a salir por Long Doors en Dust II y un CT mira Long, ¿qué tirás?", opciones: ["Una molotov bajo B Window","La flash a B","La flash a Long","Un humo a B Doors"], correcta: 2, explicacion: "La flash lo ciega cuando salís. B Window tienta, pero es del otro lado del mapa." },
    { q: "Si en Dust II un CT se esconde en Car, al final de Long, ¿qué granada lo saca?", opciones: ["Una molotov a Car","Una flash a Long Doors","Una molotov a Back Plat","Un humo a Xbox"], correcta: 0, explicacion: "La molotov lo saca del escondite. Back Plat tienta, pero está en B." },
    { q: "Si sos CT en Dust II y los T salen de Túneles hacia B, ¿qué granada los frena?", opciones: ["Una molotov a Car","Una flash a Long","Un humo a Mid Doors","Una molotov bajo B Window"], correcta: 3, explicacion: "El fuego les corta la salida de Túneles. Car tienta, pero está en A." },
    { q: "Si vas a entrar a B en Dust II y un CT espera en el fondo de la plataforma, ¿qué tirás?", opciones: ["Una flash a Long","Una molotov a Back Plat","Una molotov a Car","Un humo a CT Spawn"], correcta: 1, explicacion: "Back Plat es ese escondite. Car tienta porque también es un escondite, pero está en A." },
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
    "Usar las granadas del lado T de Nuke: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Nuke para demorar y retomar",
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
    { titulo: "Granadas del lado T en Nuke", video: {"id":"HMxO4q0LUp0","t":"Todo lo que sé de Nuke · juanch1 (28:16)"}, html: `
      <p class="idea">Nuke tiene 51 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>32</td></tr>
        <tr><td>⚡ Flashes</td><td>7</td></tr>
        <tr><td>🔥 Molotovs</td><td>10</td></tr>
        <tr><td>💥 Granadas HE</td><td>2</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#nuke/t">🗂️ Ver las 51 granadas del lado T de Nuke</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>⚡ <strong>A Site</strong> · desde T Roof</summary>
        <p>Ciega a los CT del sitio A desde afuera. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-flashbang-cho7PEwNEj/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-flashbang-cho7PEwNEj/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/flashbangs/a-site-from-t-roof-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1.293061 -769.648621 -30.726929;setang 3.702358 13.680260 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Hut</strong> · desde Lobby</summary>
        <p>Ciega a los CT de A cuando entrás por Hut. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-flashbang-76fv0beqvt/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-flashbang-76fv0beqvt/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/flashbangs/hut-from-lobby-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 85.491196 -793.829590 -351.968750;setang -2.916612 -61.275227 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Hut Roof</strong> · desde Silo</summary>
        <p>Quema el techo de Hut y saca a quien espera ahí. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-molotov-eHZ28JYnl1/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-molotov-eHZ28JYnl1/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/molotovs/hut-roof-from-silo" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -19.397888 -1461.603760 17.179848;setang -11.131254 29.823231 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT Red</strong> · desde Under Silo</summary>
        <p>Tapa el contenedor rojo de los CT en Outside. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-EYwJuFOVfp/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-EYwJuFOVfp/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/ct-red-from-under-silo" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -141.270569 -1962.644165 -351.968750;setang -36.348190 17.487387 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Garage</strong> · desde Under Silo</summary>
        <p>Tapa Garage, el depósito de los CT que controla Outside. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-l3koCgeoHZ/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-l3koCgeoHZ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/garage-from-under-silo" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -308.972900 -1924.057251 -351.961548;setang -19.713923 0.360994 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Heaven</strong> · desde Silo</summary>
        <p>Tapa Heaven, la pasarela alta de los CT que mira A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-ZcYGFCKa39/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-ZcYGFCKa39/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/heaven-from-silo" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -19.661560 -1461.646362 17.167660;setang -21.658056 47.196793 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Heaven</strong> · desde T Roof</summary>
        <p>Saca al CT de Heaven, la pasarela alta sobre A. <em>Agachado caminando, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-molotov-mUn1lJ2406/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-molotov-mUn1lJ2406/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/molotovs/heaven-from-t-roof" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1.729591 -1008.001221 17.031250;setang -17.678331 26.685207 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Ramp</strong> · desde Trophy</summary>
        <p>Tapa Ramp para bajar hacia B sin que te vean los CT de abajo. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-GnMSqEPcto/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-GnMSqEPcto/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/ramp-from-trophy-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 251.968475 -352.282166 -351.968750;setang -8.553168 131.843216 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Secret Far</strong> · desde Under Silo</summary>
        <p>Tapa la llegada a Secret, la escalera que baja hacia B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-Sswwq7kpV9/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-Sswwq7kpV9/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/secret-far-from-under-silo" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -423.570129 -1752.576172 -351.968750;setang -22.229683 -16.962109 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>A Main</strong> · desde T Roof</summary>
        <p>Tapa A Main. <em>Quieto, salto y soltás los dos clics.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-EO2jbfxk5s/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-EO2jbfxk5s/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/a-main-from-t-roof" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -105.031250 -280.031250 -107.965271;setang -11.498542 -58.413708 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Ramp</strong> · desde Trophy</summary>
        <p>Tapa Ramp. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-PAOl9mzPQl/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-PAOl9mzPQl/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/ramp-from-trophy-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 251.968018 -463.702759 -351.968750;setang -1.627657 107.368484 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para cruzar Outside, desde Under Silo tiran Garage, CT Red y Secret; así el patio queda tapado del lado de los CT.</p>` },
    { titulo: "Granadas del lado CT en Nuke", html: `
      <p class="idea">Nuke tiene 20 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>5</td></tr>
        <tr><td>⚡ Flashes</td><td>4</td></tr>
        <tr><td>🔥 Molotovs</td><td>7</td></tr>
        <tr><td>💥 Granadas HE</td><td>4</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#nuke/ct">🗂️ Ver las 20 granadas del lado CT de Nuke</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>⚡ <strong>A Site</strong> · desde Heaven</summary>
        <p>Ciega a los T que entraron a A para retomar el sitio. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-flashbang-mhpJ9kzQys/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-flashbang-mhpJ9kzQys/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/flashbangs/a-site-from-heaven" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1269.968750 -459.968750 -63.960037;setang 12.714302 165.669373 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>A Site</strong> · desde Heaven</summary>
        <p>Ciega a los T que entraron a A para retomar el sitio. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-molotov-4XGlm57IfU/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-molotov-4XGlm57IfU/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/molotovs/a-site-from-heaven" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1259.968750 -471.968750 -63.968750;setang 2.208789 146.813156 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Squeaky</strong> · desde Heaven</summary>
        <p>Frena a los T que entran a A por Squeaky. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-smoke-QefmQzSwxJ/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-smoke-QefmQzSwxJ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/smokes/squeaky-from-heaven" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1011.644836 -457.968750 -63.968750;setang -8.194401 -120.156166 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Squeaky</strong> · desde Heaven</summary>
        <p>Frena a los T que entran a A por Squeaky. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/nuke-molotov-HW6ILrNXaY/lq.mp4" poster="https://assets.csnades.gg/nades/nuke-molotov-HW6ILrNXaY/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/nuke/molotovs/squeaky-from-heaven" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1008.136841 -457.968750 -63.968750;setang -1.044459 -120.541222 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Nuke en una partida privada, caminá de A a B por adentro (por Vents o Hell) y anotá cuántos segundos tardás.",
    "Recorré A y B diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "En el radar interactivo de Nuke de csdb.gg, anotá qué une Vents y qué une Secret.",
    "Practicá en tu servidor los humos, flashes y molotovs de Nuke con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Nuke con todos los callouts", url: "https://csdb.gg/maps/nuke/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "CSNADES.gg: todas las granadas de Nuke en un mapa interactivo (en inglés)", url: "https://csnades.gg/nuke/smokes" },
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
    { q: "Si en Nuke querés cruzar Outside, ¿qué humos tiran desde Under Silo?", opciones: ["Heaven, Squeaky y Ramp","Ramp y Heaven","Garage, CT Red y Secret","Squeaky y Garage"], correcta: 2, explicacion: "Esos tres tapan el lado CT del patio. Heaven tienta, pero mira A desde adentro." },
    { q: "Si atacás A en Nuke y el CT de la pasarela alta te mata siempre, ¿qué humo tirás?", opciones: ["Heaven","Garage","Ramp","CT Red"], correcta: 0, explicacion: "Heaven es la pasarela alta sobre A. Garage tienta, pero está afuera." },
    { q: "Si en Nuke vas a bajar por Ramp hacia B, ¿qué humo te cubre?", opciones: ["Heaven","Squeaky","Garage","Ramp, tirado desde Trophy"], correcta: 3, explicacion: "Tapa la rampa para que no te vean desde abajo. Squeaky tienta, pero es de A." },
    { q: "Si sos CT en Nuke y escuchás la puerta de Squeaky, ¿qué humo podés tirar desde Heaven?", opciones: ["Ramp","Squeaky","Secret","Garage"], correcta: 1, explicacion: "Tapa esa entrada a A. Ramp tienta, pero lleva a B." },
    { q: "Si en Nuke el CT de Heaven te mata siempre al entrar a A, ¿qué granada lo saca?", opciones: ["Una molotov a Squeaky","Una flash a Hut","Una molotov a Heaven","Un humo a Garage"], correcta: 2, explicacion: "El fuego lo obliga a salir de Heaven. Squeaky tienta, pero es una entrada de los T." },
    { q: "Vas a entrar a A por Hut en Nuke. ¿Qué flash usás?", opciones: ["La flash a Hut","La flash a A desde Heaven","Una molotov a Squeaky","Un humo a Ramp"], correcta: 0, explicacion: "Ciega a los CT de A cuando entrás. La de Heaven tienta, pero la tira un CT." },
    { q: "Si sos CT en Nuke y escuchás la puerta de Squeaky, ¿qué molotov tirás desde Heaven?", opciones: ["Una molotov a Heaven","Una molotov al techo de Hut","Una flash a Hut","Una molotov a Squeaky"], correcta: 3, explicacion: "Frena a los T en esa entrada. Heaven tienta, pero es donde estás vos." },
    { q: "Los T ya entraron a A en Nuke y vas a retomar el sitio desde Heaven. ¿Qué granada te ayuda?", opciones: ["Una molotov al techo de Hut","La flash a A desde Heaven","La flash a Hut","Un humo a Garage"], correcta: 1, explicacion: "Los ciega mientras bajás a retomar. La de Hut tienta, pero es de los T." },
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
    "Usar las granadas del lado T de Ancient: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Ancient para demorar y retomar",
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
    { titulo: "Granadas del lado T en Ancient", video: {"id":"8pgAZcTi3C8","t":"La guía de humos de Ancient, en inglés (se entiende mirando) · CS Tactics (15:46)"}, html: `
      <p class="idea">Ancient tiene 44 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>30</td></tr>
        <tr><td>⚡ Flashes</td><td>7</td></tr>
        <tr><td>🔥 Molotovs</td><td>5</td></tr>
        <tr><td>💥 Granadas HE</td><td>2</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#ancient/t">🗂️ Ver las 44 granadas del lado T de Ancient</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>🔥 <strong>A Default</strong> · desde A Main</summary>
        <p>Quema el lugar de plantar de A y saca al CT que espera ahí. <em>Caminando, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-molotov-YyXKTfxCYJ/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-molotov-YyXKTfxCYJ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/molotovs/a-default-from-a-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1963.893555 340.027344 152.031250;setang -17.625898 41.281429 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT</strong> · desde Outside A</summary>
        <p>Tapa la vista desde CT hacia el sitio A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-05JJVnP8AP/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-05JJVnP8AP/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/ct-from-outside-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1934.369507 -862.027649 49.846832;setang -43.344669 67.021294 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Mid</strong> · desde T Mid</summary>
        <p>Ciega a los CT de Mid para avanzar. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-flashbang-iBj71pjghV/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-flashbang-iBj71pjghV/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/flashbangs/mid-from-t-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1230.565552 -1044.031250 72.256172;setang -32.674026 52.203629 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Temple</strong> · desde Outside A</summary>
        <p>Tapa Temple, el pasaje de los CT con vista larga a Main. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-jRgHHBZPeJ/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-jRgHHBZPeJ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/temple-from-outside-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1769.358398 -1244.817993 30.066071;setang -28.685102 86.793671 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde T Spawn</summary>
        <p>Tapa la entrada de Mid de los T para salir de spawn sin que te vean. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-mhHNTLDnNw/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-mhHNTLDnNw/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/top-mid-from-t-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -632.027527 -2066.694580 -82.968750;setang -26.628780 86.980049 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Wood</strong> · desde B Door</summary>
        <p>Quema Wood, el escondite de madera de B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-molotov-PvGJh1kYQe/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-molotov-PvGJh1kYQe/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/molotovs/wood-from-b-door" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1159.968750 -919.187805 70.161575;setang -30.126890 137.418716 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>A Site</strong> · desde A Main</summary>
        <p>Ciega a los CT del sitio A cuando entrás por A Main. <em>Agachado y quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-flashbang-JkGrag9qfy/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-flashbang-JkGrag9qfy/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/flashbangs/a-site-from-a-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -2167.655762 -442.969238 138.859863;setang -9.330126 76.477852 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Back Alley</strong> · desde Ruins</summary>
        <p>Tapa el pasillo del fondo por donde llegan los CT a B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-T3Mseb88b9/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-T3Mseb88b9/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/back-alley-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 914.950989 -1479.970947 73.276695;setang -7.672632 83.737144 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Cave</strong> · desde Ruins</summary>
        <p>Tapa Cave, un ángulo de los CT del lado de B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-I7c4pmQBTz/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-I7c4pmQBTz/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/cave-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1255.968750 -1479.968750 83.832565;setang -11.334518 110.762878 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Donut Tunnel</strong> · desde Outside A</summary>
        <p>Tapa Donut, el cuarto redondo al lado de A que lleva a CT. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-0JpsvFLFbE/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-0JpsvFLFbE/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/donut-tunnel-from-outside-a" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1934.712646 -862.030884 49.697601;setang -32.102016 74.690254 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde Elbow</summary>
        <p>Tapa Top Mid para avanzar por Mid. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-hxqGWlgsf1/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-hxqGWlgsf1/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/top-mid-from-elbow" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1050.372925 -792.027771 98.125954;setang -55.200752 60.267784 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Alley</strong> · desde Ruins</summary>
        <p>Tapa B Alley. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-8Crp5Fa7w0/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-8Crp5Fa7w0/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/b-alley-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1255.968750 -1479.972534 83.790070;setang -11.477521 109.402702 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para ejecutar A, desde Outside A tiran CT, Temple y Donut; el sitio queda cortado de las tres llegadas de los CT.</p>` },
    { titulo: "Granadas del lado CT en Ancient", html: `
      <p class="idea">Ancient tiene 48 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>30</td></tr>
        <tr><td>⚡ Flashes</td><td>7</td></tr>
        <tr><td>🔥 Molotovs</td><td>6</td></tr>
        <tr><td>💥 Granadas HE</td><td>5</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#ancient/ct">🗂️ Ver las 48 granadas del lado CT de Ancient</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>💨 <strong>A Main</strong> · desde Big Box</summary>
        <p>tapa la entrada principal de A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-VUZHW05YXm/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-VUZHW05YXm/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/a-main-from-big-box" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1599.031250 1187.968750 116.031250;setang -13.472486 -120.882263 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Ramp</strong> · desde CT Spawn</summary>
        <p>tapa la rampa de entrada a B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-epkiyQGoi3/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-epkiyQGoi3/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/b-ramp-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -66.031250 1771.968262 99.075851;setang -39.098480 -56.059330 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Catwalk</strong> · desde Jaguar</summary>
        <p>Ciega a los T de Catwalk para que un CT se asome. <em>Quieto, los dos clics.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-flashbang-Xlcd9EZcP3/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-flashbang-Xlcd9EZcP3/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/flashbangs/catwalk-from-jaguar" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 519.968750 -413.031250 249.323669;setang -15.722957 -139.540604 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Elbow</strong> · desde Top Mid</summary>
        <p>Frena a los T que avanzan por Elbow hacia Mid. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-molotov-lTsgPwzQK4/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-molotov-lTsgPwzQK4/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/molotovs/elbow-from-top-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -476.031250 219.289505 231.593201;setang 11.243010 -117.693893 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Elbow</strong> · desde Top Mid</summary>
        <p>Frena a los T que avanzan por Elbow hacia Mid. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-smoke-8lGFrrndCd/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-smoke-8lGFrrndCd/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/smokes/elbow-from-top-mid" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -457.402466 302.031250 225.051682;setang -9.421242 -107.833420 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💥 <strong>Back Wood</strong> · desde B Site</summary>
        <p>Le saca vida a quien está en Back Wood. <em>Corriendo, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-he-FlsDDqzmmU/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-he-FlsDDqzmmU/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/hegrenades/back-wood-from-b-site" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 869.031250 82.968750 194.375809;setang 8.511572 -101.685608 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💥 <strong>Boost</strong> · desde B Long</summary>
        <p>Le saca vida a quien está en Boost. <em>Agachado caminando, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/ancient-he-C6KUoNbGPM/lq.mp4" poster="https://assets.csnades.gg/nades/ancient-he-C6KUoNbGPM/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/ancient/hegrenades/boost-from-b-long" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1234.009399 532.435547 186.971741;setang -13.740030 -93.763680 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Ancient en una partida privada, recorré A por Main y por Short diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Recorré B por Ramp y por Lamp Room, Dark y House, y anotá cuántos segundos tarda cada camino.",
    "En el radar interactivo de Ancient de csdb.gg, anotá la diferencia entre Tunnels y Tunnel.",
    "Practicá en tu servidor los humos, flashes y molotovs de Ancient con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Ancient con todos los callouts", url: "https://csdb.gg/maps/ancient/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "CSNADES.gg: todas las granadas de Ancient en un mapa interactivo (en inglés)", url: "https://csnades.gg/ancient/smokes" },
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
    { q: "Si vas a ejecutar A en Ancient desde Outside A, ¿qué tres humos tiran?", opciones: ["Cave, Back Alley y B Ramp","Top Mid y Cave","CT, Temple y Donut","A Main y B Ramp"], correcta: 2, explicacion: "Cortan las tres llegadas de los CT a A. Cave tienta, pero es del lado de B." },
    { q: "Si en Ancient querés avanzar por Mid, ¿qué humo tirás desde Elbow?", opciones: ["Top Mid","Temple","Cave","Donut"], correcta: 0, explicacion: "Top Mid tapa la parte alta de Mid. Donut tienta porque está cerca, pero es de A." },
    { q: "Si atacás B en Ancient desde Ruins, ¿qué humos tirás?", opciones: ["CT y Temple","Donut y Top Mid","A Main y Big Box","Cave y Back Alley"], correcta: 3, explicacion: "Tapan los ángulos de los CT del lado de B. Temple tienta, pero es de A." },
    { q: "Si sos CT en Ancient y los T vienen a B por la rampa, ¿qué humo los frena?", opciones: ["A Main","B Ramp","Temple","Donut"], correcta: 1, explicacion: "B Ramp es la entrada principal a B. A Main tienta porque también es de los CT, pero es de A." },
    { q: "Si vas a entrar a A en Ancient y un CT espera en el lugar de plantar, ¿qué tirás?", opciones: ["Una molotov a Elbow","La flash a Catwalk","Una molotov al default de A","Un humo a B Ramp"], correcta: 2, explicacion: "La molotov lo saca del default. Elbow tienta, pero es de Mid y la tiran los CT." },
    { q: "Si sos CT en Ancient y los T avanzan por Elbow, ¿qué granada los demora?", opciones: ["Una molotov a Elbow","Una molotov a Wood","La flash a A","Un humo a Temple"], correcta: 0, explicacion: "El fuego les corta Elbow. Wood tienta, pero está en B." },
    { q: "Si en Ancient un CT se esconde en la madera de B, ¿qué granada lo saca?", opciones: ["Una molotov a Elbow","La flash a Mid","Un humo a CT","Una molotov a Wood"], correcta: 3, explicacion: "Wood es ese escondite de B. Elbow tienta, pero es de Mid." },
    { q: "Vas a entrar a A por A Main en Ancient. ¿Qué flash te ayuda?", opciones: ["La flash a Catwalk","La flash a A","La flash a Mid","Una molotov a Wood"], correcta: 1, explicacion: "Ciega a los CT del sitio A. La de Catwalk tienta, pero es de los CT." },
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
    "Usar las granadas del lado T de Anubis: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Anubis para demorar y retomar",
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
    { titulo: "Granadas del lado T en Anubis", video: {"id":"B5l6BWLQEhk","t":"Anubis: todos los humos del lado T en menos de 2 minutos · Gus1to (1:41)"}, html: `
      <p class="idea">Anubis tiene 69 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>44</td></tr>
        <tr><td>⚡ Flashes</td><td>6</td></tr>
        <tr><td>🔥 Molotovs</td><td>15</td></tr>
        <tr><td>💥 Granadas HE</td><td>4</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#anubis/t">🗂️ Ver las 69 granadas del lado T de Anubis</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>⚡ <strong>A Site</strong> · desde Water</summary>
        <p>Ciega a los CT del sitio A cuando salís de Water. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-flashbang-8KStAVU76C/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-flashbang-8KStAVU76C/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/flashbangs/a-site-from-water" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 867.635498 678.730530 -124.821838;setang -6.906279 61.995499 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>A Site</strong> · desde Water</summary>
        <p>Ciega a los CT del sitio A cuando salís de Water. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-molotov-LkUACC9n4X/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-molotov-LkUACC9n4X/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/molotovs/a-site-from-water" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 744.028442 684.806702 -43.968750;setang 8.470527 76.739265 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>B Pillar</strong> · desde Ruins</summary>
        <p>Quema el pilar de B, donde se esconde un CT. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-molotov-Q7MyO6eFxS/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-molotov-Q7MyO6eFxS/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/molotovs/b-pillar-from-ruins-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1016.031250 -49.245483 64.031250;setang -54.588818 103.195366 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Site</strong> · desde Ruins</summary>
        <p>Ciega a los CT del sitio B cuando entrás desde Ruins. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-lhSKBRkXS1/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-lhSKBRkXS1/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/b-site-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1267.970581 -314.813599 68.040695;setang -25.042871 86.642555 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>B Site</strong> · desde Ruins</summary>
        <p>Ciega a los CT del sitio B cuando entrás desde Ruins. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-flashbang-7tUUJ7tcuY/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-flashbang-7tUUJ7tcuY/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/flashbangs/b-site-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1016.032288 -200.749329 64.031250;setang -48.450230 122.507690 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Connector</strong> · desde T Upper</summary>
        <p>Tapa Connector, el pasillo angosto entre Mid y A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-Qoj34RwWIE/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-Qoj34RwWIE/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/connector-from-t-upper" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1279.321045 571.968872 65.788254;setang -11.477298 125.519043 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT</strong> · desde Ruins</summary>
        <p>Tapa la llegada de los CT al sitio B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-AYQkrOmc0o/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-AYQkrOmc0o/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/ct-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1321.326416 -491.967651 161.128159;setang -35.326256 80.217430 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>EBox</strong> · desde Ruins</summary>
        <p>Tapa E-Box, el rincón por donde los CT cortan de Mid hacia B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-irru6YOyDc/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-irru6YOyDc/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/ebox-from-ruins" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1016.031250 -201.272644 64.031250;setang -48.091095 126.990288 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Heaven</strong> · desde T Upper</summary>
        <p>Tapa Heaven, la plataforma alta de los CT sobre A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-aQBt4qCxLI/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-aQBt4qCxLI/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/heaven-from-t-upper" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1493.968750 157.031250 64.031250;setang -20.233910 101.987717 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Plat</strong> · desde Water</summary>
        <p>Quema la plataforma de A donde espera un CT. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-molotov-z7jkEYnzy7/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-molotov-z7jkEYnzy7/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/molotovs/plat-from-water" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1069.971558 424.183197 -124.807922;setang -25.912531 105.622406 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde T Spawn</summary>
        <p>Tapa la entrada de Mid de los T para salir de spawn sin que te vean. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-RPRA6boGge/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-RPRA6boGge/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/top-mid-from-t-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -299.209717 -1723.965454 65.871246;setang -8.480664 80.715805 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Top Mid</strong> · desde T Spawn</summary>
        <p>Tapa la entrada de Mid de los T para salir sin que te vean. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-T1HaCXURLB/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-T1HaCXURLB/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/top-mid-from-t-spawn-b" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -299.410522 -1725.968872 69.240440;setang -12.882040 85.062614 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para ejecutar A, desde T Upper tiran Connector y Heaven; los CT de Mid y el de la plataforma alta quedan sin vista.</p>` },
    { titulo: "Granadas del lado CT en Anubis", html: `
      <p class="idea">Anubis tiene 15 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>5</td></tr>
        <tr><td>⚡ Flashes</td><td>4</td></tr>
        <tr><td>🔥 Molotovs</td><td>3</td></tr>
        <tr><td>💥 Granadas HE</td><td>3</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#anubis/ct">🗂️ Ver las 15 granadas del lado CT de Anubis</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>💨 <strong>Bridge</strong> · desde CT Spawn</summary>
        <p>tapa el puente de Mid. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-y4RgwsxY6Q/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-y4RgwsxY6Q/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/bridge-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -368.945068 2360.894531 88.031494;setang -31.763067 -82.266800 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>B Default</strong> · desde Sniper</summary>
        <p>Quema el lugar de plantar de B para que los T no puedan plantar. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-molotov-ut2lTA4iP7/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-molotov-ut2lTA4iP7/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/molotovs/b-default-from-sniper" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -1146.139038 1759.905029 112.031250;setang -8.399689 -92.140213 0.000000</code></pre>
      </details>
      <details class="granada"><summary>⚡ <strong>Bridge</strong> · desde Connector</summary>
        <p>Ciega a los T que cruzan Bridge para que un CT los frene. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-flashbang-BH8dveFz2t/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-flashbang-BH8dveFz2t/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/flashbangs/bridge-from-connector" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 379.972473 1199.472168 43.547852;setang -20.326710 -118.338989 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>B Main</strong> · desde CT Spawn</summary>
        <p>Tapa B Main. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/anubis-smoke-bfJHfp6fMc/lq.mp4" poster="https://assets.csnades.gg/nades/anubis-smoke-bfJHfp6fMc/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/anubis/smokes/b-main-from-ct-spawn" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -368.944580 2360.893311 88.031494;setang -19.499245 -119.051476 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Anubis en una partida privada, recorré A por Main y por Connector diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Recorré B Long hasta Gate y anotá desde dónde te podría ver un CT en Sniper.",
    "En el radar interactivo de Anubis de csdb.gg, anotá dónde están los dos Heaven del mapa.",
    "Practicá en tu servidor los humos, flashes y molotovs de Anubis con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Anubis con todos los callouts", url: "https://csdb.gg/maps/anubis/" },
    { t: "Wikipedia: lista de mapas competitivos de Counter-Strike (pool actual)", url: "https://en.wikipedia.org/wiki/List_of_competitive_Counter-Strike_maps" },
    { t: "CSNADES.gg: todas las granadas de Anubis en un mapa interactivo (en inglés)", url: "https://csnades.gg/anubis/smokes" },
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
    { q: "Si vas a ejecutar A en Anubis desde T Upper, ¿qué dos humos tiran?", opciones: ["E-Box y CT","Bridge y Top Mid","Connector y Heaven","E-Box y Bridge"], correcta: 2, explicacion: "Tapan el pasillo de Mid y la plataforma alta de A. E-Box tienta, pero corta hacia B." },
    { q: "Si en Anubis querés salir de spawn hacia Mid sin que te vean, ¿qué humo tirás?", opciones: ["Top Mid","Heaven","CT (B)","Connector"], correcta: 0, explicacion: "Top Mid es la entrada de Mid de los T. Connector tienta, pero está más adelante, hacia A." },
    { q: "Si atacás B en Anubis desde Ruins, ¿qué humos tirás?", opciones: ["Heaven y Connector","Bridge y Top Mid","Solo Heaven","E-Box y CT"], correcta: 3, explicacion: "Tapan el corte desde Mid y la llegada de los CT a B. Heaven tienta, pero mira A." },
    { q: "Si sos CT en Anubis y querés frenar a los T que cruzan Mid por arriba, ¿qué humo tirás?", opciones: ["Heaven","Bridge","E-Box","Connector"], correcta: 1, explicacion: "Bridge es el puente de Mid. Heaven tienta porque es de los CT, pero mira A." },
    { q: "Si vas a entrar a A en Anubis y un CT espera en la plataforma, ¿qué tirás?", opciones: ["Una molotov al default de B","La flash a Bridge","Una molotov a Plat","Un humo a E-Box"], correcta: 2, explicacion: "La molotov lo saca de la plataforma. El default de B tienta, pero está en el otro sitio." },
    { q: "Si sos CT en Anubis y los T ya están por plantar en B, ¿qué granada lo impide?", opciones: ["Una molotov al default de B","Una molotov a Plat","La flash a A","Un humo a Top Mid"], correcta: 0, explicacion: "Con fuego en el default no pueden plantar ahí. Plat tienta, pero está en A." },
    { q: "Si sos CT en Anubis y los T cruzan Bridge, ¿qué flash los frena?", opciones: ["La flash a B","La flash a A","Una molotov a Plat","La flash a Bridge"], correcta: 3, explicacion: "Los ciega mientras un compañero se asoma. La flash a B tienta, pero la tiran los T." },
    { q: "Si vas a entrar a B en Anubis y un CT se esconde detrás del pilar, ¿qué tirás?", opciones: ["Una molotov a Plat","Una molotov al pilar de B","La flash a Bridge","Un humo a Connector"], correcta: 1, explicacion: "El fuego lo saca del pilar. Plat tienta, pero está en A." },
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
    "Usar las granadas del lado T de Cache: humos, flashes y molotovs",
    "Usar las granadas del lado CT de Cache para demorar y retomar",
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
    { titulo: "Granadas del lado T en Cache", video: {"id":"ps2BgkrgnLQ","t":"Mejores humos de Cache en CS2 · Gukardo (3:47)"}, html: `
      <p class="idea">Cache tiene 24 granadas para los terroristas (T), que atacan y plantan la bomba. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>16</td></tr>
        <tr><td>⚡ Flashes</td><td>1</td></tr>
        <tr><td>🔥 Molotovs</td><td>6</td></tr>
        <tr><td>💥 Granadas HE</td><td>1</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#cache/t">🗂️ Ver las 24 granadas del lado T de Cache</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>⚡ <strong>A Main</strong> · desde A Main</summary>
        <p>Ciega a los CT de A cuando salís por A Main. <em>Quieto, los dos clics.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-flashbang-o4olV7R8Ht/lq.mp4" poster="https://assets.csnades.gg/nades/cache-flashbang-o4olV7R8Ht/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/flashbangs/a-main-from-a-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 791.918762 1125.982544 1764.000000;setang -31.201448 118.884308 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Back A Site</strong> · desde Outside Squeaky</summary>
        <p>Tapa el fondo del sitio A, junto a Quad. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-mMK97AyqvZ/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-mMK97AyqvZ/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/back-a-site-from-outside-squeaky" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1315.968750 1587.962524 1768.000000;setang -48.428482 -174.424484 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>CT</strong> · desde Sun Room</summary>
        <p>Tapa la llegada de los CT al sitio B. <em>Quieto, salto y soltás los dos clics.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-ORDvnr5ctw/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-ORDvnr5ctw/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/ct-from-sun-room" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 579.206726 -1449.947266 1676.265625;setang -2.874133 151.275269 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Forklift</strong> · desde A Main</summary>
        <p>Quema el autoelevador, la primera cobertura de los CT en A. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-55kRlH53et/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-55kRlH53et/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/forklift-from-a-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 648.612061 1429.871948 1764.000000;setang -2.659887 126.075340 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Forklift</strong> · desde A Main</summary>
        <p>Quema el autoelevador, la primera cobertura de los CT en A. <em>Corriendo, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-molotov-g13t86vkmg/lq.mp4" poster="https://assets.csnades.gg/nades/cache-molotov-g13t86vkmg/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/molotovs/forklift-from-a-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 556.878601 1427.987549 1764.031250;setang -2.751751 100.879852 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Forklift</strong> · desde Outside Squeaky</summary>
        <p>Tapa el autoelevador, la primera cobertura de los CT en A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-Bm0pxctIts/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-Bm0pxctIts/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/forklift-from-outside-squeaky" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1315.960083 1587.968750 1768.000000;setang -54.791935 -178.067902 0.000000</code></pre>
      </details>
      <details class="granada"><summary>🔥 <strong>Headshot</strong> · desde Sun Room</summary>
        <p>Quema Headshot, un rincón de los CT en B. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-molotov-T3MXIDeQHH/lq.mp4" poster="https://assets.csnades.gg/nades/cache-molotov-T3MXIDeQHH/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/molotovs/headshot-from-sun-room" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1074.631348 -1449.968750 1712.000000;setang 5.453262 172.243515 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Heaven</strong> · desde B Main</summary>
        <p>Tapa Heaven, la plataforma de madera de los CT sobre B. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-aHzkPliICo/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-aHzkPliICo/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/heaven-from-b-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 286.931183 -759.994812 1676.000000;setang -33.829708 137.568298 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Highway</strong> · desde Truck</summary>
        <p>Tapa Highway, la subida por donde rotan los CT de Mid a A. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-YayxoQ4qxh/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-YayxoQ4qxh/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/highway-from-truck" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1807.344727 701.968506 1672.000000;setang -35.406303 172.310226 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>NBK</strong> · desde Outside A Main</summary>
        <p>Tapa NBK, el rincón entre Squeaky y Quad donde espera un CT. <em>Quieto, salto y soltás el clic izquierdo (jump throw).</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-ACOsbzEdtx/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-ACOsbzEdtx/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/nbk-from-outside-a-main" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1282.158203 522.031250 1674.969116;setang -56.183327 131.607437 0.000000</code></pre>
      </details>
      <details class="granada"><summary>💨 <strong>Right Mid</strong> · desde Garage</summary>
        <p>Tapa un costado de Mid para avanzar desde Garage. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-0CRKYU9cDw/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-0CRKYU9cDw/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/right-mid-from-garage" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos 1731.186157 208.031250 1676.000000;setang -11.611091 173.967438 0.000000</code></pre>
      </details>
      <p>Por ejemplo, para ejecutar A, desde Outside Squeaky tiran Forklift y el fondo de A, y otro tira Highway desde Truck; quedan pocos rincones abiertos.</p>` },
    { titulo: "Granadas del lado CT en Cache", html: `
      <p class="idea">Cache tiene 12 granadas para los antiterroristas (CT), que defienden los sitios. Acá están las más usadas para empezar; todas las demás están en la guía de granadas.</p>
      <table>
        <tr><th>Tipo</th><th>Cuántas hay</th></tr>
        <tr><td>💨 Humos</td><td>10</td></tr>
        <tr><td>🔥 Molotovs</td><td>2</td></tr>
      </table>
      <p><a class="boton" href="granadas.html#cache/ct">🗂️ Ver las 12 granadas del lado CT de Cache</a></p>
      <p><strong>Para empezar</strong> (tocá cada una para ver su video, cómo se tira y su línea de consola):</p>
      <details class="granada"><summary>💨 <strong>A Main</strong> · desde Truck</summary>
        <p>tapa la entrada principal de A. <em>Quieto, clic izquierdo.</em></p>
        <figure class="video humo"><video src="https://assets.csnades.gg/nades/cache-smoke-B5bCYxZUEW/lq.mp4" poster="https://assets.csnades.gg/nades/cache-smoke-B5bCYxZUEW/thumbnail_small.webp" preload="none" controls muted playsinline></video><figcaption>Video: <a href="https://csnades.gg/cache/smokes/a-main-from-truck" target="_blank" rel="noopener">CSNADES.gg</a></figcaption></figure>
        <pre><code>setpos -916.031250 1082.854248 1751.368164;setang -21.871262 22.539627 0.000000</code></pre>
      </details>
      <p>Por ejemplo, del lado CT las granadas se usan para demorar: un humo o una molotov en la entrada que usan los T les hace perder segundos, y esos son los que necesitan tus compañeros para rotar.</p>` },
  ],
  practica: [
    "Abrí Cache en una partida privada, recorré A y B diciendo los callouts y anotá cuántos recordaste sin mirar.",
    "Cronometrá cuánto tarda un CT en ir de A a B por CT Halls y anotá los segundos.",
    "En el radar interactivo de Cache de csdb.gg, anotá qué une Vents y qué une Highway.",
    "Practicá en tu servidor los humos, flashes y molotovs de Cache con sus líneas setpos: tirá cada uno 5 veces y anotá cuántas veces cayó donde muestra el video.",
  ],
  recursos: [
    { t: "csdb.gg: radar interactivo de Cache con todos los callouts", url: "https://csdb.gg/maps/cache/" },
    { t: "Dot Esports: notas de la Temporada 5 de Premier (Cache entra, Overpass sale)", url: "https://dotesports.com/counter-strike/news/cs2-season-5-update-patch-notes" },
    { t: "CSNADES.gg: todas las granadas de Cache en un mapa interactivo (en inglés)", url: "https://csnades.gg/cache/smokes" },
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
    { q: "Si vas a ejecutar A en Cache, ¿qué humos tapan el sitio?", opciones: ["Heaven (B) y CT (B)","Solo Mid","Forklift, el fondo de A y Highway","A Main y Garage"], correcta: 2, explicacion: "Tapan la cobertura del sitio, el fondo y la rotación. Heaven (B) tienta, pero es de B." },
    { q: "Si en Cache querés cortar la rotación de los CT de Mid a A, ¿qué humo tirás?", opciones: ["Highway","Heaven (B)","CT (B)","Forklift"], correcta: 0, explicacion: "Highway es la subida de Mid a A. Forklift tienta, pero está en el sitio." },
    { q: "Si atacás B en Cache y el CT de la plataforma de madera te mata, ¿qué humo tirás?", opciones: ["Highway","NBK","Forklift","Heaven (B)"], correcta: 3, explicacion: "Heaven es la plataforma alta de B. NBK tienta, pero es un rincón de A." },
    { q: "Si sos CT en Cache y los T empujan por la entrada principal de A, ¿qué humo los demora?", opciones: ["Heaven (B)","A Main","Highway","Mid"], correcta: 1, explicacion: "Tapa la entrada principal de A. Highway tienta porque es de los CT, pero es la rotación desde Mid." },
    { q: "Si vas a entrar a A en Cache y un CT espera detrás del autoelevador, ¿qué tirás?", opciones: ["Una molotov a Headshot","Un humo a Heaven (B)","Una molotov a Forklift","Nada"], correcta: 2, explicacion: "La molotov lo saca de esa cobertura. Headshot tienta, pero está en B." },
    { q: "Si vas a salir por A Main en Cache, ¿qué flash te ayuda?", opciones: ["La flash de A Main","Una molotov a Headshot","Un humo a CT (B)","Ninguna"], correcta: 0, explicacion: "Ciega a los CT de A cuando salís. El humo a CT tienta, pero es de B." },
    { q: "Si vas a entrar a B en Cache desde Sun Room y un CT espera en Headshot, ¿qué tirás?", opciones: ["Una molotov a Forklift","La flash de A Main","Un humo a Highway","Una molotov a Headshot"], correcta: 3, explicacion: "Headshot es ese rincón de B. Forklift tienta, pero está en A." },
    { q: "Tirás la flash de A Main en Cache. ¿Cuándo salís?", opciones: ["Antes de tirarla","Justo cuando explota","Cuando se apaga el sonido del todo","Diez segundos después"], correcta: 1, explicacion: "Al explotar el rival no ve. Esperar tienta, pero recupera la vista enseguida." },
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
