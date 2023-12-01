import {
  Control,
  Path,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

import { ProfileCreation } from '$modules/Profile/stores';

type Address = ProfileCreation['address'];

export type CitySelectProps = {
  control: Control<Address>;
  getValues: UseFormGetValues<Address>;
  name: Path<Address>;
  resetField: UseFormResetField<Address>;
};
