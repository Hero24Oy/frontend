import { InputProps } from '@hero24/ui';

import { DateForm } from '../../types';

export type InputFieldProps = {
  mask: string;
  name: keyof DateForm;
  placeholder: string;
};

export type CommonInputFieldProps = Pick<
  InputProps<DateForm>,
  'control' | 'keyboardType' | 'isHelperEnabled'
>;
