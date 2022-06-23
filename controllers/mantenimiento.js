const { response } = require('express');
// const res = require('express/lib/response');
const { Mantenimientos } = require('../models/Mantenimiento');
const { MaterialUsado } = require('../models/MaterialUsado')
const { Usuario } = require('../models/association');


const nuevoMantenimiento = async (req, res = response) => {
    const { rol } = req.body;
    try {
        if(rol == 'servicio social'){
            return res.status(400).json({
                msg: 'No tienes permiso para editar Información'
            })
        }else if(rol == 'Administrador') {
            mantenimiento = new Mantenimientos(req.body);
            await mantenimiento.save();
            res.status(201).json({
                ok: true,
                msg: 'Mantenimiento agregado con exito'
            });  

        }
        // const existeMantemiento = await Mantenimientos.findOne({
        //     where: {
        //         id: id
        //     }
        // })
        // if (existeMantemiento) {
        //     return res.status(400).json({
        //         msg: 'El mantenimiento ya se encuentra registrado'
        //     });
        // }
     
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const editarMantenimiento = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const mantenimiento = await Mantenimientos.findByPk(id);
        if (!mantenimiento) {
            return res.status(400).json({
                msg: 'El Mantenimiento no esta registrado'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar Información'
            })
        } else if (body.rol == 'Administrador') {
            
            await mantenimiento.update(body);
            res.json({
                ok: true,
                mantenimiento
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const listarMantenimientos = async (req, res = response) => {
    try {
        const mantenimiento = await Mantenimientos.findAll({
            include: {
                model: Usuario,
                attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
            }
        })
        res.json({
            ok: true,
            mantenimiento
        });
    } catch (error) {
        console.log(error)
    }
}

const eliminarMantenimiento = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    // body.rol = 'Administrador'
    try {
        const mantenimiento = await Mantenimientos.findByPk(id);
        if (!mantenimiento) {
            return res.status(400).json({
                msg: 'No existe Mantenimiento con ese identificador'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para eliminar'
            });
        } else if (body.rol == 'Administrador') {
            await mantenimiento.destroy();
            res.json({
                ok: true,
                mantenimiento
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

module.exports = {
    nuevoMantenimiento,
    editarMantenimiento,
    listarMantenimientos,
    eliminarMantenimiento
}