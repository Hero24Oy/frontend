import { ButtonSizes, ButtonVariants } from 'components/atoms/Button/types';

import { IconSize } from '../constants';
import { ComponentTheme } from '../types';

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
        [ButtonSizes.LARGE]: {
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
        [ButtonSizes.MEDIUM]: {
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
        [ButtonSizes.SMALL]: {
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
        [ButtonVariants.SOLID]: {
          backgroundColor: '$dark_0',
          borderColor: '$transparent',
          _text: {
            color: '$white_0',
          },
          _icon: {
            color: '$white_0',
          },
          _spinner: {
            props: {
              color: '$white_0',
            },
          },
          ':disabled': {
            backgroundColor: '$gray_1',
          },
          ':hover': {
            backgroundColor: '$red_0',
          },
          ':active': {
            backgroundColor: '$gray_4',
          },
          ':focusVisible': {
            borderColor: '$blue_0',
          },
        },
        [ButtonVariants.OUTLINE]: {
          backgroundColor: '$transparent',
          borderColor: '$gray_1',
          _text: {
            color: '$dark_0',
          },
          _icon: {
            color: '$dark_0',
          },
          _spinner: {
            props: {
              color: '$gray_1',
            },
          },
          ':disabled': {
            borderColor: '$gray_1',
            backgroundColor: '$gray_2',
            _text: {
              color: '$gray_1',
            },
            _icon: {
              color: '$gray_1',
            },
          },
          ':hover': {
            borderColor: 'none',
            backgroundColor: '$dark_0',
            _text: {
              color: '$white_0',
            },
            _icon: {
              color: '$white_0',
            },
          },
          ':active': {
            borderColor: '$gray_4',
            backgroundColor: '$transparent',
            _text: {
              color: '$gray_4',
            },
            _icon: {
              color: '$gray_4',
            },
          },
          ':focusVisible': {
            borderColor: '$blue_0',
            _text: {
              color: '$dark_0',
            },
            _icon: {
              color: '$dark_0',
            },
          },
        },
        [ButtonVariants.LINK]: {
          backgroundColor: '$transparent',
          borderColor: '$transparent',
          _text: {
            color: '$dark_0',
          },
          _icon: {
            color: '$dark_0',
          },
          _spinner: {
            props: {
              color: '$gray_3',
            },
          },
          ':disabled': {
            _text: {
              color: '$gray_3',
            },
            _icon: {
              color: '$gray_3',
            },
          },
          ':hover': {
            _text: {
              color: '$red_0',
            },
            _icon: {
              color: '$red_0',
            },
          },
          ':active': {
            borderColor: '$gray_4',
            _text: {
              color: '$gray_4',
            },
            _icon: {
              color: '$gray_4',
            },
          },
          ':focusVisible': {
            borderColor: '$blue_0',
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: ['_text', '_icon', '_spinner'] },
} satisfies ComponentTheme;
