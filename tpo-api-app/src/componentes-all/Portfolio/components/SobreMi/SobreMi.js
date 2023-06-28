import React from "react";
import Rating from "@mui/material/Rating";

import "./SobreMi.css";

const SobreMi = () => {
  return (
    <div className="aboutMe">
      <p className="aboutMe-text">
        Hola, me presento, tengo 20 años, me gusta la programación y estoy en
        búsqueda de adquirir más conocimiento. Me considero una persona
        creativa, resolutiva y con ganas de mejorar todos los días en el
        desarrollo web y programación. Paso la mayor tiempo de mi vida con el
        codigo. Mis hobbies son el gimnasio y escuchar musica. Soy un
        desarrollador de software profesional no duda en eliminar lo que sea
        necesario siempre que vaya a ser sustituido por una idea mejor que añada
        simplicidad, mejor diseño o mayor legibilidad a la solución.
      </p>
      <div className="container">
        <div className="text-box">
          <h1 className="aboutMe-h1">PROGRAMADOR JR.</h1>
          <h1 className="aboutMe-h1">PROGRAMADOR JR.</h1>
        </div>
          <p className="aboutMe-p">Frontend<span>:)</span></p>
      </div>
    </div>
  );
};

export default SobreMi;
