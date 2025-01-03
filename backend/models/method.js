const mongoose = require('mongoose');

const methodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  sequenceOrder: { type: Number, required: true },
  mandatory: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Method', methodSchema);
