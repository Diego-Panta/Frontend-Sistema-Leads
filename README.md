# CRMSM — Sistema Automecánica San Miguel

Frontend en **Astro 5** + **React** + **Tailwind CSS 4** para la presencia web del taller **Automecánica San Miguel** y su sistema corto de marca **CRMSM** (citas, comunicación y transparencia con el cliente).

## Marca y configuración

- Nombre corto: **CRMSM**
- Nombre completo: **Sistema Automecánica San Miguel**
- Constantes centralizadas: `src/shared/site.ts` (URL canónica, correo, redes, textos SEO reutilizables)

Actualiza `siteUrl` en `site.ts` y `astro.config.mjs` cuando tengas el dominio definitivo.

## Comandos

| Comando        | Acción                          |
| -------------- | ------------------------------- |
| `pnpm install` | Instala dependencias            |
| `pnpm dev`     | Servidor de desarrollo          |
| `pnpm build`   | Genera el sitio en `./dist/`   |
| `pnpm preview` | Vista previa del build          |

## Estructura relevante

- `src/pages/` — Rutas Astro (`index`, `galeria`, `fondos`, `politica-donaciones`, `registro`)
- `src/landing/` — Pantallas y secciones React del landing
- `src/components/core/` — Navbar, footer, marca (`BrandMark`)
- `public/favicon.svg` — Ícono usado en cabecera y Open Graph por defecto
