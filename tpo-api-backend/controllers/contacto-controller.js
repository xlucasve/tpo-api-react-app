const HttpError = require("../models/http-error");
const Contacto = require("../models/Contacto");

const getContactos = (req, res, next) => {
  console.log("Obtenidos todos los contactos");
};

const getContactosById = async (req, res, next) => {
  const contactoId = req.params.cid;

  let contacto;
  try {
    contacto = await Contacto.findById(contactoId);
  } catch (err) {
    const error = new HttpError("Algo sucedio mal, no se pudo encontrar", 500);
    return next(error);
  }
  if (!contacto) {
    const error = new HttpError(
      "No se pudo encontrar el contacto especificado",
      404
    );
    return next(error);
  }

  res.json({ contacto: contacto.toObject({ getters: true }) });
};

const createContacto = async (req, res, next) => {
  const {
    nombreEmpresa,
    nombreReclutador,
    correoReclutador,
    telefonoReclutador,
    tituloPuesto,
    descripcionPuesto,
    montoOfrecido,
  } = req.body;
  const contactoCreado = new Contacto({
    nombreEmpresa,
    nombreReclutador,
    correoReclutador,
    telefonoReclutador,
    tituloPuesto,
    descripcionPuesto,
    montoOfrecido,
  });

  try {
  } catch (err) {
    const error = new HttpError("Error al crear un contacto", 500);
    return next(error);
  }

  await contactoCreado.save();

  res
    .status(201)
    .json({ contacto: contactoCreado.toObject({ getters: true }) });
};

const deleteContacto = async (req, res, next) => {
  const contactoId = req.params.cid;

  let contacto;
  try {
    contacto = await Contacto.findByIdAndRemove(contactoId);
    if (!contacto) {
      const error = new HttpError("El contacto no existe", 500);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Error ocurrido, no se pudo borrar el contacto",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Elimiando correctamente" });
};

exports.getContactos = getContactos;
exports.getContactosById = getContactosById;
exports.createContacto = createContacto;
exports.deleteContacto = deleteContacto;
