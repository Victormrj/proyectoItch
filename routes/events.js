/* 
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
// const { getUser, crearUser, actualizarUser, borrarUser } = require('../controllers/events');
const { crearUsuario, editarUsuario, eliminarUsuarios, obtenerUsuarios,obtenerUsuario } = require('../controllers/usuarios');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();
//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);
// Obtener usuarios
router.get('/', obtenerUsuarios);

router.get('/:id',obtenerUsuario);

//Crear un nuevo usuario
router.post('/',
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
    crearUsuario);

//Actualizar un usuario
router.put('/:id', editarUsuario);
// router.put('/:id',editarInfoUser);

//Borrar un usuario
router.delete('/:id', eliminarUsuarios);

module.exports = router;



