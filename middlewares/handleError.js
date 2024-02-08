const { generalError, BadRequest } = require("../util/error");

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