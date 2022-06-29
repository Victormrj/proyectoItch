const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { crearPersonal,editarPersonal,eliminarPersonal,listarPersonal } = require('../controllers/personal');

const router = Router();
router.use(validarJWT);

router.get('/',listarPersonal);
router.post('/', crearPersonal);
router.put('/:id', editarPersonal);
router.delete('/:id', eliminarPersonal);

module.exports = router;