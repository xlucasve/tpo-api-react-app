import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MainHeader.css";
import { Link } from "react-router-dom";
import Button from "../elementosForm/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const unLogin = () => {
    sessionStorage.clear("logueado");
  };

  if (!sessionStorage.logueado) {
    return (
      <header>
        <h3>Von Elm - Mendieta</h3>
        {/* Centrar el texto de los botones */}
        <nav ref={navRef}>
          <Link to="/">Portfolio</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrarse</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
  } else {
    return (
      <header>
        <h3>Von Elm - Mendieta</h3>
        {/* Centrar el texto de los botones */}
        <nav ref={navRef}>
          <Link to="/">Portfolio</Link>
          <Link to="/contactos">Recibidos</Link>
          <Link onClick={unLogin} to="/">
            LOG OUT
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
  }
}

export default Navbar;
