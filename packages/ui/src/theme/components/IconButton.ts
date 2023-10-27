import { IconSize } from '../constants';

import { ComponentTheme, DescendantStyleName, Size } from '$theme/types';

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
        [Size.LARGE]: {
          _icon: {
            props: {
              size: IconSize.LARGE,
            },
          },
        },
        [Size.MEDIUM]: {
          _icon: {
            props: {
              size: IconSize.MEDIUM,
            },
          },
        },
        [Size.SMALL]: {
          _icon: {
            props: {
              size: IconSize.SMALL,
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.ICON] },
} satisfies ComponentTheme;
