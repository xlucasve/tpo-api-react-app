import React from "react";
import ListadoCertificados from "./components/Certificado/ListadoCertificados";
import Introduccion from "./components/Introduccion/Introduccion";
import SobreMi from "./components/SobreMi/SobreMi";
import Tecnologia from "./components/Tecnologia/Tecnologia";
import ListadoEducacion from "./components/Educacion/ListadoEducacion";
import ListadoExperiencia from "./components/Experiencia/ListadoExperiencia";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1>Introduccion</h1>
      <Introduccion />
      <h2 id="sobre-mi">Sobre Mi</h2>
      <SobreMi />
      <h2 id="Tecnologias">Tecnologias</h2>
      <Tecnologia />
      <h2 id="Certificados">Certificados</h2>
      <ListadoCertificados />
      <h2 id="Educacion">Educacion</h2>
      <ListadoEducacion />
      <h2 id="Experiencia">Experiencia Laboral</h2>
      <ListadoExperiencia />
      <div className="contacto-centrado">
        <h2 id="Contactame">Ponte en Contacto</h2>
        <Link to="/contacto" className="link-centrado">
          <Button variant="outlined" className="bt-contacto">
            Contactame
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
