import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';
import { Sizes } from 'theme/enums';

export type Variants = {
  size: Record<`${Sizes}`, Partial<SxProps<StyleProp<ViewStyle>>>>;
};
