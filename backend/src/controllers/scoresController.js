const photoModel = require("../models/photoModel");

async function getAllScoresController(req, res) {
  const allScores = await photoModel.getAllScores();
  res.json(allScores);
}

async function getDailyScoresController(req, res) {
  const dailyScores = await photoModel.getDailyScores();
  res.json(dailyScores);
}

module.exports = { getAllScoresController, getDailyScoresController };
