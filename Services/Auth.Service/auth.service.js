const userModel = require("../../Model/UserModel/UserModel");

const userSignupService = async (userInfo) => {
  try {
    const { userName, email, password } = userInfo;
    const model = await userModel.create({ userName, email, password });
    return model;
  } catch (error) {
    console.error("Error occurred during user signup:", error);
    throw error;
  }
};


module.exports =userSignupService