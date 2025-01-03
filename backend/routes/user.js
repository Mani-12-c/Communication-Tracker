const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

const SECRET_KEY = "secret"; // Replace with a secure secret key

// User Registration
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register user', details: err });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    // console.log(user)
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY);
    // console.log(token)

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Failed to login', details: err });
  }
});

// Get User Profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id, { password: 0 }); // Exclude password
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile', details: err });
  }
});

module.exports = router;
