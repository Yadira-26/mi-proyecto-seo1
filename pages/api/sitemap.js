const BASE_URL = "https://mi-proyecto-seo-wk3k.onrender.com";

async function obtenerRutasDinamicas() {
  const blogs = [
    { slug: "optimizacion-seo" },
    { slug: "mejorar-rendimiento-nextjs" },
    { slug: "lazy-loading-componentes" }
  ];

  return blogs.map((item) => `/blog/${item.slug}`);
}

export default async function handler(req, res) {
  const rutasEstaticas = [
    "/",
    "/contacto",
    "/blog",
  ];

  const rutasDinamicas = await obtenerRutasDinamicas();

  const todasLasRutas = [...rutasEstaticas, ...rutasDinamicas];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${todasLasRutas
  .map((url) => {
    return `<url>
      <loc>${BASE_URL}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
  })
  .join("")}
</urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
