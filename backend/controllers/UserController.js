// const { sequelize } = require('../db'); // Update the path if needed
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User=require('../models/user')
// class UserController {
//   static async registerUser(req, res) {
//     const { username, email, password } = req.body;
//     console.log(req.body); 
//     console.log('Received registration data:', username, email, password);

//     try {
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Create a new user
//       const user = await User.create({ username, email, password: hashedPassword });
//       console.log('User registered:', user.toJSON());

//       res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//       console.error('Registration error:', error);
//       res.status(500).json({ error: 'Registration failed' });
//     }
//   }

//   static async loginUser(req, res) {
//     const { email, password } = req.body;
//     console.log(req.body); 

//     try {
//       // Find the user by username
//       const user = await User.findOne({ where: { email } });

//       if (!user) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }

//       // Compare the provided password with the hashed password
//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }

//       // Create a JWT token
//       const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

//       res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ error: 'Login failed' });
//     }
//   }
// }

// module.exports = UserController;

// controllers/UserController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../db'); // Import the sequelize instance
const User = require('../models/user')(sequelize); // Import the User model
console.log("hi",User);
// Register a new user
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record in the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'email Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'pass Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

