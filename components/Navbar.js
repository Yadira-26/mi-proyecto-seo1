import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "15px",
    background: "#92b7cdff", // color de tu proyecto
  },
  ul: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontSize: "18px",
  },
};
