const Sequelize = require('sequelize');

//Conectando o sequelize com o banco sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

module.exports = sequelize