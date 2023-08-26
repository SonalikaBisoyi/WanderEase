const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../db'); 
const User = require('../models/user')(sequelize); 
console.log("hi",User);
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
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
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'email Invalid credentials' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'pass Invalid credentials' });
    }

    
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

