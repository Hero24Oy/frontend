import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

import { SelectSize } from '$components/organisms/Select/types';

export type Variants = {
  size: Record<SelectSize, Partial<SxProps<StyleProp<ViewStyle>>>>;
};
