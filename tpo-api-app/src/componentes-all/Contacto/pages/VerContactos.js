import React, { useEffect, useState } from "react";
import ItemContacto from "../components/ItemContacto";
import getContactos from "../../../api/contactos-api";

import "./VerContacto.css";

const VerContactos = () => {
  const [contactos, setContactos] = useState([]);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI2NDk2MTlhMWY4MmZiZDE4ZWRjOTQ3MmIiLCJ1c3VhcmlvRW1haWwiOiJwZnN1ZWI1NWFTQUxUQG1haWwuY29tIiwiaWF0IjoxNjg3NTU5MjMwLCJleHAiOjE2ODc2NDU2MzB9.j7YibhrN3XFkiv6BZxYa51B7u2VJE2ZupvXc2qX_V20";

  useEffect(() => {
    console.log("Pido los contactos");
    getContactos(setContactos, accessToken);
  }, [setContactos, accessToken]);

  return (
    <div>
      <h1>Contactos Recibidos</h1>
      <div className="elemento-contacto">
        {contactos.map((contacto) => {
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
    </div>
  );
};

export default VerContactos;
