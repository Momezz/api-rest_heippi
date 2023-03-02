import Patient from './patient.model';
import log from '../../logger';

const patients = [
  {
    _id: '6400eacf7ff0f67edd8f0409',
    userId: '6400d288708b1e4a5c2f21e1',
    birthDate: '1990-01-01',
  },
  {
    _id: '6400eaf37ff0f67edd8f040a',
    userId: '6400d288708b1e4a5c2f21e2',
    birthDate: '1990-01-01',
  },
];

const seed = async () => {
  try {
    const patientsData = await Patient.find({});

    if (patientsData.length > 0) {
      return;
    }

    const result = await Patient.insertMany(patients);
    log.info(`Patient model, successfully seed: ${result.length} documents`);
  } catch (error: any) {
    log.error(error);
  }
};

export default seed;
