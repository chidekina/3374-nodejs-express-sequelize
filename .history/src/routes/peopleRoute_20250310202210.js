const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');

const personController = new PersonController();

const router = Router();

router.get('/peoople', (req, res) => personController.getAll(req, res));
router.get()

module.exports = router;