import { Router } from 'express';

import {
  createHospitalHandler,
  deleteHospitalHandler,
  getHospitalHandler,
  listHospitalHandler,
  updateHospitalHandler,
} from './hospital.controller';
import { isAuthenticated } from '../auth/auth.services';

const router = Router();

router.get('/', isAuthenticated, listHospitalHandler);
router.delete('/:id', isAuthenticated, deleteHospitalHandler);

router.get('/:id', isAuthenticated, getHospitalHandler);
router.patch('/:id', isAuthenticated, updateHospitalHandler);

router.post('/', createHospitalHandler);

export default router;
