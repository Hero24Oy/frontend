import * as yup from 'yup';

import { LoadedFile } from '$types';

export const fileSchema: yup.ObjectSchema<
  Pick<LoadedFile, 'mime' | 'name' | 'src'>
> = yup.object({
  mime: yup.string<LoadedFile['mime']>().required(),
  name: yup.string().required(),
  src: yup.string().required(),
});
