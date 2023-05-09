import React from "react";

import "./ItemContacto.css";

const ItemContacto = (props) => {
  return (
    <div className="item-contacto">
      <h1>{props.nombreEmpresa}</h1>
      <p className="texto">{props.nombreReclutador}</p>
      <p className="texto">{props.correoReclutador}</p>
      <p className="texto">{props.telefonoReclutador}</p>
      <p className="texto">{props.tituloPuesto}</p>
      <p className="texto">{props.descripcionPuesto}</p>
      <p className="texto">{props.montoOfrecido}</p>
    </div>
  );
};

export default ItemContacto;
