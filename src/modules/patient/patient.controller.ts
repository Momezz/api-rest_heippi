import { Request, Response, NextFunction } from 'express';
import { DocumentDefinition } from 'mongoose';
import { createUser } from '../user/user.services';
import { UserDocument } from '../user/user.model';
import {
  createPatient,
  deletePatient,
  getPatientByID,
  getPatients,
  updatePatient,
} from './patient.services';

export async function listPatientHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const patients = await getPatients();
    return res.status(200).json(patients);
  } catch (e: any) {
    return next(e);
  }
}

export async function createPatientHandler(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  const newUser = {
    name: data.name,
    dateBirday: data.dateBirday,
    email: data.email,
    password: data.password,
    role: 'PATIENT',
  };
  try {
    const user = await createUser(newUser as unknown as DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>);
    // eslint-disable-next-line no-underscore-dangle
    const patient = await createPatient({ birthDate: data.birthDate, userId: user._id });
    return res.status(201).json(patient);
  } catch (e: any) {
    return next(e);
  }
}

export async function getPatientHandler(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const patient = await getPatientByID(id);
    if (!patient) {
      res.status(404).json({ msg: 'Patient not found' });
    }
    return res.status(200).json(patient);
  } catch (e: any) {
    return next(e);
  }
}

export async function updatePatientHandler(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;

  try {
    const patient = await getPatientByID(id);
    if (!patient) {
      res.status(404).json({ msg: 'Patient not found' });
    }
    const updatedPatient = await updatePatient({ _id: id }, data);
    return res.status(200).json(updatedPatient);
  } catch (e: any) {
    return next(e);
  }
}

export async function deletePatientHandler(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const query = { _id: id };
    const patient = await deletePatient(query);
    if (!patient) {
      res.status(404).json({ msg: 'Patient not found' });
    }
    return res.status(200).json(patient);
  } catch (e: any) {
    return next(e);
  }
}
