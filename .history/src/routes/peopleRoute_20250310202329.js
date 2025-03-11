const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');

const personController = new PersonController();

const router = Router();

router.get('/peoople', (req, res) => personController.getAll(req, res));
router.get('/people/:id', (req, res) => personController.getById(req, res));
router.post('people', (req, res) => personController.createNew(req, res));
router.put()

module.exports = router;