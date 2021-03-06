import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import multerconfig from './config/multer';

const routes = new Router();
const upload = multer(multerconfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.get('/schedule', ScheduleController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
