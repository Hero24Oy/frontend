import * as yup from 'yup';

import { Maybe } from '$common/core';
import { File } from '$types';

export const file: yup.ISchema<Maybe<File>> = yup
  .object({
    type: yup.string(),
    name: yup.string().required(),
    src: yup.string().required(),
  })
  .notRequired();
