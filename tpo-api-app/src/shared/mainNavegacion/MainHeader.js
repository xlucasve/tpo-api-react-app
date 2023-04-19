import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MainHeader.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Von Elm - Mendieta</h3>
      {/* Centrar el texto de los botones */}
      <nav ref={navRef}>
        <Link to="/MyWork">Portfolio</Link>
        <Link to="/#">Contacto</Link>
        <Link to="/login">Login</Link>
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

export default Navbar;
