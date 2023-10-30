import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, ViewStyle } from 'react-native';

import { Keys } from '$types';

export type SxValues = Partial<SxProps<StyleProp<ViewStyle>>>;

export type Theme<Variants extends Record<string, string>> = {
  defaultProps?: Variants;
  variants?: {
    [Key in Keys<Variants>]: Record<Variants[Key], SxValues>;
  };
} & SxValues;

export type ComponentConfig = {
  descendantStyle: string[];
};

export type ComponentTheme<
  Variants extends Record<string, string> = Record<string, string>,
> = {
  theme: Theme<Variants>;
  componentConfig?: ComponentConfig;
};

export enum DescendantStyleName {
  TEXT = '_text',
  ICON = '_icon',
  SPINNER = '_spinner',
}
