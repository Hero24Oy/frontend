import { SolidBadge } from './solid';

import { BadgeAction, BadgeSize } from '$components';
import { Color, ComponentTheme, DescendantStyleName } from '$theme';

export const OutlinedBadge = {
  ...SolidBadge,
  theme: {
    ...SolidBadge.theme,
    borderWidth: 1,
    variants: {
      ...SolidBadge.theme.variants,
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
  },
} satisfies ComponentTheme<{
  action: BadgeAction;
  size: BadgeSize;
}>;
