const express = require('express');
const router = express.Router();
const popularSitesController = require('../controllers/popularSitesController');

// Route to get all popular sites
router.get('/popular_sites', popularSitesController.getAllPopularSites);

module.exports = router;
