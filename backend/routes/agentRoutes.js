const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');
router.get('/', agentController.getAllAgents);
router.get('/:agentId', agentController.getAgentById);
router.post('/', agentController.createAgent);
router.put('/:agentId', agentController.updateAgent);
router.delete('/:agentId', agentController.deleteAgent);

module.exports = router;
