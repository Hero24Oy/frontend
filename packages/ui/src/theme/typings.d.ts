import {
  ButtonSize,
  ButtonVariant,
  ImageSize,
  RadioVariant,
} from '$components';
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
    Image: {
      theme: {
        variants: {
          variant: Record<`${ImageSize}`, SxValues>;
        };
      };
    };
    Radio: {
      theme: {
        variants: {
          size: Record<`${RadioVariant}`, SxValues>;
        };
      };
    };
  }
}
