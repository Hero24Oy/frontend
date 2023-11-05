import { Text as GluestackText } from '@gluestack-ui/themed';
import { ComponentProps, FC } from 'react';

import { TextVariant } from './types';

import { Color } from '$theme/constants';

export type TextProps = Pick<
  ComponentProps<typeof GluestackText>,
  'textAlign'
> & {
  children: string;
  color?: keyof typeof Color;
  variant?: `${TextVariant}`;
};

const DEFAULT_TEXT_COLOR: keyof typeof Color = 'DARK_GREY_00';

export const Text: FC<TextProps> = (props) => {
  const { children, color = DEFAULT_TEXT_COLOR, ...restProps } = props;

  return (
    <GluestackText color={Color[color]} {...restProps}>
      {children}
    </GluestackText>
  );
};

export * from './types';
