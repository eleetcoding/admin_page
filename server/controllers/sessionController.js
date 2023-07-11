const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.addSession = async (req, res, next) => {
  const date = new Date(req.body.date).getTime();
  try {
    await Session.create({
      title: req.body.title,
      instructor: req.body.instructor,
      date: date,
      url: res.body.url,
      description: req.body.description,
    });
    return next();
  } catch {
    return next('missing required');
  }
};

sessionController.getSessions = async (req, res, next) => {
  const now = Date.now();
  res.locals.sessions = await Session.find({ date: { $gte: now } });
  return next();
};

module.exports = sessionController;
