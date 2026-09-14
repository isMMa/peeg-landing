# AGENTS.md

Landing page estática (HTML/CSS/JS, sin build) para Peeg, desplegada en GitHub Pages (`peeg.devcodelight.com`).

## Estructura
- `index.html` → versión en español (raíz).
- `en/index.html` → versión en inglés.
- `assets/style.css` → estilos compartidos; variables CSS al inicio (`--coral`, `--sky`, `--gold`, ...).
- `assets/script.js` → solo menú móvil; sin cookies ni tracking.
- `CNAME` → dominio personalizado (no borrar).

## Reglas
- No hay build, tests ni lint. Validar manualmente abriendo `index.html` en navegador.
- Cambios de contenido: editar AMBAS páginas (`index.html` y `en/index.html`) para mantener ES/EN en sincronía.
- SEO: `hreflang`, `canonical` y `og:url` apuntan a `https://peeg.devcodelight.com/`; si cambia el dominio, actualizar `sitemap.xml`, `CNAME` y todas las URLs absolutas en ambos HTML.
- `assets/og-image.png` (1200×630) debe regenerarse si cambian colores o texto de marca.
- Las secciones de cada HTML van comentadas (`<!-- HERO -->`, `<!-- FAQ -->`, etc.) para localizar bloque por bloque.
- Los enlaces a App Store / Google Play están en ambos `index.html`; el mismo ID de app (`com.peeg` / `id6751531943`) aparece también en el JSON-LD.
- Al desplegar: contenido en rama `main`, carpeta raíz, y confirmar el dominio personalizado en Settings → Pages.
