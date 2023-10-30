import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

export type SxValues = Partial<SxProps<StyleProp<ViewStyle>>>;

export type Variants = Record<string, SxValues>;

export type Theme = {
  variants?: Record<string, Variants>;
} & SxValues;

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme = {
  theme: Theme;
  componentConfig?: ComponentConfig;
  props?: Record<string, unknown>;
};
