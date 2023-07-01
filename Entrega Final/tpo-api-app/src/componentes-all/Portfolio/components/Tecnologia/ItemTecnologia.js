import React from "react";

import "./ItemTecnologia.css";

const ItemTecnologia = (props) => {
  return (
    <div className="div-tecnologia">
      <img
        src={props.imagen}
        alt={props.alt}
        className="imagen-tecnologia"
      ></img>
      <p className="texto-tecnologia">{props.texto}</p>
    </div>
  );
};

export default ItemTecnologia;
