'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rimuoviTaskCancellati = exports.rimuoviTaskCompletati = exports.rimuoviTask = exports.aggiornaTask = exports.getTaskCancellati = exports.getTaskCompletati = exports.getTaskDaFare = exports.aggiungiNuovoTask = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _tasksModel = require('../models/tasksModel');

var _xss = require('xss');

var _xss2 = _interopRequireDefault(_xss);

var _mongoSanitize = require('mongo-sanitize');

var _mongoSanitize2 = _interopRequireDefault(_mongoSanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Il modello su cui si basa questo controller
 */
var Task = _mongoose2.default.model('Task', _tasksModel.TaskSchema);

/**
 * Viene utilizzato per aggiungere un task, il task verrà
 * sempre aggiunto come elemento "in_corso", quindi nella lista
 * delle attività da svolgere
 * @param req: Request 
 * @param res: Response
 */
var aggiungiNuovoTask = exports.aggiungiNuovoTask = function aggiungiNuovoTask(req, res) {
  var task = {
    testo: req.body.testo,
    id_utente: req.payload._id
  };
  console.log(task);
  var nuovoTask = new Task(task);

  nuovoTask.save(function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

/**
 * Serve per recuperare tutti i task da completare
 * @param req: Request 
 * @param res: Response
 */
var getTaskDaFare = exports.getTaskDaFare = function getTaskDaFare(req, res) {
  var query = { stato: 'in_corso', id_utente: req.payload._id };
  Task.find(query, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json(task);
  });
};

/**
 * Serve per recuperare tutti i completati
 * @param req: Request 
 * @param res: Response
 */
var getTaskCompletati = exports.getTaskCompletati = function getTaskCompletati(req, res) {
  var query = { stato: 'completato', id_utente: req.payload._id };
  Task.find(query, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json(task);
  });
};

/**
 * Serve per recuperare tutti i task cancellati
 * @param req: Request 
 * @param res: Response
 */
var getTaskCancellati = exports.getTaskCancellati = function getTaskCancellati(req, res) {
  var query = { stato: 'eliminato', id_utente: req.payload._id };
  Task.find(query, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json(task);
  });
};

/**
 * Serve per aggiornare un task, quindi per spostarlo dai task in
 * corso, a quelli completati oppure eliminati
 * @param req: Request 
 * @param res: Response
 */
var aggiornaTask = exports.aggiornaTask = function aggiornaTask(req, res) {
  var campoDaModificare = {};
  if (req.body.testo) {
    campoDaModificare = { testo: (0, _mongoSanitize2.default)((0, _xss2.default)(req.body.testo)) };
  } else {
    campoDaModificare = { stato: req.body.stato };
  }

  Task.findOneAndUpdate({ _id: req.params.taskId }, campoDaModificare, { new: true }, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json(task);
  });
};

/**
 * Serve per eliminare un task definitivamente
 * @param req: Request 
 * @param res: Response
 */
var rimuoviTask = exports.rimuoviTask = function rimuoviTask(req, res) {
  Task.remove({ _id: req.params.taskId }, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json({ message: 'Attività eliminata con successo' });
  });
};

/**
 * Serve per eliminare i task completati definitivamente
 * @param req: Request 
 * @param res: Response
 */
var rimuoviTaskCompletati = exports.rimuoviTaskCompletati = function rimuoviTaskCompletati(req, res) {
  Task.remove({ stato: 'completato', id_utente: req.payload._id }, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json({ message: 'Task completati rimossi con successo' });
  });
};

/**
 * Serve per eliminare i task eliminati definitivamente
 * @param req: Request 
 * @param res: Response
 */
var rimuoviTaskCancellati = exports.rimuoviTaskCancellati = function rimuoviTaskCancellati(req, res) {
  Task.remove({ stato: 'eliminato', id_utente: req.payload._id }, function (error, task) {
    if (error) {
      res.send(error);
    }
    res.json({ message: 'Task eliminati rimossi con successo' });
  });
};