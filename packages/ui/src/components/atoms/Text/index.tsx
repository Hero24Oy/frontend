import { Text as GluestackText } from '@gluestack-ui/themed';
import { FC } from 'react';

import { TextVariants } from '$theme/components/Text/constants';
import { Color } from '$theme/constants';

export type TextProps = {
  children: string;
  color?: `${Color}`;
  variant?: `${TextVariants}`;
};

export const Text: FC<TextProps> = ({ children, ...restProps }) => (
  <GluestackText {...restProps}>{children}</GluestackText>
);
