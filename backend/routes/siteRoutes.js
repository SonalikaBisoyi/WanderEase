const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Define your routes for the 'sites' table
// router.get('/', siteController.getAllSites);
// router.get('/:siteId', siteController.getSiteById);
// router.post('/', siteController.createSite);
// router.put('/:siteId', siteController.updateSite);
// router.delete('/:siteId', siteController.deleteSite);
router.get('/:cityId', siteController.getSitesByCityId);
router.get('/tourism_type/:tourismType', siteController.getSitesByTourismType);
router.put('/updateSite/:siteId', siteController.updateSiteDetails);
//router.get('/:siteId', siteController.getSiteDetails);
module.exports = router;
