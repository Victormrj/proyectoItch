const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { nuevoMantenimiento,listarMantenimientos, editarMantenimiento, eliminarMantenimiento } = require('../controllers/mantenimiento');

const router = Router();
router.use(validarJWT);



router.get('/', listarMantenimientos);

router.post('/', nuevoMantenimiento);

router.put('/:id', editarMantenimiento);

router.delete('/:id', eliminarMantenimiento);


module.exports = router;