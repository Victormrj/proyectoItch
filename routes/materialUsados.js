const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { nuvoMaterialUsado,editMaterialUsado,listarMaterialUsado,eliminarMaterialUsado } = require('../controllers/materialUsado');

const router = Router();
router.use(validarJWT);



router.get('/', listarMaterialUsado);

router.post('/', nuvoMaterialUsado);

router.put('/:id', editMaterialUsado);

router.delete('/:id', eliminarMaterialUsado);


module.exports = router;