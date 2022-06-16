const { Usuario } = require('../models/Usuario');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const editarInfoUser = async (req, res = response) => {
    const { id } = req.params;
    const { password, ...resto } = req.body;
    try {
        if (password) {           
            const salt = bcrypt.genSaltSync();
            resto.password = bcrypt.hashSync(password, salt);
        }

        const usuario = await Usuario.findByPk(id);
        await usuario.update(resto);

        res.json({ ok: true, usuario });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

module.exports = {
    editarInfoUser
}