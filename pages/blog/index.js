import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Artículos de Optimización Web</title>
        <meta
          name="description"
          content="Lee artículos sobre SEO, rendimiento web, optimización con Next.js y mejores prácticas para desarrolladores."
        />
        <meta name="keywords" content="blog, SEO, artículos, web" />

        {/* OG */}
        <meta property="og:title" content="Blog | Artículos de Optimización Web" />
        <meta
          property="og:description"
          content="Explora contenido actualizado sobre SEO, rendimiento y desarrollo con Next.js."
        />
        <meta
          property="og:image"
          content="public/images/seo-image.png"
        />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      <h1>Blog</h1>
      <p>Aquí encontrarás artículos relacionados a la optimización web.</p>
    </>
  );
}
