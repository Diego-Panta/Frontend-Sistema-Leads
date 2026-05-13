/**
 * Marca y datos públicos del proyecto (única fuente de verdad para textos repetidos).
 * Ajusta `siteUrl`, correo y redes cuando tengas el dominio definitivo.
 */

/** Nombre corto del sistema (CRM del taller). */
export const siteShortName = "CRMSM";

/** Razón social / nombre comercial completo. */
export const siteFullName = "Sistema Automecánica San Miguel";

/** @deprecated Preferir `siteShortName` en código nuevo. */
export const siteName = siteShortName;

export const siteDescription =
  "Somos Automecánica San Miguel. CRMSM concentra citas, historial de servicios y comunicación clara con nuestros clientes.";

/** URL canónica del sitio (sin barra final). Debe coincidir con `site` en `astro.config.mjs`. */
export const siteUrl = "https://crmsm.vercel.app";

export const siteKeywords = [
  "CRMSM",
  "Automecánica San Miguel",
  "taller mecánico",
  "mecánica automotriz",
  "San Miguel",
  "mantenimiento vehicular",
];

export const seoOgImagePath = "/favicon.svg";

export const contactEmail = "contacto@automecanicasanmiguel.pe";

export const workshopPhoneDisplay = "(+51) 951 011 604";

/** Enlace wa.me al número del taller (sin espacios ni +). */
export const whatsappUrl = "https://wa.me/51951011604";

export const workshopAddress = "San Miguel, Perú";

export const twitterSite = "@CRMSM";

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    handle: "@automecanicasanmiguel",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    handle: "Automecánica San Miguel",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    handle: "CRMSM",
  },
] as const;

export function buildPageTitle(pageSuffix?: string): string {
  if (pageSuffix?.trim()) {
    return `${pageSuffix.trim()} | ${siteShortName}`;
  }
  return `${siteShortName} | ${siteFullName}`;
}

export function buildCanonicalUrl(path = "/"): string {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
