import { Heading as GluestackHeadingOrigin } from '@gluestack-ui/themed';
import { FC } from 'react';
import { CommonStyles } from 'types';

import { HeadingVariant } from './enums';

interface Props {
  children: string;
  variant: `${HeadingVariant}`;
  style?: CommonStyles;
}

export const Heading: FC<Props> = ({ children, ...restProps }) => (
  <GluestackHeadingOrigin {...restProps}>{children}</GluestackHeadingOrigin>
);
