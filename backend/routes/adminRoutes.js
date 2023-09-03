const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin login route
router.post('/login', adminController.adminLogin);

// Protected routes that require authentication
router.get('/dashboard', adminController.authenticateAdmin, (req, res) => {
  // This route is protected and requires authentication.
  // You can add your admin dashboard logic here.
  res.status(200).json({ message: 'Admin dashboard' });
});

// Add more routes for managing sites, agents, etc.
// For example:
// router.get('/sites', adminController.authenticateAdmin, adminController.getAllSites);
// router.post('/sites', adminController.authenticateAdmin, adminController.addSite);
// router.put('/sites/:id', adminController.authenticateAdmin, adminController.updateSite);
// router.delete('/sites/:id', adminController.authenticateAdmin, adminController.deleteSite);

// Similarly, you can add routes for managing agents and other functionalities.

module.exports = router;
