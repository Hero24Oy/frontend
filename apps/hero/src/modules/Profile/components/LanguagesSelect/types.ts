import {
  Control,
  Path,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

import { ProfileCreation } from '$modules/Profile/stores';

type Bio = ProfileCreation['bio'];

export type LanguagesSelectProps = {
  control: Control<Bio>;
  getValues: UseFormGetValues<Bio>;
  name: Path<Bio>;
  resetField: UseFormResetField<Bio>;
};
