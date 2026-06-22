const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
}); 

// Ruta prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// TEST DB (MUY IMPORTANTE PARA VER SI CONECTA)
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error DB:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST contacto (SOLO UNA VEZ)
app.post("/api/contacto", async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);

    const { nombre, correo, telefono, mensaje } = req.body;

    const query = `
      INSERT INTO contacto (nombre, correo, telefono, mensaje)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const values = [nombre, correo, telefono, mensaje];

    const result = await pool.query(query, values);

    res.json({
      message: "Guardado correctamente",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error en POST:", error);
    res.status(500).json({ error: error.message });
  }
});

// iniciar servidor
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});