const express = require('express');
const router = express.Router();
const singleSiteController = require('../controllers/singleSiteController');

// Route to get details of a single site
router.get('/site/ssite/:siteId', singleSiteController.getSingleSiteDetails);

module.exports = router;
