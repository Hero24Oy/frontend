import { Dispatch } from 'react';
import { FieldValues, FormState, UseFormGetValues } from 'react-hook-form';

export type CurrentProgressBar<Type extends FieldValues> = {
  formState: FormState<Type> | null;
  getValues: UseFormGetValues<Type> | null;
  progressBarIndex: number;
};

export type SetCurrentProgressBar<Type extends FieldValues> = Dispatch<
  React.SetStateAction<CurrentProgressBar<Type>>
>;
