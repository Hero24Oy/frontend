import { ViewStyle } from 'react-native';

import { Color, Font, FontSize } from '../../constants';

import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

export const Input = {
  theme: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.GREY_01,
    ':focus': {
      borderColor: Color.DARK_00,
    },
    ':invalid': {
      borderColor: Color.RED_01,
    },
    ':disabled': {
      borderColor: Color.GREY_01,
      backgroundColor: Color.GREY_03,
    },
    _input: {
      flex: 1,
      textAlignVertical: 'center',
      fontSize: FontSize.SM,
      fontFamily: Font.MAIN,
      ':focus': {
        color: Color.DARK_00,
      },
      _icon: {
        color: Color.DARK_00,
      },
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.INPUT, DescendantStyleName.ICON],
  },
} satisfies ComponentTheme<ViewStyle>;