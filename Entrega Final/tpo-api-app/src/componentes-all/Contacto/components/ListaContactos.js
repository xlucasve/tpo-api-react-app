import React from "react";

import ItemContacto from "./ItemContacto";

import "./ListaContactos.css";

const ListaContactos = (props) => {
  if (!sessionStorage.token) {
    return (
      <div className="noAutorizado">
        <h1>No esta autorizado</h1>
      </div>
    );
  } else {
    return (
      <div className="elemento-contacto">
        <h1>Contactos recibidos</h1>
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
