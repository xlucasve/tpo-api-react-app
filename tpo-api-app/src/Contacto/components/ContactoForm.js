import React from "react";

import Input from "../../shared/elementosForm/Input";
import Button from "../../shared/elementosForm/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./ContactoForm.css";

const ContactoForm = () => {
  const [formState, inputHandler] = useForm(
    {
      nombreEmpresa: {
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
        errorText="Por favor ingresar un Nombre de Empresa válido"
        onInput={inputHandler}
      />
      <Input
        id="descripcionPuesto"
        element="textarea"
        label="Descripcion del puesto"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Por favor ingresar una descripción válida (mím 5 carácteres)"
        onInput={inputHandler}
      />
      <Input
        id="montoOfrecido"
        element="input"
        label="Monto Ofrecido"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ENVIAR
      </Button>
    </form>
  );
};

export default ContactoForm;
