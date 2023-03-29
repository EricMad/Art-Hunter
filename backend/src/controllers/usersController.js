const { sign } = require("jsonwebtoken");
const usersModel = require("../models/usersModel");
const usersValidator = require("../validators/users.validator");

async function list(req, res) {
  const users = await usersModel.getAll();
  res.json(users);
}

async function create(req, res) {
  try {
    if (!req.body || usersValidator.validate(req.body, true).errorCount > 0) {
      res.status(400).json({ error: "Invalid user data" });
      return;
    }
    const insertId = await usersModel.insertOne(req.body);

    const accessToken = sign(
      { username: req.body.username, email: req.body.email, id: insertId },
      process.env.JWT_SECRET
    );

    res.status(201).json({
      token: accessToken,
      username: req.body.username,
      email: req.body.email,
      id: insertId,
    });
  } catch (err) {
    res.status(400).json({ error: "user already exists" });
  }
}

async function get(req, res) {
  try {
    if (!req.params.id) {
      res.status(400);
      return;
    }
    const user = await usersModel.getOne(req.params.id);

    if (!user) {
      res.status(404);
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(400).json("problems retrieving database");
  }
}

async function update(req, res) {
  if (!req.body || usersValidator.validate(req.body, false).errorCount > 0) {
    res.sendStatus(400);
    return;
  }

  const affectedRows = await usersModel.updateOne(req.params.id, req.body);

  if (affectedRows === 0) {
    res.sendStatus(404);
    return;
  }

  res.sendStatus(204);
}

async function remove(req, res) {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const affectedRows = await usersModel.deleteOne(req.params.id);

  if (affectedRows === 0) {
    res.sendStatus(404);
    return;
  }

  res.sendStatus(204);
}

module.exports = { list, create, get, update, remove };
