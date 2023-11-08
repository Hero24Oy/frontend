import * as yup from 'yup';

import { file, multiSelectArray, range } from '@hero24/common';

import { CompanyCreation } from '$modules/Profile/stores';

export const workDataSchema = yup.object<CompanyCreation['workData']>().shape({
  certificate: file,
  insurance: file,
  experience: range,
  expertise: multiSelectArray,
  places: multiSelectArray,
});
