const express = require("express");

const router = express.Router();

const contactoController = require("../controllers/contacto-controller");

router.get("/", contactoController.getContactos);

router.get("/:cid", contactoController.getContactosById);

router.post("/", contactoController.createContacto);

router.delete("/:cid", contactoController.deleteContacto);

module.exports = router;
