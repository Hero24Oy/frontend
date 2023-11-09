import { ViewProps, ViewStyle } from 'react-native';

import { ProgressBarSize } from '$components';
import {
  Color,
  ComponentTheme,
  DescendantStyleName,
  Size,
  SxValues,
} from '$theme';

export type ProgressBarVariants = {
  size: Record<ProgressBarSize, SxValues<ViewStyle>>;
};

export const Progress = {
  theme: {
    bg: Color.GREY_LIGHT_02,
    borderRadius: 8,
    width: '100%',
    [DescendantStyleName.FILLED_TRACK]: {
      bg: Color.DARK_00,
      borderRadius: 8,
    },
    variants: {
      size: {
        [Size.SM]: {
          height: 8,
          [DescendantStyleName.FILLED_TRACK]: {
            height: 8,
          },
        },
      },
    },
    defaultProps: {
      size: Size.SM,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.FILLED_TRACK],
  },
} satisfies ComponentTheme<ViewProps, ProgressBarVariants>;
