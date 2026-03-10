const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  try {
    const { search, location, category } = req.query;

    let filter = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    if (location) {
      filter.location = { $regex: location, $options: "i" };
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

exports.createJob = async (req, res) => {
  try {
    const { title, company, location, category, description, featured } = req.body;

    if (!title || !company || !location || !category || !description) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const job = await Job.create({
      title,
      company,
      location,
      category,
      description,
      featured
    });

    res.status(201).json({ success: true, data: job });
  } catch {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, message: "Job deleted" });
  } catch {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const { title, company, location, category, description, featured } = req.body;

    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { title, company, location, category, description, featured },
      { new: true, runValidators: true }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      data: job,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getFeaturedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(8);
    
    res.json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getLatestJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .sort({ createdAt: -1 })
      .limit(8);

    res.json({
      success: true,
      data: jobs,
    });
  } catch {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};