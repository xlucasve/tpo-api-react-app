import React, { useState } from "react";
import Input from "../../shared/elementosForm/Input";
import Button from "../../shared/elementosForm/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";

import loginApi from "../../api/login-api";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logueado, setLogueado] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await loginApi(email, password);
    console.log(response);

    if (response.status == 200) {
      console.log("Guardo el token en sessionStorage");
      setLogueado(true);
      console.log(logueado);
      sessionStorage.setItem("token", response.token);
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  };

  return (
    <div>
      {logueado ? navigate("/") : null}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
