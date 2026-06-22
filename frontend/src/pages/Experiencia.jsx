
import "../styles/Experiencia.css";

function Experiencia() {
  return (
    <div className="experiencia-container fade-in">

      <h1 className="title">Experiencia</h1>

      <div className="timeline">

        <div className="card">
          <h2>Proyecto Personal - Portafolio Web</h2>
          <span>2026</span>

          <p>
            Desarrollo de una aplicación web tipo hoja de vida utilizando React
            y JavaScript con diseño responsive.
          </p>

          <div className="tags">
            <span>HTML (50%)</span>
            <span>CSS (40%)</span>
            <span>JavaScript (60%)</span>
            <span>React (50%)</span>
          </div>
        </div>

        <div className="card">
          <h2>Proyecto Académico - SAFEFLOW</h2>
          <span>2025-2026</span>

          <p>
             Desarrollo de un sistema básico de gestión de información enfocado en
            bases de datos, aplicando consultas SQL y lógica de programación.
          </p>

          <div className="tags">
            <span>Angular (30%)</span>
            <span>Netjs (30%)</span>
            <span>PostgreeSQL (60%)</span>
          </div>
        </div>

        <div className="card">
          <h2>Base de Datos</h2>
          <span>Práctica continua</span>

          <p>
            Manejo de bases de datos relacionales para almacenamiento y consultas.
          </p>

          <div className="tags">
            <span>MySQL (70%)</span>
            <span>PostgreSQL (70%)</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Experiencia;