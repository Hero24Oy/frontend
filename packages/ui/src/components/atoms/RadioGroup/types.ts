export enum RadioVariant {
  CHIP = 'chip',
  RADIO = 'radio',
}

type GluestackRadioGroup = ComponentProps<typeof RadioGroup>;

type PickedFields = 'onChange' | 'value';

export type GluestackRadioGroupProps = Pick<GluestackRadioGroup, PickedFields>;
