import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type RadioButtonProps = ComponentProps<typeof Radio>;

type PickedFields = 'value';

export type GluestackRadioButtonProps = Pick<RadioButtonProps, PickedFields>;
