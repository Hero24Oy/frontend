import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

export type ButtonStylesConfig = {
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  lineHeight: number;
  sx: Partial<SxProps<StyleProp<ViewStyle>>>;
  textColor: string;
};