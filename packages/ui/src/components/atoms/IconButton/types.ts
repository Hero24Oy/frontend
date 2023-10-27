import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type IconButtonProps = ComponentProps<typeof Button>;

type PickedFields = 'isDisabled' | 'onPress';

export type GluestackIconButtonProps = Pick<IconButtonProps, PickedFields>;
