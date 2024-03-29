require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express = require('express'); 
const app = express();
const cors = require('cors');

const password = '12345';

app.use(cors());

app.post('/login', (req, res, next) => {
    if(req.body.user === 'luiz' && req.body.pwd === '123'){
        const id = 1; 
        const token = jwt.sign({ id }, password);
        // const token = jwt.sign({ id }, process.env.SECRET);
        return res.json({ auth: true, token: token});
    }

    res.status(500).json({message: 'Login inválido!'});
})

module.exports = app;