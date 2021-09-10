const Error = require('../utils/errors/Error');

const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') console.log('Here',err);
  
  if(err instanceof Error) {
    return res.status(err.code).json({
      message: err.message
    });
  }

  return res.status(500).json({
    message: 'Internal Server Error'
  });
};

module.exports = errorHandler;
