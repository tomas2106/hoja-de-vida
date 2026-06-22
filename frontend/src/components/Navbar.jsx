import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import cors from "cors";

app.use(cors());

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>Portafolio</span>
      </div>

        <div className="nav-links">

            <NavLink to="/" className="link">Inicio</NavLink>
            <NavLink to="/perfil" className="link">Perfil</NavLink>
            <NavLink to="/experiencia" className="link">Experiencia</NavLink>
            <NavLink to="/hobbies" className="link">Hobbies</NavLink>
            <NavLink to="/skills" className="link">Skills</NavLink>
            <NavLink to="/contacto" className="link">Contacto</NavLink>

        </div>
    </nav>
  );
}

export default Navbar;