import { H1, H2, H3, H4, H5 } from '@expo/html-elements';

import { HeadingVariant } from '$components/atoms/Heading/constants';
import {
  Color,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
  Size,
} from '$theme/constants';

export const Heading = {
  theme: {
    color: Color.DARK_00,
    fontFamily: Font.MAIN,

    size: {
      [HeadingVariant.H1]: {
        props: { as: H1 },
        fontWeight: FontWeight.SEMI_BOLD,
        fontSize: FontSize.XXXL,
        lineHeight: LineHeight[Size.XXXL],
      },
      [HeadingVariant.H2]: {
        props: { as: H2 },
        fontWeight: FontWeight.SEMI_BOLD,
        fontSize: FontSize.XXL,
        lineHeight: LineHeight[Size.XXL],
      },
      [HeadingVariant.H3]: {
        props: { as: H3 },
        fontWeight: FontWeight.SEMI_BOLD,
        fontSize: FontSize.XL,
        lineHeight: LineHeight[Size.XL],
      },
      [HeadingVariant.H4]: {
        props: { as: H4 },
        fontWeight: FontWeight.MEDIUM,
        fontSize: FontSize.LG,
        lineHeight: LineHeight[Size.LG],
      },
      [HeadingVariant.H5]: {
        props: { as: H5 },
        fontWeight: FontWeight.MEDIUM,
        fontSize: FontSize.MD,
        lineHeight: LineHeight[Size.MD],
      },
    },
  },
};
