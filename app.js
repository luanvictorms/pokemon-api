const express       = require('express');
const app           = express();
const db            = require('./db/connection');
const bodyParser    = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O express esta rodando na porta ${PORT}`);
});

// Body parser
app.use(bodyParser.urlencoded({extended: false}));

//  db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou com o banco com sucesso!")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar-se", err);
    })

//  routes
app.get('/', (req,res) =>{
    res.send("Esta funcionando");
});

// Pokemon routes
app.use('/pokemons', require('./routes/pokemons'));