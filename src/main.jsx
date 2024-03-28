import React from "react";
import ReactDOM from "react-dom/client";
import MainSection from "./components/MainSection";
import "./index.css";

// Creamos el elemento raiz de React a partir del elemento con el id "root" del documento HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
// Se renderiza el componente principal (MainSection) en la raíz creada
root.render(<MainSection />);
