import React from "react";

import "./Educacion.css";

const Educacion = (props) => {
  return (
    <div className="elemento-educacion">
      <p className="titulo-educacion">{props.titulo}</p>
      <p className="istitucion">{props.institucion}</p>
      <p className="fecha">{props.fecha}</p>
    </div>
  );
};

export default Educacion;
