const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { agregarHerramienta,editarHerramienta,eliminarHerramienta,listarHerramienta } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);


router.get('/', listarHerramienta);

router.post('/', agregarHerramienta);

router.put('/:id', editarHerramienta);

router.delete('/:id', eliminarHerramienta);


module.exports = router;