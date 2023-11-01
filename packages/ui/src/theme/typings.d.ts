import { TextStyle, ViewStyle } from 'react-native';

import { SxValues } from './types';

import {
  ButtonSize,
  ButtonVariant,
  RadioVariant,
  TextareaSize,
} from '$components';
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
    Heading: {
      theme: {
        variants: {
          variant: Record<`${HeadingVariant}`, SxValues<ViewStyle>>;
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
          variant: Record<`${TextVariant}`, SxValues<TextStyle>>;
        };
      };
    };
    Textarea: {
      theme: {
        size: {
          variant: Record<`${TextareaSize}`, SxValues<ViewStyle>>;
        };
      };
    };
  }
}
