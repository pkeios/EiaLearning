---
description: Mejora el curso de AI Engineering en un paso acotado (un módulo por ejecución). Pensado para usar con /loop.
argument-hint: "[id-del-modulo | nuevo]"
---

Sos el editor jefe del curso de AI Engineering de este repo. El contenido está en `public/contenido.js` (array `window.TEMARIO`). Hacé **una sola mejora acotada** por ejecución y terminá.

## 1. Elegir qué mejorar
- Si `$ARGUMENTS` es el id de un módulo, trabajá en ese.
- Si `$ARGUMENTS` es `nuevo`, creá un módulo nuevo (ver punto 5).
- Si no hay argumento: corré `node tools/validar.js`, leé `MEJORAS.md` y elegí el módulo con menos lecciones + preguntas que no se haya tocado en las últimas 3 entradas.

## 2. Investigar
- Usá WebSearch (modo standard) para buscar lo más relevante y actual del tema del módulo. Priorizá fuentes primarias: papers, documentación oficial, blogs de ingeniería de los labs.
- Buscá huecos: conceptos importantes que el módulo todavía no cubre, o contenido desactualizado.

## 3. Agregar al módulo
- **1 lección nueva** (300-600 palabras) en HTML simple (`<p>`, `<ul>`, `<ol>`, `<strong>`, `<code>`, `<pre><code>`), con un ejemplo concreto o código. Que cubra un hueco real, no repita otra lección.
- **5 preguntas nuevas** de nivel examen: 4 opciones plausibles, una correcta, `explicacion` que diga por qué es la correcta y por qué falla la trampa más tentadora. Que obliguen a razonar (escenarios, "¿qué hacés si...?"), no solo a memorizar. Repartí la posición de la correcta (mirá el conteo que imprime el validador y compensá).
- **1 ejercicio práctico** en `practica`, accionable y con un resultado verificable.
- Si un objetivo nuevo queda cubierto, agregalo a `objetivos`.

## 4. Revisar calidad
- Corregí errores factuales o datos desactualizados que veas en el módulo.
- Verificá con WebFetch los links de `recursos` del módulo; reemplazá los rotos por fuentes oficiales. **No inventes URLs**: solo usá URLs que hayas visto en resultados de búsqueda o abierto.
- Corré `node tools/validar.js` y arreglá hasta que diga OK.

## 5. Módulo nuevo (solo con `nuevo`, o si todos los módulos tienen ≥ 6 lecciones y ≥ 30 preguntas)
Proponé el tema que más falte para un AI engineer de primer nivel (por ejemplo: multimodal, voz, computer use, sistemas de recomendación, infraestructura de GPUs, datos sintéticos) y crealo con el mismo formato: objetivos, 2 lecciones, 2 prácticas, recursos verificados y 6 preguntas. Insertalo antes del módulo `proyecto`.

## 6. Registrar
Agregá una línea al final de `MEJORAS.md`:
`- AAAA-MM-DD · <id-modulo> · <qué agregaste o corregiste> · fuentes: <urls>`

## Reglas
- Español neutro, claro, sin relleno. Explicá el porqué, no solo el qué.
- Las lecciones son template literals: **no uses backticks** dentro del HTML y escapá `<` y `>` dentro de `<code>` como `&lt;` y `&gt;`.
- No cambies el texto de preguntas existentes salvo que estén mal (el texto es la clave del progreso de repaso del alumno).
- No toques `app.js`, `index.html` ni `styles.css` salvo para arreglar un bug real.
- Al terminar, respondé con 2-3 líneas: qué módulo, qué agregaste, resultado del validador.
