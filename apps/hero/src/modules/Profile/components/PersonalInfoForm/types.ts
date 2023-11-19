import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { ProfileCreation } from '$modules/Profile/stores';

export type PersonalInfoFormProps = {
  control: Control<ProfileCreation['personalInfo']>;
  isValid: boolean;
  setValue: UseFormSetValue<ProfileCreation['personalInfo']>;
  submitData: () => void;
  watch: UseFormWatch<ProfileCreation['personalInfo']>;
};
