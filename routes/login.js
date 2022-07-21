require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express = require('express'); 
const app = express(); 

const password = '12345';

app.post('/login', (req, res, next) => {
    if(req.body.user === 'luiz' && req.body.pwd === '123'){
        const id = 1; 
        const token2 = jwt.sign({ id }, password);
        const token = jwt.sign({ id }, process.env.SECRET);
        return res.json({ auth: true, token: token , token2: token2});
    }

    res.status(500).json({message: 'Login inválido!'});
})

module.exports = app;