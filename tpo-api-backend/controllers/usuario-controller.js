const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

const Usuario = require("../models/Usuario");

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Inputs invalidos", 422);
    return next(error);
  }
  const { email, password } = req.body;

  let usuarioExistente;
  try {
    usuarioExistente = await Usuario.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Error al registrarse", 500);
    return next(error);
  }

  if (usuarioExistente) {
    const error = new HttpError(
      "Un usuario con este correo ya existe, pruebe a loguearse",
      422
    );
    return next(error);
  }

  const usuarioCreado = new Usuario({
    email,
    password,
  });

  try {
    await usuarioCreado.save();
  } catch (err) {
    const error = new HttpError("Error al crear usuario", 500);
    return next(error);
  }

  res.status(201).json({ usuario: usuarioCreado.toObject({ getters: true }) });
};

exports.signup = signup;
