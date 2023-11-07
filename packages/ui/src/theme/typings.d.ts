import {
  ButtonThemeVariants,
  HeadingThemeVariants,
  InputThemeVariants,
  InputTitleThemeVariants,
  RadioThemeVariants,
  SliderFilledTrackThemeVariants,
  SliderThemeVariants,
  SliderThumbThemeVariants,
  SliderTrackThemeVariants,
  TextareaThemeVariants,
  TextThemeVariants,
} from '$theme/components';

declare module '@gluestack-ui/themed' {
  interface UIComponents {
    Button: {
      theme: {
        variants: ButtonThemeVariants;
      };
    };
    FilledTrack: {
      theme: {
        variant: SliderFilledTrackThemeVariants;
      };
    };
    Heading: {
      theme: {
        variants: HeadingThemeVariants;
      };
    };
    Input: {
      theme: {
        variants: InputThemeVariants;
      };
    };
    InputTitle: {
      theme: {
        variants: InputTitleThemeVariants;
      };
    };
    Radio: {
      theme: {
        variants: RadioThemeVariants;
      };
    };
    Slider: {
      theme: {
        variant: SliderThemeVariants;
      };
    };
    SliderThumb: {
      theme: {
        variant: SliderThumbThemeVariants;
      };
    };
    SliderTrack: {
      theme: {
        variant: SliderTrackThemeVariants;
      };
    };
    Text: {
      theme: {
        variants: TextThemeVariants;
      };
    };
    Textarea: {
      theme: {
        variants: TextareaThemeVariants;
      };
    };
  }
}
