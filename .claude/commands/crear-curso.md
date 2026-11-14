---
description: Arma, prueba y publica un curso nuevo de la lista CURSOS.md (uno por ejecución). Pensado para usar con /loop.
argument-hint: "[carpeta del curso, por ejemplo excel]"
---

Sos el equipo que arma los cursos de este sitio. En cada ejecución **armás un solo curso completo**, lo probás y lo publicás. Después terminás.

## 1. Elegir el curso
- Si `$ARGUMENTS` es una carpeta de `CURSOS.md`, armá ese curso. Si no, tomá el primero sin marcar (`- [ ]`).
- Si esa carpeta ya existe en `public/` (quedó a medias en una ejecución anterior), seguí desde donde quedó en vez de empezar de cero.
- El usuario autorizó que decidas vos el nombre, el público y la bibliografía de cada curso de la lista. El nombre de la lista es solo de trabajo: podés mejorarlo.

## 2. Investigar antes de escribir
- Buscá en internet 3 a 5 cursos o guías reconocidos del mismo tema: oficiales, de universidades, de organismos públicos o de empresas serias. Anotá sus temarios y armá el tuyo con lo que se repite y lo que falta.
- Elegí 2 a 4 recursos para cada módulo y **abrí cada enlace** (curl o WebFetch) antes de usarlo. Nunca inventes una URL. Pueden estar en inglés. Si un sitio bloquea los chequeos automáticos, buscá otro o nombrá el recurso sin enlace.
- Para libros, confirmá en una librería o en un catálogo que existen: título, autor y editorial.

## 3. Escribir el curso
Mismo formato y mismo motor que `public/prompts/`. Usalo de modelo: copiá su `index.html` y cambiá el título, `data-curso`, la marca y `window.CURSO`, con su propia `clave: 'progreso-<carpeta>'`.
- **Tamaño:** entre 6 y 10 módulos según el tema. Cada módulo lleva 3 lecciones, 12 preguntas, 3 o 4 prácticas y entre 2 y 4 recursos. El último módulo es un proyecto final con una rúbrica.
- **Color:** `data-curso="cat-<categoría>"`, con la categoría de `CURSOS.md`: trabajo, vida, oficios, emprender, tecnologia, datos-ia o chicos. Los colores ya están en `public/styles.css`.
- **Sin mapa del curso** (`window.MAPA`): el usuario lo pidió así porque repite las tarjetas.
- **Videos:** entre 4 y 8 videos de YouTube por curso, en las lecciones donde ver ayuda más que leer (cómo se usa una herramienta, un movimiento, una técnica con las manos). Van como campo `video: { id, t }` de la lección, con `t` = "Título · Canal (duración)". Preferí videos cortos en castellano de canales serios (organismos públicos, universidades, ONG educativas como LearnFree, TEDx, fabricantes); nada de canales de dudosa calidad ni contenido peligroso. Buscalos con la búsqueda de YouTube y controlalos con `node tools/videos.js <carpeta>`: tiene que decir 0 con problemas (detecta los que no existen o no dejan insertarse). El video acompaña la lección, no la reemplaza: la lección se tiene que entender sin verlo.
- **Lecciones:** una idea central por lección, de 300 a 600 palabras (como máximo 900). Cada una lleva una frase clave arriba (`<p class="idea">`), al menos un ejemplo concreto ("Por ejemplo, ...") y algo visual: una tabla, una lista o un `<pre><code>`. Definí cada término nuevo en el momento y sumalo al glosario (`glosario.js`, entre 25 y 60 términos). Escribí en castellano rioplatense, para alguien que no sabe nada, sin suponer que tiene trabajo. Usá ejemplos de la vida diaria en Argentina. Nada de backticks dentro de las lecciones, y escapá `<` y `>` dentro de `<code>`.
- **Preguntas:** al menos el 60% plantea un caso ("Si...", "Tu...", "Tenés que..."). Cada explicación dice por qué la correcta es correcta y por qué tienta la opción incorrecta más tentadora. Repartí la posición de la correcta en partes iguales. Preguntá solo sobre lo que enseñan las lecciones.
- **Prácticas:** cada una tiene un resultado que se puede comprobar: algo que se mide, se compara, se anota o se entrega.
- **Oficios y temas con riesgo:** cada herramienta lleva su seguridad (protección, cómo usarla y qué no hacer). No enseñes trabajos que en Argentina piden matrícula, como la instalación de gas o la eléctrica de una casa: en esos casos, mandá a un profesional o a un centro de formación profesional. En salud, derecho y plata, la lección ayuda a entender y a preparar preguntas, pero no reemplaza a un profesional, y lo dice. Primeros auxilios no reemplaza un curso presencial, y lo dice.
- **Cursos para chicos:** frases cortas de una idea, sin tecnicismos y nada peligroso para hacer solos. Las prácticas dicen "con un adulto" cuando hace falta.
- **Código:** si el curso tiene Python, cada bloque se tiene que correr de verdad, y su bloque "Salida:" tiene que ser exactamente lo que imprime (mirá cómo lo controla `tools/test-de.js` y extendelo a la carpeta nueva sin romper data-engineering). Si el curso necesita otro tipo de laboratorio, como uno de HTML o un simulador de comandos, armalo en `public/app.js` sin romper los otros cursos y con su test en `tools/test-app.js`.

## 4. Conectarlo al sitio
- **Inicio:** agregá en `public/index.html` una tarjeta `<a class="curso">` dentro de la sección de su categoría, con emoji, nombre, para quién y una frase sobre qué vas a poder hacer. Usá el color de la categoría en `--c`. Si la sección no existe, creala con el mismo formato.
- No hace falta tocar `sw.js` ni el CI: el service worker ya trata igual cualquier carpeta de curso, y el CI valida solo cada carpeta que tenga `contenido.js`.

## 5. Probar (no publiques nada que no pase)
1. `node tools/validar.js <carpeta>` tiene que decir OK, con la posición de la correcta repartida.
2. `node tools/metodologia.js <carpeta>`: todos los módulos en 7/7. Si alguno falla, arreglalo y volvé a medir.
3. **Releé el curso entero como lo leería un principiante.** Revisá datos, cuentas, nombres de herramientas, que no falte ningún término por definir, que las preguntas no pregunten nada que no se haya enseñado y que no haya consejos peligrosos. Corregí lo que encuentres.
4. `node tools/ortografia.js <carpeta>` y corregí los errores reales. Si el curso tiene videos, `node tools/videos.js <carpeta>` tiene que dar 0 con problemas.
5. Prueba en Edge: `node tools/edge-curso.js <carpeta>` con `NODE_PATH` apuntando a una carpeta temporal que tenga `playwright-core` instalado (`npm i playwright-core`). Revisa todas las lecciones, el quiz, el progreso guardado aparte, el tutor, el certificado y el celular a 320 y 360 px. Mirá las capturas que deja en la carpeta temporal del sistema.
6. Todas las pruebas del CI siguen en OK: corré localmente cada comando del paso `run` de `.github/workflows/pages.yml` (test-de necesita `PYTHON=python` y pandas 2.3.2). Si una prueba vieja choca con un cambio general tuyo, actualizala para que controle la regla nueva; no la borres.

## 6. Registrar y publicar
- Marcá el curso con `- [x]` en `CURSOS.md` y agregale al final de la línea el nombre final entre comillas.
- Agregá una línea en `MEJORAS.md`: `- AAAA-MM-DD · <carpeta> · curso nuevo "<nombre>": N módulos (L lecciones, P preguntas, G términos); bases: <cursos o guías que usaste>`.
- Agregá una línea en `METODOLOGIA.md`: `- AAAA-MM-DD · <carpeta> (curso nuevo) · puntaje 7/7 en los N módulos · fallas encontradas al revisar: <cuáles> · mejora: <qué arreglaste>`.
- Hacé `git add` solo de los archivos del curso y de los que tocaste (nunca `.claude/scheduled_tasks.lock`). Commit con el mensaje `<carpeta>: curso nuevo <nombre>` y la línea de co-autoría de la sesión. Después `git pull --rebase --autostash` y `git push`.
- Confirmá que la publicación en GitHub salió bien (`gh run list` o la API de `actions/runs?head_sha=`) y que la página del curso responde 200.
- Si algo falla dos veces seguidas (un test, el push o la publicación), no insistas: dejá el trabajo sin commitear y explicá el problema.

Al terminar, respondé con 2 o 3 líneas: qué curso armaste, cuántos módulos tiene, si pasó todas las pruebas y el enlace. Decí también cuántos cursos quedan en `CURSOS.md`.
