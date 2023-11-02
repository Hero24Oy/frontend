import { Color, IconSize, Size } from '../constants';
import { DescendantStyleName } from '../enums';
import { ComponentTheme } from '../types';

export const IconButton = {
  theme: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.GREY_03,
    _icon: {
      color: Color.BLACK_00,
    },
    variants: {
      size: {
        [Size.LG]: {
          _icon: {
            props: {
              size: IconSize.LARGE,
            },
          },
        },
        [Size.MD]: {
          _icon: {
            props: {
              size: IconSize.MEDIUM,
            },
          },
        },
        [Size.SM]: {
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
