import { useState, useEffect } from "react";
// Hook que se encarga de gestionar las llamadas a la API indicando la URL.
function useApi(apiUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Funcion que obtiene los datos de la URL de manera asincrona
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("No se ha podido establecer la conexion");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  // Solo se realiza la llamada a la API al montar el hook y cuando se detecta un cambio en la URL
  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  // Devuelve la respuesta de la Api y el error
  return { data, error };
}

export default useApi;
