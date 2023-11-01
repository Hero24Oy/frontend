import { TextStyle, ViewStyle } from 'react-native';

import { SxValues } from './types';

import { ButtonSize, ButtonVariant, RadioVariant } from '$components';
import { HeadingVariant } from '$components/atoms/Heading/constants';
import { TextVariant } from '$components/atoms/Text/types';

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
    CodeFieldCell: {
      theme: {
        variants: {
          isFocused: Record<boolean, SxValues<TextStyle>>;
        };
      };
    };
    Heading: {
      theme: {
        variants: {
          size: Record<`${HeadingVariant}`, SxValues<ViewStyle>>;
        };
      };
    };

    Input: {
      theme: {
        variants: {
          size: Record<`${InputSize}`, SxValues<ViewStyle>>;
        };
      };
    };
    InputTitle: {
      theme: {
        variants: {
          size: Record<`${InputSize}`, SxValues<TextStyle>>;
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
    Text: {
      theme: {
        variants: {
          variant: Record<`${TextVariant}`, SxValues<TextStyle>>;
        };
      };
    };
  }
}
