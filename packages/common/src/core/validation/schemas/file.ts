import * as yup from 'yup';

import { LoadedFile, MimeType } from '$core/types';

export const fileSchema: yup.ObjectSchema<
  Pick<LoadedFile, 'mime' | 'name' | 'src'>
> = yup.object({
  mime: yup
    .string<LoadedFile['mime']>()
    .oneOf(Object.values(MimeType))
    .required(),
  name: yup.string().required(),
  src: yup.string().required(),
});
