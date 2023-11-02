import { Color } from '../constants';

import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

export const Card = {
  theme: {
    maxWidth: '100%',
    margin: 16,
    padding: 16,
    gap: 16,
    borderRadius: 10,
    backgroundColor: Color.GREY_LIGHT_02,
    overflow: 'hidden',
    _text: {
      color: Color.DARK_00,
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.TEXT] },
} satisfies ComponentTheme;
