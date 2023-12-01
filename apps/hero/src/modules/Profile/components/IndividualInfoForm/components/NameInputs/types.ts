import { PersonalInfoFormProps } from '../../types';

import { ProfileCreation } from '$modules/Profile/stores';

export type UseLogicParams = Pick<PersonalInfoFormProps, 'setValue' | 'watch'>;

export type NameInputsProps = UseLogicParams &
  Pick<PersonalInfoFormProps, 'control'>;

export type SetDisplayName = (
  args: Partial<ProfileCreation['individualInfo']>,
) => void;
