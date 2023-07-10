const express = require('express');
const myRouter = express.Router();
const userController = require('../controllers/userController');

myRouter.post('/login', userController.login, (req, res) => {
  res.sendStatus(200);
});

myRouter.post('/signup', userController.signup, (req, res) => {
  res.sendStatus(200);
});

module.exports = myRouter;
