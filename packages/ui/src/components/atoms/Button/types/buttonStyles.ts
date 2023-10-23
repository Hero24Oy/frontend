import { Sizes } from 'theme/enums';

import { ButtonVariants } from '../enums';

export type SolidButtonStyles = {
  size: `${Sizes}`;
  variant: `${ButtonVariants.SOLID}`;
};

export type OutlineButtonStyles = {
  size: `${Sizes}`;
  variant: `${ButtonVariants.OUTLINE}`;
};

export type LinkButtonStyles = {
  size: `${Sizes.MEDIUM | Sizes.SMALL}`;
  variant: `${ButtonVariants.LINK}`;
};

export type ButtonStyles =
  | SolidButtonStyles
  | OutlineButtonStyles
  | LinkButtonStyles;
