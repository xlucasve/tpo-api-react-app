const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Se ingreso a la BD correctamente");
  } catch (err) {
    console.error(err);
    throw new Error("Error al conectarse en la Base de Datos");
  }
};

module.exports = { dbConnect };
