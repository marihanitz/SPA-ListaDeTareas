const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

//api/productos
router.post('/', tareaController.crearTarea);

router.get('/', tareaController.obtenerTareas);
router.get('/:id', tareaController.obtenerTarea);
router.put('/:id',tareaController.actualizarTarea);
router.delete('/:id',tareaController.eliminarTarea);


module.exports = router;