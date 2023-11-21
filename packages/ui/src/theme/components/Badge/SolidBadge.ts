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

export type SolidBadgeVariants = {
  action: Record<BadgeAction, SxValues<ViewStyle>>;
  size: Record<BadgeSize, SxValues<ViewStyle>>;
};

export const SolidBadge = {
  theme: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 4,
    gap: 4,
    [DescendantStyleName.TEXT]: {
      color: Color.WHITE_00,
    },
    [DescendantStyleName.ICON]: {
      color: Color.WHITE_00,
    },
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
          backgroundColor: Color.RED_00,
        },
        [BadgeAction.WARNING]: {
          backgroundColor: Color.ORANGE_00,
        },
        [BadgeAction.SUCCESS]: {
          backgroundColor: Color.GREEN_00,
        },
        [BadgeAction.INFO]: {
          backgroundColor: Color.BLUE_00,
        },
        [BadgeAction.MUTED]: {
          [DescendantStyleName.TEXT]: {
            color: Color.DARK_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.DARK_00,
          },
          backgroundColor: Color.GREY_LIGHT_02,
        },
      },
    },
    defaultProps: {
      action: BadgeAction.INFO,
      size: Size.MD,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.ICON, DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<ViewProps, SolidBadgeVariants>;
