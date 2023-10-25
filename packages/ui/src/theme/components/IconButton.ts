import { IconSizes } from 'components/atoms/IconButton';

import { IconSize } from '../constants';

export const IconButton = {
  theme: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '$gray_5',
    _icon: {
      color: '$black_0',
    },
    variants: {
      size: {
        [IconSizes.LARGE]: {
          _icon: {
            width: IconSize.LARGE,
            height: IconSize.LARGE,
          },
        },
        [IconSizes.MEDIUM]: {
          _icon: {
            width: IconSize.MEDIUM,
            height: IconSize.MEDIUM,
          },
        },
        [IconSizes.SMALL]: {
          _icon: {
            width: IconSize.SMALL,
            height: IconSize.SMALL,
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: ['_icon'] },
};
