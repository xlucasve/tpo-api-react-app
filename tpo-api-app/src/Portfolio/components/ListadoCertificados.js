import React from "react";

import Certificado from "./Certificado";

import Foto from "../../image/gorro-escolar.png";

import "./ListadoCertificado.css";

const ListadoCertificados = () => {
  return (
    <div className="certificado-curso">
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Titulo Ingles"
        descripcion="Nivel Avanzado"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Java Spring with SQL"
        descripcion="Curso Udemy"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Java Spring with MongoDB"
        descripcion="Curso Udemy"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="React and NodeJS with MongoDB"
        descripcion="Curso Udemy"
      />
    </div>
  );
};

export default ListadoCertificados;
