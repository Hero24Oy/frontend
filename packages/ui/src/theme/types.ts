import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type SxValues = SxProps<StyleProp<ViewStyle>>;

export type TextSxValues = SxProps<StyleProp<TextStyle>>;

export type Variants = Record<string, SxValues | TextSxValues>;

export type Theme = {
  variants?: Record<string, Variants>;
} & (SxValues | TextSxValues);

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme = {
  theme: Theme;
  componentConfig?: ComponentConfig;
};

export enum DescendantStyleName {
  TEXT = '_text',
  ICON = '_icon',
  SPINNER = '_spinner',
  INPUT = '_input',
}
