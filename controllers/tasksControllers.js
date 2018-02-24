import mongoose from 'mongoose';

/** 
 * Il modello su cui si basa questo controller
 */
const Task = mongoose.model('Task');

/**
 * Viene utilizzato per aggiungere un task, il task verrà
 * sempre aggiunto come elemento "in_corso", quindi nella lista
 * delle attività da svolgere
 * @param req: Request 
 * @param res: Response
 */
export const aggiungiNuovoTask = (req, res) => {
  let nuovoTask = new Task(req.body);

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
  const query = { stato: 'in_corso' };
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
  const query = { stato: 'completato' };
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
  const query = { stato: 'eliminato' };
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
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (error, task) => {
    if(error) {
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
  Task.remove({ stato: 'completato' }, (error, task) => {
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
  Task.remove({ stato: 'eliminato' }, (error, task) => {
    if(error) {
      res.send(error);
    }
    res.json({ message: 'Task eliminati rimossi con successo' });
  })
};
