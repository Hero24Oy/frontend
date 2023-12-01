import { Control, FieldValues, Path } from 'react-hook-form';

import { UseUpdateCategory } from '../../hooks';

import { ExpertiseData } from '$modules/Profile/components/ExpertiseSelect/types';

export type ModalBodyType<Type extends FieldValues> = {
  control: Control<Type>;
  expertise: ExpertiseData;
  name: Path<Type>;
  useUpdateCategory: (params: UseUpdateCategory<Type>) => void;
};
