const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController.js');

const categoryController = new CategoryController();

const router = Router();

router.get('/peoople', (req, res) => categoryController.getAll(req, res));
router.get('/people/:id', (req, res) => categoryController.getById(req, res));
router.post('people', (req, res) => categoryController.createNew(req, res));
router.put('/people/:id', (req, res) => categoryController.update(req, res));
router.delete('/people/:id', (req, res) => categoryController.delete(req, res));

module.exports = router;