import { Size } from '$theme';

export enum RadioVariant {
  CHIP = 'chip',
  RADIO_INDICATOR = 'radio_indicator',
}

export type RadioSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export type RadioRange = {
  max: number;
  min: number;
};

export type RadioOption = {
  label: string;
  value: string | number;
  isChecked?: boolean;
  isDisabled?: boolean;
};

export type RadioGroupProps = {
  options: RadioOption[];
  variant: `${RadioVariant}`;
  isGloballyDisabled?: boolean;
};
