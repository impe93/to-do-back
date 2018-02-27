import mongoose from 'mongoose';
import { TaskSchema } from '../models/tasksModel';

import xss from 'xss';
import mongoSanitize from 'mongo-sanitize';

/** 
 * Il modello su cui si basa questo controller
 */
const Task = mongoose.model('Task', TaskSchema);

/**
 * Viene utilizzato per aggiungere un task, il task verrà
 * sempre aggiunto come elemento "in_corso", quindi nella lista
 * delle attività da svolgere
 * @param req: Request 
 * @param res: Response
 */
export const aggiungiNuovoTask = (req, res) => {
  const task = {
    testo: req.body.testo,
    id_utente: req.payload._id
  };
  console.log(task);
  let nuovoTask = new Task(task);

  nuovoTask.save((err, task) => {
    if(err) {
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
export const getTaskDaFare = (req, res) => {
  const query = { stato: 'in_corso', id_utente: req.payload._id };
  Task.find(query, (error, task) => {
    if(error) {
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
export const getTaskCompletati = (req, res) => {
  const query = { stato: 'completato', id_utente: req.payload._id };
  Task.find(query, (error, task) => {
    if(error) {
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
export const getTaskCancellati = (req, res) => {
  const query = { stato: 'eliminato', id_utente: req.payload._id };
  Task.find(query, (error, task) => {
    if(error) {
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
export const aggiornaTask = (req, res) => {
  let campoDaModificare = {};
  if (req.body.testo) {
    campoDaModificare = { testo: mongoSanitize(xss(req.body.testo)) };
  } else {
    campoDaModificare = { stato: (req.body.stato) };
  }

  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    campoDaModificare,
    { new: true },
    (error, task) => {
      if(error) {
        res.send(error);
      }
      res.json(task);
    }
  );
};

/**
 * Serve per eliminare un task definitivamente
 * @param req: Request 
 * @param res: Response
 */
export const rimuoviTask = (req, res) => {
  Task.remove({ _id: req.params.taskId }, (error, task) => {
    if(error) {
      res.send(error);
    }
    res.json({ message: 'Attività eliminata con successo' });
  })
};

/**
 * Serve per eliminare i task completati definitivamente
 * @param req: Request 
 * @param res: Response
 */
export const rimuoviTaskCompletati = (req, res) => {
  Task.remove({ stato: 'completato', id_utente: req.payload._id }, (error, task) => {
    if(error) {
      res.send(error);
    }
    res.json({ message: 'Task completati rimossi con successo' });
  })
};

/**
 * Serve per eliminare i task eliminati definitivamente
 * @param req: Request 
 * @param res: Response
 */
export const rimuoviTaskCancellati = (req, res) => {
  Task.remove({ stato: 'eliminato', id_utente: req.payload._id }, (error, task) => {
    if(error) {
      res.send(error);
    }
    res.json({ message: 'Task eliminati rimossi con successo' });
  })
};
