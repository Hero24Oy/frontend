import * as yup from 'yup';

import { Maybe } from '$common';

export const stringSchema: yup.StringSchema<Maybe<string>> = yup.string();
