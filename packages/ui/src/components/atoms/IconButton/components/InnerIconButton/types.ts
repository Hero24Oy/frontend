import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

import { IconSizes } from '../../types';

export type Variants = {
  size: Record<`${IconSizes}`, Partial<SxProps<StyleProp<ViewStyle>>>>;
};
