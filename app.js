import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';

import routes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//mongose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ToDo');
require('./config/passport');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Serve per ricevere chiamate anche da un altro indirizzo, da rimuovere in produzione
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
*/

userRoutes(app);
routes(app);


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

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
