import { merge } from 'lodash';
import { ViewProps, ViewStyle } from 'react-native';

import { BaseBadge } from './base';

import { BadgeAction } from '$components';
import { Color, ComponentTheme, DescendantStyleName, SxValues } from '$theme';

export type SolidBadgeVariants = {
  action: Record<BadgeAction, SxValues<ViewStyle>>;
};

export const SolidBadgeOverride = {
  ...BaseBadge,
  theme: {
    ...BaseBadge.theme,
    [DescendantStyleName.TEXT]: {
      color: Color.WHITE_00,
    },
    [DescendantStyleName.ICON]: {
      color: Color.WHITE_00,
    },
    variants: {
      ...BaseBadge.theme.variants,
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
      ...BaseBadge.theme.defaultProps,
      action: BadgeAction.INFO,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.ICON, DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<ViewProps, SolidBadgeVariants>;

export const SolidBadge = merge(BaseBadge, SolidBadgeOverride);
