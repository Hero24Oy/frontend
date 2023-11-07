import * as yup from 'yup';

import { Maybe } from '$common/core';
import { LoadedFile } from '$types';

export const file: yup.ISchema<Maybe<LoadedFile>> = yup
  .object({
    type: yup.string<LoadedFile['type']>().required(),
    name: yup.string().required(),
    src: yup.string().required(),
  })
  .notRequired();
