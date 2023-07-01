import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./shared/mainNavegacion/MainHeader";
import Footer from "./shared/mainNavegacion/Footer";
import Login from "./componentes-all/Login/Login";
import Portfolio from "./componentes-all/Portfolio/Portfolio";
import Contacto from "./componentes-all/Contacto/pages/Contacto";
import VerContactos from "./componentes-all/Contacto/pages/VerContactos";
import Register from "./componentes-all/Register/Register";

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
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
