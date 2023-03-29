const express = require("express");

const scoresController = require("../controllers/scoresController");
const { validateToken } = require("../middlewares/loginMiddleware");

const scoresRouter = express.Router();

scoresRouter.get(
  "/global",
  validateToken,
  scoresController.getAllScoresController
);

scoresRouter.get(
  "/daily",
  validateToken,
  scoresController.getDailyScoresController
);

module.exports = { scoresRouter };
