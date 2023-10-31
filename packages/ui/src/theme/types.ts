import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';
import { $Keys } from 'utility-types';

type VariantsRecord = Record<string, string>;

export type SxValues = Partial<SxProps<StyleProp<ViewStyle>>>;

type VariantsStyles<Variants extends VariantsRecord> = {
  [Key in $Keys<Variants>]: Record<Variants[Key], SxValues>;
};

export type Theme<Variants extends VariantsRecord> = {
  defaultProps?: Variants;
  variants?: VariantsStyles<Variants>;
} & SxValues;

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme<Variants extends VariantsRecord = VariantsRecord> = {
  theme: Theme<Variants>;
  componentConfig?: ComponentConfig;
};

export enum DescendantStyleName {
  TEXT = '_text',
  ICON = '_icon',
  SPINNER = '_spinner',
}
