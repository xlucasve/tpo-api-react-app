import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/elementosForm/Input";
import Button from "../../shared/elementosForm/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import registerApi from "../../api/register-api";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [logueado, setLogueado] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      confirmarEmail: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmarPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formState.inputs.email.value === formState.inputs.confirmarEmail.value &&
      formState.inputs.password.value ===
        formState.inputs.confirmarPassword.value
    ) {
      try {
        let jsonResponse = await registerApi(formState);
        if (jsonResponse.token) {
          console.log("Registrado exitosamente");
          sessionStorage.setItem("token", jsonResponse.token);
          sessionStorage.setItem("logueado", true);
          window.location.reload(false);
          navigate("/");
        } else {
          alert("a");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Email o contraseña no iguales");
    }
  };

  return (
    <div className="divLogin">
      {sessionStorage.logueado ? navigate("/") : null}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Ingrese su correo"
          onInput={inputHandler}
        />
        <Input
          id="confirmarEmail"
          element="input"
          type="text"
          label="Confirmar Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Ingrese su correo"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Contraseña"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
          errorText="Ingrese su contraseña, minimo 3 caracteres"
          onInput={inputHandler}
        />
        <Input
          id="confirmarPassword"
          element="input"
          type="password"
          label="Confirmar Contraseña"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
          errorText="Ingrese su contraseña, minimo 3 caracteres"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ENVIAR
        </Button>
      </form>
    </div>
  );
};

export default Register;
