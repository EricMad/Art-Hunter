const Joi = require("joi");

const validate = (user, creatMod) => {
  const mode = creatMod ? "required" : "optional";

  const result = Joi.object({
    username: Joi.string().min(2).max(60).presence(mode),
    email: Joi.string().min(2).max(60).presence(mode),
    hashedPassword: Joi.string().min(0).presence(mode),
  })
    .required()
    .min(1)
    .validate(user, { abortEarly: false }).error;
  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));

    return { errorCount: result.details.length, errorMessages };
  }

  return false;
};

module.exports = { validate };
