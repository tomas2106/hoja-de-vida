import "../styles/Perfil.css";
import fotoPerfil from "../assets/perfil.jpg";

function Perfil() {
  return (
    <div className="perfil-container fade-in">

      <h1>Perfil Profesional</h1>

      <div className="perfil-card">

        {/* FOTO */}
        <div className="perfil-img"> 
          <img src={fotoPerfil} alt="Foto de perfil" />
        </div>

        {/* TEXTO */}
        <div className="perfil-info">

          <p>
            Soy una persona apasionada por el desarrollo de software y las bases de datos.
            Me gusta innovar y crear soluciones tecnológicas que aporten valor.
          </p>

          <p>
            Tengo interés en la tecnología, redes y sistemas informáticos, y estoy en constante
            aprendizaje, ya que considero que el conocimiento diario es clave para el crecimiento
            profesional.
          </p>

          <p>
            Me caracterizo por ser una persona disciplinada, con capacidad de aprendizaje rápido
            y enfoque en la mejora continua.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Perfil;