# Backlog de la app

`/evolucionar` toma la primera tarea pendiente. Agregá ideas con `- [ ]`.

- [x] Exportar e importar el progreso como archivo JSON (botones en el inicio), para no perderlo al cambiar de navegador o de PC
- [x] Repaso espaciado real: guardar la fecha en que se falló cada pregunta y mostrar en Repaso solo las que "tocan" hoy (1, 3, 7 y 14 días)
- [x] Racha de días de estudio y meta diaria (por ejemplo, 1 lección o 1 quiz), visible en el inicio
- [x] Buscador de lecciones por palabra clave
- [x] Botón "Copiar prompt de tutor" en cada módulo, que copie un prompt para que Claude te tome examen oral sobre ese módulo
- [x] Modo claro/oscuro con un botón en la cabecera, que se recuerde
- [x] Glosario de términos (token, embedding, RAG...) generado a partir de las lecciones
- [x] Mostrar al final de cada quiz las preguntas falladas con un botón para ir directo a la lección del módulo
- [x] Al buscar, abrir directamente la lección encontrada (no solo el módulo) y resaltar la palabra buscada
- [x] Modo tarjetas (flashcards) con los términos del glosario: ver el término, pensar la definición, darla vuelta y marcar si la sabías; las que no, vuelven antes
- [x] Página de progreso con el porcentaje de aciertos por módulo (de todos los quizzes hechos) para ver los puntos débiles de un vistazo
- [x] Casillas para marcar cada ejercicio de práctica como hecho, que cuenten en el avance del módulo
- [x] Al terminar el examen final con 80% o más, mostrar un certificado de finalización imprimible con la fecha y la nota
- [x] Página "Qué estudiar hoy" que junte en una lista corta: repaso pendiente, tarjetas del día, la próxima lección sin leer y la próxima práctica sin hacer del módulo actual
- [x] Instalable y sin conexión (PWA): manifest y service worker para estudiar desde el celular sin internet
- [x] Aviso discreto "Hay contenido nuevo, recargá" cuando el service worker descarga una versión nueva del curso
- [x] Descargar todos tus apuntes "Explicalo con tus palabras" en un archivo Markdown, ordenados por módulo
- [x] Modo examen por módulo con tiempo límite (por ejemplo, 1 minuto por pregunta) para practicar bajo presión, opcional
- [x] Revisión del examen final: al terminar, poder ver solo las preguntas falladas con su explicación, en una lista compacta
- [x] Quiz mezclado por nivel: elegir Básico, Intermedio o Avanzado y responder 15 preguntas al azar de los módulos de ese nivel
- [x] Atajos de teclado en los quizzes: teclas 1 a 4 para elegir opción en la pregunta enfocada y Enter para corregir
- [x] Tamaño de letra ajustable (A- / A+) en la cabecera, que se recuerde, para leer cómodo en cualquier pantalla
- [x] Página "Novedades" que muestre las últimas lecciones agregadas al curso (a partir de MEJORAS.md o de una lista en contenido.js), para saber qué hay nuevo para leer
- [x] Lectura en voz alta de una lección con la síntesis de voz del navegador (speechSynthesis), con botón de play y pausa
- [x] Estadística de tiempo de estudio: registrar minutos activos por día y mostrar un gráfico de las últimas 4 semanas en la página de progreso
- [x] Meta semanal configurable (por ejemplo, 120 minutos) con barra de avance en el inicio
- [x] Compartir un logro: al aprobar un módulo, botón para copiar un texto corto ("Aprobé el módulo X del curso de AI Engineering con 90%") para publicar
- [x] Comparar dos intentos del mismo quiz: mostrar qué preguntas pasaron de mal a bien y cuáles siguen fallando
- [x] Ver en cada módulo la fecha y nota de los últimos intentos del quiz, para ver la evolución
- [x] Juntar la versión para chicos y el curso: que al terminar las 6 misiones se sugiera un "siguiente paso" (el módulo Fundamentos) y que las misiones aparezcan en Novedades
- [x] Versión para chicos: leer cada misión en voz alta con el mismo botón 🔊 del curso (voz en español latino), para chicos que leen más lento
- [x] Curso nuevo: **Data Engineering** (pedido el 2026-11-10; publicado como "Data Engineering desde cero: de la planilla al pipeline"). Con la misma forma de trabajo que Datos con IA: carpeta propia en `public/`, mismo motor (`window.CURSO` con su clave de progreso aparte), su color y su tarjeta en el inicio, su mapa del curso (`window.MAPA`, controlado por `tools/test-mapas.js`), bibliografía verificada, datos de práctica generados por un script con todos los números controlados por un test, lecciones de ≤900 palabras con ejemplo y visual, ≥4 preguntas de aplicación por lección con la trampa explicada, prácticas verificables, `node tools/metodologia.js <carpeta>` en 7/7, prueba en Edge (también a 320 y 360 px) y sin suponer que el alumno tiene trabajo. Antes de escribir: definir con el usuario el nombre, el público (¿programa o no?) y la bibliografía.
- [ ] Curso nuevo: **Prompt engineering** (pedido el 2026-11-10). Mismos requisitos que el de Data Engineering. Ojo: el curso principal ya tiene un módulo `prompting`; el curso nuevo tiene que ir más a fondo (o a otro público) y no repetirlo. Antes de escribir: definir con el usuario el nombre, el público y la bibliografía.
