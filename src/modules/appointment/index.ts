import { Router } from 'express';

import {
  createAppointmentHandler,
  deleteAppointmentHandler,
  getAppointmentHandler,
  listAppointmentHandler,
  updateAppointmentHandler,
  getAppointmentsByDoctorHandler,
  getAppointmentsByPatientHandler,
} from './appointment.controller';
import { isAuthenticated } from '../auth/auth.services';

const router = Router();

router.get('/', isAuthenticated, listAppointmentHandler);
router.delete('/:id', isAuthenticated, deleteAppointmentHandler);

router.get('/doctor/:id', isAuthenticated, getAppointmentsByDoctorHandler);
router.get('/patient/:id', isAuthenticated, getAppointmentsByPatientHandler);
router.get('/:id', isAuthenticated, getAppointmentHandler);

router.patch('/:id', isAuthenticated, updateAppointmentHandler);

router.post('/', createAppointmentHandler);

export default router;
