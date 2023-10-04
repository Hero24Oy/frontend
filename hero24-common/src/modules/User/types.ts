import { ImagePickerResult } from 'expo-image-picker';
import { UserDB } from 'hero24-types';

// TODO strip out if not needed
export interface AuthUser {
  data: Omit<UserDB['data'], 'createdAt'>;
  id: string;
}

export type UserCompany = {
  birthDate?: Date;
  certificate?: ImagePickerResult;
  iban?: string;
  insurance?: ImagePickerResult;
  ssn?: string;
};
