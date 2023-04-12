import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div class="ft1-p1">
          Desarrollo del Portafolio Von Elm Lucas y Juan Ignacio Mendieta.
        </div>
        <p class="ft1-p2">Todos los derechos reservados.</p>
      </div>
      <div class="ft-img">
        <figure>
          <img src="img/Logo.png" alt="logo-imagen" />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
