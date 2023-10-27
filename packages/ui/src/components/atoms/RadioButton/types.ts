import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type RadioButtonProps = ComponentProps<typeof Radio>;

type PickedFields = 'value' | 'style';

export type GluestackRadioButtonProps = Pick<RadioButtonProps, PickedFields>;
