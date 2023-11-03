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
    [DescendantStyleName.TEXT]: {
      textDecorationLine: 'none',
      fontWeight: FontWeight.MEDIUM,
      lineHeight: LineHeight.SM,
    },
    variants: {
      size: {
        [Size.LG]: {
          width: '100%',
          paddingVertical: 11,
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.SM,
          },
          [DescendantStyleName.ICON]: {
            width: IconSize.SMALL,
            height: IconSize.SMALL,
          },
          [DescendantStyleName.SPINNER]: {
            props: {
              width: IconSize.SMALL,
              height: IconSize.SMALL,
            },
          },
        },
        [Size.MD]: {
          paddingVertical: 10,
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.SM,
          },
          [DescendantStyleName.ICON]: {
            width: IconSize.SMALL,
            height: IconSize.SMALL,
          },
          [DescendantStyleName.SPINNER]: {
            props: {
              width: IconSize.SMALL,
              height: IconSize.SMALL,
            },
          },
        },
        [Size.SM]: {
          paddingVertical: 8,
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.XS,
          },
          [DescendantStyleName.ICON]: {
            width: IconSize.EXTRA_SMALL,
            height: IconSize.EXTRA_SMALL,
          },
          [DescendantStyleName.SPINNER]: {
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
          [DescendantStyleName.TEXT]: {
            color: Color.WHITE_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.WHITE_00,
          },
          [DescendantStyleName.SPINNER]: {
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
          [DescendantStyleName.TEXT]: {
            color: Color.DARK_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.DARK_00,
          },
          [DescendantStyleName.SPINNER]: {
            props: {
              color: Color.GREY_02,
            },
          },
          ':disabled': {
            borderColor: Color.GREY_02,
            backgroundColor: Color.GREY_03,
            [DescendantStyleName.TEXT]: {
              color: Color.GREY_02,
            },
            [DescendantStyleName.ICON]: {
              color: Color.GREY_02,
            },
          },
          ':hover': {
            borderColor: 'none',
            backgroundColor: Color.DARK_00,
            [DescendantStyleName.TEXT]: {
              color: Color.WHITE_00,
            },
            [DescendantStyleName.ICON]: {
              color: Color.WHITE_00,
            },
          },
          ':active': {
            borderColor: Color.DARK_GREY_00,
            backgroundColor: Color.TRANSPARENT,
            [DescendantStyleName.TEXT]: {
              color: Color.DARK_GREY_00,
            },
            [DescendantStyleName.ICON]: {
              color: Color.DARK_GREY_00,
            },
          },
          ':focusVisible': {
            borderColor: Color.BLUE_01,
            [DescendantStyleName.TEXT]: {
              color: Color.DARK_00,
            },
            [DescendantStyleName.ICON]: {
              color: Color.DARK_00,
            },
          },
        },
        [ButtonVariant.LINK]: {
          backgroundColor: Color.TRANSPARENT,
          borderColor: Color.TRANSPARENT,
          [DescendantStyleName.TEXT]: {
            color: Color.DARK_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.DARK_00,
          },
          [DescendantStyleName.SPINNER]: {
            props: {
              color: Color.GREY_03,
            },
          },
          ':disabled': {
            [DescendantStyleName.TEXT]: {
              color: Color.GREY_03,
            },
            [DescendantStyleName.ICON]: {
              color: Color.GREY_03,
            },
          },
          ':hover': {
            [DescendantStyleName.TEXT]: {
              color: Color.RED_01,
            },
            [DescendantStyleName.ICON]: {
              color: Color.RED_01,
            },
          },
          ':active': {
            borderColor: Color.DARK_GREY_00,
            [DescendantStyleName.TEXT]: {
              color: Color.DARK_GREY_00,
            },
            [DescendantStyleName.ICON]: {
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
