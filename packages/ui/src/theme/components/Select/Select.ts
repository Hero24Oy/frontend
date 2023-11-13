import { ViewProps, ViewStyle } from 'react-native';

import { SelectSize } from '$components';
import {
  Color,
  ComponentTheme,
  DescendantStyleName,
  IconSize,
  Size,
  SxValues,
} from '$theme';

export type SelectorVariants = {
  size: Record<SelectSize, SxValues<ViewStyle>>;
};

export const CustomSelect = {
  theme: {
    backgroundColor: Color.WHITE_00,
    [DescendantStyleName.LABEL]: {
      color: Color.GREY_01,
    },
    [DescendantStyleName.TEXT]: {
      color: Color.DARK_00,
    },
    [DescendantStyleName.ICON]: {
      marginLeft: 32,
    },
    [DescendantStyleName.DIVIDER]: {
      marginTop: 16,
      height: 1,
      backgroundColor: Color.GREY_LIGHT_01,
    },
    variants: {
      size: {
        [Size.SM]: {
          [DescendantStyleName.LABEL]: {
            fontSize: 12,
            lineHeight: 18,
          },
          [DescendantStyleName.TEXT]: {
            fontSize: 14,
            lineHeight: 21,
          },
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.SM,
            },
          },
        },
        [Size.MD]: {
          [DescendantStyleName.LABEL]: {
            fontSize: 14,
            lineHeight: 21,
          },
          [DescendantStyleName.TEXT]: {
            fontSize: 16,
            lineHeight: 24,
          },
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.MD,
            },
          },
        },
      },
    },
  },
} satisfies ComponentTheme<ViewProps, SelectorVariants>;
