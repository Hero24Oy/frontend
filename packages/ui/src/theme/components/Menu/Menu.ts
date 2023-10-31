import { ViewStyle } from 'react-native';

import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const Menu = {
  theme: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.GREY_02,
    backgroundColor: Color.WHITE_00,
    gap: 8,
  },
} satisfies ComponentTheme<ViewStyle>;
