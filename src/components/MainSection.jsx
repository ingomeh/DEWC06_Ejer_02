import React from "react";
import Person from "./Person";
import useApi from "../hooks/useApi.js";
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";

const MainSection = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  // Se llama al hook customizado useApi que se encarga de gestionar las llamadas a la API
  const { data, error } = useApi(apiUrl);
  // Se crea un estado para el listado de personas
  const [listadoPersonas, setListadoPersonas] = useState(data);

  // El listado de personas se actualiza cuando se detecta un cambio en la propiedad data que contiene el resultado de la consulta a la API
  useEffect(() => {
    if (data != null) {
      setListadoPersonas(data);
    }
  }, [data]);

  // Funcion que maneja la acción de despedir a una persona
  const handleDeletePerson = (id) => {
    let personasActualizado = listadoPersonas.filter((persona) => persona.id != id);
    setListadoPersonas(personasActualizado);
  };

  // Si se produce un error en la llamada a la APi de devuelve un mensaje.
  if (error) {
    return <Mensaje>Error: {error.message}</Mensaje>;
  }

  // Si el listado de personas no esta cargado se muestra un mensaje indicandolo.
  if (!listadoPersonas) {
    return <Mensaje>Cargando...</Mensaje>;
  }

  // Se devuelve el contenido principal del componente MainSection
  return (
    <main>
      <section className="container">
        <h3>Tenemos una plantilla de {listadoPersonas.length} trabajadores</h3>
        {listadoPersonas.map((persona) => (
          <Person
            key={persona.id}
            id={persona.id}
            name={persona.name}
            email={persona.email}
            phone={persona.phone}
            onDeletePerson={handleDeletePerson}
          />
        ))}
      </section>
    </main>
  );
};

// Se exporta el componente MainSection para que pueda ser utilizado en otros archivos
export default MainSection;
