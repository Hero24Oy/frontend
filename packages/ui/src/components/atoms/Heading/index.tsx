import { Heading as GluestackHeadingOrigin } from '@gluestack-ui/themed';
import { FC } from 'react';

import { HeadingVariant } from './constants';

import { TextStyles } from '$types';

type Props = {
  children: string;
  variant: `${HeadingVariant}`;
  style?: TextStyles;
};

export const Heading: FC<Props> = ({ children, ...restProps }) => (
  <GluestackHeadingOrigin {...restProps}>{children}</GluestackHeadingOrigin>
);
