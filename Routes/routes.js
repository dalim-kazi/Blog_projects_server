const express = require("express")
const authRouter = require("./Auth.Router/auth.router")
const appRouter = express.Router()
// all router
appRouter.use(authRouter)


module.exports =appRouter