import React from "react";

import ItemContacto from "./ItemContacto";

const ListaContactos = (props) => {
  return (
    <div className="elemento-contacto">
      {Object.keys(props.contactos).map((contacto) => {
        console.log("nombre de empresa: " + contacto.nombreEmpresa);
        return (
          <ItemContacto
            key={contacto.id}
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
};

export default ListaContactos;
