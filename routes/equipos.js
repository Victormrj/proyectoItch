const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { agregarEquipo, listarEquipos, 
    editarEquipo, eliminarEquipo } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);



router.get('/', listarEquipos);

router.post('/', agregarEquipo);

router.put('/:id', editarEquipo);

router.delete('/:id', eliminarEquipo);


module.exports = router;