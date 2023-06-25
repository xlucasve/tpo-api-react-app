import React, { useEffect, useState } from "react";
import getContactos from "../../../api/contactos-api";

import "./VerContacto.css";
import ListaContactos from "../components/ListaContactos";

const VerContactos = () => {
  const [contactosObtenidos, setContactosObtenidos] = useState([{}]);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI2NDk2MTlhMWY4MmZiZDE4ZWRjOTQ3MmIiLCJ1c3VhcmlvRW1haWwiOiJwZnN1ZWI1NWFTQUxUQG1haWwuY29tIiwiaWF0IjoxNjg3NzE3OTg2LCJleHAiOjE2ODc4MDQzODZ9.CecJINkm7a5cNbQibkmRAX9hnBzsvqkEXgzSCU75pkU";
  useEffect(() => {
    console.log("Pido los contactos");
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
