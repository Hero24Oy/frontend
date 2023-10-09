import { Text as GluestackText } from '@gluestack-ui/themed';
import { FC } from 'react';

interface TextProps {
  children: string;
}

export const Text: FC<TextProps> = (props) => {
  const { children } = props;

  return <GluestackText>{children}</GluestackText>;
};
