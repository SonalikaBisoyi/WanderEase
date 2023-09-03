const express = require('express');
const router = express.Router();
const NewAgentController = require('../controllers/newAgentController');

// POST route to add a new agent
router.post('/addagent', NewAgentController.addAgent);

// Add more routes for CRUD operations as needed

module.exports = router;
