import React from "react";

// Componente que renderiza los datos de una persona y su boton de despedir
const Person = ({ id, name, email, phone, onDeletePerson }) => {
  // Se devuelve el contenido principal del componente Person
  return (
    <>
      <article className="person">
        <img
          src={`https://randomuser.me/api/portraits/men/${id - 1}.jpg`}
          alt=""
        />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onDeletePerson(id)}
        >
          <img src="./src/trash.png" />
        </button>
      </article>
    </>
  );
};

// Se exporta el componente Person para que pueda ser utilizado en otros archivos
export default Person;
