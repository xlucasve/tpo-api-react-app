let instance = null;
require('dotenv').config();
const jwt = require("jsonwebtoken");


class mainController {

  static getInstance() {
    if (!instance) {
      return new mainController();
    }
    return instance;
  }

}


module.exports = mainController