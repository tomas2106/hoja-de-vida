import "../styles/Hobbies.css";

function Hobbies() {
  return (
    <div className="hobbies-container">

      <h1 className="title">Hobbies</h1>

      <p className="subtitle">
        Actividades que me apasionan fuera del ámbito académico y profesional
      </p>

      <div className="hobbies-grid">

        {/* HOBBY 1 */}
        <div className="hobby-card">
          <h2>Ciberseguridad</h2>
          <p>
            Me interesa el estudio de la ciberseguridad, explorando conceptos
            como redes, vulnerabilidades y protección de sistemas informáticos.
          </p>
        </div>

        {/* HOBBY 2 */}
        <div className="hobby-card">
          <h2>Fotografía</h2>
          <p>
            Disfruto capturar momentos a través de la fotografía, explorando la
            creatividad visual y el uso de la luz y composición.
          </p>
        </div>

        {/* HOBBY 3 */}
        <div className="hobby-card">
          <h2>Motovelocidad</h2>
          <p>
            Soy apasionado por las motos y la velocidad, un hobby que combina
            concentración, adrenalina y disciplina.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Hobbies;