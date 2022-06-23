const {Herramientas} = require('./Herramientas');
const { Usuario } = require('./Usuario');
const { Materiales } = require('./Materiales');
const { Equipos } = require('./Equipos');
const { bajasequipos } = require('./EquiposDeleted');
const { HerramientaTemporal } = require('./HerramientaTemporal');
const { MaterialTemporal } = require('./MaterialTemporal');
const { Temporal } = require('./Temporal')
const { Mantenimientos } = require('./Mantenimiento');
const { MaterialUsado } = require('./MaterialUsado')

Herramientas.belongsTo(Usuario,{foreignKey:'user_id'});
Usuario.hasMany(Herramientas,{foreignKey:'user_id'});

HerramientaTemporal.belongsTo(Usuario,{foreignKey:'us_idhertemp'});//AQUI
Usuario.hasMany(HerramientaTemporal,{foreignKey:'us_idhertemp'})//AQUI user_idmtemporal

Materiales.belongsTo(Usuario,{foreignKey:'user_idm'});
Usuario.hasMany(Materiales,{foreignKey:'user_idm'});

MaterialTemporal.belongsTo(Usuario,{foreignKey:'user_idmtemporal'});//MATERIAL TEMPORAL
Usuario.hasMany(MaterialTemporal,{foreignKey:'user_idmtemporal'});

Temporal.belongsTo(Usuario,{foreignKey:'temporal_id'});//MATERIAL TEMPORAL
Usuario.hasMany(Temporal,{foreignKey:'temporal_id'});

Equipos.belongsTo(Usuario,{foreignKey:'user_idE'});
Usuario.hasMany(Equipos,{ foreignKey:'user_idE' });

bajasequipos.belongsTo(Usuario,{foreignKey:'idEqb_user'});
Usuario.hasMany(bajasequipos,{foreignKey:'idEqb_user'});

Mantenimientos.belongsTo(Usuario,{ foreignKey:'user_idM' });
Usuario.hasMany(Mantenimientos,{foreignKey:'user_idM'});

MaterialUsado.belongsTo(Materiales,{ foreignKey:'id_material' });
Materiales.hasMany(MaterialUsado,{foreignKey:'id_material'});


module.exports = {
    Usuario,
    Herramientas,
    Materiales,
    Equipos,
    bajasequipos,
    Temporal,
    Mantenimientos,
    MaterialUsado
}
