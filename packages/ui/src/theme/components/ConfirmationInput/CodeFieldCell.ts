import { TextStyle } from 'react-native';

import { ComponentTheme } from '../../types';

import { Color } from '$theme/constants';

export const CodeFieldCell = {
  theme: {
    width: 50,
    height: 60,
    lineHeight: 55,
    fontSize: 14,
    borderRadius: 6,
    color: Color.DARK_00,
    borderWidth: 1,
    borderColor: Color.GREY_02,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
} satisfies ComponentTheme<Record<string, string>, TextStyle>;
