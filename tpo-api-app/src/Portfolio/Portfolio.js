import React from "react";
import "./Portfolio.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import foto from "../image/gorro-escolar.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#db2b39",
    },
  },
});

const Portfolio = () => {
  return (
    <div>
      <h1>Introduccion</h1>

      <div className="introduction">
        <figure className="ft-perfil">
          <img src="img/foto.jpg" alt="github" />
        </figure>

        <div className="introduction-data">
          <div className="typewriter">
            <h1>I'm Juan Ignacio Mendieta</h1>
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
      <div className="mainTecnologia">
        <div className="tecnologia">
          <figure>
            <img src="img/github.png" alt="github" />
          </figure>
          <figure>
            <img src="img/html.png" alt="html" />
          </figure>
          <figure>
            <img src="img/Javascript.png" alt="Javascript" />
          </figure>
          <figure>
            <img src="img/mysql.png" alt="mysql" />
          </figure>
          <figure>
            <img src="img/nodejs.png" alt="nodejs" />
          </figure>
          <figure>
            <img src="img/react.png" alt="react" />
          </figure>
          <figure>
            <img src="img/sequelize.png" alt="sequelize" />
          </figure>
        </div>
      </div>

      {/* <h2 id="Certificados-Cursos">Certificados y Cursos</h2>
      <div className="certificado-curso">
        <div className="certificado-curso-individual">
          <img src={foto} alt="gorro-escolar" className="foto-curso" />
          <div>
            <p className="nombre-curso">Titulo de Ingles</p>
            <p className="descripcion-curso">EF SET</p>
          </div>
        </div>
        <div className="certificado-curso-individual">
          <img src={foto} alt="gorro-escolar" className="foto-curso" />
          <div>
            <p className="nombre-curso">Java Spring with MongoDB</p>
            <p className="descripcion-curso">Curso Udemy</p>
          </div>
        </div>
        <div className="certificado-curso-individual">
          <img src={foto} alt="gorro-escolar" className="foto-curso" />
          <div>
            <p className="nombre-curso">Java Spring with SQL</p>
            <p className="descripcion-curso">Curso Udemy</p>
          </div>
        </div>
        <div className="certificado-curso-individual">
          <img src={foto} alt="gorro-escolar" className="foto-curso" />
          <div>
            <p className="nombre-curso">React with NodeJs</p>
            <p className="descripcion-curso">Curso Udemy</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
