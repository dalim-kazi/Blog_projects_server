const {
  userSignupService,
  userSignInService,
} = require("../../Services/Auth.Service/auth.service");

// signUp
const UserSignUpController = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await userSignupService(userInfo);
    return res.status(201).send(result);
  } catch (error) {
    return next(error, req, res);
  }
};

// signIn

const UserSignInController = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await userSignInService(userInfo);
    return res.status(200).send(result);
  } catch (error) {
      return next(error,req,res)
  }
};

module.exports = {
    UserSignUpController,
    UserSignInController
};
