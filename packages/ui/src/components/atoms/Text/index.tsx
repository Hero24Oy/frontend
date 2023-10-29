import { Text as GluestackText } from '@gluestack-ui/themed';
import { FC } from 'react';

import { TextSize, TextWeight } from './types';

import { Color } from '$theme';

export type TextProps = {
  children: string;
  color?: keyof typeof Color;
  size?: `${TextSize}`;
  weight?: `${TextWeight}`;
};

export const Text: FC<TextProps> = (props) => {
  const { children, size, weight, color } = props;

  return (
    <GluestackText
      size={size}
      weight={weight}
      color={Color[color || 'DARK_01']}
    >
      {children}
    </GluestackText>
  );
};

export * from './types';
