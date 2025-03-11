const { Router } = require('express');
const CourseContrller = require('../controllers/CourseContrller.js');

const courseController = new CourseContrller();

const router = Router();

router.get('/courses', (req, res) => courseController.getAll(req, res));
router.get('/courses/:id', (req, res) => courseController.getById(req, res));
router.post('courses', (req, res) => courseController.createNew(req, res));
router.put('/courses/:id', (req, res) => courseController.update(req, res));
router.delete('/courses/:id', (req, res) => courseController.delete(req, res));

module.exports = router;