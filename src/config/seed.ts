import seedAppointments from '../modules/appointment/appointment.seeder';
import seedDoctors from '../modules/doctor/doctor.seeder';
import seedHospitals from '../modules/hospital/hospital.seeder';
import seedPatients from '../modules/patient/patient.seeder';
import seedUser from '../modules/user/user.seeder';

async function seed() {
  await Promise.all([
    seedAppointments(),
    seedDoctors(),
    seedHospitals(),
    seedPatients(),
    seedUser(),
  ]);
}

export default seed;
