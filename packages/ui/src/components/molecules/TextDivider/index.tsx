import { FC } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { HStack, Text } from '$components/atoms';

type Props = {
  children: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const TextDivider: FC<Props> = (props) => {
  const { children, style, textStyle } = props;

  return (
    <HStack style={style}>
      <Text style={textStyle}>{children}</Text>
    </HStack>
  );
};
