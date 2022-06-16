/* 
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
// const { getUser, crearUser, actualizarUser, borrarUser } = require('../controllers/events');
const { editarInfoUser } = require('../controllers/cuentaUser');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();
//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

router.put('/:id',editarInfoUser);

module.exports = router;



