const express = require('express'); 
const app = express();

app.post('/logout',(req, res) => {
    res.json({ auth: false, token: null });
})

module.exports = app;