const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ 
        status: "success", 
        message: "Aplicación IT4+ funcionando correctamente en Kubernetes",
        framework: "Node.js"
    });
});

module.exports = app;