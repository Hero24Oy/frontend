import { ErrorOption } from 'react-hook-form';

import { DateForm } from './types';

import { ValidationHints } from '$core/validation';

export const birthdayFormInitialState: DateForm = {
  day: '',
  month: '',
  year: '',
};

export const DATE_TIME: string = 'T12:00:00';

export const fieldValidationError: ErrorOption = {
  message: ValidationHints.INVALID_DATE,
  type: 'validate',
};
