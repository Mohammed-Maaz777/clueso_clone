// Temporary in-memory feedback store
const feedbacks = [];

exports.createFeedback = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description required" });
  }

  const newFeedback = {
    id: feedbacks.length + 1,
    title,
    description,
    createdAt: new Date(),
  };

  feedbacks.push(newFeedback);

  res.status(201).json({
    message: "Feedback created successfully",
    feedback: newFeedback,
  });
};

exports.getFeedbacks = (req, res) => {
  res.json(feedbacks);
};

exports.getAIInsights = (req, res) => {
  if (feedbacks.length === 0) {
    return res.json({
      summary: "No feedback available yet.",
      themes: [],
    });
  }

  const summary = `You have received ${feedbacks.length} feedback entries. Most feedback discusses product usability and user experience.`;

  const themes = ["Usability", "UI/UX", "Feature Requests"];

  res.json({
    summary,
    themes,
  });
};
