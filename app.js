const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ 
        status: "success", 
        message: "Aplicacion automatizada IT4+ funcionando en Kubernetes con exito",
        framework: "Node.js"
    });
});

module.exports = app;