/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { loginUsuario, revalidarToken } = require('../controllers/auth');
const { crearUsuario, editarUsuario } = require('../controllers/usuarios');
const { getUsuarios } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/newUser',
    [//middlewares
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellidoP', 'El apellido paterno es obligatorio').not().isEmpty(),
        check('apellidoM', 'El apellido materno es obligatorio').not().isEmpty(),
        check('numControl', 'El numero de control es obligatorio').not().isEmpty(),
        check('sexo', 'El campo genero es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 6 caracteres').isLength({ min: 6 }),
        check('rol', 'El rol es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearUsuario
);

router.put(
    '/editUser/:id',
    editarUsuario
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;