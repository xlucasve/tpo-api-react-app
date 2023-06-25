import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import loginApi from "../../api/login-api";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [logueado, setLogueado] = useState(false);

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
    console.log("Guardo el token en sessionStorage");

    if (response.token) {
      setLogueado(true);
      sessionStorage.setItem("access-token", response.token);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        {logueado ? navigate("/") : null}
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
