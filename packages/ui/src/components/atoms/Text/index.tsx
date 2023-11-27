import { Text as GluestackText } from '@gluestack-ui/themed';
import { FC } from 'react';

import { TextContentProps, TextVariant } from './types';

import { TextStyles } from '$types';

export type TextProps = {
  children: string;
  style?: TextStyles;
  variant?: `${TextVariant}`;
} & TextContentProps;

export const Text: FC<TextProps> = (props) => {
  const { children, ...restProps } = props;

  return <GluestackText {...restProps}>{children}</GluestackText>;
};

export * from './types';
