const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { addMaterialTemporal } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);


// router.get('/', listarHerramienta);

router.post('/', addMaterialTemporal);

// router.put('/:id', editarHerramienta);

// router.delete('/:id', eliminarHerramienta);


module.exports = router;