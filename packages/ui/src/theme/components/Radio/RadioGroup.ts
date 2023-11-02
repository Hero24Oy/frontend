import { ViewStyle } from 'react-native';

import { RadioDirection } from '$components';
import { ComponentTheme } from '$theme/types';

export const RadioGroup = {
  theme: {
    display: 'flex',
    gap: 6,
    variants: {
      itemDirection: {
        [RadioDirection.HORIZONTAL]: {
          flexDirection: 'row',
        },
        [RadioDirection.VERTICAL]: {
          flexDirection: 'column',
        },
      },
    },
  },
} satisfies ComponentTheme<ViewStyle>;
