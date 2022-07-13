const express = require('express'); 
const app = express(); 

app.get('/clientes',(req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
})

module.exports = app;