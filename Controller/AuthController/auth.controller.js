const userSignupService = require("../../Services/Auth.Service/auth.service")


const UserSignUpController = async (req, res) => {
    try {
        const userInfo = req.body 
        const result = await userSignupService(userInfo)
        return res.status(201).send(result)
    }
    catch (error) {
        console.log(error)
    }
}

module.exports =UserSignUpController