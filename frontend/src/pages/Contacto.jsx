import { useState } from "react";
import "../styles/Contacto.css";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 AQUÍ ESTÁ EL FETCH (ES DONDE VA)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://hoja-de-vida-ur84.onrender.com/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al guardar en la base de datos");
      }

      console.log("Respuesta del backend:", data);

      alert("Mensaje enviado correctamente 🚀");

      // limpiar formulario
      setForm({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Error enviando datos");
    }

    setLoading(false);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-card">
        <h1>Contacto</h1>
        <p>Déjame tus datos y te contacto</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;