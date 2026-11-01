# AI Engineering: curso de autoaprendizaje

Es un sitio estático, sin build. El progreso se guarda en el navegador (localStorage).

- **Ver en local:** abrí `public/index.html` en el navegador.
- **Contenido:** está en `public/contenido.js`. Para validarlo: `node tools/validar.js`.
- **Publicar:** hacé push a `main` en GitHub. `.github/workflows/pages.yml` valida el contenido y publica `public/` en GitHub Pages. La primera vez, en el repo andá a Settings → Pages → Source y elegí "GitHub Actions".
- **Ampliar el curso con Claude Code:**
  - `/mejorar`: mejora el módulo más flojo.
  - `/mejorar rag`: mejora un módulo concreto.
  - `/mejorar nuevo`: crea un módulo nuevo.
  - `/loop 30m /mejorar`: lo repite cada 30 minutos mientras la sesión siga abierta.
- **Historial de mejoras:** `MEJORAS.md`.
