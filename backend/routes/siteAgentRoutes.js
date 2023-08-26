const express = require('express');
const router = express.Router();
const siteAgentController = require('../controllers/siteAgentController');

// Define your routes for the 'site_agents' table
router.get('/', siteAgentController.getAllSiteAgents);
router.post('/', siteAgentController.createSiteAgent);
router.delete('/:siteAgentId', siteAgentController.deleteSiteAgent);

module.exports = router;
