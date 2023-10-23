import { ButtonSizes, ButtonVariants } from '../enums';

export type SolidButtonStyles = {
  size: `${ButtonSizes}`;
  variant: `${ButtonVariants.SOLID}`;
};

export type OutlineButtonStyles = {
  size: `${ButtonSizes}`;
  variant: `${ButtonVariants.OUTLINE}`;
};

export type LinkButtonStyles = {
  size: `${ButtonSizes.MEDIUM | ButtonSizes.SMALL}`;
  variant: `${ButtonVariants.LINK}`;
};

export type ButtonStyles =
  | SolidButtonStyles
  | OutlineButtonStyles
  | LinkButtonStyles;
