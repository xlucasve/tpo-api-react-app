const express = require("express");
const jtwValidator = require("../middleware/jwt-validator");
const contactoController = require("../controllers/contacto-controller");

const router = express.Router();

/**
 * @swagger
 * /api/contacto:
 *    get:
 *      tags:
 *      - Contacto
 *      description: Obtiene todos los contactos
 *      responses:
 *        '200':
 *          description: Se obtuvieron los contactos exitosamente
 *        '401':
 *          description: JWT incorrecto
 *        '500':
 *          description: Error al buscar los contactos
 */
router.get("/", jtwValidator, contactoController.getContactos);

/**
 * @swagger
 * /api/contacto/:cid:
 *    get:
 *      tags:
 *      - Contacto
 *      description: Obtiene el contacto especificado en el :cid
 *      responses:
 *        '200':
 *          description: Se obtuvo el contacto exitosamente
 *        '401':
 *          description: JWT incorrecto
 *        '404':
 *          description: No se pudo encontrar el contacto buscado
 *        '500':
 *          description: Error al buscar el contacto
 */
router.get("/:cid", jtwValidator, contactoController.getContactosById);

/**
 * @swagger
 * /api/contacto/post:
 *    post:
 *      tags:
 *      - Contacto
 *      description: Use to insert a new user
 *      responses:
 *        '201':
 *          description: Se creo el contacto exitosamente
 *        '401':
 *          description: JWT incorrecto
 *        '500':
 *          description: Error al crear el contacto
 *    parameters:
 *      - name: nombreEmpresa
 *        in: body
 *        description: Nombre de la empresa que representa el Reclutador
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: NombreEmpresa
 *      - name: nombreReclutador
 *        in: body
 *        description: Nombre del Reclutador
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: NombreReclutador
 *      - name: correoReclutador
 *        in: body
 *        description: Direccion de correo del Reclutador
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: correo@mail.com
 *      - name: telefonoReclutador
 *        in: body
 *        description: Numero de Telefono de Reclutador
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: 123 456
 *      - name: tituloPuesto
 *        in: body
 *        description: Titulo del puesto ofrecido
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: Desarrollador Java Backend
 *      - name: descripcionPuesto
 *        in: body
 *        description: Descripcion del puesto ofrecido
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: Se encargara de codear el backend
 *      - name: montoOfrecido
 *        in: body
 *        description: Monto que ofrecio en el contacto
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: 180 000 pesos
 */

router.post("/post", jtwValidator, contactoController.createContacto);

/**
 * @swagger
 * /api/contacto/:cid:
 *    delete:
 *      tags:
 *      - Contacto
 *      description: Borra el contacto especificado en el :cid
 *      parameters:
 *      - name: cid
 *        in: link
 *        description: Id del contacto a eliminar
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *          example: 64990c766d227f7eb3545be5
 *      responses:
 *        '200':
 *          description: Se elimino el contacto exitosamente
 *        '401':
 *          description: JWT incorrecto
 *        '500':
 *          description: Error al eliminar el contacto
 */

router.delete("/:cid", jtwValidator, contactoController.deleteContacto);

module.exports = router;
