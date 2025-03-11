const { Router } = require('express');
const CourseContrller = require('../controllers/CourseContrller.js');

const courseController = new CourseContrller();

const router = Router();

router.get('/categories', (req, res) => courseController.getAll(req, res));
router.get('/categories/:id', (req, res) => courseController.getById(req, res));
router.post('categories', (req, res) => courseController.createNew(req, res));
router.put('/categories/:id', (req, res) => courseController.update(req, res));
router.delete('/categories/:id', (req, res) => courseController.delete(req, res));

module.exports = router;