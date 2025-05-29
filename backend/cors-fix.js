const express = require("express")
const cors = require("cors")
const axios = require("axios")


module.exports = function setupCors(app) {
    
    app.use(cors())

    app.options("*", cors())

    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS';
}
