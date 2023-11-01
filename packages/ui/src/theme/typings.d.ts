import { ButtonThemeVariants, RadioThemeVariants } from '$theme/components';

declare module '@gluestack-ui/themed' {
  interface UIComponents {
    Button: {
      theme: {
        variants: ButtonThemeVariants;
      };
    };
    Radio: {
      theme: {
        variants: RadioThemeVariants;
      };
    };
  }
}
