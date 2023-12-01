import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';

import { WorkData } from '$modules/Profile/components/WorkDataForm/types';

export type UseGetCategory = {
  setValue: UseFormSetValue<WorkData>;
};

export type UseUpdateCategory<Type extends FieldValues> = {
  name: Path<Type>;
  value: string[];
};
