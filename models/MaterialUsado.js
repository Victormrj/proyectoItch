const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const MaterialUsado = db.define('materialusado', {
    id_mantenimiento:{type: DataTypes.INTEGER},
    id_material:{type: DataTypes.INTEGER},
    cantidadUsada:{type: DataTypes.INTEGER}
}, { tableName: 'materialusado' })

module.exports = {
    MaterialUsado
}