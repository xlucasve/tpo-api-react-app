require ('dotenv').config()
const express = require('express')
const {dbConnection} = require('./src/db/config')

const app = express()
dbConnection()

app.use(express.urlencoded({ extended: true }))

app.get ("/", (req, res) => {
    res.status(200).send({ message: "Estas conectado al proyecto" })
})



app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ' + process.env.PORT);
})

module.exports = app;