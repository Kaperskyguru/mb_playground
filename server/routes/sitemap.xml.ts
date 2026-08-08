import { languageOptions } from "~/helpers/languages";

// Generated from languageOptions so it stays in sync automatically —
// enable a new language in helpers/languages.js and it appears here.
export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const base = (
    config.public?.SITE_URL || "https://playground.masteringbackend.com"
  ).replace(/\/$/, "");

  const lastmod = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${base}/`, priority: "1.0", changefreq: "weekly" },
    ...languageOptions.map((lang) => ({
      loc: `${base}/${lang.value}`,
      priority: "0.8",
      changefreq: "weekly",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");
  return body;
});
