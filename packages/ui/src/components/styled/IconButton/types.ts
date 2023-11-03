import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

import { Size } from '$theme';

export type Variants = {
  size: Record<Size, Partial<SxProps<StyleProp<ViewStyle>>>>;
};
