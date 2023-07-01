import React from "react";

import Certificado from "./Certificado";

import Foto from "../../../image/icono-certificado.png";

import "./ListadoCertificado.css";

const ListadoCertificados = () => {
  return (
    <div className="certificado">
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Cambridg English"
        descripcion="Nivel Avanzado"
        fecha="2020"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Getting Started with Docker"
        descripcion="Curso SkillUp by SimpliLearn"
        fecha="2023"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Programacion Web Full Stack"
        descripcion="Curso Digital House"
        fecha="2021"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Desarrollo Sitios Web"
        descripcion="Curso Educativo"
        fecha="2021"
      />
    </div>
  );
};

export default ListadoCertificados;
