const userModel = require("../../Model/UserModel/UserModel");
const { NotFound } = require("../../util/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// signup
const userSignupService = async (userInfo) => {
  try {
    const { userName, email, password } = userInfo;
    const hashPassword = await bcrypt.hashSync(password, 10);
    const model = await userModel.create({
      userName,
      email,
      password: hashPassword,
    });
    return model;
  } catch (error) {
    throw new NotFound("Unable to post user");
  }
};
// signIn
const userSignInService = async (userInfo) => {
  try {
    const { email, password } = userInfo;
    const user = await userModel.findOne({ email: email });
    if (user) {
      const matchPassword = await bcrypt.compare(password, user.password);
      if (matchPassword) {
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.JWT_TOKEN,
          { expiresIn: "1h" }
        );
        return {
          success: true,
          token: token,
          message: "Authentication successful",
          user: user,
        };
      } else {
        return {
          success: false,
          message: "Incorrect password",
        };
      }
    } else {
      return {
        success: false,
        message: "User not found",
      };
    }
  } catch (error) {
    throw new NotFound("Internal server error");
  }
};
module.exports = {
  userSignupService,
  userSignInService,
};
