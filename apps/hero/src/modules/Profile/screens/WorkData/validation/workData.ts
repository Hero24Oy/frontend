import * as yup from 'yup';

import { file, multiSelectArray, range } from '@hero24/common';

import { WorkData } from '../types';

export const workDataSchema = yup.object<WorkData>().shape({
  certificate: file,
  insurance: file,
  experience: range,
  expertise: multiSelectArray,
  places: multiSelectArray,
});
