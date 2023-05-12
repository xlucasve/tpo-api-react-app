import React from "react";
import Educacion from "./Educacion";

import LogoUade from "../../../image/logo-uade.png";

import "./ListadoEducacion.css";

const ListadoEducacion = () => {
  return (
    <div className="grupo-educacion">
      <Educacion
        titulo="Licenciatura en Gestión de Tecnología de la Información"
        institucion="UADE (Universidad Argentina de la Empresa)"
        fecha="2021 - Actualidad (2024)"
        foto={LogoUade}
      />
    </div>
  );
};

export default ListadoEducacion;
