import React from "react";
import ItemContacto from "../components/ItemContacto";

const contactoTest = [
  {
    id: "1",
    nombreEmpresa: "NombreEmpresa1",
    nombreReclutador: "NombreReclutador1",
    correoReclutador: "CorreoReclutador1",
    telefonoReclutador: "TelefonoReclutador1",
    descripcionPuesto: "DescripcionPuesto1",
    montoOfrecido: "MontoOFrecido1",
  },
  {
    id: "2",
    nombreEmpresa: "NombreEmpresa2",
    nombreReclutador: "NombreReclutador2",
    correoReclutador: "CorreoReclutador2",
    telefonoReclutador: "TelefonoReclutador2",
    descripcionPuesto: "DescripcionPuesto2",
    montoOfrecido: "MontoOFrecido2",
  },
  {
    id: "3",
    nombreEmpresa: "NombreEmpresa3",
    nombreReclutador: "NombreReclutador3",
    correoReclutador: "CorreoReclutador3",
    telefonoReclutador: "TelefonoReclutador3",
    descripcionPuesto: "DescripcionPuesto3",
    montoOfrecido: "MontoOFrecido3",
  },
];

const VerContactos = () => {
  return (
    <div>
      <h1>Contactos Recibidos</h1>
      {contactoTest.map((contacto) => {
        return (
          <ItemContacto
            key={contacto.id}
            nombreEmpresa={contacto.nombreEmpresa}
            nombreReclutador={contacto.nombreReclutador}
            correoReclutador={contacto.correoReclutador}
            telefonoReclutador={contacto.telefonoReclutador}
            descripcionPuesto={contacto.descripcionPuesto}
            montoOfrecido={contacto.montoOfrecido}
          />
        );
      })}
    </div>
  );
};

export default VerContactos;
