import React from "react";
import ItemTecnologia from "./ItemTecnologia";

import "./Tecnologia.css";

const Tecnologia = () => {
  return (
    <div className="mainTecnologia">
      <div className="tecnologia">
        <ItemTecnologia imagen="img/html.png" alt="html" texto="Avanzado" />
        <ItemTecnologia
          imagen="img/Javascript.png"
          alt="javascript"
          texto="Intermedio"
        />
        <ItemTecnologia imagen="img/mysql.png" alt="mySQL" texto="Basico" />
        <ItemTecnologia
          imagen="img/nodejs.png"
          alt="nodejs"
          texto="Intermedio"
        />
        <ItemTecnologia imagen="img/react.png" alt="react" texto="Intermedio" />
        <ItemTecnologia
          imagen="img/sequelize.png"
          alt="sequelize"
          texto="Basico"
        />
      </div>
    </div>
  );
};

export default Tecnologia;
