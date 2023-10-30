import { ButtonSize, ButtonVariant, RadioVariant } from '$components';
import { HeadingVariant } from '$components/atoms/Heading/enums';
import { SxValues } from '$theme/types';

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
    Heading: {
      theme: {
        variants: {
          variant: Record<`${HeadingVariant}`, SxValues>;
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
