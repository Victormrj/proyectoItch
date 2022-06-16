const { Usuario } = require('../models/Usuario');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');



const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;
    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con este correo: ' + email
            });
        }
        if (body.role == 'servicio social' || body.rol == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para Crear Usuarios'
            });
        } else if (body.role == 'Administrador') {
            usuario = new Usuario(req.body);
            //Encriptar contraseña
            const salt = bcrypt.genSaltSync();
            usuario.password = bcrypt.hashSync(password, salt);

            //Guardar datos en la BD
            await usuario.save();

            //Generar el  JWT
            const token = await generarJWT(usuario.id, usuario.nombre, usuario.rol);

            res.status(201).json({
                ok: true,
                id: usuario.id,
                nombre: usuario.nombre,
                password: usuario.password,
                token
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}

const editarUsuario = async (req, res = response) => {
    const { id } = req.params;
    const { password, ...resto } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con ese id: ' + id
            });
        }
        if (password) {
            const salt = bcrypt.genSaltSync();
            resto.password = bcrypt.hashSync(password, salt);
        }

        if (resto.rolUsu == 'servicio social' || resto.rolUsu == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar información de los usuarios'
            });
        } else if (resto.rolUsu == 'Administrador') {
            await usuario.update(resto);
            res.json({ ok: true, usuario });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
}
const obtenerUsuario = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;
    const usuario = await Usuario.findByPk(id);
    res.json({ ok: true, usuario });
}

const eliminarUsuarios = async (req, res = response) => {
    const { id } = req.params;
    const { estado, ...resto } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con ese id: ' + id
            });
        }
        if (estado) {
            // const salt = bcrypt.genSaltSync();
            resto.estado = 'Baja'
        }

        if (resto.rolUsu == 'servicio social' || resto.rolUsu == '') {
            return res.status(400).json({
                msg: 'No tienes permiso para editar información de los usuarios'
            });
        } else if (resto.rolUsu == 'Administrador') {
            await usuario.update(resto);
            res.json({ ok: true, usuario });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el ADMIN',
        });
    }
   

}

const obtenerUsuarios = async (req, res = response) => {
    const usuarios = await Usuario.findAll();
    res.json({ ok: true, usuarios });
}




module.exports = {
    crearUsuario,
    editarUsuario,
    eliminarUsuarios,
    obtenerUsuarios,
    obtenerUsuario,
    // editarInfoUser
}