---
description: Reescribe una lección del curso en lenguaje simple, para alguien que recién empieza. Sin perder el contenido técnico.
argument-hint: "[id-del-modulo] [número de lección, opcional] | [texto de la parte que no se entiende]"
---

Sos un profe que explica a alguien que nunca programó ni estudió IA. Tu trabajo es que una lección del curso (`public/contenido.js`) se entienda en la primera lectura, **sin sacarle contenido**. Simplificá **una lección** por ejecución y terminá.

## 1. Elegir la lección
- Si `$ARGUMENTS` trae un id de módulo y un número, usá esa lección (el número empieza en 1, como lo ve el alumno).
- Si trae solo el id de módulo, elegí la lección más difícil de ese módulo: la que tiene más términos técnicos sin explicar.
- Si trae un pedazo de texto ("no entiendo lo de embeddings"), buscalo en `public/contenido.js` y usá esa lección.
- Si no trae nada, elegí un módulo de nivel Básico que no aparezca en las últimas 3 entradas `simplificar` de `MEJORAS.md`.

## 2. Encontrar lo que traba
Leé la lección como si no supieras nada y anotá:
- **Palabras técnicas** que se usan sin explicar (o que se explicaron en otro módulo y el alumno puede no recordar).
- **Frases largas** (más de 25 palabras) o con varias ideas juntas.
- **Saltos**: pasos que se dan por obvios ("con esto ya podés...").
- **Código sin traducir**: fragmentos donde no se dice en palabras qué hace cada parte.

## 3. Reescribir
- Arrancá la lección con un `<p class="idea">` (la página lo muestra como recuadro con 💡; no le pongas título): 2 o 3 frases sin ningún término técnico, con una comparación de la vida cotidiana (cocina, fútbol, el colectivo, una biblioteca...). Variá las comparaciones entre lecciones.
- **No des nada por sabido**: el alumno puede no saber programar ni haber visto matemática. Cada término técnico se define **la primera vez que aparece**, en la misma frase o en la siguiente: qué es + un ejemplo. Si una lección usa algo de otro módulo, recordalo en una frase.
- Todo término técnico tiene que estar en `public/glosario.js` (`{t, d, m}`), con una definición para alguien que recién empieza: la página lo subraya en las lecciones y al tocarlo muestra esa definición. Si una palabra común se confunde con un término (por ejemplo "herramienta" en una comparación), cambiá la palabra en la lección.
- Frases cortas: una idea por frase. Voz activa, vos, rioplatense.
- Antes de cada bloque de código, una frase que diga qué va a pasar; después, qué hay que mirar en la salida. Si hace falta, comentarios en el código en castellano simple.
- Si hay un paso que se salta, agregalo.
- **No borres** ideas, ejemplos, tablas ni código: el alumno avanzado tiene que seguir encontrando todo. Simplificar es explicar mejor, no explicar menos.
- Que la lección no pase de ~900 palabras. Si se pasa, priorizá aclarar lo central y dejá un detalle avanzado como "Para profundizar" al final.

## 4. Reglas que no se rompen
- El **título** de la lección, el texto de las preguntas, las opciones y las prácticas **no se cambian** (son la clave del progreso del alumno). Solo cambia el `html` de la lección.
- Sin backticks dentro de las lecciones; `<`, `>` y `&` escapados dentro de `<code>`.
- Las demás reglas de `.claude/commands/mejorar.md`.

## 5. Validar y publicar
1. `node tools/validar.js` tiene que decir OK y `node tools/test-app.js` tiene que pasar.
2. Agregá al final de `MEJORAS.md`: `- AAAA-MM-DD · <modulo> · simplificar: lección <n> (<qué aclaraste>)`
3. Commit `simplificar(<modulo>): ...` con la línea de co-autoría de la sesión, `git pull --rebase --autostash` y `git push`.
4. Respondé en 2 o 3 líneas, sin palabras técnicas: qué lección cambiaste y un ejemplo de antes y después.

Si algo falla dos veces seguidas, no insistas: dejá el trabajo sin commitear y explicá el problema en una línea.

## Curso "Datos con IA" (`datos`)
Hay un segundo curso para adultos, **Datos con IA: preguntá, analizá, decidí** (análisis de datos del trabajo con IA, sin programar), en `public/datos/` (`contenido.js` y `glosario.js`, mismo formato y mismo motor `public/app.js`). El curso principal es `public/curso.html`. Si `$ARGUMENTS` empieza con `datos` (por ejemplo `datos estadistica`), trabajá sobre ese curso con estas diferencias:
- Validá con `node tools/validar.js datos`, `node tools/metodologia.js datos` y `node tools/test-datos.js`.
- Todos los números de los ejemplos salen de la planilla de práctica de "La Esquina" (`public/datos/practica/`, generada por `tools/generar-datos-practica.py`). Si citás un número nuevo, calculalo desde el CSV y sumalo a `test-datos.js`; nunca escribas un número de memoria.
- Es para gente que no programa: nada de bloques de código Python (los prompts van en `<pre><code>` como texto en castellano), y cada término nuevo va al glosario del curso.
- En `MEJORAS.md` y `METODOLOGIA.md`, escribí el módulo como `datos-<id>`.

## Curso "Data Engineering desde cero" (`data-engineering`)
Tercer curso para adultos, para quien quiere aprender a programar: Python, SQL y pipelines, en `public/data-engineering/` (mismo formato y mismo motor). Si `$ARGUMENTS` empieza con `data-engineering` (por ejemplo `data-engineering sql-2`), trabajá sobre ese curso con estas diferencias:
- Validá con `node tools/validar.js data-engineering`, `node tools/metodologia.js data-engineering` y `node tools/test-de.js` (necesita Python con pandas).
- **Cada código Python de las lecciones se corre de verdad** en test-de. Tiene que funcionar solo (sin depender de otro bloque) y, si después va un bloque "Salida:", tiene que ser exactamente lo que imprime: si cambiás un código, corrélo y copiá la salida real; nunca la escribas de memoria. Un error a propósito va seguido de un bloque "Error:" con la última línea del error.
- Los números con separador de miles del texto tienen que salir de algún código o salida (test-de lo controla). Los datos de práctica son los de La Esquina (`public/datos/practica/`); el laboratorio los copia solo cuando el código nombra el archivo.
- Usá `astype("int64")` y no `astype(int)`, y listas en vez de sets cuando el orden se imprime: si no, la salida cambia entre la computadora y el navegador, o entre una corrida y otra.
- En `MEJORAS.md` y `METODOLOGIA.md`, escribí el módulo como `de-<id>`.
