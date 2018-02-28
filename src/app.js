import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';

import routes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';

var app = express();

app.use(helmet());

// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc) 
// app.enable('trust proxy');
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
  delayMs: 0 // disabled
});
app.use('/task/', apiLimiter);
app.use('/user/', apiLimiter);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//mongose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/ToDo');
require('./config/passport');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

userRoutes(app);
routes(app);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
