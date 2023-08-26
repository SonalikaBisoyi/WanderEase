const express = require('express');
const router = express.Router();
const stateCityController = require('../controllers/stateCityController');

router.get('/states/regions', stateCityController.getStatesByRegions);

module.exports = router;
