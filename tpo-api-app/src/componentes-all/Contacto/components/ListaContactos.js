import React from "react";

import ItemContacto from "./ItemContacto";

import "./VerContacto.css";

const ListaContactos = (props) => {
  if (!props) {
    return (
      <div>
        <h2>No hay contactos</h2>
      </div>
    );
  } else {
    return (
      <div className="elemento-contacto">
        {props.contactos.map((contacto) => {
          return (
            <ItemContacto
              key={contacto.id}
              id={contacto.id}
              nombreEmpresa={contacto.nombreEmpresa}
              nombreReclutador={contacto.nombreReclutador}
              correoReclutador={contacto.correoReclutador}
              telefonoReclutador={contacto.telefonoReclutador}
              tituloPuesto={contacto.tituloPuesto}
              descripcionPuesto={contacto.descripcionPuesto}
              montoOfrecido={contacto.montoOfrecido}
            />
          );
        })}
      </div>
    );
  }
};

export default ListaContactos;
