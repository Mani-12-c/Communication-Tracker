const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: String,
  linkedinProfile: String,
  emails: [String],
  phoneNumbers: [String],
  comments: String,
  communicationPeriodicity: { type: Number, default: 14 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', companySchema);
