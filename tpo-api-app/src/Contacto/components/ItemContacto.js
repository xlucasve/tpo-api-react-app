import React from "react";

import "./ItemContacto.css";

const ItemContacto = (props) => {
  return (
    <div className="item-contacto">
      <h1 className="titulo">{props.nombreEmpresa}</h1>
      <p className="texto">Reclutador: {props.nombreReclutador}</p>
      <p className="texto">Correo: {props.correoReclutador}</p>
      <p className="texto">Tel: {props.telefonoReclutador}</p>
      <p className="texto">Titulo: {props.tituloPuesto}</p>
      <p className="texto">Descripcion: {props.descripcionPuesto}</p>
      <p className="texto">Monto: {props.montoOfrecido}</p>
    </div>
  );
};

export default ItemContacto;
