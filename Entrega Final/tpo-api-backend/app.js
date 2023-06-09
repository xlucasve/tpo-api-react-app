const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const { swaggerDocs } = require("./swagger");

const contactosRoutes = require("./routes/contactos-routes");
const usuarioRoutes = require("./routes/usuarios-routes");
const HttpError = require("./models/http-error");

const { dbConnect } = require("./config/dbConfig");

const app = express();
dbConnect();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, jwt"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/contacto", contactosRoutes);
app.use("/api/usuario", usuarioRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Ha ocurrido un error desconocido" });
});

app.listen(process.env.PORT, () => {
  swaggerDocs(app, process.env.PORT);
  console.log("Funciona el servidor correctamente");
});
