const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Company = require('../models/company');
const Method = require('../models/method');

// Get tasks for a specific company
router.get('/company/:companyId', async (req, res) => {
  try {
    const tasks = await Task.find({ companyId: req.params.companyId }).populate('methodId companyId');
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks', details: err });
  }
});

// Get All tasks

router.get('/',async (req,res)=>{
  try {
    const tasks = await Task.find().populate('methodId companyId');
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks', details: err });
  }
})

// Add a new task
router.post('/', async (req, res) => {
  const { companyId, methodId, date, completed , notes } = req.body;
  try {
    const task = new Task({ companyId, methodId, date, completed,notes });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task', details: err });
  }
});

// Mark a task as completed
router.put('/:id/complete', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Failed to complete task', details: err });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task', details: err });
  }
});

module.exports = router;
