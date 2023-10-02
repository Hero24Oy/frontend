import { ImagePickerResult } from 'expo-image-picker';
import { UserDB } from 'hero24-types';

export interface User extends UserDB {
  id: string;
}

export interface AuthUser {
  data: Omit<UserDB['data'], 'createdAt'>;
  id: string;
}

export interface UserState {
  tempUser?: User;
  userByIdPhone?: Record<string, string>;
}

export interface UserCompanyInfo {
  birthDate?: Date;
  certificate?: ImagePickerResult;
  iban?: string;
  insurance?: ImagePickerResult;
  ssn?: string;
}
