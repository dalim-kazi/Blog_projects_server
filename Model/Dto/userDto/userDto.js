const Joi = require("joi");

const users = Joi.object().keys({
  userName: Joi.string().min(5).max(50).required(),
  email: Joi.string().required().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().min(8).max(20).required(),
});

const userValidate = (data) => {
  const result = users.validate(data);
  return result;
};

module.exports = userValidate;
