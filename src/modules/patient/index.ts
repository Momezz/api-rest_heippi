import { Router } from 'express';

import {
  createPatientHandler,
  deletePatientHandler,
  getPatientHandler,
  listPatientHandler,
  updatePatientHandler,
} from './patient.controller';
import { isAuthenticated } from '../auth/auth.services';

const router = Router();

/**
 * @openapi
 * /api/patients:
 *  get:
 *    tags:
 *    - Patients
 *    summary: Get all Patients
 *    description: Get all Patients from the database
 *    security:
 *    - ApiKeyAuth: []
 *    responses:
 *      200:
 *        description: Get all Patients
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ListPatientsResponse'
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Server error
 */
router.get('/', isAuthenticated, listPatientHandler);
router.delete('/:id', isAuthenticated, deletePatientHandler);

/**
 * @openapi
 * /api/patients/{id}:
 *  get:
 *    tags:
 *    - Patients
 *    summary: Get Patient
 *    description: Get Patient from the database
 *    security:
 *    - ApiKeyAuth: []
 *    responses:
 *      200:
 *        description: Get Patient
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ListPatientResponse'
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Server error
 */
router.get('/:id', isAuthenticated, getPatientHandler);
router.patch('/:id', isAuthenticated, updatePatientHandler);

/**
 * @openapi
 * /api/patients:
 *  post:
 *    tags:
 *    - Patients
 *    summary: Create Patient
 *    security:
 *    - ApiKeyAuth: []
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePatientRequest'
 *    responses:
 *      200:
 *        description: Create Patient
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreatePatientResponse'
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Server error
 */
router.post('/', createPatientHandler);

export default router;
