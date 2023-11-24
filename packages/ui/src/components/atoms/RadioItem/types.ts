import { Size } from '$theme';

export enum RadioVariant {
  CHIP = 'chip',
  RADIO_INDICATOR = 'radio_indicator',
}

export type RadioSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export type RadioOption<Value> = {
  label: string;
  value: Value;
  isChecked?: boolean;
  isDisabled?: boolean;
};
