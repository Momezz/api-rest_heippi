import { Router } from 'express';

import {
  createDoctorHandler,
  deleteDoctorHandler,
  getDoctorHandler,
  listDoctorHandler,
  updateDoctorHandler,
} from './doctor.controller';
import { isAuthenticated } from '../auth/auth.services';

const router = Router();

router.get('/', isAuthenticated, listDoctorHandler);
router.delete('/:id', isAuthenticated, deleteDoctorHandler);

router.get('/:id', isAuthenticated, getDoctorHandler);
router.patch('/:id', isAuthenticated, updateDoctorHandler);

router.post('/', createDoctorHandler);

export default router;
