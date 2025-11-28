import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Escríbenos</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para consultas, soporte o información acerca del sitio."
        />
        <meta name="keywords" content="contacto, soporte, formulario" />

        <meta property="og:title" content="Contacto | Escríbenos" />
        <meta
          property="og:description"
          content="Comunícate con nosotros para resolver dudas o recibir asistencia."
        />
        <meta
          property="og:image"
          content="public/images/seo-image.png"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <h1>Contacto</h1>
      <p>Completa el formulario para comunicarte con nosotros.</p>
    </>
  );
}
