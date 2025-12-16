const express = require("express");
const router = express.Router();

const feedbackController = require("../controllers/feedbackController");

router.post("/", feedbackController.createFeedback);
router.get("/", feedbackController.getFeedbacks);
router.get("/ai/summary", feedbackController.getAIInsights);


module.exports = router;
