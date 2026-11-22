// Temario del curso "La terminal y Linux sin miedo". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js terminal y node tools/metodologia.js terminal
window.TEMARIO = [
{
  id: "empezar",
  icono: "⌨️",
  titulo: "Qué es la terminal y cómo abrirla",
  nivel: "Básico",
  objetivos: [
    "Explicar qué es la terminal y para qué la usan quienes programan",
    "Abrir una terminal en Windows, Mac o Linux",
    "Leer el prompt y correr tus primeros comandos: pwd, whoami y echo",
  ],
  lecciones: [
    { titulo: "Hablarle a la computadora con palabras", video: {"id":"1YxHXBsVNGQ","t":"Consola vs terminal vs shell vs CLI: ¿qué es la terminal? · Programador X (9:18)"}, html: `<p>En todo el curso acompañamos a <strong>Tomás</strong>, que tiene 19 años, vive en Córdoba y empezó a estudiar programación. En los videos y tutoriales todos usan la terminal y a él le daba miedo romper algo. Para practicar, va a usar la carpeta de su prima <strong>Ana</strong>, que es la que trae la terminal de práctica de este curso.</p>
      <p class="idea">La <strong>terminal</strong> es una ventana donde le das órdenes a la computadora <strong>escribiendo</strong> en vez de hacer clic. Cada orden se llama <strong>comando</strong>.</p>
      <table>
        <tr><th>Con el mouse</th><th>Con la terminal</th></tr>
        <tr><td>Abrís la carpeta Documentos con doble clic</td><td>Escribís <code>cd Documentos</code></td></tr>
        <tr><td>Creás una carpeta con clic derecho → Nueva carpeta</td><td>Escribís <code>mkdir Fotos</code></td></tr>
        <tr><td>Buscás una palabra abriendo archivo por archivo</td><td>Escribís <code>grep palabra *.txt</code> y busca en todos</td></tr>
      </table>
      <p><strong>¿Por qué la usan quienes programan?</strong> Porque es rápida, porque se puede repetir (un comando se copia, se guarda y se vuelve a usar) y porque muchas herramientas de programación, como Git o Python, se manejan desde ahí. Los servidores donde viven las páginas web casi nunca tienen pantalla con ventanas: solo terminal.</p>
      <p>Algunas palabras que vas a escuchar: la <strong>terminal</strong> es la ventana; la <strong>shell</strong> es el programa que entiende tus comandos (en Linux y Mac, casi siempre <strong>bash</strong> o <strong>zsh</strong>); la <strong>línea de comandos</strong> es la forma de trabajar escribiendo.</p>
      <p><strong>Sin miedo:</strong> la terminal hace lo que le pedís, ni más ni menos. Leer, listar y moverse entre carpetas no rompe nada. Lo que hay que mirar con cuidado son los comandos que borran, y eso lo vemos con calma.</p>
      <p>Por ejemplo, Tomás tenía que renombrar 40 fotos. Con el mouse le llevaba media hora; en el módulo de archivos va a ver cómo moverlas todas con un solo comando.</p>` },
    { titulo: "Abrir una terminal en tu computadora", video: {"id":"L4f1XHrSJEg","t":"Instalar Ubuntu en Windows 10 con WSL · Programación en español (6:08)"}, html: `
      <p class="idea">Todas las computadoras traen una terminal. En <strong>Linux</strong> y <strong>Mac</strong> ya hablan el idioma de este curso; en <strong>Windows</strong> conviene instalar Linux adentro con <strong>WSL</strong>.</p>
      <table>
        <tr><th>Sistema</th><th>Cómo abrirla</th><th>Qué vas a usar</th></tr>
        <tr><td>Linux (Ubuntu, Mint, etc.)</td><td>Ctrl + Alt + T, o buscá "Terminal"</td><td>bash: todo el curso funciona igual</td></tr>
        <tr><td>Mac</td><td>Buscá "Terminal" con Cmd + Espacio</td><td>zsh: casi todo igual que bash</td></tr>
        <tr><td>Windows</td><td>Instalá WSL (Linux adentro de Windows) y abrí "Ubuntu"</td><td>bash: todo el curso funciona igual</td></tr>
        <tr><td>Windows sin WSL</td><td>PowerShell o "Símbolo del sistema"</td><td>Otros comandos: no sirven para este curso</td></tr>
      </table>
      <p><strong>WSL</strong> (Subsistema de Windows para Linux) es una función de Windows 10 y 11 que te deja tener una terminal de Linux sin borrar Windows. Se instala abriendo PowerShell como administrador y escribiendo un comando; la guía oficial de Microsoft está en los recursos.</p>
      <pre><code>wsl --install</code></pre>
      <p><strong>Si no podés instalar nada</strong> (por ejemplo, en una compu de la escuela o del trabajo), usá la <strong>terminal de práctica</strong> de este curso: está debajo de cada ejemplo, en el botón "Probar en la terminal de práctica". Es una imitación que vive en tu navegador y no toca tu computadora.</p>
      <p>Por ejemplo, Tomás tiene una notebook con Windows 11. Abrió PowerShell como administrador, escribió <code>wsl --install</code>, reinició, eligió un nombre de usuario y una contraseña, y ya tenía Ubuntu.</p>` },
    { titulo: "El prompt y tus primeros comandos", html: `
      <p class="idea">Cuando la terminal espera una orden, muestra el <strong>prompt</strong>: un texto que termina en <strong>$</strong>. Escribís el comando y apretás <strong>Enter</strong>.</p>
      <pre><code>ana@compu:~$
 │    │   │ └─ $: "estoy lista, escribí"
 │    │   └─── ~: estás en tu carpeta personal
 │    └─────── el nombre de la computadora
 └──────────── tu usuario</code></pre>
      <p>En este curso, para no repetir, los ejemplos muestran solo <strong>$</strong> antes de cada comando. Vos escribís lo que va después del $.</p>
      <pre class="terminal"><code>whoami
pwd
echo Hola, terminal</code></pre>
      <pre><code>Salida:
$ whoami
ana
$ pwd
/home/ana
$ echo Hola, terminal
Hola, terminal</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué hace</th></tr>
        <tr><td><code>whoami</code></td><td>Dice con qué usuario estás</td></tr>
        <tr><td><code>pwd</code></td><td>Dice en qué carpeta estás (viene del inglés "print working directory")</td></tr>
        <tr><td><code>echo</code></td><td>Repite lo que le escribís; sirve para mostrar mensajes</td></tr>
      </table>
      <p>Si escribís algo que no existe, la terminal te avisa y no pasa nada malo:</p>
      <pre class="terminal"><code>hola</code></pre>
      <pre><code>Salida:
$ hola
bash: hola: orden no encontrada</code></pre>
      <p><strong>Dos trucos que vas a usar siempre:</strong> la <strong>flecha para arriba</strong> trae el último comando (para no escribirlo de nuevo) y <strong>Ctrl + C</strong> corta un comando que se quedó trabado.</p>
      <p>Por ejemplo, Tomás escribió <code>pwd</code> y vio <code>/home/tomas</code>. Ahí entendió que la terminal siempre "está parada" en alguna carpeta, como el explorador de archivos.</p>` },
  ],
  practica: [
    "Abrí una terminal en tu computadora (o la de práctica) y anotá qué dice tu prompt.",
    "Corré whoami, pwd y echo con tu nombre, y anotá lo que mostró cada uno.",
    "Escribí un comando que no existe, anotá el mensaje de error y usá la flecha para arriba para volver a traerlo.",
  ],
  recursos: [
    { t: "Microsoft: cómo instalar Linux en Windows con WSL", url: "https://learn.microsoft.com/es-es/windows/wsl/install" },
    { t: "Apple: manual de la app Terminal en la Mac", url: "https://support.apple.com/es-es/guide/terminal/welcome/mac" },
    { t: "Ubuntu: la línea de comandos para principiantes (en inglés)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
  ],
  quiz: [
    { q: "Querés crear una carpeta sin usar el mouse. ¿Dónde lo hacés?", opciones: ["En el navegador","En la papelera","En la terminal, escribiendo un comando","No se puede sin mouse"], correcta: 2, explicacion: "La terminal da órdenes escribiendo. \"No se puede sin mouse\" tienta si nunca la usaste." },
    { q: "¿Qué es la shell?", opciones: ["El programa que entiende tus comandos, como bash","La pantalla de la computadora","Un antivirus","El teclado"], correcta: 0, explicacion: "La terminal es la ventana; la shell interpreta lo que escribís. \"La pantalla\" tienta porque es lo que ves." },
    { q: "¿Por qué los servidores de páginas web se manejan con terminal?", opciones: ["Porque es más lindo","Porque el mouse está prohibido","Porque no tienen teclado","Porque casi nunca tienen pantalla con ventanas"], correcta: 3, explicacion: "En un servidor solo hay terminal. \"No tienen teclado\" tienta, pero te conectás desde tu compu escribiendo." },
    { q: "Tenés Windows y querés seguir este curso con comandos de Linux. ¿Qué usás?", opciones: ["El Símbolo del sistema con los mismos comandos","WSL, que instala Linux adentro de Windows","Nada, no se puede","Paint"], correcta: 1, explicacion: "Con WSL tenés bash. El Símbolo del sistema tienta porque ya está, pero usa otros comandos." },
    { q: "Si estás en una compu de la escuela donde no podés instalar nada, ¿cómo practicás?", opciones: ["Instalando Linux igual sin permiso","No practico","Con la terminal de práctica del curso, en el navegador","Borro Windows"], correcta: 2, explicacion: "La terminal de práctica no toca la computadora. Instalar sin permiso tienta, pero no corresponde." },
    { q: "Ves \"ana@compu:~$\". ¿Qué quiere decir el $?", opciones: ["Que la terminal está lista para que escribas","Que el comando cuesta plata","Que hubo un error","Que se terminó la sesión"], correcta: 0, explicacion: "Es el final del prompt. \"Cuesta plata\" tienta por el signo, pero no tiene nada que ver." },
    { q: "En el prompt \"ana@compu:~$\", ¿qué significa el ~?", opciones: ["Que hay un error","Que estás en la raíz del disco","Que la terminal está lenta","Que estás en tu carpeta personal"], correcta: 3, explicacion: "El ~ es tu carpeta de usuario. \"La raíz\" tienta, pero la raíz es /." },
    { q: "Querés saber en qué carpeta estás. ¿Qué escribís?", opciones: ["whoami","pwd","echo","ls"], correcta: 1, explicacion: "pwd muestra la carpeta actual. whoami tienta porque también \"dice dónde estás\", pero muestra tu usuario." },
    { q: "Querés que la terminal muestre \"Listo\". ¿Qué escribís?", opciones: ["pwd Listo","Listo","echo Listo","whoami Listo"], correcta: 2, explicacion: "echo repite el texto. Escribir solo \"Listo\" tienta, pero la terminal lo toma como un comando que no existe." },
    { q: "Si escribiste \"hola\" y la terminal dice \"orden no encontrada\", ¿qué pasó?", opciones: ["No existe un comando llamado hola: no se rompió nada","Se borró algo","Hay un virus","Hay que reiniciar la compu"], correcta: 0, explicacion: "Es solo un aviso. Reiniciar tienta del susto, pero no hace falta." },
    { q: "Querés repetir el comando que escribiste recién. ¿Qué hacés?", opciones: ["Lo escribo de nuevo siempre","Aprieto Ctrl + C","Cierro la terminal","Aprieto la flecha para arriba"], correcta: 3, explicacion: "La flecha trae los comandos anteriores. Ctrl + C tienta, pero corta un comando, no lo repite." },
    { q: "Un comando se quedó trabado y no termina. ¿Qué hacés?", opciones: ["Desenchufo la compu","Aprieto Ctrl + C","Escribo más comandos encima","Espero una semana"], correcta: 1, explicacion: "Ctrl + C lo corta. Desenchufar tienta del apuro, pero podés perder trabajo." },
  ],
},
{
  id: "moverse",
  icono: "🧭",
  titulo: "Moverse entre carpetas",
  nivel: "Básico",
  objetivos: [
    "Listar el contenido de una carpeta con ls y ls -a",
    "Moverte entre carpetas con cd usando rutas relativas y absolutas",
    "Usar ., .., ~ y la tecla Tab para escribir menos y equivocarte menos",
  ],
  lecciones: [
    { titulo: "Mirar qué hay: ls", video: {"id":"BZN7Tqeu8eA","t":"Comandos básicos de Linux, nivel iniciante · Locos por Linux (9:51)"}, html: `
      <p class="idea"><code>ls</code> lista lo que hay en la carpeta donde estás: archivos y otras carpetas. Es el comando que más vas a usar.</p>
      <pre class="terminal"><code>ls</code></pre>
      <pre><code>Salida:
$ ls
compras.txt  Descargas  Documentos  ventas.csv</code></pre>
      <p>Los nombres con punto y extensión (<code>compras.txt</code>, <code>ventas.csv</code>) son archivos; <code>Descargas</code> y <code>Documentos</code> son carpetas. En tu computadora, la terminal suele pintarlos de colores distintos.</p>
      <p>Una <strong>opción</strong> cambia lo que hace un comando. Se escribe con un guion después del comando. Con <code>-a</code> (de "all", todo) ls muestra también los <strong>archivos ocultos</strong>, que son los que empiezan con punto:</p>
      <pre class="terminal"><code>ls -a
ls Documentos</code></pre>
      <pre><code>Salida:
$ ls -a
.  ..  .bashrc  compras.txt  Descargas  Documentos  ventas.csv
$ ls Documentos
notas.txt  receta.txt</code></pre>
      <table>
        <tr><th>Lo que escribís</th><th>Qué muestra</th></tr>
        <tr><td><code>ls</code></td><td>La carpeta donde estás</td></tr>
        <tr><td><code>ls Documentos</code></td><td>Lo que hay adentro de Documentos, sin entrar</td></tr>
        <tr><td><code>ls -a</code></td><td>Todo, también lo oculto</td></tr>
        <tr><td><code>ls -l</code></td><td>Una lista larga con tamaño, fecha y permisos (probalo en tu computadora)</td></tr>
      </table>
      <p>Los <strong>archivos ocultos</strong> suelen ser de configuración: <code>.bashrc</code> guarda cómo se comporta tu terminal. Se esconden para que no los borres sin querer.</p>
      <p>Por ejemplo, Tomás no encontraba el archivo de configuración que pedía un tutorial. Con <code>ls -a</code> apareció: empezaba con punto.</p>` },
    { titulo: "Entrar y salir: cd, .. y ~", html: `
      <p class="idea"><code>cd</code> (de "change directory", cambiar de carpeta) te mueve a otra carpeta. <code>cd ..</code> sube una carpeta y <code>cd ~</code> te lleva a tu carpeta personal.</p>
      <pre class="terminal"><code>pwd
cd Documentos
pwd
ls
cd ..
pwd</code></pre>
      <pre><code>Salida:
$ pwd
/home/ana
$ cd Documentos
$ pwd
/home/ana/Documentos
$ ls
notas.txt  receta.txt
$ cd ..
$ pwd
/home/ana</code></pre>
      <table>
        <tr><th>Símbolo</th><th>Qué significa</th></tr>
        <tr><td><code>.</code></td><td>La carpeta donde estás</td></tr>
        <tr><td><code>..</code></td><td>La carpeta de arriba (la que contiene a esta)</td></tr>
        <tr><td><code>~</code></td><td>Tu carpeta personal</td></tr>
        <tr><td><code>/</code></td><td>La raíz: la carpeta que contiene a todas</td></tr>
      </table>
      <p>Las carpetas forman un <strong>árbol</strong>: una adentro de otra. Así se ve el de Ana:</p>
      <pre><code>/                    (la raíz)
└── home
    └── ana          (~, la carpeta personal de Ana)
        ├── compras.txt
        ├── ventas.csv
        ├── Descargas
        └── Documentos
            ├── notas.txt
            └── receta.txt</code></pre>
      <p><strong>Mayúsculas importan:</strong> en Linux, <code>Documentos</code> y <code>documentos</code> son nombres distintos. Si te equivocás, cd te avisa:</p>
      <pre class="terminal"><code>cd documentos</code></pre>
      <pre><code>Salida:
$ cd documentos
bash: cd: documentos: No existe el archivo o el directorio</code></pre>
      <p>Por ejemplo, Tomás se perdió entrando y entrando carpetas. Escribió <code>cd ~</code> y volvió a su carpeta personal de un salto.</p>` },
    { titulo: "Rutas relativas, absolutas y la tecla Tab", html: `
      <p class="idea">Una <strong>ruta</strong> es la dirección de un archivo o carpeta. Puede ser <strong>absoluta</strong> (empieza en la raíz, con /) o <strong>relativa</strong> (empieza en donde estás).</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplo</th><th>Funciona desde</th></tr>
        <tr><td>Absoluta</td><td><code>/home/ana/Documentos/notas.txt</code></td><td>Cualquier lugar</td></tr>
        <tr><td>Relativa</td><td><code>Documentos/notas.txt</code></td><td>Solo desde /home/ana</td></tr>
        <tr><td>Relativa con ..</td><td><code>../compras.txt</code></td><td>Desde una carpeta adentro de /home/ana</td></tr>
        <tr><td>Con ~</td><td><code>~/Documentos</code></td><td>Cualquier lugar (es tu carpeta personal)</td></tr>
      </table>
      <pre class="terminal"><code>cd /home/ana/Descargas
pwd
ls ../Documentos
cd ~/Documentos
pwd</code></pre>
      <pre><code>Salida:
$ cd /home/ana/Descargas
$ pwd
/home/ana/Descargas
$ ls ../Documentos
notas.txt  receta.txt
$ cd ~/Documentos
$ pwd
/home/ana/Documentos</code></pre>
      <p>Es como dar una dirección: "Avenida Colón 1200, Córdoba" sirve desde cualquier lado (absoluta); "dos cuadras para allá" sirve solo si sabés dónde estás (relativa).</p>
      <p><strong>La tecla Tab completa por vos:</strong> escribí <code>cd Doc</code> y apretá <strong>Tab</strong>: la terminal completa <code>Documentos/</code>. Si hay varias opciones, apretá Tab dos veces y te las muestra. Escribís menos y no hay errores de tipeo. (Tab funciona en tu computadora; en la terminal de práctica escribí el nombre completo.)</p>
      <p><strong>Espacios en los nombres:</strong> si una carpeta se llama <code>Mis fotos</code>, escribila entre comillas: <code>cd "Mis fotos"</code>. Por eso mucha gente que programa usa guiones en los nombres: <code>mis-fotos</code>.</p>
      <p>Por ejemplo, Tomás estaba en Descargas y quería ver sus notas sin moverse. Escribió <code>ls ../Documentos</code>: subió una carpeta y entró a Documentos, todo en la ruta.</p>` },
  ],
  practica: [
    "Corré ls y ls -a en tu carpeta personal y anotá cuántos archivos ocultos aparecieron.",
    "Dibujá el árbol de 3 niveles de tu carpeta personal usando ls y cd.",
    "Llegá a la misma carpeta con una ruta absoluta y con una relativa, y anotá las 2 rutas.",
    "Usá la tecla Tab para completar 3 nombres de carpetas y anotá cuántas letras te ahorraste.",
  ],
  recursos: [
    { t: "Ubuntu: la línea de comandos para principiantes (en inglés)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
    { t: "Software Carpentry: la terminal de Unix (curso gratis, en inglés)", url: "https://swcarpentry.github.io/shell-novice/" },
    { t: "freeCodeCamp en español: comandos de Linux", url: "https://www.freecodecamp.org/espanol/news/comandos-de-linux/" },
  ],
  quiz: [
    { q: "Querés ver qué hay en la carpeta donde estás. ¿Qué escribís?", opciones: ["cd","pwd","ls","echo"], correcta: 2, explicacion: "ls lista el contenido. pwd tienta, pero dice dónde estás, no qué hay." },
    { q: "Un tutorial habla de un archivo \".bashrc\" y no lo ves con ls. ¿Qué hacés?", opciones: ["Uso ls -a para ver los archivos ocultos","Lo creo de nuevo","Concluyo que no existe","Uso pwd"], correcta: 0, explicacion: "Los que empiezan con punto están ocultos. \"No existe\" tienta, pero solo está escondido." },
    { q: "¿Qué es una opción como -a?", opciones: ["Un archivo","Un error","Una carpeta oculta","Algo que cambia lo que hace el comando, escrito con un guion"], correcta: 3, explicacion: "Las opciones modifican el comando. \"Un error\" tienta porque el guion se ve raro." },
    { q: "Querés ver qué hay en Documentos sin entrar. ¿Qué escribís?", opciones: ["cd Documentos","ls Documentos","pwd Documentos","echo Documentos"], correcta: 1, explicacion: "ls con un nombre muestra esa carpeta. cd tienta, pero te mueve adentro." },
    { q: "Estás en /home/ana/Documentos y querés volver a /home/ana. ¿Qué escribís?", opciones: ["cd .","cd Documentos","cd ..","ls .."], correcta: 2, explicacion: ".. es la carpeta de arriba. cd . tienta, pero te deja donde estás." },
    { q: "Te perdiste entre carpetas. ¿Cómo volvés a tu carpeta personal de un salto?", opciones: ["cd ~","cd /","cd ..","pwd"], correcta: 0, explicacion: "~ es tu carpeta personal. cd / tienta, pero te lleva a la raíz de todo." },
    { q: "Si escribiste \"cd documentos\" y dice \"No existe el archivo o el directorio\", pero la carpeta se llama \"Documentos\", ¿qué pasó?", opciones: ["Se borró la carpeta","La terminal está rota","Hay que reiniciar","En Linux las mayúsculas importan"], correcta: 3, explicacion: "Documentos y documentos son distintos. \"Se borró\" tienta del susto, pero no." },
    { q: "¿Qué es /home/ana/Documentos/notas.txt?", opciones: ["Una ruta relativa","Una ruta absoluta","Un comando","Una opción"], correcta: 1, explicacion: "Empieza en la raíz /. Relativa tienta, pero las relativas no empiezan con /." },
    { q: "Estás en Descargas y querés listar Documentos, que está al lado. ¿Qué escribís?", opciones: ["ls Documentos","ls /Documentos","ls ../Documentos","cd Documentos"], correcta: 2, explicacion: "Subís una con .. y entrás. ls Documentos tienta, pero busca adentro de Descargas." },
    { q: "Querés una ruta que funcione desde cualquier carpeta. ¿Cuál usás?", opciones: ["Una absoluta o una que empiece con ~","Una relativa con ..","Solo el nombre del archivo","Cualquiera funciona igual"], correcta: 0, explicacion: "Las absolutas no dependen de dónde estás. \"Cualquiera\" tienta, pero las relativas cambian según el lugar." },
    { q: "Querés escribir \"Documentos\" sin errores de tipeo. ¿Qué hacés?", opciones: ["Escribo más rápido","Uso Ctrl + C","Lo copio de un video","Escribo \"Doc\" y aprieto Tab"], correcta: 3, explicacion: "Tab completa el nombre. Ctrl + C tienta por ser un atajo, pero corta comandos." },
    { q: "Tu carpeta se llama \"Mis fotos\". ¿Cómo entrás?", opciones: ["cd Mis fotos","cd \"Mis fotos\"","cd Mis","cd fotos"], correcta: 1, explicacion: "Con comillas, el espacio es parte del nombre. Sin comillas tienta, pero la terminal lo toma como dos palabras." },
  ],
},
{
  id: "archivos",
  icono: "📁",
  titulo: "Crear, copiar, mover y borrar",
  nivel: "Intermedio",
  objetivos: [
    "Crear carpetas y archivos con mkdir y touch",
    "Copiar, mover y renombrar con cp y mv, también muchos archivos a la vez con *",
    "Borrar con rm sabiendo que no hay papelera y revisando antes",
  ],
  lecciones: [
    { titulo: "Crear: mkdir y touch", html: `
      <p class="idea"><code>mkdir</code> crea carpetas y <code>touch</code> crea archivos vacíos. Con eso armás la estructura de cualquier proyecto en segundos.</p>
      <pre class="terminal"><code>mkdir Proyecto
cd Proyecto
mkdir imagenes textos
touch textos/inicio.txt
ls
ls textos</code></pre>
      <pre><code>Salida:
$ mkdir Proyecto
$ cd Proyecto
$ mkdir imagenes textos
$ touch textos/inicio.txt
$ ls
imagenes  textos
$ ls textos
inicio.txt</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué hace</th></tr>
        <tr><td><code>mkdir Fotos</code></td><td>Crea la carpeta Fotos (de "make directory")</td></tr>
        <tr><td><code>mkdir a b c</code></td><td>Crea tres carpetas de una vez</td></tr>
        <tr><td><code>mkdir -p 2026/marzo</code></td><td>Crea las dos, una adentro de la otra, aunque no exista ninguna</td></tr>
        <tr><td><code>touch notas.txt</code></td><td>Crea un archivo vacío (si ya existe, no lo borra)</td></tr>
      </table>
      <p>Si la carpeta ya existe, mkdir no la pisa: te avisa.</p>
      <pre class="terminal"><code>mkdir Documentos</code></pre>
      <pre><code>Salida:
$ mkdir Documentos
mkdir: no se puede crear el directorio «Documentos»: El archivo ya existe</code></pre>
      <p><strong>Nombres que no traen problemas:</strong> sin espacios, sin tildes ni ñ, en minúscula y con guiones: <code>informe-marzo.txt</code>. Funcionan igual en todas las computadoras.</p>
      <p>Por ejemplo, Tomás empezó un curso de programación web. Con <code>mkdir -p web/css web/img</code> armó las carpetas del proyecto en una línea.</p>` },
    { titulo: "Copiar, mover y renombrar: cp, mv y el comodín *", html: `
      <p class="idea"><code>cp</code> copia y <code>mv</code> mueve. Los dos se escriben igual: primero <strong>qué</strong>, después <strong>adónde</strong>. Renombrar es mover a un nombre nuevo.</p>
      <pre class="terminal"><code>cp compras.txt compras-copia.txt
mv compras-copia.txt Documentos
mv Documentos/notas.txt Documentos/pendientes.txt
ls Documentos</code></pre>
      <pre><code>Salida:
$ cp compras.txt compras-copia.txt
$ mv compras-copia.txt Documentos
$ mv Documentos/notas.txt Documentos/pendientes.txt
$ ls Documentos
compras-copia.txt  pendientes.txt  receta.txt</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué hace</th></tr>
        <tr><td><code>cp a.txt b.txt</code></td><td>Copia a.txt con el nombre b.txt</td></tr>
        <tr><td><code>cp a.txt Documentos</code></td><td>Copia a.txt adentro de Documentos</td></tr>
        <tr><td><code>cp -r Fotos Fotos-respaldo</code></td><td>Copia una carpeta entera (-r: con todo lo de adentro)</td></tr>
        <tr><td><code>mv a.txt Documentos</code></td><td>Mueve a.txt a Documentos</td></tr>
        <tr><td><code>mv viejo.txt nuevo.txt</code></td><td>Le cambia el nombre</td></tr>
      </table>
      <p>El <strong>comodín</strong> <code>*</code> quiere decir "cualquier cosa". <code>*.jpg</code> son todos los archivos que terminan en .jpg. Así movés muchos de una vez:</p>
      <pre class="terminal"><code>ls Descargas
mkdir Fotos
mv Descargas/*.jpg Fotos
ls Fotos
ls Descargas</code></pre>
      <pre><code>Salida:
$ ls Descargas
foto-cumple.jpg  foto-playa.jpg  informe.pdf  temas.txt
$ mkdir Fotos
$ mv Descargas/*.jpg Fotos
$ ls Fotos
foto-cumple.jpg  foto-playa.jpg
$ ls Descargas
informe.pdf  temas.txt</code></pre>
      <p><strong>Cuidado al copiar o mover encima:</strong> si en el destino ya hay un archivo con ese nombre, se reemplaza sin preguntar. En tu computadora, <code>cp -i</code> y <code>mv -i</code> preguntan antes.</p>
      <p>Por ejemplo, Tomás tenía 40 fotos mezcladas con PDFs en Descargas. Con <code>mv Descargas/*.jpg Fotos</code> las movió todas juntas.</p>` },
    { titulo: "Borrar: rm, sin papelera", html: `
      <p class="idea"><code>rm</code> borra archivos y <code>rm -r</code> borra carpetas con todo adentro. <strong>No hay papelera:</strong> lo que borrás con rm no se recupera.</p>
      <pre class="terminal"><code>touch borrador.txt
ls
rm borrador.txt
ls</code></pre>
      <pre><code>Salida:
$ touch borrador.txt
$ ls
borrador.txt  compras.txt  Descargas  Documentos  ventas.csv
$ rm borrador.txt
$ ls
compras.txt  Descargas  Documentos  ventas.csv</code></pre>
      <p>Para borrar una carpeta hace falta <code>-r</code>; sin eso, rm te frena:</p>
      <pre class="terminal"><code>mkdir prueba
rm prueba
rm -r prueba
ls</code></pre>
      <pre><code>Salida:
$ mkdir prueba
$ rm prueba
rm: no se puede borrar 'prueba': Es un directorio
$ rm -r prueba
$ ls
compras.txt  Descargas  Documentos  ventas.csv</code></pre>
      <table>
        <tr><th>Antes de borrar</th><th>Por qué</th></tr>
        <tr><td>Corré <code>pwd</code></td><td>Para estar seguro de en qué carpeta estás</td></tr>
        <tr><td>Corré <code>ls</code> con el mismo patrón: <code>ls *.tmp</code></td><td>Para ver exactamente qué se va a borrar</td></tr>
        <tr><td>Si dudás, mové en vez de borrar</td><td><code>mv archivo ~/para-borrar/</code> y borrás después</td></tr>
        <tr><td>Usá <code>rm -i</code> en tu computadora</td><td>Te pregunta archivo por archivo</td></tr>
      </table>
      <p><strong>Nunca corras comandos de borrado que no entendés.</strong> En internet circulan "bromas" como <code>rm -rf /</code>, que intenta borrar todo el sistema. La <strong>-f</strong> quiere decir "forzar, sin preguntar". Si alguien te pide que pegues un comando con rm -rf, no lo hagas.</p>
      <p>Por ejemplo, Tomás iba a borrar <code>*.txt</code> pensando que estaba en una carpeta de prueba. Corrió <code>pwd</code> antes y vio que estaba en Documentos. Se salvó de borrar sus apuntes.</p>` },
  ],
  practica: [
    "Creá una carpeta de proyecto con 3 subcarpetas usando mkdir y anotá el comando que usaste.",
    "Copiá un archivo, renombrá la copia y movela a otra carpeta; anotá los 3 comandos.",
    "Mové todos los archivos de un tipo (por ejemplo, *.jpg) a una carpeta nueva y anotá cuántos se movieron según ls.",
    "Antes de borrar, corré pwd y ls con el mismo patrón y anotá qué archivos iban a borrarse.",
  ],
  recursos: [
    { t: "Software Carpentry: la terminal de Unix (curso gratis, en inglés)", url: "https://swcarpentry.github.io/shell-novice/" },
    { t: "freeCodeCamp en español: comandos de Linux", url: "https://www.freecodecamp.org/espanol/news/comandos-de-linux/" },
    { t: "Ubuntu: la línea de comandos para principiantes (en inglés)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
  ],
  quiz: [
    { q: "Querés crear la carpeta \"Fotos\". ¿Qué escribís?", opciones: ["touch Fotos","cd Fotos","mkdir Fotos","ls Fotos"], correcta: 2, explicacion: "mkdir crea carpetas. touch tienta, pero crea un archivo, no una carpeta." },
    { q: "Querés crear \"2026/marzo\" y no existe ninguna de las dos. ¿Qué escribís?", opciones: ["mkdir -p 2026/marzo","mkdir 2026/marzo","touch 2026/marzo","cd 2026/marzo"], correcta: 0, explicacion: "Con -p crea las que falten. Sin -p tienta, pero falla porque 2026 no existe." },
    { q: "Si vas a nombrar un archivo, ¿cuál trae menos problemas en la terminal?", opciones: ["Informe de Marzo (final).txt","informe márzo ñ.txt","informe marzo.txt","informe-marzo.txt"], correcta: 3, explicacion: "Sin espacios ni tildes. El de los espacios tienta por legible, pero obliga a usar comillas." },
    { q: "Querés tener una copia de compras.txt llamada compras-viejo.txt. ¿Qué escribís?", opciones: ["mv compras.txt compras-viejo.txt","cp compras.txt compras-viejo.txt","cp compras-viejo.txt compras.txt","touch compras-viejo.txt"], correcta: 1, explicacion: "Primero qué, después adónde. mv tienta, pero renombra y no deja el original." },
    { q: "Querés cambiarle el nombre a borrador.txt por final.txt. ¿Qué escribís?", opciones: ["cp borrador.txt final.txt","rm borrador.txt final.txt","mv borrador.txt final.txt","mkdir final.txt"], correcta: 2, explicacion: "Renombrar es mover. cp tienta, pero te deja dos archivos." },
    { q: "Querés copiar la carpeta Fotos entera. ¿Qué escribís?", opciones: ["cp -r Fotos Fotos-respaldo","cp Fotos Fotos-respaldo","mv Fotos Fotos-respaldo","mkdir Fotos-respaldo Fotos"], correcta: 0, explicacion: "Para carpetas hace falta -r. Sin -r tienta, pero cp se niega a copiar carpetas." },
    { q: "¿Qué quiere decir *.jpg?", opciones: ["Un archivo llamado asterisco","Las fotos borradas","Solo la primera foto","Todos los archivos que terminan en .jpg"], correcta: 3, explicacion: "El * es \"cualquier cosa\". \"Solo la primera\" tienta, pero son todas." },
    { q: "Copiás informe.txt a una carpeta donde ya hay un informe.txt. ¿Qué pasa?", opciones: ["Te pregunta siempre","Se reemplaza sin preguntar","Se crea informe2.txt solo","No pasa nada"], correcta: 1, explicacion: "cp pisa sin avisar. \"Te pregunta siempre\" tienta por cómo funciona el mouse, pero eso solo pasa con -i." },
    { q: "Si borraste un archivo con rm, ¿dónde lo buscás para recuperarlo?", opciones: ["En la papelera","En Descargas","En ningún lado: rm no usa papelera","En la carpeta ~"], correcta: 2, explicacion: "rm borra de verdad. La papelera tienta porque así pasa con el mouse." },
    { q: "Escribiste \"rm prueba\" y dice \"Es un directorio\". ¿Qué hacés si de verdad querés borrar la carpeta?", opciones: ["Reviso qué tiene y uso rm -r prueba","rm -rf / para asegurarme","touch prueba","Reinicio la compu"], correcta: 0, explicacion: "Para carpetas, -r, después de revisar. rm -rf / tienta como \"más fuerte\", pero intenta borrar todo el sistema." },
    { q: "Vas a correr rm *.txt. ¿Qué hacés antes?", opciones: ["Nada, lo corro directo","Cierro los ojos","Agrego -f para que no pregunte","pwd para ver dónde estoy y ls *.txt para ver qué se borra"], correcta: 3, explicacion: "Revisar antes evita desastres. Agregar -f tienta por rápido, pero saca la última protección." },
    { q: "Alguien en un foro te dice \"pegá rm -rf / y se arregla\". ¿Qué hacés?", opciones: ["Lo pego","No lo pego: intenta borrar todo el sistema","Lo pego con sudo","Lo pego dos veces"], correcta: 1, explicacion: "Nunca corras borrados que no entendés. Pegarlo tienta si confiás en el foro, pero es una trampa conocida." },
  ],
},
{
  id: "leer",
  icono: "📖",
  titulo: "Leer archivos sin abrirlos",
  nivel: "Intermedio",
  objetivos: [
    "Mostrar archivos de texto con cat",
    "Ver el principio o el final de un archivo largo con head y tail",
    "Contar renglones y palabras con wc",
  ],
  lecciones: [
    { titulo: "Mostrar un archivo: cat", html: `
      <p class="idea"><code>cat</code> muestra en la terminal todo lo que tiene un archivo de texto. Sirve para mirar rápido sin abrir ningún programa.</p>
      <pre class="terminal"><code>cat compras.txt
cat Documentos/notas.txt</code></pre>
      <pre><code>Salida:
$ cat compras.txt
yerba
leche
pan
yerba
fideos
leche
yerba
$ cat Documentos/notas.txt
Comprar yerba
Llamar a Marta
Pagar la luz
Estudiar para el parcial</code></pre>
      <p>Un <strong>archivo de texto</strong> es uno que tiene solo letras y números, como .txt, .csv o los archivos de código (.py, .html). Una foto o un PDF no son de texto: si les hacés cat, vas a ver símbolos raros.</p>
      <table>
        <tr><th>Tipo de archivo</th><th>¿Se lee con cat?</th></tr>
        <tr><td>.txt, .csv, .md</td><td>Sí</td></tr>
        <tr><td>Código: .py, .js, .html, .css</td><td>Sí</td></tr>
        <tr><td>.jpg, .png, .pdf, .docx</td><td>No: son binarios (no son texto)</td></tr>
      </table>
      <p>Un <strong>archivo CSV</strong> es una tabla guardada como texto: cada renglón es una fila y las columnas se separan con comas.</p>
      <pre class="terminal"><code>cat ventas.csv</code></pre>
      <pre><code>Salida:
$ cat ventas.csv
fecha,producto,monto
2026-03-02,yerba,3900
2026-03-02,pan,2900
2026-03-03,yerba,3900
2026-03-03,leche,1300
2026-03-04,fideos,1200
2026-03-04,Yerba,3900</code></pre>
      <p>Si le hacés cat a una carpeta o a algo que no existe, te avisa:</p>
      <pre class="terminal"><code>cat Documentos
cat precios.txt</code></pre>
      <pre><code>Salida:
$ cat Documentos
cat: Documentos: Es un directorio
$ cat precios.txt
cat: precios.txt: No existe el archivo o el directorio</code></pre>
      <p>Por ejemplo, Tomás bajó un archivo de datos para un ejercicio de Python. Antes de programar, le hizo <code>cat</code> para ver cómo estaban separadas las columnas.</p>` },
    { titulo: "El principio y el final: head y tail", html: `
      <p class="idea">Con archivos largos, <code>head</code> muestra los primeros renglones y <code>tail</code> los últimos. Con <code>-n</code> elegís cuántos.</p>
      <pre class="terminal"><code>head -n 3 ventas.csv
tail -n 2 ventas.csv</code></pre>
      <pre><code>Salida:
$ head -n 3 ventas.csv
fecha,producto,monto
2026-03-02,yerba,3900
2026-03-02,pan,2900
$ tail -n 2 ventas.csv
2026-03-04,fideos,1200
2026-03-04,Yerba,3900</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué muestra</th></tr>
        <tr><td><code>head archivo</code></td><td>Los primeros 10 renglones</td></tr>
        <tr><td><code>head -n 3 archivo</code></td><td>Los primeros 3</td></tr>
        <tr><td><code>tail archivo</code></td><td>Los últimos 10</td></tr>
        <tr><td><code>tail -n 1 archivo</code></td><td>Solo el último</td></tr>
        <tr><td><code>less archivo</code></td><td>El archivo entero para recorrer con las flechas; se sale con q (probalo en tu computadora)</td></tr>
      </table>
      <p><strong>¿Para qué sirve el final?</strong> Muchos programas escriben un <strong>registro</strong> (log): un archivo donde anotan lo que pasa, renglón por renglón. Lo último que pasó está al final, y ahí se mira primero cuando algo falla.</p>
      <p><strong>El primer renglón de un CSV</strong> suele tener los nombres de las columnas (el encabezado). Con <code>head -n 1</code> lo ves sin cargar el archivo entero, aunque tenga un millón de filas.</p>
      <pre class="terminal"><code>head -n 1 ventas.csv</code></pre>
      <pre><code>Salida:
$ head -n 1 ventas.csv
fecha,producto,monto</code></pre>
      <p>Por ejemplo, el programa de Tomás fallaba y escribía en un archivo de registro de 5.000 renglones. Con <code>tail -n 20</code> vio los últimos mensajes y encontró el error.</p>` },
    { titulo: "Contar: wc", html: `
      <p class="idea"><code>wc</code> (de "word count", contar palabras) cuenta. Con <code>-l</code> cuenta renglones y con <code>-w</code>, palabras.</p>
      <pre class="terminal"><code>wc -l compras.txt
wc -l ventas.csv
wc -w Documentos/notas.txt</code></pre>
      <pre><code>Salida:
$ wc -l compras.txt
7 compras.txt
$ wc -l ventas.csv
7 ventas.csv
$ wc -w Documentos/notas.txt
12 Documentos/notas.txt</code></pre>
      <table>
        <tr><th>Pregunta</th><th>Comando</th></tr>
        <tr><td>¿Cuántos productos hay en la lista?</td><td><code>wc -l compras.txt</code></td></tr>
        <tr><td>¿Cuántas ventas hay en el CSV?</td><td><code>wc -l ventas.csv</code>, menos 1 por el encabezado</td></tr>
        <tr><td>¿Cuántas palabras tiene mi texto?</td><td><code>wc -w texto.txt</code></td></tr>
      </table>
      <p><strong>Ojo con el encabezado:</strong> ventas.csv tiene 7 renglones, pero el primero son los nombres de las columnas. Ventas hay 6.</p>
      <p><strong>Junto con otros comandos</strong> wc se vuelve muy útil: por ejemplo, contar cuántas veces aparece algo. Eso lo vemos en el próximo módulo, con las tuberías.</p>
      <p>Por ejemplo, a Tomás le pidieron un texto de 500 palabras para la facultad. Lo escribió en un .txt y con <code>wc -w</code> supo que le faltaban 80.</p>` },
  ],
  practica: [
    "Mostrá con cat un archivo de texto de tu computadora (o compras.txt en la de práctica) y anotá cuántos renglones tiene a ojo.",
    "Usá head -n 1 y tail -n 2 sobre un CSV y anotá qué columnas tiene y cuál es la última fila.",
    "Contá con wc -l los renglones de 2 archivos y anotá los resultados.",
  ],
  recursos: [
    { t: "Software Carpentry: la terminal de Unix (curso gratis, en inglés)", url: "https://swcarpentry.github.io/shell-novice/" },
    { t: "freeCodeCamp en español: comandos de Linux", url: "https://www.freecodecamp.org/espanol/news/comandos-de-linux/" },
    { t: "Ubuntu: la línea de comandos para principiantes (en inglés)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
  ],
  quiz: [
    { q: "Querés ver qué tiene notas.txt sin abrir ningún programa. ¿Qué escribís?", opciones: ["ls notas.txt","cd notas.txt","cat notas.txt","mkdir notas.txt"], correcta: 2, explicacion: "cat muestra el contenido. ls tienta, pero solo muestra el nombre." },
    { q: "Le hacés cat a una foto .jpg y ves símbolos raros. ¿Por qué?", opciones: ["Porque una foto no es un archivo de texto","Porque la foto está rota","Porque la terminal no tiene colores","Porque falta una opción"], correcta: 0, explicacion: "cat es para texto. \"Está rota\" tienta, pero la foto está bien: es binaria." },
    { q: "¿Qué es un archivo CSV?", opciones: ["Una foto","Un programa","Una carpeta comprimida","Una tabla guardada como texto, con columnas separadas por comas"], correcta: 3, explicacion: "Cada renglón es una fila. \"Un programa\" tienta, pero son datos." },
    { q: "Si escribiste cat Documentos y dice \"Es un directorio\", ¿qué querías hacer?", opciones: ["Borrarlo","Ver qué hay adentro: para eso es ls Documentos","Moverlo","Nada, está bien así"], correcta: 1, explicacion: "cat lee archivos; ls lista carpetas. \"Está bien así\" tienta, pero el comando no hizo lo que querías." },
    { q: "Querés ver solo los primeros 3 renglones de un archivo largo. ¿Qué escribís?", opciones: ["tail -n 3 archivo","cat -n 3 archivo","head -n 3 archivo","wc -l 3 archivo"], correcta: 2, explicacion: "head es el principio. tail tienta, pero muestra el final." },
    { q: "Un programa falla y escribe un registro de 5.000 renglones. ¿Qué mirás primero?", opciones: ["El final, con tail","El principio, con head","Todo con cat","Nada"], correcta: 0, explicacion: "Lo último que pasó está al final. cat tienta, pero son 5.000 renglones." },
    { q: "¿Qué es un registro (log)?", opciones: ["Un comando","Una contraseña","Una carpeta oculta","Un archivo donde un programa anota lo que pasa, renglón por renglón"], correcta: 3, explicacion: "Sirve para ver qué pasó. \"Un comando\" tienta porque se lee con comandos." },
    { q: "Querés ver los nombres de las columnas de un CSV de un millón de filas. ¿Qué escribís?", opciones: ["cat archivo.csv","head -n 1 archivo.csv","tail -n 1 archivo.csv","wc -l archivo.csv"], correcta: 1, explicacion: "El encabezado es el primer renglón. cat tienta, pero muestra el millón entero." },
    { q: "Querés saber cuántos renglones tiene compras.txt. ¿Qué escribís?", opciones: ["wc -w compras.txt","head compras.txt","wc -l compras.txt","ls -l compras.txt"], correcta: 2, explicacion: "-l cuenta renglones. -w tienta, pero cuenta palabras." },
    { q: "wc -l ventas.csv da 7 y el primer renglón es el encabezado. ¿Cuántas ventas hay?", opciones: ["6","7","8","1"], correcta: 0, explicacion: "Restás el encabezado. 7 tienta porque es lo que dice wc." },
    { q: "Te piden un texto de 500 palabras. ¿Cómo contás las tuyas?", opciones: ["wc -l texto.txt","cat texto.txt","head -n 500 texto.txt","wc -w texto.txt"], correcta: 3, explicacion: "-w cuenta palabras. head -n 500 tienta por el número, pero son renglones." },
    { q: "Querés recorrer un archivo largo con las flechas en tu computadora. ¿Qué usás?", opciones: ["cat archivo dos veces","less archivo, y salís con q","rm archivo","cd archivo"], correcta: 1, explicacion: "less te deja ir y volver. cat tienta, pero lo tira todo de golpe." },
  ],
},
{
  id: "filtrar",
  icono: "🔎",
  titulo: "Buscar, ordenar y encadenar comandos",
  nivel: "Intermedio",
  objetivos: [
    "Buscar texto dentro de archivos con grep y sus opciones -i, -c, -n y -v",
    "Ordenar y contar repetidos con sort y uniq",
    "Encadenar comandos con | y guardar resultados con > y >>",
  ],
  lecciones: [
    { titulo: "Buscar adentro de los archivos: grep", video: {"id":"iG624IpHeNg","t":"Comando grep, pipes e introducción a bash · Vicungoola Devs (7:28)"}, html: `
      <p class="idea"><code>grep</code> busca una palabra adentro de un archivo y muestra <strong>solo los renglones que la tienen</strong>. Es como el "buscar" de un editor, pero para muchos archivos a la vez.</p>
      <pre class="terminal"><code>grep yerba ventas.csv
grep -i yerba ventas.csv</code></pre>
      <pre><code>Salida:
$ grep yerba ventas.csv
2026-03-02,yerba,3900
2026-03-03,yerba,3900
$ grep -i yerba ventas.csv
2026-03-02,yerba,3900
2026-03-03,yerba,3900
2026-03-04,Yerba,3900</code></pre>
      <table>
        <tr><th>Opción</th><th>Qué hace</th><th>Ejemplo</th></tr>
        <tr><td><code>-i</code></td><td>No distingue mayúsculas de minúsculas</td><td>Encuentra yerba y Yerba</td></tr>
        <tr><td><code>-c</code></td><td>Cuenta cuántos renglones coinciden</td><td><code>grep -c yerba ventas.csv</code></td></tr>
        <tr><td><code>-n</code></td><td>Muestra el número de renglón</td><td>Para ir directo a ese lugar</td></tr>
        <tr><td><code>-v</code></td><td>Muestra los que NO tienen la palabra</td><td>Todo menos la yerba</td></tr>
      </table>
      <pre class="terminal"><code>grep -c -i yerba ventas.csv
grep -n Marta Documentos/notas.txt
grep -v yerba compras.txt</code></pre>
      <pre><code>Salida:
$ grep -c -i yerba ventas.csv
3
$ grep -n Marta Documentos/notas.txt
2:Llamar a Marta
$ grep -v yerba compras.txt
leche
pan
fideos
leche</code></pre>
      <p>Con el comodín, grep busca en muchos archivos y te dice en cuál está cada renglón. En tu computadora, <code>grep -r palabra carpeta</code> busca en todos los archivos de una carpeta y sus subcarpetas.</p>
      <p><strong>Si la palabra tiene espacios,</strong> ponela entre comillas: <code>grep "Pagar la luz" Documentos/notas.txt</code>.</p>
      <p>Por ejemplo, Tomás no se acordaba en qué archivo de su proyecto había escrito "precio_final". Con <code>grep -rn precio_final .</code> lo encontró en un segundo, con el número de renglón.</p>` },
    { titulo: "Ordenar y contar repetidos: sort y uniq", html: `
      <p class="idea"><code>sort</code> ordena renglones y <code>uniq</code> junta los repetidos que están <strong>uno al lado del otro</strong>. Por eso casi siempre se usan juntos: primero sort, después uniq.</p>
      <pre class="terminal"><code>cat compras.txt
sort compras.txt</code></pre>
      <pre><code>Salida:
$ cat compras.txt
yerba
leche
pan
yerba
fideos
leche
yerba
$ sort compras.txt
fideos
leche
leche
pan
yerba
yerba
yerba</code></pre>
      <table>
        <tr><th>Comando</th><th>Qué hace</th></tr>
        <tr><td><code>sort archivo</code></td><td>Ordena alfabéticamente</td></tr>
        <tr><td><code>sort -r archivo</code></td><td>Ordena al revés (de la Z a la A)</td></tr>
        <tr><td><code>sort -n archivo</code></td><td>Ordena como números (2 antes que 10)</td></tr>
        <tr><td><code>uniq</code></td><td>Deja uno solo de cada grupo de repetidos seguidos</td></tr>
        <tr><td><code>uniq -c</code></td><td>Además, dice cuántas veces aparecía</td></tr>
      </table>
      <p><strong>¿Por qué -n?</strong> Sin -n, sort compara letra por letra: "10" queda antes que "9" porque el 1 va antes que el 9. Con -n, compara el número entero.</p>
      <p><strong>¿Por qué ordenar antes de uniq?</strong> En compras.txt la yerba aparece en los renglones 1, 4 y 7, separada. uniq solo junta los que están pegados; sort los pone juntos primero.</p>
      <p>Para usar uno detrás del otro sin archivos intermedios se usa la <strong>tubería</strong>, que es lo próximo.</p>
      <p>Por ejemplo, Tomás tenía la lista de asistencia de 3 clases en un archivo, con nombres repetidos. Ordenándola vio enseguida quién había ido más veces.</p>` },
    { titulo: "Tuberías y redirección: | , > y >>", html: `
      <p class="idea">La <strong>tubería</strong> <code>|</code> pasa lo que muestra un comando al siguiente, como un caño. Con <code>&gt;</code> lo guardás en un archivo y con <code>&gt;&gt;</code> lo agregás al final.</p>
      <pre class="terminal"><code>sort compras.txt | uniq -c
grep -i yerba ventas.csv | wc -l</code></pre>
      <pre><code>Salida:
$ sort compras.txt | uniq -c
      1 fideos
      2 leche
      1 pan
      3 yerba
$ grep -i yerba ventas.csv | wc -l
3</code></pre>
      <pre><code>sort compras.txt  |  uniq -c
   ordena        →   junta y cuenta
(la salida de sort entra a uniq; no hace falta un archivo en el medio)</code></pre>
      <table>
        <tr><th>Símbolo</th><th>Qué hace</th><th>Cuidado</th></tr>
        <tr><td><code>|</code></td><td>Pasa la salida al comando siguiente</td><td>Se pueden encadenar muchos</td></tr>
        <tr><td><code>&gt; archivo</code></td><td>Guarda la salida en el archivo</td><td><strong>Reemplaza</strong> lo que había</td></tr>
        <tr><td><code>&gt;&gt; archivo</code></td><td>Agrega la salida al final del archivo</td><td>No borra lo anterior</td></tr>
      </table>
      <pre class="terminal"><code>sort compras.txt | uniq &gt; lista-limpia.txt
cat lista-limpia.txt
echo aceite &gt;&gt; lista-limpia.txt
tail -n 2 lista-limpia.txt</code></pre>
      <pre><code>Salida:
$ sort compras.txt | uniq &gt; lista-limpia.txt
$ cat lista-limpia.txt
fideos
leche
pan
yerba
$ echo aceite &gt;&gt; lista-limpia.txt
$ tail -n 2 lista-limpia.txt
yerba
aceite</code></pre>
      <p>La <strong>salida</strong> de un comando es lo que muestra en la pantalla. La <strong>redirección</strong> la manda a otro lugar, como un archivo.</p>
      <p><strong>Error clásico:</strong> <code>sort compras.txt &gt; compras.txt</code> deja el archivo vacío, porque &gt; lo vacía antes de que sort lo lea. Guardá siempre en un archivo nuevo.</p>
      <p>Por ejemplo, Tomás quería saber cuántas ventas de yerba había, sin importar mayúsculas. Con <code>grep -i yerba ventas.csv | wc -l</code> lo resolvió en una línea.</p>` },
  ],
  practica: [
    "Buscá con grep -i una palabra en un archivo de texto tuyo y anotá cuántos renglones la tienen con -c.",
    "Ordená una lista con repetidos y contá con sort | uniq -c cuál se repite más; anotá el resultado.",
    "Guardá el resultado de una tubería en un archivo nuevo con > y agregale un renglón con >>; anotá los 2 comandos.",
  ],
  recursos: [
    { t: "Software Carpentry: la terminal de Unix (curso gratis, en inglés)", url: "https://swcarpentry.github.io/shell-novice/" },
    { t: "freeCodeCamp en español: comandos de Linux", url: "https://www.freecodecamp.org/espanol/news/comandos-de-linux/" },
    { t: "Ubuntu: la línea de comandos para principiantes (en inglés)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
  ],
  quiz: [
    { q: "Querés ver solo los renglones de notas.txt que dicen \"Marta\". ¿Qué escribís?", opciones: ["cat Marta notas.txt","ls Marta","grep Marta notas.txt","head Marta notas.txt"], correcta: 2, explicacion: "grep filtra renglones. cat tienta, pero muestra todo el archivo." },
    { q: "Si buscás \"yerba\" y no aparece \"Yerba\" con mayúscula, ¿qué agregás?", opciones: ["-i","-c","-v","-n"], correcta: 0, explicacion: "-i ignora mayúsculas. -c tienta, pero cuenta en vez de mostrar." },
    { q: "Querés saber cuántos renglones tienen \"yerba\", sin verlos. ¿Qué escribís?", opciones: ["grep -v yerba ventas.csv","grep -n yerba ventas.csv","wc yerba ventas.csv","grep -c yerba ventas.csv"], correcta: 3, explicacion: "-c cuenta. -n tienta, pero muestra los renglones con su número." },
    { q: "Querés todos los renglones MENOS los que dicen yerba. ¿Qué opción usás?", opciones: ["-i","-v","-c","-r"], correcta: 1, explicacion: "-v invierte la búsqueda. -i tienta, pero solo cambia lo de las mayúsculas." },
    { q: "No sabés en qué archivo de tu proyecto escribiste \"precio_final\". ¿Qué usás en tu computadora?", opciones: ["cat precio_final","ls precio_final","grep -rn precio_final .","cd precio_final"], correcta: 2, explicacion: "-r busca en todas las subcarpetas y -n te da el renglón. cat tienta, pero precio_final no es un archivo." },
    { q: "Tenés números del 1 al 20 y sort pone el 10 antes que el 9. ¿Qué agregás?", opciones: ["-n, para ordenar como números","-r","-c","Nada, está bien"], correcta: 0, explicacion: "Sin -n compara letra por letra. -r tienta, pero da vuelta el orden y el problema sigue." },
    { q: "Usaste uniq y siguen apareciendo repetidos. ¿Qué te faltó?", opciones: ["Usar -v","Borrar el archivo","Usar cat dos veces","Ordenar antes con sort"], correcta: 3, explicacion: "uniq solo junta los repetidos pegados. Usar -v tienta, pero es de grep." },
    { q: "Querés contar cuántas veces aparece cada producto en compras.txt. ¿Qué escribís?", opciones: ["uniq compras.txt","sort compras.txt | uniq -c","sort -c compras.txt","grep -c compras.txt"], correcta: 1, explicacion: "Ordenar y contar. uniq solo tienta, pero sin ordenar deja repetidos." },
    { q: "¿Qué hace el símbolo | entre dos comandos?", opciones: ["Borra el resultado","Separa dos archivos","Pasa lo que muestra el primero al segundo","Hace que corran más lento"], correcta: 2, explicacion: "Es una tubería. \"Separa dos archivos\" tienta porque se ve como una barra." },
    { q: "Querés guardar el resultado en lista.txt sin perder lo que ya tenía. ¿Qué usás?", opciones: [">> lista.txt","> lista.txt","| lista.txt","< lista.txt"], correcta: 0, explicacion: ">> agrega al final. > tienta, pero reemplaza todo." },
    { q: "Corriste sort compras.txt > compras.txt y el archivo quedó vacío. ¿Por qué?", opciones: ["Porque sort borra","Porque compras.txt no existía","Por un virus","Porque > vacía el archivo antes de que sort lo lea"], correcta: 3, explicacion: "Guardá en un archivo nuevo. \"sort borra\" tienta, pero el que vacía es >." },
    { q: "Querés saber cuántas ventas de yerba hay sin importar mayúsculas, en una línea. ¿Qué escribís?", opciones: ["wc -l yerba","grep -i yerba ventas.csv | wc -l","grep yerba | ventas.csv","sort yerba ventas.csv"], correcta: 1, explicacion: "grep filtra y wc cuenta. grep yerba | ventas.csv tienta, pero un archivo no es un comando." },
  ],
},
{
  id: "linux",
  icono: "🐧",
  titulo: "Linux por dentro: permisos, sudo y programas",
  nivel: "Avanzado",
  objetivos: [
    "Explicar qué es Linux y qué es una distribución",
    "Leer y cambiar permisos de archivos con ls -l y chmod",
    "Instalar programas con sudo apt y encontrar ayuda con man y --help",
  ],
  lecciones: [
    { titulo: "Qué es Linux y qué es una distribución", video: {"id":"NIQZOviElSU","t":"¿Qué es Linux y cómo funciona? En menos de 100 segundos · GCtech (1:37)"}, html: `
      <p class="idea"><strong>Linux</strong> es un sistema operativo gratuito y de código abierto, como Windows o macOS. Hay muchas versiones armadas por distintos grupos, que se llaman <strong>distribuciones</strong>.</p>
      <p>Un <strong>sistema operativo</strong> es el programa principal de la computadora: maneja los archivos, la memoria y los otros programas. <strong>Código abierto</strong> quiere decir que cualquiera puede ver cómo está hecho, mejorarlo y compartirlo.</p>
      <table>
        <tr><th>Distribución</th><th>Para quién</th></tr>
        <tr><td>Ubuntu</td><td>La más usada para empezar y en servidores</td></tr>
        <tr><td>Linux Mint</td><td>Parecida a Windows, buena para compus viejas</td></tr>
        <tr><td>Debian</td><td>Muy estable, base de Ubuntu y de muchas otras</td></tr>
        <tr><td>Fedora</td><td>Con lo más nuevo</td></tr>
        <tr><td>Huayra</td><td>Hecha en Argentina para las netbooks educativas</td></tr>
      </table>
      <p><strong>¿Dónde está Linux?</strong> En la mayoría de los servidores de internet, en los celulares Android (que usan Linux por dentro), en routers, televisores y en muchas supercomputadoras.</p>
      <p><strong>Las carpetas importantes de Linux:</strong></p>
      <pre><code>/        la raíz
/home    las carpetas personales de cada usuario
/etc     la configuración del sistema
/bin     los programas básicos (ls, cp, mv...)
/tmp     archivos temporales, se borran solos</code></pre>
      <p><strong>Probalo sin borrar nada:</strong> con WSL en Windows, o arrancando Ubuntu desde un pendrive en modo de prueba.</p>
      <p>Por ejemplo, Tomás revivió una notebook vieja de su abuela instalándole Linux Mint. Ahora la usa para practicar la terminal sin miedo a romper su compu principal.</p>` },
    { titulo: "Permisos: quién puede leer, escribir y ejecutar", video: {"id":"7qJwaOMXnJg","t":"Cómo usar el comando chmod en Linux · El Rincón del Hacker (5:05)"}, html: `
      <p class="idea">En Linux cada archivo tiene <strong>permisos</strong>: quién puede <strong>leerlo</strong> (r), <strong>escribirlo</strong> (w) y <strong>ejecutarlo</strong> (x). Se ven con <code>ls -l</code> y se cambian con <code>chmod</code>.</p>
      <pre><code>$ ls -l
-rw-r--r-- 1 tomas tomas  120 mar  4 10:15 notas.txt
-rwxr-xr-x 1 tomas tomas   85 mar  4 10:20 hola.sh
drwxr-xr-x 2 tomas tomas 4096 mar  4 10:05 Fotos</code></pre>
      <pre><code>-rwxr-xr-x
│└┬┘└┬┘└┬┘
│ │  │  └── los demás:  r-x  (leer y ejecutar)
│ │  └───── el grupo:   r-x  (leer y ejecutar)
│ └──────── el dueño:   rwx  (leer, escribir y ejecutar)
└────────── tipo: - es archivo, d es carpeta</code></pre>
      <table>
        <tr><th>Letra</th><th>Permiso</th><th>En un archivo</th></tr>
        <tr><td>r</td><td>Leer</td><td>Ver lo que tiene</td></tr>
        <tr><td>w</td><td>Escribir</td><td>Cambiarlo o borrarlo</td></tr>
        <tr><td>x</td><td>Ejecutar</td><td>Correrlo como programa</td></tr>
        <tr><td>-</td><td>Sin ese permiso</td><td></td></tr>
      </table>
      <pre><code>chmod +x hola.sh      # le da permiso de ejecutar
chmod -w notas.txt    # le saca el permiso de escribir</code></pre>
      <p><strong>¿Para qué sirven?</strong> Para que otros usuarios no lean tus cosas y para que nadie corra un programa sin querer. Por eso, para correr un script propio primero hay que darle permiso de ejecución con <code>chmod +x</code>.</p>
      <p>Estos comandos van en la terminal de tu computadora: la terminal de práctica no tiene permisos.</p>
      <p>Por ejemplo, Tomás escribió su primer script y al correrlo le dijo "Permiso denegado". Con <code>chmod +x</code> se solucionó.</p>` },
    { titulo: "Instalar programas y pedir ayuda: sudo, apt, man", html: `
      <p class="idea">Para tareas del sistema, como instalar programas, se usa <code>sudo</code>: corre un comando con permisos de <strong>administrador</strong>. En Ubuntu, los programas se instalan con <code>apt</code>.</p>
      <pre><code>sudo apt update          # actualiza la lista de programas disponibles
sudo apt install tree    # instala el programa tree
tree                     # muestra las carpetas como árbol
sudo apt upgrade         # actualiza los programas instalados</code></pre>
      <p>El <strong>administrador</strong> (en Linux se llama <strong>root</strong>) es el usuario que puede cambiar todo el sistema. <code>sudo</code> te pide tu contraseña. Mientras la escribís <strong>no se ven los caracteres</strong>, ni asteriscos: es normal, escribila y apretá Enter.</p>
      <table>
        <tr><th>Con sudo, sí</th><th>Con sudo, cuidado</th></tr>
        <tr><td>Instalar y actualizar programas con apt</td><td>Nunca lo uses en comandos que no entendés</td></tr>
        <tr><td>Cambiar la configuración del sistema</td><td>Un error con sudo puede romper el sistema</td></tr>
        <tr><td>Seguir una guía oficial</td><td>Si alguien desconocido te pide la contraseña o un sudo, desconfiá</td></tr>
      </table>
      <p><strong>Pedir ayuda:</strong> casi todos los comandos traen su manual.</p>
      <pre><code>man ls          # el manual completo (se sale con q)
ls --help       # un resumen de las opciones
man grep        # para buscar adentro del manual: /palabra y Enter</code></pre>
      <p>Un <strong>gestor de paquetes</strong> como apt es una "tienda" de programas gratuitos y revisados: baja el programa, lo instala y lo mantiene actualizado.</p>
      <p>Por ejemplo, Tomás necesitaba Python para la facultad. En su Ubuntu escribió <code>sudo apt install python3</code>, puso su contraseña sin ver los caracteres y en un minuto lo tenía.</p>` },
  ],
  practica: [
    "Corré ls -l en tu computadora y anotá los permisos de 2 archivos y 1 carpeta.",
    "Instalá un programa chico con sudo apt install (por ejemplo, tree) y anotá qué te mostró al terminar.",
    "Abrí man de un comando del curso, buscá una opción que no conocías y anotá qué hace.",
  ],
  recursos: [
    { t: "Ubuntu: descargar Ubuntu para escritorio", url: "https://ubuntu.com/download/desktop" },
    { t: "Microsoft: cómo instalar Linux en Windows con WSL", url: "https://learn.microsoft.com/es-es/windows/wsl/install" },
    { t: "Ubuntu: la línea de comandos para principiantes (en inglés)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
  ],
  quiz: [
    { q: "¿Qué es Linux?", opciones: ["Un programa de Windows","Un virus","Un sistema operativo gratuito y de código abierto","Un lenguaje de programación"], correcta: 2, explicacion: "Es como Windows o macOS. \"Un programa de Windows\" tienta porque se puede usar con WSL." },
    { q: "Tenés una compu vieja que anda lenta con Windows. ¿Qué distribución probarías?", opciones: ["Linux Mint","Ninguna, no se puede","Una distribución para supercomputadoras","Android"], correcta: 0, explicacion: "Mint es liviana y parecida a Windows. Android tienta porque usa Linux, pero es para celulares." },
    { q: "¿Qué quiere decir código abierto?", opciones: ["Que tiene un agujero de seguridad","Que es pago","Que no tiene contraseña","Que cualquiera puede ver cómo está hecho, mejorarlo y compartirlo"], correcta: 3, explicacion: "El código es público. \"Agujero de seguridad\" tienta por la palabra \"abierto\"." },
    { q: "Querés ver la configuración del sistema en Linux. ¿En qué carpeta buscás?", opciones: ["/tmp","/etc","/home","/bin"], correcta: 1, explicacion: "/etc guarda la configuración. /home tienta, pero ahí están las carpetas de los usuarios." },
    { q: "ls -l muestra \"-rw-r--r--\" en notas.txt. ¿Qué puede hacer el dueño?", opciones: ["Solo leer","Leer, escribir y ejecutar","Leer y escribir, pero no ejecutar","Nada"], correcta: 2, explicacion: "rw- es leer y escribir. \"Ejecutar\" tienta, pero falta la x." },
    { q: "Si un renglón de ls -l empieza con \"d\", ¿qué es?", opciones: ["Una carpeta","Un archivo borrado","Un disco","Un archivo dañado"], correcta: 0, explicacion: "d es de directorio. \"Un disco\" tienta por la letra." },
    { q: "Tu script dice \"Permiso denegado\" al correrlo. ¿Qué hacés?", opciones: ["Lo borro","Uso sudo rm","Reinicio la compu","Le doy permiso de ejecución con chmod +x"], correcta: 3, explicacion: "Le falta la x. sudo tienta como solución a todo, pero no hace falta." },
    { q: "¿Para qué sirve sudo?", opciones: ["Para borrar todo","Para correr un comando con permisos de administrador","Para salir de la terminal","Para ver archivos ocultos"], correcta: 1, explicacion: "Da permisos de root. \"Ver ocultos\" tienta, pero eso es ls -a." },
    { q: "Escribís tu contraseña con sudo y no ves nada en la pantalla. ¿Qué hacés?", opciones: ["Cierro la terminal","Reinicio la compu","Sigo escribiendo y aprieto Enter: es normal","La escribo en el chat para probar"], correcta: 2, explicacion: "No muestra ni asteriscos a propósito. Reiniciar tienta del susto, pero no hace falta." },
    { q: "Querés instalar el programa tree en Ubuntu. ¿Qué escribís?", opciones: ["sudo apt install tree","apt tree","install tree","sudo rm tree"], correcta: 0, explicacion: "apt install con sudo. \"install tree\" tienta, pero install solo no es el comando." },
    { q: "Un desconocido en un foro te pide que corras un sudo que no entendés. ¿Qué hacés?", opciones: ["Lo corro rápido","Le paso mi contraseña","Lo corro dos veces","No lo corro y busco qué hace"], correcta: 3, explicacion: "Con sudo, un error rompe el sistema. Correrlo tienta si te urge, pero es un riesgo." },
    { q: "Si no te acordás de las opciones de ls, ¿qué escribís?", opciones: ["ls --borrar","man ls o ls --help","sudo ls","cd ls"], correcta: 1, explicacion: "El manual te las explica. sudo ls tienta, pero solo corre ls con más permisos." },
  ],
},
{
  id: "scripts",
  icono: "📜",
  titulo: "Tu primer script",
  nivel: "Avanzado",
  objetivos: [
    "Escribir un script de bash con comandos que ya conocés",
    "Usar variables y argumentos para que el script sirva más de una vez",
    "Revisar un comando o script de internet antes de correrlo",
  ],
  lecciones: [
    { titulo: "Un script es una lista de comandos", video: {"id":"EKFK83mNsyo","t":"Bash explicado fácilmente en 3 minutos · kjchints (3:45)"}, html: `
      <p class="idea">Un <strong>script</strong> es un archivo de texto con comandos, uno por renglón. Cuando lo corrés, la terminal los hace todos en orden. Así automatizás lo que repetís.</p>
      <pre><code>#!/bin/bash
# ordenar.sh: ordena la carpeta Descargas
mkdir -p ~/Descargas/fotos ~/Descargas/pdf
mv ~/Descargas/*.jpg ~/Descargas/fotos
mv ~/Descargas/*.pdf ~/Descargas/pdf
echo "Listo: Descargas ordenada"</code></pre>
      <table>
        <tr><th>Renglón</th><th>Qué es</th></tr>
        <tr><td><code>#!/bin/bash</code></td><td>El primer renglón: dice que lo corra bash (se lee "shebang")</td></tr>
        <tr><td><code># ...</code></td><td>Un comentario: la terminal lo ignora, es para personas</td></tr>
        <tr><td>El resto</td><td>Comandos que ya conocés, en orden</td></tr>
      </table>
      <pre><code>nano ordenar.sh        # abre un editor en la terminal; se guarda con Ctrl+O y se sale con Ctrl+X
chmod +x ordenar.sh    # le da permiso de ejecutar
./ordenar.sh           # lo corre (./ quiere decir "el de esta carpeta")</code></pre>
      <p><code>nano</code> es un editor de texto que funciona adentro de la terminal. También podés escribir el script en cualquier editor, como VS Code, y guardarlo con la extensión .sh.</p>
      <p>Podés probar los comandos uno por uno en la terminal de práctica antes de ponerlos en el script:</p>
      <pre class="terminal"><code>mkdir -p Descargas/fotos Descargas/pdf
mv Descargas/*.jpg Descargas/fotos
mv Descargas/*.pdf Descargas/pdf
ls Descargas
echo Listo: Descargas ordenada</code></pre>
      <pre><code>Salida:
$ mkdir -p Descargas/fotos Descargas/pdf
$ mv Descargas/*.jpg Descargas/fotos
$ mv Descargas/*.pdf Descargas/pdf
$ ls Descargas
fotos  pdf  temas.txt
$ echo Listo: Descargas ordenada
Listo: Descargas ordenada</code></pre>
      <p>Por ejemplo, Tomás ordenaba su carpeta de Descargas a mano cada viernes. Con este script lo hace en un segundo.</p>` },
    { titulo: "Variables y argumentos", html: `
      <p class="idea">Una <strong>variable</strong> guarda un dato con un nombre para usarlo después. Un <strong>argumento</strong> es un dato que le pasás al script cuando lo corrés, así sirve para distintos casos.</p>
      <pre><code>#!/bin/bash
# saludo.sh
nombre="Tomás"
echo "Hola, $nombre"

# Con argumento: el primero se llama $1
echo "Hola, $1"</code></pre>
      <pre><code>$ ./saludo.sh Ana
Hola, Tomás
Hola, Ana</code></pre>
      <table>
        <tr><th>Escribís</th><th>Qué es</th></tr>
        <tr><td><code>nombre="Tomás"</code></td><td>Crea la variable (sin espacios alrededor del =)</td></tr>
        <tr><td><code>$nombre</code></td><td>Usa lo que tiene la variable</td></tr>
        <tr><td><code>$1</code>, <code>$2</code></td><td>El primer y el segundo argumento</td></tr>
        <tr><td><code>"$1"</code></td><td>Entre comillas, por si el dato tiene espacios</td></tr>
      </table>
      <pre><code>#!/bin/bash
# buscar.sh: cuenta cuántas veces aparece una palabra en un archivo
# Uso: ./buscar.sh palabra archivo
echo "Buscando $1 en $2..."
grep -i -c "$1" "$2"</code></pre>
      <p><strong>El error más común:</strong> poner espacios en <code>nombre = "Tomás"</code>. bash lo toma como un comando llamado "nombre" y dice "orden no encontrada".</p>
      <p>Si querés programar cosas más grandes, con decisiones y bucles, Python es más cómodo: está el curso <strong>Automatizar tareas con Python</strong> de este sitio.</p>
      <p>Por ejemplo, Tomás armó buscar.sh y lo usa con distintos archivos: <code>./buscar.sh yerba ventas.csv</code>, <code>./buscar.sh error registro.log</code>.</p>` },
    { titulo: "No corras lo que no entendés", html: `
      <p class="idea">Un script hace lo mismo que si escribieras sus comandos vos. Por eso, <strong>antes de correr un comando o un script de internet, leelo y entendelo</strong>.</p>
      <table>
        <tr><th>Señal de alarma</th><th>Por qué</th></tr>
        <tr><td><code>rm -rf</code> con / o ~</td><td>Borra todo, sin papelera ni preguntas</td></tr>
        <tr><td><code>curl ... | bash</code> o <code>wget ... | sh</code></td><td>Baja un script de internet y lo corre sin que lo veas</td></tr>
        <tr><td><code>sudo</code> en algo que no entendés</td><td>Le da poder de administrador</td></tr>
        <tr><td>Te piden la contraseña o que desactives la seguridad</td><td>Es la forma típica de las estafas</td></tr>
        <tr><td>Texto muy largo, codificado o raro</td><td>Puede esconder lo que hace de verdad</td></tr>
      </table>
      <pre><code>Antes de correr algo de internet
1. ¿De dónde viene? Preferí la página oficial del programa.
2. Leé cada comando. Si no sabés qué hace uno, buscalo (man o --help).
3. Si es un script, bajalo primero y miralo con cat o less.
4. Probalo en una carpeta de prueba, nunca con sudo de entrada.
5. Si dudás, no lo corras y preguntá.</code></pre>
      <p><strong>Las estafas también llegan a la terminal:</strong> mensajes de "soporte técnico" o videos que prometen arreglar tu compu pegando un comando. Las mismas reglas del curso <strong>Seguridad digital y estafas</strong> valen acá.</p>
      <p><strong>Guardá tus scripts con Git:</strong> así ves qué cambiaste y podés volver atrás. Está el curso <strong>Git y GitHub</strong> de este sitio.</p>
      <p>Por ejemplo, un video le decía a Tomás que pegara <code>curl algo.com/arreglar.sh | sudo bash</code> para "acelerar" la compu. Bajó el script con curl, lo miró con less y vio que borraba carpetas. No lo corrió.</p>` },
  ],
  practica: [
    "Escribí un script de 3 comandos que ya conozcas, dale permiso con chmod +x, corrélo y anotá qué mostró.",
    "Agregale a tu script un argumento $1 y probalo con 2 valores distintos; anotá las 2 salidas.",
    "Buscá en internet un comando de instalación y revisalo con la lista de 5 pasos; anotá qué hace cada parte.",
  ],
  recursos: [
    { t: "Software Carpentry: la terminal de Unix (curso gratis, en inglés)", url: "https://swcarpentry.github.io/shell-novice/" },
    { t: "Curso de este sitio: Automatizar tareas con Python", url: "https://pkeios.github.io/EiaLearning/python-automatizar/" },
    { t: "Curso de este sitio: Seguridad digital y estafas", url: "https://pkeios.github.io/EiaLearning/seguridad-digital/" },
    { t: "Curso de este sitio: Git y GitHub", url: "https://pkeios.github.io/EiaLearning/git/" },
  ],
  quiz: [
    { q: "¿Qué es un script de bash?", opciones: ["Un virus","Un programa que solo funciona en Windows","Un archivo de texto con comandos que se corren en orden","Una carpeta oculta"], correcta: 2, explicacion: "Es una lista de comandos. \"Un virus\" tienta si escuchaste que los scripts son peligrosos." },
    { q: "¿Para qué sirve el renglón #!/bin/bash al principio?", opciones: ["Para indicar que el script lo corre bash","Es un comentario sin efecto","Para borrar el script al terminar","Para darle permisos"], correcta: 0, explicacion: "Se llama shebang. \"Comentario sin efecto\" tienta por el #, pero el primer renglón es especial." },
    { q: "Si escribís \"# ordena las fotos\" en un script, ¿qué hace la terminal?", opciones: ["Ordena las fotos","Da un error","Borra el renglón","Lo ignora: es un comentario para personas"], correcta: 3, explicacion: "Los comentarios explican. \"Ordena las fotos\" tienta porque lo dice, pero no es un comando." },
    { q: "Escribiste ordenar.sh y querés correrlo. ¿Qué hacés?", opciones: ["cat ordenar.sh","chmod +x ordenar.sh y después ./ordenar.sh","rm ordenar.sh","cd ordenar.sh"], correcta: 1, explicacion: "Permiso y después ./. cat tienta, pero solo lo muestra." },
    { q: "Si ves ./ordenar.sh en un tutorial, ¿qué quiere decir ./?", opciones: ["La raíz del disco","La carpeta personal","El archivo de esta carpeta","Un archivo oculto"], correcta: 2, explicacion: ". es la carpeta actual. \"Oculto\" tienta por el punto, pero ahí el punto es otra cosa." },
    { q: "Querés guardar el nombre \"Ana\" para usarlo después en el script. ¿Qué escribís?", opciones: ["nombre=\"Ana\"","nombre = \"Ana\"","$nombre=\"Ana\"","echo nombre Ana"], correcta: 0, explicacion: "Sin espacios alrededor del =. Con espacios tienta por prolijo, pero bash lo toma como comando." },
    { q: "Si en el script escribiste nombre = \"Tomás\" y dice \"orden no encontrada\", ¿qué pasó?", opciones: ["Tomás no es un nombre válido","Falta sudo","El script está borrado","Los espacios alrededor del = hacen que bash lo tome como un comando"], correcta: 3, explicacion: "Sacá los espacios. \"Falta sudo\" tienta como solución a todo, pero no tiene nada que ver." },
    { q: "Corrés ./buscar.sh yerba ventas.csv. ¿Qué vale $1?", opciones: ["ventas.csv","yerba","./buscar.sh","Nada"], correcta: 1, explicacion: "$1 es el primer argumento. ventas.csv tienta, pero es $2." },
    { q: "Un dato que le pasás al script puede tener espacios. ¿Cómo lo usás adentro?", opciones: ["Sin comillas: $1","Con paréntesis: ($1)","Entre comillas: \"$1\"","Con dos $: $$1"], correcta: 2, explicacion: "Las comillas lo mantienen junto. Sin comillas tienta por corto, pero se parte en palabras." },
    { q: "Un video te dice que pegues curl algo.com/arreglar.sh | sudo bash. ¿Qué hacés?", opciones: ["Bajo el script, lo leo y no lo corro si no entiendo qué hace","Lo pego directo","Lo pego sin sudo y listo","Le paso mi contraseña al del video"], correcta: 0, explicacion: "curl | bash corre algo que no viste. Sacar el sudo tienta, pero igual corre algo desconocido." },
    { q: "¿Cuál de estos es una señal de alarma en un comando de internet?", opciones: ["ls -a","pwd","echo Hola","rm -rf con / o ~"], correcta: 3, explicacion: "Borra todo sin preguntar. ls -a tienta por la opción, pero solo lista." },
    { q: "Querés guardar tus scripts y poder volver a una versión anterior. ¿Qué usás?", opciones: ["La papelera","Git","rm","Un archivo de registro"], correcta: 1, explicacion: "Git guarda versiones. La papelera tienta, pero no guarda versiones." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: ordenar y analizar con la terminal",
  nivel: "Avanzado",
  objetivos: [
    "Ordenar una carpeta real con comandos de mover, crear y borrar",
    "Responder preguntas sobre un archivo de datos con grep, sort, uniq y wc",
    "Guardar el trabajo en un script y evaluarlo con una rúbrica",
  ],
  lecciones: [
    { titulo: "El encargo: ordenar una carpeta", html: `
      <p class="idea">El proyecto final tiene dos partes: <strong>ordenar una carpeta</strong> con la terminal y <strong>responder preguntas sobre un archivo de datos</strong>. Al final, todo queda en un script.</p>
      <p>Hacelo en tu computadora con una carpeta de prueba (una copia de tus Descargas, por ejemplo) o en la terminal de práctica con la carpeta de Ana.</p>
      <pre class="terminal"><code>pwd
ls Descargas
mkdir -p Ordenado/fotos Ordenado/documentos Ordenado/textos
mv Descargas/*.jpg Ordenado/fotos
mv Descargas/*.pdf Ordenado/documentos
mv Descargas/*.txt Ordenado/textos
ls Ordenado/fotos Ordenado/documentos Ordenado/textos
ls Descargas</code></pre>
      <pre><code>Salida:
$ pwd
/home/ana
$ ls Descargas
foto-cumple.jpg  foto-playa.jpg  informe.pdf  temas.txt
$ mkdir -p Ordenado/fotos Ordenado/documentos Ordenado/textos
$ mv Descargas/*.jpg Ordenado/fotos
$ mv Descargas/*.pdf Ordenado/documentos
$ mv Descargas/*.txt Ordenado/textos
$ ls Ordenado/fotos Ordenado/documentos Ordenado/textos
Ordenado/documentos:
informe.pdf

Ordenado/fotos:
foto-cumple.jpg  foto-playa.jpg

Ordenado/textos:
temas.txt
$ ls Descargas</code></pre>
      <table>
        <tr><th>Paso</th><th>Comandos</th></tr>
        <tr><td>1. Mirar qué hay</td><td><code>pwd</code>, <code>ls</code>, <code>ls -a</code></td></tr>
        <tr><td>2. Armar la estructura</td><td><code>mkdir -p</code></td></tr>
        <tr><td>3. Mover por tipo</td><td><code>mv</code> con <code>*</code></td></tr>
        <tr><td>4. Revisar</td><td><code>ls</code> de cada carpeta</td></tr>
        <tr><td>5. Borrar lo que sobra (con cuidado)</td><td><code>ls</code> primero, <code>rm</code> después</td></tr>
      </table>
      <p><strong>Trabajá sobre una copia</strong> la primera vez: <code>cp -r Descargas Descargas-copia</code>. Si algo sale mal, tenés el original.</p>
      <p>Por ejemplo, Tomás hizo el proyecto con una copia de sus Descargas: tenía 230 archivos mezclados y en 5 comandos quedaron separados en fotos, documentos y textos.</p>` },
    { titulo: "Preguntas a un archivo de datos", html: `
      <p class="idea">La segunda parte es responder <strong>5 preguntas</strong> sobre un archivo de datos usando solo la terminal. Escribí cada pregunta, el comando y la respuesta.</p>
      <pre class="terminal"><code># 1. ¿Qué columnas tiene?
head -n 1 ventas.csv
# 2. ¿Cuántas ventas hay? (menos el encabezado)
wc -l ventas.csv
# 3. ¿Cuántas ventas de yerba, sin importar mayúsculas?
grep -i -c yerba ventas.csv
# 4. ¿Qué ventas hubo el 2026-03-04?
grep 2026-03-04 ventas.csv
# 5. ¿Cuántas veces está cada producto en la lista de compras?
sort compras.txt | uniq -c</code></pre>
      <pre><code>Salida:
$ head -n 1 ventas.csv
fecha,producto,monto
$ wc -l ventas.csv
7 ventas.csv
$ grep -i -c yerba ventas.csv
3
$ grep 2026-03-04 ventas.csv
2026-03-04,fideos,1200
2026-03-04,Yerba,3900
$ sort compras.txt | uniq -c
      1 fideos
      2 leche
      1 pan
      3 yerba</code></pre>
      <pre><code>Respuestas de Tomás
1. fecha, producto y monto.
2. 7 renglones − 1 de encabezado = 6 ventas.
3. 3 ventas de yerba.
4. Una de fideos y una de Yerba.
5. yerba 3, leche 2, fideos 1, pan 1.</code></pre>
      <table>
        <tr><th>Si la pregunta es...</th><th>Usá</th></tr>
        <tr><td>¿Qué tiene? ¿Cómo empieza?</td><td><code>head</code>, <code>cat</code></td></tr>
        <tr><td>¿Cuántos hay?</td><td><code>wc -l</code>, <code>grep -c</code></td></tr>
        <tr><td>¿Cuáles cumplen algo?</td><td><code>grep</code></td></tr>
        <tr><td>¿Cuántas veces cada uno?</td><td><code>sort | uniq -c</code></td></tr>
      </table>
      <p><strong>Datos tuyos:</strong> podés usar un CSV que bajes de un portal de datos abiertos, la lista de tus canciones o la de asistencia de un curso. Si tiene datos de otras personas, no lo compartas.</p>
      <p>Por ejemplo, Tomás usó un CSV con los partidos de su equipo de fútbol y respondió cuántos ganaron de local con un grep y un wc.</p>` },
    { titulo: "Guardá todo en un script y evaluá con la rúbrica", html: `
      <p class="idea">Pasá los comandos que funcionaron a un <strong>script</strong> con comentarios, corrélo de nuevo sobre una copia y evaluá tu trabajo con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <pre><code>#!/bin/bash
# proyecto.sh: ordena Descargas y responde preguntas sobre ventas.csv
# Uso: ./proyecto.sh
mkdir -p Ordenado/fotos Ordenado/documentos Ordenado/textos
mv Descargas/*.jpg Ordenado/fotos
mv Descargas/*.pdf Ordenado/documentos
mv Descargas/*.txt Ordenado/textos
echo "Columnas:"; head -n 1 ventas.csv
echo "Ventas de yerba:"; grep -i -c yerba ventas.csv</code></pre>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Moverse</td><td>Usa rutas relativas y absolutas sin perderse</td><td>Solo un tipo</td><td>Se pierde</td></tr>
        <tr><td>Ordenar</td><td>Carpetas creadas y archivos movidos con *</td><td>Movidos uno por uno</td><td>Sin ordenar</td></tr>
        <tr><td>Cuidado</td><td>Trabaja sobre una copia y revisa con ls antes de borrar</td><td>Revisa a veces</td><td>Borra sin revisar</td></tr>
        <tr><td>Preguntas</td><td>5 preguntas con comando y respuesta correcta</td><td>3 o 4</td><td>Menos de 3</td></tr>
        <tr><td>Tuberías</td><td>Al menos 2 respuestas con |</td><td>Una</td><td>Ninguna</td></tr>
        <tr><td>Script</td><td>Con shebang, comentarios y funciona</td><td>Funciona sin comentarios</td><td>No funciona</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → listo para usar la terminal en tus proyectos (seguí con el curso de Git)
7 a 9   → mejorá el criterio más bajo
0 a 6   → repasá los módulos de moverse y de archivos</code></pre>
      <p><strong>Usala todos los días:</strong> la terminal se aprende usándola. Proponete hacer con comandos una tarea por día que antes hacías con el mouse.</p>
      <p>Por ejemplo, Tomás sacó 10 de 12: le faltó una segunda tubería y no puso comentarios. Los agregó y volvió a correr el script sobre otra copia.</p>` },
  ],
  practica: [
    "Hacé una copia de una carpeta desordenada, ordenala por tipo con mkdir y mv, y anotá cuántos archivos quedaron en cada carpeta.",
    "Respondé 5 preguntas sobre un archivo de datos con la terminal y anotá pregunta, comando y respuesta.",
    "Pasá los comandos a un script con comentarios, corrélo sobre otra copia y anotá si dio lo mismo.",
    "Puntuá tu proyecto con la rúbrica y anotá tu total de 12.",
  ],
  recursos: [
    { t: "Curso de este sitio: Git y GitHub", url: "https://pkeios.github.io/EiaLearning/git/" },
    { t: "Software Carpentry: la terminal de Unix (curso gratis, en inglés)", url: "https://swcarpentry.github.io/shell-novice/" },
    { t: "freeCodeCamp en español: comandos de Linux", url: "https://www.freecodecamp.org/espanol/news/comandos-de-linux/" },
  ],
  quiz: [
    { q: "Vas a ordenar tus Descargas por primera vez con la terminal. ¿Qué hacés antes?", opciones: ["Borro todo y empiezo de cero","Nada, voy directo","Una copia con cp -r para trabajar sobre ella","Uso sudo para todo"], correcta: 2, explicacion: "Con una copia, si algo sale mal tenés el original. Ir directo tienta por rápido." },
    { q: "Querés crear Ordenado/fotos y Ordenado/textos de una vez. ¿Qué escribís?", opciones: ["mkdir -p Ordenado/fotos Ordenado/textos","touch Ordenado/fotos Ordenado/textos","cd Ordenado/fotos","mkdir Ordenado fotos textos"], correcta: 0, explicacion: "Con -p crea Ordenado y las de adentro. La última tienta, pero crea tres carpetas sueltas." },
    { q: "Querés mover todos los PDF de Descargas a Ordenado/documentos. ¿Qué escribís?", opciones: ["mv Ordenado/documentos Descargas/*.pdf","cp Descargas Ordenado","rm Descargas/*.pdf","mv Descargas/*.pdf Ordenado/documentos"], correcta: 3, explicacion: "Primero qué, después adónde. Al revés tienta, pero mueve la carpeta destino." },
    { q: "Vas a borrar lo que sobró con rm. ¿Qué hacés primero?", opciones: ["Agrego -f","ls con el mismo patrón para ver qué se borra","Lo hago con sudo","Nada"], correcta: 1, explicacion: "Revisar antes evita desastres. -f tienta, pero saca la última protección." },
    { q: "Querés saber qué columnas tiene un CSV. ¿Qué usás?", opciones: ["tail -n 1","wc -l","head -n 1","sort"], correcta: 2, explicacion: "El encabezado es el primer renglón. tail tienta, pero da el último." },
    { q: "Si wc -l da 7 en un CSV con encabezado, ¿cuántas filas de datos hay?", opciones: ["6","7","8","0"], correcta: 0, explicacion: "Restás el encabezado. 7 tienta porque es el número que da wc." },
    { q: "Querés contar cuántas veces aparece cada producto. ¿Qué usás?", opciones: ["grep -c","uniq archivo","head archivo","sort archivo | uniq -c"], correcta: 3, explicacion: "Ordenar y contar. grep -c tienta, pero cuenta una sola palabra por vez." },
    { q: "Tu archivo de datos tiene nombres y teléfonos de personas. ¿Qué hacés con tu proyecto?", opciones: ["Lo publico en redes","No comparto ese archivo","Lo mando a un grupo","Lo subo a un sitio público"], correcta: 1, explicacion: "Son datos de otras personas. Publicarlo tienta para mostrar el trabajo, pero no corresponde." },
    { q: "¿Qué tiene que tener tu script para sacar 2 puntos en \"Script\"?", opciones: ["Solo que funcione","Muchos sudo","Shebang, comentarios y que funcione","Ser muy largo"], correcta: 2, explicacion: "Funcionar sin comentarios es 1 punto. \"Ser muy largo\" tienta, pero no es un criterio." },
    { q: "Si respondiste 4 de las 5 preguntas bien, ¿cuántos puntos en \"Preguntas\"?", opciones: ["1","2","0","12"], correcta: 0, explicacion: "3 o 4 es 1 punto. 2 tienta, pero son las 5." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Dejo la terminal para siempre","Empiezo el curso de cero","Uso solo el mouse","Mejoro el criterio más bajo"], correcta: 3, explicacion: "De 7 a 9, mejorá uno. Empezar de cero tienta, pero perdés lo que ya sabés." },
    { q: "Si terminaste el curso, ¿cómo seguís aprendiendo la terminal?", opciones: ["Memorizando todos los comandos","Usándola todos los días para algo que antes hacía con el mouse","Esperando a necesitarla","Leyendo sin practicar"], correcta: 1, explicacion: "Se aprende usándola. Memorizar todo tienta, pero se olvida sin práctica." },
  ],
},
];
