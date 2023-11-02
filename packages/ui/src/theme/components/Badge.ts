import { BadgeAction, BadgeSize } from '$components';
import {
  BadgeIconSize,
  Color,
  ComponentTheme,
  DescendantStyleName,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme';

export const Badge = {
  theme: {},
} satisfies ComponentTheme;

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
          backgroundColor: Color.DARK_GREY_00,
        },
      },

      size: {
        [BadgeSize.SM]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: BadgeIconSize.XXS,
            },
          },
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.XS,
            lineHeight: LineHeight.XS,
            fontWeight: FontWeight.REGULAR,
          },
        },
        [BadgeSize.MD]: {
          [DescendantStyleName.ICON]: {
            props: {
              size: BadgeIconSize.XS,
            },
          },
          [DescendantStyleName.TEXT]: {
            fontSize: FontSize.SM,
            lineHeight: LineHeight.SM,
            fontWeight: FontWeight.MEDIUM,
          },
        },
      },
    },
    defaultProps: {
      action: BadgeAction.INFO,
      size: BadgeSize.MD,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.ICON, DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<{
  action: BadgeAction;
  size: BadgeSize;
}>;

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
            color: Color.DARK_GREY_00,
          },
          [DescendantStyleName.ICON]: {
            color: Color.DARK_GREY_00,
          },
        },
      },
    },
  },
} satisfies ComponentTheme<{
  action: BadgeAction;
  size: BadgeSize;
}>;
