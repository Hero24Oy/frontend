import { Color, FontSize } from '../constants';
import { ComponentTheme, DescendantStyleName } from '../types';

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
      fontSize: FontSize.SMALL,
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.TEXT],
  },
} satisfies ComponentTheme;
