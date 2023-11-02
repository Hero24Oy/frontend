import { BadgeIconSize, BadgeSize } from '$components';
import {
  ComponentTheme,
  DescendantStyleName,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme';

export const BaseBadge = {
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
      size: BadgeSize.MD,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.ICON, DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<{
  size: BadgeSize;
}>;
