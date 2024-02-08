const userModel = require("../../Model/UserModel/UserModel");
const { NotFound } = require("../../util/error");

const userSignupService = async (userInfo) => {
  try {
    const { userName, email, password } = userInfo;
    const model = await userModel.create({ userName, email, password });
    return model;
  }
  catch (error) {
    throw new NotFound("Unable to post user")
  }
};


module.exports =userSignupService