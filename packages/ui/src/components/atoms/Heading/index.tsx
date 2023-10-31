import { Heading as GluestackHeadingOrigin } from '@gluestack-ui/themed';
import { FC } from 'react';

import { HeadingVariant } from './constants';

import { CommonStyles } from '$types';

type Props = {
  children: string;
  variant: `${HeadingVariant}`;
  style?: CommonStyles;
};

export const Heading: FC<Props> = ({ children, ...restProps }) => (
  <GluestackHeadingOrigin {...restProps}>{children}</GluestackHeadingOrigin>
);
