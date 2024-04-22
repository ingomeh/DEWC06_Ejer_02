import React from "react";

//Componente que renderiza un mensaje
const Mensaje = ({ children }) => {
  return (
    <>
      <main>
        <section className="container">
          <div>{children}</div>
        </section>
      </main>
    </>
  );
};

// Se exporta el componente
export default Mensaje;
