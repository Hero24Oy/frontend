import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { PressableProps, ViewStyle } from 'react-native';

import { ButtonAction, ButtonSize, ButtonVariant } from '$components';
import {
  Color,
  Font,
  FontSize,
  FontWeight,
  IconSize,
  LineHeight,
} from '$theme/constants';
import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme, SxValues } from '$theme/types';

export type ButtonThemeVariants = {
  action: Record<`${ButtonAction}`, SxValues<ViewStyle>>;
  size: Record<`${ButtonSize}`, SxValues<ViewStyle>>;
  variant: Record<`${ButtonVariant}`, SxValues<ViewStyle>>;
};

const ButtonTheme = {
  theme: {
    gap: 8,
    _text: {
      fontFamily: Font.MAIN,
      fontWeight: FontWeight.MEDIUM,
    },
    ':focusVisible': {
      borderWidth: 2,
      borderColor: Color.BLUE_00,
    },
    variants: {
      action: {
        [ButtonAction.PRIMARY]: {
          _text: {
            color: Color.DARK_00,
            ':hover': {
              color: Color.RED_00,
            },
            ':active': {
              color: Color.DARK_GREY_00,
            },
          },
          _icon: {
            color: Color.DARK_00,
            ':hover': {
              color: Color.RED_00,
            },
            ':active': {
              color: Color.DARK_GREY_00,
            },
          },
          _spinner: {
            props: {
              color: Color.DARK_00,
            },
          },
        },
        [ButtonAction.SECONDARY]: {
          _text: {
            color: Color.DARK_00,
            ':hover': {
              color: Color.DARK_00,
            },
            ':active': {
              color: Color.DARK_GREY_00,
            },
          },
          _icon: {
            color: Color.DARK_00,
            ':hover': {
              color: Color.DARK_00,
            },
            ':active': {
              color: Color.DARK_GREY_00,
            },
          },
          _spinner: {
            props: {
              color: Color.DARK_00,
            },
          },
          ':focusVisible': {
            borderWidth: 2,
            borderColor: Color.BLUE_00,
          },
        },
        [ButtonAction.POSITIVE]: {
          _text: {
            color: Color.GREEN_00,
            ':hover': {
              color: Color.GREEN_02,
            },
            ':active': {
              color: Color.GREEN_01,
            },
          },
          _icon: {
            color: Color.GREEN_00,
            ':hover': {
              color: Color.GREEN_02,
            },
            ':active': {
              color: Color.GREEN_01,
            },
          },
        },
        [ButtonAction.NEGATIVE]: {
          _text: {
            color: Color.RED_00,
            ':hover': {
              color: Color.RED_02,
            },
            ':active': {
              color: Color.RED_01,
            },
          },
          _icon: {
            color: Color.RED_00,
            ':hover': {
              color: Color.RED_02,
            },
            ':active': {
              color: Color.RED_01,
            },
          },
        },
      },
      size: {
        [ButtonSize.XS]: {
          borderRadius: 6,
          _text: {
            lineHeight: LineHeight.XS,
          },
          _icon: {
            props: {
              size: IconSize.SM,
            },
          },
          _spinner: {
            props: {
              size: IconSize.SM,
            },
          },
        },
        [ButtonSize.SM]: {
          borderRadius: 6,
          _text: {
            lineHeight: LineHeight.SM,
          },
          _icon: {
            props: {
              size: IconSize.SM,
            },
          },
          _spinner: {
            props: {
              size: IconSize.SM,
            },
          },
        },
        [ButtonSize.MD]: {
          borderRadius: 8,
          _text: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
          },
          _icon: {
            props: {
              size: IconSize.MD,
            },
          },
          _spinner: {
            props: {
              size: IconSize.MD,
            },
          },
        },
        [ButtonSize.LG]: {
          borderRadius: 8,
          _text: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
          },
          _icon: {
            props: {
              size: IconSize.LG,
            },
          },
          _spinner: {
            props: {
              size: IconSize.LG,
            },
          },
        },
        [ButtonSize.XL]: {
          borderRadius: 10,
          _text: {
            fontSize: FontSize.MD,
            lineHeight: LineHeight.MD,
          },
          _icon: {
            props: {
              size: IconSize.LG,
            },
          },
          _spinner: {
            props: {
              size: IconSize.LG,
            },
          },
        },
      },
      variant: {
        [ButtonVariant.SOLID]: {},
        [ButtonVariant.LINK]: {
          ':active': {
            backgroundColor: Color.TRANSPARENT,
          },
          ':hover': {
            backgroundColor: Color.TRANSPARENT,
          },
        },
        [ButtonVariant.OUTLINE]: {},
      },
    },
    compoundVariants: [
      {
        action: ButtonAction.PRIMARY,
        variant: ButtonVariant.SOLID,
        value: {
          backgroundColor: Color.DARK_00,
          ':hover': {
            backgroundColor: Color.RED_00,
          },
          ':active': {
            backgroundColor: Color.DARK_GREY_00,
          },
        },
      },
      {
        action: ButtonAction.SECONDARY,
        variant: ButtonVariant.SOLID,
        value: {
          backgroundColor: Color.GREY_LIGHT_02,
          borderColor: Color.GREY_LIGHT_02,
          _text: {
            color: Color.DARK_00,
            ':active': {
              color: Color.DARK_GREY_00,
            },
            ':hover': {
              color: Color.WHITE_00,
            },
          },
          _icon: {
            props: {
              color: Color.DARK_00,
            },
            ':active': {
              props: {
                color: Color.DARK_GREY_00,
              },
            },
            ':hover': {
              props: {
                color: Color.WHITE_00,
              },
            },
          },
          _spinner: {
            props: {
              color: Color.DARK_00,
            },
          },
          ':hover': {
            backgroundColor: Color.DARK_00,
          },
          ':active': {
            backgroundColor: Color.GREY_LIGHT_01,
          },
        },
      },
      {
        action: ButtonAction.POSITIVE,
        variant: ButtonVariant.SOLID,
        value: {
          backgroundColor: Color.GREEN_00,
          ':hover': {
            backgroundColor: Color.GREEN_02,
          },
          ':active': {
            backgroundColor: Color.GREEN_01,
          },
        },
      },
      {
        action: ButtonAction.NEGATIVE,
        variant: ButtonVariant.SOLID,
        value: {
          backgroundColor: Color.RED_00,
          ':hover': {
            backgroundColor: Color.RED_02,
          },
          ':active': {
            backgroundColor: Color.RED_01,
          },
        },
      },
      {
        action: ButtonAction.PRIMARY,
        variant: ButtonVariant.OUTLINE,
        value: {
          borderWidth: 1,
          borderColor: Color.DARK_00,
          backgroundColor: Color.TRANSPARENT,
          ':hover': {
            borderColor: Color.RED_00,
          },
          ':active': {
            borderColor: Color.DARK_GREY_00,
          },
        },
      },
      {
        action: ButtonAction.SECONDARY,
        variant: ButtonVariant.OUTLINE,
        value: {
          borderWidth: 1,
          borderColor: Color.GREY_LIGHT_00,
          backgroundColor: Color.TRANSPARENT,
          _text: {
            ':focusVisible': {
              color: Color.DARK_GREY_00,
            },
          },
          ':hover': {
            borderColor: Color.DARK_00,
          },
          ':active': {
            borderColor: Color.DARK_GREY_00,
          },
        },
      },
      {
        action: ButtonAction.POSITIVE,
        variant: ButtonVariant.OUTLINE,
        value: {
          borderWidth: 1,
          borderColor: Color.GREEN_00,
          backgroundColor: Color.TRANSPARENT,
          ':hover': {
            borderColor: Color.GREEN_02,
          },
          ':active': {
            borderColor: Color.GREEN_01,
          },
        },
      },
      {
        action: ButtonAction.NEGATIVE,
        variant: ButtonVariant.OUTLINE,
        value: {
          borderWidth: 1,
          borderColor: Color.RED_00,
          backgroundColor: Color.TRANSPARENT,
          ':hover': {
            borderColor: Color.RED_02,
          },
          ':active': {
            borderColor: Color.RED_01,
          },
        },
      },
      {
        action: ButtonAction.PRIMARY,
        variant: ButtonVariant.LINK,
        value: {
          backgroundColor: Color.TRANSPARENT,
          _text: {
            color: Color.DARK_00,
          },
          _icon: {
            color: Color.DARK_00,
          },
          _spinner: {
            props: {
              color: Color.DARK_00,
            },
          },
        },
      },
      {
        action: ButtonAction.SECONDARY,
        variant: ButtonVariant.LINK,
        value: {
          backgroundColor: Color.TRANSPARENT,
          _text: {
            color: Color.DARK_00,
          },
          _icon: {
            color: Color.DARK_00,
          },
          _spinner: {
            props: {
              color: Color.DARK_00,
            },
          },
        },
      },
      {
        action: ButtonAction.POSITIVE,
        variant: ButtonVariant.LINK,
        value: {
          backgroundColor: Color.TRANSPARENT,
          _text: {
            color: Color.GREEN_00,
          },
          _icon: {
            props: {
              color: Color.GREEN_00,
            },
            ':hover': {
              props: {
                color: Color.GREEN_02,
              },
            },
            ':active': {
              props: {
                color: Color.GREEN_01,
              },
            },
          },
          _spinner: {
            props: {
              color: Color.GREEN_00,
            },
          },
        },
      },
      {
        action: ButtonAction.NEGATIVE,
        variant: ButtonVariant.LINK,
        value: {
          backgroundColor: Color.TRANSPARENT,
          _text: {
            color: Color.RED_00,
          },
          _icon: {
            color: Color.RED_00,
          },
          _spinner: {
            props: {
              color: Color.RED_00,
            },
          },
        },
      },
    ],
    defaultProps: {
      action: ButtonAction.PRIMARY,
      size: ButtonSize.LG,
      variant: ButtonVariant.SOLID,
    },
  },
  componentConfig: {
    descendantStyle: [
      DescendantStyleName.TEXT,
      DescendantStyleName.ICON,
      DescendantStyleName.SPINNER,
    ],
  },
} satisfies ComponentTheme<PressableProps, ButtonThemeVariants>;

export const Button = merge(config.components.Button, ButtonTheme);
