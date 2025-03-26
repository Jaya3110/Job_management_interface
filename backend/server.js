const express = require("express");
const { getJobs, createJob, updateJobStatus, getJobById } = require("../controllers/jobController");
const router = express.Router();

router.route("/").get(getJobs).post(createJob);
router.route("/:id").get(getJobById);
router.route("/:id/status").patch(updateJobStatus);

module.exports = router;
