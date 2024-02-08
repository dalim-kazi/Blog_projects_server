const { generalError, BadRequest } = require("../util/error");
/**
 * Middleware function to handle errors.
 * @param {Error} err - The error object
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 */

const handleError = (err, req, res, next) => {
    if (err instanceof generalError) {
        const code = err.getCode()
        return res.status(code).json({code:err.getCode(),name:err.name,message:err.message})
    }
    else {
        return res.status(500).json({code:500,name:"internal server error"})
    }
}

module.exports =handleError