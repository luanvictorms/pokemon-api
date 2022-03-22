const express   = require('express');
const router    = express.Router();
const Pokemon   = require('../models/Pokemon');
//Importando o express, as rotas e o modelo pokemon

//rota de teste
router.get('/test', (req,res) => {
    res.send('deu certo');
});

//Add pokemon via post
router.post('/add', (req,res) =>{

    //Pegando dados via body parser da body
    let {name, level, str, def, alt} = req.body;
    
    //Inserir
    Pokemon.create({
        name,
        level,
        str,
        def,
        alt
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router

