---
description: Valida un módulo del curso contra metodologías de aprendizaje basadas en evidencia y aplica la mejora de mayor impacto. Pensado para usar con /loop.
argument-hint: "[id-del-modulo | chicos]"
---

Sos el diseñador instruccional del curso. Tu trabajo es que cada módulo esté armado como enseña la ciencia del aprendizaje, no solo que tenga buen contenido. Hacé **una validación y una mejora** por ejecución, y terminá.

## Principios (la vara con la que medís)
Las 6 estrategias de The Learning Scientists (https://www.learningscientists.org/downloadable-materials) y la revisión de Dunlosky y otros (2013), que calificó como de alta utilidad a la práctica con preguntas y al estudio espaciado. Releer y subrayar quedaron como de baja utilidad.

| Principio | Qué tiene que pasar en un módulo |
|---|---|
| **Práctica de recuperación** | Preguntas que obliguen a recordar y aplicar, no a reconocer definiciones: la mayoría plantea un caso ("Tu agente hace X, ¿qué cambiás?"). |
| **Retroalimentación** | Cada explicación dice por qué la correcta es correcta **y** por qué falla la opción más tentadora. |
| **Ejemplos concretos** | Cada lección tiene al menos un ejemplo real, un fragmento de código o un caso con números. |
| **Codificación dual** | Ideas con estructura visual: listas, tablas, diagramas en texto o código. No bloques de texto corrido. |
| **Elaboración** | La lección explica el porqué y conecta con otros módulos ("esto es lo mismo que viste en RAG..."). |
| **Carga cognitiva** | Una idea central por lección, de 300 a 600 palabras (como máximo ~900), con los términos nuevos definidos en el momento. |
| **Aprender haciendo** | Las prácticas tienen un resultado verificable: algo que se mide, se compara o se entrega. |
| **Intercalar teoría, preguntas y práctica** | Nunca un bloque largo de una sola cosa: después de una idea viene una pregunta o algo para hacer. La práctica va dentro del recorrido, no al final y aparte. |
| **Espaciado e intercalado de temas** | Ya los resuelve la app (repaso a 1, 3, 7 y 14 días, quiz por nivel, examen final mezclado): no los reimplementes; solo verificá que el módulo tenga suficientes preguntas (≥ 4 por lección) para alimentarlos. |
| **Metacognición** | Ya existen "Explicalo con tus palabras" y el prompt de tutor: verificá que los objetivos del módulo estén escritos como algo que el alumno puede comprobar que sabe hacer. |

## 1. Medir
- Corré `node tools/metodologia.js`. Muestra por módulo las métricas automáticas y un puntaje.
- Si `$ARGUMENTS` es el id de un módulo, trabajá en ese. Si es `chicos`, validá `public/chicos/index.html` (ver punto 4). Si no hay argumento: si `chicos` no aparece en las últimas 4 entradas de `METODOLOGIA.md`, validá la versión para chicos; si no, elegí el módulo con menor puntaje que no aparezca en las últimas 3 entradas. Así las dos versiones del curso se revisan con regularidad.
- Las métricas son heurísticas: **leé el módulo completo** y evaluá cada principio de la tabla a mano. Anotá qué cumple, qué no y un ejemplo concreto de cada falla.

## 2. Mejorar (una sola cosa, la de mayor impacto)
Elegí la falla que más afecte el aprendizaje. Prioridad: retroalimentación y práctica de recuperación primero, después ejemplos y visuales, después el resto. Mejoras válidas:
- **Reescribir explicaciones** flojas de 5 preguntas para que digan por qué falla la trampa más tentadora. La explicación se puede cambiar; el texto de la pregunta y las opciones **no** (son la clave del progreso del alumno).
- **Agregar 5 preguntas de aplicación** (casos, decisiones, "¿qué hacés si...?") al final de `quiz`, repartiendo la posición de la correcta según el conteo del validador. **Solo sobre lo que enseñan las lecciones de ese módulo o de módulos anteriores:** antes de escribir cada pregunta, buscá en esas lecciones los conceptos de la respuesta correcta; si falta alguno, primero agregalo a una lección. El alumno no tiene que necesitar ayuda externa para aprobar.
- **Agregar a una lección** un ejemplo concreto, una tabla o un diagrama en texto (dentro de `<pre><code>`), o un párrafo que la conecte con otro módulo. El título de la lección no se cambia.
- **Partir una lección demasiado larga**: dejá la original más corta y agregá la segunda parte como lección nueva **al final** del módulo.
- **Reescribir objetivos** vagos ("entender X") como verificables ("elegir entre X e Y según...").
- **Hacer verificable una práctica** agregando una práctica nueva con resultado medible (no edites el texto de las existentes).

Respetá todas las reglas de `.claude/commands/mejorar.md`: sin backticks en las lecciones, `<` y `>` escapados dentro de `<code>`, lecciones nuevas al final, fuentes verificadas y sin URLs inventadas.

## 3. Registrar
- Corré `node tools/validar.js` (tiene que decir OK) y `node tools/metodologia.js` para ver el puntaje nuevo.
- Agregá una línea al final de `METODOLOGIA.md` (crealo si no existe, con el título `# Validaciones de metodología`):
  `- AAAA-MM-DD · <modulo> · puntaje <antes> → <después> · fallas: <las principales> · mejora: <qué cambiaste>`
- Agregá también la línea habitual en `MEJORAS.md`: `- AAAA-MM-DD · <modulo> · metodología: <qué cambiaste>`.

## 4. Versión para chicos (`chicos`)
Corré `node tools/test-chicos.js` y validá `public/chicos/index.html` con estos criterios para 10 a 13 años: frases de una idea (≤ 22 palabras), un apoyo visual por tarjeta, cada misión con 3 ejercicios interactivos y retroalimentación inmediata que explique, **práctica intercalada** (nunca más de 2 preguntas seguidas; las actividades de hacer algo, como entrenar una IA o programar el robot, van dentro de las misiones y no solo en una sección aparte), aprender haciendo con algo que el chico construye y ve funcionar, conexión con la escuela (que pueda usar sus propios textos o temas de clase), nada de links a sitios externos, lenguaje sin tecnicismos (o explicados con un ejemplo cotidiano) y mensajes de seguridad y honestidad presentes. Mejorá una sola cosa (por ejemplo, un ejercicio más claro o una frase más corta) sin cambiar el formato de la clave `chicos` del `localStorage`.

## 5. Publicar
Commit con mensaje `metodologia(<modulo>): ...` y la línea de co-autoría de la sesión, después `git pull --rebase` y `git push`. Si algo falla dos veces seguidas, no insistas: dejá el trabajo sin commitear y explicá el problema.

Al terminar, respondé con 2 o 3 líneas: el módulo, el puntaje antes y después, y qué mejoraste.
