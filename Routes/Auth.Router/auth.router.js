const express = require("express");
const { API } = require("../../util/content");
const UserSignUpController = require("../../Controller/AuthController/auth.controller");
const handleJoiValidate = require("../../middlewares/handleJoiValidate");
const userValidate = require("../../Model/Dto/userDto/userDto");
const authRouter = express.Router();
// signUp
authRouter.post(
    API.API_CONTEXT + API.SIGNUP,
    handleJoiValidate(userValidate),
    UserSignUpController
);

module.exports = authRouter;