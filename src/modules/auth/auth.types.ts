import { Request } from 'express';

import { UserDocument } from '../user/user.model';

export interface AuthRequest extends Request {
  user?: UserDocument;
}

export type Role = 'HOSPITAL' | 'PATIENT' | 'DOCTOR';

export type Roles = Role[];
