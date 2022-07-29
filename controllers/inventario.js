const { response } = require('express');
const { Herramientas } = require('../models/Herramientas');
const { Materiales } = require('../models/Materiales');
const { Equipos } = require('../models/Equipos');
const { bajasequipos } = require('../models/EquiposDeleted');
const { Usuario } = require('../models/association');
const { HerramientaTemporal } = require('../models/HerramientaTemporal');
const { MaterialTemporal } = require('../models/MaterialTemporal');
const { Temporal } = require('../models/Temporal');
const { body } = require('express-validator');

const addHerramientaTemporal = async (req, res = response) => {
    const { tipoH, nombreH } = req.body;
    try {
        // const existeHerramienta = await HerramientaTemporal.findOne({
        //     where: {
        //         nombreH: nombreH
        //     }
        // });
        // if (existeHerramienta) {
        //     return res.status(400).json({
        //         msg: 'La herramienta ya existe en el inventario: ' + nombreH
        //     });
        // }
        herramienta = new HerramientaTemporal(req.body);
        await herramienta.save();
        res.status(201).json({
            ok: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const agregarHerramienta = async (req, res = response) => {
    const { tipoH, nombreH } = req.body;
    try {
        // const existeHerramienta = await Herramientas.findOne({
        //     where: {
        //         nombreH: nombreH
        //     }
        // });
        // if (existeHerramienta) {
        //     return res.status(400).json({
        //         msg: 'La herramienta ya existe en el inventario: ' + nombreH
        //     });
        // }
        herramienta = new Herramientas(req.body);
        await herramienta.save();
        res.status(201).json({
            ok: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const editarHerramienta = async (req, res = response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const herramienta = await Herramientas.findByPk(id);

        if (!herramienta) {
            return res.status(400).json({
                msg: 'No existe la herramienta con ese id'
            });
        }

        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar Información'
            });
        } else if (body.rol == 'Administrador') {

            await herramienta.update(body);

            res.json({ ok: true, herramienta });


        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }

}

const listarHerramienta = async (req, res = response) => {
    const herramienta = await Herramientas.findAll({
        include: {
            model: Usuario,
            attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
        }
    });
    res.json({
        ok: true,
        herramienta
    });
}


const eliminarHerramienta = async (req, res = response) => {

    const { id } = req.params;
    const { body } = req;

    // const [ body ] = req;

    try {

        const herramienta = await Herramientas.findByPk(id);

        if (!herramienta) {
            return res.status(400).json({
                msg: 'No existe la herramienta con ese id'
            });
        }

        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para eliminar'
            });
        } else if (body.rol == 'Administrador') {
            await herramienta.destroy();
            res.json({ ok: true, herramienta });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const addTemporal = async (req, res = response) => {
    const { tipoM, nombre } = req.body;
    try {
        // const existeTemporal = await Temporal.findOne({
        //     where: {
        //         nombre: nombre
        //     }
        // });
        // if (existeTemporal) {
        //     return res.status(400).json({
        //         msg: 'El registro ya existe en el inventario: ' + nombre
        //     });
        // }
        temporal = new Temporal(req.body);
        await temporal.save();
        res.status(201).json({
            ok: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const agregarMaterial = async (req, res = response) => {
    const { nombreM, role, otroM, } = req.body;
    try {
        // const existeMaterial = await Materiales.findOne({
        //     where: {
        //         nombreM: nombreM
        //     }
        // });
        // if (existeMaterial) {
        //     return res.status(400).json({
        //         msg: 'El Material ya existe en el inventario: ' + nombreM
        //     });
        // }

        if (role == 'servicio social') {
            return res.status(400).json({
                msg: 'Necesitas permiso de Administrador'
            });
        }
        // if(material.tipoM == ''){
        //     material.tipoM = 'AAAAA'
        // }
        if (role == 'Administrador') {

            material = new Materiales(req.body);
            await material.save();
            res.status(201).json({
                ok: true
            })
        }
        //VALIDACION DE SERVICIO SOCIAL Y ADMIN AL DAR DE ALTA



    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const editarMaterial = async (req, res = response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const material = await Materiales.findByPk(id);

        if (!material) {
            return res.status(400).json({
                msg: 'No existe el material con ese id'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar Información'
            });
        } else if (body.rol == 'Administrador' && body.tipoDesc == '') {
            await material.update(body);
            // if (body.tipoDesc == 'mantenimiento') {
            // body.cantidadM = body.cantidadM - body.descuento;
            // } 
            // else if(body.tipoDesc == ''){
            //     await material.update(body);
            // }
            // ok: true,
            res.json({ ok: true, material });
        } else if (body.rol == 'Administrador' && body.tipoDesc == 'mantenimiento') {
            body.cantidadM = body.cantidadM - body.descuento;
            await material.update(body);
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }

}
const editarTemporal = async (req, res = response) => {
    const { idT } = req.params;
    const { body } = req;
    // const {estado} = req.body;
    try {
        const temporal = await Temporal.findByPk(idT);
        if (!temporal) {
            return res.status(400).json({
                msg: 'No existe el registro con ese id'
            });
        }
        if (body.role == 'servicio social' || body.role == '') {
            return res.status(400).json({
                msg: 'Necesitas permiso de Administrador'
            });
        } else if (body.role == 'Administrador') {
            // body.id=''
            body.estado = 'Aprobado'
            await temporal.update(body);
            // ok: true,
            res.json({ ok: true, temporal });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }

}

const listarMaterial = async (req, res = response) => {

    const material = await Materiales.findAll({
        include: {
            model: Usuario,
            attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
        }
    });

    res.json({
        ok: true,
        material,
    });
}

const listarTemporal = async (req, res = response) => {
    const temporal = await Temporal.findAll({
        include: {
            model: Usuario,
            attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
        }
    });
    res.json({
        ok: true,
        temporal,
    });
}




const eliminarMaterial = async (req, res = response) => {

    const { id } = req.params;
    const { body } = req;

    // const [ body ] = req;

    try {

        const material = await Materiales.findByPk(id);

        if (!material) {
            return res.status(400).json({
                msg: 'No existe el material con ese id'
            });
        }

        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para eliminar'
            });
        } else if (body.rol == 'Administrador') {
            await material.destroy();
            res.json({ ok: true, material });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }

}

const agregarEquipo = async (req, res = response) => {

    const { nombreEquio } = req.body;

    try {

        // const existeEquipo = await Equipos.findOne({
        //     where: {
        //         nombreEquio: nombreEquio
        //     }
        // });

        // if (existeEquipo) {
        //     return res.status(400).json({
        //         msg: 'El equipo ya se encuentra registrado: ' + nombreEquio
        //     });
        // }
        equipo = new Equipos(req.body);

        await equipo.save();
        res.status(201).json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }

}

const bajaEquipoAdd = async (req, res = response) => {
    const { body } = req;
    try {
        body.estadoEquipo = 'Obsoleto'
        equipoB = new bajasequipos(body);
        await equipoB.save();
        res.status(201).json({
            ok: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }

}

const editarEquipo = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const equipo = await Equipos.findByPk(id);
        if (!equipo) {
            return res.status(400).json({
                msg: 'El equipo no existe en el inventario con ese id'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar Información'
            })
        } else if (body.rol == 'Administrador') {
            await equipo.update(body);
            res.json({
                ok: true,
                equipo
            });
        }
        // console.log('BODY SERER', body)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const eliminarEquipo = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    // body.rol = 'Administrador'
    try {
        const equipo = await Equipos.findByPk(id);
        const equipoDel = await bajasequipos.findByPk(id);
        if (!equipo) {
            return res.status(400).json({
                msg: 'No existe equipo con ese identificador'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para eliminar'
            });
        } else if (body.rol == 'Administrador') {
            await equipo.destroy();
            res.json({
                ok: true,
                equipo
            });
        }
        console.log('SERVER', body);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const listarEquipos = async (req, res = response) => {
    const equipo = await Equipos.findAll({
        include: {
            model: Usuario,
            attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
        }
    });
    res.json({
        ok: true,
        equipo
    });
}

const listarEquipBajas = async (req, res = response) => {
    const equipo = await bajasequipos.findAll({
        include: {
            model: Usuario,
            attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
        }
    });
    res.json({
        ok: true,
        equipo
    });

}

module.exports = {
    agregarHerramienta,
    editarHerramienta,
    listarHerramienta,
    eliminarHerramienta,
    agregarMaterial,
    editarMaterial,
    listarMaterial,
    eliminarMaterial,
    agregarEquipo,
    editarEquipo,
    eliminarEquipo,
    listarEquipos,
    bajaEquipoAdd,
    listarEquipBajas,
    addHerramientaTemporal,
    // addMaterialTemporal,
    listarTemporal,
    addTemporal,
    editarTemporal
}