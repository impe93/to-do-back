import mongoose from 'mongoose';
import passport from 'passport';

import validator from 'email-validator';
import xss from 'xss';
import mongoSanitize from 'mongo-sanitize';

import UserSchema from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const registrazione = (req, res) => {

  if (!req.body.name || !req.body.email || !req.body.password) {
    res.json({
      "message": 'Sono richiesti tutti i campi'
    });
    return;
  }

  if(!validator.validate(req.body.email)) {
    res.json({
      "message": 'Email non valida'
    });
  }

  
  
  const user = new User();

  user.name = mongoSanitize(xss(req.body.name));
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save((err) => {
    if (err) {
      res.send(err)
    }
    const token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });

};

export const login = (req, res) => {
  let token;

  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "È necessaria la compilazione di tutti i campi"
    });
    return;
  }

  passport.authenticate('local', (err, user, info) => {
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
