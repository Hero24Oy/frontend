import {
  ButtonThemeVariants,
  HeadingThemeVariants,
  InputThemeVariants,
  InputTitleThemeVariants,
  RadioThemeVariants,
  TextThemeVariants,
} from '$theme/components';

declare module '@gluestack-ui/themed' {
  interface UIComponents {
    Button: {
      theme: {
        variants: ButtonThemeVariants;
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
    Text: {
      theme: {
        variants: TextThemeVariants;
      };
    };
  }
}
