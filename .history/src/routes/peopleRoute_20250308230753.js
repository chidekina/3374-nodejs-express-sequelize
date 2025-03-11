const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');

const PersonController

const router = Router();

router.get('/peoople', PersonController.getAll);

module.exports = router;