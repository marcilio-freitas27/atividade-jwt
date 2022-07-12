
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

// const http = require('http'); 
const express = require('express'); 
const app = express(); 
 
// const bodyParser = require('body-parser');
app.use(express.json());

app.get('/', (req, res, next) => {
  res.json({message: "Tudo ok por aqui!"});
})

app.get('/clientes', verifyJWT,(req, res, next) => { 
  console.log("Retornou todos clientes!");
  res.json([{id:1,nome:'luiz'}]);
})

// const server = http.createServer(app); 
app.listen(3000, () => {
  console.log("Serve on http://localhost:3000")
});

//authentication
app.post('/login', (req, res, next) => {
  if(req.body.user === 'luiz' && req.body.pwd === '123'){
    //auth ok
    const id = 1; //esse id viria do banco de dados
    const token = jwt.sign({ id }, process.env.SECRET);
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login inválido!'});
})

app.post('/logout', (req, res) => {
  res.json({ auth: false, token: null });
})

function verifyJWT(req, res, next){
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}


