// const { Sequelize } = require('sequelize');

// const db = new Sequelize('mantenimientoequipoitch_mantenimiento_equipo','272876_victor','itchmantenimiento',{
//     host:'mysql-mantenimientoequipoitch.alwaysdata.net',
//     dialect:'mysql'
// });

// module.exports ={
//     db
// } 

const { Sequelize } = require('sequelize');

const db = new Sequelize('mantenimiento_equipo','root','123456789',{
    host:'localhost',
    dialect:'mysql'
});

module.exports ={
    db
} 