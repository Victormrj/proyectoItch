//MODELO DE BAJAS DE EQUIPOS
const { DataTypes } = require('sequelize');
const { db } = require('../database/config');


const bajasequipos = db.define('bajasequipos',{

    nombreEquio:{
        type: DataTypes.STRING
    },
    numInventario:{
        type:DataTypes.STRING
    },
    modelo:{
        type:DataTypes.STRING
    },
    numSerie:{
        type:DataTypes.STRING
    },
    voltaje:{
        type:DataTypes.STRING
    },
    corriente:{
        type:DataTypes.STRING
    },
    watts:{
        type:DataTypes.STRING
    },
    temperatura:{
        type:DataTypes.STRING
    },
    hp:{
        type:DataTypes.STRING
    },
    hz:{
        type:DataTypes.STRING
    },
    peso:{
        type:DataTypes.STRING
    },
    presion:{
        type:DataTypes.STRING
    },
    volumen:{
        type:DataTypes.STRING
    },
    rpm:{
        type:DataTypes.STRING
    },
    fechaBaja:{
        type:DataTypes.STRING
    },
    capacidad:{
        type:DataTypes.STRING
    },
    cantidadEquipos:{
        type:DataTypes.INTEGER
    },
    observaciones:{
        type:DataTypes.STRING
    },
    numPeriodo:{
        type:DataTypes.STRING
    },
    numMes:{
        type:DataTypes.INTEGER
    },
    inicioMantenimiento:{
        type:DataTypes.STRING
    },
    proximoMantenimiento:{
        type:DataTypes.STRING
    },
    estadoEquipo:{
        type:DataTypes.STRING
    },
    idEqb_user:{
        type:DataTypes.INTEGER
    }
},{tableName:'bajasequipos'} );

module.exports = {
    bajasequipos
}