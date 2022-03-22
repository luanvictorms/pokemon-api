const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pokemon = db.define('pokemon', {
    name: {
        type: Sequelize.STRING,
    },
    level: {
        type: Sequelize.INTEGER,
    },
    str: {
        type: Sequelize.INTEGER,
    },
    def: {
        type: Sequelize.INTEGER,
    },
    alt: {
        type: Sequelize.STRING,
    }
});

//Exportar o modelo de pokemon para ser usado em outro lugar
module.exports = Pokemon