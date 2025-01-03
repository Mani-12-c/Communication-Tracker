const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const authMiddleware = require('../middleware/auth');
const adminOnly = require('../middleware/admin');

// Get all companies (accessible to all authenticated users)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});


// Add a new company (accessible only to admins)
router.post('/', authMiddleware, adminOnly, async (req, res) => {
  // console.log(adminOnly)
  const { name, location, linkedinProfile, emails, phoneNumbers, comments, communicationPeriodicity } = req.body;
  console.log(name)
  try {
    const company = new Company({ name, location, linkedinProfile, emails, phoneNumbers, comments, communicationPeriodicity });
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create company', details: err });
  }
});

// Update a company (accessible only to admins)
router.put('/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update company', details: err });
  }
});

// Delete a company (accessible only to admins)
router.delete('/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete company', details: err });
  }
});

module.exports = router;
