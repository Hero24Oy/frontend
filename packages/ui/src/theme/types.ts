import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';
import { $Keys } from 'utility-types';

type VariantsRecord = Record<string, string>;

export type SxValues<StyleType extends ViewStyle> = Partial<
  SxProps<StyleProp<StyleType>>
>;

type VariantsStyles<
  Variants extends VariantsRecord,
  StyleType extends ViewStyle,
> = {
  [Key in $Keys<Variants>]: Record<Variants[Key], SxValues<StyleType>>;
};

export type Theme<
  Variants extends VariantsRecord,
  StyleType extends ViewStyle,
> = {
  defaultProps?: Variants;
  variants?: VariantsStyles<Variants, StyleType>;
} & SxValues<StyleType>;

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme<
  Variants extends VariantsRecord = VariantsRecord,
  StyleType extends ViewStyle = ViewStyle,
> = {
  theme: Theme<Variants, StyleType>;
  componentConfig?: ComponentConfig;
  props?: Record<string, unknown>;
};
