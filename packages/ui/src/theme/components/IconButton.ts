import { Color, IconSize } from '../constants';
import { DescendantStyleName, Size } from '../enums';
import { ComponentTheme } from '../types';

export const IconButton = {
  theme: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.GREY_03,
    [DescendantStyleName.ICON]: {
      color: Color.BLACK_00,
    },
    variants: {
      size: {
        [Size.LG]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.LARGE,
            },
          },
        },
        [Size.MD]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.MEDIUM,
            },
          },
        },
        [Size.SM]: {
          [DescendantStyleName.ICON]: {
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
