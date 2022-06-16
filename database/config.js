const { Sequelize } = require('sequelize');

const db = new Sequelize('mantenimiento_equipo','root','123456789',{
    host:'localhost',
    dialect:'mysql'
});

module.exports ={
    db
} 