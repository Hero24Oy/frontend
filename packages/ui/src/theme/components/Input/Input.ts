import { ViewProps, ViewStyle } from 'react-native';

import { Color, Font, FontSize } from '../../constants';

import { InputSize } from '$molecules';
import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme, SxValues } from '$theme/types';

export type InputThemeVariants = {
  size: Record<InputSize, SxValues<ViewStyle>>;
};

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
      backgroundColor: Color.GREY_LIGHT_03,
    },
    [DescendantStyleName.INPUT]: {
      flex: 1,
      textAlignVertical: 'center',
      fontSize: FontSize.SM,
      fontWeight: '400',
      fontFamily: Font.ONEST_REGULAR,
      ':focus': {
        color: Color.DARK_00,
      },
      ':disabled': {
        color: Color.GREY_02,
      },
      [DescendantStyleName.ICON]: {
        color: Color.DARK_00,
      },
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.INPUT, DescendantStyleName.ICON],
  },
} satisfies ComponentTheme<ViewProps>;
