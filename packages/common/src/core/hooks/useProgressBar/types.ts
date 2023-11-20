import { Dispatch } from 'react';
import { FieldValues, FormState, UseFormGetValues } from 'react-hook-form';

export type CurrentProgressBar = {
  formState: FormState<FieldValues> | null;
  getValues: UseFormGetValues<FieldValues> | null;
  progressBarIndex: number;
};

export type SetCurrentProgressBar = Dispatch<
  React.SetStateAction<CurrentProgressBar>
>;
