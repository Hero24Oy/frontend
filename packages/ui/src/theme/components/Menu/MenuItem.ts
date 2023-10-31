import { ViewStyle } from 'react-native';

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
    backgroundColor: Color.GRAY_03,
    _text: {
      color: Color.DARK_01,
      fontSize: FontSize.SM,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme<ViewStyle>;
