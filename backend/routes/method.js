const express = require('express');
const router = express.Router();
const Method = require('../models/method');

// Get all communication methods
router.get('/', async (req, res) => {
  try {
    const methods = await Method.find();
    res.status(200).json(methods);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch methods' });
  }
});

// Add a new communication method
router.post('/', async (req, res) => {
  const { name, description, sequenceOrder, mandatory } = req.body;
  try {
    const method = new Method({ name, description, sequenceOrder, mandatory });
    await method.save();
    res.status(201).json(method);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create method', details: err });
  }
});

// Update an existing method
router.put('/:id', async (req, res) => {
  try {
    const method = await Method.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(method);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update method', details: err });
  }
});

// Delete a method
router.delete('/:id', async (req, res) => {
  try {
    await Method.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Method deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete method', details: err });
  }
});

module.exports = router;
