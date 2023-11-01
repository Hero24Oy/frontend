import { ViewStyle } from 'react-native';

import { SxValues } from './types';

import { ButtonSize, ButtonVariant, RadioVariant } from '$components';
import { HeadingVariant } from '$components/atoms/Heading/constants';

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
    Heading: {
      theme: {
        variants: {
          variant: Record<`${HeadingVariant}`, ViewStyle>;
        };
      };
    };
    Radio: {
      theme: {
        variants: {
          variant: Record<`${RadioVariant}`, SxValues<ViewStyle>>;
        };
      };
    };
  }
}
