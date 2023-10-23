import { IconSize } from 'configs';

import { ButtonSizes } from '../enums';
import { ButtonSizesConfig } from '../types';

export const buttonSizes = {
  [ButtonSizes.LARGE]: {
    fontSize: 14,
    iconSize: IconSize.SMALL,
  },
  [ButtonSizes.MEDIUM]: {
    fontSize: 14,
    iconSize: IconSize.SMALL,
  },
  [ButtonSizes.SMALL]: {
    fontSize: 12,
    iconSize: IconSize.EXTRA_SMALL,
  },
} satisfies Record<ButtonSizes, ButtonSizesConfig>;
