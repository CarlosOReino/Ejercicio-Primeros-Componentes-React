import { useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState();
  const [color, setColor] = useState();

  const lista = [
    { id: 1, texto: "principal" },
    { id: 2, texto: "fotos" },
    { id: 3, texto: "videos" },
    { id: 4, texto: "contacto" },
  ];
  
  // const colores = ['azul', 'verde'];

  const handleMostrar = (tipo) => {
    setMostrar(tipo);
    setColor(tipo === 'pares' ? 'blue' : 'green');
  };

  return (
    <div>
      <h1 style={{ color: color }}>Este es el título principal del sitio web</h1>
      <ul>
        {lista.filter((item) =>
            mostrar === 'pares' ? item.id % 2 === 0 : item.id % 2 !== 0
          ).map((item) => (
            <li key={item.id}>{item.texto}</li>
          ))}
        <button onClick={() => handleMostrar("pares")}>Mostrar Pares</button>
        <button onClick={() => handleMostrar("impares")}>Mostrar Impares</button>
      </ul>
    </div>
  );
}

export default App;
