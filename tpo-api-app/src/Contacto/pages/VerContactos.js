import React from "react";
import ItemContacto from "../components/ItemContacto";

const contactoTest = [
  {
    id: "1",
    nombreEmpresa: "NombreEmpresa1",
    nombreReclutador: "NombreReclutador1",
    correoReclutador: "CorreoReclutador1",
    telefonoReclutador: "1123456",
    tituloPuesto: "TituloPuesto1",
    descripcionPuesto: "Esta es la descripcion de la Descripcion Puesto 1",
    montoOfrecido: "MontoOFrecido1",
  },
  {
    id: "2",
    nombreEmpresa: "NombreEmpresa2",
    nombreReclutador: "NombreReclutador2",
    correoReclutador: "CorreoReclutador2",
    telefonoReclutador: "2123456",
    tituloPuesto: "TituloPuesto2",
    descripcionPuesto: "Esta es la descripcion de la Descripcion Puesto 2",
    montoOfrecido: "MontoOFrecido2",
  },
  {
    id: "3",
    nombreEmpresa: "NombreEmpresa3",
    nombreReclutador: "NombreReclutador3",
    correoReclutador: "CorreoReclutador3",
    telefonoReclutador: "3123456",
    tituloPuesto: "TituloPuesto3",
    descripcionPuesto: "Esta es la descripcion de la Descripcion Puesto 3",
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
            tituloPuesto={contacto.tituloPuesto}
            descripcionPuesto={contacto.descripcionPuesto}
            montoOfrecido={contacto.montoOfrecido}
          />
        );
      })}
    </div>
  );
};

export default VerContactos;
