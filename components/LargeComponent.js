export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", background: "#f4f4f4", borderRadius: "8px" }}>
      <h2>Componente pesado cargado dinámicamente</h2>
      <p>
        Este componente se carga con Lazy Loading para optimizar el rendimiento de la página.
      </p>
    </div>
  );
}
