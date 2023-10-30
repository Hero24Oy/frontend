import { Text as GluestackText } from '@gluestack-ui/themed';
import { FC } from 'react';

import { TextSize } from './types';

import { Color } from '$theme/constants';

export type TextProps = {
  children: string;
  color?: `${Color}`;
  size?: `${TextSize}`;
};

export const Text: FC<TextProps> = ({ children, ...restProps }) => (
  <GluestackText {...restProps}>{children}</GluestackText>
);
