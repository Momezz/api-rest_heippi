import { Request, Response, NextFunction } from 'express';

import {
  createAppointment,
  deleteAppointment,
  getAppointmentByDoctor,
  getAppointmentByID,
  getAppointments,
  updateAppointment,
  getAppointmentByPatient,
} from './appointment.services';

export async function listAppointmentHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const appointments = await getAppointments();
    return res.status(200).json(appointments);
  } catch (e: any) {
    return next(e);
  }
}

export async function createAppointmentHandler(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  try {
    const appointment = await createAppointment(data);
    return res.status(201).json(appointment);
  } catch (e: any) {
    return next(e);
  }
}

export async function getAppointmentHandler(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const appointment = await getAppointmentByID(id);
    if (!appointment) {
      res.status(404).json({ msg: 'Appointment not found' });
    }
    return res.status(200).json(appointment);
  } catch (e: any) {
    return next(e);
  }
}
export async function getAppointmentsByPatientHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;

  try {
    const appointment = await getAppointmentByPatient(id);
    if (!appointment) {
      res.status(404).json({ msg: 'Appointment not found' });
    }
    return res.status(200).json(appointment);
  } catch (e: any) {
    return next(e);
  }
}

export async function getAppointmentsByDoctorHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;

  try {
    const appointment = await getAppointmentByDoctor(id);
    if (!appointment) {
      res.status(404).json({ msg: 'Appointment not found' });
    }
    return res.status(200).json(appointment);
  } catch (e: any) {
    return next(e);
  }
}

export async function updateAppointmentHandler(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const data = req.body;

  try {
    const appointment = await getAppointmentByID(id);
    if (!appointment) {
      res.status(404).json({ msg: 'Appointment not found' });
    }
    const updatedAppointment = await updateAppointment({ _id: id }, data);
    return res.status(200).json(updatedAppointment);
  } catch (e: any) {
    return next(e);
  }
}

export async function deleteAppointmentHandler(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const query = { _id: id };
    const appointment = await deleteAppointment(query);
    if (!appointment) {
      res.status(404).json({ msg: 'Appointment not found' });
    }
    return res.status(200).json(appointment);
  } catch (e: any) {
    return next(e);
  }
}
