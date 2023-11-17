import { ViewProps, ViewStyle } from 'react-native';

import { SelectSize } from '$components/organisms/Select/types';
import {
  Color,
  ComponentTheme,
  DescendantStyleName,
  FontSize,
  IconSize,
  LineHeight,
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
            fontSize: FontSize.XS,
            lineHeight: LineHeight.XS,
          },
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
          },
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.SM,
            },
          },
        },
        [Size.MD]: {
          [DescendantStyleName.LABEL]: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
          },
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.MD,
            lineHeight: LineHeight.MD,
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
