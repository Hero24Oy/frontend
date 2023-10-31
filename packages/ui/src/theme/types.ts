import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

export type SxValues<StyleType extends ViewStyle> = Partial<
  SxProps<StyleProp<StyleType>>
>;

export type Variants<StyleType extends ViewStyle> = Record<
  string,
  SxValues<StyleType>
>;

export type Theme<StyleType extends ViewStyle> = {
  variants?: Record<string, Variants<StyleType>>;
} & SxValues<StyleType>;

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme<StyleType extends ViewStyle> = {
  theme: Theme<StyleType>;
  componentConfig?: ComponentConfig;
  props?: Record<string, unknown>;
};
