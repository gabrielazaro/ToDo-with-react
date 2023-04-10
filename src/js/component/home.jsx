import React, { useState } from "react";

//create your first component
const Home = () => {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleAdd = () => {
	const tareaSinEspacios = input.trim();
	if (tareaSinEspacios !== "") {
	  setTareas([...tareas, tareaSinEspacios]);
	}
	setInput("");
  };
  const handleDelete = (index) => {
	const tareasRestantes = tareas.filter((tarea, i) => i !== index)
	setTareas(tareasRestantes)
  };

  return (
    <div className="container-fluid">
      <h1>TO DO'S</h1>
      <input
        type="text"
        value={input}
        placeholder="What needs to be done?"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}> {tarea} <button type="button" className="eliminar btn-close" aria-label="Close" onClick={() => handleDelete(index)}></button></li>
        ))}
      </ul>
	  <footer>{tareas.length === 0 ? '' : `${tareas.length} items left`}</footer>
    </div>
  );
};

export default Home;

