import { useEffect, useState } from "react";

function App() {
  const [cv, setCv] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/cv")
      .then((res) => res.json())
      .then((data) => setCv(data))
      .catch((err) => console.log(err));
  }, []);

  if (!cv) {
    return <h1>Cargando CV...</h1>;
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={cv.persona.foto}
          alt="Foto"
          width="200"
          style={{
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />

        <h1>
          {cv.persona.nombre} {cv.persona.apellido}
        </h1>

        <h2>{cv.persona.ciudad}</h2>
      </div>

      <hr />

      <h2>Formación Académica</h2>

      <ul>
        {cv.formacion.map((item) => (
          <li key={item.id}>
            <strong>{item.titulo}</strong>
            <br />
            {item.institucion} - {item.anio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;