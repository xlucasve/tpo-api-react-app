const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Error al registrarse", 500);
    return next(error);
  }

  const usuarioCreado = new Usuario({
    email,
    password: hashedPassword,
  });

  try {
    await usuarioCreado.save();
  } catch (err) {
    const error = new HttpError("Error al crear usuario", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { usuarioId: usuarioCreado.id, email: usuarioCreado.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  } catch (err) {
    const error = new HttpError("Error al registrarse", 500);
    return next(error);
  }

  res.status(201).json({
    usuarioId: usuarioCreado.id,
    usuarioEmail: usuarioCreado.email,
    token: token,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let usuarioBuscado;

  try {
    usuarioBuscado = await Usuario.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Usuario Inexistente", 500);
    return next(erorr);
  }

  if (!usuarioBuscado) {
    const error = new HttpError("Credenciales Invalidas", 401);
    return next(error);
  }

  let esPasswordValida = false;

  try {
    esPasswordValida = await bcrypt.compare(password, usuarioBuscado.password);
  } catch (err) {
    const error = new HttpError("Error al loguearse", 500);
    return next(error);
  }

  if (!esPasswordValida) {
    const error = new HttpError("Credenciales Invalidas", 401);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { usuarioId: usuarioBuscado.id, usuarioEmail: usuarioBuscado.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  } catch (err) {
    const error = new HttpError("Error al loguearse, problema de JWT", 500);
    return next(error);
  }

  res.json({
    usuarioId: usuarioBuscado.id,
    usuarioEmail: usuarioBuscado.email,
    token: token,
  });
};

exports.signup = signup;
exports.login = login;
