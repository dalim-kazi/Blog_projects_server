const { BadRequest } = require("../util/error");

/**
 * Middleware function to handle Joi validation errors.
 * @param {function} validate - Joi validation function
 * @returns {function} Express middleware function
 */


const handleJoiValidate = (validate) => {
    return (req, res, next) => {
        try {
            const result = validate(req.body);
            const isValid = result.error == null;
            if (isValid) {
                return next();
            }
            
            const { details } = result.error;
            const errorMessages = details?.map(e => e.message);
            const errorMessage = errorMessages.join(", ");
            throw new BadRequest(errorMessage);
        }
        catch (error) {
            next(error); // Pass the error to the Express error handling middleware
        }
    };
};

module.exports = handleJoiValidate;