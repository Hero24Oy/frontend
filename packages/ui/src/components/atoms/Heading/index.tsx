import { Heading as GluestackHeadingOrigin } from '@gluestack-ui/themed';
import { FC } from 'react';

import { HeadingSize } from './constants';

import { CommonStyles } from '$types';

type Props = {
  children: string;
  size: `${HeadingSize}`;
  style?: CommonStyles;
};

export const Heading: FC<Props> = ({ children, ...restProps }) => (
  <GluestackHeadingOrigin {...restProps}>{children}</GluestackHeadingOrigin>
);
