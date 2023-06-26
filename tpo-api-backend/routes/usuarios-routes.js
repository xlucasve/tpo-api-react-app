const express = require("express");

const router = express.Router();

const usuarioController = require("../controllers/usuario-controller");

/**
 * @swagger
 * /api/usuario/signup:
 *    post:
 *      tags:
 *      - Usuario
 *      description: Registra al usuario
 *      parameters:
 *      - name: email
 *        in: link
 *        description: Correo del usuario a registrar
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: correo@correo.mail
 *      - name: password
 *        in: link
 *        description: Contraseña del usuario a registrar
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: 123Contraseña123
 *      responses:
 *        '201':
 *          description: Se creo el usuario exitosamente
 *        '422':
 *          description: Inputs invalidos | Ya existe un usuario con ese correo
 *        '500':
 *          description: Error al registrar el usuario
 */
router.post("/signup", usuarioController.signup);

/**
 * @swagger
 * /api/usuario/login:
 *    post:
 *      tags:
 *      - Usuario
 *      description: Loguear un usuario
 *      parameters:
 *      - name: email
 *        in: link
 *        description: Correo del usuario a registrar
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: correo@correo.mail
 *      - name: password
 *        in: link
 *        description: Contraseña del usuario a registrar
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: 123Contraseña123
 *      responses:
 *        '200':
 *          description: Se logueo al usuario exitosamente
 *        '401':
 *          description: Credenciales invalidas
 *        '500':
 *          description: Error al loguearse
 */
router.post("/login", usuarioController.login);

module.exports = router;
