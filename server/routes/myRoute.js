const express = require('express');
const myRouter = express.Router();
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

myRouter.post('/login', userController.login, (req, res) => {
  res.sendStatus(200);
});

myRouter.post('/signup', userController.signup, (req, res) => {
  res.sendStatus(200);
});

myRouter.post('/sessions', sessionController.addSession, (req, res) => {
  res.sendStatus(200);
});

myRouter.get('/sessions', sessionController.getSessions, (req, res) => {
  res.json(res.locals.sessions);
});

module.exports = myRouter;
