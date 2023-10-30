import { Color } from '../constants';

import { ComponentTheme, DescendantStyleName } from '$theme/types';

export const Card = {
  theme: {
    maxWidth: '100%',
    margin: 16,
    padding: 16,
    gap: 16,
    borderRadius: 10,
    backgroundColor: Color.GRAY_LIGHT_02,
    overflow: 'hidden',
    _text: {
      color: Color.DARK_01,
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.TEXT] },
} satisfies ComponentTheme;
