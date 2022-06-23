const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { addHerramientaTemporal } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);


// router.get('/', listarHerramienta);

router.post('/', addHerramientaTemporal);

// router.put('/:id', editarHerramienta);

// router.delete('/:id', eliminarHerramienta);


module.exports = router;