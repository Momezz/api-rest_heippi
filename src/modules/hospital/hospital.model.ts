import { Schema, model, Document } from 'mongoose';

export interface HospitalDocument extends Document {
  name: string;
  services: string[];
  userId: string;
  doctors?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const HospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  services: [{
    type: String,
    required: true,
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctors: [{
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
  }],
}, {
  timestamps: true,
  versionKey: false,
});

const Hospital = model<HospitalDocument>('Hospital', HospitalSchema);

export default Hospital;
