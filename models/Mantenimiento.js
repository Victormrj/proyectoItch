const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Mantenimientos = db.define('mantenimientos', {
    tipoMante:{type: DataTypes.STRING},
    servicio:{type: DataTypes.STRING},
    areaDepart:{type: DataTypes.STRING},
    tipoServ:{type: DataTypes.STRING},
    asignado:{type: DataTypes.STRING},
    fechaRealizacion:{type: DataTypes.STRING},
    trabajoRealizdo:{type: DataTypes.STRING},
    materialUtilizado:{type: DataTypes.STRING},
    realizadoPor:{type: DataTypes.STRING},
    verificadoLiberadoPor:{type: DataTypes.STRING},
    vistoBuenoSolicitante:{type: DataTypes.STRING},
    user_idM:{type: DataTypes.INTEGER},
    // id_mantenimiento:{type: DataTypes.INTEGER},
    // id_material:{type: DataTypes.INTEGER},
    status:{type: DataTypes.STRING},


}, { tableName: 'mantenimientos' })

module.exports = {
    Mantenimientos
}