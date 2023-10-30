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
      lineHeight: LineHeight.DEFAULT,
    },
    variants: {
      size: {
        [Size.LARGE]: {
          width: '100%',
          paddingVertical: 11,
          _text: {
            fontSize: FontSize.SMALL,
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
        [Size.MEDIUM]: {
          paddingVertical: 10,
          _text: {
            fontSize: FontSize.SMALL,
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
        [Size.SMALL]: {
          paddingVertical: 8,
          _text: {
            fontSize: FontSize.EXTRA_SMALL,
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
          backgroundColor: Color.DARK_01,
          borderColor: Color.TRANSPARENT,
          _text: {
            color: Color.WHITE_01,
          },
          _icon: {
            color: Color.WHITE_01,
          },
          _spinner: {
            props: {
              color: Color.WHITE_01,
            },
          },
          ':disabled': {
            backgroundColor: Color.GRAY_02,
          },
          ':hover': {
            backgroundColor: Color.RED_01,
          },
          ':active': {
            backgroundColor: Color.GRAY_05,
          },
          ':focusVisible': {
            borderColor: Color.BLUE_01,
          },
        },
        [ButtonVariant.OUTLINE]: {
          backgroundColor: Color.TRANSPARENT,
          borderColor: Color.GRAY_02,
          _text: {
            color: Color.DARK_01,
          },
          _icon: {
            color: Color.DARK_01,
          },
          _spinner: {
            props: {
              color: Color.GRAY_02,
            },
          },
          ':disabled': {
            borderColor: Color.GRAY_02,
            backgroundColor: Color.GRAY_03,
            _text: {
              color: Color.GRAY_02,
            },
            _icon: {
              color: Color.GRAY_02,
            },
          },
          ':hover': {
            borderColor: 'none',
            backgroundColor: Color.DARK_01,
            _text: {
              color: Color.WHITE_01,
            },
            _icon: {
              color: Color.WHITE_01,
            },
          },
          ':active': {
            borderColor: Color.GRAY_05,
            backgroundColor: Color.TRANSPARENT,
            _text: {
              color: Color.GRAY_05,
            },
            _icon: {
              color: Color.GRAY_05,
            },
          },
          ':focusVisible': {
            borderColor: Color.BLUE_01,
            _text: {
              color: Color.DARK_01,
            },
            _icon: {
              color: Color.DARK_01,
            },
          },
        },
        [ButtonVariant.LINK]: {
          backgroundColor: Color.TRANSPARENT,
          borderColor: Color.TRANSPARENT,
          _text: {
            color: Color.DARK_01,
          },
          _icon: {
            color: Color.DARK_01,
          },
          _spinner: {
            props: {
              color: Color.GRAY_04,
            },
          },
          ':disabled': {
            _text: {
              color: Color.GRAY_04,
            },
            _icon: {
              color: Color.GRAY_04,
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
            borderColor: Color.GRAY_05,
            _text: {
              color: Color.GRAY_05,
            },
            _icon: {
              color: Color.GRAY_05,
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
} satisfies ComponentTheme;
