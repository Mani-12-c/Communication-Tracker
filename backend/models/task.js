const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  methodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Method', required: true },
  date: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
