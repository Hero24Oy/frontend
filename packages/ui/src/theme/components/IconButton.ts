import { IconSizes } from 'components/atoms/IconButton';

import { Color, IconSize } from '../constants';

export const IconButton = {
  theme: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.GRAY_06,
    _icon: {
      color: Color.BLACK_01,
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
