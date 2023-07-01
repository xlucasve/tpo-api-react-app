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
        <p className="ft1-p2">E-Mail: juan.mendieta@gmail.com</p>
        <div>
          <a
            className="icon"
            href="https://www.linkedin.com/in/juan-ignacio-mendieta/"
          >
            <AiFillLinkedin />
          </a>
          <a className="icon" href="https://github.com/JuanxIG">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
