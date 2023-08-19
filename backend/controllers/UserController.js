const { User } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class UserController {
  static async registerUser(req, res) {
    console.log('Received a registration request');
    const { username, email, password } = req.body;

    try {
      const user = await User.create({ username, email, password });
      console.log('User registered:', user.toJSON());
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  }

  static async loginUser(req, res) {
    const { username, password } = req.body;
    console.log('Received a registration request');

    try {
      // Find the user by username
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create a JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET); 

      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  }
}

module.exports = UserController;
