const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  try {
    const { search, location, category } = req.query;

    let filter = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    if (location) {
      filter.location = location;
    }

    if (category) {
      filter.category = category;
    }

    const jobs = await Job.find(filter).sort({ createdAt: -1 });

    res.json({ success: true, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.getSingleJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, data: job });
  } catch {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};



