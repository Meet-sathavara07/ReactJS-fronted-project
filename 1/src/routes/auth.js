const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key';

// Signup Route
router.post('/:role/signup', async (req, res) => {
  const { username, password } = req.body;
  const { role } = req.params;

  try {
    // Check for userType
    if (!['CA', 'Client'].includes(role)) {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    const existingUser = await User.findOne({ username, userType: role });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password, userType: role });
    
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

// Login Route
router.post('/:role/login', async (req, res) => {
  const { username, password } = req.body;
  const { role } = req.params;

  try {
    // Check for userType
    if (!['CA', 'Client'].includes(role)) {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    const user = await User.findOne({ username, userType: role });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id, userType: user.userType }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

module.exports = router;
