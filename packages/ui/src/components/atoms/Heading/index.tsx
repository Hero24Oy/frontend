import { Heading as GluestackHeadingOrigin } from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { CommonStyles } from 'types';

import { HeadingSize } from './enum';
import { convertSizeToOrigin } from './utils';

interface Props {
  children: string;
  size: `${HeadingSize}`;
  style?: CommonStyles;
}

export const Heading: FC<Props> = (props) => {
  const { children, style, size } = props;

  return (
    <GluestackHeadingOrigin size={convertSizeToOrigin(size)} style={style}>
      {children}
    </GluestackHeadingOrigin>
  );
};
