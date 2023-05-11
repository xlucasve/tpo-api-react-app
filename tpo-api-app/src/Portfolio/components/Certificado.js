import React from "react";

import "./Certificado.css";

const Certificado = (props) => {
  return (
    <div className="certificado-individual">
      <img src={props.foto} alt={props.alt} className="foto-certificado" />
      <div>
        <p className="nombre-certificado">{props.nombre}</p>
        <p className="descripcion-certificado">{props.descripcion}</p>
        <p className="fecha-certificado">{props.fecha}</p>
      </div>
    </div>
  );
};

export default Certificado;
