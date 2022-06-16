const { response } = require('express');
// const { DataTypes } = require('sequelize/types');
const { Herramientas } = require('../models/Herramientas');
const { Materiales } = require('../models/Materiales');
const { Equipos } = require('../models/Equipos');
const { bajasequipos } = require('../models/EquiposDeleted');
// const { Usuario } = require('../models/Usuario');

const { Usuario } = require('../models/association');
const { body } = require('express-validator');



const agregarHerramienta = async (req, res = response) => {

    const { tipoH, nombreH } = req.body;

    try {

        const existeHerramienta = await Herramientas.findOne({
            where: {
                nombreH: nombreH
            }
        });

        if (existeHerramienta) {
            return res.status(400).json({
                msg: 'La herramienta ya existe en el inventario: ' + nombreH
            });
        }

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


const agregarMaterial = async (req, res = response) => {

    const { tipoM, nombreM } = req.body;

    try {

        const existeMaterial = await Materiales.findOne({
            where: {
                nombreM: nombreM
            }
        });

        if (existeMaterial) {
            return res.status(400).json({
                msg: 'El Material ya existe en el inventario: ' + nombreM
            });
        }

        material = new Materiales(req.body);

        await material.save();
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
        } else if (body.rol == 'Administrador') {
            await material.update(body);
            // ok: true,
            res.json({ ok: true, material });
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

        const existeEquipo = await Equipos.findOne({
            where: {
                nombreEquio: nombreEquio
            }
        });

        if (existeEquipo) {
            return res.status(400).json({
                msg: 'El equipo ya se encuentra registrado: ' + nombreEquio
            });
        }
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
                msg: 'El equipono existe en el inventario con ese id'
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
    listarEquipBajas
}