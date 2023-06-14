const mongoose = require('mongoose');
require ('dotenv').config()

const dbConnection = async () => {
    try {
        await mongoose.connect(process.ENV.CONNECTION_STRING)
        console.log('DB Online');
    }
    catch (e) {
        console.log(e);
        throw new Error ('Error en la conexion de la BD')
    }
}

module.exports = {dbConnection}