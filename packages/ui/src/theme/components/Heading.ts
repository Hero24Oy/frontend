import { H1, H2, H3, H4, H5 } from '@expo/html-elements';
import { ViewStyle } from 'react-native';

import { HeadingVariant } from '$components/atoms/Heading/constants';
import {
  Color,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme/constants';
import { SxValues } from '$theme/types';

export type HeadingThemeVariants = {
  variant: Record<`${HeadingVariant}`, SxValues<ViewStyle>>;
};

export const Heading = {
  theme: {
    color: Color.DARK_00,
    fontWeight: FontWeight.REGULAR,

    variants: {
      variant: {
        [HeadingVariant.H1]: {
          props: { as: H1 },
          fontFamily: Font.Onest600,
          fontSize: FontSize.XXXL,
          lineHeight: LineHeight.XXXL,
        },
        [HeadingVariant.H2]: {
          props: { as: H2 },
          fontFamily: Font.Onest600,
          fontSize: FontSize.XXL,
          lineHeight: LineHeight.XXL,
        },
        [HeadingVariant.H3]: {
          props: { as: H3 },
          fontFamily: Font.Onest600,
          fontSize: FontSize.XL,
          lineHeight: LineHeight.XL,
        },
        [HeadingVariant.H4]: {
          props: { as: H4 },
          fontFamily: Font.Onest500,
          fontSize: FontSize.LG,
          lineHeight: LineHeight.LG,
        },
        [HeadingVariant.H5]: {
          props: { as: H5 },
          fontFamily: Font.Onest500,
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
        },
      },
    },
  },
};
