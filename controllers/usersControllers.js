import mongoose from 'mongoose';
import passport from 'passport';

const User = mongoose.model('User');

export const registrazione = (req, res) => {
  
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.json({
      "message": 'Sono richiesti tutti i campi'
    });
    return;
  }

  const query = { email: req.body.email };

  User.findOne(query, (error, user) => {
    if (error) {
      res.send(error);
    }
    res.json({
      "message": 'Utente già esistente'
    });
  });

  if (res.message) {
    return;
  }
  
  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save((err) => {
    if (err) {
      res.send(err)
    }
    const token = user.generateJwt();
    res.json({
      "token": token
    });
  });

};

export const login = (req, res) => {
  let token;

  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
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
      res.json({
        "token": token
      });
    } else {
      res.json(info);
    }
  })(req, res);

};
