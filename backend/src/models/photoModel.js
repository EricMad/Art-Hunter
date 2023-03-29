const { db } = require("./db");

async function insertImg(imgName, createdAt, score, userId) {
  const [result] = await db.query(
    "INSERT INTO photo (imgName, createdAt, score, userId) VALUES (?, ?, ?, ?)",
    [imgName, createdAt, score, userId]
  );

  return result;
}

async function getAllPictures() {
  const [result] = await db.query(
    "SELECT photo.createdAt, photo.imgName, photo.id, user.username FROM photo INNER JOIN user ON photo.userId=user.id ORDER BY photo.createdAt DESC"
  );
  return result;
}

async function getPicturesByUserId(userId) {
  const [rows] = await db.query(
    "SELECT * FROM photo WHERE userId=? ORDER BY photo.createdAt DESC",
    [userId]
  );
  return rows;
}

/* --------------------------- About the scores ------------------------------ */
async function getAllScores() {
  const [rows] = await db.query(
    "SELECT u.id, username, COUNT(p.id) AS count, SUM(p.score) AS score FROM user AS u INNER JOIN photo AS p ON p.userId=u.id GROUP BY u.id ORDER BY score DESC"
  );
  return rows;
}

async function getDailyScores() {
  const [rows] = await db.query(
    "SELECT u.id, username, COUNT(p.id) AS count, SUM(p.score) AS score FROM user AS u INNER JOIN photo AS p ON p.userId=u.id WHERE p.createdAt=CURDATE() GROUP BY u.id ORDER BY score DESC"
  );
  return rows;
}

module.exports = {
  insertImg,
  getAllScores,
  getAllPictures,
  getPicturesByUserId,
  getDailyScores,
};
