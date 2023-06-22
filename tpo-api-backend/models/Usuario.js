const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UsuarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Usuario", UsuarioSchema);
