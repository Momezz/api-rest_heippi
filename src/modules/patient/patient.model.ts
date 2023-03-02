import { Schema, model, Document } from 'mongoose';

export interface PatientDocument extends Document {
  birthDate: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const PatientSchema = new Schema({
  birthDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Patient = model<PatientDocument>('Patient', PatientSchema);

export default Patient;
