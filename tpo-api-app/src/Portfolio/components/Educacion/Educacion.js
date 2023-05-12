import React from "react";

import "./Educacion.css";

const Educacion = (props) => {
  return (
    <div className="elemento-educacion">
      <img src={props.foto} className="foto-educacion"></img>
      <div>
        <p className="titulo-educacion">{props.titulo}</p>
        <p className="istitucion-educacion">{props.institucion}</p>
        <p className="fecha-educacion">{props.fecha}</p>
      </div>
    </div>
  );
};

export default Educacion;
