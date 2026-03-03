const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getSingleJob);
router.post("/", jobController.createJob);
router.delete("/:id", jobController.deleteJob);

module.exports = router;