// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/UserController.js');
// const User = require('../models/user.js');
// // Route for user registration
// router.get('/register', UserController.registerUser);
// router.post('/register', UserController.registerUser);

// // Route for user login
// router.post('/login', UserController.loginUser);
// router.get('/login', UserController.loginUser);

// module.exports = router;
// routes/auth.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const User = require('../models/user'); // Import the User model

// Route for user registration
router.post('/register', UserController.registerUser);

// Route for user login
router.post('/login', UserController.loginUser);

module.exports = router;

