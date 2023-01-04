const validateURL = (req, res, next) => {
  console.log('This function runs on POST');
  next();
};

module.exports = { validateURL };
