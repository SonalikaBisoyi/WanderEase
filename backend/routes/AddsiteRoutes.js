const express = require('express');
const router = express.Router();
const AddSiteController = require('../controllers/addsiteController');

// POST route to add a new site
router.post('/addsite', AddSiteController.addSite);
router.delete('/approve/:requestId', AddSiteController.removeApprovedSite);
router.get('/allsites', AddSiteController.getAllSites);
module.exports = router;
