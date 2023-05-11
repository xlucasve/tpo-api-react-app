import React from "react";

import "./Certificado.css";

const Certificado = (props) => {
  return (
    <div className="certificado-curso-individual">
      <img src={props.foto} alt={props.alt} className="foto-curso" />
      <div>
        <p className="nombre-curso">{props.nombre}</p>
        <p className="descripcion-curso">{props.descripcion}</p>
      </div>
    </div>
  );
};

export default Certificado;
