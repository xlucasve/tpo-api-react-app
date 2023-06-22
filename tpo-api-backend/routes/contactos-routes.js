const express = require("express");

const router = express.Router();

const contactoController = require("../controllers/contacto-controller");
const usuarioController = require("../controllers/usuario-controller");

router.get("/contacto/", contactoController.getContactos);

router.get("/contacto/:cid", contactoController.getContactosById);

router.post("/contacto", contactoController.createContacto);

router.delete("/contacto/:cid", contactoController.deleteContacto);

router.post("/usuario/signup", usuarioController.signup);

module.exports = router;
