import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

type SxValues = Partial<SxProps<StyleProp<ViewStyle>>>;

type Variants = Record<string, SxValues>;

type Theme = {
  variants?: Record<string, Variants>;
} & SxValues;

type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme = {
  theme: Theme;
  componentConfig?: ComponentConfig;
};
