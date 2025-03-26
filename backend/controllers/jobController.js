const Job = require('../models/Job');

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new job
const createJob = async (req, res) => {
  const { title, company, location, jobType, salaryRange, applicationDeadline, description, status } = req.body;

  try {
    const job = new Job({
      title,
      company,
      location,
      jobType,
      salaryRange,
      applicationDeadline,
      description,
      status: status || 'DRAFT'
    });

    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update job status
const updateJobStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const job = await Job.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get job by ID
const getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
  updateJobStatus,
  getJobById
}; 