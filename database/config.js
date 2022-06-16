const { Sequelize } = require('sequelize');

const db = new Sequelize('mantenimientoequipoitch_mantenimiento_equipo','272876_victor','itchmantenimiento',{
    host:'mysql-mantenimientoequipoitch.alwaysdata.net',
    dialect:'mysql'
});

module.exports ={
    db
} 