import { H1, H2, H3, H4, H5 } from '@expo/html-elements';

import { HeadingSize } from '$components/atoms/Heading/constants';
import {
  Color,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme/constants';

export const Heading = {
  theme: {
    color: Color.DARK_00,
    fontFamily: Font.MAIN,

    size: {
      [HeadingSize.H1]: {
        props: { as: H1 },
        fontWeight: FontWeight.SEMI_BOLD,
        fontSize: FontSize.XXXL,
        lineHeight: LineHeight.XXXL,
      },
      [HeadingSize.H2]: {
        props: { as: H2 },
        fontWeight: FontWeight.SEMI_BOLD,
        fontSize: FontSize.XXL,
        lineHeight: LineHeight.XXL,
      },
      [HeadingSize.H3]: {
        props: { as: H3 },
        fontWeight: FontWeight.SEMI_BOLD,
        fontSize: FontSize.XL,
        lineHeight: LineHeight.XL,
      },
      [HeadingSize.H4]: {
        props: { as: H4 },
        fontWeight: FontWeight.MEDIUM,
        fontSize: FontSize.LG,
        lineHeight: LineHeight.LG,
      },
      [HeadingSize.H5]: {
        props: { as: H5 },
        fontWeight: FontWeight.MEDIUM,
        fontSize: FontSize.MD,
        lineHeight: LineHeight.MD,
      },
    },
  },
};
