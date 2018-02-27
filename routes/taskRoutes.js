import {
  aggiungiNuovoTask,
  getTaskDaFare,
  getTaskCompletati,
  getTaskCancellati,
  aggiornaTask,
  rimuoviTask,
  rimuoviTaskCompletati,
  rimuoviTaskCancellati
} from '../controllers/tasksControllers';

import jwt from 'express-jwt';

const auth = jwt({
  secret: process.env.SECRET || 'STRONG_SECRET', // Dovrebbe continuare ad esser passata come variabile d'ambiente
  userProperty: 'payload'
});

const routes = (app) => {
  app.route('/task')
    .get(auth, getTaskDaFare)
    .post(auth, aggiungiNuovoTask);
  
  app.route('/task/completati')
    .get(auth, getTaskCompletati)
    .delete(auth, rimuoviTaskCompletati);
  
  app.route('/task/cancellati')
    .get(auth, getTaskCancellati)
    .delete(auth, rimuoviTaskCancellati);
  
  app.route('/task/:taskId')
    .put(auth, aggiornaTask)
    .delete(auth, rimuoviTask);
}

export default routes;