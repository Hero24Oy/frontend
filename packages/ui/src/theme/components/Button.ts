import { ButtonSizes, ButtonVariants } from 'components/atoms/Button/enums';
import { Selectors } from 'types';

import { IconSize } from '../constants';

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
      fontFamily: '$main',
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
          [Selectors.DISABLED]: {
            backgroundColor: '$gray_1',
          },
          [Selectors.HOVER]: {
            backgroundColor: '$red_0',
          },
          [Selectors.ACTIVE]: {
            backgroundColor: '$gray_4',
          },
          [Selectors.FOCUS_VISIBLE]: {
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
          [Selectors.DISABLED]: {
            borderColor: '$gray_1',
            backgroundColor: '$gray_2',
            _text: {
              color: '$gray_1',
            },
            _icon: {
              color: '$gray_1',
            },
          },
          [Selectors.HOVER]: {
            borderColor: 'none',
            backgroundColor: '$dark_0',
            _text: {
              color: '$white_0',
            },
            _icon: {
              color: '$white_0',
            },
          },
          [Selectors.ACTIVE]: {
            borderColor: '$gray_4',
            backgroundColor: '$transparent',
            _text: {
              color: '$gray_4',
            },
            _icon: {
              color: '$gray_4',
            },
          },
          [Selectors.FOCUS_VISIBLE]: {
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
          [Selectors.DISABLED]: {
            _text: {
              color: '$gray_3',
            },
            _icon: {
              color: '$gray_3',
            },
          },
          [Selectors.HOVER]: {
            _text: {
              color: '$red_0',
            },
            _icon: {
              color: '$red_0',
            },
          },
          [Selectors.ACTIVE]: {
            borderColor: '$gray_4',
            _text: {
              color: '$gray_4',
            },
            _icon: {
              color: '$gray_4',
            },
          },
          [Selectors.FOCUS_VISIBLE]: {
            borderColor: '$blue_0',
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: ['_text', '_icon', '_spinner'] },
};
