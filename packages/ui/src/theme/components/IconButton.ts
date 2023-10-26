import { IconSizes } from 'components/atoms/IconButton';
import { DescendantStyle } from 'theme/types';

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
            props: {
              size: IconSize.LARGE,
            },
          },
        },
        [IconSizes.MEDIUM]: {
          _icon: {
            props: {
              size: IconSize.MEDIUM,
            },
          },
        },
        [IconSizes.SMALL]: {
          _icon: {
            props: {
              size: IconSize.SMALL,
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: [DescendantStyle.ICON] },
};
