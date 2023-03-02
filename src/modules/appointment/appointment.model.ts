import { Schema, model, Document } from 'mongoose';

export interface AppointmentDocument extends Document {
  idPatient: string;
  idDoctor: string;
  specialty: string;
  observations: string;
  createdAt: Date;
  updatedAt: Date;

}

const AppointmentSchema = new Schema({
  idPatient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  idDoctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Appointment = model<AppointmentDocument>('Appointment', AppointmentSchema);

export default Appointment;
