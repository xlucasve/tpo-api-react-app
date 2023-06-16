const {Router} = require('express')
const mainController = require ('../controller/mainController.js')
const router = Router()

router.get('/', mainController) // GET CONTACTO

module.exports = router