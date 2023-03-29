const express = require("express");

const { hashPassword } = require("../middlewares/authMiddleware");
const usersController = require("../controllers/usersController");
const { validateToken } = require("../middlewares/loginMiddleware");

const authenticationController = require("../controllers/authenticationController");

const usersRouter = express.Router();

// ---------------------------------------------------- Public Routes ------------------------------------------------ //
usersRouter.post("/login", authenticationController.login);

// ---------------------------------------------------- Protected Routes ------------------------------------------------ //

usersRouter.get("/", validateToken, usersController.list);
usersRouter.post("/register", hashPassword, usersController.create);
usersRouter.get("/:id", validateToken, usersController.get);

module.exports = { usersRouter };
