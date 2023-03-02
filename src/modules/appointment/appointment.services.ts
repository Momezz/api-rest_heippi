import { DocumentDefinition, FilterQuery } from 'mongoose';

import Appointment, { AppointmentDocument } from './appointment.model';

export async function createAppointment(
  input: DocumentDefinition<
    Omit<AppointmentDocument, 'createdAt' | 'updatedAt'>
  >,
) {
  return Appointment.create(input);
}

export async function getAppointmentByID(id: string) {
  try {
    return await Appointment.findById(id)
      .populate({ path: 'idPatient', select: 'name' })
      .populate({ path: 'idDoctor', select: 'name' });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getAppointmentByPatient(id: string) {
  try {
    return await Appointment.find({ idPatient: id })
      .populate('idPatient')
      .populate('idDoctor');
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getAppointmentByDoctor(id: string) {
  try {
    return await Appointment.find({ idDoctor: id })
      .populate('idPatient')
      .populate('idDoctor');
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getAppointment(filter: FilterQuery<AppointmentDocument>) {
  const appointment = await Appointment.findOne(filter);
  return appointment;
}

export async function getAppointments(filter?: FilterQuery<AppointmentDocument>) {
  const appointments = filter ? await Appointment.find(filter) : await Appointment.find();
  return appointments;
}

export async function updateAppointment(
  filter: FilterQuery<AppointmentDocument>,
  input: DocumentDefinition<AppointmentDocument>,
) {
  const appointment = await Appointment.findOneAndUpdate(filter, input, { new: true });
  return appointment;
}

export async function deleteAppointment(filter: FilterQuery<AppointmentDocument>) {
  const appointment = await Appointment.findOneAndDelete(filter);
  return appointment;
}

export async function getAppointmentByEmail(email: string) {
  const appointment = await Appointment.findOne({ email });
  return appointment;
}
