const express = require("express");
const { API } = require("../../util/content");
const UserSignUpController = require("../../Controller/AuthController/auth.controller");
const authRouter = express.Router();
// signUp
authRouter.post(
    API.API_CONTEXT + API.SIGNUP,
    UserSignUpController
);

module.exports = authRouter;