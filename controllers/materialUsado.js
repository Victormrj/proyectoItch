const { response } = require('express');
// const res = require('express/lib/response');
const { Mantenimientos } = require('../models/Mantenimiento');
const { MaterialUsado } = require('../models/MaterialUsado')
const { Usuario } = require('../models/association');
const { Materiales } = require('../models/association')


const nuvoMaterialUsado = async (req, res = response) => {
    try {
        materialUsado = new MaterialUsado(req.body);
        await materialUsado.save();
        res.status(201).json({
            ok: true
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const editMaterialUsado = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const materialUsado = await MaterialUsado.findByPk(id);
        if (!materialUsado) {
            return res.status(400).json({
                msg: 'El Material utilizado no esta registrado'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar Información'
            })
        } else if (body.rol == 'Administrador') {
            await materialUsado.update(body);
            res.json({
                ok: true,
                materialUsado
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const listarMaterialUsado = async (req, res = response) => {
    try {
        const materialUsado = await MaterialUsado.findAll({
            include: {
                model: Materiales,
                attributes: ['tipoM', 'codigoM', 'nombreM']
            }
        })
        res.json({
            ok: true,
            materialUsado
        });
    } catch (error) {
        console.log(error)
    }
}

const eliminarMaterialUsado = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    // body.rol = 'Administrador'
    try {
        const materialUsado = await MaterialUsado.findByPk(id);
        if (!materialUsado) {
            return res.status(400).json({
                msg: 'No existe Material Usado con ese identificador'
            });
        }
        if (body.rol == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para eliminar'
            });
        } else if (body.rol == 'Administrador') {
            await materialUsado.destroy();
            res.json({
                ok: true,
                materialUsado
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
    nuvoMaterialUsado,
    editMaterialUsado,
    listarMaterialUsado,
    eliminarMaterialUsado
}