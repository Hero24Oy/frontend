import { FormState, UseFormGetValues } from 'react-hook-form';

import { ScreenForm } from '$core/store';

export type CurrentProgressBar<Form extends ScreenForm> = {
  currentFormState: FormState<Form>;
  currentGetValueFunction: UseFormGetValues<Form>;
  currentProgressBarIndex: number;
};

export type SetCurrentProgressBar<Form extends ScreenForm> = React.Dispatch<
  React.SetStateAction<CurrentProgressBar<Form>>
>;
