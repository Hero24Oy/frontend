import { TextStyle, ViewStyle } from 'react-native';

import { SxValues } from './types';

import { ButtonSize, ButtonVariant, RadioVariant } from '$components';
import { HeadingVariant } from '$components/atoms/Heading/constants';
import { SliderOrientation, SliderSize } from '$components/atoms/Slider/types';
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
    FilledTrack: {
      theme: {
        variant: {
          orientation: Record<`${SliderOrientation}`, SxValues<ViewStyle>>;
          size: Record<`${SliderSize}`, SxValues<ViewStyle>>;
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
    MarksContainer: {
      theme: {
        variant: {
          size: Record<`${SliderSize}`, SxValues<ViewStyle>>;
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
    Slider: {
      theme: {
        variant: {
          orientation: Record<`${SliderOrientation}`, SxValues<ViewStyle>>;
          size: Record<`${SliderSize}`, SxValues<ViewStyle>>;
        };
      };
    };
    SliderThumb: {
      theme: {
        variant: {
          orientation: Record<`${SliderOrientation}`, SxValues<ViewStyle>>;
          size: Record<`${SliderSize}`, SxValues<ViewStyle>>;
        };
      };
    };
    SliderTrack: {
      theme: {
        variant: {
          orientation: Record<`${SliderOrientation}`, SxValues<ViewStyle>>;
          size: Record<`${SliderSize}`, SxValues<ViewStyle>>;
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
