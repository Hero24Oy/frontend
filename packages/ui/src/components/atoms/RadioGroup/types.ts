export enum RadioVariant {
  CHIP = 'chip',
  RADIO_INDICATOR = 'radio_indicator',
}

export type RadioOption = {
  label: string;
  value: string;
  isChecked?: boolean;
  isDisabled?: boolean;
};

export type RadioGroupProps = {
  options: RadioOption[];
  variant: `${RadioVariant}`;
  isGloballyDisabled?: boolean;
};
