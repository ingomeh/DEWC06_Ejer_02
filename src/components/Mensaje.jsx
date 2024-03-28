import React from "react";

//Componente que renderiza un mensaje
const Mensaje = ({ children }) => {
  return (
    <>
      <section className="container">
        <div>{children}</div>
      </section>
    </>
  );
};

// Se exporta el componente
export default Mensaje;
