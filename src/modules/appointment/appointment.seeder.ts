import Appointment from './appointment.model';
import log from '../../logger';

const appointments = [
  {
    _id: '6400eb887ff0f67edd8f040b',
    idPatient: '6400eacf7ff0f67edd8f0409',
    idDoctor: '6400d5437ff0f67edd8f0405',
    specialty: 'Cardiology',
    observations: 'Patient has a heart disease',
  },
  {
    _id: '6400ec1d7ff0f67edd8f040d',
    idPatient: '6400eacf7ff0f67edd8f0409',
    idDoctor: '6400d5527ff0f67edd8f0406',
    specialty: 'Gastroenterology',
    observations: 'Patient has a stomach disease',
  },
  {
    _id: '6400f31e7ff0f67edd8f040f',
    idPatient: '6400eacf7ff0f67edd8f0409',
    idDoctor: '6400d55f7ff0f67edd8f0407',
    specialty: 'Neurology',
    observations: 'Patient has a brain disease',
  },
  {
    _id: '6400ec107ff0f67edd8f040c',
    idPatient: '6400eaf37ff0f67edd8f040a',
    idDoctor: '6400d55f7ff0f67edd8f0407',
    specialty: 'Oncology',
    observations: 'Patient has a cancer disease',
  },
];

const seed = async () => {
  try {
    const appointmentsData = await Appointment.find({});

    if (appointmentsData.length > 0) {
      return;
    }

    const result = await Appointment.insertMany(appointments);
    log.info(`Appointment model, successfully seed: ${result.length} documents`);
  } catch (error: any) {
    log.error(error);
  }
};

export default seed;
