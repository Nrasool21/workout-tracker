const path = require("path");

const renderStats = (req, res) => {
  res.send(path.join(__dirname, "../../public/stats.html"));
};

const renderExercise = (req, res) => {
  res.send(path.join(__dirname, "../../public/exercise.html"));
};

const renderHome = (req, res) => {
  res.send(path.join(__dirname, "../../public/index.html"));
};

module.exports = {
  renderStats,
  renderExercise,
  renderHome,
};
