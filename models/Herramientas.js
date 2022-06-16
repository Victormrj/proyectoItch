const { DataTypes } = require('sequelize');

const { db } = require('../database/config');

const Herramientas = db.define('Herramientas', {
    tipoH: {
        type: DataTypes.STRING
    },
    nombreH: {
        type: DataTypes.STRING
    },
    codigo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    observaciones: {
        type: DataTypes.STRING
    },
    horaIngreso: {
        type: DataTypes.TIME
    },
    fechaIngreso: {
        type: DataTypes.DATE
    },
    precioCosto: {
        type: DataTypes.DOUBLE
    },
    precioVenta: {
        type: DataTypes.DOUBLE
    },
    precioMayoreo: {
        type: DataTypes.DOUBLE
    },
    precioMinimo: {
        type: DataTypes.DOUBLE
    },
    user_id:{
        type: DataTypes.INTEGER
    }
});

module.exports = {
    Herramientas
}