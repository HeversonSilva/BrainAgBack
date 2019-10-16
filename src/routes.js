import { Router } from 'express';

import UserController from './app/controllers/UserController';
import FarmController from './app/controllers/FarmController';

const routes = new Router();

routes.get('/farms', FarmController.index);
routes.get('/users/:id', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

export default routes;
