import { ViewProps } from 'react-native';

import { Color, FontSize } from '$theme/constants';
import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

export const MenuItem = {
  theme: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 24,
    backgroundColor: Color.GREY_LIGHT_00,
    [DescendantStyleName.TEXT]: {
      color: Color.DARK_00,
      fontSize: FontSize.SM,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<ViewProps>;
