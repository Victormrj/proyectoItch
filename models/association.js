const {Herramientas} = require('./Herramientas');
const { Usuario } = require('./Usuario');
const { Materiales } = require('./Materiales');
const { Equipos } = require('./Equipos');
const { bajasequipos } = require('./EquiposDeleted');

Herramientas.belongsTo(Usuario,{foreignKey:'user_id'});
Usuario.hasMany(Herramientas,{foreignKey:'user_id'})

Materiales.belongsTo(Usuario,{foreignKey:'user_idm'});
Usuario.hasMany(Materiales,{foreignKey:'user_idm'});

Equipos.belongsTo(Usuario,{foreignKey:'user_idE'});
Usuario.hasMany(Equipos,{ foreignKey:'user_idE' });

bajasequipos.belongsTo(Usuario,{foreignKey:'idEqb_user'});
Usuario.hasMany(bajasequipos,{foreignKey:'idEqb_user'});

module.exports = {
    Usuario,
    Herramientas,
    Materiales,
    Equipos,
    bajasequipos
}
