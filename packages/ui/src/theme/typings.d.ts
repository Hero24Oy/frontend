import { ViewStyle } from 'react-native';

import { Size } from './enums';
import { SxValues } from './types';

import { ButtonSize, ButtonVariant, RadioVariant } from '$components';

declare module '@gluestack-ui/themed' {
  interface UIComponents {
    Button: {
      theme: {
        variants: {
          size: Record<`${ButtonSize}`, SxValues<ViewStyle>>;
          variant: Record<`${ButtonVariant}`, SxValues<ViewStyle>>;
        };
      };
    };
    Radio: {
      theme: {
        variants: {
          size: Record<`${Size}`, SxValues<ViewStyle>>;
          variant: Record<`${RadioVariant}`, SxValues<ViewStyle>>;
        };
      };
    };
  }
}
