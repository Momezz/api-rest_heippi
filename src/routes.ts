/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheck from './modules/healthcheck';
import user from './modules/user';
import doctor from './modules/doctor';
import hospital from './modules/hospital';
import patient from './modules/patient';
import authLocal from './modules/auth/local';
import appointment from './modules/appointment';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/doctors', doctor);
  app.use('/api/hospitals', hospital);
  app.use('/api/patients', patient);
  app.use('/api/appointments', appointment);

  app.use('/auth/local', authLocal);
}

export default routes;
