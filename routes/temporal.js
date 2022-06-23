const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { listarTemporal,addTemporal, editarTemporal } = require('../controllers/inventario')
// const { addHerramientaTemporal } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);


// router.get('/', listarHerramienta);

router.get('/', listarTemporal);

router.post('/', addTemporal);

router.put('/:idT', editarTemporal);

// router.delete('/:id', eliminarHerramienta);


module.exports = router;