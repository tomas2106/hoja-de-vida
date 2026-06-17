import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        
        <span className="badge">
          desarrollador de software
        </span>

        <h1>Jeisson Thomas Prado Corrales</h1>

        <h2>
          Estudiante de Análisis y Desarrollo de Software
        </h2>

        <p>
          Bienvenido a mi hoja de vida digital.
          Aquí encontrarás información sobre mi perfil,
          experiencia, habilidades y proyectos.
        </p>

        <div className="buttons">

          <button onClick={() => navigate("/perfil")}>
            Perfil
          </button>

          <button onClick={() => navigate("/experiencia")}>
            Experiencia
          </button>

          <button onClick={() => navigate("/hobbies")}>
            Hobbies
          </button>

          <button onClick={() => navigate("/contacto")}>
            Contacto
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;