const bcrypt = require('bcryptjs');
const { response } = require('express');
const { body } = require('express-validator');
const { Usuario } = require('../models/Usuario');
// const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({
            where: {
                email: email
            }
        });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe: ' + email
            });
        }
        //Confirmar password
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no valida'
            });
        }
        //Generar JWT
        const token = await generarJWT(usuario.id, usuario.nombre,usuario.apellidoP,usuario.apellidoM,usuario.numControl,usuario.sexo, usuario.rol);
        res.json({
            ok: true,
            id: usuario.id,
            nombre: usuario.nombre,
            apellidoP: usuario.apellidoP,
            apellidoM: usuario.apellidoM,
            numControl: usuario.numControl,
            sexo: usuario.sexo,
            rol:usuario.rol,
            token
        })
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const revalidarToken = async (req, res = response) => {
    const { id, nombre, apellidoP, apellidoM, numControl, sexo, rol } = req;
    //Generar un nuevo JWT y retornarlo
    const token = await generarJWT(id, nombre, apellidoP, apellidoM, numControl,sexo,rol);
    res.json({
        ok: true,
        id,
        nombre,
        apellidoP,
        apellidoM,
        numControl,
        sexo,
        rol,
        token
        // msg: 'renew token'
    });
}
module.exports = {
    loginUsuario,
    revalidarToken
}