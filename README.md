# Peeg — landing page

Landing bilingüe (ES/EN) para Peeg, pensada para desplegarse en GitHub Pages con el dominio `peeg.devcodelight.com`.

## Estructura

```
index.html          → versión en español (raíz)
en/index.html        → versión en inglés
assets/style.css      → estilos compartidos
assets/script.js      → menú móvil (sin cookies, sin tracking)
assets/favicon.svg, favicon-32.png, apple-touch-icon.png, icon-512.png
assets/og-image.png   → imagen para compartir en redes (1200×630)
robots.txt
sitemap.xml
CNAME                 → dominio personalizado para GitHub Pages
```

## Desplegar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo `peeg-landing`) y sube todo el contenido de esta carpeta a la rama `main`.
2. En GitHub → **Settings → Pages**, selecciona la rama `main` y la carpeta `/ (root)`.
3. En **Settings → Pages → Custom domain**, escribe `peeg.devcodelight.com` (el archivo `CNAME` ya lo deja preconfigurado, pero GitHub lo pide igualmente la primera vez).
4. En tu proveedor de DNS (donde gestionas `devcodelight.com`), añade un registro **CNAME**:
   - Host: `peeg`
   - Valor: `TU-USUARIO.github.io`
5. Espera a que se propague el DNS (puede tardar hasta un par de horas) y activa **Enforce HTTPS** en Settings → Pages cuando GitHub lo permita.

## Notas de SEO

- Cada idioma vive en su propia URL (`/` y `/en/`) con etiquetas `hreflang` cruzadas y `sitemap.xml`, que es el patrón que recomienda Google para contenido multilingüe (mejor que un selector por JavaScript).
- Hay datos estructurados `MobileApplication` (JSON-LD) en ambas páginas para that los buscadores puedan mostrar la app como resultado enriquecido.
- Las imágenes Open Graph/Twitter usan `assets/og-image.png`; si cambias el texto o los colores de marca, regenera esa imagen para que coincida.
- Antes de publicar, actualiza `sitemap.xml` y las etiquetas `og:url`/`canonical` si el dominio final cambia.

## Personalizar

- Colores y tipografías: variables CSS al principio de `assets/style.css` (`--coral`, `--sky`, `--gold`, etc.).
- Enlaces a tiendas: busca `apps.apple.com` y `play.google.com` en ambos `index.html`.
- Textos: cada sección está comentada (`<!-- HERO -->`, `<!-- FAQ -->`, etc.) para localizar rápido qué tocar.
