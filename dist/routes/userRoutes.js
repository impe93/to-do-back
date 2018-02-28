'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usersControllers = require('../controllers/usersControllers');

var userRoutes = function userRoutes(app) {

  app.route('/user/registrazione').post(_usersControllers.registrazione);

  app.route('/user/login').post(_usersControllers.login);
};

exports.default = userRoutes;