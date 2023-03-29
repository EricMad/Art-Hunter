const bcrypt = require("bcrypt");

const hashPassword = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      if (err) {
        res.json({ error: err });
      }
    });
};

module.exports = {
  hashPassword,
};
