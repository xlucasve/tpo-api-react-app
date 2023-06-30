import React, { useState } from "react";
import Input from "../../shared/elementosForm/Input";
import Button from "../../shared/elementosForm/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useNavigate } from "react-router-dom";

import loginApi from "../../api/login-api";

import "./Login.css";

const Login = () => {
  const [logueado, setLogueado] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let jsonResponse = await loginApi(formState);

    if (jsonResponse.token) {
      sessionStorage.setItem("logueado", true);
      console.log(sessionStorage.logueado);
      sessionStorage.setItem("token", jsonResponse.token);
      window.location.reload(false);
      navigate("/");
    } else {
      alert("Credenciales invalidas");
    }
  };

  return (
    <div className="divLogin">
      {sessionStorage.logueado ? navigate("/") : null}
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
          id="password"
          element="input"
          type="password"
          label="Contraseña"
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

export default Login;
