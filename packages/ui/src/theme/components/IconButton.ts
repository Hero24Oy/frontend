import { IconSizes } from 'components/atoms/IconButton';

import { IconSize } from '../constants';
import { ComponentTheme, DescendantStyle } from '../types';

export const IconButton = {
  theme: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '$gray_06',
    _icon: {
      color: '$black_01',
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
} satisfies ComponentTheme;
