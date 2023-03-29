const { Router } = require("express");

const { usersRouter } = require("./usersRoute");
const { photoRouter } = require("./photoRoute");
const { scoresRouter } = require("./scoresRoute");

const router = new Router();

router.use("/users", usersRouter);
router.use("/photo", photoRouter);
router.use("/scores", scoresRouter);

module.exports = { router };
