import { ButtonSize, ButtonVariant, RadioVariant } from 'components';

import { Color, Font, FontSize, FontWeight, LineHeight } from './constants';
import { SxValues } from './types';

declare module '@gluestack-ui/themed' {
  interface UIConfig {
    tokens: {
      colors: Record<Color, string>;
      fonts: Record<Font, string>;
      fontSizes: Record<FontSize, number>;
      fontWeights: Record<FontWeight, number>;
      lineHeights: Record<LineHeight, number>;
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
