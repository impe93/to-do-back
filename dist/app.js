'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _taskRoutes = require('./routes/taskRoutes');

var _taskRoutes2 = _interopRequireDefault(_taskRoutes);

var _userRoutes = require('./routes/userRoutes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _helmet2.default)());

// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc) 
// app.enable('trust proxy');
var apiLimiter = new _expressRateLimit2.default({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  delayMs: 0 // disabled
});
app.use('/task/', apiLimiter);
app.use('/user/', apiLimiter);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//mongose connection
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/ToDo');
require('./config/passport');

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

var distDir = __dirname + "/dist/";
app.use(_express2.default.static(distDir));

(0, _userRoutes2.default)(app);
(0, _taskRoutes2.default)(app);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ "message": err.name + ": " + err.message });
  }
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;