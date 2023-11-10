import { ViewProps, ViewStyle } from 'react-native';

import { BadgeIconSize, BadgeSize } from '$components';
import {
  ComponentTheme,
  DescendantStyleName,
  FontSize,
  LineHeight,
  Size,
  SxValues,
} from '$theme';

export type BaseBadgeVariants = {
  size: Record<BadgeSize, SxValues<ViewStyle>>;
};

export const customBaseBadgeConfig = {
  theme: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 4,
    gap: 4,
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
    },
    defaultProps: {
      size: Size.MD,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.ICON, DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<ViewProps, BaseBadgeVariants>;
