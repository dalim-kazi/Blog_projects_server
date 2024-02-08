const userSignupService = require("../../Services/Auth.Service/auth.service")


const UserSignUpController = async (req, res,next) => {
    try {
        const userInfo = req.body 
        const result = await userSignupService(userInfo)
        return res.status(201).send(result)
    }
    catch (error) {
        return next(error,req,res)
    }
}

module.exports =UserSignUpController