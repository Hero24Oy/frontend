import { ConfirmationCodeFormData } from './types';

export const CODE_LENGTH = 6;

export const DEBOUNCE_TIME = 60;

export const initialFormState: ConfirmationCodeFormData = {
  code: '',
};
