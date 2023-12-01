import {
  Control,
  Path,
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';

import { ProfileCreation } from '$modules/Profile/stores';

export type WorkData = ProfileCreation['workData'];

export type WorkDataSelectsProps = {
  control: Control<WorkData>;
  getValues: UseFormGetValues<WorkData>;
  isValid: boolean;
  name: Path<WorkData>;
  resetField: UseFormResetField<WorkData>;
  setValue: UseFormSetValue<WorkData>;
};

export type IsFieldValid = {
  control: Control<WorkData>;
  name: Path<WorkData>;
};
