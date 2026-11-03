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
- Arrancá la lección con un párrafo **"En pocas palabras"**: 2 o 3 frases sin ningún término técnico, con una comparación de la vida cotidiana (cocina, fútbol, el colectivo, una biblioteca...).
- Cada término técnico se define **la primera vez que aparece**, en la misma frase o en la siguiente: qué es + un ejemplo. Si está en `public/glosario.js`, usá la misma definición; si no está, agregalo al glosario (`{t, d, m}`).
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
