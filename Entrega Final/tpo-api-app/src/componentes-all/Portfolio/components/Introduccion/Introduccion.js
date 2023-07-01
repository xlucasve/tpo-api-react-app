import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Introduccion.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#db2b39",
    },
  },
});

const Introduccion = () => {
  return (
    <div className="introduction">
      <figure className="ft-perfil">
        <img src="img/foto.jpg" alt="github" />
      </figure>

      <div className="introduction-data">
        <div className="typewriter">
          <h1>Juan Ignacio Mendieta</h1>
        </div>
        <ThemeProvider theme={theme}>
          <a
            href="img/Juan Ignacio Mendieta.pdf"
            download="Curriculum Juan Ignacio Mendieta"
          >
            <Button variant="outlined" className="bt-download">
              Descargar CV
            </Button>
          </a>
        </ThemeProvider>
        <div className="frase">
          "Hay dos formas de escribir programas sin errores; sólo la tercera
          funciona"
          <p>Quilmes, Buenos Aires</p>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;
