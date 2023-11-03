import { PressableProps, ViewStyle } from 'react-native';

import { Color, IconSize, Size } from '../constants';
import { DescendantStyleName } from '../enums';
import { ComponentTheme, SxValues } from '../types';

import { IconButtonSize } from '$atoms';

export type IconButtonThemeVariants = {
  size: Record<IconButtonSize, SxValues<ViewStyle>>;
};

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
              size: IconSize.LG,
            },
          },
        },
        [Size.MD]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.MD,
            },
          },
        },
        [Size.SM]: {
          [DescendantStyleName.ICON]: {
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
