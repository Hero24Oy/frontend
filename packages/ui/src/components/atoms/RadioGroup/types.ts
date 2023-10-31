export enum RadioVariant {
  CHIP = 'chip',
  RADIO = 'radio',
}

export type RadioOption = {
  label: string;
  value: string;
};

type RadioConfig = {
  options: RadioOption[];
  variant: RadioVariant;
};

export type RadioGroupProps = RadioConfig;
