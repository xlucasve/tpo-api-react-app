import React from "react";

import "./Experiencia.css";

const Experiencia = (props) => {
  return (
    <div className="elemento-experiencia">
      <img src={props.foto} alt={props.alt} className="logo-empresa" />
      <div>
        <p className="titulo-experiencia">{props.titulo}</p>
        <p className="empresa-experiencia">{props.empresa}</p>
        <p className="duracion-experiencia">
          {props.duracion} | {props.tiempo}
        </p>
        <p className="ubicacion-experiencia">{props.ubicacion}</p>
      </div>
    </div>
  );
};

export default Experiencia;
