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

const routes = (app) => {
  app.route('/task')
    .get(getTaskDaFare)
    .post(aggiungiNuovoTask);
  
  app.route('/task/completati')
    .get(getTaskCompletati)
    .delete(rimuoviTaskCompletati);
  
  app.route('/task/cancellati')
    .get(getTaskCancellati)
    .delete(rimuoviTaskCancellati);
  
  app.route('/task/:taskId')
    .put(aggiornaTask)
    .delete(rimuoviTask);
  
}

export default routes;