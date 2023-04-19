import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MainHeader.css";

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
        <a href="/MyWork">Portfolio</a>
        <a href="/#">Contacto</a>
        <a href="/#">Login</a>
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
