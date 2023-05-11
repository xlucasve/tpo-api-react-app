import React from "react";
import "./Portfolio.css";
import Rating from "@mui/material/Rating";
import ListadoCertificados from "./components/Certificado/ListadoCertificados";
import Introduccion from "./components/Introduccion/Introduccion";

import Tecnologia from "./components/Tecnologia/Tecnologia";

const Portfolio = () => {
  return (
    <div>
      <h1>Introduccion</h1>
      <Introduccion />
      <h2 id="sobre-mi">Sobre Mi</h2>
      <div className="aboutMe">
        <p className="aboutMe-text">
          Hola, me presento, tengo 20 años, me gusta la programación y estoy en
          búsqueda de adquirir más conocimiento. Me considero una persona
          curiosa, resolutiva y con ganas de mejorar todos los días en el
          desarrollo web y programación. Paso la mayor tiempo de mi vida con el
          codigo. Mis hobbies son el gimnasio y escuchar musica. Un
          desarrollador de software profesional no duda en eliminar lo que sea
          necesario siempre que vaya a ser sustituido por una idea mejor que
          añada simplicidad, mejor diseño o mayor legibilidad a la solución.
        </p>

        <div className="rating">
          <div>
            <span component="legend">Frontend</span>
            <Rating name="read-only" value={5} readOnly />
          </div>
          <div>
            <span component="legend">Backend</span>
            <Rating name="read-only" value={2} readOnly />
          </div>
          <div>
            <span component="legend">Trabajo en Equipo</span>
            <Rating name="read-only" value={4} readOnly />
          </div>
          <div>
            <span component="legend">Experiencia</span>
            <Rating name="read-only" value={2} readOnly />
          </div>
          <div>
            <span component="legend">Ingles</span>
            <Rating name="read-only" value={3} readOnly />
          </div>
        </div>
      </div>
      <h2 id="Tecnologias">Tecnologias</h2>
      <Tecnologia />
      <h2 id="Certificados">Certificados</h2>
      <ListadoCertificados />
    </div>
  );
};

export default Portfolio;
