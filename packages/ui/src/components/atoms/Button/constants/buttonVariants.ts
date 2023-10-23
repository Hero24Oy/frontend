import { Colors } from 'configs';
import { Selectors } from 'types';

import { ButtonVariants } from '../enums';
import { ButtonVariantsConfig } from '../types';

export const buttonVariants: Record<ButtonVariants, ButtonVariantsConfig> = {
  [ButtonVariants.SOLID]: {
    backgroundColor: Colors.DARK,
    borderColor: Colors.TRANSPARENT,
    spinnerColor: Colors.WHITE,
    sx: {
      _text: {
        color: Colors.WHITE,
      },
      _icon: {
        color: Colors.WHITE,
      },
      [Selectors.DISABLED]: {
        backgroundColor: Colors.GRAY_LIGHT_INPUT,
      },
      [Selectors.HOVER]: {
        backgroundColor: Colors.RED,
      },
      [Selectors.ACTIVE]: {
        backgroundColor: Colors.GRAY_DARK,
      },
      [Selectors.FOCUS_VISIBLE]: {
        borderColor: Colors.ALERT_BLUE,
      },
    },
  },
  [ButtonVariants.OUTLINE]: {
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.GRAY_LIGHT_INPUT,
    spinnerColor: Colors.GRAY_LIGHT_INPUT,
    sx: {
      _text: {
        color: Colors.DARK,
      },
      _icon: {
        color: Colors.DARK,
      },
      [Selectors.DISABLED]: {
        borderColor: Colors.GRAY_LIGHT_INPUT,
        backgroundColor: Colors.GRAY_LIGHT_DISABLE,
        _text: {
          color: Colors.GRAY_LIGHT_INPUT,
        },
        _icon: {
          color: Colors.GRAY_LIGHT_INPUT,
        },
      },
      [Selectors.HOVER]: {
        borderColor: 'none',
        backgroundColor: Colors.DARK,
        _text: {
          color: Colors.WHITE,
        },
        _icon: {
          color: Colors.WHITE,
        },
      },
      [Selectors.ACTIVE]: {
        borderColor: Colors.GRAY_DARK,
        backgroundColor: Colors.TRANSPARENT,
        _text: {
          color: Colors.GRAY_DARK,
        },
        _icon: {
          color: Colors.GRAY_DARK,
        },
      },
      [Selectors.FOCUS_VISIBLE]: {
        borderColor: Colors.ALERT_BLUE,
        _text: {
          color: Colors.DARK,
        },
        _icon: {
          color: Colors.DARK,
        },
      },
    },
  },
  [ButtonVariants.LINK]: {
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.TRANSPARENT,
    spinnerColor: Colors.GRAY_PLACEHOLDER,
    sx: {
      _text: {
        color: Colors.DARK,
      },
      _icon: {
        color: Colors.DARK,
      },
      [Selectors.DISABLED]: {
        _text: {
          color: Colors.GRAY_PLACEHOLDER,
        },
        _icon: {
          color: Colors.GRAY_PLACEHOLDER,
        },
      },
      [Selectors.HOVER]: {
        _text: {
          color: Colors.RED,
        },
        _icon: {
          color: Colors.RED,
        },
      },
      [Selectors.ACTIVE]: {
        borderColor: Colors.GRAY_DARK,
        _text: {
          color: Colors.GRAY_DARK,
        },
        _icon: {
          color: Colors.GRAY_DARK,
        },
      },
      [Selectors.FOCUS_VISIBLE]: {
        borderColor: Colors.ALERT_BLUE,
      },
    },
  },
};
