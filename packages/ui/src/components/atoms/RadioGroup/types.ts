export enum RadioVariant {
  CHIP = 'chip',
  RADIO = 'radio',
}

export enum RadioDirection {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
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
