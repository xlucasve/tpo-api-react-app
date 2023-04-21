import { Routes, Route } from "react-router-dom";

import Header from "./shared/mainNavegacion/MainHeader";
import Footer from "./shared/mainNavegacion/Footer";
import Login from "./shared/Login/Login";
import Portfolio from "./Portfolio/pages/Portfolio";
import Contacto from "./Contacto/pages/Contacto";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
