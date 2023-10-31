import { TextStyle, ViewStyle } from 'react-native';

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
    CodeFieldCell: {
      theme: {
        variants: {
          isFocused: Record<boolean, SxValues<TextStyle>>;
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
          variant: Record<`${TextVariants}`, SxValues<TextStyle>>;
        };
      };
    };
  }
}
