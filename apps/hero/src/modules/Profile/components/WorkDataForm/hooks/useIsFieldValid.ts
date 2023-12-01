import { useController } from 'react-hook-form';

import { IsFieldValid } from '../types';

export const useIsFieldValid = (params: IsFieldValid) => {
  const {
    fieldState: { invalid: isInvalid, isDirty },
  } = useController({ ...params });

  const isFieldValid = !isInvalid && isDirty;

  return { isFieldValid };
};
