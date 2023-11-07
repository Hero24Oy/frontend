import { ViewProps, ViewStyle } from 'react-native';

import { ComponentTheme, SxValues } from '../types';

import { TextAreaSize } from '$components';
import { DescendantStyleName, Size } from '$theme';
import {
  Color,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme/constants';

export type TextareaThemeVariants = {
  size: Record<TextAreaSize, SxValues<ViewStyle>>;
};

export const Textarea = {
  theme: {
    width: '100%',
    height: 100,
    paddingTop: 12,
    paddingRight: 26,
    paddingLeft: 12,
    paddingBottom: 30,
    backgroundColor: Color.WHITE_00,
    borderColor: Color.GREY_02,
    borderWidth: 1,
    borderRadius: 6,
    gap: 33,
    [DescendantStyleName.TEXT]: {
      textAlign: 'left',
      color: Color.GREY_02,
      fontFamily: Font.ONEST_400,
      fontWeight: FontWeight.REGULAR,
      fontSize: FontSize.SM,
      lineHeight: LineHeight.SM,
    },
    ':focus': {
      borderColor: Color.DARK_00,
      [DescendantStyleName.TEXT]: {
        color: Color.DARK_00,
      },
    },
    ':hover': {
      [DescendantStyleName.TEXT]: {
        color: Color.DARK_00,
      },
    },
    ':disabled': {
      backgroundColor: Color.GREY_LIGHT_03,
      borderColor: Color.GREY_LIGHT_01,
      [DescendantStyleName.TEXT]: {
        color: Color.GREY_01,
      },
    },
    ':invalid': {
      borderColor: Color.RED_00,
      [DescendantStyleName.TEXT]: {
        color: Color.DARK_00,
      },
    },
    variants: {
      size: {
        [Size.SM]: {
          width: 208,
          [DescendantStyleName.INPUT]: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
          },
        },
        [Size.MD]: {
          width: 228,
          [DescendantStyleName.INPUT]: {
            fontSize: FontSize.MD,
            lineHeight: LineHeight.MD,
          },
        },
        [Size.LG]: {
          width: 263,
          [DescendantStyleName.INPUT]: {
            fontSize: FontSize.LG,
            lineHeight: LineHeight.LG,
          },
        },
      },
    },
  },

  componentConfig: {
    descendantStyle: [DescendantStyleName.TEXT, DescendantStyleName.INPUT],
  },
} satisfies ComponentTheme<ViewProps, TextareaThemeVariants>;
