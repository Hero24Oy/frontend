import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { RadioSize, RadioVariant } from '$components';
import {
  Color,
  FontSize,
  FontWeight,
  IconSize,
  LineHeight,
  Size,
} from '$theme/constants';
import { DescendantStyleName } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

const customRadioConfig = {
  theme: {
    gap: 8,
    [DescendantStyleName.TEXT]: {
      color: Color.DARK_00,
      fontWeight: FontWeight.REGULAR,
    },
    variants: {
      size: {
        [Size.SM]: {
          [DescendantStyleName.TEXT]: {
            lineHeight: LineHeight.SM,
            fontSize: FontSize.SM,
          },
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.XS / 2,
            },
          },
        },
        [Size.MD]: {
          [DescendantStyleName.TEXT]: {
            lineHeight: LineHeight.MD,
            fontSize: FontSize.MD,
          },
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.MD / 2,
            },
          },
        },
        [Size.LG]: {
          [DescendantStyleName.TEXT]: {
            lineHeight: LineHeight.LG,
            fontSize: FontSize.LG,
          },
          [DescendantStyleName.ICON]: {
            props: {
              size: IconSize.LG / 2,
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
          [DescendantStyleName.TEXT]: {
            color: Color.DARK_00,
            fontSize: FontSize.MD,
            fontWeight: FontWeight.REGULAR,
            paddingHorizontal: 12,
            paddingVertical: 8,
            lineHeight: LineHeight.SM,
          },
          ':checked': {
            backgroundColor: Color.RED_01,
            borderColor: Color.TRANSPARENT,
            [DescendantStyleName.TEXT]: {
              color: Color.WHITE_00,
            },
          },
        },
        [RadioVariant.RADIO_INDICATOR]: {},
      },
    },
  },
  componentConfig: {
    descendantStyle: [DescendantStyleName.TEXT, DescendantStyleName.ICON],
  },
} satisfies ComponentTheme<{ size: RadioSize; variant: RadioVariant }>;

export const Radio = merge(defaultConfig.components.Radio, customRadioConfig);
