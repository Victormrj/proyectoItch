const { Personal } = require('../models/Personal');
const { response } = require('express');
const { generarJWT } = require('../helpers/jwt');


const crearPersonal = async (req, res = response) => {
    // const { nombre }
    const { body } = req;
    try {

        personal = new Personal(req.body);
        await personal.save();
        res.status(201).json({ ok: true});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const editarPersonal = async (req, res = response) => {
    const { id } = req.params;
    try {
        const personal = await Personal.findByPk(id);
        if (!personal) {
            return res.status(404).json({
                msg: 'No existe personal con ese id: ' + id
            });
        }

        await personal.update(req.body)
        res.json({ ok: true, personal })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const listarPersonal = async (req, res = response) => {
    try {
        const personal = await Personal.findAll();
        res.json({ ok: true, personal });

    } catch (error) {

    }
}
const eliminarPersonal = async (req, res = response) => {
    const { id } = req.params;

    try {

        const personal = await Personal.findByPk(id);
        if (!personal) {
            return res.status(404).json({
                msg: 'No existe personal con ese id: ' + id
            });
        }

        await personal.destroy();
        res.json({ ok: true, personal });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });

    }
}

module.exports = {
    crearPersonal,
    editarPersonal,
    listarPersonal,
    eliminarPersonal

}































