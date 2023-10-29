import { Color } from '../constants';
import { ComponentTheme } from '../types';

export const Menu = {
  theme: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.GRAY_02,
    backgroundColor: Color.WHITE_01,
    gap: 8,
  },
} satisfies ComponentTheme;
