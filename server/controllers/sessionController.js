const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.addSession = async (req, res, next) => {
  const date = new Date(req.body.date).getTime();
  await Session.create({
    title: req.body.title,
    instructor: req.body.instructor,
    date: date,
    description: req.body.description,
  });
  return next();
};

sessionController.getSessions = async (req, res, next) => {
  const now = Date.now();
  console.log(now);
  res.locals.sessions = await Session.find({ date: { $gte: now } });
  return next();
};

module.exports = sessionController;
