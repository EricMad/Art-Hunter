const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const usersModel = require("../models/usersModel");

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await usersModel.getByName(username);

    if (!user) {
      res.status(400).json({ error: "User doesn't exist" });
      return;
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
      res.status(401).json({ error: "Wrong Password" });
      return;
    }

    if (!process.env.JWT_SECRET) {
      res.status(500).json({ error: "JWT_SECRET is not defined" });
      return;
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.JWT_SECRET
    );
    res.status(200).json({ token: accessToken, username, id: user.id });
  } catch (err) {
    res.status(500).json({ error: "An error occured" });
  }
}
module.exports = { login };
