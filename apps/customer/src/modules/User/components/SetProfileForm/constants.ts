import { ConfirmationCodeFormData } from './types';

export const CODE_LENGTH = 4;

export const initialFormState: ConfirmationCodeFormData = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
};
