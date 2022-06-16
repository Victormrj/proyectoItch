const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Usuario = db.define('usuarios',{
        nombre: {
            type: DataTypes.STRING,
            required: true

        },
        apellidoP: {
            type: DataTypes.STRING,
            required: true
        },
        apellidoM: {
            type: DataTypes.STRING,
            required: true
            // require: true
        },
        numControl: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true
        },
        sexo: {
            type: DataTypes.STRING,
            // required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            required: true
    
        },
        rol: {
            type: DataTypes.STRING,
            required: true
        },
        estado: {
            type: DataTypes.STRING,
            // required: true
        },
});
module.exports = {
    Usuario
}
