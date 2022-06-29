const { DataTypes } = require('sequelize');

const { db } = require('../database/config');

const Temporal = db.define('temporal', {
    tipo: {
        type: DataTypes.STRING
    },
    nombre: {
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
    temporal_id:{
        type: DataTypes.INTEGER
    },
    tipo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    tipoHoM: {
        type: DataTypes.STRING
    },
    adquisicion:{ type: DataTypes.DECIMAL },
    requisicion:{ type: DataTypes.STRING },
    factura:{ type: DataTypes.STRING },
    sisat:{ type: DataTypes.STRING },
    vendedor:{ type: DataTypes.STRING },   
    areaUbicacion:{type:DataTypes.STRING}
    
},{tableName:'temporal'} );

module.exports = {
    Temporal
}