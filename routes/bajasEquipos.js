const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { bajaEquipoAdd, listarEquipBajas } = require('../controllers/inventario');

const router = Router();
router.use(validarJWT);



router.get('/', listarEquipBajas);

router.post('/', bajaEquipoAdd);

// router.put('/:id', editarEquipo);

// router.delete('/:id', eliminarEquipo);


module.exports = router;