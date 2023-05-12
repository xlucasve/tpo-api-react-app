import React from "react";
import Educacion from "./Educacion";

import "./ListadoEducacion.css";

const ListadoEducacion = () => {
  return (
    <div className="grupo-educacion">
      <Educacion
        titulo="Licenciatura en Gestión de Tecnología de la Información"
        institucion="UADE"
        fecha="2021 - Actualidad (2024)"
      />
      <Educacion
        titulo="Licenciatura en Gestión de Tecnología de la Información"
        institucion="UADE"
        fecha="2021 - Actualidad (2024)"
      />
    </div>
  );
};

export default ListadoEducacion;
