const express = require('express'); 
const app = express(); 

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

module.exports = app;