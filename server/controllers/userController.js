const User = require('../models/bcryptModel');

const userController = {};

userController.login = (req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return next('User not found');
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch) return next();
        else return next('Wrong password');
      });
    }
  });
  return next();
};

userController.signup = (req, res, next) => {
  User.create({ username: req.body.username, password: req.body.password });
  return next();
};

module.exports = userController;
