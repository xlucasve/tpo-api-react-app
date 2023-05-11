import React from "react";
import ListadoCertificados from "./components/Certificado/ListadoCertificados";
import Introduccion from "./components/Introduccion/Introduccion";
import SobreMi from "./components/SobreMi/SobreMi";
import Tecnologia from "./components/Tecnologia/Tecnologia";

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
      <Link to="/contacto" className="link-centrado">
        <Button variant="outlined" className="bt-contacto">
          Contactame
        </Button>
      </Link>
    </div>
  );
};

export default Portfolio;
