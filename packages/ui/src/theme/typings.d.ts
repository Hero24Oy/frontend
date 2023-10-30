import { TextVariants } from './components/Text/constants';

import { ButtonSize, ButtonVariant, RadioVariant } from '$components';
import { InputSize } from '$molecules';
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
          variant: Record<`${InputSize}`, TextSxValues>;
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
