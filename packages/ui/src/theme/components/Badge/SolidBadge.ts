import { merge } from 'lodash';
import { ViewProps, ViewStyle } from 'react-native';

import { customBaseBadgeConfig } from './BaseBadge';

import { BadgeAction } from '$components';
import { Color, ComponentTheme, DescendantStyleName, SxValues } from '$theme';

export type SolidBadgeVariants = {
  action: Record<BadgeAction, SxValues<ViewStyle>>;
};

export const customSolidBadgeConfig = {
  theme: {
    [DescendantStyleName.TEXT]: {
      color: Color.WHITE_00,
    },
    [DescendantStyleName.ICON]: {
      color: Color.WHITE_00,
    },
    variants: {
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
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.ICON, DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<ViewProps, SolidBadgeVariants>;

export const SolidBadge = merge(customBaseBadgeConfig, customSolidBadgeConfig);
