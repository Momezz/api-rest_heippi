import Hospital from './hospital.model';
import log from '../../logger';

const hospitals = [
  {
    _id: '6400d62e7ff0f67edd8f0407',
    userId: '6400d288708b1e4a5c2f21dc',
    name: 'Hospital 1',
    services: ['Cardiology', 'Dermatology', 'Gastroenterology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Psychiatry', 'Urology'],
    doctors: ['6400d5437ff0f67edd8f0405', '6400d5527ff0f67edd8f0406'],
  },
  {
    _id: '6400d6927ff0f67edd8f0408',
    userId: '6400d288708b1e4a5c2f21dd',
    name: 'Hospital 2',
    services: ['Cardiology', 'Neurology', 'Oncology', 'Ophthalmology', 'Orthopedics', 'Pediatrics', 'Psychiatry', 'Urology'],
    doctors: ['6400d55f7ff0f67edd8f0407', '6400d56c7ff0f67edd8f0408'],
  },
];

const seed = async () => {
  try {
    const hospitalsData = await Hospital.find({});

    if (hospitalsData.length > 0) {
      return;
    }

    const result = await Hospital.insertMany(hospitals);
    log.info(`Hospital model, successfully seed: ${result.length} documents`);
  } catch (error: any) {
    log.error(error);
  }
};

export default seed;
