const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Eventos = db.define('eventos', {

    title: {
        type: DataTypes.STRING,
        required: true
    },
    notes: {
        type: DataTypes.STRING,
    },
    start: {
        type: DataTypes.STRING,
        required: true
    },
    end: {
        type: DataTypes.STRING,
        required: true
    },
    id_userEvento: {
        type: DataTypes.INTEGER
    }


}, { tableName: 'eventos' });
module.exports = {
    Eventos
}
