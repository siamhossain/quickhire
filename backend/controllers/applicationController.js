const Application = require("../models/Application");
const Job = require("../models/Job");
const { isValidEmail, isValidURL } = require("../utils/validators");

exports.createApplication = async (req, res) => {
  try {
    const { job_id, name, email, resume_link, cover_note } = req.body;

    if (!job_id || !name || !email || !resume_link) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (!isValidURL(resume_link)) {
      return res.status(400).json({ success: false, message: "Invalid resume URL" });
    }

    const jobExists = await Job.findById(job_id);

    if (!jobExists) {
      return res.status(404).json({ success: false, message: "Job does not exist" });
    }

    const application = await Application.create({
      job_id,
      name,
      email,
      resume_link,
      cover_note
    });

    res.status(201).json({ success: true, data: application });
  } catch {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};