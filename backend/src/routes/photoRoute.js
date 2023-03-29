const express = require("express");

const photosController = require("../controllers/photoController");
const { validateToken } = require("../middlewares/loginMiddleware");

const photoRouter = express.Router();

photoRouter.post("/submit", validateToken, photosController.photoValidator);
photoRouter.get("/all", validateToken, photosController.allPictures);
photoRouter.get("/you", validateToken, photosController.allPicturesByUserId);

module.exports = { photoRouter };
