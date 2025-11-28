import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Bienvenido a la página principal. Aprende sobre optimización SEO, rendimiento web y buenas prácticas en Next.js."
        />
        <meta name="keywords" content="Next.js, SEO, optimización web, rendimiento" />

        {/* Open Graph */}
        <meta property="og:title" content="Inicio | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Explora técnicas de optimización SEO y mejora el rendimiento de tu web con Next.js."
        />
        <meta
          property="og:image"
          content="public/images/seo-image.png"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <h1>Bienvenido a mi sitio web</h1>
      <p>Esta es la página de inicio optimizada con meta tags SEO.</p>
    </>
  );
}
