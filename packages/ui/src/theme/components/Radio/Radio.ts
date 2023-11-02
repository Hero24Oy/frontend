import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';

import { RadioVariant } from '$components';
import {
  Color,
  FontSize,
  FontWeight,
  IconSize,
  LineHeight,
} from '$theme/constants';
import { DescendantStyleName, Size } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

const RadioTheme = {
  theme: {
    gap: 8,
    _text: {
      color: Color.DARK_00,
      fontWeight: FontWeight.REGULAR,
    },
    variants: {
      size: {
        [Size.SMALL]: {
          _text: {
            lineHeight: LineHeight.SM,
            fontSize: FontSize.SM,
          },
          _icon: {
            props: {
              size: IconSize.EXTRA_SMALL / 2,
            },
          },
        },
        [Size.MEDIUM]: {
          _text: {
            lineHeight: LineHeight.MD,
            fontSize: FontSize.MD,
          },
          _icon: {
            props: {
              size: IconSize.MEDIUM / 2,
            },
          },
        },
        [Size.LARGE]: {
          _text: {
            lineHeight: LineHeight.LG,
            fontSize: FontSize.LG,
          },
          _icon: {
            props: {
              size: IconSize.LARGE / 2,
            },
          },
        },
      },
      variant: {
        [RadioVariant.CHIP]: {
          borderColor: Color.GREY_02,
          borderWidth: 1,
          borderRadius: 8,
          gap: 4,
          justifyContent: 'center',
          _text: {
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
        [RadioVariant.RADIO]: {},
      },
    },
  },
  componentConfig: {
    descendantStyle: [
      DescendantStyleName.TEXT,
      DescendantStyleName.INDICATOR,
      DescendantStyleName.ICON,
    ],
  },
} satisfies ComponentTheme<ViewStyle>;

export const Radio = merge(config.components.Radio, RadioTheme);
