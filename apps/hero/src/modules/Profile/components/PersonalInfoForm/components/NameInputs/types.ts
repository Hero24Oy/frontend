import { PersonalInfoFormProps } from '../../types';

type UseLogicParams = Pick<PersonalInfoFormProps, 'setValue' | 'watch'>;

export type UseLogic = (params: UseLogicParams) => void;

export type NameInputsProps = UseLogicParams &
  Pick<PersonalInfoFormProps, 'control'>;
