import { ViewStyle } from 'react-native';

import { ComponentTheme } from '../types';

import { DescendantStyleName, Size } from '$theme';
import {
  Color,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme/constants';

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
    _text: {
      textAlign: 'left',
      color: Color.GREY_02,
      fontFamily: Font.MAIN,
      fontSize: FontSize.SM,
      lineHeight: LineHeight[Size.SM],
      fontWeight: FontWeight.REGULAR,
    },
    ':focus': {
      borderColor: Color.DARK_00,
      _text: {
        color: Color.DARK_00,
      },
    },
    ':hover': {
      _text: {
        color: Color.DARK_00,
      },
    },
    ':disabled': {
      backgroundColor: Color.GREY_LIGHT_03,
      borderColor: Color.GREY_LIGHT_01,
      _text: {
        color: Color.GREY_01,
      },
    },
    ':invalid': {
      borderColor: Color.RED_00,
      _text: {
        color: Color.DARK_00,
      },
    },
    variants: {
      size: {
        [Size.SM]: {
          width: 208,
          _input: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight[Size.SM],
          },
        },
        [Size.MD]: {
          width: 228,
          _input: {
            fontSize: FontSize.MD,
            lineHeight: LineHeight[Size.MD],
          },
        },
        [Size.LG]: {
          width: 263,
          _input: {
            fontSize: FontSize.LG,
            lineHeight: LineHeight[Size.LG],
          },
        },
      },
    },
  },

  componentConfig: { descendantStyle: [DescendantStyleName.TEXT] },
} satisfies ComponentTheme<ViewStyle>;
