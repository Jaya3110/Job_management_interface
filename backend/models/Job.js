const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, enum: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur'], required: true },
  jobType: { type: String, enum: ['FULLTIME', 'PARTTIME', 'INTERNSHIP', 'CONTRACT'], required: true },
  salaryRange: { 
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  applicationDeadline: { type: Date, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema); 