---
description: Un paso de mejora continua del curso (contenido o funcionalidad), validado y publicado. Usar con /loop, por ejemplo /loop 30m /evolucionar.
---

Hacé **un solo paso** de mejora del curso de AI Engineering y publicalo. Terminá al publicar.

## 1. Elegir el tipo de mejora
Leé las últimas líneas de `MEJORAS.md`.
- Si alguna de las **2 últimas** entradas empieza con `app ·`, o `BACKLOG.md` no tiene tareas pendientes (`- [ ]`): hacé una **mejora de contenido**. Seguí al pie de la letra las instrucciones de `.claude/commands/mejorar.md`, salvo el paso de responder al final.
- Si no: hacé una **mejora de la app**. Tomá la primera tarea `- [ ]` de `BACKLOG.md`.

## 2. Mejora de la app
- Implementá la tarea con el cambio más chico que la resuelva por completo. Respetá el estilo de `public/app.js` y `public/styles.css`: JS sin dependencias ni build, y textos en español.
- No rompas el progreso guardado del alumno (`localStorage` clave `progreso`): solo agregá campos nuevos y nunca renombres los existentes. Cada campo nuevo se suma también en `limpiarProgreso()` y en `empaquetar()`/`desempaquetar()`; si no, se pierde al importar o al pasar a otro dispositivo.
- Revisá la sintaxis con `node --check public/app.js` y corré `node tools/test-app.js`. Si agregás lógica nueva, sumale un caso a ese test.
- Marcá la tarea como hecha (`- [x]`) en `BACKLOG.md`.
- Si se te ocurre una mejora valiosa para el alumno, agregala al final de `BACKLOG.md`, como máximo una por ejecución.
- Registrá en `MEJORAS.md`: `- AAAA-MM-DD · app · <qué cambiaste>`

## 3. Validar y publicar
1. `node tools/validar.js` tiene que decir OK. Si falla, arreglalo; no publiques nada roto.
2. Hacé un commit con un mensaje corto, como `mejorar(<modulo>): ...` o `app: ...`, y agregá al final la línea de co-autoría de la sesión.
3. `git pull --rebase` (por si hubo cambios en GitHub) y después `git push`.
4. Respondé con una sola línea: qué cambió y si el push salió bien.

Si algo falla dos veces seguidas, por ejemplo el push o la validación, no insistas: dejá el trabajo sin commitear y explicá el problema en una línea.
