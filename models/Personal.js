const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Personal = db.define('personal',{
    nombre:{
        type: DataTypes.STRING,
        required: true
    },
    apellidoM:{
        type: DataTypes.STRING,
        required: true
    },
    apellidoP:{
        type: DataTypes.STRING,
        required: true
    },
    sexo:{
        type: DataTypes.STRING,
        required: true
    },

},{tableName:'personal'} );

module.exports = {
    Personal
}