import { Color, IconSize } from '../constants';
import { DescendantStyleName, Size } from '../enums';
import { ComponentTheme } from '../types';

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
