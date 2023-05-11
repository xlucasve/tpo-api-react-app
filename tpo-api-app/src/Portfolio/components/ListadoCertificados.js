import React from "react";

import Certificado from "./Certificado";

import Foto from "../../image/icono-certificado.png";

import "./ListadoCertificado.css";

const ListadoCertificados = () => {
  return (
    <div className="certificado">
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Titulo Ingles"
        descripcion="Nivel Avanzado"
        fecha="2024"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Java Spring with SQL"
        descripcion="Curso Udemy"
        fecha="2023"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="Java Spring with MongoDB"
        descripcion="Curso Udemy"
        fecha="2023"
      />
      <Certificado
        foto={Foto}
        alt="Icono Certificado"
        nombre="React and NodeJS with MongoDB"
        descripcion="Curso Udemy"
        fecha="2023"
      />
    </div>
  );
};

export default ListadoCertificados;
