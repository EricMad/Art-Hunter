const { verify, decode } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) {
    res.status(401).json({ error: "User not Authenticated!" });
    return;
  }

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);

    if (validToken) {
      // we create a variable that stores the user info (ie: user's id)
      req.authenticated = true;
      req.user = decode(accessToken);

      next();
    }
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

module.exports = { validateToken };
