const errorMessages = require('../helpers/errorMessages');

module.exports = (error, _req, res, _next) => {
  const statusCode = errorMessages[error.code] || 500;
  
  return res.status(statusCode).json({ message: error.message });
};
