---
description: Mejora el curso de AI Engineering en un paso acotado (un módulo por ejecución). Pensado para usar con /loop.
argument-hint: "[id-del-modulo | nuevo | datos <id> | data-engineering <id>]"
---

Sos el editor jefe del curso de AI Engineering de este repo (página `public/curso.html`). El contenido está en `public/contenido.js` (array `window.TEMARIO`). Hacé **una sola mejora acotada** por ejecución y terminá.

## 1. Elegir qué mejorar
- Si `$ARGUMENTS` es el id de un módulo, trabajá en ese.
- Si `$ARGUMENTS` es `nuevo`, creá un módulo nuevo (ver punto 5).
- Si no hay argumento: corré `node tools/validar.js`, leé `MEJORAS.md` y elegí el módulo con menos lecciones + preguntas que no se haya tocado en las últimas 3 entradas.

## 2. Investigar
- Usá WebSearch (modo standard) para buscar lo más relevante y actual del tema del módulo. Priorizá fuentes primarias: papers, documentación oficial, blogs de ingeniería de los labs.
- Buscá huecos: conceptos importantes que el módulo todavía no cubre, o contenido desactualizado.

## 3. Agregar al módulo
- **1 lección nueva** (300-600 palabras) en HTML simple (`<p>`, `<ul>`, `<ol>`, `<strong>`, `<code>`, `<pre><code>`), con un ejemplo concreto o código. Que cubra un hueco real, no repita otra lección.
- **5 preguntas nuevas** de nivel examen: 4 opciones plausibles, una correcta, `explicacion` que diga por qué es la correcta y por qué falla la trampa más tentadora. Que obliguen a razonar (escenarios, "¿qué hacés si...?"), no solo a memorizar. Repartí la posición de la correcta (mirá el conteo que imprime el validador y compensá). **Solo sobre lo que enseñan las lecciones de ese módulo o de módulos anteriores:** antes de escribir cada pregunta, buscá en esas lecciones los conceptos de la respuesta correcta; si falta alguno, primero agregalo a una lección. El alumno no tiene que necesitar ayuda externa para aprobar.
- **1 ejercicio práctico** en `practica`, accionable y con un resultado verificable.
- Si un objetivo nuevo queda cubierto, agregalo a `objetivos`.
- Si la lección introduce términos clave que no están en `public/glosario.js`, agregalos como `{ t, d, m }`: el término, una definición de una o dos oraciones y el id del módulo.

## 4. Revisar calidad
- Corregí errores factuales o datos desactualizados que veas en el módulo.
- Verificá con WebFetch los links de `recursos` del módulo; reemplazá los rotos por fuentes oficiales. **No inventes URLs**: solo usá URLs que hayas visto en resultados de búsqueda o abierto.
- Corré `node tools/validar.js` y arreglá hasta que diga OK.

## 5. Módulo nuevo (solo con `nuevo`, o si todos los módulos tienen ≥ 6 lecciones y ≥ 30 preguntas)
Proponé el tema que más falte para un AI engineer de primer nivel (por ejemplo: multimodal, voz, computer use, sistemas de recomendación, infraestructura de GPUs, datos sintéticos) y crealo con el mismo formato: `icono` (un emoji), objetivos, 2 lecciones, 2 prácticas, recursos verificados y 6 preguntas. Insertalo antes del módulo `proyecto`.

## 6. Registrar
Agregá una línea al final de `MEJORAS.md`:
`- AAAA-MM-DD · <id-modulo> · <qué agregaste o corregiste> · fuentes: <urls>`

## Reglas
- Español neutro, claro, sin relleno. Explicá el porqué, no solo el qué.
- Las lecciones son template literals: **no uses backticks** dentro del HTML y escapá `<` y `>` dentro de `<code>` como `&lt;` y `&gt;`.
- Agregá lecciones siempre **al final** del array `lecciones` (el progreso de "leída" se guarda por posición).
- No cambies el texto de preguntas, de prácticas ni el título de lecciones existentes salvo que estén mal (son la clave del progreso del alumno y de las novedades).
- No toques `app.js`, `curso.html` ni `styles.css` salvo para arreglar un bug real.
- Al terminar, respondé con 2-3 líneas: qué módulo, qué agregaste, resultado del validador.

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
