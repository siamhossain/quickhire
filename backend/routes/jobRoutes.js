const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getSingleJob);
router.get("/featured", jobController.getFeaturedJobs);
router.get("/latest", jobController.getLatestJobs);

router.post("/", jobController.createJob);
router.delete("/:id", jobController.deleteJob);
router.put("/:id", jobController.updateJob);

module.exports = router;