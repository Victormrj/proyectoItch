const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Materiales = db.define('materiales',{

    tipoM:{
        type: DataTypes.STRING
    },
    codigoM:{
        type: DataTypes.STRING
    },
    nombreM:{
        type: DataTypes.STRING
    },
    cantidadM:{
        type: DataTypes.INTEGER
    },
    unidadM:{
        type: DataTypes.STRING
    },
    descripcionM:{
        type:DataTypes.STRING
    },
    obervacionesM:{
        type: DataTypes.STRING
    },
    precioCosto:{
        type: DataTypes.DOUBLE
    },
    precioVenta:{
        type: DataTypes.DOUBLE
    },
    precioMayoreo:{
        type: DataTypes.DOUBLE
    },
    precioMinimo:{
        type: DataTypes.DOUBLE
    },
    horaIngreso:{
        type: DataTypes.STRING
    },
    fechaIngreso:{
        type: DataTypes.STRING
    },
    user_idm:{
        type: DataTypes.INTEGER
    }
},{tableName:'materiales'} );

module.exports = {
    Materiales
}