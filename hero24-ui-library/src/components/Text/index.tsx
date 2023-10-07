import { Text as TextOrigin } from '@gluestack-ui/themed';
import { FC } from 'react';

import { PropsWithChildren } from '../../types';

interface TextProps extends PropsWithChildren<string> {}

export const Text: FC<TextProps> = (props) => {
  const { children } = props;

  return <TextOrigin>{children}</TextOrigin>;
};
