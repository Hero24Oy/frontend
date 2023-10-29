import { Color, /* Font, */ FontSize } from '../constants';
import { ComponentTheme, DescendantStyleName } from '../types';

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
    borderColor: Color.GRAY_02,
    ':focus': {
      borderColor: Color.DARK_01,
    },
    ':invalid': {
      borderColor: Color.RED_01,
    },
    ':disabled': {
      borderColor: Color.GRAY_04,
      backgroundColor: Color.GRAY_02,
    },
    _input: {
      flex: 1,
      textAlignVertical: 'center',
      fontSize: FontSize.SMALL,
      // fontFamily: Font.MAIN,
      ':focus': {
        color: Color.DARK_01,
      },
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.INPUT],
  },
} satisfies ComponentTheme;
