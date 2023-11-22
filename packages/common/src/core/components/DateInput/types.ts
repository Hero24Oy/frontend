import { FieldValues } from 'react-hook-form';

import { InputProps } from '@hero24/ui';

export type DateForm = {
  dateString?: string;
};

export type DateInputProps<FormType extends FieldValues> = Pick<
  InputProps<FormType>,
  'control' | 'name' | 'isDisabled' | 'title' | 'placeholder'
> & {
  dateMask: string;
};
