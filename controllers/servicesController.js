const { response } = require("express")

const getService = (req, res = response) => {
    res.send('¡Hola, mundo desde Node.js!');
}

module.exports = {
    getService
}