import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-container fade-in">

      <h1>Habilidades Técnicas</h1>

      <p className="subtitle">
        Tecnologías y herramientas que manejo actualmente
      </p>

      <div className="skills-box">

        {/* FRONTEND */}
        <h2>Frontend</h2>

        <div className="skill"><span>HTML</span><div className="bar"><div className="progress html"></div></div></div>
        <div className="skill"><span>CSS</span><div className="bar"><div className="progress css"></div></div></div>
        <div className="skill"><span>JavaScript</span><div className="bar"><div className="progress js"></div></div></div>
        <div className="skill"><span>React</span><div className="bar"><div className="progress react"></div></div></div>

        {/* BACKEND */}
        <h2>Backend</h2>

        <div className="skill"><span>Node.js</span><div className="bar"><div className="progress node"></div></div></div>
        <div className="skill"><span>Python</span><div className="bar"><div className="progress python"></div></div></div>

        {/* BASES DE DATOS */}
        <h2>Bases de Datos</h2>

        <div className="skill"><span>MySQL</span><div className="bar"><div className="progress mysql"></div></div></div>
        <div className="skill"><span>PostgreSQL</span><div className="bar"><div className="progress postgre"></div></div></div>

        {/* OTROS */}
        <h2>Otros</h2>

        <div className="skill"><span>Git / GitHub</span><div className="bar"><div className="progress git"></div></div></div>

      </div>

    </div>
  );
}

export default Skills;