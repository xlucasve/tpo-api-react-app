import React from "react";

import "./ItemContacto.css";

const ItemContacto = (props) => {
  return (
    <div className="item-contacto">
      <h1 className="titulo">{props.nombreEmpresa}</h1>
      <div>
        <span className="texto">Reclutador: </span>
        <span className="texto-item">{props.nombreReclutador}</span>
      </div>
      <div>
        <span className="texto">Correo: </span>
        <span className="texto-item">{props.correoReclutador}</span>
      </div>
      <div>
        <span className="texto">Tel: </span>
        <span className="texto-item">{props.telefonoReclutador}</span>
      </div>
      <div>
        <span className="texto">Titulo: </span>
        <span className="texto-item">{props.tituloPuesto}</span>
      </div>
      <div>
        <span className="texto">Monto: </span>
        <span className="texto-item">{props.montoOfrecido}</span>
      </div>
    </div>
  );
};

export default ItemContacto;
