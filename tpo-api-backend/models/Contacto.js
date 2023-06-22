const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactoSchema = new Schema({
  nombreEmpresa: { type: String, required: true },
  nombreReclutador: { type: String, required: true },
  correoReclutador: { type: String, required: true },
  telefonoReclutador: { type: String, required: true },
  tituloPuesto: { type: String, required: true },
  descripcionPuesto: { type: String, required: true },
  montoOfrecido: { type: String, required: true },
});

module.exports = mongoose.model("Contacto", contactoSchema);
