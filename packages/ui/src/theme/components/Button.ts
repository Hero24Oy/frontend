import { ButtonVariant } from 'components/atoms/Button';

import { IconSize } from '../constants';
import { ComponentTheme, DescendantStyle, Size } from '../types';

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
      fontWeight: '$medium',
      lineHeight: '$default',
    },
    variants: {
      size: {
        [Size.LARGE]: {
          width: '100%',
          paddingVertical: 11,
          _text: {
            fontSize: '$small',
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
            fontSize: '$small',
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
            fontSize: '$extraSmall',
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
          backgroundColor: '$dark_01',
          borderColor: '$transparent',
          _text: {
            color: '$white_01',
          },
          _icon: {
            color: '$white_01',
          },
          _spinner: {
            props: {
              color: '$white_01',
            },
          },
          ':disabled': {
            backgroundColor: '$gray_02',
          },
          ':hover': {
            backgroundColor: '$red_01',
          },
          ':active': {
            backgroundColor: '$gray_05',
          },
          ':focusVisible': {
            borderColor: '$blue_01',
          },
        },
        [ButtonVariant.OUTLINE]: {
          backgroundColor: '$transparent',
          borderColor: '$gray_02',
          _text: {
            color: '$dark_01',
          },
          _icon: {
            color: '$dark_01',
          },
          _spinner: {
            props: {
              color: '$gray_02',
            },
          },
          ':disabled': {
            borderColor: '$gray_02',
            backgroundColor: '$gray_03',
            _text: {
              color: '$gray_02',
            },
            _icon: {
              color: '$gray_02',
            },
          },
          ':hover': {
            borderColor: 'none',
            backgroundColor: '$dark_01',
            _text: {
              color: '$white_01',
            },
            _icon: {
              color: '$white_01',
            },
          },
          ':active': {
            borderColor: '$gray_05',
            backgroundColor: '$transparent',
            _text: {
              color: '$gray_05',
            },
            _icon: {
              color: '$gray_05',
            },
          },
          ':focusVisible': {
            borderColor: '$blue_01',
            _text: {
              color: '$dark_01',
            },
            _icon: {
              color: '$dark_01',
            },
          },
        },
        [ButtonVariant.LINK]: {
          backgroundColor: '$transparent',
          borderColor: '$transparent',
          _text: {
            color: '$dark_01',
          },
          _icon: {
            color: '$dark_01',
          },
          _spinner: {
            props: {
              color: '$gray_04',
            },
          },
          ':disabled': {
            _text: {
              color: '$gray_04',
            },
            _icon: {
              color: '$gray_04',
            },
          },
          ':hover': {
            _text: {
              color: '$red_01',
            },
            _icon: {
              color: '$red_01',
            },
          },
          ':active': {
            borderColor: '$gray_05',
            _text: {
              color: '$gray_05',
            },
            _icon: {
              color: '$gray_05',
            },
          },
          ':focusVisible': {
            borderColor: '$blue_01',
          },
        },
      },
    },
  },
  componentConfig: {
    descendantStyle: [
      DescendantStyle.TEXT,
      DescendantStyle.ICON,
      DescendantStyle.SPINNER,
    ],
  },
} satisfies ComponentTheme;
