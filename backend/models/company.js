const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  linkedinProfile: { type: String, required: false },
  emails: { type: [String], required: true },
  phoneNumbers: { type: [String], required: true },
  comments: { type: String, required: false },
  communicationPeriodicity: { type: String, required: false },
});

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

module.exports = Company;
