import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ViewSxValues = SxProps<StyleProp<ViewStyle>>;

export type TextSxValues = SxProps<StyleProp<TextStyle>>;

export type Variants<T> = Record<string, T>;

export type Theme<T> = {
  variants?: Record<string, Variants<T>>;
} & T;

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme<T> = {
  theme: Theme<T>;
  componentConfig?: ComponentConfig;
};

export enum DescendantStyleName {
  TEXT = '_text',
  ICON = '_icon',
  SPINNER = '_spinner',
  INPUT = '_input',
}
