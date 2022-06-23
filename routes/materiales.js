const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { agregarMaterial, editarMaterial, eliminarMaterial, listarMaterial } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);

router.get('/', listarMaterial);

router.post('/', agregarMaterial);

router.put('/:id', editarMaterial);

router.delete('/:id', eliminarMaterial);


module.exports = router;

