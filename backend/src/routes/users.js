const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register new user
router.post('/register', async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const user = new User(req.body);
    await user.save();

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '24h' }
    );

    // Return user data (excluding password) and token
    const userObject = user.toObject();
    delete userObject.password;
    
    res.status(201).json({
      message: 'Registration successful',
      user: userObject,
      token
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isValidPassword = await user.comparePassword(req.body.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '24h' }
    );

    // Return user data (excluding password) and token
    const userObject = user.toObject();
    delete userObject.password;

    res.json({
      message: 'Login successful',
      user: userObject,
      token
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    // Note: This route should be protected with authentication middleware
    // For testing purposes, we'll use a user ID from the query
    const user = await User.findById(req.query.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 