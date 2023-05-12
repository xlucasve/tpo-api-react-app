import React from "react";

import Experiencia from "./Experiencia";
import FotoGenerica from "../../../image/foto-generica.jpeg";

import "./ListadoExperiencia.css";

const ListadoExperiencia = () => {
  return (
    <div className="listado-completo">
      <div className="grupo-experiencia">
        <Experiencia
          foto={FotoGenerica}
          titulo="Full Stack Developer"
          tiempo="2 Año"
          empresa="Freelance (Self Employed)"
          duracion="2021 - Actualidad"
          ubicacion="Quilmes, Buenos Aires - Remoto"
        />
        <Experiencia
          foto={FotoGenerica}
          titulo="Full Stack Developer"
          empresa="Freelance (Self Employed)"
          duracion="2021 - Actualidad"
          ubicacion="Quilmes, Buenos Aires - Remoto"
        />
      </div>
    </div>
  );
};

export default ListadoExperiencia;
