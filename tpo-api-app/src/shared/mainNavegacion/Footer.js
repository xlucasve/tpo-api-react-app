import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="ft1-p1">
          Desarrollo del Portafolio Von Elm Lucas y Juan Ignacio Mendieta.
        </div>
        <p className="ft1-p2">Todos los derechos reservados.</p>
        <div>
          <a href="https://www.linkedin.com/in/juan-ignacio-mendieta/"><AiFillLinkedin/></a>
          <a href="https://github.com/JuanxIG"><AiFillGithub/></a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
