const express = require("express");
const jtwValidator = require("../middleware/jwt-validator");
const contactoController = require("../controllers/contacto-controller");

const router = express.Router();

router.get("/", jtwValidator, contactoController.getContactos);

router.get("/:cid", jtwValidator, contactoController.getContactosById);

router.post("/post", jtwValidator, contactoController.createContacto);

router.delete("/:cid", jtwValidator, contactoController.deleteContacto);

module.exports = router;
