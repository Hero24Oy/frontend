import { ViewStyle } from 'react-native';

import { RadioVariant } from '$components';
import {
  Color,
  FontSize,
  FontWeight,
  IconSize,
  LineHeight,
} from '$theme/constants';
import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

export const Radio = {
  theme: {
    variants: {
      variant: {
        [RadioVariant.CHIP]: {
          borderColor: Color.GREY_02,
          borderWidth: 1,
          borderRadius: 8,
          gap: 4,
          _text: {
            textAlign: 'center',
            color: Color.DARK_00,
            fontSize: FontSize.SM,
            fontWeight: FontWeight.REGULAR,
            paddingHorizontal: 12,
            paddingVertical: 8,
            lineHeight: LineHeight.SM,
          },
          ':checked': {
            backgroundColor: Color.RED_01,
            borderColor: Color.TRANSPARENT,
            _text: {
              color: Color.WHITE_00,
            },
          },
        },
        [RadioVariant.RADIO]: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          _icon: {
            width: IconSize.EXTRA_SMALL,
            height: IconSize.EXTRA_SMALL,
            props: {
              color: Color.BLUE_01,
            },
          },
          _indicator: {
            marginRight: 5,
            width: IconSize.LARGE,
            height: IconSize.LARGE,
            ':checked': {
              props: {
                color: Color.BLUE_01,
              },
            },
          },
        },
      },
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.TEXT, DescendantStyleName.INDICATOR],
  },
} satisfies ComponentTheme<ViewStyle>;
