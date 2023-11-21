import { ViewProps, ViewStyle } from 'react-native';

import { BadgeAction, BadgeIconSize, BadgeSize } from '$components';
import {
  Color,
  ComponentTheme,
  DescendantStyleName,
  FontSize,
  LineHeight,
  Size,
  SxValues,
} from '$theme';

export type OutlinedBadgeVariants = {
  action: Record<BadgeAction, SxValues<ViewStyle>>;
  size: Record<BadgeSize, SxValues<ViewStyle>>;
};

export const OutlinedBadge = {
  theme: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 4,
    gap: 4,
    borderWidth: 1,
    variants: {
      size: {
        [Size.SM]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: BadgeIconSize.XXS,
            },
          },
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.XS,
            lineHeight: LineHeight.XS,
            fontWeight: '400',
          },
        },
        [Size.MD]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: BadgeIconSize.XS,
            },
          },
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
            fontWeight: '400',
          },
        },
      },
      action: {
        [BadgeAction.ERROR]: {
          backgroundColor: Color.RED_04,
          borderColor: Color.RED_03,
          [DescendantStyleName.TEXT]: {
            color: Color.RED_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.RED_00,
          },
        },
        [BadgeAction.WARNING]: {
          backgroundColor: Color.ORANGE_02,
          borderColor: Color.ORANGE_01,
          [DescendantStyleName.TEXT]: {
            color: Color.ORANGE_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.ORANGE_00,
          },
        },
        [BadgeAction.SUCCESS]: {
          backgroundColor: Color.GREEN_03,
          borderColor: Color.GREEN_02,
          [DescendantStyleName.TEXT]: {
            color: Color.GREEN_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.GREEN_00,
          },
        },
        [BadgeAction.INFO]: {
          backgroundColor: Color.BLUE_02,
          borderColor: Color.BLUE_01,
          [DescendantStyleName.TEXT]: {
            color: Color.BLUE_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.BLUE_00,
          },
        },
        [BadgeAction.MUTED]: {
          backgroundColor: Color.GREY_LIGHT_02,
          borderColor: Color.GREY_01,
          [DescendantStyleName.TEXT]: {
            color: Color.DARK_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.DARK_00,
          },
        },
      },
    },
    defaultProps: {
      action: BadgeAction.INFO,
      size: Size.MD,
    },
  },
} satisfies ComponentTheme<ViewProps, OutlinedBadgeVariants>;
