import React from "react";

import Input from "../../../shared/elementosForm/Input";
import Button from "../../../shared/elementosForm/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../../shared/util/validators";
import { useForm } from "../../../shared/hooks/form-hook";
import "./ContactoForm.css";

const ContactoForm = () => {
  const [formState, inputHandler] = useForm(
    {
      nombreEmpresa: {
        value: "",
        isValid: false,
      },
      nombreReclutador: {
        value: "",
        isValid: false,
      },
      correoContacto: {
        value: "",
        isValid: false,
      },
      telefonoContacto: {
        value: "",
        isValid: false,
      },
      tituloPuesto: {
        value: "",
        isValid: false,
      },
      descripcionPuesto: {
        value: "",
        isValid: false,
      },
      montoOfrecido: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const contactoSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // por ahora logueamos el objeto, despues lo enviamos al backend para la base de datos
  };

  return (
    <form className="contacto-form" onSubmit={contactoSubmitHandler}>
      <Input
        id="nombreEmpresa"
        element="input"
        type="text"
        label="Nombre de Empresa"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese un Nombre de Empresa"
        onInput={inputHandler}
      />
      <Input
        id="nombreReclutador"
        element="input"
        type="text"
        label="Nombre de reclutador"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su nombre"
        onInput={inputHandler}
      />
      <Input
        id="correoContacto"
        element="input"
        type="text"
        label="E-Mail de contacto"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Ingrese un E-Mail válido"
        onInput={inputHandler}
      />
      <Input
        id="telefonoContacto"
        element="input"
        type="text"
        label="Telefono de contacto"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Ingrese un número válido (min. 6 caracteres)"
        onInput={inputHandler}
      />
      <Input
        id="tituloPuesto"
        element="input"
        label="Titulo de Puesto"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Por favor ingresar un titulo de puesto."
        onInput={inputHandler}
      />
      <Input
        id="descripcionPuesto"
        element="textarea"
        label="Descripcion del puesto"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Ingrese por lo menos 10 caracteres"
        onInput={inputHandler}
      />
      <Input
        id="montoOfrecido"
        element="input"
        label="Monto Ofrecido"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Por favor ingresar un valor."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ENVIAR
      </Button>
    </form>
  );
};

export default ContactoForm;
