import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css";
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
    <div>
      <h1>Iniciar Sesion</h1>
      <form>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email"/>
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="Password"/>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" className="loginButton" color="primary">Ingresa</Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default Login;
