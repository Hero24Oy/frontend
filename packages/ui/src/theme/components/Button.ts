import {
  Color,
  FontSize,
  FontWeight,
  IconSize,
  LineHeight,
} from '../constants';
import { DescendantStyleName, Size } from '../enums';
import { ComponentTheme } from '../types';

import { ButtonVariant } from '$components';

export const Button = {
  theme: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 'auto',
    borderWidth: 1,
    _text: {
      textDecorationLine: 'none',
      fontWeight: FontWeight.MEDIUM,
      lineHeight: LineHeight.SM,
    },
    variants: {
      size: {
        [Size.LG]: {
          width: '100%',
          paddingVertical: 11,
          _text: {
            fontSize: FontSize.SM,
          },
          _icon: {
            width: IconSize.SMALL,
            height: IconSize.SMALL,
          },
          _spinner: {
            props: {
              width: IconSize.SMALL,
              height: IconSize.SMALL,
            },
          },
        },
        [Size.MD]: {
          paddingVertical: 10,
          _text: {
            fontSize: FontSize.SM,
          },
          _icon: {
            width: IconSize.SMALL,
            height: IconSize.SMALL,
          },
          _spinner: {
            props: {
              width: IconSize.SMALL,
              height: IconSize.SMALL,
            },
          },
        },
        [Size.SM]: {
          paddingVertical: 8,
          _text: {
            fontSize: FontSize.XS,
          },
          _icon: {
            width: IconSize.EXTRA_SMALL,
            height: IconSize.EXTRA_SMALL,
          },
          _spinner: {
            props: {
              width: IconSize.EXTRA_SMALL,
              height: IconSize.EXTRA_SMALL,
            },
          },
        },
      },
      variant: {
        [ButtonVariant.SOLID]: {
          backgroundColor: Color.DARK_00,
          borderColor: Color.TRANSPARENT,
          _text: {
            color: Color.WHITE_00,
          },
          _icon: {
            color: Color.WHITE_00,
          },
          _spinner: {
            props: {
              color: Color.WHITE_00,
            },
          },
          ':disabled': {
            backgroundColor: Color.GREY_02,
          },
          ':hover': {
            backgroundColor: Color.RED_01,
          },
          ':active': {
            backgroundColor: Color.DARK_GREY_00,
          },
          ':focusVisible': {
            borderColor: Color.BLUE_01,
          },
        },
        [ButtonVariant.OUTLINE]: {
          backgroundColor: Color.TRANSPARENT,
          borderColor: Color.GREY_02,
          _text: {
            color: Color.DARK_00,
          },
          _icon: {
            color: Color.DARK_00,
          },
          _spinner: {
            props: {
              color: Color.GREY_02,
            },
          },
          ':disabled': {
            borderColor: Color.GREY_02,
            backgroundColor: Color.GREY_03,
            _text: {
              color: Color.GREY_02,
            },
            _icon: {
              color: Color.GREY_02,
            },
          },
          ':hover': {
            borderColor: 'none',
            backgroundColor: Color.DARK_00,
            _text: {
              color: Color.WHITE_00,
            },
            _icon: {
              color: Color.WHITE_00,
            },
          },
          ':active': {
            borderColor: Color.DARK_GREY_00,
            backgroundColor: Color.TRANSPARENT,
            _text: {
              color: Color.DARK_GREY_00,
            },
            _icon: {
              color: Color.DARK_GREY_00,
            },
          },
          ':focusVisible': {
            borderColor: Color.BLUE_01,
            _text: {
              color: Color.DARK_00,
            },
            _icon: {
              color: Color.DARK_00,
            },
          },
        },
        [ButtonVariant.LINK]: {
          backgroundColor: Color.TRANSPARENT,
          borderColor: Color.TRANSPARENT,
          _text: {
            color: Color.DARK_00,
          },
          _icon: {
            color: Color.DARK_00,
          },
          _spinner: {
            props: {
              color: Color.GREY_03,
            },
          },
          ':disabled': {
            _text: {
              color: Color.GREY_03,
            },
            _icon: {
              color: Color.GREY_03,
            },
          },
          ':hover': {
            _text: {
              color: Color.RED_01,
            },
            _icon: {
              color: Color.RED_01,
            },
          },
          ':active': {
            borderColor: Color.DARK_GREY_00,
            _text: {
              color: Color.DARK_GREY_00,
            },
            _icon: {
              color: Color.DARK_GREY_00,
            },
          },
          ':focusVisible': {
            borderColor: Color.BLUE_01,
          },
        },
      },
    },
  },
  componentConfig: {
    descendantStyle: [
      DescendantStyleName.TEXT,
      DescendantStyleName.ICON,
      DescendantStyleName.SPINNER,
    ],
  },
} satisfies ComponentTheme<{ size: Size; variant: ButtonVariant }>;
