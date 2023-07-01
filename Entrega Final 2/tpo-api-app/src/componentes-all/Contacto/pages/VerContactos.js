import React, { useEffect, useState } from "react";
import getContactos from "../../../api/contactos-api";

import ListaContactos from "../components/ListaContactos";
import "./VerContactos.css";

const VerContactos = () => {
  const [contactosObtenidos, setContactosObtenidos] = useState([{}]);
  const accessToken = sessionStorage.token;
  useEffect(() => {
    getContactos(setContactosObtenidos, accessToken);
  }, [setContactosObtenidos, accessToken]);

  if (!sessionStorage.token) {
    return (
      <div className="verContactos">
        <h1>No esta autorizado</h1>
      </div>
    );
  } else {
    return (
      <div>
        <ListaContactos contactos={contactosObtenidos} />
      </div>
    );
  }
};

export default VerContactos;
