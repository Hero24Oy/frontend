import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { ProfileCreation } from '$modules/Profile/stores';

export type PersonalInfoFormProps = {
  control: Control<ProfileCreation['individualInfo']>;
  isValid: boolean;
  setValue: UseFormSetValue<ProfileCreation['individualInfo']>;
  submitData: () => void;
  watch: UseFormWatch<ProfileCreation['individualInfo']>;
};
