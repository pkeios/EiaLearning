// Temario del curso "Soporte técnico: ayudar con computadoras y celulares". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js soporte-tecnico y node tools/metodologia.js soporte-tecnico
window.TEMARIO = [
{
  id: "empezar",
  icono: "🧰",
  titulo: "Qué hace el soporte técnico",
  nivel: "Básico",
  objetivos: [
    "Describir qué hace una persona de soporte y en qué nivel se resuelve cada problema",
    "Aplicar la regla de no empeorar las cosas antes de tocar un equipo",
    "Distinguir problemas de hardware, software, red y cuenta",
  ],
  lecciones: [
    { titulo: "El trabajo de soporte", html: `
      <p class="idea">Hacer <strong>soporte técnico</strong> es ayudar a otras personas a usar sus computadoras, celulares y programas, y resolver los problemas que tienen. Es un trabajo con mucha demanda: en oficinas, comercios, escuelas, o por tu cuenta con vecinos y familias.</p>
      <table>
        <tr><th>Nivel</th><th>Qué resuelve</th><th>Ejemplo</th></tr>
        <tr><td>Nivel 1 (primera línea)</td><td>Problemas comunes, con pasos conocidos</td><td>Contraseña olvidada, impresora que no imprime, wifi que no conecta</td></tr>
        <tr><td>Nivel 2</td><td>Problemas que piden más conocimiento</td><td>Reinstalar un programa, configurar una red</td></tr>
        <tr><td>Nivel 3 o especialista</td><td>Reparaciones o sistemas complejos</td><td>Cambiar una placa, servidores</td></tr>
      </table>
      <p><strong>Este curso es de nivel 1:</strong> lo que resuelve la mayoría de los problemas del día a día. Saber cuándo pasar al nivel siguiente también es parte del trabajo.</p>
      <p><strong>Lo que más importa no es saberlo todo,</strong> sino tener un método para encontrar la causa, tratar bien a la persona y no empeorar las cosas.</p>
      <p>Por ejemplo, en una oficina de 20 personas, la mayoría de los pedidos de una semana son contraseñas, impresoras, wifi y "la compu está lenta".</p>` },
    { titulo: "Primero, no empeorar", html: `
      <p class="idea">La primera regla del soporte es <strong>no empeorar las cosas</strong>. Un problema chico puede volverse grande si se borran datos o se tocan cosas sin entender.</p>
      <table>
        <tr><th>Antes de tocar</th><th>Por qué</th></tr>
        <tr><td>Preguntá si hay archivos importantes sin copia de seguridad</td><td>Algunos arreglos pueden borrar datos</td></tr>
        <tr><td>Anotá cómo estaba todo (o sacá una foto de la pantalla y los cables)</td><td>Para poder volver atrás</td></tr>
        <tr><td>Cambiá una sola cosa por vez</td><td>Si cambiás tres a la vez, no sabés cuál funcionó o cuál rompió</td></tr>
        <tr><td>No abras el equipo si no sabés</td><td>Riesgo eléctrico, garantía y piezas delicadas</td></tr>
        <tr><td>Pedí permiso antes de instalar o borrar</td><td>El equipo y los datos son de la persona</td></tr>
      </table>
      <p><strong>Restablecer de fábrica es el último recurso:</strong> borra todo. Solo con copia de seguridad hecha y comprobada.</p>
      <p class="aviso">Nunca abras una fuente de alimentación ni trabajes con el equipo enchufado por dentro. Las reparaciones eléctricas las hace un técnico especializado.</p>
      <p>Por ejemplo, restablecer el celular de fábrica para arreglar una app que falla puede borrar años de fotos si no había copia de seguridad.</p>` },
    { titulo: "Hardware, software, red y cuenta", video: {"id":"WSCvbZxMXMw","t":"Cuáles son las partes básicas de una computadora · LearnFree en Español (2:24)"}, html: `
      <p class="idea">Casi todos los problemas caen en uno de cuatro grupos. Saber en cuál está te ahorra la mitad del trabajo.</p>
      <table>
        <tr><th>Grupo</th><th>Qué es</th><th>Señales típicas</th></tr>
        <tr><td>Hardware</td><td>Las partes físicas: pantalla, teclado, disco, batería, cables</td><td>No prende, ruidos raros, pantalla rota, se calienta mucho</td></tr>
        <tr><td>Software</td><td>Los programas y el sistema operativo</td><td>Un programa se cierra solo, mensajes de error, lentitud</td></tr>
        <tr><td>Red</td><td>La conexión a internet o a otros equipos</td><td>No carga ninguna página, la impresora de red no aparece</td></tr>
        <tr><td>Cuenta</td><td>Usuarios, contraseñas y permisos</td><td>"Contraseña incorrecta", "no tenés permiso", cuenta bloqueada</td></tr>
      </table>
      <p><strong>El sistema operativo</strong> es el programa principal que hace funcionar el equipo: Windows o macOS en computadoras, Android o iOS en celulares.</p>
      <p><strong>Una pregunta que ayuda:</strong> ¿le pasa a un solo programa, a todo el equipo o a todos los equipos de la casa? Eso apunta a software, al equipo o a la red.</p>
      <p>Por ejemplo, si ninguna página carga en la compu, pero en el celular sí, el problema no es "internet" en general: está en la compu o en su conexión.</p>` },
  ],
  practica: [
    "Anotá 5 problemas técnicos que hayas tenido o visto y marcá a qué nivel de soporte corresponde cada uno.",
    "Escribí tu lista de \"antes de tocar\" con al menos 5 pasos y probala con un equipo real. Anotá cuál te costó cumplir.",
    "Clasificá 8 problemas en hardware, software, red o cuenta en una tabla. Anotá cuáles dudaste y por qué.",
  ],
  recursos: [
    { t: "GCFGlobal: cursos gratis de informática en español", url: "https://edu.gcfglobal.org/es/" },
    { t: "Soporte de Microsoft: ayuda de Windows", url: "https://support.microsoft.com/es-es/windows" },
  ],
  quiz: [
    { q: "Si alguien olvidó su contraseña del correo, ¿qué nivel de soporte suele resolverlo?", opciones: ["Nivel 3, un especialista","Nadie","Nivel 1, la primera línea","Un técnico de hardware"], correcta: 2, explicacion: "Es un problema común con pasos conocidos. El especialista tienta por \"seguridad\", pero es un trámite de primera línea." },
    { q: "Si un problema supera lo que sabés, ¿qué hacés?", opciones: ["Lo pasás al nivel siguiente, con lo que ya probaste anotado","Seguís probando cosas al azar","Le decís que no tiene arreglo","Abrís el equipo para ver"], correcta: 0, explicacion: "Escalar a tiempo es parte del trabajo. Probar al azar tienta por orgullo, pero puede empeorarlo." },
    { q: "Si vas a hacer un arreglo que puede borrar datos, ¿qué preguntás primero?", opciones: ["Qué color de fondo le gusta","Nada, se hace y listo","Cuánto le costó el equipo","Si hay archivos importantes sin copia de seguridad"], correcta: 3, explicacion: "Proteger los datos va primero. \"Se hace y listo\" tienta por rápido, pero lo perdido no vuelve." },
    { q: "Si cambiás tres cosas a la vez y se arregla, ¿qué problema tenés?", opciones: ["Ninguno","No sabés cuál de las tres lo arregló","Que tardaste menos","Que hiciste todo bien"], correcta: 1, explicacion: "Una cosa por vez muestra la causa. \"Ninguno\" tienta porque funciona, pero la próxima vez no vas a saber qué hacer." },
    { q: "Si una compu no prende y pensás abrir la fuente de alimentación, ¿qué hacés?", opciones: ["La abrís con cuidado","La abrís enchufada para ver si hay luz","No la abrís: es riesgo eléctrico y la reparación la hace un técnico especializado","Le echás aire con la boca"], correcta: 2, explicacion: "La fuente tiene riesgo eléctrico aun desenchufada. Abrirla con cuidado tienta, pero no es trabajo de nivel 1." },
    { q: "Si querés instalar un programa en la compu de otra persona, ¿qué hacés antes?", opciones: ["Le pedís permiso","Lo instalás sin decir nada","Lo instalás y lo escondés","Instalás varios por las dudas"], correcta: 0, explicacion: "El equipo es de la persona. Instalarlo sin decir nada tienta por ayudar rápido, pero no es tu decisión." },
    { q: "Si una app del celular falla, ¿restablecés de fábrica primero?", opciones: ["Sí, es lo más rápido","Sí, siempre funciona","Sí, sin preguntar","No: es el último recurso, porque borra todo"], correcta: 3, explicacion: "Restablecer borra todo. \"Lo más rápido\" tienta, pero hay pasos más simples antes y sin perder datos." },
    { q: "Si la pantalla está rota, ¿a qué grupo pertenece el problema?", opciones: ["Software","Hardware","Red","Cuenta"], correcta: 1, explicacion: "Es una parte física. Software tienta porque la pantalla muestra programas, pero el problema es el vidrio." },
    { q: "Si aparece \"no tenés permiso para abrir esta carpeta\", ¿a qué grupo pertenece?", opciones: ["Hardware","Red","Cuenta: usuarios y permisos","Batería"], correcta: 2, explicacion: "Los permisos son de la cuenta. Red tienta si la carpeta está compartida, pero el mensaje habla de permisos." },
    { q: "Si ninguna página carga en la compu, pero en el celular sí con el mismo wifi, ¿qué concluís?", opciones: ["Que el problema está en la compu o en su conexión, no en internet en general","Que se cortó internet","Que el celular está roto","Que hay que cambiar el router"], correcta: 0, explicacion: "Si otro equipo funciona, internet llega. \"Se cortó internet\" tienta, pero el celular lo desmiente." },
    { q: "Si querés saber si es un problema de un programa, del equipo o de la red, ¿qué preguntás?", opciones: ["Qué marca es","Cuántos años tiene","Si le gusta el equipo","Si le pasa a un programa, a todo el equipo o a todos los equipos"], correcta: 3, explicacion: "La pregunta separa los grupos. La marca tienta, pero no dice dónde está el problema." },
    { q: "Si alguien te pregunta qué es Android, ¿qué le contestás?", opciones: ["Una app de juegos","Un sistema operativo: el programa principal que hace funcionar el celular","Una marca de celular","Un virus"], correcta: 1, explicacion: "Android es un sistema operativo. \"Una marca\" tienta porque aparece en muchos celulares, pero lo usan varias marcas." },
  ],
},
{
  id: "diagnosticar",
  icono: "🔍",
  titulo: "Diagnosticar con método",
  nivel: "Básico",
  objetivos: [
    "Hacer las preguntas que encuentran la causa de un problema",
    "Reproducir y aislar un problema cambiando una cosa por vez",
    "Buscar un mensaje de error en fuentes confiables",
  ],
  lecciones: [
    { titulo: "Las preguntas que encuentran la causa", html: `
      <p class="idea">Antes de tocar nada, preguntá. Las respuestas suelen apuntar directo a la causa. Las preguntas más útiles son <strong>qué pasa, desde cuándo y qué cambió</strong>.</p>
      <table>
        <tr><th>Pregunta</th><th>Por qué sirve</th></tr>
        <tr><td>¿Qué pasa exactamente? ¿Aparece algún mensaje?</td><td>"No anda" no dice nada; el mensaje exacto sí</td></tr>
        <tr><td>¿Desde cuándo?</td><td>Ubica el problema en el tiempo</td></tr>
        <tr><td>¿Qué cambió antes? (una actualización, un programa nuevo, una mudanza)</td><td>La mayoría de los problemas aparecen después de un cambio</td></tr>
        <tr><td>¿Pasa siempre o a veces?</td><td>Lo que pasa a veces es más difícil y hay que observarlo</td></tr>
        <tr><td>¿Le pasa a alguien más?</td><td>Si les pasa a todos, es la red o un servicio</td></tr>
        <tr><td>¿Ya probaste algo?</td><td>Para no repetir y saber qué se tocó</td></tr>
      </table>
      <p><strong>Pedí que te muestre:</strong> ver a la persona hacer los pasos muchas veces revela el problema, como un botón equivocado.</p>
      <p>Por ejemplo, "la impresora no anda" pasa a ser "desde que cambiamos el router, la impresora no aparece en la red", y esa respuesta ya dice dónde mirar.</p>` },
    { titulo: "Reproducir, aislar y probar", video: {"id":"9sp93nhwPl4","t":"Cómo diagnosticar problemas de hardware y software en la PC · Mira Cómo Se Hace (5:12)"}, html: `
      <p class="idea">Un buen diagnóstico sigue pasos: <strong>reproducir</strong> el problema (hacerlo pasar a propósito), <strong>aislar</strong> la parte que falla y <strong>probar</strong> una solución por vez.</p>
      <pre><code>1. Reproducir:  hacer que el problema pase delante de vos
2. Aislar:      ir descartando partes
                ¿otro programa? ¿otro usuario? ¿otro cable? ¿otro equipo?
3. Hipótesis:   "creo que es el cable"
4. Probar:      cambiar SOLO el cable
5. Verificar:   ¿se fue el problema? ¿volvió a pasar?
6. Anotar:      qué era y qué lo arregló</code></pre>
      <table>
        <tr><th>Para aislar, cambiá...</th><th>Ejemplo</th></tr>
        <tr><td>El programa</td><td>¿El sonido falla en todos los programas o solo en uno?</td></tr>
        <tr><td>La parte</td><td>¿Con otros auriculares funciona?</td></tr>
        <tr><td>El lugar</td><td>¿Con otro enchufe o en otro puerto USB?</td></tr>
        <tr><td>El usuario</td><td>¿Con otra cuenta en la misma compu pasa lo mismo?</td></tr>
      </table>
      <p><strong>Reiniciar funciona seguido</strong> porque cierra programas trabados y vuelve a empezar limpio. Probalo temprano, pero anotá si el problema vuelve: si vuelve, hay una causa que encontrar.</p>
      <p>Por ejemplo, si el sonido no anda con unos auriculares, pero sí con otros en el mismo puerto, el problema son los auriculares, no la compu.</p>` },
    { titulo: "Buscar el error", html: `
      <p class="idea">Casi todos los problemas ya le pasaron a alguien. Buscar el <strong>mensaje de error exacto</strong> en fuentes confiables es una de las habilidades más útiles del soporte.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Copiar el mensaje exacto entre comillas</td><td>Buscar "la compu no anda"</td></tr>
        <tr><td>Sumar el sistema y el programa: "Windows 11 impresora error 0x00000709"</td><td>Buscar sin decir qué equipo es</td></tr>
        <tr><td>Preferir las páginas de ayuda oficiales (Microsoft, Google, Apple, el fabricante)</td><td>Descargar "programas que arreglan todo"</td></tr>
        <tr><td>Leer la fecha: las soluciones viejas pueden no servir</td><td>Seguir pasos de un video sin entenderlos</td></tr>
      </table>
      <p><strong>Sacá una foto o captura</strong> del mensaje cuando aparece: muchas personas lo cierran y después no se acuerdan de qué decía.</p>
      <p><strong>Cuidado con los "optimizadores":</strong> muchos programas que prometen acelerar o arreglar todo traen publicidad o software malicioso. El curso "Seguridad digital y estafas" de este sitio explica cómo reconocerlos.</p>
      <p>Por ejemplo, buscar el código de error exacto que muestra Windows suele llevar a la página de ayuda de Microsoft con la solución; buscar "error impresora" lleva a miles de páginas que no tienen que ver.</p>` },
  ],
  practica: [
    "Escribí las 6 preguntas de diagnóstico y usalas con una persona que tenga un problema real. Anotá qué respuesta te dio la pista principal.",
    "Elegí un problema y seguí los 6 pasos (reproducir, aislar, hipótesis, probar, verificar, anotar). Anotá qué cambiaste en cada prueba.",
    "Buscá un mensaje de error real entre comillas con el nombre del sistema. Anotá las 3 primeras fuentes y cuál es oficial.",
  ],
  recursos: [
    { t: "Soporte de Microsoft: ayuda de Windows", url: "https://support.microsoft.com/es-es/windows" },
    { t: "Ayuda de Android (Google)", url: "https://support.google.com/android/?hl=es" },
    { t: "Soporte de Apple: iPhone", url: "https://support.apple.com/es-es/iphone" },
  ],
  quiz: [
    { q: "Si alguien te dice \"la compu no anda\", ¿qué preguntás primero?", opciones: ["Cuánto le costó","Si la quiere cambiar","Qué pasa exactamente y si aparece algún mensaje","Nada, empezás a tocar"], correcta: 2, explicacion: "\"No anda\" no dice nada: el detalle sí. Empezar a tocar tienta por resolver rápido, pero sin saber qué buscás." },
    { q: "Si un problema empezó justo después de una actualización, ¿qué te dice?", opciones: ["Que la actualización es una buena pista de la causa","Nada","Que es un virus seguro","Que hay que tirar el equipo"], correcta: 0, explicacion: "Lo que cambió antes suele ser la causa. \"Virus seguro\" tienta por dramático, pero no hay pruebas." },
    { q: "Si el problema les pasa a todos en la oficina, ¿hacia dónde mirás?", opciones: ["A la compu de una persona","Al teclado de cada uno","A la pantalla","A la red o a un servicio compartido"], correcta: 3, explicacion: "Si les pasa a todos, es algo común. Una compu sola tienta, pero no explica que falle en todas." },
    { q: "Si la persona dice que \"ya probó todo\", ¿qué hacés?", opciones: ["Le creés y te vas","Le preguntás qué probó exactamente, para no repetir y saber qué tocó","Empezás de nuevo sin preguntar","Le decís que no sabe"], correcta: 1, explicacion: "Saber qué se tocó evita sorpresas. Empezar de nuevo tienta, pero perdés información útil." },
    { q: "Si no entendés qué hace la persona cuando falla, ¿qué pedís?", opciones: ["Que te lo cuente de memoria","Que se vaya","Que te muestre los pasos","Que lo haga más rápido"], correcta: 2, explicacion: "Ver los pasos revela errores que no se cuentan. De memoria tienta, pero se olvidan detalles." },
    { q: "Si querés confirmar el problema antes de arreglarlo, ¿qué hacés?", opciones: ["Lo reproducís: lo hacés pasar delante de vos","Lo arreglás sin verlo","Lo adivinás","Esperás a que vuelva a pasar solo"], correcta: 0, explicacion: "Reproducirlo confirma qué falla. Arreglar sin verlo tienta, pero podés arreglar otra cosa." },
    { q: "Si el sonido falla con unos auriculares, pero no con otros en el mismo puerto, ¿qué concluís?", opciones: ["Que es la compu","Que es el puerto","Que es Windows","Que el problema son los primeros auriculares"], correcta: 3, explicacion: "Cambiando una parte aislaste la falla. \"Es la compu\" tienta, pero con otros auriculares funciona." },
    { q: "Si querés saber si un problema es del usuario o de la compu, ¿qué probás?", opciones: ["Cambiar el monitor","Entrar con otra cuenta en la misma compu","Comprar otra compu","Cambiar el fondo de pantalla"], correcta: 1, explicacion: "Cambiar de cuenta aísla el usuario. Cambiar el monitor tienta porque es fácil, pero no separa usuario y compu." },
    { q: "Si reiniciar arregla el problema, pero vuelve al día siguiente, ¿qué concluís?", opciones: ["Que ya está arreglado","Que hay que reiniciar todos los días para siempre","Que hay una causa de fondo que todavía hay que encontrar","Que no tiene arreglo"], correcta: 2, explicacion: "Si vuelve, la causa sigue. \"Reiniciar siempre\" tienta porque funciona, pero esconde el problema." },
    { q: "Si aparece un mensaje de error, ¿cómo lo buscás?", opciones: ["Entre comillas, exacto, con el sistema y el programa","Con \"la compu no anda\"","Sin decir qué equipo es","No lo buscás"], correcta: 0, explicacion: "El mensaje exacto lleva a la solución. \"La compu no anda\" tienta por simple, pero da miles de resultados que no sirven." },
    { q: "Si encontrás una solución en un foro y otra en la ayuda oficial de Microsoft, ¿cuál preferís?", opciones: ["La del foro, porque es más corta","La más vieja","La que pide descargar un programa","La ayuda oficial"], correcta: 3, explicacion: "La ayuda oficial es más confiable. La corta tienta, pero puede estar mal o vieja." },
    { q: "Si un sitio te ofrece un programa que \"acelera y arregla todo\", ¿qué hacés?", opciones: ["Lo instalás enseguida","Desconfiás: muchos traen publicidad o software malicioso","Lo instalás en todas las compus","Le das tus datos"], correcta: 1, explicacion: "Las promesas mágicas son una alarma. Instalarlo tienta porque promete resolver, pero puede empeorar todo." },
  ],
},
{
  id: "compu",
  icono: "💻",
  titulo: "Problemas comunes de la computadora",
  nivel: "Intermedio",
  objetivos: [
    "Encontrar qué hace lenta una computadora con el Administrador de tareas",
    "Resolver problemas de encendido e impresoras con pasos ordenados",
    "Hacer y probar una copia de seguridad",
  ],
  lecciones: [
    { titulo: "La compu está lenta", html: `
      <p class="idea">"Está lenta" es el pedido más común. Casi siempre es por una de estas causas: poco espacio en el disco, demasiados programas abiertos o al inicio, o actualizaciones pendientes.</p>
      <table>
        <tr><th>Revisá</th><th>Cómo (en Windows)</th></tr>
        <tr><td>Qué consume recursos</td><td>Administrador de tareas: Ctrl + Shift + Esc, pestaña Procesos</td></tr>
        <tr><td>Programas que arrancan solos</td><td>Administrador de tareas, pestaña Aplicaciones de arranque (o Inicio)</td></tr>
        <tr><td>Espacio en el disco</td><td>Configuración → Sistema → Almacenamiento</td></tr>
        <tr><td>Actualizaciones</td><td>Configuración → Windows Update</td></tr>
      </table>
      <pre><code>Disco de 256 GB con 240 GB usados:
Libre = 256 - 240 = 16 GB
% libre = 16 / 256 × 100 = 6,25%  → muy poco

Conviene tener al menos 15% libre (unos 38 GB en este disco).</code></pre>
      <p><strong>Para liberar espacio:</strong> vaciar la papelera, borrar descargas viejas (preguntando), desinstalar programas que no se usan y mover fotos y videos a un disco externo o a la nube.</p>
      <p><strong>Si después de todo sigue lenta,</strong> puede ser el equipo: poca memoria RAM o un disco viejo. Ahí la solución es una mejora de hardware y eso ya es nivel 2.</p>
      <p>Por ejemplo, una compu con 12 programas que arrancan solos tarda minutos en estar lista; desactivar los que no hacen falta al inicio la acelera sin borrar nada.</p>` },
    { titulo: "No prende o la impresora no imprime", html: `
      <p class="idea">Para los problemas de hardware y periféricos (impresora, mouse, monitor), empezá siempre por lo más simple: cables, energía y luces.</p>
      <pre><code>LA COMPU NO PRENDE
1. ¿Está enchufada? Probá otro enchufe o sin la zapatilla.
2. ¿Prende alguna luz? ¿Hace ruido el ventilador?
3. Si es notebook: ¿carga la batería? Probá con el cargador.
4. Si prende pero no hay imagen: revisá el cable del monitor
   y que el monitor esté encendido y en la entrada correcta.
5. Si nada de esto: es para un técnico (nivel 2 o 3).

LA IMPRESORA NO IMPRIME
1. ¿Está prendida, con papel, tinta y sin error en su pantalla?
2. ¿Está conectada (cable o la misma red wifi)?
3. Revisá la cola de impresión: si hay un documento trabado,
   cancelalo y volvé a imprimir.
4. Reiniciá la impresora y la compu.
5. Reinstalá el controlador desde la página del fabricante.</code></pre>
      <p><strong>El controlador</strong> (o driver) es el programa que permite que la compu se entienda con un aparato, como una impresora. Bajalo solo de la página oficial del fabricante.</p>
      <p>Por ejemplo, un documento trabado en la cola de impresión bloquea todos los que vienen detrás: se cancela y la impresora vuelve a andar.</p>` },
    { titulo: "La copia de seguridad", video: {"id":"07HKVG5zAAg","t":"Cómo hacer un respaldo de archivos y carpetas en un disco externo · Cómo hacer (3:44)"}, html: `
      <p class="idea">Una <strong>copia de seguridad</strong> (o backup) es una copia de los archivos importantes en otro lugar. Es lo único que salva los datos cuando un disco se rompe, se pierde el equipo o hay un virus.</p>
      <pre><code>La regla 3-2-1:
3 copias de los datos importantes (el original y 2 copias)
2 tipos de lugar distintos (por ejemplo, disco externo y nube)
1 copia fuera de casa o de la oficina (por ejemplo, la nube)</code></pre>
      <table>
        <tr><th>Dónde</th><th>Ventaja</th><th>Cuidado</th></tr>
        <tr><td>Disco externo o pendrive</td><td>Rápido, sin internet</td><td>Se puede perder o romper junto con la compu</td></tr>
        <tr><td>Nube (OneDrive, Google Drive, iCloud)</td><td>Está fuera de casa y se sincroniza sola</td><td>Necesita internet y tiene un espacio gratis limitado</td></tr>
      </table>
      <p><strong>Una copia que nunca probaste no es una copia:</strong> cada tanto, abrí algunos archivos desde la copia para comprobar que se pueden recuperar.</p>
      <p><strong>Windows</strong> tiene su propia herramienta de copias de seguridad (ver recursos).</p>
      <p>Por ejemplo, una contadora con todo en el disco de su notebook pierde años de trabajo si se la roban; con la regla 3-2-1, recupera todo en un día.</p>` },
  ],
  practica: [
    "Abrí el Administrador de tareas en una compu con Windows y anotá los 3 programas que más memoria usan y cuántos arrancan solos.",
    "Calculá el % libre del disco de una compu (espacio libre / total × 100). Anotá si está por debajo del 15%.",
    "Hacé una copia de seguridad de una carpeta en un disco externo o en la nube y probá recuperar 2 archivos. Anotá cuánto tardó.",
  ],
  recursos: [
    { t: "Soporte de Microsoft: ayuda de Windows", url: "https://support.microsoft.com/es-es/windows" },
    { t: "Soporte de Microsoft: copias de seguridad de Windows", url: "https://support.microsoft.com/es-es/windows/haga-una-copia-de-seguridad-de-su-pc-con-windows-87a81f8a-78fa-456e-b521-ac0560e32338" },
    { t: "GCFGlobal: cursos gratis de informática en español", url: "https://edu.gcfglobal.org/es/" },
  ],
  quiz: [
    { q: "Si querés ver qué programa está haciendo lenta la compu con Windows, ¿qué abrís?", opciones: ["El bloc de notas","El navegador","El Administrador de tareas (Ctrl + Shift + Esc)","La papelera"], correcta: 2, explicacion: "El Administrador de tareas muestra qué consume recursos. El navegador tienta porque suele ser pesado, pero no te muestra todo." },
    { q: "Si un disco de 256 GB tiene 240 GB usados, ¿qué % está libre?", opciones: ["Cerca de 6%","94%","16%","60%"], correcta: 0, explicacion: "16 / 256 × 100 = 6,25%. 94% tienta porque es lo usado, no lo libre." },
    { q: "Si el disco tiene 6% libre, ¿qué hacés?", opciones: ["Nada, es normal","Instalás más programas","Formateás sin preguntar","Liberás espacio: papelera, descargas viejas, programas sin uso, mover fotos a otro lado"], correcta: 3, explicacion: "Con menos de 15% libre, la compu se pone lenta. Formatear tienta por drástico, pero borra todo." },
    { q: "Si la compu tarda minutos en arrancar y tiene 12 programas que arrancan solos, ¿qué probás?", opciones: ["Desinstalar Windows","Desactivar los que no hacen falta al inicio","Comprar otra compu ya","Dejarla prendida siempre"], correcta: 1, explicacion: "Menos programas al inicio, arranque más rápido. Comprar otra tienta, pero el problema se arregla sin gastar." },
    { q: "Si después de liberar espacio y ordenar el inicio la compu sigue lenta, ¿qué puede ser?", opciones: ["Un problema de la cuenta","El fondo de pantalla","El equipo: poca memoria RAM o un disco viejo, que ya es nivel 2","Nada, está bien"], correcta: 2, explicacion: "Cuando el software está ordenado, queda el hardware. \"Está bien\" tienta, pero la persona sigue con el problema." },
    { q: "Si una compu no prende, ¿qué revisás primero?", opciones: ["Que esté enchufada, probar otro enchufe y si prende alguna luz","Abrir la fuente","Reinstalar Windows","Cambiar la placa"], correcta: 0, explicacion: "Lo más simple primero. Reinstalar tienta, pero si no prende no se puede ni empezar." },
    { q: "Si la compu prende, pero el monitor no muestra imagen, ¿qué revisás?", opciones: ["La impresora","El wifi","La contraseña","El cable del monitor, que esté encendido y en la entrada correcta"], correcta: 3, explicacion: "Sin imagen, mirá la conexión del monitor. El wifi tienta porque se revisa seguido, pero no tiene que ver." },
    { q: "Si la impresora no imprime y hay un documento trabado en la cola, ¿qué hacés?", opciones: ["Comprás otra impresora","Lo cancelás y volvés a imprimir","Mandás el documento 10 veces más","Desenchufás la compu"], correcta: 1, explicacion: "El documento trabado bloquea los demás. Mandarlo otra vez tienta, pero se suma a la cola trabada." },
    { q: "Si tenés que instalar el controlador de una impresora, ¿de dónde lo bajás?", opciones: ["De cualquier sitio que aparezca primero","De un mail que te llegó","De la página oficial del fabricante","De un pendrive de un desconocido"], correcta: 2, explicacion: "La página oficial es segura. El primer sitio tienta por rápido, pero puede traer software malicioso." },
    { q: "Si querés aplicar la regla 3-2-1, ¿cuántas copias tenés?", opciones: ["3: el original y 2 copias, en 2 tipos de lugar y 1 fuera de casa","1","2 en el mismo disco","3 en la misma compu"], correcta: 0, explicacion: "La regla reparte el riesgo. Dos en el mismo disco tienta, pero si se rompe el disco perdés las dos." },
    { q: "Si guardás la copia en un disco externo que está siempre al lado de la notebook, ¿qué riesgo hay?", opciones: ["Ninguno","Que el disco se llene","Que la notebook vaya más lenta","Que se pierdan o roben juntos"], correcta: 3, explicacion: "Por eso la regla pide una copia fuera de casa. \"Ninguno\" tienta, pero un robo se lleva las dos cosas." },
    { q: "Si hiciste una copia de seguridad hace un año y nunca la abriste, ¿qué hacés?", opciones: ["Confiás en que está bien","La probás recuperando algunos archivos","La borrás","No hacés nada"], correcta: 1, explicacion: "Una copia sin probar puede fallar. Confiar tienta, pero recién te enterás el día que la necesitás." },
  ],
},
{
  id: "celular",
  icono: "📱",
  titulo: "Problemas comunes del celular",
  nivel: "Intermedio",
  objetivos: [
    "Liberar espacio en un celular sin perder datos importantes",
    "Resolver una app que falla con pasos de menor a mayor",
    "Ayudar a recuperar el acceso a una cuenta de Google o Apple",
  ],
  lecciones: [
    { titulo: "Sin espacio y sin batería", video: {"id":"_KMy_W6riMw","t":"Cómo liberar espacio en Android paso a paso · El Rincón de Cabra (8:01)"}, html: `
      <p class="idea">"No tengo espacio" y "la batería no me dura" son los pedidos más comunes con celulares. Los dos tienen pasos simples antes de pensar en cambiar el equipo.</p>
      <table>
        <tr><th>Sin espacio</th><th>Cómo</th></tr>
        <tr><td>Ver qué ocupa más</td><td>Configuración → Almacenamiento</td></tr>
        <tr><td>Fotos y videos</td><td>Subirlos a la nube o a una compu y después borrarlos del celular</td></tr>
        <tr><td>Archivos de WhatsApp</td><td>En WhatsApp: Configuración → Almacenamiento y datos → Administrar almacenamiento</td></tr>
        <tr><td>Apps sin uso</td><td>Desinstalarlas</td></tr>
      </table>
      <table>
        <tr><th>Batería que no dura</th><th>Cómo</th></tr>
        <tr><td>Ver qué la consume</td><td>Configuración → Batería</td></tr>
        <tr><td>Brillo y pantalla</td><td>Bajar el brillo y el tiempo antes de que se apague la pantalla</td></tr>
        <tr><td>Estado de la batería</td><td>En iPhone: Configuración → Batería → Estado; si está muy gastada, se cambia</td></tr>
      </table>
      <p><strong>Antes de borrar fotos,</strong> comprobá que estén en la copia: abrí la nube y buscá algunas.</p>
      <p>Por ejemplo, en muchos celulares, la mitad del espacio ocupado son videos recibidos por WhatsApp que nadie volvió a mirar.</p>` },
    { titulo: "Una app que falla", html: `
      <p class="idea">Cuando una app se cierra sola o no carga, se prueban pasos <strong>de menor a mayor</strong>: primero los que no borran nada, al final los que sí.</p>
      <pre><code>1. Cerrar la app y volver a abrirla
2. Reiniciar el celular
3. Revisar la conexión: ¿anda internet en otra app?
4. Actualizar la app (desde la tienda de apps)
5. Actualizar el sistema (Configuración → Sistema / General)
6. En Android: Configuración → Apps → la app → Forzar detención
   y después Borrar caché (no borra tus datos)
7. Desinstalar y volver a instalar
   (antes, comprobá que los datos estén en la cuenta o en la copia)
8. Último recurso: restablecer de fábrica, con copia comprobada</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>Caché</td><td>Archivos temporales que guarda la app para ir más rápido; borrarlos no borra tu cuenta</td></tr>
        <tr><td>Borrar datos (o almacenamiento)</td><td>Deja la app como recién instalada; puede borrar información guardada solo en el celular</td></tr>
      </table>
      <p><strong>Si falla en muchas personas a la vez,</strong> puede ser el servicio de la app: buscá si hay noticias de una caída antes de tocar el celular.</p>
      <p>Por ejemplo, una app de banco que no abre después de una actualización del sistema suele arreglarse actualizando la app, sin borrar nada.</p>` },
    { titulo: "Cuentas y contraseñas", html: `
      <p class="idea">El celular depende de una <strong>cuenta</strong> (de Google en Android, de Apple en iPhone). Si la persona pierde el acceso, pierde contactos, fotos y copias. Ayudar a recuperarla es frecuente.</p>
      <table>
        <tr><th>Paso</th><th>Por qué</th></tr>
        <tr><td>Usar la recuperación oficial (en la página de Google o de Apple)</td><td>Es la única forma segura</td></tr>
        <tr><td>Tener cargados un teléfono y un mail de recuperación</td><td>Es lo que piden para devolver el acceso</td></tr>
        <tr><td>Activar la verificación en dos pasos</td><td>Protege la cuenta aunque roben la contraseña</td></tr>
        <tr><td>Anotar la contraseña en un lugar seguro o usar un gestor de contraseñas</td><td>Para no depender de la memoria</td></tr>
      </table>
      <p><strong>La contraseña la escribe la persona:</strong> vos no la pedís, no la anotás y no la guardás. Si hace falta, mirás para otro lado mientras la escribe.</p>
      <p><strong>Cuidado con el bloqueo por robo:</strong> los celulares tienen protección contra robo atada a la cuenta. Si restablecés un celular sin saber la cuenta, puede quedar bloqueado.</p>
      <p>Por ejemplo, alguien que cambió de número sin actualizar el teléfono de recuperación puede tardar días en recuperar su cuenta. Revisarlo antes evita el problema.</p>` },
  ],
  practica: [
    "En un celular, abrí Almacenamiento y anotá los 3 tipos de archivos que más ocupan y cuántos GB libres hay.",
    "Escribí los 8 pasos para una app que falla y probá los 3 primeros con una app real. Anotá en qué paso se arregló (o si no se arregló).",
    "Revisá en tu cuenta de Google o Apple si tenés teléfono y mail de recuperación y verificación en dos pasos. Anotá qué faltaba.",
  ],
  recursos: [
    { t: "Ayuda de Android: liberar espacio", url: "https://support.google.com/android/answer/7431795?hl=es" },
    { t: "Ayuda de Android: copias de seguridad", url: "https://support.google.com/android/answer/2819582?hl=es" },
    { t: "Soporte de Apple: iPhone", url: "https://support.apple.com/es-es/iphone" },
  ],
  quiz: [
    { q: "Si un celular no tiene espacio, ¿qué revisás primero?", opciones: ["Comprar otro celular","Restablecer de fábrica","Qué ocupa más, en Configuración → Almacenamiento","Borrar todas las fotos sin copia"], correcta: 2, explicacion: "Saber qué ocupa más te dice qué liberar. Borrar fotos sin copia tienta por rápido, pero se pierden para siempre." },
    { q: "Si vas a borrar fotos del celular para liberar espacio, ¿qué hacés antes?", opciones: ["Comprobás que estén en la copia, abriendo algunas desde la nube","Nada","Le preguntás a otra persona","Las borrás y después ves"], correcta: 0, explicacion: "Comprobar evita perderlas. \"Nada\" tienta si la nube \"está activada\", pero puede no haberse sincronizado." },
    { q: "Si la mitad del espacio son videos de WhatsApp, ¿dónde los administrás?", opciones: ["En la calculadora","En la cámara","En la tienda de apps","En WhatsApp: Almacenamiento y datos → Administrar almacenamiento"], correcta: 3, explicacion: "WhatsApp tiene su administrador de archivos. La cámara tienta porque son videos, pero no muestra los de WhatsApp." },
    { q: "Si la batería no dura, ¿qué revisás primero?", opciones: ["Cambiar el celular","Qué la consume, en Configuración → Batería","Cargarlo toda la noche siempre","Desinstalar todo"], correcta: 1, explicacion: "Ver qué consume muestra la causa. Cambiar el celular tienta, pero puede ser una app o el brillo." },
    { q: "Si una app se cierra sola, ¿cuál es el primer paso?", opciones: ["Restablecer de fábrica","Desinstalarla","Cerrarla y volver a abrirla","Borrar los datos"], correcta: 2, explicacion: "Primero lo que no borra nada. Restablecer tienta por definitivo, pero es el último recurso." },
    { q: "Si la app no carga, ¿cómo sabés si es la conexión?", opciones: ["Probás si internet anda en otra app","Reiniciás el router enseguida","Desinstalás la app","Cambiás la contraseña"], correcta: 0, explicacion: "Otra app que funciona descarta la conexión. Reiniciar el router tienta, pero puede no ser el problema." },
    { q: "Si borrás la caché de una app en Android, ¿qué perdés?", opciones: ["Todas tus fotos","La cuenta de Google","Los contactos","Solo archivos temporales: no borra tu cuenta"], correcta: 3, explicacion: "La caché es temporal. \"Todas tus fotos\" tienta por miedo, pero eso no se toca." },
    { q: "Si vas a desinstalar y reinstalar una app, ¿qué comprobás antes?", opciones: ["Nada","Que los datos estén guardados en la cuenta o en una copia","El color del ícono","Que tenga muchas estrellas"], correcta: 1, explicacion: "Algunas apps guardan datos solo en el celular. \"Nada\" tienta porque se reinstala igual, pero los datos no vuelven." },
    { q: "Si una app falla a muchas personas al mismo tiempo, ¿qué buscás?", opciones: ["Restablecer tu celular","Comprar otro celular","Si hay noticias de una caída del servicio","Desinstalar todo"], correcta: 2, explicacion: "Si falla a muchos, es el servicio. Tocar tu celular tienta, pero el problema no está ahí." },
    { q: "Si alguien perdió el acceso a su cuenta de Google, ¿qué usás?", opciones: ["La recuperación oficial en la página de Google","Una app que \"recupera cuentas\"","Un grupo de redes","Crear otra cuenta y listo"], correcta: 0, explicacion: "Solo la recuperación oficial es segura. La app tienta, pero suele ser una estafa." },
    { q: "Si estás ayudando y la persona tiene que escribir su contraseña, ¿qué hacés?", opciones: ["Se la pedís para hacerlo más rápido","La anotás en un papel","La guardás en tu celular","La escribe ella, y vos no la pedís ni la anotás"], correcta: 3, explicacion: "La contraseña es de la persona. Pedirla tienta por rápido, pero te hace responsable de un dato que no es tuyo." },
    { q: "Si vas a restablecer de fábrica un celular, ¿qué tenés que saber?", opciones: ["Nada","La cuenta y contraseña del dueño, porque la protección contra robo puede bloquearlo","Solo el PIN de la pantalla","El número de serie"], correcta: 1, explicacion: "Sin la cuenta, el celular puede quedar bloqueado. El PIN tienta, pero la protección está atada a la cuenta." },
  ],
},
{
  id: "redes",
  icono: "📶",
  titulo: "Wifi e internet",
  nivel: "Intermedio",
  objetivos: [
    "Ubicar si un problema de internet está en el equipo, el wifi, el router o el proveedor",
    "Medir la velocidad y compararla con lo contratado",
    "Llamar al proveedor con los datos que necesita",
  ],
  lecciones: [
    { titulo: "¿Dónde está el problema?", html: `
      <p class="idea">"No anda internet" puede ser el equipo, el wifi, el router o el proveedor. Con unas pocas preguntas, se ubica en qué parte de la cadena está.</p>
      <pre><code>Proveedor  →  Módem / router  →  Wifi o cable  →  Tu equipo
 (calle)        (en la casa)        (la señal)       (compu, celular)</code></pre>
      <table>
        <tr><th>Si...</th><th>El problema probablemente está en...</th></tr>
        <tr><td>Solo un equipo no tiene internet y los demás sí</td><td>Ese equipo</td></tr>
        <tr><td>Ningún equipo tiene internet</td><td>El router o el proveedor</td></tr>
        <tr><td>Anda con cable, pero no por wifi</td><td>El wifi</td></tr>
        <tr><td>Anda cerca del router, pero no lejos</td><td>La señal: distancia o paredes</td></tr>
        <tr><td>El router tiene una luz roja o apagada en "internet"</td><td>El proveedor o el cable de la calle</td></tr>
      </table>
      <p><strong>Las luces del router dicen mucho:</strong> la mayoría tiene una luz de energía, una de internet y una de wifi. Sacale una foto cuando todo anda bien, para comparar cuando falla.</p>
      <p>Por ejemplo, si la luz de internet del router está roja y ningún equipo navega, no tiene sentido revisar la compu: hay que reiniciar el router o llamar al proveedor.</p>` },
    { titulo: "Reiniciar, ubicar y medir", video: {"id":"Gqq71BWfDpI","t":"Así se repara una conexión wifi inestable y que se corta · Computer Hoy (11:55)"}, html: `
      <p class="idea">Muchos problemas de wifi se arreglan reiniciando el router, moviéndolo de lugar o conectando el equipo a la red correcta. Para saber si mejoró, se mide.</p>
      <pre><code>REINICIAR EL ROUTER
1. Desenchufalo de la corriente.
2. Esperá 30 segundos.
3. Enchufalo y esperá 2 a 3 minutos a que se prendan todas las luces.
(No uses el botón "reset" o "restablecer": borra la configuración.)

MEDIR LA VELOCIDAD
Contratado: 100 Mbps
Con cable al lado del router:   95 Mbps  → llega bien del proveedor
Por wifi en el mismo cuarto:    70 Mbps  → normal
Por wifi en el fondo de la casa: 12 Mbps → problema de señal</code></pre>
      <table>
        <tr><th>Para mejorar la señal</th><th>Por qué</th></tr>
        <tr><td>Router en un lugar alto y central</td><td>La señal se reparte mejor</td></tr>
        <tr><td>Lejos de paredes gruesas, espejos y microondas</td><td>Bloquean o interfieren la señal</td></tr>
        <tr><td>Un repetidor o un segundo equipo</td><td>Para casas grandes o de varios pisos</td></tr>
      </table>
      <p><strong>Medí varias veces:</strong> la velocidad cambia según la hora y cuántos equipos están usando la red.</p>
      <p>Por ejemplo, con 95 Mbps por cable y 12 Mbps en el fondo, el proveedor cumple: el problema es la distancia del router, no el servicio.</p>` },
    { titulo: "Llamar al proveedor", html: `
      <p class="idea">Si el problema está del lado del proveedor, llamá con los datos ya juntos. La llamada es más corta y la solución llega antes.</p>
      <pre><code>ANTES DE LLAMAR, ANOTÁ:
- Número de cliente o titular del servicio
- Qué pasa y desde cuándo
- Qué luces tiene el router (o una foto)
- Si ya reiniciaste el router y qué pasó
- Velocidad medida con cable y la contratada
- Si les pasa a todos los equipos</code></pre>
      <table>
        <tr><th>Durante la llamada</th><th>Por qué</th></tr>
        <tr><td>Pedí un número de reclamo</td><td>Para seguirlo y no empezar de cero</td></tr>
        <tr><td>Anotá fecha, hora y con quién hablaste</td><td>Si el problema sigue, tenés el historial</td></tr>
        <tr><td>Preguntá cuándo te van a dar una respuesta</td><td>Para saber cuándo volver a llamar</td></tr>
      </table>
      <p><strong>Si el servicio no se resuelve,</strong> en Argentina el ENACOM recibe reclamos de servicios de internet y telefonía después de reclamar a la empresa.</p>
      <p><strong>Cuidado:</strong> si alguien llama diciendo que es del proveedor y te pide contraseñas o instalar un programa, cortá. Las empresas no hacen eso.</p>
      <p>Por ejemplo, decir "con cable mido 8 Mbps de 100 contratados, ya reinicié el router y la luz de internet parpadea" ahorra 15 minutos de preguntas en la llamada.</p>` },
  ],
  practica: [
    "Sacale una foto a las luces del router cuando todo anda bien y anotá qué significa cada luz (buscalo en el manual o la página del fabricante).",
    "Medí la velocidad en 3 lugares de la casa (con cable o al lado del router, mismo cuarto y lejos) y compará con lo contratado en una tabla.",
    "Armá tu hoja \"antes de llamar al proveedor\" con los 6 datos y completala con tu servicio.",
  ],
  recursos: [
    { t: "Soporte de Microsoft: solucionar problemas de wifi en Windows", url: "https://support.microsoft.com/es-es/windows/solucionar-problemas-de-conexi%C3%B3n-wi-fi-en-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c" },
    { t: "Ayuda de Android (Google)", url: "https://support.google.com/android/?hl=es" },
    { t: "GCFGlobal: cursos gratis de informática en español", url: "https://edu.gcfglobal.org/es/" },
  ],
  quiz: [
    { q: "Si solo la compu no tiene internet y el celular sí, en el mismo wifi, ¿dónde está el problema?", opciones: ["En el proveedor","En el router","En la compu","En la calle"], correcta: 2, explicacion: "Si otro equipo navega, la conexión llega. El proveedor tienta, pero entonces tampoco andaría el celular." },
    { q: "Si ningún equipo de la casa tiene internet, ¿qué revisás?", opciones: ["El router y sus luces, y después el proveedor","Solo la compu","El teclado","La impresora"], correcta: 0, explicacion: "Si falla en todos, está en lo común. La compu tienta porque es donde se nota, pero no explica que falle el celular." },
    { q: "Si con cable anda bien, pero por wifi no, ¿qué concluís?", opciones: ["Que el proveedor no cumple","Que la compu está rota","Que hay que cambiar el cable","Que el problema es el wifi, no el proveedor"], correcta: 3, explicacion: "El cable muestra que internet llega. \"El proveedor\" tienta, pero con cable funciona." },
    { q: "Si la luz de internet del router está roja, ¿qué hacés?", opciones: ["Reinstalar Windows","Reiniciar el router y, si sigue, llamar al proveedor","Cambiar la contraseña del wifi","Comprar otra compu"], correcta: 1, explicacion: "La luz roja apunta al router o al proveedor. Reinstalar tienta, pero el problema no está en la compu." },
    { q: "Si vas a reiniciar el router, ¿cómo lo hacés?", opciones: ["Apretás el botón \"reset\" por 10 segundos","Lo apagás y prendés en 1 segundo","Lo desenchufás, esperás 30 segundos y lo volvés a enchufar","Le sacás todos los cables de internet"], correcta: 2, explicacion: "Desenchufar reinicia sin borrar nada. El botón reset tienta por el nombre, pero borra la configuración." },
    { q: "Si después de enchufar el router no anda enseguida, ¿qué hacés?", opciones: ["Esperás 2 a 3 minutos a que se prendan todas las luces","Lo desenchufás de nuevo enseguida","Llamás al proveedor ya","Apretás reset"], correcta: 0, explicacion: "El router tarda en arrancar. Llamar ya tienta, pero puede estar todavía iniciando." },
    { q: "Si contrataste 100 Mbps y medís 95 con cable al lado del router, ¿qué concluís?", opciones: ["Que el proveedor no cumple","Que el router está roto","Que hay que cambiar de plan","Que el proveedor cumple"], correcta: 3, explicacion: "95 de 100 es lo esperable. \"No cumple\" tienta por los 5 que faltan, pero es normal." },
    { q: "Si medís 12 Mbps en el fondo de la casa y 95 con cable, ¿cuál es el problema?", opciones: ["El proveedor","La señal del wifi: distancia o paredes","La compu","La tarifa"], correcta: 1, explicacion: "Con cable llega bien. \"El proveedor\" tienta por los 12, pero el problema es la distancia." },
    { q: "Si querés mejorar la señal en toda la casa, ¿dónde ponés el router?", opciones: ["Dentro de un mueble cerrado","En el piso detrás de la tele","En un lugar alto y central, lejos de paredes gruesas y del microondas","Al lado del microondas"], correcta: 2, explicacion: "Alto y central reparte mejor la señal. Esconderlo en un mueble tienta por estética, pero la bloquea." },
    { q: "Si vas a llamar al proveedor, ¿qué tenés listo?", opciones: ["Número de cliente, qué pasa, luces del router, qué probaste y velocidad medida","Nada, que pregunten ellos","Solo tu nombre","La marca de tu celular"], correcta: 0, explicacion: "Los datos acortan la llamada. \"Que pregunten ellos\" tienta, pero tarda mucho más." },
    { q: "Si en la llamada te dan un número de reclamo, ¿qué hacés?", opciones: ["Lo olvidás","Lo publicás en redes","No lo pedís","Lo anotás con fecha, hora y con quién hablaste"], correcta: 3, explicacion: "El número evita empezar de cero. Olvidarlo tienta si el problema \"se va a arreglar\", pero si vuelve, no tenés historial." },
    { q: "Si alguien llama diciendo ser del proveedor y te pide la contraseña del wifi y que instales un programa, ¿qué hacés?", opciones: ["Le das la contraseña","Cortás: las empresas no piden eso","Instalás el programa","Le pasás tus datos del banco"], correcta: 1, explicacion: "Es una estafa común. Darle la contraseña tienta porque parece oficial, pero un proveedor no la necesita." },
  ],
},
{
  id: "atender",
  icono: "🤝",
  titulo: "Atender a la persona y registrar casos",
  nivel: "Avanzado",
  objetivos: [
    "Explicar una solución sin tecnicismos y comprobar que se entendió",
    "Registrar cada caso en un ticket con datos útiles",
    "Ayudar de forma remota sin poner en riesgo a la persona",
  ],
  lecciones: [
    { titulo: "Explicar sin tecnicismos", html: `
      <p class="idea">La persona que pide ayuda muchas veces está apurada, frustrada o con vergüenza. Tratarla bien y explicarle con palabras simples es tan importante como arreglar el problema.</p>
      <table>
        <tr><th>En vez de...</th><th>Decí...</th></tr>
        <tr><td>"Se llenó la caché del navegador"</td><td>"El navegador guardó muchos archivos temporales; los borramos y ya está"</td></tr>
        <tr><td>"Tenés el DNS mal configurado"</td><td>"La compu no encontraba el camino a las páginas; ya lo corregimos"</td></tr>
        <tr><td>"¿Cómo no te diste cuenta?"</td><td>"Esto le pasa a mucha gente"</td></tr>
      </table>
      <p><strong>Enseñá, no solo arregles:</strong> si es algo que puede volver a pasar, mostrale cómo resolverlo. Dejale los pasos por escrito.</p>
      <p><strong>Comprobá que se entendió:</strong> pedile que lo haga una vez, con vos al lado, en vez de preguntar "¿entendiste?".</p>
      <p><strong>Si no sabés algo, decilo:</strong> "Esto no lo sé; lo averiguo y te aviso hoy" genera más confianza que inventar.</p>
      <p>Los cursos "Atención al cliente, en persona y por chat" y "Escribir claro" de este sitio tienen más sobre cómo atender y explicar.</p>
      <p>Por ejemplo, a una persona mayor que no puede ver las fotos que le mandan, mostrarle los 3 toques que tiene que hacer, y dejárselos escritos, le resuelve el problema para siempre.</p>` },
    { titulo: "Registrar cada caso", video: {"id":"7dDjNzL2CTg","t":"Qué es una mesa de ayuda · iDric (3:21)"}, html: `
      <p class="idea">Un <strong>ticket</strong> es el registro de un pedido de ayuda: qué pasó, qué se hizo y cómo terminó. Con los tickets se detectan problemas que se repiten y nadie tiene que acordarse de memoria.</p>
      <pre><code>TICKET 0047
Fecha:        12/3, 10:15
Quién:        Laura, administración
Equipo:       notebook de administración, Windows 11
Problema:     no imprime desde el lunes; mensaje "error de impresora"
Prioridad:    media (puede imprimir desde otra compu)
Probado:      reiniciar impresora y compu → sigue
Causa:        documento trabado en la cola de impresión
Solución:     cancelar el documento y volver a imprimir
Estado:       resuelto 12/3, 10:40 · Laura confirmó que imprime</code></pre>
      <table>
        <tr><th>Prioridad</th><th>Cuándo</th></tr>
        <tr><td>Alta</td><td>Frena el trabajo de mucha gente o de algo crítico (la caja, internet de toda la oficina)</td></tr>
        <tr><td>Media</td><td>Frena a una persona, pero tiene una alternativa</td></tr>
        <tr><td>Baja</td><td>Molesta, pero no frena el trabajo</td></tr>
      </table>
      <p><strong>Cerrá el ticket cuando la persona confirma,</strong> no cuando vos creés que está arreglado.</p>
      <p>Por ejemplo, si en un mes hay 8 tickets de la misma impresora, el problema no es de las personas: es la impresora, y conviene arreglarla o cambiarla.</p>` },
    { titulo: "Ayuda a distancia y falso soporte", html: `
      <p class="idea">Muchas veces se ayuda a distancia, con una videollamada o un programa de <strong>acceso remoto</strong> (que te deja ver y manejar otra compu desde la tuya). Es muy útil, pero también es lo que usan los estafadores del "falso soporte técnico".</p>
      <table>
        <tr><th>Ayuda remota segura</th><th>Señales de falso soporte</th></tr>
        <tr><td>La pide la persona, a alguien que conoce</td><td>Te llaman o aparece un aviso de golpe: "tu compu tiene virus"</td></tr>
        <tr><td>Con herramientas conocidas, como Asistencia rápida de Windows</td><td>Te piden instalar un programa que no conocés</td></tr>
        <tr><td>La persona mira todo lo que se hace</td><td>Te piden que no mires o que te vayas</td></tr>
        <tr><td>Se corta la conexión al terminar</td><td>Te piden datos del banco, contraseñas o un pago con tarjeta de regalo</td></tr>
      </table>
      <p><strong>Las empresas grandes no llaman</strong> para avisar que tu compu tiene virus. Si pasa, se corta.</p>
      <p><strong>Si alguien ya dio acceso a un estafador:</strong> desconectar internet, cambiar las contraseñas desde otro equipo (empezando por el mail y el banco), avisar al banco y hacer la denuncia.</p>
      <p>Para más sobre estafas, mirá el curso "Seguridad digital y estafas" de este sitio y el sitio "Con vos en la web" del Estado.</p>
      <p>Por ejemplo, un cartel rojo en el navegador que dice "llame a este número, su compu está infectada" es una estafa: se cierra el navegador y no se llama.</p>` },
  ],
  practica: [
    "Escribí 5 explicaciones de problemas técnicos con palabras simples, como en la tabla. Leéselas a alguien que no sabe de computación y anotá cuáles entendió.",
    "Registrá 3 casos reales o inventados en el formato de ticket, con prioridad. Anotá cuánto tardaste en cada uno.",
    "Escribí los 4 pasos para alguien que dio acceso a un estafador y anotá a qué número llamarías en tu banco.",
  ],
  recursos: [
    { t: "Con vos en la web: seguridad en internet (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "Soporte de Microsoft: ayuda de Windows", url: "https://support.microsoft.com/es-es/windows" },
  ],
  quiz: [
    { q: "Si la persona está frustrada porque no puede trabajar, ¿cómo empezás?", opciones: ["\"¿Cómo no te diste cuenta?\"","Ignorándola y tocando la compu","Con calma y sin culparla: \"esto le pasa a mucha gente\"","Con términos técnicos para que vea que sabés"], correcta: 2, explicacion: "Tratarla bien es parte del trabajo. Los términos técnicos tientan para mostrar que sabés, pero la confunden más." },
    { q: "Si tenés que explicar que se llenó la caché del navegador, ¿qué decís?", opciones: ["\"El navegador guardó muchos archivos temporales; los borramos y ya está\"","\"Se te llenó la caché, obvio\"","\"Es un tema técnico, no lo vas a entender\"","No le decís nada"], correcta: 0, explicacion: "Palabras simples dejan tranquila a la persona. \"No lo vas a entender\" tienta por corto, pero la hace sentir mal." },
    { q: "Si el problema puede volver a pasar, ¿qué hacés además de arreglarlo?", opciones: ["Nada, para que te vuelva a llamar","Le decís que no toque nada nunca","Le cobrás el doble","Le enseñás cómo resolverlo y le dejás los pasos escritos"], correcta: 3, explicacion: "Enseñar hace a la persona más independiente. \"Para que te vuelva a llamar\" tienta como negocio, pero pierde su confianza." },
    { q: "Si querés saber si la persona entendió cómo hacerlo, ¿qué hacés?", opciones: ["Le preguntás \"¿entendiste?\"","Le pedís que lo haga una vez con vos al lado","Lo hacés vos de nuevo","Te vas"], correcta: 1, explicacion: "Hacerlo muestra si se entendió. \"¿Entendiste?\" tienta, pero casi todos dicen que sí." },
    { q: "Si te preguntan algo que no sabés, ¿qué decís?", opciones: ["Inventás una respuesta","Cambiás de tema","\"Esto no lo sé; lo averiguo y te aviso hoy\"","Decís que no tiene arreglo"], correcta: 2, explicacion: "Ser honesto genera confianza. Inventar tienta para quedar bien, pero si falla, perdés credibilidad." },
    { q: "Si querés detectar problemas que se repiten, ¿qué necesitás?", opciones: ["Registrar cada caso en un ticket","Acordarte de memoria","Nada","Preguntar en el grupo cada mes"], correcta: 0, explicacion: "Los tickets muestran patrones. De memoria tienta, pero no te acordás de todos los casos." },
    { q: "Si la impresora no anda, pero la persona puede imprimir desde otra compu, ¿qué prioridad tiene el ticket?", opciones: ["Alta","Baja","Ninguna","Media: la frena, pero tiene una alternativa"], correcta: 3, explicacion: "Tiene una alternativa, así que no es alta. Alta tienta porque la persona está molesta, pero no frena a todos." },
    { q: "Si se cortó internet en toda la oficina, ¿qué prioridad tiene?", opciones: ["Baja","Alta: frena a mucha gente","Media","Se deja para mañana"], correcta: 1, explicacion: "Afecta a todos. Media tienta si estás con otro caso, pero esto frena todo el trabajo." },
    { q: "Si creés que arreglaste el problema, ¿cuándo cerrás el ticket?", opciones: ["Enseguida, si vos creés que está","Al final del mes","Cuando la persona confirma que funciona","Nunca"], correcta: 2, explicacion: "La confirmación evita cerrar algo que no funciona. Cerrarlo enseguida tienta por terminar, pero puede volver." },
    { q: "Si hay 8 tickets de la misma impresora en un mes, ¿qué concluís?", opciones: ["Que el problema es la impresora y conviene arreglarla o cambiarla","Que las personas no saben imprimir","Que es casualidad","Que hay que prohibir imprimir"], correcta: 0, explicacion: "Los tickets repetidos muestran la causa. \"No saben imprimir\" tienta, pero 8 casos apuntan al equipo." },
    { q: "Si aparece un cartel que dice \"su compu está infectada, llame a este número\", ¿qué hacés?", opciones: ["Llamás enseguida","Instalás lo que te piden","Le pasás los datos de la tarjeta","Cerrás el navegador y no llamás: es una estafa"], correcta: 3, explicacion: "Es el falso soporte técnico. Llamar tienta por el miedo al virus, pero es justo lo que buscan." },
    { q: "Si alguien ya le dio acceso a un estafador, ¿qué hace primero?", opciones: ["Nada, ya pasó","Desconecta internet y cambia las contraseñas desde otro equipo, empezando por el mail y el banco","Le paga para que se vaya","Cambia las contraseñas desde el mismo equipo infectado"], correcta: 1, explicacion: "Cortar el acceso y cambiar claves desde otro equipo protege. El mismo equipo tienta por cómodo, pero puede seguir comprometido." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu guía de soporte",
  nivel: "Avanzado",
  objetivos: [
    "Armar tu guía de soporte con listas de pasos para los problemas más comunes",
    "Resolver 3 casos y evaluarlos con una rúbrica",
    "Definir cómo seguir aprendiendo y ofrecer el servicio",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>guía de soporte</strong>: un documento con listas de pasos para los problemas más comunes, más 3 casos resueltos (reales o simulados) registrados como tickets.</p>
      <table>
        <tr><th>Parte de la guía</th><th>Módulo</th></tr>
        <tr><td>Tu lista "antes de tocar"</td><td>Qué hace el soporte técnico</td></tr>
        <tr><td>Las preguntas de diagnóstico y los 6 pasos</td><td>Diagnosticar con método</td></tr>
        <tr><td>Listas para compu lenta, no prende, impresora y copia de seguridad</td><td>Problemas comunes de la computadora</td></tr>
        <tr><td>Listas para espacio, batería, app que falla y cuentas</td><td>Problemas comunes del celular</td></tr>
        <tr><td>Lista de internet y hoja para llamar al proveedor</td><td>Wifi e internet</td></tr>
        <tr><td>Modelo de ticket y reglas de ayuda remota</td><td>Atender a la persona</td></tr>
      </table>
      <p><strong>Los 3 casos:</strong> elegí uno de computadora, uno de celular y uno de internet. Para cada uno, llená un ticket completo.</p>
      <p>Por ejemplo, podés ayudar a un familiar a liberar espacio en el celular, a un vecino con el wifi y a vos mismo con la compu lenta, y registrar cada caso.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar cada caso resuelto.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Preguntas</td><td>Preguntó qué, desde cuándo y qué cambió</td><td>Solo algunas</td><td>Ninguna: empezó a tocar</td></tr>
        <tr><td>Método</td><td>Reprodujo, aisló y cambió una cosa por vez</td><td>Cambió varias a la vez</td><td>Probó al azar</td></tr>
        <tr><td>Resultado</td><td>Resuelto y confirmado por la persona, o escalado con lo probado</td><td>Resuelto sin confirmar</td><td>Sin resolver ni escalar</td></tr>
        <tr><td>Explicación</td><td>Explicó sin tecnicismos y dejó pasos escritos</td><td>Explicó, sin pasos</td><td>No explicó</td></tr>
        <tr><td>Registro</td><td>Ticket completo con causa y solución</td><td>Ticket incompleto</td><td>Sin ticket</td></tr>
        <tr><td>Cuidado de los datos</td><td>Copia antes de lo riesgoso y no pidió contraseñas</td><td>—</td><td>Borró sin copia o pidió o guardó contraseñas</td></tr>
      </table>
      <pre><code>Máximo: 12 por caso
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Cuidado de los datos" tiene 0, el caso no está bien
       resuelto, aunque el total sea alto.</code></pre>
      <p>Por ejemplo, arreglar rapidísimo un celular restableciéndolo de fábrica sin copia saca 0 en cuidado de los datos: el celular anda, pero se perdieron las fotos.</p>` },
    { titulo: "Seguir aprendiendo y ofrecer el servicio", html: `
      <p class="idea">El soporte técnico se aprende con práctica: cada caso nuevo suma. Estas son formas de seguir y de empezar a ofrecer el servicio.</p>
      <table>
        <tr><th>Para seguir aprendiendo</th><th>Qué tiene</th></tr>
        <tr><td>GCFGlobal</td><td>Cursos gratis en español de informática básica, Windows y celulares</td></tr>
        <tr><td>Páginas de ayuda de Microsoft, Google y Apple</td><td>Las soluciones oficiales, siempre actualizadas</td></tr>
        <tr><td>Certificaciones de soporte técnico</td><td>Para buscar trabajo en mesas de ayuda, más adelante</td></tr>
      </table>
      <table>
        <tr><th>Para ofrecer el servicio</th><th>Cómo</th></tr>
        <tr><td>Empezá con conocidos</td><td>Familia, vecinos, comercios del barrio</td></tr>
        <tr><td>Fijá un precio por visita o por hora</td><td>El curso "Monotributo, facturación e impuestos para independientes" explica cómo facturarlo</td></tr>
        <tr><td>Dejá todo por escrito</td><td>Qué hiciste y qué pasos dejaste; genera confianza</td></tr>
        <tr><td>Sabé tus límites</td><td>Lo que es nivel 2 o 3, derivalo a un técnico</td></tr>
      </table>
      <p>Para buscar trabajo en soporte, mirá también el curso "Buscar trabajo con IA" de este sitio.</p>
      <p>Por ejemplo, un comercio del barrio que te llama una vez por mes por la impresora y el wifi puede ser tu primer cliente fijo.</p>` },
  ],
  practica: [
    "Armá tu guía de soporte con las 6 partes del encargo. Anotá cuántas páginas tiene.",
    "Resolvé 3 casos (compu, celular e internet), registralos como tickets y evaluá cada uno con la rúbrica. Anotá los 3 puntajes.",
    "Anotá un precio por visita o por hora para tu servicio y 3 personas o comercios a los que se lo podrías ofrecer.",
  ],
  recursos: [
    { t: "GCFGlobal: cursos gratis de informática en español", url: "https://edu.gcfglobal.org/es/" },
    { t: "Soporte de Microsoft: ayuda de Windows", url: "https://support.microsoft.com/es-es/windows" },
    { t: "Ayuda de Android (Google)", url: "https://support.google.com/android/?hl=es" },
  ],
  quiz: [
    { q: "Si armás tu guía de soporte, ¿qué tiene que incluir?", opciones: ["Solo una lista de programas","Solo tu número de teléfono","Listas de pasos para los problemas comunes y 3 casos registrados como tickets","Solo los casos sin las listas"], correcta: 2, explicacion: "La guía junta todo el curso. Solo los casos tienta por prácticos, pero sin las listas no se repiten bien." },
    { q: "Si vas a elegir los 3 casos del proyecto, ¿de qué tipo son?", opciones: ["Uno de computadora, uno de celular y uno de internet","Los 3 de impresoras","Los 3 de contraseñas","Ninguno real ni simulado"], correcta: 0, explicacion: "La variedad practica todo el curso. Los 3 iguales tienta por fácil, pero practicás una sola cosa." },
    { q: "Si empezaste a tocar el equipo sin preguntar nada, ¿cuánto sacás en \"Preguntas\"?", opciones: ["2 puntos","1 punto","No se evalúa","0 puntos"], correcta: 3, explicacion: "Sin preguntas es 0. Sacar 1 tienta si igual lo arreglaste, pero la rúbrica mira el método." },
    { q: "Si cambiaste varias cosas a la vez y se arregló, ¿cuánto sacás en \"Método\"?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 1, explicacion: "Funcionó, pero no sabés qué lo arregló. Sacar 2 tienta porque se resolvió, pero el método no fue el correcto." },
    { q: "Si no pudiste resolverlo, pero lo escalaste con lo que probaste anotado, ¿cuánto sacás en \"Resultado\"?", opciones: ["0 puntos","1 punto","2 puntos","No se evalúa"], correcta: 2, explicacion: "Escalar bien es un buen resultado. Sacar 0 tienta porque no lo arreglaste, pero la rúbrica lo cuenta como completo." },
    { q: "Si restableciste un celular sin copia y se perdieron las fotos, ¿está bien resuelto?", opciones: ["No: \"Cuidado de los datos\" tiene 0 y eso no se compensa con el total","Sí, el celular anda","Sí, si fue rápido","Depende de cuántas fotos eran"], correcta: 0, explicacion: "La regla de la rúbrica lo dice. \"El celular anda\" tienta, pero la persona perdió algo que no vuelve." },
    { q: "Si en un caso sacaste 8 puntos, ¿qué hacés?", opciones: ["Lo das por terminado","Dejás el soporte","Cambiás la rúbrica","Mejorás lo que sacó 0 o 1 y lo intentás en otro caso"], correcta: 3, explicacion: "De 7 a 10 se mejora lo flojo. Darlo por terminado tienta, pero el próximo caso sale mejor si corregís ahora." },
    { q: "Si querés seguir aprendiendo gratis en español, ¿qué sitio usás?", opciones: ["Un grupo anónimo","GCFGlobal y las páginas de ayuda oficiales","Una publicidad de un curso milagroso","Nada"], correcta: 1, explicacion: "Son fuentes confiables y gratis. El curso milagroso tienta por rápido, pero suele no cumplir." },
    { q: "Si querés empezar a ofrecer el servicio, ¿con quién empezás?", opciones: ["Con una empresa grande sin experiencia","Con nadie hasta saber todo","Con conocidos: familia, vecinos y comercios del barrio","Con desconocidos en la calle"], correcta: 2, explicacion: "Los conocidos te dan práctica y referencias. Esperar a saber todo tienta, pero nunca llega ese momento." },
    { q: "Si cobrás por tu servicio, ¿qué curso del sitio te ayuda a facturarlo?", opciones: ["\"Monotributo, facturación e impuestos para independientes\"","\"Inglés para el trabajo\"","\"Portugués básico\"","Ninguno"], correcta: 0, explicacion: "Ese curso explica cómo facturar. Inglés tienta porque es del trabajo, pero no trata impuestos." },
    { q: "Si un cliente necesita cambiar una placa de la compu, ¿qué hacés?", opciones: ["Lo intentás aunque no sepas","Le decís que no tiene arreglo","Abrís la fuente","Lo derivás a un técnico, porque es nivel 2 o 3"], correcta: 3, explicacion: "Saber tus límites es parte del trabajo. Intentarlo tienta para no perder el cliente, pero podés romper algo más." },
    { q: "Si terminás una visita, ¿qué le dejás al cliente?", opciones: ["Nada","Por escrito qué hiciste y los pasos para la próxima vez","Solo la factura","Tu contraseña"], correcta: 1, explicacion: "Dejar todo escrito genera confianza. Solo la factura tienta por simple, pero no le sirve si el problema vuelve." },
  ],
},
];
