import { ButtonSize, ButtonVariant, RadioVariant } from 'components';

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from './constants';
import { SxValues } from './types';

declare module '@gluestack-ui/themed' {
  interface UIConfig {
    tokens: {
      colors: Record<`${keyof typeof colors}`, string>;
      fonts: Record<`${keyof typeof fonts}`, string>;
      fontSizes: Record<`${keyof typeof fontSizes}`, number>;
      fontWeights: Record<`${keyof typeof fontWeights}`, string>;
      lineHeights: Record<`${keyof typeof lineHeights}`, number>;
    };
  }
  interface UIComponents {
    Button: {
      theme: {
        variants: {
          size: Record<`${ButtonSize}`, SxValues>;
          variant: Record<`${ButtonVariant}`, SxValues>;
        };
      };
    };
    Radio: {
      theme: {
        variants: {
          variant: Record<`${RadioVariant}`, SxValues>;
        };
      };
    };
  }
}
