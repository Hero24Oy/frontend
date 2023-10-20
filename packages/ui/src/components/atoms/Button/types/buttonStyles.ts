import { ButtonSize, ButtonVariants } from "../enums";

export type SolidButtonStyles = {
  size: `${ButtonSize}`;
  variant: `${ButtonVariants.SOLID}`;
};

export type OutlineButtonStyles = {
  size: `${ButtonSize}`;
  variant: `${ButtonVariants.OUTLINE}`;
};

export type LinkButtonStyles = {
  size: `${ButtonSize.MEDIUM | ButtonSize.SMALL}`;
  variant: `${ButtonVariants.LINK}`;
};

export type ButtonStyles =
  | SolidButtonStyles
  | OutlineButtonStyles
  | LinkButtonStyles;
  