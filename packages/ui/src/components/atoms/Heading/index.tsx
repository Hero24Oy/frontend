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

export namespace Heading {
  export const Custom: FC<Props> = (props) => {
    const { children, style, size } = props;

    return (
      <GluestackHeadingOrigin size={convertSizeToOrigin(size)} style={style}>
        {children}
      </GluestackHeadingOrigin>
    );
  };

  export const H1: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '1' });

  export const H2: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '2' });

  export const H3: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '3' });

  export const H4: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '4' });

  export const H5: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '5' });

  export const H6: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '6' });

  export const H7: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '7' });

  export const H8: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '8' });

  export const H9: FC<Omit<Props, 'size'>> = (props) =>
    Custom({ ...props, size: '9' });
}
