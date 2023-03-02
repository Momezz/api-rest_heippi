import Doctor from './doctor.model';
import log from '../../logger';

const doctors = [
  {
    _id: '6400d5437ff0f67edd8f0405',
    userId: '6400d288708b1e4a5c2f21de',
    birthDate: '1990-01-01',
  },
  {
    _id: '6400d5527ff0f67edd8f0406',
    userId: '6400d288708b1e4a5c2f21e3',
    birthDate: '1990-01-01',
  },
  {
    _id: '6400d55f7ff0f67edd8f0407',
    userId: '6400d288708b1e4a5c2f21e4',
    birthDate: '1990-01-01',
  },
  {
    _id: '6400d56c7ff0f67edd8f0408',
    userId: '6400d288708b1e4a5c2f21e5',
    birthDate: '1990-01-01',
  },
];

const seed = async () => {
  try {
    const doctorsData = await Doctor.find({});

    if (doctorsData.length > 0) {
      return;
    }

    const result = await Doctor.insertMany(doctors);
    log.info(`Doctor model, successfully seed: ${result.length} documents`);
  } catch (error: any) {
    log.error(error);
  }
};

export default seed;
