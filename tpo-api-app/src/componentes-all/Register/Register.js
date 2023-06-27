import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Register.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmarEmailChange = (e) => {
    setConfirmarEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmarPasswordChange = (e) => {
    setConfirmarPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="divLogin">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="miCorreo@email.com"
            required
          />
        </div>
        <div className="divLogin">
          <label>Confirmar Email</label>
          <input
            type="email"
            value={confirmarEmail}
            onChange={handleConfirmarEmailChange}
            placeholder="miCorreo@email.com"
            required
          />
        </div>
        <div className="divLogin">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Contraseña123!"
            required
          />
        </div>
        <div className="divLogin">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmarPassword}
            onChange={handleConfirmarPasswordChange}
            placeholder="Contraseña123!"
            required
          />
        </div>
        <button className="loginButton" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
