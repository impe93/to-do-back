'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.registrazione = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _emailValidator = require('email-validator');

var _emailValidator2 = _interopRequireDefault(_emailValidator);

var _xss = require('xss');

var _xss2 = _interopRequireDefault(_xss);

var _mongoSanitize = require('mongo-sanitize');

var _mongoSanitize2 = _interopRequireDefault(_mongoSanitize);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User', _userModel2.default);

var registrazione = exports.registrazione = function registrazione(req, res) {

  if (!req.body.name || !req.body.email || !req.body.password) {
    res.json({
      "message": 'Sono richiesti tutti i campi'
    });
    return;
  }

  if (!_emailValidator2.default.validate(req.body.email)) {
    res.json({
      "message": 'Email non valida'
    });
  }

  var user = new User();

  user.name = (0, _mongoSanitize2.default)((0, _xss2.default)(req.body.name));
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function (err) {
    if (err) {
      res.send(err);
    }
    var token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });
};

var login = exports.login = function login(req, res) {
  var token = void 0;

  if (!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "È necessaria la compilazione di tutti i campi"
    });
    return;
  }

  _passport2.default.authenticate('local', function (err, user, info) {
    if (err) {
      res.json(err);
      return;
    }

    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token": token
      });
    } else {
      res.json(info);
    }
  })(req, res);
};