import { Color } from '../constants';

import { ComponentTheme, DescendantStyleName } from '$theme/types';

export const Card = {
  theme: {
    maxWidth: '100%',
    margin: 16,
    padding: 16,
    gap: 16,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Color.GRAY_LIGHT_02,
    borderColor: Color.TRANSPARENT,
    overflow: 'hidden',
    _text: {
      color: 'red',
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.TEXT] },
} satisfies ComponentTheme;
