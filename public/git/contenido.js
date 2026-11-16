// Temario del curso "Git y GitHub desde cero". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js git y node tools/metodologia.js git
window.TEMARIO = [
{
  id: "empezar",
  icono: "🌱",
  titulo: "Qué son Git y GitHub",
  nivel: "Básico",
  objetivos: [
    "Explicar qué problema resuelve el control de versiones",
    "Distinguir Git (el programa) de GitHub (el sitio)",
    "Instalar y configurar Git con tu nombre y tu mail",
  ],
  lecciones: [
    { titulo: "El problema que resuelve", video: {"id":"DinilgacaWs","t":"Qué es Git y GitHub · Platzi (2:31)"}, html: `
      <p class="idea">Si alguna vez tuviste archivos como "trabajo_final.docx", "trabajo_final_v2.docx" y "trabajo_final_ESTE_SI.docx", ya conocés el problema. El <strong>control de versiones</strong> guarda cada versión de tus archivos con fecha, autor y un mensaje, sin llenar la carpeta de copias.</p>
      <table>
        <tr><th>Sin control de versiones</th><th>Con Git</th></tr>
        <tr><td>Copias con nombres raros</td><td>Un solo archivo, con todo su historial</td></tr>
        <tr><td>"¿Qué cambié ayer?" No se sabe</td><td>Ves exactamente qué cambió, cuándo y quién</td></tr>
        <tr><td>Si se rompe algo, no hay vuelta atrás</td><td>Volvés a cualquier versión anterior</td></tr>
        <tr><td>Dos personas editan y se pisan</td><td>Cada una trabaja en su rama y después se unen</td></tr>
      </table>
      <p><strong>Git sirve para cualquier archivo de texto:</strong> código, páginas web, documentación, recetas. Es la herramienta que usan casi todos los equipos de programación del mundo.</p>
      <p>En todo el curso usamos el mismo ejemplo: una carpeta <strong>recetas</strong> con archivos de texto, para que te concentres en Git y no en el código.</p>
      <p>Por ejemplo, si un cambio en una página web la rompe, con Git volvés a la versión de ayer en un minuto, en lugar de tratar de recordar qué tocaste.</p>` },
    { titulo: "Git y GitHub no son lo mismo", html: `
      <p class="idea"><strong>Git</strong> es un programa que se instala en tu compu y guarda el historial de una carpeta. <strong>GitHub</strong> es un sitio web donde subís esa carpeta para tener una copia en internet, compartirla y trabajar con otras personas.</p>
      <table>
        <tr><th></th><th>Git</th><th>GitHub</th></tr>
        <tr><td>Qué es</td><td>Un programa</td><td>Un sitio web (un servicio)</td></tr>
        <tr><td>Dónde está</td><td>En tu compu</td><td>En internet</td></tr>
        <tr><td>Necesita internet</td><td>No</td><td>Sí</td></tr>
        <tr><td>Para qué</td><td>Guardar versiones</td><td>Copia en la nube, compartir y colaborar</td></tr>
      </table>
      <p><strong>Repositorio</strong> (o "repo") es una carpeta que Git sigue, con todo su historial. Puede estar en tu compu (repositorio local) y en GitHub (repositorio remoto).</p>
      <p><strong>Hay otros sitios parecidos a GitHub,</strong> como GitLab. Lo que aprendas de Git sirve igual en todos.</p>
      <p>Por ejemplo, podés usar Git toda una semana sin internet, guardando versiones en tu compu, y el viernes subir todo a GitHub de una sola vez.</p>` },
    { titulo: "Instalar y configurar", html: `
      <p class="idea">Git se usa desde la <strong>terminal</strong>: una ventana donde escribís comandos. En Windows, al instalar Git se instala también "Git Bash", una terminal lista para usar.</p>
      <table>
        <tr><th>Sistema</th><th>Cómo instalar</th></tr>
        <tr><td>Windows</td><td>Bajar el instalador de git-scm.com y aceptar las opciones por defecto</td></tr>
        <tr><td>Mac</td><td>Escribir git --version en la terminal: si no está, el sistema ofrece instalarlo</td></tr>
        <tr><td>Linux</td><td>Con el gestor de paquetes, por ejemplo sudo apt install git</td></tr>
      </table>
      <pre><code># Comprobar que está instalado
git --version
git version 2.47.1

# Configurar tu nombre y tu mail (una sola vez por compu)
git config --global user.name "Ana Gómez"
git config --global user.email "ana@ejemplo.com"

# Que la rama principal se llame main
git config --global init.defaultBranch main</code></pre>
      <p><strong>El nombre y el mail aparecen en cada versión que guardes.</strong> Si vas a usar GitHub, usá el mismo mail de tu cuenta.</p>
      <p><strong>Las líneas que empiezan con #</strong> son comentarios: explican, pero no se escriben.</p>
      <p>Por ejemplo, si te saltás la configuración, Git te va a frenar con un aviso la primera vez que quieras guardar una versión, pidiéndote nombre y mail.</p>` },
  ],
  practica: [
    "Buscá en tu compu un caso de archivos con nombres como \"final_v2\" y anotá cuántas copias hay y cuál es la buena.",
    "Instalá Git, corré git --version y anotá la versión que te muestra.",
    "Configurá tu nombre, tu mail y la rama main, y verificá con git config --global --list que aparezcan las 3 líneas. Anotalas.",
  ],
  recursos: [
    { t: "Pro Git: qué es el control de versiones", url: "https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones" },
    { t: "GitHub Docs: acerca de Git", url: "https://docs.github.com/es/get-started/using-git/about-git" },
    { t: "Pro Git, el libro oficial de Git, en español", url: "https://git-scm.com/book/es/v2" },
  ],
  quiz: [
    { q: "Si tenés \"informe_v2\", \"informe_final\" e \"informe_final_bueno\", ¿qué te resolvería Git?", opciones: ["Borrar las copias viejas","Mandar el informe por mail","Tener un solo archivo con todo su historial de versiones","Cambiar el nombre del archivo"], correcta: 2, explicacion: "Git guarda las versiones sin copias. Borrar las viejas tienta por ordenar, pero perdés el historial." },
    { q: "Si querés saber qué cambió en un archivo ayer y quién lo cambió, ¿qué te da Git?", opciones: ["El historial con cada cambio, fecha y autor","Nada, eso no se guarda","Solo la fecha","Solo el tamaño del archivo"], correcta: 0, explicacion: "Cada versión guarda qué, cuándo y quién. \"Solo la fecha\" tienta, pero también ves el cambio exacto." },
    { q: "Si un cambio rompió tu página web, ¿qué podés hacer con Git?", opciones: ["Nada, hay que rehacerla","Llamar al proveedor de internet","Esperar a que se arregle","Volver a una versión anterior que funcionaba"], correcta: 3, explicacion: "Git permite volver atrás. \"Rehacerla\" tienta si no conocés Git, pero el historial tiene la versión buena." },
    { q: "Si querés guardar versiones sin internet, ¿qué usás?", opciones: ["Solo GitHub","Git, que funciona en tu compu","Un mail","Nada, sin internet no se puede"], correcta: 1, explicacion: "Git es local. GitHub tienta porque es el nombre más conocido, pero necesita internet." },
    { q: "Si querés compartir tu proyecto con otras personas por internet, ¿qué usás además de Git?", opciones: ["Solo Git","Un pendrive","GitHub (u otro sitio parecido)","La papelera"], correcta: 2, explicacion: "GitHub guarda una copia en internet y permite colaborar. \"Solo Git\" tienta, pero Git solo está en tu compu." },
    { q: "Si una carpeta tiene historial de Git, ¿cómo se llama?", opciones: ["Repositorio","Rama","Commit","Terminal"], correcta: 0, explicacion: "Un repositorio es la carpeta seguida por Git. Rama tienta, pero es una línea de trabajo dentro del repositorio." },
    { q: "Si aprendés Git y tu trabajo usa GitLab en vez de GitHub, ¿te sirve lo aprendido?", opciones: ["No, hay que aprender todo de nuevo","Solo la mitad","No, Git es solo de GitHub","Sí: Git funciona igual con cualquiera de esos sitios"], correcta: 3, explicacion: "Git es el mismo. \"Git es solo de GitHub\" tienta por los nombres parecidos, pero son cosas distintas." },
    { q: "Si querés saber si Git está instalado, ¿qué escribís en la terminal?", opciones: ["git install","git --version","github","version git please"], correcta: 1, explicacion: "git --version muestra la versión. git install tienta, pero ese comando no existe." },
    { q: "Si recién instalaste Git, ¿qué configurás antes de guardar versiones?", opciones: ["Nada","Tu contraseña de GitHub","Tu nombre y tu mail con git config --global","El color de la terminal"], correcta: 2, explicacion: "Nombre y mail van en cada versión. La contraseña tienta, pero Git no la pide para guardar versiones en tu compu." },
    { q: "Si vas a usar GitHub, ¿qué mail configurás en Git?", opciones: ["El mismo mail de tu cuenta de GitHub","Cualquiera inventado","El de otra persona","Ninguno"], correcta: 0, explicacion: "Así GitHub te reconoce como autor. Uno inventado tienta, pero tus cambios no quedan asociados a tu cuenta." },
    { q: "Si en un comando ves una línea que empieza con #, ¿qué es?", opciones: ["Un comando obligatorio","Un error","La contraseña","Un comentario que explica: no se escribe"], correcta: 3, explicacion: "El # marca comentarios. \"Comando obligatorio\" tienta porque está en el bloque, pero solo explica." },
    { q: "Si querés que la rama principal se llame main, ¿qué configurás?", opciones: ["git main","git config --global init.defaultBranch main","git rename main","No se puede elegir"], correcta: 1, explicacion: "Ese ajuste define el nombre de la rama inicial. git rename tienta por el nombre, pero no existe." },
  ],
},
{
  id: "commits",
  icono: "📸",
  titulo: "Guardar versiones: commits",
  nivel: "Básico",
  objetivos: [
    "Crear un repositorio y guardar versiones con add y commit",
    "Leer lo que dice git status en cada momento",
    "Ver el historial y las diferencias con log y diff",
  ],
  lecciones: [
    { titulo: "Las tres zonas", html: `
      <p class="idea">Git trabaja con tres zonas. Entenderlas es la clave para que los comandos tengan sentido.</p>
      <pre><code>Carpeta de trabajo   →   Área de preparación   →   Historial
 (lo que editás)          (lo que vas a guardar)     (versiones guardadas)
                git add                    git commit</code></pre>
      <table>
        <tr><th>Zona</th><th>Qué hay</th></tr>
        <tr><td>Carpeta de trabajo</td><td>Tus archivos, tal como los estás editando</td></tr>
        <tr><td>Área de preparación (staging)</td><td>Los cambios que elegiste para la próxima versión</td></tr>
        <tr><td>Historial</td><td>Las versiones guardadas, llamadas commits</td></tr>
      </table>
      <p><strong>Un commit</strong> es una foto de los archivos preparados, con un mensaje que explica qué cambió. Cada commit tiene un código único (como e2e86bf).</p>
      <p><strong>¿Por qué un paso intermedio?</strong> Para elegir qué entra en cada versión. Si cambiaste 3 archivos, pero solo 2 tienen que ver con lo mismo, preparás esos 2 y guardás.</p>
      <p>Por ejemplo, el área de preparación es como armar una caja antes de cerrarla: ponés solo lo que va junto, y recién después la cerrás y le ponés etiqueta.</p>` },
    { titulo: "init, status, add y commit", video: {"id":"osO_eYMIKxM","t":"Git add, git commit y git push · TodoCode (9:23)"}, html: `
      <p class="idea">Con cuatro comandos ya podés guardar versiones. El más importante es <strong>git status</strong>: te dice en qué situación estás y muchas veces qué hacer después.</p>
      <pre><code>git init                    # empezar a seguir esta carpeta
git status
On branch main
No commits yet
nothing to commit (create/copy files and use "git add" to track)

# Creás README.md y volvés a mirar:
git status
Untracked files:
  (use "git add &lt;file&gt;..." to include in what will be committed)
	README.md

git add README.md           # prepararlo
git status
Changes to be committed:
	new file:   README.md

git commit -m "Agregar README"   # guardar la versión</code></pre>
      <table>
        <tr><th>Git dice</th><th>Significa</th></tr>
        <tr><td>Untracked files</td><td>Archivos nuevos que Git todavía no sigue</td></tr>
        <tr><td>Changes not staged for commit</td><td>Archivos cambiados, sin preparar</td></tr>
        <tr><td>Changes to be committed</td><td>Preparados: entran en el próximo commit</td></tr>
        <tr><td>nothing to commit, working tree clean</td><td>Todo guardado</td></tr>
      </table>
      <p><strong>Git muestra los mensajes en inglés</strong> en la mayoría de las instalaciones. Con la tabla alcanza para entenderlos.</p>
      <p>Por ejemplo, si después de git add te olvidás de git commit, el cambio queda preparado, pero no guardado: git status te lo recuerda con "Changes to be committed".</p>` },
    { titulo: "Historial, diferencias y buenos mensajes", html: `
      <p class="idea">Con <strong>git log</strong> ves las versiones guardadas y con <strong>git diff</strong> ves exactamente qué cambió y todavía no guardaste.</p>
      <pre><code>git log --oneline
abd9d9d Agregar receta de torta
e2e86bf Agregar README

# Agregás una línea a torta.txt y mirás qué cambió:
git diff
--- a/torta.txt
+++ b/torta.txt
@@ -1 +1,2 @@
 Torta de manzana
+Con canela</code></pre>
      <p>En git diff, las líneas con <strong>+</strong> se agregaron y las con <strong>-</strong> se borraron. El commit más nuevo aparece arriba en git log.</p>
      <table>
        <tr><th>Mensaje flojo</th><th>Buen mensaje</th></tr>
        <tr><td>"cambios"</td><td>"Agregar receta de torta"</td></tr>
        <tr><td>"arreglo"</td><td>"Corregir cantidad de harina en la torta"</td></tr>
        <tr><td>"asdf"</td><td>"Sacar recetas repetidas"</td></tr>
      </table>
      <p><strong>Un buen mensaje</strong> dice qué hace el cambio, en pocas palabras, empezando con un verbo. Tu yo del futuro te lo va a agradecer.</p>
      <p><strong>Commits chicos y seguidos:</strong> un commit por cada cambio con sentido, no uno gigante por semana.</p>
      <p>Por ejemplo, con mensajes como "cambios" en 40 commits, buscar cuándo se rompió algo lleva una hora; con buenos mensajes, un minuto.</p>` },
  ],
  practica: [
    "Creá una carpeta recetas, hacé git init y corré git status. Anotá qué dice.",
    "Creá 2 archivos, preparalos con git add y guardalos con 2 commits distintos. Corré git log --oneline y anotá los códigos que aparecen.",
    "Cambiá una línea de un archivo, corré git diff y anotá qué líneas aparecen con + y con -. Después guardá el cambio con un buen mensaje.",
  ],
  recursos: [
    { t: "Pro Git, el libro oficial de Git, en español", url: "https://git-scm.com/book/es/v2" },
    { t: "GitHub Docs: acerca de Git", url: "https://docs.github.com/es/get-started/using-git/about-git" },
  ],
  quiz: [
    { q: "Si editaste un archivo y querés elegirlo para la próxima versión, ¿qué comando usás?", opciones: ["git commit","git log","git add","git init"], correcta: 2, explicacion: "git add prepara el cambio. git commit tienta porque guarda, pero guarda solo lo que ya está preparado." },
    { q: "Si ya preparaste los cambios y querés guardar la versión, ¿qué comando usás?", opciones: ["git commit -m \"mensaje\"","git add","git status","git diff"], correcta: 0, explicacion: "git commit guarda la versión. git add tienta, pero solo prepara." },
    { q: "Si cambiaste 3 archivos, pero solo 2 tienen que ver con lo mismo, ¿qué hacés?", opciones: ["Los guardás todos juntos siempre","No guardás nada","Borrás el tercero","Preparás esos 2 con git add y hacés un commit; el otro va en otro commit"], correcta: 3, explicacion: "El área de preparación sirve para elegir. Guardar todo junto tienta por rápido, pero mezcla cambios distintos." },
    { q: "Si querés empezar a seguir una carpeta con Git, ¿qué comando usás?", opciones: ["git start","git init","git add","git new"], correcta: 1, explicacion: "git init crea el repositorio. git start tienta por el nombre, pero no existe." },
    { q: "Si no sabés en qué situación está tu repositorio, ¿qué comando usás?", opciones: ["git commit","git init","git status","git push"], correcta: 2, explicacion: "git status te dice dónde estás y qué hacer. git commit tienta, pero podrías guardar algo que no querías." },
    { q: "Si git status dice \"Untracked files\" con README.md, ¿qué significa?", opciones: ["Que README.md es nuevo y Git todavía no lo sigue","Que está guardado","Que se borró","Que tiene un error"], correcta: 0, explicacion: "Untracked es \"sin seguimiento\". \"Está guardado\" tienta, pero todavía no entró ni a preparación." },
    { q: "Si git status dice \"Changes to be committed\", ¿qué pasa?", opciones: ["Ya está todo guardado","No hay cambios","Hay un conflicto","Hay cambios preparados que entran en el próximo commit"], correcta: 3, explicacion: "Están preparados, falta el commit. \"Ya está guardado\" tienta, pero sin commit no hay versión." },
    { q: "Si git status dice \"nothing to commit, working tree clean\", ¿qué significa?", opciones: ["Que se borró todo","Que todo está guardado y no hay cambios pendientes","Que Git no está instalado","Que hay que hacer git add"], correcta: 1, explicacion: "Está todo al día. \"Se borró todo\" tienta por el \"nothing\", pero los archivos siguen ahí." },
    { q: "Si querés ver la lista de versiones guardadas, ¿qué usás?", opciones: ["git diff","git add","git log (o git log --oneline para verla corta)","git status"], correcta: 2, explicacion: "git log muestra el historial. git diff tienta, pero muestra cambios no guardados." },
    { q: "Si en git diff una línea empieza con +, ¿qué significa?", opciones: ["Que se agregó","Que se borró","Que es un error","Que es un comentario"], correcta: 0, explicacion: "El + es una línea nueva. \"Se borró\" tienta, pero eso se marca con -." },
    { q: "Si en git log --oneline ves dos commits, ¿cuál es el más nuevo?", opciones: ["El de abajo","Los dos tienen la misma fecha","No se puede saber","El de arriba"], correcta: 3, explicacion: "git log muestra primero lo más reciente. El de abajo tienta si leés como una lista normal." },
    { q: "Si vas a guardar un cambio que corrige la cantidad de harina, ¿qué mensaje usás?", opciones: ["\"cambios\"","\"Corregir cantidad de harina en la torta\"","\"arreglo\"","\"asdf\""], correcta: 1, explicacion: "Un buen mensaje dice qué hace el cambio. \"arreglo\" tienta por corto, pero no dice qué se arregló." },
  ],
},
{
  id: "deshacer",
  icono: "↩️",
  titulo: "Deshacer cambios e ignorar archivos",
  nivel: "Intermedio",
  objetivos: [
    "Descartar cambios sin guardar y sacar archivos de preparación",
    "Deshacer un commit sin borrar el historial con git revert",
    "Usar .gitignore para que archivos privados nunca entren al repositorio",
  ],
  lecciones: [
    { titulo: "Deshacer antes de guardar", html: `
      <p class="idea">Si todavía no hiciste commit, deshacer es fácil. El comando es <strong>git restore</strong>, y tiene dos usos según dónde esté el cambio.</p>
      <pre><code># Cambiaste torta.txt y querés volver a la última versión guardada:
git restore torta.txt
cat torta.txt
Torta de manzana

# Preparaste borrador.txt con git add, pero no querías:
git restore --staged borrador.txt
git status --short
?? borrador.txt</code></pre>
      <table>
        <tr><th>Situación</th><th>Comando</th><th>Qué pasa</th></tr>
        <tr><td>Cambié un archivo y quiero descartar el cambio</td><td>git restore archivo</td><td>Vuelve a la última versión guardada (el cambio se pierde)</td></tr>
        <tr><td>Preparé algo que no quería</td><td>git restore --staged archivo</td><td>Sale de preparación, pero el cambio sigue en el archivo</td></tr>
      </table>
      <p><strong>Cuidado:</strong> git restore sin --staged descarta lo que no guardaste. Si no estás seguro, primero copiá el archivo a otro lado.</p>
      <p><strong>git status --short</strong> muestra lo mismo en una línea por archivo: ?? es sin seguimiento, M es modificado, A es agregado.</p>
      <p>Por ejemplo, si probaste cambios en una receta y la dejaste peor, git restore la vuelve a como estaba en el último commit en un segundo.</p>` },
    { titulo: "Deshacer un commit con revert", html: `
      <p class="idea">Si el error ya está en un commit, lo más seguro es <strong>git revert</strong>: crea un commit nuevo que hace lo contrario. El historial no se borra: queda registrado el error y su corrección.</p>
      <pre><code>git log --oneline
668192d Agregar un error
abd9d9d Agregar receta de torta

git revert --no-edit HEAD
[main b9d940a] Revert "Agregar un error"

git log --oneline
b9d940a Revert "Agregar un error"
668192d Agregar un error
abd9d9d Agregar receta de torta</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>HEAD</td><td>El commit en el que estás parado (normalmente, el último)</td></tr>
        <tr><td>--no-edit</td><td>Usa el mensaje automático "Revert ..." sin abrir un editor</td></tr>
      </table>
      <p><strong>Por qué revert y no borrar:</strong> si ya compartiste el commit en GitHub, borrarlo del historial le complica la vida a todos los que lo bajaron. Revert es seguro siempre.</p>
      <p><strong>Hay comandos que reescriben el historial</strong> (como git reset --hard). Pueden borrar trabajo: dejalos para cuando tengas más experiencia.</p>
      <p>Por ejemplo, si subiste una receta con un error y alguien ya la bajó, git revert la corrige sin romper la copia de esa persona.</p>` },
    { titulo: ".gitignore y los secretos", video: {"id":"Ikf7hjMDmzw","t":"Cómo usar .gitignore · makigas (10:43)"}, html: `
      <p class="idea">El archivo <strong>.gitignore</strong> es una lista de archivos que Git no tiene que seguir nunca: archivos temporales, pesados o privados.</p>
      <pre><code># Contenido de .gitignore
contrasenas.txt
*.log

# Con eso, git status no muestra esos archivos:
git status --short
?? .gitignore</code></pre>
      <table>
        <tr><th>Regla</th><th>Qué ignora</th></tr>
        <tr><td>contrasenas.txt</td><td>Ese archivo</td></tr>
        <tr><td>*.log</td><td>Todos los archivos que terminan en .log</td></tr>
        <tr><td>carpeta/</td><td>Una carpeta entera</td></tr>
      </table>
      <p><strong>Nunca subas secretos:</strong> contraseñas, tokens, claves de acceso o datos personales. Si llegan a GitHub, aunque los borres después, quedan en el historial y alguien puede encontrarlos.</p>
      <p><strong>Si se subió un secreto por error:</strong> cambiá esa contraseña o clave enseguida. Es más seguro que tratar de borrarla del historial.</p>
      <p><strong>Ponelo al principio:</strong> .gitignore solo afecta a archivos que Git todavía no sigue. Si un archivo ya está en un commit, hay que sacarlo del seguimiento aparte.</p>
      <p>Por ejemplo, un archivo con la clave de una base de datos subido a un repositorio público puede ser encontrado por programas automáticos en pocos minutos.</p>` },
  ],
  practica: [
    "Cambiá un archivo de tu repositorio, verificá el cambio con git diff y descartalo con git restore. Anotá qué muestra git status antes y después.",
    "Hacé un commit con un error a propósito y deshacelo con git revert. Corré git log --oneline y anotá cuántos commits quedaron.",
    "Creá un .gitignore con un archivo y una regla *.log, creá esos archivos y comprobá con git status --short que no aparecen. Anotá el resultado.",
  ],
  recursos: [
    { t: "GitHub Docs: ignorar archivos (.gitignore)", url: "https://docs.github.com/es/get-started/getting-started-with-git/ignoring-files" },
    { t: "Pro Git, el libro oficial de Git, en español", url: "https://git-scm.com/book/es/v2" },
  ],
  quiz: [
    { q: "Si cambiaste torta.txt, no hiciste commit y querés volver a como estaba, ¿qué usás?", opciones: ["git revert torta.txt","git commit torta.txt","git restore torta.txt","git add torta.txt"], correcta: 2, explicacion: "restore descarta cambios no guardados. revert tienta porque también deshace, pero es para commits." },
    { q: "Si preparaste un archivo con git add por error, ¿cómo lo sacás de preparación?", opciones: ["git restore --staged archivo","git restore archivo","Borrando el archivo","git commit"], correcta: 0, explicacion: "--staged lo saca de preparación y conserva el cambio. Sin --staged tienta, pero además perdés lo que cambiaste." },
    { q: "Si usás git restore sin --staged en un archivo con cambios sin guardar, ¿qué pasa con esos cambios?", opciones: ["Se guardan en un commit","Pasan a preparación","Se suben a GitHub","Se pierden"], correcta: 3, explicacion: "Descarta lo no guardado. \"Se guardan\" tienta por el nombre restore, pero vuelve a la versión anterior." },
    { q: "Si git status --short muestra ?? antes de un archivo, ¿qué significa?", opciones: ["Que está modificado","Que no tiene seguimiento","Que tiene un error","Que está guardado"], correcta: 1, explicacion: "?? es sin seguimiento. \"Modificado\" tienta, pero eso se marca con M." },
    { q: "Si el error ya está en un commit, ¿cuál es la forma más segura de deshacerlo?", opciones: ["git restore","Borrar la carpeta","git revert, que crea un commit nuevo con lo contrario","git reset --hard"], correcta: 2, explicacion: "revert deshace sin borrar historial. reset --hard tienta por definitivo, pero puede borrar trabajo." },
    { q: "Si hacés git revert de un commit, ¿qué pasa con el historial?", opciones: ["Queda el commit con el error y uno nuevo que lo deshace","Se borra el commit con el error","Se borra todo","No cambia nada"], correcta: 0, explicacion: "revert suma un commit. \"Se borra\" tienta, pero justamente revert no borra." },
    { q: "Si en un comando ves HEAD, ¿a qué se refiere?", opciones: ["Al primer commit","A GitHub","A la carpeta principal","Al commit en el que estás parado, normalmente el último"], correcta: 3, explicacion: "HEAD es tu posición actual. \"El primer commit\" tienta, pero es el más reciente." },
    { q: "Si ya compartiste un commit en GitHub y tiene un error, ¿por qué conviene revert?", opciones: ["Porque es más rápido de escribir","Porque no rompe las copias de quienes ya lo bajaron","Porque borra el error del todo","No conviene"], correcta: 1, explicacion: "revert respeta el historial compartido. \"Borra el error del todo\" tienta, pero eso es lo que complica a los demás." },
    { q: "Si querés que Git nunca siga un archivo de contraseñas, ¿qué hacés?", opciones: ["Le cambiás el nombre","Lo subís y después lo borrás","Lo agregás a .gitignore antes de hacer commit","Lo ponés en otra rama"], correcta: 2, explicacion: ".gitignore evita que entre. Subirlo y borrarlo tienta, pero queda en el historial." },
    { q: "Si en .gitignore escribís *.log, ¿qué ignora Git?", opciones: ["Todos los archivos que terminan en .log","Solo un archivo llamado *.log","Todos los archivos","Nada"], correcta: 0, explicacion: "El * significa \"cualquier nombre\". \"Solo un archivo\" tienta, pero la regla abarca todos los .log." },
    { q: "Si subiste una contraseña a GitHub por error, ¿qué hacés primero?", opciones: ["Nada, nadie la va a ver","Borrás el archivo y listo","Esperás a ver si alguien la usa","Cambiás esa contraseña enseguida"], correcta: 3, explicacion: "Cambiarla la deja inútil. Borrar el archivo tienta, pero sigue en el historial." },
    { q: "Si agregás a .gitignore un archivo que ya estaba en un commit, ¿qué pasa?", opciones: ["Se borra del historial","Git lo sigue igual: .gitignore solo afecta a archivos sin seguimiento","Se borra de tu compu","Deja de seguirlo enseguida"], correcta: 1, explicacion: ".gitignore no actúa sobre lo ya seguido. \"Deja de seguirlo\" tienta, pero hay que sacarlo del seguimiento aparte." },
  ],
},
{
  id: "ramas",
  icono: "🌿",
  titulo: "Ramas y uniones",
  nivel: "Intermedio",
  objetivos: [
    "Crear una rama para trabajar sin tocar main",
    "Unir una rama con git merge",
    "Resolver un conflicto leyendo sus marcas",
  ],
  lecciones: [
    { titulo: "Qué es una rama", video: {"id":"BaY7FvCIH18","t":"Ramas y uniones (merge) · MitoCode (7:36)"}, html: `
      <p class="idea">Una <strong>rama</strong> es una línea de trabajo separada. Te deja probar o desarrollar algo nuevo sin tocar la versión principal (main) hasta que esté listo.</p>
      <pre><code>main:     A ── B ─────────── E   (E une el trabajo de postres)
                  \\           /
postres:           C ── D ──┘</code></pre>
      <pre><code>git switch -c postres        # crear la rama y pasarte a ella
Switched to a new branch 'postres'

# Agregás flan.txt y hacés commit en la rama postres

git switch main              # volver a main
Switched to branch 'main'
ls                           # en main todavía no está flan.txt
README.md  torta.txt</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué hace</th></tr>
        <tr><td>git branch</td><td>Lista las ramas (la actual tiene un *)</td></tr>
        <tr><td>git switch -c nombre</td><td>Crea una rama y te pasa a ella</td></tr>
        <tr><td>git switch nombre</td><td>Te pasa a una rama que ya existe</td></tr>
      </table>
      <p><strong>Al cambiar de rama, cambian los archivos de la carpeta:</strong> ves la versión de esa rama. No se pierde nada: está guardado en su rama.</p>
      <p>Por ejemplo, si querés probar un diseño nuevo de tu página sin romper la que está publicada, lo hacés en una rama; si no te gusta, la descartás.</p>` },
    { titulo: "Unir con merge", html: `
      <p class="idea">Cuando el trabajo de una rama está listo, se une a main con <strong>git merge</strong>. Te parás en la rama que recibe los cambios y nombrás la que querés traer.</p>
      <pre><code>git switch main
git merge postres
Updating b9d940a..2db2f1c
Fast-forward
 flan.txt | 1 +

ls
README.md  flan.txt  torta.txt</code></pre>
      <table>
        <tr><th>Tipo de unión</th><th>Cuándo pasa</th></tr>
        <tr><td>Fast-forward</td><td>main no cambió mientras trabajabas en la rama: Git solo "adelanta" main</td></tr>
        <tr><td>Commit de unión</td><td>Las dos ramas tuvieron cambios: Git crea un commit nuevo que junta ambas</td></tr>
        <tr><td>Conflicto</td><td>Las dos ramas cambiaron las mismas líneas: tenés que decidir vos</td></tr>
      </table>
      <p><strong>Después de unir,</strong> la rama se puede borrar con git branch -d postres: su trabajo ya está en main.</p>
      <p><strong>Una rama por tarea:</strong> "postres", "corregir-harina", "nuevo-diseño". Ramas cortas, que se unen rápido, dan menos conflictos.</p>
      <p>Por ejemplo, el mensaje Fast-forward te dice que la unión fue directa y sin riesgo, porque nadie tocó main mientras tanto.</p>` },
    { titulo: "Resolver un conflicto", video: {"id":"CzOj076YGRY","t":"Cómo resolver conflictos en Git · makigas (7:51)"}, html: `
      <p class="idea">Hay un <strong>conflicto</strong> cuando dos ramas cambiaron las mismas líneas de forma distinta. Git no sabe cuál es la buena y te pide que decidas. No es un error grave: es una pregunta.</p>
      <pre><code>git merge cambio
Auto-merging torta.txt
CONFLICT (content): Merge conflict in torta.txt
Automatic merge failed; fix conflicts and then commit the result.

cat torta.txt
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Torta de manzana con pasas
=======
Torta de manzana con nueces
&gt;&gt;&gt;&gt;&gt;&gt;&gt; cambio</code></pre>
      <table>
        <tr><th>Marca</th><th>Qué significa</th></tr>
        <tr><td>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</td><td>Empieza tu versión (la de la rama donde estás)</td></tr>
        <tr><td>=======</td><td>Separa las dos versiones</td></tr>
        <tr><td>&gt;&gt;&gt;&gt;&gt;&gt;&gt; cambio</td><td>Termina la versión de la otra rama</td></tr>
      </table>
      <pre><code>Para resolver:
1. Abrí el archivo y dejá el texto final (una versión, la otra o una mezcla):
   Torta de manzana con pasas y nueces
2. Borrá las tres líneas de marcas.
3. git add torta.txt
4. git commit -m "Unir pasas y nueces en la torta"

Si te arrepentís antes de terminar: git merge --abort</code></pre>
      <p>Por ejemplo, si dos personas cambian la misma línea de una receta, Git no elige por ellas: te muestra las dos versiones para que decidas con sentido.</p>` },
  ],
  practica: [
    "Creá una rama nueva, agregá un archivo con un commit y volvé a main. Anotá qué archivos ves con ls en cada rama.",
    "Uní la rama a main con git merge y anotá si fue Fast-forward o con commit de unión.",
    "Provocá un conflicto cambiando la misma línea en dos ramas, resolvelo y anotá cuántas líneas de marcas borraste y qué texto final dejaste.",
  ],
  recursos: [
    { t: "Learn Git Branching: practicar ramas en el navegador", url: "https://learngitbranching.js.org/?locale=es_AR" },
    { t: "Pro Git, el libro oficial de Git, en español", url: "https://git-scm.com/book/es/v2" },
  ],
  quiz: [
    { q: "Si querés probar un cambio sin tocar la versión principal, ¿qué hacés?", opciones: ["Trabajás directo en main","Copiás la carpeta entera","Creás una rama y trabajás ahí","Borrás main"], correcta: 2, explicacion: "Las ramas separan el trabajo. Copiar la carpeta tienta por conocido, pero volvés al problema de las copias." },
    { q: "Si querés crear una rama llamada postres y pasarte a ella, ¿qué escribís?", opciones: ["git switch -c postres","git postres","git merge postres","git commit postres"], correcta: 0, explicacion: "switch -c crea y cambia. merge tienta porque aparece el nombre, pero une ramas, no las crea." },
    { q: "Si estás en postres y querés volver a la rama principal, ¿qué escribís?", opciones: ["git switch -c main","git main","git init main","git switch main"], correcta: 3, explicacion: "Sin -c, switch te pasa a una rama existente. Con -c tienta, pero intentaría crear otra rama main." },
    { q: "Si cambiás de rama y un archivo \"desaparece\", ¿qué pasó?", opciones: ["Se borró para siempre","Nada se perdió: ese archivo está en la otra rama","Git tiene un error","Hay que reinstalar Git"], correcta: 1, explicacion: "Cada rama muestra su versión. \"Se borró\" tienta por el susto, pero está guardado en su rama." },
    { q: "Si querés ver en qué rama estás, ¿qué usás?", opciones: ["git log","git diff","git branch, que marca la actual con *","git add"], correcta: 2, explicacion: "git branch lista ramas y marca la actual. git log tienta, pero muestra commits." },
    { q: "Si querés traer el trabajo de postres a main, ¿dónde te parás y qué escribís?", opciones: ["En main, y escribís git merge postres","En postres, y escribís git merge main","En cualquiera, y escribís git join","En main, y escribís git switch postres"], correcta: 0, explicacion: "Te parás en la que recibe. Al revés tienta, pero traerías main a postres." },
    { q: "Si git merge dice Fast-forward, ¿qué significa?", opciones: ["Que hubo un conflicto","Que se borraron archivos","Que falló","Que main no cambió mientras tanto y Git solo la adelantó"], correcta: 3, explicacion: "Fast-forward es la unión más simple. \"Conflicto\" tienta por el mensaje en inglés, pero no hubo choque." },
    { q: "Si ya uniste la rama postres a main, ¿qué podés hacer con ella?", opciones: ["Nada, no se puede borrar","Borrarla con git branch -d postres, porque su trabajo ya está en main","Borrar main","Unirla otra vez"], correcta: 1, explicacion: "Su trabajo ya está en main. \"No se puede borrar\" tienta, pero se puede sin perder nada." },
    { q: "Si dos ramas cambiaron la misma línea de forma distinta, ¿qué pasa al unirlas?", opciones: ["Git elige la más nueva sola","Se borran las dos","Hay un conflicto y tenés que decidir vos","Se une sin avisar"], correcta: 2, explicacion: "Git no adivina. \"Elige la más nueva\" tienta, pero no sabe cuál es la buena." },
    { q: "Si en un archivo ves <<<<<<< HEAD, ¿qué empieza ahí?", opciones: ["Tu versión, la de la rama donde estás","La versión de la otra rama","Un comentario","El final del archivo"], correcta: 0, explicacion: "HEAD es donde estás parado. La otra rama tienta, pero esa viene después del =======." },
    { q: "Si ya dejaste el texto final y borraste las marcas, ¿qué hacés después?", opciones: ["git merge otra vez","Nada más","git restore","git add del archivo y git commit"], correcta: 3, explicacion: "Hay que guardar la resolución. \"Nada más\" tienta, pero la unión queda a medias sin el commit." },
    { q: "Si empezaste a resolver un conflicto y te arrepentiste, ¿qué usás?", opciones: ["git revert","git merge --abort","Borrar la carpeta","git init"], correcta: 1, explicacion: "--abort vuelve a antes de la unión. Borrar la carpeta tienta por desesperación, pero perdés todo." },
  ],
},
{
  id: "github",
  icono: "☁️",
  titulo: "Subir tu repositorio a GitHub",
  nivel: "Intermedio",
  objetivos: [
    "Conectar un repositorio local con uno en GitHub y subirlo con push",
    "Bajar un repositorio con clone y traer cambios con pull",
    "Escribir un README que explique tu proyecto",
  ],
  lecciones: [
    { titulo: "Conectar y subir: remote y push", html: `
      <p class="idea">Para subir tu repositorio, primero creás uno vacío en GitHub (botón "New repository"). Después le decís a Git dónde está, con un <strong>remoto</strong>, y subís con <strong>git push</strong>.</p>
      <pre><code># Una sola vez: decirle a Git dónde está el repositorio de GitHub
git remote add origin https://github.com/ana/recetas.git
git remote -v
origin  https://github.com/ana/recetas.git (fetch)
origin  https://github.com/ana/recetas.git (push)

# La primera vez que subís:
git push -u origin main
branch 'main' set up to track 'origin/main'.
 * [new branch]      main -&gt; main

# Las siguientes veces alcanza con:
git push</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>origin</td><td>El nombre que se le da por costumbre al remoto principal</td></tr>
        <tr><td>-u</td><td>Recuerda que tu main va con origin/main, para no repetirlo</td></tr>
        <tr><td>push</td><td>Subir tus commits al remoto</td></tr>
      </table>
      <p><strong>Push sube commits, no archivos sueltos:</strong> si cambiaste algo y no hiciste commit, no se sube.</p>
      <p><strong>Público o privado:</strong> al crear el repositorio elegís si lo puede ver cualquiera o solo vos y quienes invites.</p>
      <p>Por ejemplo, si hiciste 5 commits sin internet durante la semana, un git push el viernes los sube los 5 juntos.</p>` },
    { titulo: "Bajar y actualizar: clone y pull", html: `
      <p class="idea">Para trabajar en un repositorio que ya está en GitHub, lo bajás con <strong>git clone</strong>. Para traer los cambios que otros (o vos desde otra compu) subieron, usás <strong>git pull</strong>.</p>
      <pre><code>git clone https://github.com/ana/recetas.git
Cloning into 'recetas'...
done.

# Alguien subió una receta nueva. Traerla:
git pull
Updating 79f2c92..bdbf482
Fast-forward
 pizza.txt | 1 +
 1 file changed, 1 insertion(+)</code></pre>
      <table>
        <tr><th>Comando</th><th>Cuándo</th></tr>
        <tr><td>git clone dirección</td><td>Una sola vez, para tener el repositorio en tu compu</td></tr>
        <tr><td>git pull</td><td>Antes de empezar a trabajar, para tener lo último</td></tr>
        <tr><td>git push</td><td>Después de tus commits, para subirlos</td></tr>
      </table>
      <p><strong>El ciclo de todos los días:</strong> git pull → trabajar → git add → git commit → git push.</p>
      <p><strong>Si push te dice que fue rechazado</strong> ("rejected"), casi siempre es porque hay cambios en GitHub que vos no tenés: hacé git pull primero y después git push.</p>
      <p>Por ejemplo, si trabajás en la compu de casa y en la del trabajo, empezar siempre con git pull evita que una tenga una versión vieja.</p>` },
    { titulo: "Iniciar sesión y el README", html: `
      <p class="idea">Para subir cambios, GitHub tiene que saber que sos vos. Desde 2021, <strong>la contraseña de la cuenta no sirve</strong> para push desde la terminal: se usa un inicio de sesión por el navegador, un token o una clave SSH.</p>
      <table>
        <tr><th>Forma</th><th>Cómo es</th></tr>
        <tr><td>Por el navegador</td><td>En Windows, Git abre una ventana para iniciar sesión en GitHub la primera vez y lo recuerda</td></tr>
        <tr><td>Token</td><td>Una clave larga que se crea en la configuración de GitHub y se usa en lugar de la contraseña</td></tr>
        <tr><td>SSH</td><td>Un par de claves en tu compu: se configura una vez y no pide nada más</td></tr>
      </table>
      <p><strong>Un token es como una contraseña:</strong> no lo pegues en archivos del repositorio ni lo compartas.</p>
      <p>El <strong>README.md</strong> es el archivo que GitHub muestra en la página principal del repositorio. Se escribe en Markdown, un formato de texto simple.</p>
      <pre><code># Recetas

Recetas de la familia, con cantidades probadas.

## Cómo usarlo
Cada receta es un archivo .txt. Abrilo con cualquier editor.

## Recetas
- torta.txt: torta de manzana
- flan.txt: flan casero</code></pre>
      <p>Por ejemplo, un repositorio sin README obliga a abrir archivos para entender de qué se trata; con 5 líneas de README se entiende en segundos.</p>` },
  ],
  practica: [
    "Creá un repositorio vacío en GitHub, conectalo con git remote add y subí tu repositorio con git push -u origin main. Anotá la dirección del repositorio.",
    "Cloná tu repositorio en otra carpeta, hacé un commit ahí y subilo; después hacé git pull en la carpeta original. Anotá qué mostró git pull.",
    "Escribí un README.md con título, una descripción y una lista de archivos, y subilo. Anotá cuántas líneas tiene.",
  ],
  recursos: [
    { t: "GitHub Docs: Hola mundo, tu primer repositorio", url: "https://docs.github.com/es/get-started/start-your-journey/hello-world" },
    { t: "GitHub Docs: conectarse a GitHub con SSH", url: "https://docs.github.com/es/authentication/connecting-to-github-with-ssh" },
    { t: "Pro Git, el libro oficial de Git, en español", url: "https://git-scm.com/book/es/v2" },
  ],
  quiz: [
    { q: "Si querés que Git sepa dónde está tu repositorio de GitHub, ¿qué comando usás?", opciones: ["git push dirección","git init dirección","git remote add origin dirección","git clone origin"], correcta: 2, explicacion: "remote add conecta tu repositorio con GitHub. push tienta porque sube, pero primero hay que decir adónde." },
    { q: "Si es la primera vez que subís la rama main, ¿qué escribís?", opciones: ["git push -u origin main","git pull","git commit -u","git push --delete main"], correcta: 0, explicacion: "Con -u queda recordado el destino. git pull tienta, pero trae cambios en vez de subirlos." },
    { q: "Si en un comando ves origin, ¿a qué se refiere?", opciones: ["A la primera versión del proyecto","A la rama main","A tu compu","Al nombre del remoto principal, el repositorio en GitHub"], correcta: 3, explicacion: "origin es el remoto. \"La primera versión\" tienta por la palabra \"origen\", pero es el nombre del remoto." },
    { q: "Si cambiaste un archivo, no hiciste commit y hacés git push, ¿se sube el cambio?", opciones: ["Sí, se sube todo","No: push sube commits, no cambios sin guardar","Sí, pero solo el archivo","Se borra el cambio"], correcta: 1, explicacion: "Sin commit no hay nada que subir. \"Se sube todo\" tienta, pero push trabaja con versiones guardadas." },
    { q: "Si querés que solo vos y tus invitados vean el repositorio, ¿qué elegís al crearlo?", opciones: ["Público","Da igual, todos son privados","Privado","No se puede elegir"], correcta: 2, explicacion: "Privado lo limita a invitados. \"Todos son privados\" tienta, pero si elegís público, lo ve cualquiera." },
    { q: "Si querés bajar un repositorio de GitHub a tu compu por primera vez, ¿qué usás?", opciones: ["git clone dirección","git pull dirección","git init","Descargar cada archivo a mano"], correcta: 0, explicacion: "clone baja todo con su historial. pull tienta, pero es para actualizar algo que ya bajaste." },
    { q: "Si alguien subió cambios y querés traerlos a tu copia, ¿qué usás?", opciones: ["git push","git clone otra vez","git commit","git pull"], correcta: 3, explicacion: "pull trae lo nuevo. Clonar otra vez tienta, pero crearía una carpeta duplicada." },
    { q: "Si vas a empezar a trabajar en un repositorio compartido, ¿qué hacés primero?", opciones: ["git push","git pull, para tener lo último","Nada, empezás directo","git init"], correcta: 1, explicacion: "Empezar con lo último evita choques. \"Empezás directo\" tienta por rápido, pero trabajás sobre una versión vieja." },
    { q: "Si git push te dice \"rejected\", ¿qué suele pasar?", opciones: ["GitHub se rompió","Tenés que borrar el repositorio","Hay cambios en GitHub que no tenés: hacés git pull y después git push","Hay que reinstalar Git"], correcta: 2, explicacion: "Casi siempre falta traer lo nuevo. \"GitHub se rompió\" tienta por el mensaje, pero el problema es tu copia desactualizada." },
    { q: "Si querés hacer push y Git te pide la contraseña de tu cuenta de GitHub, ¿qué tenés en cuenta?", opciones: ["Que la contraseña no sirve: se usa el inicio por navegador, un token o SSH","Que hay que escribirla igual","Que hay que crear otra cuenta","Que no se puede subir nada"], correcta: 0, explicacion: "Desde 2021 GitHub no acepta la contraseña para eso. Escribirla tienta, pero va a fallar." },
    { q: "Si creaste un token de GitHub, ¿dónde lo guardás?", opciones: ["En el README","En un archivo .txt del repositorio","En un mensaje de commit","En un lugar seguro, nunca dentro de un archivo del repositorio"], correcta: 3, explicacion: "Un token es como una contraseña. Guardarlo en el repositorio tienta por tenerlo a mano, pero cualquiera con acceso lo ve." },
    { q: "Si querés que la página de tu repositorio explique de qué se trata, ¿qué archivo escribís?", opciones: [".gitignore","README.md","index.txt","LEEME.exe"], correcta: 1, explicacion: "GitHub muestra el README en la página principal. .gitignore tienta porque también es especial, pero es para ignorar archivos." },
  ],
},
{
  id: "colaborar",
  icono: "🤝",
  titulo: "Colaborar y publicar",
  nivel: "Avanzado",
  objetivos: [
    "Proponer cambios con una rama y un pull request",
    "Usar issues para organizar tareas y errores",
    "Publicar una página web gratis con GitHub Pages",
  ],
  lecciones: [
    { titulo: "Issues", html: `
      <p class="idea">Un <strong>issue</strong> es una tarjeta en GitHub para anotar una tarea, una idea o un error del proyecto. Cada uno tiene título, descripción, comentarios y quién se encarga.</p>
      <pre><code>Issue #4 · La torta tiene mal la cantidad de harina
Descripción:  Dice 3 kg; debería ser 300 g.
Pasos:        Abrir torta.txt, línea 2.
Asignado a:   @ana
Etiqueta:     error</code></pre>
      <table>
        <tr><th>Buen issue</th><th>Mal issue</th></tr>
        <tr><td>Título que dice qué pasa</td><td>"No anda"</td></tr>
        <tr><td>Qué esperabas y qué pasó</td><td>Sin detalles</td></tr>
        <tr><td>Cómo reproducirlo</td><td>"A veces falla"</td></tr>
        <tr><td>Uno por tema</td><td>Cinco problemas en el mismo issue</td></tr>
      </table>
      <p><strong>Un commit o un pull request puede cerrar un issue</strong> si en su mensaje escribís "Closes #4": al unirse, GitHub lo cierra solo.</p>
      <p>Por ejemplo, en vez de un mensaje por WhatsApp que se pierde, un issue deja el problema anotado, con su discusión y su solución en el mismo lugar.</p>` },
    { titulo: "Fork y pull request", video: {"id":"BPns9r76vSI","t":"Cómo hacer tu primera pull request en GitHub · midudev (4:25)"}, html: `
      <p class="idea">Un <strong>pull request</strong> (PR) es un pedido para unir los cambios de una rama a otra, con espacio para revisarlos y comentarlos antes. Es la forma en que los equipos trabajan en GitHub.</p>
      <pre><code>En tu propio repositorio o en uno donde te dieron permiso:
1. git switch -c corregir-harina
2. Cambiás, git add, git commit -m "Corregir harina de la torta"
3. git push -u origin corregir-harina
4. En GitHub: botón "Compare &amp; pull request"
5. Título, descripción ("Closes #4") y crear el PR
6. Alguien lo revisa, comenta o aprueba
7. Se une con "Merge pull request"

En un repositorio ajeno, donde no tenés permiso:
0. Antes de todo, hacés un fork: tu propia copia en GitHub
   y trabajás ahí; el PR va de tu fork al original.</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>Fork</td><td>Tu copia de un repositorio ajeno, en tu cuenta de GitHub</td></tr>
        <tr><td>Revisión</td><td>Otra persona lee los cambios y comenta antes de unir</td></tr>
        <tr><td>Merge del PR</td><td>Unir los cambios, como git merge, pero desde GitHub</td></tr>
      </table>
      <p><strong>PR chicos se revisan mejor:</strong> un cambio de 20 líneas se revisa en 5 minutos; uno de 2.000, nadie lo revisa bien.</p>
      <p>Por ejemplo, así se contribuye a proyectos de código abierto: hacés un fork, arreglás algo en una rama y mandás un PR al proyecto original.</p>` },
    { titulo: "Publicar con GitHub Pages", video: {"id":"8IdBAysf-U4","t":"Cómo publicar un sitio web gratis con GitHub Pages · Programación Accesible (2:39)"}, html: `
      <p class="idea"><strong>GitHub Pages</strong> publica gratis una página web a partir de los archivos de un repositorio. Cada vez que hacés push, la página se actualiza.</p>
      <pre><code>1. En el repositorio, un archivo index.html (la página principal)
2. Settings → Pages
3. Source: "Deploy from a branch" · Branch: main · carpeta / (root)
4. Guardar y esperar uno o dos minutos
5. La página queda en:
   https://ana.github.io/recetas/</code></pre>
      <table>
        <tr><th>Tené en cuenta</th><th>Por qué</th></tr>
        <tr><td>El sitio es público</td><td>Cualquiera lo puede ver, aunque tu cuenta sea gratis</td></tr>
        <tr><td>Sirve para páginas estáticas (HTML, CSS, JavaScript)</td><td>No ejecuta programas en un servidor</td></tr>
        <tr><td>Tarda un poco en actualizarse</td><td>Después del push, esperá unos minutos</td></tr>
        <tr><td>No publiques datos privados</td><td>Todo lo que está en la página se puede leer</td></tr>
      </table>
      <p><strong>Este mismo sitio de cursos</strong> está publicado con GitHub Pages: cada curso nuevo es un commit y un push.</p>
      <p>Por ejemplo, un portafolio con tus trabajos en un index.html queda publicado en una dirección que podés poner en tu CV, sin pagar hosting.</p>` },
  ],
  practica: [
    "Creá 2 issues en tu repositorio con título claro, descripción y cómo reproducirlo. Anotá sus números.",
    "Hacé una rama, un cambio y un pull request que cierre uno de los issues con \"Closes #número\". Unilo y anotá si el issue se cerró solo.",
    "Publicá un index.html con GitHub Pages y anotá la dirección y cuántos minutos tardó en aparecer.",
  ],
  recursos: [
    { t: "GitHub Docs: acerca de las solicitudes de cambios (pull requests)", url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" },
    { t: "GitHub Docs: crear un sitio con GitHub Pages", url: "https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site" },
    { t: "GitHub Skills: cursos prácticos gratis dentro de GitHub (en inglés)", url: "https://skills.github.com/" },
  ],
  quiz: [
    { q: "Si encontrás un error en el proyecto y querés que quede anotado, ¿qué creás en GitHub?", opciones: ["Un fork","Un commit vacío","Un issue","Una rama sin cambios"], correcta: 2, explicacion: "Un issue anota tareas y errores. El fork tienta porque es de GitHub, pero es una copia del repositorio." },
    { q: "Si un issue se titula \"No anda\", ¿qué le falta?", opciones: ["Decir qué pasa, qué esperabas y cómo reproducirlo","Nada","Más signos de exclamación","Un emoji"], correcta: 0, explicacion: "Sin detalles, nadie sabe qué arreglar. \"Nada\" tienta porque se entiende que algo falla, pero no qué." },
    { q: "Si querés que un PR cierre el issue 4 al unirse, ¿qué escribís en su descripción?", opciones: ["\"Issue 4 listo\"","\"#4 please\"","Nada, se cierra igual","\"Closes #4\""], correcta: 3, explicacion: "GitHub reconoce \"Closes #4\". \"Se cierra igual\" tienta, pero sin esa frase queda abierto." },
    { q: "Si querés que alguien revise tus cambios antes de unirlos a main, ¿qué usás?", opciones: ["git merge directo","Un pull request","git push a main","Un issue"], correcta: 1, explicacion: "El PR permite revisar antes de unir. git merge directo tienta por rápido, pero nadie lo revisa." },
    { q: "Si vas a hacer un PR, ¿en qué rama trabajás?", opciones: ["Directo en main","En la rama de otra persona","En una rama nueva, como corregir-harina","En ninguna"], correcta: 2, explicacion: "El PR une una rama a otra. Trabajar en main tienta por simple, pero no hay nada que proponer." },
    { q: "Si querés contribuir a un proyecto ajeno donde no tenés permiso, ¿qué hacés primero?", opciones: ["Un fork: tu propia copia en GitHub","git push al original","Le pedís la contraseña al dueño","Un clone y push directo"], correcta: 0, explicacion: "El fork te da un lugar donde subir. Push al original tienta, pero no tenés permiso." },
    { q: "Si querés que tu PR se revise bien, ¿cómo lo hacés?", opciones: ["Con 2.000 líneas de cambios","Mezclando cinco temas","Sin descripción","Chico y sobre un solo tema"], correcta: 3, explicacion: "Los PR chicos se revisan mejor. Uno grande tienta para terminar de una vez, pero nadie lo revisa a fondo." },
    { q: "Si el PR ya está aprobado, ¿cómo se unen los cambios desde GitHub?", opciones: ["Con git init","Con el botón \"Merge pull request\"","Borrando la rama main","Creando un issue"], correcta: 1, explicacion: "Ese botón hace el merge. Borrar main tienta en una confusión, pero perdés todo." },
    { q: "Si querés publicar una página web gratis desde tu repositorio, ¿qué usás?", opciones: ["Un issue","Un fork","GitHub Pages","git log"], correcta: 2, explicacion: "Pages publica los archivos como sitio web. El fork tienta, pero es una copia del repositorio." },
    { q: "Si publicás con GitHub Pages, ¿qué archivo es la página principal?", opciones: ["index.html","README.md siempre",".gitignore","principal.txt"], correcta: 0, explicacion: "index.html es la página de inicio. README tienta porque GitHub lo muestra, pero en el repositorio, no como sitio." },
    { q: "Si tu sitio en GitHub Pages tiene datos privados en el código, ¿qué pasa?", opciones: ["Nadie los ve","Solo los ves vos","GitHub los esconde","Cualquiera los puede leer: no hay que publicarlos"], correcta: 3, explicacion: "Todo lo publicado es legible. \"Nadie los ve\" tienta si no están a la vista, pero están en el código." },
    { q: "Si hiciste push y la página no cambió enseguida, ¿qué hacés?", opciones: ["Borrás el repositorio","Esperás unos minutos: Pages tarda un poco en actualizarse","Hacés 20 push más","Cambiás de cuenta"], correcta: 1, explicacion: "La publicación demora. Hacer más push tienta, pero solo agrega esperas." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu repositorio publicado",
  nivel: "Avanzado",
  objetivos: [
    "Armar un repositorio completo con README, .gitignore, ramas y un PR",
    "Publicarlo con GitHub Pages y evaluarlo con una rúbrica",
    "Definir un flujo de trabajo diario con Git",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es un <strong>repositorio publicado</strong> en GitHub: por ejemplo, una página personal, un recetario o tus apuntes de estudio. Tiene que mostrar todo lo que aprendiste.</p>
      <table>
        <tr><th>Parte del repositorio</th><th>Módulo</th></tr>
        <tr><td>Al menos 8 commits con buenos mensajes</td><td>Guardar versiones: commits</td></tr>
        <tr><td>Un .gitignore y ningún secreto en el historial</td><td>Deshacer cambios e ignorar archivos</td></tr>
        <tr><td>Al menos 2 ramas unidas a main, una con un conflicto resuelto</td><td>Ramas y uniones</td></tr>
        <tr><td>En GitHub, con un README claro</td><td>Subir tu repositorio a GitHub</td></tr>
        <tr><td>2 issues y un PR que cierre uno</td><td>Colaborar y publicar</td></tr>
        <tr><td>Publicado con GitHub Pages</td><td>Colaborar y publicar</td></tr>
      </table>
      <pre><code>Para revisar tu historial:
git log --oneline --graph --all
* 4f1a2b3 Unir pasas y nueces en la torta
|\\
| * 9c8d7e6 Nueces
* | 1a2b3c4 Pasas
|/
* 2db2f1c Agregar flan</code></pre>
      <p><strong>--graph</strong> dibuja las ramas y uniones con líneas, como el diagrama del módulo "Ramas y uniones".</p>
      <p>Por ejemplo, una página personal con tu nombre, qué sabés hacer y 3 trabajos, publicada en GitHub Pages, sirve como proyecto y como portafolio para buscar trabajo.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu repositorio.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Commits</td><td>8 o más, cada uno con un mensaje que dice qué hace</td><td>Pocos o con mensajes flojos</td><td>Un solo commit gigante</td></tr>
        <tr><td>Ramas</td><td>2 ramas unidas, una con conflicto resuelto</td><td>Una rama unida</td><td>Todo en main</td></tr>
        <tr><td>README</td><td>Explica qué es, cómo usarlo y qué contiene</td><td>Solo un título</td><td>No hay</td></tr>
        <tr><td>Colaboración</td><td>2 issues claros y un PR que cierra uno</td><td>Issues sin PR o PR sin issue</td><td>Ninguno</td></tr>
        <tr><td>Publicación</td><td>Página funcionando en GitHub Pages</td><td>Configurada, pero no funciona</td><td>No publicada</td></tr>
        <tr><td>Secretos</td><td>.gitignore y ninguna contraseña, token ni dato privado en el historial</td><td>—</td><td>Hay un secreto en algún commit</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Secretos" tiene 0, el repositorio no está listo,
       aunque el total sea alto. (Y cambiá ese secreto enseguida.)</code></pre>
      <p>Por ejemplo, un repositorio impecable que tiene en un commit viejo un archivo con la contraseña del mail saca 0 en secretos: aunque ya no esté en la última versión, sigue en el historial.</p>` },
    { titulo: "Tu flujo de trabajo diario", html: `
      <p class="idea">Con un flujo simple y siempre igual, Git deja de dar miedo. Este alcanza para la mayoría de los proyectos personales y de equipos chicos.</p>
      <pre><code>1. git pull                         # traer lo último
2. git switch -c nombre-de-la-tarea # una rama por tarea
3. trabajar · git status · git diff
4. git add archivos · git commit -m "Qué hace el cambio"
   (repetir 3 y 4 las veces que haga falta)
5. git push -u origin nombre-de-la-tarea
6. Pull request · revisión · merge
7. git switch main · git pull · git branch -d nombre-de-la-tarea</code></pre>
      <table>
        <tr><th>Si te trabás</th><th>Qué hacer</th></tr>
        <tr><td>No sabés dónde estás</td><td>git status: casi siempre dice qué hacer</td></tr>
        <tr><td>Cambiaste algo que no querías</td><td>git restore archivo (si no hiciste commit)</td></tr>
        <tr><td>Un commit tiene un error</td><td>git revert</td></tr>
        <tr><td>Un conflicto te asusta</td><td>git merge --abort y empezá de nuevo con calma</td></tr>
      </table>
      <p><strong>Seguir aprendiendo:</strong> el libro Pro Git es gratis y está en español; Learn Git Branching te deja practicar ramas en el navegador; GitHub Skills tiene cursos prácticos dentro de GitHub.</p>
      <p>Por ejemplo, con este flujo, el día que algo se rompe sabés exactamente qué rama, qué commit y qué cambio lo causó.</p>` },
  ],
  practica: [
    "Armá tu repositorio con las 6 partes del encargo. Corré git log --oneline --graph --all y anotá cuántos commits y ramas aparecen.",
    "Evaluá tu repositorio con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Hacé el flujo diario completo una vez, del paso 1 al 7, y anotá cuánto tiempo te llevó.",
  ],
  recursos: [
    { t: "Pro Git, el libro oficial de Git, en español", url: "https://git-scm.com/book/es/v2" },
    { t: "GitHub Skills: cursos prácticos gratis dentro de GitHub (en inglés)", url: "https://skills.github.com/" },
    { t: "GitHub Docs: crear un sitio con GitHub Pages", url: "https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site" },
  ],
  quiz: [
    { q: "Si armás tu repositorio final, ¿qué tiene que incluir?", opciones: ["Solo los archivos subidos","Solo el README","Commits, .gitignore, ramas unidas, README, issues, un PR y la página publicada","Solo un commit con todo"], correcta: 2, explicacion: "El repositorio muestra todo el curso. Solo los archivos tienta por simple, pero no muestra cómo usaste Git." },
    { q: "Si querés ver las ramas y uniones dibujadas en la terminal, ¿qué usás?", opciones: ["git log --oneline --graph --all","git status --graph","git draw","git branch --all --draw"], correcta: 0, explicacion: "--graph dibuja las líneas. git draw tienta por el nombre, pero no existe." },
    { q: "Si tu repositorio tiene un solo commit gigante, ¿cuánto saca en \"Commits\"?", opciones: ["2 puntos","1 punto","No se evalúa","0 puntos"], correcta: 3, explicacion: "Un commit gigante es 0. Sacar 1 tienta porque hay algo guardado, pero no hay historial útil." },
    { q: "Si uniste una sola rama a main, ¿cuánto sacás en \"Ramas\"?", opciones: ["2 puntos","1 punto","0 puntos","3 puntos"], correcta: 1, explicacion: "Faltan la segunda rama y el conflicto. Sacar 2 tienta porque usaste ramas, pero la rúbrica pide dos." },
    { q: "Si tu README solo tiene el título, ¿cuánto saca?", opciones: ["2 puntos","0 puntos","1 punto","No importa"], correcta: 2, explicacion: "Existe, pero no explica. Sacar 0 tienta, pero ese es cuando no hay README." },
    { q: "Si tu repositorio suma 11, pero un commit viejo tiene la contraseña de tu mail, ¿está listo?", opciones: ["No: \"Secretos\" tiene 0 y eso no se compensa; además, cambiás esa contraseña enseguida","Sí, 11 es listo","Sí, si ya no está en la última versión","Sí, si el repositorio es privado"], correcta: 0, explicacion: "La regla de la rúbrica lo dice. \"No está en la última versión\" tienta, pero sigue en el historial." },
    { q: "Si vas a empezar el día de trabajo con Git, ¿cuál es el primer paso del flujo?", opciones: ["git push","git merge","git init","git pull, para traer lo último"], correcta: 3, explicacion: "Primero traer lo último. git push tienta, pero todavía no hiciste nada." },
    { q: "Si vas a empezar una tarea nueva, ¿qué hacés después del pull?", opciones: ["Trabajás directo en main","Creás una rama para esa tarea con git switch -c","Hacés un fork siempre","Borrás la rama main"], correcta: 1, explicacion: "Una rama por tarea. Trabajar en main tienta por rápido, pero mezcla tareas y complica el PR." },
    { q: "Si terminaste la tarea y ya se unió el PR, ¿qué hacés al final?", opciones: ["Seguís trabajando en la rama vieja","Borrás main","Volvés a main, hacés git pull y borrás la rama de la tarea","Nada"], correcta: 2, explicacion: "Así quedás al día y ordenado. Seguir en la rama vieja tienta, pero se queda atrás de main." },
    { q: "Si no sabés en qué situación está tu repositorio, ¿qué comando te ayuda primero?", opciones: ["git status","git reset --hard","git init","Borrar la carpeta .git"], correcta: 0, explicacion: "git status casi siempre dice qué hacer. reset --hard tienta para \"limpiar\", pero puede borrar trabajo." },
    { q: "Si un conflicto te asusta en medio de una unión, ¿qué podés hacer?", opciones: ["Borrar el repositorio","Hacer push igual","Apagar la compu","git merge --abort y volver a intentarlo con calma"], correcta: 3, explicacion: "--abort vuelve a antes de la unión. Borrar tienta por desesperación, pero perdés el historial." },
    { q: "Si querés practicar ramas sin riesgo, ¿qué recurso usás?", opciones: ["Tu repositorio del trabajo","Learn Git Branching, en el navegador","Un repositorio ajeno","Ninguno, no se puede practicar"], correcta: 1, explicacion: "Es un simulador sin riesgo. El repositorio del trabajo tienta por real, pero un error afecta a otros." },
  ],
},
];
