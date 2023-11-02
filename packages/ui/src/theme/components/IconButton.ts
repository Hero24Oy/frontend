import { PressableProps, ViewStyle } from 'react-native';

import { Color, IconSize } from '../constants';
import { DescendantStyleName, Size } from '../enums';
import { ComponentTheme, SxValues } from '../types';

export type IconButtonThemeVariants = {
  size: Record<Size, SxValues<ViewStyle>>;
};

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
              size: IconSize.XL,
            },
          },
        },
        [Size.MD]: {
          _icon: {
            props: {
              size: IconSize.LG,
            },
          },
        },
        [Size.SM]: {
          _icon: {
            props: {
              size: IconSize.SM,
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.ICON] },
} satisfies ComponentTheme<PressableProps, IconButtonThemeVariants>;
