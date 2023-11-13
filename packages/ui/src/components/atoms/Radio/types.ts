import { Size } from '$theme';

export enum RadioVariant {
  CHIP = 'chip',
  RADIO_INDICATOR = 'radio_indicator',
}

export type RadioSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export type RadioOption = {
  label: string;
  value: string;
  isChecked?: boolean;
  isDisabled?: boolean;
};
