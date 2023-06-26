import React, { useEffect, useState } from "react";
import getContactos from "../../../api/contactos-api";

import ListaContactos from "../components/ListaContactos";

const VerContactos = () => {
  const [contactosObtenidos, setContactosObtenidos] = useState([{}]);
  const accessToken = sessionStorage.token;
  useEffect(() => {
    getContactos(setContactosObtenidos, accessToken);
  }, [setContactosObtenidos, accessToken]);

  return (
    <div>
      <h1>Contactos Recibidos</h1>
      <ListaContactos contactos={contactosObtenidos} />
    </div>
  );
};

export default VerContactos;
