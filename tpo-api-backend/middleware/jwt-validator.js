require("dotenv").config();
const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJwt = async (req, res = response, next) => {
  try {
    const jwtValidate = jwt.verify(req.headers.jwt, process.env.PRIVATE_KEY);
    if (jwtValidate) {
      console.log("Verificado correctamente el JWT");
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = validateJwt;
