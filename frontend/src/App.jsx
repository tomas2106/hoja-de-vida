import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Experiencia from "./pages/Experiencia";
import Hobbies from "./pages/Hobbies";
import Contacto from "./pages/Contacto";
import Skills from "./pages/Skills"; // 👈 IMPORTANTE

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/skills" element={<Skills />} /> {/* 👈 NUEVA RUTA */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;