const {Router} = require('express')
const mainController = require ('../controller/mainController.js')
const router = Router()

router.get('/', mainController) // GET DATA FROM CURRICULUM

module.exports = router