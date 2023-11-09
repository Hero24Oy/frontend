import { Text as GluestackText } from '@gluestack-ui/themed';
import { ComponentProps, FC } from 'react';
import { TextStyle } from 'react-native';

import { TextVariant } from './types';

export type TextProps = Pick<
  ComponentProps<typeof GluestackText>,
  'textAlign'
> & {
  children: string;
  style?: TextStyle;
  variant?: `${TextVariant}`;
};

export const Text: FC<TextProps> = (props) => {
  const { children, ...restProps } = props;

  return <GluestackText {...restProps}>{children}</GluestackText>;
};

export * from './types';
