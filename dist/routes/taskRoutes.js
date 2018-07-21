'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tasksControllers = require('../controllers/tasksControllers');

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = (0, _expressJwt2.default)({
  secret: process.env.SECRET || 'STRONG_SECRET', // Dovrebbe continuare ad esser passata come variabile d'ambiente
  userProperty: 'payload'
});

var routes = function routes(app) {
  app.route('/task').get(auth, _tasksControllers.getTaskDaFare).post(auth, _tasksControllers.aggiungiNuovoTask);

  app.route('/task/completati').get(auth, _tasksControllers.getTaskCompletati).delete(auth, _tasksControllers.rimuoviTaskCompletati);

  app.route('/task/cancellati').get(auth, _tasksControllers.getTaskCancellati).delete(auth, _tasksControllers.rimuoviTaskCancellati);

  app.route('/task/:taskId').put(auth, _tasksControllers.aggiornaTask).delete(auth, _tasksControllers.rimuoviTask);
};

exports.default = routes;