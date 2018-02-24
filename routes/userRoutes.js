import { registrazione, login } from '../controllers/usersControllers';

const userRoutes = (app) => {

  app.route('/user/registration')
    .post(registrazione);

  app.route('/user/login')
    .post(login);

}

export default userRoutes;