// const express = require('express');
// const router = express.Router();
// const { getSitesAndAgentsByRegion } = require('../controllers/regionController');

// // GET route to fetch sites and agents by region and city_id
// router.get('/sitesAndAgents/:region/:cityId', getSitesAndAgentsByRegion);

// module.exports = router;
const express = require('express');
const router = express.Router();
const RegionController = require('../controllers/regionController');

// GET route to fetch sites and agents by region and city_id
router.get('/sitesAndAgents/:region/:city', RegionController.getSitesAndAgentsByRegion);

// GET route to fetch city names by region
router.get('/citiesByRegion/:region', RegionController.getCitiesByRegion);

module.exports = router;
