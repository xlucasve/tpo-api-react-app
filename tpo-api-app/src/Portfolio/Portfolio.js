import React from "react";
import "./Portfolio.css";


const Portfolio = () => {
  return (
    <div>
      <h1>Pagina de Portfolio</h1>
      <h2>Tecnologias</h2>
      <div className="mainTecnologia">
        <div className="tecnologia">
          <figure><img src="img/github.png" alt="github"/></figure>
          <figure><img src="img/html.png" alt="html"/></figure>
          <figure><img src="img/Javascript.png" alt="Javascript"/></figure>
          <figure><img src="img/mysql.png" alt="mysql"/></figure>
          <figure><img src="img/nodejs.png" alt="nodejs"/></figure>
          <figure><img src="img/react.png" alt="react"/></figure>
          <figure><img src="img/sequelize.png" alt="sequelize"/></figure>
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
