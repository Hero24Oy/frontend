import { TextVariants } from './components/Text/constants';

import { ButtonSize, ButtonVariant, RadioVariant } from '$components';
import { InputSize } from '$molecules/Input';
import { SxValues, TextSxValues } from '$theme';

declare module '@gluestack-ui/themed' {
  interface UIComponents {
    Button: {
      theme: {
        variants: {
          size: Record<`${ButtonSize}`, SxValues>;
          variant: Record<`${ButtonVariant}`, SxValues>;
        };
      };
    };
    CodeFieldCell: {
      theme: {
        variants: {
          isFocused: Record<boolean, TextSxValues>;
        };
      };
    };
    Input: {
      theme: {
        variants: {
          size: Record<`${InputSize}`, SxValues>;
        };
      };
    };
    InputTitle: {
      theme: {
        variants: {
          size: Record<`${InputSize}`, TextSxValues>;
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
    Text: {
      theme: {
        variants: {
          variant: Record<`${TextVariants}`, TextSxValues>;
        };
      };
    };
  }
}
