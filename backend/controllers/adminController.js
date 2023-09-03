const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models/admin'); 
const secretKey = 'mysecretpassword123';

// Admin login
exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ where: { username } });

    // If admin not found or password doesn't match, return error
    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ adminId: admin.id }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Middleware to authenticate admin
exports.authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token missing.' });
  }

  try {
    // Verify the JWT token
    const decodedToken = jwt.verify(token, secretKey);
    req.adminId = decodedToken.adminId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Access denied. Invalid token.' });
  }
};

// Other admin-related CRUD functions can be implemented here

// Example: Get all admins (requires authentication)
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
