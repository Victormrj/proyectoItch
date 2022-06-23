const { DataTypes } = require('sequelize');

const { db } = require('../database/config');

const HerramientaTemporal = db.define('herramientatemporal', {
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
    us_idhertemp:{
        type: DataTypes.INTEGER
    },
    tipo: {
        type: DataTypes.STRING
    }
},{tableName:'herramientatemporal'} );

module.exports = {
    HerramientaTemporal
}