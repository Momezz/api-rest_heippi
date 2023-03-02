import { DocumentDefinition, FilterQuery } from 'mongoose';

import Patient, { PatientDocument } from './patient.model';

export async function createPatient(
  input: DocumentDefinition<
    Omit<PatientDocument, 'createdAt' | 'updatedAt'>
  >,
) {
  return Patient.create(input);
}

export async function getPatientByID(id: string) {
  try {
    return await Patient.findById(id).populate('profiles');
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getPatient(filter: FilterQuery<PatientDocument>) {
  const patient = await Patient.findOne(filter);
  return patient;
}

export async function getPatients(filter?: FilterQuery<PatientDocument>) {
  const patients = filter ? await Patient.find(filter) : await Patient.find();
  return patients;
}

export async function updatePatient(
  filter: FilterQuery<PatientDocument>,
  input: DocumentDefinition<PatientDocument>,
) {
  const patient = await Patient.findOneAndUpdate(filter, input, { new: true });
  return patient;
}

export async function deletePatient(filter: FilterQuery<PatientDocument>) {
  const patient = await Patient.findOneAndDelete(filter);
  return patient;
}

export async function getPatientByEmail(email: string) {
  const patient = await Patient.findOne({ email });
  return patient;
}
