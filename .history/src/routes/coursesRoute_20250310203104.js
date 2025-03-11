const { Router } = require('express');
const CourseContrller = require('../controllers/CourseContrller.js');

const courseController = new CategoryController();

const router = Router();

router.get('/categories', (req, res) => categoryController.getAll(req, res));
router.get('/categories/:id', (req, res) => categoryController.getById(req, res));
router.post('categories', (req, res) => categoryController.createNew(req, res));
router.put('/categories/:id', (req, res) => categoryController.update(req, res));
router.delete('/categories/:id', (req, res) => categoryController.delete(req, res));

module.exports = router;