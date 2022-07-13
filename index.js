
// functions
const verifyJWT = require('./functions/verifyJWT');

//routes
const index = require('./routes/index');
const clientes = require('./routes/clientes');
const login = require('./routes/login');
const logout = require('./routes/logout');

const express = require('express'); 
const app = express(); 
 
app.use(express.json());

app.get('/', index);
app.get('/clientes', verifyJWT ,clientes);
app.post('/login', login);
app.post('/logout', logout);

app.listen(3000, () => {
  console.log("Serve on http://localhost:3000")
});





