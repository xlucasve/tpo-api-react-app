const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const contactosRoutes = require("./routes/contactos-routes");
const HttpError = require("./models/http-error");
const url =
  "mongodb+srv://user:1fZq7dvuRP43U6n5@cluster0.i9lozua.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(bodyParser.json());

app.use("/api", contactosRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Ruta desconocida", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Ha ocurrido un error desconocido" });
});

mongoose
  .connect(url)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
