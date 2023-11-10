import { RadioOption, RadioVariant } from '$atoms';

export type RadioGroupProps = {
  options: RadioOption[];
  variant: `${RadioVariant}`;
  isGloballyDisabled?: boolean;
};
