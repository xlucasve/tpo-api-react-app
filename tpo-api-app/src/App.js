import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./shared/mainNavegacion/MainHeader";
import Footer from "./shared/mainNavegacion/Footer";
import Login from "./Login/Login";
import Portfolio from "./Portfolio/Portfolio";
import Contacto from "./Contacto/pages/Contacto";
import VerContactos from "./Contacto/pages/VerContactos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactos" element={<VerContactos />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
