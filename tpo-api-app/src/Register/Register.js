import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Register.css";
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#db2b39',
    },
  } 
});

const Login = () => {

  return (
    <div className="divLogin">
      <h1>Registro</h1>
        <form>
          <TextField id="outlined-basic" className="nombreEmpresa" label="Email" variant="outlined" name="email"/>
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="Password"/>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" className="loginButton" color="primary" type="submit">Ingresa</Button>
          </ThemeProvider>
        </form>
      
    </div>
  );
};

export default Login;