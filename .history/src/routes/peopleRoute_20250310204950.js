const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');
const EnrollController = require('../controller/.js');

const personController = new PersonController();
const enrollController = new EnrollController();

const router = Router();

router.get('/people', (req, res) => personController.getAll(req, res));
router.get('/people/:id', (req, res) => personController.getById(req, res));
router.post('people', (req, res) => personController.createNew(req, res));
router.put('/people/:id', (req, res) => personController.update(req, res));
router.delete('/people/:id', (req, res) => personController.delete(req, res));

router.post('/people/:studentId/enrollments', (req, res) => enrollController.createNew(req, res));

module.exports = router;