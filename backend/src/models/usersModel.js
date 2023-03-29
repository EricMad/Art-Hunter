const { db } = require("./db");

async function getAll() {
  const [rows] = await db.query("SELECT * FROM user");
  return rows;
}

async function getOne(id) {
  const [rows] = await db.query("SELECT * FROM user WHERE id = ?", [id]);
  return rows[0];
}

async function getByName(username) {
  const [rows] = await db.query("SELECT * FROM user WHERE username = ?", [
    username,
  ]);
  return rows[0];
}

async function insertOne(user) {
  const { username, email, hashedPassword } = user;

  const [result] = await db.query(
    "INSERT INTO user (username, email, hashedPassword) VALUES (?, ?, ?)",
    [username, email, hashedPassword]
  );

  return result.insertId;
}

module.exports = { getAll, getOne, insertOne, getByName };
