import React, { useState } from "react";

//create your first component
const Home = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [tareas, setTareas] = useState([]);
  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
	<div className="container bg-light">
	  <h1 className="d-flex justify-content-center">To Do's</h1>
	  <ul className="list-group">
		{tareas.map((tarea, index) => (
		  <li key={index} className="list-group-item fs-5 rounded-0 d-flex justify-content-between">
			{tarea}
			<div className="d-flex justify-content-end">
			  <button
				type="button"
				className="btn-close"
				onClick={() => eliminarTarea(index)}
				aria-label="Close"
			  ></button>
			</div>
		  </li>
		))}
		<li className="list-group-item fs-5 rounded-0">
		  <input
			type="text"
			className="form-control fs-3 mt-2 rounded-0"
			onChange={(e) => setCurrentWord(e.target.value)}
			onKeyUp={(e) => {
				if (e.key === "Enter" && currentWord.trim() !== "") {
				  setTareas([...tareas, currentWord]);
				  setCurrentWord("");
				}
			  }}
			value={currentWord}
			id="word"
			placeholder="What needs to be done?"
		  />
		</li>
		{tareas.length === 0 && (
		  <li className="list-group-item fs-4 text-center">
			Wii you are free
		  </li>
		)}
	  </ul>
	</div>
  );
  
};

export default Home;
