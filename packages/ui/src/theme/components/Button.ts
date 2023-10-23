import { ButtonVariants } from 'components/atoms/Button/enums';
import { Selectors } from 'types';

import { IconSize, Sizes } from '../enums';

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
        [Sizes.LARGE]: {
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
        [Sizes.MEDIUM]: {
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
        [Sizes.SMALL]: {
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
          backgroundColor: '$dark',
          borderColor: '$transparent',
          _text: {
            color: '$white',
          },
          _icon: {
            color: '$white',
          },
          _spinner: {
            props: {
              color: '$white',
            },
          },
          [Selectors.DISABLED]: {
            backgroundColor: '$grayLightInput',
          },
          [Selectors.HOVER]: {
            backgroundColor: '$red',
          },
          [Selectors.ACTIVE]: {
            backgroundColor: '$grayDark',
          },
          [Selectors.FOCUS_VISIBLE]: {
            borderColor: '$alertBlue',
          },
        },
        [ButtonVariants.OUTLINE]: {
          backgroundColor: '$transparent',
          borderColor: '$grayLightInput',
          _text: {
            color: '$dark',
          },
          _icon: {
            color: '$dark',
          },
          _spinner: {
            props: {
              color: '$grayLightInput',
            },
          },
          [Selectors.DISABLED]: {
            borderColor: '$grayLightInput',
            backgroundColor: '$grayLightDisable',
            _text: {
              color: '$grayLightInput',
            },
            _icon: {
              color: '$grayLightInput',
            },
          },
          [Selectors.HOVER]: {
            borderColor: 'none',
            backgroundColor: '$dark',
            _text: {
              color: '$white',
            },
            _icon: {
              color: '$white',
            },
          },
          [Selectors.ACTIVE]: {
            borderColor: '$grayDark',
            backgroundColor: '$transparent',
            _text: {
              color: '$grayDark',
            },
            _icon: {
              color: '$grayDark',
            },
          },
          [Selectors.FOCUS_VISIBLE]: {
            borderColor: '$alertBlue',
            _text: {
              color: '$dark',
            },
            _icon: {
              color: '$dark',
            },
          },
        },
        [ButtonVariants.LINK]: {
          backgroundColor: '$transparent',
          borderColor: '$transparent',
          _text: {
            color: '$dark',
          },
          _icon: {
            color: '$dark',
          },
          _spinner: {
            props: {
              color: '$grayPlaceholder',
            },
          },
          [Selectors.DISABLED]: {
            _text: {
              color: '$grayPlaceholder',
            },
            _icon: {
              color: '$grayPlaceholder',
            },
          },
          [Selectors.HOVER]: {
            _text: {
              color: '$red',
            },
            _icon: {
              color: '$red',
            },
          },
          [Selectors.ACTIVE]: {
            borderColor: '$grayDark',
            _text: {
              color: '$grayDark',
            },
            _icon: {
              color: '$grayDark',
            },
          },
          [Selectors.FOCUS_VISIBLE]: {
            borderColor: '$alertBlue',
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: ['_text', '_icon', '_spinner'] },
};
